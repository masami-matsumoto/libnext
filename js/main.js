$(function () {
    $(".hamburger").click(function () {
        $(this).toggleClass("active");
        $("#header .navi").toggleClass("active");
    });

    $(".navi a").click(function () {
        $(".hamburger").removeClass("active");
        $("#header .navi").removeClass("active");
    });
});

$(function () {
    $("#introduction .tour1 .btn").click(function () {
        $(this).hide();
        $("#introduction .tour1 .description").css({
            "height": "auto",
            "overflow": "visible"
        });
    });

    $("#introduction .tour2 .btn").click(function () {
        $(this).hide();
        $("#introduction .tour2 .description").css({
            "height": "auto",
            "overflow": "visible"
        });
    });

});

$(function () {
    $("#map .spot1 .spot-btn").mouseover(function () {
        $("#map .spot1 .spot-img").show();
    }).mouseout(function () {
        $("#map .spot1 .spot-img").hide();
    });

    $("#map .spot2 .spot-btn").mouseover(function () {
        $("#map .spot2 .spot-img").show();
    }).mouseout(function () {
        $("#map .spot2 .spot-img").hide();
    });

    $("#map .spot3 .spot-btn").mouseover(function () {
        $("#map .spot3 .spot-img").show();
    }).mouseout(function () {
        $("#map .spot3 .spot-img").hide();
    });

    $("#map .spot4 .spot-btn").mouseover(function () {
        $("#map .spot4 .spot-img").show();
    }).mouseout(function () {
        $("#map .spot4 .spot-img").hide();
    });

    $("#map .spot5 .spot-btn").mouseover(function () {
        $("#map .spot5 .spot-img").show();
    }).mouseout(function () {
        $("#map .spot5 .spot-img").hide();
    });
})

$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $("#fixed-btn").fadeIn();
        } else {
            $("#fixed-btn").fadeOut();
        }
    });
});