(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ec42b496"],{2423:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return i})),n.d(t,"d",(function(){return l})),n.d(t,"a",(function(){return r})),n.d(t,"e",(function(){return c}));var a=n("b775");function o(e){return Object(a["a"])({url:"/article/list",method:"get",params:e})}function i(e){return Object(a["a"])({url:"/article/detail",method:"get",params:{id:e}})}function l(e){return Object(a["a"])({url:"/article/pv",method:"get",params:{pv:e}})}function r(e){return Object(a["a"])({url:"/article/create",method:"post",data:e})}function c(e){return Object(a["a"])({url:"/article/update",method:"post",data:e})}},"5fb3":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("div",[n("FilenameOption",{model:{value:e.filename,callback:function(t){e.filename=t},expression:"filename"}}),n("AutoWidthOption",{model:{value:e.autoWidth,callback:function(t){e.autoWidth=t},expression:"autoWidth"}}),n("BookTypeOption",{model:{value:e.bookType,callback:function(t){e.bookType=t},expression:"bookType"}}),n("el-button",{staticStyle:{margin:"0 0 20px 20px"},attrs:{loading:e.downloadLoading,type:"primary",icon:"document"},on:{click:e.handleDownload}},[e._v(" "+e._s(e.$t("excel.export"))+" Excel ")]),n("a",{staticStyle:{"margin-left":"15px"},attrs:{href:"https://panjiachen.github.io/vue-element-admin-site/feature/component/excel.html",target:"_blank"}},[n("el-tag",{attrs:{type:"info"}},[e._v("Documentation")])],1)],1),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],attrs:{data:e.list,"element-loading-text":"拼命加载中",border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{align:"center",label:"Id",width:"95"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.$index)+" ")]}}])}),n("el-table-column",{attrs:{label:"Title"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.title)+" ")]}}])}),n("el-table-column",{attrs:{label:"Author",width:"110",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-tag",[e._v(e._s(t.row.author))])]}}])}),n("el-table-column",{attrs:{label:"Readings",width:"115",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.pageviews)+" ")]}}])}),n("el-table-column",{attrs:{align:"center",label:"Date",width:"220"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("i",{staticClass:"el-icon-time"}),n("span",[e._v(e._s(e._f("parseTime")(t.row.timestamp,"{y}-{m}-{d} {h}:{i}")))])]}}])})],1)],1)},o=[],i=(n("d81d"),n("d3b7"),n("2423")),l=n("ed08"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{display:"inline-block"}},[n("label",{staticClass:"radio-label",staticStyle:{"padding-left":"0"}},[e._v("Filename: ")]),n("el-input",{staticStyle:{width:"350px"},attrs:{placeholder:e.$t("excel.placeholder"),"prefix-icon":"el-icon-document"},model:{value:e.filename,callback:function(t){e.filename=t},expression:"filename"}})],1)},c=[],u={props:{value:{type:String,default:""}},computed:{filename:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}}},s=u,d=n("2877"),p=Object(d["a"])(s,r,c,!1,null,null,null),f=p.exports,m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{display:"inline-block"}},[n("label",{staticClass:"radio-label"},[e._v("Cell Auto-Width: ")]),n("el-radio-group",{model:{value:e.autoWidth,callback:function(t){e.autoWidth=t},expression:"autoWidth"}},[n("el-radio",{attrs:{label:!0,border:""}},[e._v(" True ")]),n("el-radio",{attrs:{label:!1,border:""}},[e._v(" False ")])],1)],1)},b=[],h={props:{value:{type:Boolean,default:!0}},computed:{autoWidth:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}}},g=h,v=Object(d["a"])(g,m,b,!1,null,null,null),y=v.exports,k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{display:"inline-block"}},[n("label",{staticClass:"radio-label"},[e._v("Book Type: ")]),n("el-select",{staticStyle:{width:"120px"},model:{value:e.bookType,callback:function(t){e.bookType=t},expression:"bookType"}},e._l(e.options,(function(e){return n("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1)},x=[],_={props:{value:{type:String,default:"xlsx"}},data:function(){return{options:["xlsx","csv","txt"]}},computed:{bookType:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}}},w=_,T=Object(d["a"])(w,k,x,!1,null,null,null),O=T.exports,j={name:"ExportExcel",components:{FilenameOption:f,AutoWidthOption:y,BookTypeOption:O},data:function(){return{list:null,listLoading:!0,downloadLoading:!1,filename:"",autoWidth:!0,bookType:"xlsx"}},created:function(){this.fetchData()},methods:{fetchData:function(){var e=this;this.listLoading=!0,Object(i["c"])().then((function(t){e.list=t.data.items,e.listLoading=!1}))},handleDownload:function(){var e=this;this.downloadLoading=!0,Promise.all([n.e("chunk-de233ae2"),n.e("chunk-5b0190f0"),n.e("chunk-0cea3b7f")]).then(n.bind(null,"4bf8")).then((function(t){var n=["Id","Title","Author","Readings","Date"],a=["id","title","author","pageviews","display_time"],o=e.list,i=e.formatJson(a,o);t.export_json_to_excel({header:n,data:i,filename:e.filename,autoWidth:e.autoWidth,bookType:e.bookType}),e.downloadLoading=!1}))},formatJson:function(e,t){return t.map((function(t){return e.map((function(e){return"timestamp"===e?Object(l["f"])(t[e]):t[e]}))}))}}},S=j,W=(n("c1d9"),Object(d["a"])(S,a,o,!1,null,null,null));t["default"]=W.exports},"7a90":function(e,t,n){},b775:function(e,t,n){"use strict";n("d3b7");var a=n("bc3a"),o=n.n(a),i=n("5c96"),l=n("4360"),r=n("5f87"),c=o.a.create({baseURL:"/prod-api",withCredentials:!0,timeout:5e3});c.interceptors.request.use((function(e){return l["a"].getters.token&&(e.headers["X-Token"]=Object(r["getToken"])()),e}),(function(e){return console.log(e),Promise.reject(e)})),c.interceptors.response.use((function(e){var t=e.data;return 2e4!==t.code?(Object(i["Message"])({message:t.message||"error",type:"error",duration:5e3}),50008!==t.code&&50012!==t.code&&50014!==t.code||i["MessageBox"].confirm("You have been logged out, you can cancel to stay on this page, or log in again","Confirm logout",{confirmButtonText:"Re-Login",cancelButtonText:"Cancel",type:"warning"}).then((function(){l["a"].dispatch("user/resetToken").then((function(){location.reload()}))})),Promise.reject(t.message||"error")):t}),(function(e){return console.log("err"+e),Object(i["Message"])({message:e.message,type:"error",duration:5e3}),Promise.reject(e)})),t["a"]=c},c1d9:function(e,t,n){"use strict";var a=n("7a90"),o=n.n(a);o.a}}]);