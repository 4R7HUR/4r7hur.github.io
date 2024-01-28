

const dynamicSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
dynamicSvg.setAttribute("id", "dynamicSvg");

const groupComplete = document.createElementNS('http://www.w3.org/2000/svg', 'g');
groupComplete.setAttribute("id", "complete");
dynamicSvg.prepend(groupComplete);

document.body.prepend(dynamicSvg);


const path_names = [
    { 'character': 'a', 'description': 'small circles' },
    { 'character': 'b', 'description': 'TBC' },
    { 'character': 'c', 'description': 'TBC' },
    { 'character': 'd', 'description': 'horizontal outside' },
    { 'character': 'e', 'description': 'TBC' },
    { 'character': 'f', 'description': 'vertcial rough colouring' },
    { 'character': 'g', 'description': 'horizontal rough colouring' },
    { 'character': 'h', 'description': 'frantic curves' },
    { 'character': 'i', 'description': 'TBC' },
    { 'character': 'j', 'description': 'vertical outside' },
    { 'character': 'k', 'description': 'squares' },//last one on the middle row :-)
    { 'character': 'l', 'description': 'spirals' },
    { 'character': 'm', 'description': 'TBC' },
    { 'character': 'n', 'description': 'TBC' },
    { 'character': 'o', 'description': 'TBC' },
    { 'character': 'p', 'description': 'TBC' },
    { 'character': 'q', 'description': 'TBC' },
    { 'character': 'r', 'description': 'TBC' },
    { 'character': 's', 'description': 'medium circles' },
    { 'character': 't', 'description': 'TBC' },
    { 'character': 'u', 'description': 'TBC' },
    { 'character': 'v', 'description': 'TBC' },
    { 'character': 'w', 'description': 'TBC' },
    { 'character': 'x', 'description': 'TBC' },
    { 'character': 'y', 'description': 'TBC' },
    { 'character': 'z', 'description': 'TBC' },
    { 'character': '1', 'description': 'TBC' },
    { 'character': '2', 'description': 'TBC' },
    { 'character': '3', 'description': 'TBC' },
    { 'character': '4', 'description': 'TBC' },
    { 'character': '5', 'description': 'TBC' },
    { 'character': '6', 'description': 'TBC' },
    { 'character': '7', 'description': 'TBC' },
    { 'character': '8', 'description': 'TBC' },
    { 'character': '9', 'description': 'TBC' }
    // Add or modify descriptions as needed for each character
];

// Create a new array based on the characters in the input string
const orderedPathNames = Array.from(new Set(string)).map(char => {
    const foundItem = path_names.find(item => item.character === char);
    return foundItem ? { ...foundItem } : null;
}).filter(item => item !== null);

//console.log(orderedPathNames);


let id_counter = 1;
orderedPathNames.forEach((element, index) => {

    const character = element.character;
    const description = element.description;

    if(description !== 'TBC'){
        /**/
        const path1 = createPath('drawing_' + (index + id_counter), 'drawing', 'description', '', '0.05vw', '#000');
        //dynamicSvg.appendChild(path1);
        id_counter++;
    
        const path2 = createPath('drawing_' + (index + id_counter), 'drawing', 'description', '', '0.05vw', '#000');
        //dynamicSvg.appendChild(path2);
        id_counter++;
        
        const path3 = createPath('drawing_' + (index + id_counter), 'drawing', 'description', '', '0.05vw', '#000');
        //dynamicSvg.appendChild(path3);
        id_counter++;
        
        const path4 = createPath(character, character, description, '', 1, '#000');
        //dynamicSvg.appendChild(path4);        

    }   


});






let dynamicSvgWidth = $("#dynamicSvg").width();
let dynamicSvgHeight = $("#dynamicSvg").height();

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
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createPath(id, c1ass, description, d, stroke_width, stroke) {

    let path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('id', id);
    path.setAttribute('class', c1ass);
    path.setAttribute('data-description', description);
    path.setAttribute('d', d);
    path.setAttribute('stroke-width', stroke_width);
    path.setAttribute('stroke', stroke);

    path.setAttribute('fill', 'none');
    //path.setAttribute('stroke-dasharray', "none");
    //path.setAttribute('opacity', 1);
    //path.setAttribute('fill-opacity', 1);

    return path;

}



// Event Listeners
document.addEventListener('keydown', function (event) {
    const keyPressed = event.key.toLowerCase(); // Convert the typed key to lowercase for case-insensitive comparison
    console.log("The " + keyPressed + " key was pressed..");
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
        console.log(`No '${functionName}' function found for the '${key}'. key`);
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
    var imageName = urlParams.get('imageName');
    let imageNames = ['3994', '3995', '3996', '3997', '3998', '3999', '4001'];
    imageName = (imageName && imageNames.indexOf(imageName) !== -1) ? imageName : getRandomItem(imageNames);
    let imageURL = 'images/sketch-book/IMG_' + imageName + '_crop.jpg';
    $('body').css('background-image', 'url(' + imageURL + ')');
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


