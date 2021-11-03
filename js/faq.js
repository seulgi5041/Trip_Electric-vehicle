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
            $(".hidden_box").eq(0).css("display","inline-block");
            $(".hidden_box").eq(1).show();
            $(".hidden_box").eq(1).css("display","inline-block");
            $(".hidden_box").eq(2).show(); 
            $(".hidden_box").eq(2).css("display","inline-block");
        } 

        if (clickFlagBig == 1) {
            $(".hidden_box").eq(3).show();
            $(".hidden_box").eq(3).css("display","inline-block");
            $(".hidden_box").eq(4).show();
            $(".hidden_box").eq(4).css("display","inline-block");
            $(".hidden_box").eq(5).show();
            $(".hidden_box").eq(5).css("display","inline-block");
        }

        clickFlagBig--;
        // console.log(width); 

    } else if (width >= 563) {
        //세 번을 클릭해야
        if (clickFlagMid == 3) {
            $(".hidden_box").eq(0).show();
            $(".hidden_box").eq(0).css("display","inline-block");
            $(".hidden_box").eq(1).show();
            $(".hidden_box").eq(1).css("display","inline-block");
        } 

        if (clickFlagMid == 2) {
            $(".hidden_box").eq(2).show();
            $(".hidden_box").eq(2).css("display","inline-block");
            $(".hidden_box").eq(3).show();
            $(".hidden_box").eq(3).css("display","inline-block");
        }

        if (clickFlagMid == 1) {
            $(".hidden_box").eq(4).show();
            $(".hidden_box").eq(4).css("display","inline-block");
            $(".hidden_box").eq(5).show();
            $(".hidden_box").eq(5).css("display","inline-block");
        }
        
        clickFlagMid--;
        // console.log(width);

        
    } else {
       //6번을 클릭해야 나올수 있는
        if (clickFlagSmall == 6) {
        $(".hidden_box").eq(0).show();
        $(".hidden_box").eq(0).css("display","inline-block");
    }

    if (clickFlagSmall == 5) {
        $(".hidden_box").eq(1).show();
        $(".hidden_box").eq(1).css("display","inline-block");
    }

    if (clickFlagSmall == 4) {
        $(".hidden_box").eq(2).show();
        $(".hidden_box").eq(2).css("display","inline-block");
    }

    if (clickFlagSmall == 3) {
        $(".hidden_box").eq(3).show();
        $(".hidden_box").eq(3).css("display","inline-block");
    }

    if (clickFlagSmall == 2) {
        $(".hidden_box").eq(4).show();
        $(".hidden_box").eq(4).css("display","inline-block");
    }

    if (clickFlagSmall == 1) {
        $(".hidden_box").eq(5).show();
        $(".hidden_box").eq(5).css("display","inline-block");
    }

    clickFlagSmall--;
    // console.log(width);
    }
});

