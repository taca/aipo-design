dojo._xdResourceLoaded({depends:[["provide","dojox.data.FlickrRestStore"],["require","dojox.data.FlickrStore"]],defineResource:function(t){t._hasResource["dojox.data.FlickrRestStore"]||(t._hasResource["dojox.data.FlickrRestStore"]=!0,t.provide("dojox.data.FlickrRestStore"),t.require("dojox.data.FlickrStore"),t.declare("dojox.data.FlickrRestStore",dojox.data.FlickrStore,{constructor:function(t){t&&t.label&&(t.label&&(this.label=t.label),t.apikey&&(this._apikey=t.apikey)),this._cache=[],this._prevRequests={},this._handlers={},this._prevRequestRanges=[],this._maxPhotosPerUser={},this._id=dojox.data.FlickrRestStore.prototype._id++},_id:0,_requestCount:0,_flickrRestUrl:"http://www.flickr.com/services/rest/",_apikey:null,_storeRef:"_S",_cache:null,_prevRequests:null,_handlers:null,_sortAttributes:{"date-posted":!0,"date-taken":!0,interestingness:!0},_fetchItems:function(e,r,a){var s={};e.query?t.mixin(s,e.query):e.query=s={};var o=[],i=[],n="FlickrRestStoreCallback_"+this._id+"_"+ ++this._requestCount,u={format:"json",method:"flickr.photos.search",api_key:this._apikey,extras:"owner_name,date_upload,date_taken",jsoncallback:n},l=!1;if(s.userid&&(l=!0,u.user_id=e.query.userid,o.push("userid"+e.query.userid)),!s.apikey)throw Error("dojox.data.FlickrRestStore: An API key must be specified.");if(l=!0,u.api_key=e.query.apikey,i.push("api"+e.query.apikey),e._curCount=e.count,s.page)u.page=e.query.page,i.push("page"+u.page);else if("undefined"!=typeof e.start&&null!=e.start){e.count||(e.count=20);var h=e.start%e.count,d=e.start,c=e.count;if(0!=h){if(c/2>d)c=d+c,d=0;else{for(var p=20,_=2,g=p;g>0;g--)if(d%g==0&&d/g>=c){_=g;break}c=d/_}e._realStart=e.start,e._realCount=e.count,e._curStart=d,e._curCount=c}else e._realStart=e._realCount=null,e._curStart=e.start,e._curCount=e.count;u.page=d/c+1,i.push("page"+u.page)}e._curCount&&(u.per_page=e._curCount,i.push("count"+e._curCount)),s.lang&&(u.lang=e.query.lang,o.push("lang"+e.lang));this._flickrRestUrl;s.setid&&(u.method="flickr.photosets.getPhotos",u.photoset_id=e.query.set,o.push("set"+e.query.set)),s.tags&&(u.tags=s.tags instanceof Array?s.tags.join(","):s.tags,o.push("tags"+u.tags),!s.tag_mode||"any"!=s.tag_mode.toLowerCase()&&"all"!=s.tag_mode.toLowerCase()||(u.tag_mode=s.tag_mode)),s.text&&(u.text=s.text,o.push("text:"+s.text)),s.sort&&s.sort.length>0?(s.sort[0].attribute||(s.sort[0].attribute="date-posted"),this._sortAttributes[s.sort[0].attribute]&&(u.sort=s.sort[0].descending?s.sort[0].attribute+"-desc":s.sort[0].attribute+"-asc")):u.sort="date-posted-asc",o.push("sort:"+u.sort),o=o.join("."),i=i.length>0?"."+i.join("."):"";var f=o+i;e={query:s,count:e._curCount,start:e._curStart,_realCount:e._realCount,_realStart:e._realStart,onBegin:e.onBegin,onComplete:e.onComplete,onItem:e.onItem};var m={request:e,fetchHandler:r,errorHandler:a};if(this._handlers[f])return this._handlers[f].push(m),void 0;this._handlers[f]=[m];var k=this,v=null,q={url:this._flickrRestUrl,preventCache:!0,content:u},R=function(t,e,r){var a=r.request.onBegin;r.request.onBegin=null;var s,i=r.request;void 0!=typeof i._realStart&&null!=i._realStart&&(i.start=i._realStart,i.count=i._realCount,i._realStart=i._realCount=null),a&&(e&&"undefined"!=typeof e.photos.perpage&&"undefined"!=typeof e.photos.pages?(s=e.photos.perpage*e.photos.pages<=r.request.start+r.request.count?r.request.start+e.photos.photo.length:e.photos.perpage*e.photos.pages,k._maxPhotosPerUser[o]=s,a(s,r.request)):k._maxPhotosPerUser[o]&&a(k._maxPhotosPerUser[o],r.request)),r.fetchHandler(t,r.request),a&&(r.request.onBegin=a)},y=function(t){if("ok"!=t.stat)a(null,e);else{var r=k._handlers[f];if(!r)return console.log("FlickrRestStore: no handlers for data",t),void 0;k._handlers[f]=null,k._prevRequests[f]=t;var s=k._processFlickrData(t,e,o);k._prevRequestRanges[o]||(k._prevRequestRanges[o]=[]),k._prevRequestRanges[o].push({start:e.start,end:e.start+t.photos.photo.length});for(var i=0;i<r.length;i++)R(s,t,r[i])}},S=this._prevRequests[f];if(S)return this._handlers[f]=null,R(this._cache[o],S,m),void 0;if(this._checkPrevRanges(o,e.start,e.count))return this._handlers[f]=null,R(this._cache[o],null,m),void 0;t.global[n]=function(e){y(e),t.global[n]=null};var b=t.io.script.get(q);b.addErrback(function(r){t.disconnect(v),a(r,e)})},getAttributes:function(){return["title","author","imageUrl","imageUrlSmall","imageUrlMedium","imageUrlThumb","link","dateTaken","datePublished"]},getValues:function(t,e){return this._assertIsItem(t),this._assertIsAttribute(e),"title"===e?[this._unescapeHtml(t.title)]:"author"===e?[t.ownername]:"imageUrlSmall"===e?[t.media.s]:"imageUrl"===e?[t.media.l]:"imageUrlMedium"===e?[t.media.m]:"imageUrlThumb"===e?[t.media.t]:"link"===e?["http://www.flickr.com/photos/"+t.owner+"/"+t.id]:"dateTaken"===e?t.datetaken:"datePublished"===e?t.datepublished:void 0},_processFlickrData:function(t,e,r){if(t.items)return dojox.data.FlickrStore.prototype._processFlickrData.apply(this,arguments);var a=["http://farm",null,".static.flickr.com/",null,"/",null,"_",null],s=[];if("ok"==t.stat&&t.photos&&t.photos.photo){s=t.photos.photo;for(var o=0;o<s.length;o++){var i=s[o];i[this._storeRef]=this,a[1]=i.farm,a[3]=i.server,a[5]=i.id,a[7]=i.secret;var n=a.join("");i.media={s:n+"_s.jpg",m:n+"_m.jpg",l:n+".jpg",t:n+"_t.jpg"}}}var u=e.start?e.start:0,l=this._cache[r];l||(this._cache[r]=l=[]);for(var h=0;h<s.length;h++)l[h+u]=s[h];return l},_checkPrevRanges:function(t,e,r){var a=e+r,s=this._prevRequestRanges[t];if(!s)return!1;for(var o=0;o<s.length;o++)if(e>=s[o].start&&a<=s[o].end)return!0;return!1}}))}});