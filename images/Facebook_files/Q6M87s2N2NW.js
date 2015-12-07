/*!CK:3307209471!*//*1440387839,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["OdJhF"]); }

__d('MessagingRecipientTypeaheadItem.react',['BackgroundImage.react','ChatTypeaheadConstants','ImageBlock.react','LeftRight.react','React','SplitImage.react','MercuryThreadMetadataRawRenderer','TypeaheadViewItem','cx','joinClasses'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){if(c.__markCompiled)c.__markCompiled();var r=l.PropTypes,s=l.createClass({displayName:'MessagingRecipientTypeaheadItem',propTypes:babelHelpers._extends({},o.propTypes,{imageSize:r.number.isRequired}),mixins:[o.Mixin],isThreadRecipient:function(){return this.props.entry.getType()===i.THREAD_TYPE;},_getImage:function(){var t=this.props.entry;if(t.getType()===i.THREAD_TYPE&&!t.getPhoto()){var u=t.getAuxiliaryData();return (l.createElement(m,{size:this.props.imageSize,srcs:u.participantsToRender.map(function(v){return v.image_src;})}));}if(t.getPhoto())return (l.createElement(h,{width:this.props.imageSize,height:this.props.imageSize,backgroundSize:'cover',src:t.getPhoto()}));return l.createElement('span',null);},_getThreadParticipantList:function(){if(!this.isThreadRecipient())return null;var t=this.props.entry;return n.renderRawParticipantList(t.getUniqueID(),t.getAuxiliaryData().participantsToRender,t.getAuxiliaryData().thread.participants.length-1,{names_renderer:n.renderShortNames});},_getTitle:function(){var t=this.props.entry;if(this.isThreadRecipient()&&!t.getTitle())return this._getThreadParticipantList();return t.getTitle();},_getSubtitle:function(){var t=this.props.entry;if(this.isThreadRecipient()&&!t.getTitle())return this._getThreadParticipantList();return t.getSubtitle()?t.getSubtitle().split(' \u00b7 ')[0]:null;},render:function(){var t=this._getSubtitle(),u=q("_599m"+(' '+"_55xn")+(!t?' '+"_5mne":'')+(this.props.highlighted?' '+"_599n":''),this.props.className);return (l.createElement('li',{'aria-selected':this.props.selected,className:u,onMouseDown:this._onSelect,onMouseEnter:this._onHighlight,role:this.props.role},l.createElement(j,{spacing:'medium'},this._getImage(),l.createElement(k,null,l.createElement('div',null,l.createElement('div',{className:"_55xt _599p"},this._getTitle()),l.createElement('div',{className:"_55z3 _599q"},t)),this.props.children))));}});f.exports=s;},null);
__d('MessagingRecipientSelectedList.react',['Image.react','LeftRight.react','Map','MessagingRecipientTypeaheadItem.react','React','cx','fbt','xuiglyph'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o){if(c.__markCompiled)c.__markCompiled();var p=l.PropTypes,q=l.createClass({displayName:'MessagingRecipientSelectedList',propTypes:{entries:p.instanceOf(j),onSelect:p.func.isRequired},_renderSelectedEntry:function(r){var s=o({name:'cross',shade:'dark',size:'small'});return (l.createElement(k,{key:r.getUniqueID(),entry:r,imageSize:24,onSelect:this.props.onSelect},l.createElement(h,{className:"_1jm4",src:s})));},render:function(){var r=n._("Send to:"),s=[];this.props.entries.forEach((function(t){return s.push(this._renderSelectedEntry(t));}).bind(this));return (l.createElement('div',{className:"_1jm5"},l.createElement(i,{className:"_1jm6 _2ph-"},l.createElement('span',null,r),l.createElement('span',null,this.props.entries.size)),l.createElement('ul',null,s)));}});f.exports=q;},null);
__d('MessagingRecipientTypeaheadView.react',['CenteredContainer.react','Link.react','Map','MessagingRecipientTypeaheadItem.react','React','TypeaheadViewPropTypes','XUISpinner.react','cx','fbt'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){if(c.__markCompiled)c.__markCompiled();var q=l.PropTypes,r=32,s=l.createClass({displayName:'MessagingRecipientTypeaheadView',propTypes:babelHelpers._extends({},m,{selectedEntries:q.instanceOf(j),loading:q.bool}),getDefaultProps:function(){return {role:'listbox'};},_renderItem:function(t){var u=t===this.props.highlightedEntry,v=this.props.selectedEntries.has(t.getUniqueID());return (l.createElement(k,{key:t.getUniqueID(),entry:t,highlighted:u,imageSize:r,selected:v,onSelect:this.props.onSelect,onHighlight:this.props.onHighlight,onRenderHighlight:this.props.onRenderHighlight},l.createElement(i,{'aria-checked':v,className:"_2i83"+(v?' '+"_2i85":'')+(!v?' '+"_2i86":''),href:'#',role:'checkbox',tabIndex:'0'})));},render:function(){if(this.props.entries.length===0&&!this.props.loading)return (l.createElement(h,{className:"_2pi1"},p._("No results")));return (l.createElement('ul',{id:this.props.ariaOwneeID,className:"_51do",role:this.props.role},this.props.entries.map(this._renderItem),l.createElement('div',{className:"_51dq"},this.props.loading?l.createElement(n,null):null)));}});f.exports=s;},null);
__d("XMessagingForwardAttachmentController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/mercury\/attachments\/forward\/",{});},null,{});
__d('MessagingForwardAttachmentDialog.react',['AsyncRequest','ChatSearchSource','Image.react','LayerFadeOnHide','Layout.react','Map','MessagingRecipientSelectedList.react','MessagingRecipientTypeaheadView.react','OrderedFriendsList','React','SearchableTextInput.react','ScrollableArea.react','XMessagingForwardAttachmentController','XUIDialog.react','XUIDialogBody.react','XUIDialogButton.react','XUIDialogCancelButton.react','XUIDialogFooter.react','XUIDialogTitle.react','XUISpinner.react','cx','fbt','xuiglyph'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ba,ca,da){if(c.__markCompiled)c.__markCompiled();var ea=l.Column,fa=l.FillColumn,ga=q.PropTypes,ha=q.createClass({displayName:'MessagingForwardAttachmentDialog',propTypes:{attachmentID:ga.string.isRequired,onClose:ga.func,shown:ga.bool.isRequired,title:ga.string.isRequired},getInitialState:function(){return {bootstrappedEntries:[],entries:[],loading:true,selectedEntries:new m(),sendError:null,sending:false,startingThreadingID:Date.now(),query:''};},componentWillMount:function(){this._dataSource=new i({queryRequests:[{uri:'/ajax/mercury/composer_query.php'}]});},componentDidMount:function(){p.getSearchableEntries(20,(function(ia){this.setState({bootstrappedEntries:ia,loading:false});}).bind(this));},_onSelectEntry:function(ia){var ja=ia.getUniqueID(),ka=new m(this.state.selectedEntries);if(ka.has(ja)){ka['delete'](ja);}else ka.set(ja,ia);this.setState({selectedEntries:ka});},_onSearchChange:function(ia){var ja=ia.target.value;this.setState({loading:true,query:ja});},_onSearchEntriesFound:function(ia){this.setState({entries:ia});},_onSearchFinished:function(ia){ia===this.state.query&&this.setState({loading:false});},_onSubmit:function(){var ia={},ja=this.state.startingThreadingID;this.state.selectedEntries.forEach(function(la){ia[ja++]=la.getUniqueID();});var ka=t.getURIBuilder().getURI();new h(ka).setMethod('POST').setHandler(this._onSubmitResponse).setData({attachment_id:this.props.attachmentID,recipient_map:ia}).send();this.setState({sending:true,sendError:null});},_onSubmitResponse:function(ia){if(ia.payload.success){this.props.onClose&&this.props.onClose();this.setState({bootstrappedEntries:[],selectedEntries:new m(),sending:false,startingThreadID:Date.now(),query:''});return;}this.setState({sending:false,sendError:ia.payload.error});},_onToggle:function(ia){if(!ia)this.props.onClose();},render:function(){var ia=ca._("Send"),ja=null;if(this.state.sending){ja=q.createElement('div',null,q.createElement(aa,null),q.createElement('span',{className:"_5s0d _3-99"},ca._("Sending")));}else if(this.state.sendError){var ka=da({name:'error-solid',shade:'dark',size:'medium'});ja=q.createElement('div',{className:"_5s0d"},q.createElement(j,{src:ka}),q.createElement('span',{className:"_3-99"},this.state.sendError));}var la=ca._("Search for people and groups");return (q.createElement(u,{shown:this.props.shown,behaviors:{LayerFadeOnHide:k},onToggle:this._onToggle,width:560},q.createElement(z,null,this.props.title),q.createElement(v,{useCustomPadding:true},q.createElement(l,null,q.createElement(ea,{className:"_5s0e"},q.createElement('div',{className:"_2ph_"},q.createElement(r,{className:"_5s0f autofocus",onChange:this._onSearchChange,onEntriesFound:this._onSearchEntriesFound,placeholder:la,queryString:this.state.query,searchSource:this._dataSource,searchSourceOptions:{onQueryFinished:this._onSearchFinished}})),q.createElement(s,{className:"_5s0g",height:400,width:360},q.createElement(o,{entries:this.state.query?this.state.entries:this.state.bootstrappedEntries,loading:this.state.loading,selectedEntries:this.state.selectedEntries,onSelect:this._onSelectEntry}))),q.createElement(fa,{className:"_5s0h"},q.createElement(s,{height:457,shadow:false},q.createElement(n,{entries:this.state.selectedEntries,onSelect:this._onSelectEntry}))))),q.createElement(y,{leftContent:ja},q.createElement(x,{onClick:this.props.onClose}),q.createElement(w,{use:'confirm',disabled:!this.state.selectedEntries.size||this.state.sending,label:ia,onClick:this._onSubmit}))));}});f.exports=ha;},null);
__d("XMessagingVideoAttachmentController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/mercury\/attachments\/video\/",{video_id:{type:"String",required:true},video_container_id:{type:"String",required:true},width:{type:"Int",required:true},height:{type:"Int",required:true}});},null,{});
__d('MessagingVideoViewer.react',['ActorURI','ArbiterMixin','AsyncRequest','MercuryConfig','MessagingForwardAttachmentDialog.react','MessagingForwardingButtonNUX.react','React','ReactLayeredComponentMixin','SpotlightViewer','SpotlightViewerBottomBar','SpotlightViewerBottomBarGroup','SpotlightViewerBottomBarLink','SpotlightViewerClose','SpotlightViewport','PageTransitionsRegistrar','PhotoViewerDimensions','XMessagingVideoAttachmentController','Vector','cx','fbt','guid'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ba){if(c.__markCompiled)c.__markCompiled();var ca=n.PropTypes,da=200,ea=n.createClass({displayName:'MessagingVideoViewer',propTypes:{disableForward:ca.bool,pageID:ca.number,rootClassName:ca.string,videoSize:ca.instanceOf(y).isRequired,videoID:ca.string.isRequired,videoURI:ca.string.isRequired},mixins:[i,o],getInitialState:function(){var fa=new w({verticalPadding:da});return {dimensions:fa.getStageDimensions(this.props.videoSize),loading:true,open:true,showForward:false};},componentWillMount:function(){this._domID=ba();},componentDidMount:function(){this._loadVideoPlayer();v.registerCompletionCallback((function(){this.close();return true;}).bind(this));},_loadVideoPlayer:function(){var fa=x.getURIBuilder().setString('video_id',this.props.videoID).setString('video_container_id',this._domID).setInt('width',this.state.dimensions.x).setInt('height',this.state.dimensions.y).getURI();if(this.props.pageID)fa=h.create(fa,this.props.pageID);this.request=new j().setMethod('GET').setURI(fa).setReadOnly(true).setHandler((function(ga){return this.setState({loading:false});}).bind(this)).send();},close:function(){if(!this.state.open)return;this.setState({open:false},function(){this.inform('close');});},_showForwardDialog:function(){this.setState({showForward:true});},_hideForwardDialog:function(){this.setState({showForward:false});},renderLayers:function(){if(!k.ForwardingEnabled||this.props.disableForward)return {};var fa=aa._("Forward in separate messages");return {forwardDialog:n.createElement(l,{attachmentID:this.props.videoID,onClose:this._hideForwardDialog,shown:this.state.showForward,title:fa}),forwardButtonNUX:n.createElement(m,{contextRef:(function(){return this.refs.forwardButton;}).bind(this)},aa._("Send this video to other people in separate messages."))};},render:function(){var fa=n.createElement('div',{className:"rfloat",id:this._domID}),ga;if(k.ForwardingEnabled&&!this.props.disableForward)ga=n.createElement(s,{onClick:this._showForwardDialog,ref:'forwardButton'},aa._("Forward"));return (n.createElement(p,{onHide:this.close,open:this.state.open,rootClassName:this.props.rootClassName},n.createElement(u,{active:true,className:"_39hc",media:fa,showLoadingIndicator:this.state.loading,stageDimensions:this.state.dimensions,useWidth:true},n.createElement(t,{onClick:this.close}),n.createElement(q,{className:"stat_elem"},n.createElement(r,null),n.createElement(r,null,ga,n.createElement(s,{href:this.props.videoURI},aa._("Download")))))));}});f.exports=ea;},null);