import { keymanInit } from "./keyman.js";
import {
  calculateWPM,
  calculateRawWPM,
  startTimer,
  timeStrToSecond,
  calculateAccuracy,
} from "./typing.js";
import { initKeyboardPopup } from "./ui.js";
import { initTypingSession, resetTypingSession } from "./typing-session.js";
import { loadData, saveData } from "../../../util/js/local-storage.js";

// DOM elements
const resetBtn = document.getElementById("reset-btn");
const timerElement = document.getElementById("timer");
const wpmElement = document.getElementById("wpm");
const rawWpmElement = document.getElementById("raw-wpm");
const accuracyElement = document.getElementById("accuracy");
const typingInput = document.getElementById("typing-input");
const textDisplay = document.getElementById("text-display");

const awpmElement = document.getElementById("awpm");
const practiseEl = document.getElementById("practice");

// State
let currentText = "";
let timerInterval = null;
let isTyping = false;
let startTime = null;
let statsInterval = null;
let keyboard = "";
const TOTAL_SECONDS = 120;

// Fetch texts for typing practice
async function getTexts() {
  try {
    const res = await fetch("../../quotes.json");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Failed to load texts:", error);
  }
}

function updateStats() {
  if (!startTime) return;
  const timeElapsedInSeconds = (new Date().getTime() - startTime) / 1000;

  const rawWpm = calculateRawWPM(
    timeElapsedInSeconds,
    typingInput.value.length,
  );
  rawWpmElement.textContent = rawWpm;

  const accuracy = calculateAccuracy(textDisplay);
  accuracyElement.innerHTML = `${accuracy}<sup>%</sup>`;
  const wpm = calculateWPM(rawWpm, accuracy);
  wpmElement.textContent = wpm;
}

function onTimerFinish() {
  typingInput.disabled = true;
  updateStats();
  clearInterval(timerInterval);
  clearInterval(statsInterval);
  onTypingComplete();
}

async function onTypingComplete() {
  typingInput.disabled = true;
  updateStats();

  if (statsInterval) {
    clearInterval(statsInterval);
  }

  const data = await loadData(["awpm", "practices"]);
  let practices = data?.practices || 0;
  let awpm = data?.awpm || 0;

  let wpm = 0;
  try {
    wpm = parseInt(wpmElement.textContent);
  } catch {
    wpm = 0;
  }

  practices++;
  awpm = ((awpm * (practices - 1) + wpm) / practices).toFixed(1);

  const newData = { awpm, practices };
  saveData(newData);

  if (practices == 0) {
    practices = "-";
    awpm = "--";
  }

  awpmElement.textContent = awpm;
  practiseEl.textContent = practices;

  clearInterval(timerInterval);
  resetBtn.focus();
}

function handleTyping() {
  if (!isTyping) {
    isTyping = true;
    startTime = new Date().getTime();
    timerInterval = startTimer(
      (formattedTime) => {
        timerElement.textContent = formattedTime;
      },
      TOTAL_SECONDS,
      onTimerFinish,
    );
    statsInterval = setInterval(updateStats, 500);
  }
}

async function init() {
  // Reset previous session
  if (timerInterval) {
    clearInterval(timerInterval);
  }
  if (statsInterval) {
    clearInterval(statsInterval);
  }
  resetTypingSession();

  typingInput.disabled = false;
  isTyping = false;
  startTime = null;

  // Reset UI
  timerElement.textContent = "2 : 00";
  wpmElement.textContent = "-";
  rawWpmElement.textContent = "--";
  accuracyElement.textContent = "---";

  // Load new text
  const texts = await getTexts();
  currentText = texts[Math.floor(Math.random() * texts.length)];

  // Initialize modules

  initTypingSession(currentText, onTypingComplete);

  const data = await loadData(["awpm", "practices", "pracitceKeyboard"]);
  let { awpm, practices, pracitceKeyboard } = data;

  if (pracitceKeyboard == undefined) {
    pracitceKeyboard = "GA";
    saveData({ pracitceKeyboard });
  }

  initKeyboardPopup(pracitceKeyboard);
  const initialKey = pracitceKeyboard;
  keymanInit(initialKey);

  practiseEl.textContent = practices || "-";
  awpmElement.textContent = awpm || "--";

  typingInput.focus();
}

// Event Listeners
resetBtn.addEventListener("click", init);
typingInput.addEventListener("input", handleTyping);

// Initial load
init();
