// Define our constant variables
const submit = $('#submitButton'); //submit button
const inputWidth = $('#inputWidth'); // contains value of width
const inputHeight = $('#inputHeight'); // contains value of height
const pixelCanvas = $('#pixelCanvas'); // grid
const pixelColor = $('#colorPicker'); // user chosen color
const clear = $('#clear'); // Clear grid button

// checks to see if input is greater than 100pixels
function checkInput(x, type) {
	if (x > 100) {
		// alert the user the value they chose is too large
		alert(type + " too large! " + type + " set to 100px");
		// reset value to max
		return 100;
	} else {
		return x;
	};
};
// Creates a grid of the desired size when called
function makeGrid() {
	let x = checkInput(inputWidth.val(), 'Width'); // width checked if too large
	let y = checkInput(inputHeight.val(), 'Height'); // height checked if to large
	let newTitle = $('input[name="name"]').val(); // title of the next new canvas
	$('#canvasContainer').prepend("<h2 class='canvasTitle'>" + newTitle + "</h2>"); // adds canvas title
	for (var rows = 0; rows < x; rows++) {
		pixelCanvas.append("<tr class='row'></tr>"); // adds rows to table
	};
	for (var columns = 0; columns < y; columns++) {
		$(".row").append("<td class='col shadow'></td>"); // adds columns to rows
	};
};
// Removes the grid
function removeGrid() {
	$(".row").remove();
	$(".col").remove();
	$('.canvasTitle').remove();
};
// Sets the grid size when the user clicks submit
submit.on('click', function(event) {
	event.preventDefault(); // prevents the grid from resetting to default value.
	removeGrid(); // removes the previous grid if there was one.
	makeGrid(); // creates the grid of the desired size.
});

// Change color when the user clicks a pixel
pixelCanvas.on('click', '.col', function(event) {
	let clickedCell = $(event.target); // saving the exact cell to a variable
	let currentColor = pixelColor.val(); // saving the current color to a variable
	// changes the color to the selected color if it is not the current color.
	(clickedCell.attr('bgcolor') !== currentColor) ? clickedCell.attr('bgcolor', currentColor): clickedCell.attr('bgcolor', 'white');
});
// Changes Web App title when user chooses a color to the color they chose
$("#colorPicker").change(function() {
	let currentColor = pixelColor.val();
	$("#appTitle").css("color", currentColor);
});
