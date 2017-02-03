// Compiled by ClojureScript 1.9.229 {}
goog.provide('om_tools.dom');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('om.dom');
/**
 * Converts kebab-case to camelCase
 */
om_tools.dom.camel_case = (function om_tools$dom$camel_case(s){
return clojure.string.replace.call(null,s,/-(\w)/,cljs.core.comp.call(null,clojure.string.upper_case,cljs.core.second));
});
/**
 * Converts attributes that are kebab-case and should be camelCase
 */
om_tools.dom.opt_key_case = (function om_tools$dom$opt_key_case(attr){
if(cljs.core.truth_((function (){var or__20097__auto__ = (cljs.core.count.call(null,attr) < (5));
if(or__20097__auto__){
return or__20097__auto__;
} else {
var G__30657 = cljs.core.subs.call(null,attr,(0),(5));
switch (G__30657) {
case "data-":
case "aria-":
return true;

break;
default:
return false;

}
}
})())){
return attr;
} else {
return om_tools.dom.camel_case.call(null,attr);
}
});
/**
 * Converts aliased attributes
 */
om_tools.dom.opt_key_alias = (function om_tools$dom$opt_key_alias(opt){
var G__30660 = (((opt instanceof cljs.core.Keyword))?opt.fqn:null);
switch (G__30660) {
case "class":
return new cljs.core.Keyword(null,"className","className",-1983287057);

break;
case "for":
return new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720);

break;
default:
return opt;

}
});
/**
 * Returns potentially formatted name for DOM element attribute.
 * Converts kebab-case to camelCase.
 */
om_tools.dom.format_opt_key = (function om_tools$dom$format_opt_key(opt_key){
return cljs.core.keyword.call(null,om_tools.dom.opt_key_case.call(null,cljs.core.name.call(null,om_tools.dom.opt_key_alias.call(null,opt_key))));
});
/**
 * Returns potentially modified value for DOM element attribute.
 * Recursively formats map values (ie :style attribute)
 */
om_tools.dom.format_opt_val = (function om_tools$dom$format_opt_val(opt_val){
if(cljs.core.map_QMARK_.call(null,opt_val)){
return om_tools.dom.format_opts.call(null,opt_val);
} else {
return opt_val;

}
});
/**
 * Returns JavaScript object for React DOM attributes from opts map
 */
om_tools.dom.format_opts = (function om_tools$dom$format_opts(opts){
if(cljs.core.map_QMARK_.call(null,opts)){
return cljs.core.clj__GT_js.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__30666){
var vec__30667 = p__30666;
var k = cljs.core.nth.call(null,vec__30667,(0),null);
var v = cljs.core.nth.call(null,vec__30667,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_tools.dom.format_opt_key.call(null,k),om_tools.dom.format_opt_val.call(null,v)], null);
}),opts)));
} else {
return opts;
}
});
om_tools.dom.possible_coll_QMARK_ = (function om_tools$dom$possible_coll_QMARK_(form){
return (cljs.core.coll_QMARK_.call(null,form)) || ((form instanceof cljs.core.Symbol)) || (cljs.core.list_QMARK_.call(null,form));
});
om_tools.dom.valid_element_QMARK_ = (function om_tools$dom$valid_element_QMARK_(x){
return (function (){var or__20097__auto__ = React.isValidElement;
if(cljs.core.truth_(or__20097__auto__)){
return or__20097__auto__;
} else {
return React.isValidComponent;
}
})().call(null,x);
});
om_tools.dom.js_opts_QMARK_ = (function om_tools$dom$js_opts_QMARK_(x){
return (cljs.core.object_QMARK_.call(null,x)) && (!(om_tools.dom.valid_element_QMARK_.call(null,x)));
});
/**
 * Returns a vector of [opts children] for from first and second
 *   argument given to DOM function
 */
om_tools.dom.element_args = (function om_tools$dom$element_args(opts,children){
if((opts == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,children], null);
} else {
if(cljs.core.map_QMARK_.call(null,opts)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_tools.dom.format_opts.call(null,opts),children], null);
} else {
if(cljs.core.truth_(om_tools.dom.js_opts_QMARK_.call(null,opts))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [opts,children], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.cons.call(null,opts,children)], null);

}
}
}
});
om_tools.dom.element = (function om_tools$dom$element(ctor,opts,children){
var vec__30673 = om_tools.dom.element_args.call(null,opts,children);
var opts__$1 = cljs.core.nth.call(null,vec__30673,(0),null);
var children__$1 = cljs.core.nth.call(null,vec__30673,(1),null);
return cljs.core.apply.call(null,ctor,cljs.core.flatten.call(null,cljs.core.cons.call(null,opts__$1,children__$1)));
});
om_tools.dom.a = (function om_tools$dom$a(var_args){
var args30676 = [];
var len__21280__auto___31321 = arguments.length;
var i__21281__auto___31322 = (0);
while(true){
if((i__21281__auto___31322 < len__21280__auto___31321)){
args30676.push((arguments[i__21281__auto___31322]));

var G__31323 = (i__21281__auto___31322 + (1));
i__21281__auto___31322 = G__31323;
continue;
} else {
}
break;
}

var G__30680 = args30676.length;
switch (G__30680) {
case 0:
return om_tools.dom.a.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args30676.slice((1)),(0),null));
return om_tools.dom.a.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.a.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.a,null,null);
});

om_tools.dom.a.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.a,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.a.cljs$lang$applyTo = (function (seq30677){
var G__30678 = cljs.core.first.call(null,seq30677);
var seq30677__$1 = cljs.core.next.call(null,seq30677);
return om_tools.dom.a.cljs$core$IFn$_invoke$arity$variadic(G__30678,seq30677__$1);
});

om_tools.dom.a.cljs$lang$maxFixedArity = (1);


om_tools.dom.abbr = (function om_tools$dom$abbr(var_args){
var args30681 = [];
var len__21280__auto___31325 = arguments.length;
var i__21281__auto___31326 = (0);
while(true){
if((i__21281__auto___31326 < len__21280__auto___31325)){
args30681.push((arguments[i__21281__auto___31326]));

var G__31327 = (i__21281__auto___31326 + (1));
i__21281__auto___31326 = G__31327;
continue;
} else {
}
break;
}

var G__30685 = args30681.length;
switch (G__30685) {
case 0:
return om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args30681.slice((1)),(0),null));
return om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.abbr,null,null);
});

om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.abbr,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.abbr.cljs$lang$applyTo = (function (seq30682){
var G__30683 = cljs.core.first.call(null,seq30682);
var seq30682__$1 = cljs.core.next.call(null,seq30682);
return om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$variadic(G__30683,seq30682__$1);
});

om_tools.dom.abbr.cljs$lang$maxFixedArity = (1);


om_tools.dom.address = (function om_tools$dom$address(var_args){
var args30686 = [];
var len__21280__auto___31329 = arguments.length;
var i__21281__auto___31330 = (0);
while(true){
if((i__21281__auto___31330 < len__21280__auto___31329)){
args30686.push((arguments[i__21281__auto___31330]));

var G__31331 = (i__21281__auto___31330 + (1));
i__21281__auto___31330 = G__31331;
continue;
} else {
}
break;
}

var G__30690 = args30686.length;
switch (G__30690) {
case 0:
return om_tools.dom.address.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args30686.slice((1)),(0),null));
return om_tools.dom.address.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.address.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.address,null,null);
});

om_tools.dom.address.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.address,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.address.cljs$lang$applyTo = (function (seq30687){
var G__30688 = cljs.core.first.call(null,seq30687);
var seq30687__$1 = cljs.core.next.call(null,seq30687);
return om_tools.dom.address.cljs$core$IFn$_invoke$arity$variadic(G__30688,seq30687__$1);
});

om_tools.dom.address.cljs$lang$maxFixedArity = (1);


om_tools.dom.area = (function om_tools$dom$area(var_args){
var args30691 = [];
var len__21280__auto___31333 = arguments.length;
var i__21281__auto___31334 = (0);
while(true){
if((i__21281__auto___31334 < len__21280__auto___31333)){
args30691.push((arguments[i__21281__auto___31334]));

var G__31335 = (i__21281__auto___31334 + (1));
i__21281__auto___31334 = G__31335;
continue;
} else {
}
break;
}

var G__30695 = args30691.length;
switch (G__30695) {
case 0:
return om_tools.dom.area.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args30691.slice((1)),(0),null));
return om_tools.dom.area.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.area.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.area,null,null);
});

om_tools.dom.area.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.area,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.area.cljs$lang$applyTo = (function (seq30692){
var G__30693 = cljs.core.first.call(null,seq30692);
var seq30692__$1 = cljs.core.next.call(null,seq30692);
return om_tools.dom.area.cljs$core$IFn$_invoke$arity$variadic(G__30693,seq30692__$1);
});

om_tools.dom.area.cljs$lang$maxFixedArity = (1);


om_tools.dom.article = (function om_tools$dom$article(var_args){
var args30696 = [];
var len__21280__auto___31337 = arguments.length;
var i__21281__auto___31338 = (0);
while(true){
if((i__21281__auto___31338 < len__21280__auto___31337)){
args30696.push((arguments[i__21281__auto___31338]));

var G__31339 = (i__21281__auto___31338 + (1));
i__21281__auto___31338 = G__31339;
continue;
} else {
}
break;
}

var G__30700 = args30696.length;
switch (G__30700) {
case 0:
return om_tools.dom.article.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args30696.slice((1)),(0),null));
return om_tools.dom.article.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.article.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.article,null,null);
});

om_tools.dom.article.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.article,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.article.cljs$lang$applyTo = (function (seq30697){
var G__30698 = cljs.core.first.call(null,seq30697);
var seq30697__$1 = cljs.core.next.call(null,seq30697);
return om_tools.dom.article.cljs$core$IFn$_invoke$arity$variadic(G__30698,seq30697__$1);
});

om_tools.dom.article.cljs$lang$maxFixedArity = (1);


om_tools.dom.aside = (function om_tools$dom$aside(var_args){
var args30701 = [];
var len__21280__auto___31341 = arguments.length;
var i__21281__auto___31342 = (0);
while(true){
if((i__21281__auto___31342 < len__21280__auto___31341)){
args30701.push((arguments[i__21281__auto___31342]));

var G__31343 = (i__21281__auto___31342 + (1));
i__21281__auto___31342 = G__31343;
continue;
} else {
}
break;
}

var G__30705 = args30701.length;
switch (G__30705) {
case 0:
return om_tools.dom.aside.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args30701.slice((1)),(0),null));
return om_tools.dom.aside.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.aside.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.aside,null,null);
});

om_tools.dom.aside.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.aside,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.aside.cljs$lang$applyTo = (function (seq30702){
var G__30703 = cljs.core.first.call(null,seq30702);
var seq30702__$1 = cljs.core.next.call(null,seq30702);
return om_tools.dom.aside.cljs$core$IFn$_invoke$arity$variadic(G__30703,seq30702__$1);
});

om_tools.dom.aside.cljs$lang$maxFixedArity = (1);


om_tools.dom.audio = (function om_tools$dom$audio(var_args){
var args30706 = [];
var len__21280__auto___31345 = arguments.length;
var i__21281__auto___31346 = (0);
while(true){
if((i__21281__auto___31346 < len__21280__auto___31345)){
args30706.push((arguments[i__21281__auto___31346]));

var G__31347 = (i__21281__auto___31346 + (1));
i__21281__auto___31346 = G__31347;
continue;
} else {
}
break;
}

var G__30710 = args30706.length;
switch (G__30710) {
case 0:
return om_tools.dom.audio.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args30706.slice((1)),(0),null));
return om_tools.dom.audio.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.audio.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.audio,null,null);
});

om_tools.dom.audio.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.audio,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.audio.cljs$lang$applyTo = (function (seq30707){
var G__30708 = cljs.core.first.call(null,seq30707);
var seq30707__$1 = cljs.core.next.call(null,seq30707);
return om_tools.dom.audio.cljs$core$IFn$_invoke$arity$variadic(G__30708,seq30707__$1);
});

om_tools.dom.audio.cljs$lang$maxFixedArity = (1);


om_tools.dom.b = (function om_tools$dom$b(var_args){
var args30711 = [];
var len__21280__auto___31349 = arguments.length;
var i__21281__auto___31350 = (0);
while(true){
if((i__21281__auto___31350 < len__21280__auto___31349)){
args30711.push((arguments[i__21281__auto___31350]));

var G__31351 = (i__21281__auto___31350 + (1));
i__21281__auto___31350 = G__31351;
continue;
} else {
}
break;
}

var G__30715 = args30711.length;
switch (G__30715) {
case 0:
return om_tools.dom.b.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args30711.slice((1)),(0),null));
return om_tools.dom.b.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.b.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.b,null,null);
});

om_tools.dom.b.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.b,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.b.cljs$lang$applyTo = (function (seq30712){
var G__30713 = cljs.core.first.call(null,seq30712);
var seq30712__$1 = cljs.core.next.call(null,seq30712);
return om_tools.dom.b.cljs$core$IFn$_invoke$arity$variadic(G__30713,seq30712__$1);
});

om_tools.dom.b.cljs$lang$maxFixedArity = (1);


om_tools.dom.base = (function om_tools$dom$base(var_args){
var args30716 = [];
var len__21280__auto___31353 = arguments.length;
var i__21281__auto___31354 = (0);
while(true){
if((i__21281__auto___31354 < len__21280__auto___31353)){
args30716.push((arguments[i__21281__auto___31354]));

var G__31355 = (i__21281__auto___31354 + (1));
i__21281__auto___31354 = G__31355;
continue;
} else {
}
break;
}

var G__30720 = args30716.length;
switch (G__30720) {
case 0:
return om_tools.dom.base.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args30716.slice((1)),(0),null));
return om_tools.dom.base.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.base.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.base,null,null);
});

om_tools.dom.base.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.base,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.base.cljs$lang$applyTo = (function (seq30717){
var G__30718 = cljs.core.first.call(null,seq30717);
var seq30717__$1 = cljs.core.next.call(null,seq30717);
return om_tools.dom.base.cljs$core$IFn$_invoke$arity$variadic(G__30718,seq30717__$1);
});

om_tools.dom.base.cljs$lang$maxFixedArity = (1);


om_tools.dom.bdi = (function om_tools$dom$bdi(var_args){
var args30721 = [];
var len__21280__auto___31357 = arguments.length;
var i__21281__auto___31358 = (0);
while(true){
if((i__21281__auto___31358 < len__21280__auto___31357)){
args30721.push((arguments[i__21281__auto___31358]));

var G__31359 = (i__21281__auto___31358 + (1));
i__21281__auto___31358 = G__31359;
continue;
} else {
}
break;
}

var G__30725 = args30721.length;
switch (G__30725) {
case 0:
return om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args30721.slice((1)),(0),null));
return om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.bdi,null,null);
});

om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.bdi,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.bdi.cljs$lang$applyTo = (function (seq30722){
var G__30723 = cljs.core.first.call(null,seq30722);
var seq30722__$1 = cljs.core.next.call(null,seq30722);
return om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$variadic(G__30723,seq30722__$1);
});

om_tools.dom.bdi.cljs$lang$maxFixedArity = (1);


om_tools.dom.bdo = (function om_tools$dom$bdo(var_args){
var args30726 = [];
var len__21280__auto___31361 = arguments.length;
var i__21281__auto___31362 = (0);
while(true){
if((i__21281__auto___31362 < len__21280__auto___31361)){
args30726.push((arguments[i__21281__auto___31362]));

var G__31363 = (i__21281__auto___31362 + (1));
i__21281__auto___31362 = G__31363;
continue;
} else {
}
break;
}

var G__30730 = args30726.length;
switch (G__30730) {
case 0:
return om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args30726.slice((1)),(0),null));
return om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.bdo,null,null);
});

om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.bdo,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.bdo.cljs$lang$applyTo = (function (seq30727){
var G__30728 = cljs.core.first.call(null,seq30727);
var seq30727__$1 = cljs.core.next.call(null,seq30727);
return om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$variadic(G__30728,seq30727__$1);
});

om_tools.dom.bdo.cljs$lang$maxFixedArity = (1);


om_tools.dom.big = (function om_tools$dom$big(var_args){
var args30731 = [];
var len__21280__auto___31365 = arguments.length;
var i__21281__auto___31366 = (0);
while(true){
if((i__21281__auto___31366 < len__21280__auto___31365)){
args30731.push((arguments[i__21281__auto___31366]));

var G__31367 = (i__21281__auto___31366 + (1));
i__21281__auto___31366 = G__31367;
continue;
} else {
}
break;
}

var G__30735 = args30731.length;
switch (G__30735) {
case 0:
return om_tools.dom.big.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args30731.slice((1)),(0),null));
return om_tools.dom.big.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.big.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.big,null,null);
});

om_tools.dom.big.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.big,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.big.cljs$lang$applyTo = (function (seq30732){
var G__30733 = cljs.core.first.call(null,seq30732);
var seq30732__$1 = cljs.core.next.call(null,seq30732);
return om_tools.dom.big.cljs$core$IFn$_invoke$arity$variadic(G__30733,seq30732__$1);
});

om_tools.dom.big.cljs$lang$maxFixedArity = (1);


om_tools.dom.blockquote = (function om_tools$dom$blockquote(var_args){
var args30736 = [];
var len__21280__auto___31369 = arguments.length;
var i__21281__auto___31370 = (0);
while(true){
if((i__21281__auto___31370 < len__21280__auto___31369)){
args30736.push((arguments[i__21281__auto___31370]));

var G__31371 = (i__21281__auto___31370 + (1));
i__21281__auto___31370 = G__31371;
continue;
} else {
}
break;
}

var G__30740 = args30736.length;
switch (G__30740) {
case 0:
return om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args30736.slice((1)),(0),null));
return om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.blockquote,null,null);
});

