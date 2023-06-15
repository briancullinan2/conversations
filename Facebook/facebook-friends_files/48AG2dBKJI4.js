if (self.CavalryLogger) { CavalryLogger.start_js(["6UwMj"]); }

__d('NavigationMenubarInteractionsTypedLogger',['Banzai','GeneratedLoggerUtils','nullthrows'],(function a(b,c,d,e,f,g){'use strict';function h(){this.clear()}h.prototype.log=function(){c('GeneratedLoggerUtils').log('logger:NavigationMenubarInteractionsLoggerConfig',this.$NavigationMenubarInteractionsTypedLogger1,c('Banzai').BASIC)};h.prototype.logVital=function(){c('GeneratedLoggerUtils').log('logger:NavigationMenubarInteractionsLoggerConfig',this.$NavigationMenubarInteractionsTypedLogger1,c('Banzai').VITAL)};h.prototype.clear=function(){this.$NavigationMenubarInteractionsTypedLogger1={};return this};h.prototype.updateData=function(j){this.$NavigationMenubarInteractionsTypedLogger1=babelHelpers['extends']({},this.$NavigationMenubarInteractionsTypedLogger1,j);return this};h.prototype.setAction=function(j){this.$NavigationMenubarInteractionsTypedLogger1.action=j;return this};h.prototype.setTargetItem=function(j){this.$NavigationMenubarInteractionsTypedLogger1.target_item=j;return this};h.prototype.updateExtraData=function(j){j=c('nullthrows')(c('GeneratedLoggerUtils').serializeMap(j));c('GeneratedLoggerUtils').checkExtraDataFieldNames(j,i);this.$NavigationMenubarInteractionsTypedLogger1=babelHelpers['extends']({},this.$NavigationMenubarInteractionsTypedLogger1,j);return this};h.prototype.addToExtraData=function(j,k){var l={};l[j]=k;return this.updateExtraData(l)};var i={action:true,target_item:true};f.exports=h}),null);
__d('NavigationAssistantController',['csx','cx','fbt','AccessibilityConfig','AsyncDialog','AsyncRequest','CSS','DOM','DOMEventListener','DOMTraverser','DOMQuery','Event','Focus','Menu','MenuItem','NavigationMenubarInteractionsTypedLogger','KeyEventController','KeyboardShortcuts','RTLKeys','PageTransitions','TabbableElements','ge','getActiveElement','getOrCreateDOMID','setImmediate'],(function a(b,c,d,e,f,g,h,i,j){'use strict';var k=['main','banner','search','navigation','region','complementary','form','contentinfo'],l={main:function n(o){return o?j._("Main: {section name}",[j.param('section name',o)]):j._("Main section")},banner:function n(o){return j._("{section name} banner",[j.param('section name',o)])},search:function n(o){return j._("Search {section name}",[j.param('section name',o)])},navigation:function n(o){return o?j._("Navigate {section name}",[j.param('section name',o)]):j._("Navigation")},region:function n(o){return o},complementary:function n(o){return o?o:j._("Complementary information")},form:function n(o){return j._("{section name} form",[j.param('section name',o)])},contentinfo:function n(o){return j._("{section name} footer",[j.param('section name',o)])}},m={init:function n(o,p,q,r){this._banner=o;this._menubar=p;this._sectionsMenu=q;this._accessibilityMenu=r;this._shortcutMenuItem=this._accessibilityMenu.getItemAt(0);this._menubarMenus=[{menu:this._sectionsMenu,logName:'page_sections'},{menu:this._accessibilityMenu,logName:'accessibility'}];if(document.body)c('CSS').addClass(document.body,'hasAXNavMenubar');this._shown=false;this._items=[];this._hotKeyTrigger=null;this._menubarMenuItems=c('DOMQuery').scry(this._menubar,'[role="button"]');this._menubarMenuItems.forEach(function(s){s.setAttribute('role','menuitem')});this._activeItem=this._menubarMenuItems[0];this._activeItemIndex=0;this._setupEvents()},_setupEvents:function n(){this._menubar.addEventListener('keyup',this._checkShow.bind(this));this._menubar.addEventListener('keydown',this._checkHide.bind(this));this._menubar.addEventListener('keyup',this._checkMenuSwitch.bind(this));this._menubarMenus.forEach(function(o){o.menu.subscribe('show',this._ignoreBlur.bind(this,o));o.menu.subscribe('hide',this._listenBlur.bind(this));o.menu.subscribe('done',this._checkBlur.bind(this))}.bind(this));c('DOMEventListener').add(document,'click',this._checkClickBlur.bind(this));this._sectionsMenu.subscribe('focus',this._highlightFocused.bind(this));this._sectionsMenu.subscribe('blur',this._unhighlightFocused.bind(this));this._accessibilityMenu.subscribe('itemclick',this._checkShortcutsShow.bind(this));if(c('AccessibilityConfig').a11yNavHotkey){c('DOMEventListener').add(document,'keydown',this._checkHotKey.bind(this));c('DOMEventListener').add(document,'keypress',this._trackHotKeyPress.bind(this));c('DOMEventListener').add(document,'keyup',this._unsetHotKey.bind(this))}},_checkShow:function n(o){if(c('DOM').contains(this._menubar,o.target))this._showMenubar();},_checkHide:function n(o){var p=c('Event').getKeyCode(o);if(p===c('RTLKeys').ESC){this._hideMenubar();this._returnFocus();return}if(p===c('RTLKeys').TAB)c('setImmediate')(function(){this._hideMenubar()}.bind(this));},_returnFocus:function n(){if(this._hotKeyTrigger){c('Focus').set(this._hotKeyTrigger,true);this._hotKeyTrigger=null}else{var o=this._banner.nextElementSibling;if(!c('TabbableElements').isTabbable(o))o=c('DOMTraverser').nextFilteredNode(document.body,o,c('TabbableElements').isTabbable);c('Focus').set(o)}},_setActiveItem:function n(o){if(o<0||o>=this._menubarMenuItems.length)return;this._activeItem.setAttribute('tabindex','-1');this._activeItem=this._menubarMenuItems[o];this._activeItemIndex=o;this._activeItem.setAttribute('tabindex','0')},_checkMenuSwitch:function n(event){var o=c('Event').getKeyCode(event),p=this._menubarMenus.length,q=this._activeItemIndex;switch(o){case c('RTLKeys').getLeft():q=this._activeItemIndex===0?p-1:this._activeItemIndex-1;break;case c('RTLKeys').getRight():q=this._activeItemIndex===p-1?0:this._activeItemIndex+1;break;default:return false;}this._setActiveItem(q);c('Focus').set(this._activeItem,true);return true},_ignoreBlur:function n(o){this._ignoreBlur=true;this._logEvent('menu_shown',o.logName)},_listenBlur:function n(){this._ignoreBlur=false},_checkClickBlur:function n(){if(!this._ignoreBlur)this._checkBlur();},_checkBlur:function n(){var o=c('getActiveElement')();if(this._shown&&o&&!c('DOM').contains(this._menubar,o))this._hideMenubar();if(this._highlighted){c('CSS').removeClass(this._highlighted,"_1toc");this._highlighted=null}},_highlightFocused:function n(o,p){if(this._highlighted)c('CSS').removeClass(this._highlighted,"_1toc");this._highlighted=c('ge')(p.item.getValue());if(this._highlighted)c('CSS').addClass(this._highlighted,"_1toc");},_unhighlightFocused:function n(o,p){if(this._highlighted)c('CSS').removeClass(this._highlighted,"_1toc");},_checkHotKey:function n(o){var p=c('Event').getKeyCode(o),q=o.altKey;if(!c('AccessibilityConfig').a11yNavHotkeyFromInputs&&!c('KeyEventController').filterEventTargets(o,'keydown'))return;if(p===c('RTLKeys').FORWARD_SLASH&&q){var r=c('getActiveElement')();this._listenHotKeyPress=true;if(this._shown){this._hideMenubar();this._sectionsMenu.done();this._accessibilityMenu.done();setTimeout(function(){this._returnFocus()}.bind(this),0);return}if(r&&this._isInDialog(r))return;this._hotKeyTrigger=r;this._showMenubar();c('Focus').set(this._activeItem,true);this._logEvent('hotkey_triggered','menubar');return}this._listenHotKeyPress=false;if(this._shown)this._checkHide(o);},_unsetHotKey:function n(o){this._listenHotKeyPress=false},_trackHotKeyPress:function n(o){if(this._listenHotKeyPress){var p=c('Event').getKeyCode(o);this._logEvent('hotkey_char',''+p)}},_isInDialog:function n(o){var p=o;while(p&&p!==document&&p.getAttribute('role')!=='dialog')p=p.parentNode;return p!==document},_hideMenubar:function n(){if(!this._shown)return;this._shown=false;this._cleanupSectionsMenu();c('KeyboardShortcuts').popLayer();c('CSS').addClass(this._banner,"_1toe");this._setActiveItem(0);setTimeout(function(){c('Event').fire(window,'scroll')},350)},_showMenubar:function n(){if(this._shown)return;this._shown=true;this._setupMenus();this._ignoreBlur=false;c('KeyboardShortcuts').pushLayer();if(c('CSS').matchesSelector(this._banner.nextElementSibling,"._3d9x")){c('CSS').addClass(this._banner,"_1tof")}else c('CSS').removeClass(this._banner,"_1tof");c('CSS').removeClass(this._banner,"_1toe");setTimeout(function(){c('Event').fire(window,'scroll')},50);this._logEvent('shown','menubar')},_addMenuItem:function n(o,p,q){var r=c('Menu').buildItemFromData({ctor:c('MenuItem'),label:o,selected:false,value:p,onclick:function(s){setTimeout(function(){c('Focus').set(c('ge')(q),true)},0);this._logEvent('selected_item',o)}.bind(this)});this._sectionsMenu.addItem(r);this._items.push(r)},_getLandmarkSections:function n(o){var p=[],q=[];o.forEach(function(r){var s=r.getAttribute('role');if(s==='main'){p.push(r)}else if(k.indexOf(s)>-1)q.push(r);});return p.concat(q)},_addSectionItems:function n(o){o.forEach(function(p){if(!c('TabbableElements').isVisible(p)||!p.offsetHeight||!p.offsetWidth)return;var q=p.getAttribute('role');if(!q||!Object.prototype.hasOwnProperty.call(l,q))return;var r=l[q](p.getAttribute('aria-label')),s=p;if(q==='search'||q==='region'||q==='form'){var t=c('DOMQuery').scry(p,".navigationFocus");if(t.length){s=t[0];if(!c('TabbableElements').isTabbable(s)&&c('TabbableElements').find(s).length)s=c('TabbableElements').find(s)[0];}}if(r)this._addMenuItem(r,c('getOrCreateDOMID')(p),c('getOrCreateDOMID')(s));}.bind(this))},_setupMenus:function n(){this._setupSectionsMenu();this._setupAccessibilityMenu()},_setupSectionsMenu:function n(){var o=c('DOMQuery').scry(document.body,'[role]'),p=this._getLandmarkSections(o);this._addSectionItems(p)},_cleanupSectionsMenu:function n(){while(this._items.length)this._sectionsMenu.removeItem(this._items.pop());},_setupAccessibilityMenu:function n(){if(c('PageTransitions').getMostRecentURI().getPath()==='/'){var o=this._accessibilityMenu.getItemAt(0);if(o!==this._shortcutMenuItem)this._accessibilityMenu.addItemBefore(this._shortcutMenuItem,o);}else this._accessibilityMenu.removeItem(this._shortcutMenuItem);},_logEvent:function n(o,p){new (c('NavigationMenubarInteractionsTypedLogger'))().setAction(o).setTargetItem(p).log()},_checkShortcutsShow:function n(o,p){if(p.item.getValue()==='key_shortcuts'){var q=this._getHelpDialogRequest();if(q){q.setRelativeTo(c('getActiveElement')());c('AsyncDialog').send(q);this._hideMenubar()}}},_getHelpDialogRequest:function n(){if(!this._dialogRequest){this._dialogRequest=new (c('AsyncRequest'))('/ajax/keyboard_shortcuts');this._dialogRequest.setReadOnly(true)}else if(this._dialogRequest.transport)return null;return this._dialogRequest}};f.exports=m}),null);