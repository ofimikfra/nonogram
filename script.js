function initGrid(size) {
    let grid = document.getElementById("grid");
    const cell = `<div class="cell" data-value="0"></div>`;

    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    grid.innerHTML = ""

    for (let i = 0; i < size**2; i++) {
        grid.innerHTML += cell;
    }

    document.querySelectorAll(".cell").forEach((cell) => {
	    cell.addEventListener("click", () => {

            if (cell.style.backgroundColor == "black") {
                cell.style.backgroundColor = "white";
                cell.dataset.value = 0;
            } else {
                cell.style.backgroundColor = "black";
                cell
                cell.dataset.value = 1;
            }
	    });
    });
}

function clearGrid() {
    document.querySelectorAll(".cell").forEach((cell) => {
        cell.style.backgroundColor = "white";
        cell.dataset.value = 0;
    });
}

document.addEventListener("DOMContentLoaded", () => {
    initGrid(5);
});

const gridSize = document.getElementById("gridSize");
gridSize.addEventListener("input", () => {
    initGrid(gridSize.value);
})

