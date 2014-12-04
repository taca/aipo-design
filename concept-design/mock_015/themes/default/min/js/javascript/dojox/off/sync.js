dojo._hasResource["dojox.off.sync"]||(dojo._hasResource["dojox.off.sync"]=!0,dojo.provide("dojox.off.sync"),dojo.require("dojox.storage.GearsStorageProvider"),dojo.require("dojox.off._common"),dojo.require("dojox.off.files"),dojo.mixin(dojox.off.sync,{isSyncing:!1,cancelled:!1,successful:!0,details:[],error:!1,actions:null,autoSync:!0,onSync:function(){},synchronize:function(){this.isSyncing||dojox.off.goingOnline||!dojox.off.isOnline||(this.isSyncing=!0,this.successful=!1,this.details=[],this.cancelled=!1,this.start())},cancel:function(){this.isSyncing&&(this.cancelled=!0,dojox.off.files.refreshing&&dojox.off.files.abortRefresh(),this.onSync("cancel"))},finishedDownloading:function(i,o){"undefined"==typeof i&&(i=!0),i||(this.successful=!1,this.details.push(o),this.error=!0),this.finished()},start:function(){return this.cancelled?(this.finished(),void 0):(this.onSync("start"),this.refreshFiles(),void 0)},refreshFiles:function(){return this.cancelled?(this.finished(),void 0):(this.onSync("refreshFiles"),dojox.off.files.refresh(dojo.hitch(this,function(i,o){if(i){this.error=!0,this.successful=!1;for(var n=0;n<o.length;n++)this.details.push(o[n])}this.upload()})),void 0)},upload:function(){return this.cancelled?(this.finished(),void 0):(this.onSync("upload"),dojo.connect(this.actions,"onReplayFinished",this,this.download),this.actions.replay(),void 0)},download:function(){return this.cancelled?(this.finished(),void 0):(this.onSync("download"),void 0)},finished:function(){this.isSyncing=!1,this.successful=!this.cancelled&&!this.error,this.onSync("finished")},_save:function(i){this.actions._save(function(){i()})},_load:function(i){this.actions._load(function(){i()})}}),dojo.declare("dojox.off.sync.ActionLog",null,{entries:[],reasonHalted:null,isReplaying:!1,autoSave:!0,add:function(i){if(this.isReplaying)throw"Programming error: you can not call dojox.off.sync.actions.add() while we are replaying an action log";this.entries.push(i),this.autoSave&&this._save()},onReplay:function(){},length:function(){return this.entries.length},haltReplay:function(i){if(this.isReplaying)if(i&&(this.reasonHalted=i.toString()),this.autoSave){var o=this;this._save(function(){o.isReplaying=!1,o.onReplayFinished()})}else this.isReplaying=!1,this.onReplayFinished()},continueReplay:function(){if(this.isReplaying){if(this.entries.shift(),!this.entries.length){if(this.autoSave){var i=this;return this._save(function(){i.isReplaying=!1,i.onReplayFinished()}),void 0}return this.isReplaying=!1,this.onReplayFinished(),void 0}var o=this.entries[0];this.onReplay(o,this)}},clear:function(){this.isReplaying||(this.entries=[],this.autoSave&&this._save())},replay:function(){if(!this.isReplaying){if(this.reasonHalted=null,!this.entries.length)return this.onReplayFinished(),void 0;this.isReplaying=!0;var i=this.entries[0];this.onReplay(i,this)}},onReplayFinished:function(){},toString:function(){var i="";i+="[";for(var o=0;o<this.entries.length;o++){i+="{";for(var n in this.entries[o])i+=n+': "'+this.entries[o][n]+'"',i+=", ";i+="}, "}return i+="]"},_save:function(i){i||(i=function(){});try{var o=function(o,n,s){o==dojox.storage.FAILED?(dojox.off.onFrameworkEvent("save",{status:dojox.storage.FAILED,isCoreSave:!0,key:n,value:s,namespace:dojox.off.STORAGE_NAMESPACE}),i()):o==dojox.storage.SUCCESS&&i()};dojox.storage.put("actionlog",this.entries,o,dojox.off.STORAGE_NAMESPACE)}catch(n){console.debug("dojox.off.sync._save: "+n.message||n),dojox.off.onFrameworkEvent("save",{status:dojox.storage.FAILED,isCoreSave:!0,key:"actionlog",value:this.entries,namespace:dojox.off.STORAGE_NAMESPACE}),i()}},_load:function(i){var o=dojox.storage.get("actionlog",dojox.off.STORAGE_NAMESPACE);o||(o=[]),this.entries=o,i()}}),dojox.off.sync.actions=new dojox.off.sync.ActionLog);