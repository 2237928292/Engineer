(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-home-works-Spareparts-Navigationindetail"],{"01ed":function(t,n,e){"use strict";e.r(n);var i=e("39e6"),a=e("4e40");for(var r in a)"default"!==r&&function(t){e.d(n,t,(function(){return a[t]}))}(r);e("2096");var s,o=e("f0c5"),u=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"82be15e6",null,!1,i["a"],s);n["default"]=u.exports},2096:function(t,n,e){"use strict";var i=e("aee9"),a=e.n(i);a.a},"39e6":function(t,n,e){"use strict";var i;e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){return i}));var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"box"},[e("v-uni-view",{staticClass:"left"},t._l(t.Data,(function(n,i){return e("v-uni-view",{key:i,staticClass:"buts",class:{butss:i==t.bgindex},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.hanic(i)}}},[t._v(t._s(n.sparePartsTypeName))])})),1),e("v-uni-view",{staticClass:"right"},t._l(t.rightData,(function(n,i){return e("v-uni-view",{key:i,staticClass:"img"},[t._l(n.goods,(function(n,i){return e("v-uni-image",{key:i,attrs:{src:t.Url+n.goodsIcon},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.cadd(n)}}})})),e("v-uni-text",[t._v(t._s(n.threeReclassifyName))])],2)})),1)],1)},r=[]},"4e40":function(t,n,e){"use strict";e.r(n);var i=e("e322"),a=e.n(i);for(var r in i)"default"!==r&&function(t){e.d(n,t,(function(){return i[t]}))}(r);n["default"]=a.a},a637:function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.left[data-v-82be15e6]{width:30%;height:100%;float:left}.right[data-v-82be15e6]{width:70%;height:100%;float:left;overflow:auto;background-color:#e3e2e7}.buts[data-v-82be15e6]{width:100%;height:30px;line-height:30px;padding-left:5px;box-sizing:border-box}.butss[data-v-82be15e6]{width:100%;height:30px;line-height:30px;padding-left:5px;box-sizing:border-box;background-color:#e3e2e7}.img[data-v-82be15e6]{width:70%;margin:auto;margin-top:10px;font-weight:700}.img uni-image[data-v-82be15e6]{width:100%;height:140px}',""]),t.exports=n},aee9:function(t,n,e){var i=e("a637");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("4a453426",i,!0,{sourceMap:!1,shadowMode:!1})},e322:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={data:function(){return{Data:[],rightData:[],Url:this.$store.state.httpimgs,bgindex:0}},onBackPress:function(){return uni.navigateTo({url:"./classification"}),!0},mounted:function(){this.Data=this.$store.state.Ninedetails,this.rightData=this.Data[0].reclassifysContent},methods:{hanic:function(t){this.rightData=this.Data[t].reclassifysContent,this.bgindex=t},cadd:function(t){this.$store.state.NinedetailsHTML=t.goodHtmlUrl,uni.navigateTo({url:"./drawings"})}}};n.default=i}}]);