// html-элементы
let postcards = document.querySelector('.postcards');
let form = document.querySelector('.form');
let deleteButton = document.querySelector('.delete');

// Массив открыток
let arrayPostcards = [];
let defaultArrayPostcards = [{
    text: 'С днем рождения! Желаю крепкого здоровья, душевного спокойствия и много радостных дней. Пусть все планы исполняются легко, а рядом всегда будут близкие и верные люди, готовые поддержать в любую минуту. Больше улыбок, тепла и ярких моментов!',
    sender: 'ООО "Пододеяльники"',
    recipient: 'Кому: Фрэнк Киенбург — лидер команды разработки игры Brawl Stars',
    theme: 'postcard-light'
}, 
{
    text: 'Люблю вкусно покушать. Привет!',
    sender: 'Мистер Бист',
    recipient: 'Ким Чен Ын',
    theme: 'postcard-dark'
},]

// Стирание элементов со страницы
function unrenderPostcards() {
    let postcardsElements = postcards.querySelectorAll('.postcard');
    postcardsElements.forEach(postcard => postcard.remove());
}

// Очистка массива и стирание элементов со страницы
function cleanArrayPostcard() {
    arrayPostcards.length = 0;
    unrenderPostcards();
    localStorage.clear();
}

// Отображение элементов по массиву
function renderPostcards() {
    unrenderPostcards();

    arrayPostcards.forEach(postcardItem => {

        // Создание элементов открытки
        let postcard = document.createElement('div');
        postcard.classList.add('postcard')

        let text = document.createElement('p');
        text.classList.add('postcard__text')

        let line = document.createElement('hr');
        line.classList.add('line')

        let adress = document.createElement('div');
        adress.classList.add('adress')

        let recipient = document.createElement('p');
        let sender = document.createElement('p');

        // Получение данных из массива
        text.innerHTML = postcardItem.text;
        sender.innerHTML = 'От: ' + postcardItem.sender;
        recipient.innerHTML = 'Кому: ' + postcardItem.recipient;
        // Тема
        postcard.classList.add(postcardItem.theme);

        // Структура отркытки
        postcard.append(text);
        postcard.append(line);
        postcard.append(adress);
        adress.append(sender);
        adress.append(recipient);

        // Вставка в postcards
        postcards.append(postcard);
    })
}

// Функция, добавляющая открытку в массив и перерендерюющая список
function addPostcard(e) {
    e.preventDefault()

    // Получение данных из формы
    let formData = new FormData(e.currentTarget);

    // Запись в массив
    arrayPostcards.push({
        text: formData.get('text'),
        sender: formData.get('recipient'),
        recipient: formData.get('sender'),
        theme: formData.get('theme'),
    });

    // сохранение массива в localStorage
    localStorage.setItem('postcardsLocalStorage', JSON.stringify(arrayPostcards));

    // перерендер
    unrenderPostcards();
    renderPostcards();
}

// Добавляем при отправке формы
form.addEventListener('submit', addPostcard);

// Удаляем всё при нажатии на кнопку удаления
deleteButton.addEventListener('click', cleanArrayPostcard);

// Взятие данных из localStorage и рендер при загрузке/перезагрузке страницы
arrayPostcards = JSON.parse(localStorage.getItem('postcardsLocalStorage')) || defaultArrayPostcards;
renderPostcards();