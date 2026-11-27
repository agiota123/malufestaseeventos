import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/fotos-utensilios-buffet")({
  head: () => ({
    meta: [
      { title: "Fotos de Utensílios para Buffet | MALU Festas e Eventos" },
      { name: "description", content: "Confira as fotos dos utensílios e acessórios para buffet disponíveis para aluguel na MALU Festas e Eventos." },
    ],
  }),
  component: FotosUtensiliosBuffetPage,
});

const photos = [
  "/assets/IMG-20261127-WA0009.jpg",
  "/assets/IMG-20261127-WA0010.jpg",
  "/assets/IMG-20261127-WA0011.jpg",
  "/assets/IMG-20261127-WA0012.jpg",
  "/assets/IMG-20261127-WA0013.jpg",
  "/assets/IMG-20261127-WA0014.jpg",
  "/assets/IMG-20261127-WA0015.jpg",
  "/assets/IMG-20261127-WA0016.jpg",
  "/assets/IMG-20261127-WA0017.jpg",
  "/assets/IMG-20261127-WA0018.jpg",
  "/assets/IMG-20261127-WA0019.jpg",
  "/assets/IMG-20261127-WA0020.jpg",
  "/assets/IMG-20261127-WA0021.jpg",
];

function FotosUtensiliosBuffetPage() {
  return (
    <main className="min-h-screen bg-[#fff4dc] px-4 py-8 text-[#1d2350]">
      <div className="mx-auto flex w-full max-w-[1100px] flex-col gap-6">
        <a href="/#utensilios-buffet" className="inline-flex w-fit items-center gap-2 rounded-full border-2 border-[#1d2350] bg-[#ffc83d] px-5 py-3 font-extrabold text-[#1d2350] shadow-[3px_3px_0_#1d2350] transition-transform hover:-translate-y-0.5">
          <span aria-hidden="true">←</span> Voltar ao site
        </a>
        <header className="text-center">
          <span className="mb-3 inline-flex rounded-full bg-[#1d2350] px-4 py-2 text-sm font-extrabold uppercase tracking-wide text-[#ffc83d]">MALU Festas e Eventos</span>
          <h1 className="text-3xl font-black sm:text-5xl">Utensílios para Buffet</h1>
          <p className="mx-auto mt-3 max-w-[720px] text-base sm:text-lg">Tudo para montar seu buffet completo! Alugamos réchauds para alimentos quentes e frios, jogos de talheres, conjuntos de mesas, toalhas para mesas e cadeiras, fitas de cetim para cadeiras e muito mais. Tudo o que você precisa para seu evento em um só lugar!</p>
        </header>
        <div className="flex items-center justify-between gap-3">
          <p className="text-sm font-extrabold uppercase tracking-wide">Galeria de fotos</p>
          <p className="text-sm font-semibold">13 fotos · Deslize para o lado <span aria-hidden="true">→</span></p>
        </div>
        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain pb-5 [scrollbar-width:thin] [scrollbar-color:#1d2350_#ffe7a3] [-webkit-overflow-scrolling:touch]" aria-label="Galeria horizontal de utensílios para buffet">
          {photos.map((photo, index) => (
            <a key={photo} href={photo} target="_blank" rel="noopener" className="group w-[82vw] max-w-[420px] shrink-0 snap-center overflow-hidden rounded-2xl border-[3px] border-[#1d2350] bg-white shadow-[4px_4px_0_#ffc83d] sm:w-[58vw] lg:w-[calc(50%-8px]">
              <img src={photo} alt={`Utensílios para buffet — foto ${index + 1}`} loading="lazy" decoding="async" className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
              <span className="block px-4 py-3 text-sm font-extrabold">Foto {index + 1} de {photos.length} <span className="float-right">Ampliar ↗</span></span>
            </a>
          ))}
        </div>
        <a href="https://wa.me/5511947216605?text=Ol%C3%A1%2C%20MALU!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20aluguel%20de%20utens%C3%ADlios%20para%20buffet." target="_blank" rel="noopener" className="mx-auto inline-flex min-h-12 items-center justify-center rounded-full bg-[#0b72c4] px-7 py-3 font-extrabold text-white shadow-[4px_4px_0_#1d2350] transition-transform hover:-translate-y-0.5">
          Solicitar orçamento pelo WhatsApp
        </a>
      </div>
    </main>
  );
}