om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.blockquote,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.blockquote.cljs$lang$applyTo = (function (seq30737){
var G__30738 = cljs.core.first.call(null,seq30737);
var seq30737__$1 = cljs.core.next.call(null,seq30737);
return om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic(G__30738,seq30737__$1);
});

om_tools.dom.blockquote.cljs$lang$maxFixedArity = (1);


om_tools.dom.body = (function om_tools$dom$body(var_args){
var args30741 = [];
var len__21280__auto___31373 = arguments.length;
var i__21281__auto___31374 = (0);
while(true){
if((i__21281__auto___31374 < len__21280__auto___31373)){
args30741.push((arguments[i__21281__auto___31374]));

var G__31375 = (i__21281__auto___31374 + (1));
i__21281__auto___31374 = G__31375;
continue;
} else {
}
break;
}

var G__30745 = args30741.length;
switch (G__30745) {
case 0:
return om_tools.dom.body.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args30741.slice((1)),(0),null));
return om_tools.dom.body.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.body.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.body,null,null);
});

om_tools.dom.body.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.body,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.body.cljs$lang$applyTo = (function (seq30742){
var G__30743 = cljs.core.first.call(null,seq30742);
var seq30742__$1 = cljs.core.next.call(null,seq30742);
return om_tools.dom.body.cljs$core$IFn$_invoke$arity$variadic(G__30743,seq30742__$1);
});

om_tools.dom.body.cljs$lang$maxFixedArity = (1);


om_tools.dom.br = (function om_tools$dom$br(var_args){
var args30746 = [];
var len__21280__auto___31377 = arguments.length;
var i__21281__auto___31378 = (0);
while(true){
if((i__21281__auto___31378 < len__21280__auto___31377)){
args30746.push((arguments[i__21281__auto___31378]));

var G__31379 = (i__21281__auto___31378 + (1));
i__21281__auto___31378 = G__31379;
continue;
} else {
}
break;
}

var G__30750 = args30746.length;
switch (G__30750) {
case 0:
return om_tools.dom.br.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args30746.slice((1)),(0),null));
return om_tools.dom.br.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.br.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.br,null,null);
});

om_tools.dom.br.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.br,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.br.cljs$lang$applyTo = (function (seq30747){
var G__30748 = cljs.core.first.call(null,seq30747);
var seq30747__$1 = cljs.core.next.call(null,seq30747);
return om_tools.dom.br.cljs$core$IFn$_invoke$arity$variadic(G__30748,seq30747__$1);
});

om_tools.dom.br.cljs$lang$maxFixedArity = (1);


om_tools.dom.button = (function om_tools$dom$button(var_args){
var args30751 = [];
var len__21280__auto___31381 = arguments.length;
var i__21281__auto___31382 = (0);
while(true){
if((i__21281__auto___31382 < len__21280__auto___31381)){
args30751.push((arguments[i__21281__auto___31382]));

var G__31383 = (i__21281__auto___31382 + (1));
i__21281__auto___31382 = G__31383;
continue;
} else {
}
break;
}

var G__30755 = args30751.length;
switch (G__30755) {
case 0:
return om_tools.dom.button.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args30751.slice((1)),(0),null));
return om_tools.dom.button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.button.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.button,null,null);
});

om_tools.dom.button.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.button,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.button.cljs$lang$applyTo = (function (seq30752){
var G__30753 = cljs.core.first.call(null,seq30752);
var seq30752__$1 = cljs.core.next.call(null,seq30752);
return om_tools.dom.button.cljs$core$IFn$_invoke$arity$variadic(G__30753,seq30752__$1);
});

om_tools.dom.button.cljs$lang$maxFixedArity = (1);


om_tools.dom.canvas = (function om_tools$dom$canvas(var_args){
var args30756 = [];
var len__21280__auto___31385 = arguments.length;
var i__21281__auto___31386 = (0);
while(true){
if((i__21281__auto___31386 < len__21280__auto___31385)){
args30756.push((arguments[i__21281__auto___31386]));

var G__31387 = (i__21281__auto___31386 + (1));
i__21281__auto___31386 = G__31387;
continue;
} else {
}
break;
}

var G__30760 = args30756.length;
switch (G__30760) {
case 0:
return om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args30756.slice((1)),(0),null));
return om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.canvas,null,null);
});

om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.canvas,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.canvas.cljs$lang$applyTo = (function (seq30757){
var G__30758 = cljs.core.first.call(null,seq30757);
var seq30757__$1 = cljs.core.next.call(null,seq30757);
return om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$variadic(G__30758,seq30757__$1);
});

om_tools.dom.canvas.cljs$lang$maxFixedArity = (1);


om_tools.dom.caption = (function om_tools$dom$caption(var_args){
var args30761 = [];
var len__21280__auto___31389 = arguments.length;
var i__21281__auto___31390 = (0);
while(true){
if((i__21281__auto___31390 < len__21280__auto___31389)){
args30761.push((arguments[i__21281__auto___31390]));

var G__31391 = (i__21281__auto___31390 + (1));
i__21281__auto___31390 = G__31391;
continue;
} else {
}
break;
}

var G__30765 = args30761.length;
switch (G__30765) {
case 0:
return om_tools.dom.caption.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args30761.slice((1)),(0),null));
return om_tools.dom.caption.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.caption.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.caption,null,null);
});

om_tools.dom.caption.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.caption,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.caption.cljs$lang$applyTo = (function (seq30762){
var G__30763 = cljs.core.first.call(null,seq30762);
var seq30762__$1 = cljs.core.next.call(null,seq30762);
return om_tools.dom.caption.cljs$core$IFn$_invoke$arity$variadic(G__30763,seq30762__$1);
});

om_tools.dom.caption.cljs$lang$maxFixedArity = (1);


om_tools.dom.cite = (function om_tools$dom$cite(var_args){
var args30766 = [];
var len__21280__auto___31393 = arguments.length;
var i__21281__auto___31394 = (0);
while(true){
if((i__21281__auto___31394 < len__21280__auto___31393)){
args30766.push((arguments[i__21281__auto___31394]));

var G__31395 = (i__21281__auto___31394 + (1));
i__21281__auto___31394 = G__31395;
continue;
} else {
}
break;
}

var G__30770 = args30766.length;
switch (G__30770) {
case 0:
return om_tools.dom.cite.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args30766.slice((1)),(0),null));
return om_tools.dom.cite.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.cite.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.cite,null,null);
});

om_tools.dom.cite.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.cite,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.cite.cljs$lang$applyTo = (function (seq30767){
var G__30768 = cljs.core.first.call(null,seq30767);
var seq30767__$1 = cljs.core.next.call(null,seq30767);
return om_tools.dom.cite.cljs$core$IFn$_invoke$arity$variadic(G__30768,seq30767__$1);
});

om_tools.dom.cite.cljs$lang$maxFixedArity = (1);


om_tools.dom.code = (function om_tools$dom$code(var_args){
var args30771 = [];
var len__21280__auto___31397 = arguments.length;
var i__21281__auto___31398 = (0);
while(true){
if((i__21281__auto___31398 < len__21280__auto___31397)){
args30771.push((arguments[i__21281__auto___31398]));

var G__31399 = (i__21281__auto___31398 + (1));
i__21281__auto___31398 = G__31399;
continue;
} else {
}
break;
}

var G__30775 = args30771.length;
switch (G__30775) {
case 0:
return om_tools.dom.code.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args30771.slice((1)),(0),null));
return om_tools.dom.code.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.code.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.code,null,null);
});

om_tools.dom.code.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.code,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.code.cljs$lang$applyTo = (function (seq30772){
var G__30773 = cljs.core.first.call(null,seq30772);
var seq30772__$1 = cljs.core.next.call(null,seq30772);
return om_tools.dom.code.cljs$core$IFn$_invoke$arity$variadic(G__30773,seq30772__$1);
});

om_tools.dom.code.cljs$lang$maxFixedArity = (1);


om_tools.dom.col = (function om_tools$dom$col(var_args){
var args30776 = [];
var len__21280__auto___31401 = arguments.length;
var i__21281__auto___31402 = (0);
while(true){
if((i__21281__auto___31402 < len__21280__auto___31401)){
args30776.push((arguments[i__21281__auto___31402]));

var G__31403 = (i__21281__auto___31402 + (1));
i__21281__auto___31402 = G__31403;
continue;
} else {
}
break;
}

var G__30780 = args30776.length;
switch (G__30780) {
case 0:
return om_tools.dom.col.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args30776.slice((1)),(0),null));
return om_tools.dom.col.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.col.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.col,null,null);
});

om_tools.dom.col.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.col,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.col.cljs$lang$applyTo = (function (seq30777){
var G__30778 = cljs.core.first.call(null,seq30777);
var seq30777__$1 = cljs.core.next.call(null,seq30777);
return om_tools.dom.col.cljs$core$IFn$_invoke$arity$variadic(G__30778,seq30777__$1);
});

om_tools.dom.col.cljs$lang$maxFixedArity = (1);


om_tools.dom.colgroup = (function om_tools$dom$colgroup(var_args){
var args30781 = [];
var len__21280__auto___31405 = arguments.length;
var i__21281__auto___31406 = (0);
while(true){
if((i__21281__auto___31406 < len__21280__auto___31405)){
args30781.push((arguments[i__21281__auto___31406]));

var G__31407 = (i__21281__auto___31406 + (1));
i__21281__auto___31406 = G__31407;
continue;
} else {
}
break;
}

var G__30785 = args30781.length;
switch (G__30785) {
case 0:
return om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args30781.slice((1)),(0),null));
return om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.colgroup,null,null);
});

om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.colgroup,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.colgroup.cljs$lang$applyTo = (function (seq30782){
var G__30783 = cljs.core.first.call(null,seq30782);
var seq30782__$1 = cljs.core.next.call(null,seq30782);
return om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic(G__30783,seq30782__$1);
});

om_tools.dom.colgroup.cljs$lang$maxFixedArity = (1);


om_tools.dom.data = (function om_tools$dom$data(var_args){
var args30786 = [];
var len__21280__auto___31409 = arguments.length;
var i__21281__auto___31410 = (0);
while(true){
if((i__21281__auto___31410 < len__21280__auto___31409)){
args30786.push((arguments[i__21281__auto___31410]));

var G__31411 = (i__21281__auto___31410 + (1));
i__21281__auto___31410 = G__31411;
continue;
} else {
}
break;
}

var G__30790 = args30786.length;
switch (G__30790) {
case 0:
return om_tools.dom.data.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args30786.slice((1)),(0),null));
return om_tools.dom.data.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.data.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.data,null,null);
});

om_tools.dom.data.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.data,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.data.cljs$lang$applyTo = (function (seq30787){
var G__30788 = cljs.core.first.call(null,seq30787);
var seq30787__$1 = cljs.core.next.call(null,seq30787);
return om_tools.dom.data.cljs$core$IFn$_invoke$arity$variadic(G__30788,seq30787__$1);
});

om_tools.dom.data.cljs$lang$maxFixedArity = (1);


om_tools.dom.datalist = (function om_tools$dom$datalist(var_args){
var args30791 = [];
var len__21280__auto___31413 = arguments.length;
var i__21281__auto___31414 = (0);
while(true){
if((i__21281__auto___31414 < len__21280__auto___31413)){
args30791.push((arguments[i__21281__auto___31414]));

var G__31415 = (i__21281__auto___31414 + (1));
i__21281__auto___31414 = G__31415;
continue;
} else {
}
break;
}

var G__30795 = args30791.length;
switch (G__30795) {
case 0:
return om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args30791.slice((1)),(0),null));
return om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.datalist,null,null);
});

om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.datalist,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.datalist.cljs$lang$applyTo = (function (seq30792){
var G__30793 = cljs.core.first.call(null,seq30792);
var seq30792__$1 = cljs.core.next.call(null,seq30792);
return om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$variadic(G__30793,seq30792__$1);
});

om_tools.dom.datalist.cljs$lang$maxFixedArity = (1);


om_tools.dom.dd = (function om_tools$dom$dd(var_args){
var args30796 = [];
var len__21280__auto___31417 = arguments.length;
var i__21281__auto___31418 = (0);
while(true){
if((i__21281__auto___31418 < len__21280__auto___31417)){
args30796.push((arguments[i__21281__auto___31418]));

var G__31419 = (i__21281__auto___31418 + (1));
i__21281__auto___31418 = G__31419;
continue;
} else {
}
break;
}

var G__30800 = args30796.length;
switch (G__30800) {
case 0:
return om_tools.dom.dd.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args30796.slice((1)),(0),null));
return om_tools.dom.dd.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.dd.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dd,null,null);
});

om_tools.dom.dd.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.dd,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.dd.cljs$lang$applyTo = (function (seq30797){
var G__30798 = cljs.core.first.call(null,seq30797);
var seq30797__$1 = cljs.core.next.call(null,seq30797);
return om_tools.dom.dd.cljs$core$IFn$_invoke$arity$variadic(G__30798,seq30797__$1);
});

om_tools.dom.dd.cljs$lang$maxFixedArity = (1);


om_tools.dom.del = (function om_tools$dom$del(var_args){
var args30801 = [];
var len__21280__auto___31421 = arguments.length;
var i__21281__auto___31422 = (0);
while(true){
if((i__21281__auto___31422 < len__21280__auto___31421)){
args30801.push((arguments[i__21281__auto___31422]));

var G__31423 = (i__21281__auto___31422 + (1));
i__21281__auto___31422 = G__31423;
continue;
} else {
}
break;
}

var G__30805 = args30801.length;
switch (G__30805) {
case 0:
return om_tools.dom.del.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args30801.slice((1)),(0),null));
return om_tools.dom.del.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.del.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.del,null,null);
});

om_tools.dom.del.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.del,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.del.cljs$lang$applyTo = (function (seq30802){
var G__30803 = cljs.core.first.call(null,seq30802);
var seq30802__$1 = cljs.core.next.call(null,seq30802);
return om_tools.dom.del.cljs$core$IFn$_invoke$arity$variadic(G__30803,seq30802__$1);
});

om_tools.dom.del.cljs$lang$maxFixedArity = (1);


om_tools.dom.details = (function om_tools$dom$details(var_args){
var args30806 = [];
var len__21280__auto___31425 = arguments.length;
var i__21281__auto___31426 = (0);
while(true){
if((i__21281__auto___31426 < len__21280__auto___31425)){
args30806.push((arguments[i__21281__auto___31426]));

var G__31427 = (i__21281__auto___31426 + (1));
i__21281__auto___31426 = G__31427;
continue;
} else {
}
break;
}

var G__30810 = args30806.length;
switch (G__30810) {
case 0:
return om_tools.dom.details.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args30806.slice((1)),(0),null));
return om_tools.dom.details.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.details.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.details,null,null);
});

om_tools.dom.details.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.details,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.details.cljs$lang$applyTo = (function (seq30807){
var G__30808 = cljs.core.first.call(null,seq30807);
var seq30807__$1 = cljs.core.next.call(null,seq30807);
return om_tools.dom.details.cljs$core$IFn$_invoke$arity$variadic(G__30808,seq30807__$1);
});

om_tools.dom.details.cljs$lang$maxFixedArity = (1);


om_tools.dom.dfn = (function om_tools$dom$dfn(var_args){
var args30811 = [];
var len__21280__auto___31429 = arguments.length;
var i__21281__auto___31430 = (0);
while(true){
if((i__21281__auto___31430 < len__21280__auto___31429)){
args30811.push((arguments[i__21281__auto___31430]));

var G__31431 = (i__21281__auto___31430 + (1));
i__21281__auto___31430 = G__31431;
continue;
} else {
}
break;
}

var G__30815 = args30811.length;
switch (G__30815) {
case 0:
return om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args30811.slice((1)),(0),null));
return om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dfn,null,null);
});

om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.dfn,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.dfn.cljs$lang$applyTo = (function (seq30812){
var G__30813 = cljs.core.first.call(null,seq30812);
var seq30812__$1 = cljs.core.next.call(null,seq30812);
return om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$variadic(G__30813,seq30812__$1);
});

om_tools.dom.dfn.cljs$lang$maxFixedArity = (1);


om_tools.dom.dialog = (function om_tools$dom$dialog(var_args){
var args30816 = [];
var len__21280__auto___31433 = arguments.length;
var i__21281__auto___31434 = (0);
while(true){
if((i__21281__auto___31434 < len__21280__auto___31433)){
args30816.push((arguments[i__21281__auto___31434]));

var G__31435 = (i__21281__auto___31434 + (1));
i__21281__auto___31434 = G__31435;
continue;
} else {
}
break;
}

var G__30820 = args30816.length;
switch (G__30820) {
case 0:
return om_tools.dom.dialog.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args30816.slice((1)),(0),null));
return om_tools.dom.dialog.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.dialog.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dialog,null,null);
});

om_tools.dom.dialog.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.dialog,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.dialog.cljs$lang$applyTo = (function (seq30817){
var G__30818 = cljs.core.first.call(null,seq30817);
var seq30817__$1 = cljs.core.next.call(null,seq30817);
return om_tools.dom.dialog.cljs$core$IFn$_invoke$arity$variadic(G__30818,seq30817__$1);
});

om_tools.dom.dialog.cljs$lang$maxFixedArity = (1);


om_tools.dom.div = (function om_tools$dom$div(var_args){
var args30821 = [];
var len__21280__auto___31437 = arguments.length;
var i__21281__auto___31438 = (0);
while(true){
if((i__21281__auto___31438 < len__21280__auto___31437)){
args30821.push((arguments[i__21281__auto___31438]));

var G__31439 = (i__21281__auto___31438 + (1));
i__21281__auto___31438 = G__31439;
continue;
} else {
}
break;
}

var G__30825 = args30821.length;
switch (G__30825) {
case 0:
return om_tools.dom.div.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args30821.slice((1)),(0),null));
return om_tools.dom.div.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.div.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.div,null,null);
});

