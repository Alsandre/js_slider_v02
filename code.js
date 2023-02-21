import { $, source } from "/constants.js";

console.log(source[0]);

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
      sliderSwiper(index, "RESET", true);
      break;
    case "LAST_RIGHT":
      index = 2;
      sliderSwiper(index, "RESET", true);
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

$("left").addEventListener("click", () => {
  if (index === 2) {
    slider("LAST_LEFT");
  }  else slider("LEFT");
});
$("right").addEventListener("click", () => {
  if (index === source.length - 3) {
    slider("LAST_RIGHT");
  } else slider("RIGHT");
});

window.addEventListener("load", () => {
  slider("INIT");
});
