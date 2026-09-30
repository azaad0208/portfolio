const chipIcons = {
  figma:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#F24E1E" d="M8 24a4 4 0 0 0 4-4v-4H8a4 4 0 1 0 0 8z"/><path fill="#A259FF" d="M12 16H8a4 4 0 0 1 0-8h4v8z"/><path fill="#1ABCFE" d="M12 8H8a4 4 0 0 1 0-8h4v8z"/><path fill="#0ACF83" d="M16 8a4 4 0 1 0 0-8h-4v8h4z"/><path fill="#FF7262" d="M16 16a4 4 0 1 0 0-8h-4v8h4z"/></svg>',
  "google-ai":
    '<img src="img/icons/google-ai-studio.webp" alt="" />',
  cursor:
    '<img src="img/icons/cursor.webp" alt="" />',
  claude:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#D97757" d="M13.6 2.2l2.1 6.6 6.6 2.1-6.6 2.1-2.1 6.6-2.1-6.6-6.6-2.1 6.6-2.1 2.1-6.6z"/></svg>',
  chatgpt:
    '<img src="img/icons/chatgpt-logo.webp" alt="" />',
  gemini:
    '<img src="img/icons/gemini.webp" alt="" />',
  vscode:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#007ACC" d="M23.15 2.59 18.21.21a1.49 1.49 0 0 0-1.7.29l-9.46 8.63-4.12-3.13a1 1 0 0 0-1.28.06L.33 7.26a1 1 0 0 0 0 1.48L3.9 12 .33 15.26a1 1 0 0 0 0 1.48l1.32 1.2a1 1 0 0 0 1.28.06l4.12-3.13 9.46 8.63a1.49 1.49 0 0 0 1.7.29l4.94-2.38A1.5 1.5 0 0 0 24 20.06V3.94a1.5 1.5 0 0 0-.85-1.35zM18 16.2 10.83 12 18 7.8v8.4z"/></svg>',
};

const aiWorkItems = [
  {
    id: "hive",
    title: "Hive AI",
    short:
      "A Figma plugin that creates, governs, and scores design systems with tokens and export.",
    name: "Hive AI — Figma Design System Plugin",
    image: "",
    chips: [
      { label: "Figma", icon: "figma" },
      { label: "Gemini", icon: "gemini" },
      { label: "Claude Code", icon: "claude" },
    ],
    description:
      "Enterprise Figma plugin to create, govern, and audit design systems: primitive, semantic, and component tokens, CSS/SCSS/W3C/Style Dictionary export, Auto-Heal, and a 0–100% design-system health score.",
    url: "",
    urlName: "",
  },
  {
    id: "arcade",
    title: "Design Arcade",
    short: "Playable arcade games built inside Figma, with scoring and difficulty.",
    name: "Design Arcade — Figma Gaming Plugin",
    image: "img/projects/ai/design-arcade.webp",
    chips: [
      { label: "Figma", icon: "figma" },
      { label: "ChatGPT", icon: "chatgpt" },
      { label: "Gemini", icon: "gemini" },
      { label: "VS Code", icon: "vscode" },
    ],
    description:
      "Playable arcade games inside Figma (True or False, Car Race, Catch the Egg, Shoot Balls, Snake Rush) with scoring, difficulty, economy, skins, and pause/revive — published on Figma Community.",
    url: "https://www.figma.com/community/plugin/1630586678262398992/design-arcade",
    urlName: "Figma Community",
  },
  {
    id: "fitos",
    title: "FitOS",
    short: "A multi-branch gym OS for owners, trainers, and members.",
    name: "FitOS — Multi-Branch Gym OS",
    image: "img/projects/ai/Fitos-gym_ecosystem.webp",
    chips: [
      { label: "Gemini", icon: "gemini" },
      { label: "Google AI Studio", icon: "google-ai" },
      { label: "Cursor", icon: "cursor" },
    ],
    description:
      "Operating system connecting gym owners, branch managers, trainers, and members: revenue and staffing, check-ins and pricing, trainer workouts, and a QR member pass with live sync.",
    url: "",
    urlName: "",
    page: "work/fitos.html",
  },
  {
    id: "quickbite",
    title: "QuickByte",
    short: "Restaurant ops from dine-in and kitchen display through to delivery.",
    name: "QuickByte — Restaurant Ops & Delivery",
    image: "",
    chips: [
      { label: "Gemini", icon: "gemini" },
      { label: "Google AI Studio", icon: "google-ai" },
      { label: "ChatGPT", icon: "chatgpt" },
    ],
    description:
      "Platform for diners, kitchen, managers, and riders: dine-in/takeaway/delivery ordering, kitchen display, live stock, and delivery claim-to-doorstep workflows.",
    url: "",
    urlName: "",
    page: "work/quickbyte.html",
  },
  {
    id: "vernac",
    title: "Vernac",
    short:
      "One-click translation of Figma text layers into Indic and other languages.",
    name: "Vernac — Multi-Language Text Translator",
    image: "img/projects/ai/vernac.webp",
    chips: [
      { label: "Figma", icon: "figma" },
      { label: "Gemini", icon: "gemini" },
      { label: "VS Code", icon: "vscode" },
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
    image: "img/projects/ai/vivid.webp",
    chips: [
      { label: "Figma", icon: "figma" },
      { label: "Gemini", icon: "gemini" },
      { label: "VS Code", icon: "vscode" },
    ],
    description:
      "Turns any image into Dominant, Vibrant, Muted, Contrast, and Mixed palettes. HEX/RGB/CSS/HSL/HSB, lock and regenerate, PNG/JSON/CSS export, and Figma Color Styles.",
    url: "https://www.figma.com/community/plugin/1573288416469934658/vivid-color-palette-generator",
    urlName: "Figma Community",
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
  const action = item.page ? "View details" : "View";
  return `
    <article class="ai-work-card" data-ai-id="${escapeHtml(item.id)}" tabindex="0" role="button">
      <h3>${escapeHtml(item.title)}</h3>
      ${chipsMarkup(item.chips)}
      <p>${escapeHtml(item.short)}</p>
      <span class="btn">${action}</span>
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

    if (item.page) {
      window.location.assign(item.page);
      return;
    }

    const image = document.getElementById("aiWorkModalImage");
    const media = document.getElementById("aiWorkModalMedia");
    const title = document.getElementById("aiWorkModalTitle");
    const tags = document.getElementById("aiWorkModalTags");
    const text = document.getElementById("aiWorkModalText");
    const links = document.getElementById("aiWorkModalLinks");

    const hasImage = Boolean(item.image);
    media.hidden = !hasImage;
    if (hasImage) {
      image.src = item.image;
      image.alt = item.name;
    } else {
      image.removeAttribute("src");
      image.alt = "";
    }
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
