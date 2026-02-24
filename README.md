# Optim Design – Site web

Site multi-pagină Next.js pentru **Optim Design** (magazin de mobilier, Galați). Design premium, asimetric, inspirat din estetica high-end, fără layout-uri generice.

---

## Stack

- **Next.js 14** (App Router) – routing modern, Server Components, SEO
- **React 18** – UI
- **TypeScript** – tipizare
- **CSS Modules** – stiluri izolate, design tokens în `globals.css`

**De ce App Router:** layout-uri nested, metadata per pagină, generateMetadata pentru categorii dinamice, streaming. Ideal pentru site-uri multi-pagină cu conținut și SEO.

---

## Structură pagini (URL-uri reale)

| URL | Descriere |
|-----|-----------|
| `/` | Acasă – hero, despre, produse, galerie asimetrică, CTA |
| `/categorii` | Lista de categorii |
| `/categorii/[slug]` | Pagină categorie (living, dining, dormitor, birou, decor) |
| `/despre-noi` | Despre noi |
| `/contact` | Contact, hartă Google Maps |

Toate linkurile sunt interne (Next.js `Link`), deschid în același tab.

---

## Comenzi (copy-paste)

```bash
# 1. Instalare dependențe
npm install

# 2. Rulare în development
npm run dev
```

Deschide [http://localhost:3000](http://localhost:3000).

```bash
# 3. Build pentru producție
npm run build

# 4. Rulare build (după npm run build)
npm start
```

```bash
# 5. Lint (opțional)
npm run lint
```

---

## TO-DO list – verificare post-generare

- [ ] **Dependențe** – rulează `npm install` în rădăcina proiectului.
- [ ] **Dev** – rulează `npm run dev` și verifică [http://localhost:3000](http://localhost:3000).
- [ ] **Navigare** – verifică că toate linkurile din header/footer duc la paginile corecte (Acasă, Categorii, Despre noi, Contact).
- [ ] **Categorii** – intră pe /categorii, apoi pe fiecare categorie (Living, Dining, Dormitor, etc.) și confirmă că se încarcă fără eroare.
- [ ] **Contact** – pe /contact verifică: adresă, telefon, link Facebook, iframe Google Maps (exact codul cerut).
- [ ] **Responsive** – redimensionează fereastra sau testează pe mobil; header, grid-uri și galeria asimetrică se adaptează.
- [ ] **Accesibilitate** – Tab prin pagină; primul focus pe „Sari la conținut” (skip link); verifică că toate linkurile/butoanele sunt focusabile.
- [ ] **SEO** – view source pe homepage: meta description, titluri. Verifică `/sitemap.xml` și `/robots.txt` după deploy.
- [ ] **Conținut** – înlocuiește imaginile Unsplash cu poze reale (produse/showroom) dacă dorești; actualizează textele/preturi în `lib/products.ts` și `lib/constants.ts`.
- [ ] **Domeniu** – când pui site-ul live, schimbă `metadataBase` și URL-ul din `robots.ts` / `sitemap.ts` la domeniul real (ex. `https://optimdesign.ro`).

---

## Fișiere importante

- `app/layout.tsx` – layout global, metadata, fonturi, SkipLink, JsonLd.
- `app/globals.css` – variabile design (culori, fonturi, spațieri, ease).
- `lib/constants.ts` – nume business, telefon, adresă, social, Google Maps embed URL.
- `lib/products.ts` – produse featured (nume, categorie, preț, imagine, link).
- `components/` – Header, Footer, Hero, AboutStats, FeaturedProducts, GalleryAsymmetric, CtaBanner, SkipLink, JsonLd.
- `app/robots.ts` – reguli robots.
- `app/sitemap.ts` – sitemap XML generat.

---

## Design

- **Identitate vizuală** – fiecare secțiune are stil propriu (hero cu gradient, about pe fundal alb, galerie asimetrică, CTA full-width, footer închis).
- **Ritm rupt** – galeria pe homepage e grid asimetric (1 coloană înaltă + 2 rânduri laterale), nu grid uniform.
- **Tipografie** – Playfair Display (titluri), DM Sans (text).
- **Culori** – neutre calde (#faf9f7, #2d2d2d), accent lemn (#8b7355).
- **Animații** – hero fade-in la încărcare; hover pe carduri, linkuri și butoane (transition).

---

## Licență / notă

Proiect generat pentru Optim Design. Conținutul (texte, imagini, prețuri) poate fi actualizat direct în cod sau prin CMS ulterior.
