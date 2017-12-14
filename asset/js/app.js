$(document).ready(function(){
   $('.container1').fadeOut(3300);
});

$(document).ready(function(){
   $('.container2').delay(3100).fadeIn("slow");
});

    var cont = $('#container');
    
    $('#categorias').on('change', function() {
    	var selection = $('#categorias').val();
      if(selection === "platos") {
      	$(".menu").hide();
      	cont.html('<div class="row platos contenedor"><div class="col-xs-6 col-md-6"><div id="platos" id="menu-overlay"><img src="asset/img/comida1.jpg" data-toggle="modal" data-target="#myModal"></div></div><div class="col-xs-6 col-md-6"><div id="platos" id="menu-overlay"><img src="asset/img/comida2.jpg" data-toggle="modal" data-target="#myModal1"></div></div></div>');
      }
      if(selection === "postres") {
      	$(".menu").hide();
      	cont.html('<div class="row postres contenedor"><div class="col-xs-6 col-md-6"><div id="postres" id="menu-overlay"><img src="asset/img/postre1.jpg" data-toggle="modal" data-target="#myModal2"></div></div><div class="col-xs-6 col-md-6"><div id="postres" id="menu-overlay"><img src="asset/img/postre2.jpg" data-toggle="modal" data-target="#myModal3"></div></div></div>');
      }
      if(selection === "bebestibles") {
      	$(".menu").hide();
      	cont.html('<div class="row bebestibles contenedor"><div class="col-xs-6 col-md-6"><div id="bebestibles" id="menu-overlay"><img src="asset/img/bebestible1.jpg" data-toggle="modal" data-target="#myModal4"></div></div><div class="col-xs-6 col-md-6"><div id="bebestibles" id="menu-overlay"><img src="asset/img/bebestible2.jpg" data-toggle="modal" data-target="#myModal5"></div></div></div>');
    }
})
