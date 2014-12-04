dojo._hasResource["dijit.form.InlineEditBox"]||(dojo._hasResource["dijit.form.InlineEditBox"]=!0,dojo.provide("dijit.form.InlineEditBox"),dojo.require("dojo.i18n"),dojo.require("dijit.form._FormWidget"),dojo.require("dijit._Container"),dojo.require("dijit.form.Button"),dojo.requireLocalization("dijit","common",null,"ROOT,cs,de,es,fr,hu,it,ja,ko,pl,pt,ru,zh,zh-tw"),dojo.deprecated("dijit.form.InlineEditBox is deprecated, use dijit.InlineEditBox instead","","1.1"),dojo.declare("dijit.form.InlineEditBox",[dijit.form._FormWidget,dijit._Container],{templateString:'<span\r\n	><fieldset dojoAttachPoint="editNode" style="display:none;" waiRole="presentation"\r\n		><div dojoAttachPoint="containerNode" dojoAttachEvent="onkeypress:_onEditWidgetKeyPress"></div\r\n		><div dojoAttachPoint="buttonContainer"\r\n			><button class=\'saveButton\' dojoAttachPoint="saveButton" dojoType="dijit.form.Button" dojoAttachEvent="onClick:save">${buttonSave}</button\r\n			><button class=\'cancelButton\' dojoAttachPoint="cancelButton" dojoType="dijit.form.Button" dojoAttachEvent="onClick:cancel">${buttonCancel}</button\r\n		></div\r\n	></fieldset\r\n	><span tabIndex="0" dojoAttachPoint="textNode,focusNode" waiRole="button" style="display:none;"\r\n		dojoAttachEvent="onkeypress:_onKeyPress,onclick:_onClick,onmouseout:_onMouseOut,onmouseover:_onMouseOver,onfocus:_onMouseOver,onblur:_onMouseOut"\r\n	></span\r\n></span>\r\n',editing:!1,autoSave:!0,buttonSave:"",buttonCancel:"",renderAsHtml:!1,widgetsInTemplate:!0,_display:"",startup:function(){if(!this._started){this.editWidget?this.containerNode.appendChild(this.editWidget.domNode):this.editWidget=this.getChildren()[0];var t=dojo.getComputedStyle(this.domNode);if(dojo.forEach(["fontWeight","fontFamily","fontSize","fontStyle"],function(i){this.editWidget.focusNode.style[i]=t[i]},this),this._setEditValue=dojo.hitch(this.editWidget,this.editWidget.setDisplayedValue||this.editWidget.setValue),this._getEditValue=dojo.hitch(this.editWidget,this.editWidget.getDisplayedValue||this.editWidget.getValue),this._setEditFocus=dojo.hitch(this.editWidget,this.editWidget.focus),this._isEditValid=dojo.hitch(this.editWidget,this.editWidget.isValid||function(){return!0}),this.editWidget.onChange=dojo.hitch(this,"_onChange"),!this.autoSave){this._oldSetValue=this.editWidget.setValue;var i=this;this.editWidget.setValue=dojo.hitch(this,function(){i._oldSetValue.apply(i.editWidget,arguments),i._onEditWidgetKeyPress(null)})}this._showText(),this._started=!0}},postMixInProperties:function(){this._srcTag=this.srcNodeRef.tagName,this._srcStyle=dojo.getComputedStyle(this.srcNodeRef);var t=this.srcNodeRef.style;if(this._display="",t&&t.display)this._display=t.display;else switch(this.srcNodeRef.tagName.toLowerCase()){case"span":case"input":case"img":case"button":this._display="inline";break;default:this._display="block"}this.inherited("postMixInProperties",arguments),this.messages=dojo.i18n.getLocalization("dijit","common",this.lang),dojo.forEach(["buttonSave","buttonCancel"],function(t){this[t]||(this[t]=this.messages[t])},this)},postCreate:function(){this.autoSave&&dojo.style(this.buttonContainer,"display","none")},_onKeyPress:function(t){this.disabled||t.altKey||t.ctrlKey||(t.charCode==dojo.keys.SPACE||t.keyCode==dojo.keys.ENTER)&&(dojo.stopEvent(t),this._onClick(t))},_onMouseOver:function(){if(!this.editing){var t=this.disabled?"dijitDisabledClickableRegion":"dijitClickableRegion";dojo.addClass(this.textNode,t)}},_onMouseOut:function(){if(!this.editing){var t=this.disabled?"dijitDisabledClickableRegion":"dijitClickableRegion";dojo.removeClass(this.textNode,t)}},_onClick:function(){this.editing||this.disabled||(this._onMouseOut(),this.editing=!0,this._setEditValue(this._isEmpty?"":this.renderAsHtml?this.textNode.innerHTML:this.textNode.innerHTML.replace(/\s*\r?\n\s*/g,"").replace(/<br\/?>/gi,"\n").replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&")),this._initialText=this._getEditValue(),this._visualize(),setTimeout(dojo.hitch(this,function(){this._setEditFocus(),this.saveButton.setDisabled(!0)}),1))},_visualize:function(){dojo.style(this.editNode,"display",this.editing?this._display:"none"),this.editing&&this._setEditFocus(),dojo.style(this.textNode,"display",this.editing?"none":this._display)},_showText:function(){var t=""+this._getEditValue();if(dijit.form.InlineEditBox.superclass.setValue.call(this,t),/^\s*$/.test(t)?(t="?",this._isEmpty=!0):this._isEmpty=!1,this.renderAsHtml)this.textNode.innerHTML=t;else if(this.textNode.innerHTML="",t.split){var i=this,e=!0;dojo.forEach(t.split("\n"),function(t){e?e=!1:i.textNode.appendChild(document.createElement("BR")),i.textNode.appendChild(document.createTextNode(t))})}else this.textNode.appendChild(document.createTextNode(t));this._visualize()},save:function(t){"object"==typeof t&&dojo.stopEvent(t),this.enableSave()&&(this.editing=!1,this._showText(),t&&dijit.focus(this.focusNode),this._lastValue!=this._lastValueReported&&this.onChange(this._lastValue))},cancel:function(t){t&&dojo.stopEvent(t),this.editing=!1,this._visualize(),t&&dijit.focus(this.focusNode)},setValue:function(t){this._setEditValue(t),this.editing=!1,this._showText()},_onEditWidgetKeyPress:function(t){if(this.editing)if(this.autoSave)t.keyCode==dojo.keys.ESCAPE?this.cancel(t):t.keyCode==dojo.keys.ENTER&&this.save(t);else{var i=this;setTimeout(function(){i.saveButton.setDisabled(i._getEditValue()==i._initialText)},100)}},_onBlur:function(){this.autoSave&&this.editing&&(this._getEditValue()==this._initialText?this.cancel():this.save())},enableSave:function(){return this._isEditValid()},_onChange:function(){this.editing?this.autoSave?this.save(1):this.saveButton.setDisabled(this._getEditValue()==this._initialText||!this.enableSave()):this._showText()},setDisabled:function(t){this.saveButton.setDisabled(t),this.cancelButton.setDisabled(t),this.textNode.disabled=t,this.editWidget.setDisabled(t),this.inherited("setDisabled",arguments)}}));