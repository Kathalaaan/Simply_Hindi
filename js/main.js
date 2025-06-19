(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-150px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Modal Video
    var $videoSrc;
    $('.btn-play').click(function () {
        $videoSrc = $(this).data("src");
    });
    console.log($videoSrc);
    $('#videoModal').on('shown.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    })
    $('#videoModal').on('hide.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc);
    })


    // Product carousel
    $(".product-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        loop: true,
        center: true,
        dots: false,
        nav: false,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
			0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });



    // Testimonial carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        loop: true,
        dots: true,
        nav: false,
    });
    
})(jQuery);


const text = document.querySelector('.text p')

text.innerHTML = text.innerHTML.split("")
.map((char ,i)=>`<span style="transform:rotate(${i*10}deg)">${char}</span>`)
.join("")



let num1 = document.querySelector('.num1')
let num2 = document.querySelector('.num2')
let num3 = document.querySelector('.num3')

const CounterUpAnimation = (number , start,end ,duration)=>{
   let startTimestamp = null;
   const step = (tiemstamp)=>{
    if(!startTimestamp){
        startTimestamp = tiemstamp
    }

    let prograss = Math.min((tiemstamp - startTimestamp) / duration , 1)
    number.innerHTML = Math.floor(prograss * (end - start) + start) + 'k+'

    if(prograss <1){
        window.requestAnimationFrame(step)
    }
   } 
   window.requestAnimationFrame(step)
}



const navbar = document.querySelector('.nav-bar')


gsap.from(navbar.children , {
    duration:1,
    delay:.5,
    opacity:0,
    y:50,
    stagger:{
        amount:.4,
    }
})


gsap.from('.side-one h1' , {
    x:-200,
    skewX:65,
    opacity:0,
    duration:1,
    delay:1,
    stagger:{
        amount:.4
    }
})


gsap.from('.skew' ,{
    duration:1,
    delay:.5,
    opacity:0,
    y:50,
    stagger:{
        amount:.4
    }
})

gsap.from('.statistic' , {
    delay:2,
    autoAlpha:0,
    stagger:
        .10
    
})


gsap.fromTo('.circle-text' ,{
    opacity:0,
    scale:0,
    rotation:400
}, {
    duration:1,
    delay:2, 
    opacity:1,
    scale:1, rotation:0
})








setTimeout(()=>{
    CounterUpAnimation(num1 , 0 , 100 , 5000)
    CounterUpAnimation(num2 , 0 , 32 , 2000)
    CounterUpAnimation(num3 , 0 , 50 , 3000)
} , 1000)

