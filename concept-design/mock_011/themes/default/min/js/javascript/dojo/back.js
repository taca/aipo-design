dojo._hasResource["dojo.back"]||(dojo._hasResource["dojo.back"]=!0,dojo.provide("dojo.back"),function(){function o(){var o=window.location.hash;return"#"==o.charAt(0)&&(o=o.substring(1)),dojo.isMozilla?o:decodeURIComponent(o)}function n(o){o||(o=""),window.location.hash=encodeURIComponent(o),s=history.length}function r(){var o=m.pop();if(o){var n=m[m.length-1];n||0!=m.length||(n=f),n&&(n.kwArgs.back?n.kwArgs.back():n.kwArgs.backButton?n.kwArgs.backButton():n.kwArgs.handle&&n.kwArgs.handle("back")),j.push(o)}}function t(){var o=j.pop();o&&(o.kwArgs.forward?o.kwArgs.forward():o.kwArgs.forwardButton?o.kwArgs.forwardButton():o.kwArgs.handle&&o.kwArgs.handle("forward"),m.push(o))}function e(o,n,r){return{url:o,kwArgs:n,urlHash:r}}function i(o){var n=o.split("?");return n.length<2?null:n[1]}function a(){var o=(djConfig.dojoIframeHistoryUrl||dojo.moduleUrl("dojo","resources/iframe_history.html"))+"?"+(new Date).getTime();return k=!0,w&&(dojo.isSafari?w.location=o:window.frames[w.name].location=o),o}function d(){if(!v){var n=m.length,e=o();if((e===u||window.location.href==h)&&1==n)return r(),void 0;if(j.length>0&&j[j.length-1].urlHash===e)return t(),void 0;if(n>=2&&m[n-2]&&m[n-2].urlHash===e)return r(),void 0;if(dojo.isSafari&&dojo.isSafari<3){var i=history.length;i>s?t():s>i&&r(),s=i}}}var l=dojo.back;dojo.exists("tests.back-hash")&&(l.getHash=o,l.setHash=n);var s,h="undefined"!=typeof window?window.location.href:"",u="undefined"!=typeof window?o():"",f=null,c=null,g=null,w=null,j=[],m=[],k=!1,v=!1;l.goBack=r,l.goForward=t,l.init=function(){if(!dojo.byId("dj_history")){var o=djConfig.dojoIframeHistoryUrl||dojo.moduleUrl("dojo","resources/iframe_history.html");document.write('<iframe style="border:0;width:1px;height:1px;position:absolute;visibility:hidden;bottom:0;right:0;" name="dj_history" id="dj_history" src="'+o+'"></iframe>')}},l.setInitialState=function(o){f=e(h,o,u)},l.addToHistory=function(r){j=[];var t=null,i=null;if(w||(djConfig.useXDomain&&!djConfig.dojoIframeHistoryUrl&&console.debug("dojo.back: When using cross-domain Dojo builds, please save iframe_history.html to your domain and set djConfig.dojoIframeHistoryUrl to the path on your domain to iframe_history.html"),w=window.frames.dj_history),g||(g=document.createElement("a"),dojo.body().appendChild(g),g.style.display="none"),r.changeUrl){if(t=""+(r.changeUrl!==!0?r.changeUrl:(new Date).getTime()),0==m.length&&f.urlHash==t)return f=e(i,r,t),void 0;if(m.length>0&&m[m.length-1].urlHash==t)return m[m.length-1]=e(i,r,t),void 0;if(v=!0,setTimeout(function(){n(t),v=!1},1),g.href=t,dojo.isIE){i=a();var l=r.back||r.backButton||r.handle,s=function(r){""!=o()&&setTimeout(function(){n(t)},1),l.apply(this,[r])};r.back?r.back=s:r.backButton?r.backButton=s:r.handle&&(r.handle=s);var h=r.forward||r.forwardButton||r.handle,u=function(r){""!=o()&&n(t),h&&h.apply(this,[r])};r.forward?r.forward=u:r.forwardButton?r.forwardButton=u:r.handle&&(r.handle=u)}else dojo.isIE||c||(c=setInterval(d,200))}else i=a();m.push(e(i,r,t))},l._iframeLoaded=function(o,n){var e=i(n.href);return null==e?(1==m.length&&r(),void 0):k?(k=!1,void 0):(m.length>=2&&e==i(m[m.length-2].url)?r():j.length>0&&e==i(j[j.length-1].url)&&t(),void 0)}}());