/***********************ELEMENTS****************************/
const themeBtn = document.getElementById("theme-btn");
const closeThemeBtn = document.getElementById("close-theme-btn");
const toggleBtns = document.querySelectorAll(".toggle-btn");
const themePopup = document.querySelector(".theme-popup-container");
const themeContainer = document.querySelector(".theme-container");

/***********************FUNCTIONS****************************/
function toggleBtnHandler(event) {
  const btn = event.target;
  btn.classList.toggle("on");
}

function themeBtnHandler(event) {
  console.log("clicked");
  event.stopPropagation();
  themePopup.classList.remove("deactive");
  themeContainer.classList.remove("disabled");
}

function closeThemeBtnHandler(event) {
  const svg = closeThemeBtn.querySelector("svg");
  const use = closeThemeBtn.querySelector("use");
  if (
    event.target !== closeThemeBtn &&
    event.target !== themePopup &&
    event.target !== svg &&
    event.target !== use
  ) {
    return;
  }
  themePopup.classList.add("deactive");
  themeContainer.classList.add("disabled");
}

/***********************EVENT LISTERNERS****************************/
toggleBtns.forEach((btn) => {
  btn.addEventListener("click", toggleBtnHandler);
});

themeBtn.addEventListener("click", themeBtnHandler);
closeThemeBtn.addEventListener("click", closeThemeBtnHandler);
themePopup.addEventListener("click", closeThemeBtnHandler);
