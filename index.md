---
layout: default
title: "Home"
description: "Portfolio of Arian – modern design, social media creatives, and clean web layouts."
---

<!-- ===============================
     HERO SECTION
================================ -->
<section class="hero">
  <div class="hero-inner">
    <h1>Welcome to Arian Designs</h1>
    <p>Creating clean, modern, and professional designs.</p>
  </div>
</section>

<!-- ===============================
     ABOUT SECTION
================================ -->
<section id="about" class="about">
  <div class="container">
    <h2>About Me</h2>
    <p>
      Hi, I’m <strong>Arian</strong> — a creative designer focused on building clean,
      modern, and user-friendly digital experiences.
    </p>
    <p>
      I enjoy working on visual design, layouts, and branding that feel simple,
      professional, and effective. I’m continuously learning and improving my skills,
      with a strong interest in design systems, social media graphics, and web aesthetics.
    </p>
  </div>
</section>

<!-- ===============================
     SKILLS SECTION
================================ -->
<section id="skills" class="skills">
  <div class="container">
    <h2>Skills</h2>

    <div class="skills-grid">
      <div class="skill-card">
        <i class="fas fa-paint-brush" aria-hidden="true"></i>
        <h3>Graphic Design</h3>
        <p>Modern layouts, branding, and visual design.</p>
      </div>

      <div class="skill-card">
        <i class="fas fa-image" aria-hidden="true"></i>
        <h3>Social Media Design</h3>
        <p>Instagram posts, carousels, and creatives.</p>
      </div>

      <div class="skill-card">
        <i class="fas fa-code" aria-hidden="true"></i>
        <h3>Basic Web Design</h3>
        <p>Clean HTML, CSS, and Jekyll layouts.</p>
      </div>

      <div class="skill-card">
        <i class="fas fa-file-excel" aria-hidden="true"></i>
        <h3>Data Entry</h3>
        <p>Accurate data handling and Excel formatting.</p>
      </div>
    </div>
  </div>
</section>

<!-- ===============================
     PROJECTS SECTION
================================ -->
<section id="projects" class="projects">
  <div class="container">
    <h2>My Projects</h2>

    <div class="project-cards">
      {% for project in site.data.projects %}
        <div class="project-card">
          {% if project.image %}
            <img
              src="{{ project.image | relative_url }}"
              alt="{{ project.name }} project preview">
          {% endif %}

          <h3>{{ project.name }}</h3>
          <p>{{ project.description }}</p>

          {% if project.link %}
            <a
              href="{{ project.link }}"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View {{ project.name }} project">
              View Project
            </a>
          {% endif %}
        </div>
      {% endfor %}
    </div>
  </div>
</section>
