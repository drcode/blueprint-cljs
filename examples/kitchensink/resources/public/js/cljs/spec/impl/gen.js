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

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__20749__auto__,writer__20750__auto__,opt__20751__auto__){
return cljs.core._write.call(null,writer__20750__auto__,"cljs.spec.impl.gen/LazyVar");
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
var args__21287__auto__ = [];
var len__21280__auto___37208 = arguments.length;
var i__21281__auto___37209 = (0);
while(true){
if((i__21281__auto___37209 < len__21280__auto___37208)){
args__21287__auto__.push((arguments[i__21281__auto___37209]));

var G__37210 = (i__21281__auto___37209 + (1));
i__21281__auto___37209 = G__37210;
continue;
} else {
}
break;
}

var argseq__21288__auto__ = ((((0) < args__21287__auto__.length))?(new cljs.core.IndexedSeq(args__21287__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__21288__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq37207){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37207));
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
var args__21287__auto__ = [];
var len__21280__auto___37212 = arguments.length;
var i__21281__auto___37213 = (0);
while(true){
if((i__21281__auto___37213 < len__21280__auto___37212)){
args__21287__auto__.push((arguments[i__21281__auto___37213]));

var G__37214 = (i__21281__auto___37213 + (1));
i__21281__auto___37213 = G__37214;
continue;
} else {
}
break;
}

var argseq__21288__auto__ = ((((0) < args__21287__auto__.length))?(new cljs.core.IndexedSeq(args__21287__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__21288__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq37211){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37211));
});

var g_QMARK__37215 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_37216 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__37215){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__37215))
,null));
var mkg_37217 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__37215,g_37216){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__37215,g_37216))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__37215,g_37216,mkg_37217){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__37215).call(null,x);
});})(g_QMARK__37215,g_37216,mkg_37217))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__37215,g_37216,mkg_37217){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_37217).call(null,gfn);
});})(g_QMARK__37215,g_37216,mkg_37217))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__37215,g_37216,mkg_37217){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_37216).call(null,generator);
});})(g_QMARK__37215,g_37216,mkg_37217))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__37179__auto___37236 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__37179__auto___37236){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__21287__auto__ = [];
var len__21280__auto___37237 = arguments.length;
var i__21281__auto___37238 = (0);
while(true){
if((i__21281__auto___37238 < len__21280__auto___37237)){
args__21287__auto__.push((arguments[i__21281__auto___37238]));

var G__37239 = (i__21281__auto___37238 + (1));
i__21281__auto___37238 = G__37239;
continue;
} else {
}
break;
}

var argseq__21288__auto__ = ((((0) < args__21287__auto__.length))?(new cljs.core.IndexedSeq(args__21287__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__21288__auto__);
});})(g__37179__auto___37236))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37179__auto___37236){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37179__auto___37236),args);
});})(g__37179__auto___37236))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__37179__auto___37236){
return (function (seq37218){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37218));
});})(g__37179__auto___37236))
;


var g__37179__auto___37240 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__37179__auto___37240){
return (function cljs$spec$impl$gen$list(var_args){
var args__21287__auto__ = [];
var len__21280__auto___37241 = arguments.length;
var i__21281__auto___37242 = (0);
while(true){
if((i__21281__auto___37242 < len__21280__auto___37241)){
args__21287__auto__.push((arguments[i__21281__auto___37242]));

var G__37243 = (i__21281__auto___37242 + (1));
i__21281__auto___37242 = G__37243;
continue;
} else {
}
break;
}

var argseq__21288__auto__ = ((((0) < args__21287__auto__.length))?(new cljs.core.IndexedSeq(args__21287__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__21288__auto__);
});})(g__37179__auto___37240))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37179__auto___37240){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37179__auto___37240),args);
});})(g__37179__auto___37240))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__37179__auto___37240){
return (function (seq37219){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37219));
});})(g__37179__auto___37240))
;


var g__37179__auto___37244 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__37179__auto___37244){
return (function cljs$spec$impl$gen$map(var_args){
var args__21287__auto__ = [];
var len__21280__auto___37245 = arguments.length;
var i__21281__auto___37246 = (0);
while(true){
if((i__21281__auto___37246 < len__21280__auto___37245)){
args__21287__auto__.push((arguments[i__21281__auto___37246]));

var G__37247 = (i__21281__auto___37246 + (1));
i__21281__auto___37246 = G__37247;
continue;
} else {
}
break;
}

var argseq__21288__auto__ = ((((0) < args__21287__auto__.length))?(new cljs.core.IndexedSeq(args__21287__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__21288__auto__);
});})(g__37179__auto___37244))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37179__auto___37244){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37179__auto___37244),args);
});})(g__37179__auto___37244))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__37179__auto___37244){
return (function (seq37220){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37220));
});})(g__37179__auto___37244))
;


