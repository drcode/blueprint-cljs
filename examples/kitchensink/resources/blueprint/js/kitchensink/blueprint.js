// Compiled by ClojureScript 1.9.229 {}
goog.provide('kitchensink.blueprint');
goog.require('cljs.core');
goog.require('om_tools.dom');
kitchensink.blueprint.extract_opts = (function kitchensink$blueprint$extract_opts(args){
if((cljs.core.seq.call(null,args)) && (cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args),cljs.core.rest.call(null,args)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args], null);
}
});
kitchensink.blueprint.declare_factory = (function kitchensink$blueprint$declare_factory(factory){
return (function() { 
var G__50926__delegate = function (args){
var vec__50923 = kitchensink.blueprint.extract_opts.call(null,args);
var props = cljs.core.nth.call(null,vec__50923,(0),null);
var children = cljs.core.nth.call(null,vec__50923,(1),null);
return cljs.core.apply.call(null,factory,om_tools.dom.format_opts.call(null,props),children);
};
var G__50926 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50927__i = 0, G__50927__a = new Array(arguments.length -  0);
while (G__50927__i < G__50927__a.length) {G__50927__a[G__50927__i] = arguments[G__50927__i + 0]; ++G__50927__i;}
  args = new cljs.core.IndexedSeq(G__50927__a,0);
} 
return G__50926__delegate.call(this,args);};
G__50926.cljs$lang$maxFixedArity = 0;
G__50926.cljs$lang$applyTo = (function (arglist__50928){
var args = cljs.core.seq(arglist__50928);
return G__50926__delegate(args);
});
G__50926.cljs$core$IFn$_invoke$arity$variadic = G__50926__delegate;
return G__50926;
})()
;
});
kitchensink.blueprint.declare_component = (function kitchensink$blueprint$declare_component(component){
return (function() { 
var G__50935__delegate = function (args){
var vec__50932 = kitchensink.blueprint.extract_opts.call(null,args);
var props = cljs.core.nth.call(null,vec__50932,(0),null);
var children = cljs.core.nth.call(null,vec__50932,(1),null);
return cljs.core.apply.call(null,React.createElement,component,om_tools.dom.format_opts.call(null,props),children);
};
var G__50935 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50936__i = 0, G__50936__a = new Array(arguments.length -  0);
while (G__50936__i < G__50936__a.length) {G__50936__a[G__50936__i] = arguments[G__50936__i + 0]; ++G__50936__i;}
  args = new cljs.core.IndexedSeq(G__50936__a,0);
} 
return G__50935__delegate.call(this,args);};
G__50935.cljs$lang$maxFixedArity = 0;
G__50935.cljs$lang$applyTo = (function (arglist__50937){
var args = cljs.core.seq(arglist__50937);
return G__50935__delegate(args);
});
G__50935.cljs$core$IFn$_invoke$arity$variadic = G__50935__delegate;
return G__50935;
})()
;
});
loadBlueprint();
kitchensink.blueprint.button = kitchensink.blueprint.declare_factory.call(null,Blueprint.ButtonFactory);
kitchensink.blueprint.spinner = kitchensink.blueprint.declare_factory.call(null,Blueprint.SpinnerFactory);
kitchensink.blueprint.editable_text = kitchensink.blueprint.declare_factory.call(null,Blueprint.EditableTextFactory);
kitchensink.blueprint.collapse = kitchensink.blueprint.declare_component.call(null,Blueprint.Collapse);
kitchensink.blueprint.tabs = kitchensink.blueprint.declare_factory.call(null,Blueprint.TabsFactory);
kitchensink.blueprint.tab_list = kitchensink.blueprint.declare_factory.call(null,Blueprint.TabListFactory);
kitchensink.blueprint.tab = kitchensink.blueprint.declare_factory.call(null,Blueprint.TabFactory);
kitchensink.blueprint.tab_panel = kitchensink.blueprint.declare_factory.call(null,Blueprint.TabPanelFactory);
kitchensink.blueprint.alert = kitchensink.blueprint.declare_component.call(null,Blueprint.Alert);
kitchensink.blueprint.breadcrumb = kitchensink.blueprint.declare_component.call(null,Blueprint.Breadcrumb);
kitchensink.blueprint.dialog = kitchensink.blueprint.declare_factory.call(null,Blueprint.DialogFactory);
kitchensink.blueprint.overlay = kitchensink.blueprint.declare_factory.call(null,Blueprint.OverlayFactory);
kitchensink.blueprint.input_group = kitchensink.blueprint.declare_factory.call(null,Blueprint.InputGroupFactory);
kitchensink.blueprint.tag = kitchensink.blueprint.declare_factory.call(null,Blueprint.TagFactory);
kitchensink.blueprint.slider = kitchensink.blueprint.declare_factory.call(null,Blueprint.SliderFactory);
kitchensink.blueprint.switch$ = kitchensink.blueprint.declare_factory.call(null,Blueprint.SwitchFactory);
kitchensink.blueprint.collapsible_list = kitchensink.blueprint.declare_factory.call(null,Blueprint.CollapsibleListFactory);
kitchensink.blueprint.menu_item = kitchensink.blueprint.declare_factory.call(null,Blueprint.MenuItemFactory);
kitchensink.blueprint.menu_divider = kitchensink.blueprint.declare_factory.call(null,Blueprint.MenuDividerFactory);
kitchensink.blueprint.menu = kitchensink.blueprint.declare_factory.call(null,Blueprint.MenuFactory);
kitchensink.blueprint.checkbox = kitchensink.blueprint.declare_factory.call(null,Blueprint.CheckboxFactory);
kitchensink.blueprint.radio = kitchensink.blueprint.declare_factory.call(null,Blueprint.RadioFactory);
kitchensink.blueprint.radio_group = kitchensink.blueprint.declare_component.call(null,Blueprint.RadioGroup);
kitchensink.blueprint.non_ideal_state = kitchensink.blueprint.declare_factory.call(null,Blueprint.NonIdealStateFactory);
kitchensink.blueprint.popover = kitchensink.blueprint.declare_factory.call(null,Blueprint.PopoverFactory);
kitchensink.blueprint.tooltip = kitchensink.blueprint.declare_factory.call(null,Blueprint.TooltipFactory);
kitchensink.blueprint.progress_bar = kitchensink.blueprint.declare_factory.call(null,Blueprint.ProgressBarFactory);
kitchensink.blueprint.tree = kitchensink.blueprint.declare_factory.call(null,Blueprint.TreeFactory);
kitchensink.blueprint.clj__GT_tree_nodes = (function kitchensink$blueprint$clj__GT_tree_nodes(nodes){
var iter__20951__auto__ = (function kitchensink$blueprint$clj__GT_tree_nodes_$_iter__50942(s__50943){
return (new cljs.core.LazySeq(null,(function (){
var s__50943__$1 = s__50943;
while(true){
var temp__6728__auto__ = cljs.core.seq.call(null,s__50943__$1);
if(temp__6728__auto__){
var s__50943__$2 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__50943__$2)){
var c__20949__auto__ = cljs.core.chunk_first.call(null,s__50943__$2);
var size__20950__auto__ = cljs.core.count.call(null,c__20949__auto__);
var b__50945 = cljs.core.chunk_buffer.call(null,size__20950__auto__);
if((function (){var i__50944 = (0);
while(true){
if((i__50944 < size__20950__auto__)){
var node = cljs.core._nth.call(null,c__20949__auto__,i__50944);
cljs.core.chunk_append.call(null,b__50945,om_tools.dom.format_opts.call(null,cljs.core.update.call(null,node,new cljs.core.Keyword(null,"child-nodes","child-nodes",-776571394),kitchensink$blueprint$clj__GT_tree_nodes)));

var G__50946 = (i__50944 + (1));
i__50944 = G__50946;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50945),kitchensink$blueprint$clj__GT_tree_nodes_$_iter__50942.call(null,cljs.core.chunk_rest.call(null,s__50943__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50945),null);
}
} else {
var node = cljs.core.first.call(null,s__50943__$2);
return cljs.core.cons.call(null,om_tools.dom.format_opts.call(null,cljs.core.update.call(null,node,new cljs.core.Keyword(null,"child-nodes","child-nodes",-776571394),kitchensink$blueprint$clj__GT_tree_nodes)),kitchensink$blueprint$clj__GT_tree_nodes_$_iter__50942.call(null,cljs.core.rest.call(null,s__50943__$2)));
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
kitchensink.blueprint.toaster = (function kitchensink$blueprint$toaster(){
return Blueprint.Toaster.create();
});
var i_50947 = Blueprint.Intent;
kitchensink.blueprint.intents = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"primary","primary",817773892),i_50947.PRIMARY,new cljs.core.Keyword(null,"success","success",1890645906),i_50947.SUCCESS,new cljs.core.Keyword(null,"warning","warning",-1685650671),i_50947.WARNING,new cljs.core.Keyword(null,"danger","danger",-624338030),i_50947.DANGER], null);
kitchensink.blueprint.context_menu = Blueprint.ContextMenu;

//# sourceMappingURL=blueprint.js.map