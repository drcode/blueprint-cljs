// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__30873__auto__,writer__30874__auto__,opt__30875__auto__){
return cljs.core._write.call(null,writer__30874__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__31411__auto__ = [];
var len__31404__auto___36157 = arguments.length;
var i__31405__auto___36158 = (0);
while(true){
if((i__31405__auto___36158 < len__31404__auto___36157)){
args__31411__auto__.push((arguments[i__31405__auto___36158]));

var G__36159 = (i__31405__auto___36158 + (1));
i__31405__auto___36158 = G__36159;
continue;
} else {
}
break;
}

var argseq__31412__auto__ = ((((0) < args__31411__auto__.length))?(new cljs.core.IndexedSeq(args__31411__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__31412__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq36156){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36156));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__31411__auto__ = [];
var len__31404__auto___36161 = arguments.length;
var i__31405__auto___36162 = (0);
while(true){
if((i__31405__auto___36162 < len__31404__auto___36161)){
args__31411__auto__.push((arguments[i__31405__auto___36162]));

var G__36163 = (i__31405__auto___36162 + (1));
i__31405__auto___36162 = G__36163;
continue;
} else {
}
break;
}

var argseq__31412__auto__ = ((((0) < args__31411__auto__.length))?(new cljs.core.IndexedSeq(args__31411__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__31412__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq36160){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36160));
});

var g_QMARK__36164 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_36165 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__36164){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__36164))
,null));
var mkg_36166 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__36164,g_36165){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__36164,g_36165))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__36164,g_36165,mkg_36166){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__36164).call(null,x);
});})(g_QMARK__36164,g_36165,mkg_36166))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__36164,g_36165,mkg_36166){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_36166).call(null,gfn);
});})(g_QMARK__36164,g_36165,mkg_36166))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__36164,g_36165,mkg_36166){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_36165).call(null,generator);
});})(g_QMARK__36164,g_36165,mkg_36166))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__32696__auto___36185 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__32696__auto___36185){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__31411__auto__ = [];
var len__31404__auto___36186 = arguments.length;
var i__31405__auto___36187 = (0);
while(true){
if((i__31405__auto___36187 < len__31404__auto___36186)){
args__31411__auto__.push((arguments[i__31405__auto___36187]));

var G__36188 = (i__31405__auto___36187 + (1));
i__31405__auto___36187 = G__36188;
continue;
} else {
}
break;
}

var argseq__31412__auto__ = ((((0) < args__31411__auto__.length))?(new cljs.core.IndexedSeq(args__31411__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__31412__auto__);
});})(g__32696__auto___36185))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32696__auto___36185){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32696__auto___36185),args);
});})(g__32696__auto___36185))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__32696__auto___36185){
return (function (seq36167){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36167));
});})(g__32696__auto___36185))
;


var g__32696__auto___36189 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__32696__auto___36189){
return (function cljs$spec$impl$gen$list(var_args){
var args__31411__auto__ = [];
var len__31404__auto___36190 = arguments.length;
var i__31405__auto___36191 = (0);
while(true){
if((i__31405__auto___36191 < len__31404__auto___36190)){
args__31411__auto__.push((arguments[i__31405__auto___36191]));

var G__36192 = (i__31405__auto___36191 + (1));
i__31405__auto___36191 = G__36192;
continue;
} else {
}
break;
}

var argseq__31412__auto__ = ((((0) < args__31411__auto__.length))?(new cljs.core.IndexedSeq(args__31411__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__31412__auto__);
});})(g__32696__auto___36189))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32696__auto___36189){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32696__auto___36189),args);
});})(g__32696__auto___36189))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__32696__auto___36189){
return (function (seq36168){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36168));
});})(g__32696__auto___36189))
;


var g__32696__auto___36193 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__32696__auto___36193){
return (function cljs$spec$impl$gen$map(var_args){
var args__31411__auto__ = [];
var len__31404__auto___36194 = arguments.length;
var i__31405__auto___36195 = (0);
while(true){
if((i__31405__auto___36195 < len__31404__auto___36194)){
args__31411__auto__.push((arguments[i__31405__auto___36195]));

var G__36196 = (i__31405__auto___36195 + (1));
i__31405__auto___36195 = G__36196;
continue;
} else {
}
break;
}

var argseq__31412__auto__ = ((((0) < args__31411__auto__.length))?(new cljs.core.IndexedSeq(args__31411__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__31412__auto__);
});})(g__32696__auto___36193))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32696__auto___36193){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32696__auto___36193),args);
});})(g__32696__auto___36193))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__32696__auto___36193){
return (function (seq36169){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36169));
});})(g__32696__auto___36193))
;


