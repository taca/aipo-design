dojo._xdResourceLoaded({depends:[["provide","dijit.Toolbar"],["require","dijit._Widget"],["require","dijit._Container"],["require","dijit._Templated"]],defineResource:function(i){i._hasResource["dijit.Toolbar"]||(i._hasResource["dijit.Toolbar"]=!0,i.provide("dijit.Toolbar"),i.require("dijit._Widget"),i.require("dijit._Container"),i.require("dijit._Templated"),i.declare("dijit.Toolbar",[dijit._Widget,dijit._Templated,dijit._KeyNavContainer],{templateString:'<div class="dijit dijitToolbar" waiRole="toolbar" tabIndex="${tabIndex}" dojoAttachPoint="containerNode"></div>',tabIndex:"0",postCreate:function(){this.connectKeyNavHandlers(this.isLeftToRight()?[i.keys.LEFT_ARROW]:[i.keys.RIGHT_ARROW],this.isLeftToRight()?[i.keys.RIGHT_ARROW]:[i.keys.LEFT_ARROW])},startup:function(){this.startupKeyNavChildren()}}),i.declare("dijit.ToolbarSeparator",[dijit._Widget,dijit._Templated],{templateString:'<div class="dijitToolbarSeparator dijitInline"></div>',postCreate:function(){i.setSelectable(this.domNode,!1)},isFocusable:function(){return!1}}))}});