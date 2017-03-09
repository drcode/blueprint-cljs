// Compiled by ClojureScript 1.7.170 {}
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
if(cljs.core.truth_((function (){var or__16864__auto__ = (cljs.core.count.call(null,attr) < (5));
if(or__16864__auto__){
return or__16864__auto__;
} else {
var G__27182 = cljs.core.subs.call(null,attr,(0),(5));
switch (G__27182) {
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
var G__27185 = (((opt instanceof cljs.core.Keyword))?opt.fqn:null);
switch (G__27185) {
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
om_tools.dom.format_opts;
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
return cljs.core.clj__GT_js.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__27189){
var vec__27190 = p__27189;
var k = cljs.core.nth.call(null,vec__27190,(0),null);
var v = cljs.core.nth.call(null,vec__27190,(1),null);
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
return (function (){var or__16864__auto__ = React.isValidElement;
if(cljs.core.truth_(or__16864__auto__)){
return or__16864__auto__;
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
var vec__27192 = om_tools.dom.element_args.call(null,opts,children);
var opts__$1 = cljs.core.nth.call(null,vec__27192,(0),null);
var children__$1 = cljs.core.nth.call(null,vec__27192,(1),null);
return cljs.core.apply.call(null,ctor,cljs.core.flatten.call(null,cljs.core.cons.call(null,opts__$1,children__$1)));
});
om_tools.dom.a = (function om_tools$dom$a(var_args){
var args27193 = [];
var len__17922__auto___27818 = arguments.length;
var i__17923__auto___27819 = (0);
while(true){
if((i__17923__auto___27819 < len__17922__auto___27818)){
args27193.push((arguments[i__17923__auto___27819]));

var G__27820 = (i__17923__auto___27819 + (1));
i__17923__auto___27819 = G__27820;
continue;
} else {
}
break;
}

var G__27197 = args27193.length;
switch (G__27197) {
case 0:
return om_tools.dom.a.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27193.slice((1)),(0)));
return om_tools.dom.a.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.a.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.a,null,null);
});

om_tools.dom.a.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.a,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.a.cljs$lang$applyTo = (function (seq27194){
var G__27195 = cljs.core.first.call(null,seq27194);
var seq27194__$1 = cljs.core.next.call(null,seq27194);
return om_tools.dom.a.cljs$core$IFn$_invoke$arity$variadic(G__27195,seq27194__$1);
});

om_tools.dom.a.cljs$lang$maxFixedArity = (1);

om_tools.dom.abbr = (function om_tools$dom$abbr(var_args){
var args27198 = [];
var len__17922__auto___27822 = arguments.length;
var i__17923__auto___27823 = (0);
while(true){
if((i__17923__auto___27823 < len__17922__auto___27822)){
args27198.push((arguments[i__17923__auto___27823]));

var G__27824 = (i__17923__auto___27823 + (1));
i__17923__auto___27823 = G__27824;
continue;
} else {
}
break;
}

var G__27202 = args27198.length;
switch (G__27202) {
case 0:
return om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27198.slice((1)),(0)));
return om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.abbr,null,null);
});

om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.abbr,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.abbr.cljs$lang$applyTo = (function (seq27199){
var G__27200 = cljs.core.first.call(null,seq27199);
var seq27199__$1 = cljs.core.next.call(null,seq27199);
return om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$variadic(G__27200,seq27199__$1);
});

om_tools.dom.abbr.cljs$lang$maxFixedArity = (1);

om_tools.dom.address = (function om_tools$dom$address(var_args){
var args27203 = [];
var len__17922__auto___27826 = arguments.length;
var i__17923__auto___27827 = (0);
while(true){
if((i__17923__auto___27827 < len__17922__auto___27826)){
args27203.push((arguments[i__17923__auto___27827]));

var G__27828 = (i__17923__auto___27827 + (1));
i__17923__auto___27827 = G__27828;
continue;
} else {
}
break;
}

var G__27207 = args27203.length;
switch (G__27207) {
case 0:
return om_tools.dom.address.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27203.slice((1)),(0)));
return om_tools.dom.address.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.address.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.address,null,null);
});

om_tools.dom.address.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.address,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.address.cljs$lang$applyTo = (function (seq27204){
var G__27205 = cljs.core.first.call(null,seq27204);
var seq27204__$1 = cljs.core.next.call(null,seq27204);
return om_tools.dom.address.cljs$core$IFn$_invoke$arity$variadic(G__27205,seq27204__$1);
});

om_tools.dom.address.cljs$lang$maxFixedArity = (1);

om_tools.dom.area = (function om_tools$dom$area(var_args){
var args27208 = [];
var len__17922__auto___27830 = arguments.length;
var i__17923__auto___27831 = (0);
while(true){
if((i__17923__auto___27831 < len__17922__auto___27830)){
args27208.push((arguments[i__17923__auto___27831]));

var G__27832 = (i__17923__auto___27831 + (1));
i__17923__auto___27831 = G__27832;
continue;
} else {
}
break;
}

var G__27212 = args27208.length;
switch (G__27212) {
case 0:
return om_tools.dom.area.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27208.slice((1)),(0)));
return om_tools.dom.area.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.area.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.area,null,null);
});

om_tools.dom.area.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.area,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.area.cljs$lang$applyTo = (function (seq27209){
var G__27210 = cljs.core.first.call(null,seq27209);
var seq27209__$1 = cljs.core.next.call(null,seq27209);
return om_tools.dom.area.cljs$core$IFn$_invoke$arity$variadic(G__27210,seq27209__$1);
});

om_tools.dom.area.cljs$lang$maxFixedArity = (1);

om_tools.dom.article = (function om_tools$dom$article(var_args){
var args27213 = [];
var len__17922__auto___27834 = arguments.length;
var i__17923__auto___27835 = (0);
while(true){
if((i__17923__auto___27835 < len__17922__auto___27834)){
args27213.push((arguments[i__17923__auto___27835]));

var G__27836 = (i__17923__auto___27835 + (1));
i__17923__auto___27835 = G__27836;
continue;
} else {
}
break;
}

var G__27217 = args27213.length;
switch (G__27217) {
case 0:
return om_tools.dom.article.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27213.slice((1)),(0)));
return om_tools.dom.article.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.article.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.article,null,null);
});

om_tools.dom.article.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.article,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.article.cljs$lang$applyTo = (function (seq27214){
var G__27215 = cljs.core.first.call(null,seq27214);
var seq27214__$1 = cljs.core.next.call(null,seq27214);
return om_tools.dom.article.cljs$core$IFn$_invoke$arity$variadic(G__27215,seq27214__$1);
});

om_tools.dom.article.cljs$lang$maxFixedArity = (1);

om_tools.dom.aside = (function om_tools$dom$aside(var_args){
var args27218 = [];
var len__17922__auto___27838 = arguments.length;
var i__17923__auto___27839 = (0);
while(true){
if((i__17923__auto___27839 < len__17922__auto___27838)){
args27218.push((arguments[i__17923__auto___27839]));

var G__27840 = (i__17923__auto___27839 + (1));
i__17923__auto___27839 = G__27840;
continue;
} else {
}
break;
}

var G__27222 = args27218.length;
switch (G__27222) {
case 0:
return om_tools.dom.aside.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27218.slice((1)),(0)));
return om_tools.dom.aside.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.aside.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.aside,null,null);
});

om_tools.dom.aside.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.aside,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.aside.cljs$lang$applyTo = (function (seq27219){
var G__27220 = cljs.core.first.call(null,seq27219);
var seq27219__$1 = cljs.core.next.call(null,seq27219);
return om_tools.dom.aside.cljs$core$IFn$_invoke$arity$variadic(G__27220,seq27219__$1);
});

om_tools.dom.aside.cljs$lang$maxFixedArity = (1);

om_tools.dom.audio = (function om_tools$dom$audio(var_args){
var args27223 = [];
var len__17922__auto___27842 = arguments.length;
var i__17923__auto___27843 = (0);
while(true){
if((i__17923__auto___27843 < len__17922__auto___27842)){
args27223.push((arguments[i__17923__auto___27843]));

var G__27844 = (i__17923__auto___27843 + (1));
i__17923__auto___27843 = G__27844;
continue;
} else {
}
break;
}

var G__27227 = args27223.length;
switch (G__27227) {
case 0:
return om_tools.dom.audio.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27223.slice((1)),(0)));
return om_tools.dom.audio.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.audio.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.audio,null,null);
});

om_tools.dom.audio.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.audio,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.audio.cljs$lang$applyTo = (function (seq27224){
var G__27225 = cljs.core.first.call(null,seq27224);
var seq27224__$1 = cljs.core.next.call(null,seq27224);
return om_tools.dom.audio.cljs$core$IFn$_invoke$arity$variadic(G__27225,seq27224__$1);
});

om_tools.dom.audio.cljs$lang$maxFixedArity = (1);

om_tools.dom.b = (function om_tools$dom$b(var_args){
var args27228 = [];
var len__17922__auto___27846 = arguments.length;
var i__17923__auto___27847 = (0);
while(true){
if((i__17923__auto___27847 < len__17922__auto___27846)){
args27228.push((arguments[i__17923__auto___27847]));

var G__27848 = (i__17923__auto___27847 + (1));
i__17923__auto___27847 = G__27848;
continue;
} else {
}
break;
}

var G__27232 = args27228.length;
switch (G__27232) {
case 0:
return om_tools.dom.b.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27228.slice((1)),(0)));
return om_tools.dom.b.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.b.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.b,null,null);
});

om_tools.dom.b.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.b,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.b.cljs$lang$applyTo = (function (seq27229){
var G__27230 = cljs.core.first.call(null,seq27229);
var seq27229__$1 = cljs.core.next.call(null,seq27229);
return om_tools.dom.b.cljs$core$IFn$_invoke$arity$variadic(G__27230,seq27229__$1);
});

om_tools.dom.b.cljs$lang$maxFixedArity = (1);

om_tools.dom.base = (function om_tools$dom$base(var_args){
var args27233 = [];
var len__17922__auto___27850 = arguments.length;
var i__17923__auto___27851 = (0);
while(true){
if((i__17923__auto___27851 < len__17922__auto___27850)){
args27233.push((arguments[i__17923__auto___27851]));

var G__27852 = (i__17923__auto___27851 + (1));
i__17923__auto___27851 = G__27852;
continue;
} else {
}
break;
}

var G__27237 = args27233.length;
switch (G__27237) {
case 0:
return om_tools.dom.base.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27233.slice((1)),(0)));
return om_tools.dom.base.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.base.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.base,null,null);
});

om_tools.dom.base.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.base,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.base.cljs$lang$applyTo = (function (seq27234){
var G__27235 = cljs.core.first.call(null,seq27234);
var seq27234__$1 = cljs.core.next.call(null,seq27234);
return om_tools.dom.base.cljs$core$IFn$_invoke$arity$variadic(G__27235,seq27234__$1);
});

om_tools.dom.base.cljs$lang$maxFixedArity = (1);

om_tools.dom.bdi = (function om_tools$dom$bdi(var_args){
var args27238 = [];
var len__17922__auto___27854 = arguments.length;
var i__17923__auto___27855 = (0);
while(true){
if((i__17923__auto___27855 < len__17922__auto___27854)){
args27238.push((arguments[i__17923__auto___27855]));

var G__27856 = (i__17923__auto___27855 + (1));
i__17923__auto___27855 = G__27856;
continue;
} else {
}
break;
}

var G__27242 = args27238.length;
switch (G__27242) {
case 0:
return om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27238.slice((1)),(0)));
return om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.bdi,null,null);
});

om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.bdi,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.bdi.cljs$lang$applyTo = (function (seq27239){
var G__27240 = cljs.core.first.call(null,seq27239);
var seq27239__$1 = cljs.core.next.call(null,seq27239);
return om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$variadic(G__27240,seq27239__$1);
});

om_tools.dom.bdi.cljs$lang$maxFixedArity = (1);

om_tools.dom.bdo = (function om_tools$dom$bdo(var_args){
var args27243 = [];
var len__17922__auto___27858 = arguments.length;
var i__17923__auto___27859 = (0);
while(true){
if((i__17923__auto___27859 < len__17922__auto___27858)){
args27243.push((arguments[i__17923__auto___27859]));

var G__27860 = (i__17923__auto___27859 + (1));
i__17923__auto___27859 = G__27860;
continue;
} else {
}
break;
}

var G__27247 = args27243.length;
switch (G__27247) {
case 0:
return om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27243.slice((1)),(0)));
return om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.bdo,null,null);
});

om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.bdo,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.bdo.cljs$lang$applyTo = (function (seq27244){
var G__27245 = cljs.core.first.call(null,seq27244);
var seq27244__$1 = cljs.core.next.call(null,seq27244);
return om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$variadic(G__27245,seq27244__$1);
});

om_tools.dom.bdo.cljs$lang$maxFixedArity = (1);

om_tools.dom.big = (function om_tools$dom$big(var_args){
var args27248 = [];
var len__17922__auto___27862 = arguments.length;
var i__17923__auto___27863 = (0);
while(true){
if((i__17923__auto___27863 < len__17922__auto___27862)){
args27248.push((arguments[i__17923__auto___27863]));

var G__27864 = (i__17923__auto___27863 + (1));
i__17923__auto___27863 = G__27864;
continue;
} else {
}
break;
}

var G__27252 = args27248.length;
switch (G__27252) {
case 0:
return om_tools.dom.big.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27248.slice((1)),(0)));
return om_tools.dom.big.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.big.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.big,null,null);
});

om_tools.dom.big.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.big,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.big.cljs$lang$applyTo = (function (seq27249){
var G__27250 = cljs.core.first.call(null,seq27249);
var seq27249__$1 = cljs.core.next.call(null,seq27249);
return om_tools.dom.big.cljs$core$IFn$_invoke$arity$variadic(G__27250,seq27249__$1);
});

om_tools.dom.big.cljs$lang$maxFixedArity = (1);

om_tools.dom.blockquote = (function om_tools$dom$blockquote(var_args){
var args27253 = [];
var len__17922__auto___27866 = arguments.length;
var i__17923__auto___27867 = (0);
while(true){
if((i__17923__auto___27867 < len__17922__auto___27866)){
args27253.push((arguments[i__17923__auto___27867]));

var G__27868 = (i__17923__auto___27867 + (1));
i__17923__auto___27867 = G__27868;
continue;
} else {
}
break;
}

var G__27257 = args27253.length;
switch (G__27257) {
case 0:
return om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27253.slice((1)),(0)));
return om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.blockquote,null,null);
});

om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.blockquote,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.blockquote.cljs$lang$applyTo = (function (seq27254){
var G__27255 = cljs.core.first.call(null,seq27254);
var seq27254__$1 = cljs.core.next.call(null,seq27254);
return om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic(G__27255,seq27254__$1);
});

om_tools.dom.blockquote.cljs$lang$maxFixedArity = (1);

om_tools.dom.body = (function om_tools$dom$body(var_args){
var args27258 = [];
var len__17922__auto___27870 = arguments.length;
var i__17923__auto___27871 = (0);
while(true){
if((i__17923__auto___27871 < len__17922__auto___27870)){
args27258.push((arguments[i__17923__auto___27871]));

var G__27872 = (i__17923__auto___27871 + (1));
i__17923__auto___27871 = G__27872;
continue;
} else {
}
break;
}

var G__27262 = args27258.length;
switch (G__27262) {
case 0:
return om_tools.dom.body.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27258.slice((1)),(0)));
return om_tools.dom.body.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.body.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.body,null,null);
});

om_tools.dom.body.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.body,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.body.cljs$lang$applyTo = (function (seq27259){
var G__27260 = cljs.core.first.call(null,seq27259);
var seq27259__$1 = cljs.core.next.call(null,seq27259);
return om_tools.dom.body.cljs$core$IFn$_invoke$arity$variadic(G__27260,seq27259__$1);
});

om_tools.dom.body.cljs$lang$maxFixedArity = (1);

om_tools.dom.br = (function om_tools$dom$br(var_args){
var args27263 = [];
var len__17922__auto___27874 = arguments.length;
var i__17923__auto___27875 = (0);
while(true){
if((i__17923__auto___27875 < len__17922__auto___27874)){
args27263.push((arguments[i__17923__auto___27875]));

var G__27876 = (i__17923__auto___27875 + (1));
i__17923__auto___27875 = G__27876;
continue;
} else {
}
break;
}

var G__27267 = args27263.length;
switch (G__27267) {
case 0:
return om_tools.dom.br.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27263.slice((1)),(0)));
return om_tools.dom.br.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.br.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.br,null,null);
});

om_tools.dom.br.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.br,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.br.cljs$lang$applyTo = (function (seq27264){
var G__27265 = cljs.core.first.call(null,seq27264);
var seq27264__$1 = cljs.core.next.call(null,seq27264);
return om_tools.dom.br.cljs$core$IFn$_invoke$arity$variadic(G__27265,seq27264__$1);
});

