// Compiled by ClojureScript 1.9.229 {}
goog.provide('om.next.protocols');
goog.require('cljs.core');

/**
 * @interface
 */
om.next.protocols.IStore = function(){};


/**
 * @interface
 */
om.next.protocols.IPull = function(){};

om.next.protocols.pull = (function om$next$protocols$pull(pullable,selector,context){
if((!((pullable == null))) && (!((pullable.om$next$protocols$IPull$pull$arity$3 == null)))){
return pullable.om$next$protocols$IPull$pull$arity$3(pullable,selector,context);
} else {
var x__20802__auto__ = (((pullable == null))?null:pullable);
var m__20803__auto__ = (om.next.protocols.pull[goog.typeOf(x__20802__auto__)]);
if(!((m__20803__auto__ == null))){
return m__20803__auto__.call(null,pullable,selector,context);
} else {
var m__20803__auto____$1 = (om.next.protocols.pull["_"]);
if(!((m__20803__auto____$1 == null))){
return m__20803__auto____$1.call(null,pullable,selector,context);
} else {
throw cljs.core.missing_protocol.call(null,"IPull.pull",pullable);
}
}
}
});


/**
 * @interface
 */
om.next.protocols.IPush = function(){};

om.next.protocols.push = (function om$next$protocols$push(pushable,tx_data,context){
if((!((pushable == null))) && (!((pushable.om$next$protocols$IPush$push$arity$3 == null)))){
return pushable.om$next$protocols$IPush$push$arity$3(pushable,tx_data,context);
} else {
var x__20802__auto__ = (((pushable == null))?null:pushable);
var m__20803__auto__ = (om.next.protocols.push[goog.typeOf(x__20802__auto__)]);
if(!((m__20803__auto__ == null))){
return m__20803__auto__.call(null,pushable,tx_data,context);
} else {
var m__20803__auto____$1 = (om.next.protocols.push["_"]);
if(!((m__20803__auto____$1 == null))){
return m__20803__auto____$1.call(null,pushable,tx_data,context);
} else {
throw cljs.core.missing_protocol.call(null,"IPush.push",pushable);
}
}
}
});


/**
 * @interface
 */
om.next.protocols.IPullAsync = function(){};

om.next.protocols.pull_async = (function om$next$protocols$pull_async(pullable,selector,context,cb){
if((!((pullable == null))) && (!((pullable.om$next$protocols$IPullAsync$pull_async$arity$4 == null)))){
return pullable.om$next$protocols$IPullAsync$pull_async$arity$4(pullable,selector,context,cb);
} else {
var x__20802__auto__ = (((pullable == null))?null:pullable);
var m__20803__auto__ = (om.next.protocols.pull_async[goog.typeOf(x__20802__auto__)]);
if(!((m__20803__auto__ == null))){
return m__20803__auto__.call(null,pullable,selector,context,cb);
} else {
var m__20803__auto____$1 = (om.next.protocols.pull_async["_"]);
if(!((m__20803__auto____$1 == null))){
return m__20803__auto____$1.call(null,pullable,selector,context,cb);
} else {
throw cljs.core.missing_protocol.call(null,"IPullAsync.pull-async",pullable);
}
}
}
});


/**
 * @interface
 */
om.next.protocols.IPushAsync = function(){};

om.next.protocols.push_async = (function om$next$protocols$push_async(pushable,tx_data,context,cb){
if((!((pushable == null))) && (!((pushable.om$next$protocols$IPushAsync$push_async$arity$4 == null)))){
return pushable.om$next$protocols$IPushAsync$push_async$arity$4(pushable,tx_data,context,cb);
} else {
var x__20802__auto__ = (((pushable == null))?null:pushable);
var m__20803__auto__ = (om.next.protocols.push_async[goog.typeOf(x__20802__auto__)]);
if(!((m__20803__auto__ == null))){
return m__20803__auto__.call(null,pushable,tx_data,context,cb);
} else {
var m__20803__auto____$1 = (om.next.protocols.push_async["_"]);
if(!((m__20803__auto____$1 == null))){
return m__20803__auto____$1.call(null,pushable,tx_data,context,cb);
} else {
throw cljs.core.missing_protocol.call(null,"IPushAsync.push-async",pushable);
}
}
}
});


/**
 * @interface
 */
om.next.protocols.IComponentIndex = function(){};

om.next.protocols.index_component_BANG_ = (function om$next$protocols$index_component_BANG_(this$,component){
if((!((this$ == null))) && (!((this$.om$next$protocols$IComponentIndex$index_component_BANG_$arity$2 == null)))){
return this$.om$next$protocols$IComponentIndex$index_component_BANG_$arity$2(this$,component);
} else {
var x__20802__auto__ = (((this$ == null))?null:this$);
var m__20803__auto__ = (om.next.protocols.index_component_BANG_[goog.typeOf(x__20802__auto__)]);
if(!((m__20803__auto__ == null))){
return m__20803__auto__.call(null,this$,component);
} else {
var m__20803__auto____$1 = (om.next.protocols.index_component_BANG_["_"]);
if(!((m__20803__auto____$1 == null))){
return m__20803__auto____$1.call(null,this$,component);
} else {
throw cljs.core.missing_protocol.call(null,"IComponentIndex.index-component!",this$);
}
}
}
});

