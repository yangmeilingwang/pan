$(function(){
    var swiper = new Swiper('.swiper-container', {

        slidesPerView:6,
        paginationClickable: true,
        spaceBetween: 0,
        autoplay:3000,
        autoplayDisableOnInteraction:false,
        spend:3000,
        loop:true,
        prevButton:'.swiper-button-prev',
        nextButton:'.swiper-button-next'
    });
    $(function(){
        $('.jquery-reslider').reSlider({
            speed:800,//设置轮播的高度
            delay:5000,//设置轮播的延迟时间
            imgCount:3,//设置轮播的图片数
            dots:true,//设置轮播的序号点
            autoPlay:true//设置轮播是否自动播放
        });
    });
})
