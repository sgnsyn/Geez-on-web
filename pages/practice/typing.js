// Calculate WPM
export function calculateWPM(timeElapsed, charactersTyped) {
  const minutes = timeElapsed / 60 || 1;
  const words = charactersTyped / 4 || 1;
  return Math.round(words / minutes);
}

export function startTimer(updateDisplay, onComplete, TOTAL_SECONDS) {
  let remainingSeconds = TOTAL_SECONDS;
  const intervalId = setInterval(tick, 1000);

  function tick() {
    remainingSeconds--;
    const formattedTime = formatTime(remainingSeconds);
    updateDisplay(formattedTime);

    if (remainingSeconds === 0) {
      clearInterval(intervalId);
      onComplete();
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
