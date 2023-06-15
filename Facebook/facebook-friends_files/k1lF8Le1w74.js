if (self.CavalryLogger) { CavalryLogger.start_js(["sLrPz"]); }

__d('DynamicPageHovercardTypedLogger',['Banzai','GeneratedLoggerUtils','nullthrows'],(function a(b,c,d,e,f,g){'use strict';function h(){this.clear()}h.prototype.log=function(){c('GeneratedLoggerUtils').log('logger:DynamicPageHovercardLoggerConfig',this.$DynamicPageHovercardTypedLogger1,c('Banzai').BASIC)};h.prototype.logVital=function(){c('GeneratedLoggerUtils').log('logger:DynamicPageHovercardLoggerConfig',this.$DynamicPageHovercardTypedLogger1,c('Banzai').VITAL)};h.prototype.clear=function(){this.$DynamicPageHovercardTypedLogger1={};return this};h.prototype.updateData=function(j){this.$DynamicPageHovercardTypedLogger1=babelHelpers['extends']({},this.$DynamicPageHovercardTypedLogger1,j);return this};h.prototype.setContentType=function(j){this.$DynamicPageHovercardTypedLogger1.content_type=j;return this};h.prototype.setContentTypeList=function(j){this.$DynamicPageHovercardTypedLogger1.content_type_list=j;return this};h.prototype.setEvent=function(j){this.$DynamicPageHovercardTypedLogger1.event=j;return this};h.prototype.setExtraInfo=function(j){this.$DynamicPageHovercardTypedLogger1.extra_info=j;return this};h.prototype.setPageid=function(j){this.$DynamicPageHovercardTypedLogger1.pageid=j;return this};h.prototype.setReferrer=function(j){this.$DynamicPageHovercardTypedLogger1.referrer=j;return this};h.prototype.setTimeSpent=function(j){this.$DynamicPageHovercardTypedLogger1.time_spent=j;return this};h.prototype.setTrackingNodeName=function(j){this.$DynamicPageHovercardTypedLogger1.tracking_node_name=j;return this};h.prototype.setTrackingNodeType=function(j){this.$DynamicPageHovercardTypedLogger1.tracking_node_type=j;return this};h.prototype.setUIID=function(j){this.$DynamicPageHovercardTypedLogger1.ui_id=j;return this};var i={content_type:true,content_type_list:true,event:true,extra_info:true,pageid:true,referrer:true,time_spent:true,tracking_node_name:true,tracking_node_type:true,ui_id:true};f.exports=h}),null);
__d('PagesHovercardFooter.react',['cx','DynamicPageHovercardTypedLogger','PageCTAViewerUnitContainer.react','PagesMessageButton.react','PagesHeaderLikeButtonContainer.react','PagesHeaderFollowButtonContainer.react','Layout.react','React'],(function a(b,c,d,e,f,g,h){'use strict';var i,j,k=c('Layout.react').Column;i=babelHelpers.inherits(l,c('React').Component);j=i&&i.prototype;l.prototype.render=function(){var m=this.$PagesHovercardFooter1(),n=this.$PagesHovercardFooter2(),o=this.$PagesHovercardFooter3(),p=(m!==null?1:0)+(n!==null?1:0)+(o!==null?1:0),q=p===3?"_1wcx":p===2?"_1wcy":"_1wcz";if(m!==null)m=c('React').createElement(k,{className:q},m);if(n!==null)n=c('React').createElement(k,{className:q},n);if(o!==null)o=c('React').createElement(k,{className:q},o);return c('React').createElement('div',{className:"_54ay"},this.$PagesHovercardFooter4(),c('React').createElement('div',{className:"_1wc-"},c('React').createElement(c('Layout.react'),null,m,n,o)))};l.prototype.$PagesHovercardFooter4=function(){if(!this.props.callToActionUnitData)return null;return c('React').createElement('div',{className:'callToActionButton',onClick:this.$PagesHovercardFooter5.bind(this),role:'presentation'},c('React').createElement(c('PageCTAViewerUnitContainer.react'),this.props.callToActionUnitData))};l.prototype.$PagesHovercardFooter1=function(){if(!this.props.likeFollowData)return null;return c('React').createElement('div',{onClick:this.$PagesHovercardFooter6.bind(this),role:'presentation'},c('React').createElement(c('PagesHeaderLikeButtonContainer.react'),this.props.likeFollowData))};l.prototype.$PagesHovercardFooter2=function(){if(!this.props.likeFollowData||!this.props.likeFollowData.followAllowed)return null;return c('React').createElement('div',{onClick:this.$PagesHovercardFooter7.bind(this),role:'presentation'},c('React').createElement(c('PagesHeaderFollowButtonContainer.react'),this.props.likeFollowData))};l.prototype.$PagesHovercardFooter3=function(){var m=this.props.messageData;if(!m)return null;return c('React').createElement('div',{onClick:this.$PagesHovercardFooter8.bind(this),role:'presentation'},c('React').createElement(c('PagesMessageButton.react'),{pageID:String(this.props.pageID),settings:m}))};l.prototype.$PagesHovercardFooter5=function(event){this.$PagesHovercardFooter9('cta_click')};l.prototype.$PagesHovercardFooter6=function(event){this.$PagesHovercardFooter9('like_click')};l.prototype.$PagesHovercardFooter7=function(event){this.$PagesHovercardFooter9('follow_click')};l.prototype.$PagesHovercardFooter8=function(event){this.$PagesHovercardFooter9('message_click')};l.prototype.$PagesHovercardFooter9=function(m){new (c('DynamicPageHovercardTypedLogger'))().setPageid(Number(this.props.pageID)).setEvent('header_footer_engagement').setContentType(99).setTrackingNodeType(0).setTrackingNodeName(m).setReferrer(this.props.referrer).setUIID(this.props.UIID).log()};function l(){i.apply(this,arguments)}f.exports=l}),null);
__d("SavedListStateActions",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({CREATE:"CREATE",EDIT:"EDIT",SAVE_IN_NEW_LIST:"SAVE_IN_NEW_LIST",SAVE_IN_EXISTING_LIST:"SAVE_IN_EXISTING_LIST",SAVED_IN_LIST:"SAVED_IN_LIST",SAVE_ALREADY_IN_LIST:"SAVE_ALREADY_IN_LIST",REMOVE_FROM_LIST:"REMOVE_FROM_LIST",REMOVE_FROM_LIST_AND_DELETE_LIST:"REMOVE_FROM_LIST_AND_DELETE_LIST",MOVE_LISTS:"MOVE_LISTS"})}),null);
__d("XSaveAddToSaveListController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/save\/list\/add\/",{})}),null);
__d("XSaveListCreateDialogController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/save\/list\/dialog\/",{object_id:{type:"FBID"},mechanism:{type:"String"},surface:{type:"String"}})}),null);
__d("XSavedListsFromSaverController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/save\/lists\/get\/",{})}),null);
__d('PlacesSaveButton.react',['ix','cx','fbt','AsyncRequest','Image.react','Map','MenuSeparator.react','MenuStaticItem.react','PlacesSearchClickTypeEnums.react','PlacesSearchResults.react','PopoverMenu.react','React','ReactXUIMenu','SavedListStateActions','SimpleXUIDialog','XSaveAddToSaveListController','XSaveController','XSaveListCreateDialogController','XSavedListsFromSaverController','XUIButton.react','XUIPopoverButton.react','XUISpinner.react','fbglyph'],(function a(b,c,d,e,f,g,h,i,j){'use strict';var k,l,m=c('ReactXUIMenu').Item;k=babelHelpers.inherits(n,c('React').Component);l=k&&k.prototype;function n(o,p){l.constructor.call(this,o,p);this.state={isLoading:false,saveState:this.props.actionInfo.saveState==='SAVED'?'saved':'save',savedListMap:new (c('Map'))()}}n.prototype.render=function(){if(this.props.savedListsGk){return this.$PlacesSaveButton1()}else return this.$PlacesSaveButton2();};n.prototype.$PlacesSaveButton2=function(){var o=this.props.withoutLabel?'':this.state.saveState==='saved'?j._("Saved"):j._("Save"),p=this.props.withoutLabel?"_w0u":"_44h8",q=this.state.saveState==='saved'?h("136872"):h("125658"),r=this.state.saveState==='saving'||this.state.saveState==='unsaving',s=this.state.saveState==='saved'?'saved':'save',t=this.state.saveState==='saved'?c('PlacesSearchClickTypeEnums.react').SAVED:c('PlacesSearchClickTypeEnums.react').SAVE;return c('React').createElement(c('XUIButton.react'),babelHelpers['extends']({className:p,size:this.props.size,'data-et':JSON.stringify({click_point:s,data:JSON.stringify({entity_id:this.props.entityID})})},c('PlacesSearchResults.react').getLoggingData({resultID:this.props.entityID,clickType:t}),{label:o,disabled:r,image:c('React').createElement(c('Image.react'),{src:q}),onClick:function(){return this.$PlacesSaveButton3()}.bind(this)}))};n.prototype.$PlacesSaveButton1=function(){if(this.state.saveState==='save'||this.state.saveState==='saving')return this.$PlacesSaveButton2();return this.$PlacesSaveButton4()};n.prototype.$PlacesSaveButton5=function(event){var o=event.target.getAttribute('name');new (c('AsyncRequest'))().setURI(c('XSaveAddToSaveListController').getURIBuilder().getURI()).setData({object_id:this.props.entityID,list_id:event.target.getAttribute('value')}).setHandler(function(p){var q=p.getPayload().response;if(q===c('SavedListStateActions').SAVED_IN_LIST){c('SimpleXUIDialog').show(c('React').createElement('div',null,j._("Successfully added to list"),'\u00A0"',o,'"'))}else if(q===c('SavedListStateActions').SAVE_ALREADY_IN_LIST){c('SimpleXUIDialog').show(c('React').createElement('div',null,j._("Already in list"),'\u00A0"',o,'"'))}else c('SimpleXUIDialog').show(c('React').createElement('div',null,j._("Something went wrong, please try again.")));}).send()};n.prototype.$PlacesSaveButton6=function(){if(!this.state.isLoading)return null;return c('React').createElement(m,null,c('React').createElement(c('XUISpinner.react'),{size:'small'}))};n.prototype.$PlacesSaveButton7=function(){if(this.state.savedListMap===null||this.state.isLoading)return null;var o=[],p=this.state.savedListMap;for(var q in p){var r=p[q].name,s=p[q].icon,t=null;if(p[q].inList)t=c('React').createElement(c('Image.react'),{className:"_4jse",src:h("128986")});o.push(c('React').createElement(m,{key:q},c('React').createElement('div',{className:"_4jsf",name:r,onClick:function(event){return this.$PlacesSaveButton5(event)}.bind(this),role:'presentation',value:q},t,c('React').createElement('span',{value:q,name:r},c('React').createElement(c('Image.react'),{src:s}),r))))}return o};n.prototype.$PlacesSaveButton8=function(){if(this.state.isLoading)return null;if(Object.keys(this.state.savedListMap).length===0){return c('React').createElement(c('MenuStaticItem.react'),null,j._("You have no saved lists yet."))}else return c('React').createElement(c('MenuStaticItem.react'),null,j._("Add to..."));};n.prototype.$PlacesSaveButton4=function(){var o=this.state.saveState==='unsaving',p=c('React').createElement(c('ReactXUIMenu'),null,this.$PlacesSaveButton8(),this.$PlacesSaveButton6(),this.$PlacesSaveButton7(),c('React').createElement(c('MenuSeparator.react'),null),c('React').createElement(m,{onclick:function(event){return this.$PlacesSaveButton9(event)}.bind(this)},j._("Add to new list...")),c('React').createElement(c('MenuSeparator.react'),null),c('React').createElement(m,{onclick:function(event){return this.$PlacesSaveButton3(event)}.bind(this)},j._("Unsave")));return c('React').createElement('div',null,c('React').createElement(c('PopoverMenu.react'),{menu:p,disabled:o},this.$PlacesSaveButton10()))};n.prototype.$PlacesSaveButton10=function(){var o=this.props.withoutLabel?'':j._("Saved"),p=this.props.withoutLabel?"_w0u":"_44h8",q=h("136872"),r=this.state.saveState==='unsaving';return c('React').createElement(c('XUIPopoverButton.react'),babelHelpers['extends']({className:p,size:this.props.size,'data-et':JSON.stringify({click_point:'saved',data:JSON.stringify({entity_id:this.props.entityID})})},c('PlacesSearchResults.react').getLoggingData({resultID:this.props.entityID,clickType:c('PlacesSearchClickTypeEnums.react').PLACE_SAVED}),{label:o,disabled:r,image:c('React').createElement(c('Image.react'),{src:q}),onClick:function(){return this.$PlacesSaveButton11()}.bind(this)}))};n.prototype.$PlacesSaveButton3=function(){var o=this.state.saveState;this.setState({saveState:this.$PlacesSaveButton12()});new (c('AsyncRequest'))().setURI(c('XSaveController').getURIBuilder().getURI()).setData({object_id:this.props.entityID,action:o==='saved'?'UNSAVE':'SAVE',surface:'search',mechanism:'search_result'}).setHandler(function(p){this.setState({saveState:p.error===0?this.$PlacesSaveButton12():o})}.bind(this)).send()};n.prototype.$PlacesSaveButton12=function(){if(this.state.saveState==='save')return 'saving';if(this.state.saveState==='saving')return 'saved';if(this.state.saveState==='saved')return 'unsaving';return 'save'};n.prototype.$PlacesSaveButton11=function(){this.setState({isLoading:true});new (c('AsyncRequest'))().setURI(c('XSavedListsFromSaverController').getURIBuilder().getURI()).setData({object_id:this.props.entityID}).setHandler(function(o){this.setState({savedListMap:o.payload.savedListMap,isLoading:false})}.bind(this)).send()};n.prototype.$PlacesSaveButton9=function(){new (c('AsyncRequest'))().setURI(c('XSaveListCreateDialogController').getURIBuilder().getURI()).setData({object_id:this.props.entityID}).send()};f.exports=n}),null);