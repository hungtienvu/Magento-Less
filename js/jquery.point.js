//jquery for spotlight product
//ver 1.0.0
jQuery(document).ready(function() {
	var spotlight_img_width = jQuery('.cal-point-width');
	var points = jQuery('.spotlight-img a.point');
	
      //initialize
	var width_array = new Array();
	jQuery('.cal-point-width p').each(function(index, width_p) {
		width_array[index] = jQuery(width_p).width();
		//width_array[index] = jQuery(width_p).width();
	});
	jQuery(spotlight_img_width).hide();
	points.each(function(index, point) {
		//initialize
		var point_position = jQuery(point).attr("data-position");
		var point_position_slip = point_position.split(",");
		//add position
		
		jQuery(point).css({
				'left': point_position_slip[0]+'px',		
				'top':point_position_slip[1]+'px'
		});
	     	//add width, 11 is the dotline margin
		var width_left = width_array[index]+11;
		if(jQuery(point).attr("data-side")){
			jQuery(point).find('.container span').width(width_left).css('right', -width_left+'px');
		}else{
			jQuery(point).find('.container span').width(width_left).css('left', -width_left+'px');
		}
	});

      jQuery(window).scroll(function(event) {
            /* Act on the event */
                  if(jQuery(document).scrollTop() > jQuery('.product-spotlight').offset().top){
            jQuery('.product-spotlight span.container span').css('opacity', 1);
                  }else{
                        jQuery('.product-spotlight span.container span').css('opacity', 0);
                  }
      });


});