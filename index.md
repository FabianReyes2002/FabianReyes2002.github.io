---
layout: default
title: Home
---

Hi, I’m **Fabian Reyes**, Data & AI consultant focused on **data visualization** and **analytics engineering**. I turn messy data into clear, compelling visuals and dashboards.

### Featured projects
<div class="grid">
{% assign featured = site.projects | where_exp:'p','p.featured == true' %}
{% for p in featured %}
  <div class="card">
    <h3><a href="{{ p.url }}">{{ p.title }}</a></h3>
    <p class="muted">{{ p.tagline }}</p>
  </div>
{% endfor %}
</div>
