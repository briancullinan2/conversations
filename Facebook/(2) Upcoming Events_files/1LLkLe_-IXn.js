if (self.CavalryLogger) { CavalryLogger.start_js(["CmTk4"]); }

__d('EntityInteractionLogger',['BanzaiLogger','Event','ScriptPath','collectDataAttributes','pageID'],(function a(b,c,d,e,f,g){'use strict';var h='EntityInteractionLoggerConfig';function i(event){var l=event.target||event.srcElement,m=j(l);if(m!==false){var n={client_time:Date.now(),event:'generic',session_id:c('pageID'),surface_tag:c('ScriptPath').getScriptPath()};Object.assign(n,m);c('BanzaiLogger').log(h,n)}}function j(l){var m=c('collectDataAttributes')(l,['et'],['href']),n=m.normal.href;if((!n||n==='#')&&(!m.et||!m.et.click_point))return false;return m.et}var k={setup:function l(m){c('Event').listen(m,{click:i})},handleEvent:i};f.exports=k}),null);
__d('tickerPhoteSnowLiftOpenStatus',['ArbiterMixin'],(function a(b,c,d,e,f,g){var h='CheckIsOpen',i={registerOpenChecker:function j(k){return i.subscribe(h,function(l,m){if(k())m.is_Open=true;})},checkIsOpen:function j(){var k={is_Open:false};i.inform(h,k);return k.is_Open}};Object.assign(i,c('ArbiterMixin'));f.exports=i}),null);
__d('StaticMapCallout',['csx','CSS','DOM','Parent','Style','Vector','clamp'],(function a(b,c,d,e,f,g,h){var i=3,j=13,k=10,l=j/2;function m(n,o,p,q,r,s){this._root=n;this._arrows=c('DOM').find(n,'.fbMapCalloutArrowWrap');this._topArrow=c('DOM').find(n,'.fbMapCalloutArrowTop');this._bottomArrow=c('DOM').find(n,'.fbMapCalloutArrowBottom');this._leftArrow=c('DOM').find(n,'.fbMapCalloutArrowLeft');this._rightArrow=c('DOM').find(n,'.fbMapCalloutArrowRight');this._main=c('DOM').find(n,'.fbMapCalloutMain');this._content=c('DOM').find(n,'.fbMapCalloutContent');this._mapWidth=p;this._mapHeight=q;var t=this._orientation=o;c('CSS').hide(this._root);c('Style').set(this._root,'position','absolute');this._left=r.left;this._top=r.top;this._right=r.right;this._bottom=r.bottom;Object.assign(this,r);if(t==='left'){c('CSS').setClass(this._arrows,'fbMapCalloutUseArrowLeft');var u=this._right+i;c('Style').set(this._root,'right',u+'px')}else if(t==='right'){c('CSS').setClass(this._arrows,'fbMapCalloutUseArrowRight');var v=this._left+i;c('Style').set(this._root,'left',v+'px')}else if(t==='top'){c('CSS').setClass(this._arrows,'fbMapCalloutUseArrowTop');var w=this._bottom+i;c('Style').set(this._root,'bottom',w+'px')}else if(t==='bottom'){c('CSS').setClass(this._arrows,'fbMapCalloutUseArrowBottom');var x=this._top+i;c('Style').set(this._root,'top',x+'px')}if(s){var y=c('Parent').bySelector(this._root,"._5cw9");y.appendChild(this._root)}}Object.assign(m.prototype,{setContent:function n(o){c('DOM').setContent(this._content,o);this.calloutDimensionsChanged()},calloutDimensionsChanged:function n(){if(this._orientation==='left'||this._orientation==='right'){var o=c('Vector').getElementDimensions(this._main),p=o.y/2;if(this._top+o.y/2>this._mapHeight-k)p=o.y-(this._mapHeight-this._top-k);if(p>this._top-k)p=this._top-k;p=c('clamp')(p,l,o.y-l);this._setArrowYOffset(p);c('Style').set(this._root,'top',this._top-p+'px')}else{var q=c('Vector').getElementDimensions(this._main).x;q+=1;var r=q/2;if(this._left+q/2>this._mapWidth-k)r=q-(this._mapWidth-this._left-k);if(r>this._left-k)r=this._left-k;r=c('clamp')(r,l,q-l);this._setArrowXOffset(r);c('Style').set(this._root,'left',this._left-r+'px')}},show:function n(){c('CSS').show(this._root)},hide:function n(){c('CSS').hide(this._root)},setZIndex:function n(o){c('Style').set(this._root,'z-index',o)},_setArrowYOffset:function n(o){o-=l;c('Style').set(this._leftArrow,'top',o+'px');c('Style').set(this._rightArrow,'top',o+'px')},_setArrowXOffset:function n(o){o-=l;c('Style').set(this._topArrow,'left',o+'px');c('Style').set(this._bottomArrow,'left',o+'px')}});f.exports=m}),null);
__d('StaticMapPin',['Event'],(function a(b,c,d,e,f,g){var h=0,i=1,j=2,k=10,l=20;function m(n,o,p,q,r){this._pin=n;this._tooltip=o;this._callout=p;this._calloutContainer=q;this._mapID=r;this._state=h;m.instancesByMapID[r]=m.instancesByMapID[r]||[];m.instancesByMapID[r].push(this);c('Event').listen(this._pin,'mouseover',this._onMouseIn.bind(this));c('Event').listen(this._pin,'mouseout',this._onMouseOut.bind(this));c('Event').listen(this._pin,'click',this._onClick.bind(this))}Object.assign(m.prototype,{_onMouseIn:function n(){if(this._state!==h||!this._tooltip)return;this._calloutContainer.show();this._calloutContainer.setContent(this._tooltip);this._calloutContainer.setZIndex(k);this._state=i},_onMouseOut:function n(){if(this._state!==i)return;this._calloutContainer.hide();this._state=h},_onClick:function n(){if(!this._callout)return;if(this._state===j){this._calloutContainer.setContent(this._tooltip);this._calloutContainer.setZIndex(k);this._state=i;return}m.hideAll(this._mapID);this._calloutContainer.show();this._calloutContainer.setContent(this._callout);this._calloutContainer.setZIndex(l);this._state=j}});Object.assign(m,{instancesByMapID:[],hideAll:function n(o){var p=m.instancesByMapID[o];for(var q=0;q<p.length;q++){p[q]._calloutContainer.hide();p[q]._state=h}},construct:function n(o,p,q,r,s){return new m(o,p,q,r,s)}});f.exports=m}),null);
__d('ImageUtils',['UserAgent_DEPRECATED'],(function a(b,c,d,e,f,g){var h={hasLoaded:function i(j){if(j.naturalWidth!==undefined){return j.complete&&j.width!==0}else if(j.height==20&&j.width==20&&j.complete){return false}else if(j.complete===undefined&&c('UserAgent_DEPRECATED').webkit()<500){var k=new Image();k.src=j.src;return k.complete}return j.complete}};f.exports=h}),null);
__d("SpotlightViewerLoggingEvents",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({LOADED:"loaded",LOADING:"loading",ERROR:"error",ABORT:"abort",OPEN_BEGIN:"open_begin",OPEN_COMPLETE:"open_complete",CLOSE_BEGIN:"close_begin",CLOSE_COMPLETE:"close_complete",PAGE_BEGIN:"page_begin",PAGE_COMPLETE:"page_complete",PHOTO_CHANGE_BEGIN:"photo_change_begin",PHOTO_CHANGE_COMPLETE:"photo_change_complete",DATA_FETCH_BEGIN:"data_fetch_begin",DATA_FETCH_COMPLETE:"data_fetch_complete",PHOTO_FETCH:"photo_fetch"})}),null);
__d('PhotoLogger',['Event','Banzai','BanzaiScuba','SpotlightViewerLoggingEvents','SubscriptionsHandler'],(function a(b,c,d,e,f,g){function h(i){'use strict';this.$PhotoLogger1=i;this.$PhotoLogger2={}}h.prototype.log=function(i,j,k,l){'use strict';c('Banzai').post('profile_photos_view',{photo_fbid:j,source:k,profile_id:l});if(!this.$PhotoLogger2[i]){this.$PhotoLogger3(i);this.$PhotoLogger2[i]=true}};h.prototype.$PhotoLogger3=function(i){'use strict';this.$PhotoLogger4(c('SpotlightViewerLoggingEvents').LOADING,{uri:i});var j=new (c('SubscriptionsHandler'))(),k=new Image();j.addSubscriptions(c('Event').listen(k,'load',function(){this.$PhotoLogger4(c('SpotlightViewerLoggingEvents').LOADED,{uri:i});j.release()}.bind(this)),c('Event').listen(k,'error',function(){this.$PhotoLogger4(c('SpotlightViewerLoggingEvents').ERROR,{uri:i});j.release()}.bind(this)),c('Event').listen(k,'abort',function(){this.$PhotoLogger4(c('SpotlightViewerLoggingEvents').ABORT,{uri:i});j.release()}.bind(this)));k.src=i};h.prototype.logEvent=function(i){'use strict';this.$PhotoLogger4(i)};h.prototype.$PhotoLogger4=function(i,j){'use strict';var k=new (c('BanzaiScuba'))('photos_client_loading',null,{addBrowserFields:true});k.addNormal('event',i);k.addNormal('viewer',this.$PhotoLogger1);for(var l in j)k.addNormal(l,j[l]);k.post()};f.exports=h}),null);
__d('PlaceActionLink',['AsyncRequest','Dialog'],(function a(b,c,d,e,f,g){var h={start_claim_link:function i(j){var k=new (c('AsyncRequest'))().setMethod('POST').setURI('/ajax/places/claim/start_claim.php').setData({id:j});new (c('Dialog'))().setAsync(k).show();return false},refer_claim_link:function i(j){var k=new (c('AsyncRequest'))().setMethod('POST').setURI('/ajax/places/claim/refer_claim.php').setData({id:j});new (c('Dialog'))().setAsync(k).show();return false}};f.exports=h}),null);
__d('legacy:place-action-link',['PlaceActionLink'],(function a(b,c,d,e,f,g){b.PlaceActionLink=c('PlaceActionLink')}),3);
__d('SavedForLaterNUX',['csx','DOM','Event','Tooltip'],(function a(b,c,d,e,f,g,h){var i="._t6k",j={init:function k(l,m){var n=c('DOM').scry(m,i);this.suppress(n,true);c('Event').listen(l,'click',function(){this.suppress(n,false)}.bind(this))},suppress:function k(l,m){for(var n=0;n<l.length;n++){var o=l[n];c('Tooltip').suppress(o,m)}}};f.exports=j}),null);
__d('SphericalMediaActionNamespaces',[],(function a(b,c,d,e,f,g){'use strict';f.exports={BASE:'BASE',CORE:'CORE',PHOTO:'PHOTO',PHOTO_EDIT:'PHOTO_EDIT',VIEW:'VIEW'}}),null);
__d('SphericalMediaActions',[],(function a(b,c,d,e,f,g){'use strict';f.exports={TURN_ON:'TURN_ON',TURN_OFF:'TURN_OFF',ENABLE_SPHERICAL:'ENABLE_SPHERICAL',DISABLE_SPHERICAL:'DISABLE_SPHERICAL',REQUEST_PHOTO_FAILED:'REQUEST_PHOTO_FAILED',REQUEST_PHOTO:'REQUEST_PHOTO',RECEIVE_PHOTO:'RECEIVE_PHOTO',UPDATE_BASE:'UPDATE_BASE',DRAG_START:'DRAG_START',GYRO_START:'GYRO_START',ZOOM_START:'ZOOM_START',SIGNIFICANT_MOVE:'SIGNIFICANT_MOVE',MOUSE_ANIMATION_START:'MOUSE_ANIMATION_START',MOUSE_ENTER:'MOUSE_ENTER',TAP_HEADING_INDICATOR:'TAP_HEADING_INDICATOR',VIEWPORT_CLICKED:'VIEWPORT_CLICKED',VISIBILITY_CHANGED:'VISIBILITY_CHANGED',UPDATE_DIMENSION:'UPDATE_DIMENSION',UPDATE_INITIAL_FOV:'UPDATE_INITIAL_FOV',UPDATE_INITIAL_VIEWPORT:'UPDATE_INITIAL_VIEWPORT',SETUP_RENDERER:'SETUP_RENDERER',WEBGL_CONTEXT_LOST:'WEBGL_CONTEXT_LOST',WEBGL_INIT_FAILED:'WEBGL_INIT_FAILED',WEBGL_RENDER_FAILED:'WEBGL_RENDER_FAILED',SOURCE_ONLOAD:'SOURCE_ONLOAD',REPLACE_BASE_STATE:'REPLACE_BASE_STATE',UPDATE_CTR_ELEM:'UPDATE_CTR_ELEM',SHOW_FALLBACK:'SHOW_FALLBACK',UPDATE_VIEW:'UPDATE_VIEW',UPDATE_VIEWPORT:'UPDATE_VIEWPORT',UPDATE_FOV:'UPDATE_FOV',UPDATE_VIEWPORT_AND_FOV:'UPDATE_VIEWPORT_AND_FOV',START_ANIMATING:'START_ANIMATING',STOP_ANIMATING:'STOP_ANIMATING',UPDATE_PHOTO_EDIT:'UPDATE_PHOTO_EDIT',CANCEL_EDITING:'CANCEL_EDITING',START_EDITING:'START_EDITING',STOP_EDITING:'STOP_EDITING',UPDATE_PHOTO:'UPDATE_PHOTO',UPDATE_PHOTO_FAILED:'UPDATE_PHOTO_FAILED',UPDATE_PHOTO_DONE:'UPDATE_PHOTO_DONE',UPDATE_RENDERER_PROJECTION_TYPE:108,UPDATE_RENDERER_PROJECTION_TYPE_FAILED:109,UPDATE_RENDERER_PROJECTION_TYPE_DONE:110,RESET_MOUSE_ANIMATION:'RESET_MOUSE_ANIMATION',START_MOUSE_ANIMATION:'START_MOUSE_ANIMATION',STOP_MOUSE_ANIMATION:'STOP_MOUSE_ANIMATION',DISABLE_SPHERICAL_ON_SAVE:'DISABLE_SPHERICAL_ON_SAVE',ENABLE_SPHERICAL_ON_SAVE:'ENABLE_SPHERICAL_ON_SAVE',ENABLE_EDITING:'ENABLE_EDITING',DISABLE_EDITING:'DISABLE_EDITING',TAKE_STATE_SNAPSHOT:'TAKE_STATE_SNAPSHOT',RESTORE_EDIT_STATE_FROM_SNAPSHOT:'RESTORE_EDIT_STATE_FROM_SNAPSHOT',RESTORE_TAGS_STATE_FROM_SNAPSHOT:'RESTORE_TAGS_STATE_FROM_SNAPSHOT',REMOVE_STATE_SNAPSHOT:'REMOVE_STATE_SNAPSHOT',PHOTO_REMOVED:'PHOTO_REMOVED',UPDATE_FILE_URL:'UPDATE_FILE_URL',CANVAS_RESIZE_START:'CANVAS_RESIZE_START',CANVAS_RESIZE_IMG_LOADED:'CANVAS_RESIZE_IMG_LOADED',CANVAS_RESIZE_SUCCESS:'CANVAS_RESIZE_SUCCESS',CANVAS_RESIZE_FAILED:'CANVAS_RESIZE_FAILED',OPEN_TAG_DIALOG:'OPEN_TAG_DIALOG',CLOSE_TAG_DIALOG:'CLOSE_TAG_DIALOG',SAVE_DIALOG_TAGS:'SAVE_DIALOG_TAGS',CANCEL_DIALOG_TAG_CHANGES:'CANCEL_DIALOG_TAG_CHANGES',PHOTO_RENDERER_STATS:'PHOTO_RENDERER_STATS',ENABLE_TAGGING:'ENABLE_TAGGING',DISABLE_TAGGING:'DISABLE_TAGGING',UPDATE_SPATIAL_TAGS:'UPDATE_SPATIAL_TAGS',UPDATE_SPATIAL_TAGS_FROM_COMPOSER:'UPDATE_SPATIAL_TAGS_FROM_COMPOSER',UPDATE_TAG_UNDER_MOUSE:'UPDATE_TAG_UNDER_MOUSE',TAGGING_START:'TAGGING_START',TAGGING_STOP:'TAGGING_STOP',UPDATE_TAG_CLICKED:'UPDATE_TAG_CLICKED',UPDATE_TAGGER:'UPDATE_TAGGER',ENTER_TAGGING_MODE:'ENTER_TAGGING_MODE',EXIT_TAGGING_MODE:'EXIT_TAGGING_MODE',UPDATE_TARGETED_TAG:'UPDATE_TARGETED_TAG',REDIRECT_FROM_CLICKED_TAG:'REDIRECT_FROM_CLICKED_TAG',DELETED_SPATIAL_TAG:'DELETED_SPATIAL_TAG',ADD_SPATIAL_TAG_FROM_PHOTO_TAGGER:'ADD_SPATIAL_TAG_FROM_PHOTO_TAGGER'}}),null);
__d('SphericalMediaBaseActions',['SphericalMediaActionNamespaces','SphericalMediaActions'],(function a(b,c,d,e,f,g){'use strict';f.exports={updateBase:function h(i){return {namespace:c('SphericalMediaActionNamespaces').BASE,type:c('SphericalMediaActions').UPDATE_BASE,data:i}},dragStart:function h(){return {namespace:c('SphericalMediaActionNamespaces').BASE,type:c('SphericalMediaActions').DRAG_START}},gyroStart:function h(){return {namespace:c('SphericalMediaActionNamespaces').BASE,type:c('SphericalMediaActions').GYRO_START}},mouseAnimationStart:function h(){return {namespace:c('SphericalMediaActionNamespaces').BASE,type:c('SphericalMediaActions').MOUSE_ANIMATION_START}},mouseEnter:function h(){return {namespace:c('SphericalMediaActionNamespaces').BASE,type:c('SphericalMediaActions').MOUSE_ENTER}},tapHeadingIndicator:function h(){return {namespace:c('SphericalMediaActionNamespaces').BASE,type:c('SphericalMediaActions').TAP_HEADING_INDICATOR}},significantMove:function h(i){return {namespace:c('SphericalMediaActionNamespaces').BASE,type:c('SphericalMediaActions').SIGNIFICANT_MOVE,data:{view:i}}},viewportClicked:function h(){return {namespace:c('SphericalMediaActionNamespaces').BASE,type:c('SphericalMediaActions').VIEWPORT_CLICKED}},visibilityChanged:function h(i){return {namespace:c('SphericalMediaActionNamespaces').BASE,type:c('SphericalMediaActions').VISIBILITY_CHANGED,data:i}},zoomStart:function h(){return {namespace:c('SphericalMediaActionNamespaces').BASE,type:c('SphericalMediaActions').ZOOM_START}},updateDimension:function h(i,j){return {namespace:c('SphericalMediaActionNamespaces').BASE,type:c('SphericalMediaActions').UPDATE_DIMENSION,data:{width:i,height:j}}},updateInitialViewport:function h(i,j){return {namespace:c('SphericalMediaActionNamespaces').BASE,type:c('SphericalMediaActions').UPDATE_INITIAL_VIEWPORT,data:{initialYaw:i,initialPitch:j}}},updateInitialFOV:function h(i){return {namespace:c('SphericalMediaActionNamespaces').BASE,type:c('SphericalMediaActions').UPDATE_INITIAL_FOV,data:{initialFov:i}}},setupRenderer:function h(i,j){return {namespace:c('SphericalMediaActionNamespaces').BASE,type:c('SphericalMediaActions').SETUP_RENDERER,data:{renderer:i,dt:j}}},webGlInitFailed:function h(i){return {namespace:c('SphericalMediaActionNamespaces').BASE,type:c('SphericalMediaActions').WEBGL_INIT_FAILED,data:{error:i}}},webGlRenderFailed:function h(i,j){return {namespace:c('SphericalMediaActionNamespaces').BASE,type:c('SphericalMediaActions').WEBGL_RENDER_FAILED,data:{error:i,view:j}}},webGlContextLost:function h(){return {namespace:c('SphericalMediaActionNamespaces').BASE,type:c('SphericalMediaActions').WEBGL_CONTEXT_LOST}},sourceOnLoad:function h(){return {namespace:c('SphericalMediaActionNamespaces').BASE,type:c('SphericalMediaActions').SOURCE_ONLOAD}},replaceBaseState:function h(i){return {namespace:c('SphericalMediaActionNamespaces').BASE,type:c('SphericalMediaActions').REPLACE_BASE_STATE,data:i}},updateSpatialTags:function h(i){return {namespace:c('SphericalMediaActionNamespaces').BASE,type:c('SphericalMediaActions').UPDATE_SPATIAL_TAGS,data:i}},updateSpatialTagsFromComposer:function h(i){return {namespace:c('SphericalMediaActionNamespaces').BASE,type:c('SphericalMediaActions').UPDATE_SPATIAL_TAGS_FROM_COMPOSER,data:i}},updateTagUnderMouse:function h(i){return {namespace:c('SphericalMediaActionNamespaces').BASE,type:c('SphericalMediaActions').UPDATE_TAG_UNDER_MOUSE,data:i}},updateFileURL:function h(i){return {namespace:c('SphericalMediaActionNamespaces').BASE,type:c('SphericalMediaActions').UPDATE_FILE_URL,data:i}},canvasResizeStart:function h(){return {namespace:c('SphericalMediaActionNamespaces').BASE,type:c('SphericalMediaActions').CANVAS_RESIZE_START}},canvasResizeImgLoaded:function h(i,j){return {namespace:c('SphericalMediaActionNamespaces').BASE,type:c('SphericalMediaActions').CANVAS_RESIZE_IMG_LOADED,data:{width:i,height:j}}},canvasResizeSuccess:function h(i){return {namespace:c('SphericalMediaActionNamespaces').BASE,type:c('SphericalMediaActions').CANVAS_RESIZE_SUCCESS,data:i}},canvasResizeFailed:function h(i){return {namespace:c('SphericalMediaActionNamespaces').BASE,type:c('SphericalMediaActions').CANVAS_RESIZE_FAILED,data:i}},enableTagging:function h(){return {namespace:c('SphericalMediaActionNamespaces').BASE,type:c('SphericalMediaActions').ENABLE_TAGGING}},disableTagging:function h(){return {namespace:c('SphericalMediaActionNamespaces').BASE,type:c('SphericalMediaActions').DISABLE_TAGGING}},taggingStart:function h(){return {namespace:c('SphericalMediaActionNamespaces').BASE,type:c('SphericalMediaActions').TAGGING_START}},taggingStop:function h(){return {namespace:c('SphericalMediaActionNamespaces').BASE,type:c('SphericalMediaActions').TAGGING_STOP}},updateTagClicked:function h(i){return {namespace:c('SphericalMediaActionNamespaces').BASE,type:c('SphericalMediaActions').UPDATE_TAG_CLICKED,data:i}},updateTagger:function h(i){return {namespace:c('SphericalMediaActionNamespaces').BASE,type:c('SphericalMediaActions').UPDATE_TAGGER,data:i}},enterTaggingMode:function h(){return {namespace:c('SphericalMediaActionNamespaces').BASE,type:c('SphericalMediaActions').ENTER_TAGGING_MODE}},exitTaggingMode:function h(){return {namespace:c('SphericalMediaActionNamespaces').BASE,type:c('SphericalMediaActions').EXIT_TAGGING_MODE}},updateTargetedTag:function h(i){return {namespace:c('SphericalMediaActionNamespaces').BASE,type:c('SphericalMediaActions').UPDATE_TARGETED_TAG,data:i}},redirectFromClickedTag:function h(){return {namespace:c('SphericalMediaActionNamespaces').BASE,type:c('SphericalMediaActions').REDIRECT_FROM_CLICKED_TAG}},deletedSpatialTag:function h(){return {namespace:c('SphericalMediaActionNamespaces').BASE,type:c('SphericalMediaActions').DELETED_SPATIAL_TAG}},addSpatialTagFromPhotoTagger:function h(){return {namespace:c('SphericalMediaActionNamespaces').BASE,type:c('SphericalMediaActions').ADD_SPATIAL_TAG_FROM_PHOTO_TAGGER}},updateCtrElem:function h(i){return {namespace:c('SphericalMediaActionNamespaces').BASE,type:c('SphericalMediaActions').UPDATE_CTR_ELEM,data:{element:i}}},showFallbackUI:function h(){return {namespace:c('SphericalMediaActionNamespaces').BASE,type:c('SphericalMediaActions').SHOW_FALLBACK}},requestPhoto:function h(){return {namespace:c('SphericalMediaActionNamespaces').BASE,type:c('SphericalMediaActions').REQUEST_PHOTO}},requestPhotoFailed:function h(i,j){return {namespace:c('SphericalMediaActionNamespaces').BASE,type:c('SphericalMediaActions').REQUEST_PHOTO_FAILED,data:{id:i,error:j}}},receivePhoto:function h(i,j){return {namespace:c('SphericalMediaActionNamespaces').BASE,type:c('SphericalMediaActions').RECEIVE_PHOTO,data:j}}}}),null);
__d('ReactComponentRenderer',['React','ReactDOM','warning'],(function a(b,c,d,e,f,g){'use strict';function h(i,j){this.klass=i;this.container=j;this.props={};this.component=null}h.prototype.replaceProps=function(i,j){this.props={};this.setProps(i,j)};h.prototype.setProps=function(i,j){if(this.klass==null)return;Object.assign(this.props,i);var k=c('React').createElement(this.klass,this.props),l=this;c('ReactDOM').render(k,this.container,function(){l.component=this;if(j)j.call(this);})};h.prototype.unmount=function(){c('ReactDOM').unmountComponentAtNode(this.container);this.klass=null};f.exports=h}),null);
__d('SphericalMediaConstants',[],(function a(b,c,d,e,f,g){'use strict';var h={COMP_PHOTO_EDIT_THUMB:'PhotoEditThumbanil',COMP_PHOTO_VIEWER:'PhotoViewer',EDIT_VIEWPORT_SIZE:{width:476,height:476},HI_ALPHA_BG:{start:.2,end:.5},HI_ALPHA_ELEMENT:{start:.5,end:.85},HI_ALPHA_DURATION:400,HI_SIZE_NORMAL:{width:35,height:35,center_radius:2,background_radius:17.5,inner_radius:12,arc_radius:6.3,arc_stroke:5.3,inner_stroke:1,triangle:[2,2.5,5.2],rim_radius:16.8,rim_stroke:1.4},HI_SIZE_FULL:{width:50,height:50,center_radius:3,background_radius:25,inner_radius:17.14,arc_radius:9,arc_stroke:7.57,inner_stroke:1.5,triangle:[2.85,4.29,7.9],rim_radius:24,rim_stroke:2},HI_BLINK_ARC_RAD:Math.PI/6,HI_BLINK_DURATION:400,HI_FADE_OUT_DELAY:1000,MOUSE_EXPOSURE:4000,LOGGER_SURFACES:{newsfeed:'newsfeed',timeline:'timeline',fullpage:'photo_viewer',snowlift:'www_snowlift',composer:'composer',albumComposer:'album_composer',other:'other'},LOGGER_SIGNIFICANT_MOVEMENT_DEGREE:30,LOGGER_SIGNIFICANT_MOVEMENT_MS:1000,GYRO_SLIP_FACTOR:.15,RB_SPRING_FACTOR:25,RB_MAX_SPRING_DEGREE:15,RB_MAX_STRETCH_X_DEGREE:20,RB_MAX_STRETCH_Y_DEGREE:20,RB_FRICTION:.3,TILED_CUBE_FACES:{PLUS_X:2,MINUS_X:0,PLUS_Y:4,MINUS_Y:5,PLUS_Z:3,MINUS_Z:1},TILED_CUBE_TILE_CONTENT_SIZE:510,TILED_CUBE_TILE_PADDING_PIXELS:1,TAG:'tag',TAGGED_FACEBOX:'tagged_facebox',UNTAGGED_FACEBOX:'untagged_facebox',DEFAULT_SPATIAL_TAG_SIZE_DEGREE:10};f.exports=h}),null);