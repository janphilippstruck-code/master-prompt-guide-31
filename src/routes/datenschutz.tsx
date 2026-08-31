import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/LegalLayout";

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
      <p>
        Jan-Philipp Struck
        <br />
        Brüggenkampstr. 10
        <br />
        59077 Hamm
        <br />
        Deutschland
        <br />
        E-Mail: <a href="mailto:janphilippstruck@gmx.de">janphilippstruck@gmx.de</a>
      </p>

      <h2>2. Aufruf der Website / Server-Logfiles</h2>
      <p>
        Beim Aufruf dieser Website werden durch den Hosting-Dienstleister technisch notwendige Daten
        verarbeitet, insbesondere IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene Seite, übertragene
        Datenmenge sowie Browser- und Betriebssystemangaben. Diese Daten sind für die Auslieferung und den
        sicheren Betrieb der Website erforderlich und werden nur für einen kurzen Zeitraum gespeichert.
        Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am sicheren und stabilen
        Betrieb der Website).
      </p>

      <h2>3. Cookies, Tracking und Reichweitenmessung</h2>
      <p>
        Diese Website setzt keine Cookies zu Marketing-, Analyse- oder Trackingzwecken ein. Es findet keine
        Reichweitenmessung und kein Newsletter-Versand statt.
      </p>

      <h2>4. Schriftarten</h2>
      <p>
        Die verwendeten Schriftarten werden lokal von diesem Webserver ausgeliefert. Es besteht dabei keine
        Verbindung zu Servern Dritter und es werden keine Daten an externe Anbieter übertragen.
      </p>

      <h2>5. Kontaktaufnahme per E-Mail</h2>
      <p>
        Nehmen Sie per E-Mail Kontakt auf, verarbeiten wir Ihre Angaben ausschließlich zur Bearbeitung Ihrer
        Anfrage. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b bzw. lit. f DSGVO. Die Daten werden gelöscht, sobald
        sie für den Zweck der Verarbeitung nicht mehr erforderlich sind.
      </p>

      <h2>6. Anmeldung zur Veranstaltung</h2>
      <p>
        Die Anmeldung zum Hammer Backyard Ultra ist derzeit noch nicht geöffnet. Über diese Website werden
        aktuell keine Anmeldedaten erhoben. Sobald ein Anmeldeverfahren bereitsteht, informieren wir an dieser
        Stelle über die dabei erhobenen Daten, deren Zweck, Empfänger und Speicherdauer.
      </p>

      <h2>7. Ihre Rechte</h2>
      <p>
        Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung,
        Datenübertragbarkeit sowie Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten. Wenden
        Sie sich dazu an die oben genannte verantwortliche Stelle.
      </p>

      <h2>8. Beschwerderecht bei der Aufsichtsbehörde</h2>
      <p>
        Ihnen steht ein Beschwerderecht bei einer Datenschutz-Aufsichtsbehörde zu. Zuständig ist die
        Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen, Kavalleriestr. 2–4,
        40213 Düsseldorf.
      </p>
    </LegalLayout>
  );
}
