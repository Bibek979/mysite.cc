$(document).ready(function(){
    
    $(".layer1").animate({
        opacity: 0.5,
    },3000,"linear", function(){});

    $(window).scroll(function(){
        $("#will-disappear").fadeOut();
        $("#first-name").animate({fontSize: '4.5rem'});
    })
})