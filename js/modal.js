


// 모달 클릭했을때 이벤트
$( ".location" ).click(function() {
    var index = $( ".location" ).index( this );
    modalOpen(index);
});

//모달 닫기 버튼 클릭했을때 이벤트
$( ".modal_close" ).click(function() {
    var index = $( ".modal_close" ).index( this );
    modalClose(index);
});

//영역 바깥 클릭했을때 이벤트
window.onclick = function(event) {
    if (event.target.className == "modal") {
        event.target.style.display = "none";
    }
};

//모달 열기
function modalOpen(idx) {
    var modals = document.getElementsByClassName("modal");
    modals[idx].style.display = "block";
}

//모달 닫기
function modalClose(idx) {
    var modals = document.getElementsByClassName("modal");
    modals[idx].style.display = "none";
}


