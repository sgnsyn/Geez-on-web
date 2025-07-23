// Exports
import { updateKeyboard, fontSizes, keymanInit } from "./keyman.js";
import { calculateWPM, startTimer, timeStrToSecond } from "./typing.js";

// DOM elements
const textDisplay = document.getElementById("text-display");
const typingInput = document.getElementById("typing-input");
const resetBtn = document.getElementById("reset-btn");
const timerElement = document.getElementById("timer");
const wpmElement = document.getElementById("wpm");
const accuracyElement = document.getElementById("accuracy");
const ktBtn = document.getElementById("btn-toggel-key-popup");
const ktWrapper = document.querySelector(".key-popup-wrapper");
const ktRadio = document.querySelectorAll(`input[name ="keyboard-mode"]`);

// Global variables
const TOTAL_SECONDS = 120;
let characterTyped = 0;
let currentText = "";
let timerInterval = null;
let isTyping = false;

// >>> handler functions
function ktBtnHandler(event) {
  event.stopPropagation();
  ktWrapper.classList.toggle("disabled");
}

function ktRadioHandler(event) {
  event.stopPropagation();
  const currentRadio = event.target;
  const name = currentRadio.dataset.name;
  const key = currentRadio.dataset.value;

  const currentLabel = ktBtn.querySelector(".key-name");
  currentLabel.style.width = fontSizes[key];
  currentLabel.textContent = name;
  updateKeyboard(key);
  ktWrapper.classList.add("disabled");
}

function tiHandler() {
  if (!isTyping) {
    isTyping = true;
    timerInterval = startTimer(updateTimerElt, timerCallback, TOTAL_SECONDS);
  }
  updateDisplay();
  // Check if typing is complete
  if (typingInput.value.length === currentText.length) {
    typingInput.disabled = true;
    clearInterval(timerInterval);

    let timeElapsed = TOTAL_SECONDS - timeStrToSecond(timerElement.textContent);
    characterTyped = typingInput.value.length;

    const wpm = calculateWPM(timeElapsed, characterTyped);

    wpmElement.textContent = wpm;
  }
}

function ktPropagate(event) {
  if (!ktWrapper.contains(event.target) || !ktBtn.contains(event.target)) {
    ktWrapper.classList.add("disabled");
  }
} // <<< handler functions

// Initialize the practice
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

  let key = "GE";
  let name = "GFF Ethiopic";
  for (let i = 0; i < ktRadio.length; i++) {
    const radio = ktRadio[i];
    if (radio.checked) {
      key = radio.dataset.value;
      name = radio.dataset.name;
      break;
    }
  }
  const currentLabel = ktBtn.querySelector(".key-name");
  currentLabel.style.width = fontSizes[key];
  currentLabel.textContent = name;
  keymanInit(key);
}

// update timer element
function updateTimerElt(time) {
  timerElement.textContent = time;
}

// Calculate accuracy
function calculateAccuracy(correctChars, totalChars) {
  return Math.round((correctChars / totalChars) * 100);
}

// Update the display with correct/incorrect characters
function updateDisplay() {
  const inputValue = typingInput.value;
  const spans = textDisplay.querySelectorAll("span");

  let correctChars = 0;

  spans.forEach((span, index) => {
    const char = span.textContent;
    if (index < inputValue.length) {
      if (inputValue[index] === char) {
        span.className = "correct";
        correctChars++;
      } else {
        span.className = "incorrect";
      }
    } else {
      span.className = "";
    }
  });

  // Update accuracy
  if (inputValue.length > 0) {
    const accuracy = calculateAccuracy(correctChars, inputValue.length);
    accuracyElement.textContent = `${accuracy}%`;
  }
}

function timerCallback() {
  typingInput.disabled = true;
  console.log("finish up");
}

// >>> Event Listeners
typingInput.addEventListener("input", tiHandler);
resetBtn.addEventListener("click", init);
ktBtn.addEventListener("click", ktBtnHandler);
document.addEventListener("click", ktPropagate);

ktRadio.forEach((radio) => {
  radio.addEventListener("change", ktRadioHandler);
});

ktWrapper.addEventListener("click", (event) => {
  event.stopPropagation();
});
// <<< Event Listeners
// Initialize the practice when the page loads
init();

// Sample texts for typing practice
async function getText() {
  const res = await fetch("../../quotes.json");
  const data = await res.json();
  const arr = data.long;
  return arr;
}

//observer
const observer = new MutationObserver(btnMutationCallback);

function btnMutationCallback(mutationsList) {
  for (const mutation of mutationsList) {
    if (mutation.type === "attributes" && mutation.attributeName === "class") {
      const res = !ktWrapper.classList.contains("disabled");
      const btnIcon = ktBtn.querySelector(".key-change-btn");
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
