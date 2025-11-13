---
layout: default
title: 徒然なるままに
---

Welcome to my brain. 

## most recent
{% for post in site.posts %}
<p>
  <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
  <small>{{ post.date | date: "%Y-%m-%d" }}</small>
</p>
{% endfor %}
