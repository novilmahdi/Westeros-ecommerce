$(function(){
	var navigation = $('nav > ul > li'),
		subNavigation = navigation.find('ul > li'),
		item = $('section > article');
		navigation
			.eq(0)
			.addClass('selected')
			.children('ul')
			.slideToggle();
		item
			.eq(0)
			.show();

	navigation.on('click', openSection);
	subNavigation.on('click', openSubSection);

	function openSection() {
		var option = $(this),
			id = option.children('a').attr('href');		
		if(!option.hasClass('selected')) {
			// unselect previous option
			var prevId = navigation
							.filter('.selected')
							.children('a')
							.attr('href');
			navigation
				.filter('.selected')
				.removeClass('selected')
				.children('ul')
				.slideToggle();
			// hide previous option content
			item
				.filter(prevId)
				.hide();

			// hide sub option content
			prevId = subNavigation
							.filter('.selected')
							.children('a')
							.attr('href');
			item
				.filter(prevId)
				.hide();

			// unselect sub option
			subNavigation
				.filter('.selected')
				.removeClass('selected');
			
			// select current option
			option.addClass('selected');
			// show current option content
			item
			.filter(id)
			.show();
			// show sub options
			option.children('ul').slideToggle();
		} else {
			// hide sub option content
			var prevId = subNavigation
							.filter('.selected')
							.children('a')
							.attr('href');
			item
				.filter(prevId)
				.hide();

			// unselect sub option
			subNavigation
				.filter('.selected')
				.removeClass('selected');
			// show current option content
			item
			.filter(id)
			.show();
		}
	}

	function openSubSection(e) {
		e.stopPropagation();
		var option = $(this),
			id = option.children('a').attr('href');		
		if(!option.hasClass('selected')) {
			var prevId = subNavigation
							.filter('.selected')
							.children('a')
							.attr('href');
			item
				.filter(prevId)
				.hide();
			var prevId = navigation
							.filter('.selected')
							.children('a')
							.attr('href');
			item
				.filter(prevId)
				.hide();

			subNavigation
				.filter('.selected')
				.removeClass('selected');

			option.addClass('selected');
			item
			.filter(id)
			.show();
		}
	}
});