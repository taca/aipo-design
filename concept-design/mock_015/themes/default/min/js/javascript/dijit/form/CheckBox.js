dojo._hasResource["dijit.form.CheckBox"]||(dojo._hasResource["dijit.form.CheckBox"]=!0,dojo.provide("dijit.form.CheckBox"),dojo.require("dijit.form.Button"),dojo.declare("dijit.form.CheckBox",dijit.form.ToggleButton,{templateString:'<fieldset class="dijitReset dijitInline" waiRole="presentation"\r\n	><input\r\n	 	type="${type}" name="${name}"\r\n		class="dijitReset dijitCheckBoxInput"\r\n		dojoAttachPoint="inputNode,focusNode"\r\n	 	dojoAttachEvent="onmouseover:_onMouse,onmouseout:_onMouse,onclick:_onClick"\r\n/></fieldset>\r\n',baseClass:"dijitCheckBox",type:"checkbox",value:"on",postCreate:function(){dojo.setSelectable(this.inputNode,!1),this.setChecked(this.checked),this.inherited(arguments)},setChecked:function(e){dojo.isIE?e?this.inputNode.setAttribute("checked","checked"):this.inputNode.removeAttribute("checked"):this.inputNode.checked=e,this.inherited(arguments)},setValue:function(e){null==e&&(e=""),this.inputNode.value=e,dijit.form.CheckBox.superclass.setValue.call(this,e)}}),dojo.declare("dijit.form.RadioButton",dijit.form.CheckBox,{type:"radio",baseClass:"dijitRadio",_groups:{},postCreate:function(){(this._groups[this.name]=this._groups[this.name]||[]).push(this),this.inherited(arguments)},uninitialize:function(){dojo.forEach(this._groups[this.name],function(e,t,i){return e===this?(i.splice(t,1),void 0):void 0},this)},setChecked:function(e){e&&dojo.forEach(this._groups[this.name],function(e){e!=this&&e.checked&&e.setChecked(!1)},this),this.inherited(arguments)},_clicked:function(){this.checked||this.setChecked(!0)}}));