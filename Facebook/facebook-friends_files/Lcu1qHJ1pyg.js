if (self.CavalryLogger) { CavalryLogger.start_js(["brx95"]); }

__d("FundraiserForStoryCharityPickerRelaySearchSourceQuery.graphql",[],(function a(b,c,d,e,f,g){'use strict';var h={fragment:{argumentDefinitions:[{kind:"LocalArgument",name:"query",type:"String!",defaultValue:null},{kind:"LocalArgument",name:"limit",type:"Int!",defaultValue:null},{kind:"LocalArgument",name:"scale",type:"Float!",defaultValue:null}],kind:"Fragment",metadata:null,name:"FundraiserForStoryCharityPickerRelaySearchSourceQuery",selections:[{kind:"LinkedField",alias:null,args:[{kind:"Variable",name:"query",variableName:"query",type:"String"}],concreteType:"FundraiserCharitySearchQuery",name:"fundraiser_charity_search",plural:false,selections:[{kind:"LinkedField",alias:null,args:[{kind:"Variable",name:"first",variableName:"limit",type:"Int"},{kind:"Literal",name:"is_fundraiser_for_story_eligible",value:true,type:"Boolean"},{kind:"Literal",name:"is_fundraiser_person_to_charity_eligible",value:false,type:"Boolean"}],concreteType:"FundraiserCharitySearchResultsConnection",name:"search_results",plural:false,selections:[{kind:"LinkedField",alias:null,args:null,concreteType:"FundraiserCharitySearchResultsEdge",name:"edges",plural:true,selections:[{kind:"LinkedField",alias:null,args:null,concreteType:null,name:"node",plural:false,selections:[{kind:"ScalarField",alias:null,args:null,name:"id",storageKey:null},{kind:"ScalarField",alias:null,args:null,name:"name",storageKey:null},{kind:"LinkedField",alias:null,args:[{kind:"Literal",name:"height",value:32,type:"Int"},{kind:"Variable",name:"scale",variableName:"scale",type:"Float"},{kind:"Literal",name:"width",value:32,type:"Int"}],concreteType:"Image",name:"profile_picture",plural:false,selections:[{kind:"ScalarField",alias:null,args:null,name:"uri",storageKey:null}],storageKey:null},{kind:"LinkedField",alias:null,args:null,concreteType:"TextWithEntities",name:"charity_picker_subtitle",plural:false,selections:[{kind:"ScalarField",alias:null,args:null,name:"text",storageKey:null}],storageKey:null},{kind:"InlineFragment",type:"FundraiserCharity",selections:[{kind:"LinkedField",alias:null,args:null,concreteType:"Page",name:"page",plural:false,selections:[{kind:"ScalarField",alias:null,args:null,name:"is_verified",storageKey:null}],storageKey:null}]}],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],type:"Query"},id:"1443517632408644",kind:"Batch",metadata:{},name:"FundraiserForStoryCharityPickerRelaySearchSourceQuery",query:{argumentDefinitions:[{kind:"LocalArgument",name:"query",type:"String!",defaultValue:null},{kind:"LocalArgument",name:"limit",type:"Int!",defaultValue:null},{kind:"LocalArgument",name:"scale",type:"Float!",defaultValue:null}],kind:"Root",name:"FundraiserForStoryCharityPickerRelaySearchSourceQuery",operation:"query",selections:[{kind:"LinkedField",alias:null,args:[{kind:"Variable",name:"query",variableName:"query",type:"String"}],concreteType:"FundraiserCharitySearchQuery",name:"fundraiser_charity_search",plural:false,selections:[{kind:"LinkedField",alias:null,args:[{kind:"Variable",name:"first",variableName:"limit",type:"Int"},{kind:"Literal",name:"is_fundraiser_for_story_eligible",value:true,type:"Boolean"},{kind:"Literal",name:"is_fundraiser_person_to_charity_eligible",value:false,type:"Boolean"}],concreteType:"FundraiserCharitySearchResultsConnection",name:"search_results",plural:false,selections:[{kind:"LinkedField",alias:null,args:null,concreteType:"FundraiserCharitySearchResultsEdge",name:"edges",plural:true,selections:[{kind:"LinkedField",alias:null,args:null,concreteType:null,name:"node",plural:false,selections:[{kind:"ScalarField",alias:null,args:null,name:"__typename",storageKey:null},{kind:"ScalarField",alias:null,args:null,name:"id",storageKey:null},{kind:"ScalarField",alias:null,args:null,name:"name",storageKey:null},{kind:"LinkedField",alias:null,args:[{kind:"Literal",name:"height",value:32,type:"Int"},{kind:"Variable",name:"scale",variableName:"scale",type:"Float"},{kind:"Literal",name:"width",value:32,type:"Int"}],concreteType:"Image",name:"profile_picture",plural:false,selections:[{kind:"ScalarField",alias:null,args:null,name:"uri",storageKey:null}],storageKey:null},{kind:"LinkedField",alias:null,args:null,concreteType:"TextWithEntities",name:"charity_picker_subtitle",plural:false,selections:[{kind:"ScalarField",alias:null,args:null,name:"text",storageKey:null}],storageKey:null},{kind:"InlineFragment",type:"FundraiserCharity",selections:[{kind:"LinkedField",alias:null,args:null,concreteType:"Page",name:"page",plural:false,selections:[{kind:"ScalarField",alias:null,args:null,name:"is_verified",storageKey:null},{kind:"ScalarField",alias:null,args:null,name:"id",storageKey:null}],storageKey:null}]}],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}]},text:null};f.exports=h}),null);
__d('ReactComposerFundraiserAttachmentActionType',['keyMirrorRecursive'],(function a(b,c,d,e,f,g){f.exports=c('keyMirrorRecursive')({FETCH_ATTACHMENT:null,SET_MARKUP:null},'ReactComposerFundriserAttachmentActionType')}),null);
__d("XReactComposerFundraiserAttachmentController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/react_composer\/fundraiser\/attachment\/",{av:{type:"FBID"},composer_id:{type:"String",required:true},charity_id:{type:"String",required:true}})}),null);
__d('ReactComposerFundraiserAttachmentStore',['ActorURI','AsyncRequest','ReactComposerFundraiserAttachmentActionType','ReactComposerStoreBase','XReactComposerFundraiserAttachmentController'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits(j,c('ReactComposerStoreBase'));i=h&&h.prototype;function j(){'use strict';var k;i.constructor.call(this,function(){return {isFetching:false,markup:null}},function(l){switch(l.type){case c('ReactComposerFundraiserAttachmentActionType').FETCH_ATTACHMENT:k&&k.$ReactComposerFundraiserAttachmentStore1(l);break;case c('ReactComposerFundraiserAttachmentActionType').SET_MARKUP:k&&k.$ReactComposerFundraiserAttachmentStore2(l);break;}});k=this}j.prototype.getMarkup=function(k){'use strict';return this.getComposerData(k).markup};j.prototype.isFetching=function(k){'use strict';return this.getComposerData(k).isFetching};j.prototype.$ReactComposerFundraiserAttachmentStore1=function(k){'use strict';var l=this.validateAction(k,['composerID','charityID','actorID']),m=l[0],n=l[1],o=l[2],p=this.getComposerData(m);p.isFetching=true;p.markup=null;var q=c('XReactComposerFundraiserAttachmentController').getURIBuilder().setString('composer_id',m).setString('charity_id',n),r=c('ActorURI').create(q.getURI(),o),s=new (c('AsyncRequest'))(r).setFinallyHandler(function(){p.isFetching=false;this.emitChange(m)}.bind(this));s.send();this.emitChange(m)};j.prototype.$ReactComposerFundraiserAttachmentStore2=function(k){'use strict';var l=this.validateAction(k,['composerID','markup']),m=l[0],n=l[1],o=this.getComposerData(m);o.markup=n;o.isFetching=false;this.emitChange(m)};f.exports=new j()}),null);
__d('ReactComposerFundraiserAttachmentActions',['ReactComposerDispatcher','ReactComposerFundraiserAttachmentActionType','ReactComposerFundraiserAttachmentStore'],(function a(b,c,d,e,f,g){c('ReactComposerFundraiserAttachmentStore');h.prototype.fetchFundraiserAttachment=function(i,j,k){'use strict';var l={composerID:i,type:c('ReactComposerFundraiserAttachmentActionType').FETCH_ATTACHMENT,charityID:j,actorID:k};c('ReactComposerDispatcher').dispatch(l)};h.prototype.setMarkup=function(i,j){'use strict';var k={composerID:i,type:c('ReactComposerFundraiserAttachmentActionType').SET_MARKUP,markup:j};c('ReactComposerDispatcher').dispatch(k)};function h(){'use strict'}f.exports=new h()}),null);
__d('FundraiserForStoryCharityPickerRelaySearchSource',['AbstractRelaySearchSource','SearchableEntry','RelayModern','idx','FundraiserForStoryCharityPickerRelaySearchSourceQuery.graphql'],(function a(b,c,d,e,f,g){'use strict';var h,i,j=c('RelayModern').graphql,k=10,l=function q(){return c('FundraiserForStoryCharityPickerRelaySearchSourceQuery.graphql')};function m(q){return {query:l,variables:{query:q,limit:k}}}function n(q){var r,s=(r=q)!=null?(r=r.fundraiser_charity_search)!=null?(r=r.search_results)!=null?r.edges:r:r:r;if(!s)return [];return s.map(function(t,u){var v,w,x,y=t.node;return new (c('SearchableEntry'))({uniqueID:y.id,title:y.name,subtitle:(v=y)!=null?(v=v.charity_picker_subtitle)!=null?v.text:v:v,photo:(w=y)!=null?(w=w.profile_picture)!=null?w.uri:w:w,order:u,auxiliaryData:{verified:(x=y)!=null?(x=x.page)!=null?x.is_verified:x:x}})})}var o=function q(r,s){return s(r)};h=babelHelpers.inherits(p,c('AbstractRelaySearchSource'));i=h&&h.prototype;function p(){var q={bootstrapRequests:[{gen:function r(s){return m(s)}}],queryRequests:[{gen:function r(s){return m(s)}}],packageFn:n,getAllForEmptyQuery:true};i.constructor.call(this,q,o)}f.exports=p}),null);
__d('ReactComposerFundraiserTaggerComponent.react',['cx','fbt','FundraiserForStoryCharityPickerRelaySearchSource','Grid.react','React','SearchableEntry','XUITypeahead.react'],(function a(b,c,d,e,f,g,h,i){'use strict';var j,k,l=c('Grid.react').GridItem;j=babelHelpers.inherits(m,c('React').Component);k=j&&j.prototype;function m(n){k.constructor.call(this,n);this.$ReactComposerFundraiserTaggerComponent2=function(o){this.setState({query:o.target.value})}.bind(this);this.$ReactComposerFundraiserTaggerComponent3=function(o){this.setState({query:o.getTitle()});this.props.onSelect(o)}.bind(this);this.$ReactComposerFundraiserTaggerComponent1=new (c('FundraiserForStoryCharityPickerRelaySearchSource'))();this.state={query:''}}m.prototype.componentDidMount=function(){this.refs.typeahead&&this.refs.typeahead.focusInput()};m.prototype.render=function(){return c('React').createElement(c('Grid.react'),{className:"_5esl",cols:2,role:'presentation'},c('React').createElement(l,{className:"_5esm",key:'label',role:'presentation'},i._("For")),c('React').createElement(l,{className:"_5esw",key:'tokenizer',role:'presentation'},c('React').createElement(c('XUITypeahead.react'),{className:"_5esx",onChange:this.$ReactComposerFundraiserTaggerComponent2,onSelectAttempt:this.$ReactComposerFundraiserTaggerComponent3,placeholder:i._("Search for a nonprofit to support"),queryString:this.state.query,ref:'typeahead',searchSource:this.$ReactComposerFundraiserTaggerComponent4(),showEntriesOnFocus:true})))};m.prototype.$ReactComposerFundraiserTaggerComponent4=function(){return this.$ReactComposerFundraiserTaggerComponent1};f.exports=m}),null);
__d('ReactComposerFundraiserTaggerContainer.react',['ReactComposerTaggerContainerStateMixin','ReactComposerTaggerHideOnEscapeKeyPress.react','React','ReactComposerFundraiserAttachmentActions','ReactComposerLoggingName','ReactComposerTaggerActions','ReactComposerTaggerType','ReactComposerFundraiserTaggerComponent.react'],(function a(b,c,d,e,f,g){'use strict';var h=c('React').createClass({displayName:'ReactComposerFundraiserTaggerContainer',mixins:[c('ReactComposerTaggerContainerStateMixin')()],statics:{taggerID:c('ReactComposerTaggerType').FUNDRAISER},_onSelect:function i(j){if(j)j.charityID=j.getUniqueID();c('ReactComposerTaggerActions').setTaggerData(this.context.composerID,c('ReactComposerLoggingName').FUNDRAISER_SPROUT,c('ReactComposerTaggerType').FUNDRAISER,j);c('ReactComposerTaggerActions').deselectCurrentTagger(this.context.composerID,c('ReactComposerLoggingName').FUNDRAISER_SPROUT);c('ReactComposerFundraiserAttachmentActions').fetchFundraiserAttachment(this.context.composerID,j.charityID,this.context.actorID)},render:function i(){if(!this.state.isSelected)return null;return c('React').createElement('div',null,c('React').createElement(c('ReactComposerTaggerHideOnEscapeKeyPress.react'),null,c('React').createElement(c('ReactComposerFundraiserTaggerComponent.react'),{onSelect:this._onSelect})))}});f.exports=h}),null);