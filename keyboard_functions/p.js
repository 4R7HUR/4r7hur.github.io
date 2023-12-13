document.addEventListener('keydown', function(event) {
    if (event.key === 'p') {
        console.log("The 'p' key was pressed.");

        // Assuming the values of square_label, svg_width, and print.width are known
        let square_label = 13; // width in mm
        let square_px = Math.round((svg_width / print.width) * square_label);

		  percentage = 2;
        thirds.forEach((point) => {
        	if (Math.floor(Math.random() * 100) < percentage) {
        		const square = document.createElementNS("http://www.w3.org/2000/svg", "rect");
            square.setAttribute("x", point.x - square_px / 2);
            square.setAttribute("y", point.y - square_px / 2);
            square.setAttribute("width", square_px);
            square.setAttribute("height", square_px);
            square.setAttribute("stroke", "#fff");
            square.setAttribute("stroke-width", "1");
            square.setAttribute("fill", "white");
            
            // Generate a random rotation value between 0 and 360 degrees
            let rotation = Math.floor(Math.random() * 360);
            square.setAttribute("transform", `rotate(${rotation} ${point.x} ${point.y})`);


            svgGroup = document.querySelector('g#p');
            svgGroup.appendChild(square);	
        	
        	
        	}

        });
    }
});
