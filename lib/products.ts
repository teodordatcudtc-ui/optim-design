export interface ProductPreview {
  id: string;
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  price: string;
  priceNumber: number;
  image: string;
  href: string;
  description?: string;
  colors?: string[];
}

/** URL poze produse: pune fișiere în public/images/products/ – vezi public/images/CUM_ADAUGI_POZELE.md */
const productImage = (slug: string) => `/images/products/${slug}.jpg`;

const base: (Omit<ProductPreview, "href"> & { description?: string; colors?: string[] })[] = [
  { id: "1", slug: "scaun-ratiol", name: "Scaun Ratiol", category: "Scaune", categorySlug: "living", price: "580 lei", priceNumber: 580, image: productImage("scaun-ratiol"), description: "Scaun de living cu spătar înalt și bază din lemn masiv. Design modern, confortabil pentru birou sau masă.", colors: ["Gri", "Bej", "Albastru petrol", "Negru"] },
  { id: "2", slug: "buffet-mindful", name: "Buffet Mindful", category: "Living", categorySlug: "living", price: "1.200 lei", priceNumber: 1200, image: productImage("buffet-mindful"), description: "Buffet cu uși și sertare, ideal pentru living sau hol. Finisaj de calitate, spațiu generos de depozitare.", colors: ["Alb", "Nuc", "Gri închis"] },
  { id: "3", slug: "noptiera-nordic", name: "Noptieră Nordic", category: "Dormitor", categorySlug: "dormitor", price: "450 lei", priceNumber: 450, image: productImage("noptiera-nordic"), description: "Noptieră minimalistă, stil nordic. Sertar și raft deschis, potrivită pentru orice dormitor.", colors: ["Alb", "Stejar deschis", "Negru mat"] },
  { id: "4", slug: "sofa-comfort", name: "Sofa Comfort", category: "Sofa", categorySlug: "living", price: "2.800 lei", priceNumber: 2800, image: productImage("sofa-comfort"), description: "Canapea 3 locuri, tapitată, cu spătar înalt. Cadru robust, bureți de densitate mare pentru confort durabil.", colors: ["Gri antracit", "Bej", "Verde petrol", "Bordeaux"] },
  { id: "5", slug: "fotoliu-relax", name: "Fotoliu Relax", category: "Living", categorySlug: "living", price: "890 lei", priceNumber: 890, image: productImage("fotoliu-relax"), description: "Fotoliu tapitat, ideal pentru colțul de lectură sau living. Brațe late, fund profund.", colors: ["Gri", "Albastru", "Mustard", "Negru"] },
  { id: "6", slug: "masa-dining", name: "Masă de dining", category: "Dining", categorySlug: "dining", price: "1.500 lei", priceNumber: 1500, image: productImage("masa-dining"), description: "Masă de dining din lemn masiv, blat gros. Găsește 6–8 persoane. Finisaj natural sau uleiuit.", colors: ["Stejar natural", "Nuc", "Alb"] },
  { id: "7", slug: "comoda-simplu", name: "Comodă Simplu", category: "Birou & Comode", categorySlug: "birou", price: "620 lei", priceNumber: 620, image: productImage("comoda-simplu"), description: "Comodă cu 3 sertare și picioare din lemn. Design curat, multifuncțională pentru dormitor sau hol.", colors: ["Alb", "Gri", "Stejar"] },
  { id: "8", slug: "pat-dublu-nordic", name: "Pat dublu Nordic", category: "Dormitor", categorySlug: "dormitor", price: "1.900 lei", priceNumber: 1900, image: productImage("pat-dublu-nordic"), description: "Pat dublu 160x200 cm, cadru din lemn masiv. Capăt de pat înalt, stil nordic.", colors: ["Alb", "Stejar deschis", "Negru"] },
  { id: "9", slug: "scaun-dining-lemn", name: "Scaun dining lemn", category: "Dining", categorySlug: "dining", price: "380 lei", priceNumber: 380, image: productImage("scaun-dining-lemn"), description: "Scaun de dining cu spătar din lemn și seat tapitat. Set de 2 sau 4 bucăți la cerere.", colors: ["Lemn natural", "Lemn vopsit negru", "Lemn + seat gri"] },
  { id: "10", slug: "birou-minimalist", name: "Birou minimalist", category: "Birou & Comode", categorySlug: "birou", price: "1.100 lei", priceNumber: 1100, image: productImage("birou-minimalist"), description: "Birou cu blat larg și picioare metalice. Ideal pentru home office sau cameră de copii.", colors: ["Alb", "Gri", "Nuc"] },
  { id: "11", slug: "oglinda-decor", name: "Oglindă decor", category: "Decor & Oglinzi", categorySlug: "decor", price: "340 lei", priceNumber: 340, image: productImage("oglinda-decor"), description: "Oglindă decorativă cu ramă subțire. Mărește vizual spațiul și adaugă lumină în hol sau baie.", colors: ["Ramă argintiu", "Ramă auriu", "Ramă negru"] },
  { id: "12", slug: "canapea-extensibila", name: "Canapea extensibilă", category: "Living", categorySlug: "living", price: "3.200 lei", priceNumber: 3200, image: productImage("canapea-extensibila"), description: "Canapea extensibilă 3+1 locuri, mecanism tip book. Tapiterie de calitate, cadru rezistent.", colors: ["Gri", "Bej", "Verde măsliniu", "Albastru"] },
];

export const ALL_PRODUCTS: ProductPreview[] = base.map((p) => ({
  ...p,
  href: `/produse/${p.slug}`,
}));

export function getProductBySlug(slug: string): ProductPreview | undefined {
  return ALL_PRODUCTS.find((p) => p.slug === slug);
}

export const FEATURED_PRODUCTS: ProductPreview[] = ALL_PRODUCTS.slice(0, 6);

export type SortOption = "default" | "price-asc" | "price-desc" | "name-asc" | "name-desc";

export function sortProducts(
  products: ProductPreview[],
  sort: SortOption
): ProductPreview[] {
  const arr = [...products];
  switch (sort) {
    case "price-asc":
      return arr.sort((a, b) => a.priceNumber - b.priceNumber);
    case "price-desc":
      return arr.sort((a, b) => b.priceNumber - a.priceNumber);
    case "name-asc":
      return arr.sort((a, b) => a.name.localeCompare(b.name));
    case "name-desc":
      return arr.sort((a, b) => b.name.localeCompare(a.name));
    default:
      return arr;
  }
}
