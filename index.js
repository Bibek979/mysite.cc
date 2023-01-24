$(document).ready(function(){
    
    $(".layer1").animate({
        opacity: 0.5,
    },3000,"linear", function(){});

    $(window).scroll(function(){
        $("#will-disappear").fadeOut();
        $("#first-name").animate({fontSize: '4.5rem'});
    })
    // code for RWD mobile menu
    var menuOpen = false;
    $("#menu-icon").click(function() {
        if(menuOpen === false){
            menuOpen = true;
            console.log("Wrking")
            $("#menu-icon-img").attr("class", "menu-icon-img-cls")
            $("#menu-close-icon").attr("class", "menu-close-icon-active")
            $("#sub-menu-id").attr("class", "sub-menu-active")
        }
        else{
            menuOpen = false;
            $("#menu-icon-img").attr("class", "menu-icon-img-class")
            $("#menu-close-icon").attr("class", "menu-close-icon-disabled")
            $("#sub-menu-id").attr("class", "sub-menu")
        }
    })
})