om_tools.dom.br.cljs$lang$maxFixedArity = (1);

om_tools.dom.button = (function om_tools$dom$button(var_args){
var args27268 = [];
var len__17922__auto___27878 = arguments.length;
var i__17923__auto___27879 = (0);
while(true){
if((i__17923__auto___27879 < len__17922__auto___27878)){
args27268.push((arguments[i__17923__auto___27879]));

var G__27880 = (i__17923__auto___27879 + (1));
i__17923__auto___27879 = G__27880;
continue;
} else {
}
break;
}

var G__27272 = args27268.length;
switch (G__27272) {
case 0:
return om_tools.dom.button.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27268.slice((1)),(0)));
return om_tools.dom.button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.button.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.button,null,null);
});

om_tools.dom.button.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.button,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.button.cljs$lang$applyTo = (function (seq27269){
var G__27270 = cljs.core.first.call(null,seq27269);
var seq27269__$1 = cljs.core.next.call(null,seq27269);
return om_tools.dom.button.cljs$core$IFn$_invoke$arity$variadic(G__27270,seq27269__$1);
});

om_tools.dom.button.cljs$lang$maxFixedArity = (1);

om_tools.dom.canvas = (function om_tools$dom$canvas(var_args){
var args27273 = [];
var len__17922__auto___27882 = arguments.length;
var i__17923__auto___27883 = (0);
while(true){
if((i__17923__auto___27883 < len__17922__auto___27882)){
args27273.push((arguments[i__17923__auto___27883]));

var G__27884 = (i__17923__auto___27883 + (1));
i__17923__auto___27883 = G__27884;
continue;
} else {
}
break;
}

var G__27277 = args27273.length;
switch (G__27277) {
case 0:
return om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27273.slice((1)),(0)));
return om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.canvas,null,null);
});

om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.canvas,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.canvas.cljs$lang$applyTo = (function (seq27274){
var G__27275 = cljs.core.first.call(null,seq27274);
var seq27274__$1 = cljs.core.next.call(null,seq27274);
return om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$variadic(G__27275,seq27274__$1);
});

om_tools.dom.canvas.cljs$lang$maxFixedArity = (1);

om_tools.dom.caption = (function om_tools$dom$caption(var_args){
var args27278 = [];
var len__17922__auto___27886 = arguments.length;
var i__17923__auto___27887 = (0);
while(true){
if((i__17923__auto___27887 < len__17922__auto___27886)){
args27278.push((arguments[i__17923__auto___27887]));

var G__27888 = (i__17923__auto___27887 + (1));
i__17923__auto___27887 = G__27888;
continue;
} else {
}
break;
}

var G__27282 = args27278.length;
switch (G__27282) {
case 0:
return om_tools.dom.caption.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27278.slice((1)),(0)));
return om_tools.dom.caption.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.caption.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.caption,null,null);
});

om_tools.dom.caption.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.caption,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.caption.cljs$lang$applyTo = (function (seq27279){
var G__27280 = cljs.core.first.call(null,seq27279);
var seq27279__$1 = cljs.core.next.call(null,seq27279);
return om_tools.dom.caption.cljs$core$IFn$_invoke$arity$variadic(G__27280,seq27279__$1);
});

om_tools.dom.caption.cljs$lang$maxFixedArity = (1);

om_tools.dom.cite = (function om_tools$dom$cite(var_args){
var args27283 = [];
var len__17922__auto___27890 = arguments.length;
var i__17923__auto___27891 = (0);
while(true){
if((i__17923__auto___27891 < len__17922__auto___27890)){
args27283.push((arguments[i__17923__auto___27891]));

var G__27892 = (i__17923__auto___27891 + (1));
i__17923__auto___27891 = G__27892;
continue;
} else {
}
break;
}

var G__27287 = args27283.length;
switch (G__27287) {
case 0:
return om_tools.dom.cite.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27283.slice((1)),(0)));
return om_tools.dom.cite.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.cite.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.cite,null,null);
});

om_tools.dom.cite.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.cite,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.cite.cljs$lang$applyTo = (function (seq27284){
var G__27285 = cljs.core.first.call(null,seq27284);
var seq27284__$1 = cljs.core.next.call(null,seq27284);
return om_tools.dom.cite.cljs$core$IFn$_invoke$arity$variadic(G__27285,seq27284__$1);
});

om_tools.dom.cite.cljs$lang$maxFixedArity = (1);

om_tools.dom.code = (function om_tools$dom$code(var_args){
var args27288 = [];
var len__17922__auto___27894 = arguments.length;
var i__17923__auto___27895 = (0);
while(true){
if((i__17923__auto___27895 < len__17922__auto___27894)){
args27288.push((arguments[i__17923__auto___27895]));

var G__27896 = (i__17923__auto___27895 + (1));
i__17923__auto___27895 = G__27896;
continue;
} else {
}
break;
}

var G__27292 = args27288.length;
switch (G__27292) {
case 0:
return om_tools.dom.code.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27288.slice((1)),(0)));
return om_tools.dom.code.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.code.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.code,null,null);
});

om_tools.dom.code.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.code,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.code.cljs$lang$applyTo = (function (seq27289){
var G__27290 = cljs.core.first.call(null,seq27289);
var seq27289__$1 = cljs.core.next.call(null,seq27289);
return om_tools.dom.code.cljs$core$IFn$_invoke$arity$variadic(G__27290,seq27289__$1);
});

om_tools.dom.code.cljs$lang$maxFixedArity = (1);

om_tools.dom.col = (function om_tools$dom$col(var_args){
var args27293 = [];
var len__17922__auto___27898 = arguments.length;
var i__17923__auto___27899 = (0);
while(true){
if((i__17923__auto___27899 < len__17922__auto___27898)){
args27293.push((arguments[i__17923__auto___27899]));

var G__27900 = (i__17923__auto___27899 + (1));
i__17923__auto___27899 = G__27900;
continue;
} else {
}
break;
}

var G__27297 = args27293.length;
switch (G__27297) {
case 0:
return om_tools.dom.col.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27293.slice((1)),(0)));
return om_tools.dom.col.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.col.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.col,null,null);
});

om_tools.dom.col.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.col,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.col.cljs$lang$applyTo = (function (seq27294){
var G__27295 = cljs.core.first.call(null,seq27294);
var seq27294__$1 = cljs.core.next.call(null,seq27294);
return om_tools.dom.col.cljs$core$IFn$_invoke$arity$variadic(G__27295,seq27294__$1);
});

om_tools.dom.col.cljs$lang$maxFixedArity = (1);

om_tools.dom.colgroup = (function om_tools$dom$colgroup(var_args){
var args27298 = [];
var len__17922__auto___27902 = arguments.length;
var i__17923__auto___27903 = (0);
while(true){
if((i__17923__auto___27903 < len__17922__auto___27902)){
args27298.push((arguments[i__17923__auto___27903]));

var G__27904 = (i__17923__auto___27903 + (1));
i__17923__auto___27903 = G__27904;
continue;
} else {
}
break;
}

var G__27302 = args27298.length;
switch (G__27302) {
case 0:
return om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27298.slice((1)),(0)));
return om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.colgroup,null,null);
});

om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.colgroup,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.colgroup.cljs$lang$applyTo = (function (seq27299){
var G__27300 = cljs.core.first.call(null,seq27299);
var seq27299__$1 = cljs.core.next.call(null,seq27299);
return om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic(G__27300,seq27299__$1);
});

om_tools.dom.colgroup.cljs$lang$maxFixedArity = (1);

om_tools.dom.data = (function om_tools$dom$data(var_args){
var args27303 = [];
var len__17922__auto___27906 = arguments.length;
var i__17923__auto___27907 = (0);
while(true){
if((i__17923__auto___27907 < len__17922__auto___27906)){
args27303.push((arguments[i__17923__auto___27907]));

var G__27908 = (i__17923__auto___27907 + (1));
i__17923__auto___27907 = G__27908;
continue;
} else {
}
break;
}

var G__27307 = args27303.length;
switch (G__27307) {
case 0:
return om_tools.dom.data.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27303.slice((1)),(0)));
return om_tools.dom.data.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.data.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.data,null,null);
});

om_tools.dom.data.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.data,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.data.cljs$lang$applyTo = (function (seq27304){
var G__27305 = cljs.core.first.call(null,seq27304);
var seq27304__$1 = cljs.core.next.call(null,seq27304);
return om_tools.dom.data.cljs$core$IFn$_invoke$arity$variadic(G__27305,seq27304__$1);
});

om_tools.dom.data.cljs$lang$maxFixedArity = (1);

om_tools.dom.datalist = (function om_tools$dom$datalist(var_args){
var args27308 = [];
var len__17922__auto___27910 = arguments.length;
var i__17923__auto___27911 = (0);
while(true){
if((i__17923__auto___27911 < len__17922__auto___27910)){
args27308.push((arguments[i__17923__auto___27911]));

var G__27912 = (i__17923__auto___27911 + (1));
i__17923__auto___27911 = G__27912;
continue;
} else {
}
break;
}

var G__27312 = args27308.length;
switch (G__27312) {
case 0:
return om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27308.slice((1)),(0)));
return om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.datalist,null,null);
});

om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.datalist,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.datalist.cljs$lang$applyTo = (function (seq27309){
var G__27310 = cljs.core.first.call(null,seq27309);
var seq27309__$1 = cljs.core.next.call(null,seq27309);
return om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$variadic(G__27310,seq27309__$1);
});

om_tools.dom.datalist.cljs$lang$maxFixedArity = (1);

om_tools.dom.dd = (function om_tools$dom$dd(var_args){
var args27313 = [];
var len__17922__auto___27914 = arguments.length;
var i__17923__auto___27915 = (0);
while(true){
if((i__17923__auto___27915 < len__17922__auto___27914)){
args27313.push((arguments[i__17923__auto___27915]));

var G__27916 = (i__17923__auto___27915 + (1));
i__17923__auto___27915 = G__27916;
continue;
} else {
}
break;
}

var G__27317 = args27313.length;
switch (G__27317) {
case 0:
return om_tools.dom.dd.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27313.slice((1)),(0)));
return om_tools.dom.dd.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.dd.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dd,null,null);
});

om_tools.dom.dd.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.dd,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.dd.cljs$lang$applyTo = (function (seq27314){
var G__27315 = cljs.core.first.call(null,seq27314);
var seq27314__$1 = cljs.core.next.call(null,seq27314);
return om_tools.dom.dd.cljs$core$IFn$_invoke$arity$variadic(G__27315,seq27314__$1);
});

om_tools.dom.dd.cljs$lang$maxFixedArity = (1);

om_tools.dom.del = (function om_tools$dom$del(var_args){
var args27318 = [];
var len__17922__auto___27918 = arguments.length;
var i__17923__auto___27919 = (0);
while(true){
if((i__17923__auto___27919 < len__17922__auto___27918)){
args27318.push((arguments[i__17923__auto___27919]));

var G__27920 = (i__17923__auto___27919 + (1));
i__17923__auto___27919 = G__27920;
continue;
} else {
}
break;
}

var G__27322 = args27318.length;
switch (G__27322) {
case 0:
return om_tools.dom.del.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27318.slice((1)),(0)));
return om_tools.dom.del.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.del.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.del,null,null);
});

om_tools.dom.del.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.del,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.del.cljs$lang$applyTo = (function (seq27319){
var G__27320 = cljs.core.first.call(null,seq27319);
var seq27319__$1 = cljs.core.next.call(null,seq27319);
return om_tools.dom.del.cljs$core$IFn$_invoke$arity$variadic(G__27320,seq27319__$1);
});

om_tools.dom.del.cljs$lang$maxFixedArity = (1);

om_tools.dom.dfn = (function om_tools$dom$dfn(var_args){
var args27323 = [];
var len__17922__auto___27922 = arguments.length;
var i__17923__auto___27923 = (0);
while(true){
if((i__17923__auto___27923 < len__17922__auto___27922)){
args27323.push((arguments[i__17923__auto___27923]));

var G__27924 = (i__17923__auto___27923 + (1));
i__17923__auto___27923 = G__27924;
continue;
} else {
}
break;
}

var G__27327 = args27323.length;
switch (G__27327) {
case 0:
return om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27323.slice((1)),(0)));
return om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dfn,null,null);
});

om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.dfn,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.dfn.cljs$lang$applyTo = (function (seq27324){
var G__27325 = cljs.core.first.call(null,seq27324);
var seq27324__$1 = cljs.core.next.call(null,seq27324);
return om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$variadic(G__27325,seq27324__$1);
});

om_tools.dom.dfn.cljs$lang$maxFixedArity = (1);

om_tools.dom.div = (function om_tools$dom$div(var_args){
var args27328 = [];
var len__17922__auto___27926 = arguments.length;
var i__17923__auto___27927 = (0);
while(true){
if((i__17923__auto___27927 < len__17922__auto___27926)){
args27328.push((arguments[i__17923__auto___27927]));

var G__27928 = (i__17923__auto___27927 + (1));
i__17923__auto___27927 = G__27928;
continue;
} else {
}
break;
}

var G__27332 = args27328.length;
switch (G__27332) {
case 0:
return om_tools.dom.div.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27328.slice((1)),(0)));
return om_tools.dom.div.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.div.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.div,null,null);
});

om_tools.dom.div.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.div,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.div.cljs$lang$applyTo = (function (seq27329){
var G__27330 = cljs.core.first.call(null,seq27329);
var seq27329__$1 = cljs.core.next.call(null,seq27329);
return om_tools.dom.div.cljs$core$IFn$_invoke$arity$variadic(G__27330,seq27329__$1);
});

om_tools.dom.div.cljs$lang$maxFixedArity = (1);

om_tools.dom.dl = (function om_tools$dom$dl(var_args){
var args27333 = [];
var len__17922__auto___27930 = arguments.length;
var i__17923__auto___27931 = (0);
while(true){
if((i__17923__auto___27931 < len__17922__auto___27930)){
args27333.push((arguments[i__17923__auto___27931]));

var G__27932 = (i__17923__auto___27931 + (1));
i__17923__auto___27931 = G__27932;
continue;
} else {
}
break;
}

var G__27337 = args27333.length;
switch (G__27337) {
case 0:
return om_tools.dom.dl.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27333.slice((1)),(0)));
return om_tools.dom.dl.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.dl.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dl,null,null);
});

om_tools.dom.dl.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.dl,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.dl.cljs$lang$applyTo = (function (seq27334){
var G__27335 = cljs.core.first.call(null,seq27334);
var seq27334__$1 = cljs.core.next.call(null,seq27334);
return om_tools.dom.dl.cljs$core$IFn$_invoke$arity$variadic(G__27335,seq27334__$1);
});

om_tools.dom.dl.cljs$lang$maxFixedArity = (1);

om_tools.dom.dt = (function om_tools$dom$dt(var_args){
var args27338 = [];
var len__17922__auto___27934 = arguments.length;
var i__17923__auto___27935 = (0);
while(true){
if((i__17923__auto___27935 < len__17922__auto___27934)){
args27338.push((arguments[i__17923__auto___27935]));

var G__27936 = (i__17923__auto___27935 + (1));
i__17923__auto___27935 = G__27936;
continue;
} else {
}
break;
}

var G__27342 = args27338.length;
switch (G__27342) {
case 0:
return om_tools.dom.dt.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27338.slice((1)),(0)));
return om_tools.dom.dt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.dt.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dt,null,null);
});

om_tools.dom.dt.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.dt,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.dt.cljs$lang$applyTo = (function (seq27339){
var G__27340 = cljs.core.first.call(null,seq27339);
var seq27339__$1 = cljs.core.next.call(null,seq27339);
return om_tools.dom.dt.cljs$core$IFn$_invoke$arity$variadic(G__27340,seq27339__$1);
});

om_tools.dom.dt.cljs$lang$maxFixedArity = (1);

om_tools.dom.em = (function om_tools$dom$em(var_args){
var args27343 = [];
var len__17922__auto___27938 = arguments.length;
var i__17923__auto___27939 = (0);
while(true){
if((i__17923__auto___27939 < len__17922__auto___27938)){
args27343.push((arguments[i__17923__auto___27939]));

var G__27940 = (i__17923__auto___27939 + (1));
i__17923__auto___27939 = G__27940;
continue;
} else {
}
break;
}

var G__27347 = args27343.length;
switch (G__27347) {
case 0:
return om_tools.dom.em.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27343.slice((1)),(0)));
return om_tools.dom.em.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.em.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.em,null,null);
});

