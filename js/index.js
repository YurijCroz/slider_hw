const container = document.querySelector('div.container');

function addFullSizeClass(target){
    removeFullSizeClass()
    target.classList.add('full-size');  //присваеваем класс полного размера элементу на который нажали
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

//делегирование
container.addEventListener('click', function (event) { //вешаем ивент на весь контэйнер
    let target = event.target.closest('.min-size'); //в таргет берем только элемент с классом min-size
    if(!target) return; //если не взяли то функция нечего не делает
    addFullSizeClass(target) //если взяли то вызов функции с отправлением того кто в таргете
})

backgroundImageReplacement()