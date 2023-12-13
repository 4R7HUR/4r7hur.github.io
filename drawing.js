
// Attach the event listener to the document
//document.addEventListener("mousemove", trackMouse);

svg.on("mousemove", trackMouse);

// Function to track mouse movement
function trackMouse(event) {
    let x = xy_factory(event.clientX, { rounding: 1, randomness: 1, });
    let y = xy_factory(event.clientY, { rounding: 1, randomness: 1, });

    let path = paths.eq(currentArrayIndex);

    let coordinate_array = coordinate_arrays[currentArrayIndex];
    let coordinates_count = coordinate_array.length;

    coordinate_arrays[currentArrayIndex].push([x, y]);

    //check to see if this is our first time for this set of coordinates   
    if (coordinates_count === 0) {
        d = 'M ' + x + ' ' + y + '';
        path.attr('d', d);
    }

    if (coordinates_count > 0 && (coordinates_count % 3) === 0) {

        thirds.push({ x, y });

        path.attr('d', path.attr('d') + ' C ' + concatenateCoordinates(coordinate_array));
        
    }

    currentArrayIndex = (currentArrayIndex + 1) % paths.length; // Cycle through the arrays

}



function concatenateCoordinates(coordinate_array) {
    // Get the last three sub-arrays
    var lastThreeSubArrays = coordinate_array.slice(-3);

    // Concatenate and format the sub-arrays into a string
    var resultString = lastThreeSubArrays.map(function (subArray) {
        return subArray.join(' ');
    }).join(', ');

    return resultString;
}

function xy_factory(xy, options) {

    // Access the 'rounding' value from the 'options' object
    let roundingValue = options.rounding;
    let randomness = options.randomness;

    // Randomize
    if (randomness) {
        xy = xy + ((Math.random() * 2 * randomness) - randomness);
    }

    // Perform the rounding or other operations as needed
    if (roundingValue) {
        xy = Math.round(xy / roundingValue) * roundingValue;
    }

    // Return the result
    return xy;
}




