<template>
	<view class="box_home">
		<view class="head">
			主页

			<span>{{this.$store.state.currentVersion}}</span>
		</view>
		
		


		<view class="ZindexVideo" v-if="OPVideo">
			<video style="width: 100%;" :src="Video" :poster='posterhttp' :autoplay='true'></video>
			<button @click="DelVideo()">关闭视频</button>
		</view>

		<!-- 轮播图 -->
		<swiper :indicator-dots="true" :circular="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="(itemed,indexed) in imgData" :key="indexed">
				<view class="swiper-item" style="position: relative;">
					<image style="height: 50px;" class="start" v-show="itemed.Video != null "
						src="../../static/icon/icon/start.png" @click="CliOPVideo(itemed)" mode=""></image>
					<image class="images" :src="'http://icms.inchwell.com.cn/file/IndexBanner/'+ itemed.Image"
						@click="CliOPVideo(itemed)"></image>
				</view>
			</swiper-item>
		</swiper>
		
		<u-notice-bar mode="horizontal" class='bar' type='error' :list="Scroll_text_at_bottom"></u-notice-bar>
		
		<view class="content">
			<view android:gravity="center" class="list" v-for="(item,index) in icon" :key="index"
				@tap="clickpath(index)">
				<view v-if="index == 4 && Data.ReturnVisit != '' " class="degmdg">{{Data.ReturnVisit}}</view>
				<view v-if="index == 7 && Data.MCDelay != '' " class="degmdg">
					{{Data.MCDelay}}
				</view>
				<image mode="" :class="item.AmierIMG"></image>
				<text>{{item.text}}</text>
			</view>
		</view>

		<!-- 	<u-card title="当前状态" @click="worksfun()" :head-style='headStyle' :body-style='bodyStyle' box-shadow='2px 3px 4px #c1c1c1' sub-title="点击校准" sub-title-color='#5b8eff' class='ZTstate'>
			<view slot="body">
				<view v-if="Data.EnginnerState" :style="{color:( Data.EnginnerState.Detail == 'WaitStatus' ? 'red' : '#5b8eff' )}">
					{{Data.EnginnerState.Detail == 'WaitStatus' ? '空闲 - - 检索到有未完成的任务，请及时校准' : Data.EnginnerState.Detail  }}
				</view>
			</view>
		</u-card> -->


		<view class="card" @click="worksfun()">
			<div class="TopText">
				当前状态
				<span style='text-align: right;'>点击校准</span>
			</div>
			<p v-if="Data.EnginnerState"
				:style="{color:( Data.EnginnerState.Detail == 'WaitStatus' ? 'red' : '#5b8eff' )}">
				{{ Data.EnginnerState.Detail == 'WaitStatus' ? '空闲 - - 检索到有未完成的任务，请及时校准' : Data.EnginnerState.Detail  }}
			</p>
		</view>

		<view class="content">
			<view android:gravity="center" class="list" v-for="(item,index) in botLidt" :key="index"
				@tap="BotClick(index)">
				<view v-if="index == 2 && Data.MCDelay != '' " class="degmdg">
					{{Data.UrgeWorkOrder}}
				</view>
				<image mode="" :class="item.AmierIMG"></image>
				<text>{{item.text}}</text>
			</view>
		</view>

		<!-- 
		<view class="inchwellGcsIP" @click="ERPGCSIP()"></view>

		<view class="inchwellGcsIP gcsDK" @click="gcsDK()"></view> -->

		<view style="width: 100%;height: 70px;float: left;"></view>


		<!-- <view class='bar'>
			<marquee>📢 区域经理&工程师执行的所有任务(安装、拆装、维修、保养),
				必须通过系统指派和处理，通过线下通知等方式告知的任务不会被系统统计到,
				请勿执行!</marquee>
		</view> -->
	</view>
</template>

