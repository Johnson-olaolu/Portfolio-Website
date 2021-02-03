$(document).ready(function () {
    let $btns = $('.project_area .button_group button')

    $btns.click(function (e) {
        $('.project_area .button_group button').removeClass('active')
        e.target.classList.add('active')

        let selector = $(e.target).attr('data-filter');

        $('.project_area .grid').isotope({
            filter: selector
        })


        return false;
    })

    $('#btn1').trigger('click');

    $('.grid .test-popup-link').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    $('.site_main .testimonial .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            544: {
                items: 2
            }
        }
    })

    let nav_offset_top = $('.header_area').height() + 50;

    function navbar_fixed() {
        if ($('.header_area').length) {
            $(window).scroll(function () {
                let scroll = $(window).scrollTop()
                if (scroll >= nav_offset_top) {
                    $('.header_area .main_menu').addClass('navbar_fixed')
                } else {
                    $('.header_area .main_menu').removeClass('navbar_fixed')
                }
            })
        }
    }

    navbar_fixed()
})