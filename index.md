---
layout: default
title: Home
---

<!-- HERO SECTION -->
<div class="hero fade-up">
  <div class="hero-bg"></div>
  <h1 class="gradient-text">Welcome to ARIAN DESIGNS</h1>
  <p class="hero-subtext">Modern, minimal & professional visuals</p>
</div>  

<div class="container">

  <!-- PROJECTS SECTION -->
  <div class="projects fade-up">
    <h2>Projects</h2>
    <div class="project-grid">
      {% for project in site.data.projects %}
      <div class="project-card">
        <img src="{{ project.image }}" alt="{{ project.title }}">
        <div class="project-content">
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
        </div>
      </div>
      {% endfor %}
    </div>
  </div>

  <!-- ABOUT SECTION -->
  <div class="about fade-up">
    <h2>About</h2>
    {% for line in site.data.about.description %}
      <p>{{ line }}</p>
    {% endfor %}
  </div>

  <div class="section-divider"></div>
</div>
