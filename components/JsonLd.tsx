import { SITE } from "@/lib/constants";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE.name,
  description: SITE.shortDesc,
  telephone: SITE.phone,
  email: SITE.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Strada Ioan Cetățianu Hală 60",
    addressLocality: "Galați",
    postalCode: "800198",
    addressRegion: "Galați",
    addressCountry: "RO",
  },
  url: "https://optimdesign.ro",
  sameAs: [SITE.social.facebook],
};

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
    />
  );
}
