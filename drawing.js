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


// Function to track mouse movement
function trackMouseOld(event) {

    if ($("#dynamicSvg path.drawing").length === 0) {
        //loop again?
        //$("#dynamicSvg path.set").addClass('drawing');
        $("svg").css('cursor', 'auto');
        return;
    }

    if (initialCounter < delay) {

        if (initialCounter === delay - 20) {
            $("svg").css('cursor', 'crosshair');
        }


        initialCounter++;
        return; // Do nothing until initialCounter reaches 10
    }

    x = event.clientX;
    y = event.clientY;

    x = Math.round(x / rounding) * rounding;
    y = Math.round(y / rounding) * rounding;

    xy = x + ',' + y + ' ';
    pathIndex = counter % 3;

    if (counter <= 2) {
        M[pathIndex] = 'M' + xy;
    }

    C[pathIndex] += xy;

    if (nCommas(C[pathIndex], 3)) {
        myPath = $("#dynamicSvg path.drawing").eq(pathIndex);

        if (myPath.hasClass('set')) {
            myPath.removeClass('set');
            myPath.attr('d', '');
        }

        newC = 'C' + C[pathIndex];
        oldD = myPath.attr('d');
        newD = oldD ? oldD + ' ' + newC : M[pathIndex] + newC;
        myPath.attr('d', newD.trim());
        C[pathIndex] = '';

        if (counter > pathSize) {
            counter = 3;
            M.fill('M' + xy);
            C = [[], [], []];

            $("#dynamicSvg path.drawing:lt(3)").removeClass('drawing').addClass('set');

            let letterPath = $("#dynamicSvg path.drawing:lt(3)").eq(2).next('path');
            let className = letterPath.attr('class');
            letterPath.attr('d', '');

            if (typeof window['_' + className] === 'function') {
                window['_' + className](className);
            } else {
                console.log('_' + className + " Function does not exist or is not callable");
            }

            mouseTrack = [];


        }
    }

    counter++;
    mouseTrack.push([x, y]);
}

let countMovment = 0;
let xy = '';
let C_array = [];
let bezier = '';
let snakes = 3;//needs to be odd
let store = [];
let eq = 0;
function trackMouseOld2(event) {

    xy = event.clientX + ',' + event.clientY + ' ';

    //add the 3 empty paths if they dont exist
    if ($("#dynamicSvg path.active").length < snakes) {
        //mature createPath function so it can take the svg as a parameter, then this can be one line :-)
        path = createPath('', 'active', 'description', '', '0.05vw', '#000');
        dynamicSvg.appendChild(path);
    }

    if (countMovment < 100) {
        eq = countMovment % snakes;
        myPath = $("#dynamicSvg path.active").eq(eq);

        if (!myPath.attr('d')) {
            xy = store[eq] ? store[eq] : xy;
            myPath.attr('d', 'M' + xy + '');
        } else {
            if (C_array.length === 3) {
                bezier = "C" + C_array.join('');
                myPath.attr('d', myPath.attr('d') + bezier);
                C_array = [];

            } else {
                C_array.push(xy);
            }
        }
        countMovment++;
        store[eq] = xy;
    } else {
        countMovment = 0;
        C_array = [];


        //TBC!!!
        pathString = $("#dynamicSvg path.active").eq(0).attr('d');
        console.log(parseSVGPathData(pathString));
        ////

        $("#dynamicSvg path.active").removeClass('active');
    }

}
function parseSVGPathData(pathString) {
    const regex = /(\d+(\.\d+)?),(\d+(\.\d+)?)/g;
    const matches = pathString.matchAll(regex);
    const coordinates = Array.from(matches, match => [parseFloat(match[1]), parseFloat(match[3])]);
    return coordinates;
}

let ddd = [[], [], []];
let CCC = [[], [], []];//Home for the coordinates that form the beizer curves.
let character = '';
let stringTemp = string;

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


    //Add some random movement to the mouse.
    CCC.forEach(function (element, index) {
        max = 3;
        min = max * -1;
        xy = (event.clientX + randomInteger(min, max)) + ',' + (event.clientY + randomInteger(min, max));
        CCC[index].push(xy);
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