(function () {
    var root = document.documentElement;
    var toggle = document.querySelector(".theme-toggle");
    var icon = document.querySelector(".theme-icon");

    function setTheme(theme) {
        root.dataset.theme = theme;
        localStorage.setItem("theme", theme);
        if (icon) {
            icon.textContent = theme === "light" ? "L" : "D";
        }
    }

    setTheme(root.dataset.theme || "dark");

    if (toggle) {
        toggle.addEventListener("click", function () {
            setTheme(root.dataset.theme === "light" ? "dark" : "light");
        });
    }
})();
