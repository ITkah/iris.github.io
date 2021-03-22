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
    $('body,html').animate({ scrollTop: top }, 1500);
});