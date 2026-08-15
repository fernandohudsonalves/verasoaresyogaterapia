/* ============================================================
   banner.js — sistema de banners do site
   ============================================================
   Cada página define sua própria configuração numa variável
   window.PAGE_BANNER ANTES de incluir este script, e o banner
   é montado dentro de <div id="page-banner"></div>.

   O QUE É EDITÁVEL POR PÁGINA (tudo opcional, com valores
   padrão sensatos quando omitido):

   window.PAGE_BANNER = {
     eyebrow: { icon: "clock", text: "14 ANOS DE EXPERIÊNCIA" },
     title: "Título principal do banner",
     titleAccent: "Segunda linha, em laranja (opcional)",
     subtitle: "Parágrafo de apoio abaixo do título.",
     buttons: [
       { label: "Falar no WhatsApp", href: SITE_CONTACT.whatsapp, style: "whatsapp", icon: "whatsapp" },
       { label: "Agendar horário",   href: SITE_CONTACT.agendamento, style: "outline", icon: "calendar" }
     ],
     photo: {                      // se omitido, vira um banner simples e centralizado (sem foto)
       illustration: "sun",        // "sun" | "leaf" | "book" | "heart"  (troque quando tiver fotos reais)
       image: "img/minha-foto.jpg",// opcional: quando existir, usa uma <img> real no lugar da ilustração
       leaves: true,                // mostra as folhinhas flutuantes por cima
       medallion: { title: "Vera Soares", sub: "Yogaterapia" } // false para esconder
     }
   };

   Para trocar textos/botões/ícones de uma página, edite APENAS
   o objeto PAGE_BANNER no <head> ou início do <body> daquela
   página — o restante do site não precisa ser tocado.
   ============================================================ */

