(function () {
  "use strict";

  var FILTERS = [
    { id: "all", label: "All" },
    { id: "product", label: "Product design" },
    { id: "saas", label: "SaaS and enterprise" },
    { id: "ai", label: "AI and design systems" },
    { id: "experimental", label: "Experimental" },
  ];

  var listEl = document.getElementById("work-board-list");
  var filtersEl = document.querySelector(".work-filters");
  if (!listEl || !filtersEl) {
    return;
  }

  function escapeHtml(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function renderChips(chips) {
    if (typeof window.chipSpans === "function") {
      return '<div class="ai-work-chips">' + window.chipSpans(chips) + "</div>";
    }
    return (
      '<div class="ai-work-chips">' +
      (chips || [])
        .map(function (chip) {
          return '<span class="ai-chip"><span>' + escapeHtml(chip.label) + "</span></span>";
        })
        .join("") +
      "</div>"
    );
  }

  function unifiedItems() {
    var aiItems = (window.aiWorkItems || []).map(function (item) {
      return {
        kind: "ai",
        id: item.id,
        title: item.title,
        image: item.image || "",
        description: item.short || item.description,
        chips: item.chips || [],
        skills: [],
        url: item.url || "",
        page: item.page || "",
        comingSoon: Boolean(item.comingSoon),
        categories: item.categories || ["ai"],
      };
    });

    var projects = (window.portfolioProjects || []).map(function (item, index) {
      return {
        kind: "project",
        id: item.id || "project-" + index,
        title: item.project,
        image: item.image || "",
        description: item.description,
        chips: [],
        skills: item.skills || [],
        url: item.comingSoon ? "" : item.url || "",
        page: "",
        comingSoon: Boolean(item.comingSoon),
        categories: item.categories || ["product"],
      };
    });

    var merged = aiItems.concat(projects);
    var order = [
      "fitos",
      "deals",
      "wallicon",
      "hive",
      "arcade",
      "quickbite",
      "vernac",
      "vivid",
      "restro",
      "gopark",
      "krayin",
      "bagisto",
    ];
    merged.sort(function (a, b) {
      var ai = order.indexOf(a.id);
      var bi = order.indexOf(b.id);
      return (ai === -1 ? 80 : ai) - (bi === -1 ? 80 : bi);
    });
    return merged;
  }

  var items = unifiedItems();
  var activeFilter = "all";

  function matchesFilter(item, filter) {
    if (filter === "all") {
      return true;
    }
    return (item.categories || []).indexOf(filter) !== -1;
  }

  function ctaMarkup(item) {
    if (item.kind === "ai" && !item.page && !item.url) {
      var details =
        '<button type="button" class="project-card-link" data-ai-open="' +
        escapeHtml(item.id) +
        '">View details</button>';
      if (item.comingSoon) {
        details +=
          '<span class="project-card-soon">Case study coming soon</span>';
      }
      return details;
    }
    if (item.comingSoon) {
      return '<span class="project-card-soon">Case study coming soon</span>';
    }
    if (item.page) {
      return (
        '<a class="project-card-link" href="' +
        escapeHtml(item.page) +
        '">View case study</a>'
      );
    }
    if (item.url) {
      return (
        '<a target="_blank" rel="noopener noreferrer" class="project-card-link" href="' +
        escapeHtml(item.url) +
        '">View project</a>'
      );
    }
    return "";
  }

  function tileMarkup(item) {
    var cats = (item.categories || []).join(" ");
    var mediaInner = item.image
      ? '<div class="project-card-media-shift"><img src="' +
        escapeHtml(item.image) +
        '" alt="' +
        escapeHtml(item.title) +
        '" /></div>'
      : "";
    var tags = item.chips.length
      ? renderChips(item.chips)
      : item.skills.length
        ? '<div class="blog-meta">' +
          item.skills
            .map(function (skill) {
              return "<p>" + escapeHtml(skill) + "</p>";
            })
            .join("") +
          "</div>"
        : "";
    var modalAttr =
      item.kind === "ai" && !item.page && !item.url
        ? ' data-ai-id="' + escapeHtml(item.id) + '"'
        : "";

    return (
      '<div class="col-md-6 mb-4 work-grid-item" data-cats="' +
      escapeHtml(cats) +
      '">' +
      '<article class="blog-item project-card h-100' +
      (item.image ? "" : " project-card--text") +
      '"' +
      modalAttr +
      ">" +
      '<div class="blog-img project-card-media">' +
      mediaInner +
      "</div>" +
      '<div class="blog-text">' +
      '<h3 class="project-card-title">' +
      escapeHtml(item.title) +
      "</h3>" +
      tags +
      '<div class="text-dsc"><p class="truncate">' +
      escapeHtml(item.description) +
      "</p>" +
      '<div class="project-card-actions">' +
      ctaMarkup(item) +
      "</div></div></div></article></div>"
    );
  }

  function renderFilters() {
    filtersEl.innerHTML = FILTERS.map(function (filter) {
      var selected = filter.id === activeFilter;
      return (
        '<button type="button" class="work-filter' +
        (selected ? " is-active" : "") +
        '" role="tab" aria-selected="' +
        (selected ? "true" : "false") +
        '" data-filter="' +
        filter.id +
        '">' +
        escapeHtml(filter.label) +
        "</button>"
      );
    }).join("");
  }

  function visibleItems() {
    return items.filter(function (item) {
      return matchesFilter(item, activeFilter);
    });
  }

  function renderList() {
    var shown = visibleItems();
    if (!shown.length) {
      listEl.innerHTML = '<p class="work-empty">No work in this category yet.</p>';
      return;
    }
    listEl.innerHTML = shown
      .map(function (item, i) {
        return tileMarkup(item);
      })
      .join("");
    if (typeof window.bindWorkMediaParallax === "function") {
      window.bindWorkMediaParallax();
    }
    if (typeof ScrollTrigger !== "undefined") {
      ScrollTrigger.refresh();
    }
  }

  function applyFilter(filter) {
    activeFilter = FILTERS.some(function (entry) {
      return entry.id === filter;
    })
      ? filter
      : "all";
    renderFilters();
    renderList();
  }

  function remapLegacyHash() {
    var hash = (window.location.hash || "").replace("#", "");
    if (hash === "ai-work" || hash === "blog") {
      if (window.history && window.history.replaceState) {
        window.history.replaceState(null, "", "#work");
      } else {
        window.location.hash = "work";
      }
    }
  }

  remapLegacyHash();
  applyFilter("all");

  filtersEl.addEventListener("click", function (event) {
    var button = event.target.closest("[data-filter]");
    if (!button) {
      return;
    }
    applyFilter(button.getAttribute("data-filter"));
  });

  listEl.addEventListener("click", function (event) {
    var opener = event.target.closest("[data-ai-open], [data-ai-id]");
    if (!opener) {
      return;
    }
    if (event.target.closest("a")) {
      return;
    }
    var id = opener.getAttribute("data-ai-open") || opener.getAttribute("data-ai-id");
    if (!id || typeof window.openAiWork !== "function") {
      return;
    }
    event.preventDefault();
    window.openAiWork(id);
  });

  window.addEventListener("hashchange", remapLegacyHash);

  if (typeof window.setupHeadingReveal === "function") {
    window.setupHeadingReveal();
  }
})();
