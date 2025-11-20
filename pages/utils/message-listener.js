import { loadData } from "../../util/js/local-storage.js";
import { applyTheme } from "../../util/js/theme.js";

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "theme") {
    applyTheme(message.theme);
  }
});

async function setThemeOnload() {
  const { theme } = await loadData(["theme"]);
  applyTheme(theme);
}
setThemeOnload();