om_tools.dom.em.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.em,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.em.cljs$lang$applyTo = (function (seq27344){
var G__27345 = cljs.core.first.call(null,seq27344);
var seq27344__$1 = cljs.core.next.call(null,seq27344);
return om_tools.dom.em.cljs$core$IFn$_invoke$arity$variadic(G__27345,seq27344__$1);
});

om_tools.dom.em.cljs$lang$maxFixedArity = (1);

om_tools.dom.embed = (function om_tools$dom$embed(var_args){
var args27348 = [];
var len__17922__auto___27942 = arguments.length;
var i__17923__auto___27943 = (0);
while(true){
if((i__17923__auto___27943 < len__17922__auto___27942)){
args27348.push((arguments[i__17923__auto___27943]));

var G__27944 = (i__17923__auto___27943 + (1));
i__17923__auto___27943 = G__27944;
continue;
} else {
}
break;
}

var G__27352 = args27348.length;
switch (G__27352) {
case 0:
return om_tools.dom.embed.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27348.slice((1)),(0)));
return om_tools.dom.embed.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.embed.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.embed,null,null);
});

om_tools.dom.embed.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.embed,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.embed.cljs$lang$applyTo = (function (seq27349){
var G__27350 = cljs.core.first.call(null,seq27349);
var seq27349__$1 = cljs.core.next.call(null,seq27349);
return om_tools.dom.embed.cljs$core$IFn$_invoke$arity$variadic(G__27350,seq27349__$1);
});

om_tools.dom.embed.cljs$lang$maxFixedArity = (1);

om_tools.dom.fieldset = (function om_tools$dom$fieldset(var_args){
var args27358 = [];
var len__17922__auto___27946 = arguments.length;
var i__17923__auto___27947 = (0);
while(true){
if((i__17923__auto___27947 < len__17922__auto___27946)){
args27358.push((arguments[i__17923__auto___27947]));

var G__27948 = (i__17923__auto___27947 + (1));
i__17923__auto___27947 = G__27948;
continue;
} else {
}
break;
}

var G__27362 = args27358.length;
switch (G__27362) {
case 0:
return om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27358.slice((1)),(0)));
return om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.fieldset,null,null);
});

om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.fieldset,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.fieldset.cljs$lang$applyTo = (function (seq27359){
var G__27360 = cljs.core.first.call(null,seq27359);
var seq27359__$1 = cljs.core.next.call(null,seq27359);
return om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic(G__27360,seq27359__$1);
});

om_tools.dom.fieldset.cljs$lang$maxFixedArity = (1);

om_tools.dom.figcaption = (function om_tools$dom$figcaption(var_args){
var args27363 = [];
var len__17922__auto___27950 = arguments.length;
var i__17923__auto___27951 = (0);
while(true){
if((i__17923__auto___27951 < len__17922__auto___27950)){
args27363.push((arguments[i__17923__auto___27951]));

var G__27952 = (i__17923__auto___27951 + (1));
i__17923__auto___27951 = G__27952;
continue;
} else {
}
break;
}

var G__27367 = args27363.length;
switch (G__27367) {
case 0:
return om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27363.slice((1)),(0)));
return om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.figcaption,null,null);
});

om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.figcaption,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.figcaption.cljs$lang$applyTo = (function (seq27364){
var G__27365 = cljs.core.first.call(null,seq27364);
var seq27364__$1 = cljs.core.next.call(null,seq27364);
return om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic(G__27365,seq27364__$1);
});

om_tools.dom.figcaption.cljs$lang$maxFixedArity = (1);

om_tools.dom.figure = (function om_tools$dom$figure(var_args){
var args27368 = [];
var len__17922__auto___27954 = arguments.length;
var i__17923__auto___27955 = (0);
while(true){
if((i__17923__auto___27955 < len__17922__auto___27954)){
args27368.push((arguments[i__17923__auto___27955]));

var G__27956 = (i__17923__auto___27955 + (1));
i__17923__auto___27955 = G__27956;
continue;
} else {
}
break;
}

var G__27372 = args27368.length;
switch (G__27372) {
case 0:
return om_tools.dom.figure.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27368.slice((1)),(0)));
return om_tools.dom.figure.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.figure.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.figure,null,null);
});

om_tools.dom.figure.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.figure,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.figure.cljs$lang$applyTo = (function (seq27369){
var G__27370 = cljs.core.first.call(null,seq27369);
var seq27369__$1 = cljs.core.next.call(null,seq27369);
return om_tools.dom.figure.cljs$core$IFn$_invoke$arity$variadic(G__27370,seq27369__$1);
});

om_tools.dom.figure.cljs$lang$maxFixedArity = (1);

om_tools.dom.footer = (function om_tools$dom$footer(var_args){
var args27373 = [];
var len__17922__auto___27958 = arguments.length;
var i__17923__auto___27959 = (0);
while(true){
if((i__17923__auto___27959 < len__17922__auto___27958)){
args27373.push((arguments[i__17923__auto___27959]));

var G__27960 = (i__17923__auto___27959 + (1));
i__17923__auto___27959 = G__27960;
continue;
} else {
}
break;
}

var G__27377 = args27373.length;
switch (G__27377) {
case 0:
return om_tools.dom.footer.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27373.slice((1)),(0)));
return om_tools.dom.footer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.footer.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.footer,null,null);
});

om_tools.dom.footer.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.footer,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.footer.cljs$lang$applyTo = (function (seq27374){
var G__27375 = cljs.core.first.call(null,seq27374);
var seq27374__$1 = cljs.core.next.call(null,seq27374);
return om_tools.dom.footer.cljs$core$IFn$_invoke$arity$variadic(G__27375,seq27374__$1);
});

om_tools.dom.footer.cljs$lang$maxFixedArity = (1);

om_tools.dom.form = (function om_tools$dom$form(var_args){
var args27378 = [];
var len__17922__auto___27962 = arguments.length;
var i__17923__auto___27963 = (0);
while(true){
if((i__17923__auto___27963 < len__17922__auto___27962)){
args27378.push((arguments[i__17923__auto___27963]));

var G__27964 = (i__17923__auto___27963 + (1));
i__17923__auto___27963 = G__27964;
continue;
} else {
}
break;
}

var G__27382 = args27378.length;
switch (G__27382) {
case 0:
return om_tools.dom.form.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27378.slice((1)),(0)));
return om_tools.dom.form.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.form.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.form,null,null);
});

om_tools.dom.form.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.form,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.form.cljs$lang$applyTo = (function (seq27379){
var G__27380 = cljs.core.first.call(null,seq27379);
var seq27379__$1 = cljs.core.next.call(null,seq27379);
return om_tools.dom.form.cljs$core$IFn$_invoke$arity$variadic(G__27380,seq27379__$1);
});

om_tools.dom.form.cljs$lang$maxFixedArity = (1);

om_tools.dom.h1 = (function om_tools$dom$h1(var_args){
var args27383 = [];
var len__17922__auto___27966 = arguments.length;
var i__17923__auto___27967 = (0);
while(true){
if((i__17923__auto___27967 < len__17922__auto___27966)){
args27383.push((arguments[i__17923__auto___27967]));

var G__27968 = (i__17923__auto___27967 + (1));
i__17923__auto___27967 = G__27968;
continue;
} else {
}
break;
}

var G__27387 = args27383.length;
switch (G__27387) {
case 0:
return om_tools.dom.h1.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27383.slice((1)),(0)));
return om_tools.dom.h1.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.h1.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h1,null,null);
});

om_tools.dom.h1.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.h1,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.h1.cljs$lang$applyTo = (function (seq27384){
var G__27385 = cljs.core.first.call(null,seq27384);
var seq27384__$1 = cljs.core.next.call(null,seq27384);
return om_tools.dom.h1.cljs$core$IFn$_invoke$arity$variadic(G__27385,seq27384__$1);
});

om_tools.dom.h1.cljs$lang$maxFixedArity = (1);

om_tools.dom.h2 = (function om_tools$dom$h2(var_args){
var args27388 = [];
var len__17922__auto___27970 = arguments.length;
var i__17923__auto___27971 = (0);
while(true){
if((i__17923__auto___27971 < len__17922__auto___27970)){
args27388.push((arguments[i__17923__auto___27971]));

var G__27972 = (i__17923__auto___27971 + (1));
i__17923__auto___27971 = G__27972;
continue;
} else {
}
break;
}

var G__27392 = args27388.length;
switch (G__27392) {
case 0:
return om_tools.dom.h2.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27388.slice((1)),(0)));
return om_tools.dom.h2.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.h2.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h2,null,null);
});

om_tools.dom.h2.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.h2,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.h2.cljs$lang$applyTo = (function (seq27389){
var G__27390 = cljs.core.first.call(null,seq27389);
var seq27389__$1 = cljs.core.next.call(null,seq27389);
return om_tools.dom.h2.cljs$core$IFn$_invoke$arity$variadic(G__27390,seq27389__$1);
});

om_tools.dom.h2.cljs$lang$maxFixedArity = (1);

om_tools.dom.h3 = (function om_tools$dom$h3(var_args){
var args27393 = [];
var len__17922__auto___27974 = arguments.length;
var i__17923__auto___27975 = (0);
while(true){
if((i__17923__auto___27975 < len__17922__auto___27974)){
args27393.push((arguments[i__17923__auto___27975]));

var G__27976 = (i__17923__auto___27975 + (1));
i__17923__auto___27975 = G__27976;
continue;
} else {
}
break;
}

var G__27397 = args27393.length;
switch (G__27397) {
case 0:
return om_tools.dom.h3.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27393.slice((1)),(0)));
return om_tools.dom.h3.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.h3.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h3,null,null);
});

om_tools.dom.h3.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.h3,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.h3.cljs$lang$applyTo = (function (seq27394){
var G__27395 = cljs.core.first.call(null,seq27394);
var seq27394__$1 = cljs.core.next.call(null,seq27394);
return om_tools.dom.h3.cljs$core$IFn$_invoke$arity$variadic(G__27395,seq27394__$1);
});

om_tools.dom.h3.cljs$lang$maxFixedArity = (1);

om_tools.dom.h4 = (function om_tools$dom$h4(var_args){
var args27398 = [];
var len__17922__auto___27978 = arguments.length;
var i__17923__auto___27979 = (0);
while(true){
if((i__17923__auto___27979 < len__17922__auto___27978)){
args27398.push((arguments[i__17923__auto___27979]));

var G__27980 = (i__17923__auto___27979 + (1));
i__17923__auto___27979 = G__27980;
continue;
} else {
}
break;
}

var G__27402 = args27398.length;
switch (G__27402) {
case 0:
return om_tools.dom.h4.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27398.slice((1)),(0)));
return om_tools.dom.h4.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.h4.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h4,null,null);
});

om_tools.dom.h4.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.h4,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.h4.cljs$lang$applyTo = (function (seq27399){
var G__27400 = cljs.core.first.call(null,seq27399);
var seq27399__$1 = cljs.core.next.call(null,seq27399);
return om_tools.dom.h4.cljs$core$IFn$_invoke$arity$variadic(G__27400,seq27399__$1);
});

om_tools.dom.h4.cljs$lang$maxFixedArity = (1);

om_tools.dom.h5 = (function om_tools$dom$h5(var_args){
var args27403 = [];
var len__17922__auto___27982 = arguments.length;
var i__17923__auto___27983 = (0);
while(true){
if((i__17923__auto___27983 < len__17922__auto___27982)){
args27403.push((arguments[i__17923__auto___27983]));

var G__27984 = (i__17923__auto___27983 + (1));
i__17923__auto___27983 = G__27984;
continue;
} else {
}
break;
}

var G__27407 = args27403.length;
switch (G__27407) {
case 0:
return om_tools.dom.h5.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27403.slice((1)),(0)));
return om_tools.dom.h5.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.h5.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h5,null,null);
});

om_tools.dom.h5.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.h5,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.h5.cljs$lang$applyTo = (function (seq27404){
var G__27405 = cljs.core.first.call(null,seq27404);
var seq27404__$1 = cljs.core.next.call(null,seq27404);
return om_tools.dom.h5.cljs$core$IFn$_invoke$arity$variadic(G__27405,seq27404__$1);
});

om_tools.dom.h5.cljs$lang$maxFixedArity = (1);

om_tools.dom.h6 = (function om_tools$dom$h6(var_args){
var args27408 = [];
var len__17922__auto___27986 = arguments.length;
var i__17923__auto___27987 = (0);
while(true){
if((i__17923__auto___27987 < len__17922__auto___27986)){
args27408.push((arguments[i__17923__auto___27987]));

var G__27988 = (i__17923__auto___27987 + (1));
i__17923__auto___27987 = G__27988;
continue;
} else {
}
break;
}

var G__27412 = args27408.length;
switch (G__27412) {
case 0:
return om_tools.dom.h6.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27408.slice((1)),(0)));
return om_tools.dom.h6.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.h6.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h6,null,null);
});

om_tools.dom.h6.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.h6,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.h6.cljs$lang$applyTo = (function (seq27409){
var G__27410 = cljs.core.first.call(null,seq27409);
var seq27409__$1 = cljs.core.next.call(null,seq27409);
return om_tools.dom.h6.cljs$core$IFn$_invoke$arity$variadic(G__27410,seq27409__$1);
});

om_tools.dom.h6.cljs$lang$maxFixedArity = (1);

om_tools.dom.head = (function om_tools$dom$head(var_args){
var args27413 = [];
var len__17922__auto___27990 = arguments.length;
var i__17923__auto___27991 = (0);
while(true){
if((i__17923__auto___27991 < len__17922__auto___27990)){
args27413.push((arguments[i__17923__auto___27991]));

var G__27992 = (i__17923__auto___27991 + (1));
i__17923__auto___27991 = G__27992;
continue;
} else {
}
break;
}

var G__27417 = args27413.length;
switch (G__27417) {
case 0:
return om_tools.dom.head.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27413.slice((1)),(0)));
return om_tools.dom.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.head.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.head,null,null);
});

om_tools.dom.head.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.head,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.head.cljs$lang$applyTo = (function (seq27414){
var G__27415 = cljs.core.first.call(null,seq27414);
var seq27414__$1 = cljs.core.next.call(null,seq27414);
return om_tools.dom.head.cljs$core$IFn$_invoke$arity$variadic(G__27415,seq27414__$1);
});

om_tools.dom.head.cljs$lang$maxFixedArity = (1);

om_tools.dom.header = (function om_tools$dom$header(var_args){
var args27418 = [];
var len__17922__auto___27994 = arguments.length;
var i__17923__auto___27995 = (0);
while(true){
if((i__17923__auto___27995 < len__17922__auto___27994)){
args27418.push((arguments[i__17923__auto___27995]));

var G__27996 = (i__17923__auto___27995 + (1));
i__17923__auto___27995 = G__27996;
continue;
} else {
}
break;
}

var G__27422 = args27418.length;
switch (G__27422) {
case 0:
return om_tools.dom.header.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27418.slice((1)),(0)));
return om_tools.dom.header.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.header.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.header,null,null);
});

om_tools.dom.header.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.header,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.header.cljs$lang$applyTo = (function (seq27419){
var G__27420 = cljs.core.first.call(null,seq27419);
var seq27419__$1 = cljs.core.next.call(null,seq27419);
return om_tools.dom.header.cljs$core$IFn$_invoke$arity$variadic(G__27420,seq27419__$1);
});

om_tools.dom.header.cljs$lang$maxFixedArity = (1);

om_tools.dom.hr = (function om_tools$dom$hr(var_args){
var args27423 = [];
var len__17922__auto___27998 = arguments.length;
var i__17923__auto___27999 = (0);
while(true){
if((i__17923__auto___27999 < len__17922__auto___27998)){
args27423.push((arguments[i__17923__auto___27999]));

var G__28000 = (i__17923__auto___27999 + (1));
i__17923__auto___27999 = G__28000;
continue;
} else {
}
break;
}

var G__27427 = args27423.length;
switch (G__27427) {
case 0:
return om_tools.dom.hr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27423.slice((1)),(0)));
return om_tools.dom.hr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.hr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.hr,null,null);
});

om_tools.dom.hr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.hr,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.hr.cljs$lang$applyTo = (function (seq27424){
var G__27425 = cljs.core.first.call(null,seq27424);
var seq27424__$1 = cljs.core.next.call(null,seq27424);
return om_tools.dom.hr.cljs$core$IFn$_invoke$arity$variadic(G__27425,seq27424__$1);
});

om_tools.dom.hr.cljs$lang$maxFixedArity = (1);

om_tools.dom.html = (function om_tools$dom$html(var_args){
var args27428 = [];
var len__17922__auto___28002 = arguments.length;
var i__17923__auto___28003 = (0);
while(true){
if((i__17923__auto___28003 < len__17922__auto___28002)){
args27428.push((arguments[i__17923__auto___28003]));

var G__28004 = (i__17923__auto___28003 + (1));
i__17923__auto___28003 = G__28004;
continue;
} else {
}
break;
}

var G__27432 = args27428.length;
switch (G__27432) {
case 0:
return om_tools.dom.html.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27428.slice((1)),(0)));
return om_tools.dom.html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.html.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.html,null,null);
});

