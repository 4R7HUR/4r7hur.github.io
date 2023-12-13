document.addEventListener('keydown', function(event) {
 if (event.key === 's') {
 	
	console.log("The 's' key was pressed.");
	console.log(thirds[0].x);
	
	thirds.sort((a, b) => a.x - b.x);
	
	let path = svg.find('g#s path');
	//I need to generate a string for d and then use it to set the d attribute for path. The string generated will be like this
	d = '';
	
	var randomIndex;
	var randomItem;	
	
	var d = '';
	
	for (var iii = 0; iii < 2; iii++) {	
		
		var percentage = 0.2; // 20% as an example
		
		randomIndex = Math.floor(Math.random() * thirds.length);
		var offset = Math.floor(thirds.length * percentage);
		var sliceStart = Math.max(0, randomIndex - offset);
		var sliceEnd = Math.min(thirds.length, randomIndex + offset + 1);
		var selectedItems = thirds.slice(sliceStart, sliceEnd);
		
				
		selectedItems.sort((a, b) => a.y - b.y);		
		
		randomIndex = Math.floor(Math.random() * selectedItems.length);
		offset = Math.floor(selectedItems.length * percentage);
		sliceStart = Math.max(0, randomIndex - offset);
		sliceEnd = Math.min(selectedItems.length, randomIndex + offset + 1);
		selectedItems = selectedItems.slice(sliceStart, sliceEnd);
		
		console.log(selectedItems);
	
	//////
		for (var i = 0; i < selectedItems.length * 1; i++) {
			
			if(i === 0){
				d += 'M';
				d += selectedItems[0].x + ', ';
		  		d += selectedItems[0].y + ' ';	  			
		  	}	  				
		
			d += 'C';	  		
		  
		  	for (var ii = 0; ii < 3; ii++) {	
		  		
		  	  	randomIndex = Math.floor(Math.random() * selectedItems.length);	  	  	
	
		  		d += selectedItems[randomIndex].x + ', ';
		  		d += selectedItems[randomIndex].y + ' ';
		  		
		  	}  
		  	
		  	d += 'L';	
		   d += selectedItems[randomIndex].x + ', ';
		  	d += selectedItems[randomIndex].y + ' ';	
		  
		}
		
	}
	
	path.attr('d',d);
	
	console.log(d);


 }
});