var g__32696__auto___36197 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__32696__auto___36197){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__31411__auto__ = [];
var len__31404__auto___36198 = arguments.length;
var i__31405__auto___36199 = (0);
while(true){
if((i__31405__auto___36199 < len__31404__auto___36198)){
args__31411__auto__.push((arguments[i__31405__auto___36199]));

var G__36200 = (i__31405__auto___36199 + (1));
i__31405__auto___36199 = G__36200;
continue;
} else {
}
break;
}

var argseq__31412__auto__ = ((((0) < args__31411__auto__.length))?(new cljs.core.IndexedSeq(args__31411__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__31412__auto__);
});})(g__32696__auto___36197))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32696__auto___36197){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32696__auto___36197),args);
});})(g__32696__auto___36197))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__32696__auto___36197){
return (function (seq36170){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36170));
});})(g__32696__auto___36197))
;


var g__32696__auto___36201 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__32696__auto___36201){
return (function cljs$spec$impl$gen$set(var_args){
var args__31411__auto__ = [];
var len__31404__auto___36202 = arguments.length;
var i__31405__auto___36203 = (0);
while(true){
if((i__31405__auto___36203 < len__31404__auto___36202)){
args__31411__auto__.push((arguments[i__31405__auto___36203]));

var G__36204 = (i__31405__auto___36203 + (1));
i__31405__auto___36203 = G__36204;
continue;
} else {
}
break;
}

var argseq__31412__auto__ = ((((0) < args__31411__auto__.length))?(new cljs.core.IndexedSeq(args__31411__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__31412__auto__);
});})(g__32696__auto___36201))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32696__auto___36201){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32696__auto___36201),args);
});})(g__32696__auto___36201))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__32696__auto___36201){
return (function (seq36171){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36171));
});})(g__32696__auto___36201))
;


var g__32696__auto___36205 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__32696__auto___36205){
return (function cljs$spec$impl$gen$vector(var_args){
var args__31411__auto__ = [];
var len__31404__auto___36206 = arguments.length;
var i__31405__auto___36207 = (0);
while(true){
if((i__31405__auto___36207 < len__31404__auto___36206)){
args__31411__auto__.push((arguments[i__31405__auto___36207]));

var G__36208 = (i__31405__auto___36207 + (1));
i__31405__auto___36207 = G__36208;
continue;
} else {
}
break;
}

var argseq__31412__auto__ = ((((0) < args__31411__auto__.length))?(new cljs.core.IndexedSeq(args__31411__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__31412__auto__);
});})(g__32696__auto___36205))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32696__auto___36205){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32696__auto___36205),args);
});})(g__32696__auto___36205))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__32696__auto___36205){
return (function (seq36172){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36172));
});})(g__32696__auto___36205))
;


var g__32696__auto___36209 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__32696__auto___36209){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__31411__auto__ = [];
var len__31404__auto___36210 = arguments.length;
var i__31405__auto___36211 = (0);
while(true){
if((i__31405__auto___36211 < len__31404__auto___36210)){
args__31411__auto__.push((arguments[i__31405__auto___36211]));

var G__36212 = (i__31405__auto___36211 + (1));
i__31405__auto___36211 = G__36212;
continue;
} else {
}
break;
}

var argseq__31412__auto__ = ((((0) < args__31411__auto__.length))?(new cljs.core.IndexedSeq(args__31411__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__31412__auto__);
});})(g__32696__auto___36209))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32696__auto___36209){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32696__auto___36209),args);
});})(g__32696__auto___36209))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__32696__auto___36209){
return (function (seq36173){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36173));
});})(g__32696__auto___36209))
;


var g__32696__auto___36213 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__32696__auto___36213){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__31411__auto__ = [];
var len__31404__auto___36214 = arguments.length;
var i__31405__auto___36215 = (0);
while(true){
if((i__31405__auto___36215 < len__31404__auto___36214)){
args__31411__auto__.push((arguments[i__31405__auto___36215]));

var G__36216 = (i__31405__auto___36215 + (1));
i__31405__auto___36215 = G__36216;
continue;
} else {
}
break;
}

var argseq__31412__auto__ = ((((0) < args__31411__auto__.length))?(new cljs.core.IndexedSeq(args__31411__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__31412__auto__);
});})(g__32696__auto___36213))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32696__auto___36213){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32696__auto___36213),args);
});})(g__32696__auto___36213))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__32696__auto___36213){
return (function (seq36174){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36174));
});})(g__32696__auto___36213))
;


var g__32696__auto___36217 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__32696__auto___36217){
return (function cljs$spec$impl$gen$elements(var_args){
var args__31411__auto__ = [];
var len__31404__auto___36218 = arguments.length;
var i__31405__auto___36219 = (0);
while(true){
if((i__31405__auto___36219 < len__31404__auto___36218)){
args__31411__auto__.push((arguments[i__31405__auto___36219]));

var G__36220 = (i__31405__auto___36219 + (1));
i__31405__auto___36219 = G__36220;
continue;
} else {
}
break;
}

var argseq__31412__auto__ = ((((0) < args__31411__auto__.length))?(new cljs.core.IndexedSeq(args__31411__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__31412__auto__);
});})(g__32696__auto___36217))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32696__auto___36217){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32696__auto___36217),args);
});})(g__32696__auto___36217))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__32696__auto___36217){
return (function (seq36175){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36175));
});})(g__32696__auto___36217))
;


