const http = (obj) => {
	return new Promise((resolve, reject) => {
		uni.showLoading({
			title: '加载中'
		});


		var TokenId = ''
		uni.getStorage({
			key: 'Token',
			success: function(res) {
				TokenId = res.data
				// 首先进行接口
				console.log(TokenId)
				uni.request({
					url: obj.url,
					method: obj.method,
					header: {
						'Token': TokenId
					},
					data: obj.data,
					success: (res) => {
						var COdeState = JSON.parse(res.data).Code
						// 登录失效   自动跳转至登录页
						if (COdeState == 3) {
							console.log(
								'init--------init--------init--------init--------init--------init--------init--------init--------init--------init--------init--------init--------init--------'
							)
							console.log(obj)
							uni.navigateTo({
								url: '/pages/Logo/Logo',
							});
							uni.hideLoading();
							return false
						}
						// 弹出错误信息
						if (COdeState != 0) {
							uni.showToast({
								title: JSON.parse(res.data).Msg,
								icon: "none"
							})
							return false
						}
						resolve(JSON.parse(res.data))
						setTimeout(function() {
							uni.hideLoading();
						}, 100);
					},
					fail: (err) => {
						// console.log('err' + err)
						reject(err)
						setTimeout(function() {
							uni.hideLoading();
						}, 100);
					},
					complete: () => {

					}
				})
			}
		})
	})
}

export default http
