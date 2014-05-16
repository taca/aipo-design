if(!dojo._hasResource["dijit._editor.RichText"]){if(dojo._hasResource["dijit._editor.RichText"]=!0,dojo.provide("dijit._editor.RichText"),dojo.require("dijit._Widget"),dojo.require("dijit._editor.selection"),dojo.require("dojo.i18n"),dojo.requireLocalization("dijit","Textarea",null,"ROOT"),!djConfig.useXDomain||djConfig.allowXdRichTextSave)if(dojo._postLoad)!function(){var e=dojo.doc.createElement("textarea");e.id="dijit._editor.RichText.savedContent";var t=e.style;t.display="none",t.position="absolute",t.top="-100px",t.left="-100px",t.height="3px",t.width="3px",dojo.body().appendChild(e)}();else try{dojo.doc.write('<textarea id="dijit._editor.RichText.savedContent" style="display:none;position:absolute;top:-100px;left:-100px;height:3px;width:3px;overflow:hidden;"></textarea>')}catch(e){}dojo.declare("dijit._editor.RichText",[dijit._Widget],{constructor:function(){this.contentPreFilters=[],this.contentPostFilters=[],this.contentDomPreFilters=[],this.contentDomPostFilters=[],this.editingAreaStyleSheets=[],this._keyHandlers={},this.contentPreFilters.push(dojo.hitch(this,"_preFixUrlAttributes")),dojo.isMoz&&this.contentPreFilters.push(this._fixContentForMoz),this.onLoadDeferred=new dojo.Deferred},inheritWidth:!1,focusOnLoad:!1,name:"",styleSheets:"",_content:"",height:"300px",minHeight:"1em",isClosed:!0,isLoaded:!1,_SEPARATOR:"@@**%%__RICHTEXTBOUNDRY__%%**@@",onLoadDeferred:null,postCreate:function(){dojo.publish("dijit._editor.RichText::init",[this]),this.open(),this.setupDefaultShortcuts()},setupDefaultShortcuts:function(){var e=this.KEY_CTRL,t=function(e,t){return 1==arguments.length?function(){this.execCommand(e)}:function(){this.execCommand(e,t)}};this.addKeyHandler("b",e,t("bold")),this.addKeyHandler("i",e,t("italic")),this.addKeyHandler("u",e,t("underline")),this.addKeyHandler("a",e,t("selectall")),this.addKeyHandler("s",e,function(){this.save(!0)}),this.addKeyHandler("1",e,t("formatblock","h1")),this.addKeyHandler("2",e,t("formatblock","h2")),this.addKeyHandler("3",e,t("formatblock","h3")),this.addKeyHandler("4",e,t("formatblock","h4")),this.addKeyHandler("\\",e,t("insertunorderedlist")),dojo.isIE||this.addKeyHandler("Z",e,t("redo"))},events:["onKeyPress","onKeyDown","onKeyUp","onClick"],captureEvents:[],_editorCommandsLocalized:!1,_localizeEditorCommands:function(){if(!this._editorCommandsLocalized){this._editorCommandsLocalized=!0;for(var e,t=["p","pre","address","h1","h2","h3","h4","h5","h6","ol","div","ul"],i="",o=0;e=t[o++];)i+="l"!=e.charAt(1)?"<"+e+"><span>content</span></"+e+">":"<"+e+"><li>content</li></"+e+">";var s=document.createElement("div");s.style.position="absolute",s.style.left="-2000px",s.style.top="-2000px",document.body.appendChild(s),s.innerHTML=i;for(var n=s.firstChild;n;){dijit._editor.selection.selectElement(n.firstChild),dojo.withGlobal(this.window,"selectElement",dijit._editor.selection,[n.firstChild]);var d=n.tagName.toLowerCase();this._local2NativeFormatNames[d]=document.queryCommandValue("formatblock"),this._native2LocalFormatNames[this._local2NativeFormatNames[d]]=d,n=n.nextSibling}document.body.removeChild(s)}},open:function(element){if((!this.onLoadDeferred||this.onLoadDeferred.fired>=0)&&(this.onLoadDeferred=new dojo.Deferred),this.isClosed||this.close(),dojo.publish("dijit._editor.RichText::open",[this]),this._content="",1==arguments.length&&element.nodeName&&(this.domNode=element),this.domNode.nodeName&&"textarea"==this.domNode.nodeName.toLowerCase()){this.textarea=this.domNode,this.name=this.textarea.name;var html=this._preFilterContent(this.textarea.value);this.domNode=dojo.doc.createElement("div"),this.domNode.setAttribute("widgetId",this.id),this.textarea.removeAttribute("widgetId"),this.domNode.cssText=this.textarea.cssText,this.domNode.className+=" "+this.textarea.className,dojo.place(this.domNode,this.textarea,"before");var tmpFunc=dojo.hitch(this,function(){with(this.textarea.style)display="block",position="absolute",left=top="-1000px",dojo.isIE&&(this.__overflow=overflow,overflow="hidden")});dojo.isIE?setTimeout(tmpFunc,10):tmpFunc()}else{var html=this._preFilterContent(this.getNodeChildrenHtml(this.domNode));this.domNode.innerHTML=""}""==html&&(html="&nbsp;");var content=dojo.contentBox(this.domNode);if(this._oldHeight=content.h,this._oldWidth=content.w,this.savedContent=html,this.domNode.nodeName&&"LI"==this.domNode.nodeName&&(this.domNode.innerHTML=" <br>"),this.editingArea=dojo.doc.createElement("div"),this.domNode.appendChild(this.editingArea),""!=this.name&&(!djConfig.useXDomain||djConfig.allowXdRichTextSave)){var saveTextarea=dojo.byId("dijit._editor.RichText.savedContent");if(""!=saveTextarea.value)for(var dat,datas=saveTextarea.value.split(this._SEPARATOR),i=0;dat=datas[i++];){var data=dat.split(":");if(data[0]==this.name){html=data[1],datas.splice(i,1);break}}dojo.connect(window,"onbeforeunload",this,"_saveContent")}if(this.isClosed=!1,dojo.isIE||dojo.isSafari||dojo.isOpera){var ifr=this.iframe=dojo.doc.createElement("iframe");ifr.src="javascript:void(0)",this.editorObject=ifr,ifr.style.border="none",ifr.style.width="100%",ifr.frameBorder=0,this.editingArea.appendChild(ifr),this.window=ifr.contentWindow,this.document=this.window.document,this.document.open(),this.document.write(this._getIframeDocTxt(html)),this.document.close(),dojo.isIE>=7?(this.height&&(ifr.style.height=this.height),this.minHeight&&(ifr.style.minHeight=this.minHeight)):ifr.style.height=this.height?this.height:this.minHeight,dojo.isIE&&this._localizeEditorCommands(),this.onLoad()}else this._drawIframe(html);"LI"==this.domNode.nodeName&&(this.domNode.lastChild.style.marginTop="-1.2em"),this.domNode.className+=" RichTextEditable"},_local2NativeFormatNames:{},_native2LocalFormatNames:{},_localizedIframeTitles:null,_getIframeDocTxt:function(e){var t=dojo.getComputedStyle(this.domNode);this.height||dojo.isMoz||(e="<div>"+e+"</div>");var i=[t.fontWeight,t.fontSize,t.fontFamily].join(" "),o=t.lineHeight;return o=o.indexOf("px")>=0?parseFloat(o)/parseFloat(t.fontSize):o.indexOf("em")>=0?parseFloat(o):"1.0",[this.isLeftToRight()?"<html><head>":"<html dir='rtl'><head>",dojo.isMoz?"<title>"+this._localizedIframeTitles.iframeEditTitle+"</title>":"","<style>","body,html {","	background:transparent;","	padding: 0;","	margin: 0;","}","body{","	top:0px; left:0px; right:0px;",this.height||dojo.isOpera?"":"position: fixed;","	font:",i,";","	min-height:",this.minHeight,";","	line-height:",o,"}","p{ margin: 1em 0 !important; }",this.height?"":"body,html{overflow-y:hidden;/*for IE*/} body > div {overflow-x:auto;/*for FF to show vertical scrollbar*/}","li > ul:-moz-first-node, li > ol:-moz-first-node{ padding-top: 1.2em; } ","li{ min-height:1.2em; }","</style>",this._applyEditingAreaStyleSheets(),"</head><body>"+e+"</body></html>"].join("")},_drawIframe:function(e){if(!this.iframe){var t=this.iframe=dojo.doc.createElement("iframe"),i=t.style;i.border="none",i.lineHeight="0",i.verticalAlign="bottom",this.editorObject=this.iframe,this._localizedIframeTitles=dojo.i18n.getLocalization("dijit","Textarea");var o=dojo.query('label[for="'+this.id+'"]');o.length&&(this._localizedIframeTitles.iframeEditTitle=o[0].innerHTML+" "+this._localizedIframeTitles.iframeEditTitle)}if(this.iframe.style.width=this.inheritWidth?this._oldWidth:"100%",this.height?this.iframe.style.height=this.height:this.iframe.height=this._oldHeight,this.textarea)var s=this.srcNodeRef;else{var s=dojo.doc.createElement("div");s.style.display="none",s.innerHTML=e,this.editingArea.appendChild(s)}this.editingArea.appendChild(this.iframe);var n=!1,d=this.iframe.contentDocument;d.open(),d.write(this._getIframeDocTxt(e)),d.close();var r=dojo.hitch(this,function(){if(!n){if(n=!0,this.editNode)dojo._destroyElement(s),this.editNode.innerHTML=e,this.onDisplayChanged();else{try{if(this.iframe.contentWindow?(this.window=this.iframe.contentWindow,this.document=this.iframe.contentWindow.document):this.iframe.contentDocument&&(this.window=this.iframe.contentDocument.window,this.document=this.iframe.contentDocument),!this.document.body)throw"Error"}catch(t){return setTimeout(r,500),n=!1,void 0}dojo._destroyElement(s),this.document.designMode="on",this.onLoad()}this._preDomFilterContent(this.editNode)}});r()},_applyEditingAreaStyleSheets:function(){var e=[];this.styleSheets&&(e=this.styleSheets.split(";"),this.styleSheets=""),e=e.concat(this.editingAreaStyleSheets),this.editingAreaStyleSheets=[];for(var t,i="",o=0;t=e[o++];){var s=new dojo._Url(dojo.global.location,t).toString();this.editingAreaStyleSheets.push(s),i+='<link rel="stylesheet" type="text/css" href="'+s+'"/>'}return i},addStyleSheet:function(uri){var url=uri.toString();if(("."==url.charAt(0)||"/"!=url.charAt(0)&&!uri.host)&&(url=new dojo._Url(dojo.global.location,url).toString()),dojo.indexOf(this.editingAreaStyleSheets,url)>-1)return console.debug("dijit._editor.RichText.addStyleSheet: Style sheet "+url+" is already applied to the editing area!"),void 0;if(this.editingAreaStyleSheets.push(url),this.document.createStyleSheet)this.document.createStyleSheet(url);else{var head=this.document.getElementsByTagName("head")[0],stylesheet=this.document.createElement("link");with(stylesheet)rel="stylesheet",type="text/css",href=url;head.appendChild(stylesheet)}},removeStyleSheet:function(e){var t=e.toString();("."==t.charAt(0)||"/"!=t.charAt(0)&&!e.host)&&(t=new dojo._Url(dojo.global.location,t).toString());var i=dojo.indexOf(this.editingAreaStyleSheets,t);return-1==i?(console.debug("dijit._editor.RichText.removeStyleSheet: Style sheet "+t+" is not applied to the editing area so it can not be removed!"),void 0):(delete this.editingAreaStyleSheets[i],dojo.withGlobal(this.window,"query",dojo,['link:[href="'+t+'"]']).orphan(),void 0)},disabled:!1,_mozSettingProps:["styleWithCSS","insertBrOnReturn"],setDisabled:function(e){dojo.isIE||dojo.isSafari||dojo.isOpera?this.editNode.contentEditable=!e:(e&&(this._mozSettings=[!1,"BR"===this.blockNodeForEnter]),this.document.designMode=e?"off":"on",e||dojo.forEach(this._mozSettingProps,function(e,t){this.document.execCommand(e,!1,this._mozSettings[t])},this)),this.disabled=e},_isResized:function(){return!1},onLoad:function(e){this.isLoaded=!0,this.editNode=this.height||dojo.isMoz?this.document.body:this.document.body.firstChild,this.editNode.contentEditable=!0,this._preDomFilterContent(this.editNode);for(var t,i=this.events.concat(this.captureEvents),o=0;t=i[o++];)this.connect(this.document,t.toLowerCase(),t);if(dojo.isIE)this.editNode.style.zoom=1;else try{this.document.execCommand("styleWithCSS",!1,!1)}catch(s){}this.focusOnLoad&&this.focus(),this.onDisplayChanged(e),this.onLoadDeferred&&this.onLoadDeferred.callback(!0)},onKeyDown:function(e){dojo.isIE?e.keyCode===dojo.keys.BACKSPACE&&"Control"===this.document.selection.type?(dojo.stopEvent(e),this.execCommand("delete")):(65<=e.keyCode&&e.keyCode<=90||e.keyCode>=37&&e.keyCode<=40)&&(e.charCode=e.keyCode,this.onKeyPress(e)):dojo.isMoz&&(e.keyCode!=dojo.keys.TAB||e.shiftKey||e.ctrlKey||e.altKey||!this.iframe?e.keyCode==dojo.keys.TAB&&e.shiftKey&&(this.toolbar&&this.toolbar.focus(),dojo.stopEvent(e)):(this.iframe.contentDocument.title=this._localizedIframeTitles.iframeFocusTitle,this.iframe.focus(),dojo.stopEvent(e)))},onKeyUp:function(){},KEY_CTRL:1,KEY_SHIFT:2,onKeyPress:function(e){var t=e.ctrlKey?this.KEY_CTRL:0|e.shiftKey?this.KEY_SHIFT:0,i=e.keyChar||e.keyCode;if(this._keyHandlers[i])for(var o,s=this._keyHandlers[i],n=0;o=s[n++];)if(t==o.modifiers){o.handler.apply(this,arguments)||e.preventDefault();break}setTimeout(dojo.hitch(this,function(){this.onKeyPressed(e)}),1)},addKeyHandler:function(e,t,i){dojo.isArray(this._keyHandlers[e])||(this._keyHandlers[e]=[]),this._keyHandlers[e].push({modifiers:t||0,handler:i})},onKeyPressed:function(){this.onDisplayChanged()},onClick:function(e){this.onDisplayChanged(e)},_onBlur:function(){var e=this.getValue(!0);e!=this.savedContent&&(this.onChange(e),this.savedContent=e),dojo.isMoz&&this.iframe&&(this.iframe.contentDocument.title=this._localizedIframeTitles.iframeEditTitle)},_initialFocus:!0,_onFocus:function(){dojo.isMoz&&this._initialFocus&&(this._initialFocus=!1,"&nbsp;"==this.editNode.innerHTML.replace(/^\s+|\s+$/g,"")&&this.placeCursorAtStart())},blur:function(){this.iframe?this.window.blur():this.editNode&&this.editNode.blur()},focus:function(){this.iframe&&!dojo.isIE?dijit.focus(this.iframe):this.editNode&&this.editNode.focus?dijit.focus(this.editNode):console.debug("Have no idea how to focus into the editor!")},updateInterval:200,_updateTimer:null,onDisplayChanged:function(){this._updateTimer||(this._updateTimer&&clearTimeout(this._updateTimer),this._updateTimer=setTimeout(dojo.hitch(this,this.onNormalizedDisplayChanged),this.updateInterval))},onNormalizedDisplayChanged:function(){this._updateTimer=null},onChange:function(){},_normalizeCommand:function(e){var t=e.toLowerCase();return"formatblock"==t?dojo.isSafari&&(t="heading"):"hilitecolor"!=t||dojo.isMoz||(t="backcolor"),t},queryCommandAvailable:function(e){function t(e){return{ie:Boolean(e&i),mozilla:Boolean(e&o),safari:Boolean(e&s),safari420:Boolean(e&d),opera:Boolean(e&n)}}var i=1,o=2,s=4,n=8,d=16,r=dojo.isSafari,a=null;switch(e.toLowerCase()){case"bold":case"italic":case"underline":case"subscript":case"superscript":case"fontname":case"fontsize":case"forecolor":case"hilitecolor":case"justifycenter":case"justifyfull":case"justifyleft":case"justifyright":case"delete":case"selectall":a=t(o|i|s|n);break;case"createlink":case"unlink":case"removeformat":case"inserthorizontalrule":case"insertimage":case"insertorderedlist":case"insertunorderedlist":case"indent":case"outdent":case"formatblock":case"inserthtml":case"undo":case"redo":case"strikethrough":a=t(o|i|n|d);break;case"blockdirltr":case"blockdirrtl":case"dirltr":case"dirrtl":case"inlinedirltr":case"inlinedirrtl":a=t(i);break;case"cut":case"copy":case"paste":a=t(i|o|d);break;case"inserttable":a=t(o|i);break;case"insertcell":case"insertcol":case"insertrow":case"deletecells":case"deletecols":case"deleterows":case"mergecells":case"splitcell":a=t(i|o);break;default:return!1}return dojo.isIE&&a.ie||dojo.isMoz&&a.mozilla||dojo.isSafari&&a.safari||r&&a.safari420||dojo.isOpera&&a.opera},execCommand:function(e,t){var i;if(this.focus(),e=this._normalizeCommand(e),void 0!=t){if("heading"==e)throw new Error("unimplemented");"formatblock"==e&&dojo.isIE&&(t="<"+t+">")}if("inserthtml"==e)if(t=this._preFilterContent(t),dojo.isIE){var o=this.document.selection.createRange();o.pasteHTML(t),o.select(),i=!0}else dojo.isMoz&&!t.length?(dojo.withGlobal(this.window,"remove",dijit._editor.selection),i=!0):i=this.document.execCommand(e,!1,t);else if("unlink"==e&&this.queryCommandEnabled("unlink")&&(dojo.isMoz||dojo.isSafari)){var s=(this.window.getSelection(),dojo.withGlobal(this.window,"getAncestorElement",dijit._editor.selection,["a"]));dojo.withGlobal(this.window,"selectElement",dijit._editor.selection,[s]),i=this.document.execCommand("unlink",!1,null)}else"hilitecolor"==e&&dojo.isMoz?(this.document.execCommand("styleWithCSS",!1,!0),i=this.document.execCommand(e,!1,t),this.document.execCommand("styleWithCSS",!1,!1)):!dojo.isIE||"backcolor"!=e&&"forecolor"!=e?(t=arguments.length>1?t:null,(t||"createlink"!=e)&&(i=this.document.execCommand(e,!1,t))):(t=arguments.length>1?t:null,i=this.document.execCommand(e,!1,t));return this.onDisplayChanged(),i},queryCommandEnabled:function(e){if(e=this._normalizeCommand(e),dojo.isMoz||dojo.isSafari){if("unlink"==e)return dojo.withGlobal(this.window,"hasAncestorElement",dijit._editor.selection,["a"]);if("inserttable"==e)return!0}if(dojo.isSafari)if("copy"==e)e="cut";else if("paste"==e)return!0;var t=dojo.isIE?this.document.selection.createRange():this.document;return t.queryCommandEnabled(e)},queryCommandState:function(e){return e=this._normalizeCommand(e),this.document.queryCommandState(e)},queryCommandValue:function(e){return e=this._normalizeCommand(e),dojo.isIE&&"formatblock"==e?this._local2NativeFormatNames[this.document.queryCommandValue(e)]:this.document.queryCommandValue(e)},placeCursorAtStart:function(){this.focus();var e=!1;if(dojo.isMoz)for(var t=this.editNode.firstChild;t;){if(3==t.nodeType){if(t.nodeValue.replace(/^\s+|\s+$/g,"").length>0){e=!0,dojo.withGlobal(this.window,"selectElement",dijit._editor.selection,[t]);break}}else if(1==t.nodeType){e=!0,dojo.withGlobal(this.window,"selectElementChildren",dijit._editor.selection,[t]);break}t=t.nextSibling}else e=!0,dojo.withGlobal(this.window,"selectElementChildren",dijit._editor.selection,[this.editNode]);e&&dojo.withGlobal(this.window,"collapse",dijit._editor.selection,[!0])},placeCursorAtEnd:function(){this.focus();var e=!1;if(dojo.isMoz)for(var t=this.editNode.lastChild;t;){if(3==t.nodeType){if(t.nodeValue.replace(/^\s+|\s+$/g,"").length>0){e=!0,dojo.withGlobal(this.window,"selectElement",dijit._editor.selection,[t]);break}}else if(1==t.nodeType){e=!0,t.lastChild?dojo.withGlobal(this.window,"selectElement",dijit._editor.selection,[t.lastChild]):dojo.withGlobal(this.window,"selectElement",dijit._editor.selection,[t]);break}t=t.previousSibling}else e=!0,dojo.withGlobal(this.window,"selectElementChildren",dijit._editor.selection,[this.editNode]);e&&dojo.withGlobal(this.window,"collapse",dijit._editor.selection,[!1])},getValue:function(e){return!this.textarea||!this.isClosed&&this.isLoaded?this._postFilterContent(null,e):this.textarea.value},setValue:function(e){!this.textarea||!this.isClosed&&this.isLoaded?(e=this._preFilterContent(e),this.isClosed?(this.domNode.innerHTML=e,this._preDomFilterContent(this.domNode)):(this.editNode.innerHTML=e,this._preDomFilterContent(this.editNode))):this.textarea.value=e},replaceValue:function(e){this.isClosed?this.setValue(e):this.window&&this.window.getSelection&&!dojo.isMoz?this.setValue(e):this.window&&this.window.getSelection?(e=this._preFilterContent(e),this.execCommand("selectall"),dojo.isMoz&&!e&&(e="&nbsp;"),this.execCommand("inserthtml",e),this._preDomFilterContent(this.editNode)):this.document&&this.document.selection&&this.setValue(e)},_preFilterContent:function(e){var t=e;return dojo.forEach(this.contentPreFilters,function(e){e&&(t=e(t))}),t},_preDomFilterContent:function(e){e=e||this.editNode,dojo.forEach(this.contentDomPreFilters,function(t){t&&dojo.isFunction(t)&&t(e)},this)},_postFilterContent:function(e,t){e=e||this.editNode,this.contentDomPostFilters.length&&(t&&e.cloneNode&&(e=e.cloneNode(!0)),dojo.forEach(this.contentDomPostFilters,function(t){e=t(e)}));var i=this.getNodeChildrenHtml(e);return i.replace(/^(?:\s|\xA0)+/g,"").replace(/(?:\s|\xA0)+$/g,"").length||(i=""),dojo.forEach(this.contentPostFilters,function(e){i=e(i)}),i},_saveContent:function(){var e=dojo.byId("dijit._editor.RichText.savedContent");e.value+=this._SEPARATOR+this.name+":"+this.getValue()},escapeXml:function(e,t){return e=e.replace(/&/gm,"&amp;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;").replace(/"/gm,"&quot;"),t||(e=e.replace(/'/gm,"&#39;")),e},getNodeHtml:function(e){switch(e.nodeType){case 1:var t="<"+e.tagName.toLowerCase();dojo.isMoz&&("_moz"==e.getAttribute("type")&&e.removeAttribute("type"),void 0!=e.getAttribute("_moz_dirty")&&e.removeAttribute("_moz_dirty"));var i=[];if(dojo.isIE){var o=e.outerHTML;o=o.substr(0,o.indexOf(">")),o=o.replace(/(?:['"])[^"']*\1/g,"");for(var s,n,d=/([^\s=]+)=/g;void 0!=(s=d.exec(o));)if(n=s[1],"_dj"!=n.substr(0,3)){if(("src"==n||"href"==n)&&e.getAttribute("_djrealurl")){i.push([n,e.getAttribute("_djrealurl")]);continue}"class"==n?i.push([n,e.className]):i.push([n,e.getAttribute(n)])}}else for(var r,a=0,l=e.attributes;r=l[a++];)if("_dj"!=r.name.substr(0,3)){var h=r.value;("src"==r.name||"href"==r.name)&&e.getAttribute("_djrealurl")&&(h=e.getAttribute("_djrealurl")),i.push([r.name,h])}for(i.sort(function(e,t){return e[0]<t[0]?-1:e[0]==t[0]?0:1}),a=0;r=i[a++];)t+=" "+r[0]+'="'+r[1]+'"';t+=e.childNodes.length?">"+this.getNodeChildrenHtml(e)+"</"+e.tagName.toLowerCase()+">":" />";break;case 3:var t=this.escapeXml(e.nodeValue,!0);break;case 8:var t="<!--"+this.escapeXml(e.nodeValue,!0)+"-->";break;default:var t="Element not recognized - Type: "+e.nodeType+" Name: "+e.nodeName}return t},getNodeChildrenHtml:function(e){var t="";if(!e)return t;for(var i,o=e.childNodes||e,s=0;i=o[s++];)t+=this.getNodeHtml(i);return t},close:function(save,force){if(this.isClosed)return!1;arguments.length||(save=!0),this._content=this.getValue();var changed=this.savedContent!=this._content;if(this.interval&&clearInterval(this.interval),this.textarea){with(this.textarea.style)position="",left=top="",dojo.isIE&&(overflow=this.__overflow,this.__overflow=null);this.textarea.value=save?this._content:this.savedContent,dojo._destroyElement(this.domNode),this.domNode=this.textarea}else this.domNode.innerHTML=save?this._content:this.savedContent;return dojo.removeClass(this.domNode,"RichTextEditable"),this.isClosed=!0,this.isLoaded=!1,delete this.editNode,this.window&&this.window._frameElement&&(this.window._frameElement=null),this.window=null,this.document=null,this.editingArea=null,this.editorObject=null,changed},destroyRendering:function(){},destroy:function(){this.destroyRendering(),this.isClosed||this.close(!1),this.inherited("destroy",arguments)},_fixContentForMoz:function(e){return e=e.replace(/<(\/)?strong([ \>])/gi,"<$1b$2"),e=e.replace(/<(\/)?em([ \>])/gi,"<$1i$2")},_srcInImgRegex:/(?:(<img(?=\s).*?\ssrc=)("|')(.*?)\2)|(?:(<img\s.*?src=)([^"'][^ >]+))/gi,_hrefInARegex:/(?:(<a(?=\s).*?\shref=)("|')(.*?)\2)|(?:(<a\s.*?href=)([^"'][^ >]+))/gi,_preFixUrlAttributes:function(e){return e=e.replace(this._hrefInARegex,"$1$4$2$3$5$2 _djrealurl=$2$3$5$2"),e=e.replace(this._srcInImgRegex,"$1$4$2$3$5$2 _djrealurl=$2$3$5$2")}})}