$(document).ready(function () {
	inicio();
});

function inicio(){
	let params = new URLSearchParams(location.search);
    let id = params.get('id');
	let total=0;
	let url="";

    switch (id) {
		case "1":
			total=10;
			url="images/tex/tex"
            $("#titulo").html("Textiles");
		break;

		case "2":
			total=6;
			url="images/cera/cera"
            $("#titulo").html("Ceramica");
		break;

		case "3":
			total=2;
			url="images/vid/vid"
            $("#titulo").html("Vidrio");
		break;

		case "4":
			total=11;
			url="images/meta/meta"
            $("#titulo").html("Metales");
		break;

		case "5":
			total=8;
			url="images/acce/acce"
            $("#titulo").html("Accesorios");
		break;

		case "6":
			total=5;
			url="images/tec/tec"
            $("#titulo").html("Tecnología");
		break;

		default:
		break;
	}

	for (var i = 0; i < total ; i++) {
		$('#lightgallery').append('<div class="col-sm-6 col-md-4 col-lg-3 col-xl-2 item" data-aos="fade" data-src="'+url+i+'.jpg" data-sub-html="<h4>Puedes personalizar tus productos.</h4>'+
            '<p>Imagen con fines ilustrativos</p>">'+
            '<a href="#"><img src="'+url+i+'.jpg" alt="image" class="img-fluid" width="900" height="750"></a>'+
            '</div>')
	}
}
