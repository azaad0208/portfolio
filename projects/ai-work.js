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
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#10A37F" d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.1419.0814 4.783-2.7582a.7712.7712 0 0 0 .7806 0l5.8428 3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3313-1.9728V11.6a.7663.7663 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0834-3.0089l-.1419-.0804-4.7865-2.757a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638v-2.3043a.0804.0804 0 0 1 .0332-.0615l4.8597-2.8007a.7759.7759 0 0 0 .7854 0l4.8303 2.7913v2.3374l-2.0231 1.1622a.0757.0757 0 0 1-.071 0z"/></svg>',
  gemini:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#8E80F5" d="M12 2c1.2 4.4 4.6 7.8 9 9-4.4 1.2-7.8 4.6-9 9-1.2-4.4-4.6-7.8-9-9 4.4-1.2 7.8-4.6 9-9z"/></svg>',
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
    image: "",
    chips: [
      { label: "Gemini", icon: "gemini" },
      { label: "Google AI Studio", icon: "google-ai" },
      { label: "Cursor", icon: "cursor" },
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
    const empty = document.getElementById("aiWorkModalEmpty");
    const media = document.getElementById("aiWorkModalMedia");
    const title = document.getElementById("aiWorkModalTitle");
    const tags = document.getElementById("aiWorkModalTags");
    const text = document.getElementById("aiWorkModalText");
    const links = document.getElementById("aiWorkModalLinks");

    const hasImage = Boolean(item.image);
    media.classList.toggle("has-image", hasImage);
    if (hasImage) {
      image.hidden = false;
      image.src = item.image;
      image.alt = item.name;
      empty.hidden = true;
    } else {
      image.hidden = true;
      image.removeAttribute("src");
      image.alt = "";
      empty.hidden = false;
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
