import { updateKeyboard, fontSizes, keymanInit } from "./keyman.js";
import {
  calculateWPM,
  startTimer,
  timeStrToSecond,
  calculateAccuracy,
} from "./typing.js";

import charMaps from "./maps/charmaps.js";

// DOM elements
const backdrop = document.querySelector(".backdrop");

const textDisplay = document.getElementById("text-display");
const typingInput = document.getElementById("typing-input");

const resetBtn = document.getElementById("reset-btn");
const timerElement = document.getElementById("timer");
const wpmElement = document.getElementById("wpm");
const accuracyElement = document.getElementById("accuracy");

const ktPopupBtn = document.getElementById("btn-toggel-key-popup");
const ktWrapper = document.querySelector(".key-popup-wrapper");
const ktRadio = document.querySelectorAll(`input[name ="keyboard-mode"]`);
const btnIcon = ktPopupBtn.querySelector(".key-change-btn");

// Global variables
const TOTAL_SECONDS = 120;
let characterTyped = 0;

let lastKey = null;
let currentText = "";
let currentKey = "GE";

let timerInterval = null;
let isTyping = false;

//{{{ KT
function ktPopupBtnHandler(event) {
  event.stopPropagation();
  ktWrapper.classList.remove("disabled");
  backdrop.classList.remove("deactive");
  btnIcon.classList.add("rotate");
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
  backdrop.classList.add("deactive");
  btnIcon.classList.remove("rotate");
}

function ktPropagate(event) {
  if (!ktWrapper.contains(event.target) || !ktPopupBtn.contains(event.target)) {
    ktWrapper.classList.add("disabled");
    backdrop.classList.add("deactive");
    btnIcon.classList.remove("rotate");
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

// Add a variable to track the pending input sequence for Geez characters
let pendingSequence = "";

typingInput.addEventListener("keydown", (event) => {
  lastKey = event.key;

  // Capture printable characters for the pending sequence
  if (
    event.key.length === 1 &&
    !event.ctrlKey &&
    !event.altKey &&
    !event.metaKey
  ) {
    pendingSequence += event.key;
  } else if (event.key === "Backspace") {
    // Handle backspace for the pending sequence
    pendingSequence = pendingSequence.slice(0, -1);
  }
});

typingInput.addEventListener("input", () => {
  const spans = textDisplay.querySelectorAll("span");
  const inputValue = typingInput.value;
  const inputLength = inputValue.length;

  // When a Geez character is successfully typed, the input length changes,
  // and we can reset the pending sequence. This is an assumption about
  // how the Keyman library interacts with the input field.
  if (inputLength > characterTyped) {
    characterTyped = inputLength;
    pendingSequence = "";
  } else {
    characterTyped = inputLength;
  }

  // Update classes for all characters in the display text
  spans.forEach((span, index) => {
    const charInText = span.textContent;

    if (index < inputLength) {
      // Character has been typed
      if (inputValue[index] === charInText) {
        span.classList.add("correct");
        span.classList.remove("incorrect", "pending");
      } else {
        span.classList.add("incorrect");
        span.classList.remove("correct", "pending");
      }
    } else if (index === inputLength && pendingSequence) {
      // This is the character currently being typed (pending)
      const map = charMaps[currentKey];
      if (map) {
        const expectedLatin = map[charInText];
        if (expectedLatin && expectedLatin.startsWith(pendingSequence)) {
          span.classList.add("pending");
          span.classList.remove("correct", "incorrect");
        } else {
          // If the pending sequence doesn't match, it could be considered incorrect
          span.classList.add("incorrect");
          span.classList.remove("correct", "pending");
        }
      }
    } else {
      // Character has not been typed yet
      span.classList.remove("correct", "incorrect", "pending");
    }
  });
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
  if (timerInterval) {
    clearInterval(timerInterval);
  }

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