om_tools.dom.html.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.html,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.html.cljs$lang$applyTo = (function (seq27429){
var G__27430 = cljs.core.first.call(null,seq27429);
var seq27429__$1 = cljs.core.next.call(null,seq27429);
return om_tools.dom.html.cljs$core$IFn$_invoke$arity$variadic(G__27430,seq27429__$1);
});

om_tools.dom.html.cljs$lang$maxFixedArity = (1);

om_tools.dom.i = (function om_tools$dom$i(var_args){
var args27433 = [];
var len__17922__auto___28006 = arguments.length;
var i__17923__auto___28007 = (0);
while(true){
if((i__17923__auto___28007 < len__17922__auto___28006)){
args27433.push((arguments[i__17923__auto___28007]));

var G__28008 = (i__17923__auto___28007 + (1));
i__17923__auto___28007 = G__28008;
continue;
} else {
}
break;
}

var G__27437 = args27433.length;
switch (G__27437) {
case 0:
return om_tools.dom.i.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27433.slice((1)),(0)));
return om_tools.dom.i.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.i.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.i,null,null);
});

om_tools.dom.i.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.i,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.i.cljs$lang$applyTo = (function (seq27434){
var G__27435 = cljs.core.first.call(null,seq27434);
var seq27434__$1 = cljs.core.next.call(null,seq27434);
return om_tools.dom.i.cljs$core$IFn$_invoke$arity$variadic(G__27435,seq27434__$1);
});

om_tools.dom.i.cljs$lang$maxFixedArity = (1);

om_tools.dom.iframe = (function om_tools$dom$iframe(var_args){
var args27438 = [];
var len__17922__auto___28010 = arguments.length;
var i__17923__auto___28011 = (0);
while(true){
if((i__17923__auto___28011 < len__17922__auto___28010)){
args27438.push((arguments[i__17923__auto___28011]));

var G__28012 = (i__17923__auto___28011 + (1));
i__17923__auto___28011 = G__28012;
continue;
} else {
}
break;
}

var G__27442 = args27438.length;
switch (G__27442) {
case 0:
return om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27438.slice((1)),(0)));
return om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.iframe,null,null);
});

om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.iframe,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.iframe.cljs$lang$applyTo = (function (seq27439){
var G__27440 = cljs.core.first.call(null,seq27439);
var seq27439__$1 = cljs.core.next.call(null,seq27439);
return om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$variadic(G__27440,seq27439__$1);
});

om_tools.dom.iframe.cljs$lang$maxFixedArity = (1);

om_tools.dom.img = (function om_tools$dom$img(var_args){
var args27443 = [];
var len__17922__auto___28014 = arguments.length;
var i__17923__auto___28015 = (0);
while(true){
if((i__17923__auto___28015 < len__17922__auto___28014)){
args27443.push((arguments[i__17923__auto___28015]));

var G__28016 = (i__17923__auto___28015 + (1));
i__17923__auto___28015 = G__28016;
continue;
} else {
}
break;
}

var G__27447 = args27443.length;
switch (G__27447) {
case 0:
return om_tools.dom.img.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27443.slice((1)),(0)));
return om_tools.dom.img.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.img.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.img,null,null);
});

om_tools.dom.img.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.img,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.img.cljs$lang$applyTo = (function (seq27444){
var G__27445 = cljs.core.first.call(null,seq27444);
var seq27444__$1 = cljs.core.next.call(null,seq27444);
return om_tools.dom.img.cljs$core$IFn$_invoke$arity$variadic(G__27445,seq27444__$1);
});

om_tools.dom.img.cljs$lang$maxFixedArity = (1);

om_tools.dom.ins = (function om_tools$dom$ins(var_args){
var args27448 = [];
var len__17922__auto___28018 = arguments.length;
var i__17923__auto___28019 = (0);
while(true){
if((i__17923__auto___28019 < len__17922__auto___28018)){
args27448.push((arguments[i__17923__auto___28019]));

var G__28020 = (i__17923__auto___28019 + (1));
i__17923__auto___28019 = G__28020;
continue;
} else {
}
break;
}

var G__27452 = args27448.length;
switch (G__27452) {
case 0:
return om_tools.dom.ins.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27448.slice((1)),(0)));
return om_tools.dom.ins.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.ins.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ins,null,null);
});

om_tools.dom.ins.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.ins,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.ins.cljs$lang$applyTo = (function (seq27449){
var G__27450 = cljs.core.first.call(null,seq27449);
var seq27449__$1 = cljs.core.next.call(null,seq27449);
return om_tools.dom.ins.cljs$core$IFn$_invoke$arity$variadic(G__27450,seq27449__$1);
});

om_tools.dom.ins.cljs$lang$maxFixedArity = (1);

om_tools.dom.kbd = (function om_tools$dom$kbd(var_args){
var args27453 = [];
var len__17922__auto___28022 = arguments.length;
var i__17923__auto___28023 = (0);
while(true){
if((i__17923__auto___28023 < len__17922__auto___28022)){
args27453.push((arguments[i__17923__auto___28023]));

var G__28024 = (i__17923__auto___28023 + (1));
i__17923__auto___28023 = G__28024;
continue;
} else {
}
break;
}

var G__27457 = args27453.length;
switch (G__27457) {
case 0:
return om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27453.slice((1)),(0)));
return om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.kbd,null,null);
});

om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.kbd,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.kbd.cljs$lang$applyTo = (function (seq27454){
var G__27455 = cljs.core.first.call(null,seq27454);
var seq27454__$1 = cljs.core.next.call(null,seq27454);
return om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$variadic(G__27455,seq27454__$1);
});

om_tools.dom.kbd.cljs$lang$maxFixedArity = (1);

om_tools.dom.keygen = (function om_tools$dom$keygen(var_args){
var args27458 = [];
var len__17922__auto___28026 = arguments.length;
var i__17923__auto___28027 = (0);
while(true){
if((i__17923__auto___28027 < len__17922__auto___28026)){
args27458.push((arguments[i__17923__auto___28027]));

var G__28028 = (i__17923__auto___28027 + (1));
i__17923__auto___28027 = G__28028;
continue;
} else {
}
break;
}

var G__27462 = args27458.length;
switch (G__27462) {
case 0:
return om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27458.slice((1)),(0)));
return om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.keygen,null,null);
});

om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.keygen,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.keygen.cljs$lang$applyTo = (function (seq27459){
var G__27460 = cljs.core.first.call(null,seq27459);
var seq27459__$1 = cljs.core.next.call(null,seq27459);
return om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$variadic(G__27460,seq27459__$1);
});

om_tools.dom.keygen.cljs$lang$maxFixedArity = (1);

om_tools.dom.label = (function om_tools$dom$label(var_args){
var args27463 = [];
var len__17922__auto___28030 = arguments.length;
var i__17923__auto___28031 = (0);
while(true){
if((i__17923__auto___28031 < len__17922__auto___28030)){
args27463.push((arguments[i__17923__auto___28031]));

var G__28032 = (i__17923__auto___28031 + (1));
i__17923__auto___28031 = G__28032;
continue;
} else {
}
break;
}

var G__27467 = args27463.length;
switch (G__27467) {
case 0:
return om_tools.dom.label.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27463.slice((1)),(0)));
return om_tools.dom.label.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.label.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.label,null,null);
});

om_tools.dom.label.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.label,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.label.cljs$lang$applyTo = (function (seq27464){
var G__27465 = cljs.core.first.call(null,seq27464);
var seq27464__$1 = cljs.core.next.call(null,seq27464);
return om_tools.dom.label.cljs$core$IFn$_invoke$arity$variadic(G__27465,seq27464__$1);
});

om_tools.dom.label.cljs$lang$maxFixedArity = (1);

om_tools.dom.legend = (function om_tools$dom$legend(var_args){
var args27468 = [];
var len__17922__auto___28034 = arguments.length;
var i__17923__auto___28035 = (0);
while(true){
if((i__17923__auto___28035 < len__17922__auto___28034)){
args27468.push((arguments[i__17923__auto___28035]));

var G__28036 = (i__17923__auto___28035 + (1));
i__17923__auto___28035 = G__28036;
continue;
} else {
}
break;
}

var G__27472 = args27468.length;
switch (G__27472) {
case 0:
return om_tools.dom.legend.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27468.slice((1)),(0)));
return om_tools.dom.legend.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.legend.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.legend,null,null);
});

om_tools.dom.legend.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.legend,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.legend.cljs$lang$applyTo = (function (seq27469){
var G__27470 = cljs.core.first.call(null,seq27469);
var seq27469__$1 = cljs.core.next.call(null,seq27469);
return om_tools.dom.legend.cljs$core$IFn$_invoke$arity$variadic(G__27470,seq27469__$1);
});

om_tools.dom.legend.cljs$lang$maxFixedArity = (1);

om_tools.dom.li = (function om_tools$dom$li(var_args){
var args27473 = [];
var len__17922__auto___28038 = arguments.length;
var i__17923__auto___28039 = (0);
while(true){
if((i__17923__auto___28039 < len__17922__auto___28038)){
args27473.push((arguments[i__17923__auto___28039]));

var G__28040 = (i__17923__auto___28039 + (1));
i__17923__auto___28039 = G__28040;
continue;
} else {
}
break;
}

var G__27477 = args27473.length;
switch (G__27477) {
case 0:
return om_tools.dom.li.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27473.slice((1)),(0)));
return om_tools.dom.li.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.li.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.li,null,null);
});

om_tools.dom.li.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.li,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.li.cljs$lang$applyTo = (function (seq27474){
var G__27475 = cljs.core.first.call(null,seq27474);
var seq27474__$1 = cljs.core.next.call(null,seq27474);
return om_tools.dom.li.cljs$core$IFn$_invoke$arity$variadic(G__27475,seq27474__$1);
});

om_tools.dom.li.cljs$lang$maxFixedArity = (1);

om_tools.dom.link = (function om_tools$dom$link(var_args){
var args27478 = [];
var len__17922__auto___28042 = arguments.length;
var i__17923__auto___28043 = (0);
while(true){
if((i__17923__auto___28043 < len__17922__auto___28042)){
args27478.push((arguments[i__17923__auto___28043]));

var G__28044 = (i__17923__auto___28043 + (1));
i__17923__auto___28043 = G__28044;
continue;
} else {
}
break;
}

var G__27482 = args27478.length;
switch (G__27482) {
case 0:
return om_tools.dom.link.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27478.slice((1)),(0)));
return om_tools.dom.link.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.link.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.link,null,null);
});

om_tools.dom.link.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.link,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.link.cljs$lang$applyTo = (function (seq27479){
var G__27480 = cljs.core.first.call(null,seq27479);
var seq27479__$1 = cljs.core.next.call(null,seq27479);
return om_tools.dom.link.cljs$core$IFn$_invoke$arity$variadic(G__27480,seq27479__$1);
});

om_tools.dom.link.cljs$lang$maxFixedArity = (1);

om_tools.dom.main = (function om_tools$dom$main(var_args){
var args27483 = [];
var len__17922__auto___28046 = arguments.length;
var i__17923__auto___28047 = (0);
while(true){
if((i__17923__auto___28047 < len__17922__auto___28046)){
args27483.push((arguments[i__17923__auto___28047]));

var G__28048 = (i__17923__auto___28047 + (1));
i__17923__auto___28047 = G__28048;
continue;
} else {
}
break;
}

var G__27487 = args27483.length;
switch (G__27487) {
case 0:
return om_tools.dom.main.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27483.slice((1)),(0)));
return om_tools.dom.main.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.main.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.main,null,null);
});

om_tools.dom.main.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.main,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.main.cljs$lang$applyTo = (function (seq27484){
var G__27485 = cljs.core.first.call(null,seq27484);
var seq27484__$1 = cljs.core.next.call(null,seq27484);
return om_tools.dom.main.cljs$core$IFn$_invoke$arity$variadic(G__27485,seq27484__$1);
});

om_tools.dom.main.cljs$lang$maxFixedArity = (1);

om_tools.dom.map = (function om_tools$dom$map(var_args){
var args27488 = [];
var len__17922__auto___28050 = arguments.length;
var i__17923__auto___28051 = (0);
while(true){
if((i__17923__auto___28051 < len__17922__auto___28050)){
args27488.push((arguments[i__17923__auto___28051]));

var G__28052 = (i__17923__auto___28051 + (1));
i__17923__auto___28051 = G__28052;
continue;
} else {
}
break;
}

var G__27492 = args27488.length;
switch (G__27492) {
case 0:
return om_tools.dom.map.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27488.slice((1)),(0)));
return om_tools.dom.map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.map.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.map,null,null);
});

om_tools.dom.map.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.map,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.map.cljs$lang$applyTo = (function (seq27489){
var G__27490 = cljs.core.first.call(null,seq27489);
var seq27489__$1 = cljs.core.next.call(null,seq27489);
return om_tools.dom.map.cljs$core$IFn$_invoke$arity$variadic(G__27490,seq27489__$1);
});

om_tools.dom.map.cljs$lang$maxFixedArity = (1);

om_tools.dom.mark = (function om_tools$dom$mark(var_args){
var args27493 = [];
var len__17922__auto___28054 = arguments.length;
var i__17923__auto___28055 = (0);
while(true){
if((i__17923__auto___28055 < len__17922__auto___28054)){
args27493.push((arguments[i__17923__auto___28055]));

var G__28056 = (i__17923__auto___28055 + (1));
i__17923__auto___28055 = G__28056;
continue;
} else {
}
break;
}

var G__27497 = args27493.length;
switch (G__27497) {
case 0:
return om_tools.dom.mark.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27493.slice((1)),(0)));
return om_tools.dom.mark.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.mark.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.mark,null,null);
});

om_tools.dom.mark.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.mark,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.mark.cljs$lang$applyTo = (function (seq27494){
var G__27495 = cljs.core.first.call(null,seq27494);
var seq27494__$1 = cljs.core.next.call(null,seq27494);
return om_tools.dom.mark.cljs$core$IFn$_invoke$arity$variadic(G__27495,seq27494__$1);
});

om_tools.dom.mark.cljs$lang$maxFixedArity = (1);

om_tools.dom.marquee = (function om_tools$dom$marquee(var_args){
var args27498 = [];
var len__17922__auto___28058 = arguments.length;
var i__17923__auto___28059 = (0);
while(true){
if((i__17923__auto___28059 < len__17922__auto___28058)){
args27498.push((arguments[i__17923__auto___28059]));

var G__28060 = (i__17923__auto___28059 + (1));
i__17923__auto___28059 = G__28060;
continue;
} else {
}
break;
}

var G__27502 = args27498.length;
switch (G__27502) {
case 0:
return om_tools.dom.marquee.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27498.slice((1)),(0)));
return om_tools.dom.marquee.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.marquee.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.marquee,null,null);
});

om_tools.dom.marquee.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.marquee,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.marquee.cljs$lang$applyTo = (function (seq27499){
var G__27500 = cljs.core.first.call(null,seq27499);
var seq27499__$1 = cljs.core.next.call(null,seq27499);
return om_tools.dom.marquee.cljs$core$IFn$_invoke$arity$variadic(G__27500,seq27499__$1);
});

om_tools.dom.marquee.cljs$lang$maxFixedArity = (1);

om_tools.dom.menu = (function om_tools$dom$menu(var_args){
var args27503 = [];
var len__17922__auto___28062 = arguments.length;
var i__17923__auto___28063 = (0);
while(true){
if((i__17923__auto___28063 < len__17922__auto___28062)){
args27503.push((arguments[i__17923__auto___28063]));

var G__28064 = (i__17923__auto___28063 + (1));
i__17923__auto___28063 = G__28064;
continue;
} else {
}
break;
}

var G__27507 = args27503.length;
switch (G__27507) {
case 0:
return om_tools.dom.menu.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27503.slice((1)),(0)));
return om_tools.dom.menu.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.menu.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.menu,null,null);
});

om_tools.dom.menu.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.menu,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.menu.cljs$lang$applyTo = (function (seq27504){
var G__27505 = cljs.core.first.call(null,seq27504);
var seq27504__$1 = cljs.core.next.call(null,seq27504);
return om_tools.dom.menu.cljs$core$IFn$_invoke$arity$variadic(G__27505,seq27504__$1);
});

om_tools.dom.menu.cljs$lang$maxFixedArity = (1);

