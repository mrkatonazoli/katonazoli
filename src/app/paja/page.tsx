"use client";

import { useState } from "react";

type Usp = {
  title: string;
  tag: string;
  items: string[];
};

const usps: Usp[] = [
  {
    title: "Lokáció",
    tag: "location",
    items: [
      "Plai Laem — Koh Samui prémium zónája",
      "3–5 perc a tengertől",
      "10 perc a reptértől",
    ],
  },
  {
    title: "Longevity csomag",
    tag: "wellbeing",
    items: [
      "Jeges merülő medencék",
      "Infra szaunák",
      "Digitális fitness megoldások",
      "Cirkadián világítási rendszer",
    ],
  },
  {
    title: "Európai minőség",
    tag: "build quality",
    items: [
      "Európai színvonalú anyaghasználat és kivitelezés",
      "Kulcsüzenet az európai vevők felé",
      "Hosszú távú értékmegőrzés",
    ],
  },
  {
    title: "Zárt, hotel-szerű működés",
    tag: "operations",
    items: [
      "Professzionális szállodai üzemeltetés",
      "24/7 biztonság és menedzsment",
      "Dinamikus árazás, koordinált kihasználtság",
    ],
  },
  {
    title: "Hozam + visszavásárlás",
    tag: "investment",
    items: [
      "10% fix éves ROI, havi kifizetéssel",
      "36 hónapnál visszavásárlási garancia",
      "Alternatíva: szabadpiaci 15–20% variable hozam",
    ],
  },
];

type TabKey = "summary" | "marketing" | "process";

const tabs: { key: TabKey; num: string; label: string }[] = [
  { key: "summary", num: "01", label: "Összefoglaló" },
  { key: "marketing", num: "02", label: "Marketing" },
  { key: "process", num: "03", label: "Folyamat" },
];

