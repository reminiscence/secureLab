$(function(){
	var $wrap = $("#wrap"),
	$contents = $('#contents'),
	$notice = $('.notice'),
	$members = $('.members'),
	$publications = $('.publications'),
	$project = $('.project'),
	$gallery = $('.gallery'),
	$link = $('.link'),
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
	if(this_url == 'http://reminiscence.github.com/secureLab/index.html' || this_url == 'http://reminiscence.github.com/secureLab/index.html#'){
		/*var $s = $('.slideshow').slides(),

		    // Access an instance API
		    api = $s.eq(0).data('slides');
		*/
		$('.camera_wrap').camera({ //here I declared some settings, the height and the presence of the thumbnails 
			height: '41%',
			thumbnails: true,
			time : 4000
		});
		$wrap.fadeIn(500);
	}

	$members.click(function(e){
		e.preventDefault();
		$contents.empty();
		changeContents('./members.html', 1000);

	});

	$student.click(function(e){
		e.preventDefault();

		changeMembers('./member_student.html', 1700);
	});

	$alumni.click(function(e){
		e.preventDefault();

		changeMembers('./member_alumni.html', 2300);
	});
});

function changeMembers(name, height){
	var $menu_contents=$('.menu_contents');
	
	$menu_contents.empty();

	$menu_contents.append('<iframe src="'+name+'" width="725px" height="'+height+'px" frameborder="0" scrolling="no" style="float:left;"></iframe>');
	$contents=$('#contents', parent.parent.document);
	$parentFrame = $('.member_main', parent.document);
	$contents.css('height', height+'px');
	$parentFrame.css('height', height+'px');
}

function changeContents(name, height){
	var $contents = $('#contents');
	var $remote = $('.remote');
	$contents.append('<iframe class="member_main" src="'+name+'" frameborder="0" scrolling="auto" style="float:left; width:980px; height :' +height+'px;" ></iframe>');
	$contents.css('height',height+'px');
	$remote.fadeIn(1000);
}