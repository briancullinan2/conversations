if (self.CavalryLogger) { CavalryLogger.start_js(["2MR+B"]); }

__d("XSavedForLaterNUXSeenController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/saved\/nuxseen\/",{action:{type:"Enum",enumType:1},surface:{type:"Enum",enumType:1},mechanism:{type:"Enum",enumType:1},collection_id:{type:"Int"},object_id:{type:"Int"},interaction_time:{type:"Int"}})}),null);
__d('OnlyMeSharerSaveNux.react',['cx','fbt','AsyncRequest','Banzai','ContextualLayerBlind','CSS','DataStore','DOM','DOMScroll','Keys','Link.react','Parent','React','ShareModeConst','URI','XSavedForLaterNUXSeenController','XUIContextualDialog.react','XUIContextualDialogBody.react','XUIContextualDialogFooter.react','XUIContextualDialogTitle.react','XUIDialogButton.react','guid'],(function a(b,c,d,e,f,g,h,i){var j,k,l=c('React').PropTypes,m=null,n=null,o='OnlyMeSharerSaveNux_instance',p='OnlyMeSharerSaveNux_caretMenuLoaded',q="_5jmm",r="_54ne",s='impression',t='saved_for_later:click',u='only_me_sharer_nux',v='learn_more_link',w='only_me_sharer_nux',x='caret',y='dismiss_button',z='esc_button',aa={paddingTop:0,paddingRight:0,paddingBottom:5,paddingLeft:7};j=babelHelpers.inherits(ba,c('React').Component);k=j&&j.prototype;function ba(){var ca,da;'use strict';for(var ea=arguments.length,fa=Array(ea),ga=0;ga<ea;ga++)fa[ga]=arguments[ga];return da=(ca=k.constructor).call.apply(ca,[this].concat(fa)),this.state={isShown:true},this.$OnlyMeSharerSaveNux2=function(ha){var ia,ja;ia=babelHelpers.inherits(ka,c('ContextualLayerBlind'));ja=ia&&ia.prototype;function ka(la){'use strict';ja.constructor.call(this,la,ha)}return ka},this.$OnlyMeSharerSaveNux3=function(){if(this.props.shareType===c('ShareModeConst').SELF_POST||this.props.shareType==='own'){return i._("Share successful")}else return i._("Message sent");}.bind(this),this.$OnlyMeSharerSaveNux1=function(event){var ha=document.getElementById(this.props.storyContainerId);if(!ha)return;var ia=c('Parent').byClass(ha,q);if(ia&&c('DataStore').get(ia,p)===true)setTimeout(function(){var ja=c('DOM').scry(document,'li.save_caret_menu_item');for(var ka=0;ka<ja.length;ka++){var la=ja[ka],ma=c('Parent').byClass(la,'uiLayer');if(ma&&c('CSS').shown(ma)){c('CSS').addClass(la,r);var na=c('DataStore').get(ia,o);na.$OnlyMeSharerSaveNux4(x);var oa=c('DataStore').get(n,'Popover');oa&&oa.subscribeOnce('hide',function(){c('CSS').removeClass(la,r)});break}}},0);}.bind(this),this.$OnlyMeSharerSaveNux5=function(event){if(event.keyCode===c('Keys').ESC&&this.state.isShown){document.removeEventListener('keyup',this.$OnlyMeSharerSaveNux5);this.$OnlyMeSharerSaveNux4(z)}}.bind(this),this.$OnlyMeSharerSaveNux6=function(){this.$OnlyMeSharerSaveNux4(y)}.bind(this),this.$OnlyMeSharerSaveNux7=function(){c('Banzai').post(t,{og_object_id:this.props.objectId,collection_id:this.props.collectionId,surface:u,mechanism:v,event_id:c('guid')()},{retry:true,delay:0})}.bind(this),this.$OnlyMeSharerSaveNux4=function(ha){this.setState({isShown:false});c('Banzai').post(t,{og_object_id:this.props.objectId,collection_id:this.props.collectionId,surface:u,mechanism:ha,event_id:c('guid')()},{retry:true,delay:0})}.bind(this),this.$OnlyMeSharerSaveNux8=function(ha){if(n!==null&&!ha)n.removeEventListener('click',this.$OnlyMeSharerSaveNux1);if(this.props.wrapper!=null){var ia=c('Parent').byClass(this.props.wrapper,'uiLayer');if(ia)c('CSS').hide(ia);}}.bind(this),da}ba.saveOptionLoaded=function(ca){'use strict';var da=document.getElementById(ca);if(da!=null){var ea=c('Parent').byClass(da,q);if(ea){c('DataStore').set(ea,p,true);var fa=c('DataStore').get(ea,o);if(fa&&fa.state.isShown)fa.$OnlyMeSharerSaveNux1();}}};ba.prototype.componentWillMount=function(){'use strict';m=this.$OnlyMeSharerSaveNux2(babelHelpers['extends']({},aa));n=document.getElementById(this.props.caretId)};ba.prototype.componentDidMount=function(){'use strict';var ca=document.getElementById(this.props.storyContainerId);if(ca){var da=c('Parent').byClass(ca,q);if(da)c('DataStore').set(da,o,this);}n&&n.addEventListener('click',this.$OnlyMeSharerSaveNux1);document.addEventListener('keyup',this.$OnlyMeSharerSaveNux5);setTimeout(function(){c('DOMScroll').ensureVisible(n)},500);var ea=c('XSavedForLaterNUXSeenController').getURIBuilder().setEnum('surface','story').setEnum('mechanism',w).setInt('collection_id',this.props.collectionId).setInt('object_id',this.props.objectId).setEnum('action',s).getURI(),fa=new (c('AsyncRequest'))(ea);fa.send()};ba.prototype.render=function(){'use strict';return c('React').createElement(c('XUIContextualDialog.react'),{shown:this.state.isShown,contextRef:function ca(){return n},position:'below',alignment:'right',behaviors:{grayedOutLayer:m},width:400,offsetX:-3,onToggle:this.$OnlyMeSharerSaveNux8},c('React').createElement(c('XUIContextualDialogTitle.react'),null,this.$OnlyMeSharerSaveNux3()),c('React').createElement(c('XUIContextualDialogBody.react'),null,i._("Want a faster way to save posts privately? Open this dropdown menu and click Save.")),c('React').createElement(c('XUIContextualDialogFooter.react'),null,c('React').createElement(c('Link.react'),{className:"_222f",href:new (c('URI'))('/help/516581611792218'),target:'_blank',onClick:this.$OnlyMeSharerSaveNux7},i._("Learn More")),c('React').createElement(c('XUIDialogButton.react'),{label:i._("Got it"),use:'confirm',action:'cancel',onClick:this.$OnlyMeSharerSaveNux6})))};ba.propTypes={caretId:l.string.isRequired,storyContainerId:l.string.isRequired,wrapper:l.any,collectionId:l.number.isRequired,objectId:l.number,shareType:l.string.isRequired};f.exports=ba}),null);
__d("TimelineInHouseAppCollections",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({FRIENDS_RECENT:1,FRIENDS_ALL:2,FRIENDS_MUTUAL:3,PHOTOS_OF:4,PHOTOS_ALL:5,PHOTOS_ALBUMS:6,LIKES_RECENT:7,INFO_ALL:8,MUSIC_MY_MUSIC:9,MUSIC_FAVS:10,MUSIC_PLAYLISTS:11,BOOKS_READ:14,BOOKS_FAVORITE:15,BOOKS_WANT:16,RECENT_PLACES:17,FITNESS_OVERVIEW:20,PLACES_WANT:27,INFO_CONTACT:29,FITNESS_RUNNING:30,FITNESS_CYCLING:31,FRIENDS_FOLLOWERS:32,FRIENDS_FOLLOWING:33,MUSIC_RADIO:34,INFO_HISTORY:35,RECENT_GAMES:36,PRODUCTS_WANT:37,PHOTOS_ARCHIVE:38,NOTES_MY_NOTES:39,NOTES_DRAFTS:40,NOTES_ABOUT_ME:41,VIDEO_MOVIES_WATCH:46,VIDEO_TV_SHOWS_WATCH:47,MUSIC_SAVED:49,VIDEO_MOVIES_WANT:50,VIDEO_TV_SHOWS_WANT:51,VIDEO_MOVIES_FAVORITE:52,VIDEO_TV_SHOWS_FAVORITE:53,FRIENDS_HIGH_SCHOOL:54,FRIENDS_COLLEGE:55,FRIENDS_WORK:56,FRIENDS_SUGGESTED:57,APPS_LIKE:58,UPCOMING_EVENTS:59,PAST_EVENTS:60,LIKES_PEOPLE:61,LIKES_SPORTS:62,FITNESS_REPORT:65,GROUPS_MEMBER:66,MUSIC_HEAVY_ROTATION:68,PHOTOS_ALBUM:69,LIKES_RESTAURANTS:73,LIKES_CLOTHING:77,INFO_INSIGHTS:78,APPS_USED:79,GAMES_PLAY:80,GAMES_APPS_SAVED:81,VIDEO_MOVIES_SUGGESTIONS:83,VIDEO_TV_SHOWS_SUGGESTIONS:84,BOOKS_SUGGESTIONS:85,SAVED_BOOKS:87,SAVED_MOVIES:88,SAVED_TV_SHOWS:89,SAVED_MUSIC:90,PLACES_SAVED:91,SAVED_LINKS:92,SPORTS_TEAMS:95,LIKES_ALL:96,SAVED_PLACES:97,SAVED_ALL:98,SPORTS_ATHLETES:99,SPORTS_ACTIVITIES:100,SAVED_EVENTS:101,SAVED_ARCHIVED:102,PLACES_RECENT:103,PLACES_VISITED:104,REVIEWS_WRITTEN:105,LIKES_SECTION_MOVIES:106,LIKES_SECTION_TV_SHOWS:107,LIKES_SECTION_BOOKS:108,LIKES_SECTION_MUSIC:109,LIKES_SECTION_SPORTS_TEAMS:110,PLACE_VISITS_BY_PLACE_TAG:111,PLACES_CITIES:112,PLACE_VISITS_BY_CITY:113,TOPIC_VISIT_COUNTS:114,PLACE_VISITS_BY_TOPIC:115,PLACE_VISIT_STORIES:116,PLACES_MAP:117,LIKES_SECTION_APPS_AND_GAMES:118,LIKES_SECTION_SPORTS_ATHLETES:119,PLACES_CITIES_DESKTOP:120,SAVED_VIDEOS:121,SAVED_PAGES:122,FRIENDS_WITH_UPCOMING_BIRTHDAYS:123,FRIENDS_CURRENT_CITY:124,FRIENDS_HOMETOWN:125,AT_WORK_CONTACT:127,PLACE_REVIEWS_WRITTEN:128,MOVIE_REVIEWS_WRITTEN:129,TV_SHOW_REVIEWS_WRITTEN:130,BOOK_REVIEWS_WRITTEN:131,PHOTOS_ALL_EXPANDED:132,VIDEOS_BY_USER:133,VIDEOS_USER_TAGGED:134,FRIENDS_MAP:136,VIDEOS_USER_ALL:137,SAVED_POSTS:138,SAVED_PHOTO_POSTS:139,SAVED_PRODUCTS:140,AT_WORK_HR_INFO:141,FRIENDS_WITH_UNSEEN_POSTS:142,GROUPS_MUTUAL:143,SAVED_PROFILES:144,WORK_FOLLOWERS:149,WORK_FOLLOWING:150,SAVED_MESSAGES:151,SAVED_LISTS:152,SAVED_FUNDRAISERS:153,VIDEO_PLAYLISTS:154,SAVED_JOBS:155,LISTS:156,LIST_CONTENTS:157,SAVED_GROUP_POSTS:158,SAVED_OFFERS:159,ALBUMS_ALL:160,ALBUMS_FEATURED:161,TASKS_CREATED:162,TASKS_ASSIGNED:163,FUN_FACT_ANSWERS:164})}),null);
__d('SavedForLaterChromeExtensionInstallLink',['Event','Banzai','TimelineInHouseAppCollections','tidyEvent','guid'],(function a(b,c,d,e,f,g){var h='chrome_extension_install_link',i='saved_for_later:click',j='https://chrome.google.com/webstore/detail/',k='jmfikkaogpplgnfjmbjdpalkhclendgd';function l(m,n){'use strict';var o=document.createElement('link');o.rel='chrome-webstore-item';o.href=j+k;document.head.appendChild(o);c('tidyEvent')(c('Event').listen(m,'click',function(p){c('Banzai').post(i,{collection_id:c('TimelineInHouseAppCollections').SAVED_ALL,surface:n,mechanism:h,event_id:c('guid')()},{delay:0,retry:true});window.chrome&&window.chrome.webstore&&window.chrome.webstore.install()}))}f.exports=l}),null);
__d('SavedForLaterChromeExtensionToastNux',['DataStore','AsyncRequest','XSavedForLaterNUXSeenController','SavedForLaterChromeExtensionInstallLink','TimelineInHouseAppCollections'],(function a(b,c,d,e,f,g){var h='impression',i='story',j='chrome_extension_toast_nux',k='SavedForLaterChromeExtensionToastNux';function l(m,n){'use strict';c('DataStore').set(m,k,this);this.installInstance=new (c('SavedForLaterChromeExtensionInstallLink'))(n,i)}l.onDisplay=function(m){'use strict';var n=c('DataStore').get(m,k);if(!n)return;new (c('AsyncRequest'))(c('XSavedForLaterNUXSeenController').getURIBuilder().setEnum('action',h).setEnum('surface',i).setEnum('mechanism',j).setInt('collection_id',c('TimelineInHouseAppCollections').SAVED_ALL).getURI()).setMethod('POST').send()};f.exports=l}),null);
__d('SaveCaretMenuItem',['csx','cx','Banzai','CSS','DOM','DOMQuery','EntstreamFeedObject','EntstreamFeedObjectFollowup','Event','MenuItem','SaveState','SaveStateHandler','SavedForLaterChromeExtensionToastNux','ge'],(function a(b,c,d,e,f,g,h,i){var j,k,l='saved_for_later:caret_action',m='imp',n="._22la";j=babelHelpers.inherits(o,c('MenuItem'));k=j&&j.prototype;function o(p){'use strict';k.constructor.call(this,p);this._data=this._updateData();this.getRoot();c('Event').listen(this._anchor,'error',this.handleError.bind(this));c('SaveStateHandler').listen(p.primarysaveid,function(q){this._data=this._updateData();this._doRender(q)}.bind(this))}o.prototype.handleClick=function(){'use strict';var p=k.handleClick.call(this),q=c('EntstreamFeedObject').getRoot(c('ge')(this._data.storydomid));if(this._data.isSaveAction){c('SaveStateHandler').saving(this._data.allsaveids);var r=this._data.savefollowupmarkup;if(this._data.chromeextensionnuxmarkup.hasChildNodes()){r=this._data.chromeextensionnuxmarkup;c('SavedForLaterChromeExtensionToastNux').onDisplay(r)}if(q){var s=c('DOM').scry(q,"._5va1");if(s&&s.length>0){var t=s[0];if(t)q=t;}c('EntstreamFeedObjectFollowup').addFollowup(q,r,["_521o","_4-u3","_3yll"]);var u=c('DOMQuery').scry(q,n);if(u.length>0){var v=new CustomEvent('savedShow');u[0].dispatchEvent(v)}}}else{c('SaveStateHandler').unsaving(this._data.allsaveids);var w=c('EntstreamFeedObjectFollowup').getFollowup(q);w&&c('EntstreamFeedObjectFollowup').removeFollowup(q)}return p};o.prototype.handleError=function(){'use strict';if(this._data.isSaveAction){c('SaveStateHandler').saved(this._data.allsaveids)}else c('SaveStateHandler').unsaved(this._data.allsaveids);};o.prototype._updateData=function(){'use strict';var p=babelHelpers['extends']({},this._data);p.isSaveAction=c('SaveStateHandler').isSaveAction(p.primarysaveid);if(p.isSaveAction){p.markup=p.savemarkup;p.ajaxify=p.saveajaxify;p.title=p.savetitle}else{p.markup=p.unsavemarkup;p.ajaxify=p.unsaveajaxify;p.title=p.unsavetitle}return p};o.prototype._doRender=function(p){'use strict';if(!this._root)return;switch(p){case c('SaveState').SAVING:case c('SaveState').UNSAVING:c('CSS').addClass(this._root,"_5arm");setTimeout(this.disable.bind(this),10);break;case c('SaveState').SAVED:case c('SaveState').UNSAVED:c('CSS').removeClass(this._root,"_5arm");setTimeout(this.enable.bind(this),10);break;}c('DOM').replace(this._anchor,this._renderItemContent());c('Event').listen(this._anchor,'error',this.handleError.bind(this))};o.prototype.onShow=function(){'use strict';var p=this._data.logdata;c('Banzai').post(l,{action:m,surface:p.surface,story_id:p.story_id,is_save:this._data.isSaveAction})};f.exports=o}),null);
__d('FbFeedOptionsExpander',['CSS','DOMQuery','EntstreamHomeFeedObjectOptionsMenuUtils','Event','FeedStoryOptionMenuTypedLogger','FunnelLogger'],(function a(b,c,d,e,f,g){var h={expand:function i(j){var k=j.expander,l=j.menu,m=j.foldedClass,n=j.unfoldedClass,o=j.foldedItemClass,p=j.data;c('Event').listen(k,'click',function(){c('CSS').toggleClass(l.getRoot(),m);c('CSS').toggleClass(l.getRoot(),n);var q=c('DOMQuery').scry(l.getRoot(),'li.'+o);q.forEach(function(r){var s=r.getAttribute('data-feed-option-name');if(s){new (c('FeedStoryOptionMenuTypedLogger'))().setOptionName(s).setOptionPos(c('EntstreamHomeFeedObjectOptionsMenuUtils').findMenuItemPosition(l,r)).setMenuSize(c('EntstreamHomeFeedObjectOptionsMenuUtils').calculateMenuSize(l)).setIsSecondary(1).setEventType('imp').setFeedLocation(p.location).setSessionID(p.session_id).setIsSponsored(p.is_sponsored?1:0).setIsSelfStory(p.is_self_story?1:0).log();var t='loc:'+p.location;c('FunnelLogger').appendActionWithTag('WWW_CHEVRON_FUNNEL','imp:'+s,'loc:'+t)}},this)})}};f.exports=h}),null);