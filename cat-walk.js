export const cat_walk = () => {
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
