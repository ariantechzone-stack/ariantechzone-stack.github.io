---
layout: default
title: Home
---

<div class="hero fade-up">
  <h1>Welcome to ARIAN DESIGNS</h1>
  <p>Creating clean, modern visuals & designs for your projects.</p>
</div>


<div class="container">

<div class="projects">
  <h2 class="fade-up">Projects</h2>
  <div class="project-grid">
    <div class="card project-card">
      <h3>Project 1</h3>
      <p>Short description of project 1.</p>
    </div>
    <div class="card project-card">
      <h3>Project 2</h3>
      <p>Short description of project 2.</p>
    </div>
    <div class="card project-card">
      <h3>Project 3</h3>
      <p>Short description of project 3.</p>
    </div>
  </div>
</div>

<div class="about fade-up">
  <h2>About Me</h2>
  <p>I am a designer focused on minimal, modern, and professional visuals. I create posters, banners, and social media content that stand out.</p>
</div>
<script>
document.addEventListener('DOMContentLoaded', function() {
  // Fade-in footer (already added)
  
  // New: Hero, About, Projects animations
  const fadeElements = document.querySelectorAll('.fade-up, .project-card');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.3 });

  fadeElements.forEach(el => observer.observe(el));
});
</script>


</div>
