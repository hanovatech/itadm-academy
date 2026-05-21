# 🎓 ITADM Academy

Lernplattform für die **IT-Administrator (IHK)** Weiterbildung.
Linux, Windows, Serversysteme — hands-on und praxisnah.

powered by **HanovaTech GmbH** · [hanovatech.de](https://hanovatech.de)

## 📂 Dateistruktur

```
itadm-academy/
├── index.html               ← Startseite (Modulauswahl)
├── style.css                ← Globales Design (Terminal-Look)
├── script.js                ← Globales JavaScript (Copy, Quiz, Lösungen)
├── netlify.toml             ← Netlify-Konfiguration
├── .gitignore
│
├── linux/                   ← Linux-Modul
│   ├── index.html           ← Linux Übersicht
│   ├── tag1.html            ← Tag 1 (komplett)
│   ├── tag2.html            ← Tag 2 (Platzhalter)
│   └── tag3.html            ← Tag 3 (Platzhalter)
│
├── windows/                 ← Windows-Modul (kommt später)
└── server/                  ← Serversysteme (kommt später)
```

## 🚀 Setup (einmalig, ~15 min)

### Voraussetzungen
- GitHub-Account ✓
- Git installiert ✓
- VS Code installiert ✓

### Schritt 1: Lokal vorbereiten

```bash
cd C:\Projekte\itadm-academy
git init
git branch -M main
git add .
git commit -m "Initial commit: ITADM Academy mit Linux Tag 1"
```

### Schritt 2: GitHub-Repo erstellen
1. https://github.com/new
2. Name: `itadm-academy`
3. Public oder Private
4. **NICHT** "Add README" oder ".gitignore" ankreuzen
5. Create Repository

### Schritt 3: Lokal mit GitHub verbinden

```bash
git remote add origin https://github.com/DEIN-USERNAME/itadm-academy.git
git push -u origin main
```

### Schritt 4: Netlify verbinden
1. https://app.netlify.com/ → Login mit GitHub
2. "Add new site" → "Import an existing project"
3. GitHub → `itadm-academy` auswählen
4. Build Command: *(leer)*
5. Publish Directory: `.`
6. Deploy!

## 🔄 Täglicher Workflow

Jedes Mal, wenn du etwas änderst:

```bash
git add .
git commit -m "Beschreibung der Änderung"
git push
```

Netlify deployed automatisch in ~30 Sek.

## 🎮 Bedienung

### Für TN (normale Nutzung)
- URL aufrufen → sehen die Inhalte ohne Trainer-Notizen

### Trainer-Modus
- URL mit `?trainer=1` aufrufen
- Beispiel: `https://itadm-academy.netlify.app/linux/tag1.html?trainer=1`
- Lila Trainer-Boxen werden eingeblendet

## ✨ Features

- 📋 **Copy-Buttons** auf allen Code-Blöcken
- 🔓 **Klappbare Lösungen** für Lab-Aufgaben
- 🎯 **Interaktives Quiz** mit Sofort-Feedback
- 📑 **Sticky-Sidebar** mit Block-Navigation
- 🎓 **Trainer-Modus** über URL-Parameter
- 🌑 **Terminal-Look** (Phosphor-Grün, JetBrains Mono)
- 🖨️ **Druckbar** (optimiertes Print-CSS)
- 📱 **Responsive** (Mobile + Tablet)

## 📝 Lokales Testen

Datei `index.html` einfach im Browser doppelklicken — fertig.

Oder mit Python:
```bash
python -m http.server 8000
# dann http://localhost:8000
```

---

**Trainer:** Hashem Mahmoud
**Powered by:** HanovaTech GmbH
**License:** Kursinhalte – privat genutzt
