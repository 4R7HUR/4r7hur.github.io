$("#dynamicSvg").on("mousemove", trackMouse);

//trying the kids up
//top annd tail
//..
//...
//....
//.....



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
// Function to track mouse movement
function trackMouse(event) {

    if (initialCounter < 100) {
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
        newC = 'C' + C[pathIndex];
        oldD = myPath.attr('d');
        newD = oldD ? oldD + ' ' + newC : M[pathIndex] + newC;
        myPath.attr('d', newD.trim());
        C[pathIndex] = '';

        if (counter > 200) {
            counter = 3;
            M.fill('M' + xy);
            C = [[], [], []];
            $("#dynamicSvg path.drawing:lt(3)").removeClass('drawing');
        }

    }

    counter++;
    mouseTrack.push([x, y]);
}



