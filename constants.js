export const $ = id => document.getElementById(id);

export const source = [];
for(let i=1; i<21; i++){
    let img = document.createElement('img');
    img.src = `/assets/cat${i}.png`;
    img.classList.add('img-styles')
    source.push(img)
}
