---
layout: default
title: "Home"
---

<section class="hero">
  <h1>Welcome to Arian Designs</h1>
  <p>Creating clean, modern, and professional designs.</p>
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
