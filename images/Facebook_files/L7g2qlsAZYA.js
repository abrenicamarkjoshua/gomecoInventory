/*!CK:4103168090!*//*1439259288,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["x9r49"]); }

__d('MercurySpecialLogMessageRenderer',['MNCommerceLogMessageUtils','MercuryCallLogMessage.react','MercuryIDs','MercuryLogMessageType','MercuryParticipants','MercuryViewer','P2PMercuryLogMessage.react','React'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o){if(c.__markCompiled)c.__markCompiled();'use strict';var p={renderText:function(t,u){switch(t.log_message_type){case k.VIDEO_CALL:case k.PHONE_CALL:q(t,u);break;case k.ORION:r(t,u);break;case k.PAGE_REPLY:s(t,u);break;default:u(t.log_message_body);break;}}};function q(t,u){var v=t.log_message_data.caller,w=t.log_message_data.callee,x=t.log_message_data.answered,y=v===m.getID(),z=y?w:v;l.get(z,function(aa){var ba=j.getUserIDFromParticipantID(aa.id),ca=aa.short_name?aa.short_name:aa.name;u(o.createElement(i,{peerFBID:ba,peerName:ca,isAnswered:x,isOutgoingCall:y}));});}function r(t,u){var v=t.log_message_data,w=v.senderId,x=v.receiverId;l.getMulti([w,x],function(y){u(o.createElement(n,{amount:v.formattedAmount,receiver:y[x],sender:y[w],subtype:v.subtype,threadFBID:t.thread_fbid,threadID:t.thread_id,transferID:v.transfer_id}));});}function s(t,u){if(h.isCommercePageAdminMessage(t)){u(h.getCommercePageUnlink(t,false));}else u(t.log_message_body);}f.exports=p;},null);