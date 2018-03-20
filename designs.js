// Define our constant variables:
const submit = $('#submitButton'); //submit button
const inputWidth = $('#inputWidth'); // contains value of width
const inputHeight = $('#inputHeight'); // contains value of height
const pixelCanvas = $('#pixelCanvas'); // container for the grid
const pixelColor = $('#colorPicker'); // container for user chosen color
const defaultColor = 'white'; // Cell default color
const clear = $('#clear'); // Clear grid button
// Select color input:

// Creates a grid of the desired size when called:

function makeGrid() {
  let x = (inputWidth.val() > 100) ? 100 : inputWidth.val();
  let y = (inputHeight.val() > 100) ? 100 : inputHeight.val();
  for (var rows = 0; rows < x; rows++) {
    pixelCanvas.append("<tr class='row'></tr>");
    };
  for (var columns = 0; columns < y; columns++) {
    $(".row").append("<td class='col'></td>");
    };
};

// Removes the grid:
function removeGrid () {
  $(".row").remove();
  $(".col").remove();
};

// Sets the grid size when the user clicks submit:
submit.on('click', function (event) {
  event.preventDefault(); // prevents the grid from resetting to default value.
  removeGrid(); // removes the previous grid if there was one.
  makeGrid(); // creates the grid of the desired size.
});

// Clear button if the user wants to remove the grid:
clear.click(removeGrid());
