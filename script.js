
$(document).ready(function(){
	// getting number of items in the recipes list 
	$recipes = $(".recipes .recipe-item");
	$recipes_size = $recipes.length;
	$footer = $("footer");
     
    
    console.log("Hello World: " + $recipes_size);

    /* fixes the footer to the bottom of the page making sure
    not to overlap the content */
    if ($recipes_size > 4) {
    	$footer.css("position", "relative");

    } else {
    	$footer.css("position", "fixed");
    }
});