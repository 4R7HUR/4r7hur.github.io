//Add svg to DOM
const dynamicSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
dynamicSvg.setAttribute("id", "dynamicSvg");
//dynamicSvg.setAttribute("opacity", "0.5");

document.body.prepend(dynamicSvg);

const path_names = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g','h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
    's', 't', 'u', 'v', 'w', 'x','y','z',1, 2, 3, 4, 5, 6, 7, 8, 9
];

path_names.forEach((element, index) => {
    p = createPath(element,element,'',1,'#000');
    dynamicSvg.appendChild(p);
    p = createPath('drawing_' + index,'drawing','','0.05vw','#000');
    dynamicSvg.appendChild(p);
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

function createPath(id,c1ass,d,stroke_width,stroke){

    let path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('id', id);
    path.setAttribute('class', c1ass);
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
        window[functionName](key);
        let sharpie = getSharpie(key);
        $("#" + key).attr('stroke', sharpie.hex).attr('stroke-width', sharpie.nib).attr('data-colour', sharpie.color);    
    } else {
        console.log(`No '${functionName}' function found for the '${key}'. key`);
    }
}

function getSharpie(key){
    //  % 23 
    let index =  (key.charCodeAt() + sharpies.length) % sharpies.length;    
    return sharpies[index];
} 

function nCommas(str, n) {
    const regex = new RegExp('^([^,]*,){' + n + '}[^,]*$');
    return regex.test(str);
}

function copyArray(arr) {
    return JSON.parse(JSON.stringify(arr));
  }




























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


