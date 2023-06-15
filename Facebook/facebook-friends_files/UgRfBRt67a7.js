if (self.CavalryLogger) { CavalryLogger.start_js(["SvMnd"]); }

__d('BasicFBNux',['AsyncRequest','XBasicFBNuxDismissController','XBasicFBNuxViewController'],(function a(b,c,d,e,f,g){var h={subscribeHide:function i(j,k){j.subscribe('hide',h.onDismiss.bind(this,k))},onView:function i(j){var k=c('XBasicFBNuxViewController').getURIBuilder().setInt('nux_id',j).getURI();new (c('AsyncRequest'))().setURI(k).send()},onDismiss:function i(j){var k=c('XBasicFBNuxDismissController').getURIBuilder().setInt('nux_id',j).getURI();new (c('AsyncRequest'))().setURI(k).send()}};f.exports=h}),null);
__d('FileInputUploader',['ArbiterMixin','DOM','DTSG','FileForm','Form','mixin'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits(j,c('mixin')(c('ArbiterMixin')));i=h&&h.prototype;function j(k){'use strict';i.constructor.call(this);this._inputElem=k;this._data={}}j.prototype.setInput=function(k){'use strict';this._inputElem=k;return this};j.prototype.setURI=function(k){'use strict';this._uri=k;return this};j.prototype.setData=function(k){'use strict';this._data=k;return this};j.prototype.setPreprocessHandler=function(k){'use strict';this._preprocessHandler=k;return this};j.prototype.setNetworkErrorRetryLimit=function(k){'use strict';this._retryLimit=k;return this};j.prototype.setFiles=function(k){'use strict';this._files=k;return this};j.prototype.setAllowCrossOrigin=function(k){'use strict';this._allowCrossOrigin=!!k;return this};j.prototype.setAllowCrossPageTransition=function(k){'use strict';this._allowCrossPageTransition=!!k;return this};j.prototype.setUploadInParallel=function(k){'use strict';this._uploadInParallel=!!k;return this};j.prototype.setConcurrentLimit=function(k){'use strict';this._concurrentLimit=k;return this};j.prototype.abort=function(){'use strict';if(this._fileForm){this._fileForm.abort();this._destroyFileForm()}};j.prototype.send=function(){'use strict';this._createForm();var k=!this._inputElem.parentElement;if(!k){var l=this._inputElem.cloneNode(false);c('DOM').replace(this._inputElem,l)}c('DOM').appendContent(this._formElem,this._inputElem);c('DOM').appendContent(document.body,this._formElem);this._fileForm.submit();if(!k)c('DOM').replace(l,this._inputElem);this._removeFormEl()};j.prototype._onFileFormEvent=function(k,l){'use strict';if(k==='success'||k==='failure')this._destroyFileForm();return this.inform(k,l)};j.prototype._createForm=function(){'use strict';this._destroyFileForm();this._formElem=c('DOM').create('form',{action:this._uri,method:'post'});this._fileForm=new (c('FileForm'))(this._formElem,null,{allowCrossOrigin:this._allowCrossOrigin,allowCrossPageTransition:this._allowCrossPageTransition,uploadInParallel:this._uploadInParallel,concurrentLimit:this._concurrentLimit,preprocessHandler:this._preprocessHandler,networkErrorRetryLimit:this._retryLimit});if(this._files)this._fileForm.setFiles(this._files);this._fileForm.subscribe(c('FileForm').EVENTS,this._onFileFormEvent.bind(this));c('Form').createHiddenInputs(babelHelpers['extends']({fb_dtsg:c('DTSG').getToken()},this._data),this._formElem)};j.prototype._removeFormEl=function(){'use strict';c('DOM').remove(this._formElem);this._formElem=null};j.prototype._destroyFileForm=function(){'use strict';if(this._fileForm){this._fileForm.destroy();this._fileForm=null}};f.exports=j}),null);
__d('XReferer',['Base64','Cookie','FBJSON','URI','setTimeoutAcrossTransitions'],(function a(b,c,d,e,f,g){var h={update:function i(j,k,l){if(!l){c('Cookie').set('x-referer','');return}if(j!=null)j=h.truncatePath(j);if(k!=null)k=h.truncatePath(k);var m=window.location.pathname+window.location.search,n=c('URI').getRequestURI(),o=n.getSubdomain();if(k!=null)h._setCookie(k,m,o);if(j!=null)c('setTimeoutAcrossTransitions')(function(){if(j!=null)h._setCookie(j,m,o);},0);},_setCookie:function i(j,k,l){var m={r:j,h:k,s:l},n=c('Base64').encode(c('FBJSON').stringify(m));c('Cookie').set('x-referer',n)},truncatePath:function i(j){var k=1024;if(j&&j.length>k)j=j.substring(0,k)+'...';return j}};f.exports=h}),null);
__d('HistoryManager',['SessionName','Env','Event','URI','UserAgent_DEPRECATED','emptyFunction','goOrReplace','isInIframe','setIntervalAcrossTransitions','XReferer'],(function a(b,c,d,e,f,g){c('SessionName').getName();var h={history:null,current:0,fragment:null,isInitialized:function i(){return !!h._initialized},init:function i(){if(!c('Env').ALLOW_TRANSITION_IN_IFRAME&&c('isInIframe')())return;if(h._initialized)return h;var j=new (c('URI'))(window.location.href),k=j.getFragment()||'';if(k.charAt(0)==='!'){k=k.substr(1);j.setFragment(k)}Object.assign(h,{_initialized:true,fragment:k,orig_fragment:k,history:[j],callbacks:[],lastChanged:Date.now(),canonical:new (c('URI'))('#'),user:0,enabled:true,debug:c('emptyFunction')});if(window.history&&history.pushState){this.lastURI=document.URL;try{window.history.replaceState(this.lastURI,null)}catch(l){if(!(l.number===-2147467259))throw l;}c('Event').listen(window,'popstate',function(l){var m=l&&l.state&&typeof l.state==='string';if(m&&h.lastURI!=l.state){h.lastURI=l.state;h.lastChanged=Date.now();h.notify(new (c('URI'))(l.state).getUnqualifiedURI().toString())}}.bind(h));if(c('UserAgent_DEPRECATED').webkit()<534||c('UserAgent_DEPRECATED').chrome()<=13){c('setIntervalAcrossTransitions')(h.checkURI,42);h._updateRefererURI(this.lastURI)}return h}h._updateRefererURI(c('URI').getRequestURI(false));if(c('UserAgent_DEPRECATED').webkit()<500||c('UserAgent_DEPRECATED').firefox()<2){h.enabled=false;return h}if('onhashchange' in window){c('Event').listen(window,'hashchange',function(){setTimeout(h.checkURI.bind(h),0)})}else c('setIntervalAcrossTransitions')(h.checkURI,42);return h},registerURIHandler:function i(j){h.callbacks.push(j);return h},setCanonicalLocation:function i(j){h.canonical=new (c('URI'))(j);return h},notify:function i(j){if(j==h.orig_fragment)j=h.canonical.getFragment();for(var k=0;k<h.callbacks.length;k++)try{if(h.callbacks[k](j))return true;}catch(l){}return false},checkURI:function i(){if(Date.now()-h.lastChanged<400)return;if(window.history&&history.pushState){var j=new (c('URI'))(document.URL).removeQueryData('ref').toString(),k=new (c('URI'))(h.lastURI).removeQueryData('ref').toString();if(j!=k){h.lastChanged=Date.now();h.lastURI=j;if(c('UserAgent_DEPRECATED').webkit()<534)h._updateRefererURI(j);h.notify(new (c('URI'))(j).getUnqualifiedURI().toString())}return}if(c('UserAgent_DEPRECATED').webkit()&&window.history.length==200){if(!h.warned)h.warned=true;return}var l=new (c('URI'))(window.location.href).getFragment();if(l.charAt(0)=='!')l=l.substr(1);l=l.replace(/%23/g,'#');if(l!=h.fragment.replace(/%23/g,'#')){h.debug([l,' vs ',h.fragment,'whl: ',window.history.length,'QHL: ',h.history.length].join(' '));for(var m=h.history.length-1;m>=0;--m)if(h.history[m].getFragment().replace(/%23/g,'#')==l)break;++h.user;if(m>=0){h.go(m-h.current)}else h.go('#'+l);--h.user}},_updateRefererURI:function i(j){if(j instanceof c('URI'))j=j.toString();c('XReferer').update(j,null,true)},go:function i(j,k,l){if(window.history&&history.pushState){k||typeof j=='number';var m=new (c('URI'))(j).removeQueryData(['ref','messaging_source']).toString();h.lastChanged=Date.now();this.lastURI=m;if(l){window.history.replaceState(j,null,m)}else window.history.pushState(j,null,m);if(c('UserAgent_DEPRECATED').webkit()<534)h._updateRefererURI(j);return false}h.debug('go: '+j);if(k===undefined)k=true;if(!h.enabled)if(!k)return false;if(typeof j=='number'){if(!j)return false;var n=j+h.current,o=Math.max(0,Math.min(h.history.length-1,n));h.current=o;n=h.history[o].getFragment()||h.orig_fragment;n=new (c('URI'))(n).removeQueryData('ref').getUnqualifiedURI().toString();h.fragment=n;h.lastChanged=Date.now();if(!h.user)c('goOrReplace')(window.location,window.location.href.split('#')[0]+'#!'+n,l);if(k)h.notify(n);h._updateRefererURI(n);return false}j=new (c('URI'))(j);if(j.getDomain()==new (c('URI'))(window.location.href).getDomain())j=new (c('URI'))('#'+j.getUnqualifiedURI());var p=h.history[h.current].getFragment(),q=j.getFragment();if(q==p||p==h.orig_fragment&&q==h.canonical.getFragment()){if(k)h.notify(q);h._updateRefererURI(q);return false}if(l)h.current--;var r=h.history.length-h.current-1;h.history.splice(h.current+1,r);h.history.push(new (c('URI'))(j));return h.go(1,k,l)},getCurrentFragment:function i(){var j=c('URI').getRequestURI(false).getFragment();return j==h.orig_fragment?h.canonical.getFragment():j}};f.exports=h}),null);
__d('escapeJSQuotes',[],(function a(b,c,d,e,f,g){function h(i){if(typeof i=='undefined'||i==null||!i.valueOf())return '';return i.toString().replace(/\\/g,'\\\\').replace(/\n/g,'\\n').replace(/\r/g,'\\r').replace(/\"/g,'\\x22').replace(/\'/g,'\\\'').replace(/</g,'\\x3c').replace(/>/g,'\\x3e').replace(/&/g,'\\x26')}f.exports=h}),null);
__d('PageTransitions',['invariant','fbt','Arbiter','Bootloader','DOMQuery','DOMScroll','Env','Event','HistoryManager','JSLogger','LayerHideOnEscape','PageHooks','PageNavigationStageLogger','PageTransitionsConfig','PageTransitionsRegistrar','React','ScriptPath','URI','Vector','areEqual','clickRefAction','escapeJSQuotes','ge','goOrReplace','isInIframe'],(function a(b,c,d,e,f,g,h,i){var j=['mh_','killabyte','tfc_','tfi_'],k={};function l(q,r){k[q.getUnqualifiedURI()]=r}function m(q){return k[q.getUnqualifiedURI()]}function n(q){delete k[q.getUnqualifiedURI()]}function o(){var q={};window.location.search.slice(1).split('&').forEach(function(r){var s=r.split('='),t=s[0],u=s[1];if(j.some(function(v){return t.startsWith(v)}))q[t]=u;});return q}var p={_scroll_locked:false,_transitions_disabled:false,isInitialized:function q(){return !!p._initialized},_init:function q(){if(!c('Env').ALLOW_TRANSITION_IN_IFRAME&&c('isInIframe')())return;if(p._initialized)return p;var r=c('PageTransitionsRegistrar').getMostRecentURI();p._current_uri=r;p._most_recent_uri=r;p._next_uri=r;p._initialized=true;var s,t=c('URI').getRequestURI(false);if(t.getFragment().startsWith('/')){s=t.getFragment()}else s=r;c('HistoryManager').init().setCanonicalLocation('#'+s).registerURIHandler(p._historyManagerHandler);c('Event').listen(window,'scroll',function(){if(!p._scroll_locked)l(p._current_uri,c('Vector').getScrollPosition());});return p},registerHandler:c('PageTransitionsRegistrar').registerHandler,removeHandler:c('PageTransitionsRegistrar').removeHandler,getCurrentURI:function q(r){this._init();if(!p._current_uri&&!r)return new (c('URI'))(p._most_recent_uri);return new (c('URI'))(p._current_uri)},isTransitioning:function q(){this._init();return !p._current_uri},getNextURI:function q(){this._init();return this._next_uri},getMostRecentURI:function q(){this._init();return new (c('URI'))(p._most_recent_uri)},go:function q(r,s){this._init();var t=o(),u=new (c('URI'))(r).removeQueryData('quickling').addQueryData(t).getQualifiedURI();c('JSLogger').create('pagetransition').debug('go',{uri:u.toString()});n(u);!s&&c('clickRefAction')('uri',{href:u.toString()},null,'INDIRECT');p._loadPage(u,function(v){if(v){c('HistoryManager').go(u.toString(),false,s)}else{c('PageNavigationStageLogger').setNote('pt_not_handled');c('PageNavigationStageLogger').updateCookie();c('goOrReplace')(window.location,u,s)}})},_historyManagerHandler:function q(r){if(r.charAt(0)!='/')return false;c('clickRefAction')('h',{href:r});if(!c('ScriptPath').getClickPointInfo())c('ScriptPath').setClickPointInfo({click:'back'});p._loadPage(new (c('URI'))(r),function(s){if(!s){c('PageNavigationStageLogger').setNote('hist_manager_fallback');c('goOrReplace')(window.location,r,true)}});return true},_loadPage:function q(r,s){if(new (c('URI'))(r).getFragment()&&c('areEqual')(new (c('URI'))(r).setFragment(null).getQualifiedURI(),new (c('URI'))(p._current_uri).setFragment(null).getQualifiedURI())){c('Arbiter').inform("pre_page_fragment_transition",{from:new (c('URI'))(p._current_uri).getFragment(),to:new (c('URI'))(r).getFragment()});if(p.restoreScrollPosition(r)){p._current_uri=p._most_recent_uri=r;c('Arbiter').inform("page_fragment_transition",{fragment:new (c('URI'))(r).getFragment()});return}}c('PageNavigationStageLogger').setCookieForNavigation(r);var t;if(p._current_uri)t=m(p._current_uri);var u=function x(){if(t&&p._current_uri)l(p._current_uri,t);p._current_uri=null;p._next_uri=r;if(t)c('DOMScroll').scrollTo(t,false);p._scroll_locked=true;var y=p._handleTransition(r);if(s)if(y===c('PageTransitionsRegistrar').DELAY_HISTORY){setTimeout(function(){return s(y)},0)}else s(y);},v=p._next_uri;p._next_uri=r;var w=c('PageHooks').runHooks('onbeforeleavehooks');p._next_uri=v;if(w){p._warnBeforeLeaving(w,u)}else u();},_handleTransition:function q(r){window.onbeforeleavehooks=undefined;if(p._transitions_disabled||!r.isSameOrigin()){c('PageNavigationStageLogger').setNote('pt_disabled');return false}var s=c('PageTransitionsConfig').reloadOnBootloadError&&this._hasBootloadErrors();if(s){c('PageNavigationStageLogger').setNote('bl_err');return false}var t,u=b.AsyncRequest;if(u)t=u.getLastID();c('Arbiter').inform("pre_page_transition",{from:p.getMostRecentURI(),to:r});var v=c('PageTransitionsRegistrar')._getTransitionHandlers();for(var w=v.length-1;w>=0;--w){var x=v[w];if(!x)continue;for(var y=x.length-1;y>=0;--y){var z=x[y](r);if(z===true||z===c('PageTransitionsRegistrar').DELAY_HISTORY){var aa={sender:this,uri:r,id:t};try{c('Arbiter').inform("page_transition",aa)}catch(ba){}return z}else x.splice(y,1);}}return false},disableTransitions:function q(){p._transitions_disabled=true},_hasBootloadErrors:function q(){return c('Bootloader').getErrorUrls().length>0},unifyURI:function q(){this._init();p._current_uri=p._most_recent_uri=p._next_uri},transitionComplete:function q(r){this._init();p._scroll_locked=false;p._executeCompletionCallbacks();p.unifyURI();if(!r)p.restoreScrollPosition(p._current_uri);try{if(document.activeElement&&document.activeElement.nodeName==='A')document.activeElement.blur();}catch(s){}},_executeCompletionCallbacks:function q(){var r=c('PageTransitionsRegistrar')._getCompletionCallbacks();if(r.length>0){c('PageTransitionsRegistrar')._resetCompletionCallbacks();r.forEach(function(s){return s()})}},registerCompletionCallback:c('PageTransitionsRegistrar').registerCompletionCallback,rewriteCurrentURI:function q(r,s){this._init();var t=c('PageTransitionsRegistrar')._getTransitionHandlers(),u=t.length||1,v=false;c('PageTransitionsRegistrar').registerHandler(function(){if(r==p.getMostRecentURI().getUnqualifiedURI().toString()){p.transitionComplete();return true}v=true},u);p.go(s,true);t.length===u+1&&t[u].length===(v?0:1)||h(0);t.length=u},_warnBeforeLeaving:function q(r,s){c('Bootloader').loadModules(["DialogX","XUIDialogTitle.react","XUIDialogBody.react","XUIDialogButton.react","XUIDialogFooter.react","XUIGrayText.react"],function(t,u,v,w,x,y){var z=new t({width:450,addedBehaviors:[c('LayerHideOnEscape')]},c('React').createElement('div',null,c('React').createElement(u,{showCloseButton:false},i._("Leave Page?")),c('React').createElement(v,null,c('React').createElement(y,{shade:'medium',size:'medium'},r)),c('React').createElement(x,null,c('React').createElement(w,{action:'cancel',label:i._("Stay on This Page")}),c('React').createElement(w,{action:'confirm',use:'confirm',label:i._("Leave This Page")}))));z.subscribe('confirm',function(){z.hide();s()});z.show()},'PageTransitions')},restoreScrollPosition:function q(r){var s=m(r);if(s){c('DOMScroll').scrollTo(s,false);return true}function t(w){if(!w)return null;var x="a[name='"+c('escapeJSQuotes')(w)+"']";return c('DOMQuery').scry(document.body,x)[0]||c('ge')(w)}var u=t(new (c('URI'))(r).getFragment());if(u){var v=c('Vector').getElementPosition(u);v.x=0;c('DOMScroll').scrollTo(v);return true}return false}};f.exports=p;b.PageTransitions=p}),null);
__d('StrSet',[],(function a(b,c,d,e,f,g){function h(i){'use strict';this.$StrSet2={};this.$StrSet1=0;if(i)this.addAll(i);}h.prototype.add=function(i){'use strict';if(!Object.prototype.hasOwnProperty.call(this.$StrSet2,i)){this.$StrSet2[i]=true;this.$StrSet1++}return this};h.prototype.addAll=function(i){'use strict';i.forEach(this.add,this);return this};h.prototype.remove=function(i){'use strict';if(Object.prototype.hasOwnProperty.call(this.$StrSet2,i)){delete this.$StrSet2[i];this.$StrSet1--}return this};h.prototype.removeAll=function(i){'use strict';i.forEach(this.remove,this);return this};h.prototype.toArray=function(){'use strict';return Object.keys(this.$StrSet2)};h.prototype.toMap=function(i){'use strict';var j={};Object.keys(this.$StrSet2).forEach(function(k){j[k]=typeof i=='function'?i(k):i||true});return j};h.prototype.contains=function(i){'use strict';return Object.prototype.hasOwnProperty.call(this.$StrSet2,i)};h.prototype.count=function(){'use strict';return this.$StrSet1};h.prototype.clear=function(){'use strict';this.$StrSet2={};this.$StrSet1=0;return this};h.prototype.clone=function(){'use strict';return new h(this)};h.prototype.forEach=function(i,j){'use strict';Object.keys(this.$StrSet2).forEach(i,j)};h.prototype.map=function(i,j){'use strict';return Object.keys(this.$StrSet2).map(i,j)};h.prototype.some=function(i,j){'use strict';return Object.keys(this.$StrSet2).some(i,j)};h.prototype.every=function(i,j){'use strict';return Object.keys(this.$StrSet2).every(i,j)};h.prototype.filter=function(i,j){'use strict';return new h(Object.keys(this.$StrSet2).filter(i,j))};h.prototype.union=function(i){'use strict';return this.clone().addAll(i)};h.prototype.intersect=function(i){'use strict';return this.filter(function(j){return i.contains(j)})};h.prototype.difference=function(i){'use strict';return i.filter(function(j){return !this.contains(j)}.bind(this))};h.prototype.equals=function(i){'use strict';var j=function n(o,p){return o===p?0:o<p?-1:1},k=this.toArray(),l=i.toArray();if(k.length!==l.length)return false;var m=k.length;k=k.sort(j);l=l.sort(j);while(m--)if(k[m]!==l[m])return false;return true};f.exports=h}),null);
__d('SimpleObjectsPool',['invariant'],(function a(b,c,d,e,f,g,h){function i(j){'use strict';this.$SimpleObjectsPool1=j;this.$SimpleObjectsPool2=[]}i.prototype.get=function(){'use strict';if(this.$SimpleObjectsPool2.length){return this.$SimpleObjectsPool2.pop()}else{var j=this.$SimpleObjectsPool1;return new j()}};i.prototype.put=function(j){'use strict';j instanceof this.$SimpleObjectsPool1||h(0);this.$SimpleObjectsPool2.push(j)};f.exports=i}),null);
__d('PersistentAnimationFrame',['SimpleObjectsPool','Visibility','cancelAnimationFrame','requestAnimationFrame'],(function a(b,c,d,e,f,g){var h=16,i,j={},k=true;function l(){if(!i)i=new (c('SimpleObjectsPool'))(m);return i}function m(){'use strict';this.$PersistentAnimationFrame1=function(){this.callback();this.$PersistentAnimationFrame2();l().put(this)}.bind(this)}m.request=function(p){'use strict';if(!p)return 0;return l().get().request(p)};m.cancel=function(p){'use strict';if(p===0)return;var q=j[String(p)];if(q)q.cancel();};m.prototype.request=function(p){'use strict';k&&n();this.callback=p;this.hidden=c('Visibility').isHidden();if(this.hidden){this.intID=setTimeout(this.$PersistentAnimationFrame1,h)}else this.intID=c('requestAnimationFrame')(this.$PersistentAnimationFrame1);this.strID=String(this.intID);j[this.strID]=this;return this.intID};m.prototype.cancel=function(){'use strict';if(this.strID){if(this.hidden){clearTimeout(this.intID)}else c('cancelAnimationFrame')(this.intID);this.$PersistentAnimationFrame2();l().put(this)}};m.prototype.$PersistentAnimationFrame2=function(){'use strict';delete j[this.strID];delete this.intID;delete this.strID;delete this.callback;delete this.hidden};function n(){k=false;c('Visibility').addListener(c('Visibility').HIDDEN,o);c('Visibility').addListener(c('Visibility').VISIBLE,o)}function o(){Object.keys(j).forEach(function(p){var q=j[p],r=q.callback;q.cancel();r()})}f.exports=m}),null);
__d('requestPersistentAnimationFrame',['PersistentAnimationFrame'],(function a(b,c,d,e,f,g){'use strict';f.exports=c('PersistentAnimationFrame').request}),null);
__d('ResizeEventHandler',['requestPersistentAnimationFrame'],(function a(b,c,d,e,f,g){'use strict';function h(i){this.handleEvent=function(){if(this.$ResizeEventHandler1===false){this.$ResizeEventHandler1=true;c('requestPersistentAnimationFrame')(this.$ResizeEventHandler3)}}.bind(this);this.$ResizeEventHandler3=function(){this.$ResizeEventHandler1=false;this.$ResizeEventHandler2()}.bind(this);this.$ResizeEventHandler1=false;this.$ResizeEventHandler2=i}f.exports=h}),null);
__d('Queue',[],(function a(b,c,d,e,f,g){var h={};function i(j){'use strict';this._opts=babelHelpers['extends']({interval:0,processor:null},j);this._queue=[];this._stopped=true}i.prototype._dispatch=function(j){'use strict';if(this._stopped||this._queue.length===0)return;if(!this._opts.processor){this._stopped=true;throw new Error('No processor available')}if(this._opts.interval){this._opts.processor.call(this,this._queue.shift());this._timeout=setTimeout(this._dispatch.bind(this),this._opts.interval)}else while(this._queue.length)this._opts.processor.call(this,this._queue.shift());};i.prototype.enqueue=function(j){'use strict';if(this._opts.processor&&!this._stopped){this._opts.processor.call(this,j)}else this._queue.push(j);return this};i.prototype.start=function(j){'use strict';if(j)this._opts.processor=j;this._stopped=false;this._dispatch();return this};i.prototype.isStarted=function(){'use strict';return !this._stopped};i.prototype.dispatch=function(){'use strict';this._dispatch(true)};i.prototype.stop=function(j){'use strict';this._stopped=true;if(j)clearTimeout(this._timeout);return this};i.prototype.merge=function(j,k){'use strict';this._queue[k?'unshift':'push'].apply(this._queue,j._queue);j._queue=[];this._dispatch();return this};i.prototype.getLength=function(){'use strict';return this._queue.length};i.get=function(j,k){'use strict';var l;if(j in h){l=h[j]}else l=h[j]=new i(k);return l};i.exists=function(j){'use strict';return j in h};i.remove=function(j){'use strict';return delete h[j]};f.exports=i}),null);