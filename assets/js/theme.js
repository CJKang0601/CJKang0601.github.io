(function () {
    function getStoredSetting() {
        var setting = localStorage.getItem("theme");
        if (setting !== "system" && setting !== "light" && setting !== "dark") {
            setting = "system";
        }
        return setting;
    }

    function getComputedTheme(setting) {
        if (setting === "system") {
            var media = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)");
            return media && media.matches ? "dark" : "light";
        }
        return setting;
    }

    function applyTheme(setting) {
        var theme = getComputedTheme(setting);
        document.documentElement.setAttribute("data-theme-setting", setting);
        document.documentElement.setAttribute("data-theme", theme);
    }

    window.initTheme = function () {
        applyTheme(getStoredSetting());

        document.addEventListener("DOMContentLoaded", function () {
            var toggle = document.getElementById("theme-toggle");
            if (!toggle) return;

            toggle.addEventListener("click", function () {
                var setting = getStoredSetting();
                var next = setting === "system" ? "light" : setting === "light" ? "dark" : "system";
                localStorage.setItem("theme", next);
                applyTheme(next);
            });
        });

        if (window.matchMedia) {
            window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function () {
                applyTheme(getStoredSetting());
            });
        }
    };
})();
