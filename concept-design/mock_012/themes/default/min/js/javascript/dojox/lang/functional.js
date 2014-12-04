dojo._hasResource["dojox.lang.functional"]||(dojo._hasResource["dojox.lang.functional"]=!0,dojo.provide("dojox.lang.functional"),function(){var n=dojo,r=dojox.lang.functional,t=/\bfor\b|\bif\b/gm,a={},l="ab".split(/a*/).length>1?String.prototype.split:function(n){var r=this.split.call(this,n),t=n.exec(this);return t&&0==t.index&&r.unshift(""),r},e=function(r){var t=[],a=l.call(r,/\s*->\s*/m);if(a.length>1)for(;a.length;)r=a.pop(),t=a.pop().split(/\s*,\s*|\s+/m),a.length&&a.push("(function("+t+"){return ("+r+")})");else if(r.match(/\b_\b/))t=["_"];else{var e=r.match(/^\s*(?:[+*\/%&|\^\.=<>]|!=)/m),o=r.match(/[+\-*\/%&|\^\.=<>!]\s*$/m);if(e||o)e&&(t.push("$1"),r="$1"+r),o&&(t.push("$2"),r+="$2");else{var u=r.replace(/(?:\b[A-Z]|\.[a-zA-Z_$])[a-zA-Z_$\d]*|[a-zA-Z_$][a-zA-Z_$\d]*:|this|true|false|null|undefined|typeof|instanceof|in|delete|new|void|arguments|decodeURI|decodeURIComponent|encodeURI|encodeURIComponent|escape|eval|isFinite|isNaN|parseFloat|parseInt|unescape|dojo|dijit|dojox|'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"/g,"").match(/([a-z_$][a-z_$\d]*)/gi)||[],i={};n.forEach(u,function(n){n in i||(t.push(n),i[n]=1)})}}return{args:t,body:"return ("+r+");"}},o=function(n){for(var r=n.split(t),a=n.match(t),l=["var r = [];"],e=[],o=0;o<a.length;){var u=a[o],i=r[++o];"for"!=u||/^\s*\(\s*(;|var)/.test(i)||(i=i.replace(/^\s*\(/,"(var ")),l.push(u,i,"{"),e.push("}")}return l.join("")+"r.push("+r[0]+");"+e.join("")+"return r;"},u=function(n){return function(){return arguments.length+n.args.length<n.arity?u({func:n.func,arity:n.arity,args:Array.prototype.concat.apply(n.args,arguments)}):n.func.apply(this,Array.prototype.concat.apply(n.args,arguments))}},i=function(n){return n},c=function(n){return n.length?function(){var t=n.length-1,a=r.lambda(n[t]).apply(this,arguments);for(--t;t>=0;--t)a=r.lambda(n[t]).call(this,a);return a}:i};n.mixin(r,{buildLambda:function(n){return n=e(n),"function("+n.args.join(",")+"){"+n.body+"}"},lambda:function(n){return"function"==typeof n?n:n instanceof Array?c(n):(n=e(n),new Function(n.args,n.body))},repeat:function(t,a,l,e){e=e||n.global,a=r.lambda(a);var o=new Array(t);o[0]=l;for(var u=1;t>u;o[u]=l=a.call(e,l),++u);return o},until:function(t,a,l,e){e=e||n.global,a=r.lambda(a),t=r.lambda(t);for(var o=[];!t.call(e,l);o.push(l),l=a.call(e,l));return o},buildListcomp:function(n){return"function(){"+o(n)+"}"},compileListcomp:function(n){return new Function([],o(n))},listcomp:function(n){return new Function([],o(n))()},foldl:function(t,a,l,e){t="string"==typeof t?t.split(""):t,e=e||n.global,a=r.lambda(a);for(var o=0;o<t.length;l=a.call(e,l,t[o],o,t),++o);return l},foldl1:function(t,a,l){t="string"==typeof t?t.split(""):t,l=l||n.global,a=r.lambda(a);for(var e=t[0],o=1;o<t.length;e=a.call(l,e,t[o],o,t),++o);return e},scanl:function(t,a,l,e){t="string"==typeof t?t.split(""):t,e=e||n.global,a=r.lambda(a);var o=t.length,u=new Array(o+1);u[0]=l;for(var i=0;o>i;l=a.call(e,l,t[i],i,t),u[++i]=l);return u},scanl1:function(t,a,l,e){t="string"==typeof t?t.split(""):t,e=e||n.global,a=r.lambda(a);var o=t.length,u=new Array(o),l=t[0];u[0]=l;for(var i=1;o>i;l=a.call(e,l,t[i],i,t),u[i++]=l);return u},foldr:function(t,a,l,e){t="string"==typeof t?t.split(""):t,e=e||n.global,a=r.lambda(a);for(var o=t.length;o>0;--o,l=a.call(e,l,t[o],o,t));return l},foldr1:function(t,a,l){t="string"==typeof t?t.split(""):t,l=l||n.global,a=r.lambda(a);for(var e=t.length,o=t[e-1],u=e-1;u>0;--u,o=a.call(l,o,t[u],u,t));return o},scanr:function(t,a,l,e){t="string"==typeof t?t.split(""):t,e=e||n.global,a=r.lambda(a);var o=t.length,u=new Array(o+1);u[o]=l;for(var i=o;i>0;--i,l=a.call(e,l,t[i],i,t),u[i]=l);return u},scanr1:function(t,a,l,e){t="string"==typeof t?t.split(""):t,e=e||n.global,a=r.lambda(a);var o=t.length,u=new Array(o),l=t[o-1];u[o-1]=l;for(var i=o-1;i>0;--i,l=a.call(e,l,t[i],i,t),u[i]=l);return u},filter:function(t,a,l){t="string"==typeof t?t.split(""):t,l=l||n.global,a=r.lambda(a);for(var e,o=t.length,u=[],i=0;o>i;++i)e=t[i],a.call(l,e,i,t)&&u.push(e);return u},forEach:function(t,a,l){t="string"==typeof t?t.split(""):t,l=l||n.global,a=r.lambda(a);for(var e=t.length,o=0;e>o;a.call(l,t[o],o,t),++o);},map:function(t,a,l){t="string"==typeof t?t.split(""):t,l=l||n.global,a=r.lambda(a);for(var e=t.length,o=new Array(e),u=0;e>u;o[u]=a.call(l,t[u],u,t),++u);return o},every:function(t,a,l){t="string"==typeof t?t.split(""):t,l=l||n.global,a=r.lambda(a);for(var e=t.length,o=0;e>o;++o)if(!a.call(l,t[o],o,t))return!1;return!0},some:function(t,a,l){t="string"==typeof t?t.split(""):t,l=l||n.global,a=r.lambda(a);for(var e=t.length,o=0;e>o;++o)if(a.call(l,t[o],o,t))return!0;return!1},reduce:function(n,t,a){return arguments.length<3?r.foldl1(n,t):r.foldl(n,t,a)},reduceRight:function(n,t,a){return arguments.length<3?r.foldr1(n,t):r.foldr(n,t,a)},curry:function(n,t){return n=r.lambda(n),t="number"==typeof t?t:n.length,u({func:n,arity:t,args:[]})},arg:{},partial:function(n){var t=arguments,a=new Array(t.length-1),l=[];n=r.lambda(n);for(var e=1;e<t.length;++e){var o=t[e];a[e-1]=o,o==r.arg&&l.push(e-1)}return function(){for(var r=Array.prototype.slice.call(a,0),t=0;t<l.length;++t)r[l[t]]=arguments[t];return n.apply(this,r)}},mixer:function(n,t){return n=r.lambda(n),function(){for(var r=new Array(t.length),a=0;a<t.length;++a)r[a]=arguments[t[a]];return n.apply(this,r)}},flip:function(n){return n=r.lambda(n),function(){var r,t=arguments,a=t.length-1,l=new Array(a+1);for(r=0;a>=r;++r)l[a-r]=t[r];return n.apply(this,l)}},zip:function(){var n,r=arguments[0].length,t=arguments.length;for(n=1;t>n;r=Math.min(r,arguments[n++].length));var a,l=new Array(r);for(n=0;r>n;++n){var e=new Array(t);for(a=0;t>a;e[a]=arguments[a][n],++a);l[n]=e}return l},unzip:function(n){return r.zip.apply(null,n)},constFun:function(n){return function(){return n}},invoke:function(n){return function(r){return r[n].apply(r,Array.prototype.slice.call(arguments,1))}},pluck:function(n){return function(r){return r[n]}},forIn:function(t,l,e){e=e||n.global,l=r.lambda(l);for(var o in t)o in a||l.call(e,t[o],o,t)},forEachReversed:function(t,a,l){t="string"==typeof t?t.split(""):t,l=l||n.global,a=r.lambda(a);for(var e=t.length-1;e>=0;a.call(l,t[e],e,t),--e);}}),dojo.declare("dojox.lang.functional.MaybeMonad",null,{constructor:function(n){arguments.length&&(this.value=n)},bind:function(t,a,l){return"value"in t?(l=l||n.global,a=r.lambda(a),a.call(l,t.value)):new this.constructor},isNothing:function(){return!("value"in this)}}),r.MaybeMonad.returnMonad=function(n){return new r.MaybeMonad(n)},r.MaybeMonad.zero=new r.MaybeMonad}());