document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".menu-btn");
  const closeMenuBtn = document.querySelector(".close-menu-btn");
  const navContainer = document.querySelector(".nav-links-container");

  if (menuBtn && closeMenuBtn && navContainer) {
    menuBtn.addEventListener("click", () => {
      navContainer.classList.add("is-open");
    });

    closeMenuBtn.addEventListener("click", () => {
      navContainer.classList.remove("is-open");
    });
  }
});
