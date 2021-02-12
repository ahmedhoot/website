$(document).ready(function(){
    $('.navbar-toggler').click(function(){
        $('.navbar-toggler').toggleClass('active')
             
    });

    $('.navbar-nav .nav-item').click(function(){
        $(this).addClass('active').siblings().removeClass('active')
    });

    $(window).scroll(function(){
        var fixheader = $(window).scrollTop()
        if(fixheader > 100){
            $('.navbar').addClass('fixed').slideDown(200)
        }
        else{
         $('.navbar').removeClass('fixed')
 
        }
    }); 
    
    $('.buttons button').click(function(){
        $(this).addClass('buttonstyle').siblings().removeClass('buttonstyle')
        var CssFilter=$(this).attr('id');
        if(CssFilter=='all'){
            $('.miximages > div').fadeIn()
        }
        else{
            $('.miximages > div').fadeOut()
            $('.miximages').contents().filter('.'+ CssFilter).fadeIn()

        }
    })

    $('.test-popup-link').magnificPopup({
        type: 'image'
        // other options
    });

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    })

    
    $(window).scroll(function(){
        var countimer = $(this).scrollTop();
        if(countimer > 1250){
            $('.timer').countTo();
        }
        else{
            $('.timer').countTo('stop')
        }
    })
    
    $(window).scroll(function(){
        var fixTop=$(window).scrollTop()
        if(fixTop>300){
            $('svg.svg-inline--fa.fa-angle-double-up.fa-w-10.top').show(1000)
        }
        else{
            $('svg.svg-inline--fa.fa-angle-double-up.fa-w-10.top').hide(1000)
        }
    });

    $('svg.svg-inline--fa.fa-angle-double-up.fa-w-10.top').click(function(){
        $('html,body').animate({scrollTop:0},1000)
    });

    //alert($('.specifications').offset().top)
    

    


        
  });

  
