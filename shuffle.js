function chunkArray(array, n) {
    var chunks = [];
    var chunkSize = Math.ceil(array.length / n);
    for (var i = 0; i < array.length; i += chunkSize) {
        chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
}

function joinArrayWithKeys(array, keys) {
    var joinedArray = [];
    for (var i = 0; i < keys.length; i++) {
        var keyIndex = keys[i];
        if (array[keyIndex]) {
            joinAtRightAngle = true;
            if(joinAtRightAngle){
                if (i > 1 && i < keys.length - 1) {               
                    last_x = joinedArray[joinedArray.length-1].split(",")[0];
                    next_y = array[keyIndex][0].split(",")[1];
                    joinedArray.push(last_x + ',' + next_y);
                }
            }         

            joinedArray = joinedArray.concat(array[keyIndex]);


        }
    }
    return joinedArray;
}



historyConfig = historyConfig.split("-");

var chunks = parseInt(historyConfig[0]); // Extracting the first item as an integer
var keys = historyConfig.slice(1).map(Number); // Extracting everything except the first item and converting to numbers

// Splitting the original data into chunks of 100
var chunkedArray = chunkArray(history_data, chunks);

// Joining the chunks back together with keys
var joinedArray = joinArrayWithKeys(chunkedArray, keys);


history_data = joinedArray;