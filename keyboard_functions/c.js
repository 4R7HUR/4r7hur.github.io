document.addEventListener('keydown', function(event) {
    
  if (event.key === 'c') {
      console.log("The 'c' key was pressed.");
      
      let dString = '';
      let radius = 2;

		path = svg.find('g#c path');		

		if(path.attr('d').length > 100){
			 path.attr('d', dString);
		}else{

        $.each(thirds, function (index, point) {
        	
        	if(getRandom(0, 100) > 60){
        		dString += `M ${point.x + radius}, ${point.y} `;
            dString += `C ${point.x + radius}, ${point.y + radius / 2} ${point.x + radius / 2}, ${point.y + radius} ${point.x}, ${point.y + radius} `;
            dString += `C ${point.x - radius / 2}, ${point.y + radius} ${point.x - radius}, ${point.y + radius / 2} ${point.x - radius}, ${point.y} `;
            dString += `C ${point.x - radius}, ${point.y - radius / 2} ${point.x - radius / 2}, ${point.y - radius} ${point.x}, ${point.y - radius} `;
            dString += `C ${point.x + radius / 2}, ${point.y - radius} ${point.x + radius}, ${point.y - radius / 2} ${point.x + radius}, ${point.y} `;
        	}

        });

        path.attr('d', dString);
     }

    }
});

