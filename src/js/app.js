$(function () {
	// scrollTo's
	$(".about-scrollTo").on("click", function(event) {
		event.preventDefault();
		$(window).scrollTo($("#about"), 400);
	});
	$(".exp-scrollTo").on("click", function(event) {
		event.preventDefault();
		$(window).scrollTo($("#experience"), 300);
	});
	$(".projects-scrollTo").on("click", function(event) {
		event.preventDefault();
		$(window).scrollTo($("#projects"), 200);
	});
	$(".contact-scrollTo").on("click", function(event) {
		event.preventDefault();
		$(window).scrollTo($("#contact"), 200);
	});
	
 	//Fade Ins
	$(window).scroll( function(){
    
        $('.hide-experience').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
       
            bottom_of_window = bottom_of_window - 500;  
          
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'}, 500);
                    
            }
        }); 
    
    });

	$(window).scroll( function(){
   
        $('.hide-projects').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
       
            bottom_of_window = bottom_of_window - 500;  
          
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'}, 500);
                    
            }
        }); 
        
    });
	$(window).scroll( function(){
   
        $('.hide-contact').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
       
            bottom_of_window = bottom_of_window - 500;  
          
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'}, 500);
                    
            }
        }); 
        
    });
});
