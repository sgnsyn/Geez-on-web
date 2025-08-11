import { updateKeyboard, fontSizes, keymanInit } from "./keyman.js";
import {
  calculateWPM,
  startTimer,
  timeStrToSecond,
  calculateAccuracy,
} from "./typing.js";
import charMaps from "./maps/charmaps.js";

// DOM elements
const textDisplay = document.getElementById("text-display");
const typingInput = document.getElementById("typing-input");

const resetBtn = document.getElementById("reset-btn");
const timerElement = document.getElementById("timer");
const wpmElement = document.getElementById("wpm");
const accuracyElement = document.getElementById("accuracy");

const ktPopupBtn = document.getElementById("btn-toggel-key-popup");
const ktWrapper = document.querySelector(".key-popup-wrapper");
const ktRadio = document.querySelectorAll(`input[name ="keyboard-mode"]`);

// Global variables
const TOTAL_SECONDS = 120;
let characterTyped = 0;
let currentText = "";
let timerInterval = null;
let isTyping = false;
let currentKey = "GE";
let globalBuffer = "";

//{{{ KT
function ktPopupBtnHandler(event) {
  event.stopPropagation();
  ktWrapper.classList.toggle("disabled");
}

function ktRadioHandler(event) {
  event.stopPropagation();
  const currentRadio = event.target;
  const name = currentRadio.dataset.name;
  currentKey = currentRadio.dataset.value;

  const currentLabel = ktPopupBtn.querySelector(".key-name");
  currentLabel.style.width = fontSizes[currentKey];
  currentLabel.textContent = name;
  updateKeyboard(currentKey);
  ktWrapper.classList.add("disabled");
}

function ktPropagate(event) {
  if (!ktWrapper.contains(event.target) || !ktPopupBtn.contains(event.target)) {
    ktWrapper.classList.add("disabled");
  }
}

document.addEventListener("click", ktPropagate);

ktRadio.forEach((radio) => {
  radio.addEventListener("change", ktRadioHandler);
  ktPopupBtn.addEventListener("click", ktPopupBtnHandler);
});

ktWrapper.addEventListener("click", (event) => {
  event.stopPropagation();
});

//}}} KT

// <<< TYPING
typingInput.addEventListener("keydown", (event) => {
  globalBuffer += event.key;
});

resetBtn.addEventListener("click", init);
// <<< TYPING

// Initialize the practice when the page loads
async function init() {
  // Select random text
  let texts = await getText();
  currentText = texts[Math.floor(Math.random() * texts.length)];

  // Display text with spans for each character
  textDisplay.innerHTML = currentText
    .split("")
    .map((char) => `<span>${char}</span>`)
    .join("");

  // Reset input and stats
  typingInput.value = "";
  typingInput.disabled = false;
  typingInput.focus();

  // Reset timer and stats
  if (timerInterval) clearInterval(timerInterval);
  isTyping = false;
  timerElement.textContent = "2 : 00";
  wpmElement.textContent = "0";
  accuracyElement.innerHTML = "95<sup>%</sup>";

  let name = "GFF Ethiopic";
  for (let i = 0; i < ktRadio.length; i++) {
    const radio = ktRadio[i];
    if (radio.checked) {
      currentKey = radio.dataset.value;
      name = radio.dataset.name;
      break;
    }
  }

  const currentLabel = ktPopupBtn.querySelector(".key-name");
  currentLabel.style.width = fontSizes[currentKey];
  currentLabel.textContent = name;

  keymanInit(currentKey);
}

// Sample texts for typing practice
async function getText() {
  const res = await fetch("../../quotes.json");
  const data = await res.json();
  const arr = data.long;
  return arr;
}
init();

//observer
const observer = new MutationObserver(btnMutationCallback);

function btnMutationCallback(mutationsList) {
  for (const mutation of mutationsList) {
    if (mutation.type === "attributes" && mutation.attributeName === "class") {
      const res = !ktWrapper.classList.contains("disabled");
      const btnIcon = ktPopupBtn.querySelector(".key-change-btn");
      if (res) {
        btnIcon.classList.add("rotate");
      } else {
        btnIcon.classList.remove("rotate");
      }
    }
  }
}

observer.observe(ktWrapper, {
  attributes: true,
  attributeFilter: ["class"],
});
