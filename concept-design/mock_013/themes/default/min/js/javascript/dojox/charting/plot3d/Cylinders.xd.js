dojo._xdResourceLoaded({depends:[["provide","dojox.charting.plot3d.Cylinders"],["require","dojox.charting.plot3d.Base"]],defineResource:function(t){t._hasResource["dojox.charting.plot3d.Cylinders"]||(t._hasResource["dojox.charting.plot3d.Cylinders"]=!0,t.provide("dojox.charting.plot3d.Cylinders"),t.require("dojox.charting.plot3d.Base"),function(){var i=function(i,e,a){i="string"==typeof i?i.split(""):i,a=a||t.global;for(var o=i[0],r=1;r<i.length;o=e.call(a,o,i[r++]));return o};t.declare("dojox.charting.plot3d.Cylinders",dojox.charting.plot3d.Base,{constructor:function(i,e,a){if(this.depth="auto",this.gap=0,this.data=[],this.material={type:"plastic",finish:"shiny",color:"lime"},this.outline=null,a){if("depth"in a&&(this.depth=a.depth),"gap"in a&&(this.gap=a.gap),"material"in a){var o=a.material;"string"==typeof o||o instanceof t.Color?this.material.color=o:this.material=o}"outline"in a&&(this.outline=a.outline)}},getDepth:function(){if("auto"==this.depth){var t=this.width;return this.data&&this.data.length&&(t/=this.data.length),t-2*this.gap}return this.depth},generate:function(t,e){if(!this.data)return this;var a=this.width/this.data.length,o=0,r=this.height/i(this.data,Math.max);e||(e=t.view);for(var h=0;h<this.data.length;++h,o+=a)e.createCylinder({center:{x:o+a/2,y:0,z:0},radius:a/2-this.gap,height:this.data[h]*r}).setTransform(dojox.gfx3d.matrix.rotateXg(-90)).setFill(this.material).setStroke(this.outline)}})}())}});