import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { createFileRoute } from "@tanstack/react-router";
import capturedCSS from "../styles/pages/index.css?raw";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title: "Aluguel de Brinquedos em Brasília DF | Tio Titi desde 1998" }] }),
  staticData: { importedDocument: { html: { "className": "js", "lang": "pt-BR" }, body: {  } } },
  component: Index,
});

function Index() {
  const [openMenu0, setOpenMenu0] = useState(null as string | null);
  const menuRoot0 = useRef<Element | null>(null);
  const menuRoot1 = useRef<Element | null>(null);
  useEffect(() => {
    if (!openMenu0) return;
    const closeOutside = (event: MouseEvent) => {
      if (event.target instanceof Node && ![menuRoot0.current, menuRoot1.current].some(root => root?.contains(event.target as Node))) setOpenMenu0(null);
    };
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === "Escape") setOpenMenu0(null); };
    document.addEventListener("click", closeOutside);
    document.addEventListener("keydown", closeOnEscape);
    return () => { document.removeEventListener("click", closeOutside); document.removeEventListener("keydown", closeOnEscape); };
  }, [openMenu0]);
  useImportedLayout();
  return (
    <>
      <style>{capturedCSS}</style>
    <style>{"@layer imported-inline{@media(max-width:767px){[data-import-mobile-style=\"0\"]{transform:none!important;}}}"}</style>
      <a className="skip-link [padding:10px_16px]" href="#conteudo">Pular para o conteúdo</a>
      <svg style={{ position: "absolute" }} width="0" height="0" aria-hidden="true">
        <defs>
          <symbol id="i-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6 9 17l-5-5" />
          </symbol>
          <symbol id="i-plus" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5v14" />
          </symbol>
          <symbol id="i-minus" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14" />
          </symbol>
          <symbol id="i-x" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6 6 18M6 6l12 12" />
          </symbol>
          <symbol id="i-menu" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </symbol>
          <symbol id="i-down" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m6 9 6 6 6-6" />
          </symbol>
          <symbol id="i-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m9 18 6-6-6-6" />
          </symbol>
          <symbol id="i-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </symbol>
          <symbol id="i-phone" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
          </symbol>
          <symbol id="i-mail" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m22 7-10 6L2 7" />
          </symbol>
          <symbol id="i-pin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
          </symbol>
          <symbol id="i-clock" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
          </symbol>
          <symbol id="i-calendar" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <path d="M16 2v4M8 2v4M3 10h18" />
          </symbol>
          <symbol id="i-shield" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path d="m9 12 2 2 4-4" />
          </symbol>
          <symbol id="i-sparkles" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3l1.9 5.8 5.8 1.9-5.8 1.9L12 18.5l-1.9-5.9-5.8-1.9 5.8-1.9Z" />
            <path d="M19 3v4M17 5h4" />
          </symbol>
          <symbol id="i-users" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
          </symbol>
          <symbol id="i-ruler" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z" />
            <path d="m14.5 12.5 2-2M11.5 9.5l2-2M8.5 6.5l2-2M17.5 15.5l2-2" />
          </symbol>
          <symbol id="i-smile" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" />
          </symbol>
          <symbol id="i-star" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </symbol>
          <symbol id="i-list" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="8" y="2" width="8" height="4" rx="1" />
            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2M9 12h6M9 16h6" />
          </symbol>
          <symbol id="i-trash" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
          </symbol>
          <symbol id="i-play" viewBox="0 0 24 24" fill="currentColor">
            <path d="M7 4.5v15l13-7.5z" />
          </symbol>
          <symbol id="i-droplet" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
          </symbol>
          <symbol id="i-gamepad" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 12h4M8 10v4M15 13h.01M18 11h.01" />
            <rect x="2" y="6" width="20" height="12" rx="2" />
          </symbol>
          <symbol id="i-tent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3.5 21 14 3M20.5 21 10 3M15.5 21 12 15l-3.5 6M2 21h20" />
          </symbol>
          <symbol id="i-truck" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2M15 18H9M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
            <circle cx="17" cy="18" r="2" />
            <circle cx="7" cy="18" r="2" />
          </symbol>
          <symbol id="i-heart" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </symbol>
          <symbol id="i-send" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m22 2-7 20-4-9-9-4Z" />
            <path d="M22 2 11 13" />
          </symbol>
          <symbol id="i-zoom" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
          </symbol>
          <symbol id="i-bolt" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
          </symbol>
          <symbol id="i-building" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="4" y="2" width="16" height="20" rx="2" />
            <path d="M9 22v-4h6v4M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01" />
          </symbol>
          <symbol id="i-school" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 10 12 5 2 10l10 5 10-5Z" />
            <path d="M6 12v5c3 3 9 3 12 0v-5" />
          </symbol>
          <symbol id="i-home" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <path d="M9 22V12h6v10" />
          </symbol>
          <symbol id="i-gift" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="8" width="18" height="4" rx="1" />
            <path d="M12 8v13M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7M7.5 8a2.5 2.5 0 0 1 0-5C11 3 12 8 12 8s1-5 4.5-5a2.5 2.5 0 0 1 0 5" />
          </symbol>
          <symbol id="i-whatsapp" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.18-1.41-.08-.13-.27-.2-.57-.35m-5.42 7.4h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.88 9.88m8.41-18.3A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.89a11.82 11.82 0 0 0-3.48-8.41Z" />
          </symbol>
          <symbol id="i-instagram" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01" />
          </symbol>
          <symbol id="i-facebook" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </symbol>
          <symbol id="i-youtube" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
            <path d="m10 15 5-3-5-3z" />
          </symbol>
        </defs>
      </svg>
      <div className="topbar [font-size:.82rem] [font-weight:500]">
        <div className="wrap items-center flex gap-[16px] justify-between min-h-[36px]">
          <div className="topbar__info items-center flex gap-[22px]">
            <span><svg className="icon" aria-hidden="true"><use {...({ href: "#i-clock" } as any)} /></svg> Segunda a domingo, das 8h às 18h</span>
            <a href="/areas-atendidas"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-pin" } as any)} /></svg> Atendemos todo o DF e Entorno</a>
          </div>
          <div className="topbar__info items-center flex gap-[22px]">
            <a href="tel:+556133973074"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-phone" } as any)} /></svg> (61) 3397-3074</a>
            <a href="mailto:tiotitifesta@gmail.com"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-mail" } as any)} /></svg> tiotitifesta@gmail.com</a>
          </div>
        </div>
      </div>
      <header className="site-header" ref={node => { menuRoot0.current = node; }} data-site-import-scroll-header={"{\"desktop\":{\"added\":[\"is-scrolled\"],\"removed\":[],\"threshold\":648},\"mobile\":{\"added\":[\"is-scrolled\"],\"removed\":[],\"threshold\":645}}"}>
        <div className="wrap">
          <a className="logo" aria-label="Tio Titi – página inicial" href="/">
            <img src="/site-assets/7055a544d0bca36e.webp" width="400" height="247" alt="Tio Titi Festas Infantis – aluguel de brinquedos em Brasília" />
          </a>
          <nav className="nav" id="nav" aria-label="Menu principal">
            <ul className="nav__list">
              <li>
                <a className="nav__link" aria-current="page" href="/">Início</a>
              </li>
              <li className="has-dropdown">
                <button className="nav__link" aria-expanded={openMenu0 === "observed-0"} onClick={event => { event.preventDefault(); event.stopPropagation(); setOpenMenu0(open => open === "observed-0" ? null : "observed-0"); }} type="button" aria-controls="dd-brinquedos">Brinquedos <svg className="icon" aria-hidden="true"><use {...({ href: "#i-down" } as any)} /></svg></button>
                <div className="dropdown" data-import-mobile-style={"0"} hidden={openMenu0 === "observed-0" ? undefined : (true)} ref={node => { menuRoot1.current = node; }} style={openMenu0 === "observed-0" ? { opacity: "1", transform: "translate(-50%)", visibility: "visible" } : ({ opacity: "1", transform: "translate(-50%)", visibility: "visible", display: "none" })} id="dd-brinquedos" data-site-import-observed-popup="" data-site-import-responsive="956">
                  <a className="c-red" href="/brinquedos-inflaveis">
                    <span className="dd-ico">
                      <svg className="icon" aria-hidden="true">
                        <use {...({ href: "#i-tent" } as any)} />
                      </svg>
                    </span>
                    <span>
                      <b>Infláveis</b>
                      <span>Tobogãs, tobopiscinas, futebol de sabão e circuitos para todas as idades.</span>
                    </span>
                  </a>
                  <a className="c-blue" href="/brinquedos-aquaticos">
                    <span className="dd-ico">
                      <svg className="icon" aria-hidden="true">
                        <use {...({ href: "#i-droplet" } as any)} />
                      </svg>
                    </span>
                    <span>
                      <b>Aquáticos</b>
                      <span>Toboágua, tobopiscina, futebol de sabão e espuma para refrescar a festa.</span>
                    </span>
                  </a>
                  <a className="c-purple" href="/jogos-para-festa">
                    <span className="dd-ico">
                      <svg className="icon" aria-hidden="true">
                        <use {...({ href: "#i-gamepad" } as any)} />
                      </svg>
                    </span>
                    <span>
                      <b>Jogos e eletrônicos</b>
                      <span>Fliperama, air game, totó, futmesa, sinuca e basquete para todas as idades.</span>
                    </span>
                  </a>
                  <a className="c-green" href="/brinquedos-para-criancas-pequenas">
                    <span className="dd-ico">
                      <svg className="icon" aria-hidden="true">
                        <use {...({ href: "#i-smile" } as any)} />
                      </svg>
                    </span>
                    <span>
                      <b>Para os pequenos (1 a 6 anos)</b>
                      <span>Carrossel, piscina de bolinhas e tobogãs baixos para festas de 1 a 6 anos.</span>
                    </span>
                  </a>
                  <a className="dd-all" href="/brinquedos">Ver todos os 22 brinquedos <svg className="icon" aria-hidden="true"><use {...({ href: "#i-arrow" } as any)} /></svg></a>
                </div>
              </li>
              <li>
                <a className="nav__link" href="/combos-para-festa">Combos</a>
              </li>
              <li>
                <a className="nav__link" href="/eventos-corporativos">Empresas e escolas</a>
              </li>
              <li>
                <a className="nav__link" href="/sobre">Sobre</a>
              </li>
              <li>
                <a className="nav__link" href="/contato">Contato</a>
              </li>
            </ul>
            <div className="nav__cta"><button className="btn btn--blue" type="button"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-list" } as any)} /></svg> Minha lista de orçamento</button><a className="btn btn--wa" href="https://wa.me/5561974006898?text=Ol%C3%A1%2C%20Tio%20Titi!%20Vim%20pelo%20site%20e%20gostaria%20de%20um%20or%C3%A7amento%20para%20a%20minha%20festa.%20%F0%9F%8E%88" rel="noopener" target="_blank"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-whatsapp" } as any)} /></svg> Falar no WhatsApp</a></div>
          </nav>
          <div className="header-actions"><button className="btn-lista" type="button"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-list" } as any)} /></svg><span className="lbl">Minha lista</span><span className={"\x73r-only"}> de orçamento</span><span className="badge-count" aria-hidden="true">0</span></button><a className="btn btn--wa btn--sm header-wa" href="https://wa.me/5561974006898?text=Ol%C3%A1%2C%20Tio%20Titi!%20Vim%20pelo%20site%20e%20gostaria%20de%20um%20or%C3%A7amento%20para%20a%20minha%20festa.%20%F0%9F%8E%88" rel="noopener" target="_blank"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-whatsapp" } as any)} /></svg> WhatsApp</a><button className="menu-toggle" type="button" aria-expanded="false" aria-controls="nav" aria-label="Abrir menu"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-menu" } as any)} /></svg></button></div>
        </div>
      </header>
      <main id="conteudo">
        <ImportedSectionAluguelDeBrinquedosPara />
        <div className="pointer-events-none relative [margin:-42px_0_-18px] [overflow:hidden] [padding:30px_0] [z-index:6]" aria-hidden="true">
          <div className="marquee ml-[-2%] w-[104%] [box-shadow:0_8px_0_rgba(20,24,61,.18)] [padding:14px_0]">
            <div className="marquee__track flex [width:max-content]">
              <span>Tobogãs<i>★</i>Futebol de sabão<i>★</i>Cama elástica<i>★</i>Tobopiscina<i>★</i>Fliperama<i>★</i>Carrossel<i>★</i>Piscina de bolinhas<i>★</i>Torito<i>★</i>Toboágua<i>★</i></span>
              <span>Tobogãs<i>★</i>Futebol de sabão<i>★</i>Cama elástica<i>★</i>Tobopiscina<i>★</i>Fliperama<i>★</i>Carrossel<i>★</i>Piscina de bolinhas<i>★</i>Torito<i>★</i>Toboágua<i>★</i></span>
            </div>
          </div>
        </div>
        <ImportedSectionBrinquedosMaisPedidosPara />
        <ImportedSectionEncontreOBrinquedoIdeal />
        <ImportedSectionComoFuncionaOOr />
        <ImportedSectionDiversOQueVoa />
        <ImportedSectionNOSabeO />
        <ImportedSectionQuemAlugouAprovou />
        <ImportedSectionLevamosAFestaAt />
        <ImportedSectionDVidasFrequentes />
        <section className="section relative" style={{ paddingTop: "0px" }}>
          <div className="wrap">
            <div className="cta-band reveal is-in items-center grid gap-[28px] p-[clamp(36px,5vw,64px)] [box-shadow:12px_12px_0_var(--ink)] [overflow:hidden]">
              <div>
                <h2>Bora deixar a festa inesquecível?</h2>
                <p>Monte sua lista de brinquedos e receba o orçamento pelo WhatsApp. Atendemos Brasília e todo o Entorno.</p>
              </div>
              <div className="btn-row items-center flex flex-wrap gap-[14px]">
                <a className="btn btn--yellow btn--lg" href="/orcamento"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-list" } as any)} /></svg> Pedir orçamento</a>
                <a className="btn btn--wa btn--lg" href="https://wa.me/5561974006898?text=Ol%C3%A1%2C%20Tio%20Titi!%20Vim%20pelo%20site%20e%20gostaria%20de%20um%20or%C3%A7amento%20para%20a%20minha%20festa.%20%F0%9F%8E%88" rel="noopener" target="_blank"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-whatsapp" } as any)} /></svg> WhatsApp</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="pointer-events-none relative [margin:clamp(40px,6vw,80px)_0_-30px] [overflow:hidden] [padding:30px_0] [z-index:6]" aria-hidden="true">
        <div className="marquee marquee--blue ml-[-2%] w-[104%] [box-shadow:0_8px_0_rgba(20,24,61,.18)] [padding:14px_0]">
          <div className="marquee__track flex [width:max-content]">
            <span>Monitor incluso<i>★</i>Brinquedos higienizados<i>★</i>Entrega e montagem<i>★</i>Todo o DF e Entorno<i>★</i>Desde 1998<i>★</i></span>
            <span>Monitor incluso<i>★</i>Brinquedos higienizados<i>★</i>Entrega e montagem<i>★</i>Todo o DF e Entorno<i>★</i>Desde 1998<i>★</i></span>
          </div>
        </div>
      </div>
      <ImportedFooter />
      <aside className="drawer flex-col fixed w-[min(420px,100%)] [bottom:0] [box-shadow:var(--shadow-lg)] [right:0] [top:0] [z-index:81]" id="drawer" aria-hidden="true" inert aria-label="Minha lista de orçamento">
        <div className="drawer__head items-center flex justify-between [padding:18px_20px]">
          <span className="drawer__title items-center flex gap-[8px] uppercase [font-size:1.15rem] [font-weight:900]"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-list" } as any)} /></svg> Minha lista <small style={{ fontWeight: "400", color: "var(--ink-3)" }}>0 brinquedos</small></span>
          <button className="icon-btn grid h-[34px] place-items-center w-[34px] [cursor:pointer]" type="button" aria-label="Fechar lista">
            <svg className="icon" aria-hidden="true">
              <use {...({ href: "#i-x" } as any)} />
            </svg>
          </button>
        </div>
        <div className="flex-1 [overflow-y:auto] [padding:18px_20px]" id="drawer-list">
          <div className="cart-empty text-center [padding:24px_12px]"><div className="dd-ico c-yellow [margin:0_auto_12px]"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-list" } as any)} /></svg></div><b>Sua lista está vazia</b>Navegue pelos brinquedos e clique em "Adicionar à lista" para montar seu orçamento.</div>
        </div>
        <div className="drawer__foot grid gap-[10px] [padding:16px_20px_calc(16px_+_env(safe-area-inset-bottom))]"><a className="btn btn--block [width:100%]" href="/orcamento"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-send" } as any)} /></svg> Pedir orçamento desta lista</a><a className="btn btn--ghost btn--block [width:100%]" href="/brinquedos">Continuar escolhendo</a><p>Você informa data, horário e local na próxima etapa.</p></div>
      </aside>
      <div className="drawer-backdrop fixed invisible [inset:0] [z-index:80]" />
      <a className="wa-float h-[60px] place-items-center w-[60px] [box-shadow:4px_4px_0_var(--ink)]" aria-label="Conversar com a Tio Titi no WhatsApp" href="https://wa.me/5561974006898?text=Ol%C3%A1%2C%20Tio%20Titi!%20Vim%20pelo%20site%20e%20gostaria%20de%20um%20or%C3%A7amento%20para%20a%20minha%20festa.%20%F0%9F%8E%88" rel="noopener" target="_blank">
        <svg className="icon" aria-hidden="true">
          <use {...({ href: "#i-whatsapp" } as any)} />
        </svg>
      </a>
    </>
  );
}

