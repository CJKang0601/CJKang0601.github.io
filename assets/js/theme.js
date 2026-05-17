(function () {
    function getStoredTheme() {
        var theme = localStorage.getItem("theme");
        if (theme !== "light" && theme !== "dark") {
            theme = "dark";
        }
        return theme;
    }

    function applyTheme(theme) {
        document.documentElement.setAttribute("data-theme", theme);
    }

    window.initTheme = function () {
        applyTheme(getStoredTheme());

        document.addEventListener("DOMContentLoaded", function () {
            var toggle = document.getElementById("theme-toggle");
            if (!toggle) return;

            toggle.addEventListener("click", function () {
                var theme = getStoredTheme();
                var next = theme === "light" ? "dark" : "light";
                localStorage.setItem("theme", next);
                applyTheme(next);
            });
        });
    };
})();
