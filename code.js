const source = [];
for (let i = -1; i < 23; i++) {
  if (i === -1 || i === 0) {
    let imgString = `<img src ='./assets/silhouette-left.png' class='img-styles' >`;
    let imgElement = document.createElement("img");
    imgElement.src = `./assets/silhouette-left.png`;
    imgElement.classList.add("img-styles");
    let item = { imgElement, imgString };
    source.push(item);
  } else if (i === 21 || i === 22) {
    let imgString = `<img src ='./assets/silhouette-right.png' class='img-styles' >`;
    let imgElement = document.createElement("img");
    imgElement.src = `./assets/silhouette-right.png`;
    imgElement.classList.add("img-styles");
    let item = { imgElement, imgString };
    source.push(item);
  } else {
    let imgString = `<img src ='./assets/cat${i}.png' class='img-styles' >`;
    let imgElement = document.createElement("img");
    imgElement.src = `./assets/cat${i}.png`;
    imgElement.classList.add("img-styles");
    let item = { imgElement, imgString };
    source.push(item);
  }
}
const cat_walk = () => {
  let catWalkLeft = document.getElementById("cat-walk-left");
  let catWalkRight = document.getElementById("cat-walk-right");
  let walking_index = 0;
  setInterval(() => {
    // catWalkLeft.style.top = `-${walking_index*58}px`;
    // catWalkRight.style.top = `-${walking_index*58}px`;
    // walking_index === 11 ? walking_index = 1 : walking_index++;

    // catWalkLeft.style.top = `-${walking_index * 58}px`;
    // catWalkRight.style.top = `-${walking_index * 58}px`;
    switch (walking_index) {
      case 0:
        catWalkLeft.style.top = "0";
        catWalkRight.style.top = "0";
        break;
      case 1:
        catWalkLeft.style.top = "-57px";
        catWalkRight.style.top = "-57px";
        break;
      case 2:
        catWalkLeft.style.top = "-117px";
        catWalkRight.style.top = "-117px";
        break;
      case 3:
        catWalkLeft.style.top = "-177px";
        catWalkRight.style.top = "-177px";
        break;
      case 4:
        catWalkLeft.style.top = "-234px";
        catWalkRight.style.top = "-234px";
        break;
      case 5:
        catWalkLeft.style.top = "-295px";
        catWalkRight.style.top = "-295px";
        break;
      case 6:
        catWalkLeft.style.top = "-354px";
        catWalkRight.style.top = "-354px";
        break;
      case 7:
        catWalkLeft.style.top = "-412px";
        catWalkRight.style.top = "-412px";
        break;
      case 8:
        catWalkLeft.style.top = "-471px";
        catWalkRight.style.top = "-471px";
        break;
      case 9:
        catWalkLeft.style.top = "-530px";
        catWalkRight.style.top = "-530px";
        break;
      case 10:
        catWalkLeft.style.top = "-589px";
        catWalkRight.style.top = "-589px";
        break;
    //   case 11:
    //     catWalkLeft.style.top = "-648px";
    //     catWalkRight.style.top = "-648px";
    //     break;
    //   case 12:
    //     catWalkLeft.style.top = "-705px";
    //     catWalkRight.style.top = "-705px";
    //     break;
      default:
        walking_index = -1;
    }
    walking_index++;
  }, 50);
};

const reset = (resetFrom, size, action) => {
  let index, resetDirection;
  let leftBtn = document.getElementById("left");
  let rightBtn = document.getElementById("right");
  resetFrom === "LEFT"
    ? (index = 2)
    : resetFrom === "RIGHT"
    ? (index = size - 3)
    : (index = Math.floor(size / 2));
  switch (resetFrom) {
    case "LEFT":
      index = 2;
      resetDirection = "RIGHT";
      break;
    case "RIGHT":
      index = size - 3;
      resetDirection = "LEFT";
      break;
    default:
      index = Math.floor(size / 2);
      resetDirection = "RIGHT";
  }

  const resetInterval = setInterval(() => {
    if (resetDirection === "RIGHT" && index < size - 2) {
      action(index, resetDirection);
      index++;
      leftBtn.disabled = true;
      rightBtn.disabled = true;
      setTimeout(() => {
        leftBtn.disabled = false;
        rightBtn.disabled = false;
      }, 70 * size);
      console.log(index);
    } else if (resetDirection === "LEFT" && index > 1) {
      action(index, resetDirection);
      index--;
      setTimeout(() => {
        leftBtn.disabled = false;
        rightBtn.disabled = false;
      }, 70 * size);
      console.log(index);
    }
  }, 70);
  if (
    (resetFrom === "LEFT" && index === size - 3) ||
    (resetFrom === "RIGHT" && index === 2)
  ) {
    clearInterval(resetInterval);
    return "reset done!";
  }
};


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
