function makeGrid() {
  // declaring variables and obtaining values
	let canvas = $('#pixelCanvas');
	let gRow = $('#inputHeight').val();
	let gCol = $('#inputWeight').val();

  // delete the existing grid when new inputs given
	canvas.children().remove()

  // creating the rows and cols of the table
	for (x = 0; x < gRow; x++) {
	canvas.append('<tr></tr>');
	}

	for (y = 0; y < gCol; y++) {
	$('tr').append('<td></td>');
	}

  // adding color to the individual cells
	cell = canvas.find('td');
	cell.click(function() {
		var color;
		color = $("#colorPicker").val();
		$(this).css('background-color', color);
	});
}
//on clicking the submit button
let submit;

submit = $('#submitButton')
submit.click(function(e) {
  e.preventDefault();
  makeGrid();
});
