dojo._hasResource["dojox.charting.plot2d.Default"]||(dojo._hasResource["dojox.charting.plot2d.Default"]=!0,dojo.provide("dojox.charting.plot2d.Default"),dojo.require("dojox.charting.plot2d.common"),dojo.require("dojox.charting.plot2d.Base"),dojo.require("dojox.lang.utils"),dojo.require("dojox.lang.functional"),function(){var t=dojox.lang.functional,o=dojox.lang.utils,e=dojox.charting.plot2d.common,r=t.lambda("item.purgeGroup()");dojo.declare("dojox.charting.plot2d.Default",dojox.charting.plot2d.Base,{defaultParams:{hAxis:"x",vAxis:"y",lines:!0,areas:!1,markers:!1,shadows:0},optionalParams:{},constructor:function(t,e){this.opt=dojo.clone(this.defaultParams),o.updateWithObject(this.opt,e),this.series=[],this.hAxis=this.opt.hAxis,this.vAxis=this.opt.vAxis},calculateAxes:function(t){return this._calc(t,e.collectSimpleStats(this.series)),this},render:function(o,i){if(this.dirty){dojo.forEach(this.series,r),this.cleanGroup();var s=this.group;t.forEachReversed(this.series,function(t){t.cleanGroup(s)})}for(var a,l,h,n,d=this.chart.theme,c=this.series.length-1;c>=0;--c){var u=this.series[c];if(this.dirty||u.dirty)if(u.cleanGroup(),u.data.length){var p,s=u.group;if(p="number"==typeof u.data[0]?dojo.map(u.data,function(t,e){return{x:this._hScaler.scale*(e+1-this._hScaler.bounds.lower)+i.l,y:o.height-i.b-this._vScaler.scale*(t-this._vScaler.bounds.lower)}},this):dojo.map(u.data,function(t){return{x:this._hScaler.scale*(t.x-this._hScaler.bounds.lower)+i.l,y:o.height-i.b-this._vScaler.scale*(t.y-this._vScaler.bounds.lower)}},this),u.fill&&u.stroke||(h=u.dyn.color=new dojo.Color(d.next("color"))),this.opt.areas){var f=dojo.clone(p);f.push({x:p[p.length-1].x,y:o.height-i.b}),f.push({x:p[0].x,y:o.height-i.b}),f.push(p[0]);var x=u.fill?u.fill:e.augmentFill(d.series.fill,h);u.dyn.fill=s.createPolyline(f).setFill(x).getFill()}if((this.opt.lines||this.opt.markers)&&(a=u.stroke?e.makeStroke(u.stroke):e.augmentStroke(d.series.stroke,h),(u.outline||d.series.outline)&&(l=e.makeStroke(u.outline?u.outline:d.series.outline),l.width=2*l.width+a.width)),this.opt.markers&&(n=u.dyn.marker=u.marker?u.marker:d.next("marker")),this.opt.shadows&&a){var j=this.opt.shadows,m=new dojo.Color([0,0,0,.3]),g=dojo.map(p,function(t){return{x:t.x+j.dx,y:t.y+j.dy}}),k=dojo.clone(l?l:a);k.color=m,k.width+=j.dw?j.dw:0,this.opt.lines&&s.createPolyline(g).setStroke(k),this.opt.markers&&dojo.forEach(g,function(t){s.createPath("M"+t.x+" "+t.y+" "+n).setStroke(k).setFill(m)},this)}this.opt.lines&&(l&&(u.dyn.outline=s.createPolyline(p).setStroke(l).getStroke()),u.dyn.stroke=s.createPolyline(p).setStroke(a).getStroke()),this.opt.markers&&dojo.forEach(p,function(t){var o="M"+t.x+" "+t.y+" "+n;l&&s.createPath(o).setStroke(l),s.createPath(o).setStroke(a).setFill(a.color)},this),u.dirty=!1}else u.dirty=!1}return this.dirty=!1,this}})}());