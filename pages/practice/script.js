// Sample texts for typing practice
const texts = [
  "የስራ መረጃ በአረብ ሀገራት",
  "እንኳን ወደ ቻናላችን በሰላም መጡ",
  "ይህ ቻናል ፕሮፋይል የሚሆኑ",
  "ሰው ሲጠላህ ብቻ ሳይሆን ሲወድህም ለምን በል",
  "በህይወት ውስጥ ትልቁ ስህተት ለሁሉም ሰው ትክክለኛ ሆኖ ለመታየት መሞከር ነው",
];

// DOM elements
const textDisplay = document.getElementById("text-display");
const typingInput = document.getElementById("typing-input");
const resetBtn = document.getElementById("reset-btn");
const timerElement = document.getElementById("timer");
const wpmElement = document.getElementById("wpm");
const accuracyElement = document.getElementById("accuracy");

// State variables
let currentText = "";
let startTime = null;
let timerInterval = null;
let isTyping = false;

// Initialize the practice
function init() {
  // Select random text
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
  startTime = null;
  isTyping = false;
  timerElement.textContent = "0s";
  wpmElement.textContent = "0";
  accuracyElement.textContent = "100%";
}

// Calculate WPM
function calculateWPM(timeElapsed, charactersTyped) {
  const minutes = timeElapsed / 60;
  const words = charactersTyped / 5; // Assuming average word length of 5 characters
  return Math.round(words / minutes);
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

// Start the timer
function startTimer() {
  if (!startTime) {
    startTime = Date.now();
    timerInterval = setInterval(() => {
      const timeElapsed = Math.floor((Date.now() - startTime) / 1000);
      timerElement.textContent = `${timeElapsed}s`;

      // Calculate and update WPM
      const wpm = calculateWPM(timeElapsed, typingInput.value.length);
      wpmElement.textContent = wpm;
    }, 1000);
  }
}

// Event listeners
typingInput.addEventListener("input", () => {
  if (!isTyping) {
    isTyping = true;
    startTimer();
  }
  updateDisplay();

  // Check if typing is complete
  if (typingInput.value.length === currentText.length) {
    if (
      typingInput.value[typingInput.value.length - 1] ===
      currentText[typingInput.value.length - 1]
    )
      typingInput.disabled = true;
    clearInterval(timerInterval);
  }
});

resetBtn.addEventListener("click", init);

// Initialize the practice when the page loads
init();
