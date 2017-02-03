// Compiled by ClojureScript 1.9.229 {}
goog.provide('kitchensink.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('om.next');
goog.require('om_tools.dom');
goog.require('kitchensink.blueprint');
cljs.core.enable_console_print_BANG_.call(null);
kitchensink.core.my_toaster = kitchensink.blueprint.toaster.call(null);
/**
 * @constructor
 */
kitchensink.core.Root = (function kitchensink$core$Root(){
var this__26072__auto__ = this;
React.Component.apply(this__26072__auto__,arguments);

if(!((this__26072__auto__.initLocalState == null))){
this__26072__auto__.state = this__26072__auto__.initLocalState();
} else {
this__26072__auto__.state = {};
}

return this__26072__auto__;
});

kitchensink.core.Root.prototype = goog.object.clone(React.Component.prototype);

var x52172_52184 = kitchensink.core.Root.prototype;
x52172_52184.componentWillUpdate = ((function (x52172_52184){
return (function (next_props__25927__auto__,next_state__25928__auto__){
var this__25926__auto__ = this;
if(((!((this__25926__auto__ == null)))?(((false) || (this__25926__auto__.om$next$Ident$))?true:false):false)){
var ident__25930__auto___52185 = om.next.ident.call(null,this__25926__auto__,om.next.props.call(null,this__25926__auto__));
var next_ident__25931__auto___52186 = om.next.ident.call(null,this__25926__auto__,om.next._next_props.call(null,next_props__25927__auto__,this__25926__auto__));
if(cljs.core.not_EQ_.call(null,ident__25930__auto___52185,next_ident__25931__auto___52186)){
var idxr__25932__auto___52187 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__25926__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__25932__auto___52187 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__25932__auto___52187),((function (idxr__25932__auto___52187,ident__25930__auto___52185,next_ident__25931__auto___52186,this__25926__auto__,x52172_52184){
return (function (indexes__25933__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__25933__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__25930__auto___52185], null),cljs.core.disj,this__25926__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__25931__auto___52186], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__25926__auto__);
});})(idxr__25932__auto___52187,ident__25930__auto___52185,next_ident__25931__auto___52186,this__25926__auto__,x52172_52184))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__25926__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__25926__auto__);
});})(x52172_52184))
;

x52172_52184.shouldComponentUpdate = ((function (x52172_52184){
return (function (next_props__25927__auto__,next_state__25928__auto__){
var this__25926__auto__ = this;
var next_children__25929__auto__ = next_props__25927__auto__.children;
var next_props__25927__auto____$1 = goog.object.get(next_props__25927__auto__,"omcljs$value");
var next_props__25927__auto____$2 = (function (){var G__52174 = next_props__25927__auto____$1;
if((next_props__25927__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__52174);
} else {
return G__52174;
}
})();
var or__20097__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__25926__auto__),next_props__25927__auto____$2);
if(or__20097__auto__){
return or__20097__auto__;
} else {
var or__20097__auto____$1 = (function (){var and__20085__auto__ = this__25926__auto__.state;
if(cljs.core.truth_(and__20085__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__25926__auto__.state,"omcljs$state"),goog.object.get(next_state__25928__auto__,"omcljs$state"));
} else {
return and__20085__auto__;
}
})();
if(cljs.core.truth_(or__20097__auto____$1)){
return or__20097__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__25926__auto__.props.children,next_children__25929__auto__);
}
}
});})(x52172_52184))
;

x52172_52184.componentWillUnmount = ((function (x52172_52184){
return (function (){
var this__25926__auto__ = this;
var r__25937__auto__ = om.next.get_reconciler.call(null,this__25926__auto__);
var cfg__25938__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__25937__auto__);
var st__25939__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__25938__auto__);
var indexer__25936__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__25938__auto__);
if(cljs.core.truth_((function (){var and__20085__auto__ = !((st__25939__auto__ == null));
if(and__20085__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__25939__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__25926__auto__], null));
} else {
return and__20085__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__25939__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__25926__auto__);
} else {
}

if((indexer__25936__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__25936__auto__,this__25926__auto__);
}
});})(x52172_52184))
;

x52172_52184.componentDidUpdate = ((function (x52172_52184){
return (function (prev_props__25934__auto__,prev_state__25935__auto__){
var this__25926__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__25926__auto__);
});})(x52172_52184))
;

