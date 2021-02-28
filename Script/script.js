$(document).ready(function(){
	$('.header__burger').click(function() {
		$('.header__nav').toggleClass('up__nav_height-100');
		$('.nav__list').toggleClass('show_list');
	});
	$('.nav__list').children().each(function(index, item){
		$(item).click(function(){
			$('.header__nav').toggleClass('up__nav_height-100');
			$('.nav__list').toggleClass('show_list');
		});
	});
	var first_image_src = $('#first_image').attr('src');
	var second_image_src = $('#second_image').attr('src');
	var third_image_src = $('#third_image').attr('src');
	$('#left_button').click(function(){
		$('#first_image').toggleClass('scroll_item_left');
		changeBcgLeft();
		$('#first_item').css('background-repeat', 'no-repeat');
		$('#first_item').css('background-size', '100% 100%');
		setTimeout(scrollLeft, 1000);
		setTimeout(function(){ $('#first_image').toggleClass('scroll_item_left'); }, 1100);
	});
	$('#right_button').click(function(){
		$('#first_image').toggleClass('scroll_item_right');
		changeBcgRight();
		$('#first_item').css('background-repeat', 'no-repeat');
		$('#first_item').css('background-size', '100% 100%');
		setTimeout(scrollRight, 1000);
		setTimeout(function(){ $('#first_image').toggleClass('scroll_item_right');}, 1100);
	});
	function changeBcgLeft(){
		if($('#first_image').attr('src') == first_image_src){

			$('#first_item').css('background', 'url(\'' + second_image_src + '\')');

		} else if($('#first_image').attr('src') == second_image_src){

			$('#first_item').css('background', 'url(\'' + third_image_src + '\')');

		} else if($('#first_image').attr('src') == third_image_src){

			$('#first_item').css('background', 'url(\'' + first_image_src + '\')');

		}
	}
	function changeBcgRight(){
		if($('#first_image').attr('src') == first_image_src){

			$('#first_item').css('background', 'url(\'' + third_image_src + '\')');

		} else if($('#first_image').attr('src') == second_image_src){

			$('#first_item').css('background', 'url(\'' + first_image_src + '\')');

		} else if($('#first_image').attr('src') == third_image_src){

			$('#first_item').css('background', 'url(\'' + second_image_src + '\')');

		}
	}
	function scrollLeft(){
		if($('#first_image').attr('src') == first_image_src){
			$('#first_image').attr('src', second_image_src);
			$('#second_image').attr('src', third_image_src);
			$('#third_image').attr('src', first_image_src);
		} else if($('#first_image').attr('src') == second_image_src){
			$('#first_image').attr('src', third_image_src);
			$('#second_image').attr('src', first_image_src);
			$('#third_image').attr('src', second_image_src);
		} else if($('#first_image').attr('src') == third_image_src){
			$('#first_image').attr('src', first_image_src);
			$('#second_image').attr('src', second_image_src);
			$('#third_image').attr('src', third_image_src);	
		}
	}
	function scrollRight(){
		if($('#first_image').attr('src') == first_image_src){

			$('#first_image').attr('src', third_image_src);

			$('#second_image').attr('src', first_image_src);

			$('#third_image').attr('src', second_image_src);

		} else if($('#first_image').attr('src') == second_image_src){

			$('#first_image').attr('src', first_image_src);

			$('#second_image').attr('src', second_image_src);

			$('#third_image').attr('src', third_image_src);

		} else if($('#first_image').attr('src') == third_image_src){

			$('#first_image').attr('src', second_image_src);

			$('#second_image').attr('src', third_image_src);

			$('#third_image').attr('src', first_image_src);	
		}
	}
});