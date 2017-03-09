// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
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
var seq__22984_22998 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__22985_22999 = null;
var count__22986_23000 = (0);
var i__22987_23001 = (0);
while(true){
if((i__22987_23001 < count__22986_23000)){
var f_23002 = cljs.core._nth.call(null,chunk__22985_22999,i__22987_23001);
cljs.core.println.call(null,"  ",f_23002);

var G__23003 = seq__22984_22998;
var G__23004 = chunk__22985_22999;
var G__23005 = count__22986_23000;
var G__23006 = (i__22987_23001 + (1));
seq__22984_22998 = G__23003;
chunk__22985_22999 = G__23004;
count__22986_23000 = G__23005;
i__22987_23001 = G__23006;
continue;
} else {
var temp__4657__auto___23007 = cljs.core.seq.call(null,seq__22984_22998);
if(temp__4657__auto___23007){
var seq__22984_23008__$1 = temp__4657__auto___23007;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22984_23008__$1)){
var c__17667__auto___23009 = cljs.core.chunk_first.call(null,seq__22984_23008__$1);
var G__23010 = cljs.core.chunk_rest.call(null,seq__22984_23008__$1);
var G__23011 = c__17667__auto___23009;
var G__23012 = cljs.core.count.call(null,c__17667__auto___23009);
var G__23013 = (0);
seq__22984_22998 = G__23010;
chunk__22985_22999 = G__23011;
count__22986_23000 = G__23012;
i__22987_23001 = G__23013;
continue;
} else {
var f_23014 = cljs.core.first.call(null,seq__22984_23008__$1);
cljs.core.println.call(null,"  ",f_23014);

var G__23015 = cljs.core.next.call(null,seq__22984_23008__$1);
var G__23016 = null;
var G__23017 = (0);
var G__23018 = (0);
seq__22984_22998 = G__23015;
chunk__22985_22999 = G__23016;
count__22986_23000 = G__23017;
i__22987_23001 = G__23018;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_23019 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16864__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16864__auto__)){
return or__16864__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_23019);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_23019)))?cljs.core.second.call(null,arglists_23019):arglists_23019));
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
var seq__22988 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__22989 = null;
var count__22990 = (0);
var i__22991 = (0);
while(true){
if((i__22991 < count__22990)){
var vec__22992 = cljs.core._nth.call(null,chunk__22989,i__22991);
var name = cljs.core.nth.call(null,vec__22992,(0),null);
var map__22993 = cljs.core.nth.call(null,vec__22992,(1),null);
var map__22993__$1 = ((((!((map__22993 == null)))?((((map__22993.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22993.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22993):map__22993);
var doc = cljs.core.get.call(null,map__22993__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__22993__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__23020 = seq__22988;
var G__23021 = chunk__22989;
var G__23022 = count__22990;
var G__23023 = (i__22991 + (1));
seq__22988 = G__23020;
chunk__22989 = G__23021;
count__22990 = G__23022;
i__22991 = G__23023;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__22988);
if(temp__4657__auto__){
var seq__22988__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22988__$1)){
var c__17667__auto__ = cljs.core.chunk_first.call(null,seq__22988__$1);
var G__23024 = cljs.core.chunk_rest.call(null,seq__22988__$1);
var G__23025 = c__17667__auto__;
var G__23026 = cljs.core.count.call(null,c__17667__auto__);
var G__23027 = (0);
seq__22988 = G__23024;
chunk__22989 = G__23025;
count__22990 = G__23026;
i__22991 = G__23027;
continue;
} else {
var vec__22995 = cljs.core.first.call(null,seq__22988__$1);
var name = cljs.core.nth.call(null,vec__22995,(0),null);
var map__22996 = cljs.core.nth.call(null,vec__22995,(1),null);
var map__22996__$1 = ((((!((map__22996 == null)))?((((map__22996.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22996.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22996):map__22996);
var doc = cljs.core.get.call(null,map__22996__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__22996__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__23028 = cljs.core.next.call(null,seq__22988__$1);
var G__23029 = null;
var G__23030 = (0);
var G__23031 = (0);
seq__22988 = G__23028;
chunk__22989 = G__23029;
count__22990 = G__23030;
i__22991 = G__23031;
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
}
});

//# sourceMappingURL=repl.js.map