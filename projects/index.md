---
layout: default
title: Projects
---

Below is a selection of my work—each project includes a short story of the problem, approach, and outcome.

<div class="grid">
{% for p in site.projects %}
  <div class="card">
    <h3><a href="{{ p.url }}">{{ p.title }}</a></h3>
    <p class="muted">{{ p.tagline }}</p>
  </div>
{% endfor %}
</div>