# 🧜‍♀️ MerMommy Creations

**Whimsical children's party styling, themed decor, and unforgettable memories in North County San Diego.**

[![Live Site](https://img.shields.io/badge/live-site-8B6C9E)](https://mermommycreations.com)

---

## 📖 About

MerMommy Creations is a one‑page brand website for a children's party styling and rental business. It blends a playful, storybook aesthetic with practical booking tools, local SEO signals, and a mobile‑first experience.

The site is designed to feel like stepping into an underwater adventure — with hand‑crafted seashell cards, floating animations, hidden treasures, and a tone that's equal parts whimsy and wink.

---

## ✨ Key Features

- **🎨 Immersive Brand Design** – Custom SVG clip‑path shells, conic gradients, and a hand‑illustrated feel with watercolour textures and subtle noise overlays.
- **🧭 Infinite Shell Slider** – A rotating carousel of "A Little Extra Sparkle" cards with pearl glow effects, sparkles, and touch‑enabled pause/resume.
- **📝 Inquiry & Waitlist Forms** – Integrated with [Formspree](https://formspree.io) for zero‑backend submissions. Includes styled "Add‑On" cards with checkboxes and "Coming Soon" placeholders.
- **🏷️ Themed Microcopy** – "Save your clams", "Send a message in a bottle", "Shell‑fies & Sea‑nery" — all copy reinforces the mermaid brand voice.
- **🎞️ GSAP Animations** – Smooth scroll‑triggered reveals, floating logo, and a gentle bobbing effect on Kayte's photo in the "My Tail" section.
- **🔍 Local SEO Ready** – JSON‑LD schema for `LocalBusiness` + `EventPlanner`, `geo.region` meta tags, and an `<address>` element in the footer.
- **📱 Fully Responsive** – Grids, cards, and forms adapt from desktop down to 320px wide.

---

## 🧰 Tech Stack

| Tool / Library      | Purpose                               |
|---------------------|---------------------------------------|
| **HTML5**           | Semantic markup                       |
| **CSS3**            | Custom properties, Flexbox, Grid      |
| **GSAP**            | Scroll animations, infinite slider    |
| **ScrollTrigger**   | GSAP plugin for scroll‑based triggers |
| **Formspree**       | Forms backend (no server required)    |
| **Google Fonts**    | Fredoka & Grand Hotel                 |
| **Schema.org**      | Structured data for local business    |

No front‑end framework – just vanilla JS for a lightweight, fast page.

---

## 📁 Project Structure/
├── index.html # Main page (all styles + scripts inlined)
├── robots.txt # Search engine crawl instructions
├── sitemap.xml # XML sitemap for Google/Bing
├── README.md # This file
└── images/
├── MerMommyCreations.png # Hero logo
├── mommy.png # Kayte's photo (My Tail)
├── lemonade_stand.png # Adventure poster images
├── hamburger.png
├── tye_dye.png
└── mermaidparty.png

text

---

## 🚀 Setup & Deployment

### 1. Local development
Simply open `index.html` in your browser. No build tools, no installs – everything is self‑contained.

### 2. Customise content
- Replace the images in `/images/` with your own.
- Update placeholder links (`#`) for the "Download Now" guide, Terms, and Privacy pages.
- Adjust the contact email address in the `action` attributes of the forms (currently using demo Formspree endpoints). Sign up at [Formspree](https://formspree.io) to get your own form IDs.

### 3. Deploy to production
Upload the entire folder to your web host (e.g., Netlify, Vercel, or any static hosting). Make sure `robots.txt` and `sitemap.xml` are placed in the **root** (same level as `index.html`).

### 4. Verify forms
Test both forms to ensure submissions reach your inbox. If you change the Formspree endpoints, update them in the HTML.

---

## 🔍 SEO Notes

- The `<h1>` is keyword‑rich: *"Children's Party Styling in North County San Diego"*
- The playful tagline is moved to a `<p>` below it – keeping the H1 crawler‑friendly.
- Structured data includes `serviceArea` with a GeoCircle for local search.
- Meta tags for `geo.region` and `geo.placename` reinforce location targeting.

---

## 🎨 Design Highlights

- **Shell cards** – Two distinct SVG clip‑paths (original + new) used in the slider, each with its own conic‑gradient background.
- **Pearl glow** – A bright, multi‑coloured radial gradient behind the card content that intensifies on hover.
- **Floating elements** – The shell cards, Kayte's image, and background bubbles all have gentle up‑down motions.
- **Watercolour texture** – A subtle noise overlay on the shells gives them a hand‑painted feel.

---

## 🙌 Credits

- **Brand & Copy** – Kayte (MerMommy)
- **Development** – [brod3000.com](https://brod3000.com)
- **Fonts** – [Grand Hotel](https://fonts.google.com/specimen/Grand+Hotel) & [Fredoka](https://fonts.google.com/specimen/Fredoka) from Google Fonts
- **SVG Seashells** – Custom‑drawn; clip‑paths generated from Inkscape.

---

## 📄 License

All rights reserved. This website is proprietary to MerMommy Creations. For any reuse, please contact the owner.

---

## 📬 Questions?

Reach out via the [contact form](https://mermommycreations.com/#contact) on the live site – or open an issue if you're the developer.

---

**Made with 💙 and a splash of ocean magic.**
