dojo._xdResourceLoaded({depends:[["provide","dojox.charting.axis2d.Base"],["require","dojox.charting.Element"]],defineResource:function(e){e._hasResource["dojox.charting.axis2d.Base"]||(e._hasResource["dojox.charting.axis2d.Base"]=!0,e.provide("dojox.charting.axis2d.Base"),e.require("dojox.charting.Element"),e.declare("dojox.charting.axis2d.Base",dojox.charting.Element,{constructor:function(e,r){this.vertical=r&&r.vertical},clear:function(){return this},initialized:function(){return!1},calculate:function(){return this},getScaler:function(){return null},getOffsets:function(){return{l:0,r:0,t:0,b:0}},render:function(){return this}}))}});