


let ddd = [[], [], []];
let CCC = [[], [], []];//Home for the coordinates that form the beizer curves.
let character = '';
let stringTemp = string;
let coloursTemp = colours.split('.');
let vwTemp = vw;
let history = [];

$("#dynamicSvg").on("mousemove", trackMouse);

$(function () {
        

    if((processHistory === "fast" || processHistory === "animate") && history_selection_data.length > 0){
        
        processHistoryData(history_selection_data, processHistory);
    }

});

function trackMouse(event) {    

    if(event.type === 'mousemove' && parseInt(processHistory) !== "no"){
        return;
    }


    if(stringTemp.length === 0){
        stringTemp = string;
    }

    if(coloursTemp.length === 0){
        coloursTemp = colours.split('.');
    }

    if(vwTemp.length === 0){
        vwTemp = vw;
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
        max = 0;
        min = max * -1;
        //Add some random movement to the mouse.
        //xy = (event.clientX + randomInteger(min, max)) + ',' + (event.clientY + randomInteger(min, max));
        xy = event.clientX + ',' + event.clientY;
        CCC[index].push(xy);      

    });

    //100000 = 1MB
    //history.push(xy);
    if (history.length === 100000) {
        downloadHistory(history, 'js');
        history = [];
    }    
    

    CCC.forEach(function (element, index) {

        if (CCC[index].length / 3 === 1) {
            ddd[index] += ' C' + CCC[index].join(' ');
            CCC[index] = [];
            $("#dynamicSvg path.active").eq(index).attr('d', ddd[index]);
        }

    });

    CCC.forEach(function (element, index) {
        //Test if its time to start a new path based on the length of this ddd index
        if (countCommas(ddd[index]) > pathLength) {
            
            newPath = createPath('', 'complete', 'drawing', '', drawingVw, '#000');
            newPath.setAttribute("d", ddd[index]);
            groupComplete.appendChild(newPath);

            //if ($("#dynamicSvg g path.complete").length > paths * 3) {                    
                //$("#dynamicSvg g path.complete").eq(0).remove();
            //}


            if (index === 0) {                                  
                
                character = stringTemp.charAt(0);
                stringTemp = stringTemp.slice(1);

                let temp = parseFloat(vwTemp.charAt(0));
                temp = temp * temp;
                let strokeWidth = (temp * 0.01) + 'vw'
                vwTemp = vwTemp.slice(1);

                description = 'character path';

                thisColour = coloursTemp.shift();
                thisColour = svgNamedColors[thisColour]
            
                //create a new path [into the end of the group] and then apply a character function to it
                newPath = createPath(character, character + ' character-path', description, '', strokeWidth, thisColour);
                groupComplete.appendChild(newPath);
                coords_array = parseSVGPath(ddd[index]);


                if (typeof window['_' + character] === 'function') {                    
                    window['_' + character](character, coords_array);
                } else {
                    // Handle the case where the function is not defined
                    console.log("Function not found for character:", character);
                }   

                //if ($("#dynamicSvg g path.character-path").length > paths) {                    
                    //$("#dynamicSvg g path.character-path").eq(0).remove();
                //}

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



function downloadHistory(data, fileType) {
    var timestamp = new Date().getTime();
    var id = "history_" + timestamp;
    var filename = id + "." + fileType;
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
            content = 'history_data = ' + content + '; console.log("history_data.length: " + history_data.length);';
            filename = 'history.js';
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
function processHistoryData(dataArray, processHistory = 'animate') {
    let index = 0;

    if(processHistory === 'animate' ){
        const interval = setInterval(() => {
            if (index < dataArray.length) {
                coords = dataArray[index].split(',');
                
                trackMouse({clientX: coords[0], clientY: coords[1]})
                
                index++;
            } else {
                clearInterval(interval);
            }
        }, 10); // 1000 milliseconds = 1 second
    }else {
 
        //hide the svg so that the user does not see the drawing process and so that the paths are not added to the DOM
        $("#dynamicSvg p").hide();
        console.log('processHistory',processHistory);
        //return;
        dataArray.forEach(function (element, index) {
            coords = element.split(',');
            trackMouse({clientX: coords[0], clientY: coords[1]})
        });
        //show the svg again
        $("#dynamicSvg p").fadeIn(1000);
    }

}
