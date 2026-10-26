/*!
 * Cardápio Digital — motor de renderização
 * Lê window.CARDAPIO (definido no config.js de cada modelo) e monta a página inteira:
 * capa, cardápio com preços, carrinho com envio pelo WhatsApp, horários, entrega,
 * pagamento, mapa, contato, redes sociais e QR Code.
 */
(function () {
  'use strict';

  var C = window.CARDAPIO;
  if (!C) { document.body.innerHTML = '<p style="padding:2rem">config.js não encontrado.</p>'; return; }
  var V = window.VENDEDOR || {};

  var scriptSrc = document.currentScript && document.currentScript.src;
  var ROOT = scriptSrc ? new URL('../../', scriptSrc).href : '../../../';
  var params = new URLSearchParams(location.search);
  var MESA = params.get('mesa');
  var DIAS = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  var LAYOUT = C.layout || 'impacto';
  var entrega = C.entrega || {};
  var contato = C.contato || {};
  var redes = C.redes || {};
  var end = C.endereco || {};

  /* ---------- utilidades ---------- */
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function brl(n) { return (n || 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }); }
  function img(src, w) {
    if (!src) return '';
    if (/[\/.]/.test(src)) return src; // caminho local ou URL completa
    return 'https://images.unsplash.com/photo-' + src + '?w=' + (w || 600) + '&q=70&auto=format&fit=crop';
  }
  function soDigitos(s) { return String(s || '').replace(/\D/g, ''); }
  function wa(numero, texto) {
    return 'https://wa.me/' + soDigitos(numero) + (texto ? '?text=' + encodeURIComponent(texto) : '');
  }
  // No modo demonstração os pedidos de teste vão para o WhatsApp do vendedor.
  var WA_PEDIDOS = C.demo && V.whatsapp ? V.whatsapp : contato.whatsapp;
  function iniciais(nome) {
    return nome.split(/\s+/).filter(Boolean).slice(0, 2).map(function (p) { return p[0]; }).join('').toUpperCase();
  }
  function toMin(h) { var p = h.split(':'); return +p[0] * 60 + +p[1]; }
  function urlLimpa() { return location.origin + location.pathname; }
  var store = {
    get: function (k) { try { return JSON.parse(localStorage.getItem(k)); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* sem armazenamento */ } }
  };

  /* ---------- ícones ---------- */
  function svg(path, vb) {
    return '<svg class="ic" viewBox="' + (vb || '0 0 24 24') + '" aria-hidden="true">' + path + '</svg>';
  }
  var S = 'fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"';
  var ICON = {
    whatsapp: svg('<path fill="currentColor" d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35M12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.32l-.34-.2-3.57.94.95-3.48-.22-.36a9.4 9.4 0 0 1-1.44-5.02c0-5.2 4.23-9.43 9.44-9.43a9.4 9.4 0 0 1 9.43 9.44c0 5.2-4.23 9.43-9.44 9.43m8.03-17.47A11.3 11.3 0 0 0 12.05.7C5.79.7.7 5.79.7 12.04c0 2 .52 3.95 1.52 5.67L.6 23.3l5.72-1.5a11.3 11.3 0 0 0 5.42 1.38h.01c6.25 0 11.34-5.09 11.34-11.34 0-3.03-1.18-5.88-3.32-8.02"/>'),
    instagram: svg('<rect x="3" y="3" width="18" height="18" rx="5" ' + S + '/><circle cx="12" cy="12" r="4" ' + S + '/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>'),
    facebook: svg('<path fill="currentColor" d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.87.24-1.46 1.49-1.46h1.6V4.46A21 21 0 0 0 14.27 4.3c-2.3 0-3.87 1.4-3.87 3.98v2.22H7.8v3h2.6V21z"/>'),
    tiktok: svg('<path fill="currentColor" d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5 2.6 2.6 0 0 1-2.6-2.6 2.6 2.6 0 0 1 3.37-2.48V9.66a5.7 5.7 0 0 0-.77-.05 5.69 5.69 0 0 0-5.69 5.69A5.69 5.69 0 0 0 9.86 21a5.69 5.69 0 0 0 5.68-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3a4.3 4.3 0 0 1-3.24-1.48"/>'),
    youtube: svg('<path fill="currentColor" d="M21.6 7.2a2.5 2.5 0 0 0-1.77-1.77C18.27 5 12 5 12 5s-6.27 0-7.83.43A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.77 1.77C5.73 19 12 19 12 19s6.27 0 7.83-.43a2.5 2.5 0 0 0 1.77-1.77A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8M10 15V9l5.2 3z"/>'),
    ifood: svg('<path ' + S + ' d="M6 7h12l-1 13H7zM9 7V5a3 3 0 0 1 6 0v2"/>'),
    site: svg('<circle cx="12" cy="12" r="9" ' + S + '/><path ' + S + ' d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>'),
    phone: svg('<path ' + S + ' d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/>'),
    mail: svg('<rect x="3" y="5" width="18" height="14" rx="2" ' + S + '/><path ' + S + ' d="m3 7 9 6 9-6"/>'),
    pin: svg('<path ' + S + ' d="M12 22s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z"/><circle cx="12" cy="10" r="2.5" ' + S + '/>'),
    clock: svg('<circle cx="12" cy="12" r="9" ' + S + '/><path ' + S + ' d="M12 7v5l3 2"/>'),
    moto: svg('<circle cx="5.5" cy="17" r="3" ' + S + '/><circle cx="18.5" cy="17" r="3" ' + S + '/><path ' + S + ' d="M8.5 17h7l-3-7H9M15 6h3l2.5 6"/>'),
    card: svg('<rect x="2" y="5" width="20" height="14" rx="2" ' + S + '/><path ' + S + ' d="M2 10h20"/>'),
    star: svg('<path fill="currentColor" d="m12 2.5 2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3l-5.9 3.3 1.3-6.6L2.5 9.4l6.6-.8z"/>'),
    share: svg('<circle cx="18" cy="5" r="3" ' + S + '/><circle cx="6" cy="12" r="3" ' + S + '/><circle cx="18" cy="19" r="3" ' + S + '/><path ' + S + ' d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4"/>'),
    qr: svg('<path ' + S + ' d="M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h3v3h-3zM20 14v.01M14 20h.01M17 17h4v4h-4"/>'),
    cart: svg('<path ' + S + ' d="M6 6h15l-1.5 9h-12zM6 6 5 2H2"/><circle cx="9" cy="20" r="1.5" fill="currentColor"/><circle cx="18" cy="20" r="1.5" fill="currentColor"/>'),
    search: svg('<circle cx="11" cy="11" r="7" ' + S + '/><path ' + S + ' d="m20 20-4-4"/>'),
    x: svg('<path ' + S + ' d="M6 6l12 12M18 6 6 18"/>'),
    plus: svg('<path ' + S + ' d="M12 5v14M5 12h14"/>'),
    minus: svg('<path ' + S + ' d="M5 12h14"/>'),
    trash: svg('<path ' + S + ' d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/>'),
    check: svg('<path ' + S + ' d="m5 12 5 5 9-10"/>')
  };
  var REDES = [
    ['instagram', 'Instagram', function (v) { return 'https://instagram.com/' + v.replace(/^@/, ''); }, function (v) { return '@' + v.replace(/^@/, ''); }],
    ['facebook', 'Facebook', function (v) { return 'https://facebook.com/' + v; }, function (v) { return '/' + v; }],
    ['tiktok', 'TikTok', function (v) { return 'https://tiktok.com/@' + v.replace(/^@/, ''); }, function (v) { return '@' + v.replace(/^@/, ''); }],
    ['youtube', 'YouTube', function (v) { return 'https://youtube.com/@' + v.replace(/^@/, ''); }, function (v) { return '@' + v.replace(/^@/, ''); }],
    ['ifood', 'iFood', function (v) { return v; }, function () { return 'Peça pelo app'; }],
    ['site', 'Site', function (v) { return v; }, function (v) { return v.replace(/^https?:\/\//, ''); }]
  ];

  /* ---------- tema ---------- */
  var t = C.tema || {};
  var mapa = { primaria: '--pri', textoPrimaria: '--pri-ink', secundaria: '--sec', fundo: '--bg', superficie: '--surface',
    texto: '--text', suave: '--muted', linha: '--line', fonteTitulo: '--font-title', fonteTexto: '--font-body', raio: '--radius' };
  Object.keys(mapa).forEach(function (k) { if (t[k]) document.documentElement.style.setProperty(mapa[k], t[k]); });
  document.body.classList.add('layout-' + LAYOUT);
  if (t.escuro) document.body.classList.add('tema-escuro');
  // ?previa=1 é usado pelas miniaturas da vitrine
  if (params.get('previa')) document.documentElement.classList.add('previa');

  /* ---------- horários ---------- */
  function status() {
    var H = C.horarios || [];
    var d = new Date(), dia = d.getDay(), m = d.getHours() * 60 + d.getMinutes();
    var h = H[dia];
    if (h) {
      var a = toMin(h.abre), f = toMin(h.fecha);
      if (f <= a ? m >= a : m >= a && m < f) return { aberto: true, txt: 'Aberto agora · fecha às ' + h.fecha };
    }
    var y = H[(dia + 6) % 7];
    if (y && toMin(y.fecha) <= toMin(y.abre) && m < toMin(y.fecha)) return { aberto: true, txt: 'Aberto agora · fecha às ' + y.fecha };
    for (var i = 0; i < 8; i++) {
      var dd = (dia + i) % 7, hh = H[dd];
      if (hh && (i > 0 || toMin(hh.abre) > m)) {
        var quando = i === 0 ? 'hoje' : i === 1 ? 'amanhã' : DIAS[dd].toLowerCase();
        return { aberto: false, txt: 'Fechado · abre ' + quando + ' às ' + hh.abre };
      }
    }
    return { aberto: false, txt: 'Fechado' };
  }
  var ST = status();

  /* ---------- itens ---------- */
  var ITENS = {};
  (C.categorias || []).forEach(function (cat, ci) {
    cat.itens.forEach(function (it, ii) {
      it.id = ci + '-' + ii;
      it.categoria = cat.nome;
      ITENS[it.id] = it;
    });
  });
  function precoBase(it) {
    if (it.opcoes && it.opcoes.length) return Math.min.apply(null, it.opcoes.map(function (o) { return o.preco; }));
    return it.preco;
  }
  function precoHtml(it) {
    var temOp = it.opcoes && it.opcoes.length > 1;
    return '<span class="price">' +
      (it.precoAntigo ? '<s>' + brl(it.precoAntigo) + '</s>' : '') +
      (temOp ? '<small>a partir de</small>' : '') + '<b>' + brl(precoBase(it)) + '</b></span>';
  }
  function opcoesHtml(it) {
    if (!it.opcoes || it.opcoes.length < 2) return '';
    return '<p class="item-opts">' + it.opcoes.map(function (o) {
      return '<span>' + esc(o.nome) + ' <b>' + brl(o.preco) + '</b></span>';
    }).join('') + '</p>';
  }
  function tagsHtml(it) {
    if (!it.tags || !it.tags.length) return '';
    return '<span class="tags">' + it.tags.map(function (tg) {
      return '<span class="tag tag-' + esc(tg.toLowerCase().replace(/\s+/g, '-').normalize('NFD').replace(/[̀-ͯ]/g, '')) + '">' + esc(tg) + '</span>';
    }).join('') + '</span>';
  }
  function imgTag(src, w, alt) {
    return src ? '<img src="' + esc(img(src, w)) + '" alt="' + esc(alt) + '" loading="lazy" onerror="this.parentNode.classList.add(\'noimg\');this.remove()">' : '';
  }
  function itemHtml(it) {
    var busca = esc((it.nome + ' ' + (it.desc || '') + ' ' + it.categoria).toLowerCase());
    var addBtn = '<button class="add" data-add="' + it.id + '" aria-label="Adicionar ' + esc(it.nome) + '">' + ICON.plus +
      (LAYOUT === 'impacto' ? '<span>Adicionar</span>' : '') + '</button>';
    var nome = '<h4>' + esc(it.nome) + '</h4>';
    var desc = it.desc ? '<p class="desc">' + esc(it.desc) + '</p>' : '';
    if (LAYOUT === 'classico') {
      return '<article class="item" data-item="' + it.id + '" data-busca="' + busca + '">' +
        '<div class="item-line">' + nome + '<span class="dots"></span>' + precoHtml(it) + '</div>' +
        desc + opcoesHtml(it) + tagsHtml(it) + addBtn + '</article>';
    }
    if (LAYOUT === 'app') {
      return '<article class="item" data-item="' + it.id + '" data-busca="' + busca + '">' +
        '<div class="item-info">' + tagsHtml(it) + nome + desc + opcoesHtml(it) + precoHtml(it) + '</div>' +
        '<div class="item-thumb' + (it.img ? '' : ' noimg') + '">' + imgTag(it.img, 240, it.nome) + addBtn + '</div></article>';
    }
    return '<article class="item" data-item="' + it.id + '" data-busca="' + busca + '">' +
      '<div class="item-img' + (it.img ? '' : ' noimg') + '">' + imgTag(it.img, 600, it.nome) + tagsHtml(it) + '</div>' +
      '<div class="item-body">' + nome + desc + opcoesHtml(it) +
      '<div class="item-foot">' + precoHtml(it) + addBtn + '</div></div></article>';
  }

  /* ---------- seções ---------- */
  function logoHtml(cls) {
    return '<div class="' + cls + '">' + (C.logo ? '<img src="' + esc(img(C.logo, 200)) + '" alt="Logo ' + esc(C.nome) + '">' : '<span>' + esc(iniciais(C.nome)) + '</span>') + '</div>';
  }
  function acoesTopo() {
    return '<div class="top-actions">' +
      '<button class="icon-btn" data-acao="qr" aria-label="QR Code do cardápio">' + ICON.qr + '</button>' +
      '<button class="icon-btn" data-acao="share" aria-label="Compartilhar">' + ICON.share + '</button></div>';
  }
  function statusHtml() {
    return '<span class="status ' + (ST.aberto ? 'on' : 'off') + '"><i></i>' + esc(ST.txt) + '</span>';
  }
  function chips() {
    var c = [];
    if (C.avaliacao) c.push(ICON.star + '<b>' + String(C.avaliacao.nota).replace('.', ',') + '</b> <span>(' + C.avaliacao.total + ' avaliações)</span>');
    if (entrega.tempo) c.push(ICON.clock + esc(entrega.tempo));
    if (entrega.taxa != null) c.push(ICON.moto + (entrega.taxa ? 'Entrega ' + brl(entrega.taxa) : 'Entrega grátis'));
    if (entrega.pedidoMinimo) c.push(ICON.cart + 'Mínimo ' + brl(entrega.pedidoMinimo));
    return '<ul class="chips">' + c.map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ul>';
  }
  function ctas() {
    return '<div class="hero-ctas"><a href="#cardapio" class="btn btn-pri">Ver cardápio</a>' +
      '<a href="' + wa(WA_PEDIDOS, 'Olá, ' + C.nome + '! Vim pelo cardápio digital.') + '" target="_blank" rel="noopener" class="btn btn-ghost">' + ICON.whatsapp + 'WhatsApp</a></div>';
  }
  function heroHtml() {
    var capa = img(C.capa, 1600);
    if (LAYOUT === 'classico') {
      return '<header class="hero">' + acoesTopo() + logoHtml('logo') +
        (C.chamada ? '<p class="eyebrow">' + esc(C.chamada) + '</p>' : '') +
        '<h1>' + esc(C.nome) + '</h1><p class="slogan">' + esc(C.slogan) + '</p>' + statusHtml() + ctas() + chips() +
        '</header>' + (capa ? '<figure class="hero-img"><img src="' + esc(capa) + '" alt=""></figure>' : '');
    }
    if (LAYOUT === 'app') {
      return '<header class="hero"><div class="cover" style="background-image:url(\'' + esc(capa) + '\')">' + acoesTopo() + '</div>' +
        '<div class="profile">' + logoHtml('logo') + '<div><h1>' + esc(C.nome) + '</h1><p class="slogan">' + esc(C.slogan) + '</p>' +
        statusHtml() + '</div></div>' + chips() + '</header>';
    }
    return '<header class="hero" style="background-image:linear-gradient(180deg,rgba(0,0,0,.35),rgba(0,0,0,.85)),url(\'' + esc(capa) + '\')">' +
      '<nav class="topbar">' + logoHtml('logo') + '<span class="brand">' + esc(C.nome) + '</span>' + acoesTopo() + '</nav>' +
      '<div class="hero-inner">' + statusHtml() + (C.chamada ? '<p class="eyebrow">' + esc(C.chamada) + '</p>' : '') +
      '<h1>' + esc(C.nome) + '</h1><p class="slogan">' + esc(C.slogan) + '</p>' + ctas() + chips() + '</div></header>';
  }
  function promoHtml() {
    if (!C.promo) return '';
    return '<section class="promo"><span class="promo-badge">' + esc(C.promo.selo || 'Promoção') + '</span><div><h3>' + esc(C.promo.titulo) +
      '</h3><p>' + esc(C.promo.texto) + '</p></div></section>';
  }
  function menuHtml() {
    var cats = C.categorias || [];
    return '<section id="cardapio" class="menu">' +
      '<div class="menu-head"><h2>Cardápio</h2><label class="search">' + ICON.search +
      '<input type="search" placeholder="Buscar no cardápio..." aria-label="Buscar no cardápio"></label></div>' +
      '<nav class="cat-nav" aria-label="Categorias">' + cats.map(function (c, i) {
        return '<a href="#cat-' + i + '" data-cat="' + i + '">' + (c.icone ? c.icone + ' ' : '') + esc(c.nome) + '</a>';
      }).join('') + '</nav>' +
      cats.map(function (c, i) {
        return '<div class="cat" id="cat-' + i + '"><h3>' + (c.icone ? '<span class="cat-ic">' + c.icone + '</span>' : '') + esc(c.nome) + '</h3>' +
          (c.desc ? '<p class="cat-desc">' + esc(c.desc) + '</p>' : '') +
          '<div class="items">' + c.itens.map(itemHtml).join('') + '</div></div>';
      }).join('') +
      '<p class="no-results" hidden>Nenhum item encontrado.</p></section>';
  }
  function sobreHtml() {
    if (!C.sobre) return '';
    var gal = (C.galeria || []).map(function (g) { return '<figure>' + imgTag(g, 500, '') + '</figure>'; }).join('');
    return '<section id="sobre" class="sobre"><div class="sobre-txt"><h2>Sobre nós</h2><p>' + esc(C.sobre) + '</p>' +
      (C.diferenciais ? '<ul class="diferenciais">' + C.diferenciais.map(function (d) { return '<li>' + ICON.check + esc(d) + '</li>'; }).join('') + '</ul>' : '') +
      '</div>' + (gal ? '<div class="galeria">' + gal + '</div>' : '') + '</section>';
  }
  function infoHtml() {
    var H = C.horarios || [], hoje = new Date().getDay();
    var tabela = DIAS.map(function (d, i) {
      var h = H[i];
      return '<tr' + (i === hoje ? ' class="hoje"' : '') + '><td>' + d + (i === hoje ? ' <em>hoje</em>' : '') + '</td><td>' +
        (h ? h.abre + ' – ' + h.fecha : 'Fechado') + '</td></tr>';
    }).join('');
    var ent = [];
    if (entrega.tempo) ent.push(['Tempo médio', entrega.tempo]);
    if (entrega.taxa != null) ent.push(['Taxa de entrega', entrega.taxa ? brl(entrega.taxa) : 'Grátis']);
    if (entrega.gratisAcima) ent.push(['Frete grátis', 'acima de ' + brl(entrega.gratisAcima)]);
    if (entrega.pedidoMinimo) ent.push(['Pedido mínimo', brl(entrega.pedidoMinimo)]);
    if (entrega.area) ent.push(['Área de entrega', entrega.area]);
    ent.push(['Retirada no local', entrega.retirada === false ? 'Não' : 'Sim']);
    if (C.mesas) ent.push(['Consumo no local', 'Sim, peça pelo QR Code da mesa']);
    return '<section id="info" class="info-grid">' +
      '<div class="card"><h3>' + ICON.clock + 'Horário de funcionamento</h3>' + statusHtml() + '<table>' + tabela + '</table></div>' +
      '<div class="card"><h3>' + ICON.moto + 'Entrega e retirada</h3><dl>' + ent.map(function (e) {
        return '<div><dt>' + esc(e[0]) + '</dt><dd>' + esc(e[1]) + '</dd></div>';
      }).join('') + '</dl>' +
      '<h3>' + ICON.card + 'Formas de pagamento</h3><div class="pay-tags">' + (C.pagamentos || []).map(function (p) {
        return '<span>' + esc(p) + '</span>';
      }).join('') + '</div></div></section>';
  }
  function enderecoTxt() {
    return [end.rua, end.bairro, [end.cidade, end.uf].filter(Boolean).join(' - '), end.cep].filter(Boolean).join(', ');
  }
  function localHtml() {
    if (!end.rua) return '';
    var q = encodeURIComponent(end.mapa || enderecoTxt());
    return '<section id="local" class="local"><div class="local-txt"><h2>Onde estamos</h2><address>' + ICON.pin + esc(enderecoTxt()) + '</address>' +
      (end.referencia ? '<p class="ref">' + esc(end.referencia) + '</p>' : '') +
      '<a class="btn btn-pri" target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query=' + q + '">Como chegar</a></div>' +
      '<iframe title="Mapa" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://maps.google.com/maps?q=' + q + '&z=15&output=embed"></iframe></section>';
  }
  function contatoHtml() {
    var lista = [];
    if (contato.whatsapp) lista.push(['<a href="' + wa(WA_PEDIDOS, 'Olá, ' + C.nome + '!') + '" target="_blank" rel="noopener">', ICON.whatsapp, 'WhatsApp', contato.whatsappTexto || contato.telefone || '']);
    if (contato.telefone) lista.push(['<a href="tel:+' + soDigitos(contato.telefoneFixo || contato.whatsapp) + '">', ICON.phone, 'Telefone', contato.telefoneFixoTexto || contato.telefone]);
    if (contato.email) lista.push(['<a href="mailto:' + esc(contato.email) + '">', ICON.mail, 'E-mail', contato.email]);
    var sociais = REDES.filter(function (r) { return redes[r[0]]; }).map(function (r) {
      return '<a class="social social-' + r[0] + '" href="' + esc(r[2](redes[r[0]])) + '" target="_blank" rel="noopener">' + ICON[r[0]] +
        '<span><b>' + r[1] + '</b><small>' + esc(r[3](redes[r[0]])) + '</small></span></a>';
    }).join('');
    return '<section id="contato" class="contato"><h2>Fale com a gente</h2><div class="contact-list">' + lista.map(function (l) {
      return l[0] + l[1] + '<span><b>' + l[2] + '</b><small>' + esc(l[3]) + '</small></span></a>';
    }).join('') + '</div>' + (sociais ? '<h3>Siga nas redes</h3><div class="socials">' + sociais + '</div>' : '') + '</section>';
  }
  function rodapeHtml() {
    return '<footer class="rodape">' + logoHtml('logo logo-sm') + '<p><b>' + esc(C.nome) + '</b>' +
      (C.cnpj ? '<br><small>CNPJ ' + esc(C.cnpj) + '</small>' : '') + '</p>' +
      '<button class="btn btn-ghost btn-sm" data-acao="qr">' + ICON.qr + 'QR Code do cardápio</button>' +
      '<p class="creditos">© ' + new Date().getFullYear() + ' ' + esc(C.nome) + ' · Cardápio digital' +
      (V.nome ? ' por <a href="' + wa(V.whatsapp, 'Olá! Vi o cardápio digital da ' + C.nome + ' e quero um para o meu negócio.') + '" target="_blank" rel="noopener">' + esc(V.nome) + '</a>' : '') +
      '</p></footer>';
  }
  function demoHtml() {
    if (!C.demo) return '';
    return '<div class="demo-bar"><span>Modelo de demonstração <b>' + esc(C.modelo || '') + '</b></span>' +
      '<a href="' + ROOT + '">← Todos os modelos</a>' +
      '<a class="demo-cta" target="_blank" rel="noopener" href="' + wa(V.whatsapp, 'Olá! Gostei do modelo "' + (C.modelo || C.nome) + '" e quero um cardápio digital para o meu negócio.') + '">Quero este modelo</a></div>';
  }
  function mesaHtml() {
    return MESA ? '<div class="mesa-bar">Você está na <b>mesa ' + esc(MESA) + '</b> · seu pedido vai direto para o atendimento</div>' : '';
  }

  /* ---------- montagem ---------- */
  var app = document.getElementById('app') || document.body;
  app.innerHTML = demoHtml() + mesaHtml() + heroHtml() + '<main>' + promoHtml() + menuHtml() + sobreHtml() + infoHtml() + localHtml() + contatoHtml() + '</main>' +
    rodapeHtml() +
    '<a class="fab-wa" href="' + wa(WA_PEDIDOS, 'Olá, ' + C.nome + '!') + '" target="_blank" rel="noopener" aria-label="WhatsApp">' + ICON.whatsapp + '</a>' +
    '<button class="cart-bar" data-acao="carrinho" hidden><span class="cart-count">0</span><span>Ver pedido</span><b class="cart-total"></b></button>' +
    '<div class="overlay" hidden></div><div class="modal" role="dialog" aria-modal="true" hidden></div>' +
    '<aside class="drawer" role="dialog" aria-modal="true" aria-label="Seu pedido" hidden></aside><div class="toast" hidden></div>';

  /* ---------- carrinho ---------- */
  var KEY = 'cardapio:' + location.pathname;
  var carrinho = store.get(KEY) || [];
  var form = store.get(KEY + ':cliente') || {};
  function salvar() { store.set(KEY, carrinho); }
  function subtotal() { return carrinho.reduce(function (s, l) { return s + l.preco * l.qtd; }, 0); }
  function taxaAtual() {
    if (form.tipo !== 'entrega' || !entrega.taxa) return 0;
    if (entrega.gratisAcima && subtotal() >= entrega.gratisAcima) return 0;
    return entrega.taxa;
  }
  function atualizarBarra() {
    var n = carrinho.reduce(function (s, l) { return s + l.qtd; }, 0);
    var bar = $('.cart-bar');
    bar.hidden = !n;
    document.body.classList.toggle('tem-carrinho', !!n);
    $('.cart-count', bar).textContent = n;
    $('.cart-total', bar).textContent = brl(subtotal());
  }
  function adicionar(it, opcao, adicionais, obs, qtd) {
    var preco = (opcao ? opcao.preco : it.preco) + adicionais.reduce(function (s, a) { return s + a.preco; }, 0);
    var chave = [it.id, opcao && opcao.nome, adicionais.map(function (a) { return a.nome; }).join(','), obs].join('|');
    var linha = carrinho.filter(function (l) { return l.chave === chave; })[0];
    if (linha) linha.qtd += qtd;
    else carrinho.push({ chave: chave, nome: it.nome, opcao: opcao && opcao.nome, adicionais: adicionais.map(function (a) { return a.nome; }), obs: obs, preco: preco, qtd: qtd });
    salvar(); atualizarBarra();
    toast(qtd + 'x ' + it.nome + ' adicionado');
  }

  function $(s, el) { return (el || document).querySelector(s); }
  function $$(s, el) { return Array.prototype.slice.call((el || document).querySelectorAll(s)); }
  var overlay = $('.overlay'), modal = $('.modal'), drawer = $('.drawer');
  var ultimoFoco = null;
  function abrir(el) {
    ultimoFoco = document.activeElement;
    overlay.hidden = false; el.hidden = false; document.body.classList.add('travado');
    requestAnimationFrame(function () { el.classList.add('aberto'); overlay.classList.add('aberto'); });
    var f = $('button, input, select, textarea', el); if (f) f.focus({ preventScroll: true });
  }
  function fechar() {
    [modal, drawer].forEach(function (el) { el.classList.remove('aberto'); el.hidden = true; });
    overlay.classList.remove('aberto'); overlay.hidden = true; document.body.classList.remove('travado');
    if (ultimoFoco) ultimoFoco.focus({ preventScroll: true });
  }
  var toastTimer;
  function toast(msg) {
    var el = $('.toast'); el.textContent = msg; el.hidden = false; el.classList.add('show');
    clearTimeout(toastTimer); toastTimer = setTimeout(function () { el.classList.remove('show'); el.hidden = true; }, 2200);
  }

  function abrirItem(it) {
    var temOp = it.opcoes && it.opcoes.length;
    modal.innerHTML =
      '<button class="close" data-acao="fechar" aria-label="Fechar">' + ICON.x + '</button>' +
      (it.img ? '<div class="modal-img">' + imgTag(it.img, 900, it.nome) + '</div>' : '') +
      '<div class="modal-body">' + tagsHtml(it) + '<h3>' + esc(it.nome) + '</h3>' + (it.desc ? '<p class="desc">' + esc(it.desc) + '</p>' : '') +
      (temOp ? '<fieldset><legend>' + esc(it.opcoesTitulo || 'Escolha uma opção') + ' <em>obrigatório</em></legend>' + it.opcoes.map(function (o, i) {
        return '<label class="opt"><input type="radio" name="op" value="' + i + '"' + (i === 0 ? ' checked' : '') + '><span>' + esc(o.nome) + '</span><b>' + brl(o.preco) + '</b></label>';
      }).join('') + '</fieldset>' : '') +
      (it.adicionais && it.adicionais.length ? '<fieldset><legend>Adicionais <em>opcional</em></legend>' + it.adicionais.map(function (a, i) {
        return '<label class="opt"><input type="checkbox" name="ad" value="' + i + '"><span>' + esc(a.nome) + '</span><b>+ ' + brl(a.preco) + '</b></label>';
      }).join('') + '</fieldset>' : '') +
      '<label class="obs"><span>Alguma observação?</span><textarea rows="2" maxlength="140" placeholder="Ex.: sem cebola, ponto da carne..."></textarea></label>' +
      '</div><div class="modal-foot"><div class="qty"><button data-q="-1" aria-label="Diminuir">' + ICON.minus + '</button><span>1</span><button data-q="1" aria-label="Aumentar">' + ICON.plus + '</button></div>' +
      '<button class="btn btn-pri btn-add">Adicionar <b></b></button></div>';
    var qtd = 1;
    function calc() {
      var op = temOp ? it.opcoes[+$('input[name=op]:checked', modal).value] : null;
      var ads = $$('input[name=ad]:checked', modal).map(function (c) { return it.adicionais[+c.value]; });
      var unit = (op ? op.preco : it.preco) + ads.reduce(function (s, a) { return s + a.preco; }, 0);
      $('.btn-add b', modal).textContent = brl(unit * qtd);
      return { op: op, ads: ads };
    }
    modal.oninput = calc;
    modal.onclick = function (e) {
      var q = e.target.closest('[data-q]');
      if (q) { qtd = Math.max(1, qtd + +q.dataset.q); $('.qty span', modal).textContent = qtd; calc(); }
      if (e.target.closest('.btn-add')) {
        var r = calc(); adicionar(it, r.op, r.ads, $('textarea', modal).value.trim(), qtd); fechar();
      }
    };
    calc(); abrir(modal);
  }

  function renderCarrinho() {
    if (!form.tipo) form.tipo = MESA ? 'mesa' : 'entrega';
    var tipos = [['entrega', 'Entrega'], ['retirada', 'Retirar no local']];
    if (entrega.retirada === false) tipos.pop();
    if (MESA || C.mesas) tipos.push(['mesa', 'Na mesa']);
    var sub = subtotal(), taxa = taxaAtual(), total = sub + taxa;
    var minimoFalta = form.tipo === 'entrega' && entrega.pedidoMinimo && sub < entrega.pedidoMinimo;
    drawer.innerHTML =
      '<div class="drawer-head"><h3>' + ICON.cart + 'Seu pedido</h3><button class="close" data-acao="fechar" aria-label="Fechar">' + ICON.x + '</button></div>' +
      '<div class="drawer-body">' +
      (ST.aberto ? '' : '<p class="aviso">' + esc(ST.txt) + '. Você pode enviar o pedido e ele será respondido assim que abrirmos.</p>') +
      (carrinho.length ? '<ul class="linhas">' + carrinho.map(function (l, i) {
        return '<li><div><b>' + esc(l.nome) + (l.opcao ? ' <small>(' + esc(l.opcao) + ')</small>' : '') + '</b>' +
          (l.adicionais.length ? '<small>+ ' + esc(l.adicionais.join(', ')) + '</small>' : '') +
          (l.obs ? '<small>Obs.: ' + esc(l.obs) + '</small>' : '') + '<span class="lp">' + brl(l.preco * l.qtd) + '</span></div>' +
          '<div class="qty"><button data-l="' + i + '" data-d="-1" aria-label="Diminuir">' + (l.qtd === 1 ? ICON.trash : ICON.minus) + '</button><span>' + l.qtd +
          '</span><button data-l="' + i + '" data-d="1" aria-label="Aumentar">' + ICON.plus + '</button></div></li>';
      }).join('') + '</ul>' : '<p class="vazio">Seu carrinho está vazio.</p>') +
      '<form class="checkout" novalidate>' +
      '<div class="seg">' + tipos.map(function (tp) {
        return '<label><input type="radio" name="tipo" value="' + tp[0] + '"' + (form.tipo === tp[0] ? ' checked' : '') + '><span>' + tp[1] + '</span></label>';
      }).join('') + '</div>' +
      '<label><span>Seu nome</span><input name="nome" required autocomplete="name" value="' + esc(form.nome) + '"></label>' +
      (form.tipo === 'entrega' ? '<label><span>Endereço completo</span><input name="endereco" required autocomplete="street-address" placeholder="Rua, número, bairro" value="' + esc(form.endereco) + '"></label>' +
        '<label><span>Ponto de referência</span><input name="referencia" value="' + esc(form.referencia) + '"></label>' : '') +
      (form.tipo === 'mesa' ? '<label><span>Número da mesa</span><input name="mesa" required inputmode="numeric" value="' + esc(MESA || form.mesa) + '"></label>' : '') +
      '<label><span>Forma de pagamento</span><select name="pagamento">' + (C.pagamentos || ['Pix', 'Cartão', 'Dinheiro']).map(function (p) {
        return '<option' + (form.pagamento === p ? ' selected' : '') + '>' + esc(p) + '</option>';
      }).join('') + '</select></label>' +
      (/dinheiro/i.test(form.pagamento || '') ? '<label><span>Troco para quanto?</span><input name="troco" inputmode="decimal" placeholder="Ex.: 100" value="' + esc(form.troco) + '"></label>' : '') +
      '<label><span>Observações do pedido</span><textarea name="obs" rows="2">' + esc(form.obs) + '</textarea></label>' +
      '</form></div>' +
      '<div class="drawer-foot"><dl><div><dt>Subtotal</dt><dd>' + brl(sub) + '</dd></div>' +
      (form.tipo === 'entrega' ? '<div><dt>Entrega</dt><dd>' + (taxa ? brl(taxa) : 'Grátis') + '</dd></div>' : '') +
      '<div class="total"><dt>Total</dt><dd>' + brl(total) + '</dd></div></dl>' +
      (minimoFalta ? '<p class="aviso">Pedido mínimo para entrega: ' + brl(entrega.pedidoMinimo) + '</p>' : '') +
      '<button class="btn btn-pri btn-enviar"' + (!carrinho.length || minimoFalta ? ' disabled' : '') + '>' + ICON.whatsapp + 'Enviar pedido pelo WhatsApp</button></div>';
  }
  function lerForm() {
    var f = $('.checkout', drawer); if (!f) return;
    $$('input, select, textarea', f).forEach(function (el) {
      if (el.type === 'radio') { if (el.checked) form[el.name] = el.value; } else form[el.name] = el.value;
    });
    store.set(KEY + ':cliente', { nome: form.nome, endereco: form.endereco, referencia: form.referencia, pagamento: form.pagamento, tipo: form.tipo });
  }
  drawer.addEventListener('change', function (e) {
    if (e.target.name === 'tipo' || e.target.name === 'pagamento') {
      lerForm(); renderCarrinho();
      var alvo = $('[name="' + e.target.name + '"]' + (e.target.type === 'radio' ? ':checked' : ''), drawer); if (alvo) alvo.focus();
    }
  });
  drawer.addEventListener('input', lerForm);
  drawer.addEventListener('click', function (e) {
    var b = e.target.closest('[data-l]');
    if (b) {
      lerForm();
      var l = carrinho[+b.dataset.l]; l.qtd += +b.dataset.d;
      if (l.qtd <= 0) carrinho.splice(+b.dataset.l, 1);
      salvar(); atualizarBarra(); renderCarrinho(); return;
    }
    if (e.target.closest('.btn-enviar')) { lerForm(); enviar(); }
  });
  function enviar() {
    var faltando = $$('[required]', drawer).filter(function (el) { return !el.value.trim(); });
    if (faltando.length) { faltando[0].focus(); faltando[0].classList.add('erro'); toast('Preencha os campos obrigatórios'); return; }
    var L = [];
    L.push('*Novo pedido — ' + C.nome + '*', '');
    carrinho.forEach(function (l) {
      L.push(l.qtd + 'x ' + l.nome + (l.opcao ? ' (' + l.opcao + ')' : '') + ' — ' + brl(l.preco * l.qtd));
      if (l.adicionais.length) L.push('   + ' + l.adicionais.join(', '));
      if (l.obs) L.push('   Obs.: ' + l.obs);
    });
    var sub = subtotal(), taxa = taxaAtual();
    L.push('', 'Subtotal: ' + brl(sub));
    if (form.tipo === 'entrega') L.push('Entrega: ' + (taxa ? brl(taxa) : 'Grátis'));
    L.push('*Total: ' + brl(sub + taxa) + '*', '');
    L.push('*Cliente:* ' + form.nome);
    L.push('*Tipo:* ' + ({ entrega: 'Entrega', retirada: 'Retirada no local', mesa: 'Consumo na mesa' })[form.tipo]);
    if (form.tipo === 'entrega') { L.push('*Endereço:* ' + form.endereco); if (form.referencia) L.push('*Referência:* ' + form.referencia); }
    if (form.tipo === 'mesa') L.push('*Mesa:* ' + (form.mesa || MESA));
    L.push('*Pagamento:* ' + form.pagamento + (/dinheiro/i.test(form.pagamento) && form.troco ? ' (troco para R$ ' + form.troco + ')' : ''));
    if (form.obs) L.push('*Obs.:* ' + form.obs);
    if (C.demo) L.push('', '_(pedido de teste enviado pelo modelo de demonstração)_');
    window.open(wa(WA_PEDIDOS, L.join('\n')), '_blank', 'noopener');
    carrinho = []; salvar(); atualizarBarra(); fechar();
    toast('Pedido enviado! Finalize a conversa no WhatsApp.');
  }

  /* ---------- QR Code e compartilhar ---------- */
  function abrirQR() {
    var url = urlLimpa();
    var placas = ROOT + 'qrcode.html?url=' + encodeURIComponent(url) + '&nome=' + encodeURIComponent(C.nome) + (C.mesas ? '&mesas=' + C.mesas : '');
    modal.innerHTML = '<button class="close" data-acao="fechar" aria-label="Fechar">' + ICON.x + '</button>' +
      '<div class="modal-body qr-body"><h3>Aponte a câmera do celular</h3><p class="desc">Escaneie para abrir o cardápio de <b>' + esc(C.nome) + '</b>.</p>' +
      '<div class="qr-code"></div><p class="qr-url">' + esc(url) + '</p>' +
      (location.protocol === 'file:' ? '<p class="aviso">Publique a página (ex.: GitHub Pages) para o QR Code abrir no celular.</p>' : '') +
      '<div class="qr-actions"><button class="btn btn-pri" data-acao="baixar-qr">Baixar QR Code</button>' +
      '<a class="btn btn-ghost" href="' + esc(placas) + '" target="_blank" rel="noopener">Imprimir plaquinhas</a></div></div>';
    if (window.QRCode) {
      new window.QRCode($('.qr-code', modal), { text: url, width: 240, height: 240, colorDark: '#111111', colorLight: '#ffffff', correctLevel: window.QRCode.CorrectLevel.M });
    } else {
      $('.qr-code', modal).innerHTML = '<img alt="QR Code" width="240" height="240" src="https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=' + encodeURIComponent(url) + '">';
    }
    abrir(modal);
  }
  function baixarQR() {
    var c = $('.qr-code canvas', modal), im = $('.qr-code img', modal);
    var a = document.createElement('a');
    a.download = 'qrcode-' + C.nome.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-') + '.png';
    a.href = c ? c.toDataURL('image/png') : im.src;
    a.click();
  }
  function compartilhar() {
    var dados = { title: C.nome, text: C.nome + ' — ' + C.slogan, url: urlLimpa() };
    if (navigator.share) { navigator.share(dados).catch(function () {}); return; }
    if (navigator.clipboard) navigator.clipboard.writeText(dados.url).then(function () { toast('Link copiado!'); });
  }

  /* ---------- eventos gerais ---------- */
  document.addEventListener('click', function (e) {
    var add = e.target.closest('[data-add]');
    if (add) {
      var it = ITENS[add.dataset.add];
      if ((it.opcoes && it.opcoes.length > 1) || (it.adicionais && it.adicionais.length)) abrirItem(it);
      else adicionar(it, it.opcoes && it.opcoes[0], [], '', 1);
      return;
    }
    var card = e.target.closest('[data-item]');
    if (card && !e.target.closest('a')) { abrirItem(ITENS[card.dataset.item]); return; }
    var ac = e.target.closest('[data-acao]');
    if (!ac) return;
    var acao = ac.dataset.acao;
    if (acao === 'fechar') fechar();
    else if (acao === 'carrinho') { renderCarrinho(); abrir(drawer); }
    else if (acao === 'qr') abrirQR();
    else if (acao === 'baixar-qr') baixarQR();
    else if (acao === 'share') compartilhar();
  });
  overlay.addEventListener('click', fechar);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !overlay.hidden) fechar();
    if ((e.key === 'Enter' || e.key === ' ') && e.target.matches('[data-item]')) { e.preventDefault(); abrirItem(ITENS[e.target.dataset.item]); }
  });
  $$('[data-item]').forEach(function (el) { el.tabIndex = 0; el.setAttribute('role', 'button'); });

  /* ---------- busca ---------- */
  var busca = $('.menu .search input');
  busca.addEventListener('input', function () {
    var q = busca.value.trim().toLowerCase(), algum = false;
    $$('.cat').forEach(function (cat) {
      var vis = 0;
      $$('[data-item]', cat).forEach(function (el) { var ok = !q || el.dataset.busca.indexOf(q) > -1; el.hidden = !ok; if (ok) vis++; });
      cat.hidden = !vis; if (vis) algum = true;
    });
    $('.no-results').hidden = algum;
  });

  /* ---------- categoria ativa ---------- */
  var links = $$('.cat-nav a');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (ents) {
      ents.forEach(function (en) {
        if (!en.isIntersecting) return;
        links.forEach(function (a) {
          var on = a.getAttribute('href') === '#' + en.target.id;
          a.classList.toggle('ativo', on);
          if (on) a.parentNode.scrollTo({ left: a.offsetLeft - 16, behavior: 'smooth' });
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    $$('.cat').forEach(function (c) { io.observe(c); });
  }

  atualizarBarra();
  document.title = C.nome + ' · Cardápio Digital';
  // a página é montada por JS, então o navegador não consegue pular sozinho para #cardapio etc.
  if (location.hash) { var alvo = document.getElementById(location.hash.slice(1)); if (alvo) alvo.scrollIntoView(); }
})();