var g__32696__auto___36221 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__32696__auto___36221){
return (function cljs$spec$impl$gen$bind(var_args){
var args__31411__auto__ = [];
var len__31404__auto___36222 = arguments.length;
var i__31405__auto___36223 = (0);
while(true){
if((i__31405__auto___36223 < len__31404__auto___36222)){
args__31411__auto__.push((arguments[i__31405__auto___36223]));

var G__36224 = (i__31405__auto___36223 + (1));
i__31405__auto___36223 = G__36224;
continue;
} else {
}
break;
}

var argseq__31412__auto__ = ((((0) < args__31411__auto__.length))?(new cljs.core.IndexedSeq(args__31411__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__31412__auto__);
});})(g__32696__auto___36221))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32696__auto___36221){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32696__auto___36221),args);
});})(g__32696__auto___36221))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__32696__auto___36221){
return (function (seq36176){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36176));
});})(g__32696__auto___36221))
;


var g__32696__auto___36225 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__32696__auto___36225){
return (function cljs$spec$impl$gen$choose(var_args){
var args__31411__auto__ = [];
var len__31404__auto___36226 = arguments.length;
var i__31405__auto___36227 = (0);
while(true){
if((i__31405__auto___36227 < len__31404__auto___36226)){
args__31411__auto__.push((arguments[i__31405__auto___36227]));

var G__36228 = (i__31405__auto___36227 + (1));
i__31405__auto___36227 = G__36228;
continue;
} else {
}
break;
}

var argseq__31412__auto__ = ((((0) < args__31411__auto__.length))?(new cljs.core.IndexedSeq(args__31411__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__31412__auto__);
});})(g__32696__auto___36225))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32696__auto___36225){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32696__auto___36225),args);
});})(g__32696__auto___36225))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__32696__auto___36225){
return (function (seq36177){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36177));
});})(g__32696__auto___36225))
;


var g__32696__auto___36229 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__32696__auto___36229){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__31411__auto__ = [];
var len__31404__auto___36230 = arguments.length;
var i__31405__auto___36231 = (0);
while(true){
if((i__31405__auto___36231 < len__31404__auto___36230)){
args__31411__auto__.push((arguments[i__31405__auto___36231]));

var G__36232 = (i__31405__auto___36231 + (1));
i__31405__auto___36231 = G__36232;
continue;
} else {
}
break;
}

var argseq__31412__auto__ = ((((0) < args__31411__auto__.length))?(new cljs.core.IndexedSeq(args__31411__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__31412__auto__);
});})(g__32696__auto___36229))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32696__auto___36229){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32696__auto___36229),args);
});})(g__32696__auto___36229))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__32696__auto___36229){
return (function (seq36178){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36178));
});})(g__32696__auto___36229))
;


var g__32696__auto___36233 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__32696__auto___36233){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__31411__auto__ = [];
var len__31404__auto___36234 = arguments.length;
var i__31405__auto___36235 = (0);
while(true){
if((i__31405__auto___36235 < len__31404__auto___36234)){
args__31411__auto__.push((arguments[i__31405__auto___36235]));

var G__36236 = (i__31405__auto___36235 + (1));
i__31405__auto___36235 = G__36236;
continue;
} else {
}
break;
}

var argseq__31412__auto__ = ((((0) < args__31411__auto__.length))?(new cljs.core.IndexedSeq(args__31411__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__31412__auto__);
});})(g__32696__auto___36233))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32696__auto___36233){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32696__auto___36233),args);
});})(g__32696__auto___36233))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__32696__auto___36233){
return (function (seq36179){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36179));
});})(g__32696__auto___36233))
;


var g__32696__auto___36237 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__32696__auto___36237){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__31411__auto__ = [];
var len__31404__auto___36238 = arguments.length;
var i__31405__auto___36239 = (0);
while(true){
if((i__31405__auto___36239 < len__31404__auto___36238)){
args__31411__auto__.push((arguments[i__31405__auto___36239]));

var G__36240 = (i__31405__auto___36239 + (1));
i__31405__auto___36239 = G__36240;
continue;
} else {
}
break;
}

var argseq__31412__auto__ = ((((0) < args__31411__auto__.length))?(new cljs.core.IndexedSeq(args__31411__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__31412__auto__);
});})(g__32696__auto___36237))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32696__auto___36237){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32696__auto___36237),args);
});})(g__32696__auto___36237))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__32696__auto___36237){
return (function (seq36180){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36180));
});})(g__32696__auto___36237))
;


