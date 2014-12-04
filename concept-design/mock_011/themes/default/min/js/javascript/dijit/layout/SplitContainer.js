dojo._hasResource["dijit.layout.SplitContainer"]||(dojo._hasResource["dijit.layout.SplitContainer"]=!0,dojo.provide("dijit.layout.SplitContainer"),dojo.require("dojo.cookie"),dojo.require("dijit.layout._LayoutWidget"),dojo.declare("dijit.layout.SplitContainer",dijit.layout._LayoutWidget,{activeSizing:!1,sizerWidth:7,orientation:"horizontal",persist:!0,postMixInProperties:function(){this.inherited("postMixInProperties",arguments),this.isHorizontal="horizontal"==this.orientation},postCreate:function(){if(this.inherited("postCreate",arguments),this.sizers=[],dojo.addClass(this.domNode,"dijitSplitContainer"),dojo.isMozilla&&(this.domNode.style.overflow="-moz-scrollbars-none"),"object"==typeof this.sizerWidth)try{this.sizerWidth=parseInt(this.sizerWidth.toString())}catch(i){this.sizerWidth=7}var t=this.virtualSizer=document.createElement("div");t.style.position="relative",t.style.zIndex=10,t.className=this.isHorizontal?"dijitSplitContainerVirtualSizerH":"dijitSplitContainerVirtualSizerV",this.domNode.appendChild(t),dojo.setSelectable(t,!1)},startup:function(){this._started||(dojo.forEach(this.getChildren(),function(i,t,e){this._injectChild(i),t<e.length-1&&this._addSizer()},this),this.persist&&this._restoreState(),this.inherited("startup",arguments),this._started=!0)},_injectChild:function(i){i.domNode.style.position="absolute",dojo.addClass(i.domNode,"dijitSplitPane")},_addSizer:function(){var i=this.sizers.length,t=this.sizers[i]=document.createElement("div");t.className=this.isHorizontal?"dijitSplitContainerSizerH":"dijitSplitContainerSizerV";var e=document.createElement("div");e.className="thumb",t.appendChild(e);var s=this,o=function(){var t=i;return function(i){s.beginSizing(i,t)}}();dojo.connect(t,"onmousedown",o),this.domNode.appendChild(t),dojo.setSelectable(t,!1)},removeChild:function(i){if(this.sizers.length&&-1!=dojo.indexOf(this.getChildren(),i)){var t=this.sizers.length-1;dojo._destroyElement(this.sizers[t]),this.sizers.length--}this.inherited("removeChild",arguments),this._started&&this.layout()},addChild:function(i){if(this.inherited("addChild",arguments),this._started){this._injectChild(i);var t=this.getChildren();t.length>1&&this._addSizer(),this.layout()}},layout:function(){this.paneWidth=this._contentBox.w,this.paneHeight=this._contentBox.h;var i=this.getChildren();if(i.length){var t=this.isHorizontal?this.paneWidth:this.paneHeight;i.length>1&&(t-=this.sizerWidth*(i.length-1));var e=0;dojo.forEach(i,function(i){e+=i.sizeShare});var s=t/e,o=0;dojo.forEach(i.slice(0,i.length-1),function(i){var t=Math.round(s*i.sizeShare);i.sizeActual=t,o+=t}),i[i.length-1].sizeActual=t-o,this._checkSizes();var n=0,h=i[0].sizeActual;this._movePanel(i[0],n,h),i[0].position=n,n+=h,this.sizers&&dojo.some(i.slice(1),function(i,t){return this.sizers[t]?(this._moveSlider(this.sizers[t],n,this.sizerWidth),this.sizers[t].position=n,n+=this.sizerWidth,h=i.sizeActual,this._movePanel(i,n,h),i.position=n,n+=h,void 0):!0},this)}},_movePanel:function(i,t,e){if(this.isHorizontal){i.domNode.style.left=t+"px",i.domNode.style.top=0;var s={w:e,h:this.paneHeight};i.resize?i.resize(s):dojo.marginBox(i.domNode,s)}else{i.domNode.style.left=0,i.domNode.style.top=t+"px";var s={w:this.paneWidth,h:e};i.resize?i.resize(s):dojo.marginBox(i.domNode,s)}},_moveSlider:function(i,t,e){this.isHorizontal?(i.style.left=t+"px",i.style.top=0,dojo.marginBox(i,{w:e,h:this.paneHeight})):(i.style.left=0,i.style.top=t+"px",dojo.marginBox(i,{w:this.paneWidth,h:e}))},_growPane:function(i,t){return i>0&&t.sizeActual>t.sizeMin&&(t.sizeActual-t.sizeMin>i?(t.sizeActual=t.sizeActual-i,i=0):(i-=t.sizeActual-t.sizeMin,t.sizeActual=t.sizeMin)),i},_checkSizes:function(){var i=0,t=0,e=this.getChildren();if(dojo.forEach(e,function(e){t+=e.sizeActual,i+=e.sizeMin}),t>=i){var s=0;if(dojo.forEach(e,function(i){i.sizeActual<i.sizeMin&&(s+=i.sizeMin-i.sizeActual,i.sizeActual=i.sizeMin)}),s>0){var o=this.isDraggingLeft?e.reverse():e;dojo.forEach(o,function(i){s=this._growPane(s,i)},this)}}else dojo.forEach(e,function(e){e.sizeActual=Math.round(t*(e.sizeMin/i))})},beginSizing:function(i,t){var e=this.getChildren();if(this.paneBefore=e[t],this.paneAfter=e[t+1],this.isSizing=!0,this.sizingSplitter=this.sizers[t],this.cover)this.cover.style.zIndex=1;else{this.cover=dojo.doc.createElement("div"),this.domNode.appendChild(this.cover);var s=this.cover.style;s.position="absolute",s.zIndex=1,s.top=0,s.left=0,s.width="100%",s.height="100%"}if(this.sizingSplitter.style.zIndex=2,this.originPos=dojo.coords(e[0].domNode,!0),this.isHorizontal){var o=i.layerX?i.layerX:i.offsetX,n=i.pageX;this.originPos=this.originPos.x}else{var o=i.layerY?i.layerY:i.offsetY,n=i.pageY;this.originPos=this.originPos.y}this.startPoint=this.lastPoint=n,this.screenToClientOffset=n-o,this.dragOffset=this.lastPoint-this.paneBefore.sizeActual-this.originPos-this.paneBefore.position,this.activeSizing||this._showSizingLine(),this._connects=[],this._connects.push(dojo.connect(document.documentElement,"onmousemove",this,"changeSizing")),this._connects.push(dojo.connect(document.documentElement,"onmouseup",this,"endSizing")),dojo.stopEvent(i)},changeSizing:function(i){this.isSizing&&(this.lastPoint=this.isHorizontal?i.pageX:i.pageY,this.movePoint(),this.activeSizing?this._updateSize():this._moveSizingLine(),dojo.stopEvent(i))},endSizing:function(){this.isSizing&&(this.cover&&(this.cover.style.zIndex=-1),this.activeSizing||this._hideSizingLine(),this._updateSize(),this.isSizing=!1,this.persist&&this._saveState(this),dojo.forEach(this._connects,dojo.disconnect))},movePoint:function(){var i=this.lastPoint-this.screenToClientOffset,t=i-this.dragOffset;t=this.legaliseSplitPoint(t),i=t+this.dragOffset,this.lastPoint=i+this.screenToClientOffset},legaliseSplitPoint:function(i){if(i+=this.sizingSplitter.position,this.isDraggingLeft=!!(i>0),!this.activeSizing){var t=this.paneBefore.position+this.paneBefore.sizeMin;t>i&&(i=t);var e=this.paneAfter.position+(this.paneAfter.sizeActual-(this.sizerWidth+this.paneAfter.sizeMin));i>e&&(i=e)}return i-=this.sizingSplitter.position,this._checkSizes(),i},_updateSize:function(){var i=this.lastPoint-this.dragOffset-this.originPos,t=this.paneBefore.position,e=this.paneAfter.position+this.paneAfter.sizeActual;this.paneBefore.sizeActual=i-t,this.paneAfter.position=i+this.sizerWidth,this.paneAfter.sizeActual=e-this.paneAfter.position,dojo.forEach(this.getChildren(),function(i){i.sizeShare=i.sizeActual}),this._started&&this.layout()},_showSizingLine:function(){this._moveSizingLine(),dojo.marginBox(this.virtualSizer,this.isHorizontal?{w:this.sizerWidth,h:this.paneHeight}:{w:this.paneWidth,h:this.sizerWidth}),this.virtualSizer.style.display="block"},_hideSizingLine:function(){this.virtualSizer.style.display="none"},_moveSizingLine:function(){var i=this.lastPoint-this.startPoint+this.sizingSplitter.position;dojo.style(this.virtualSizer,this.isHorizontal?"left":"top",i+"px")},_getCookieName:function(i){return this.id+"_"+i},_restoreState:function(){dojo.forEach(this.getChildren(),function(i,t){var e=this._getCookieName(t),s=dojo.cookie(e);if(s){var o=parseInt(s);"number"==typeof o&&(i.sizeShare=o)}},this)},_saveState:function(){dojo.forEach(this.getChildren(),function(i,t){dojo.cookie(this._getCookieName(t),i.sizeShare)},this)}}),dojo.extend(dijit._Widget,{sizeMin:10,sizeShare:10}));