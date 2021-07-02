<template>
	<view class="box">

		<u-card v-for="(item, index) in Data" :key="index" :title="item.head" @tap='FunClick(item)' 
		title-color='#303133'
		>
			<view class="" slot="body">
				<view>
					{{item.body}}
				</view>
			</view>
		</u-card>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				Data: [],
			};
		},
		onBackPress() {
			uni.switchTab({
				url: '../UserManual'
			})
		},
		created() {
			console.log(this.$store.state.DescribeId)
			var State = this.$store.state.DescribeId
			if (State == '') {
				// 未选择   错误进入
			}
			if (State == 'InstallationTasks') {
				// 安装任务
				this.Data = [{
						head: "指派安装任务",
						body: "- - 在安装任务列表页面选择需要派送的任务，点击进入详情页。\n " +
							"- - 点击底部 '工程师选择' 区域，在弹出的工程师列表中选择想要指派的工程师，然后点击确认保存。\n" +
							"- - 此时如果想要修改工程师，重复以上操作，再次点击 '工程师选择' 区域，重新选择工程师即可。\n " +
							"- - 确认无误以后点击 '指派' 按钮 进行指派 ",
					},
					{
						head: "接受/拒绝 安装任务",
						body: "- - 在安装任务列表页面选择想要接受/拒绝的任务，点击进入详情页。\n " +
							"- - 根据需求，点击底部 '接受'/'拒绝' 按钮，按钮完成操作",
					},
					{
						head: "修改任务状态为 '出发' ",
						body: "- - 在安装任务列表页面选择想要操作的任务，点击进入详情页。\n " +
							"- - 点击底部 '出发' 按钮，按钮完成操作",
					},
					{
						head: "修改任务状态为 '到达' ",
						body: "- - 在安装任务列表页面选择想要操作的任务，点击进入详情页。\n " +
							"- - 确认到达目的地后，点击底部 '到达' 按钮，按钮完成操作",
					},
					{
						head: "修改任务状态为 '处理' ",
						body: "- - 在安装任务列表页面选择想要操作的任务，点击进入详情页。\n " +
							"- - 完成任务以后，输入工作内容（必填项），然后点击底部 '处理' 按钮完成操作 ",
					},
					{
						head: "增派工程师",
						body: "- - 在安装任务列表页面，点击右上角图标，进入安装任务历史记录页面\n " +
							"- - 选择想要增派工程师的任务，点击进入详情页， " +
							"点击 '工程师' 区域的 '增派工程师'按钮，在弹出的工程师列表内选择想要增派的工程师， " +
							"点击底部确认按钮进行增派",
					},
				]
			}
			if (State == 'MaintenanceManagement') {
				// 保养管理
				this.Data = [{
						head: "接受/拒绝 保养任务",
						body: "- - 在保养任务列表页面选择想要接受/拒绝的任务，点击进入详情页。\n " +
							"- - 根据需求，点击底部 '接受'/'拒绝' 按钮，按钮完成操作",
					},
					{
						head: "修改任务状态为 '出发' ",
						body: "- - 在保养任务列表页面选择想要操作的任务，点击进入详情页。\n " +
							"- - 点击底部 '出发' 按钮，按钮完成操作",
					},
					{
						head: "修改任务状态为 '到达' ",
						body: "- - 在保养任务列表页面选择想要操作的任务，点击进入详情页。\n " +
							"- - 确认到达目的地后，点击底部 '到达' 按钮，按钮完成操作",
					},
					{
						head: "修改任务状态为 '处理' ",
						body: "- - 在保养任务列表页面选择想要操作的任务，点击进入详情页。\n " +
							"- - 完成任务以后，上传保养设备图片，输入工作内容（必填项），然后点击底部 '完成保养' 按钮完成操作 ",
					},
					{
						head: "增派工程师",
						body: "- - 在保养任务列表页面，点击右上角图标，进入保养任务历史记录页面\n " +
							"- - 选择想要增派工程师的任务，点击进入详情页， " +
							"点击 '工程师' 区域的 '增派工程师按钮'，在弹出的工程师列表内选择想要增派的工程师， " +
							"点击底部确认按钮进行增派",
					},
				]
			}
			if (State == 'RepairPositioning') {
				// 修复定位
				this.Data = [{
						head: "修复手机定位失败",
						body: "- - 如果手机处于wifi状态，请切换至数据网络，随后重启APP",
					},
					{
						head: "授权APP定位",
						body: "- - 如果您没有给予APP定位权限，请点击此卡片前往授权，随后重启APP",
					}
				]
			}





		},
		methods:{
			FunClick:function(item){
				if(item.head == '授权APP定位'){
					// #ifdef APP-PLUS
					uni.getSystemInfo({
						success(res) {
							if (res.platform == 'ios') { //IOS
								plus.runtime.openURL("app-settings://");
							} else if (res.platform == 'android') { //安卓
								let main = plus.android.runtimeMainActivity();
								let Intent = plus.android.importClass("android.content.Intent");
								let mIntent = new Intent('android.settings.ACTION_SETTINGS');
								main.startActivity(mIntent);
							}
						}
					});
					// #endif
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.box {
		background-color: #f4f4f4;
		box-sizing: border-box;

		.u-card__head {
			margin: -5px;
		}
	}
</style>
