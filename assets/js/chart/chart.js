$(document).ready(function() 
		{
			
			 let token='{{Session::token()}}';
	new Chart(document.getElementById("bar-chart"), {
		type: 'bar',
		data: {
			labels: ["JAN", "FEB", "MAR", "APRIL","MAY","JUNE","JULY","AUG","SEP","OCTOBER","NOV","DEC"],
			datasets: [
			           {
			        	   label: "Cost",
			        	   backgroundColor: "#01B8AA",
			        	   data: [
			                      randomScalingFactor(),
			                      randomScalingFactor(),
			                      randomScalingFactor(),
			                      randomScalingFactor(),
			                      randomScalingFactor(),
			                      randomScalingFactor(),
			                      randomScalingFactor(),
								   randomScalingFactor(),
			                      randomScalingFactor(),
			                      randomScalingFactor(),
			                      randomScalingFactor(),
			                      randomScalingFactor()
			                  ]
			           }, {
			        	   label: "Earing",
			        	   backgroundColor: "#5F6B6D",
			        	   data: [
			                      randomScalingFactor(),
			                      randomScalingFactor(),
			                      randomScalingFactor(),
			                      randomScalingFactor(),
			                      randomScalingFactor(),
			                      randomScalingFactor(),
			                      randomScalingFactor(),
								   randomScalingFactor(),
			                      randomScalingFactor(),
			                      randomScalingFactor(),
			                      randomScalingFactor(),
			                      randomScalingFactor()
			                  ]
			           }
			           ]
		},
		options: {
			title: {
				display: true,
				text: 'University Earing & Cost (in Millions)'
			}
		}
	});
		});
/* $(document).ready(function() 
		{
	var ctx = document.getElementById('myChart').getContext('2d');
	var myChart = new Chart(ctx, {
		type: 'line',
		data: {
			labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
			datasets: [{
				label: 'Cost',
				data: [
		                randomScalingFactor(),
		                randomScalingFactor(),
		                randomScalingFactor(),
		                randomScalingFactor(),
		                randomScalingFactor(),
		                randomScalingFactor(),
		                randomScalingFactor()
		            ],
				backgroundColor: "rgba(255,61,103,0.3)"
			}, {
				label: 'Earning',
				data: [
		                randomScalingFactor(),
		                randomScalingFactor(),
		                randomScalingFactor(),
		                randomScalingFactor(),
		                randomScalingFactor(),
		                randomScalingFactor(),
		                randomScalingFactor()
		            ],
				backgroundColor: "rgba(34,206,206,0.3)"
			}]
		}
	});
		}); */