om_tools.dom.div.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.div,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.div.cljs$lang$applyTo = (function (seq30822){
var G__30823 = cljs.core.first.call(null,seq30822);
var seq30822__$1 = cljs.core.next.call(null,seq30822);
return om_tools.dom.div.cljs$core$IFn$_invoke$arity$variadic(G__30823,seq30822__$1);
});

om_tools.dom.div.cljs$lang$maxFixedArity = (1);


om_tools.dom.dl = (function om_tools$dom$dl(var_args){
var args30826 = [];
var len__21280__auto___31441 = arguments.length;
var i__21281__auto___31442 = (0);
while(true){
if((i__21281__auto___31442 < len__21280__auto___31441)){
args30826.push((arguments[i__21281__auto___31442]));

var G__31443 = (i__21281__auto___31442 + (1));
i__21281__auto___31442 = G__31443;
continue;
} else {
}
break;
}

var G__30830 = args30826.length;
switch (G__30830) {
case 0:
return om_tools.dom.dl.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args30826.slice((1)),(0),null));
return om_tools.dom.dl.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.dl.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dl,null,null);
});

om_tools.dom.dl.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.dl,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.dl.cljs$lang$applyTo = (function (seq30827){
var G__30828 = cljs.core.first.call(null,seq30827);
var seq30827__$1 = cljs.core.next.call(null,seq30827);
return om_tools.dom.dl.cljs$core$IFn$_invoke$arity$variadic(G__30828,seq30827__$1);
});

om_tools.dom.dl.cljs$lang$maxFixedArity = (1);


om_tools.dom.dt = (function om_tools$dom$dt(var_args){
var args30831 = [];
var len__21280__auto___31445 = arguments.length;
var i__21281__auto___31446 = (0);
while(true){
if((i__21281__auto___31446 < len__21280__auto___31445)){
args30831.push((arguments[i__21281__auto___31446]));

var G__31447 = (i__21281__auto___31446 + (1));
i__21281__auto___31446 = G__31447;
continue;
} else {
}
break;
}

var G__30835 = args30831.length;
switch (G__30835) {
case 0:
return om_tools.dom.dt.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args30831.slice((1)),(0),null));
return om_tools.dom.dt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.dt.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dt,null,null);
});

om_tools.dom.dt.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.dt,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.dt.cljs$lang$applyTo = (function (seq30832){
var G__30833 = cljs.core.first.call(null,seq30832);
var seq30832__$1 = cljs.core.next.call(null,seq30832);
return om_tools.dom.dt.cljs$core$IFn$_invoke$arity$variadic(G__30833,seq30832__$1);
});

om_tools.dom.dt.cljs$lang$maxFixedArity = (1);


om_tools.dom.em = (function om_tools$dom$em(var_args){
var args30841 = [];
var len__21280__auto___31449 = arguments.length;
var i__21281__auto___31450 = (0);
while(true){
if((i__21281__auto___31450 < len__21280__auto___31449)){
args30841.push((arguments[i__21281__auto___31450]));

var G__31451 = (i__21281__auto___31450 + (1));
i__21281__auto___31450 = G__31451;
continue;
} else {
}
break;
}

var G__30845 = args30841.length;
switch (G__30845) {
case 0:
return om_tools.dom.em.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args30841.slice((1)),(0),null));
return om_tools.dom.em.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.em.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.em,null,null);
});

om_tools.dom.em.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.em,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.em.cljs$lang$applyTo = (function (seq30842){
var G__30843 = cljs.core.first.call(null,seq30842);
var seq30842__$1 = cljs.core.next.call(null,seq30842);
return om_tools.dom.em.cljs$core$IFn$_invoke$arity$variadic(G__30843,seq30842__$1);
});

om_tools.dom.em.cljs$lang$maxFixedArity = (1);


om_tools.dom.embed = (function om_tools$dom$embed(var_args){
var args30846 = [];
var len__21280__auto___31453 = arguments.length;
var i__21281__auto___31454 = (0);
while(true){
if((i__21281__auto___31454 < len__21280__auto___31453)){
args30846.push((arguments[i__21281__auto___31454]));

var G__31455 = (i__21281__auto___31454 + (1));
i__21281__auto___31454 = G__31455;
continue;
} else {
}
break;
}

var G__30850 = args30846.length;
switch (G__30850) {
case 0:
return om_tools.dom.embed.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args30846.slice((1)),(0),null));
return om_tools.dom.embed.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.embed.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.embed,null,null);
});

om_tools.dom.embed.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.embed,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.embed.cljs$lang$applyTo = (function (seq30847){
var G__30848 = cljs.core.first.call(null,seq30847);
var seq30847__$1 = cljs.core.next.call(null,seq30847);
return om_tools.dom.embed.cljs$core$IFn$_invoke$arity$variadic(G__30848,seq30847__$1);
});

om_tools.dom.embed.cljs$lang$maxFixedArity = (1);


om_tools.dom.fieldset = (function om_tools$dom$fieldset(var_args){
var args30851 = [];
var len__21280__auto___31457 = arguments.length;
var i__21281__auto___31458 = (0);
while(true){
if((i__21281__auto___31458 < len__21280__auto___31457)){
args30851.push((arguments[i__21281__auto___31458]));

var G__31459 = (i__21281__auto___31458 + (1));
i__21281__auto___31458 = G__31459;
continue;
} else {
}
break;
}

var G__30855 = args30851.length;
switch (G__30855) {
case 0:
return om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args30851.slice((1)),(0),null));
return om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.fieldset,null,null);
});

om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.fieldset,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.fieldset.cljs$lang$applyTo = (function (seq30852){
var G__30853 = cljs.core.first.call(null,seq30852);
var seq30852__$1 = cljs.core.next.call(null,seq30852);
return om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic(G__30853,seq30852__$1);
});

om_tools.dom.fieldset.cljs$lang$maxFixedArity = (1);


om_tools.dom.figcaption = (function om_tools$dom$figcaption(var_args){
var args30856 = [];
var len__21280__auto___31461 = arguments.length;
var i__21281__auto___31462 = (0);
while(true){
if((i__21281__auto___31462 < len__21280__auto___31461)){
args30856.push((arguments[i__21281__auto___31462]));

var G__31463 = (i__21281__auto___31462 + (1));
i__21281__auto___31462 = G__31463;
continue;
} else {
}
break;
}

var G__30860 = args30856.length;
switch (G__30860) {
case 0:
return om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args30856.slice((1)),(0),null));
return om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.figcaption,null,null);
});

om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.figcaption,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.figcaption.cljs$lang$applyTo = (function (seq30857){
var G__30858 = cljs.core.first.call(null,seq30857);
var seq30857__$1 = cljs.core.next.call(null,seq30857);
return om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic(G__30858,seq30857__$1);
});

om_tools.dom.figcaption.cljs$lang$maxFixedArity = (1);


om_tools.dom.figure = (function om_tools$dom$figure(var_args){
var args30861 = [];
var len__21280__auto___31465 = arguments.length;
var i__21281__auto___31466 = (0);
while(true){
if((i__21281__auto___31466 < len__21280__auto___31465)){
args30861.push((arguments[i__21281__auto___31466]));

var G__31467 = (i__21281__auto___31466 + (1));
i__21281__auto___31466 = G__31467;
continue;
} else {
}
break;
}

var G__30865 = args30861.length;
switch (G__30865) {
case 0:
return om_tools.dom.figure.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args30861.slice((1)),(0),null));
return om_tools.dom.figure.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.figure.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.figure,null,null);
});

om_tools.dom.figure.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.figure,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.figure.cljs$lang$applyTo = (function (seq30862){
var G__30863 = cljs.core.first.call(null,seq30862);
var seq30862__$1 = cljs.core.next.call(null,seq30862);
return om_tools.dom.figure.cljs$core$IFn$_invoke$arity$variadic(G__30863,seq30862__$1);
});

om_tools.dom.figure.cljs$lang$maxFixedArity = (1);


om_tools.dom.footer = (function om_tools$dom$footer(var_args){
var args30866 = [];
var len__21280__auto___31469 = arguments.length;
var i__21281__auto___31470 = (0);
while(true){
if((i__21281__auto___31470 < len__21280__auto___31469)){
args30866.push((arguments[i__21281__auto___31470]));

var G__31471 = (i__21281__auto___31470 + (1));
i__21281__auto___31470 = G__31471;
continue;
} else {
}
break;
}

var G__30870 = args30866.length;
switch (G__30870) {
case 0:
return om_tools.dom.footer.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args30866.slice((1)),(0),null));
return om_tools.dom.footer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.footer.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.footer,null,null);
});

om_tools.dom.footer.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.footer,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.footer.cljs$lang$applyTo = (function (seq30867){
var G__30868 = cljs.core.first.call(null,seq30867);
var seq30867__$1 = cljs.core.next.call(null,seq30867);
return om_tools.dom.footer.cljs$core$IFn$_invoke$arity$variadic(G__30868,seq30867__$1);
});

om_tools.dom.footer.cljs$lang$maxFixedArity = (1);


om_tools.dom.form = (function om_tools$dom$form(var_args){
var args30871 = [];
var len__21280__auto___31473 = arguments.length;
var i__21281__auto___31474 = (0);
while(true){
if((i__21281__auto___31474 < len__21280__auto___31473)){
args30871.push((arguments[i__21281__auto___31474]));

var G__31475 = (i__21281__auto___31474 + (1));
i__21281__auto___31474 = G__31475;
continue;
} else {
}
break;
}

var G__30875 = args30871.length;
switch (G__30875) {
case 0:
return om_tools.dom.form.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args30871.slice((1)),(0),null));
return om_tools.dom.form.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.form.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.form,null,null);
});

om_tools.dom.form.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.form,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.form.cljs$lang$applyTo = (function (seq30872){
var G__30873 = cljs.core.first.call(null,seq30872);
var seq30872__$1 = cljs.core.next.call(null,seq30872);
return om_tools.dom.form.cljs$core$IFn$_invoke$arity$variadic(G__30873,seq30872__$1);
});

om_tools.dom.form.cljs$lang$maxFixedArity = (1);


om_tools.dom.h1 = (function om_tools$dom$h1(var_args){
var args30876 = [];
var len__21280__auto___31477 = arguments.length;
var i__21281__auto___31478 = (0);
while(true){
if((i__21281__auto___31478 < len__21280__auto___31477)){
args30876.push((arguments[i__21281__auto___31478]));

var G__31479 = (i__21281__auto___31478 + (1));
i__21281__auto___31478 = G__31479;
continue;
} else {
}
break;
}

var G__30880 = args30876.length;
switch (G__30880) {
case 0:
return om_tools.dom.h1.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args30876.slice((1)),(0),null));
return om_tools.dom.h1.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.h1.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h1,null,null);
});

om_tools.dom.h1.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.h1,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.h1.cljs$lang$applyTo = (function (seq30877){
var G__30878 = cljs.core.first.call(null,seq30877);
var seq30877__$1 = cljs.core.next.call(null,seq30877);
return om_tools.dom.h1.cljs$core$IFn$_invoke$arity$variadic(G__30878,seq30877__$1);
});

om_tools.dom.h1.cljs$lang$maxFixedArity = (1);


om_tools.dom.h2 = (function om_tools$dom$h2(var_args){
var args30881 = [];
var len__21280__auto___31481 = arguments.length;
var i__21281__auto___31482 = (0);
while(true){
if((i__21281__auto___31482 < len__21280__auto___31481)){
args30881.push((arguments[i__21281__auto___31482]));

var G__31483 = (i__21281__auto___31482 + (1));
i__21281__auto___31482 = G__31483;
continue;
} else {
}
break;
}

var G__30885 = args30881.length;
switch (G__30885) {
case 0:
return om_tools.dom.h2.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args30881.slice((1)),(0),null));
return om_tools.dom.h2.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.h2.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h2,null,null);
});

om_tools.dom.h2.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.h2,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.h2.cljs$lang$applyTo = (function (seq30882){
var G__30883 = cljs.core.first.call(null,seq30882);
var seq30882__$1 = cljs.core.next.call(null,seq30882);
return om_tools.dom.h2.cljs$core$IFn$_invoke$arity$variadic(G__30883,seq30882__$1);
});

om_tools.dom.h2.cljs$lang$maxFixedArity = (1);


om_tools.dom.h3 = (function om_tools$dom$h3(var_args){
var args30886 = [];
var len__21280__auto___31485 = arguments.length;
var i__21281__auto___31486 = (0);
while(true){
if((i__21281__auto___31486 < len__21280__auto___31485)){
args30886.push((arguments[i__21281__auto___31486]));

var G__31487 = (i__21281__auto___31486 + (1));
i__21281__auto___31486 = G__31487;
continue;
} else {
}
break;
}

var G__30890 = args30886.length;
switch (G__30890) {
case 0:
return om_tools.dom.h3.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args30886.slice((1)),(0),null));
return om_tools.dom.h3.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.h3.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h3,null,null);
});

om_tools.dom.h3.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.h3,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.h3.cljs$lang$applyTo = (function (seq30887){
var G__30888 = cljs.core.first.call(null,seq30887);
var seq30887__$1 = cljs.core.next.call(null,seq30887);
return om_tools.dom.h3.cljs$core$IFn$_invoke$arity$variadic(G__30888,seq30887__$1);
});

om_tools.dom.h3.cljs$lang$maxFixedArity = (1);


om_tools.dom.h4 = (function om_tools$dom$h4(var_args){
var args30891 = [];
var len__21280__auto___31489 = arguments.length;
var i__21281__auto___31490 = (0);
while(true){
if((i__21281__auto___31490 < len__21280__auto___31489)){
args30891.push((arguments[i__21281__auto___31490]));

var G__31491 = (i__21281__auto___31490 + (1));
i__21281__auto___31490 = G__31491;
continue;
} else {
}
break;
}

var G__30895 = args30891.length;
switch (G__30895) {
case 0:
return om_tools.dom.h4.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args30891.slice((1)),(0),null));
return om_tools.dom.h4.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.h4.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h4,null,null);
});

om_tools.dom.h4.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.h4,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.h4.cljs$lang$applyTo = (function (seq30892){
var G__30893 = cljs.core.first.call(null,seq30892);
var seq30892__$1 = cljs.core.next.call(null,seq30892);
return om_tools.dom.h4.cljs$core$IFn$_invoke$arity$variadic(G__30893,seq30892__$1);
});

om_tools.dom.h4.cljs$lang$maxFixedArity = (1);


om_tools.dom.h5 = (function om_tools$dom$h5(var_args){
var args30896 = [];
var len__21280__auto___31493 = arguments.length;
var i__21281__auto___31494 = (0);
while(true){
if((i__21281__auto___31494 < len__21280__auto___31493)){
args30896.push((arguments[i__21281__auto___31494]));

var G__31495 = (i__21281__auto___31494 + (1));
i__21281__auto___31494 = G__31495;
continue;
} else {
}
break;
}

var G__30900 = args30896.length;
switch (G__30900) {
case 0:
return om_tools.dom.h5.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args30896.slice((1)),(0),null));
return om_tools.dom.h5.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.h5.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h5,null,null);
});

om_tools.dom.h5.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.h5,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.h5.cljs$lang$applyTo = (function (seq30897){
var G__30898 = cljs.core.first.call(null,seq30897);
var seq30897__$1 = cljs.core.next.call(null,seq30897);
return om_tools.dom.h5.cljs$core$IFn$_invoke$arity$variadic(G__30898,seq30897__$1);
});

om_tools.dom.h5.cljs$lang$maxFixedArity = (1);


om_tools.dom.h6 = (function om_tools$dom$h6(var_args){
var args30901 = [];
var len__21280__auto___31497 = arguments.length;
var i__21281__auto___31498 = (0);
while(true){
if((i__21281__auto___31498 < len__21280__auto___31497)){
args30901.push((arguments[i__21281__auto___31498]));

var G__31499 = (i__21281__auto___31498 + (1));
i__21281__auto___31498 = G__31499;
continue;
} else {
}
break;
}

var G__30905 = args30901.length;
switch (G__30905) {
case 0:
return om_tools.dom.h6.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args30901.slice((1)),(0),null));
return om_tools.dom.h6.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.h6.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h6,null,null);
});

om_tools.dom.h6.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.h6,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.h6.cljs$lang$applyTo = (function (seq30902){
var G__30903 = cljs.core.first.call(null,seq30902);
var seq30902__$1 = cljs.core.next.call(null,seq30902);
return om_tools.dom.h6.cljs$core$IFn$_invoke$arity$variadic(G__30903,seq30902__$1);
});

om_tools.dom.h6.cljs$lang$maxFixedArity = (1);


om_tools.dom.head = (function om_tools$dom$head(var_args){
var args30906 = [];
var len__21280__auto___31501 = arguments.length;
var i__21281__auto___31502 = (0);
while(true){
if((i__21281__auto___31502 < len__21280__auto___31501)){
args30906.push((arguments[i__21281__auto___31502]));

var G__31503 = (i__21281__auto___31502 + (1));
i__21281__auto___31502 = G__31503;
continue;
} else {
}
break;
}

var G__30910 = args30906.length;
switch (G__30910) {
case 0:
return om_tools.dom.head.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args30906.slice((1)),(0),null));
return om_tools.dom.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.head.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.head,null,null);
});

om_tools.dom.head.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.head,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.head.cljs$lang$applyTo = (function (seq30907){
var G__30908 = cljs.core.first.call(null,seq30907);
var seq30907__$1 = cljs.core.next.call(null,seq30907);
return om_tools.dom.head.cljs$core$IFn$_invoke$arity$variadic(G__30908,seq30907__$1);
});

