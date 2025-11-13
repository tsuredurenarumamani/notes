---
layout: default
title: english
permalink: /en/
---

## english posts
{% for post in site.posts %}
  {% if post.categories contains "en" %}
<p>
  <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
  <small>— {{ post.date | date: "%Y-%m-%d" }}</small>
</p>
  {% endif %}
{% endfor %}
