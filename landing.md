---
title: <span class="icon-small alt fa fa-question-circle"></span> Good Question!
layout: page
description: "Spicy musings about UX, design, tech, and the world we live in."
image: assets/images/goodquestion-cover.jpg
nav-menu: true
hide_from_tiles: true
nav-color: "#8d82c4"
is_special: true
weight: 50
permalink: /landing.html
nav_active: goodquestion
---
<!-- <style>

a.post-title:link,
a.post-title:visited { color:#333 !important; text-decoration:none; font-weight:600; }

a.post-title:hover,
a.post-title:focus { color:var(--nav-color) !important; text-decoration:none; }


</style> -->
<!-- Hero Banner -->
<section id="banner" class="goodquestion-landing is-hero-loaded brandimage_masthead">
  <div class="inner">
    <header>
      <h1 class="hero-display">
        <span class="hero-icon highlight-g">?</span>
        <span>Good&nbsp;Question</span>
      </h1>
      <p class="hero-tagline">
        {{ page.blog_tagline | default: site.blog_tagline }}
      </p>
    </header>
  </div>
</section>

<div id="main" class="alt inner">
  <!-- Page Header -->
  <header class="major">
    <h1>All the Good Questions</h1>
  </header>

  <!-- Two Column Layout -->
  <div class="two-col-layout">
    <!-- Left Column -->
    <div class="left-col">
      <p>
        My riffs on design, tech, leadership, and the weird, wonderful (and
        terrible) world we build and live in. Some posts are sharp. Some are
        playful…
      </p>

<section id="goodquestion-posts" class="spotlights">
  {% for post in site.posts %}
  <section class="post-row {% if forloop.first %}latest-post{% endif %}">
    
    <!-- Hidden overlay link -->
    <a href="{{ post.url | relative_url }}" class="post-link-overlay">Go to post</a>
    
    <div class="image"> 
      <img src="{{ post.image | relative_url }}" alt="{{ post.title }}" />
    </div>
    <div class="content">
      {% if forloop.first %}
        <span class="featured-label">Latest Post</span>
      {% endif %}
      <header>
        <h3>
          <span class="icon-small alt fa fa-question-circle"></span>&nbsp;
          <span class="post-title">{{ post.title }}</span>
        </h3>
      </header>
      <p>{{ post.excerpt | strip_html }}</p>
    </div>
  </section>
  {% endfor %}
</section>




    </div>
    <!-- end left-col -->

    <!-- Right Column -->
    <div class="right-col">
      {% if page.boxes %}
        {% for box in page.boxes %}
        <div class="box">
          <h3>{{ box.title }}</h3>
          {% if box.content %}
            <p>{{ box.content }}</p>
          {% endif %}
          {% if box.items %}
            <ul>
              {% for item in box.items %}
                <li>{{ item }}</li>
              {% endfor %}
            </ul>
          {% endif %}
        </div>
        {% endfor %}
      {% endif %}


         <!-- Dynamic Coaching Sidebar -->
{% include coaching-sidebar.html %}


      <!-- Optional Testimonial Block -->
      <div class="testimonials-wrapper single-column" id="testimonial-box"
           data-count="1" data-box-wrap="true">
      </div>
    </div><!-- end right-col -->
  </div><!-- end two-col-layout -->
</div><!-- end main -->
