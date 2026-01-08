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
     <img src="{{ project.image | relative_url }}" alt="{{ project.image_alt }}">
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
</section>


<!-- ================= CONTACT ================= -->
<section id="contact">
  <h2>Contact Me</h2>
  <form action="https://formspree.io/f/XXXXXX" method="POST" class="contact-form">
    <input type="text" name="name" placeholder="Your Name" required>
    <input type="email" name="email" placeholder="Your Email" required>
    <textarea name="message" placeholder="Your Message" required></textarea>
    <button type="submit" class="btn primary">Send Message</button>
  </form>
</section>

<footer class="site-footer">
  <p>© 2026 <strong>ARIAN DESIGNS</strong>. All rights reserved.</p>
</footer>
