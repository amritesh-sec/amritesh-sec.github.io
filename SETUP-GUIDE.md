# PHASE 1 — SETUP GUIDE
# amritesh-sec.github.io
# Read this once. Follow it once. Done forever.
# ============================================================

## STEP 1 — Create Your GitHub Account & Repo

1. Go to github.com
2. Sign up / log in as: amritesh-sec
3. Go to: github.com/new
4. Repository name: amritesh-sec.github.io
   (EXACT — this is what activates GitHub Pages for free)
5. Set to: Public
6. Do NOT initialise with README (we have our own)
7. Click: Create repository

---

## STEP 2 — Privacy Settings (Do This First)

1. GitHub → Settings → Emails
   ✅ Check: "Keep my email address private"
   ✅ Check: "Block command line pushes that expose my email"
   → Copy your noreply address shown (looks like: 1234567+amritesh-sec@users.noreply.github.com)

2. GitHub → Settings → Password and authentication
   ✅ Enable Two-Factor Authentication (use an authenticator app — NOT SMS)

3. In your terminal, set the noreply email:
   git config --global user.email "YOUR_NOREPLY_ADDRESS_HERE"
   git config --global user.name "Amritesh"

---

## STEP 3 — Set London Timezone

Add this to your ~/.zshrc or ~/.bashrc:
   echo 'export TZ="Europe/London"' >> ~/.zshrc
   source ~/.zshrc

---

## STEP 4 — Push the Site to GitHub

Open terminal in VS Code. Run these commands:

   cd /path/to/amritesh-sec.github.io/
   git init
   git add .
   git commit -m "initial: Phase 1 launch"
   git branch -M main
   git remote add origin https://github.com/amritesh-sec/amritesh-sec.github.io.git
   git push -u origin main

---

## STEP 5 — Enable GitHub Pages

1. Go to your repo → Settings → Pages
2. Source: Select "GitHub Actions"
3. Wait 2-3 minutes
4. Visit: https://amritesh-sec.github.io ✅ LIVE

---

## STEP 6 — Set Up Formspree (Contact Forms)

1. Go to formspree.io → Sign up free
2. Create Form 1: "Contact" → copy the Form ID
3. Create Form 2: "Story Submission" → copy that Form ID
4. In index.html AND contact.md, replace:
   YOUR_FORMSPREE_ID → with your actual ID
   YOUR_FORMSPREE_SUBMIT_ID → with your submission form ID
5. git add . → git commit -m "config: add formspree" → git push

---

## STEP 7 — Google Search Console (SEO)

1. Go to: search.google.com/search-console
2. Add property: https://amritesh-sec.github.io
3. Verify via HTML tag method:
   → Copy the meta tag Google gives you
   → Paste it inside <head> in _layouts/default.html
   → Push to GitHub
   → Click Verify in Search Console
4. Submit sitemap: https://amritesh-sec.github.io/sitemap.xml

---

## STEP 8 — Write Your First Article

1. Copy: _posts/TEMPLATE-copy-this-for-every-new-post.md
2. Rename it: _posts/2026-03-14-your-article-title.md
3. Fill in the front matter (top section)
4. Write your content
5. git add . → git commit -m "post: article title" → git push
6. Live in ~2 minutes ✅

---

## EVERY TIME YOU PUBLISH — Your 3-Command Workflow

   git add .
   git commit -m "post: article title here"
   git push

That's it. Every single time. Nothing else needed.

---

## FOLDER QUICK REFERENCE

_posts/          → All your articles go here
assets/images/   → Screenshots, images for articles
_layouts/        → Page templates (rarely touch)
_includes/       → Nav and footer (touch once to update links)
_config.yml      → Site settings (touch when adding new info)

---

## FUTURE PHASES REMINDER

Phase 2: _config.yml final SEO config + sitemap submission
Phase 3: Article template system (DONE in Phase 1)
Phase 4: cyber-intel-hub content repo
Phase 5: Forms live + GDPR notice
Phase 6: Remaining category repos
Phase 7: Google Search Console + analytics
Phase 8: Final audit
