dojo._hasResource["dijit._base.scroll"]||(dojo._hasResource["dijit._base.scroll"]=!0,dojo.provide("dijit._base.scroll"),dijit.scrollIntoView=function(o){if(dojo.isIE)dojo.marginBox(o.parentNode).h<=o.parentNode.scrollHeight&&o.scrollIntoView(!1);else if(dojo.isMozilla)o.scrollIntoView(!1);else{var l=o.parentNode,s=l.scrollTop+dojo.marginBox(l).h,e=o.offsetTop+dojo.marginBox(o).h;e>s?l.scrollTop+=e-s:l.scrollTop>o.offsetTop&&(l.scrollTop-=l.scrollTop-o.offsetTop)}});