var g__37179__auto___37248 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__37179__auto___37248){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__21287__auto__ = [];
var len__21280__auto___37249 = arguments.length;
var i__21281__auto___37250 = (0);
while(true){
if((i__21281__auto___37250 < len__21280__auto___37249)){
args__21287__auto__.push((arguments[i__21281__auto___37250]));

var G__37251 = (i__21281__auto___37250 + (1));
i__21281__auto___37250 = G__37251;
continue;
} else {
}
break;
}

var argseq__21288__auto__ = ((((0) < args__21287__auto__.length))?(new cljs.core.IndexedSeq(args__21287__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__21288__auto__);
});})(g__37179__auto___37248))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37179__auto___37248){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37179__auto___37248),args);
});})(g__37179__auto___37248))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__37179__auto___37248){
return (function (seq37221){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37221));
});})(g__37179__auto___37248))
;


var g__37179__auto___37252 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__37179__auto___37252){
return (function cljs$spec$impl$gen$set(var_args){
var args__21287__auto__ = [];
var len__21280__auto___37253 = arguments.length;
var i__21281__auto___37254 = (0);
while(true){
if((i__21281__auto___37254 < len__21280__auto___37253)){
args__21287__auto__.push((arguments[i__21281__auto___37254]));

var G__37255 = (i__21281__auto___37254 + (1));
i__21281__auto___37254 = G__37255;
continue;
} else {
}
break;
}

var argseq__21288__auto__ = ((((0) < args__21287__auto__.length))?(new cljs.core.IndexedSeq(args__21287__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__21288__auto__);
});})(g__37179__auto___37252))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37179__auto___37252){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37179__auto___37252),args);
});})(g__37179__auto___37252))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__37179__auto___37252){
return (function (seq37222){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37222));
});})(g__37179__auto___37252))
;


var g__37179__auto___37256 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__37179__auto___37256){
return (function cljs$spec$impl$gen$vector(var_args){
var args__21287__auto__ = [];
var len__21280__auto___37257 = arguments.length;
var i__21281__auto___37258 = (0);
while(true){
if((i__21281__auto___37258 < len__21280__auto___37257)){
args__21287__auto__.push((arguments[i__21281__auto___37258]));

var G__37259 = (i__21281__auto___37258 + (1));
i__21281__auto___37258 = G__37259;
continue;
} else {
}
break;
}

var argseq__21288__auto__ = ((((0) < args__21287__auto__.length))?(new cljs.core.IndexedSeq(args__21287__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__21288__auto__);
});})(g__37179__auto___37256))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37179__auto___37256){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37179__auto___37256),args);
});})(g__37179__auto___37256))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__37179__auto___37256){
return (function (seq37223){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37223));
});})(g__37179__auto___37256))
;


var g__37179__auto___37260 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__37179__auto___37260){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__21287__auto__ = [];
var len__21280__auto___37261 = arguments.length;
var i__21281__auto___37262 = (0);
while(true){
if((i__21281__auto___37262 < len__21280__auto___37261)){
args__21287__auto__.push((arguments[i__21281__auto___37262]));

var G__37263 = (i__21281__auto___37262 + (1));
i__21281__auto___37262 = G__37263;
continue;
} else {
}
break;
}

var argseq__21288__auto__ = ((((0) < args__21287__auto__.length))?(new cljs.core.IndexedSeq(args__21287__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__21288__auto__);
});})(g__37179__auto___37260))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37179__auto___37260){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37179__auto___37260),args);
});})(g__37179__auto___37260))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__37179__auto___37260){
return (function (seq37224){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37224));
});})(g__37179__auto___37260))
;


var g__37179__auto___37264 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__37179__auto___37264){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__21287__auto__ = [];
var len__21280__auto___37265 = arguments.length;
var i__21281__auto___37266 = (0);
while(true){
if((i__21281__auto___37266 < len__21280__auto___37265)){
args__21287__auto__.push((arguments[i__21281__auto___37266]));

var G__37267 = (i__21281__auto___37266 + (1));
i__21281__auto___37266 = G__37267;
continue;
} else {
}
break;
}

var argseq__21288__auto__ = ((((0) < args__21287__auto__.length))?(new cljs.core.IndexedSeq(args__21287__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__21288__auto__);
});})(g__37179__auto___37264))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37179__auto___37264){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37179__auto___37264),args);
});})(g__37179__auto___37264))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__37179__auto___37264){
return (function (seq37225){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37225));
});})(g__37179__auto___37264))
;


