dojo._xdResourceLoaded({depends:[["provide","dojo.back"]],defineResource:function(o){o._hasResource["dojo.back"]||(o._hasResource["dojo.back"]=!0,o.provide("dojo.back"),function(){function n(){var n=window.location.hash;return"#"==n.charAt(0)&&(n=n.substring(1)),o.isMozilla?n:decodeURIComponent(n)}function r(o){o||(o=""),window.location.hash=encodeURIComponent(o),u=history.length}function e(){var o=v.pop();if(o){var n=v[v.length-1];n||0!=v.length||(n=c),n&&(n.kwArgs.back?n.kwArgs.back():n.kwArgs.backButton?n.kwArgs.backButton():n.kwArgs.handle&&n.kwArgs.handle("back")),k.push(o)}}function t(){var o=k.pop();o&&(o.kwArgs.forward?o.kwArgs.forward():o.kwArgs.forwardButton?o.kwArgs.forwardButton():o.kwArgs.handle&&o.kwArgs.handle("forward"),v.push(o))}function i(o,n,r){return{url:o,kwArgs:n,urlHash:r}}function a(o){var n=o.split("?");return n.length<2?null:n[1]}function d(){var n=(djConfig.dojoIframeHistoryUrl||o.moduleUrl("dojo","resources/iframe_history.html"))+"?"+(new Date).getTime();return b=!0,m&&(o.isSafari?m.location=n:window.frames[m.name].location=n),n}function s(){if(!p){var r=v.length,i=n();if((i===f||window.location.href==h)&&1==r)return e(),void 0;if(k.length>0&&k[k.length-1].urlHash===i)return t(),void 0;if(r>=2&&v[r-2]&&v[r-2].urlHash===i)return e(),void 0;if(o.isSafari&&o.isSafari<3){var a=history.length;a>u?t():u>a&&e(),u=a}}}var l=o.back;o.exists("tests.back-hash")&&(l.getHash=n,l.setHash=r);var u,h="undefined"!=typeof window?window.location.href:"",f="undefined"!=typeof window?n():"",c=null,g=null,w=null,m=null,k=[],v=[],b=!1,p=!1;l.goBack=e,l.goForward=t,l.init=function(){if(!o.byId("dj_history")){var n=djConfig.dojoIframeHistoryUrl||o.moduleUrl("dojo","resources/iframe_history.html");document.write('<iframe style="border:0;width:1px;height:1px;position:absolute;visibility:hidden;bottom:0;right:0;" name="dj_history" id="dj_history" src="'+n+'"></iframe>')}},l.setInitialState=function(o){c=i(h,o,f)},l.addToHistory=function(e){k=[];var t=null,a=null;if(m||(djConfig.useXDomain&&!djConfig.dojoIframeHistoryUrl&&console.debug("dojo.back: When using cross-domain Dojo builds, please save iframe_history.html to your domain and set djConfig.dojoIframeHistoryUrl to the path on your domain to iframe_history.html"),m=window.frames.dj_history),w||(w=document.createElement("a"),o.body().appendChild(w),w.style.display="none"),e.changeUrl){if(t=""+(e.changeUrl!==!0?e.changeUrl:(new Date).getTime()),0==v.length&&c.urlHash==t)return c=i(a,e,t),void 0;if(v.length>0&&v[v.length-1].urlHash==t)return v[v.length-1]=i(a,e,t),void 0;if(p=!0,setTimeout(function(){r(t),p=!1},1),w.href=t,o.isIE){a=d();var l=e.back||e.backButton||e.handle,u=function(o){""!=n()&&setTimeout(function(){r(t)},1),l.apply(this,[o])};e.back?e.back=u:e.backButton?e.backButton=u:e.handle&&(e.handle=u);var h=e.forward||e.forwardButton||e.handle,f=function(o){""!=n()&&r(t),h&&h.apply(this,[o])};e.forward?e.forward=f:e.forwardButton?e.forwardButton=f:e.handle&&(e.handle=f)}else o.isIE||g||(g=setInterval(s,200))}else a=d();v.push(i(a,e,t))},l._iframeLoaded=function(o,n){var r=a(n.href);return null==r?(1==v.length&&e(),void 0):b?(b=!1,void 0):(v.length>=2&&r==a(v[v.length-2].url)?e():k.length>0&&r==a(k[k.length-1].url)&&t(),void 0)}}())}});