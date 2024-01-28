$("#dynamicSvg").on("mousemove", trackMouse);


let mouseTrack = [];
let counter = 0;
let pathIndex = 0;
let M = [];
let C = [[], [], []];
let x;
let y;
let rounding = 2;
let block = false;
let initialCounter = 0;
let delay = 100;



let ddd = [[], [], []];
let CCC = [[], [], []];//Home for the coordinates that form the beizer curves.
let character = '';
let stringTemp = string;
let history = [];

function trackMouse(event) {

    if(stringTemp.length === 0){
        stringTemp = string;
    }


    if ($("#dynamicSvg path.active").length < 3) {
        path = createPath('', 'active', 'description', '', '0.05vw', '#000');
        dynamicSvg.appendChild(path);
        dynamicSvg.appendChild(path);
        dynamicSvg.appendChild(path);
    }

    xy = event.clientX + ',' + event.clientY;

    if (ddd[0].length === 0) {
        ddd[0] = 'M' + xy;
        return;
    } else if (ddd[1].length === 0) {
        CCC[0].push(xy);
        ddd[1] = 'M' + xy;
        return;
    } else if (ddd[2].length === 0) {
        CCC[0].push(xy);
        CCC[1].push(xy);
        ddd[2] = 'M' + xy;
        return;
    }


    
    //add coords to each of the CCC arrays
    CCC.forEach(function (element, index) {
        max = 3;
        min = max * -1;
        //Add some random movement to the mouse.
        xy = (event.clientX + randomInteger(min, max)) + ',' + (event.clientY + randomInteger(min, max));
        //xy = event.clientX + ',' + event.clientY;
        CCC[index].push(xy);
        history.push(xy);
        if (history.length === 1000) {
            downloadHistory(history, 'javascript');
            history = [];
        }        

    });
    
    

    CCC.forEach(function (element, index) {

        if (CCC[index].length / 3 === 1) {
            ddd[index] += ' C' + CCC[index].join(' ');
            CCC[index] = [];
            $("#dynamicSvg path.active").eq(index).attr('d', ddd[index]);
        }

    });

    CCC.forEach(function (element, index) {
        //Test if its time to start a new path based on the length of this ddd index
        if (countCommas(ddd[index]) > pathSize) {

            
            newPath = createPath('', 'complete', 'drawing', '', '0.05vw', '#000');
            newPath.setAttribute("d", ddd[index]);
            groupComplete.appendChild(newPath);

            if ($("#dynamicSvg g path.complete").length > string.length * 3) {                    
                $("#dynamicSvg g path.complete").eq(0).remove();
            }


            if (index === 0) {    
                
                character = stringTemp.charAt(0);
                stringTemp = stringTemp.slice(1);
                description = path_names_2[character].description;
            
                //create a new path [into the end of the group] and then apply a character function to it
                newPath = createPath(character, character + ' bob', description, '', '0.05vw', '#000');
                groupComplete.appendChild(newPath);
                coords_array = parseSVGPath(ddd[index]);


                if (typeof window['_' + character] === 'function') {                    
                    window['_' + character](character, coords_array);
                } else {
                    // Handle the case where the function is not defined
                    console.log("Function not found for character:", character);
                }   

                if ($("#dynamicSvg g path.bob").length > string.length) {                    
                    $("#dynamicSvg g path.bob").eq(0).remove();
                }

            }




            //Reset the active path
            $("#dynamicSvg path.active").eq(index).attr('d', '');
            //provide the last coordiate as the move to position
            ddd[index] = 'M' + xy;
            CCC[index] = [];

        }

    });




}

function countCommas(inputString) {
    const commaMatches = inputString.match(/,/g);
    return commaMatches ? commaMatches.length : 0;
}
function parseSVGPath(svgPath) {
    const values = svgPath.match(/[+-]?\d+(\.\d+)?/g).map(Number);
    const result = [];

    for (let i = 0; i < values.length; i += 2) {
        result.push([values[i], values[i + 1]]);
    }

    return result;
}
function randomInteger(min, max) {
    let integer = Math.floor(Math.random() * (max - min + 1)) + min;
    return integer;
}



function downloadHistory(data, fileType) {
    var timestamp = new Date().getTime();
    var filename = "history_" + timestamp + "." + fileType;
    var content = JSON.stringify(data);
    var mimeType;
    
    switch(fileType.toLowerCase()) {
        case 'css':
            mimeType = 'text/css';
            break;
        case 'csv':
            mimeType = 'text/csv';
            break;
        case 'xml':
            mimeType = 'text/xml';
            break;
        case 'svg':
            mimeType = 'image/svg+xml';
            break;
        case 'js':
        default:
            mimeType = 'text/javascript';
    }
    
    var blob = new Blob([content], { type: mimeType });
    var url = URL.createObjectURL(blob);
    
    var a = document.createElement('a');
    a.href = url;
    a.download = filename;
    
    document.body.appendChild(a);
    a.click();
    
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}
