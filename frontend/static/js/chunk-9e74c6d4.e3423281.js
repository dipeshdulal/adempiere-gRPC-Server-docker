(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9e74c6d4"],{"59c4":function(e,t,n){"use strict";var s=n("bced"),a=n.n(s);a.a},a939:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-card",{staticClass:"box-card",attrs:{"body-style":{padding:"0px"},shadow:"never"}},[n("div",{staticClass:"recent-items"},[n("el-table",{attrs:{data:e.dataResult,"max-height":"455"},on:{"row-click":e.handleClick}},[n("el-table-column",{attrs:{width:"40"},scopedSlots:e._u([{key:"default",fn:function(e){var t=e.row;return[n("svg-icon",{staticClass:"icon-window",attrs:{"icon-class":t.icon}})]}}])}),n("el-table-column",{scopedSlots:e._u([{key:"header",fn:function(t){return[n("el-input",{attrs:{size:"mini",metadata:t,placeholder:e.$t("table.dataTable.search")},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})]}},{key:"default",fn:function(t){var s=t.row;return[n("span",[e._v(e._s(s.displayName))]),n("el-tag",{staticClass:"action-tag"},[e._v(" "+e._s(e.$t("views."+s.action))+" ")]),n("br"),n("span",{staticClass:"time"},[e._v(" "+e._s(e.translateDate(s.updated))+" ")])]}}])})],1)],1)])},a=[],i=(n("99af"),n("4de4"),n("caad"),n("d81d"),n("b0c0"),n("d3b7"),n("ac1f"),n("2532"),n("5319"),n("841c"),n("5530")),c=n("1f00"),r=n("bb44"),o=n("3fbe"),u=n("8839"),d={name:"RecentItems",props:{metadata:{type:Object,required:!0}},data:function(){return{recentItems:[],unsubscribe:function(){},isLoaded:!0,search:"",accentRegexp:/[\u0300-\u036f]/g}},computed:{getterRecentItems:function(){return this.$store.getters.getRecentItems},cachedViews:function(){return this.$store.getters.cachedViews},dataResult:function(){return this.search.length?this.filterResult(this.search):this.recentItems},permissionRoutes:function(){return this.$store.getters.permission_routes}},mounted:function(){this.getRecentItems({pageToken:void 0,pageSize:void 0}),this.unsubscribe=this.subscribeChanges()},beforeDestroy:function(){this.unsubscribe()},methods:{showMessage:u["a"],checkOpened:function(e){return this.cachedViews.includes(e)},getRecentItems:function(e){var t=this,n=e.pageToken,s=e.pageSize;return new Promise((function(e){Object(c["c"])({pageToken:n,pageSize:s}).then((function(n){var s=n.recentItemsList.map((function(e){var t=Object(r["b"])(e.action);return Object(i["a"])(Object(i["a"])({},e),{},{action:t.name,icon:t.icon,uuidRecord:e.recordUuid,updated:new Date(e.updated),uuid:e.menuUuid,name:e.menuName,description:e.menuDescription})}));t.recentItems=s,t.isLoaded=!1,e(s)})).catch((function(e){console.warn("Error getting recent items: ".concat(e.message,". Code: ").concat(e.code,"."))}))}))},handleClick:function(e){var t,n,s=Object(o["g"])({treeData:this.permissionRoutes,attributeValue:e.referenceUuid,attributeName:"meta",secondAttribute:"uuid",attributeChilds:"children"});s?(this.isEmptyValue(e.uuidRecord)||(t=e.uuidRecord),"window"===e.action&&(n=0),this.$router.push({name:s.name,query:{action:t,tabParent:n}})):this.showMessage({type:"error",message:this.$t("notifications.noRoleAccess")})},subscribeChanges:function(){var e=this;return this.$store.subscribe((function(t,n){"notifyDashboardRefresh"===t.type&&e.getRecentItems()}))},filterResult:function(e){var t=this;return this.recentItems.filter((function(n){return t.ignoreAccent(n.displayName).toLowerCase().includes(t.ignoreAccent(e.toLowerCase()))}))},ignoreAccent:function(e){return e?e.normalize("NFD").replace(/[\u0300-\u036f]/g,""):""},translateDate:function(e){return this.$d(new Date(e),"long",this.language)}}},l=d,h=(n("59c4"),n("2877")),f=Object(h["a"])(l,s,a,!1,null,"08250fec",null);t["default"]=f.exports},bced:function(e,t,n){}}]);