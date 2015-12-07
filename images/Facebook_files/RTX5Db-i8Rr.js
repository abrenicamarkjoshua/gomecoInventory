/*!CK:2642984369!*//*1442202707,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["ABhc7"]); }

__d("MachineTranslationScore",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={UNDEFINED:0,VERY_BAD:1,BAD:2,OK:3,GOOD:4,VERY_GOOD:5};},null,{});
__d("TranslationPreferenceEvent",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={CLICK_SEE_ORIGINAL:"click_see_original",CLICK_HIDE_ORIGINAL:"click_hide_original",CLICK_TRANSLATION_PREFERENCES:"click_translation_preferences"};},null,{});
__d("ULMOverrideTrigger",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={OVERRIDE_TOOL:"ULM override tool",NEVER_TRANSLATE_PREFERENCE:"never translate",UNDO_NEVER_TRANSLATE_PREFERENCE:"undo never translate",SPECIFIED_USER_LANGUAGE_MODEL:"specified user language model",NEVER_AUTO_TRANSLATE_PREFERENCE:"never auto translate"};},null,{});
__d("ContentTranslationStrings",["fbt"],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i={AUTOMATICALLY_TRANSLATED:h._(["Automatically Translated","305b16d5359eace004a22985629355ab"]),TRANSLATED_BY_BING:h._("Translated by Bing"),PARTLY_TRANSLATED_BY_BING:h._("Partly translated by Bing"),HIDE_ORIGINAL:h._("Hide Original"),SEE_ORIGINAL:h._("See Original"),REPORT_LANGUAGE_DIALOG_TY:h._("Thank you for letting us know about this error. Your feedback improves translation for everyone on Facebook."),NEVER_TRANSLATE_UNDO:h._("Click here to undo."),UNDO:h._("Undo"),NUX_MESSAGE:h._("This post has been translated into your language. Click here to choose your translation preferences."),getTranslatedFromTo:function(j,k){return h._("Translated from {source language} to {target language}",[h.param("source language",j),h.param("target language",k)]);},getTranslatedFrom:function(j){return h._("Translated from {source language}",[h.param("source language",j)]);},getReportLanguageDialogHeader:function(j){return h._("This wasn't in {language}",[h.param("language",j)]);},getReportLanguage:function(j){return h._("Post was not in {language}",[h.param("language",j)]);},getNeverTranslate:function(j){return h._("Never Translate {language}",[h.param("language",j)]);},getNeverTranslateDialog:function(j){return h._("Posts in {language} won't be translated for you.",[h.param("language",j)]);}};f.exports=i;},null);
__d('LtgScoreFeedbackButton.react',['LayerFadeOnHide','React','ReactDOM','BanzaiLogger','ReactLayeredComponentMixin','XUIContextualDialog.react','XUIContextualDialogBody.react','XUIContextualDialogTitle.react','XUIGrayText.react','MachineTranslationScore','cx','fbt'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){if(c.__markCompiled)c.__markCompiled();var t=i.PropTypes,u={};u[q.VERY_BAD]=s._("Very bad.");u[q.BAD]=s._("Bad.");u[q.OK]=s._("OK.");u[q.GOOD]=s._("Good.");u[q.VERY_GOOD]=s._("Very good.");var v={};v[q.VERY_BAD]=s._("I can't understand anything.");v[q.BAD]=s._("I can't understand most of this.");v[q.OK]=s._("I can understand enough of this.");v[q.GOOD]=s._("I can understand most of this.");v[q.VERY_GOOD]=s._("I can understand everything.");var w=[q.VERY_BAD,q.BAD,q.OK,q.GOOD,q.VERY_GOOD],x=i.createClass({displayName:'LtgScoreFeedbackButton',mixins:[l],propTypes:{feedbackTargetID:t.string,text:t.string,translation:t.string,authorID:t.string,sourceLocale:t.string,targetLocale:t.string,originalConfidence:t.number,scaledConfidence:t.number,translationTrigger:t.string,translationID:t.string,viewerID:t.number,fbtypeEnum:t.number,systemID:t.string},getInitialState:function(){return {score:this.props.scaledConfidence,defaultScore:this.props.scaledConfidence,hasDefaultPosition:true,hoverScore:q.BAD,hasHoverState:false,hasFeedbackConfirmation:false};},renderDefaultTooltipDialogBody:function(){return (i.createElement(n,null,i.createElement(p,{shade:'dark',size:'small',weight:'bold'},u[this.state.hoverScore]),i.createElement(p,{shade:'dark',size:'small'}," "+v[this.state.hoverScore])));},renderTooltipAfterUserFeedbackDialogBody:function(){return (i.createElement(n,null,i.createElement(p,{shade:'dark',size:'small'},s._("You rated this:")+" "),i.createElement(p,{shade:'dark',size:'small',weight:'bold'},u[this.state.score]),i.createElement(p,{shade:'dark',size:'small'}," "+s._("Thanks for helping us make this better."))));},onSlotClick:function(y,event){if(this.state.hasDefaultPosition||y!=this.state.score){this._logUserRating(y);this.setState({hasDefaultPosition:false,score:y,hasFeedbackConfirmation:true});setTimeout((function(){this.setState({hasFeedbackConfirmation:false});}).bind(this),1500);}},onSlotMouseEnter:function(y,event){this.setState({hasHoverState:true,hoverScore:y});},onSlotMouseLeave:function(y,event){this.setState({hasHoverState:false});},getRefNameByScore:function(y){return "scores-button-slot-"+y;},renderLayers:function(){var y=this.getRefNameByScore(this.state.hoverScore);return {tooltipDialog:i.createElement(m,{hoverContext:j.findDOMNode(this.refs[y]),shown:this.state.hasHoverState,contextRef:(function(){return this.refs[y];}).bind(this),position:'below',width:250},i.createElement(o,null,i.createElement(p,{shade:'medium',size:'small',display:'block'},s._("Rate This Translation"))),this.state.hasDefaultPosition?this.renderDefaultTooltipDialogBody():this.renderTooltipAfterUserFeedbackDialogBody()),hasFeedbackConfirmationDialog:i.createElement(m,{contextRef:(function(){return this.refs['scores-button'];}).bind(this),shown:this.state.hasFeedbackConfirmation,position:'above',behaviors:{LayerFadeOnHide:h}},i.createElement(o,null,i.createElement(p,{shade:'medium',size:'small',display:'block'},s._("Success!"))),i.createElement(n,null,i.createElement(p,{shade:'dark',size:'small',display:'block'},s._("Thank you for the feedback"))))};},renderSlot:function(y,z){var aa="_5mln"+(z<=y?' '+"_5mlo":'');return (i.createElement('div',{ref:this.getRefNameByScore(z),className:aa,key:'slot_'+z,onClick:this.onSlotClick.bind(this,z),onMouseEnter:this.onSlotMouseEnter.bind(this,z),onMouseLeave:this.onSlotMouseLeave.bind(this,z)}));},render:function(){var y=this.state.hasHoverState?this.state.hoverScore:this.state.score,z="_5mlr"+(!this.state.hasDefaultPosition?' '+"_5mls":'');return (i.createElement('div',{className:z,ref:'scores-button'},w.map(this.renderSlot.bind(this,y))));},_logUserRating:function(y){k.log('LtgTranslationUserFeedbackLoggerConfig',{translation_id:this.props.translationID,viewer_id:this.props.viewerID,fbid:this.props.feedbackTargetID,fbtype_enum:this.props.fbtypeEnum,author_id:this.props.authorID,translation_trigger:this.props.translationTrigger,content_locale:this.props.sourceLocale,target_locale:this.props.targetLocale,system_id:this.props.systemID,input_text:this.props.text,translated_text:this.props.translation,original_translation_confidence:this.props.originalConfidence,scaled_translation_confidence:this.props.scaledConfidence,user_rating:y});}});f.exports=x;},null);
__d("XLtgTranslationNUXController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/translation_preferences\/nux\/",{});},null,{});
__d("XLtgNeverTranslatePreferenceController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/translation_preferences\/never_translate\/",{locale:{type:"String",required:true},event_trigger:{type:"Enum",required:true,enumType:1}});},null,{});
__d('LtgNeverTranslatePreference.react',['AsyncRequest','ContentTranslationStrings','React','ULMOverrideTrigger','XLtgNeverTranslatePreferenceController','Link.react','SimpleXUIDialog','XUIDialogButton.react','XUIDialogOkayButton.react','cx','emptyFunction'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){if(c.__markCompiled)c.__markCompiled();'use strict';var s=j.PropTypes,t=j.createClass({displayName:'LtgNeverTranslatePreference',propTypes:{onPreferenceClick:s.func.isRequired,sourceLocale:s.string.isRequired,sourceLocaleName:s.string.isRequired},render:function(){return (j.createElement(m,{className:"_5qpb",onClick:this._onNeverTranslateClick},i.getNeverTranslate(this.props.sourceLocaleName)));},_onNeverTranslateClick:function(){this._sendNeverTranslateRequest(k.NEVER_TRANSLATE_PREFERENCE,this._onConfirm);this.props.onPreferenceClick();},_sendNeverTranslateRequest:function(u,v){new h().setURI(l.getURIBuilder().setString('locale',this.props.sourceLocale).setEnum('event_trigger',u).getURI()).setHandler((function(w){if(this.isMounted()&&w.payload.success)v();}).bind(this)).send();},_onConfirm:function(){n.showEx(i.getNeverTranslateDialog(this.props.sourceLocaleName),i.getNeverTranslate(this.props.sourceLocaleName),j.createElement('div',null,j.createElement(o,{action:'cancel',label:i.UNDO,onClick:this._onUndoClick,use:'default'}),j.createElement(p,{action:'cancel',use:'confirm'})));},_onUndoClick:function(){this._sendNeverTranslateRequest(k.UNDO_NEVER_TRANSLATE_PREFERENCE,r);}});f.exports=t;},null);
__d('LtgReportLanguageTranslationPreference.react',['BanzaiLogger','ContentTranslationStrings','React','ReactComponentWithPureRenderMixin','Link.react','SimpleXUIDialog','cx'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n){if(c.__markCompiled)c.__markCompiled();'use strict';var o=j.PropTypes,p=j.createClass({displayName:'LtgReportLanguageTranslationPreference',mixins:[k],propTypes:{feedbackTargetID:o.string.isRequired,isShown:o.bool.isRequired,onPreferenceClick:o.func.isRequired,sourceLocale:o.string.isRequired,sourceLocaleName:o.string.isRequired,text:o.string.isRequired},render:function(){if(!this.props.isShown)return null;return (j.createElement(l,{onClick:this._handleReportLanguageClick,className:"_5qpb"},i.getReportLanguage(this.props.sourceLocaleName)));},_handleReportLanguageClick:function(){this._reportAndShowConfirmation();this.props.onPreferenceClick();},_reportAndShowConfirmation:function(){this._logReportLanguage();m.show(i.REPORT_LANGUAGE_DIALOG_TY,i.getReportLanguageDialogHeader(this.props.sourceLocaleName));},_logReportLanguage:function(){h.log('LtgLanguageFeedbackLoggerConfig',{fbid:this.props.feedbackTargetID,text:this.props.text,detected_locale:this.props.sourceLocale});}});f.exports=p;},null);
__d('LtgTranslationDropdownMenu.react',['ContextualLayerAutoFlip','ContextualLayerUpdateOnScroll','LayerHideOnBlur','LayerFadeOnHide','React','XUIContextualDialog.react','cx'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n){if(c.__markCompiled)c.__markCompiled();'use strict';var o=l.createClass({displayName:'LtgTranslationDropdownMenu',render:function(){var p=this.props,q=p.children,r=babelHelpers.objectWithoutProperties(p,['children']);return (l.createElement(m,babelHelpers._extends({behaviors:{ContextualLayerAutoFlip:h,ContextualLayerUpdateOnScroll:i,LayerHideOnBlur:j,LayerFadeOnHide:k}},r),l.createElement('div',{className:"_4d4g"},q)));}});f.exports=o;},null);
__d('LtgTranslationPreferencesDropdown.react',['AsyncRequest','ContentTranslationStrings','React','ReactDOM','ReactComponentWithPureRenderMixin','ReactLayeredComponentMixin','UFITranslationConstants','BanzaiLogger','TranslationPreferenceEvent','XLtgTranslationNUXController','Link.react','LtgNeverTranslatePreference.react','LtgReportLanguageTranslationPreference.react','LtgTranslationDropdownMenu.react','XUIAmbientNUX.react','cx'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w){if(c.__markCompiled)c.__markCompiled();'use strict';var x=j.PropTypes,y=j.createClass({displayName:'LtgTranslationPreferencesDropdown',mixins:[m,l],getInitialState:function(){return {isShowingNux:this.props.shouldShowNux,isShown:false};},propTypes:{feedbackTargetID:x.string.isRequired,isShowingOriginal:x.bool.isRequired,shouldShowNux:x.bool,shouldShowPreferences:x.bool.isRequired,showNewUI:x.bool,sourceLocale:x.string.isRequired,sourceLocaleName:x.string.isRequired,targetLocaleName:x.string.isRequired,text:x.string.isRequired,translationApp:x.string},getDefaultProps:function(){return {shouldShowNux:false,translationApp:n.FB_TRANSLATOR_APP};},componentDidMount:function(){this._onNUXMount();},render:function(){var z=this._getAttributionText(this.props.sourceLocaleName);return this.props.shouldShowPreferences?j.createElement(r,{ref:'translationAttributionLink',onClick:this._handleLinkClick},z):j.createElement('span',null,z);},renderLayers:function(){return {contextualDialog:j.createElement(u,{context:k.findDOMNode(this.refs.translationAttributionLink),onToggle:(function(z){return this._handleToggle(z);}).bind(this),position:'below',shown:this.state.isShown},j.createElement('div',{className:"_jju"},i.getTranslatedFromTo(this.props.sourceLocaleName,this.props.targetLocaleName)),j.createElement(s,{onPreferenceClick:this._handleLinkClick,sourceLocale:this.props.sourceLocale,sourceLocaleName:this.props.sourceLocaleName}),j.createElement(t,{feedbackTargetID:this.props.feedbackTargetID,isShown:this.props.isShowingOriginal,onPreferenceClick:this._handleLinkClick,sourceLocale:this.props.sourceLocale,sourceLocaleName:this.props.sourceLocaleName,text:this.props.text})),preferencesNUX:j.createElement(v,{contextRef:(function(){return this.refs.translationAttributionLink;}).bind(this),onCloseButtonClick:this._onNUXClose,position:'below',shown:this.state.isShowingNux},i.NUX_MESSAGE)};},_getAttributionText:function(z){var aa=this.props.translationApp;if(aa===n.BING_TRANSLATOR_APP)return i.TRANSLATED_BY_BING;if(aa===n.FB_AND_BING_TRANSLATOR_APP)return i.PARTLY_TRANSLATED_BY_BING;if(this.props.showNewUI)return i.getTranslatedFrom(z);return i.AUTOMATICALLY_TRANSLATED;},_handleToggle:function(z){this.setState({isShown:z});},_handleLinkClick:function(){if(!this.state.isShown)this._logTranslationPreferencesClick();this.setState({isShown:!this.state.isShown});this._onNUXClose();},_onNUXMount:function(){if(!this.state.isShowingNux)return;new h().setURI(q.getURIBuilder().getURI()).send();},_onNUXClose:function(){this.setState({isShowingNux:false});},_logTranslationPreferencesClick:function(){o.log('LtgTranslationPreferencesLoggerConfig',{translation_id:this.props.translationID,translation_app:this.props.translationApp,fbid:this.props.feedbackTargetID,content_locale:this.props.sourceLocale,target_locale:this.props.targetLocale,author_id:this.props.authorID,viewer_id:this.props.viewerID,viewer_understood_locales:this.props.viewerLocales,translation_trigger:this.props.translationTrigger,click_type:p.CLICK_TRANSLATION_PREFERENCES});}});f.exports=y;},null);
__d('LtgAutoTranslation.react',['CSS','ContentTranslationStrings','React','BanzaiLogger','TranslationPreferenceEvent','Link.react','LtgScoreFeedbackButton.react','LtgTranslationPreferencesDropdown.react','cx','highlight'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){if(c.__markCompiled)c.__markCompiled();var r=j.PropTypes,s=j.createClass({displayName:'LtgAutoTranslation',propTypes:{originalMessage:r.object.isRequired,translatedMessage:r.object.isRequired,shouldShowNux:r.bool,shouldShowPreferences:r.bool,showNewUI:r.bool},getDefaultProps:function(){return {shouldShowNux:false,shouldShowPreferences:false};},getInitialState:function(){return {isShowingOriginal:false};},render:function(){var t=this.state.isShowingOriginal?i.HIDE_ORIGINAL:i.SEE_ORIGINAL,u=!this.props.showNewUI;return (j.createElement('div',{className:"_5pio"+(this.state.isShowingOriginal&&u?' '+"_3-9b":'')},j.createElement(o,babelHelpers._extends({isShowingOriginal:this.state.isShowingOriginal,showNewUI:this.props.showNewUI},this.props)),' ','·',' ',j.createElement(m,{onClick:this._toggle},t),j.createElement('div',{className:"_43f8"},j.createElement(n,this.props))));},_toggle:function(){this.state.isShowingOriginal?this._hideOriginal():this._showOriginal();this.setState({isShowingOriginal:!this.state.isShowingOriginal});},_showOriginal:function(){var t=this.props.originalMessage;if(!this.props.showNewUI)h.addClass(this.props.translatedMessage,"_3-9b");h.show(t);this._logShowOriginalClick(l.CLICK_SEE_ORIGINAL);q(t);},_hideOriginal:function(){if(!this.props.showNewUI)h.removeClass(this.props.translatedMessage,"_3-9b");h.hide(this.props.originalMessage);this._logShowOriginalClick(l.CLICK_HIDE_ORIGINAL);},_logShowOriginalClick:function(t){k.log('LtgTranslationPreferencesLoggerConfig',{translation_id:this.props.translationID,translation_app:this.props.translationApp,fbid:this.props.feedbackTargetID,content_locale:this.props.sourceLocale,target_locale:this.props.targetLocale,author_id:this.props.authorID,viewer_id:this.props.viewerID,viewer_understood_locales:this.props.viewerLocales,translation_trigger:this.props.translationTrigger,click_type:t});}});f.exports=s;},null);