<script>
	export default {
		data: function() {
			return {
				show: false,
				Scroll_text_at_bottom: [
					'区域经理&工程师执行的所有任务(安装、拆装、维修、保养)',
					'必须通过系统指派和处理，通过线下通知等方式告知的任务不会被系统统计到',
					'请勿执行',
				],
				// 卡片头部样式
				headStyle: {
					'padding': '10px 5px',
					'font-weight': 'bold'
				},
				bodyStyle: {
					'padding': '10px 10px'
				},
				//轮播图资源
				imgList: [
					require('../../static/img/banners/006.jpg'),
					require('../../static/img/banners/007.jpg'),
					require('../../static/img/banners/008.jpg'),
					require('../../static/img/banners/009.jpg'),
				],
				// 底部加的图标
				botLidt: [{
						name: 1,
						icon: require('../../static/img/icon/IP.png'),
						text: '定位坐标',
						AmierIMG: 'icon0IP'
					},
					{
						name: 1,
						icon: require('../../static/img/icon/KPI.png'),
						text: '每日打卡',
						AmierIMG: 'icon0KPI'
					},
					{
						name: 1,
						icon: require('../../static/img/icon/CC.png'),
						text: '工单催促',
						AmierIMG: 'icon0CC'
					},
				],
				//功能区图标加文字
				icon: [{
						name: 1,
						icon: require('../../static/img/icon/1.png'),
						text: '工单管理',
						AmierIMG: 'icon01'
					},
					{
						name: 2,
						icon: require('../../static/img/icon/2.png'),
						text: '订单管理',
						AmierIMG: 'icon02'
					},
					{
						name: 6,
						icon: require('../../static/img/icon/6.png'),
						text: '安装管理',
						AmierIMG: 'icon03'
					},
					{
						name: 3,
						icon: require('../../static/img/icon/3.png'),
						text: '保养管理',
						AmierIMG: 'icon04'
					},
					{
						name: 5,
						icon: require('../../static/img/icon/5.png'),
						text: 'VIP回访',
						AmierIMG: 'icon05'
					},
					{
						name: 4,
						icon: require('../../static/img/icon/4.png'),
						text: '工作日报',
						AmierIMG: 'icon06'
					},
					{
						name: 7,
						icon: require('../../static/img/icon/7.png'),
						text: '零配件',
						AmierIMG: 'icon07'
					},
					{
						name: 8,
						icon: require('../../static/img/icon/0.png'),
						text: '全部',
						AmierIMG: 'icon08'
					},
				],
				//点击跳转页面路径
				path: [
					"/pages/home/works/work.1",
					"/pages/home/works/work.2",
					"/pages/home/works/work.6",
					"/pages/home/works/work.3",
					"/pages/home/works/work.5",
					"/pages/home/works/work.4",
					"/pages/home/works/work.7",
					"/pages/home/works/work.8",
				],
				Data: {},
				imgData: [],
				Video: '',
				OPVideo: false,
			}
		},
		onShow() {
			//初次登录状态
			var that = this
			that.Data.ReturnVisit = ''
			that.Data.MCDelay = ''
			that.GetGCSHome()
			this.GetIndexBanners()
		},
		methods: {
			BotClick: function(index) {
				var row = index + 1
				// 1 是定位坐标
				if (row == 1)
					this.ERPGCSIP()
				// 2 是打卡
				if (row == 2)
					this.gcsDK()
				// 3 是催促
				if (row == 3)
					this.CuiCu()
			},
			// 工单催促
			CuiCu: function() {
				uni.navigateTo({
					url: '/pages/home/works/CuiCu/CuiCu',
				});
			},
			// 工程师打卡
			gcsDK: function() {
				var My = this

				uni.getLocation({
					type: 'wgs84',
					altitude: true,
					geocode: true,
					success: function(IP) {
						console.log(IP)
						if (IP.longitude == '5e-324') {
							uni.showToast({
								title: "地理位置获取失败,请检查网络与定位！",
								icon: "none"
							})
							return false
						}


						var obj = {
							method: 'POST',
							url: My.$store.state.url.split('/api/')[0] + '/api/' +
								'system/UploadMapCoordinate',
							data: {
								'Longitude': String(IP.longitude),
								'Latitude': String(IP.latitude),
							},
						}
						My.$httpnone(obj).then((res) => {
							var text = '经度：' + IP.longitude + '\n'

							text += '纬度：' + IP.latitude

							// text +=  ('地点：'  + IP.address.province + IP.address.city	 + IP.address.district	 + IP.address.street + IP.address.streetNum	)

							uni.showModal({
								title: '打卡成功！',
								content: text,
								success: function(resTwo) {
									if (resTwo.confirm) {
										console.log('用户点击确定')
									} else if (resTwo.cancel) {
										console.log('用户点击取消');
									}
								}
							});
						})
					},
					complete: () => {
						// console.log('正在获取定位')
					},
					fail: (err) => {
						uni.showToast({
							title: "地理位置获取失败,请开通权限！",
							icon: "none"
						})
						// console.log('init')
					},
				});
			},

			GetIndexBanners: function() {
				var obj = {
					method: 'GET',
					url: this.$store.state.url + 'System/GetIndexBanners',
					header: this.$store.state.token,
					data: {
						to: 2
					}
				}
				this.$httpnone(obj).then((res) => {
					console.log(res.Data.Dtos)
					this.imgData = res.Data.Dtos
				})
			},
			DelVideo: function() {
				this.Video = ''
				this.OPVideo = false
			},
			GetGCSHome: function() {
				var obj = {
					url: this.$store.state.url + 'System/GetGCSHome',
					method: 'GET',
				}
				this.$httpnone(obj).then((res) => {
					console.log(res.Data)
					this.Data = res.Data, console.log(res.Data)
					// 判断是否有未读消息
					var NoMasgindex = res.Data.NoReadJournalism
					if (NoMasgindex != 0) {
						uni.setTabBarBadge({
							index: 1,
							text: String(NoMasgindex)
						})
					}
					// 当状态为空闲时  判断是否存在其他任务
					if (this.Data.EnginnerState.Detail == '空闲' && this.Data.EnginnerWorking.length != 0)
						this.Data.EnginnerState.Detail = 'WaitStatus'
					this.$store.state.MCDelay = this.Data.MCDelay
					// 判断是否弹出信息窗口
					if (res.Data.EjectMessage != null) {
						uni.showModal({
							title: res.Data.EjectMessage.Title,
							content: res.Data.EjectMessage.Content,
							success: function(resTwo) {
								if (resTwo.confirm) {
									console.log('用户点击确定')
								} else if (resTwo.cancel) {
									console.log('用户点击取消');
								}
							}
						});
					}
				})
			},
			// 跳转打开erp
			ERPGCSIP: function() {
				uni.navigateTo({
					url: '/pages/home/works/gcsmap/gcsmap',
				});
			},
			// 切换目标状态
			worksfun: function() {
				uni.navigateTo({
					url: '/pages/home/works/works/works',
				})
			},
			//跳转 功能
			clickpath(i) {
				uni.navigateTo({
					url: this.path[i]
				});
			},
			CliOPVideo: function(Row) {
				if (Row.Video != null) {
					this.posterhttp = 'http://icms.inchwell.com.cn/file/IndexBanner/' + Row.Image,
						this.Video = 'http://icms.inchwell.com.cn/file/IndexBanner/' + Row.Video,
						console.log(this.Video)
					this.OPVideo = true
				}
			},
			DelVideo: function() {
				this.Video = ''
				this.OPVideo = false
			},





		}
	}
