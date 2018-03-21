// Define our constant variables:
const submit = $('#submitButton'); //submit button
const inputWidth = $('#inputWidth'); // contains value of width
const inputHeight = $('#inputHeight'); // contains value of height
const pixelCanvas = $('#pixelCanvas'); // grid
const pixelColor = $('#colorPicker'); // user chosen color
const clear = $('#clear'); // Clear grid button
// Select color input:

// Creates a grid of the desired size when called:

function checkInput (x, type) {
  if (x > 100) {
    alert( type + " too large! " + type + " set to 100px" );
    return 100;
  } else {
    return x;
  };
};

function makeGrid() {
  let x = checkInput(inputWidth.val(), 'Width');
  let y = checkInput(inputHeight.val(), 'Height');
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

// Change color when the user clicks a pixel:

pixelCanvas.on('click', '.col', function (event) {
  let clickedCell = $(event.target);
  let currentColor = pixelColor.val();
  (clickedCell.attr('bgcolor')!==currentColor) ? clickedCell.attr('bgcolor', currentColor) : clickedCell.attr('bgcolor', 'white');
});
