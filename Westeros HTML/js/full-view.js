(function($) {
	/*-----------
		TABS
	-----------*/
	$('.description-tab').xmtab({
		fade: true,
		startOpen: 2
	});

	/*-----------
		RATER
	-----------*/
	var $rater = $('.rater'),
		$rateItem = $rater.children('li');

	$rateItem.bind('click', rate);

	function rate() {
		var $me = $(this),
			selectedIndex = $me.index(),
			$current = $me.parent();

		if($me.hasClass('filled')) {
			$current.children('li').each(function() {
				if($(this).index() > selectedIndex) {
					$(this).removeClass('filled');
				}
			});
		} else {
			$current.children('li').each(function() {
				if($(this).index() <= selectedIndex) {
					$(this).addClass('filled');
				}
			});
		}
	}

})(jQuery);