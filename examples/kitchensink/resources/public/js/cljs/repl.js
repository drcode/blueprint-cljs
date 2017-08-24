// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__35220){
var map__35245 = p__35220;
var map__35245__$1 = ((((!((map__35245 == null)))?((((map__35245.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35245.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35245):map__35245);
var m = map__35245__$1;
var n = cljs.core.get.call(null,map__35245__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__35245__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__6728__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__6728__auto__)){
var ns = temp__6728__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35247_35269 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35248_35270 = null;
var count__35249_35271 = (0);
var i__35250_35272 = (0);
while(true){
if((i__35250_35272 < count__35249_35271)){
var f_35273 = cljs.core._nth.call(null,chunk__35248_35270,i__35250_35272);
cljs.core.println.call(null,"  ",f_35273);

var G__35274 = seq__35247_35269;
var G__35275 = chunk__35248_35270;
var G__35276 = count__35249_35271;
var G__35277 = (i__35250_35272 + (1));
seq__35247_35269 = G__35274;
chunk__35248_35270 = G__35275;
count__35249_35271 = G__35276;
i__35250_35272 = G__35277;
continue;
} else {
var temp__6728__auto___35278 = cljs.core.seq.call(null,seq__35247_35269);
if(temp__6728__auto___35278){
var seq__35247_35279__$1 = temp__6728__auto___35278;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35247_35279__$1)){
var c__31124__auto___35280 = cljs.core.chunk_first.call(null,seq__35247_35279__$1);
var G__35281 = cljs.core.chunk_rest.call(null,seq__35247_35279__$1);
var G__35282 = c__31124__auto___35280;
var G__35283 = cljs.core.count.call(null,c__31124__auto___35280);
var G__35284 = (0);
seq__35247_35269 = G__35281;
chunk__35248_35270 = G__35282;
count__35249_35271 = G__35283;
i__35250_35272 = G__35284;
continue;
} else {
var f_35285 = cljs.core.first.call(null,seq__35247_35279__$1);
cljs.core.println.call(null,"  ",f_35285);

var G__35286 = cljs.core.next.call(null,seq__35247_35279__$1);
var G__35287 = null;
var G__35288 = (0);
var G__35289 = (0);
seq__35247_35269 = G__35286;
chunk__35248_35270 = G__35287;
count__35249_35271 = G__35288;
i__35250_35272 = G__35289;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35290 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__30221__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__30221__auto__)){
return or__30221__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_35290);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_35290)))?cljs.core.second.call(null,arglists_35290):arglists_35290));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35251_35291 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35252_35292 = null;
var count__35253_35293 = (0);
var i__35254_35294 = (0);
while(true){
if((i__35254_35294 < count__35253_35293)){
var vec__35255_35295 = cljs.core._nth.call(null,chunk__35252_35292,i__35254_35294);
var name_35296 = cljs.core.nth.call(null,vec__35255_35295,(0),null);
var map__35258_35297 = cljs.core.nth.call(null,vec__35255_35295,(1),null);
var map__35258_35298__$1 = ((((!((map__35258_35297 == null)))?((((map__35258_35297.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35258_35297.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35258_35297):map__35258_35297);
var doc_35299 = cljs.core.get.call(null,map__35258_35298__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35300 = cljs.core.get.call(null,map__35258_35298__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_35296);

cljs.core.println.call(null," ",arglists_35300);

if(cljs.core.truth_(doc_35299)){
cljs.core.println.call(null," ",doc_35299);
} else {
}

var G__35301 = seq__35251_35291;
var G__35302 = chunk__35252_35292;
var G__35303 = count__35253_35293;
var G__35304 = (i__35254_35294 + (1));
seq__35251_35291 = G__35301;
chunk__35252_35292 = G__35302;
count__35253_35293 = G__35303;
i__35254_35294 = G__35304;
continue;
} else {
var temp__6728__auto___35305 = cljs.core.seq.call(null,seq__35251_35291);
if(temp__6728__auto___35305){
var seq__35251_35306__$1 = temp__6728__auto___35305;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35251_35306__$1)){
var c__31124__auto___35307 = cljs.core.chunk_first.call(null,seq__35251_35306__$1);
var G__35308 = cljs.core.chunk_rest.call(null,seq__35251_35306__$1);
var G__35309 = c__31124__auto___35307;
var G__35310 = cljs.core.count.call(null,c__31124__auto___35307);
var G__35311 = (0);
seq__35251_35291 = G__35308;
chunk__35252_35292 = G__35309;
count__35253_35293 = G__35310;
i__35254_35294 = G__35311;
continue;
} else {
var vec__35260_35312 = cljs.core.first.call(null,seq__35251_35306__$1);
var name_35313 = cljs.core.nth.call(null,vec__35260_35312,(0),null);
var map__35263_35314 = cljs.core.nth.call(null,vec__35260_35312,(1),null);
var map__35263_35315__$1 = ((((!((map__35263_35314 == null)))?((((map__35263_35314.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35263_35314.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35263_35314):map__35263_35314);
var doc_35316 = cljs.core.get.call(null,map__35263_35315__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35317 = cljs.core.get.call(null,map__35263_35315__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_35313);

cljs.core.println.call(null," ",arglists_35317);

if(cljs.core.truth_(doc_35316)){
cljs.core.println.call(null," ",doc_35316);
} else {
}

var G__35318 = cljs.core.next.call(null,seq__35251_35306__$1);
var G__35319 = null;
var G__35320 = (0);
var G__35321 = (0);
seq__35251_35291 = G__35318;
chunk__35252_35292 = G__35319;
count__35253_35293 = G__35320;
i__35254_35294 = G__35321;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__6728__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__6728__auto__)){
var fnspec = temp__6728__auto__;
cljs.core.print.call(null,"Spec");

var seq__35265 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__35266 = null;
var count__35267 = (0);
var i__35268 = (0);
while(true){
if((i__35268 < count__35267)){
var role = cljs.core._nth.call(null,chunk__35266,i__35268);
var temp__6728__auto___35322__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6728__auto___35322__$1)){
var spec_35323 = temp__6728__auto___35322__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_35323));
} else {
}

var G__35324 = seq__35265;
var G__35325 = chunk__35266;
var G__35326 = count__35267;
var G__35327 = (i__35268 + (1));
seq__35265 = G__35324;
chunk__35266 = G__35325;
count__35267 = G__35326;
i__35268 = G__35327;
continue;
} else {
var temp__6728__auto____$1 = cljs.core.seq.call(null,seq__35265);
if(temp__6728__auto____$1){
var seq__35265__$1 = temp__6728__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35265__$1)){
var c__31124__auto__ = cljs.core.chunk_first.call(null,seq__35265__$1);
var G__35328 = cljs.core.chunk_rest.call(null,seq__35265__$1);
var G__35329 = c__31124__auto__;
var G__35330 = cljs.core.count.call(null,c__31124__auto__);
var G__35331 = (0);
seq__35265 = G__35328;
chunk__35266 = G__35329;
count__35267 = G__35330;
i__35268 = G__35331;
continue;
} else {
var role = cljs.core.first.call(null,seq__35265__$1);
var temp__6728__auto___35332__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6728__auto___35332__$2)){
var spec_35333 = temp__6728__auto___35332__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_35333));
} else {
}

var G__35334 = cljs.core.next.call(null,seq__35265__$1);
var G__35335 = null;
var G__35336 = (0);
var G__35337 = (0);
seq__35265 = G__35334;
chunk__35266 = G__35335;
count__35267 = G__35336;
i__35268 = G__35337;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map