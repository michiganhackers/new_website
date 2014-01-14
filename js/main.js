
$(document).ready(function(){

	function resizePages(){
		var window_height = $(window).height();
		$('#header').css("height", window_height - (80 + 60));
	}

	/*$(window).resize(function(){
		resizePages();
	});*/
	resizePages();

	$("#nav").sticky({
		topSpacing:0
	});

});
