---
layout: home
title: Executive Coaching
landing-title: '<div class="name">
  Hi, my name is <span class="gagan">Gagan<span class="pronunciation">Gah-gun</span></span>
</div>'
description: what what what
image: null
author: null
show_tile: false
---

<div class="home">

  <h1>Posts</h1>

  <ul class="posts">
    {% for post in site.posts %}
      <li>
        <span class="post-date">{{ post.date | date: "%b %-d, %Y" }}</span>
        <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
      </li>
    {% endfor %}
  </ul>

  <p class="rss-subscribe">subscribe <a href="{{ "/feed.xml" | prepend: site.baseurl }}">via RSS</a></p>

</div>
