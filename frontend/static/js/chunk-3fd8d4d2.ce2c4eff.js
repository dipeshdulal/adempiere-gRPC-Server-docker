(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3fd8d4d2"],{"25db":function(e,t,a){"use strict";var s=a("3324"),i=a.n(s);i.a},3324:function(e,t,a){},5369:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.isLoadedMetadata?a("el-container",{key:"process-loaded",staticClass:"view-base",staticStyle:{height:"84vh"}},[e.showContextMenu?a("el-header",{staticStyle:{height:"39px"}},[a("context-menu",{attrs:{"menu-parent-uuid":e.$route.meta.parentUuid,"container-uuid":e.processUuid,"panel-type":e.panelType,"is-report":e.processMetadata.isReport}})],1):e._e(),a("el-main",[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:24}},[a("el-card",{staticClass:"content-collapse"},[a("h3",{directives:[{name:"show",rawName:"v-show",value:!e.isEmptyValue(e.processTitle),expression:"!isEmptyValue(processTitle)"}],staticClass:"warn-content text-center"},[e.isEmptyValue(e.processMetadata.help)?e._e():a("el-popover",{ref:"helpTitle",attrs:{placement:"top-start",title:e.processTitle,width:"400",trigger:"hover"}},[a("div",{domProps:{innerHTML:e._s(e.processMetadata.help)}})]),a("el-button",{directives:[{name:"popover",rawName:"v-popover:helpTitle",arg:"helpTitle"}],staticClass:"title text-center",attrs:{type:"text"}},[e._v(" "+e._s(e.processMetadata.name)+" ")])],1),a("main-panel",{attrs:{"position-tab":e.processMetadata.accesLevel,"container-uuid":e.processUuid,metadata:e.processMetadata,"is-edit":e.isEdit,"panel-type":e.panelType}})],1)],1)],1)],1)],1):a("div",{directives:[{name:"loading",rawName:"v-loading",value:!e.isLoadedMetadata,expression:"!isLoadedMetadata"}],key:"process-loading",staticClass:"loading-process",attrs:{"element-loading-text":e.$t("notifications.loading"),"element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(255, 255, 255, 0.8)"}})},i=[],n=(a("b0c0"),a("d3b7"),a("7d13")),o=a("2d61"),r={name:"ProcessView",components:{MainPanel:o["a"],ContextMenu:n["a"]},props:{isEdit:{type:Boolean,default:!1}},data:function(){return{processMetadata:{},processUuid:this.$route.meta.uuid,isLoadedMetadata:!1,panelType:"process"}},computed:{showContextMenu:function(){return this.$store.state.settings.showContextMenu},getterProcess:function(){return this.$store.getters.getPanel(this.processUuid)},processTitle:function(){return this.processMetadata.name||this.$route.meta.title}},created:function(){this.getProcess()},methods:{getProcess:function(){var e=this,t=this.getterProcess;t?(this.processMetadata=t,this.isLoadedMetadata=!0):this.$store.dispatch("getPanelAndFields",{containerUuid:this.processUuid,panelType:this.panelType,routeToDelete:this.$route}).then((function(t){e.processMetadata=t})).finally((function(){e.isLoadedMetadata=!0}))}}},d=r,c=(a("25db"),a("bd2d"),a("2877")),p=Object(c["a"])(d,s,i,!1,null,"0523f035",null);t["default"]=p.exports},a121:function(e,t,a){},bd2d:function(e,t,a){"use strict";var s=a("a121"),i=a.n(s);i.a}}]);