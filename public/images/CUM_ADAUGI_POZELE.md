# Cum adaugi pozele pentru lucrări și categorii

---

## 0. Imagine HERO (prima pagină)

**Fișier:** `public/images/hero.jpg`

Salvează imaginea cu acest nume în folderul `public/images/`. Folosită ca fundal în secțiunea hero de pe homepage.  
Rezoluție recomandată: **1920×1080 px** sau mai mare.  
Dacă folosești `.png`, schimbă în `components/Hero.module.css` extensia la `hero.png`.


Pune fișierele în folderele de mai jos și **folosește exact numele din listă** (inclusiv litere mici, cratimă, fără spații).  
Poți folosi extensia **.jpg** sau **.png**.  
Codul folosește **.jpg** – dacă pui **.png**, schimbă în `lib/lucrari.ts` și `GalleryAsymmetric.tsx`.

---

## 1. Poze LUCRĂRI REALIZATE

**Folder:** `public/images/lucrari/`

Structură pe subfoldere după categorie. Fiecare lucrare din `lib/lucrari.ts` are un câmp `image` care construiește calea.

| Categorie         | Fișier                        | Utilizare                          |
|-------------------|-------------------------------|------------------------------------|
| Băi               | `bai/bai-01.jpg`              | Baie – mobilier personalizat       |
| Dormitor          | `dormitor/dormitor-01.jpg`    | Dormitor – dressing integrat       |
| Living            | `living/living-01.jpg`        | Sufragerie – masă și bibliotecă    |
| Living            | `living/living-02.jpg`        | Living – bibliotecă și dining      |
| Living            | `living/living-03.jpg`        | Living – unitate media și canapea  |
| Living            | `living/living-04.jpg`        | Living cu zonă home office         |
| Bucătării         | `bucatarii/bucatarii-01.jpg`  | Bucătărie – mobilier L             |
| Spații comerciale | `spatial-comerciale/receptie-01.jpg` | Receptie cabinet               |

**Cum adaugi o nouă lucrare:**
1. Adaugă poza în subfolderul corespunzător (ex: `bai/bai-02.jpg`).
2. În `lib/lucrari.ts` adaugă un obiect nou în array-ul `base`, cu `image: lucrariImage("bai/bai-02")`.

---

## 2. Poze CATEGORII (galerie homepage)

**Folder:** `public/images/categories/`

Folosite în secțiunea de galerie de pe prima pagină. Slug = nume fișier:

| Categorie           | Nume fișier            |
|---------------------|------------------------|
| Dormitor & Dressing | `dormitor.jpg`         |
| Living & Sufragerie | `living.jpg`           |
| Bucătării           | `bucatarii.jpg`        |
| Băi                 | `bai.jpg`              |
| Birouri             | `birou.jpg`            |
| Spații comerciale   | `spatial-comerciale.jpg` |
| „Vezi toate”        | `toate.jpg`            |

**Exemplu:** pentru Living salvezi `public/images/categories/living.jpg`.

---

## Reguli rapide

- **Doar litere mici**, numere și cratimă (ex: `bucatarii-01.jpg`).
- **Fără spații** – folosește cratimă.
- **Extensie:** `.jpg` sau `.png` (dacă folosești `.png`, actualizează codul).
- **Rezoluție recomandată:** minim ~800×600 px; pentru lucrări, preferabil 1200×900 px.

După ce adaugi fișierele, site-ul va folosi automat aceste poze.

---

## Pozele nu se văd?

1. **Asigură-te că sunt în Git:** după ce pui fișierele, rulează `git add public/images/`, `git commit`, `git push`. Pe Vercel trebuie să fie în repo.

2. **Nume exact:** pe Linux (Vercel) numele sunt case-sensitive. Folosește `bai-01.jpg`, nu `Bai-01.jpg`.

3. **Structură corectă:** creează subfolderele (`bai`, `living`, `dormitor` etc.) în `public/images/lucrari/` înainte de a adăuga pozele.
