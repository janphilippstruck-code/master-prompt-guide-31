import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import logoAsset from "@/assets/logo-transparent.asset.json";
import glockeAsset from "@/assets/glocke.asset.json";
import heroAsset from "@/assets/hero.asset.json";
import karteAsset from "@/assets/karte.asset.json";
import basecampAsset from "@/assets/basecamp.asset.json";

const OG_IMAGE = `https://cozy-instruction-api.lovable.app${heroAsset.url}`;

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
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: OG_IMAGE },
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
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6 md:h-24">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center"
          aria-label="Zum Seitenanfang"
        >
          <img
            src={logoAsset.url}
            alt="Hammer Backyard Ultra Logo"
            className="h-14 w-auto md:h-[68px]"
          />
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
    <section className="relative flex min-h-[80svh] items-end overflow-hidden md:min-h-[92svh]">
      <img
        src={heroAsset.url}
        alt="Grüner Weg am Wasser im Selbachpark Hamm – die Runde des Hammer Backyard Ultra"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Subtiler dunkler Verlauf für Lesbarkeit */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/92 via-ink/55 to-ink/20" />
      <div className="absolute inset-0 bg-ink/20 md:bg-ink/10" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-14 sm:px-6 md:pb-24">
        <p
          className="font-display text-xs font-bold tracking-[0.3em] text-[#e0b458] sm:text-sm"
          style={{ textShadow: "0 2px 10px rgba(0,0,0,0.75)" }}
        >
          17. APRIL 2027 · SELBACHPARK HAMM
        </p>
        <h1 className="font-display mt-4 text-4xl font-bold uppercase leading-[1.14] text-ink-foreground sm:text-6xl sm:leading-[1.07] md:text-7xl">
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
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-4 gap-y-7 px-4 py-9 sm:grid-cols-3 sm:px-6 md:grid-cols-6 md:py-12">
        {facts.map((f) => (
          <div key={f.label} className="reveal text-center md:text-left">
            <p className="font-display text-base font-bold uppercase leading-[1.2] sm:text-xl">{f.value}</p>
            <p className="mt-1 text-[11px] font-semibold tracking-[0.25em] text-muted-foreground">{f.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- Backyard-Prinzip ---------- */
function Prinzip() {
  return (
    <section id="prinzip" className="scroll-mt-24 bg-ink text-ink-foreground texture-paper-dark">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-28">
        <p className="reveal font-display text-xs font-semibold tracking-[0.3em] text-gold">
          SO FUNKTIONIERT'S
        </p>
        <h2 className="reveal font-display mt-4 text-3xl font-bold uppercase leading-[1.14] sm:text-5xl sm:leading-[1.08]">
          Eine Runde.
          <br />
          Eine Stunde.
          <br />
          Immer wieder.
        </h2>
        <div className="reveal mt-7 space-y-4 text-base leading-relaxed text-ink-foreground/80 sm:text-lg">
          <p>Bei einem Backyard Ultra startet jede Stunde eine neue Runde über 6,706 Kilometer.</p>
          <p>Wer rechtzeitig zurück ist, darf pausieren.</p>
          <p>Wer zur nächsten vollen Stunde wieder an der Startlinie steht, läuft weiter.</p>
          <p>Wer nicht rechtzeitig zurückkommt oder nicht mehr antritt, scheidet aus.</p>
          <p className="text-ink-foreground">
            Gewonnen hat am Ende nur, wer als Letzter noch eine weitere Runde erfolgreich absolvieren kann.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------- Strecke ---------- */
function Strecke() {
  return (
    <section id="strecke" className="scroll-mt-24 bg-background texture-paper">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-28">
        <div className="grid items-start gap-9 md:grid-cols-2 md:gap-16">
          <div>
            <p className="reveal font-display text-xs font-semibold tracking-[0.3em] text-accent">STRECKE</p>
            <h2 className="reveal font-display mt-4 text-3xl font-bold uppercase leading-[1.14] sm:text-4xl sm:leading-[1.08] md:text-5xl">
              6,706 Kilometer,
              <br />
              die du bald
              <br />
              auswendig kennst.
            </h2>
            <div className="reveal mt-6 space-y-4 text-base leading-relaxed text-foreground/80 sm:text-lg">
              <p>
                Die Runde im und rund um den Selbachpark verbindet gut laufbare Wege, offene Abschnitte und
                grüne Parkpassagen.
              </p>
              <p>
                Flach und gut laufbar.
                <br />
                Aber weit entfernt von monoton.
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
    <section id="basecamp" className="scroll-mt-24 border-y border-border bg-cream texture-paper">
      <div className="mx-auto grid max-w-6xl items-center gap-9 px-4 py-16 sm:px-6 md:grid-cols-2 md:gap-16 md:py-28">
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
            BASECAMP
          </p>
          <h2 className="reveal font-display mt-4 text-3xl font-bold uppercase leading-[1.14] sm:text-4xl sm:leading-[1.08] md:text-5xl">
            Dein Platz
            <br />
            zwischen
            <br />
            den Runden.
          </h2>
          <div className="reveal mt-6 space-y-3 text-base leading-relaxed text-foreground/80 sm:text-lg">
            <p>Zurückkommen. Durchatmen. Essen. Schuhe wechseln. Hinsetzen.</p>
            <p>Und zur nächsten vollen Stunde wieder aufstehen.</p>
            <p>
              Im Basecamp im Selbachpark kommen Läufer, Crews, Start und Ziel immer wieder zusammen.
            </p>
          </div>
          <ul className="reveal mt-7 space-y-3">
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
    <section className="bg-ink py-16 text-center text-ink-foreground texture-paper-dark md:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="reveal mx-auto mb-8 flex items-center justify-center gap-5">
          <span className="h-px w-10 bg-gold/70 sm:w-16" aria-hidden />
          <img
            src={glockeAsset.url}
            alt="Glocke und Hammer – Bildmarke des Hammer Backyard Ultra"
            className="h-[88px] w-auto md:h-[120px]"
            loading="lazy"
          />
          <span className="h-px w-10 bg-gold/70 sm:w-16" aria-hidden />
        </div>
        <h2 className="font-display reveal text-3xl font-bold uppercase leading-[1.15] sm:text-5xl sm:leading-[1.08] md:text-6xl">
          Die ersten Runden
          <br />
          läufst du mit den Beinen.
          <br />
          <span className="text-gold">Die späteren</span>
          <br />
          <span className="text-gold">mit dem Kopf.</span>
        </h2>
        <p className="reveal mt-7 text-sm tracking-wide text-ink-foreground/60 sm:text-base">
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
      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 md:py-24">
        <h2 className="reveal font-display text-3xl font-bold uppercase leading-[1.15] sm:text-4xl sm:leading-[1.08] md:text-5xl">
          Dein erster Backyard?
          <br />
          Dein nächster?
          <br />
          Völlig egal.
        </h2>
        <div className="reveal mt-7 space-y-4 text-base leading-relaxed text-foreground/80 sm:text-lg">
          <p>Du musst kein Backyard-Veteran sein, um hier zu starten.</p>
          <p>
            Vielleicht willst du einfach wissen, wie viele Runden du schaffen kannst.
            <br />
            Vielleicht jagst du eine neue persönliche Distanz.
            <br />
            Vielleicht willst du erleben, was passiert, wenn aus „noch eine Runde“ irgendwann eine ganze
            Nacht wird.
          </p>
          <p className="text-foreground">
            Der Hammer Backyard Ultra beginnt für alle gleich:
            <br />
            mit der ersten Glocke.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
const FAQ_ITEMS = [
  {
    q: "Wann öffnet die Anmeldung und was kostet der Start?",
    a: "Die Anmeldung öffnet in Kürze. Die ersten 30 Startplätze gibt es zum Early-Bird-Preis von 59 €, anschließend beträgt das reguläre Startgeld 69 €.",
  },
  {
    q: "Wie viele Startplätze gibt es?",
    a: "Für den Hammer Backyard Ultra sind aktuell bis zu 150 Startplätze vorgesehen.",
  },
  {
    q: "Kann mich eine eigene Crew unterstützen?",
    a: "Ja. Eine eigene Crew gehört zum Backyard dazu und kann dich im Basecamp zwischen den Runden unterstützen, verpflegen und wieder auf die nächste Runde vorbereiten. Auf der Strecke selbst gelten die Backyard-Regeln.",
  },
  {
    q: "Wie sieht das Basecamp aus – und kann ich einen Pavillon oder ein Zelt mitbringen?",
    a: "Das Basecamp liegt direkt im Selbachpark und bietet ausreichend Platz für Läufer und Crews. Pavillons und Zelte mittlerer Größe sind ausdrücklich vorgesehen, sodass du dir für die Pausen deinen eigenen kleinen Rückzugs- und Versorgungsbereich einrichten kannst.",
  },
  {
    q: "Welche Verpflegung stellt der Veranstalter?",
    a: "Im Basecamp wird es eine grundlegende Veranstalter-Verpflegung geben. Der Hammer Backyard Ultra ist jedoch bewusst nicht als Rundum-Vollversorgung ausgelegt. Gerade wenn du viele Stunden unterwegs sein möchtest, solltest du deine bevorzugten Lebensmittel und Getränke zusätzlich selbst beziehungsweise über deine Crew mitbringen.",
  },
  {
    q: "Gibt es Strom, Toiletten und Duschen?",
    a: "Eine entsprechende Infrastruktur mit Stromversorgung und sanitären Möglichkeiten ist für das Basecamp vorgesehen. Auch Duschmöglichkeiten sind Teil der aktuellen Planung. Die genauen Details und verfügbaren Anschlüsse veröffentlichen wir mit den ausführlichen Teilnehmerinformationen.",
  },
  {
    q: "Wie sieht es mit Parken, Vans und Wohnmobilen aus?",
    a: "Ein großer Parkplatz befindet sich unmittelbar neben dem Basecamp. Damit bleiben die Wege zwischen Fahrzeug, Crewplatz und Startbereich angenehm kurz. Auch für Vans und Wohnmobile sind Parkmöglichkeiten im direkten Veranstaltungsumfeld vorgesehen. Die genaue Flächenaufteilung und Zufahrt geben wir vor dem Event bekannt.",
  },
  {
    q: "Was brauche ich, wenn ich bis in die Nacht laufe?",
    a: "Spätestens mit Einbruch der Dunkelheit benötigst du eine geeignete Stirnlampe. Weitere Vorgaben zur Sichtbarkeit und möglichen Pflichtausrüstung für die Nacht werden im finalen Reglement veröffentlicht.",
  },
  {
    q: "Was passiert, wenn ich nicht mehr zur nächsten Runde antrete?",
    a: "Dann ist dein Backyard beendet und du wirst als DNF – Did Not Finish – gewertet. Klingt erstmal hart, gehört beim Backyard aber praktisch zum Konzept: Irgendwann holt sich fast jeder sein DNF ab. Bis dahin zählen natürlich alle von dir erfolgreich absolvierten Runden.",
  },
  {
    q: "Gibt es eine Medaille?",
    a: "Ja. Eine Medaille für die Teilnehmer des Hammer Backyard Ultra ist vorgesehen. Wie sie aussehen wird, verraten wir natürlich noch nicht.",
  },
];

function Faq() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <section id="faq" className="scroll-mt-24 border-t border-border bg-card texture-paper">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-28">
        <p className="reveal font-display text-xs font-semibold tracking-[0.3em] text-accent">FAQ</p>
        <h2 className="reveal font-display mt-4 text-3xl font-bold uppercase leading-[1.15] sm:text-4xl sm:leading-[1.08]">
          Fragen &amp; Antworten
        </h2>
        <div className="reveal mt-9 divide-y divide-border rounded-lg border border-border bg-background">
          {FAQ_ITEMS.map((item, i) => {
            const open = openIdx === i;
            return (
              <div key={item.q}>
                <button
                  onClick={() => setOpenIdx(open ? null : i)}
                  className="flex min-h-14 w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={open}
                >
                  <span className="font-display text-sm font-semibold uppercase leading-[1.3] tracking-[0.08em] sm:text-base">
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
    <section id="anmeldung" className="scroll-mt-24 bg-ink py-16 text-center text-ink-foreground texture-paper-dark md:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <img
          src={glockeAsset.url}
          alt="Glocke und Hammer – Bildmarke des Hammer Backyard Ultra"
          className="reveal mx-auto h-16 w-auto md:h-20"
          loading="lazy"
        />
        <h2 className="reveal font-display mt-8 text-3xl font-bold uppercase leading-[1.15] sm:text-5xl sm:leading-[1.08] md:text-6xl">
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
        <div className="reveal mt-9">
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
            <Link
              to="/impressum"
              className="font-display text-xs font-semibold tracking-[0.2em] text-ink-foreground/70 transition-colors hover:text-gold"
            >
              IMPRESSUM
            </Link>
            <Link
              to="/datenschutz"
              className="font-display text-xs font-semibold tracking-[0.2em] text-ink-foreground/70 transition-colors hover:text-gold"
            >
              DATENSCHUTZ
            </Link>
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
