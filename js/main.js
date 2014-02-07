
$(document).ready(function(){

	var window_height = $(window).height();
	$('#header').css("height", window_height - (80 + 80));


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
