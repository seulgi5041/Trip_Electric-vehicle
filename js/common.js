$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 200) {
            $("#main_header > .gnb_container").css("background" , "rgba(15,76,129,0.8)");
            $("#main_header > .gnb_container").css("z-index", "2");
        } else{
        $("#main_header > .gnb_container").css("background" , "rgba(0,0,0,0)");   
        };
    });
});

$(document).ready(function(){
    $(window).scroll(function(){
        var scroll_path = $(window).scrollTop();
        if (scroll_path > 200) {
            $(".path").css("background" , "#BFFF00");
            $(".path").css("z-index", "2");
        } else{
        $(".path").css("background" , "#BFFF00");
        $(".path").css("z-index", "2");   
        };
    });
});
