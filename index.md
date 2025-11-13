---
layout: default
title: 徒然なるままに
---
welcome to my brain. 

![ositos]({{ '/assets/img/ositos.png' | relative_url }})

## most recent
{% for post in site.posts %}
<p>
  <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
  <small>{{ post.date | date: "%Y-%m-%d" }}</small>
</p>
{% endfor %}

