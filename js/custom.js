var moving = false; //현재 움직이는 상황 여부를 점검하는 변수
var num = 0; //현재 카테고리 번호를 나타내는 변수

function doLayout() {
  //num값에 의해서 레이아웃이 정해지는 함수를 작성
  var t = window.innerHeight * -1 * num;
  //window의 내부 높이를 의미
  //메인 카테고리의 위치를 정해주는 값을 t변수에 대입

  $("#wrap").css({ top: t + "px" }); //얻어진 t 변수로 section 클래스의 top 속성이 정해진다.
  $("#wrap .page")
    .css({ width: window.innerWidth, height: window.innerHeight })
    .removeClass("loading");
  //page 클래스를 스타일 작업합니다.
}

$(function () {
  doLayout(); //페이지가 로딩이 되면 함수를 호출

  // mouse wheel event
  $("#wrap").mousewheel(function (e) {
    if (!moving) {
      //애니메이션이 발생되지 않은 상태
      moving = true; // 현재 세션에 클래스는 동작중
      var t = $(this).offset().top; //세션 클래스의 상단 좌표를 t변수에 대입
      var h = window.innerHeight; //윈도우의 높이 정보를 h변수에 대입
      if (e.deltaY == -1) {
        //위로 휠 이벤트가 발생될 경우
        if (num < 5) {
          num += 1;
          t -= h;
        }
      } else if (e.deltaY == 1) {
        //아래로 휠 이벤트가 발생될 경우
        if (num > 0) {
          num -= 1;
          t += h;
        }
      }

      $("#wrap").animate({ top: t + "px" }, 500, function () {
        moving = false;
        $(".aside .item").removeClass("on");
        $(".aside .item").eq(num).addClass("on");
        console.log(t);
      });
      if ((t < -1070) & (t > -1080)) {
        $("#box1 div").stop().animate({ right: "0%" }, 2500);
        $("#box2").stop().animate({ right: "0%" }, 1400);
        $("#box3").stop().animate({ left: "0%" }, 1000);
        $("#box4").stop().animate({ right: "0%" }, 1200);
        $("#l_right > div").stop().animate({ left: "0%" }, 2000);
      } else {
        $("#box1 div").stop().animate({ right: "-70%" }, 500);
        $("#box2").stop().animate({ right: "-50%" }, 500);
        $("#box3").stop().animate({ left: "-50%" }, 500);
        $("#box4").stop().animate({ right: "-50%" }, 500);
        $("#l_right > div").stop().animate({ left: "-100%" }, 500);
      }
      if ((t < -2150) & (t > -2160)) {
        $("#a_img1").stop().animate({ left: "2px" }, 1400);
        $("#a_img2").stop().animate({ left: "-2px" }, 1400);
        $("#a_right > div").stop().animate({ left: "0%" }, 2000);
      } else {
        $("#a_img1").stop().animate({ left: "-100%" }, 500);
        $("#a_img2").stop().animate({ left: "100%" }, 500);
        $("#a_right > div").stop().animate({ left: "-100%" }, 500);
      }

      if ((t < -3220) & (t > -3230)) {
        $("#s_img1").stop().animate({ left: "0%" }, 1400);
        $("#s_img2").stop().animate({ right: "0%" }, 1400);

        $("#bar1").stop().animate({ width: "90%" }, 1500);
        $("#bar2").stop().animate({ width: "90%" }, 1500);
        $("#bar3").stop().animate({ width: "80%" }, 1500);
        $("#bar4").stop().animate({ width: "70%" }, 1500);
        $("#bar5").stop().animate({ width: "80%" }, 1500);
      } else {
        $("#s_img1").stop().animate({ left: "-50%" }, 500);
        $("#s_img2").stop().animate({ right: "-50%" }, 500);

        $("#bar1").stop().animate({ width: "0%" }, 1500);
        $("#bar2").stop().animate({ width: "0%" }, 1500);
        $("#bar3").stop().animate({ width: "0%" }, 1500);
        $("#bar4").stop().animate({ width: "0%" }, 1500);
        $("#bar5").stop().animate({ width: "0%" }, 1500);
      }
    }
  });
});
