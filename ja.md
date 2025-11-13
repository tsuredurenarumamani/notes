---
layout: default
title: にほんご
permalink: /ja/
---
## にほんごの記事
<ul>
{% for post in site.posts %}
  {% if post.categories contains "ja" %}
    <li><a href="{{ post.url | relative_url }}">{{ post.title }}</a> — <small>{{ post.date | date: "%Y-%m-%d" }}</small></li>
  {% endif %}
{% endfor %}
</ul>
