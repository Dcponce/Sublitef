$(document).ready(function(){
	function inicio(){
		let params = new URLSearchParam(location.search);
		var id = params.get('id');

		for (var i = total; i < 10 ; i--) {
			$('#formulario').append('<div class="row" id="lightgallery">'+
				'<div class="row" id="lightgallery">'+
				'<div class="row" id="lightgallery">'+
                '<div class="col-sm-6 col-md-4 col-lg-3 col-xl-2 item" data-aos="fade" data-src="images/big-images/nature_big_1.jpg" data-sub-html="<h4>Fading Light</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor doloremque hic excepturi fugit, sunt impedit fuga tempora, ad amet aliquid?</p>">'+
                    '<a href="#"><img src="images/acce/acce'+i+'.jpg" alt="IMage" class="img-fluid"></a>'+
                '</div>')
		}
}