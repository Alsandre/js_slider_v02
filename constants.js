export const $ = (id) => document.getElementById(id);

export const source = [];
for (let i = -1; i < 23; i++) {
  if (i === -1 || i === 0) {
    let imgString = `<img src ='assets/silhouette-left.png' class='img-styles' >`;
    let imgElement = document.createElement("img");
    imgElement.src = `assets/silhouette-left.png`;
    imgElement.classList.add("img-styles");
    let item = { imgElement, imgString };
    source.push(item);
  } else if (i === 21 || i === 22) {
    let imgString = `<img src ='assets/silhouette-right.png' class='img-styles' >`;
    let imgElement = document.createElement("img");
    imgElement.src = `assets/silhouette-right.png`;
    imgElement.classList.add("img-styles");
    let item = { imgElement, imgString };
    source.push(item);
  } else {
    let imgString = `<img src ='assets/cat${i}.png' class='img-styles' >`;
    let imgElement = document.createElement("img");
    imgElement.src = `assets/cat${i}.png`;
    imgElement.classList.add("img-styles");
    let item = { imgElement, imgString };
    source.push(item);
  }
}
