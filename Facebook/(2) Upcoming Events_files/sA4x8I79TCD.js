if (self.CavalryLogger) { CavalryLogger.start_js(["rSuaG"]); }

__d('EmbeddedVideoSettingsMenu.react',['cx','fbt','React','URI','MessengerEnvironment','shallowCompare','isFacebookURI'],(function a(b,c,d,e,f,g,h,i){var j,k,l=c('React').PropTypes,m=/(instagram)/g;j=babelHelpers.inherits(n,c('React').Component);k=j&&j.prototype;function n(){'use strict';k.constructor.call(this)}n.prototype.shouldComponentUpdate=function(o,p){'use strict';return c('shallowCompare')(this,o,p)};n.prototype.componentWillMount=function(){'use strict';this.setState({autoSelectVideoQuality:this.props.canAutoSelectVideoQuality})};n.prototype.createMenuItem=function(o,p,q,r,s){var t=arguments.length<=5||arguments[5]===undefined?false:arguments[5];'use strict';var u=function aa(){};if(p)u=function aa(ba){r();ba.preventDefault()};var v="_4v8v"+(!p?' '+"_5rk-":''),w=void 0;if(s==='checkBox'){var x=null;if(p&&q)x=c('React').createElement('div',{className:"_25d1"});w=c('React').createElement('div',{className:"_4v8w"},x)}else if(s==='radioButton'){var y=null;if(p&&q)y=c('React').createElement('div',{className:"_2xyd"});w=c('React').createElement('div',{className:"_2xyg"},y)}var z=o;if(t)z=c('React').createElement('div',null,o.slice(0,-1),c('React').createElement('div',{className:"_2m1t"}));return c('React').createElement('a',{href:'#',key:o,className:v,onBlur:this.props.onBlurMenuItem,onClick:u,onFocus:this.props.onFocusMenuItem,tabIndex:this.props.tabIndex},w,c('React').createElement('div',{className:"_4v8x"},z))};n.prototype.showQualitySelector=function(){'use strict';return this.props.showQualitySelector&&this.props.streamingFormat==='dash'&&!!this.props.availableQualities&&this.props.availableQualities.length>=this.props.qualitySelectorMinStreams&&this.props.availableQualities.every(function(o){return !!o})};n.prototype.render=function(){'use strict';var o=null,p=null,q=null;if(this.showQualitySelector()&&this.props.availableQualities){o=this.props.availableQualities.map(function(w){return this.createMenuItem(w,true,w==this.props.selectedQuality,function(){this.setState({autoSelectVideoQuality:false});this.props.onSelectQuality(w)}.bind(this),'radioButton',this.props.isSphericalVideo)}.bind(this));p=this.createMenuItem(i._("Auto"),this.props.canAutoSelectVideoQuality,this.state.autoSelectVideoQuality,function(){this.setState({autoSelectVideoQuality:true});this.props.onSelectQuality(null)}.bind(this),'checkBox');o.reverse()}else q=this.createMenuItem(i._("HD"),this.props.hasHD,this.props.isHD,this.props.onToggleHD,'checkBox');var r=this.createMenuItem(i._("Captions"),this.props.hasSubtitles,this.props.areSubtitlesActive,this.props.onToggleSubtitles,'checkBox'),s=i._("More Settings"),t=new (c('URI'))('/settings/?tab=videos'),u=t.getQualifiedURI().getSubdomain();if(u==='business'||u==='partners')t.setSubdomain('www');if(!c('isFacebookURI')(t))t.setDomain(t.getDomain().replace(m,'facebook'));if(c('MessengerEnvironment').messengerui)t.setDomain('facebook.com').setSubdomain(u).setProtocol('https');var v=c('React').createElement('a',{href:t,target:'_blank',className:"_5rl2",onBlur:this.props.onBlurMenuItem,onFocus:this.props.onFocusMenuItem,tabIndex:this.props.tabIndex},s);return c('React').createElement('div',{className:"_4v8y"},c('React').createElement('div',{className:"_28h1"},q,p,o,r,v),c('React').createElement('div',{className:"_4v8z"}))};n.propTypes={areSubtitlesActive:l.bool,hasHD:l.bool,hasSubtitles:l.bool,isHD:l.bool,isSphericalVideo:l.bool,onToggleHD:l.func,onToggleSubtitles:l.func,tabIndex:l.string,availableQualities:l.array,selectedQuality:l.string,canAutoSelectVideoQuality:l.bool,onSelectQuality:l.func,showQualitySelector:l.bool,qualitySelectorMinStreams:l.number,streamingFormat:l.string};n.defaultProps={tabIndex:'-1',availableQualities:null,selectedQuality:null,canAutoSelectVideoQuality:false,showQualitySelector:false,qualitySelectorMinStreams:2,streamingFormat:null,onSelectQuality:function o(){}};f.exports=n}),null);
__d('EmbeddedVideoSettingsControl.react',['ix','cx','fbt','AbstractButton.react','BanzaiODS','Image.react','React','ReactDOM','EmbeddedVideoSettingsMenu.react','fbglyph','setImmediate','shallowCompare'],(function a(b,c,d,e,f,g,h,i,j){var k,l,m=c('React').PropTypes;k=babelHelpers.inherits(n,c('React').Component);l=k&&k.prototype;function n(o){'use strict';l.constructor.call(this,o);this.state={isFocus:false,isFocusMenuItem:false}}n.prototype.shouldComponentUpdate=function(o,p){'use strict';return c('shallowCompare')(this,o,p)};n.prototype.onMouseOut=function(o){'use strict';c('ReactDOM').findDOMNode(this.refs.button).blur()};n.prototype.onButtonFocus=function(o){'use strict';this.setState({isFocus:true})};n.prototype.onButtonBlur=function(){'use strict';this.setState({isFocusMenuItem:false});c('setImmediate')(function(){if(!this.state.isFocusMenuItem)this.setState({isFocus:false});}.bind(this))};n.prototype.onMouseEnter=function(o){'use strict';if(!this.props.disabled&&this.refs.menu.showQualitySelector())c('BanzaiODS').bumpEntityKey('videos','quality_selector.impression');};n.prototype.render=function(){'use strict';var o=c('React').createElement(c('Image.react'),{className:"_5i0o",src:h("115021")}),p=j._("Additional Visual Settings"),q=null;if(!this.props.disabled)q=c('React').createElement('div',{className:"_42fl"+(this.state.isFocus?' '+"_4v4":'')},c('React').createElement(c('EmbeddedVideoSettingsMenu.react'),{areSubtitlesActive:this.props.areSubtitlesActive,hasHD:this.props.hasHD,hasSubtitles:this.props.hasSubtitles,isHD:this.props.isHD,isSphericalVideo:this.props.isSphericalVideo,onBlurMenuItem:this.onButtonBlur.bind(this),onFocusMenuItem:function(){this.setState({isFocusMenuItem:true})}.bind(this),onToggleHD:this.props.onToggleHD,onToggleSubtitles:this.props.onToggleSubtitles,tabIndex:this.props.tabIndex,availableQualities:this.props.availableQualities,selectedQuality:this.props.selectedQuality,canAutoSelectVideoQuality:this.props.canAutoSelectVideoQuality,onSelectQuality:this.props.onSelectQuality,showQualitySelector:this.props.showQualitySelector,qualitySelectorMinStreams:this.props.qualitySelectorMinStreams,streamingFormat:this.props.streamingFormat,ref:'menu'}));var r="_3u33"+(this.props.disabled?' '+"_17bp":''),s=c('React').createElement(c('AbstractButton.react'),{className:r,disabled:this.props.disabled,image:o,label:p,labelIsHidden:true,onBlur:this.onButtonBlur.bind(this),onFocus:this.onButtonFocus.bind(this),onMouseOut:this.onMouseOut.bind(this),ref:'button',tabIndex:this.props.tabIndex,type:'button'});return c('React').createElement('div',{className:"_1esn",onMouseEnter:this.onMouseEnter.bind(this)},q,s)};n.propTypes={disabled:m.bool,hasHD:m.bool,hasSubtitles:m.bool,isHD:m.bool,isSphericalVideo:m.bool,areSubtitlesActive:m.bool,onToggleHD:m.func,onToggleSubtitles:m.func,tabIndex:m.string,availableQualities:m.array,selectedQuality:m.string,canAutoSelectVideoQuality:m.bool,onSelectQuality:m.func,showQualitySelector:m.bool,qualitySelectorMinStreams:m.number,streamingFormat:m.string};n.defaultProps={tabIndex:'-1'};f.exports=n}),null);