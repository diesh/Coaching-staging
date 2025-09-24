---

layout: page
title: "Ongoing Coaching"
description: Career growth isn’t a one-time event, it’s a journey. With ongoing coaching, you’ll have a trusted partner to help you navigate challenges, stay accountable, and achieve your goals. 
image: assets/images/ongoing.jpg
nav-menu: true
nav_active: coaching
nav-color: "#CFDA90"
masthead_caption: "Lucas van Oort on Unsplash"
masthead_url: "https://unsplash.com/@switch_dtp_fotografie"
date: 2025-02-01
weight: 3
main_class: alt
bullets:
  - "Bi-weekly 60–75 min sessions"
  - "Scenario role plays"
  - "Your secret partner"

boxes:
  - title: "What to Expect"
    content: |
      Ongoing coaching is flexible and tailored to your needs. Expect regular check-ins, actionable insights, and a safe space to explore challenges and opportunities.
    items:
      - "<strong>Personalized support</strong>: Coaching sessions designed around your goals and challenges."
      - "<strong>Actionable feedback</strong>: Clear, practical advice to help you move forward."
      - "<strong>Consistent progress</strong>: Regular accountability to keep you on track."
  - title: "Why This Works"
    items:
      - "A coach acts as your career GPS, helping you map your <em>career</em>, not just a job."
      - "Gain clarity on your direction and the steps to get there."
      - "Have a trusted partner to navigate challenges and roadblocks. Learn, adapt, and grow and stay on course!"

faqs:
  - question: "What is ongoing coaching, and how does it work?"
    answer:
      - "Ongoing coaching provides continuous support as you navigate leadership challenges, career growth, and team dynamics."
      - "We meet regularly, biweekly or monthly, to tackle real-time issues, refine your leadership style, and build strategies for long-term success. Sessions are designed to adapt as your needs evolve."

  - question: "Is this life coaching?"
    answer:
      - "<strong>No</strong> (Not that there is anything wrong with it 😉)! My coaching is designed to help you focus on your career, your work, and how you show up for your team."
      - "We’ll tackle leadership challenges, decision-making, and strategies to drive impact. While personal growth is a natural byproduct, this coaching is about professional development, not general life advice."
      - "If you're ready to figure out what you want and find new ways to reach your goals, I’m here to help!"

  - question: "What’s the difference between ongoing coaching and a one-time session?"
    answer:
      - "A one-time session is great for addressing a specific challenge or decision, while ongoing coaching is designed for sustained growth."
      - "It allows us to track progress, refine strategies, and develop deeper leadership capabilities over time. I see ongoing coaching as a two-track approach to your career: acting as your co-pilot for immediate workplace challenges while also providing a long-term perspective on your career trajectory and how you navigate change."

  - question: "How long should I commit to ongoing coaching?"
    answer:
      - "That depends on your goals. Most of my clients come to me because they want to 'fix something,' whether it’s navigating a difficult work relationship, overcoming career stagnation, or stepping into new leadership challenges."
      - "Our first few sessions will map out your journey, clarifying where you’ve been, where you are now, and where you want to go."
      - "Many clients experience significant transformation within 3-6 months, but growth is an ongoing process. Some choose to continue coaching for a year or more as they take on new challenges and responsibilities."

  - question: "What can I expect to gain from coaching?"
    answer:
      - "Expect to gain clarity, confidence, and stronger leadership and people skills."
      - "You’ll sharpen your decision-making, enhance communication, and develop strategies to navigate team dynamics, organizational change, and career growth."
      - "Coaching keeps you accountable and intentional in your career journey. You have to put in the work, but I’m here to support you every step of the way. I’ll challenge you with tough questions, provide guidance, and push you forward while ensuring you stay on track to achieve your goals."
      - "The benefit of ongoing coaching:"
      - "<ol><li>A co-pilot for immediate workplace challenges</li><li>A long-term perspective and guide on your career trajectory</li></ol>"

  - question: "Will I have 'homework'?"
    answer:
      - "Short answer? Yes."
      - "Longer answer? Growth takes work. I’ll give you “homework” to reflect on your journey, documenting what’s worked, what hasn’t, and where you want to go. This helps us map a better path forward."
      - "Beyond reflection, we’ll experiment with strategies to strengthen your relationships with your boss and coworkers. This could include communication frameworks, reporting cadences, and techniques to help you become a more effective leader at work."

  - question: "Next steps?"
    answer:
      - "Yay ✨ for wanting to take action and move to the next step. Let's do this!"
      - "<a href=\"#contact\" class=\"next scrolly\">Message me</a>, and let’s set up an initial chat. I’ll reply to organize a session where we can get to know each other, ask questions, and make sure this partnership is the right fit."
      - "Excited to get to know you!"
