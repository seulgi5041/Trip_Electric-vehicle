
// // Modal을 가져옵니다.
// var modals = document.getElementsByClassName("modal");
// // Modal을 띄우는 클래스 이름을 가져옵니다.
// // 모달 창 손봐야함


// var btns = document.getElementsByClassName("btn");
// // Modal을 닫는 close 클래스를 가져옵니다.
// var closeModal = document.getElementsByClassName("close");
// var funcs = [];

// // Modal을 띄우고 닫는 클릭 이벤트를 정의한 함수
// function Modal(num) {
//     return function() {
//     // 해당 클래스의 내용을 클릭하면 Modal을 띄웁니다.
//     btns[num].onclick =  function() {
        // modals[num].style.display = "block";
//         console.log(num);
//     };

//     // X 버튼 클릭하면 Modal이 닫습니다.
//     closeModal[num].onclick = function() {
//         modals[num].style.display = "none";
//         console.log(num);
//         };
//     };
// }

// // 원하는 Modal 수만큼 Modal 함수를 호출해서 funcs 함수에 정의합니다.
// for(var i = 0; i < btns.length; i++) {
//     funcs[i] = Modal(i);
// }

// // 원하는 Modal 수만큼 funcs 함수를 호출합니다.
// for(var j = 0; j < btns.length; j++) {
//     funcs[j]();
// }

//     // Modal 영역 밖을 클릭하면 Modal을 닫습니다.
// window.onclick = function(event) {
//     if (event.target.className == "modal") {
//         event.target.style.display = "none";
//     }
// };


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
window.onclick(function () {
    
});


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

 