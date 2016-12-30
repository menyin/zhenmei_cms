/**
 * Created by CNY on 2016/12/1.
 */
$(function () {
    //导航菜单处理
    $('.nav_ul>li').hover(function () {
        $(this).find('.nav_tip').animate({opacity: 1});
    }, function () {
        $(this).find('.nav_tip').animate({opacity: 0});
    });
    $('.nav_tip').hover(function () {
        $(this).animate({opacity: 1});
    }, function () {
        $(this).animate({opacity: 0});
    });
    //banner轮播
    var swiper3 = new Swiper('.banner .swiper-container', {
        pagination: '.banner .swiper-pagination',
        paginationClickable: true,
        autoplay:3000,
        loop : true,//循环
        speed:1000,
//            effect:'fade'
        effect:'cube'
    });
    setInterval(function () {
//            swiper3.slideNext();
    },1500);

});