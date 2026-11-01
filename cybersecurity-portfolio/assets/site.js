/* Progressive enhancement only: the site is fully readable without this file. */
(function () {
  var d = document, root = d.documentElement;
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---- theme toggle (remembers the choice) ---- */
  var nav = d.querySelector('body > nav div');
  function isDark() {
    var t = root.getAttribute('data-theme');
    return t ? t === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  if (nav) {
    var tb = d.createElement('button');
    tb.className = 'theme-toggle'; tb.type = 'button';
    var paint = function () {
      tb.textContent = isDark() ? '\u2600' : '\u263E';
      tb.setAttribute('aria-label', isDark() ? 'Switch to light theme' : 'Switch to dark theme');
    };
    tb.addEventListener('click', function () {
      var next = isDark() ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
      paint();
    });
    nav.appendChild(tb); paint();
  }

  /* ---- reading progress bar + back-to-top ---- */
  var bar = d.createElement('div'); bar.className = 'progress'; bar.setAttribute('aria-hidden', 'true');
  d.body.appendChild(bar);
  var top = d.createElement('button');
  top.className = 'to-top'; top.type = 'button'; top.textContent = '\u2191'; top.setAttribute('aria-label', 'Back to top');
  top.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' }); });
  d.body.appendChild(top);
  var ticking = false;
  function onScroll() {
    if (ticking) return; ticking = true;
    requestAnimationFrame(function () {
      var h = root.scrollHeight - root.clientHeight;
      bar.style.transform = 'scaleX(' + (h > 0 ? Math.min(1, window.scrollY / h) : 0) + ')';
      top.classList.toggle('show', window.scrollY > 700);
      ticking = false;
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

  /* ---- scroll reveal ---- */
  if ('IntersectionObserver' in window && !reduce) {
    var targets = d.querySelectorAll(
      'main > h2, main > .table-wrap, main > table.gallery, main > p, main > ul, main > ol, main > pre, main > div.sourceCode, main > blockquote, main > hr, .card, .stats li, .note, .chips.tools li, .pager a');
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
    targets.forEach(function (el, i) {
      if (el.closest('.hero')) return;
      el.classList.add('reveal');
      var sib = el.parentElement ? Array.prototype.indexOf.call(el.parentElement.children, el) : 0;
      if (el.matches('.card, .stats li, .chips.tools li, .note')) el.style.setProperty('--d', Math.min(sib, 8) * 0.06 + 's');
      io.observe(el);
    });
  }

  /* ---- "on this page" table of contents (lab pages, wide screens) ---- */
  if (d.body.classList.contains('lab')) {
    var hs = d.querySelectorAll('main > h2');
    if (hs.length > 2) {
      var aside = d.createElement('aside'); aside.className = 'toc'; aside.setAttribute('aria-label', 'On this page');
      var p = d.createElement('p'); p.textContent = 'On this page'; aside.appendChild(p);
      var ol = d.createElement('ol'), links = {};
      hs.forEach(function (h) {
        if (!h.id) return;
        var li = d.createElement('li'), a = d.createElement('a');
        a.href = '#' + h.id; a.textContent = h.textContent.replace(/\s+/g, ' ').trim();
        li.appendChild(a); ol.appendChild(li); links[h.id] = a;
      });
      aside.appendChild(ol); d.body.appendChild(aside);
      if ('IntersectionObserver' in window) {
        var spy = new IntersectionObserver(function (es) {
          es.forEach(function (e) {
            if (e.isIntersecting) {
              Object.keys(links).forEach(function (k) { links[k].classList.remove('active'); });
              if (links[e.target.id]) links[e.target.id].classList.add('active');
            }
          });
        }, { rootMargin: '-15% 0px -75% 0px' });
        hs.forEach(function (h) { if (h.id) spy.observe(h); });
        window.addEventListener('scroll', function () {   /* last section can't reach the trigger zone */
          if (window.innerHeight + window.scrollY >= root.scrollHeight - 4) {
            var ids = Object.keys(links), lastId = ids[ids.length - 1];
            ids.forEach(function (k) { links[k].classList.toggle('active', k === lastId); });
          }
        }, { passive: true });
      }
    }
  }

  /* ---- click-to-zoom screenshots ---- */
  var imgs = d.querySelectorAll('main img');
  if (imgs.length) {
    var lb = d.createElement('div'); lb.className = 'lightbox'; lb.setAttribute('role', 'dialog');
    lb.setAttribute('aria-modal', 'true'); lb.setAttribute('aria-label', 'Enlarged screenshot');
    var big = d.createElement('img'), cap = d.createElement('p');
    lb.appendChild(big); lb.appendChild(cap); d.body.appendChild(lb);
    var last = null;
    var close = function () { lb.classList.remove('open'); if (last) last.focus(); };
    var open = function (img) {
      last = img; big.src = img.currentSrc || img.src; big.alt = img.alt; cap.textContent = img.alt;
      lb.classList.add('open');
    };
    imgs.forEach(function (img) {
      img.tabIndex = 0; img.setAttribute('role', 'button');
      img.setAttribute('aria-label', 'Enlarge screenshot: ' + (img.alt || ''));
      img.addEventListener('click', function () { open(img); });
      img.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(img); } });
    });
    lb.addEventListener('click', close);
    d.addEventListener('keydown', function (e) { if (e.key === 'Escape' && lb.classList.contains('open')) close(); });
  }
})();
