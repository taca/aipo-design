dojo._hasResource["dojox.encoding.bits"]||(dojo._hasResource["dojox.encoding.bits"]=!0,dojo.provide("dojox.encoding.bits"),dojox.encoding.bits.OutputStream=function(){this.reset()},dojo.extend(dojox.encoding.bits.OutputStream,{reset:function(){this.buffer=[],this.accumulator=0,this.available=8},putBits:function(t,i){for(;i;){var e=Math.min(i,this.available),s=(i>=e?t>>>i-e:t)<<this.available-e;this.accumulator|=s&255>>>8-this.available,this.available-=e,this.available||(this.buffer.push(this.accumulator),this.accumulator=0,this.available=8),i-=e}},getWidth:function(){return 8*this.buffer.length+(8-this.available)},getBuffer:function(){var t=this.buffer;return this.available<8&&t.push(this.accumulator&255<<this.available),this.reset(),t}}),dojox.encoding.bits.InputStream=function(t,i){this.buffer=t,this.width=i,this.bbyte=this.bit=0},dojo.extend(dojox.encoding.bits.InputStream,{getBits:function(t){for(var i=0;t;){var e=Math.min(t,8-this.bit),s=this.buffer[this.bbyte]>>>8-this.bit-e;i<<=e,i|=s&~(-1<<e),this.bit+=e,8==this.bit&&(++this.bbyte,this.bit=0),t-=e}return i},getWidth:function(){return this.width-8*this.bbyte-this.bit}}));