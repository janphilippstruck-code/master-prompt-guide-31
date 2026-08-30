import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import logoAsset from "@/assets/logo.asset.json";
import heroAsset from "@/assets/hero.asset.json";
import karteAsset from "@/assets/karte.asset.json";
import basecampAsset from "@/assets/basecamp.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hammer Backyard Ultra 2027 | Selbachpark Hamm" },
      {
        name: "description",
        content:
          "Der Hammer Backyard Ultra kommt nach Hamm. 6,706 Kilometer. Jede Stunde eine neue Runde. Start am 17. April 2027 im Selbachpark.",
      },
      { property: "og:title", content: "Hammer Backyard Ultra" },
      {
        property: "og:description",
        content: "Jede Stunde schlägt die Glocke. 17. April 2027 · Selbachpark Hamm.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

/* ---------- Scroll-Reveal (sehr dezent) ---------- */
function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

/* ---------- Header ---------- */
function Header() {
  const [open, setOpen] = useState(false);
  const nav = [
    { label: "EVENT", id: "prinzip" },
    { label: "STRECKE", id: "strecke" },
    { label: "BASECAMP", id: "basecamp" },
    { label: "FAQ", id: "faq" },
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-3"
          aria-label="Zum Seitenanfang"
        >
          <img src={logoAsset.url} alt="Hammer Backyard Ultra Logo" className="h-9 w-auto rounded-sm" />
        </button>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <button
              key={n.id}
              onClick={() => scrollToId(n.id)}
              className="font-display text-sm font-semibold tracking-[0.18em] text-foreground/80 transition-colors hover:text-accent"
            >
              {n.label}
            </button>
          ))}
          <button
            onClick={() => scrollToId("anmeldung")}
            className="font-display rounded-md border border-accent px-5 py-2.5 text-sm font-semibold tracking-[0.18em] text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            ANMELDUNG FOLGT
          </button>
        </nav>

        <button
          className="flex h-11 w-11 items-center justify-center md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menü öffnen"
          aria-expanded={open}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-4 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {nav.map((n) => (
              <button
                key={n.id}
                onClick={() => {
                  setOpen(false);
                  scrollToId(n.id);
                }}
                className="font-display rounded-md px-3 py-3 text-left text-base font-semibold tracking-[0.18em] text-foreground/80"
              >
                {n.label}
              </button>
            ))}
            <button
              onClick={() => {
                setOpen(false);
                scrollToId("anmeldung");
              }}
              className="font-display mt-2 rounded-md border border-accent px-3 py-3 text-center text-base font-semibold tracking-[0.18em] text-accent"
            >
              ANMELDUNG FOLGT
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section className="relative flex min-h-[85svh] items-end overflow-hidden md:min-h-[92svh]">
      <img
        src={heroAsset.url}
        alt="Grüner Weg am Wasser im Selbachpark Hamm – die Runde des Hammer Backyard Ultra"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Subtiler dunkler Verlauf für Lesbarkeit */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/35 to-ink/10" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6 md:pb-24">
        <p className="font-display text-xs font-semibold tracking-[0.3em] text-gold sm:text-sm">
          17. APRIL 2027 · SELBACHPARK HAMM
        </p>
        <h1 className="font-display mt-4 text-4xl font-bold uppercase leading-[1.02] text-ink-foreground sm:text-6xl md:text-7xl">
          Jede Stunde
          <br />
          schlägt die Glocke.
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-foreground/85 sm:text-lg">
          6,706 Kilometer. Eine Stunde. Immer wieder.
          <br />
          Am 17. April 2027 im Selbachpark Hamm.
        </p>
        <div className="mt-8">
          <button
            onClick={() => scrollToId("prinzip")}
            className="font-display inline-flex min-h-12 items-center rounded-md border border-gold px-7 py-3 text-sm font-semibold tracking-[0.2em] text-gold transition-colors hover:bg-gold hover:text-gold-foreground"
          >
            BACKYARD ENTDECKEN
          </button>
        </div>
        <p className="mt-6 text-xs tracking-[0.15em] text-ink-foreground/60">
          START · SAMSTAG · 10:00 UHR · OPEN END
        </p>
      </div>
    </section>
  );
}

