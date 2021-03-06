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
            $("#titulo").html("textiles");
			break;
	
		default:
			break;
	}

	for (var i = 0; i < total ; i++) {
		$('#lightgallery').append('<div class="col-sm-6 col-md-4 col-lg-3 col-xl-2 item" data-aos="fade" data-src="'+url+i+'.jpg" data-sub-html="<h4>textil1</h4>'+
            '<p>Puedes personalizar tus productos.</p>">'+
            '<a href="#"><img src="'+url+i+'.jpg" alt="IMage" class="img-fluid"></a>'+
            '</div>')
	}
}
