let stickerContainer = document.querySelector(".sticker-container");
let stickerTextInput = document.querySelector(".input-content");
let stickers = document.querySelectorAll(".sticker");
let sticker = stickers[0];
let board = document.querySelector(".board");

// Выбор цвета
let colorPicker = document.querySelector(".color-button");

colorPicker.addEventListener("input", (e) => {
    sticker.style.backgroundColor = e.target.value;
    console.log('выбран цвет');
    console.log(sticker.value);
});

// Создание стикера
let addStickerButton = document.querySelector(".add-button");

addStickerButton.addEventListener("click", (e) => {
    e.preventDefault();

    // создание dom-элемнета
    sticker = document.createElement('div');
    // класс стикера
    sticker.classList.add('sticker');

    // случайный поворот
    const randomAngle = Math.floor(Math.random() * (10 - (-10) + 1)) + (-10);
    sticker.style.transform = 'rotate(' + randomAngle + 'deg)';

    // случайный цвет
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    sticker.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    // волочение
    sticker.draggable = true;
    // вставляем как ребёнка
    stickerContainer.appendChild(sticker);
})

// Очистить поле
let clearButton = document.querySelector(".clear-button");

clearButton.addEventListener("click", (e) => {
    e.preventDefault();
    stickerTextInput.value = '';
});

// Перенести текст на стикер
let accessButton = document.querySelector(".access-button");

accessButton.addEventListener("click", (e) => {
    e.preventDefault();
    sticker.textContent = stickerTextInput.value;
});

// Drag and drop
let dragged = null;

sticker.draggable = true;

stickerContainer.addEventListener("dragstart", (e) => {
    if (e.target.classList.contains('sticker')) {
        e.target.classList.add('sticker-dragging');
        dragged = e.target;
    }
});

stickerContainer.addEventListener("dragend", (e) => {
    // e.target.classList.remove('dragging');
});

board.addEventListener("dragstart", (e) => {
    if (e.target.classList.contains('sticker')) {
        e.target.classList.add('sticker-dragging');
        dragged = e.target;
    }
});

board.addEventListener("dragend", (e) => {
    if (e.target.classList.contains('sticker')) {
        e.target.classList.remove('sticker-dragging');
    }
});


board.addEventListener("dragover", (e) => {
    e.preventDefault();
});

board.addEventListener("drop", (e) => {
    e.preventDefault();

    if (dragged.parentNode !== board) {
        board.appendChild(dragged); // вставить себя как ребёнка
    }

    // случайный поворот
    const randomAngle = Math.floor(Math.random() * (10 - (-10) + 1)) + (-10);
    dragged.style.transform = 'rotate(' + randomAngle + 'deg)';

    // Перемещение на курсор
    dragged.style.left = e.clientX - (board.getBoundingClientRect()).left - 50 + 'px';
    dragged.style.top = e.clientY - (board.getBoundingClientRect()).top - 50 + 'px';

    dragged = null;
});

// Выполнение задачи (перечёркивание) и удаление стикера
board.addEventListener("click", (e) => {
    if (e.target.classList.contains('sticker')) {
        if (e.ctrlKey) {
            e.target.classList.toggle('through')
        } else if (e.shiftKey) {
            e.target.remove();
        }
    }
});

// Очистка доски от стикеров
let clearBoardButton = document.querySelector(".clear-board");

clearBoardButton.addEventListener('click', (e) => {
    let stickersOnBoard = board.querySelectorAll('.sticker');
    stickersOnBoard.forEach(sticker => sticker.remove());
})