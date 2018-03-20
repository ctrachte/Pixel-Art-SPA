// Select color input
// function selectColor () {
//   var color = this.color;
//   return color;
// };

// Select size input

function selectGridSize () {
  var x = $('inputWidth').val();
  var y = $('inputHeight').val();
  return x, y;
};

// When size is submitted by the user, call makeGrid()

function makeGrid(x,y) {
  for (var rows = 0; rows < x; rows++) {
    $("#pixelCanvas").append("<tr class='row'></tr>");
    };
  for (var columns = 0; columns < y; columns++) {
    $(".row").append("<td class='col'>x</td>");
    };
};

// Remove the grid if the user is not satisfied:

function removeGrid () {
  $("#pixelCanvas").children.remove();

};


var x, y = selectGridSize();
$('form').submit(makeGrid(x,y));
// $('#colorPicker').on('select', selectColor());