var g__32696__auto___36241 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__32696__auto___36241){
return (function cljs$spec$impl$gen$sample(var_args){
var args__31411__auto__ = [];
var len__31404__auto___36242 = arguments.length;
var i__31405__auto___36243 = (0);
while(true){
if((i__31405__auto___36243 < len__31404__auto___36242)){
args__31411__auto__.push((arguments[i__31405__auto___36243]));

var G__36244 = (i__31405__auto___36243 + (1));
i__31405__auto___36243 = G__36244;
continue;
} else {
}
break;
}

var argseq__31412__auto__ = ((((0) < args__31411__auto__.length))?(new cljs.core.IndexedSeq(args__31411__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__31412__auto__);
});})(g__32696__auto___36241))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32696__auto___36241){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32696__auto___36241),args);
});})(g__32696__auto___36241))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__32696__auto___36241){
return (function (seq36181){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36181));
});})(g__32696__auto___36241))
;


var g__32696__auto___36245 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__32696__auto___36245){
return (function cljs$spec$impl$gen$return(var_args){
var args__31411__auto__ = [];
var len__31404__auto___36246 = arguments.length;
var i__31405__auto___36247 = (0);
while(true){
if((i__31405__auto___36247 < len__31404__auto___36246)){
args__31411__auto__.push((arguments[i__31405__auto___36247]));

var G__36248 = (i__31405__auto___36247 + (1));
i__31405__auto___36247 = G__36248;
continue;
} else {
}
break;
}

var argseq__31412__auto__ = ((((0) < args__31411__auto__.length))?(new cljs.core.IndexedSeq(args__31411__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__31412__auto__);
});})(g__32696__auto___36245))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32696__auto___36245){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32696__auto___36245),args);
});})(g__32696__auto___36245))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__32696__auto___36245){
return (function (seq36182){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36182));
});})(g__32696__auto___36245))
;


var g__32696__auto___36249 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__32696__auto___36249){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__31411__auto__ = [];
var len__31404__auto___36250 = arguments.length;
var i__31405__auto___36251 = (0);
while(true){
if((i__31405__auto___36251 < len__31404__auto___36250)){
args__31411__auto__.push((arguments[i__31405__auto___36251]));

var G__36252 = (i__31405__auto___36251 + (1));
i__31405__auto___36251 = G__36252;
continue;
} else {
}
break;
}

var argseq__31412__auto__ = ((((0) < args__31411__auto__.length))?(new cljs.core.IndexedSeq(args__31411__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__31412__auto__);
});})(g__32696__auto___36249))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32696__auto___36249){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32696__auto___36249),args);
});})(g__32696__auto___36249))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__32696__auto___36249){
return (function (seq36183){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36183));
});})(g__32696__auto___36249))
;


var g__32696__auto___36253 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__32696__auto___36253){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__31411__auto__ = [];
var len__31404__auto___36254 = arguments.length;
var i__31405__auto___36255 = (0);
while(true){
if((i__31405__auto___36255 < len__31404__auto___36254)){
args__31411__auto__.push((arguments[i__31405__auto___36255]));

var G__36256 = (i__31405__auto___36255 + (1));
i__31405__auto___36255 = G__36256;
continue;
} else {
}
break;
}

var argseq__31412__auto__ = ((((0) < args__31411__auto__.length))?(new cljs.core.IndexedSeq(args__31411__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__31412__auto__);
});})(g__32696__auto___36253))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32696__auto___36253){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32696__auto___36253),args);
});})(g__32696__auto___36253))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__32696__auto___36253){
return (function (seq36184){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36184));
});})(g__32696__auto___36253))
;

var g__32709__auto___36278 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__32709__auto___36278){
return (function cljs$spec$impl$gen$any(var_args){
var args__31411__auto__ = [];
var len__31404__auto___36279 = arguments.length;
var i__31405__auto___36280 = (0);
while(true){
if((i__31405__auto___36280 < len__31404__auto___36279)){
args__31411__auto__.push((arguments[i__31405__auto___36280]));

var G__36281 = (i__31405__auto___36280 + (1));
i__31405__auto___36280 = G__36281;
continue;
} else {
}
break;
}

var argseq__31412__auto__ = ((((0) < args__31411__auto__.length))?(new cljs.core.IndexedSeq(args__31411__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__31412__auto__);
});})(g__32709__auto___36278))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32709__auto___36278){
return (function (args){
return cljs.core.deref.call(null,g__32709__auto___36278);
});})(g__32709__auto___36278))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__32709__auto___36278){
return (function (seq36257){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36257));
});})(g__32709__auto___36278))
;


