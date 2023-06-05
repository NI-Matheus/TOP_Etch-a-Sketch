
/* Load the page eventListener*/
document.addEventListener("DOMContentLoaded", () => {
    const gridSize = 16;
    createGrid(gridSize);
})

/* Button to change the !!GRIDSIZE EVENTLISTENER!! */
const changeSizeBtn = document.getElementById('change-size-btn');
changeSizeBtn.addEventListener('click', changeGridSize);

/* Function to create grid */
function createGrid(gridSize) {
    const container = document.querySelector('#container');
    const actualGridSize = Math.min(gridSize, 100);

    // Set the grid template columns and rows dynamically
    container.innerHTML = '';
    container.style.gridTemplateColumns = `repeat(${actualGridSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${actualGridSize}, 1fr)`;

    for (let i = 0; i < actualGridSize; i++) {
        for (let j = 0; j < actualGridSize; j++) {
            const square = document.createElement('div');
            square.classList.add('square');
            container.appendChild(square);

            /* Hover effect eventListener*/
            square.addEventListener('mouseover', function(event) {
                event.target.style.backgroundColor = getColor();
            });
        }
    }
}

/* Function to change grid !!SIZE!! */
function changeGridSize () {
    const newSize = parseInt(prompt('Enter new grid size (upt to 100)'));

    if (isNaN(newSize) || newSize > 100 || newSize < 1) {
        alert('Invalid grid size! Please enter a number between 1 and 100.')
        return;
    }

    createGrid(newSize);
}

/* Function to change grid !!COLOR!! */
function getColor () {
    const colorParam = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i <6; i++) {
        color += colorParam[Math.floor(Math.random() * colorParam.length)];
    }
    return color;
}