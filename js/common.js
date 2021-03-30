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
            slidesPerView: 1,
            spaceBetween: 10,
        },
        355: {
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
                slidesPerView: 1,
                spaceBetween: 10,
            },
            355: {
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

var swiper4 = new Swiper('.rev_slider', {
    slidesPerView: 4,
    loop: true,
    navigation: {
        nextEl: '.right_rev',
        prevEl: '.left_rev',
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        355: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        990: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1400: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    }
});

var swiper5 = new Swiper('.sem_slider', {
    slidesPerView: 4,
    loop: true,
    navigation: {
        nextEl: '.right_sem',
        prevEl: '.left_sem',
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        355: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        990: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        1200: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        1400: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
    }
});


var year = new Date().getFullYear();
$(".year").text(year);


$('.popup-with-zoom-anim').magnificPopup({
    type: 'inline',

    fixedContentPos: false,
    fixedBgPos: true,

    overflowY: 'auto',

    closeBtnInside: true,
    preloader: false,

    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-zoom-in'
});

$.fn.extend({
    toggleText: function(a, b) {
        return this.text(this.text() == b ? a : b);
    }
});


$(".vacansya_item_btn").on("click", function() {
    $(this).toggleText("Подробнее", "Свернуть");
    $(this).parent().siblings(".vacansya_item_hide").slideToggle(250);
});

$(".hide_btn").on("click", function(e) {
    e.preventDefault();
    $(this).parent().parent().parent().parent().parent().siblings(".vacansya_item_wrap").children(".vacansya_item_btn").click();
});