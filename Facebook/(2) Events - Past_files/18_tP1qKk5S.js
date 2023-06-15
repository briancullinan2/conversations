if (self.CavalryLogger) { CavalryLogger.start_js(["NTl76"]); }

__d('ChatOpenTab',['csx','Bootloader','ContextualThing','Event','MercuryIDs','MercuryParticipantTypes','Parent','requireWeak'],(function a(b,c,d,e,f,g,h){'use strict';var i=null;c('requireWeak')('FantaTabsReactApp',function(n){return i=n});c('requireWeak')('FantaTabsSlimApp',function(n){return i=n});function j(n,o,p,q){c('Event').listen(n,'click',function(r){if(m.canOpenTab()){q(o,p);return r.kill()}})}function k(n,o,p,q){c('Event').listen(n,'click',function(r){if(m.canOpenTab())q(o,p);})}function l(n){var o=c('ContextualThing').getContext(n);return o&&c('Parent').bySelector(o,"._3qw")!==null}var m={canOpenTab:function n(){return i&&!i.isHidden()},listenOpenEmptyTabDEPRECATED:function n(o,p){j(o,null,p,this._loadAndOpenEmptyFantaTab)},listenOpenThreadDEPRECATED:function n(o,p,q){j(o,p,q,function(r,s){return this._loadAndOpenFantaTab(r,s,q)}.bind(this))},listenOpenUserTabDEPRECATED:function n(o,p,q){if(!l(o))j(o,p,q,function(r){return this._loadAndOpenFantaTab(r,c('MercuryParticipantTypes').USER,q)}.bind(this));},listenOpenUserTabPersistentEventDEPRECATED:function n(o,p,q){if(!l(o))k(o,p,q,function(r){return this._loadAndOpenFantaTab(r,c('MercuryParticipantTypes').USER,q)}.bind(this));},listenOpenPageTabDEPRECATED:function n(o,p,q,r){if(!l(o))j(o,p,r,function(s){return this._loadAndOpenFantaTab(s,c('MercuryParticipantTypes').PAGE,r)}.bind(this));},listenOpenPageTabPersistentEventDEPRECATED:function n(o,p,q,r){if(!l(o))k(o,p,r,function(s){return this._loadAndOpenFantaTab(s,c('MercuryParticipantTypes').PAGE,r)}.bind(this));},_loadAndOpenFantaTab:function n(o,p,q){c('Bootloader').loadModules(["ChatOpenTabEventLogger","FantaTabActions"],function(r,s){if(p===c('MercuryParticipantTypes').USER||p===c('MercuryParticipantTypes').PAGE){var t=c('MercuryIDs').getThreadIDFromUserID(o);s.openTab(t,[q]);r.logUserClickOpen(q,o)}else{s.openTab(o,[q]);r.logClickOpen(q,o)}},'ChatOpenTab')},_loadAndOpenEmptyFantaTab:function n(){c('Bootloader').loadModules(["ChatOpenTabEventLogger","FantaTabActions","MercuryThreads"],function(o,p,q){var r=q.get().createNewLocalThreadGenerateID();p.openTab(r,'jewel_new_message');o.logClickOpen('EmptyTab')},'ChatOpenTab')}};f.exports=m}),null);
__d("NotificationConstants",[],(function a(b,c,d,e,f,g){f.exports={PayloadSourceType:{UNKNOWN:0,USER_ACTION:1,LIVE_SEND:2,ENDPOINT:3,INITIAL_LOAD:4,OTHER_APPLICATION:5,SYNC:6,CLIENT:7}}}),null);
__d('NotificationServerTransport',['AjaxPipeRequest','DOM','setImmediateAcrossTransitions','uniqueID'],(function a(b,c,d,e,f,g){'use strict';var h={},i={},j={},k={},l={};function m(q){if(l[q]==null){l[q]=c('DOM').create('div',{'class':'hidden_elem',id:q});c('DOM').appendContent(document.documentElement,l[q])}return l[q].id}function n(q){return q.reduce(function(r,s){var t=s.targetNumToLoad;return Math.max(r,t)},0)}function o(q){var r=q.getHash();if(k[r]!=null)return;k[r]=c('setImmediateAcrossTransitions')(function(){delete k[r];var s=c('uniqueID')(),t=j[r];delete j[r];if(t==null)return;var u=n(t),v=q.getRequestParams(u);if(v.length<=0){t.forEach(function(z){var aa=z.onCompleted;if(aa)aa();});return}function w(z){var aa=h[r];delete i[s];if(aa.clientRequestID!==s)return;delete h[r];aa.calls.forEach(function(ba){var ca=ba.onError;if(ca)ca(z);});if(j[r]!=null)o(q);}function x(z){var aa=h[r];delete i[s];if(aa.clientRequestID!==s)return;delete h[r];aa.calls.forEach(function(ba){var ca=ba.onCompleted;if(ca)ca();});if(j[r]!=null)o(q);}var y=new (c('AjaxPipeRequest'))('/ajax/pagelet/generic.php/WebNotificationsPayloadPagelet',{data:JSON.stringify(babelHelpers['extends']({},v,{clientRequestID:s}))}).setAllowCrossPageTransition(true).setAllowIrrelevantRequests(true).setAutomatic(false).setCanvasId(m(s)).setErrorHandler(w).setFinallyHandler(x).setJSNonBlock(true).setTransportErrorHandler(w);h[r]={calls:t,clientRequestID:s,transport:y};i[s]=t.map(function(z){return z.onChunkResponse});y.send()})}var p={makeRequest:function q(r,s,t){var u=t.onChunkResponse,v=t.onCompleted,w=t.onError,x=r.getHash(),y={onChunkResponse:u,onCompleted:v,onError:w,targetNumToLoad:s},z=h[x],aa=z?n(z.calls)>=s:false;if(aa){z.calls.push(y)}else{if(j[x]==null)j[x]=[];j[x].push(y);if(z==null)o(r);}return {remove:function ba(){var ca=h[x];if(ca!=null){var da=ca.calls.indexOf(y);if(da!==-1)ca.calls.splice(da,1);if(ca.calls.length===0){ca.transport.abandon();delete h[x];delete i[ca.clientRequestID]}}var ea=j[x];if(ea!=null){var fa=ea.indexOf(y);if(fa!==-1)ea.splice(fa,1);}}}},handleResponseChunk:function q(r,s){var t=i[r];if(t==null)return;t.forEach(function(u){u(s)})}};f.exports=p}),null);
__d('NotificationServerTransportLegacy',['AsyncRequest'],(function a(b,c,d,e,f,g){'use strict';var h={makeRequest:function i(j,k,l){var m=l.onError,n=l.onChunkResponse,o=l.onCompleted,p=true;function q(u){if(!p)return;var v=u.getPayload();try{n(v)}finally{o()}}function r(u){if(!p)return;if(m)m(u);}var s=j.getRequestParams(k);if(s.length<=0){o();return {remove:function u(){}}}var t=new (c('AsyncRequest'))(j.endpointURI).setAllowCrossPageTransition(true).setData(s).setErrorHandler(r).setTransportErrorHandler(r).setHandler(q);t.send();return {remove:function u(){p=false;t.abandon()}}}};f.exports=h}),null);
__d('NotificationsDefaultEndpointURI',[],(function a(b,c,d,e,f,g){'use strict';f.exports='/ajax/notifications/client/get.php'}),null);
__d("arrayStableSort",[],(function a(b,c,d,e,f,g){function h(i,j){return i.map(function(k,l){return {data:k,index:l}}).sort(function(k,l){return j(k.data,l.data)||k.index-l.index}).map(function(k){return k.data})}f.exports=h}),null);
__d('RangedCallbackManager',['CallbackManagerController','arrayStableSort','createObjectFrom'],(function a(b,c,d,e,f,g){function h(i,j,k){'use strict';this.$RangedCallbackManager1=[];this.$RangedCallbackManager2=false;this.$RangedCallbackManager3=false;this.$RangedCallbackManager4={};this.$RangedCallbackManager5=new (c('CallbackManagerController'))(this.$RangedCallbackManager6.bind(this));this.$RangedCallbackManager7=i;this.$RangedCallbackManager8=j;this.$RangedCallbackManager9=k}h.prototype.executeOrEnqueue=function(i,j,k,l,m){'use strict';return this.$RangedCallbackManager5.executeOrEnqueue({start:i,limit:j},k,{strict:!!l,skipOnStrictHandler:m})};h.prototype.unsubscribe=function(i){'use strict';this.$RangedCallbackManager5.unsubscribe(i)};h.prototype.getUnavailableResources=function(i){'use strict';var j=this.$RangedCallbackManager5.getRequest(i),k=[];if(j&&!this.$RangedCallbackManager2){var l=j.request,m=this.$RangedCallbackManager10(j.options),n=l.start+l.limit;for(var o=m.length;o<n;o++)k.push(o);}return k};h.prototype.addResources=function(i){'use strict';i.forEach(function(j){if(!this.$RangedCallbackManager4[j]){this.$RangedCallbackManager4[j]=true;this.$RangedCallbackManager1.push(j);this.$RangedCallbackManager3=null}}.bind(this));this.resortResources();this.$RangedCallbackManager5.runPossibleCallbacks()};h.prototype.addResourcesWithoutSorting=function(i,j){'use strict';var k=this.$RangedCallbackManager1.slice(0,j);k=k.concat(i);k=k.concat(this.$RangedCallbackManager1.slice(j));this.$RangedCallbackManager1=k;Object.assign(this.$RangedCallbackManager4,c('createObjectFrom')(i,true));this.$RangedCallbackManager3=null;this.$RangedCallbackManager5.runPossibleCallbacks()};h.prototype.removeResources=function(i){'use strict';i.forEach(function(j){if(this.$RangedCallbackManager4[j]){this.$RangedCallbackManager4[j]=false;var k=this.$RangedCallbackManager1.indexOf(j);if(k!=-1)this.$RangedCallbackManager1.splice(k,1);}}.bind(this))};h.prototype.removeAllResources=function(){'use strict';this.$RangedCallbackManager1=[];this.$RangedCallbackManager4={}};h.prototype.resortResources=function(){'use strict';this.$RangedCallbackManager1=c('arrayStableSort')(this.$RangedCallbackManager1,function(i,j){return this.$RangedCallbackManager8(this.$RangedCallbackManager7(i),this.$RangedCallbackManager7(j))}.bind(this))};h.prototype.setReachedEndOfArray=function(){'use strict';if(!this.$RangedCallbackManager2){this.$RangedCallbackManager2=true;this.$RangedCallbackManager3=null;this.$RangedCallbackManager5.runPossibleCallbacks()}};h.prototype.hasReachedEndOfArray=function(){'use strict';return this.$RangedCallbackManager2};h.prototype.forceRunCallbacks=function(){'use strict';this.$RangedCallbackManager5.runPossibleCallbacks({force:true})};h.prototype.setError=function(i){'use strict';if(this.$RangedCallbackManager3!==i){this.$RangedCallbackManager3=i;this.$RangedCallbackManager5.runPossibleCallbacks()}};h.prototype.getError=function(i,j,k){'use strict';var l=this.$RangedCallbackManager10({strict:k});return i+j>l.length?this.$RangedCallbackManager3:null};h.prototype.hasResource=function(i){'use strict';return this.$RangedCallbackManager4[i]};h.prototype.getResourceAtIndex=function(i){'use strict';return this.$RangedCallbackManager1[i]};h.prototype.getAllResources=function(){'use strict';return this.$RangedCallbackManager1.concat()};h.prototype.getCurrentArraySize=function(i){'use strict';return this.$RangedCallbackManager10(i).length};h.prototype.$RangedCallbackManager10=function(i){'use strict';var j=this.$RangedCallbackManager1;if(i&&i.strict){var k=i.skipOnStrictHandler||this.$RangedCallbackManager9;if(k)j=j.filter(k);}return j};h.prototype.$RangedCallbackManager6=function(i,j){'use strict';var k=this.$RangedCallbackManager10(j),l=i.start,m=i.start+i.limit,n=!!(j&&j.force);if(!n&&!this.$RangedCallbackManager2&&!this.$RangedCallbackManager3&&m>k.length){return false}else{var o=k.slice(l,m),p=m>k.length?this.$RangedCallbackManager3:null;return [o,p]}};h.prototype.getElementsUntil=function(i){'use strict';var j=[];for(var k=0;k<this.$RangedCallbackManager1.length;k++){var l=this.$RangedCallbackManager7(this.$RangedCallbackManager1[k]);if(this.$RangedCallbackManager8(l,i)>0)break;j.push(this.$RangedCallbackManager1[k])}return j};f.exports=h}),null);
__d('createObjectBy',[],(function a(b,c,d,e,f,g){'use strict';function h(i,j){var k={};for(var l=0;l<i.length;l++){var m=i[l],n=j(m,l,i);k[n]=m}return k}f.exports=h}),null);
__d("objectValues",[],(function a(b,c,d,e,f,g){function h(i){return Object.values(i)}f.exports=h}),null);
__d('sortBy',[],(function a(b,c,d,e,f,g){'use strict';function h(i,j){var k=i.map(function(l,m){return {index:m,sortValue:j(l),value:l}});k.sort(function(l,m){var n=l.sortValue,o=m.sortValue;if(n>o)return 1;if(n<o)return -1;return l.index-m.index});return k.map(function(l){return l.value})}f.exports=h}),null);
__d('NotificationStore',['AsyncFeature','BusinessUserConf','ErrorUtils','KeyedCallbackManager','NotificationConstants','NotificationListConfig','NotificationsDefaultEndpointURI','NotificationServerTransport','NotificationServerTransportLegacy','NotificationUpdates','QE2Logger','RangedCallbackManager','createObjectBy','distinctArrayBy','flatMapArray','objectValues','sortBy','sprintf','stableStringify'],(function a(b,c,d,e,f,g){var h={};function i(o,p,q){return o.page_info!=null&&p.classification==q.classification&&p.endpointURI===q.endpointURI&&p.filter==q.filter}function j(o,p){var q={};m.getAllInstances(p.endpointURI).forEach(function(r){var s=void 0;if(i(o,r,p)){r.graphQLPageInfo=o.page_info;s=o}else if(o.payloadsource===c('NotificationConstants').PayloadSourceType.SYNC&&p.endpointURI===c('NotificationsDefaultEndpointURI')&&r.classification==null&&r.filter==null){s=o}else s=babelHelpers['extends']({},o,{nodes:o.nodes&&o.nodes.filter(function(u){return k(u,r)})});if(s.nodes&&s.nodes.length>0){var t=l(r,s);if(t!=null)t.forEach(function(u){q[u]=true});}});c('NotificationUpdates').didUpdateNotifications(Object.keys(q))}function k(o,p){var q=p.classification,r=p.filter,s=p.notifications,t=p.order,u=t.getAllResources();u.length===0;if(u.length>0){var v=u[0],w=s.getResource(v);if(w.creation_time>=o.creation_time)return false;}if(q&&(!o.classifications||!o.classifications.includes(q)))return false;if(r&&r==='read'!==(o.seen_state==='SEEN_AND_READ'))return false;return true}function l(o,p){var q=[],r={};if(p.nodes&&p.nodes.length>0)p.nodes.forEach(function(s){var t=s.alert_id,u=o.notifications.getResource(t);if(!u||u.creation_time<s.creation_time){q.push(t);r[t]=s}});o.notifications.addResourcesAndExecute(r);o.order.addResources(q);return q}m.getInstance=function(o){'use strict';var p=o.classification!=null?o.classification:'_',q=o.filter!=null?o.filter:'_',r='(f)'+q+'(c)'+p,s=m.$EndpointState1[o.endpointURI];if(s==null)m.$EndpointState1[o.endpointURI]=s={};if(s[r]==null)s[r]=new m(o);return s[r]};m.getAllInstances=function(o){'use strict';var p=void 0;if(o!=null){p=[o]}else p=Object.keys(m.$EndpointState1);return c('flatMapArray')(p,function(q){var r=m.$EndpointState1[q];if(r==null){return []}else return c('objectValues')(r);})};function m(o){var p=o.businessUserID,q=o.classification,r=o.endpointURI,s=o.filter;'use strict';this.notifications=new (c('KeyedCallbackManager'))();this.businessUserID=p!=null?p:c('BusinessUserConf').businessUserID;this.classification=q;this.endpointURI=r;this.filter=s;var t=function u(v){var w=this.notifications.getResource(v);return w.creation_time};this.order=new (c('RangedCallbackManager'))(t.bind(this),function(u,v){return v-u});this.graphQLPageInfo=null}m.prototype.getConfig=function(){'use strict';return {businessUserID:this.businessUserID,classification:this.classification,endpointURI:this.endpointURI,filter:this.filter}};m.prototype.getHash=function(){'use strict';return c('stableStringify')(this.getConfig())};m.prototype.getRequestParams=function(o){'use strict';var p=Math.max(0,o-this.order.getAllResources().length);return {businessUserID:this.businessUserID,classification:this.classification,cursor:this.graphQLPageInfo&&this.graphQLPageInfo.end_cursor,filter:this.filter,length:p}};m.$EndpointState1={};c('NotificationUpdates').subscribe('update-notifications',function(o,p){if(p.payloadsource!==c('NotificationConstants').PayloadSourceType.ENDPOINT)j(p,{endpointURI:p.endpoint!=null?p.endpoint:c('NotificationsDefaultEndpointURI')});});var n={getNotifications:function o(p,q,r){var s=m.getInstance(q),t=s.notifications,u=s.order,v=void 0,w=u.executeOrEnqueue(0,p,function(fa){if(r){v=t.executeOrEnqueue(fa,r);var ga=t.getUnavailableResources(v);if(ga.length>0)c('ErrorUtils').reportError(new Error(c('sprintf')('The range for this endpoint contained notification IDs '+'for which we have no payload (Notification IDs: `%s`. '+'Endpoint config: `%s`).',JSON.stringify(ga),JSON.stringify(s.getConfig()))));}});function x(){u.unsubscribe(w);if(v)t.unsubscribe(v);}if(u.getUnavailableResources(w).length===0)return {remove:x};if(!n.canFetchMore(q)){u.forceRunCallbacks();return {remove:x}}var y=s.getHash();if(h[y]==null){h[y]=1}else h[y]++;function z(){h[y]--;if(h[y]===0)u.forceRunCallbacks();}function aa(fa){if(!(fa&&fa.nodes))return;c('NotificationUpdates').handleUpdate(c('NotificationConstants').PayloadSourceType.ENDPOINT,fa,q.filter,q.classification);j(babelHelpers['extends']({},fa,{payloadsource:c('NotificationConstants').PayloadSourceType.ENDPOINT}),q)}function ba(){h[y]--;if(h[y]===0)u.forceRunCallbacks();}var ca=void 0;if(q.endpointURI===c('NotificationsDefaultEndpointURI')&&c('AsyncFeature').__serverHasFeatureImpl(8)&&c('NotificationListConfig').useStreamingTransport){ca=c('NotificationServerTransport')}else ca=c('NotificationServerTransportLegacy');if(q.endpointURI===c('NotificationsDefaultEndpointURI')&&c('AsyncFeature').__serverHasFeatureImpl(8))c('QE2Logger').logExposureForUser('www_notifications_perf_h2_2017');var da=ca.makeRequest(s,p,{onChunkResponse:aa,onCompleted:ba,onError:z}),ea=da.remove;return {remove:function fa(){x();ea()}}},getNotification:function o(p){var q=arguments.length<=1||arguments[1]===undefined?{}:arguments[1],r=q.classification,s=q.endpointURI,t=s===undefined?c('NotificationsDefaultEndpointURI'):s,u=q.filter,v=m.getInstance({classification:r,endpointURI:t,filter:u}),w=v.notifications;return w.getResource(p)},getAllForAllEndpoints:function o(){var p=m.getAllInstances(),q=c('flatMapArray')(p,function(u){var v=this.getAll(u.getConfig());return c('objectValues')(v)}.bind(this)),r=c('sortBy')(q,function(u){return u.creation_time}),s=r.reverse(),t=c('distinctArrayBy')(s,function(u){return u.alert_id});return c('createObjectBy')(t,function(u){return u.alert_id})},getAll:function o(p){var q=m.getInstance(p),r=q.notifications,s=q.order,t={};s.getAllResources().forEach(function(u){var v=r.getResource(u);if(v==null){c('ErrorUtils').reportError(new Error(c('sprintf')('The range for this endpoint contained a notification ID for '+'which we have no payload (Notification ID: `%s`. Endpoint '+'config: `%s`).',u,JSON.stringify(p))))}else t[u]=v;});return t},getCount:function o(p){var q=m.getInstance(p);return q.order.getAllResources().length},canFetchMore:function o(p){var q=m.getInstance(p),r=q.graphQLPageInfo;return !r||!Object.prototype.hasOwnProperty.call(r,'has_next_page')||r.has_next_page},registerEndpoint:function o(p){m.getInstance(p)}};n.registerEndpoint({endpointURI:c('NotificationsDefaultEndpointURI')});f.exports=n}),null);
__d('NotificationTokens',['CurrentUser'],(function a(b,c,d,e,f,g){var h={tokenizeIDs:function i(j){return j.map(function(k){return c('CurrentUser').getID()+':'+k})},untokenizeIDs:function i(j){return j.map(function(k){return k.split(':')[1]})}};f.exports=h}),null);
__d('NotificationUpdates',['Arbiter','AsyncRequest','BusinessUserConf','ChannelConstants','JSLogger','LiveTimer','NotificationConstants','NotificationTokens','createObjectFrom','NotificationStore'],(function a(b,c,d,e,f,g){var h={},i={},j={},k={},l=false,m=[],n=0,o=void 0,p=new (c('Arbiter'))(),q=c('JSLogger').create('notification_updates');function r(){if(n)return;var w=h,x=i,y=j,z=k;h={};i={};j={};k={};if(Object.keys(w).length||l){l=false;t('notifications-updated',w)}if(Object.keys(x).length)t('seen-state-updated',x);if(Object.keys(y).length)t('read-state-updated',y);if(Object.keys(z).length)t('hidden-state-updated',z);m.pop()}function s(){if(m.length)return m[m.length-1];return c('NotificationConstants').PayloadSourceType.UNKNOWN}function t(event,w){v.inform(event,{updates:w,source:s()})}var u=null,v={getserverTime:function w(){return u},setEndPoint:function w(x){o=x},handleUpdate:function w(x,y,z,aa){if(y.nodes&&Array.isArray(y.nodes))y.nodes=this._filterNodesBasedOnBusinessUser(y.nodes,c('BusinessUserConf').businessUserID);if(y.servertime){u=y.servertime;c('LiveTimer').restart(y.servertime)}var ba=y.nodes;if(o&&x===c('NotificationConstants').PayloadSourceType.LIVE_SEND&&ba&&Array.isArray(ba)&&ba.length>0){var ca=c('NotificationStore'),da={classification:aa,endpointURI:o,filter:z};if(ca.getCount(da)>0||!ca.canFetchMore(da))return;new (c('AsyncRequest'))(o).setAllowCrossPageTransition(true).setData({businessUserID:c('BusinessUserConf').businessUserID,classification:aa,filter:z,length:ba.length}).setHandler(function(ea){var fa=ea.getPayload();if(fa==null)return;var ga=fa.nodes;if(ga==null||ga.length===0)return;var ha={};ga.forEach(function(ia){var ja=ia.alert_id;ha[ja]=true});fa.nodes=ba.filter(function(ia){var ja=ia.alert_id;return ha[ja]===true});if(fa.nodes.length>0)this._updateWithPayload(x,fa);}.bind(this)).send()}else this._updateWithPayload(x,y);},_updateWithPayload:function w(x,y){if(Object.keys(y).length)this.synchronizeInforms(function(){m.push(x);var z=babelHelpers['extends']({payloadsource:s()},y);this.inform('update-notifications',z);this.inform('update-seen',z);this.inform('update-read',z);this.inform('update-hidden',z)}.bind(this));},getArbiter:function w(){return p},inform:function w(event,x){return p.inform(event,x)},subscribe:function w(event,x){return p.subscribe(event,x)},didUpdateNotifications:function w(x){Object.assign(h,c('createObjectFrom')(x));l=true;r()},didUpdateSeenState:function w(x){Object.assign(i,c('createObjectFrom')(x));r()},didUpdateReadState:function w(x){Object.assign(j,c('createObjectFrom')(x));r()},didUpdateHiddenState:function w(x){Object.assign(k,c('createObjectFrom')(x));r()},synchronizeInforms:function w(x){n++;try{x()}catch(y){throw y}finally{n--;r()}},_filterNodesBasedOnBusinessUser:function w(x,y){return x.filter(function(z){return y==z.biz_user_id})}};c('Arbiter').subscribe(c('ChannelConstants').getArbiterType('notification_json'),function(w,x){var y=Date.now(),z=x.obj.nodes;if(z){z.forEach(function(ba){ba.receivedTime=y});q.debug('notifications_received',z);var aa=x.obj.servertime;v.handleUpdate(c('NotificationConstants').PayloadSourceType.LIVE_SEND,{nodes:z,servertime:aa})}});c('Arbiter').subscribe(c('ChannelConstants').getArbiterType('notifications_seen'),function(w,x){var y=c('NotificationTokens').tokenizeIDs(x.obj.alert_ids),z=x.obj.new_state;v.handleUpdate(c('NotificationConstants').PayloadSourceType.LIVE_SEND,{seenState:c('createObjectFrom')(y,z)})});c('Arbiter').subscribe(c('ChannelConstants').getArbiterType('notifications_read'),function(w,x){var y=c('NotificationTokens').tokenizeIDs(x.obj.alert_ids),z=x.obj.new_state;v.handleUpdate(c('NotificationConstants').PayloadSourceType.LIVE_SEND,{readState:c('createObjectFrom')(y,z)})});c('Arbiter').subscribe(c('ChannelConstants').getArbiterType('notification_hidden'),function(w,x){var y=c('NotificationTokens').tokenizeIDs([x.obj.notif_id+'']);v.handleUpdate(c('NotificationConstants').PayloadSourceType.LIVE_SEND,{hiddenState:c('createObjectFrom')(y)})});f.exports=v}),null);
__d("XNotificationsOptionsController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/notifications\/feedback\/option\/",{notif_id:{type:"Int",required:true},undo:{type:"Bool",defaultValue:false},server_action:{type:"String",required:true},biz_user_id:{type:"Int"}})}),null);
__d('NotificationUserActions',['AsyncRequest','Bootloader','BusinessUserConf','NotificationConstants','NotificationTokens','NotificationUpdates','XNotificationsOptionsController','createObjectFrom','emptyFunction'],(function a(b,c,d,e,f,g){var h=c('NotificationConstants').PayloadSourceType.USER_ACTION,i=false;function j(n){if(c('BusinessUserConf').businessUserID!=null)n.biz_user_id=c('BusinessUserConf').businessUserID;new (c('AsyncRequest'))('/ajax/notifications/mark_read.php').setData(n).setAllowCrossPageTransition(true).send()}function k(n){var o={};n.forEach(function(p,q){o['alert_ids['+q+']']=p});return o}function l(n,o,p,q,r){var s=c('XNotificationsOptionsController').getURIBuilder().setInt('notif_id',c('NotificationTokens').untokenizeIDs([n])[0]).setInt('biz_user_id',c('BusinessUserConf').businessUserID).setBool('undo',q).setString('server_action',r).getURI(),t=function u(v){if(!v.payload)throw new Error('No response from notif option!');c('NotificationUpdates').handleUpdate(h,{hiddenState:c('createObjectFrom')([n],!v.payload.visible)});if(v.payload)o(v.payload);};new (c('AsyncRequest'))(s).setHandler(t||c('emptyFunction')).setErrorHandler(p||c('emptyFunction')).send()}var m={markNotificationsAsSeen:function n(o){var p=document.getElementById('notificationsCountValue'),q=null;if(p)q=p.textContent;c('NotificationUpdates').handleUpdate(h,{seenState:c('createObjectFrom')(o)});var r=c('NotificationTokens').untokenizeIDs(o),s=k(r);s.seen=true;if(q)s.badgeCount=q;j(s)},setNextIsFromReadButton:function n(o){i=o},markNotificationsAsRead:function n(o,p){c('NotificationUpdates').handleUpdate(h,{readState:c('createObjectFrom')(o,true)});var q=c('NotificationTokens').untokenizeIDs(o),r=k(q);if(i){r.from_read_button=true;i=false}if(p)r.source_view=p;j(r)},markNotificationsAsUnread:function n(o,p){c('NotificationUpdates').handleUpdate(h,{readState:c('createObjectFrom')(o,false)});var q=c('NotificationTokens').untokenizeIDs(o),r=k(q);if(i){r.from_read_button=true;i=false}r.unread=true;if(p)r.source_view=p;j(r)},markAllNotificationsAsRead:function n(){c('Bootloader').loadModules(["NotificationSeenState"],function(o){var p=o.getUnreadIDs();if(p.length>0)c('NotificationUpdates').handleUpdate(h,{readState:c('createObjectFrom')(p)});var q={read:true};if(i){q.from_read_button=true;i=false}j(q)},'NotificationUserActions')},sendNotifOption:function n(o,p,q,r){l(o,p,q,false,r)},undoNotifOption:function n(o,p,q,r){l(o,p,q,true,r)}};f.exports=m}),null);
__d('Spotlight.react',['LayerAutoFocusReact','LayerHideOnBlur','LayerHideOnEscape','LayerRefocusOnHide','ReactLayer','Spotlight','React'],(function a(b,c,d,e,f,g){var h=c('React').PropTypes,i=c('ReactLayer').createClass({propTypes:{causalElement:h.instanceOf(HTMLElement),onHide:h.func,rootClassName:h.string,shown:h.bool,wash:h.oneOf(['light','xui','dark'])},getDefaultEnabledBehaviors:function j(){return {hideOnBlur:c('LayerHideOnBlur'),hideOnEscape:c('LayerHideOnEscape'),refocusOnHide:c('LayerRefocusOnHide'),autoFocus:c('LayerAutoFocusReact')}},createLayer:function j(k){var l=this.enumerateBehaviors(this.props.behaviors),m={addedBehaviors:l,rootClassName:this.props.rootClassName,wash:this.props.wash},n=new (c('Spotlight'))(m,k);n.setCausalElement(this.props.causalElement);n.conditionShow(this.props.shown);if(this.props.onBeforeHide)n.subscribe('beforehide',this.props.onBeforeHide);if(this.props.onHide)n.subscribe('hide',this.props.onHide);return n},receiveProps:function j(k){if(this.layer){this.layer.setCausalElement(k.causalElement);this.layer.conditionShow(k.shown)}}});f.exports=i}),null);
__d('reportData',['Banzai','SessionName','ifRequired'],(function a(b,c,d,e,f,g){var h={retry:true};function i(j){var k=arguments.length<=1||arguments[1]===undefined?{}:arguments[1],l={ft:k.ft||{},gt:k.gt||{}},m='-',n='r',o=c('ifRequired')('URI',function(q){return q.getRequestURI(true,true).getUnqualifiedURI().toString()},function(){return location.pathname+location.search+location.hash}),p=[c('SessionName').getName(),Date.now(),'act',Date.now(),0,m,j,m,m,n,o,l,0,0,0,0];c('Banzai').post('eagle_eye_event',p,h)}f.exports=i}),null);
__d("XQuickPromotionSimpleLoggingController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/qp\/action\/log\/",{qp_id:{type:"Int",required:true},qp_action:{type:"Enum",enumType:1},qp_instance_log_data:{type:"StringToStringMap",defaultValue:{}},qp_event:{type:"String"}})}),null);