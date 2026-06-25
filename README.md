# 🧜‍♀️ MerMommy Creations - Luxury Party Curation

Welcome to the official repository for **MerMommy Creations**, a premium children's party styling and event curation brand based in North County San Diego.

---

## ✨ Overview

MerMommy Creations is a boutique children's party design studio that transforms ordinary celebrations into extraordinary memories. From themed decor and custom apparel to full-service event coordination, we bring magical, stress-free experiences to families across North County San Diego.

This website serves as the brand's digital home — a whimsical, storybook-inspired experience that reflects our creative, mom-led approach to party curation.

---

## 🎨 Design Philosophy

**Storybook Experience Over Corporate Website**

The site is designed to feel like an underwater adventure, not a business landing page. Key design principles include:

- **Brutalist-lite aesthetic** — Clean, architectural structure with no rounded corners, using bold borders and intentional spacing for a premium, editorial feel
- **Ocean-inspired color palette** — Soft pastel gradients (lavender → teal → aqua) with accent colors `#8B6C9E` (purple) and `#69DBD3` (teal)
- **Glass-morphism elements** — Transparent, blurred backgrounds create depth without heaviness
- **Storybook narrative** — The user follows a mermaid guide through the site, discovering themes and treasures along the way
- **Premium typography** — Custom Magnolia Sky font for signatures, Fredoka for clean body text

---

## ✨ Features

### Core Functionality

- **Splash Page Hero** — Large, animated logo with a bold "The Party Starts Soon!" call-to-action
- **Founding Families Program** — Limited-time offer for early adopters with exclusive benefits
- **Adventure Themes** — Four signature party themes displayed as destination posters (Lemonade Stand, Palm Trees & Cheeseburgers, Tie-Dye Studio, Sea Shell Spa)
- **Dream Themes Slider** — Endless carousel showcasing 11 future themes (Flamingo, Watermelon, Pineapple, Taco, Frozen, Enchanted Garden, Farmers Market, Little Deer, Rainbow, Baby Shower, Bridal Shower)
- **Treasures In Every Adventure** — Infinite card slider highlighting value-added services
- **More Than Party Decor** — Masonry grid of additional services (Custom Apparel, Party Signage, Birthday Outfits, etc.)
- **My Tail (About)** — Storybook-style section featuring a personal photo and brand story
- **Add-On Services** — Four premium add-ons (The MerMommy Stay, Pearl Package, Treasure Trove, Cakesmash Setup)
- **Waitlist / Launch List** — Formspree-connected signup form with success state
- **Instagram Section** — Placeholder for Instagram feed integration (coming soon)
- **Party Guide** — CTA for downloadable PDF guide
- **How The Magic Happens** — 6-step process displayed as a wave path
- **Trust Bar** — Cleanly organized credentials (service area, licensing, etc.)
- **Contact Form** — Fully functional booking inquiry form with Formspree integration

### Interactive & Visual Features

- **MotionPath Guide** — Animated mermaid character swims down the page as you scroll, leading you through the adventure
- **Particle System** — Floating bubbles and sparkles (✨) create an immersive underwater atmosphere
- **GSAP Animations** — Scroll-triggered fade-ins, floating icons, and smooth entrances
- **Hidden Discoveries** — Clickable pearls, stars, and treasure chests reveal surprise messages (small interactive delights for users)
- **Infinite Sliders** — Two endless carousels for Treasures and Dream Themes

---

## 🛠️ Technology Stack

| Technology | Purpose |
|------------|---------|
| **HTML5** | Semantic markup |
| **CSS3** | Custom styles, brutalist design, glass-morphism |
| **JavaScript (ES6)** | Interactivity, animations, form handling |
| **GSAP 3.12.5** | Advanced animations, ScrollTrigger, MotionPath |
| **ScrollTrigger** | Scroll-based animations and triggers |
| **MotionPathPlugin** | Guided mermaid character animation |
| **Formspree** | Form submission handling (inquiry + waitlist) |
| **Google Fonts** | Fredoka (body), Grand Hotel (fallback) |
| **Magnolia Sky** | Custom premium font for signatures |

---

## 📁 File Structure