function ImportedSectionAluguelDeBrinquedosPara() {
  return (
    <section className="hero hero--impacto [overflow:hidden] [padding:clamp(28px,4vw,56px)_0_0] [padding-top:clamp(36px,5vw,72px)]!">
      <img className="hero__sol-edge [@media(min-width:861px)]:pointer-events-none [@media(min-width:861px)]:absolute [@media(min-width:861px)]:top-[18%] [@media(min-width:861px)]:w-[clamp(160px,14vw,230px)] [@media(min-width:861px)]:[filter:drop-shadow(-6px_8px_14px_rgba(29,35,80,.18))] [@media(min-width:861px)]:[right:0] [@media(min-width:861px)]:[z-index:3]" src="/site-assets/5e1f9c807519a1cc.webp" width="480" height="816" alt="" aria-hidden="true" loading="lazy" decoding="async" />
      <div className="wrap hero__grid items-center grid gap-[clamp(24px,4vw,56px)] relative [z-index:2]">
        <div className="hero__text">
          <span className="eyebrow items-center inline-flex gap-[8px] mb-[14px] uppercase [box-shadow:3px_3px_0_var(--red)] [font-size:.8rem] [font-weight:800] [letter-spacing:.08em] [padding:7px_14px]"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-sparkles" } as any)} /></svg> Desde 1998 alegrando festas no DF</span>
          <h1>Aluguel de brinquedos para festas em <span className="hl whitespace-normal [box-shadow:4px_4px_0_var(--ink)] [line-height:1] [margin:.06em_0] [padding:.04em_.2em_.08em]">Brasília</span></h1>
          <p className="lead max-w-[560px] [font-size:clamp(1.05rem,.5vw_+_.95rem,1.22rem)]">Tobogãs, infláveis, futebol de sabão, brinquedos aquáticos e jogos com <strong>monitor incluso</strong>, entrega, montagem e desmontagem. Monte sua lista e receba o orçamento no WhatsApp.</p>
          <div className="btn-row items-center flex flex-wrap gap-[14px]"><a className="btn btn--lg" href="/brinquedos"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-sparkles" } as any)} /></svg> Ver brinquedos</a><a className="btn btn--wa btn--lg" href="https://wa.me/5561974006898?text=Ol%C3%A1%2C%20Tio%20Titi!%20Vim%20pelo%20site%20e%20gostaria%20de%20um%20or%C3%A7amento%20para%20a%20minha%20festa.%20%F0%9F%8E%88" rel="noopener" target="_blank"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-whatsapp" } as any)} /></svg> Falar no WhatsApp</a></div>
          <div className="hero__trust flex flex-wrap mt-[28px] [font-size:.92rem] [font-weight:500] [gap:10px_18px]">
            <span><svg className="icon" aria-hidden="true"><use {...({ href: "#i-shield" } as any)} /></svg> Monitor incluso</span>
            <span><svg className="icon" aria-hidden="true"><use {...({ href: "#i-sparkles" } as any)} /></svg> Brinquedos higienizados</span>
            <span><svg className="icon" aria-hidden="true"><use {...({ href: "#i-pin" } as any)} /></svg> Todo o DF e Entorno</span>
          </div>
        </div>
        <div className="hero__art aspect-[1/.92] relative [@media(max-width:860px)]:max-w-[480px] [@media(max-width:860px)]:[margin:0_auto] [@media(max-width:860px)]:[width:100%]">
          <div className="hero__img hero__img--1 absolute [box-shadow:14px_14px_0_var(--red)] [inset:6%_3%_24%_6%] [overflow:hidden]">
            <img src="/site-assets/09cebf861076a12d.webp" srcSet="/site-assets/478696cc864515ed.webp 320w, /site-assets/09cebf861076a12d.webp 640w, /site-assets/72c92d399d6f84d3.webp 800w" sizes="(max-width: 860px) 82vw, 520px" width="800" height="450" alt="Crianças brincando na tobopiscina inflável da Tio Titi em uma festa em Brasília" fetchPriority="high" decoding="async" />
          </div>
          <div className="hero__img hero__img--2 aspect-[1] absolute w-[38%] [bottom:0] [box-shadow:10px_10px_0_var(--yellow)] [overflow:hidden] [right:0]">
            <img src="/site-assets/c2df29b5b70f598a.webp" srcSet="/site-assets/a7d17f669387338d.webp 320w, /site-assets/c2df29b5b70f598a.webp 640w, /site-assets/993bb530a28a2589.webp 800w, /site-assets/dbb4ddd2eeb0f25b.webp 900w" sizes="220px" width="900" height="600" alt="Bolão gigante do futebol de sabão 2 em 1" loading="lazy" decoding="async" />
          </div>
          <div className="hero__img hero__img--3 aspect-[1] bottom-[6%] absolute w-[33%] [box-shadow:10px_10px_0_var(--blue)] [left:0] [overflow:hidden]">
            <img src="/site-assets/a1706fda8ae7fe9d.webp" srcSet="/site-assets/bc0394c6a221ed55.webp 320w, /site-assets/a1706fda8ae7fe9d.webp 640w, /site-assets/e659b00d0c3baacd.webp 800w, /site-assets/3d69a627309a6c62.webp 1000w" sizes="180px" width="1000" height="750" alt="Carrossel Fusquinha para crianças pequenas" loading="lazy" decoding="async" />
          </div>
          <div className="hero__badge hero__badge--a items-center hidden gap-[10px] absolute right-[2%] top-[2%] [box-shadow:5px_5px_0_var(--green)] [font-size:.85rem] [line-height:1.25] [padding:10px_14px] [z-index:3]">
            <span className="dd-ico c-yellow">
              <svg className="icon" aria-hidden="true">
                <use {...({ href: "#i-star" } as any)} />
              </svg>
            </span>
            <span><strong>+28 anos</strong>de festas felizes</span>
          </div>
          <div className="hero__badge hero__badge--b items-center bottom-[2%] flex gap-[10px] left-[34%] absolute [box-shadow:5px_5px_0_var(--green)] [font-size:.85rem] [line-height:1.25] [padding:10px_14px] [z-index:3]">
            <span className="dd-ico c-green">
              <svg className="icon" aria-hidden="true">
                <use {...({ href: "#i-shield" } as any)} />
              </svg>
            </span>
            <span><strong>Monitor</strong>em cada brinquedo</span>
          </div>
          <img className="hero__sol bottom-[30%] absolute [top:auto] [z-index:4]" src="/site-assets/5e1f9c807519a1cc.webp" width="480" height="816" alt="" loading="lazy" />
          <div className="hx-sticker aspect-[1] grid place-items-center absolute w-[clamp(108px,12vw,150px)] [box-shadow:6px_6px_0_var(--red)] [z-index:5]" aria-hidden="true">
            <svg viewBox="0 0 200 200">
              <defs>
                <path id="hx-circ" d="M100,100 m-74,0 a74,74 0 1,1 148,0 a74,74 0 1,1 -148,0" />
              </defs>
              <text>
                <textPath {...({ href: "#hx-circ", textLength: "462", lengthAdjust: "spacing" } as any)}>TIO TITI ★ DESDE 1998 ★ FESTAS FELIZES ★</textPath>
              </text>
            </svg>
            <span className="hx-sticker__core aspect-[1] grid place-content-center relative text-center uppercase w-[54%] [font-size:.72rem] [font-weight:700] [line-height:1]"><b>+28</b>anos</span>
          </div>
        </div>
      </div>
      <div className="wrap">
        <div className="stats grid mt-[clamp(32px,4vw,48px)] relative [z-index:3]">
          <div className="stat c-red items-center flex">
            <span className="dd-ico">
              <svg className="icon" aria-hidden="true">
                <use {...({ href: "#i-calendar" } as any)} />
              </svg>
            </span>
            <div>
              <strong>1998</strong>
              <span>no mercado de festas</span>
            </div>
          </div>
          <div className="stat c-blue items-center flex">
            <span className="dd-ico">
              <svg className="icon" aria-hidden="true">
                <use {...({ href: "#i-sparkles" } as any)} />
              </svg>
            </span>
            <div>
              <strong>22</strong>
              <span>brinquedos para escolher</span>
            </div>
          </div>
          <div className="stat c-green items-center flex">
            <span className="dd-ico">
              <svg className="icon" aria-hidden="true">
                <use {...({ href: "#i-users" } as any)} />
              </svg>
            </span>
            <div>
              <strong>Monitores</strong>
              <span>treinados e uniformizados</span>
            </div>
          </div>
          <div className="stat c-purple items-center flex">
            <span className="dd-ico">
              <svg className="icon" aria-hidden="true">
                <use {...({ href: "#i-pin" } as any)} />
              </svg>
            </span>
            <div>
              <strong>DF + Entorno</strong>
              <span>entrega e montagem</span>
            </div>
          </div>
        </div>
      </div>
      <div style={{ height: "clamp(32px, 5vw, 64px)" }} />
    </section>
  );
}

