// Compiled by ClojureScript 1.9.229 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash.call(null,this$__$1.toString());
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__25477_25481 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__25478_25482 = null;
var count__25479_25483 = (0);
var i__25480_25484 = (0);
while(true){
if((i__25480_25484 < count__25479_25483)){
var k_25485 = cljs.core._nth.call(null,chunk__25478_25482,i__25480_25484);
var v_25486 = (b[k_25485]);
(a[k_25485] = v_25486);

var G__25487 = seq__25477_25481;
var G__25488 = chunk__25478_25482;
var G__25489 = count__25479_25483;
var G__25490 = (i__25480_25484 + (1));
seq__25477_25481 = G__25487;
chunk__25478_25482 = G__25488;
count__25479_25483 = G__25489;
i__25480_25484 = G__25490;
continue;
} else {
var temp__6728__auto___25491 = cljs.core.seq.call(null,seq__25477_25481);
if(temp__6728__auto___25491){
var seq__25477_25492__$1 = temp__6728__auto___25491;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25477_25492__$1)){
var c__21000__auto___25493 = cljs.core.chunk_first.call(null,seq__25477_25492__$1);
var G__25494 = cljs.core.chunk_rest.call(null,seq__25477_25492__$1);
var G__25495 = c__21000__auto___25493;
var G__25496 = cljs.core.count.call(null,c__21000__auto___25493);
var G__25497 = (0);
seq__25477_25481 = G__25494;
chunk__25478_25482 = G__25495;
count__25479_25483 = G__25496;
i__25480_25484 = G__25497;
continue;
} else {
var k_25498 = cljs.core.first.call(null,seq__25477_25492__$1);
var v_25499 = (b[k_25498]);
(a[k_25498] = v_25499);

var G__25500 = cljs.core.next.call(null,seq__25477_25492__$1);
var G__25501 = null;
var G__25502 = (0);
var G__25503 = (0);
seq__25477_25481 = G__25500;
chunk__25478_25482 = G__25501;
count__25479_25483 = G__25502;
i__25480_25484 = G__25503;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__20749__auto__,writer__20750__auto__,opt__20751__auto__){
return cljs.core._write.call(null,writer__20750__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__20749__auto__,writer__20750__auto__,opt__20751__auto__){
return cljs.core._write.call(null,writer__20750__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args25504 = [];
var len__21280__auto___25507 = arguments.length;
var i__21281__auto___25508 = (0);
while(true){
if((i__21281__auto___25508 < len__21280__auto___25507)){
args25504.push((arguments[i__21281__auto___25508]));

var G__25509 = (i__21281__auto___25508 + (1));
i__21281__auto___25508 = G__25509;
continue;
} else {
}
break;
}

var G__25506 = args25504.length;
switch (G__25506) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25504.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,({"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__25511 = (i + (2));
var G__25512 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__25511;
ret = G__25512;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false}),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;

/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__20749__auto__,writer__20750__auto__,opt__20751__auto__){
return cljs.core._write.call(null,writer__20750__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__20749__auto__,writer__20750__auto__,opt__20751__auto__){
return cljs.core._write.call(null,writer__20750__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__25513_25517 = cljs.core.seq.call(null,v);
var chunk__25514_25518 = null;
var count__25515_25519 = (0);
var i__25516_25520 = (0);
while(true){
if((i__25516_25520 < count__25515_25519)){
var x_25521 = cljs.core._nth.call(null,chunk__25514_25518,i__25516_25520);
ret.push(x_25521);

var G__25522 = seq__25513_25517;
var G__25523 = chunk__25514_25518;
var G__25524 = count__25515_25519;
var G__25525 = (i__25516_25520 + (1));
seq__25513_25517 = G__25522;
chunk__25514_25518 = G__25523;
count__25515_25519 = G__25524;
i__25516_25520 = G__25525;
continue;
} else {
var temp__6728__auto___25526 = cljs.core.seq.call(null,seq__25513_25517);
if(temp__6728__auto___25526){
var seq__25513_25527__$1 = temp__6728__auto___25526;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25513_25527__$1)){
var c__21000__auto___25528 = cljs.core.chunk_first.call(null,seq__25513_25527__$1);
var G__25529 = cljs.core.chunk_rest.call(null,seq__25513_25527__$1);
var G__25530 = c__21000__auto___25528;
var G__25531 = cljs.core.count.call(null,c__21000__auto___25528);
var G__25532 = (0);
seq__25513_25517 = G__25529;
chunk__25514_25518 = G__25530;
count__25515_25519 = G__25531;
i__25516_25520 = G__25532;
continue;
} else {
var x_25533 = cljs.core.first.call(null,seq__25513_25527__$1);
ret.push(x_25533);

var G__25534 = cljs.core.next.call(null,seq__25513_25527__$1);
var G__25535 = null;
var G__25536 = (0);
var G__25537 = (0);
seq__25513_25517 = G__25534;
chunk__25514_25518 = G__25535;
count__25515_25519 = G__25536;
i__25516_25520 = G__25537;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__20749__auto__,writer__20750__auto__,opt__20751__auto__){
return cljs.core._write.call(null,writer__20750__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__20749__auto__,writer__20750__auto__,opt__20751__auto__){
return cljs.core._write.call(null,writer__20750__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__25538_25542 = cljs.core.seq.call(null,v);
var chunk__25539_25543 = null;
var count__25540_25544 = (0);
var i__25541_25545 = (0);
while(true){
if((i__25541_25545 < count__25540_25544)){
var x_25546 = cljs.core._nth.call(null,chunk__25539_25543,i__25541_25545);
ret.push(x_25546);

var G__25547 = seq__25538_25542;
var G__25548 = chunk__25539_25543;
var G__25549 = count__25540_25544;
var G__25550 = (i__25541_25545 + (1));
seq__25538_25542 = G__25547;
chunk__25539_25543 = G__25548;
count__25540_25544 = G__25549;
i__25541_25545 = G__25550;
continue;
} else {
var temp__6728__auto___25551 = cljs.core.seq.call(null,seq__25538_25542);
if(temp__6728__auto___25551){
var seq__25538_25552__$1 = temp__6728__auto___25551;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25538_25552__$1)){
var c__21000__auto___25553 = cljs.core.chunk_first.call(null,seq__25538_25552__$1);
var G__25554 = cljs.core.chunk_rest.call(null,seq__25538_25552__$1);
var G__25555 = c__21000__auto___25553;
var G__25556 = cljs.core.count.call(null,c__21000__auto___25553);
var G__25557 = (0);
seq__25538_25542 = G__25554;
chunk__25539_25543 = G__25555;
count__25540_25544 = G__25556;
i__25541_25545 = G__25557;
continue;
} else {
var x_25558 = cljs.core.first.call(null,seq__25538_25552__$1);
ret.push(x_25558);

var G__25559 = cljs.core.next.call(null,seq__25538_25552__$1);
var G__25560 = null;
var G__25561 = (0);
var G__25562 = (0);
seq__25538_25542 = G__25559;
chunk__25539_25543 = G__25560;
count__25540_25544 = G__25561;
i__25541_25545 = G__25562;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__20749__auto__,writer__20750__auto__,opt__20751__auto__){
return cljs.core._write.call(null,writer__20750__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__25563_25567 = cljs.core.seq.call(null,v);
var chunk__25564_25568 = null;
var count__25565_25569 = (0);
var i__25566_25570 = (0);
while(true){
if((i__25566_25570 < count__25565_25569)){
var x_25571 = cljs.core._nth.call(null,chunk__25564_25568,i__25566_25570);
ret.push(x_25571);

var G__25572 = seq__25563_25567;
var G__25573 = chunk__25564_25568;
var G__25574 = count__25565_25569;
var G__25575 = (i__25566_25570 + (1));
seq__25563_25567 = G__25572;
chunk__25564_25568 = G__25573;
count__25565_25569 = G__25574;
i__25566_25570 = G__25575;
continue;
} else {
var temp__6728__auto___25576 = cljs.core.seq.call(null,seq__25563_25567);
if(temp__6728__auto___25576){
var seq__25563_25577__$1 = temp__6728__auto___25576;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25563_25577__$1)){
var c__21000__auto___25578 = cljs.core.chunk_first.call(null,seq__25563_25577__$1);
var G__25579 = cljs.core.chunk_rest.call(null,seq__25563_25577__$1);
var G__25580 = c__21000__auto___25578;
var G__25581 = cljs.core.count.call(null,c__21000__auto___25578);
var G__25582 = (0);
seq__25563_25567 = G__25579;
chunk__25564_25568 = G__25580;
count__25565_25569 = G__25581;
i__25566_25570 = G__25582;
continue;
} else {
var x_25583 = cljs.core.first.call(null,seq__25563_25577__$1);
ret.push(x_25583);

var G__25584 = cljs.core.next.call(null,seq__25563_25577__$1);
var G__25585 = null;
var G__25586 = (0);
var G__25587 = (0);
seq__25563_25567 = G__25584;
chunk__25564_25568 = G__25585;
count__25565_25569 = G__25586;
i__25566_25570 = G__25587;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__20749__auto__,writer__20750__auto__,opt__20751__auto__){
return cljs.core._write.call(null,writer__20750__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__20749__auto__,writer__20750__auto__,opt__20751__auto__){
return cljs.core._write.call(null,writer__20750__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args25588 = [];
var len__21280__auto___25603 = arguments.length;
var i__21281__auto___25604 = (0);
while(true){
if((i__21281__auto___25604 < len__21280__auto___25603)){
args25588.push((arguments[i__21281__auto___25604]));

var G__25605 = (i__21281__auto___25604 + (1));
i__21281__auto___25604 = G__25605;
continue;
} else {
}
break;
}

var G__25590 = args25588.length;
switch (G__25590) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25588.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,({"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__25591 = obj;
G__25591.push(kfn.call(null,k),vfn.call(null,v));

return G__25591;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x25592 = cljs.core.clone.call(null,handlers);
x25592.forEach = ((function (x25592,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__25593 = cljs.core.seq.call(null,coll);
var chunk__25594 = null;
var count__25595 = (0);
var i__25596 = (0);
while(true){
if((i__25596 < count__25595)){
var vec__25597 = cljs.core._nth.call(null,chunk__25594,i__25596);
var k = cljs.core.nth.call(null,vec__25597,(0),null);
var v = cljs.core.nth.call(null,vec__25597,(1),null);
f.call(null,v,k);

var G__25607 = seq__25593;
var G__25608 = chunk__25594;
var G__25609 = count__25595;
var G__25610 = (i__25596 + (1));
seq__25593 = G__25607;
chunk__25594 = G__25608;
count__25595 = G__25609;
i__25596 = G__25610;
continue;
} else {
var temp__6728__auto__ = cljs.core.seq.call(null,seq__25593);
if(temp__6728__auto__){
var seq__25593__$1 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25593__$1)){
var c__21000__auto__ = cljs.core.chunk_first.call(null,seq__25593__$1);
var G__25611 = cljs.core.chunk_rest.call(null,seq__25593__$1);
var G__25612 = c__21000__auto__;
var G__25613 = cljs.core.count.call(null,c__21000__auto__);
var G__25614 = (0);
seq__25593 = G__25611;
chunk__25594 = G__25612;
count__25595 = G__25613;
i__25596 = G__25614;
continue;
} else {
var vec__25600 = cljs.core.first.call(null,seq__25593__$1);
var k = cljs.core.nth.call(null,vec__25600,(0),null);
var v = cljs.core.nth.call(null,vec__25600,(1),null);
f.call(null,v,k);

var G__25615 = cljs.core.next.call(null,seq__25593__$1);
var G__25616 = null;
var G__25617 = (0);
var G__25618 = (0);
seq__25593 = G__25615;
chunk__25594 = G__25616;
count__25595 = G__25617;
i__25596 = G__25618;
continue;
}
} else {
return null;
}
}
break;
}
});})(x25592,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x25592;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
}),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;

/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args25619 = [];
var len__21280__auto___25625 = arguments.length;
var i__21281__auto___25626 = (0);
while(true){
if((i__21281__auto___25626 < len__21280__auto___25625)){
args25619.push((arguments[i__21281__auto___25626]));

var G__25627 = (i__21281__auto___25626 + (1));
i__21281__auto___25626 = G__25627;
continue;
} else {
}
break;
}

var G__25621 = args25619.length;
switch (G__25621) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25619.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit25622 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit25622 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta25623){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta25623 = meta25623;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit25622.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25624,meta25623__$1){
var self__ = this;
var _25624__$1 = this;
return (new cognitect.transit.t_cognitect$transit25622(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta25623__$1));
});

cognitect.transit.t_cognitect$transit25622.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25624){
var self__ = this;
var _25624__$1 = this;
return self__.meta25623;
});

cognitect.transit.t_cognitect$transit25622.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit25622.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit25622.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit25622.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit25622.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta25623","meta25623",-1895973478,null)], null);
});

cognitect.transit.t_cognitect$transit25622.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit25622.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit25622";

cognitect.transit.t_cognitect$transit25622.cljs$lang$ctorPrWriter = (function (this__20749__auto__,writer__20750__auto__,opt__20751__auto__){
return cljs.core._write.call(null,writer__20750__auto__,"cognitect.transit/t_cognitect$transit25622");
});

cognitect.transit.__GT_t_cognitect$transit25622 = (function cognitect$transit$__GT_t_cognitect$transit25622(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta25623){
return (new cognitect.transit.t_cognitect$transit25622(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta25623));
});

}

return (new cognitect.transit.t_cognitect$transit25622(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;

/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__20097__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__20097__auto__)){
return or__20097__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map