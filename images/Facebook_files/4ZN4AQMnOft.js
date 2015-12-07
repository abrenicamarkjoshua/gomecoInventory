/*!CK:3274095742!*//*1442197952,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["fOp1t"]); }

__d("MessageThreadViewSource",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={UNSPECIFIED:"unspecified",LEGACY:"legacy",LEGACY_MESSAGES_PREVIEW:"legacy_messages_preview",REFRESH_SPRINGBOARD:"springboard",REFRESH_MESSAGETAB:"message_tab",REFRESH_PERMALINK:"permalink",REFRESH_HIGHLANDER_JEWEL:"highlander_jewel",REFRESH_SEARCH_TYPEAHEAD:"search_typeahead",MTOUCH_MESSAGE_TAB:"mtouch_message_tab",MBASIC_MESSAGE_TAB:"mbasic_message_tab"};},null,{});
__d('PagesMessengerThreadDialogLink.react',['AsyncDialog','AsyncRequest','Link.react','MessageThreadViewSource','PagesMessagingConst','ReactComponentWithPureRenderMixin','React','URI'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o){if(c.__markCompiled)c.__markCompiled();'use strict';var p=n.PropTypes,q=n.createClass({displayName:'PagesMessengerThreadDialogLink',mixins:[m],propTypes:{threadID:p.string.isRequired,viewer:p.string.isRequired,folder:p.string},getInitialState:function(){return {permalinkURI:'#'};},componentDidMount:function(){this._getPermalinkURI(this.props);},componentWillReceiveProps:function(r){if(r.threadID!==this.props.threadID||r.folder!==this.props.folder)this._getPermalinkURI(r);},render:function(){return (n.createElement(j,{className:this.props.className,href:'#',onClick:this._handleClick,role:'button'},this.props.children));},_handleClick:function(r){r.preventDefault();h.send(new i(this.state.permalinkURI).setRelativeTo(r.target));},_getPermalinkURI:function(r){this.setState(this.getInitialState());var s=r.threadID,t=r.viewer,u=r.folder;e(['MercuryThreadIDMap'],(function(v){var w=v.getForFBID(t);w.getServerIDFromClientID(s,(function(x){this.isMounted()&&this.setState({permalinkURI:new o(l.LOAD_MESSAGE_THREAD_URI).setQueryData({pageid:t,threadid:s,threadElementID:x,folder:u,source:k.REFRESH_HIGHLANDER_JEWEL}).toString()});}).bind(this));}).bind(this));}});f.exports=q;},null);
__d('MercuryJewelCountControl',['Arbiter','MercuryDispatcher','MercuryThreadInformer','MercuryUnseenState','UserActivity'],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();function m(n){'use strict';var o=i.get(),p=j.get();this.$MercuryJewelCountControl1=k.get();this.render();o.subscribe('model-update-completed',(function(q,r){this.$MercuryJewelCountControl2(false);}).bind(this));p.subscribe('unseen-updated',(function(){return this.render();}).bind(this));this.$MercuryJewelCountControl3=n;this.$MercuryJewelCountControl3.subscribe('marked-seen',(function(){this.$MercuryJewelCountControl2(true);}).bind(this));}m.prototype.render=function(){'use strict';h.inform('jewel/count-updated',{jewel:'mercurymessages',count:this.$MercuryJewelCountControl1.getUnseenCount()},h.BEHAVIOR_STATE);};m.prototype.$MercuryJewelCountControl2=function(n){'use strict';if(n||this.$MercuryJewelCountControl3.isOpen()&&l.isActive())this.$MercuryJewelCountControl1.markAsSeen();};m.constructStores=function(){'use strict';k.get();};f.exports=m;},null);
__d('P2PJewelBanner.react',['Image.react','Layout.react','Link.react','React','TooltipLink.react','XUIGrayText.react','cx','emptyFunction','fbt','ix'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){if(c.__markCompiled)c.__markCompiled();'use strict';var r=i.FillColumn,s=i.Column,t=k.PropTypes,u=k.createClass({displayName:'P2PJewelBanner',propTypes:{actionURI:t.oneOfType([t.string,t.object]).isRequired,actionText:t.string.isRequired,bodyText:t.oneOfType([t.string,t.object]).isRequired,icon:t.oneOf(['warning','coin']),isDismissable:t.bool,onClick:t.func.isRequired,onClose:t.func,titleText:t.string.isRequired},getDefaultProps:function(){return {actionURI:'#',isDismissable:false,onClick:o,onClose:o};},getImagePath:function(){var v=this.props.icon;if(v==="warning"){return q("/images/p2p/receiver-risk-notification.png");}else return q("/images/p2p/receiver-nux-notification.png");},handleCloseClick:function(v){v.stopPropagation();if(this.props.onClose)this.props.onClose();},renderCloseButton:function(){return (k.createElement(l,{alignH:'center',className:"_47d8",href:'#',onClick:this.handleCloseClick,position:'above',tooltip:p._("Dismiss")},k.createElement(h,{className:"_47dg",height:7,src:q('/images/p2p/jewel-banner-close.png'),width:7})));},render:function(){var v;if(this.props.isDismissable)v=this.renderCloseButton();return (k.createElement('div',{className:"_5d0n",onClick:this.props.onClick},v,k.createElement(i,null,k.createElement(s,{className:"_5d0o"},k.createElement(h,{className:"_5d0q",height:28,src:this.getImagePath(),width:28})),k.createElement(r,{className:"_47di"},k.createElement(m,{display:'block',shade:'medium',weight:'bold'},this.props.titleText),k.createElement(m,{display:'block',shade:'medium'},this.props.bodyText),k.createElement(j,{className:"_5d0t",href:this.props.actionURI,target:'_blank'},this.props.actionText)))));}});f.exports=u;},null);
__d('P2PPendingPushFailJewelBanner.react',['P2PJewelBanner.react','P2PTransferParam','XP2PTransactionDetailController','React','fbt'],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();'use strict';var m=k.PropTypes,n=k.createClass({displayName:'P2PPendingPushFailJewelBanner',propTypes:{transfer:m.object.isRequired},getActionText:function(){return l._("Update Card");},render:function(){var o=this.props.transfer;return (k.createElement(h,{actionText:l._("Update Card"),bodyText:l._("It looks like your card is expired or invalid. Please update it to get {currency}{amount} from {sender_name}.",[l.param('currency',o.currency),l.param('amount',o.amount),l.param('sender_name',o.sender.name)]),icon:'warning',actionURI:j.getURIBuilder().setString('id',o[i.TRANSFER_ID]).getURI(),titleText:l._("Update Your Card")}));}});f.exports=n;},null);
__d('P2PTimeBasedAcceptMessage.react',['React','fbt'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();'use strict';var j=h.PropTypes,k=h.createClass({displayName:'P2PTimeBasedAcceptMessage',propTypes:{transfer:j.object.isRequired},render:function(){var l=this.props.transfer,m=l.creationTime*1000,n=1000*60*60*24,o=Date.now(),p=(o-m)/n,q=Math.max(14-Math.floor(p),1),r;if(p<=5){r=i._("Add a debit card and it'll go straight to your bank.");}else if(p<=11){r=i._("This money will be sent back in {days left} days. Add a debit card to accept it.",[i.param('days left',q)]);}else r=i._({"day":"You have {days left} day to add a debit card before the money is sent back to {sender_name}.","days":"You have {days left} days to add a debit card before the money is sent back to {sender_name}."},[i.param('days left',q),i['enum'](q===1?'day':'days',{day:'day',days:'days'}),i.param('sender_name',l.sender.name)]);return h.createElement('div',null,r);}});f.exports=k;},null);
__d('P2PPendingRecipientNUXJewelBanner.react',['P2PAcceptMoneyDialog.react','P2PActions','P2PCreditCardStore','P2PJewelBanner.react','P2PTimeBasedAcceptMessage.react','React','fbt'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n){if(c.__markCompiled)c.__markCompiled();'use strict';var o=m.PropTypes,p=m.createClass({displayName:'P2PPendingRecipientNUXJewelBanner',propTypes:{transfer:o.object.isRequired},getInitialState:function(){return {creditCards:j.getAll()};},creditCardStoreSub:null,componentDidMount:function(){this.creditCardStoreSub=j.addListener('change',this.onCreditCardStoreChange);},componentWillUnmount:function(){if(this.creditCardStoreSub){this.creditCardStoreSub.remove();this.creditCardStoreSub=null;}},onCreditCardStoreChange:function(){var q={creditCards:j.getAll()};if(this.isMounted())this.setState(q);},handleClick:function(){this.showAcceptMoneyDialog();},showAcceptMoneyDialog:function(){i.showDialog(h,{creditCards:this.state.creditCards,onClose:i.hideDialog,transfer:this.props.transfer});},renderTimeBasedMessage:function(){return (m.createElement(l,{transfer:this.props.transfer}));},render:function(){var q=this.props.transfer;if(!j.isCreditCardsFetchComplete())return null;return (m.createElement(k,{actionText:n._("Add Debit Card"),bodyText:this.renderTimeBasedMessage(),icon:'coin',onClick:this.handleClick,titleText:n._("Accept {currency}{amount} from {sender_name}.",[n.param('currency',q.currency),n.param('amount',q.amount),n.param('sender_name',q.sender.name)])}));}});f.exports=p;},null);
__d('P2PPendingRecipientVerificationJewelBanner.react',['P2PJewelBanner.react','P2PTransferParam','P2PVerificationFlowHelper','React','fbt'],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();'use strict';var m=k.PropTypes,n=k.createClass({displayName:'P2PPendingRecipientVerificationJewelBanner',propTypes:{transfer:m.object.isRequired},handleClick:function(){j.startVerificationFlow(this.props.transfer[i.TRANSFER_ID],false);},render:function(){return (k.createElement(h,{actionText:l._("Confirm Info"),bodyText:l._("To accept the money {sender_name} sent you, please confirm your information.",[l.param('sender_name',this.props.transfer.sender.name)]),icon:'warning',onClick:this.handleClick,titleText:l._("Please Confirm Your Info")}));}});f.exports=n;},null);
__d('P2PJewelBannerContainer.react',['CurrentUser','P2PBannerStore','P2PBannerType','P2PPendingPushFailJewelBanner.react','P2PPendingRecipientNUXJewelBanner.react','P2PPendingRecipientVerificationJewelBanner.react','P2PSeviperJewelBanner.react','P2PTransferParam','P2PTransferStatus','P2PTransferStore','PureStoreBasedStateMixin','React','cx'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){if(c.__markCompiled)c.__markCompiled();'use strict';var u=s.createClass({displayName:'P2PJewelBannerContainer',mixins:[r(i,q)],statics:{calculateState:function(){var v=q.getNUXTransfer();return {seviperBannerShown:i.shouldShowBanner(j.SEVIPER),transfer:v,transferBannerShown:v&&v.receiver.id==h.getID()};}},renderTransferBanner:function(){var v=this.state.transfer,w=v[o.STATUS];switch(w){case p.PENDING_RECIPIENT_NUX:return (s.createElement(l,{transfer:v}));case p.PENDING_RECIPIENT_VERIFICATION:return (s.createElement(m,{transfer:v}));case p.PENDING_PUSH_FAIL:return (s.createElement(k,{transfer:v}));}},renderAddCardToUnlockBanner:function(){return (s.createElement(n,null));},render:function(){var v;if(this.state.transferBannerShown){v=this.renderTransferBanner();}else if(this.state.seviperBannerShown)v=this.renderAddCardToUnlockBanner();return (s.createElement('div',{className:"_1xfk"},v));}});f.exports=u;},null);
__d('MercuryThreadlistContainer.react',['Bootloader','immutable','MercuryAPIArgsSource','MercuryFilters','MercuryThreadlistConstants','P2PJewelBannerContainer.react','React','SubscriptionsHandler'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o){if(c.__markCompiled)c.__markCompiled();'use strict';var p=n.PropTypes,q='search',r=n.createClass({displayName:'MercuryThreadlistContainer',propTypes:{ChildClass:p.func.isRequired,folder:p.string.isRequired,showCount:p.bool,showPresence:p.bool,threadCount:p.number,viewer:p.string.isRequired},getInitialState:function(){return {isLoading:true,isSearching:false,threads:i.Map()};},componentDidMount:function(){h.loadModules(["MercuryOrderedThreadlist","MercuryThreadInformer","MercuryThreads"],(function(s,t,u){this._threadlist=s.getForFBID(this.props.viewer);this._threads=u.getForFBID(this.props.viewer);this._informer=t.getForFBID(this.props.viewer);this._subscriptions=new o();this._subscriptions.addSubscriptions(this._informer.subscribe('threadlist-updated',(function(v,w){this._updateThreads(this.props.folder,this.props.filter);}).bind(this)));this._handleFolderChange(this.props.folder,this.props.filter);}).bind(this));},componentWillReceiveProps:function(s){if(s.folder!==this.props.folder||s.filter!==this.props.filter)this._handleFolderChange(s.folder,s.filter);},componentWillUnmount:function(){this._cancelThreadsCallback();this._cancelThreadlistCallback();this._subscriptions&&this._subscriptions.release();},render:function(){var s=this.props,t=s.ChildClass,u=s.folder,v=s.filter,w=babelHelpers.objectWithoutProperties(s,['ChildClass','folder','filter']),x=this.state.isSearching?this.state.threads.get(q)||[]:this.state.threads.get(u)||[];return (n.createElement(t,babelHelpers._extends({},w,{isLoaded:!!this._threadlist&&this._threadlist.hasLoadedThreadlist(u,v),isLoading:this.state.isLoading,isSearching:this.state.isSearching,onLoadMoreRequest:this._loadMoreThreads,onQuery:this._handleQuery,onSearchResults:this._handleSearchResults,p2pJewelBannerContainer:this._renderP2PJewelBannerContainer(),threads:x})));},_renderP2PJewelBannerContainer:function(){return (n.createElement(m,null));},_handleFolderChange:function(s,t){if(!this._hasInitialThreads(s,t)){this._loadThreads(s,t,this.props.threadCount||l.JEWEL_THREAD_COUNT+3);}else if(this.state.isLoading){this.setState({isLoading:false},(function(){this._updateThreads(s,t);}).bind(this));}else this._updateThreads(s,t);},_loadMoreThreads:function(){if(!this.state.isSearching&&!this.state.isLoading&&!this._threadlist.hasLoadedThreadlist(this.props.folder,this.props.filter))this._loadThreads(this.props.folder,this.props.filter,this._getThreadCount(this.props.folder)+l.JEWEL_MORE_COUNT+1);},_loadThreads:function(s,t,u){if(!this._threadlist)return;this._cancelThreadlistCallback();this.setState({isLoading:true},(function(){var v=this._threadlist.getFilteredThreadlist(l.RECENT_THREAD_OFFSET,u,s,t||k.ALL,(function(w){return this.setState({isLoading:false});}).bind(this),true,j.JEWEL);this._threadlistSub={subscriberID:v,folder:s,filter:t};}).bind(this));},_updateThreads:function(s,t,u){if(!this._threadlist||!this._threads)return;this._cancelThreadsCallback();var v=u||this._threadlist.getAvailableThreadlistNow(s,t);this._threadsSub=this._threads.getMultiThreadMeta(v,(function(w){this.setState({threads:this.state.threads.set(s,v.map(function(x){return w[x];}))});}).bind(this));},_hasInitialThreads:function(s,t){return !!(this._threadlist&&(this._threadlist.getThreadCount(s,t)>=l.JEWEL_THREAD_COUNT+3||this._threadlist.hasLoadedThreadlist(s,t)));},_getThreadCount:function(s){var t=this.state.threads.get(s);return t?t.length:0;},_cancelThreadsCallback:function(){this._threads&&this._threadsSub&&this._threads.unsubscribe(this._threadsSub);},_cancelThreadlistCallback:function(){this._threadlist&&this._threadlistSub&&this._threadlist.unsubscribe(this._threadlistSub.subscriberID,this._threadlistSub.folder,this._threadlistSub.filter);},_handleSearchResults:function(s,t){this.setState({isLoading:t,searchThreads:[]},(function(){return this._updateThreads(q,k.ALL,s);}).bind(this));},_handleQuery:function(s){this.setState({isSearching:!!s});}});f.exports=r;},null);
__d('MercuryThreadlistRowContainer.react',['immutable','ImmutableObject','MercuryParticipants','React','StoreAndPropBasedStateMixin','shallowEqual'],function a(b,c,d,e,f,g,h,i,j,k,l,m){if(c.__markCompiled)c.__markCompiled();'use strict';var n=k.PropTypes,o=k.createClass({displayName:'MercuryThreadlistRowContainer',mixins:[l(j)],propTypes:{ChildClass:n.func.isRequired,thread:n.instanceOf(i).isRequired,viewer:n.string.isRequired},statics:{calculateState:function(p){return {participants:h.Map(h.Seq(p.thread.participants).map(function(q){return [q,j.getOrFetch(q)];}))};}},shouldComponentUpdate:function(p,q){return (!m(p,this.props)||!h.is(q.participants,this.state.participants));},render:function(){var p=this.props,q=p.ChildClass,r=babelHelpers.objectWithoutProperties(p,['ChildClass']);return (k.createElement(q,babelHelpers._extends({},r,{participants:this.state.participants})));}});f.exports=o;},null);
__d('MercuryPresenceIndicator.react',['Arbiter','AvailableListConstants','MercuryIDs','PresenceStatus','ReactComponentWithPureRenderMixin','React','SubscriptionsHandler','cx','fbt'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){if(c.__markCompiled)c.__markCompiled();'use strict';var q=m.PropTypes,r=m.createClass({displayName:'MercuryPresenceIndicator',mixins:[l],propTypes:{threadID:q.string.isRequired},componentDidMount:function(){this._subscriptions=new n();this._subscriptions.addSubscriptions(h.subscribe(i.ON_AVAILABILITY_CHANGED,(function(){return this.forceUpdate();}).bind(this)));},componentWillUnmount:function(){this._subscriptions&&this._subscriptions.release();},render:function(){var s=this._getPresence();return (m.createElement('span',{className:this._getClasses(s)},m.createElement('span',{className:'accessible_elem'},this._getLabel(s))));},_getPresence:function(){if(!j.isCanonical(this.props.threadID)){return null;}else{var s=j.getUserIDFromThreadID(this.props.threadID);return k.get(s);}},_getClasses:function(s){return "presenceIndicator"+(j.isGroupChat(this.props.threadID)?' '+"groupThread":'')+(s==i.ACTIVE?' '+"presenceActive":'')+(s==i.MOBILE?' '+"presenceMobile":'');},_getLabel:function(s){switch(s){case i.ACTIVE:return p._("Active");case i.MOBILE:return p._("Mobile");default:return null;}}});f.exports=r;},null);
__d('MercurySeenIndicator.react',['MercuryDelayedRoger','MercuryIDs','React','SubscriptionsHandler','cx'],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();'use strict';var m=j.PropTypes,n=j.createClass({displayName:'MercurySeenIndicator',propTypes:{thread:m.object.isRequired,viewer:m.string.isRequired},componentDidMount:function(){this._subscriptions=new k();this._subscriptions.addSubscriptions(h.subscribe('state-changed',(function(o,p){p[this.props.thread.thread_id]&&this.forceUpdate();}).bind(this)));},componentWillUnmount:function(){this._subscriptions&&this._subscriptions.release();},render:function(){var o=this._separateParticipants(),p=o.viewer,q=o.others,r=this._viewerLastToReply(p),s=this._seenByAll(q);return (j.createElement('span',{className:"MercuryRepliedIndicator"+(r?' '+"repliedLast":'')+(r&&s?' '+"seenByAll":'')}));},_separateParticipants:function(){var o=i.getParticipantIDFromUserID(this.props.viewer),p=this.props.thread.participants.filter(function(q){return q!==o;});return {viewer:o,others:p};},_viewerLastToReply:function(o){var p=this.props.thread.participants;return p.length>0&&p[0]===o;},_seenByAll:function(o){var p=this.props.thread.thread_id;return h.getSeenBy(p).length===o.length;}});f.exports=n;},null);
__d('MercuryThreadPermalink.react',['HighlanderFinchGating','Link.react','PagesMessengerThreadDialogLink.react','ReactComponentWithPureRenderMixin','React','WebMessengerThreadPermalinks'],function a(b,c,d,e,f,g,h,i,j,k,l,m){if(c.__markCompiled)c.__markCompiled();'use strict';var n=l.PropTypes,o=l.createClass({displayName:'MercuryThreadPermalink',mixins:[k],propTypes:{threadID:n.string.isRequired,viewer:n.string.isRequired,folder:n.string,onClick:n.func},getInitialState:function(){return {permalinkURI:'#'};},componentDidMount:function(){this._getPermalinkURI(this.props);},componentWillReceiveProps:function(p){if(p.threadID!==this.props.threadID||p.folder!==this.props.folder)this._getPermalinkURI(p);},render:function(){if(h.HIGHLANDER_FINCH_GATING)return (l.createElement(j,{className:this.props.className,threadID:this.props.threadID,viewer:this.props.viewer,folder:this.props.folder},this.props.children));return (l.createElement(i,{className:this.props.className,href:this.state.permalinkURI,onClick:this.props.onClick,role:'button'},this.props.children));},_getPermalinkURI:function(p){if(h.HIGHLANDER_FINCH_GATING)return;this.setState(this.getInitialState());m.getThreadURI(p.threadID,(function(q){return this.isMounted()&&this.setState({permalinkURI:q});}).bind(this),p.folder);}});f.exports=o;},null);
__d('MercuryThreadReadToggle.react',['MercuryThreadActions','ReactComponentWithPureRenderMixin','React','ReadToggle.react','fbt','invariant'],function a(b,c,d,e,f,g,h,i,j,k,l,m){if(c.__markCompiled)c.__markCompiled();'use strict';var n=j.PropTypes,o=j.createClass({displayName:'MercuryThreadReadToggle',mixins:[i],propTypes:{threadID:n.string.isRequired,viewer:n.string.isRequired,unreadCount:n.number.isRequired},render:function(){!(this.props.unreadCount>=0)?m(0):undefined;return (j.createElement(k,{isRead:this.props.unreadCount===0,onClick:this._handleClick,readLabel:l._("Mark as Unread"),unreadLabel:l._("Mark as Read")}));},_handleClick:function(p){p.preventDefault();p.stopPropagation();var q=h.getForFBID(this.props.viewer);this.props.unreadCount>0?q.markRead(this.props.threadID):q.markUnread(this.props.threadID);}});f.exports=o;},null);
__d('MercuryThreadSnippet.react',['immutable','MercuryAttachmentSnippet.react','MercuryIDs','React','TextWithEmoticons.react','fbt'],function a(b,c,d,e,f,g,h,i,j,k,l,m){if(c.__markCompiled)c.__markCompiled();'use strict';var n=k.PropTypes,o=k.createClass({displayName:'MercuryThreadSnippet',propTypes:{participants:n.instanceOf(h.Map).isRequired,shouldAlwaysRenderSender:n.bool,shouldRenderYou:n.bool,thread:n.object.isRequired,viewer:n.string.isRequired},shouldComponentUpdate:function(r,s){return (this.props.shouldRenderYou!==r.shouldRenderYou||this.props.thread!==r.thread||this.props.viewer!==r.viewer||!h.is(r.participants,this.props.participants));},render:function(){return (k.createElement('span',{className:this.props.className},this._renderAttachmentIndicator(),this._renderSnippet()));},_renderAttachmentIndicator:function(){if(!this.props.thread.snippet||!p(this.props.thread))return null;return k.createElement('span',{className:'MercuryAttachmentIndicator'});},_renderSnippet:function(){var r=this.props.thread,s=j.getParticipantIDFromUserID(this.props.viewer),t=this._renderInnerSnippet(),u=r.participants.length;if(r.is_subscribed)u--;if(r.snippet_has_attachment||!r.snippet_sender)return t;if(r.snippet_sender===s){if(!this.props.shouldRenderYou)return t;return m._("You: {conversation_snippet}",[m.param('conversation_snippet',t)]);}if(u<=1&&!this.props.shouldAlwaysRenderSender)return t;var v=this.props.participants.get(r.snippet_sender);if(!v||!v.short_name)return t;return m._("{name}: {conversation_snippet}",[m.param('name',v.short_name),m.param('conversation_snippet',t)]);},_renderInnerSnippet:function(){var r=this.props.thread,s=r.snippet;if(s&&s.startsWith('?OTR'))return m._("[encrypted message]");if(s)return (k.createElement(l,{renderEmoticons:true,renderEmoji:true,text:s.replace(/\r\n|[\r\n]/g,' ')}));if(p(r))return (k.createElement(i,{thread:r,viewer:this.props.viewer}));return null;}});function p(r){return (r.snippet_has_attachment&&r.snippet_attachments&&r.snippet_attachments.length>0);}function q(r){return !r.snippet&&p(r);}f.exports=o;},null);
__d('MercuryThreadTimestamp.react',['ReactComponentWithPureRenderMixin','React','formatDate','joinClasses'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();'use strict';var l=i.PropTypes,m=i.createClass({displayName:'MercuryThreadTimestamp',mixins:[h],propTypes:{time:l.number,title:l.string,text:l.string},render:function(){var n=this.props.time;if(!n)return i.createElement('abbr',null);return (i.createElement('abbr',{className:k(this.props.className,'timestamp'),title:this.props.title||new Date(n).toLocaleDateString(),'data-utime':n/1000},this.props.text||j(new Date(n),'g:ia')));}});f.exports=m;},null);
__d('MessagesJewelInlineThumbnail.react',['MercuryAttachmentType','React','cx'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();'use strict';var k=i.PropTypes,l=i.createClass({displayName:'MessagesJewelInlineThumbnail',propTypes:{thread:k.object.isRequired},render:function(){var m=this._getPhotoAttachments();if(m.length===0)return i.createElement('span',null);var n=m[0].thumbnail_url;if(!n)return i.createElement('span',null);var o=i.createElement('span',{className:"_56hv"},i.createElement('i',{style:{backgroundImage:'url('+n+')'}}));if(m.length>1)o=i.createElement('span',null,i.createElement('span',{className:"_56hy"}),o);return o;},_getPhotoAttachments:function(){var m=this.props.thread;if(!m.snippet_attachments)return [];return m.snippet_attachments.filter(function(n){return n.attach_type===h.PHOTO;});}});f.exports=l;},null);
__d('MessagesJewelThreadListRow.react',['ImageBlock.react','immutable','ImmutableObject','MercuryConfig','MercuryPresenceIndicator.react','MercurySeenIndicator.react','MercuryThreadImage.react','MercuryThreadPermalink.react','MercuryThreadReadToggle.react','MercuryThreadSnippet.react','MercuryThreadTimestamp.react','MercuryThreadTitle.react','MessagesJewelInlineThumbnail.react','ReactComponentWithPureRenderMixin','React','cx'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w){if(c.__markCompiled)c.__markCompiled();'use strict';var x=v.PropTypes,y=v.createClass({displayName:'MessagesJewelThreadListRow',mixins:[u],propTypes:{onClick:x.func,participants:x.instanceOf(i.Map).isRequired,showPresence:x.bool,thread:x.instanceOf(j).isRequired,viewer:x.string.isRequired,wasSeenByAll:x.bool},render:function(){var z=null;if(k.MessageJewelRedesign){z=v.createElement(h,{spacing:'medium'},v.createElement('div',{className:'MercuryThreadImage MercuryRedesign'},this._renderThreadImage(48)),v.createElement('div',{className:'content'},v.createElement('div',{className:'author'},this._renderThreadTitle()),v.createElement('div',{className:'snippet preview'},this._renderThreadSnippet())),v.createElement('div',null,v.createElement(t,{thread:this.props.thread}),v.createElement('div',{className:'x_div'},v.createElement('div',{className:'timestamp'},this._renderThreadTimeStamp()),v.createElement('div',{className:'indicator'},this._renderThreadIndicator()))));}else z=v.createElement(h,{spacing:'medium'},v.createElement('div',{className:'MercuryThreadImage'},this._renderThreadImage()),v.createElement('div',{className:'content'},v.createElement('div',{className:'author'},v.createElement('strong',null,this._renderThreadTitle()),this._renderPresenceIndicator()),v.createElement('div',{className:'snippet preview'},this._renderThreadIndicator(),this._renderThreadSnippet()),v.createElement('div',{className:'time'},this._renderThreadTimeStamp())),v.createElement('div',null,v.createElement(t,{thread:this.props.thread}),v.createElement('div',{className:'x_div'},this._renderThreadReadToggle())));return (v.createElement('li',{className:this.props.thread.unread_count>0?"jewelItemNew":''},v.createElement(o,{className:'messagesContent',threadID:this.props.thread.thread_id,viewer:this.props.viewer,folder:this.props.thread.folder,onClick:this.props.onClick},z)));},_renderPresenceIndicator:function(){if(!this.props.showPresence)return null;return (v.createElement(l,{threadID:this.props.thread.thread_id}));},_renderThreadImage:function(z){return (v.createElement(n,{size:z,thread:this.props.thread,useBackground:true,viewer:this.props.viewer}));},_renderThreadTitle:function(){return (v.createElement(s,{thread:this.props.thread,viewer:this.props.viewer,showUnreadCount:true}));},_renderThreadSnippet:function(){return (v.createElement(q,{participants:this.props.participants,thread:this.props.thread,viewer:this.props.viewer}));},_renderThreadTimeStamp:function(){return (v.createElement(r,{time:this.props.thread.timestamp,title:this.props.thread.timestamp_absolute,text:this.props.thread.timestamp_relative}));},_renderThreadIndicator:function(){return (v.createElement(m,{thread:this.props.thread,viewer:this.props.viewer}));},_renderThreadReadToggle:function(){return (v.createElement(p,{threadID:this.props.thread.thread_id,viewer:this.props.viewer,unreadCount:this.props.thread.unread_count}));}});f.exports=y;},null);
__d('MessagesJewelThreadlistRowContainer.react',['ImmutableObject','MercuryDelayedRoger','MercuryThreadlistRowContainer.react','MessagesJewelThreadListRow.react','ReactComponentWithPureRenderMixin','React','StoreAndPropBasedStateMixin','requireWeak'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o){if(c.__markCompiled)c.__markCompiled();'use strict';var p=m.PropTypes,q;o('ChatOpenTab',function(s){q=s;});var r=m.createClass({displayName:'MessagesJewelThreadlistRowContainer',mixins:[l,n(i)],propTypes:{thread:p.instanceOf(h).isRequired,viewer:p.string.isRequired},statics:{calculateState:function(s){return {wasSeenByAll:i.wasSeenByAll(s.thread.thread_id)};}},componentDidMount:function(){if(!q)o('ChatOpenTab',(function(s){this.forceUpdate();}).bind(this));},render:function(){return (m.createElement(j,{ChildClass:k,onClick:this._handleClick,showPresence:q&&q.canOpenTab(),thread:this.props.thread,viewer:this.props.viewer,wasSeenByAll:this.state.wasSeenByAll}));},_handleClick:function(s){if(s.button===1||s.altKey||s.ctrlKey||s.metaKey||s.shiftKey)return;if(q&&q.canOpenTab()){s.preventDefault();q.openThread(this.props.thread.thread_id,'jewel');}}});f.exports=r;},null);
__d('MessagesJewelThreadList.react',['ImmutableObject','Link.react','MessagesJewelThreadlistRowContainer.react','React','ScrollableArea.react','XUISpinner.react','cx','debounce','fbt','getViewportDimensions','throttle'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){if(c.__markCompiled)c.__markCompiled();'use strict';var s=160,t=475,u=k.PropTypes,v=k.createClass({displayName:'MessagesJewelThreadList',propTypes:{isLoaded:u.bool,isLoading:u.bool,onLoadMoreRequest:u.func,p2pJewelBannerContainer:u.element,threads:u.arrayOf(u.instanceOf(h)).isRequired,viewer:u.string.isRequired},getInitialState:function(){return {height:this._calculateHeight()};},componentDidMount:function(){this._listener=Event.listen(window,'resize',o((function(){this.setState({height:this._calculateHeight()});}).bind(this)));},componentWillUnmount:function(){this._listener.remove();},render:function(){return (k.createElement(l,{className:"_2q3u",height:this.state.height,onScroll:r(this._handleScroll,50),ref:'scrollable'},k.createElement('ul',{className:'jewelContent'},this.props.p2pJewelBannerContainer?k.createElement('li',null,this.props.p2pJewelBannerContainer):null,this.props.threads.map((function(w){return (k.createElement(j,{key:w.thread_id,thread:w,viewer:this.props.viewer}));}).bind(this))),this._renderLoadMoreLink()));},_calculateHeight:function(){return Math.min(t,q().height-s);},_renderLoadMoreLink:function(){if(this.props.isLoaded)return null;if(this.props.isLoading)return (k.createElement('div',{className:"_v8y"},k.createElement(m,null)));return (k.createElement('div',{className:"_v8y"},k.createElement(i,{href:'#',onClick:this._handleLoadMoreClick},p._("Show Older"))));},_handleScroll:function(){if(this.props.isLoaded)return;var w=this.refs.scrollable.getArea();if(w.getScrollTop()+w.getClientHeight()>=w.getScrollHeight()-1)this.props.onLoadMoreRequest&&this.props.onLoadMoreRequest();},_handleLoadMoreClick:function(w){w.preventDefault();this.props.onLoadMoreRequest&&this.props.onLoadMoreRequest();}});f.exports=v;},null);
__d('MercuryJewelThreadlistControl',['ArbiterMixin','CurrentUser','CSS','DOM','Event','JSLogger','MercuryConfig','MercuryFilters','MercuryThreadlistConstants','MercuryThreadlistContainer.react','MessagesJewelThreadList.react','MessagingTag','React','ReactDOM','csx','cx','fbt','MercuryThreadInformer','MercuryUnreadState'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){if(c.__markCompiled)c.__markCompiled();var y=c('MercuryThreadInformer').get(),z=c('MercuryUnreadState').get(),aa=m.create('mercury_jewel'),ba=n.CoreGraphEnabled?s.PENDING:s.OTHER;function ca(ga){var ha=ga.getFlyout();this._jewelController=ga;this._threadlistContainer=k.find(ha,"._3v_l");this._currentFolder=s.INBOX;this._currentFilter=o.ALL;this._jewelTabLinks={};if(n.MessengerJewelUnread==='second'){this._jewelTabLinks[s.UNREAD]=k.find(ha,"._5c_s");l.listen(this._jewelTabLinks[s.UNREAD],'click',da.bind(this,s.INBOX,s.UNREAD));}this._jewelTabCounts={};this._jewelTabLinks[s.INBOX]=k.find(ha,"._1sde");this._jewelTabLinks[ba]=k.find(ha,"._1sdf");this._jewelTabCounts[s.INBOX]=k.find(ha,"._1sdg");this._jewelTabCounts[ba]=k.find(ha,"._1sdh");this._markAllReadLink=k.find(ha,"._1c1m");l.listen(this._jewelTabLinks[s.INBOX],'click',da.bind(this,s.INBOX,o.ALL));l.listen(this._jewelTabLinks[ba],'click',da.bind(this,ba,o.ALL));l.listen(this._markAllReadLink,'click',(function(ia){z.markFolderAsRead(this._currentFolder);ia.kill();}).bind(this));y.subscribe('unread-updated',ea.bind(this));ea.bind(this)();this.render();aa.bump('opened_threadlist_'+this._currentFolder);}Object.assign(ca.prototype,h);Object.assign(ca.prototype,{render:function(){u.render(t.createElement(q,{ChildClass:r,viewer:i.getID(),folder:this._currentFolder,filter:this._currentFilter}),this._threadlistContainer);}});function da(ga,ha){if(this._currentFolder!==ga||this._currentFilter!==ha){var ia=this._currentFilter===o.UNREAD?s.UNREAD:this._currentFolder,ja=ha===o.UNREAD?s.UNREAD:ga;aa.bump('opened_threadlist_'+ga);j.addClass(this._jewelTabLinks[ja],"_1sdd");j.removeClass(this._jewelTabLinks[ia],"_1sdd");this._currentFolder=ga;this._currentFilter=ha;this.render();}}function ea(){fa.bind(this)(s.INBOX);fa.bind(this)(ba);}function fa(ga){var ha;if(z.exceedsMaxCount(ga)){ha=p.MAX_UNREAD_COUNT;}else ha=z.getUnreadCount(ga);var ia=this._jewelTabCounts[ga];if(ha>0){if(ha==p.MAX_UNREAD_COUNT)ha+='+';k.setContent(ia,x._("({unread_count})",[x.param('unread_count',ha)]));}else k.setContent(ia,'');}f.exports=ca;},null);
__d('MercuryJewel',['Arbiter','MercuryJewelCountControl','MercuryServerPayloadPreprocessor','MercuryChannelHandler'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();c('MercuryChannelHandler').get().turnOn();var k=false;function l(m,n){'use strict';i.constructStores();j.get().handleUpdate(n);this.$MercuryJewel1=new i(m);if(m.getRoot()&&m.isOpen()){this.$MercuryJewel2(m);}else m.subscribeOnce('opened',this.$MercuryJewel2.bind(this,m));}l.prototype.$MercuryJewel2=function(m){'use strict';if(!k){e(['MercuryJewelThreadlistControl'],(function(n){this.$MercuryJewel3=new n(m);}).bind(this));h.inform('mercury-jewel/opened',null,h.BEHAVIOR_PERSISTENT);k=true;}};f.exports=l;},null);