dojo._hasResource["dijit.TitlePane"]||(dojo._hasResource["dijit.TitlePane"]=!0,dojo.provide("dijit.TitlePane"),dojo.require("dojo.fx"),dojo.require("dijit._Templated"),dojo.require("dijit.layout.ContentPane"),dojo.declare("dijit.TitlePane",[dijit.layout.ContentPane,dijit._Templated],{title:"",open:!0,duration:250,baseClass:"dijitTitlePane",templateString:'<div class="dijitTitlePane">\r\n	<div dojoAttachEvent="onclick:toggle,onkeypress: _onTitleKey,onfocus:_handleFocus,onblur:_handleFocus" tabindex="0"\r\n			waiRole="button" class="dijitTitlePaneTitle" dojoAttachPoint="focusNode">\r\n		<div dojoAttachPoint="arrowNode" class="dijitInline dijitArrowNode"><span dojoAttachPoint="arrowNodeInner" class="dijitArrowNodeInner"></span></div>\r\n		<div dojoAttachPoint="titleNode" class="dijitTitlePaneTextNode"></div>\r\n	</div>\r\n	<div class="dijitTitlePaneContentOuter" dojoAttachPoint="hideNode">\r\n		<div class="dijitReset" dojoAttachPoint="wipeNode">\r\n			<div class="dijitTitlePaneContentInner" dojoAttachPoint="containerNode" waiRole="region" tabindex="-1">\r\n				<!-- nested divs because wipeIn()/wipeOut() doesn\'t work right on node w/padding etc.  Put padding on inner div. -->\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>\r\n',postCreate:function(){this.setTitle(this.title),this.open||(this.hideNode.style.display=this.wipeNode.style.display="none"),this._setCss(),dojo.setSelectable(this.titleNode,!1),this.inherited("postCreate",arguments),dijit.setWaiState(this.containerNode,"labelledby",this.titleNode.id),dijit.setWaiState(this.focusNode,"haspopup","true");{var e=this.hideNode;this.wipeNode}this._wipeIn=dojo.fx.wipeIn({node:this.wipeNode,duration:this.duration,beforeBegin:function(){e.style.display=""}}),this._wipeOut=dojo.fx.wipeOut({node:this.wipeNode,duration:this.duration,onEnd:function(){e.style.display="none"}})},setContent:function(){"playing"==this._wipeOut.status()?this.inherited("setContent",arguments):("playing"==this._wipeIn.status()&&this._wipeIn.stop(),dojo.marginBox(this.wipeNode,{h:dojo.marginBox(this.wipeNode).h}),this.inherited("setContent",arguments),this._wipeIn.play())},toggle:function(){dojo.forEach([this._wipeIn,this._wipeOut],function(e){"playing"==e.status()&&e.stop()}),this[this.open?"_wipeOut":"_wipeIn"].play(),this.open=!this.open,this._loadCheck(),this._setCss()},_setCss:function(){var e=["dijitClosed","dijitOpen"],t=this.open;dojo.removeClass(this.focusNode,e[!t+0]),this.focusNode.className+=" "+e[t+0],this.arrowNodeInner.innerHTML=this.open?"-":"+"},_onTitleKey:function(e){e.keyCode==dojo.keys.ENTER||e.charCode==dojo.keys.SPACE?this.toggle():e.keyCode==dojo.keys.DOWN_ARROW&&this.open&&(this.containerNode.focus(),e.preventDefault())},_handleFocus:function(e){dojo["focus"==e.type?"addClass":"removeClass"](this.focusNode,this.baseClass+"Focused")},setTitle:function(e){this.titleNode.innerHTML=e}}));