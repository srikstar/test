const blackscreen = document.querySelector(".blackscreen");

const hamburger = document.querySelector(".hamburger-menu-container");
const hamone = document.querySelector(".ham-one");
const hamtwo = document.querySelector(".ham-two");

const navdrop = document.querySelector(".navdrop");
const navbarlogo = document.querySelector(".navbar-logo");
const linkview = document.querySelectorAll(".link-transition");

let rotate = document.querySelector(".refresh-button-container");

const reviewone = document.querySelector(".reviews-container-one");
const reviewtwo = document.querySelector(".reviews-container-two");
const reviewthree = document.querySelector(".reviews-container-three");

const implinks = document.querySelector('.navimplinks')

let reviewCount = 0;

const questions = document.querySelectorAll(".accordion-question");
let activeHam = true;



window.addEventListener('load', () => {
  function blackscreenDisplay() {
    setTimeout(() => {
      blackscreen.style.opacity = 0;
      blackscreen.style.transition = "opacity 0.3s ease-in-out";
    }, 500);
    setTimeout(() => {
      blackscreen.style.display = "none";
    }, 850);
  }

  blackscreenDisplay();
});


rotate.addEventListener('click', function(){
  ++reviewCount;
  if(reviewCount % 3 == 1) {
    reviewone.classList.remove('review-display')
    reviewtwo.classList.add('review-display')
  }
  else if(reviewCount % 3 == 2){
    reviewtwo.classList.remove('review-display')
    reviewthree.classList.add('review-display')
  }
  else if(reviewCount % 3 == 0){
    reviewthree.classList.remove('review-display')
    reviewone.classList.add('review-display')
  }
})

questions.forEach((question) => {
  question.addEventListener("click", () => {
    const isOpen = question.classList.contains("active");

    questions.forEach((q) => {
      q.classList.remove("active");
      q.nextElementSibling.style.display = "none";
    });

    if (!isOpen) {
      question.classList.add("active");
      question.nextElementSibling.style.display = "block";
    }
  });
});

hamburger.addEventListener("click", function () {
  if (activeHam) {
    linkview.forEach((links, index) => {
      setTimeout(() => {
        links.style.transform = "translateY(0)";
        links.style.opacity = "1";
        links.style.transition = 'transform 0.6s ease-in-out, opacity 0.5s ease-in-out';
      }, 400);
    });

    hamone.style.transform = "rotate(45deg)";
    hamone.style.position = "relative";
    hamone.style.top = "5px";

    navdrop.style.transform = "translateY(0vh)";
    navbarlogo.style.opacity = 0;

    hamtwo.style.transform = "rotate(-45deg)";
    hamtwo.style.position = "relative";
    hamtwo.style.bottom = "5px";


    setTimeout(() => {
      implinks.style.opacity = 1
      implinks.style.transition = 'opacity 0.5s ease-in-out'
    }, 1000)
  } 
  
  else {
    setTimeout(() => {
      implinks.style.opacity = 0
      implinks.style.transition = 'opacity 0.3s ease-in-out'
    }, 10)
    setTimeout(() => {
      linkview.forEach(function (links) {
        links.style.transform = "translateY(100px)";
      });
    }, 10);

    setTimeout(() => {
      hamone.style.transform = "rotate(0deg)";
      hamone.style.position = "relative";
      hamone.style.top = "0px";
      hamone.style.backgroundColor = "black";

      navdrop.style.transform = "translateY(-100vh)";
      navbarlogo.style.opacity = 1;

      hamtwo.style.transform = "rotate(0deg)";
      hamtwo.style.position = "relative";
      hamtwo.style.bottom = "0px";
      hamtwo.style.backgroundColor = "black";
    }, 200);

  }
  activeHam = !activeHam;
});
