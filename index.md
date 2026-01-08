---
layout: default
title: "ARIAN DESIGNS | Portfolio"
---

<div class="hero">
  <div class="parallax-layer">
    <img src="{{ '/assets/images/hero-bg.svg' | relative_url }}" alt="Background">
  </div>
  <h1>ARIAN DESIGNS</h1>
  <p class="animated-text"></p>
</div>

<section class="projects">
  <h2>Selected Projects</h2>
  <div class="project-grid">
    {% for project in site.data.projects %}
    <div class="project-card" data-tilt>
      <img src="{{ '/assets/images/' | append: project.image | relative_url }}" alt="{{ project.title }}">
      <h3>{{ project.title }}</h3>
      <p>{{ project.tech }}</p>
      <a href="{{ project.link }}" class="btn">View Project</a>
    </div>
    {% endfor %}
  </div>
</section>
