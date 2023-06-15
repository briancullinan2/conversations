if (self.CavalryLogger) { CavalryLogger.start_js(["gZhRA"]); }

__d("StarsRatableComposerCloseResetBehaviorEnum",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({NONE:"none",RESET_TO_EMPTY:"reset_to_empty",RESET_TO_PREVIOUS:"reset_to_previous"})}),null);
__d('StarsRatableBase',['Event','Arbiter','CSS','DOM','Parent','Run','StarsRatableComposerCloseResetBehaviorEnum'],(function a(b,c,d,e,f,g){function h(i,j,k,l){this.root=i;this.freezeOnClick=j;this.stars=c('DOM').scry(i,'a');this.listeners=[c('Event').listen(this.root,'click',this._onClick.bind(this)),c('Event').listen(this.root,'mousemove',this._onMouseMove.bind(this)),c('Event').listen(this.root,'mouseout',this._onMouseOut.bind(this))];this.holdMouseMove=false;this.setRating(k);this.defaultRating=k;this.composerHideResetBehavior=l;this.composerArbiters=[];c('Run').onLeave(this.destroyListeners.bind(this))}h.init=function(i,j,k,l){return new h(i,j,k,l)};Object.assign(h.prototype,{_onClick:function i(event){this.layerHides=0;var j=this._getStarIndexFromEvent(event);if(!j)return;this.setRating(j);if(this.freezeOnClick){this.freeze()}else this.holdMouseMove=true;if(this.composerHideResetBehavior!==c('StarsRatableComposerCloseResetBehaviorEnum').NONE)this.composerArbiters=[c('Arbiter').subscribe('saving_rating_from_composer',function(k,l){this.defaultRating=l;this.setRating(this.composerHideResetBehavior===c('StarsRatableComposerCloseResetBehaviorEnum').RESET_TO_EMPTY?0:l);this._unsubscribeComposerArbiters()}.bind(this)),c('Arbiter').subscribe('canceling_from_composer',function(){this.setRating(this.composerHideResetBehavior===c('StarsRatableComposerCloseResetBehaviorEnum').RESET_TO_EMPTY?0:this.defaultRating);this._unsubscribeComposerArbiters()}.bind(this))];event.prevent()},_unsubscribeComposerArbiters:function i(){for(var j=0;j<this.composerArbiters.length;++j)c('Arbiter').unsubscribe(this.composerArbiters[j]);this.composerArbiters=[]},_onMouseMove:function i(event){if(this.holdMouseMove)return;var j=this._getStarIndexFromEvent(event);if(!j)return;this.setStars(j,true)},_onMouseOut:function i(event){this.holdMouseMove=false;this.updateStars()},_getStarIndexFromEvent:function i(event){var j=c('Parent').byTag(event.getTarget(),'a');if(j)return this.stars.indexOf(j)+1;return 0},setRating:function i(j){this._rating=j;this.updateStars()},updateStars:function i(){this.setStars(this._rating)},setStars:function i(j,k){var l=k?'hoverStar':'fullStar',m=k?'fullStar':'hoverStar';for(var n=0;n<this.stars.length;++n){c('CSS').removeClass(this.stars[n],m);var o=n>=j;c('CSS').conditionClass(this.stars[n],l,!o);c('CSS').conditionClass(this.stars[n],'emptyStar',o)}},freeze:function i(){c('CSS').addClass(this.root,'uiStarsRated');this.destroyListeners()},destroyListeners:function i(){this.listeners.forEach(function(j){j&&j.remove()});this.listeners=[]}});b.StarsRatableBase=f.exports=h}),null);
__d('EntityInteractionLogger',['BanzaiLogger','Event','ScriptPath','collectDataAttributes','pageID'],(function a(b,c,d,e,f,g){'use strict';var h='EntityInteractionLoggerConfig';function i(event){var l=event.target||event.srcElement,m=j(l);if(m!==false){var n={client_time:Date.now(),event:'generic',session_id:c('pageID'),surface_tag:c('ScriptPath').getScriptPath()};Object.assign(n,m);c('BanzaiLogger').log(h,n)}}function j(l){var m=c('collectDataAttributes')(l,['et'],['href']),n=m.normal.href;if((!n||n==='#')&&(!m.et||!m.et.click_point))return false;return m.et}var k={setup:function l(m){c('Event').listen(m,{click:i})},handleEvent:i};f.exports=k}),null);
__d('StaticMapCallout',['csx','CSS','DOM','Parent','Style','Vector','clamp'],(function a(b,c,d,e,f,g,h){var i=3,j=13,k=10,l=j/2;function m(n,o,p,q,r,s){this._root=n;this._arrows=c('DOM').find(n,'.fbMapCalloutArrowWrap');this._topArrow=c('DOM').find(n,'.fbMapCalloutArrowTop');this._bottomArrow=c('DOM').find(n,'.fbMapCalloutArrowBottom');this._leftArrow=c('DOM').find(n,'.fbMapCalloutArrowLeft');this._rightArrow=c('DOM').find(n,'.fbMapCalloutArrowRight');this._main=c('DOM').find(n,'.fbMapCalloutMain');this._content=c('DOM').find(n,'.fbMapCalloutContent');this._mapWidth=p;this._mapHeight=q;var t=this._orientation=o;c('CSS').hide(this._root);c('Style').set(this._root,'position','absolute');this._left=r.left;this._top=r.top;this._right=r.right;this._bottom=r.bottom;Object.assign(this,r);if(t==='left'){c('CSS').setClass(this._arrows,'fbMapCalloutUseArrowLeft');var u=this._right+i;c('Style').set(this._root,'right',u+'px')}else if(t==='right'){c('CSS').setClass(this._arrows,'fbMapCalloutUseArrowRight');var v=this._left+i;c('Style').set(this._root,'left',v+'px')}else if(t==='top'){c('CSS').setClass(this._arrows,'fbMapCalloutUseArrowTop');var w=this._bottom+i;c('Style').set(this._root,'bottom',w+'px')}else if(t==='bottom'){c('CSS').setClass(this._arrows,'fbMapCalloutUseArrowBottom');var x=this._top+i;c('Style').set(this._root,'top',x+'px')}if(s){var y=c('Parent').bySelector(this._root,"._5cw9");y.appendChild(this._root)}}Object.assign(m.prototype,{setContent:function n(o){c('DOM').setContent(this._content,o);this.calloutDimensionsChanged()},calloutDimensionsChanged:function n(){if(this._orientation==='left'||this._orientation==='right'){var o=c('Vector').getElementDimensions(this._main),p=o.y/2;if(this._top+o.y/2>this._mapHeight-k)p=o.y-(this._mapHeight-this._top-k);if(p>this._top-k)p=this._top-k;p=c('clamp')(p,l,o.y-l);this._setArrowYOffset(p);c('Style').set(this._root,'top',this._top-p+'px')}else{var q=c('Vector').getElementDimensions(this._main).x;q+=1;var r=q/2;if(this._left+q/2>this._mapWidth-k)r=q-(this._mapWidth-this._left-k);if(r>this._left-k)r=this._left-k;r=c('clamp')(r,l,q-l);this._setArrowXOffset(r);c('Style').set(this._root,'left',this._left-r+'px')}},show:function n(){c('CSS').show(this._root)},hide:function n(){c('CSS').hide(this._root)},setZIndex:function n(o){c('Style').set(this._root,'z-index',o)},_setArrowYOffset:function n(o){o-=l;c('Style').set(this._leftArrow,'top',o+'px');c('Style').set(this._rightArrow,'top',o+'px')},_setArrowXOffset:function n(o){o-=l;c('Style').set(this._topArrow,'left',o+'px');c('Style').set(this._bottomArrow,'left',o+'px')}});f.exports=m}),null);
__d('StaticMapPin',['Event'],(function a(b,c,d,e,f,g){var h=0,i=1,j=2,k=10,l=20;function m(n,o,p,q,r){this._pin=n;this._tooltip=o;this._callout=p;this._calloutContainer=q;this._mapID=r;this._state=h;m.instancesByMapID[r]=m.instancesByMapID[r]||[];m.instancesByMapID[r].push(this);c('Event').listen(this._pin,'mouseover',this._onMouseIn.bind(this));c('Event').listen(this._pin,'mouseout',this._onMouseOut.bind(this));c('Event').listen(this._pin,'click',this._onClick.bind(this))}Object.assign(m.prototype,{_onMouseIn:function n(){if(this._state!==h||!this._tooltip)return;this._calloutContainer.show();this._calloutContainer.setContent(this._tooltip);this._calloutContainer.setZIndex(k);this._state=i},_onMouseOut:function n(){if(this._state!==i)return;this._calloutContainer.hide();this._state=h},_onClick:function n(){if(!this._callout)return;if(this._state===j){this._calloutContainer.setContent(this._tooltip);this._calloutContainer.setZIndex(k);this._state=i;return}m.hideAll(this._mapID);this._calloutContainer.show();this._calloutContainer.setContent(this._callout);this._calloutContainer.setZIndex(l);this._state=j}});Object.assign(m,{instancesByMapID:[],hideAll:function n(o){var p=m.instancesByMapID[o];for(var q=0;q<p.length;q++){p[q]._calloutContainer.hide();p[q]._state=h}},construct:function n(o,p,q,r,s){return new m(o,p,q,r,s)}});f.exports=m}),null);
__d("XReviewsTabUpdateHistogramController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/ajax\/pages\/review\/update_histogram\/",{page_id:{type:"Int"}})}),null);
__d('ReviewsController',['csx','fbt','ix','Arbiter','AsyncRequest','DOM','Dialog','Event','Image.react','React','ReactDOM','Run','XReviewsTabUpdateHistogramController','ge'],(function a(b,c,d,e,f,g,h,i,j){var k={},l={},m={},n={},o={},p={registerRevealProfanity:function q(r,s,t){c('Event').listen(s,'click',function(){r.style.display='none';t.style.display='inline'})},registerButton:function q(r,s){k[s]=k[s]||[];k[s].push(r)},registerViewerReview:function q(r,s){l[s]=l[s]||[];l[s].push(r)},registerComposer:function q(r,s){m[s]=m[s]||[];m[s].push(r)},registerToggle:function q(r,s,t,u){n[r]=n[r]||[];n[r].push([s,t,u])},registerStoryDeleteListener:function q(r){c('Arbiter').subscribe('Story/delete',function(s,t){this._updateToggles(r,false);new (c('AsyncRequest'))(c('XReviewsTabUpdateHistogramController').getURIBuilder().setInt('page_id',r).getURI()).setMethod('GET').setReadOnly(true).send()}.bind(this))},addUserReview:function q(r,s,t,u,v,w,x,y,z,aa,ba){this._updateState(true,r,s,t,u,v,w,x,y,z,aa,ba)},deleteUserReview:function q(r,s,t,u,v,w){this._updateState(false,r,null,null,null,s,t,u,w,null,null);if(v){var x=document.getElementById(v),y=x.parentNode.parentNode;y.parentNode.removeChild(y)}},_updateState:function q(r,s,t,u,v,w,x,y,z,aa,ba,ca){var da;if(aa){var ea=c('ge')('own_review_container');if(ea)c('DOM').setContent(ea,aa);}else if(z){var fa=c('ge')('viewer_own_review_tab');if(fa)c('DOM').replace(fa,z);}else if(r){var ga=c('ge')('page_reviews_tab_list');if(ga)c('DOM').prependContent(ga,u);var ha="div._yj3",ia=c('DOM').scry(document,ha)[0];if(ia)ia.parentNode.removeChild(ia);}var ja=l[s]||[];for(da=0;da<ja.length;da++)c('DOM').remove(ja[da]);this._updateToggles(s,r);var ka=m[s]||[];for(da=0;da<ka.length;da++){var la=ka[da];if(r){la.hide()}else{la.clear();la.show()}}var ma=k[s]||[];for(da=0;da<ma.length;da++){var na=ma[da],oa=c('DOM').find(na,'.uiButtonText'),pa=c('DOM').find(na,'i'),qa,ra;if(r){qa=j("76766");ra=i._("Reviewed")}else{qa=j("76771");ra=i._("Review")}var sa=c('DOM').create('span');c('ReactDOM').render(c('React').createElement('div',null,ra),oa);c('ReactDOM').render(c('React').createElement(c('Image.react'),{src:qa,style:{paddingRight:'5px'}}),sa);c('DOM').replace(pa,sa)}if(r){var ta=c('DOM').scry(document,'#page_recommendations_browse_list')[0];if(ta)c('DOM').prependContent(ta,t);}if(w){var ua=c('ge')('page_reviews_pill_and_histogram');if(ua)c('DOM').replace(ua,w);}if(x){var va=c('ge')('pages_inline_rating_summary');if(va)c('DOM').replace(va,x);}if(y){var wa=c('ge')('pages_review_needy_place_card');if(wa)c('DOM').replace(wa,y);}if(ba){var xa=c('ge')('spotlight_reviews_card_list');if(xa)c('DOM').prependContent(xa,ba);}if(ca){var ya=c('ge')('review_composer_container');c('DOM').insertAfter(ya,ca)}},registerPhotoUpload:function q(r,s){c('Arbiter').subscribe('multi-upload/images-upload-completed/'+s,function(){o[s]=false});c('Arbiter').subscribe('multi-upload/images-upload-start/'+s,function(){o[s]=true});c('Event').listen(r,'submit',function(){if(o[s]){new (c('Dialog'))().setTitle(i._("Photos Are Uploading")).setSemiModal(true).setButtons(c('Dialog').OK).setBody(i._("Please wait until photo is uploaded before posting.")).show();return false}return true}.bind(this))},_updateToggles:function q(r,s){var t=n[r]||[];for(var u=0;u<t.length;u++){var v=t[u],w=v[s?1:2];c('DOM').setContent(v[0],w)}}};c('Run').onLeave(function(){k={};l={};m={};n={};o={}});f.exports=p}),null);
__d('PlaceActionLink',['AsyncRequest','Dialog'],(function a(b,c,d,e,f,g){var h={start_claim_link:function i(j){var k=new (c('AsyncRequest'))().setMethod('POST').setURI('/ajax/places/claim/start_claim.php').setData({id:j});new (c('Dialog'))().setAsync(k).show();return false},refer_claim_link:function i(j){var k=new (c('AsyncRequest'))().setMethod('POST').setURI('/ajax/places/claim/refer_claim.php').setData({id:j});new (c('Dialog'))().setAsync(k).show();return false}};f.exports=h}),null);
__d('legacy:place-action-link',['PlaceActionLink'],(function a(b,c,d,e,f,g){b.PlaceActionLink=c('PlaceActionLink')}),3);
__d('SavedForLaterNUX',['csx','DOM','Event','Tooltip'],(function a(b,c,d,e,f,g,h){var i="._t6k",j={init:function k(l,m){var n=c('DOM').scry(m,i);this.suppress(n,true);c('Event').listen(l,'click',function(){this.suppress(n,false)}.bind(this))},suppress:function k(l,m){for(var n=0;n<l.length;n++){var o=l[n];c('Tooltip').suppress(o,m)}}};f.exports=j}),null);
__d('LocalContentClickLogger',['BanzaiLogger','EventListener'],(function a(b,c,d,e,f,g){h.prototype.initClickThroughLogging=function(i,j,k){'use strict';c('EventListener').listen(i,'click',function(){return this.sendLoggingRequest(j,k)}.bind(this))};h.prototype.initMenuClickLogging=function(i,j,k,l){'use strict';i.subscribe('itemclick',function(m,n){if(n.item.getValue()==j)this.sendLoggingRequest(k,l);}.bind(this))};h.prototype.initPrivacyMenuClickLogging=function(i,j,k){'use strict';c('EventListener').listen(i,'click',function(event){j.button_text=event.target.textContent;this.sendLoggingRequest(j,k)}.bind(this))};h.prototype.sendLoggingRequest=function(i,j){'use strict';if(j=='reviews'){c('BanzaiLogger').log('ReviewConsumptionLoggerConfig',i)}else if(j=='review_production'){c('BanzaiLogger').log('ReviewProductionLoggerConfig',i)}else if(j=='menus')c('BanzaiLogger').log('MenuConsumptionLoggerConfig',i);};function h(){'use strict'}f.exports=new h()}),null);