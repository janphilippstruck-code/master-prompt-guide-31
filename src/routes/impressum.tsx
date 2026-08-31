import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout, Platzhalter } from "@/components/LegalLayout";

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
  }),
  component: Impressum,
});

function Impressum() {
  return (
    <LegalLayout title="Impressum" intro="Angaben gemäß § 5 DDG (ehemals § 5 TMG).">
      <h2>Veranstalter / Diensteanbieter</h2>
      <Platzhalter label="Name des Veranstalters bzw. der verantwortlichen Organisation" />
      <Platzhalter label="Straße und Hausnummer" />
      <Platzhalter label="PLZ und Ort" />

      <h2>Kontakt</h2>
      <Platzhalter label="E-Mail-Adresse" />
      <Platzhalter label="Telefonnummer (optional)" />

      <h2>Vertreten durch</h2>
      <Platzhalter label="Vertretungsberechtigte Person(en)" />

      <h2>Registereintrag / Rechtsform</h2>
      <Platzhalter label="Rechtsform, ggf. Vereinsregister und Registernummer, Registergericht" />

      <h2>Umsatzsteuer-Identifikationsnummer</h2>
      <Platzhalter label="USt-IdNr. gemäß § 27 a UStG, sofern vorhanden" />

      <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
      <Platzhalter label="Name und Anschrift der verantwortlichen Person" />

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
