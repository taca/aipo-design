dojo._hasResource["dojox.widget.ColorPicker"]||(dojo._hasResource["dojox.widget.ColorPicker"]=!0,dojo.provide("dojox.widget.ColorPicker"),dojo.experimental("dojox.widget.ColorPicker"),dojo.require("dijit.form._FormWidget"),dojo.require("dojo.dnd.move"),dojo.require("dojo.fx"),dojo.declare("dojox.widget.ColorPicker",dijit.form._FormWidget,{showRgb:!0,showHsv:!0,showHex:!0,webSafe:!0,animatePoint:!0,slideDuration:250,_underlay:dojo.moduleUrl("dojox.widget","ColorPicker/images/underlay.png"),templateString:'<div class="dojoxColorPicker">\r\n	<div class="dojoxColorPickerBox">\r\n		<div dojoAttachPoint="cursorNode" class="dojoxColorPickerPoint"></div>\r\n		<img dojoAttachPoint="colorUnderlay" dojoAttachEvent="onclick: _setPoint" class="dojoxColorPickerUnderlay" src="${_underlay}">\r\n	</div>\r\n	<div class="dojoxHuePicker">\r\n		<div dojoAttachPoint="hueCursorNode" class="dojoxHuePickerPoint"></div>\r\n		<div dojoAttachPoint="hueNode" class="dojoxHuePickerUnderlay" dojoAttachEvent="onclick: _setHuePoint"></div>\r\n	</div>\r\n	<div dojoAttachPoint="previewNode" class="dojoxColorPickerPreview"></div>\r\n	<div dojoAttachPoint="safePreviewNode" class="dojoxColorPickerWebSafePreview"></div>\r\n	<div class="dojoxColorPickerOptional">\r\n		<div class="dijitInline dojoxColorPickerRgb" dojoAttachPoint="rgbNode">\r\n			<table>\r\n			<tr><td>r</td><td><input dojoAttachPoint="Rval" size="1"></td></tr>\r\n			<tr><td>g</td><td><input dojoAttachPoint="Gval" size="1"></td></tr>\r\n			<tr><td>b</td><td><input dojoAttachPoint="Bval" size="1"></td></tr>\r\n			</table>\r\n		</div>\r\n		<div class="dijitInline dojoxColorPickerHsv" dojoAttachPoint="hsvNode">\r\n			<table>\r\n			<tr><td>h</td><td><input dojoAttachPoint="Hval"size="1"> &deg;</td></tr>\r\n			<tr><td>s</td><td><input dojoAttachPoint="Sval" size="1"> %</td></tr>\r\n			<tr><td>v</td><td><input dojoAttachPoint="Vval" size="1"> %</td></tr>\r\n			</table>\r\n		</div>\r\n		<div class="dojoxColorPickerHex" dojoAttachPoint="hexNode">	\r\n			hex: <input dojoAttachPoint="hexCode, focusNode" size="6" class="dojoxColorPickerHexCode">\r\n		</div>\r\n	</div>\r\n</div>\r\n',postCreate:function(){dojo.isIE&&dojo.isIE<7&&(this.colorUnderlay.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+this._underlay+"', sizingMethod='scale')",this.colorUnderlay.src=dojo.moduleUrl("dojox.widget","FisheyeList/blank.gif").toString()),this.showRgb||(this.rgbNode.style.display="none"),this.showHsv||(this.hsvNode.style.display="none"),this.showHex||(this.hexNode.style.display="none"),this.webSafe||(this.safePreviewNode.style.display="none")},startup:function(){this._offset=0,this._mover=new dojo.dnd.Moveable(this.cursorNode,{mover:dojo.dnd.boxConstrainedMover({t:0,l:0,w:150,h:150})}),this._hueMover=new dojo.dnd.Moveable(this.hueCursorNode,{mover:dojo.dnd.boxConstrainedMover({t:0,l:0,w:0,h:150})}),dojo.subscribe("/dnd/move/stop",dojo.hitch(this,"_clearTimer")),dojo.subscribe("/dnd/move/start",dojo.hitch(this,"_setTimer")),this._sc=1/dojo.coords(this.colorUnderlay).w,this._hueSc=255/(dojo.coords(this.hueNode).h+this._offset),this._updateColor()},_setTimer:function(){this._timer=setInterval(dojo.hitch(this,"_updateColor"),45)},_clearTimer:function(){clearInterval(this._timer),this.onChange(this.value)},_setHue:function(o){var t=dojo.colorFromArray(this._hsv2rgb(o,1,1,{inputRange:1})).toHex();dojo.style(this.colorUnderlay,"backgroundColor",t)},_updateColor:function(){var o=Math.round(255+this._offset-(dojo.style(this.hueCursorNode,"top")+this._offset)*this._hueSc),t=Math.round(dojo.style(this.cursorNode,"left")*this._sc*100),e=Math.round(100-dojo.style(this.cursorNode,"top")*this._sc*100);o!=this._hue&&this._setHue(o);var i=this._hsv2rgb(o,t/100,e/100,{inputRange:1}),r=dojo.colorFromArray(i).toHex();this.previewNode.style.backgroundColor=r,this.webSafe&&(this.safePreviewNode.style.backgroundColor=r),this.showHex&&(this.hexCode.value=r),this.showRgb&&(this.Rval.value=i[0],this.Gval.value=i[1],this.Bval.value=i[2]),this.showHsv&&(this.Hval.value=Math.round(360*o/255),this.Sval.value=t,this.Vval.value=e),this.value=r,this._timer||arguments[1]||(this.setValue(this.value),this.onChange(this.value))},_setHuePoint:function(o){this.animatePoint?dojo.fx.slideTo({node:this.hueCursorNode,duration:this.slideDuration,top:o.layerY,left:0,onEnd:dojo.hitch(this,"_updateColor")}).play():(dojo.style(this.hueCursorNode,"top",o.layerY+"px"),this._updateColor(!1))},_setPoint:function(o){this.animatePoint?dojo.fx.slideTo({node:this.cursorNode,duration:this.slideDuration,top:o.layerY-this._offset,left:o.layerX-this._offset,onEnd:dojo.hitch(this,"_updateColor")}).play():(dojo.style(this.cursorNode,"left",o.layerX-this._offset+"px"),dojo.style(this.cursorNode,"top",o.layerY-this._offset+"px"),this._updateColor(!1))},_hsv2rgb:function(o,t,e,i){dojo.isArray(o)&&(t&&(i=t),e=o[2]||0,t=o[1]||0,o=o[0]||0);var r={inputRange:i&&i.inputRange?i.inputRange:[255,255,255],outputRange:i&&i.outputRange?i.outputRange:255};switch(r.inputRange[0]){case 1:o=360*o;break;case 100:o=o/100*360;break;case 360:o=o;break;default:o=o/255*360}switch(360==o&&(o=0),r.inputRange[1]){case 100:t/=100;break;case 255:t/=255}switch(r.inputRange[2]){case 100:e/=100;break;case 255:e/=255}var d=null,s=null,a=null;if(0==t)d=e,s=e,a=e;else{var n=o/60,h=Math.floor(n),l=n-h,c=e*(1-t),u=e*(1-t*l),v=e*(1-t*(1-l));switch(h){case 0:d=e,s=v,a=c;break;case 1:d=u,s=e,a=c;break;case 2:d=c,s=e,a=v;break;case 3:d=c,s=u,a=e;break;case 4:d=v,s=c,a=e;break;case 5:d=e,s=c,a=u}}switch(r.outputRange){case 1:d=dojo.math.round(d,2),s=dojo.math.round(s,2),a=dojo.math.round(a,2);break;case 100:d=Math.round(100*d),s=Math.round(100*s),a=Math.round(100*a);break;default:d=Math.round(255*d),s=Math.round(255*s),a=Math.round(255*a)}return[d,s,a]}}));