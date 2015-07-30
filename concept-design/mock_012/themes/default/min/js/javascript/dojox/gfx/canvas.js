dojo._hasResource["dojox.gfx.canvas"]||(dojo._hasResource["dojox.gfx.canvas"]=!0,dojo.provide("dojox.gfx.canvas"),dojo.require("dojox.gfx._base"),dojo.require("dojox.gfx.shape"),dojo.require("dojox.gfx.path"),dojo.require("dojox.gfx.arc"),dojo.require("dojox.gfx.decompose"),dojo.experimental("dojox.gfx.canvas"),function(){var t=dojox.gfx,e=t.shape,o=t.arc,s=t.matrix,a=s.multiplyPoint,i=2*Math.PI;dojo.extend(t.Shape,{render:function(t){t.save(),this._renderTransform(t),this._renderShape(t),this._renderFill(t,!0),this._renderStroke(t,!0),t.restore()},_renderTransform:function(t){if("canvasTransform"in this){var e=this.canvasTransform;t.translate(e.dx,e.dy),t.rotate(e.angle2),t.scale(e.sx,e.sy),t.rotate(e.angle1)}},_renderShape:function(){},_renderFill:function(t,e){"canvasFill"in this?("canvasFillImage"in this&&(this.canvasFill=t.createPattern(this.canvasFillImage,"repeat"),delete this.canvasFillImage),t.fillStyle=this.canvasFill,e&&t.fill()):t.fillStyle="rgba(0,0,0,0.0)"},_renderStroke:function(t,e){var o=this.strokeStyle;o?(t.strokeStyle=o.color.toString(),t.lineWidth=o.width,t.lineCap=o.cap,"number"==typeof o.join?(t.lineJoin="miter",t.miterLimit=o.join):t.lineJoin=o.join,e&&t.stroke()):e||(t.strokeStyle="rgba(0,0,0,0.0)")},getEventSource:function(){return null},connect:function(){},disconnect:function(){}});var n=function(t,e,o){var s=t.prototype[e];t.prototype[e]=o?function(){return this.surface.makeDirty(),s.apply(this,arguments),o.call(this),this}:function(){return this.surface.makeDirty(),s.apply(this,arguments)}};n(t.Shape,"setTransform",function(){this.matrix?this.canvasTransform=t.decompose(this.matrix):delete this.canvasTransform}),n(t.Shape,"setFill",function(){var e,o=this.fillStyle;if(o){if("object"==typeof o&&"type"in o){var s=this.surface.rawNode.getContext("2d");switch(o.type){case"linear":case"radial":e="linear"==o.type?s.createLinearGradient(o.x1,o.y1,o.x2,o.y2):s.createRadialGradient(o.cx,o.cy,0,o.cx,o.cy,o.r),dojo.forEach(o.colors,function(o){e.addColorStop(o.offset,t.normalizeColor(o.color).toString())});break;case"pattern":var a=new Image(o.width,o.height);this.surface.downloadImage(a,o.src),this.canvasFillImage=a}}else e=o.toString();this.canvasFill=e}else delete this.canvasFill}),n(t.Shape,"setStroke"),n(t.Shape,"setShape"),dojo.declare("dojox.gfx.Group",t.Shape,{constructor:function(){e.Container._init.call(this)},render:function(t){t.save(),this._renderTransform(t),this._renderFill(t),this._renderStroke(t);for(var e=0;e<this.children.length;++e)this.children[e].render(t);t.restore()}}),dojo.declare("dojox.gfx.Rect",e.Rect,{_renderShape:function(t){var e=this.shape,o=Math.min(e.r,e.height/2,e.width/2),s=e.x,a=s+e.width,i=e.y,n=i+e.height,r=s+o,h=a-o,l=i+o,c=n-o;t.beginPath(),t.moveTo(r,i),t.lineTo(h,i),o&&t.arcTo(a,i,a,l,o),t.lineTo(a,c),o&&t.arcTo(a,n,h,n,o),t.lineTo(r,n),o&&t.arcTo(s,n,s,c,o),t.lineTo(s,l),o&&t.arcTo(s,i,r,i,o),t.closePath()}});var r=[];!function(){var t=o.curvePI4;r.push(t.s,t.c1,t.c2,t.e);for(var e=45;360>e;e+=45){var i=s.rotateg(e);r.push(a(i,t.c1),a(i,t.c2),a(i,t.e))}}(),dojo.declare("dojox.gfx.Ellipse",e.Ellipse,{setShape:function(){t.Ellipse.superclass.setShape.apply(this,arguments);var e,o,i,n=this.shape,h=[],l=s.normalize([s.translate(n.cx,n.cy),s.scale(n.rx,n.ry)]);e=a(l,r[0]),h.push([e.x,e.y]);for(var c=1;c<r.length;c+=3)o=a(l,r[c]),i=a(l,r[c+1]),e=a(l,r[c+2]),h.push([o.x,o.y,i.x,i.y,e.x,e.y]);return this.canvasEllipse=h,this},_renderShape:function(t){var e=this.canvasEllipse;t.beginPath(),t.moveTo.apply(t,e[0]);for(var o=1;o<e.length;++o)t.bezierCurveTo.apply(t,e[o]);t.closePath()}}),dojo.declare("dojox.gfx.Circle",e.Circle,{_renderShape:function(t){var e=this.shape;t.beginPath(),t.arc(e.cx,e.cy,e.r,0,i,1)}}),dojo.declare("dojox.gfx.Line",e.Line,{_renderShape:function(t){var e=this.shape;t.beginPath(),t.moveTo(e.x1,e.y1),t.lineTo(e.x2,e.y2)}}),dojo.declare("dojox.gfx.Polyline",e.Polyline,{setShape:function(){t.Polyline.superclass.setShape.apply(this,arguments);var e,o,s=this.shape.points,a=s[0],i=[];if(s.length)for("number"==typeof a?(i.push(a,s[1]),o=2):(i.push(a.x,a.y),o=1);o<s.length;++o)e=s[o],"number"==typeof e?i.push(e,s[++o]):i.push(e.x,e.y);return this.canvasPolyline=i,this},_renderShape:function(t){var e=this.canvasPolyline;if(e.length){t.beginPath(),t.moveTo(e[0],e[1]);for(var o=2;o<e.length;o+=2)t.lineTo(e[o],e[o+1])}}}),dojo.declare("dojox.gfx.Image",e.Image,{setShape:function(){t.Image.superclass.setShape.apply(this,arguments);var e=new Image;return this.surface.downloadImage(e,this.shape.src),this.canvasImage=e,this},_renderShape:function(t){var e=this.shape;t.drawImage(this.canvasImage,e.x,e.y,e.width,e.height)}}),dojo.declare("dojox.gfx.Text",e.Text,{_renderShape:function(){this.shape}}),n(t.Text,"setFont");var h={M:"_moveToA",m:"_moveToR",L:"_lineToA",l:"_lineToR",H:"_hLineToA",h:"_hLineToR",V:"_vLineToA",v:"_vLineToR",C:"_curveToA",c:"_curveToR",S:"_smoothCurveToA",s:"_smoothCurveToR",Q:"_qCurveToA",q:"_qCurveToR",T:"_qSmoothCurveToA",t:"_qSmoothCurveToR",A:"_arcTo",a:"_arcTo",Z:"_closePath",z:"_closePath"};dojo.declare("dojox.gfx.Path",t.path.Path,{constructor:function(){this.last={},this.lastControl={}},setShape:function(){return this.canvasPath=[],t.Path.superclass.setShape.apply(this,arguments)},_updateWithSegment:function(e){var o=dojo.clone(this.last);this[h[e.action]](this.canvasPath,e.action,e.args),this.last=o,t.Path.superclass._updateWithSegment.apply(this,arguments)},_renderShape:function(t){var e=this.canvasPath;t.beginPath();for(var o=0;o<e.length;o+=2)t[e[o]].apply(t,e[o+1])},_moveToA:function(t,e,o){t.push("moveTo",[o[0],o[1]]);for(var s=2;s<o.length;s+=2)t.push("lineTo",[o[s],o[s+1]]);this.last.x=o[o.length-2],this.last.y=o[o.length-1],this.lastControl={}},_moveToR:function(t,e,o){"x"in this.last?t.push("moveTo",[this.last.x+=o[0],this.last.y+=o[1]]):t.push("moveTo",[this.last.x=o[0],this.last.y=o[1]]);for(var s=2;s<o.length;s+=2)t.push("lineTo",[this.last.x+=o[s],this.last.y+=o[s+1]]);this.lastControl={}},_lineToA:function(t,e,o){for(var s=0;s<o.length;s+=2)t.push("lineTo",[o[s],o[s+1]]);this.last.x=o[o.length-2],this.last.y=o[o.length-1],this.lastControl={}},_lineToR:function(t,e,o){for(var s=0;s<o.length;s+=2)t.push("lineTo",[this.last.x+=o[s],this.last.y+=o[s+1]]);this.lastControl={}},_hLineToA:function(t,e,o){for(var s=0;s<o.length;++s)t.push("lineTo",[o[s],this.last.y]);this.last.x=o[o.length-1],this.lastControl={}},_hLineToR:function(t,e,o){for(var s=0;s<o.length;++s)t.push("lineTo",[this.last.x+=o[s],this.last.y]);this.lastControl={}},_vLineToA:function(t,e,o){for(var s=0;s<o.length;++s)t.push("lineTo",[this.last.x,o[s]]);this.last.y=o[o.length-1],this.lastControl={}},_vLineToR:function(t,e,o){for(var s=0;s<o.length;++s)t.push("lineTo",[this.last.x,this.last.y+=o[s]]);this.lastControl={}},_curveToA:function(t,e,o){for(var s=0;s<o.length;s+=6)t.push("bezierCurveTo",o.slice(s,s+6));this.last.x=o[o.length-2],this.last.y=o[o.length-1],this.lastControl.x=o[o.length-4],this.lastControl.y=o[o.length-3],this.lastControl.type="C"},_curveToR:function(t,e,o){for(var s=0;s<o.length;s+=6)t.push("bezierCurveTo",[this.last.x+o[s],this.last.y+o[s+1],this.lastControl.x=this.last.x+o[s+2],this.lastControl.y=this.last.y+o[s+3],this.last.x+o[s+4],this.last.y+o[s+5]]),this.last.x+=o[s+4],this.last.y+=o[s+5];this.lastControl.type="C"},_smoothCurveToA:function(t,e,o){for(var s=0;s<o.length;s+=4){var a="C"==this.lastControl.type;t.push("bezierCurveTo",[a?2*this.last.x-this.lastControl.x:this.last.x,a?2*this.last.y-this.lastControl.y:this.last.y,o[s],o[s+1],o[s+2],o[s+3]]),this.lastControl.x=o[s],this.lastControl.y=o[s+1],this.lastControl.type="C"}this.last.x=o[o.length-2],this.last.y=o[o.length-1]},_smoothCurveToR:function(t,e,o){for(var s=0;s<o.length;s+=4){var a="C"==this.lastControl.type;t.push("bezierCurveTo",[a?2*this.last.x-this.lastControl.x:this.last.x,a?2*this.last.y-this.lastControl.y:this.last.y,this.last.x+o[s],this.last.y+o[s+1],this.last.x+o[s+2],this.last.y+o[s+3]]),this.lastControl.x=this.last.x+o[s],this.lastControl.y=this.last.y+o[s+1],this.lastControl.type="C",this.last.x+=o[s+2],this.last.y+=o[s+3]}},_qCurveToA:function(t,e,o){for(var s=0;s<o.length;s+=4)t.push("quadraticCurveTo",o.slice(s,s+4));this.last.x=o[o.length-2],this.last.y=o[o.length-1],this.lastControl.x=o[o.length-4],this.lastControl.y=o[o.length-3],this.lastControl.type="Q"},_qCurveToR:function(t,e,o){for(var s=0;s<o.length;s+=4)t.push("quadraticCurveTo",[this.lastControl.x=this.last.x+o[s],this.lastControl.y=this.last.y+o[s+1],this.last.x+o[s+2],this.last.y+o[s+3]]),this.last.x+=o[s+2],this.last.y+=o[s+3];this.lastControl.type="Q"},_qSmoothCurveToA:function(t,e,o){for(var s=0;s<o.length;s+=2){var a="Q"==this.lastControl.type;t.push("quadraticCurveTo",[this.lastControl.x=a?2*this.last.x-this.lastControl.x:this.last.x,this.lastControl.y=a?2*this.last.y-this.lastControl.y:this.last.y,o[s],o[s+1]]),this.lastControl.type="Q"}this.last.x=o[o.length-2],this.last.y=o[o.length-1]},_qSmoothCurveToR:function(t,e,o){for(var s=0;s<o.length;s+=2){var a="Q"==this.lastControl.type;t.push("quadraticCurveTo",[this.lastControl.x=a?2*this.last.x-this.lastControl.x:this.last.x,this.lastControl.y=a?2*this.last.y-this.lastControl.y:this.last.y,this.last.x+o[s],this.last.y+o[s+1]]),this.lastControl.type="Q",this.last.x+=o[s],this.last.y+=o[s+1]}},_arcTo:function(t,e,s){for(var a="a"==e,i=0;i<s.length;i+=7){var n=s[i+5],r=s[i+6];a&&(n+=this.last.x,r+=this.last.y);var h=o.arcAsBezier(this.last,s[i],s[i+1],s[i+2],s[i+3]?1:0,s[i+4]?1:0,n,r);dojo.forEach(h,function(e){t.push("bezierCurveTo",e)}),this.last.x=n,this.last.y=r}this.lastControl={}},_closePath:function(t){t.push("closePath",[]),this.lastControl={}}}),dojo.forEach(["moveTo","lineTo","hLineTo","vLineTo","curveTo","smoothCurveTo","qCurveTo","qSmoothCurveTo","arcTo","closePath"],function(e){n(t.Path,e)}),dojo.declare("dojox.gfx.TextPath",t.path.TextPath,{_renderShape:function(){this.shape}}),dojo.declare("dojox.gfx.Surface",e.Surface,{constructor:function(){e.Container._init.call(this),this.pendingImageCount=0,this.makeDirty()},setDimensions:function(e,o){return this.width=t.normalizedLength(e),this.height=t.normalizedLength(o),this.rawNode?(this.rawNode.width=e,this.rawNode.height=o,this.makeDirty(),this):this},getDimensions:function(){return this.rawNode?{width:this.rawNode.width,height:this.rawNode.height}:null},render:function(){if(!this.pendingImageCount){var t=this.rawNode.getContext("2d");t.save(),t.clearRect(0,0,this.rawNode.width,this.rawNode.height);for(var e=0;e<this.children.length;++e)this.children[e].render(t);t.restore(),"pendingRender"in this&&(clearTimeout(this.pendingRender),delete this.pendingRender)}},makeDirty:function(){this.pendingImagesCount||"pendingRender"in this||(this.pendingRender=setTimeout(dojo.hitch(this,this.render),0))},downloadImage:function(t,e){var o=dojo.hitch(this,this.onImageLoad);!this.pendingImageCount++&&"pendingRender"in this&&(clearTimeout(this.pendingRender),delete this.pendingRender),t.onload=o,t.onerror=o,t.onabort=o,t.src=e},onImageLoad:function(){--this.pendingImageCount||this.render()},getEventSource:function(){return null},connect:function(){},disconnect:function(){}}),t.createSurface=function(e,o,s){o||(o="100%"),s||(s="100%");var a=new t.Surface,i=dojo.byId(e),n=i.ownerDocument.createElement("canvas");return n.width=o,n.height=s,i.appendChild(n),a.rawNode=n,a.surface=a,a};var l=e.Container,c={add:function(){return this.surface.makeDirty(),l.add.apply(this,arguments)},remove:function(){return this.surface.makeDirty(),l.remove.apply(this,arguments)},clear:function(){return this.surface.makeDirty(),l.clear.apply(this,arguments)},_moveChildToFront:function(){return this.surface.makeDirty(),l._moveChildToFront.apply(this,arguments)},_moveChildToBack:function(){return this.surface.makeDirty(),l._moveChildToBack.apply(this,arguments)}};dojo.mixin(e.Creator,{createObject:function(t,e){var o=new t;return o.surface=this.surface,o.setShape(e),this.add(o),o}}),dojo.extend(t.Group,c),dojo.extend(t.Group,e.Creator),dojo.extend(t.Surface,c),dojo.extend(t.Surface,e.Creator)}());