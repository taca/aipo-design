dojo._hasResource["dojox.charting.plot2d.StackedBars"]||(dojo._hasResource["dojox.charting.plot2d.StackedBars"]=!0,dojo.provide("dojox.charting.plot2d.StackedBars"),dojo.require("dojox.charting.plot2d.common"),dojo.require("dojox.charting.plot2d.Bars"),dojo.require("dojox.lang.functional"),function(){var t=dojox.lang.functional,e=dojox.charting.plot2d.common,r=t.lambda("item.purgeGroup()");dojo.declare("dojox.charting.plot2d.StackedBars",dojox.charting.plot2d.Bars,{calculateAxes:function(t){var r,o=e.collectStackedStats(this.series);return this._maxRunLength=o.hmax,o.hmin-=.5,o.hmax+=.5,r=o.hmin,o.hmin=o.vmin,o.vmin=r,r=o.hmax,o.hmax=o.vmax,o.vmax=r,this._calc(t,o),this},render:function(o,a){for(var i=t.repeat(this._maxRunLength,"-> 0",0),s=0;s<this.series.length;++s)for(var h=this.series[s],l=0;l<h.data.length;++l){var n=h.data[l];isNaN(n)&&(n=0),i[l]+=n}if(this.dirty){dojo.forEach(this.series,r),this.cleanGroup();var d=this.group;t.forEachReversed(this.series,function(t){t.cleanGroup(d)})}for(var c,g,u,v=this.chart.theme,m=this.opt.gap<this._vScaler.scale/3?this.opt.gap:0,s=this.series.length-1;s>=0;--s){var h=this.series[s];if(this.dirty||h.dirty){h.cleanGroup();var d=h.group;h.fill&&h.stroke||(c=h.dyn.color=new dojo.Color(v.next("color"))),g=h.stroke?h.stroke:e.augmentStroke(v.series.stroke,c),u=h.fill?h.fill:e.augmentFill(v.series.fill,c);for(var l=0;l<i.length;++l){var n=i[l],f=this._hScaler.scale*(n-this._hScaler.bounds.lower),p=this._vScaler.scale-2*m;if(f>=1&&p>=1){var x=d.createRect({x:a.l,y:o.height-a.b-this._vScaler.scale*(l+1.5-this._vScaler.bounds.lower)+m,width:f,height:p}).setFill(u).setStroke(g);h.dyn.fill=x.getFill(),h.dyn.stroke=x.getStroke()}}h.dirty=!1;for(var l=0;l<h.data.length;++l){var n=h.data[l];isNaN(n)&&(n=0),i[l]-=n}}}return this.dirty=!1,this}})}());