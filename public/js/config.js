(function($){
	$(".getToken").on('click', function(){
		$.ajax({
			url: '/token',
			type: 'get',
			dataType: 'json',
			success: function(data){
				console.log(data.access_token);
			}
		})
	})
	$(".getTicket").on('click', function(){
		$.ajax({
			url: '/ticket',
			type: 'get',
			dataType: 'json',
			success: function(data){
				console.log(data.ticket);
			}
		})
	})

	$(".create").on('click', function(){
		$.ajax({
			url: '/sdkconfig',
			type: 'get',
			dataType: 'json',
			data: {
				url: encodeURIComponent(location.href.split('#')[0])
			},
			success: function(data){
				console.log("data", data);
				wx.config({
					debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
					appId: data.appID, // 必填，公众号的唯一标识
					timestamp: data.timestamp, // 必填，生成签名的时间戳
					nonceStr: data.nonceStr, // 必填，生成签名的随机串
					signature: data.signature,// 必填，签名，见附录1
					jsApiList: ["onMenuShareTimeline"] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
				});

				wx.error(function(res){
					console.log('wx error', res);
					// config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。

				});


				var localIds;
				//选择图片
				wx.chooseImage({
					count: 3, // 默认9
					sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
					success: function (res) {
						localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
						// ['123asfassdaf', 'asdfasdfsafasd']
					}
				});

				uploadImg(localIds);
			}
		})
	})


	function uploadImg(localIds){
		var localId = localIds.shift();
		wx.uploadImage({
			localId: localId, // 需要上传的图片的本地ID，由chooseImage接口获得
			isShowProgressTips: 1, // 默认为1，显示进度提示
			success: function (res) {
				var serverId = res.serverId; // 返回图片的服务器端ID

				if(localIds.length > 0){
					uploadImg(localIds);
				}
			}
		});
	}

})(jQuery)