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




