import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/LegalLayout";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum | Hammer Backyard Ultra" },
      {
        name: "description",
        content: "Impressum und Anbieterkennzeichnung des Hammer Backyard Ultra im Selbachpark Hamm.",
      },
      { property: "og:title", content: "Impressum | Hammer Backyard Ultra" },
      {
        property: "og:description",
        content: "Anbieterkennzeichnung des Hammer Backyard Ultra.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      { rel: "canonical", href: "https://hammerbackyard.xn--ballonlufer-r8a.de/impressum" },
    ],

  }),
  component: Impressum,
});

function Impressum() {
  return (
    <LegalLayout title="Impressum" intro="Angaben gemäß § 5 DDG (ehemals § 5 TMG).">
      <h2>Veranstalter / Diensteanbieter</h2>
      <p>
        Jan-Philipp Struck
        <br />
        Ballonläufer / Hammer Backyard Ultra
        <br />
        Brüggenkampstr. 10
        <br />
        59077 Hamm
        <br />
        Deutschland
      </p>

      <h2>Kontakt</h2>
      <p>
        E-Mail: <a href="mailto:janphilippstruck@gmx.de">janphilippstruck@gmx.de</a>
      </p>

      <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
      <p>
        Jan-Philipp Struck
        <br />
        Brüggenkampstr. 10
        <br />
        59077 Hamm
      </p>

      <h2>Bildnachweise</h2>
      <p>
        Streckenkarte, Hero- und Basecamp-Aufnahmen: Veranstalter. Bildmarke „Hammer Backyard Ultra“:
        Veranstalter.
      </p>

      <h2>Streitschlichtung</h2>
      <p>
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
        Verbraucherschlichtungsstelle teilzunehmen.
      </p>
    </LegalLayout>
  );
}
