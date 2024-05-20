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
    var book_table = new Swiper(".book-table-img-slider", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        speed: 2000,
        effect: "coverflow",
        coverflowEffect: {
            rotate: 3,
            stretch: 2,
            depth: 100,
            modifier: 5,
            slideShadows: false,
        },
        loopAdditionSlides: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
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
    

    // ******************hobiler api***************

    // fetch("https://pokeapiçco/api/v2/pokemon/spongebob")
    // .then(response => {
    //     if(!response.ok){
    //         throw new Error("Could  not fetch resource");
    //     }
    //     return response.json();
    // })

    // .then(data => console.log(data.id))
    // .catch(error=>console.error(error))

    
        
function getPokemon(e) {
    const name = document.querySelector("#pokemonName").value;
    const pokemonName = lowerCaseName(name);
  
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => response.json())
      .then((data) => {
        document.querySelector(".pokemonBox").innerHTML = `
        <div>
          <img
            src="${data.sprites.other["official-artwork"].front_default}"
            alt="Pokemon name"
          />
        </div>
        <div class="pokemonInfos">
          <h1>${capitalizeFirstLetter(data.name)}</h3>
         
        </div>`;
      })
      .catch((err) => {
        document.querySelector(".pokemonBox").innerHTML = `
        <h4>Pokemon Bulunamadı 😞</h4>
        `;
        console.log("Pokemon not found", err);
      });
  
    e.preventDefault();
  }

    
    





// **************** login *******************

document.getElementById("loginForm").addEventListener("submit", function(event){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username.trim() === '' || password.trim() === '') {
        alert("Kullanıcı adı ve şifre alanları boş bırakılamaz.");
        event.preventDefault();
    }
});




})