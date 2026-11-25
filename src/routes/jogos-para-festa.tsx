import { useEffect, createContext, useContext, type MouseEvent } from "react";
import { useState } from "react";
import { useRef } from "react";
import { createFileRoute } from "@tanstack/react-router";
import repairCSS from "../styles/import-repairs.css?raw";
import capturedCSS from "../styles/pages/jogos-para-festa.css?raw";

export const Route = createFileRoute("/jogos-para-festa")({
  head: () => ({ meta: [{"title": "Aluguel de Jogos para Festa em Brasília | Fliperama e mais"}, {"name": "description", "content": "Aluguel de Jogos para Festa em Brasília | Fliperama e mais para festas no DF e Entorno, com entrega, montagem e monitor incluso."}, {"property": "og:title", "content": "Aluguel de Jogos para Festa em Brasília | Fliperama e mais"}, {"property": "og:description", "content": "Aluguel de Jogos para Festa em Brasília | Fliperama e mais para festas no DF e Entorno, com entrega, montagem e monitor incluso."}, {"property": "og:type", "content": "website"}, {"name": "twitter:card", "content": "summary_large_image"}] }),
  staticData: { importedDocument: { html: { "className": "js", "lang": "pt-BR" }, body: {  } } },
  component: Index,
});


type QuoteItem = { name: string; href: string; image: string; quantity: number };
const QuoteContext = createContext<{
  items: QuoteItem[];
  add: (event: MouseEvent<HTMLButtonElement>) => void;
  addCombo: (event: MouseEvent<HTMLButtonElement>) => void;
}>({ items: [], add: () => {}, addCombo: () => {} });

