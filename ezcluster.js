function home()
{
	alert("home");
 document.location("http://192.168.14.27/ezhadoop/home.html");
	
}

$ (function(){
	
	
	$('#welcome').fadeOut(3000);
	var iff = $('iframe');
	iff.animate({height : '93%'},"slow");
	iff.animate({width : '85%'},"slow");
	iff.animate({top : '7%'},"fast");
	iff.animate({left:"15%"},"fast");
	
	 clicked="db"; 
	$('.menu button').click(function(e){
			var clicks = e.target.id; // returns the id of the element clicked form the buttons into clicked variable 
		//alert(clicks);
			if(clicks === clicked){
				return;}
			else{
				$('.menu button').css({"background-image":"url(images/ui-bg_flat_0_333333_40x100.png)" });
				$('#'+clicks).css({"background-image":"none" , "background-color":"black"});
			
				
				
				
				iff.animate({height : '5%'},"slow");
				//iff.animate({width : '5%'},"slow");
				
				
				if(clicks === 'files'){
					iff.queue(function(){
							$('#ifr').attr("src","http://192.168.14.27/ezhadoop/files.html");
							iff.dequeue();
						});
					
					
				}
				else if(clicks === 'jobs'){
					iff.queue(function(){
							$('#ifr').attr("src","http://192.168.14.27/ezhadoop/jobs.html");
							iff.dequeue();
						});
					
					
				}
				else if(clicks ==='stats'){
					iff.queue(function(){
							$('#ifr').attr("src","http://192.168.14.27/ezhadoop/morisdonutchart.html");
							iff.dequeue();
						});
				}
				else if(clicks ==='db'){
					iff.queue(function(){
							$('#ifr').attr("src","http://192.168.14.27/ezhadoop/dashboard.html");
							iff.dequeue();
						});
				}
				else{
					iff.queue(function(){
							$('#ifr').attr("src","");
							iff.dequeue();
						});
					}//ending of second else
				
				iff.animate({height : '93%'},"slow");
				//iff.animate({width : '85%'},"slow");
				iff.animate({top : '7%'},"slow");
				//iff.animate({left:"15%"},"fast");
				
				
				clicked = clicks;
			}//ending of first else
			
		});//ending of click function
	
	});
