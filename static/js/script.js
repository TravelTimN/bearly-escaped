// preloader
$(window).on("load", function () {
    $("#preloader").fadeOut();
});

$(document).ready(function () {

    // preloader
    $("#preloader").fadeIn();
    $("#preloader").fadeOut(1000);

    // Initialize Materialize Elements
    function initMaterialize() {
        $(".modal").modal({
            opacity: 0.85,
            preventScrolling: true
        });
        $(".sidenav").sidenav({
            edge: "right",
            draggable: true,
            preventScrolling: true
        });
        $(".dropdown-trigger").dropdown({
            hover: true,
            coverTrigger: false,
            constrainWidth: false
        });
        $(".collapsible").collapsible();
    }
    initMaterialize();

    // smooth scroll
    $("a").click(function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $("html, body").animate({
                scrollTop: $(hash).offset().top - 65
            }, 250);
        }
    });

    // navbar hover color
    $("#dropdown-rooms a").mouseenter(function () {
        $("a.dropdown-trigger").addClass("orange-text-be")
    });
    $("#dropdown-rooms a").mouseleave(function () {
        $("a.dropdown-trigger").removeClass("orange-text-be")
    });

    // cookie notice
    $("#cookies-div").slideToggle(2000);
    $(".btn-cookie-ok").click(function () {
        $("#cookies-div").slideToggle("slow");
    });
    $(".btn-cookies-agree").click(function () {
        $("#modal-cookies").css("display", "none");
        $("#cookies-div").slideToggle("slow");
    });

    // count-up function
    $(".price-counter").each(function () {
        $(this).prop("Counter", 0).animate({
            Counter: $(this).text()
        }, {
            duration: 10000,
            easing: "swing",
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

    // fade + pan into view (https://codepen.io/SitePoint/pen/MwEaQM)
    var $animation_elements = $(".fadeIn, .fadeUp, .fadeLeft, .fadeRight");
    var $window = $(window);

    function check_if_in_view() {
        var window_height = $window.height();
        var window_top_position = $window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);
        $.each($animation_elements, function () {
            var $element = $(this);
            var element_height = $element.outerHeight();
            var element_top_position = $element.offset().top;
            var element_bottom_position = (element_top_position + element_height);
            if ((element_bottom_position >= window_top_position) &&
                (element_top_position <= window_bottom_position)) {
                $element.addClass("inView");
            } else {
                $element.removeClass("inView");
            }
        });
    }
    $window.on("scroll resize", check_if_in_view);
    $window.trigger("scroll");

    // update navlinks if section in-view
    $(window).on("scroll resize", function () {
        var home = $("#landing-page").offset().top - 200;
        var about = $("#about").offset().top - 200;
        var gameRooms = $("#game-rooms").offset().top - 200;
        var pricing = $("#pricing").offset().top - 200;
        var faqs = $("#faqs").offset().top - 200;
        var contact = $("#contact").offset().top - 200;
        if ($(window).scrollTop() >= home && $(window).scrollTop() <= about) {
            $("#navlink-home").addClass("active-section");
        } else {
            $("#navlink-home").removeClass("active-section");
        }
        if ($(window).scrollTop() >= about && $(window).scrollTop() <= gameRooms) {
            $("#navlink-about").addClass("active-section");
        } else {
            $("#navlink-about").removeClass("active-section");
        }
        if ($(window).scrollTop() >= gameRooms && $(window).scrollTop() <= pricing) {
            $("#navlink-rooms").addClass("active-section");
        } else {
            $("#navlink-rooms").removeClass("active-section");
        }
        if ($(window).scrollTop() >= pricing && $(window).scrollTop() <= faqs) {
            $("#navlink-pricing").addClass("active-section");
        } else {
            $("#navlink-pricing").removeClass("active-section");
        }
        if ($(window).scrollTop() >= faqs && $(window).scrollTop() <= contact) {
            $("#navlink-faqs").addClass("active-section");
        } else {
            $("#navlink-faqs").removeClass("active-section");
        }
        if ($(window).scrollTop() >= contact) {
            $("#navlink-contact").addClass("active-section");
        } else {
            $("#navlink-contact").removeClass("active-section");
        }
    });

    // get current year for Copyright
    $("#year").html(new Date().getFullYear());

});
