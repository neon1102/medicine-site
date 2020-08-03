$(document).ready(function(){
    var i=0;
    
    $('.next').click(function() {
        if(i < 2) { i++; animateLeft(i); }
    });
    
    $('.prev').click(function() {
        if(i > 0){ i--; animateRight(i); }
    });
    
    function animateLeft(num){
        $('.slider').animate({marginLeft: -num*800+"px"}, 1000);
    }
    
    function animateRight(num){
        $('.slider').animate({marginLeft: -num*800+"px"}, 1000);
    }
    
    $('.slider_box').hover(function(){
        $('.next').animate({right: '10px'}, 500);
        $('.prev').animate({left: '10px'}, 500); 
    }, function(){
        $('.next').animate({right: '-30px'}, 500);
        $('.prev').animate({left: '-30px'}, 500);
    })
    
/*  
    $('.account').hover(function(){$('.account').children('ul').slideDown(250);},
                        function(){$('.account').children('ul').slideUp(250)
    })
*/

    $('.account').click(function(){
        $('#acc').slideToggle(500);
    })

    $('.title_txt').click(function(){
        $('.txt').slideToggle(1000);
    })
    
    $('.aside ul li').click(function(){
        $(this).find('ul').slideToggle(250)

    })
})