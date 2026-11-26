import { useEffect, createContext, useContext, type MouseEvent } from "react";
import { useState } from "react";
import { useRef } from "react";
import { createFileRoute } from "@tanstack/react-router";
import repairCSS from "../styles/import-repairs.css?raw";
import { SITE_URL, BRAND_NAME, HOME_TITLE, HOME_META_DESCRIPTION, OG_IMAGE_URL } from "../lib/site";
import capturedCSS from "../styles/pages/index.css?raw";
const logo = { url: "/assets/malu-logo.webp" };
const brandLogo = { url: "/assets/file_00000000e9ac820e91c8c324bf226277.png" };
const sinuca = { url: "/assets/malu-sinuca-hd.webp" };
const som = { url: "/assets/malu-som-hd.webp" };
const banheiro = { url: "/assets/malu-banheiro-hd.webp" };
const cama = { url: "/assets/malu-cama-elastica-hd.webp" };
const playground = { url: "/assets/IMG-20261126-WA0034.jpg" };


const HOME_STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#business`,
      "name": "MALU Festas e Eventos",
      "alternateName": "MALU",
      "url": `${SITE_URL}/`,
      "logo": `${SITE_URL}${brandLogo.url}`,
      "image": `${SITE_URL}${brandLogo.url}`,
      "description": "MALU Festas e Eventos é um salão de festas com buffet, brinquedos e estrutura para eventos familiares no Jardim das Oliveiras, em Itapecerica da Serra (SP). O espaço reúne piscina, churrasqueira, Wi-Fi, som e opções de cardápio para celebrações no local.",
      "telephone": "+55-11-94721-6605",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Rua João Pedro de Andrade, 49",
        "addressLocality": "Itapecerica da Serra",
        "addressRegion": "SP",
        "addressCountry": "BR"
      },
      "areaServed": [
        {
          "@type": "Place",
          "name": "Jardim das Oliveiras, Itapecerica da Serra, SP"
        },
        {
          "@type": "City",
          "name": "Itapecerica da Serra"
        }
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+55-11-94721-6605",
        "contactType": "reservas e orçamentos",
        "availableLanguage": "Portuguese"
      },
      "sameAs": [
        "https://www.instagram.com/malufestaseeventos/"
      ],
      "knowsAbout": [
        "salão de festas",
        "buffet infantil",
        "buffet de strogonoff",
        "feijoada",
        "churrasco",
        "locação de brinquedos para eventos",
        "festas familiares",
        "estrutura para eventos"
      ],
      "hasMap": "https://www.google.com/maps/search/?api=1&query=Rua%20Jo%C3%A3o%20Pedro%20de%20Andrade%2C%2049%20-%20Jardim%20das%20Oliveiras%2C%20Itapecerica%20da%20Serra%20-%20SP"
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      "url": `${SITE_URL}/`,
      "name": "MALU Festas e Eventos",
      "inLanguage": "pt-BR",
      "publisher": {
        "@id": `${SITE_URL}/#business`
      }
    },
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      "url": `${SITE_URL}/`,
      "name": "MALU Festas e Eventos | Salão de festas com buffet e brinquedos",
      "description": "MALU Festas e Eventos é um salão de festas com buffet, brinquedos e estrutura para eventos familiares no Jardim das Oliveiras, em Itapecerica da Serra (SP). O espaço reúne piscina, churrasqueira, Wi-Fi, som e opções de cardápio para celebrações no local.",
      "inLanguage": "pt-BR",
      "isPartOf": {
        "@id": `${SITE_URL}/#website`
      },
      "about": {
        "@id": `${SITE_URL}/#business`
      },
      "dateModified": "2026-11-25",
      "breadcrumb": {
        "@id": `${SITE_URL}/#breadcrumb`
      }
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/#service-salao`,
      "name": "Locação de salão de festas com buffet e brinquedos",
      "serviceType": "Locação de salão de festas com estrutura para eventos",
      "provider": {
        "@id": `${SITE_URL}/#business`
      },
      "areaServed": {
        "@type": "City",
        "name": "Itapecerica da Serra"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${SITE_URL}/#breadcrumb`,
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Início",
          "item": `${SITE_URL}/`
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      "url": `${SITE_URL}/#faq-t`,
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Quantas pessoas o buffet atende?"
        },
        {
          "@type": "Question",
          "name": "Quanto tempo dura a festa?"
        },
        {
          "@type": "Question",
          "name": "O que tem no salão?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "O salão oferece Wi-Fi, 10 brinquedos, 10 jogos de mesa, som, piscina, banheiros masculino e feminino e área de churrasqueira com geladeira e freezer."
          }
        },
        {
          "@type": "Question",
          "name": "Vocês alugam brinquedos para fora?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sim. Além das festas realizadas no salão, a MALU também aluga brinquedos para eventos externos. O orçamento é solicitado pelo WhatsApp."
          }
        },
        {
          "@type": "Question",
          "name": "Quais opções de buffet estão disponíveis?"
        },
        {
          "@type": "Question",
          "name": "Onde fica a MALU Festas e Eventos?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A MALU fica na Rua João Pedro de Andrade, 49, no Jardim das Oliveiras, em Itapecerica da Serra, São Paulo."
          }
        },
        {
          "@type": "Question",
          "name": "O salão tem piscina e churrasqueira?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sim. O espaço conta com piscina e área de churrasqueira equipada com geladeira e freezer."
          }
        },
        {
          "@type": "Question",
          "name": "Como pedir um orçamento ou consultar uma data?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Entre em contato pelo WhatsApp (11) 94721-6605 e informe os detalhes da festa para solicitar um orçamento e consultar a disponibilidade."
          }
        }
      ]
    }
  ]
} as const;

