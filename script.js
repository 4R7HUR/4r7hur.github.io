let maxXmaxY = getMaxXmaxY(history_data);
drawingPx = drawingPx + 'px';
historyPx = historyPx + 'px';
let pathData = Array.from({ length: historyPaths }, () => []);

const dynamicSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

// Set author metadata
dynamicSvg.setAttributeNS('http://www.w3.org/2000/xmlns/', 'xmlns:dc', 'http://purl.org/dc/elements/1.1/');
dynamicSvg.setAttributeNS('http://purl.org/dc/elements/1.1/', 'dc:creator', 'Arthur Saunders');

const currentEpochTime = Math.floor(Date.now() / 1000);
dynamicSvg.setAttributeNS('http://purl.org/dc/elements/1.1/', 'dc:date', currentEpochTime);
dynamicSvg.setAttributeNS('http://purl.org/dc/elements/1.1/', 'dc:url', window.location.href);


dynamicSvg.setAttribute("id", "dynamicSvg");
dynamicSvg.setAttribute("width", maxXmaxY[0] + "px");
dynamicSvg.setAttribute("height", maxXmaxY[1] + "px");

let path1 = createPath('', 'active', 'description', '', drawingPx, '#222',1);
dynamicSvg.appendChild(path1);
let path2 = createPath('', 'active', 'description', '', drawingPx, '#111',0.9);
dynamicSvg.appendChild(path2);
let path3 = createPath('', 'active', 'description', '', drawingPx, '#000',0.8);
dynamicSvg.appendChild(path3);

const groupComplete = document.createElementNS('http://www.w3.org/2000/svg', 'g');
groupComplete.setAttribute("id", "complete");
dynamicSvg.prepend(groupComplete);
////////////////////

document.body.appendChild(dynamicSvg);

//Set Background paths
let svgNamedColorsIndex

if(parseInt(historyPaths)){
    
    for (let i = 1; i <= historyPaths; i++) {
    
        let parts = historyColours.split(".");
        svgNamedColorsIndex = parseInt(parts.shift());
        parts.push(svgNamedColorsIndex);
        historyColours = parts.join(".");
    
        let background = createPath('background_' + i, 'background', 'background', '', historyPx, svgNamedColors[svgNamedColorsIndex], 1);
        dynamicSvg.prepend(background);
    }
    
    for (let i = 0; i < history_data.length; i++) {
        let index = i % historyPaths;
        pathData[index].push(history_data[i]);
    }
    
    for (let i = 0; i < historyPaths; i++) {
        setDAttribute(pathData[i], 1, 'background_' + (i + 1));
    }

}


//set paper
let paper = createRectangle('papper', '', 0, 0, maxXmaxY[0], maxXmaxY[1], paperColour);
dynamicSvg.prepend(paper);



function getMaxXmaxY(history_data) {
    // Initialize max values for x and y
    let history_data_maxX = -Infinity;
    let history_data_maxY = -Infinity;

    // Iterate through the coordinates array
    history_data.forEach(coord => {
        let [x, y] = coord.split(',').map(Number);

        // Update max values
        history_data_maxX = Math.max(history_data_maxX, x);
        history_data_maxY = Math.max(history_data_maxY, y);
    });

    return [history_data_maxX,history_data_maxY];
}


function setDAttribute(data, step, pathId) {
    let d = "M"; // Initialize the path with the 'M' command for starting a new path

    // Loop through the data array with the specified step size
    for (let i = 0; i < data.length; i += step) {
        let coords = data[i].split(","); // Split the coordinate pair
        let x = coords[0]; // Extract the x-coordinate
        let y = coords[1]; // Extract the y-coordinate

        // Append the coordinates to the path using the 'C' command for cubic Bezier curves
        d += `${x},${y} `;
    }

    // Set the 'd' attribute of the SVG path with the specified ID
    document.getElementById(pathId).setAttribute('d', d.trim());
}

////////////

