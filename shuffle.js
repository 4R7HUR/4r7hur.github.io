
// Function to split the array into chunks of size n
function chunkArray(array, n) {
    var chunks = [];
    var chunkSize = Math.ceil(array.length / n);
    for (var i = 0; i < array.length; i += chunkSize) {
        chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
}

// Splitting the original data into 10 chunks
var chunks = chunkArray(history_data, 10);

// Function to shuffle an array randomly
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

// Joining the chunks back together randomly
history_data = shuffledChunks.flat();

// Outputting the shuffled data

