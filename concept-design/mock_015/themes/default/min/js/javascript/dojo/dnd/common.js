dojo._hasResource["dojo.dnd.common"]||(dojo._hasResource["dojo.dnd.common"]=!0,dojo.provide("dojo.dnd.common"),dojo.dnd._copyKey=navigator.appVersion.indexOf("Macintosh")<0?"ctrlKey":"metaKey",dojo.dnd.getCopyKeyState=function(o){return o[dojo.dnd._copyKey]},dojo.dnd._uniqueId=0,dojo.dnd.getUniqueId=function(){var o;do o="dojoUnique"+ ++dojo.dnd._uniqueId;while(dojo.byId(o));return o},dojo.dnd._empty={},dojo.dnd.isFormElement=function(o){var d=o.target;return 3==d.nodeType&&(d=d.parentNode)," button textarea input select option ".indexOf(" "+d.tagName.toLowerCase()+" ")>=0});