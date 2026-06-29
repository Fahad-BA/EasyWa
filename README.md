# EasyWa

> wa.me/+966... but easier.

A minimal, fast, self-hosted WhatsApp link opener. Enter a phone number and jump straight into a WhatsApp chat — no contacts, no country-code fiddling. Built as an installable PWA with a dark, mobile-first UI.

![PHP](https://img.shields.io/badge/PHP-%3E%3D7.4-777BB4?logo=php&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)
![PWA](https://img.shields.io/badge/PWA-Installable-5A0FC8?logo=pwa&logoColor=white)
![Self-Hosted](https://img.shields.io/badge/Self_Hosted-Yes-22c55e?logo=homeassistant&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-blue)

---

## ✨ Features

- **One-tap chat** — Type a number, hit Chat, WhatsApp opens instantly
- **Auto country-code normalization** — Local Saudi numbers (`05…` / `5…`) are automatically converted to international format (`9665…`); full international numbers work as-is
- **Installable PWA** — Add to home screen, works offline, launches standalone
- **Dark, mobile-first design** — Built with the [Cairo](https://fonts.google.com/specimen/Cairo) font, optimised for phones
- **Zero dependencies** — No npm, no build step, no frameworks
- **Self-hosted** — Runs on any PHP-capable server

## 🧰 Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Vanilla HTML, CSS, JavaScript (ES6+) |
| Backend | PHP (single-file SPA router) |
| PWA | Service Worker (cache-first), Web App Manifest |
| Fonts | Google Fonts — Cairo |
| Icons | Standard PWA icon set (192px / 512px) |

## 🚀 Installation

### Requirements

- A web server with PHP ≥ 7.4 (Apache, Nginx, or `php -S`)

### Setup

1. **Clone the repo**

   ```bash
   git clone https://github.com/Fahad-BA/EasyWa.git
   cd EasyWa
   ```

2. **Serve with PHP's built-in server (quickest)**

   ```bash
   php -S localhost:8000 router.php
   ```

   Then visit `http://localhost:8000`.

3. **Or deploy to your existing server**

   Copy all files to your web root. For Apache, a basic `.htaccess` that routes through `router.php` is sufficient:

   ```apache
   RewriteEngine On
   RewriteCond %{REQUEST_FILENAME} !-f
   RewriteCond %{REQUEST_FILENAME} !-d
   RewriteRule ^ router.php [L]
   ```

   For Nginx, point `try_files` to `router.php`.

## 📖 Usage

1. Open EasyWa in your browser (or launch from your home screen if installed).
2. Type a phone number — any format works:

   | Input | Normalized to |
   |-------|--------------|
   | `0551234567` | `966551234567` |
   | `551234567` | `966551234567` |
   | `966551234567` | `966551234567` |
   | `14155552671` | `14155552671` |

3. Press **Chat** — WhatsApp opens with that conversation ready.

> **Tip:** Install it as a PWA (Add to Home Screen) for a native-app-like experience.

## 📁 Project Structure

```
EasyWa/
├── index.html          # Main UI (inline CSS + JS for instant load)
├── app.js              # Standalone JS version (normalization + redirect logic)
├── style.css           # Standalone CSS version
├── router.php          # SPA router — serves static files or falls back to index.html
├── service-worker.js   # PWA offline support (cache-first strategy)
├── manifest.json       # Web App Manifest (installable, standalone display)
├── icons/              # PWA icons (192px, 512px, favicon set)
└── README.md
```

## 🔧 How It Works

1. **Phone normalization** — Strips all non-digits, detects Saudi local prefixes (`05`, `5`) and prepends `966`
2. **WhatsApp deep link** — Redirects to `https://wa.me/<normalized_number>`
3. **PWA caching** — Service Worker uses a cache-first strategy for all same-origin assets; external requests (like `wa.me`) always pass through to the network

## 📝 License

Released under the **MIT License**. See [LICENSE](LICENSE) for details.

---

<p align="center">Made with ❤️ by <a href="https://github.com/Fahad-BA">Fahad-BA</a></p>
