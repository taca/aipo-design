dojo._xdResourceLoaded({depends:[["provide","dojox.gfx"],["require","dojox.gfx.matrix"],["require","dojox.gfx._base"],["requireIf","svg"==dojox.gfx.renderer,"dojox.gfx.svg"],["requireIf","vml"==dojox.gfx.renderer,"dojox.gfx.vml"],["requireIf","silverlight"==dojox.gfx.renderer,"dojox.gfx.silverlight"],["requireIf","canvas"==dojox.gfx.renderer,"dojox.gfx.canvas"]],defineResource:function(e){e._hasResource["dojox.gfx"]||(e._hasResource["dojox.gfx"]=!0,e.provide("dojox.gfx"),e.require("dojox.gfx.matrix"),e.require("dojox.gfx._base"),function(){for(var r=("string"==typeof djConfig.gfxRenderer?djConfig.gfxRenderer:"svg,vml,silverlight,canvas").split(","),o=0;o<r.length;++o){switch(r[o]){case"svg":!e.isIE&&navigator.userAgent.indexOf("iPhone")<0&&navigator.userAgent.indexOf("iPod")<0&&(dojox.gfx.renderer="svg");break;case"vml":0!=e.isIE&&(dojox.gfx.renderer="vml");break;case"silverlight":window.Silverlight&&(dojox.gfx.renderer="silverlight");break;case"canvas":0==e.isIE&&(dojox.gfx.renderer="canvas")}if(dojox.gfx.renderer)break}}(),e.requireIf("svg"==dojox.gfx.renderer,"dojox.gfx.svg"),e.requireIf("vml"==dojox.gfx.renderer,"dojox.gfx.vml"),e.requireIf("silverlight"==dojox.gfx.renderer,"dojox.gfx.silverlight"),e.requireIf("canvas"==dojox.gfx.renderer,"dojox.gfx.canvas"))}});