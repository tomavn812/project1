/*
Name: Ho Khoa Dang Bao
GT email address: kho8@gatech.edu
§ Collaboration:"I worked on the homework assignment alone, using only this semester's course materials." 
*/
$(document).ready(function() {
	
	$("ul#slides").cycle({
		fx: 'shuffle',
		pause: 2,
		speed: 420,
		prev: '#back',
		next: '#forward'
	});
	$("#slideImg").hover(function() {
		$("ul#navigation").fadeIn();
	},
		function() {
		$("ul#navigation").fadeOut();
	});
});