export default function PajaPage() {
  const [active, setActive] = useState<TabKey>("summary");

  return (
    <main className="min-h-screen bg-white text-neutral-900 px-6 md:px-12 lg:px-20 py-16">
      {/* Subtle dot grid */}
      <div
        aria-hidden
        className="fixed inset-0 opacity-[0.05] pointer-events-none [background-image:radial-gradient(rgba(0,0,0,1)_1px,transparent_1px)] [background-size:24px_24px]"
      />

      <div className="relative max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-16">
          <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-neutral-400">
            <span className="text-accent">{">"}</span>
            <span>project.workspace</span>
          </div>
          <a
            href="/"
            className="font-mono text-[10px] uppercase tracking-[0.22em] text-neutral-400 hover:text-neutral-700 transition-colors"
          >
            ← katonazoli.hu
          </a>
        </div>

        {/* Project title */}
        <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent mb-4">
          {">"} project.name
        </div>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05] mb-4">
          Koh Samui <span className="text-accent">Villa Resort</span>
        </h1>
        <p className="font-mono text-sm text-neutral-500 mb-14">
          Plai Laem · Koh Samui · Thailand
        </p>

        {/* Tab bar */}
        <div
          role="tablist"
          aria-label="Project sections"
          className="inline-flex items-center gap-2 p-1.5 rounded-2xl bg-neutral-100 border border-neutral-200 mb-12 max-w-full overflow-x-auto"
        >
          {tabs.map((t) => {
            const isActive = active === t.key;
            return (
              <button
                key={t.key}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(t.key)}
                className={
                  "group relative flex items-center gap-3 px-5 md:px-6 py-3.5 rounded-xl font-mono text-[11px] md:text-[12px] uppercase tracking-[0.22em] whitespace-nowrap transition-all duration-200 " +
                  (isActive
                    ? "bg-neutral-950 text-white shadow-[0_8px_24px_-8px_rgba(0,0,0,0.45)]"
                    : "text-neutral-500 hover:text-neutral-900 hover:bg-white")
                }
              >
                <span
                  className={
                    "font-semibold transition-colors " +
                    (isActive ? "text-accent" : "text-neutral-400")
                  }
                >
                  {t.num}
                </span>
                <span className="font-semibold">{t.label}</span>
                {isActive && (
                  <span
                    aria-hidden
                    className="ml-1 inline-block w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_0_3px_rgba(20,184,166,0.25)]"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Tab content */}
        {active === "summary" && <SummaryTab />}
        {active === "marketing" && <MarketingTab />}
        {active === "process" && <ProcessTab />}

        {/* Footer note */}
        <div className="mt-28 pt-8 border-t border-neutral-200 font-mono text-[10px] uppercase tracking-[0.22em] text-neutral-400">
          Internal use only — shared with client.
        </div>
      </div>
    </main>
  );
}

function SummaryTab() {
  return (
    <div role="tabpanel">
      {/* Block 1 — Summary */}
      <section className="mb-24">
        <div className="flex items-baseline gap-5 mb-10 pb-5 border-b border-neutral-200">
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
            01
          </span>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Projekt összefoglaló
          </h2>
        </div>

        <div className="max-w-3xl space-y-6 text-[15px] md:text-base leading-[1.75] text-neutral-700">
          <p>
            A{" "}
            <strong className="text-neutral-950">
              Koh Samui Villa Resort
            </strong>{" "}
            egy prémium apartmanfejlesztés Thaiföld egyik legkeresettebb és
            legexkluzívabb szigetén, Koh Samui-n, a Plai Laem félszigeten. A
            projekt összesen{" "}
            <strong className="text-neutral-950">
              69, teljesen berendezett
            </strong>
            , saját medencével rendelkező apartmanból áll, amelyek nem
            klasszikus nyaralóingatlanokként, hanem komplex lifestyle- és
            befektetési termékként kerülnek pozicionálásra.
          </p>

          <p>
            A fejlesztés célja egy olyan prémium élettér létrehozása, amely
            egyszerre kínál trópusi életérzést, európai színvonalú minőséget,
            hosszú távú értékmegőrzést és professzionális szállodai
            hasznosítási lehetőséget. A projekt különlegessége, hogy a
            hagyományos ingatlanfejlesztésekkel szemben a{" "}
            <strong className="text-neutral-950">
              longevity és wellbeing
            </strong>{" "}
            szemléletet is integrálja: az apartmanok és a közösségi
            szolgáltatások részét képezik többek között a jeges merülő
            medencék, infra szaunák, digitális fitness megoldások, cirkadián
            világítási rendszerek, valamint egészségtudatos anyaghasználat és
            víztisztítási technológiák.
          </p>

          <p>
            A projekt egyik legerősebb eleme a{" "}
            <strong className="text-neutral-950">befektetési modell</strong>,
            amely a tulajdonosok számára professzionális szállodai
            üzemeltetést, dinamikus árazást és hozamtermelő hasznosítást
            biztosít. A konstrukció része egy fix, havi kifizetésű{" "}
            <span className="inline-flex items-center gap-1 rounded bg-neutral-950 px-1.5 py-0.5 text-white text-[13px] font-medium">
              10%-os hozamopció
            </span>{" "}
            és egy visszavásárlási garancia, amely a 36. hónapban biztosít
            kilépési lehetőséget a befektetők számára. Emellett elérhető egy
            szabadpiaci, magasabb hozampotenciálú modell is, amely megfelelő
            kihasználtság esetén akár{" "}
            <span className="inline-flex items-center gap-1 rounded bg-neutral-950 px-1.5 py-0.5 text-white text-[13px] font-medium">
              15–20%-os éves hozamot
            </span>{" "}
            is eredményezhet.
          </p>

          <p>
            A Koh Samui Villa Resort elsődleges célcsoportját olyan prémium
            vásárlók alkotják, akik egyszerre keresnek második otthont, hosszú
            távú értékmegőrző befektetést és magas életminőséget biztosító
            életstílust. A projekt kommunikációja ezért nem kizárólag az
            ingatlanra, hanem a{" "}
            <strong className="text-neutral-950">
              szabadságra, az egészségtudatos trópusi életre, a biztonságos
              befektetésre és a professzionális üzemeltetésre
            </strong>{" "}
            épül.
          </p>
        </div>

        {/* Quick stats strip */}
        <div className="mt-12 rounded-xl bg-neutral-950 text-white p-8 md:p-10 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.25)]">
          <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent mb-6">
            {">"} key_numbers
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-lg overflow-hidden">
            {[
              { k: "Egységek", v: "69" },
              { k: "Lokáció", v: "Plai Laem" },
              { k: "Fix ROI", v: "10% / év" },
              { k: "Buyback", v: "36 hó" },
            ].map((s) => (
              <div key={s.k} className="bg-neutral-950 p-5">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/50 mb-2">
                  {s.k}
                </div>
                <div className="text-xl md:text-2xl font-semibold tracking-tight">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Block 2 — USP */}
      <section>
        <div className="flex items-baseline gap-5 mb-3 pb-5 border-b border-neutral-200">
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
            02
          </span>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            USP — Core value proposition
          </h2>
        </div>
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-neutral-500 mt-6 mb-10">
          🔑 5 fő egyedi értékajánlat
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {usps.map((u, i) => (
            <article
              key={u.title}
              className={
                "group rounded-xl bg-neutral-950 text-white p-7 md:p-8 transition-all hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.35)] " +
                (i === usps.length - 1 ? "md:col-span-2" : "")
              }
            >
              <div className="flex items-center justify-between mb-5">
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent">
                  0{i + 1}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/40">
                  {u.tag}
                </span>
              </div>

              <h3 className="text-xl md:text-2xl font-semibold tracking-tight mb-5">
                {u.title}
              </h3>

              <ul className="space-y-2.5 text-[14px] text-white/80">
                {u.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span
                      aria-hidden
                      className="text-accent font-mono text-xs leading-[1.6]"
                    >
                      ▸
                    </span>
                    <span className="leading-[1.6]">{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

const funnelStages: {
  stage: string;
  action: string;
  width: string;
}[] = [
  {
    stage: "Cold audience",
    action: "Meta: edukációs videó + edukációs content + vágykeltő vizuális irány",
    width: "w-full",
  },
  {
    stage: "Interest",
    action: "Landing + guide",
    width: "w-[88%]",
  },
  {
    stage: "Nurture",
    action: "Email + remarketing",
    width: "w-[76%]",
  },
  {
    stage: "High intent",
    action: "ROI / konzultáció",
    width: "w-[64%]",
  },
  {
    stage: "Sales",
    action: "Call / meeting / closing",
    width: "w-[52%]",
  },
];

const leadSources: {
  num: string;
  title: string;
  tag: string;
}[] = [
  {
    num: "01",
    title: "Google Search",
    tag: "high intent",
  },
  {
    num: "02",
    title: "Meta edukációs videó + edukációs content + vágykeltő vizuális irány",
    tag: "low-cost awareness",
  },
  {
    num: "03",
    title: "ROI calculator",
    tag: "high conversion tool",
  },
];

const buyerMotivations = [
  "biztonságos befektetést",
  "passzív jövedelmet",
  "egzotikus diverzifikációt",
  "lifestyle upgrade-et",
];

function ProcessTab() {
  return (
    <div role="tabpanel">
      {/* Block 01 — Funnel */}
      <section className="mb-24">
        <div className="flex items-baseline gap-5 mb-10 pb-5 border-b border-neutral-200">
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
            01
          </span>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Lead funnel
          </h2>
        </div>

        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-neutral-500 mb-10">
          {">"} cold → sales · 5 stages
        </p>

        <div className="flex flex-col items-center">
          {funnelStages.map((s, i) => (
            <div key={s.stage} className={`${s.width} max-w-2xl`}>
              <div className="rounded-xl bg-neutral-950 text-white px-6 py-5 md:px-8 md:py-6 shadow-[0_12px_30px_-15px_rgba(0,0,0,0.35)] transition-transform hover:-translate-y-0.5">
                <div className="flex items-center justify-between gap-4">
                  <div className="min-w-0">
                    <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent mb-1.5">
                      stage 0{i + 1}
                    </div>
                    <div className="text-lg md:text-xl font-semibold tracking-tight uppercase">
                      {s.stage}
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/40 mb-1.5">
                      action
                    </div>
                    <div className="text-sm md:text-base text-white/90 font-medium">
                      {s.action}
                    </div>
                  </div>
                </div>
              </div>

              {i < funnelStages.length - 1 && (
                <div
                  aria-hidden
                  className="flex flex-col items-center py-3"
                >
                  <div className="w-px h-5 bg-gradient-to-b from-neutral-300 to-neutral-400" />
                  <div className="text-neutral-400 text-xs leading-none">▼</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Block 02 — Top lead sources */}
      <section className="mb-24">
        <div className="flex items-baseline gap-5 mb-10 pb-5 border-b border-neutral-200">
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
            02
          </span>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            A három legerősebb lead source
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {leadSources.map((src) => (
            <article
              key={src.num}
              className="rounded-xl bg-neutral-950 text-white p-7 md:p-8 transition-all hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.35)] flex flex-col"
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent mb-4">
                {src.num}
              </div>
              <h3 className="text-lg md:text-xl font-semibold tracking-tight leading-snug mb-4 flex-1">
                {src.title}
              </h3>
              <div className="inline-flex items-center gap-2 self-start rounded-full border border-white/15 bg-white/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-white/80">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                {src.tag}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Block 03 — Strategic reality */}
      <section>
        <div className="flex items-baseline gap-5 mb-10 pb-5 border-b border-neutral-200">
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
            03
          </span>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Stratégiai valóság
          </h2>
        </div>

        <div className="relative rounded-2xl bg-neutral-950 text-white p-8 md:p-12 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.4)] overflow-hidden">
          {/* Accent bar */}
          <div
            aria-hidden
            className="absolute left-0 top-0 bottom-0 w-1 bg-accent"
          />

          <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-accent mb-6">
            {">"} strategic_reality
          </div>

          <p className="text-2xl md:text-3xl font-semibold tracking-tight leading-[1.25] mb-8">
            Az emberek{" "}
            <span className="text-white/40 line-through decoration-2">
              nem villát
            </span>{" "}
            keresnek, hanem:
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
            {buyerMotivations.map((m, i) => (
              <li
                key={m}
                className="flex items-start gap-3 rounded-lg bg-white/[0.04] border border-white/10 px-5 py-4"
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent shrink-0 mt-0.5">
                  0{i + 1}
                </span>
                <span className="text-base md:text-lg font-medium text-white/95">
                  {m}
                </span>
              </li>
            ))}
          </ul>

          <p className="text-base md:text-lg text-white/80 leading-relaxed border-t border-white/10 pt-6">
            És az{" "}
            <strong className="text-white">
              egész marketingnek ezt kell kommunikálnia
            </strong>
            .
          </p>
        </div>
      </section>
    </div>
  );
}

function MarketingTab() {
  return (
    <div role="tabpanel">
      {/* Block — Marketing strategy */}
      <section className="mb-24">
        <div className="flex items-baseline gap-5 mb-10 pb-5 border-b border-neutral-200">
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
            01
          </span>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Marketing & lead generation
          </h2>
        </div>

        <div className="max-w-3xl space-y-6 text-[15px] md:text-base leading-[1.75] text-neutral-700">
          <p>
            A projekt marketingjének elsődleges célja nem pusztán az apartmanok
            hirdetése, hanem egy olyan{" "}
            <strong className="text-neutral-950">
              prémium életstílus- és befektetési koncepció
            </strong>{" "}
            felépítése, amely erős vágyat, bizalmat és hosszú távú értékérzetet
            alakít ki a potenciális vásárlókban. A Koh Samui Villa Resort
            kommunikációjának egyszerre kell megjelenítenie a trópusi
            lifestyle élményt, a longevity szemléletet, az európai minőséget és
            a biztonságos befektetési modellt. A cél egy olyan prémium
            márkapozíció kialakítása, amely jelentősen kiemeli a projektet a
            hagyományos thaiföldi ingatlanfejlesztések közül.
          </p>

          <p>
            A marketingstratégia egyik legfontosabb feladata, hogy{" "}
            <strong className="text-neutral-950">
              edukálja a célközönséget
            </strong>{" "}
            a Koh Samui-i ingatlanpiacról, a projekt működési modelljéről,
            valamint a hozam- és visszavásárlási konstrukció előnyeiről. Mivel
            a célpiac jelentős része korábban nem vásárolt külföldi ingatlant,
            különösen fontos a{" "}
            <strong className="text-neutral-950">bizalomépítés</strong>, az
            átlátható kommunikáció és a jogi sajátosságok korrekt bemutatása.
          </p>

          <p>
            A lead generation célja egy magas minőségű, kvalifikált érdeklődői
            adatbázis felépítése{" "}
            <span className="inline-flex items-center gap-1 rounded bg-neutral-950 px-1.5 py-0.5 text-white text-[13px] font-medium">
              Magyarországon és a DACH régióban
            </span>
            , elsősorban olyan vásárlók elérésével, akik nyitottak prémium
            lifestyle-befektetésekre, második otthon vásárlására vagy hosszú
            távú értékmegőrző befektetésekre. A kampányok célja{" "}
            <strong className="text-neutral-950">
              nem tömeges érdeklődés generálása
            </strong>
            , hanem olyan potenciális ügyfelek megszólítása, akik pénzügyileg
            alkalmasak a vásárlásra, és valódi érdeklődést mutatnak a projekt
            iránt.
          </p>

          <p>
            A lead funnel végső célja, hogy a digitális marketingcsatornákon
            keresztül folyamatosan érkezzenek kvalifikált érdeklődők, akik
            edukációs és bizalomépítő tartalmakon keresztül fokozatosan
            közelebb kerülnek a személyes konzultációhoz, majd a vásárlási
            döntéshez. A projekt üzleti célja, hogy a direct sales csatornákra
            építve{" "}
            <span className="inline-flex items-center gap-1 rounded bg-neutral-950 px-1.5 py-0.5 text-white text-[13px] font-medium">
              3–6 hónapon belül
            </span>{" "}
            értékesítésre kerüljön mind a{" "}
            <strong className="text-neutral-950">69 apartman</strong>.
          </p>
        </div>

        {/* Marketing focus callout */}
        <div className="mt-12 rounded-xl bg-neutral-950 text-white p-8 md:p-10 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.25)]">
          <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent mb-6">
            {">"} marketing_focus
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-lg overflow-hidden">
            {[
              { k: "Piac", v: "HU + DACH" },
              { k: "Funnel", v: "Kvalifikált" },
              { k: "Csatorna", v: "Direct" },
              { k: "Timeline", v: "3–6 hó" },
            ].map((s) => (
              <div key={s.k} className="bg-neutral-950 p-5">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/50 mb-2">
                  {s.k}
                </div>
                <div className="text-xl md:text-2xl font-semibold tracking-tight">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic pillars */}
      <section>
        <div className="flex items-baseline gap-5 mb-10 pb-5 border-b border-neutral-200">
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
            02
          </span>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Stratégiai pillérek
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {[
            {
              tag: "positioning",
              title: "Prémium márkapozíció",
              body: "Lifestyle + befektetés egyben — kiemelkedés a hagyományos thaiföldi ingatlanfejlesztések közül.",
            },
            {
              tag: "education",
              title: "Edukáció & bizalom",
              body: "Piaci kontextus, működési modell, jogi keret — átlátható tartalmakkal.",
            },
            {
              tag: "targeting",
              title: "Kvalifikált lead generation",
              body: "HU + DACH régió. Pénzügyileg alkalmas, valódi érdeklődést mutató ügyfelek.",
            },
            {
              tag: "conversion",
              title: "Funnel → konzultáció → vásárlás",
              body: "Edukációs tartalom → kvalifikáció → személyes konzultáció → szerződés.",
            },
          ].map((p, i) => (
            <article
              key={p.title}
              className="rounded-xl bg-neutral-950 text-white p-7 md:p-8 transition-all hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.35)]"
            >
              <div className="flex items-center justify-between mb-5">
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent">
                  0{i + 1}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/40">
                  {p.tag}
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold tracking-tight mb-3">
                {p.title}
              </h3>
              <p className="text-[14px] text-white/80 leading-[1.65]">
                {p.body}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
