<template>
	<view class="box">
		<image  class="img" src="../../static/img/zhi.png" mode=""></image>
		<view class="inputArea assd">
			<input v-model="loginPhone" placeholder="请输入账号"  class="inputClass" confirm-type='' />
		</view>
		<view style="padding: 0 10%;">
			<text style="color: red;"></text>
		</view>
		<view class="inputArea">
			<button style="border-radius:22px;" type="primary" @tap="inter(2)">登 录</button>
		</view>
		<view v-if="mode" class="inputArea">
			<button style="border-radius:22px;" size="mini" type="primary" @tap="gcs">gcs</button>
			<button style="border-radius:22px;" size="mini" type="primary" @tap="qyjl">经理</button>
			<button style="border-radius:22px;" size="mini" type="warn" class="right" @tap="del" >生产</button>
		</view>
		<view v-if="ceshi6001" class="ceshishi"> 6001 </view>
		<mpopup ref="mpopup" :isdistance="true"></mpopup>
	</view>
</template>

<script>
	import mpopup from '@/components/xuan-popup/xuan-popup.vue'
	export default {
		components: {
			mpopup
		},
		data() {
			return {
				loginPhone: '',
				loginPassword: '',
				mode:false,    //false为生产 ， true为测试
				ceshi6001:false,
				msg: '',
				isSound: true,
				AutoClip: true,
				backCamera: false,
				data: [],
				Base64: '',
			}
		},
		onShow(){
			// 读取储存的用户名，自动填写
			var that = this
			uni.getStorage({
			    key: 'admin',
			    success: function (res) {
					console.log(res.data)
					if(that.loginPhone == '' || that.loginPhone == null){
						that.loginPhone = res.data
					}
			    }	
			})
			if(this.$store.state.url == 'http://39.101.201.199:6001/api/'){
				this.ceshi6001 = true
				this.mode = true
			}else{
				this.ceshi6001 = false
				this.mode = false
			}
		},
		methods: {
			// 跳转人脸
			face:function(){
				uni.navigateTo({
					url: '/pages/Logo/face',
				});
			},
			// 切换生产
			del:function(){
				this.mode = false
				this.$store.state.url = 'http://webapi.inchwell.com.cn/api/',//  ·············接口头部
				this.$store.state.httpurl = 'http://webapi.inchwell.com.cn',//  ··············外部路径
				this.$store.state.httpimgs = 'http://webapi.inchwell.com.cn',// ··············零配件  九图  链接头部
				uni.showToast({title: "进入生产环境",icon: "none"})
				this.ceshi6001 = false
			},
			gcs() { //工程师测试账号
				this.loginPhone = 'gcs', this.loginPassword = '123456',
					this.Logo()
			},
			qyjl() { //区域经理测试账号
				this.loginPhone = 'quyujingli', this.loginPassword = '123456',
					this.Logo()
			},
			// 提供测试环境使用
			Logo() {
				uni.showLoading({title: '正在登陆'}); 
				var that = this
				var obj = {
					url: that.$store.state.url + 'Account/Login',
					method: 'POST',
					data: {
						username: that.loginPhone,
						password: that.loginPassword
					}
				}
				that.$http(obj).then((res) => {
					setTimeout(function () {uni.hideLoading();}, 100);  //清除过渡
					that.$store.state.username = that.loginPhone
					that.$store.state.token = res.Data //数据中心在线存储
					console.log('新的Token身份：'+ res.Data)  
					uni.setStorage({ //将token存储在本地
						key: 'Token',
						data: res.Data,
						success: function() {
							uni.setStorage({ //将用户存储在本地
								key: 'admin',
								data: that.loginPhone,
								success: function() {
									uni.switchTab({ //跳转至主页
										url: '/pages/home/home'
									})
								}
							});
						}
					});
				})
			},
			
			inter(inx) {
				// 进入测试环境
				if(this.loginPhone == 'gototest' || this.loginPhone == 'goto test' || this.loginPhone == 'Goto test' || this.loginPhone == 'Gototest'){
					this.mode = true
					this.$store.state.url = 'http://39.101.201.199:6001/api/',//  ·············接口头部
					this.$store.state.httpurl = 'http://39.101.201.199:6001',//  ··············外部路径
					this.$store.state.httpimgs = 'http://39.101.201.199:6001',// ··············零配件  九图  链接头部
					uni.showToast({title: "进入测试环境",icon: "none"})
					this.ceshi6001 = true
					return  false
				}
				// 正常登陆
				const _self = this;
				if(_self.loginPhone == ''){
					uni.showToast({
						title: '请输入登录名',
						icon: "none"
					})
					return false
				}else{
					// 将用户名储存在本地
					uni.setStorage({  
						key: 'loginPhone',
						data: _self.loginPhone
					})
				}
				// 使用公司百度云API人脸离线储存
				_self.Base64 = '';
				const PPFace = uni.requireNativePlugin('PP-BaiduFace');
				let config = {
					licenseName: 'idl-license',
					licenseSuffix: 'face-android',
					licenseId: 'yzj-v3-face-android',
					liveActionArray: ["Eye", "HeadLeft", "HeadLeftOrRight"],
					bgColor: "#56445D",
					textColor: "#C5E99B",
					isSound: _self.isSound, //默认是否开启语音提示（仅Android有效）默认值：false
					AutoClip: _self.AutoClip, //自动裁剪用户脸部区域 默认：false
					isBackCamera: _self.backCamera //启用后置摄像头
				}
			
				if (plus.os.name == 'iOS') {
					config.licenseSuffix = 'face-ios';
					config.licenseId = 'yzj-v3-face-ios';
				}
				
				if (inx == 1) {
					PPFace.faceliveness(config, result => {
						_self.msg = new Date().getHours() + ':' + new Date().getMinutes() + '  ' + JSON.stringify(result) + '<br/>' +
							_self.msg;
						if (result.FaceStatusEnum == '"OK"') {
							_self.saveImgs(result.base64ImageMap);
						}
					});
			
				} else if (inx == 2) {
					PPFace.recycler(config, result => {
						_self.msg = new Date().getHours() + ':' + new Date().getMinutes() + '  ' + JSON.stringify(result) + '<br/>' +
							_self.msg;
						if (result.FaceStatusEnum == '"OK"') {
							console.log('正在上传脸部数据！')
							_self.saveImgs(result.base64ImageMap);
						}
					});
				}
			
			},
			saveImgs(imgsobj) {
				console.log('正在请求登录！')
				let _self = this;
				_self.logoSrcs = [];
				for (let key in imgsobj) {
					var base64data = imgsobj[key];
					_self.bitmapsave(base64data);
					_self.Base64 = base64data   //头部需添加data:image/jpg;base64,    然后base64倒转
					
				}
				var obj = {
					url: _self.$store.state.url + 'Account/FaceLogin',
					method: 'POST',
					data: {
						UserName :_self.loginPhone,
						FileStr : _self.Base64
					}
				}
				_self.$uniweb(obj).then((res) => {
					console.log('返回值')
					_self.$store.state.username = _self.loginPhone
					_self.$store.state.token = res.Data //数据中心在线存储
					uni.setStorage({ //将token存储在本地
						key: 'Token',
						data: res.Data,
						success: function() {
							uni.setStorage({ //将用户存储在本地
								key: 'admin',
								data: _self.loginPhone,
								success: function() {
									uni.switchTab({ //跳转至主页
										url: '/pages/home/home'
									})
								}
							});
						}
					});
				})
				.catch((res) => {
					console.log('登录失败！')
				});
			},
			// 获取base64位图片
			bitmapsave(basedata) {
				let _self = this;
				var bitmap = new plus.nativeObj.Bitmap("test");
				bitmap.loadBase64Data(basedata, function(e) {
					bitmap.save('_doc/_tmp/head' + new Date().getTime() + '.png', {}, function(e) {
						_self.logoSrcs.push(e.target);
					});
			
				}, function() {
					console.log('加载Base64图片数据失败：' + JSON.stringify(e));
				});
			}
		}
	}
</script>

<style scoped lang="scss">
	.box {
		width: 100%;
		height: 100%;
		background-color: #FFFFFF;
		overflow: hidden;
		.ceshishi{
			padding: 10px;
			position: fixed;
			bottom: 0;
			right: 0;
			color: #808080;
		}
		// background-image: url(../../static/img/QQ.jpg) ;
		// background-size: 100% 100%;
		.img {
			width: 100px;
			height: 100px;
			display: block;
			margin: auto;
			margin-top: 80px;
			box-sizing: border-box;
		}
		.assd {
			margin-top: 30px;
			box-sizing: border-box;
		}
	}
	.inputArea {
		padding: 20upx 10%;
		.right{
			float: right;
		}
	}
	.inputClass {
		border: 2px solid #ccc;
		border-radius: 22px;
		outline: 0;
		padding: 8px 15px;
		font-weight: bold;
	}
</style>