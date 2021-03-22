var year = new Date().getFullYear();
$(".year").text(year);

$(".call_menu").on("click", function() {
    $(this).toggleClass("call_menu_active");
    $(".hide_menu").toggleClass("hide_menu_active");
    $("body,html").toggleClass("active_body");
});

$(".unchor").on("click", function(event) {
    event.preventDefault();
    var id = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 800);
});

var swiper = new Swiper('.partner_slider', {
    spaceBetween: 10,
    loop: true,
    navigation: {
        nextEl: '.right',
        prevEl: '.left',
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        576: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        640: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        990: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 7,
            spaceBetween: 30,
        },
    }
});