dojo._hasResource["dojox.dtl.filter.logic"]||(dojo._hasResource["dojox.dtl.filter.logic"]=!0,dojo.provide("dojox.dtl.filter.logic"),dojo.mixin(dojox.dtl.filter.logic,{default_:function(o,e){return o||e||""},default_if_none:function(o,e){return null===o?e||"":o||""},divisibleby:function(o,e){return parseInt(o)%parseInt(e)==0},_yesno:/\s*,\s*/g,yesno:function(o,e){e||(e="yes,no,maybe");var l=e.split(dojox.dtl.filter.logic._yesno);return l.length<2?o:o?l[0]:!o&&null!==o||l.length<3?l[1]:l[2]}}));