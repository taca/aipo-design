dojo._hasResource["dojox.charting.plot3d.Bars"]||(dojo._hasResource["dojox.charting.plot3d.Bars"]=!0,dojo.provide("dojox.charting.plot3d.Bars"),dojo.require("dojox.charting.plot3d.Base"),function(){var t=function(t,a,i){t="string"==typeof t?t.split(""):t,i=i||dojo.global;for(var o=t[0],h=1;h<t.length;o=a.call(i,o,t[h++]));return o};dojo.declare("dojox.charting.plot3d.Bars",dojox.charting.plot3d.Base,{constructor:function(t,a,i){if(this.depth="auto",this.gap=0,this.data=[],this.material={type:"plastic",finish:"dull",color:"lime"},i&&("depth"in i&&(this.depth=i.depth),"gap"in i&&(this.gap=i.gap),"material"in i)){var o=i.material;"string"==typeof o||o instanceof dojo.Color?this.material.color=o:this.material=o}},getDepth:function(){if("auto"==this.depth){var t=this.width;return this.data&&this.data.length&&(t/=this.data.length),t-2*this.gap}return this.depth},generate:function(a,i){if(!this.data)return this;var o=this.width/this.data.length,h=0,e="auto"==this.depth?o-2*this.gap:this.depth,r=this.height/t(this.data,Math.max);i||(i=a.view);for(var s=0;s<this.data.length;++s,h+=o)i.createCube({bottom:{x:h+this.gap,y:0,z:0},top:{x:h+o-this.gap,y:this.data[s]*r,z:e}}).setFill(this.material)}})}());