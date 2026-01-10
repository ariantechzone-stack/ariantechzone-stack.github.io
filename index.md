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
    <h1>
      Welcome to <span class="brand-text">Arian Designs</span>
    </h1>
    <p class="hero-subtext">
      Creating clean, modern, and professional digital designs.
    </p>
  </div>
</section>


<!-- ===============================
     ABOUT SECTION
================================ -->
<section id="about" class="about">
  <div class="container about-grid">

    <!-- Left: Text -->
    <div class="about-text">
      <h2>About Me</h2>

      <p class="about-intro">
        Hi, I’m <strong>Arian</strong> — a creative designer focused on building
        clean, modern, and user-friendly digital experiences.
      </p>

      <p>
        I enjoy working on visual design, layouts, and branding that feel simple,
        professional, and effective. I’m continuously learning and improving my
        skills, with a strong interest in design systems, social media graphics,
        and web aesthetics.
      </p>
    </div>

    <!-- Right: Highlight Card -->
    <div class="about-card">
      <h3>What I Do</h3>
      <ul>
        <li>🎨 Graphic & Social Media Design</li>
        <li>🧱 Clean Layout & Visual Systems</li>
        <li>💻 Basic Web Design (HTML, CSS, Jekyll)</li>
        <li>📊 Accurate Data Entry & Formatting</li>
      </ul>
    </div>

  </div>
</section>


<!-- ===============================
     SKILLS SECTION
================================ -->
<section id="skills" class="skills">
  <div class="container">

    <div class="section-header">
      <h2>Skills</h2>
      <p class="section-subtitle">
        Tools and abilities I use to create clean, effective digital experiences.
      </p>
    </div>

    <div class="skills-grid">

      <div class="skill-card">
        <div class="skill-icon">
          <i class="fas fa-paint-brush"></i>
        </div>
        <h3>Graphic Design</h3>
        <p>Modern layouts, branding systems, and visual storytelling.</p>
      </div>

      <div class="skill-card">
        <div class="skill-icon">
          <i class="fas fa-image"></i>
        </div>
        <h3>Social Media Design</h3>
        <p>Instagram posts, carousels, and platform-ready creatives.</p>
      </div>

      <div class="skill-card">
        <div class="skill-icon">
          <i class="fas fa-code"></i>
        </div>
        <h3>Basic Web Design</h3>
        <p>Clean HTML, CSS, and structured Jekyll layouts.</p>
      </div>

      <div class="skill-card">
        <div class="skill-icon">
          <i class="fas fa-file-excel"></i>
        </div>
        <h3>Data Entry</h3>
        <p>Accurate data handling, formatting, and organization.</p>
      </div>

    </div>
  </div>
</section>


<!-- ===============================
     PROJECTS SECTION
================================ -->
<section id="projects" class="projects">
  <div class="container">

    <div class="section-header">
      <h2>Projects</h2>
      <p class="section-subtitle">
        A selection of my recent design and web work.
      </p>
    </div>

    <div class="projects-grid">
      {% for project in site.data.projects %}
      <article class="project-card">

    <div class="project-image gradient-{{ forloop.index }}"></div>


        <div class="project-content">
          <h3>{{ project.name }}</h3>
          <p>{{ project.description }}</p>

          {% if project.link %}
          <a
            href="{{ project.link }}"
            target="_blank"
            rel="noopener noreferrer"
            class="project-link">
            View Project →
          </a>
          {% endif %}
        </div>

      </article>
      {% endfor %}
    </div>

  </div>
</section>
