const urlParams = new URLSearchParams(window.location.search);
const defaultParams = {
    'imageName': getBackgroundImage(),
    'pathLength': 10,
    'paths': 100,
    'string': getCharacters(),
    'vw': getVw(),
    'processHistory': ["fast", "animate", "no"][0],
    'historyConfig': getHistoryConfig(),
    //a comma separated list of 15 random hex codes
    'hex': '0BFAF6,30A6DB,2D07FA,EF7717,FFCD38,C70039,F3722C,0000FF,3D9970,39CCCC,FF851B,85144b,FF4136,FFDC00,B10DC9',
};



function getCharacters(default_characters) {
    if (default_characters) {
        return default_characters;
    } else {
        //return a string of 6 random numbers between 0 and 9 plucked from this string;
        let options = "asdfghjkl";

        let charceters = "";
        for (let i = 0; i < 10; i++) {
            let randomIndex = Math.floor(Math.random() * options.length);
            charceters += options[randomIndex];
        }
        
        return charceters;

    }
}


function getVw(default_vw) {
    if (default_vw) {
        return default_vw;
    } else {
        //return a string of 6 random numbers between 0 and 9 plucked from this string;
        let options = "1111122223334456789";

        let vw = "";
        for (let i = 0; i < 6; i++) {
            let randomIndex = Math.floor(Math.random() * options.length);
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
        let randomIndex = Math.floor(Math.random() * images.length);
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
        let indexes = 1;
        let chunk = 10;

        //generate a random number between 1 and 100
        chunk = Math.floor(Math.random() * 100) + 1;
        //generate a random number between 1 and a fith of chunk
        indexes = Math.floor(Math.random() * chunk / 5) + 1;


        if (indexes > chunk) {
            alert('The number of indexes must be less than the chunk size');
        }

        config = chunk + "-";

        for (let i = 0; i < indexes; i++) {
            config += Math.floor(Math.random() * chunk);
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
