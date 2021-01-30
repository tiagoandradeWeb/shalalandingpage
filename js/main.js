$(window).on("load", function(){
    $(".preloader").fadeOut("slow");
})
$(document).ready(function(){
    /********************NavBar Shrink****************************/
    $(window).on("scroll", function(){
        if($(this).scrollTop() > 90){
            $(".navbar").addClass("navbar-shrink");
        }else{
            $(".navbar").removeClass("navbar-shrink");
        }
    });
    /********************Vídeo Popup****************************/
    const videoSrc = $("#player-1").attr("src");
    $('.video-play-btn, .video-popup').on("click", function(){
        if($(".video-popup").hasClass("open")){
            $(".video-popup").removeClass("open");
            $("#player-1").attr("src", "");
        }else{
            $(".video-popup").addClass("open");
            if($("#player-1").attr("src") ==""){
                $("#player-1").attr("src", videoSrc);
            }
        }
    });
    /********************Features Carousel****************************/
    $('.features-carousel').owlCarousel({
        loop:true,
        margin:0,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });

    /********************Screenshot Carousel****************************/
    $('.screenshots-carousel').owlCarousel({
        loop:true,
        margin:0,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    });

    /********************Testimonials Carousel****************************/
    $('.testimonials-carousel').owlCarousel({
        loop:true,
        margin:0,
        autoplay: true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
    });

    /********************Team Carousel****************************/
    $('.team-carousel').owlCarousel({
        loop:true,
        autoplay: true,
        margin:0,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
    });

     /********************Page Scrolling - Scrollit****************************/
     $.scrollIt({
         topOffset: -50,
     });

     /********************Page Scrolling - Scrollit****************************/
     $(".nav-link").on("click", function(){
         $(".navbar-collapse").collapse("hide");
     });
     /********************Toggle Theme - Light & Dark Mode****************************/7
     function toggleTheme(){
         if(localStorage.getItem("shala-theme") !== null){
             if(localStorage.getItem("shala-theme") === "dark"){
                 $("body").addClass("dark");
             }else{
                $("body").removeClass("dark");
             }
         }
         updateIcon();
     }
     toggleTheme();
     $(".toggle-theme").on("click", function(){
        $("body").toggleClass("dark");
        if($("body").hasClass("dark")){
            localStorage.setItem("shala-theme", "dark");
        }else{
            localStorage.setItem("shala-theme", "light");
        }
     });
     function updateIcon(){
         if($('body').hasClass("dark")){
             $('.toggle-theme i').removeClass("fa-moon");
             $('.toggle-theme i').addClass("fa-sun");
         }else{
            $('.toggle-theme i').removeClass("fa-sun");
            $('.toggle-theme i').addClass("fa-moon");
         }
     }
});