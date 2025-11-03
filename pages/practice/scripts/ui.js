import { updateKeyboard, fontSizes } from "./keyman.js";

const backdrop = document.querySelector(".backdrop");
const ktPopupBtn = document.getElementById("btn-toggel-key-popup");
const ktWrapper = document.querySelector(".key-popup-wrapper");
const ktRadio = document.querySelectorAll(`input[name ="keyboard-mode"]`);
const btnIcon = ktPopupBtn.querySelector(".key-change-btn");

let currentKey = "GE";

function ktPopupBtnHandler(event) {
  event.stopPropagation();
  ktWrapper.classList.remove("disabled");
  backdrop.classList.remove("deactive");
  btnIcon.classList.add("rotate");
}

function closePopup() {
  ktWrapper.classList.add("disabled");
  backdrop.classList.add("deactive");
  btnIcon.classList.remove("rotate");
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
  closePopup();
}

function ktPropagate(event) {
  if (!ktWrapper.contains(event.target) && !ktPopupBtn.contains(event.target)) {
    closePopup();
  }
}

export function initKeyboardPopup() {
  document.addEventListener("click", ktPropagate);

  ktRadio.forEach((radio) => {
    radio.addEventListener("change", ktRadioHandler);
  });

  ktPopupBtn.addEventListener("click", ktPopupBtnHandler);

  ktWrapper.addEventListener("click", (event) => {
    event.stopPropagation();
  });

  // Set initial state from checked radio
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

  return currentKey;
}

export function getCurrentKeyboard() {
  return currentKey;
}
