/*
$( "progress" ).click(function() {
  function complete() {
    $( "<div>" ).text( this.id ).appendTo( "#log" );
  }
  $( "progress" ).fadeOut( 1600, "linear", complete );
});
 
 */
 /*
$( "#btn2" ).click(function() {
  $( "div" ).show();
  $( "#log" ).empty();
});
*/
$(document).ready(function(){
   $('.container1').fadeOut(3300);
});

$(document).ready(function(){
   $('.container2').delay(3100).fadeIn("slow");
});

$(document).bind("mobileinit", function(){
  $.mobile.listview.prototype.options.filterPlaceholder = "Texto del PlaceHolder Cambiado Por Código";    
});



/*
$(document).ready(function(){
	$('.container2').fadeIn(3600);
});

/*

		$(".container2").click(function(){
			$('#target').show(3000);
			$('.target').show("slow");
		 });
		$("#ocultar").click(function(){
			$('#target').hide(3000);
			$('.target').hide("fast");
		 });
	});
	*/