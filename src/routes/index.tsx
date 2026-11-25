import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/malu-logo.webp.asset.json";
import sinuca from "@/assets/malu-sinuca.webp.asset.json";
import som from "@/assets/malu-som.webp.asset.json";
import banheiro from "@/assets/malu-banheiro.webp.asset.json";
import cama from "@/assets/malu-cama-elastica.webp.asset.json";
import playground from "@/assets/malu-playground.webp.asset.json";
import lanches from "@/assets/malu-lanches.webp.asset.json";
import churrasco from "@/assets/malu-churrasco.webp.asset.json";

const WA = "https://wa.me/5511947216605?text=" + encodeURIComponent("Olá, MA.lu! Vim pelo site e gostaria de um orçamento para minha festa. 🎈");
const TEL = "tel:+5511947216605";
const IG = "https://www.instagram.com/malufestaseventos/";
const ADDRESS = "Rua João Pedro de Andrade, 49 - Jardim das Oliveiras, Itapecerica da Serra - SP";
const MAP = "https://www.google.com/maps?q=" + encodeURIComponent(ADDRESS) + "&output=embed";
const MAP_LINK = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(ADDRESS);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MA.lu Festas e Eventos | Salão de festas com buffet e brinquedos" },
      { name: "description", content: "Salão completo com 10 brinquedos, piscina, buffet, som, Wi-Fi e churrasqueira no Jardim das Oliveiras. Peça seu orçamento pelo WhatsApp." },
      { property: "og:title", content: "MA.lu Festas e Eventos" },
      { property: "og:description", content: "Salão de festas com buffet, piscina e 10 brinquedos. Faça sua reserva!" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Baloo+2:wght@500;700;800&family=Nunito:wght@400;600;700&display=swap" },
    ],
  }),
  component: Home,
});

const features = [
  ["🏠", "Salão completo"], ["📶", "Wi-Fi grátis"], ["🎠", "10 brinquedos"], ["🚻", "Banheiros masc. e fem."],
  ["🔊", "Som de qualidade"], ["🎲", "10 jogos de mesa"], ["🏊", "Piscina no local"], ["🍽️", "Buffet"],
  ["🔥", "Churrasqueira, geladeira e freezer"],
];

const menus = [
  { title: "Buffet Infantil", tag: "30 pessoas • a partir de R$ 3.500", color: "bg-malu-pink", groups: [
    ["Serviço incluso", ["Salgados fritos", "Batata frita com cheddar e nuggets", "Mini hambúrguer", "Mini pastéis", "Hot dog", "Carne louca", "Mini churros copinho de doce de leite"]],
    ["Extras inclusos", ["Bolo de corte", "Beijinhos e brigadeiros", "Decoração pegue e monte com balões", "Lembrancinha", "4h de evento", "Refrigerante, suco e água", "Garçom, copeira e equipe uniformizada", "Equipamentos e descartáveis"]],
  ]},
  { title: "Buffet Strogonoff", tag: "30 pessoas • a partir de R$ 3.500", color: "bg-malu-purple", groups: [
    ["Entrada", ["Salgados variados", "Torrada com patê"]],
    ["Prato principal", ["Strogonoff de carne", "Strogonoff de frango", "Arroz branco, batata, salada verde e batatinha em conserva"]],
    ["Doces e bebidas", ["Bolo, brigadeiro, beijinho e palha italiana", "Água, refrigerantes e suco"]],
    ["Decoração e brindes", ["Pegue e monte com balões", "Lembrancinhas do tema", "Mesa de café (cortesia)", "Sorvete, algodão doce ou pipoca gourmet"]],
  ]},
  { title: "Feijoada Completa", tag: "Consulte valores", color: "bg-malu-cyan", groups: [
    ["Entrada", ["Salgados variados", "Torradas com patê"]],
    ["Prato principal", ["Feijoada com carnes, linguiça e bacon", "Bisteca suína, couve, farofa e torresmo", "Molho apimentado, laranja e vinagrete"]],
    ["Sobremesa e bebidas", ["Bolo de corte com sorvete", "Mesa de bolo com docinhos", "Água, refrigerante e suco"]],
  ]},
  { title: "Churrasco MA.lu", tag: "Consulte valores", color: "bg-malu-yellow", groups: [
    ["Entradas", ["Patê de frango", "Caponata de berinjela", "Torrada"]],
    ["Prato principal", ["Contra filé", "Frango (peito ou tulipa)", "Linguiça"]],
    ["Acompanhamentos", ["Arroz branco e à grega", "Feijão tropeiro, farofa", "Salada verde, maionese e vinagrete"]],
    ["Sobremesa e bebidas", ["Bolo com sorvete", "Fruta da época", "Água, suco, refrigerante e café (cortesia)"]],
  ]},
] as const;

