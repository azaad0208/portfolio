(function () {
    "use strict";

    var STORAGE_KEY = "portfolio-theme";
    var HINT_KEY = "portfolio-theme-hint-v2";

    function getTheme() {
        try {
            var stored = localStorage.getItem(STORAGE_KEY);
            if (stored === "dark" || stored === "light") {
                return stored;
            }
        } catch (e) {}
        if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
            return "dark";
        }
        return "light";
    }

    function systemPrefersDark() {
        return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    }

    function applyFavicon() {
        var file = systemPrefersDark() ? "favicon-dark.svg" : "favicon-light.svg";
        var links = document.querySelectorAll('link[rel="icon"]:not([media]), link[rel="shortcut icon"]:not([media]), link[rel="apple-touch-icon"]');
        for (var i = 0; i < links.length; i++) {
            var href = links[i].getAttribute("href") || "/img/favicon.png";
            var dir = href.replace(/[^/]+$/, "");
            links[i].setAttribute("href", dir + file);
        }
    }

    function applyTheme(theme) {
        var next = theme === "dark" ? "dark" : "light";
        document.documentElement.setAttribute("data-theme", next);
        try {
            localStorage.setItem(STORAGE_KEY, next);
        } catch (e) {}
        applyFavicon();
        try {
            document.documentElement.dispatchEvent(
                new CustomEvent("portfolio-theme-change", { detail: { theme: next } })
            );
        } catch (e) {}
        var buttons = document.querySelectorAll(".theme-switch");
        for (var i = 0; i < buttons.length; i++) {
            var isDark = next === "dark";
            buttons[i].setAttribute("aria-checked", isDark ? "true" : "false");
            buttons[i].setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
        }
    }

    function hintIsDismissed() {
        try {
            return localStorage.getItem(HINT_KEY) === "1";
        } catch (e) {
            return false;
        }
    }

    function setHintsHidden(hidden) {
        var hints = document.querySelectorAll(".theme-hint");
        for (var i = 0; i < hints.length; i++) {
            if (hidden) {
                hints[i].setAttribute("hidden", "");
                hints[i].setAttribute("aria-hidden", "true");
            } else {
                hints[i].removeAttribute("hidden");
                hints[i].removeAttribute("aria-hidden");
            }
        }
    }

    function dismissHint() {
        try {
            localStorage.setItem(HINT_KEY, "1");
        } catch (e) {}
        document.documentElement.classList.remove("has-theme-hint");
        document.documentElement.classList.add("theme-hint-gone");
        var wait = 480;
        try {
            if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
                wait = 0;
            }
        } catch (e) {}
        window.setTimeout(function () {
            setHintsHidden(true);
        }, wait);
    }

    function initHint() {
        if (hintIsDismissed()) {
            document.documentElement.classList.add("theme-hint-gone");
            setHintsHidden(true);
            return;
        }
        setHintsHidden(false);
        window.requestAnimationFrame(function () {
            window.requestAnimationFrame(function () {
                document.documentElement.classList.add("has-theme-hint");
            });
        });
    }

    function syncHintWithScroll() {
        if (hintIsDismissed()) {
            return;
        }
        var scrolled = (window.pageYOffset || document.documentElement.scrollTop || 0) > 12;
        document.documentElement.classList.toggle("theme-hint-scrolled", scrolled);
    }

    applyTheme(getTheme());
    applyFavicon();
    initHint();
    syncHintWithScroll();
    window.addEventListener("scroll", syncHintWithScroll, { passive: true });
    if (window.matchMedia) {
        var scheme = window.matchMedia("(prefers-color-scheme: dark)");
        if (scheme.addEventListener) {
            scheme.addEventListener("change", applyFavicon);
        } else if (scheme.addListener) {
            scheme.addListener(applyFavicon);
        }
    }

    document.addEventListener("click", function (event) {
        var hint = event.target.closest(".theme-hint");
        var button = event.target.closest(".theme-switch");
        if (!button && !hint) {
            return;
        }
        event.preventDefault();
        applyTheme(getTheme() === "dark" ? "light" : "dark");
        if (hint) {
            dismissHint();
        }
    });
})();
