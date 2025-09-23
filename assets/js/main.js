/*
  Forty by HTML5 UP
  html5up.net | @ajlkn
*/

(function ($) {
  $.fn._parallax = (skel.vars.browser === 'ie' || skel.vars.browser === 'edge' || skel.vars.mobile)
    ? function () { return $(this); }
    : function (intensity) {
      var $window = $(window),
        $this = $(this),
        intensity = (typeof intensity !== 'undefined') ? intensity : 0.25;

      if (this.length > 1) {
        this.each(function () { $(this)._parallax(intensity); });
        return $this;
      }

      $this.each(function () {
        var $t = $(this);

        function on() {
          $t.css('background-position', 'center center');
          $window.on('scroll._parallax', function () {
            var pos = $window.scrollTop() - $t.position().top;
            var offset = Math.max(pos * -intensity, -200);
            $t.css('background-position', 'center ' + offset + 'px');
          });
        }

        function off() {
          $t.css('background-position', '');
          $window.off('scroll._parallax');
        }

        skel.on('change', function () {
          if (skel.breakpoint('medium').active) off();
          else on();
        });
      });

      $window.off('load._parallax resize._parallax')
        .on('load._parallax resize._parallax', function () {
          $window.trigger('scroll');
        });

      return $this;
    };

  $(function () {
    var $window = $(window),
      $body = $('body'),
      $wrapper = $('#wrapper'),
      $header = $('#header'),
      $banner = $('#banner');

    $banner._parallax(0.08);

    $body.addClass('is-loading');
    window.setTimeout(function () {
      $body.removeClass('is-loading');
    }, 200);

    $window.on('unload pagehide', function () {
      window.setTimeout(function () {
        $('.is-transitioning').removeClass('is-transitioning');
      }, 250);
    });

    if (skel.vars.browser === 'ie' || skel.vars.browser === 'edge')
      $body.addClass('is-ie');

    skel.on('+medium -medium', function () {
      $.prioritize('.important\28 medium\29', skel.breakpoint('medium').active);
    });

    if (skel.vars.IEVersion < 9)
      $header.removeClass('alt');

    if ($banner.length > 0 && $header.hasClass('alt')) {
      $window.on('resize', function () { $window.trigger('scroll'); });
      $window.on('load', function () {
        $banner.scrollex({
          bottom: $header.height() + 10,
          terminate: function () { $header.removeClass('alt'); },
          enter: function () { $header.addClass('alt'); },
          leave: function () { $header.removeClass('alt').addClass('reveal'); }
        });
        window.setTimeout(function () {
          $window.triggerHandler('scroll');
        }, 100);
      });
    }
  });
})(jQuery);

(function () {
  var root = document.documentElement;
  var header = document.querySelector('#header');
  if (!root || !header) return;

  function setH() {
    const realHeight = header.offsetHeight || 72;
    root.style.setProperty('--header-h', realHeight + 'px');
  }

  document.addEventListener('DOMContentLoaded', () => {
    setH();
    root.classList.add('header-ready');
  });

  if (typeof ResizeObserver !== 'undefined') {
    try {
      new ResizeObserver(setH).observe(header);
    } catch (e) {}
  }

  window.addEventListener('load', setH, { passive: true });
  window.addEventListener('resize', setH, { passive: true });

  setTimeout(setH, 200);
  setTimeout(setH, 800);
})();

// ✅ FIXED: Restores homepage fade-in on hero elements
window.addEventListener('DOMContentLoaded', function () {
  var banner = document.getElementById('banner');
  if (!banner) return;

  banner.classList.add('is-hero-loaded');

  var title = banner.querySelector('.hero-display');
  var subtitle = banner.querySelector('.hero-tagline');

  if (title && subtitle) {
    title.style.opacity = 0;
    subtitle.style.opacity = 0;

    setTimeout(() => {
      title.style.transition = 'opacity 1s ease';
      title.style.opacity = 1;
    }, 200);

    setTimeout(() => {
      subtitle.style.transition = 'opacity 1s ease';
      subtitle.style.opacity = 1;
    }, 1000);
  }
});


//FAQ and timeline expandable cards unified js


// FAQ Expand/Collapse
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".faq-item.expandable-card, .faq-item");

  items.forEach(item => {
    const icon = item.querySelector(".faq-icon");
    const answer = item.querySelector(".faq-answer");

    if (!answer) return;

    // click anywhere on the item
    item.addEventListener("click", () => {
      item.classList.toggle("open");
      answer.style.maxHeight = item.classList.contains("open")
        ? answer.scrollHeight + "px"
        : null;
    });

    // stop icon clicks from bubbling if you want to handle separately
    if (icon) {
      icon.addEventListener("click", (e) => {
        e.stopPropagation();
        item.click();
      });
    }
  });
});



