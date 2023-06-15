if (self.CavalryLogger) { CavalryLogger.start_js(["S6DOi"]); }

__d("ChatSidebarSections",[],(function a(b,c,d,e,f,g){f.exports={ADMINED_PAGES:"admined_pages",MORE_ONLINE_FRIENDS:"more_online_friends",MORE_ONLINE_COWORKERS:"more_online_coworkers",OFFLINE_USERS:"offline_users",ORDERED_LIST:"ordered_list",ORDERED_COWORKERS:"ordered_coworkers",TYPEAHEAD:"typeahead",NOW_PINNED_LIST:"now_pinned_list",NEARBY:"nearby",WORKPLACE_OTHERS:"workplace_others"}}),null);
__d("SyncRequestStatusEnum",[],(function a(b,c,d,e,f,g){f.exports={PENDING:0,ACCEPTED:1,REJECTED:2,EXPIRED:3,CANCELED:4,namesByValue:["PENDING","ACCEPTED","REJECTED","EXPIRED","CANCELED"]}}),null);
__d('ChatproxyPresence',['Arbiter','AvailableListConstants','AvailableListInitialData','BanzaiODS','ChannelConstants','LastActiveTimes','PresenceStatus','debounceAcrossTransitions','ClientChromeExperimentsData'],(function a(b,c,d,e,f,g){var h=c('ClientChromeExperimentsData').ClientChromeAvailableListInitialDataPreloader;function i(k){var l=k.activeList,m=k.lastActiveTimes;if(l)c('PresenceStatus').setMultiActive(l,'available_list_active');if(m&&!Array.isArray(m))c('LastActiveTimes').update(m);}function j(k){'use strict';this.$ChatproxyPresence1=k;this.$ChatproxyPresence2=false;this.$ChatproxyPresence3=c('AvailableListInitialData').chatNotif;this.$ChatproxyPresence4=false;if(h){h.onLoaded(i)}else i(c('AvailableListInitialData'));}j.prototype.subscribe=function(){'use strict';c('Arbiter').subscribe(c('ChannelConstants').getArbiterType('chatproxy-presence'),this.updatePresenceInfo.bind(this));c('Arbiter').subscribe(c('ChannelConstants').ON_INVALID_HISTORY,function(){this.$ChatproxyPresence2=true}.bind(this));c('Arbiter').subscribe(c('ChannelConstants').RTI_SESSION,function(k,l){if(l)this.$ChatproxyPresence4=l;}.bind(this));c('Arbiter').subscribe(c('ChannelConstants').getArbiterType('get_debug_presence'),function(k,l){var m=c('PresenceStatus').getAllDebugInfo(),n=c('LastActiveTimes').getDebugData();for(var o in n){var p=m[o];if(p===undefined){p={};m[o]=p}p.l=Math.floor(n[o])}this.$ChatproxyPresence4.issueRequest('/debug_presence',{},m,function(){c('BanzaiODS').bumpEntityKey('ChatproxyPresence','debug_presence.sucess')})}.bind(this))};j.prototype.getRTISession=function(){'use strict';return this.$ChatproxyPresence4};j.prototype.updatePresenceInfo=function(k,l){'use strict';if(this.$ChatproxyPresence2){this.$ChatproxyPresence2=false;c('PresenceStatus').resetPresenceData()}l=l.obj;var m=l.buddyList;c('PresenceStatus').setMultiChatproxy(m);var n=false;if(l.chatNotif!==undefined)n=this.$ChatproxyPresence3!==l.chatNotif;if(n)this.$ChatproxyPresence3=l.chatNotif;if(l.gamers)c('PresenceStatus').setPlayingCanvasGameFriends(l.gamers);if(n)this.$ChatproxyPresence1(c('AvailableListConstants').ON_CHAT_NOTIFICATION_CHANGED,this.$ChatproxyPresence3);c('debounceAcrossTransitions')(function(){this.$ChatproxyPresence1(c('AvailableListConstants').ON_AVAILABILITY_CHANGED)}.bind(this),0)()};j.prototype.getWebChatNotification=function(){'use strict';return this.$ChatproxyPresence3};f.exports=j}),null);
__d('PresenceStatusActionTypes',['keyMirror'],(function a(b,c,d,e,f,g){'use strict';f.exports=c('keyMirror')({AVAILABILITY_CHANGED:null})}),null);
__d("TypingStates",[],(function a(b,c,d,e,f,g){var h={INACTIVE:0,TYPING:1,QUITTING:2};f.exports=h}),null);
__d('AvailableList',['Arbiter','ArbiterMixin','AsyncRequest','AvailableListConstants','BanzaiODS','Bootloader','ChannelConstants','ChatConfig','ChatDispatcher','ChatproxyPresence','ChatReliabilityInstrumentation','ChatVisibility','CurrentUser','FBID','ErrorUtils','JSLogger','LastActiveTimes','PresencePrivacy','PresenceStatus','PresenceStatusActionTypes','Run','ServerTime','TypingStates','debounceAcrossTransitions','emptyFunction','requireWeak'],(function a(b,c,d,e,f,g){'use strict';c('BanzaiODS').setEntitySample('presence',.0001);var h=babelHelpers['extends']({},c('AvailableListConstants'),c('ArbiterMixin')),i=/\D/;h.subscribe([c('AvailableListConstants').ON_AVAILABILITY_CHANGED,c('AvailableListConstants').ON_UPDATE_ERROR],function(p,q){c('Arbiter').inform(p,q)});c('PresenceStatus').subscribe('change',c('debounceAcrossTransitions')(function(){h.inform(c('AvailableListConstants').ON_AVAILABILITY_CHANGED)},0));var j=c('debounceAcrossTransitions')(function(){h.inform(c('AvailableListConstants').ON_AVAILABILITY_CHANGED);c('ChatDispatcher').dispatch({type:c('PresenceStatusActionTypes').AVAILABILITY_CHANGED})},0);function k(p,q,r,s,t){if(p===c('CurrentUser').getID())return;var u=c('PresenceStatus').set(p,q,r,s,t);if(u){var v=c('debounceAcrossTransitions')(function(){h.inform(c('AvailableListConstants').ON_AVAILABILITY_CHANGED,p);c('ChatDispatcher').dispatch({type:c('PresenceStatusActionTypes').AVAILABILITY_CHANGED,id:p})},0);v()}}function l(p){var q=p.payload.availability||{};for(var r in q)k(r&&r.toString(),q[r].a,true,'mercury_tabs',q[r].c);}function m(p){if(!p||i.test(p)){c('ChatReliabilityInstrumentation').logERROR('bad id for available list: '+p);return}new (c('AsyncRequest'))('/ajax/mercury/tabs_presence.php').setData({target_id:p}).setHandler(l).setErrorHandler(c('emptyFunction')).setAllowCrossPageTransition(true).send()}function n(p,q){q.chat_config=c('ChatConfig').getDebugInfo();q.available_list_debug_info={count:c('PresenceStatus').getOnlineIDs().length}}var o=undefined;try{o=new (c('ChatproxyPresence'))(function(event){h.inform(event)});o.subscribe()}catch(p){c('ErrorUtils').reportError&&c('ErrorUtils').reportError(p,false);c('ChatReliabilityInstrumentation').logERROR(p.getMessage())}Object.assign(h,{getChatproxyPresenceObject:function p(){return o},get:function p(q){return c('PresenceStatus').get(q)},updateForID:function p(q){if(c('ChatConfig').get('presence_page_green_dot_sub')&&!c('FBID').isUser(q))return;m(q);if(c('PresencePrivacy').getVisibility()==c('PresencePrivacy').ONLINE)c('Run').onAfterLoad(function(){return c('Bootloader').loadModules(["ChannelManager","ChannelTransport"],function(r,s){r.startChannelManager();s.sendAdditionalBuddyRequest(r.getCompleteConfig(),q)},'AvailableList')});},getWebChatNotification:function p(){return o&&o.getWebChatNotification()},isReady:function p(){return !!o},set:function p(q,r,s,t){k(q,r,true,s,t)}});c('Arbiter').subscribe(c('JSLogger').DUMP_EVENT,n);c('PresencePrivacy').subscribe(['privacy-changed','privacy-availability-changed','privacy-user-presence-response'],j);c('requireWeak')('ChannelConnection',function(p){return p.subscribe([p.CONNECTED,p.RECONNECTING,p.SHUTDOWN,p.MUTE_WARNING,p.UNMUTE_WARNING],j)});c('Arbiter').subscribe(c('ChannelConstants').getArbiterType('buddylist_overlay'),function(p,q){var r={},s=q.obj.overlay;for(var t in s){h.set(t,s[t].a,s[t].s||'channel',s[t].vc);if(s[t].la)r[t]=s[t].la;}c('LastActiveTimes').update(r)});c('Arbiter').subscribe([c('ChannelConstants').getArbiterType('typ'),c('ChannelConstants').getArbiterType('ttyp')],function(p,q){var r=q.obj;if(r.st===c('TypingStates').TYPING){var s=r.from;if(c('ChatVisibility').isOnline()){c('BanzaiODS').bumpEntityKey('presence','stale_presence_check_typing');var t=c('PresenceStatus').get(s);if(t!=c('AvailableListConstants').ACTIVE){var u=c('LastActiveTimes').get(s)*1000,v=c('ServerTime').get();if(!u){c('BanzaiODS').bumpEntityKey('presence','no_detailed_presence_typing')}else if(v-u>5*60*1000){var w='stale_presence_typing',x=v-u;if(x<10*60*1000){w+='600'}else if(x<60*60*1000)w+='3600';c('BanzaiODS').bumpEntityKey('presence',w)}}}h.set(s&&s.toString(),c('AvailableListConstants').ACTIVE,'channel-typing')}});c('Arbiter').subscribe(c('ChannelConstants').getArbiterType('messaging'),function(p,q){if(!c('ChatVisibility').isOnline())return;var r=q.obj;if(r.message&&r.message.timestamp&&r.message.sender_fbid){var s=c('ServerTime').get(),t=r.message.timestamp;if(s-t<2*60*1000){c('BanzaiODS').bumpEntityKey('presence','stale_presence_check');var u=r.message.sender_fbid,v=c('PresenceStatus').get(u);if(v==c('AvailableListConstants').ACTIVE)return;var w=c('LastActiveTimes').get(u)*1000;if(!w){c('BanzaiODS').bumpEntityKey('presence','no_detailed_presence')}else if(t-w>5*60*1000){var x='stale_presence',y=t-w;if(y<10*60*1000){x+='600'}else if(y<60*60*1000)x+='3600';c('BanzaiODS').bumpEntityKey('presence',x)}}}});f.exports=h}),null);
__d('FBRTCStore',['FBRTCDispatcher','FluxStore'],(function a(b,c,d,e,f,g){'use strict';var h,i;h=babelHelpers.inherits(j,c('FluxStore'));i=h&&h.prototype;function j(){i.constructor.call(this,c('FBRTCDispatcher'))}j.prototype.__emitChange=function(){this.__emitter.emit(this.__changeEvent)};f.exports=j}),null);
__d('VideoCallTypedLogger',['Banzai','GeneratedLoggerUtils','nullthrows'],(function a(b,c,d,e,f,g){'use strict';function h(){this.clear()}h.prototype.log=function(){c('GeneratedLoggerUtils').log('logger:VideoCallLoggerConfig',this.$VideoCallTypedLogger1,c('Banzai').BASIC)};h.prototype.logVital=function(){c('GeneratedLoggerUtils').log('logger:VideoCallLoggerConfig',this.$VideoCallTypedLogger1,c('Banzai').VITAL)};h.prototype.clear=function(){this.$VideoCallTypedLogger1={};return this};h.prototype.updateData=function(j){this.$VideoCallTypedLogger1=babelHelpers['extends']({},this.$VideoCallTypedLogger1,j);return this};h.prototype.setEvent=function(j){this.$VideoCallTypedLogger1.event=j;return this};h.prototype.setMessage=function(j){this.$VideoCallTypedLogger1.message=j;return this};var i={event:true,message:true};f.exports=h}),null);
__d('FBRTCCallBlockingStore',['Arbiter','AsyncRequest','ChannelConstants','FBRTCDispatcher','FBRTCStore','VideoCallTypedLogger','setTimeoutAcrossTransitions'],(function a(b,c,d,e,f,g){'use strict';var h,i,j=false,k=0,l=null,m='call_block_setting_changed';h=babelHelpers.inherits(n,c('FBRTCStore'));i=h&&h.prototype;n.prototype.init=function(o){this.$FBRTCCallBlockingStore1(o);c('Arbiter').subscribe(c('ChannelConstants').getArbiterType('videocall_block_setting'),this.$FBRTCCallBlockingStore2.bind(this))};n.prototype.__onDispatch=function(o){if(o.type!==m)return;this.$FBRTCCallBlockingStore1(o.data)};n.prototype.$FBRTCCallBlockingStore1=function(o){switch(o){case 0:j=false;this.$FBRTCCallBlockingStore3();break;case -1:j=true;this.$FBRTCCallBlockingStore3();break;default:j=true;this.$FBRTCCallBlockingStore4(o);}this.__emitChange()};n.prototype.$FBRTCCallBlockingStore4=function(o){if(l===null)l=c('setTimeoutAcrossTransitions')(this.turnOnVideoCalling.bind(this),o*1000);};n.prototype.getBlockingStatus=function(){return j};n.prototype.turnOnVideoCalling=function(){new (c('AsyncRequest'))('/ajax/chat/settings.php').setHandler(this.$FBRTCCallBlockingStore5.bind(this)).setData({call_blocked_until:0}).send()};n.prototype.turnOffVideoCalling=function(o){k=o;new (c('AsyncRequest'))('/ajax/chat/settings.php').setHandler(this.$FBRTCCallBlockingStore6.bind(this)).setData({call_blocked_until:o}).send()};n.prototype.$FBRTCCallBlockingStore3=function(){if(l){clearTimeout(l);l=null}};n.prototype.$FBRTCCallBlockingStore5=function(){c('FBRTCDispatcher').dispatch({type:m,data:0});new (c('VideoCallTypedLogger'))().setEvent(m).setMessage('enable').log()};n.prototype.$FBRTCCallBlockingStore6=function(){c('FBRTCDispatcher').dispatch({type:m,data:k});new (c('VideoCallTypedLogger'))().setEvent(m).setMessage('disable_'+k).log()};n.prototype.$FBRTCCallBlockingStore2=function(o,p){c('FBRTCDispatcher').dispatch({type:m,data:p.obj.value})};function n(){h.apply(this,arguments)}f.exports=new n()}),null);
__d('ChatOptions',['Arbiter','ChannelConstants','ChatSidebarActions','ChatSidebarVisibility','FBRTCCallBlockingStore','JSLogger','PresenceUtil','SidebarType','ChatOptionsInitialData'],(function a(b,c,d,e,f,g){var h=c('JSLogger').create('chat_options'),i={};(function(){var k=c('ChatOptionsInitialData');for(var l in k){var m=k[l];if(l==='call_blocked_until'){c('FBRTCCallBlockingStore').init(m)}else i[l]=!!m;}})();var j=Object.assign(new (c('Arbiter'))(),{getSetting:function k(l){return i[l]},setSetting:function k(l,m,n){if(l==='sidebar_mode'){c('ChatSidebarVisibility').shouldShowSidebarIgnoreEnabled(null,function(o,p){if(m){c('ChatSidebarActions').enable(o?c('SidebarType').SIDEBAR:c('SidebarType').BUDDYLIST)}else c('ChatSidebarActions').disable();});return}if(this.getSetting(l)==m)return;if(n){n='from_'+n;h.log(n,{name:l,new_value:m,old_value:this.getSetting(l)})}i[l]=!!m;c('Arbiter').inform('chat/option-changed',{name:l,value:m})}});c('Arbiter').subscribe(c('ChannelConstants').getArbiterType('setting'),function(k,l){var m=l.obj;if(m.window_id===c('PresenceUtil').getSessionID())return;j.setSetting(m.setting,!!m.value,'channel')});c('Arbiter').subscribe(c('JSLogger').DUMP_EVENT,function(k,l){l.chat_options=i});f.exports=j}),null);
__d('ChatQuietLinks',['DataStore','DOM','Event','Parent','UserAgent_DEPRECATED','getOrCreateDOMID'],(function a(b,c,d,e,f,g){var h={},i={silenceLinks:function m(n){j(n,this.removeEmptyHrefs.bind(this))},nukeLinks:function m(n){j(n,this.removeAllHrefs.bind(this))},removeEmptyHrefs:function m(n){k(n,function(o){return !o||o==='#'})},removeAllHrefs:function m(n){k(n)}};function j(m,n){var o=!!c('UserAgent_DEPRECATED').chrome(),p=!!c('UserAgent_DEPRECATED').chrome()||c('UserAgent_DEPRECATED').ie()>=9||c('UserAgent_DEPRECATED').firefox()>=4;if(h[c('getOrCreateDOMID')(m)])return;h[c('getOrCreateDOMID')(m)]=true;if(!p)return;if(!o){n&&n(m);return}c('Event').listen(m,'mouseover',function q(r){var s=c('Parent').byTag(r.getTarget(),'a');if(s){var t=s.getAttribute('href');if(l(t)){c('DataStore').set(s,'stashedHref',s.getAttribute('href'));s.removeAttribute('href')}}});c('Event').listen(m,'mouseout',function q(r){var s=c('Parent').byTag(r.getTarget(),'a'),t=s&&c('DataStore').remove(s,'stashedHref');if(l(t))s.setAttribute('href',t);});c('Event').listen(m,'mousedown',function(q){if(!q.isDefaultRequested())return true;var r=c('Parent').byTag(q.getTarget(),'a'),s=r&&c('DataStore').get(r,'stashedHref');if(l(s))r.setAttribute('href',s);})}function k(m,n){var o=c('DOM').scry(m,'a');if(n)o=o.filter(function(p){return n(p.getAttribute('href'))});o.forEach(function(p){p.removeAttribute('href');if(!p.tabIndex)p.setAttribute('tabindex',0);})}function l(m){return m&&m!=='#'}f.exports=i}),null);
__d('ChatUnreadCountActionTypes',['keyMirror'],(function a(b,c,d,e,f,g){'use strict';f.exports=c('keyMirror')({COUNT_UPDATED:null})}),null);
__d('TypeaheadFacepile',['DOM'],(function a(b,c,d,e,f,g){function h(){}h.render=function(i){var j=[c('DOM').create('span',{className:'splitpic leftpic'},[c('DOM').create('img',{alt:'',src:i[0]})]),c('DOM').create('span',{className:'splitpic'+(i[2]?' toppic':'')},[c('DOM').create('img',{alt:'',src:i[1]})])];if(i[2])j.push(c('DOM').create('span',{className:'splitpic bottompic'},[c('DOM').create('img',{alt:'',src:i[2]})]));return c('DOM').create('span',{className:'splitpics clearfix'},j)};f.exports=h}),null);
__d('GamesXOut.react',['cx','React','ShimButton.react','joinClasses'],(function a(b,c,d,e,f,g,h){'use strict';var i,j,k=c('React').PropTypes;i=babelHelpers.inherits(l,c('React').Component);j=i&&i.prototype;l.prototype.render=function(){return c('React').createElement('div',{className:c('joinClasses')("_2b2u",this.props.className)},this.props.children,c('React').createElement(c('ShimButton.react'),{className:"_1m6e",onClick:this.props.onClick}))};function l(){i.apply(this,arguments)}l.propTypes={onClick:k.func.isRequired};f.exports=l}),null);
__d('Typeahead',['ArbiterMixin','BehaviorsMixin','DataStore','DOM','Event','Parent','Run','Style','emptyFunction','ge','mixin'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits(j,c('mixin')(c('ArbiterMixin'),c('BehaviorsMixin')));i=h&&h.prototype;function j(k,l,m,n){'use strict';i.constructor.call(this);this.args={data:k,view:l,core:m};c('DataStore').set(n,'Typeahead',this);this.element=n}j.prototype.init=function(k){'use strict';this.init=c('emptyFunction');this.getCore();this.getView().setAccessibilityControlElement(this.getCore().getElement());this.proxyEvents();this.initBehaviors(k||[]);this.inform('init',this);this.data.bootstrap();this.core.focus()};j.prototype.getData=function(){'use strict';if(!this.data){var k=this.args.data;this.data=k;this.data.init()}return this.data};j.prototype.getView=function(){'use strict';if(!this.view){var k=this.args.view,l=k.node||c('ge')(k.node_id);if(!l){l=c('DOM').create('div',{className:'uiTypeaheadView'});c('DOM').appendContent(this.element,l)}if(typeof k.ctor==='string'){this.view=new window[k.ctor](l,k.options||{})}else this.view=new k.ctor(l,k.options||{});this.view.init();this.view.setTypeahead(this.element)}return this.view};j.prototype.getCore=function(){'use strict';if(!this.core){var k=this.args.core;if(typeof k.ctor==='string'){this.core=new window[k.ctor](k.options||{})}else this.core=new k.ctor(k.options||{});this.core.init(this.getData(),this.getView(),this.getElement())}return this.core};j.prototype.getElement=function(){'use strict';return this.element};j.prototype.setHeight=function(k){'use strict';if(k!=='auto')k+='px';c('Style').set(this.element,'height',k)};j.prototype.swapData=function(k){'use strict';return this.$Typeahead1(k,true)};j.prototype.swapDataNoCoreReset=function(k){'use strict';return this.$Typeahead1(k,false)};j.prototype.$Typeahead1=function(k,l){'use strict';var m=this.core;this.data=this.args.data=k;k.init();if(m){m.data=k;m.initData();if(l)m.reset();this.proxyEvents()}k.bootstrap();return k};j.prototype.proxyEvents=function(){'use strict';[this.data,this.view,this.core].forEach(function(k){k.subscribe(k.events,this.inform.bind(this))},this)};j.prototype.initBehaviors=function(k){'use strict';k.forEach(function(l){if(typeof l==='string'){if(b.TypeaheadBehaviors&&b.TypeaheadBehaviors[l]){b.TypeaheadBehaviors[l](this)}else c('Run').onLoad(function(){if(b.TypeaheadBehaviors)(b.TypeaheadBehaviors[l]||c('emptyFunction'))(this);}.bind(this));}else this.enableBehavior(l);},this)};j.getInstance=function(k){'use strict';var l=c('Parent').byClass(k,'uiTypeahead');return l?c('DataStore').get(l,'Typeahead'):null};j.initNow=function(k,l,m){'use strict';if(m)m.init(k);k.init(l)};j.init=function(k,l,m,n){var o;'use strict';if(!c('DOM').isNodeOfType(k,['input','textarea']))k=c('DOM').scry(k,'input')[0]||c('DOM').scry(k,'textarea')[0];var p=false;try{p=document.activeElement===k}catch(q){}if(p){j.initNow(l,m,n)}else (function(){var q=c('Event').listen(k,'focus',function(){j.initNow(l,m,n);q.remove()})})();};f.exports=j}),null);
__d('BasicTypeaheadRenderer',['BadgeHelper','DOM'],(function a(b,c,d,e,f,g){function h(i,j){var k=[];if(i.icon)k.push(c('DOM').create('img',{alt:'',src:i.icon}));var l=i.debug_info;if(l)k.push(c('DOM').create('span',{className:'debugInfo'},l));if(i.text){var m=[i.text];if(i.is_verified)m.push(c('BadgeHelper').renderBadge('xsmall','verified'));k.push(c('DOM').create('span',{className:'text'},m))}if(i.subtext){var n=[i.subtext];k.push(c('DOM').create('span',{className:'subtext'},n))}var o=c('DOM').create('li',{className:i.type||''},k);if(i.text){o.setAttribute('title',i.text);o.setAttribute('aria-label',i.text)}return o}h.className='basic';f.exports=h}),null);
__d('createIxElement',['invariant','DOM','joinClasses'],(function a(b,c,d,e,f,g,h){function i(j,k){var l='img',m;j.sprited||j.uri||h(0);if(j.sprited){l=c('joinClasses')(l,j.spriteMapCssClass,j.spriteCssClass);m=c('DOM').create('i',{className:l});if(k!=null)c('DOM').setContent(m,c('DOM').create('u',null,k));}else if(j.uri){m=c('DOM').create('img',{className:l,src:j.uri});if(k!=null)m.setAttribute('alt',k);if(j.width)m.setAttribute('width',j.width);if(j.height)m.setAttribute('height',j.height);}return m}f.exports=i}),null);
__d('TypeaheadView',['ix','$','ArbiterMixin','BasicTypeaheadRenderer','CSS','DOM','Event','Parent','createIxElement','emptyFunction','getElementText','getOrCreateDOMID','mixin'],(function a(b,c,d,e,f,g,h){var i,j;i=babelHelpers.inherits(k,c('mixin')(c('ArbiterMixin')));j=i&&i.prototype;function k(l,m){'use strict';j.constructor.call(this);this.element=this.content=c('$')(l);Object.assign(this,m)}k.prototype.init=function(){'use strict';this.init=c('emptyFunction');this.initializeEvents();this.reset()};k.prototype.initializeEvents=function(){'use strict';c('Event').listen(this.element,{mouseup:this.mouseup.bind(this),mouseover:this.mouseover.bind(this)})};k.prototype.setTypeahead=function(l){'use strict';this.typeahead=l};k.prototype.setAccessibilityControlElement=function(l){'use strict';this.accessibilityElement=l};k.prototype.getElement=function(){'use strict';return this.element};k.prototype.mouseup=function(event){'use strict';if(event.button!=2){this.select(true);event.prevent()}};k.prototype.mouseover=function(event){'use strict';if(this.ignoreMouseover){this.ignoreMouseover=false;return}if(this.visible)this.highlight(this.getIndex(event));};k.prototype.reset=function(l){'use strict';if(!l)this.disableAutoSelect=false;this.index=-1;this.items=[];this.results=[];this.value='';this.content.innerHTML='';this.inform('reset');return this};k.prototype.getIndex=function(event){'use strict';return this.items.indexOf(c('Parent').byTag(event.getTarget(),'li'))};k.prototype.getSelection=function(){'use strict';var l=this.results[this.index]||null;return this.visible?l:null};k.prototype.isEmpty=function(){'use strict';return !this.results.length};k.prototype.isVisible=function(){'use strict';return !!this.visible};k.prototype.show=function(){'use strict';c('CSS').show(this.element);if(this.results&&this.results.length)if(this.autoSelect&&this.accessibilityElement&&this.selected)this.accessibilityElement.setAttribute('aria-activedescendant',c('getOrCreateDOMID')(this.selected));this.accessibilityElement&&this.accessibilityElement.setAttribute('aria-expanded','true');this.visible=true;return this};k.prototype.hide=function(){'use strict';c('CSS').hide(this.element);if(this.accessibilityElement){this.accessibilityElement.setAttribute('aria-expanded','false');this.accessibilityElement.removeAttribute('aria-activedescendant')}this.visible=false;return this};k.prototype.render=function(l,m,n){'use strict';this.value=l;if(!m.length){this.accessibilityElement&&this.accessibilityElement.removeAttribute('aria-activedescendant');this.reset(true);return}var o={results:m,value:l};this.inform('beforeRender',o);m=o.results;var p=n&&this.index!=-1?this.index:this.getDefaultIndex(m);this.results=m;c('DOM').setContent(this.content,this.buildResults(m));this.items=this.getItems();this.highlight(p,false);this.inform('render',this.results)};k.prototype.getItems=function(){'use strict';return c('DOM').scry(this.content,'li')};k.prototype.buildResults=function(l){'use strict';var m,n=null;if(typeof this.renderer=='function'){m=this.renderer;n=this.renderer.className||''}else{m=b.TypeaheadRenderers[this.renderer];n=this.renderer}m=m.bind(this);var o=l.map(function(q,r){var s=q.node||m(q,r);s.setAttribute('role','option');return s}),p=c('DOM').create('ul',{className:n,id:'typeahead_list_'+(this.typeahead?c('getOrCreateDOMID')(this.typeahead):c('getOrCreateDOMID')(this.element))},o);p.setAttribute('role','listbox');return p};k.prototype.showLoadingIndicator=function(){'use strict';var l=c('createIxElement')(h("85428")),m=c('DOM').create('li',{className:'typeaheadViewInternalLoading'},l),n=c('DOM').create('ul',{role:'listbox'},m);c('DOM').setContent(this.content,n)};k.prototype.getDefaultIndex=function(){'use strict';var l=this.autoSelect&&!this.disableAutoSelect;return this.index<0&&!l?-1:0};k.prototype.next=function(){'use strict';this.highlight(this.index+1);this.inform('next',this.selected)};k.prototype.prev=function(){'use strict';this.highlight(this.index-1);this.inform('prev',this.selected)};k.prototype.getItemText=function(l){'use strict';var m='';if(l){m=l.getAttribute('aria-label');if(!m){m=c('getElementText')(l);l.setAttribute('aria-label',m)}}return m};k.prototype.setIsViewingSelectedItems=function(l){'use strict';this.viewingSelected=l;return this};k.prototype.getIsViewingSelectedItems=function(){'use strict';return !!this.viewingSelected};k.prototype.highlight=function(l,m){'use strict';if(this.selected){c('CSS').removeClass(this.selected,'selected');this.selected.setAttribute('aria-selected','false')}if(l>this.items.length-1){l=-1}else if(l<-1)l=this.items.length-1;if(l>=0&&l<this.items.length){this.selected=this.items[l];c('CSS').addClass(this.selected,'selected');this.selected.setAttribute('aria-selected','true');if(this.accessibilityElement)setTimeout(function(){this.accessibilityElement.setAttribute('aria-activedescendant',c('getOrCreateDOMID')(this.selected))}.bind(this),0);}else this.accessibilityElement&&this.accessibilityElement.removeAttribute('aria-activedescendant');this.index=l;this.disableAutoSelect=l==-1;if(m!==false)this.inform('highlight',{index:l,selected:this.results[l],element:this.selected});};k.prototype.select=function(l){'use strict';if(this.headerIndex&&l)return;var m=this.index,n=this.results[m],o=this.element.getAttribute('id');if(n){var p=function(q){this.inform('select',{index:m,clicked:!!l,selected:q,id:o,query:this.value});this.inform('afterSelect')}.bind(this);if(this.shouldValidateTypeaheadSelection(n)){this.validateTypeaheadSelection(n,p)}else p(n);}};k.prototype.shouldValidateTypeaheadSelection=function(l){'use strict';return false};k.prototype.validateTypeaheadSelection=function(l,m){'use strict'};Object.assign(k.prototype,{events:['highlight','render','reset','select','beforeRender','next','prev'],renderer:c('BasicTypeaheadRenderer'),autoSelect:false,ignoreMouseover:false});f.exports=k}),null);
__d("Utf16",[],(function a(b,c,d,e,f,g){var h={decode:function i(j){switch(j.length){case 1:return j.charCodeAt(0);case 2:return 65536|(j.charCodeAt(0)-55296)*1024|j.charCodeAt(1)-56320;default:return null;}},encode:function i(j){if(j<65536){return String.fromCharCode(j)}else return String.fromCharCode(55296+(j-65536>>10))+String.fromCharCode(56320+j%1024);}};f.exports=h}),null);
__d('EmoticonEmojiList',[],(function a(b,c,d,e,f,g){f.exports={names:{':)':'slightsmile',':-)':'slightsmile',':]':'slightsmile','=)':'smile','(:':'slightsmile','(=':'smile',':(':'frown',':-(':'frown',':[':'frown','=(':'frown',')=':'frown',';-P':'winktongue',';P':'winktongue',';-p':'winktongue',';p':'winktongue',':poop:':'poop',':P':'tongue',':-P':'tongue',':-p':'tongue',':p':'tongue','=P':'tongue','=p':'tongue','=D':'grin',':-D':'slightgrin',':D':'slightgrin',':o':'gasp',':-O':'gasp',':O':'gasp',':-o':'gasp',';)':'wink',';-)':'wink','8-)':'glasses','8)':'glasses','B-)':'glasses','B)':'glasses','>:(':'grumpy','>:-(':'grumpy',':/':'unsure',':-/':'unsure',':\\':'unsure',':-\\':'unsure','=/':'unsure','=\\':'unsure',':\'(':'cry',':\'-(':'cry',':\u2019(':'cry',':\u2019-(':'cry','3:)':'devil','3:-)':'devil','O:)':'angel','O:-)':'angel','0:)':'angel','0:-)':'angel',':*':'kiss',':-*':'kiss',';-*':'winkkiss',';*':'winkkiss','<3':'heart','&lt;3':'heart','\u2665':'heart','^_^':'kiki','^~^':'kiki','-_-':'expressionless',':-|':'squint',':|':'squint','>:o':'upset','>:O':'upset','>:-O':'upset','>:-o':'upset','>_<':'persevere','>.<':'persevere','<(")':'penguin',O_O:'flushface',o_o:'flushface','0_0':'flushface',T_T:'crying','T-T':'crying',ToT:'crying','T.T':'crying','-3-':'flushkiss','\'-_-':'sweating','\u2019-_-':'sweating','(y)':'like',':like:':'like','(Y)':'like','(n)':'dislike','(N)':'dislike'},emote2emojis:{slightsmile:'1f642',smile:'1f60a',frown:'1f61e',winktongue:'1f61c',poop:'1f4a9',tongue:'1f61b',slightgrin:'1f600',grin:'1f603',gasp:'1f62e',wink:'1f609',glasses:'1f60e',grumpy:'1f620',unsure:'1f615',cry:'1f622',devil:'1f608',angel:'1f607',kiss:'1f617',winkkiss:'1f618',heart:'2764',kiki:'1f60a',expressionless:'1f611',squint:'1f610',upset:'1f620',persevere:'1f623',penguin:'1f427',flushface:'1f633',crying:'1f62d',flushkiss:'1f61a',sweating:'1f613',like:'f0000',dislike:'1f44e'},symbols:{slightsmile:':)',smile:'=)',frown:':(',winktongue:';-P',poop:':poop:',tongue:':P',slightgrin:':D',grin:'=D',gasp:':o',wink:';)',glasses:'8-)',grumpy:'>:(',unsure:':/',cry:':\'(',devil:'3:)',angel:'O:)',kiss:':*',winkkiss:';*',heart:'<3',kiki:'^_^',expressionless:'-_-',squint:':-|',upset:'>:o',persevere:'>_<',penguin:'<(")',flushface:'O_O',crying:'T_T',flushkiss:'-3-',sweating:'\'-_-',like:'(y)',dislike:'(n)'},regexp:/(^|[\s\'\".])(:\)(?!\))|:\-\)(?!\))|:\]|=\)(?!\))|\(:|\(=|:\(|:\-\(|:\[|=\(|\)=|;P|;\-P|;\-p|;p|:poop:|:P|:\-P|:\-p|:p|=P|=p|=D|:\-D|:D|:o|:\-O|:O|:\-o|;\)(?!\))|;\-\)(?!\))|8\-\)(?!\))|B\-\)(?!\))|B\)(?!\))|8\)(?!\))|>:\(|>:\-\(|:\/|:\-\/|:\\|:\-\\|=\/|=\\|:\'\(|:\'\-\(|:\u2019\(|:\u2019\-\(|3:\)(?!\))|3:\-\)(?!\))|O:\)(?!\))|O:\-\)(?!\))|0:\)(?!\))|0:\-\)(?!\))|:\*|:\-\*|;\*|;\-\*|<3|&lt;3|\u2665|\^_\^|\^~\^|\-_\-|:\-\||:\||>:o|>:O|>:\-O|>:\-o|>_<|>\.<|<\(\"\)(?!\))|O_O|o_o|0_0|T_T|T\-T|ToT|T\.T|\-3\-|\'\-_\-|\u2019\-_\-|\(y\)(?!\))|:like:|\(Y\)(?!\))|\(n\)(?!\))|\(N\)(?!\)))([\s\'\".,!?]|<br>|$)/,noncapturingRegexp:/(?:^|[\s\'\".])(:\)(?!\))|:\-\)(?!\))|:\]|=\)(?!\))|\(:|\(=|:\(|:\-\(|:\[|=\(|\)=|;P|;\-P|;\-p|;p|:poop:|:P|:\-P|:\-p|:p|=P|=p|=D|:\-D|:D|:o|:\-O|:O|:\-o|;\)(?!\))|;\-\)(?!\))|8\-\)(?!\))|B\-\)(?!\))|B\)(?!\))|8\)(?!\))|>:\(|>:\-\(|:\/|:\-\/|:\\|:\-\\|=\/|=\\|:\'\(|:\'\-\(|:\u2019\(|:\u2019\-\(|3:\)(?!\))|3:\-\)(?!\))|O:\)(?!\))|O:\-\)(?!\))|0:\)(?!\))|0:\-\)(?!\))|:\*|:\-\*|;\*|;\-\*|<3|&lt;3|\u2665|\^_\^|\^~\^|\-_\-|:\-\||:\||>:o|>:O|>:\-O|>:\-o|>_<|>\.<|<\(\"\)(?!\))|O_O|o_o|0_0|T_T|T\-T|ToT|T\.T|\-3\-|\'\-_\-|\u2019\-_\-|\(y\)(?!\))|:like:|\(Y\)(?!\))|\(n\)(?!\))|\(N\)(?!\)))(?:[\s\'\".,!?]|<br>|$)/}}),null);
__d("WorkInviteSource",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({RHC_MODULE:"rhc_module",FEED_END_STATE:"feed_end_state",NEWSFEED_NUX:"newsfeed_nux",BULK_UPLOAD:"bulk_upload",GROUP_BULK_UPLOAD:"group_bulk_upload",GROUP_BULK_UPLOAD_FROM_SETTINGS:"group_bulk_upload_from_settings",GROUP_BULK_UPLOAD_FROM_RHC:"group_bulk_upload_from_rhc",GROUP_BULK_UPLOAD_FROM_MEMBERS:"group_bulk_upload_from_members",GROUP_INVITE_DIALOG:"group_invite_dialog",GROUP_INVITE_TYPEAHEAD:"group_invite_typeahead",GROUP_RHC_LINK:"group_rhc_link",SEARCH_RESULT:"search_result",SEARCH_RHC:"search_rhc",SEARCH_TYPEAHEAD:"search_typeahead",INSTANCE_INVITE_LINK:"instance_invite_link",SIGN_UP:"sign_up",SIGN_UP_CHAT_FIRST:"sign_up_chat_first",SIGN_UP_NON_GENESIS:"sign_up_non_genesis",SIGN_UP_M_SITE:"sign_up_m_site",SETUP_TEAM_SIGNUP_STEP:"setup_team_signup_step",FORWARD_INVITE_EMAIL:"forward_invite_email",WORK_GOALS:"work_goals",ACCESS_REQUESTED:"access_requested",AZURE:"azure",AZURE_BULK:"azure_bulk",GSUITE:"gsuite",GSUITE_BULK:"gsuite_bulk",SELF_INVITE:"self_invite",SELF_INVITE_VIA_INVITE_LINK:"self_invite_via_invite_link",SELF_INVITE_VIA_SSO:"self_invite_via_sso",WORKPLACE_FB_COM:"workplace_fb_com",MCG_EXTERNAL_INVITE:"mcg_external_invite",M2_ADS_TO_NGO:"m2_ads_to_ngo",M2_AYMT_TO_NGO:"m2_aymt_to_ngo",MOBILE_APP_CLAIM:"mobile_app_claim",COMPANY_SUBDOMAIN_LOGIN_PAGE:"company_subdomain_login_page",WORK_FACEBOOK_COM:"work_facebook_com",AYMT:"aymt",TESTS:"tests",E2E_TESTS:"e2e_tests",WWW_BOOKMARK:"www_bookmark",MSITE_BOOKMARK:"msite_bookmark",WWW_BLUEBAR:"www_bluebar",WWW_BLUEBAR_LINK:"www_bluebar_link",WWW_CHAT_SIDEBAR:"www_chat_sidebar",WWW_SIDEBAR_PENDING_SECTION:"www_sidebar_pending_section",WWW_FEED_QP:"www_feed_qp",ANDROID_APP:"android_app",ANDROID_INVITE_OPTION_PICKER:"android_invite_option_picker",ANDROID_TYPED_EMAIL:"android_typed_email",ANDROID_GROUP_TYPED_EMAIL:"android_group_typed_email",ANDROID_CONTACT_EMAIL:"android_contact_email",ANDROID_ALL_CONTACT_EMAILS:"android_all_contact_emails",IOS_APP:"ios_app",IOS_GROUP_TYPED_EMAIL:"ios_group_typed_email",IOS_INSTANCE_TYPED_EMAIL:"ios_instance_typed_email",IOS_CONTACT_EMAIL:"ios_contact_email",IOS_ALL_CONTACT_EMAILS:"ios_all_contact_emails",SIGNUP4_E2E_STANDARD_GENESIS:"signup4_e2e_test_standard_genesis",SIGNUP4_E2E_PREMIUM_GENESIS:"signup4_e2e_test_premium_genesis",WORK_MANAGED_CLAIM_TEST:"work_managed_claim_test",UNKNOWN:"unknown"})}),null);
__d("XWorkInviteCoworkersDialogController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/work\/invite_coworkers\/dialog\/",{source:{type:"Enum",required:true,enumType:1},source_product:{type:"Enum",enumType:1},__asyncDialog:{type:"Int"}})}),null);