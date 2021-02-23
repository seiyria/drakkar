---
title: "Audio Gallery"
permalink: /other/audio-gallery
excerpt: "Kingdom of Drakkar Audio Gallery"
---

{% include base_path %}

{% assign all_sfx  = site.data.sound_categories %}

Kingdom of Drakkar has quite a few sound effects in the data files. Many are not used, but some of them are simply fantastic. Here, I will share all of them (~180) sorted by arbitrary categories that I came up with. There's even a surprise at the very end.

{% for category in all_sfx %}
  <div class="row">
    <h2>{{ category.name }}</h2>
    <h6>{{ category.desc }}</h6>

    {% for sfx in site.static_files %}
      {% assign lowerpath = sfx.path | downcase %}
      {% if lowerpath contains category.filter %}
        <div class="sound-row">
          {% assign filename_arr = sfx.path | split:'/' %}
          {% assign filename = filename_arr[3] %}
          <span class="audio-name">{{ filename }}</span>
          <audio class="audio" controls src="{{ site.baseurl }}{{ sfx.path }}">Your browser does not support this type of audio playback.</audio>
        </div>
      {% endif %}
    {% endfor %}

  </div>
{% endfor %}
