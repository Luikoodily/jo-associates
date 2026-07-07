import { siteConfig } from "@/lib/site";
import { company } from "@/data/company";

export function getOrganizationJsonLd() {
  const address = company.address;
  return {
    "@context": "https://schema.org",
    "@type": "ElectricalContractor",
    name: company.legalName,
    alternateName: company.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    description: siteConfig.description,
    foundingDate: String(company.established),
    founder: {
      "@type": "Person",
      name: company.founder,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: `${address.line1}, ${address.line2}`,
      addressLocality: address.city,
      addressRegion: address.state,
      postalCode: address.pincode,
      addressCountry: address.country,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: company.contact.phone[0],
        contactType: "customer service",
        email: company.contact.email[0],
        areaServed: "IN-KL",
        availableLanguage: ["English", "Malayalam"],
      },
    ],
    areaServed: {
      "@type": "State",
      name: "Kerala",
    },
    sameAs: company.socials.map((social) => social.href),
  };
}

export function getWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.shortName,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      "@type": "Organization",
      name: company.legalName,
    },
  };
}
