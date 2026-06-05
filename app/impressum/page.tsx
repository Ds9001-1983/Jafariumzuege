import type { Metadata } from "next";
import { LegalLayout, LegalPlaceholderNote } from "@/components/site/legal-layout";
import { business, fullAddress } from "@/lib/business";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum von Jafari Umzug & Transportservice, Cloppenburg.",
  alternates: { canonical: "/impressum" },
  robots: { index: false, follow: true },
};

export default function ImpressumPage() {
  return (
    <LegalLayout title="Impressum" breadcrumbName="Impressum">
      <LegalPlaceholderNote />

      <section>
        <h2>Angaben gemäß § 5 DDG</h2>
        <p>
          {business.owner}
          <br />
          {business.name}
          <br />
          {business.address.street}
          <br />
          {business.address.postalCode} {business.address.city}
        </p>
      </section>

      <section>
        <h2>Kontakt</h2>
        <p>
          Telefon: <a href={business.phone.href}>{business.phone.display}</a>
          <br />
          E-Mail: <a href={`mailto:${business.email}`}>{business.email}</a>
        </p>
      </section>

      <section>
        <h2>Umsatzsteuer-ID</h2>
        <p>
          Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
          <br />
          <strong>
            [VERIFY: USt-IdNr. ergänzen – oder Hinweis auf Kleinunternehmerregelung nach § 19 UStG]
          </strong>
        </p>
      </section>

      <section>
        <h2>Gewerbe &amp; berufsrechtliche Angaben</h2>
        <p>
          <strong>
            [VERIFY: Gewerbeanmeldung / zuständige Behörde ergänzen. Bei gewerblichem
            Güterkraftverkehr mit Fahrzeugen über 3,5 t zGG ist eine EU-Lizenz bzw.
            Güterkraftverkehrserlaubnis (§ 3 GüKG) anzugeben.]
          </strong>
        </p>
      </section>

      <section>
        <h2>Redaktionell verantwortlich (§ 18 Abs. 2 MStV)</h2>
        <p>
          {business.owner}
          <br />
          {fullAddress}
        </p>
      </section>

      <section>
        <h2>EU-Streitschlichtung</h2>
        <p>
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
          <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">
            https://ec.europa.eu/consumers/odr/
          </a>
          . Unsere E-Mail-Adresse finden Sie oben im Impressum.
        </p>
        <p>
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </section>

      <section>
        <h2>Haftung für Inhalte</h2>
        <p>
          Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach
          den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter
          jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
          überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
        </p>
      </section>

      <section>
        <h2>Haftung für Links</h2>
        <p>
          Unser Angebot enthält ggf. Links zu externen Websites Dritter, auf deren Inhalte wir keinen
          Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
          Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
          Seiten verantwortlich.
        </p>
      </section>

      <section>
        <h2>Urheberrecht</h2>
        <p>
          Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
          dem deutschen Urheberrecht. Downloads und Kopien dieser Seite sind nur für den privaten,
          nicht kommerziellen Gebrauch gestattet.
        </p>
      </section>
    </LegalLayout>
  );
}
