(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-home-works-detailed-Editfile"],{"090c":function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("1645")),o=i("93a4"),s={name:"AnUploadImg",components:{uniIcon:a.default},data:function(){return{imgList:[],imgBase64List:[]}},methods:{chooseImage:function(){var t=this;uni.chooseImage({success:function(e){for(var i=0;i<e.tempFilePaths.length;i++)(0,o.pathToBase64)(e.tempFilePaths[i]).then((function(e){t.imgList.push(e)})).catch((function(t){console.error(t)}));t.$store.state.imgList=t.imgList}})},perviewImg:function(t){console.log(t);var e=[];-1!=t?e[0]=this.imgList[t]:e=this.imgList,uni.previewImage({urls:e})},handleRemove:function(t){}}};e.default=s},"0f84":function(t,e,i){"use strict";var n=i("4ea4");i("a434"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("15c2")),o={data:function(){return{content:[{text:""}],text:[{text:""}],statusCode:!0,addimgbase:!0,load:!1,asd:0,checkbox:0,items:[{value:"CHN",name:"否",checked:"true"},{value:"USA",name:"是"}],current:99}},onBackPress:function(){return uni.navigateTo({url:"../work.4"}),!0},components:{anUploadImg:a.default},created:function(){var t={url:this.$store.state.url+"/PCenter/GetWorlDaily",method:"GET",header:this.$store.state.token,data:{workdailyId:this.$store.state.WorkdailyId}};this.$http(t).then((function(t){}))},methods:{radioChange:function(t){for(var e=0;e<this.items.length;e++)if(this.items[e].value===t.target.value){this.current=e;break}},imgVuex:function(){var t=this;if(console.log(this.current),99==this.current)return uni.showToast({title:"请选择是否完结！",icon:"none"}),!1;if(console.log("111"),1==this.asd)return!1;if(this.asd=1,1==this.load)return!1;this.load=!0,this.$store.state.imgList[0]||(this.addimgbase=!1);for(var e=[],i=[],n=0;n<this.text.length;n++)e.push(this.text[n].text);for(n=0;n<this.content.length;n++)i.push(this.content[n].text);var a={url:this.$store.state.url+"PCenter/AddWorkDailyContent",method:"POST",header:this.$store.state.token,data:{WorkDailyId:this.$store.state.WorkdailyId,Contents:i,Plans:e}};this.$http(a).then((function(e){console.log(t.$store.state.imgList),t.load=!1,t.addimgbase?console.log(t.upimg()):t.agi()}))},upimg:function(){for(var t=0;t<this.$store.state.imgList.length;t++){var e={url:this.$store.state.url+"PCenter/UploadWorkDailyPhoto",method:"POST",header:this.$store.state.token,data:{Id:this.$store.state.WorkdailyId,FileStr:this.$store.state.imgList[t]}};this.$http(e).then((function(t){}))}this.$store.state.imgList=[],this.agi()},agi:function(){var t={url:this.$store.state.url+"PCenter/UploadWorkDaily",method:"POST",header:this.$store.state.token,data:{Id:this.$store.state.WorkdailyId,type:this.current}};this.$http(t).then((function(t){uni.navigateTo({url:"../work.4"})}))},addinput:function(){var t={text:""};this.text.push(t)},deletetext:function(t){this.text.splice(t,1)},addinput1:function(){var t={text:""};this.content.push(t)},deletecontent:function(t){this.content.splice(t,1)}}};e.default=o},"15c2":function(t,e,i){"use strict";i.r(e);var n=i("79b3"),a=i("f2f5");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("4186");var s,r=i("f0c5"),d=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"352be3a9",null,!1,n["a"],s);e["default"]=d.exports},4186:function(t,e,i){"use strict";var n=i("5f0b"),a=i.n(n);a.a},"5f0b":function(t,e,i){var n=i("fa00b");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("fa6ec6a4",n,!0,{sourceMap:!1,shadowMode:!1})},"79b3":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={uniIcon:i("4d23").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"box"},[i("v-uni-view",{staticClass:"an-uploadImg-group"},[i("v-uni-view",[t._l(t.imgList,(function(e,n){return i("v-uni-view",{key:n,staticClass:"an-img",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.perviewImg(n)}}},[e?i("v-uni-image",{attrs:{src:e},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.perviewImg(n)}}}):t._e(),i("v-uni-view",{staticClass:"an-icon-close",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.handleRemove(n)}}},[i("uni-icon",{attrs:{type:"closeempty",size:"26",color:"#F00"}})],1)],1)})),i("v-uni-view",{staticClass:"an-img-add",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.chooseImage.apply(void 0,arguments)}}},[i("uni-icon",{attrs:{type:"plus",size:"36",color:"#FFFFFF"}})],1)],2)],1),i("v-uni-view",{staticClass:"aaddimg-bottom"})],1)},o=[]},"812e":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"box"},[n("v-uni-view",{staticClass:"title"},[n("v-uni-view",{staticClass:"tit"},[t._v("是否完结")]),n("v-uni-view",{staticClass:"radio"},[n("v-uni-radio-group",{on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.radioChange.apply(void 0,arguments)}}},t._l(t.items,(function(e,i){return n("v-uni-label",{key:e.value,staticStyle:{"margin-right":"15px"}},[n("v-uni-radio",{attrs:{value:e.value,checked:i===t.current}}),t._v(t._s(e.name))],1)})),1)],1)],1),n("v-uni-view",{staticClass:"textmini"},[n("v-uni-text",[t._v("安装、保养、维修任务已结束的，请选择是\n 安装、保养、维修任务未结束的，请选择否")])],1),n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"neir"},[t._v("工作内容"),n("v-uni-image",{staticClass:"iconimg",attrs:{src:i("e008"),mode:""},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.addinput1.apply(void 0,arguments)}}})],1),t._l(t.content,(function(e,a){return n("v-uni-view",{key:a,staticClass:"input"},[n("v-uni-image",{staticClass:"delete",attrs:{src:i("f9fa"),mode:""},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.deletecontent(a)}}}),n("v-uni-input",{staticClass:"zhi",attrs:{type:"text",value:""},model:{value:e.text,callback:function(i){t.$set(e,"text",i)},expression:"item.text"}})],1)}))],2),n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"neir"},[t._v("工作计划"),n("v-uni-image",{staticClass:"iconimg",attrs:{src:i("e008"),mode:""},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.addinput.apply(void 0,arguments)}}})],1),t._l(t.text,(function(e,a){return n("v-uni-view",{key:a,staticClass:"input"},[n("v-uni-image",{staticClass:"delete",attrs:{src:i("f9fa"),mode:""},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.deletetext(a)}}}),n("v-uni-input",{staticClass:"zhi",attrs:{type:"text",value:""},model:{value:e.text,callback:function(i){t.$set(e,"text",i)},expression:"item.text"}})],1)}))],2),n("v-uni-view",{staticStyle:{"padding-left":"15px"}},[t._v("添加图片说明")]),n("v-uni-view",{staticClass:"image"},[n("an-upload-img")],1),n("v-uni-button",{staticClass:"imgadd",attrs:{disabled:t.load,type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.imgVuex.apply(void 0,arguments)}}},[t._v("上传")])],1)},o=[]},"94da":function(t,e,i){"use strict";var n=i("9cfd"),a=i.n(n);a.a},9965:function(t,e,i){"use strict";i.r(e);var n=i("0f84"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"9cfd":function(t,e,i){var n=i("b954");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("8ba5f00e",n,!0,{sourceMap:!1,shadowMode:!1})},b954:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.box[data-v-19335d92]{width:100%;height:100%;background-color:#fff;font-size:14px}.box .textmini[data-v-19335d92]{width:100%;font-size:12px;color:#565656;padding-bottom:10px;padding-left:15px;box-sizing:border-box;border-bottom:1px solid silver}.box .title[data-v-19335d92]{width:100%;height:40px;line-height:40px;padding-left:15px;padding-right:20px;box-sizing:border-box;font-weight:700}.box .title .tit[data-v-19335d92]{float:left;margin-right:20px}.box .content[data-v-19335d92]{width:100%}.box .content .neir[data-v-19335d92]{width:100%;height:40px;line-height:40px;padding-left:15px;padding-right:20px;box-sizing:border-box;font-weight:700;border-bottom:1px solid silver}.box .content .neir .iconimg[data-v-19335d92]{width:30px;height:30px;display:block;float:right;margin-top:5px}.box .content .input[data-v-19335d92]{width:100%;height:40px;border-bottom:.5px solid silver}.box .content .input .delete[data-v-19335d92]{width:30px;height:30px;margin-top:5px;margin-left:5px;display:block;float:left}.box .content .input .zhi[data-v-19335d92]{width:90%;height:40px;padding-left:15px;box-sizing:border-box}.box .imgadd[data-v-19335d92]{width:200px}.box .image[data-v-19335d92]{width:100%}',""]),t.exports=e},d70b:function(t,e,i){"use strict";i.r(e);var n=i("812e"),a=i("9965");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("94da");var s,r=i("f0c5"),d=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"19335d92",null,!1,n["a"],s);e["default"]=d.exports},f2f5:function(t,e,i){"use strict";i.r(e);var n=i("090c"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},f9fa:function(t,e,i){t.exports=i.p+"static/img/cancel.66df45d3.png"},fa00b:function(t,e,i){var n=i("24fb"),a=i("1de5"),o=i("f664");e=n(!1);var s=a(o);e.push([t.i,".box[data-v-352be3a9]{width:100%}.an-uploadImg-group[data-v-352be3a9]{margin:%?5?% %?20?%}.an-img[data-v-352be3a9]{float:left;margin-right:%?10?%}.an-img-add[data-v-352be3a9]{float:left;margin-right:%?10?%;height:%?200?%;width:%?200?%; \n\t/* background-color: #C8C7CC; */background:url("+s+") repeat;background-size:100% 100%;text-align:center;line-height:%?110?%}.an-img>uni-image[data-v-352be3a9]{height:%?200?%;width:%?200?%}.an-icon-close[data-v-352be3a9]{position:relative;right:%?-50?%;top:%?-120?%}",""]),t.exports=e}}]);