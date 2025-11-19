import charmaps from "./maps/charmaps.js";
import { getCurrentKeyboard } from "./ui.js";

const textDisplay = document.getElementById("text-display");
const typingInput = document.getElementById("typing-input");

let onTypingCompleteCallback = null;
let text = "";

function handleInput() {
  const inputValue = typingInput.value;
  const inputLength = inputValue.length;

  const spans = textDisplay.querySelectorAll("span");

  if (inputLength === 0) {
    for (const span of spans) {
      span.className = "";
      span.dataset.wrongVisit = "na";
    }
    return;
  }
  const textLength = text.length;

  const keyboard = getCurrentKeyboard();

  let index = inputLength - 1;

  const charIn = inputValue[index];
  const charText = text[index];

  const romanIn = charmaps[keyboard][charIn];
  const romanText = charmaps[keyboard][charText];

  const span = spans[index];

  for (let i = 0; i < index; i++) {
    const prevSpan = spans[i];
    prevSpan.classList.remove("correct", "incorrect", "pending", "confused");
    if (prevSpan.textContent === inputValue[i]) {
      prevSpan.classList.add("correct");
    } else {
      prevSpan.classList.add("incorrect");

      if (prevSpan.dataset.wrongVisit === "na") {
        prevSpan.dataset.wrongVisit = 1;
      } else {
        let wrongVisit = parseInt(prevSpan.dataset.wrongVisit);
        wrongVisit++;
        prevSpan.dataset.wrongVisit = wrongVisit;
      }
    }
  }
  if (index < 0) {
    return;
  }
  if (index >= textLength) {
    onTypingCompleteCallback();
  }

  const prevSpan = spans[index - 1];
  if (prevSpan) {
    if (!prevSpan.classList.contains("correct")) {
      prevSpan.classList.remove("correct", "incorrect", "pending", "confused");
      prevSpan.classList.add("incorrect");

      if (prevSpan.dataset.wrongVisit === "na") {
        prevSpan.dataset.wrongVisit = 1;
      } else {
        let wrongVisit = parseInt(prevSpan.dataset.wrongVisit);
        wrongVisit++;
        prevSpan.dataset.wrongVisit = wrongVisit;
      }
    }
  }

  for (let i = index + 1; i < textLength; i++) {
    const nextSpan = spans[i];
    if (!nextSpan) {
      continue;
    }
    nextSpan.classList.remove("correct", "incorrect", "pending", "confused");
  }

  if (charIn === charText) {
    span.classList.remove("correct", "incorrect", "pending", "confused");
    span.classList.add("correct");
    if (span.dataset.wrongVisit === "na") {
      span.dataset.wrongVisit = 0;
    }
  } else if (charIn === " " || charText == " ") {
    span.classList.remove("correct", "incorrect", "pending", "confused");
    span.classList.add("incorrect");

    if (span.dataset.wrongVisit === "na") {
      span.dataset.wrongVisit = 1;
    } else {
      let wrongVisit = parseInt(span.dataset.wrongVisit);
      wrongVisit++;
      span.dataset.wrongVisit = wrongVisit;
    }
  } else if (romanIn && romanText && romanText.startsWith(romanIn)) {
    span.classList.remove("correct", "incorrect", "pending", "confused");
    span.classList.add("pending");
  } else if (romanIn == undefined || romanText == undefined) {
    span.classList.remove("correct", "incorrect", "pending", "confused");
    span.classList.add("confused");
  } else {
    if (span) {
      span.classList.remove("correct", "incorrect", "pending", "confused");
      span.classList.add("incorrect");

      if (span.dataset.wrongVisit === "na") {
        span.dataset.wrongVisit = 1;
      } else {
        let wrongVisit = parseInt(span.dataset.wrongVisit);
        wrongVisit++;
        span.dataset.wrongVisit = wrongVisit;
      }
    }
  }

  if (inputLength === textLength) {
    if (inputValue[inputLength - 1] === text[text.length - 1]) {
      onTypingCompleteCallback();
    }
  }
}

export function initTypingSession(currentText, onTypingComplete) {
  text = currentText;

  onTypingCompleteCallback = onTypingComplete;

  textDisplay.innerHTML = text
    .split("")
    .map((char) => `<span data-wrong-visit = "na">${char}</span>`)
    .join("");

  typingInput.value = "";
  typingInput.disabled = false;

  typingInput.addEventListener("input", handleInput);
}

export function resetTypingSession() {
  typingInput.removeEventListener("input", handleInput);
  typingInput.value = "";
  textDisplay.innerHTML = "";
  onTypingCompleteCallback = null;
  text = "";
}
