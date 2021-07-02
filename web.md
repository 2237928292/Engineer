
<!-- 分页 -->

	pageNum: '1',
	numPerPage: '',
	orderField: '',
	orderDirection: '',

<!-- 阴影 -->

	border: 1px solid #e3dfdf;
	margin: auto;
	border-radius: 5px;
	margin-top: 10px;

	-webkit-box-shadow: 3px 3px 6px #c1c1c1;
	-moz-box-shadow: 3px 3px 6px #c1c1c1;
	box-shadow: 3px 3px 6px #c1c1c1;
			
<!-- 黑框提示 -->

	uni.showToast({
		title: '请输入登录名',
		icon: "none"
	})
	return false
				
<!-- 自定义导航栏 -->
	page.json
		{
			"path": "../../../../../123.vue",
			"style": {
				"navigationBarTitleText": "标题",
				"onReachBottomDistance": 100, //触发的距离   需要分页页面保留
				"app-plus": {
					"titleNView": false
					// 去除原生导航栏
				}
			}
		},
		
	导航栏页面
		<hx-navbar :config="config" @clickBtn='rightCion' ></hx-navbar>
	data 配置项
		config: {
			title: '工作日报',
			color: '#000000',
			//背景颜色;参数一：透明度（0-1）;参数二：背景颜色（array则为线性渐变，string为单色背景）
			backgroundColor: [1,'#efefef'],
			// 状态栏 ，数组则为滑动变色
			statusBarBackground: ['', '#ffffff'],
			font: 'xff001',
			rightButton: [{
				key: '001',
				icon: '&#xe601;',
				position: 'right'
			}],
		},
		