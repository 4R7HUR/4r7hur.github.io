

document.addEventListener('keydown', function(event) {
    if (event.key === 'y') {
        console.log("The 'y' key was pressed.");
        console.log("This one grabs the drawing and then clones it smaller, the opportunity might be to get the other letters to interact with these paths too");
                
        let y_group = svg.find('g.y');
        
        if(y_group.find('path').length){ 	$('g.y path').remove();	return;   }

        path = svg.find('g.lines path:first'); 
        let tbc = [];      
        
        $.each(y_group, function (index) {
        	 let scale = $(this).data('scale'); 
        	 console.log(scale);
            
	       // Clone the path
	       let clonedPath = $(path).clone();
	
	       // Get the 'd' attribute value
	       let originalPathData = $(path).attr('d');
	       //console.log('Original Path Data:', originalPathData);
	
	       // Split the path data into an array
	       
	       let oldPathDataArray = originalPathData.split(/[ ,]+/);
	
	       let pathDataArray = originalPathData.split(/[ ,]+/);
	       
	       let min_x = 0;
	       let max_x = 0;
	       let min_y = 0;
	       let max_y = 0;	
	
	       // Modify each numerical value based on scale
	       for (let i = 0; i < pathDataArray.length; i++) {
	
	           if (!isNaN(pathDataArray[i])) {
	               pathDataArray[i] = (parseFloat(pathDataArray[i]) * (scale / 100)).toFixed(0);
	               
	           }   	           


				if (pathDataArray[i] === 'C') {
					// Coordinates before 'C'
					let x = pathDataArray[i - 2];
					let y = pathDataArray[i - 1];
				
					if (x !== undefined && y !== undefined) {
						x =  parseFloat(x);
						y = parseFloat(y);
						tbc.push({ x: x, y: y });
						min_x = Math.min(x, min_x);
						min_y = Math.min(y, min_y);
						max_x = Math.max(x, max_x);
						max_y = Math.max(y, max_y);						
					}
				}				  	                               
	           
	       }		
	       
	       console.log(min_x, max_x, min_y, max_y);
	       
	       	 	       
	       
	       // Join the modified array back into a string
	       let modifiedPathData = pathDataArray.join(' ');
	       //console.log('Modified Path Data:', modifiedPathData);
	
	       // Set the modified 'd' attribute to the cloned path
	       clonedPath.attr('d', modifiedPathData);
	
	       // Move the cloned path to a new location based on the original path
	       movePathTo(clonedPath, originalPathData);
	
	       // Append the cloned and modified path to the y_group
	       $(this).append(clonedPath);
	       
				       
			const svgPathData = $(this).find('path').attr('d');//"M 48.30 10.20 C 82.20 78.60 123.00 147.30 153.30 159.90 C 212.40 170.40 251.10 171.00 277.20 160.20 C 291.60 132.30 285.60 96.60 273.30 72.30 C 249.90 62.70 216.30 73.80 186.00 108.00 C 173.10 182.40 189.60 252.30 216.00 283.20 C 246.00 286.20 279.30 268.80 297.30 248.10 C 301.20 222.00 285.30 179.40 266.70 158.40";
			const extractedCoordinates = extractCoordinatesBeforeC(svgPathData);
			console.log(extractedCoordinates);			
			thirds.push(...extractedCoordinates);

            
        });
        

		
		



























    }
});

// Function to move the cloned path to a new location
function movePathTo(clonedPath, originalPath) {
	let originalLastCoordinates = getLastCoordinatesFromPath(originalPath);
	let clonedLastCoordinates = getLastCoordinatesFromPath(clonedPath.attr('d'));
	
	let dx = originalLastCoordinates[0] - clonedLastCoordinates[0];
	let dy = originalLastCoordinates[1] - clonedLastCoordinates[1];
	
	let transformValue = `translate(${dx},${dy})`;
	clonedPath.attr('transform', transformValue);
}

// Function to get the last coordinates from an SVG path data string
function getLastCoordinatesFromPath(pathData) {
    if (typeof pathData !== 'string') {
        console.log('Path data is not a string:', pathData);
        return [];
    }

    let regex = /[-+]?\d*\.?\d+/g;
    let matches = pathData.match(regex);

    if (!matches || matches.length < 2) {
        console.log('Unable to extract coordinates from path data:', pathData);
        return [];
    }

    return [parseFloat(matches[matches.length - 2]), parseFloat(matches[matches.length - 1])];
}
function extractCoordinatesBeforeC(pathData) {
	const coordinatePairs = [];
	const pathDataArray = pathData.split(/[ ,]+/);
	
	for (let i = 0; i < pathDataArray.length; i++) {
		if (pathDataArray[i] === 'C') {
		// Coordinates before 'C'
		const x = pathDataArray[i - 2];
		const y = pathDataArray[i - 1];
		
			if (x !== undefined && y !== undefined) {
			coordinatePairs.push({ x: parseFloat(x), y: parseFloat(y) });
			}
		}
	}
	
	return coordinatePairs;
}
