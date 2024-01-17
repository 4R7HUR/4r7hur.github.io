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
let delay = 100
// Function to track mouse movement
function trackMouseOld(event) {

    if($("#dynamicSvg path.drawing").length === 0){
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
        
        if(myPath.hasClass('set')){
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
            letterPath.attr('d','');             

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
function trackMouse(event){

    xy = event.clientX + ',' + event.clientY + ' ';

    //add the 3 empty paths if they dont exist
    if($("#dynamicSvg path.active").length < snakes){
        //mature createPath function so it can take the svg as a parameter, then this can be one line :-)
        path = createPath('', 'active', 'description', '', '0.05vw', '#000');
        dynamicSvg.appendChild(path);
    }

    if(countMovment < 100){
        eq = countMovment % snakes;        
        myPath = $("#dynamicSvg path.active").eq(eq);       

        if( ! myPath.attr('d')){     
            xy = store[eq] ? store[eq] : xy;                         
            myPath.attr('d', 'M' + xy + ''); 
        }else{
            if(C_array.length === 3){                
                bezier = "C" + C_array.join('');  
                myPath.attr('d', myPath.attr('d') + bezier);                             
                C_array = [];          
                                
            }else{
                C_array.push(xy);
            }            
        }
        countMovment++;
        store[eq] = xy; 
    }else{
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