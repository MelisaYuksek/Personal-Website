const header = doucment.querySelector("header");

window.addEventListener("scroll" , function(){
    header.classList.toggle("sticky", window.scrollY>80);
})












//-------------slider------------
/* var swiper=new Swiper(".container-box", {
    slidesPerView: 3,
    spaceBetween:30,
    slidesPerGroup:3,
    loop:true,
    loopFillGroupWithBlank: true,
    pagination:{
        el:".swiper-pagination",
        clickable:true,
    },
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    },
}); */