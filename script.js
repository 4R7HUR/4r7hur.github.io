//Add svg to DOM
const dynamicSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
dynamicSvg.setAttribute("id", "dynamicSvg");
document.body.prepend(dynamicSvg);

const path_names = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g','h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
    's', 't', 'u', 'v', 'w', 'x','y','z',1, 2, 3, 4, 5, 6, 7, 8, 9
];

path_names.forEach((element, index) => {
    p = createPath(element,element,'',1,'#000');
    dynamicSvg.appendChild(p);
    p = createPath('drawing_' + index,'drawing','',1,'#000');
    dynamicSvg.appendChild(p);
});


let dynamicSvgWidth = $("#dynamicSvg").width();
let dynamicSvgHeight = $("#dynamicSvg").height();

//variables

const sharpie = {
    fine: {
        baby_blue: "#0090ee",
        black: "#020207",
        blue: "#230094",
        blue_green: "#00875a",
        hot_pink: "#ff00ce",
        karki: "#5b8e2b",
        light_blue: "#458bd7",
        dirty_pink: "#890082",
        orange: "#cf7c27",
        pink: "#ff00ce",
        purple: "#480093",
        yellow: "#d3cd20",
    },
    thick: {
        black: "#05060a",
        blue1: "#4b95e3",
        blue2: "#0071e2",
        blue3: "#0071e2",
        brown: "#311512",
        gray: "#546078",
        green: "#009154",
        leaf: "#6ec43a",
        light_pink: "#ffdefb",
        light_purple: "#7753db",
        mouve: "#b00081",
        orange: "#dd8836",
        pink: "#f382de",
        purple: "#440067",
        red: "#d2001a",
        red2: "#de0012",
        teal: "#005993",
        yellow: "#ddac04",
    }
};

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
    console.log(functionName);
    if (typeof window[functionName] === 'function') {
        window[functionName](key);
    } else {
        console.log(`No '${functionName}' function found for the '${key}'. key`);
    }
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


