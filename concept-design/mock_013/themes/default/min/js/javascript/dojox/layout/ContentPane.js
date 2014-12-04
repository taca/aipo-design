dojo._hasResource["dojox.layout.ContentPane"]||(dojo._hasResource["dojox.layout.ContentPane"]=!0,dojo.provide("dojox.layout.ContentPane"),dojo.require("dijit.layout.ContentPane"),function(){function e(e,t){return t&&e?(i&&(t=t.replace(i,function(t,o,n,r,s){return o+new dojo._Url(e,"./"+r).toString()+s})),t.replace(a,function(t,o,n,r,s,i){return n?'@import "'+new dojo._Url(e,"./"+n).toString()+'"'+i:"url("+new dojo._Url(e,"./"+s).toString()+")"+i})):void 0}function t(t,o){var n=t||"./";return o.replace(d,function(t,o,r,s,i,a,d,l){return o+(r?r+"="+s+new dojo._Url(n,i).toString()+s:"style="+a+e(n,d)+a)+l})}function o(e){return e.replace(/(?:\s*<!DOCTYPE\s[^>]+>|<title[^>]*>[\s\S]*?<\/title>)/gi,"")}function n(t,o,n){return n.attributes=[],o.replace(/(?:<style([^>]*)>([\s\S]*?)<\/style>|<link\s+(?=[^>]*rel=['"]?stylesheet)([^>]*?href=(['"])([^>]*?)\4[^>\/]*)\/?>)/gi,function(o,r,s,i,a,d){var l,c=(r||i||"").replace(/^\s*([\s\S]*?)\s*$/i,"$1");if(s?l=n.push(t?e(t,s):s):(l=n.push('@import "'+d+'";'),c=c.replace(/\s*(?:rel|href)=(['"])?[^\s]*\1\s*/gi,"")),c){c=c.split(/\s+/);for(var h,p={},u=0,f=c.length;f>u;u++)h=c[u].split("="),p[h[0]]=h[1].replace(/^\s*['"]?([\s\S]*?)['"]?\s*$/,"$1");n.attributes[l-1]=p}return""})}function r(e,t){function o(e){t.downloadRemote&&dojo.xhrGet({url:e,sync:!0,load:function(e){t.code+=e+";"},error:t.errBack})}return t.code="",e.replace(/<script\s*(?![^>]*type=['"]?dojo)(?:[^>]*?(?:src=(['"]?)([^>]*?)\1[^>]*)?)*>([\s\S]*?)<\/script>/gi,function(e,n,r,s){return r?o(r):t.code+=s,""})}function s(e,t){t=t||dojo.doc.body;var o=t.ownerDocument.createElement("script");o.type="text/javascript",t.appendChild(o),o.text=e}if(dojo.isIE)var i=/(AlphaImageLoader\([^)]*?src=(['"]))(?![a-z]+:|\/)([^\r\n;}]+?)(\2[^)]*\)\s*[;}]?)/g;var a=/(?:(?:@import\s*(['"])(?![a-z]+:|\/)([^\r\n;{]+?)\1)|url\(\s*(['"]?)(?![a-z]+:|\/)([^\r\n;]+?)\3\s*\))([a-z, \s]*[;}]?)/g,d=/(<[a-z][a-z0-9]*\s[^>]*)(?:(href|src)=(['"]?)([^>]*?)\3|style=(['"]?)([^>]*?)\5)([^>]*>)/gi;dojo.declare("dojox.layout.ContentPane",dijit.layout.ContentPane,{adjustPaths:!1,cleanContent:!1,renderStyles:!1,executeScripts:!0,scriptHasHooks:!1,constructor:function(){this.ioArgs={},this.ioMethod=dojo.xhrGet,this.onLoadDeferred=new dojo.Deferred,this.onUnloadDeferred=new dojo.Deferred},postCreate:function(){this._setUpDeferreds(),dijit.layout.ContentPane.prototype.postCreate.apply(this,arguments)},onExecError:function(){},setContent:function(){if(!this._isDownloaded)var e=this._setUpDeferreds();return dijit.layout.ContentPane.prototype.setContent.apply(this,arguments),e},cancel:function(){this._xhrDfd&&-1==this._xhrDfd.fired&&(this.onUnloadDeferred=null),dijit.layout.ContentPane.prototype.cancel.apply(this,arguments)},_setUpDeferreds:function(){var e=this,t=function(){e.cancel()},o=e.onLoadDeferred=new dojo.Deferred,n=e._nextUnloadDeferred=new dojo.Deferred;return{cancel:t,addOnLoad:function(e){o.addCallback(e)},addOnUnload:function(e){n.addCallback(e)}}},_onLoadHandler:function(){dijit.layout.ContentPane.prototype._onLoadHandler.apply(this,arguments),this.onLoadDeferred&&this.onLoadDeferred.callback(!0)},_onUnloadHandler:function(){this.isLoaded=!1,this.cancel(),this.onUnloadDeferred&&this.onUnloadDeferred.callback(!0),dijit.layout.ContentPane.prototype._onUnloadHandler.apply(this,arguments),this._nextUnloadDeferred&&(this.onUnloadDeferred=this._nextUnloadDeferred)},_onError:function(e,t){dijit.layout.ContentPane.prototype._onError.apply(this,arguments),this.onLoadDeferred&&this.onLoadDeferred.errback(t)},_prepareLoad:function(){var e=this._setUpDeferreds();return dijit.layout.ContentPane.prototype._prepareLoad.apply(this,arguments),e},_setContent:function(e){var i=[];if(dojo.isString(e)){if(this.adjustPaths&&this.href&&(e=t(this.href,e)),this.cleanContent&&(e=o(e)),(this.renderStyles||this.cleanContent)&&(e=n(this.href,e,i)),this.executeScripts){var a,d=this,l={downloadRemote:!0,errBack:function(e){d._onError.call(d,"Exec",'Error downloading remote script in "'+d.id+'"',e)}};e=r(e,l),a=l.code}var c=this.containerNode||this.domNode,h=post="",p=0;switch(name=c.nodeName.toLowerCase()){case"tr":h="<tr>",post="</tr>",p+=1;case"tbody":case"thead":h="<tbody>"+h,post+="</tbody>",p+=1;case"table":h="<table>"+h,post+="</table>",p+=1}if(p){var u=c.ownerDocument.createElement("div");u.innerHTML=h+e+post;do u=u.firstChild;while(--p);e=u.childNodes}}if(dijit.layout.ContentPane.prototype._setContent.call(this,e),this._styleNodes&&this._styleNodes.length)for(;this._styleNodes.length;)dojo._destroyElement(this._styleNodes.pop());if(this.renderStyles&&i&&i.length&&this._renderStyles(i),this.executeScripts&&a){this.cleanContent&&(a=a.replace(/(<!--|(?:\/\/)?-->|<!\[CDATA\[|\]\]>)/g,"")),this.scriptHasHooks&&(a=a.replace(/_container_(?!\s*=[^=])/g,"dijit.byId('"+this.id+"')"));try{s(a,this.containerNode||this.domNode)}catch(f){this._onError("Exec","Error eval script in "+this.id+", "+f.message,f)}}},_renderStyles:function(e){this._styleNodes=[];for(var t,o,n,r=this.domNode.ownerDocument,s=r.getElementsByTagName("head")[0],i=0,a=e.length;a>i;i++){n=e[i],o=e.attributes[i],t=r.createElement("style"),t.setAttribute("type","text/css");for(var d in o)t.setAttribute(d,o[d]);this._styleNodes.push(t),s.appendChild(t),t.styleSheet?t.styleSheet.cssText=n:t.appendChild(r.createTextNode(n))}}})}());