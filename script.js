$(document).ready(function(){
	$recipes = $(".recipes .recipe-item");
	$recipes_length = $recipes.length;
	$footer = $("footer");

	if ($recipes_length > 3) {
		$footer.css("position", "relative");
	} else {
		$footer.css("position", "fixed");
	}

	if ($recipes_length > 1) {
		$(".recipes .recipe-item:last-child").css("border-bottom", "hidden");
	}
});