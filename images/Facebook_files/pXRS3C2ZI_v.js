/*!CK:1175744597!*//*1441003879,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["HOqPY"]); }

__d('FBRTCUnsupportedBrowserMessage',['AsyncDialog','AsyncRequest','XBrowserNotSupportedDialogController','FBRTCSoundController'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();var l={_dialog:null,warnForOutgoingCall:function(m){var n=j.getURIBuilder().setBool('warning',true).getURI();this._presentDialog(n,m);},showForOutgoingCall:function(){var m=j.getURIBuilder().getURI();this._presentDialog(m);},showForIncomingCall:function(m,n){k.playIncomingRingtone(m,n,false);var o=j.getURIBuilder().setInt('user_id',n).getURI();this._presentDialog(o);},dismiss:function(){if(this._dialog)this._dialog.hide();},_presentDialog:function(m,n){if(this._dialog)return;var o=new i(m);h.send(o,(function(p){this._dialog=p;p.subscribe('hide',(function(){this._dialog=null;if(n)n();}).bind(this));}).bind(this));}};f.exports=l;},null);