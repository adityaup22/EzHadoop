
function home()
{	alert("home");
	document.location("http://192.168.14.27/ezhadoop/home.html");
	
}

function typical()
{
var xmlhttp;
alert("Typical Installation Started..");
  // code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  

xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById("show").innerHTML=xmlhttp.responseText;
    }
  }
xmlhttp.open("GET","http://192.168.14.27/cgi-bin/hadoop.py",true);
xmlhttp.send();
alert("Done..!!");
}



function custom()
{
	alert("Custom Installation Started..");
var xmlhttp;

  // code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  

xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById("show").innerHTML=xmlhttp.responseText;
    }
  }
xmlhttp.open("GET","http://192.168.14.27/cgi-bin/custom_install.py",true);
xmlhttp.send();
alert("Done..!!");
}


function advanced()
{
	alert("Advanced Installation Started..");
var xmlhttp;

  // code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  

xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById("show").innerHTML=xmlhttp.responseText;
    }
  }
xmlhttp.open("GET","http://192.168.14.27/cgi-bin/advanced_install.py",true);
xmlhttp.send();
alert("Done..!!");
}



//---------------------------------------------------JQueryCode Goes here---------------------------------

$(function(){
	
	var x = $('#one');
	var y = $('#two');
	var z = $('#three');
	var q = $('#cmenucus');
	var s = $('#cmenuadv');
	var p = $('#blackScreen');
	var r = $('table');
	
	x.hide();
	y.hide();
	z.hide();
	q.hide();
	p.hide();
	s.hide();
	
		$('#typical').hover(function(){
				
				x.show();
			},function(){
					x.hide();
				});
		
		$('#custom').hover(function(){
				y.show();
			},function(){
					y.hide();
				});
		
		$('#advanced').hover(function(){
				z.show();
			},function(){
					z.hide();
				});
		
		$('#custom').click(function(){
				
				q.show();
				p.show();
				q.css("top","0%");
				q.animate({top:'15%'},"slow")
			});
		$('#advanced').click(function(){
				
				s.show();
				p.show()
				s.css("top","0%");
				s.animate({top:'15%'},"slow")
			});
		$('#cancel1').click(function(){
				q.hide();
				p.hide();
			});
		$('#cancel2').click(function(){
				s.hide();
				p.hide();
			});
			
		$("form").submit(function(){
    			alert("Submitted");
			});
		
		//ajax-------------for refreshing ip's-------------------
		
		$('#refresh1').click(function(){
			$('#show').attr("src","http://192.168.14.27/ezhadoop/iptables.html");
			//r.show();
		});
		$('#refresh2').click(function(){
			$('#show').attr("src","http://192.168.14.27/ezhadoop/iptables.html");
			//r.show();
		});
		//---------------------------------------------------------
		
  
  
 
	});









/*		
$(function() {
  
  $('#custom').click(function() {
	 
   
  
    $.getJSON( "ip.json", function( data ) {
  var items = [];
  $.each( data, function( key, val ) {
    items.push( "<li id='" + key + "'>" + val + "</li>" );
  });
 
  $( "<ul/>", {
    "class": "my-new-list",
    html: items.join( "" )
  }).appendTo( "#show" );
});
	 
  });
});

*/
