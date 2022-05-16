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
        // autoplay: true,
        margin:10,
        navText: ["<i class='fa-solid fa-arrow-left'></i>","<i class='fa-solid fa-arrow-right'></i>"],
        responsive:{ 
            0:{ 
                nav:false,
                items:1,
            },
            600:{ 
                nav:true,
                items:2,
            }  ,
            900:{ 
                nav:true,
                items:4,
            } 
        }
    })
})