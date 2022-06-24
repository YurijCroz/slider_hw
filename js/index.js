
let container = document.querySelector('div.container');

const setImg = document.querySelectorAll('div.min-size');

function addFullSizeClass(){
    removeFullSizeClass()
    this.classList.add('full-size');  //присваеваем класс полного размера элементу на который нажали
    backgroundImageReplacement()
}

function removeFullSizeClass() {
    let fullImg = document.querySelector('div.full-size'); //берем предыдущий элемент полного размера
    fullImg.classList.remove('full-size');  //удаляем у него тот самый класс который дает ему полный размер
}

function backgroundImageReplacement(){
    let imgBG = document.querySelector('div.full-size img').getAttribute('src'); //берем адресс картинки элемента full-size
    container.style.backgroundImage = `url(${imgBG})`; //присваеваем полученный адресс на бэк контэйнера
};

setImg.forEach(el=> el.addEventListener('click', addFullSizeClass));

backgroundImageReplacement()