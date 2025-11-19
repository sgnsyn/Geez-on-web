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
    root.style.setProperty("--off-gray", "var(--off-color-dark)");
    root.style.setProperty("--accent-gray", "var(--color-dark-gray)");

    root.style.setProperty("--correct-green", "var(--dark-success)");
    root.style.setProperty("--pending-yellow", "var(--dark-warning)");
    root.style.setProperty("--incorrect-red", "var(--dark-danger)");
    root.style.setProperty("--confused-blue", "var(--dark-confused)");
  } else {
    root.style.setProperty("--primary-color", "var(--color-white)");
    root.style.setProperty("--secondary-color", "var(--color-black)");
    root.style.setProperty("--off-gray", "var(--off-color-light)");
    root.style.setProperty("--accent-gray", "var(--color-light-gray)");

    root.style.setProperty("--correct-green", "var(--light-success)");
    root.style.setProperty("--pending-yellow", "var(--light-warning)");
    root.style.setProperty("--incorrect-red", "var(--light-danger)");
    root.style.setProperty("--confused-blue", "var(--light-confused)");
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
