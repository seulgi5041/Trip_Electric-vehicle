// window.onload = function() {

//     function onClick() {
//         document.querySelector('.modal_wrap').style.display ='block';
//         document.querySelector('.black_bg').style.display ='block';
//     }   
//     function offClick() {
//         document.querySelector('.modal_wrap').style.display ='none';
//         document.querySelector('.black_bg').style.display ='none';
//     }

//     document.getElementById('modal_btn').addEventListener('click', onClick);
//     document.querySelector('.modal_close').addEventListener('click', offClick);

// };



// https://eunyoe.tistory.com/27



// function openModal(modalname) {
//     document.get
//     $("." + modalname).fadeIn(300);
// }

// // 팝업 닫기
// $('.popup .close').click(function() {
//     $(this).parent().fadeOut(300);
// });




// <div class="popup modal1">
//    <a href="#none" class="close">X</a>
// 레이어팝업 1
// </div>
// <div class="popup modal2">
//   <a href="#none" class="close">X</a>
// 레이어팝업 2
// </div>
// <div class="popup modal3">
//   <a href="#none" class="close">X</a>
// 레이어팝업 3
// </div>


// Modal을 가져옵니다.
var modals = document.getElementsByClassName("modal");
// Modal을 띄우는 클래스 이름을 가져옵니다.
var btns = document.getElementsByClassName("btn");
// Modal을 닫는 close 클래스를 가져옵니다.
var spanes = document.getElementsByClassName("close");
var funcs = [];

// Modal을 띄우고 닫는 클릭 이벤트를 정의한 함수
function Modal(num) {
    return function() {
    // 해당 클래스의 내용을 클릭하면 Modal을 띄웁니다.
    btns[num].onclick =  function() {
        modals[num].style.display = "block";
        console.log(num);
    };

    // <span> 태그(X 버튼)를 클릭하면 Modal이 닫습니다.
    spanes[num].onclick = function() {
        modals[num].style.display = "none";
        };
    };
}

// 원하는 Modal 수만큼 Modal 함수를 호출해서 funcs 함수에 정의합니다.
for(var i = 0; i < btns.length; i++) {
    funcs[i] = Modal(i);
    }

    // 원하는 Modal 수만큼 funcs 함수를 호출합니다.
    for(var j = 0; j < btns.length; j++) {
    funcs[j]();
    }

    // Modal 영역 밖을 클릭하면 Modal을 닫습니다.
    window.onclick = function(event) {
        if (event.target.className == "modal") {
            event.target.style.display = "none";
    }
};