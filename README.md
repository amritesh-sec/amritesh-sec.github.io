# amritesh-sec.github.io

Personal cybersecurity research hub — articles, tools, case studies, and threat analysis across data privacy, blockchain, AI security, OSINT, and cloud security.

**Live site:** [amritesh-sec.github.io](https://amritesh-sec.github.io)

---

## About

Independent cybersecurity researcher and advisor. This site covers:

- Cybersecurity threat analysis with official source references
- Data protection & privacy (GDPR, UK DPA, CCPA, and emerging law)
- Crypto & blockchain security — exploits, forensics, DeFi
- AI security & jailbreaking research
- OSINT & social engineering
- Cloud & IoT security
- Human risk & cyber awareness

**Target audiences:** US · UK · Germany · Netherlands · Nordic/Scandinavia

---

## Technical Stack

| Layer | Technology |
|-------|-----------|
| Generator | Jekyll (GitHub Pages native) |
| Hosting | GitHub Pages (free) |
| Forms | Formspree |
| SEO | jekyll-seo-tag, Schema.org markup |
| Sitemap | jekyll-sitemap |
| Feed | jekyll-feed (RSS) |
| Analytics | Umami (privacy-first) |

---

## Publishing a New Article

1. Copy `_posts/TEMPLATE-copy-this-for-every-new-post.md`
2. Rename: `_posts/YYYY-MM-DD-article-slug.md`
3. Fill in the front matter (title, date, tags, description)
4. Write your content in Markdown
5. Push to main branch — GitHub builds automatically

```bash
git add .
git commit -m "post: your article title"
git push
```

Live within 2–3 minutes.

---

## Repository Structure

```
amritesh-sec.github.io/
├── _config.yml          # Site configuration
├── _layouts/            # Page templates
├── _includes/           # Reusable components (nav, footer)
├── _posts/              # Blog posts and articles
├── _sass/               # Stylesheets
├── assets/
│   ├── css/             # Compiled CSS
│   ├── js/              # JavaScript
│   └── images/          # Images and media
├── index.html           # Homepage
├── disclaimer.md
├── license.md
├── privacy.md
└── robots.txt
```

---

## License

- **Written content:** [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/)
- **Code:** [MIT License](./license.md)

All research is for educational purposes only. See [Disclaimer](https://amritesh-sec.github.io/disclaimer/).

---

## Contact

[amritesh-sec.github.io/contact](https://amritesh-sec.github.io/contact/)

---

*Also see: [NordVault Security](https://nordvaultsec.github.io) — cybersecurity consulting*
