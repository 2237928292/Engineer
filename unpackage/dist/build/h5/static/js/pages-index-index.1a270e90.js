(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"02fc":function(t,n,e){"use strict";e.r(n);var r=e("9b2f"),i=e("e3af");for(var a in i)"default"!==a&&function(t){e.d(n,t,(function(){return i[t]}))}(a);e("f9b7");var o,u=e("f0c5"),c=Object(u["a"])(i["default"],r["b"],r["c"],!1,null,"71495536",null,!1,r["a"],o);n["default"]=c.exports},"182f":function(t,n,e){"use strict";e.r(n);var r=e("a5f6"),i=e.n(r);for(var a in r)"default"!==a&&function(t){e.d(n,t,(function(){return r[t]}))}(a);n["default"]=i.a},"1de5":function(t,n,e){"use strict";t.exports=function(t,n){return n||(n={}),t=t&&t.__esModule?t.default:t,"string"!==typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),n.hash&&(t+=n.hash),/["'() \t\n]/.test(t)||n.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},2816:function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return r}));var r={uGap:e("02fc").default,uCellGroup:e("35df").default,uCellItem:e("a1d5").default},i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"box"},[e("v-uni-view",{staticClass:"index"},[e("v-uni-view",{staticClass:"timg"},[e("v-uni-image",{staticClass:"ttimg iicon",attrs:{mode:""}})],1),e("v-uni-view",{staticClass:"geren-right"},[t._v("欢迎 "+t._s(t.username))])],1),e("u-gap",{attrs:{height:"40","bg-color":"#f0f0f0"}}),e("v-uni-view",{staticClass:"table"},[e("u-cell-group",t._l(t.data,(function(n,r){return e("u-cell-item",{key:r,attrs:{icon:n.icon,title:n.name},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.Click_Index(n)}}})})),1)],1),e("v-uni-button",{staticClass:"tui",attrs:{type:"warn"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.botLogo.apply(void 0,arguments)}}},[t._v("退出登录")])],1)},a=[]},"3fed":function(t,n,e){var r=e("ee3c");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=e("4f06").default;i("33251d37",r,!0,{sourceMap:!1,shadowMode:!1})},"77d0":function(t,n,e){t.exports=e.p+"static/img/download.cfcad754.jpg"},"9b2f":function(t,n,e){"use strict";var r;e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return r}));var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"u-gap",style:[t.gapStyle]})},a=[]},a3b3:function(t,n,e){var r=e("bfd0");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=e("4f06").default;i("0abb5d93",r,!0,{sourceMap:!1,shadowMode:!1})},a5f6:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r={data:function(){return{title:"Hello",data:[{name:"我的资料",icon:"account-fill",Lick_url:""},{name:"关于公司",icon:"home-fill",Lick_url:"./Company/Company"},{name:"使用手册",icon:"file-text-fill",Lick_url:"./UserManual/UserManual"},{name:"检查更新",icon:"reload",Lick_url:"./mine/Update"}],timg:e("77d0"),username:"",timer:null,timerindex:0}},onShow:function(){this.initUserName()},created:function(){this.initUserName()},methods:{initUserName:function(){var t=this;uni.getStorage({key:"admin",success:function(n){console.log(n.data),t.username=n.data}})},Click_Index:function(t){if(""==t.Lick_url)return!1;uni.navigateTo({url:t.Lick_url})},botLogo:function(){this.$store.state.token="",uni.setStorage({key:"Token",data:"",success:function(){uni.navigateTo({url:"../Logo/Logo"})}})}}};n.default=r},bfd0:function(t,n,e){var r=e("24fb"),i=e("1de5"),a=e("77d0");n=r(!1);var o=i(a);n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.box[data-v-583de15d]{width:100%;height:100%;background-color:#fff}.box .iicon[data-v-583de15d]{background-image:url('+o+");background-size:100% 100%}.box .tui[data-v-583de15d]{margin:auto;margin-top:50px}.box .index[data-v-583de15d]{width:100%;height:120px;background:#fff;box-sizing:border-box}.box .index .timg[data-v-583de15d]{width:70px;height:70px;float:left;margin-top:25px;margin-left:%?25?%}.box .index .timg .ttimg[data-v-583de15d]{width:100%;height:100%;border-radius:50%}.box .index .geren-right[data-v-583de15d]{height:100%;float:left;width:calc(100% - 120px);padding-left:30px;box-sizing:border-box;font-size:15px;line-height:120px}.box .table[data-v-583de15d]{width:100%;background:#fff}.box .table .Transitional[data-v-583de15d]{width:95%;height:45px;background:#fff;border-bottom:.5px solid #ccc;margin:auto;font-size:13px;line-height:45px}.box .table .Transitional .geren-right[data-v-583de15d]{float:right}.box uni-button[data-v-583de15d]{width:80%;margin:50px}",""]),t.exports=n},ce94:function(t,n,e){"use strict";e.r(n);var r=e("2816"),i=e("182f");for(var a in i)"default"!==a&&function(t){e.d(n,t,(function(){return i[t]}))}(a);e("fdc1");var o,u=e("f0c5"),c=Object(u["a"])(i["default"],r["b"],r["c"],!1,null,"583de15d",null,!1,r["a"],o);n["default"]=c.exports},e3af:function(t,n,e){"use strict";e.r(n);var r=e("fb5b"),i=e.n(r);for(var a in r)"default"!==a&&function(t){e.d(n,t,(function(){return r[t]}))}(a);n["default"]=i.a},ee3c:function(t,n,e){var r=e("24fb");n=r(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */',""]),t.exports=n},f9b7:function(t,n,e){"use strict";var r=e("3fed"),i=e.n(r);i.a},fb5b:function(t,n,e){"use strict";e("a9e3"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r={name:"u-gap",props:{bgColor:{type:String,default:"transparent "},height:{type:[String,Number],default:30},marginTop:{type:[String,Number],default:0},marginBottom:{type:[String,Number],default:0}},computed:{gapStyle:function(){return{backgroundColor:this.bgColor,height:this.height+"rpx",marginTop:this.marginTop+"rpx",marginBottom:this.marginBottom+"rpx"}}}};n.default=r},fdc1:function(t,n,e){"use strict";var r=e("a3b3"),i=e.n(r);i.a}}]);