om_tools.dom.menuitem = (function om_tools$dom$menuitem(var_args){
var args27508 = [];
var len__17922__auto___28066 = arguments.length;
var i__17923__auto___28067 = (0);
while(true){
if((i__17923__auto___28067 < len__17922__auto___28066)){
args27508.push((arguments[i__17923__auto___28067]));

var G__28068 = (i__17923__auto___28067 + (1));
i__17923__auto___28067 = G__28068;
continue;
} else {
}
break;
}

var G__27512 = args27508.length;
switch (G__27512) {
case 0:
return om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27508.slice((1)),(0)));
return om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.menuitem,null,null);
});

om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.menuitem,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.menuitem.cljs$lang$applyTo = (function (seq27509){
var G__27510 = cljs.core.first.call(null,seq27509);
var seq27509__$1 = cljs.core.next.call(null,seq27509);
return om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic(G__27510,seq27509__$1);
});

om_tools.dom.menuitem.cljs$lang$maxFixedArity = (1);

om_tools.dom.meta = (function om_tools$dom$meta(var_args){
var args27513 = [];
var len__17922__auto___28070 = arguments.length;
var i__17923__auto___28071 = (0);
while(true){
if((i__17923__auto___28071 < len__17922__auto___28070)){
args27513.push((arguments[i__17923__auto___28071]));

var G__28072 = (i__17923__auto___28071 + (1));
i__17923__auto___28071 = G__28072;
continue;
} else {
}
break;
}

var G__27517 = args27513.length;
switch (G__27517) {
case 0:
return om_tools.dom.meta.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27513.slice((1)),(0)));
return om_tools.dom.meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.meta.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.meta,null,null);
});

om_tools.dom.meta.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.meta,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.meta.cljs$lang$applyTo = (function (seq27514){
var G__27515 = cljs.core.first.call(null,seq27514);
var seq27514__$1 = cljs.core.next.call(null,seq27514);
return om_tools.dom.meta.cljs$core$IFn$_invoke$arity$variadic(G__27515,seq27514__$1);
});

om_tools.dom.meta.cljs$lang$maxFixedArity = (1);

om_tools.dom.meter = (function om_tools$dom$meter(var_args){
var args27518 = [];
var len__17922__auto___28074 = arguments.length;
var i__17923__auto___28075 = (0);
while(true){
if((i__17923__auto___28075 < len__17922__auto___28074)){
args27518.push((arguments[i__17923__auto___28075]));

var G__28076 = (i__17923__auto___28075 + (1));
i__17923__auto___28075 = G__28076;
continue;
} else {
}
break;
}

var G__27522 = args27518.length;
switch (G__27522) {
case 0:
return om_tools.dom.meter.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27518.slice((1)),(0)));
return om_tools.dom.meter.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.meter.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.meter,null,null);
});

om_tools.dom.meter.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.meter,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.meter.cljs$lang$applyTo = (function (seq27519){
var G__27520 = cljs.core.first.call(null,seq27519);
var seq27519__$1 = cljs.core.next.call(null,seq27519);
return om_tools.dom.meter.cljs$core$IFn$_invoke$arity$variadic(G__27520,seq27519__$1);
});

om_tools.dom.meter.cljs$lang$maxFixedArity = (1);

om_tools.dom.nav = (function om_tools$dom$nav(var_args){
var args27523 = [];
var len__17922__auto___28078 = arguments.length;
var i__17923__auto___28079 = (0);
while(true){
if((i__17923__auto___28079 < len__17922__auto___28078)){
args27523.push((arguments[i__17923__auto___28079]));

var G__28080 = (i__17923__auto___28079 + (1));
i__17923__auto___28079 = G__28080;
continue;
} else {
}
break;
}

var G__27527 = args27523.length;
switch (G__27527) {
case 0:
return om_tools.dom.nav.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27523.slice((1)),(0)));
return om_tools.dom.nav.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.nav.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.nav,null,null);
});

om_tools.dom.nav.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.nav,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.nav.cljs$lang$applyTo = (function (seq27524){
var G__27525 = cljs.core.first.call(null,seq27524);
var seq27524__$1 = cljs.core.next.call(null,seq27524);
return om_tools.dom.nav.cljs$core$IFn$_invoke$arity$variadic(G__27525,seq27524__$1);
});

om_tools.dom.nav.cljs$lang$maxFixedArity = (1);

om_tools.dom.noscript = (function om_tools$dom$noscript(var_args){
var args27528 = [];
var len__17922__auto___28082 = arguments.length;
var i__17923__auto___28083 = (0);
while(true){
if((i__17923__auto___28083 < len__17922__auto___28082)){
args27528.push((arguments[i__17923__auto___28083]));

var G__28084 = (i__17923__auto___28083 + (1));
i__17923__auto___28083 = G__28084;
continue;
} else {
}
break;
}

var G__27532 = args27528.length;
switch (G__27532) {
case 0:
return om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27528.slice((1)),(0)));
return om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.noscript,null,null);
});

om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.noscript,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.noscript.cljs$lang$applyTo = (function (seq27529){
var G__27530 = cljs.core.first.call(null,seq27529);
var seq27529__$1 = cljs.core.next.call(null,seq27529);
return om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$variadic(G__27530,seq27529__$1);
});

om_tools.dom.noscript.cljs$lang$maxFixedArity = (1);

om_tools.dom.object = (function om_tools$dom$object(var_args){
var args27533 = [];
var len__17922__auto___28086 = arguments.length;
var i__17923__auto___28087 = (0);
while(true){
if((i__17923__auto___28087 < len__17922__auto___28086)){
args27533.push((arguments[i__17923__auto___28087]));

var G__28088 = (i__17923__auto___28087 + (1));
i__17923__auto___28087 = G__28088;
continue;
} else {
}
break;
}

var G__27537 = args27533.length;
switch (G__27537) {
case 0:
return om_tools.dom.object.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27533.slice((1)),(0)));
return om_tools.dom.object.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.object.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.object,null,null);
});

om_tools.dom.object.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.object,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.object.cljs$lang$applyTo = (function (seq27534){
var G__27535 = cljs.core.first.call(null,seq27534);
var seq27534__$1 = cljs.core.next.call(null,seq27534);
return om_tools.dom.object.cljs$core$IFn$_invoke$arity$variadic(G__27535,seq27534__$1);
});

om_tools.dom.object.cljs$lang$maxFixedArity = (1);

om_tools.dom.ol = (function om_tools$dom$ol(var_args){
var args27538 = [];
var len__17922__auto___28090 = arguments.length;
var i__17923__auto___28091 = (0);
while(true){
if((i__17923__auto___28091 < len__17922__auto___28090)){
args27538.push((arguments[i__17923__auto___28091]));

var G__28092 = (i__17923__auto___28091 + (1));
i__17923__auto___28091 = G__28092;
continue;
} else {
}
break;
}

var G__27542 = args27538.length;
switch (G__27542) {
case 0:
return om_tools.dom.ol.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27538.slice((1)),(0)));
return om_tools.dom.ol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.ol.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ol,null,null);
});

om_tools.dom.ol.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.ol,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.ol.cljs$lang$applyTo = (function (seq27539){
var G__27540 = cljs.core.first.call(null,seq27539);
var seq27539__$1 = cljs.core.next.call(null,seq27539);
return om_tools.dom.ol.cljs$core$IFn$_invoke$arity$variadic(G__27540,seq27539__$1);
});

om_tools.dom.ol.cljs$lang$maxFixedArity = (1);

om_tools.dom.optgroup = (function om_tools$dom$optgroup(var_args){
var args27543 = [];
var len__17922__auto___28094 = arguments.length;
var i__17923__auto___28095 = (0);
while(true){
if((i__17923__auto___28095 < len__17922__auto___28094)){
args27543.push((arguments[i__17923__auto___28095]));

var G__28096 = (i__17923__auto___28095 + (1));
i__17923__auto___28095 = G__28096;
continue;
} else {
}
break;
}

var G__27547 = args27543.length;
switch (G__27547) {
case 0:
return om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27543.slice((1)),(0)));
return om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.optgroup,null,null);
});

om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.optgroup,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.optgroup.cljs$lang$applyTo = (function (seq27544){
var G__27545 = cljs.core.first.call(null,seq27544);
var seq27544__$1 = cljs.core.next.call(null,seq27544);
return om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic(G__27545,seq27544__$1);
});

om_tools.dom.optgroup.cljs$lang$maxFixedArity = (1);

om_tools.dom.output = (function om_tools$dom$output(var_args){
var args27548 = [];
var len__17922__auto___28098 = arguments.length;
var i__17923__auto___28099 = (0);
while(true){
if((i__17923__auto___28099 < len__17922__auto___28098)){
args27548.push((arguments[i__17923__auto___28099]));

var G__28100 = (i__17923__auto___28099 + (1));
i__17923__auto___28099 = G__28100;
continue;
} else {
}
break;
}

var G__27552 = args27548.length;
switch (G__27552) {
case 0:
return om_tools.dom.output.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27548.slice((1)),(0)));
return om_tools.dom.output.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.output.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.output,null,null);
});

om_tools.dom.output.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.output,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.output.cljs$lang$applyTo = (function (seq27549){
var G__27550 = cljs.core.first.call(null,seq27549);
var seq27549__$1 = cljs.core.next.call(null,seq27549);
return om_tools.dom.output.cljs$core$IFn$_invoke$arity$variadic(G__27550,seq27549__$1);
});

om_tools.dom.output.cljs$lang$maxFixedArity = (1);

om_tools.dom.p = (function om_tools$dom$p(var_args){
var args27553 = [];
var len__17922__auto___28102 = arguments.length;
var i__17923__auto___28103 = (0);
while(true){
if((i__17923__auto___28103 < len__17922__auto___28102)){
args27553.push((arguments[i__17923__auto___28103]));

var G__28104 = (i__17923__auto___28103 + (1));
i__17923__auto___28103 = G__28104;
continue;
} else {
}
break;
}

var G__27557 = args27553.length;
switch (G__27557) {
case 0:
return om_tools.dom.p.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27553.slice((1)),(0)));
return om_tools.dom.p.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.p.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.p,null,null);
});

om_tools.dom.p.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.p,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.p.cljs$lang$applyTo = (function (seq27554){
var G__27555 = cljs.core.first.call(null,seq27554);
var seq27554__$1 = cljs.core.next.call(null,seq27554);
return om_tools.dom.p.cljs$core$IFn$_invoke$arity$variadic(G__27555,seq27554__$1);
});

om_tools.dom.p.cljs$lang$maxFixedArity = (1);

om_tools.dom.param = (function om_tools$dom$param(var_args){
var args27558 = [];
var len__17922__auto___28106 = arguments.length;
var i__17923__auto___28107 = (0);
while(true){
if((i__17923__auto___28107 < len__17922__auto___28106)){
args27558.push((arguments[i__17923__auto___28107]));

var G__28108 = (i__17923__auto___28107 + (1));
i__17923__auto___28107 = G__28108;
continue;
} else {
}
break;
}

var G__27562 = args27558.length;
switch (G__27562) {
case 0:
return om_tools.dom.param.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27558.slice((1)),(0)));
return om_tools.dom.param.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.param.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.param,null,null);
});

om_tools.dom.param.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.param,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.param.cljs$lang$applyTo = (function (seq27559){
var G__27560 = cljs.core.first.call(null,seq27559);
var seq27559__$1 = cljs.core.next.call(null,seq27559);
return om_tools.dom.param.cljs$core$IFn$_invoke$arity$variadic(G__27560,seq27559__$1);
});

om_tools.dom.param.cljs$lang$maxFixedArity = (1);

om_tools.dom.pre = (function om_tools$dom$pre(var_args){
var args27563 = [];
var len__17922__auto___28110 = arguments.length;
var i__17923__auto___28111 = (0);
while(true){
if((i__17923__auto___28111 < len__17922__auto___28110)){
args27563.push((arguments[i__17923__auto___28111]));

var G__28112 = (i__17923__auto___28111 + (1));
i__17923__auto___28111 = G__28112;
continue;
} else {
}
break;
}

var G__27567 = args27563.length;
switch (G__27567) {
case 0:
return om_tools.dom.pre.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27563.slice((1)),(0)));
return om_tools.dom.pre.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.pre.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.pre,null,null);
});

om_tools.dom.pre.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.pre,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.pre.cljs$lang$applyTo = (function (seq27564){
var G__27565 = cljs.core.first.call(null,seq27564);
var seq27564__$1 = cljs.core.next.call(null,seq27564);
return om_tools.dom.pre.cljs$core$IFn$_invoke$arity$variadic(G__27565,seq27564__$1);
});

om_tools.dom.pre.cljs$lang$maxFixedArity = (1);

om_tools.dom.progress = (function om_tools$dom$progress(var_args){
var args27568 = [];
var len__17922__auto___28114 = arguments.length;
var i__17923__auto___28115 = (0);
while(true){
if((i__17923__auto___28115 < len__17922__auto___28114)){
args27568.push((arguments[i__17923__auto___28115]));

var G__28116 = (i__17923__auto___28115 + (1));
i__17923__auto___28115 = G__28116;
continue;
} else {
}
break;
}

var G__27572 = args27568.length;
switch (G__27572) {
case 0:
return om_tools.dom.progress.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27568.slice((1)),(0)));
return om_tools.dom.progress.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.progress.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.progress,null,null);
});

om_tools.dom.progress.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.progress,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.progress.cljs$lang$applyTo = (function (seq27569){
var G__27570 = cljs.core.first.call(null,seq27569);
var seq27569__$1 = cljs.core.next.call(null,seq27569);
return om_tools.dom.progress.cljs$core$IFn$_invoke$arity$variadic(G__27570,seq27569__$1);
});

om_tools.dom.progress.cljs$lang$maxFixedArity = (1);

om_tools.dom.q = (function om_tools$dom$q(var_args){
var args27573 = [];
var len__17922__auto___28118 = arguments.length;
var i__17923__auto___28119 = (0);
while(true){
if((i__17923__auto___28119 < len__17922__auto___28118)){
args27573.push((arguments[i__17923__auto___28119]));

var G__28120 = (i__17923__auto___28119 + (1));
i__17923__auto___28119 = G__28120;
continue;
} else {
}
break;
}

var G__27577 = args27573.length;
switch (G__27577) {
case 0:
return om_tools.dom.q.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27573.slice((1)),(0)));
return om_tools.dom.q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.q.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.q,null,null);
});

om_tools.dom.q.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.q,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.q.cljs$lang$applyTo = (function (seq27574){
var G__27575 = cljs.core.first.call(null,seq27574);
var seq27574__$1 = cljs.core.next.call(null,seq27574);
return om_tools.dom.q.cljs$core$IFn$_invoke$arity$variadic(G__27575,seq27574__$1);
});

om_tools.dom.q.cljs$lang$maxFixedArity = (1);

om_tools.dom.rp = (function om_tools$dom$rp(var_args){
var args27578 = [];
var len__17922__auto___28122 = arguments.length;
var i__17923__auto___28123 = (0);
while(true){
if((i__17923__auto___28123 < len__17922__auto___28122)){
args27578.push((arguments[i__17923__auto___28123]));

var G__28124 = (i__17923__auto___28123 + (1));
i__17923__auto___28123 = G__28124;
continue;
} else {
}
break;
}

var G__27582 = args27578.length;
switch (G__27582) {
case 0:
return om_tools.dom.rp.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27578.slice((1)),(0)));
return om_tools.dom.rp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.rp.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.rp,null,null);
});

om_tools.dom.rp.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.rp,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.rp.cljs$lang$applyTo = (function (seq27579){
var G__27580 = cljs.core.first.call(null,seq27579);
var seq27579__$1 = cljs.core.next.call(null,seq27579);
return om_tools.dom.rp.cljs$core$IFn$_invoke$arity$variadic(G__27580,seq27579__$1);
});

om_tools.dom.rp.cljs$lang$maxFixedArity = (1);

om_tools.dom.rt = (function om_tools$dom$rt(var_args){
var args27583 = [];
var len__17922__auto___28126 = arguments.length;
var i__17923__auto___28127 = (0);
while(true){
if((i__17923__auto___28127 < len__17922__auto___28126)){
args27583.push((arguments[i__17923__auto___28127]));

var G__28128 = (i__17923__auto___28127 + (1));
i__17923__auto___28127 = G__28128;
continue;
} else {
}
break;
}

var G__27587 = args27583.length;
switch (G__27587) {
case 0:
return om_tools.dom.rt.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27583.slice((1)),(0)));
return om_tools.dom.rt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.rt.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.rt,null,null);
});

om_tools.dom.rt.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.rt,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.rt.cljs$lang$applyTo = (function (seq27584){
var G__27585 = cljs.core.first.call(null,seq27584);
var seq27584__$1 = cljs.core.next.call(null,seq27584);
return om_tools.dom.rt.cljs$core$IFn$_invoke$arity$variadic(G__27585,seq27584__$1);
});

om_tools.dom.rt.cljs$lang$maxFixedArity = (1);

