$(document).ready(function () {
    $('#form').submit(function (event) {
        var formData = $('#form').serialize();
        $.ajax({
            url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLScd2SK5EA2EhS1T9GkOKOwmN-6K3rzrl0ER_Mfyv-cCB7jZvg/formResponse",
            data: formData,
            type: "POST",
            dataType: "xml",
            statusCode: {
                0: function () {
                    $(".submit-btn").fadeOut();
                    $(".end-message").slideDown('slow');
                    //window.location.href = "thanks.html";
                },
                // 200: function () {
                //     $(".false-message").slideDown();
                // }
            }
        });
        event.preventDefault();
    });
});

$(function(){
    // ドロワー
    $('#js-burger').click(function(){
        $('body').toggleClass('is-drawerActive');
        if($(this).attr('aria-expanded') == 'false'){
            $(this).attr('aria-expanded', true);
            $('#js-global-menu').attr('area-hidden', false);
        } else {
            $(this).attr('aria-expanded', false);
            $('#js-global-menu').attr('area-hidden', true);
        }
    });
    $('#js-drawer-background').click(function(){
        $('body').removeClass('is-drawerActive');
        $('#js-burger').attr('aria-expanded', false);
        $('#js-global-menu').attr('area-hidden', true);
    });
    $('.sp-global-menu_item').click(function(){
        $('body').removeClass('is-drawerActive');
        $('#js-burger').attr('aria-expanded', false);
        $('#js-global-menu').attr('area-hidden', true);
    });

    // スムーススクロール
    $('a[href^="#"]').click(function(){
        $('.sp-global-menu_item').click();
        let speed = 500;
        let href= $(this).attr("href");
        let target = $(href == "#" || href == "" ? 'html' : href);
        let position = target.offset().top;
        $("html, body").animate({scrollTop:position - 50}, speed, "swing");
        return false;
    });

    // ページTOPボタン
    var pagetop = $('#js-scroll-fadein');

    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            pagetop.addClass('is-fadein');
        } else {
            pagetop.removeClass('is-fadein');
        }
    });
    pagetop.on('click', function(){
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });

    // アコーディオン
    $('.jsAccordionTitle').on('click', function(){
        $(this).next().toggleClass('is-open');
    });

    // submitボタンの有効・無効化
    $('.checkbox').change(function(){
        if($(this).is(':checked')){
            $('.submit-btn').prop('disabled', false);
        } else {
            $('.submit-btn').prop('disabled', true);
        }
    });

    // Swiper
    var mySwiper = new Swiper('.swiper-container', {
        autoplay: {
            delay: 5000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
            reverseDirection: false
        },
        loop: true,
        centeredSlides: true,
        spaceBetween: 50,
        slidesPerView: 'auto',
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    });

    // AOS
    AOS.init();
});