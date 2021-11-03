var clickFlagBig = 2;
var clickFlagMid = 3;
var clickFlagSmall = 6;

$('.hvr-icon').click(function(){
    var width = $(window).width();   

    // $(".hidden_box").each(function(index, item){
    //     $(".hidden_box").addClass('li_0'+ index);
    // });

    if (width >= 1115) {
        //2번을 클릭해야

        // for(var i=0; i < clickFlagBig; i++) {
        //     $(".hidden_box").eq(i).show();

        // }
        
        if (clickFlagBig == 2) {
            $(".hidden_box").eq(0).show();
            $(".hidden_box").eq(1).show();
            $(".hidden_box").eq(2).show();
        } 

        if (clickFlagBig == 1) {
            $(".hidden_box").eq(3).show();
            $(".hidden_box").eq(4).show();
            $(".hidden_box").eq(5).show();
        }

        clickFlagBig--;

        console.log(width);     
    } else if (width >= 570) {
        //3번을 클릭해야
        clickFlagMid--;
        console.log(width);
    } else {
        //6번을 클릭해야 나올수 있는
        clickFlagSmall--;
        console.log(width);
    }
});