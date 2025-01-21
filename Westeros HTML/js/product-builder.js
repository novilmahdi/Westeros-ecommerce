(function($) {
	/*----------------------
		PRODUCT BUILDER
	----------------------*/
	var path = 'images/product_builder/',
		shirtsPath = path + 'shirt_colors/',
		womenShirtsPath = shirtsPath + 'women/',
		menShirtsPath = shirtsPath + 'men/',
		stampsPath = path + 'shirt_stamps/',
		currentShirtsPath = womenShirtsPath,

		$productBuilder = $('.product-quick-view.builder'),
		$shirtSelect = $('#shirt_select'),
		$stampSelect = $('#stamp_select'),
		$shirtImage = $productBuilder.find('.product-photo').find('img'),
		$stampImage = $productBuilder.find('.product-stamp').find('img'),
		$colorpicker = $productBuilder.find('.colorpicker');

		/*-------------------------
			SHIRT COLOR SELECTOR
		-------------------------*/
		$colorpicker.children('li').bind('click', selectShirtColor);

		function selectShirtColor() {
			var $me = $(this),
				selectedColorName = $me.children('span').attr('data-color-alias'),
				newPath = currentShirtsPath + selectedColorName + '.png';

			$shirtImage.attr('src', newPath);
			// update imgLiquid plugin
			$shirtImage.parent().imgLiquid();
		}

		/*---------------------
			STAMP SELECTOR
		---------------------*/
		$stampSelect.bind('change', selectStamp);

		function selectStamp() {
			var newPath = stampsPath + $(this).val() + '.png';

			$stampImage.attr('src', newPath);
			$stampImage.parent().imgLiquid();
		}

		/*------------------------
			SHIRT TYPE SELECTOR
		------------------------*/
		$shirtSelect.bind('change', selectShirtType);

		function selectShirtType() {
			var $me = $(this);

			if($me.val() == 'men') {
				currentShirtsPath = menShirtsPath;
			}

			if($me.val() == 'women') {
				currentShirtsPath = womenShirtsPath;
			}

			getCurrentColor().trigger('click');
		}

		function getCurrentColor() {
			var selectedColor = null;

			$colorpicker.children('li').each(function() {
				if($(this).hasClass('selected')) {
					selectedColor = $(this);
				}
			});

			return selectedColor;
		}

})(jQuery);