om.next.protocols.drop_component_BANG_ = (function om$next$protocols$drop_component_BANG_(this$,component){
if((!((this$ == null))) && (!((this$.om$next$protocols$IComponentIndex$drop_component_BANG_$arity$2 == null)))){
return this$.om$next$protocols$IComponentIndex$drop_component_BANG_$arity$2(this$,component);
} else {
var x__20802__auto__ = (((this$ == null))?null:this$);
var m__20803__auto__ = (om.next.protocols.drop_component_BANG_[goog.typeOf(x__20802__auto__)]);
if(!((m__20803__auto__ == null))){
return m__20803__auto__.call(null,this$,component);
} else {
var m__20803__auto____$1 = (om.next.protocols.drop_component_BANG_["_"]);
if(!((m__20803__auto____$1 == null))){
return m__20803__auto____$1.call(null,this$,component);
} else {
throw cljs.core.missing_protocol.call(null,"IComponentIndex.drop-component!",this$);
}
}
}
});


/**
 * @interface
 */
om.next.protocols.ICommitQueue = function(){};

om.next.protocols.commit_BANG_ = (function om$next$protocols$commit_BANG_(queue,tx_data,context){
if((!((queue == null))) && (!((queue.om$next$protocols$ICommitQueue$commit_BANG_$arity$3 == null)))){
return queue.om$next$protocols$ICommitQueue$commit_BANG_$arity$3(queue,tx_data,context);
} else {
var x__20802__auto__ = (((queue == null))?null:queue);
var m__20803__auto__ = (om.next.protocols.commit_BANG_[goog.typeOf(x__20802__auto__)]);
if(!((m__20803__auto__ == null))){
return m__20803__auto__.call(null,queue,tx_data,context);
} else {
var m__20803__auto____$1 = (om.next.protocols.commit_BANG_["_"]);
if(!((m__20803__auto____$1 == null))){
return m__20803__auto____$1.call(null,queue,tx_data,context);
} else {
throw cljs.core.missing_protocol.call(null,"ICommitQueue.commit!",queue);
}
}
}
});


/**
 * @interface
 */
om.next.protocols.IReconciler = function(){};

om.next.protocols.basis_t = (function om$next$protocols$basis_t(this$){
if((!((this$ == null))) && (!((this$.om$next$protocols$IReconciler$basis_t$arity$1 == null)))){
return this$.om$next$protocols$IReconciler$basis_t$arity$1(this$);
} else {
var x__20802__auto__ = (((this$ == null))?null:this$);
var m__20803__auto__ = (om.next.protocols.basis_t[goog.typeOf(x__20802__auto__)]);
if(!((m__20803__auto__ == null))){
return m__20803__auto__.call(null,this$);
} else {
var m__20803__auto____$1 = (om.next.protocols.basis_t["_"]);
if(!((m__20803__auto____$1 == null))){
return m__20803__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IReconciler.basis-t",this$);
}
}
}
});

om.next.protocols.store = (function om$next$protocols$store(this$){
if((!((this$ == null))) && (!((this$.om$next$protocols$IReconciler$store$arity$1 == null)))){
return this$.om$next$protocols$IReconciler$store$arity$1(this$);
} else {
var x__20802__auto__ = (((this$ == null))?null:this$);
var m__20803__auto__ = (om.next.protocols.store[goog.typeOf(x__20802__auto__)]);
if(!((m__20803__auto__ == null))){
return m__20803__auto__.call(null,this$);
} else {
var m__20803__auto____$1 = (om.next.protocols.store["_"]);
if(!((m__20803__auto____$1 == null))){
return m__20803__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IReconciler.store",this$);
}
}
}
});

om.next.protocols.indexes = (function om$next$protocols$indexes(this$){
if((!((this$ == null))) && (!((this$.om$next$protocols$IReconciler$indexes$arity$1 == null)))){
return this$.om$next$protocols$IReconciler$indexes$arity$1(this$);
} else {
var x__20802__auto__ = (((this$ == null))?null:this$);
var m__20803__auto__ = (om.next.protocols.indexes[goog.typeOf(x__20802__auto__)]);
if(!((m__20803__auto__ == null))){
return m__20803__auto__.call(null,this$);
} else {
var m__20803__auto____$1 = (om.next.protocols.indexes["_"]);
if(!((m__20803__auto____$1 == null))){
return m__20803__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IReconciler.indexes",this$);
}
}
}
});

