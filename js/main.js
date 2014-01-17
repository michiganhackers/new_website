
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

	$('a[href*=#]').click(function(){
	    $('html, body').animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top
	    }, 500);
	    return false;
	});

});
