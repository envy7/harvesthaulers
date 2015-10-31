$(document).ready(function(){
	$('.ham').click(function(){
		$('#sidenav').css('transform','translateX(0%)');
		$('#close').css('transform','translateX(-100%)');
	});
});