const BANNER_ICONS = {
  eyebrow: {
    clock: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3" stroke-linecap="round"/></svg>',
    leaf: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 19c8 0 14-6 14-14C11 5 5 11 5 19Z"/><path d="M5 19c3-3 6-6 8-10"/></svg>',
    book: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 5.2C4 4.5 4.6 4 5.3 4H11v16H5.3c-.7 0-1.3-.5-1.3-1.2V5.2Z"/><path d="M20 5.2c0-.7-.6-1.2-1.3-1.2H13v16h5.7c.7 0 1.3-.5 1.3-1.2V5.2Z"/></svg>',
    heart: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20.5s-7.5-4.6-7.5-10.3a4.7 4.7 0 0 1 8.3-3 4.7 4.7 0 0 1 8.3 3c0 5.7-7.5 10.3-7.5 10.3Z"/></svg>',
    chat: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3.5" y="5" width="17" height="14" rx="2.5"/><path d="M9.5 10.2l2.7 1.8-2.7 1.8v-3.6Z" fill="currentColor" stroke="none"/></svg>',
    users: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.4"/><path d="M3.5 19c0-3 2.5-5.2 5.5-5.2S14.5 16 14.5 19"/><path d="M15.5 14.3c2.2.2 3.9 2 3.9 4.7"/></svg>',
    star: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3l2.2 4.5L19 8.2l-3.5 3.4.8 4.9L12 14.2 7.7 16.5l.8-4.9L5 8.2l4.8-.7z" stroke-linejoin="round"/></svg>'
  },
  button: {
    whatsapp: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.5 14.4c-.3-.1-1.7-.8-2-1-.3-.1-.5-.1-.6.1-.2.3-.7 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.1.2-.3.3-.5.1-.2 0-.4 0-.5C10 9 9.4 7.6 9.2 7c-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3 4.8 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.3.2-.6.2-1.2.2-1.3-.1-.1-.3-.2-.6-.3z"/><path d="M12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.7 1.5 5.3L2 22l4.9-1.3C8.4 21.6 10.2 22 12 22c5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18c-1.6 0-3.2-.4-4.5-1.2l-.3-.2-3 .8.8-2.9-.2-.3C4 15 3.5 13.5 3.5 12c0-4.7 3.8-8.5 8.5-8.5s8.5 3.8 8.5 8.5-3.8 8.5-8.5 8.5z"/></svg>',
    calendar: '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3.5" y="4.5" width="17" height="16" rx="2.5"/><path d="M3.5 9.5h17M8 3v3M16 3v3" stroke-linecap="round"/><path d="M8.5 13.5l2 2 4-4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    arrow: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    play: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M10 8.5l6 3.5-6 3.5v-7Z"/></svg>'
  },
  /* ilustrações usadas como placeholder do painel de foto, até termos fotos reais de cada página */
  illustration: {
    sun: `<svg viewBox="0 0 600 560" preserveAspectRatio="xMidYMid slice">
            <defs><radialGradient id="bg-sun" cx="60%" cy="22%" r="55%"><stop offset="0%" stop-color="#F3B685" stop-opacity="0.65"/><stop offset="100%" stop-color="#F3B685" stop-opacity="0"/></radialGradient></defs>
            <rect width="600" height="560" fill="url(#bg-sun)"/>
            <circle cx="330" cy="190" r="150" fill="#1E5A52" opacity="0.14"/>
            <path d="M180 560C180 400 240 300 330 260C420 300 480 400 480 560Z" fill="#16453F" opacity="0.16"/>
          </svg>`,
    leaf: `<svg viewBox="0 0 600 560" preserveAspectRatio="xMidYMid slice">
            <defs><linearGradient id="bg-leaf" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#DCEAE5"/><stop offset="100%" stop-color="#9DB29B"/></linearGradient></defs>
            <rect width="600" height="560" fill="url(#bg-leaf)"/>
            <circle cx="470" cy="120" r="130" fill="#F3B685" opacity="0.45"/>
            <path d="M120 560C160 380 260 300 330 300C400 300 470 380 500 560Z" fill="#16453F" opacity="0.16"/>
          </svg>`,
    book: `<svg viewBox="0 0 600 560" preserveAspectRatio="xMidYMid slice">
            <rect width="600" height="560" fill="#F1E7D3"/>
            <circle cx="150" cy="130" r="110" fill="#E8833A" opacity="0.3"/>
            <path d="M100 560C100 420 200 340 330 340C460 340 500 460 500 560Z" fill="#1E5A52" opacity="0.16"/>
          </svg>`,
    heart: `<svg viewBox="0 0 600 560" preserveAspectRatio="xMidYMid slice">
            <rect width="600" height="560" fill="#DCEAE5"/>
            <circle cx="420" cy="420" r="140" fill="#D9A65C" opacity="0.35"/>
            <path d="M60 60C160 90 260 150 300 260C340 150 440 90 540 60" stroke="#16453F" stroke-width="6" fill="none" opacity="0.25"/>
          </svg>`
  }
};

function renderBannerButtons(buttons){
  if (!buttons || !buttons.length) return "";
  return buttons.map(btn => {
    const cls = { whatsapp: "btn-whatsapp", outline: "btn-outline", orange: "btn-orange" }[btn.style] || "btn-outline";
    const icon = btn.icon && BANNER_ICONS.button[btn.icon] ? BANNER_ICONS.button[btn.icon] : "";
    const target = btn.newTab === false ? "" : `target="_blank" rel="noopener"`;
    return `<a href="${btn.href || '#'}" ${target} class="btn ${cls}">${icon}<span>${btn.label}</span></a>`;
  }).join("\n");
}

function renderBannerEyebrow(eyebrow){
  if (!eyebrow || !eyebrow.text) return "";
  const icon = eyebrow.icon && BANNER_ICONS.eyebrow[eyebrow.icon] ? BANNER_ICONS.eyebrow[eyebrow.icon] : "";
  return `<span class="hero-badge">${icon}${eyebrow.text}</span>`;
}

