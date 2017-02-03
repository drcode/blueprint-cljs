// Compiled by ClojureScript 1.9.229 {}
goog.provide('kitchensink.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('om.next');
goog.require('om_tools.dom');
goog.require('blueprint_cljs.core');
cljs.core.enable_console_print_BANG_.call(null);
kitchensink.core.my_toaster = blueprint_cljs.core.toaster.call(null);
/**
 * @constructor
 */
kitchensink.core.Root = (function kitchensink$core$Root(){
var this__25862__auto__ = this;
React.Component.apply(this__25862__auto__,arguments);

if(!((this__25862__auto__.initLocalState == null))){
this__25862__auto__.state = this__25862__auto__.initLocalState();
} else {
this__25862__auto__.state = {};
}

return this__25862__auto__;
});

kitchensink.core.Root.prototype = goog.object.clone(React.Component.prototype);

var x28208_28220 = kitchensink.core.Root.prototype;
x28208_28220.componentWillUpdate = ((function (x28208_28220){
return (function (next_props__25717__auto__,next_state__25718__auto__){
var this__25716__auto__ = this;
if(((!((this__25716__auto__ == null)))?(((false) || (this__25716__auto__.om$next$Ident$))?true:false):false)){
var ident__25720__auto___28221 = om.next.ident.call(null,this__25716__auto__,om.next.props.call(null,this__25716__auto__));
var next_ident__25721__auto___28222 = om.next.ident.call(null,this__25716__auto__,om.next._next_props.call(null,next_props__25717__auto__,this__25716__auto__));
if(cljs.core.not_EQ_.call(null,ident__25720__auto___28221,next_ident__25721__auto___28222)){
var idxr__25722__auto___28223 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__25716__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__25722__auto___28223 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__25722__auto___28223),((function (idxr__25722__auto___28223,ident__25720__auto___28221,next_ident__25721__auto___28222,this__25716__auto__,x28208_28220){
return (function (indexes__25723__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__25723__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__25720__auto___28221], null),cljs.core.disj,this__25716__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__25721__auto___28222], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__25716__auto__);
});})(idxr__25722__auto___28223,ident__25720__auto___28221,next_ident__25721__auto___28222,this__25716__auto__,x28208_28220))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__25716__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__25716__auto__);
});})(x28208_28220))
;

x28208_28220.shouldComponentUpdate = ((function (x28208_28220){
return (function (next_props__25717__auto__,next_state__25718__auto__){
var this__25716__auto__ = this;
var next_children__25719__auto__ = next_props__25717__auto__.children;
var next_props__25717__auto____$1 = goog.object.get(next_props__25717__auto__,"omcljs$value");
var next_props__25717__auto____$2 = (function (){var G__28210 = next_props__25717__auto____$1;
if((next_props__25717__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__28210);
} else {
return G__28210;
}
})();
var or__20097__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__25716__auto__),next_props__25717__auto____$2);
if(or__20097__auto__){
return or__20097__auto__;
} else {
var or__20097__auto____$1 = (function (){var and__20085__auto__ = this__25716__auto__.state;
if(cljs.core.truth_(and__20085__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__25716__auto__.state,"omcljs$state"),goog.object.get(next_state__25718__auto__,"omcljs$state"));
} else {
return and__20085__auto__;
}
})();
if(cljs.core.truth_(or__20097__auto____$1)){
return or__20097__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__25716__auto__.props.children,next_children__25719__auto__);
}
}
});})(x28208_28220))
;

x28208_28220.componentWillUnmount = ((function (x28208_28220){
return (function (){
var this__25716__auto__ = this;
var r__25727__auto__ = om.next.get_reconciler.call(null,this__25716__auto__);
var cfg__25728__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__25727__auto__);
var st__25729__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__25728__auto__);
var indexer__25726__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__25728__auto__);
if(cljs.core.truth_((function (){var and__20085__auto__ = !((st__25729__auto__ == null));
if(and__20085__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__25729__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__25716__auto__], null));
} else {
return and__20085__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__25729__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__25716__auto__);
} else {
}

if((indexer__25726__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__25726__auto__,this__25716__auto__);
}
});})(x28208_28220))
;

x28208_28220.componentDidUpdate = ((function (x28208_28220){
return (function (prev_props__25724__auto__,prev_state__25725__auto__){
var this__25716__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__25716__auto__);
});})(x28208_28220))
;

