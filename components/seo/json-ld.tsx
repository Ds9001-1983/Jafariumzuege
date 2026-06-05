/** Rendert strukturierte Daten als <script type="application/ld+json">. */
export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify ist sicher; Inhalt stammt aus eigenen Daten.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
