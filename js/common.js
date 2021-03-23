var swiper = new Swiper('.main_slider', {
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 0,
    mousewheel: true,
    effect: 'fade',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.main_arr_next'
    },
});

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

var swiper1 = new Swiper('.partner_slider', {
    spaceBetween: 10,
    loop: true,
    navigation: {
        nextEl: '.right_part',
        prevEl: '.left_part',
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

var swiper2 = new Swiper('.product_slider', {
    slidesPerView: 4,
    loop: true,
    navigation: {
        nextEl: '.right_prod',
        prevEl: '.left_prod',
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        990: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1400: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    }
});


$('ul.tabs__caption').on('click', 'li:not(.active)', function() {
    $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    var swiper3 = new Swiper('.product_slider', {
        slidesPerView: 4,
        loop: true,
        navigation: {
            nextEl: '.right_prod',
            prevEl: '.left_prod',
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            990: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1400: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
        }
    });
});


var year = new Date().getFullYear();
$(".year").text(year);