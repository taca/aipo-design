dojo._xdResourceLoaded({depends:[["provide","dojox.dtl.render.html"]],defineResource:function(e){e._hasResource["dojox.dtl.render.html"]||(e._hasResource["dojox.dtl.render.html"]=!0,e.provide("dojox.dtl.render.html"),dojox.dtl.render.html.sensitivity={NODE:1,ATTRIBUTE:2,TEXT:3},dojox.dtl.render.html.Render=function(t,o){this._tpl=o,this._node=t,this._swap=e.hitch(this,function(){if(this._node===this._tpl.getRootNode()){var e=this._node;this._node=this._node.cloneNode(!0),e.parentNode.replaceChild(this._node,e)}})},e.extend(dojox.dtl.render.html.Render,{sensitivity:dojox.dtl.render.html.sensitivity,setAttachPoint:function(e){this._node=e},render:function(t,o,d){if(!this._node)throw new Error("You cannot use the Render object without specifying where you want to render it");if(d=d||t.getBuffer(),o.getThis()&&o.getThis().buffer==this.sensitivity.NODE)var n=e.connect(d,"onAddNode",this,"_swap"),i=e.connect(d,"onRemoveNode",this,"_swap");this._tpl&&this._tpl!==t&&this._tpl.unrender(o,d),this._tpl=t;var s=t.render(o,d).getParent();e.disconnect(n),e.disconnect(i),this._node!==s&&(this._node.parentNode.replaceChild(s,this._node),e._destroyElement(this._node),this._node=s)}}))}});