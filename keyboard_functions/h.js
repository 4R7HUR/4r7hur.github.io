//template :-)
function _h(key, coords_array) {    
    path = $("#"+key);
    d1 = path.attr('d'); 
    
    coords_array.sort((a, b) => b[0] - a[0]);
    
    d2 = `M${coords_array[0][0]},${coords_array[0][1]} `;    
    for (let i = 1; i < coords_array.length - 2; i += 3) {
        d2 += `C${coords_array[i][0]},${coords_array[i][1]} ${coords_array[i + 1][0]},${coords_array[i + 1][1]} ${coords_array[i + 2][0]},${coords_array[i + 2][1]} `;
    }

    path.attr('d',d1 + d2);   
    path.attr('id', '');    
    

}

