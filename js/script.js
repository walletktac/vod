$(document).ready(function ()
{


    $('.slider-similar').slick({
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        prevArrow: '<button class="prev-slick-arrow"><i  class="flaticon-left-arrow"></i></button>',
        nextArrow: '<button class="next-slick-arrow"><i  class="flaticon-right-arrow"></i></button>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows:false,
                    dots: false
                }
            }
        ]
    });
});


$(document).ready(function ()
{

// rozwijane menu - mobile, hamburger
    $(window).resize(function ()
    {

        if ($(window).width() <= 1262)
        {
            $("#my-menu").mmenu({
                extensions: ["fullscreen", "theme-black", "listview-large", "fx-panels-slide-up", "fx-listitems-drop", "border-offset"],
                offCanvas: {
                    position: "bottom",
                    zposition: "front"
                },
                navbar: {
                    title: ""
                },
                navbars: [{
                        content: [
                            "<a href='#' class='login-link'>Logowanie</a>"
                        ]
                    }, {
                        content: ["prev", "title"]
                    }]}, {clone: true});
            $(".mh-head.mm-sticky").mhead({
                scroll: {
                    hide: 200
                }
            });
            $(".mh-head:not(.mm-sticky)").mhead({
                scroll: false
            });

        }

    }).resize();
});

$(document).ready(function ()
{
    $(".film-frames").lightGallery({selector: '.gallery-item'});
});


$(document).ready(function ()
{
    var navbar_height = $('header').height();
    $('.show-more__btn').click(function ()
    {
        $('html, body').animate({
            scrollTop: $(".section-about").offset().top - navbar_height - 20
        }, 1000);
    });
});

