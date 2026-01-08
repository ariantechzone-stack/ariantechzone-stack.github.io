---
layout: default
title: "ARIAN DESIGNS"
---

<!-- HERO SECTION -->
<div class="hero" id="hero">
  <div class="parallax-layer" style="z-index:1;">
    <img src="{{ '/assets/images/hero-bg.svg' | relative_url }}" alt="Hero Background">
  </div>

  <h1 class="parallax-layer" style="z-index:2;">ARIAN DESIGNS</h1>
  <p class="parallax-layer animated-text" style="z-index:3;"></p>

  <nav class="social-icons">
    <a href="#" class="github" aria-label="GitHub profile">GitHub</a>
    <a href="#" class="instagram" aria-label="Instagram profile">Instagram</a>
    <a href="#" class="pinterest" aria-label="Pinterest profile">Pinterest</a>
    <a href="#" class="linkedin" aria-label="LinkedIn profile">LinkedIn</a>
    <a href="#" class="fiverr" aria-label="Fiverr profile">Fiverr</a>
  </nav>
</div>

<!-- PROJECTS SECTION -->
<section class="projects" id="projects">
  <h2 class="reveal reveal-left">Projects</h2>
  <p class="reveal reveal-right">Selected works</p>

  {% for project in site.data.projects %}
    <div class="project-card reveal {% cycle 'reveal-left', 'reveal-right' %}">
      <div class="card-image">
        <img src="{{ '/assets/images/' | append: project.image | relative_url }}" alt="{{ project.title }}">
        <div class="card-overlay">
          <p>{{ project.tech }}</p>
        </div>
      </div>
      <h3>{{ project.title }}</h3>
      <p>{{ project.description }}</p>
      <a href="{{ project.link }}" class="btn">View {{ project.title }}</a>
    </div>
  {% endfor %}
</section>