om_tools.dom.head.cljs$lang$maxFixedArity = (1);


om_tools.dom.header = (function om_tools$dom$header(var_args){
var args30911 = [];
var len__21280__auto___31505 = arguments.length;
var i__21281__auto___31506 = (0);
while(true){
if((i__21281__auto___31506 < len__21280__auto___31505)){
args30911.push((arguments[i__21281__auto___31506]));

var G__31507 = (i__21281__auto___31506 + (1));
i__21281__auto___31506 = G__31507;
continue;
} else {
}
break;
}

var G__30915 = args30911.length;
switch (G__30915) {
case 0:
return om_tools.dom.header.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args30911.slice((1)),(0),null));
return om_tools.dom.header.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.header.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.header,null,null);
});

om_tools.dom.header.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.header,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.header.cljs$lang$applyTo = (function (seq30912){
var G__30913 = cljs.core.first.call(null,seq30912);
var seq30912__$1 = cljs.core.next.call(null,seq30912);
return om_tools.dom.header.cljs$core$IFn$_invoke$arity$variadic(G__30913,seq30912__$1);
});

om_tools.dom.header.cljs$lang$maxFixedArity = (1);


om_tools.dom.hr = (function om_tools$dom$hr(var_args){
var args30916 = [];
var len__21280__auto___31509 = arguments.length;
var i__21281__auto___31510 = (0);
while(true){
if((i__21281__auto___31510 < len__21280__auto___31509)){
args30916.push((arguments[i__21281__auto___31510]));

var G__31511 = (i__21281__auto___31510 + (1));
i__21281__auto___31510 = G__31511;
continue;
} else {
}
break;
}

var G__30920 = args30916.length;
switch (G__30920) {
case 0:
return om_tools.dom.hr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args30916.slice((1)),(0),null));
return om_tools.dom.hr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.hr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.hr,null,null);
});

om_tools.dom.hr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.hr,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.hr.cljs$lang$applyTo = (function (seq30917){
var G__30918 = cljs.core.first.call(null,seq30917);
var seq30917__$1 = cljs.core.next.call(null,seq30917);
return om_tools.dom.hr.cljs$core$IFn$_invoke$arity$variadic(G__30918,seq30917__$1);
});

om_tools.dom.hr.cljs$lang$maxFixedArity = (1);


om_tools.dom.html = (function om_tools$dom$html(var_args){
var args30921 = [];
var len__21280__auto___31513 = arguments.length;
var i__21281__auto___31514 = (0);
while(true){
if((i__21281__auto___31514 < len__21280__auto___31513)){
args30921.push((arguments[i__21281__auto___31514]));

var G__31515 = (i__21281__auto___31514 + (1));
i__21281__auto___31514 = G__31515;
continue;
} else {
}
break;
}

var G__30925 = args30921.length;
switch (G__30925) {
case 0:
return om_tools.dom.html.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args30921.slice((1)),(0),null));
return om_tools.dom.html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.html.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.html,null,null);
});

om_tools.dom.html.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.html,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.html.cljs$lang$applyTo = (function (seq30922){
var G__30923 = cljs.core.first.call(null,seq30922);
var seq30922__$1 = cljs.core.next.call(null,seq30922);
return om_tools.dom.html.cljs$core$IFn$_invoke$arity$variadic(G__30923,seq30922__$1);
});

om_tools.dom.html.cljs$lang$maxFixedArity = (1);


om_tools.dom.i = (function om_tools$dom$i(var_args){
var args30926 = [];
var len__21280__auto___31517 = arguments.length;
var i__21281__auto___31518 = (0);
while(true){
if((i__21281__auto___31518 < len__21280__auto___31517)){
args30926.push((arguments[i__21281__auto___31518]));

var G__31519 = (i__21281__auto___31518 + (1));
i__21281__auto___31518 = G__31519;
continue;
} else {
}
break;
}

var G__30930 = args30926.length;
switch (G__30930) {
case 0:
return om_tools.dom.i.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args30926.slice((1)),(0),null));
return om_tools.dom.i.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.i.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.i,null,null);
});

om_tools.dom.i.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.i,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.i.cljs$lang$applyTo = (function (seq30927){
var G__30928 = cljs.core.first.call(null,seq30927);
var seq30927__$1 = cljs.core.next.call(null,seq30927);
return om_tools.dom.i.cljs$core$IFn$_invoke$arity$variadic(G__30928,seq30927__$1);
});

om_tools.dom.i.cljs$lang$maxFixedArity = (1);


om_tools.dom.iframe = (function om_tools$dom$iframe(var_args){
var args30931 = [];
var len__21280__auto___31521 = arguments.length;
var i__21281__auto___31522 = (0);
while(true){
if((i__21281__auto___31522 < len__21280__auto___31521)){
args30931.push((arguments[i__21281__auto___31522]));

var G__31523 = (i__21281__auto___31522 + (1));
i__21281__auto___31522 = G__31523;
continue;
} else {
}
break;
}

var G__30935 = args30931.length;
switch (G__30935) {
case 0:
return om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args30931.slice((1)),(0),null));
return om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.iframe,null,null);
});

om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.iframe,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.iframe.cljs$lang$applyTo = (function (seq30932){
var G__30933 = cljs.core.first.call(null,seq30932);
var seq30932__$1 = cljs.core.next.call(null,seq30932);
return om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$variadic(G__30933,seq30932__$1);
});

om_tools.dom.iframe.cljs$lang$maxFixedArity = (1);


om_tools.dom.img = (function om_tools$dom$img(var_args){
var args30936 = [];
var len__21280__auto___31525 = arguments.length;
var i__21281__auto___31526 = (0);
while(true){
if((i__21281__auto___31526 < len__21280__auto___31525)){
args30936.push((arguments[i__21281__auto___31526]));

var G__31527 = (i__21281__auto___31526 + (1));
i__21281__auto___31526 = G__31527;
continue;
} else {
}
break;
}

var G__30940 = args30936.length;
switch (G__30940) {
case 0:
return om_tools.dom.img.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args30936.slice((1)),(0),null));
return om_tools.dom.img.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.img.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.img,null,null);
});

om_tools.dom.img.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.img,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.img.cljs$lang$applyTo = (function (seq30937){
var G__30938 = cljs.core.first.call(null,seq30937);
var seq30937__$1 = cljs.core.next.call(null,seq30937);
return om_tools.dom.img.cljs$core$IFn$_invoke$arity$variadic(G__30938,seq30937__$1);
});

om_tools.dom.img.cljs$lang$maxFixedArity = (1);


om_tools.dom.ins = (function om_tools$dom$ins(var_args){
var args30941 = [];
var len__21280__auto___31529 = arguments.length;
var i__21281__auto___31530 = (0);
while(true){
if((i__21281__auto___31530 < len__21280__auto___31529)){
args30941.push((arguments[i__21281__auto___31530]));

var G__31531 = (i__21281__auto___31530 + (1));
i__21281__auto___31530 = G__31531;
continue;
} else {
}
break;
}

var G__30945 = args30941.length;
switch (G__30945) {
case 0:
return om_tools.dom.ins.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args30941.slice((1)),(0),null));
return om_tools.dom.ins.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.ins.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ins,null,null);
});

om_tools.dom.ins.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.ins,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.ins.cljs$lang$applyTo = (function (seq30942){
var G__30943 = cljs.core.first.call(null,seq30942);
var seq30942__$1 = cljs.core.next.call(null,seq30942);
return om_tools.dom.ins.cljs$core$IFn$_invoke$arity$variadic(G__30943,seq30942__$1);
});

om_tools.dom.ins.cljs$lang$maxFixedArity = (1);


om_tools.dom.kbd = (function om_tools$dom$kbd(var_args){
var args30946 = [];
var len__21280__auto___31533 = arguments.length;
var i__21281__auto___31534 = (0);
while(true){
if((i__21281__auto___31534 < len__21280__auto___31533)){
args30946.push((arguments[i__21281__auto___31534]));

var G__31535 = (i__21281__auto___31534 + (1));
i__21281__auto___31534 = G__31535;
continue;
} else {
}
break;
}

var G__30950 = args30946.length;
switch (G__30950) {
case 0:
return om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args30946.slice((1)),(0),null));
return om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.kbd,null,null);
});

om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.kbd,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.kbd.cljs$lang$applyTo = (function (seq30947){
var G__30948 = cljs.core.first.call(null,seq30947);
var seq30947__$1 = cljs.core.next.call(null,seq30947);
return om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$variadic(G__30948,seq30947__$1);
});

om_tools.dom.kbd.cljs$lang$maxFixedArity = (1);


om_tools.dom.keygen = (function om_tools$dom$keygen(var_args){
var args30951 = [];
var len__21280__auto___31537 = arguments.length;
var i__21281__auto___31538 = (0);
while(true){
if((i__21281__auto___31538 < len__21280__auto___31537)){
args30951.push((arguments[i__21281__auto___31538]));

var G__31539 = (i__21281__auto___31538 + (1));
i__21281__auto___31538 = G__31539;
continue;
} else {
}
break;
}

var G__30955 = args30951.length;
switch (G__30955) {
case 0:
return om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args30951.slice((1)),(0),null));
return om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.keygen,null,null);
});

om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.keygen,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.keygen.cljs$lang$applyTo = (function (seq30952){
var G__30953 = cljs.core.first.call(null,seq30952);
var seq30952__$1 = cljs.core.next.call(null,seq30952);
return om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$variadic(G__30953,seq30952__$1);
});

om_tools.dom.keygen.cljs$lang$maxFixedArity = (1);


om_tools.dom.label = (function om_tools$dom$label(var_args){
var args30956 = [];
var len__21280__auto___31541 = arguments.length;
var i__21281__auto___31542 = (0);
while(true){
if((i__21281__auto___31542 < len__21280__auto___31541)){
args30956.push((arguments[i__21281__auto___31542]));

var G__31543 = (i__21281__auto___31542 + (1));
i__21281__auto___31542 = G__31543;
continue;
} else {
}
break;
}

var G__30960 = args30956.length;
switch (G__30960) {
case 0:
return om_tools.dom.label.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args30956.slice((1)),(0),null));
return om_tools.dom.label.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.label.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.label,null,null);
});

om_tools.dom.label.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.label,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.label.cljs$lang$applyTo = (function (seq30957){
var G__30958 = cljs.core.first.call(null,seq30957);
var seq30957__$1 = cljs.core.next.call(null,seq30957);
return om_tools.dom.label.cljs$core$IFn$_invoke$arity$variadic(G__30958,seq30957__$1);
});

om_tools.dom.label.cljs$lang$maxFixedArity = (1);


om_tools.dom.legend = (function om_tools$dom$legend(var_args){
var args30961 = [];
var len__21280__auto___31545 = arguments.length;
var i__21281__auto___31546 = (0);
while(true){
if((i__21281__auto___31546 < len__21280__auto___31545)){
args30961.push((arguments[i__21281__auto___31546]));

var G__31547 = (i__21281__auto___31546 + (1));
i__21281__auto___31546 = G__31547;
continue;
} else {
}
break;
}

var G__30965 = args30961.length;
switch (G__30965) {
case 0:
return om_tools.dom.legend.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args30961.slice((1)),(0),null));
return om_tools.dom.legend.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.legend.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.legend,null,null);
});

om_tools.dom.legend.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.legend,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.legend.cljs$lang$applyTo = (function (seq30962){
var G__30963 = cljs.core.first.call(null,seq30962);
var seq30962__$1 = cljs.core.next.call(null,seq30962);
return om_tools.dom.legend.cljs$core$IFn$_invoke$arity$variadic(G__30963,seq30962__$1);
});

om_tools.dom.legend.cljs$lang$maxFixedArity = (1);


om_tools.dom.li = (function om_tools$dom$li(var_args){
var args30966 = [];
var len__21280__auto___31549 = arguments.length;
var i__21281__auto___31550 = (0);
while(true){
if((i__21281__auto___31550 < len__21280__auto___31549)){
args30966.push((arguments[i__21281__auto___31550]));

var G__31551 = (i__21281__auto___31550 + (1));
i__21281__auto___31550 = G__31551;
continue;
} else {
}
break;
}

var G__30970 = args30966.length;
switch (G__30970) {
case 0:
return om_tools.dom.li.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args30966.slice((1)),(0),null));
return om_tools.dom.li.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.li.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.li,null,null);
});

om_tools.dom.li.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.li,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.li.cljs$lang$applyTo = (function (seq30967){
var G__30968 = cljs.core.first.call(null,seq30967);
var seq30967__$1 = cljs.core.next.call(null,seq30967);
return om_tools.dom.li.cljs$core$IFn$_invoke$arity$variadic(G__30968,seq30967__$1);
});

om_tools.dom.li.cljs$lang$maxFixedArity = (1);


om_tools.dom.link = (function om_tools$dom$link(var_args){
var args30971 = [];
var len__21280__auto___31553 = arguments.length;
var i__21281__auto___31554 = (0);
while(true){
if((i__21281__auto___31554 < len__21280__auto___31553)){
args30971.push((arguments[i__21281__auto___31554]));

var G__31555 = (i__21281__auto___31554 + (1));
i__21281__auto___31554 = G__31555;
continue;
} else {
}
break;
}

var G__30975 = args30971.length;
switch (G__30975) {
case 0:
return om_tools.dom.link.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args30971.slice((1)),(0),null));
return om_tools.dom.link.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.link.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.link,null,null);
});

om_tools.dom.link.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.link,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.link.cljs$lang$applyTo = (function (seq30972){
var G__30973 = cljs.core.first.call(null,seq30972);
var seq30972__$1 = cljs.core.next.call(null,seq30972);
return om_tools.dom.link.cljs$core$IFn$_invoke$arity$variadic(G__30973,seq30972__$1);
});

om_tools.dom.link.cljs$lang$maxFixedArity = (1);


om_tools.dom.main = (function om_tools$dom$main(var_args){
var args30976 = [];
var len__21280__auto___31557 = arguments.length;
var i__21281__auto___31558 = (0);
while(true){
if((i__21281__auto___31558 < len__21280__auto___31557)){
args30976.push((arguments[i__21281__auto___31558]));

var G__31559 = (i__21281__auto___31558 + (1));
i__21281__auto___31558 = G__31559;
continue;
} else {
}
break;
}

var G__30980 = args30976.length;
switch (G__30980) {
case 0:
return om_tools.dom.main.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args30976.slice((1)),(0),null));
return om_tools.dom.main.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.main.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.main,null,null);
});

om_tools.dom.main.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.main,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.main.cljs$lang$applyTo = (function (seq30977){
var G__30978 = cljs.core.first.call(null,seq30977);
var seq30977__$1 = cljs.core.next.call(null,seq30977);
return om_tools.dom.main.cljs$core$IFn$_invoke$arity$variadic(G__30978,seq30977__$1);
});

om_tools.dom.main.cljs$lang$maxFixedArity = (1);


om_tools.dom.map = (function om_tools$dom$map(var_args){
var args30981 = [];
var len__21280__auto___31561 = arguments.length;
var i__21281__auto___31562 = (0);
while(true){
if((i__21281__auto___31562 < len__21280__auto___31561)){
args30981.push((arguments[i__21281__auto___31562]));

var G__31563 = (i__21281__auto___31562 + (1));
i__21281__auto___31562 = G__31563;
continue;
} else {
}
break;
}

var G__30985 = args30981.length;
switch (G__30985) {
case 0:
return om_tools.dom.map.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args30981.slice((1)),(0),null));
return om_tools.dom.map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.map.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.map,null,null);
});

om_tools.dom.map.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.map,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.map.cljs$lang$applyTo = (function (seq30982){
var G__30983 = cljs.core.first.call(null,seq30982);
var seq30982__$1 = cljs.core.next.call(null,seq30982);
return om_tools.dom.map.cljs$core$IFn$_invoke$arity$variadic(G__30983,seq30982__$1);
});

om_tools.dom.map.cljs$lang$maxFixedArity = (1);


om_tools.dom.mark = (function om_tools$dom$mark(var_args){
var args30986 = [];
var len__21280__auto___31565 = arguments.length;
var i__21281__auto___31566 = (0);
while(true){
if((i__21281__auto___31566 < len__21280__auto___31565)){
args30986.push((arguments[i__21281__auto___31566]));

var G__31567 = (i__21281__auto___31566 + (1));
i__21281__auto___31566 = G__31567;
continue;
} else {
}
break;
}

var G__30990 = args30986.length;
switch (G__30990) {
case 0:
return om_tools.dom.mark.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args30986.slice((1)),(0),null));
return om_tools.dom.mark.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.mark.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.mark,null,null);
});

om_tools.dom.mark.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.mark,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.mark.cljs$lang$applyTo = (function (seq30987){
var G__30988 = cljs.core.first.call(null,seq30987);
var seq30987__$1 = cljs.core.next.call(null,seq30987);
return om_tools.dom.mark.cljs$core$IFn$_invoke$arity$variadic(G__30988,seq30987__$1);
});

om_tools.dom.mark.cljs$lang$maxFixedArity = (1);


om_tools.dom.menu = (function om_tools$dom$menu(var_args){
var args30991 = [];
var len__21280__auto___31569 = arguments.length;
var i__21281__auto___31570 = (0);
while(true){
if((i__21281__auto___31570 < len__21280__auto___31569)){
args30991.push((arguments[i__21281__auto___31570]));

var G__31571 = (i__21281__auto___31570 + (1));
i__21281__auto___31570 = G__31571;
continue;
} else {
}
break;
}

var G__30995 = args30991.length;
switch (G__30995) {
case 0:
return om_tools.dom.menu.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args30991.slice((1)),(0),null));
return om_tools.dom.menu.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.menu.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.menu,null,null);
});