/* ---------- Eckdaten ---------- */
function Eckdaten() {
  const facts = [
    { value: "17. APRIL 2027", label: "DATUM" },
    { value: "10:00 UHR", label: "START" },
    { value: "6,706 KM", label: "JEDE RUNDE" },
    { value: "60 MINUTEN", label: "ZEIT PRO RUNDE" },
    { value: "OPEN END", label: "FORMAT" },
    { value: "SELBACHPARK", label: "HAMM" },
  ];
  return (
    <section className="border-y border-border bg-card texture-paper">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-4 gap-y-8 px-4 py-10 sm:grid-cols-3 sm:px-6 md:grid-cols-6 md:py-12">
        {facts.map((f) => (
          <div key={f.label} className="reveal text-center md:text-left">
            <p className="font-display text-lg font-bold uppercase leading-tight sm:text-xl">{f.value}</p>
            <p className="mt-1 text-[11px] font-semibold tracking-[0.25em] text-muted-foreground">{f.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- Backyard-Prinzip ---------- */
function Prinzip() {
  const steps = ["GLOCKE", "6,706 KM", "ZURÜCK INS BASECAMP", "PAUSE", "NÄCHSTE GLOCKE"];
  return (
    <section id="prinzip" className="scroll-mt-20 bg-ink text-ink-foreground texture-paper-dark">
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 md:py-28">
        <p className="reveal font-display text-xs font-semibold tracking-[0.3em] text-gold">
          SO FUNKTIONIERT'S
        </p>
        <h2 className="reveal font-display mt-4 text-3xl font-bold uppercase leading-[1.05] sm:text-5xl">
          Eine Runde.
          <br />
          Eine Stunde.
          <br />
          Immer wieder.
        </h2>
        <div className="reveal mt-8 space-y-4 text-base leading-relaxed text-ink-foreground/80 sm:text-lg">
          <p>Bei einem Backyard Ultra startet jede Stunde eine neue Runde über 6,706 Kilometer.</p>
          <p>Wer rechtzeitig zurück ist, darf pausieren.</p>
          <p>Wer zur nächsten vollen Stunde wieder an der Startlinie steht, läuft weiter.</p>
          <p>Wer nicht rechtzeitig zurückkommt oder nicht mehr antritt, scheidet aus.</p>
          <p className="text-ink-foreground">
            Gewonnen hat am Ende nur, wer als Letzter noch eine weitere Runde erfolgreich absolvieren kann.
          </p>
        </div>

        <div className="reveal mt-12 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          {steps.map((s, i) => (
            <div key={s} className="flex items-center gap-3">
              <span className="font-display rounded-md border border-gold/50 px-3 py-2 text-xs font-semibold tracking-[0.15em] text-gold">
                {s}
              </span>
              {i < steps.length - 1 && (
                <span className="hidden text-gold/60 sm:inline" aria-hidden>
                  →
                </span>
              )}
              {i < steps.length - 1 && (
                <span className="text-gold/60 sm:hidden" aria-hidden>
                  ↓
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Strecke ---------- */
function Strecke() {
  return (
    <section id="strecke" className="scroll-mt-20 bg-background texture-paper">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
        <div className="grid items-start gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <p className="reveal font-display text-xs font-semibold tracking-[0.3em] text-accent">DIE RUNDE</p>
            <h2 className="reveal font-display mt-4 text-3xl font-bold uppercase leading-[1.05] sm:text-4xl md:text-5xl">
              Eine Runde,
              <br />
              die nie ganz
              <br />
              gleich bleibt.
            </h2>
            <div className="reveal mt-6 space-y-4 text-base leading-relaxed text-foreground/80 sm:text-lg">
              <p>
                Die Runde im und rund um den Selbachpark verbindet gut laufbare Wege, offene Abschnitte und
                grüne Parkpassagen.
              </p>
              <p>
                Flach genug für viele Stunden.
                <br />
                Abwechslungsreich genug für viele Runden.
              </p>
            </div>
          </div>

          <figure className="reveal">
            <div className="overflow-hidden rounded-lg border border-border bg-card shadow-sm">
              <img
                src={karteAsset.url}
                alt="Vorläufige Streckenkarte der Backyard-Runde im Selbachpark Hamm"
                className="w-full object-cover"
                loading="lazy"
              />
            </div>
            <figcaption className="mt-3 text-center text-xs tracking-wide text-muted-foreground">
              Vorläufige Streckenführung · finale Vermessung vorbehalten
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

/* ---------- Basecamp ---------- */
function Basecamp() {
  const points = [
    "START & ZIEL AN EINEM ORT",
    "PLATZ FÜR CREW & ERHOLUNG",
    "ECHTE BACKYARD-ATMOSPHÄRE",
  ];
  return (
    <section id="basecamp" className="scroll-mt-20 border-y border-border bg-cream texture-paper">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 sm:px-6 md:grid-cols-2 md:gap-16 md:py-28">
        <div className="reveal order-1 overflow-hidden rounded-lg border border-border shadow-sm md:order-none">
          <img
            src={basecampAsset.url}
            alt="Grünfläche mit Bäumen im geplanten Basecamp-Bereich des Selbachparks"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
        <div>
          <p className="reveal font-display text-xs font-semibold tracking-[0.3em] text-accent">
            ZWISCHEN DEN RUNDEN
          </p>
          <h2 className="reveal font-display mt-4 text-3xl font-bold uppercase leading-[1.05] sm:text-4xl md:text-5xl">
            Dein Platz
            <br />
            zwischen
            <br />
            den Runden.
          </h2>
          <div className="reveal mt-6 space-y-3 text-base leading-relaxed text-foreground/80 sm:text-lg">
            <p>
              Zurückkommen. Durchatmen. Essen. Schuhe wechseln. Hinsetzen.
            </p>
            <p>Und zur nächsten vollen Stunde wieder aufstehen.</p>
            <p>
              Im Basecamp im Selbachpark kommen Läufer, Crews, Start und Ziel immer wieder zusammen.
            </p>
          </div>
          <ul className="reveal mt-8 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-center gap-3">
                <span className="h-px w-6 bg-accent" aria-hidden />
                <span className="font-display text-sm font-semibold tracking-[0.15em]">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------- Atmosphärischer Trenner ---------- */
function Trenner() {
  return (
    <section className="bg-ink py-24 text-center text-ink-foreground texture-paper-dark md:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="reveal mx-auto mb-8 flex items-center justify-center gap-4" aria-hidden>
          <span className="h-px w-12 bg-gold/70" />
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="text-gold">
            <path d="M12 3a6 6 0 0 0-6 6c0 4-1.5 6-2.5 7h17C19.5 15 18 13 18 9a6 6 0 0 0-6-6Z" />
            <path d="M10 19a2 2 0 0 0 4 0" />
          </svg>
          <span className="h-px w-12 bg-gold/70" />
        </div>
        <h2 className="reveal font-display text-3xl font-bold uppercase leading-[1.1] sm:text-5xl md:text-6xl">
          Die ersten Runden
          <br />
          läufst du mit den Beinen.
          <br />
          <span className="text-gold">Die späteren</span>
          <br />
          <span className="text-gold">mit dem Kopf.</span>
        </h2>
        <p className="reveal mt-8 text-sm tracking-wide text-ink-foreground/60 sm:text-base">
          Und irgendwann nur noch bis zur nächsten Glocke.
        </p>
      </div>
    </section>
  );
}

/* ---------- Zielgruppe ---------- */
function Zielgruppe() {
  return (
    <section className="bg-background texture-paper">
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 md:py-28">
        <h2 className="reveal font-display text-3xl font-bold uppercase leading-[1.05] sm:text-4xl md:text-5xl">
          Dein erster Backyard?
          <br />
          Dein nächster?
          <br />
          Völlig egal.
        </h2>
        <div className="reveal mt-8 space-y-4 text-base leading-relaxed text-foreground/80 sm:text-lg">
          <p>Du musst kein Backyard-Veteran sein, um hier zu starten.</p>
          <p>Vielleicht willst du einfach wissen, wie viele Runden du schaffen kannst.</p>
          <p>Vielleicht jagst du eine neue persönliche Distanz.</p>
          <p>
            Vielleicht willst du nur erleben, was passiert, wenn aus „noch eine Runde“ irgendwann eine ganze
            Nacht wird.
          </p>
          <p className="text-foreground">
            Der Hammer Backyard Ultra beginnt für alle gleich: mit der ersten Glocke.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
const FAQ_ITEMS = [
  {
    q: "Wann findet der Hammer Backyard Ultra statt?",
    a: "Am Samstag, 17. April 2027. Der erste Start erfolgt um 10:00 Uhr.",
  },
  {
    q: "Wo findet die Veranstaltung statt?",
    a: "Im Selbachpark in Hamm.",
  },
  {
    q: "Wie lang ist eine Runde?",
    a: "Eine Backyard-Runde beträgt 6,706 Kilometer.",
  },
  {
    q: "Wie viel Zeit habe ich pro Runde?",
    a: "60 Minuten. Jede volle Stunde beginnt eine neue Runde.",
  },
  {
    q: "Wie lange dauert der Lauf?",
    a: "So lange, bis nur noch ein Läufer beziehungsweise eine Läuferin übrig ist und die erforderliche letzte Runde erfolgreich absolviert.",
  },
  {
    q: "Wann öffnet die Anmeldung?",
    a: "Die Anmeldung ist noch nicht geöffnet. Weitere Informationen folgen.",
  },
  {
    q: "Wann gibt es Informationen zu Basecamp, Verpflegung und Reglement?",
    a: "Alle ausführlichen Teilnehmerinformationen werden rechtzeitig vor der Veranstaltung veröffentlicht.",
  },
];

function Faq() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <section id="faq" className="scroll-mt-20 border-t border-border bg-card texture-paper">
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 md:py-28">
        <p className="reveal font-display text-xs font-semibold tracking-[0.3em] text-accent">FAQ</p>
        <h2 className="reveal font-display mt-4 text-3xl font-bold uppercase sm:text-4xl">
          Fragen & Antworten
        </h2>
        <div className="reveal mt-10 divide-y divide-border rounded-lg border border-border bg-background">
          {FAQ_ITEMS.map((item, i) => {
            const open = openIdx === i;
            return (
              <div key={item.q}>
                <button
                  onClick={() => setOpenIdx(open ? null : i)}
                  className="flex min-h-14 w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={open}
                >
                  <span className="font-display text-sm font-semibold uppercase tracking-[0.08em] sm:text-base">
                    {item.q}
                  </span>
                  <span
                    className={`shrink-0 text-accent transition-transform duration-200 ${open ? "rotate-45" : ""}`}
                    aria-hidden
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </button>
                {open && (
                  <p className="px-5 pb-5 text-sm leading-relaxed text-foreground/75 sm:text-base">{item.a}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- Finaler CTA ---------- */
function FinalCta() {
  return (
    <section id="anmeldung" className="scroll-mt-20 bg-ink py-24 text-center text-ink-foreground texture-paper-dark md:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <svg
          width="34"
          height="34"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          className="reveal mx-auto text-gold"
          aria-hidden
        >
          <path d="M12 3a6 6 0 0 0-6 6c0 4-1.5 6-2.5 7h17C19.5 15 18 13 18 9a6 6 0 0 0-6-6Z" />
          <path d="M10 19a2 2 0 0 0 4 0" />
        </svg>
        <h2 className="reveal font-display mt-8 text-3xl font-bold uppercase leading-[1.05] sm:text-5xl md:text-6xl">
          Wie oft stehst du
          <br />
          wieder an der
          <br />
          Startlinie?
        </h2>
        <p className="reveal font-display mt-8 text-sm font-semibold tracking-[0.25em] text-gold">
          HAMMER BACKYARD ULTRA
        </p>
        <p className="reveal mt-3 text-sm tracking-[0.12em] text-ink-foreground/70">
          17. APRIL 2027 · SELBACHPARK HAMM
        </p>
        <div className="reveal mt-10">
          <span className="font-display inline-flex min-h-12 cursor-default items-center rounded-md border border-gold px-8 py-3 text-sm font-semibold tracking-[0.2em] text-gold">
            ANMELDUNG FOLGT
          </span>
        </div>
        <p className="reveal mt-6 text-xs text-ink-foreground/50">Weitere Informationen folgen in Kürze.</p>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-ink-foreground/10 bg-ink py-10 text-ink-foreground texture-paper-dark">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 text-center sm:px-6 md:flex-row md:justify-between md:text-left">
        <div>
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em]">Hammer Backyard Ultra</p>
          <p className="mt-2 text-xs text-ink-foreground/50">Eine Veranstaltung aus dem Ballonläufer-Umfeld.</p>
        </div>
        <div className="flex flex-col items-center gap-3 md:items-end">
          <div className="flex gap-6">
            <a href="#impressum" className="font-display text-xs font-semibold tracking-[0.2em] text-ink-foreground/70 transition-colors hover:text-gold">
              IMPRESSUM
            </a>
            <a href="#datenschutz" className="font-display text-xs font-semibold tracking-[0.2em] text-ink-foreground/70 transition-colors hover:text-gold">
              DATENSCHUTZ
            </a>
          </div>
          <p className="text-xs text-ink-foreground/40">© {year} Hammer Backyard Ultra</p>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Seite ---------- */
function Index() {
  useReveal();
  return (
    <main>
      <Header />
      <Hero />
      <Eckdaten />
      <Prinzip />
      <Strecke />
      <Basecamp />
      <Trenner />
      <Zielgruppe />
      <Faq />
      <FinalCta />
      <Footer />
    </main>
  );
}
