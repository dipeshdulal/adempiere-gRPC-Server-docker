(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2bc2253c"],{"2e3c":function(t,e,i){},"65a6":function(t,e,i){"use strict";var n=i("2e3c"),s=i.n(n);s.a},b811:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:t.classDisable+" "+t.metadata.cssClassName,attrs:{id:t.id}})},s=[],a=(i("b680"),i("5530")),o=(i("44f8"),i("a6e0"),i("a7be"),i("547e")),d=i.n(o),u=i("9923"),r=i("2874"),h={name:"FieldTextLong",mixins:[r["a"]],props:{id:{type:String,required:!1,default:function(){return"markdown-editor-"+ +new Date+(1e3*Math.random()).toFixed(0)}}},data:function(){return{mode:"markdown",height:"200px",editor:null}},computed:{classDisable:function(){return this.isDisabled?"isdisable":""},language:function(){return this.isEmptyValue(Object(u["getLanguage"])())?"en_US":Object(u["getLanguage"])()},editorOptions:function(){var t={previewStyle:"vertical",useCommandShortcut:!0,usageStatistics:!1,hideModeSwitch:this.isDisabled};return t.initialEditType=this.mode,t.height=this.height,t.language=this.language,t}},watch:{valueModel:function(t,e){this.metadata.inTable&&(this.isEmptyValue(t)&&(t=""),this.value=String(t))},"metadata.value":function(t,e){this.metadata.inTable||(this.isEmptyValue(t)&&(t=""),this.value=String(t))},value:function(t,e){this.isDisabled?(this.value=e,this.editor.setValue(e)):this.editor.setValue(t)},language:function(t){this.destroyEditor(),this.initEditor()},height:function(t){this.editor.height(t)},isDisabled:function(t){this.classDisable,this.destroyEditor(),this.initEditor()}},mounted:function(){this.initEditor()},destroyed:function(){this.destroyEditor()},methods:{initEditor:function(){this.editor=new d.a(Object(a["a"])({el:document.getElementById(this.id)},this.editorOptions)),this.isEmptyValue(this.value)||this.editor.setValue(this.value),this.setEvents()},setEvents:function(){this.isDisabled?(this.removeEventSendValues(),this.addReanOnlyChanges()):(this.addEventSendValues(),this.removeReadOnlyChanges())},addEventSendValues:function(){var t=this;this.editor.on("blur",(function(){t.isDisabled||t.preHandleChange(t.editor.getValue())}))},addReanOnlyChanges:function(){var t=this;this.editor.on("change",(function(){t.editor.setValue(t.value)}))},removeEventSendValues:function(){this.editor.off("blur")},removeReadOnlyChanges:function(){this.editor.off("change")},destroyEditor:function(){this.editor&&(this.removeEventSendValues(),this.removeReadOnlyChanges(),this.editor.remove())},setHtml:function(t){this.editor.setHtml(t)},getHtml:function(){return this.editor.getHtml()}}},l=h,c=(i("65a6"),i("2877")),f=Object(c["a"])(l,n,s,!1,null,null,null);e["default"]=f.exports}}]);