// Рандом в радиусе
const getRandom = (min, max) => String(Math.floor(Math.random() * (max - min + 1)) + min);
const getRandom90 = (min, max) => String((Math.floor(Math.random() * (Math.floor(max / 90) - Math.ceil(min / 90) + 1)) + Math.ceil(min / 90)) * 90);

// Игральные кости

let lastAnimate1 = 'scaleX(100%) scaleY(100%) scaleZ(100%) rotateX(0deg) rotateY(0deg) rotateZ(0deg) translateX(0px) translateY(0px) translateZ(0px)'
let lastAnimate2 = 'scaleX(100%) scaleY(100%) scaleZ(100%) rotateX(0deg) rotateY(0deg) rotateZ(0deg) translateX(0px) translateY(0px) translateZ(0px)'
function rollTheDice() {


    let cube1 = document.querySelector('.cube-one');

    let randomMediumScale1 = getRandom(135, 175);
    let randomMediumAnimate1 = `scaleX(${randomMediumScale1}%) scaleY(${randomMediumScale1}%) scaleZ(${randomMediumScale1}%) rotateX(${getRandom(-1000, 1000)}deg) rotateY(${getRandom(-1000, 1000)}deg) rotateZ(${getRandom(-1000, 1000)}deg) translateX(0px) translateY(0px) translateZ(0px)`
    let newAnimate1 = `scaleX(100%) scaleY(100%) scaleZ(100%) rotateX(${getRandom90(-5000, 5000)}deg) rotateY(${getRandom90(-5000, 5000)}deg) rotateZ(${getRandom90(-5000, 5000)}deg) translateX(${getRandom(-30, 30)}px) translateY(${getRandom(-30, 30)}px) translateZ(${getRandom(-30, 30)}px)`

    cube1.animate([
        { transform: lastAnimate1 },
        { transform: randomMediumAnimate1 },
        { transform: newAnimate1 }
    ], {
        duration: Number(getRandom(2200, 3400)),
        iterations: 1,
    })

    lastAnimate1 = newAnimate1;

    cube1.style.transform = newAnimate1;



    let cube2 = document.querySelector('.cube-two');

    let randomMediumScale2 = getRandom(135, 175);
    let randomMediumAnimate2 = `scaleX(${randomMediumScale2}%) scaleY(${randomMediumScale2}%) scaleZ(${randomMediumScale2}%) rotateX(${getRandom(-5000, 5000)}deg) rotateY(${getRandom(-5000, 5000)}deg) rotateZ(${getRandom(-5000, 5000)}deg) translateX(0px) translateY(0px) translateZ(0px)`
    let newAnimate2 = `scaleX(100%) scaleY(100%) scaleZ(100%) rotateX(${getRandom90(-3000, 3000)}deg) rotateY(${getRandom90(-3000, 3000)}deg) rotateZ(${getRandom90(-3000, 3000)}deg) translateX(${getRandom(-30, 30)}px) translateY(${getRandom(-30, 30)}px) translateZ(${getRandom(-30, 30)}px)`

    cube2.animate([
        { transform: lastAnimate2 },
        { transform: randomMediumAnimate2 },
        { transform: newAnimate2 }
    ], {
        duration: Number(getRandom(2200, 3400)),
        iterations: 1,
    })

    lastAnimate2 = newAnimate2;

    cube2.style.transform = newAnimate2;
}

// Drag`n`Drop

document.querySelectorAll('.figure').forEach(function (figure) {

    figure.addEventListener('dragstart', function (event) {
        event.dataTransfer.setData('text/plain', figure.dataset.id);
        event.dataTransfer.effectAllowed = 'move';
    });


    figure.addEventListener('dragend', function () {
        //pass
    });
});


document.querySelectorAll('.cell-item').forEach(function (zone) {


    zone.addEventListener('dragover', function (event) {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    });


    zone.addEventListener('dragenter', function (event) {
        event.preventDefault();
        zone.classList.add('figure-over-cell')
        console.log('dragover')
    });


    zone.addEventListener('dragleave', function () {
        zone.classList.remove('figure-over-cell');
    });


    zone.addEventListener('drop', function (event) {
        event.preventDefault();
        zone.classList.remove('figure-over-cell');

        const id = event.dataTransfer.getData('text/plain');
        const figure = document.querySelector('[data-id="' + id + '"]');

        if (figure) {
            zone.appendChild(figure);

        }
    });
});