om_tools.dom.menu.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.menu,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.menu.cljs$lang$applyTo = (function (seq30992){
var G__30993 = cljs.core.first.call(null,seq30992);
var seq30992__$1 = cljs.core.next.call(null,seq30992);
return om_tools.dom.menu.cljs$core$IFn$_invoke$arity$variadic(G__30993,seq30992__$1);
});

om_tools.dom.menu.cljs$lang$maxFixedArity = (1);


om_tools.dom.menuitem = (function om_tools$dom$menuitem(var_args){
var args30996 = [];
var len__21280__auto___31573 = arguments.length;
var i__21281__auto___31574 = (0);
while(true){
if((i__21281__auto___31574 < len__21280__auto___31573)){
args30996.push((arguments[i__21281__auto___31574]));

var G__31575 = (i__21281__auto___31574 + (1));
i__21281__auto___31574 = G__31575;
continue;
} else {
}
break;
}

var G__31000 = args30996.length;
switch (G__31000) {
case 0:
return om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args30996.slice((1)),(0),null));
return om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.menuitem,null,null);
});

om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.menuitem,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.menuitem.cljs$lang$applyTo = (function (seq30997){
var G__30998 = cljs.core.first.call(null,seq30997);
var seq30997__$1 = cljs.core.next.call(null,seq30997);
return om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic(G__30998,seq30997__$1);
});

om_tools.dom.menuitem.cljs$lang$maxFixedArity = (1);


om_tools.dom.meta = (function om_tools$dom$meta(var_args){
var args31001 = [];
var len__21280__auto___31577 = arguments.length;
var i__21281__auto___31578 = (0);
while(true){
if((i__21281__auto___31578 < len__21280__auto___31577)){
args31001.push((arguments[i__21281__auto___31578]));

var G__31579 = (i__21281__auto___31578 + (1));
i__21281__auto___31578 = G__31579;
continue;
} else {
}
break;
}

var G__31005 = args31001.length;
switch (G__31005) {
case 0:
return om_tools.dom.meta.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args31001.slice((1)),(0),null));
return om_tools.dom.meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.meta.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.meta,null,null);
});

om_tools.dom.meta.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.meta,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.meta.cljs$lang$applyTo = (function (seq31002){
var G__31003 = cljs.core.first.call(null,seq31002);
var seq31002__$1 = cljs.core.next.call(null,seq31002);
return om_tools.dom.meta.cljs$core$IFn$_invoke$arity$variadic(G__31003,seq31002__$1);
});

om_tools.dom.meta.cljs$lang$maxFixedArity = (1);


om_tools.dom.meter = (function om_tools$dom$meter(var_args){
var args31006 = [];
var len__21280__auto___31581 = arguments.length;
var i__21281__auto___31582 = (0);
while(true){
if((i__21281__auto___31582 < len__21280__auto___31581)){
args31006.push((arguments[i__21281__auto___31582]));

var G__31583 = (i__21281__auto___31582 + (1));
i__21281__auto___31582 = G__31583;
continue;
} else {
}
break;
}

var G__31010 = args31006.length;
switch (G__31010) {
case 0:
return om_tools.dom.meter.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args31006.slice((1)),(0),null));
return om_tools.dom.meter.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.meter.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.meter,null,null);
});

om_tools.dom.meter.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.meter,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.meter.cljs$lang$applyTo = (function (seq31007){
var G__31008 = cljs.core.first.call(null,seq31007);
var seq31007__$1 = cljs.core.next.call(null,seq31007);
return om_tools.dom.meter.cljs$core$IFn$_invoke$arity$variadic(G__31008,seq31007__$1);
});

om_tools.dom.meter.cljs$lang$maxFixedArity = (1);


om_tools.dom.nav = (function om_tools$dom$nav(var_args){
var args31011 = [];
var len__21280__auto___31585 = arguments.length;
var i__21281__auto___31586 = (0);
while(true){
if((i__21281__auto___31586 < len__21280__auto___31585)){
args31011.push((arguments[i__21281__auto___31586]));

var G__31587 = (i__21281__auto___31586 + (1));
i__21281__auto___31586 = G__31587;
continue;
} else {
}
break;
}

var G__31015 = args31011.length;
switch (G__31015) {
case 0:
return om_tools.dom.nav.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args31011.slice((1)),(0),null));
return om_tools.dom.nav.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.nav.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.nav,null,null);
});

om_tools.dom.nav.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.nav,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.nav.cljs$lang$applyTo = (function (seq31012){
var G__31013 = cljs.core.first.call(null,seq31012);
var seq31012__$1 = cljs.core.next.call(null,seq31012);
return om_tools.dom.nav.cljs$core$IFn$_invoke$arity$variadic(G__31013,seq31012__$1);
});

om_tools.dom.nav.cljs$lang$maxFixedArity = (1);


om_tools.dom.noscript = (function om_tools$dom$noscript(var_args){
var args31016 = [];
var len__21280__auto___31589 = arguments.length;
var i__21281__auto___31590 = (0);
while(true){
if((i__21281__auto___31590 < len__21280__auto___31589)){
args31016.push((arguments[i__21281__auto___31590]));

var G__31591 = (i__21281__auto___31590 + (1));
i__21281__auto___31590 = G__31591;
continue;
} else {
}
break;
}

var G__31020 = args31016.length;
switch (G__31020) {
case 0:
return om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args31016.slice((1)),(0),null));
return om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.noscript,null,null);
});

om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.noscript,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.noscript.cljs$lang$applyTo = (function (seq31017){
var G__31018 = cljs.core.first.call(null,seq31017);
var seq31017__$1 = cljs.core.next.call(null,seq31017);
return om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$variadic(G__31018,seq31017__$1);
});

om_tools.dom.noscript.cljs$lang$maxFixedArity = (1);


om_tools.dom.object = (function om_tools$dom$object(var_args){
var args31021 = [];
var len__21280__auto___31593 = arguments.length;
var i__21281__auto___31594 = (0);
while(true){
if((i__21281__auto___31594 < len__21280__auto___31593)){
args31021.push((arguments[i__21281__auto___31594]));

var G__31595 = (i__21281__auto___31594 + (1));
i__21281__auto___31594 = G__31595;
continue;
} else {
}
break;
}

var G__31025 = args31021.length;
switch (G__31025) {
case 0:
return om_tools.dom.object.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args31021.slice((1)),(0),null));
return om_tools.dom.object.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.object.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.object,null,null);
});

om_tools.dom.object.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.object,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.object.cljs$lang$applyTo = (function (seq31022){
var G__31023 = cljs.core.first.call(null,seq31022);
var seq31022__$1 = cljs.core.next.call(null,seq31022);
return om_tools.dom.object.cljs$core$IFn$_invoke$arity$variadic(G__31023,seq31022__$1);
});

om_tools.dom.object.cljs$lang$maxFixedArity = (1);


om_tools.dom.ol = (function om_tools$dom$ol(var_args){
var args31026 = [];
var len__21280__auto___31597 = arguments.length;
var i__21281__auto___31598 = (0);
while(true){
if((i__21281__auto___31598 < len__21280__auto___31597)){
args31026.push((arguments[i__21281__auto___31598]));

var G__31599 = (i__21281__auto___31598 + (1));
i__21281__auto___31598 = G__31599;
continue;
} else {
}
break;
}

var G__31030 = args31026.length;
switch (G__31030) {
case 0:
return om_tools.dom.ol.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args31026.slice((1)),(0),null));
return om_tools.dom.ol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.ol.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ol,null,null);
});

om_tools.dom.ol.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.ol,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.ol.cljs$lang$applyTo = (function (seq31027){
var G__31028 = cljs.core.first.call(null,seq31027);
var seq31027__$1 = cljs.core.next.call(null,seq31027);
return om_tools.dom.ol.cljs$core$IFn$_invoke$arity$variadic(G__31028,seq31027__$1);
});

om_tools.dom.ol.cljs$lang$maxFixedArity = (1);


om_tools.dom.optgroup = (function om_tools$dom$optgroup(var_args){
var args31031 = [];
var len__21280__auto___31601 = arguments.length;
var i__21281__auto___31602 = (0);
while(true){
if((i__21281__auto___31602 < len__21280__auto___31601)){
args31031.push((arguments[i__21281__auto___31602]));

var G__31603 = (i__21281__auto___31602 + (1));
i__21281__auto___31602 = G__31603;
continue;
} else {
}
break;
}

var G__31035 = args31031.length;
switch (G__31035) {
case 0:
return om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args31031.slice((1)),(0),null));
return om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.optgroup,null,null);
});

om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.optgroup,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.optgroup.cljs$lang$applyTo = (function (seq31032){
var G__31033 = cljs.core.first.call(null,seq31032);
var seq31032__$1 = cljs.core.next.call(null,seq31032);
return om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic(G__31033,seq31032__$1);
});

om_tools.dom.optgroup.cljs$lang$maxFixedArity = (1);


om_tools.dom.output = (function om_tools$dom$output(var_args){
var args31036 = [];
var len__21280__auto___31605 = arguments.length;
var i__21281__auto___31606 = (0);
while(true){
if((i__21281__auto___31606 < len__21280__auto___31605)){
args31036.push((arguments[i__21281__auto___31606]));

var G__31607 = (i__21281__auto___31606 + (1));
i__21281__auto___31606 = G__31607;
continue;
} else {
}
break;
}

var G__31040 = args31036.length;
switch (G__31040) {
case 0:
return om_tools.dom.output.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args31036.slice((1)),(0),null));
return om_tools.dom.output.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.output.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.output,null,null);
});

om_tools.dom.output.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.output,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.output.cljs$lang$applyTo = (function (seq31037){
var G__31038 = cljs.core.first.call(null,seq31037);
var seq31037__$1 = cljs.core.next.call(null,seq31037);
return om_tools.dom.output.cljs$core$IFn$_invoke$arity$variadic(G__31038,seq31037__$1);
});

om_tools.dom.output.cljs$lang$maxFixedArity = (1);


om_tools.dom.p = (function om_tools$dom$p(var_args){
var args31041 = [];
var len__21280__auto___31609 = arguments.length;
var i__21281__auto___31610 = (0);
while(true){
if((i__21281__auto___31610 < len__21280__auto___31609)){
args31041.push((arguments[i__21281__auto___31610]));

var G__31611 = (i__21281__auto___31610 + (1));
i__21281__auto___31610 = G__31611;
continue;
} else {
}
break;
}

var G__31045 = args31041.length;
switch (G__31045) {
case 0:
return om_tools.dom.p.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args31041.slice((1)),(0),null));
return om_tools.dom.p.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.p.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.p,null,null);
});

om_tools.dom.p.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.p,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.p.cljs$lang$applyTo = (function (seq31042){
var G__31043 = cljs.core.first.call(null,seq31042);
var seq31042__$1 = cljs.core.next.call(null,seq31042);
return om_tools.dom.p.cljs$core$IFn$_invoke$arity$variadic(G__31043,seq31042__$1);
});

om_tools.dom.p.cljs$lang$maxFixedArity = (1);


om_tools.dom.param = (function om_tools$dom$param(var_args){
var args31046 = [];
var len__21280__auto___31613 = arguments.length;
var i__21281__auto___31614 = (0);
while(true){
if((i__21281__auto___31614 < len__21280__auto___31613)){
args31046.push((arguments[i__21281__auto___31614]));

var G__31615 = (i__21281__auto___31614 + (1));
i__21281__auto___31614 = G__31615;
continue;
} else {
}
break;
}

var G__31050 = args31046.length;
switch (G__31050) {
case 0:
return om_tools.dom.param.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args31046.slice((1)),(0),null));
return om_tools.dom.param.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.param.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.param,null,null);
});

om_tools.dom.param.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.param,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.param.cljs$lang$applyTo = (function (seq31047){
var G__31048 = cljs.core.first.call(null,seq31047);
var seq31047__$1 = cljs.core.next.call(null,seq31047);
return om_tools.dom.param.cljs$core$IFn$_invoke$arity$variadic(G__31048,seq31047__$1);
});

om_tools.dom.param.cljs$lang$maxFixedArity = (1);


om_tools.dom.picture = (function om_tools$dom$picture(var_args){
var args31051 = [];
var len__21280__auto___31617 = arguments.length;
var i__21281__auto___31618 = (0);
while(true){
if((i__21281__auto___31618 < len__21280__auto___31617)){
args31051.push((arguments[i__21281__auto___31618]));

var G__31619 = (i__21281__auto___31618 + (1));
i__21281__auto___31618 = G__31619;
continue;
} else {
}
break;
}

var G__31055 = args31051.length;
switch (G__31055) {
case 0:
return om_tools.dom.picture.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args31051.slice((1)),(0),null));
return om_tools.dom.picture.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.picture.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.picture,null,null);
});

om_tools.dom.picture.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.picture,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.picture.cljs$lang$applyTo = (function (seq31052){
var G__31053 = cljs.core.first.call(null,seq31052);
var seq31052__$1 = cljs.core.next.call(null,seq31052);
return om_tools.dom.picture.cljs$core$IFn$_invoke$arity$variadic(G__31053,seq31052__$1);
});

om_tools.dom.picture.cljs$lang$maxFixedArity = (1);


om_tools.dom.pre = (function om_tools$dom$pre(var_args){
var args31056 = [];
var len__21280__auto___31621 = arguments.length;
var i__21281__auto___31622 = (0);
while(true){
if((i__21281__auto___31622 < len__21280__auto___31621)){
args31056.push((arguments[i__21281__auto___31622]));

var G__31623 = (i__21281__auto___31622 + (1));
i__21281__auto___31622 = G__31623;
continue;
} else {
}
break;
}

var G__31060 = args31056.length;
switch (G__31060) {
case 0:
return om_tools.dom.pre.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args31056.slice((1)),(0),null));
return om_tools.dom.pre.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.pre.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.pre,null,null);
});

om_tools.dom.pre.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.pre,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.pre.cljs$lang$applyTo = (function (seq31057){
var G__31058 = cljs.core.first.call(null,seq31057);
var seq31057__$1 = cljs.core.next.call(null,seq31057);
return om_tools.dom.pre.cljs$core$IFn$_invoke$arity$variadic(G__31058,seq31057__$1);
});

om_tools.dom.pre.cljs$lang$maxFixedArity = (1);


om_tools.dom.progress = (function om_tools$dom$progress(var_args){
var args31061 = [];
var len__21280__auto___31625 = arguments.length;
var i__21281__auto___31626 = (0);
while(true){
if((i__21281__auto___31626 < len__21280__auto___31625)){
args31061.push((arguments[i__21281__auto___31626]));

var G__31627 = (i__21281__auto___31626 + (1));
i__21281__auto___31626 = G__31627;
continue;
} else {
}
break;
}

var G__31065 = args31061.length;
switch (G__31065) {
case 0:
return om_tools.dom.progress.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args31061.slice((1)),(0),null));
return om_tools.dom.progress.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.progress.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.progress,null,null);
});

om_tools.dom.progress.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.progress,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.progress.cljs$lang$applyTo = (function (seq31062){
var G__31063 = cljs.core.first.call(null,seq31062);
var seq31062__$1 = cljs.core.next.call(null,seq31062);
return om_tools.dom.progress.cljs$core$IFn$_invoke$arity$variadic(G__31063,seq31062__$1);
});

om_tools.dom.progress.cljs$lang$maxFixedArity = (1);


om_tools.dom.q = (function om_tools$dom$q(var_args){
var args31066 = [];
var len__21280__auto___31629 = arguments.length;
var i__21281__auto___31630 = (0);
while(true){
if((i__21281__auto___31630 < len__21280__auto___31629)){
args31066.push((arguments[i__21281__auto___31630]));

var G__31631 = (i__21281__auto___31630 + (1));
i__21281__auto___31630 = G__31631;
continue;
} else {
}
break;
}

var G__31070 = args31066.length;
switch (G__31070) {
case 0:
return om_tools.dom.q.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args31066.slice((1)),(0),null));
return om_tools.dom.q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.q.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.q,null,null);
});

om_tools.dom.q.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.q,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.q.cljs$lang$applyTo = (function (seq31067){
var G__31068 = cljs.core.first.call(null,seq31067);
var seq31067__$1 = cljs.core.next.call(null,seq31067);
return om_tools.dom.q.cljs$core$IFn$_invoke$arity$variadic(G__31068,seq31067__$1);
});

om_tools.dom.q.cljs$lang$maxFixedArity = (1);


om_tools.dom.rp = (function om_tools$dom$rp(var_args){
var args31071 = [];
var len__21280__auto___31633 = arguments.length;
var i__21281__auto___31634 = (0);
while(true){
if((i__21281__auto___31634 < len__21280__auto___31633)){
args31071.push((arguments[i__21281__auto___31634]));

var G__31635 = (i__21281__auto___31634 + (1));
i__21281__auto___31634 = G__31635;
continue;
} else {
}
break;
}

var G__31075 = args31071.length;
switch (G__31075) {
case 0:
return om_tools.dom.rp.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args31071.slice((1)),(0),null));
return om_tools.dom.rp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.rp.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.rp,null,null);
});

om_tools.dom.rp.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.rp,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.rp.cljs$lang$applyTo = (function (seq31072){
var G__31073 = cljs.core.first.call(null,seq31072);
var seq31072__$1 = cljs.core.next.call(null,seq31072);
return om_tools.dom.rp.cljs$core$IFn$_invoke$arity$variadic(G__31073,seq31072__$1);
});

om_tools.dom.rp.cljs$lang$maxFixedArity = (1);


om_tools.dom.rt = (function om_tools$dom$rt(var_args){
var args31076 = [];
var len__21280__auto___31637 = arguments.length;
var i__21281__auto___31638 = (0);
while(true){
if((i__21281__auto___31638 < len__21280__auto___31637)){
args31076.push((arguments[i__21281__auto___31638]));

var G__31639 = (i__21281__auto___31638 + (1));
i__21281__auto___31638 = G__31639;
continue;
} else {
}
break;
}

var G__31080 = args31076.length;
switch (G__31080) {
case 0:
return om_tools.dom.rt.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args31076.slice((1)),(0),null));
return om_tools.dom.rt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.rt.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.rt,null,null);
});

