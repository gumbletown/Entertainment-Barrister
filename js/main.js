
// LOADER
$(window).bind('load',function(){
	var p = 0;
	$('#loadBar .fill').animate({width: '100%'},1000);
	$('#loadBar span').animate({left: '100%'},1000);
	var per = setInterval(function(){
		$('#loadBar span').text(p++);
		if(p>100){
			clearInterval(per);
		}
	},10);
	setTimeout(function(){
		$('#loader').fadeOut(500);
		$('#global').delay(500).animate({opacity: 1},750);		
	},1250);

	// About Layout
	var vW = $(window).width();
	if(vW>736){
		var arrow = (function(){
			var vH   = $(window).height(),
				top  = $('#global').offset().top, // Scroll fix
				base = -top+$('#about .col.right .wrapper > div').offset().top+25,
				h    = vH-base-61;
			$('#arrowDown').css('height',h);
		});
		arrow();
		$(window).resize(arrow);
	}
});



