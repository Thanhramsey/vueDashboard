(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["views-UserProfile"],{1681:function(t,e,i){},2909:function(t,e,i){"use strict";i.d(e,"a",(function(){return c}));var a=i("6b75");function r(t){if(Array.isArray(t))return Object(a["a"])(t)}i("a4d3"),i("e01a"),i("d3b7"),i("d28b"),i("3ca3"),i("ddb0"),i("a630");function s(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}var n=i("06c5");function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t){return r(t)||s(t)||Object(n["a"])(t)||o()}},"4a39":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{attrs:{id:"user-profile-view",fluid:"",tag:"section"}},[i("v-row",{attrs:{justify:"center"}},[i("v-col",{attrs:{cols:"12",md:"8"}},[i("material-card",{attrs:{color:"primary",icon:"mdi-account-outline"},scopedSlots:t._u([{key:"title",fn:function(){return[t._v(" Edit Profile — "),i("small",{staticClass:"text-body-1"},[t._v("Complete your profile")])]},proxy:!0}])},[i("v-form",[i("v-container",{staticClass:"py-0"},[i("v-row",[i("v-col",{attrs:{cols:"12",md:"4"}},[i("v-text-field",{attrs:{disabled:"",label:"Company (disabled)"}})],1),i("v-col",{attrs:{cols:"12",md:"4"}},[i("v-text-field",{attrs:{color:"purple",label:"User Name"}})],1),i("v-col",{attrs:{cols:"12",md:"4"}},[i("v-text-field",{attrs:{color:"purple",label:"Email Address"}})],1),i("v-col",{attrs:{cols:"12",md:"6"}},[i("v-text-field",{attrs:{color:"purple",label:"First Name"}})],1),i("v-col",{attrs:{cols:"12",md:"6"}},[i("v-text-field",{attrs:{color:"purple",label:"Last Name"}})],1),i("v-col",{attrs:{cols:"12"}},[i("v-text-field",{attrs:{color:"purple",label:"Adress"}})],1),i("v-col",{attrs:{cols:"12",md:"4"}},[i("v-text-field",{attrs:{color:"purple",label:"City"}})],1),i("v-col",{attrs:{cols:"12",md:"4"}},[i("v-text-field",{attrs:{color:"purple",label:"Country"}})],1),i("v-col",{attrs:{cols:"12",md:"4"}},[i("v-text-field",{attrs:{color:"purple",label:"Postal Code",type:"number"}})],1),i("v-col",{attrs:{cols:"12"}},[i("v-textarea",{attrs:{color:"purple",label:"About Me",value:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}})],1),i("v-col",{staticClass:"text-right",attrs:{cols:"12"}},[i("v-btn",{attrs:{color:"primary","min-width":"150"}},[t._v(" Update Profile ")])],1)],1)],1)],1)],1)],1),i("v-col",{attrs:{cols:"12",md:"4"}},[i("app-card",{staticClass:"mt-4 text-center"},[i("v-img",{staticClass:"rounded-circle elevation-6 mt-n12 d-inline-block",attrs:{src:"https://demos.creative-tim.com/vue-material-dashboard/img/marc.aba54d65.jpg",width:"128"}}),i("v-card-text",{staticClass:"text-center"},[i("h6",{staticClass:"text-h6 mb-2 text--secondary"},[t._v(" CEO / FOUNDER ")]),i("h4",{staticClass:"text-h4 mb-3 text--primary"},[t._v(" John Leider ")]),i("p",{staticClass:"text--secondary"},[t._v(" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione dolorem deserunt veniam tempora magnam quisquam quam error iusto cupiditate ducimus, et eligendi saepe voluptatibus assumenda similique temporibus placeat animi dicta? ")]),i("v-btn",{staticClass:"mr-0",attrs:{color:"primary","min-width":"100",rounded:""}},[t._v(" Follow ")])],1)],1)],1)],1)],1)},r=[],s={name:"UserProfileView"},n=s,o=i("2877"),c=i("6544"),l=i.n(c),d=i("8336"),u=i("99d9"),h=i("62ad"),m=i("a523"),p=i("5530"),f=(i("caad"),i("2532"),i("07ac"),i("4de4"),i("159b"),i("7db0"),i("58df")),g=i("7e2b"),v=i("3206"),b=Object(f["a"])(g["a"],Object(v["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,i=function(t){return t.$watch("hasError",(function(i){e.$set(e.errorBag,t._uid,i)}),{immediate:!0})},a={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?a.shouldValidate=t.$watch("shouldValidate",(function(r){r&&(e.errorBag.hasOwnProperty(t._uid)||(a.valid=i(t)))})):a.valid=i(t),a},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var i=this.watchers.find((function(t){return t._uid===e._uid}));i&&(i.valid(),i.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object(p["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}}),y=i("adda"),w=i("0fd9"),S=i("8654"),_=(i("a9e3"),i("1681"),Object(f["a"])(S["a"])),x=_.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return Object(p["a"])({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},S["a"].options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout((function(){t.autoGrow&&t.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var t=this.$refs.input;if(t){t.style.height="0";var e=t.scrollHeight,i=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(i,e)+"px"}},genInput:function(){var t=S["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput:function(t){S["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}}),C=Object(o["a"])(n,a,r,!1,null,null,null);e["default"]=C.exports;l()(C,{VBtn:d["a"],VCardText:u["b"],VCol:h["a"],VContainer:m["a"],VForm:b,VImg:y["a"],VRow:w["a"],VTextField:S["a"],VTextarea:x})},"78d7":function(t,e,i){"use strict";var a=i("6b53");e["a"]=a["a"]},"8efc":function(t,e,i){},adda:function(t,e,i){"use strict";var a=i("53ca"),r=(i("a9e3"),i("a15b"),i("8a79"),i("2ca0"),i("8efc"),i("90a2")),s=i("78d7"),n=i("7560"),o=i("58df"),c=i("d9f7"),l=i("d9bd"),d="undefined"!==typeof window&&"IntersectionObserver"in window;e["a"]=Object(o["a"])(s["a"],n["a"]).extend({name:"v-img",directives:{intersect:r["a"]},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio:function(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc:function(){return this.src&&"object"===Object(a["a"])(this.src)?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage:function(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];var t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient(".concat(this.gradient,")")),e&&t.push('url("'.concat(e,'")'));var i=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[i]):i}},watch:{src:function(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(t,e,i){if(!d||i||this.eager){if(this.normalisedSrc.lazySrc){var a=new Image;a.src=this.normalisedSrc.lazySrc,this.pollForSize(a,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError:function(){this.hasError=!0,this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,e=new Image;this.image=e,e.onload=function(){e.decode?e.decode().catch((function(e){Object(l["c"])("Failed to decode image, trying to render anyway\n\n"+"src: ".concat(t.normalisedSrc.src)+(e.message?"\nOriginal error: ".concat(e.message):""),t)})).then(t.onLoad):t.onLoad()},e.onerror=this.onError,this.hasError=!1,this.sizes&&(e.sizes=this.sizes),this.normalisedSrc.srcset&&(e.srcset=this.normalisedSrc.srcset),e.src=this.normalisedSrc.src,this.$emit("loadstart",this.normalisedSrc.src),this.aspectRatio||this.pollForSize(e),this.getSrc()},pollForSize:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,a=function a(){var r=t.naturalHeight,s=t.naturalWidth;r||s?(e.naturalWidth=s,e.calculatedAspectRatio=s/r):t.complete||!e.isLoading||e.hasError||null==i||setTimeout(a,i)};a()},genContent:function(){var t=s["a"].options.methods.genContent.call(this);return this.naturalWidth&&this._b(t.data,"div",{style:{width:"".concat(this.naturalWidth,"px")}}),t},__genPlaceholder:function(){if(this.$slots.placeholder){var t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},t):t[0]}}},render:function(t){var e=s["a"].options.render.call(this,t),i=Object(c["a"])(e.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:d?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,i,e.children)}})},dd89:function(t,e,i){"use strict";function a(t){if("function"!==typeof t.getRootNode){while(t.parentNode)t=t.parentNode;return t!==document?null:document}var e=t.getRootNode();return e!==document&&e.getRootNode({composed:!0})!==document?null:e}i.d(e,"a",(function(){return a}))}}]);
//# sourceMappingURL=views-UserProfile.758f35f3.js.map