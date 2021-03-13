$(document).ready(function () {
	inicio();
	modal2();
	$(".btn").on("click",function(){$("#mensaje").modal("show")})
});

function inicio(){
	let params = new URLSearchParams(location.search);
    let id = params.get('id');
	let total=0;
	let url="";
	let h4="Puedes personalizar tus productos.";
	let p="Imagen con fines ilustrativos";

    switch (id) {
		case "1":
			total=10;
			url="images/tex/tex"
            $("#titulo").html("Textiles");
            $("#title").html("Textiles");
		break;

		case "2":
			total=6;
			url="images/cera/cera"
            $("#titulo").html("Ceramica");
            $("#title").html("Ceramica");
		break;

		case "3":
			total=2;
			url="images/vid/vid"
            $("#titulo").html("Vidrio");
            $("#title").html("Vidrio");
		break;

		case "4":
			total=11;
			url="images/meta/meta"
            $("#titulo").html("Metales");
            $("#title").html("Metales");
		break;

		case "5":
			total=8;
			url="images/acce/acce"
            $("#titulo").html("Accesorios");
            $("#title").html("Accesorios");
		break;

		case "6":
			img=6;
			url="images/tec/tec"
			h4="Consultar existencias y precios por WhatsApp";
			p="";
            $("#titulo").html("Tecnología");
            $("#title").html("Tecnología");

			for (var i = 0; i < img ; i++) {
				$('#gallery').append('<div class="col-sm-6 col-md-4 col-lg-3 col-xl-2 item">'+
					'<botton class="btn"><img src="'+url+i+'.jpg" alt="image" class="img-fluid" width="900" height="750"></botton>'+
					'</div>')
			}
		break;
	}

	for (var i = 0; i < total ; i++) {
		$('#lightgallery').append('<div class="col-sm-6 col-md-4 col-lg-3 col-xl-2 item" data-aos="fade" data-src="'+url+i+'.jpg" data-sub-html="<h4>'+h4+'</h4>'+
            '<p>'+p+'</p>">'+
            '<a href="#"><img src="'+url+i+'.jpg" alt="image" class="img-fluid" width="900" height="750"></a>'+
            '</div>')
	}

	
}

function modal2(){
	$("body").append('<div class="modal fade" id="mensaje" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">'+
	'<div class="modal-dialog modal-lg"><div class="modal-content" style="background-image: url(images/msj.jpg);">'+
	'<div class="modal-header"><h5 class="modal-title" id="exampleModalLabel"></h5>'+
	'<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true" style="color:#F4F21E;">&times;</span></button></div>'+
	'<div class="modal-body"><div class="row">'+
	'<div class="col-md-6"><b><p>Para proporcionarle más información escribanos a nuestro <span style="color:#1E9DBF">WhatsApp</span></p></b></div>'+
	'<div class="col-md-6"></div></div></div><div class="modal-footer">'+
	'<button type="button" class="btn btn-success" data-dismiss="modal">Aceptar</button></div></div></div></div>')
			}
