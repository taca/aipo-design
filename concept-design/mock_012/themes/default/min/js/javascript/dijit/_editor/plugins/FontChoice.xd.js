dojo._xdResourceLoaded({depends:[["provide","dijit._editor.plugins.FontChoice"],["require","dijit._editor._Plugin"],["require","dijit.form.FilteringSelect"],["require","dojo.data.ItemFileReadStore"],["require","dojo.i18n"],["requireLocalization","dijit._editor","FontChoice",null,"ROOT","ROOT"]],defineResource:function(i){i._hasResource["dijit._editor.plugins.FontChoice"]||(i._hasResource["dijit._editor.plugins.FontChoice"]=!0,i.provide("dijit._editor.plugins.FontChoice"),i.require("dijit._editor._Plugin"),i.require("dijit.form.FilteringSelect"),i.require("dojo.data.ItemFileReadStore"),i.require("dojo.i18n"),i.declare("dijit._editor.plugins.FontChoice",dijit._editor._Plugin,{_uniqueId:0,buttonClass:dijit.form.FilteringSelect,_initButton:function(){this.inherited("_initButton",arguments);var e={fontName:["serif","sans-serif","monospaced","cursive","fantasy"],fontSize:[1,2,3,4,5,6,7],formatBlock:["p","h1","h2","h3","pre"]}[this.command],t=i.i18n.getLocalization("dijit._editor","FontChoice"),o=i.map(e,function(i){return{name:t[i],value:i}});o.push({name:"",value:""}),this.button.store=new i.data.ItemFileReadStore({data:{identifier:"value",items:o}}),this.button.setValue(""),i.connect(this.button,"onChange",this,function(i){this.editor.execCommand(this.command,i)})},updateState:function(){this.inherited("updateState",arguments);var i=this.editor,e=this.command;if(i&&i.isLoaded&&e.length&&this.button){var t=i.queryCommandValue(e);this.button.setValue(t)}},setToolbar:function(){this.inherited("setToolbar",arguments);var e=this.button;e.id||(e.id="dijitEditorButton-"+this.command+this._uniqueId++);var t=i.doc.createElement("label");t.setAttribute("for",e.id);var o=i.i18n.getLocalization("dijit._editor","FontChoice");t.appendChild(i.doc.createTextNode(o[this.command])),i.place(t,this.button.domNode,"before")}}))}});