var g__32709__auto___36282 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__32709__auto___36282){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__31411__auto__ = [];
var len__31404__auto___36283 = arguments.length;
var i__31405__auto___36284 = (0);
while(true){
if((i__31405__auto___36284 < len__31404__auto___36283)){
args__31411__auto__.push((arguments[i__31405__auto___36284]));

var G__36285 = (i__31405__auto___36284 + (1));
i__31405__auto___36284 = G__36285;
continue;
} else {
}
break;
}

var argseq__31412__auto__ = ((((0) < args__31411__auto__.length))?(new cljs.core.IndexedSeq(args__31411__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__31412__auto__);
});})(g__32709__auto___36282))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32709__auto___36282){
return (function (args){
return cljs.core.deref.call(null,g__32709__auto___36282);
});})(g__32709__auto___36282))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__32709__auto___36282){
return (function (seq36258){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36258));
});})(g__32709__auto___36282))
;


var g__32709__auto___36286 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__32709__auto___36286){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__31411__auto__ = [];
var len__31404__auto___36287 = arguments.length;
var i__31405__auto___36288 = (0);
while(true){
if((i__31405__auto___36288 < len__31404__auto___36287)){
args__31411__auto__.push((arguments[i__31405__auto___36288]));

var G__36289 = (i__31405__auto___36288 + (1));
i__31405__auto___36288 = G__36289;
continue;
} else {
}
break;
}

var argseq__31412__auto__ = ((((0) < args__31411__auto__.length))?(new cljs.core.IndexedSeq(args__31411__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__31412__auto__);
});})(g__32709__auto___36286))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32709__auto___36286){
return (function (args){
return cljs.core.deref.call(null,g__32709__auto___36286);
});})(g__32709__auto___36286))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__32709__auto___36286){
return (function (seq36259){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36259));
});})(g__32709__auto___36286))
;


var g__32709__auto___36290 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__32709__auto___36290){
return (function cljs$spec$impl$gen$char(var_args){
var args__31411__auto__ = [];
var len__31404__auto___36291 = arguments.length;
var i__31405__auto___36292 = (0);
while(true){
if((i__31405__auto___36292 < len__31404__auto___36291)){
args__31411__auto__.push((arguments[i__31405__auto___36292]));

var G__36293 = (i__31405__auto___36292 + (1));
i__31405__auto___36292 = G__36293;
continue;
} else {
}
break;
}

var argseq__31412__auto__ = ((((0) < args__31411__auto__.length))?(new cljs.core.IndexedSeq(args__31411__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__31412__auto__);
});})(g__32709__auto___36290))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32709__auto___36290){
return (function (args){
return cljs.core.deref.call(null,g__32709__auto___36290);
});})(g__32709__auto___36290))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__32709__auto___36290){
return (function (seq36260){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36260));
});})(g__32709__auto___36290))
;


var g__32709__auto___36294 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__32709__auto___36294){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__31411__auto__ = [];
var len__31404__auto___36295 = arguments.length;
var i__31405__auto___36296 = (0);
while(true){
if((i__31405__auto___36296 < len__31404__auto___36295)){
args__31411__auto__.push((arguments[i__31405__auto___36296]));

var G__36297 = (i__31405__auto___36296 + (1));
i__31405__auto___36296 = G__36297;
continue;
} else {
}
break;
}

var argseq__31412__auto__ = ((((0) < args__31411__auto__.length))?(new cljs.core.IndexedSeq(args__31411__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__31412__auto__);
});})(g__32709__auto___36294))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32709__auto___36294){
return (function (args){
return cljs.core.deref.call(null,g__32709__auto___36294);
});})(g__32709__auto___36294))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__32709__auto___36294){
return (function (seq36261){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36261));
});})(g__32709__auto___36294))
;


var g__32709__auto___36298 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__32709__auto___36298){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__31411__auto__ = [];
var len__31404__auto___36299 = arguments.length;
var i__31405__auto___36300 = (0);
while(true){
if((i__31405__auto___36300 < len__31404__auto___36299)){
args__31411__auto__.push((arguments[i__31405__auto___36300]));

var G__36301 = (i__31405__auto___36300 + (1));
i__31405__auto___36300 = G__36301;
continue;
} else {
}
break;
}

var argseq__31412__auto__ = ((((0) < args__31411__auto__.length))?(new cljs.core.IndexedSeq(args__31411__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__31412__auto__);
});})(g__32709__auto___36298))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32709__auto___36298){
return (function (args){
return cljs.core.deref.call(null,g__32709__auto___36298);
});})(g__32709__auto___36298))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__32709__auto___36298){
return (function (seq36262){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36262));
});})(g__32709__auto___36298))
;


