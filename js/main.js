
$(document).ready(function(){

	function resizePages(){
		var window_height = $(window).height();
		$('#header').css("min-height", window_height - (80 + 60));
	}

	////keep window sizes
	$(window).resize(function(){
		resizePages();
	});
	resizePages();

});