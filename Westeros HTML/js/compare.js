(function($) {
	/*----------------------
		LIQUID IMAGES
	----------------------*/
	$('.liquid').imgLiquid();

	/*---------------
		CAROUSEL
	---------------*/
	var compareList = $('.owl-compare-list');

	compareList.owlCarousel({
		items: 3,
		itemWidth: 270,
		itemsDesktop: [1260, 3],
		itemsTablet: [1024, 2],
		itemsTabletSmall: [660, 1],
		navigation: true,
		navigationText: false
	});

	var owl = compareList.data('owlCarousel');

	$('.slide-controls').find('.button.next').bind('click', {owlObject: owl}, nextSlide);
	$('.slide-controls').find('.button.prev').bind('click', {owlObject: owl}, prevSlide);

	function nextSlide(e) {
		e.preventDefault();
		e.data.owlObject.next();
	}

	function prevSlide(e) {
		e.preventDefault();
		e.data.owlObject.prev();
	}

	/*-----------------
		COLORPICKER
	-----------------*/
	var colorpicker = $('.colorpicker');

	// init colorpicker width
	colorpicker.each(function() {
		$(this).outerWidth(0);
	});

	colorpicker.children('li').each(function() {
		var $me = $(this),
			color = $me.children('span').attr('data-color');
		// set color based on data attribute
		$me.children('span').css('backgroundColor', color);
		// if selected default, set its color
		if($me.hasClass('selected')) $me.css('outlineColor', color);

		$me.bind('click', {color: color}, selectItem);

		// add item width to colorpicker
		$me.parent().outerWidth($me.parent().outerWidth() + $me.outerWidth() + parseInt($me.css('marginRight')));
	});
	
	function selectItem(e) {
		if($(this).hasClass('selected')) return;

		var $me = $(this);
		// unselect all
		$me.parent('.colorpicker')
			.children('li').each(function() {
				$(this).css('outlineColor', $me.css('outlineColor'));
				$(this).removeClass('selected');
		});
		// select item
		$me.css('outlineColor', e.data.color);
		$me.addClass('selected');
	}

	/*--------------
		COUNTER
	--------------*/
	var counter = $('.counter'),
		leftControl = counter.children('.control.left'),
		rightControl = counter.children('.control.right');

		leftControl.bind('click', counter_substract);
		rightControl.bind('click', counter_add);

	function counter_substract() {
		var container = $(this).siblings('.value').children('h5'),
			currentValue = parseInt(container.text());

		if(currentValue > 1) container.text(--currentValue);
	}

	function counter_add() {
		var container = $(this).siblings('.value').children('h5'),
			currentValue = parseInt(container.text());

		if(currentValue < 100) container.text(++currentValue);
	}
	
})(jQuery);