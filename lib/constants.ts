export const SITE = {
  name: "Optim Design",
  shortDesc: "Producător de mobilier la comandă, Galați",
  phone: "0740214968",
  address: "Zona Metro, Strada Ioan Cetățianu Hală 60, 800198 Galați",
  email: "contact@optimdesign.ro",
  social: {
    facebook: "https://www.facebook.com/optimdesign.ro/",
  },
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.6651709942134!2d28.027926751869572!3d45.48227559731956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b6de8cdef0d12b%3A0xa01c695c55ea7627!2sOptim%20Design!5e0!3m2!1sen!2sro!4v1771920180460!5m2!1sen!2sro",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Acasă" },
  { href: "/lucrari", label: "Lucrări realizate" },
  { href: "/despre-noi", label: "Despre noi" },
  { href: "/contact", label: "Contact" },
] as const;

export const LEGAL_LINKS = [
  { href: "/termeni-si-conditii", label: "Termeni și condiții" },
  { href: "/politica-confidentialitate", label: "Confidențialitate" },
  { href: "/politica-cookies", label: "Cookie-uri" },
] as const;

/** Categorii pentru lucrări realizate (proiecte) */
export const CATEGORIES = [
  { slug: "bai", label: "Băi", href: "/lucrari?categorie=bai" },
  { slug: "bucatarii", label: "Bucătării", href: "/lucrari?categorie=bucatarii" },
  { slug: "living", label: "Living & Sufragerie", href: "/lucrari?categorie=living" },
  { slug: "dormitor", label: "Dormitor & Dressing", href: "/lucrari?categorie=dormitor" },
  { slug: "birou", label: "Birouri", href: "/lucrari?categorie=birou" },
  { slug: "spatial-comerciale", label: "Spații comerciale", href: "/lucrari?categorie=spatial-comerciale" },
] as const;
