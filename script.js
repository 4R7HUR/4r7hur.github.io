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
    
console.log(sketch_book);

let currentArrayIndex = 0; // Start with the first array
let coordinate_arrays = [];

let svg = $('svg');
let svg_width = svg.width();
let svg_height = svg.height();

svg.find('path').attr('opacity','1');
svg.find('g.lines path').attr('stroke',sharpie.thick.black);
svg.find('g#s path').attr('stroke',sharpie.thick.teal);
svg.find('g#b path').attr('stroke',sharpie.fine.gray);
svg.find('g#c path').attr('stroke',sharpie.thick.red);
svg.find('g#paper rect').attr('width',svg_width);
svg.find('g#paper rect').attr('height',svg_height);


let print = {};
print.width = 297//mm
print.height = 297//mm
print.thick_sharpie = 1//mm
print.thin_sharpie = 0.4//mm

let stroke_dasharray = '';

//functions
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//action!

thin_sharpie_px = (svg_width/print.width) * print.thin_sharpie
thick_sharpie_px = (svg_width/print.width) * print.thick_sharpie

svg.find('path').attr('stroke-width',thin_sharpie_px);
svg.find('g.linesss path, g.s path, g#c path').attr('stroke-width',thick_sharpie_px);

//Set random dasharray disabled..
svg.find('g.linessssssss path').each(function() {

  stroke_dasharray = '';
  
  stroke_dasharray += getRandom(10, 30) + ' ';//length
  stroke_dasharray += getRandom(10, 30) + ' ';//gap  
  stroke_dasharray += getRandom(10, 30) + ' ';//length
  stroke_dasharray += getRandom(10, 30) + ' ';//gap  
  //stroke_dasharray += getRandom(1, 30) + ' ';//length
  //stroke_dasharray += getRandom(1, 30) + ' ';//gap  
  
  console.log(stroke_dasharray);
  
  $(this).attr('stroke-dasharray', stroke_dasharray); // Set the stroke-dasharray for the current path
});

  

let paths = svg.find('.lines path');
let thirds = [];


paths.each(function(index) {coordinate_arrays.push([]);});


let d = '';



const createSwatch = (color, name, category) => {
    const swatch = document.createElement('span');
    swatch.style.display = 'inline-block';
    swatch.style.width = '3%';
    swatch.style.height = '33px';
    swatch.style.border = '1px solid black';
    swatch.style.backgroundColor = color;
    swatch.style.margin = '0 1px 1px 0';
    swatch.setAttribute('title', `${category} | ${name}`);

    return swatch;
};

const container = document.createElement('div');
container.className = "container";
const row = document.createElement('div');
row.className = "row";

for (const category in sharpie) {
    const colors = sharpie[category];
    for (const color in colors) {
        const swatch = createSwatch(colors[color], color, category);
        row.appendChild(swatch);
    }
}

container.appendChild(row);

const body = document.body;
const firstChild = body.firstChild;
//body.insertBefore(container, firstChild);


































document.addEventListener('keydown', function(event) {
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
	

