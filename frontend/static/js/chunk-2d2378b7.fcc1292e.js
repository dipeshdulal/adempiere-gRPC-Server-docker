(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2378b7"],{fc26:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container-submenu container-context-menu"},[n("el-menu",{directives:[{name:"shortkey",rawName:"v-shortkey",value:{f2:["f2"],f3:["f3"],f5:["f5"],f3:["ctrl","d"]},expression:"{ f2: ['f2'], f3: ['f3'], f5: ['f5'], f3:['ctrl', 'd'] }"}],ref:"contextMenu",staticClass:"el-menu-demo",attrs:{"default-active":e.activeMenu,router:!1,mode:"horizontal","menu-trigger":"hover","unique-opened":""},nativeOn:{shortkey:function(t){return e.actionContextMenu(t)}}},[e.isEmptyValue(e.relationsList)?n("el-menu-item",{attrs:{disabled:"",index:"relations"}},[e._v(" "+e._s(e.$t("components.contextMenuRelations"))+" ")]):n("el-submenu",{staticClass:"el-menu-item",attrs:{index:"1"}},[n("template",{slot:"title"},[e._v(" "+e._s(e.$t("components.contextMenuRelations"))+" ")]),n("el-scrollbar",{attrs:{"wrap-class":"scroll"}},e._l(e.relationsList,(function(e,t){return n("item",{key:t,attrs:{item:e}})})),1)],2),void 0!==e.actions&&e.actions.length?n("el-submenu",{staticClass:"el-menu-item",attrs:{index:"actions"},nativeOn:{click:function(t){return e.runAction(e.actions[0])}}},[n("template",{slot:"title"},[e._v(" "+e._s(e.$t("components.contextMenuActions"))+" ")]),e._l(e.actions,(function(t,s){return[t.childs?n("el-submenu",{key:s,attrs:{index:t.name,disabled:t.disabled}},[n("template",{slot:"title"},[e._v(" "+e._s(t.name)+" ")]),n("el-scrollbar",{attrs:{"wrap-class":"scroll-child"}},e._l(t.childs,(function(t,s){return n("el-menu-item",{key:s,attrs:{index:t.uuid},on:{click:function(n){return e.runAction(t)}}},[e._v(" "+e._s(t.name)+" ")])})),1)],2):n("el-menu-item",{directives:[{name:"show",rawName:"v-show",value:!t.hidden,expression:"!action.hidden"}],key:s,attrs:{index:t.name,disabled:"browser"===e.panelType?e.isEmptyValue(e.getDataSelection):t.disabled},on:{click:function(n){return e.runAction(t)}}},[e._v(" "+e._s(t.name)+" ")])]})),n("el-menu-item",{directives:[{name:"show",rawName:"v-show",value:e.isReport,expression:"isReport"}],attrs:{index:"downloadReport"}},[n("a",{attrs:{href:e.downloads,download:e.file}},[e._v(" "+e._s(e.$t("components.contextMenuDownload"))+" ")])]),e.isManageDataRecords?n("el-submenu",{attrs:{disabled:e.isDisabledExportRecord,index:"exportRecord"},nativeOn:{click:function(t){return e.exportRecord(e.defaultFromatExport)}}},[n("template",{slot:"title"},[e._v(" "+e._s(e.$t("data.exportRecord"))+" ")]),e._l(e.supportedTypes,(function(t,s){return n("el-menu-item",{key:s,attrs:{index:s},nativeOn:{click:function(t){return e.exportRecord(s)}}},[e._v(" "+e._s(t)+" ")])}))],2):e._e(),n("el-menu-item",{directives:[{name:"show",rawName:"v-show",value:"Report Viewer"===e.$route.name,expression:"$route.name === 'Report Viewer'"}],attrs:{index:"printFormat"},on:{click:e.redirect}},[e._v(" "+e._s(e.$t("components.contextMenuPrintFormatSetup"))+" ")]),e.isManageDataRecords?n("el-menu-item",{attrs:{index:"refreshData"},on:{click:e.refreshData}},[e._v(" "+e._s(e.$t("components.contextMenuRefresh"))+" ")]):e._e(),n("el-menu-item",{attrs:{index:"shareLink"},on:{click:e.setShareLink}},[e._v(" "+e._s(e.$t("components.contextMenuShareLink"))+" ")])],2):n("el-menu-item",{attrs:{disabled:"",index:"actionsDisabled"}},[e._v(" "+e._s(e.$t("components.contextMenuActions"))+" ")]),n("el-submenu",{staticClass:"el-menu-item",attrs:{disabled:!(e.isReferecesContent&&e.isLoadedReferences),index:"references"}},[n("template",{slot:"title"},[e._v(" "+e._s(e.$t("components.contextMenuReferences"))+" ")]),e.references&&!e.isEmptyValue(e.references.referencesList)?[n("el-scrollbar",{attrs:{"wrap-class":"scroll-child"}},e._l(e.references.referencesList,(function(t,s){return n("el-menu-item",{key:s,attrs:{index:t.displayName},on:{click:function(n){return e.openReference(t)}}},[e._v(" "+e._s(t.displayName)+" ")])})),1)]:n("el-menu-item",{attrs:{index:"not-references",disabled:""}},[e._v(" "+e._s(e.$t("components.withOutReferences"))+" ")])],2)],1)],1)},i=[],r=n("da45"),a={name:"ContextMenuDesktop",mixins:[r["a"]]},o=a,l=n("2877"),c=Object(l["a"])(o,s,i,!1,null,null,null);t["default"]=c.exports}}]);