var g__37179__auto___37268 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__37179__auto___37268){
return (function cljs$spec$impl$gen$elements(var_args){
var args__21287__auto__ = [];
var len__21280__auto___37269 = arguments.length;
var i__21281__auto___37270 = (0);
while(true){
if((i__21281__auto___37270 < len__21280__auto___37269)){
args__21287__auto__.push((arguments[i__21281__auto___37270]));

var G__37271 = (i__21281__auto___37270 + (1));
i__21281__auto___37270 = G__37271;
continue;
} else {
}
break;
}

var argseq__21288__auto__ = ((((0) < args__21287__auto__.length))?(new cljs.core.IndexedSeq(args__21287__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__21288__auto__);
});})(g__37179__auto___37268))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37179__auto___37268){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37179__auto___37268),args);
});})(g__37179__auto___37268))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__37179__auto___37268){
return (function (seq37226){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37226));
});})(g__37179__auto___37268))
;


var g__37179__auto___37272 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__37179__auto___37272){
return (function cljs$spec$impl$gen$bind(var_args){
var args__21287__auto__ = [];
var len__21280__auto___37273 = arguments.length;
var i__21281__auto___37274 = (0);
while(true){
if((i__21281__auto___37274 < len__21280__auto___37273)){
args__21287__auto__.push((arguments[i__21281__auto___37274]));

var G__37275 = (i__21281__auto___37274 + (1));
i__21281__auto___37274 = G__37275;
continue;
} else {
}
break;
}

var argseq__21288__auto__ = ((((0) < args__21287__auto__.length))?(new cljs.core.IndexedSeq(args__21287__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__21288__auto__);
});})(g__37179__auto___37272))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37179__auto___37272){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37179__auto___37272),args);
});})(g__37179__auto___37272))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__37179__auto___37272){
return (function (seq37227){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37227));
});})(g__37179__auto___37272))
;


var g__37179__auto___37276 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__37179__auto___37276){
return (function cljs$spec$impl$gen$choose(var_args){
var args__21287__auto__ = [];
var len__21280__auto___37277 = arguments.length;
var i__21281__auto___37278 = (0);
while(true){
if((i__21281__auto___37278 < len__21280__auto___37277)){
args__21287__auto__.push((arguments[i__21281__auto___37278]));

var G__37279 = (i__21281__auto___37278 + (1));
i__21281__auto___37278 = G__37279;
continue;
} else {
}
break;
}

var argseq__21288__auto__ = ((((0) < args__21287__auto__.length))?(new cljs.core.IndexedSeq(args__21287__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__21288__auto__);
});})(g__37179__auto___37276))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37179__auto___37276){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37179__auto___37276),args);
});})(g__37179__auto___37276))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__37179__auto___37276){
return (function (seq37228){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37228));
});})(g__37179__auto___37276))
;


var g__37179__auto___37280 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__37179__auto___37280){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__21287__auto__ = [];
var len__21280__auto___37281 = arguments.length;
var i__21281__auto___37282 = (0);
while(true){
if((i__21281__auto___37282 < len__21280__auto___37281)){
args__21287__auto__.push((arguments[i__21281__auto___37282]));

var G__37283 = (i__21281__auto___37282 + (1));
i__21281__auto___37282 = G__37283;
continue;
} else {
}
break;
}

var argseq__21288__auto__ = ((((0) < args__21287__auto__.length))?(new cljs.core.IndexedSeq(args__21287__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__21288__auto__);
});})(g__37179__auto___37280))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37179__auto___37280){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37179__auto___37280),args);
});})(g__37179__auto___37280))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__37179__auto___37280){
return (function (seq37229){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37229));
});})(g__37179__auto___37280))
;


var g__37179__auto___37284 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__37179__auto___37284){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__21287__auto__ = [];
var len__21280__auto___37285 = arguments.length;
var i__21281__auto___37286 = (0);
while(true){
if((i__21281__auto___37286 < len__21280__auto___37285)){
args__21287__auto__.push((arguments[i__21281__auto___37286]));

var G__37287 = (i__21281__auto___37286 + (1));
i__21281__auto___37286 = G__37287;
continue;
} else {
}
break;
}

var argseq__21288__auto__ = ((((0) < args__21287__auto__.length))?(new cljs.core.IndexedSeq(args__21287__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__21288__auto__);
});})(g__37179__auto___37284))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37179__auto___37284){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37179__auto___37284),args);
});})(g__37179__auto___37284))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__37179__auto___37284){
return (function (seq37230){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37230));
});})(g__37179__auto___37284))
;


var g__37179__auto___37288 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__37179__auto___37288){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__21287__auto__ = [];
var len__21280__auto___37289 = arguments.length;
var i__21281__auto___37290 = (0);
while(true){
if((i__21281__auto___37290 < len__21280__auto___37289)){
args__21287__auto__.push((arguments[i__21281__auto___37290]));

var G__37291 = (i__21281__auto___37290 + (1));
i__21281__auto___37290 = G__37291;
continue;
} else {
}
break;
}

var argseq__21288__auto__ = ((((0) < args__21287__auto__.length))?(new cljs.core.IndexedSeq(args__21287__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__21288__auto__);
});})(g__37179__auto___37288))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37179__auto___37288){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37179__auto___37288),args);
});})(g__37179__auto___37288))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__37179__auto___37288){
return (function (seq37231){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37231));
});})(g__37179__auto___37288))
;


