---
layout: default
title: "Contact | Amritesh"
description: "Get in touch with Amritesh — for consulting, collaboration, speaking, or story submissions."
permalink: /contact/
---
<div style="padding-top: var(--nav-h);">
<section style="padding: 5rem 0;">
<div class="container">
  <div class="contact-grid">

    <div class="contact-info">
      <span class="section-label">Get In Touch</span>
      <h1 style="font-family:var(--font-display);font-size:clamp(2rem,4vw,2.8rem);font-weight:700;margin:1rem 0 1rem;">Let's Connect</h1>
      <p>Whether you're a researcher, journalist, organisation, or someone with a story to share — reach out.</p>

      <div style="margin-top:2rem;display:flex;flex-direction:column;gap:1.5rem;">
        <div>
          <p style="font-family:var(--font-mono);font-size:0.7rem;color:var(--text-3);margin-bottom:0.5rem;">FOR CONSULTING</p>
          <p style="font-size:0.9rem;color:var(--text-2);">Cybersecurity advisory, GRC, data protection, AI security assessments — visit <a href="https://nordvaultsec.github.io">NordVault Security</a>.</p>
        </div>
        <div>
          <p style="font-family:var(--font-mono);font-size:0.7rem;color:var(--text-3);margin-bottom:0.5rem;">FOR RESEARCH & MEDIA</p>
          <p style="font-size:0.9rem;color:var(--text-2);">Quotes, expert comment, collaboration on research — use the form.</p>
        </div>
        <div>
          <p style="font-family:var(--font-mono);font-size:0.7rem;color:var(--text-3);margin-bottom:0.5rem;">FOR SPEAKING</p>
          <p style="font-size:0.9rem;color:var(--text-2);">Conference keynotes, panels, workshops — include event details in your message.</p>
        </div>
        <div>
          <a href="https://github.com/amritesh-sec" target="_blank" rel="noopener" class="contact-link">
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.37.6.11.82-.26.82-.58v-2.03c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02.005 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.64 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/></svg>
            github.com/amritesh-sec
          </a>
        </div>
      </div>
    </div>

    <div class="contact-forms">
      <div class="form-tabs">
        <button class="form-tab active" onclick="switchTab('contact')">Contact Me</button>
        <button class="form-tab" onclick="switchTab('submit')">Submit a Story</button>
      </div>

      <form class="site-form" id="formContact" action="https://formspree.io/f/mwvwwwod" method="POST">
        <input type="hidden" name="_subject" value="Contact from amritesh-sec.github.io" />
        <div class="form-row">
          <div class="form-group">
            <label>Name</label>
            <input type="text" name="name" placeholder="Your name" required />
          </div>
          <div class="form-group">
            <label>Email</label>
            <input type="email" name="email" placeholder="your@email.com" required />
          </div>
        </div>
        <div class="form-group">
          <label>Organisation (optional)</label>
          <input type="text" name="organisation" placeholder="Company or organisation" />
        </div>
        <div class="form-group">
          <label>Reason for contact</label>
          <select name="reason">
            <option value="">Select...</option>
            <option>Research collaboration</option>
            <option>Media / press inquiry</option>
            <option>Speaking invitation</option>
            <option>Consulting inquiry</option>
            <option>General</option>
          </select>
        </div>
        <div class="form-group">
          <label>Message</label>
          <textarea name="message" rows="5" placeholder="What would you like to discuss?" required></textarea>
        </div>
        <div class="form-group form-check">
          <input type="checkbox" id="gdpr1" name="gdpr" required />
          <label for="gdpr1">I agree to my data being processed for this inquiry. <a href="/privacy/">Privacy Policy</a></label>
        </div>
        <button type="submit" class="btn-submit">Send Message →</button>
      </form>

      <form class="site-form hidden" id="formSubmit" action="https://formspree.io/f/xjgppprk" method="POST">
        <input type="hidden" name="_subject" value="Story Submission — amritesh-sec.github.io" />
        <div class="form-group">
          <label>Your Name</label>
          <input type="text" name="name" placeholder="Name or alias" required />
        </div>
        <div class="form-group">
          <label>Email</label>
          <input type="email" name="email" placeholder="your@email.com" required />
        </div>
        <div class="form-group">
          <label>Article / Story Title</label>
          <input type="text" name="title" placeholder="Working title" required />
        </div>
        <div class="form-group">
          <label>Category</label>
          <select name="category">
            <option value="">Select...</option>
            <option>Cybersecurity</option>
            <option>Data Privacy</option>
            <option>Crypto & Blockchain</option>
            <option>AI Security</option>
            <option>OSINT</option>
            <option>Cloud Security</option>
            <option>Human Risk</option>
            <option>Other</option>
          </select>
        </div>
        <div class="form-group">
          <label>Summary</label>
          <textarea name="summary" rows="4" placeholder="Brief summary (100–300 words)" required></textarea>
        </div>
        <div class="form-group form-check">
          <input type="checkbox" id="orig" name="original" required />
          <label for="orig">This is my original work and I own the rights to it.</label>
        </div>
        <div class="form-group form-check">
          <input type="checkbox" id="gdpr2" name="gdpr" required />
          <label for="gdpr2">I agree to my data being processed. <a href="/privacy/">Privacy Policy</a></label>
        </div>
        <button type="submit" class="btn-submit">Submit Story →</button>
      </form>
    </div>

  </div>
</div>
</section>
</div>
