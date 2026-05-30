/* ===========================================================
   ITADM Academy - Interactivity
   =========================================================== */

const siteSearchIndex = [
  { url: 'search.html', title: 'Suche · itadm-academy', description: 'Suche die Lernwerkstatt nach Kapiteln, Übungen und Cheat-Sheets.' },
  { url: 'index.html', title: 'itadm-academy · Lernwerkstatt für IT-Administration', description: 'Startseite mit Modulen und Einführung zur Ausbildungsplattform.' },
  { url: 'setup.html', title: 'Setup & Downloads · ITADM Academy', description: 'Installationsanleitung und Download-Links für die VM-Umgebung.' },
  { url: 'impressum.html', title: 'Impressum · Lernwerkstatt für IT-Administration', description: 'Rechtliche Angaben und Kontaktinformationen.' },
  { url: 'datenschutz.html', title: 'Datenschutzerklärung · Lernwerkstatt für IT-Administration', description: 'Informationen zum Datenschutz und zur Verwendung von Cookies.' },
  { url: 'haftung.html', title: 'Haftungsausschluss & Lernhinweise · Lernwerkstatt für IT-Administration', description: 'Haftungshinweise und Hinweise zur Nutzung des Lernmaterials.' },
  { url: 'linux/index.html', title: 'Linux-Modul · Lernwerkstatt', description: 'Übersicht über das Linux-Modul, Lerninhalte und Struktur.' },
  { url: 'linux/tag1/index.html', title: 'Linux · Tag 1 · Übersicht · Lernwerkstatt', description: 'Tag 1 Überblick: Grundlagen, Terminal, Installation und Navigation.' },
  { url: 'linux/tag1/01-betriebssystem.html', title: 'Kap. 01 · Was ist ein Betriebssystem? · Lernwerkstatt', description: 'Grundlagen zu Betriebssystemen und ihre Rolle im IT-Alltag.' },
  { url: 'linux/tag1/02-unix-geschichte.html', title: 'Kap. 02 · Unix & Linux-Geschichte · Lernwerkstatt', description: 'Geschichte von Unix und Linux, wichtige Meilensteine und Konzepte.' },
  { url: 'linux/tag1/03-distributionen.html', title: 'Kap. 03 · Linux-Distributionen · Lernwerkstatt', description: 'Unterschiede zwischen Linux-Distributionen und ihre Einsatzgebiete.' },
  { url: 'linux/tag1/04-virtualisierung.html', title: 'Kap. 04 · Virtualisierung · Lernwerkstatt', description: 'Virtualisierungskonzepte, VMware und Setup für die Lernumgebung.' },
  { url: 'linux/tag1/05-installation.html', title: 'Kap. 05 · Rocky Linux Installation · Lernwerkstatt', description: 'Installation von Rocky Linux als Grundlage für das Linux-Modul.' },
  { url: 'linux/tag1/06-terminal.html', title: 'Kap. 06 · Terminal, Shell & Bash · Lernwerkstatt', description: 'Terminal-Einführung, Shell-Befehle und Basics für die Kommandozeile.' },
  { url: 'linux/tag1/07-navigation.html', title: 'Kap. 07 · Navigation + Lab 1.1 · Lernwerkstatt', description: 'Navigation im Dateisystem mit cd, ls, pwd und praktischen Übungen.' },
  { url: 'linux/tag1/08-dateisystem.html', title: 'Kap. 08 · Dateisystem & FHS · Lernwerkstatt', description: 'Dateisystemgrundlagen und das Filesystem Hierarchy Standard.' },
  { url: 'linux/tag1/09-dateien.html', title: 'Kap. 09 · Dateien & Ordner · Lernwerkstatt', description: 'Umgang mit Dateien und Verzeichnissen im Linux-System.' },
  { url: 'linux/tag1/10-editoren.html', title: 'Kap. 10 · Editoren + Lab 1.2 · Lernwerkstatt', description: 'Editoren, Suchen/Ersetzen und Textbearbeitung im Terminal.' },
  { url: 'linux/tag1/11-cheat-sheet.html', title: 'Kap. 11 · Cheat-Sheet & Tages-Wrap-Up · Lernwerkstatt', description: 'Praktische Zusammenfassung und Schnellreferenz für Tag 1.' },
  { url: 'linux/tag2/index.html', title: 'Linux · Tag 2 · Übersicht · Lernwerkstatt', description: 'Tag 2 Übersicht: Dateien suchen, Berechtigungen und Links.' },
  { url: 'linux/tag2/01-wildcards-redirection.html', title: 'Kap. 01 · Wildcards, Redirection & Pipes · Lernwerkstatt', description: 'Shell-Operatoren, Wildcards und Umleitungen mit grep und Pipes.' },
  { url: 'linux/tag2/02-tar-gzip.html', title: 'Kap. 02 · Archivieren mit tar & gzip · Lernwerkstatt', description: 'Erstellen und entpacken von Archiven mit tar und gzip.' },
  { url: 'linux/tag2/03-inodes-links.html', title: 'Kap. 03 · Inodes & Links · Lernwerkstatt', description: 'Inodes, Hardlinks, Symlinks und ihre Bedeutung im Dateisystem.' },
  { url: 'linux/tag2/04-berechtigungen-lesen.html', title: 'Kap. 04 · Berechtigungen lesen · Lernwerkstatt', description: 'Dateiberechtigungen verstehen und interpretieren.' },
  { url: 'linux/tag2/05-berechtigungen-setzen.html', title: 'Kap. 05 · Berechtigungen setzen · Lernwerkstatt', description: 'chmod, chown und praktische Berechtigungsaufgaben.' },
  { url: 'linux/tag2/06-suchen.html', title: 'Kap. 06 · Dateien suchen · Lernwerkstatt', description: 'Dateien suchen mit find, locate und grep.' },
  { url: 'linux/tag2/07-quiz.html', title: 'Tages-Quiz · Tag 2 · Lernwerkstatt', description: 'Quiz zur Überprüfung der Inhalte von Tag 2.' },
  { url: 'linux/tag2/08-cheat-sheet.html', title: 'Cheat-Sheet · Tag 2 · Lernwerkstatt', description: 'Kompakte Befehlsübersicht für Tag 2.' },
  { url: 'linux/tag3/index.html', title: 'Linux · Tag 3 · Übersicht · Lernwerkstatt', description: 'Tag 3 Überblick: Bootprozess, systemd, Prozesse und Skripte.' },
  { url: 'linux/tag3/01-bootprozess.html', title: 'Kap. 01 · Bootprozess, BIOS/UEFI & Bootloader · Lernwerkstatt', description: 'Bootprozess, BIOS/UEFI und wie Linux gestartet wird.' },
  { url: 'linux/tag3/02-runlevels-systemd.html', title: 'Kap. 02 · Runlevels, systemd & Targets · Lernwerkstatt', description: 'Systemd-Grundlagen, Dienste und Runlevel-Alternativen.' },
  { url: 'linux/tag3/03-prozessverwaltung.html', title: 'Kap. 03 · Prozessverwaltung · Lernwerkstatt', description: 'Prozessmanagement und Überwachung mit ps, top und systemctl.' },
  { url: 'linux/tag3/04-paketverwaltung.html', title: 'Kap. 04 · Paketverwaltung mit dnf · Lernwerkstatt', description: 'Pakete suchen, installieren und verwalten mit dnf.' },
  { url: 'linux/tag3/05-umgebungsvariablen.html', title: 'Kap. 05 · Umgebungsvariablen & PATH · Lernwerkstatt', description: 'Umgebungsvariablen, PATH und Shell-Konfiguration.' },
  { url: 'linux/tag3/06-skripte.html', title: 'Kap. 06 · Bash-Skripte schreiben · Lernwerkstatt', description: 'Bash-Skripte schreiben, ausführbar machen und testen.' },
  { url: 'linux/tag3/07-quiz.html', title: 'Quiz · Tag 3 · Lernwerkstatt', description: 'Quiz zur Überprüfung der Inhalte von Tag 3.' },
  { url: 'linux/tag3/08-cheat-sheet.html', title: 'Cheat-Sheet · Tag 3 · Kursabschluss · Lernwerkstatt', description: 'Kompakte Befehlsübersicht für Tag 3.' }
];

