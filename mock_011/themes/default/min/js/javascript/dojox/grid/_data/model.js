dojo._hasResource["dojox.grid._data.model"]||(dojo._hasResource["dojox.grid._data.model"]=!0,dojo.provide("dojox.grid._data.model"),dojo.require("dojox.grid._data.fields"),dojo.declare("dojox.grid.data.Model",null,{constructor:function(t,e){this.observers=[],this.fields=new dojox.grid.data.Fields,t&&this.fields.set(t),this.setData(e)},count:0,updating:0,observer:function(t,e){this.observers.push({o:t,p:e||"model"})},notObserver:function(t){for(var e,o=0;e=this.observers[o];o++)if(e.o==t)return this.observers.splice(o,1),void 0},notify:function(t,e){if(!this.isUpdating())for(var o,i,n=e||[],s=0;i=this.observers[s];s++)o=i.p+t,i=i.o,o in i&&i[o].apply(i,n)},clear:function(){this.fields.clear(),this.clearData()},beginUpdate:function(){this.updating++},endUpdate:function(){this.updating&&this.updating--},isUpdating:function(){return Boolean(this.updating)},clearData:function(){this.setData(null)},change:function(){this.notify("Change",arguments)},insertion:function(){this.notify("Insertion",arguments),this.notify("Change",arguments)},removal:function(){this.notify("Removal",arguments),this.notify("Change",arguments)},insert:function(){return this._insert.apply(this,arguments)?(this.insertion.apply(this,dojo._toArray(arguments,1)),!0):!1},remove:function(){return this._remove.apply(this,arguments)?(this.removal.apply(this,arguments),!0):!1},canSort:function(){return null!=this.sort},makeComparator:function(t){for(var e,o,i,n=null,s=t.length-1;s>=0;s--)e=t[s],o=Math.abs(e)-1,o>=0&&(i=this.fields.get(o),n=this.generateComparator(i.compare,i.key,e>0,n));return n},sort:null,dummy:0}),dojo.declare("dojox.grid.data.Rows",dojox.grid.data.Model,{allChange:function(){this.notify("AllChange",arguments),this.notify("Change",arguments)},rowChange:function(){this.notify("RowChange",arguments)},datumChange:function(){this.notify("DatumChange",arguments)},beginModifyRow:function(t){this.cache[t]||(this.cache[t]=this.copyRow(t))},endModifyRow:function(t){var e=this.cache[t];if(e){var o=this.getRow(t);dojox.grid.arrayCompare(e,o)||this.update(e,o,t),delete this.cache[t]}},cancelModifyRow:function(t){var e=this.cache[t];e&&(this.setRow(e,t),delete this.cache[t])},generateComparator:function(t,e,o,i){return function(n,s){var a=t(n[e],s[e]);return a?o?a:-a:i&&i(n,s)}}}),dojo.declare("dojox.grid.data.Table",dojox.grid.data.Rows,{constructor:function(){this.cache=[]},colCount:0,data:null,cache:null,measure:function(){this.count=this.getRowCount(),this.colCount=this.getColCount(),this.allChange()},getRowCount:function(){return this.data?this.data.length:0},getColCount:function(){return this.data&&this.data.length?this.data[0].length:this.fields.count()},badIndex:function(){console.debug("dojox.grid.data.Table: badIndex")},isGoodIndex:function(t,e){return t>=0&&t<this.count&&(arguments.length<2||e>=0&&e<this.colCount)},getRow:function(t){return this.data[t]},copyRow:function(t){return this.getRow(t).slice(0)},getDatum:function(t,e){return this.data[t][e]},get:function(){throw'Plain "get" no longer supported. Use "getRow" or "getDatum".'},setData:function(t){this.data=t||[],this.allChange()},setRow:function(t,e){this.data[e]=t,this.rowChange(t,e),this.change()},setDatum:function(t,e,o){this.data[e][o]=t,this.datumChange(t,e,o)},set:function(){throw'Plain "set" no longer supported. Use "setData", "setRow", or "setDatum".'},setRows:function(t,e){for(var o=0,i=t.length,n=e;i>o;o++,n++)this.setRow(t[o],n)},update:function(){return!0},_insert:function(t,e){return dojox.grid.arrayInsert(this.data,e,t),this.count++,!0},_remove:function(t){for(var e=t.length-1;e>=0;e--)dojox.grid.arrayRemove(this.data,t[e]);return this.count-=t.length,!0},sort:function(){this.data.sort(this.makeComparator(arguments))},swap:function(t,e){dojox.grid.arraySwap(this.data,t,e),this.rowChange(this.getRow(t),t),this.rowChange(this.getRow(e),e),this.change()},dummy:0}),dojo.declare("dojox.grid.data.Objects",dojox.grid.data.Table,{constructor:function(t){t||this.autoAssignFields()},autoAssignFields:function(){var t=this.data[0],e=0;for(var o in t)this.fields.get(e++).key=o},getDatum:function(t,e){return this.data[t][this.fields.get(e).key]}}),dojo.declare("dojox.grid.data.Dynamic",dojox.grid.data.Table,{constructor:function(){this.page=[],this.pages=[]},page:null,pages:null,rowsPerPage:100,requests:0,bop:-1,eop:-1,clearData:function(){this.pages=[],this.bop=this.eop=-1,this.setData([])},getRowCount:function(){return this.count},getColCount:function(){return this.fields.count()},setRowCount:function(t){this.count=t,this.change()},requestsPending:function(){},rowToPage:function(t){return this.rowsPerPage?Math.floor(t/this.rowsPerPage):t},pageToRow:function(t){return this.rowsPerPage?this.rowsPerPage*t:t},requestRows:function(){},rowsProvided:function(){this.requests--,0==this.requests&&this.requestsPending(!1)},requestPage:function(t){var e=this.pageToRow(t),o=Math.min(this.rowsPerPage,this.count-e);o>0&&(this.requests++,this.requestsPending(!0),setTimeout(dojo.hitch(this,"requestRows",e,o),1))},needPage:function(t){this.pages[t]||(this.pages[t]=!0,this.requestPage(t))},preparePage:function(t){if(t<this.bop||t>=this.eop){var e=this.rowToPage(t);this.needPage(e),this.bop=e*this.rowsPerPage,this.eop=this.bop+(this.rowsPerPage||this.count)}},isRowLoaded:function(t){return Boolean(this.data[t])},removePages:function(t){for(var e,o=0;void 0!=(e=t[o]);o++)this.pages[this.rowToPage(e)]=!1;this.bop=this.eop=-1},remove:function(t){this.removePages(t),dojox.grid.data.Table.prototype.remove.apply(this,arguments)},getRow:function(t){var e=this.data[t];return e||this.preparePage(t),e},getDatum:function(t,e){var o=this.getRow(t);return o?o[e]:this.fields.get(e).na},setDatum:function(t,e,o){var i=this.getRow(e);i?(i[o]=t,this.datumChange(t,e,o)):console.debug("["+this.declaredClass+"] dojox.grid.data.dynamic.set: cannot set data on an non-loaded row")},canSort:function(){return!1}}),dojox.grid.data.table=dojox.grid.data.Table,dojox.grid.data.dynamic=dojox.grid.data.Dyanamic,dojo.declare("dojox.grid.data.DojoData",dojox.grid.data.Dynamic,{constructor:function(t,e,o){if(this.count=1,this._rowIdentities={},o&&dojo.mixin(this,o),this.store){var i=this.store.getFeatures();this._canNotify=i["dojo.data.api.Notification"],this._canWrite=i["dojo.data.api.Write"],this._canNotify&&dojo.connect(this.store,"onSet",this,"_storeDatumChange")}},markupFactory:function(t){return new dojox.grid.data.DojoData(null,null,t)},query:{name:"*"},store:null,_canNotify:!1,_canWrite:!1,_rowIdentities:{},clientSort:!1,setData:function(t){this.store=t,this.data=[],this.allChange()},setRowCount:function(t){this.count=t,this.allChange()},beginReturn:function(t){this.count!=t&&this.setRowCount(t)},_setupFields:function(t){if(!this.fields._nameMaps){var e={},o=dojo.map(this.store.getAttributes(t),function(t,o){return e[t]=o,e[o+".idx"]=t,{name:t,key:t}},this);this.fields._nameMaps=e,this.fields.set(o),this.notify("FieldsChange")}},_getRowFromItem:function(){},processRows:function(t,e){t&&(this._setupFields(t[0]),dojo.forEach(t,function(t,o){var i={};i.__dojo_data_item=t,dojo.forEach(this.fields.values,function(e){i[e.name]=this.store.getValue(t,e.name)||""},this),this._rowIdentities[this.store.getIdentity(t)]=e.start+o,this.setRow(i,e.start+o)},this))},requestRows:function(t){var e=t||0,o={start:e,count:this.rowsPerPage,query:this.query,onBegin:dojo.hitch(this,"beginReturn"),onComplete:dojo.hitch(this,"processRows")};this.store.fetch(o)},getDatum:function(t,e){var o=this.getRow(t),i=this.fields.values[e];return o&&i?o[i.name]:i?i.na:"?"},setDatum:function(t,e,o){var i=this.fields._nameMaps[o+".idx"];i&&(this.data[e][i]=t,this.datumChange(t,e,o))},copyRow:function(t){var e={},o={},i=this.getRow(t);for(var n in i)i[n]!=o[n]&&(e[n]=i[n]);return e},_attrCompare:function(t,e){return dojo.forEach(this.fields.values,function(o){return t[o.name]!=e[o.name]?!1:void 0},this),!0},endModifyRow:function(t){var e=this.cache[t];if(e){var o=this.getRow(t);this._attrCompare(e,o)||this.update(e,o,t),delete this.cache[t]}},cancelModifyRow:function(t){var e=this.cache[t];e&&(this.setRow(e,t),delete this.cache[t])},_storeDatumChange:function(t,e,o,i){var n=this._rowIdentities[this.store.getIdentity(t)],s=this.getRow(n);s[e]=i;var a=this.fields._nameMaps[e];this.notify("DatumChange",[i,n,a])},datumChange:function(t,e,o){if(this._canWrite){var i=this.getRow(e),n=this.fields._nameMaps[o+".idx"];this.store.setValue(i.__dojo_data_item,n,t)}else this.notify("DatumChange",arguments)},insertion:function(){console.debug("Insertion",arguments),this.notify("Insertion",arguments),this.notify("Change",arguments)},removal:function(){console.debug("Removal",arguments),this.notify("Removal",arguments),this.notify("Change",arguments)},canSort:function(){return this.clientSort}}));