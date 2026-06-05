import type { Metadata } from "next";
import { LegalLayout, LegalPlaceholderNote } from "@/components/site/legal-layout";
import { business, fullAddress } from "@/lib/business";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung von Jafari Umzug & Transportservice gemäß DSGVO.",
  alternates: { canonical: "/datenschutz" },
  robots: { index: false, follow: true },
};

export default function DatenschutzPage() {
  return (
    <LegalLayout title="Datenschutzerklärung" breadcrumbName="Datenschutz">
      <LegalPlaceholderNote />

      <section>
        <h2>1. Verantwortlicher</h2>
        <p>
          Verantwortlich für die Datenverarbeitung auf dieser Website ist:
          <br />
          {business.owner} – {business.name}
          <br />
          {fullAddress}
          <br />
          Telefon: <a href={business.phone.href}>{business.phone.display}</a>
          <br />
          E-Mail: <a href={`mailto:${business.email}`}>{business.email}</a>
        </p>
      </section>

      <section>
        <h2>2. Hosting</h2>
        <p>
          Diese Website wird bei der Vercel Inc. (340 S Lemon Ave #4133, Walnut, CA 91789, USA)
          gehostet. Beim Aufruf der Website werden technisch notwendige Daten (z. B. IP-Adresse,
          Zeitpunkt des Zugriffs) verarbeitet, um die Auslieferung der Seite zu ermöglichen.
          Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer sicheren,
          stabilen Bereitstellung). Mit dem Anbieter besteht ein Auftragsverarbeitungsvertrag; für
          mögliche Datenübermittlungen in die USA werden die EU-Standardvertragsklauseln
          herangezogen.
        </p>
      </section>

      <section>
        <h2>3. Server-Logfiles</h2>
        <p>
          Der Provider erhebt und speichert automatisch Informationen in sogenannten Server-Logfiles
          (Browsertyp/-version, verwendetes Betriebssystem, Referrer-URL, Hostname, Uhrzeit der
          Anfrage). Diese Daten sind nicht bestimmten Personen zuordenbar und werden nicht mit
          anderen Datenquellen zusammengeführt.
        </p>
      </section>

      <section>
        <h2>4. Kontaktaufnahme (Formular &amp; Telefon)</h2>
        <p>
          Wenn Sie uns über das Anfrage-/Kontaktformular oder telefonisch kontaktieren, verarbeiten
          wir die von Ihnen übermittelten Daten (z. B. Name, Telefonnummer, ggf. E-Mail, Umzugsdetails
          und Ihr Anliegen), um Ihre Anfrage und das Angebot zu bearbeiten. Rechtsgrundlage ist Art.
          6 Abs. 1 lit. b DSGVO (Anbahnung bzw. Erfüllung eines Vertrags) bzw. Art. 6 Abs. 1 lit. a
          und f DSGVO. Die Daten werden gelöscht, sobald sie für die Zweckerreichung nicht mehr
          erforderlich sind und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
        </p>
      </section>

      {business.whatsappEnabled ? (
        <section>
          <h2>5. Kontakt über WhatsApp</h2>
          <p>
            Sofern Sie uns über WhatsApp kontaktieren, werden Ihre Daten durch die WhatsApp Ireland
            Ltd. bzw. Meta verarbeitet. Auf die Datenverarbeitung durch WhatsApp haben wir nur
            eingeschränkten Einfluss; es können Daten in Drittländer (USA) übermittelt werden. Nutzen
            Sie diesen Kanal nur, wenn Sie damit einverstanden sind. Alternativ erreichen Sie uns
            jederzeit telefonisch oder per E-Mail.
          </p>
        </section>
      ) : null}

      <section>
        <h2>{business.whatsappEnabled ? "6" : "5"}. Schriftarten</h2>
        <p>
          Diese Website verwendet lokal gehostete Schriftarten. Es findet dabei{" "}
          <strong>keine Verbindung zu Servern Dritter</strong> (etwa Google Fonts) statt – Ihre
          IP-Adresse wird hierfür nicht an Dritte übertragen.
        </p>
      </section>

      <section>
        <h2>{business.whatsappEnabled ? "7" : "6"}. Cookies &amp; Reichweitenmessung</h2>
        <p>
          Diese Website setzt <strong>keine Marketing- oder Tracking-Cookies</strong> ein und bindet
          keine externen Analyse- oder Werbedienste ein. Es werden ausschließlich technisch
          notwendige Daten verarbeitet. Ein Einwilligungsbanner ist daher nicht erforderlich.
          <br />
          <strong>
            [VERIFY: Sollten später Google Analytics, Meta-Pixel oder eine direkte
            Karten-Einbindung ergänzt werden, ist eine Consent-Lösung sowie eine Erweiterung dieser
            Erklärung erforderlich.]
          </strong>
        </p>
      </section>

      <section>
        <h2>{business.whatsappEnabled ? "8" : "7"}. Ihre Rechte</h2>
        <p>Sie haben jederzeit das Recht auf:</p>
        <ul>
          <li>Auskunft über Ihre gespeicherten Daten (Art. 15 DSGVO)</li>
          <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
          <li>Löschung (Art. 17 DSGVO) und Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
          <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
          <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
        </ul>
        <p>
          Zudem haben Sie das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren
          (Art. 77 DSGVO). Für Anfragen zum Datenschutz erreichen Sie uns unter{" "}
          <a href={`mailto:${business.email}`}>{business.email}</a>.
        </p>
      </section>
    </LegalLayout>
  );
}
