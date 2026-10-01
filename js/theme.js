(function () {
    "use strict";

    var STORAGE_KEY = "portfolio-theme";

    function getTheme() {
        try {
            var stored = localStorage.getItem(STORAGE_KEY);
            if (stored === "dark" || stored === "light") {
                return stored;
            }
        } catch (e) {}
        return "light";
    }

    function applyTheme(theme) {
        var next = theme === "dark" ? "dark" : "light";
        document.documentElement.setAttribute("data-theme", next);
        try {
            localStorage.setItem(STORAGE_KEY, next);
        } catch (e) {}
        var buttons = document.querySelectorAll(".theme-switch");
        for (var i = 0; i < buttons.length; i++) {
            var isDark = next === "dark";
            buttons[i].setAttribute("aria-checked", isDark ? "true" : "false");
            buttons[i].setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
        }
    }

    applyTheme(getTheme());

    document.addEventListener("click", function (event) {
        var button = event.target.closest(".theme-switch");
        if (!button) {
            return;
        }
        event.preventDefault();
        applyTheme(getTheme() === "dark" ? "light" : "dark");
    });
})();
