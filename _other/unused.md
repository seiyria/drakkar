---
title: "Unused Sprites"
permalink: /other/unused-sprites
excerpt: "Kingdom of Drakkar Unused Sprites"
---

{% include base_path %}

{% assign all_unused  = site.data.unused.all_unused %}

Kingdom of Drakkar has a lot of unused sprites in the game data (some of these may be visible on npcs, but are not obtainable to players). This may include some event items from previous events. Check them out:

<div class="row">

  {% for spr in all_unused %}
  <div class="sprite-container-wrap sprite-container">
    <img itemprop="image" src="{{ spr.sprite | prepend: "/images/content/" | prepend: base_path | append: ".png" }}" alt="{{spr.sprite}}" />
    <br>
    {{ spr.sprite }}
  </div>
  {% endfor %}

</div>
