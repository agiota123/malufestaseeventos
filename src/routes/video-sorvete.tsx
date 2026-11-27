import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/video-sorvete")({
  head: () => ({
    meta: [
      { title: "Sorvete Americano | MALU Festas e Eventos" },
      { name: "description", content: "Assista ao vídeo da máquina de sorvete americano da MALU Festas e Eventos." },
    ],
  }),
  component: VideoSorvetePage,
});

function VideoSorvetePage() {
  return (
    <main className="min-h-screen bg-[#fff4dc] px-4 py-8 text-[#1d2350]">
      <div className="mx-auto flex w-full max-w-[900px] flex-col gap-6">
        <a
          href="/#aluguel-brinquedos"
          className="inline-flex w-fit items-center gap-2 rounded-full border-2 border-[#1d2350] bg-[#ffc83d] px-5 py-3 font-extrabold text-[#1d2350] shadow-[3px_3px_0_#1d2350] transition-transform hover:-translate-y-0.5"
        >
          <span aria-hidden="true">←</span> Voltar aos aluguéis
        </a>
        <header className="text-center">
          <span className="mb-3 inline-flex rounded-full bg-[#1d2350] px-4 py-2 text-sm font-extrabold uppercase tracking-wide text-[#ffc83d]">
            MALU Festas e Eventos
          </span>
          <h1 className="text-3xl font-black sm:text-5xl">Sorvete Americano 🍦</h1>
          <p className="mx-auto mt-3 max-w-[620px] text-base sm:text-lg">
            Confira a máquina de sorvete americano e leve esse sabor especial para sua festa!
          </p>
        </header>
        <div className="overflow-hidden rounded-[22px] border-[4px] border-[#1d2350] bg-white p-2 shadow-[7px_7px_0_#ffc83d]">
          <video
            className="max-h-[75vh] w-full rounded-[14px] bg-black"
            src="/assets/VID-20261127-WA0000.mp4"
            controls
            playsInline
            preload="metadata"
          >
            Seu navegador não conseguiu reproduzir este vídeo.
          </video>
        </div>
        <a
          href="/#aluguel-brinquedos"
          className="mx-auto inline-flex min-h-12 items-center justify-center rounded-full bg-[#0b72c4] px-7 py-3 font-extrabold text-white shadow-[4px_4px_0_#1d2350] transition-transform hover:-translate-y-0.5"
        >
          Voltar aos aluguéis
        </a>
      </div>
    </main>
  );
}
