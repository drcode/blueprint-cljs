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
var G__25330__delegate = function (args){
var vec__25327 = blueprint_cljs.core.extract_opts.call(null,args);
var props = cljs.core.nth.call(null,vec__25327,(0),null);
var children = cljs.core.nth.call(null,vec__25327,(1),null);
return cljs.core.apply.call(null,factory,om_tools.dom.format_opts.call(null,props),children);
};
var G__25330 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25331__i = 0, G__25331__a = new Array(arguments.length -  0);
while (G__25331__i < G__25331__a.length) {G__25331__a[G__25331__i] = arguments[G__25331__i + 0]; ++G__25331__i;}
  args = new cljs.core.IndexedSeq(G__25331__a,0);
} 
return G__25330__delegate.call(this,args);};
G__25330.cljs$lang$maxFixedArity = 0;
G__25330.cljs$lang$applyTo = (function (arglist__25332){
var args = cljs.core.seq(arglist__25332);
return G__25330__delegate(args);
});
G__25330.cljs$core$IFn$_invoke$arity$variadic = G__25330__delegate;
return G__25330;
})()
;
});
blueprint_cljs.core.declare_component = (function blueprint_cljs$core$declare_component(component){
return (function() { 
var G__25339__delegate = function (args){
var vec__25336 = blueprint_cljs.core.extract_opts.call(null,args);
var props = cljs.core.nth.call(null,vec__25336,(0),null);
var children = cljs.core.nth.call(null,vec__25336,(1),null);
return cljs.core.apply.call(null,React.createElement,component,om_tools.dom.format_opts.call(null,props),children);
};
var G__25339 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25340__i = 0, G__25340__a = new Array(arguments.length -  0);
while (G__25340__i < G__25340__a.length) {G__25340__a[G__25340__i] = arguments[G__25340__i + 0]; ++G__25340__i;}
  args = new cljs.core.IndexedSeq(G__25340__a,0);
} 
return G__25339__delegate.call(this,args);};
G__25339.cljs$lang$maxFixedArity = 0;
G__25339.cljs$lang$applyTo = (function (arglist__25341){
var args = cljs.core.seq(arglist__25341);
return G__25339__delegate(args);
});
G__25339.cljs$core$IFn$_invoke$arity$variadic = G__25339__delegate;
return G__25339;
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
blueprint_cljs.core.breadcrumb = blueprint_cljs.core.declare_component.call(null,Blueprint.Breadcrumb);
blueprint_cljs.core.dialog = blueprint_cljs.core.declare_factory.call(null,Blueprint.DialogFactory);
blueprint_cljs.core.overlay = blueprint_cljs.core.declare_factory.call(null,Blueprint.OverlayFactory);
blueprint_cljs.core.input_group = blueprint_cljs.core.declare_factory.call(null,Blueprint.InputGroupFactory);
blueprint_cljs.core.tag = blueprint_cljs.core.declare_factory.call(null,Blueprint.TagFactory);
blueprint_cljs.core.slider = blueprint_cljs.core.declare_factory.call(null,Blueprint.SliderFactory);
blueprint_cljs.core.switch$ = blueprint_cljs.core.declare_factory.call(null,Blueprint.SwitchFactory);
blueprint_cljs.core.collapsible_list = blueprint_cljs.core.declare_factory.call(null,Blueprint.CollapsibleListFactory);
blueprint_cljs.core.menu_item = blueprint_cljs.core.declare_factory.call(null,Blueprint.MenuItemFactory);
blueprint_cljs.core.menu_divider = blueprint_cljs.core.declare_factory.call(null,Blueprint.MenuDividerFactory);
blueprint_cljs.core.menu = blueprint_cljs.core.declare_factory.call(null,Blueprint.MenuFactory);
blueprint_cljs.core.checkbox = blueprint_cljs.core.declare_factory.call(null,Blueprint.CheckboxFactory);
blueprint_cljs.core.radio = blueprint_cljs.core.declare_factory.call(null,Blueprint.RadioFactory);
blueprint_cljs.core.radio_group = blueprint_cljs.core.declare_component.call(null,Blueprint.RadioGroup);
blueprint_cljs.core.non_ideal_state = blueprint_cljs.core.declare_factory.call(null,Blueprint.NonIdealStateFactory);
blueprint_cljs.core.popover = blueprint_cljs.core.declare_factory.call(null,Blueprint.PopoverFactory);
blueprint_cljs.core.tooltip = blueprint_cljs.core.declare_factory.call(null,Blueprint.TooltipFactory);
blueprint_cljs.core.progress_bar = blueprint_cljs.core.declare_factory.call(null,Blueprint.ProgressBarFactory);
blueprint_cljs.core.tree = blueprint_cljs.core.declare_factory.call(null,Blueprint.TreeFactory);
blueprint_cljs.core.clj__GT_tree_nodes = (function blueprint_cljs$core$clj__GT_tree_nodes(nodes){
var iter__20951__auto__ = (function blueprint_cljs$core$clj__GT_tree_nodes_$_iter__25346(s__25347){
return (new cljs.core.LazySeq(null,(function (){
var s__25347__$1 = s__25347;
while(true){
var temp__6728__auto__ = cljs.core.seq.call(null,s__25347__$1);
if(temp__6728__auto__){
var s__25347__$2 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25347__$2)){
var c__20949__auto__ = cljs.core.chunk_first.call(null,s__25347__$2);
var size__20950__auto__ = cljs.core.count.call(null,c__20949__auto__);
var b__25349 = cljs.core.chunk_buffer.call(null,size__20950__auto__);
if((function (){var i__25348 = (0);
while(true){
if((i__25348 < size__20950__auto__)){
var node = cljs.core._nth.call(null,c__20949__auto__,i__25348);
cljs.core.chunk_append.call(null,b__25349,om_tools.dom.format_opts.call(null,cljs.core.update.call(null,node,new cljs.core.Keyword(null,"child-nodes","child-nodes",-776571394),blueprint_cljs$core$clj__GT_tree_nodes)));

var G__25350 = (i__25348 + (1));
i__25348 = G__25350;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25349),blueprint_cljs$core$clj__GT_tree_nodes_$_iter__25346.call(null,cljs.core.chunk_rest.call(null,s__25347__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25349),null);
}
} else {
var node = cljs.core.first.call(null,s__25347__$2);
return cljs.core.cons.call(null,om_tools.dom.format_opts.call(null,cljs.core.update.call(null,node,new cljs.core.Keyword(null,"child-nodes","child-nodes",-776571394),blueprint_cljs$core$clj__GT_tree_nodes)),blueprint_cljs$core$clj__GT_tree_nodes_$_iter__25346.call(null,cljs.core.rest.call(null,s__25347__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__20951__auto__.call(null,nodes);
});
blueprint_cljs.core.toaster = (function blueprint_cljs$core$toaster(){
return Blueprint.Toaster.create();
});
var i_25351 = Blueprint.Intent;
blueprint_cljs.core.intents = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"primary","primary",817773892),i_25351.PRIMARY,new cljs.core.Keyword(null,"success","success",1890645906),i_25351.SUCCESS,new cljs.core.Keyword(null,"warning","warning",-1685650671),i_25351.WARNING,new cljs.core.Keyword(null,"danger","danger",-624338030),i_25351.DANGER], null);
blueprint_cljs.core.context_menu = Blueprint.ContextMenu;

//# sourceMappingURL=core.js.map