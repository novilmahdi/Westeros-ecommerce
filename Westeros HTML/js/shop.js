(function($) {
	/*----------------------
		LIQUID IMAGES
	----------------------*/
	$('.liquid').imgLiquid();

	/*-----------------
		ACCORDION
	-----------------*/
	$('.accordion').xmaccordion({
		startOpen: 2,
		easing: 'swing',
		speed: 600
	});

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

	/*-------------------------
		PRODUCT VIEW SELECT
	-------------------------*/
	var $display = $('.display'),
		$previews = $display.children();

	$previews.bind('click', selectView);

	function selectView() {
		if($(this).hasClass('selected')) return;

		var me = $(this),
			view = 'product-list';

		view += ' ' + me.attr('class');
		// remove 'selected' class on all items	
		clearSelection(me.parent().children());
		me.addClass('selected');
		me.parents().eq(3).find('.product-list').removeClass().addClass(view);
	}

	/*---------------------
		SIDEBAR CONTROL
	---------------------*/
	var $sidebarControl = $('.sidebar-control'),
		$shopSidebar = $('.shop-sidebar');

	$sidebarControl.bind('click', toggleShopSidebar);

	function toggleShopSidebar() {
		if($shopSidebar.hasClass('open')) {
			// Desktop enable scroll
			$('body').removeClass('no-scroll');

			// Mobile enable scroll
			// $('body').unbind('touchmove');
			
			// Close shop sidebar
			$shopSidebar.removeClass('open');
		} else {
			// Desktop disable scroll
			$('body').addClass('no-scroll');

			// Mobile disable scroll
			// $('body').bind('touchmove', function(e){e.preventDefault()});

			// Open shop sidebar
			$shopSidebar.addClass('open');
		}
	}

	/*-----------
		RANGE
	-----------*/
	$('.range-slider').jRange({
	    from: 1,
	    to: 300,
	    step: 1,
	    format: '$%s',
	    width: 260,
	    showLabels: true,
	    showScale: false,
	    isRange : true,
	    theme: "theme-westeros"
	});
		
})(jQuery);