om_tools.dom.ruby = (function om_tools$dom$ruby(var_args){
var args27588 = [];
var len__17922__auto___28130 = arguments.length;
var i__17923__auto___28131 = (0);
while(true){
if((i__17923__auto___28131 < len__17922__auto___28130)){
args27588.push((arguments[i__17923__auto___28131]));

var G__28132 = (i__17923__auto___28131 + (1));
i__17923__auto___28131 = G__28132;
continue;
} else {
}
break;
}

var G__27592 = args27588.length;
switch (G__27592) {
case 0:
return om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27588.slice((1)),(0)));
return om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ruby,null,null);
});

om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.ruby,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.ruby.cljs$lang$applyTo = (function (seq27589){
var G__27590 = cljs.core.first.call(null,seq27589);
var seq27589__$1 = cljs.core.next.call(null,seq27589);
return om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$variadic(G__27590,seq27589__$1);
});

om_tools.dom.ruby.cljs$lang$maxFixedArity = (1);

om_tools.dom.s = (function om_tools$dom$s(var_args){
var args27593 = [];
var len__17922__auto___28134 = arguments.length;
var i__17923__auto___28135 = (0);
while(true){
if((i__17923__auto___28135 < len__17922__auto___28134)){
args27593.push((arguments[i__17923__auto___28135]));

var G__28136 = (i__17923__auto___28135 + (1));
i__17923__auto___28135 = G__28136;
continue;
} else {
}
break;
}

var G__27597 = args27593.length;
switch (G__27597) {
case 0:
return om_tools.dom.s.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27593.slice((1)),(0)));
return om_tools.dom.s.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.s.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.s,null,null);
});

om_tools.dom.s.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.s,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.s.cljs$lang$applyTo = (function (seq27594){
var G__27595 = cljs.core.first.call(null,seq27594);
var seq27594__$1 = cljs.core.next.call(null,seq27594);
return om_tools.dom.s.cljs$core$IFn$_invoke$arity$variadic(G__27595,seq27594__$1);
});

om_tools.dom.s.cljs$lang$maxFixedArity = (1);

om_tools.dom.samp = (function om_tools$dom$samp(var_args){
var args27598 = [];
var len__17922__auto___28138 = arguments.length;
var i__17923__auto___28139 = (0);
while(true){
if((i__17923__auto___28139 < len__17922__auto___28138)){
args27598.push((arguments[i__17923__auto___28139]));

var G__28140 = (i__17923__auto___28139 + (1));
i__17923__auto___28139 = G__28140;
continue;
} else {
}
break;
}

var G__27602 = args27598.length;
switch (G__27602) {
case 0:
return om_tools.dom.samp.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27598.slice((1)),(0)));
return om_tools.dom.samp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.samp.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.samp,null,null);
});

om_tools.dom.samp.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.samp,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.samp.cljs$lang$applyTo = (function (seq27599){
var G__27600 = cljs.core.first.call(null,seq27599);
var seq27599__$1 = cljs.core.next.call(null,seq27599);
return om_tools.dom.samp.cljs$core$IFn$_invoke$arity$variadic(G__27600,seq27599__$1);
});

om_tools.dom.samp.cljs$lang$maxFixedArity = (1);

om_tools.dom.script = (function om_tools$dom$script(var_args){
var args27603 = [];
var len__17922__auto___28142 = arguments.length;
var i__17923__auto___28143 = (0);
while(true){
if((i__17923__auto___28143 < len__17922__auto___28142)){
args27603.push((arguments[i__17923__auto___28143]));

var G__28144 = (i__17923__auto___28143 + (1));
i__17923__auto___28143 = G__28144;
continue;
} else {
}
break;
}

var G__27607 = args27603.length;
switch (G__27607) {
case 0:
return om_tools.dom.script.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27603.slice((1)),(0)));
return om_tools.dom.script.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.script.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.script,null,null);
});

om_tools.dom.script.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.script,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.script.cljs$lang$applyTo = (function (seq27604){
var G__27605 = cljs.core.first.call(null,seq27604);
var seq27604__$1 = cljs.core.next.call(null,seq27604);
return om_tools.dom.script.cljs$core$IFn$_invoke$arity$variadic(G__27605,seq27604__$1);
});

om_tools.dom.script.cljs$lang$maxFixedArity = (1);

om_tools.dom.section = (function om_tools$dom$section(var_args){
var args27608 = [];
var len__17922__auto___28146 = arguments.length;
var i__17923__auto___28147 = (0);
while(true){
if((i__17923__auto___28147 < len__17922__auto___28146)){
args27608.push((arguments[i__17923__auto___28147]));

var G__28148 = (i__17923__auto___28147 + (1));
i__17923__auto___28147 = G__28148;
continue;
} else {
}
break;
}

var G__27612 = args27608.length;
switch (G__27612) {
case 0:
return om_tools.dom.section.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27608.slice((1)),(0)));
return om_tools.dom.section.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.section.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.section,null,null);
});

om_tools.dom.section.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.section,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.section.cljs$lang$applyTo = (function (seq27609){
var G__27610 = cljs.core.first.call(null,seq27609);
var seq27609__$1 = cljs.core.next.call(null,seq27609);
return om_tools.dom.section.cljs$core$IFn$_invoke$arity$variadic(G__27610,seq27609__$1);
});

om_tools.dom.section.cljs$lang$maxFixedArity = (1);

om_tools.dom.select = (function om_tools$dom$select(var_args){
var args27613 = [];
var len__17922__auto___28150 = arguments.length;
var i__17923__auto___28151 = (0);
while(true){
if((i__17923__auto___28151 < len__17922__auto___28150)){
args27613.push((arguments[i__17923__auto___28151]));

var G__28152 = (i__17923__auto___28151 + (1));
i__17923__auto___28151 = G__28152;
continue;
} else {
}
break;
}

var G__27617 = args27613.length;
switch (G__27617) {
case 0:
return om_tools.dom.select.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27613.slice((1)),(0)));
return om_tools.dom.select.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.select.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.select,null,null);
});

om_tools.dom.select.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.select,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.select.cljs$lang$applyTo = (function (seq27614){
var G__27615 = cljs.core.first.call(null,seq27614);
var seq27614__$1 = cljs.core.next.call(null,seq27614);
return om_tools.dom.select.cljs$core$IFn$_invoke$arity$variadic(G__27615,seq27614__$1);
});

om_tools.dom.select.cljs$lang$maxFixedArity = (1);

om_tools.dom.small = (function om_tools$dom$small(var_args){
var args27618 = [];
var len__17922__auto___28154 = arguments.length;
var i__17923__auto___28155 = (0);
while(true){
if((i__17923__auto___28155 < len__17922__auto___28154)){
args27618.push((arguments[i__17923__auto___28155]));

var G__28156 = (i__17923__auto___28155 + (1));
i__17923__auto___28155 = G__28156;
continue;
} else {
}
break;
}

var G__27622 = args27618.length;
switch (G__27622) {
case 0:
return om_tools.dom.small.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27618.slice((1)),(0)));
return om_tools.dom.small.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.small.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.small,null,null);
});

om_tools.dom.small.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.small,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.small.cljs$lang$applyTo = (function (seq27619){
var G__27620 = cljs.core.first.call(null,seq27619);
var seq27619__$1 = cljs.core.next.call(null,seq27619);
return om_tools.dom.small.cljs$core$IFn$_invoke$arity$variadic(G__27620,seq27619__$1);
});

om_tools.dom.small.cljs$lang$maxFixedArity = (1);

om_tools.dom.source = (function om_tools$dom$source(var_args){
var args27623 = [];
var len__17922__auto___28158 = arguments.length;
var i__17923__auto___28159 = (0);
while(true){
if((i__17923__auto___28159 < len__17922__auto___28158)){
args27623.push((arguments[i__17923__auto___28159]));

var G__28160 = (i__17923__auto___28159 + (1));
i__17923__auto___28159 = G__28160;
continue;
} else {
}
break;
}

var G__27627 = args27623.length;
switch (G__27627) {
case 0:
return om_tools.dom.source.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27623.slice((1)),(0)));
return om_tools.dom.source.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.source.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.source,null,null);
});

om_tools.dom.source.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.source,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.source.cljs$lang$applyTo = (function (seq27624){
var G__27625 = cljs.core.first.call(null,seq27624);
var seq27624__$1 = cljs.core.next.call(null,seq27624);
return om_tools.dom.source.cljs$core$IFn$_invoke$arity$variadic(G__27625,seq27624__$1);
});

om_tools.dom.source.cljs$lang$maxFixedArity = (1);

om_tools.dom.span = (function om_tools$dom$span(var_args){
var args27628 = [];
var len__17922__auto___28162 = arguments.length;
var i__17923__auto___28163 = (0);
while(true){
if((i__17923__auto___28163 < len__17922__auto___28162)){
args27628.push((arguments[i__17923__auto___28163]));

var G__28164 = (i__17923__auto___28163 + (1));
i__17923__auto___28163 = G__28164;
continue;
} else {
}
break;
}

var G__27632 = args27628.length;
switch (G__27632) {
case 0:
return om_tools.dom.span.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27628.slice((1)),(0)));
return om_tools.dom.span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.span.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.span,null,null);
});

om_tools.dom.span.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.span,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.span.cljs$lang$applyTo = (function (seq27629){
var G__27630 = cljs.core.first.call(null,seq27629);
var seq27629__$1 = cljs.core.next.call(null,seq27629);
return om_tools.dom.span.cljs$core$IFn$_invoke$arity$variadic(G__27630,seq27629__$1);
});

om_tools.dom.span.cljs$lang$maxFixedArity = (1);

om_tools.dom.strong = (function om_tools$dom$strong(var_args){
var args27633 = [];
var len__17922__auto___28166 = arguments.length;
var i__17923__auto___28167 = (0);
while(true){
if((i__17923__auto___28167 < len__17922__auto___28166)){
args27633.push((arguments[i__17923__auto___28167]));

var G__28168 = (i__17923__auto___28167 + (1));
i__17923__auto___28167 = G__28168;
continue;
} else {
}
break;
}

var G__27637 = args27633.length;
switch (G__27637) {
case 0:
return om_tools.dom.strong.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27633.slice((1)),(0)));
return om_tools.dom.strong.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.strong.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.strong,null,null);
});

om_tools.dom.strong.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.strong,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.strong.cljs$lang$applyTo = (function (seq27634){
var G__27635 = cljs.core.first.call(null,seq27634);
var seq27634__$1 = cljs.core.next.call(null,seq27634);
return om_tools.dom.strong.cljs$core$IFn$_invoke$arity$variadic(G__27635,seq27634__$1);
});

om_tools.dom.strong.cljs$lang$maxFixedArity = (1);

om_tools.dom.style = (function om_tools$dom$style(var_args){
var args27638 = [];
var len__17922__auto___28170 = arguments.length;
var i__17923__auto___28171 = (0);
while(true){
if((i__17923__auto___28171 < len__17922__auto___28170)){
args27638.push((arguments[i__17923__auto___28171]));

var G__28172 = (i__17923__auto___28171 + (1));
i__17923__auto___28171 = G__28172;
continue;
} else {
}
break;
}

var G__27642 = args27638.length;
switch (G__27642) {
case 0:
return om_tools.dom.style.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27638.slice((1)),(0)));
return om_tools.dom.style.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.style.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.style,null,null);
});

om_tools.dom.style.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.style,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.style.cljs$lang$applyTo = (function (seq27639){
var G__27640 = cljs.core.first.call(null,seq27639);
var seq27639__$1 = cljs.core.next.call(null,seq27639);
return om_tools.dom.style.cljs$core$IFn$_invoke$arity$variadic(G__27640,seq27639__$1);
});

om_tools.dom.style.cljs$lang$maxFixedArity = (1);

om_tools.dom.sub = (function om_tools$dom$sub(var_args){
var args27643 = [];
var len__17922__auto___28174 = arguments.length;
var i__17923__auto___28175 = (0);
while(true){
if((i__17923__auto___28175 < len__17922__auto___28174)){
args27643.push((arguments[i__17923__auto___28175]));

var G__28176 = (i__17923__auto___28175 + (1));
i__17923__auto___28175 = G__28176;
continue;
} else {
}
break;
}

var G__27647 = args27643.length;
switch (G__27647) {
case 0:
return om_tools.dom.sub.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27643.slice((1)),(0)));
return om_tools.dom.sub.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.sub.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.sub,null,null);
});

om_tools.dom.sub.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.sub,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.sub.cljs$lang$applyTo = (function (seq27644){
var G__27645 = cljs.core.first.call(null,seq27644);
var seq27644__$1 = cljs.core.next.call(null,seq27644);
return om_tools.dom.sub.cljs$core$IFn$_invoke$arity$variadic(G__27645,seq27644__$1);
});

om_tools.dom.sub.cljs$lang$maxFixedArity = (1);

om_tools.dom.summary = (function om_tools$dom$summary(var_args){
var args27648 = [];
var len__17922__auto___28178 = arguments.length;
var i__17923__auto___28179 = (0);
while(true){
if((i__17923__auto___28179 < len__17922__auto___28178)){
args27648.push((arguments[i__17923__auto___28179]));

var G__28180 = (i__17923__auto___28179 + (1));
i__17923__auto___28179 = G__28180;
continue;
} else {
}
break;
}

var G__27652 = args27648.length;
switch (G__27652) {
case 0:
return om_tools.dom.summary.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27648.slice((1)),(0)));
return om_tools.dom.summary.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.summary.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.summary,null,null);
});

om_tools.dom.summary.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.summary,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.summary.cljs$lang$applyTo = (function (seq27649){
var G__27650 = cljs.core.first.call(null,seq27649);
var seq27649__$1 = cljs.core.next.call(null,seq27649);
return om_tools.dom.summary.cljs$core$IFn$_invoke$arity$variadic(G__27650,seq27649__$1);
});

om_tools.dom.summary.cljs$lang$maxFixedArity = (1);

om_tools.dom.sup = (function om_tools$dom$sup(var_args){
var args27653 = [];
var len__17922__auto___28182 = arguments.length;
var i__17923__auto___28183 = (0);
while(true){
if((i__17923__auto___28183 < len__17922__auto___28182)){
args27653.push((arguments[i__17923__auto___28183]));

var G__28184 = (i__17923__auto___28183 + (1));
i__17923__auto___28183 = G__28184;
continue;
} else {
}
break;
}

var G__27657 = args27653.length;
switch (G__27657) {
case 0:
return om_tools.dom.sup.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27653.slice((1)),(0)));
return om_tools.dom.sup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.sup.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.sup,null,null);
});

om_tools.dom.sup.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.sup,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.sup.cljs$lang$applyTo = (function (seq27654){
var G__27655 = cljs.core.first.call(null,seq27654);
var seq27654__$1 = cljs.core.next.call(null,seq27654);
return om_tools.dom.sup.cljs$core$IFn$_invoke$arity$variadic(G__27655,seq27654__$1);
});

om_tools.dom.sup.cljs$lang$maxFixedArity = (1);

om_tools.dom.table = (function om_tools$dom$table(var_args){
var args27658 = [];
var len__17922__auto___28186 = arguments.length;
var i__17923__auto___28187 = (0);
while(true){
if((i__17923__auto___28187 < len__17922__auto___28186)){
args27658.push((arguments[i__17923__auto___28187]));

var G__28188 = (i__17923__auto___28187 + (1));
i__17923__auto___28187 = G__28188;
continue;
} else {
}
break;
}

var G__27662 = args27658.length;
switch (G__27662) {
case 0:
return om_tools.dom.table.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27658.slice((1)),(0)));
return om_tools.dom.table.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.table.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.table,null,null);
});

om_tools.dom.table.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.table,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.table.cljs$lang$applyTo = (function (seq27659){
var G__27660 = cljs.core.first.call(null,seq27659);
var seq27659__$1 = cljs.core.next.call(null,seq27659);
return om_tools.dom.table.cljs$core$IFn$_invoke$arity$variadic(G__27660,seq27659__$1);
});

om_tools.dom.table.cljs$lang$maxFixedArity = (1);

om_tools.dom.tbody = (function om_tools$dom$tbody(var_args){
var args27663 = [];
var len__17922__auto___28190 = arguments.length;
var i__17923__auto___28191 = (0);
while(true){
if((i__17923__auto___28191 < len__17922__auto___28190)){
args27663.push((arguments[i__17923__auto___28191]));

var G__28192 = (i__17923__auto___28191 + (1));
i__17923__auto___28191 = G__28192;
continue;
} else {
}
break;
}

var G__27667 = args27663.length;
switch (G__27667) {
case 0:
return om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27663.slice((1)),(0)));
return om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tbody,null,null);
});

