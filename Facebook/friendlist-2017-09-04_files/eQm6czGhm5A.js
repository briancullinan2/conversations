if (self.CavalryLogger) { CavalryLogger.start_js(["rPp7Y"]); }

__d('MusicDiagnosticLogger',['Arbiter','JSLogger','MusicConstants','MusicDiagnostics','MusicLogger','Run'],(function a(b,c,d,e,f,g){var h=c('JSLogger').create('music_diag'),i='attempt',j='success',k='invalidate',l='pending',m={INSTALL:'install',INSTALL_CANCEL:'install_canceled',LAUNCH:'launch',LAUNCH_CANCEL:'launch_canceled',PLAY:'play',PLAY_ALREADY:'play_already_open',PLAY_INSTALL:'play_install',TOS_SHOWN:'tos_shown',TOS_CANCEL:'tos_canceled',SWITCH_AWAY:'switched_away_from',INCORRECT_ONLINE_STATE:'incorrect_online_state'},n={},o={},p={},q={},r={},s={},t=false;function u(y,z,aa){var ba=aa.provider;if(!s[ba])return;if(y==='user_action'){switch(aa.action){case c('MusicDiagnostics').TOS_SHOWN:v(ba,m.TOS_SHOWN);break;case c('MusicDiagnostics').PLAY_SONG:r[ba]=l;if(o[ba]===l){v(ba,m.PLAY_INSTALL,i)}else if(n[ba]===l){v(ba,m.PLAY_ALREADY,i)}else v(ba,m.PLAY,i);break;case c('MusicConstants').DIAGNOSTIC_EVENT.SERVICE_ERROR:if(c('MusicConstants').ERROR[aa.code]==='SERVICE_UNAVAILABLE_TECHNICAL_ISSUE')break;case c('MusicDiagnostics').TOS_CLICK_CANCEL:case c('MusicDiagnostics').INSTALL_CLICK_CANCEL:case c('MusicDiagnostics').LAUNCH_CLICK_CANCEL:case c('MusicDiagnostics').SWITCHED_PROVIDER:if(r[ba]===l){r[ba]=true;v(ba,m.PLAY,k)}if(p[ba]===l){p[ba]=true;v(ba,m.INSTALL,k)}if(aa.action===c('MusicDiagnostics').INSTALL_CLICK_CANCEL){v(ba,m.INSTALL_CANCEL)}else if(aa.action===c('MusicDiagnostics').SWITCHED_PROVIDER){v(ba,m.SWITCH_AWAY)}else if(aa.action===c('MusicDiagnostics').LAUNCH_CLICK_CANCEL){v(ba,m.LAUNCH_CANCEL)}else if(aa.action===c('MusicDiagnostics').TOS_CLICK_CANCEL)v(ba,m.TOS_CANCEL);case c('MusicDiagnostics').LAUNCH_NOT_NEEDED:if(q[ba]===l){q[ba]=true;v(ba,m.LAUNCH,k)}if(aa.action===c('MusicDiagnostics').LAUNCH_NOT_NEEDED)n[ba]=l;break;case c('MusicDiagnostics').INSTALL_STARTED:o[ba]=l;p[ba]=l;v(ba,m.INSTALL,i);break;case c('MusicDiagnostics').ATTEMPTING_LAUNCH:q[ba]=l;v(ba,m.LAUNCH,i);break;}}else if(y==='receive'){if(aa.data&&aa.data.playing){if(r[ba]&&r[ba]===l){if(o[ba]===l){o[ba]=false;v(ba,m.PLAY_INSTALL,j)}else if(n[ba]===l){v(ba,m.PLAY_ALREADY,j)}else v(ba,m.PLAY,j);r[ba]=true}if(p[ba]&&p[ba]===l){v(ba,m.INSTALL,j);p[ba]=true}}if(aa.op===c('MusicConstants').STATUS_CHANGE_OP.STATUS){if(p[ba]&&p[ba]===l){v(ba,m.INSTALL,j);p[ba]=true}if(q[ba]&&q[ba]===l){v(ba,m.LAUNCH,j);q[ba]=true}}}else if(y==='state_change')if(aa.to===c('MusicConstants').DIAGNOSTIC_EVENT.OFFLINE){n[ba]=false}else if(aa.data===c('MusicConstants').DIAGNOSTIC_EVENT.INCORRECT_ONLINE_STATE)v(ba,m.INCORRECT_ONLINE_STATE);}function v(y,z,aa){var ba=z;if(aa){ba+='_'+aa;z+='.'+aa}h.debug(ba,y);c('MusicLogger').log(c('MusicLogger').PLATFORM,{type:z,provider:y})}function w(){for(var y in s){if(p[y]===l){p[y]=true;v(y,m.INSTALL,k)}if(q[y]===l){q[y]=true;v(y,m.LAUNCH,k)}if(r[y]===l){r[y]=true;v(y,m.PLAY,k)}}c('MusicLogger').dispatchNow(true)}c('Run').onUnload(w);var x={init:function y(z){s[z]=true;if(t)return;c('Arbiter').subscribe('MusicDiagnostics/state_change',u.bind(null,'state_change'));c('Arbiter').subscribe('MusicDiagnostics/receive',u.bind(null,'receive'));c('Arbiter').subscribe('MusicDiagnostics/user_action',u.bind(null,'user_action'));t=true}};f.exports=b.MusicDiagnosticLogger||x}),null);