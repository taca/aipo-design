dojo._xdResourceLoaded({depends:[["provide","dojox.string.tokenize"]],defineResource:function(e){e._hasResource["dojox.string.tokenize"]||(e._hasResource["dojox.string.tokenize"]=!0,e.provide("dojox.string.tokenize"),dojox.string.tokenize=function(e,o,n,s){for(var t,i,d=[],r=0;t=o.exec(e);){if(i=e.substring(r,o.lastIndex-t[0].length),i.length&&d.push(i),n){var u=n.apply(s,t.slice(1));"undefined"!=typeof u&&d.push(u)}r=o.lastIndex}return i=e.substr(r),i.length&&d.push(i),d})}});