
$(".news-left>#new>p").eq(0).addClass("active");
$(".news-left>#new>p").click(function(){
	$(this).addClass("active").siblings().removeClass("active");
	$("#box>div").eq($(this).index()).show().siblings().hide()
})
