
function _a(key, radius) {

    if (radius === undefined) {
        radius = 2;
    }

    array = copyArray(mouseTrack);
	path = $("#" + key);	
    let divisor = radius/2; // Example divisor value

    // Constructing the SVG path
    let pathString = '';
    array.forEach(([x, y]) => {
        if (x % divisor === 0 || y % divisor === 0) {
            pathString += `M${x},${y} `;
            pathString += `A${radius},${radius} 0 0,0 ${x + radius * 2},${y} `;
            pathString += `A${radius},${radius} 0 0,0 ${x},${y} `;
        }
    });
	
	path.attr('d', pathString);
	
    

}






