(function () {
  if (!document.body || !document.body.classList.contains("home-page")) {
    return;
  }

  var reduceMotion = false;
  try {
    reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  } catch (e) {}

  function isMobile() {
    return window.matchMedia("(max-width: 767.98px)").matches;
  }

  function showWithoutMotion() {
    document.documentElement.classList.remove("has-motion");
  }

  document.querySelectorAll(".journey-item[data-url]").forEach(function (item) {
    function openCompany() {
      var url = item.getAttribute("data-url");
      if (url) {
        window.open(url, "_blank", "noopener");
      }
    }
    item.addEventListener("click", openCompany);
    item.addEventListener("keydown", function (event) {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openCompany();
      }
    });
  });

  function setupProgress() {
    var bar = document.querySelector(".page-progress span");
    if (!bar) {
      return;
    }
    function update() {
      var el = document.documentElement;
      var max = el.scrollHeight - window.innerHeight;
      var pct = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      bar.style.transform = "scaleX(" + pct + ")";
    }
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
  }

  setupProgress();

  function refreshWow() {
    if (reduceMotion || typeof WOW !== "function") {
      return;
    }
    new WOW({ mobile: true, live: true }).init();
  }

  refreshWow();

  if (reduceMotion || typeof gsap === "undefined") {
    showWithoutMotion();
    return;
  }

  if (typeof ScrollTrigger === "undefined") {
    setupNavbar();
    heroEntrance();
    showWithoutMotion();
    return;
  }

  gsap.registerPlugin(ScrollTrigger);
  if (ScrollTrigger.config) {
    ScrollTrigger.config({ ignoreMobileResize: true });
  }

  function setupNavbar() {
    var nav = document.querySelector(".navbar");
    if (!nav) {
      return;
    }
    gsap.fromTo(
      nav,
      { autoAlpha: 0, y: -18 },
      { autoAlpha: 1, y: 0, duration: 0.7, ease: "power2.out", delay: 0.05 }
    );
  }

  function heroEntrance() {
    var heading = document.querySelector(".hero-text h1");
    var support = document.querySelector(".hero-text h2");
    var ctas = document.querySelector(".hero .hero-btn");
    var visual = document.querySelector(".hero-image");
    var tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    if (heading) {
      tl.fromTo(heading, { autoAlpha: 0, y: 28 }, { autoAlpha: 1, y: 0, duration: 0.7 }, 0.15);
    }
    if (support) {
      tl.fromTo(support, { autoAlpha: 0, y: 22 }, { autoAlpha: 1, y: 0, duration: 0.6 }, 0.32);
    }
    if (ctas) {
      tl.fromTo(ctas, { autoAlpha: 0, y: 18 }, { autoAlpha: 1, y: 0, duration: 0.55 }, 0.48);
    }
    if (visual) {
      gsap.set(visual, { autoAlpha: 1, y: 0 });
      var photo = visual.querySelector("img");
      if (photo) {
        tl.fromTo(photo, { autoAlpha: 0, y: 16 }, { autoAlpha: 1, y: 0, duration: 0.7 }, 0.58);
      }
    }
  }

  function heroParallax() {
    var hero = document.querySelector(".hero");
    var heading = document.querySelector(".hero-text h1");
    var ctas = document.querySelector(".hero .hero-btn");
    if (!hero || !heading) {
      return;
    }

    if (ctas) {
      gsap.set(ctas, { autoAlpha: 1, y: 0, opacity: 1, visibility: "visible" });
    }

    var support = document.querySelector(".hero-text h2");
    var photo = document.querySelector(".hero-image img");
    function scrubTrigger() {
      return {
        trigger: hero,
        start: "top top",
        end: "bottom top",
        scrub: 0.35,
        invalidateOnRefresh: true,
      };
    }

    gsap.fromTo(
      heading,
      { y: 0 },
      {
        y: isMobile() ? -56 : -110,
        ease: "none",
        immediateRender: false,
        scrollTrigger: scrubTrigger(),
      }
    );

    if (support) {
      gsap.fromTo(
        support,
        { y: 0 },
        {
          y: isMobile() ? -36 : -72,
          ease: "none",
          immediateRender: false,
          scrollTrigger: scrubTrigger(),
        }
      );
    }

    if (photo) {
      gsap.fromTo(
        photo,
        { y: 0 },
        {
          y: isMobile() ? 36 : 84,
          ease: "none",
          immediateRender: false,
          scrollTrigger: {
            trigger: hero,
            start: "top top",
            end: "bottom top",
            scrub: 0.85,
            invalidateOnRefresh: true,
          },
        }
      );
    }
  }

  function pageParallax() {
    function drift(el, fromY, toY, trigger, scrub) {
      if (!el) {
        return;
      }
      gsap.fromTo(
        el,
        { y: fromY },
        {
          y: toY,
          ease: "none",
          scrollTrigger: {
            trigger: trigger || el,
            start: "top bottom",
            end: "bottom top",
            scrub: scrub == null ? 1.15 : scrub,
          },
        }
      );
    }

    var headingFrom = isMobile() ? 0 : 0;
    var headingTo = isMobile() ? -16 : -24;

    [
      ["#about", "#about .col-lg-6:first-child .about-content", isMobile() ? 22 : 40, isMobile() ? -28 : -48, 1.2],
      ["#about", "#about .col-lg-6:last-child .about-content", isMobile() ? 30 : 56, isMobile() ? -20 : -36, 1.3],
      [".experience", ".experience .section-header", headingFrom, headingTo, 1.15],
      [".ai-work", ".ai-work .section-header", headingFrom, headingTo, 1.15],
      ["#service", "#service .section-header", headingFrom, headingTo, 1.15],
      ["#contact", "#contact .col-md-8", isMobile() ? 16 : 24, isMobile() ? -10 : -16, 1.2],
      ["#contact", "#contact .contact-aside", isMobile() ? 18 : 28, isMobile() ? -8 : -12, 1.25],
    ].forEach(function (item) {
      var section = document.querySelector(item[0]);
      if (!section) {
        return;
      }
      gsap.utils.toArray(item[1]).forEach(function (el) {
        drift(el, item[2], item[3], section, item[4]);
      });
    });

    gsap.utils.toArray(".project-card-media").forEach(function (media) {
      var shift = media.querySelector(".project-card-media-shift");
      if (!shift) {
        return;
      }
      gsap.fromTo(
        shift,
        { yPercent: -14 },
        {
          yPercent: 12,
          ease: "none",
          scrollTrigger: {
            trigger: media,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.15,
          },
        }
      );
    });

    gsap.utils.toArray("#service .service-icon img").forEach(function (el) {
      drift(el, isMobile() ? 8 : 12, isMobile() ? -6 : -10, el.closest(".service-item") || el, 1.05);
    });

    gsap.utils.toArray("#service .service-text").forEach(function (el) {
      drift(el, isMobile() ? 18 : 28, isMobile() ? -14 : -22, el.closest(".service-item") || el, 1.15);
    });

    var aiTrack = document.querySelector(".ai-work-marquee");
    if (aiTrack) {
      drift(aiTrack, isMobile() ? 10 : 16, isMobile() ? -10 : -16, document.querySelector(".ai-work"), 1.2);
    }
  }

  function setupExperience() {
    var list = document.querySelector(".journey-list");
    var items = Array.prototype.slice.call(document.querySelectorAll(".journey-item"));
    var progress = document.querySelector(".journey-progress");
    var track = document.querySelector(".journey-track");
    if (!list || !items.length) {
      return;
    }

    function nodeCenter(item) {
      var node = item.querySelector(".journey-node");
      if (!node) {
        return 0;
      }
      var listRect = list.getBoundingClientRect();
      var nodeRect = node.getBoundingClientRect();
      return nodeRect.top + nodeRect.height / 2 - listRect.top;
    }

    var railStart = 0;
    var railHeight = 0;

    function layoutRail() {
      railStart = nodeCenter(items[0]);
      var last = nodeCenter(items[items.length - 1]);
      railHeight = Math.max(0, last - railStart);
      [track, progress].forEach(function (el) {
        if (!el) {
          return;
        }
        el.style.top = railStart + "px";
        el.style.bottom = "auto";
        el.style.height = railHeight + "px";
      });
    }

    var flipFrom = isMobile() ? { rotationX: -78, y: 18 } : { rotationY: 82, x: 18 };
    var flipTo = isMobile() ? { rotationX: 0, y: 0 } : { rotationY: 0, x: 0 };

    items.forEach(function (item, index) {
      var body = item.querySelector(".journey-body");
      if (!body) {
        return;
      }
      gsap.set(body, {
        transformPerspective: 1100,
        transformOrigin: isMobile() ? "center top" : "left center",
        autoAlpha: index === 0 ? 1 : 0,
        rotationY: index === 0 || isMobile() ? 0 : 82,
        rotationX: index === 0 || !isMobile() ? 0 : -78,
        x: index === 0 || isMobile() ? 0 : 18,
        y: index === 0 || !isMobile() ? 0 : 18,
      });
    });

    function flipCard(item, show) {
      var body = item.querySelector(".journey-body");
      if (!body) {
        return;
      }
      gsap.to(body, Object.assign({}, show ? flipTo : flipFrom, {
        autoAlpha: show ? 1 : 0,
        duration: show ? 0.55 : 0.35,
        ease: show ? "power2.out" : "power2.in",
        overwrite: "auto",
      }));
    }

    function paintRail(amount) {
      var p = Math.min(1, Math.max(0, amount));
      if (progress) {
        gsap.set(progress, { scaleY: p });
      }
      var tip = railStart + railHeight * p;
      items.forEach(function (item) {
        var on = tip + 0.5 >= nodeCenter(item);
        var was = item.classList.contains("is-active");
        item.classList.toggle("is-active", on);
        if (on !== was) {
          flipCard(item, on);
        }
      });
    }

    layoutRail();
    items[0].classList.add("is-active");
    paintRail(0);

    if (progress && items.length > 1) {
      ScrollTrigger.create({
        trigger: items[0],
        start: "top 48%",
        endTrigger: items[items.length - 1],
        end: "top 48%",
        scrub: true,
        invalidateOnRefresh: true,
        onUpdate: function (self) {
          paintRail(self.progress);
        },
        onLeave: function () {
          paintRail(1);
        },
        onLeaveBack: function () {
          paintRail(0);
        },
        onRefresh: function (self) {
          layoutRail();
          paintRail(self.progress);
        },
      });
    }

    window.addEventListener("resize", function () {
      layoutRail();
    });
  }

  setupNavbar();
  heroEntrance();
  heroParallax();
  setupExperience();
  pageParallax();

  window.addEventListener("load", function () {
    if (typeof ScrollTrigger !== "undefined") {
      ScrollTrigger.refresh();
    }
  });

  window.setTimeout(function () {
    var heroCtas = document.querySelector(".hero .hero-btn");
    if (heroCtas) {
      heroCtas.style.opacity = "1";
      heroCtas.style.visibility = "visible";
    }
    document.querySelectorAll(".hero-text h1, .hero-text h2, .hero .hero-btn, .hero-image, .navbar").forEach(function (el) {
      if (window.getComputedStyle(el).opacity === "0") {
        el.style.opacity = "1";
        el.style.visibility = "visible";
      }
    });
  }, 2500);
})();
