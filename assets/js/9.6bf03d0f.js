(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{264:function(t,e,n){t.exports=n(265)},265:function(t,e,n){n(52),n(37),t.exports=n(266)},266:function(t,e,n){var o=n(11),r=n(104);t.exports=n(2).getIterator=function(t){var e=r(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return o(e.call(t))}},274:function(t,e,n){},276:function(t,e,n){"use strict";var o=n(103),r=n.n(o);var a=n(264),l=n.n(a);function i(t,e){return function(t){if(r()(t))return t}(t)||function(t,e){var n=[],o=!0,r=!1,a=void 0;try{for(var i,u=l()(t);!(o=(i=u.next()).done)&&(n.push(i.value),!e||n.length!==e);o=!0);}catch(t){r=!0,a=t}finally{try{o||null==u.return||u.return()}finally{if(r)throw a}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.d(e,"a",function(){return i})},406:function(t,e,n){"use strict";var o=n(274);n.n(o).a},415:function(t,e,n){"use strict";n.r(e);var o=n(276),r=n(48),a=n.n(r),l=(n(50),n(145),{props:{src:{type:String,default:"",required:!0},screenshot:{type:Boolean,default:!1},subtitle:{type:String,default:""},danmakuId:{type:String,default:""},danmakuApi:{type:String,default:"https://api.prprpr.me/dplayer/"},autoplay:{type:Boolean,default:!1},theme:{type:String,default:"#b7daff"},loop:{type:Boolean,default:!1},hotkey:{type:Boolean,default:!0},preload:{type:String,default:"auto"},logo:{type:String,default:""},mutex:{type:Boolean,default:!0},crossOrigin:{type:Boolean,default:!1},proxy:{type:String,default:"https://cors-anywhere.herokuapp.com"}},data:function(){return{shouldShowPlayer:!1}},methods:{showPlayer:function(){var t=this;this.shouldShowPlayer=!0,a.a.all([Promise.all([n.e(0),n.e(2)]).then(n.t.bind(null,411,7)),Promise.all([n.e(0),n.e(2)]).then(n.t.bind(null,412,7))]).then(function(e){new(0,Object(o.a)(e,1)[0].default)({container:t.$refs.container,autoplay:t.autoplay,theme:t.theme,loop:t.loop,screenshot:t.screenshot,hotkey:t.hotkey,preload:t.preload,logo:t.logo,video:{url:t.crossOrigin?"".concat(t.proxy,"/").concat(t.src):t.src},subtitle:{url:t.crossOrigin?"".concat(t.proxy,"/").concat(t.subtitle):t.subtitle,color:"#000000",fontSize:"25px",bottom:"2%"},danmaku:{id:t.danmakuId,api:t.danmakuApi},mutex:t.mutex})})}}}),i=(n(406),n(23)),u=Object(i.a)(l,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"dplayer"},[e("button",{directives:[{name:"show",rawName:"v-show",value:!this.shouldShowPlayer,expression:"!shouldShowPlayer"}],staticClass:"btn-show-player",on:{click:this.showPlayer}},[this._v("\n    点击加载播放器\n  ")]),this._v(" "),this.shouldShowPlayer?e("div",{ref:"container"}):this._e()])},[],!1,null,"5ddb23be",null);e.default=u.exports}}]);