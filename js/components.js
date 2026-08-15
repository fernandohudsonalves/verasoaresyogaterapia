/* ============================================================
   components.js
   Cabeçalho e rodapé compartilhados por TODAS as páginas do site.
   Para criar uma nova página, basta:
     1) copiar a estrutura de <head> e os <div id="site-header">/<div id="site-footer">
     2) trocar o conteúdo do <main>
     3) marcar o item de menu ativo definindo window.CURRENT_PAGE antes deste script
   ============================================================ */

/* ---- Dados de contato centrais do site: mude aqui e reflete em todo lugar ---- */
const SITE_CONTACT = {
  whatsapp: "https://wa.me/5543999617095",
  agendamento: "https://whatsagenda.com.br/vera-soares-yogaterapia",
  email: "verayogaterapia@gmail.com",
  youtube: "https://www.youtube.com/@VERASOARESYOGATERAPIA",
  instagram: "https://www.instagram.com/stories/verasoaresyogaterapia/"
};

const SITE_HEADER = `
<header class="site-header" id="siteHeader">
  <div class="header-inner">
    <a href="index.html" class="logo" aria-label="Vera Soares Yogaterapia — página inicial">
      <img src="img/logo-horizontal.png" alt="Vera Soares Yogaterapia" class="logo-img">
    </a>

    <nav class="main-nav" id="mainNav" aria-label="Menu principal">
      <ul>
        <li><a href="index.html" data-page="home">Home</a></li>
        <li><a href="sobre-mim.html" data-page="sobre-mim">Sobre mim</a></li>
        <li><a href="terapias.html" data-page="terapias">Terapias</a></li>
        <li><a href="cursos.html" data-page="cursos">Cursos</a></li>
        <li><a href="livro.html" data-page="livro">Livro</a></li>
        <li><a href="depoimentos.html" data-page="depoimentos">Depoimentos</a></li>
        <li><a href="blog.html" data-page="blog">Blog</a></li>
        <li><a href="contato.html" data-page="contato">Contato</a></li>
        <li class="nav-mobile-cta">
          <a href="${SITE_CONTACT.agendamento}" target="_blank" rel="noopener" class="btn btn-orange">Agendar horário</a>
          <a href="${SITE_CONTACT.whatsapp}" target="_blank" rel="noopener" class="btn btn-whatsapp">Falar no WhatsApp</a>
        </li>
      </ul>

    </nav>

    <div class="header-ctas">
      <a class="btn btn-outline header-cta" href="${SITE_CONTACT.agendamento}" target="_blank" rel="noopener">
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3.5" y="4.5" width="17" height="16" rx="2.5"/><path d="M3.5 9.5h17M8 3v3M16 3v3" stroke-linecap="round"/><path d="M8.5 13.5l2 2 4-4" stroke-linecap="round" stroke-linejoin="round"/></svg>
        <span>Agendar horário</span>
      </a>
      <a class="btn btn-whatsapp header-cta" href="${SITE_CONTACT.whatsapp}" target="_blank" rel="noopener">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.5 14.4c-.3-.1-1.7-.8-2-1-.3-.1-.5-.1-.6.1-.2.3-.7 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.1.2-.3.3-.5.1-.2 0-.4 0-.5C10 9 9.4 7.6 9.2 7c-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3 4.8 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.3.2-.6.2-1.2.2-1.3-.1-.1-.3-.2-.6-.3z"/><path d="M12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.7 1.5 5.3L2 22l4.9-1.3C8.4 21.6 10.2 22 12 22c5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18c-1.6 0-3.2-.4-4.5-1.2l-.3-.2-3 .8.8-2.9-.2-.3C4 15 3.5 13.5 3.5 12c0-4.7 3.8-8.5 8.5-8.5s8.5 3.8 8.5 8.5-3.8 8.5-8.5 8.5z"/></svg>
        <span>Falar no WhatsApp</span>
      </a>
    </div>

    <button class="nav-toggle" id="navToggle" aria-expanded="false" aria-controls="mainNav" aria-label="Abrir menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</header>
`;

