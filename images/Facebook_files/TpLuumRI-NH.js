/*!CK:2607279481!*//*1441681613,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["cmcbu"]); }

__d("ActorSelectorNuxTypes",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={COMPOSER:"composer_seen_count",COMPOSER_COVERED:"composer_covered_seen_count",M_COMPOSER:"m_composer_seen_count",M_UFI:"m_ufi_seen_count",UFI:"ufi_seen_count",UFI_TIMELINE:"ufi_timeline_seen_count",UFI_TIMELINE_COVERED:"ufi_timeline_covered_seen_count"};},null,{});
__d('AbstractPopoverButton.react',['React','URI','cloneWithProps','cx','joinClasses'],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();var m=h.PropTypes,n=h.createClass({displayName:'AbstractPopoverButton',propTypes:{config:m.object.isRequired,haschevron:m.bool,maxwidth:m.number},getDefaultProps:function(){return {haschevron:true};},render:function(){var o=this.props.config,p={},q=o.defaultMaxWidth;if(typeof this.props.maxwidth!=='undefined')q=this.props.maxwidth;var r=null;if(q){var s=this.props.haschevron?q-o.chevronWidth:q;if(this.props.label)r={maxWidth:s+'px'};p.style=babelHelpers._extends({},p.style,{maxWidth:q+'px'});}p.image=null;var t=null;if(this.props.image&&this.props.label){t=j(this.props.image,{className:"_3-8_"});}else if(this.props.image)t=this.props.image;if(t||this.props.label)p.label=h.createElement('span',{className:"_55pe",style:r},t,this.props.label);if(this.props.haschevron)p.imageRight=o.chevron;p.className=l(o.button.props.className,"_2agf");p.href=new i('#');return j(o.button,p);}});f.exports=n;},null);
__d('XUIPopoverButton.react',['AbstractPopoverButton.react','Image.react','React','XUIButton.react','cx','ix','joinClasses'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n){if(c.__markCompiled)c.__markCompiled();var o=j.PropTypes,p=j.createClass({displayName:'ReactXUIPopoverButton',propTypes:{haschevron:o.bool,maxwidth:o.number},statics:{getButtonSize:function(q){return q.size||'medium';}},render:function(){var q=p.getButtonSize(this.props),r="_55pi";if(this.props.theme==='dark')r=n(r,"_5vto"+(q==='small'?' '+"_55_o":'')+(q==='medium'?' '+"_55_p":'')+(q==='large'?' '+"_55_q":'')+(q==='xlarge'?' '+"_55_r":'')+(q==='xxlarge'?' '+"_55_s":''));var s=this.props.chevron;if(!s){var t=this.props.theme==='dark'||this.props.use==='confirm'||this.props.use==='special'?m('/images/ui/x/button/dark/chevron.png'):m('/images/ui/x/button/normal/chevron.png');s=j.createElement(i,{src:t});}var u={button:j.createElement(k,babelHelpers._extends({},this.props,{className:n(this.props.className,r),size:q})),chevron:s,chevronWidth:14,defaultMaxWidth:this.props.maxwidth||200};return (j.createElement(h,{config:u,haschevron:this.props.haschevron,image:this.props.image,label:this.props.label,maxwidth:this.props.maxwidth}));}});f.exports=p;},null);
__d('ActorSelectorPlaceholder.react',['Image.react','React','ReactDOM','TooltipData','XUIPopoverButton.react','cx','fbt','ix'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o){if(c.__markCompiled)c.__markCompiled();var p=i.createClass({displayName:'ActorSelectorPlaceholder',getDefaultProps:function(){return {onActivate:function(){}};},componentDidMount:function(){if(this.props.focusOnInit&&this.refs['open-menu-button'])j.findDOMNode(this.refs['open-menu-button']).focus();var q=n._("Like or comment as one of the Pages you manage.");k.set(j.findDOMNode(this.refs['open-menu-button']),q,'above','right');},render:function(){return (i.createElement(l,{className:"_4z8-",haschevron:false,image:i.createElement(h,{width:16,height:16,src:o('images/pages/voice/flag.png')}),onFocus:(function(){return this.props.onActivate(true);}).bind(this),onMouseOver:(function(){return this.props.onActivate(false);}).bind(this),ref:'open-menu-button',suppressed:true,type:'button'}));}});f.exports=p;},null);
__d('XUIContextualDialogBody.react',['React'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=h.createClass({displayName:'XUIContextualDialogBody',render:function(){return (h.createElement('div',{className:this.props.className},this.props.children));}});f.exports=i;},null);
__d('XUIContextualDialogFooter.react',['React','XUIOverlayFooter.react','cx'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k=h.createClass({displayName:'XUIContextualDialogFooter',render:function(){return (h.createElement(i,{className:"_572u"},this.props.children));}});f.exports=k;},null);
__d('XUIContextualDialogTitle.react',['React','cx','joinClasses'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k=h.PropTypes,l=h.createClass({displayName:'XUIContextualDialogTitle',propTypes:{use:k.oneOf(['primary','secondary'])},getDefaultProps:function(){return {use:'primary'};},render:function(){var m=this.props.use,n=j("_47lu"+(m==='primary'?' '+"_47lv":'')+(m==='secondary'?' '+"_47mc":''),this.props.className);return (h.createElement('h3',{className:n},this.props.children));}});f.exports=l;},null);
__d('XUIContextualDialog.react',['HasLayerContextMixin','ContextualDialogXUITheme','React','ReactAbstractContextualDialog','ReactLayer','XUIContextualDialogBody.react','XUIContextualDialogFooter.react','XUIContextualDialogTitle.react','cx'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){if(c.__markCompiled)c.__markCompiled();var q=j.PropTypes,r=l.createClass(k.createSpec({displayName:'ReactXUIContextualDialog',theme:i})),s=j.createClass({displayName:'XUIContextualDialog',mixins:[h],propTypes:{position:q.oneOf(['above','below','left','right']),alignment:q.oneOf(['left','center','right']),offsetX:q.number,offsetY:q.number,width:q.number,autoFocus:q.bool,arrowBehavior:q.func,behaviors:q.object,shown:q.bool,context:q.object,contextRef:q.func,hoverContext:q.object,hoverContextRef:q.func,hoverShowDelay:q.number,hoverHideDelay:q.number,hideOnEscape:q.bool,onToggle:q.func,hasActionableContext:q.bool},getDefaultProps:function(){return {hasActionableContext:false,hideOnEscape:true};},_getDialogBody:function(){return this._getChildOfType(m);},_getDialogTitle:function(){return this._getChildOfType(o);},_getDialogFooter:function(){return this._getChildOfType(n);},_getChildOfType:function(t){var u=null;j.Children.forEach(this.props.children,function(v){if(!u&&v.type===t)u=v;});return u;},updatePosition:function(){var t=this.refs.dialog;if(t)t.layer.updatePosition();},render:function(){var t=this.props.children,u=this._getDialogBody();if(u)t=j.createElement('div',{className:"_53iv"},this._getDialogTitle(),u);return (j.createElement(r,babelHelpers._extends({},this.props,{ref:'dialog',context:this.getContextNode()}),t,u?this._getDialogFooter():null));}});s.WIDTH={NORMAL:312,WIDE:400};f.exports=s;},null);
__d('XUIDialogOkayButton.react',['React','XUIDialogButton.react','cx','fbt','joinClasses'],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();var m=h.PropTypes,n=h.createClass({displayName:'XUIDialogOkayButton',propTypes:{action:m.oneOf(['confirm','cancel','button']).isRequired},render:function(){return (h.createElement(i,babelHelpers._extends({},this.props,{className:l(this.props.className,"_2z1w"),action:this.props.action,label:k._("OK")})));}});f.exports=n;},null);
__d('XUIMenuSeparator.react',['MenuSeparator.react'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=h;f.exports=i;},null);
__d("ReactSelectorUtils",["React"],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i={processMenuItems:function(j,k){var l,m=h.Children.map(j,function(n){if(n){var o=n.props.value===k;n=h.cloneElement(n,{selected:o});if(o)l=n;return n;}});return {items:m,selectedItem:l};},processMultiMenuItems:function(j,k){var l=[],m=j;if(k)m=h.Children.map(j,function(n){if(n){var o=k.some(function(p){return p===n.props.value;});n=h.cloneElement(n,{selected:o});if(o)l.push(n);return n;}});return {items:m,selectedItems:l};}};f.exports=i;},null);
__d('PopoverMenuContextMinWidth',['CSS','Style','cx','shield'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();function l(m){'use strict';this._popoverMenu=m;this._popover=m.getPopover();}l.prototype.enable=function(){'use strict';this._setMenuSubscription=this._popoverMenu.subscribe('setMenu',k(this._onSetMenu,this));};l.prototype.disable=function(){'use strict';this._setMenuSubscription.unsubscribe();this._setMenuSubscription=null;if(this._showSubscription){this._showSubscription.unsubscribe();this._showSubscription=null;}if(this._menuSubscription){this._menuSubscription.unsubscribe();this._menuSubscription=null;}};l.prototype._onSetMenu=function(){'use strict';this._menu=this._popoverMenu.getMenu();this._showSubscription=this._popover.subscribe('show',k(this._updateWidth,this));var m=this._updateWidth.bind(this);this._menuSubscription=this._menu.subscribe(['change','resize'],function(){setTimeout(m,0);});this._updateWidth();};l.prototype._updateWidth=function(){'use strict';var m=this._menu.getRoot(),n=this._popoverMenu.getTriggerElem(),o=n.offsetWidth;i.set(m,'min-width',o+'px');h.conditionClass(m,"_575s",o>=m.offsetWidth);};Object.assign(l.prototype,{_setMenuSubscription:null,_showSubscription:null,_menuSubscription:null});f.exports=l;},null);
__d('AbstractSelector.react',['InlineBlock.react','React','PopoverMenu.react','ReactSelectorUtils','ContextualLayerAutoFlip','PopoverMenuContextMinWidth','PopoverMenuOverlappingBorder','cloneWithProps','cx','invariant','joinClasses','intlList'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){if(c.__markCompiled)c.__markCompiled();var t=i.PropTypes;function u(w,x,y){if(w[x]==null)return;var z=Array.isArray(w[x]);if(w.multiple){if(!z)return new Error('You are trying to set a single value for `'+x+'` '+'but the menu has `multiple` set to true, so it should be an '+'array of values.');}else if(z)return new Error('You are trying to set an array of values for `'+x+'` '+'but the menu has `multiple` set to false, so it should be a '+'single value.');}var v=i.createClass({displayName:'AbstractSelector',propTypes:{config:t.object.isRequired,alignh:t.oneOf(['left','center','right']),name:t.string,overlappingborder:t.bool,onChange:t.func,disabled:t.bool,maxheight:t.number,multiple:t.bool,defaultLabel:t.string,defaultValue:u,value:u,initialValue:u},getInitialState:function(){return {value:this.props.value!=null?this.props.value:this.props.defaultValue!=null?this.props.defaultValue:this.props.initialValue};},setMenuValue:function(w){!(this.refs&&this.refs.popover)?q(0):undefined;this._internalChange=true;this.refs.popover.getMenu().setValue(w);this._internalChange=false;},onChange:function(w,x){if(this._internalChange)return;if(this.props.value==null){var y=null;if(this.props.multiple){y=x.map(function(z){return z.value;});}else y=x.value;this.setState({value:y});}else this.setMenuValue(this.props.value);if(this.props.onChange)this.props.onChange(x);},componentWillReceiveProps:function(w){if(w.value!=null){this.setState({value:w.value});}else if(this.props.multiple!==w.multiple)this.setState({value:w.multiple?[this.state.value]:this.state.value[0]});},render:function(){var w=this.props.config,x=!this.props.multiple?k.processMenuItems(this.props.children,this.state.value):k.processMultiMenuItems(this.props.children,this.state.value),y=o(w.menu,{children:x.items,className:r("_575t",w.menu.props.className),maxheight:this.props.maxheight,onChange:this.onChange}),z='',aa=null;if(!this.props.multiple){var ba=x.selectedItem;z=ba.props.label||ba.props.children;if(ba.props.icon)aa=o(ba.props.icon,{});}else{var ca=x.selectedItems;if(!ca.length){z=this.props.defaultLabel;}else z=s(ca.map(function(ka){return ka.props.children;}),s.CONJUNCTIONS.NONE);}var da={label:z,disabled:this.props.disabled};if(aa)da.image=aa;var ea=o(w.button,da),fa=[l];if(w.layerBehaviors)fa=fa.concat(w.layerBehaviors);var ga=[m];if(this.props.overlappingborder)ga.push(n);var ha=null;if(this.props.multiple){var ia=this.props.name+'[]',ja;if(this.state.value)ja=this.state.value.map(function(ka){return (i.createElement('input',{key:ka,type:'hidden',name:ia,value:ka}));});ha=i.createElement('div',null,ja);}else ha=i.createElement('input',{type:'hidden',name:this.props.name,value:this.state.value});return (i.createElement(h,babelHelpers._extends({},this.props,{alignv:'middle',name:null}),i.createElement(j,{ref:'popover',menu:y,alignh:this.props.alignh,layerBehaviors:fa,behaviors:ga,disabled:this.props.disabled},ea),ha));},showMenu:function(){!this.isMounted()?q(0):undefined;this.refs.popover.showPopover();},hideMenu:function(){!this.isMounted()?q(0):undefined;this.refs.popover.hidePopover();}});f.exports=v;},null);
__d('XUISelectorButton.react',['React','XUIPopoverButton.react','invariant'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k=h.createClass({displayName:'XUISelectorButton',render:function(){!!this.props.theme?j(0):undefined;return (h.createElement(i,babelHelpers._extends({},this.props,{theme:'dark'})));}});f.exports=k;},null);
__d('XUISelector.react',['AbstractSelector.react','ContextualLayerPositionClassOnContext','React','ReactChildren','ReactXUIMenu','XUISelectorButton.react','invariant'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n){if(c.__markCompiled)c.__markCompiled();var o=l.SelectableMenu,p=l.SelectableItem,q=j.PropTypes,r=j.createClass({displayName:'ReactXUISelector',propTypes:{layerBehaviors:q.array,maxheight:q.number,multiple:q.bool,disabled:q.bool,haschevron:q.bool,maxwidth:q.number,size:q.oneOf(['small','medium','large','xlarge','xxlarge']),suppressed:q.bool,use:q.oneOf(['default','special','confirm'])},statics:{getButtonSize:function(s){return s.size||'medium';}},getDefaultProps:function(){return {haschevron:true,layerBehaviors:[],multiple:false};},render:function(){var s,t=[];k.forEach(this.props.children,function(v){if(v)t.push(v);});if(t[0]&&t[0].type===m){s=t[0];t=t.slice(1);}else s=j.createElement(m,{haschevron:this.props.haschevron,disabled:this.props.disabled,use:this.props.use,size:this.props.size,suppressed:this.props.suppressed,maxwidth:this.props.maxwidth});var u={button:s,menu:j.createElement(o,{maxheight:this.props.maxheight,multiple:this.props.multiple}),layerBehaviors:this.props.layerBehaviors.concat([i])};return (j.createElement(h,babelHelpers._extends({},this.props,{ref:'abstractSelector',config:u}),t));},showMenu:function(){!this.isMounted()?n(0):undefined;this.refs.abstractSelector.showMenu();},hideMenu:function(){!this.isMounted()?n(0):undefined;this.refs.abstractSelector.hideMenu();}});r.Option=p;f.exports=r;},null);
__d('ActorSelector.react',['ActorSelectorPlaceholder.react','BizSiteIdentifier.brands','BootloadedComponent.react','Bootloader','CurrentUser','DOM','DOMScroll','Event','Focus','Image.react','JSResource','LayerFadeOnHide','LayerFadeOnShow','ModulePerformanceGating','React','ReactDOM','ReactLayeredComponentMixin','ShortProfiles','TooltipData','XUIContextualDialog.react','XUIDialogBody.react','XUIDialogFooter.react','XUIDialogOkayButton.react','XUIMenuSeparator.react','XUISelector.react','XUISpinner.react','cx','fbt','getObjectValues','goURI','ix','joinClasses','mapObject','tidyEvent','BrandsAppConfig'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ba,ca,da,ea,fa,ga,ha,ia,ja,ka,la,ma,na,oa){if(c.__markCompiled)c.__markCompiled();var pa=fa.Option,qa=c('BrandsAppConfig').gk;if(!u.bootload_page_voice_dropdown)k.loadModules(["PageVoiceDropdownSelector.react"],function(){});var ra=v.PropTypes,sa=32,ta=195,ua=500,va=175,wa=16,xa=v.createClass({displayName:'ActorSelector',mixins:[x],propTypes:{actorIDs:ra.array.isRequired,actorPermissions:ra.object,coverEnabled:ra.bool.isRequired,focusOnInit:ra.bool,loading:ra.bool,nuxBody:ra.node,nuxEnabledCovered:ra.bool,nuxEnabledUncovered:ra.bool,nuxHoverContext:ra.object,onChange:ra.func.isRequired,onCompleteNux:ra.func,selectedActorID:ra.string,settingsURI:ra.string,showName:ra.bool,showNameMaxWidth:ra.number,suppressed:ra.bool,tooltipConstructor:ra.func,tooltipConstructorCovered:ra.func},getDefaultProps:function(){return {suppressed:true};},getInitialState:function(){return {actorData:{},clicked:false,nuxShown:false};},componentWillMount:function(){this._fetchActorData();},render:function(){var ya=qa.business_identity_page_voice_selector;if(!this.props.selectedActorID||!this.state.actorData[this.props.selectedActorID])return v.createElement(h,{focusOnInit:this.props.focusOnInit});var za=this._renderSelectorOptions();if(za.length<1)return v.createElement('div',null);if(ya){return this._renderNewComponent();}else return this._renderOldComponent(za);},_renderOldComponent:function(ya){var za=this._isCovered();return (v.createElement('span',{className:ma("_6vh",this.props.className)},v.createElement(ga,{className:(!this.props.loading?"hidden_elem":'')+(!this.props.suppressed?' '+"_3-8_":'')}),v.createElement(fa,{haschevron:!za,className:"_6vi",disabled:this.props.loading,maxheight:ta,maxwidth:za?wa:this.props.showName?this.props.showNameMaxWidth:sa,onChange:this.props.onChange,onClick:this._onClickSelector,ref:'selector',suppressed:this.props.suppressed,value:this.props.selectedActorID},ya)));},_renderNewComponent:function(){return (v.createElement('span',{className:ma("_6vh",this.props.className)},v.createElement(ga,{className:(!this.props.loading?"hidden_elem":'')+(' '+"_3-8_")}),v.createElement('span',{ref:'selector'},v.createElement(j,{bootloadPlaceholder:v.createElement(h,{focusOnInit:this.props.focusOnInit}),bootloadLoader:r('PageVoiceDropdownSelector.react'),covered:this._isCovered(),focusOnInit:this.props.focusOnInit,permissions:this.props.actorPermissions,pages:this.state.actorData,onChange:this.props.onChange,onClick:this._onClickSelector,selectedActorID:this.props.selectedActorID,searchBarVisible:true,showBusinessPages:false,showPageName:this.props.showName,showNameMaxWidth:this.props.showNameMaxWidth,showPersonalPagesInRoot:!i.isBizSite(),suppressed:this.props.suppressed,user:ja(this.state.actorData)[0]}))));},renderLayers:function(){if(!this.refs.selector)return null;var ya=null;if(this.props.settingsURI)ya=v.createElement('a',{onClick:this._onClickSettings,style:{verticalAlign:'middle'}},ia._("Post Attribution Settings"));if(this.state.nuxShown)n.ensureVisible(w.findDOMNode(this.refs.selector),null,va);return {nux:v.createElement(aa,{alignment:'right',behaviors:{LayerFadeOnHide:s,LayerFadeOnShow:t},contextRef:(function(){return this.refs.selector;}).bind(this),hasActionableContext:true,offsetY:-8,position:'below',shown:this.state.nuxShown,width:aa.WIDTH.NORMAL},v.createElement(ba,null,this.props.nuxBody),v.createElement(ca,{leftContent:ya},v.createElement(da,{action:'button',use:'confirm',onClick:this._onCompleteNux})))};},_renderSelectorOptions:function(){var ya=[],za=[];this.props.actorIDs.map((function(eb){if(this._isBusinessManagedActor(eb)){za.push(eb);}else ya.push(eb);}).bind(this));var ab=ya.map(this._renderActorOption);if(za&&za.length>0){var bb=[],cb=v.createElement(q,{src:la('/images/bizsite/busmgr_bookmark_icon_16px.png'),alt:''}),db=this._groupActorIDsByBusinessID(za);na(db,(function(eb,fb){bb.push(v.createElement(ea,{key:'separator_'+fb}));var gb=ja(db[fb])[0],hb=gb?this.state.actorData[gb].businessName:fb;bb.push(v.createElement(pa,{disabled:true,icon:cb,key:'option_'+fb},hb));na(eb,(function(ib){bb.push(this._renderActorOption(ib));}).bind(this));}).bind(this));}ab=ab.concat(bb);return ab;},_renderActorOption:function(ya){var za=this._isCovered(),ab=this.state.actorData[ya];if(!ab)return;var bb=!!ab.businessID,cb=v.createElement(q,{className:"_6vg",height:wa,src:za&&l.getID()===ya?la('images/pages/voice/flag.png'):ab.thumbSrc,width:wa,alt:''});return (v.createElement(pa,{className:bb?"plm":'',icon:cb,key:'actor_'+ya,value:ya},ab.name));},componentDidMount:function(){this._setTooltip();if(this.props.focusOnInit)this._focusSelector();if(this._canShowNux())if(this.props.nuxHoverContext){var ya=oa(o.listen(this.props.nuxHoverContext,'mouseenter',(function(){var za=setTimeout((function(){ya.remove();if(this._canShowNux())this.setState({nuxShown:true});}).bind(this),ua),ab=oa(o.listen(this.props.nuxHoverContext,'mouseleave',function(){clearTimeout(za);ab.remove();}));}).bind(this)));}else this.setState({nuxShown:true});},componentDidUpdate:function(ya){if(this.state.focusOnUpdate){this._focusSelector();this.setState({focusOnUpdate:false});}if(this.props.actorIDs.toString()!==ya.actorIDs.toString())this._fetchActorData();this._setTooltip();},_focusSelector:function(){var ya=this.refs.selector&&w.findDOMNode(this.refs.selector);if(!ya)return;var za=m.scry(ya,'a').pop();p.set(za);},_canShowNux:function(){return this.props.nuxEnabledCovered&&this._isCovered()||this.props.nuxEnabledUncovered&&!this._isCovered();},_fetchActorData:function(){y.getMulti(this.props.actorIDs,(function(ya){this.setState({actorData:ya,focusOnUpdate:this.props.focusOnInit});}).bind(this));},_isCovered:function(){return (this.props.coverEnabled&&!this.state.clicked&&l.getID()===this.props.selectedActorID);},_onClickSelector:function(){this.setState({clicked:true});if(this.state.nuxShown)this._onCompleteNux();},_onClickSettings:function(){this._onCompleteNux();ka(this.props.settingsURI);},_onCompleteNux:function(){this.setState({nuxShown:false});if(this.props.onCompleteNux)this.props.onCompleteNux({isCovered:this._isCovered()});},_setTooltip:function(){if(!this.refs.selector)return;var ya=this.state.actorData[this.props.selectedActorID];if(!ya)return;var za=this._isCovered()&&this.props.tooltipConstructorCovered?this.props.tooltipConstructorCovered:this.props.tooltipConstructor;if(!za)return;z.set(w.findDOMNode(this.refs.selector),za(ya.name),'above','right');},_isBusinessManagedActor:function(ya){return this.state.actorData[ya]&&this.state.actorData[ya].businessID;},_groupActorIDsByBusinessID:function(ya){var za={};ya.forEach((function(ab,bb){var cb=this.state.actorData[bb]?this.state.actorData[bb].businessID:null;if(cb){if(!ab[cb])ab[cb]={};ab[cb][bb]=bb;}}).bind(this,za));return za;}});f.exports=xa;},null);
__d("XActorSelectorNuxSeenWriteController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/actor_selector\/nux\/mark_seen\/",{nux_type:{type:"Enum",required:true,enumType:1}});},null,{});
__d('UFIActorSelector.react',['ActorSelector.react','ActorSelectorNuxTypes','Arbiter','AsyncRequest','Parent','React','SubscriptionsHandler','UFICentralUpdates','UFIFeedbackTargets','UFIUserActions','XActorSelectorNuxSeenWriteController','fbt'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){if(c.__markCompiled)c.__markCompiled();var t=m.PropTypes,u='ufi_actor_selector_nux_disabled_event',v=m.createClass({displayName:'UFIActorSelector',propTypes:{actorIDs:t.array.isRequired,coverEnabled:t.bool.isRequired,ftEntIdentifier:t.string.isRequired,isTimeline:t.bool,nuxEnabledCovered:t.bool,nuxEnabledUncovered:t.bool,nuxHoverContext:t.object,settingsURI:t.string},getInitialState:function(){var w=l.byClass(this.props.nuxHoverContext,'timelineUnitContainer');return {loading:false,nuxEnabledCovered:this.props.nuxEnabledCovered,nuxEnabledUncovered:this.props.nuxEnabledUncovered,nuxHoverContext:w?w:this.props.nuxHoverContext,selectedActorID:null};},render:function(){return (m.createElement(h,{actorIDs:this.props.actorIDs,coverEnabled:this.props.coverEnabled,focusOnInit:this.props.focusOnInit,loading:this.state.loading,nuxBody:this._getNUXBody(),nuxEnabledCovered:this.state.nuxEnabledCovered,nuxEnabledUncovered:this.state.nuxEnabledUncovered,nuxHoverContext:this.state.nuxHoverContext,onChange:this._onChange,onCompleteNux:this._onCompleteNux,selectedActorID:this.state.selectedActorID,settingsURI:this.props.settingsURI,tooltipConstructor:this._getTooltipForActorName,tooltipConstructorCovered:this._getCoveredTooltip}));},componentDidMount:function(){this._updateSelectedActorIDFromFeedbackTarget();this._subscriptions=new n();this._subscriptions.addSubscriptions(o.subscribe('feedback-updated',(function(w,x){if(this.props.ftEntIdentifier in x.updates)this._updateSelectedActorIDFromFeedbackTarget();}).bind(this)),j.subscribe(u,(function(){this.setState({nuxEnabledCovered:false,nuxEnabledUncovered:false});}).bind(this)));},componentWillUnmount:function(){this._subscriptions.release();},_updateSelectedActorIDFromFeedbackTarget:function(){p.getFeedbackTarget(this.props.ftEntIdentifier,(function(w){this.setState({loading:false,selectedActorID:w.actorforpost});}).bind(this));},_getNUXBody:function(){return s._("Choose whether to like and comment as yourself or as one of the Pages you manage.");},_getTooltipForActorName:function(w){return s._("Liking and commenting as {actorName}",[s.param('actorName',w)]);},_getCoveredTooltip:function(){return s._("Like or comment as one of the Pages you manage.");},_onChange:function(w){this.setState({loading:true});q.changeActor(this.props.ftEntIdentifier,w.value);},_onCompleteNux:function(w){var x=w.isCovered,y=null;if(this.props.isTimeline){if(x){y=i.UFI_TIMELINE_COVERED;}else y=i.UFI_TIMELINE;}else y=i.UFI;var z=r.getURIBuilder().setEnum('nux_type',y).getURI();new k().setURI(z).send();j.inform(u);}});f.exports=v;},null);