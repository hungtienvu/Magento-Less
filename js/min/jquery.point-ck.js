jQuery(document).ready(function(){var t=jQuery(".cal-point-width"),r=jQuery(".spotlight-img a.point"),i=new Array;jQuery(".cal-point-width p").each(function(t,r){i[t]=jQuery(r).width()}),jQuery(t).hide(),r.each(function(t,r){var n=jQuery(r).attr("data-position"),e=n.split(",");jQuery(r).css({left:e[0]+"px",top:e[1]+"px"});var o=i[t]+11;jQuery(r).attr("data-side")?jQuery(r).find(".container span").width(o).css("right",-o+"px"):jQuery(r).find(".container span").width(o).css("left",-o+"px")}),jQuery(window).scroll(function(t){jQuery(document).scrollTop()>jQuery(".product-spotlight").offset().top?jQuery(".product-spotlight span.container span").css("opacity",1):jQuery(".product-spotlight span.container span").css("opacity",0)})});