//Using 'g' as a test case to get things in a good place
function _g(key, axis) {

    if (axis === undefined) {
        axis = 1;//1 for horizontal, 2 for verticle
    }

    array = copyArray(mouseTrack);
    path = $("#" + key);
    d1 = path.attr('d');

    let spacer = 50;
    let sort = 'asc';
    let groupedCoordinates = groupCoordinatesByAxis(array, axis, spacer);
    let sortedCoordinates = sortGroupedCoordinates(groupedCoordinates, axis, sort);
    sortedCoordinates = sortedCoordinates.flat(1);

    for (let i = 0; i < sortedCoordinates.length; i++) {
        if (i === 0) {
            d2 = `M${sortedCoordinates[i][0]},${sortedCoordinates[i][1]} `;
        } else {
            d2 += `L${sortedCoordinates[i][0]},${sortedCoordinates[i][1]} `;
        }
    }

    path.attr('d', d1 + d2);

}

function groupCoordinatesByAxis(array, axis, spacer) {
    let groupedArrays = {};

    array.forEach(coordinate => {
        let index = Math.floor(coordinate[axis] / spacer) * spacer; // Determine the group index

        if (!groupedArrays[index]) {
            groupedArrays[index] = [];
        }
        groupedArrays[index].push(coordinate);
    });

    return Object.values(groupedArrays);
}

function sortGroupedCoordinates(groupedCoordinates, axis, sort) {
    return groupedCoordinates.map((group, index) => {
        if (sort === 'asc') {
            return group.sort((a, b) => (axis === 0 ? a[1] - b[1] : a[0] - b[0]));
        } else if (sort === 'desc') {
            return group.sort((a, b) => (axis === 0 ? b[1] - a[1] : b[0] - a[0]));
        } else if (sort === 'alternate') {
            if (index % 2 === 0) {
                return group.sort((a, b) => (axis === 0 ? b[1] - a[1] : b[0] - a[0])); // Descending sort for even-indexed subgroups
            } else {
                return group.sort((a, b) => (axis === 0 ? a[1] - b[1] : a[0] - b[0])); // Ascending sort for odd-indexed subgroups
            }
        } else {
            // Default behavior: ascending sort if no valid 'sort' parameter is provided
            return group.sort((a, b) => (axis === 0 ? a[1] - b[1] : a[0] - b[0]));
        }
    });
}







