dojo._xdResourceLoaded({depends:[["provide","dojo.dnd.Moveable"],["require","dojo.dnd.Mover"]],defineResource:function(o){o._hasResource["dojo.dnd.Moveable"]||(o._hasResource["dojo.dnd.Moveable"]=!0,o.provide("dojo.dnd.Moveable"),o.require("dojo.dnd.Mover"),o.declare("dojo.dnd.Moveable",null,{handle:"",delay:0,skip:!1,constructor:function(e,n){this.node=o.byId(e),n||(n={}),this.handle=n.handle?o.byId(n.handle):null,this.handle||(this.handle=this.node),this.delay=n.delay>0?n.delay:0,this.skip=n.skip,this.mover=n.mover?n.mover:o.dnd.Mover,this.events=[o.connect(this.handle,"onmousedown",this,"onMouseDown"),o.connect(this.handle,"ondragstart",this,"onSelectStart"),o.connect(this.handle,"onselectstart",this,"onSelectStart")]},markupFactory:function(e,n){return new o.dnd.Moveable(n,e)},destroy:function(){o.forEach(this.events,o.disconnect),this.events=this.node=this.handle=null},onMouseDown:function(e){this.skip&&o.dnd.isFormElement(e)||(this.delay?(this.events.push(o.connect(this.handle,"onmousemove",this,"onMouseMove")),this.events.push(o.connect(this.handle,"onmouseup",this,"onMouseUp")),this._lastX=e.pageX,this._lastY=e.pageY):new this.mover(this.node,e,this),o.stopEvent(e))},onMouseMove:function(e){(Math.abs(e.pageX-this._lastX)>this.delay||Math.abs(e.pageY-this._lastY)>this.delay)&&(this.onMouseUp(e),new this.mover(this.node,e,this)),o.stopEvent(e)},onMouseUp:function(){o.disconnect(this.events.pop()),o.disconnect(this.events.pop())},onSelectStart:function(e){this.skip&&o.dnd.isFormElement(e)||o.stopEvent(e)},onMoveStart:function(e){o.publish("/dnd/move/start",[e]),o.addClass(o.body(),"dojoMove"),o.addClass(this.node,"dojoMoveItem")},onMoveStop:function(e){o.publish("/dnd/move/stop",[e]),o.removeClass(o.body(),"dojoMove"),o.removeClass(this.node,"dojoMoveItem")},onFirstMove:function(){},onMove:function(e,n){this.onMoving(e,n),o.marginBox(e.node,n),this.onMoved(e,n)},onMoving:function(){},onMoved:function(){}}))}});