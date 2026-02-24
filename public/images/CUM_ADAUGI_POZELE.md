# Cum adaugi pozele pentru produse și categorii

Pune fișierele în folderele de mai jos și **folosește exact numele din listă** (inclusiv litere mici, cratimă, fără spații).  
Poți folosi extensia **.jpg** sau **.png**.

---

## 1. Poze PRODUSE

**Folder:** `public/images/products/`

Pozele trebuie numite **exact** după slug-ul produsului (numele din coloana „Nume fișier”):

| Produs            | Nume fișier            |
|-------------------|------------------------|
| Scaun Ratiol      | `scaun-ratiol.jpg`     |
| Buffet Mindful    | `buffet-mindful.jpg`   |
| Noptieră Nordic   | `noptiera-nordic.jpg`  |
| Sofa Comfort      | `sofa-comfort.jpg`     |
| Fotoliu Relax     | `fotoliu-relax.jpg`    |
| Masă de dining    | `masa-dining.jpg`      |
| Comodă Simplu     | `comoda-simplu.jpg`    |
| Pat dublu Nordic  | `pat-dublu-nordic.jpg` |
| Scaun dining lemn | `scaun-dining-lemn.jpg`|
| Birou minimalist  | `birou-minimalist.jpg` |
| Oglindă decor     | `oglinda-decor.jpg`    |
| Canapea extensibilă | `canapea-extensibila.jpg` |

**Exemplu:** pentru „Scaun Ratiol” salvezi poza ca:
- `public/images/products/scaun-ratiol.jpg`  
sau  
- `public/images/products/scaun-ratiol.png`

---

## 2. Poze CATEGORII

**Folder:** `public/images/categories/`

Folosite în galeria de pe prima pagină și la afișarea categoriilor. Numele fișierului = slug-ul categoriei:

| Categorie      | Nume fișier   |
|----------------|---------------|
| Living & Sofa  | `living.jpg`  |
| Dining         | `dining.jpg`  |
| Dormitor       | `dormitor.jpg`|
| Birou & Comode | `birou.jpg`   |
| Decor & Oglinzi| `decor.jpg`   |

| Utilizare (galerie prima pagină) | Nume fișier  |
|----------------------------------|--------------|
| Vezi toată colecția              | `toate.jpg`  |

**Exemplu:** pentru Living salvezi:
- `public/images/categories/living.jpg` sau `living.png`

---

## Reguli rapide

- **Doar litere mici**, numere și cratimă (e.g. `scaun-dining-lemn.jpg`).
- **Fără spații** – folosește cratimă: `pat-dublu-nordic.jpg`.
- **Extensie:** `.jpg` sau `.png`.
- **Recomandat:** rezoluție minim ~600×600 px pentru produse; pentru categorii poți folosi imagini mai mari (ex. 800×800 sau 1200×800).

După ce adaugi fișierele, site-ul va folosi automat aceste poze.

**Notă:** Codul folosește extensia **.jpg**. Dacă pui fișiere **.png**, în `lib/products.ts` schimbă `productImage` la `.png`; pentru categorii, în `components/GalleryAsymmetric.tsx` și `app/categorii/[slug]/page.tsx` schimbă `categoryImage` la `.png`.
