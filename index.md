---
layout: default
title: ARIAN DESIGNS
---

<!-- HERO SECTION -->
<section class="hero" id="home">
  <h1>ARIAN DESIGNS</h1>
  <p id="hero-text">Clean, modern visual design for posters & social media</p>
  <div class="hero-actions">
    <a href="#projects" class="btn primary">View Work</a>
    <a href="https://www.linkedin.com/in/arian-varx-0660b539b" target="_blank" class="btn outline">Hire Me</a>
  </div>
</section>

<!-- PROJECTS SECTION -->
<section id="projects">
  <h2>Projects</h2>
  <div class="project-grid">
    {% for project in site.data.projects %}
    <div class="project-card" data-tilt data-tilt-max="10" data-tilt-speed="400">
      <img src="{{ '/assets/images/' | append: project.image }}" alt="{{ project.title }}">
      <div class="project-info">
        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>
        <span class="project-tag">{{ project.category }}</span>
      </div>
    </div>
    {% endfor %}
  </div>
</section>

<!-- ABOUT SECTION -->
<section id="about">
  <h2>About Me</h2>
  <p class="about-text">
    I’m <strong>Arian</strong>, a detail-focused digital designer specializing in social media visuals, posters, and clean modern layouts.
  </p>
</section>

<!-- SOCIALS SECTION -->
<section class="socials">
  <a href="https://github.com/ariantechzone-stack" target="_blank" class="social-link github" aria-label="GitHub"><span>GitHub</span></a>
  <a href="https://instagram.com/_arian.designs_" target="_blank" class="social-link instagram" aria-label="Instagram"><span>Instagram</span></a>
  <a href="https://pinterest.com/ariantech" target="_blank" class="social-link pinterest" aria-label="Pinterest"><span>Pinterest</span></a>
  <a href="https://www.fiverr.com/r_kumar101/modern-instagram-posts-and-social-media-graphics" target="_blank" class="social-link fiverr" aria-label="Fiverr"><span>Fiverr</span></a>
  <a href="https://www.linkedin.com/in/arian-varx-0660b539b" target="_blank" class="social-link linkedin" aria-label="LinkedIn"><span>LinkedIn</span></a>
</section>

<!-- CONTACT SECTION -->
<section id="contact">
  <h2>Contact Me</h2>
  <form action="https://formspree.io/f/XXXXXX" method="POST" class="contact-form">
    <input type="text" name="name" placeholder="Your Name" required>
    <input type="email" name="email" placeholder="Your Email" required>
    <textarea name="message" placeholder="Your Message" required></textarea>
    <button type="submit" class="btn primary">Send Message</button>
  </form>
</section>

<!-- FOOTER -->
<footer class="site-footer">
  <p>© 2026 <strong>ARIAN DESIGNS</strong>. All rights reserved.</p>
</footer>

<!-- MOBILE FLOAT -->
<a href="https://www.linkedin.com/in/arian-varx-0660b539b" class="mobile-float" aria-label="LinkedIn" target="_blank">in</a>