om_tools.dom.rt.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.rt,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.rt.cljs$lang$applyTo = (function (seq31077){
var G__31078 = cljs.core.first.call(null,seq31077);
var seq31077__$1 = cljs.core.next.call(null,seq31077);
return om_tools.dom.rt.cljs$core$IFn$_invoke$arity$variadic(G__31078,seq31077__$1);
});

om_tools.dom.rt.cljs$lang$maxFixedArity = (1);


om_tools.dom.ruby = (function om_tools$dom$ruby(var_args){
var args31081 = [];
var len__21280__auto___31641 = arguments.length;
var i__21281__auto___31642 = (0);
while(true){
if((i__21281__auto___31642 < len__21280__auto___31641)){
args31081.push((arguments[i__21281__auto___31642]));

var G__31643 = (i__21281__auto___31642 + (1));
i__21281__auto___31642 = G__31643;
continue;
} else {
}
break;
}

var G__31085 = args31081.length;
switch (G__31085) {
case 0:
return om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args31081.slice((1)),(0),null));
return om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ruby,null,null);
});

om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.ruby,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.ruby.cljs$lang$applyTo = (function (seq31082){
var G__31083 = cljs.core.first.call(null,seq31082);
var seq31082__$1 = cljs.core.next.call(null,seq31082);
return om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$variadic(G__31083,seq31082__$1);
});

om_tools.dom.ruby.cljs$lang$maxFixedArity = (1);


om_tools.dom.s = (function om_tools$dom$s(var_args){
var args31086 = [];
var len__21280__auto___31645 = arguments.length;
var i__21281__auto___31646 = (0);
while(true){
if((i__21281__auto___31646 < len__21280__auto___31645)){
args31086.push((arguments[i__21281__auto___31646]));

var G__31647 = (i__21281__auto___31646 + (1));
i__21281__auto___31646 = G__31647;
continue;
} else {
}
break;
}

var G__31090 = args31086.length;
switch (G__31090) {
case 0:
return om_tools.dom.s.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args31086.slice((1)),(0),null));
return om_tools.dom.s.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.s.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.s,null,null);
});

om_tools.dom.s.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.s,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.s.cljs$lang$applyTo = (function (seq31087){
var G__31088 = cljs.core.first.call(null,seq31087);
var seq31087__$1 = cljs.core.next.call(null,seq31087);
return om_tools.dom.s.cljs$core$IFn$_invoke$arity$variadic(G__31088,seq31087__$1);
});

om_tools.dom.s.cljs$lang$maxFixedArity = (1);


om_tools.dom.samp = (function om_tools$dom$samp(var_args){
var args31091 = [];
var len__21280__auto___31649 = arguments.length;
var i__21281__auto___31650 = (0);
while(true){
if((i__21281__auto___31650 < len__21280__auto___31649)){
args31091.push((arguments[i__21281__auto___31650]));

var G__31651 = (i__21281__auto___31650 + (1));
i__21281__auto___31650 = G__31651;
continue;
} else {
}
break;
}

var G__31095 = args31091.length;
switch (G__31095) {
case 0:
return om_tools.dom.samp.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args31091.slice((1)),(0),null));
return om_tools.dom.samp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.samp.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.samp,null,null);
});

om_tools.dom.samp.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.samp,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.samp.cljs$lang$applyTo = (function (seq31092){
var G__31093 = cljs.core.first.call(null,seq31092);
var seq31092__$1 = cljs.core.next.call(null,seq31092);
return om_tools.dom.samp.cljs$core$IFn$_invoke$arity$variadic(G__31093,seq31092__$1);
});

om_tools.dom.samp.cljs$lang$maxFixedArity = (1);


om_tools.dom.script = (function om_tools$dom$script(var_args){
var args31096 = [];
var len__21280__auto___31653 = arguments.length;
var i__21281__auto___31654 = (0);
while(true){
if((i__21281__auto___31654 < len__21280__auto___31653)){
args31096.push((arguments[i__21281__auto___31654]));

var G__31655 = (i__21281__auto___31654 + (1));
i__21281__auto___31654 = G__31655;
continue;
} else {
}
break;
}

var G__31100 = args31096.length;
switch (G__31100) {
case 0:
return om_tools.dom.script.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args31096.slice((1)),(0),null));
return om_tools.dom.script.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.script.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.script,null,null);
});

om_tools.dom.script.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.script,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.script.cljs$lang$applyTo = (function (seq31097){
var G__31098 = cljs.core.first.call(null,seq31097);
var seq31097__$1 = cljs.core.next.call(null,seq31097);
return om_tools.dom.script.cljs$core$IFn$_invoke$arity$variadic(G__31098,seq31097__$1);
});

om_tools.dom.script.cljs$lang$maxFixedArity = (1);


om_tools.dom.section = (function om_tools$dom$section(var_args){
var args31101 = [];
var len__21280__auto___31657 = arguments.length;
var i__21281__auto___31658 = (0);
while(true){
if((i__21281__auto___31658 < len__21280__auto___31657)){
args31101.push((arguments[i__21281__auto___31658]));

var G__31659 = (i__21281__auto___31658 + (1));
i__21281__auto___31658 = G__31659;
continue;
} else {
}
break;
}

var G__31105 = args31101.length;
switch (G__31105) {
case 0:
return om_tools.dom.section.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args31101.slice((1)),(0),null));
return om_tools.dom.section.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.section.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.section,null,null);
});

om_tools.dom.section.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.section,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.section.cljs$lang$applyTo = (function (seq31102){
var G__31103 = cljs.core.first.call(null,seq31102);
var seq31102__$1 = cljs.core.next.call(null,seq31102);
return om_tools.dom.section.cljs$core$IFn$_invoke$arity$variadic(G__31103,seq31102__$1);
});

om_tools.dom.section.cljs$lang$maxFixedArity = (1);


om_tools.dom.small = (function om_tools$dom$small(var_args){
var args31106 = [];
var len__21280__auto___31661 = arguments.length;
var i__21281__auto___31662 = (0);
while(true){
if((i__21281__auto___31662 < len__21280__auto___31661)){
args31106.push((arguments[i__21281__auto___31662]));

var G__31663 = (i__21281__auto___31662 + (1));
i__21281__auto___31662 = G__31663;
continue;
} else {
}
break;
}

var G__31110 = args31106.length;
switch (G__31110) {
case 0:
return om_tools.dom.small.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args31106.slice((1)),(0),null));
return om_tools.dom.small.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.small.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.small,null,null);
});

om_tools.dom.small.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.small,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.small.cljs$lang$applyTo = (function (seq31107){
var G__31108 = cljs.core.first.call(null,seq31107);
var seq31107__$1 = cljs.core.next.call(null,seq31107);
return om_tools.dom.small.cljs$core$IFn$_invoke$arity$variadic(G__31108,seq31107__$1);
});

om_tools.dom.small.cljs$lang$maxFixedArity = (1);


om_tools.dom.source = (function om_tools$dom$source(var_args){
var args31111 = [];
var len__21280__auto___31665 = arguments.length;
var i__21281__auto___31666 = (0);
while(true){
if((i__21281__auto___31666 < len__21280__auto___31665)){
args31111.push((arguments[i__21281__auto___31666]));

var G__31667 = (i__21281__auto___31666 + (1));
i__21281__auto___31666 = G__31667;
continue;
} else {
}
break;
}

var G__31115 = args31111.length;
switch (G__31115) {
case 0:
return om_tools.dom.source.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args31111.slice((1)),(0),null));
return om_tools.dom.source.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.source.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.source,null,null);
});

om_tools.dom.source.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.source,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.source.cljs$lang$applyTo = (function (seq31112){
var G__31113 = cljs.core.first.call(null,seq31112);
var seq31112__$1 = cljs.core.next.call(null,seq31112);
return om_tools.dom.source.cljs$core$IFn$_invoke$arity$variadic(G__31113,seq31112__$1);
});

om_tools.dom.source.cljs$lang$maxFixedArity = (1);


om_tools.dom.span = (function om_tools$dom$span(var_args){
var args31116 = [];
var len__21280__auto___31669 = arguments.length;
var i__21281__auto___31670 = (0);
while(true){
if((i__21281__auto___31670 < len__21280__auto___31669)){
args31116.push((arguments[i__21281__auto___31670]));

var G__31671 = (i__21281__auto___31670 + (1));
i__21281__auto___31670 = G__31671;
continue;
} else {
}
break;
}

var G__31120 = args31116.length;
switch (G__31120) {
case 0:
return om_tools.dom.span.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args31116.slice((1)),(0),null));
return om_tools.dom.span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.span.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.span,null,null);
});

om_tools.dom.span.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.span,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.span.cljs$lang$applyTo = (function (seq31117){
var G__31118 = cljs.core.first.call(null,seq31117);
var seq31117__$1 = cljs.core.next.call(null,seq31117);
return om_tools.dom.span.cljs$core$IFn$_invoke$arity$variadic(G__31118,seq31117__$1);
});

om_tools.dom.span.cljs$lang$maxFixedArity = (1);


om_tools.dom.strong = (function om_tools$dom$strong(var_args){
var args31121 = [];
var len__21280__auto___31673 = arguments.length;
var i__21281__auto___31674 = (0);
while(true){
if((i__21281__auto___31674 < len__21280__auto___31673)){
args31121.push((arguments[i__21281__auto___31674]));

var G__31675 = (i__21281__auto___31674 + (1));
i__21281__auto___31674 = G__31675;
continue;
} else {
}
break;
}

var G__31125 = args31121.length;
switch (G__31125) {
case 0:
return om_tools.dom.strong.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args31121.slice((1)),(0),null));
return om_tools.dom.strong.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.strong.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.strong,null,null);
});

om_tools.dom.strong.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.strong,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.strong.cljs$lang$applyTo = (function (seq31122){
var G__31123 = cljs.core.first.call(null,seq31122);
var seq31122__$1 = cljs.core.next.call(null,seq31122);
return om_tools.dom.strong.cljs$core$IFn$_invoke$arity$variadic(G__31123,seq31122__$1);
});

om_tools.dom.strong.cljs$lang$maxFixedArity = (1);


om_tools.dom.style = (function om_tools$dom$style(var_args){
var args31126 = [];
var len__21280__auto___31677 = arguments.length;
var i__21281__auto___31678 = (0);
while(true){
if((i__21281__auto___31678 < len__21280__auto___31677)){
args31126.push((arguments[i__21281__auto___31678]));

var G__31679 = (i__21281__auto___31678 + (1));
i__21281__auto___31678 = G__31679;
continue;
} else {
}
break;
}

var G__31130 = args31126.length;
switch (G__31130) {
case 0:
return om_tools.dom.style.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args31126.slice((1)),(0),null));
return om_tools.dom.style.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.style.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.style,null,null);
});

om_tools.dom.style.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.style,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.style.cljs$lang$applyTo = (function (seq31127){
var G__31128 = cljs.core.first.call(null,seq31127);
var seq31127__$1 = cljs.core.next.call(null,seq31127);
return om_tools.dom.style.cljs$core$IFn$_invoke$arity$variadic(G__31128,seq31127__$1);
});

om_tools.dom.style.cljs$lang$maxFixedArity = (1);


om_tools.dom.sub = (function om_tools$dom$sub(var_args){
var args31131 = [];
var len__21280__auto___31681 = arguments.length;
var i__21281__auto___31682 = (0);
while(true){
if((i__21281__auto___31682 < len__21280__auto___31681)){
args31131.push((arguments[i__21281__auto___31682]));

var G__31683 = (i__21281__auto___31682 + (1));
i__21281__auto___31682 = G__31683;
continue;
} else {
}
break;
}

var G__31135 = args31131.length;
switch (G__31135) {
case 0:
return om_tools.dom.sub.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args31131.slice((1)),(0),null));
return om_tools.dom.sub.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.sub.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.sub,null,null);
});

om_tools.dom.sub.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.sub,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.sub.cljs$lang$applyTo = (function (seq31132){
var G__31133 = cljs.core.first.call(null,seq31132);
var seq31132__$1 = cljs.core.next.call(null,seq31132);
return om_tools.dom.sub.cljs$core$IFn$_invoke$arity$variadic(G__31133,seq31132__$1);
});

om_tools.dom.sub.cljs$lang$maxFixedArity = (1);


om_tools.dom.summary = (function om_tools$dom$summary(var_args){
var args31136 = [];
var len__21280__auto___31685 = arguments.length;
var i__21281__auto___31686 = (0);
while(true){
if((i__21281__auto___31686 < len__21280__auto___31685)){
args31136.push((arguments[i__21281__auto___31686]));

var G__31687 = (i__21281__auto___31686 + (1));
i__21281__auto___31686 = G__31687;
continue;
} else {
}
break;
}

var G__31140 = args31136.length;
switch (G__31140) {
case 0:
return om_tools.dom.summary.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args31136.slice((1)),(0),null));
return om_tools.dom.summary.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.summary.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.summary,null,null);
});

om_tools.dom.summary.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.summary,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.summary.cljs$lang$applyTo = (function (seq31137){
var G__31138 = cljs.core.first.call(null,seq31137);
var seq31137__$1 = cljs.core.next.call(null,seq31137);
return om_tools.dom.summary.cljs$core$IFn$_invoke$arity$variadic(G__31138,seq31137__$1);
});

om_tools.dom.summary.cljs$lang$maxFixedArity = (1);


om_tools.dom.sup = (function om_tools$dom$sup(var_args){
var args31141 = [];
var len__21280__auto___31689 = arguments.length;
var i__21281__auto___31690 = (0);
while(true){
if((i__21281__auto___31690 < len__21280__auto___31689)){
args31141.push((arguments[i__21281__auto___31690]));

var G__31691 = (i__21281__auto___31690 + (1));
i__21281__auto___31690 = G__31691;
continue;
} else {
}
break;
}

var G__31145 = args31141.length;
switch (G__31145) {
case 0:
return om_tools.dom.sup.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args31141.slice((1)),(0),null));
return om_tools.dom.sup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.sup.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.sup,null,null);
});

om_tools.dom.sup.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.sup,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.sup.cljs$lang$applyTo = (function (seq31142){
var G__31143 = cljs.core.first.call(null,seq31142);
var seq31142__$1 = cljs.core.next.call(null,seq31142);
return om_tools.dom.sup.cljs$core$IFn$_invoke$arity$variadic(G__31143,seq31142__$1);
});

om_tools.dom.sup.cljs$lang$maxFixedArity = (1);


om_tools.dom.table = (function om_tools$dom$table(var_args){
var args31146 = [];
var len__21280__auto___31693 = arguments.length;
var i__21281__auto___31694 = (0);
while(true){
if((i__21281__auto___31694 < len__21280__auto___31693)){
args31146.push((arguments[i__21281__auto___31694]));

var G__31695 = (i__21281__auto___31694 + (1));
i__21281__auto___31694 = G__31695;
continue;
} else {
}
break;
}

var G__31150 = args31146.length;
switch (G__31150) {
case 0:
return om_tools.dom.table.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args31146.slice((1)),(0),null));
return om_tools.dom.table.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.table.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.table,null,null);
});

om_tools.dom.table.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.table,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.table.cljs$lang$applyTo = (function (seq31147){
var G__31148 = cljs.core.first.call(null,seq31147);
var seq31147__$1 = cljs.core.next.call(null,seq31147);
return om_tools.dom.table.cljs$core$IFn$_invoke$arity$variadic(G__31148,seq31147__$1);
});

om_tools.dom.table.cljs$lang$maxFixedArity = (1);


om_tools.dom.tbody = (function om_tools$dom$tbody(var_args){
var args31151 = [];
var len__21280__auto___31697 = arguments.length;
var i__21281__auto___31698 = (0);
while(true){
if((i__21281__auto___31698 < len__21280__auto___31697)){
args31151.push((arguments[i__21281__auto___31698]));

var G__31699 = (i__21281__auto___31698 + (1));
i__21281__auto___31698 = G__31699;
continue;
} else {
}
break;
}

var G__31155 = args31151.length;
switch (G__31155) {
case 0:
return om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args31151.slice((1)),(0),null));
return om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tbody,null,null);
});

om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.tbody,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.tbody.cljs$lang$applyTo = (function (seq31152){
var G__31153 = cljs.core.first.call(null,seq31152);
var seq31152__$1 = cljs.core.next.call(null,seq31152);
return om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$variadic(G__31153,seq31152__$1);
});

om_tools.dom.tbody.cljs$lang$maxFixedArity = (1);


om_tools.dom.td = (function om_tools$dom$td(var_args){
var args31156 = [];
var len__21280__auto___31701 = arguments.length;
var i__21281__auto___31702 = (0);
while(true){
if((i__21281__auto___31702 < len__21280__auto___31701)){
args31156.push((arguments[i__21281__auto___31702]));

var G__31703 = (i__21281__auto___31702 + (1));
i__21281__auto___31702 = G__31703;
continue;
} else {
}
break;
}

var G__31160 = args31156.length;
switch (G__31160) {
case 0:
return om_tools.dom.td.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args31156.slice((1)),(0),null));
return om_tools.dom.td.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.td.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.td,null,null);
});

om_tools.dom.td.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.td,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.td.cljs$lang$applyTo = (function (seq31157){
var G__31158 = cljs.core.first.call(null,seq31157);
var seq31157__$1 = cljs.core.next.call(null,seq31157);
return om_tools.dom.td.cljs$core$IFn$_invoke$arity$variadic(G__31158,seq31157__$1);
});

om_tools.dom.td.cljs$lang$maxFixedArity = (1);


