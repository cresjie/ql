$(function(){
	$('#room-images').lightSlider({
		item: 1,
		gallery: true,
		mode: "slide",
        useCSS: true,
        slideEndAnimation: true,
        currentPagerPosition: 'middle',
	});

	$('.scrollbar-rail').scrollbar();
})