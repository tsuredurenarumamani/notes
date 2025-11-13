---
layout: default
title: Tags
permalink: /tags/
---

## Tags
<ul>
{% assign all = site.tags | sort %}
{% for t in all %}
  {% assign name = t[0] %}
  <li>
    <a href="{{ '/tags/' | append: name | uri_escape | append: '/' | relative_url }}">#{{ name }}</a>
    <small>({{ t[1].size }})</small>
  </li>
{% endfor %}
</ul>