om_tools.dom.tfoot = (function om_tools$dom$tfoot(var_args){
var args31161 = [];
var len__21280__auto___31705 = arguments.length;
var i__21281__auto___31706 = (0);
while(true){
if((i__21281__auto___31706 < len__21280__auto___31705)){
args31161.push((arguments[i__21281__auto___31706]));

var G__31707 = (i__21281__auto___31706 + (1));
i__21281__auto___31706 = G__31707;
continue;
} else {
}
break;
}

var G__31165 = args31161.length;
switch (G__31165) {
case 0:
return om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args31161.slice((1)),(0),null));
return om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tfoot,null,null);
});

om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.tfoot,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.tfoot.cljs$lang$applyTo = (function (seq31162){
var G__31163 = cljs.core.first.call(null,seq31162);
var seq31162__$1 = cljs.core.next.call(null,seq31162);
return om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic(G__31163,seq31162__$1);
});

om_tools.dom.tfoot.cljs$lang$maxFixedArity = (1);


om_tools.dom.th = (function om_tools$dom$th(var_args){
var args31166 = [];
var len__21280__auto___31709 = arguments.length;
var i__21281__auto___31710 = (0);
while(true){
if((i__21281__auto___31710 < len__21280__auto___31709)){
args31166.push((arguments[i__21281__auto___31710]));

var G__31711 = (i__21281__auto___31710 + (1));
i__21281__auto___31710 = G__31711;
continue;
} else {
}
break;
}

var G__31170 = args31166.length;
switch (G__31170) {
case 0:
return om_tools.dom.th.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args31166.slice((1)),(0),null));
return om_tools.dom.th.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.th.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.th,null,null);
});

om_tools.dom.th.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.th,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.th.cljs$lang$applyTo = (function (seq31167){
var G__31168 = cljs.core.first.call(null,seq31167);
var seq31167__$1 = cljs.core.next.call(null,seq31167);
return om_tools.dom.th.cljs$core$IFn$_invoke$arity$variadic(G__31168,seq31167__$1);
});

om_tools.dom.th.cljs$lang$maxFixedArity = (1);


om_tools.dom.thead = (function om_tools$dom$thead(var_args){
var args31171 = [];
var len__21280__auto___31713 = arguments.length;
var i__21281__auto___31714 = (0);
while(true){
if((i__21281__auto___31714 < len__21280__auto___31713)){
args31171.push((arguments[i__21281__auto___31714]));

var G__31715 = (i__21281__auto___31714 + (1));
i__21281__auto___31714 = G__31715;
continue;
} else {
}
break;
}

var G__31175 = args31171.length;
switch (G__31175) {
case 0:
return om_tools.dom.thead.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args31171.slice((1)),(0),null));
return om_tools.dom.thead.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.thead.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.thead,null,null);
});

om_tools.dom.thead.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.thead,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.thead.cljs$lang$applyTo = (function (seq31172){
var G__31173 = cljs.core.first.call(null,seq31172);
var seq31172__$1 = cljs.core.next.call(null,seq31172);
return om_tools.dom.thead.cljs$core$IFn$_invoke$arity$variadic(G__31173,seq31172__$1);
});

om_tools.dom.thead.cljs$lang$maxFixedArity = (1);


om_tools.dom.time = (function om_tools$dom$time(var_args){
var args31176 = [];
var len__21280__auto___31717 = arguments.length;
var i__21281__auto___31718 = (0);
while(true){
if((i__21281__auto___31718 < len__21280__auto___31717)){
args31176.push((arguments[i__21281__auto___31718]));

var G__31719 = (i__21281__auto___31718 + (1));
i__21281__auto___31718 = G__31719;
continue;
} else {
}
break;
}

var G__31180 = args31176.length;
switch (G__31180) {
case 0:
return om_tools.dom.time.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args31176.slice((1)),(0),null));
return om_tools.dom.time.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.time.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.time,null,null);
});

om_tools.dom.time.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.time,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.time.cljs$lang$applyTo = (function (seq31177){
var G__31178 = cljs.core.first.call(null,seq31177);
var seq31177__$1 = cljs.core.next.call(null,seq31177);
return om_tools.dom.time.cljs$core$IFn$_invoke$arity$variadic(G__31178,seq31177__$1);
});

om_tools.dom.time.cljs$lang$maxFixedArity = (1);


om_tools.dom.title = (function om_tools$dom$title(var_args){
var args31181 = [];
var len__21280__auto___31721 = arguments.length;
var i__21281__auto___31722 = (0);
while(true){
if((i__21281__auto___31722 < len__21280__auto___31721)){
args31181.push((arguments[i__21281__auto___31722]));

var G__31723 = (i__21281__auto___31722 + (1));
i__21281__auto___31722 = G__31723;
continue;
} else {
}
break;
}

var G__31185 = args31181.length;
switch (G__31185) {
case 0:
return om_tools.dom.title.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args31181.slice((1)),(0),null));
return om_tools.dom.title.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.title.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.title,null,null);
});

om_tools.dom.title.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.title,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.title.cljs$lang$applyTo = (function (seq31182){
var G__31183 = cljs.core.first.call(null,seq31182);
var seq31182__$1 = cljs.core.next.call(null,seq31182);
return om_tools.dom.title.cljs$core$IFn$_invoke$arity$variadic(G__31183,seq31182__$1);
});

om_tools.dom.title.cljs$lang$maxFixedArity = (1);


om_tools.dom.tr = (function om_tools$dom$tr(var_args){
var args31186 = [];
var len__21280__auto___31725 = arguments.length;
var i__21281__auto___31726 = (0);
while(true){
if((i__21281__auto___31726 < len__21280__auto___31725)){
args31186.push((arguments[i__21281__auto___31726]));

var G__31727 = (i__21281__auto___31726 + (1));
i__21281__auto___31726 = G__31727;
continue;
} else {
}
break;
}

var G__31190 = args31186.length;
switch (G__31190) {
case 0:
return om_tools.dom.tr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args31186.slice((1)),(0),null));
return om_tools.dom.tr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.tr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tr,null,null);
});

om_tools.dom.tr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.tr,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.tr.cljs$lang$applyTo = (function (seq31187){
var G__31188 = cljs.core.first.call(null,seq31187);
var seq31187__$1 = cljs.core.next.call(null,seq31187);
return om_tools.dom.tr.cljs$core$IFn$_invoke$arity$variadic(G__31188,seq31187__$1);
});

om_tools.dom.tr.cljs$lang$maxFixedArity = (1);


om_tools.dom.track = (function om_tools$dom$track(var_args){
var args31191 = [];
var len__21280__auto___31729 = arguments.length;
var i__21281__auto___31730 = (0);
while(true){
if((i__21281__auto___31730 < len__21280__auto___31729)){
args31191.push((arguments[i__21281__auto___31730]));

var G__31731 = (i__21281__auto___31730 + (1));
i__21281__auto___31730 = G__31731;
continue;
} else {
}
break;
}

var G__31195 = args31191.length;
switch (G__31195) {
case 0:
return om_tools.dom.track.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args31191.slice((1)),(0),null));
return om_tools.dom.track.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.track.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.track,null,null);
});

om_tools.dom.track.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.track,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.track.cljs$lang$applyTo = (function (seq31192){
var G__31193 = cljs.core.first.call(null,seq31192);
var seq31192__$1 = cljs.core.next.call(null,seq31192);
return om_tools.dom.track.cljs$core$IFn$_invoke$arity$variadic(G__31193,seq31192__$1);
});

om_tools.dom.track.cljs$lang$maxFixedArity = (1);


om_tools.dom.u = (function om_tools$dom$u(var_args){
var args31196 = [];
var len__21280__auto___31733 = arguments.length;
var i__21281__auto___31734 = (0);
while(true){
if((i__21281__auto___31734 < len__21280__auto___31733)){
args31196.push((arguments[i__21281__auto___31734]));

var G__31735 = (i__21281__auto___31734 + (1));
i__21281__auto___31734 = G__31735;
continue;
} else {
}
break;
}

var G__31200 = args31196.length;
switch (G__31200) {
case 0:
return om_tools.dom.u.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args31196.slice((1)),(0),null));
return om_tools.dom.u.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.u.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.u,null,null);
});

om_tools.dom.u.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.u,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.u.cljs$lang$applyTo = (function (seq31197){
var G__31198 = cljs.core.first.call(null,seq31197);
var seq31197__$1 = cljs.core.next.call(null,seq31197);
return om_tools.dom.u.cljs$core$IFn$_invoke$arity$variadic(G__31198,seq31197__$1);
});

om_tools.dom.u.cljs$lang$maxFixedArity = (1);


om_tools.dom.ul = (function om_tools$dom$ul(var_args){
var args31201 = [];
var len__21280__auto___31737 = arguments.length;
var i__21281__auto___31738 = (0);
while(true){
if((i__21281__auto___31738 < len__21280__auto___31737)){
args31201.push((arguments[i__21281__auto___31738]));

var G__31739 = (i__21281__auto___31738 + (1));
i__21281__auto___31738 = G__31739;
continue;
} else {
}
break;
}

var G__31205 = args31201.length;
switch (G__31205) {
case 0:
return om_tools.dom.ul.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args31201.slice((1)),(0),null));
return om_tools.dom.ul.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.ul.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ul,null,null);
});

om_tools.dom.ul.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.ul,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.ul.cljs$lang$applyTo = (function (seq31202){
var G__31203 = cljs.core.first.call(null,seq31202);
var seq31202__$1 = cljs.core.next.call(null,seq31202);
return om_tools.dom.ul.cljs$core$IFn$_invoke$arity$variadic(G__31203,seq31202__$1);
});

om_tools.dom.ul.cljs$lang$maxFixedArity = (1);


om_tools.dom.var$ = (function om_tools$dom$var(var_args){
var args31206 = [];
var len__21280__auto___31741 = arguments.length;
var i__21281__auto___31742 = (0);
while(true){
if((i__21281__auto___31742 < len__21280__auto___31741)){
args31206.push((arguments[i__21281__auto___31742]));

var G__31743 = (i__21281__auto___31742 + (1));
i__21281__auto___31742 = G__31743;
continue;
} else {
}
break;
}

var G__31210 = args31206.length;
switch (G__31210) {
case 0:
return om_tools.dom.var$.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args31206.slice((1)),(0),null));
return om_tools.dom.var$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.var$.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.var$,null,null);
});

om_tools.dom.var$.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.var$,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.var$.cljs$lang$applyTo = (function (seq31207){
var G__31208 = cljs.core.first.call(null,seq31207);
var seq31207__$1 = cljs.core.next.call(null,seq31207);
return om_tools.dom.var$.cljs$core$IFn$_invoke$arity$variadic(G__31208,seq31207__$1);
});

om_tools.dom.var$.cljs$lang$maxFixedArity = (1);


om_tools.dom.video = (function om_tools$dom$video(var_args){
var args31211 = [];
var len__21280__auto___31745 = arguments.length;
var i__21281__auto___31746 = (0);
while(true){
if((i__21281__auto___31746 < len__21280__auto___31745)){
args31211.push((arguments[i__21281__auto___31746]));

var G__31747 = (i__21281__auto___31746 + (1));
i__21281__auto___31746 = G__31747;
continue;
} else {
}
break;
}

var G__31215 = args31211.length;
switch (G__31215) {
case 0:
return om_tools.dom.video.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args31211.slice((1)),(0),null));
return om_tools.dom.video.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.video.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.video,null,null);
});

om_tools.dom.video.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.video,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.video.cljs$lang$applyTo = (function (seq31212){
var G__31213 = cljs.core.first.call(null,seq31212);
var seq31212__$1 = cljs.core.next.call(null,seq31212);
return om_tools.dom.video.cljs$core$IFn$_invoke$arity$variadic(G__31213,seq31212__$1);
});

om_tools.dom.video.cljs$lang$maxFixedArity = (1);


om_tools.dom.wbr = (function om_tools$dom$wbr(var_args){
var args31216 = [];
var len__21280__auto___31749 = arguments.length;
var i__21281__auto___31750 = (0);
while(true){
if((i__21281__auto___31750 < len__21280__auto___31749)){
args31216.push((arguments[i__21281__auto___31750]));

var G__31751 = (i__21281__auto___31750 + (1));
i__21281__auto___31750 = G__31751;
continue;
} else {
}
break;
}

var G__31220 = args31216.length;
switch (G__31220) {
case 0:
return om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args31216.slice((1)),(0),null));
return om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.wbr,null,null);
});

om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.wbr,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.wbr.cljs$lang$applyTo = (function (seq31217){
var G__31218 = cljs.core.first.call(null,seq31217);
var seq31217__$1 = cljs.core.next.call(null,seq31217);
return om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$variadic(G__31218,seq31217__$1);
});

om_tools.dom.wbr.cljs$lang$maxFixedArity = (1);


om_tools.dom.circle = (function om_tools$dom$circle(var_args){
var args31221 = [];
var len__21280__auto___31753 = arguments.length;
var i__21281__auto___31754 = (0);
while(true){
if((i__21281__auto___31754 < len__21280__auto___31753)){
args31221.push((arguments[i__21281__auto___31754]));

var G__31755 = (i__21281__auto___31754 + (1));
i__21281__auto___31754 = G__31755;
continue;
} else {
}
break;
}

var G__31225 = args31221.length;
switch (G__31225) {
case 0:
return om_tools.dom.circle.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args31221.slice((1)),(0),null));
return om_tools.dom.circle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.circle.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.circle,null,null);
});

om_tools.dom.circle.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.circle,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.circle.cljs$lang$applyTo = (function (seq31222){
var G__31223 = cljs.core.first.call(null,seq31222);
var seq31222__$1 = cljs.core.next.call(null,seq31222);
return om_tools.dom.circle.cljs$core$IFn$_invoke$arity$variadic(G__31223,seq31222__$1);
});

om_tools.dom.circle.cljs$lang$maxFixedArity = (1);


om_tools.dom.clipPath = (function om_tools$dom$clipPath(var_args){
var args31226 = [];
var len__21280__auto___31757 = arguments.length;
var i__21281__auto___31758 = (0);
while(true){
if((i__21281__auto___31758 < len__21280__auto___31757)){
args31226.push((arguments[i__21281__auto___31758]));

var G__31759 = (i__21281__auto___31758 + (1));
i__21281__auto___31758 = G__31759;
continue;
} else {
}
break;
}

var G__31230 = args31226.length;
switch (G__31230) {
case 0:
return om_tools.dom.clipPath.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args31226.slice((1)),(0),null));
return om_tools.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.clipPath.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.clipPath,null,null);
});

om_tools.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.clipPath,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.clipPath.cljs$lang$applyTo = (function (seq31227){
var G__31228 = cljs.core.first.call(null,seq31227);
var seq31227__$1 = cljs.core.next.call(null,seq31227);
return om_tools.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic(G__31228,seq31227__$1);
});

om_tools.dom.clipPath.cljs$lang$maxFixedArity = (1);


om_tools.dom.ellipse = (function om_tools$dom$ellipse(var_args){
var args31231 = [];
var len__21280__auto___31761 = arguments.length;
var i__21281__auto___31762 = (0);
while(true){
if((i__21281__auto___31762 < len__21280__auto___31761)){
args31231.push((arguments[i__21281__auto___31762]));

var G__31763 = (i__21281__auto___31762 + (1));
i__21281__auto___31762 = G__31763;
continue;
} else {
}
break;
}

var G__31235 = args31231.length;
switch (G__31235) {
case 0:
return om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args31231.slice((1)),(0),null));
return om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ellipse,null,null);
});

om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.ellipse,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.ellipse.cljs$lang$applyTo = (function (seq31232){
var G__31233 = cljs.core.first.call(null,seq31232);
var seq31232__$1 = cljs.core.next.call(null,seq31232);
return om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic(G__31233,seq31232__$1);
});

om_tools.dom.ellipse.cljs$lang$maxFixedArity = (1);


om_tools.dom.g = (function om_tools$dom$g(var_args){
var args31236 = [];
var len__21280__auto___31765 = arguments.length;
var i__21281__auto___31766 = (0);
while(true){
if((i__21281__auto___31766 < len__21280__auto___31765)){
args31236.push((arguments[i__21281__auto___31766]));

var G__31767 = (i__21281__auto___31766 + (1));
i__21281__auto___31766 = G__31767;
continue;
} else {
}
break;
}

var G__31240 = args31236.length;
switch (G__31240) {
case 0:
return om_tools.dom.g.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args31236.slice((1)),(0),null));
return om_tools.dom.g.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.g.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.g,null,null);
});

om_tools.dom.g.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.g,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.g.cljs$lang$applyTo = (function (seq31237){
var G__31238 = cljs.core.first.call(null,seq31237);
var seq31237__$1 = cljs.core.next.call(null,seq31237);
return om_tools.dom.g.cljs$core$IFn$_invoke$arity$variadic(G__31238,seq31237__$1);
});

om_tools.dom.g.cljs$lang$maxFixedArity = (1);


om_tools.dom.line = (function om_tools$dom$line(var_args){
var args31241 = [];
var len__21280__auto___31769 = arguments.length;
var i__21281__auto___31770 = (0);
while(true){
if((i__21281__auto___31770 < len__21280__auto___31769)){
args31241.push((arguments[i__21281__auto___31770]));

var G__31771 = (i__21281__auto___31770 + (1));
i__21281__auto___31770 = G__31771;
continue;
} else {
}
break;
}

var G__31245 = args31241.length;
switch (G__31245) {
case 0:
return om_tools.dom.line.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args31241.slice((1)),(0),null));
return om_tools.dom.line.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.line.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.line,null,null);
});

