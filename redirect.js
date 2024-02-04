const urlParams = new URLSearchParams(window.location.search);
console.log(urlParams);
const defaultParams = {
    'imageName': 'random',
    'pathLength': 100,
    'paths': 10,
    'string': 'asdfghjkl',
    'drawing': '0.045vw',
    'extras': '0.045vw',
    'processHistory': 1,
    //a comma separated list of 15 random hex codes
    'hex' : '0BFAF6,30A6DB,2D07FA,EF7717,FFCD38,C70039,F3722C,0000FF,3D9970,39CCCC,FF851B,85144b,FF4136,FFDC00,B10DC9',
};



const path_names_2 = {
    'a': { 'description': 'small circles' },
    'b': { 'description': 'TBC' },
    'c': { 'description': 'TBC' },
    'd': { 'description': 'horizontal outside' },
    'e': { 'description': 'TBC' },
    'f': { 'description': 'vertcial rough colouring' },
    'g': { 'description': 'horizontal rough colouring' },
    'h': { 'description': 'frantic curves' },
    'i': { 'description': 'TBC' },
    'j': { 'description': 'vertical outside' },
    'k': { 'description': 'squares' }, // last one on the middle row :-)
    'l': { 'description': 'spirals' },
    'm': { 'description': 'TBC' },
    'n': { 'description': 'TBC' },
    'o': { 'description': 'TBC' },
    'p': { 'description': 'TBC' },
    'q': { 'description': 'TBC' },
    'r': { 'description': 'TBC' },
    's': { 'description': 'medium circles' },
    't': { 'description': 'TBC' },
    'u': { 'description': 'TBC' },
    'v': { 'description': 'TBC' },
    'w': { 'description': 'TBC' },
    'x': { 'description': 'TBC' },
    'y': { 'description': 'TBC' },
    'z': { 'description': 'TBC' },
    '1': { 'description': 'TBC' },
    '2': { 'description': 'TBC' },
    '3': { 'description': 'TBC' },
    '4': { 'description': 'TBC' },
    '5': { 'description': 'TBC' },
    '6': { 'description': 'TBC' },
    '7': { 'description': 'TBC' },
    '8': { 'description': 'TBC' },
    '9': { 'description': 'TBC', 'bob': 'red' }
    // Add or modify descriptions as needed for each character
};



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
}
