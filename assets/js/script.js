// const blackscreen = document.querySelector('.blackscreen');

// function blackscreenDisplay(){
//     setTimeout(()=>{
//         blackscreen.style.opacity = 0
//         blackscreen.style.transition = 'opacity 0.3s ease-in-out'
//     },500)
//     setTimeout(()=>{
//         blackscreen.style.display = 'none'
//     },850)
// }

// blackscreenDisplay()

const hamburger = document.querySelector(".hamburger-menu-container");
const hamone = document.querySelector(".ham-one");
const hamtwo = document.querySelector(".ham-two");
const navdrop = document.querySelector(".navdrop");
const navbarlogo = document.querySelector(".navbar-logo");
const navsocials = document.querySelector(".nav-social-container");
const linkview = document.querySelectorAll(".link-transition");
let rotate = document.querySelector(".refresh-button-container");
const reviewone = document.querySelector(".reviews-container-one");
const reviewtwo = document.querySelector(".reviews-container-two");
const reviewthree = document.querySelector(".reviews-container-three");
let reviewCount = 0;

const levelButtons = document.querySelectorAll('.classes-btn');
const levelContainers = document.querySelectorAll('.levels-container-div');

levelButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    
    levelButtons.forEach(btn => btn.classList.remove('level-black'));
    levelContainers.forEach(container => container.classList.remove('level-display'));

    button.classList.add('level-black');
    levelContainers[index].classList.add('level-display');
  });
});


let activeHam = true;

let qtab = document.querySelectorAll(".question-tab-container");

qtab.forEach((tab) => {
  let isActive = false;
  const arrow = tab.querySelector(".qtab-arrow");

  tab.addEventListener("click", () => {
    if (!isActive) {
      tab.style.height = tab.scrollHeight + "px";
      arrow.style.transform = "rotateX(180deg)";
    } else {
      tab.style.height = "3vh";
      arrow.style.transform = "rotate(0deg)";
    }

    tab.style.transition = "height 0.3s ease-in-out";
    arrow.style.transition = "transform 0.3s ease-in-out";
    isActive = !isActive;
  });
});

rotate.addEventListener("click", function () {
  if (reviewCount % 3 == 0) {
    reviewone.classList.remove("review-display");
    reviewtwo.classList.add("review-display");
  } else if (reviewCount % 3 == 1) {
    reviewtwo.classList.remove("review-display");
    reviewthree.classList.add("review-display");
  } else if (reviewCount % 3 == 2) {
    reviewthree.classList.remove("review-display");
    reviewone.classList.add("review-display");
  }
  reviewCount++;
});

const classone = document.querySelector('.class-one');
const classtwo = document.querySelector('.class-two');
const classheadingone = document.querySelector('.course-heading-one')
const courseparaone = document.querySelector('.course-para-one')
const coursebtnone = document.querySelector('.course-read-more-one')
const readmore = document.querySelector('.read-more-main-container')
const classheadingtwo = document.querySelector('.course-heading-two')
const courseparatwo = document.querySelector('.course-para-two')
const coursebtntwo = document.querySelector('.course-read-more-two')
let lastHovered = null;

function handleMouseEnter(event) {
    if (lastHovered && lastHovered !== event.target) {
        lastHovered.classList.remove('black');
        classheadingone.style.color = 'black';
        courseparaone.style.color = 'black'
        coursebtnone.style.opacity = 0;

        classheadingtwo.style.color = '#cbbb99';
        courseparatwo.style.color = '#f8f8f6'
        coursebtntwo.style.opacity = 1;
    }

    event.target.classList.add('black');
    if (event.target.getAttribute('data-color') === 'black') {
        classheadingone.style.color = '#cbbb99';
        courseparaone.style.color = '#f8f8f6'
        coursebtnone.style.opacity = 1;

        classheadingtwo.style.color = 'black';
        courseparatwo.style.color = 'black'
        coursebtntwo.style.opacity = 0;
    }
    lastHovered = event.target;
}

classone.addEventListener('mouseenter', handleMouseEnter);
classtwo.addEventListener('mouseenter', handleMouseEnter);

coursebtnone.addEventListener('click',function(){
    readmore.style.display = 'flex'
})

hamburger.addEventListener("click", function () {
  if (activeHam) {
    setTimeout(() => {
      navsocials.style.opacity = 1;
    }, 800);
    linkview.forEach((links, index) => {
      setTimeout(() => {
        links.style.transform = "translateY(0)";
        links.style.opacity = "1";
      }, 400);
    });

    hamone.style.transform = "rotate(45deg)";
    hamone.style.position = "relative";
    hamone.style.top = "5px";
    hamone.style.backgroundColor = "rgba(226, 216, 190, 0.822)";

    navdrop.style.transform = "translateY(0vh)";
    navbarlogo.style.opacity = 0;

    hamtwo.style.transform = "rotate(-45deg)";
    hamtwo.style.position = "relative";
    hamtwo.style.bottom = "5px";
    hamtwo.style.backgroundColor = "rgba(226, 216, 190, 0.822)";
  } else {
    setTimeout(() => {
      linkview.forEach(function (links) {
        links.style.transform = "translateY(100px)";
      });
    }, 10);
    setTimeout(() => {
      navsocials.style.opacity = 0;
    }, 100);
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
