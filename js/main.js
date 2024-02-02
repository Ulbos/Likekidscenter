$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:true,
        dots:true,
        //  autoplay:true,
        // autoplaySpeed:1500,
        // autoplayTimeout:2000,
        // autoWidth:true,
        dotsEach:true,
        // stagePadding:100,
        // center:true,
        navText:[
            '<img src="img/arrow-left.svg" alt="arrow-left">',
            ' <img src="img/arrow-right.svg" alt="arrow-right">'
        ],
        responsive:{
            0:{
                items:1,
                navText:[]
            },
            768:{
                items:2,
                dots:true,
                dots:true,
                
                navText:[]
            },
            1000:{
                items:3
            }
        }
    });
});
