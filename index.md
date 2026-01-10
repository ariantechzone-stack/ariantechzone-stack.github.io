---
layout: default
title: "Home"
description: "Portfolio of Arian – modern design, social media creatives, and clean web layouts."
---

<!-- HERO SECTION -->
<section class="hero">
  <h1>Welcome to Arian Designs</h1>
  <p>Creating clean, modern, and professional designs.</p>
</section>

<!-- ABOUT SECTION -->
<section id="about" class="about">
  <div class="container">
    <h2>About Me</h2>
    <p>
      Hi, I’m <strong>Arian</strong> — a creative designer focused on building clean,
      modern, and user-friendly digital experiences.
      I enjoy working on visual design, layouts, and branding that feel simple,
      professional, and effective.
    </p>
    <p>
      I’m continuously learning and improving my skills, with a strong interest
      in design systems, social media graphics, and web aesthetics.
    </p>
  </div>
</section>

<!-- SKILLS SECTION -->
<section id="skills" class="skills">
  <div class="container">
    <h2>Skills</h2>
    <div class="skills-grid">
      <div class="skill-card">
        <i class="fas fa-paint-brush"></i>
        <h3>Graphic Design</h3>
        <p>Modern layouts, branding, and visual design.</p>
      </div>
      <div class="skill-card">
        <i class="fas fa-image"></i>
        <h3>Social Media Design</h3>
        <p>Instagram posts, carousels, and creatives.</p>
      </div>
      <div class="skill-card">
        <i class="fas fa-code"></i>
        <h3>Basic Web Design</h3>
        <p>Clean HTML, CSS, and Jekyll layouts.</p>
      </div>
      <div class="skill-card">
        <i class="fas fa-file-excel"></i>
        <h3>Data Entry</h3>
        <p>Accurate data handling and Excel formatting.</p>
      </div>
    </div>
  </div>
</section>

<!-- PROJECTS SECTION -->
<section id="projects" class="projects">
  <div class="container">
    <h2>My Projects</h2>
    <div class="project-cards">
      {% for project in site.data.projects %}
        <div class="project-card">
          {% if project.image %}
            <img src="{{ project.image | relative_url }}" alt="{{ project.name }}">
          {% endif %}
          <h3>{{ project.name }}</h3>
          <p>{{ project.description }}</p>
          {% if project.link %}
            <a href="{{ project.link }}" target="_blank" rel="noopener noreferrer">View Project</a>
          {% endif %}
        </div>
      {% endfor %}
    </div>
  </div>
</section>

<!-- CONTACT SECTION -->
<section id="contact" class="contact">
  <div class="container" style="text-align:center; padding: 100px 20px;">
    <button class="contact-btn" id="contactToggle">Contact Me</button>
    <p style="margin-top:16px; color: var(--text-muted);">
      Or email me at <a href="mailto:ariantechzone@gmail.com" style="color:var(--accent);">ariantechzone@gmail.com</a>
    </p>
  </div>
</section>
