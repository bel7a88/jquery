$('#bold').click(function() { 
	$('#text').css("font-weight","bold");
	})
	
$('#italic').click(function() { 
	$('#text').css("font-style","italic");
	})
	
$('#underline').click(function() { 
	$('#text').css("text-decoration","underline");
	})	
	

$('#mySelect').click(function() { 
	$('#text').css("font-size",$('#mySelect').val());
	})

$('#police').click(function() { 
	$('#text').css("font-family",$('#police').val());
	})

