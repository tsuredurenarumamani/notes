---
layout: default
title: Tags
permalink: /tags/
---
## Tags
{% assign sorted_tags = site.tags | sort %}
<ul>
{% for tag in sorted_tags %}
  <li><strong>{{ tag[0] }}</strong>
    <ul>
    {% for post in tag[1] %}
      <li><a href="{{ post.url | relative_url }}">{{ post.title }}</a> — <small>{{ post.date | date: "%Y-%m-%d" }}</small></li>
    {% endfor %}
    </ul>
  </li>
{% endfor %}
</ul>
