export const SITE = {
  name: "Optim Design",
  shortDesc: "Magazin de mobilier",
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
  { href: "/produse", label: "Produse" },
  { href: "/despre-noi", label: "Despre noi" },
  { href: "/contact", label: "Contact" },
] as const;

export const CATEGORIES = [
  { slug: "living", label: "Living & Sofa", href: "/produse?categorie=living" },
  { slug: "dining", label: "Dining", href: "/produse?categorie=dining" },
  { slug: "dormitor", label: "Dormitor", href: "/produse?categorie=dormitor" },
  { slug: "birou", label: "Birou & Comode", href: "/produse?categorie=birou" },
  { slug: "decor", label: "Decor & Oglinzi", href: "/produse?categorie=decor" },
] as const;
