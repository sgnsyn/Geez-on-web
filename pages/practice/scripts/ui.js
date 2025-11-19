import { saveData } from "../../../util/js/local-storage.js";
import { updateKeyboard, fontSizes } from "./keyman.js";

const backdrop = document.querySelector(".backdrop");
const ktPopupBtn = document.getElementById("btn-toggel-key-popup");
const ktWrapper = document.querySelector(".key-popup-wrapper");
const ktRadio = document.querySelectorAll(`input[name ="keyboard-mode"]`);
const btnIcon = ktPopupBtn.querySelector(".key-change-btn");

let currentKey = "GA";

function ktPopupBtnHandler() {
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
  const currentRadio = event.target;
  const name = currentRadio.dataset.name;
  currentKey = currentRadio.dataset.value;

  const currentLabel = ktPopupBtn.querySelector(".key-name");
  currentLabel.style.width = fontSizes[currentKey];
  currentLabel.textContent = name;
  saveData({ pracitceKeyboard: currentKey });
  updateKeyboard(currentKey);
  closePopup();
}

export function initKeyboardPopup(key) {
  ktRadio.forEach((radio) => {
    radio.addEventListener("change", ktRadioHandler);
  });

  ktPopupBtn.addEventListener("click", ktPopupBtnHandler);

  let name = "GFF Amharic";
  for (let i = 0; i < ktRadio.length; i++) {
    const radio = ktRadio[i];
    if (radio.dataset.value == key) {
      radio.checked = true;
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

backdrop.addEventListener("click", closePopup);
