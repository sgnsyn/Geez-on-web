/***********************IMPORTS****************************/
import { setConfig, getConfigs } from "../util/js/message-handler.js";
import { getSystemTheme, applyTheme } from "../util/js/theme.js";
/***********************GLOBAL VARIABLES****************************/
let THEME_MODE = "system";
/***********************ELEMENTS****************************/
const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
const menuBtn = document.getElementById("menu-btn");
const closeMenuBtn = document.getElementById("close-menu-btn");
const navbar = document.querySelector(".nav-popup-container");
const activationBtn = document.getElementById("activation-toggle");

const themeRadios = document.querySelectorAll(`input[name="theme-mode"]`);
const keyModeRadios = document.querySelectorAll(`input[name="keyboard-mode"]`);
const navLinks = document.querySelectorAll(".nav-link");

/***********************FUNCTIONS****************************/
function menuBtnHandler() {
  navbar.classList.remove("deactive");
}

function closeMenuBtnHandler() {
  navbar.classList.add("deactive");
}
async function activationHandler() {
  let state = false;
  if (activationBtn.classList.contains("on")) {
    state = true;
  }
  setConfig({ state });
}

function themeRadioHandler(event) {
  const radio = event.target;
  const theme = radio.dataset.value;
  THEME_MODE = theme;
  setConfig({ theme });
  applyTheme(theme);
}

function keyModeRadioHandler(event) {
  const radio = event.target;
  const keyboard = radio.dataset.value;
  setConfig({ keyboard });
}

async function initialization() {
  const res = await getConfigs();
  // handle error
  applyConfigs(res);
}

function updateSystemTheme() {
  if (THEME_MODE === "system") {
    const themeType = getSystemTheme();
    applyTheme(themeType);
  }
}

function applyConfigs(res) {
  const { state, theme, keyboard, shortcut } = res;

  // set state
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
}

function pageNavigationHanlder(event) {
  event.preventDefault();

  const id = event.target.dataset.id;
  const urls = {
    guide: "/pages/guide/guide.html",
    practice: "/pages/practice/practice.html",
    credits: "/pages/credits/credits.html",
    about: "/pages/about/about.html",
    terms: "/pages/terms/terms.html",
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

themeRadios.forEach((radio) => {
  radio.addEventListener("change", themeRadioHandler);
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
