dojo._hasResource["aipo.widget.DropdownGrouppicker"]||(dojo._hasResource["aipo.widget.DropdownGrouppicker"]=!0,dojo.provide("aipo.widget.DropdownGrouppicker"),dojo.require("aimluck.widget.Dropdown"),dojo.require("aipo.widget.GroupSelectList"),dojo.declare("aipo.widget.DropdownGrouppicker",[aimluck.widget.Dropdown],{inputWidth:"250px",hiddenId:"",hiddenValue:"",iconURL:"",iconAlt:"",selectId:"",inputId:"",inputValue:"",buttonAddId:"",buttonRemoveId:"",memberFromTitle:"",memberFromId:"",memberToTitle:"",memberToId:"",memberFromUrl:"",memberFromOptionKey:"",memberFromOptionValue:"",groupSelectId:"",groupSelectOptionKey:"",groupSelectOptionValue:"",memberGroupUrl:"",changeGroupUrl:"",listWidgetId:"",templateString:'<div class="dijit dijitLeft dijitInline"\n	dojoAttachEvent="onmouseenter:_onMouse,onmouseleave:_onMouse,onmousedown:_onMouse,onclick:_onDropDownClick,onkeydown:_onDropDownKeydown,onblur:_onDropDownBlur,onkeypress:_onKey"\n	><div class=\'dijitRight\'>\n	<span class="" type="${type}"\n		dojoAttachPoint="focusNode,titleNode" waiRole="button" waiState="haspopup-true,labelledby-${id}_label"\n		><span class="" 	dojoAttachPoint="containerNode,popupStateNode"\n		id="${id}_label"><img src="${iconURL}" alt="${iconAlt}" style="cursor:pointer;cursor:hand;padding-right:2px" align="top" />\n	</span><select name="${selectId}" id="${selectId}" size="10" multiple="multiple" style="display:none" dojoAttachPoint="selectNode"></select><input type="hidden" id="${hiddenId}" name="${hiddenId}" value="${hiddenValue}" dojoAttachPoint="valueNode" /><span name="${inputId}" id="${inputId}" dojoAttachPoint="inputNode">${inputValue}</span>\n</div></div>\n',postCreate:function(){var e={widgetId:this.listWidgetId,selectId:this.selectId,inputId:this.inputId,buttonAddId:this.buttonAddId,buttonRemoveId:this.buttonRemoveId,memberFromTitle:this.memberFromTitle,memberFromId:this.memberFromId,memberToTitle:this.memberToTitle,memberToId:this.memberToId,memberFromUrl:this.memberFromUrl,memberFromOptionKey:this.memberFromOptionKey,memberFromOptionValue:this.memberFromOptionValue},o=dijit.byId(this.listWidgetId);if(o){this.dropDown=o;var t=dojo.byId(o.selectId);this.removeAllOptions(t),t=dojo.byId(o.memberToId),this.removeAllOptions(t)}else this.dropDown=new aipo.widget.GroupSelectList(e,this.listWidgetId);this.inherited(arguments)},removeAllOptions:function(e){var o;if(document.all){var t=e.options;for(o=0;o<t.length;o++)t.remove(o),o-=1}else{var t=e.options;for(o=0;o<t.length;o++)e.removeChild(t[o]),o-=1}},addOptionSync:function(e,o,t){var i=dojo.byId(this.memberToId),n=dojo.byId(this.selectId);if(!(0!=this.memberLimit&&i.options.length>=this.memberLimit)){if(document.all){var d=document.createElement("OPTION");d.value=e,d.text=o,d.selected=t;var r=document.createElement("OPTION");r.value=e,r.text=o,r.selected=t,1==i.options.length&&""==i.options[0].value&&(i.options.remove(0),n.options.remove(0)),i.add(d,i.options.length),n.add(r,n.options.length)}else{var d=document.createElement("OPTION");d.value=e,d.text=o,d.selected=t;var r=document.createElement("OPTION");r.value=e,r.text=o,r.selected=t,1==i.options.length&&""==i.options[0].value&&(i.removeChild(i.options[0]),n.removeChild(i.options[0])),i.insertBefore(d,i.options[i.options.length]),n.insertBefore(r,n.options[n.options.length])}this.inputMemberSync()}},inputMemberSync:function(){var e=dojo.byId(this.selectId),o=dojo.byId(this.inputId),t="",i=e.options,n=0,d=i.length;if(!(0>=d)){for(n=0;d>n;n++)0!=n&&(t+=", "),t+=i[n].text;o.innerHTML=t}}}));