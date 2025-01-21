(function($) {
	/*----------------------
		LIQUID IMAGES
	----------------------*/
	$('.liquid').imgLiquid();
	
	/*-----------------
		CAROUSELS
	-----------------*/
	$('#owl-brands').owlCarousel({
		items: 5,
		itemWidth: 250,
		navigation: true,
		navigationText: false
	});

	function registerCarousels(carousels) {
		for(var i=0; i<carousels.length; i++) {
			var id = carousels[i],
				owl = $(id).data('owlCarousel');

			$(id).siblings('.slide-controls').find('.button.next').bind('click', {owlObject: owl}, nextSlide);
			$(id).siblings('.slide-controls').find('.button.prev').bind('click', {owlObject: owl}, prevSlide);
		}
	}

	function nextSlide(e) {
		e.preventDefault();
		e.data.owlObject.next();
	}

	function prevSlide(e) {
		e.preventDefault();
		e.data.owlObject.prev();
	}

	var carousels = ['#owl-brands'];

	registerCarousels(carousels);

})(jQuery);