var g__32709__auto___36302 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__32709__auto___36302){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__31411__auto__ = [];
var len__31404__auto___36303 = arguments.length;
var i__31405__auto___36304 = (0);
while(true){
if((i__31405__auto___36304 < len__31404__auto___36303)){
args__31411__auto__.push((arguments[i__31405__auto___36304]));

var G__36305 = (i__31405__auto___36304 + (1));
i__31405__auto___36304 = G__36305;
continue;
} else {
}
break;
}

var argseq__31412__auto__ = ((((0) < args__31411__auto__.length))?(new cljs.core.IndexedSeq(args__31411__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__31412__auto__);
});})(g__32709__auto___36302))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32709__auto___36302){
return (function (args){
return cljs.core.deref.call(null,g__32709__auto___36302);
});})(g__32709__auto___36302))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__32709__auto___36302){
return (function (seq36263){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36263));
});})(g__32709__auto___36302))
;


var g__32709__auto___36306 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__32709__auto___36306){
return (function cljs$spec$impl$gen$double(var_args){
var args__31411__auto__ = [];
var len__31404__auto___36307 = arguments.length;
var i__31405__auto___36308 = (0);
while(true){
if((i__31405__auto___36308 < len__31404__auto___36307)){
args__31411__auto__.push((arguments[i__31405__auto___36308]));

var G__36309 = (i__31405__auto___36308 + (1));
i__31405__auto___36308 = G__36309;
continue;
} else {
}
break;
}

var argseq__31412__auto__ = ((((0) < args__31411__auto__.length))?(new cljs.core.IndexedSeq(args__31411__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__31412__auto__);
});})(g__32709__auto___36306))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32709__auto___36306){
return (function (args){
return cljs.core.deref.call(null,g__32709__auto___36306);
});})(g__32709__auto___36306))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__32709__auto___36306){
return (function (seq36264){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36264));
});})(g__32709__auto___36306))
;


var g__32709__auto___36310 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__32709__auto___36310){
return (function cljs$spec$impl$gen$int(var_args){
var args__31411__auto__ = [];
var len__31404__auto___36311 = arguments.length;
var i__31405__auto___36312 = (0);
while(true){
if((i__31405__auto___36312 < len__31404__auto___36311)){
args__31411__auto__.push((arguments[i__31405__auto___36312]));

var G__36313 = (i__31405__auto___36312 + (1));
i__31405__auto___36312 = G__36313;
continue;
} else {
}
break;
}

var argseq__31412__auto__ = ((((0) < args__31411__auto__.length))?(new cljs.core.IndexedSeq(args__31411__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__31412__auto__);
});})(g__32709__auto___36310))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32709__auto___36310){
return (function (args){
return cljs.core.deref.call(null,g__32709__auto___36310);
});})(g__32709__auto___36310))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__32709__auto___36310){
return (function (seq36265){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36265));
});})(g__32709__auto___36310))
;


var g__32709__auto___36314 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__32709__auto___36314){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__31411__auto__ = [];
var len__31404__auto___36315 = arguments.length;
var i__31405__auto___36316 = (0);
while(true){
if((i__31405__auto___36316 < len__31404__auto___36315)){
args__31411__auto__.push((arguments[i__31405__auto___36316]));

var G__36317 = (i__31405__auto___36316 + (1));
i__31405__auto___36316 = G__36317;
continue;
} else {
}
break;
}

var argseq__31412__auto__ = ((((0) < args__31411__auto__.length))?(new cljs.core.IndexedSeq(args__31411__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__31412__auto__);
});})(g__32709__auto___36314))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32709__auto___36314){
return (function (args){
return cljs.core.deref.call(null,g__32709__auto___36314);
});})(g__32709__auto___36314))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__32709__auto___36314){
return (function (seq36266){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36266));
});})(g__32709__auto___36314))
;


var g__32709__auto___36318 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__32709__auto___36318){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__31411__auto__ = [];
var len__31404__auto___36319 = arguments.length;
var i__31405__auto___36320 = (0);
while(true){
if((i__31405__auto___36320 < len__31404__auto___36319)){
args__31411__auto__.push((arguments[i__31405__auto___36320]));

var G__36321 = (i__31405__auto___36320 + (1));
i__31405__auto___36320 = G__36321;
continue;
} else {
}
break;
}

var argseq__31412__auto__ = ((((0) < args__31411__auto__.length))?(new cljs.core.IndexedSeq(args__31411__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__31412__auto__);
});})(g__32709__auto___36318))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32709__auto___36318){
return (function (args){
return cljs.core.deref.call(null,g__32709__auto___36318);
});})(g__32709__auto___36318))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__32709__auto___36318){
return (function (seq36267){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36267));
});})(g__32709__auto___36318))
;


