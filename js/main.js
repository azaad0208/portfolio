(function () {
    function setWorkNavOffset() {
        if (!document.body || !document.body.classList.contains('work-layout')) {
            return;
        }
        var nav = document.querySelector('.navbar');
        if (!nav) {
            return;
        }
        document.documentElement.style.setProperty('--work-nav-h', nav.getBoundingClientRect().height + 'px');
    }
    window.setWorkNavOffset = setWorkNavOffset;
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', setWorkNavOffset);
    } else {
        setWorkNavOffset();
    }
    window.addEventListener('load', setWorkNavOffset);
    window.addEventListener('resize', setWorkNavOffset);
    window.addEventListener('scroll', setWorkNavOffset, { passive: true });
})();

(function () {
  var reduceMotion = false;
  try {
    reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  } catch (e) {}

  function setupHeadingReveal() {
    var headings = document.querySelectorAll(
      ".section-header h2, .about-content > h2, .contact-section h2"
    );
    if (!headings.length) {
      return;
    }

    headings.forEach(function (el) {
      el.classList.add("reveal-heading");
    });

    function showHeading(el) {
      if (el) {
        el.classList.add("is-visible");
      }
    }

    function observeRoot(el) {
      return el.closest(".section-header") || el;
    }

    if (reduceMotion || typeof IntersectionObserver === "undefined") {
      headings.forEach(showHeading);
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) {
            return;
          }
          var heading = entry.target.classList.contains("reveal-heading")
            ? entry.target
            : entry.target.querySelector(".reveal-heading");
          showHeading(heading);
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0, rootMargin: "0px 0px -18% 0px" }
    );

    headings.forEach(function (el) {
      observer.observe(observeRoot(el));
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setupHeadingReveal);
  } else {
    setupHeadingReveal();
  }
  window.setupHeadingReveal = setupHeadingReveal;
})();

(function ($) {
    "use strict";
    
    // loader
    var loader = function () {
        setTimeout(function () {
            if ($('#loader').length > 0) {
                $('#loader').removeClass('show');
            }
        }, 1);
    };
    loader();
    
    
    // WOW is skipped on the homepage; GSAP in motion.js handles reveals there
    if (typeof WOW === "function" && !document.body.classList.contains("home-page")) {
        new WOW().init();
    }
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    
    
    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.navbar').addClass('nav-sticky');
        } else {
            $('.navbar').removeClass('nav-sticky');
        }
        if (typeof window.setWorkNavOffset === 'function') {
            window.setWorkNavOffset();
        }
    });
    
    
    // Smooth scrolling on the navbar links
    function workScrollOffset() {
        var tabH = $('.work-tabs').outerHeight() || 0;
        var nav = $('.navbar').get(0);
        var navH = 0;
        if (nav) {
            var pos = window.getComputedStyle(nav).position;
            if (pos === 'fixed' || pos === 'sticky') {
                navH = $(nav).outerHeight() || 0;
            }
        }
        return navH + tabH + 12;
    }

    function activateWorkTab(id) {
        if (!id) {
            return;
        }
        var $link = $('.work-tabs a[href="#' + id + '"]');
        if (!$link.length) {
            return;
        }
        var changed = !$link.hasClass('active');
        if (changed) {
            $('.work-tabs a').removeClass('active');
            $link.addClass('active');
        }
        var el = $link.get(0);
        var track = document.querySelector('.work-tabs-track');
        if (!el || !track) {
            return;
        }
        var left = el.offsetLeft;
        var right = left + el.offsetWidth;
        var viewLeft = track.scrollLeft;
        var viewRight = viewLeft + track.clientWidth;
        if (changed || left < viewLeft + 12 || right > viewRight - 12) {
            el.scrollIntoView({ inline: 'center', block: 'nearest', behavior: changed ? 'smooth' : 'auto' });
        }
    }

    function workEasing() {
        return ($.easing && $.easing.easeInOutExpo) ? 'easeInOutExpo' : 'swing';
    }

    function scrollToWorkHash(hash) {
        if (!hash || !$(hash).length) {
            return;
        }
        $('html, body').stop(true).animate({
            scrollTop: $(hash).offset().top - workScrollOffset()
        }, 1500, workEasing());
        activateWorkTab(hash.slice(1));
    }

    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "" && $(this.hash).length) {
            event.preventDefault();
            
            var targetTop = $(this.hash).offset().top - 45;
            if (document.body.classList.contains('home-page')) {
                window.scrollTo({ top: targetTop, behavior: 'smooth' });
            } else {
                $('html, body').stop(true).animate({
                    scrollTop: targetTop
                }, 1500, workEasing());
            }
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });

    $(".work-tabs a").on('click', function (event) {
        if (this.hash !== "" && $(this.hash).length) {
            event.preventDefault();
            scrollToWorkHash(this.hash);
            if (this.scrollIntoView) {
                this.scrollIntoView({ inline: 'center', block: 'nearest' });
            }
            if (history.replaceState) {
                history.replaceState(null, '', this.hash);
            }
        }
    });

    if ($('.work-tabs').length) {
        $(window).on('scroll', function () {
            var fromTop = $(this).scrollTop() + workScrollOffset() + 24;
            var current = $('.work-panel').first().attr('id');
            $('.work-panel').each(function () {
                if ($(this).offset().top <= fromTop) {
                    current = this.id;
                }
            });
            activateWorkTab(current);
        }).trigger('scroll');
        if (window.location.hash) {
            setTimeout(function () {
                scrollToWorkHash(window.location.hash);
            }, 200);
        }
    }
    
    
    // Typed Initiate
    if ($('.hero .hero-text h2').length == 1) {
        var typed_strings = $('.hero .hero-text .typed-text').text();
        var typed = new Typed('.hero .hero-text h2', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }
    
    
    // Skills
    if ($.fn.waypoint) {
        $('.skills').waypoint(function () {
            $('.progress .progress-bar').each(function () {
                $(this).css("width", $(this).attr("aria-valuenow") + '%');
            });
        }, {offset: '80%'});
    }


    // Testimonials carousel
    if ($.fn.owlCarousel) {
        $(".testimonials-carousel").owlCarousel({
            center: true,
            autoplay: true,
            dots: true,
            loop: true,
            responsive: {
                0:{
                    items:1
                }
            }
        });
    }
    
    
    
    // Portfolio filter
    if ($.fn.isotope) {
        var portfolioIsotope = $('.portfolio-container').isotope({
            itemSelector: '.portfolio-item',
            layoutMode: 'fitRows'
        });

        $('#portfolio-filter li').on('click', function () {
            $("#portfolio-filter li").removeClass('filter-active');
            $(this).addClass('filter-active');
            portfolioIsotope.isotope({filter: $(this).data('filter')});
        });
    }
    
    if ($('.work-read-progress').length) {
        var $bar = $('.work-read-progress span');
        var $wrap = $('.work-read-progress');
        function updateReadProgress() {
            var el = document.documentElement;
            var max = el.scrollHeight - window.innerHeight;
            var pct = max > 0 ? Math.min(100, Math.max(0, (window.scrollY / max) * 100)) : 0;
            $bar.css('width', pct + '%');
            $wrap.attr('aria-valuenow', Math.round(pct));
        }
        $(window).on('scroll resize', updateReadProgress);
        updateReadProgress();
    }

})(jQuery);

