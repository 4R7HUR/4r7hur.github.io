document.addEventListener('keydown', function(event) {
 if (event.key === 'b') {
 	
	console.log("The 'b' key was pressed.");
	console.log(thirds);
	  
	let path = svg.find('g#b path');
	let d = '';


	customSort(thirds, 'x', 'asc', thirds.length).forEach(function(item, index) {
		mx = item.x; 
		my = item.y;
		
		if(index < thirds.length/2){
			lx = 0;
			ly = getRandomInt(0, svg.height());	  
		}else{
			lx = svg.width();
			ly = getRandomInt(0, svg.height());			
		}
		
		d += 'M ' + mx + ' ' + my + 'L ' + lx + ' ' + ly;	
  		
	});
	
	customSort(thirds, 'y', 'asc', thirds.length).forEach(function(item, index) {
		mx = item.x; 
		my = item.y;
		
		if(index < thirds.length/2){
			ly = 0;
			lx = getRandomInt(0, svg.height());	  
		}else{
			ly = svg.width();
			lx = getRandomInt(0, svg.height());			
		}
		
		d += 'M ' + mx + ' ' + my + 'L ' + lx + ' ' + ly;	
  		
	});
	
	
	
 		
 		
 	path.attr('d',d);

 }
});

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function customSort(thirds, xy, sort_direction, slice) {
 var sortedArray = thirds.slice(0).sort(function(a, b) {
  if (sort_direction === 'asc') {
   return a[xy] - b[xy];
  } else if (sort_direction === 'desc') {
   return b[xy] - a[xy];
  }
 });

 return sortedArray.slice(0, slice);
}	