var g__37179__auto___37292 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__37179__auto___37292){
return (function cljs$spec$impl$gen$sample(var_args){
var args__21287__auto__ = [];
var len__21280__auto___37293 = arguments.length;
var i__21281__auto___37294 = (0);
while(true){
if((i__21281__auto___37294 < len__21280__auto___37293)){
args__21287__auto__.push((arguments[i__21281__auto___37294]));

var G__37295 = (i__21281__auto___37294 + (1));
i__21281__auto___37294 = G__37295;
continue;
} else {
}
break;
}

var argseq__21288__auto__ = ((((0) < args__21287__auto__.length))?(new cljs.core.IndexedSeq(args__21287__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__21288__auto__);
});})(g__37179__auto___37292))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37179__auto___37292){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37179__auto___37292),args);
});})(g__37179__auto___37292))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__37179__auto___37292){
return (function (seq37232){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37232));
});})(g__37179__auto___37292))
;


var g__37179__auto___37296 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__37179__auto___37296){
return (function cljs$spec$impl$gen$return(var_args){
var args__21287__auto__ = [];
var len__21280__auto___37297 = arguments.length;
var i__21281__auto___37298 = (0);
while(true){
if((i__21281__auto___37298 < len__21280__auto___37297)){
args__21287__auto__.push((arguments[i__21281__auto___37298]));

var G__37299 = (i__21281__auto___37298 + (1));
i__21281__auto___37298 = G__37299;
continue;
} else {
}
break;
}

var argseq__21288__auto__ = ((((0) < args__21287__auto__.length))?(new cljs.core.IndexedSeq(args__21287__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__21288__auto__);
});})(g__37179__auto___37296))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37179__auto___37296){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37179__auto___37296),args);
});})(g__37179__auto___37296))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__37179__auto___37296){
return (function (seq37233){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37233));
});})(g__37179__auto___37296))
;


var g__37179__auto___37300 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__37179__auto___37300){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__21287__auto__ = [];
var len__21280__auto___37301 = arguments.length;
var i__21281__auto___37302 = (0);
while(true){
if((i__21281__auto___37302 < len__21280__auto___37301)){
args__21287__auto__.push((arguments[i__21281__auto___37302]));

var G__37303 = (i__21281__auto___37302 + (1));
i__21281__auto___37302 = G__37303;
continue;
} else {
}
break;
}

var argseq__21288__auto__ = ((((0) < args__21287__auto__.length))?(new cljs.core.IndexedSeq(args__21287__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__21288__auto__);
});})(g__37179__auto___37300))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37179__auto___37300){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37179__auto___37300),args);
});})(g__37179__auto___37300))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__37179__auto___37300){
return (function (seq37234){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37234));
});})(g__37179__auto___37300))
;


var g__37179__auto___37304 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__37179__auto___37304){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__21287__auto__ = [];
var len__21280__auto___37305 = arguments.length;
var i__21281__auto___37306 = (0);
while(true){
if((i__21281__auto___37306 < len__21280__auto___37305)){
args__21287__auto__.push((arguments[i__21281__auto___37306]));

var G__37307 = (i__21281__auto___37306 + (1));
i__21281__auto___37306 = G__37307;
continue;
} else {
}
break;
}

var argseq__21288__auto__ = ((((0) < args__21287__auto__.length))?(new cljs.core.IndexedSeq(args__21287__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__21288__auto__);
});})(g__37179__auto___37304))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37179__auto___37304){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37179__auto___37304),args);
});})(g__37179__auto___37304))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__37179__auto___37304){
return (function (seq37235){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37235));
});})(g__37179__auto___37304))
;

var g__37192__auto___37329 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__37192__auto___37329){
return (function cljs$spec$impl$gen$any(var_args){
var args__21287__auto__ = [];
var len__21280__auto___37330 = arguments.length;
var i__21281__auto___37331 = (0);
while(true){
if((i__21281__auto___37331 < len__21280__auto___37330)){
args__21287__auto__.push((arguments[i__21281__auto___37331]));

var G__37332 = (i__21281__auto___37331 + (1));
i__21281__auto___37331 = G__37332;
continue;
} else {
}
break;
}

var argseq__21288__auto__ = ((((0) < args__21287__auto__.length))?(new cljs.core.IndexedSeq(args__21287__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__21288__auto__);
});})(g__37192__auto___37329))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37192__auto___37329){
return (function (args){
return cljs.core.deref.call(null,g__37192__auto___37329);
});})(g__37192__auto___37329))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__37192__auto___37329){
return (function (seq37308){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37308));
});})(g__37192__auto___37329))
;


