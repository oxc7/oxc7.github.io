---
layout: default
title: "Blog"
permalink: /blog/
---

# Recent Posts

{% for post in site.posts %}
  <div class="post-preview">
    <a href="{{ post.url | relative_url }}">
      <h2>{{ post.title }}</h2>
      <p>{{ post.excerpt }}</p>
    </a>
    <p class="post-meta">Posted by {{ post.author }} on {{ post.date | date: "%B %d, %Y" }}</p>
  </div>
  <hr>
{% endfor %}

<!-- <div class="pagination">
  {% if paginator.previous_page %}
    <a href="{{ paginator.previous_page_path }}" class="previous">Previous</a>
  {% endif %}
  
  <span class="page-number">Page {{ paginator.page }} of {{ paginator.total_pages }}</span>
  
  {% if paginator.next_page %}
    <a href="{{ paginator.next_page_path }}" class="next">Next</a>
  {% endif %}
</div> -->