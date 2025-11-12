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
  sendMessage({ for: "content_script", data: state });
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
  const res = await loadData(["state", "theme", "keyboard", "shortcut", "awpm"]);
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
  const { state, theme, keyboard, shortcut, awpm } = res;

  // set state
  console.log(state);
  if (state) {
    activationBtn.classList.add("on");
  } else {
    activationBtn.classList.remove("on");
  }

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

/***********************EVENT LISTERNERS****************************/
window.addEventListener("load", initialization);
menuBtn.addEventListener("click", menuBtnHandler);
closeMenuBtn.addEventListener("click", closeMenuBtnHandler);
activationBtn.addEventListener("click", activationHandler);
mediaQuery.addEventListener("change", updateSystemTheme);

themeBtn.addEventListener("click", openThemePopup);
backdropEl.addEventListener("click", closeThemePopup);

themeRadios.forEach((radio) => {
  radio.addEventListener("change", themeRadioHandler);
});

keyModeRadios.forEach((radio) => {
  radio.addEventListener("change", keyModeRadioHandler);
});
navLinks.forEach((link) => {
  link.addEventListener("click", pageNavigationHanlder);
});
