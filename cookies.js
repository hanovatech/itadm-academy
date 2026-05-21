// cookies.js – DSGVO-konformer Cookie-Banner für itadm-academy

(function () {
  const CONSENT_KEY = 'itadm_cookie_consent';
  const CONSENT_VERSION = '1.0';
  const CONSENT_EXPIRY_DAYS = 365;

  // === Consent-Status prüfen ===
  function getConsent() {
    try {
      const raw = localStorage.getItem(CONSENT_KEY);
      if (!raw) return null;
      const data = JSON.parse(raw);
      // Ablaufzeit prüfen
      if (Date.now() > data.expires) {
        localStorage.removeItem(CONSENT_KEY);
        return null;
      }
      return data;
    } catch (e) {
      return null;
    }
  }

  function setConsent(choice) {
    const data = {
      version: CONSENT_VERSION,
      choice: choice, // { necessary: true, external: bool }
      timestamp: Date.now(),
      expires: Date.now() + (CONSENT_EXPIRY_DAYS * 24 * 60 * 60 * 1000),
    };
    localStorage.setItem(CONSENT_KEY, JSON.stringify(data));
    applyConsent(data);
    hideBanner();
  }

  // === Banner-HTML ===
  function createBanner() {
    const banner = document.createElement('div');
    banner.id = 'cookie-banner';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-label', 'Cookie-Einstellungen');
    banner.innerHTML = `
      <div class="cookie-banner-inner">
        <div class="cookie-banner-header">
          <span class="cookie-banner-prompt">$</span>
          <span class="cookie-banner-title">cookie-consent --required</span>
        </div>
        <div class="cookie-banner-content">
          <p class="cookie-banner-text">
            <strong>🍪 Cookies &amp; externe Inhalte</strong><br>
            itadm-academy verwendet ausschließlich technisch notwendige
            Cookies. Für die Code-Darstellung kann zusätzlich eine
            externe Bibliothek (Prism.js via CDN) geladen werden,
            wobei eine Verbindung zu einem externen Server aufgebaut wird.
          </p>
          <p class="cookie-banner-text">
            Du kannst selbst entscheiden, was geladen werden darf.
            Mehr Infos in unserer
            <a href="/datenschutz.html">Datenschutzerklärung</a>.
          </p>
          <div class="cookie-banner-options">
            <label class="cookie-option">
              <input type="checkbox" checked disabled>
              <span>Notwendig (immer aktiv)</span>
            </label>
            <label class="cookie-option">
              <input type="checkbox" id="consent-external">
              <span>Externe Inhalte (Prism.js CDN für Code-Highlighting)</span>
            </label>
          </div>
        </div>
        <div class="cookie-banner-actions">
          <button class="cookie-btn cookie-btn-secondary" id="consent-necessary">
            Nur notwendige
          </button>
          <button class="cookie-btn cookie-btn-secondary" id="consent-custom">
            Auswahl speichern
          </button>
          <button class="cookie-btn cookie-btn-primary" id="consent-all">
            Alle akzeptieren
          </button>
        </div>
      </div>
    `;
    return banner;
  }

  function showBanner() {
    if (document.getElementById('cookie-banner')) return;
    const banner = createBanner();
    document.body.appendChild(banner);

    // Event-Listener
    document.getElementById('consent-all').addEventListener('click', () => {
      setConsent({ necessary: true, external: true });
    });
    document.getElementById('consent-necessary').addEventListener('click', () => {
      setConsent({ necessary: true, external: false });
    });
    document.getElementById('consent-custom').addEventListener('click', () => {
      const external = document.getElementById('consent-external').checked;
      setConsent({ necessary: true, external: external });
    });

    // Pre-check toggle if previously consented
    const existing = getConsent();
    if (existing && existing.choice && existing.choice.external) {
      const cb = document.getElementById('consent-external');
      if (cb) cb.checked = true;
    }

    // Slide-in Animation
    setTimeout(() => banner.classList.add('cookie-banner-visible'), 50);
  }

  function hideBanner() {
    const banner = document.getElementById('cookie-banner');
    if (banner) {
      banner.classList.remove('cookie-banner-visible');
      setTimeout(() => banner.remove(), 300);
    }
  }

  // === Consent anwenden ===
  function applyConsent(data) {
    if (data && data.choice && data.choice.external) {
      loadExternalContent();
    }
  }

  function loadExternalContent() {
    // Prism.js nachladen, falls Code-Blöcke auf der Seite vorhanden sind
    if (document.querySelector('pre code') && !window.Prism) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css';
      document.head.appendChild(link);

      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js';
      script.defer = true;
      document.head.appendChild(script);
    }
  }

  // === Einstellungen erneut öffnen (für Footer-Link) ===
  window.openCookieSettings = function () {
    localStorage.removeItem(CONSENT_KEY);
    showBanner();
  };

  // === Initialisierung ===
  document.addEventListener('DOMContentLoaded', function () {
    const consent = getConsent();
    if (!consent) {
      showBanner();
    } else {
      applyConsent(consent);
    }
  });
})();
