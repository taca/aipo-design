dojo._hasResource["dijit._base.place"]||(dojo._hasResource["dijit._base.place"]=!0,dojo.provide("dijit._base.place"),dijit.getViewport=function(){var e=dojo.global,t=dojo.doc,i=0,o=0;if(dojo.isMozilla){var n,d,l,r;t.body.clientWidth>t.documentElement.clientWidth?(n=t.documentElement.clientWidth,l=t.body.clientWidth):(l=t.documentElement.clientWidth,n=t.body.clientWidth),t.body.clientHeight>t.documentElement.clientHeight?(d=t.documentElement.clientHeight,r=t.body.clientHeight):(r=t.documentElement.clientHeight,d=t.body.clientHeight),i=l>e.innerWidth?n:l,o=r>e.innerHeight?d:r}else!dojo.isOpera&&e.innerWidth?(i=e.innerWidth,o=e.innerHeight):dojo.isIE&&t.documentElement&&t.documentElement.clientHeight?(i=t.documentElement.clientWidth,o=t.documentElement.clientHeight):dojo.body().clientWidth&&(i=dojo.body().clientWidth,o=dojo.body().clientHeight);var a=dojo._docScroll();return{w:i,h:o,l:a.x,t:a.y}},dijit.placeOnScreen=function(e,t,i){var o=dojo.map(i,function(e){return{corner:e,pos:t}});return dijit._place(e,o)},dijit._place=function(e,t,i){var o=dijit.getViewport();e.parentNode&&"body"==String(e.parentNode.tagName).toLowerCase()||dojo.body().appendChild(e);for(var n=null,d=0;d<t.length;d++){var l=t[d].corner,r=t[d].pos;i&&i(l);var a=e.style.display,c=e.style.visibility;e.style.visibility="hidden",e.style.display="";var h=dojo.marginBox(e);e.style.display=a,e.style.visibility=c;var y="L"==l.charAt(1)?r.x:Math.max(o.l,r.x-h.w),s="T"==l.charAt(0)?r.y:Math.max(o.t,r.y-h.h),p="L"==l.charAt(1)?Math.min(o.l+o.w,y+h.w):r.x,u="T"==l.charAt(0)?Math.min(o.t+o.h,s+h.h):r.y,m=p-y,j=u-s,b=h.w-m+(h.h-j);if((null==n||b<n.overflow)&&(n={corner:l,aroundCorner:t[d].aroundCorner,x:y,y:s,w:m,h:j,overflow:b}),0==b)break}return e.style.left=n.x+"px",e.style.top=n.y+"px",n},dijit.placeOnScreenAroundElement=function(e,t,i,o){t=dojo.byId(t);var n=t.style.display;t.style.display="";var d=t.offsetWidth,l=t.offsetHeight,r=dojo.coords(t,!0);t.style.display=n;var a=[];for(var c in i)a.push({aroundCorner:c,corner:i[c],pos:{x:r.x+("L"==c.charAt(1)?0:d),y:r.y+("T"==c.charAt(0)?0:l)}});return dijit._place(e,a,o)});