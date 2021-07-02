<template>
	<view class="conent">
		<view class="an-uploadImg-group">
			<view>
				<view class="an-img" v-for="(item, index) in imgList" :key="index" @click="perviewImg(index)">
					<image :src="item" v-if="item" @click="perviewImg(index)"></image>
					<view class="an-icon-close" @click.stop="handleRemove(index)">
						<uni-icon type="closeempty" size="26" color="#F00"></uni-icon>
					</view>
				</view>
				<view v-if="!imgList[0]" class="an-img-add" @click="chooseImage">
					<uni-icon type="plus" size="36" color="#FFFFFF">

					</uni-icon>

				</view>
			</view>
		</view>
		<view class="aaddimg-bottom">

		</view>
		<!-- 回显 -->
		<hxpreviewimg :list.sync="previewImgList" :current.sync="currentImg" :start.sync="PINum"></hxpreviewimg>
	</view>
</template>

<script>
	import uniIcon from '@/components/ACell/uni-icon/uni-icon.vue'
	import {
		pathToBase64
	} from './js_sdk/gsq-image-tools/image-tools/index.js'
	import hxpreviewimg from '@/components/hx-preview-img/hx-preview-img.vue'
	
	export default {
		name: 'AnUploadImg',
		components: {
			uniIcon,
			hxpreviewimg
		},
		data() {
			return {
				imgList: [] ,
				listimgs: '',
				imgBase64List: [],
				
				imgsrc:'',
				
				currentImg: '',
				previewImgList: [],
				PINum: 0,
				// imgList: ['img1.png', 'img2.png', 'img3.png', 'img4.png']
			};
		},
		methods: {
			chooseImage() {
				uni.chooseImage({
					success: (res) => {
						this.imgsrc = res.tempFilePaths[0]
						for (var i = 0; i < 1; i++) {
							pathToBase64(res.tempFilePaths[i])
								.then(base64 => {
									this.imgList.push(base64) //用于回显
									this.listimgs = base64 //单项上传
									var asd = this.$store.state.addimgbaoidandlr.split('%%')
									var obj = {
										url: this.$store.state.url + 'Maintain/UploadMaintainPhoto',
										method: 'POST',
										header: this.$store.state.token,
										data: {
											Id : asd[0],
											Type : asd[1],
											FileStr : this.listimgs
										}
									}
									this.$http(obj).then((res) => {
										
									})
								})
								.catch(error => {
									console.error(error)
								})
						}

					}
				})
			},
			perviewImg(index) {
				console.log(this.imgsrc)
				this.currentImg = this.imgsrc
				var asd = []
				asd[0] = this.imgsrc
				this.previewImgList = asd
				this.PINum++
				// console.log(this.imgList[index])
				// let urls = [];
				// if (index != -1) {
				// 	urls[0] = this.imgList[index];
				// } else {
				// 	urls = this.imgList;
				// }
				// uni.previewImage({
				// 	urls: urls
				// });
			},
			handleRemove(index) {

			}
		}
	}
</script>

<style>
	.conent {
		width: 100%;
	}
	.an-uploadImg-group{
		margin: 5upx 20upx;
	}
	.an-img{
		float: left; 
		margin-right: 10upx;
	}
	.an-img-add{
		float: left; 
		margin-right: 10upx; 
		height: 110upx; 
		width: 110upx; 
		/* background-color: #C8C7CC; */
		background: url(icon/top.png) repeat;
		background-size: 100% 100%;
		text-align: center; 
		margin-top: 50upx;
		margin-left: 40upx;
		line-height: 200upx;
	}
	.an-img>image{
		height: 200upx; 
		width: 200upx;
	}
	.an-icon-close{
		position: relative; 
		right: -50upx; 
		top: -120upx;
	}
</style>
