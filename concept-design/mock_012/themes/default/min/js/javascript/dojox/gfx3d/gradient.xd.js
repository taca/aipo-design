dojo._xdResourceLoaded({depends:[["provide","dojox.gfx3d.gradient"],["require","dojox.gfx3d.vector"],["require","dojox.gfx3d.matrix"]],defineResource:function(o){o._hasResource["dojox.gfx3d.gradient"]||(o._hasResource["dojox.gfx3d.gradient"]=!0,o.provide("dojox.gfx3d.gradient"),o.require("dojox.gfx3d.vector"),o.require("dojox.gfx3d.matrix"),function(){var o=function(o,t){return Math.sqrt(Math.pow(t.x-o.x,2)+Math.pow(t.y-o.y,2))},t=32;dojox.gfx3d.gradient=function(r,e,d,i,x,a,n){for(var s=dojox.gfx3d.matrix,c=dojox.gfx3d.vector,f=s.normalize(n),u=s.multiplyPoint(f,i*Math.cos(x)+d.x,i*Math.sin(x)+d.y,d.z),l=s.multiplyPoint(f,i*Math.cos(a)+d.x,i*Math.sin(a)+d.y,d.z),g=s.multiplyPoint(f,d.x,d.y,d.z),h=(a-x)/t,y=o(u,l)/2,p=r[e.type],j=e.finish,M=e.color,m=[{offset:0,color:p.call(r,c.substract(u,g),j,M)}],v=x+h;a>v;v+=h){var q=s.multiplyPoint(f,i*Math.cos(v)+d.x,i*Math.sin(v)+d.y,d.z),z=o(u,q),P=o(l,q);m.push({offset:z/(z+P),color:p.call(r,c.substract(q,g),j,M)})}return m.push({offset:1,color:p.call(r,c.substract(l,g),j,M)}),{type:"linear",x1:0,y1:-y,x2:0,y2:y,colors:m}}}())}});