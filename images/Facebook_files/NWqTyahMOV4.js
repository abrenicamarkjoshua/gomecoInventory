/*!CK:3223759594!*//*1442197952,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["FGsej"]); }

__d('StarsInput.react',['React','TooltipLink.react','cx','fbt'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();var l=h.PropTypes,m=h.createClass({displayName:'StarsInput',propTypes:{allowMultipleSubmissions:l.bool,count:l.number,large:l.bool,onClick:l.func.isRequired,starLabels:l.array},getDefaultProps:function(){return {allowMultipleSubmissions:false,count:0,large:false,starLabels:[k._("Poor"),k._("Fair"),k._("Good"),k._("Very Good"),k._("Excellent")]};},getInitialState:function(){return {starRating:this.props.count,starsShown:this.props.count,canUpdate:true};},_getStarRating:function(n){return parseInt(n.split('.').pop(),10)+1;},onMouseEnter:function(event){if(this.state.canUpdate)this.setState({starsShown:this._getStarRating(event.dispatchMarker)});},onMouseLeave:function(event){if(this.state.canUpdate){var n=this.state.starRating;this.setState({starsShown:n});}},onClick:function(event){if(this.state.canUpdate){var n=this._getStarRating(event.dispatchMarker);this.setState({starRating:n,starsShown:n,canUpdate:this.props.allowMultipleSubmissions});this.props.onClick(n);}},getStars:function(){var n=this.props.starLabels.length,o=[];for(var p=0;p<n;p++)o.push(h.createElement(i,{className:"mls"+(' '+"_22mm")+(this.props.large?' '+"_1vr2":'')+(p>=this.state.starsShown?' '+"_22mn":'')+(p<this.state.starsShown?' '+"_22mo":'')+(!this.state.canUpdate?' '+"_1g87":''),tooltip:this.props.starLabels[p],onMouseEnter:this.onMouseEnter,onMouseLeave:this.onMouseLeave,onClick:this.onClick,position:'above',alignH:'center'}));return o;},render:function(){return (h.createElement('div',null,this.getStars()));}});f.exports=m;},null);
__d('XUIOverlayButton.react',['AbstractButton.react','React','cx','joinClasses'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();var l=i.createClass({displayName:'XUIOverlayButton',render:function(){var m="_51tl selected";return (i.createElement(h,babelHelpers._extends({},this.props,{className:k(this.props.className,m)})));}});f.exports=l;},null);
__d('MessengerButton.react',['ReactComponentWithPureRenderMixin','React','cx','joinClasses'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();'use strict';var l=i.PropTypes,m=i.createClass({displayName:'MessengerButton',mixins:[h],propTypes:{label:l.string.isRequired,type:l.oneOf(['primary','secondary']).isRequired,use:l.oneOf(['default','danger']).isRequired},getDefaultProps:function(){return {use:'default'};},handleLinkClick:function(n){if(this.props.disabled){n.preventDefault();}else if(this.props.onClick)this.props.onClick(n);},render:function(){var n=this.props,o=n.className,p=n.label,q=babelHelpers.objectWithoutProperties(n,['className','label']);return (i.createElement('a',babelHelpers._extends({className:k("_3quh"+(' '+"_30yy")+(this.props.type==='primary'?' '+"_2t_":'')+(this.props.type==='secondary'?' '+"_2u0":'')+(this.props.use==='danger'?' '+"_3ay_":'')+(this.props.disabled?' '+"_4zab":''),o),href:'#'},q,{onClick:this.handleLinkClick}),p));}});f.exports=m;},null);
__d('MessengerDialog.react',['LayerFadeOnHide','LayerHideOnEscape','React','XUIDialog.react','cx','joinClasses'],function a(b,c,d,e,f,g,h,i,j,k,l,m){if(c.__markCompiled)c.__markCompiled();'use strict';var n=j.PropTypes,o=j.createClass({displayName:'MessengerDialog',propTypes:{onToggle:n.func.isRequired,repositionOnUpdate:n.bool,shown:n.bool,type:n.oneOf(['alert','default']),width:n.number},getDefaultProps:function(){return {repositionOnUpdate:false,shown:true,type:'alert',width:400};},componentDidUpdate:function(){if(this.props.repositionOnUpdate)setTimeout((function(){if(this.isMounted()&&this.refs.dialog&&this.refs.dialog.layer)this.refs.dialog.layer.updatePosition();}).bind(this),0);},render:function(){return (j.createElement(k,babelHelpers._extends({behaviors:{LayerFadeOnHide:h,LayerHideOnEscape:i}},this.props,{className:m("_4ebx",this.props.className),ref:'dialog'}),j.createElement('div',{className:"_4eby"+(this.props.type==='alert'?' '+"_2c9g":'')+(this.props.type==='default'?' '+"_2c9i":'')},this.props.children)));}});f.exports=o;},null);
__d('MessengerDialogBody.react',['React','cx','joinClasses'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();'use strict';var k=h.createClass({displayName:'MessengerDialogBody',render:function(){return (h.createElement('div',{className:j("_4eb-",this.props.className)},this.props.children));}});f.exports=k;},null);
__d('MessengerDialogFooter.react',['LeftRight.react','React','cx','joinClasses'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();'use strict';var l=i.PropTypes,m=i.createClass({displayName:'MessengerDialogFooter',propTypes:{leftContent:l.object},render:function(){return (i.createElement('div',{className:k("_4eb_",this.props.className)},i.createElement(h,null,i.createElement('div',{className:"_2_d1"},this.props.leftContent),i.createElement('div',null,this.props.children))));}});f.exports=m;},null);
__d('MessengerDialogHeader.react',['React','cx','joinClasses'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();'use strict';var k=h.createClass({displayName:'MessengerDialogHeader',render:function(){return (h.createElement('h4',{className:j("_4ebz",this.props.className)},this.props.children));}});f.exports=k;},null);
__d('FBRTCDialogFooter.react',['MessengerDialogFooter.react','XUIDialogFooter.react','FBRTCConfig'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();f.exports=j.isMessengerDotCom()?h:i;},null);
__d('FBRTCScreenSharingView.react',['FBRTCCallControlActions','FBRTCConstants','FBRTCScreenStreamWrapper','FBRTCVideo.react','React','cx','emptyFunction'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n){if(c.__markCompiled)c.__markCompiled();'use strict';var o=l.PropTypes,p=l.createClass({displayName:'FBRTCScreenSharingView',propTypes:{isStandalone:o.bool,screenStream:o.instanceOf(j),screenSrc:o.string},getDefaultProps:function(){return {isStandalone:false};},render:function(){var q=this.props.isStandalone,r=this.props.screenStream,s=this.props.screenSrc;if(r&&r.hasStream()){return (l.createElement('div',{className:this._baseClasses()},this._renderOpenInNewButton(),l.createElement('div',{className:this._wrapperClass()},l.createElement(k,{stream:r}))));}else if(q&&s){return this._renderStandalone(s);}else return l.createElement('div',{className:"_2uql"});},_baseClasses:function(){return "_2uqm"+(this.props.isStandalone?' '+"_2uqn":'');},_buttonClasses:function(){return "_2uqo";},_buttonIconClasses:function(){return "_2uqp";},_wrapperClass:function(){return "_2uqq";},_renderOpenInNewButton:function(){if(!this.props.isStandalone)return (l.createElement('button',{className:this._buttonClasses(),onClick:h.openScreenInNewWindow},l.createElement('i',{className:this._buttonIconClasses()})));},_renderStandalone:function(q){return (l.createElement('div',{className:this._baseClasses()},l.createElement('div',{className:this._wrapperClass()},l.createElement('video',{className:"_4bad",autoPlay:'true',muted:false,onContextMenu:function(r){r.preventDefault();},src:decodeURIComponent(q)}))));}});f.exports=p;},null);