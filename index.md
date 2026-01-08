---
layout: default
title: "ARIAN DESIGNS"
---

<!-- HERO SECTION -->
<div class="hero">
  <!-- Background layer -->
  <div class="parallax-layer" style="z-index:1;">
    <img src="{{ '/assets/images/hero-bg.svg' | relative_url }}" alt="Hero Background">
  </div>

  <!-- Floating text layers -->
  <h1 class="parallax-layer" style="z-index:2;">ARIAN DESIGNS</h1>
  <p class="parallax-layer" style="z-index:3;">Creative Design & Web Projects</p>

  <!-- Social Icons -->
  <nav class="social-icons">
    <a href="#" class="github">GitHub</a>
    <a href="#" class="instagram">Instagram</a>
    <a href="#" class="pinterest">Pinterest</a>
    <a href="#" class="linkedin">LinkedIn</a>
    <a href="#" class="fiverr">Fiverr</a>
  </nav>
</div>

<!-- PROJECTS SECTION -->
<section class="projects">
  {% for project in site.data.projects %}
    <div class="project-card">
      <img src="{{ '/assets/images/' | append: project.image | relative_url }}" alt="{{ project.title }}">
      <h3>{{ project.title }}</h3>
      <p>{{ project.description }}</p>
      <a href="{{ project.link }}" class="btn">View Project</a>
    </div>
  {% endfor %}
</section>
