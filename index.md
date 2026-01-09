---
layout: default
title: "Home"
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

<section id="projects" class="projects">
  <h2>My Projects</h2>
  <div class="project-cards">
    {% for project in site.data.projects %}
      <div class="project-card">
        <img src="{{ project.image }}" alt="{{ project.name }}">
        <h3>{{ project.name }}</h3>
        <p>{{ project.description }}</p>
        <a href="{{ project.link }}">View Project</a>
      </div>
    {% endfor %}
  </div>
</section>