```
MerMommyCreations/
├── index.html              # Single-page application (all-in-one)
├── README.md               # Project documentation
├── images/
│   ├── MerMommyCreations.png  # Brand logo (hero)
│   ├── mommy.png              # Founder photo (My Tail section)
│   └── [other assets]
└── Magnolia Sky/           # Custom font folder
    ├── magnolia_sky.ttf
    ├── magnolia_sky.otf
    └── magnolia_sky_alt.ttf
```

---

## 🚀 Getting Started

### Prerequisites

- Web browser (Chrome, Safari, Firefox, etc.)
- Text editor (VS Code, Sublime Text, etc.)
- Basic knowledge of HTML/CSS for customization

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/benrodriguez/MerMommyCreations.git
   ```

2. **Open the project**
   ```bash
   cd MerMommyCreations
   ```

3. **Launch locally**
   - Open `index.html` in your browser
   - Or use Live Server in VS Code for hot-reload

### Customization

| Element | File Location | How to Change |
|---------|---------------|---------------|
| **Logo** | `images/MerMommyCreations.png` | Replace with your own image |
| **Founder Photo** | `images/mommy.png` | Replace with your own image |
| **Theme Content** | Search `.poster-card` in `index.html` | Update text, icons, features |
| **Dream Themes** | Search `.theme-card` in `index.html` | Add/remove themes in the slider |
| **Brand Colors** | CSS variables `:root` | Update `--purple`, `--teal` |
| **Formspree Endpoints** | `action="https://formspree.io/f/..."` | Replace with your form IDs |
| **Font Path** | `@font-face` in `<style>` | Update path if folder name changes |

### Environment Variables / Configuration

**Formspree Setup:**
1. Create two forms at [Formspree](https://formspree.io):
   - Inquiry form: `https://formspree.io/f/mrewgzkg`
   - Waitlist form: `https://formspree.io/f/xlgygvpw`
2. Replace the `action` URLs in `index.html` if needed

**Magnolia Sky Font:**
1. Place your font files in a folder named `Magnolia Sky/`
2. Ensure the path matches the `@font-face` declaration

---

## 📱 Responsive Breakpoints

| Breakpoint | Layout | Notes |
|------------|--------|-------|
| **Desktop (1024px+)** | 4-column grid (posters), 6-column wave path | Full experience |
| **Tablet (768px-1024px)** | 2-column grids, 3-column wave path | Adjusted spacing |
| **Mobile (600px-768px)** | Single-column, stacked sections | Optimized for touch |
| **Small Mobile (<600px)** | Single-column, smaller typography | Maximum readability |

---

## 🐛 Known Limitations

- **No e-commerce** — This is a lead-generation site, not a store
- **No real-time inventory** — All theme packages are informational only
- **Instagram feed** — Currently placeholder; requires API integration
- **Party Guide PDF** — Link is placeholder; needs actual PDF file

---

## 📈 Future Roadmap

| Phase | Feature | Status |
|-------|---------|--------|
| **v2.0** | Current release — Storybook UX, Dream Themes Slider | ✅ Complete |
| **v2.1** | Real Instagram feed integration | Pending |
| **v2.2** | Party Guide PDF download | Pending |
| **v2.3** | Founding Families program launch | Pending |
| **v3.0** | Real photography & portfolio gallery | Future |
| **v3.1** | Online booking system | Future |

---

## 🤝 Contributing

This is a private repository for the MerMommy Creations brand. For any changes or updates, please contact the repository owner.

**For developers:**
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request for review

---

## 📄 License

© 2026 MerMommy Creations. All rights reserved.

This is proprietary software. Unauthorized reproduction, distribution, or modification is strictly prohibited.

---

## 🌐 Live Site

Visit the live site: [mermommycreations.com](https://mermommycreations.com)

---

## 👩‍🎨 Credits

| Element | Credit |
|---------|--------|
| **GSAP Animation** | [GreenSock](https://greensock.com/) |
| **Form Handling** | [Formspree](https://formspree.io/) |
| **Fonts** | Google Fonts & Magnolia Sky (custom) |
| **Mermaid Guide** | Custom SVG design |
| **Color Palette** | Adobe Capture — inspired by ocean tones |

---

## 📝 Version History

| Version | Date | Notes |
|---------|------|-------|
| **2.0** | June 2026 | Storybook UX overhaul, Dream Themes slider, Brutalist design |
| **1.0** | May 2026 | Initial launch — "Coming Soon" splash page |

---

*Made with 💜 and a whole lot of imagination.*
