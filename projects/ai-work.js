const chipIcons = {
  figma:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#F24E1E" d="M8 24a4 4 0 0 0 4-4v-4H8a4 4 0 1 0 0 8z"/><path fill="#A259FF" d="M12 16H8a4 4 0 0 1 0-8h4v8z"/><path fill="#1ABCFE" d="M12 8H8a4 4 0 0 1 0-8h4v8z"/><path fill="#0ACF83" d="M16 8a4 4 0 1 0 0-8h-4v8h4z"/><path fill="#FF7262" d="M16 16a4 4 0 1 0 0-8h-4v8h4z"/></svg>',
  "google-ai":
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#4285F4" d="M12 2l1.8 5.4L19 9.2l-5.2 1.8L12 16.4 10.2 11 5 9.2l5.2-1.8z"/><path fill="#EA4335" d="M18 13l.9 2.7 2.7.9-2.7.9L18 20.2l-.9-2.7-2.7-.9 2.7-.9z"/><path fill="#FBBC05" d="M6.5 14.5l.7 2.1 2.1.7-2.1.7-.7 2.1-.7-2.1-2.1-.7 2.1-.7z"/><path fill="#34A853" d="M16.2 5.2l.5 1.4 1.4.5-1.4.5-.5 1.4-.5-1.4-1.4-.5 1.4-.5z"/></svg>',
  cursor:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#181818" d="M4.2 2.4l16 8.2c.8.4.7 1.6-.2 1.8l-6.4 1.5-1.5 6.4c-.2.9-1.4 1-1.8.2L4.2 2.4z"/></svg>',
  claude:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#D97757" d="M13.6 2.2l2.1 6.6 6.6 2.1-6.6 2.1-2.1 6.6-2.1-6.6-6.6-2.1 6.6-2.1 2.1-6.6z"/></svg>',
  chatgpt:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#10A37F" d="M12.4 3.1c1.5-2.6 5.3-2.1 6.4.8 1.9.3 3.4 2.1 3.2 4.1-.1 1.3-.8 2.4-1.9 3.1.4 2.7-1.6 5.3-4.4 5.6-.6 1.8-2.4 3-4.3 2.9-1.3 0-2.5-.6-3.3-1.6-1.9.3-3.8-.8-4.5-2.6-.5-1.2-.4-2.6.3-3.7C2.5 10.5 2 8 3.3 6.1c1-1.4 2.7-2.1 4.4-1.9.8-1.4 2.4-2.2 4.1-2 .2 0 .5 0 .6.9zm-.3 1.8c-.8 0-1.6.4-2.1 1.1l-.4.6-.7-.2c-1.2-.3-2.5.3-3 1.4-.5 1.1 0 2.4 1 3l.6.3-.2.7c-.3.9-.1 1.9.5 2.6.7.8 1.8 1.1 2.8.7l.7-.3.4.6c.5.7 1.3 1.1 2.2 1.1 1.1 0 2.1-.7 2.4-1.8l.2-.7.7.1c1.3.2 2.6-.7 2.9-2 .3-1.3-.5-2.6-1.8-3l-.7-.2.1-.7c.2-1.1-.3-2.2-1.3-2.8-.7-.4-1.5-.5-2.3-.3l-.7.2-.3-.6c-.5-.7-1.3-1.1-2.1-1.1z"/></svg>',
  gemini:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#8E80F5" d="M12 2c1.2 4.4 4.6 7.8 9 9-4.4 1.2-7.8 4.6-9 9-1.2-4.4-4.6-7.8-9-9 4.4-1.2 7.8-4.6 9-9z"/></svg>',
};

