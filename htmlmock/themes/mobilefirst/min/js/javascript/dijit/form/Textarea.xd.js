dojo._xdResourceLoaded({depends:[["provide","dijit.form.Textarea"],["require","dijit.form._FormWidget"],["require","dojo.i18n"],["requireLocalization","dijit","Textarea",null,"ROOT","ROOT"]],defineResource:function(e){e._hasResource["dijit.form.Textarea"]||(e._hasResource["dijit.form.Textarea"]=!0,e.provide("dijit.form.Textarea"),e.require("dijit.form._FormWidget"),e.require("dojo.i18n"),e.declare("dijit.form.Textarea",dijit.form._FormWidget,{attributeMap:e.mixin(e.clone(dijit.form._FormWidget.prototype.attributeMap),{style:"styleNode","class":"styleNode"}),templateString:e.isIE||e.isSafari||e.isMozilla?(e.isIE||e.isSafari?'<fieldset id="${id}" class="dijitInline dijitInputField dijitTextArea" dojoAttachPoint="styleNode" waiRole="presentation"><div dojoAttachPoint="editNode,focusNode,eventNode" dojoAttachEvent="onpaste:_changing,oncut:_changing" waiRole="textarea" style="text-decoration:none;_padding-bottom:16px;display:block;overflow:auto;" contentEditable="true"></div>':'<span id="${id}" class="dijitReset"><iframe src="javascript:<html><head><title>${_iframeEditTitle}</title></head><body><script>var _postCreate=window.frameElement?window.frameElement.postCreate:null;if(_postCreate)_postCreate();</script></body></html>" dojoAttachPoint="iframe,styleNode" dojoAttachEvent="onblur:_onIframeBlur" class="dijitInline dijitInputField dijitTextArea"></iframe>')+'<textarea name="${name}" value="${value}" dojoAttachPoint="formValueNode" style="display:none;"></textarea>'+(e.isIE||e.isSafari?"</fieldset>":"</span>"):'<textarea id="${id}" name="${name}" value="${value}" dojoAttachPoint="formValueNode,editNode,focusNode,styleNode" class="dijitInputField dijitTextArea"></textarea>',focus:function(){this.disabled||this._changing(),e.isMozilla?dijit.focus(this.iframe):dijit.focus(this.focusNode)},setValue:function(t,i){var s=this.editNode;if("string"==typeof t)if(s.innerHTML="",t.split){var a=!0;e.forEach(t.split("\n"),function(e){a?a=!1:s.appendChild(document.createElement("BR")),s.appendChild(document.createTextNode(e))})}else s.appendChild(document.createTextNode(t));else t=s.innerHTML,this.iframe&&(t=t.replace(/<div><\/div>\r?\n?$/i,"")),t=t.replace(/\s*\r?\n|^\s+|\s+$|&nbsp;/g,"").replace(/>\s+</g,"><").replace(/<\/(p|div)>$|^<(p|div)[^>]*>/gi,"").replace(/([^>])<div>/g,"$1\n").replace(/<\/p>\s*<p[^>]*>|<br[^>]*>/gi,"\n").replace(/<[^>]*>/g,"").replace(/&amp;/gi,"&").replace(/&lt;/gi,"<").replace(/&gt;/gi,">");if(this.value=this.formValueNode.value=t,this.iframe){var o=document.createElement("div");s.appendChild(o);var r=o.offsetTop;s.scrollWidth>s.clientWidth&&(r+=16),this.lastHeight!=r&&(0==r&&(r=16),e.contentBox(this.iframe,{h:r}),this.lastHeight=r),s.removeChild(o)}dijit.form.Textarea.superclass.setValue.call(this,this.getValue(),i)},getValue:function(){return this.formValueNode.value.replace(/\r/g,"")},postMixInProperties:function(){if(dijit.form.Textarea.superclass.postMixInProperties.apply(this,arguments),this.srcNodeRef&&""!=this.srcNodeRef.innerHTML&&(this.value=this.srcNodeRef.innerHTML,this.srcNodeRef.innerHTML=""),this.value&&""!=this.value||!this.srcNodeRef||!this.srcNodeRef.value||(this.value=this.srcNodeRef.value),this.value||(this.value=""),this.value=this.value.replace(/\r\n/g,"\n").replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&"),e.isMozilla){var t=e.i18n.getLocalization("dijit","Textarea");this._iframeEditTitle=t.iframeEditTitle,this._iframeFocusTitle=t.iframeFocusTitle;var i=e.query('label[for="'+this.id+'"]');i.length&&(this._iframeEditTitle=i[0].innerHTML+" "+this._iframeEditTitle);var s=this.focusNode=this.editNode=document.createElement("BODY");s.style.margin="0px",s.style.padding="0px",s.style.border="0px"}},postCreate:function(){if(e.isIE||e.isSafari)this.domNode.style.overflowY="hidden";else if(e.isMozilla){var t=this.iframe.contentWindow;try{var i=this.iframe.contentDocument.title}catch(s){var i=""}if(!t||!i)return this.iframe.postCreate=e.hitch(this,this.postCreate),void 0;var a=t.document;a.getElementsByTagName("HTML")[0].replaceChild(this.editNode,a.getElementsByTagName("BODY")[0]),this.isLeftToRight()||(a.getElementsByTagName("HTML")[0].dir="rtl"),this.iframe.style.overflowY="hidden",this.eventNode=a,t.addEventListener("resize",e.hitch(this,this._changed),!1)}else this.focusNode=this.domNode;this.eventNode&&(this.connect(this.eventNode,"keypress",this._onKeyPress),this.connect(this.eventNode,"mousemove",this._changed),this.connect(this.eventNode,"focus",this._focused),this.connect(this.eventNode,"blur",this._blurred)),this.editNode&&this.connect(this.editNode,"change",this._changed),this.inherited("postCreate",arguments)},_focused:function(t){e.addClass(this.iframe||this.domNode,"dijitInputFieldFocused"),this._changed(t)},_blurred:function(t){e.removeClass(this.iframe||this.domNode,"dijitInputFieldFocused"),this._changed(t,!0)},_onIframeBlur:function(){this.iframe.contentDocument.title=this._iframeEditTitle},_onKeyPress:function(t){if(t.keyCode!=e.keys.TAB||t.shiftKey||t.ctrlKey||t.altKey||!this.iframe){if(t.keyCode==e.keys.ENTER)t.stopPropagation();else if(this.inherited("_onKeyPress",arguments)&&this.iframe){var i=document.createEvent("KeyEvents");i.initKeyEvent("keypress",!0,!0,null,t.ctrlKey,t.altKey,t.shiftKey,t.metaKey,t.keyCode,t.charCode),this.iframe.dispatchEvent(i)}}else this.iframe.contentDocument.title=this._iframeFocusTitle,this.iframe.focus(),e.stopEvent(t);this._changing()},_changing:function(t){setTimeout(e.hitch(this,"_changed",t,!1),1)},_changed:function(e,t){this.iframe&&"on"!=this.iframe.contentDocument.designMode&&(this.iframe.contentDocument.designMode="on"),this.setValue(null,t)}}))}});