function generateRandomColor(hex, variance) {
    // Convert hex to RGB
    let r = parseInt(hex.substring(1, 3), 16);
    let g = parseInt(hex.substring(3, 5), 16);
    let b = parseInt(hex.substring(5, 7), 16);

    // Generate random values within the specified variance
    let randomR = r + Math.floor(Math.random() * (variance + 1)) - Math.floor(variance / 2);
    let randomG = g + Math.floor(Math.random() * (variance + 1)) - Math.floor(variance / 2);
    let randomB = b + Math.floor(Math.random() * (variance + 1)) - Math.floor(variance / 2);

    // Clamp the values to the valid range (0-255)
    randomR = Math.min(Math.max(randomR, 0), 255);
    randomG = Math.min(Math.max(randomG, 0), 255);
    randomB = Math.min(Math.max(randomB, 0), 255);

    // Convert RGB back to hex
    let randomHex = '#' + ((1 << 24) + (randomR << 16) + (randomG << 8) + randomB).toString(16).slice(1);

    return randomHex;
}




//variables

const sharpies = [
    { nib: '0.1vw', color: 'baby_blue', hex: '#0090ee' },
    { nib: '0.1vw', color: 'black', hex: '#020207' },
    { nib: '0.1vw', color: 'blue', hex: '#230094' },
    { nib: '0.1vw', color: 'blue_green', hex: '#00875a' },
    { nib: '0.1vw', color: 'hot_pink', hex: '#ff00ce' },
    { nib: '0.1vw', color: 'karki', hex: '#5b8e2b' },
    { nib: '0.1vw', color: 'light_blue', hex: '#458bd7' },
    { nib: '0.1vw', color: 'dirty_pink', hex: '#890082' },
    { nib: '0.1vw', color: 'orange', hex: '#cf7c27' },
    { nib: '0.1vw', color: 'pink', hex: '#ff00ce' },
    { nib: '0.1vw', color: 'purple', hex: '#480093' },
    { nib: '0.1vw', color: 'yellow', hex: '#d3cd20' },
    { nib: '0.2vw', color: 'black', hex: '#05060a' },
    { nib: '0.2vw', color: 'blue1', hex: '#4b95e3' },
    { nib: '0.2vw', color: 'blue2', hex: '#0071e2' },
    { nib: '0.2vw', color: 'blue3', hex: '#0071e2' },
    { nib: '0.2vw', color: 'brown', hex: '#311512' },
    { nib: '0.2vw', color: 'gray', hex: '#546078' },
    { nib: '0.2vw', color: 'green', hex: '#009154' },
    { nib: '0.2vw', color: 'leaf', hex: '#6ec43a' },
    { nib: '0.2vw', color: 'light_pink', hex: '#ffdefb' },
    { nib: '0.2vw', color: 'light_purple', hex: '#7753db' },
    { nib: '0.2vw', color: 'mouve', hex: '#b00081' },
    { nib: '0.2vw', color: 'orange', hex: '#dd8836' },
    { nib: '0.2vw', color: 'pink', hex: '#f382de' },
    { nib: '0.2vw', color: 'purple', hex: '#440067' },
    { nib: '0.2vw', color: 'red', hex: '#d2001a' },
    { nib: '0.2vw', color: 'red2', hex: '#de0012' },
    { nib: '0.2vw', color: 'teal', hex: '#005993' },
    { nib: '0.2vw', color: 'yellow', hex: '#ddac04' }
];


