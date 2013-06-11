/* table-hover.js 1.0.0
 * http://github.com/mitris/table-hover
 * Copyright (c) 2013 Dmitry Korniychuk; Licensed MIT */
;
(function($) {
	$.fn.extend({
		tableHover: function(options) {
			/* @todo http://www.local-guru.net/blog/2010/10/29/table-column-highlighting-with-jquery */
			var defaults = {colClass: "hover"};
			options = $.extend(defaults, options);
			return this.each(function() {
				$(this).off('mouseover mouseleave').on('mouseover mouseleave', 'th, td', function(e) {
					var row = $(this).closest('tr'), table = $(this).closest('table');
					if (e.type == 'mouseover') {
						if ($(this).closest('tbody').size()) {
							row.addClass("hover");
						}
						table.find('tbody td:nth-child(' + ($(this).index() + 1) + ')').addClass('hover');
					} else {
						if ($(this).closest('tbody').size()) {
							row.removeClass("hover");
						}
						table.find('tbody td:nth-child(' + ($(this).index() + 1) + ')').removeClass('hover');
					}
				});
			});
		}
	});
})(jQuery);