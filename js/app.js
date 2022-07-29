const buttonEl = document.querySelector('.main-header button');
const gridEl = document.querySelector('main .grid');
gridEl.innerHTML = ''

const gridSize = 10;
const numOfCells = gridSize ** 2;

buttonEl.addEventListener('click', function () {
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
