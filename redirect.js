const urlParams = new URLSearchParams(window.location.search);
const defaultParams = {
    'historyVw':0.05,
    'drawingVw':getDrawingVw(),
    'charcterVw': getcharcterVw(),
    'historyPaths':getHistoryPaths(),
    'imageName': getBackgroundImage(),
    'pathLength': getPathLength(),
    'string': getCharacters(),
    'processHistory': ["fast", "animate", "no"][0],
    'historyConfig': getHistoryConfig(),
    //'colours': getSvgNamedColours('64.33.121.11.28.115.44'),
    'bgcolours': getSvgNamedColours(),
    'colours': getSvgNamedColours(),
};



function randomInteger(min, max) {
    let integer = Math.floor(Math.random() * (max - min + 1)) + min;
    return integer;
}

function getDrawingVw(default_drawingVw) {
    if (default_drawingVw) {
        return default_drawingVw;
    } else {

        let min = 0.05;
        let max = 0.15;
        let drawingVw = (Math.random() * (max - min) + min).toFixed(2);
        
        return drawingVw;
    }
}

function getHistoryPaths(defaultNumberOfPaths) {
    if (defaultNumberOfPaths || defaultNumberOfPaths === 0) {
        return defaultNumberOfPaths;
    } else {
        let defaultNumberOfPaths = randomInteger(2, 10);
        return defaultNumberOfPaths;
    }
}

function getPathLength(default_pathLength) {
    if (default_pathLength) {
        return default_pathLength;
    } else {
        //return a random number between 1 and 1000
        let pathLength = randomInteger(10, 100);
        return pathLength;
    }
}



function getSvgNamedColours(default_colours) {


    if (default_colours) {
        return default_colours;
    }

    numOfNamedColours = svgNamedColors.length;
    //i need to get 15 random indexes from the array

    let colours = "";
    //random number of colours between 1 and 10;
    let numberOfColours = randomInteger(1, 10);
    for (let i = 0; i < numberOfColours; i++) {
        let randomIndex = randomInteger(0, numOfNamedColours - 1);
        colours += randomIndex;
        if (i < numberOfColours-1) {
            colours += ".";
        }
    }

    let bob = [
        "121.68.44",
        "21.142.120.134.8.130.123.131.74.77",
        "146.58.102.99.40.77.19.46.118.74",
        "38.138.91.140.102",
        "97.90.140.143.46",
        "93.11.97.139.100.79.67",
        "120.44.98.34",
        "128.40.9.142.112.114",
        "59.46.35.147.116.53.51.41.122",
        "21.142.120.134.8.130.123.131.74.77",
        "114.52.121.37.88.106.101",
        "128.91.64.88.85.9",
        "88.106.139.26.34.126.43",
        "38.99.146.56.62.93.43.132.11.70",
        "116.89.123.122.81.19.76",
        "7.6.111.49.43.66.63",
        "91.39.138.23.94.72.123.113.36.92"
    ];
    

    return colours;
}



function getCharacters(default_characters) {
    if (default_characters) {
        return default_characters;
    } else {
        //return a string of 6 random numbers between 0 and 9 plucked from this string;
        let options = "asdfghjkl";

        let charceters = "";
        for (let i = 0; i < 10; i++) {
            let randomIndex = randomInteger(0, options.length - 1);
            charceters += options[randomIndex];
        }
        
        return charceters;

    }
}


function getcharcterVw(default_vw) {
    if (default_vw) {
        return default_vw;
    } else {
        //return a string of 6 random numbers between 0 and 9 plucked from this string;
        let options = "111111111222222223333333444444555556666777889";

        let vw = "";
        for (let i = 0; i < 6; i++) {
            let randomIndex = randomInteger(0, options.length - 1);
            vw += options[randomIndex];
        }
        
        return vw;

    }
}

function getBackgroundImage(default_image) {
    if (default_image) {
        return default_image;
    } else {

        //return a random image from this array
        let images = ['3995', '3996', '3997', '3998', '3999', '4001'];//'3994'
        let randomIndex = randomInteger(0, images.length - 1);
        let image = images[randomIndex];

        return image;

    }

}

function getHistoryConfig(default_config) {

    //if there is a value for default_config return it, else we have soem code to write
    if (default_config) {
        return default_config;
    } else {
        // I need to start the string with a random number between 1 and 100
        let config = "";
        let chunk = randomInteger(21, 91);
        //random number between 1 and chunk/5
        //use randomInteger function
        //let indexes = randomInteger(1, chunk / 5);
        let indexes = randomInteger(2, 12);


        if (indexes > chunk) {
            alert('The number of indexes must be less than the chunk size');
        }

        config = chunk + "-";

        for (let i = 0; i < indexes; i++) {
            //use randomInteger function
            config += randomInteger(0, chunk - 1);
            if (i < indexes - 1) {
                config += "-";
            }
        }

        return config;
    }
}


// Update URL parameters and redirect if necessary
updateURLParameters(defaultParams);


// Function to update URL parameters with default values and create variables
function updateURLParameters(defaultParams) {
    let shouldRedirect = false;

    // Iterate through existing parameters
    for (const [key, value] of urlParams) {
        // Check if the key is not in defaultParams
        if (!(key in defaultParams)) {
            // Remove unnecessary parameter
            urlParams.delete(key);
            shouldRedirect = true;
        } else {
            // Dynamically create variables with URL parameter values
            window[key] = value;
        }
    }

    // Iterate through defaultParams
    for (const key in defaultParams) {
        // Check if the key is not already in URL parameters
        if (!urlParams.has(key)) {
            // Add the key with its default value
            urlParams.set(key, defaultParams[key]);
            shouldRedirect = true;
        } else {
            // Dynamically create variables with URL parameter values

            window[key] = urlParams.get(key);
        }
    }

    // Redirect only if necessary
    if (shouldRedirect) {
        // Redirect to the updated URL
        window.location.href = window.location.pathname + '?' + urlParams.toString();
    }

    // Loop through the parameters and log key-value pairs
    urlParams.forEach((value, key) => {
        console.log(`${key}: ${value}`);
    });
}
