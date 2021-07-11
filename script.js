$(document).ready(function(){
	$recipes = $(".recipes .recipe-item");
	$recipes_length = $recipes.length;
	$footer = $("footer");
    
    // keep footer recipes list 
	if ($recipes_length > 3) {
		$footer.css("position", "relative");
	} else {
		$footer.css("position", "fixed");
	}

	// remove border from last recipe item element
	$(".recipes .recipe-item:last-child").css("border-bottom", "hidden");
	
});