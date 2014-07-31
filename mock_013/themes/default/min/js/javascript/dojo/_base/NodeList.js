dojo._hasResource["dojo._base.NodeList"]||(dojo._hasResource["dojo._base.NodeList"]=!0,dojo.provide("dojo._base.NodeList"),dojo.require("dojo._base.lang"),dojo.require("dojo._base.array"),function(){var t=dojo,o=function(t){return t.constructor=dojo.NodeList,dojo._mixin(t,dojo.NodeList.prototype),t};dojo.NodeList=function(){return o(Array.apply(null,arguments))},dojo.NodeList._wrap=o,dojo.extend(dojo.NodeList,{slice:function(){var t=dojo._toArray(arguments);return o(t.slice.apply(this,t))},splice:function(){var t=dojo._toArray(arguments);return o(t.splice.apply(this,t))},concat:function(){var t=dojo._toArray(arguments,0,[this]);return o(t.concat.apply([],t))},indexOf:function(o,e){return t.indexOf(this,o,e)},lastIndexOf:function(){return t.lastIndexOf.apply(t,t._toArray(arguments,0,[this]))},every:function(o,e){return t.every(this,o,e)},some:function(o,e){return t.some(this,o,e)},map:function(o,e){return t.map(this,o,e,t.NodeList)},forEach:function(o,e){return t.forEach(this,o,e),this},coords:function(){return t.map(this,t.coords)},style:function(){var o=t._toArray(arguments,0,[null]),e=this.map(function(e){return o[0]=e,t.style.apply(t,o)});return arguments.length>1?this:e},styles:function(){return t.deprecated("NodeList.styles","use NodeList.style instead","1.1"),this.style.apply(this,arguments)},addClass:function(o){return this.forEach(function(e){t.addClass(e,o)}),this},removeClass:function(o){return this.forEach(function(e){t.removeClass(e,o)}),this},place:function(o,e){var n=t.query(o)[0];e=e||"last";for(var r=0;r<this.length;r++)t.place(this[r],n,e);return this},connect:function(o,e,n){return this.forEach(function(r){t.connect(r,o,e,n)}),this},orphan:function(o){var e=o?t._filterQueryResult(this,o):this;return e.forEach(function(t){t.parentNode&&t.parentNode.removeChild(t)}),e},adopt:function(o,e){var n=this[0];return t.query(o).forEach(function(o){t.place(o,n,e||"last")})},query:function(o){o=o||"";var e=t.NodeList();return this.forEach(function(n){t.query(o,n).forEach(function(t){"undefined"!=typeof t&&e.push(t)})}),e},filter:function(o){var e=this,n=arguments,r=t.NodeList(),s=function(t){"undefined"!=typeof t&&r.push(t)};return t.isString(o)?(e=t._filterQueryResult(this,n[0]),1==n.length?e:(t.forEach(t.filter(e,n[1],n[2]),s),r)):(t.forEach(t.filter(e,n[0],n[1]),s),r)},addContent:function(o,e){var n=t.doc.createElement("span");t.isString(o)?n.innerHTML=o:n.appendChild(o);var r="first"==e||"after"==e?"lastChild":"firstChild";return this.forEach(function(o){for(var s=n.cloneNode(!0);s[r];)t.place(s[r],o,e)}),this}}),t.forEach(["blur","click","keydown","keypress","keyup","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup"],function(t){var o="on"+t;dojo.NodeList.prototype[o]=function(t,e){return this.connect(o,t,e)}})}());