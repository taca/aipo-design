dojo._xdResourceLoaded({depends:[["provide","dojox.collections.ArrayList"],["require","dojox.collections._base"]],defineResource:function(t){t._hasResource["dojox.collections.ArrayList"]||(t._hasResource["dojox.collections.ArrayList"]=!0,t.provide("dojox.collections.ArrayList"),t.require("dojox.collections._base"),dojox.collections.ArrayList=function(o){var n=[];o&&(n=n.concat(o)),this.count=n.length,this.add=function(t){n.push(t),this.count=n.length},this.addRange=function(t){if(t.getIterator){for(var o=t.getIterator();!o.atEnd();)this.add(o.get());this.count=n.length}else{for(var e=0;e<t.length;e++)n.push(t[e]);this.count=n.length}},this.clear=function(){n.splice(0,n.length),this.count=0},this.clone=function(){return new dojox.collections.ArrayList(n)},this.contains=function(t){for(var o=0;o<n.length;o++)if(n[o]==t)return!0;return!1},this.forEach=function(o,e){t.forEach(n,o,e)},this.getIterator=function(){return new dojox.collections.Iterator(n)},this.indexOf=function(t){for(var o=0;o<n.length;o++)if(n[o]==t)return o;return-1},this.insert=function(t,o){n.splice(t,0,o),this.count=n.length},this.item=function(t){return n[t]},this.remove=function(t){var o=this.indexOf(t);o>=0&&n.splice(o,1),this.count=n.length},this.removeAt=function(t){n.splice(t,1),this.count=n.length},this.reverse=function(){n.reverse()},this.sort=function(t){t?n.sort(t):n.sort()},this.setByIndex=function(t,o){n[t]=o,this.count=n.length},this.toArray=function(){return[].concat(n)},this.toString=function(t){return n.join(t||",")}})}});