---

<!-- Masthead -->
<div class="brandimage_masthead" style="background-image: url('{{ site.baseurl }}/{{ page.image }}');"></div>

<section id="one">
  <div class="inner"><!-- section inner wrapper -->

    <!-- Page Header -->
    <header class="major">
      <h1>{{ page.title }}</h1>
    </header>

    <!-- Intro -->
    <h2 id="content">Your Partner in Growth</h2>
    <p>{{ page.description }}</p>

    <!-- Two Column Layout -->
    <div class="two-col-layout"><!-- start two-column layout -->

      <!-- Left Column -->
      <div class="left-col"><!-- start left-col -->
        <h2 id="elements">What You’ll Gain</h2>
        <p>Ongoing coaching is tailored to your unique needs, helping you overcome obstacles and achieve sustained success. Here’s what you can expect:</p>
        <ul class="coaching-highlights">
          <li><strong>Break Through Challenges</strong><br>Work through difficult problems with an expert who helps you see blind spots, explore new perspectives, and find solutions to get unstuck.</li>
          <li><strong>Stay Accountable</strong><br>Avoid falling into familiar traps by having someone hold you accountable to your goals, commitments, and progress.</li>
          <li><strong>Combat Loneliness</strong><br>70% of professionals feel lonely at work. With ongoing coaching, you’ll have a trusted ally to rely on, who understands what you’re going through and helps you navigate it with confidence.</li>
          <li><strong>Track Progress and Improve Performance</strong><br>Like a gym coach for your career, we’ll create a system to track your progress, celebrate wins, and identify areas for improvement, so you can keep growing and performing at your best.</li>
        </ul>

        <p>Personal growth and learning to work well with others is a continuous process of growth, adaptation, and refinement. Successful people don't react to challenges, they proactively shape their path, deepen their self-awareness, and refine their impact. Coaching can provide you the structure, insight, and accountability to help you navigate complex decisions, lead with confidence, and stay ahead in an ever-changing landscape. If you’re curious about my approach or want to explore more ways to grow, learn more <a href="AboutGagan.html">about me</a> and <a href="#contact" class="next scrolly">let's connect!</a></p>

        <!-- Inline placement for mobile -->

<!-- dynamic sidebar that only appears on mobile -->

{% include coaching-sidebar.html subnav_class="subnav-mobile" %}

<!-- end of dynamic sidebar that only appears on mobile -->
       

        <!-- FAQ Section -->
        <h2>Frequently Asked Questions</h2>
        <div class="faq-container"><!-- start faq-container -->
          {% for faq in page.faqs %}
            <div class="faq-item">
              <div class="faq-question">
                <span>{{ faq.question }}</span>
                <i class="fa fa-plus faq-icon"></i>
              </div>
              <div class="faq-answer">
                {% for para in faq.answer %}
                  <p>{{ para }}</p>
                {% endfor %}
              </div>
            </div>
          {% endfor %}
        </div><!-- end faq-container -->

      </div><!-- end left-col -->

      <!-- Right Column -->
      <div class="right-col"><!-- start right-col -->
<!-- Dynamic Coaching Sidebar -->
        {% include coaching-sidebar.html %}


        <!-- Coaching Boxes -->
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
        <!-- End Coaching Boxes -->

          

        <!-- Testimonial Block -->
       <section class="testimonial-section">
  <div id="testimonial-box" class="testimonials-wrapper single-column" data-count="1" data-box-wrap="true"></div>
</section>
        <!-- End Testimonial Block -->

      </div><!-- end right-col -->

    </div><!-- end two-column layout -->

  </div><!-- end section inner wrapper -->
</section>
