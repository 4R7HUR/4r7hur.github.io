const urlParams = new URLSearchParams(window.location.search);
const defaultParams = {
    'imageName': 'random',
    'pathLength': 10,
    'paths': 10,
    'string': 'asdfghjkl',
    'drawing': '0.045vw',
    'extras': '0.045vw',
    'processHistory': ["fast","animate","no"][0],
    'historyConfig': getHistoryConfig(),
    //a comma separated list of 15 random hex codes
    'hex' : '0BFAF6,30A6DB,2D07FA,EF7717,FFCD38,C70039,F3722C,0000FF,3D9970,39CCCC,FF851B,85144b,FF4136,FFDC00,B10DC9',
};

function getHistoryConfig(default_config){

    //if there is a value for default_config return it, else we have soem code to write
    if(default_config){
    return default_config;
    }else{
        // I need to start the string with a random number between 1 and 100
        let config = "";
        let min = 0;
        let max = 100;
        let indexes = 6;
        //chunk needs to be a random number between 1 and 100
        let chunk = Math.floor(Math.random() * (max - min + 1)) + min;   
        chunk = 100;
        
        config = chunk + "-";
        //I need to add indexes based on the value of chunk, so if chunk is 100, I need to add 0-99
        //so if indexes is 6 then an eaxmple might be 100-3-6-7-8-77-88
        
        for (let i = 0; i < indexes; i++) {
            config += Math.floor(Math.random() * (max - min + 1)) + min;
            if(i < indexes - 1){
                config += "-";
            }
        }
        //based on the variables please show me a example string
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
