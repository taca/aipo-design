dojo._xdResourceLoaded({depends:[["provide","dijit._tree.dndContainer"],["require","dojo.dnd.common"],["require","dojo.dnd.Container"]],defineResource:function(t){t._hasResource["dijit._tree.dndContainer"]||(t._hasResource["dijit._tree.dndContainer"]=!0,t.provide("dijit._tree.dndContainer"),t.require("dojo.dnd.common"),t.require("dojo.dnd.Container"),t.declare("dijit._tree.dndContainer",null,{constructor:function(e,n){this.tree=e,this.node=e.domNode,t.mixin(this,n),this.map={},this.current=null,this.ContainerState="",t.addClass(this.node,"dojoDndContainer"),n&&n._skipStartup||this.startup(),this.events=[t.connect(this.node,"onmouseover",this,"onMouseOver"),t.connect(this.node,"onmouseout",this,"onMouseOut"),t.connect(this.node,"ondragstart",t,"stopEvent"),t.connect(this.node,"onselectstart",t,"stopEvent")]},getItem:function(t){return this.selection[t]},onMouseOver:function(t){for(var e=t.relatedTarget;e&&e!=this.node;)try{e=e.parentNode}catch(n){e=null}e||(this._changeState("Container","Over"),this.onOverEvent()),e=this._getChildByEvent(t),this.current!=e&&(this.current&&this._removeItemClass(this.current,"Over"),e&&this._addItemClass(e,"Over"),this.current=e)},onMouseOut:function(t){for(var e=t.relatedTarget;e;){if(e==this.node)return;try{e=e.parentNode}catch(n){e=null}}this.current&&(this._removeItemClass(this.current,"Over"),this.current=null),this._changeState("Container",""),this.onOutEvent()},_changeState:function(e,n){var o="dojoDnd"+e,r=e.toLowerCase()+"State";t.removeClass(this.node,o+this[r]),t.addClass(this.node,o+n),this[r]=n},_getChildByEvent:function(e){var n=e.target;return n&&t.hasClass(n,"dijitTreeLabel")?n:null},markupFactory:function(t,e){return e._skipStartup=!0,new dijit._tree.dndContainer(t,e)},_addItemClass:function(e,n){t.addClass(e,"dojoDndItem"+n)},_removeItemClass:function(e,n){t.removeClass(e,"dojoDndItem"+n)},onOverEvent:function(){console.log("onOverEvent parent")},onOutEvent:function(){}}))}});