/*!CK:5913683!*//*1442197880,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["Aak\/I"]); }

__d('P2PForm.react',['P2PErrorDialog.react','P2PErrorNotice.react','React','ReactLayeredComponentMixin','cloneWithProps','cx','emptyFunction','getObjectValues'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o){if(c.__markCompiled)c.__markCompiled();'use strict';var p=j.PropTypes,q=j.createClass({displayName:'P2PForm',mixins:[k],propTypes:{errorTitle:p.string,onErrorDialogOKClick:p.func,onValidation:p.func.isRequired,prefilledFormData:p.object,rendersErrorDialog:p.bool,saveErrors:p.object},getDefaultProps:function(){return {onErrorDialogOKClick:n,prefilledFormData:{},rendersErrorDialog:false,saveErrors:null};},getInitialState:function(){var r=this.props.prefilledFormData,s=this.props.children,t={};j.Children.forEach(s,function(u,v){t[u.props.name]={valid:false,value:r?r[u.props.name]:''};});return {fields:t,isValid:false};},handleFormValueChange:function(r,s,t){var u=this.state.fields;u[r]={valid:t,value:s};this.validateForm();},validateForm:function(){var r=true,s=this.state.fields;r=!o(s).some(function(t){return !t.valid;});this.setState({isValid:r});this.props.onValidation(r,this.serializeFormFields());},serializeFormFields:function(){var r=this.state.fields,s={};for(var t in r)if(r.hasOwnProperty(t))s[t]=r[t].value;return s;},getSaveError:function(r){var s='',t=this.props.saveErrors;if(t&&t.fields&&t.fields[r])s=t.fields[r].message;return s;},renderGeneralError:function(){var r=this.getGeneralError();if(r)return (j.createElement(i,{error:r}));},getGeneralError:function(){if(this.props.saveErrors&&this.props.saveErrors.general)return this.props.saveErrors.general;return null;},handleErrorOKClick:function(){if(this.props.onErrorDialogOKClick)this.props.onErrorDialogOKClick();},renderLayers:function(){var r=this.getGeneralError();if(!this.props.rendersErrorDialog||!r)return {};return {errorMessageDialog:j.createElement(h,{error:r,onOKClick:this.handleErrorOKClick,title:this.props.errorTitle})};},renderFormFields:function(){var r=[],s=[],t=0,u=this.props.children,v=j.Children.count(u);j.Children.forEach(u,(function(w,x){if(!w)return null;var y=parseInt(w.props.width||'100',10),z=w.props.name;w=l(w,{key:z,onChange:this.handleFormValueChange,saveError:this.getSaveError(z),value:this.state.fields[z].value});if(Math.round(t)<100)r.push(w);t+=y;if(Math.round(t)===100){s.push(j.createElement('div',{className:"_pe-"+(r.length===2?' '+"_pe_":'')+(s.length===0?' '+"_pf0":'')+(x===v-1?' '+"_pf1":''),key:s.length},r));r=[];t=0;}}).bind(this));return s;},render:function(){return (j.createElement('form',{className:"_pf2"},!this.props.rendersErrorDialog?this.renderGeneralError():null,this.renderFormFields()));}});f.exports=q;},null);