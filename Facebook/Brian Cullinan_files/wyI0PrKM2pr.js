if (self.CavalryLogger) { CavalryLogger.start_js(["1q1lL"]); }

__d("CreditCardTypeEnum",[],(function a(b,c,d,e,f,g){f.exports={DINERSCLUB:64,AMERICANEXPRESS:65,DISCOVER:68,JCB:74,MASTERCARD:77,CUP:80,UNKNOWN:85,VISA:86}}),null);
__d("AYMTTipEventType",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({CREATED:"created",PASSED_VALIDATION:"passed_validation",FAILED_VALIDATION:"failed_validation",PASSED_OPTIONAL_VALIDATION:"passed_optional_validation",FAILED_OPTIONAL_VALIDATION:"failed_optional_validation",PASSED_INVALIDATION:"passed_invalidation",FAILED_INVALIDATION:"failed_invalidation",PASSED_VISIBILITY:"passed_visibility",FAILED_VISIBILITY:"failed_visibility",PASSED_DEDUP:"passed_dedup",FAILED_DEDUP:"failed_dedup",PASSED_FINAL_VALIDATION:"passed_final_validation",FAILED_FINAL_VALIDATION:"failed_final_validation",PASSED_CLIENT_VALIDATION:"passed_client_validation",ERROR:"error",ELIGIBILITY:"eligibility",INVALIDATED:"invalidated",READY_FOR_RENDER:"ready_for_render",IMPRESSION:"impression",CLICK:"click",XOUT:"xout",CONVERSION:"conversion",DELIVERY:"delivery",DELIVERY_ATTEMPTED:"delivery_attempted",DELIVERY_FAILURE:"delivery_failure",DELIVERY_REATTEMPTED:"delivery_reattempted",NOT_DELIVERED:"not_delivered",TOUR_COMPLETE:"tour_complete",CAROUSEL_NAVIGATE:"carousel_navigate",INTERACTION:"interaction"})}),null);
__d("XAYMTMultiTipAsyncClickController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/ads\/growth\/aymt\/multi_async_click\/",{tip_id:{type:"String"},channel_id:{type:"String"},aymt_data:{type:"String"},target:{type:"String",required:true},handled_delete:{type:"Bool",defaultValue:true},extra_data:{type:"String"}})}),null);
__d("XAYMTMultiTipCarouselNavigationLoggerAsyncController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/ads\/growth\/aymt\/log\/carousel_navigation\/",{tip_id:{type:"String"},channel_id:{type:"String"},aymt_data:{type:"String"},message:{type:"String",required:true}})}),null);
__d("XAYMTTipImpressionLoggerAsyncController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/ads\/growth\/aymt\/log\/impression\/",{tip_id:{type:"String"},channel_id:{type:"String"},aymt_data:{type:"String"},reason:{type:"String"},message:{type:"String"}})}),null);
__d("XAYMTTipTourCompleteLoggerAsyncController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/ads\/growth\/aymt\/log\/tour_complete\/",{tip_id:{type:"String"},channel_id:{type:"String"},aymt_data:{type:"String"}})}),null);
__d("XAdsCMTipQEAsyncController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/ads\/manager\/ajax\/check_tip_qe\/",{tip_id:{type:"String",required:true},channel_id:{type:"String",required:true}})}),null);
__d('AYMTClientSideLogging',['AsyncRequest','AYMTTipEventType','AYMTTipSettings','XAdsCMTipQEAsyncController','XAYMTMultiTipAsyncClickController','XAYMTMultiTipCarouselNavigationLoggerAsyncController','XAYMTTipImpressionLoggerAsyncController','XAYMTTipTourCompleteLoggerAsyncController'],(function a(b,c,d,e,f,g){'use strict';var h={logEligibilityAndCheckQE:function i(j,k,l,m){var n=c('XAdsCMTipQEAsyncController').getURIBuilder().setString('tip_id',l.data.tip_id).setString('channel_id',l.data.channel_id).getURI();new (c('AsyncRequest'))().setURI(n).setAllowCrossPageTransition(true).setHandler(m).send()},logImpression:function i(j,k){var l=c('XAYMTTipImpressionLoggerAsyncController').getURIBuilder().setString('tip_id',j).setString('channel_id',k).getURI();new (c('AsyncRequest'))().setURI(l).setAllowCrossPageTransition(true).send()},logXout:function i(j,k){var l=arguments.length<=2||arguments[2]===undefined?true:arguments[2],m=c('XAYMTMultiTipAsyncClickController').getURIBuilder().setString('tip_id',j).setString('channel_id',k).setString('target',c('AYMTTipEventType').XOUT).setBool('handled_delete',l).getURI();new (c('AsyncRequest'))().setURI(m).setAllowCrossPageTransition(true).send()},logClick:function i(j,k){var l=c('XAYMTMultiTipAsyncClickController').getURIBuilder().setString('tip_id',j).setString('channel_id',k).setString('target',c('AYMTTipEventType').CLICK).getURI();new (c('AsyncRequest'))().setURI(l).setAllowCrossPageTransition(true).send()},logTourComplete:function i(j,k){var l=c('XAYMTTipTourCompleteLoggerAsyncController').getURIBuilder().setString('tip_id',j).setString('channel_id',k).getURI();new (c('AsyncRequest'))().setURI(l).setAllowCrossPageTransition(true).send()},logTourStepImpression:function i(j,k,l){var m=c('XAYMTTipImpressionLoggerAsyncController').getURIBuilder().setString('tip_id',j).setString('channel_id',k).setString('reason','tour_step').setString('message',l.toString()).getURI();new (c('AsyncRequest'))().setURI(m).setAllowCrossPageTransition(true).send()},logRenderingTypeImpression:function i(j,k,l){var m=c('XAYMTTipImpressionLoggerAsyncController').getURIBuilder().setString('tip_id',j).setString('channel_id',k).setString('reason','rendering_type').setString('message',l).getURI();new (c('AsyncRequest'))().setURI(m).setAllowCrossPageTransition(true).send()},logCarouselNavigation:function i(j,k,l){var m=c('XAYMTMultiTipCarouselNavigationLoggerAsyncController').getURIBuilder().setString('tip_id',j).setString('channel_id',k).setString('message',l).getURI();new (c('AsyncRequest'))().setURI(m).setAllowCrossPageTransition(true).send()},logClickNew:function i(j){var k=c('XAYMTMultiTipAsyncClickController').getURIBuilder().setString('tip_id',j[c('AYMTTipSettings').TIP_ID]).setString('channel_id',j[c('AYMTTipSettings').CHANNEL_ID]).setString('aymt_data',JSON.stringify(j)).setString('target',c('AYMTTipEventType').CLICK).getURI();new (c('AsyncRequest'))().setURI(k).setAllowCrossPageTransition(true).send()},logImpressionNew:function i(j){var k=c('XAYMTTipImpressionLoggerAsyncController').getURIBuilder().setString('tip_id',j[c('AYMTTipSettings').TIP_ID]).setString('channel_id',j[c('AYMTTipSettings').CHANNEL_ID]).setString('aymt_data',JSON.stringify(j)).getURI();new (c('AsyncRequest'))().setURI(k).setAllowCrossPageTransition(true).send()},logXoutNew:function i(j){var k=arguments.length<=1||arguments[1]===undefined?true:arguments[1],l=c('XAYMTMultiTipAsyncClickController').getURIBuilder().setString('tip_id',j[c('AYMTTipSettings').TIP_ID]).setString('channel_id',j[c('AYMTTipSettings').CHANNEL_ID]).setString('aymt_data',JSON.stringify(j)).setString('target',c('AYMTTipEventType').XOUT).setBool('handled_delete',k).getURI();new (c('AsyncRequest'))().setURI(l).setAllowCrossPageTransition(true).send()},logTourCompleteNew:function i(j){var k=c('XAYMTTipTourCompleteLoggerAsyncController').getURIBuilder().setString('tip_id',j[c('AYMTTipSettings').TIP_ID]).setString('channel_id',j[c('AYMTTipSettings').CHANNEL_ID]).setString('aymt_data',JSON.stringify(j)).getURI();new (c('AsyncRequest'))().setURI(k).setAllowCrossPageTransition(true).send()},logTourStepImpressionNew:function i(j,k){var l=c('XAYMTTipImpressionLoggerAsyncController').getURIBuilder().setString('tip_id',j[c('AYMTTipSettings').TIP_ID]).setString('channel_id',j[c('AYMTTipSettings').CHANNEL_ID]).setString('aymt_data',JSON.stringify(j)).setString('reason','tour_step').setString('message',k.toString()).getURI();new (c('AsyncRequest'))().setURI(l).setAllowCrossPageTransition(true).send()},logRenderingTypeImpressionNew:function i(j,k){var l=c('XAYMTTipImpressionLoggerAsyncController').getURIBuilder().setString('tip_id',j[c('AYMTTipSettings').TIP_ID]).setString('channel_id',j[c('AYMTTipSettings').CHANNEL_ID]).setString('aymt_data',JSON.stringify(j)).setString('reason','rendering_type').setString('message',k).getURI();new (c('AsyncRequest'))().setURI(l).setAllowCrossPageTransition(true).send()},logCarouselNavigationNew:function i(j,k){var l=c('XAYMTMultiTipCarouselNavigationLoggerAsyncController').getURIBuilder().setString('tip_id',j[c('AYMTTipSettings').TIP_ID]).setString('channel_id',j[c('AYMTTipSettings').CHANNEL_ID]).setString('aymt_data',JSON.stringify(j)).setString('message',k).getURI();new (c('AsyncRequest'))().setURI(l).setAllowCrossPageTransition(true).send()}};f.exports=h}),null);
__d("ObjectFlip",[],(function a(b,c,d,e,f,g){var h=function i(j){var k={};for(var l in j)if(Object.prototype.hasOwnProperty.call(j,l))k[j[l]]=l;return k};f.exports=h}),null);
__d('AdsCountries',['AdsCountriesConfig','ObjectFlip'],(function a(b,c,d,e,f,g){'use strict';g.countries=c('AdsCountriesConfig').countries;g.hasCities=function(i){i=i.toUpperCase();return c('AdsCountriesConfig').countriesWithCities.indexOf(i)!=-1};g.hasRegions=function(i){i=i.toUpperCase();return c('AdsCountriesConfig').countriesWithRegions.indexOf(i)!=-1};g.getCurrencyByCountry=function(i){i=i.toUpperCase();return c('AdsCountriesConfig').countriesToCurrencies[i]};var h=c('ObjectFlip')(c('AdsCountriesConfig').countries);g.sortedCountries=Object.keys(h||{}).sort().map(function(i){return {code:h[i],name:i}})}),null);
__d('ICERateTracker',['Map'],(function a(b,c,d,e,f,g){'use strict';var h=5000;function i(j){this.rateIntervalMS=j;this.startIndex=new (c('Map'))();this.trackers=new (c('Map'))()}i.prototype.track=function(j,k){if(!this.trackers.has(j))this.trackers.set(j,[]);var l=this.trackers.get(j);if(l.length>0)k=Math.max(k,l[l.length-1]);l.push(k)};i.prototype.getRate=function(j,k){if(!this.trackers.has(j))return 0;var l=this.trackers.get(j);if(l.length===0)return 0;var m=k-this.rateIntervalMS,n=this.startIndex.get(j)||0;while(n<l.length&&l[n]<m)n++;this.startIndex.set(j,n);var o=l.length-1;while(o>=0&&l[o]>k)o--;var p=Math.max(o-n+1,0);this.$ICERateTracker1(j);return p};i.prototype.$ICERateTracker1=function(j){var k=this.startIndex.get(j)||0;if(k>h){var l=this.trackers.get(j),m=k>=l.length?[]:l.slice(k);this.startIndex.set(j,0);this.trackers.set(j,m)}};f.exports=i}),null);
__d('ICELogger',['BanzaiLogger','ICELoggerKillswitch','ICERateTracker','Set'],(function a(b,c,d,e,f,g){'use strict';var h=new (c('ICERateTracker'))(1000),i=new (c('Set'))(),j=c('ICELoggerKillswitch').blacklisted_events,k=c('ICELoggerKillswitch').blacklisted_keys,l=new (c('Set'))(Object.keys(j)),m=new (c('Set'))(Object.keys(k)),n=c('ICELoggerKillswitch').max_rate,o=!!c('ICELoggerKillswitch').killswitch;function p(r){var event=r.event,s=r.key,t=r.time_ms;if(o||l.has(event)||m.has(s))return;h.track(s,t);if(h.getRate(s,t)>n){if(!i.has(s)){i.add(s);c('BanzaiLogger').log('ICELoggerConfig',{event:'throttled',throttled_event:event,throttled_key:s,time_ms:t})}return}i['delete'](s);c('BanzaiLogger').log('ICELoggerConfig',r)}var q={log:p};f.exports=q}),null);
__d('ICEPerformanceTimer',['AdsPerfTiming','ICELogger','Map'],(function a(b,c,d,e,f,g){'use strict';var h=new (c('Map'))();function i(o){var p=Date.now();c('ICELogger').log({event:'since_page_load',time_ms:p,duration_ms:p-c('AdsPerfTiming').start,key:o})}function j(o){var p=Date.now();h.set(o,p);c('ICELogger').log({event:'start',time_ms:p,key:o})}function k(o){var p=Date.now(),q=null;if(h.has(o)){q=p-h.get(o);h['delete'](o)}c('ICELogger').log({event:'stop',duration_ms:q,time_ms:p,key:o})}function l(o,p){j(o);var q=p();k(o);return q}function m(o,p){return function(){j(o);var q=p.apply(undefined,arguments);k(o);return q}}var n={sincePageLoad:i,start:j,stop:k,time:l,wrap:m};f.exports=n}),null);
__d('AdsInterfacesRouteFluxTypes',[],(function a(b,c,d,e,f,g){'use strict';f.exports={UPDATE_PARAMS:'ADS_INTERFACES_ROUTE-UPDATE_PARAMS',DATA_FETCHED:'ADS_INTERFACES_ROUTE-DATA_FETCHED',DATA_FETCHING_FAILED:'ADS_INTERFACES_ROUTE-DATA_FETCHING_FAILED'}}),null);
__d('AdsLeadGenFormConditionalAnswerSet',[],(function a(b,c,d,e,f,g){'use strict';function h(j,k){this.$AdsLeadGenFormConditionalAnswerSet1=j;this.$AdsLeadGenFormConditionalAnswerSet2=k;this.$AdsLeadGenFormConditionalAnswerSet3=i(this.$AdsLeadGenFormConditionalAnswerSet2)}h.prototype.getID=function(){return this.$AdsLeadGenFormConditionalAnswerSet1};h.prototype.getQuestionCount=function(){return this.$AdsLeadGenFormConditionalAnswerSet3};h.prototype.getNextAnswerValues=function(j){return this.$AdsLeadGenFormConditionalAnswerSet4(j).map(function(k){return k.value})};h.prototype.$AdsLeadGenFormConditionalAnswerSet4=function(j){var k=this.$AdsLeadGenFormConditionalAnswerSet2;j.forEach(function(l){var m=k.findIndex(function(n){return n.value===l});k=m===-1?[]:k[m].next_question_choices||[]});return k||[]};var i=function j(k){var l=k,m=0;while(l!=null&&l.length){m++;l=l[0].next_question_choices}return m};f.exports=h}),null);
__d("ApiCreativeTypes",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({STANDARD:1,INLINE_FAN:2,INLINE_RSVP:3,BASS_PAGE_CONNECTIONS:9,PAGE_POSTS_V2:27,RESEARCH_POLL:28,CONTEXTUAL_APP_AD:32,INSTAGRAM_AD:35,EXOTIC_OR_INVALID:0})}),null);
__d('URIInitDataUtil',['AdsAPIObjectives','ApiCreativeTypes','URI'],(function a(b,c,d,e,f,g){'use strict';function h(fa){return new (c('URI'))(window.location.href).getQueryData()[fa]}function i(){return h('fbid')}function j(){return h('ad_set')}function k(){return h('campaign')}function l(){return h('desturl')}function m(){return h('associated_fbid')}function n(){return h('adgroup_id')}function o(){return h('destination')}function p(){return h('prefilled_adgroup_id')}function q(){var fa=h('objective');if(!fa&&h('storyid'))return c('AdsAPIObjectives').POST_ENGAGEMENT;return fa}function r(){return h('buying_type')}function s(){return h('rf_prediction_id')}function t(){return h('creativetype')}function u(){if(h('storyid'))return {creativeType:c('ApiCreativeTypes').PAGE_POSTS_V2,objectId:i(),storyId:h('storyid'),enabled:true};if(t())return {creativeType:parseInt(h('creativetype'),10),objectId:i(),enabled:true};return}function v(){return h('showlog')}function w(){return h('showqe')}function x(){return h('environment')}function y(){return h('daily_budget')}function z(){return h('saved_audience')}function aa(){var fa=h('targeting_spec');if(fa)return JSON.parse(fa);}function ba(){return h('conversion_pixel_id')}function ca(){return h('act')}function da(){return h('business_id')}function ea(){return !!(u()||t()||i()||q()||aa())}f.exports={getAccountID:ca,getBusinessID:da,getDailyBudget:y,getDefaultAdgroupID:n,getDefaultBuyingType:r,getDefaultCampaignGroupID:k,getDefaultCampaignID:j,getDefaultConversionPixel:ba,getDefaultCreative:u,getDefaultDestination:o,getDefaultDestinationID:i,getDefaultDestinationURL:l,getDefaultAssociatedID:m,getDefaultObjective:q,getDefaultPrefilledAdgroupID:p,getDefaultSavedAudience:z,getDefaultTargeting:aa,getEnvironment:x,getPredictionID:s,getShowLog:v,getShowQE:w,isPrefilledFromURI:ea}}),null);
__d('HelpLink.react',['fbt','React','joinClasses','TooltipLink.react'],(function a(b,c,d,e,f,g,h){var i,j;i=babelHelpers.inherits(k,c('React').Component);j=i&&i.prototype;k.prototype.render=function(){'use strict';return c('React').createElement(c('TooltipLink.react'),babelHelpers['extends']({'aria-label':this.props.label},this.props,{className:c('joinClasses')(this.props.className,'uiHelpLink mls')}),undefined)};function k(){'use strict';i.apply(this,arguments)}k.defaultProps={href:'#',label:h._("Help")};f.exports=k}),null);
__d('PagesCalloutStore',['FluxReduceStore','PagesCalloutActions','PagesCalloutDispatcher'],(function a(b,c,d,e,f,g){'use strict';var h,i;h=babelHelpers.inherits(j,c('FluxReduceStore'));i=h&&h.prototype;j.prototype.getInitialState=function(){return {channelID:null,eligible:{},pageID:null,showing:[],surface:'unknown'}};j.prototype.reduce=function(k,l){var m=babelHelpers['extends']({},k);switch(l.type){case c('PagesCalloutActions').INIT_SURFACE:return {channelID:l.data.channelID,eligible:{},pageID:l.data.pageID,showing:[],surface:l.data.surface};case c('PagesCalloutActions').REGISTER_CALLOUT:if(!l.data.tip_id||l.data.tip_id==='')break;m.eligible=babelHelpers['extends']({},k.eligible);m.eligible[l.data.tip_id]=babelHelpers['extends']({},l.data);break;case c('PagesCalloutActions').SHOW_CALLOUT:m.showing.push(l.data.tip_id);break;case c('PagesCalloutActions').DISMISS_CALLOUT:var n=m.showing.indexOf(l.data.tip_id);if(n!=null)m.showing.splice(n,1);break;}return m};function j(){h.apply(this,arguments)}f.exports=new j(c('PagesCalloutDispatcher'))}),null);
__d("XPageCalloutAsyncController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/pages\/callout\/",{pageid:{type:"Int",required:true},tip_ids:{type:"IntVector"}})}),null);
__d('PagesCalloutHelper',['AsyncRequest','AYMTClientSideLogging','BasicFBNux','PagesCalloutActions','PagesCalloutDispatcher','PagesCalloutStore','Run','XPageCalloutAsyncController'],(function a(b,c,d,e,f,g){'use strict';var h={_initSurface:function i(j,k,l){c('PagesCalloutDispatcher').dispatch({data:{surface:l,pageID:j,channelID:k},type:c('PagesCalloutActions').INIT_SURFACE})},registerNux:function i(j,k,l){if(j.length===0)return;var m=function(){return this._showCalloutAndListenToClose(j,k,true)}.bind(this),n=l?{tip_id:j,showCallback:m,nux_id:l}:{tip_id:j,showCallback:m};c('PagesCalloutDispatcher').dispatch({type:c('PagesCalloutActions').REGISTER_CALLOUT,data:n})},registerCallout:function i(j,k,l){if(j.length===0)return;var m=function(){return this._showCalloutAndListenToClose(j,k,false)}.bind(this),n=l?{tip_id:j,showCallback:m,nux_id:l}:{tip_id:j,showCallback:m};c('PagesCalloutDispatcher').dispatch({type:c('PagesCalloutActions').REGISTER_CALLOUT,data:n})},showCalloutAfterLoading:function i(j,k,l){c('PagesCalloutDispatcher').explicitlyRegisterStore(c('PagesCalloutStore'));this._initSurface(j,k,l);c('Run').onAfterLoad(function(){return this._pickAndShowCallout()}.bind(this))},logClick:function i(j){c('AYMTClientSideLogging').logClick(j,c('PagesCalloutStore').getState().channelID)},logXout:function i(j){c('AYMTClientSideLogging').logXout(j,c('PagesCalloutStore').getState().channelID);var k=c('PagesCalloutStore').getState().eligible[j];if(k&&k.nux_id)c('BasicFBNux').onDismiss(k.nux_id);},_pickAndShowCallout:function i(){var j=c('PagesCalloutStore').getState();if(j.showing.length>0)return;var k=c('XPageCalloutAsyncController').getURIBuilder().setInt('pageid',j.pageID).setIntVector('tip_ids',Object.keys(j.eligible)).getURI();new (c('AsyncRequest'))().setHandler(function(l){this._showCalloutAndLog(l.payload)}.bind(this)).setURI(k).send()},_showCalloutAndLog:function i(j){if(!j)return;var k=c('PagesCalloutStore').getState().eligible[j];if(!k)return;var l=k.showCallback;if(!l)return;var m=c('PagesCalloutStore').getState();if(m.showing.length>0)return;l.apply();c('AYMTClientSideLogging').logImpression(j,m.channelID);if(k.nux_id)c('BasicFBNux').onView(k.nux_id);},_showCalloutAndListenToClose:function i(j,k,l){if(!k.isShown()){k.show();c('PagesCalloutDispatcher').dispatch({type:c('PagesCalloutActions').SHOW_CALLOUT,data:{tip_id:j}});k.subscribe('hide',function(){c('PagesCalloutDispatcher').dispatch({type:c('PagesCalloutActions').DISMISS_CALLOUT,data:{tip_id:j}});this.logXout(j)}.bind(this))}}};f.exports=h}),null);
__d('ShareDialogAudienceTypes',['getObjectValues','ShareModeConst'],(function a(b,c,d,e,f,g){var h={OWN:c('ShareModeConst').SELF_POST,PERSON:c('ShareModeConst').FRIEND,GROUP:c('ShareModeConst').GROUP,EVENT:c('ShareModeConst').EVENT,PAGE:c('ShareModeConst').PAGE,FUNDRAISER:c('ShareModeConst').FUNDRAISER,MESSAGE:c('ShareModeConst').MESSAGE},i=c('getObjectValues')(h);function j(k){return i.some(function(l){return l===k})}f.exports=h;f.exports.ALL=i;f.exports.isValid=j;f.exports.propType=function(k,l){if(!j(k[l]))throw new Error('Invalid audience '+k[l]);}}),null);
__d("promiseAllByKey",["Promise"],(function a(b,c,d,e,f,g){f.exports=function h(i){var j=Object.keys(i);return c("Promise").all(j.map(function(k){return i[k]})).then(function(k){var l={};k.forEach(function(m,n){l[j[n]]=m});return l})}}),null);
__d("AdsLeadGenWebdriverIDs",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({ADS_LEADGEN_CREATE_NEW_FORM_BUTTON:"ADS_LEADGEN_CREATE_NEW_FORM_BUTTON",ADS_LEADGEN_FORM_EDITOR:"ADS_LEADGEN_FORM_EDITOR",ADS_LEADGEN_INLINE_CRM_ON_PAGE_TYPEAHEAD:"ADS_LEADGEN_INLINE_CRM_ON_PAGE_TYPEAHEAD",ADS_LEADGEN_LEAD_DOWNLOAD_DIALOG_SELECTOR:"ADS_LEADGEN_LEAD_DOWNLOAD_DIALOG_SELECTOR",ADS_LEADGEN_PAGE_PUBLISHING_TOOLS_DOWNLOAD_BUTTON:"ADS_LEADGEN_PAGE_PUBLISHING_TOOLS_DOWNLOAD_BUTTON",ADS_LEADGEN_DESKTOP_CONTEXT_CARD_CTA:"ADS_LEADGEN_DESKTOP_CONTEXT_CARD_CTA",ADS_LEADGEN_DESKTOP_FORM_SUBMISSION_BUTTON:"ADS_LEADGEN_DESKTOP_FORM_SUBMISSION_BUTTON",ADS_LEADGEN_DESKTOP_DISCLAIMER_CTA:"ADS_LEADGEN_DESKTOP_DISCLAIMER_CTA",ADS_LEADGEN_DESKTOP_OFFSITE_CLICK:"ADS_LEADGEN_DESKTOP_OFFSITE_CLICK"})}),null);
__d("CreditCardFormParam",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({ACCOUNT_ID:"account_id",ACCOUNT_COUNTRY_CODE:"account_country_code",APP_ID:"app_id",CARD_EXPIRATION:"exp",CARD_FBID:"cc_fbid",CARD_ID:"cc_id",CARD_TYPE:"cardType",CITY:"city",CONTEXT_ID:"context_id",COUNTRY:"country",CSC_LENGTH:"csc_length",EMAIL:"email",FIRST_NAME:"firstName",TRACKING_ID:"tracking_id",JSFAIL_SOURCE:"jsfail_source",KEYPRESS_TIMES:"kpts",LAST_NAME:"lastName",MONTH:"month",STATE:"state",STREET:"street",STREET_2:"street2",VALIDATE_ADDRESS:"validate_address",VALIDATE_NAME:"validate_name",VALIDATE_ZIP:"validate_zip",YEAR:"year",ZIP:"zip",VALIDATOR_CHECKS:"checks",CARD_NUMBER:"creditCardNumber",CSC:"csc",CARD_NUMBER_FIRST_6:"creditCardNumber_first6",CARD_NUMBER_LAST_4:"creditCardNumber_last4",CARD_NUMBER_TOKEN:"creditCardNumber_token",CSC_TOKEN:"csc_token",AUTH_LEVEL_FLAG:"auth_level",AUTH_AMOUNT:"auth_amount",AUTH_CURRENCY:"auth_currency",AUTO_EXPAND_AUTH_LEVEL_FLAG:"auto_expand_auth_level",PAYMENT_ITEM_TYPE:"payment_item_type",COMBINED_PAYMENT_TYPE:"combined_payment_type",RECEIVER_ID:"receiver_id",CREDENTIAL_ID:"credential_id",IS_STORED_BALANCE:"is_stored_balance",IS_CHECKOUT_ELIGIBLE:"is_checkout_eligible",CHECKOUT_SAVE_CC_WITH_AUTH:"checkout_save_cc_with_auth",CHECKOUT_FUND_AMOUNT:"checkout_fund_amount",FLOW_PLACEMENT:"flow_placement",FLOW_TYPE:"flow_type",STORED_BALANCE_STATUS:"stored_balance_status",SESSION_ID:"session_id"})}),null);
__d("CreditCardTypeField",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({UNKNOWN:"unknown",VISA:"visa",MASTERCARD:"mastercard",DISCOVER:"discover",AMERICAN_EXPRESS:"american_express",JCB:"jcb",DINERS_CLUB:"diners_club"})}),null);
__d("XPaymentsCreditCardMutationType",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({CREATE:"create",UPDATE:"update",CACHE_CVV:"cache_cvv"})}),null);
__d("XPaymentsCreditCardMutatorParam",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({AUTH_LOG_ID:"auth_log_id",MUTATION_TYPE:"mutation_type",CARD_FBID:"cc_fbid",CACHE_TOKEN:"cache_token",ERRORS:"errors",GENERAL_ERROR:"general",FIELD_ERRORS:"fields",ERROR_CODE:"code",ERROR_MSG:"message",ERROR_TITLE:"title"})}),null);
__d("create-react-class",["React","create-react-class/factory"],(function a(b,c,d,e,f,g){'use strict';var h=new (c("React").Component)().updater;f.exports=c("create-react-class/factory")(c("React").Component,c("React").isValidElement,h)}),null);
__d('PaymentMethodUtils',['fbt','ix','CreditCardTypeEnum','CreditCardTypeField'],(function a(b,c,d,e,f,g,h,i){var j=16,k=4,l=[{pattern:/^5[1-5]|^2(2(2[1-9]|[3-9])|[3-6]|7([01]|20))/,name:'mc',cscDigits:3,digits:16,supported:true,code:77,type:c('CreditCardTypeField').MASTERCARD},{pattern:/^4/,name:'visa',cscDigits:3,digits:16,supported:true,code:86,type:c('CreditCardTypeField').VISA},{pattern:/^3[47]/,name:'amex',cscDigits:4,digits:15,supported:true,code:65,type:c('CreditCardTypeField').AMERICAN_EXPRESS},{pattern:/^35(2[8-9]|[3-8])/,name:'jcb',cscDigits:3,digits:16,supported:true,code:74,type:c('CreditCardTypeField').JCB},{pattern:/^62/,name:'cup',cscDigits:3,digits:16,supported:true,code:80,type:'china_union_pay'},{pattern:/^(6011|65|64[4-9])/,name:'disc',cscDigits:3,digits:16,supported:true,code:68,type:c('CreditCardTypeField').DISCOVER},{pattern:/^30[0-5]/,name:'diners',digits:14,cscDigits:3,supported:false,code:64,type:c('CreditCardTypeField').DINERS_CLUB},{name:'unknown',pattern:null,digits:16,cscDigits:3,supported:false,code:85,type:c('CreditCardTypeField').UNKNOWN}],m=function o(p){return p.replace(/[iIl]/g,'1').replace(/[Oo]/g,'0').replace(/[^\d]/gi,'')},n={getCardType:function o(p){p=m(p);p=p.substr(0,6);for(var q=0;q<l.length;q++)if(l[q].pattern&&p.match(l[q].pattern))return l[q];return l[l.length-1]},getCardTypeFromFieldType:function o(p){var q=l.find(function(r){return p===r.type})||l[l.length-1];return q},getCardTypeFromCode:function o(p){for(var q=0;q<l.length;q++)if(p==l[q].code)return l[q];return null},isValidCCNumber:function o(p){p=m(p);var q=n.getCardType(p);if(q.digits!==p.length)return false;if(!q.supported)return false;return n.isValidLuhn(p)},isValidLuhn:function o(p){p=m(p);var q=p.split('').reverse(),r='';for(var s=0;s<q.length;s++){var t=parseInt(q[s],10);if(s%2!==0)t=t*2;r=r+t}var u=0;for(s=0;s<r.length;s++)u=u+parseInt(r.charAt(s),10);return !!(u!==0&&u%10===0)},getMaxCardLength:function o(p){return j},getMaxCSCLength:function o(){return k},getImageForCard:function o(p){return this.getImageForCardType(p.name)},getImageForCardType:function o(p){switch(p){case 'visa':return i("95533");case 'mc':return i("95531");case 'amex':return i("95528");case 'disc':return i("95529");case 'jcb':return i("95530");default:return i("95526");}},getImageForPayPal:function o(){return i("95532")},getCreditCardString:function o(p){switch(p){case c('CreditCardTypeEnum').VISA:return h._("Visa");case c('CreditCardTypeEnum').MASTERCARD:return h._("Mastercard");case c('CreditCardTypeEnum').DISCOVER:return h._("Discover");case c('CreditCardTypeEnum').AMERICANEXPRESS:return h._("Amex");case c('CreditCardTypeEnum').JCB:return h._("JCB");case c('CreditCardTypeEnum').DINERSCLUB:return h._("Diners");default:return h._("Credit Card");}}};f.exports=n}),null);
__d('PaymentTokenProxyUtils',['CurrentEnvironment','URI'],(function a(b,c,d,e,f,g){var h={getURI:function i(j){var k=arguments.length<=1||arguments[1]===undefined?null:arguments[1],l=new (c('URI'))('/ajax/payment/token_proxy.php').setDomain(window.location.hostname).setProtocol('https').addQueryData(j),m=l.getDomain().split('.');if(m.indexOf('secure')<0){m.splice(1,0,'secure');if(k==='www'||k==='secure'){if(m[0]!=='secure')m.shift();}else if(k!==null){if(m[0]==='secure'){m.splice(0,0,k)}else m[0]=k;}else if(m[0]=='www')m.shift();l.setDomain(m.join('.'))}if(c('CurrentEnvironment').messengerdotcom){var n=l.getDomain();n=n.replace('messenger.com','facebook.com');l.setDomain(n)}return l}};f.exports=h}),null);
__d('createReactClass_DEPRECATED',['create-react-class'],(function a(b,c,d,e,f,g){'use strict';f.exports=c('create-react-class')}),null);
__d("XP2PAddressCreateController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/p2p\/address\/_create\/",{})}),null);
__d("XPaymentsCreditCardMutatorController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/payments\/credit_card\/mutator\/{mutation_type}\/",{mutation_type:{type:"Enum",enumType:1}})}),null);
__d("XShareDialogSubmitController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/share\/dialog\/submit\/",{post_id:{type:"Int"},share_type:{type:"Int"},url:{type:"String"},audience_type:{type:"String"},owner_id:{type:"Int"},app_id:{type:"Int"},message:{type:"String"},shared_ad_id:{type:"Int"},sharer_id:{type:"Int"},source:{type:"String"},composer_session_id:{type:"String"},audience_targets:{type:"IntVector"},album_id:{type:"Int"},ephemeral_ttl_mode:{type:"Int"},tagged_people:{type:"IntVector"},tagged_place:{type:"Int"},tagged_action:{type:"Int"},tagged_object:{type:"Int"},tagged_object_str:{type:"String"},tagged_action_icon:{type:"Int"},tagged_feed_topics:{type:"StringVector"},attribution:{type:"Int"},privacy:{type:"String"},messaging_tags:{type:"StringVector"},ft:{type:"StringToStringMap"},internalextra:{type:"StringToStringMap"},internal_preview_image_id:{type:"Int"},share_now:{type:"Bool",defaultValue:false},is_forced_reshare_of_post:{type:"Bool",defaultValue:false},is_throwback_post:{type:"Bool",defaultValue:false},targeted_privacy_data:{type:"HackType"},unpublished_content_type:{type:"Enum",enumType:0},branded_content_repost_root:{type:"Int"},share_to_group_as_page:{type:"Bool",defaultValue:false},shared_to_group_id:{type:"Int"}})}),null);