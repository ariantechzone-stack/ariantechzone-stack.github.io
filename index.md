---
layout: default
title: "ARIAN DESIGNS"
---

<!-- HERO SECTION -->
<div class="hero" id="hero">
  <div class="parallax-layer" style="z-index:1;">
    <img
      src="{{ '/assets/images/hero-bg.svg' | relative_url }}"
      alt="Arian Designs hero background"
      loading="eager"
    >
  </div>

  <h1 class="parallax-layer" style="z-index:2;">ARIAN DESIGNS</h1>
  <p class="parallax-layer animated-text" style="z-index:3;">
    Creative Design & Web Projects
  </p>

  <nav class="social-icons">
    <a href="https://github.com/yourusername" target="_blank" rel="noopener" aria-label="GitHub profile">GitHub</a>
    <a href="#" aria-label="Instagram profile">Instagram</a>
    <a href="#" aria-label="Pinterest profile">Pinterest</a>
    <a href="#" aria-label="LinkedIn profile">LinkedIn</a>
    <a href="#" aria-label="Fiverr profile">Fiverr</a>
  </nav>
</div>

<!-- PROJECTS SECTION -->
<section class="projects" id="projects">
  <h2 class="reveal reveal-left">Projects</h2>
  <p class="reveal reveal-right">Selected works</p>

  <div class="projects-grid">
    {% for project in site.data.projects %}
      <div class="project-card reveal {% cycle 'reveal-left', 'reveal-right' %}">
        <div class="card-image">
          <img
            src="{{ '/assets/images/' | append: project.image | relative_url }}"
            alt="{{ project.title }} preview"
            loading="lazy"
          >
          <div class="card-overlay">
            <p>{{ project.tech }}</p>
          </div>
        </div>

        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>

        <a href="{{ project.link }}" class="btn">
          View Project
        </a>
      </div>
    {% endfor %}
  </div>
</section>