var g__37192__auto___37333 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__37192__auto___37333){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__21287__auto__ = [];
var len__21280__auto___37334 = arguments.length;
var i__21281__auto___37335 = (0);
while(true){
if((i__21281__auto___37335 < len__21280__auto___37334)){
args__21287__auto__.push((arguments[i__21281__auto___37335]));

var G__37336 = (i__21281__auto___37335 + (1));
i__21281__auto___37335 = G__37336;
continue;
} else {
}
break;
}

var argseq__21288__auto__ = ((((0) < args__21287__auto__.length))?(new cljs.core.IndexedSeq(args__21287__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__21288__auto__);
});})(g__37192__auto___37333))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37192__auto___37333){
return (function (args){
return cljs.core.deref.call(null,g__37192__auto___37333);
});})(g__37192__auto___37333))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__37192__auto___37333){
return (function (seq37309){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37309));
});})(g__37192__auto___37333))
;


var g__37192__auto___37337 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__37192__auto___37337){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__21287__auto__ = [];
var len__21280__auto___37338 = arguments.length;
var i__21281__auto___37339 = (0);
while(true){
if((i__21281__auto___37339 < len__21280__auto___37338)){
args__21287__auto__.push((arguments[i__21281__auto___37339]));

var G__37340 = (i__21281__auto___37339 + (1));
i__21281__auto___37339 = G__37340;
continue;
} else {
}
break;
}

var argseq__21288__auto__ = ((((0) < args__21287__auto__.length))?(new cljs.core.IndexedSeq(args__21287__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__21288__auto__);
});})(g__37192__auto___37337))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37192__auto___37337){
return (function (args){
return cljs.core.deref.call(null,g__37192__auto___37337);
});})(g__37192__auto___37337))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__37192__auto___37337){
return (function (seq37310){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37310));
});})(g__37192__auto___37337))
;


var g__37192__auto___37341 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__37192__auto___37341){
return (function cljs$spec$impl$gen$char(var_args){
var args__21287__auto__ = [];
var len__21280__auto___37342 = arguments.length;
var i__21281__auto___37343 = (0);
while(true){
if((i__21281__auto___37343 < len__21280__auto___37342)){
args__21287__auto__.push((arguments[i__21281__auto___37343]));

var G__37344 = (i__21281__auto___37343 + (1));
i__21281__auto___37343 = G__37344;
continue;
} else {
}
break;
}

var argseq__21288__auto__ = ((((0) < args__21287__auto__.length))?(new cljs.core.IndexedSeq(args__21287__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__21288__auto__);
});})(g__37192__auto___37341))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37192__auto___37341){
return (function (args){
return cljs.core.deref.call(null,g__37192__auto___37341);
});})(g__37192__auto___37341))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__37192__auto___37341){
return (function (seq37311){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37311));
});})(g__37192__auto___37341))
;


var g__37192__auto___37345 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__37192__auto___37345){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__21287__auto__ = [];
var len__21280__auto___37346 = arguments.length;
var i__21281__auto___37347 = (0);
while(true){
if((i__21281__auto___37347 < len__21280__auto___37346)){
args__21287__auto__.push((arguments[i__21281__auto___37347]));

var G__37348 = (i__21281__auto___37347 + (1));
i__21281__auto___37347 = G__37348;
continue;
} else {
}
break;
}

var argseq__21288__auto__ = ((((0) < args__21287__auto__.length))?(new cljs.core.IndexedSeq(args__21287__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__21288__auto__);
});})(g__37192__auto___37345))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37192__auto___37345){
return (function (args){
return cljs.core.deref.call(null,g__37192__auto___37345);
});})(g__37192__auto___37345))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__37192__auto___37345){
return (function (seq37312){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37312));
});})(g__37192__auto___37345))
;


var g__37192__auto___37349 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__37192__auto___37349){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__21287__auto__ = [];
var len__21280__auto___37350 = arguments.length;
var i__21281__auto___37351 = (0);
while(true){
if((i__21281__auto___37351 < len__21280__auto___37350)){
args__21287__auto__.push((arguments[i__21281__auto___37351]));

var G__37352 = (i__21281__auto___37351 + (1));
i__21281__auto___37351 = G__37352;
continue;
} else {
}
break;
}

var argseq__21288__auto__ = ((((0) < args__21287__auto__.length))?(new cljs.core.IndexedSeq(args__21287__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__21288__auto__);
});})(g__37192__auto___37349))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37192__auto___37349){
return (function (args){
return cljs.core.deref.call(null,g__37192__auto___37349);
});})(g__37192__auto___37349))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__37192__auto___37349){
return (function (seq37313){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37313));
});})(g__37192__auto___37349))
;


