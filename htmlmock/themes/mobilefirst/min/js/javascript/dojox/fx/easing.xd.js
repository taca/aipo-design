dojo._xdResourceLoaded({depends:[["provide","dojox.fx.easing"]],defineResource:function(e){e._hasResource["dojox.fx.easing"]||(e._hasResource["dojox.fx.easing"]=!0,e.provide("dojox.fx.easing"),dojox.fx.easing={easeIn:function(e){return Math.pow(e,3)},easeOut:function(e){return 1-Math.pow(1-e,3)},easeInOut:function(e){return 3*Math.pow(e,2)-2*Math.pow(e,3)}})}});