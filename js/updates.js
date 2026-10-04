(function () {
    "use strict";

    // Add new items above FitOS. Older history stays below it.
    // date: YYYY-MM-DD. Items from the last 15 days show a red dot on the bell.
    var PORTFOLIO_UPDATES = [
        {
            title: "FitOS case study updated",
            description: "Updated the FitOS case study with a clearer structure and current product status.",
            date: "2026-09-30",
            type: "Case Study",
            link: "/work/fitos.html#competitive",
            cta: "View case study"
        },
        {
            title: "UX and performance improvements",
            description: "Improved spacing, motion, and page load across the site.",
            date: "2026-09-12",
            type: "UX",
            link: "/",
            cta: "View homepage"
        },
        {
            title: "Dark and light mode added",
            description: "Added light and dark themes, with clearer contrast on text, cards, and hover states.",
            date: "2026-08-20",
            type: "Theme",
            link: "/",
            cta: "View homepage"
        },
        {
            title: "AI Work added",
            description: "Added an AI Work section for plugins and AI-assisted products.",
            date: "2026-07-22",
            type: "AI Work",
            link: "/#ai-work",
            cta: "View AI Work"
        },
        {
            title: "Portfolio redesigned",
            description: "Redesigned the portfolio layout and added an Updates changelog on the homepage.",
            date: "2026-07-08",
            type: "Portfolio",
            link: "/",
            cta: "View homepage"
        }
    ];

    var FRESH_DAYS = 15;
    var PREVIEW_COUNT = 5;

    function escapeHtml(value) {
        return String(value == null ? "" : value)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;");
    }

    function parseDate(value) {
        var parts = String(value || "").split("-");
        if (parts.length !== 3) {
            return null;
        }
        var date = new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]));
        return isNaN(date.getTime()) ? null : date;
    }

    function isFresh(value) {
        var date = parseDate(value);
        if (!date) {
            return false;
        }
        var now = new Date();
        now.setHours(0, 0, 0, 0);
        date.setHours(0, 0, 0, 0);
        return (now - date) / 86400000 <= FRESH_DAYS;
    }

    var MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    function formatDate(value) {
        var date = parseDate(value);
        if (!date) {
            return "";
        }
        return date.getDate() + " " + MONTHS[date.getMonth()] + " " + date.getFullYear();
    }

    function ctaLabel(item) {
        return String(item.cta || "View update").replace(/\s*→\s*$/, "").trim();
    }

    function renderItem(item) {
        var title = item.title || "";
        var description = item.description || item.text || "";
        var link = item.link || item.href || "#";
        var dateLabel = formatDate(item.date);

        return (
            '<a class="site-updates-item" href="' + escapeHtml(link) + '">' +
            '<div class="site-updates-item-head">' +
            "<h3>" + escapeHtml(title) + "</h3>" +
            '<time datetime="' + escapeHtml(item.date || "") + '">' + escapeHtml(dateLabel) + "</time>" +
            "</div>" +
            "<p>" + escapeHtml(description) + "</p>" +
            '<span class="site-updates-cta">' +
            escapeHtml(ctaLabel(item)) +
            ' <span class="site-updates-cta-arrow" aria-hidden="true">→</span>' +
            "</span>" +
            "</a>"
        );
    }

    var root = document.querySelector(".site-updates");
    if (!root) {
        return;
    }

    var button = root.querySelector(".site-updates-btn");
    var panel = root.querySelector(".site-updates-panel");
    var list = root.querySelector(".site-updates-list");
    var dot = root.querySelector(".site-updates-dot");
    var status = root.querySelector(".site-updates-status");
    var more = root.querySelector(".site-updates-more");
    if (!button || !panel || !list || !dot) {
        return;
    }

    var items = PORTFOLIO_UPDATES.slice().sort(function (a, b) {
        return String(b.date).localeCompare(String(a.date));
    });
    var showingAll = false;
    var hasFresh = items.some(function (item) {
        return isFresh(item.date);
    });

    function renderList() {
        if (!items.length) {
            list.innerHTML = '<p class="site-updates-empty">No updates yet.</p>';
            if (more) {
                more.hidden = true;
            }
            return;
        }

        var visible = showingAll ? items : items.slice(0, PREVIEW_COUNT);
        list.innerHTML = visible.map(renderItem).join("");

        if (more) {
            more.hidden = showingAll || items.length <= PREVIEW_COUNT;
        }
    }

    renderList();
    dot.hidden = !hasFresh;
    if (status) {
        status.hidden = !hasFresh;
    }
    if (hasFresh) {
        button.setAttribute("aria-label", "Portfolio updates, new items available");
    }

    function setOpen(open) {
        panel.hidden = !open;
        button.setAttribute("aria-expanded", open ? "true" : "false");
    }

    button.addEventListener("click", function (event) {
        event.stopPropagation();
        setOpen(panel.hidden);
    });

    if (more) {
        more.addEventListener("click", function (event) {
            event.stopPropagation();
            showingAll = true;
            renderList();
        });
    }

    document.addEventListener("click", function (event) {
        if (!root.contains(event.target)) {
            setOpen(false);
        }
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            setOpen(false);
            button.focus();
        }
    });
})();
