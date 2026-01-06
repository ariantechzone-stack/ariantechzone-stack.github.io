---
layout: default
title: Home
---

<!-- ================= HERO SECTION ================= -->
<section class="hero fade-up">
  <div class="hero-bg"></div>

  <div class="hero-inner">
    <h1 class="gradient-text">ARIAN DESIGNS</h1>
    <p class="hero-subtext">
      Modern, minimal & professional visuals
    </p>
  </div>
</section>

<!-- ================= MAIN CONTENT ================= -->
<main class="container">

  <!-- ========== PROJECTS SECTION ========== -->
  <section class="projects fade-up">
    <header class="section-header">
      <h2>Selected Projects</h2>
      <p class="section-subtext">
        Clean visual systems designed for clarity and impact
      </p>
    </header>

    <div class="project-grid">
      {% for project in site.data.projects %}
      <article class="project-card">
        
        <div class="project-image">
          <img src="{{ project.image }}" alt="{{ project.title }}">
        </div>

        <div class="project-content">
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
        </div>

      </article>
      {% endfor %}
    </div>
  </section>

  <!-- ========== SECTION DIVIDER ========== -->
  <div class="section-divider"></div>

  <!-- ========== ABOUT SECTION ========== -->
  <section class="about fade-up">
    <header class="section-header">
      <h2>About</h2>
    </header>

    <div class="about-content">
      {% for line in site.data.about.description %}
        <p>{{ line }}</p>
      {% endfor %}
    </div>
  </section>

</main>
