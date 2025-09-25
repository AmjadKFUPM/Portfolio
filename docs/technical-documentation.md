# Technical Documentation – Portfolio Project  

## Overview  
This project is a personal portfolio website designed to showcase skills, projects, and contact details. It is built using **HTML, CSS, and JavaScript**, with dynamic features.  

- **index.html** – main structure of the website.
- **styles.css** – styling for layout, responsiveness, theming, and animations.
- **script.js** – configuration, DOM manipulation, and logic for projects, navigation, theme, and contact form. 

---

## File Structure  
```
assignment-1/
├── README.md
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── assets/
│   └── images/
├── docs/
    ├── ai-usage-report.md
    └── technical-documentation.md

```

---

## index.html  
Defines the layout of the site with sections:  

- **Header** – Logo, navigation menu (desktop & mobile), theme toggle.  
- **Hero Section** – Greeting, title, tagline, scroll indicator.  
- **About Section** – Profile, about text, skills grid.  
- **Projects Section** – Placeholder for dynamically rendered project cards.  
- **Contact Section** – Contact info and form.  
- **Footer** – Branding, quick links, social links, contact info.  

External libraries:  
- Lucide icons (`https://unpkg.com/lucide@latest`).
- Custom `script.js` handles dynamic rendering.

---

## styles.css  
Contains theming, responsive design, and UI styling.  

### Key Features  
- **CSS Variables** for colors, spacing, font sizes, shadows, transitions.  
- **Dark/Light Mode** variables toggled by adding `.light` class on `<body>`.  
- **Header** – fixed with backdrop blur.  
- **Hero** – centered with animated background gradient.  
- **Skills Grid** – responsive card layout.  
- **Projects** – hover effects, overlays, badges.  
- **Contact Section** – cards, form styling.  
- **Footer** – responsive grid and social links.  
- **Animations** – pulse (brightness), bounce (scroll indicator), and fade for reveals.  
- **Responsive Breakpoints**:  
  - Tablet (`max-width: 768px`) → stacked layout.  
  - Mobile (`max-width: 480px`) → smaller profile and simplified layout.  

---

## script.js  

### Configuration (`PERSON` object)  
- **about** – heading, paragraphs, skills (with Lucide icons).  
- **projects** – each project contains:  
  ```js
  {
    title: "Project Title",
    description: "Summary",
    image: "image-url",
    tech: ["Tech1", "Tech2"],
    links: { live: "url", repo: "url" },
    featured: true/false
  }
  ```
- **contact info** – email, phone, location.  
- **social links** – GitHub, LinkedIn, Twitter.  

### Functions  
- `renderProjects()` – dynamically generates project cards.  
  - Adds featured badge if `featured: true`.  
  - Renders only available links.
- `applyPersonConfig()` – injects `PERSON` data into DOM (about section, skills, projects, footer).  
- `ThemeManager` – handles dark/light mode toggle and theme icons (moon/sun).  
- `NavigationManager` – mobile menu toggle, nav link scroll, header background on scroll.  
- `GreetingManager` – sets greeting text based on time of day.  
- `ContactFormManager` – handles form submission simulation, loading state, and notifications.  
- Utility functions:  
  - `scrollToSection(id)` – smooth scroll with header offset.  
  - `updateFooterYear()` – auto-updates copyright.  
  - `initScrollAnimations()` – intersection observer for reveal effects.  
  - `initParallaxEffect()` – parallax scrolling background.  

---

## Dynamic Features  
1. **Theme Toggle** – switches between dark/light with persistence in `localStorage`.  
2. **Responsive Navigation** – desktop nav + mobile menu with animated icon toggle.  
3. **Dynamic Projects** – loaded from `PERSON.projects`.  
4. **Lucide Icons** – dynamically rendered via `<i data-lucide="..."></i>`.  
5. **Contact Form** – submission simulation with notification system.  
6. **Animations** – reveal-on-scroll, hover effects.  