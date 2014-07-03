dojo._hasResource["dojox.grid._grid.views"]||(dojo._hasResource["dojox.grid._grid.views"]=!0,dojo.provide("dojox.grid._grid.views"),dojo.declare("dojox.grid.views",null,{constructor:function(e){this.grid=e},defaultWidth:200,views:[],resize:function(){this.onEach("resize")},render:function(){this.onEach("render"),this.normalizeHeaderNodeHeight()},addView:function(e){e.idx=this.views.length,this.views.push(e)},destroyViews:function(){for(var e,i=0;e=this.views[i];i++)e.destroy();this.views=[]},getContentNodes:function(){for(var e,i=[],t=0;e=this.views[t];t++)i.push(e.contentNode);return i},forEach:function(e){for(var i,t=0;i=this.views[t];t++)e(i,t)},onEach:function(e,i){i=i||[];for(var t,o=0;t=this.views[o];o++)e in t&&t[e].apply(t,i)},normalizeHeaderNodeHeight:function(){for(var e,i=[],t=0;e=this.views[t];t++)e.headerContentNode.firstChild&&i.push(e.headerContentNode);this.normalizeRowNodeHeights(i)},normalizeRowNodeHeights:function(e){for(var i,t=0,o=0;i=e[o];o++)t=Math.max(t,i.firstChild.clientHeight||i.firstChild.offsetHeight);t=t>=0?t:0;for(var i,r=t+"px",o=0;i=e[o];o++)i.firstChild.clientHeight!=t&&(i.firstChild.style.height=r);e&&e[0]&&e[0].parentNode.offsetHeight},renormalizeRow:function(e){for(var i,t,o=[],r=0;(i=this.views[r])&&(t=i.getRowNode(e));r++)t.firstChild.style.height="",o.push(t);this.normalizeRowNodeHeights(o)},getViewWidth:function(e){return this.views[e].getWidth()||this.defaultWidth},measureHeader:function(){this.forEach(function(e){e.headerContentNode.style.height=""});var e=0;return this.forEach(function(i){e=Math.max(i.headerNode.offsetHeight,e)}),e},measureContent:function(){var e=0;return this.forEach(function(i){e=Math.max(i.domNode.offsetHeight,e)}),e},findClient:function(){var e=this.grid.elasticView||-1;if(0>e)for(var i,t=1;i=this.views[t];t++)if(i.viewWidth){for(t=1;i=this.views[t];t++)if(!i.viewWidth){e=t;break}break}return 0>e&&(e=Math.floor(this.views.length/2)),e},_arrange:function(l,t,w,h){var i,v,vw,len=this.views.length,c=0>=w?len:this.findClient(),setPosition=function(v,l,t){with(v.domNode.style)left=l+"px",top=t+"px";with(v.headerNode.style)left=l+"px",top=0};for(i=0;(v=this.views[i])&&c>i;i++)vw=this.getViewWidth(i),v.setSize(vw,h),setPosition(v,l,t),vw=v.domNode.offsetWidth,l+=vw;i++;for(var r=w,j=len-1;(v=this.views[j])&&j>=i;j--)vw=this.getViewWidth(j),v.setSize(vw,h),vw=v.domNode.offsetWidth,r-=vw,setPosition(v,r,t);return len>c&&(v=this.views[c],vw=Math.max(1,r-l),v.setSize(vw+"px",h),setPosition(v,l,t)),l},arrange:function(e,i,t,o){var t=this._arrange(e,i,t,o);return this.resize(),t},renderRow:function(e,i){for(var t,o,r,s=[],n=0;(t=this.views[n])&&(o=i[n]);n++)r=t.renderRow(e),o.appendChild(r),s.push(r);this.normalizeRowNodeHeights(s)},rowRemoved:function(e){this.onEach("rowRemoved",[e])},updateRow:function(e,i){for(var t,o=0;t=this.views[o];o++)t.updateRow(e,i);this.renormalizeRow(e)},updateRowStyles:function(e){this.onEach("updateRowStyles",[e])},setScrollTop:function(e){for(var i,t=e,o=0;i=this.views[o];o++)t=i.setScrollTop(e);return t},getFirstScrollingView:function(){for(var e,i=0;e=this.views[i];i++)if(e.hasScrollbar())return e}}));