om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.tbody,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.tbody.cljs$lang$applyTo = (function (seq27664){
var G__27665 = cljs.core.first.call(null,seq27664);
var seq27664__$1 = cljs.core.next.call(null,seq27664);
return om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$variadic(G__27665,seq27664__$1);
});

om_tools.dom.tbody.cljs$lang$maxFixedArity = (1);

om_tools.dom.td = (function om_tools$dom$td(var_args){
var args27668 = [];
var len__17922__auto___28194 = arguments.length;
var i__17923__auto___28195 = (0);
while(true){
if((i__17923__auto___28195 < len__17922__auto___28194)){
args27668.push((arguments[i__17923__auto___28195]));

var G__28196 = (i__17923__auto___28195 + (1));
i__17923__auto___28195 = G__28196;
continue;
} else {
}
break;
}

var G__27672 = args27668.length;
switch (G__27672) {
case 0:
return om_tools.dom.td.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27668.slice((1)),(0)));
return om_tools.dom.td.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.td.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.td,null,null);
});

om_tools.dom.td.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.td,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.td.cljs$lang$applyTo = (function (seq27669){
var G__27670 = cljs.core.first.call(null,seq27669);
var seq27669__$1 = cljs.core.next.call(null,seq27669);
return om_tools.dom.td.cljs$core$IFn$_invoke$arity$variadic(G__27670,seq27669__$1);
});

om_tools.dom.td.cljs$lang$maxFixedArity = (1);

om_tools.dom.tfoot = (function om_tools$dom$tfoot(var_args){
var args27673 = [];
var len__17922__auto___28198 = arguments.length;
var i__17923__auto___28199 = (0);
while(true){
if((i__17923__auto___28199 < len__17922__auto___28198)){
args27673.push((arguments[i__17923__auto___28199]));

var G__28200 = (i__17923__auto___28199 + (1));
i__17923__auto___28199 = G__28200;
continue;
} else {
}
break;
}

var G__27677 = args27673.length;
switch (G__27677) {
case 0:
return om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27673.slice((1)),(0)));
return om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tfoot,null,null);
});

om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.tfoot,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.tfoot.cljs$lang$applyTo = (function (seq27674){
var G__27675 = cljs.core.first.call(null,seq27674);
var seq27674__$1 = cljs.core.next.call(null,seq27674);
return om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic(G__27675,seq27674__$1);
});

om_tools.dom.tfoot.cljs$lang$maxFixedArity = (1);

om_tools.dom.th = (function om_tools$dom$th(var_args){
var args27678 = [];
var len__17922__auto___28202 = arguments.length;
var i__17923__auto___28203 = (0);
while(true){
if((i__17923__auto___28203 < len__17922__auto___28202)){
args27678.push((arguments[i__17923__auto___28203]));

var G__28204 = (i__17923__auto___28203 + (1));
i__17923__auto___28203 = G__28204;
continue;
} else {
}
break;
}

var G__27682 = args27678.length;
switch (G__27682) {
case 0:
return om_tools.dom.th.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27678.slice((1)),(0)));
return om_tools.dom.th.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.th.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.th,null,null);
});

om_tools.dom.th.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.th,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.th.cljs$lang$applyTo = (function (seq27679){
var G__27680 = cljs.core.first.call(null,seq27679);
var seq27679__$1 = cljs.core.next.call(null,seq27679);
return om_tools.dom.th.cljs$core$IFn$_invoke$arity$variadic(G__27680,seq27679__$1);
});

om_tools.dom.th.cljs$lang$maxFixedArity = (1);

om_tools.dom.thead = (function om_tools$dom$thead(var_args){
var args27683 = [];
var len__17922__auto___28206 = arguments.length;
var i__17923__auto___28207 = (0);
while(true){
if((i__17923__auto___28207 < len__17922__auto___28206)){
args27683.push((arguments[i__17923__auto___28207]));

var G__28208 = (i__17923__auto___28207 + (1));
i__17923__auto___28207 = G__28208;
continue;
} else {
}
break;
}

var G__27687 = args27683.length;
switch (G__27687) {
case 0:
return om_tools.dom.thead.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27683.slice((1)),(0)));
return om_tools.dom.thead.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.thead.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.thead,null,null);
});

om_tools.dom.thead.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.thead,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.thead.cljs$lang$applyTo = (function (seq27684){
var G__27685 = cljs.core.first.call(null,seq27684);
var seq27684__$1 = cljs.core.next.call(null,seq27684);
return om_tools.dom.thead.cljs$core$IFn$_invoke$arity$variadic(G__27685,seq27684__$1);
});

om_tools.dom.thead.cljs$lang$maxFixedArity = (1);

om_tools.dom.time = (function om_tools$dom$time(var_args){
var args27688 = [];
var len__17922__auto___28210 = arguments.length;
var i__17923__auto___28211 = (0);
while(true){
if((i__17923__auto___28211 < len__17922__auto___28210)){
args27688.push((arguments[i__17923__auto___28211]));

var G__28212 = (i__17923__auto___28211 + (1));
i__17923__auto___28211 = G__28212;
continue;
} else {
}
break;
}

var G__27692 = args27688.length;
switch (G__27692) {
case 0:
return om_tools.dom.time.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27688.slice((1)),(0)));
return om_tools.dom.time.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.time.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.time,null,null);
});

om_tools.dom.time.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.time,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.time.cljs$lang$applyTo = (function (seq27689){
var G__27690 = cljs.core.first.call(null,seq27689);
var seq27689__$1 = cljs.core.next.call(null,seq27689);
return om_tools.dom.time.cljs$core$IFn$_invoke$arity$variadic(G__27690,seq27689__$1);
});

om_tools.dom.time.cljs$lang$maxFixedArity = (1);

om_tools.dom.title = (function om_tools$dom$title(var_args){
var args27693 = [];
var len__17922__auto___28214 = arguments.length;
var i__17923__auto___28215 = (0);
while(true){
if((i__17923__auto___28215 < len__17922__auto___28214)){
args27693.push((arguments[i__17923__auto___28215]));

var G__28216 = (i__17923__auto___28215 + (1));
i__17923__auto___28215 = G__28216;
continue;
} else {
}
break;
}

var G__27697 = args27693.length;
switch (G__27697) {
case 0:
return om_tools.dom.title.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27693.slice((1)),(0)));
return om_tools.dom.title.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.title.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.title,null,null);
});

om_tools.dom.title.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.title,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.title.cljs$lang$applyTo = (function (seq27694){
var G__27695 = cljs.core.first.call(null,seq27694);
var seq27694__$1 = cljs.core.next.call(null,seq27694);
return om_tools.dom.title.cljs$core$IFn$_invoke$arity$variadic(G__27695,seq27694__$1);
});

om_tools.dom.title.cljs$lang$maxFixedArity = (1);

om_tools.dom.tr = (function om_tools$dom$tr(var_args){
var args27698 = [];
var len__17922__auto___28218 = arguments.length;
var i__17923__auto___28219 = (0);
while(true){
if((i__17923__auto___28219 < len__17922__auto___28218)){
args27698.push((arguments[i__17923__auto___28219]));

var G__28220 = (i__17923__auto___28219 + (1));
i__17923__auto___28219 = G__28220;
continue;
} else {
}
break;
}

var G__27702 = args27698.length;
switch (G__27702) {
case 0:
return om_tools.dom.tr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27698.slice((1)),(0)));
return om_tools.dom.tr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.tr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tr,null,null);
});

om_tools.dom.tr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.tr,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.tr.cljs$lang$applyTo = (function (seq27699){
var G__27700 = cljs.core.first.call(null,seq27699);
var seq27699__$1 = cljs.core.next.call(null,seq27699);
return om_tools.dom.tr.cljs$core$IFn$_invoke$arity$variadic(G__27700,seq27699__$1);
});

om_tools.dom.tr.cljs$lang$maxFixedArity = (1);

om_tools.dom.track = (function om_tools$dom$track(var_args){
var args27703 = [];
var len__17922__auto___28222 = arguments.length;
var i__17923__auto___28223 = (0);
while(true){
if((i__17923__auto___28223 < len__17922__auto___28222)){
args27703.push((arguments[i__17923__auto___28223]));

var G__28224 = (i__17923__auto___28223 + (1));
i__17923__auto___28223 = G__28224;
continue;
} else {
}
break;
}

var G__27707 = args27703.length;
switch (G__27707) {
case 0:
return om_tools.dom.track.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27703.slice((1)),(0)));
return om_tools.dom.track.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.track.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.track,null,null);
});

om_tools.dom.track.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.track,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.track.cljs$lang$applyTo = (function (seq27704){
var G__27705 = cljs.core.first.call(null,seq27704);
var seq27704__$1 = cljs.core.next.call(null,seq27704);
return om_tools.dom.track.cljs$core$IFn$_invoke$arity$variadic(G__27705,seq27704__$1);
});

om_tools.dom.track.cljs$lang$maxFixedArity = (1);

om_tools.dom.u = (function om_tools$dom$u(var_args){
var args27708 = [];
var len__17922__auto___28226 = arguments.length;
var i__17923__auto___28227 = (0);
while(true){
if((i__17923__auto___28227 < len__17922__auto___28226)){
args27708.push((arguments[i__17923__auto___28227]));

var G__28228 = (i__17923__auto___28227 + (1));
i__17923__auto___28227 = G__28228;
continue;
} else {
}
break;
}

var G__27712 = args27708.length;
switch (G__27712) {
case 0:
return om_tools.dom.u.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27708.slice((1)),(0)));
return om_tools.dom.u.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.u.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.u,null,null);
});

om_tools.dom.u.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.u,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.u.cljs$lang$applyTo = (function (seq27709){
var G__27710 = cljs.core.first.call(null,seq27709);
var seq27709__$1 = cljs.core.next.call(null,seq27709);
return om_tools.dom.u.cljs$core$IFn$_invoke$arity$variadic(G__27710,seq27709__$1);
});

om_tools.dom.u.cljs$lang$maxFixedArity = (1);

om_tools.dom.ul = (function om_tools$dom$ul(var_args){
var args27713 = [];
var len__17922__auto___28230 = arguments.length;
var i__17923__auto___28231 = (0);
while(true){
if((i__17923__auto___28231 < len__17922__auto___28230)){
args27713.push((arguments[i__17923__auto___28231]));

var G__28232 = (i__17923__auto___28231 + (1));
i__17923__auto___28231 = G__28232;
continue;
} else {
}
break;
}

var G__27717 = args27713.length;
switch (G__27717) {
case 0:
return om_tools.dom.ul.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27713.slice((1)),(0)));
return om_tools.dom.ul.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.ul.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ul,null,null);
});

om_tools.dom.ul.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.ul,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.ul.cljs$lang$applyTo = (function (seq27714){
var G__27715 = cljs.core.first.call(null,seq27714);
var seq27714__$1 = cljs.core.next.call(null,seq27714);
return om_tools.dom.ul.cljs$core$IFn$_invoke$arity$variadic(G__27715,seq27714__$1);
});

om_tools.dom.ul.cljs$lang$maxFixedArity = (1);

om_tools.dom.var$ = (function om_tools$dom$var(var_args){
var args27718 = [];
var len__17922__auto___28234 = arguments.length;
var i__17923__auto___28235 = (0);
while(true){
if((i__17923__auto___28235 < len__17922__auto___28234)){
args27718.push((arguments[i__17923__auto___28235]));

var G__28236 = (i__17923__auto___28235 + (1));
i__17923__auto___28235 = G__28236;
continue;
} else {
}
break;
}

var G__27722 = args27718.length;
switch (G__27722) {
case 0:
return om_tools.dom.var$.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27718.slice((1)),(0)));
return om_tools.dom.var$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.var$.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.var$,null,null);
});

om_tools.dom.var$.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.var$,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.var$.cljs$lang$applyTo = (function (seq27719){
var G__27720 = cljs.core.first.call(null,seq27719);
var seq27719__$1 = cljs.core.next.call(null,seq27719);
return om_tools.dom.var$.cljs$core$IFn$_invoke$arity$variadic(G__27720,seq27719__$1);
});

om_tools.dom.var$.cljs$lang$maxFixedArity = (1);

om_tools.dom.video = (function om_tools$dom$video(var_args){
var args27723 = [];
var len__17922__auto___28238 = arguments.length;
var i__17923__auto___28239 = (0);
while(true){
if((i__17923__auto___28239 < len__17922__auto___28238)){
args27723.push((arguments[i__17923__auto___28239]));

var G__28240 = (i__17923__auto___28239 + (1));
i__17923__auto___28239 = G__28240;
continue;
} else {
}
break;
}

var G__27727 = args27723.length;
switch (G__27727) {
case 0:
return om_tools.dom.video.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27723.slice((1)),(0)));
return om_tools.dom.video.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.video.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.video,null,null);
});

om_tools.dom.video.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.video,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.video.cljs$lang$applyTo = (function (seq27724){
var G__27725 = cljs.core.first.call(null,seq27724);
var seq27724__$1 = cljs.core.next.call(null,seq27724);
return om_tools.dom.video.cljs$core$IFn$_invoke$arity$variadic(G__27725,seq27724__$1);
});

om_tools.dom.video.cljs$lang$maxFixedArity = (1);

om_tools.dom.wbr = (function om_tools$dom$wbr(var_args){
var args27728 = [];
var len__17922__auto___28242 = arguments.length;
var i__17923__auto___28243 = (0);
while(true){
if((i__17923__auto___28243 < len__17922__auto___28242)){
args27728.push((arguments[i__17923__auto___28243]));

var G__28244 = (i__17923__auto___28243 + (1));
i__17923__auto___28243 = G__28244;
continue;
} else {
}
break;
}

var G__27732 = args27728.length;
switch (G__27732) {
case 0:
return om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27728.slice((1)),(0)));
return om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.wbr,null,null);
});

om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.wbr,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.wbr.cljs$lang$applyTo = (function (seq27729){
var G__27730 = cljs.core.first.call(null,seq27729);
var seq27729__$1 = cljs.core.next.call(null,seq27729);
return om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$variadic(G__27730,seq27729__$1);
});

om_tools.dom.wbr.cljs$lang$maxFixedArity = (1);

om_tools.dom.circle = (function om_tools$dom$circle(var_args){
var args27733 = [];
var len__17922__auto___28246 = arguments.length;
var i__17923__auto___28247 = (0);
while(true){
if((i__17923__auto___28247 < len__17922__auto___28246)){
args27733.push((arguments[i__17923__auto___28247]));

var G__28248 = (i__17923__auto___28247 + (1));
i__17923__auto___28247 = G__28248;
continue;
} else {
}
break;
}

var G__27737 = args27733.length;
switch (G__27737) {
case 0:
return om_tools.dom.circle.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27733.slice((1)),(0)));
return om_tools.dom.circle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.circle.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.circle,null,null);
});

om_tools.dom.circle.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.circle,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.circle.cljs$lang$applyTo = (function (seq27734){
var G__27735 = cljs.core.first.call(null,seq27734);
var seq27734__$1 = cljs.core.next.call(null,seq27734);
return om_tools.dom.circle.cljs$core$IFn$_invoke$arity$variadic(G__27735,seq27734__$1);
});

om_tools.dom.circle.cljs$lang$maxFixedArity = (1);

om_tools.dom.ellipse = (function om_tools$dom$ellipse(var_args){
var args27738 = [];
var len__17922__auto___28250 = arguments.length;
var i__17923__auto___28251 = (0);
while(true){
if((i__17923__auto___28251 < len__17922__auto___28250)){
args27738.push((arguments[i__17923__auto___28251]));

var G__28252 = (i__17923__auto___28251 + (1));
i__17923__auto___28251 = G__28252;
continue;
} else {
}
break;
}

var G__27742 = args27738.length;
switch (G__27742) {
case 0:
return om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27738.slice((1)),(0)));
return om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ellipse,null,null);
});

om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.ellipse,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.ellipse.cljs$lang$applyTo = (function (seq27739){
var G__27740 = cljs.core.first.call(null,seq27739);
var seq27739__$1 = cljs.core.next.call(null,seq27739);
return om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic(G__27740,seq27739__$1);
});

om_tools.dom.ellipse.cljs$lang$maxFixedArity = (1);

om_tools.dom.g = (function om_tools$dom$g(var_args){
var args27743 = [];
var len__17922__auto___28254 = arguments.length;
var i__17923__auto___28255 = (0);
while(true){
if((i__17923__auto___28255 < len__17922__auto___28254)){
args27743.push((arguments[i__17923__auto___28255]));

var G__28256 = (i__17923__auto___28255 + (1));
i__17923__auto___28255 = G__28256;
continue;
} else {
}
break;
}

var G__27747 = args27743.length;
switch (G__27747) {
case 0:
return om_tools.dom.g.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27743.slice((1)),(0)));
return om_tools.dom.g.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.g.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.g,null,null);
});

