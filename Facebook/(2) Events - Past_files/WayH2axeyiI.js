if (self.CavalryLogger) { CavalryLogger.start_js(["VW9KE"]); }

__d('ArtillerySWDataCollector',['Promise','ArtillerySWConfig','ClientServiceWorkerMessage','ServiceWorkerRegistration','pageLoadedViaSWCache','setTimeoutAcrossTransitions'],(function a(b,c,d,e,f,g){var h=5000,i=null;function j(l){var m=false,n=new (c('ClientServiceWorkerMessage'))('asw-pageTraceDataRequest',{fullSWEFLog:c('ArtillerySWConfig').shouldLogEFRsrcs},function(o){var p=o.data,q=p.command,r=p.data;if(m)return;m=true;if(q==='trace'&&r.workerPerf){var s=void 0;if(r.workerPerf.annotations.stringProps&&r.workerPerf.annotations.stringProps.fullCacheHitData){s=r.workerPerf.annotations.stringProps.fullCacheHitData;delete r.workerPerf.annotations.stringProps.fullCacheHitData}l({workerPerf:r.workerPerf,fullCacheHitData:s});return}});n.sendViaController()}var k={collect:function l(){if(i!==null)return i;i=new (c('Promise'))(function(m,n){if(!c('pageLoadedViaSWCache')())c('ServiceWorkerRegistration').isAWorkerActivated().then(function(o){if(o){c('setTimeoutAcrossTransitions')(function(){m()},h)}else{m();return}})['catch'](m);j(m)});return i}};f.exports=k}),null);
__d('ServiceWorkerExperimentPerfTypedLogger',['Banzai','GeneratedLoggerUtils','nullthrows'],(function a(b,c,d,e,f,g){'use strict';function h(){this.clear()}h.prototype.log=function(){c('GeneratedLoggerUtils').log('logger:ServiceWorkerExperimentPerfLoggerConfig',this.$ServiceWorkerExperimentPerfTypedLogger1,c('Banzai').BASIC)};h.prototype.logVital=function(){c('GeneratedLoggerUtils').log('logger:ServiceWorkerExperimentPerfLoggerConfig',this.$ServiceWorkerExperimentPerfTypedLogger1,c('Banzai').VITAL)};h.prototype.clear=function(){this.$ServiceWorkerExperimentPerfTypedLogger1={};return this};h.prototype.updateData=function(j){this.$ServiceWorkerExperimentPerfTypedLogger1=babelHelpers['extends']({},this.$ServiceWorkerExperimentPerfTypedLogger1,j);return this};h.prototype.setAppCache=function(j){this.$ServiceWorkerExperimentPerfTypedLogger1.app_cache=j;return this};h.prototype.setBodyVisible=function(j){this.$ServiceWorkerExperimentPerfTypedLogger1.body_visible=j;return this};h.prototype.setClientRev=function(j){this.$ServiceWorkerExperimentPerfTypedLogger1.client_rev=j;return this};h.prototype.setCsstart=function(j){this.$ServiceWorkerExperimentPerfTypedLogger1.csstart=j;return this};h.prototype.setDisplayDone=function(j){this.$ServiceWorkerExperimentPerfTypedLogger1.display_done=j;return this};h.prototype.setDns=function(j){this.$ServiceWorkerExperimentPerfTypedLogger1.dns=j;return this};h.prototype.setDomComplete=function(j){this.$ServiceWorkerExperimentPerfTypedLogger1.dom_complete=j;return this};h.prototype.setDomContentLoad=function(j){this.$ServiceWorkerExperimentPerfTypedLogger1.dom_content_load=j;return this};h.prototype.setDomInteractiveLoad=function(j){this.$ServiceWorkerExperimentPerfTypedLogger1.dom_interactive_load=j;return this};h.prototype.setDomSetup=function(j){this.$ServiceWorkerExperimentPerfTypedLogger1.dom_setup=j;return this};h.prototype.setE2e=function(j){this.$ServiceWorkerExperimentPerfTypedLogger1.e2e=j;return this};h.prototype.setEfRsrcSuccessRate=function(j){this.$ServiceWorkerExperimentPerfTypedLogger1.ef_rsrc_success_rate=j;return this};h.prototype.setExperimentType=function(j){this.$ServiceWorkerExperimentPerfTypedLogger1.experiment_type=j;return this};h.prototype.setFetchStartMs=function(j){this.$ServiceWorkerExperimentPerfTypedLogger1.fetch_start_ms=j;return this};h.prototype.setFirstResponse=function(j){this.$ServiceWorkerExperimentPerfTypedLogger1.first_response=j;return this};h.prototype.setHardwareConcurrency=function(j){this.$ServiceWorkerExperimentPerfTypedLogger1.hardware_concurrency=j;return this};h.prototype.setHasSwCacheStorage=function(j){this.$ServiceWorkerExperimentPerfTypedLogger1.has_sw_cache_storage=j;return this};h.prototype.setIsSecondLoad=function(j){this.$ServiceWorkerExperimentPerfTypedLogger1.is_second_load=j;return this};h.prototype.setIsSwFnrLoad=function(j){this.$ServiceWorkerExperimentPerfTypedLogger1.is_sw_fnr_load=j;return this};h.prototype.setLastResponse=function(j){this.$ServiceWorkerExperimentPerfTypedLogger1.last_response=j;return this};h.prototype.setLoadedViaSwCache=function(j){this.$ServiceWorkerExperimentPerfTypedLogger1.loaded_via_sw_cache=j;return this};h.prototype.setNavStartMs=function(j){this.$ServiceWorkerExperimentPerfTypedLogger1.nav_start_ms=j;return this};h.prototype.setPageClient=function(j){this.$ServiceWorkerExperimentPerfTypedLogger1.page_client=j;return this};h.prototype.setPath=function(j){this.$ServiceWorkerExperimentPerfTypedLogger1.path=j;return this};h.prototype.setRbbDisplayDone=function(j){this.$ServiceWorkerExperimentPerfTypedLogger1.rbb_display_done=j;return this};h.prototype.setRedirect=function(j){this.$ServiceWorkerExperimentPerfTypedLogger1.redirect=j;return this};h.prototype.setRequest=function(j){this.$ServiceWorkerExperimentPerfTypedLogger1.request=j;return this};h.prototype.setRespond=function(j){this.$ServiceWorkerExperimentPerfTypedLogger1.respond=j;return this};h.prototype.setServerRev=function(j){this.$ServiceWorkerExperimentPerfTypedLogger1.server_rev=j;return this};h.prototype.setServerRoute=function(j){this.$ServiceWorkerExperimentPerfTypedLogger1.server_route=j;return this};h.prototype.setSubstream0=function(j){this.$ServiceWorkerExperimentPerfTypedLogger1.substream_0=j;return this};h.prototype.setSubstream1=function(j){this.$ServiceWorkerExperimentPerfTypedLogger1.substream_1=j;return this};h.prototype.setSwControlledWindow=function(j){this.$ServiceWorkerExperimentPerfTypedLogger1.sw_controlled_window=j;return this};h.prototype.setSwPageLoadCount=function(j){this.$ServiceWorkerExperimentPerfTypedLogger1.sw_page_load_count=j;return this};h.prototype.setSwStarted=function(j){this.$ServiceWorkerExperimentPerfTypedLogger1.sw_started=j;return this};h.prototype.setTcp=function(j){this.$ServiceWorkerExperimentPerfTypedLogger1.tcp=j;return this};h.prototype.setTti=function(j){this.$ServiceWorkerExperimentPerfTypedLogger1.tti=j;return this};h.prototype.setUnload=function(j){this.$ServiceWorkerExperimentPerfTypedLogger1.unload=j;return this};h.prototype.setVC=function(j){this.$ServiceWorkerExperimentPerfTypedLogger1.vc=j;return this};var i={app_cache:true,body_visible:true,client_rev:true,csstart:true,display_done:true,dns:true,dom_complete:true,dom_content_load:true,dom_interactive_load:true,dom_setup:true,e2e:true,ef_rsrc_success_rate:true,experiment_type:true,fetch_start_ms:true,first_response:true,hardware_concurrency:true,has_sw_cache_storage:true,is_second_load:true,is_sw_fnr_load:true,last_response:true,loaded_via_sw_cache:true,nav_start_ms:true,page_client:true,path:true,rbb_display_done:true,redirect:true,request:true,respond:true,server_rev:true,server_route:true,substream_0:true,substream_1:true,sw_controlled_window:true,sw_page_load_count:true,sw_started:true,tcp:true,tti:true,unload:true,vc:true};f.exports=h}),null);
__d('ServiceWorkerURLCleaner',[],(function a(b,c,d,e,f,g){var h=/sw_fnr_id=\d+&?/,i=/fnr_t=\d+&?/,j=false,k=false,l={removeRedirectID:function m(){if(j)return k;j=true;if(location.search&&h.test(location.search)){k=true;if(history!==undefined&&typeof history.replaceState==='function'){var n=location.toString().replace(h,'').replace(i,'').replace(/\?$/,'');history.replaceState({},document.title,n)}}return k}};f.exports=l}),null);
__d('ServiceWorkerProfilerTypes',['Map','TimingAnnotations'],(function a(b,c,d,e,f,g){var h={START:'start',PARSED:'parsed',INITIALIZED:'init',FIRST_EVENT:'firstEvent',ACTIVATE_START:'activate_start',RESOURCE_CACHE_ACTIVATE_START:'resource_cache_activate_start',RESOURCE_CACHE_ACTIVATE_END:'resource_cache_activate_end',ACTIVATE_END:'activate_end'},i={FETCH_START:'start',CACHE_STORAGE_INIT_START:'cacheStorageInitStart',CACHE_STORAGE_INIT_END:'cacheStorageInitEnd',ROUTE_CONFIG_CACHE_LOOKUP_START:'routeLookupStart',ROUTE_CONFIG_CACHE_LOOKUP_END:'routeLookupEnd',CACHE_KEYS_LOADING_START:'cacheKeysLoadingStart',CACHE_KEYS_LOADING_END:'cacheKeysLoadingEnd',BEGIN_RESPONSE:'beginResponse',CACHE_FLUSH:'cacheFlush',RESOURCE_CACHE_FETCH_START:'resourceCacheFetchStart',RESOURCE_CACHE_FETCH_END:'resourceCacheFetchEnd',NETWORK_REQUEST_START:'requestStart',NETWORK_REQUEST_END:'requestEnd',NETWORK_RESPONSE_START:'responseStart',NETWORK_RESPONSE_END:'responseEnd',FETCH_END:'end'};f.exports={WorkerTiming:h,FetchTiming:i}}),null);
__d('ServiceWorkerWindowPerfLogger',['regeneratorRuntime','Promise','Arbiter','ArtillerySWDataCollector','BanzaiODS','BanzaiScuba','BigPipe','ClientChromeExperimentsData','NavigationMetrics','PageletEventConstsJS','ServiceWorkerExperimentPerfTypedLogger','ServiceWorkerProfilerTypes','ServiceWorkerURLCleaner','SiteData','SubscriptionsHandler','ServiceWorkerRegistration','UserAgentData','pageLoadedViaSWCache','performance'],(function a(b,c,d,e,f,g){var h,i='reactbluebar_perf',j='sw_ef_cache_hits',k='navigationStart',l='fetchStart',m='domainLookupStart',n='connectStart',o='connectEnd',p='responseStart',q='responseEnd',r='domLoading',s='domInteractive',t='domContentLoadedEventEnd',u='domComplete',v='unloadEventStart',w='unloadEventEnd',x=c('ServiceWorkerProfilerTypes').WorkerTiming,y=c('ServiceWorkerProfilerTypes').FetchTiming,z=(h={},h[c('PageletEventConstsJS').ARRIVE_START]={},h[c('PageletEventConstsJS').DISPLAY_END]={},h),aa=function ca(da){var ea,fa=this,ga,ha,ia,ja,ka;return c('regeneratorRuntime').async(function la(ma){while(1)switch(ma.prev=ma.next){case 0:ga=new (c('BanzaiScuba'))(i,null,{addBrowserFields:true,addGeoFields:true,addPredictedGeographyFields:true,addRequestFields:true});ha=new (c('ServiceWorkerExperimentPerfTypedLogger'))();ha.setExperimentType(da.experimentName);ha.setIsSecondLoad(da.isSecondLoad);ha.setLoadedViaSwCache(c('pageLoadedViaSWCache')());ha.setPageClient(da.page);ha.setClientRev(c('SiteData').client_revision);ha.setServerRev(c('SiteData').server_revision);ga.addNormal('path',b.location.href);ha.setPath(b.location.href);ia=c('ServiceWorkerURLCleaner').removeRedirectID();ha.setIsSwFnrLoad(ia);ga.addInteger('sw_fnr_load',ia?1:0);ga.addNormal('experiment_type',da.experimentName);ga.addNormal('page_client',da.page);ga.addNormal('response_type',c('pageLoadedViaSWCache')()?'sw':'server');ga.addNormal('second_load',da.isSecondLoad);ga.addNormal('client_revision',c('SiteData').client_revision);if(da.serverRoute){ga.addNormal('serverRoute',da.serverRoute);ha.setServerRoute(da.serverRoute)}ja=navigator.serviceWorker&&navigator.serviceWorker.controller;ha.setSwControlledWindow(Boolean(ja));ga.addNormal('sw_controlled_window',ja?1:0);ka={};if(c('ClientChromeExperimentsData').shouldShowClientChrome)ka.client_chrome=1;ga.addTagset('gk_on',ka);if(navigator.hardwareConcurrency){ga.addInteger('hardwareConcurrency',navigator.hardwareConcurrency);ha.setHardwareConcurrency(navigator.hardwareConcurrency)}if(!c('performance').timing){ma.next=29;break}ma.next=29;return c('regeneratorRuntime').awrap(function na(){var oa,pa,qa,ra,sa,ta,ua,va;return c('regeneratorRuntime').async(function wa(xa){while(1)switch(xa.prev=xa.next){case 0:pa=c('performance').timing;qa=pa.navigationStart;ra=pa.fetchStart;ha.setFetchStartMs(ra);ha.setNavStartMs(qa);ga.addInteger('tti',da.tti-ra);ga.addInteger('e2e',da.e2e-ra);ga.addInteger('display_done',da.displayDone-ra);if(da.bodyVisible)ga.addInteger('body_visible',da.bodyVisible-ra);if(typeof b._cstart==='number')ga.addInteger('cstart',b._cstart-ra);xa.next=12;return c('regeneratorRuntime').awrap(c('Promise').all([c('ArtillerySWDataCollector').collect(),ja?c('ServiceWorkerRegistration').getWorkerRegistration():c('Promise').resolve(null)]));case 12:sa=xa.sent;ta=sa[0];ua=sa[1];if(ta)(function(){var ya=ta.workerPerf,za=ya.workerTimings,ab=ya.fetchTimings,bb={await_route_config_cache:[y.ROUTE_CONFIG_CACHE_LOOKUP_START,y.ROUTE_CONFIG_CACHE_LOOKUP_END],flush_cache_content:[y.BEGIN_RESPONSE,y.CACHE_FLUSH],await_server_response:[y.CACHE_FLUSH,y.NETWORK_RESPONSE_START],flush_server_content:[y.NETWORK_RESPONSE_START,y.NETWORK_RESPONSE_END]};Object.keys(bb).forEach(function(fb){var gb=bb[fb],hb=ab[gb[0]],ib=ab[gb[1]];if(!hb||!ib)return;ga.addInteger(fb+'.begin',hb.ts-qa);ga.addInteger(fb+'.end',ib.ts-qa);ga.addInteger(fb+'.total',ib.ts-hb.ts)});var cb=za[x.START];if(cb&&cb.ts>=qa){ga.addInteger('sw_started',1);ha.setSwStarted(true)}else if(cb){ga.addInteger('sw_started',0);ha.setSwStarted(false)}if(ta.workerPerf.annotations.stringProps.hasSWCache)if(ta.workerPerf.annotations.stringProps.hasSWCache==='true'){ha.setHasSwCacheStorage(true);ga.addInteger('has_sw_cache_storage',1)}else{ha.setHasSwCacheStorage(false);ga.addInteger('has_sw_cache_storage',0)}var db=void 0;if(ta.workerPerf.annotations.stringProps.efRSRCSuccess!==undefined){db=Number(ta.workerPerf.annotations.stringProps.efRSRCSuccess);ha.setEfRsrcSuccessRate(db);ga.addInteger('ef_rsrc_success_rate',Math.round(db*100))}if(ta.workerPerf.annotations.stringProps.controlledWindows!==undefined)ga.addInteger('sw_controlled_windows',Number(ta.workerPerf.annotations.stringProps.controlledWindows));if(ta.fullCacheHitData){var eb=new (c('BanzaiScuba'))(j,null,{addBrowserFields:true,addGeoFields:true,addPredictedGeographyFields:true,addRequestFields:true});eb.addInteger('sw_fnr_load',ia?1:0);eb.addNormal('experiment_type',da.experimentName);eb.addNormal('page_client',da.page);eb.addNormal('response_type',c('pageLoadedViaSWCache')()?'sw':'server');eb.addNormal('second_load',da.isSecondLoad);eb.addNormal('client_revision',c('SiteData').client_revision);if(da.serverRoute)eb.addNormal('serverRoute',da.serverRoute);eb.addInteger('display_done_navs',da.displayDone-qa);eb.addInteger('tti_navs',da.tti-qa);if(ta.workerPerf.annotations.stringProps.hasSWCache&&ta.workerPerf.annotations.stringProps.hasSWCache==='true'){eb.addInteger('has_sw_cache_canary',1)}else eb.addInteger('has_sw_cache_canary',0);if(db!==undefined)eb.addInteger('ef_rsrc_success_rate',Math.round(db*100));eb.addNormal('full_cache_hit_data',ta.fullCacheHitData);eb.post()}})();if(ua){ga.addNormal('active_worker',ua.active?1:0);ga.addNormal('waiting_worker',ua.waiting?1:0);ga.addNormal('installing_worker',ua.installing?1:0)}ga.addInteger('tti_navs',da.tti-qa);ha.setTti(da.tti-qa);ga.addInteger('e2e_navs',da.e2e-qa);ha.setE2e(da.e2e-qa);ga.addInteger('display_done_navs',da.displayDone-qa);ha.setDisplayDone(da.displayDone-qa);if(da.bodyVisible){va=da.bodyVisible;ga.addInteger('body_visible_navs',va-qa);ha.setBodyVisible(va-qa)}if(typeof b._cstart==='number'){ga.addInteger('cstart_navs',b._cstart-qa);ha.setCsstart(b._cstart-qa)}Object.keys(z).forEach(function(ya){var za=z[ya];Object.keys(za).forEach(function(ab){ga.addInteger('pagelet_'+ya+'_'+ab+'_navs',za[ab]-qa);if(ya===c('PageletEventConstsJS').ARRIVE_START&&(ab==='first_response'||ab==='last_response'||ab==='substream_0'||ab==='substream_1')){var bb={};bb[ab]=za[ab]-qa;ha.updateData(bb)}})});[{name:'redirect',start:k,end:l},{name:'app_cache',start:l,end:m},{name:'dns',start:m,end:n},{name:'tcp',start:n,end:o},{name:'request',start:o,end:p},{name:'respond',start:p,end:q},{name:'dom_setup',start:p,end:r},{name:'dom_interactive_load',start:r,end:s},{name:'dom_content_load',start:s,end:t},{name:'dom_complete',start:t,end:u},{name:'unload',start:v,end:w}].forEach(function(ya){var za=ya.name,ab=ya.start,bb=ya.end,cb=c('performance').timing[ab]||0,db=c('performance').timing[bb]||0;if(db>=cb){ga.addInteger('perf_timing_'+za,db-cb);var eb={};eb[za]=db-cb;ha.updateData(eb)}});case 27:case 'end':return xa.stop();}},null,fa)}());case 29:ga.post();ha.log();case 31:case 'end':return ma.stop();}},null,this)},ba={init:function ca(da){var ea=da.isSecondLoad,fa=da.experimentName,ga=da.serverRoute;c('BanzaiODS').bumpEntityKey('web_speed','ServiceWorkerPerfInit');c('BanzaiODS').bumpEntityKey('web_speed','ServiceWorkerPerfInit.'+c('UserAgentData').browserName);var ha=null,ia=new (c('SubscriptionsHandler'))();ia.addSubscriptions(c('Arbiter').subscribe('sw/bodyVisible',function(ja,ka){var la=ka.relativeTime;if(c('performance').timing)ha=la+c('performance').timing.navigationStart;}));ia.addSubscriptions(c('Arbiter').subscribe(c('BigPipe').Events.init,function(ja,ka){var la=ka.arbiter,ma=la.subscribe('pagelet_event',function(na,oa){var event=oa.event,pa=oa.id,qa=oa.ts;if(!z[event]||typeof qa!=='number')return;var ra=['first_response','last_response','pagelet_welcome_box','pagelet_dock','pagelet_navigation','pagelet_composer','substream_0','substream_1','pagelet_ego_pane',{regex:/^topnews_main_stream_(\d+)$/,name:'topnews_main_stream'},{regex:/^hyperfeed_story_id_(\d+)$/,name:'hyperfeed_story'}],sa=null;for(var ta=ra,ua=Array.isArray(ta),va=0,ta=ua?ta:ta[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var wa;if(ua){if(va>=ta.length)break;wa=ta[va++]}else{va=ta.next();if(va.done)break;wa=va.value}var xa=wa;if(typeof xa==='string'){if(xa===pa){sa=xa;break}}else if(xa.regex.test(pa)){sa=xa.name;break}}if(sa&&!z[event][sa])z[event][sa]=qa;});ia.addSubscriptions(ma)}));ia.addSubscriptions(c('NavigationMetrics').addRetroactiveListener(c('NavigationMetrics').Events.NAVIGATION_DONE,function(ja,ka){var la=ka.page,ma=ka.pageType,na=ka.tti,oa=ka.e2e,pa=ka.all_pagelets_displayed;ma=ma||'normal';if(ma!=='normal')return;ia.release();aa({bodyVisible:ha,displayDone:pa,e2e:oa,page:la,pageType:ma,tti:na,isSecondLoad:ea,experimentName:fa,serverRoute:ga})}))}};f.exports=ba}),null);