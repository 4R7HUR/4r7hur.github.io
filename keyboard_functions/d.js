//Using 'g' as a test case to get things in a good place
// _j uses this function to draw the path
function _d(key, coords_array, xy) {

    if (xy === undefined) {
        xy = 'y';//1 for horizontal, 2 for verticle
    }

    path = $("#" + key);       
    
    let groupSize = 3; // Define the size of each group based on x-value ranges
    let groupedArrays = groupAndSortArrays(coords_array, groupSize, xy);
    
    pathString = '';

    groupedArrays.forEach((group, index) => {
        if (group.length > 0) {
            const [x, y] = group[0]; // Selecting the first coordinates from each sub-array
    
            if (index === 0) {
                pathString += `M${x},${y}`; // Set the first coordinate as a move-to command
            } else {
                pathString += ` L${x},${y}`; // Adding straight line commands to the path string
            }
        }
    });

    // Add reverse coordinates of each group
    for (let i = groupedArrays.length - 1; i >= 0; i--) {
        const group = groupedArrays[i];
        if (group.length > 0) {
            const [x, y] = group[group.length - 1]; // Selecting the last coordinates from each sub-array
            pathString += ` L${x},${y}`; // Adding straight line commands to the path string
        }
    }

    pathString += ' Z'; // Close the path by connecting end to start
    path.attr('d', pathString);  
    path.attr('id', '');    
  
}

function groupAndSortArrays(coords_array, groupSize, xy) {
    let groupedArrays = [];

    coords_array.forEach(([x, y]) => {
        const groupIndex = xy === 'x' ? Math.floor(x / groupSize) : Math.floor(y / groupSize);

        if (!groupedArrays[groupIndex]) {
            groupedArrays[groupIndex] = [];
        }

        groupedArrays[groupIndex].push([x, y]);
    });

    groupedArrays.forEach(group => {
        if (group !== undefined) {
            group.sort((a, b) => {
                if (xy === 'x') {
                    return a[1] - b[1]; // Sort by y-values if xy is 'x'
                } else if (xy === 'y') {
                    return a[0] - b[0]; // Sort by x-values if xy is 'y'
                }
            });
        }
    });

    return groupedArrays.filter(group => group !== undefined);
}
