if (self.CavalryLogger) { CavalryLogger.start_js(["yStxi"]); }

__d('InsightsInfoTip.react',['cx','ix','Image.react','React','ReactDOM','Tooltip','joinClasses'],(function a(b,c,d,e,f,g,h,i){var j,k,l=c('React').PropTypes;j=babelHelpers.inherits(m,c('React').Component);k=j&&j.prototype;function m(){var n,o;'use strict';for(var p=arguments.length,q=Array(p),r=0;r<p;r++)q[r]=arguments[r];return o=(n=k.constructor).call.apply(n,[this].concat(q)),this.$InsightsInfoTip1=function(){c('Tooltip').set(c('ReactDOM').findDOMNode(this.refs.root),c('ReactDOM').findDOMNode(this.refs.tooltip).cloneNode(true),this.props.position,this.props.alignH)}.bind(this),o}m.prototype.componentDidMount=function(){'use strict';this.$InsightsInfoTip1()};m.prototype.componentDidUpdate=function(n){'use strict';this.$InsightsInfoTip1()};m.prototype.componentWillUnmount=function(){'use strict';if(this.refs.icon)c('Tooltip').remove(c('ReactDOM').findDOMNode(this.refs.icon));};m.prototype.render=function(){'use strict';var n=i("76155"),o=null;if(!this.props.noImage)o=c('React').createElement(c('Image.react'),{className:"_5j1g",src:n,ref:'icon'});var p=c('joinClasses')("_5j1f",this.props.className);return c('React').createElement('span',{className:p,ref:'root'},this.props.children,o,c('React').createElement('div',{className:"_5j1h"},c('React').createElement('div',{className:"_5j1i",ref:'tooltip'},this.props.tip)))};m.propTypes={alignH:l.oneOf(['center','left','right']),position:l.oneOf(['above','below','left','right'])};m.defaultProps={alignH:'right',position:'above'};f.exports=m}),null);
__d('PageInsightsSponsoredPostsTableUnavailableContent.react',['cx','fbt','React','Tooltip.react'],(function a(b,c,d,e,f,g,h,i){'use strict';var j,k,l=c('React').Component,m=c('React').PropTypes;j=babelHelpers.inherits(n,l);k=j&&j.prototype;n.prototype.render=function(){return c('React').createElement('div',{className:"_1zb1"},c('React').createElement(c('Tooltip.react'),{tooltip:i._("This information is unavailable for {type}",[i.param('type',this.props.type)])},'-'))};function n(){j.apply(this,arguments)}n.propTypes={type:m.string.isRequired};f.exports=n}),null);
__d("sumOfArray",[],(function a(b,c,d,e,f,g){function h(i){var j=0,k=i.length;for(var l=0;l<k;++l)j+=i[l];return j}f.exports=h}),null);
__d('XUIBackgroundBar.react',['cx','React','sumOfArray'],(function a(b,c,d,e,f,g,h){var i,j;i=babelHelpers.inherits(k,c('React').Component);j=i&&i.prototype;function k(){var l,m;'use strict';for(var n=arguments.length,o=Array(n),p=0;p<n;p++)o[p]=arguments[p];return m=(l=j.constructor).call.apply(l,[this].concat(o)),this.getColorAtIndex=function(q){if(Array.isArray(this.props.colors)){return this.props.colors[q]}else return this.props.colors(q);}.bind(this),m}k.prototype.render=function(){'use strict';var l=this.props.values,m=c('sumOfArray')(l),n=this.props.scale;n.rangeRound([0,100]);var o={width:n(m)+'%'};function p(q,r){if(r>0&&q===0)return null;var s=n(m)!==0?100*n(q)/n(m)+'%':'0',t={backgroundColor:this.getColorAtIndex(r),width:s};return c('React').createElement('div',{className:"_5abn",key:r,style:t})}return c('React').createElement('div',{className:"_5abm",style:o},l.map(p,this),c('React').createElement('div',{className:"_352g"}))};f.exports=k}),null);
__d('InsightsBackgroundBar.react',['cx','PageInsightsSponsoredPostsTableUnavailableContent.react','React','ReactDOM','Tooltip','XUIBackgroundBar.react','joinClasses','sumOfArray'],(function a(b,c,d,e,f,g,h){var i,j,k=c('React').PropTypes;i=babelHelpers.inherits(l,c('React').Component);j=i&&i.prototype;function l(){var m,n;'use strict';for(var o=arguments.length,p=Array(o),q=0;q<o;q++)p[q]=arguments[q];return n=(m=j.constructor).call.apply(m,[this].concat(p)),this.$InsightsBackgroundBar1=function(){var r=c('sumOfArray')(this.props.values||[]),s=this.props.forceTooltip||this.props.values.length>=2;if(!s||r===0){c('Tooltip').remove(c('ReactDOM').findDOMNode(this.refs.bar))}else c('Tooltip').set(c('ReactDOM').findDOMNode(this.refs.bar),c('ReactDOM').findDOMNode(this.refs.tooltip).cloneNode(true),'above','center');}.bind(this),n}l.prototype.componentDidMount=function(){'use strict';this.$InsightsBackgroundBar1()};l.prototype.componentDidUpdate=function(m){'use strict';if(m.values!=this.props.values)this.$InsightsBackgroundBar1();};l.prototype.componentWillUnmount=function(){'use strict';c('Tooltip').remove(c('ReactDOM').findDOMNode(this.refs.bar))};l.prototype.render=function(){'use strict';var m="_5kmz"+(this.props.tall?' '+"_5km-":'')+(this.props.single?' '+"_5km_":'')+(this.props["short"]?' '+"_5vip":'')+(this.props.thin?' '+"_608_":''),n=Array.isArray(this.props.values)?this.props.values:[this.props.values],o=this.props.scale&&this.props.scale.tickFormat(),p=c('sumOfArray')(n||[]),q=n.map(function(u,v){var w=this.props.titles?this.props.titles[v]:null,x=this.props.scale.tooltipFormat&&this.props.scale.tooltipFormat(),y=x(u);if(this.props.availability&&!this.props.availability[v])y=c('React').createElement(c('PageInsightsSponsoredPostsTableUnavailableContent.react'),{type:'Instagram'});var z=w||v;return c('React').createElement('div',{key:z,className:"_5kn0"},c('React').createElement('div',{className:"_5kn1"},w),c('React').createElement('div',{className:"_5kn2"},y))},this),r=null,s=null;if(this.props.labelWidth){r={marginLeft:this.props.labelWidth};s={width:this.props.labelWidth}}if(this.props.label||typeof this.props.label==='undefined')var t=c('React').createElement('div',{className:"_5kn3 ellipsis",style:s},this.props.label||o(p));return c('React').createElement('div',{className:c('joinClasses')(m,this.props.className)},t,c('React').createElement('div',{className:"_5kn4",style:r},c('React').createElement(c('XUIBackgroundBar.react'),{colors:this.props.colors,ref:'bar',scale:this.props.scale,values:n,inlineLabels:this.props.inlineLabels}),c('React').createElement('div',{className:"_5kn5",ref:'tooltip'},q)))};l.propTypes={className:k.string,colors:k.oneOfType([k.array,k.func]),forceTooltip:k.bool,label:k.oneOfType([k.bool,k.object,k.string]),labelWidth:k.string,scale:k.func,single:k.bool,tall:k.bool,"short":k.bool,thin:k.bool,titles:k.array,values:k.array,availability:k.array};f.exports=l}),null);
__d('InsightsLegendKey.react',['cx','React','joinClasses'],(function a(b,c,d,e,f,g,h){var i,j;i=babelHelpers.inherits(k,c('React').Component);j=i&&i.prototype;k.prototype.render=function(){'use strict';if(this.props.children.length!==2)return;var l=c('joinClasses')("_kz-",this.props.className);return c('React').createElement('div',{className:l},this.props.children[0],c('React').createElement('span',{className:"_kdk"},this.props.children[1]))};function k(){'use strict';i.apply(this,arguments)}f.exports=k}),null);
__d('InsightsLegendAreaKey.react',['cx','InsightsLegendKey.react','React'],(function a(b,c,d,e,f,g,h){var i,j;i=babelHelpers.inherits(k,c('React').Component);j=i&&i.prototype;k.prototype.render=function(){'use strict';return c('React').createElement(c('InsightsLegendKey.react'),{className:this.props.className},c('React').createElement('div',{className:"_1l46 _1l47",style:{background:this.props.color}}),this.props.children)};function k(){'use strict';i.apply(this,arguments)}f.exports=k}),null);
__d('InsightsLoadingIndicator.react',['cx','React','XUISpinner.react','joinClasses'],(function a(b,c,d,e,f,g,h){var i,j,k=c('React').PropTypes;i=babelHelpers.inherits(l,c('React').Component);j=i&&i.prototype;l.prototype.render=function(){'use strict';var m=c('joinClasses')("_5g39",this.props.className);return c('React').createElement('div',{className:m},c('React').createElement(c('XUISpinner.react'),{background:'light',size:this.props.size}))};function l(){'use strict';i.apply(this,arguments)}l.propTypes={size:k.string};l.defaultProps={size:'large'};f.exports=l}),null);
__d('InsightsDateRange.react',['fbt','React','formatDate'],(function a(b,c,d,e,f,g,h){var i,j;i=babelHelpers.inherits(k,c('React').Component);j=i&&i.prototype;k.prototype.render=function(){'use strict';var l=this.props.includeTime?'g:ia F jS, Y':'F d, Y',m=this.props.from,n=new Date(this.props.to.getTime()-1),o=c('formatDate')(m,l,{utc:this.props.utc}),p=c('formatDate')(n,l,{utc:this.props.utc});if(o!=p){var q=h._("{from} to {to}",[h.param('from',o),h.param('to',p)]);return c('React').createElement('span',null,q)}return c('React').createElement('span',null,o)};function k(){'use strict';i.apply(this,arguments)}k.defaultProps={includeTime:false};f.exports=k}),null);
__d('BUIDraggableList.react',['cx','invariant','AbstractDraggableList.react','BUIComponent','FBOverlayBase.react','React','XUIGrayText.react','joinClasses','mapObject'],(function a(b,c,d,e,f,g,h,i){'use strict';var j,k,l=c('React').PropTypes;j=babelHelpers.inherits(m,c('BUIComponent'));k=j&&j.prototype;function m(){var n,o;for(var p=arguments.length,q=Array(p),r=0;r<p;r++)q[r]=arguments[r];return o=(n=k.constructor).call.apply(n,[this].concat(q)),this.$BUIDraggableList1=function(s){var t=c('React').createElement(c('FBOverlayBase.react'),null,c('React').createElement('div',null,c('React').createElement(c('XUIGrayText.react'),{shade:'medium'},c('React').createElement('div',null,s))));return t},this.$BUIDraggableList2=function(s){var t=c('mapObject')(s,function(u){var v=this.$BUIDraggableList1(u.label),w=babelHelpers['extends']({},u,{label:v});return w}.bind(this));return t}.bind(this),o}m.prototype.render=function(){this.props.itemIDs.length!==0||i(0);var n=c('joinClasses')(this.props.className,"_5nz6");return c('React').createElement(c('AbstractDraggableList.react'),babelHelpers['extends']({},this.props,{className:n,itemsByID:this.$BUIDraggableList2(this.props.itemsByID)}))};m.propTypes={itemIDs:l.arrayOf(l.string.isRequired).isRequired,itemsByID:l.object.isRequired,itemsRenderer:l.func,onRemove:l.func.isRequired,onReorder:l.func.isRequired};f.exports=m}),null);
__d('LayerPage',['Arbiter','CSS','DOM','Layer','LayerButtons','LayerFormHooks','LayerHideOnTransition','LayerMouseHooks','LayerTabIsolation','ModalLayer','Style'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits(j,c('Layer'));i=h&&h.prototype;j.prototype._configure=function(n,o){'use strict';this._fitWidth=!!n.fitWidth;if(n.width){this._width=Math.floor(n.width)}else this._width=null;if(n.bottomMargin!==undefined){this._bottomMargin=n.bottomMargin}else this._bottomMargin=null;i._configure.call(this,n,o)};j.prototype._getDefaultBehaviors=function(){'use strict';return i._getDefaultBehaviors.call(this).concat([m,c('LayerButtons'),c('LayerFormHooks'),c('LayerHideOnTransition'),c('LayerMouseHooks'),c('LayerTabIsolation'),c('ModalLayer')])};j.prototype._buildWrapper=function(n,o){'use strict';return c('DOM').create('div',null,o)};j.prototype.updatePosition=function(){'use strict';var n=c('DOM').find(this.getRoot(),'div.uiLayerPage');if(this._fitWidth){c('Style').set(n,'width',l+'%')}else if(this._width){var o=c('DOM').find(n,'div.uiLayerPageContentWrap'),p=this._width;if(c('CSS').hasClass(o,'uiLayerPageDefaultPadding'))p+=2*k;c('Style').set(n,'width',p+'px')}return true};j.prototype.getContentRoot=function(){'use strict';if(!this._contentRoot)this._contentRoot=c('DOM').find(this.getRoot(),'.uiOverlayContent');return this._contentRoot};j.prototype.getBottomMargin=function(){'use strict';return this._bottomMargin};function j(){'use strict';h.apply(this,arguments)}var k=15,l=95;function m(n){'use strict';this._layer=n;this._subscription=null}m.prototype.enable=function(){'use strict';this._subscription=this._layer.subscribe(['show','hide'],function(n,o){if(n==='show'){c('Arbiter').inform('layer_shown',{type:'LayerPage'})}else c('Arbiter').inform('layer_hidden',{type:'LayerPage'});})};m.prototype.disable=function(){'use strict';this._subscription.unsubscribe();this._subscription=null};f.exports=j}),null);
__d('LayerPage.react',['CSS','LayerPage','ReactLayer','LayerFadeOnHide','LayerHideOnBlur','LayerHideOnEscape','LayerHideOnTransition'],(function a(b,c,d,e,f,g){var h=c('ReactLayer').createClass({immutableProps:{modal:null},getDefaultEnabledBehaviors:function i(){return {fadeOnHide:c('LayerFadeOnHide'),hideOnBlur:c('LayerHideOnBlur'),hideOnEscape:c('LayerHideOnEscape'),hideOnTransition:c('LayerHideOnTransition')}},componentDidUpdate:function i(j){if(this.props.children!==j.children)this.layer.updatePosition();},createLayer:function i(j){var k=this.enumerateBehaviors(this.props.behaviors),l={width:this.props.width,modal:this.props.modal,addedBehaviors:k,fitWidth:this.props.fitWidth},m=new (c('LayerPage'))(l,j);m.conditionShow(this.props.shown);if(this.props.layerRootClass)c('CSS').addClass(m.getRoot(),this.props.layerRootClass);return m},receiveProps:function i(j,k){this.updateBehaviors(k.behaviors,j.behaviors);this.layer.conditionShow(j.shown)}});f.exports=h}),null);
__d('LayerPageContent.react',['cx','React'],(function a(b,c,d,e,f,g,h){var i,j;i=babelHelpers.inherits(k,c('React').Component);j=i&&i.prototype;k.prototype.render=function(){'use strict';var l="uiLayerPageContentWrap"+(!this.props.useCustomPadding?' '+"uiLayerPageDefaultPadding":'');return c('React').createElement('div',{className:'uiLayerPageInner'},c('React').createElement('div',{className:'uiLayerPage uiOverlay'},c('React').createElement('div',{className:'uiOverlayContent'},c('React').createElement('div',{className:l},c('React').createElement('div',{className:'uiLayerPageContent'},this.props.children)))))};function k(){'use strict';i.apply(this,arguments)}f.exports=k}),null);
__d('FeedPlaceHolderStory.react',['cx','Locale','React','XUICard.react','joinClasses'],(function a(b,c,d,e,f,g,h){var i,j;i=babelHelpers.inherits(k,c('React').Component);j=i&&i.prototype;k.prototype.render=function(){'use strict';return c('React').createElement(c('XUICard.react'),{className:c('joinClasses')("_2iwp",this.props.className)},c('React').createElement('div',{className:(c('Locale').isRTL()?"direction_rtl":'')+(' '+"_2iwo")},c('React').createElement('div',{className:"_2iwq"},c('React').createElement('div',{className:"_2iwr"}),c('React').createElement('div',{className:"_2iws"}),c('React').createElement('div',{className:"_2iwt"}),c('React').createElement('div',{className:"_2iwu"}),c('React').createElement('div',{className:"_2iwv"}),c('React').createElement('div',{className:"_2iww"}),c('React').createElement('div',{className:"_2iwx"}),c('React').createElement('div',{className:"_2iwy"}),c('React').createElement('div',{className:"_2iwz"}),c('React').createElement('div',{className:"_2iw-"}),c('React').createElement('div',{className:"_2iw_"}),c('React').createElement('div',{className:"_2ix0"}))))};function k(){'use strict';i.apply(this,arguments)}f.exports=k}),null);
__d('FixedDataTableColumnGroupNew.react',['React'],(function a(b,c,d,e,f,g){var h,i,j=c('React').PropTypes;h=babelHelpers.inherits(k,c('React').Component);i=h&&h.prototype;k.prototype.render=function(){'use strict';return null};function k(){'use strict';h.apply(this,arguments)}k.__TableColumnGroup__=true;k.propTypes={align:j.oneOf(['left','center','right']),fixed:j.bool,header:j.oneOfType([j.node,j.func])};k.defaultProps={fixed:false};f.exports=k}),null);
__d('FixedDataTableColumnNew.react',['React'],(function a(b,c,d,e,f,g){var h,i,j=c('React').PropTypes;h=babelHelpers.inherits(k,c('React').Component);i=h&&h.prototype;k.prototype.render=function(){'use strict';return null};function k(){'use strict';h.apply(this,arguments)}k.__TableColumn__=true;k.propTypes={align:j.oneOf(['left','center','right']),fixed:j.bool,header:j.oneOfType([j.node,j.func]),headerStyle:j.object,cell:j.oneOfType([j.node,j.func]),cellClassNameGetter:j.func,cellStyle:j.object,footer:j.oneOfType([j.node,j.func]),columnKey:j.oneOfType([j.string,j.number]),width:j.number.isRequired,minWidth:j.number,maxWidth:j.number,flexGrow:j.number,isResizable:j.bool,allowCellsRecycling:j.bool};k.defaultProps={allowCellsRecycling:false,fixed:false};f.exports=k}),null);
__d('ClockFormatConverter',['fbt','invariant','VideoFormattingUtils'],(function a(b,c,d,e,f,g,h,i){'use strict';var j=1000,k=60,l=/^\d\d$/,m=/^\d?\d?$/,n={TIME_SEPARATOR:h._(":"),validate:function o(p,q){var r=p.split(this.TIME_SEPARATOR);if(r.length===0)return false;for(var s=0;s<r.length;s++){var t=q&&s===r.length-1||s===0?m:l;if(!t.test(r[s]))return false;if(parseInt(r[s],10)>=k)return false;}return true},timestampToSeconds:function o(p){this.validate(p)||i(0);var q=p.split(this.TIME_SEPARATOR),r=void 0,s=0,t=1;while(r=q.pop()){s+=parseInt(r,10)*t;t*=k}return s},timestampToMillis:function o(p){return this.timestampToSeconds(p)*j},secondsToTimestamp:function o(p){if(p===0)return '0'+this.TIME_SEPARATOR+'00';return c('VideoFormattingUtils').formatTime(p)},millisToTimestamp:function o(p){return this.secondsToTimestamp(p/j)},normalize:function o(p){var q=this.timestampToSeconds(p);return this.secondsToTimestamp(q)},normalizedSecondsTimestamp:function o(p){var q=p.split(this.TIME_SEPARATOR).map(function(r){return r.length===1?'0'+r:r});return this.normalize(q.join(this.TIME_SEPARATOR))},normalizeMinutesTimestamp:function o(p){var q=p.split(this.TIME_SEPARATOR);if(q.length===1){q.push('00')}else for(var r=1;r<q.length;r++)q[r]=('00'+q[r]).slice(-2);return this.normalize(q.join(this.TIME_SEPARATOR))}};f.exports=n}),null);
__d("CubicBezier",[],(function a(b,c,d,e,f,g){var h=.005;function i(j,k){"use strict";this.cx=3*j[0];this.bx=3*(k[0]-j[0])-this.cx;this.ax=1-this.cx-this.bx;this.cy=3*j[1];this.by=3*(k[1]-j[1])-this.cy;this.ay=1-this.cy-this.by}i.prototype.sampleCurveX=function(j){"use strict";return ((this.ax*j+this.bx)*j+this.cx)*j};i.prototype.solve=function(j){"use strict";j=this.solveCurveX(j);return ((this.ay*j+this.by)*j+this.cy)*j};i.prototype.solveCurveX=function(j){"use strict";var k,l,m,n,o,p;for(o=j,l=0;l<8;l++){p=this.sampleCurveX(o)-j;if(Math.abs(p)<h)return o;k=(3*this.ax*o+2*this.bx)*o+this.cx;if(Math.abs(k)<1e-6)break;o-=p/k}m=0;n=1;o=j;if(o<m)return m;if(o>n)return n;while(m<n){p=this.sampleCurveX(o);if(Math.abs(p-j)<h)return o;if(j>p){m=o}else n=o;o=(n-m)/2+m}return o};f.exports=i}),null);
__d("d3/core/class",[],(function a(b,c,d,e,f,g){function h(i,j){try{for(var k in j)Object.defineProperty(i.prototype,k,{value:j[k],enumerable:false});}catch(l){i.prototype=j}}g._class=h}),null);
__d("d3/core/map",["d3/core/class"],(function a(b,c,d,e,f,g){var h=c("d3\/core\/class")._class,i=function m(n){var o=new j();for(var p in n)o.set(p,n[p]);return o};function j(){}h(j,{has:function m(n){return k+n in this},get:function m(n){return this[k+n]},set:function m(n,o){return this[k+n]=o},remove:function m(n){n=k+n;return n in this&&delete this[n]},keys:function m(){var n=[];this.forEach(function(o){n.push(o)});return n},values:function m(){var n=[];this.forEach(function(o,p){n.push(p)});return n},entries:function m(){var n=[];this.forEach(function(o,p){n.push({key:o,value:p})});return n},forEach:function m(n){for(var o in this)if(o.charCodeAt(0)===l)n.call(this,o.substring(1),this[o]);}});var k="\0",l=k.charCodeAt(0);i._Map=j;f.exports=i}),null);
__d("d3/time/time",[],(function a(b,c,d,e,f,g){var h={},i=Date,j=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];function k(){this._=new Date(arguments.length>1?Date.UTC.apply(this,arguments):arguments[0])}k.prototype={getDate:function m(){return this._.getUTCDate()},getDay:function m(){return this._.getUTCDay()},getFullYear:function m(){return this._.getUTCFullYear()},getHours:function m(){return this._.getUTCHours()},getMilliseconds:function m(){return this._.getUTCMilliseconds()},getMinutes:function m(){return this._.getUTCMinutes()},getMonth:function m(){return this._.getUTCMonth()},getSeconds:function m(){return this._.getUTCSeconds()},getTime:function m(){return this._.getTime()},getTimezoneOffset:function m(){return 0},valueOf:function m(){return this._.valueOf()},setDate:function m(){l.setUTCDate.apply(this._,arguments)},setDay:function m(){l.setUTCDay.apply(this._,arguments)},setFullYear:function m(){l.setUTCFullYear.apply(this._,arguments)},setHours:function m(){l.setUTCHours.apply(this._,arguments)},setMilliseconds:function m(){l.setUTCMilliseconds.apply(this._,arguments)},setMinutes:function m(){l.setUTCMinutes.apply(this._,arguments)},setMonth:function m(){l.setUTCMonth.apply(this._,arguments)},setSeconds:function m(){l.setUTCSeconds.apply(this._,arguments)},setTime:function m(){l.setTime.apply(this._,arguments)}};var l=Date.prototype;h._time=i;h._daySymbols=j;h._utc=k;f.exports=h}),null);
__d("d3/time/interval",["d3/time/time"],(function a(b,c,d,e,f,g){var h=c("d3/time/time")._utc;function i(k,l,m){function n(t){var u=k(t),v=p(u,1);return t-u<v-t?u:v}function o(t){l(t=k(new (c("d3/time/time")._time)(t-1)),1);return t}function p(t,u){l(t=new (c("d3/time/time")._time)(+t),u);return t}function q(t,u,v){var w=o(t),x=[];if(v>1){while(w<u){if(!(m(w)%v))x.push(new Date(+w));l(w,1)}}else while(w<u)x.push(new Date(+w)),l(w,1);return x}function r(t,u,v){try{c("d3/time/time")._time=h;var w=new h();w._=t;return q(w,u,v)}finally{c("d3/time/time")._time=Date}}k.floor=k;k.round=n;k.ceil=o;k.offset=p;k.range=q;var s=k.utc=j(k);s.floor=s;s.round=j(n);s.ceil=j(o);s.offset=j(p);s.range=r;return k}function j(k){return function(l,m){try{c("d3/time/time")._time=h;var n=new h();n._=l;return k(n,m)._}finally{c("d3/time/time")._time=Date}}}g._interval=i}),null);
__d("d3/time/day",["d3/time/interval","d3/time/time","d3/time/year"],(function a(b,c,d,e,f,g){var h=c("d3\/time\/interval")._interval,i=h(function(j){var k=new (c("d3/time/time")._time)(1970,0);k.setFullYear(j.getFullYear(),j.getMonth(),j.getDate());return k},function(j,k){j.setDate(j.getDate()+k)},function(j){return j.getDate()-1});i.s=i.range;i.s.utc=i.utc.range;i.ofYear=function(j){var k=c("d3\/time\/year")(j);return Math.floor((j-k-(j.getTimezoneOffset()-k.getTimezoneOffset())*60000)/86400000)};f.exports=i}),null);
__d("d3/time/year",["d3/time/interval","d3/time/day"],(function a(b,c,d,e,f,g){var h=c("d3\/time\/interval")._interval,i=h(function(j){j=c("d3\/time\/day")(j);j.setMonth(0,1);return j},function(j,k){j.setFullYear(j.getFullYear()+k)},function(j){return j.getFullYear()});i.s=i.range;i.s.utc=i.utc.range;f.exports=i}),null);
__d('InsightsNumUtils',['NumberFormatConfig','intlNumUtils','sprintf'],(function a(b,c,d,e,f,g){var h={GBP:'\u00A3%s',EUR:'%s\u20AC',JPY:'\u00A5%s',USD:'$%s'},i={prettyCurrency:function j(k,l){var m=h[k]||'%s %s',n=l.toFixed(2).split('.'),o=c('NumberFormatConfig').decimalSeparator;return c('sprintf')(m,i.prettyInt(parseInt(n[0],10))+o+n[1],k)},prettyShortCurrency:function j(k,l){var m=h[k]||'%s %s';return c('sprintf')(m,i.prettyShortInt(l),k)},prettyCurrencyEx:function j(k,l){if(l>-1000&&l<1000){return i.prettyCurrency(k,l)}else return i.prettyShortCurrency(k,l);},prettyFloat:function j(k){return c('intlNumUtils').getFloatString(k,c('NumberFormatConfig').numberDelimiter,c('NumberFormatConfig').decimalSeparator)},prettyShortInt:function j(k){function l(m,n){return Math.round(m/n*10)/10}if(Math.abs(k)>=1e+09)return i.prettyFloat(l(k,1e+09))+'B';if(Math.abs(k)>=1e+06)return i.prettyFloat(l(k,1e+06))+'M';if(Math.abs(k)>=1000)return i.prettyFloat(l(k,1000))+'K';return i.prettyInt(k)},prettyInt:function j(k){return c('intlNumUtils').formatNumberWithThousandDelimiters(Math.round(k))},prettyPercent:function j(k,l){if(!l)l=0;var m=k*100;return Number(Math.round(Number(m+'e'+l))+'e-'+l)+'%'},prettyPercentQuotient:function j(k){var l=k.numerator,m=k.denominator,n=k.precision,o=1;if(l!=null&&m!=null)o=m===0?0:Math.min(1,l/m);return i.prettyPercent(o,n)}};f.exports=i}),null);
__d('InsightsUtils',['invariant','DateTime','Timezone','UTCUtils','d3/time/day'],(function a(b,c,d,e,f,g,h){'use strict';var i=c('Timezone').PST8PDT,j=c('Timezone').UTC,k=24*60*60,l=25*60*60,m={dateToSeconds:function n(o){if(o instanceof Date)return parseInt(o.getTime()/1000,10);return o},_isEmpty:function n(o){return Object.keys(o).length===0},_isKeyed:function n(o){for(var p=0;p<o.length;++p){if(typeof o[p].value!=='object')return false;if(!this._isEmpty(o[p].value))return true;}return true},formatInsightsResponse:function n(o){var p,q=this,r=-Infinity,s=null,t=0,u=null,v=false,w=0,x=null,y=0,z=Infinity,aa=o.data.length,ba=null,ca=null,da={},ea={};for(var fa=0;fa<aa;++fa){u=o.data[fa];for(var ga=0;ga<u.values.length;)if(Object.prototype.hasOwnProperty.call(u.values[ga],'value')){ga++}else u.values.splice(ga,1);if(u.values.length===0)continue;v=this._isKeyed(u.values);z=Math.min(z,u.values[0].end_time-k);r=Math.max(r,u.values[u.values.length-1].end_time);da[u.name]=da[u.name]||{};if(v){da[u.name][u.period]=x={};for(var ha=0;ha<u.values.length;++ha){ca=u.values[ha];Object.keys(ca.value).forEach(function(ma){if(!Object.prototype.hasOwnProperty.call(x,ma))da[u.name][u.period][ma]=null;})}}else da[u.name][u.period]=null;if(u.description_from_api_doc)ea[u.name]=u.description_from_api_doc;}y=Math.round((r-z)/k);for(var ia=0;ia<aa;++ia){t=z;u=o.data[ia];if(u.values.length===0)continue;v=this._isKeyed(u.values);w=0;ba=u.period+'_timestamps';s=m.fillArray(y,null);da[u.name][ba]=s;if(!v)da[u.name][u.period]=m.fillArray(y,null);var ja=function ma(na){ca=u.values[na];if(ca.end_time-t>l)w+=Math.round((ca.end_time-t)/k)-1;if(v){x=da[u.name][u.period];Object.keys(x).forEach(function(oa){if(x[oa]===null)x[oa]=m.fillArray(y,null);x[oa][na+w]=ca.value[oa]||0})}else if(typeof ca.value==='object'){da[u.name][u.period][na+w]=0}else da[u.name][u.period][na+w]=ca.value;da[u.name][ba][na+w]=ca.end_time;t=ca.end_time};for(var ka=0;ka<u.values.length;++ka)ja(ka);}var la={endTime:m.pacificSecondsToUTCDate(r),seriesLength:y,startTime:m.pacificSecondsToUTCDate(z+k),values:da};if(Object.keys(ea).length>0)la.descriptions=ea;return la},formatParams:function n(o){var p=babelHelpers['extends']({},o);p.date_format='U';if(o.since)p.since=this.utcDateToPacificSeconds(o.since);if(o.until)p.until=this.utcDateToPacificSeconds(o.until);return p},localTimeToPacificDate:function n(o){return new Date(o.getTime()+c('UTCUtils').offsetFromPacificTime(o))},pacificSecondsToUTCDate:function n(o){var p=o*1000;return new Date(p+c('UTCUtils').getPacificOffsetAt(p))},utcDateToPacificSeconds:function n(o){return this.dateToSeconds(o)-Math.round(c('UTCUtils').getPacificOffsetAt(o)/1000)},utcTimeToPacificTime:function n(o){return new Date(o.getTime()-c('UTCUtils').getPacificOffsetAt(o))},utcTimeToPacificDay:function n(o){return new Date(c('d3/time/day').utc.floor(o).getTime()-c('UTCUtils').getPacificOffsetAt(o))},timestampToUTCDay:function n(o,p){var q=new (c('DateTime'))(o,p);return q.toParallelDate()},utcDayToTimestamp:function n(o,p){var q=c('DateTime').fromDate(o,j),r=q.getParallel(p);return r.getUnixTimestampSeconds()},pstTimeToUTCDay:function n(o){return c('d3/time/day').utc.floor(new Date(o.getTime()+c('UTCUtils').getPacificOffsetAt(o)))},utcTimeToPST:function n(o){return new Date(c('d3/time/day').utc.floor(o).getTime()-c('UTCUtils').getPacificOffsetAt(o))},getMostRecentPacificDayBegin:function n(o){var p=o.getTime(),q=p+c('UTCUtils').getPacificOffsetAt(p),r=c('d3/time/day').utc.floor(new Date(q)).getTime(),s=new Date(r-c('UTCUtils').getPacificOffsetAt(r));return s},fillArray:function n(o,p){var q=new Array(o);for(var r=0;r<o;)q[r++]=p;return q},getRangeIndices:function n(o,p){return [m.millisecondsToDays(p.since-o)+1,m.millisecondsToDays(p.until-o)]},millisecondsToDays:function n(o){var p=1000*60*60*24;return Math.round(o/p)},sliceData:function n(o,p,q){var r=m.getRangeIndices(p,q);return o.slice(r[0],r[1]+1)},moveRange:function n(o,p){var q=p||-7;return {since:c('d3/time/day').utc.offset(o.since,q),until:c('d3/time/day').utc.offset(o.until,q)}},chartHasDataToRender:function n(o){return o.lines&&o.lines.length||o.areas&&o.areas.length},getNowOffsetByPacificTimezone:function n(){var o=Date.now();return new Date(o+c('UTCUtils').getPacificOffsetAt(o))}};f.exports=m}),null);
__d('SpectrumUtilities',['cloneWithProps_DEPRECATED'],(function a(b,c,d,e,f,g){function h(p){return p}function i(p,q){return function(){return p(q.apply(this,arguments))}}function j(p,q,r){for(var s=1,t=p.length;s<t;s++)q.call(r,p[s-1],s-1,p[s],s);}function k(p,q,r){if(p<Math.min(q,r))return false;if(p>Math.max(q,r))return false;return true}function l(p,q,r){var s=-Infinity,t=Infinity,u=-Infinity,v=Infinity,w=Infinity;function x(y,z,aa,ba){var ca=aa-y,da=ba-z,ea=ca/da,fa=da/ca,ga=p-y,ha=q-z,ia=y+ea*ha,ja=z+fa*ga;if(k(ia,y,aa)){if(ia>s&&ia<p)s=ia;if(ia<t&&ia>p)t=ia;}if(k(ja,z,ba)){if(ja>u&&ja<q)u=ja;if(ja<v&&ja>q)v=ja;}if(!k(p,y,aa))return 0;var ka=Math.abs(ja-q);if(ka>w)return 0;w=ka;var la=Math.abs(p-y),ma=Math.abs(p-aa);if(la<ma){return q<ja?1:3}else return q<ja?2:4;}r(x);return {left:s,right:t,top:u,bottom:v,distance:w}}function m(p){if(!p)return null;var q=p.range(),r=q[0],s=q[q.length-1];if(p.rangeBand)s+=p.rangeBand();return [r,s]}function n(p,q,r,s){var t=babelHelpers['extends']({},q,r,s);return c('cloneWithProps_DEPRECATED')(p,t)}var o={compose:i,findEdges:l,forEachVector:j,getOuterRange:m,identity:h,mergeProps:n};f.exports=o}),null);