dojo._xdResourceLoaded({depends:[["provide","aipo.widget.DropdownActivityChecker"],["require","aimluck.widget.Dropdown"],["require","aipo.widget.ActivityList"]],defineResource:function(e){e._hasResource["aipo.widget.DropdownActivityChecker"]||(e._hasResource["aipo.widget.DropdownActivityChecker"]=!0,e.provide("aipo.widget.DropdownActivityChecker"),e.require("aimluck.widget.Dropdown"),e.require("aipo.widget.ActivityList"),e.declare("aipo.widget.DropdownActivityChecker",[aimluck.widget.Dropdown],{initValue:"",displayCheck:"",iconURL:"",iconAlt:"",iconWidth:"",iconHeight:"",extendClass:"",eventList:[],callback:function(){},templateString:'<div class="dijit dijitLeft dijitInline"\n	dojoAttachEvent="onmouseenter:_onMouse,onmouseleave:_onMouse,onmousedown:_onMouse,onclick:_onDropDownClick,onkeydown:_onDropDownKeydown,onblur:_onDropDownBlur,onkeypress:_onKey"\n	><div class="" type="${type}"\n		dojoAttachPoint="focusNode,titleNode" waiRole="button" waiState="haspopup-true,labelledby-${id}_label"\n		><div class="" 	dojoAttachPoint="containerNode,popupStateNode"\n		id="${id}_label"><div id="activitychecker" class="zero activitycheckerstyle ${extendClass}"></div><span class="mb_hide">お知らせ</span><span class="pc_hide"><i class="icon-bell-alt"></i></span></div></div></div>\n',postCreate:function(){this.inherited(arguments),this.dropDown=new aipo.widget.ActivityList({},"activityLiteList")},_openDropDown:function(){this.inherited(arguments),e.byId("activitycheckerContainer")&&e.addClass(e.byId("activitycheckerContainer"),"active"),this.dropDown.reload();var i=window.navigator.userAgent.toLowerCase();if((i.indexOf("iphone")>-1||i.indexOf("android")>-1)&&(document.documentElement.scrollTop?document.documentElement.scrollTop=0:document.body.scrollTop&&(document.body.scrollTop=0)),aipo.userAgent.isAndroid()){var t=this,o=function(e){return e.preventDefault(),!1},n=e.query("input,select,button,a",this.domNode),c=e.byId("appsNavigation_v2"),a=e.query("input,select,button,a",c),d=e.byId("auiWidgetsArea"),r=e.query("input,select,button,a",d),s=n;s=s.concat(a),s=s.concat(r),e.query("input,select,button,a").forEach(function(i){aipo.arrayContains(s,i)||t.eventList.push(e.connect(i,"click",o))}),e.query("input,select,button").forEach(function(i){aipo.arrayContains(s,i)||i.disabled||(e.addClass(i,"disabled-by-activity"),i.disabled=!0)})}},_closeDropDown:function(){if(this.inherited(arguments),e.byId("activitycheckerContainer")&&e.removeClass(e.byId("activitycheckerContainer"),"active"),document.getElementById("wrapper")&&(document.getElementById("wrapper").style.minHeight=""),aipo.userAgent.isAndroid()){for(var i=0;i<this.eventList.length;i++)e.disconnect(this.eventList[i]);this.eventList=[],e.query("input.disabled-by-activity,select.disabled-by-activity,button.disabled-by-activity").forEach(function(i){e.removeClass(i,"disabled-by-activity"),i.disabled=!1})}},onCheckActivity:function(i){var t=e.byId("activitychecker");i>99?(t.innerHTML="99+",e.removeClass("activitychecker","zero")):0==i?(t.innerHTML=i,e.addClass("activitychecker","zero")):(t.innerHTML=i,e.removeClass("activitychecker","zero")),e.addClass("activitychecker","counter")},onCheckBlank:function(){}}))}});