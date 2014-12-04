if(!dojo._hasResource["dojox.data.FlickrStore"]&&(dojo._hasResource["dojox.data.FlickrStore"]=!0,dojo.provide("dojox.data.FlickrStore"),dojo.require("dojo.data.util.simpleFetch"),dojo.require("dojo.io.script"),dojo.require("dojo.date.stamp"),dojo.declare("dojox.data.FlickrStore",null,{constructor:function(t){t&&t.label&&(this.label=t.label)},_flickrUrl:"http://api.flickr.com/services/feeds/photos_public.gne",_storeRef:"_S",label:"title",_assertIsItem:function(t){if(!this.isItem(t))throw new Error("dojox.data.FlickrStore: a function was passed an item argument that was not an item")},_assertIsAttribute:function(t){if("string"!=typeof t)throw new Error("dojox.data.FlickrStore: a function was passed an attribute argument that was not an attribute name string")},getFeatures:function(){return{"dojo.data.api.Read":!0}},getValue:function(t,e){var r=this.getValues(t,e);return r?r[0]:void 0},getAttributes:function(){return["title","description","author","datePublished","dateTaken","imageUrl","imageUrlSmall","imageUrlMedium","tags","link"]},hasAttribute:function(t,e){return this.getValue(t,e)?!0:!1},isItemLoaded:function(t){return this.isItem(t)},loadItem:function(){},getLabel:function(t){return this.getValue(t,this.label)},getLabelAttributes:function(){return[this.label]},containsValue:function(t,e,r){for(var a=this.getValues(t,e),i=0;i<a.length;i++)if(a[i]===r)return!0;return!1},getValues:function(t,e){return this._assertIsItem(t),this._assertIsAttribute(e),"title"===e?[this._unescapeHtml(t.title)]:"author"===e?[this._unescapeHtml(t.author)]:"datePublished"===e?[dojo.date.stamp.fromISOString(t.published)]:"dateTaken"===e?[dojo.date.stamp.fromISOString(t.date_taken)]:"imageUrlSmall"===e?[t.media.m.replace(/_m\./,"_s.")]:"imageUrl"===e?[t.media.m.replace(/_m\./,".")]:"imageUrlMedium"===e?[t.media.m]:"link"===e?[t.link]:"tags"===e?t.tags.split(" "):"description"===e?[this._unescapeHtml(t.description)]:void 0},isItem:function(t){return t&&t[this._storeRef]===this?!0:!1},close:function(){},_fetchItems:function(t,e,r){t.query||(t.query={});var a={format:"json",tagmode:"any"};t.query.tags&&(a.tags=t.query.tags),t.query.tagmode&&(a.tagmode=t.query.tagmode),t.query.userid&&(a.id=t.query.userid),t.query.userids&&(a.ids=t.query.userids),t.query.lang&&(a.lang=t.query.lang);var i=this,o=null,n={url:this._flickrUrl,preventCache:!0,content:a},s=function(r){null!==o&&dojo.disconnect(o),e(i._processFlickrData(r),t)};o=dojo.connect("jsonFlickrFeed",s);var u=dojo.io.script.get(n);u.addErrback(function(e){dojo.disconnect(o),r(e,t)})},_processFlickrData:function(t){var e=[];if(t.items){e=t.items;for(var r=0;r<t.items.length;r++){var a=t.items[r];a[this._storeRef]=this}}return e},_unescapeHtml:function(t){return t=t.replace(/&amp;/gm,"&").replace(/&lt;/gm,"<").replace(/&gt;/gm,">").replace(/&quot;/gm,'"'),t=t.replace(/&#39;/gm,"'")}}),dojo.extend(dojox.data.FlickrStore,dojo.data.util.simpleFetch),!jsonFlickrFeed))var jsonFlickrFeed=function(){};