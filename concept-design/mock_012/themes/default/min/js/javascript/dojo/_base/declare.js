dojo._hasResource["dojo._base.declare"]||(dojo._hasResource["dojo._base.declare"]=!0,dojo.provide("dojo._base.declare"),dojo.require("dojo._base.lang"),dojo.declare=function(o,e,t){if(dojo.isFunction(t)||arguments.length>3){dojo.deprecated("dojo.declare: for class '"+o+"' pass initializer function as 'constructor' property instead of as a separate argument.","","1.0");var r=t;t=arguments[3]||{},t.constructor=r}var n=arguments.callee,i=null;if(dojo.isArray(e)&&(i=e,e=i.shift()),i)for(var s,a=0;a<i.length;a++){if(s=i[a],!s)throw"Mixin #"+a+" to declaration of "+o+" is null. It's likely a required module is not loaded.";e=n._delegate(e,s)}var d,c=(t||0).constructor,l=n._delegate(e);for(var a in t)dojo.isFunction(d=t[a])&&!0[a]&&(d.nom=a);return dojo.extend(l,{declaredClass:o,_constructor:c,preamble:null},t||0),l.prototype.constructor=l,dojo.setObject(o,l)},dojo.mixin(dojo.declare,{_delegate:function(o,e){var t=(o||0).prototype,r=(e||0).prototype,n=dojo.declare._makeCtor();return dojo.mixin(n,{superclass:t,mixin:r,extend:dojo.declare._extend}),o&&(n.prototype=dojo._delegate(t)),dojo.extend(n,dojo.declare._core,r||0,{_constructor:null,preamble:null}),n.prototype.constructor=n,n.prototype.declaredClass=(t||0).declaredClass+"_"+(r||0).declaredClass,n},_extend:function(o){for(var e in o)dojo.isFunction(fn=o[e])&&!0[e]&&(fn.nom=e);dojo.extend(this,o)},_makeCtor:function(){return function(){this._construct(arguments)}},_core:{_construct:function(o){var e,t,r=o.callee,n=r.superclass,i=n&&n.constructor,s=r.mixin,a=s&&s.constructor,d=o;d[0]&&(t=d[0].preamble)&&(d=t.apply(this,d)||d),(t=r.prototype.preamble)&&(d=t.apply(this,d)||d),i&&i.apply&&i.apply(this,d),a&&a.apply&&a.apply(this,d),(e=r.prototype._constructor)&&e.apply(this,o),this.constructor.prototype==r.prototype&&(i=this.postscript)&&i.apply(this,o)},_findMixin:function(o){for(var e,t,r=this.constructor;r;){if(e=r.superclass,t=r.mixin,t==o||t instanceof o.constructor)return e;if(t&&(t=t._findMixin(o)))return t;r=e&&e.constructor}},_findMethod:function(o,e,t,r){var n,i,s,a=t;do{if(n=a.constructor,i=n.mixin,i&&(i=this._findMethod(o,e,i,r)))return i;if((s=a[o])&&r==(s==e))return a;a=n.superclass}while(a);return!r&&(a=this._findMixin(t))&&this._findMethod(o,e,a,r)},inherited:function(o,e,t){var r=arguments;dojo.isString(r[0])||(t=e,e=o,o=e.callee.nom);var n,i,s=e.callee,a=this.constructor.prototype,r=t||e;if(this[o]!=s||a[o]==s){if(i=this._findMethod(o,s,a,!0),!i)throw this.declaredClass+': name argument ("'+o+'") to inherited must match callee (declare.js)';a=this._findMethod(o,s,i,!1)}return n=a&&a[o],n?n.apply(this,r):(console.debug(i.declaredClass+': no inherited "'+o+'" was found (declare.js)'),void 0)}}}));