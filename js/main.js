$(document).ready(() => {

    $('.advantages-slick').slick({
        arrows: true,
        infinite: true,
        slidesToShow: 1,
        dots: false
    });


    $('#certificates-slick').slick({
        arrows: true,
        infinite: true,
        slidesToShow: 3,
        dots: false
    });




    //блок с прайсом

    $('.services-arrow.teeth').click(() => {
        $('.services-arrow.teeth').hide();
    })
    $('.services-arrow.hygiene').click(() => {
        $('.services-arrow.hygiene').hide();
    })
    $('.services-arrow.braces').click(() => {
        $('.services-arrow.braces').hide();
    })
    $('.services-arrow.pediatric-dentistry').click(() => {
        $('.services-arrow.pediatric-dentistry').hide();
    })
    $('.services-arrow.implants').click(() => {
        $('.services-arrow.implants').hide();
    })
    $('.services-arrow.veneers').click(() => {
        $('.services-arrow.veneers').hide();
    })
    $('.services-arrow.crowns').click(() => {
        $('.services-arrow.crowns').hide();
    })
    $('.services-arrow.surgery').click(() => {
        $('.services-arrow.surgery').hide();
    })


    $('.services-item-general.teeth').click(() => {
        $('.services-item.teeth').addClass('bg-services');
        $('.services-text.teeth').addClass('active-teeth');
        $('.services-icon.teeth svg').addClass('active-teeth');
        $('.services-arrow.teeth').css('display', 'flex');


        jQuery(function ($) {
            $(document).mouseup(function (e) { // событие клика по веб-документу
                var div = $(".services-item.teeth"); // тут указываем ID элемента
                if (!div.is(e.target) // если клик был не по нашему блоку
                    && div.has(e.target).length === 0) { // и не по его дочерним элементам
                    $('.services-item.teeth').removeClass('bg-services')
                    $('.services-text.teeth').removeClass('active-teeth');
                    $('.services-icon.teeth svg').removeClass('active-teeth');
                    $('.services-arrow.teeth').css('display', 'none');
                    $('#price-teeth').hide()
                }
            });
        });
    });

    $('.services-item-general.teeth').trigger("click")


    $('.services-arrow.teeth').click(() => {
        $('#price-teeth').show()
    })


    $('.services-item-general.hygiene').click(() => {
        $('.services-item.hygiene').addClass('bg-services');
        $('.services-text.hygiene').addClass('active-teeth');
        $('.services-icon.hygiene svg').addClass('active-teeth');
        $('.services-arrow.hygiene').css('display', 'flex');

        jQuery(function ($) {
            $(document).mouseup(function (e) { // событие клика по веб-документу
                var div = $(".services-item.hygiene"); // тут указываем ID элемента
                if (!div.is(e.target) // если клик был не по нашему блоку
                    && div.has(e.target).length === 0) { // и не по его дочерним элементам
                    $('.services-item.hygiene').removeClass('bg-services')
                    $('.services-text.hygiene').removeClass('active-teeth');
                    $('.services-icon.hygiene svg').removeClass('active-teeth');
                    $('.services-arrow.hygiene').css('display', 'none');
                    $('#price-hygiene').hide()
                }
            });
        });
    })

    $('.services-arrow.hygiene').click(() => {
        $('#price-hygiene').show();
    })


    $('.services-item-general.braces').click(() => {
        $('.services-item.braces').addClass('bg-services');
        $('.services-text.braces').addClass('active-teeth');
        $('.services-icon.braces svg').addClass('active-teeth');
        $('.services-arrow.braces').css('display', 'flex');


        jQuery(function ($) {
            $(document).mouseup(function (e) { // событие клика по веб-документу
                var div = $(".services-item.braces"); // тут указываем ID элемента
                if (!div.is(e.target) // если клик был не по нашему блоку
                    && div.has(e.target).length === 0) { // и не по его дочерним элементам
                    $('.services-item.braces').removeClass('bg-services')
                    $('.services-text.braces').removeClass('active-teeth');
                    $('.services-icon.braces svg').removeClass('active-teeth');
                    $('.services-arrow.braces').css('display', 'none');
                    $('#price-braces').hide()
                }
            });
        });
    })

    $('.services-arrow.braces').click(() => {
        $('#price-braces').show()
    })

    $('.services-item-general.pediatric-dentistry').click(() => {
        $('.services-item.pediatric-dentistry').addClass('bg-services');
        $('.services-text.pediatric-dentistry').addClass('active-teeth');
        $('.services-icon.pediatric-dentistry svg').addClass('active-teeth');
        $('.services-arrow.pediatric-dentistry').css('display', 'flex');


        jQuery(function ($) {
            $(document).mouseup(function (e) { // событие клика по веб-документу
                var div = $(".services-item.pediatric-dentistry"); // тут указываем ID элемента
                if (!div.is(e.target) // если клик был не по нашему блоку
                    && div.has(e.target).length === 0) { // и не по его дочерним элементам
                    $('.services-item.pediatric-dentistry').removeClass('bg-services')
                    $('.services-text.pediatric-dentistry').removeClass('active-teeth');
                    $('.services-icon.pediatric-dentistry svg').removeClass('active-teeth');
                    $('.services-arrow.pediatric-dentistry').css('display', 'none');
                    $('#price-pediatric-dentistry').hide()
                }
            });
        });
    })

    $('.services-arrow.pediatric-dentistry').click(() => {
        $('#price-pediatric-dentistry').show()
    })

    $('.services-item-general.implants').click(() => {
        $('.services-item.implants').addClass('bg-services');
        $('.services-text.implants').addClass('active-teeth');
        $('.services-icon.implants svg').addClass('active-teeth');
        $('.services-arrow.implants').css('display', 'flex');


        jQuery(function ($) {
            $(document).mouseup(function (e) { // событие клика по веб-документу
                var div = $(".services-item.implants"); // тут указываем ID элемента
                if (!div.is(e.target) // если клик был не по нашему блоку
                    && div.has(e.target).length === 0) { // и не по его дочерним элементам
                    $('.services-item.implants').removeClass('bg-services')
                    $('.services-text.implants').removeClass('active-teeth');
                    $('.services-icon.implants svg').removeClass('active-teeth');
                    $('.services-arrow.implants').css('display', 'none');
                    $('#price-implants').hide()
                }
            });
        });
    })

    $('.services-arrow.implants').click(() => {
        $('#price-implants').show()
    })


    $('.services-item-general.veneers').click(() => {
        $('.services-item.veneers').addClass('bg-services');
        $('.services-text.veneers').addClass('active-teeth');
        $('.services-icon.veneers svg').addClass('active-teeth');
        $('.services-arrow.veneers').css('display', 'flex');

        jQuery(function ($) {
            $(document).mouseup(function (e) { // событие клика по веб-документу
                var div = $(".services-item.veneers"); // тут указываем ID элемента
                if (!div.is(e.target) // если клик был не по нашему блоку
                    && div.has(e.target).length === 0) { // и не по его дочерним элементам
                    $('.services-item.veneers').removeClass('bg-services')
                    $('.services-text.veneers').removeClass('active-teeth');
                    $('.services-icon.veneers svg').removeClass('active-teeth');
                    $('.services-arrow.veneers').css('display', 'none');
                    $('#price-veneers').hide()
                }
            });
        });
    })

    $('.services-arrow.veneers').click(() => {
        $('#price-veneers').show()
    })


    $('.services-item-general.crowns').click(() => {
        $('.services-item.crowns').addClass('bg-services');
        $('.services-text.crowns').addClass('active-teeth');
        $('.services-icon.crowns svg').addClass('active-teeth');
        $('.services-arrow.crowns').css('display', 'flex');


        jQuery(function ($) {
            $(document).mouseup(function (e) { // событие клика по веб-документу
                var div = $(".services-item.crowns"); // тут указываем ID элемента
                if (!div.is(e.target) // если клик был не по нашему блоку
                    && div.has(e.target).length === 0) { // и не по его дочерним элементам
                    $('.services-item.crowns').removeClass('bg-services')
                    $('.services-text.crowns').removeClass('active-teeth');
                    $('.services-icon.crowns svg').removeClass('active-teeth');
                    $('.services-arrow.crowns').css('display', 'none');
                    $('#price-crowns').hide()
                }
            });
        });
    })

    $('.services-arrow.crowns').click(() => {
        $('#price-crowns').show()
    })






    $('.services-item-general.surgery').click(() => {
        $('.services-item.surgery').addClass('bg-services');
        $('.services-text.surgery').addClass('active-teeth');
        $('.services-icon.surgery svg').addClass('active-teeth');
        $('.services-arrow.surgery').css('display', 'flex');


        jQuery(function ($) {
            $(document).mouseup(function (e) { // событие клика по веб-документу
                var div = $(".services-item.surgery"); // тут указываем ID элемента
                if (!div.is(e.target) // если клик был не по нашему блоку
                    && div.has(e.target).length === 0) { // и не по его дочерним элементам
                    $('.services-item.surgery').removeClass('bg-services')
                    $('.services-text.surgery').removeClass('active-teeth');
                    $('.services-icon.surgery svg').removeClass('active-teeth');
                    $('.services-arrow.surgery').css('display', 'none');
                    $('#price-surgery').hide()
                }
            });
        });
    })

    $('.services-arrow.surgery').click(() => {
        $('#price-surgery').show()
    })



    setTimeout(() =>{
        $('.services-item.teeth').trigger('click');
    }, 1000);


    $('#services-list').click(() => {
        jQuery(function ($) {
            $(document).mouseup(function (e) { // событие клика по веб-документу
                var div = $("#services-list"); // тут указываем ID элемента
                if (!div.is(e.target) // если клик был не по нашему блоку
                    && div.has(e.target).length === 0) { // и не по его дочерним элементам
                    $('.services-item.teeth').addClass('bg-services')
                    $('.services-text.teeth').addClass('active-teeth');
                    $('.services-icon.teeth svg').addClass('active-teeth');
                    $('.services-arrow.teeth').css('display', 'flex');
                    $('#price-teeth').hide()
                }
            });
        })
    });






    //кнопка записаться на приём

    $('.open-form').click(() => {
        $('#reservation-container').css('display', 'flex').addClass("btn-onl");
    });

    $('#reservation-cancel, #reservation-container').click((e) => {
        if (e.target.id === 'reservation-container' || e.target.id === 'reservation-cancel-close') {
            $('#reservation-container').hide().removeClass("btn-onl");
        }
    });

    $('#reserve-button > button').click(() => {

        let name = $('#name');
        let service = $('#service');
        let date = $('#date');
        let phone = $('#reserve-phone');
        let serviceName = $('#serviceName');
        let serviceTime = $('#serviceTime');
        let reservationSent = $('#reservation-sent')
        let hasError = false;

        $('.error-input').hide();

        name.css('border-color', '#38BCEA');
        service.css('border-color', '#38BCEA');
        date.css('border-color', '#38BCEA');
        phone.css('border-color', '#38BCEA');
        serviceName.css('border-color', '#38BCEA');
        serviceTime.css('border-color', '#38BCEA');


        if (!name.val()) {
            name.siblings('.error-input').show();
            name.css('border-color', '#38BCEA');
            hasError = true;

        }

        if (!service.val()) {
            service.siblings('.error-input').show();
            service.css('border-color', '#38BCEA');
            hasError = true;

        }

        if (!date.val()) {
            date.siblings('.error-input').show();
            date.css('border-color', '#38BCEA');
            hasError = true;

        }

        if (!phone.val()) {
            phone.siblings('.error-input').show();
            phone.css('border-color', '#38BCEA');
            hasError = true;

        }
        if (!serviceName.val()) {
            serviceName.siblings('.error-input').show();
            serviceName.css('border-color', '#38BCEA');
            hasError = true;

        }
        if (!serviceTime.val()) {
            serviceTime.siblings('.error-input').show();
            serviceTime.css('border-color', '#38BCEA');
            hasError = true;
        }

        if (!hasError) {

            $.ajax({
                type: 'post',
                url: 'mail.php',
                data: {
                    name: name.val(), service: service.val(), date: date.val(), phone: phone.val(),
                    serviceName: serviceName.val(), serviceTime: serviceTime.val()
                },

                success: () => {
                    $('#reservation-content').hide();
                    $(reservationSent).css('display', 'block');
                    $(reservationSent).show();

                },

                error: () => {
                    // $('#reservation-container').hide();
                    // alert('Ошибка')
                    $('#reservation-content').hide();
                    $(reservationSent).css('display', 'block');
                    $(reservationSent).show();
                }
            });
        }

    })


//кнопка в хедере

    $('.call-open-form').click(() => {

        $('#form-phone-container').css('display', 'flex').addClass("btn-onl");

    })


    $('.close, #form-phone-container').click((e) => {
        if (e.target.id === 'form-phone-container' || e.target.id === 'form-close') {
            $('#form-phone-container').hide().removeClass("btn-onl");
        }
    });


    $('.phone-btn').click(() => {

        let callHeader = $('#callHeader');
        let success = $('#success')
        let hasError = false;


        $('.error-call').hide();
        callHeader.css('border-color', '#38BCEA');


        if (!callHeader.val()) {
            callHeader.siblings('.error-call').show();
            callHeader.css('border', '1px solid #38BCEA');
            hasError = true;
        }

        if (!hasError) {

            $.ajax({
                type: 'post',
                url: 'mail.php',
                data: {callHeader: callHeader.val()},

                success: () => {
                    $('#form-phone-content').hide();
                    $(success).css('display', 'block');
                    $(success).show();

                },

                error: () => {
                    // $('#reservation-container').hide();
                    // alert('Ошибка')
                    $('#form-phone-content').hide();
                    $(success).css('display', 'block');
                    $(success).show();
                }
            });
        }

    })


    //кнопка заказать звонок (в подарок сертификат)

    $('.present-btn').click(() => {

        let call = $('.call-container')
        let callPresent = $('#callPresent');
        let hasError = false;

        $('.error-call').hide();

        callPresent.css('border', '0');


        if (!callPresent.val()) {
            callPresent.siblings('.error-call').show();
            callPresent.css('border', '1px solid #38BCEA');
            hasError = true;
        }

        if (!hasError) {

            $.ajax({
                type: 'post',
                url: '../mail2.php',
                data: {phone: callPresent.val()},

                success: () => {
                    $(call).css('display', 'flex').addClass('btn-onl')
                    $(call).show();

                },

                error: () => {
                    // $('#reservation-container').hide();
                    // alert('Ошибка')
                    $(call).css('display', 'flex').addClass('btn-onl')
                    $(call).show();
                }
            });
        }

    })

    $('.close, .call-container').click((e) => {
        $('.call-container').hide();
        $(callPresent).val('')
    });



    //кнопка заказать звонок (онлайн-консультация)
 $('.consultation-btn').click(() => {

        let call = $('.call-container')
        let callPhone = $('#callPhone');
        let hasError = false;

        $('.error-call').hide();

     callPhone.css('border', '0');


        if (!callPhone.val()) {
            callPhone.siblings('.error-call').show();
            callPhone.css('border', '1px solid #38BCEA');
            hasError = true;
        }

        if (!hasError) {

            $.ajax({
                type: 'post',
                url: '../mail2.php',
                data: {phone: callPhone.val()},

                success: () => {
                    $(call).css('display', 'flex').addClass('btn-onl')
                    $(call).show();

                },

                error: () => {
                    // $('#reservation-container').hide();
                    // alert('Ошибка')
                    $(call).css('display', 'flex').addClass('btn-onl')
                    $(call).show();
                }
            });
        }

    })

    $('.close, .call-container').click((e) => {
        $('.call-container').hide();
        $(callPhone).val('')

    });


})