x52172_52184.isMounted = ((function (x52172_52184){
return (function (){
var this__25926__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__25926__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x52172_52184))
;

x52172_52184.componentWillMount = ((function (x52172_52184){
return (function (){
var this__25926__auto__ = this;
var indexer__25936__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__25926__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__25936__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__25936__auto__,this__25926__auto__);
}
});})(x52172_52184))
;

x52172_52184.initLocalState = ((function (x52172_52184){
return (function (){
var this$ = this;
var ret__25904__auto__ = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"collapse","collapse",-1218136136),true,new cljs.core.Keyword(null,"slider","slider",-472668865),(8),new cljs.core.Keyword(null,"text","text",-1790561697),"This looks like text but can be edited",new cljs.core.Keyword(null,"radio","radio",1323726374),"slaw"], null);
var obj52176 = {"omcljs$state":ret__25904__auto__};
return obj52176;
});})(x52172_52184))
;

x52172_52184.render = ((function (x52172_52184){
return (function (){
var this__25925__auto__ = this;
var this$ = this__25925__auto__;
var _STAR_reconciler_STAR_52177 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_52178 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_52179 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_52180 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_52181 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__25925__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__25925__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__25925__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__25925__auto__);

om.next._STAR_parent_STAR_ = this__25925__auto__;

try{var toggle = ((function (_STAR_reconciler_STAR_52177,_STAR_depth_STAR_52178,_STAR_shared_STAR_52179,_STAR_instrument_STAR_52180,_STAR_parent_STAR_52181,this$,this__25925__auto__,x52172_52184){
return (function (key){
return ((function (_STAR_reconciler_STAR_52177,_STAR_depth_STAR_52178,_STAR_shared_STAR_52179,_STAR_instrument_STAR_52180,_STAR_parent_STAR_52181,this$,this__25925__auto__,x52172_52184){
return (function (){
return om.next.update_state_BANG_.call(null,this$,cljs.core.update,key,cljs.core.not);
});
;})(_STAR_reconciler_STAR_52177,_STAR_depth_STAR_52178,_STAR_shared_STAR_52179,_STAR_instrument_STAR_52180,_STAR_parent_STAR_52181,this$,this__25925__auto__,x52172_52184))
});})(_STAR_reconciler_STAR_52177,_STAR_depth_STAR_52178,_STAR_shared_STAR_52179,_STAR_instrument_STAR_52180,_STAR_parent_STAR_52181,this$,this__25925__auto__,x52172_52184))
;
var enabled_QMARK_ = ((function (toggle,_STAR_reconciler_STAR_52177,_STAR_depth_STAR_52178,_STAR_shared_STAR_52179,_STAR_instrument_STAR_52180,_STAR_parent_STAR_52181,this$,this__25925__auto__,x52172_52184){
return (function (key){
return om.next.get_state.call(null,this$).call(null,key);
});})(toggle,_STAR_reconciler_STAR_52177,_STAR_depth_STAR_52178,_STAR_shared_STAR_52179,_STAR_instrument_STAR_52180,_STAR_parent_STAR_52181,this$,this__25925__auto__,x52172_52184))
;
var section = ((function (toggle,enabled_QMARK_,_STAR_reconciler_STAR_52177,_STAR_depth_STAR_52178,_STAR_shared_STAR_52179,_STAR_instrument_STAR_52180,_STAR_parent_STAR_52181,this$,this__25925__auto__,x52172_52184){
return (function() { 
var G__52188__delegate = function (args){
return cljs.core.apply.call(null,React.DOM.div,({"style": ({"paddingTop": "1em"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,om_tools.dom.div,args),React.DOM.div(({"style": ({"marginTop": "1em", "height": "1em", "backgroundColor": "silver"})}))],null))));
};
var G__52188 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52189__i = 0, G__52189__a = new Array(arguments.length -  0);
while (G__52189__i < G__52189__a.length) {G__52189__a[G__52189__i] = arguments[G__52189__i + 0]; ++G__52189__i;}
  args = new cljs.core.IndexedSeq(G__52189__a,0);
} 
return G__52188__delegate.call(this,args);};
G__52188.cljs$lang$maxFixedArity = 0;
G__52188.cljs$lang$applyTo = (function (arglist__52190){
var args = cljs.core.seq(arglist__52190);
return G__52188__delegate(args);
});
G__52188.cljs$core$IFn$_invoke$arity$variadic = G__52188__delegate;
return G__52188;
})()
;})(toggle,enabled_QMARK_,_STAR_reconciler_STAR_52177,_STAR_depth_STAR_52178,_STAR_shared_STAR_52179,_STAR_instrument_STAR_52180,_STAR_parent_STAR_52181,this$,this__25925__auto__,x52172_52184))
;
return cljs.core.apply.call(null,React.DOM.div,({"className": om_tools.dom.format_opts.call(null,(cljs.core.truth_(enabled_QMARK_.call(null,new cljs.core.Keyword(null,"dark","dark",1818973999)))?"pt-dark":null))}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.nav,({"className": "pt-navbar"}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,({"className": "pt-navbar-group pt-align-left"}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.div(({"className": "pt-navbar-heading"}),"A page with all Blueprintjs Components, rendered in Om")],null)))),cljs.core.apply.call(null,React.DOM.div,({"className": "pt-navbar-group pt-align-right"}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[kitchensink.blueprint.button.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"icon-name","icon-name",152456315),"home",new cljs.core.Keyword(null,"class","class",-2030961996),"pt-minimal",new cljs.core.Keyword(null,"intent","intent",-390846953),kitchensink.blueprint.intents.call(null,new cljs.core.Keyword(null,"primary","primary",817773892))], null),"Github"),kitchensink.blueprint.button.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"icon-name","icon-name",152456315),"pt-icon-document-open",new cljs.core.Keyword(null,"class","class",-2030961996),"pt-minimal",new cljs.core.Keyword(null,"href","href",-793805698),"http://blueprintjs.com/"], null),"Code for this page")],null))))],null)))),cljs.core.apply.call(null,React.DOM.div,({"style": ({"display": "flex", "justifyContent": "center"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,({"style": ({"width": "800px", "backgroundColor": om_tools.dom.format_opts.call(null,(cljs.core.truth_(enabled_QMARK_.call(null,new cljs.core.Keyword(null,"dark","dark",1818973999)))?"#333844":"#EEE")), "padding": "3em"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,28,(5),cljs.core.PersistentVector.EMPTY_NODE,[section.call(null,"Click on stuff for animations & stuff. Example source here: ",React.DOM.a(({"href": "todo"}),"todo")),section.call(null,kitchensink.blueprint.switch$.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),toggle.call(null,new cljs.core.Keyword(null,"dark","dark",1818973999))], null),"Turn off the lights!")),section.call(null,kitchensink.blueprint.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),toggle.call(null,new cljs.core.Keyword(null,"alert","alert",-571950580))], null),"Open Alert")),kitchensink.blueprint.alert.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"is-open","is-open",1660707069),enabled_QMARK_.call(null,new cljs.core.Keyword(null,"alert","alert",-571950580)),new cljs.core.Keyword(null,"cancel-button-text","cancel-button-text",-33362523),"Get me outa here",new cljs.core.Keyword(null,"on-cancel","on-cancel",-2071892932),toggle.call(null,new cljs.core.Keyword(null,"alert","alert",-571950580)),new cljs.core.Keyword(null,"confirm-button-text","confirm-button-text",122485941),"I like this!",new cljs.core.Keyword(null,"on-confirm","on-confirm",1527003038),toggle.call(null,new cljs.core.Keyword(null,"alert","alert",-571950580))], null),"This is an alert with text."),section.call(null,kitchensink.blueprint.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (toggle,enabled_QMARK_,section,_STAR_reconciler_STAR_52177,_STAR_depth_STAR_52178,_STAR_shared_STAR_52179,_STAR_instrument_STAR_52180,_STAR_parent_STAR_52181,this$,this__25925__auto__,x52172_52184){
return (function (){
return kitchensink.core.my_toaster.show(({"intent": new cljs.core.Keyword(null,"danger","danger",-624338030).cljs$core$IFn$_invoke$arity$1(kitchensink.blueprint.intents), "message": "This is a very dangerous button. Do not press it again."}));
});})(toggle,enabled_QMARK_,section,_STAR_reconciler_STAR_52177,_STAR_depth_STAR_52178,_STAR_shared_STAR_52179,_STAR_instrument_STAR_52180,_STAR_parent_STAR_52181,this$,this__25925__auto__,x52172_52184))
], null),"Toast")),section.call(null,kitchensink.blueprint.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),toggle.call(null,new cljs.core.Keyword(null,"dialog","dialog",1415150135))], null),"Show Dialog")),section.call(null,kitchensink.blueprint.tabs.call(null,kitchensink.blueprint.tab_list.call(null,kitchensink.blueprint.tab.call(null,"A Tab"),kitchensink.blueprint.tab.call(null,"Another Tab"),kitchensink.blueprint.tab.call(null,"Last Tab")),kitchensink.blueprint.tab_panel.call(null,"Some stuff."),kitchensink.blueprint.tab_panel.call(null,"Some more stuff."),kitchensink.blueprint.tab_panel.call(null,"The last stuff."))),kitchensink.blueprint.dialog.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"icon-name","icon-name",152456315),"inbox",new cljs.core.Keyword(null,"is-open","is-open",1660707069),enabled_QMARK_.call(null,new cljs.core.Keyword(null,"dialog","dialog",1415150135)),new cljs.core.Keyword(null,"on-close","on-close",-761178394),toggle.call(null,new cljs.core.Keyword(null,"dialog","dialog",1415150135)),new cljs.core.Keyword(null,"title","title",636505583),"Awesome Dialog"], null),cljs.core.apply.call(null,React.DOM.div,({"className": "pt-dialog-body"}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.p(null,"Here is some random text in this awesome dialog"),om_tools.dom.element.call(null,React.DOM.p,om.dom.input.call(null,({"className": "pt-input", "placeholder": "foo"})),cljs.core.PersistentVector.EMPTY)],null)))),cljs.core.apply.call(null,React.DOM.div,({"className": "pt-dialog-footer"}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,({"className": "pt-dialog-footer-actions"}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[kitchensink.blueprint.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"intent","intent",-390846953),kitchensink.blueprint.intents.call(null,new cljs.core.Keyword(null,"primary","primary",817773892))], null),"Submit"),kitchensink.blueprint.button.call(null,"Nothing")],null))))],null))))),section.call(null,kitchensink.blueprint.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (toggle,enabled_QMARK_,section,_STAR_reconciler_STAR_52177,_STAR_depth_STAR_52178,_STAR_shared_STAR_52179,_STAR_instrument_STAR_52180,_STAR_parent_STAR_52181,this$,this__25925__auto__,x52172_52184){
return (function (){
return kitchensink.blueprint.context_menu.show(kitchensink.blueprint.menu.call(null,kitchensink.blueprint.menu_item.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"One Item"], null)),kitchensink.blueprint.menu_item.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Another Item"], null))),({"left": (100), "top": (300)}));
});})(toggle,enabled_QMARK_,section,_STAR_reconciler_STAR_52177,_STAR_depth_STAR_52178,_STAR_shared_STAR_52179,_STAR_instrument_STAR_52180,_STAR_parent_STAR_52181,this$,this__25925__auto__,x52172_52184))
], null),"Show context menu")),section.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"pt-breadcrumbs"], null),om_tools.dom.element.call(null,React.DOM.li,kitchensink.blueprint.breadcrumb.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Crumb1"], null)),cljs.core.PersistentVector.EMPTY),om_tools.dom.element.call(null,React.DOM.li,kitchensink.blueprint.breadcrumb.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Crumb2"], null)),cljs.core.PersistentVector.EMPTY),om_tools.dom.element.call(null,React.DOM.li,kitchensink.blueprint.breadcrumb.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Crumb3"], null)),cljs.core.PersistentVector.EMPTY)),section.call(null,om_tools.dom.element.call(null,React.DOM.p,kitchensink.blueprint.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"intent","intent",-390846953),kitchensink.blueprint.intents.call(null,new cljs.core.Keyword(null,"primary","primary",817773892))], null),"I'm Primary"),cljs.core.PersistentVector.EMPTY),om_tools.dom.element.call(null,React.DOM.p,kitchensink.blueprint.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"intent","intent",-390846953),kitchensink.blueprint.intents.call(null,new cljs.core.Keyword(null,"danger","danger",-624338030))], null),"Danger!"),cljs.core.PersistentVector.EMPTY),om_tools.dom.element.call(null,React.DOM.p,kitchensink.blueprint.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"icon-name","icon-name",152456315),"refresh"], null),"I've got an icon"),cljs.core.PersistentVector.EMPTY)),section.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"pt-button-group"], null),kitchensink.blueprint.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"intent","intent",-390846953),kitchensink.blueprint.intents.call(null,new cljs.core.Keyword(null,"success","success",1890645906))], null),"Buttons"),kitchensink.blueprint.button.call(null,"in a"),kitchensink.blueprint.button.call(null,"group")),section.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"pt-callout pt-intent-danger"], null),React.DOM.h5(null,"Warning"),"You are reading the text in a callout."),section.call(null,React.DOM.div(({"className": "pt-card pt-elevation-3"}),"Look at me! I'm floating!")),section.call(null,kitchensink.blueprint.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),toggle.call(null,new cljs.core.Keyword(null,"collapse","collapse",-1218136136))], null),"Collapse"),kitchensink.blueprint.collapse.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"is-open","is-open",1660707069),enabled_QMARK_.call(null,new cljs.core.Keyword(null,"collapse","collapse",-1218136136))], null),"This is the text that will collapse")),section.call(null,kitchensink.blueprint.slider.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"min","min",444991522),(1),new cljs.core.Keyword(null,"max","max",61366548),(10),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"slider","slider",-472668865).cljs$core$IFn$_invoke$arity$1(om.next.get_state.call(null,this$)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (toggle,enabled_QMARK_,section,_STAR_reconciler_STAR_52177,_STAR_depth_STAR_52178,_STAR_shared_STAR_52179,_STAR_instrument_STAR_52180,_STAR_parent_STAR_52181,this$,this__25925__auto__,x52172_52184){
return (function (value){
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"slider","slider",-472668865),value);
});})(toggle,enabled_QMARK_,section,_STAR_reconciler_STAR_52177,_STAR_depth_STAR_52178,_STAR_shared_STAR_52179,_STAR_instrument_STAR_52180,_STAR_parent_STAR_52181,this$,this__25925__auto__,x52172_52184))
], null)),kitchensink.blueprint.collapsible_list.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"pt-breadcrumbs",new cljs.core.Keyword(null,"visible-item-count","visible-item-count",1159233092),new cljs.core.Keyword(null,"slider","slider",-472668865).cljs$core$IFn$_invoke$arity$1(om.next.get_state.call(null,this$)),new cljs.core.Keyword(null,"dropdown-target","dropdown-target",-1369792600),React.DOM.span(({"className": "pt-breadcrumbs-collapsed"})),new cljs.core.Keyword(null,"render-visible-item","render-visible-item",-1136751532),((function (toggle,enabled_QMARK_,section,_STAR_reconciler_STAR_52177,_STAR_depth_STAR_52178,_STAR_shared_STAR_52179,_STAR_instrument_STAR_52180,_STAR_parent_STAR_52181,this$,this__25925__auto__,x52172_52184){
return (function (props){
return cljs.core.apply.call(null,React.DOM.span,({"className": "pt-breadcrumb"}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[props.text],null))));
});})(toggle,enabled_QMARK_,section,_STAR_reconciler_STAR_52177,_STAR_depth_STAR_52178,_STAR_shared_STAR_52179,_STAR_instrument_STAR_52180,_STAR_parent_STAR_52181,this$,this__25925__auto__,x52172_52184))
], null),kitchensink.blueprint.menu_item.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"These"], null)),kitchensink.blueprint.menu_item.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Words"], null)),kitchensink.blueprint.menu_item.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Can"], null)),kitchensink.blueprint.menu_item.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Be"], null)),kitchensink.blueprint.menu_item.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Removed"], null)),kitchensink.blueprint.menu_item.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"With"], null)),kitchensink.blueprint.menu_item.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"The"], null)),kitchensink.blueprint.menu_item.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Slider"], null)))),section.call(null,React.DOM.div(null,"This is just text"),om_tools.dom.element.call(null,React.DOM.div,kitchensink.blueprint.editable_text.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (toggle,enabled_QMARK_,section,_STAR_reconciler_STAR_52177,_STAR_depth_STAR_52178,_STAR_shared_STAR_52179,_STAR_instrument_STAR_52180,_STAR_parent_STAR_52181,this$,this__25925__auto__,x52172_52184){
return (function (s){
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"text","text",-1790561697),s);
});})(toggle,enabled_QMARK_,section,_STAR_reconciler_STAR_52177,_STAR_depth_STAR_52178,_STAR_shared_STAR_52179,_STAR_instrument_STAR_52180,_STAR_parent_STAR_52181,this$,this__25925__auto__,x52172_52184))
,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(om.next.get_state.call(null,this$))], null)),cljs.core.PersistentVector.EMPTY),React.DOM.div(null,"This is just text")),section.call(null,kitchensink.blueprint.checkbox.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"checked","checked",-50955819),enabled_QMARK_.call(null,new cljs.core.Keyword(null,"checkbox","checkbox",1612615655)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),toggle.call(null,new cljs.core.Keyword(null,"checkbox","checkbox",1612615655))], null),"Checkbox")),section.call(null,kitchensink.blueprint.radio_group.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (toggle,enabled_QMARK_,section,_STAR_reconciler_STAR_52177,_STAR_depth_STAR_52178,_STAR_shared_STAR_52179,_STAR_instrument_STAR_52180,_STAR_parent_STAR_52181,this$,this__25925__auto__,x52172_52184){
return (function (event){
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"radio","radio",1323726374),event.target.value);
});})(toggle,enabled_QMARK_,section,_STAR_reconciler_STAR_52177,_STAR_depth_STAR_52178,_STAR_shared_STAR_52179,_STAR_instrument_STAR_52180,_STAR_parent_STAR_52181,this$,this__25925__auto__,x52172_52184))
,new cljs.core.Keyword(null,"selected-value","selected-value",-81904500),new cljs.core.Keyword(null,"radio","radio",1323726374).cljs$core$IFn$_invoke$arity$1(om.next.get_state.call(null,this$))], null),kitchensink.blueprint.radio.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Cole Slaw",new cljs.core.Keyword(null,"value","value",305978217),"slaw"], null)),kitchensink.blueprint.radio.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Fries",new cljs.core.Keyword(null,"value","value",305978217),"fries"], null)),kitchensink.blueprint.radio.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Mango Chips",new cljs.core.Keyword(null,"value","value",305978217),"chips"], null)))),section.call(null,kitchensink.blueprint.input_group.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"left-icon-name","left-icon-name",1003219192),"refresh",new cljs.core.Keyword(null,"value","value",305978217),"Text input with icons & stuff",new cljs.core.Keyword(null,"right-element","right-element",-375920256),kitchensink.blueprint.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"intent","intent",-390846953),kitchensink.blueprint.intents.call(null,new cljs.core.Keyword(null,"warning","warning",-1685650671))], null),"Do It!")], null))),section.call(null,kitchensink.blueprint.menu.call(null,kitchensink.blueprint.menu_item.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"icon-name","icon-name",152456315),"new-object",new cljs.core.Keyword(null,"text","text",-1790561697),"Here's"], null)),kitchensink.blueprint.menu_item.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"icon-name","icon-name",152456315),"new-text-box",new cljs.core.Keyword(null,"text","text",-1790561697),"A haiku that's"], null)),kitchensink.blueprint.menu_item.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"icon-name","icon-name",152456315),"new-link",new cljs.core.Keyword(null,"text","text",-1790561697),"Written inside"], null)),kitchensink.blueprint.menu_divider.call(null),kitchensink.blueprint.menu_item.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"icon-name","icon-name",152456315),"cog",new cljs.core.Keyword(null,"text","text",-1790561697),"A menu."], null)))),section.call(null,kitchensink.blueprint.non_ideal_state.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Please Stop It.",new cljs.core.Keyword(null,"description","description",-1428560544),"This widget cannot be burglebated more than five times with a yip yap.",new cljs.core.Keyword(null,"visual","visual",942787224),"pt-icon-thumbs-down"], null))),section.call(null,kitchensink.blueprint.popover.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"content","content",15833224),om_tools.dom.element.call(null,React.DOM.div,React.DOM.p(null,"Random stuff in here"),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[kitchensink.blueprint.button.call(null,"A Button")],null))),new cljs.core.Keyword(null,"popover-class-name","popover-class-name",-1907703608),"pt-popover-content-sizing"], null),kitchensink.blueprint.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),toggle.call(null,new cljs.core.Keyword(null,"popover","popover",-1809582136))], null),"Popover"))),section.call(null,om_tools.dom.element.call(null,React.DOM.p,kitchensink.blueprint.progress_bar.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),0.8], null)),cljs.core.PersistentVector.EMPTY),React.DOM.p(null),kitchensink.blueprint.spinner.call(null)),section.call(null,cljs.core.apply.call(null,React.DOM.table,({"className": "pt-table pt-striped"}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.thead,React.DOM.th(null,"Col1"),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.th(null,"Col2"),React.DOM.th(null,"Col3")],null))),om_tools.dom.element.call(null,React.DOM.tbody,om_tools.dom.element.call(null,React.DOM.tr,React.DOM.td(null,"Stuff"),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.td(null,"In"),React.DOM.td(null,"A Table")],null))),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.tr,React.DOM.td(null,"Stuff"),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.td(null,"In"),React.DOM.td(null,"A Table")],null))),om_tools.dom.element.call(null,React.DOM.tr,React.DOM.td(null,"Stuff"),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.td(null,"In"),React.DOM.td(null,"A Table")],null)))],null)))],null))))),section.call(null,om_tools.dom.element.call(null,React.DOM.p,kitchensink.blueprint.tag.call(null,"Just"),cljs.core.PersistentVector.EMPTY),om_tools.dom.element.call(null,React.DOM.p,kitchensink.blueprint.tag.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"intent","intent",-390846953),kitchensink.blueprint.intents.call(null,new cljs.core.Keyword(null,"primary","primary",817773892))], null),"Some"),cljs.core.PersistentVector.EMPTY),om_tools.dom.element.call(null,React.DOM.p,kitchensink.blueprint.tag.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-remove","on-remove",-268656163),((function (toggle,enabled_QMARK_,section,_STAR_reconciler_STAR_52177,_STAR_depth_STAR_52178,_STAR_shared_STAR_52179,_STAR_instrument_STAR_52180,_STAR_parent_STAR_52181,this$,this__25925__auto__,x52172_52184){
return (function (){
return null;
});})(toggle,enabled_QMARK_,section,_STAR_reconciler_STAR_52177,_STAR_depth_STAR_52178,_STAR_shared_STAR_52179,_STAR_instrument_STAR_52180,_STAR_parent_STAR_52181,this$,this__25925__auto__,x52172_52184))
], null),"Tags"),cljs.core.PersistentVector.EMPTY)),section.call(null,kitchensink.blueprint.tooltip.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",15833224),"This is very important text"], null),"Hover over me.")),section.call(null,kitchensink.blueprint.tree.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"contents","contents",-1567174023),kitchensink.blueprint.clj__GT_tree_nodes.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),"Foo"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Bar",new cljs.core.Keyword(null,"is-expanded","is-expanded",107086836),true,new cljs.core.Keyword(null,"child-nodes","child-nodes",-776571394),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),"Qux"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),"Quux"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),"Quuux"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),"Baz"], null)], null))], null)))],null))))],null))))],null))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_52181;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_52180;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_52179;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_52178;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_52177;
}});})(x52172_52184))
;


kitchensink.core.Root.prototype.constructor = kitchensink.core.Root;

kitchensink.core.Root.prototype.constructor.displayName = "kitchensink.core/Root";

kitchensink.core.Root.prototype.om$isComponent = true;

var x52182_52191 = kitchensink.core.Root;


var x52183_52192 = kitchensink.core.Root.prototype;


kitchensink.core.Root.cljs$lang$type = true;

kitchensink.core.Root.cljs$lang$ctorStr = "kitchensink.core/Root";

kitchensink.core.Root.cljs$lang$ctorPrWriter = (function (this__26075__auto__,writer__26076__auto__,opt__26077__auto__){
return cljs.core._write.call(null,writer__26076__auto__,"kitchensink.core/Root");
});
kitchensink.core.root = om.next.factory.call(null,kitchensink.core.Root);
ReactDOM.render(kitchensink.core.root.call(null),goog.dom.getElement("app"));

//# sourceMappingURL=core.js.map