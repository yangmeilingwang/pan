
$('.title > li > a').click(function(e){
        e.preventDefault();
        //this =>  a
        //修改a的父元素li上的active
        $(this).parent().addClass('active').siblings('.active').removeClass('active');

        //根据a的href属性值(id)选择要显示的div
        var id = $(this).attr('href'); //'#tc20'
        $(id).addClass('active').siblings('.active').removeClass('active');

});
$(function(){
        var maxheight = 0;
        for(var i = 0;i<$(".height ul li p").length;i++){
                if(maxheight <= $(".height ul li p").eq(i).height()){
                        maxheight = $(".height ul li p").eq(i).height();
                }
        }
        $(".height ul li p").css('height',parseInt(maxheight)+'px');
        var maxheight1=0
        for(var i = 0;i<$(".height ul li h3").length;i++){
                if(maxheight1 <= $(".height ul li h3").eq(i).height()){
                        maxheight1 = $(".height ul li h3").eq(i).height();
                }
        }
        $(".height ul li h3").css('height',parseInt(maxheight1)+'px');
})
