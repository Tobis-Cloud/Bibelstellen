// =====================================================
// BIBELSTELLEN QUIZ – App Logic
// =====================================================

(function () {
  'use strict';

  // ── State ───────────────────────────────────────────
  const state = {
    currentVerse: null,
    selectedBook: null,
    selectedChapter: null,
    score: 0,
    streak: 0,
    highscore: 0,
    answered: false,
    usedIds: [],
    filter: 'all',   // 'all' | 'nt' | 'at' | 'evangelium' | 'brief' | 'apokalypse' | 'poesie' | 'propheten'
    phase: 'start',  // 'start' | 'book' | 'chapter' | 'result'
    verseCount: 0,
  };

  // ── Load Saved Data ─────────────────────────────────
  function loadSaved() {
    try {
      const saved = JSON.parse(localStorage.getItem('bibelstellen_data') || '{}');
      state.highscore = saved.highscore || 0;
      state.filter    = saved.filter    || 'all';
    } catch (e) { /* ignore */ }
  }

  function saveData() {
    try {
      localStorage.setItem('bibelstellen_data', JSON.stringify({
        highscore: state.highscore,
        filter: state.filter,
      }));
    } catch (e) { /* ignore */ }
  }

  // ── DOM Refs ────────────────────────────────────────
  const $ = id => document.getElementById(id);

  const startScreen    = $('start-screen');
  const gameScreen     = $('game-screen');
  const verseText      = $('verse-text');
  const verseNumEl     = $('verse-num');
  const progressFill   = $('progress-fill');
  const bookSection    = $('book-section');
  const bookGrid       = $('book-grid');
  const chapterSection = $('chapter-section');
  const chapterGrid    = $('chapter-grid');
  const scoreValueEl   = $('score-value');
  const streakCountEl  = $('streak-count');
  const resultOverlay  = $('result-overlay');
  const resultIcon     = $('result-icon');
  const resultTitle    = $('result-title');
  const resultRef      = $('result-ref');
  const pointsBadge    = $('points-badge');
  const settingsPanel  = $('settings-panel');
  const panelBackdrop  = $('panel-backdrop');
  const startHighscore = $('start-highscore');
  const panelHighscore = $('panel-highscore');
  const stepBook       = $('step-book');
  const stepChapter    = $('step-chapter');

  // ── Filter Verse Pool ───────────────────────────────
  function getFilteredVerses() {
    return VERSES.filter(v => {
      switch (state.filter) {
        case 'all':         return true;
        case 'nt':          return v.testament === 'NT';
        case 'at':          return v.testament === 'AT';
        case 'evangelium':  return v.category === 'evangelium';
        case 'brief':       return v.category === 'brief';
        case 'apokalypse':  return v.category === 'apokalypse';
        case 'poesie':      return v.category === 'poesie';
        case 'propheten':   return v.category === 'propheten';
        default:            return true;
      }
    });
  }

  // ── Pick Random Verse ───────────────────────────────
  function pickVerse() {
    let pool = getFilteredVerses();
    if (pool.length === 0) pool = VERSES; // fallback

    // Avoid repeats
    const available = pool.filter(v => !state.usedIds.includes(v.id));
    if (available.length === 0) {
      state.usedIds = [];
      return pickVerse();
    }

    const verse = available[Math.floor(Math.random() * available.length)];
    state.usedIds.push(verse.id);
    return verse;
  }

  // ── Render Book Grid ────────────────────────────────
  function renderBookGrid() {
    bookGrid.innerHTML = '';

    const pool = getFilteredVerses();
    const availableBooks = [...new Set(pool.map(v => v.book))];

    const allBooks = [...new Set(VERSES.map(v => v.book))];
    const ntBooks  = [...new Set(VERSES.filter(v => v.testament === 'NT').map(v => v.book))];
    const atBooks  = [...new Set(VERSES.filter(v => v.testament === 'AT').map(v => v.book))];

    function renderGroup(label, books) {
      if (books.length === 0) return;
      const groupEl = document.createElement('div');
      groupEl.className = 'testament-group';
      groupEl.innerHTML = `<div class="testament-label">${label}</div>`;

      const grid = document.createElement('div');
      grid.className = 'book-grid';

      books.forEach(book => {
        const btn = document.createElement('button');
        btn.className = 'book-btn' + (availableBooks.includes(book) ? '' : ' not-in-filter');
        btn.textContent = book;
        btn.dataset.book = book;
        btn.addEventListener('click', () => selectBook(book));
        grid.appendChild(btn);
      });

      groupEl.appendChild(grid);
      bookGrid.appendChild(groupEl);
    }

    renderGroup('Neues Testament', ntBooks);
    renderGroup('Altes Testament', atBooks);
  }

  // ── Select Book ─────────────────────────────────────
  function selectBook(book) {
    state.selectedBook = book;

    // Highlight selected
    document.querySelectorAll('.book-btn').forEach(btn => {
      btn.classList.toggle('selected', btn.dataset.book === book);
    });

    // Show chapter section
    renderChapterGrid(book);
    chapterSection.classList.add('active');
    chapterSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    // Step indicator
    stepBook.className    = 'step done';
    stepBook.innerHTML    = `<span>✓</span> Buch`;
    stepChapter.className = 'step active';
  }

  // ── Render Chapter Grid ──────────────────────────────
  function renderChapterGrid(book) {
    chapterGrid.innerHTML = '';
    const count = CHAPTER_COUNT[book] || 30;

    for (let i = 1; i <= count; i++) {
      const btn = document.createElement('button');
      btn.className = 'chapter-btn';
      btn.textContent = i;
      btn.dataset.chapter = i;
      btn.addEventListener('click', () => selectChapter(i));
      chapterGrid.appendChild(btn);
    }
  }

  // ── Select Chapter & Evaluate ────────────────────────
  function selectChapter(chapter) {
    if (state.answered) return;
    state.answered = true;
    state.selectedChapter = chapter;

    document.querySelectorAll('.chapter-btn').forEach(btn => {
      btn.classList.toggle('selected', parseInt(btn.dataset.chapter) === chapter);
    });

    const correctBook    = state.currentVerse.book;
    const correctChapter = state.currentVerse.chapter;
    const bookCorrect    = state.selectedBook === correctBook;
    const chapCorrect    = chapter === correctChapter;

    let points = 0;
    if (bookCorrect) points += 50;
    if (chapCorrect) points += 50;

    const correct = bookCorrect && chapCorrect;

    if (correct) {
      state.score += points;
      state.streak++;
      if (state.score > state.highscore) {
        state.highscore = state.score;
        saveData();
      }
      document.querySelector('.verse-card').classList.add('correct');
    } else {
      state.streak = 0;
      document.querySelector('.verse-card').classList.add('wrong');
    }

    updateScoreDisplay();
    showResult(bookCorrect, chapCorrect, points, correctBook, correctChapter);
  }

  // ── Show Result Overlay ──────────────────────────────
  function showResult(bookCorrect, chapCorrect, points, correctBook, correctChapter) {
    const correct = bookCorrect && chapCorrect;

    if (correct) {
      resultIcon.textContent  = '🎉';
      resultTitle.textContent = 'Richtig!';
      resultTitle.className   = 'result-title correct';
    } else if (bookCorrect) {
      resultIcon.textContent  = '📖';
      resultTitle.textContent = 'Fast richtig!';
      resultTitle.className   = 'result-title wrong';
    } else {
      resultIcon.textContent  = '📍';
      resultTitle.textContent = 'Nicht ganz!';
      resultTitle.className   = 'result-title wrong';
    }

    const v = state.currentVerse;
    resultRef.innerHTML = `Die Stelle war: <strong>${correctBook} ${correctChapter},${v.verse}</strong>`;
    pointsBadge.textContent = `+${points} Punkte`;

    resultOverlay.classList.add('show');
  }

  // ── Next Verse ───────────────────────────────────────
  function nextVerse() {
    resultOverlay.classList.remove('show');
    document.querySelector('.verse-card').classList.remove('correct', 'wrong');
    chapterSection.classList.remove('active');

    state.selectedBook    = null;
    state.selectedChapter = null;
    state.answered        = false;

    stepBook.className    = 'step active';
    stepBook.innerHTML    = `<span>1</span> Buch`;
    stepChapter.className = 'step inactive';
    stepChapter.innerHTML = `<span>2</span> Kapitel`;

    loadVerse();
    renderBookGrid();
    gameScreen.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // ── Load Verse ───────────────────────────────────────
  function loadVerse() {
    state.verseCount++;
    state.currentVerse = pickVerse();
    verseText.textContent = state.currentVerse.text;
    verseNumEl.textContent = `Vers ${state.verseCount}`;

    const total = Math.min(state.usedIds.length, getFilteredVerses().length);
    const pct   = (state.usedIds.length / (getFilteredVerses().length || 100)) * 100;
    progressFill.style.width = Math.min(pct, 100) + '%';

    // Fade in animation
    verseText.style.animation = 'none';
    requestAnimationFrame(() => {
      verseText.style.animation = 'fadeInUp 0.4s ease';
    });
  }

  // ── Update Score Display ─────────────────────────────
  function updateScoreDisplay() {
    scoreValueEl.textContent = state.score;
    streakCountEl.textContent = state.streak > 0 ? `${state.streak}🔥` : '0';
    panelHighscore.textContent = state.highscore;
    startHighscore.textContent = state.highscore;
  }

  // ── Start Game ───────────────────────────────────────
  function startGame() {
    startScreen.classList.remove('active');
    startScreen.style.display = 'none';
    gameScreen.style.display  = 'flex';
    gameScreen.classList.add('active');
    state.usedIds = [];
    state.verseCount = 0;

    loadVerse();
    renderBookGrid();
    updateScoreDisplay();
  }

  // ── Settings Panel ───────────────────────────────────
  function openPanel() {
    settingsPanel.classList.add('open');
    panelBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closePanel() {
    settingsPanel.classList.remove('open');
    panelBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  // ── Filter Buttons ───────────────────────────────────
  function setFilter(value) {
    state.filter = value;
    saveData();

    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.filter === value);
    });

    if (gameScreen.classList.contains('active')) {
      renderBookGrid();
    }
  }

  // ── Swipe Gesture ────────────────────────────────────
  let touchStartX = 0;
  let touchStartY = 0;

  document.addEventListener('touchstart', e => {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
  }, { passive: true });

  document.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    const dy = Math.abs(e.changedTouches[0].clientY - touchStartY);

    // Swipe left from right edge (last 30px)
    if (touchStartX > window.innerWidth - 40 && dx < -40 && dy < 80) {
      openPanel();
    }
    // Swipe right to close panel
    if (settingsPanel.classList.contains('open') && dx > 60 && dy < 80) {
      closePanel();
    }
  }, { passive: true });

  // ── Event Listeners ──────────────────────────────────
  $('start-btn').addEventListener('click', startGame);

  $('hamburger-btn').addEventListener('click', openPanel);
  $('panel-close').addEventListener('click', closePanel);
  panelBackdrop.addEventListener('click', closePanel);

  $('next-btn').addEventListener('click', nextVerse);

  $('reset-btn').addEventListener('click', () => {
    if (confirm('Fortschritt wirklich zurücksetzen?')) {
      state.score     = 0;
      state.streak    = 0;
      state.highscore = 0;
      state.usedIds   = [];
      saveData();
      updateScoreDisplay();
      closePanel();
    }
  });

  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => setFilter(btn.dataset.filter));
  });

  // ── Init ─────────────────────────────────────────────
  loadSaved();
  updateScoreDisplay();

  // Set active filter button on load
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filter === state.filter);
  });

})();
