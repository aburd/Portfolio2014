$(document).ready(function() {
	// hide the image
	var imgfront = $("#dtdfront");
	var img = $("#dtdback");
	img.hide();
	// show on click
	$(".flyer").mouseenter(function() {
		img.fadeToggle(1000);
		imgfront.fadeToggle(1000);
	});

	$(".flyer").mouseleave(function() {
		imgfront.fadeToggle(1000);
		img.fadeToggle(1000);
	});
});