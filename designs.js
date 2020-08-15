// get grid
const grid = document.getElementById('pixelCanvas');

// Select size input
const gridHeight = document.getElementById('inputHeight');
const gridWidth = document.getElementById('inputWidth');

// Select color input
const gridColor = document.getElementById("colorPicker");

// When size is submitted by the user, call clearGrid() and makeGrid()
const submitButton = document.querySelector('input[type=submit]');
submitButton.addEventListener('click', function(event) {
    event.preventDefault();
    clearGrid();
    makeGrid();
});

// clears the grid before building a new one
function clearGrid() {
    grid.innerHTML = '';
}

function makeGrid() {
    // get the value of the size inputs
    let row_count = gridHeight.value;
    let column_count = gridWidth.value;

    // creates number of rows based on user's set height
    for (let row = 1; row <= row_count; row++) {
        const newRow = document.createElement('tr');
        grid.appendChild(newRow);

        // creates number of columns based on user's set width
        for (let column = 1; column <= column_count; column++) {
            const newColumn = document.createElement('td');
            newColumn.addEventListener('click', function() {
                // get the value of the color picker on click
                let selected_color = gridColor.value;

                /**
                 * If the background color is equivalent to "" (which it is by default),
                 * set it to the color selected in the color picker.
                 * Otherwise, if the background color is not equivalent to ""
                 * and if the background color is not equivalent to the color
                 * selected in the color picker, set it to the color in the color picker.
                 * That way the user can overwrite the previous background color of a call
                 * to a color of their choosing.
                **/
                if (newColumn.style.backgroundColor === "") {
                    newColumn.style.backgroundColor = selected_color;
                } else if (newColumn.style.backgroundColor !== "" && newColumn.style.backgroundColor !== selected_color) {
                    newColumn.style.backgroundColor = selected_color;
                }
                
            });

            newRow.appendChild(newColumn);
        }

    }
}
