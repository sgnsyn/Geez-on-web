// Calculate WPM
export function calculateWPM(rawWpm, accuracy) {
  const wpm = (rawWpm * accuracy) / 100;
  return Math.round(wpm);
}

export function calculateRawWPM(timeElapsed, charactersTyped) {
  if (timeElapsed <= 0) {
    return 0;
  }
  const minutes = timeElapsed / 60;
  const words = charactersTyped / 5;
  return Math.round(words / minutes);
}

export function startTimer(updateDisplay, TOTAL_SECONDS, onComplete) {
  let remainingSeconds = TOTAL_SECONDS;
  const intervalId = setInterval(tick, 1000);

  function tick() {
    remainingSeconds--;
    const formattedTime = formatTime(remainingSeconds);
    updateDisplay(formattedTime);

    if (remainingSeconds <= 0) {
      clearInterval(intervalId);
      if (onComplete) {
        onComplete();
      }
    }
  }

  function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins} : ${String(secs).padStart(2, "0")}`;
  }

  return intervalId;
}

export function timeStrToSecond(str) {
  const [minStr, secStr] = str.split(":");
  const min = parseInt(minStr.trim()) || 0;
  const sec = parseInt(secStr.trim()) || 0;
  return min * 60 + sec;
}

export function calculateAccuracy(textDisplay) {
  const spans = textDisplay.querySelectorAll("span");
  let totalWeight = 0;
  let currentWeight = 0;

  for (const span of spans) {
    const wrongVisits = span.dataset.wrongVisit;

    if (wrongVisits !== "na") {
      totalWeight += 1;
    }

    if (span.classList.contains("correct")) {
      if (wrongVisits === "0") {
        currentWeight += 1;
      } else if (wrongVisits === "1") {
        currentWeight += 0.8;
      } else if (wrongVisits === "2") {
        currentWeight += 0.6;
      } else if (wrongVisits === "3") {
        currentWeight += 0.4;
      } else {
        currentWeight += 0.2;
      }
    }
  }

  if (totalWeight === 0) {
    return 0;
  }

  return Math.floor((currentWeight / totalWeight) * 100);
}
