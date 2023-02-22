export const $ = (id) => document.getElementById(id);

// for (let i = -1; i < 23; i++) {
//   if (i === -1 || i === 0) {
//     let imgString = `<img src ='/assets/silhouette-left.png' class='img-styles' >`;
//     let imgElement = document.createElement("div");
//     imgElement.style.background = `url(assets/silhouette-left.png)`;
//     imgElement.style.backgroundSize = `cover`;
//     imgElement.classList.add("img-styles");
//     let item = { imgElement, imgString };
//     source.push(item);
//   } else if (i === 21 || i === 22) {
//     let imgString = `<img src ='/assets/silhouette-right.png' class='img-styles' >`;
//     let imgElement = document.createElement("div");
//     imgElement.style.background = `url(assets/silhouette-right.png)`;
//     imgElement.style.backgroundSize = `cover`;
//     imgElement.classList.add("img-styles");
//     let item = { imgElement, imgString };
//     source.push(item);
//   } else {
//     let imgString = `<img src ='/assets/cat${i}.png' class='img-styles' >`;
//     let imgElement = document.createElement("div");
//     imgElement.style.background = `url(/assets/cat${i}.png)`;
//     imgElement.style.backgroundSize = `100% 100%`;
//     imgElement.classList.add("img-styles");
//     let item = { imgElement, imgString };
//     source.push(item);
//   }
// }

let img = $("drive");
let source1 = [
  "https://drive.google.com/file/d/1U_DMW8nd-5tasaL1BzvvW6zRn5-HLrJq/view?usp=share_link",
  "https://drive.google.com/file/d/1PAB7W2TWdoyoXznS1rl38m8QS2O2JljW/view?usp=share_link",
];
// export const sendData = fetch(
//   "https://js-slider-e2a5d-default-rtdb.europe-west1.firebasedatabase.app/source.json",
//   { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(source1) }
// ).then(res => console.log(res));
export const fetchHTTP = fetch(
  "https://js-slider-e2a5d-default-rtdb.europe-west1.firebasedatabase.app/source.json"
)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    let dataLoad = [];
    for (let key in data) {
      if (key.includes("cat")) {
        let imgElement = document.createElement("img");
        imgElement.src = data[key];
        imgElement.classList.add("img-styles");
        let item = { imgElement };
        dataLoad.push(item);
      }
    }
    return source;
  });

console.log(fetchHTTP);
export const source = "";
