dojo._xdResourceLoaded({depends:[["provide","dojo._base.query"],["require","dojo._base.NodeList"]],defineResource:function(n){n._hasResource["dojo._base.query"]||(n._hasResource["dojo._base.query"]=!0,n.provide("dojo._base.query"),n.require("dojo._base.NodeList"),function(){var t=n,r=n.isIE?"children":"childNodes",e=function(n){">"==n.charAt(n.length-1)&&(n+=" *"),n+=" ";for(var r,e=function(r,e){return t.trim(n.slice(r,e))},u=[],i=-1,o=-1,a=-1,f=-1,c=-1,s=-1,l=-1,d="",h="",g=0,p=(n.length,null),v=null,y=function(){if(l>=0){var n=l==g?null:e(l,g).toLowerCase();p[">~+".indexOf(n)<0?"tag":"oper"]=n,l=-1}},m=function(){s>=0&&(p.id=e(s,g).replace(/\\/g,""),s=-1)},x=function(){c>=0&&(p.classes.push(e(c+1,g).replace(/\\/g,"")),c=-1)},b=function(){m(),y(),x()};d=h,h=n.charAt(g);g++)if("\\"!=d)if(p||(r=g,p={query:null,pseudos:[],attrs:[],classes:[],tag:null,oper:null,id:null},l=g),i>=0){if("]"==h){v.attr?v.matchFor=e(a||i+1,g):v.attr=e(i+1,g);var N=v.matchFor;N&&('"'==N.charAt(0)||"'"==N.charAt(0))&&(v.matchFor=N.substring(1,N.length-1)),p.attrs.push(v),v=null,i=a=-1}else if("="==h){var _="|~^$*".indexOf(d)>=0?d:"";v.type=_+h,v.attr=e(i+1,g-_.length),a=g+1}}else o>=0?")"==h&&(f>=0&&(v.value=e(o+1,g)),f=o=-1):"#"==h?(b(),s=g+1):"."==h?(b(),c=g):":"==h?(b(),f=g):"["==h?(b(),i=g,v={}):"("==h?(f>=0&&(v={name:e(f+1,g),value:null},p.pseudos.push(v)),o=g):" "==h&&d!=h&&(b(),f>=0&&p.pseudos.push({name:e(f+1,g)}),p.hasLoops=p.pseudos.length||p.attrs.length||p.classes.length,p.query=e(r,g),p.tag=p.oper?null:p.tag||"*",u.push(p),p=null);return u},u={"*=":function(n,t){return"[contains(@"+n+", '"+t+"')]"},"^=":function(n,t){return"[starts-with(@"+n+", '"+t+"')]"},"$=":function(n,t){return"[substring(@"+n+", string-length(@"+n+")-"+(t.length-1)+")='"+t+"']"},"~=":function(n,t){return"[contains(concat(' ',@"+n+",' '), ' "+t+" ')]"},"|=":function(n,t){return"[contains(concat(' ',@"+n+",' '), ' "+t+"-')]"},"=":function(n,t){return"[@"+n+"='"+t+"']"}},i=function(n,r,e,u){t.forEach(r.attrs,function(t){var r;t.type&&n[t.type]?r=n[t.type](t.attr,t.matchFor):t.attr.length&&(r=e(t.attr)),r&&u(r)})},o=function(n){for(var r=".",o=e(t.trim(n));o.length;){var a,f=o.shift();">"==f.oper?(a="/",f=o.shift()):a="//",r+=a+f.tag,f.id&&(r+="[@id='"+f.id+"'][1]"),t.forEach(f.classes,function(n){var t=n.length,e=" ";"*"==n.charAt(t-1)&&(e="",n=n.substr(0,t-1)),r+="[contains(concat(' ',@class,' '), ' "+n+e+"')]"}),i(u,f,function(n){return"[@"+n+"]"},function(n){r+=n})}return r},a={},f=function(n){if(a[n])return a[n];var r=t.doc,e=o(n),u=function(n){var t,u=[];try{t=r.evaluate(e,n,null,XPathResult.ANY_TYPE,null)}catch(i){console.debug("failure in exprssion:",e,"under:",n),console.debug(i)}for(var o=t.iterateNext();o;)u.push(o),o=t.iterateNext();return u};return a[n]=u},c={},s={},l=function(n,t){return n?t?function(){return n.apply(window,arguments)&&t.apply(window,arguments)}:n:t},d=function(n,t,e,u){var i=u+1,o=t.length==i,a=t[u];if(">"==a.oper){var f=n[r];if(!f||!f.length)return;i++,o=t.length==i;var c,s=g(t[u+1]),l=0;for(f.length;c=f[l];l++)s(c)&&(o?e.push(c):d(c,t,e,i))}var h=L(a)(n);if(o)for(;h.length;)e.push(h.shift());else for(;h.length;)d(h.shift(),t,e,i)},h=function(n,t){for(var r,e=[],u=n.length-1;r=n[u--];)d(r,t,e,0);return e},g=function(n){if(c[n.query])return c[n.query];var t=null;return n.tag&&(t="*"==n.tag?l(t,function(n){return 1==n.nodeType}):l(t,function(t){return 1==t.nodeType&&n.tag==t.tagName.toLowerCase()})),n.id&&(t=l(t,function(t){return 1==t.nodeType&&t.id==n.id})),n.hasLoops&&(t=l(t,N(n))),c[n.query]=t},p=function(n){var t=n.parentNode,r=t.childNodes,e=-1,u=t.firstChild;if(!u)return e;var i=n.__cachedIndex,o=t.__cachedLength;if("number"==typeof o&&o!=r.length||"number"!=typeof i){t.__cachedLength=r.length;var a=1;do u===n&&(e=a),1==u.nodeType&&(u.__cachedIndex=a,a++),u=u.nextSibling;while(u)}else e=i;return e},v="",y=function(n,t){return"class"==t?n.className||v:"for"==t?n.htmlFor||v:n.getAttribute(t,2)||v},m={"*=":function(n,t){return function(r){return y(r,n).indexOf(t)>=0}},"^=":function(n,t){return function(r){return 0==y(r,n).indexOf(t)}},"$=":function(n,t){return function(r){var e=" "+y(r,n);return e.lastIndexOf(t)==e.length-t.length}},"~=":function(n,t){var r=" "+t+" ";return function(t){var e=" "+y(t,n)+" ";return e.indexOf(r)>=0}},"|=":function(n,t){var r=" "+t+"-";return function(e){var u=" "+(e.getAttribute(n,2)||"");return u==t||0==u.indexOf(r)}},"=":function(n,t){return function(r){return y(r,n)==t}}},x={"first-child":function(){return function(n){if(1!=n.nodeType)return!1;for(var t=n.previousSibling;t&&1!=t.nodeType;)t=t.previousSibling;return!t}},"last-child":function(){return function(n){if(1!=n.nodeType)return!1;for(var t=n.nextSibling;t&&1!=t.nodeType;)t=t.nextSibling;return!t}},empty:function(){return function(n){for(var t=n.childNodes,r=n.childNodes.length,e=r-1;e>=0;e--){var u=t[e].nodeType;if(1==u||3==u)return!1}return!0}},not:function(n,t){var r=g(e(t)[0]);return function(n){return!r(n)}},"nth-child":function(n,t){var e=parseInt;if("odd"==t)return function(n){return p(n)%2==1};if("2n"==t||"even"==t)return function(n){return p(n)%2==0};if(0==t.indexOf("0n+")){var u=e(t.substr(3));return function(n){return n.parentNode[r][u-1]===n}}if(t.indexOf("n+")>0&&t.length>3){var i=t.split("n+",2),o=e(i[0]),a=e(i[1]);return function(n){return p(n)%o==a}}if(-1==t.indexOf("n")){var u=e(t);return function(n){return p(n)==u}}}},b=t.isIE?function(n){var t=n.toLowerCase();return function(r){return r[n]||r[t]}}:function(n){return function(t){return t&&t.getAttribute&&t.hasAttribute(n)}},N=function(n){var r=s[n.query]||c[n.query];if(r)return r;var e=null;return n.id&&"*"!=n.tag&&(e=l(e,function(t){return t.tagName.toLowerCase()==n.tag})),t.forEach(n.classes,function(n,t){var r="*"==n.charAt(n.length-1);r&&(n=n.substr(0,n.length-1));var u=new RegExp("(?:^|\\s)"+n+(r?".*":"")+"(?:\\s|$)");e=l(e,function(n){return u.test(n.className)}),e.count=t}),t.forEach(n.pseudos,function(n){x[n.name]&&(e=l(e,x[n.name](n.name,n.value)))}),i(m,n,b,function(n){e=l(e,n)}),e||(e=function(){return!0}),s[n.query]=e},_={},L=function(n){var r=_[n.query];if(r)return r;if(n.id&&!n.hasLoops&&!n.tag)return _[n.query]=function(){return[t.byId(n.id)]};var e,u=N(n);if(n.tag&&n.id&&!n.hasLoops)e=function(){var r=t.byId(n.id);return u(r)?[r]:void 0};else{e=n.hasLoops?function(t){for(var r,e=[],i=0,o=t.getElementsByTagName(n.tag);r=o[i++];)u(r)&&e.push(r);return e}:function(t){for(var r,e=[],u=0,i=t.getElementsByTagName(n.tag);r=i[u++];)e.push(r);return e}}return _[n.query]=e},q={"*":t.isIE?function(n){return n.all}:function(n){return n.getElementsByTagName("*")},">":function(n){for(var t,e=[],u=0,i=n[r];t=i[u++];)1==t.nodeType&&e.push(t);return e}},O=function(n){var r=e(t.trim(n));if(1==r.length){var u=L(r[0]);return u.nozip=!0,u}var i=function(n){var t,e=r.slice(0);return t=">"==e[0].oper?[n]:L(e.shift())(n),h(t,e)};return i},w=document.evaluate&&!t.isSafari?function(n){var t=n.split(" ");return document.evaluate&&-1==n.indexOf(":")&&(t.length>2&&-1==n.indexOf(">")||t.length>3||n.indexOf("[")>=0||1==t.length&&0<=n.indexOf("."))?f(n):O(n)}:O,T=function(n){if(q[n])return q[n];if(0>n.indexOf(","))return q[n]=w(n);var t=n.split(/\s*,\s*/),r=function(n){for(var r,e=0,u=[];r=t[e++];)u=u.concat(w(r,r.indexOf(" "))(n));return u};return q[n]=r},I=0,E=function(n){if(n&&n.nozip)return t.NodeList._wrap(n);var r=new t.NodeList;if(!n)return r;if(n[0]&&r.push(n[0]),n.length<2)return r;I++,n[0]._zipIdx=I;for(var e,u=1;e=n[u];u++)n[u]._zipIdx!=I&&r.push(e),e._zipIdx=I;return r};t.query=function(n,r){return n.constructor==t.NodeList?n:t.isString(n)?(t.isString(r)&&(r=t.byId(r)),E(T(n)(r||t.doc))):new t.NodeList(n)},t._filterQueryResult=function(n,r){for(var u,i=new t.NodeList,o=r?g(e(r)[0]):function(){return!0},a=0;u=n[a];a++)o(u)&&i.push(u);return i}}())}});