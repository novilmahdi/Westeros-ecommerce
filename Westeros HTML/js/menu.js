(function($) {
	/*---------------
		MAIN MENU
	---------------*/
	var $mainMenu = $('#main-menu').children('ul').children('li'),
		$submenuSmall = $('.submenu-small').children('li');

	$mainMenu.bind('mouseenter', showMenuDropdown);
	$mainMenu.bind('mouseleave', hideMenuDropdown);

	function hideMenuDropdown() {
		$(this)
			.children('ul')
			.stop()
			.animate({
				opacity: 0,
				height: 'toggle'
			}, 300);
	}

	function showMenuDropdown() {
		$(this)
			.children('ul')
			.stop()
			.animate({
				opacity: 1,
				height: 'toggle'
			}, 300);
	}

	/*------------------
		MOBILE MENU
	------------------*/
	var $mobileMenu = $('.mobile-menu'),
		$pullNav = $('.pull-nav'),
		$selectableMenu = $mobileMenu.find('.selectable');

		$pullNav.bind('click', toggleMobileMenu);

		function toggleMobileMenu() {
			if($mobileMenu.hasClass('open')) {
				// Desktop enable scroll
				$('body').removeClass('no-scroll');

				// Mobile enable scroll
				// $('body').unbind('touchmove');
				
				// Hide dark cover
				$('.mobile-menu-cover').removeClass('visible');
				// Close mobile menu
				$mobileMenu.removeClass('open');
			} else {
				// Desktop disable scroll
				$('body').addClass('no-scroll');

				// Mobile disable scroll
				// $('body').bind('touchmove', function(e){e.preventDefault()});

				// Show dark cover
				$('.mobile-menu-cover').addClass('visible');
				// Open mobile menu
				$mobileMenu.addClass('open');
			}
		}

		$mobileMenu.children('ul').children('li').bind('click', toggleMobileSubmenu);

		function toggleMobileSubmenu(e) {
			var $me = $(this);
			
			$me.children('ul').slideToggle(300, 'swing');
		}

		$selectableMenu.children('li').bind('click', selectMenuOption);

		function selectMenuOption(e) {
			var $me = $(this),
				$selectedOption = $me.children('a'),
				value = $selectedOption.text();

			if($me.hasClass('selected')) return;

			removeMenuSelection($me.parent());

			$me.addClass('selected');
			$selectedOption.parents().eq(2).children('a').children('span').text(value);
		}

		function removeMenuSelection(menu) {
			menu.children('li').each(function() {
				$(this).removeClass('selected');
			});
		}
})(jQuery);