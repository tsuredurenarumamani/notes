---
layout: default
title: Tags
permalink: /tags/
---

## Tags

{%- assign all = site.tags | sort -%}

{%- capture ja_html -%}{%- endcapture -%}
{%- capture en_html -%}{%- endcapture -%}

{%- for t in all -%}
  {%- assign name = t[0] -%}
  {%- assign link = '/tags/' | append: name | uri_escape | append: '/' | relative_url -%}
  {%- assign first = name | slice: 0, 1 -%}
  {%- assign dc = first | downcase -%}
  {%- assign uc = first | upcase -%}

  {%- capture item -%}
<p><a href="{{ link }}">{{ name }}</a> <small>({{ t[1].size }})</small></p>
  {%- endcapture -%}

  {%- if dc != uc -%}
    {%- capture en_html -%}{{ en_html }}{{ item }}{%- endcapture -%}
  {%- else -%}
    {%- capture ja_html -%}{{ ja_html }}{{ item }}{%- endcapture -%}
  {%- endif -%}
{%- endfor -%}

<!-- ここより上で作ったHTMLを2カラムで表示。※この前に必ず空行が必要 -->
<div class="tags-grid">
  <div>
    <h3>にほんご</h3>
    {{ ja_html }}
  </div>
  <div>
    <h3>english</h3>
    {{ en_html }}
  </div>
</div>
