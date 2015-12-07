/*!CK:501235084!*//*1442198279,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["7A+p7"]); }

__d('MessengerContactListRow.react',['Image.react','ImageBlock.react','ImmutableObject','Link.react','MercuryTypeaheadConstants','MessengerContactActions','MessengerContactImage.react','MessengerThreadImage.react','ReactComponentWithPureRenderMixin','React','ReactDOM','cx','fbt','ix'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){if(c.__markCompiled)c.__markCompiled();'use strict';var v=q.PropTypes,w=u('/images/mercury/clients/messenger/core/Checkmark.png'),x=32,y=q.createClass({displayName:'MessengerContactListRow',mixins:[p],propTypes:{actionsClass:v.func,contact:v.instanceOf(j).isRequired,extraActionsEnabled:v.bool.isRequired,isHighlighted:v.bool,isOriginal:v.bool,isSelected:v.bool,onMouseEnter:v.func,onScrollIntoView:v.func,onAction:v.func,presenceStatus:v.string,viewer:v.string.isRequired},getInitialState:function(){return {isActionsOpen:false};},componentDidMount:function(){if(this.props.isHighlighted&&this.props.onScrollIntoView){var z=r.findDOMNode(this);this.props.onScrollIntoView&&this.props.onScrollIntoView(z);this.props.onRenderHighlight&&this.props.onRenderHighlight(z);}},componentDidUpdate:function(z){if(this.props.isHighlighted&&!z.isHighlighted){var aa=r.findDOMNode(this);this.props.onScrollIntoView&&this.props.onScrollIntoView(aa);this.props.onRenderHighlight&&this.props.onRenderHighlight(aa);}},render:function(){return (q.createElement('li',{'aria-selected':this.props.isHighlighted,className:"_5l37"+(this.props.isHighlighted?' '+"_1k1p":'')+(this.state.isActionsOpen?' '+"_rwn":''),role:'option'},q.createElement(k,{className:"_5f0v",onClick:this._handleClick,onMouseDown:this._handleMouseDown,onMouseEnter:this.props.onMouseEnter,tabIndex:this.props.actionsClass?0:-1},q.createElement(i,{contentClassName:"_5l38",spacing:'medium'},this._renderContactImage(),this._renderContactText(),this._renderActions()))));},_handleMouseDown:function(z){if(this.props.actionsClass)return;z.stopPropagation();z.preventDefault();},_handleClick:function(z){z.stopPropagation();this._handleContactAction(m.SELECT,z);},_renderContactImage:function(){if(this.props.contact.photo){return (q.createElement(n,{className:"_5l39 _5rmm",isMessengerUser:this.props.contact.isMessengerUser,size:x,src:this.props.contact.photo}));}else if(this.props.contact.type===l.THREAD_TYPE)return (q.createElement(o,{className:"_5l39",participants:this.props.contact.participants,size:x,thread:this.props.contact.thread,viewer:this.props.viewer}));},_renderContactText:function(){if(this.props.contact.subtitle){return (q.createElement('div',null,q.createElement('div',{className:"_3q34"},this.props.contact.title),q.createElement('div',{className:"_3q35"},this.props.contact.subtitle)));}else return (q.createElement('div',{className:"_364g"},this.props.contact.title));},_renderActions:function(){if(this.props.isOriginal)return (q.createElement('span',{className:"_5rh4"},t._("Added")));if(this.props.isSelected)return (q.createElement(h,{className:"_1kqm",src:w}));if(!!this.props.presenceStatus)return (q.createElement('div',null,q.createElement('div',{className:"_jg2"}),q.createElement('div',{className:"_jg3"},this.props.presenceStatus)));if(this.props.actionsClass){var z=this.props.actionsClass;return (q.createElement(z,{className:"_rwo",contact:this.props.contact,extrasEnabled:this.props.extraActionsEnabled,isOpen:this.state.isActionsOpen,onAction:this._handleContactAction,onToggle:this._handleActionsToggle,viewer:this.props.viewer}));}return null;},_handleContactAction:function(z,event){this.props.onAction&&this.props.onAction(z,event);},_handleActionsToggle:function(z){this.setState({isActionsOpen:z});}});f.exports=y;},null);