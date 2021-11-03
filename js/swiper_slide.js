
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
    var index = swiper1.clickedIndex;
    modalOpen(index);
    // console.log(index);
});

// 모달 닫기 버튼 클릭 했을 때 이벤트
$( ".modal_close" ).click(function() {
    var index = $( ".modal_close" ).index( this );
    modalClose(index);
});

//영역 바깥 클릭했을때 닫음
window.onclick = function(event) {
    if (event.target.className == "modal") {
        event.target.style.display = "none";
    }
};


// 모달 열기
function modalOpen(idx) {
    var modals = document.getElementsByClassName("modal");
    modals[idx].style.display = "block";
}

//모달 닫기
function modalClose(idx) {
    var modals = document.getElementsByClassName("modal");
    modals[idx].style.display = "none";
}