var g__37192__auto___37353 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__37192__auto___37353){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__21287__auto__ = [];
var len__21280__auto___37354 = arguments.length;
var i__21281__auto___37355 = (0);
while(true){
if((i__21281__auto___37355 < len__21280__auto___37354)){
args__21287__auto__.push((arguments[i__21281__auto___37355]));

var G__37356 = (i__21281__auto___37355 + (1));
i__21281__auto___37355 = G__37356;
continue;
} else {
}
break;
}

var argseq__21288__auto__ = ((((0) < args__21287__auto__.length))?(new cljs.core.IndexedSeq(args__21287__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__21288__auto__);
});})(g__37192__auto___37353))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37192__auto___37353){
return (function (args){
return cljs.core.deref.call(null,g__37192__auto___37353);
});})(g__37192__auto___37353))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__37192__auto___37353){
return (function (seq37314){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37314));
});})(g__37192__auto___37353))
;


var g__37192__auto___37357 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__37192__auto___37357){
return (function cljs$spec$impl$gen$double(var_args){
var args__21287__auto__ = [];
var len__21280__auto___37358 = arguments.length;
var i__21281__auto___37359 = (0);
while(true){
if((i__21281__auto___37359 < len__21280__auto___37358)){
args__21287__auto__.push((arguments[i__21281__auto___37359]));

var G__37360 = (i__21281__auto___37359 + (1));
i__21281__auto___37359 = G__37360;
continue;
} else {
}
break;
}

var argseq__21288__auto__ = ((((0) < args__21287__auto__.length))?(new cljs.core.IndexedSeq(args__21287__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__21288__auto__);
});})(g__37192__auto___37357))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37192__auto___37357){
return (function (args){
return cljs.core.deref.call(null,g__37192__auto___37357);
});})(g__37192__auto___37357))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__37192__auto___37357){
return (function (seq37315){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37315));
});})(g__37192__auto___37357))
;


var g__37192__auto___37361 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__37192__auto___37361){
return (function cljs$spec$impl$gen$int(var_args){
var args__21287__auto__ = [];
var len__21280__auto___37362 = arguments.length;
var i__21281__auto___37363 = (0);
while(true){
if((i__21281__auto___37363 < len__21280__auto___37362)){
args__21287__auto__.push((arguments[i__21281__auto___37363]));

var G__37364 = (i__21281__auto___37363 + (1));
i__21281__auto___37363 = G__37364;
continue;
} else {
}
break;
}

var argseq__21288__auto__ = ((((0) < args__21287__auto__.length))?(new cljs.core.IndexedSeq(args__21287__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__21288__auto__);
});})(g__37192__auto___37361))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37192__auto___37361){
return (function (args){
return cljs.core.deref.call(null,g__37192__auto___37361);
});})(g__37192__auto___37361))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__37192__auto___37361){
return (function (seq37316){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37316));
});})(g__37192__auto___37361))
;


var g__37192__auto___37365 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__37192__auto___37365){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__21287__auto__ = [];
var len__21280__auto___37366 = arguments.length;
var i__21281__auto___37367 = (0);
while(true){
if((i__21281__auto___37367 < len__21280__auto___37366)){
args__21287__auto__.push((arguments[i__21281__auto___37367]));

var G__37368 = (i__21281__auto___37367 + (1));
i__21281__auto___37367 = G__37368;
continue;
} else {
}
break;
}

var argseq__21288__auto__ = ((((0) < args__21287__auto__.length))?(new cljs.core.IndexedSeq(args__21287__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__21288__auto__);
});})(g__37192__auto___37365))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37192__auto___37365){
return (function (args){
return cljs.core.deref.call(null,g__37192__auto___37365);
});})(g__37192__auto___37365))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__37192__auto___37365){
return (function (seq37317){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37317));
});})(g__37192__auto___37365))
;


var g__37192__auto___37369 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__37192__auto___37369){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__21287__auto__ = [];
var len__21280__auto___37370 = arguments.length;
var i__21281__auto___37371 = (0);
while(true){
if((i__21281__auto___37371 < len__21280__auto___37370)){
args__21287__auto__.push((arguments[i__21281__auto___37371]));

var G__37372 = (i__21281__auto___37371 + (1));
i__21281__auto___37371 = G__37372;
continue;
} else {
}
break;
}

var argseq__21288__auto__ = ((((0) < args__21287__auto__.length))?(new cljs.core.IndexedSeq(args__21287__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__21288__auto__);
});})(g__37192__auto___37369))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37192__auto___37369){
return (function (args){
return cljs.core.deref.call(null,g__37192__auto___37369);
});})(g__37192__auto___37369))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__37192__auto___37369){
return (function (seq37318){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37318));
});})(g__37192__auto___37369))
;


