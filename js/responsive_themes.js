

//lnb 하위에 나오게 구현하기
$(function(){
    var gnbFlag = false;
    var gnbIndex;

    // 제이쿼리는 $("선택자") 필수! css개념과 유사.
    $(".nav").on({
        "mouseenter" : function() {
            /*  하위메뉴 마우스 대면 보이기 lnb show   */ 

            if (gnbIndex != undefined) {
                $(".lnb > ul li").eq(gnbIndex).css("display", "none");
            }

            // .index : 태그의 index 번호를 가져오는 것이다.
            // $(this) 는? : 이벤트가 발생하는 태그, 태그들의 정보를 가지고 있다. 즉, (.nav li) 태그를 가리키는 것.
            gnbIndex = $(this).index();
            gnbFlag = true;

            // 미리 css로 class속성 지정 해 준 class의 속성을 삭제(disapper가 붙음), 추가(appear가 붙음).
            // remove 속성 해 준 이유는 혹시라도 계속 add로 남아있을까봐.
            $(".lnb_container").removeClass("disappear");
            $(".lnb_container").addClass("appear");
            // 실질적으로 보이는 부분. 위에 두개속성은 애니메이션 속성을 주기위한것임.
            // .show : 해당 태그의 display를 none에서 block으로 해주는 속성.
            $(".lnb_container").show();
            $(".lnb_container").css("z-index", "2");

            // eq: gnbIndex = $(this).index();태그를 통해서 gnb-li 각각 인덱스와 동일한 lnb div그룹의 배열 번호를 가져와라.
            $(".lnb > ul li").eq(gnbIndex).css("display","block"); //인라인 태그의 우선순위를 이용 
            
            // .css는 css의 속성을 바꿔줄 수 있는 태그. display에서 block으로 바꿔라.
        },
        "mouseleave" : function() {
        }
    });

    $(".lnb_container").on({
        "mouseleave" : function() {

            if(gnbFlag) {
                $(".lnb_container").removeClass("appear");
                $(".lnb_container").addClass("disappear");
                $(".lnb_container").hide();
            } else {
                return;
            }
        }
    });

    // 넓이가 767 이상이되면 하위메뉴 자동으로 해제
    $(window).resize(function() {
        var width = $(window).width(); 

        if(width < 767) {
            $(".lnb_container").hide();
        } 
    });



    
    /* 모바일 햄버거 메뉴 클릭 시 나오게 하기 */
    $(".trigger").on({
        "click" : function(){

            // 햄버거 메뉴 버튼이 보일때(햄버거 메뉴가 -교재215p-visible상태인가?로 판단)
            if($(".moblie_hamburger").is(":visible")) {
                /* 모바일 닫기 버튼 show */
                $(".moblie_hamburger").hide();
                $(".moblie_close").show();
                // $("#main_header .nav > li").css("display", "block");

                /* 모바일 전체 메뉴 show */
                $("#main_header").height();
                $("#fullpage").hide();
                $("#mobile_menu").show();
                //#mobile_menu 하위 태그 초기화
                $("#mobile_menu").empty(); 
                $(".nav li").eq(4).hide();



                var nav = $(".nav").clone();
                var sns = $(".sns").clone();
                //복제한 nav를 넣어서 id값이 모바일메뉴인 아이에 덧붙여준다.
                $("#mobile_menu").append(nav);
                $("#mobile_menu").show();
                $("#mobile_menu").append(sns);
                $("#mobile_menu").show();
                
            } else {
                // 닫기 메뉴 버튼이 보일때
                /* 모바일 햄버거 버튼 show */ 
                $(".moblie_hamburger").show();
                $(".moblie_close").hide();

                /* 전체 메뉴 show */
                $("#main_header").height();
                $("#fullpage").show();
                $("#mobile_menu").hide();
            }

        }

    });

    $(window).resize(function() {
        var width = $(window).width(); //사용자가 보는 뷰포트 넓이 구하기

        // 넓이가 767 이상이되면 모바일버전 해제 후 pc버전으로 변경
        if(width > 767) {
            $(".nav li").eq(4).show()

            if($("#mobile_menu").is(":visible")) {
                $(".moblie_hamburger").show();
                $(".moblie_close").hide();

                /* 모바일 전체 메뉴 show */
                $("#main_header").height();
                $("#fullpage").show();
                $("#mobile_menu").hide();

            }
        }
    });

});