function ImportedSectionBrinquedosMaisPedidosPara() {
  return (
    <section className="section relative" style={{ paddingTop: "clamp(24px, 4vw, 48px)" }} aria-labelledby="dest-t">
      <div className="wrap">
        <div className="section-head max-w-[760px] text-center [margin:0_auto_clamp(32px,4vw,52px)]">
          <span className="eyebrow items-center inline-flex gap-[8px] mb-[14px] uppercase [box-shadow:3px_3px_0_var(--red)] [font-size:.8rem] [font-weight:800] [letter-spacing:.08em] [padding:7px_14px]"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-star" } as any)} /></svg> Os queridinhos</span>
          <h2 id="dest-t">Brinquedos mais pedidos para <span className="hl hl--blue whitespace-normal [box-shadow:4px_4px_0_var(--ink)] [line-height:1] [margin:.06em_0] [padding:.04em_.2em_.08em]">festas no DF</span></h2>
          <p>Os favoritos da criançada (e dos pais). Clique em <b>Adicionar</b> para montar sua lista de orçamento.</p>
        </div>
        <div className="grid gap-[22px] grid-cols-[repeat(auto-fill,minmax(260px,1fr))]">
          <article className="toy-card flex flex-col relative [overflow:hidden]">
            <a className="toy-card__media aspect-[4/3] block [overflow:hidden]" aria-hidden="true" href="/brinquedos/futebol-de-sabao" tabIndex={-1}>
              <img src="/site-assets/49d083b39898cf72.webp" srcSet="/site-assets/8d628c4190afeea4.webp 320w, /site-assets/49d083b39898cf72.webp 640w, /site-assets/ae8f26b6b6653dc6.webp 800w" sizes="(max-width: 600px) 86vw, (max-width: 1000px) 46vw, 300px" width="800" height="600" alt="Aluguel de Futebol de Sabão 2 em 1 para festas em Brasília – Tio Titi" loading="lazy" decoding="async" />
              <span className="toy-card__tag left-[12px] absolute uppercase top-[12px] [box-shadow:2px_2px_0_var(--ink)] [font-size:.74rem] [font-weight:700] [letter-spacing:.04em] [padding:5px_11px]">Mais pedido</span>
            </a>
            <div className="toy-card__body flex flex-1 flex-col gap-[8px] [padding:18px_18px_20px]">
              <h3>
                <a href="/brinquedos/futebol-de-sabao">Futebol de Sabão 2 em 1</a>
              </h3>
              <p>Campo inflável 2 em 1: futebol e bolão gigante, com muita espuma e risada.</p>
              <div className="flex flex-wrap gap-[6px] mt-[2px]">
                <span className="chip items-center inline-flex gap-[5px] [font-size:.78rem] [font-weight:600] [line-height:1.3] [padding:4px_10px]"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-smile" } as any)} /></svg> Até 15 anos</span>
                <span className="chip items-center inline-flex gap-[5px] [font-size:.78rem] [font-weight:600] [line-height:1.3] [padding:4px_10px]"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-ruler" } as any)} /></svg> Comprimento: 8 m</span>
              </div>
              <div className="items-center flex gap-[8px] justify-between pt-[10px] [margin-top:auto]">
                <span className="toy-card__link items-center inline-flex gap-[4px] uppercase whitespace-nowrap [font-size:.76rem] [font-weight:800] [letter-spacing:.03em]">Ver detalhes <svg className="icon" aria-hidden="true"><use {...({ href: "#i-arrow" } as any)} /></svg></span>
                <button className="add-mini items-center inline-flex flex-none gap-[6px] h-[38px] relative [cursor:pointer] [font:600_.84rem_var(--font)] [font-size:.84rem]! [font-weight:800]! [padding:0_12px] [z-index:2]" type="button">
                  <svg className="icon" aria-hidden="true">
                    <use {...({ href: "#i-plus" } as any)} />
                  </svg>
                  <span className="lbl">Adicionar</span>
                  <span className={"\x73r-only"}> Futebol de Sabão 2 em 1 à lista</span>
                </button>
              </div>
            </div>
          </article>
          <article className="toy-card flex flex-col relative [overflow:hidden]">
            <a className="toy-card__media aspect-[4/3] block [overflow:hidden]" aria-hidden="true" href="/brinquedos/tobopiscina" tabIndex={-1}>
              <img src="/site-assets/5a9fa2fd948dea34.webp" srcSet="/site-assets/4d0db2c46fb2ed9c.webp 320w, /site-assets/5a9fa2fd948dea34.webp 640w, /site-assets/f479ce3f956afc22.webp 800w, /site-assets/92966f372fe035f7.webp 1067w" sizes="(max-width: 600px) 86vw, (max-width: 1000px) 46vw, 300px" width="1067" height="600" alt="Aluguel de Tobopiscina para festas em Brasília – Tio Titi" loading="lazy" decoding="async" />
              <span className="toy-card__tag left-[12px] absolute uppercase top-[12px] [box-shadow:2px_2px_0_var(--ink)] [font-size:.74rem] [font-weight:700] [letter-spacing:.04em] [padding:5px_11px]">Mais pedido</span>
            </a>
            <div className="toy-card__body flex flex-1 flex-col gap-[8px] [padding:18px_18px_20px]">
              <h3>
                <a href="/brinquedos/tobopiscina">Tobopiscina</a>
              </h3>
              <p>Tobogã de 5 m com piscina própria: não precisa ter piscina em casa!</p>
              <div className="flex flex-wrap gap-[6px] mt-[2px]">
                <span className="chip items-center inline-flex gap-[5px] [font-size:.78rem] [font-weight:600] [line-height:1.3] [padding:4px_10px]"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-smile" } as any)} /></svg> 6 a 15 anos</span>
                <span className="chip items-center inline-flex gap-[5px] [font-size:.78rem] [font-weight:600] [line-height:1.3] [padding:4px_10px]"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-ruler" } as any)} /></svg> Altura: 5 m</span>
              </div>
              <div className="items-center flex gap-[8px] justify-between pt-[10px] [margin-top:auto]">
                <span className="toy-card__link items-center inline-flex gap-[4px] uppercase whitespace-nowrap [font-size:.76rem] [font-weight:800] [letter-spacing:.03em]">Ver detalhes <svg className="icon" aria-hidden="true"><use {...({ href: "#i-arrow" } as any)} /></svg></span>
                <button className="add-mini items-center inline-flex flex-none gap-[6px] h-[38px] relative [cursor:pointer] [font:600_.84rem_var(--font)] [font-size:.84rem]! [font-weight:800]! [padding:0_12px] [z-index:2]" type="button">
                  <svg className="icon" aria-hidden="true">
                    <use {...({ href: "#i-plus" } as any)} />
                  </svg>
                  <span className="lbl">Adicionar</span>
                  <span className={"\x73r-only"}> Tobopiscina à lista</span>
                </button>
              </div>
            </div>
          </article>
          <article className="toy-card flex flex-col relative [overflow:hidden]">
            <a className="toy-card__media aspect-[4/3] block [overflow:hidden]" aria-hidden="true" href="/brinquedos/cama-elastica" tabIndex={-1}>
              <img src="/site-assets/89b1a2b8d115187b.webp" srcSet="/site-assets/64576cc39ba8d9c0.webp 320w, /site-assets/89b1a2b8d115187b.webp 640w, /site-assets/b01deb15fac89e31.webp 800w, /site-assets/c523beebf5d23755.webp 900w" sizes="(max-width: 600px) 86vw, (max-width: 1000px) 46vw, 300px" width="900" height="600" alt="Aluguel de Cama Elástica (Pula-Pula) para festas em Brasília – Tio Titi" loading="lazy" decoding="async" />
              <span className="toy-card__tag left-[12px] absolute uppercase top-[12px] [box-shadow:2px_2px_0_var(--ink)] [font-size:.74rem] [font-weight:700] [letter-spacing:.04em] [padding:5px_11px]">Mais pedido</span>
            </a>
            <div className="toy-card__body flex flex-1 flex-col gap-[8px] [padding:18px_18px_20px]">
              <h3>
                <a href="/brinquedos/cama-elastica">Cama Elástica (Pula-Pula)</a>
              </h3>
              <p>Pula-pula com proteção de molas reforçada em 3 tamanhos.</p>
              <div className="flex flex-wrap gap-[6px] mt-[2px]">
                <span className="chip items-center inline-flex gap-[5px] [font-size:.78rem] [font-weight:600] [line-height:1.3] [padding:4px_10px]"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-smile" } as any)} /></svg> Até 15 anos</span>
                <span className="chip items-center inline-flex gap-[5px] [font-size:.78rem] [font-weight:600] [line-height:1.3] [padding:4px_10px]"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-ruler" } as any)} /></svg> Tamanhos: 2,5 m, 3 m ou 3,5 m</span>
              </div>
              <div className="items-center flex gap-[8px] justify-between pt-[10px] [margin-top:auto]">
                <span className="toy-card__link items-center inline-flex gap-[4px] uppercase whitespace-nowrap [font-size:.76rem] [font-weight:800] [letter-spacing:.03em]">Ver detalhes <svg className="icon" aria-hidden="true"><use {...({ href: "#i-arrow" } as any)} /></svg></span>
                <button className="add-mini items-center inline-flex flex-none gap-[6px] h-[38px] relative [cursor:pointer] [font:600_.84rem_var(--font)] [font-size:.84rem]! [font-weight:800]! [padding:0_12px] [z-index:2]" type="button">
                  <svg className="icon" aria-hidden="true">
                    <use {...({ href: "#i-plus" } as any)} />
                  </svg>
                  <span className="lbl">Adicionar</span>
                  <span className={"\x73r-only"}> Cama Elástica (Pula-Pula) à lista</span>
                </button>
              </div>
            </div>
          </article>
          <article className="toy-card flex flex-col relative [overflow:hidden]">
            <a className="toy-card__media aspect-[4/3] block [overflow:hidden]" aria-hidden="true" href="/brinquedos/toboga-safari" tabIndex={-1}>
              <img src="/site-assets/370ce26428d9b79c.webp" srcSet="/site-assets/7baf92f9f0028c5a.webp 320w, /site-assets/370ce26428d9b79c.webp 640w, /site-assets/29c123db8132cd78.webp 800w, /site-assets/18ae42b7c0d5fbcf.webp 900w" sizes="(max-width: 600px) 86vw, (max-width: 1000px) 46vw, 300px" width="900" height="600" alt="Aluguel de Tobogã Safári 2 em 1 para festas em Brasília – Tio Titi" loading="lazy" decoding="async" />
              <span className="toy-card__tag left-[12px] absolute uppercase top-[12px] [box-shadow:2px_2px_0_var(--ink)] [font-size:.74rem] [font-weight:700] [letter-spacing:.04em] [padding:5px_11px]">Favorito</span>
            </a>
            <div className="toy-card__body flex flex-1 flex-col gap-[8px] [padding:18px_18px_20px]">
              <h3>
                <a href="/brinquedos/toboga-safari">Tobogã Safári 2 em 1</a>
              </h3>
              <p>Uma expedição selvagem com escorregador, pula-pula e dois João Bobo.</p>
              <div className="flex flex-wrap gap-[6px] mt-[2px]">
                <span className="chip items-center inline-flex gap-[5px] [font-size:.78rem] [font-weight:600] [line-height:1.3] [padding:4px_10px]"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-smile" } as any)} /></svg> 3 a 12 anos</span>
                <span className="chip items-center inline-flex gap-[5px] [font-size:.78rem] [font-weight:600] [line-height:1.3] [padding:4px_10px]"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-ruler" } as any)} /></svg> Altura: 4,5 m</span>
              </div>
              <div className="items-center flex gap-[8px] justify-between pt-[10px] [margin-top:auto]">
                <span className="toy-card__link items-center inline-flex gap-[4px] uppercase whitespace-nowrap [font-size:.76rem] [font-weight:800] [letter-spacing:.03em]">Ver detalhes <svg className="icon" aria-hidden="true"><use {...({ href: "#i-arrow" } as any)} /></svg></span>
                <button className="add-mini items-center inline-flex flex-none gap-[6px] h-[38px] relative [cursor:pointer] [font:600_.84rem_var(--font)] [font-size:.84rem]! [font-weight:800]! [padding:0_12px] [z-index:2]" type="button">
                  <svg className="icon" aria-hidden="true">
                    <use {...({ href: "#i-plus" } as any)} />
                  </svg>
                  <span className="lbl">Adicionar</span>
                  <span className={"\x73r-only"}> Tobogã Safári 2 em 1 à lista</span>
                </button>
              </div>
            </div>
          </article>
          <article className="toy-card flex flex-col relative [overflow:hidden]">
            <a className="toy-card__media aspect-[4/3] block [overflow:hidden]" aria-hidden="true" href="/brinquedos/toboagua" tabIndex={-1}>
              <img src="/site-assets/1c6debe2e1bbbb3e.webp" srcSet="/site-assets/1598656e479a082d.webp 320w, /site-assets/1c6debe2e1bbbb3e.webp 640w, /site-assets/4bc24432ce35b167.webp 800w, /site-assets/6dd3a74d910fc203.webp 1152w" sizes="(max-width: 600px) 86vw, (max-width: 1000px) 46vw, 300px" width="1152" height="648" alt="Aluguel de Toboágua para festas em Brasília – Tio Titi" loading="lazy" decoding="async" />
              <span className="toy-card__tag left-[12px] absolute uppercase top-[12px] [box-shadow:2px_2px_0_var(--ink)] [font-size:.74rem] [font-weight:700] [letter-spacing:.04em] [padding:5px_11px]">Verão</span>
            </a>
            <div className="toy-card__body flex flex-1 flex-col gap-[8px] [padding:18px_18px_20px]">
              <h3>
                <a href="/brinquedos/toboagua">Toboágua</a>
              </h3>
              <p>Sua piscina vira um parque aquático com 4,5 m de pura adrenalina.</p>
              <div className="flex flex-wrap gap-[6px] mt-[2px]">
                <span className="chip items-center inline-flex gap-[5px] [font-size:.78rem] [font-weight:600] [line-height:1.3] [padding:4px_10px]"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-smile" } as any)} /></svg> 6 a 15 anos</span>
                <span className="chip items-center inline-flex gap-[5px] [font-size:.78rem] [font-weight:600] [line-height:1.3] [padding:4px_10px]"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-ruler" } as any)} /></svg> Altura: 4,5 m</span>
              </div>
              <div className="items-center flex gap-[8px] justify-between pt-[10px] [margin-top:auto]">
                <span className="toy-card__link items-center inline-flex gap-[4px] uppercase whitespace-nowrap [font-size:.76rem] [font-weight:800] [letter-spacing:.03em]">Ver detalhes <svg className="icon" aria-hidden="true"><use {...({ href: "#i-arrow" } as any)} /></svg></span>
                <button className="add-mini items-center inline-flex flex-none gap-[6px] h-[38px] relative [cursor:pointer] [font:600_.84rem_var(--font)] [font-size:.84rem]! [font-weight:800]! [padding:0_12px] [z-index:2]" type="button">
                  <svg className="icon" aria-hidden="true">
                    <use {...({ href: "#i-plus" } as any)} />
                  </svg>
                  <span className="lbl">Adicionar</span>
                  <span className={"\x73r-only"}> Toboágua à lista</span>
                </button>
              </div>
            </div>
          </article>
          <article className="toy-card flex flex-col relative [overflow:hidden]">
            <a className="toy-card__media aspect-[4/3] block [overflow:hidden]" aria-hidden="true" href="/brinquedos/fliperama" tabIndex={-1}>
              <img src="/site-assets/992a41ccac2632f9.webp" srcSet="/site-assets/2487870ef86bd3e9.webp 320w, /site-assets/992a41ccac2632f9.webp 640w, /site-assets/eba0cc7af9ab39c7.webp 800w, /site-assets/489db23b0ea7e4c9.webp 1200w" sizes="(max-width: 600px) 86vw, (max-width: 1000px) 46vw, 300px" width="1200" height="798" alt="Aluguel de Fliperama Multijogos para festas em Brasília – Tio Titi" loading="lazy" decoding="async" />
              <span className="toy-card__tag left-[12px] absolute uppercase top-[12px] [box-shadow:2px_2px_0_var(--ink)] [font-size:.74rem] [font-weight:700] [letter-spacing:.04em] [padding:5px_11px]">Nostalgia</span>
            </a>
            <div className="toy-card__body flex flex-1 flex-col gap-[8px] [padding:18px_18px_20px]">
              <h3>
                <a href="/brinquedos/fliperama">Fliperama Multijogos</a>
              </h3>
              <p>2 mil jogos clássicos de Super Nintendo, Atari, PlayStation e Mega Drive.</p>
              <div className="flex flex-wrap gap-[6px] mt-[2px]">
                <span className="chip items-center inline-flex gap-[5px] [font-size:.78rem] [font-weight:600] [line-height:1.3] [padding:4px_10px]"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-smile" } as any)} /></svg> A partir de 6 anos</span>
                <span className="chip items-center inline-flex gap-[5px] [font-size:.78rem] [font-weight:600] [line-height:1.3] [padding:4px_10px]"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-ruler" } as any)} /></svg> Altura: 1,10 m</span>
              </div>
              <div className="items-center flex gap-[8px] justify-between pt-[10px] [margin-top:auto]">
                <span className="toy-card__link items-center inline-flex gap-[4px] uppercase whitespace-nowrap [font-size:.76rem] [font-weight:800] [letter-spacing:.03em]">Ver detalhes <svg className="icon" aria-hidden="true"><use {...({ href: "#i-arrow" } as any)} /></svg></span>
                <button className="add-mini items-center inline-flex flex-none gap-[6px] h-[38px] relative [cursor:pointer] [font:600_.84rem_var(--font)] [font-size:.84rem]! [font-weight:800]! [padding:0_12px] [z-index:2]" type="button">
                  <svg className="icon" aria-hidden="true">
                    <use {...({ href: "#i-plus" } as any)} />
                  </svg>
                  <span className="lbl">Adicionar</span>
                  <span className={"\x73r-only"}> Fliperama Multijogos à lista</span>
                </button>
              </div>
            </div>
          </article>
          <article className="toy-card flex flex-col relative [overflow:hidden]">
            <a className="toy-card__media aspect-[4/3] block [overflow:hidden]" aria-hidden="true" href="/brinquedos/carrossel-fusquinha" tabIndex={-1}>
              <img src="/site-assets/64c257cab1023cbd.webp" srcSet="/site-assets/dae7b2fbfd051e24.webp 320w, /site-assets/64c257cab1023cbd.webp 640w, /site-assets/6f5af7b87bed75e4.webp 800w, /site-assets/fbb0f505849b61d8.webp 900w" sizes="(max-width: 600px) 86vw, (max-width: 1000px) 46vw, 300px" width="900" height="600" alt="Aluguel de Carrossel Fusquinha para festas em Brasília – Tio Titi" loading="lazy" decoding="async" />
            </a>
            <div className="toy-card__body flex flex-1 flex-col gap-[8px] [padding:18px_18px_20px]">
              <h3>
                <a href="/brinquedos/carrossel-fusquinha">Carrossel Fusquinha</a>
              </h3>
              <p>Quatro fusquinhas coloridos girando para encantar crianças de 1 a 5 anos.</p>
              <div className="flex flex-wrap gap-[6px] mt-[2px]">
                <span className="chip items-center inline-flex gap-[5px] [font-size:.78rem] [font-weight:600] [line-height:1.3] [padding:4px_10px]"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-smile" } as any)} /></svg> 1 a 5 anos</span>
                <span className="chip items-center inline-flex gap-[5px] [font-size:.78rem] [font-weight:600] [line-height:1.3] [padding:4px_10px]"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-ruler" } as any)} /></svg> Altura: 2 m</span>
              </div>
              <div className="items-center flex gap-[8px] justify-between pt-[10px] [margin-top:auto]">
                <span className="toy-card__link items-center inline-flex gap-[4px] uppercase whitespace-nowrap [font-size:.76rem] [font-weight:800] [letter-spacing:.03em]">Ver detalhes <svg className="icon" aria-hidden="true"><use {...({ href: "#i-arrow" } as any)} /></svg></span>
                <button className="add-mini items-center inline-flex flex-none gap-[6px] h-[38px] relative [cursor:pointer] [font:600_.84rem_var(--font)] [font-size:.84rem]! [font-weight:800]! [padding:0_12px] [z-index:2]" type="button">
                  <svg className="icon" aria-hidden="true">
                    <use {...({ href: "#i-plus" } as any)} />
                  </svg>
                  <span className="lbl">Adicionar</span>
                  <span className={"\x73r-only"}> Carrossel Fusquinha à lista</span>
                </button>
              </div>
            </div>
          </article>
          <article className="toy-card flex flex-col relative [overflow:hidden]">
            <a className="toy-card__media aspect-[4/3] block [overflow:hidden]" aria-hidden="true" href="/brinquedos/toboga-tradicional" tabIndex={-1}>
              <img src="/site-assets/700502b308b72419.webp" srcSet="/site-assets/96d76b5231819ea2.webp 320w, /site-assets/700502b308b72419.webp 640w, /site-assets/fbe50f7dbfff4301.webp 800w" sizes="(max-width: 600px) 86vw, (max-width: 1000px) 46vw, 300px" width="800" height="600" alt="Aluguel de Tobogã Tradicional para festas em Brasília – Tio Titi" loading="lazy" decoding="async" />
            </a>
            <div className="toy-card__body flex flex-1 flex-col gap-[8px] [padding:18px_18px_20px]">
              <h3>
                <a href="/brinquedos/toboga-tradicional">Tobogã Tradicional</a>
              </h3>
              <p>O clássico das festas: sobe, escorrega e corre pra fila de novo!</p>
              <div className="flex flex-wrap gap-[6px] mt-[2px]">
                <span className="chip items-center inline-flex gap-[5px] [font-size:.78rem] [font-weight:600] [line-height:1.3] [padding:4px_10px]"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-smile" } as any)} /></svg> 2 a 10 anos</span>
                <span className="chip items-center inline-flex gap-[5px] [font-size:.78rem] [font-weight:600] [line-height:1.3] [padding:4px_10px]"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-ruler" } as any)} /></svg> Altura: 2,80 m</span>
              </div>
              <div className="items-center flex gap-[8px] justify-between pt-[10px] [margin-top:auto]">
                <span className="toy-card__link items-center inline-flex gap-[4px] uppercase whitespace-nowrap [font-size:.76rem] [font-weight:800] [letter-spacing:.03em]">Ver detalhes <svg className="icon" aria-hidden="true"><use {...({ href: "#i-arrow" } as any)} /></svg></span>
                <button className="add-mini items-center inline-flex flex-none gap-[6px] h-[38px] relative [cursor:pointer] [font:600_.84rem_var(--font)] [font-size:.84rem]! [font-weight:800]! [padding:0_12px] [z-index:2]" type="button">
                  <svg className="icon" aria-hidden="true">
                    <use {...({ href: "#i-plus" } as any)} />
                  </svg>
                  <span className="lbl">Adicionar</span>
                  <span className={"\x73r-only"}> Tobogã Tradicional à lista</span>
                </button>
              </div>
            </div>
          </article>
        </div>
        <p className="center mt-l text-center">
          <a className="btn btn--blue btn--lg" href="/brinquedos">Ver todos os 22 brinquedos <svg className="icon" aria-hidden="true"><use {...({ href: "#i-arrow" } as any)} /></svg></a>
        </p>
      </div>
    </section>
  );
}

