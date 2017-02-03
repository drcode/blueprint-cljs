// Compiled by ClojureScript 1.9.229 {}
goog.provide('om.transit');
goog.require('cljs.core');
goog.require('cognitect.transit');
goog.require('com.cognitect.transit');
goog.require('om.tempid');

/**
* @constructor
 * @implements {om.transit.Object}
*/
om.transit.TempIdHandler = (function (){
})
om.transit.TempIdHandler.prototype.tag = (function (_){
var self__ = this;
var ___$1 = this;
return "om/id";
});

om.transit.TempIdHandler.prototype.rep = (function (r){
var self__ = this;
var _ = this;
return r.id;
});

om.transit.TempIdHandler.prototype.stringRep = (function (_){
var self__ = this;
var ___$1 = this;
return null;
});

om.transit.TempIdHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

om.transit.TempIdHandler.cljs$lang$type = true;

om.transit.TempIdHandler.cljs$lang$ctorStr = "om.transit/TempIdHandler";

om.transit.TempIdHandler.cljs$lang$ctorPrWriter = (function (this__20749__auto__,writer__20750__auto__,opt__20751__auto__){
return cljs.core._write.call(null,writer__20750__auto__,"om.transit/TempIdHandler");
});

om.transit.__GT_TempIdHandler = (function om$transit$__GT_TempIdHandler(){
return (new om.transit.TempIdHandler());
});

om.transit.writer = (function om$transit$writer(var_args){
var args25631 = [];
var len__21280__auto___25634 = arguments.length;
var i__21281__auto___25635 = (0);
while(true){
if((i__21281__auto___25635 < len__21280__auto___25634)){
args25631.push((arguments[i__21281__auto___25635]));

var G__25636 = (i__21281__auto___25635 + (1));
i__21281__auto___25635 = G__25636;
continue;
} else {
}
break;
}

var G__25633 = args25631.length;
switch (G__25633) {
case 0:
return om.transit.writer.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25631.length)].join('')));

}
});

om.transit.writer.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.transit.writer.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

om.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570),cljs.core.assoc_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),om.tempid.TempId], null),(new om.transit.TempIdHandler())));
});

om.transit.writer.cljs$lang$maxFixedArity = 1;

om.transit.reader = (function om$transit$reader(var_args){
var args25638 = [];
var len__21280__auto___25641 = arguments.length;
var i__21281__auto___25642 = (0);
while(true){
if((i__21281__auto___25642 < len__21280__auto___25641)){
args25638.push((arguments[i__21281__auto___25642]));

var G__25643 = (i__21281__auto___25642 + (1));
i__21281__auto___25642 = G__25643;
continue;
} else {
}
break;
}

var G__25640 = args25638.length;
switch (G__25640) {
case 0:
return om.transit.reader.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25638.length)].join('')));

}
});

om.transit.reader.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.transit.reader.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

om.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570),cljs.core.assoc_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),"om/id"], null),(function (id){
return om.tempid.tempid.call(null,id);
})));
});

om.transit.reader.cljs$lang$maxFixedArity = 1;


//# sourceMappingURL=transit.js.map