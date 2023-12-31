$(function () {

    $('.banner-section__slider').slick({
        dots: true,
        prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="../images/arrow-left.svg" alt="Arrow left"></button>',
        nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="../images/arrow-right.svg" alt="Arrow left"></button>'
    });

    $('.tab').on('click', function (e) {
        e.preventDefault();

        $($(this).siblings()).removeClass('tab-active');
        $($(this).parent().siblings().find('div')).removeClass('tabs-content-active');

        $(this).addClass('tab-active');
        $($(this).attr('href')).addClass('tabs-content-active');

    });


    $('.product__item-favorite').on('click', function () {
        $(this).toggleClass('product__item-favorite-active')
    });


    $('.product__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button class="product__slider-slider-btn product__slider-slider-btnprev"><img src="../images/arrow-black-left.svg" alt="Arrow left"></button>',
        nextArrow: '<button class="product__slider-slider-btn product__slider-slider-btnnext"><img src="../images/arrow-black-right.svg" alt="Arrow left"></button>'
    });

    $('.filter-style').styler();
    $('.filter-item__drop, .filter-extra').on('click', function () {
        $(this).toggleClass('filter-item__drop--active');
        $(this).next().slideToggle('200');
    })

    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 100000,
        max: 500000,
    });

    $('.catalog-filter__btngrid').on('click', function () {
        $(this).addClass('catalog-filter__button--active');
        $('.catalog-filter__btnline').removeClass('catalog-filter__button--active');
        $('.product__item-wrapper').removeClass('product__item-wrapper--list')
    });

    $('.catalog-filter__btnline').on('click', function () {
        $(this).addClass('catalog-filter__button--active');
        $('.catalog-filter__btngrid').removeClass('catalog-filter__button--active');
        $('.product__item-wrapper').addClass('product__item-wrapper--list')
    });


    $(".rate-yo").rateYo({
        ratedFill: "#1C62CD",
        normalFill: "#C4C4C4",
        spacing: "7px"
    });

    $('.menu__btn').on('click', function (){
        $('.menu-mobile__list').toggleClass('menu-mobile__list-active')
    })
});

