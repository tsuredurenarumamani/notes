## にほんごの記事
{% for post in site.posts %}
  {% if post.categories contains "ja" %}
<p>
  <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
  <small>— {{ post.date | date: "%Y-%m-%d" }}</small>
</p>
  {% endif %}
{% endfor %}