var g__32709__auto___36322 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__32709__auto___36322){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__31411__auto__ = [];
var len__31404__auto___36323 = arguments.length;
var i__31405__auto___36324 = (0);
while(true){
if((i__31405__auto___36324 < len__31404__auto___36323)){
args__31411__auto__.push((arguments[i__31405__auto___36324]));

var G__36325 = (i__31405__auto___36324 + (1));
i__31405__auto___36324 = G__36325;
continue;
} else {
}
break;
}

var argseq__31412__auto__ = ((((0) < args__31411__auto__.length))?(new cljs.core.IndexedSeq(args__31411__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__31412__auto__);
});})(g__32709__auto___36322))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32709__auto___36322){
return (function (args){
return cljs.core.deref.call(null,g__32709__auto___36322);
});})(g__32709__auto___36322))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__32709__auto___36322){
return (function (seq36268){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36268));
});})(g__32709__auto___36322))
;


var g__32709__auto___36326 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__32709__auto___36326){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__31411__auto__ = [];
var len__31404__auto___36327 = arguments.length;
var i__31405__auto___36328 = (0);
while(true){
if((i__31405__auto___36328 < len__31404__auto___36327)){
args__31411__auto__.push((arguments[i__31405__auto___36328]));

var G__36329 = (i__31405__auto___36328 + (1));
i__31405__auto___36328 = G__36329;
continue;
} else {
}
break;
}

var argseq__31412__auto__ = ((((0) < args__31411__auto__.length))?(new cljs.core.IndexedSeq(args__31411__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__31412__auto__);
});})(g__32709__auto___36326))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32709__auto___36326){
return (function (args){
return cljs.core.deref.call(null,g__32709__auto___36326);
});})(g__32709__auto___36326))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__32709__auto___36326){
return (function (seq36269){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36269));
});})(g__32709__auto___36326))
;


var g__32709__auto___36330 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__32709__auto___36330){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__31411__auto__ = [];
var len__31404__auto___36331 = arguments.length;
var i__31405__auto___36332 = (0);
while(true){
if((i__31405__auto___36332 < len__31404__auto___36331)){
args__31411__auto__.push((arguments[i__31405__auto___36332]));

var G__36333 = (i__31405__auto___36332 + (1));
i__31405__auto___36332 = G__36333;
continue;
} else {
}
break;
}

var argseq__31412__auto__ = ((((0) < args__31411__auto__.length))?(new cljs.core.IndexedSeq(args__31411__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__31412__auto__);
});})(g__32709__auto___36330))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32709__auto___36330){
return (function (args){
return cljs.core.deref.call(null,g__32709__auto___36330);
});})(g__32709__auto___36330))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__32709__auto___36330){
return (function (seq36270){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36270));
});})(g__32709__auto___36330))
;


var g__32709__auto___36334 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__32709__auto___36334){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__31411__auto__ = [];
var len__31404__auto___36335 = arguments.length;
var i__31405__auto___36336 = (0);
while(true){
if((i__31405__auto___36336 < len__31404__auto___36335)){
args__31411__auto__.push((arguments[i__31405__auto___36336]));

var G__36337 = (i__31405__auto___36336 + (1));
i__31405__auto___36336 = G__36337;
continue;
} else {
}
break;
}

var argseq__31412__auto__ = ((((0) < args__31411__auto__.length))?(new cljs.core.IndexedSeq(args__31411__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__31412__auto__);
});})(g__32709__auto___36334))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32709__auto___36334){
return (function (args){
return cljs.core.deref.call(null,g__32709__auto___36334);
});})(g__32709__auto___36334))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__32709__auto___36334){
return (function (seq36271){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36271));
});})(g__32709__auto___36334))
;


var g__32709__auto___36338 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__32709__auto___36338){
return (function cljs$spec$impl$gen$string(var_args){
var args__31411__auto__ = [];
var len__31404__auto___36339 = arguments.length;
var i__31405__auto___36340 = (0);
while(true){
if((i__31405__auto___36340 < len__31404__auto___36339)){
args__31411__auto__.push((arguments[i__31405__auto___36340]));

var G__36341 = (i__31405__auto___36340 + (1));
i__31405__auto___36340 = G__36341;
continue;
} else {
}
break;
}

var argseq__31412__auto__ = ((((0) < args__31411__auto__.length))?(new cljs.core.IndexedSeq(args__31411__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__31412__auto__);
});})(g__32709__auto___36338))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32709__auto___36338){
return (function (args){
return cljs.core.deref.call(null,g__32709__auto___36338);
});})(g__32709__auto___36338))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__32709__auto___36338){
return (function (seq36272){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36272));
});})(g__32709__auto___36338))
;


var g__32709__auto___36342 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__32709__auto___36342){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__31411__auto__ = [];
var len__31404__auto___36343 = arguments.length;
var i__31405__auto___36344 = (0);
while(true){
if((i__31405__auto___36344 < len__31404__auto___36343)){
args__31411__auto__.push((arguments[i__31405__auto___36344]));

var G__36345 = (i__31405__auto___36344 + (1));
i__31405__auto___36344 = G__36345;
continue;
} else {
}
break;
}

var argseq__31412__auto__ = ((((0) < args__31411__auto__.length))?(new cljs.core.IndexedSeq(args__31411__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__31412__auto__);
});})(g__32709__auto___36342))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32709__auto___36342){
return (function (args){
return cljs.core.deref.call(null,g__32709__auto___36342);
});})(g__32709__auto___36342))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__32709__auto___36342){
return (function (seq36273){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36273));
});})(g__32709__auto___36342))
;


