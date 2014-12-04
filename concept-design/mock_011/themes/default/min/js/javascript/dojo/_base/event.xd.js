dojo._xdResourceLoaded({depends:[["provide","dojo._base.event"],["require","dojo._base.connect"]],defineResource:function(e){e._hasResource["dojo._base.event"]||(e._hasResource["dojo._base.event"]=!0,e.provide("dojo._base.event"),e.require("dojo._base.connect"),function(){var t=e._event_listener={add:function(n,r,o){if(n){r=t._normalizeEventName(r),o=t._fixCallback(r,o);if(!e.isIE&&("mouseenter"==r||"mouseleave"==r)){var i=o;r="mouseenter"==r?"mouseover":"mouseout",o=function(t){var r=e.isDescendant(t.relatedTarget,n);return 0==r?i.call(this,t):void 0}}return n.addEventListener(r,o,!1),o}},remove:function(e,n,r){e&&e.removeEventListener(t._normalizeEventName(n),r,!1)},_normalizeEventName:function(e){return"on"==e.slice(0,2)?e.slice(2):e},_fixCallback:function(e,n){return"keypress"!=e?n:function(e){return n.call(this,t._fixEvent(e,this))}},_fixEvent:function(e){switch(e.type){case"keypress":t._setKeyChar(e)}return e},_setKeyChar:function(e){e.keyChar=e.charCode?String.fromCharCode(e.charCode):""}};e.fixEvent=function(e,n){return t._fixEvent(e,n)},e.stopEvent=function(e){e.preventDefault(),e.stopPropagation()};var n=e._listener;if(e._connect=function(r,o,i,a,s){var _=r&&(r.nodeType||r.attachEvent||r.addEventListener),c=_?s?2:1:0,u=[e._listener,t,n][c],l=u.add(r,o,e.hitch(i,a));return[r,o,l,c]},e._disconnect=function(r,o,i,a){[e._listener,t,n][a].remove(r,o,i)},e.keys={BACKSPACE:8,TAB:9,CLEAR:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESCAPE:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT_ARROW:37,UP_ARROW:38,RIGHT_ARROW:39,DOWN_ARROW:40,INSERT:45,DELETE:46,HELP:47,LEFT_WINDOW:91,RIGHT_WINDOW:92,SELECT:93,NUMPAD_0:96,NUMPAD_1:97,NUMPAD_2:98,NUMPAD_3:99,NUMPAD_4:100,NUMPAD_5:101,NUMPAD_6:102,NUMPAD_7:103,NUMPAD_8:104,NUMPAD_9:105,NUMPAD_MULTIPLY:106,NUMPAD_PLUS:107,NUMPAD_ENTER:108,NUMPAD_MINUS:109,NUMPAD_PERIOD:110,NUMPAD_DIVIDE:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,F13:124,F14:125,F15:126,NUM_LOCK:144,SCROLL_LOCK:145},e.isIE){var r=function(e,t){try{return e.keyCode=t}catch(e){return 0}},o=e._listener;if(!djConfig._allow_leaks){n=o=e._ie_listener={handlers:[],add:function(t,n,r){t=t||e.global;var o=t[n];if(!o||!o._listeners){var a=e._getIeDispatcher();a.target=o&&i.push(o)-1,a._listeners=[],o=t[n]=a}return o._listeners.push(i.push(r)-1)},remove:function(t,n,r){var o=(t||e.global)[n],a=o&&o._listeners;o&&a&&r--&&(delete i[a[r]],delete a[r])}};var i=o.handlers}e.mixin(t,{add:function(e,n,r){if(e){if(n=t._normalizeEventName(n),"onkeypress"==n){var i=e.onkeydown;i&&i._listeners&&i._stealthKeydown||(t.add(e,"onkeydown",t._stealthKeyDown),e.onkeydown._stealthKeydown=!0)}return o.add(e,n,t._fixCallback(r))}},remove:function(e,n,r){o.remove(e,t._normalizeEventName(n),r)},_normalizeEventName:function(e){return"on"!=e.slice(0,2)?"on"+e:e},_nop:function(){},_fixEvent:function(n,r){if(!n){var o=r&&(r.ownerDocument||r.document||r).parentWindow||window;n=o.event}if(!n)return n;n.target=n.srcElement,n.currentTarget=r||n.srcElement,n.layerX=n.offsetX,n.layerY=n.offsetY;var i=n.srcElement,a=i&&i.ownerDocument||document,s=e.isIE<6||"BackCompat"==a.compatMode?a.body:a.documentElement,_=e._getIeDocumentElementOffset();return n.pageX=n.clientX+e._fixIeBiDiScrollLeft(s.scrollLeft||0)-_.x,n.pageY=n.clientY+(s.scrollTop||0)-_.y,"mouseover"==n.type&&(n.relatedTarget=n.fromElement),"mouseout"==n.type&&(n.relatedTarget=n.toElement),n.stopPropagation=t._stopPropagation,n.preventDefault=t._preventDefault,t._fixKeys(n)},_fixKeys:function(e){switch(e.type){case"keypress":var n="charCode"in e?e.charCode:e.keyCode;10==n?(n=0,e.keyCode=13):13==n||27==n?n=0:3==n&&(n=99),e.charCode=n,t._setKeyChar(e)}return e},_punctMap:{106:42,111:47,186:59,187:43,188:44,189:45,190:46,191:47,192:96,219:91,220:92,221:93,222:39},_stealthKeyDown:function(e){var n=e.currentTarget.onkeypress;if(n&&n._listeners){var o=e.keyCode,i=13!=o&&32!=o&&27!=o&&(48>o||o>90)&&(96>o||o>111)&&(186>o||o>192)&&(219>o||o>222);if(i||e.ctrlKey){var a=i?0:o;if(e.ctrlKey){if(3==o||13==o)return;a>95&&106>a?a-=48:!e.shiftKey&&a>=65&&90>=a?a+=32:a=t._punctMap[a]||a}var s=t._synthesizeEvent(e,{type:"keypress",faux:!0,charCode:a});n.call(e.currentTarget,s),e.cancelBubble=s.cancelBubble,e.returnValue=s.returnValue,r(e,s.keyCode)}}},_stopPropagation:function(){this.cancelBubble=!0},_preventDefault:function(){this.bubbledKeyCode=this.keyCode,this.ctrlKey&&r(this,0),this.returnValue=!1}}),e.stopEvent=function(e){e=e||window.event,t._stopPropagation.call(e),t._preventDefault.call(e)}}if(t._synthesizeEvent=function(n,r){var o=e.mixin({},n,r);return t._setKeyChar(o),o.preventDefault=function(){n.preventDefault()},o.stopPropagation=function(){n.stopPropagation()},o},e.isOpera&&e.mixin(t,{_fixEvent:function(e){switch(e.type){case"keypress":var n=e.which;return 3==n&&(n=99),n=41>n&&!e.shiftKey?0:n,e.ctrlKey&&!e.shiftKey&&n>=65&&90>=n&&(n+=32),t._synthesizeEvent(e,{charCode:n})}return e}}),e.isSafari){e.mixin(t,{_fixEvent:function(n){switch(n.type){case"keypress":var r=n.charCode,o=n.shiftKey,i=n.keyCode;return i=i||s[n.keyIdentifier]||0,"Enter"==n.keyIdentifier?r=0:n.ctrlKey&&r>0&&27>r?r+=96:r==e.keys.SHIFT_TAB?(r=e.keys.TAB,o=!0):r=r>=32&&63232>r?r:0,t._synthesizeEvent(n,{charCode:r,shiftKey:o,keyCode:i})}return n}}),e.mixin(e.keys,{SHIFT_TAB:25,UP_ARROW:63232,DOWN_ARROW:63233,LEFT_ARROW:63234,RIGHT_ARROW:63235,F1:63236,F2:63237,F3:63238,F4:63239,F5:63240,F6:63241,F7:63242,F8:63243,F9:63244,F10:63245,F11:63246,F12:63247,PAUSE:63250,DELETE:63272,HOME:63273,END:63275,PAGE_UP:63276,PAGE_DOWN:63277,INSERT:63302,PRINT_SCREEN:63248,SCROLL_LOCK:63249,NUM_LOCK:63289});var a=e.keys,s={Up:a.UP_ARROW,Down:a.DOWN_ARROW,Left:a.LEFT_ARROW,Right:a.RIGHT_ARROW,PageUp:a.PAGE_UP,PageDown:a.PAGE_DOWN}}}(),e.isIE&&(e._getIeDispatcher=function(){return function(){var t=Array.prototype,n=e._ie_listener.handlers,r=arguments.callee,o=r._listeners,i=n[r.target],a=i&&i.apply(this,arguments);for(var s in o)s in t||n[o[s]].apply(this,arguments);return a}},e._event_listener._fixCallback=function(t){var n=e._event_listener._fixEvent;return function(e){return t.call(this,n(e,this))}}))}});