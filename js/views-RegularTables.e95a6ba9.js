(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["views-RegularTables"],{"1f4f":function(t,a,e){"use strict";var s=e("5530"),i=(e("a9e3"),e("8b37"),e("80d2")),r=e("7560"),d=e("58df");a["a"]=Object(d["a"])(r["a"]).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes:function(){return Object(s["a"])({"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,"v-data-table--has-top":!!this.$slots.top,"v-data-table--has-bottom":!!this.$slots.bottom},this.themeClasses)}},methods:{genWrapper:function(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(i["g"])(this.height)}},[this.$createElement("table",this.$slots.default)])}},render:function(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})},"8b37":function(t,a,e){},"9ac1":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",{attrs:{id:"regular-tables-view",fluid:"",tag:"section"}},[e("view-intro",{attrs:{heading:"Simple Tables",link:"components/simple-tables"}}),e("material-card",{attrs:{icon:"mdi-clipboard-text","icon-small":"",title:"Simple Table",color:"accent"}},[e("v-simple-table",[e("thead",[e("tr",[e("th",{staticClass:"primary--text"},[t._v(" ID ")]),e("th",{staticClass:"primary--text"},[t._v(" Name ")]),e("th",{staticClass:"primary--text"},[t._v(" Country ")]),e("th",{staticClass:"primary--text"},[t._v(" City ")]),e("th",{staticClass:"text-right primary--text"},[t._v(" Salary ")])])]),e("tbody",[e("tr",[e("td",[t._v("1")]),e("td",[t._v("Dakota Rice")]),e("td",[t._v("Niger")]),e("td",[t._v("Oud-Turnhout")]),e("td",{staticClass:"text-right"},[t._v(" $36,738 ")])]),e("tr",[e("td",[t._v("2")]),e("td",[t._v("Minverva Hooper")]),e("td",[t._v("Curaçao")]),e("td",[t._v("Sinaas-Waas")]),e("td",{staticClass:"text-right"},[t._v(" $23,789 ")])]),e("tr",[e("td",[t._v("3")]),e("td",[t._v("Sage Rodriguez")]),e("td",[t._v("Netherlands")]),e("td",[t._v("Baileux")]),e("td",{staticClass:"text-right"},[t._v(" $56,142 ")])]),e("tr",[e("td",[t._v("4")]),e("td",[t._v("Philip Chaney")]),e("td",[t._v("Korea, South")]),e("td",[t._v("Overland Park")]),e("td",{staticClass:"text-right"},[t._v(" $38,735 ")])]),e("tr",[e("td",[t._v("5")]),e("td",[t._v("Doris Greene")]),e("td",[t._v("Malawi")]),e("td",[t._v("Feldkirchen in Kärnten")]),e("td",{staticClass:"text-right"},[t._v(" $63,542 ")])]),e("tr",[e("td",[t._v("6")]),e("td",[t._v("Mason Porter")]),e("td",[t._v("Chile")]),e("td",[t._v("Gloucester")]),e("td",{staticClass:"text-right"},[t._v(" $78,615 ")])])])])],1),e("div",{staticClass:"py-3"}),e("material-card",{attrs:{dark:"",icon:"mdi-clipboard-plus","icon-small":"",title:"Table on Dark Background",color:"accent"}},[e("v-simple-table",[e("thead",[e("tr",[e("th",[t._v("ID")]),e("th",[t._v("Name")]),e("th",[t._v("Country")]),e("th",[t._v("City")]),e("th",{staticClass:"text-right"},[t._v(" Salary ")])])]),e("tbody",[e("tr",[e("td",[t._v("1")]),e("td",[t._v("Dakota Rice")]),e("td",[t._v("Niger")]),e("td",[t._v("Oud-Turnhout")]),e("td",{staticClass:"text-right"},[t._v(" $36,738 ")])]),e("tr",[e("td",[t._v("2")]),e("td",[t._v("Minverva Hooper")]),e("td",[t._v("Curaçao")]),e("td",[t._v("Sinaas-Waas")]),e("td",{staticClass:"text-right"},[t._v(" $23,789 ")])]),e("tr",[e("td",[t._v("3")]),e("td",[t._v("Sage Rodriguez")]),e("td",[t._v("Netherlands")]),e("td",[t._v("Baileux")]),e("td",{staticClass:"text-right"},[t._v(" $56,142 ")])]),e("tr",[e("td",[t._v("4")]),e("td",[t._v("Philip Chaney")]),e("td",[t._v("Korea, South")]),e("td",[t._v("Overland Park")]),e("td",{staticClass:"text-right"},[t._v(" $38,735 ")])]),e("tr",[e("td",[t._v("5")]),e("td",[t._v("Doris Greene")]),e("td",[t._v("Malawi")]),e("td",[t._v("Feldkirchen in Kärnten")]),e("td",{staticClass:"text-right"},[t._v(" $63,542 ")])]),e("tr",[e("td",[t._v("6")]),e("td",[t._v("Mason Porter")]),e("td",[t._v("Chile")]),e("td",[t._v("Gloucester")]),e("td",{staticClass:"text-right"},[t._v(" $78,615 ")])])])])],1)],1)},i=[],r={name:"RegularTablesView"},d=r,l=e("2877"),v=e("6544"),n=e.n(v),o=e("a523"),h=e("1f4f"),_=Object(l["a"])(d,s,i,!1,null,null,null);a["default"]=_.exports;n()(_,{VContainer:o["a"],VSimpleTable:h["a"]})}}]);
//# sourceMappingURL=views-RegularTables.e95a6ba9.js.map