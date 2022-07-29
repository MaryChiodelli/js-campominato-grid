const selectEl = document.querySelector('.main-header select');
const buttonEl = document.querySelector('.main-header button');
const gridEl = document.querySelector('main .grid');
gridEl.innerHTML = ''

const levelMode = selectEl.value;
let gridSize = 9;

if (levelMode === 0) {
    gridSize = 10;
} else if (levelMode === 2) {
    gridSize = 7;
}

const numOfCells = gridSize ** 2;

buttonEl.addEventListener('click', function () {
    console.log(selectEl.value, gridSize);
    // generare griglia 10 x 10
    for (let i = 0; i < numOfCells; i++) {
        const square = createSquareEl();
        square.innerHTML = i + 1;
        gridEl.append(square);
    }
});

function createSquareEl() {
    const square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('click', clickHandler);
    return square;
}

function clickHandler() {
    const square = this;
    square.classList.add('active');
    console.log(square.innerHTML);
}