// ----------------------------------------------
// grow that timeline line
// ----------------------------------------------
// ----------------------------------------------
// TIMELINE LINE DRAW + RECALC
// ----------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  const timeline = document.querySelector(".timeline");
  const victory = document.querySelector(".timeline-card.victory");
  const path = document.querySelector(".timeline-line path");

  if (!timeline || !victory || !path) return;

  function setPath() {
    const timelineRect = timeline.getBoundingClientRect();
    const victoryRect = victory.getBoundingClientRect();
    const svgRect = document.querySelector(".timeline-line").getBoundingClientRect();

    const startX = 10;
    const startY = 0;

    const lineY = (victoryRect.top + victoryRect.height / 2) - svgRect.top;

    const curveX = 40;
    const curveY = lineY;

    const d = `M${startX} ${startY} V${lineY} Q${startX} ${lineY} ${curveX} ${curveY}`;
    path.setAttribute("d", d);

    const length = path.getTotalLength();
    path.style.setProperty("--path-length", length);
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;
  }

  function animatePath() {
    const timelineRect = timeline.getBoundingClientRect();
    const victoryRect = victory.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    const timelineTop = timelineRect.top + window.scrollY;
    const victoryMid = victoryRect.top + window.scrollY + (victoryRect.height / 2);

    const start = timelineTop - viewportHeight;
    const end = victoryMid - viewportHeight / 2;

    const scrollY = window.scrollY;
    let progress = (scrollY - start) / (end - start);
    progress = Math.min(Math.max(progress, 0), 1);

    const length = path.getTotalLength();
    const drawn = length * progress;
    path.style.strokeDashoffset = length - drawn;

    victory.classList.toggle("show-trophy", progress === 1);
  }

  function update() {
    setPath();
    animatePath();
  }

  requestAnimationFrame(() => {
    requestAnimationFrame(update);
  });

  window.addEventListener("scroll", animatePath);
  window.addEventListener("resize", update);

  document.querySelectorAll(".faq-question").forEach(q => {
    q.addEventListener("click", () => {
      setTimeout(update, 300);
    });
  });

  const toggleBtn = document.getElementById("toggle-all");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      setTimeout(update, 300);
    });
  }

  new ResizeObserver(update).observe(timeline);
});



// ----------------------------------------------
// TESTIMONIALS FADE-IN LOGIC
// ----------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("testimonial-box");
  if (!container) return;

  const count = parseInt(container.dataset.count) || 1;
  const wrapInBox = container.dataset.boxWrap === "true";

  function fadeAndLoad(testimonials) {
    const selected = [];
    while (selected.length < Math.min(count, testimonials.length)) {
      const t = testimonials[Math.floor(Math.random() * testimonials.length)];
      if (!selected.includes(t)) selected.push(t);
    }

    const blocks = selected.map((t) => {
      const avatar = t.avatar_slug
        ? `<img src="https://api.dicebear.com/7.x/pixel-art/svg?seed=${encodeURIComponent(t.avatar_slug)}" alt="${t.name}" class="testimonial-avatar" />`
        : "";

      const outerClass = wrapInBox
        ? "callout testimonial box fade-in-box"
        : "callout testimonial fade-in-box";

      return `
        <div class="${outerClass}">
          <div class="testimonial-header">
            ${avatar}
            <div class="testimonial-meta">
              <p><strong>${t.name}</strong><br><span class="testimonial-title">${t.title}</span></p>
            </div>
          </div>
          <p class="quote">${t.quote}</p>
        </div>
      `;
    });

    container.innerHTML = blocks.join("");

    setTimeout(() => {
      const boxes = container.querySelectorAll(".fade-in-box");
      boxes.forEach((box) => box.classList.remove("fade-in-box"));
    }, 900);

    let buttonContainer = document.getElementById("testimonial-reload-wrapper");
    if (!buttonContainer) {
      buttonContainer = document.createElement("div");
      buttonContainer.id = "testimonial-reload-wrapper";
      container.appendChild(buttonContainer);
    }

    buttonContainer.innerHTML = `
      <a href="#" class="button next" id="more-testimonials-btn">More testimonials ↻</a>
    `;

    document.getElementById("more-testimonials-btn").addEventListener("click", (e) => {
      e.preventDefault();
      fadeAndLoad(testimonials);
    });
  }

  fetch("/assets/js/testimonials.json")
    .then((res) => res.json())
    .then((data) => {
      const testimonials = data.testimonials;
      if (testimonials && testimonials.length > 0) fadeAndLoad(testimonials);
    })
    .catch(() => {});
});

window.addEventListener("DOMContentLoaded", function () {
  var banner = document.getElementById("banner");
  if (banner && !banner.classList.contains("is-hero-loaded")) {
    banner.classList.add("is-hero-loaded");
  }
});
