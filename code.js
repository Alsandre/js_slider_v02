import { $, source } from "/constants.js";

console.log(source[0]);

let index = Math.floor(source.length / 2);

function slider(state) {
  switch (state) {
    case "INIT":
      index = Math.floor(source.length / 2);
      sliderSwiper(index, "RIGHT");
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
      index = source.length - 1;
      sliderSwiper(index, 'LEFT', true);
      break;
    case "LAST_RIGHT":
      index = 0;
      sliderSwiper(index, 'RIGHT', true);
      break;
    default:
      index = 0;
  }
}
function sliderSwiper(index, direction, reset = false) {
  let lastLeftOld = $("last-left"),
    secondLeftOld = $("second-left"),
    activeOld = $("active"),
    secondRightOld = $("second-right"),
    lastRightOld = $("last-right");

  let lastLeftNew = source[index - 2],
    secondLeftNew = source[index - 1],
    activeNew = source[index],
    secondRightNew = source[index + 1],
    lastRightNew = source[index + 2];

  let emptyLeft = document.createElement("img");
  emptyLeft.classList.add("img-styles");
  emptyLeft.src = "/assets/silhouette-left.png";
  

  let emptyRight = document.createElement("img");
  emptyRight.classList.add("img-styles");
  emptyRight.src = "/assets/silhouette-right.png";

  const collectionSize = source.length;

  if (reset && index === 0) {
    lastLeftOld.appendChild(emptyLeft);
    secondLeftOld.appendChild(emptyLeft.cloneNode());
    activeOld.appendChild(activeNew);
    secondRightOld.appendChild(secondRightNew);
    lastRightOld.appendChild(lastRightNew);
    return;
  } else if (reset && index === collectionSize - 1) {
    lastLeftOld.replaceChild(lastLeftNew);
    secondLeftOld.appendChild(secondLeftNew);
    activeOld.appendChild(activeNew);
    secondRightOld.appendChild(emptyRight);
    lastRightOld.appendChild(emptyRight.cloneNode());
    return;
  }
  //Edge case handle
  switch (index) {
    case 2:
      if (direction === "LEFT") lastLeftNew = emptyLeft;
      break;

    case 1:
      if (direction === "LEFT") {
        lastLeftNew = emptyLeft;
        secondLeftNew = emptyLeft.cloneNode();
      }
      break;

    case 0:
      if (direction === "LEFT") slider("LAST_LEFT");
      break;

    case collectionSize - 3:
      if (direction === "RIGHT") lastRightNew = emptyRight;
      break;

    case collectionSize - 2:
      if (direction === "RIGHT") {
        lastRightNew = emptyRight;
        secondRightNew = emptyRight.cloneNode();
      }
      break;

    case collectionSize - 1:
      if (direction === "RIGHT") slider("LAST_RIGHT");
      break;
  }
  //

//   console.log(lastLeftOld.childNodes[0]);
  lastLeftOld.appendChild(lastLeftNew);
  secondLeftOld.appendChild(secondLeftNew);
  activeOld.appendChild(activeNew);
  secondRightOld.appendChild(secondRightNew);
  lastRightOld.appendChild(lastRightNew);
  console.log(lastRightNew)
  console.log(lastRightOld)
}

$("left").addEventListener("click", () => slider("LEFT"));
$("right").addEventListener("click", () => slider("RIGHT"));

window.addEventListener("load", () => {
  slider("INIT");
});
