dojo._hasResource["dojox.widget.TimeSpinner"]||(dojo._hasResource["dojox.widget.TimeSpinner"]=!0,dojo.provide("dojox.widget.TimeSpinner"),dojo.require("dijit.form._Spinner"),dojo.require("dijit.form.NumberTextBox"),dojo.require("dojo.date"),dojo.require("dojo.date.locale"),dojo.require("dojo.date.stamp"),dojo.declare("dojox.widget.TimeSpinner",[dijit.form._Spinner],{required:!1,adjust:function(e,o){return dojo.date.add(e,"minute",o)},isValid:function(){return!0},smallDelta:5,largeDelta:30,timeoutChangeRate:.5,parse:function(e){return dojo.date.locale.parse(e,{selector:"time",formatLength:"short"})},format:function(e){return dojo.isString(e)?e:dojo.date.locale.format(e,{selector:"time",formatLength:"short"})},serialize:dojo.date.stamp.toISOString,value:"12:00 AM"}));