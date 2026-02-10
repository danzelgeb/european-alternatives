# European Alternatives

**Discover European and open-source alternatives to US tech giants.**

A community-curated directory that helps you find software and services built in Europe — with privacy, transparency, and digital sovereignty at their core.

> Your data. Your rules. Your continent.

[**Browse Alternatives**](https://european-alternatives.cloud/) · [**Contributing**](CONTRIBUTING.md) · [**Report an Issue**](https://github.com/TheMorpheus407/european-alternatives/issues)

---

## Why This Exists

Big Tech dominates the tools we use every day — email, cloud storage, messaging, search. Most of these services are US-based, subject to US jurisdiction, and built on business models that treat user data as a product.

Europe has strong privacy laws (GDPR), a growing open-source ecosystem, and talented developers building real alternatives. But finding them is hard. They're scattered across blog posts, Reddit threads, and word of mouth.

**European Alternatives** brings them together in one place. This project exists to:

- **Promote digital sovereignty** — keep your data under European law and jurisdiction
- **Champion privacy-first services** — built with GDPR compliance from the ground up
- **Support open-source software** — transparent, auditable, and community-driven
- **Strengthen the European tech ecosystem** — give visibility to homegrown innovation

This is not about nationalism. It's about choice, transparency, and building a healthier tech landscape.

## Features

- **Browse by category** — Email, Cloud Storage, Messaging, AI, Payments, and 13 more
- **Filter by country, pricing, and open-source status** — find exactly what you need
- **Search across all alternatives** — matches names, descriptions, tags, and replaced services
- **Grid and list views** — switch between compact overview and detailed display
- **Shareable category and search filters** — category and search term are stored in the URL for direct linking
- **Responsive design** — works on desktop, tablet, and mobile
- **No tracking, no cookies** — the site itself respects the privacy it advocates for

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | React 19 + TypeScript |
| Build Tool | Vite 7 |
| Routing | React Router v7 |
| Animations | Framer Motion |
| Styling | Custom CSS design system (dark theme) |
| Fonts | Oswald (headings) + Roboto (body) via Google Fonts |
| Flags | [flag-icons](https://github.com/lipis/flag-icons) v7.5.0 via CDN |
| Hosting | Hostinger (primary) + GitHub Pages (secondary) |
| CI/CD | GitHub Actions |

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Local Development

```bash
# Clone the repository
git clone https://github.com/TheMorpheus407/european-alternatives.git
cd european-alternatives

# Install dependencies
npm install

# Start the dev server
npm run dev
```

The site will be available at `http://localhost:5173`.

### Other Commands

```bash
npm run build     # Type-check and build for production
npm run preview   # Preview the production build locally
npm run lint      # Run ESLint
```

## Project Structure

```
src/
├── components/          # React components
│   ├── App.tsx          # Router setup
│   ├── Layout.tsx       # Header + Footer wrapper
│   ├── LandingPage.tsx  # Homepage with featured alternatives
│   ├── BrowsePage.tsx   # Search and filter page
│   ├── AlternativeCard.tsx  # Individual alternative display
│   └── Filters.tsx      # Search, filter, and sort controls
├── data/
│   ├── alternatives.ts  # The catalogue — add new alternatives here
│   ├── categories.ts    # Category definitions
│   └── index.ts         # Re-exports
├── types/
│   └── index.ts         # TypeScript interfaces
├── index.css            # Full design system
└── main.tsx             # Entry point
```

## Contributing

Contributions are what make this project grow. Whether you want to **add an alternative**, **fix a bug**, **improve the design**, or **suggest a new category** — you're welcome here.

See [**CONTRIBUTING.md**](CONTRIBUTING.md) for the full guide, including:

- How to add a new European alternative (the most common contribution)
- How to contribute code and design changes
- Coding standards and commit conventions
- Design system guidelines

The fastest way to contribute: add a European alternative you know and love to `src/data/alternatives.ts`.

## License

This project is licensed under the **GNU Affero General Public License v3.0** — see the [LICENSE](LICENSE) file for details.

In short: you can use, modify, and distribute this software freely, but any modified version that runs as a network service must also make its source code available. This ensures the project and its derivatives remain open.

## Credits

Created by [**Morpheus**](https://the-morpheus.de) as part of a mission to strengthen Europe's digital independence.

- [Patreon](https://www.patreon.com/themorpheus) — support the project
- [GitHub](https://github.com/TheMorpheus407) — more projects
- [Website](https://the-morpheus.de) — The Morpheus Tutorials

---

*Built with conviction that Europe deserves great software — and that great software deserves to be found.*
