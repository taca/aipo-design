dojo._hasResource["dojo.i18n"]||(dojo._hasResource["dojo.i18n"]=!0,dojo.provide("dojo.i18n"),dojo.i18n.getLocalization=function(o,n,e){e=dojo.i18n.normalizeLocale(e);var i=e.split("-"),r=[o,"nls",n].join("."),a=dojo._loadedModules[r];if(a){for(var l,t=i.length;t>0;t--){var d=i.slice(0,t).join("_");if(a[d]){l=a[d];break}}if(l||(l=a.ROOT),l){var c=function(){};return c.prototype=l,new c}}throw new Error("Bundle not found: "+n+" in "+o+" , locale="+e)},dojo.i18n.normalizeLocale=function(o){var n=o?o.toLowerCase():dojo.locale;return"root"==n&&(n="ROOT"),n},dojo.i18n._requireLocalization=function(o,n,e,i){var r=dojo.i18n.normalizeLocale(e),a=[o,"nls",n].join("."),l="";if(i){for(var t=i.split(","),d=0;d<t.length;d++)0==r.indexOf(t[d])&&t[d].length>l.length&&(l=t[d]);l||(l="ROOT")}var c=i?l:r,f=dojo._loadedModules[a],j=null;if(f){if(djConfig.localizationComplete&&f._built)return;var u=c.replace(/-/g,"_"),s=a+"."+u;j=dojo._loadedModules[s]}if(!j){f=dojo.provide(a);var v,h=dojo._getModuleSymbols(o),_=h.concat("nls").join("/");dojo.i18n._searchLocalePath(c,i,function(o){var e=o.replace(/-/g,"_"),r=a+"."+e,l=!1;if(dojo._loadedModules[r])l=!0;else{dojo.provide(r);var t=[_];"ROOT"!=o&&t.push(o),t.push(n);var d=t.join("/")+".js";l=dojo._loadPath(d,null,function(o){var n=function(){};n.prototype=v,f[e]=new n;for(var i in o)f[e][i]=o[i]})}return l&&f[e]?v=f[e]:f[e]=v,i?!0:void 0})}i&&r!=l&&(f[r.replace(/-/g,"_")]=f[l.replace(/-/g,"_")])},function(){var o=djConfig.extraLocale;if(o){!o instanceof Array&&(o=[o]);var n=dojo.i18n._requireLocalization;dojo.i18n._requireLocalization=function(e,i,r,a){if(n(e,i,r,a),!r)for(var l=0;l<o.length;l++)n(e,i,o[l],a)}}}(),dojo.i18n._searchLocalePath=function(o,n,e){o=dojo.i18n.normalizeLocale(o);for(var i=o.split("-"),r=[],a=i.length;a>0;a--)r.push(i.slice(0,a).join("-"));r.push(!1),n&&r.reverse();for(var l=r.length-1;l>=0;l--){var t=r[l]||"ROOT",d=e(t);if(d)break}},dojo.i18n._preloadLocalizations=function(o,n){function e(e){e=dojo.i18n.normalizeLocale(e),dojo.i18n._searchLocalePath(e,!0,function(e){for(var i=0;i<n.length;i++)if(n[i]==e)return dojo.require(o+"_"+e),!0;return!1})}e();for(var i=djConfig.extraLocale||[],r=0;r<i.length;r++)e(i[r])});