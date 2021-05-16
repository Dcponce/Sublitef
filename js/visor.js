$(document).ready(function () {
	inicio();
	
	$(".btn").on("click",function(){
		modal2();
	})
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
            $("#titulo").html("Tecnología");
            $("#title").html("Tecnología");

			for (var i = 0; i < img ; i++) {
				$('#gallery').append('<div class="col-sm-6 col-md-4 col-lg-3 col-xl-2 item">'+
					'<botton class="btn"><img src="'+url+i+'.jpg" alt="image" class="img-fluid" width="900" height="750"></botton>'+
					'</div>')
			}
		break;

		default:
			location.href="error404.html";
			break;
	}

	for (var i = 0; i < total ; i++) {
		$('#lightgallery').append('<div class="col-sm-6 col-md-4 col-lg-3 col-xl-2 item" data-aos="fade" data-src="'+url+i+'.jpg" data-sub-html="<h4>'+h4+'</h4>'+
            '<p>'+p+'.Consulta en nuestro Whatsapp</p>">'+
            '<a href="#"><img src="'+url+i+'.jpg" alt="image" class="img-fluid" width="900" height="750"></a>'+
            '</div>')
	}
	
}

function modal2(){
	location.href="https://api.whatsapp.com/send?phone=50375458366&text=Hola,%20estoy%20buscando%20un%20";
			}