</script>

<style lang="scss" scoped>
	.box_home {
		width: 100%;
		// height: 100%;
		background: #FFFFFF;
		position: relative;
		top: 0;
		left: 0;
		// padding-bottom: 50px;
		padding-top: 80px;
		box-sizing: border-box;

		swiper {
			height: 240px;

			.start {
				width: 50px;
				height: 50px;
				position: absolute;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				margin: auto;
				z-index: 99;
			}

			.uni-image>img {
				opacity: 1;
			}

			.swiper-item {
				background-color: #ffffff;

				.images {
					width: 100%;

					image {
						opacity: 1;
					}
				}


			}
		}


		.ZindexVideo {
			width: 100%;
			height: 100%;
			z-index: 99;
			position: absolute;
			top: 0;
			bottom: 0;
			padding: 40% 0 0 0;
			box-sizing: border-box;
			transition: 2s;
			background-color: #FFFFFF;
		}


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

			span {
				font-size: 10px;
				color: #2785ff;
			}
		}

		// .swiper {
		// 	height: 240px;

		// 	image {
		// 		width: 100%;
		// 	}
		// }


		.content {
			width: 100%;

			.list {
				width: 23%;
				height: 100px;
				float: left;
				padding-top: 10px;
				margin: 1%;
				box-sizing: border-box;
				position: relative;
				border-radius: 10px;

				image {
					width: 45px;
					height: 45px;
					display: block;
					margin: auto;
				}


				.degmdg {
					width: 25px;
					height: 25px;
					border-radius: 50%;
					color: #FFFFFF;
					font-weight: bold;
					font-size: 10px;
					text-align: center;
					line-height: 25px;
					background-color: #FF0000;
					position: absolute;
					top: 0;
					right: 0;
					z-index: 100;
					box-sizing: border-box;
					transition: all 2s ease-out;
				}

				//1
				.icon01 {
					background-image: url(../../static/img/icon/1.png);
					background-size: 100% 100%;
				}

				//2
				.icon02 {
					background-image: url(../../static/img/icon/2.png);
					background-size: 100% 100%;
				}

				//6
				.icon03 {
					background-image: url(../../static/img/icon/3.png);
					background-size: 100% 100%;
				}

				//3
				.icon04 {
					background-image: url(../../static/img/icon/4.png);
					background-size: 100% 100%;
				}

				// 5
				.icon05 {
					background-image: url(../../static/img/icon/5.png);
					background-size: 100% 100%;
				}

				// 4
				.icon06 {
					background-image: url(../../static/img/icon/6.png);
					background-size: 100% 100%;
				}

				// 7
				.icon07 {
					background-image: url(../../static/img/icon/7.png);
					background-size: 100% 100%;
				}

				// 8
				.icon08 {
					background-image: url(../../static/img/icon/0.png);
					background-size: 100% 100%;
				}






				// 8
				.icon0IP {
					background-image: url(../../static/img/icon/IP.png);
					background-size: 100% 100%;
				}



				// 8
				.icon0KPI {
					background-image: url(../../static/img/icon/KPI.png);
					background-size: 100% 100%;
				}



				// 8
				.icon0CC {
					background-image: url(../../static/img/icon/CC.png);
					background-size: 100% 100%;
				}



				text {
					display: block;
					text-align: center;
					line-height: 40px;
					font-size: 15px;
				}
			}
		}

		// 当前任务
		.ZTstate {
			// float: left;
			width: 90%;
			-webkit-box-shadow: 3px 3px 6px #c1c1c1;
			-moz-box-shadow: 3px 3px 6px #c1c1c1;
			box-shadow: 3px 3px 6px #c1c1c1;
		}

		.inchwellGcsIP {
			width: 40%;
			min-height: 40px;
			background-color: #CCCCCC;
			float: left;
			margin: 5%;
			border-radius: 5px;
			background-image: url(../../static/img/GcsIP.png);
			background-repeat: no-repeat;
			background-size: 100%;
			-webkit-box-shadow: 3px 3px 6px #c1c1c1;
			-moz-box-shadow: 3px 3px 6px #c1c1c1;
			box-shadow: 3px 3px 6px #c1c1c1;
		}

		.gcsDK {
			background-image: url(../../static/img/gcsIPDk.png);
			background-repeat: no-repeat;
			background-size: 100%;
		}


		.card {
			width: 90%;
			min-height: 70px;
			background-color: #FFFFFF;
			float: left;
			margin-left: 5%;
			padding: 0 10px;
			line-height: 40px;
			box-sizing: border-box;
			border-radius: 10px;
			-webkit-box-shadow: 3px 3px 6px #c1c1c1;
			-moz-box-shadow: 3px 3px 6px #c1c1c1;
			box-shadow: 3px 3px 6px #c1c1c1;

			.TopText {
				width: 100%;
				min-height: 30px;
				font-weight: bold;
				line-height: 30px;
				border-bottom: 0.3px solid #ccc;

				span {
					float: right;
					color: #1e6fff;
				}
			}

		}





		.bar {
			width: 100%;
			// position: fixed;
			// left: 0;
			// bottom: 0;
			z-index: 88;
			background-color: #fef0f0;
			color: #fb4948;
		}

	}
</style>
