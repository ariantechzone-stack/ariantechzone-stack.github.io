---
layout: default
title: "Home"
description: "Portfolio of Arian – modern design, social media creatives, and clean web layouts."
---

<section class="hero">
  <h1>Welcome to Arian Designs</h1>
  <p>Creating clean, modern, and professional designs.</p>
</section>

<section id="about" class="about">
  <div class="about-container">
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

<section id="skills" class="skills">
  <div class="skills-container">
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

<section id="projects" class="projects">
  <h2>My Projects</h2>
<div class="project-cards">
  {% if site.data.projects and site.data.projects.size > 0 %}
    {% for project in site.data.projects %}
      <div class="project-card">
        {% if project.image %}
          <img 
            src="{{ project.image | relative_url }}" 
            alt="{{ project.name | default: 'Project preview' }}">
        {% endif %}
        <h3>{{ project.name }}</h3>
        <p>{{ project.description }}</p>
        {% if project.link %}
          <a 
            href="{{ project.link }}" 
            target="_blank" 
            rel="noopener noreferrer"
            class="btn">
            View Project
          </a>
        {% endif %}
      </div>
    {% endfor %}
  {% else %}
    <p style="text-align:center; opacity:0.7;">
      Projects coming soon.
    </p>
  {% endif %}
</div>

</section>

