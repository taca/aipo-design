dojo._xdResourceLoaded({depends:[["provide","dojo.i18n"]],defineResource:function(o){o._hasResource["dojo.i18n"]||(o._hasResource["dojo.i18n"]=!0,o.provide("dojo.i18n"),o.i18n.getLocalization=function(e,n,i){i=o.i18n.normalizeLocale(i);var r=i.split("-"),a=[e,"nls",n].join("."),l=o._loadedModules[a];if(l){for(var t,c=r.length;c>0;c--){var u=r.slice(0,c).join("_");if(l[u]){t=l[u];break}}if(t||(t=l.ROOT),t){var f=function(){};return f.prototype=t,new f}}throw new Error("Bundle not found: "+n+" in "+e+" , locale="+i)},o.i18n.normalizeLocale=function(e){var n=e?e.toLowerCase():o.locale;return"root"==n&&(n="ROOT"),n},o.i18n._requireLocalization=function(e,n,i,r){var a=o.i18n.normalizeLocale(i),l=[e,"nls",n].join("."),t="";if(r){for(var c=r.split(","),u=0;u<c.length;u++)0==a.indexOf(c[u])&&c[u].length>t.length&&(t=c[u]);t||(t="ROOT")}var f=r?t:a,d=o._loadedModules[l],s=null;if(d){if(djConfig.localizationComplete&&d._built)return;var v=f.replace(/-/g,"_"),h=l+"."+v;s=o._loadedModules[h]}if(!s){d=o.provide(l);var _,p=o._getModuleSymbols(e),g=p.concat("nls").join("/");o.i18n._searchLocalePath(f,r,function(e){var i=e.replace(/-/g,"_"),a=l+"."+i,t=!1;if(o._loadedModules[a])t=!0;else{o.provide(a);var c=[g];"ROOT"!=e&&c.push(e),c.push(n);var u=c.join("/")+".js";t=o._loadPath(u,null,function(o){var e=function(){};e.prototype=_,d[i]=new e;for(var n in o)d[i][n]=o[n]})}return t&&d[i]?_=d[i]:d[i]=_,r?!0:void 0})}r&&a!=t&&(d[a.replace(/-/g,"_")]=d[t.replace(/-/g,"_")])},function(){var e=djConfig.extraLocale;if(e){!e instanceof Array&&(e=[e]);var n=o.i18n._requireLocalization;o.i18n._requireLocalization=function(o,i,r,a){if(n(o,i,r,a),!r)for(var l=0;l<e.length;l++)n(o,i,e[l],a)}}}(),o.i18n._searchLocalePath=function(e,n,i){e=o.i18n.normalizeLocale(e);for(var r=e.split("-"),a=[],l=r.length;l>0;l--)a.push(r.slice(0,l).join("-"));a.push(!1),n&&a.reverse();for(var t=a.length-1;t>=0;t--){var c=a[t]||"ROOT",u=i(c);if(u)break}},o.i18n._preloadLocalizations=function(e,n){function i(i){i=o.i18n.normalizeLocale(i),o.i18n._searchLocalePath(i,!0,function(i){for(var r=0;r<n.length;r++)if(n[r]==i)return o.require(e+"_"+i),!0;return!1})}i();for(var r=djConfig.extraLocale||[],a=0;a<r.length;a++)i(r[a])})}});