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
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  const content = bodyMatch ? bodyMatch[1] : html;
  const noScripts = content.replace(/<script[\s\S]*?<\/script>/gi, ' ');
  const noStyles = noScripts.replace(/<style[\s\S]*?<\/style>/gi, ' ');
  const noTags = noStyles.replace(/<[^>]+>/g, ' ');
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
  return { url: rel, title, description, content: bodyText };
});

fs.writeFileSync(path.join(root, 'search-index-data.json'), JSON.stringify(entries, null, 2), 'utf8');
console.log('search-index-data.json generated');
