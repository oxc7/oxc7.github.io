---
layout: page
title: "Projects"
permalink: /projects/
---

{% for project in site.data.projects %}
## [{{ project.title }}]({{ project.link }})
![Project Image]({{ project.image }})

{{ project.description }}

### Key Features
{{ project.details }}

---
{% endfor %}
