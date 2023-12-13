document.addEventListener('keydown', function(event) {
    if (event.key === 'l') {
      console.log("The 'l' key was pressed.");


		let circle_label = 12.5//radius in mm
		let square_label = 13//mm		
		let circle_px = Math.round((svg_width/print.width) * circle_label);
		let square_px = Math.round((svg_width/print.width) * square_label);			
		percentage = 1;
		
		thirds.forEach((point) => {
			if (Math.floor(Math.random() * 100) < percentage) {
  				const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  				circle.setAttribute("cx", point.x);
  				circle.setAttribute("cy", point.y);
  				circle.setAttribute("r", circle_px);
 				circle.setAttribute("stroke", "black");
  				circle.setAttribute("stroke-width", "1");
  				circle.setAttribute("fill", "white");
  			
				let svgGroup = document.querySelector('g#l');
  				svgGroup.appendChild(circle);
  			}
  			
		});


    }
});