var g__37192__auto___37373 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__37192__auto___37373){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__21287__auto__ = [];
var len__21280__auto___37374 = arguments.length;
var i__21281__auto___37375 = (0);
while(true){
if((i__21281__auto___37375 < len__21280__auto___37374)){
args__21287__auto__.push((arguments[i__21281__auto___37375]));

var G__37376 = (i__21281__auto___37375 + (1));
i__21281__auto___37375 = G__37376;
continue;
} else {
}
break;
}

var argseq__21288__auto__ = ((((0) < args__21287__auto__.length))?(new cljs.core.IndexedSeq(args__21287__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__21288__auto__);
});})(g__37192__auto___37373))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37192__auto___37373){
return (function (args){
return cljs.core.deref.call(null,g__37192__auto___37373);
});})(g__37192__auto___37373))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__37192__auto___37373){
return (function (seq37319){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37319));
});})(g__37192__auto___37373))
;


var g__37192__auto___37377 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__37192__auto___37377){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__21287__auto__ = [];
var len__21280__auto___37378 = arguments.length;
var i__21281__auto___37379 = (0);
while(true){
if((i__21281__auto___37379 < len__21280__auto___37378)){
args__21287__auto__.push((arguments[i__21281__auto___37379]));

var G__37380 = (i__21281__auto___37379 + (1));
i__21281__auto___37379 = G__37380;
continue;
} else {
}
break;
}

var argseq__21288__auto__ = ((((0) < args__21287__auto__.length))?(new cljs.core.IndexedSeq(args__21287__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__21288__auto__);
});})(g__37192__auto___37377))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37192__auto___37377){
return (function (args){
return cljs.core.deref.call(null,g__37192__auto___37377);
});})(g__37192__auto___37377))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__37192__auto___37377){
return (function (seq37320){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37320));
});})(g__37192__auto___37377))
;


var g__37192__auto___37381 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__37192__auto___37381){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__21287__auto__ = [];
var len__21280__auto___37382 = arguments.length;
var i__21281__auto___37383 = (0);
while(true){
if((i__21281__auto___37383 < len__21280__auto___37382)){
args__21287__auto__.push((arguments[i__21281__auto___37383]));

var G__37384 = (i__21281__auto___37383 + (1));
i__21281__auto___37383 = G__37384;
continue;
} else {
}
break;
}

var argseq__21288__auto__ = ((((0) < args__21287__auto__.length))?(new cljs.core.IndexedSeq(args__21287__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__21288__auto__);
});})(g__37192__auto___37381))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37192__auto___37381){
return (function (args){
return cljs.core.deref.call(null,g__37192__auto___37381);
});})(g__37192__auto___37381))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__37192__auto___37381){
return (function (seq37321){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37321));
});})(g__37192__auto___37381))
;


var g__37192__auto___37385 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__37192__auto___37385){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__21287__auto__ = [];
var len__21280__auto___37386 = arguments.length;
var i__21281__auto___37387 = (0);
while(true){
if((i__21281__auto___37387 < len__21280__auto___37386)){
args__21287__auto__.push((arguments[i__21281__auto___37387]));

var G__37388 = (i__21281__auto___37387 + (1));
i__21281__auto___37387 = G__37388;
continue;
} else {
}
break;
}

var argseq__21288__auto__ = ((((0) < args__21287__auto__.length))?(new cljs.core.IndexedSeq(args__21287__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__21288__auto__);
});})(g__37192__auto___37385))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37192__auto___37385){
return (function (args){
return cljs.core.deref.call(null,g__37192__auto___37385);
});})(g__37192__auto___37385))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__37192__auto___37385){
return (function (seq37322){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37322));
});})(g__37192__auto___37385))
;


var g__37192__auto___37389 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__37192__auto___37389){
return (function cljs$spec$impl$gen$string(var_args){
var args__21287__auto__ = [];
var len__21280__auto___37390 = arguments.length;
var i__21281__auto___37391 = (0);
while(true){
if((i__21281__auto___37391 < len__21280__auto___37390)){
args__21287__auto__.push((arguments[i__21281__auto___37391]));

var G__37392 = (i__21281__auto___37391 + (1));
i__21281__auto___37391 = G__37392;
continue;
} else {
}
break;
}

var argseq__21288__auto__ = ((((0) < args__21287__auto__.length))?(new cljs.core.IndexedSeq(args__21287__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__21288__auto__);
});})(g__37192__auto___37389))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37192__auto___37389){
return (function (args){
return cljs.core.deref.call(null,g__37192__auto___37389);
});})(g__37192__auto___37389))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__37192__auto___37389){
return (function (seq37323){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37323));
});})(g__37192__auto___37389))
;


var g__37192__auto___37393 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__37192__auto___37393){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__21287__auto__ = [];
var len__21280__auto___37394 = arguments.length;
var i__21281__auto___37395 = (0);
while(true){
if((i__21281__auto___37395 < len__21280__auto___37394)){
args__21287__auto__.push((arguments[i__21281__auto___37395]));

var G__37396 = (i__21281__auto___37395 + (1));
i__21281__auto___37395 = G__37396;
continue;
} else {
}
break;
}

var argseq__21288__auto__ = ((((0) < args__21287__auto__.length))?(new cljs.core.IndexedSeq(args__21287__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__21288__auto__);
});})(g__37192__auto___37393))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37192__auto___37393){
return (function (args){
return cljs.core.deref.call(null,g__37192__auto___37393);
});})(g__37192__auto___37393))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__37192__auto___37393){
return (function (seq37324){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37324));
});})(g__37192__auto___37393))
;


