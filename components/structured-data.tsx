import { getOrganizationJsonLd, getWebsiteJsonLd } from "@/lib/json-ld";

export function StructuredData() {
  const schemas = [getOrganizationJsonLd(), getWebsiteJsonLd()];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
    />
  );
}
