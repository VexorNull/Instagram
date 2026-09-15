# Instagram

A fully functional, feature-rich social media web application inspired by Instagram, built with modern web technologies. This project replicates core Instagram experiences—from user profile representation and real-time feed interactions to media displays and lightweight mobile/desktop UI layouts.

---

## 🚀 Project Overview & Features
* **Core Interface (`index.html`)**: Mobile-first responsive layout with dark theme support (`Tailwind CSS`), top action bars, profile stats overview, and fixed bottom navigation.
* **Live Profile & Realtime Sync (`firebaseconfig.js`)**: Integrated with Firebase Realtime Database (`https://instagram-6e0ad-default-rtdb.firebaseio.com`) using modular SDK imports (`10.8.0`) to dynamically sync profile names, follower counts, and avatars.
* **Interactive Feed Elements**: Post cards featuring user handles, image display containers, engagement action icons (heart, comment, share, bookmark), dynamic like status indicators, and timestamp metadata.
* **SEO & Crawler Configuration (`robots.txt`)**: Standard allow-all crawler directives for search indexing compatibility.

---

## 🛠️ Built With
* **HTML5 & Vanilla JavaScript**: Fast single-page DOM rendering and Firebase event listeners.
* **Tailwind CSS**: Utility-first CSS framework configured with custom Instagram gradient color palettes.
* **Firebase Realtime Database**: Realtime data binding via `onValue`.
* **FontAwesome**: Vector icon library for navigation and post controls.

---

## 👤 Credits & Author
* **Developed by**: Tanveer Hussain (`@vexornull`, `@Official.Tanveer.70`)

---

## ⚖️ License
MIT License

---

## 📁 Repository Structure
```text
├── LICENSE
├── README.md
├── firebaseconfig.js
├── index.html
└── robots.txt
