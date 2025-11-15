/***********************IMPORTS****************************/
import { sendMessage } from "../util/js/message-handler.js";
import { saveData, loadData } from "../util/js/local-storage.js";
import { getSystemTheme, applyTheme } from "../util/js/theme.js";
/***********************GLOBAL VARIABLES****************************/
let THEME_MODE = "system";
/***********************ELEMENTS****************************/
const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
const menuBtn = document.getElementById("menu-btn");
const closeMenuBtn = document.getElementById("close-menu-btn");
const navbar = document.querySelector(".nav-popup-container");
const activationBtn = document.getElementById("activation-toggle");
const themeBtn = document.getElementById("theme-btn");
const awpmEl = document.getElementById("awpm");

const backdropEl = document.querySelector(".backdrop");
const themeContainer = document.querySelector(".theme-container");

const themeRadios = document.querySelectorAll(`input[name="theme-mode"]`);
const keyModeRadios = document.querySelectorAll(`input[name="keyboard-mode"]`);
const navLinks = document.querySelectorAll(".nav-link");
const resetScoreBtn = document.getElementById("reset-score");
const resetConfirmContainer = document.querySelector(
  ".reset-confirm-container",
);
const cancelResetBtn = document.getElementById("cancel-reset-btn");
const confirmResetBtn = document.getElementById("confirm-reset-btn");

/***********************FUNCTIONS****************************/
function menuBtnHandler() {
  navbar.classList.add("is-open");
}

function closeMenuBtnHandler() {
  navbar.classList.remove("is-open");
}

function openThemePopup() {
  backdropEl.classList.remove("deactive");
  themeContainer.classList.remove("disabled");
}

function closeThemePopup() {
  backdropEl.classList.add("deactive");
  themeContainer.classList.add("disabled");
}

function openResetPopup() {
  backdropEl.classList.remove("deactive");
  resetConfirmContainer.classList.remove("disabled");
}

function closeResetPopup() {
  backdropEl.classList.add("deactive");
  resetConfirmContainer.classList.add("disabled");
}

function handleReset() {
  saveData({ awpm: null, practices: null });
  awpmEl.textContent = "--";
  resetScoreBtn.disabled = true;
  closeResetPopup();
}

function closeWithoutAnimation() {
  themeContainer.style.animation = "none";
  backdropEl.classList.add("deactive");
  themeContainer.classList.add("disabled");
  setTimeout(() => {
    themeContainer.style.animation = "";
  }, 10);
}
async function activationHandler() {
  let state = activationBtn.classList.contains("on");
  state = !state;

  if (state) {
    activationBtn.classList.add("on");
  } else {
    activationBtn.classList.remove("on");
  }

  saveData({ state });
  attachHandler(state);
}

function themeRadioHandler(event) {
  const radio = event.target;
  const theme = radio.dataset.value;
  THEME_MODE = theme;

  saveData({ theme });

  activationBtn.classList.add("no-transition");
  applyTheme(theme);
  setTimeout(() => {
    activationBtn.classList.remove("no-transition");
  }, 10);

  sendMessage({ action: "theme", theme });
  closeWithoutAnimation();
  // setTimeout(closeThemePopup, 200);
}

function keyModeRadioHandler(event) {
  const radio = event.target;
  const keyboard = radio.dataset.value;
  saveData({ keyboard });
  sendMessage({ for: "ch", value: keyboard });
}

async function initialization() {
  const res = await loadData(["state", "theme", "keyboard", "awpm"]);
  // handle error
  applyConfigs(res);
  setTimeout(() => {
    activationBtn.classList.remove("no-transition");
  }, 10);
}

function updateSystemTheme() {
  if (THEME_MODE === "system") {
    const themeType = getSystemTheme();
    applyTheme(themeType);
  }
}

function applyConfigs(res) {
  const { state, theme, keyboard, awpm } = res;

  // set state
  if (state) {
    activationBtn.classList.add("on");
  } else {
    activationBtn.classList.remove("on");
  }
  attachHandler(state);

  // set theme
  THEME_MODE = theme;
  applyTheme(theme);

  themeRadios.forEach((radio) => {
    const value = radio.dataset.value;
    radio.removeAttribute("checked");
    if (value === theme) {
      radio.setAttribute("checked", "checked");
    }
  });

  // set keyboard option
  keyModeRadios.forEach((radio) => {
    const value = radio.dataset.value;
    radio.removeAttribute("checked");
    if (value === keyboard) {
      radio.setAttribute("checked", "checked");
    }
  });

  awpmEl.textContent = awpm || "--";
  if (awpmEl.textContent === "--") {
    resetScoreBtn.disabled = true;
  } else {
    resetScoreBtn.disabled = false;
  }
}

function pageNavigationHanlder(event) {
  event.preventDefault();
  const anchor = event.target.closest(".nav-link");

  const id = anchor.dataset.id;
  const urls = {
    guide: "./pages/guide/guide.html",
    practice: "./pages/practice/practice.html",
    credits: "./pages/credits/credits.html",
    about: "./pages/about/about.html",
    terms: "./pages/terms/terms.html",
  };

  const url = urls[id];
  chrome.tabs.create({ url: chrome.runtime.getURL(url) });
}

function attachHandler(state) {
  let text = "dis";
  if (state) {
    text = "en";
  }
  chrome.action.setIcon({
    path: {
      16: `/assets/ext-icons/${text}_16.png`,
      32: `/assets/ext-icons/${text}_32.png`,
      48: `/assets/ext-icons/${text}_48.png`,
      128: `/assets/ext-icons/${text}_128.png`,
    },
  });
  sendMessage({ for: "content_script", data: state });
}

/***********************EVENT LISTERNERS****************************/
window.addEventListener("load", initialization);
menuBtn.addEventListener("click", menuBtnHandler);
closeMenuBtn.addEventListener("click", closeMenuBtnHandler);
activationBtn.addEventListener("click", activationHandler);
mediaQuery.addEventListener("change", updateSystemTheme);

themeBtn.addEventListener("click", openThemePopup);
backdropEl.addEventListener("click", () => {
  closeThemePopup();
  closeResetPopup();
});

themeRadios.forEach((radio) => {
  radio.addEventListener("change", themeRadioHandler);
});

keyModeRadios.forEach((radio) => {
  radio.addEventListener("change", keyModeRadioHandler);
});
navLinks.forEach((link) => {
  link.addEventListener("click", pageNavigationHanlder);
});

resetScoreBtn.addEventListener("click", openResetPopup);
cancelResetBtn.addEventListener("click", closeResetPopup);
confirmResetBtn.addEventListener("click", handleReset);
