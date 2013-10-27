$(document).ready(function(){ 
	$(".popup").hide();
						   
	$("#basecamp").mouseenter(function() {
		$("#headers").hide();
		$("#bcpop").show();
	$(this).mouseleave(function() {
		$("#bcpop").hide();
		$("#headers").show();
	});
	});
	$("#highrise").mouseenter(function() {
		$("#headers").hide();
		$("#hrpop").show();
	$(this).mouseleave(function() {
		$("#hrpop").hide();
		$("#headers").show();
	});
	});
	$("#campfire").mouseenter(function() {
		$("#headers").hide();
		$("#cfpop").show();
	$(this).mouseleave(function() {
		$("#cfpop").hide();
		$("#headers").show();
	});
	});
});