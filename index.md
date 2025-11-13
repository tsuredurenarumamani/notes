---
layout: home
title: 徒然なるままに
---

Welcome to my brain. Trying to connect knowledge, experience and idea.

## Posts
{% for post in site.posts %}
<p>
  <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
  <small>{{ post.date | date: "%Y-%m-%d" }}</small>
</p>
{% endfor %}
