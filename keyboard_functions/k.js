function _k(key) {
    // array: a nested array of x, y coordinates
    var array = copyArray(mouseTrack);
    
    // path: jQuery selector for the SVG path element
    var path = $("#" + key);
    var pathString = '';
    var squareSize = 50; // Adjust the size of the square as needed
    var squareColor = '#eee'; // Set the default color
    var squareBorder = '#eee'; // Set the default color

    // Loop through the array and set a square at each coordinate when index is divisible by 10
    array.forEach(function(coord, index) {
        if (index % 10 === 0) {
            var x = coord[0] - squareSize / 2; // Adjust for square center
            var y = coord[1] - squareSize / 2; // Adjust for square center

            // Append the path for a square at the current coordinate with the specified color
            pathString += `M${x} ${y} L${x + squareSize} ${y} L${x + squareSize} ${y + squareSize} L${x} ${y + squareSize} Z `;
        }
    });

    // Set the 'd' attribute of the path element
    path.attr('d', pathString);
    path.attr('stroke', squareBorder);

    // Set the fill color of the path element
    path.attr('fill', squareColor);
}
