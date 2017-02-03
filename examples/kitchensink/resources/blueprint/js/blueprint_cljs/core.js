// Compiled by ClojureScript 1.9.229 {}
goog.provide('blueprint_cljs.core');
goog.require('cljs.core');
goog.require('om_tools.dom');
blueprint_cljs.core.extract_opts = (function blueprint_cljs$core$extract_opts(args){
if((cljs.core.seq.call(null,args)) && (cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args),cljs.core.rest.call(null,args)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args], null);
}
});
blueprint_cljs.core.declare_factory = (function blueprint_cljs$core$declare_factory(factory){
return (function() { 
var G__31845__delegate = function (args){
var vec__31842 = blueprint_cljs.core.extract_opts.call(null,args);
var props = cljs.core.nth.call(null,vec__31842,(0),null);
var children = cljs.core.nth.call(null,vec__31842,(1),null);
return cljs.core.apply.call(null,factory,om_tools.dom.format_opts.call(null,props),children);
};
var G__31845 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31846__i = 0, G__31846__a = new Array(arguments.length -  0);
while (G__31846__i < G__31846__a.length) {G__31846__a[G__31846__i] = arguments[G__31846__i + 0]; ++G__31846__i;}
  args = new cljs.core.IndexedSeq(G__31846__a,0);
} 
return G__31845__delegate.call(this,args);};
G__31845.cljs$lang$maxFixedArity = 0;
G__31845.cljs$lang$applyTo = (function (arglist__31847){
var args = cljs.core.seq(arglist__31847);
return G__31845__delegate(args);
});
G__31845.cljs$core$IFn$_invoke$arity$variadic = G__31845__delegate;
return G__31845;
})()
;
});
blueprint_cljs.core.declare_component = (function blueprint_cljs$core$declare_component(component){
return (function() { 
var G__31854__delegate = function (args){
var vec__31851 = blueprint_cljs.core.extract_opts.call(null,args);
var props = cljs.core.nth.call(null,vec__31851,(0),null);
var children = cljs.core.nth.call(null,vec__31851,(1),null);
return cljs.core.apply.call(null,React.createElement,component,om_tools.dom.format_opts.call(null,props),children);
};
var G__31854 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31855__i = 0, G__31855__a = new Array(arguments.length -  0);
while (G__31855__i < G__31855__a.length) {G__31855__a[G__31855__i] = arguments[G__31855__i + 0]; ++G__31855__i;}
  args = new cljs.core.IndexedSeq(G__31855__a,0);
} 
return G__31854__delegate.call(this,args);};
G__31854.cljs$lang$maxFixedArity = 0;
G__31854.cljs$lang$applyTo = (function (arglist__31856){
var args = cljs.core.seq(arglist__31856);
return G__31854__delegate(args);
});
G__31854.cljs$core$IFn$_invoke$arity$variadic = G__31854__delegate;
return G__31854;
})()
;
});
loadBlueprint();
blueprint_cljs.core.button = blueprint_cljs.core.declare_factory.call(null,Blueprint.ButtonFactory);
blueprint_cljs.core.spinner = blueprint_cljs.core.declare_factory.call(null,Blueprint.SpinnerFactory);
blueprint_cljs.core.editable_text = blueprint_cljs.core.declare_factory.call(null,Blueprint.EditableTextFactory);
blueprint_cljs.core.collapse = blueprint_cljs.core.declare_component.call(null,Blueprint.Collapse);
blueprint_cljs.core.tabs = blueprint_cljs.core.declare_factory.call(null,Blueprint.TabsFactory);
blueprint_cljs.core.tab_list = blueprint_cljs.core.declare_factory.call(null,Blueprint.TabListFactory);
blueprint_cljs.core.tab = blueprint_cljs.core.declare_factory.call(null,Blueprint.TabFactory);
blueprint_cljs.core.tab_panel = blueprint_cljs.core.declare_factory.call(null,Blueprint.TabPanelFactory);
blueprint_cljs.core.alert = blueprint_cljs.core.declare_component.call(null,Blueprint.Alert);
blueprint_cljs.core.dialog = blueprint_cljs.core.declare_factory.call(null,Blueprint.DialogFactory);
blueprint_cljs.core.overlay = blueprint_cljs.core.declare_factory.call(null,Blueprint.OverlayFactory);
blueprint_cljs.core.input_group = blueprint_cljs.core.declare_factory.call(null,Blueprint.InputGroupFactory);
blueprint_cljs.core.tag = blueprint_cljs.core.declare_factory.call(null,Blueprint.TagFactory);
blueprint_cljs.core.toaster = (function blueprint_cljs$core$toaster(){
return Blueprint.Toaster.create(({"position": Blueprint.Position.BOTTOM}));
});
var i_31857 = Blueprint.Intent;
blueprint_cljs.core.intents = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"primary","primary",817773892),i_31857.PRIMARY,new cljs.core.Keyword(null,"success","success",1890645906),i_31857.SUCCESS,new cljs.core.Keyword(null,"warning","warning",-1685650671),i_31857.WARNING,new cljs.core.Keyword(null,"danger","danger",-624338030),i_31857.DANGER], null);

//# sourceMappingURL=core.js.map