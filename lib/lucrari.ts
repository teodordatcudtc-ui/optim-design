/** Lucrări realizate – proiecte/amenajări. Poze în public/images/lucrari/ */

export interface LucrareSpec {
  label: string;
  value: string;
}

export interface Lucrare {
  id: string;
  slug: string;
  title: string;
  categorySlug: string;
  image: string;
  description?: string;
  /** Detalii tehnice: materiale, finisaje, dimensiuni etc. */
  specs?: LucrareSpec[];
}

const lucrariImage = (path: string) => `/images/lucrari/${path}.jpg`;

const base: Lucrare[] = [
  { id: "1", slug: "baie-vanity", title: "Baie – mobilier personalizat", categorySlug: "bai", image: lucrariImage("bai/bai-01"), description: "Vanity flotant cu blat integrat, rafturi deschise și oglindă cu LED. Mobilier realizat la comandă pentru spațiu optim.", specs: [{ label: "Materiale", value: "PAL melaminat, blat MDF laminat" }, { label: "Finisaje", value: "Lac mat alb, elemente deschise din lemn natural" }, { label: "Caracteristici", value: "Vanity flotant, oglindă cu iluminare integrată" }] },
  { id: "2", slug: "dormitor-dressing", title: "Dormitor – dressing integrat", categorySlug: "dormitor", image: lucrariImage("dormitor/dormitor-01"), description: "Dulapuri la comandă cu panouri gri mate, compartimente deschise din lemn. Birou integrat cu suport monitor.", specs: [{ label: "Materiale", value: "PAL 18mm, fațade MDF" }, { label: "Finisaje", value: "Gri mat, lemn natural pentru rafturi" }, { label: "Caracteristici", value: "Sistem modulat, sertare cu glisare soft-close" }] },
  { id: "3", slug: "sufragerie-masa", title: "Sufragerie – masă și bibliotecă", categorySlug: "living", image: lucrariImage("living/living-01"), description: "Masă de dining cu blat lemn masiv și picioare metal, scaune tapitate. Bibliotecă pe perete cu compartimente modulare.", specs: [{ label: "Masă", value: "Blat lemn stejar, picioare metal negru" }, { label: "Bibliotecă", value: "Lemn natural, panou central accent închis" }, { label: "Scaune", value: "Bouclé/tapiserie, picioare metal" }] },
  { id: "4", slug: "living-biblioteca", title: "Living – bibliotecă și dining", categorySlug: "living", image: lucrariImage("living/living-02"), description: "Bibliotecă pe întreg peretele, masă dining din lemn masiv cu margini naturale. Design integrat living–dining.", specs: [{ label: "Bibliotecă", value: "Lemn stejar/nuc, panou central negru" }, { label: "Masă", value: "Lemn masiv, margini live-edge, picioare metal" }, { label: "Dimensiuni", value: "Bibliotecă la comandă, adaptată spațiului" }] },
  { id: "5", slug: "living-media", title: "Living – unitate media și canapea", categorySlug: "living", image: lucrariImage("living/living-03"), description: "Unitate TV cu cămin electric integrat, dulapuri laterale și rafturi flotante din lemn. Canapea L modulară.", specs: [{ label: "Unitate media", value: "Fațade gri/negru mat, interior PAL" }, { label: "Rafturi", value: "Lemn natural, montare pe consolă" }, { label: "Caracteristici", value: "Spațiu cămin electric, cablaj integrat" }] },
  { id: "6", slug: "bucatarie-l", title: "Bucătărie – mobilier L", categorySlug: "bucatarii", image: lucrariImage("bucatarii/bucatarii-01"), description: "Mobilier în formă de L, fațade crem cu paneluri, blat și splash-back marmură ceramică. Electrocasnice integrate.", specs: [{ label: "Corpuri", value: "PAL 18mm, sertare full extension" }, { label: "Blat & splash", value: "Marmură ceramică gri" }, { label: "Electrocasnice", value: "Cuptor, plită, chiuvetă integrată" }] },
  { id: "7", slug: "living-birou", title: "Living cu zonă home office", categorySlug: "living", image: lucrariImage("living/living-04"), description: "Birou integrat în unitate de perete, consolă TV și rafturi. Canapea L, stil contemporan.", specs: [{ label: "Birou", value: "Blat lemn, suport monitor, sertare" }, { label: "Unitate TV", value: "Consolă joasă, rafturi deschise" }, { label: "Materiale", value: "Lemn natural, PAL laminat" }] },
  { id: "8", slug: "receptie-cabinet", title: "Spațiu comercial – receptie", categorySlug: "spatial-comerciale", image: lucrariImage("spatial-comerciale/receptie-01"), description: "Birou recepție L, rafturi modulare pe perete. Design curat pentru cabinete și spații comerciale.", specs: [{ label: "Birou recepție", value: "Structură PAL, fațade albe și lemn" }, { label: "Rafturi", value: "Sistem modulat, compartimente mixte" }, { label: "Caracteristici", value: "Lucrat la comandă, adaptat spațiului" }] },
];

export const ALL_LUCRARI = base;

export const FEATURED_LUCRARI = base.slice(0, 6);

export function getLucrariByCategory(categorySlug: string): Lucrare[] {
  if (!categorySlug) return base;
  return base.filter((l) => l.categorySlug === categorySlug);
}

export function getLucrareBySlug(slug: string): Lucrare | undefined {
  return base.find((l) => l.slug === slug);
}
