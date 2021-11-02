
var swiper1 = new Swiper('.swiper1', {
    slidesPerView: 3.5,
    spaceBetween: 32,
    scrollbar: {
    el: '.swiper-scrollbar',
    hide: false,
    },
});


var swiper2 = new Swiper('.swiper2', {
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




// 스와이퍼 1 클릭했을 때 이벤트
swiper1.on('click', function () {
    // console.log(swiper1.clickedIndex);

    var index = $( ".card-location" ).index( this );
    modalOpen(index);

    console.log(modalOpen);

});