var g__37192__auto___37397 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__37192__auto___37397){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__21287__auto__ = [];
var len__21280__auto___37398 = arguments.length;
var i__21281__auto___37399 = (0);
while(true){
if((i__21281__auto___37399 < len__21280__auto___37398)){
args__21287__auto__.push((arguments[i__21281__auto___37399]));

var G__37400 = (i__21281__auto___37399 + (1));
i__21281__auto___37399 = G__37400;
continue;
} else {
}
break;
}

var argseq__21288__auto__ = ((((0) < args__21287__auto__.length))?(new cljs.core.IndexedSeq(args__21287__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__21288__auto__);
});})(g__37192__auto___37397))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37192__auto___37397){
return (function (args){
return cljs.core.deref.call(null,g__37192__auto___37397);
});})(g__37192__auto___37397))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__37192__auto___37397){
return (function (seq37325){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37325));
});})(g__37192__auto___37397))
;


var g__37192__auto___37401 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__37192__auto___37401){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__21287__auto__ = [];
var len__21280__auto___37402 = arguments.length;
var i__21281__auto___37403 = (0);
while(true){
if((i__21281__auto___37403 < len__21280__auto___37402)){
args__21287__auto__.push((arguments[i__21281__auto___37403]));

var G__37404 = (i__21281__auto___37403 + (1));
i__21281__auto___37403 = G__37404;
continue;
} else {
}
break;
}

var argseq__21288__auto__ = ((((0) < args__21287__auto__.length))?(new cljs.core.IndexedSeq(args__21287__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__21288__auto__);
});})(g__37192__auto___37401))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37192__auto___37401){
return (function (args){
return cljs.core.deref.call(null,g__37192__auto___37401);
});})(g__37192__auto___37401))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__37192__auto___37401){
return (function (seq37326){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37326));
});})(g__37192__auto___37401))
;


var g__37192__auto___37405 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__37192__auto___37405){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__21287__auto__ = [];
var len__21280__auto___37406 = arguments.length;
var i__21281__auto___37407 = (0);
while(true){
if((i__21281__auto___37407 < len__21280__auto___37406)){
args__21287__auto__.push((arguments[i__21281__auto___37407]));

var G__37408 = (i__21281__auto___37407 + (1));
i__21281__auto___37407 = G__37408;
continue;
} else {
}
break;
}

var argseq__21288__auto__ = ((((0) < args__21287__auto__.length))?(new cljs.core.IndexedSeq(args__21287__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__21288__auto__);
});})(g__37192__auto___37405))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37192__auto___37405){
return (function (args){
return cljs.core.deref.call(null,g__37192__auto___37405);
});})(g__37192__auto___37405))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__37192__auto___37405){
return (function (seq37327){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37327));
});})(g__37192__auto___37405))
;


var g__37192__auto___37409 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__37192__auto___37409){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__21287__auto__ = [];
var len__21280__auto___37410 = arguments.length;
var i__21281__auto___37411 = (0);
while(true){
if((i__21281__auto___37411 < len__21280__auto___37410)){
args__21287__auto__.push((arguments[i__21281__auto___37411]));

var G__37412 = (i__21281__auto___37411 + (1));
i__21281__auto___37411 = G__37412;
continue;
} else {
}
break;
}

var argseq__21288__auto__ = ((((0) < args__21287__auto__.length))?(new cljs.core.IndexedSeq(args__21287__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__21288__auto__);
});})(g__37192__auto___37409))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37192__auto___37409){
return (function (args){
return cljs.core.deref.call(null,g__37192__auto___37409);
});})(g__37192__auto___37409))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__37192__auto___37409){
return (function (seq37328){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37328));
});})(g__37192__auto___37409))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__21287__auto__ = [];
var len__21280__auto___37415 = arguments.length;
var i__21281__auto___37416 = (0);
while(true){
if((i__21281__auto___37416 < len__21280__auto___37415)){
args__21287__auto__.push((arguments[i__21281__auto___37416]));

var G__37417 = (i__21281__auto___37416 + (1));
i__21281__auto___37416 = G__37417;
continue;
} else {
}
break;
}

var argseq__21288__auto__ = ((((0) < args__21287__auto__.length))?(new cljs.core.IndexedSeq(args__21287__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__21288__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__37413_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__37413_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq37414){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37414));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__37418_SHARP_){
return (new Date(p1__37418_SHARP_));
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