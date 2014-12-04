dojo._xdResourceLoaded({depends:[["provide","dojox.gfx3d.matrix"]],defineResource:function(x){x._hasResource["dojox.gfx3d.matrix"]||(x._hasResource["dojox.gfx3d.matrix"]=!0,x.provide("dojox.gfx3d.matrix"),dojox.gfx3d.matrix._degToRad=function(x){return Math.PI*x/180},dojox.gfx3d.matrix._radToDeg=function(x){return x/Math.PI*180},dojox.gfx3d.matrix.Matrix3D=function(y){if(y)if("number"==typeof y)this.xx=this.yy=this.zz=y;else if(y instanceof Array){if(y.length>0){for(var z=dojox.gfx3d.matrix.normalize(y[0]),t=1;t<y.length;++t){var o=z,d=dojox.gfx3d.matrix.normalize(y[t]);z=new dojox.gfx3d.matrix.Matrix3D,z.xx=o.xx*d.xx+o.xy*d.yx+o.xz*d.zx,z.xy=o.xx*d.xy+o.xy*d.yy+o.xz*d.zy,z.xz=o.xx*d.xz+o.xy*d.yz+o.xz*d.zz,z.yx=o.yx*d.xx+o.yy*d.yx+o.yz*d.zx,z.yy=o.yx*d.xy+o.yy*d.yy+o.yz*d.zy,z.yz=o.yx*d.xz+o.yy*d.yz+o.yz*d.zz,z.zx=o.zx*d.xx+o.zy*d.yx+o.zz*d.zx,z.zy=o.zx*d.xy+o.zy*d.yy+o.zz*d.zy,z.zz=o.zx*d.xz+o.zy*d.yz+o.zz*d.zz,z.dx=o.xx*d.dx+o.xy*d.dy+o.xz*d.dz+o.dx,z.dy=o.yx*d.dx+o.yy*d.dy+o.yz*d.dz+o.dy,z.dz=o.zx*d.dx+o.zy*d.dy+o.zz*d.dz+o.dz}x.mixin(this,z)}}else x.mixin(this,y)},x.extend(dojox.gfx3d.matrix.Matrix3D,{xx:1,xy:0,xz:0,yx:0,yy:1,yz:0,zx:0,zy:0,zz:1,dx:0,dy:0,dz:0}),x.mixin(dojox.gfx3d.matrix,{identity:new dojox.gfx3d.matrix.Matrix3D,translate:function(x,y,z){return arguments.length>1?new dojox.gfx3d.matrix.Matrix3D({dx:x,dy:y,dz:z}):new dojox.gfx3d.matrix.Matrix3D({dx:x.x,dy:x.y,dz:x.z})},scale:function(x,y,z){return arguments.length>1?new dojox.gfx3d.matrix.Matrix3D({xx:x,yy:y,zz:z}):"number"==typeof x?new dojox.gfx3d.matrix.Matrix3D({xx:x,yy:x,zz:x}):new dojox.gfx3d.matrix.Matrix3D({xx:x.x,yy:x.y,zz:x.z})},rotateX:function(x){var y=Math.cos(x),z=Math.sin(x);return new dojox.gfx3d.matrix.Matrix3D({yy:y,yz:-z,zy:z,zz:y})},rotateXg:function(x){return dojox.gfx3d.matrix.rotateX(dojox.gfx3d.matrix._degToRad(x))},rotateY:function(x){var y=Math.cos(x),z=Math.sin(x);return new dojox.gfx3d.matrix.Matrix3D({xx:y,xz:z,zx:-z,zz:y})},rotateYg:function(x){return dojox.gfx3d.matrix.rotateY(dojox.gfx3d.matrix._degToRad(x))},rotateZ:function(x){var y=Math.cos(x),z=Math.sin(x);return new dojox.gfx3d.matrix.Matrix3D({xx:y,xy:-z,yx:z,yy:y})},rotateZg:function(x){return dojox.gfx3d.matrix.rotateZ(dojox.gfx3d.matrix._degToRad(x))},cameraTranslate:function(x,y,z){return arguments.length>1?new dojox.gfx3d.matrix.Matrix3D({dx:-x,dy:-y,dz:-z}):new dojox.gfx3d.matrix.Matrix3D({dx:-x.x,dy:-x.y,dz:-x.z})},cameraRotateX:function(x){var y=Math.cos(-x),z=Math.sin(-x);return new dojox.gfx3d.matrix.Matrix3D({yy:y,yz:-z,zy:z,zz:y})},cameraRotateXg:function(x){return dojox.gfx3d.matrix.rotateX(dojox.gfx3d.matrix._degToRad(x))},cameraRotateY:function(x){var y=Math.cos(-x),z=Math.sin(-x);return new dojox.gfx3d.matrix.Matrix3D({xx:y,xz:z,zx:-z,zz:y})},cameraRotateYg:function(x){return dojox.gfx3d.matrix.rotateY(dojox.gfx3d.matrix._degToRad(x))},cameraRotateZ:function(x){var y=Math.cos(-x),z=Math.sin(-x);return new dojox.gfx3d.matrix.Matrix3D({xx:y,xy:-z,yx:z,yy:y})},cameraRotateZg:function(x){return dojox.gfx3d.matrix.rotateZ(dojox.gfx3d.matrix._degToRad(x))},normalize:function(x){return x instanceof dojox.gfx3d.matrix.Matrix3D?x:new dojox.gfx3d.matrix.Matrix3D(x)},clone:function(x){var y=new dojox.gfx3d.matrix.Matrix3D;for(var z in x)"number"==typeof x[z]&&"number"==typeof y[z]&&y[z]!=x[z]&&(y[z]=x[z]);return y},invert:function(x){var y=dojox.gfx3d.matrix.normalize(x),z=y.xx*y.yy*y.zz+y.xy*y.yz*y.zx+y.xz*y.yx*y.zy-y.xx*y.yz*y.zy-y.xy*y.yx*y.zz-y.xz*y.yy*y.zx,t=new dojox.gfx3d.matrix.Matrix3D({xx:(y.yy*y.zz-y.yz*y.zy)/z,xy:(y.xz*y.zy-y.xy*y.zz)/z,xz:(y.xy*y.yz-y.xz*y.yy)/z,yx:(y.yz*y.zx-y.yx*y.zz)/z,yy:(y.xx*y.zz-y.xz*y.zx)/z,yz:(y.xz*y.yx-y.xx*y.yz)/z,zx:(y.yx*y.zy-y.yy*y.zx)/z,zy:(y.xy*y.zx-y.xx*y.zy)/z,zz:(y.xx*y.yy-y.xy*y.yx)/z,dx:-1*(y.xy*y.yz*y.dz+y.xz*y.dy*y.zy+y.dx*y.yy*y.zz-y.xy*y.dy*y.zz-y.xz*y.yy*y.dz-y.dx*y.yz*y.zy)/z,dy:(y.xx*y.yz*y.dz+y.xz*y.dy*y.zx+y.dx*y.yx*y.zz-y.xx*y.dy*y.zz-y.xz*y.yx*y.dz-y.dx*y.yz*y.zx)/z,dz:-1*(y.xx*y.yy*y.dz+y.xy*y.dy*y.zx+y.dx*y.yx*y.zy-y.xx*y.dy*y.zy-y.xy*y.yx*y.dz-y.dx*y.yy*y.zx)/z});return t},_multiplyPoint:function(x,y,z,t){return{x:x.xx*y+x.xy*z+x.xz*t+x.dx,y:x.yx*y+x.yy*z+x.yz*t+x.dy,z:x.zx*y+x.zy*z+x.zz*t+x.dz}},multiplyPoint:function(x,y,z,t){var o=dojox.gfx3d.matrix.normalize(x);return"number"==typeof y&&"number"==typeof z&&"number"==typeof t?dojox.gfx3d.matrix._multiplyPoint(o,y,z,t):dojox.gfx3d.matrix._multiplyPoint(o,y.x,y.y,y.z)},multiply:function(x){for(var y=dojox.gfx3d.matrix.normalize(x),z=1;z<arguments.length;++z){var t=y,o=dojox.gfx3d.matrix.normalize(arguments[z]);y=new dojox.gfx3d.matrix.Matrix3D,y.xx=t.xx*o.xx+t.xy*o.yx+t.xz*o.zx,y.xy=t.xx*o.xy+t.xy*o.yy+t.xz*o.zy,y.xz=t.xx*o.xz+t.xy*o.yz+t.xz*o.zz,y.yx=t.yx*o.xx+t.yy*o.yx+t.yz*o.zx,y.yy=t.yx*o.xy+t.yy*o.yy+t.yz*o.zy,y.yz=t.yx*o.xz+t.yy*o.yz+t.yz*o.zz,y.zx=t.zx*o.xx+t.zy*o.yx+t.zz*o.zx,y.zy=t.zx*o.xy+t.zy*o.yy+t.zz*o.zy,y.zz=t.zx*o.xz+t.zy*o.yz+t.zz*o.zz,y.dx=t.xx*o.dx+t.xy*o.dy+t.xz*o.dz+t.dx,y.dy=t.yx*o.dx+t.yy*o.dy+t.yz*o.dz+t.dy,y.dz=t.zx*o.dx+t.zy*o.dy+t.zz*o.dz+t.dz}return y},_project:function(x,y,z,t){return{x:x.xx*y+x.xy*z+x.xz*t+x.dx,y:x.yx*y+x.yy*z+x.yz*t+x.dy,z:x.zx*y+x.zy*z+x.zz*t+x.dz}},project:function(x,y,z,t){var o=dojox.gfx3d.matrix.normalize(x);return"number"==typeof y&&"number"==typeof z&&"number"==typeof t?dojox.gfx3d.matrix._project(o,y,z,t):dojox.gfx3d.matrix._project(o,y.x,y.y,y.z)}}),dojox.gfx3d.Matrix3D=dojox.gfx3d.matrix.Matrix3D)}});