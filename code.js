import {source} from './constants.js';
import { cat_walk } from './cat-walk.js';
import { reset } from './slider-reset.js';




cat_walk();
let index = Math.floor(source.length / 2);

function slider(state) {
  switch (state) {
    case "INIT":
      index = Math.floor(source.length / 2);
      sliderSwiper(index, "INIT");
      break;
    case "LEFT":
      index--;
      sliderSwiper(index, "LEFT");
      break;
    case "RIGHT":
      index++;
      sliderSwiper(index, "RIGHT");
      break;
    case "LAST_LEFT":
      index = source.length - 3;
      reset("LEFT", source.length, sliderSwiper);
      //   sliderSwiper(index, "RESET", true);
      break;
    case "LAST_RIGHT":
      index = 2;
      reset("RIGHT", source.length, sliderSwiper);
      //   sliderSwiper(index, "RESET", true);
      break;
    default:
      index = 0;
  }
}

function sliderSwiper(index, direction, reset = false) {
  let lastLeftOld = document.getElementById("last-left"),
    secondLeftOld = document.getElementById("second-left"),
    activeOld = document.getElementById("active"),
    secondRightOld = document.getElementById("second-right"),
    lastRightOld = document.getElementById("last-right");

  let lastLeftNew = source[index - 2],
    secondLeftNew = source[index - 1],
    activeNew = source[index],
    secondRightNew = source[index + 1],
    lastRightNew = source[index + 2];

  const collectionSize = source.length;
  if (reset) {
    lastLeftOld.removeChild(lastLeftOld.childNodes[0]);
    secondLeftOld.removeChild(secondLeftOld.childNodes[0]);
    activeOld.removeChild(activeOld.childNodes[0]);
    secondRightOld.removeChild(secondRightOld.childNodes[0]);
    lastRightOld.removeChild(lastRightOld.childNodes[0]);
  }
  if (direction === "RIGHT") {
    lastLeftOld.removeChild(lastLeftOld.childNodes[0]);
  }
  if (direction === "LEFT") {
    lastRightOld.removeChild(lastRightOld.childNodes[0]);
  }

  lastLeftOld.appendChild(lastLeftNew.imgElement);
  secondLeftOld.appendChild(secondLeftNew.imgElement);
  activeOld.appendChild(activeNew.imgElement);
  secondRightOld.appendChild(secondRightNew.imgElement);
  lastRightOld.appendChild(lastRightNew.imgElement);
}
function animate(direction) {
  //   let lastLeft = document.getElementById("last-left"),
  //     secondLeft = document.getElementById("second-left"),
  //     active = document.getElementById("active"),
  //     secondRight = document.getElementById("second-right"),
  //     lastRight = document.getElementById("last-right");
  //   if (direction === "LEFT") {
  //     lastLeft.style.animationName = 'left-swipe';
  //     secondLeft.style.animationName = 'left-swipe';
  //     active.style.animationName = 'left-swipe';
  //     secondRight.style.animationName = 'left-swipe';
  //     lastRight.style.animationName = 'left-swipe';
  //   }
  let parent = document.getElementById("slider-container");
  if (direction === "LEFT") {
    for (let child of parent.children) {
      if (child.id !== "active")
        child.children[0].style.animationName = "left-swipe";
      else child.children[0].style.animationName = "bump";
      setTimeout(() => (child.children[0].style.animationName = ""), 500);
    }
  }
  if (direction === "RIGHT") {
    for (let child of parent.children) {
      if (child.id !== "active")
        child.children[0].style.animationName = "right-swipe";
      else child.children[0].style.animationName = "bump";
      setTimeout(() => (child.children[0].style.animationName = ""), 500);
    }
  }
}

document.getElementById("left").addEventListener("click", () => {
  if (index === 2) {
    slider("LAST_LEFT");
  } else slider("LEFT");
  animate("LEFT");
});
document.getElementById("right").addEventListener("click", () => {
  if (index === source.length - 3) {
    slider("LAST_RIGHT");
  } else slider("RIGHT");
  animate("RIGHT");
});

window.addEventListener("load", () => {
  slider("INIT");
});
