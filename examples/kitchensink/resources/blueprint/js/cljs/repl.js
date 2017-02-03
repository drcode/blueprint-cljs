// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__38476){
var map__38501 = p__38476;
var map__38501__$1 = ((((!((map__38501 == null)))?((((map__38501.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38501.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38501):map__38501);
var m = map__38501__$1;
var n = cljs.core.get.call(null,map__38501__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__38501__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__38503_38525 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38504_38526 = null;
var count__38505_38527 = (0);
var i__38506_38528 = (0);
while(true){
if((i__38506_38528 < count__38505_38527)){
var f_38529 = cljs.core._nth.call(null,chunk__38504_38526,i__38506_38528);
cljs.core.println.call(null,"  ",f_38529);

var G__38530 = seq__38503_38525;
var G__38531 = chunk__38504_38526;
var G__38532 = count__38505_38527;
var G__38533 = (i__38506_38528 + (1));
seq__38503_38525 = G__38530;
chunk__38504_38526 = G__38531;
count__38505_38527 = G__38532;
i__38506_38528 = G__38533;
continue;
} else {
var temp__6728__auto___38534 = cljs.core.seq.call(null,seq__38503_38525);
if(temp__6728__auto___38534){
var seq__38503_38535__$1 = temp__6728__auto___38534;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38503_38535__$1)){
var c__21000__auto___38536 = cljs.core.chunk_first.call(null,seq__38503_38535__$1);
var G__38537 = cljs.core.chunk_rest.call(null,seq__38503_38535__$1);
var G__38538 = c__21000__auto___38536;
var G__38539 = cljs.core.count.call(null,c__21000__auto___38536);
var G__38540 = (0);
seq__38503_38525 = G__38537;
chunk__38504_38526 = G__38538;
count__38505_38527 = G__38539;
i__38506_38528 = G__38540;
continue;
} else {
var f_38541 = cljs.core.first.call(null,seq__38503_38535__$1);
cljs.core.println.call(null,"  ",f_38541);

var G__38542 = cljs.core.next.call(null,seq__38503_38535__$1);
var G__38543 = null;
var G__38544 = (0);
var G__38545 = (0);
seq__38503_38525 = G__38542;
chunk__38504_38526 = G__38543;
count__38505_38527 = G__38544;
i__38506_38528 = G__38545;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_38546 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__20097__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__20097__auto__)){
return or__20097__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_38546);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_38546)))?cljs.core.second.call(null,arglists_38546):arglists_38546));
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
var seq__38507_38547 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38508_38548 = null;
var count__38509_38549 = (0);
var i__38510_38550 = (0);
while(true){
if((i__38510_38550 < count__38509_38549)){
var vec__38511_38551 = cljs.core._nth.call(null,chunk__38508_38548,i__38510_38550);
var name_38552 = cljs.core.nth.call(null,vec__38511_38551,(0),null);
var map__38514_38553 = cljs.core.nth.call(null,vec__38511_38551,(1),null);
var map__38514_38554__$1 = ((((!((map__38514_38553 == null)))?((((map__38514_38553.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38514_38553.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38514_38553):map__38514_38553);
var doc_38555 = cljs.core.get.call(null,map__38514_38554__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38556 = cljs.core.get.call(null,map__38514_38554__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_38552);

cljs.core.println.call(null," ",arglists_38556);

if(cljs.core.truth_(doc_38555)){
cljs.core.println.call(null," ",doc_38555);
} else {
}

var G__38557 = seq__38507_38547;
var G__38558 = chunk__38508_38548;
var G__38559 = count__38509_38549;
var G__38560 = (i__38510_38550 + (1));
seq__38507_38547 = G__38557;
chunk__38508_38548 = G__38558;
count__38509_38549 = G__38559;
i__38510_38550 = G__38560;
continue;
} else {
var temp__6728__auto___38561 = cljs.core.seq.call(null,seq__38507_38547);
if(temp__6728__auto___38561){
var seq__38507_38562__$1 = temp__6728__auto___38561;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38507_38562__$1)){
var c__21000__auto___38563 = cljs.core.chunk_first.call(null,seq__38507_38562__$1);
var G__38564 = cljs.core.chunk_rest.call(null,seq__38507_38562__$1);
var G__38565 = c__21000__auto___38563;
var G__38566 = cljs.core.count.call(null,c__21000__auto___38563);
var G__38567 = (0);
seq__38507_38547 = G__38564;
chunk__38508_38548 = G__38565;
count__38509_38549 = G__38566;
i__38510_38550 = G__38567;
continue;
} else {
var vec__38516_38568 = cljs.core.first.call(null,seq__38507_38562__$1);
var name_38569 = cljs.core.nth.call(null,vec__38516_38568,(0),null);
var map__38519_38570 = cljs.core.nth.call(null,vec__38516_38568,(1),null);
var map__38519_38571__$1 = ((((!((map__38519_38570 == null)))?((((map__38519_38570.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38519_38570.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38519_38570):map__38519_38570);
var doc_38572 = cljs.core.get.call(null,map__38519_38571__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38573 = cljs.core.get.call(null,map__38519_38571__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_38569);

cljs.core.println.call(null," ",arglists_38573);

if(cljs.core.truth_(doc_38572)){
cljs.core.println.call(null," ",doc_38572);
} else {
}

var G__38574 = cljs.core.next.call(null,seq__38507_38562__$1);
var G__38575 = null;
var G__38576 = (0);
var G__38577 = (0);
seq__38507_38547 = G__38574;
chunk__38508_38548 = G__38575;
count__38509_38549 = G__38576;
i__38510_38550 = G__38577;
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

var seq__38521 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__38522 = null;
var count__38523 = (0);
var i__38524 = (0);
while(true){
if((i__38524 < count__38523)){
var role = cljs.core._nth.call(null,chunk__38522,i__38524);
var temp__6728__auto___38578__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6728__auto___38578__$1)){
var spec_38579 = temp__6728__auto___38578__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_38579));
} else {
}

var G__38580 = seq__38521;
var G__38581 = chunk__38522;
var G__38582 = count__38523;
var G__38583 = (i__38524 + (1));
seq__38521 = G__38580;
chunk__38522 = G__38581;
count__38523 = G__38582;
i__38524 = G__38583;
continue;
} else {
var temp__6728__auto____$1 = cljs.core.seq.call(null,seq__38521);
if(temp__6728__auto____$1){
var seq__38521__$1 = temp__6728__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38521__$1)){
var c__21000__auto__ = cljs.core.chunk_first.call(null,seq__38521__$1);
var G__38584 = cljs.core.chunk_rest.call(null,seq__38521__$1);
var G__38585 = c__21000__auto__;
var G__38586 = cljs.core.count.call(null,c__21000__auto__);
var G__38587 = (0);
seq__38521 = G__38584;
chunk__38522 = G__38585;
count__38523 = G__38586;
i__38524 = G__38587;
continue;
} else {
var role = cljs.core.first.call(null,seq__38521__$1);
var temp__6728__auto___38588__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6728__auto___38588__$2)){
var spec_38589 = temp__6728__auto___38588__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_38589));
} else {
}

var G__38590 = cljs.core.next.call(null,seq__38521__$1);
var G__38591 = null;
var G__38592 = (0);
var G__38593 = (0);
seq__38521 = G__38590;
chunk__38522 = G__38591;
count__38523 = G__38592;
i__38524 = G__38593;
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