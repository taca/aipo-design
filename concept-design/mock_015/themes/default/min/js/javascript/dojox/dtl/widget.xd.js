dojo._xdResourceLoaded({depends:[["provide","dojox.dtl.widget"],["require","dijit._Widget"],["require","dijit._Container"],["require","dojox.dtl.html"],["require","dojox.dtl.render.html"]],defineResource:function(e){e._hasResource["dojox.dtl.widget"]||(e._hasResource["dojox.dtl.widget"]=!0,e.provide("dojox.dtl.widget"),e.require("dijit._Widget"),e.require("dijit._Container"),e.require("dojox.dtl.html"),e.require("dojox.dtl.render.html"),e.declare("dojox.dtl._Widget",[dijit._Widget,dijit._Contained],{buffer:0,buildRendering:function(){if(this.domNode=this.srcNodeRef,this.domNode){var e=this.getParent();e&&this.setAttachPoint(e)}},setAttachPoint:function(e){this._attach=e},render:function(e,t){if(!this._attach)throw new Error("You must use an attach point with dojox.dtl.TemplatedWidget");t.setThis(this),this._attach.render(e,t)}}),e.declare("dojox.dtl.AttachPoint",[dijit._Widget,dijit._Container],{constructor:function(e,t){this._render=new dojox.dtl.render.html.Render(t)},render:function(e,t){this._render.render(e,t)}}))}});