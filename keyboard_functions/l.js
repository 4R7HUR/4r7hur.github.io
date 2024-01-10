function _l(key) {
    // Get the data from the 'mouseTrack' and copy it into 'array'
    var array = copyArray(mouseTrack); // This assumes 'mouseTrack' contains the coordinate data
    
    var path = $("#" + key); // Assuming 'key' is the ID of the existing path element within an SVG
    var join = true; // Set to true if you want to join the spirals, false otherwise
    var dashArray = "4,3"; // Define the dash array (e.g., "4,2" means dash of length 4 followed by a gap of length 2)

    array.forEach(function(coord, index) {
        if (index % 10 === 0) { // Draw a spiral only when the index is divisible by 10
            var spiralDiameter = 210; // Adjusted the diameter of the spiral to 210
            var spiralRotations = 4; // You can adjust the number of rotations
            
            var spiral = createSpiral(coord[0], coord[1], spiralRotations, spiralDiameter, join && index !== 0);
            path.attr("stroke-dasharray", dashArray); // Apply the dash array to the path
            
            var pathD = path.attr("d"); // Retrieve the existing path's 'd' attribute
            path.attr("d", pathD + spiral); // Append the spiral to the existing path
        }
    });
}

function createSpiral(cx, cy, rotations, diameter, join) {
    var d = "";
    var centerX = cx;
    var centerY = cy;
    var numPoints = rotations * 10;
    var angleStep = (2 * Math.PI * rotations) / numPoints;
    var angle = 0;
    var radius = 0;

    for (var i = 0; i < numPoints; i++) {
        angle += angleStep;
        radius += diameter / (numPoints * 10); // Adjust the divisor for the spiral density

        var x = centerX + radius * Math.cos(angle);
        var y = centerY + radius * Math.sin(angle);

        if (i === 0 && !join) {
            d += `M${x},${y}`;
        } else {
            d += `L${x},${y}`;
        }
    }

    return d;
}
