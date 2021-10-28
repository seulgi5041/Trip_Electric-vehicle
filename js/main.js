


// 메인_ 여행전 확인 애니메이션
$(document).ready(function(){
    $(window).scroll(function(){
        $('#check_box').each(function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1','margin-right':'0px'},600);
            }
            
        }); 
    });
});



// 일정 부분 넘으면 상단버튼 나옴
$(function (){
    $(window).scroll(function(){
        // 250 넘으면 상단버튼 나옴
        if ($(this).scrollTop() > 250 ) {
            $(".topBtn").fadeIn();
            // $(".topBtn").css('up', $("#main_content").offset().up());
        }else {
            $(".topBtn").fadeOut();
        };
    });

    // top버튼 누르면 위로 올라감.
    $(".topBtn").click(function(){
        $("html, body").animate({
            scrollTop : 0
        }, 500);
        return false;
    });
});


