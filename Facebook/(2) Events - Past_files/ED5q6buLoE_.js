if (self.CavalryLogger) { CavalryLogger.start_js(["l12NX"]); }

__d('legacy:dom-asynclinkshim',['LinkshimAsyncLink'],(function a(b,c,d,e,f,g){b.LinkshimAsyncLink=c('LinkshimAsyncLink')}),3);
__d('LtgPostTranslation',['Arbiter','AsyncRequest','ContentTranslationStrings','DOM','Event','LoadingIndicator.react','React','ReactDOM','UFIUIEvents','XLtgPostTranslationController','ge','highlight'],(function a(b,c,d,e,f,g){'use strict';var h={_renderTranslation:function i(j,k){var l=c('DOM').create('div',{},k||c('ContentTranslationStrings').NO_TRANSLATION_AVAILABLE);c('DOM').replace(j,l);if(k)c('highlight')(l);},bindListener:function i(j,k){c('Event').listen(j,'click',function(event){event.prevent();var l=c('ge')('translationSpinnerPlaceholder_'+k);if(l)c('ReactDOM').render(c('React').createElement(c('LoadingIndicator.react'),{size:'small',color:'white'}),l);var m=c('XLtgPostTranslationController').getURIBuilder().setString('ftid',k).getURI();new (c('AsyncRequest'))().setURI(m).setHandler(function(n){var o=n.getPayload();this._renderTranslation(j,o&&o.text);c('Arbiter').inform(c('UFIUIEvents').TranslationRendered)}.bind(this)).setErrorHandler(function(){this._renderTranslation(j,null)}.bind(this)).send()}.bind(this))}};f.exports=h}),null);