<template>
	<view class="box">
		<!-- {{form.InchwellCode}} -->


		<u-field v-model="form.InchwellCode" label="二维码编号" label-width='150' placeholder="请扫描设备二维码">
			<u-button size="mini" slot="right" type="success"   @tap='Scode(1)'  >
				<u-icon name="scan" size="40"></u-icon>
			</u-button>
		</u-field>

		<u-field v-model="form.Controller" label="控制器" label-width='150' placeholder="请扫描控制器条形码">
			<u-button size="mini" slot="right" type="success"  @tap='Scode(2)'>
				<u-icon name="scan" size="40"></u-icon>
			</u-button>
		</u-field>

		<u-field v-model="form.Sensor" type='number'  label="传感器" label-width='150' placeholder="请输入传感器号码">
		</u-field>



		<view style="width: 100%;padding: 20px 20px 0 0;box-sizing: border-box;">
			<u-button size='medium' type="primary" style='float: right;' @tap='BindCusEquSensor()'>确认绑定</u-button>
		</view>


	</view>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					InchwellCode: '',
					Controller: '',
					Sensor: '',
				}
			};
		},
		created() {
		},
		methods:{
			Scode:function(code){
				var that = this
				uni.scanCode({
					success: function(res) {
						if(code == 1){
							if (res.result.split('?')[0] ==
								'http://icms.inchwell.com.cn/web/gotoinchwell.html') {
								that.form.InchwellCode = res.result.split('=')[1]
							}else{
								uni.showToast({
									title: "请扫描英之杰设备二维码",
									icon: "none"
								})
							}
						}else{
							that.form.Controller = res.result
						}						
					}
				});
			},
			BindCusEquSensor:function(){
				if(this.form.InchwellCode == '' || this.form.InchwellCode == null){
					uni.showToast({
						title: "请扫描设备二维码",
						icon: "none"
					})
					return false
				}
				if(this.form.Controller == '' || this.form.Controller == null){
					uni.showToast({
						title: "请扫描控制器条形码",
						icon: "none"
					})
					return false
				}
				if(this.form.Sensor == '' || this.form.Sensor == null){
					uni.showToast({
						title: "请输入传感器号码",
						icon: "none"
					})
					return false
				}
				
				
				var obj = {
					url: this.$store.state.url + 'CRM/BindCusEquSensor',
					method: 'POST',
					data: this.form
				}
				this.$http(obj).then((res) => {
					uni.showToast({
						title: "绑定成功！",
						icon: "none"
					})
					uni.navigateTo({
						url: '../work.8',
					});
				})
			}
		}

	}
</script>

<style lang="scss">

</style>
