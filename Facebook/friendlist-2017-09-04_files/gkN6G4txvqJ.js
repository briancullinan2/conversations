if (self.CavalryLogger) { CavalryLogger.start_js(["s\/BA7"]); }

__d('Barrier',[],(function a(b,c,d,e,f,g){function h(i,j){'use strict';if(i===undefined||i<0||j===undefined)return null;if(i==0){j();return}this.ops_num=i;this.callback=j}h.prototype.notify=function(){'use strict';if(this.ops_num<=0)return;this.ops_num--;if(this.ops_num==0)this.callback();};f.exports=h}),null);
__d("XEgoExpandAsyncController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/ego\/expand\/",{scroll_area_id:{type:"String"},service_id:{type:"String"},filter_ids:{type:"String",defaultValue:""},num_requested:{type:"Int"},pagination_offset:{type:"Int",defaultValue:0}})}),null);
__d('NetEgoShowcase',['csx','cx','Arbiter','AsyncRequest','CSS','DOM','Event','Parent','TidyArbiterMixin','XEgoExpandAsyncController','XPubcontentImpressionLoggingController','mixin','tidyEvent'],(function a(b,c,d,e,f,g,h,i){var j,k,l={UPDATED:0,UPDATING:1};j=babelHelpers.inherits(m,c('mixin')(c('TidyArbiterMixin')));k=j&&j.prototype;function m(n,o){'use strict';k.constructor.call(this);this.$NetEgoShowcase1=n;this.$NetEgoShowcase2=[];this.$NetEgoShowcase3=o.serializedData;this.$NetEgoShowcase4=o.autoExpandLimit;this.$NetEgoShowcase5=o.serviceId;this.$NetEgoShowcase6=o.requestSize;this.$NetEgoShowcase7=l.UPDATED;this.$NetEgoShowcase8=0;c('tidyEvent')(this.$NetEgoShowcase1.subscribe('page_end',this.$NetEgoShowcase9.bind(this)),c('Arbiter').subscribe('netego_replacedUnit',this.$NetEgoShowcase10.bind(this)),c('Event').listen(this.$NetEgoShowcase1.getNode(),'click',this.$NetEgoShowcase11.bind(this)));this.$NetEgoShowcase12(o.firstItemId)}m.prototype.$NetEgoShowcase13=function(){'use strict';if(!this.$NetEgoShowcase4||this.$NetEgoShowcase7===l.UPDATING)return;this.$NetEgoShowcase7=l.UPDATING;var n=c('DOM').scry(this.$NetEgoShowcase1.getNode(),'.ego_unit');if(n.length<this.$NetEgoShowcase4&&n.length-this.$NetEgoShowcase1.getIndex()<=3){var o=this.$NetEgoShowcase4-n.length;this.$NetEgoShowcase14(o>this.$NetEgoShowcase6?o%this.$NetEgoShowcase6+this.$NetEgoShowcase6:o);return}this.$NetEgoShowcase7=l.UPDATED};m.prototype.$NetEgoShowcase14=function(n){'use strict';var o=Object.keys(this.$NetEgoShowcase3),p=c('XEgoExpandAsyncController').getURIBuilder().setString('service_id',this.$NetEgoShowcase5).setString('filter_ids',JSON.stringify(o)).setInt('num_requested',n).setInt('pagination_offset',this.$NetEgoShowcase8).getURI();new (c('AsyncRequest'))(p).setHandler(this.$NetEgoShowcase15.bind(this)).setErrorHandler(this.$NetEgoShowcase15.bind(this)).setRelativeTo(this.$NetEgoShowcase1.getNode()).send()};m.prototype.$NetEgoShowcase15=function(n){'use strict';if(!n.getError()){var o=n.getPayload().suggestions;this.$NetEgoShowcase8+=o.length;for(var p=0;p<o.length;p++){var q=c('DOM').create('li',{className:"_2xr"},o[p]);this.$NetEgoShowcase1.push(q)}var r=n.getPayload().serializedData;r&&Object.keys(r).forEach(function(s){this.$NetEgoShowcase3[s]=r[s]},this)}this.$NetEgoShowcase7=l.UPDATED};m.prototype.$NetEgoShowcase11=function(event){'use strict';var n=event.getTarget(),o=this.$NetEgoShowcase16(n,'ego_x');if(!o){o=this.$NetEgoShowcase16(n,'ego_like');if(!o)return;}var p=c('DOM').scry(o,'^.ego_unit');if(!p.length)return;var q=this.$NetEgoShowcase1.getIndex(),r=p[q]&&c('CSS').hasClass(p[q],'egoKeepUnitContainerForReplace');if(!r){this.$NetEgoShowcase1.remove(q);if(this.$NetEgoShowcase1.getNumItems()===0)this.$NetEgoShowcase17();}};m.prototype.$NetEgoShowcase16=function(n,o){'use strict';if(c('CSS').hasClass(n,o))return n;var p=c('DOM').scry(n,'^.'+o);if(p.length)return p[0];return null};m.prototype.$NetEgoShowcase10=function(n,o){'use strict';var p=c('DOM').scry(this.$NetEgoShowcase1.getNode(),"li._2xr");for(var q=0;q<p.length;q++)if(!p[q].childNodes.length)this.$NetEgoShowcase1.remove(q);var r=c('DOM').scry(this.$NetEgoShowcase1.getNode(),'.ego_unit');if(!r.length){var s=c('Parent').byClass(this.$NetEgoShowcase1.getNode(),'ego_section');if(s)c('CSS').hide(s);return}if(!o.serializedData)return;var t=r[this.$NetEgoShowcase1.getIndex()].getAttribute('data-ego-fbid'),u=JSON.parse(o.serializedData);for(var v in u)if(t===v){this.$NetEgoShowcase3[v]=u[v];this.$NetEgoShowcase12(v)}};m.prototype.$NetEgoShowcase9=function(event){'use strict';var n=c('DOM').scry(this.$NetEgoShowcase1.getNode(),'.ego_unit'),o=n[this.$NetEgoShowcase1.getIndex()].getAttribute('data-ego-fbid');this.$NetEgoShowcase12(o);this.$NetEgoShowcase13()};m.prototype.$NetEgoShowcase12=function(n){'use strict';var o=this.$NetEgoShowcase2.indexOf(n)>-1;if(!o&&this.$NetEgoShowcase3[n]){this.$NetEgoShowcase2.push(n);var p=c('XPubcontentImpressionLoggingController').getURIBuilder();new (c('AsyncRequest'))().setMethod('POST').setURI(p.getURI()).setData({q:this.$NetEgoShowcase3[n]}).send()}};m.prototype.$NetEgoShowcase17=function(){'use strict';var n=c('DOM').scry(this.$NetEgoShowcase1.getNode(),'^.ego_column');if(n.length)c('DOM').remove(n[0]);};f.exports=m}),null);
__d('PubcontentSuggestionsUtil',['csx','cx','DOM','DOMDimensions','LitestandEllipsis','Parent','Style'],(function a(b,c,d,e,f,g,h,i){var j={truncateName:function k(l,m){var n=c('DOM').scry(l,'.nameText')[0];if(n){var o=(c('Style').getFloat(l,'lineHeight')+c('Style').getFloat(l,'marginBottom'))*m;c('LitestandEllipsis').add(n,o,l);var p=c('DOM').scry(l.parentNode,'.socialContext')[0];if(p){o-=c('DOMDimensions').getElementDimensions(l).height;c('LitestandEllipsis').add(p,o,p)}}},truncateText:function k(l,m){if(l){var n=c('Style').getFloat(l,'lineHeight')*m;c('LitestandEllipsis').add(l,n,l)}},truncateAllText:function k(l,m){var n,o=c('DOM').scry(l,'.ego_title');for(n=0;n<o.length;n++)j.truncateName(o[n],2);var p=c('DOM').scry(l,'.descriptionText');for(n=0;n<p.length;n++)j.truncateText(p[n],2);var q=c('DOM').scry(l,'.ego_like');for(n=0;n<q.length;n++)j.cutLikeButtonText(q[n],m);},cutButtonText:function k(l){var m=c('Parent').bySelector(l,"._5ry0");if(m&&c('DOMDimensions').getElementDimensions(l).width>c('DOMDimensions').getElementDimensions(m).width){var n=c('DOM').scry(l,'input')[0];n.value=''}},cutLikeButtonText:function k(l,m){var n=m?c('Parent').byClass(l,'ego_unit'):c('Parent').byClass(l,'likeButton');if(n&&c('DOMDimensions').getElementDimensions(l).width>c('DOMDimensions').getElementDimensions(n).width){var o=c('DOM').scry(l,'img');if(o.length){o[0].parentNode.removeChild(o[0].nextSibling)}else{o=c('DOM').scry(l,'i');if(o.length)o[0].parentNode.removeChild(o[0].nextSibling);}}}};f.exports=j}),null);
__d('Showcase',['Animation','Barrier','Ease','Slideshow','Style','shield'],(function a(b,c,d,e,f,g){var h,i,j=c('Ease').sineInOut;h=babelHelpers.inherits(k,c('Slideshow'));i=h&&h.prototype;k.prototype._animateTo=function(l){'use strict';if(this._animating)return;var m=this._items.length,n=(l+m)%m;if(n==this._currentIndex)return;var o=new (c('Barrier'))(2,c('shield')(this._setCurrent,this,n)),p=o.notify.bind(o);this._animating=true;this.inform('page_start',n);this._conditionFade(this._items[this._currentIndex],false,p);this._conditionFade(this._items[n],true,p)};k.prototype._conditionFade=function(l,m,n){'use strict';c('Style').set(l,'visibility','visible');new (c('Animation'))(l).from('opacity',m?0:1).to('opacity',m?1:0).duration(this._config.animationDuration).ease(j).ondone(function(){if(!m)c('Style').set(l,'visibility','hidden');n()}).go()};function k(){'use strict';h.apply(this,arguments)}f.exports=k}),null);