function ImportedSectionEncontreOBrinquedoIdeal() {
  return (
    <section className="section section--white relative" aria-labelledby="cat-t">
      <div className="wrap">
        <div className="section-head max-w-[760px] text-center [margin:0_auto_clamp(32px,4vw,52px)]">
          <span className="eyebrow items-center inline-flex gap-[8px] mb-[14px] uppercase [box-shadow:3px_3px_0_var(--red)] [font-size:.8rem] [font-weight:800] [letter-spacing:.08em] [padding:7px_14px]"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-gift" } as any)} /></svg> Categorias</span>
          <h2 id="cat-t">Encontre o brinquedo ideal para a sua festa</h2>
          <p>Do primeiro aniversário à festa teen, temos opções para cada idade, espaço e estação do ano.</p>
        </div>
        <div className="cats grid gap-[18px]">
          <a className="cat-card c-red reveal is-in flex flex-col [overflow:hidden] [padding:22px_22px_0]" href="/brinquedos-inflaveis">
            <span className="dd-ico mb-[14px] [box-shadow:3px_3px_0_var(--ink)]">
              <svg className="icon" aria-hidden="true">
                <use {...({ href: "#i-tent" } as any)} />
              </svg>
            </span>
            <h3>Brinquedos infláveis</h3>
            <p>Tobogãs, tobopiscinas, futebol de sabão e circuitos para todas as idades.</p>
            <span className="cat-card__more items-center inline-flex gap-[6px] uppercase [font-size:.82rem] [font-weight:800] [letter-spacing:.04em]">11 opções <svg className="icon" aria-hidden="true"><use {...({ href: "#i-arrow" } as any)} /></svg></span>
            <span className="cat-card__img h-[150px] [margin:18px_-22px_0] [margin-top:auto]! [overflow:hidden]">
              <img src="/site-assets/370ce26428d9b79c.webp" srcSet="/site-assets/7baf92f9f0028c5a.webp 320w, /site-assets/370ce26428d9b79c.webp 640w, /site-assets/29c123db8132cd78.webp 800w, /site-assets/18ae42b7c0d5fbcf.webp 900w" sizes="(max-width: 520px) 100vw, 300px" width="900" height="600" alt="Infláveis: Tobogã Safári 2 em 1 para alugar em Brasília" loading="lazy" decoding="async" />
            </span>
          </a>
          <a className="cat-card c-blue reveal is-in flex flex-col [overflow:hidden] [padding:22px_22px_0]" href="/brinquedos-aquaticos">
            <span className="dd-ico mb-[14px] [box-shadow:3px_3px_0_var(--ink)]">
              <svg className="icon" aria-hidden="true">
                <use {...({ href: "#i-droplet" } as any)} />
              </svg>
            </span>
            <h3>Brinquedos aquáticos</h3>
            <p>Toboágua, tobopiscina, futebol de sabão e espuma para refrescar a festa.</p>
            <span className="cat-card__more items-center inline-flex gap-[6px] uppercase [font-size:.82rem] [font-weight:800] [letter-spacing:.04em]">8 opções <svg className="icon" aria-hidden="true"><use {...({ href: "#i-arrow" } as any)} /></svg></span>
            <span className="cat-card__img h-[150px] [margin:18px_-22px_0] [margin-top:auto]! [overflow:hidden]">
              <img src="/site-assets/09cebf861076a12d.webp" srcSet="/site-assets/478696cc864515ed.webp 320w, /site-assets/09cebf861076a12d.webp 640w, /site-assets/72c92d399d6f84d3.webp 800w" sizes="(max-width: 520px) 100vw, 300px" width="800" height="450" alt="Aquáticos: Tobopiscina para alugar em Brasília" loading="lazy" decoding="async" />
            </span>
          </a>
          <a className="cat-card c-purple reveal is-in flex flex-col [overflow:hidden] [padding:22px_22px_0]" href="/jogos-para-festa">
            <span className="dd-ico mb-[14px] [box-shadow:3px_3px_0_var(--ink)]">
              <svg className="icon" aria-hidden="true">
                <use {...({ href: "#i-gamepad" } as any)} />
              </svg>
            </span>
            <h3>Jogos e eletrônicos</h3>
            <p>Fliperama, air game, totó, futmesa, sinuca e basquete para todas as idades.</p>
            <span className="cat-card__more items-center inline-flex gap-[6px] uppercase [font-size:.82rem] [font-weight:800] [letter-spacing:.04em]">6 opções <svg className="icon" aria-hidden="true"><use {...({ href: "#i-arrow" } as any)} /></svg></span>
            <span className="cat-card__img h-[150px] [margin:18px_-22px_0] [margin-top:auto]! [overflow:hidden]">
              <img src="/site-assets/992a41ccac2632f9.webp" srcSet="/site-assets/2487870ef86bd3e9.webp 320w, /site-assets/992a41ccac2632f9.webp 640w, /site-assets/eba0cc7af9ab39c7.webp 800w, /site-assets/489db23b0ea7e4c9.webp 1200w" sizes="(max-width: 520px) 100vw, 300px" width="1200" height="798" alt="Jogos e eletrônicos: Fliperama Multijogos para alugar em Brasília" loading="lazy" decoding="async" />
            </span>
          </a>
          <a className="cat-card c-green reveal is-in flex flex-col [overflow:hidden] [padding:22px_22px_0]" href="/brinquedos-para-criancas-pequenas">
            <span className="dd-ico mb-[14px] [box-shadow:3px_3px_0_var(--ink)]">
              <svg className="icon" aria-hidden="true">
                <use {...({ href: "#i-smile" } as any)} />
              </svg>
            </span>
            <h3>Para os pequenos</h3>
            <p>Carrossel, piscina de bolinhas e tobogãs baixos para festas de 1 a 6 anos.</p>
            <span className="cat-card__more items-center inline-flex gap-[6px] uppercase [font-size:.82rem] [font-weight:800] [letter-spacing:.04em]">6 opções <svg className="icon" aria-hidden="true"><use {...({ href: "#i-arrow" } as any)} /></svg></span>
            <span className="cat-card__img h-[150px] [margin:18px_-22px_0] [margin-top:auto]! [overflow:hidden]">
              <img src="/site-assets/a1706fda8ae7fe9d.webp" srcSet="/site-assets/bc0394c6a221ed55.webp 320w, /site-assets/a1706fda8ae7fe9d.webp 640w, /site-assets/e659b00d0c3baacd.webp 800w, /site-assets/3d69a627309a6c62.webp 1000w" sizes="(max-width: 520px) 100vw, 300px" width="1000" height="750" alt="Para os pequenos: Carrossel Fusquinha para alugar em Brasília" loading="lazy" decoding="async" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionComoFuncionaOOr() {
  return (
    <section className={"section section--sky \x62g-confetti relative"} aria-labelledby="como-t">
      <div className="wrap">
        <div className="section-head max-w-[760px] text-center [margin:0_auto_clamp(32px,4vw,52px)]">
          <span className="eyebrow items-center inline-flex gap-[8px] mb-[14px] uppercase [box-shadow:3px_3px_0_var(--red)] [font-size:.8rem] [font-weight:800] [letter-spacing:.08em] [padding:7px_14px]"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-list" } as any)} /></svg> Orçamento fácil</span>
          <h2 id="como-t">Como funciona o <span className="hl whitespace-normal [box-shadow:4px_4px_0_var(--ink)] [line-height:1] [margin:.06em_0] [padding:.04em_.2em_.08em]">orçamento</span></h2>
          <p>Monte a festa dos sonhos em 3 passos, sem cadastro e sem compromisso.</p>
        </div>
        <div className="pt-[34px]">
          <div className="steps grid relative [counter-reset:step]">
            <div className="step reveal c-red is-in relative text-center [box-shadow:var(--hard)] [padding:30px_24px_26px]">
              <div className="step__num grid h-[74px] place-items-center w-[74px] [box-shadow:4px_4px_0_var(--ink)] [font-size:2.1rem] [font-weight:900] [margin:-62px_auto_14px] [margin-top:-70px]!">1</div>
              <h3>Escolha os brinquedos</h3>
              <p>Navegue pelo catálogo e clique em <b>“Adicionar à lista”</b> nos brinquedos que você quer na festa.</p>
            </div>
            <div className="step reveal c-yellow is-in relative text-center [box-shadow:var(--hard)] [padding:30px_24px_26px]">
              <div className="step__num grid h-[74px] place-items-center w-[74px] [box-shadow:4px_4px_0_var(--ink)] [font-size:2.1rem] [font-weight:900] [margin:-62px_auto_14px] [margin-top:-70px]!" style={{ color: "var(--ink)" }}>2</div>
              <h3>Informe os dados da festa</h3>
              <p>Na sua lista, preencha data, horário de início, endereço e cidade. Leva menos de 1 minuto.</p>
            </div>
            <div className="step reveal c-green is-in relative text-center [box-shadow:var(--hard)] [padding:30px_24px_26px]">
              <div className="step__num grid h-[74px] place-items-center w-[74px] [box-shadow:4px_4px_0_var(--ink)] [font-size:2.1rem] [font-weight:900] [margin:-62px_auto_14px] [margin-top:-70px]!">3</div>
              <h3>Receba a proposta</h3>
              <p>Seu pedido chega no nosso WhatsApp e respondemos com a proposta por WhatsApp ou e-mail.</p>
            </div>
          </div>
        </div>
        <p className="center mt-l text-center">
          <a className="btn btn--lg" href="/brinquedos"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-sparkles" } as any)} /></svg> Começar a escolher</a>
        </p>
      </div>
    </section>
  );
}

function ImportedSectionDiversOQueVoa() {
  return (
    <section className="section relative" aria-labelledby="sobre-t">
      <div className="wrap split items-center grid gap-[clamp(28px,5vw,72px)]">
        <div className="split__media reveal is-in">
          <img src="/site-assets/d7ddf73a9a404ea5.webp" srcSet="/site-assets/ebbb74a53edd498e.webp 320w, /site-assets/d7ddf73a9a404ea5.webp 640w, /site-assets/cbb193934dff2d72.webp 800w, /site-assets/6090542658188baa.webp 1000w" sizes="(max-width: 860px) 100vw, 560px" width="1000" height="750" alt="Tobogã Safári 2 em 1 montado pela equipe Tio Titi" loading="lazy" decoding="async" />
        </div>
        <div>
          <span className="eyebrow items-center inline-flex gap-[8px] mb-[14px] uppercase [box-shadow:3px_3px_0_var(--red)] [font-size:.8rem] [font-weight:800] [letter-spacing:.08em] [padding:7px_14px]"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-heart" } as any)} /></svg> Sobre a Tio Titi</span>
          <h2 id="sobre-t">Diversão que voa alto, com <span className="hl hl--green whitespace-normal [box-shadow:4px_4px_0_var(--ink)] [line-height:1] [margin:.06em_0] [padding:.04em_.2em_.08em]">segurança</span></h2>
          <p className="lead [font-size:clamp(1.05rem,.5vw_+_.95rem,1.22rem)]">A Tio Titi atua no aluguel de brinquedos para festas em Brasília desde 1998. São mais de 28 anos criando sorrisos e momentos cheios de alegria em aniversários, escolas, condomínios e empresas.</p>
          <ul className="check-list grid gap-[10px] list-none [margin:0_0_1.6em]">
            <li><svg className="icon p-[4px] [margin-top:1px]" aria-hidden="true"><use {...({ href: "#i-check" } as any)} /></svg> Monitores treinados e uniformizados em cada brinquedo</li>
            <li><svg className="icon p-[4px] [margin-top:1px]" aria-hidden="true"><use {...({ href: "#i-check" } as any)} /></svg> Limpeza e manutenção após cada festa</li>
            <li><svg className="icon p-[4px] [margin-top:1px]" aria-hidden="true"><use {...({ href: "#i-check" } as any)} /></svg> Pontualidade na montagem e na desmontagem</li>
            <li><svg className="icon p-[4px] [margin-top:1px]" aria-hidden="true"><use {...({ href: "#i-check" } as any)} /></svg> Atendimento em todo o Distrito Federal e Entorno</li>
          </ul>
          <a className="btn btn--purple" href="/sobre">Conheça nossa história <svg className="icon" aria-hidden="true"><use {...({ href: "#i-arrow" } as any)} /></svg></a>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionNOSabeO() {
  return (
    <section className="section section--lilac relative" aria-labelledby="combo-t">
      <div className="wrap">
        <div className="section-head max-w-[760px] text-center [margin:0_auto_clamp(32px,4vw,52px)]">
          <span className="eyebrow items-center inline-flex gap-[8px] mb-[14px] uppercase [box-shadow:3px_3px_0_var(--red)] [font-size:.8rem] [font-weight:800] [letter-spacing:.08em] [padding:7px_14px]"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-gift" } as any)} /></svg> Combos</span>
          <h2 id="combo-t">Não sabe o que escolher? <span className="hl whitespace-normal [box-shadow:4px_4px_0_var(--ink)] [line-height:1] [margin:.06em_0] [padding:.04em_.2em_.08em]">Comece por um combo</span></h2>
          <p>Seleções prontas por idade e estilo de festa. Adicione com um clique e ajuste como quiser.</p>
        </div>
        <div className="grid gap-[24px] grid-cols-[repeat(auto-fill,minmax(330px,1fr))]">
          <article className="combo c-green reveal is-in flex flex-col [box-shadow:var(--hard)] [overflow:hidden]">
            <div className="combo__imgs grid grid-cols-[repeat(3,1fr)] [gap:0]">
              <img src="/site-assets/64c257cab1023cbd.webp" srcSet="/site-assets/dae7b2fbfd051e24.webp 320w, /site-assets/64c257cab1023cbd.webp 640w, /site-assets/6f5af7b87bed75e4.webp 800w, /site-assets/fbb0f505849b61d8.webp 900w" sizes="140px" width="900" height="600" alt="Carrossel Fusquinha – combo Festa dos Pequenos" loading="lazy" decoding="async" />
              <img src="/site-assets/97b170cdc0a28b87.webp" srcSet="/site-assets/00435f0f0f43d9c6.webp 320w, /site-assets/97b170cdc0a28b87.webp 640w, /site-assets/051168c6e6970058.webp 800w, /site-assets/3122615b5413c5f5.webp 1000w" sizes="140px" width="1000" height="750" alt="Piscina de Bolinhas Casinha Leão – combo Festa dos Pequenos" loading="lazy" decoding="async" />
              <img src="/site-assets/bc7ab97962961bf4.webp" srcSet="/site-assets/3ae30e57b5d3c365.webp 320w, /site-assets/bc7ab97962961bf4.webp 640w, /site-assets/2e3410095f4089ee.webp 800w" sizes="140px" width="800" height="600" alt="Tobogã 3 em 1 – combo Festa dos Pequenos" loading="lazy" decoding="async" />
            </div>
            <div className="combo__body flex flex-1 flex-col gap-[12px] [padding:22px_24px_26px]">
              <span className="tag items-center self-start inline-flex gap-[6px] no-underline uppercase [box-shadow:2px_2px_0_var(--ink)] [font-size:.78rem] [font-weight:700] [letter-spacing:.05em] [padding:6px_12px]"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-smile" } as any)} /></svg> 1 a 5 anos</span>
              <h3>Festa dos Pequenos</h3>
              <p style={{ margin: "0px" }}>Brinquedos baixos, coloridos e com movimentos suaves. Perfeito para o primeiro aniversário e festas de bebês.</p>
              <ul>
                <li>
                  <a href="/brinquedos/carrossel-fusquinha"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-check" } as any)} /></svg> Carrossel Fusquinha</a>
                </li>
                <li>
                  <a href="/brinquedos/piscina-de-bolinhas"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-check" } as any)} /></svg> Piscina de Bolinhas Casinha Leão</a>
                </li>
                <li>
                  <a href="/brinquedos/toboga-3-em-1"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-check" } as any)} /></svg> Tobogã 3 em 1</a>
                </li>
              </ul>
              <button className="btn btn--block [margin-top:auto] [width:100%]" type="button"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-plus" } as any)} /></svg> Adicionar combo à lista</button>
            </div>
          </article>
          <article className="combo c-red reveal is-in flex flex-col [box-shadow:var(--hard)] [overflow:hidden]">
            <div className="combo__imgs grid grid-cols-[repeat(3,1fr)] [gap:0]">
              <img src="/site-assets/700502b308b72419.webp" srcSet="/site-assets/96d76b5231819ea2.webp 320w, /site-assets/700502b308b72419.webp 640w, /site-assets/fbe50f7dbfff4301.webp 800w" sizes="140px" width="800" height="600" alt="Tobogã Tradicional – combo Parquinho Clássico" loading="lazy" decoding="async" />
              <img src="/site-assets/89b1a2b8d115187b.webp" srcSet="/site-assets/64576cc39ba8d9c0.webp 320w, /site-assets/89b1a2b8d115187b.webp 640w, /site-assets/b01deb15fac89e31.webp 800w, /site-assets/c523beebf5d23755.webp 900w" sizes="140px" width="900" height="600" alt="Cama Elástica (Pula-Pula) – combo Parquinho Clássico" loading="lazy" decoding="async" />
              <img src="/site-assets/bb3d3ee311fb6e14.webp" srcSet="/site-assets/ad7d95de35fb9930.webp 320w, /site-assets/bb3d3ee311fb6e14.webp 640w, /site-assets/ce32164daf3f118c.webp 800w" sizes="140px" width="800" height="600" alt="Corrida de Obstáculos – combo Parquinho Clássico" loading="lazy" decoding="async" />
            </div>
            <div className="combo__body flex flex-1 flex-col gap-[12px] [padding:22px_24px_26px]">
              <span className="tag items-center self-start inline-flex gap-[6px] no-underline uppercase [box-shadow:2px_2px_0_var(--ink)] [font-size:.78rem] [font-weight:700] [letter-spacing:.05em] [padding:6px_12px]"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-smile" } as any)} /></svg> 3 a 10 anos</span>
              <h3>Parquinho Clássico</h3>
              <p style={{ margin: "0px" }}>O trio que nunca falha: escorregar, pular e encarar o circuito de obstáculos com os amigos.</p>
              <ul>
                <li>
                  <a href="/brinquedos/toboga-tradicional"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-check" } as any)} /></svg> Tobogã Tradicional</a>
                </li>
                <li>
                  <a href="/brinquedos/cama-elastica"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-check" } as any)} /></svg> Cama Elástica (Pula-Pula)</a>
                </li>
                <li>
                  <a href="/brinquedos/corrida-de-obstaculos"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-check" } as any)} /></svg> Corrida de Obstáculos</a>
                </li>
              </ul>
              <button className="btn btn--block [margin-top:auto] [width:100%]" type="button"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-plus" } as any)} /></svg> Adicionar combo à lista</button>
            </div>
          </article>
          <article className="combo c-blue reveal is-in flex flex-col [box-shadow:var(--hard)] [overflow:hidden]">
            <div className="combo__imgs grid grid-cols-[repeat(3,1fr)] [gap:0]">
              <img src="/site-assets/5a9fa2fd948dea34.webp" srcSet="/site-assets/4d0db2c46fb2ed9c.webp 320w, /site-assets/5a9fa2fd948dea34.webp 640w, /site-assets/f479ce3f956afc22.webp 800w, /site-assets/92966f372fe035f7.webp 1067w" sizes="140px" width="1067" height="600" alt="Tobopiscina – combo Verão Aquático" loading="lazy" decoding="async" />
              <img src="/site-assets/49d083b39898cf72.webp" srcSet="/site-assets/8d628c4190afeea4.webp 320w, /site-assets/49d083b39898cf72.webp 640w, /site-assets/ae8f26b6b6653dc6.webp 800w" sizes="140px" width="800" height="600" alt="Futebol de Sabão 2 em 1 – combo Verão Aquático" loading="lazy" decoding="async" />
              <img src="/site-assets/95742622d0f0ea94.webp" srcSet="/site-assets/911a5f2d5295117a.webp 320w, /site-assets/95742622d0f0ea94.webp 640w, /site-assets/6859b1d7d1878b52.webp 800w" sizes="140px" width="800" height="600" alt="Canhão de Espuma – combo Verão Aquático" loading="lazy" decoding="async" />
            </div>
            <div className="combo__body flex flex-1 flex-col gap-[12px] [padding:22px_24px_26px]">
              <span className="tag items-center self-start inline-flex gap-[6px] no-underline uppercase [box-shadow:2px_2px_0_var(--ink)] [font-size:.78rem] [font-weight:700] [letter-spacing:.05em] [padding:6px_12px]"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-smile" } as any)} /></svg> 6 a 15 anos</span>
              <h3>Verão Aquático</h3>
              <p style={{ margin: "0px" }}>Um parque aquático completo, sem precisar de piscina em casa. Ideal para os dias quentes de Brasília.</p>
              <ul>
                <li>
                  <a href="/brinquedos/tobopiscina"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-check" } as any)} /></svg> Tobopiscina</a>
                </li>
                <li>
                  <a href="/brinquedos/futebol-de-sabao"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-check" } as any)} /></svg> Futebol de Sabão 2 em 1</a>
                </li>
                <li>
                  <a href="/brinquedos/canhao-de-espuma"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-check" } as any)} /></svg> Canhão de Espuma</a>
                </li>
              </ul>
              <button className="btn btn--block [margin-top:auto] [width:100%]" type="button"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-plus" } as any)} /></svg> Adicionar combo à lista</button>
            </div>
          </article>
        </div>
        <p className="center mt-l text-center">
          <a href="/combos-para-festa">Ver todos os combos <svg className="icon" aria-hidden="true"><use {...({ href: "#i-arrow" } as any)} /></svg></a>
        </p>
      </div>
    </section>
  );
}

function ImportedSectionQuemAlugouAprovou() {
  return (
    <section className="section relative" aria-labelledby="dep-t">
      <div className="wrap">
        <div className="section-head max-w-[760px] text-center [margin:0_auto_clamp(32px,4vw,52px)]">
          <span className="eyebrow items-center inline-flex gap-[8px] mb-[14px] uppercase [box-shadow:3px_3px_0_var(--red)] [font-size:.8rem] [font-weight:800] [letter-spacing:.08em] [padding:7px_14px]"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-heart" } as any)} /></svg> Depoimentos</span>
          <h2 id="dep-t">Quem alugou, <span className="hl whitespace-normal [box-shadow:4px_4px_0_var(--ink)] [line-height:1] [margin:.06em_0] [padding:.04em_.2em_.08em]">aprovou!</span></h2>
          <p>O carinho de quem já fez festa com a gente é o nosso maior orgulho.</p>
        </div>
        <div className="testimonials grid gap-[22px]">
          <figure className="testimonial reveal is-in flex flex-col gap-[14px] [box-shadow:var(--hard)] [margin:0] [padding:26px_24px_22px]">
            <div className="stars flex gap-[2px]" role="img" aria-label="5 estrelas">
              <svg className="icon" aria-hidden="true">
                <use {...({ href: "#i-star" } as any)} />
              </svg>
              <svg className="icon" aria-hidden="true">
                <use {...({ href: "#i-star" } as any)} />
              </svg>
              <svg className="icon" aria-hidden="true">
                <use {...({ href: "#i-star" } as any)} />
              </svg>
              <svg className="icon" aria-hidden="true">
                <use {...({ href: "#i-star" } as any)} />
              </svg>
              <svg className="icon" aria-hidden="true">
                <use {...({ href: "#i-star" } as any)} />
              </svg>
            </div>
            <blockquote>Ótimo atendimento, o brinquedo que aluguei estava em perfeito estado, meu priminho amou e sem contar que o futebol de sabão fez a alegria dos adultos!</blockquote>
            <figcaption>
              <span className="avatar c-red grid flex-none h-[44px] place-items-center w-[44px] [font-weight:700]" style={{ background: "var(--c)" }}>DS</span>
              <span><b>Deborah Santana</b>Cliente Tio Titi</span>
            </figcaption>
          </figure>
          <figure className="testimonial reveal is-in flex flex-col gap-[14px] [box-shadow:var(--hard)] [margin:0] [padding:26px_24px_22px]">
            <div className="stars flex gap-[2px]" role="img" aria-label="5 estrelas">
              <svg className="icon" aria-hidden="true">
                <use {...({ href: "#i-star" } as any)} />
              </svg>
              <svg className="icon" aria-hidden="true">
                <use {...({ href: "#i-star" } as any)} />
              </svg>
              <svg className="icon" aria-hidden="true">
                <use {...({ href: "#i-star" } as any)} />
              </svg>
              <svg className="icon" aria-hidden="true">
                <use {...({ href: "#i-star" } as any)} />
              </svg>
              <svg className="icon" aria-hidden="true">
                <use {...({ href: "#i-star" } as any)} />
              </svg>
            </div>
            <blockquote>Empresa profissional e comprometida. Ótimos prestadores de serviço. Foram pontuais e eficientes no início, durante e no final da festa.</blockquote>
            <figcaption>
              <span className="avatar c-blue grid flex-none h-[44px] place-items-center w-[44px] [font-weight:700]" style={{ background: "var(--c)" }}>ES</span>
              <span><b>Edlene Sales</b>Cliente Tio Titi</span>
            </figcaption>
          </figure>
          <figure className="testimonial reveal is-in flex flex-col gap-[14px] [box-shadow:var(--hard)] [margin:0] [padding:26px_24px_22px]">
            <div className="stars flex gap-[2px]" role="img" aria-label="5 estrelas">
              <svg className="icon" aria-hidden="true">
                <use {...({ href: "#i-star" } as any)} />
              </svg>
              <svg className="icon" aria-hidden="true">
                <use {...({ href: "#i-star" } as any)} />
              </svg>
              <svg className="icon" aria-hidden="true">
                <use {...({ href: "#i-star" } as any)} />
              </svg>
              <svg className="icon" aria-hidden="true">
                <use {...({ href: "#i-star" } as any)} />
              </svg>
              <svg className="icon" aria-hidden="true">
                <use {...({ href: "#i-star" } as any)} />
              </svg>
            </div>
            <blockquote>Alugo brinquedos com o Tio Titi há muitos anos, gosto muito do trabalho deles. Sou sempre bem atendida e fico super satisfeita.</blockquote>
            <figcaption>
              <span className="avatar c-green grid flex-none h-[44px] place-items-center w-[44px] [font-weight:700]" style={{ background: "var(--c)" }}>RD</span>
              <span><b>Raquel Dias</b>Cliente Tio Titi</span>
            </figcaption>
          </figure>
          <figure className="testimonial reveal is-in flex flex-col gap-[14px] [box-shadow:var(--hard)] [margin:0] [padding:26px_24px_22px]">
            <div className="stars flex gap-[2px]" role="img" aria-label="5 estrelas">
              <svg className="icon" aria-hidden="true">
                <use {...({ href: "#i-star" } as any)} />
              </svg>
              <svg className="icon" aria-hidden="true">
                <use {...({ href: "#i-star" } as any)} />
              </svg>
              <svg className="icon" aria-hidden="true">
                <use {...({ href: "#i-star" } as any)} />
              </svg>
              <svg className="icon" aria-hidden="true">
                <use {...({ href: "#i-star" } as any)} />
              </svg>
              <svg className="icon" aria-hidden="true">
                <use {...({ href: "#i-star" } as any)} />
              </svg>
            </div>
            <blockquote>Empresa com padrão de qualidade muito boa, atendimento perfeito, horário cumprido certinho. Eu conheço e recomendo.</blockquote>
            <figcaption>
              <span className="avatar c-purple grid flex-none h-[44px] place-items-center w-[44px] [font-weight:700]" style={{ background: "var(--c)" }}>HS</span>
              <span><b>Herci da Silva</b>Cliente Tio Titi</span>
            </figcaption>
          </figure>
          <figure className="testimonial reveal is-in flex flex-col gap-[14px] [box-shadow:var(--hard)] [margin:0] [padding:26px_24px_22px]">
            <div className="stars flex gap-[2px]" role="img" aria-label="5 estrelas">
              <svg className="icon" aria-hidden="true">
                <use {...({ href: "#i-star" } as any)} />
              </svg>
              <svg className="icon" aria-hidden="true">
                <use {...({ href: "#i-star" } as any)} />
              </svg>
              <svg className="icon" aria-hidden="true">
                <use {...({ href: "#i-star" } as any)} />
              </svg>
              <svg className="icon" aria-hidden="true">
                <use {...({ href: "#i-star" } as any)} />
              </svg>
              <svg className="icon" aria-hidden="true">
                <use {...({ href: "#i-star" } as any)} />
              </svg>
            </div>
            <blockquote>Os brinquedos são ótimos, muitas opções, sem falar na pontualidade e organização.</blockquote>
            <figcaption>
              <span className="avatar c-orange grid flex-none h-[44px] place-items-center w-[44px] [font-weight:700]" style={{ background: "var(--c)" }}>TM</span>
              <span><b>Ticiana Andrade Macedo</b>Cliente Tio Titi</span>
            </figcaption>
          </figure>
          <figure className="testimonial reveal is-in flex flex-col gap-[14px] [box-shadow:var(--hard)] [margin:0] [padding:26px_24px_22px]">
            <div className="stars flex gap-[2px]" role="img" aria-label="5 estrelas">
              <svg className="icon" aria-hidden="true">
                <use {...({ href: "#i-star" } as any)} />
              </svg>
              <svg className="icon" aria-hidden="true">
                <use {...({ href: "#i-star" } as any)} />
              </svg>
              <svg className="icon" aria-hidden="true">
                <use {...({ href: "#i-star" } as any)} />
              </svg>
              <svg className="icon" aria-hidden="true">
                <use {...({ href: "#i-star" } as any)} />
              </svg>
              <svg className="icon" aria-hidden="true">
                <use {...({ href: "#i-star" } as any)} />
              </svg>
            </div>
            <blockquote>Nossa, adoro o Tio Titi Brinquedos. Os brinquedos são maravilhosos, atendimento nota mil! Eu recomendo sempre. Parabéns, vocês são mil!</blockquote>
            <figcaption>
              <span className="avatar c-red grid flex-none h-[44px] place-items-center w-[44px] [font-weight:700]" style={{ background: "var(--c)" }}>NA</span>
              <span><b>Nehylza Andrade</b>Cliente Tio Titi</span>
            </figcaption>
          </figure>
        </div>
        <p className="center mt-l text-center">
          <a className="reviews-link items-center inline-flex gap-[8px] [font-weight:600]" href="https://maps.app.goo.gl/ZbKHKzTQzkFUPgBa8" rel="noopener" target="_blank"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-star" } as any)} /></svg> Veja mais avaliações no Google <svg className="icon" aria-hidden="true"><use {...({ href: "#i-arrow" } as any)} /></svg></a>
        </p>
      </div>
    </section>
  );
}

function ImportedSectionLevamosAFestaAt() {
  return (
    <section className="section section--sky relative" aria-labelledby="area-t">
      <div className="wrap split items-center grid gap-[clamp(28px,5vw,72px)]">
        <div>
          <span className="eyebrow items-center inline-flex gap-[8px] mb-[14px] uppercase [box-shadow:3px_3px_0_var(--red)] [font-size:.8rem] [font-weight:800] [letter-spacing:.08em] [padding:7px_14px]"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-pin" } as any)} /></svg> Onde atendemos</span>
          <h2 id="area-t">Levamos a festa até você, em <span className="hl whitespace-normal [box-shadow:4px_4px_0_var(--ink)] [line-height:1] [margin:.06em_0] [padding:.04em_.2em_.08em]">todo o DF</span></h2>
          <p className="lead [font-size:clamp(1.05rem,.5vw_+_.95rem,1.22rem)]">Nossa base fica em Vicente Pires e atendemos Brasília, todas as regiões administrativas e cidades do Entorno.</p>
          <ul className="ra-cloud flex flex-wrap gap-[8px] list-none [margin:0_0_28px]" style={{ justifyContent: "flex-start" }}>
            <li>Vicente Pires</li>
            <li>Taguatinga</li>
            <li>Águas Claras</li>
            <li>Guará</li>
            <li>Asa Sul</li>
            <li>Asa Norte</li>
            <li>Sudoeste</li>
            <li>Lago Sul</li>
            <li>Ceilândia</li>
            <li>Samambaia</li>
            <li>Gama</li>
            <li>Sobradinho</li>
            <li>Park Way</li>
            <li>Jardim Botânico</li>
            <li>Valparaíso</li>
          </ul>
          <a className="btn btn--blue" href="/areas-atendidas">Ver todas as regiões <svg className="icon" aria-hidden="true"><use {...({ href: "#i-arrow" } as any)} /></svg></a>
        </div>
        <div className="reveal is-in">
          <div className="map aspect-[16/10] [box-shadow:var(--hard-lg)] [overflow:hidden]">
            <iframe sandbox="allow-scripts allow-same-origin allow-forms allow-presentation allow-popups" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6362.967405134498!2d-48.0334166!3d-15.815880199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a32d418eed539%3A0x470d358dd78a9831!2sAluguel%20de%20Brinquedos%20-%20Tio%20Titi%20Brinquedos!5e1!3m2!1spt-BR!2sbr!4v1793278119785!5m2!1spt-BR!2sbr" title="Mapa: Tio Titi Brinquedos em Vicente Pires, Brasília" loading="lazy" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionDVidasFrequentes() {
  return (
    <section className="section relative" aria-labelledby="faq-t">
      <div className="wrap">
        <div className="section-head max-w-[760px] text-center [margin:0_auto_clamp(32px,4vw,52px)]">
          <span className="eyebrow items-center inline-flex gap-[8px] mb-[14px] uppercase [box-shadow:3px_3px_0_var(--red)] [font-size:.8rem] [font-weight:800] [letter-spacing:.08em] [padding:7px_14px]"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-sparkles" } as any)} /></svg> Tire suas dúvidas</span>
          <h2 id="faq-t">Dúvidas frequentes</h2>
        </div>
        <div className="faq grid gap-[12px] max-w-[860px] [margin:0_auto]">
          <details>
            <summary>Como funciona o orçamento pelo site?</summary>
            <div className="faq__a">
              <p>Escolha os brinquedos e clique em "Adicionar à lista". Depois, abra a sua lista, preencha os dados do evento (data, horário, endereço e cidade) e envie pelo WhatsApp. Nossa equipe confere a disponibilidade e envia a proposta pelo WhatsApp ou por e-mail, como você preferir.</p>
            </div>
          </details>
          <details>
            <summary>Quanto custa alugar um brinquedo?</summary>
            <div className="faq__a">
              <p>O valor depende do brinquedo, da data, do tempo de locação e da distância até o local da festa. Por isso trabalhamos com orçamento personalizado: monte sua lista no site e receba a proposta sem compromisso.</p>
            </div>
          </details>
          <details>
            <summary>Quanto tempo dura a locação dos brinquedos?</summary>
            <div className="faq__a">
              <p>O tempo padrão de locação é de 4 horas, com a opção de estender. Consulte os valores para cada hora adicional. Caso o período ultrapasse as 23h30, é aplicada uma taxa adicional noturna.</p>
            </div>
          </details>
          <details>
            <summary>O monitor está incluído no valor?</summary>
            <div className="faq__a">
              <p>Sim. Cada brinquedo inclui 1 monitor como cortesia, que acompanha a montagem, a supervisão durante toda a festa e a desmontagem. As exceções são a Piscina de Bolinhas, a Mesa de Air Game e a Mesa de Pebolim (totó), que não incluem monitor — nesses casos, consulte o valor adicional.</p>
            </div>
          </details>
          <details>
            <summary>Quais regiões vocês atendem?</summary>
            <div className="faq__a">
              <p>Atendemos Brasília, todas as regiões administrativas do Distrito Federal e cidades do Entorno. Informe o endereço no pedido de orçamento para confirmarmos as condições de entrega.</p>
            </div>
          </details>
        </div>
        <p className="center mt-l text-center">
          <a href="/perguntas-frequentes">Ver todas as perguntas frequentes <svg className="icon" aria-hidden="true"><use {...({ href: "#i-arrow" } as any)} /></svg></a>
        </p>
      </div>
    </section>
  );
}

function ImportedFooter() {
  return (
    <footer className="site-footer pt-[20px] relative [font-size:.94rem] [margin-top:0]">
      <div className="wrap footer-grid grid">
        <div className="footer-brand">
          <img src="/site-assets/7055a544d0bca36e.webp" width="400" height="247" alt="Tio Titi Festas Infantis" loading="lazy" />
          <p>Desde 1998 levando diversão, segurança e alegria para festas infantis e eventos em Brasília e no Entorno.</p>
          <div className="social flex gap-[10px] mt-[18px]">
            <a aria-label="Tio Titi no Instagram" href="https://www.instagram.com/tiotitibrinquedos/" rel="noopener" target="_blank">
              <svg className="icon" aria-hidden="true">
                <use {...({ href: "#i-instagram" } as any)} />
              </svg>
            </a>
            <a aria-label="Tio Titi no Youtube" href="https://www.youtube.com/@tiotiti3905" rel="noopener" target="_blank">
              <svg className="icon" aria-hidden="true">
                <use {...({ href: "#i-youtube" } as any)} />
              </svg>
            </a>
          </div>
        </div>
        <div>
          <span className="footer-label block mb-[14px] uppercase [font-size:.9rem] [font-weight:800] [letter-spacing:.06em]">Brinquedos</span>
          <ul className="footer-links grid gap-[9px] list-none [margin:0]">
            <li>
              <a href="/brinquedos-inflaveis">Infláveis</a>
            </li>
            <li>
              <a href="/brinquedos-aquaticos">Aquáticos</a>
            </li>
            <li>
              <a href="/jogos-para-festa">Jogos e eletrônicos</a>
            </li>
            <li>
              <a href="/brinquedos-para-criancas-pequenas">Para crianças pequenas</a>
            </li>
            <li>
              <a href="/brinquedos">Todos os brinquedos</a>
            </li>
            <li>
              <a href="/combos-para-festa">Combos para festa</a>
            </li>
          </ul>
        </div>
        <div>
          <span className="footer-label block mb-[14px] uppercase [font-size:.9rem] [font-weight:800] [letter-spacing:.06em]">Tio Titi</span>
          <ul className="footer-links grid gap-[9px] list-none [margin:0]">
            <li>
              <a href="/sobre">Sobre nós</a>
            </li>
            <li>
              <a href="/eventos-corporativos">Empresas, escolas e condomínios</a>
            </li>
            <li>
              <a href="/areas-atendidas">Áreas atendidas</a>
            </li>
            <li>
              <a href="/perguntas-frequentes">Perguntas frequentes</a>
            </li>
            <li>
              <a href="/orcamento">Pedir orçamento</a>
            </li>
            <li>
              <a href="/contato">Contato</a>
            </li>
          </ul>
        </div>
        <div>
          <span className="footer-label block mb-[14px] uppercase [font-size:.9rem] [font-weight:800] [letter-spacing:.06em]">Fale com a gente</span>
          <ul className="footer-contact grid gap-[12px] list-none [margin:0]">
            <li>
              <svg className="icon mt-[4px]" aria-hidden="true">
                <use {...({ href: "#i-whatsapp" } as any)} />
              </svg>
              <a href="https://wa.me/5561974006898?text=Ol%C3%A1%2C%20Tio%20Titi!%20Vim%20pelo%20site%20e%20gostaria%20de%20um%20or%C3%A7amento%20para%20a%20minha%20festa.%20%F0%9F%8E%88" rel="noopener" target="_blank">(61) 97400-6898</a>
            </li>
            <li>
              <svg className="icon mt-[4px]" aria-hidden="true">
                <use {...({ href: "#i-whatsapp" } as any)} />
              </svg>
              <a href="https://wa.me/5561974006899?text=Ol%C3%A1%2C%20Tio%20Titi!%20Vim%20pelo%20site%20e%20gostaria%20de%20um%20or%C3%A7amento%20para%20a%20minha%20festa.%20%F0%9F%8E%88" rel="noopener" target="_blank">(61) 97400-6899</a>
            </li>
            <li>
              <svg className="icon mt-[4px]" aria-hidden="true">
                <use {...({ href: "#i-phone" } as any)} />
              </svg>
              <a href="tel:+556133973074">(61) 3397-3074</a>
            </li>
            <li>
              <svg className="icon mt-[4px]" aria-hidden="true">
                <use {...({ href: "#i-mail" } as any)} />
              </svg>
              <a href="mailto:tiotitifesta@gmail.com">tiotitifesta@gmail.com</a>
            </li>
            <li>
              <svg className="icon mt-[4px]" aria-hidden="true">
                <use {...({ href: "#i-pin" } as any)} />
              </svg>
              <a href="https://maps.app.goo.gl/ZbKHKzTQzkFUPgBa8" rel="noopener" target="_blank">SHVP Chácara 24, Vicente Pires – Brasília/DF</a>
            </li>
            <li>
              <svg className="icon mt-[4px]" aria-hidden="true">
                <use {...({ href: "#i-clock" } as any)} />
              </svg>
              <span>Segunda a domingo, das 8h às 18h</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="wrap footer-bottom flex flex-wrap gap-[10px] justify-between [font-size:.84rem]"><span>© 2026 Tio Titi Brinquedos · Aluguel de brinquedos em Brasília/DF · <a href="/politica-de-privacidade">Política de privacidade</a></span><span>Site desenvolvido por Web Pixel</span></div>
    </footer>
  );
}


function useImportedLayout() {
  useEffect(() => {
    const scrollingAreas = Array.from(document.querySelectorAll<HTMLElement>("[data-site-import-scroll-root]"));
    const scrollTop = () =>
      scrollingAreas.find(
        (node) =>
          node.clientHeight > 0 &&
          node.scrollHeight > node.clientHeight &&
          /^(auto|scroll)$/.test(getComputedStyle(node).overflowY),
      )?.scrollTop ?? window.scrollY;
    const scrollHeaders = Array.from(document.querySelectorAll<HTMLElement>("[data-site-import-scroll-header]"))
      .slice(0, 128)
      .flatMap((node) => {
        try {
          const states = JSON.parse(node.dataset["siteImportScrollHeader"] || "{}");
          if (!states || typeof states !== "object") return [];
          for (const key of ["desktop", "mobile"]) {
            const state = states[key];
            if (
              !state ||
              !Array.isArray(state.added) ||
              !Array.isArray(state.removed) ||
              state.added.length + state.removed.length > 32
            )
              delete states[key];
          }
          return [
            {
              node,
              states,
              original: new Set(node.classList),
              originalFill: node.getAttribute("fill"),
              transform: node.style.getPropertyValue("transform"),
              priority: node.style.getPropertyPriority("transform"),
            },
          ];
        } catch {
          return [];
        }
      });
    function syncScrollHeaders(reset = false) {
      for (const { node, states, original, originalFill, transform, priority } of scrollHeaders) {
        if (!reset && node.getAttribute("data-import-menu-open") === "true") continue;
        const state = states[innerWidth < 768 ? "mobile" : "desktop"];
        if ([states.desktop, states.mobile].some((entry) => entry && Object.hasOwn(entry, "fill"))) {
          if (originalFill === null) node.removeAttribute("fill");
          else node.setAttribute("fill", originalFill);
        }
        if (states.desktop?.transform || states.mobile?.transform) {
          if (transform) node.style.setProperty("transform", transform, priority);
          else node.style.removeProperty("transform");
        }
        for (const value of [states.desktop, states.mobile].filter(Boolean) as {
          added: string[];
          removed: string[];
        }[]) {
          for (const token of [...(value.added || []), ...(value.removed || [])]) {
            if (typeof token !== "string" || !token || /\s/.test(token)) continue;
            node.classList.toggle(token, original.has(token));
          }
        }
        if (reset || !state || !Number.isFinite(state.threshold) || scrollTop() < state.threshold) continue;
        let until = state.until;
        if (
          typeof state.untilAnchor === "string" &&
          /^\d$/.test(state.untilAnchor) &&
          Number.isFinite(state.untilProgress) &&
          Math.abs(state.untilProgress) <= 2
        ) {
          const anchor = document.querySelector<HTMLElement>(
            '[data-site-import-header-end="' + state.untilAnchor + '"]',
          );
          if (anchor) until = anchor.getBoundingClientRect().top + scrollTop() + innerHeight * state.untilProgress;
        }
        if (Number.isFinite(until) && scrollTop() >= until) continue;
        if (state.fill === null) node.removeAttribute("fill");
        else if (typeof state.fill === "string" && state.fill.length <= 256 && !/url\(/i.test(state.fill))
          node.setAttribute("fill", state.fill);
        if (
          typeof state.transform === "string" &&
          state.transform.length <= 128 &&
          CSS.supports("transform", state.transform)
        )
          node.style.setProperty("transform", state.transform, "important");
        for (const token of state.added || [])
          if (typeof token === "string" && token && !/\s/.test(token)) node.classList.add(token);
        for (const token of state.removed || [])
          if (typeof token === "string" && token && !/\s/.test(token)) node.classList.remove(token);
      }
    }
    const handleScroll = () => {
      syncScrollHeaders();
    };
    function resizeSummaries() {
      syncScrollHeaders();
    }
    document.addEventListener("load", handleScroll, true);
    resizeSummaries();
    const parallaxFrame = requestAnimationFrame(handleScroll);
    window.addEventListener("resize", resizeSummaries);
    document.addEventListener("scroll", handleScroll, { passive: true, capture: true });
    return () => {
      cancelAnimationFrame(parallaxFrame);
      syncScrollHeaders(true);
      document.removeEventListener("load", handleScroll, true);
      window.removeEventListener("resize", resizeSummaries);
      document.removeEventListener("scroll", handleScroll, true);
    };
  }, []);
}
