---
layout: default
title: ARIAN DESIGNS
---

<header class="site-header">
  <nav class="nav">
    <a href="#projects" class="nav-link">Projects</a>
    <a href="#about" class="nav-link">About</a>
    <a href="#contact" class="nav-link">Contact</a>
    <button id="themeToggle" aria-label="Toggle theme">🌙</button>
  </nav>
</header>

<!-- ================= HERO ================= -->
<section class="hero" id="home">
  <h1>ARIAN DESIGNS</h1>
  <p id="hero-text">Clean, modern visual design for posters & social media.</p>

  <div class="hero-actions">
    <a href="#projects" class="btn primary">View Work</a>
    <a href="https://www.linkedin.com/in/arian-varx-0660b539b" target="_blank" class="btn outline">
      Hire Me
    </a>
  </div>
</section>

<!-- ================= PROJECTS ================= -->
<section id="projects">
  <h2>Projects</h2>

  <div class="project-grid">
    {% for project in site.data.projects %}
    <div class="project-card">
      <img src="{{ project.image }}" alt="{{ project.image_alt }}">
      <div class="project-info">
        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>
        <span class="project-tag">{{ project.category }}</span>
      </div>
    </div>
    {% endfor %}
  </div>
</section>

<!-- ================= ABOUT ================= -->
<section id="about">
  <h2>About Me</h2>

  <p class="about-text">
    I’m <strong>Arian</strong>, a detail-focused digital designer specializing in
    social media visuals, posters, and clean modern layouts.
  </p>

  <div class="stats">
    <div class="stat">
      <h3>120+</h3>
      <span>Designs Created</span>
    </div>
    <div class="stat">
      <h3>3+</h3>
      <span>Years Learning</span>
    </div>
    <div class="stat">
      <h3>99%</h3>
      <span>Accuracy</span>
    </div>
  </div>
</section>

<!-- ================= SOCIALS ================= -->
<section class="socials">

  <!-- GitHub -->
  <a href="https://github.com/ariantechzone-stack" target="_blank"
     class="social-link github" aria-label="GitHub">
    <span>GitHub</span>
  </a>

  <!-- Instagram -->
  <a href="https://instagram.com/_arian.designs_" target="_blank"
     class="social-link instagram" aria-label="Instagram">
    <span>Instagram</span>
  </a>

  <!-- Pinterest -->
  <a href="https://pinterest.com/ariantech" target="_blank"
     class="social-link pinterest" aria-label="Pinterest">
    <span>Pinterest</span>
  </a>

  <!-- LinkedIn -->
  <a href="https://www.linkedin.com/in/arian-varx-0660b539b" target="_blank"
     class="social-link linkedin" aria-label="LinkedIn">
    <span>LinkedIn</span>
  </a>

</section>

<!-- ================= CONTACT ================= -->
<section id="contact">
  <h2>Contact Me</h2>

  <form
    action="https://formspree.io/f/XXXXXX"
    method="POST"
    class="contact-form">

    <input type="text" name="name" placeholder="Your Name" required>
    <input type="email" name="email" placeholder="Your Email" required>
    <textarea name="message" placeholder="Your Message" required></textarea>

    <button type="submit" class="btn primary">Send Message</button>
  </form>
</section>

<!-- ================= FOOTER ================= -->
<footer class="site-footer">
  <p>© 2026 <strong>ARIAN DESIGNS</strong>. All rights reserved.</p>
</footer>

<!-- ================= MOBILE FLOAT (LINKEDIN) ================= -->
<a href="https://www.linkedin.com/in/arian-varx-0660b539b"
   class="mobile-float"
   aria-label="LinkedIn"
   target="_blank">
  in
</a>
