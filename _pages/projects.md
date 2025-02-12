---
title: "Projects"
layout: single
permalink: /projects/
---

{% for project in site.data.projects %}
## {{ project.title }}

<img src="{{ project.image }}" alt="{{ project.title }}" style="max-width: 500px; height: auto;">

{{ project.description }}

### Key Features
{{ project.details }}

---
{% endfor %}