var g__32709__auto___36346 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__32709__auto___36346){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__31411__auto__ = [];
var len__31404__auto___36347 = arguments.length;
var i__31405__auto___36348 = (0);
while(true){
if((i__31405__auto___36348 < len__31404__auto___36347)){
args__31411__auto__.push((arguments[i__31405__auto___36348]));

var G__36349 = (i__31405__auto___36348 + (1));
i__31405__auto___36348 = G__36349;
continue;
} else {
}
break;
}

var argseq__31412__auto__ = ((((0) < args__31411__auto__.length))?(new cljs.core.IndexedSeq(args__31411__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__31412__auto__);
});})(g__32709__auto___36346))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32709__auto___36346){
return (function (args){
return cljs.core.deref.call(null,g__32709__auto___36346);
});})(g__32709__auto___36346))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__32709__auto___36346){
return (function (seq36274){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36274));
});})(g__32709__auto___36346))
;


var g__32709__auto___36350 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__32709__auto___36350){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__31411__auto__ = [];
var len__31404__auto___36351 = arguments.length;
var i__31405__auto___36352 = (0);
while(true){
if((i__31405__auto___36352 < len__31404__auto___36351)){
args__31411__auto__.push((arguments[i__31405__auto___36352]));

var G__36353 = (i__31405__auto___36352 + (1));
i__31405__auto___36352 = G__36353;
continue;
} else {
}
break;
}

var argseq__31412__auto__ = ((((0) < args__31411__auto__.length))?(new cljs.core.IndexedSeq(args__31411__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__31412__auto__);
});})(g__32709__auto___36350))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32709__auto___36350){
return (function (args){
return cljs.core.deref.call(null,g__32709__auto___36350);
});})(g__32709__auto___36350))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__32709__auto___36350){
return (function (seq36275){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36275));
});})(g__32709__auto___36350))
;


var g__32709__auto___36354 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__32709__auto___36354){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__31411__auto__ = [];
var len__31404__auto___36355 = arguments.length;
var i__31405__auto___36356 = (0);
while(true){
if((i__31405__auto___36356 < len__31404__auto___36355)){
args__31411__auto__.push((arguments[i__31405__auto___36356]));

var G__36357 = (i__31405__auto___36356 + (1));
i__31405__auto___36356 = G__36357;
continue;
} else {
}
break;
}

var argseq__31412__auto__ = ((((0) < args__31411__auto__.length))?(new cljs.core.IndexedSeq(args__31411__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__31412__auto__);
});})(g__32709__auto___36354))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32709__auto___36354){
return (function (args){
return cljs.core.deref.call(null,g__32709__auto___36354);
});})(g__32709__auto___36354))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__32709__auto___36354){
return (function (seq36276){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36276));
});})(g__32709__auto___36354))
;


var g__32709__auto___36358 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__32709__auto___36358){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__31411__auto__ = [];
var len__31404__auto___36359 = arguments.length;
var i__31405__auto___36360 = (0);
while(true){
if((i__31405__auto___36360 < len__31404__auto___36359)){
args__31411__auto__.push((arguments[i__31405__auto___36360]));

var G__36361 = (i__31405__auto___36360 + (1));
i__31405__auto___36360 = G__36361;
continue;
} else {
}
break;
}

var argseq__31412__auto__ = ((((0) < args__31411__auto__.length))?(new cljs.core.IndexedSeq(args__31411__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__31412__auto__);
});})(g__32709__auto___36358))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32709__auto___36358){
return (function (args){
return cljs.core.deref.call(null,g__32709__auto___36358);
});})(g__32709__auto___36358))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__32709__auto___36358){
return (function (seq36277){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36277));
});})(g__32709__auto___36358))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__31411__auto__ = [];
var len__31404__auto___36364 = arguments.length;
var i__31405__auto___36365 = (0);
while(true){
if((i__31405__auto___36365 < len__31404__auto___36364)){
args__31411__auto__.push((arguments[i__31405__auto___36365]));

var G__36366 = (i__31405__auto___36365 + (1));
i__31405__auto___36365 = G__36366;
continue;
} else {
}
break;
}

var argseq__31412__auto__ = ((((0) < args__31411__auto__.length))?(new cljs.core.IndexedSeq(args__31411__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__31412__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__36362_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__36362_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq36363){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36363));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__36367_SHARP_){
return (new Date(p1__36367_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map