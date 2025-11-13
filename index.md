---
layout: default
title: 徒然なるままに
---
welcome to my brain. 

<div class="main-hero">
  <img src="{{ '/assets/img/ositos.png' | relative_url }}" alt="ositos">
</div>


<h2>most recent</h2>

{% for post in site.posts limit:5 %}
  <p>
    <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    {{ post.date | date: "%Y-%m-%d" }}
  </p>
{% endfor %}


