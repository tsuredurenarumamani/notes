---
layout: default
title: ひとりごと
permalink: /hitorigoto/
---

## ひとりごとぼやいていく〜〜
{% for post in site.posts %}
  {% if post.categories contains "hitorigoto" %}
<p>
  <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
  <small>— {{ post.date | date: "%Y-%m-%d" }}</small>
</p>
  {% endif %}
{% endfor %}
