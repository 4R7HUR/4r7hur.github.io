const urlParams = new URLSearchParams(window.location.search);
const defaultParams = {
    'historyConfig': getHistoryConfig(),
    'historyPx': 0.3,
    'drawingPx': getDrawingPx('3'),
    'charcterPx': getCharcterPx(),
    'historyPaths': getHistoryPaths(7),
    //'imageName': getBackgroundImage(),
    'pathLength': getPathLength(),
    'string': getCharacters('aads'),
    'processHistory': ["fast", "animate", "no"][0],
    'paperColour': getPaperColour('lightgrey'),
    'historyColours': gethistoryColours('133'),
    'colours': getColours('7.45.69.79.78.97.146.96'),
    'characterStrokeOpacity': getCharacterStrokeOpacity('999999'),
}

const defaultParamsB = {
    'historyConfig': getHistoryConfig(),
    'historyPx': randomInteger(2, 8)/10,
    'drawingPx': getDrawingPx(),
    'charcterPx': getCharcterPx(),
    'historyPaths': getHistoryPaths(5),
    //'imageName': getBackgroundImage(),
    'pathLength': getPathLength(),
    'string': getCharacters(),
    'processHistory': ["fast", "animate", "no"][0],
    'paperColour': getPaperColour(getRandomItem(['darkslategray','lightslategray','slategray', 'gray', 'aliceblue','gainsboro','lightsteelblue','honeydew'])),
    'historyColours': gethistoryColours(getRandomItem(['77.52.131.25.13','0.6.41.88.85.142.131','57.137.57.87.88.19.117.85','63.78.86.72.79.23.127.109.11.77'])),
    'colours': getColours(getRandomItem(['22.50.58.61.36.66.56','30.96.46.37.139.109.145','120.135.17.16.63.95.5','34.126.73.86.61.127.52','105.57.51.64.38.32.37.136','130.45.66.2.120.18.52','70.105.61.110.88.99.136','5.100.27.6.113.119.107'])),
    'characterStrokeOpacity': getCharacterStrokeOpacity(),
};




function randomInteger(min, max) {
    let integer = Math.floor(Math.random() * (max - min + 1)) + min;
    return integer;
}

function getRandomItem(array) {
    // Generate a random index
    let randomIndex = Math.floor(Math.random() * array.length);

    // Return the random item
    return array[randomIndex];
}

function getDrawingPx(default_drawingPx) {
    if (default_drawingPx) {
        return default_drawingPx;
    } else {

        let drawingPx = randomInteger(2, 4);
        return drawingPx;
    }
}

