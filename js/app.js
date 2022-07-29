const buttonEl = document.querySelector('.main-header button');
const gridEl = document.querySelector('main .grid');
gridEl.innerHTML = ''

const gridSize = 10;
const numOfCells = gridSize ** 2;

buttonEl.addEventListener('click', function () {
    // generare griglia 10 x 10
    for (let i = 0; i < numOfCells; i++) {
        const cell = document.createElement('div');
        cell.classList.add('square');
        gridEl.append(cell);
        // console.log(i);
    }
});

console.log(gridEl);

