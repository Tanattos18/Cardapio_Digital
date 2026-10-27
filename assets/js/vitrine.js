/* Vitrine: monta os filtros e os cards dos modelos a partir de window.MODELOS. */
(function () {
  'use strict';
  var V = window.VENDEDOR || {};
  var MODELOS = window.MODELOS || [];
  function $(s, el) { return (el || document).querySelector(s); }
  function $$(s, el) { return Array.prototype.slice.call((el || document).querySelectorAll(s)); }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function wa(txt) { return 'https://wa.me/' + String(V.whatsapp || '').replace(/\D/g, '') + '?text=' + encodeURIComponent(txt); }
  function abs(caminho) { return new URL(caminho, location.href).href; }

  $$('[data-vendedor]').forEach(function (el) { if (V[el.dataset.vendedor]) el.textContent = V[el.dataset.vendedor]; });
  $$('[data-vendedor-site]').forEach(function (el) { if (V.site) { el.querySelector('a').href = V.site; el.hidden = false; } });
  $$('[data-wa]').forEach(function (el) { el.href = wa(el.dataset.wa); el.target = '_blank'; el.rel = 'noopener'; });
  $$('[data-ano]').forEach(function (el) { el.textContent = new Date().getFullYear(); });
  $$('[data-total]').forEach(function (el) { el.textContent = MODELOS.length; });

  /* filtros */
  var nichos = [];
  MODELOS.forEach(function (m) { if (!nichos.some(function (n) { return n[0] === m.nicho; })) nichos.push([m.nicho, m.nichoNome]); });
  var ICONES = { hamburgueria: '🍔', pizzaria: '🍕', restaurante: '🍽️', espetinho: '🍢', pamonharia: '🌽' };
  var filtros = $('.filtros');
  filtros.innerHTML = [['todos', 'Todos']].concat(nichos).map(function (n, i) {
    return '<button role="tab" aria-selected="' + (i === 0) + '" data-filtro="' + n[0] + '">' + (ICONES[n[0]] ? ICONES[n[0]] + ' ' : '') + esc(n[1]) + '</button>';
  }).join('');

  /* cards */
  var grade = $('.grade');
  grade.innerHTML = MODELOS.map(function (m, i) {
    var capa = /[\/.]/.test(m.capa) ? m.capa : 'https://images.unsplash.com/photo-' + m.capa + '?w=700&q=60&auto=format&fit=crop';
    return '<article class="modelo" data-nicho="' + m.nicho + '" style="--cor:' + m.cor + ';--fundo:' + m.fundo + '">' +
      '<a class="previa" href="' + esc(m.caminho) + '" target="_blank" rel="noopener" aria-label="Abrir modelo ' + esc(m.nome) + '">' +
      '<img src="' + capa + '" alt="" loading="lazy"><iframe title="Prévia ' + esc(m.nome) + '" data-src="' + esc(m.caminho) + '?previa=1" tabindex="-1"></iframe></a>' +
      '<div class="modelo-info"><div class="modelo-tags"><span>' + (ICONES[m.nicho] || '') + ' ' + esc(m.nichoNome) + ' ' + m.numero + '</span><span class="estilo">' + esc(m.estilo) + '</span></div>' +
      '<h3>' + esc(m.nome) + '</h3><p>' + esc(m.slogan) + '</p><p class="meta">' + m.itens + ' produtos com preço · ' + (m.escuro ? 'tema escuro' : 'tema claro') + '</p>' +
      '<div class="modelo-acoes"><a class="btn btn-pri btn-sm" href="' + esc(m.caminho) + '" target="_blank" rel="noopener">Ver modelo</a>' +
      '<button class="btn btn-ghost btn-sm" data-qr="' + i + '">QR Code</button>' +
      '<a class="btn btn-wa btn-sm" target="_blank" rel="noopener" href="' + wa('Olá! Gostei do modelo "' + m.nichoNome + ' ' + m.numero + ' · ' + m.estilo + '" (' + m.nome + ') e quero um cardápio digital.') + '">Quero este</a></div></div></article>';
  }).join('');

  filtros.addEventListener('click', function (e) {
    var b = e.target.closest('[data-filtro]'); if (!b) return;
    $$('[data-filtro]', filtros).forEach(function (x) { x.setAttribute('aria-selected', x === b); });
    $$('.modelo', grade).forEach(function (card) { card.hidden = b.dataset.filtro !== 'todos' && card.dataset.nicho !== b.dataset.filtro; });
  });

  /* prévias ao vivo só quando o card aparece na tela (iframe de 390px reduzido para caber no card) */
  function escalar() {
    $$('.previa iframe').forEach(function (f) { f.style.transform = 'scale(' + f.parentNode.clientWidth / 390 + ')'; });
  }
  escalar();
  window.addEventListener('resize', escalar);
  if ('IntersectionObserver' in window && window.innerWidth > 560) {
    var io = new IntersectionObserver(function (ents) {
      ents.forEach(function (en) {
        if (!en.isIntersecting) return;
        var f = $('iframe', en.target);
        f.onload = function () { en.target.classList.add('viva'); };
        f.src = f.dataset.src; io.unobserve(en.target);
      });
    }, { rootMargin: '200px' });
    $$('.modelo', grade).forEach(function (c) { io.observe(c); });
  }

  /* QR Code */
  var modal = $('.qr-modal');
  function abrirQR(m) {
    var url = abs(m.caminho);
    $('#qr-titulo').textContent = m.nome;
    $('.qr-url', modal).textContent = url;
    $('.qr-abrir', modal).href = m.caminho;
    $('.qr-placas', modal).href = 'qrcode.html?url=' + encodeURIComponent(url) + '&nome=' + encodeURIComponent(m.nome) + '&mesas=4';
    $('.qr-aviso', modal).hidden = !/^(file:|https?:\/\/(localhost|127\.))/.test(url);
    var box = $('.qr-code', modal); box.innerHTML = '';
    if (window.QRCode) new window.QRCode(box, { text: url, width: 220, height: 220, correctLevel: window.QRCode.CorrectLevel.M });
    else box.innerHTML = '<img width="220" height="220" alt="QR Code" src="https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=' + encodeURIComponent(url) + '">';
    modal.hidden = false; $('.qr-fechar', modal).focus();
  }
  function fecharQR() { modal.hidden = true; }
  grade.addEventListener('click', function (e) { var b = e.target.closest('[data-qr]'); if (b) abrirQR(MODELOS[+b.dataset.qr]); });
  modal.addEventListener('click', function (e) { if (e.target === modal || e.target.closest('.qr-fechar')) fecharQR(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') fecharQR(); });
})();
