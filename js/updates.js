(function () {
    "use strict";

    // Add a new item at the top of this list.
    // date: YYYY-MM-DD. Items from the last 15 days show a red dot on the bell.
    var PORTFOLIO_UPDATES = [
        {
            id: "fitos-case-study-2026-09-30",
            date: "2026-09-30",
            title: "FitOS case study updated",
            text: "The FitOS case study has been updated with a clearer research-to-solution structure and current product status.",
            href: "work/fitos.html",
            label: "View"
        }
    ];

    var FRESH_DAYS = 15;

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

    function formatDate(value) {
        var date = parseDate(value);
        if (!date) {
            return "";
        }
        return date.toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric"
        });
    }

    function itemIcon() {
        return '<span class="site-updates-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/></svg></span>';
    }

    var root = document.querySelector(".site-updates");
    if (!root) {
        return;
    }

    var button = root.querySelector(".site-updates-btn");
    var panel = root.querySelector(".site-updates-panel");
    var list = root.querySelector(".site-updates-list");
    var dot = root.querySelector(".site-updates-dot");
    if (!button || !panel || !list || !dot) {
        return;
    }

    var items = PORTFOLIO_UPDATES.slice().sort(function (a, b) {
        return String(b.date).localeCompare(String(a.date));
    });

    if (!items.length) {
        list.innerHTML = '<p class="site-updates-empty">No updates yet.</p>';
        dot.hidden = true;
    } else {
        list.innerHTML = items.map(function (item) {
            return (
                '<article class="site-updates-item">' +
                itemIcon() +
                "<div>" +
                "<h3>" + escapeHtml(item.title) + "</h3>" +
                "<p>" + escapeHtml(item.text) + "</p>" +
                '<div class="site-updates-meta">' +
                '<a class="site-updates-view" href="' + escapeHtml(item.href) + '">' + escapeHtml(item.label || "View") + "</a>" +
                "<time datetime=\"" + escapeHtml(item.date) + "\">" + escapeHtml(formatDate(item.date)) + "</time>" +
                "</div></div></article>"
            );
        }).join("");
        dot.hidden = !items.some(function (item) {
            return isFresh(item.date);
        });
    }

    function setOpen(open) {
        panel.hidden = !open;
        button.setAttribute("aria-expanded", open ? "true" : "false");
    }

    button.addEventListener("click", function (event) {
        event.stopPropagation();
        setOpen(panel.hidden);
    });

    document.addEventListener("click", function (event) {
        if (!root.contains(event.target)) {
            setOpen(false);
        }
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            setOpen(false);
        }
    });
})();
