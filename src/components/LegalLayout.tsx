import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

import logoAsset from "@/assets/logo-transparent.asset.json";

export function Platzhalter({ label }: { label: string }) {
  return (
    <p className="rounded-md border border-dashed border-accent/60 bg-cream px-4 py-3 text-sm text-muted-foreground">
      <span className="font-display font-semibold tracking-[0.12em] text-accent">NOCH ZU ERGÄNZEN:</span>{" "}
      {label}
    </p>
  );
}

export function LegalLayout({
  title,
  intro,
  children,
}: {
  title: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <main className="min-h-screen bg-background texture-paper">
      <header className="border-b border-border bg-background/90">
        <div className="mx-auto flex h-20 max-w-3xl items-center justify-between px-4 sm:px-6 md:h-24">
          <Link to="/" aria-label="Zur Startseite">
            <img src={logoAsset.url} alt="Hammer Backyard Ultra Logo" className="h-14 w-auto md:h-[68px]" />
          </Link>
          <Link
            to="/"
            className="font-display text-xs font-semibold tracking-[0.2em] text-foreground/80 transition-colors hover:text-accent sm:text-sm"
          >
            ZURÜCK ZUR STARTSEITE
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 md:py-20">
        <h1 className="font-display text-3xl font-bold uppercase leading-[1.15] sm:text-5xl sm:leading-[1.08]">
          {title}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-foreground/75">{intro}</p>

        <div className="legal-content mt-10 space-y-4 text-base leading-relaxed text-foreground/80">
          {children}
        </div>

        <div className="mt-14 border-t border-border pt-8">
          <Link
            to="/"
            className="font-display inline-flex min-h-12 items-center rounded-md border border-accent px-6 py-3 text-sm font-semibold tracking-[0.2em] text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            ZURÜCK ZUR STARTSEITE
          </Link>
        </div>
      </div>
    </main>
  );
}
