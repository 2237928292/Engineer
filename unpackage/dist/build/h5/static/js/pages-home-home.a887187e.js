(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-home-home"],{"0281":function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"u-card",props:{full:{type:Boolean,default:!1},title:{type:String,default:""},titleColor:{type:String,default:"#303133"},titleSize:{type:[Number,String],default:"30"},subTitle:{type:String,default:""},subTitleColor:{type:String,default:"#909399"},subTitleSize:{type:[Number,String],default:"26"},border:{type:Boolean,default:!0},index:{type:[Number,String,Object],default:""},margin:{type:String,default:"30rpx"},borderRadius:{type:[Number,String],default:"16"},headStyle:{type:Object,default:function(){return{}}},bodyStyle:{type:Object,default:function(){return{}}},footStyle:{type:Object,default:function(){return{}}},headBorderBottom:{type:Boolean,default:!0},footBorderTop:{type:Boolean,default:!0},thumb:{type:String,default:""},thumbWidth:{type:[String,Number],default:"60"},thumbCircle:{type:Boolean,default:!1},padding:{type:[String,Number],default:"30"},showHead:{type:Boolean,default:!0},showFoot:{type:Boolean,default:!0},boxShadow:{type:String,default:"none"}},data:function(){return{}},methods:{click:function(){this.$emit("click",this.index)},headClick:function(){this.$emit("head-click",this.index)},bodyClick:function(){this.$emit("body-click",this.index)},footClick:function(){this.$emit("foot-click",this.index)}}};e.default=n},"093b":function(t,e,i){"use strict";i.r(e);var n=i("577d"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"0b1b":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-card",class:{"u-border":t.border,"u-card-full":t.full,"u-card--border":t.borderRadius>0},style:{borderRadius:t.borderRadius+"rpx",margin:t.margin,boxShadow:t.boxShadow},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.click.apply(void 0,arguments)}}},[t.showHead?i("v-uni-view",{staticClass:"u-card__head",class:{"u-border-bottom":t.headBorderBottom},style:[{padding:t.padding+"rpx"},t.headStyle],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.headClick.apply(void 0,arguments)}}},[t.$slots.head?t._t("head"):i("v-uni-view",{staticClass:"u-flex u-row-between"},[t.title?i("v-uni-view",{staticClass:"u-card__head--left u-flex u-line-1"},[t.thumb?i("v-uni-image",{staticClass:"u-card__head--left__thumb",style:{height:t.thumbWidth+"rpx",width:t.thumbWidth+"rpx",borderRadius:t.thumbCircle?"100rpx":"6rpx"},attrs:{src:t.thumb,mode:"aspectfull"}}):t._e(),i("v-uni-text",{staticClass:"u-card__head--left__title u-line-1",style:{fontSize:t.titleSize+"rpx",color:t.titleColor}},[t._v(t._s(t.title))])],1):t._e(),t.subTitle?i("v-uni-view",{staticClass:"u-card__head--right u-line-1"},[i("v-uni-text",{staticClass:"u-card__head__title__text",style:{fontSize:t.subTitleSize+"rpx",color:t.subTitleColor}},[t._v(t._s(t.subTitle))])],1):t._e()],1)],2):t._e(),i("v-uni-view",{staticClass:"u-card__body",style:[{padding:t.padding+"rpx"},t.bodyStyle],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.bodyClick.apply(void 0,arguments)}}},[t._t("body")],2),t.showFoot?i("v-uni-view",{staticClass:"u-card__foot",class:{"u-border-top":t.footBorderTop},style:[{padding:t.$slots.foot?t.padding+"rpx":0},t.footStyle],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.footClick.apply(void 0,arguments)}}},[t._t("foot")],2):t._e()],1)},o=[]},"0f11":function(t,e,i){t.exports=i.p+"static/img/5.bcf80bcb.png"},"15cb":function(t,e,i){"use strict";var n=i("582c"),a=i.n(n);a.a},"1de5":function(t,e,i){"use strict";t.exports=function(t,e){return e||(e={}),t=t&&t.__esModule?t.default:t,"string"!==typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},"47cd":function(t,e,i){t.exports=i.p+"static/img/4.b45ffecc.png"},"49cf":function(t,e,i){t.exports=i.p+"static/img/006.d5af075e.jpg"},"4d9f":function(t,e,i){"use strict";var n=i("df02"),a=i.n(n);a.a},"54fc":function(t,e,i){var n=i("24fb"),a=i("1de5"),o=i("b274"),r=i("8f1f"),s=i("c30f"),c=i("47cd"),d=i("0f11"),l=i("58ce"),u=i("e4cf"),f=i("fed1");e=n(!1);var p=a(o),g=a(r),h=a(s),b=a(c),v=a(d),m=a(l),x=a(u),w=a(f);e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.box[data-v-273f2785]{width:100%;height:100%;background:#fff;position:relative;top:0;left:0}.box .bar[data-v-273f2785]{width:100%;position:absolute;bottom:0;z-index:999}.Updata[data-v-273f2785]{position:absolute;width:100%;height:100%;z-index:99999}.swiper[data-v-273f2785]{height:240px}.swiper uni-image[data-v-273f2785]{width:100%}.degmdg[data-v-273f2785]{width:25px;height:25px;border-radius:50%;color:#fff;font-weight:700;font-size:10px;text-align:center;line-height:25px;background-color:red;position:absolute;top:0;right:0;z-index:100;box-sizing:border-box;-webkit-transition:all 2s ease-out;transition:all 2s ease-out}.content[data-v-273f2785]{width:100%}.content .list[data-v-273f2785]{width:23%;height:100px;float:left;padding-top:10px;margin:1%;box-sizing:border-box;position:relative;border-radius:10px}.content .list uni-image[data-v-273f2785]{width:45px;height:45px;display:block;margin:auto}.content .list .icon01[data-v-273f2785]{background-image:url('+p+");background-size:100% 100%}.content .list .icon02[data-v-273f2785]{background-image:url("+g+");background-size:100% 100%}.content .list .icon03[data-v-273f2785]{background-image:url("+h+");background-size:100% 100%}.content .list .icon04[data-v-273f2785]{background-image:url("+b+");background-size:100% 100%}.content .list .icon05[data-v-273f2785]{background-image:url("+v+");background-size:100% 100%}.content .list .icon06[data-v-273f2785]{background-image:url("+m+");background-size:100% 100%}.content .list .icon07[data-v-273f2785]{background-image:url("+x+");background-size:100% 100%}.content .list .icon08[data-v-273f2785]{background-image:url("+w+");background-size:100% 100%}.content .list uni-text[data-v-273f2785]{display:block;text-align:center;line-height:40px;font-size:15px}.ZTstate[data-v-273f2785]{float:left;width:90%;-webkit-box-shadow:3px 3px 6px #c1c1c1;-moz-box-shadow:3px 3px 6px #c1c1c1;box-shadow:3px 3px 6px #c1c1c1}.renwu[data-v-273f2785]{width:96%;min-height:20px;background-color:#fff;float:left;margin-left:2%;margin-top:5px;border-radius:5px;padding:10px;box-sizing:border-box;color:#333;-webkit-box-shadow:3px 3px 6px #c1c1c1;-moz-box-shadow:3px 3px 6px #c1c1c1;box-shadow:3px 3px 6px #c1c1c1}.renwu .title[data-v-273f2785]{width:80%;font-weight:700;line-height:20px;float:left}.renwu .conter[data-v-273f2785]{width:80%;line-height:18px;text-indent:2em;float:left}.renwu .imagesgcsIcon[data-v-273f2785]{display:block;width:40px;height:40px;float:right}.vn[data-v-273f2785]{width:100%;height:300px;position:fixed;left:0;right:0;margin:auto}.vn .Title[data-v-273f2785]{width:60%;background-color:#fff;border:1px solid #999;margin:auto;border-radius:10px;-webkit-box-shadow:0 3px 3px #c8c8c8;-moz-box-shadow:0 3px 3px #c8c8c8;box-shadow:2px 6px 6px #c8c8c8}.vn .Title .Top[data-v-273f2785]{width:100%;height:50px;text-align:center;line-height:50px;font-weight:700;color:red}.vn .Title .content[data-v-273f2785]{width:100%;padding:15px;box-sizing:border-box;font-size:12px}.vn .Title .content uni-text[data-v-273f2785]{display:block;line-height:20px}.vn .Title .content .Right[data-v-273f2785]{float:right}.vn .Title .leftRight[data-v-273f2785]{width:100%;height:50px;position:relative}.vn .Title .leftRight uni-button[data-v-273f2785]{width:30%;margin-left:35%;margin-top:10px}",""]),t.exports=e},"577d":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{list:["区域经理&工程师执行的所有任务(安装、拆装、维修、保养)","必须通过系统指派和处理，通过线下通知等方式告知的任务不会被系统统计到","请勿执行"],headStyle:{padding:"10px 5px","font-weight":"bold"},bodyStyle:{padding:"10px 10px"},imgList:[i("49cf"),i("81b7"),i("b464"),i("c30b")],icon:[{name:1,icon:i("b274"),text:"工单管理",AmierIMG:"icon01"},{name:2,icon:i("8f1f"),text:"订单管理",AmierIMG:"icon02"},{name:6,icon:i("58ce"),text:"安装管理",AmierIMG:"icon03"},{name:3,icon:i("c30f"),text:"保养管理",AmierIMG:"icon04"},{name:5,icon:i("0f11"),text:"VIP回访",AmierIMG:"icon05"},{name:4,icon:i("47cd"),text:"工作日报",AmierIMG:"icon06"},{name:7,icon:i("e4cf"),text:"零配件",AmierIMG:"icon07"},{name:8,icon:i("fed1"),text:"全部",AmierIMG:"icon08"}],path:["/pages/home/works/work.1","/pages/home/works/work.2","/pages/home/works/work.6","/pages/home/works/work.3","/pages/home/works/work.5","/pages/home/works/work.4","/pages/home/works/work.7","/pages/home/works/work.8"],degmsg:0,degmsgServiceRegionalIdLength:0,works:"",GCSMessage:{},DetailState:!0}},onShow:function(){this.logos(),this.StateTracedCal();var t=this;uni.getStorage({key:"Token",success:function(e){console.log(e.data),t.InitGcsState(e.data)}})},methods:{logos:function(){var t=this;uni.getStorage({key:"Token",success:function(e){t.$store.state.token=e.data,t.StateTracedCal(),t.msg(),t.UrgeReturnVisit(),t.InitGcsState(),""==e.data&&uni.navigateTo({url:"/pages/Logo/Logo"})},fail:function(t){""==t.data&&uni.navigateTo({url:"/pages/Logo/Logo"})}})},clickpath:function(t){uni.navigateTo({url:this.path[t]})},msg:function(){var t={url:this.$store.state.url+"System/GetEjectMessage",method:"GET",header:this.$store.state.token};this.$httpnone(t).then((function(t){if(null==t.Data)return!1;uni.showModal({title:t.Data.Title,content:t.Data.Content,success:function(t){t.confirm?console.log("用户点击确定"):t.cancel&&console.log("用户点击取消")}})}))},UrgeReturnVisit:function(){var t=this,e=0,i={url:this.$store.state.url+"System/GetReturnVisit",method:"GET",header:this.$store.state.token,data:{search:""}};this.$httpnone(i).then((function(i){for(var n=0;n<i.Data.length;n++)i.Data[n].LimitDate<-2&&(e+=1),e>99&&(e="99+");t.degmsg=e}))},worksfun:function(){uni.navigateTo({url:"/pages/home/works/works/works"})},StateTracedCal:function(){var t=this,e={url:this.$store.state.url+"System/GetEnginnerState",method:"GET",header:this.$store.state.token};this.$httpnone(e).then((function(e){t.DetailState=!0,t.GCSMessage=e.Data,console.log(t.GCSMessage),"空闲"==t.GCSMessage.Detail&&t.GetEnginnerWorking()}))},GetEnginnerWorking:function(){var t=this,e={url:this.$store.state.url+"System/GetEnginnerWorking",method:"GET",header:this.$store.state.token};this.$httpnone(e).then((function(e){console.log(e.Data.Dtos.length),0!=e.Data.Dtos.length&&(t.DetailState=!1,t.GCSMessage.Detail="空闲--检索到有未完成的任务，请及时校准")}))},InitGcsState:function(t){var e=this,i={url:this.$store.state.url+"Account/GetUserByToken",method:"GET",header:this.$store.state.token};this.$httpnone(i).then((function(t){e.GetMCDelay(t.Data.ServiceRegionalId)}))},GetMCDelay:function(t){var e=this,i={url:this.$store.state.url+"Statistic/GetMCDelay",method:"GET",header:this.$store.state.token,data:{search:"",area:"",areaId:t,state:3}};this.$httpnone(i).then((function(t){e.degmsgServiceRegionalIdLength=t.Data.Dtos.length,e.$store.state.degmsgServiceRegionalIdLength=t.Data.Dtos.length,e.degmsgServiceRegionalIdLength>99&&(e.degmsgServiceRegionalIdLength="99+")}))}}};e.default=n},"582c":function(t,e,i){var n=i("54fc");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("141b8442",n,!0,{sourceMap:!1,shadowMode:!1})},"58ce":function(t,e,i){t.exports=i.p+"static/img/6.0544a7e6.png"},"81b7":function(t,e,i){t.exports=i.p+"static/img/007.56fb4217.jpg"},"8f1f":function(t,e,i){t.exports=i.p+"static/img/2.4b854225.png"},"9a9b":function(t,e,i){"use strict";i.r(e);var n=i("0b1b"),a=i("b18d");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("4d9f");var r,s=i("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"12bbf577",null,!1,n["a"],r);e["default"]=c.exports},b18d:function(t,e,i){"use strict";i.r(e);var n=i("0281"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},b274:function(t,e,i){t.exports=i.p+"static/img/1.d48c2218.png"},b464:function(t,e,i){t.exports=i.p+"static/img/008.75d63225.jpg"},bcac:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={uCard:i("9a9b").default,uNoticeBar:i("892c").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"box"},[n("v-uni-view",{staticClass:"page-section swiper"},[n("v-uni-view",{staticClass:"page-section-spacing"},[n("v-uni-swiper",{staticClass:"swiper",attrs:{"indicator-dots":"true",autoplay:"true",interval:"2000",duration:"500"}},[n("v-uni-swiper-item",[n("v-uni-image",{attrs:{src:i("49cf"),mode:""}})],1),n("v-uni-swiper-item",[n("v-uni-image",{attrs:{src:i("81b7"),mode:""}})],1),n("v-uni-swiper-item",[n("v-uni-image",{attrs:{src:i("b464"),mode:""}})],1),n("v-uni-swiper-item",[n("v-uni-image",{attrs:{src:i("c30b"),mode:""}})],1)],1)],1)],1),n("v-uni-view",{staticClass:"content"},t._l(t.icon,(function(e,i){return n("v-uni-view",{key:i,staticClass:"list",attrs:{"android:gravity":"center"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickpath(i)}}},[4==i&&0!=t.degmsg?n("v-uni-view",{staticClass:"degmdg"},[t._v(t._s(t.degmsg))]):t._e(),7==i&&0!=t.degmsgServiceRegionalIdLength?n("v-uni-view",{staticClass:"degmdg"},[t._v(t._s(t.degmsgServiceRegionalIdLength))]):t._e(),n("v-uni-image",{class:e.AmierIMG,attrs:{mode:""}}),n("v-uni-text",[t._v(t._s(e.text))])],1)})),1),n("u-card",{staticClass:"ZTstate",attrs:{title:"当前状态","head-style":t.headStyle,"body-style":t.bodyStyle,"box-shadow":"2px 3px 4px #c1c1c1","sub-title":"点击校准","sub-title-color":"#5b8eff"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.worksfun()}}},[n("v-uni-view",{attrs:{slot:"body"},slot:"body"},[t.DetailState?n("v-uni-view",{staticClass:"card_text"},[t._v(t._s(t.GCSMessage.Detail))]):t._e(),t.DetailState?t._e():n("v-uni-view",{staticClass:"card_text",staticStyle:{color:"red"}},[t._v(t._s(t.GCSMessage.Detail))])],1)],1),n("u-notice-bar",{staticClass:"bar",attrs:{mode:"horizontal",type:"error",list:t.list}})],1)},o=[]},c30b:function(t,e,i){t.exports=i.p+"static/img/009.f262ae0f.jpg"},c30f:function(t,e,i){t.exports=i.p+"static/img/3.0427a1eb.png"},c7a0:function(t,e,i){"use strict";i.r(e);var n=i("bcac"),a=i("093b");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("15cb");var r,s=i("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"273f2785",null,!1,n["a"],r);e["default"]=c.exports},ca13:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-card[data-v-12bbf577]{position:relative;overflow:hidden;font-size:%?28?%;background-color:#fff;box-sizing:border-box}.u-card-full[data-v-12bbf577]{margin-left:0!important;margin-right:0!important}.u-card--border[data-v-12bbf577]:after{border-radius:%?16?%}.u-card__head--left[data-v-12bbf577]{color:#303133}.u-card__head--left__thumb[data-v-12bbf577]{margin-right:%?16?%}.u-card__head--left__title[data-v-12bbf577]{max-width:%?400?%}.u-card__head--right[data-v-12bbf577]{color:#909399;margin-left:%?6?%}.u-card__body[data-v-12bbf577]{color:#606266}.u-card__foot[data-v-12bbf577]{color:#909399}',""]),t.exports=e},df02:function(t,e,i){var n=i("ca13");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("2a08883e",n,!0,{sourceMap:!1,shadowMode:!1})},e4cf:function(t,e,i){t.exports=i.p+"static/img/7.d9e99490.png"},fed1:function(t,e,i){t.exports=i.p+"static/img/0.1251b9ee.png"}}]);