function Index() {

  const [mobileOpen, setMobileOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [items, setItems] = useState<QuoteItem[]>([]);
  const [ready, setReady] = useState(false);
  const returnFocus = useRef<HTMLElement | null>(null);
  const total = items.reduce((sum, item) => sum + item.quantity, 0);
  useEffect(() => {
    try {
      const saved: unknown = JSON.parse(sessionStorage.getItem("tio-titi-quote") || "[]");
      if (Array.isArray(saved)) setItems(saved.filter((item): item is QuoteItem =>
        typeof item?.name === "string" && typeof item?.href === "string" &&
        item.href.startsWith("/brinquedos/") && typeof item?.image === "string" &&
        item.image.startsWith("/site-assets/") && Number.isInteger(item.quantity) && item.quantity > 0));
    } catch { /* A new list is usable even when browser storage is unavailable. */ }
    setReady(true);
  }, []);
  useEffect(() => {
    if (ready) { try { sessionStorage.setItem("tio-titi-quote", JSON.stringify(items)); } catch {} }
  }, [items, ready]);
  const closeDrawer = () => { setDrawerOpen(false); returnFocus.current?.focus(); };
  const openDrawer = (event: MouseEvent<HTMLButtonElement>) => {
    returnFocus.current = event.currentTarget;
    setMobileOpen(false); setOpenMenu0(null); setDrawerOpen(true);
  };
  useEffect(() => {
    if (!drawerOpen && !mobileOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    if (drawerOpen) document.querySelector<HTMLButtonElement>('[aria-label="Fechar lista"]')?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setDrawerOpen(false); setMobileOpen(false); setOpenMenu0(null);
        returnFocus.current?.focus();
      }
      if (event.key === "Tab" && drawerOpen) {
        const controls = Array.from(document.querySelectorAll<HTMLElement>('#drawer a, #drawer button'));
        const first = controls.at(0), last = controls.at(-1);
        if (event.shiftKey && document.activeElement === first && last) { event.preventDefault(); last.focus(); }
        if (!event.shiftKey && document.activeElement === last && first) { event.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = original; document.removeEventListener("keydown", onKey); };
  }, [drawerOpen, mobileOpen]);
  const addItems = (incoming: QuoteItem[]) => setItems(current => {
    const next = [...current];
    for (const item of incoming) if (!next.some(existing => existing.href === item.href)) next.push(item);
    return next;
  });
  const add = (event: MouseEvent<HTMLButtonElement>) => {
    const card = event.currentTarget.closest("article");
    const link = card?.querySelector<HTMLAnchorElement>("h3 a");
    const image = card?.querySelector<HTMLImageElement>("img");
    if (!link || !image) return;
    addItems([{ name: link.textContent?.trim() || "", href: link.getAttribute("href") || "", image: image.getAttribute("src") || "", quantity: 1 }]);
  };
  const addCombo = (event: MouseEvent<HTMLButtonElement>) => {
    const card = event.currentTarget.closest("article");
    if (!card) return;
    const images = card.querySelectorAll<HTMLImageElement>(".combo__imgs img");
    addItems(Array.from(card.querySelectorAll<HTMLAnchorElement>("li a")).map((link, index) => ({
      name: link.textContent?.trim() || "", href: link.getAttribute("href") || "",
      image: images.item(index)?.getAttribute("src") || "", quantity: 1,
    })));
  };
  const changeQuantity = (href: string, delta: number) => setItems(current => current.map(item =>
    item.href === href ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item));

  const [openMenu0, setOpenMenu0] = useState(null as string | null);
  const menuRoot0 = useRef<Element | null>(null);
  const menuRoot1 = useRef<Element | null>(null);
  useEffect(() => {
    if (!openMenu0) return;
    const closeOutside = (event: globalThis.MouseEvent) => {
      if (event.target instanceof Node && ![menuRoot0.current, menuRoot1.current].some(root => root?.contains(event.target as Node))) setOpenMenu0(null);
    };
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === "Escape") setOpenMenu0(null); };
    document.addEventListener("click", closeOutside);
    document.addEventListener("keydown", closeOnEscape);
    return () => { document.removeEventListener("click", closeOutside); document.removeEventListener("keydown", closeOnEscape); };
  }, [openMenu0]);
  useImportedLayout();
  return (
    <QuoteContext.Provider value={{ items, add, addCombo }}>
      <style>{capturedCSS + repairCSS}</style>
    <style>{"@layer imported-inline{@media(max-width:960px){[data-import-mobile-style=\"0\"]{transform:none!important;}}}"}</style>
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
      <header className="site-header" ref={node => { menuRoot0.current = node; }} data-site-import-scroll-header={"{\"desktop\":{\"added\":[\"is-scrolled\"],\"removed\":[],\"threshold\":648},\"mobile\":{\"added\":[\"is-scrolled\"],\"removed\":[],\"threshold\":633}}"}>
        <div className="wrap">
          <a className="logo" aria-label="Tio Titi – página inicial" href="/">
            <img src="/site-assets/7055a544d0bca36e.webp" width="400" height="247" alt="Tio Titi Festas Infantis – aluguel de brinquedos em Brasília" />
          </a>
          <nav className={mobileOpen ? "nav is-open" : "nav"} id="nav" aria-label="Menu principal">
            <ul className="nav__list">
              <li>
                <a className="nav__link" href="/">Início</a>
              </li>
              <li className="has-dropdown">
                <button className="nav__link" aria-expanded={openMenu0 === "observed-0"} onClick={event => { event.preventDefault(); event.stopPropagation(); setOpenMenu0(open => open === "observed-0" ? null : "observed-0"); }} type="button" aria-controls="dd-brinquedos" aria-current="page">Brinquedos <svg className="icon" aria-hidden="true"><use {...({ href: "#i-down" } as any)} /></svg></button>
                <div className="dropdown" data-import-mobile-style={"0"} hidden={openMenu0 === "observed-0" ? undefined : (true)} ref={node => { menuRoot1.current = node; }} style={openMenu0 === "observed-0" ? { opacity: "1", transform: "translate(-50%)", visibility: "visible" } : ({ opacity: "1", transform: "translate(-50%)", visibility: "visible", display: "none" })} id="dd-brinquedos" data-site-import-observed-popup="" data-site-import-responsive="562">
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
                  <a className="c-purple" href="#">
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
            <div className="nav__cta"><button className="btn btn--blue" type="button" onClick={openDrawer}><svg className="icon" aria-hidden="true"><use {...({ href: "#i-list" } as any)} /></svg> Minha lista de orçamento</button><a className="btn btn--wa" href="https://wa.me/5561974006898?text=Ol%C3%A1%2C%20Tio%20Titi!%20Vim%20pelo%20site%20e%20gostaria%20de%20um%20or%C3%A7amento%20para%20a%20minha%20festa.%20%F0%9F%8E%88" rel="noopener" target="_blank"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-whatsapp" } as any)} /></svg> Falar no WhatsApp</a></div>
          </nav>
          <div className="header-actions"><button className="btn-lista" type="button" onClick={openDrawer}><svg className="icon" aria-hidden="true"><use {...({ href: "#i-list" } as any)} /></svg><span className="lbl">Minha lista</span><span className={"\x73r-only"}> de orçamento</span><span className="badge-count" data-counted={total > 0} aria-hidden="true">{total}</span></button><a className="btn btn--wa btn--sm header-wa" href="https://wa.me/5561974006898?text=Ol%C3%A1%2C%20Tio%20Titi!%20Vim%20pelo%20site%20e%20gostaria%20de%20um%20or%C3%A7amento%20para%20a%20minha%20festa.%20%F0%9F%8E%88" rel="noopener" target="_blank"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-whatsapp" } as any)} /></svg> WhatsApp</a><button className="menu-toggle" type="button" onClick={event => { returnFocus.current = event.currentTarget; setMobileOpen(open => !open); setOpenMenu0(null); }} aria-expanded={mobileOpen} aria-controls="nav" aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}><svg className="icon" aria-hidden="true"><use {...({ href: "#i-menu" } as any)} /></svg></button></div>
        </div>
      </header>
      <main id="conteudo">
        <section className={"page-hero \x62g-confetti relative [overflow:hidden] [padding:clamp(28px,4vw,52px)_0_clamp(36px,5vw,64px)]"}>
          <div className="wrap relative [z-index:2]">
            <nav className="breadcrumb mb-[18px] [font-size:.85rem]" aria-label="Você está em">
              <ol>
                <li>
                  <a href="/">Início</a>
                </li>
                <li>
                  <a href="/brinquedos">Brinquedos</a>
                </li>
                <li aria-current="page">Jogos e eletrônicos</li>
              </ol>
            </nav>
            <span className="eyebrow c-purple items-center inline-flex gap-[8px] mb-[14px] uppercase [box-shadow:3px_3px_0_#fff] [font-size:.8rem] [font-weight:800] [letter-spacing:.08em] [padding:7px_14px]"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-gamepad" } as any)} /></svg> 6 brinquedos</span>
            <h1>Aluguel de Jogos para Festa em Brasília</h1>
            <p className="lead max-w-[760px] [font-size:clamp(1.05rem,.5vw_+_.95rem,1.22rem)]">Jogos são perfeitos para festas com crianças maiores, adolescentes e adultos — e ocupam pouco espaço. Monte uma área de jogos completa com fliperama, air game, totó, futmesa, sinuca infantil e basquete, ideal para salões, apartamentos e eventos corporativos.</p>
            <div className="btn-row items-center flex flex-wrap gap-[14px]">
              <a className="btn" href="#lista"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-sparkles" } as any)} /></svg> Ver os brinquedos</a>
              <a className="btn btn--wa" href="https://wa.me/5561974006898?text=Ol%C3%A1%2C%20Tio%20Titi!%20Vim%20pelo%20site%20e%20gostaria%20de%20um%20or%C3%A7amento%20de%20brinquedos%20jogos%20e%20eletr%C3%B4nicos." rel="noopener" target="_blank"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-whatsapp" } as any)} /></svg> Pedir indicação</a>
            </div>
          </div>
        </section>
        <ImportedSectionBrinquedosJogosEEletr />
        <section className="section section--white relative">
          <div className="wrap" style={{ maxWidth: "860px" }}>
            <div className="prose c-purple [font-size:1.04rem]">
              <h2>Monte uma área de jogos que diverte todo mundo</h2>
              <ul>
                <li><strong>Festa teen:</strong> <a href="/brinquedos/fliperama">Fliperama</a> + <a href="/brinquedos/air-game">Air Game</a> + <a href="/brinquedos/futmesa">Futmesa</a>.</li>
                <li><strong>Festa em salão de prédio:</strong> <a href="/brinquedos/sinuca-infantil">Sinuca Infantil</a> + <a href="/brinquedos/toto-pebolim">Totó</a> + <a href="/brinquedos/air-game">Air Game</a>.</li>
                <li><strong>Eventos corporativos:</strong> <a href="/brinquedos/basquete">Basquete</a> + Futmesa + Fliperama, que animam também os adultos.</li>
              </ul>
              <h2>Cuidados com jogos eletrônicos</h2>
              <p>Fliperama e Air Game precisam de local coberto e tomada próxima. O Air Game e o Totó não incluem monitor, mas ele pode ser contratado à parte.</p>
            </div>
          </div>
        </section>
        <ImportedSectionQuemAlugouAprovou />
        <section className="section relative" aria-labelledby="faq-t">
          <div className="wrap">
            <div className="section-head max-w-[760px] text-center [margin:0_auto_clamp(32px,4vw,52px)]">
              <span className="eyebrow items-center inline-flex gap-[8px] mb-[14px] uppercase [box-shadow:3px_3px_0_var(--red)] [font-size:.8rem] [font-weight:800] [letter-spacing:.08em] [padding:7px_14px]"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-sparkles" } as any)} /></svg> Tire suas dúvidas</span>
              <h2 id="faq-t">Perguntas sobre jogos e eletrônicos</h2>
            </div>
            <div className="faq grid gap-[12px] max-w-[860px] [margin:0_auto]">
              <details>
                <summary>Os jogos podem ficar ao ar livre?</summary>
                <div className="faq__a">
                  <p>Fliperama, Air Game, Totó e Sinuca devem ficar em local coberto. Futmesa e Basquete podem ficar ao ar livre em área plana.</p>
                </div>
              </details>
              <details>
                <summary>Jogos são indicados para adultos?</summary>
                <div className="faq__a">
                  <p>Sim! Fliperama, Air Game juvenil/adulto, Futmesa, Totó e Basquete divertem adultos e são ótimos para confraternizações.</p>
                </div>
              </details>
            </div>
            <p className="center mt-l text-center">
              <a href="/perguntas-frequentes">Ver todas as perguntas frequentes <svg className="icon" aria-hidden="true"><use {...({ href: "#i-arrow" } as any)} /></svg></a>
            </p>
          </div>
        </section>
        <section className="section section--tint relative" style={{ padding: "48px 0px" }}>
          <div className="wrap center text-center">
            <h2 style={{ fontSize: "1.4rem" }}>Veja também</h2>
            <div className="pill-links flex flex-wrap gap-[10px] justify-center">
              <a className="c-red items-center inline-flex gap-[8px] [box-shadow:var(--hard-sm)] [font-weight:600] [padding:10px_18px]" href="/brinquedos-inflaveis"><span className="dd-ico"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-tent" } as any)} /></svg></span>Aluguel de Brinquedos Infláveis</a>
              <a className="c-blue items-center inline-flex gap-[8px] [box-shadow:var(--hard-sm)] [font-weight:600] [padding:10px_18px]" href="/brinquedos-aquaticos"><span className="dd-ico"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-droplet" } as any)} /></svg></span>Aluguel de Brinquedos Aquáticos</a>
              <a className="c-green items-center inline-flex gap-[8px] [box-shadow:var(--hard-sm)] [font-weight:600] [padding:10px_18px]" href="/brinquedos-para-criancas-pequenas"><span className="dd-ico"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-smile" } as any)} /></svg></span>Brinquedos para bebês e crianças pequenas</a>
              <a className="c-yellow items-center inline-flex gap-[8px] [box-shadow:var(--hard-sm)] [font-weight:600] [padding:10px_18px]" href="/combos-para-festa"><span className="dd-ico"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-gift" } as any)} /></svg></span>Combos para festa</a>
            </div>
          </div>
        </section>
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
      <aside className={(drawerOpen ? "drawer is-open " : "drawer ") + "flex-col fixed w-[min(420px,100%)] [bottom:0] [box-shadow:var(--shadow-lg)] [right:0] [top:0] [z-index:81]"} id="drawer" aria-hidden={!drawerOpen} inert={!drawerOpen} aria-label="Minha lista de orçamento">
        <div className="drawer__head items-center flex justify-between [padding:18px_20px]">
          <span className="drawer__title items-center flex gap-[8px] uppercase [font-size:1.15rem] [font-weight:900]"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-list" } as any)} /></svg> Minha lista <small>{total} {total === 1 ? "brinquedo" : "brinquedos"}</small></span>
          <button className="icon-btn grid h-[34px] place-items-center w-[34px] [cursor:pointer]" type="button" aria-label="Fechar lista" onClick={closeDrawer}>
            <svg className="icon" aria-hidden="true">
              <use {...({ href: "#i-x" } as any)} />
            </svg>
          </button>
        </div>
        <div className="flex-1 [overflow-y:auto] [padding:18px_20px]" id="drawer-list">
          {items.length ? <ul className="cart-list">{items.map(item => <li className="cart-item" key={item.href}>
            <img src={item.image} alt="" width="64" height="64" />
            <div><a className="cart-item__name" href={item.href}>{item.name}</a></div>
            <div className="cart-item__ctrl"><span className="qty">
              <button type="button" onClick={() => changeQuantity(item.href, -1)} aria-label="Diminuir quantidade"><svg className="icon" aria-hidden="true"><use href="#i-minus" /></svg></button>
              <output aria-live="polite">{item.quantity}</output>
              <button type="button" onClick={() => changeQuantity(item.href, 1)} aria-label="Aumentar quantidade"><svg className="icon" aria-hidden="true"><use href="#i-plus" /></svg></button>
            </span><button type="button" className="icon-btn" onClick={() => setItems(current => current.filter(existing => existing.href !== item.href))} aria-label={`Remover ${item.name}`}><svg className="icon" aria-hidden="true"><use href="#i-trash" /></svg></button></div>
          </li>)}</ul> : <div className="cart-empty text-center [padding:24px_12px]"><div className="dd-ico c-yellow [margin:0_auto_12px]"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-list" } as any)} /></svg></div><b>Sua lista está vazia</b>Navegue pelos brinquedos e clique em "Adicionar à lista" para montar seu orçamento.</div>}
        </div>
        <div className="drawer__foot grid gap-[10px] [padding:16px_20px_calc(16px_+_env(safe-area-inset-bottom))]"><a className="btn btn--block [width:100%]" href="/orcamento"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-send" } as any)} /></svg> Pedir orçamento desta lista</a><a className="btn btn--ghost btn--block [width:100%]" href="/brinquedos">Continuar escolhendo</a><p>Você informa data, horário e local na próxima etapa.</p></div>
      </aside>
      <div className={drawerOpen ? "drawer-backdrop is-open fixed [inset:0] [z-index:80]" : "drawer-backdrop fixed invisible [inset:0] [z-index:80]"} onClick={closeDrawer} aria-hidden="true" />
      <a className="wa-float h-[60px] place-items-center w-[60px] [box-shadow:4px_4px_0_var(--ink)]" aria-label="Conversar com a Tio Titi no WhatsApp" href="https://wa.me/5561974006898?text=Ol%C3%A1%2C%20Tio%20Titi!%20Vim%20pelo%20site%20e%20gostaria%20de%20um%20or%C3%A7amento%20para%20a%20minha%20festa.%20%F0%9F%8E%88" rel="noopener" target="_blank">
        <svg className="icon" aria-hidden="true">
          <use {...({ href: "#i-whatsapp" } as any)} />
        </svg>
      </a>
    </QuoteContext.Provider>
  );
}

function ImportedSectionBrinquedosJogosEEletr() {
  const { items, add, addCombo } = useContext(QuoteContext);
  return (
    <section className="section relative" style={{ paddingTop: "16px" }} id="lista" aria-labelledby="lista-t">
      <div className="wrap">
        <h2 className={"\x73r-only"} id="lista-t">Brinquedos Jogos e eletrônicos</h2>
        <div className="grid gap-[22px] grid-cols-[repeat(auto-fill,minmax(260px,1fr))]">
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
                <button className={(items.some(item => item.name === "Fliperama Multijogos") ? "is-added " : "") + "add-mini items-center inline-flex flex-none gap-[6px] h-[38px] relative [cursor:pointer] [font:600_.84rem_var(--font)] [font-size:.84rem]! [font-weight:800]! [padding:0_12px] [z-index:2]"} type="button" onClick={add}>
                  <svg className="icon" aria-hidden="true">
                    <use {...({ href: "#i-plus" } as any)} />
                  </svg>
                  <span className="lbl">{items.some(item => item.name === "Fliperama Multijogos") ? "Na lista" : "Adicionar"}</span>
                  <span className={"\x73r-only"}> Fliperama Multijogos à lista</span>
                </button>
              </div>
            </div>
          </article>
          <article className="toy-card flex flex-col relative [overflow:hidden]">
            <a className="toy-card__media aspect-[4/3] block [overflow:hidden]" aria-hidden="true" href="/brinquedos/air-game" tabIndex={-1}>
              <img src="/site-assets/2cd198bff8d52a28.webp" srcSet="/site-assets/3bb66b68e1338933.webp 320w, /site-assets/2cd198bff8d52a28.webp 640w, /site-assets/ccefd0f53c50248b.webp 800w, /site-assets/ce6b11ea377747ca.webp 1024w" sizes="(max-width: 600px) 86vw, (max-width: 1000px) 46vw, 300px" width="1024" height="680" alt="Aluguel de Air Game (Air Hockey) para festas em Brasília – Tio Titi" loading="lazy" decoding="async" />
            </a>
            <div className="toy-card__body flex flex-1 flex-col gap-[8px] [padding:18px_18px_20px]">
              <h3>
                <a href="/brinquedos/air-game">Air Game (Air Hockey)</a>
              </h3>
              <p>A mesa de disco flutuante que vira campeonato entre os convidados.</p>
              <div className="flex flex-wrap gap-[6px] mt-[2px]">
                <span className="chip items-center inline-flex gap-[5px] [font-size:.78rem] [font-weight:600] [line-height:1.3] [padding:4px_10px]"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-smile" } as any)} /></svg> A partir de 6 anos</span>
                <span className="chip items-center inline-flex gap-[5px] [font-size:.78rem] [font-weight:600] [line-height:1.3] [padding:4px_10px]"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-ruler" } as any)} /></svg> Comprimento: 1,85 m</span>
              </div>
              <div className="items-center flex gap-[8px] justify-between pt-[10px] [margin-top:auto]">
                <span className="toy-card__link items-center inline-flex gap-[4px] uppercase whitespace-nowrap [font-size:.76rem] [font-weight:800] [letter-spacing:.03em]">Ver detalhes <svg className="icon" aria-hidden="true"><use {...({ href: "#i-arrow" } as any)} /></svg></span>
                <button className={(items.some(item => item.name === "Air Game (Air Hockey)") ? "is-added " : "") + "add-mini items-center inline-flex flex-none gap-[6px] h-[38px] relative [cursor:pointer] [font:600_.84rem_var(--font)] [font-size:.84rem]! [font-weight:800]! [padding:0_12px] [z-index:2]"} type="button" onClick={add}>
                  <svg className="icon" aria-hidden="true">
                    <use {...({ href: "#i-plus" } as any)} />
                  </svg>
                  <span className="lbl">{items.some(item => item.name === "Air Game (Air Hockey)") ? "Na lista" : "Adicionar"}</span>
                  <span className={"\x73r-only"}> Air Game (Air Hockey) à lista</span>
                </button>
              </div>
            </div>
          </article>
          <article className="toy-card flex flex-col relative [overflow:hidden]">
            <a className="toy-card__media aspect-[4/3] block [overflow:hidden]" aria-hidden="true" href="/brinquedos/toto-pebolim" tabIndex={-1}>
              <img src="/site-assets/a2f5c0bdc9d1e8bb.webp" srcSet="/site-assets/fff4f8e2dfcec910.webp 320w, /site-assets/a2f5c0bdc9d1e8bb.webp 640w, /site-assets/8e2e4f46119b658d.webp 800w, /site-assets/8f1311e0f10449c7.webp 884w" sizes="(max-width: 600px) 86vw, (max-width: 1000px) 46vw, 300px" width="884" height="600" alt="Aluguel de Totó / Pebolim para festas em Brasília – Tio Titi" loading="lazy" decoding="async" />
            </a>
            <div className="toy-card__body flex flex-1 flex-col gap-[8px] [padding:18px_18px_20px]">
              <h3>
                <a href="/brinquedos/toto-pebolim">Totó / Pebolim</a>
              </h3>
              <p>O clássico futebol de mesa para até 4 jogadores.</p>
              <div className="flex flex-wrap gap-[6px] mt-[2px]">
                <span className="chip items-center inline-flex gap-[5px] [font-size:.78rem] [font-weight:600] [line-height:1.3] [padding:4px_10px]"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-smile" } as any)} /></svg> Todas as idades</span>
                <span className="chip items-center inline-flex gap-[5px] [font-size:.78rem] [font-weight:600] [line-height:1.3] [padding:4px_10px]"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-ruler" } as any)} /></svg> Altura: 80 cm</span>
              </div>
              <div className="items-center flex gap-[8px] justify-between pt-[10px] [margin-top:auto]">
                <span className="toy-card__link items-center inline-flex gap-[4px] uppercase whitespace-nowrap [font-size:.76rem] [font-weight:800] [letter-spacing:.03em]">Ver detalhes <svg className="icon" aria-hidden="true"><use {...({ href: "#i-arrow" } as any)} /></svg></span>
                <button className={(items.some(item => item.name === "Totó / Pebolim") ? "is-added " : "") + "add-mini items-center inline-flex flex-none gap-[6px] h-[38px] relative [cursor:pointer] [font:600_.84rem_var(--font)] [font-size:.84rem]! [font-weight:800]! [padding:0_12px] [z-index:2]"} type="button" onClick={add}>
                  <svg className="icon" aria-hidden="true">
                    <use {...({ href: "#i-plus" } as any)} />
                  </svg>
                  <span className="lbl">{items.some(item => item.name === "Totó / Pebolim") ? "Na lista" : "Adicionar"}</span>
                  <span className={"\x73r-only"}> Totó / Pebolim à lista</span>
                </button>
              </div>
            </div>
          </article>
          <article className="toy-card flex flex-col relative [overflow:hidden]">
            <a className="toy-card__media aspect-[4/3] block [overflow:hidden]" aria-hidden="true" href="/brinquedos/futmesa" tabIndex={-1}>
              <img src="/site-assets/be0104a8d8ad1498.webp" srcSet="/site-assets/21e6744bc602665d.webp 320w, /site-assets/be0104a8d8ad1498.webp 640w, /site-assets/43cb229dfc322806.webp 800w" sizes="(max-width: 600px) 86vw, (max-width: 1000px) 46vw, 300px" width="800" height="1067" alt="Aluguel de Futmesa para festas em Brasília – Tio Titi" loading="lazy" decoding="async" />
            </a>
            <div className="toy-card__body flex flex-1 flex-col gap-[8px] [padding:18px_18px_20px]">
              <h3>
                <a href="/brinquedos/futmesa">Futmesa</a>
              </h3>
              <p>Futebol com tênis de mesa: o jogo do momento para 2 ou 4 jogadores.</p>
              <div className="flex flex-wrap gap-[6px] mt-[2px]">
                <span className="chip items-center inline-flex gap-[5px] [font-size:.78rem] [font-weight:600] [line-height:1.3] [padding:4px_10px]"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-smile" } as any)} /></svg> Todas as idades</span>
                <span className="chip items-center inline-flex gap-[5px] [font-size:.78rem] [font-weight:600] [line-height:1.3] [padding:4px_10px]"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-ruler" } as any)} /></svg> Comprimento: 2,40 m</span>
              </div>
              <div className="items-center flex gap-[8px] justify-between pt-[10px] [margin-top:auto]">
                <span className="toy-card__link items-center inline-flex gap-[4px] uppercase whitespace-nowrap [font-size:.76rem] [font-weight:800] [letter-spacing:.03em]">Ver detalhes <svg className="icon" aria-hidden="true"><use {...({ href: "#i-arrow" } as any)} /></svg></span>
                <button className={(items.some(item => item.name === "Futmesa") ? "is-added " : "") + "add-mini items-center inline-flex flex-none gap-[6px] h-[38px] relative [cursor:pointer] [font:600_.84rem_var(--font)] [font-size:.84rem]! [font-weight:800]! [padding:0_12px] [z-index:2]"} type="button" onClick={add}>
                  <svg className="icon" aria-hidden="true">
                    <use {...({ href: "#i-plus" } as any)} />
                  </svg>
                  <span className="lbl">{items.some(item => item.name === "Futmesa") ? "Na lista" : "Adicionar"}</span>
                  <span className={"\x73r-only"}> Futmesa à lista</span>
                </button>
              </div>
            </div>
          </article>
          <article className="toy-card flex flex-col relative [overflow:hidden]">
            <a className="toy-card__media aspect-[4/3] block [overflow:hidden]" aria-hidden="true" href="/brinquedos/basquete" tabIndex={-1}>
              <img src="/site-assets/0a2ea5c5e2fd992c.webp" srcSet="/site-assets/c837f196b64c73f8.webp 320w, /site-assets/0a2ea5c5e2fd992c.webp 640w, /site-assets/f00b756bba309e07.webp 800w, /site-assets/0d0bfada39544962.webp 1200w" sizes="(max-width: 600px) 86vw, (max-width: 1000px) 46vw, 300px" width="1200" height="1600" alt="Aluguel de Desafio do Basquete para festas em Brasília – Tio Titi" loading="lazy" decoding="async" />
            </a>
            <div className="toy-card__body flex flex-1 flex-col gap-[8px] [padding:18px_18px_20px]">
              <h3>
                <a href="/brinquedos/basquete">Desafio do Basquete</a>
              </h3>
              <p>Acerte a cesta e desafie os amigos: diversão para todas as idades.</p>
              <div className="flex flex-wrap gap-[6px] mt-[2px]">
                <span className="chip items-center inline-flex gap-[5px] [font-size:.78rem] [font-weight:600] [line-height:1.3] [padding:4px_10px]"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-smile" } as any)} /></svg> Todas as idades</span>
                <span className="chip items-center inline-flex gap-[5px] [font-size:.78rem] [font-weight:600] [line-height:1.3] [padding:4px_10px]"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-ruler" } as any)} /></svg> Altura: 2,10 m</span>
              </div>
              <div className="items-center flex gap-[8px] justify-between pt-[10px] [margin-top:auto]">
                <span className="toy-card__link items-center inline-flex gap-[4px] uppercase whitespace-nowrap [font-size:.76rem] [font-weight:800] [letter-spacing:.03em]">Ver detalhes <svg className="icon" aria-hidden="true"><use {...({ href: "#i-arrow" } as any)} /></svg></span>
                <button className={(items.some(item => item.name === "Desafio do Basquete") ? "is-added " : "") + "add-mini items-center inline-flex flex-none gap-[6px] h-[38px] relative [cursor:pointer] [font:600_.84rem_var(--font)] [font-size:.84rem]! [font-weight:800]! [padding:0_12px] [z-index:2]"} type="button" onClick={add}>
                  <svg className="icon" aria-hidden="true">
                    <use {...({ href: "#i-plus" } as any)} />
                  </svg>
                  <span className="lbl">{items.some(item => item.name === "Desafio do Basquete") ? "Na lista" : "Adicionar"}</span>
                  <span className={"\x73r-only"}> Desafio do Basquete à lista</span>
                </button>
              </div>
            </div>
          </article>
          <article className="toy-card flex flex-col relative [overflow:hidden]">
            <a className="toy-card__media aspect-[4/3] block [overflow:hidden]" aria-hidden="true" href="/brinquedos/sinuca-infantil" tabIndex={-1}>
              <img src="/site-assets/e0a8adef44fc7572.webp" srcSet="/site-assets/9d99c3cc6d7e249e.webp 320w, /site-assets/e0a8adef44fc7572.webp 600w" sizes="(max-width: 600px) 86vw, (max-width: 1000px) 46vw, 300px" width="600" height="400" alt="Aluguel de Sinuca Infantil para festas em Brasília – Tio Titi" loading="lazy" decoding="async" />
              <span className="toy-card__tag left-[12px] absolute uppercase top-[12px] [box-shadow:2px_2px_0_var(--ink)] [font-size:.74rem] [font-weight:700] [letter-spacing:.04em] [padding:5px_11px]">Novidade</span>
            </a>
            <div className="toy-card__body flex flex-1 flex-col gap-[8px] [padding:18px_18px_20px]">
              <h3>
                <a href="/brinquedos/sinuca-infantil">Sinuca Infantil</a>
              </h3>
              <p>Mesa de bilhar na medida das crianças, para festas e eventos.</p>
              <div className="flex flex-wrap gap-[6px] mt-[2px]">
                <span className="chip items-center inline-flex gap-[5px] [font-size:.78rem] [font-weight:600] [line-height:1.3] [padding:4px_10px]"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-smile" } as any)} /></svg> Crianças e pré-adolescentes</span>
                <span className="chip items-center inline-flex gap-[5px] [font-size:.78rem] [font-weight:600] [line-height:1.3] [padding:4px_10px]"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-ruler" } as any)} /></svg> Comprimento: 1,40 m</span>
              </div>
              <div className="items-center flex gap-[8px] justify-between pt-[10px] [margin-top:auto]">
                <span className="toy-card__link items-center inline-flex gap-[4px] uppercase whitespace-nowrap [font-size:.76rem] [font-weight:800] [letter-spacing:.03em]">Ver detalhes <svg className="icon" aria-hidden="true"><use {...({ href: "#i-arrow" } as any)} /></svg></span>
                <button className={(items.some(item => item.name === "Sinuca Infantil") ? "is-added " : "") + "add-mini items-center inline-flex flex-none gap-[6px] h-[38px] relative [cursor:pointer] [font:600_.84rem_var(--font)] [font-size:.84rem]! [font-weight:800]! [padding:0_12px] [z-index:2]"} type="button" onClick={add}>
                  <svg className="icon" aria-hidden="true">
                    <use {...({ href: "#i-plus" } as any)} />
                  </svg>
                  <span className="lbl">{items.some(item => item.name === "Sinuca Infantil") ? "Na lista" : "Adicionar"}</span>
                  <span className={"\x73r-only"}> Sinuca Infantil à lista</span>
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionQuemAlugouAprovou() {
  return (
    <section className="section section--tint relative" aria-labelledby="dep-t">
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
            <blockquote>Empresa com padrão de qualidade muito boa, atendimento perfeito, horário cumprido certinho. Eu conheço e recomendo.</blockquote>
            <figcaption>
              <span className="avatar c-red grid flex-none h-[44px] place-items-center w-[44px] [font-weight:700]" style={{ background: "var(--c)" }}>HS</span>
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
              <span className="avatar c-blue grid flex-none h-[44px] place-items-center w-[44px] [font-weight:700]" style={{ background: "var(--c)" }}>TM</span>
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
            <blockquote>Alugo brinquedos com o Tio Titi há muitos anos, gosto muito do trabalho deles. Sou sempre bem atendida e fico super satisfeita.</blockquote>
            <figcaption>
              <span className="avatar c-green grid flex-none h-[44px] place-items-center w-[44px] [font-weight:700]" style={{ background: "var(--c)" }}>RD</span>
              <span><b>Raquel Dias</b>Cliente Tio Titi</span>
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
              <a href="#">Jogos e eletrônicos</a>
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