function WaIcon() {
  return <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true"><path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5 2.5 1 3 .8 3.6.7.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.4zM12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2z"/></svg>;
}
function IgIcon() {
  return <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" className="fill-current"/></svg>;
}

const btn = "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-display text-lg font-bold shadow-md transition hover:-translate-y-0.5";

function Home() {
  return (
    <div className="min-h-screen bg-malu-cream text-malu-ink" style={{ fontFamily: "Nunito, system-ui, sans-serif" }}>
      <header className="sticky top-0 z-40 border-b border-malu-pink/20 bg-malu-cream/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2">
          <a href="#inicio"><img src={logo.url} alt="MA.lu Festas, Eventos e Divulgações" className="h-14 w-auto" /></a>
          <nav className="hidden gap-6 font-display text-lg font-semibold md:flex">
            <a href="#salao" className="hover:text-malu-pink">Salão</a>
            <a href="#buffet" className="hover:text-malu-pink">Buffet</a>
            <a href="#localizacao" className="hover:text-malu-pink">Localização</a>
            <a href="#contato" className="hover:text-malu-pink">Contato</a>
          </nav>
          <a href={WA} target="_blank" rel="noopener" className={`${btn} bg-malu-wa px-4 py-2 text-base text-primary-foreground`}><WaIcon />Reservar</a>
        </div>
      </header>

      <section id="inicio" className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 md:grid-cols-2 md:py-20">
          <div>
            <span className="inline-block rounded-full bg-malu-yellow/40 px-4 py-1 font-display font-bold">🎉 Festas • Eventos • Divulgações</span>
            <h1 className="mt-4 font-display text-5xl font-extrabold leading-tight md:text-6xl">
              A festa dos seus sonhos no <span className="text-malu-pink">salão MA.lu</span>
            </h1>
            <p className="mt-4 text-lg text-malu-ink/80">Salão completo com 10 brinquedos, piscina, buffet, som de qualidade e Wi-Fi grátis. Diversão para crianças e adultos no Jardim das Oliveiras.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={WA} target="_blank" rel="noopener" className={`${btn} bg-malu-wa text-primary-foreground`}><WaIcon />WhatsApp</a>
              <a href={TEL} className={`${btn} bg-malu-pink text-primary-foreground`}>📞 (11) 94721-6605</a>
              <a href={IG} target="_blank" rel="noopener" className={`${btn} bg-malu-purple text-primary-foreground`}><IgIcon />Instagram</a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <img src={cama.url} alt="Cama elástica colorida" className="aspect-square w-full rotate-[-3deg] rounded-3xl object-cover shadow-xl ring-4 ring-malu-cyan" />
            <img src={playground.url} alt="Área de brinquedos com grama" className="mt-10 aspect-square w-full rotate-[3deg] rounded-3xl object-cover shadow-xl ring-4 ring-malu-pink" />
          </div>
        </div>
      </section>

      <section id="salao" className="bg-background py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center font-display text-4xl font-extrabold">Nosso <span className="text-malu-purple">salão</span></h2>
          <p className="mx-auto mt-2 max-w-2xl text-center text-malu-ink/75">Mais de 150 m² de pura diversão, com tudo o que sua festa precisa em um só lugar.</p>
          <ul className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
            {features.map(([i, t]) => (
              <li key={t} className="flex items-center gap-3 rounded-2xl bg-malu-cream p-4 font-display text-lg font-bold shadow-sm"><span className="text-3xl">{i}</span>{t}</li>
            ))}
          </ul>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[[sinuca, "Mesa de sinuca: diversão para adultos e crianças"], [som, "Som de qualidade e Wi-Fi gratuito"], [banheiro, "4 banheiros: 2 no salão e 2 na área da piscina"], [playground, "150 m² de pura diversão"]].map(([img, cap]) => (
              <figure key={cap as string} className="overflow-hidden rounded-3xl bg-malu-cream shadow-md">
                <img src={(img as { url: string }).url} alt={cap as string} loading="lazy" className="aspect-[4/5] w-full object-cover" />
                <figcaption className="p-3 text-center font-semibold">{cap as string}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="buffet" className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center font-display text-4xl font-extrabold">Cardápios de <span className="text-malu-pink">buffet</span></h2>
          <p className="mx-auto mt-2 max-w-2xl text-center text-malu-ink/75">Escolha o cardápio ideal para a sua festa. Algodão doce de cortesia!</p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {menus.map((m) => (
              <article key={m.title} className="overflow-hidden rounded-3xl bg-background shadow-lg">
                <div className={`${m.color} px-6 py-4 text-primary-foreground`}>
                  <h3 className="font-display text-2xl font-extrabold">{m.title}</h3>
                  <p className="font-semibold">{m.tag}</p>
                </div>
                <div className="grid gap-4 p-6 sm:grid-cols-2">
                  {m.groups.map(([g, items]) => (
                    <div key={g}><h4 className="font-display text-lg font-bold text-malu-purple">{g}</h4>
                      <ul className="mt-1 space-y-1 text-sm">{items.map((it) => <li key={it}>• {it}</li>)}</ul></div>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <img src={lanches.url} alt="Lanches: mini cachorro-quente, mini hambúrguer, batata frita e pipoca" loading="lazy" className="w-full rounded-3xl shadow-md" />
            <img src={churrasco.url} alt="Cardápio de churrasco MA.lu" loading="lazy" className="w-full rounded-3xl shadow-md" />
          </div>
          <div className="mt-8 text-center"><a href={WA} target="_blank" rel="noopener" className={`${btn} bg-malu-wa text-primary-foreground`}><WaIcon />Pedir orçamento do buffet</a></div>
        </div>
      </section>

      <section id="localizacao" className="bg-background py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center font-display text-4xl font-extrabold">Onde <span className="text-malu-cyan">estamos</span></h2>
          <p className="mt-2 text-center text-malu-ink/75">{ADDRESS}</p>
          <iframe title="Mapa MA.lu Festas e Eventos" src={MAP} loading="lazy" className="mt-8 h-96 w-full rounded-3xl border-0 shadow-lg" referrerPolicy="no-referrer-when-downgrade" />
          <div className="mt-4 text-center"><a href={MAP_LINK} target="_blank" rel="noopener" className="font-bold text-malu-pink underline">Abrir no Google Maps →</a></div>
        </div>
      </section>

      <section id="contato" className="py-16">
        <div className="mx-auto max-w-4xl rounded-[2rem] bg-malu-pink px-6 py-12 text-center text-primary-foreground shadow-xl">
          <h2 className="font-display text-4xl font-extrabold">Vamos fazer sua festa?</h2>
          <p className="mt-2 text-lg">Fale com a gente e garanta sua data. Atendemos aniversários, eventos e divulgações.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href={WA} target="_blank" rel="noopener" className={`${btn} bg-malu-wa`}><WaIcon />WhatsApp</a>
            <a href={TEL} className={`${btn} bg-background text-malu-ink`}>📞 Ligar (11) 94721-6605</a>
            <a href={IG} target="_blank" rel="noopener" className={`${btn} bg-malu-purple`}><IgIcon />@malufestaseventos</a>
          </div>
        </div>
      </section>

      <footer className="border-t border-malu-pink/20 py-8 text-center text-sm text-malu-ink/70">
        <img src={logo.url} alt="MA.lu" className="mx-auto mb-3 h-12" />
        © {new Date().getFullYear()} MA.lu Festas, Eventos e Divulgações • {ADDRESS}
      </footer>

      <a href={WA} target="_blank" rel="noopener" aria-label="Falar no WhatsApp" className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-malu-wa text-primary-foreground shadow-xl"><WaIcon /></a>
    </div>
  );
}
