
let container = document.querySelector('div.container');

const setImg = document.querySelectorAll('div.min-size');

function depFun(){
    let fullImg = document.querySelector('div.full-size');
    fullImg.classList.remove('full-size');
    this.classList.add('full-size');
    let imgBG = document.querySelector('div.full-size img').getAttribute('src');
    container.style.backgroundImage = `url(${imgBG})`;
}

setImg.forEach(el=> el.addEventListener('click', depFun));