function getSearchPagePath() {
  const parts = window.location.pathname.split('/');
  const last = parts.pop();
  const hasFile = last && last.includes('.');
  if (!hasFile && last !== '') {
    parts.push(last);
  }
  const depth = parts.filter(segment => segment.length > 0).length;
  return `${'../'.repeat(depth)}search.html`;
}

function createSearchNav() {
  const navLinks = document.querySelector('.nav-links');
  if (!navLinks) return;

  const searchPath = getSearchPagePath();

  if (!navLinks.querySelector(`a[href="${searchPath}"]`)) {
    const searchTab = document.createElement('li');
    searchTab.innerHTML = `<a href="${searchPath}">Suche</a>`;
    navLinks.appendChild(searchTab);
  }

  if (!navLinks.querySelector('.nav-search-form')) {
    const searchForm = document.createElement('li');
    searchForm.innerHTML = `<form class="nav-search-form" action="${searchPath}" method="get"><label class="visually-hidden" for="nav-search-input">Suche</label><input id="nav-search-input" name="q" type="search" placeholder="Suchen…" autocomplete="off"></form>`;
    navLinks.appendChild(searchForm);
  }
}

function normalizeSearchText(text) {
  return String(text || '').toLowerCase();
}

function escapeRegExp(text) {
  return String(text).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function highlightSearchMatches(text, terms) {
  if (!text || terms.length === 0) return text;
  const escaped = terms
    .filter(Boolean)
    .map(escapeRegExp)
    .join('|');
  if (!escaped) return text;
  const regex = new RegExp(`(${escaped})`, 'gi');
  return String(text).replace(regex, '<mark>$1</mark>');
}

function runSiteSearch(query) {
  const terms = normalizeSearchText(query).split(/\s+/).filter(Boolean);
  if (terms.length === 0) return [];

  return siteSearchIndex
    .map(entry => {
      const haystack = normalizeSearchText(entry.title + ' ' + entry.description + ' ' + entry.url);
      let score = 0;
      for (const term of terms) {
        if (haystack.includes(term)) {
          score += 1;
          if (normalizeSearchText(entry.title).includes(term)) score += 2;
          if (entry.url.toLowerCase().includes(term)) score += 0.5;
        } else {
          return null;
        }
      }
      return score > 0 ? { ...entry, score } : null;
    })
    .filter(Boolean)
    .sort((a, b) => b.score - a.score);
}

function renderSearchResults(results, query) {
  const container = document.getElementById('search-results');
  const status = document.getElementById('search-status');
  if (!container || !status) return;

  const hitText = results.length === 1 ? 'Treffer' : 'Treffer';
  status.textContent = query
    ? `${results.length} ${hitText} für „${query}“` 
    : 'Gib oben einen Suchbegriff ein, um die Seiten der Lernwerkstatt zu durchsuchen.';

  if (!query) {
    container.innerHTML = '<div class="search-hint">Probier Stichworte wie <strong>Installation</strong>, <strong>find</strong>, <strong>systemd</strong> oder <strong>Cheat-Sheet</strong>.</div>';
    return;
  }

  if (results.length === 0) {
    container.innerHTML = '<div class="search-empty">Keine Ergebnisse gefunden. Probiere andere Stichworte oder überprüfe die Schreibweise.</div>';
    return;
  }

  const terms = normalizeSearchText(query).split(/\s+/).filter(Boolean);
  container.innerHTML = results.map(result => `
    <article class="search-card">
      <a href="${result.url}"><strong>${highlightSearchMatches(result.title, terms)}</strong></a>
      <p>${highlightSearchMatches(result.description || 'Zu dieser Seite gibt es momentan keine Beschreibung.', terms)}</p>
      <div class="search-url">${result.url}</div>
    </article>
  `).join('');
}

function initSearchPage() {
  const searchForm = document.getElementById('search-form');
  const searchInput = document.getElementById('site-search');
  if (!searchInput || !searchForm) return;

  const urlParams = new URLSearchParams(window.location.search);
  const initialQuery = urlParams.get('q') || '';
  searchInput.value = initialQuery;
  renderSearchResults(runSiteSearch(initialQuery), initialQuery);

  const updateResults = query => {
    history.replaceState({}, '', `${getCurrentSearchPath()}?q=${encodeURIComponent(query)}`);
    renderSearchResults(runSiteSearch(query), query);
  };

  searchForm.addEventListener('submit', event => {
    event.preventDefault();
    updateResults(searchInput.value.trim());
  });

  searchInput.addEventListener('input', () => {
    updateResults(searchInput.value.trim());
  });
}

function getCurrentSearchPath() {
  return window.location.pathname;
}

document.addEventListener('DOMContentLoaded', () => {

  /* -------- COPY BUTTONS -------- */
  document.querySelectorAll('.code-block').forEach(block => {
    const pre = block.querySelector('pre');
    if (!pre) return;

    const headerExists = block.querySelector('.code-header');
    if (!headerExists) return;

    const btn = headerExists.querySelector('.copy-btn');
    if (!btn) return;

    btn.addEventListener('click', async () => {
      const code = pre.innerText;
      try {
        await navigator.clipboard.writeText(code);
        const original = btn.innerHTML;
        btn.classList.add('copied');
        btn.innerHTML = '✓ Kopiert!';
        setTimeout(() => {
          btn.classList.remove('copied');
          btn.innerHTML = original;
        }, 1800);
      } catch (e) {
        btn.innerHTML = '✗ Fehler';
      }
    });
  });

  /* -------- SOLUTION TOGGLES -------- */
  document.querySelectorAll('.solution-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const solution = btn.closest('.solution');
      solution.classList.toggle('open');
      const arrow = btn.querySelector('.toggle-arrow');
      if (arrow) {
        arrow.textContent = solution.classList.contains('open') ? '▲' : '▼';
      }
    });
  });

  /* -------- QUIZ INTERACTION -------- */
  document.querySelectorAll('.quiz-card').forEach(card => {
    const options = card.querySelectorAll('.quiz-option');
    const feedback = card.querySelector('.quiz-feedback');

    options.forEach(option => {
      option.addEventListener('click', () => {
        if (card.classList.contains('answered')) return;

        const isCorrect = option.dataset.correct === 'true';

        options.forEach(opt => {
          if (opt.dataset.correct === 'true') {
            opt.classList.add('correct');
          } else if (opt === option) {
            opt.classList.add('wrong');
          }
          opt.disabled = true;
        });

        card.classList.add('answered');

        if (feedback) {
          feedback.classList.add('show');
          feedback.classList.add(isCorrect ? 'correct' : 'wrong');
        }
      });
    });
  });

  /* -------- QUIZ v2: MULTI-CHOICE STATE --------
     Single-Choice (Radio) lassen wir komplett der CSS :has()-Logik.
     Bei Multi-Choice (Checkbox) reicht CSS aber nicht: "ALLE richtigen
     UND keine falsche" laesst sich nicht generisch in :has() ausdruecken.
     Darum hier: pro Multi-Item ein Listener, der die Zustands-Klassen
     q2-state-right / q2-state-wrong setzt; die Erklaerungs-Boxen werden
     dann ueber CSS auf Basis dieser Klassen ein-/ausgeblendet. */
  document.querySelectorAll('.q2-item').forEach(item => {
    const checkboxes = item.querySelectorAll('input[type="checkbox"]');
    if (checkboxes.length === 0) return; // Single-Choice -> CSS uebernimmt

    item.classList.add('q2-multi');

    const correctValues = new Set();
    item.querySelectorAll('.q2-opt.q2-correct input').forEach(inp => {
      correctValues.add(inp.value);
    });

    const update = () => {
      let hasWrong = false;
      const checkedCorrect = new Set();
      checkboxes.forEach(cb => {
        if (!cb.checked) return;
        if (correctValues.has(cb.value)) checkedCorrect.add(cb.value);
        else hasWrong = true;
      });

      item.classList.remove('q2-state-right', 'q2-state-wrong');
      if (hasWrong) {
        item.classList.add('q2-state-wrong');
      } else if (checkedCorrect.size === correctValues.size && checkedCorrect.size > 0) {
        item.classList.add('q2-state-right');
      }
    };

    checkboxes.forEach(cb => cb.addEventListener('change', update));
  });

  /* -------- SIDEBAR HIGHLIGHTING -------- */
  const sidebarLinks = document.querySelectorAll('.sidebar-list a');
  const sections = document.querySelectorAll('[id]');

  if (sidebarLinks.length > 0 && sections.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          sidebarLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
            }
          });
        }
      });
    }, { rootMargin: '-30% 0px -60% 0px' });

    sections.forEach(section => observer.observe(section));
  }

  createSearchNav();
  initSearchPage();

  /* -------- TRAINER MODE -------- */
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('trainer') === '1') {
    document.body.classList.add('trainer-mode');
    const trainerNotes = document.querySelectorAll('.callout-trainer');
    trainerNotes.forEach(note => note.style.display = 'flex');
  } else {
    const trainerNotes = document.querySelectorAll('.callout-trainer');
    trainerNotes.forEach(note => note.style.display = 'none');
  }
});
