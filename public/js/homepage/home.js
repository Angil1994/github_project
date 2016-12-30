/*手机轮播jquery*/
var w=$(window ).outerWidth();
var i=0;
var time = setInterval(tonext,2000);
/*手指向右划*/
$(".carousel li").on("swipeRight",function(){toprev()});
$(".carousel li").on("swipeLeft",function(){tonext()});
/*自动轮播向左*/
function tonext(){
	$(".carousel").animate({
		"margin-left": -w
	}, 1000,function(){
		$(".carousel li").first().appendTo($(".carousel"));
		$(".carousel").css("margin-left", 0);
	});
	i++;
	if(i >= $(".carousel li").length){
		i = 0;
	}
	$(".circle_box li").removeClass("active");
	$(".circle_box li").eq(i).addClass("active");
}
$(".carousel").on("touchstart",function(){
	clearInterval(time)}
);
$(".carousel").on('touchend',function(){
	time = setInterval(tonext,2000);
});

/*自动轮播向右*/
function toprev(){
	$(".carousel li").last().prependTo($(".carousel"));
	$(".carousel").css("margin-left", -w);
	$(".carousel").animate({
		"margin-left": 0
	}, 800);
	i--;
	if(i < 0){
		i = $(".circle_box li").length - 1;
	}
	$(".circle_box li").removeClass("active");
	$(".circle_box li").eq(i).addClass("active");
}

function liked(obj){
	var img=obj.style.backgroundImage;
	if(img== 'url("../../public/img/homepage/collect_icon_press@2x.png")'){
		obj.style.backgroundImage="url('../../public/img/homepage/collect_icon_nor@2x.png')"
	}
	else{
		obj.style.backgroundImage= "url('../../public/img/homepage/collect_icon_press@2x.png')";
	}
}
var offLogin=document.getElementById("other_choice");
function other_choice(){
	var off=offLogin.style.display;
	if(off=="none"||off==""){
		offLogin.style.display = "flex"
	}else{
		offLogin.style.display = "none"
	}
}

/*选项卡*/
$("#menu_region").on("click",function(){
	/*展开效果*/
	if($(this ).hasClass("menu_active")){
		$(this ).removeClass("menu_active");
		$(this ).children(".down2" ).addClass("down_active");
		$(this ).children(".down").removeClass("down_active");
	}else{
		$(this ).addClass("menu_active");
		$(this ).children(".down" ).addClass("down_active");
		$(this ).children(".down2").removeClass("down_active");
	}
	/*向下展开*/
	$(".regions_hidden_box").slideToggle();
	/*具体门店*/
		$("#regions_towns li").on("click",function(){
			var $townsli=$(this);
			var index=$townsli.index();
			$(".hide" ).hide();
			$(".hide" ).eq(index ).show()
		})

});




