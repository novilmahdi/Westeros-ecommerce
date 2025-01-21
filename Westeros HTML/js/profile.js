(function($) {
	/*----------------------
		LIQUID IMAGES
	----------------------*/
	$('.liquid').imgLiquid();

	var $profileTable = $('.profile-info');

	$profileTable.children('.profile-header').each(function() {
		$(this).bind('click', toggleProfileData);
	});

	function toggleProfileData() {
		var $profileHeader = $(this),
			$profileData = $profileHeader.next(),
			easing = 'swing',
			speed = 600;

		if($profileData.hasClass('hidden')) {
			$profileHeader.find('.vertical').css('display', 'none');
			$profileData.removeClass('hidden');
			$profileData.slideDown(speed, easing);
		} else {
			$profileHeader.find('.vertical').css('display', 'block');
			$profileData.addClass('hidden');
			$profileData.slideUp(speed, easing);
		}
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
			$('body').unbind('touchmove');
			
			// Close shop sidebar
			$shopSidebar.removeClass('open');
		} else {
			// Desktop disable scroll
			$('body').addClass('no-scroll');

			// Mobile disable scroll
			$('body').bind('touchmove', function(e){e.preventDefault()});

			// Open shop sidebar
			$shopSidebar.addClass('open');
		}
	}
	
})(jQuery);