const sketch_book = {
    page_1: {
        page: 1,
        hex: "#0090ee",
        width: 202,//mm
        height: 333,//mm 
        file: "sketch-book/IMG_3994.jpg",
    },
    page_2: {
        page: 2,
        hex: "#0090ee",
        width: 202,//mm
        height: 333,//mm 
        file: "sketch-book/IMG_3995.jpg",
    },

    page_3: {
        page: 2,
        hex: "#0090ee",
        width: 202,//mm
        height: 333,//mm 
        file: "sketch-book/IMG_3995.jpg",
    },
    page_4: {
        page: 2,
        hex: "#0090ee",
        width: 202,//mm
        height: 333,//mm 
        file: "sketch-book/IMG_3995.jpg",
    },
    page_5: {
        page: 2,
        hex: "#0090ee",
        width: 202,//mm
        height: 333,//mm 
        file: "sketch-book/IMG_3995.jpg",
    },
    page_6: {
        page: 2,
        hex: "#0090ee",
        width: 202,//mm
        height: 333,//mm 
        file: "sketch-book/IMG_3995.jpg",
    },
    page_7: {
        page: 2,
        hex: "#0090ee",
        width: 202,//mm
        height: 333,//mm 
        file: "sketch-book/IMG_3995.jpg",
    },
};

//FUNCTIONS

function createPath(id, c1ass, description, d, stroke_width, stroke, strokeOpacity) {

    let path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('id', id);
    path.setAttribute('class', c1ass);
    path.setAttribute('data-description', description);
    path.setAttribute('d', d);
    path.setAttribute('stroke-width', stroke_width);
    path.setAttribute('stroke', stroke);
    //todo add opacity to config
    path.setAttribute('stroke-opacity', '0.44');//ranges from 0 (completely transparent) to 1 (completely opaque)

    path.setAttribute('fill', 'none');
    //path.setAttribute('stroke-dasharray', "5 5 31");
    //path.setAttribute('opacity', 1);
    //path.setAttribute('fill-opacity', 1);

    return path;

}

function createRectangle(id, c1ass, x, y, width, height, fill) {

    let rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rect.setAttribute('id', id);
    rect.setAttribute('class', c1ass);
    rect.setAttribute('x', x);
    rect.setAttribute('y', y);
    rect.setAttribute('width', width);
    rect.setAttribute('height', height);
    rect.setAttribute('fill', fill);
    // Additional attributes can be added as needed

    return rect;
}




// Event Listeners
document.addEventListener('keydown', function (event) {
    const keyPressed = event.key.toLowerCase(); // Convert the typed key to lowercase for case-insensitive comparison
    //console.log("The " + keyPressed + " key was pressed..");
    handleKeyPress(keyPressed);
});

// Function to handle key presses
function handleKeyPress(key) {
    const functionName = `_${key}`;
    if (typeof window[functionName] === 'function') {
        let sharpie = getSharpie(key);
        $("#" + key).attr('stroke', sharpie.hex).attr('stroke-width', sharpie.nib).attr('data-colour', sharpie.color);
        window[functionName](key);

    } else {
        //console.log(`No '${functionName}' function found for the '${key}'. key`);
    }
}

function getSharpie(key) {
    //  % 23 
    let index = (key.charCodeAt() + sharpies.length) % sharpies.length;
    return sharpies[index];
}

function nCommas(str, n) {
    const regex = new RegExp('^([^,]*,){' + n + '}[^,]*$');
    return regex.test(str);
}

function copyArray(arr) {
    return JSON.parse(JSON.stringify(arr));
}

function getRandomItem(array) {
    // Generate a random index
    let randomIndex = Math.floor(Math.random() * array.length);

    // Return the random item
    return array[randomIndex];
}

$(document).ready(function () {
    //let imageURL = 'images/sketch-book/IMG_' + imageName + '_crop.jpg';
    //$('body').css('background-image', 'url(' + imageURL + ')');
});



document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        const svgData = $('svg')[0].outerHTML; // Select the first SVG element in the DOM
        console.log(svgData);
        const svgBlob = new Blob([svgData], { type: 'image/svg+xml' });
        const svgURL = window.URL.createObjectURL(svgBlob);
        const downloadLink = document.createElement('a');
        downloadLink.href = svgURL;
        downloadLink.download = `${Date.now()}.svg`; // Setting the filename to the current epoch time
        downloadLink.click();
        window.URL.revokeObjectURL(svgURL);
    }
});


