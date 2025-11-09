const closeMenuBtn = document.getElementById("close-menu-btn");
const menuBtn = document.getElementById("menu-btn");
const popupContainer = document.querySelector(".nav-popup-container");

document.addEventListener("DOMContentLoaded", () => {
  if (menuBtn && closeMenuBtn && popupContainer) {
    menuBtn.addEventListener("click", () => {
      popupContainer.classList.add("is-open");
    });

    closeMenuBtn.addEventListener("click", () => {
      popupContainer.classList.remove("is-open");
    });
  }
});

function closeMobileNav() {
  console.log("closed");
  popupContainer.classList.remove("is-open");
}
function openMobileNav() {
  console.log("opend");
  popupContainer.classList.remove("is-open");
}
menuBtn.addEventListener("click", openMobileNav);
closeMenuBtn.addEventListener("click", closeMenuBtn);
