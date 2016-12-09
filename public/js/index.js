var startX,
	startY,
	moveX,
	moveY,
	times=0,
	timeOut;
var dom=document.getElementsByClassName("dom")[0];
dom.addEventListener('touchstart',function(e){
	times=0;
	timeOut=setInterval(function(){
		times+=100;
	},100);
		var th = e.touches[0];
		startX = th.clientX;
		startY = th.clientY;
	});
dom.addEventListener('touchmove',function(e){
	console.log(111)
		var th = e.touches[0];
		moveX = th.clientX;
		moveY = th.clientY;
	});
dom.addEventListener('touchend',function(){
		console.log(startX,startY,moveX,moveY);
		if(moveY-startY>=100){
			dom.style.color = 'red'
		}else if(startY-moveY>=100){
			dom.style.color = '#cccccc'
		}
var fontSize =parseInt(window.getComputedStyle(document.getElementsByClassName('md')[0] ).fontSize);
console.log(fontSize);

		if(moveX-startX>=100){
			fontSize += 2;
			document.getElementsByClassName('md')[0 ].style.fontSize=fontSize+"px";
		}else if(startX-moveX>=100){
			if(fontSize>=4){
				fontSize-=2;
			document.getElementsByClassName('md')[0 ].style.fontSize=fontSize+"px";
			}
		}
	clearInterval(timeOut);
		console.log(times);
	if(times>=1000){

	}
	});