x28208_28220.isMounted = ((function (x28208_28220){
return (function (){
var this__25716__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__25716__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x28208_28220))
;

x28208_28220.componentWillMount = ((function (x28208_28220){
return (function (){
var this__25716__auto__ = this;
var indexer__25726__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__25716__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__25726__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__25726__auto__,this__25716__auto__);
}
});})(x28208_28220))
;

x28208_28220.initLocalState = ((function (x28208_28220){
return (function (){
var this$ = this;
var ret__25694__auto__ = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"collapse","collapse",-1218136136),true,new cljs.core.Keyword(null,"slider","slider",-472668865),(8),new cljs.core.Keyword(null,"text","text",-1790561697),"This looks like text but can be edited",new cljs.core.Keyword(null,"radio","radio",1323726374),"slaw"], null);
var obj28212 = {"omcljs$state":ret__25694__auto__};
return obj28212;
});})(x28208_28220))
;

x28208_28220.render = ((function (x28208_28220){
return (function (){
var this__25715__auto__ = this;
var this$ = this__25715__auto__;
var _STAR_reconciler_STAR_28213 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_28214 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_28215 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_28216 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_28217 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__25715__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__25715__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__25715__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__25715__auto__);

om.next._STAR_parent_STAR_ = this__25715__auto__;

try{var toggle = ((function (_STAR_reconciler_STAR_28213,_STAR_depth_STAR_28214,_STAR_shared_STAR_28215,_STAR_instrument_STAR_28216,_STAR_parent_STAR_28217,this$,this__25715__auto__,x28208_28220){
return (function (key){
return ((function (_STAR_reconciler_STAR_28213,_STAR_depth_STAR_28214,_STAR_shared_STAR_28215,_STAR_instrument_STAR_28216,_STAR_parent_STAR_28217,this$,this__25715__auto__,x28208_28220){
return (function (){
return om.next.update_state_BANG_.call(null,this$,cljs.core.update,key,cljs.core.not);
});
;})(_STAR_reconciler_STAR_28213,_STAR_depth_STAR_28214,_STAR_shared_STAR_28215,_STAR_instrument_STAR_28216,_STAR_parent_STAR_28217,this$,this__25715__auto__,x28208_28220))
});})(_STAR_reconciler_STAR_28213,_STAR_depth_STAR_28214,_STAR_shared_STAR_28215,_STAR_instrument_STAR_28216,_STAR_parent_STAR_28217,this$,this__25715__auto__,x28208_28220))
;
var enabled_QMARK_ = ((function (toggle,_STAR_reconciler_STAR_28213,_STAR_depth_STAR_28214,_STAR_shared_STAR_28215,_STAR_instrument_STAR_28216,_STAR_parent_STAR_28217,this$,this__25715__auto__,x28208_28220){
return (function (key){
return om.next.get_state.call(null,this$).call(null,key);
});})(toggle,_STAR_reconciler_STAR_28213,_STAR_depth_STAR_28214,_STAR_shared_STAR_28215,_STAR_instrument_STAR_28216,_STAR_parent_STAR_28217,this$,this__25715__auto__,x28208_28220))
;
var section = ((function (toggle,enabled_QMARK_,_STAR_reconciler_STAR_28213,_STAR_depth_STAR_28214,_STAR_shared_STAR_28215,_STAR_instrument_STAR_28216,_STAR_parent_STAR_28217,this$,this__25715__auto__,x28208_28220){
return (function() { 
var G__28224__delegate = function (args){
return cljs.core.apply.call(null,React.DOM.div,({"style": ({"paddingTop": "1em"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,om_tools.dom.div,args),React.DOM.div(({"style": ({"marginTop": "1em", "height": "1em", "backgroundColor": "silver"})}))],null))));
};
var G__28224 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28225__i = 0, G__28225__a = new Array(arguments.length -  0);
while (G__28225__i < G__28225__a.length) {G__28225__a[G__28225__i] = arguments[G__28225__i + 0]; ++G__28225__i;}
  args = new cljs.core.IndexedSeq(G__28225__a,0);
} 
return G__28224__delegate.call(this,args);};
G__28224.cljs$lang$maxFixedArity = 0;
G__28224.cljs$lang$applyTo = (function (arglist__28226){
var args = cljs.core.seq(arglist__28226);
return G__28224__delegate(args);
});
G__28224.cljs$core$IFn$_invoke$arity$variadic = G__28224__delegate;
return G__28224;
})()
;})(toggle,enabled_QMARK_,_STAR_reconciler_STAR_28213,_STAR_depth_STAR_28214,_STAR_shared_STAR_28215,_STAR_instrument_STAR_28216,_STAR_parent_STAR_28217,this$,this__25715__auto__,x28208_28220))
;
return cljs.core.apply.call(null,React.DOM.div,({"className": om_tools.dom.format_opts.call(null,(cljs.core.truth_(enabled_QMARK_.call(null,new cljs.core.Keyword(null,"dark","dark",1818973999)))?"pt-dark":null))}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.nav,({"className": "pt-navbar"}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,({"className": "pt-navbar-group pt-align-left"}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.div(({"className": "pt-navbar-heading"}),"A page with all Blueprintjs Components, rendered in Om")],null)))),cljs.core.apply.call(null,React.DOM.div,({"className": "pt-navbar-group pt-align-right"}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.a,({"href": "https://github.com/drcode/blueprint-cljs"}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[blueprint_cljs.core.button.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"icon-name","icon-name",152456315),"home",new cljs.core.Keyword(null,"class","class",-2030961996),"pt-minimal",new cljs.core.Keyword(null,"intent","intent",-390846953),blueprint_cljs.core.intents.call(null,new cljs.core.Keyword(null,"primary","primary",817773892))], null),"Github")],null)))),cljs.core.apply.call(null,React.DOM.a,({"href": "https://github.com/drcode/blueprint-cljs/blob/master/examples/kitchensink/src/kitchensink/core.cljs"}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[blueprint_cljs.core.button.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"icon-name","icon-name",152456315),"pt-icon-document-open",new cljs.core.Keyword(null,"class","class",-2030961996),"pt-minimal"], null),"Code for this page")],null))))],null))))],null)))),cljs.core.apply.call(null,React.DOM.div,({"style": ({"display": "flex", "justifyContent": "center"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,({"style": ({"width": "800px", "backgroundColor": om_tools.dom.format_opts.call(null,(cljs.core.truth_(enabled_QMARK_.call(null,new cljs.core.Keyword(null,"dark","dark",1818973999)))?"#333844":"#EEE")), "padding": "3em"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,28,(5),cljs.core.PersistentVector.EMPTY_NODE,[section.call(null,"Click on things for animations & stuff. ",React.DOM.i(null,"This demo page is intended for desktop browsers only.")),section.call(null,blueprint_cljs.core.switch$.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),toggle.call(null,new cljs.core.Keyword(null,"dark","dark",1818973999))], null),"Turn off the lights!")),section.call(null,blueprint_cljs.core.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),toggle.call(null,new cljs.core.Keyword(null,"alert","alert",-571950580))], null),"Open Alert")),blueprint_cljs.core.alert.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"is-open","is-open",1660707069),enabled_QMARK_.call(null,new cljs.core.Keyword(null,"alert","alert",-571950580)),new cljs.core.Keyword(null,"cancel-button-text","cancel-button-text",-33362523),"Get me outa here",new cljs.core.Keyword(null,"on-cancel","on-cancel",-2071892932),toggle.call(null,new cljs.core.Keyword(null,"alert","alert",-571950580)),new cljs.core.Keyword(null,"confirm-button-text","confirm-button-text",122485941),"I like this!",new cljs.core.Keyword(null,"on-confirm","on-confirm",1527003038),toggle.call(null,new cljs.core.Keyword(null,"alert","alert",-571950580))], null),"This is an alert with text."),section.call(null,blueprint_cljs.core.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (toggle,enabled_QMARK_,section,_STAR_reconciler_STAR_28213,_STAR_depth_STAR_28214,_STAR_shared_STAR_28215,_STAR_instrument_STAR_28216,_STAR_parent_STAR_28217,this$,this__25715__auto__,x28208_28220){
return (function (){
return kitchensink.core.my_toaster.show(({"intent": new cljs.core.Keyword(null,"danger","danger",-624338030).cljs$core$IFn$_invoke$arity$1(blueprint_cljs.core.intents), "message": "This is a very dangerous button. Do not press it again."}));
});})(toggle,enabled_QMARK_,section,_STAR_reconciler_STAR_28213,_STAR_depth_STAR_28214,_STAR_shared_STAR_28215,_STAR_instrument_STAR_28216,_STAR_parent_STAR_28217,this$,this__25715__auto__,x28208_28220))
], null),"Toast (Press multiple times)")),section.call(null,blueprint_cljs.core.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),toggle.call(null,new cljs.core.Keyword(null,"dialog","dialog",1415150135))], null),"Show Dialog")),section.call(null,blueprint_cljs.core.tabs.call(null,blueprint_cljs.core.tab_list.call(null,blueprint_cljs.core.tab.call(null,"A Tab"),blueprint_cljs.core.tab.call(null,"Another Tab"),blueprint_cljs.core.tab.call(null,"Last Tab")),blueprint_cljs.core.tab_panel.call(null,"Some stuff."),blueprint_cljs.core.tab_panel.call(null,"Some more stuff."),blueprint_cljs.core.tab_panel.call(null,"The last stuff."))),blueprint_cljs.core.dialog.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"icon-name","icon-name",152456315),"inbox",new cljs.core.Keyword(null,"is-open","is-open",1660707069),enabled_QMARK_.call(null,new cljs.core.Keyword(null,"dialog","dialog",1415150135)),new cljs.core.Keyword(null,"on-close","on-close",-761178394),toggle.call(null,new cljs.core.Keyword(null,"dialog","dialog",1415150135)),new cljs.core.Keyword(null,"title","title",636505583),"Awesome Dialog"], null),cljs.core.apply.call(null,React.DOM.div,({"className": "pt-dialog-body"}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.p(null,"Here is some random text in this awesome dialog"),om_tools.dom.element.call(null,React.DOM.p,om.dom.input.call(null,({"className": "pt-input", "placeholder": "foo"})),cljs.core.PersistentVector.EMPTY)],null)))),cljs.core.apply.call(null,React.DOM.div,({"className": "pt-dialog-footer"}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,({"className": "pt-dialog-footer-actions"}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[blueprint_cljs.core.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"intent","intent",-390846953),blueprint_cljs.core.intents.call(null,new cljs.core.Keyword(null,"primary","primary",817773892))], null),"Submit"),blueprint_cljs.core.button.call(null,"Nothing")],null))))],null))))),section.call(null,blueprint_cljs.core.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (toggle,enabled_QMARK_,section,_STAR_reconciler_STAR_28213,_STAR_depth_STAR_28214,_STAR_shared_STAR_28215,_STAR_instrument_STAR_28216,_STAR_parent_STAR_28217,this$,this__25715__auto__,x28208_28220){
return (function (){
return blueprint_cljs.core.context_menu.show(blueprint_cljs.core.menu.call(null,blueprint_cljs.core.menu_item.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"One Item"], null)),blueprint_cljs.core.menu_item.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Another Item"], null))),({"left": (100), "top": (300)}));
});})(toggle,enabled_QMARK_,section,_STAR_reconciler_STAR_28213,_STAR_depth_STAR_28214,_STAR_shared_STAR_28215,_STAR_instrument_STAR_28216,_STAR_parent_STAR_28217,this$,this__25715__auto__,x28208_28220))
], null),"Show context menu")),section.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"pt-breadcrumbs"], null),om_tools.dom.element.call(null,React.DOM.li,blueprint_cljs.core.breadcrumb.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Crumb1"], null)),cljs.core.PersistentVector.EMPTY),om_tools.dom.element.call(null,React.DOM.li,blueprint_cljs.core.breadcrumb.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Crumb2"], null)),cljs.core.PersistentVector.EMPTY),om_tools.dom.element.call(null,React.DOM.li,blueprint_cljs.core.breadcrumb.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Crumb3"], null)),cljs.core.PersistentVector.EMPTY)),section.call(null,om_tools.dom.element.call(null,React.DOM.p,blueprint_cljs.core.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"intent","intent",-390846953),blueprint_cljs.core.intents.call(null,new cljs.core.Keyword(null,"primary","primary",817773892))], null),"I'm Primary"),cljs.core.PersistentVector.EMPTY),om_tools.dom.element.call(null,React.DOM.p,blueprint_cljs.core.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"intent","intent",-390846953),blueprint_cljs.core.intents.call(null,new cljs.core.Keyword(null,"danger","danger",-624338030))], null),"Danger!"),cljs.core.PersistentVector.EMPTY),om_tools.dom.element.call(null,React.DOM.p,blueprint_cljs.core.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"icon-name","icon-name",152456315),"refresh"], null),"I've got an icon"),cljs.core.PersistentVector.EMPTY)),section.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"pt-button-group"], null),blueprint_cljs.core.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"intent","intent",-390846953),blueprint_cljs.core.intents.call(null,new cljs.core.Keyword(null,"success","success",1890645906))], null),"Buttons"),blueprint_cljs.core.button.call(null,"in a"),blueprint_cljs.core.button.call(null,"group")),section.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"pt-callout pt-intent-danger"], null),React.DOM.h5(null,"Warning"),"You are reading the text in a callout."),section.call(null,React.DOM.div(({"className": "pt-card pt-elevation-3"}),"Look at me! I'm floating!")),section.call(null,blueprint_cljs.core.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),toggle.call(null,new cljs.core.Keyword(null,"collapse","collapse",-1218136136))], null),"Collapse"),blueprint_cljs.core.collapse.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"is-open","is-open",1660707069),enabled_QMARK_.call(null,new cljs.core.Keyword(null,"collapse","collapse",-1218136136))], null),"This is the text that will collapse")),section.call(null,blueprint_cljs.core.slider.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"min","min",444991522),(1),new cljs.core.Keyword(null,"max","max",61366548),(10),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"slider","slider",-472668865).cljs$core$IFn$_invoke$arity$1(om.next.get_state.call(null,this$)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (toggle,enabled_QMARK_,section,_STAR_reconciler_STAR_28213,_STAR_depth_STAR_28214,_STAR_shared_STAR_28215,_STAR_instrument_STAR_28216,_STAR_parent_STAR_28217,this$,this__25715__auto__,x28208_28220){
return (function (value){
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"slider","slider",-472668865),value);
});})(toggle,enabled_QMARK_,section,_STAR_reconciler_STAR_28213,_STAR_depth_STAR_28214,_STAR_shared_STAR_28215,_STAR_instrument_STAR_28216,_STAR_parent_STAR_28217,this$,this__25715__auto__,x28208_28220))
], null)),blueprint_cljs.core.collapsible_list.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"pt-breadcrumbs",new cljs.core.Keyword(null,"visible-item-count","visible-item-count",1159233092),new cljs.core.Keyword(null,"slider","slider",-472668865).cljs$core$IFn$_invoke$arity$1(om.next.get_state.call(null,this$)),new cljs.core.Keyword(null,"dropdown-target","dropdown-target",-1369792600),React.DOM.span(({"className": "pt-breadcrumbs-collapsed"})),new cljs.core.Keyword(null,"render-visible-item","render-visible-item",-1136751532),((function (toggle,enabled_QMARK_,section,_STAR_reconciler_STAR_28213,_STAR_depth_STAR_28214,_STAR_shared_STAR_28215,_STAR_instrument_STAR_28216,_STAR_parent_STAR_28217,this$,this__25715__auto__,x28208_28220){
return (function (props){
return cljs.core.apply.call(null,React.DOM.span,({"className": "pt-breadcrumb"}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[props.text],null))));
});})(toggle,enabled_QMARK_,section,_STAR_reconciler_STAR_28213,_STAR_depth_STAR_28214,_STAR_shared_STAR_28215,_STAR_instrument_STAR_28216,_STAR_parent_STAR_28217,this$,this__25715__auto__,x28208_28220))
], null),blueprint_cljs.core.menu_item.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"These"], null)),blueprint_cljs.core.menu_item.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Words"], null)),blueprint_cljs.core.menu_item.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Can"], null)),blueprint_cljs.core.menu_item.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Be"], null)),blueprint_cljs.core.menu_item.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Removed"], null)),blueprint_cljs.core.menu_item.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"With"], null)),blueprint_cljs.core.menu_item.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"The"], null)),blueprint_cljs.core.menu_item.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Slider"], null)))),section.call(null,React.DOM.div(null,"This is just text"),om_tools.dom.element.call(null,React.DOM.div,blueprint_cljs.core.editable_text.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (toggle,enabled_QMARK_,section,_STAR_reconciler_STAR_28213,_STAR_depth_STAR_28214,_STAR_shared_STAR_28215,_STAR_instrument_STAR_28216,_STAR_parent_STAR_28217,this$,this__25715__auto__,x28208_28220){
return (function (s){
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"text","text",-1790561697),s);
});})(toggle,enabled_QMARK_,section,_STAR_reconciler_STAR_28213,_STAR_depth_STAR_28214,_STAR_shared_STAR_28215,_STAR_instrument_STAR_28216,_STAR_parent_STAR_28217,this$,this__25715__auto__,x28208_28220))
,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(om.next.get_state.call(null,this$))], null)),cljs.core.PersistentVector.EMPTY),React.DOM.div(null,"This is just text")),section.call(null,blueprint_cljs.core.checkbox.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"checked","checked",-50955819),enabled_QMARK_.call(null,new cljs.core.Keyword(null,"checkbox","checkbox",1612615655)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),toggle.call(null,new cljs.core.Keyword(null,"checkbox","checkbox",1612615655))], null),"Checkbox")),section.call(null,blueprint_cljs.core.radio_group.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (toggle,enabled_QMARK_,section,_STAR_reconciler_STAR_28213,_STAR_depth_STAR_28214,_STAR_shared_STAR_28215,_STAR_instrument_STAR_28216,_STAR_parent_STAR_28217,this$,this__25715__auto__,x28208_28220){
return (function (event){
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"radio","radio",1323726374),event.target.value);
});})(toggle,enabled_QMARK_,section,_STAR_reconciler_STAR_28213,_STAR_depth_STAR_28214,_STAR_shared_STAR_28215,_STAR_instrument_STAR_28216,_STAR_parent_STAR_28217,this$,this__25715__auto__,x28208_28220))
,new cljs.core.Keyword(null,"selected-value","selected-value",-81904500),new cljs.core.Keyword(null,"radio","radio",1323726374).cljs$core$IFn$_invoke$arity$1(om.next.get_state.call(null,this$))], null),blueprint_cljs.core.radio.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Cole Slaw",new cljs.core.Keyword(null,"value","value",305978217),"slaw"], null)),blueprint_cljs.core.radio.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Fries",new cljs.core.Keyword(null,"value","value",305978217),"fries"], null)),blueprint_cljs.core.radio.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Mango Chips",new cljs.core.Keyword(null,"value","value",305978217),"chips"], null)))),section.call(null,blueprint_cljs.core.input_group.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"left-icon-name","left-icon-name",1003219192),"refresh",new cljs.core.Keyword(null,"value","value",305978217),"Text input with icons & stuff",new cljs.core.Keyword(null,"right-element","right-element",-375920256),blueprint_cljs.core.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"intent","intent",-390846953),blueprint_cljs.core.intents.call(null,new cljs.core.Keyword(null,"warning","warning",-1685650671))], null),"Do It!")], null))),section.call(null,blueprint_cljs.core.menu.call(null,blueprint_cljs.core.menu_item.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"icon-name","icon-name",152456315),"new-object",new cljs.core.Keyword(null,"text","text",-1790561697),"Here's"], null)),blueprint_cljs.core.menu_item.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"icon-name","icon-name",152456315),"new-text-box",new cljs.core.Keyword(null,"text","text",-1790561697),"A haiku that's"], null)),blueprint_cljs.core.menu_item.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"icon-name","icon-name",152456315),"new-link",new cljs.core.Keyword(null,"text","text",-1790561697),"Written inside"], null)),blueprint_cljs.core.menu_divider.call(null),blueprint_cljs.core.menu_item.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"icon-name","icon-name",152456315),"cog",new cljs.core.Keyword(null,"text","text",-1790561697),"A menu."], null)))),section.call(null,blueprint_cljs.core.non_ideal_state.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Please Stop It.",new cljs.core.Keyword(null,"description","description",-1428560544),"This widget cannot be burglebated more than five times with a yip yap.",new cljs.core.Keyword(null,"visual","visual",942787224),"pt-icon-thumbs-down"], null))),section.call(null,blueprint_cljs.core.popover.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"content","content",15833224),om_tools.dom.element.call(null,React.DOM.div,React.DOM.p(null,"Random stuff in here"),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[blueprint_cljs.core.button.call(null,"A Button")],null))),new cljs.core.Keyword(null,"popover-class-name","popover-class-name",-1907703608),"pt-popover-content-sizing"], null),blueprint_cljs.core.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),toggle.call(null,new cljs.core.Keyword(null,"popover","popover",-1809582136))], null),"Popover"))),section.call(null,om_tools.dom.element.call(null,React.DOM.p,blueprint_cljs.core.progress_bar.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),0.8], null)),cljs.core.PersistentVector.EMPTY),React.DOM.p(null),blueprint_cljs.core.spinner.call(null)),section.call(null,cljs.core.apply.call(null,React.DOM.table,({"className": "pt-table pt-striped"}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.thead,React.DOM.th(null,"Col1"),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.th(null,"Col2"),React.DOM.th(null,"Col3")],null))),om_tools.dom.element.call(null,React.DOM.tbody,om_tools.dom.element.call(null,React.DOM.tr,React.DOM.td(null,"Stuff"),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.td(null,"In"),React.DOM.td(null,"A Table")],null))),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.tr,React.DOM.td(null,"Stuff"),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.td(null,"In"),React.DOM.td(null,"A Table")],null))),om_tools.dom.element.call(null,React.DOM.tr,React.DOM.td(null,"Stuff"),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.td(null,"In"),React.DOM.td(null,"A Table")],null)))],null)))],null))))),section.call(null,om_tools.dom.element.call(null,React.DOM.p,blueprint_cljs.core.tag.call(null,"Just"),cljs.core.PersistentVector.EMPTY),om_tools.dom.element.call(null,React.DOM.p,blueprint_cljs.core.tag.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"intent","intent",-390846953),blueprint_cljs.core.intents.call(null,new cljs.core.Keyword(null,"primary","primary",817773892))], null),"Some"),cljs.core.PersistentVector.EMPTY),om_tools.dom.element.call(null,React.DOM.p,blueprint_cljs.core.tag.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-remove","on-remove",-268656163),((function (toggle,enabled_QMARK_,section,_STAR_reconciler_STAR_28213,_STAR_depth_STAR_28214,_STAR_shared_STAR_28215,_STAR_instrument_STAR_28216,_STAR_parent_STAR_28217,this$,this__25715__auto__,x28208_28220){
return (function (){
return null;
});})(toggle,enabled_QMARK_,section,_STAR_reconciler_STAR_28213,_STAR_depth_STAR_28214,_STAR_shared_STAR_28215,_STAR_instrument_STAR_28216,_STAR_parent_STAR_28217,this$,this__25715__auto__,x28208_28220))
], null),"Tags"),cljs.core.PersistentVector.EMPTY)),section.call(null,blueprint_cljs.core.tooltip.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",15833224),"This is very important text"], null),"Hover over me.")),section.call(null,blueprint_cljs.core.tree.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"contents","contents",-1567174023),blueprint_cljs.core.clj__GT_tree_nodes.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),"Foo"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Bar",new cljs.core.Keyword(null,"is-expanded","is-expanded",107086836),true,new cljs.core.Keyword(null,"child-nodes","child-nodes",-776571394),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),"Qux"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),"Quux"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),"Quuux"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),"Baz"], null)], null))], null)))],null))))],null))))],null))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_28217;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_28216;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_28215;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_28214;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_28213;
}});})(x28208_28220))
;


kitchensink.core.Root.prototype.constructor = kitchensink.core.Root;

kitchensink.core.Root.prototype.constructor.displayName = "kitchensink.core/Root";

kitchensink.core.Root.prototype.om$isComponent = true;

var x28218_28227 = kitchensink.core.Root;


var x28219_28228 = kitchensink.core.Root.prototype;


kitchensink.core.Root.cljs$lang$type = true;

kitchensink.core.Root.cljs$lang$ctorStr = "kitchensink.core/Root";

kitchensink.core.Root.cljs$lang$ctorPrWriter = (function (this__25865__auto__,writer__25866__auto__,opt__25867__auto__){
return cljs.core._write.call(null,writer__25866__auto__,"kitchensink.core/Root");
});
kitchensink.core.root = om.next.factory.call(null,kitchensink.core.Root);
ReactDOM.render(kitchensink.core.root.call(null),goog.dom.getElement("app"));

//# sourceMappingURL=core.js.map