dojo._hasResource["dojox.dtl.html"]||(dojo._hasResource["dojox.dtl.html"]=!0,dojo.provide("dojox.dtl.html"),dojo.require("dojox.dtl._base"),dojox.dtl.ObjectMap=function(){this.contents=[]},dojo.extend(dojox.dtl.ObjectMap,{get:function(t){for(var e,n=this.contents,o=0;e=n[o];o++)if(e[0]===t)return e[1]},put:function(t,e){for(var n,o=this.contents,r=0;n=o[r];r++)if(n[0]===t)return 1==arguments.length?(o.splice(r,1),void 0):(n[1]=e,void 0);o.push([t,e])},toString:function(){return"dojox.dtl.ObjectMap"}}),dojox.dtl.html={types:dojo.mixin({change:-11,attr:-12,elem:1,text:3},dojox.dtl.text.types),_attributes:{},_re:/(^\s+|\s+$)/g,_re2:/\b([a-zA-Z]+)="/g,_re3:/<!--({({|%).*?(%|})})-->/g,_re4:/^function anonymous\(\)\s*{\s*(.*)\s*}$/,_trim:function(t){return t.replace(this._re,"")},getTemplate:function(t){if("undefined"==typeof this._commentable){this._commentable=!1;var e=document.createElement("div");e.innerHTML="<!--Test comment handling, and long comments, using comments whenever possible.-->",e.childNodes.length&&8==e.childNodes[0].nodeType&&"comment"==e.childNodes[0].data&&(this._commentable=!0)}this._commentable||(t=t.replace(this._re3,"$1"));for(var n;n=this._re2.exec(t);)this._attributes[n[1]]=!0;var e=document.createElement("div");e.innerHTML=t;for(var o={pres:[],posts:[]};e.childNodes.length;)o.node||1!=e.childNodes[0].nodeType?o.node?o.posts.push(e.removeChild(e.childNodes[0])):o.pres.push(e.removeChild(e.childNodes[0])):o.node=e.removeChild(e.childNodes[0]);if(!o.node)throw new Error("Template did not provide any content");return o},tokenize:function(t,e,n,o){e=e||[];for(var r,i=!e.length,s=this.types,d=[],h=0;r=t.childNodes[h];h++)d.push(r);if(n)for(var r,h=0;r=n[h];h++)this._tokenize(t,r,e);e.push([s.elem,t]),e.push([s.change,t]);for(var a in this._attributes){var l="";if("class"==a)l=t.className||l;else if("for"==a)l=t.htmlFor||l;else if(t.getAttribute&&(l=t.getAttribute(a,2)||l,"href"==a||"src"==a)){if(dojo.isIE){var u=location.href.lastIndexOf(location.hash),c=location.href.substring(0,u).split("/");c.pop(),c=c.join("/")+"/",0==l.indexOf(c)&&(l=l.replace(c,"")),l=l.replace(/%20/g," ").replace(/%7B/g,"{").replace(/%7D/g,"}").replace(/%25/g,"%")}(-1!=l.indexOf("{%")||-1!=l.indexOf("{{"))&&t.setAttribute(a,"")}"function"==typeof l&&(l=l.toString().replace(this._re4,"$1")),"string"==typeof l&&(-1!=l.indexOf("{%")||-1!=l.indexOf("{{")||l&&dojox.dtl.text.getTag("attr:"+a,!0))&&e.push([s.attr,t,a,l])}if(!d.length){if(e.push([s.change,t.parentNode,!0]),o)for(var r,h=0;r=o[h];h++)this._tokenize(t,r,e);return e}for(var r,h=0;r=d[h];h++)this._tokenize(t,r,e);if(t.parentNode&&t.parentNode.tagName&&(e.push([s.change,t.parentNode,!0]),t.parentNode.removeChild(t)),o)for(var r,h=0;r=o[h];h++)this._tokenize(t,r,e);return i&&e.push([s.change,t,!0]),e},_tokenize:function(t,e,n){var o=this.types,r=e.data;switch(e.nodeType){case 1:this.tokenize(e,n);break;case 3:if(r.match(/[^\s\n]/))if(-1!=r.indexOf("{{")||-1!=r.indexOf("{%"))for(var i,s=dojox.dtl.text.tokenize(r),d=0;i=s[d];d++)"string"==typeof i?n.push([o.text,i]):n.push(i);else n.push([e.nodeType,e]);e.parentNode&&e.parentNode.removeChild(e);break;case 8:0==r.indexOf("{%")&&n.push([o.tag,this._trim(r.substring(2,r.length-3))]),0==r.indexOf("{{")&&n.push([o.varr,this._trim(r.substring(2,r.length-3))]),e.parentNode&&e.parentNode.removeChild(e)}}},dojox.dtl.HtmlTemplate=function(t){var e=dojox.dtl,n=e.html;t.node||("object"==typeof t&&(t=dojox.dtl.text.getTemplateString(t)),t=n.getTemplate(t));var o=n.tokenize(t.node,[],t.pres,t.posts),r=new e.HtmlParser(o);this.nodelist=r.parse()},dojo.extend(dojox.dtl.HtmlTemplate,{_count:0,_re:/\bdojo:([a-zA-Z0-9_]+)\b/g,setClass:function(t){this.getRootNode().className=t},getRootNode:function(){return this.rootNode},getBuffer:function(){return new dojox.dtl.HtmlBuffer},render:function(t,e){e=e||this.getBuffer(),this.rootNode=null;var n=dojo.connect(e,"onSetParent",this,function(t){this.rootNode||(this.rootNode=t||!0)}),o=this.nodelist.render(t||new dojox.dtl.Context({}),e);return dojo.disconnect(n),e._flushCache(),o},unrender:function(t,e){return this.nodelist.unrender(t,e)},toString:function(){return"dojox.dtl.HtmlTemplate"}}),dojox.dtl.HtmlBuffer=function(t){this._parent=t,this._cache=[]},dojo.extend(dojox.dtl.HtmlBuffer,{concat:function(t){if(!this._parent)return this;if(t.nodeType){var e=this._getCache(this._parent);if(t.parentNode===this._parent){for(var n,o=0,o=0;n=e[o];o++)this.onAddNode(t),this._parent.insertBefore(n,t);e.length=0}t.parentNode&&t.parentNode.tagName||(this._parent.childNodes.length?e.push(t):(this.onAddNode(t),this._parent.appendChild(t)))}return this},remove:function(t){return"string"==typeof t?this._parent.removeAttribute(t):t.parentNode===this._parent&&(this.onRemoveNode(),this._parent.removeChild(t)),this},setAttribute:function(t,e){return"class"==t?this._parent.className=e:"for"==t?this._parent.htmlFor=e:this._parent.setAttribute&&this._parent.setAttribute(t,e),this},setParent:function(t,e){this._parent||(this._parent=t);var n=this._getCache(this._parent);if(n&&n.length&&e){for(var o,r=0;o=n[r];r++)o===this._parent||o.parentNode&&o.parentNode.tagName||(this.onAddNode(o),this._parent.appendChild(o));n.length=0}return this.onSetParent(t,e),this._parent=t,this},getParent:function(){return this._parent},onSetParent:function(){},onAddNode:function(){},onRemoveNode:function(){},_getCache:function(t){for(var e,n=0;e=this._cache[n];n++)if(e[0]===t)return e[1];var o=[];return this._cache.push([t,o]),o},_flushCache:function(){for(var t,e=0;t=this._cache[e];e++)t[1].length||this._cache.splice(e--,1)},toString:function(){return"dojox.dtl.HtmlBuffer"}}),dojox.dtl.HtmlNode=function(t){this.contents=t},dojo.extend(dojox.dtl.HtmlNode,{render:function(t,e){return e.concat(this.contents)},unrender:function(t,e){return e.remove(this.contents)},clone:function(){return new dojox.dtl.HtmlNode(this.contents)},toString:function(){return"dojox.dtl.HtmlNode"}}),dojox.dtl.HtmlNodeList=function(t){this.contents=t||[]},dojo.extend(dojox.dtl.HtmlNodeList,{parents:new dojox.dtl.ObjectMap,push:function(t){this.contents.push(t)},unshift:function(t){this.contents.unshift(t)},render:function(t,e,n){if(n)var o=e.getParent();for(var r=0;r<this.contents.length;r++)if(e=this.contents[r].render(t,e),!e)throw new Error("Template node render functions must return their buffer");return o&&e.setParent(o,!0),e},unrender:function(t,e){for(var n=0;n<this.contents.length;n++)if(e=this.contents[n].unrender(t,e),!e)throw new Error("Template node render functions must return their buffer");return e},clone:function(t){for(var e=dojox.dtl,n=(e.html,t.getParent()),o=this.contents,r=new e.HtmlNodeList,i=[],s=0;s<o.length;s++){var d=o[s].clone(t);if(d instanceof e.ChangeNode||d instanceof e.HtmlNode){var h=this.parents.get(d.contents);if(h)d.contents=h;else if(n!==d.contents&&d instanceof e.HtmlNode){var a=d.contents;d.contents=d.contents.cloneNode(!1),i.push(a),this.parents.put(a,d.contents)}}r.push(d)}for(var d,s=0;d=i[s];s++)this.parents.put(d);return r},toString:function(){return"dojox.dtl.HtmlNodeList"}}),dojox.dtl.HtmlVarNode=function(t){this.contents=new dojox.dtl.Filter(t),this._lists={}},dojo.extend(dojox.dtl.HtmlVarNode,{render:function(t,e){this._rendered=!0;var n=dojox.dtl,o=(n.html,this.contents.resolve(t));if(o&&o.render&&o.getRootNode){var r=this._curr=o.getRootNode(),i=this._lists,s=i[r];return s||(s=i[r]=new n.HtmlNodeList,s.push(new n.ChangeNode(e.getParent())),s.push(new n.HtmlNode(r)),s.push(o),s.push(new n.ChangeNode(e.getParent(),!0))),s.render(t,e)}return this._txt||(this._txt=document.createTextNode(o)),this._txt.data!=o&&(this._txt.data=o),e.concat(this._txt)},unrender:function(t,e){if(this._rendered){if(this._rendered=!1,this._curr)return this._lists[this._curr].unrender(t,e);if(this._txt)return e.remove(this._txt)}return e},clone:function(){return new dojox.dtl.HtmlVarNode(this.contents.contents)},toString:function(){return"dojox.dtl.HtmlVarNode"}}),dojox.dtl.ChangeNode=function(t,e){this.contents=t,this._up=e},dojo.extend(dojox.dtl.ChangeNode,{render:function(t,e){return e.setParent(this.contents,this._up)},unrender:function(t,e){return e.setParent(this.contents)},clone:function(){return new dojox.dtl.ChangeNode(this.contents,this._up)},toString:function(){return"dojox.dtl.ChangeNode"}}),dojox.dtl.AttributeNode=function(t,e){this._key=t,this._value=e,this._tpl=new dojox.dtl.Template(e),this.contents=""},dojo.extend(dojox.dtl.AttributeNode,{render:function(t,e){var n=this._key,o=this._tpl.render(t);return this._rendered?o!=this.contents?(this.contents=o,e.setAttribute(n,o)):e:(this._rendered=!0,this.contents=o,e.setAttribute(n,o))},unrender:function(t,e){return this._rendered?(this._rendered=!1,this.contents="",e.remove(this.contents)):e},clone:function(){return new dojox.dtl.AttributeNode(this._key,this._value)},toString:function(){return"dojox.dtl.AttributeNode"}}),dojox.dtl.HtmlTextNode=function(t){this.contents=document.createTextNode(t)},dojo.extend(dojox.dtl.HtmlTextNode,{render:function(t,e){return e.concat(this.contents)},unrender:function(t,e){return e.remove(this.contents)},clone:function(){return new dojox.dtl.HtmlTextNode(this.contents.data)},toString:function(){return"dojox.dtl.HtmlTextNode"}}),dojox.dtl.HtmlParser=function(t){this.contents=t},dojo.extend(dojox.dtl.HtmlParser,{parse:function(t){var e=dojox.dtl,n=e.html,o=n.types,r={},i=this.contents;t||(t=[]);for(var s=0;s<t.length;s++)r[t[s]]=!0;for(var d=new e.HtmlNodeList;i.length;){var h=i.shift(),a=h[0],l=h[1];if(a==o.change)d.push(new e.ChangeNode(l,h[2]));else if(a==o.attr){var u=dojox.dtl.text.getTag("attr:"+h[2],!0);u?d.push(u(null,h[2]+" "+h[3])):d.push(new e.AttributeNode(h[2],h[3]))}else if(a==o.elem){var u=dojox.dtl.text.getTag("node:"+l.tagName.toLowerCase(),!0);u&&d.push(u(null,l,l.tagName.toLowerCase())),d.push(new e.HtmlNode(l))}else if(a==o.varr)d.push(new e.HtmlVarNode(l));else if(a==o.text)d.push(new e.HtmlTextNode(l.data||l));else if(a==o.tag){if(r[l])return i.unshift(h),d;var c=l.split(/\s+/g);if(c.length){c=c[0];var u=dojox.dtl.text.getTag(c);if("function"!=typeof u)throw new Error("Function not found for ",c);var f=u(this,l);f&&d.push(f)}}}if(t.length)throw new Error("Could not find closing tag(s): "+t.toString());return d},next:function(){var t=this.contents.shift();return{type:t[0],text:t[1]}},skipPast:function(t){return dojox.dtl.Parser.prototype.skipPast.call(this,t)},getVarNode:function(){return dojox.dtl.HtmlVarNode},getTextNode:function(){return dojox.dtl.HtmlTextNode},getTemplate:function(t){return new dojox.dtl.HtmlTemplate(dojox.dtl.html.getTemplate(t))},toString:function(){return"dojox.dtl.HtmlParser"}}),dojox.dtl.register.tag("dojox.dtl.tag.event","dojox.dtl.tag.event",[[/(attr:)?on(click|key(up))/i,"on"]]),dojox.dtl.register.tag("dojox.dtl.tag.html","dojox.dtl.tag.html",["html","attr:attach","attr:tstyle"]));