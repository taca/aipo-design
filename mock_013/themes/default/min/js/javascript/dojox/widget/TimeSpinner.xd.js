dojo._xdResourceLoaded({depends:[["provide","dojox.widget.TimeSpinner"],["require","dijit.form._Spinner"],["require","dijit.form.NumberTextBox"],["require","dojo.date"],["require","dojo.date.locale"],["require","dojo.date.stamp"]],defineResource:function(e){e._hasResource["dojox.widget.TimeSpinner"]||(e._hasResource["dojox.widget.TimeSpinner"]=!0,e.provide("dojox.widget.TimeSpinner"),e.require("dijit.form._Spinner"),e.require("dijit.form.NumberTextBox"),e.require("dojo.date"),e.require("dojo.date.locale"),e.require("dojo.date.stamp"),e.declare("dojox.widget.TimeSpinner",[dijit.form._Spinner],{required:!1,adjust:function(r,i){return e.date.add(r,"minute",i)},isValid:function(){return!0},smallDelta:5,largeDelta:30,timeoutChangeRate:.5,parse:function(r){return e.date.locale.parse(r,{selector:"time",formatLength:"short"})},format:function(r){return e.isString(r)?r:e.date.locale.format(r,{selector:"time",formatLength:"short"})},serialize:e.date.stamp.toISOString,value:"12:00 AM"}))}});