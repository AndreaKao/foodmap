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

$(document).ready(function(){
	$("buscador").select2();
});


$('.contenedor').mouseover(function () {
  $('.menu-overlay').show();
}).mouseout(function () {
  $('.menu-overlay').hide();
});



$('#platos').click(function(){
  $('.postres').hide();
  $('.bebestibles').hide();
  });

 $('#postres').click(function(){
  $('.platos').hide();
  $('.bebestibles').hide();
  });

 $('#bebestibles').click(function(){
  $('.platos').hide();
  $('.postres').hide();
  });



/*
    $("#tablaLaWebera tbody>tr").hide();
    $("#tablaLaWebera td:contiene-palabra('" + $(this).val() + "')").parent("tr").show();
    }
   else{
    $("#tablaLaWebera tbody>tr").show();
    }
});*/

/*
jQuery.extend(jQuery.expr[":"],
{
  "contiene-palabra": function(elem, i, match, array) {
    return (elem.textContent || elem.innerText || $(elem).text() || "").toLowerCase().indexOf((match[3] || "").toLowerCase()) >= 0;
    }
});*/


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