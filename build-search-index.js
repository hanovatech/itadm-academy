const fs = require('fs');
const path = require('path');

function walk(dir) {
  const results = [];
  for (const name of fs.readdirSync(dir, { withFileTypes: true })) {
    if (name.isDirectory()) {
      results.push(...walk(path.join(dir, name.name)));
    } else if (name.isFile() && name.name.endsWith('.html')) {
      results.push(path.join(dir, name.name));
    }
  }
  return results;
}

function extractText(html) {
  // Prefer main or article content when available
  let match = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i) || html.match(/<article[^>]*>([\s\S]*?)<\/article>/i);
  let content = match ? match[1] : (html.match(/<body[^>]*>([\s\S]*?)<\/body>/i) || [null, html])[1];

  // Remove common layout elements that may remain inside main/article
  content = content.replace(/<nav[\s\S]*?<\/nav>/gi, ' ');
  content = content.replace(/<header[\s\S]*?<\/header>/gi, ' ');
  content = content.replace(/<aside[\s\S]*?<\/aside>/gi, ' ');
  content = content.replace(/<footer[\s\S]*?<\/footer>/gi, ' ');
  content = content.replace(/<script[\s\S]*?<\/script>/gi, ' ');
  content = content.replace(/<style[\s\S]*?<\/style>/gi, ' ');

  // Strip tags and normalize whitespace
  const noTags = String(content).replace(/<[^>]+>/g, ' ');
  const normalized = noTags.replace(/\s+/g, ' ').trim();
  return normalized;
}

function extractMeta(html) {
  const titleMatch = html.match(/<title>([\s\S]*?)<\/title>/i);
  const descMatch = html.match(/<meta\s+name="description"\s+content="([\s\S]*?)"/i);
  const title = titleMatch ? titleMatch[1].trim() : '';
  const description = descMatch ? descMatch[1].trim() : '';
  return { title, description };
}

const root = path.resolve(__dirname);
const files = walk(root).filter(p => !p.includes('node_modules') && !p.includes('.git'));
const entries = files.map(file => {
  const rel = path.relative(root, file).replace(/\\/g, '/');
  const html = fs.readFileSync(file, 'utf8');
  const { title, description } = extractMeta(html);
  const bodyText = extractText(html);

  // Extract H1-H3 headings (prefer those inside main/article when available)
  const headingMatches = [];
  const scopeMatch = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i) || html.match(/<article[^>]*>([\s\S]*?)<\/article>/i) || html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  const scopeHtml = scopeMatch ? scopeMatch[1] : html;
  let m;
  const headingRe = /<(h[1-3])[^>]*>([\s\S]*?)<\/\1>/gi;
  while ((m = headingRe.exec(scopeHtml))) {
    const text = m[2].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    if (text) headingMatches.push(text);
  }

  const isCheat = /cheat(-|\s*)sheet/i.test(title + ' ' + rel);
  return { url: rel, title, description, content: bodyText, headings: headingMatches, isCheatSheet: isCheat };
});
const jsonPath = path.join(root, 'search-index-data.json');
fs.writeFileSync(jsonPath, JSON.stringify(entries, null, 2), 'utf8');
console.log('search-index-data.json generated');

// Embed into script.js by replacing the existing `siteSearchIndex` array
try {
  const scriptPath = path.join(root, 'script.js');
  let scriptSrc = fs.readFileSync(scriptPath, 'utf8');
  const replacement = 'const siteSearchIndex = ' + JSON.stringify(entries, null, 2) + ';';
  if (/const\s+siteSearchIndex\s*=\s*\[([\s\S]*?)\];/m.test(scriptSrc)) {
    scriptSrc = scriptSrc.replace(/const\s+siteSearchIndex\s*=\s*\[[\s\S]*?\];/m, replacement);
  } else if (/const\s+siteSearchIndex\s*=\s*\[[\s\S]*$/m.test(scriptSrc)) {
    // fallback: append
    scriptSrc = scriptSrc.replace(/const\s+siteSearchIndex\s*=\s*\[[\s\S]*$/m, replacement);
  } else {
    // insert at top
    scriptSrc = replacement + '\n\n' + scriptSrc;
  }
  fs.writeFileSync(scriptPath, scriptSrc, 'utf8');
  console.log('script.js updated with search index content');
} catch (e) {
  console.error('Failed to embed index into script.js:', e.message);
}
