<template>
	<view class="box">
		<view class="head">
			个人中心
		</view>
		
		<view class="index">
			<view class="timg">
				<image class="ttimg iicon" mode=""></image>
			</view>
			<view class="geren-right">
				欢迎 {{username}}
			</view>
		</view>
		<u-gap height="40" bg-color="#f0f0f0"></u-gap>
		<view class="table">
			<u-cell-group>
				<u-cell-item :icon="item.icon" :title="item.name" v-for="(item,index) in data" :key="index" @tap="Click_Index(item)"></u-cell-item>
			</u-cell-group>
		</view>
		<button @tap="botLogo" class="tui" type="warn">退出登录</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				data: [{
						name: "我的资料",
						icon: 'account-fill',
						Lick_url: ''
					},
					{
						name: "关于公司",
						icon: 'home-fill',
						Lick_url: "./Company/Company"
					},
					{
						name: "使用手册",
						icon: 'file-text-fill',
						Lick_url: './UserManual/UserManual'
					},
					{
						name: "检查更新",
						icon: 'reload',
						Lick_url: "./mine/Update"
					}
				],
				timg: require('../../static/img/download.jpg'),
				username: '', //登录用户
				timer: null,
				timerindex: 0,
			}
		},
		onShow() {
			this.initUserName()
		},
		created() {
			this.initUserName()
		},
		methods: {
			initUserName: function() {
				var that = this
				uni.getStorage({
					key: 'admin',
					success: function(res) {
						console.log(res.data)
						that.username = res.data
					}
				});
			},
			Click_Index: function(item) {
				var that = this
				// 判断是否存在页面
				if (item.Lick_url == '') {
					return false
				}
				uni.navigateTo({
					url: item.Lick_url,
				});
			},

			//退出登录
			botLogo: function() {
				
				// uni.chooseLocation({
				//     success: function (res) {
				//         console.log('位置名称：' + res.name);
				//         console.log('详细地址：' + res.address);
				//         console.log('纬度：' + res.latitude);
				//         console.log('经度：' + res.longitude);
				//     }
				// });
				
				
				
				
				// return false
				var that = this
				this.$store.state.token = ''
				uni.setStorage({ //清空本地Token
					key: 'Token',
					data: '',
					success: function() {
						uni.navigateTo({
							url: "../Logo/Logo",
						});
					}
				});
			},


		}
	}
</script>

<style lang="scss">
	.box {
		width: 100%;
		height: 100%;
		background-color: #FFFFFF;
		padding-top: 80px;
		
		
		.head {
			position: fixed;
			top: 0px;
			left: 0;
			width: 100%;
			height: 80px;
			background-color: #1678ff;
			padding-top: 30px;
			padding-left: 20px;
			box-sizing: border-box;
			line-height: 50px;
			font-weight: bolder;
			font-size: 18px;
			color: #ececec;
			z-index: 99;
		}

		.iicon {
			background-image: url(../../static/img/download.jpg);
			background-size: 100% 100%;
		}

		.tui {
			margin: auto;
			margin-top: 50px;
		}

		.index {
			width: 100%;
			height: 120px;
			background: #FFFFFF;
			box-sizing: border-box;

			.timg {
				width: 70px;
				height: 70px;
				float: left;
				margin-top: 25px;
				margin-left: 25rpx;

				.ttimg {
					width: 100%;
					height: 100%;
					border-radius: 50%;
				}
			}

			.geren-right {
				height: 100%;
				float: left;
				width: calc(100% - 120px);
				padding-left: 30px;
				box-sizing: border-box;
				font-size: 15px;
				line-height: 120px;
			}
		}

		.table {
			width: 100%;
			background: #FFFFFF;

			.Transitional {
				width: 95%;
				height: 45px;
				background: #FFFFFF;
				border-bottom: 0.5px solid #ccc;
				margin: auto;
				font-size: 13px;
				line-height: 45px;

				.geren-right {
					float: right;
				}
			}

		}

		button {
			width: 80%;
			margin: 50px;
		}
	}
</style>
