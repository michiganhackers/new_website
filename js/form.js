function submitEmail() {
  var email = jQuery('#emailResponse').val();
  if (email != "") {
    jQuery.ajax({
      url: "https://docs.google.com/a/umich.edu/forms/d/1GO3UU7Nk44PvIQywY-7VZequNgMel2wmXXLg811fElk/formResponse",
      data: {"entry.778832238" : email},
      type: "POST",
      dataType: "xml",
    });
    jQuery('#emailResponse').val("Thanks, you'll hear from us soon!");
  }
}
