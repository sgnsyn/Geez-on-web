function applyTheme(mode) {
  const root = document.documentElement;
  if (!root) {
    console.log("document is not found: applyTheme");
    return;
  }
  if (mode == "system") {
    mode = getSystemTheme();
  }

  if (mode === "dark") {
    root.style.setProperty("--primary-color", "var(--color-black)");
    root.style.setProperty("--secondary-color", "var(--color-white)");
    root.style.setProperty("--off-gray", "var(--off-color)");
    root.style.setProperty("--accent-gray", "var(--color-dark-gray)");
  } else {
    root.style.setProperty("--primary-color", "var(--color-white)");
    root.style.setProperty("--secondary-color", "var(--color-black)");
    root.style.setProperty("--off-gray", "var(--off-color)");
    root.style.setProperty("--accent-gray", "var(--color-light-gray)");
  }
}

function getSystemTheme() {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    return "dark";
  } else {
    return "light";
  }
}
export { applyTheme, getSystemTheme };
