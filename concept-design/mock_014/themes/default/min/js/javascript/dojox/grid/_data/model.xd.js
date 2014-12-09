dojo._xdResourceLoaded({depends:[["provide","dojox.grid._data.model"],["require","dojox.grid._data.fields"]],defineResource:function(t){t._hasResource["dojox.grid._data.model"]||(t._hasResource["dojox.grid._data.model"]=!0,t.provide("dojox.grid._data.model"),t.require("dojox.grid._data.fields"),t.declare("dojox.grid.data.Model",null,{constructor:function(t,e){this.observers=[],this.fields=new dojox.grid.data.Fields,t&&this.fields.set(t),this.setData(e)},count:0,updating:0,observer:function(t,e){this.observers.push({o:t,p:e||"model"})},notObserver:function(t){for(var e,i=0;e=this.observers[i];i++)if(e.o==t)return this.observers.splice(i,1),void 0},notify:function(t,e){if(!this.isUpdating())for(var i,o,n=e||[],a=0;o=this.observers[a];a++)i=o.p+t,o=o.o,i in o&&o[i].apply(o,n)},clear:function(){this.fields.clear(),this.clearData()},beginUpdate:function(){this.updating++},endUpdate:function(){this.updating&&this.updating--},isUpdating:function(){return Boolean(this.updating)},clearData:function(){this.setData(null)},change:function(){this.notify("Change",arguments)},insertion:function(){this.notify("Insertion",arguments),this.notify("Change",arguments)},removal:function(){this.notify("Removal",arguments),this.notify("Change",arguments)},insert:function(){return this._insert.apply(this,arguments)?(this.insertion.apply(this,t._toArray(arguments,1)),!0):!1},remove:function(){return this._remove.apply(this,arguments)?(this.removal.apply(this,arguments),!0):!1},canSort:function(){return null!=this.sort},makeComparator:function(t){for(var e,i,o,n=null,a=t.length-1;a>=0;a--)e=t[a],i=Math.abs(e)-1,i>=0&&(o=this.fields.get(i),n=this.generateComparator(o.compare,o.key,e>0,n));return n},sort:null,dummy:0}),t.declare("dojox.grid.data.Rows",dojox.grid.data.Model,{allChange:function(){this.notify("AllChange",arguments),this.notify("Change",arguments)},rowChange:function(){this.notify("RowChange",arguments)},datumChange:function(){this.notify("DatumChange",arguments)},beginModifyRow:function(t){this.cache[t]||(this.cache[t]=this.copyRow(t))},endModifyRow:function(t){var e=this.cache[t];if(e){var i=this.getRow(t);dojox.grid.arrayCompare(e,i)||this.update(e,i,t),delete this.cache[t]}},cancelModifyRow:function(t){var e=this.cache[t];e&&(this.setRow(e,t),delete this.cache[t])},generateComparator:function(t,e,i,o){return function(n,a){var s=t(n[e],a[e]);return s?i?s:-s:o&&o(n,a)}}}),t.declare("dojox.grid.data.Table",dojox.grid.data.Rows,{constructor:function(){this.cache=[]},colCount:0,data:null,cache:null,measure:function(){this.count=this.getRowCount(),this.colCount=this.getColCount(),this.allChange()},getRowCount:function(){return this.data?this.data.length:0},getColCount:function(){return this.data&&this.data.length?this.data[0].length:this.fields.count()},badIndex:function(){console.debug("dojox.grid.data.Table: badIndex")},isGoodIndex:function(t,e){return t>=0&&t<this.count&&(arguments.length<2||e>=0&&e<this.colCount)},getRow:function(t){return this.data[t]},copyRow:function(t){return this.getRow(t).slice(0)},getDatum:function(t,e){return this.data[t][e]},get:function(){throw'Plain "get" no longer supported. Use "getRow" or "getDatum".'},setData:function(t){this.data=t||[],this.allChange()},setRow:function(t,e){this.data[e]=t,this.rowChange(t,e),this.change()},setDatum:function(t,e,i){this.data[e][i]=t,this.datumChange(t,e,i)},set:function(){throw'Plain "set" no longer supported. Use "setData", "setRow", or "setDatum".'},setRows:function(t,e){for(var i=0,o=t.length,n=e;o>i;i++,n++)this.setRow(t[i],n)},update:function(){return!0},_insert:function(t,e){return dojox.grid.arrayInsert(this.data,e,t),this.count++,!0},_remove:function(t){for(var e=t.length-1;e>=0;e--)dojox.grid.arrayRemove(this.data,t[e]);return this.count-=t.length,!0},sort:function(){this.data.sort(this.makeComparator(arguments))},swap:function(t,e){dojox.grid.arraySwap(this.data,t,e),this.rowChange(this.getRow(t),t),this.rowChange(this.getRow(e),e),this.change()},dummy:0}),t.declare("dojox.grid.data.Objects",dojox.grid.data.Table,{constructor:function(t){t||this.autoAssignFields()},autoAssignFields:function(){var t=this.data[0],e=0;for(var i in t)this.fields.get(e++).key=i},getDatum:function(t,e){return this.data[t][this.fields.get(e).key]}}),t.declare("dojox.grid.data.Dynamic",dojox.grid.data.Table,{constructor:function(){this.page=[],this.pages=[]},page:null,pages:null,rowsPerPage:100,requests:0,bop:-1,eop:-1,clearData:function(){this.pages=[],this.bop=this.eop=-1,this.setData([])},getRowCount:function(){return this.count},getColCount:function(){return this.fields.count()},setRowCount:function(t){this.count=t,this.change()},requestsPending:function(){},rowToPage:function(t){return this.rowsPerPage?Math.floor(t/this.rowsPerPage):t},pageToRow:function(t){return this.rowsPerPage?this.rowsPerPage*t:t},requestRows:function(){},rowsProvided:function(){this.requests--,0==this.requests&&this.requestsPending(!1)},requestPage:function(e){var i=this.pageToRow(e),o=Math.min(this.rowsPerPage,this.count-i);o>0&&(this.requests++,this.requestsPending(!0),setTimeout(t.hitch(this,"requestRows",i,o),1))},needPage:function(t){this.pages[t]||(this.pages[t]=!0,this.requestPage(t))},preparePage:function(t){if(t<this.bop||t>=this.eop){var e=this.rowToPage(t);this.needPage(e),this.bop=e*this.rowsPerPage,this.eop=this.bop+(this.rowsPerPage||this.count)}},isRowLoaded:function(t){return Boolean(this.data[t])},removePages:function(t){for(var e,i=0;void 0!=(e=t[i]);i++)this.pages[this.rowToPage(e)]=!1;this.bop=this.eop=-1},remove:function(t){this.removePages(t),dojox.grid.data.Table.prototype.remove.apply(this,arguments)},getRow:function(t){var e=this.data[t];return e||this.preparePage(t),e},getDatum:function(t,e){var i=this.getRow(t);return i?i[e]:this.fields.get(e).na},setDatum:function(t,e,i){var o=this.getRow(e);o?(o[i]=t,this.datumChange(t,e,i)):console.debug("["+this.declaredClass+"] dojox.grid.data.dynamic.set: cannot set data on an non-loaded row")},canSort:function(){return!1}}),dojox.grid.data.table=dojox.grid.data.Table,dojox.grid.data.dynamic=dojox.grid.data.Dyanamic,t.declare("dojox.grid.data.DojoData",dojox.grid.data.Dynamic,{constructor:function(e,i,o){if(this.count=1,this._rowIdentities={},o&&t.mixin(this,o),this.store){var n=this.store.getFeatures();this._canNotify=n["dojo.data.api.Notification"],this._canWrite=n["dojo.data.api.Write"],this._canNotify&&t.connect(this.store,"onSet",this,"_storeDatumChange")}},markupFactory:function(t){return new dojox.grid.data.DojoData(null,null,t)},query:{name:"*"},store:null,_canNotify:!1,_canWrite:!1,_rowIdentities:{},clientSort:!1,setData:function(t){this.store=t,this.data=[],this.allChange()},setRowCount:function(t){this.count=t,this.allChange()},beginReturn:function(t){this.count!=t&&this.setRowCount(t)},_setupFields:function(e){if(!this.fields._nameMaps){var i={},o=t.map(this.store.getAttributes(e),function(t,e){return i[t]=e,i[e+".idx"]=t,{name:t,key:t}},this);this.fields._nameMaps=i,this.fields.set(o),this.notify("FieldsChange")}},_getRowFromItem:function(){},processRows:function(e,i){e&&(this._setupFields(e[0]),t.forEach(e,function(e,o){var n={};n.__dojo_data_item=e,t.forEach(this.fields.values,function(t){n[t.name]=this.store.getValue(e,t.name)||""},this),this._rowIdentities[this.store.getIdentity(e)]=i.start+o,this.setRow(n,i.start+o)},this))},requestRows:function(e){var i=e||0,o={start:i,count:this.rowsPerPage,query:this.query,onBegin:t.hitch(this,"beginReturn"),onComplete:t.hitch(this,"processRows")};this.store.fetch(o)},getDatum:function(t,e){var i=this.getRow(t),o=this.fields.values[e];return i&&o?i[o.name]:o?o.na:"?"},setDatum:function(t,e,i){var o=this.fields._nameMaps[i+".idx"];o&&(this.data[e][o]=t,this.datumChange(t,e,i))},copyRow:function(t){var e={},i={},o=this.getRow(t);for(var n in o)o[n]!=i[n]&&(e[n]=o[n]);return e},_attrCompare:function(e,i){return t.forEach(this.fields.values,function(t){return e[t.name]!=i[t.name]?!1:void 0},this),!0},endModifyRow:function(t){var e=this.cache[t];if(e){var i=this.getRow(t);this._attrCompare(e,i)||this.update(e,i,t),delete this.cache[t]}},cancelModifyRow:function(t){var e=this.cache[t];e&&(this.setRow(e,t),delete this.cache[t])},_storeDatumChange:function(t,e,i,o){var n=this._rowIdentities[this.store.getIdentity(t)],a=this.getRow(n);a[e]=o;var s=this.fields._nameMaps[e];this.notify("DatumChange",[o,n,s])},datumChange:function(t,e,i){if(this._canWrite){var o=this.getRow(e),n=this.fields._nameMaps[i+".idx"];this.store.setValue(o.__dojo_data_item,n,t)}else this.notify("DatumChange",arguments)},insertion:function(){console.debug("Insertion",arguments),this.notify("Insertion",arguments),this.notify("Change",arguments)},removal:function(){console.debug("Removal",arguments),this.notify("Removal",arguments),this.notify("Change",arguments)},canSort:function(){return this.clientSort}}))}});