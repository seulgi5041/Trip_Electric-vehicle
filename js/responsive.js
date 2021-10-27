$(function(){
    $(".nav li").mouseenter(function(){
        $(this).children("ul").show();
        $(this).find("li").addClass("on");
    });
    $(".nav li").mouseleave(function(){
        $(this).children("ul").hide();
        $(this).find("li").removeClass("on");
    });
});



/* 모바일 햄버거 메뉴 클릭 시 나오게 하기 */
$(".trigger").on({
    "click" : function(){

        // 햄버거 메뉴 버튼이 보일때(햄버거 메뉴가 -교재215p-visible상태인가?로 판단)
        if($(".mobile.hamburger img").is(":visible")) {
            /* 모바일 닫기 버튼 show */
            $(".mobile.hamburger img").hide();
            $(".mobile.close img").show();
            // $("#main_header .nav > li").css("display", "block");
            
        } else {
            // 닫기 메뉴 버튼이 보일때
            /* 모바일 햄버거 버튼 show */ 
            $(".mobile.hamburger img").show();
            $(".mobile.close img").hide();
        }

    }

});


