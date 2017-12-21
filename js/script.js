
$(document).ready(function(){
	$('.tab-tab a').on('click',  function(e){
		e.preventDefault();
		var attribute = $(this).attr('href');
		if(!$(this).hasClass('active')&&!$(attribute).hasClass('active')){
			$('.tab-tab a').removeClass('active');
			$(this).addClass('active');
			$('.tab-cont li').removeClass('active');
			$(attribute).addClass('active');
		}
	})
});
