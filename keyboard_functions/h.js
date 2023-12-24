//template :-)
function _h(key) {    
    array = copyArray(mouseTrack);
    path = $("#"+key);
    d1 = path.attr('d'); 
    
    array.sort((a, b) => b[0] - a[0]);
    
    d2 = `M${array[0][0]},${array[0][1]} `;    
    for (let i = 1; i < array.length - 2; i += 3) {
        d2 += `C${array[i][0]},${array[i][1]} ${array[i + 1][0]},${array[i + 1][1]} ${array[i + 2][0]},${array[i + 2][1]} `;
    }

    path.attr('d',d1 + d2);       

}

