dojo._xdResourceLoaded({depends:[["provide","dojox.charting.scaler"]],defineResource:function(r){r._hasResource["dojox.charting.scaler"]||(r._hasResource["dojox.charting.scaler"]=!0,r.provide("dojox.charting.scaler"),function(){var o=3,i=function(r,o){r=r.toLowerCase();for(var i=0;i<o.length;++i)if(r==o[i])return!0;return!1},e=function(o,e,a,n,t,c,f){a=r.clone(a),n||("major"==a.fixUpper&&(a.fixUpper="minor"),"major"==a.fixLower&&(a.fixLower="minor")),t||("minor"==a.fixUpper&&(a.fixUpper="micro"),"minor"==a.fixLower&&(a.fixLower="micro")),c||("micro"==a.fixUpper&&(a.fixUpper="none"),"micro"==a.fixLower&&(a.fixLower="none"));var l=i(a.fixLower,["major"])?Math.floor(o/n)*n:i(a.fixLower,["minor"])?Math.floor(o/t)*t:i(a.fixLower,["micro"])?Math.floor(o/c)*unit:o,m=i(a.fixUpper,["major"])?Math.ceil(e/n)*n:i(a.fixUpper,["minor"])?Math.ceil(e/t)*t:i(a.fixUpper,["unit"])?Math.ceil(e/unit)*unit:e,p=i(a.fixLower,["major"])||!n?l:Math.ceil(l/n)*n,u=i(a.fixLower,["major","minor"])||!t?l:Math.ceil(l/t)*t,x=i(a.fixLower,["major","minor","micro"])||!c?l:Math.ceil(l/c)*c,h=n?(i(a.fixUpper,["major"])?Math.round((m-p)/n):Math.floor((m-p)/n))+1:0,M=t?(i(a.fixUpper,["major","minor"])?Math.round((m-u)/t):Math.floor((m-u)/t))+1:0,s=c?(i(a.fixUpper,["major","minor","micro"])?Math.round((m-x)/c):Math.floor((m-x)/c))+1:0,d=t?Math.round(n/t):0,k=c?Math.round(t/c):0,w=n?Math.floor(Math.log(n)/Math.LN10):0,L=t?Math.floor(Math.log(t)/Math.LN10):0,j=f/(m-l);return isFinite(j)||(j=1),{bounds:{lower:l,upper:m},major:{tick:n,start:p,count:h,prec:w},minor:{tick:t,start:u,count:M,prec:L},micro:{tick:c,start:x,count:s,prec:0},minorPerMajor:d,microPerMinor:k,scale:j}};dojox.charting.scaler=function(r,i,a,n){var t={fixUpper:"none",fixLower:"none",natural:!1};if(n&&("fixUpper"in n&&(t.fixUpper=String(n.fixUpper)),"fixLower"in n&&(t.fixLower=String(n.fixLower)),"natural"in n&&(t.natural=Boolean(n.natural))),r>=i)return e(r,i,t,0,0,0,a);var c,f=Math.floor(Math.log(i-r)/Math.LN10),l=n&&"majorTick"in n?n.majorTick:Math.pow(10,f),m=0,p=0;if(n&&"minorTick"in n)m=n.minorTick;else do{if(m=l/10,(!t.natural||m>.9)&&(c=e(r,i,t,l,m,0,a),c.scale*c.minor.tick>o))break;if(m=l/5,(!t.natural||m>.9)&&(c=e(r,i,t,l,m,0,a),c.scale*c.minor.tick>o))break;if(m=l/2,(!t.natural||m>.9)&&(c=e(r,i,t,l,m,0,a),c.scale*c.minor.tick>o))break;return e(r,i,t,l,0,0,a)}while(!1);if(n&&"microTick"in n)p=n.microTick,c=e(r,i,t,l,m,p,a);else do{if(p=m/10,(!t.natural||p>.9)&&(c=e(r,i,t,l,m,p,a),c.scale*c.micro.tick>o))break;if(p=m/5,(!t.natural||p>.9)&&(c=e(r,i,t,l,m,p,a),c.scale*c.micro.tick>o))break;if(p=m/2,(!t.natural||p>.9)&&(c=e(r,i,t,l,m,p,a),c.scale*c.micro.tick>o))break;p=0}while(!1);return p?c:e(r,i,t,l,m,0,a)}}())}});