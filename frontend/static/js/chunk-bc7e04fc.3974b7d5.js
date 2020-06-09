(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bc7e04fc"],{"1ac0":function(e,i,t){"use strict";t.r(i);var n=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{staticClass:"wrapper"},[e.isLoaded?t("el-form",{key:"form-loaded",attrs:{"label-position":"top","label-width":"200px"}},[t("el-row",e._l(e.fieldsList,(function(e){return t("field",{key:e.columnName,attrs:{"metadata-field":e,"v-model":e.value}})})),1)],1):t("div",{directives:[{name:"loading",rawName:"v-loading",value:!e.isLoaded,expression:"!isLoaded"}],key:"form-loading",staticClass:"loading-panel",attrs:{"element-loading-text":e.$t("notifications.loading"),"element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(255, 255, 255, 0.8)"}})],1)},a=[],s=(t("a4d3"),t("e01a"),t("b0c0"),t("ab83")),r=t("0635"),o=[{elementColumnName:"ProductValue",isFromDictionary:!0,overwriteDefinition:{size:24,sequence:10,cssClassName:"price-inquiry",handleActionKeyPerformed:!0}},{elementColumnName:"ProductName",isFromDictionary:!0,overwriteDefinition:{size:24,sequence:20,isReadOnly:!0,cssClassName:"price-inquiry"}},{elementColumnName:"ProductDescription",isFromDictionary:!0,overwriteDefinition:{size:24,sequence:30,displayType:r["n"].id,isReadOnly:!0,cssClassName:"price-inquiry"}},{elementColumnName:"PriceList",isFromDictionary:!0,overwriteDefinition:{size:16,sequence:40,isReadOnly:!0,cssClassName:"price-inquiry",help:"0.00"}},{elementColumnName:"TaxAmt",isFromDictionary:!0,overwriteDefinition:{size:8,sequence:50,isReadOnly:!0,cssClassName:"price-inquiry",help:"0.00"}},{elementColumnName:"GrandTotal",isFromDictionary:!0,overwriteDefinition:{size:24,sequence:60,isReadOnly:!0,cssClassName:"price-inquiry",help:"0.00"}}],u=t("4e36");function c(e){var i=e.searchValue,t=e.upc,n=e.value,a=e.name,s=e.priceListUuid,r=e.businessPartnerUuid,o=e.warehouseUuid,c=e.validFrom;return u["e"].call(this).getProductPrice({searchValue:i,upc:t,value:n,name:a,priceListUuid:s,businessPartnerUuid:r,warehouseUuid:o,validFrom:c})}var d={name:"PriceInquiry",mixins:[s["a"]],data:function(){return{fieldsList:o,unsubscribe:function(){}}},created:function(){this.unsubscribe=this.subscribeChanges()},beforeDestroy:function(){this.unsubscribe()},methods:{subscribeChanges:function(){var e=this;return this.$store.subscribe((function(i,t){"addActionKeyPerformed"===i.type&&"ProductValue"===i.payload.columnName&&(e.setValues({withOutColumnNames:["ProductValue"]}),c({searchValue:i.payload.value}).then((function(i){var t=i.product,n=i.taxRate,a={ProductName:t.name,ProductDescription:t.description,PriceList:i.priceList,TaxAmt:e.getTaxAmount(i.priceList,n.rate),GrandTotal:e.getGrandTotal(i.priceList,n.rate)};e.setValues({values:a,withOutColumnNames:["ProductValue"]})})).catch((function(i){e.$message({type:"info",message:i.message})})))}))},getTaxAmount:function(e,i){return this.isEmptyValue(e)||this.isEmptyValue(i)?0:e*i/100},getGrandTotal:function(e,i){return this.isEmptyValue(e)?0:e+this.getTaxAmount(e,i)}}},l=d,m=(t("ee12"),t("2877")),f=Object(m["a"])(l,n,a,!1,null,null,null);i["default"]=f.exports},ab83:function(e,i,t){"use strict";t("99af"),t("4160"),t("b0c0"),t("d3b7"),t("3ca3"),t("159b"),t("ddb0");var n=t("5530"),a=(t("96cf"),t("1da1")),s=t("2cb9"),r=t("3956");i["a"]={name:"FormMixn",components:{Field:s["a"]},props:{metadata:{type:Object,required:!0}},data:function(){return{fieldsList:[],panelMetadata:{},isLoaded:!1,panelType:"form"}},computed:{getterPanel:function(){return this.$store.getters.getPanel(this.metadata.containerUuid)}},created:function(){this.getPanel()},methods:{createFieldFromDefinition:r["a"],createFieldFromDictionary:r["b"],getPanel:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function i(){var t;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(t=e.getterPanel,!t){i.next=6;break}e.fieldsList=t.fieldList,e.isLoaded=!0,i.next=9;break;case 6:return i.next=8,e.generateFieldsList();case 8:e.$store.dispatch("addPanel",Object(n["a"])(Object(n["a"])({},e.metadata),{},{uuid:e.metadata.containerUuid,panelType:e.panelType,fieldList:e.fieldsList})).then((function(i){e.fieldsList=i.fieldList,e.$store.dispatch("changeFormAttribute",{containerUuid:e.metadata.containerUuid,attributeName:"fieldList",attributeValue:e.fieldsList})})).finally((function(){e.isLoaded=!0}));case 9:case"end":return i.stop()}}),i)})))()},generateFieldsList:function(){var e=this,i=0,t=function(e){return e&&(i=e),i+=10,i};return new Promise((function(i){var a={containerUuid:e.metadata.containerUuid,isEvaluateValueChanges:!1,panelType:e.panelType},s=[],r=[];e.fieldsList.forEach((function(i){i.isFromDictionary?(i.overwriteDefinition?e.isEmptyValue(i.overwriteDefinition.sequence)?i.overwriteDefinition.sequence=t():t(i.overwriteDefinition.sequence):(i.overwriteDefinition={},i.overwriteDefinition.sequence=t()),s.push(e.createFieldFromDictionary(Object(n["a"])(Object(n["a"])({},i),a)))):(i.definition?e.isEmptyValue(i.definition.sequence)?i.definition.sequence=t():t(i.definition.sequence):(i.definition={},i.definition.sequence=t()),r.push(e.createFieldFromDefinition(Object(n["a"])(Object(n["a"])({},i),a))))}));var o=r;e.isEmptyValue(s)?(e.fieldsList=o,i(o),e.isLoaded=!0):Promise.all(s).then((function(t){o=o.concat(t),i(o),e.fieldsList=o,e.isLoaded=!0}))}))},setValue:function(e,i){this.$store.dispatch("notifyFieldChange",{containerUuid:this.metadata.containerUuid,panelType:this.metadata.panelType,columnName:e,newValue:i})},setValues:function(e){var i=e.values,t=void 0===i?{}:i,n=e.withOutColumnNames,a=void 0===n?[]:n;this.$store.dispatch("notifyPanelChange",{containerUuid:this.metadata.containerUuid,panelType:this.metadata.panelType,newValues:t,withOutColumnNames:a,isChangedAllValues:!0})},addAction:function(e){this.$store.dispatch("addAction",{name:e.name,action:e.action,containerUuid:this.metadata.containerUuid})}}}},d3fc:function(e,i,t){},ee12:function(e,i,t){"use strict";var n=t("d3fc"),a=t.n(n);a.a}}]);