om_tools.dom.g.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.g,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.g.cljs$lang$applyTo = (function (seq27744){
var G__27745 = cljs.core.first.call(null,seq27744);
var seq27744__$1 = cljs.core.next.call(null,seq27744);
return om_tools.dom.g.cljs$core$IFn$_invoke$arity$variadic(G__27745,seq27744__$1);
});

om_tools.dom.g.cljs$lang$maxFixedArity = (1);

om_tools.dom.line = (function om_tools$dom$line(var_args){
var args27748 = [];
var len__17922__auto___28258 = arguments.length;
var i__17923__auto___28259 = (0);
while(true){
if((i__17923__auto___28259 < len__17922__auto___28258)){
args27748.push((arguments[i__17923__auto___28259]));

var G__28260 = (i__17923__auto___28259 + (1));
i__17923__auto___28259 = G__28260;
continue;
} else {
}
break;
}

var G__27752 = args27748.length;
switch (G__27752) {
case 0:
return om_tools.dom.line.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27748.slice((1)),(0)));
return om_tools.dom.line.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.line.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.line,null,null);
});

om_tools.dom.line.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.line,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.line.cljs$lang$applyTo = (function (seq27749){
var G__27750 = cljs.core.first.call(null,seq27749);
var seq27749__$1 = cljs.core.next.call(null,seq27749);
return om_tools.dom.line.cljs$core$IFn$_invoke$arity$variadic(G__27750,seq27749__$1);
});

om_tools.dom.line.cljs$lang$maxFixedArity = (1);

om_tools.dom.path = (function om_tools$dom$path(var_args){
var args27753 = [];
var len__17922__auto___28262 = arguments.length;
var i__17923__auto___28263 = (0);
while(true){
if((i__17923__auto___28263 < len__17922__auto___28262)){
args27753.push((arguments[i__17923__auto___28263]));

var G__28264 = (i__17923__auto___28263 + (1));
i__17923__auto___28263 = G__28264;
continue;
} else {
}
break;
}

var G__27757 = args27753.length;
switch (G__27757) {
case 0:
return om_tools.dom.path.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27753.slice((1)),(0)));
return om_tools.dom.path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.path.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.path,null,null);
});

om_tools.dom.path.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.path,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.path.cljs$lang$applyTo = (function (seq27754){
var G__27755 = cljs.core.first.call(null,seq27754);
var seq27754__$1 = cljs.core.next.call(null,seq27754);
return om_tools.dom.path.cljs$core$IFn$_invoke$arity$variadic(G__27755,seq27754__$1);
});

om_tools.dom.path.cljs$lang$maxFixedArity = (1);

om_tools.dom.polyline = (function om_tools$dom$polyline(var_args){
var args27758 = [];
var len__17922__auto___28266 = arguments.length;
var i__17923__auto___28267 = (0);
while(true){
if((i__17923__auto___28267 < len__17922__auto___28266)){
args27758.push((arguments[i__17923__auto___28267]));

var G__28268 = (i__17923__auto___28267 + (1));
i__17923__auto___28267 = G__28268;
continue;
} else {
}
break;
}

var G__27762 = args27758.length;
switch (G__27762) {
case 0:
return om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27758.slice((1)),(0)));
return om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.polyline,null,null);
});

om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.polyline,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.polyline.cljs$lang$applyTo = (function (seq27759){
var G__27760 = cljs.core.first.call(null,seq27759);
var seq27759__$1 = cljs.core.next.call(null,seq27759);
return om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$variadic(G__27760,seq27759__$1);
});

om_tools.dom.polyline.cljs$lang$maxFixedArity = (1);

om_tools.dom.rect = (function om_tools$dom$rect(var_args){
var args27763 = [];
var len__17922__auto___28270 = arguments.length;
var i__17923__auto___28271 = (0);
while(true){
if((i__17923__auto___28271 < len__17922__auto___28270)){
args27763.push((arguments[i__17923__auto___28271]));

var G__28272 = (i__17923__auto___28271 + (1));
i__17923__auto___28271 = G__28272;
continue;
} else {
}
break;
}

var G__27767 = args27763.length;
switch (G__27767) {
case 0:
return om_tools.dom.rect.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27763.slice((1)),(0)));
return om_tools.dom.rect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.rect.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.rect,null,null);
});

om_tools.dom.rect.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.rect,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.rect.cljs$lang$applyTo = (function (seq27764){
var G__27765 = cljs.core.first.call(null,seq27764);
var seq27764__$1 = cljs.core.next.call(null,seq27764);
return om_tools.dom.rect.cljs$core$IFn$_invoke$arity$variadic(G__27765,seq27764__$1);
});

om_tools.dom.rect.cljs$lang$maxFixedArity = (1);

om_tools.dom.svg = (function om_tools$dom$svg(var_args){
var args27768 = [];
var len__17922__auto___28274 = arguments.length;
var i__17923__auto___28275 = (0);
while(true){
if((i__17923__auto___28275 < len__17922__auto___28274)){
args27768.push((arguments[i__17923__auto___28275]));

var G__28276 = (i__17923__auto___28275 + (1));
i__17923__auto___28275 = G__28276;
continue;
} else {
}
break;
}

var G__27772 = args27768.length;
switch (G__27772) {
case 0:
return om_tools.dom.svg.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27768.slice((1)),(0)));
return om_tools.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.svg.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.svg,null,null);
});

om_tools.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.svg,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.svg.cljs$lang$applyTo = (function (seq27769){
var G__27770 = cljs.core.first.call(null,seq27769);
var seq27769__$1 = cljs.core.next.call(null,seq27769);
return om_tools.dom.svg.cljs$core$IFn$_invoke$arity$variadic(G__27770,seq27769__$1);
});

om_tools.dom.svg.cljs$lang$maxFixedArity = (1);

om_tools.dom.text = (function om_tools$dom$text(var_args){
var args27773 = [];
var len__17922__auto___28278 = arguments.length;
var i__17923__auto___28279 = (0);
while(true){
if((i__17923__auto___28279 < len__17922__auto___28278)){
args27773.push((arguments[i__17923__auto___28279]));

var G__28280 = (i__17923__auto___28279 + (1));
i__17923__auto___28279 = G__28280;
continue;
} else {
}
break;
}

var G__27777 = args27773.length;
switch (G__27777) {
case 0:
return om_tools.dom.text.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27773.slice((1)),(0)));
return om_tools.dom.text.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.text.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.text,null,null);
});

om_tools.dom.text.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.text,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.text.cljs$lang$applyTo = (function (seq27774){
var G__27775 = cljs.core.first.call(null,seq27774);
var seq27774__$1 = cljs.core.next.call(null,seq27774);
return om_tools.dom.text.cljs$core$IFn$_invoke$arity$variadic(G__27775,seq27774__$1);
});

om_tools.dom.text.cljs$lang$maxFixedArity = (1);

om_tools.dom.defs = (function om_tools$dom$defs(var_args){
var args27778 = [];
var len__17922__auto___28282 = arguments.length;
var i__17923__auto___28283 = (0);
while(true){
if((i__17923__auto___28283 < len__17922__auto___28282)){
args27778.push((arguments[i__17923__auto___28283]));

var G__28284 = (i__17923__auto___28283 + (1));
i__17923__auto___28283 = G__28284;
continue;
} else {
}
break;
}

var G__27782 = args27778.length;
switch (G__27782) {
case 0:
return om_tools.dom.defs.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27778.slice((1)),(0)));
return om_tools.dom.defs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.defs.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.defs,null,null);
});

om_tools.dom.defs.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.defs,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.defs.cljs$lang$applyTo = (function (seq27779){
var G__27780 = cljs.core.first.call(null,seq27779);
var seq27779__$1 = cljs.core.next.call(null,seq27779);
return om_tools.dom.defs.cljs$core$IFn$_invoke$arity$variadic(G__27780,seq27779__$1);
});

om_tools.dom.defs.cljs$lang$maxFixedArity = (1);

om_tools.dom.linearGradient = (function om_tools$dom$linearGradient(var_args){
var args27783 = [];
var len__17922__auto___28286 = arguments.length;
var i__17923__auto___28287 = (0);
while(true){
if((i__17923__auto___28287 < len__17922__auto___28286)){
args27783.push((arguments[i__17923__auto___28287]));

var G__28288 = (i__17923__auto___28287 + (1));
i__17923__auto___28287 = G__28288;
continue;
} else {
}
break;
}

var G__27787 = args27783.length;
switch (G__27787) {
case 0:
return om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27783.slice((1)),(0)));
return om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.linearGradient,null,null);
});

om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.linearGradient,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.linearGradient.cljs$lang$applyTo = (function (seq27784){
var G__27785 = cljs.core.first.call(null,seq27784);
var seq27784__$1 = cljs.core.next.call(null,seq27784);
return om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic(G__27785,seq27784__$1);
});

om_tools.dom.linearGradient.cljs$lang$maxFixedArity = (1);

om_tools.dom.polygon = (function om_tools$dom$polygon(var_args){
var args27788 = [];
var len__17922__auto___28290 = arguments.length;
var i__17923__auto___28291 = (0);
while(true){
if((i__17923__auto___28291 < len__17922__auto___28290)){
args27788.push((arguments[i__17923__auto___28291]));

var G__28292 = (i__17923__auto___28291 + (1));
i__17923__auto___28291 = G__28292;
continue;
} else {
}
break;
}

var G__27792 = args27788.length;
switch (G__27792) {
case 0:
return om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27788.slice((1)),(0)));
return om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.polygon,null,null);
});

om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.polygon,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.polygon.cljs$lang$applyTo = (function (seq27789){
var G__27790 = cljs.core.first.call(null,seq27789);
var seq27789__$1 = cljs.core.next.call(null,seq27789);
return om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$variadic(G__27790,seq27789__$1);
});

om_tools.dom.polygon.cljs$lang$maxFixedArity = (1);

om_tools.dom.radialGradient = (function om_tools$dom$radialGradient(var_args){
var args27793 = [];
var len__17922__auto___28294 = arguments.length;
var i__17923__auto___28295 = (0);
while(true){
if((i__17923__auto___28295 < len__17922__auto___28294)){
args27793.push((arguments[i__17923__auto___28295]));

var G__28296 = (i__17923__auto___28295 + (1));
i__17923__auto___28295 = G__28296;
continue;
} else {
}
break;
}

var G__27797 = args27793.length;
switch (G__27797) {
case 0:
return om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27793.slice((1)),(0)));
return om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.radialGradient,null,null);
});

om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.radialGradient,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.radialGradient.cljs$lang$applyTo = (function (seq27794){
var G__27795 = cljs.core.first.call(null,seq27794);
var seq27794__$1 = cljs.core.next.call(null,seq27794);
return om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic(G__27795,seq27794__$1);
});

om_tools.dom.radialGradient.cljs$lang$maxFixedArity = (1);

om_tools.dom.stop = (function om_tools$dom$stop(var_args){
var args27798 = [];
var len__17922__auto___28298 = arguments.length;
var i__17923__auto___28299 = (0);
while(true){
if((i__17923__auto___28299 < len__17922__auto___28298)){
args27798.push((arguments[i__17923__auto___28299]));

var G__28300 = (i__17923__auto___28299 + (1));
i__17923__auto___28299 = G__28300;
continue;
} else {
}
break;
}

var G__27802 = args27798.length;
switch (G__27802) {
case 0:
return om_tools.dom.stop.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27798.slice((1)),(0)));
return om_tools.dom.stop.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.stop.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.stop,null,null);
});

om_tools.dom.stop.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.stop,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.stop.cljs$lang$applyTo = (function (seq27799){
var G__27800 = cljs.core.first.call(null,seq27799);
var seq27799__$1 = cljs.core.next.call(null,seq27799);
return om_tools.dom.stop.cljs$core$IFn$_invoke$arity$variadic(G__27800,seq27799__$1);
});

om_tools.dom.stop.cljs$lang$maxFixedArity = (1);

om_tools.dom.tspan = (function om_tools$dom$tspan(var_args){
var args27803 = [];
var len__17922__auto___28302 = arguments.length;
var i__17923__auto___28303 = (0);
while(true){
if((i__17923__auto___28303 < len__17922__auto___28302)){
args27803.push((arguments[i__17923__auto___28303]));

var G__28304 = (i__17923__auto___28303 + (1));
i__17923__auto___28303 = G__28304;
continue;
} else {
}
break;
}

var G__27807 = args27803.length;
switch (G__27807) {
case 0:
return om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27803.slice((1)),(0)));
return om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tspan,null,null);
});

om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,React.DOM.tspan,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.tspan.cljs$lang$applyTo = (function (seq27804){
var G__27805 = cljs.core.first.call(null,seq27804);
var seq27804__$1 = cljs.core.next.call(null,seq27804);
return om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$variadic(G__27805,seq27804__$1);
});

om_tools.dom.tspan.cljs$lang$maxFixedArity = (1);

om_tools.dom.input = (function om_tools$dom$input(var_args){
var args27808 = [];
var len__17922__auto___28306 = arguments.length;
var i__17923__auto___28307 = (0);
while(true){
if((i__17923__auto___28307 < len__17922__auto___28306)){
args27808.push((arguments[i__17923__auto___28307]));

var G__28308 = (i__17923__auto___28307 + (1));
i__17923__auto___28307 = G__28308;
continue;
} else {
}
break;
}

var G__27812 = args27808.length;
switch (G__27812) {
case 0:
return om_tools.dom.input.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27808.slice((1)),(0)));
return om_tools.dom.input.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.input.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,om.dom.input,null,null);
});

om_tools.dom.input.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,om.dom.input,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.input.cljs$lang$applyTo = (function (seq27809){
var G__27810 = cljs.core.first.call(null,seq27809);
var seq27809__$1 = cljs.core.next.call(null,seq27809);
return om_tools.dom.input.cljs$core$IFn$_invoke$arity$variadic(G__27810,seq27809__$1);
});

om_tools.dom.input.cljs$lang$maxFixedArity = (1);

om_tools.dom.textarea = (function om_tools$dom$textarea(var_args){
var args27813 = [];
var len__17922__auto___28310 = arguments.length;
var i__17923__auto___28311 = (0);
while(true){
if((i__17923__auto___28311 < len__17922__auto___28310)){
args27813.push((arguments[i__17923__auto___28311]));

var G__28312 = (i__17923__auto___28311 + (1));
i__17923__auto___28311 = G__28312;
continue;
} else {
}
break;
}

var G__27817 = args27813.length;
switch (G__27817) {
case 0:
return om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27813.slice((1)),(0)));
return om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,om.dom.textarea,null,null);
});

om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,om.dom.textarea,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.textarea.cljs$lang$applyTo = (function (seq27814){
var G__27815 = cljs.core.first.call(null,seq27814);
var seq27814__$1 = cljs.core.next.call(null,seq27814);
return om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$variadic(G__27815,seq27814__$1);
});

om_tools.dom.textarea.cljs$lang$maxFixedArity = (1);

om_tools.dom.option = (function om_tools$dom$option(var_args){
var args27353 = [];
var len__17922__auto___28314 = arguments.length;
var i__17923__auto___28315 = (0);
while(true){
if((i__17923__auto___28315 < len__17922__auto___28314)){
args27353.push((arguments[i__17923__auto___28315]));

var G__28316 = (i__17923__auto___28315 + (1));
i__17923__auto___28315 = G__28316;
continue;
} else {
}
break;
}

var G__27357 = args27353.length;
switch (G__27357) {
case 0:
return om_tools.dom.option.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17941__auto__ = (new cljs.core.IndexedSeq(args27353.slice((1)),(0)));
return om_tools.dom.option.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17941__auto__);

}
});

om_tools.dom.option.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,om.dom.option,null,null);
});

om_tools.dom.option.cljs$core$IFn$_invoke$arity$variadic = (function (opts__27169__auto__,children__27170__auto__){
return om_tools.dom.element.call(null,om.dom.option,opts__27169__auto__,children__27170__auto__);
});

om_tools.dom.option.cljs$lang$applyTo = (function (seq27354){
var G__27355 = cljs.core.first.call(null,seq27354);
var seq27354__$1 = cljs.core.next.call(null,seq27354);
return om_tools.dom.option.cljs$core$IFn$_invoke$arity$variadic(G__27355,seq27354__$1);
});

om_tools.dom.option.cljs$lang$maxFixedArity = (1);
om_tools.dom.class_set = (function om_tools$dom$class_set(m){

var temp__4657__auto__ = cljs.core.seq.call(null,cljs.core.distinct.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.keys.call(null,cljs.core.filter.call(null,cljs.core.val,m)))));
if(temp__4657__auto__){
var ks = temp__4657__auto__;
return clojure.string.join.call(null," ",ks);
} else {
return null;
}
});

//# sourceMappingURL=dom.js.map