function tonext(){$(".carousel").animate({"margin-left":-w},1e3,function(){$(".carousel li").first().appendTo($(".carousel")),$(".carousel").css("margin-left",0)}),i++,i>=$(".carousel li").length&&(i=0),$(".circle_box li").removeClass("active"),$(".circle_box li").eq(i).addClass("active")}function toprev(){$(".carousel li").last().prependTo($(".carousel")),$(".carousel").css("margin-left",-w),$(".carousel").animate({"margin-left":0},800),i--,i<0&&(i=$(".circle_box li").length-1),$(".circle_box li").removeClass("active"),$(".circle_box li").eq(i).addClass("active")}function liked(e){var i=e.style.backgroundImage;'url("../../public/img/homepage/collect_icon_press@2x.png")'==i?e.style.backgroundImage="url('../../public/img/homepage/collect_icon_nor@2x.png')":e.style.backgroundImage="url('../../public/img/homepage/collect_icon_press@2x.png')"}function other_choice(){var e=offLogin.style.display;"none"==e||""==e?offLogin.style.display="flex":offLogin.style.display="none"}var w=$(window).outerWidth(),i=0,time=setInterval(tonext,2e3);$(".carousel li").on("swipeRight",function(){toprev()}),$(".carousel li").on("swipeLeft",function(){tonext()}),$(".carousel").on("touchstart",function(){clearInterval(time)}),$(".carousel").on("touchend",function(){time=setInterval(tonext,2e3)});var offLogin=document.getElementById("other_choice");$("#menu_region").on("click",function(){$(this).hasClass("menu_active")?($(this).removeClass("menu_active"),$(this).children(".down2").addClass("down_active"),$(this).children(".down").removeClass("down_active")):($(this).addClass("menu_active"),$(this).children(".down").addClass("down_active"),$(this).children(".down2").removeClass("down_active")),$(".regions_hidden_box").slideToggle(),$("#regions_towns li").on("click",function(){var e=$(this),i=e.index();$(".hide").hide(),$(".hide").eq(i).show()})});