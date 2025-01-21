(function($) {
	/*----------------------
		LIQUID IMAGES
	----------------------*/
	$('.liquid').imgLiquid();

	var defaults = {
		items: 4,
		itemWidth: 300,
		itemsDesktop: [1260, 3],
		itemsTablet: [930, 2],
		itemsMobile: [620, 1],
		navigation: true,
		navigationText: false
	}
	/*-----------------
		CAROUSELS
	-----------------*/
	$('#owl-f-products').owlCarousel(defaults);

	$('#owl-bs-products').owlCarousel(defaults);

	$('#owl-blog-posts').owlCarousel(defaults);

	$('#owl-brands').owlCarousel({
		items: 5,
		itemWidth: 250,
		itemsDesktop: [1260, 4],
		itemsTablet: [1024, 3],
		itemsTabletSmall: [860, 2],
		itemsMobile: [460, 1],
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

	var carousels = ['#owl-f-products', '#owl-bs-products', '#owl-blog-posts', '#owl-brands'];

	registerCarousels(carousels);

	/*-----------------
		ACCORDION
	-----------------*/
	$('.accordion').xmaccordion({
		startOpen: 1,
		easing: 'swing',
		speed: 600
	});

	/*-----------------
		QUICK VIEW
	-----------------*/
	$('.quick-view').magnificPopup({
		type: 'inline',
		removalDelay: 500,
		callbacks: {
		    beforeOpen: function() {
		       this.st.mainClass = this.st.el.attr('data-effect');
		    }
		},
		closeMarkup: '<a class="button mfp-close"></a>'
	});

	/*------------------
		COMPARE MODAL
	------------------*/
	$('.cmp-popup').magnificPopup({
		type: 'inline',
		removalDelay: 500,
		callbacks: {
		    beforeOpen: function() {
		       this.st.mainClass = this.st.el.attr('data-effect');
		    }
		},
		closeMarkup: ''
	});

	/*----------------------
		PICTURE SELECTION
	----------------------*/
	$('.picture-views > li').bind('click', selectPicture);

	function selectPicture() {
		if($(this).hasClass('selected')) return;

		var me = $(this),
			src = me.find('figure > img').attr('src'),
			image = me.parents().eq(1).find('> div figure > img');
			
		// remove 'selected' class on all items	
		clearSelection(me.parent().children());

		// select current item and change image
		me.addClass('selected');
		image.attr('src', src);
		// refresh imgLiquid on changed image
		image.parent().imgLiquid();
	}

	function clearSelection(items) {
		items.each(function() {
			$(this).removeClass('selected');
		});
	}

	/*-----------------
		COLORPICKER
	-----------------*/
	var colorpicker = $('.colorpicker');

	colorpicker.children('li').each(function() {
		var $me = $(this),
			color = $me.children('span').attr('data-color');
		// set color based on data attribute
		$me.children('span').css('backgroundColor', color);
		// if selected default, set its color
		if($me.hasClass('selected')) $me.css('outlineColor', color);

		$me.bind('click', {color: color}, selectItem);
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