function hrefToLogin(){location.href="login.html"}

function hrefToMiddleman(){location.href="middleman.html"}
function hrefToOperator(){location.href="operator.html"}
function hrefToAgent(){location.href="agent.html"}

//register.html 下拉选择
function myRotate(){
	var rotate=document.getElementById('select_icon');
	var options=document.getElementById('options');
	if(rotate.style.transform=="rotate(0deg)" || rotate.style.transform == ''){
		rotate.style.transform="rotate(180deg)";
		options.style.height="9.2em";
	}else{
		rotate.style.transform="rotate(0deg)";
		options.style.height="0";
	}
	rotate.style.transitionDuration="400ms";
	options.style.transitionDuration="400ms"
}

//register.html 发送验证功能
var countdown=60;
function submitHandler(obj){
	var a=setTimeout(function(){
		submitHandler(obj)
	},1000);
	if(countdown==0){
		obj.removeAttribute("disabled");
		obj.innerHTML="获取验证码";
		countdown = 60;
		clearTimeout(a)
	}else{
		obj.setAttribute("disabled",true);
		obj.innerHTML="重新发送("+countdown+")";
		countdown--;
	}
}