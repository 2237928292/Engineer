(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-home-works-work.8"],{"3dbb":function(t,n,i){"use strict";var e=i("8a36"),o=i.n(e);o.a},"475a":function(t,n,i){"use strict";i.r(n);var e=i("dc63"),o=i.n(e);for(var c in e)"default"!==c&&function(t){i.d(n,t,(function(){return e[t]}))}(c);n["default"]=o.a},"47c2":function(t,n,i){var e=i("24fb");n=e(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.box[data-v-6f838bef]{width:100%;height:100%;background-color:#fff}.boa[data-v-6f838bef]{width:100%;background:#fff;height:150px;box-sizing:border-box}.boa .text[data-v-6f838bef]{width:100px;display:block;font-weight:bolder;padding-left:20px}.boa .div[data-v-6f838bef]{width:calc(100% / 4);height:100px;float:left;border-radius:10px;box-sizing:border-box;text-align:center;margin-top:10px;font-size:12px;line-height:20px;position:relative}.boa .div .degmdg[data-v-6f838bef]{width:25px;height:25px;border-radius:50%;color:#fff;font-weight:700;font-size:10px;text-align:center;line-height:25px;background-color:red;position:absolute;top:0;right:0;box-sizing:border-box;-webkit-transition:all 2s ease-out;transition:all 2s ease-out}.boa .div .icons[data-v-6f838bef]{width:100%;height:80px;display:block;padding:15px;box-sizing:border-box}.boa .div .icons .icon[data-v-6f838bef]{width:45px;height:45px;display:block;margin:auto}',""]),t.exports=n},"85e1":function(t,n,i){"use strict";i.r(n);var e=i("c64f"),o=i("475a");for(var c in o)"default"!==c&&function(t){i.d(n,t,(function(){return o[t]}))}(c);i("3dbb");var s,a=i("f0c5"),r=Object(a["a"])(o["default"],e["b"],e["c"],!1,null,"6f838bef",null,!1,e["a"],s);n["default"]=r.exports},"8a36":function(t,n,i){var e=i("47c2");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var o=i("4f06").default;o("336b76b0",e,!0,{sourceMap:!1,shadowMode:!1})},c64f:function(t,n,i){"use strict";var e;i.d(n,"b",(function(){return o})),i.d(n,"c",(function(){return c})),i.d(n,"a",(function(){return e}));var o=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("v-uni-view",{staticClass:"box"},t._l(t.imgsss,(function(n,e){return i("v-uni-view",{key:e,staticClass:"boa"},[i("v-uni-text",{staticClass:"text"},[t._v(t._s(n.text))]),t._l(n.icon,(function(e,o){return i("v-uni-view",{key:o,staticClass:"div",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.Url(n,o)}}},["保养延迟"==e.text&&0!=t.byhcStr?i("v-uni-view",{staticClass:"degmdg"},[t._v(t._s(t.byhcStr))]):t._e(),i("v-uni-view",{staticClass:"icons"},[i("v-uni-image",{staticClass:"icon",attrs:{src:e.icon,alt:!0},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.con(e)}}})],1),i("v-uni-text",[t._v(t._s(e.text))])],1)}))],2)})),1)},c=[]},dc63:function(t,n,i){"use strict";i("ac1f"),i("1276"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{byhcStr:this.$store.state.degmsgServiceRegionalIdLength,name:"全部",imgsss:[{text:"报修相关",icon:[{icon:"/static/img/icon/1.png",text:"工单管理",url:"/pages/home/works/work.1"},{icon:"/static/img/icon/1-2.png",text:"报修管理",url:"/pages/home/works/work.6"}]},{text:"订单相关",icon:[{icon:"/static/img/icon/2.png",text:"订单管理",url:"/pages/home/works/work.2"},{icon:"/static/img/icon/7.png",text:"零配件",url:"/pages/home/works/work.7"}]},{text:"保养相关",icon:[{icon:"/static/img/icon/4.png",text:"保养管理",url:"/pages/home/works/work.3"},{icon:"/static/img/icon/4-2.png",text:"保养延迟",url:"/pages/home/works/DelaysMaintenance/DelaysMaintenance"}]},{text:"人员相关",icon:[{icon:"/static/img/icon/4-1.png",text:"人员调配",url:"/pages/home/works/Allocate/Allocate"},{icon:"/static/img/icon/6.png",text:"工作日报",url:"/pages/home/works/work.4"}]},{text:"客户相关",icon:[{icon:"/static/img/icon/baifang.png",text:"客户首访",url:"/pages/home/works/Firstvisit/Firstvisit"},{icon:"/static/img/icon/5.png",text:"VIP回访",url:"/pages/home/works/work.5"},{icon:"/static/img/icon/5-3.png",text:"扫码录设备",url:""},{icon:"/static/img/icon/5-4.png",text:"查看设备",url:""},{icon:"/static/img/icon/5-5.png",text:"录安装日期",url:""},{icon:"/static/img/icon/5-6.png",text:"设备评定",url:"/pages/home/works/EquipmentEvaluation/EquipmentEvaluation"}]},{text:"文档相关",icon:[{icon:"/static/img/icon/6-1.png",text:"设备说明书",url:"./TEXT/Manual/Manual"},{icon:"/static/img/icon/6-2.png",text:"培训案例",url:"./Trainingcase/Trainingcase"},{icon:"/static/img/icon/6-3.png",text:"规章制度",url:"./Regulations/Regulations"},{icon:"/static/img/icon/6-4.png",text:"积压库存",url:"./TEXT/stock/stock"}]}]}},onBackPress:function(){return uni.switchTab({url:"../home"}),!0},methods:{con:function(t){console.log(t)},Url:function(t,n){var i=this;return"录安装日期"==t.icon[n].text?(uni.scanCode({success:function(t){i.$store.state.gsQRcode=t.result,i.$store.state.weburl=t.result,"http://icms.inchwell.com.cn/web/gotoinchwell.html"==t.result.split("?")[0]&&uni.navigateTo({url:"./QRcode/code"})}}),!1):"扫码录设备"==t.icon[n].text?(uni.scanCode({success:function(t){"http://icms.inchwell.com.cn/web/gotoinchwell.html"==t.result.split("?")[0]&&(i.$store.state.equipments=t.result.split("=")[1],uni.navigateTo({url:"./equipment/equipment"}))}}),!1):void(""==t.icon[n].url?uni.showToast({title:"当前功能正在研发",icon:"none"}):uni.navigateTo({url:t.icon[n].url}))}}};n.default=e}}]);