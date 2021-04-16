!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.VueProgressBar=e()}(this,function(){"use strict";var t="undefined"!=typeof window,e={name:"VueProgress",serverCacheKey:function(){return"Progress"},computed:{style:function(){var t=this.progress,e=t.options,o=!!e.show,n=e.location,i={background:e.canSuccess?e.color:e.failedColor,opacity:e.show?1:0,position:e.position};return"top"===n||"bottom"===n?("top"===n?i.top="0px":i.bottom="0px",e.inverse?i.right="0px":i.left="0px",i.width=t.percent+"%",i.height=e.thickness,i.transition=(o?"width "+e.transition.speed+", ":"")+"opacity "+e.transition.opacity):"left"!==n&&"right"!==n||("left"===n?i.left="0px":i.right="0px",e.inverse?i.top="0px":i.bottom="0px",i.height=t.percent+"%",i.width=e.thickness,i.transition=(o?"height "+e.transition.speed+", ":"")+"opacity "+e.transition.opacity),i},progress:function(){return t?window.VueProgressBarEventBus.RADON_LOADING_BAR:{percent:0,options:{canSuccess:!0,show:!1,color:"rgb(19, 91, 55)",failedColor:"red",thickness:"2px",transition:{speed:"0.2s",opacity:"0.6s",termination:300},location:"top",autoRevert:!0,inverse:!1}}}}};function o(t,e,o,n,i,s,r,a,c,p){"boolean"!=typeof r&&(c=a,a=r,r=!1);var l="function"==typeof o?o.options:o;t&&t.render&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns,l._compiled=!0,i&&(l.functional=!0)),n&&(l._scopeId=n);var h,u=void 0;return s?l._ssrRegister=u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,c(t)),t&&t._registeredComponents&&t._registeredComponents.add(s)}:e&&(u=r?function(t){e.call(this,p(t,this.$root.$options.shadowRoot))}:function(t){e.call(this,a(t))}),u&&(l.functional?(h=l.render,l.render=function(t,e){return u.call(e),h(t,e)}):(r=l.beforeCreate,l.beforeCreate=r?[].concat(r,u):[u])),o}var i="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function n(t){return function(t,e){var o,n;o=t,n=e,t=i?n.media||"default":o,(e=r[t]||(r[t]={ids:new Set,styles:[]})).ids.has(o)||(e.ids.add(o),t=n.source,n.map&&(t+="\n/*# sourceURL="+n.map.sources[0]+" */",t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n.map))))+" */"),e.element||(e.element=document.createElement("style"),e.element.type="text/css",n.media&&e.element.setAttribute("media",n.media),(s=void 0===s?document.head||document.getElementsByTagName("head")[0]:s).appendChild(e.element)),"styleSheet"in e.element?(e.styles.push(t),e.element.styleSheet.cssText=e.styles.filter(Boolean).join("\n")):(o=e.ids.size-1,n=document.createTextNode(t),(t=e.element.childNodes)[o]&&e.element.removeChild(t[o]),t.length?e.element.insertBefore(n,t[o]):e.element.appendChild(n)))}}var s=void 0,r={};var a=e,e=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"__cov-progress",style:this.style})},c=(e._withStripped=!0,o({render:e,staticRenderFns:[]},function(t){t&&t("data-v-d6ad01a4_0",{source:"\n.__cov-progress {\n  opacity: 1;\n  z-index: 999999;\n}\n",map:{version:3,sources:["/Users/leozeng/Desktop/projects/vue-progressbar/src/vue-progressbar.vue"],names:[],mappings:";AACA;EACA,UAAA;EACA,eAAA;AACA",file:"vue-progressbar.vue",sourcesContent:["<style>\n.__cov-progress {\n  opacity: 1;\n  z-index: 999999;\n}\n</style>\n<template>\n  <div class=\"__cov-progress\" :style=\"style\"></div>\n</template>\n<script>\nconst inBrowser = typeof window !== 'undefined'\nexport default {\n  name: 'VueProgress',\n  serverCacheKey: () => 'Progress',\n  computed: {\n    style() {\n      const progress = this.progress\n      const options = progress.options\n      const isShow = !!options.show\n      const location = options.location\n      const style = {\n        background: options.canSuccess ? options.color : options.failedColor,\n        opacity: options.show ? 1 : 0,\n        position: options.position,\n      }\n      if (location === 'top' || location === 'bottom') {\n        location === 'top' ? (style.top = '0px') : (style.bottom = '0px')\n        if (!options.inverse) {\n          style.left = '0px'\n        } else {\n          style.right = '0px'\n        }\n        style.width = progress.percent + '%'\n        style.height = options.thickness\n        style.transition =\n          (isShow ? 'width ' + options.transition.speed + ', ' : '') +\n          'opacity ' +\n          options.transition.opacity\n      } else if (location === 'left' || location === 'right') {\n        location === 'left' ? (style.left = '0px') : (style.right = '0px')\n        if (!options.inverse) {\n          style.bottom = '0px'\n        } else {\n          style.top = '0px'\n        }\n        style.height = progress.percent + '%'\n        style.width = options.thickness\n        style.transition =\n          (isShow ? 'height ' + options.transition.speed + ', ' : '') +\n          'opacity ' +\n          options.transition.opacity\n      }\n      return style\n    },\n    progress() {\n      if (inBrowser) {\n        return window.VueProgressBarEventBus.RADON_LOADING_BAR\n      } else {\n        return {\n          percent: 0,\n          options: {\n            canSuccess: true,\n            show: false,\n            color: 'rgb(19, 91, 55)',\n            failedColor: 'red',\n            thickness: '2px',\n            transition: {\n              speed: '0.2s',\n              opacity: '0.6s',\n              termination: 300,\n            },\n            location: 'top',\n            autoRevert: true,\n            inverse: false,\n          },\n        }\n      }\n    },\n  },\n}\n<\/script>\n"]},media:void 0})},a,void 0,!1,void 0,!1,n,void 0,void 0));return{install:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},o=(e.version.split(".")[0],"undefined"!=typeof window),n={$vm:null,state:{tFailColor:"",tColor:"",timer:null,cut:0},init:function(t){this.$vm=t},start:function(t){var e=this;this.$vm&&(t=t||3e3,this.$vm.RADON_LOADING_BAR.percent=0,this.$vm.RADON_LOADING_BAR.options.show=!0,this.$vm.RADON_LOADING_BAR.options.canSuccess=!0,this.state.cut=1e4/Math.floor(t),clearInterval(this.state.timer),this.state.timer=setInterval(function(){e.increase(e.state.cut*Math.random()),95<e.$vm.RADON_LOADING_BAR.percent&&e.$vm.RADON_LOADING_BAR.options.autoFinish&&e.finish()},100))},set:function(t){this.$vm.RADON_LOADING_BAR.options.show=!0,this.$vm.RADON_LOADING_BAR.options.canSuccess=!0,this.$vm.RADON_LOADING_BAR.percent=Math.floor(t)},get:function(){return Math.floor(this.$vm.RADON_LOADING_BAR.percent)},increase:function(t){this.$vm.RADON_LOADING_BAR.percent=Math.min(99,this.$vm.RADON_LOADING_BAR.percent+Math.floor(t))},decrease:function(t){this.$vm.RADON_LOADING_BAR.percent=this.$vm.RADON_LOADING_BAR.percent-Math.floor(t)},hide:function(){var t=this;clearInterval(this.state.timer),this.state.timer=null,setTimeout(function(){t.$vm.RADON_LOADING_BAR.options.show=!1,e.nextTick(function(){setTimeout(function(){t.$vm.RADON_LOADING_BAR.percent=0},100),t.$vm.RADON_LOADING_BAR.options.autoRevert&&setTimeout(function(){t.revert()},300)})},this.$vm.RADON_LOADING_BAR.options.transition.termination)},pause:function(){clearInterval(this.state.timer)},finish:function(){this.$vm&&(this.$vm.RADON_LOADING_BAR.percent=100,this.hide())},fail:function(){this.$vm.RADON_LOADING_BAR.options.canSuccess=!1,this.$vm.RADON_LOADING_BAR.percent=100,this.hide()},setFailColor:function(t){this.$vm.RADON_LOADING_BAR.options.failedColor=t},setColor:function(t){this.$vm.RADON_LOADING_BAR.options.color=t},setLocation:function(t){this.$vm.RADON_LOADING_BAR.options.location=t},setTransition:function(t){this.$vm.RADON_LOADING_BAR.options.transition=t},tempFailColor:function(t){this.state.tFailColor=this.$vm.RADON_LOADING_BAR.options.failedColor,this.$vm.RADON_LOADING_BAR.options.failedColor=t},tempColor:function(t){this.state.tColor=this.$vm.RADON_LOADING_BAR.options.color,this.$vm.RADON_LOADING_BAR.options.color=t},tempLocation:function(t){this.state.tLocation=this.$vm.RADON_LOADING_BAR.options.location,this.$vm.RADON_LOADING_BAR.options.location=t},tempTransition:function(t){this.state.tTransition=this.$vm.RADON_LOADING_BAR.options.transition,this.$vm.RADON_LOADING_BAR.options.transition=t},revertColor:function(){this.$vm.RADON_LOADING_BAR.options.color=this.state.tColor,this.state.tColor=""},revertFailColor:function(){this.$vm.RADON_LOADING_BAR.options.failedColor=this.state.tFailColor,this.state.tFailColor=""},revertLocation:function(){this.$vm.RADON_LOADING_BAR.options.location=this.state.tLocation,this.state.tLocation=""},revertTransition:function(){this.$vm.RADON_LOADING_BAR.options.transition=this.state.tTransition,this.state.tTransition={}},revert:function(){this.$vm.RADON_LOADING_BAR.options.autoRevert&&(this.state.tColor&&this.revertColor(),this.state.tFailColor&&this.revertFailColor(),this.state.tLocation&&this.revertLocation(),!this.state.tTransition||void 0===this.state.tTransition.speed&&void 0===this.state.tTransition.opacity||this.revertTransition())},parseMeta:function(t){for(var e in t.func){var o=t.func[e];switch(o.call){case"color":switch(o.modifier){case"set":this.setColor(o.argument);break;case"temp":this.tempColor(o.argument)}break;case"fail":switch(o.modifier){case"set":this.setFailColor(o.argument);break;case"temp":this.tempFailColor(o.argument)}break;case"location":switch(o.modifier){case"set":this.setLocation(o.argument);break;case"temp":this.tempLocation(o.argument)}break;case"transition":switch(o.modifier){case"set":this.setTransition(o.argument);break;case"temp":this.tempTransition(o.argument)}}}}},t=function(t){for(var e,o,n=1;n<arguments.length;++n)for(e in o=arguments[n])Object.prototype.hasOwnProperty.call(o,e)&&(t[e]=o[e]);return t}({canSuccess:!0,show:!1,color:"#73ccec",position:"fixed",failedColor:"red",thickness:"2px",transition:{speed:"0.2s",opacity:"0.6s",termination:300},autoRevert:!0,location:"top",inverse:!1,autoFinish:!0},t),t=new e({data:{RADON_LOADING_BAR:{percent:0,options:t}}});o&&(window.VueProgressBarEventBus=t,n.init(t)),t=e.extend(c),document.body.appendChild((new t).$mount().$el),e.prototype.$Progress=n}}});