om_tools.dom.line.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.line,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.line.cljs$lang$applyTo = (function (seq31242){
var G__31243 = cljs.core.first.call(null,seq31242);
var seq31242__$1 = cljs.core.next.call(null,seq31242);
return om_tools.dom.line.cljs$core$IFn$_invoke$arity$variadic(G__31243,seq31242__$1);
});

om_tools.dom.line.cljs$lang$maxFixedArity = (1);


om_tools.dom.mask = (function om_tools$dom$mask(var_args){
var args31246 = [];
var len__21280__auto___31773 = arguments.length;
var i__21281__auto___31774 = (0);
while(true){
if((i__21281__auto___31774 < len__21280__auto___31773)){
args31246.push((arguments[i__21281__auto___31774]));

var G__31775 = (i__21281__auto___31774 + (1));
i__21281__auto___31774 = G__31775;
continue;
} else {
}
break;
}

var G__31250 = args31246.length;
switch (G__31250) {
case 0:
return om_tools.dom.mask.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args31246.slice((1)),(0),null));
return om_tools.dom.mask.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.mask.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.mask,null,null);
});

om_tools.dom.mask.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.mask,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.mask.cljs$lang$applyTo = (function (seq31247){
var G__31248 = cljs.core.first.call(null,seq31247);
var seq31247__$1 = cljs.core.next.call(null,seq31247);
return om_tools.dom.mask.cljs$core$IFn$_invoke$arity$variadic(G__31248,seq31247__$1);
});

om_tools.dom.mask.cljs$lang$maxFixedArity = (1);


om_tools.dom.path = (function om_tools$dom$path(var_args){
var args31251 = [];
var len__21280__auto___31777 = arguments.length;
var i__21281__auto___31778 = (0);
while(true){
if((i__21281__auto___31778 < len__21280__auto___31777)){
args31251.push((arguments[i__21281__auto___31778]));

var G__31779 = (i__21281__auto___31778 + (1));
i__21281__auto___31778 = G__31779;
continue;
} else {
}
break;
}

var G__31255 = args31251.length;
switch (G__31255) {
case 0:
return om_tools.dom.path.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args31251.slice((1)),(0),null));
return om_tools.dom.path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.path.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.path,null,null);
});

om_tools.dom.path.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.path,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.path.cljs$lang$applyTo = (function (seq31252){
var G__31253 = cljs.core.first.call(null,seq31252);
var seq31252__$1 = cljs.core.next.call(null,seq31252);
return om_tools.dom.path.cljs$core$IFn$_invoke$arity$variadic(G__31253,seq31252__$1);
});

om_tools.dom.path.cljs$lang$maxFixedArity = (1);


om_tools.dom.pattern = (function om_tools$dom$pattern(var_args){
var args31256 = [];
var len__21280__auto___31781 = arguments.length;
var i__21281__auto___31782 = (0);
while(true){
if((i__21281__auto___31782 < len__21280__auto___31781)){
args31256.push((arguments[i__21281__auto___31782]));

var G__31783 = (i__21281__auto___31782 + (1));
i__21281__auto___31782 = G__31783;
continue;
} else {
}
break;
}

var G__31260 = args31256.length;
switch (G__31260) {
case 0:
return om_tools.dom.pattern.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args31256.slice((1)),(0),null));
return om_tools.dom.pattern.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.pattern.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.pattern,null,null);
});

om_tools.dom.pattern.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.pattern,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.pattern.cljs$lang$applyTo = (function (seq31257){
var G__31258 = cljs.core.first.call(null,seq31257);
var seq31257__$1 = cljs.core.next.call(null,seq31257);
return om_tools.dom.pattern.cljs$core$IFn$_invoke$arity$variadic(G__31258,seq31257__$1);
});

om_tools.dom.pattern.cljs$lang$maxFixedArity = (1);


om_tools.dom.polyline = (function om_tools$dom$polyline(var_args){
var args31261 = [];
var len__21280__auto___31785 = arguments.length;
var i__21281__auto___31786 = (0);
while(true){
if((i__21281__auto___31786 < len__21280__auto___31785)){
args31261.push((arguments[i__21281__auto___31786]));

var G__31787 = (i__21281__auto___31786 + (1));
i__21281__auto___31786 = G__31787;
continue;
} else {
}
break;
}

var G__31265 = args31261.length;
switch (G__31265) {
case 0:
return om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args31261.slice((1)),(0),null));
return om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.polyline,null,null);
});

om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.polyline,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.polyline.cljs$lang$applyTo = (function (seq31262){
var G__31263 = cljs.core.first.call(null,seq31262);
var seq31262__$1 = cljs.core.next.call(null,seq31262);
return om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$variadic(G__31263,seq31262__$1);
});

om_tools.dom.polyline.cljs$lang$maxFixedArity = (1);


om_tools.dom.rect = (function om_tools$dom$rect(var_args){
var args31266 = [];
var len__21280__auto___31789 = arguments.length;
var i__21281__auto___31790 = (0);
while(true){
if((i__21281__auto___31790 < len__21280__auto___31789)){
args31266.push((arguments[i__21281__auto___31790]));

var G__31791 = (i__21281__auto___31790 + (1));
i__21281__auto___31790 = G__31791;
continue;
} else {
}
break;
}

var G__31270 = args31266.length;
switch (G__31270) {
case 0:
return om_tools.dom.rect.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args31266.slice((1)),(0),null));
return om_tools.dom.rect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.rect.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.rect,null,null);
});

om_tools.dom.rect.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.rect,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.rect.cljs$lang$applyTo = (function (seq31267){
var G__31268 = cljs.core.first.call(null,seq31267);
var seq31267__$1 = cljs.core.next.call(null,seq31267);
return om_tools.dom.rect.cljs$core$IFn$_invoke$arity$variadic(G__31268,seq31267__$1);
});

om_tools.dom.rect.cljs$lang$maxFixedArity = (1);


om_tools.dom.svg = (function om_tools$dom$svg(var_args){
var args31271 = [];
var len__21280__auto___31793 = arguments.length;
var i__21281__auto___31794 = (0);
while(true){
if((i__21281__auto___31794 < len__21280__auto___31793)){
args31271.push((arguments[i__21281__auto___31794]));

var G__31795 = (i__21281__auto___31794 + (1));
i__21281__auto___31794 = G__31795;
continue;
} else {
}
break;
}

var G__31275 = args31271.length;
switch (G__31275) {
case 0:
return om_tools.dom.svg.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args31271.slice((1)),(0),null));
return om_tools.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.svg.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.svg,null,null);
});

om_tools.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.svg,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.svg.cljs$lang$applyTo = (function (seq31272){
var G__31273 = cljs.core.first.call(null,seq31272);
var seq31272__$1 = cljs.core.next.call(null,seq31272);
return om_tools.dom.svg.cljs$core$IFn$_invoke$arity$variadic(G__31273,seq31272__$1);
});

om_tools.dom.svg.cljs$lang$maxFixedArity = (1);


om_tools.dom.text = (function om_tools$dom$text(var_args){
var args31276 = [];
var len__21280__auto___31797 = arguments.length;
var i__21281__auto___31798 = (0);
while(true){
if((i__21281__auto___31798 < len__21280__auto___31797)){
args31276.push((arguments[i__21281__auto___31798]));

var G__31799 = (i__21281__auto___31798 + (1));
i__21281__auto___31798 = G__31799;
continue;
} else {
}
break;
}

var G__31280 = args31276.length;
switch (G__31280) {
case 0:
return om_tools.dom.text.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args31276.slice((1)),(0),null));
return om_tools.dom.text.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.text.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.text,null,null);
});

om_tools.dom.text.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.text,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.text.cljs$lang$applyTo = (function (seq31277){
var G__31278 = cljs.core.first.call(null,seq31277);
var seq31277__$1 = cljs.core.next.call(null,seq31277);
return om_tools.dom.text.cljs$core$IFn$_invoke$arity$variadic(G__31278,seq31277__$1);
});

om_tools.dom.text.cljs$lang$maxFixedArity = (1);


om_tools.dom.defs = (function om_tools$dom$defs(var_args){
var args31281 = [];
var len__21280__auto___31801 = arguments.length;
var i__21281__auto___31802 = (0);
while(true){
if((i__21281__auto___31802 < len__21280__auto___31801)){
args31281.push((arguments[i__21281__auto___31802]));

var G__31803 = (i__21281__auto___31802 + (1));
i__21281__auto___31802 = G__31803;
continue;
} else {
}
break;
}

var G__31285 = args31281.length;
switch (G__31285) {
case 0:
return om_tools.dom.defs.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args31281.slice((1)),(0),null));
return om_tools.dom.defs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.defs.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.defs,null,null);
});

om_tools.dom.defs.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.defs,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.defs.cljs$lang$applyTo = (function (seq31282){
var G__31283 = cljs.core.first.call(null,seq31282);
var seq31282__$1 = cljs.core.next.call(null,seq31282);
return om_tools.dom.defs.cljs$core$IFn$_invoke$arity$variadic(G__31283,seq31282__$1);
});

om_tools.dom.defs.cljs$lang$maxFixedArity = (1);


om_tools.dom.linearGradient = (function om_tools$dom$linearGradient(var_args){
var args31286 = [];
var len__21280__auto___31805 = arguments.length;
var i__21281__auto___31806 = (0);
while(true){
if((i__21281__auto___31806 < len__21280__auto___31805)){
args31286.push((arguments[i__21281__auto___31806]));

var G__31807 = (i__21281__auto___31806 + (1));
i__21281__auto___31806 = G__31807;
continue;
} else {
}
break;
}

var G__31290 = args31286.length;
switch (G__31290) {
case 0:
return om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args31286.slice((1)),(0),null));
return om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.linearGradient,null,null);
});

om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.linearGradient,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.linearGradient.cljs$lang$applyTo = (function (seq31287){
var G__31288 = cljs.core.first.call(null,seq31287);
var seq31287__$1 = cljs.core.next.call(null,seq31287);
return om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic(G__31288,seq31287__$1);
});

om_tools.dom.linearGradient.cljs$lang$maxFixedArity = (1);


om_tools.dom.polygon = (function om_tools$dom$polygon(var_args){
var args31291 = [];
var len__21280__auto___31809 = arguments.length;
var i__21281__auto___31810 = (0);
while(true){
if((i__21281__auto___31810 < len__21280__auto___31809)){
args31291.push((arguments[i__21281__auto___31810]));

var G__31811 = (i__21281__auto___31810 + (1));
i__21281__auto___31810 = G__31811;
continue;
} else {
}
break;
}

var G__31295 = args31291.length;
switch (G__31295) {
case 0:
return om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args31291.slice((1)),(0),null));
return om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.polygon,null,null);
});

om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.polygon,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.polygon.cljs$lang$applyTo = (function (seq31292){
var G__31293 = cljs.core.first.call(null,seq31292);
var seq31292__$1 = cljs.core.next.call(null,seq31292);
return om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$variadic(G__31293,seq31292__$1);
});

om_tools.dom.polygon.cljs$lang$maxFixedArity = (1);


om_tools.dom.radialGradient = (function om_tools$dom$radialGradient(var_args){
var args31296 = [];
var len__21280__auto___31813 = arguments.length;
var i__21281__auto___31814 = (0);
while(true){
if((i__21281__auto___31814 < len__21280__auto___31813)){
args31296.push((arguments[i__21281__auto___31814]));

var G__31815 = (i__21281__auto___31814 + (1));
i__21281__auto___31814 = G__31815;
continue;
} else {
}
break;
}

var G__31300 = args31296.length;
switch (G__31300) {
case 0:
return om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args31296.slice((1)),(0),null));
return om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.radialGradient,null,null);
});

om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.radialGradient,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.radialGradient.cljs$lang$applyTo = (function (seq31297){
var G__31298 = cljs.core.first.call(null,seq31297);
var seq31297__$1 = cljs.core.next.call(null,seq31297);
return om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic(G__31298,seq31297__$1);
});

om_tools.dom.radialGradient.cljs$lang$maxFixedArity = (1);


om_tools.dom.stop = (function om_tools$dom$stop(var_args){
var args31301 = [];
var len__21280__auto___31817 = arguments.length;
var i__21281__auto___31818 = (0);
while(true){
if((i__21281__auto___31818 < len__21280__auto___31817)){
args31301.push((arguments[i__21281__auto___31818]));

var G__31819 = (i__21281__auto___31818 + (1));
i__21281__auto___31818 = G__31819;
continue;
} else {
}
break;
}

var G__31305 = args31301.length;
switch (G__31305) {
case 0:
return om_tools.dom.stop.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args31301.slice((1)),(0),null));
return om_tools.dom.stop.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.stop.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.stop,null,null);
});

om_tools.dom.stop.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.stop,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.stop.cljs$lang$applyTo = (function (seq31302){
var G__31303 = cljs.core.first.call(null,seq31302);
var seq31302__$1 = cljs.core.next.call(null,seq31302);
return om_tools.dom.stop.cljs$core$IFn$_invoke$arity$variadic(G__31303,seq31302__$1);
});

om_tools.dom.stop.cljs$lang$maxFixedArity = (1);


om_tools.dom.tspan = (function om_tools$dom$tspan(var_args){
var args31306 = [];
var len__21280__auto___31821 = arguments.length;
var i__21281__auto___31822 = (0);
while(true){
if((i__21281__auto___31822 < len__21280__auto___31821)){
args31306.push((arguments[i__21281__auto___31822]));

var G__31823 = (i__21281__auto___31822 + (1));
i__21281__auto___31822 = G__31823;
continue;
} else {
}
break;
}

var G__31310 = args31306.length;
switch (G__31310) {
case 0:
return om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args31306.slice((1)),(0),null));
return om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tspan,null,null);
});

om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,React.DOM.tspan,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.tspan.cljs$lang$applyTo = (function (seq31307){
var G__31308 = cljs.core.first.call(null,seq31307);
var seq31307__$1 = cljs.core.next.call(null,seq31307);
return om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$variadic(G__31308,seq31307__$1);
});

om_tools.dom.tspan.cljs$lang$maxFixedArity = (1);


om_tools.dom.input = (function om_tools$dom$input(var_args){
var args31311 = [];
var len__21280__auto___31825 = arguments.length;
var i__21281__auto___31826 = (0);
while(true){
if((i__21281__auto___31826 < len__21280__auto___31825)){
args31311.push((arguments[i__21281__auto___31826]));

var G__31827 = (i__21281__auto___31826 + (1));
i__21281__auto___31826 = G__31827;
continue;
} else {
}
break;
}

var G__31315 = args31311.length;
switch (G__31315) {
case 0:
return om_tools.dom.input.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args31311.slice((1)),(0),null));
return om_tools.dom.input.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.input.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,om.dom.input,null,null);
});

om_tools.dom.input.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,om.dom.input,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.input.cljs$lang$applyTo = (function (seq31312){
var G__31313 = cljs.core.first.call(null,seq31312);
var seq31312__$1 = cljs.core.next.call(null,seq31312);
return om_tools.dom.input.cljs$core$IFn$_invoke$arity$variadic(G__31313,seq31312__$1);
});

om_tools.dom.input.cljs$lang$maxFixedArity = (1);


om_tools.dom.textarea = (function om_tools$dom$textarea(var_args){
var args31316 = [];
var len__21280__auto___31829 = arguments.length;
var i__21281__auto___31830 = (0);
while(true){
if((i__21281__auto___31830 < len__21280__auto___31829)){
args31316.push((arguments[i__21281__auto___31830]));

var G__31831 = (i__21281__auto___31830 + (1));
i__21281__auto___31830 = G__31831;
continue;
} else {
}
break;
}

var G__31320 = args31316.length;
switch (G__31320) {
case 0:
return om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args31316.slice((1)),(0),null));
return om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,om.dom.textarea,null,null);
});

om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,om.dom.textarea,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.textarea.cljs$lang$applyTo = (function (seq31317){
var G__31318 = cljs.core.first.call(null,seq31317);
var seq31317__$1 = cljs.core.next.call(null,seq31317);
return om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$variadic(G__31318,seq31317__$1);
});

om_tools.dom.textarea.cljs$lang$maxFixedArity = (1);


om_tools.dom.option = (function om_tools$dom$option(var_args){
var args30836 = [];
var len__21280__auto___31833 = arguments.length;
var i__21281__auto___31834 = (0);
while(true){
if((i__21281__auto___31834 < len__21280__auto___31833)){
args30836.push((arguments[i__21281__auto___31834]));

var G__31835 = (i__21281__auto___31834 + (1));
i__21281__auto___31834 = G__31835;
continue;
} else {
}
break;
}

var G__30840 = args30836.length;
switch (G__30840) {
case 0:
return om_tools.dom.option.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__21303__auto__ = (new cljs.core.IndexedSeq(args30836.slice((1)),(0),null));
return om_tools.dom.option.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21303__auto__);

}
});

om_tools.dom.option.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,om.dom.option,null,null);
});

om_tools.dom.option.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30644__auto__,children__30645__auto__){
return om_tools.dom.element.call(null,om.dom.option,opts__30644__auto__,children__30645__auto__);
});

om_tools.dom.option.cljs$lang$applyTo = (function (seq30837){
var G__30838 = cljs.core.first.call(null,seq30837);
var seq30837__$1 = cljs.core.next.call(null,seq30837);
return om_tools.dom.option.cljs$core$IFn$_invoke$arity$variadic(G__30838,seq30837__$1);
});

om_tools.dom.option.cljs$lang$maxFixedArity = (1);

om_tools.dom.class_set = (function om_tools$dom$class_set(m){

var temp__6728__auto__ = cljs.core.seq.call(null,cljs.core.distinct.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.keys.call(null,cljs.core.filter.call(null,cljs.core.val,m)))));
if(temp__6728__auto__){
var ks = temp__6728__auto__;
return clojure.string.join.call(null," ",ks);
} else {
return null;
}
});

//# sourceMappingURL=dom.js.map