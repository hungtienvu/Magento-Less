jQuery(document).ready(function() {
	//footer sticky
	function footerSticky(){
		//initialize
		var scrolltop = jQuery(window).scrollTop();
		var window_height = jQuery(window).height();
		var footer_sticky = jQuery('.flexible-footer');
		var footer = jQuery('footer');
		//var compare_footer = footer.offset().top - footer_sticky.outerHeight();
		//logic
		if( (scrolltop + window_height) < (footer.offset().top + footer_sticky.outerHeight()) ){
			footer_sticky.addClass('sticky');
		}else{
			footer_sticky.removeClass('sticky');
		}
	}
	footerSticky();
	jQuery(window).scroll(function(event) {
		footerSticky();
	});	
	jQuery(window).resize(function(event) {
		footerSticky();
	});
});