const SITE_FOOTER = `
<div class="trust-bar">
  <div class="trust-bar-inner">
    <div class="trust-item">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3" stroke-linecap="round"/></svg>
      14 anos de experiência
    </div>
    <div class="trust-item">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="8" r="3"/><path d="M5 20c0-3.9 3.1-7 7-7s7 3.1 7 7" stroke-linecap="round"/></svg>
      Atendimento acolhedor e humano
    </div>
    <div class="trust-item">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3l2.2 4.5L19 8.2l-3.5 3.4.8 4.9L12 14.2 7.7 16.5l.8-4.9L5 8.2l4.8-.7z" stroke-linejoin="round"/></svg>
      Terapias integrativas e eficazes
    </div>
    <div class="trust-item">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.5 3.8 5.7 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.7-3.8-9S9.5 5.5 12 3z"/></svg>
      Presencial e online para todo o Brasil e exterior
    </div>
    <div class="trust-item">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 20s-7-4.4-7-10a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 19 10c0 5.6-7 10-7 10z" stroke-linejoin="round"/></svg>
      Compromisso com sua saúde e bem-estar
    </div>
  </div>
</div>

<footer class="site-footer footer-dark">
  <div class="footer-main">
    <div class="footer-col footer-brand">
      <img src="img/logo-horizontal-orange.png" alt="Vera Soares Yogaterapia" class="footer-logo-img">
      <p>Yogaterapia, terapias integrativas e cursos para quem busca mais equilíbrio entre corpo, mente e emoções.</p>
    </div>

    <div class="footer-col">
      <h4>Navegação</h4>
      <ul>
        <li><a href="sobre-mim.html">Sobre mim</a></li>
        <li><a href="terapias.html">Terapias</a></li>
        <li><a href="cursos.html">Cursos e formação</a></li>
        <li><a href="livro.html">Livro</a></li>
        <li><a href="blog.html">Blog</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h4>Atendimento</h4>
      <ul>
        <li><a href="depoimentos.html">Depoimentos</a></li>
        <li><a href="contato.html">Contato</a></li>
        <li><a href="${SITE_CONTACT.agendamento}" target="_blank" rel="noopener">Agendar horário</a></li>
        <li><a href="${SITE_CONTACT.whatsapp}" target="_blank" rel="noopener">Falar no WhatsApp</a></li>
        <li><a href="mailto:${SITE_CONTACT.email}">${SITE_CONTACT.email}</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h4>Conecte-se</h4>
      <div class="social-row">
        <a href="${SITE_CONTACT.instagram}" target="_blank" rel="noopener" aria-label="Instagram" class="social-link">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg>
        </a>
        <a href="${SITE_CONTACT.youtube}" target="_blank" rel="noopener" aria-label="YouTube" class="social-link">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2.5" y="5.5" width="19" height="13" rx="3.5"/><path d="M10.5 9.5l5 2.5-5 2.5z" fill="currentColor" stroke="none"/></svg>
        </a>
        <a href="mailto:${SITE_CONTACT.email}" aria-label="E-mail" class="social-link">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="M3.5 6.5L12 13l8.5-6.5"/></svg>
        </a>
      </div>
    </div>
  </div>

  <div class="footer-bottom">
    <p>© <span id="year"></span> Vera Soares Yogaterapia. Todos os direitos reservados.</p>
  </div>
</footer>
`;

document.addEventListener("DOMContentLoaded", () => {
  const headerMount = document.getElementById("site-header");
  const footerMount = document.getElementById("site-footer");
  if (headerMount) headerMount.innerHTML = SITE_HEADER;
  if (footerMount) footerMount.innerHTML = SITE_FOOTER;

  // marca o link ativo do menu
  const page = window.CURRENT_PAGE || "home";
  document.querySelectorAll(`.main-nav a[data-page="${page}"]`).forEach(a => a.classList.add("active"));

  // rodapé: ano atual
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // menu mobile
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("mainNav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }));
  }

  // header muda de aparência ao rolar
  const header = document.getElementById("siteHeader");
  if (header) {
    const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }
});
