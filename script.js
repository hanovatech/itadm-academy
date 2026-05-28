/* ===========================================================
   ITADM Academy - Interactivity
   =========================================================== */

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
