    $(document).ready(function(){
        $(window).scroll(function(){
            var scroll = $(window).scrollTop();
            if (scroll > 1080) {
                $("#main_header > .gnb_container").css("background" , "rgba(15,76,129,0.3)");
            } else{
            $("#main_header > .gnb_container").css("background" , "rgba(0,0,0,0)");   
            };
        });
    });


    