const aiWorkItems = [
  {
    id: "hive",
    title: "Hive AI",
    short:
      "A Figma plugin that creates, governs, and scores design systems with tokens and export.",
    name: "Hive AI — Figma Design System Plugin",
    image: "img/abhishek-bhowmick.webp",
    chips: [
      { label: "Figma", icon: "figma" },
      { label: "Google AI Studio", icon: "google-ai" },
    ],
    description:
      "Enterprise Figma plugin to create, govern, and audit design systems: primitive, semantic, and component tokens, CSS/SCSS/W3C/Style Dictionary export, Auto-Heal, and a 0–100% design-system health score.",
    url: "",
    urlName: "",
  },
  {
    id: "vernac",
    title: "Vernac",
    short:
      "One-click translation of Figma text layers into Indic and other languages.",
    name: "Vernac — Multi-Language Text Translator",
    image: "img/abhishek-bhowmick.webp",
    chips: [
      { label: "Figma", icon: "figma" },
      { label: "ChatGPT", icon: "chatgpt" },
    ],
    description:
      "One-click translation of Figma text layers into Indic and other languages, with side-by-side localized frames, layer exclusions for brands and logos, and proofreading before generate.",
    url: "https://www.figma.com/community/plugin/1665010377089179726/vernac-instant-multi-language-text-translator",
    urlName: "Figma Community",
  },
  {
    id: "vivid",
    title: "Vivid",
    short: "Turn any image into palettes and export HEX, RGB, CSS, and Figma color styles.",
    name: "Vivid Color Palette Generator",
    image: "img/abhishek-bhowmick.webp",
    chips: [
      { label: "Figma", icon: "figma" },
      { label: "Gemini", icon: "gemini" },
    ],
    description:
      "Turns any image into Dominant, Vibrant, Muted, Contrast, and Mixed palettes. HEX/RGB/CSS/HSL/HSB, lock and regenerate, PNG/JSON/CSS export, and Figma Color Styles.",
    url: "https://www.figma.com/community/plugin/1573288416469934658/vivid-color-palette-generator",
    urlName: "Figma Community",
  },
  {
    id: "arcade",
    title: "Design Arcade",
    short: "Playable arcade games built inside Figma, with scoring and difficulty.",
    name: "Design Arcade — Figma Gaming Plugin",
    image: "img/abhishek-bhowmick.webp",
    chips: [
      { label: "Figma", icon: "figma" },
      { label: "Cursor", icon: "cursor" },
    ],
    description:
      "Playable arcade games inside Figma (True or False, Car Race, Catch the Egg, Shoot Balls, Snake Rush) with scoring, difficulty, economy, skins, and pause/revive — published on Figma Community.",
    url: "",
    urlName: "",
  },
  {
    id: "fitos",
    title: "FitOS",
    short: "A multi-branch gym OS for owners, trainers, and members.",
    name: "FitOS — Multi-Branch Gym OS",
    image: "img/abhishek-bhowmick.webp",
    chips: [
      { label: "Cursor", icon: "cursor" },
      { label: "Claude Code", icon: "claude" },
    ],
    description:
      "Operating system connecting gym owners, branch managers, trainers, and members: revenue and staffing, check-ins and pricing, trainer workouts, and a QR member pass with live sync.",
    url: "",
    urlName: "",
  },
  {
    id: "quickbite",
    title: "Quickbite",
    short: "Restaurant ops from dine-in and kitchen display through to delivery.",
    name: "Quickbite — Restaurant Ops & Delivery",
    image: "img/abhishek-bhowmick.webp",
    chips: [
      { label: "Cursor", icon: "cursor" },
      { label: "ChatGPT", icon: "chatgpt" },
    ],
    description:
      "Platform for diners, kitchen, managers, and riders: dine-in/takeaway/delivery ordering, kitchen display, live stock, and delivery claim-to-doorstep workflows.",
    url: "",
    urlName: "",
  },
];

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function chipSpans(chips) {
  return chips
    .map((chip) => {
      const icon = chipIcons[chip.icon] || "";
      return `<span class="ai-chip">${icon}<span>${escapeHtml(chip.label)}</span></span>`;
    })
    .join("");
}

function chipsMarkup(chips) {
  return `<div class="ai-work-chips">${chipSpans(chips)}</div>`;
}

function cardMarkup(item) {
  return `
    <article class="ai-work-card" data-ai-id="${escapeHtml(item.id)}" tabindex="0" role="button">
      <h3>${escapeHtml(item.title)}</h3>
      ${chipsMarkup(item.chips)}
      <p>${escapeHtml(item.short)}</p>
      <span class="btn">View</span>
    </article>
  `;
}

(function initAiWork() {
  const marquee = document.getElementById("ai-work-carousel");
  const track = document.getElementById("ai-work-track");
  if (!marquee || !track) {
    return;
  }

  const desktopQuery = window.matchMedia("(min-width: 768px)");

  function isDesktop() {
    return desktopQuery.matches;
  }

  function renderTrack() {
    const cards = aiWorkItems.map(cardMarkup).join("");
    track.innerHTML = isDesktop() ? cards + cards : cards;
    track.classList.toggle("is-marquee", isDesktop());
    track.classList.remove("is-paused");
  }

  function setPaused(paused) {
    if (!isDesktop()) {
      return;
    }
    track.classList.toggle("is-paused", paused);
  }

  function openAiWork(id) {
    const item = aiWorkItems.find((entry) => entry.id === id);
    if (!item) {
      return;
    }

    const image = document.getElementById("aiWorkModalImage");
    const title = document.getElementById("aiWorkModalTitle");
    const tags = document.getElementById("aiWorkModalTags");
    const text = document.getElementById("aiWorkModalText");
    const links = document.getElementById("aiWorkModalLinks");

    image.src = item.image;
    image.alt = item.name;
    title.textContent = item.name;
    tags.className = "ai-work-chips";
    tags.innerHTML = chipSpans(item.chips);
    text.textContent = item.description;

    if (item.url) {
      links.innerHTML = `<a class="btn" target="_blank" rel="noopener noreferrer" href="${escapeHtml(
        item.url
      )}">${escapeHtml(item.urlName || "Open")}</a>`;
      links.style.display = "";
    } else {
      links.innerHTML = "";
      links.style.display = "none";
    }

    setPaused(true);
    $("#aiWorkModal").modal("show");
  }

  renderTrack();

  if (desktopQuery.addEventListener) {
    desktopQuery.addEventListener("change", renderTrack);
  } else if (desktopQuery.addListener) {
    desktopQuery.addListener(renderTrack);
  }

  marquee.addEventListener("click", function (event) {
    const card = event.target.closest("[data-ai-id]");
    if (!card) {
      return;
    }
    openAiWork(card.getAttribute("data-ai-id"));
  });

  marquee.addEventListener("keydown", function (event) {
    if (event.key !== "Enter" && event.key !== " ") {
      return;
    }
    const card = event.target.closest("[data-ai-id]");
    if (!card) {
      return;
    }
    event.preventDefault();
    openAiWork(card.getAttribute("data-ai-id"));
  });

  marquee.addEventListener(
    "touchstart",
    function () {
      setPaused(true);
    },
    { passive: true }
  );

  marquee.addEventListener("touchend", function () {
    if (!$("#aiWorkModal").hasClass("show")) {
      setPaused(false);
    }
  });

  $("#aiWorkModal").on("hidden.bs.modal", function () {
    setPaused(false);
  });
})();
