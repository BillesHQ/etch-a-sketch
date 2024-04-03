const outerDiv = document.querySelector('#outer');

const div = document.createElement('div');
div.setAttribute('id', 'container');
outerDiv.appendChild(div)
const header = document.querySelector('#button')
const startButton = document.querySelector('#startButton');

function createDivGrid(dim) {
    for (let i = 0; i < dim; i++){
        const row = document.createElement('div');
        row.classList.add('rows')
        outerDiv.appendChild(row);
        for (let i = 0; i < dim; i++) {
            let cells = document.createElement('div');
            cells.classList.add('cell')
            row.appendChild(cells);
            cells.classList.add('white')
        }
    }

    const turnCellColor =  function (event) {
        console.log(event)
        const x = event.clientX;
        const y = event.clientY;
        const el = document.elementFromPoint(x, y)
        if (el.classList.contains('white') && el.classList.contains('cell')) {
            el.classList.remove('white')
            const color = colorPicker();
            el.classList.add(color)
            el.classList.add('cell')
        }
    }
    document.addEventListener('mouseover', turnCellColor)
    header.removeChild(startButton)
}

startButton.addEventListener('click', () => {
const gridSize = prompt('How many squares per side?')
createDivGrid(gridSize)
})

function colorPicker() {
    const colors = ['red', 'gold', 'blue', 'purple', 'orange', 'magenta', 'pink', 'brown', 'cyan', 'burylywood', 'green', 'yellow', 'grey', 'brightredorange', 'turqouise', 'redviolet', 'leafgreen']
    const random = Math.floor(Math.random() * colors.length);
    return colors[random]
}
