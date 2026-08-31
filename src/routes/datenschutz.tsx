import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout, Platzhalter } from "@/components/LegalLayout";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: "Datenschutzerklärung | Hammer Backyard Ultra" },
      {
        name: "description",
        content:
          "Informationen zur Verarbeitung personenbezogener Daten beim Besuch der Website des Hammer Backyard Ultra.",
      },
      { property: "og:title", content: "Datenschutz | Hammer Backyard Ultra" },
      {
        property: "og:description",
        content: "Datenschutzhinweise zur Website des Hammer Backyard Ultra.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Datenschutz,
});

function Datenschutz() {
  return (
    <LegalLayout
      title="Datenschutz"
      intro="Informationen zur Verarbeitung personenbezogener Daten beim Besuch dieser Website."
    >
      <h2>1. Verantwortliche Stelle</h2>
      <Platzhalter label="Name, Anschrift und E-Mail-Adresse der verantwortlichen Stelle" />

      <h2>2. Datenschutzbeauftragter</h2>
      <Platzhalter label="Kontaktdaten des Datenschutzbeauftragten, sofern benannt" />

      <h2>3. Aufruf der Website / Server-Logfiles</h2>
      <p>
        Beim Aufruf dieser Website werden durch den Hosting-Dienstleister technisch notwendige Daten
        verarbeitet, insbesondere IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene Seite, übertragene
        Datenmenge sowie Browser- und Betriebssystemangaben. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO
        (berechtigtes Interesse am sicheren und stabilen Betrieb der Website).
      </p>
      <Platzhalter label="Name und Anschrift des Hosting-Dienstleisters sowie Speicherdauer der Logfiles" />

      <h2>4. Cookies und Reichweitenmessung</h2>
      <p>
        Diese Website setzt keine Cookies zu Marketing- oder Trackingzwecken ein. Sollten künftig
        Analyse-Werkzeuge eingesetzt werden, wird dieser Abschnitt entsprechend ergänzt.
      </p>

      <h2>5. Eingebundene Schriftarten</h2>
      <p>
        Für die Darstellung werden Web-Schriftarten (Oswald, Barlow) von Google Fonts geladen. Dabei wird die
        IP-Adresse an Google übertragen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.
      </p>

      <h2>6. Kontaktaufnahme</h2>
      <p>
        Nehmen Sie per E-Mail Kontakt auf, verarbeiten wir Ihre Angaben ausschließlich zur Bearbeitung Ihrer
        Anfrage. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b bzw. lit. f DSGVO.
      </p>

      <h2>7. Anmeldung zur Veranstaltung</h2>
      <p>
        Die Anmeldung ist derzeit nicht geöffnet. Sobald ein Anmeldeverfahren bereitsteht, werden die dabei
        erhobenen Daten, deren Zweck, Empfänger und Speicherdauer an dieser Stelle beschrieben.
      </p>
      <Platzhalter label="Angaben zum eingesetzten Anmelde- bzw. Zeitmessdienstleister" />

      <h2>8. Ihre Rechte</h2>
      <p>
        Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung,
        Datenübertragbarkeit sowie Widerspruch gegen die Verarbeitung. Zudem steht Ihnen ein Beschwerderecht
        bei einer Datenschutz-Aufsichtsbehörde zu.
      </p>
      <Platzhalter label="Zuständige Aufsichtsbehörde" />
    </LegalLayout>
  );
}
