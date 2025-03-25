const landing = document.querySelector(".landing");
const hamburger = document.querySelector(".hamburger-menu");
const slider = document.querySelector(".navbar-slider-main-container");
const black_trigger = document.querySelector(".trigger-black");
const menu_back = document.querySelector(".menu-back");
let slider_active = false;

hamburger.addEventListener("click", function () {
  if (!slider_active) {
    setTimeout(() => {
      hamburger.style.opacity = 0;
      hamburger.style.transition = "opacity 0.3s ease-in-out";
    }, 10);

    setTimeout(() => {
      slider.style.transform = "translateY(0vh)";
      slider.style.transition = "transform 0.8s ease-in-out";
    }, 300);

    setTimeout(() => {
      hamburger.style.opacity = 1;
      hamburger.style.color = "white";
      black_trigger.style.backgroundColor = "white";
      menu_back.innerText = "back";
    }, 1100);
  } else {
    setTimeout(() => {
      hamburger.style.opacity = 0;
      hamburger.style.transition = "opacity 0.3s ease-in-out";
    }, 100);

    setTimeout(() => {
      hamburger.style.opacity = 1;
      hamburger.style.color = "black";
      black_trigger.style.backgroundColor = "black";
      menu_back.innerText = "menu";
    }, 1100);
    setTimeout(() => {
      slider.style.transform = "translateY(-150vh)";
      slider.style.transition = "transform 0.8s ease-in-out";
    }, 600);
  }

  slider_active = !slider_active;
});

