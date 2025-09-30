

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

///////////////////////////////////////
//FAQ and timeline expandable cards unified js
////////////////////////////////////////

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
// TIMELINE LINE DRAW + BOX REVEAL (direct Y compare)
// ----------------------------------------------


document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".timeline-card");
  const victory = document.querySelector(".timeline-card.victory");

  if (!cards.length) return;

  let observer;

  function initObserver() {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.intersectionRatio >= 0.3) {
            entry.target.classList.add("visible");
          } else if (entry.intersectionRatio < 0.5) {
            entry.target.classList.remove("visible");
          }

          if (entry.target === victory) {
            if (entry.intersectionRatio > 0.95) {
              victory.classList.add("show-trophy");
            } else {
              victory.classList.remove("show-trophy");
            }
          }
        });
      },
      {
        threshold: [0, 0.3, 0.5, 0.95],
        rootMargin: "0px 0px -5% 0px"
      }
    );

    cards.forEach(card => observer.observe(card));
  }

  // Initialize normally
  initObserver();

  // Force all visible on print
  window.addEventListener("beforeprint", () => {
    if (observer) observer.disconnect(); // stop JS animations
    cards.forEach(c => c.classList.add("visible"));
    if (victory) victory.classList.add("show-trophy");
  });

  // Optional: re-init after printing
  window.addEventListener("afterprint", () => {
    initObserver();
  });
});



// ----------------------------------------------
// TESTIMONIALS FADE-IN LOGIC 
// ----------------------------------------------


function getTestimonialsPath() {
  const parts = window.location.pathname.split("/").filter(Boolean);
  return `/${parts[0]}/assets/js/testimonials.json`;
}

function fadeAndLoad(container, testimonials) {
  const count = parseInt(container.dataset.count) || 1;
  const wrap = container.dataset.boxWrap === "true";

  const selected = [];
  while (selected.length < Math.min(count, testimonials.length)) {
    const t = testimonials[Math.floor(Math.random() * testimonials.length)];
    if (!selected.includes(t)) selected.push(t);
  }

  const blocks = selected.map((t) => {
    const avatar = t.avatar_slug
      ? `<img src="https://api.dicebear.com/7.x/pixel-art/svg?seed=${encodeURIComponent(t.avatar_slug)}" alt="${t.name}" class="testimonial-avatar">`
      : "";

    const cls = wrap ? "callout testimonial box fade-in-box" : "callout testimonial fade-in-box";

    return `
      <div class="${cls}">
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
    container.querySelectorAll(".fade-in-box").forEach((b) => b.classList.remove("fade-in-box"));
  }, 900);

  // ===== Inject reload button BELOW the wrapper =====
  const parent = container.parentElement;
  if (parent) {
    // Remove any previous button
    const existing = parent.querySelector(".testimonial-reload-wrapper");
    if (existing) existing.remove();

    // Create and inject new reload button
    const btnWrap = document.createElement("div");
    btnWrap.className = "testimonial-reload-wrapper";
    btnWrap.innerHTML = `<a href="#" class="button next">More testimonials ↻</a>`;
    btnWrap.querySelector("a").addEventListener("click", (e) => {
      e.preventDefault();
      container.innerHTML = "";
      fadeAndLoad(container, testimonials);
    });

    parent.appendChild(btnWrap);
  }
}

function initTestimonials() {
  const containers = document.querySelectorAll("#testimonial-box");
  if (!containers.length) return;

  fetch(getTestimonialsPath())
    .then((res) => res.json())
    .then((data) => {
      const testimonials = data.testimonials;
      if (!testimonials?.length) return;
      containers.forEach((c) => fadeAndLoad(c, testimonials));
    });
}

window.addEventListener("load", () => {
  setTimeout(initTestimonials, 50);
});