function renderBannerPhoto(photo){
  if (!photo) return "";
  const media = photo.image
    ? `<img src="${photo.image}" alt="" loading="lazy">`
    : (BANNER_ICONS.illustration[photo.illustration] || BANNER_ICONS.illustration.sun);

  const leaves = photo.leaves === false ? "" : `
    <div class="leaf-overlay">
      <svg class="leaf l1" viewBox="0 0 60 90" fill="none"><path d="M30 4C46 20 50 44 30 86C10 44 14 20 30 4Z" stroke="currentColor" stroke-width="2.4"/><path d="M30 14V78" stroke="currentColor" stroke-width="1.6"/></svg>
      <svg class="leaf l2" viewBox="0 0 60 90" fill="none"><path d="M30 4C46 20 50 44 30 86C10 44 14 20 30 4Z" stroke="currentColor" stroke-width="2.4"/><path d="M30 14V78" stroke="currentColor" stroke-width="1.6"/></svg>
      <svg class="leaf l3" viewBox="0 0 60 90" fill="none"><path d="M30 4C46 20 50 44 30 86C10 44 14 20 30 4Z" stroke="currentColor" stroke-width="2.4"/><path d="M30 14V78" stroke="currentColor" stroke-width="1.6"/></svg>
      <svg class="leaf l4" viewBox="0 0 60 90" fill="none"><path d="M30 4C46 20 50 44 30 86C10 44 14 20 30 4Z" stroke="currentColor" stroke-width="2.4"/><path d="M30 14V78" stroke="currentColor" stroke-width="1.6"/></svg>
    </div>`;

  const medallion = photo.medallion === false ? "" : `
    <div class="hero-medallion">
      <div>
        <svg class="m-sun" width="26" height="26" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5" fill="#E8833A"/><g stroke="#E8833A" stroke-width="1.8" stroke-linecap="round"><line x1="12" y1="1.5" x2="12" y2="4.5"/><line x1="12" y1="19.5" x2="12" y2="22.5"/><line x1="1.5" y1="12" x2="4.5" y2="12"/><line x1="19.5" y1="12" x2="22.5" y2="12"/></g></svg>
        <div class="m-title">${(photo.medallion && photo.medallion.title) || "Vera Soares"}</div>
        <div class="m-sub">${(photo.medallion && photo.medallion.sub) || "Yogaterapia"}</div>
      </div>
    </div>`;

  return `
  <div class="hero-visual" aria-hidden="true">
    <div class="hero-photo">
      <div class="hero-photo-clip">${media}${leaves}</div>
      ${medallion}
    </div>
  </div>`;
}

function renderBanner(cfg){
  if (!cfg) return "";

  /* sem "photo" configurado -> banner simples, centralizado, só texto (ideal para Blog etc.) */
  if (!cfg.photo){
    return `
    <section class="page-banner">
      <div class="wrap">
        ${renderBannerEyebrow(cfg.eyebrow)}
        <h1>${cfg.title || ""}${cfg.titleAccent ? ` <span class="accent">${cfg.titleAccent}</span>` : ""}</h1>
        ${cfg.meta ? `<div class="post-meta">${cfg.meta.map(m => `<span>${m}</span>`).join('<span class="dot-sep"></span>')}</div>` : ""}
        ${cfg.subtitle ? `<p>${cfg.subtitle}</p>` : ""}
        ${cfg.buttons ? `<div class="page-banner-actions">${renderBannerButtons(cfg.buttons)}</div>` : ""}
      </div>
    </section>`;
  }

  /* com "photo" -> banner completo, foto à direita (mesmo layout da Home) */
  return `
  <section class="hero">
    <div class="wrap hero-grid">
      <div class="hero-content">
        ${renderBannerEyebrow(cfg.eyebrow)}
        <h1>${cfg.title || ""}${cfg.titleAccent ? `<span class="accent">${cfg.titleAccent}</span>` : ""}</h1>
        ${cfg.subtitle ? `<p class="hero-copy">${cfg.subtitle}</p>` : ""}
        ${cfg.buttons ? `<div class="hero-actions">${renderBannerButtons(cfg.buttons)}</div>` : ""}
      </div>
      ${renderBannerPhoto(cfg.photo)}
    </div>
  </section>`;
}

document.addEventListener("DOMContentLoaded", () => {
  const mount = document.getElementById("page-banner");
  if (mount && window.PAGE_BANNER) {
    mount.outerHTML = renderBanner(window.PAGE_BANNER);
  }
});
