// Morris.js Charts sample data for SB Admin template

$(function() {
	
	/*
	$('#in').load("http://127.0.0.1/ram.txt");
	var j = $('#in').html();
	alert(j);
	x = Number($('#in').html());*/
	
	
    // Donut Chart
  var donut =  Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "RAM Used",
            value: 60
        }, {
			label:"FREE Ram",
			value: 40,
			},
			
        
        ],
        resize: true
		
	
    	});
		var donut =  Morris.Donut({
        element: 'morris-donut-chart2',
        data: [{
            label: "Disk Used",
            value: 80
        }, {
			label:"FREE Disk",
			value: 20,
			},
			
        
        ],
        resize: true
		
	
    	});
  


});
