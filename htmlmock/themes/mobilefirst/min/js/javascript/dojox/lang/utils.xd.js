dojo._xdResourceLoaded({depends:[["provide","dojox.lang.utils"]],defineResource:function(dojo){dojo._hasResource["dojox.lang.utils"]||(dojo._hasResource["dojox.lang.utils"]=!0,dojo.provide("dojox.lang.utils"),function(){var empty={},du=dojox.lang.utils;dojo.mixin(dojox.lang.utils,{coerceType:function(target,source){switch(typeof target){case"number":return Number(eval("("+source+")"));case"string":return String(source);case"boolean":return Boolean(eval("("+source+")"))}return eval("("+source+")")},updateWithObject:function(e,o,r){if(!o)return e;for(var n in e)if(n in o&&!(n in empty)){var t=e[n];t&&"object"==typeof t?du.updateObject(t,o[n]):e[n]=r?du.coerceType(t,o[n]):dojo.clone(o[n])}return e},updateWithPattern:function(e,o,r,n){if(!o||!r)return e;for(var t in r)t in o&&!(t in empty)&&(e[t]=n?du.coerceType(r[t],o[t]):dojo.clone(o[t]));return e}})}())}});