---
title: "Brewing"
permalink: /other/brewing
excerpt: "Kingdom of Drakkar Brewing"
---

{% include base_path %}

{% assign stat_ingredients  = site.data.brewing.stat_ingredients %}
{% assign level_ingredients = site.data.brewing.level_ingredients %}
{% assign skills = site.data.brewing.skills %}
{% assign recipes = site.data.brewing.recipes %}

## Elixirs

Elixirs are a combination of:

* 1 Stat Ingredient
* 2 Level Ingredients
* 1 Brew Pot (Green Bottle)

The result will boost the chosen stat by the value of the Level Ingredient for 300 rounds.
This is your primary way to gain skill. See the skill table below for what to brew to gain skill.
Maxing out Micro Brewer and Careful Brewer is a good idea.

### Stat Ingredients
Stat Ingredients are all buyable via the GDH locker merchant.

<table>
  <thead>
    <th></th>
    <th>Name</th>
    <th>Stat</th>
  </thead>

  {% for ing in stat_ingredients %}
  <tr>
    <td class="sprite-container">
      <img itemprop="image" src="{{ ing.sprite | prepend: "/images/content/" | prepend: base_path | append: ".png" }}" alt="{{ing.name}}" />
    </td>
    <td>{{ ing.name }}</td>
    <td>{{ ing.stat }}</td>
  </tr>
  {% endfor %}

</table>

### Level Ingredients

<table>
  <thead>
    <th></th>
    <th>Name</th>
    <th>Found</th>
    <th>Tier</th>
    <th>Boost</th>
  </thead>


  {% for ing in level_ingredients %}
  <tr>
    <td class="sprite-container">
      <img itemprop="image" src="{{ ing.sprite | prepend: "/images/content/" | prepend: base_path | append: ".png" }}" alt="{{ing.name}}" />
    </td>
    <td>{{ ing.name }}</td>
    <td>{{ ing.found }}</td>
    <td>{{ ing.tier }}</td>
    <td>+{{ forloop.index | times:2 }} to stat, +{{ forloop.index | times:20}} EP, +{{ forloop.index | times:40 }} HP</td>
  </tr>
  {% endfor %}

</table>

## Skill Levels

<table>
  <thead>
    <th>Skill Level</th>
    <th>Skill Name</th>
    <th>Brew</th>
  </thead>


  {% for skill in skills %}
  <tr>
    <td>{{ forloop.index | minus:1 }}</td>
    <td>{{ skill.name }}</td>
    <td>{{ skill.brew }}</td>
  </tr>
  {% endfor %}

</table>

## Other Recipes

<table>
  <thead>
    <th></th>
    <th>Result</th>
    <th>Reagents</th>
    <th>Required Skill</th>
  </thead>


  {% for recipe in recipes %}
  <tr>
    <td class="sprite-container">
      <img itemprop="image" src="{{ recipe.sprite | prepend: "/images/content/" | prepend: base_path | append: ".png" }}" alt="{{recipe.name}}" />
    </td>
    <td>{{ recipe.name }}</td>
    <td>
      {% for reagent in recipe.reagents %}
      <img itemprop="image" src="{{ reagent.sprite | prepend: "/images/content/" | prepend: base_path | append: ".png" }}" />
      {% endfor %}
    </td>
    <td>{{ recipe.skill_required }}</td>
  </tr>
  {% endfor %}

</table>