om.next.protocols.props_for = (function om$next$protocols$props_for(this$,component){
if((!((this$ == null))) && (!((this$.om$next$protocols$IReconciler$props_for$arity$2 == null)))){
return this$.om$next$protocols$IReconciler$props_for$arity$2(this$,component);
} else {
var x__20802__auto__ = (((this$ == null))?null:this$);
var m__20803__auto__ = (om.next.protocols.props_for[goog.typeOf(x__20802__auto__)]);
if(!((m__20803__auto__ == null))){
return m__20803__auto__.call(null,this$,component);
} else {
var m__20803__auto____$1 = (om.next.protocols.props_for["_"]);
if(!((m__20803__auto____$1 == null))){
return m__20803__auto____$1.call(null,this$,component);
} else {
throw cljs.core.missing_protocol.call(null,"IReconciler.props-for",this$);
}
}
}
});

om.next.protocols.add_root_BANG_ = (function om$next$protocols$add_root_BANG_(reconciler,target,root_class,options){
if((!((reconciler == null))) && (!((reconciler.om$next$protocols$IReconciler$add_root_BANG_$arity$4 == null)))){
return reconciler.om$next$protocols$IReconciler$add_root_BANG_$arity$4(reconciler,target,root_class,options);
} else {
var x__20802__auto__ = (((reconciler == null))?null:reconciler);
var m__20803__auto__ = (om.next.protocols.add_root_BANG_[goog.typeOf(x__20802__auto__)]);
if(!((m__20803__auto__ == null))){
return m__20803__auto__.call(null,reconciler,target,root_class,options);
} else {
var m__20803__auto____$1 = (om.next.protocols.add_root_BANG_["_"]);
if(!((m__20803__auto____$1 == null))){
return m__20803__auto____$1.call(null,reconciler,target,root_class,options);
} else {
throw cljs.core.missing_protocol.call(null,"IReconciler.add-root!",reconciler);
}
}
}
});

om.next.protocols.remove_root_BANG_ = (function om$next$protocols$remove_root_BANG_(reconciler,target){
if((!((reconciler == null))) && (!((reconciler.om$next$protocols$IReconciler$remove_root_BANG_$arity$2 == null)))){
return reconciler.om$next$protocols$IReconciler$remove_root_BANG_$arity$2(reconciler,target);
} else {
var x__20802__auto__ = (((reconciler == null))?null:reconciler);
var m__20803__auto__ = (om.next.protocols.remove_root_BANG_[goog.typeOf(x__20802__auto__)]);
if(!((m__20803__auto__ == null))){
return m__20803__auto__.call(null,reconciler,target);
} else {
var m__20803__auto____$1 = (om.next.protocols.remove_root_BANG_["_"]);
if(!((m__20803__auto____$1 == null))){
return m__20803__auto____$1.call(null,reconciler,target);
} else {
throw cljs.core.missing_protocol.call(null,"IReconciler.remove-root!",reconciler);
}
}
}
});

om.next.protocols.schedule_BANG_ = (function om$next$protocols$schedule_BANG_(reconciler){
if((!((reconciler == null))) && (!((reconciler.om$next$protocols$IReconciler$schedule_BANG_$arity$1 == null)))){
return reconciler.om$next$protocols$IReconciler$schedule_BANG_$arity$1(reconciler);
} else {
var x__20802__auto__ = (((reconciler == null))?null:reconciler);
var m__20803__auto__ = (om.next.protocols.schedule_BANG_[goog.typeOf(x__20802__auto__)]);
if(!((m__20803__auto__ == null))){
return m__20803__auto__.call(null,reconciler);
} else {
var m__20803__auto____$1 = (om.next.protocols.schedule_BANG_["_"]);
if(!((m__20803__auto____$1 == null))){
return m__20803__auto____$1.call(null,reconciler);
} else {
throw cljs.core.missing_protocol.call(null,"IReconciler.schedule!",reconciler);
}
}
}
});

om.next.protocols.reconcile_BANG_ = (function om$next$protocols$reconcile_BANG_(reconciler){
if((!((reconciler == null))) && (!((reconciler.om$next$protocols$IReconciler$reconcile_BANG_$arity$1 == null)))){
return reconciler.om$next$protocols$IReconciler$reconcile_BANG_$arity$1(reconciler);
} else {
var x__20802__auto__ = (((reconciler == null))?null:reconciler);
var m__20803__auto__ = (om.next.protocols.reconcile_BANG_[goog.typeOf(x__20802__auto__)]);
if(!((m__20803__auto__ == null))){
return m__20803__auto__.call(null,reconciler);
} else {
var m__20803__auto____$1 = (om.next.protocols.reconcile_BANG_["_"]);
if(!((m__20803__auto____$1 == null))){
return m__20803__auto____$1.call(null,reconciler);
} else {
throw cljs.core.missing_protocol.call(null,"IReconciler.reconcile!",reconciler);
}
}
}
});


//# sourceMappingURL=protocols.js.map