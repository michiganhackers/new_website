$(document).ready(function(){

  var window_width = $(window).width();
  var window_height = $(window).height();

  function resizePages(){
    $('.page').css("width", window_width);
    $('.page').css("min-height", window_height);
  }

  resizePages();
  ////keep window sizes
  $(window).resize(function(){
    window_width = $(window).width();
    window_height = $(window).height();
    resizePages();
  }); 

  /*Shrink prof pic to corner on hover*/
  $('.tile').hover(function(e){
    $(e.currentTarget).find(".profile-picture").addClass("profile-picture-corner", 250)
        .children('img').addClass("profile-picture-img-corner", 100);
    // $(e.currentTarget).find(".profile-picture").removeClass("col-lg-12", 1000);

  }, function(e){
    $(e.currentTarget).find(".profile-picture").removeClass(" profile-picture-corner", 250)
        .children('img').removeClass("profile-picture-img-corner", 100);
    // $(e.currentTarget).find(".profile-picture").addClass("col-lg-12", 1000);
  });


  /* Navigation reveal and animation */

  $('.global-nav-trigger').hover(function(e){ // when triggered by corner trigger
    $(e.currentTarget).parent().addClass('global-nav-visible',150).find('#nav-content')
        .removeClass('hidden');
  }, function(e){ // callback     
  });

  $('.global-nav').hover(function(e){ // on hover off of larger "nav" area, then close
  }, function(e){ // on hover off
    $(e.currentTarget).removeClass('global-nav-visible',150).find('#nav-content')
        .addClass('hidden');    
  });

  console.log(hacker_data);

});

