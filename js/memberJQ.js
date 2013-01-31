$(function(){
	var $notice = $('.notice img'),
	$members = $('.members img'),
	$publications = $('.publications img'),
	$project = $('.project img'),
	$gallery = $('.gallery img'),
	$link = $('.link img'),
	$home = $('.home');

	//slide show
	// Create slideshow instances
	var $s = $('.slideshow').slides(),

	    // Access an instance API
	    api = $s.eq(0).data('slides');


	//menu img overlay
	$notice.hover(function(){
		$(this).attr('src','./img/mainImg/Notice2.jpg');
	}, function(){
		$(this).attr('src','./img/mainImg/Notice.jpg');
	});

	$members.hover(function(){
		$(this).attr('src','./img/mainImg/Members2.jpg');
	}, function(){
		$(this).attr('src','./img/mainImg/Members.jpg');
	});

	$publications.hover(function(){
		$(this).attr('src','./img/mainImg/Publications2.jpg');
	}, function(){
		$(this).attr('src','./img/mainImg/Publications.jpg');
	});

	$project.hover(function(){
		$(this).attr('src','./img/mainImg/Project2.jpg');
	}, function(){
		$(this).attr('src','./img/mainImg/Project.jpg');
	});

	$gallery.hover(function(){
		$(this).attr('src','./img/mainImg/Gallery2.jpg');
	}, function(){
		$(this).attr('src','./img/mainImg/Gallery.jpg');
	});

	$link.hover(function(){
		$(this).attr('src','./img/mainImg/link2.jpg');
	}, function(){
		$(this).attr('src','./img/mainImg/link.jpg');
	});


	// $more.click(function(e){
	// 	if($moreClickCnt == 0){
	// 		e.preventDefault();	
	// 		$paper = $('.paper');
	// 		$.get('jst/recentMorePaper.jst', function(tmpl){
	// 			$.tmpl(tmpl).appendTo($paper);	
	// 		});

	// 		$moreClickCnt++;
	// 	} else {
	// 		$moreClickCnt = 0;
	// 	}
		
	// });
});