// GEO: inserir código de verificação do Bing Webmaster Tools em msvalidate.01 quando fornecido.
// GEO: inserir código de verificação do Google Search Console em google-site-verification quando fornecido.
export const Route = createFileRoute("/")({
  head: () => ({
    links: [
      { rel: "canonical", href: `${SITE_URL}/` },
      { rel: "preload", href: brandLogo.url, as: "image", fetchPriority: "high" },
    ],
    meta: [
      { title: HOME_TITLE },
      { name: "description", content: HOME_META_DESCRIPTION },
      { property: "og:title", content: HOME_TITLE },
      { property: "og:description", content: HOME_META_DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/` },
      { property: "og:site_name", content: BRAND_NAME },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:image", content: OG_IMAGE_URL },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "MALU Festas e Eventos — salão de festas com buffet em Itapecerica da Serra" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: HOME_TITLE },
      { name: "twitter:description", content: HOME_META_DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE_URL },
    ],
  }),
  staticData: { importedDocument: { html: { "className": "js", "lang": "pt-BR" }, body: {  } } },
  component: Index,
});


type QuoteItem = { name: string; href: string; image: string; quantity: number; price?: number | null };
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
  const [introVisible, setIntroVisible] = useState(true);
  useEffect(() => {
    if (!introVisible) return;
    const timer = window.setTimeout(() => setIntroVisible(false), 3000);
    return () => window.clearTimeout(timer);
  }, [introVisible]);

  // Trava a página durante a abertura, o menu mobile e o painel de orçamento.
  useEffect(() => {
    if (!introVisible && !mobileOpen && !drawerOpen) return;
    const root = document.documentElement;
    const body = document.body;
    const scrollY = window.scrollY;
    const previous = {
      rootOverflow: root.style.overflow, rootOverscroll: root.style.overscrollBehavior,
      bodyOverflow: body.style.overflow, bodyOverscroll: body.style.overscrollBehavior,
      bodyPosition: body.style.position, bodyTop: body.style.top,
      bodyLeft: body.style.left, bodyRight: body.style.right, bodyWidth: body.style.width,
    };
    root.style.overflow = "hidden";
    root.style.overscrollBehavior = "none";
    body.style.overflow = "hidden";
    body.style.overscrollBehavior = "none";
    // Ao abrir o menu mobile, não fixe o body: isso desloca o cabeçalho sticky
    // para fora da tela quando o usuário está em uma seção mais abaixo.
    if (!mobileOpen) {
      body.style.position = "fixed";
      body.style.top = `-${scrollY}px`;
      body.style.left = "0";
      body.style.right = "0";
      body.style.width = "100%";
    }
    return () => {
      root.style.overflow = previous.rootOverflow;
      root.style.overscrollBehavior = previous.rootOverscroll;
      body.style.overflow = previous.bodyOverflow;
      body.style.overscrollBehavior = previous.bodyOverscroll;
      body.style.position = previous.bodyPosition;
      body.style.top = previous.bodyTop;
      body.style.left = previous.bodyLeft;
      body.style.right = previous.bodyRight;
      body.style.width = previous.bodyWidth;
      window.scrollTo(0, scrollY);
    };
  }, [introVisible, mobileOpen, drawerOpen]);
  const returnFocus = useRef<HTMLElement | null>(null);
  const total = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + (typeof item.price === "number" ? item.price * item.quantity : 0), 0);
  const pendingPriceItems = items.filter(item => typeof item.price !== "number").length;
  const formatCurrency = (value: number) => value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  useEffect(() => {
    try {
      const saved: unknown = JSON.parse(sessionStorage.getItem("tio-titi-quote") || "[]");
      if (Array.isArray(saved)) {
        const pricesByName = new Map(Array.from(document.querySelectorAll<HTMLElement>("#aluguel-brinquedos article")).map(card => {
          const name = card.querySelector<HTMLElement>("h3")?.textContent?.trim() || "";
          const text = card.querySelector("strong")?.textContent || "";
          const match = text.match(/R\$\s*([\d.]+,\d{2})/);
          const price = match ? Number(match[1].replace(/\./g, "").replace(",", ".")) : null;
          return [name, price] as const;
        }));
        setItems(saved.filter((item): item is QuoteItem =>
          typeof item?.name === "string" && typeof item?.href === "string" &&
          (item.href.startsWith("/brinquedos/") || item.href.startsWith("#aluguel-brinquedos")) && typeof item?.image === "string" &&
          item.image.length > 0 && Number.isInteger(item.quantity) && item.quantity > 0
        ).map(item => ({
          ...item,
          price: typeof item.price === "number" ? item.price : pricesByName.get(item.name) ?? null,
        })));
      }
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
    return () => { document.removeEventListener("keydown", onKey); };
  }, [drawerOpen, mobileOpen]);
  const addItems = (incoming: QuoteItem[]) => setItems(current => {
    const next = [...current];
    for (const item of incoming) {
      const existingIndex = next.findIndex(existing => existing.name === item.name);
      if (existingIndex >= 0) next[existingIndex] = { ...next[existingIndex], quantity: next[existingIndex].quantity + item.quantity };
      else next.push(item);
    }
    return next;
  });
  const add = (event: MouseEvent<HTMLButtonElement>) => {
    const card = event.currentTarget.closest("article");
    const link = card?.querySelector<HTMLAnchorElement>("h3 a");
    const heading = card?.querySelector<HTMLElement>("h3");
    const image = card?.querySelector<HTMLImageElement>("img");
    const name = link?.textContent?.trim() || heading?.textContent?.trim() || "";
    const href = link?.getAttribute("href") || "#aluguel-brinquedos";
    const imageSrc = image?.getAttribute("src") || "";
    const priceText = card?.querySelector("strong")?.textContent || "";
    const priceMatch = priceText.match(/R\$\s*([\d.]+,\d{2})/);
    const price = priceMatch ? Number(priceMatch[1].replace(/\./g, "").replace(",", ".")) : null;
    if (!name || !imageSrc) return;
    addItems([{ name, href, image: imageSrc, quantity: 1, price }]);
    returnFocus.current = event.currentTarget;
    setMobileOpen(false);
    setOpenMenu0(null);
    setDrawerOpen(true);
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
    (item.href === href || item.name === href) ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item));

  const [openMenu0, setOpenMenu0] = useState(null as string | null);
  const menuRoot0 = useRef<Element | null>(null);
  const menuRoot1 = useRef<Element | null>(null);
  useEffect(() => {
    const header = menuRoot0.current;
    if (!header) return;
    if (mobileOpen) header.setAttribute("data-import-menu-open", "true");
    else header.removeAttribute("data-import-menu-open");
    return () => header.removeAttribute("data-import-menu-open");
  }, [mobileOpen]);
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
      {introVisible && (
        <div className="malu-intro" role="status" aria-label="MALU Festas e Eventos">
          <p className="malu-intro__welcome">MALU Festas e Eventos, temos tudo o que você precisa em um só lugar!</p>
          <button
            type="button"
            onClick={event => { event.preventDefault(); event.stopPropagation(); setIntroVisible(false); }}
            aria-label="Pular animação de entrada"
            className="btn btn--yellow btn--sm malu-intro__skip"
            style={{ position: "absolute", top: "10px", right: "10px", zIndex: 5, fontSize: "10px", padding: "5px 9px", borderRadius: "10px", letterSpacing: ".01em", lineHeight: 1 }}
          >
            Pular
          </button>
          <div className="malu-intro__burst" aria-hidden="true" />
          <div className="malu-intro__party" aria-hidden="true">
            <span className="malu-intro__balloon malu-intro__balloon--one" />
            <span className="malu-intro__balloon malu-intro__balloon--two" />
            <span className="malu-intro__balloon malu-intro__balloon--three" />
            <span className="malu-intro__balloon malu-intro__balloon--four" />
            <span className="malu-intro__blower malu-intro__blower--one" />
            <span className="malu-intro__blower malu-intro__blower--two" />
            <span className="malu-intro__blower malu-intro__blower--three" />
          </div>
          <div className="malu-intro__confetti" aria-hidden="true">
            {Array.from({ length: 14 }, (_, i) => <i key={i} />)}
          </div>
          <div className="malu-intro__content">
            <span className="malu-intro__eyebrow">A SUA FESTA COMEÇA AQUI</span>
            <img className="malu-intro__logo" src={brandLogo.url} width="400" height="254" alt="MALU Festas e Eventos" loading="eager" fetchPriority="high" decoding="async" />
            <span className="malu-intro__line" aria-hidden="true" />
            <span className="malu-intro__tagline">FESTAS <b>•</b> EVENTOS <b>•</b> DIVULGAÇÕES</span>
          </div>
        </div>
      )}
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
          <symbol id="i-cart" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></symbol>
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
            <span><svg className="icon" aria-hidden="true"><use {...({ href: "#i-clock" } as any)} /></svg> Festas, eventos e divulgações</span>
            <a href="#localizacao"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-pin" } as any)} /></svg> Jardim das Oliveiras</a>
          </div>
          <div className="topbar__info items-center flex gap-[22px]">
            
            <a href="https://www.instagram.com/malufestaseventos/" target="_blank" rel="noopener"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-instagram" } as any)} /></svg> @malufestaseventos</a>
          </div>
        </div>
      </div>
      <header className={mobileOpen ? "site-header mobile-menu-open" : "site-header"} ref={node => { menuRoot0.current = node; }} data-site-import-scroll-header={"{\"desktop\":{\"added\":[\"is-scrolled\"],\"removed\":[],\"threshold\":648},\"mobile\":{\"added\":[\"is-scrolled\"],\"removed\":[],\"threshold\":645}}"}>
        <div className="wrap">
          <a className="logo" aria-label="MALU – página inicial" href="/">
            <img src={brandLogo.url} width="400" height="254" alt="MALU Festas, Eventos e Divulgações" loading="eager" fetchPriority="high" decoding="async" />
          </a>
          <nav className={mobileOpen ? "nav is-open" : "nav"} id="nav" aria-label="Menu principal">
            <ul className="nav__list"><li><a className="nav__link" href="#inicio" onClick={() => setMobileOpen(false)}>Início</a></li><li><a className="nav__link" href="#salao" onClick={() => setMobileOpen(false)}>Salão</a></li><li><a className="nav__link" href="#brinquedos" onClick={() => setMobileOpen(false)}>Brinquedos</a></li><li><a className="nav__link" href="#aluguel-brinquedos" onClick={() => setMobileOpen(false)}>Aluguel</a></li><li><a className="nav__link" href="#buffet" onClick={() => setMobileOpen(false)}>Buffet</a></li><li><a className="nav__link" href="#localizacao" onClick={() => setMobileOpen(false)}>Localização</a></li><li><a className="nav__link" href="#contato" onClick={() => setMobileOpen(false)}>Contato</a></li></ul>
            <div className="nav__cta"><a className="btn btn--blue" href="https://www.instagram.com/malufestaseventos/" target="_blank" rel="noopener"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-instagram" } as any)} /></svg> Instagram</a><a className="btn btn--wa" href="https://wa.me/5511947216605?text=Ol%C3%A1%2C%20MALU!%20Vim%20pelo%20site%20e%20gostaria%20de%20um%20or%C3%A7amento%20para%20a%20minha%20festa.%20%F0%9F%8E%88" rel="noopener" target="_blank"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-whatsapp" } as any)} /></svg> Falar no WhatsApp</a></div>
          </nav>
          <div className="header-actions"><a className="btn btn--wa btn--sm header-wa" href="https://wa.me/5511947216605?text=Ol%C3%A1%2C%20MALU!%20Vim%20pelo%20site%20e%20gostaria%20de%20um%20or%C3%A7amento%20para%20a%20minha%20festa.%20%F0%9F%8E%88" rel="noopener" target="_blank"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-whatsapp" } as any)} /></svg> <span className="header-wa__num">(11) 94721-6605</span></a><button className="menu-toggle cart-toggle" type="button" onClick={openDrawer} aria-label={`Abrir carrinho, ${total} itens`}><svg className="icon" aria-hidden="true"><use href="#i-cart" /></svg>{total > 0 && <span className="cart-toggle__count">{total}</span>}</button><button className="menu-toggle" type="button" onClick={event => { returnFocus.current = event.currentTarget; setMobileOpen(open => !open); setOpenMenu0(null); }} aria-expanded={mobileOpen} aria-controls="nav" aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}><svg className="icon" aria-hidden="true"><use {...({ href: "#i-menu" } as any)} /></svg></button></div>
        </div>
      </header>
      <main id="conteudo">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(HOME_STRUCTURED_DATA) }} />
<section id="inicio" className="hero hero--impacto [overflow:hidden] [padding:clamp(28px,4vw,56px)_0_0] [padding-top:clamp(36px,5vw,72px)]!">
      <div className="wrap hero__grid items-center grid gap-[clamp(24px,4vw,56px)] relative [z-index:2]">
        <div className="hero__text">
          <span className="eyebrow items-center inline-flex gap-[8px] mb-[14px] uppercase [box-shadow:3px_3px_0_var(--red)] [font-size:.8rem] [font-weight:800] [letter-spacing:.08em] [padding:7px_14px]"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-sparkles" } as any)} /></svg> Festas • Eventos • Divulgações</span>
          <h1><span className="hl [box-shadow:4px_4px_0_var(--ink)] [line-height:1] [margin:.06em_0] [padding:.04em_.2em_.08em]">Salão</span> de festas com buffet, <span className="hl [box-shadow:4px_4px_0_var(--ink)] [line-height:1] [margin:.06em_0] [padding:.04em_.2em_.08em]">diversão</span> e aluguel de <span className="hl whitespace-normal [box-shadow:4px_4px_0_var(--ink)] [line-height:1] [margin:.06em_0] [padding:.04em_.2em_.08em]">brinquedos</span></h1>
          <p className="lead max-w-[560px] [font-size:clamp(1.05rem,.5vw_+_.95rem,1.22rem)]">Salão completo com <strong>10 brinquedos, piscina, buffet</strong>, som de qualidade, Wi-Fi grátis e área de churrasqueira. Tudo para a sua festa em um só lugar.</p>
          {/* <!-- GEO: inserir dado real aqui --> */} {/* capacidade total do salão, faixa de preço e antecedência recomendada para reserva */}
          <div className="btn-row items-center flex flex-wrap gap-[14px]"><a className="btn btn--wa btn--lg" href="https://wa.me/5511947216605?text=Ol%C3%A1%2C%20MALU!%20Vim%20pelo%20site%20e%20gostaria%20de%20um%20or%C3%A7amento%20para%20a%20minha%20festa.%20%F0%9F%8E%88" rel="noopener" target="_blank"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-whatsapp" } as any)} /></svg> Falar no WhatsApp</a><a className="btn btn--purple btn--lg" href="https://www.instagram.com/malufestaseventos/" rel="noopener" target="_blank"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-instagram" } as any)} /></svg> Instagram</a><a className="btn btn--blue btn--lg" href="#aluguel-brinquedos"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-gamepad" } as any)} /></svg> Ver catálogo de brinquedos</a></div>
          <div className="hero__trust flex flex-wrap mt-[28px] [font-size:.92rem] [font-weight:500] [gap:10px_18px]"><span><svg className="icon" aria-hidden="true"><use {...({ href: "#i-shield" } as any)} /></svg> Wi-Fi grátis</span><span><svg className="icon" aria-hidden="true"><use {...({ href: "#i-sparkles" } as any)} /></svg> Som de qualidade</span><span><svg className="icon" aria-hidden="true"><use {...({ href: "#i-pin" } as any)} /></svg> Jardim das Oliveiras</span></div>
        </div>
        <div className="hero__art aspect-[1/.92] relative [@media(max-width:860px)]:max-w-[480px] [@media(max-width:860px)]:[margin:0_auto] [@media(max-width:860px)]:[width:100%]">
          <div className="hero__img hero__img--1 absolute [box-shadow:14px_14px_0_var(--red)] [inset:6%_3%_24%_6%] [overflow:hidden]"><img src={playground.url} width="1254" height="1254" alt="Dono da MALU Festas e Eventos ao lado dos brinquedos infláveis" fetchPriority="high" decoding="async" /></div>
          <div className="hero__img hero__img--2 aspect-[1] absolute w-[38%] [bottom:0] [box-shadow:10px_10px_0_var(--yellow)] [overflow:hidden] [right:0]"><img src={cama.url} width="1254" height="1254" alt="Cama elástica colorida" loading="lazy" decoding="async" /></div>
          <div className="hero__img hero__img--3 aspect-[1] bottom-[6%] absolute w-[33%] [box-shadow:10px_10px_0_var(--blue)] [left:0] [overflow:hidden]"><img src={sinuca.url} width="1254" height="1254" alt="Mesa de sinuca" loading="lazy" /></div>
          <div className="hero__badge hero__badge--b items-center bottom-[2%] flex gap-[10px] left-[34%] absolute [box-shadow:5px_5px_0_var(--green)] [font-size:.85rem] [line-height:1.25] [padding:10px_14px] [z-index:3]"><span className="dd-ico c-green"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-star" } as any)} /></svg></span><span><strong>Nota 4.9</strong>no Google</span></div>
        </div>
      </div>
      <div className="wrap"><div className="stats grid mt-[clamp(32px,4vw,48px)] relative [z-index:3]"><div className="stat c-red items-center flex"><span className="dd-ico"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-home" } as any)} /></svg></span><div><strong>150 m²</strong><span>de pura diversão</span></div></div><div className="stat c-blue items-center flex"><span className="dd-ico"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-sparkles" } as any)} /></svg></span><div><strong>10</strong><span>brinquedos no salão</span></div></div><div className="stat c-green items-center flex"><span className="dd-ico"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-gamepad" } as any)} /></svg></span><div><strong>10</strong><span>jogos de mesa</span></div></div><div className="stat c-purple items-center flex"><span className="dd-ico"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-droplet" } as any)} /></svg></span><div><strong>Piscina</strong><span>no local</span></div></div></div></div>
      <div style={{ height: "clamp(32px, 5vw, 64px)" }} />
    </section>
<div className="pointer-events-none relative [margin:-42px_0_-18px] [overflow:hidden] [padding:30px_0] [z-index:6]" aria-hidden="true"><div className="marquee  ml-[-2%] w-[104%] [box-shadow:0_8px_0_rgba(20,24,61,.18)] [padding:14px_0]"><div className="marquee__track flex [width:max-content]"><span>Salão completo<i>★</i>Piscina<i>★</i>10 brinquedos<i>★</i>Buffet<i>★</i>Wi-Fi grátis<i>★</i>Som<i>★</i>Churrasqueira<i>★</i>Jogos de mesa<i>★</i></span><span>Salão completo<i>★</i>Piscina<i>★</i>10 brinquedos<i>★</i>Buffet<i>★</i>Wi-Fi grátis<i>★</i>Som<i>★</i>Churrasqueira<i>★</i>Jogos de mesa<i>★</i></span></div></div></div>
<section id="salao" className="section section--sky bg-confetti relative" aria-labelledby="salao-t"><div className="wrap"><div className="section-head max-w-[760px] text-center [margin:0_auto_clamp(32px,4vw,52px)]"><span className="eyebrow items-center inline-flex gap-[8px] mb-[14px] uppercase [box-shadow:3px_3px_0_var(--red)] [font-size:.8rem] [font-weight:800] [letter-spacing:.08em] [padding:7px_14px]"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-home" } as any)} /></svg> Nosso espaço</span><h2 id="salao-t">Conheça o <span className="hl whitespace-normal [box-shadow:4px_4px_0_var(--ink)] [line-height:1] [margin:.06em_0] [padding:.04em_.2em_.08em]">salão</span></h2><p>A MALU Festas e Eventos oferece um salão para celebrações no Jardim das Oliveiras, em Itapecerica da Serra. A estrutura reúne espaço decorado, piscina, churrasqueira com geladeira e freezer, Wi-Fi, som, banheiros, 10 brinquedos e 10 jogos de mesa, conforme as informações publicadas no site.</p></div>
<div className="grid gap-[24px] grid-cols-[repeat(auto-fill,minmax(260px,1fr))]"><div className="step reveal c-red is-in relative text-center [box-shadow:var(--hard)] [padding:26px_22px]"><span className="dd-ico [margin:0_auto_10px]"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-home" } as any)} /></svg></span><h3>Salão completo</h3><p>Espaço amplo e decorado para a sua festa.</p></div><div className="col-span-full mx-auto mt-[8px] w-full max-w-[420px] text-center"><h3 className="mb-[16px] [font-size:clamp(1.35rem,2.5vw,1.8rem)]">Veja a MALU por dentro</h3><video className="block aspect-[9/16] w-full rounded-[18px] border-[3px] border-[var(--ink)] bg-black object-cover [box-shadow:var(--hard-lg)]" controls playsInline preload="metadata"><source src="/assets/VID-20261126-WA0087.mp4" type="video/mp4" />Seu navegador não conseguiu reproduzir este vídeo.</video></div><div className="step reveal c-blue is-in relative text-center [box-shadow:var(--hard)] [padding:26px_22px]"><span className="dd-ico [margin:0_auto_10px]"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-bolt" } as any)} /></svg></span><h3>Wi-Fi grátis</h3><p>Internet liberada para todos os convidados.</p></div><div className="step reveal c-yellow is-in relative text-center [box-shadow:var(--hard)] [padding:26px_22px]"><span className="dd-ico [margin:0_auto_10px]"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-sparkles" } as any)} /></svg></span><h3>10 brinquedos</h3><p>Cama elástica, escorregador, gira-gira e mais.</p></div><div className="step reveal c-green is-in relative text-center [box-shadow:var(--hard)] [padding:26px_22px]"><span className="dd-ico [margin:0_auto_10px]"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-users" } as any)} /></svg></span><h3>Banheiros</h3><p>4 banheiros: masculino e feminino, no salão e na piscina.</p></div><div className="step reveal c-purple is-in relative text-center [box-shadow:var(--hard)] [padding:26px_22px]"><span className="dd-ico [margin:0_auto_10px]"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-play" } as any)} /></svg></span><h3>Som</h3><p>Som de qualidade incluso no local.</p></div><div className="step reveal c-red is-in relative text-center [box-shadow:var(--hard)] [padding:26px_22px]"><span className="dd-ico [margin:0_auto_10px]"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-gamepad" } as any)} /></svg></span><h3>10 jogos de mesa</h3><p>Sinuca e jogos para adultos e crianças.</p></div><div className="step reveal c-blue is-in relative text-center [box-shadow:var(--hard)] [padding:26px_22px]"><span className="dd-ico [margin:0_auto_10px]"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-droplet" } as any)} /></svg></span><h3>Piscina no local</h3><p>Para refrescar a festa nos dias de calor.</p></div><div className="step reveal c-yellow is-in relative text-center [box-shadow:var(--hard)] [padding:26px_22px]"><span className="dd-ico [margin:0_auto_10px]"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-gift" } as any)} /></svg></span><h3>Buffet</h3><p>Cardápios infantil, strogonoff, feijoada e churrasco.</p></div><div className="step reveal c-green is-in relative text-center [box-shadow:var(--hard)] [padding:26px_22px]"><span className="dd-ico [margin:0_auto_10px]"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-heart" } as any)} /></svg></span><h3>Churrasqueira</h3><p>Área com churrasqueira, geladeira e freezer.</p></div></div></div></div></div></section>
<section id="brinquedos" className="section relative" aria-labelledby="fotos-t"><div className="wrap"><div className="section-head max-w-[760px] text-center [margin:0_auto_clamp(32px,4vw,52px)]"><span className="eyebrow items-center inline-flex gap-[8px] mb-[14px] uppercase [box-shadow:3px_3px_0_var(--red)] [font-size:.8rem] [font-weight:800] [letter-spacing:.08em] [padding:7px_14px]"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-sparkles" } as any)} /></svg> Diversão garantida</span><h2 id="fotos-t">Diversão para <span className="hl hl--blue whitespace-normal [box-shadow:4px_4px_0_var(--ink)] [line-height:1] [margin:.06em_0] [padding:.04em_.2em_.08em]">todas as idades</span></h2><p>A área de diversão da MALU combina brinquedos infantis e jogos de mesa para diferentes idades. O site informa 10 brinquedos e 10 jogos, incluindo opções como cama elástica e sinuca. A disponibilidade e a composição para cada evento devem ser confirmadas no orçamento.</p></div>
<div className="grid gap-[24px] grid-cols-[repeat(auto-fill,minmax(240px,1fr))]"><article className="combo c-red reveal is-in flex flex-col [box-shadow:var(--hard)] [overflow:hidden]"><img src={sinuca.url} alt="Mesa de sinuca" loading="lazy" className="aspect-square w-full object-cover" /><div className="combo__body [padding:16px_20px]"><h3>Mesa de sinuca</h3></div></article><article className="combo c-blue reveal is-in flex flex-col [box-shadow:var(--hard)] [overflow:hidden]"><img src={som.url} alt="Som de qualidade" loading="lazy" className="aspect-square w-full object-cover" /><div className="combo__body [padding:16px_20px]"><h3>Som de qualidade</h3></div></article><article className="combo c-green reveal is-in flex flex-col [box-shadow:var(--hard)] [overflow:hidden]"><img src={banheiro.url} alt="Banheiros" loading="lazy" className="aspect-square w-full object-cover" /><div className="combo__body [padding:16px_20px]"><h3>Banheiros</h3></div></article><article className="combo c-yellow reveal is-in flex flex-col [box-shadow:var(--hard)] [overflow:hidden]"><img src={cama.url} alt="Cama elástica" loading="lazy" className="aspect-square w-full object-cover" /><div className="combo__body [padding:16px_20px]"><h3>Cama elástica</h3></div></article></div></div></section>
<section id="aluguel-brinquedos" className="section section--sky relative" aria-labelledby="aluguel-t"><div className="wrap"><div className="section-head max-w-[760px] text-center [margin:0_auto_clamp(28px,4vw,40px)]"><span className="eyebrow items-center inline-flex gap-[8px] mb-[14px] uppercase [box-shadow:3px_3px_0_var(--red)] [font-size:.8rem] [font-weight:800] [letter-spacing:.08em] [padding:7px_14px]"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-truck" } as any)} /></svg> Diversão que vai até você</span><h2 id="aluguel-t">Aluguel de <span className="hl whitespace-normal [box-shadow:4px_4px_0_var(--ink)] [line-height:1] [margin:.06em_0] [padding:.04em_.2em_.08em]">brinquedos</span></h2><p>A MALU também aluga brinquedos para festas, escolas, eventos e comemorações fora do nosso salão. Leve mais diversão para o seu evento com a praticidade de conversar diretamente com nossa equipe.</p></div><div className="grid gap-[24px] grid-cols-[repeat(auto-fit,minmax(280px,1fr))] max-w-[760px] mx-auto"><article className="combo c-purple flex flex-col [box-shadow:var(--hard)] [overflow:hidden]"><div className="grid grid-cols-2 gap-[8px] [padding:8px]"><img src="/assets/IMG-20261126-WA0019.jpg" alt="Centopeia Gigante inflável vista de lado" loading="lazy" decoding="async" className="aspect-[4/5] w-full rounded-[10px] object-cover" /><img src="/assets/IMG-20261126-WA0020.jpg" alt="Centopeia Gigante inflável vista de frente" loading="lazy" decoding="async" className="aspect-[4/5] w-full rounded-[10px] object-cover" /></div><div className="combo__body flex flex-1 flex-col gap-[12px] [padding:18px_22px_24px]"><span className="eyebrow self-start">ALUGUEL DE BRINQUEDOS</span><h3 className="[font-size:clamp(1.35rem,3vw,1.8rem)]">Centopeia Gigante</h3><p>Uma atração divertida e cheia de aventura! A Centopeia Gigante garante muita diversão para a criançada, com espaço para brincar, explorar e aproveitar cada momento da festa.</p><strong className="[font-size:1.45rem] [font-weight:900]">R$ 550,00</strong><p className="[font-size:.95rem] [font-weight:700]">Valor de R$ 550,00 para eventos fechados, com 4 horas de aluguel e monitor acompanhando o brinquedo. Para eventos de rua ou para contratar por mais horas, consulte os valores e condições pelo WhatsApp.</p><a className="btn btn--wa btn--lg" href="https://wa.me/5511947216605?text=Ol%C3%A1%2C%20MALU!%20Tenho%20interesse%20em%20alugar%20a%20Centopeia%20Gigante%20por%20R%24%20550%2C00.%20Poderiam%20me%20passar%20mais%20informa%C3%A7%C3%B5es%3F" target="_blank" rel="noopener"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-whatsapp" } as any)} /></svg> Consultar disponibilidade</a><button className="btn btn--blue btn--lg add-rental" type="button" onClick={add}><svg className="icon" aria-hidden="true"><use href="#i-cart" /></svg> Adicionar ao carrinho</button></div></article><article className="combo c-blue flex flex-col [box-shadow:var(--hard)] [overflow:hidden]"><div className="grid grid-cols-2 gap-[8px] [padding:8px]"><img src="/assets/IMG-20261126-WA0025.jpg" alt="Quadra de Sabão — vista da quadra inflável" loading="lazy" decoding="async" className="aspect-[4/5] w-full rounded-[10px] object-cover" /><img src="/assets/IMG-20261126-WA0037.jpg" alt="Quadra de Sabão — detalhe da estrutura" loading="lazy" decoding="async" className="aspect-[4/5] w-full rounded-[10px] object-cover" /></div><div className="combo__body flex flex-1 flex-col gap-[12px] [padding:18px_22px_24px]"><span className="eyebrow self-start">ALUGUEL DE BRINQUEDOS</span><h3 className="[font-size:clamp(1.35rem,3vw,1.8rem)]">Quadra de Sabão</h3><p>O Futebol de Sabão é uma quadra de sabão que deixa a brincadeira ainda mais animada! Diversão garantida com partidas escorregadias e muita espuma.</p><p className="[font-size:.98rem] [font-weight:700]">Medidas: 9 × 5 metros</p><strong className="[font-size:1.45rem] [font-weight:900]">R$ 650,00</strong><p className="[font-size:.95rem] [font-weight:700]">Valor para eventos em local fechado, com 4 horas de aluguel e monitor incluso. Para eventos de rua ou para contratar por mais horas, consulte os valores e condições pelo WhatsApp.</p><a className="btn btn--wa btn--lg" href="https://wa.me/5511947216605?text=Ol%C3%A1%2C%20MALU!%20Tenho%20interesse%20em%20alugar%20o%20Quadra%20de%20Sab%C3%A3o%20por%20R%24%20650%2C00.%20Poderiam%20me%20passar%20mais%20informa%C3%A7%C3%B5es%3F" target="_blank" rel="noopener"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-whatsapp" } as any)} /></svg> Consultar disponibilidade</a><button className="btn btn--blue btn--lg add-rental" type="button" onClick={add}><svg className="icon" aria-hidden="true"><use href="#i-cart" /></svg> Adicionar ao carrinho</button></div></article><article className="combo c-red flex flex-col [box-shadow:var(--hard)] [overflow:hidden]"><div className="grid grid-cols-2 gap-[8px] [padding:8px]"><img src="/assets/IMG-20261126-WA0030.jpg" alt="Castelinho inflável — modelo 1" loading="lazy" decoding="async" className="aspect-[4/5] w-full rounded-[10px] object-cover" /><img src="/assets/IMG-20261126-WA0035.jpg" alt="Castelinho inflável — modelo 2" loading="lazy" decoding="async" className="aspect-[4/5] w-full rounded-[10px] object-cover" /></div><div className="combo__body flex flex-1 flex-col gap-[12px] [padding:18px_22px_24px]"><span className="eyebrow self-start">ALUGUEL DE BRINQUEDOS</span><h3 className="[font-size:clamp(1.35rem,3vw,1.8rem)]">Castelinho Inflável</h3><p>Diversão garantida para a criançada! O Castelinho Inflável é perfeito para pular, brincar e aproveitar a festa. Disponível em 2 modelos diferentes.</p><p className="[font-size:.98rem] [font-weight:700]">Medida: 3,00 metros</p><strong className="[font-size:1.45rem] [font-weight:900]">R$ 320,00</strong><p className="[font-size:.95rem] [font-weight:700]">Valor para eventos em local fechado, com 4 horas de aluguel e monitor incluso. Para eventos de rua ou para contratar por mais horas, consulte os valores e condições pelo WhatsApp.</p><a className="btn btn--wa btn--lg" href="https://wa.me/5511947216605?text=Ol%C3%A1%2C%20MALU!%20Tenho%20interesse%20em%20alugar%20o%20Castelinho%20Infl%C3%A1vel%20por%20R%24%20320%2C00.%20Poderiam%20me%20passar%20mais%20informa%C3%A7%C3%B5es%3F" target="_blank" rel="noopener"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-whatsapp" } as any)} /></svg> Consultar disponibilidade</a><button className="btn btn--blue btn--lg add-rental" type="button" onClick={add}><svg className="icon" aria-hidden="true"><use href="#i-cart" /></svg> Adicionar ao carrinho</button></div></article><article className="combo c-purple flex flex-col [box-shadow:var(--hard)] [overflow:hidden]"><div className="grid grid-cols-2 gap-[8px] [padding:8px]"><img src="/assets/IMG-20261126-WA0021.jpg" alt="Piscina de bolinhas — vista lateral" loading="lazy" decoding="async" className="aspect-[4/5] w-full rounded-[10px] object-cover" /><img src="/assets/IMG-20261126-WA0032.jpg" alt="Piscina de bolinhas — vista frontal com escorregador" loading="lazy" decoding="async" className="aspect-[4/5] w-full rounded-[10px] object-cover" /></div><div className="combo__body flex flex-1 flex-col gap-[12px] [padding:18px_22px_24px]"><span className="eyebrow self-start">ALUGUEL DE BRINQUEDOS</span><h3 className="[font-size:clamp(1.35rem,3vw,1.8rem)]">Piscina de Bolinhas</h3><p>Um clássico que não pode faltar na diversão! A Piscina de Bolinhas é perfeita para os pequenos brincarem e aproveitarem a festa com muita alegria.</p><p className="[font-size:.98rem] [font-weight:700]">Medidas: 1,50 × 1,50 metros</p><strong className="[font-size:1.45rem] [font-weight:900]">R$ 120,00</strong><p className="[font-size:.95rem] [font-weight:700]">Valor para eventos em local fechado, com 4 horas de aluguel e monitor incluso. Para eventos de rua ou para contratar por mais horas, consulte os valores e condições pelo WhatsApp.</p><a className="btn btn--wa btn--lg" href="https://wa.me/5511947216605?text=Ol%C3%A1%2C%20MALU!%20Tenho%20interesse%20em%20alugar%20a%20Piscina%20de%20Bolinhas%20por%20R%24%20120%2C00.%20Poderiam%20me%20passar%20mais%20informa%C3%A7%C3%B5es%3F" target="_blank" rel="noopener"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-whatsapp" } as any)} /></svg> Consultar disponibilidade</a><button className="btn btn--blue btn--lg add-rental" type="button" onClick={add}><svg className="icon" aria-hidden="true"><use href="#i-cart" /></svg> Adicionar ao carrinho</button></div></article><article className="combo c-blue flex flex-col [box-shadow:var(--hard)] [overflow:hidden]"><div className="[padding:8px]"><img src="/assets/IMG-20261126-WA0031.jpg" alt="Cama elástica grande de 4 metros com rede de proteção" loading="lazy" decoding="async" className="aspect-[4/5] w-full rounded-[10px] object-cover" /></div><div className="combo__body flex flex-1 flex-col gap-[12px] [padding:18px_22px_24px]"><span className="eyebrow self-start">ALUGUEL DE BRINQUEDOS</span><h3 className="[font-size:clamp(1.35rem,3vw,1.8rem)]">Cama Elástica</h3><p>Diversão garantida para a criançada! A Cama Elástica é perfeita para pular, brincar e gastar energia durante a festa.</p><p className="[font-size:.98rem] [font-weight:700]">Medida: 4,00 metros</p><strong className="[font-size:1.45rem] [font-weight:900]">R$ 350,00</strong><p className="[font-size:.95rem] [font-weight:700]">Valor para eventos em local fechado, com 4 horas de aluguel e monitor incluso. Para eventos de rua ou para contratar por mais horas, consulte os valores e condições pelo WhatsApp.</p><a className="btn btn--wa btn--lg" href="https://wa.me/5511947216605?text=Ol%C3%A1%2C%20MALU!%20Tenho%20interesse%20em%20alugar%20a%20Cama%20El%C3%A1stica%20de%204%20metros%20por%20R%24%20350%2C00.%20Poderiam%20me%20passar%20mais%20informa%C3%A7%C3%B5es%3F" target="_blank" rel="noopener"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-whatsapp" } as any)} /></svg> Consultar disponibilidade</a><button className="btn btn--blue btn--lg add-rental" type="button" onClick={add}><svg className="icon" aria-hidden="true"><use href="#i-cart" /></svg> Adicionar ao carrinho</button></div></article><article className="combo c-purple flex flex-col [box-shadow:var(--hard)] [overflow:hidden]"><div className="[padding:8px]"><img src="/assets/IMG-20261126-WA0026.jpg" alt="Cama elástica média de 3 metros" loading="lazy" decoding="async" className="aspect-[4/5] w-full rounded-[10px] object-cover" /></div><div className="combo__body flex flex-1 flex-col gap-[12px] [padding:18px_22px_24px]"><span className="eyebrow self-start">ALUGUEL DE BRINQUEDOS</span><h3 className="[font-size:clamp(1.35rem,3vw,1.8rem)]">Cama Elástica Média</h3><p>Uma opção divertida para a criançada pular, brincar e aproveitar a festa!</p><p className="[font-size:.98rem] [font-weight:700]">Medida: 3,00 metros</p><strong className="[font-size:1.45rem] [font-weight:900]">R$ 150,00</strong><p className="[font-size:.95rem] [font-weight:700]">Valor para eventos em local fechado, com 4 horas de aluguel e monitor incluso. Para eventos de rua ou para contratar por mais horas, consulte os valores e condições pelo WhatsApp.</p><a className="btn btn--wa btn--lg" href="https://wa.me/5511947216605?text=Ol%C3%A1%2C%20MALU!%20Tenho%20interesse%20em%20alugar%20a%20Cama%20El%C3%A1stica%20M%C3%A9dia%20de%203%20metros%20por%20R%24%20150%2C00.%20Poderiam%20me%20passar%20mais%20informa%C3%A7%C3%B5es%3F" target="_blank" rel="noopener"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-whatsapp" } as any)} /></svg> Consultar disponibilidade</a><button className="btn btn--blue btn--lg add-rental" type="button" onClick={add}><svg className="icon" aria-hidden="true"><use href="#i-cart" /></svg> Adicionar ao carrinho</button></div></article><article className="combo c-yellow flex flex-col [box-shadow:var(--hard)] [overflow:hidden]"><div className="[padding:8px]"><img src={cama.url} alt="Cama elástica pequena de 2,44 metros" loading="lazy" decoding="async" className="aspect-[4/5] w-full rounded-[10px] object-cover" /></div><div className="combo__body flex flex-1 flex-col gap-[12px] [padding:18px_22px_24px]"><span className="eyebrow self-start">ALUGUEL DE BRINQUEDOS</span><h3 className="[font-size:clamp(1.35rem,3vw,1.8rem)]">Cama Elástica Pequena</h3><p>Uma opção compacta para garantir a diversão das crianças em festas e eventos!</p><p className="[font-size:.98rem] [font-weight:700]">Medida: 2,44 metros</p><strong className="[font-size:1.45rem] [font-weight:900]">R$ 120,00</strong><p className="[font-size:.95rem] [font-weight:700]">Valor para eventos em local fechado, com 4 horas de aluguel e monitor incluso. Para eventos de rua ou para contratar por mais horas, consulte os valores e condições pelo WhatsApp.</p><a className="btn btn--wa btn--lg" href="https://wa.me/5511947216605?text=Ol%C3%A1%2C%20MALU!%20Tenho%20interesse%20em%20alugar%20a%20Cama%20El%C3%A1stica%20Pequena%20de%202%2C44%20metros%20por%20R%24%20120%2C00.%20Poderiam%20me%20passar%20mais%20informa%C3%A7%C3%B5es%3F" target="_blank" rel="noopener"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-whatsapp" } as any)} /></svg> Consultar disponibilidade</a><button className="btn btn--blue btn--lg add-rental" type="button" onClick={add}><svg className="icon" aria-hidden="true"><use href="#i-cart" /></svg> Adicionar ao carrinho</button></div></article><article className="combo c-red flex flex-col [box-shadow:var(--hard)] [overflow:hidden]"><div className="grid grid-cols-2 gap-[8px] [padding:8px]"><img src="/assets/IMG-20261126-WA0028.jpg" alt="Tobogã gigante inflável colorido visto de frente" loading="lazy" decoding="async" className="aspect-[4/5] w-full rounded-[10px] object-cover" /><img src="/assets/IMG-20261126-WA0029.jpg" alt="Tobogã gigante inflável com escada e escorregador" loading="lazy" decoding="async" className="aspect-[4/5] w-full rounded-[10px] object-cover" /></div><div className="combo__body flex flex-1 flex-col gap-[12px] [padding:18px_22px_24px]"><span className="eyebrow self-start">ALUGUEL DE BRINQUEDOS</span><h3 className="[font-size:clamp(1.35rem,3vw,1.8rem)]">Tobogã Gigante</h3><p>Uma atração que chama a atenção e anima a festa! O Tobogã Gigante garante muita diversão para a criançada, com uma grande descida para brincar e aproveitar.</p><strong className="[font-size:1.45rem] [font-weight:900]">R$ 750,00</strong><p className="[font-size:.95rem] [font-weight:700]">Valor para eventos em local fechado, com 4 horas de aluguel e monitor incluso. Para eventos de rua ou para contratar por mais horas, consulte os valores e condições pelo WhatsApp.</p><a className="btn btn--wa btn--lg" href="https://wa.me/5511947216605?text=Ol%C3%A1%2C%20MALU!%20Tenho%20interesse%20em%20alugar%20o%20Tobog%C3%A3%20Gigante%20por%20R%24%20750%2C00.%20Poderiam%20me%20passar%20mais%20informa%C3%A7%C3%B5es%3F" target="_blank" rel="noopener"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-whatsapp" } as any)} /></svg> Consultar disponibilidade</a><button className="btn btn--blue btn--lg add-rental" type="button" onClick={add}><svg className="icon" aria-hidden="true"><use href="#i-cart" /></svg> Adicionar ao carrinho</button></div></article><article className="combo c-blue flex flex-col [box-shadow:var(--hard)] [overflow:hidden]"><div className="grid grid-cols-2 gap-[8px] [padding:8px]"><img src="/assets/IMG-20261126-WA0024.jpg" alt="Tobogã médio inflável colorido visto de frente" loading="lazy" decoding="async" className="aspect-[4/5] w-full rounded-[10px] object-cover" /><img src="/assets/IMG-20261126-WA0027.jpg" alt="Brinquedo inflável colorido visto de lado" loading="lazy" decoding="async" className="aspect-[4/5] w-full rounded-[10px] object-cover" /></div><div className="combo__body flex flex-1 flex-col gap-[12px] [padding:18px_22px_24px]"><span className="eyebrow self-start">ALUGUEL DE BRINQUEDOS</span><h3 className="[font-size:clamp(1.35rem,3vw,1.8rem)]">Tobogã Médio</h3><p>Uma opção animada para deixar a festa ainda mais divertida! O Tobogã Médio garante momentos de brincadeira e muita diversão para a criançada.</p><strong className="[font-size:1.45rem] [font-weight:900]">R$ 550,00</strong><p className="[font-size:.95rem] [font-weight:700]">Valor para eventos em local fechado, com 4 horas de aluguel e monitor incluso. Para eventos de rua ou para contratar por mais horas, consulte os valores e condições pelo WhatsApp.</p><a className="btn btn--wa btn--lg" href="https://wa.me/5511947216605?text=Ol%C3%A1%2C%20MALU!%20Tenho%20interesse%20em%20alugar%20o%20Tobog%C3%A3%20M%C3%A9dio%20por%20R%24%20550%2C00.%20Poderiam%20me%20passar%20mais%20informa%C3%A7%C3%B5es%3F" target="_blank" rel="noopener"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-whatsapp" } as any)} /></svg> Consultar disponibilidade</a><button className="btn btn--blue btn--lg add-rental" type="button" onClick={add}><svg className="icon" aria-hidden="true"><use href="#i-cart" /></svg> Adicionar ao carrinho</button></div></article>
<article className="combo c-red flex flex-col [box-shadow:var(--hard)] [overflow:hidden]"><div className="[padding:8px]"><img src="/assets/1795723599450.jpg" alt="Mesa de pimbolim para aluguel" loading="lazy" decoding="async" className="aspect-[4/3] w-full rounded-[10px] object-cover" /></div><div className="combo__body flex flex-1 flex-col gap-[12px] [padding:18px_22px_24px]"><span className="eyebrow self-start">ALUGUEL DE BRINQUEDOS</span><h3 className="[font-size:clamp(1.35rem,3vw,1.8rem)]">Pimbolim</h3><p>Uma disputa divertida para animar a festa! O pimbolim é uma ótima opção para reunir amigos e familiares em partidas descontraídas.</p><strong className="[font-size:1.45rem] [font-weight:900]">R$ 450,00</strong><p className="[font-size:.95rem] [font-weight:700]">Monitor incluso. Valor para 8 horas de aluguel. Para eventos de rua ou para contratar por mais horas, consulte os valores e condições pelo WhatsApp.</p><a className="btn btn--wa btn--lg" href="https://wa.me/5511947216605?text=Ol%C3%A1%2C%20MALU!%20Tenho%20interesse%20em%20alugar%20o%20Pimbolim%20por%20R%24%20450%2C00%20por%208%20horas.%20Poderiam%20me%20passar%20mais%20informa%C3%A7%C3%B5es%3F" target="_blank" rel="noopener"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-whatsapp" } as any)} /></svg> Consultar disponibilidade</a><button className="btn btn--blue btn--lg add-rental" type="button" onClick={add}><svg className="icon" aria-hidden="true"><use href="#i-cart" /></svg> Adicionar ao carrinho</button></div></article>
<article className="combo c-blue flex flex-col [box-shadow:var(--hard)] [overflow:hidden]"><div className="[padding:8px]"><img src="/assets/malu-sinuca-hd.webp" alt="Mesa de sinuca para aluguel" loading="lazy" decoding="async" className="aspect-[4/3] w-full rounded-[10px] object-cover" /></div><div className="combo__body flex flex-1 flex-col gap-[12px] [padding:18px_22px_24px]"><span className="eyebrow self-start">ALUGUEL DE JOGOS</span><h3 className="[font-size:clamp(1.35rem,3vw,1.8rem)]">Mesa de Sinuca</h3><p>Uma opção clássica para divertir os convidados e deixar o evento ainda mais completo.</p><strong className="[font-size:1.45rem] [font-weight:900]">R$ 750,00</strong><p className="[font-size:.95rem] [font-weight:700]">Monitor incluso. Valor para 12 horas de aluguel. Para eventos de rua ou para contratar por mais horas, consulte os valores e condições pelo WhatsApp.</p><a className="btn btn--wa btn--lg" href="https://wa.me/5511947216605?text=Ol%C3%A1%2C%20MALU!%20Tenho%20interesse%20em%20alugar%20a%20Mesa%20de%20Sinuca%20por%20R%24%20750%2C00%20por%2012%20horas.%20Poderiam%20me%20passar%20mais%20informa%C3%A7%C3%B5es%3F" target="_blank" rel="noopener"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-whatsapp" } as any)} /></svg> Consultar disponibilidade</a><button className="btn btn--blue btn--lg add-rental" type="button" onClick={add}><svg className="icon" aria-hidden="true"><use href="#i-cart" /></svg> Adicionar ao carrinho</button></div></article>
<article className="combo c-yellow flex flex-col [box-shadow:var(--hard)] [overflow:hidden]"><div className="[padding:8px]"><img src="/assets/1795723676072.jpg" alt="Brinquedo Tombo Legal" loading="lazy" decoding="async" className="aspect-[4/3] w-full rounded-[10px] object-cover" /></div><div className="combo__body flex flex-1 flex-col gap-[12px] [padding:18px_22px_24px]"><span className="eyebrow self-start">ALUGUEL DE BRINQUEDOS</span><h3 className="[font-size:clamp(1.35rem,3vw,1.8rem)]">Tombo Legal</h3><p>Uma brincadeira interativa para desafiar a pontaria e garantir boas risadas durante o evento.</p><strong className="[font-size:1.45rem] [font-weight:900]">R$ 380,00</strong><p className="[font-size:.95rem] [font-weight:700]">Monitor incluso. Valor para 6 horas em eventos fechados. Para eventos de rua ou para contratar por mais horas, consulte os valores e condições pelo WhatsApp.</p><a className="btn btn--wa btn--lg" href="https://wa.me/5511947216605?text=Ol%C3%A1%2C%20MALU!%20Tenho%20interesse%20em%20alugar%20o%20Tombo%20Legal.%20Poderiam%20me%20passar%20os%20valores%20para%20meu%20evento%3F" target="_blank" rel="noopener"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-whatsapp" } as any)} /></svg> Consultar disponibilidade</a><button className="btn btn--blue btn--lg add-rental" type="button" onClick={add}><svg className="icon" aria-hidden="true"><use href="#i-cart" /></svg> Adicionar ao carrinho</button></div></article>
<article className="combo c-purple flex flex-col [box-shadow:var(--hard)] [overflow:hidden]"><div className="[padding:8px]"><img src="/assets/1795723299100.jpg" alt="Palco e estrutura para shows e eventos" loading="lazy" decoding="async" className="aspect-[4/3] w-full rounded-[10px] object-cover" /></div><div className="combo__body flex flex-1 flex-col gap-[12px] [padding:18px_22px_24px]"><span className="eyebrow self-start">ESTRUTURA PARA EVENTOS</span><h3 className="[font-size:clamp(1.35rem,3vw,1.8rem)]">Palco para Shows</h3><p>Estrutura para apresentações, shows e eventos, com opção de contratação com ou sem equipamento de som.</p><strong className="[font-size:1.2rem] [font-weight:900]">Preço sob consulta</strong><a className="btn btn--wa btn--lg" href="https://wa.me/5511947216605?text=Ol%C3%A1%2C%20MALU!%20Gostaria%20de%20um%20or%C3%A7amento%20para%20alugar%20o%20palco%20para%20um%20evento%2C%20com%20ou%20sem%20som." target="_blank" rel="noopener"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-whatsapp" } as any)} /></svg> Solicitar orçamento</a><button className="btn btn--blue btn--lg add-rental" type="button" onClick={add}><svg className="icon" aria-hidden="true"><use href="#i-cart" /></svg> Adicionar ao carrinho</button></div></article>
<article className="combo c-red flex flex-col [box-shadow:var(--hard)] [overflow:hidden]"><div className="grid grid-cols-2 gap-[8px] [padding:8px]"><img src="/assets/1795723216739.jpg" alt="Máquinas de pipoca e algodão-doce" loading="lazy" decoding="async" className="aspect-[4/5] w-full rounded-[10px] object-cover" /><img src="/assets/1795723875794.jpg" alt="Pipoca e algodão-doce prontos para servir" loading="lazy" decoding="async" className="aspect-[4/5] w-full rounded-[10px] object-cover" /></div><div className="combo__body flex flex-1 flex-col gap-[12px] [padding:18px_22px_24px]"><span className="eyebrow self-start">ALUGUEL PARA EVENTOS</span><h3 className="[font-size:clamp(1.35rem,3vw,1.8rem)]">Pipoca e Algodão-Doce Gourmet</h3><p>Leve duas atrações deliciosas para sua festa: máquina de pipoca e máquina de algodão-doce. Você pode contratar cada máquina separadamente.</p><strong className="[font-size:1.45rem] [font-weight:900]">R$ 350,00 <span className="[font-size:.95rem] [font-weight:700]">cada máquina</span></strong><p className="[font-size:.95rem] [font-weight:700]">Valor para eventos fechados e casamentos. Para eventos de rua, consulte o preço pelo WhatsApp.</p><a className="btn btn--wa btn--lg" href="https://wa.me/5511947216605?text=Ol%C3%A1%2C%20MALU!%20Gostaria%20de%20um%20or%C3%A7amento%20para%20as%20m%C3%A1quinas%20de%20pipoca%20e%20algod%C3%A3o-doce%20gourmet." target="_blank" rel="noopener"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-whatsapp" } as any)} /></svg> Solicitar orçamento</a><button className="btn btn--blue btn--lg add-rental" type="button" onClick={add}><svg className="icon" aria-hidden="true"><use href="#i-cart" /></svg> Adicionar ao carrinho</button></div></article>
<article className="combo c-blue flex flex-col [box-shadow:var(--hard)] [overflow:hidden]"><div className="[padding:8px]"><img src="/assets/1795723144649.jpg" alt="Máquina de sorvete americano da MALU" loading="lazy" decoding="async" className="aspect-[3/4] w-full rounded-[10px] object-cover" /></div><div className="combo__body flex flex-1 flex-col gap-[12px] [padding:18px_22px_24px]"><span className="eyebrow self-start">ALUGUEL PARA EVENTOS</span><h3 className="[font-size:clamp(1.35rem,3vw,1.8rem)]">Máquina de Sorvete Americano</h3><p>Uma atração deliciosa para complementar festas, comemorações e eventos especiais.</p><strong className="[font-size:1.2rem] [font-weight:900]">Editando</strong><a className="btn btn--wa btn--lg" href="https://wa.me/5511947216605?text=Ol%C3%A1%2C%20MALU!%20Tenho%20interesse%20na%20m%C3%A1quina%20de%20sorvete%20americano.%20Poderiam%20me%20passar%20mais%20informa%C3%A7%C3%B5es%3F" target="_blank" rel="noopener"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-whatsapp" } as any)} /></svg> Consultar informações</a><button className="btn btn--blue btn--lg add-rental" type="button" onClick={add}><svg className="icon" aria-hidden="true"><use href="#i-cart" /></svg> Adicionar ao carrinho</button></div></article>
<article className="combo c-purple flex flex-col [box-shadow:var(--hard)] [overflow:hidden]"><div className="[padding:8px]"><img src="/assets/IMG-20261126-WA0033.jpg" alt="Conjuntos de mesa com quatro cadeiras brancas para aluguel" loading="lazy" decoding="async" className="aspect-[4/3] w-full rounded-[10px] object-cover" /></div><div className="combo__body flex flex-1 flex-col gap-[12px] [padding:18px_22px_24px]"><span className="eyebrow self-start">ALUGUEL DE MESAS E CADEIRAS</span><h3 className="[font-size:clamp(1.35rem,3vw,1.8rem)]">Jogo de Mesa com 4 Cadeiras</h3><p>Praticidade e conforto para acomodar seus convidados! Cada conjunto acompanha uma mesa e quatro cadeiras, ideal para compor a estrutura da sua festa.</p><strong className="[font-size:1.45rem] [font-weight:900]">R$ 15,00 <span className="[font-size:.95rem] [font-weight:700]">por unidade</span></strong><a className="btn btn--wa btn--lg" href="https://wa.me/5511947216605?text=Ol%C3%A1%2C%20MALU!%20Tenho%20interesse%20no%20aluguel%20de%20jogos%20de%20mesa%20com%204%20cadeiras%2C%20por%20R%24%2015%2C00%20cada.%20Poderiam%20me%20passar%20mais%20informa%C3%A7%C3%B5es%3F" target="_blank" rel="noopener"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-whatsapp" } as any)} /></svg> Consultar disponibilidade</a><button className="btn btn--blue btn--lg add-rental" type="button" onClick={add}><svg className="icon" aria-hidden="true"><use href="#i-cart" /></svg> Adicionar ao carrinho</button></div></article></div></div></section>
<section id="buffet" className="section section--lilac relative" aria-labelledby="buffet-t"><div className="wrap"><div className="section-head max-w-[760px] text-center [margin:0_auto_clamp(32px,4vw,52px)]"><span className="eyebrow items-center inline-flex gap-[8px] mb-[14px] uppercase [box-shadow:3px_3px_0_var(--red)] [font-size:.8rem] [font-weight:800] [letter-spacing:.08em] [padding:7px_14px]"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-gift" } as any)} /></svg> Buffet</span><h2 id="buffet-t">Cardápios para <span className="hl whitespace-normal [box-shadow:4px_4px_0_var(--ink)] [line-height:1] [margin:.06em_0] [padding:.04em_.2em_.08em]">todos os gostos</span></h2><p>A MALU apresenta quatro opções principais de cardápio: buffet infantil, strogonoff, feijoada completa e churrasco. Os pacotes de buffet infantil e strogonoff atendem eventos a partir de 30 pessoas; para outras quantidades e detalhes, consulte a equipe pelo WhatsApp. Algodão doce é informado como cortesia no site.</p></div><div className="grid gap-[24px] grid-cols-[repeat(auto-fill,minmax(300px,1fr))]"><article className="combo c-red reveal is-in flex flex-col [box-shadow:var(--hard)] [overflow:hidden]"><div className="combo__body flex flex-1 flex-col gap-[12px] [padding:22px_24px_26px]"><span className="tag items-center self-start inline-flex gap-[6px] no-underline uppercase [box-shadow:2px_2px_0_var(--ink)] [font-size:.78rem] [font-weight:700] [letter-spacing:.05em] [padding:6px_12px]"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-users" } as any)} /></svg> Buffet para eventos</span><h3>Buffet Infantil</h3><ul><li><span><svg className="icon" aria-hidden="true"><use {...({ href: "#i-check" } as any)} /></svg> Salgados fritos</span></li><li><span><svg className="icon" aria-hidden="true"><use {...({ href: "#i-check" } as any)} /></svg> Batata frita com cheddar e nuggets</span></li><li><span><svg className="icon" aria-hidden="true"><use {...({ href: "#i-check" } as any)} /></svg> Mini hambúrguer e mini pastéis</span></li><li><span><svg className="icon" aria-hidden="true"><use {...({ href: "#i-check" } as any)} /></svg> Hot dog e carne louca</span></li><li><span><svg className="icon" aria-hidden="true"><use {...({ href: "#i-check" } as any)} /></svg> Mini churros com doce de leite</span></li><li><span><svg className="icon" aria-hidden="true"><use {...({ href: "#i-check" } as any)} /></svg> Bolo de corte, beijinhos e brigadeiros</span></li><li><span><svg className="icon" aria-hidden="true"><use {...({ href: "#i-check" } as any)} /></svg> Decoração pegue e monte com balões</span></li><li><span><svg className="icon" aria-hidden="true"><use {...({ href: "#i-check" } as any)} /></svg> Lembrancinha e 4h de evento</span></li><li><span><svg className="icon" aria-hidden="true"><use {...({ href: "#i-check" } as any)} /></svg> Refrigerante, suco e água</span></li><li><span><svg className="icon" aria-hidden="true"><use {...({ href: "#i-check" } as any)} /></svg> Garçom, copeira e equipe uniformizada</span></li></ul><a className="btn btn--block [margin-top:auto] [width:100%]" href="https://wa.me/5511947216605?text=Ol%C3%A1%2C%20MALU!%20Vim%20pelo%20site%20e%20gostaria%20de%20um%20or%C3%A7amento%20para%20a%20minha%20festa.%20%F0%9F%8E%88" target="_blank" rel="noopener"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-whatsapp" } as any)} /></svg> Pedir orçamento</a></div></article><article className="combo c-purple reveal is-in flex flex-col [box-shadow:var(--hard)] [overflow:hidden]"><div className="combo__body flex flex-1 flex-col gap-[12px] [padding:22px_24px_26px]"><span className="tag items-center self-start inline-flex gap-[6px] no-underline uppercase [box-shadow:2px_2px_0_var(--ink)] [font-size:.78rem] [font-weight:700] [letter-spacing:.05em] [padding:6px_12px]"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-users" } as any)} /></svg> Buffet para eventos</span><h3>Buffet Strogonoff</h3><ul><li><span><svg className="icon" aria-hidden="true"><use {...({ href: "#i-check" } as any)} /></svg> Salgados variados e torrada com patê</span></li><li><span><svg className="icon" aria-hidden="true"><use {...({ href: "#i-check" } as any)} /></svg> Strogonoff de carne e de frango</span></li><li><span><svg className="icon" aria-hidden="true"><use {...({ href: "#i-check" } as any)} /></svg> Arroz, batata e salada verde</span></li><li><span><svg className="icon" aria-hidden="true"><use {...({ href: "#i-check" } as any)} /></svg> Bolo, brigadeiro, beijinho e palha italiana</span></li><li><span><svg className="icon" aria-hidden="true"><use {...({ href: "#i-check" } as any)} /></svg> Água, refrigerantes e suco</span></li><li><span><svg className="icon" aria-hidden="true"><use {...({ href: "#i-check" } as any)} /></svg> Pegue e monte com balões e lembrancinhas</span></li><li><span><svg className="icon" aria-hidden="true"><use {...({ href: "#i-check" } as any)} /></svg> Mesa de café (cortesia)</span></li><li><span><svg className="icon" aria-hidden="true"><use {...({ href: "#i-check" } as any)} /></svg> Sorvete, algodão doce ou pipoca gourmet</span></li></ul><a className="btn btn--block [margin-top:auto] [width:100%]" href="https://wa.me/5511947216605?text=Ol%C3%A1%2C%20MALU!%20Vim%20pelo%20site%20e%20gostaria%20de%20um%20or%C3%A7amento%20para%20a%20minha%20festa.%20%F0%9F%8E%88" target="_blank" rel="noopener"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-whatsapp" } as any)} /></svg> Pedir orçamento</a></div></article><article className="combo c-blue reveal is-in flex flex-col [box-shadow:var(--hard)] [overflow:hidden]"><div className="combo__body flex flex-1 flex-col gap-[12px] [padding:22px_24px_26px]"><span className="tag items-center self-start inline-flex gap-[6px] no-underline uppercase [box-shadow:2px_2px_0_var(--ink)] [font-size:.78rem] [font-weight:700] [letter-spacing:.05em] [padding:6px_12px]"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-users" } as any)} /></svg> Buffet sob consulta</span><h3>Feijoada Completa</h3><ul><li><span><svg className="icon" aria-hidden="true"><use {...({ href: "#i-check" } as any)} /></svg> Salgados variados e torradas com patê</span></li><li><span><svg className="icon" aria-hidden="true"><use {...({ href: "#i-check" } as any)} /></svg> Feijoada completa</span></li><li><span><svg className="icon" aria-hidden="true"><use {...({ href: "#i-check" } as any)} /></svg> Bisteca suína, couve, farofa e torresmo</span></li><li><span><svg className="icon" aria-hidden="true"><use {...({ href: "#i-check" } as any)} /></svg> Molho apimentado, laranja e vinagrete</span></li><li><span><svg className="icon" aria-hidden="true"><use {...({ href: "#i-check" } as any)} /></svg> Bolo de corte com sorvete</span></li><li><span><svg className="icon" aria-hidden="true"><use {...({ href: "#i-check" } as any)} /></svg> Mesa de bolo com docinhos</span></li><li><span><svg className="icon" aria-hidden="true"><use {...({ href: "#i-check" } as any)} /></svg> Água, refrigerante e suco</span></li></ul><a className="btn btn--block [margin-top:auto] [width:100%]" href="https://wa.me/5511947216605?text=Ol%C3%A1%2C%20MALU!%20Vim%20pelo%20site%20e%20gostaria%20de%20um%20or%C3%A7amento%20para%20a%20minha%20festa.%20%F0%9F%8E%88" target="_blank" rel="noopener"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-whatsapp" } as any)} /></svg> Pedir orçamento</a></div></article><article className="combo c-green reveal is-in flex flex-col [box-shadow:var(--hard)] [overflow:hidden]"><div className="combo__body flex flex-1 flex-col gap-[12px] [padding:22px_24px_26px]"><span className="tag items-center self-start inline-flex gap-[6px] no-underline uppercase [box-shadow:2px_2px_0_var(--ink)] [font-size:.78rem] [font-weight:700] [letter-spacing:.05em] [padding:6px_12px]"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-users" } as any)} /></svg> Buffet sob consulta</span><h3>Churrasco MALU</h3><ul><li><span><svg className="icon" aria-hidden="true"><use {...({ href: "#i-check" } as any)} /></svg> Patê de frango, caponata e torrada</span></li><li><span><svg className="icon" aria-hidden="true"><use {...({ href: "#i-check" } as any)} /></svg> Contra filé, frango e linguiça</span></li><li><span><svg className="icon" aria-hidden="true"><use {...({ href: "#i-check" } as any)} /></svg> 2 tipos de arroz e feijão tropeiro</span></li><li><span><svg className="icon" aria-hidden="true"><use {...({ href: "#i-check" } as any)} /></svg> Farofa, salada, maionese e vinagrete</span></li><li><span><svg className="icon" aria-hidden="true"><use {...({ href: "#i-check" } as any)} /></svg> Bolo com sorvete e fruta da época</span></li><li><span><svg className="icon" aria-hidden="true"><use {...({ href: "#i-check" } as any)} /></svg> Água, suco, refrigerante e café</span></li></ul><a className="btn btn--block [margin-top:auto] [width:100%]" href="https://wa.me/5511947216605?text=Ol%C3%A1%2C%20MALU!%20Vim%20pelo%20site%20e%20gostaria%20de%20um%20or%C3%A7amento%20para%20a%20minha%20festa.%20%F0%9F%8E%88" target="_blank" rel="noopener"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-whatsapp" } as any)} /></svg> Pedir orçamento</a></div></article></div></div></section>
<section className="section section--white relative" aria-labelledby="sobre-t"><div className="wrap split items-center grid gap-[clamp(28px,5vw,72px)]"><div className="split__media reveal is-in"><img src={playground.url} width="1254" height="1254" alt="150 metros de diversão no salão MALU" loading="lazy" /></div><div><span className="eyebrow items-center inline-flex gap-[8px] mb-[14px] uppercase [box-shadow:3px_3px_0_var(--red)] [font-size:.8rem] [font-weight:800] [letter-spacing:.08em] [padding:7px_14px]"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-heart" } as any)} /></svg> Sobre a MALU</span><h2 id="sobre-t">Festas felizes, com <span className="hl hl--green whitespace-normal [box-shadow:4px_4px_0_var(--ink)] [line-height:1] [margin:.06em_0] [padding:.04em_.2em_.08em]">carinho</span></h2><p className="lead [font-size:clamp(1.05rem,.5vw_+_.95rem,1.22rem)]">O site da MALU exibe nota 4,9 no Google e depoimentos de clientes que mencionam atendimento, pontualidade e qualidade do espaço e dos brinquedos. Essas informações são apresentadas pela própria empresa; consulte o perfil vinculado para conferir avaliações atualizadas e o contexto de cada comentário.</p><ul className="check-list grid gap-[10px] list-none [margin:0_0_1.6em]"><li><svg className="icon p-[4px] [margin-top:1px]" aria-hidden="true"><use {...({ href: "#i-check" } as any)} /></svg> Atendimento atencioso do começo ao fim</li><li><svg className="icon p-[4px] [margin-top:1px]" aria-hidden="true"><use {...({ href: "#i-check" } as any)} /></svg> Equipe uniformizada, garçom e copeira</li><li><svg className="icon p-[4px] [margin-top:1px]" aria-hidden="true"><use {...({ href: "#i-check" } as any)} /></svg> Ótimo custo-benefício</li><li><svg className="icon p-[4px] [margin-top:1px]" aria-hidden="true"><use {...({ href: "#i-check" } as any)} /></svg> Também alugamos brinquedos para eventos</li></ul><a className="btn btn--purple" href="https://wa.me/5511947216605?text=Ol%C3%A1%2C%20MALU!%20Vim%20pelo%20site%20e%20gostaria%20de%20um%20or%C3%A7amento%20para%20a%20minha%20festa.%20%F0%9F%8E%88" target="_blank" rel="noopener">Reservar minha data <svg className="icon" aria-hidden="true"><use {...({ href: "#i-arrow" } as any)} /></svg></a></div></div></section>
<section id="localizacao" className="section section--sky relative" aria-labelledby="area-t"><div className="wrap split items-center grid gap-[clamp(28px,5vw,72px)]"><div><span className="eyebrow items-center inline-flex gap-[8px] mb-[14px] uppercase [box-shadow:3px_3px_0_var(--red)] [font-size:.8rem] [font-weight:800] [letter-spacing:.08em] [padding:7px_14px]"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-pin" } as any)} /></svg> Onde estamos</span><h2 id="area-t">Venha conhecer o <span className="hl whitespace-normal [box-shadow:4px_4px_0_var(--ink)] [line-height:1] [margin:.06em_0] [padding:.04em_.2em_.08em]">salão MALU</span></h2><p className="lead [font-size:clamp(1.05rem,.5vw_+_.95rem,1.22rem)]">O salão da MALU fica na Rua João Pedro de Andrade, 49, no Jardim das Oliveiras, em Itapecerica da Serra (SP). O endereço pode ser consultado pelo mapa incorporado na página. Para confirmar disponibilidade de visita ou evento, entre em contato pelo WhatsApp.</p><a className="btn btn--blue" href="https://www.google.com/maps/search/?api=1&query=Rua%20Jo%C3%A3o%20Pedro%20de%20Andrade%2C%2049%20-%20Jardim%20das%20Oliveiras%2C%20Itapecerica%20da%20Serra%20-%20SP" target="_blank" rel="noopener">Abrir no Google Maps <svg className="icon" aria-hidden="true"><use {...({ href: "#i-arrow" } as any)} /></svg></a></div><div className="reveal is-in"><div className="map aspect-[16/10] [box-shadow:var(--hard-lg)] [overflow:hidden]"><iframe src="https://www.google.com/maps?q=Rua%20Jo%C3%A3o%20Pedro%20de%20Andrade%2C%2049%20-%20Jardim%20das%20Oliveiras%2C%20Itapecerica%20da%20Serra%20-%20SP&output=embed" title="Mapa: MALU Festas e Eventos" loading="lazy" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="h-full w-full border-0" /></div><div className="combo c-purple reveal is-in [margin-top:24px] [box-shadow:var(--hard)] [overflow:hidden]"><img src="/assets/file_0000000029c4820eacac28a79c6fb377~2.jpg" alt="Fachada do salão MALU Festas e Eventos" loading="lazy" className="block w-full h-auto" /></div></div></div></section>
<section className="section relative" aria-labelledby="faq-t"><div className="wrap"><div className="section-head max-w-[760px] text-center [margin:0_auto_clamp(32px,4vw,52px)]"><span className="eyebrow items-center inline-flex gap-[8px] mb-[14px] uppercase [box-shadow:3px_3px_0_var(--red)] [font-size:.8rem] [font-weight:800] [letter-spacing:.08em] [padding:7px_14px]"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-sparkles" } as any)} /></svg> Tire suas dúvidas</span><h2 id="faq-t">Dúvidas frequentes</h2>
          {/* <!-- GEO: inserir dado real aqui --> */} {/* horários de funcionamento, estacionamento, acessibilidade, regras e condições de cancelamento */}<p>Estas respostas reúnem as informações publicadas pela MALU sobre capacidade mínima dos pacotes, duração do buffet infantil, estrutura do salão, cardápios, locação de brinquedos, endereço e contato. Para preços, disponibilidade e condições específicas da data, confirme diretamente com a equipe pelo WhatsApp.</p></div><div className="faq grid gap-[12px] max-w-[860px] [margin:0_auto]"><details><summary>Quantas pessoas o buffet atende?</summary><div className="faq__a"><p>Resposta ainda será adicionada.</p></div></details><details><summary>Quanto tempo dura a festa?</summary><div className="faq__a"><p>Resposta ainda será adicionada.</p></div></details><details><summary>O que tem no salão?</summary><div className="faq__a"><p>O salão oferece Wi-Fi, 10 brinquedos, 10 jogos de mesa, som, piscina, banheiros masculino e feminino e área de churrasqueira com geladeira e freezer.</p></div></details><details><summary>Vocês alugam brinquedos para fora?</summary><div className="faq__a"><p>Sim. Além das festas realizadas no salão, a MALU também aluga brinquedos para eventos externos. O orçamento é solicitado pelo WhatsApp.</p></div></details><details><summary>Quais opções de buffet estão disponíveis?</summary><div className="faq__a"><p>Resposta ainda será adicionada.</p></div></details><details><summary>Onde fica a MALU Festas e Eventos?</summary><div className="faq__a"><p>A MALU fica na Rua João Pedro de Andrade, 49, no Jardim das Oliveiras, em Itapecerica da Serra, São Paulo.</p></div></details><details><summary>O salão tem piscina e churrasqueira?</summary><div className="faq__a"><p>Sim. O espaço conta com piscina e área de churrasqueira equipada com geladeira e freezer.</p></div></details><details><summary>Como pedir um orçamento ou consultar uma data?</summary><div className="faq__a"><p>Entre em contato pelo WhatsApp (11) 94721-6605 e informe os detalhes da festa para solicitar um orçamento e consultar a disponibilidade.</p></div></details></div></div></section>
<section id="contato" className="section relative" style={{ paddingTop: "0px" }}><div className="wrap"><div className="cta-band reveal is-in items-center grid gap-[28px] p-[clamp(36px,5vw,64px)] [box-shadow:12px_12px_0_var(--ink)] [overflow:hidden]"><div><h2>Bora deixar a festa inesquecível?</h2><p>Para consultar valores, disponibilidade e condições de contratação, fale diretamente com o Marcelo pelo WhatsApp (11) 94721-6605. Informe a data, o número de convidados e o tipo de evento para receber orientação sobre o salão, os cardápios e a estrutura disponível.</p></div><div className="btn-row items-center flex flex-wrap gap-[14px]"><a className="btn btn--wa btn--lg" href="https://wa.me/5511947216605?text=Ol%C3%A1%2C%20MALU!%20Vim%20pelo%20site%20e%20gostaria%20de%20um%20or%C3%A7amento%20para%20a%20minha%20festa.%20%F0%9F%8E%88" rel="noopener" target="_blank"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-whatsapp" } as any)} /></svg> WhatsApp</a><a className="btn btn--purple btn--lg" href="https://www.instagram.com/malufestaseventos/" rel="noopener" target="_blank"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-instagram" } as any)} /></svg> Instagram</a></div></div></div></section>
<section className="section section--sky relative" aria-label="Mensagem da MALU"><div className="wrap"><div className="reveal is-in mx-auto max-w-[1000px] text-center" style={{padding:"clamp(34px,6vw,72px) clamp(20px,4vw,48px)",background:"#fff",border:"3px solid #1d2350",boxShadow:"10px 10px 0 #1d2350",borderRadius:"24px"}}><span className="eyebrow" style={{display:"inline-block",marginBottom:"18px",padding:"6px 16px",fontWeight:800}}>MALU FESTAS E EVENTOS</span><h2 style={{color:"#1d2350",fontFamily:"'Baloo 2',system-ui,sans-serif",fontSize:"clamp(2rem,5vw,3.8rem)",fontWeight:800,lineHeight:1.12,letterSpacing:"-.035em",margin:0,textShadow:"none"}}>MALU Festas e Eventos, temos tudo o que você precisa em um só lugar!</h2></div></div></section>
      </main>
<div className="pointer-events-none relative [margin:clamp(40px,6vw,80px)_0_-30px] [overflow:hidden] [padding:30px_0] [z-index:6]" aria-hidden="true"><div className="marquee marquee--blue ml-[-2%] w-[104%] [box-shadow:0_8px_0_rgba(20,24,61,.18)] [padding:14px_0]"><div className="marquee__track flex [width:max-content]"><span>Festas<i>★</i>Eventos<i>★</i>Divulgações<i>★</i>Nota 4.9 no Google<i>★</i>Buffet completo<i>★</i>Piscina no local<i>★</i></span><span>Festas<i>★</i>Eventos<i>★</i>Divulgações<i>★</i>Nota 4.9 no Google<i>★</i>Buffet completo<i>★</i>Piscina no local<i>★</i></span></div></div></div>
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
          {items.length ? <ul className="cart-list">{items.map(item => <li className="cart-item" key={item.name}>
            <img src={item.image} alt="" width="64" height="64" />
            <div><span className="cart-item__name">{item.name}</span><span className="cart-item__price">{typeof item.price === "number" ? `${formatCurrency(item.price)} / unidade` : "Preço sob consulta"}</span><strong className="cart-item__subtotal">{typeof item.price === "number" ? formatCurrency(item.price * item.quantity) : "A combinar"}</strong></div>
            <div className="cart-item__ctrl"><span className="qty">
              <button type="button" onClick={() => changeQuantity(item.name, -1)} aria-label="Diminuir quantidade"><svg className="icon" aria-hidden="true"><use href="#i-minus" /></svg></button>
              <output aria-live="polite">{item.quantity}</output>
              <button type="button" onClick={() => changeQuantity(item.name, 1)} aria-label="Aumentar quantidade"><svg className="icon" aria-hidden="true"><use href="#i-plus" /></svg></button>
            </span><button type="button" className="icon-btn" onClick={() => setItems(current => current.filter(existing => existing.name !== item.name))} aria-label={`Remover ${item.name}`}><svg className="icon" aria-hidden="true"><use href="#i-trash" /></svg></button></div>
          </li>)}</ul> : <div className="cart-empty text-center [padding:24px_12px]"><div className="dd-ico c-yellow [margin:0_auto_12px]"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-list" } as any)} /></svg></div><b>Sua lista está vazia</b>Navegue pelo catálogo e clique em "Adicionar ao carrinho" para montar seu orçamento.</div>}
        </div>
        <div className="drawer__foot grid gap-[10px] [padding:16px_20px_calc(16px_+_env(safe-area-inset-bottom))]">{items.length > 0 && <div className="cart-total"><span>Subtotal dos itens com preço</span><strong>{formatCurrency(subtotal)}</strong>{pendingPriceItems > 0 && <small>{pendingPriceItems} {pendingPriceItems === 1 ? "item com preço" : "itens com preço"} sob consulta não incluído(s) na soma.</small>}</div>}<a className="btn btn--block [width:100%]" href={`https://wa.me/5511947216605?text=${encodeURIComponent("Olá, MALU! Gostaria de um orçamento para os itens abaixo:\\n" + items.map(item => item.name + " — quantidade: " + item.quantity + (typeof item.price === "number" ? " — unitário: " + formatCurrency(item.price) + " — subtotal: " + formatCurrency(item.price * item.quantity) : " — preço sob consulta")).join("\\n") + (items.length ? "\\n\\nSubtotal dos itens com preço: " + formatCurrency(subtotal) : ""))}`} target="_blank" rel="noopener"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-send" } as any)} /></svg> Pedir orçamento pelo WhatsApp</a><a className="btn btn--ghost btn--block [width:100%]" href="#aluguel-brinquedos" onClick={closeDrawer}>Continuar escolhendo</a><p>Informe a data, o horário e o local do evento pelo WhatsApp.</p></div>
      </aside>
      <div className={drawerOpen ? "drawer-backdrop is-open fixed [inset:0] [z-index:80]" : "drawer-backdrop fixed invisible [inset:0] [z-index:80]"} onClick={closeDrawer} aria-hidden="true" />
      <a className="wa-float h-[60px] place-items-center w-[60px] [box-shadow:4px_4px_0_var(--ink)]" aria-label="Conversar com a MALU no WhatsApp" href="https://wa.me/5511947216605?text=Ol%C3%A1%2C%20MALU!%20Vim%20pelo%20site%20e%20gostaria%20de%20um%20or%C3%A7amento%20para%20a%20minha%20festa.%20%F0%9F%8E%88" rel="noopener" target="_blank">
        <svg className="icon" aria-hidden="true">
          <use {...({ href: "#i-whatsapp" } as any)} />
        </svg>
      </a>
    </QuoteContext.Provider>
  );
}


/* <!-- GEO: inserir dado real aqui --> história, ano de fundação, responsáveis pela empresa e dados completos do Perfil da Empresa no Google. */
function ImportedFooter() {
  return (
    <footer className="site-footer pt-[20px] relative [font-size:.94rem] [margin-top:0]"><div className="wrap footer-grid grid">
      <div className="footer-brand"><img src={logo.url} width="400" height="254" alt="MALU Festas e Eventos" loading="lazy" /><p>Salão de festas com buffet, piscina e brinquedos. Festas, eventos e divulgações.</p><div className="social flex gap-[10px] mt-[18px]"><a aria-label="MALU no Instagram" href="https://www.instagram.com/malufestaseventos/" rel="noopener" target="_blank"><svg className="icon" aria-hidden="true"><use {...({ href: "#i-instagram" } as any)} /></svg></a></div></div>
      <div><span className="footer-label block mb-[14px] uppercase [font-size:.9rem] [font-weight:800] [letter-spacing:.06em]">Navegue</span><ul className="footer-links grid gap-[9px] list-none [margin:0]"><li><a href="#inicio">Início</a></li><li><a href="#salao">Salão</a></li><li><a href="#brinquedos">Brinquedos</a></li><li><a href="#aluguel-brinquedos">Aluguel de brinquedos</a></li><li><a href="#buffet">Buffet</a></li><li><a href="#localizacao">Localização</a></li><li><a href="#contato">Contato</a></li></ul></div>
      <div><span className="footer-label block mb-[14px] uppercase [font-size:.9rem] [font-weight:800] [letter-spacing:.06em]">Fale com a gente</span><ul className="footer-contact grid gap-[12px] list-none [margin:0]"><li><svg className="icon mt-[4px]" aria-hidden="true"><use {...({ href: "#i-whatsapp" } as any)} /></svg><a href="https://wa.me/5511947216605?text=Ol%C3%A1%2C%20MALU!%20Vim%20pelo%20site%20e%20gostaria%20de%20um%20or%C3%A7amento%20para%20a%20minha%20festa.%20%F0%9F%8E%88" rel="noopener" target="_blank">(11) 94721-6605</a></li><li><svg className="icon mt-[4px]" aria-hidden="true"><use {...({ href: "#i-phone" } as any)} /></svg></li><li><svg className="icon mt-[4px]" aria-hidden="true"><use {...({ href: "#i-instagram" } as any)} /></svg><a href="https://www.instagram.com/malufestaseventos/" rel="noopener" target="_blank">@malufestaseventos</a></li><li><svg className="icon mt-[4px]" aria-hidden="true"><use {...({ href: "#i-pin" } as any)} /></svg><a href="https://www.google.com/maps/search/?api=1&query=Rua%20Jo%C3%A3o%20Pedro%20de%20Andrade%2C%2049%20-%20Jardim%20das%20Oliveiras%2C%20Itapecerica%20da%20Serra%20-%20SP" rel="noopener" target="_blank">Rua João Pedro de Andrade, 49 - Jardim das Oliveiras, Itapecerica da Serra - SP</a></li></ul></div>
    </div><div className="wrap footer-bottom flex flex-wrap gap-[10px] justify-between [font-size:.84rem]"><span>© 2026 MALU Festas, Eventos e Divulgações</span></div></footer>
  );
}


function useImportedLayout() {
  useEffect(() => {
    const revealTargets = new Set<HTMLElement>(
      document.querySelectorAll<HTMLElement>(
        [
          "main section:not(#aluguel-brinquedos) .section-head",
          "main section:not(#aluguel-brinquedos) .toy-card",
          "main section:not(#aluguel-brinquedos) .step",
          "main section:not(#aluguel-brinquedos) .combo",
          "main section:not(#aluguel-brinquedos) .faq details",
          "main section:not(#aluguel-brinquedos) .stat",
          "main section:not(#aluguel-brinquedos) .highlight",
          "main section:not(#aluguel-brinquedos) .cta-band",
          "main section:not(#aluguel-brinquedos) .split > *",
          "main section:not(#aluguel-brinquedos) .gallery > *",
          "main section:not(#aluguel-brinquedos) .grid > *",
          "main section:not(#aluguel-brinquedos) .wrap > .section-head",
          "main section:not(#aluguel-brinquedos) > .wrap > div"
        ].join(", ")
      )
    );
    const revealItems = Array.from(revealTargets);
    if ("IntersectionObserver" in window) {
      const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-in");
          observer.unobserve(entry.target);
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -45px 0px" });
      revealItems.forEach((item, index) => {
        item.classList.add("reveal");
        item.classList.remove("is-in");
        item.style.transitionDelay = `${(index % 4) * 85}ms`;
        revealObserver.observe(item);
      });
    } else {
      revealItems.forEach((item) => item.classList.add("is-in"));
    }
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
