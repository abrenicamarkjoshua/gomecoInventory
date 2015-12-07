/*!CK:3543752865!*//*1441003879,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["NAD6x"]); }

__d('FBRTCSoundController',['RTCConfig','Sound'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j=[h.ringtone_mp3_url,h.ringtone_ogg_url],k={playIncomingRingtone:function(l,m,n){var o=['incoming_ringtone',l.toString(),m.toString()].join('_');i.play(j,o,n);},stopIncomingRingtone:function(){i.stop(j);}};f.exports=k;},null);