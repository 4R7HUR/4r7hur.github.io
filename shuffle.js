
// Function to split the array into chunks of size n
function chunkArray(array, n) {
    var chunks = [];
    var chunkSize = Math.ceil(array.length / n);
    for (var i = 0; i < array.length; i += chunkSize) {
        chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
}

// Splitting the original data into chunks of 100

var chunks = chunkArray(history_data, 100);

function shuffleArray(array) {

    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

// Shuffle the order of the chunks
var shuffledChunks = shuffleArray(chunks);

shuffledChunks.forEach((chunk, index) => {
    this_chunk_x = chunk[chunk.length-1].split(',')[0];
    
    // Check if next chunk exists before accessing it
    if (index < shuffledChunks.length - 1) {
        next_chunk_y = shuffledChunks[index+1][0].split(',')[1];
        shuffledChunks[index].push(this_chunk_x + ',' + next_chunk_y);
        shuffledChunks[index].push(this_chunk_x + ',' + next_chunk_y);
        shuffledChunks[index].push(this_chunk_x + ',' + next_chunk_y);
    }
});





// Joining the chunks back together randomly
history_data = shuffledChunks.flat();

// Outputting the shuffled data

