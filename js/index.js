
let container = document.querySelector('div.container');

const setImg = document.querySelectorAll('div.min-size');

function depFun(){
    let fullImg = document.querySelector('div.full-size'); //берем предыдущий элемент полного размера
    fullImg.classList.remove('full-size');  //удаляем у него тот самый класс который дает ему полный размер
    this.classList.add('full-size');  //присваеваем класс полного размера элементу на который нажали
    let imgBG = document.querySelector('div.full-size img').getAttribute('src'); //берем адресс картинки элемента полного размера
    container.style.backgroundImage = `url(${imgBG})`; //присваеваем полученный адресс на бэк контэйнера
}

setImg.forEach(el=> el.addEventListener('click', depFun));

let imgBG = document.querySelector('div.full-size img').getAttribute('src');  //тоже самое что и в функции, пришлось и тут сделать потому что в css идут какие то траблы
container.style.backgroundImage = `url(${imgBG})`;