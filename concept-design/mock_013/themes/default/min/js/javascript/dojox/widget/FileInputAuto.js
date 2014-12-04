dojo._hasResource["dojox.widget.FileInputAuto"]||(dojo._hasResource["dojox.widget.FileInputAuto"]=!0,dojo.provide("dojox.widget.FileInputAuto"),dojo.require("dojox.widget.FileInput"),dojo.require("dojo.io.iframe"),dojo.declare("dojox.widget.FileInputAuto",dojox.widget.FileInput,{url:"",blurDelay:2e3,duration:500,uploadMessage:"Uploading ...",_sent:!1,templateString:'<div class="dijitFileInput">\r\n	<input class="dijitFileInputReal" type="file" dojoAttachPoint="fileInput" />\r\n	<div class="dijitFakeInput" dojoAttachPoint="fakeNodeHolder">\r\n		<input class="dijitFileInputVisible" type="text" dojoAttachPoint="focusNode, inputNode" />\r\n		<span class="dijitInline dijitFileInputText" dojoAttachPoint="titleNode">${label}</span>\r\n		<span class="dijitInline dijitFileInputButton" dojoAttachPoint="cancelNode" dojoAttachEvent="onclick:_onClick">${cancelText}</span>\r\n	</div>\r\n	<div class="dijitProgressOverlay" dojoAttachPoint="overlay">&nbsp;</div>\r\n</div>\r\n',startup:function(){this._blurListener=dojo.connect(this.fileInput,"onblur",this,"_onBlur"),this._focusListener=dojo.connect(this.fileInput,"onfocus",this,"_onFocus"),this.inherited("startup",arguments)},_onFocus:function(){this._blurTimer&&clearTimeout(this._blurTimer)},_onBlur:function(){this._blurTimer&&clearTimeout(this._blurTimer),this._sent||(this._blurTimer=setTimeout(dojo.hitch(this,"_sendFile"),this.blurDelay))},setMessage:function(t){dojo.isIE||(this.overlay.innerHTML=t)},_sendFile:function(){if(this.fileInput.value&&!this._sent){dojo.style(this.fakeNodeHolder,"display","none"),dojo.style(this.overlay,"opacity","0"),dojo.style(this.overlay,"display","block"),this.setMessage(this.uploadMessage),dojo.fadeIn({node:this.overlay,duration:this.duration}).play();var t=document.createElement("form");t.setAttribute("enctype","multipart/form-data");{dojo.clone(this.fileInput)}t.appendChild(this.fileInput),dojo.body().appendChild(t),dojo.io.iframe.send({url:this.url+"?name="+this.name,form:t,handleAs:"text",handle:dojo.hitch(this,"_handleSend")})}},_handleSend:function(t,i){dojo.isIE||(this.overlay.innerHTML=""),this._sent=!0,dojo.style(this.overlay,"opacity","0"),dojo.style(this.overlay,"border","none"),dojo.style(this.overlay,"background","none"),this.overlay.style.backgroundImage="none",this.fileInput.style.display="none",this.fakeNodeHolder.style.display="none",dojo.fadeIn({node:this.overlay,duration:this.duration}).play(250),dojo.disconnect(this._blurListener),dojo.disconnect(this._focusListener),this.onComplete(t,i,this)},_onClick:function(){this._blurTimer&&clearTimeout(this._blurTimer),dojo.disconnect(this._blurListener),dojo.disconnect(this._focusListener),this.inherited("_onClick",arguments),this._blurListener=dojo.connect(this.fileInput,"onblur",this,"_onBlur"),this._focusListener=dojo.connect(this.fileInput,"onfocus",this,"_onFocus")},onComplete:function(){}}),dojo.declare("dojox.widget.FileInputBlind",dojox.widget.FileInputAuto,{startup:function(){this.inherited("startup",arguments),this._off=dojo.style(this.inputNode,"width"),this.inputNode.style.display="none",this._fixPosition()},_fixPosition:function(){dojo.isIE?dojo.style(this.fileInput,"width","1px"):dojo.style(this.fileInput,"left","-"+this._off+"px")},_onClick:function(){this.inherited("_onClick",arguments),this._fixPosition()}}));