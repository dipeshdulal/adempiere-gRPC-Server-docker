(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-13fcad36"],{"0a4d":function(e,t,i){},"0dbb":function(e,t,i){},"5b45":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-container",{key:"form-loaded",staticClass:"view-base",staticStyle:{height:"max-content!important"}},[i("el-header",{staticStyle:{height:"39px"}},[i("context-menu",{attrs:{"menu-parent-uuid":e.$route.meta.parentUuid,"container-uuid":e.metadata.containerUuid,"panel-type":e.panelType}})],1),i("el-main",[i("el-row",{attrs:{gutter:20}},[i("el-col",{attrs:{span:24}},[e.isLoaded?i("el-card",{staticClass:"content-collapse",style:e.isEmptyValue(e.metadata.fieldList)?"height: max-content!important;":""},[i("h3",{staticClass:"warn-content text-center"},[e.isEmptyValue(e.metadata.help)?e._e():i("el-popover",{ref:"helpTitle",attrs:{placement:"top-start",title:e.formTitle,width:"400",trigger:"hover"}},[i("div",{domProps:{innerHTML:e._s(e.metadata.help)}})]),i("el-button",{directives:[{name:"popover",rawName:"v-popover:helpTitle",arg:"helpTitle"}],staticClass:"title text-center",attrs:{type:"text"}},[e._v(" "+e._s(e.formTitle)+" ")])],1),i("div",{staticClass:"wrapper"},[i("el-form",{attrs:{"label-position":"top","label-width":"200px"}},[i("el-row",e._l(e.fieldsList,(function(e){return i("field",{key:e.columnName,attrs:{"metadata-field":e}})})),1)],1)],1)]):i("div",{directives:[{name:"loading",rawName:"v-loading",value:!e.isLoaded,expression:"!isLoaded"}],key:"form-loading",staticClass:"view-loading",attrs:{"element-loading-text":e.$t("notifications.loading"),"element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(255, 255, 255, 0.8)"}})],1)],1)],1)],1)},a=[],r=(i("b0c0"),i("ab83")),o=i("0635"),s=[{columnName:"URL",definition:{name:"Web",handleRequestFocus:!0,handleContentSelection:!0,displayType:o["q"].id}},{isFromDictionary:!0,fieldUuid:"8ceabe8a-fb40-11e8-a479-7a0060f0aa01"},{isFromDictionary:!0,columnUuid:"8b4bbb7e-fb40-11e8-a479-7a0060f0aa01"},{isFromDictionary:!0,elementColumnName:"M_RMA_ID"},{tableName:"C_BPartner",columnName:"PaymentRule",isFromDictionary:!0,overwriteDefinition:{isMandatory:!0}},{columnName:"C_Currency_ID",definition:{name:"Currency",displayType:o["m"].id,keyColumn:"C_Currency.C_Currency_ID",directQuery:"SELECT C_Currency.C_Currency_ID,NULL,C_Currency.ISO_Code,C_Currency.IsActive FROM C_Currency WHERE C_Currency.C_Currency_ID=?",query:"SELECT C_Currency.C_Currency_ID,NULL,C_Currency.ISO_Code,C_Currency.IsActive FROM C_Currency ORDER BY 3"}},{columnName:"Name",definition:{name:"Only Name",displayType:o["n"].id,displayLogic:'@URL@!""',handleActionKeyPerformed:!0}},{columnName:"Amount",definition:{name:"Amount for it",displayType:o["k"].id,readOnlyLogic:'@C_Currency_ID@<>""',handleActionKeyPerformed:!0}},{columnName:"SeqNo",definition:{name:"Sequence for record",displayType:o["j"].id,mandatoryLogic:'@URL@!""',showControl:1}},{columnName:"Description",definition:{name:"Only Description",displayType:o["o"].id}}],c=i("7d13"),d={name:"TestView",components:{ContextMenu:c["a"]},mixins:[r["a"]],props:{metadata:{type:Object,default:function(){return{containerUuid:"Test-View",name:"Test View"}}}},data:function(){return{fieldsList:s,unsubscribe:function(){}}},computed:{formTitle:function(){return this.metadata.name||this.$route.meta.title}},created:function(){this.unsubscribe=this.subscribeChanges()},beforeDestroy:function(){this.unsubscribe()},methods:{subscribeChanges:function(){return this.$store.subscribe((function(e,t){"addActionKeyPerformed"===e.type&&console.log(e)}))}}},u=d,l=(i("e148"),i("671a"),i("2877")),m=Object(l["a"])(u,n,a,!1,null,"9cf7aec8",null);t["default"]=m.exports},"671a":function(e,t,i){"use strict";var n=i("0a4d"),a=i.n(n);a.a},ab83:function(e,t,i){"use strict";i("99af"),i("4160"),i("b0c0"),i("d3b7"),i("3ca3"),i("159b"),i("ddb0");var n=i("5530"),a=(i("96cf"),i("1da1")),r=i("2cb9"),o=i("3956");t["a"]={name:"FormMixn",components:{Field:r["a"]},props:{metadata:{type:Object,required:!0}},data:function(){return{fieldsList:[],panelMetadata:{},isLoaded:!1,panelType:"form"}},computed:{getterPanel:function(){return this.$store.getters.getPanel(this.metadata.containerUuid)}},created:function(){this.getPanel()},methods:{createFieldFromDefinition:o["a"],createFieldFromDictionary:o["b"],getPanel:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(i=e.getterPanel,!i){t.next=6;break}e.fieldsList=i.fieldList,e.isLoaded=!0,t.next=9;break;case 6:return t.next=8,e.generateFieldsList();case 8:e.$store.dispatch("addPanel",Object(n["a"])(Object(n["a"])({},e.metadata),{},{uuid:e.metadata.containerUuid,panelType:e.panelType,fieldList:e.fieldsList})).then((function(t){e.fieldsList=t.fieldList,e.$store.dispatch("changeFormAttribute",{containerUuid:e.metadata.containerUuid,attributeName:"fieldList",attributeValue:e.fieldsList})})).finally((function(){e.isLoaded=!0}));case 9:case"end":return t.stop()}}),t)})))()},generateFieldsList:function(){var e=this,t=0,i=function(e){return e&&(t=e),t+=10,t};return new Promise((function(t){var a={containerUuid:e.metadata.containerUuid,isEvaluateValueChanges:!1,panelType:e.panelType},r=[],o=[];e.fieldsList.forEach((function(t){t.isFromDictionary?(t.overwriteDefinition?e.isEmptyValue(t.overwriteDefinition.sequence)?t.overwriteDefinition.sequence=i():i(t.overwriteDefinition.sequence):(t.overwriteDefinition={},t.overwriteDefinition.sequence=i()),r.push(e.createFieldFromDictionary(Object(n["a"])(Object(n["a"])({},t),a)))):(t.definition?e.isEmptyValue(t.definition.sequence)?t.definition.sequence=i():i(t.definition.sequence):(t.definition={},t.definition.sequence=i()),o.push(e.createFieldFromDefinition(Object(n["a"])(Object(n["a"])({},t),a))))}));var s=o;e.isEmptyValue(r)?(e.fieldsList=s,t(s),e.isLoaded=!0):Promise.all(r).then((function(i){s=s.concat(i),t(s),e.fieldsList=s,e.isLoaded=!0}))}))},setValue:function(e,t){this.$store.dispatch("notifyFieldChange",{containerUuid:this.metadata.containerUuid,panelType:this.metadata.panelType,columnName:e,newValue:t})},setValues:function(e){var t=e.values,i=void 0===t?{}:t,n=e.withOutColumnNames,a=void 0===n?[]:n;this.$store.dispatch("notifyPanelChange",{containerUuid:this.metadata.containerUuid,panelType:this.metadata.panelType,newValues:i,withOutColumnNames:a,isChangedAllValues:!0})},addAction:function(e){this.$store.dispatch("addAction",{name:e.name,action:e.action,containerUuid:this.metadata.containerUuid})}}}},e148:function(e,t,i){"use strict";var n=i("0dbb"),a=i.n(n);a.a}}]);