if (self.CavalryLogger) { CavalryLogger.start_js(["m\/rFq"]); }

__d('AYMTFlyout',['Event'],(function a(b,c,d,e,f,g){var h={listen:function i(j,k){c('Event').listen(j,'click',k.show.bind(k))}};f.exports=h}),null);
__d("XPagesAdminOptInController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/pages\/opt_in\/",{})}),null);
__d("XPagesAdminOptOutConfirmationDialogController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/pages\/opt_out\/dialog\/",{page_id:{type:"FBID",required:true},__asyncDialog:{type:"Int"}})}),null);
__d('PagesAdminOptOutHelper',['AsyncDialog','AsyncRequest','Event','QE2Logger','XPagesAdminOptInController','XPagesAdminOptOutConfirmationDialogController','tidyEvent'],(function a(b,c,d,e,f,g){'use strict';var h=null;function i(l){h=l}function j(){return h}var k={trackLink:function l(m){c('tidyEvent')(c('Event').listen(m,'click',function(event){c('QE2Logger').logExposureForUser('page_opt_out_button_on_hpp')}))},setPageID:function l(m){i(m)},sendOptOutRequest:function l(){var m=j();if(!m)return;var n=c('XPagesAdminOptOutConfirmationDialogController').getURIBuilder().setFBID('page_id',m).getURI();c('AsyncDialog').send(new (c('AsyncRequest'))(n))},sendOptInRequest:function l(){var m=j();if(!m)return;var n=c('XPagesAdminOptInController').getURIBuilder().getURI();new (c('AsyncRequest'))(n).send()}};f.exports=k}),null);
__d('AYMTRefreshElement',['csx','CSS','DOM','DOMQuery','PagesAdminOptOutHelper','QE2Logger','ReactXUIMenu','URI','ge'],(function a(b,c,d,e,f,g,h){f.exports={init:function i(j,k){j.subscribe('itemclick',function(l,m){if(m.item._data.id==='opt_out_item'){c('PagesAdminOptOutHelper').sendOptOutRequest()}else if(m.item._data.id==='opt_in_all_pages'){c('PagesAdminOptOutHelper').sendOptInRequest()}else c('CSS').addClass(k,'async_saving');});j.subscribe('show',function(){c('QE2Logger').logExposureForUser('page_opt_out_button_on_hpp')})},initObjectSelector:function i(j,k){j.subscribe('itemclick',function(){var l=j.getFocusedItem(),m=new (c('URI'))(l._data.ajaxify).getQueryData(),n=m.promoted_object,o=c('DOMQuery').scry(c('ge')('aymt_object_section'),"._2eka img")[0],p=c('DOMQuery').scry(c('ge')('aymt_object_section'),"._2ekc a")[0],q=c('DOMQuery').scry(c('ge')('aymt_object_section'),"._q3r a")[0],r;if(p!==undefined){r=new (c('URI'))(p.dataset.hovercard);r.setQueryData({id:n});c('DOM').setAttributes(p,{'data-hovercard':r.toString()});c('DOM').setAttributes(p,{href:'#'})}else p=c('DOMQuery').scry(c('ge')('aymt_object_section'),"._2ekc span")[0];c('DOM').setContent(p,l._data.label);q&&c('DOM').setContent(q,null);if(o!==undefined){if(r===undefined){r=new (c('URI'))(o.parentNode.dataset.hovercard);r.setQueryData({id:n})}c('DOM').setAttributes(o,{src:l._data.iconsrc});c('DOM').setAttributes(o.parentNode,{'data-hovercard':r?r.toString():'#',href:'#'})}if(k===null)k=document.getElementById('aymt_object_info');if(!k)return;c('CSS').addClass(k,'async_saving')})},initTimeRangeSelector:function i(j,k){j.subscribe('itemclick',function(){var l=j.getFocusedItem(),m=c('DOMQuery').scry(c('ge')('aymt_campaign_section'),"span ._2ekc")[0];c('DOM').setContent(m,l._data.label);c('CSS').addClass(k,'async_saving')})},fromLink:function i(j,k){j.onclick=function(){c('CSS').addClass(k,'async_saving')}}}}),null);
__d('AYMTHomepagePanelLogger',['BanzaiLogger','Event','tidyEvent'],(function a(b,c,d,e,f,g){var h=null,i={init:function j(k,l){c('tidyEvent')(c('Event').listen(k,'click',function(event){c('BanzaiLogger').log('AYMTHomepagePanelLoggerConfig',l)}))}};f.exports=i}),null);
__d('HomepagePanelPageInsights.react',['cx','fbt','FacepileRounded.react','Link.react','List.react','PagesEventObserver','PagesEventType','React','XUIButton.react','XUIButtonGroup.react','intlNumUtils'],(function a(b,c,d,e,f,g,h,i){'use strict';var j,k,l=32,m={LIKE:'like',VIEW:'view',POST:'post'};j=babelHelpers.inherits(n,c('React').PureComponent);k=j&&j.prototype;function n(o){k.constructor.call(this,o);this.state={selectedTab:m.LIKE}}n.prototype.$HomepagePanelPageInsights1=function(){return c('React').createElement('div',{className:"_2n5z"},c('React').createElement(c('XUIButtonGroup.react'),null,c('React').createElement(c('XUIButton.react'),{className:"_2n5-"+(this.state.selectedTab===m.LIKE?' '+"_2n60":''),label:i._("Likes"),onClick:this.$HomepagePanelPageInsights2.bind(this,m.LIKE)}),c('React').createElement(c('XUIButton.react'),{className:"_2n5-"+(this.state.selectedTab===m.VIEW?' '+"_2n60":''),label:i._("Views"),onClick:this.$HomepagePanelPageInsights2.bind(this,m.VIEW)}),c('React').createElement(c('XUIButton.react'),{className:"_2n5-"+(this.state.selectedTab===m.POST?' '+"_2n60":''),label:i._("Posts"),onClick:this.$HomepagePanelPageInsights2.bind(this,m.POST)})))};n.prototype.$HomepagePanelPageInsights3=function(){var o=c('React').createElement('div',{className:"_1oso"},this.props.date_range);switch(this.state.selectedTab){case m.LIKE:return c('React').createElement(c('List.react'),{border:'none',spacing:'none'},c('React').createElement('li',{className:"_2n66"},c('React').createElement(c('Link.react'),{className:"_2n67",href:this.props.insights_uri.pageLikesURI},this.props.total_likes)),c('React').createElement('li',{className:"_2n68"},c('React').createElement(c('Link.react'),{className:"_2n69"+(this.props.new_likes===0?' '+"_21t8":''),href:this.props.insights_uri.pageLikesURI},i._({"*":"{number} new likes this week","_1":"1 new like this week"},[i.plural(this.props.new_likes,'number')]))),c('React').createElement('li',{className:"_2n6a"},c('React').createElement(c('Link.react'),{ajaxify:this.props.friend_inviter_uri,'aria-label':'People who recently liked this Page',rel:'dialog'},c('React').createElement(c('FacepileRounded.react'),{imageSize:l,profiles:this.$HomepagePanelPageInsights4(),showNames:true}))));case m.VIEW:var p=c('React').createElement(c('Link.react'),{className:"_1osw"+(this.props.exceed_view_limit?' '+"_1osx":''),href:this.props.insights_uri.pageViewsURI},c('intlNumUtils').formatNumberWithThousandDelimiters(this.props.new_views)),q=c('React').createElement(c('Link.react'),{className:"_1osz",href:this.props.insights_uri.pageViewsURI},i._({"*":"Page Views","_1":" Page View"},[i.plural(this.props.new_views)])),r=c('React').createElement(c('Link.react'),{className:"_1osw"+(this.props.exceed_view_limit?' '+"_1osx":''),href:this.props.insights_uri.postReachURI},c('intlNumUtils').formatNumberWithThousandDelimiters(this.props.new_engagements)),s=c('React').createElement(c('Link.react'),{className:"_1osz",href:this.props.insights_uri.postReachURI},i._({"*":"Post Engagements","_1":" Post Engagement"},[i.plural(this.props.new_engagements)]));return c('React').createElement(c('List.react'),{border:'none',spacing:'none'},c('React').createElement('li',null,o),c('React').createElement('li',{className:"_1os-"},c('React').createElement(c('List.react'),{border:'light',direction:'horizontal',spacing:'none'},c('React').createElement('li',{className:"_1os_"},c('React').createElement(c('List.react'),{border:'none',spacing:'none'},c('React').createElement('li',null,p),c('React').createElement('li',null,q))),c('React').createElement('li',{className:"_1os_"},c('React').createElement(c('List.react'),{border:'none',spacing:'none'},c('React').createElement('li',null,r),c('React').createElement('li',null,s))))));case m.POST:var t=c('React').createElement(c('Link.react'),{className:"_1osw"+(this.props.exceed_post_limit?' '+"_1osx":''),href:this.props.insights_uri.postReachURI},c('intlNumUtils').formatNumberWithThousandDelimiters(this.props.new_comments)),u=c('React').createElement(c('Link.react'),{className:"_1osz",href:this.props.insights_uri.postReachURI},i._({"*":"Comments","_1":" Comment"},[i.plural(this.props.new_comments)])),v=c('React').createElement(c('Link.react'),{className:"_1osw"+(this.props.exceed_post_limit?' '+"_1osx":''),href:this.props.insights_uri.postReachURI},c('intlNumUtils').formatNumberWithThousandDelimiters(this.props.new_shares)),w=c('React').createElement(c('Link.react'),{className:"_1osz",href:this.props.insights_uri.postReachURI},i._({"*":"Shares","_1":" Share"},[i.plural(this.props.new_shares)]));return c('React').createElement(c('List.react'),{border:'none',spacing:'none'},c('React').createElement('li',null,o),c('React').createElement('li',{className:"_1os-"},c('React').createElement(c('List.react'),{border:'light',direction:'horizontal',spacing:'none'},c('React').createElement('li',{className:"_1os_"},c('React').createElement(c('List.react'),{border:'none',spacing:'none'},c('React').createElement('li',null,t),c('React').createElement('li',null,u))),c('React').createElement('li',{className:"_1os_"},c('React').createElement(c('List.react'),{border:'none',spacing:'none'},c('React').createElement('li',null,v),c('React').createElement('li',null,w))))));default:return c('React').createElement('div',null);}};n.prototype.$HomepagePanelPageInsights4=function(){var o=this.props.friends_data;return Object.keys(o).map(function(p){return {image_src:'https://graph.facebook.com/'+o[p].uniqueID+'/picture?height='+l*2+'&width='+l*2,name:o[p].name}})};n.prototype.$HomepagePanelPageInsights2=function(o){this.setState({selectedTab:o});c('PagesEventObserver').notify(c('PagesEventType').VISIT_INSIGHTS_TAB,this.props.page_id,{ref:'aymt_homepage_panel'})};n.prototype.render=function(){return c('React').createElement('div',null,this.$HomepagePanelPageInsights1(),this.$HomepagePanelPageInsights3())};f.exports=n}),null);
__d('PagesRecentPostsActionBar',['React','ReactDOM','TrackingNodes','UFIReactionsBlingSocialSentence.react','URI','goURI'],(function a(b,c,d,e,f,g){'use strict';h.prototype.render=function(i,j,k,l,m){var n=c('TrackingNodes').getTrackingInfo(c('TrackingNodes').types.BLINGBOX);if(j.showtheaterforcomment&&j.commentredirecturi){j.commentajaxify=j.commentredirecturi;j=Object.freeze(j)}var o=l,p=(j.feedbackMode==='none'||j.feedbackMode==='toggle')&&j.hasReactions&&k.displayreactions,q=function r(event){c('goURI')(new (c('URI'))(m))};if(k.reactionsentences&&k.reactionsentences.current)k.reactionsentences.current=null;if(k.likesentences&&k.likesentences.current)k.likesentences.current=null;if(p)c('ReactDOM').render(c('React').createElement(c('UFIReactionsBlingSocialSentence.react'),{commentCount:o,contextArgs:j,'data-comment-prelude-ref':'action_link_bling','data-ft':n,feedback:k,href:m,onCommentClick:q}),i);};function h(){}f.exports=new h()}),null);