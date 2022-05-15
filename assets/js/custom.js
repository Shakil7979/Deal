$(document).ready(function(){
    $('.banner-slider').owlCarousel({ 
        loop:true, 
        nav:true,
        dots:false, 
        items:1,
        autoplay: true
    }) 
    $('.main-pack').owlCarousel({ 
        loop:true, 
        nav:true,
        dots:false, 
        items:4,
        autoplay: true,
        margin:10,
        navText: ["<i class='fa-solid fa-arrow-left'></i>","<i class='fa-solid fa-arrow-right'></i>"],
        responsive:{ 
            0:{ 
                nav:false,
            },
            600:{ 
                nav:true,
            } 
        }
    })
})