var darkModeEnabled;

function toggleDarkMode() {
    if (localStorage.getItem('darkMode') == "true") {
        localStorage.setItem('darkMode', false);
        document.documentElement.classList.remove("dark-mode");
    } else {
        localStorage.setItem('darkMode', "true");
        document.documentElement.classList.add("dark-mode");
    }

    console.log("here");
}

document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem('darkMode') == null) {
        console.log("here 1");
        const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        localStorage.setItem("darkMode", isDarkMode);

        if (isDarkMode) {
            document.documentElement.classList.add("dark-mode");
        }
    }

    // init dark mode if needed
    if (localStorage.getItem("darkMode") == "true") {
        document.documentElement.classList.add("dark-mode");
    } else {
        document.documentElement.classList.remove("dark-mode");
    }
})