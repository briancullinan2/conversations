if (self.CavalryLogger) { CavalryLogger.start_js(["2dYNN"]); }

__d('CircularProgressBar.react',['cx','React'],(function a(b,c,d,e,f,g,h){'use strict';var i=c('React').PropTypes,j=c('React').createClass({displayName:'CircularProgressBar',propTypes:{percentComplete:i.number.isRequired},render:function k(){var l=360*this.props.percentComplete/100,m=Math.max(l,180)-180,n=Math.min(l,180),o=this.props.percentComplete<100?'1':'0';return c('React').createElement('div',{className:"_1_bj",style:{opacity:o}},c('React').createElement('div',{className:"_1_bk"},c('React').createElement('div',{className:"_1_bl",style:{opacity:o}}),c('React').createElement('div',{className:"_1_bp _1_bq"},c('React').createElement('div',{className:"_1_br",style:{transform:'translateX(-100%) rotate('+m+'deg)',opacity:o}})),c('React').createElement('div',{className:"_1_bs _1_bq"},c('React').createElement('div',{className:"_1_br",style:{transform:'translateX(-100%) rotate('+n+'deg)',opacity:o}}))))}});f.exports=j}),null);
__d("createExponentialMovingAverage",[],(function a(b,c,d,e,f,g){function h(k){var l=arguments.length<=1||arguments[1]===undefined?0:arguments[1],m=l;return function(n){return m+=k*(n-m)}}function i(k){return function(l){return 1-Math.exp(-l/k)}}function j(k){var l=arguments.length<=1||arguments[1]===undefined?0:arguments[1],m=l,n=i(k);return function(o,p){return m+=n(p)*(o-m)}}h.createContinuous=j;f.exports=h}),null);
__d('VelocityTracker',['createExponentialMovingAverage','performanceNow'],(function a(b,c,d,e,f,g){function h(){var i=arguments.length<=0||arguments[0]===undefined?50:arguments[0],j=arguments.length<=1||arguments[1]===undefined?{x:0,y:0}:arguments[1];'use strict';this.$VelocityTracker5=j.x;this.$VelocityTracker6=j.y;this.$VelocityTracker1=c('performanceNow')();this.$VelocityTracker2=c('createExponentialMovingAverage').createContinuous(i,this.$VelocityTracker5);this.$VelocityTracker3=c('createExponentialMovingAverage').createContinuous(i,this.$VelocityTracker6)}h.prototype.update=function(i,j){'use strict';var k=0;if(this.$VelocityTracker4){k=c('performanceNow')()-this.$VelocityTracker1;k=this.updateVelocity((i-this.$VelocityTracker4.x)*1000/k,(j-this.$VelocityTracker4.y)*1000/k)}else this.$VelocityTracker1=c('performanceNow')();this.$VelocityTracker4={x:i,y:j};return k};h.prototype.updateVelocity=function(i,j){'use strict';var k=c('performanceNow')(),l=k-this.$VelocityTracker1;this.$VelocityTracker1=k;this.$VelocityTracker5=this.$VelocityTracker2(i,l);this.$VelocityTracker6=this.$VelocityTracker3(j,l);return l};h.prototype.getVelocityX=function(){'use strict';return Math.trunc(this.$VelocityTracker5)};h.prototype.getVelocityY=function(){'use strict';return Math.trunc(this.$VelocityTracker6)};h.prototype.getSpeed=function(){'use strict';return Math.trunc(Math.sqrt(this.$VelocityTracker5*this.$VelocityTracker5+this.$VelocityTracker6*this.$VelocityTracker6))};f.exports=h}),null);
__d("ComposerNUXType",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({CAMERA_NUX:"camera_nux_seen",ADD_MORE_NUX:"add_more_nux_seen",OGCOMPOSER_NUX:"ogcomposer_nux_seen",FACEREC_SUGGESTIONS_NUX:"facerec_suggestions_nux_seen",TAGGING_FLYOUT_NUX:"tagging_flyout_nux_seen",SHARER_MINUTIAE_NUX:"sharer_minutiae_nux_seen",ADD_STICKERS_NUX:"add_stickers_nux_seen",UPCOMING_BIRTHDAYS_NUX:"upcoming_birthdays_nux_seen",CROSS_POST_NUX:"cross_post_nux_seen",SLIDESHOW_NUX:"slideshow_nux_seen"})}),null);
__d("ModalPhotoEditorTabName",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({CROP:"crop",FILTERS:"filters",FRAMES:"frames",PRODUCT_TAG:"product_tag",STICKERS:"stickers",TAG:"tag",TEXT:"text"})}),null);