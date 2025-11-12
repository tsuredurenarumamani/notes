---
layout: default
title: EN
permalink: /en/
---
## English posts
<ul>
{% for post in site.posts %}
  {% if post.categories contains "en" %}
    <li><a href="{{ post.url | relative_url }}">{{ post.title }}</a> — <small>{{ post.date | date: "%Y-%m-%d" }}</small></li>
  {% endif %}
{% endfor %}
</ul>
