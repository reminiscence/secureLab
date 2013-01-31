$(function(){
	var $wrap = $("#wrap"),
	$contents = $('#contents'),
	$notice = $('.notice img'),
	$members = $('.members img'),
	$publications = $('.publications img'),
	$project = $('.project img'),
	$gallery = $('.gallery img'),
	$link = $('.link img'),
	$home = $('.home'),
	$student = $('.student'),
	$menu_contents=$('.menu_contents'),
	$doc =$(document.body),
	$alumni = $('.alumni');
	
	var this_url = document.location.href;

	$doc.bind('aaaa', function(){
		$content = $('#contents');
		$content.css('height', '2400px');
		console.log("test");
		console.log($contents);
		console.log($content);
	});

	//slide show
	// Create slideshow instances
	if(this_url == 'http://localhost/~newlife8837/secureLab/index.html' || this_url == 'http://localhost/~newlife8837/secureLab/index.html#' || this_url == 'http://192.168.0.63/~newlife8837/secureLab/index.html#' || this_url == 'http://192.168.0.63/~newlife8837/secureLab/index.html'){
		/*var $s = $('.slideshow').slides(),

		    // Access an instance API
		    api = $s.eq(0).data('slides');
		*/
		$('.camera_wrap').camera({ //here I declared some settings, the height and the presence of the thumbnails 
			height: '41%',
			thumbnails: true,
			time : 4000
		});
		$wrap.fadeIn(1000);
	}

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

	$members.click(function(e){
		e.preventDefault();
		$contents.empty();
		changeContents('./members.html', 1000);

	});

	$student.click(function(e){
		e.preventDefault();
		$menu_contents.empty();

		$menu_contents.append('<iframe src="./member_student.html" width="725px" height="1700px" frameborder="0" scrolling="no" style="float:left;"></iframe>');
		$contents=$('#contents', parent.parent.document);
		$parentFrame = $('.member_main', parent.document);
		$contents.css('height', '1700px');
		$parentFrame.css('height', '1700px');
	});

	$alumni.click(function(e){
		e.preventDefault();
		$menu_contents.empty();

		$menu_contents.append('<iframe src="./member_alumni.html" width="725px" height="2300px" frameborder="0" scrolling="no" style="float:left;"></iframe>');
		$contents=$('#contents', parent.parent.document);
		$parentFrame = $('.member_main', parent.document);
		$contents.css('height', '2300px');
		$parentFrame.css('height', '2300px');
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

function changeContents(name, height){
	var $contents = $('#contents');
	var $remote = $('.remote');
	$contents.append('<iframe class="member_main" src="./members.html" frameborder="0" scrolling="auto" style="float:left; width:980px; height :' +height+'px;" ></iframe>');
	$contents.css('height',height+'px');
	$remote.fadeIn(1000);
}