function getHistoryPaths(defaultNumberOfPaths) {
    if (defaultNumberOfPaths || defaultNumberOfPaths === 0) {
        return defaultNumberOfPaths;
    } else {
        let defaultNumberOfPaths = randomInteger(5, 10);
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

function getPaperColour(default_paperColour) {

    if (default_paperColour) {
        return default_paperColour;
    }

    if (getCookie('paperColour') && getCookie('paperColour').length > 10) {
        return getRandomItem(getCookie('paperColour'));
    } else {
        return getRandomItem(svgNamedColors);
    }

}




function gethistoryColours(defaultNamedColours) {

    if (defaultNamedColours) {
        return defaultNamedColours;
    }



    if (getCookie('historyColours') && getCookie('historyColours').length > 20) {
        return getRandomItem(getCookie('historyColours'));
    } else {

        if (defaultNamedColours) {
            return defaultNamedColours;
        }
    
        let numberOfColours = randomInteger(3, 10);
        let numOfNamedColours = svgNamedColors.length;

        let colours = "";

        for (let i = 0; i < numberOfColours; i++) {
            let randomIndex = randomInteger(0, numOfNamedColours - 1);
            colours += randomIndex;
            if (i < numberOfColours - 1) {
                colours += ".";
            }
        }


        return colours;
    }


}
function getColours(defaultColours) {

    if (getCookie('colours') && getCookie('colours').length > 20) {
        return getRandomItem(getCookie('colours'));
    } else {

        if (defaultColours) {
            return defaultColours;
        }
    
        let numberOfColours = randomInteger(6, 7);
        let numOfNamedColours = svgNamedColors.length;

        let colours = "";

        for (let i = 0; i < numberOfColours; i++) {
            let randomIndex = randomInteger(0, numOfNamedColours - 1);
            colours += randomIndex;
            if (i < numberOfColours - 1) {
                colours += ".";
            }
        }


        return colours;
    }


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


function getCharcterPx(charcterPx) {
    if (charcterPx) {
        return charcterPx;
    } else {
        //return a string of 6 random numbers between 0 and 9 plucked from this string;
        let options = "111111111222222223333333444444555556666777889";
        //options = "159";

        let px = "";
        for (let i = 0; i < 6; i++) {
            let randomIndex = randomInteger(0, options.length - 1);
            px += options[randomIndex];
        }

        return px;

    }
}


function getCharacterStrokeOpacity(defaultCharacterStrokeOpacity) {
    if (defaultCharacterStrokeOpacity) {
        return defaultCharacterStrokeOpacity;
    } else {
        let options = "9999999999999999999654321";

        let strokeOpacity = "";
        for (let i = 0; i < 6; i++) {
            let randomIndex = randomInteger(0, options.length - 1);
            strokeOpacity += options[randomIndex];
        }

        return strokeOpacity;

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

    //66-9-45-65-0   


    if (default_config) {
        return default_config;
    } else {
        let config = "";
        let chunks = getRandomItem([80,160,320]);//the number of chunks we split the history into
        //chunks = getRandomItem([60, 65, 70]);//the number of chunks we split the history into
        let chunksDenominator = getRandomItem([4,8,16,32,64]);//the number we divide the chunks by to get the chunksUsed
        //chunksDenominator = getRandomItem([6]);//the number we divide the chunks by to get the chunksUsed

        let chunksUsed = parseInt(chunks / chunksDenominator);

        config = chunks + "-";

        for (let i = 0; i < chunksUsed; i++) {
            //use randomInteger function
            config += randomInteger(0, chunks - 1);
            if (i < chunksUsed - 1) {
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


// Function to read a cookie by name
function getCookie(name) {
    const cookieString = decodeURIComponent(document.cookie);
    const cookies = cookieString.split('; ');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i];
        const [cookieName, cookieValue] = cookie.split('=');
        if (cookieName === name) {
            try {
                return JSON.parse(cookieValue);
            } catch (error) {
                return cookieValue;
            }
        }
    }
    return null;
}

// Function to set a cookie with a name, value, and optional expiration date
function setCookie(name, value, daysToExpire) {
    let cookieValue = (typeof value === 'object') ? JSON.stringify(value) : value;
    let cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(cookieValue)}`;
    if (daysToExpire) {
        const expirationDate = new Date();
        expirationDate.setTime(expirationDate.getTime() + (daysToExpire * 24 * 60 * 60 * 1000));
        cookieString += `; expires=${expirationDate.toUTCString()}`;
    }

    // Set the entire cookie string
    document.cookie = cookieString;
}



// AI!
$(document).ready(function () {
    $("#like").click(function () {
        // Trigger the like function
        likeFunction();
    });

    $("#dislike").click(function () {
        // Trigger the dislike function
        dislikeFunction();
    });



});

function likeFunction() {

    // Loop through each key-value pair in urlParams
    for (const [key, value] of urlParams) {
        // Retrieve existing cookie value for the key
        let cookie = getCookie(key);
        let updatedCookie = [];
        // If the cookie value exists and is an array, assign it to updatedCookie
        if (Array.isArray(cookie)) {
            updatedCookie = cookie;
        }
        // If the cookie value exists but is not an array, convert it into an array
        else if (cookie) {
            updatedCookie = [cookie];
        }
        // Push the new value into updatedCookie array
        updatedCookie.push(value);
        // Set the updated cookie value
        setCookie(key, updatedCookie, 1);
    }
    // Redirect to the current page without query parameters
    window.location.href = window.location.href.split('?')[0];
}





function dislikeFunction() {
    // Add your dislike functionality here
    window.location.href = window.location.href.split('?')[0];
}

