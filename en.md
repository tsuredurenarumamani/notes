---
layout: default
title: self-talk
permalink: /self-talk/
lang: en
---

## english posts
{% for post in site.posts %}
  {% if post.categories contains "self-talk" %}
<p>
  <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
  <small>— {{ post.date | date: "%Y-%m-%d" }}</small>
</p>
  {% endif %}
{% endfor %}
