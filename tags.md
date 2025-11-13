---
layout: default
title: Tags
permalink: /tags/
---

## Tags
{% assign all = site.tags | sort %}
{% for t in all %}
  {% assign name = t[0] %}
<p>
  <a href="{{ '/tags/' | append: name | uri_escape | append: '/' | relative_url }}">{{ name }}</a>
  <small>({{ t[1].size }})</small>
</p>
{% endfor %}
