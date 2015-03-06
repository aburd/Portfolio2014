$(document).ready(function(){
	$("#1, #2, #3, #4").hide();

var dtddesc = 	$('#1'),
	trashdesc = $('#2'),
	sumodesc = 	$('#3'),
	testdesc = 	$('#4'),
	desc =		$('.desc'),
	defdesc = 	$('#5');

$("#dtd").hover(function() {
		desc.hide(),
		dtddesc.fadeIn();
	},
	function() {
		desc.hide();
		//defdesc.fadeIn();	
});

$("#trash").hover(function() {
		desc.hide(),
		trashdesc.fadeIn();
	},
	function() {
		desc.hide();
		//defdesc.fadeIn();	
});

$("#sumo").hover(function() {
		desc.hide(),
		sumodesc.fadeIn();
	},
	function() {
		desc.hide();
		//defdesc.fadeIn();	
});	

$("#test").hover(function() {
		desc.hide(),
		testdesc.fadeIn();
	},
	function() {
		desc.hide();
		//defdesc.fadeIn();	
});
  
});