dojo._xdResourceLoaded({depends:[["provide","dojox.dtl.filter.htmlstrings"],["require","dojox.dtl._base"]],defineResource:function(e){e._hasResource["dojox.dtl.filter.htmlstrings"]||(e._hasResource["dojox.dtl.filter.htmlstrings"]=!0,e.provide("dojox.dtl.filter.htmlstrings"),e.require("dojox.dtl._base"),e.mixin(dojox.dtl.filter.htmlstrings,{_escapeamp:/&/g,_escapelt:/</g,_escapegt:/>/g,_escapeqt:/'/g,_escapedblqt:/"/g,_linebreaksrn:/(\r\n|\n\r)/g,_linebreaksn:/\n{2,}/g,_linebreakss:/(^\s+|\s+$)/g,_linebreaksbr:/\n/g,_removetagsfind:/[a-z0-9]+/g,_striptags:/<[^>]*?>/g,escape:function(e){var r=dojox.dtl.filter.htmlstrings;return e.replace(r._escapeamp,"&amp;").replace(r._escapelt,"&lt;").replace(r._escapegt,"&gt;").replace(r._escapedblqt,"&quot;").replace(r._escapeqt,"&#39;")},linebreaks:function(e){var r=[],t=dojox.dtl.filter.htmlstrings;e=e.replace(t._linebreaksrn,"\n");for(var s=e.split(t._linebreaksn),l=0;l<s.length;l++){var n=s[l].replace(t._linebreakss,"").replace(t._linebreaksbr,"<br />");r.push("<p>"+n+"</p>")}return r.join("\n\n")},linebreaksbr:function(e){var r=dojox.dtl.filter.htmlstrings;return e.replace(r._linebreaksrn,"\n").replace(r._linebreaksbr,"<br />")},removetags:function(e,r){for(var t,s=dojox.dtl.filter.htmlstrings,l=[];t=s._removetagsfind.exec(r);)l.push(t[0]);return l="("+l.join("|")+")",e.replace(new RegExp("</?s*"+l+"s*[^>]*>","gi"),"")},striptags:function(e){return e.replace(dojox.dtl.filter.htmlstrings._striptags,"")}}))}});