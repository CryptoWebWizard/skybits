(function($){

// Shuffle function from: http://james.padolsey.com/javascript/shuffling-the-dom/
    
$.fn.shuffle = function() {

        var allElems = this.get(),
            getRandom = function(max) {
                return Math.floor(Math.random() * max);
            },
            shuffled = $.map(allElems, function(){
                var random = getRandom(allElems.length),
                    randEl = $(allElems[random]).clone(true)[0];
                allElems.splice(random, 1);
                return randEl;
            });
        
        this.each(function(i){
            $(this).replaceWith($(shuffled[i]));
        });
        
        return $(shuffled);
    };
})(jQuery);
   
$(function(){
       
   $("#all").click(function(){
       $(".grid-item").fadeIn(500);//discounted-item
       $(".event-category button").removeClass("active");//catpicker 
       $(this).addClass("active");
       return false;
   });
   
   $(".filter").click(function(){
        var thisFilter = $(this).attr("id");
        $(".grid-item").hide(500);
        $("."+ thisFilter).fadeIn(500);
        $(".event-category button").removeClass("active");
        $(this).addClass("active");
        return false;
   });
   
   $(".grid-item").shuffle();

});