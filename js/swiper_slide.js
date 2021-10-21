
var swiper = new Swiper('.swiper1', {
    slidesPerView: 3.5,
    spaceBetween: 32,
    scrollbar: {
    el: '.swiper-scrollbar',
    hide: false,
    },
});


var swiper = new Swiper('.swiper2', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});