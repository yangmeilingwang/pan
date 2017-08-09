
//$("#introduction>div").eq(0).addClass("active");

$("#introduction>li").click(function(e){
	e.preventDefault();
	$(this).addClass("active").siblings(".active").removeClass("active");

	$(" .bg-img>div").eq($(this).index()).addClass("active").siblings(".active").removeClass("active");
})
