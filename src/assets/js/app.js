//=require jquery.min.js

// to inlude bootstrap plugins add "=" sign below
// require javascripts/bootstrap/*.*
//=require javascripts/bootstrap.min.js

//=require slick.min.js
//=require isotope.pkgd.min.js
//=require map.js

;(function($){

	var worksGrid = $('.ba-portfolio');
	$(window).on('load', function () {
		worksGrid.isotope({
			// options
			itemSelector: '.ba-portfolio__item',
			percentPosition: true
			// masonry:{
			// 	columnWidth: '.grid-sizer'
			// }
			// layoutMode: 'fitRows'

		});
		$('.ba-portfolio-filter').on( 'click', '[data-filter]', function() {
			var filterValue = $(this).attr('data-filter');
			worksGrid.isotope({ filter: filterValue });
			$('.active[data-filter]').removeClass('active');
			$(this).addClass('active');
		});

	});

	$(document).ready(function(){
		var $slider = $('.ba-slider');

		$slider.slick({
			dots: true,
			infinite: false,
			arrows: false,
			autoplay: true,
			autoplaySpeed: 4000
		});
	});

})(jQuery);






















