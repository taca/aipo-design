dojo._hasResource["dojo._base.Color"]||(dojo._hasResource["dojo._base.Color"]=!0,dojo.provide("dojo._base.Color"),dojo.require("dojo._base.array"),dojo.require("dojo._base.lang"),dojo.Color=function(o){o&&this.setColor(o)},dojo.Color.named={black:[0,0,0],silver:[192,192,192],gray:[128,128,128],white:[255,255,255],maroon:[128,0,0],red:[255,0,0],purple:[128,0,128],fuchsia:[255,0,255],green:[0,128,0],lime:[0,255,0],olive:[128,128,0],yellow:[255,255,0],navy:[0,0,128],blue:[0,0,255],teal:[0,128,128],aqua:[0,255,255]},dojo.extend(dojo.Color,{r:255,g:255,b:255,a:1,_set:function(o,r,t,n){var e=this;e.r=o,e.g=r,e.b=t,e.a=n},setColor:function(o){var r=dojo;return r.isString(o)?r.colorFromString(o,this):r.isArray(o)?r.colorFromArray(o,this):(this._set(o.r,o.g,o.b,o.a),o instanceof r.Color||this.sanitize()),this},sanitize:function(){return this},toRgb:function(){var o=this;return[o.r,o.g,o.b]},toRgba:function(){var o=this;return[o.r,o.g,o.b,o.a]},toHex:function(){var o=dojo.map(["r","g","b"],function(o){var r=this[o].toString(16);return r.length<2?"0"+r:r},this);return"#"+o.join("")},toCss:function(o){var r=this,t=r.r+", "+r.g+", "+r.b;return(o?"rgba("+t+", "+r.a:"rgb("+t)+")"},toString:function(){return this.toCss(!0)}}),dojo.blendColors=function(o,r,t,n){var e=dojo,a=n||new dojo.Color;return e.forEach(["r","g","b","a"],function(n){a[n]=o[n]+(r[n]-o[n])*t,"a"!=n&&(a[n]=Math.round(a[n]))}),a.sanitize()},dojo.colorFromRgb=function(o,r){var t=o.toLowerCase().match(/^rgba?\(([\s\.,0-9]+)\)/);return t&&dojo.colorFromArray(t[1].split(/\s*,\s*/),r)},dojo.colorFromHex=function(o,r){var t=dojo,n=r||new t.Color,e=4==o.length?4:8,a=(1<<e)-1;return o=Number("0x"+o.substr(1)),isNaN(o)?null:(t.forEach(["b","g","r"],function(r){var t=o&a;o>>=e,n[r]=4==e?17*t:t}),n.a=1,n)},dojo.colorFromArray=function(o,r){var t=r||new dojo.Color;return t._set(Number(o[0]),Number(o[1]),Number(o[2]),Number(o[3])),isNaN(t.a)&&(t.a=1),t.sanitize()},dojo.colorFromString=function(o,r){var t=dojo.Color.named[o];return t&&dojo.colorFromArray(t,r)||dojo.colorFromRgb(o,r)||dojo.colorFromHex(o,r)});