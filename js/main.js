

$(function (){
    $(window).scroll(function(){
        // 250 넘으면 상단버튼 나옴
        if ($(this).scrollTop() > 250 ) {
            $(".topBtn").fadeIn();
            $(".topBtn").css('up', $("#main_content").offset(),up());
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