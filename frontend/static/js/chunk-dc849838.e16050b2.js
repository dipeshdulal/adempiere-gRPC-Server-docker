(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dc849838"],{b775:function(e,t,r){"use strict";r("d3b7");var n=r("bc3a"),o=r.n(n),i=r("5c96"),a=r("4360"),s=r("5f87"),c=o.a.create({baseURL:"/prod-api",withCredentials:!0,timeout:5e3});c.interceptors.request.use((function(e){return a["a"].getters.token&&(e.headers["X-Token"]=Object(s["getToken"])()),e}),(function(e){return console.log(e),Promise.reject(e)})),c.interceptors.response.use((function(e){var t=e.data;return 2e4!==t.code?(Object(i["Message"])({message:t.message||"error",type:"error",duration:5e3}),50008!==t.code&&50012!==t.code&&50014!==t.code||i["MessageBox"].confirm("You have been logged out, you can cancel to stay on this page, or log in again","Confirm logout",{confirmButtonText:"Re-Login",cancelButtonText:"Cancel",type:"warning"}).then((function(){a["a"].dispatch("user/resetToken").then((function(){location.reload()}))})),Promise.reject(t.message||"error")):t}),(function(e){return console.log("err"+e),Object(i["Message"])({message:e.message,type:"error",duration:5e3}),Promise.reject(e)})),t["a"]=c},c0b1:function(e,t,r){"use strict";var n=r("e8f0"),o=r.n(n);o.a},d78e:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-container"},[r("el-button",{attrs:{type:"primary"},on:{click:e.handleAddRole}},[e._v(" "+e._s(e.$t("permission.addRole"))+" ")]),r("el-table",{staticStyle:{width:"100%","margin-top":"30px"},attrs:{data:e.rolesList,border:""}},[r("el-table-column",{attrs:{align:"center",label:"Role Key",width:"220"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.key)+" ")]}}])}),r("el-table-column",{attrs:{align:"center",label:"Role Name",width:"220"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.name)+" ")]}}])}),r("el-table-column",{attrs:{align:"header-center",label:"Description"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.description)+" ")]}}])}),r("el-table-column",{attrs:{align:"center",label:"Operations"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(r){return e.handleEdit(t)}}},[e._v(" "+e._s(e.$t("permission.editPermission"))+" ")]),r("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(r){return e.handleDelete(t)}}},[e._v(" "+e._s(e.$t("permission.delete"))+" ")])]}}])})],1),r("el-dialog",{attrs:{visible:e.dialogVisible,title:"edit"===e.dialogType?"Edit Role":"New Role"},on:{"update:visible":function(t){e.dialogVisible=t}}},[r("el-form",{attrs:{model:e.role,"label-width":"80px","label-position":"left"}},[r("el-form-item",{attrs:{label:"Name"}},[r("el-input",{attrs:{placeholder:"Role Name"},model:{value:e.role.name,callback:function(t){e.$set(e.role,"name",t)},expression:"role.name"}})],1),r("el-form-item",{attrs:{label:"Desc"}},[r("el-input",{attrs:{autosize:{minRows:2,maxRows:4},type:"textarea",placeholder:"Role Description"},model:{value:e.role.description,callback:function(t){e.$set(e.role,"description",t)},expression:"role.description"}})],1),r("el-form-item",{attrs:{label:"Menus"}},[r("el-tree",{ref:"tree",staticClass:"permission-tree",attrs:{"check-strictly":e.checkStrictly,data:e.routesData,props:e.defaultProps,"show-checkbox":"","node-key":"path"}})],1)],1),r("div",{staticStyle:{"text-align":"right"}},[r("el-button",{attrs:{type:"danger"},on:{click:function(t){e.dialogVisible=!1}}},[e._v(" "+e._s(e.$t("permission.cancel"))+" ")]),r("el-button",{attrs:{type:"primary"},on:{click:e.confirmRole}},[e._v(" "+e._s(e.$t("permission.confirm"))+" ")])],1)],1)],1)},o=[],i=(r("a4d3"),r("e01a"),r("99af"),r("4de4"),r("4160"),r("caad"),r("d81d"),r("a434"),r("b0c0"),r("2532"),r("159b"),r("5530")),a=r("2909"),s=r("b85c"),c=(r("96cf"),r("1da1")),l=r("df7c"),u=r.n(l),d=r("ed08"),h=r("b775");function f(){return Object(h["a"])({url:"/routes",method:"get"})}function p(){return Object(h["a"])({url:"/roles",method:"get"})}function g(e){return Object(h["a"])({url:"/role",method:"post",data:e})}function m(e,t){return Object(h["a"])({url:"/role/".concat(e),method:"put",data:t})}function b(e){return Object(h["a"])({url:"/role/".concat(e),method:"delete"})}var v=r("9923"),y={key:"",name:"",description:"",routes:[]},k={data:function(){return{role:Object.assign({},y),routes:[],rolesList:[],dialogVisible:!1,dialogType:"new",checkStrictly:!1,defaultProps:{children:"children",label:"title"}}},computed:{routesData:function(){return this.routes}},created:function(){this.getRoutes(),this.getRoles()},methods:{getRoutes:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,f();case 2:r=t.sent,e.serviceRoutes=r.data,n=e.generateRoutes(r.data),e.routes=e.i18n(n);case 6:case"end":return t.stop()}}),t)})))()},getRoles:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,p();case 2:r=t.sent,e.rolesList=r.data;case 4:case"end":return t.stop()}}),t)})))()},i18n:function(e){var t=this,r=e.map((function(e){return e.title=v["default"].t("route.".concat(e.title)),e.children&&(e.children=t.i18n(e.children)),e}));return r},generateRoutes:function(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/",n=[],o=Object(s["a"])(e);try{for(o.s();!(t=o.n()).done;){var i=t.value;if(!i.hidden){var a=this.onlyOneShowingChild(i.children,i);i.children&&a&&!i.alwaysShow&&(i=a);var c={path:u.a.resolve(r,i.path),title:i.meta&&i.meta.title};i.children&&(c.children=this.generateRoutes(i.children,c.path)),n.push(c)}}}catch(l){o.e(l)}finally{o.f()}return n},generateArr:function(e){var t=this,r=[];return e.forEach((function(e){if(r.push(e),e.children){var n=t.generateArr(e.children);n.length>0&&(r=[].concat(Object(a["a"])(r),Object(a["a"])(n)))}})),r},handleAddRole:function(){this.role=Object.assign({},y),this.$refs.tree&&this.$refs.tree.setCheckedNodes([]),this.dialogType="new",this.dialogVisible=!0},handleEdit:function(e){var t=this;this.dialogType="edit",this.dialogVisible=!0,this.checkStrictly=!0,this.role=Object(d["c"])(e.row),this.$nextTick((function(){var e=t.generateRoutes(t.role.routes);t.$refs.tree.setCheckedNodes(t.generateArr(e)),t.checkStrictly=!1}))},handleDelete:function(e){var t=this,r=e.$index,n=e.row;this.$confirm("Confirm to remove the role?","Warning",{confirmButtonText:"Confirm",cancelButtonText:"Cancel",type:"warning"}).then(Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,b(n.key);case 2:t.rolesList.splice(r,1),t.$message({type:"success",message:"Delete succed!"});case 4:case"end":return e.stop()}}),e)})))).catch((function(e){console.error(e)}))},generateTree:function(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/",n=arguments.length>2?arguments[2]:void 0,o=[],i=Object(s["a"])(e);try{for(i.s();!(t=i.n()).done;){var a=t.value,c=u.a.resolve(r,a.path);a.children&&(a.children=this.generateTree(a.children,c,n)),(n.includes(c)||a.children&&a.children.length>=1)&&o.push(a)}}catch(l){i.e(l)}finally{i.f()}return o},confirmRole:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var r,n,o,i,a,s,c,l,u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r="edit"===e.dialogType,n=e.$refs.tree.getCheckedKeys(),e.role.routes=e.generateTree(Object(d["c"])(e.serviceRoutes),"/",n),!r){t.next=16;break}return t.next=6,m(e.role.key,e.role);case 6:o=0;case 7:if(!(o<e.rolesList.length)){t.next=14;break}if(e.rolesList[o].key!==e.role.key){t.next=11;break}return e.rolesList.splice(o,1,Object.assign({},e.role)),t.abrupt("break",14);case 11:o++,t.next=7;break;case 14:t.next=22;break;case 16:return t.next=18,g(e.role);case 18:i=t.sent,a=i.data,e.role.key=a.key,e.rolesList.push(e.role);case 22:s=e.role,c=s.description,l=s.key,u=s.name,e.dialogVisible=!1,e.$notify({title:"Success",dangerouslyUseHTMLString:!0,message:"\n            <div>Role Key: ".concat(l,"</div>\n            <div>Role Nmae: ").concat(u,"</div>\n            <div>Description: ").concat(c,"</div>\n          "),type:"success"});case 25:case"end":return t.stop()}}),t)})))()},onlyOneShowingChild:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,r=null,n=e.filter((function(e){return!e.hidden}));return 1===n.length?(r=n[0],r.path=u.a.resolve(t.path,r.path),r):0===n.length&&(r=Object(i["a"])(Object(i["a"])({},t),{},{path:"",noShowingChildren:!0}),r)}}},w=k,R=(r("c0b1"),r("2877")),x=Object(R["a"])(w,n,o,!1,null,"59f7e624",null);t["default"]=x.exports},e8f0:function(e,t,r){}}]);