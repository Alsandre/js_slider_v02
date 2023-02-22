export const reset = (resetFrom, size, action) => {
  console.log(size)
  let index, resetDirection;
  resetFrom === "LEFT"
    ? (index = 1)
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
    if(resetDirection === "RIGHT" && index < (size - 2)){
      action(index, resetDirection);
        index++;
    }else if (resetDirection === "LEFT" && index > 1){
      action(index, resetDirection);
        index--;
    }
  }, 70);
  if((resetFrom==='LEFT' && index === (size - 3)) || (resetFrom==='RIGHT' && index === 2) ){
    clearInterval(resetInterval);
    return 'reset done!';
  }
};
