if (self.CavalryLogger) { CavalryLogger.start_js(["QanLI"]); }

__d('EmoticonSpan.react',['cx','DraftEntity','EmojiImageURL','EmoticonsList','React','SupportedFBEmoji'],(function a(b,c,d,e,f,g,h){'use strict';var i,j;i=babelHelpers.inherits(k,c('React').Component);j=i&&i.prototype;k.prototype.render=function(){var l=this.props.size,m=c('DraftEntity').get(this.props.entityKey).getData(),n=c('EmoticonsList').emoji[m.type],o=c('SupportedFBEmoji')[n]?c('EmojiImageURL').getFBEmojiURL(n,l):c('EmojiImageURL').getFBEmojiExtendedURL(n,l);return c('React').createElement('span',{className:"_3gl1 _5zz4",style:{backgroundImage:'url('+o+')',backgroundSize:l+'px '+l+'px',height:l+'px',width:l+'px'}},c('React').createElement('span',{className:"_ncl"},this.props.children))};function k(){i.apply(this,arguments)}k.defaultProps={size:16};f.exports=k}),null);
__d('HashtagSpan.react',['cx','React'],(function a(b,c,d,e,f,g,h){var i,j;i=babelHelpers.inherits(k,c('React').Component);j=i&&i.prototype;k.prototype.render=function(){'use strict';return c('React').createElement('span',babelHelpers['extends']({},this.props,{'data-offset-key':this.props.offsetKey,className:"_5zk7",spellCheck:false}),this.props.children)};function k(){'use strict';i.apply(this,arguments)}f.exports=k}),null);
__d('MentionSpan.react',['cx','React'],(function a(b,c,d,e,f,g,h){var i,j;i=babelHelpers.inherits(k,c('React').Component);j=i&&i.prototype;k.prototype.render=function(){'use strict';return c('React').createElement('span',babelHelpers['extends']({},this.props,{'data-offset-key':this.props.offsetKey,className:"_247o",spellCheck:false}),this.props.children)};function k(){'use strict';i.apply(this,arguments)}f.exports=k}),null);
__d('WeakMentionSpan.react',['cx','React'],(function a(b,c,d,e,f,g,h){var i,j;i=babelHelpers.inherits(k,c('React').Component);j=i&&i.prototype;k.prototype.render=function(){'use strict';return c('React').createElement('span',{'data-offset-key':this.props.offsetKey,className:"_whq",spellCheck:false},this.props.children)};function k(){'use strict';i.apply(this,arguments)}f.exports=k}),null);
__d('getHashtagMatches',['getHashtagRegex'],(function a(b,c,d,e,f,g){var h=c('getHashtagRegex')();function i(j,k){var l=j.getText(),m,n,o,p;while((m=h.exec(l))!==null){n=m.index+m[1].length;o=m[2];p=m[3];k(n,n+o.length+p.length)}}f.exports=i}),null);
__d('getMentionsInputDecorator',['CompositeDraftDecorator','EmoticonSpan.react','HashtagSpan.react','MentionSpan.react','WeakMentionSpan.react','getEntityMatcher','getHashtagMatches'],(function a(b,c,d,e,f,g){var h;function i(){if(!h){var j=[{strategy:c('getEntityMatcher')(function(k){var l=k.getData();return k.getType()==='MENTION'&&l&&l.isWeak}),component:c('WeakMentionSpan.react')},{strategy:c('getEntityMatcher')(function(k){return k.getType()==='MENTION'}),component:c('MentionSpan.react')},{strategy:c('getEntityMatcher')(function(k){return k.getType()==='EMOTICON'}),component:c('EmoticonSpan.react')},{strategy:c('getHashtagMatches'),component:c('HashtagSpan.react')}];h=new (c('CompositeDraftDecorator'))(j)}return h}f.exports=i}),null);
__d('EmojiInputDecorator',['EmojiRenderer','immutable'],(function a(b,c,d,e,f,g){'use strict';var h=c('immutable').List,i='.',j='emoji';function k(l,m,n){this.$EmojiInputDecorator1=l;this.$EmojiInputDecorator2=m;this.$EmojiInputDecorator3=n}k.prototype.getDecorations=function(l,m){var n=this.$EmojiInputDecorator2?this.$EmojiInputDecorator2.getDecorations(l,m).toArray():Array(l.getText().length).fill(null),o=0;c('EmojiRenderer').parse(l.getText()).forEach(function(p){var q=p.offset,r=q+p.length,s=true;for(var t=q;t<r;t++)if(n[t]!=null){s=false;break}if(s){for(var u=q;u<r;u++)n[u]=j+i+o;o++}});return h(n)};k.prototype.getComponentForKey=function(l){if(!this.$EmojiInputDecorator2||l.split(i)[0]===j)return this.$EmojiInputDecorator1;return this.$EmojiInputDecorator2.getComponentForKey(l)};k.prototype.getPropsForKey=function(l){if(!this.$EmojiInputDecorator2||l.split(i)[0]===j)return this.$EmojiInputDecorator3;return this.$EmojiInputDecorator2.getPropsForKey(l)};f.exports=k}),null);
__d('EmojiSpan.react',['cx','DraftEntity','EmojiConfig','EmojiImageURL','FBEmojiUtils','React','SupportedFBEmoji','UnicodeUtils'],(function a(b,c,d,e,f,g,h){var i,j,k=c('EmojiImageURL').getFBEmojiURL;i=babelHelpers.inherits(l,c('React').Component);j=i&&i.prototype;l.prototype.render=function(){'use strict';var m=this.props,n=m.decoratedText,o=m.offsetKey,p=m.size,q=0,r=n.length,s=[];while(q<r){var t=c('UnicodeUtils').getUTF16Length(n,q);s.push(n.substr(q,t));q+=t}var u=c('FBEmojiUtils').getSupportedKey(s);if(u&&Object.prototype.hasOwnProperty.call(c('SupportedFBEmoji'),u))return c('React').createElement('span',babelHelpers['extends']({},this.props,{className:"_3gl1 _5zz4",'data-offset-key':o,style:{backgroundImage:'url('+k(u,p)+')',backgroundSize:p+'px '+p+'px',height:p,width:p}}),c('React').createElement('span',{className:"_ncl"},n));return c('React').createElement('span',{'data-offset-key':o},n)};function l(){'use strict';i.apply(this,arguments)}f.exports=l}),null);
__d('keyCommandBackspaceEmoji',['EditorState','EmojiRenderer','UnicodeUtils','moveSelectionBackward','removeTextWithStrategy'],(function a(b,c,d,e,f,g){var h=function i(j){var k=c('removeTextWithStrategy')(j,function(m){var n=m.getSelection(),o=n.getAnchorOffset(),p=m.getCurrentContent().getBlockForKey(n.getAnchorKey()).getText(),q=p[o-1],r=null;if(q){var s=c('EmojiRenderer').parse(p);for(var t=0;t<s.length;t++)if(s[t].offset<o&&s[t].offset+s[t].length>=o){r=s[t].length;break}if(!r)r=c('UnicodeUtils').getUTF16Length(q,0);}return c('moveSelectionBackward')(m,r||1)},'backward');if(k===j.getCurrentContent())return null;var l=j.getSelection();return c('EditorState').push(j,k.set('selectionBefore',l),l.isCollapsed()?'backspace-character':'remove-range')};f.exports=h}),null);
__d('keyCommandDeleteEmoji',['EditorState','EmojiRenderer','UnicodeUtils','moveSelectionForward','removeTextWithStrategy'],(function a(b,c,d,e,f,g){var h=function i(j){var k=c('removeTextWithStrategy')(j,function(m){var n=m.getSelection(),o=n.getAnchorOffset(),p=m.getCurrentContent().getBlockForKey(n.getAnchorKey()).getText(),q=p[o],r=null;if(q){var s=c('EmojiRenderer').parse(p);for(var t=0;t<s.length;t++)if(s[t].offset<=o&&s[t].offset+s[t].length>o){r=s[t].length;break}if(!r)r=c('UnicodeUtils').getUTF16Length(q,0);}return c('moveSelectionForward')(m,r||1)},'forward');if(k===j.getCurrentContent())return null;var l=j.getSelection();return c('EditorState').push(j,k.set('selectionBefore',l),l.isCollapsed()?'delete-character':'remove-range')};f.exports=h}),null);
__d('addEmojiInput',['EditorState','EmojiInputDecorator','EmojiSpan.react','React','keyCommandBackspaceEmoji','keyCommandDeleteEmoji'],(function a(b,c,d,e,f,g){'use strict';var h=function(i){return function(){var j,k;j=babelHelpers.inherits(l,c('React').Component);k=j&&j.prototype;function l(){var m,n;'use strict';for(var o=arguments.length,p=Array(o),q=0;q<o;q++)p[q]=arguments[q];return n=(m=k.constructor).call.apply(m,[this].concat(p)),this.$_class1=function(r,s){var t=null;switch(r){case 'backspace':t=c('keyCommandBackspaceEmoji')(s);break;case 'delete':t=c('keyCommandDeleteEmoji')(s);break;}if(t){this.props.onChange(t);return 'handled'}return 'not-handled'}.bind(this),n}l.prototype.blur=function(){'use strict';var m=this.refs.component;m&&typeof m.blur==='function'&&m.blur()};l.prototype.click=function(){'use strict';var m=this.refs.component;m&&typeof m.click==='function'&&m.click()};l.prototype.focus=function(){'use strict';var m=this.refs.component;m&&typeof m.focus==='function'&&m.focus()};l.prototype.render=function(){'use strict';var m=this.props.editorState,n=m.getDecorator();if(!(n instanceof c('EmojiInputDecorator')))m=c('EditorState').set(this.props.editorState,{decorator:new (c('EmojiInputDecorator'))(c('EmojiSpan.react'),n,{size:16})});return c('React').createElement(i,babelHelpers['extends']({},this.props,{editorState:m,handleKeyCommand:this.$_class1,ref:'component'}))};return l}()}.bind(this);f.exports=h}),null);
__d('addEmojiToEditorState',['DraftModifier','EditorState','EmojiFormat','emptyFunction'],(function a(b,c,d,e,f,g){'use strict';function h(i,j){var k=arguments.length<=2||arguments[2]===undefined?c('emptyFunction'):arguments[2];if(typeof i!=='string')i=c('EmojiFormat').codeArrayToUnicode(i);var l=c('DraftModifier').replaceText(j.getCurrentContent(),j.getSelection(),i),m=c('EditorState').push(j,l,'insert-characters');if(m!==j)k(m);return m}f.exports=h}),null);
__d('createMentionEntity',['DraftEntity'],(function a(b,c,d,e,f,g){function h(i){var j=i.getType().toLowerCase();if(j==='hashtag')return c('DraftEntity').create('HASHTAG','IMMUTABLE');var k=j==='user'||j==='fb4c'?'SEGMENTED':'IMMUTABLE',l=i.getAuxiliaryData();return c('DraftEntity').create('MENTION',k,{id:i.getUniqueID(),isWeak:l&&l.renderType==='non_member',type:j})}f.exports=h}),null);
__d('MentionsInput.react',['cx','invariant','AbstractMentionsTextEditor.react','EditorState','Event','MentionsLayer.react','React','ReactDOM','createMentionEntity','joinClasses'],(function a(b,c,d,e,f,g,h,i){var j,k,l=c('React').PropTypes;j=babelHelpers.inherits(m,c('React').Component);k=j&&j.prototype;function m(){var n,o;'use strict';for(var p=arguments.length,q=Array(p),r=0;r<p;r++)q[r]=arguments[r];return o=(n=k.constructor).call.apply(n,[this].concat(q)),this.blur=function(){this.refs.textEditor.blur()}.bind(this),this.focus=function(){this.refs.textEditor&&this.refs.textEditor.focus()}.bind(this),this.click=function(){var s=c('ReactDOM').findDOMNode(this);s||i(0);s.dispatchEvent(new (c('Event'))('focus'))}.bind(this),o}m.prototype.render=function(){'use strict';var n=c('joinClasses')(this.props.className,"_5yk1");return c('React').createElement('div',{className:n,onClick:this.click,onFocus:this.focus,role:'presentation'},c('React').createElement(c('AbstractMentionsTextEditor.react'),babelHelpers['extends']({},this.props,{ariaMultiline:this.props.ariaMultiline,mentionResultsComponent:c('MentionsLayer.react'),mentionResultsProps:{typeaheadView:this.props.typeaheadView,typeaheadViewProps:this.props.typeaheadViewProps,offset:this.props.offset,autoflip:this.props.autoflip,position:this.props.position},mentionCreationFn:c('createMentionEntity'),ref:'textEditor',className:"_5yk2",stripPastedStyles:this.props.stripPastedStyles})))};m.propTypes={editorState:l.instanceOf(c('EditorState')).isRequired,mentionsSource:l.object,typeaheadView:l.func.isRequired,typeaheadViewPropTypes:l.object,ariaMultiline:l.bool,spellCheck:l.bool,placeholder:l.string,className:l.string,autoflip:l.bool,position:l.oneOf(['above','below']),renderEmoji:l.bool,webDriverTestID:l.string,handleContentReturn:l.func,handleDroppedFiles:l.func,handlePastedFiles:l.func,onAddMention:l.func,onShowMentions:l.func,onChange:l.func,onInputFocus:l.func,onInputBlur:l.func,stripPastedStyles:l.bool};m.defaultProps={stripPastedStyles:true};f.exports=m}),null);
__d('ReactComposerStatusActions',['ReactComposerDispatcher','ReactComposerStatusActionType','ReactComposerStatusStore'],(function a(b,c,d,e,f,g){c('ReactComposerStatusStore');h.prototype.setMentionsSource=function(i,j){'use strict';var k={composerID:i,type:c('ReactComposerStatusActionType').SET_MENTIONS_SOURCE,mentionsSource:j};c('ReactComposerDispatcher').dispatch(k)};h.prototype.setTypeaheadReporter=function(i,j){'use strict';var k={composerID:i,type:c('ReactComposerStatusActionType').SET_TYPEAHEAD_REPORTER,typeaheadReporter:j};c('ReactComposerDispatcher').dispatch(k)};h.prototype.setEditorState=function(i,j){'use strict';var k={composerID:i,type:c('ReactComposerStatusActionType').SET_EDITOR_STATE,editorState:j};c('ReactComposerDispatcher').dispatch(k)};h.prototype.setOriginalEditorState=function(i,j){'use strict';var k={composerID:i,type:c('ReactComposerStatusActionType').SET_ORIGINAL_EDITOR_STATE,originalEditorState:j};c('ReactComposerDispatcher').dispatch(k)};h.prototype.setMentions=function(i,j){'use strict';var k={composerID:i,type:c('ReactComposerStatusActionType').SET_MENTIONS,mentions:j};c('ReactComposerDispatcher').dispatch(k)};h.prototype.setTextLength=function(i,j){'use strict';c('ReactComposerDispatcher').dispatch({composerID:i,type:c('ReactComposerStatusActionType').SET_TEXT_LENGTH,textLength:j})};function h(){'use strict'}f.exports=new h()}),null);
__d('ReactComposerStatusAttachmentMentionsInput.react',['cx','addEmojiInput','Arbiter','MentionsInput.react','React','ReactComponentWithPureRenderMixin','ReactComposerConfig','ReactComposerContextMixin','ReactComposerEvents','ReactComposerInit','ReactComposerTaggerType','SubscriptionsHandler','XUITypeaheadView.react','joinClasses'],(function a(b,c,d,e,f,g,h){var i=c('React').PropTypes,j=c('addEmojiInput')(c('MentionsInput.react')),k=c('React').createClass({displayName:'ReactComposerStatusAttachmentMentionsInput',_subscriptions:undefined,mixins:[c('ReactComponentWithPureRenderMixin'),c('ReactComposerContextMixin')],propTypes:{config:c('ReactComposerConfig'),mentionsSource:i.object,preventFocus:i.bool,typeaheadReporter:i.object,onChange:i.func,onFocus:i.func,onPasteFiles:i.func},componentWillUnmount:function l(){this.props.onBlur&&this.props.onBlur(this.props.editorState);this._subscriptions&&this._subscriptions.release()},componentWillMount:function l(){var m=new (c('SubscriptionsHandler'))();if(!this.props.preventFocus)m.addSubscriptions(c('Arbiter').subscribe([c('ReactComposerEvents').ACTIVATE_ATTACHMENT+this.context.composerID],function(){return this.focus()}.bind(this)));this._subscriptions=m},render:function l(){var m=this.props.config&&this.props.taggersConfig&&this.props.config.taggersConfig[c('ReactComposerTaggerType').PEOPLE],n=m&&m.typeaheadView?m.typeaheadView:c('XUITypeaheadView.react'),o=m&&m.typeaheadViewProps?m.typeaheadViewProps:{},p=Object.assign({},{ariaMultiline:true,role:'textbox',typeaheadView:n,typeaheadViewProps:o,selectOnTab:false,spellCheck:true},this.props,{className:c('joinClasses')("_1mwp navigationFocus",this.props.className),editorState:this.props.editorState,onAddMention:this._onAddMention,onShowMentions:this._onShowMentions,onFocus:this._onFocus,onBlur:this._onBlur,onChange:this._onChange,maxResults:10});return c('React').createElement(j,babelHelpers['extends']({ref:'mentionsInput'},p,{webDriverTestID:'status-attachment-mentions-input'}))},focus:function l(){if(!c('ReactComposerInit').isInstanceMounted(this.context.composerID)){c('Arbiter').subscribeOnce([c('ReactComposerEvents').INSTANCE_MOUNTED+this.context.composerID],function(){return this.refs.mentionsInput.focus()}.bind(this))}else this.refs.mentionsInput.focus();},blur:function l(){this.refs.mentionsInput.blur()},_onAddMention:function l(m,n,o){var p=this.props.typeaheadReporter;if(p){p.reportSelect(m.getUniqueID(),m.getType(),n,o.button>=0);p.sessionEnd();p.sessionStart()}},_onShowMentions:function l(m,n){var o=this.props.typeaheadReporter;if(o)o.reportResults(m.map(function(p){return p.getUniqueID()}));},_onFocus:function l(){var m=this.props.typeaheadReporter;if(m)m.sessionStart();this.props.onFocus&&this.props.onFocus()},_onChange:function l(m){this.props.onChange&&this.props.onChange(m)},_onBlur:function l(){this.props.typeaheadReporter&&this.props.typeaheadReporter.sessionEnd();this.props.onBlur&&this.props.onBlur(this.props.editorState)}});f.exports=k}),null);
__d('ReactComposerInputDecorator',[],(function a(b,c,d,e,f,g){'use strict';f.exports={NONE:0,MENTIONS:1,RICH_TEXT:2}}),null);
__d('ReactComposerStatusAttachmentMentionsInputVariant.react',['cx','EmojiInputButton.react','Keys','React','ReactComposerActions','ReactComposerAttachmentType','ReactComposerStatusAttachmentMentionsInput.react','ReactComposerStickerContainer','UserAgent_DEPRECATED','emptyFunction','joinClasses'],(function a(b,c,d,e,f,g,h){'use strict';var i,j,k=c('ReactComposerStickerContainer').ReactComposerStickerComponent;i=babelHelpers.inherits(l,c('React').Component);j=i&&i.prototype;function l(m){j.constructor.call(this,m);this.$ReactComposerStatusAttachmentMentionsInputVariant1=function(n){var o=/^image\//;n=n.filter(function(p){return o.test(p.type)});if(n.length>0&&this.props.onPasteFiles){this.props.onPasteFiles(n);return true}return false}.bind(this);this.$ReactComposerStatusAttachmentMentionsInputVariant2=function(event,n){var o=c('UserAgent_DEPRECATED').osx()?event.metaKey:event.ctrlKey;if(event.keyCode===c('Keys').RETURN&&o){this.blur();setTimeout(this.props.onPostIntent,0);return true}return false}.bind(this);this.$ReactComposerStatusAttachmentMentionsInputVariant3=function(){c('ReactComposerActions').expandSprouts(this.props.compositionID)}.bind(this)}l.prototype.render=function(){var m=this.props.config&&this.props.config.attachmentsConfig[c('ReactComposerAttachmentType').STATUS],n=null;if(this.props.useRichTextEditor){var o=m.richTextEditor;n=c('React').createElement(o,babelHelpers['extends']({},this.props,{className:c('joinClasses')(this.props.className,"_3w8y _21mu"),canAttachVideo:false,canAttachPhoto:false,canAttachEmbed:false,onSave:c('emptyFunction'),spellCheck:true,autoCorrect:false,handlePastedFiles:this.$ReactComposerStatusAttachmentMentionsInputVariant1,handleContentReturn:this.$ReactComposerStatusAttachmentMentionsInputVariant2,ref:'mentionsInput'}))}else n=c('React').createElement(c('ReactComposerStatusAttachmentMentionsInput.react'),babelHelpers['extends']({},this.props,{className:c('joinClasses')(this.props.className,(this.props.isSelectedAttachmentActive?"_1mwq":'')+(this.props.config&&this.props.config.showExpandedComposer?' '+"_4c_p":'')+(m&&m.showProfilePic?' '+"_5bu_":'')+(this.props.isPosting?' '+"_1udp":'')+(this.props.shouldUseLargeText?' '+"_17nh":'')+(m&&m.largeTextThreshold?' '+"_34nd":'')+(' '+"_21mu")+(this.props.sticker&&this.props.sticker.stickerID?' '+"_hjn":'')),ref:'mentionsInput',readOnly:this.props.isPosting,editorState:this.props.editorState,mentionsSource:this.props.mentionsSource,typeaheadReporter:this.props.typeaheadReporter,handlePastedFiles:this.$ReactComposerStatusAttachmentMentionsInputVariant1,handleContentReturn:this.$ReactComposerStatusAttachmentMentionsInputVariant2}));var p="_3nc-",q="_3nc_",r="_5zq9",s=c('React').createElement(c('EmojiInputButton.react'),{buttonClassName:p,iconActiveClassName:r,iconClassName:q,onSelect:this.props.onInsertEmoji,onClick:this.$ReactComposerStatusAttachmentMentionsInputVariant3}),t=null;if(k)t=c('React').createElement(k,{sticker:this.props.sticker,composerID:this.props.compositionID});return c('React').createElement('div',{className:"_3nd0"},t,n,s)};l.prototype.blur=function(){this.refs.mentionsInput.blur()};l.prototype.focus=function(){this.refs.mentionsInput.focus()};f.exports=l}),null);
__d('ImplicitLink.react',['cx','React'],(function a(b,c,d,e,f,g,h){var i,j;i=babelHelpers.inherits(k,c('React').Component);j=i&&i.prototype;k.prototype.render=function(){'use strict';return c('React').createElement('span',{'data-offset-key':this.props.offsetKey,className:"_2ou",spellCheck:false},this.props.children)};function k(){'use strict';i.apply(this,arguments)}f.exports=k}),null);
__d('getRichTextInputDecorator',['CompositeDraftDecorator','EmojiSpan.react','EmoticonSpan.react','HashtagSpan.react','ImplicitLink.react','MentionSpan.react','RichTextEditorLink.react','WeakMentionSpan.react','getEntityMatcher','getHashtagMatches','getImplicitURLMatches'],(function a(b,c,d,e,f,g){var h;function i(){if(!h)h=new (c('CompositeDraftDecorator'))([{strategy:c('getEntityMatcher')(function(j){var k=j.getData();return j.getType()==='MENTION'&&k&&k.isWeak}),component:c('WeakMentionSpan.react')},{strategy:c('getEntityMatcher')(function(j){return j.getType()==='MENTION'}),component:c('MentionSpan.react')},{strategy:c('getEntityMatcher')(function(j){return j.getType()==='EMOTICON'}),component:c('EmoticonSpan.react')},{strategy:c('getHashtagMatches'),component:c('HashtagSpan.react')},{strategy:c('getEntityMatcher')(function(j){return j.getType()==='EMOJI'}),component:c('EmojiSpan.react')},{strategy:c('getEntityMatcher')(function(j){return j.getType()==='LINK'}),component:c('RichTextEditorLink.react')},{strategy:c('getImplicitURLMatches'),component:c('ImplicitLink.react')}]);return h}f.exports=i}),null);
__d('getReactComposerEmojiInputDecorator',['EmojiInputDecorator','EmojiSpan.react','ReactComposerInputDecorator','getMentionsInputDecorator','getRichTextInputDecorator','memoizeWithArgs'],(function a(b,c,d,e,f,g){'use strict';var h=c('memoizeWithArgs')(function(i,j){var k=null;if(i===c('ReactComposerInputDecorator').RICH_TEXT){k=c('getRichTextInputDecorator')()}else if(i===c('ReactComposerInputDecorator').MENTIONS)k=c('getMentionsInputDecorator')();if(j)k=new (c('EmojiInputDecorator'))(c('EmojiSpan.react'),k,{size:j});return k},function(i,j){if(!j)return '#'+i;return i+'_'+j});f.exports=h}),null);
__d('ReactComposerStatusAttachmentMentionsInputContainer.react',['Arbiter','EditorState','LitestandStoryInsertionStatus','React','ReactComponentWithPureRenderMixin','ReactComposerActions','ReactComposerAttachmentStore','ReactComposerAttachmentType','ReactComposerConfig','ReactComposerContextMixin','getReactComposerEmojiInputDecorator','ReactComposerEvents','ReactComposerHandleUnsavedChanges','ReactComposerInputDecorator','ReactComposerMediaUploadStore','ReactComposerMinutiaeAttachmentStore','ReactComposerPropsAndStoreBasedStateMixin','ReactComposerScrapedAttachmentStore','ReactComposerStatusActions','ReactComposerStatusAttachmentMentionsInputVariant.react','ReactComposerStatusStore','ReactComposerStatusUtils','ReactComposerStore','ReactComposerTaggerStore','ReactComposerTaggerType','TextDelightEvents','UnicodeUtils','addEmojiToEditorState','ifRequired'],(function a(b,c,d,e,f,g){var h=c('React').PropTypes,i=function k(l,m){var n=c('ReactComposerAttachmentStore').getSelectedAttachmentID(l);if(n===c('ReactComposerAttachmentType').LIVE_VIDEO||n===c('ReactComposerAttachmentType').SELL)return false;var o=m&&m.attachmentsConfig[c('ReactComposerAttachmentType').STATUS],p=c('ReactComposerTaggerStore').hasMarkdown(l);return !!(o&&o.richTextEditor&&!p)},j=c('React').createClass({displayName:'ComposerStatusAttachmentMentionsInputContainer',_rerenderSubscription:undefined,mixins:[c('ReactComponentWithPureRenderMixin'),c('ReactComposerContextMixin'),c('ReactComposerPropsAndStoreBasedStateMixin')(c('ReactComposerAttachmentStore'),c('ReactComposerMediaUploadStore'),c('ReactComposerMinutiaeAttachmentStore'),c('ReactComposerScrapedAttachmentStore'),c('ReactComposerStatusStore'),c('ReactComposerStore'),c('ReactComposerTaggerStore'))],propTypes:{config:c('ReactComposerConfig'),mentionsEnabled:h.bool,mentionsSource:h.object,onChange:h.func,onFocus:h.func,onPasteFiles:h.func,handlePastedText:h.func},getDefaultProps:function k(){return {mentionsEnabled:true}},getInitialState:function k(){return {isFocused:false}},statics:{calculateState:function k(l,m){var n=c('ReactComposerStatusStore').getEditorState(l),o=m.config&&m.config.attachmentsConfig[c('ReactComposerAttachmentType').STATUS],p=false,q=c('ReactComposerStatusStore').getTextLength(l),r=c('ReactComposerAttachmentStore').isSelectedAttachmentActive(l),s=c('ReactComposerAttachmentStore').getSelectedAttachmentID(l),t=i(l,m.config),u=c('ReactComposerInputDecorator').NONE;if(m.mentionsEnabled)u=o&&o.richTextEditor?c('ReactComposerInputDecorator').RICH_TEXT:c('ReactComposerInputDecorator').MENTIONS;if(o&&o.largeTextThreshold&&c('ReactComposerMediaUploadStore').getUploadsCount(l)===0&&!c('ReactComposerScrapedAttachmentStore').hasAttachment(l)&&!c('ReactComposerTaggerStore').hasExplicitLocation(l)&&!c('ReactComposerTaggerStore').hasMarkdown(l)&&c('ReactComposerMinutiaeAttachmentStore').getMarkup(l)===null&&s!==c('ReactComposerAttachmentType').FIND_PLAYERS&&s!==c('ReactComposerAttachmentType').SELL){if(!q&&n){var v=n.getCurrentContent();q=c('UnicodeUtils').strlen(v.getPlainText())}var w=m.config.attachmentsConfig[c('ReactComposerAttachmentType').STATUS].placeholderText;if(w&&w.length<=o.LargePlaceholderTextThreshold&&q===0&&r||q!==0&&q<=o.largeTextThreshold)p=true;c('ifRequired')('ReactComposerFormattedTextStore',function(z){var aa=z.getSelectedIndex(l);if(aa>-1){p=true;u=m.mentionsEnabled?c('ReactComposerInputDecorator').MENTIONS:c('ReactComposerInputDecorator').NONE;t=false}})}var x=c('getReactComposerEmojiInputDecorator')(u,p&&!t?28:16),y;if(n){if(n.getDecorator()!==x){y=c('EditorState').set(n,{decorator:x});c('ReactComposerStatusActions').setEditorState(l,y)}else y=n;}else{y=c('EditorState').createEmpty(x);c('ReactComposerStatusActions').setEditorState(l,y)}return {activeEditorState:c('ReactComposerStatusStore').getActiveEditorState(l),editorState:y,isSelectedAttachmentActive:c('ReactComposerAttachmentStore').isSelectedAttachmentActive(l),mentionsSource:m.mentionsEnabled?c('ReactComposerStatusStore').getMentionsSource(l):null,posting:c('ReactComposerStore').isPosting(l),typeaheadReporter:c('ReactComposerStatusStore').getTypeaheadReporter(l),shouldUseLargeText:p,selectedSticker:c('ReactComposerTaggerStore').getTaggerData(l,c('ReactComposerTaggerType').STICKER),useRichText:t}}},componentWillMount:function k(){if(this.props.mentionsSource)c('ReactComposerStatusActions').setMentionsSource(this.context.composerID,this.props.mentionsSource);this._storyInsertionBlocker=c('LitestandStoryInsertionStatus').registerBlocker(function(){return c('ReactComposerHandleUnsavedChanges').hasUnsavedChanges(this.context.composerID)||this.state.isFocused}.bind(this))},componentDidMount:function k(){var l=c('ReactComposerStatusStore').getEditorState(this.context.composerID);if(this.state.editorState!==l){this._pendingEditorStateUpdateFromMount=l;this.setState({editorState:l},function(){this._pendingEditorStateUpdateFromMount=undefined}.bind(this))}this._rerenderSubscription=c('Arbiter').subscribe(c('ReactComposerEvents').RERENDER_MENTION_INPUT+this.context.composerID,function(){this.setState({editorState:c('ReactComposerStatusStore').getEditorState(this.context.composerID)})}.bind(this))},componentWillReceiveProps:function k(l){if(this.props.mentionsSource!==l.mentionsSource)c('ReactComposerStatusActions').setMentionsSource(this.context.composerID,l.mentionsSource);if(l.editorState===null){var m=c('EditorState').createEmpty(c('getReactComposerEmojiInputDecorator')(c('ReactComposerInputDecorator').MENTIONS));c('ReactComposerStatusActions').setEditorState(this.context.composerID,m);this.setState({editorState:m})}},componentWillUnmount:function k(){this._prefillSubscription&&this._prefillSubscription.unsubscribe();this._prefillSubscription=null;this._storyInsertionBlocker&&this._storyInsertionBlocker.unsubscribe();this._storyInsertionBlocker=null;this._rerenderSubscription&&this._rerenderSubscription.unsubscribe()},render:function k(){return c('React').createElement(c('ReactComposerStatusAttachmentMentionsInputVariant.react'),babelHelpers['extends']({},this.props,{activeEditorState:this.state.activeEditorState,compositionID:this.context.composerID,editorState:this.state.editorState,isSelectedAttachmentActive:this.state.isSelectedAttachmentActive,isPosting:this.state.posting,mentionsSource:this.state.mentionsSource,onBlur:this._onBlur,onChange:this._onChange,onFocus:this._onFocus,onInsertEmoji:this._onInsertEmoji,onPostIntent:this._onPostIntent,ownerID:this.context.actorID,ref:'mentionsInput',shouldUseLargeText:this.state.shouldUseLargeText,typeaheadReporter:this.state.typeaheadReporter,useRichTextEditor:this.state.useRichText,sticker:this.state.selectedSticker}))},focus:function k(){this.refs.mentionsInput.focus();if(this._pendingEditorStateUpdateFromMount!==undefined)this.setState({editorState:this._pendingEditorStateUpdateFromMount},function(){return this.refs.mentionsInput.focus()}.bind(this));},_onFocus:function k(){c('Arbiter').inform(c('ReactComposerEvents').MENTION_INPUT_FOCUS+this.context.composerID);this.setState({isFocused:true});this.props.onFocus&&this.props.onFocus()},_onChange:function k(l){if(this._pendingEditorStateUpdateFromMount!==undefined)return;var m=0;if(l){var n=l.getCurrentContent();m=n?c('UnicodeUtils').strlen(n.getPlainText()):0;if(c('ReactComposerStatusStore').getEditorState(this.context.composerID)!==l){c('ReactComposerStatusActions').setEditorState(this.context.composerID,l);c('ReactComposerStatusActions').setTextLength(this.context.composerID,m);if(n)c('TextDelightEvents').emitScrapablePost(n.getPlainText());}}this._handleMarkdownChange(l);this.props.onChange&&this.props.onChange(l);this.setState({editorState:l})},_onInsertEmoji:function k(l){var m=c('ReactComposerStatusStore').getActiveEditorState(this.context.composerID),n=c('ReactComposerStatusStore').getActiveLanguageDialect(this.context.composerID);c('addEmojiToEditorState')(l,m,n==null?this._onChange:this._onMultilingualEditorChange)},_onMultilingualEditorChange:function k(l){var m=this.context.composerID,n=c('ReactComposerStatusStore').getActiveEditorState(m),o=c('ReactComposerStatusStore').getActiveLanguageDialect(m);if(n!==l)c('ifRequired')('ReactComposerMultilingualStatusActions',function(p){p.setEditorState(m,o,l)});},_handleMarkdownChange:function k(l){var m=this.props.config?this.props.config.attachmentsConfig[c('ReactComposerAttachmentType').STATUS]:null;c('ReactComposerStatusUtils').handleMarkdownPreview(this.context.composerID,this.context.targetID,m?m.markdownPreviewAttachment:null,l)},_onBlur:function k(l){c('ReactComposerStatusActions').setEditorState(this.context.composerID,l);this.setState({isFocused:false})},_onPostIntent:function k(){c('ReactComposerActions').postIntended(this.context.composerID,{actorID:this.context.actorID,config:this.props.config,targetID:this.context.targetID})}});f.exports=j}),null);
__d('ReactComposerStatusAttachmentMentionsInputWithTagExpansionContainer.react',['cx','React','ReactComponentWithPureRenderMixin','ReactComposerContextMixin','ReactComposerStatusActions','ReactComposerStatusAttachmentMentionsInputContainer.react','joinClasses'],(function a(b,c,d,e,f,g,h){var i=c('React').createClass({displayName:'ComposerStatusAttachmentMentionsInputWithTagExpansionContainer',mixins:[c('ReactComponentWithPureRenderMixin'),c('ReactComposerContextMixin')],render:function j(){var k=c('joinClasses')(this.props.className,"_395");return c('React').createElement(c('ReactComposerStatusAttachmentMentionsInputContainer.react'),babelHelpers['extends']({},this.props,{className:k,onChange:this._onChange,ref:'mentionsInput'}))},focus:function j(){this.refs.mentionsInput.focus()},insertEmoji:function j(k){this.refs.mentionsInput.insertEmoji(k)},_onChange:function j(k){c('ReactComposerStatusActions').setMentions(this.context.composerID,this._getMentionsFromEditorState(k));this.props.onChange&&this.props.onChange(k)},_getMentionsFromEditorState:function j(k){var l=k.getCurrentContent(),m={};l.getBlockMap().forEach(function(n){var o=n.getText();n.findEntityRanges(function(){return true},function(p,q){var r=n.getEntityAt(p);if(!r)return;var s=l.getEntity(r);if(s.getType()!=='MENTION'||s.getData().type!=='user')return;var t=s.getData().id;m[t]={type:'user',uid:t,text:o.slice(p,q),isWeak:s.getData().isWeak}})});return m}});f.exports=i}),null);
__d('MentionsInputUtility',['UnicodeUtils','createEditorStateWithEntities','sanitizeDraftText'],(function a(b,c,d,e,f,g){var h=new RegExp(/@\[(\d+):((\\\]|[^\]])+)\]/g),i=new RegExp(/@\[(\d+):(\d+):((\\\]|[^\]])+)\]/g),j=function m(n){var o=c('sanitizeDraftText')(n),p=o.replace(i,'@[$1:$3]'),q=[],r;while(r=h.exec(p)){var s=r[2].replace(/\\:/g,':').replace(/\\]/g,']').replace(/\n/g,''),t={uid:r[1],text:s,offset:r.index,length:s.length,weakreference:false,entity:{uid:r[1],weakreference:false}};q.push(t);p=p.substr(0,t.offset)+t.text+p.substr(t.offset+r[0].length);h.lastIndex=t.offset+t.length}return {text:p,ranges:q}};function k(m,n){var o=0,p=0;n.forEach(function(q){var r=void 0,s=void 0;r=q.offset;s=m.slice(o,r);p+=s.length-c('UnicodeUtils').strlen(s);o=r;var t=r-p;r=q.offset+q.length;s=m.slice(o,r);p+=s.length-c('UnicodeUtils').strlen(s);o=r;var u=r-p;q.offset=t;q.length=u-t})}function l(m,n){var o=j(m),p=o.text,q=o.ranges;k(p,q);return c('createEditorStateWithEntities')({text:p,ranges:q,decorator:n,addEntityToContentStateFn:function r(s,t){return t.createEntity('MENTION','IMMUTABLE',{id:s.uid,isWeak:s.weakreference})},splitIntoBlocks:true,allowUndo:true})}f.exports={createFromTextWithMentions:l}}),null);
__d('ReactComposerMultilingualStatusStore',['immutable','MentionsInputUtility','ReactComposerMultilingualStatusActionType','ReactComposerStoreBase','getMentionsInputDecorator','getMentionsTextForContentState'],(function a(b,c,d,e,f,g){var h,i,j=c('immutable').Record({languageDialect:null,editorState:null});h=babelHelpers.inherits(k,c('ReactComposerStoreBase'));i=h&&h.prototype;function k(){'use strict';var l;i.constructor.call(this,function(){return {statuses:c('immutable').List(),specifiedPostLanguage:''}},function(m){switch(m.type){case c('ReactComposerMultilingualStatusActionType').MOUNTED_MULTILINGUAL_STATUS:l&&l.$ReactComposerMultilingualStatusStore1(m);break;case c('ReactComposerMultilingualStatusActionType').LANGUAGE_CREATED:l&&l.$ReactComposerMultilingualStatusStore2(m);break;case c('ReactComposerMultilingualStatusActionType').LANGUAGE_REMOVED:l&&l.$ReactComposerMultilingualStatusStore3(m);break;case c('ReactComposerMultilingualStatusActionType').LANGUAGE_CHANGED:l&&l.$ReactComposerMultilingualStatusStore4(m);break;case c('ReactComposerMultilingualStatusActionType').SET_LANGUAGE_EDITOR_STATE:l&&l.$ReactComposerMultilingualStatusStore5(m);break;case c('ReactComposerMultilingualStatusActionType').SET_SPECIFIED_POST_LANGUAGE:l&&l.$ReactComposerMultilingualStatusStore6(m);break;case c('ReactComposerMultilingualStatusActionType').PREFILL_MULTILINGUAL_DATA:l&&l.$ReactComposerMultilingualStatusStore7(m);break;}});l=this}k.prototype.getAllPostDialects=function(l){'use strict';var m=this.getLanguageDialects(l);m.push(this.getSpecifiedPostLanguage(l));return m};k.prototype.getSpecifiedPostLanguage=function(l){'use strict';return this.getComposerData(l).specifiedPostLanguage};k.prototype.getLanguageDialects=function(l){'use strict';return this.getStatuses(l).map(function(m){return m.languageDialect}).toArray()};k.prototype.getEditorStates=function(l){'use strict';return this.getStatuses(l).map(function(m){return m.editorState}).toArray()};k.prototype.getMessages=function(l){'use strict';return this.getStatuses(l).map(function(m){return this.$ReactComposerMultilingualStatusStore8(m)}.bind(this)).toArray()};k.prototype.getMessage=function(l,m){'use strict';var n=this.getStatus(l,m);return this.$ReactComposerMultilingualStatusStore8(n)};k.prototype.getStatuses=function(l){'use strict';return this.getComposerData(l).statuses};k.prototype.getStatus=function(l,m){'use strict';var n=this.getComposerData(l),o=this.$ReactComposerMultilingualStatusStore9(n.statuses,m);return n.statuses.get(o)};k.prototype.getPostData=function(l){'use strict';var m=this.getMessages(l);if(m.length===0)return {};return {multilingual_specified_lang:this.getSpecifiedPostLanguage(l),multilingual_status_langs:this.getLanguageDialects(l),multilingual_statuses:m}};k.prototype.$ReactComposerMultilingualStatusStore9=function(l,m){'use strict';var n=l.findIndex(function(o){return o.languageDialect===m});if(n===-1)throw new Error('Undefined status language dialect: '+m);return n};k.prototype.$ReactComposerMultilingualStatusStore8=function(l){'use strict';var m=l.editorState.getCurrentContent();return c('getMentionsTextForContentState')(m)};k.prototype.$ReactComposerMultilingualStatusStore2=function(l){'use strict';var m=this.validateAction(l,['composerID','languageDialect','languageConfig']),n=m[0],o=m[1],p=m[2],q=this.getComposerData(n),r=new j({languageDialect:o,editorState:p.editorState});q.statuses=q.statuses.push(r);this.emitChange(n)};k.prototype.$ReactComposerMultilingualStatusStore3=function(l){'use strict';var m=this.validateAction(l,['composerID','languageDialect']),n=m[0],o=m[1],p=this.getComposerData(n),q=this.$ReactComposerMultilingualStatusStore9(p.statuses,o);p.statuses=p.statuses.splice(q,1);this.emitChange(n)};k.prototype.$ReactComposerMultilingualStatusStore4=function(l){'use strict';var m=this.validateAction(l,['composerID','oldLanguageDialect','newLanguageDialect']),n=m[0],o=m[1],p=m[2],q=this.getComposerData(n),r=this.$ReactComposerMultilingualStatusStore9(q.statuses,o);q.statuses=q.statuses.set(r,new j({languageDialect:p,editorState:q.statuses.get(r).editorState}));this.emitChange(n)};k.prototype.$ReactComposerMultilingualStatusStore5=function(l){'use strict';var m=this.validateAction(l,['composerID','languageDialect','editorState']),n=m[0],o=m[1],p=m[2],q=this.getComposerData(n),r=this.$ReactComposerMultilingualStatusStore9(q.statuses,o);q.statuses=q.statuses.set(r,new j({languageDialect:o,editorState:p}));this.emitChange(n)};k.prototype.$ReactComposerMultilingualStatusStore1=function(l){'use strict';this.$ReactComposerMultilingualStatusStore6(l)};k.prototype.$ReactComposerMultilingualStatusStore6=function(l){'use strict';var m=this.validateAction(l,['composerID','languageDialect']),n=m[0],o=m[1],p=this.getComposerData(n);p.specifiedPostLanguage=o;this.emitChange(n)};k.prototype.$ReactComposerMultilingualStatusStore7=function(l){'use strict';var m=this.validateAction(l,['composerID','multilingualData']),n=m[0],o=m[1],p=this.getComposerData(n);p.specifiedPostLanguage=o.specifiedDialect;o.multilingualStatuses.forEach(function(q){p.statuses=p.statuses.push(new j({languageDialect:q.dialect,editorState:c('MentionsInputUtility').createFromTextWithMentions(q.message,c('getMentionsInputDecorator')())}))});this.emitChange(n)};f.exports=new k()}),null);
__d('getViewerRecordID',['RelayStore'],(function a(b,c,d,e,f,g){'use strict';var h=c('RelayStore').getStoreData();function i(){return h.getCachedStore().getDataID('viewer')}f.exports=i}),null);