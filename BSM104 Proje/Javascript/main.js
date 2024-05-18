$(document).ready(function ($){
    "use strict";

    var icerik_slider = new Swiper(".icerik-slider", {
        slidesPerView: 3,
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        speed: 2000,

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1.2,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            },
        },
    });



    document.getElementById('kesfet').addEventListener('click', function() {
        document.getElementById('altSayfa').scrollIntoView({ behavior: 'smooth' });
      });



    jQuery(".menu-toggle").click(function (){
        jQuery(".main-navigation").toggleClass("toggled");
    });

    jQuery(".header-menu ul li a").click(function(){
        jQuery(".main-navigation").removeClass("toggled");
    });

    gsap.registerPlugin(ScrollTrigger);

    var elementFirst = document.querySelector('.site-header');
    ScrollTrigger.create({
        trigger : "body",
        start : "30px top",
        end: "bottom bottom" ,

        onEnter : () => myFunction(),
        onLeaveBack: () => myFunction(),
    });

    function myFunction(){
        elementFirst.classList.toggle('sticky_head');
    }

    var scene=$(".js-parallax-scene").get(0);
    var parallaxInstance = new Parallax(scene);


    window.addEventListener('scroll', function() {
        var header = document.querySelector('header');
        var scrollPosition = window.scrollY;
    
        // Sayfa belirli bir miktar kaydırıldığında header'ın arka plan rengini değiştir
        if (scrollPosition > 100) {
            header.style.backgroundColor = 'rgba(39, 58, 93, 20%)';
        } else {
            header.style.backgroundColor = 'transparent'; // Sayfa en üstte olduğunda header'ın arka plan rengini şeffaf olarak ayarla
        }
    });
    











})