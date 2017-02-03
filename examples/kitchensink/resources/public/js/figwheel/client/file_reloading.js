// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__20097__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__20097__auto__){
return or__20097__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__20097__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__20097__auto__)){
return or__20097__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__36105_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__36105_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__36110 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__36111 = null;
var count__36112 = (0);
var i__36113 = (0);
while(true){
if((i__36113 < count__36112)){
var n = cljs.core._nth.call(null,chunk__36111,i__36113);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__36114 = seq__36110;
var G__36115 = chunk__36111;
var G__36116 = count__36112;
var G__36117 = (i__36113 + (1));
seq__36110 = G__36114;
chunk__36111 = G__36115;
count__36112 = G__36116;
i__36113 = G__36117;
continue;
} else {
var temp__6728__auto__ = cljs.core.seq.call(null,seq__36110);
if(temp__6728__auto__){
var seq__36110__$1 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36110__$1)){
var c__21000__auto__ = cljs.core.chunk_first.call(null,seq__36110__$1);
var G__36118 = cljs.core.chunk_rest.call(null,seq__36110__$1);
var G__36119 = c__21000__auto__;
var G__36120 = cljs.core.count.call(null,c__21000__auto__);
var G__36121 = (0);
seq__36110 = G__36118;
chunk__36111 = G__36119;
count__36112 = G__36120;
i__36113 = G__36121;
continue;
} else {
var n = cljs.core.first.call(null,seq__36110__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__36122 = cljs.core.next.call(null,seq__36110__$1);
var G__36123 = null;
var G__36124 = (0);
var G__36125 = (0);
seq__36110 = G__36122;
chunk__36111 = G__36123;
count__36112 = G__36124;
i__36113 = G__36125;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__36176_36187 = cljs.core.seq.call(null,deps);
var chunk__36177_36188 = null;
var count__36178_36189 = (0);
var i__36179_36190 = (0);
while(true){
if((i__36179_36190 < count__36178_36189)){
var dep_36191 = cljs.core._nth.call(null,chunk__36177_36188,i__36179_36190);
topo_sort_helper_STAR_.call(null,dep_36191,(depth + (1)),state);

var G__36192 = seq__36176_36187;
var G__36193 = chunk__36177_36188;
var G__36194 = count__36178_36189;
var G__36195 = (i__36179_36190 + (1));
seq__36176_36187 = G__36192;
chunk__36177_36188 = G__36193;
count__36178_36189 = G__36194;
i__36179_36190 = G__36195;
continue;
} else {
var temp__6728__auto___36196 = cljs.core.seq.call(null,seq__36176_36187);
if(temp__6728__auto___36196){
var seq__36176_36197__$1 = temp__6728__auto___36196;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36176_36197__$1)){
var c__21000__auto___36198 = cljs.core.chunk_first.call(null,seq__36176_36197__$1);
var G__36199 = cljs.core.chunk_rest.call(null,seq__36176_36197__$1);
var G__36200 = c__21000__auto___36198;
var G__36201 = cljs.core.count.call(null,c__21000__auto___36198);
var G__36202 = (0);
seq__36176_36187 = G__36199;
chunk__36177_36188 = G__36200;
count__36178_36189 = G__36201;
i__36179_36190 = G__36202;
continue;
} else {
var dep_36203 = cljs.core.first.call(null,seq__36176_36197__$1);
topo_sort_helper_STAR_.call(null,dep_36203,(depth + (1)),state);

var G__36204 = cljs.core.next.call(null,seq__36176_36197__$1);
var G__36205 = null;
var G__36206 = (0);
var G__36207 = (0);
seq__36176_36187 = G__36204;
chunk__36177_36188 = G__36205;
count__36178_36189 = G__36206;
i__36179_36190 = G__36207;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__36180){
var vec__36184 = p__36180;
var seq__36185 = cljs.core.seq.call(null,vec__36184);
var first__36186 = cljs.core.first.call(null,seq__36185);
var seq__36185__$1 = cljs.core.next.call(null,seq__36185);
var x = first__36186;
var xs = seq__36185__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__36184,seq__36185,first__36186,seq__36185__$1,x,xs,get_deps__$1){
return (function (p1__36126_SHARP_){
return clojure.set.difference.call(null,p1__36126_SHARP_,x);
});})(vec__36184,seq__36185,first__36186,seq__36185__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__36220 = cljs.core.seq.call(null,provides);
var chunk__36221 = null;
var count__36222 = (0);
var i__36223 = (0);
while(true){
if((i__36223 < count__36222)){
var prov = cljs.core._nth.call(null,chunk__36221,i__36223);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__36224_36232 = cljs.core.seq.call(null,requires);
var chunk__36225_36233 = null;
var count__36226_36234 = (0);
var i__36227_36235 = (0);
while(true){
if((i__36227_36235 < count__36226_36234)){
var req_36236 = cljs.core._nth.call(null,chunk__36225_36233,i__36227_36235);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36236,prov);

var G__36237 = seq__36224_36232;
var G__36238 = chunk__36225_36233;
var G__36239 = count__36226_36234;
var G__36240 = (i__36227_36235 + (1));
seq__36224_36232 = G__36237;
chunk__36225_36233 = G__36238;
count__36226_36234 = G__36239;
i__36227_36235 = G__36240;
continue;
} else {
var temp__6728__auto___36241 = cljs.core.seq.call(null,seq__36224_36232);
if(temp__6728__auto___36241){
var seq__36224_36242__$1 = temp__6728__auto___36241;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36224_36242__$1)){
var c__21000__auto___36243 = cljs.core.chunk_first.call(null,seq__36224_36242__$1);
var G__36244 = cljs.core.chunk_rest.call(null,seq__36224_36242__$1);
var G__36245 = c__21000__auto___36243;
var G__36246 = cljs.core.count.call(null,c__21000__auto___36243);
var G__36247 = (0);
seq__36224_36232 = G__36244;
chunk__36225_36233 = G__36245;
count__36226_36234 = G__36246;
i__36227_36235 = G__36247;
continue;
} else {
var req_36248 = cljs.core.first.call(null,seq__36224_36242__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36248,prov);

var G__36249 = cljs.core.next.call(null,seq__36224_36242__$1);
var G__36250 = null;
var G__36251 = (0);
var G__36252 = (0);
seq__36224_36232 = G__36249;
chunk__36225_36233 = G__36250;
count__36226_36234 = G__36251;
i__36227_36235 = G__36252;
continue;
}
} else {
}
}
break;
}

var G__36253 = seq__36220;
var G__36254 = chunk__36221;
var G__36255 = count__36222;
var G__36256 = (i__36223 + (1));
seq__36220 = G__36253;
chunk__36221 = G__36254;
count__36222 = G__36255;
i__36223 = G__36256;
continue;
} else {
var temp__6728__auto__ = cljs.core.seq.call(null,seq__36220);
if(temp__6728__auto__){
var seq__36220__$1 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36220__$1)){
var c__21000__auto__ = cljs.core.chunk_first.call(null,seq__36220__$1);
var G__36257 = cljs.core.chunk_rest.call(null,seq__36220__$1);
var G__36258 = c__21000__auto__;
var G__36259 = cljs.core.count.call(null,c__21000__auto__);
var G__36260 = (0);
seq__36220 = G__36257;
chunk__36221 = G__36258;
count__36222 = G__36259;
i__36223 = G__36260;
continue;
} else {
var prov = cljs.core.first.call(null,seq__36220__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__36228_36261 = cljs.core.seq.call(null,requires);
var chunk__36229_36262 = null;
var count__36230_36263 = (0);
var i__36231_36264 = (0);
while(true){
if((i__36231_36264 < count__36230_36263)){
var req_36265 = cljs.core._nth.call(null,chunk__36229_36262,i__36231_36264);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36265,prov);

var G__36266 = seq__36228_36261;
var G__36267 = chunk__36229_36262;
var G__36268 = count__36230_36263;
var G__36269 = (i__36231_36264 + (1));
seq__36228_36261 = G__36266;
chunk__36229_36262 = G__36267;
count__36230_36263 = G__36268;
i__36231_36264 = G__36269;
continue;
} else {
var temp__6728__auto___36270__$1 = cljs.core.seq.call(null,seq__36228_36261);
if(temp__6728__auto___36270__$1){
var seq__36228_36271__$1 = temp__6728__auto___36270__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36228_36271__$1)){
var c__21000__auto___36272 = cljs.core.chunk_first.call(null,seq__36228_36271__$1);
var G__36273 = cljs.core.chunk_rest.call(null,seq__36228_36271__$1);
var G__36274 = c__21000__auto___36272;
var G__36275 = cljs.core.count.call(null,c__21000__auto___36272);
var G__36276 = (0);
seq__36228_36261 = G__36273;
chunk__36229_36262 = G__36274;
count__36230_36263 = G__36275;
i__36231_36264 = G__36276;
continue;
} else {
var req_36277 = cljs.core.first.call(null,seq__36228_36271__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36277,prov);

var G__36278 = cljs.core.next.call(null,seq__36228_36271__$1);
var G__36279 = null;
var G__36280 = (0);
var G__36281 = (0);
seq__36228_36261 = G__36278;
chunk__36229_36262 = G__36279;
count__36230_36263 = G__36280;
i__36231_36264 = G__36281;
continue;
}
} else {
}
}
break;
}

var G__36282 = cljs.core.next.call(null,seq__36220__$1);
var G__36283 = null;
var G__36284 = (0);
var G__36285 = (0);
seq__36220 = G__36282;
chunk__36221 = G__36283;
count__36222 = G__36284;
i__36223 = G__36285;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__36290_36294 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__36291_36295 = null;
var count__36292_36296 = (0);
var i__36293_36297 = (0);
while(true){
if((i__36293_36297 < count__36292_36296)){
var ns_36298 = cljs.core._nth.call(null,chunk__36291_36295,i__36293_36297);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_36298);

var G__36299 = seq__36290_36294;
var G__36300 = chunk__36291_36295;
var G__36301 = count__36292_36296;
var G__36302 = (i__36293_36297 + (1));
seq__36290_36294 = G__36299;
chunk__36291_36295 = G__36300;
count__36292_36296 = G__36301;
i__36293_36297 = G__36302;
continue;
} else {
var temp__6728__auto___36303 = cljs.core.seq.call(null,seq__36290_36294);
if(temp__6728__auto___36303){
var seq__36290_36304__$1 = temp__6728__auto___36303;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36290_36304__$1)){
var c__21000__auto___36305 = cljs.core.chunk_first.call(null,seq__36290_36304__$1);
var G__36306 = cljs.core.chunk_rest.call(null,seq__36290_36304__$1);
var G__36307 = c__21000__auto___36305;
var G__36308 = cljs.core.count.call(null,c__21000__auto___36305);
var G__36309 = (0);
seq__36290_36294 = G__36306;
chunk__36291_36295 = G__36307;
count__36292_36296 = G__36308;
i__36293_36297 = G__36309;
continue;
} else {
var ns_36310 = cljs.core.first.call(null,seq__36290_36304__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_36310);

var G__36311 = cljs.core.next.call(null,seq__36290_36304__$1);
var G__36312 = null;
var G__36313 = (0);
var G__36314 = (0);
seq__36290_36294 = G__36311;
chunk__36291_36295 = G__36312;
count__36292_36296 = G__36313;
i__36293_36297 = G__36314;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__20097__auto__ = goog.require__;
if(cljs.core.truth_(or__20097__auto__)){
return or__20097__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__36315__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__36315 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36316__i = 0, G__36316__a = new Array(arguments.length -  0);
while (G__36316__i < G__36316__a.length) {G__36316__a[G__36316__i] = arguments[G__36316__i + 0]; ++G__36316__i;}
  args = new cljs.core.IndexedSeq(G__36316__a,0);
} 
return G__36315__delegate.call(this,args);};
G__36315.cljs$lang$maxFixedArity = 0;
G__36315.cljs$lang$applyTo = (function (arglist__36317){
var args = cljs.core.seq(arglist__36317);
return G__36315__delegate(args);
});
G__36315.cljs$core$IFn$_invoke$arity$variadic = G__36315__delegate;
return G__36315;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__36319 = cljs.core._EQ_;
var expr__36320 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__36319.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__36320))){
var path_parts = ((function (pred__36319,expr__36320){
return (function (p1__36318_SHARP_){
return clojure.string.split.call(null,p1__36318_SHARP_,/[\/\\]/);
});})(pred__36319,expr__36320))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__36319,expr__36320){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e36322){if((e36322 instanceof Error)){
var e = e36322;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e36322;

}
}})());
});
;})(path_parts,sep,root,pred__36319,expr__36320))
} else {
if(cljs.core.truth_(pred__36319.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__36320))){
return ((function (pred__36319,expr__36320){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__36319,expr__36320){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__36319,expr__36320))
);

return deferred.addErrback(((function (deferred,pred__36319,expr__36320){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__36319,expr__36320))
);
});
;})(pred__36319,expr__36320))
} else {
return ((function (pred__36319,expr__36320){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__36319,expr__36320))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__36323,callback){
var map__36326 = p__36323;
var map__36326__$1 = ((((!((map__36326 == null)))?((((map__36326.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36326.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36326):map__36326);
var file_msg = map__36326__$1;
var request_url = cljs.core.get.call(null,map__36326__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__36326,map__36326__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__36326,map__36326__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__33236__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33236__auto__){
return (function (){
var f__33237__auto__ = (function (){var switch__33122__auto__ = ((function (c__33236__auto__){
return (function (state_36350){
var state_val_36351 = (state_36350[(1)]);
if((state_val_36351 === (7))){
var inst_36346 = (state_36350[(2)]);
var state_36350__$1 = state_36350;
var statearr_36352_36372 = state_36350__$1;
(statearr_36352_36372[(2)] = inst_36346);

(statearr_36352_36372[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36351 === (1))){
var state_36350__$1 = state_36350;
var statearr_36353_36373 = state_36350__$1;
(statearr_36353_36373[(2)] = null);

(statearr_36353_36373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36351 === (4))){
var inst_36330 = (state_36350[(7)]);
var inst_36330__$1 = (state_36350[(2)]);
var state_36350__$1 = (function (){var statearr_36354 = state_36350;
(statearr_36354[(7)] = inst_36330__$1);

return statearr_36354;
})();
if(cljs.core.truth_(inst_36330__$1)){
var statearr_36355_36374 = state_36350__$1;
(statearr_36355_36374[(1)] = (5));

} else {
var statearr_36356_36375 = state_36350__$1;
(statearr_36356_36375[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36351 === (6))){
var state_36350__$1 = state_36350;
var statearr_36357_36376 = state_36350__$1;
(statearr_36357_36376[(2)] = null);

(statearr_36357_36376[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36351 === (3))){
var inst_36348 = (state_36350[(2)]);
var state_36350__$1 = state_36350;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36350__$1,inst_36348);
} else {
if((state_val_36351 === (2))){
var state_36350__$1 = state_36350;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36350__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_36351 === (11))){
var inst_36342 = (state_36350[(2)]);
var state_36350__$1 = (function (){var statearr_36358 = state_36350;
(statearr_36358[(8)] = inst_36342);

return statearr_36358;
})();
var statearr_36359_36377 = state_36350__$1;
(statearr_36359_36377[(2)] = null);

(statearr_36359_36377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36351 === (9))){
var inst_36336 = (state_36350[(9)]);
var inst_36334 = (state_36350[(10)]);
var inst_36338 = inst_36336.call(null,inst_36334);
var state_36350__$1 = state_36350;
var statearr_36360_36378 = state_36350__$1;
(statearr_36360_36378[(2)] = inst_36338);

(statearr_36360_36378[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36351 === (5))){
var inst_36330 = (state_36350[(7)]);
var inst_36332 = figwheel.client.file_reloading.blocking_load.call(null,inst_36330);
var state_36350__$1 = state_36350;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36350__$1,(8),inst_36332);
} else {
if((state_val_36351 === (10))){
var inst_36334 = (state_36350[(10)]);
var inst_36340 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_36334);
var state_36350__$1 = state_36350;
var statearr_36361_36379 = state_36350__$1;
(statearr_36361_36379[(2)] = inst_36340);

(statearr_36361_36379[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36351 === (8))){
var inst_36336 = (state_36350[(9)]);
var inst_36330 = (state_36350[(7)]);
var inst_36334 = (state_36350[(2)]);
var inst_36335 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_36336__$1 = cljs.core.get.call(null,inst_36335,inst_36330);
var state_36350__$1 = (function (){var statearr_36362 = state_36350;
(statearr_36362[(9)] = inst_36336__$1);

(statearr_36362[(10)] = inst_36334);

return statearr_36362;
})();
if(cljs.core.truth_(inst_36336__$1)){
var statearr_36363_36380 = state_36350__$1;
(statearr_36363_36380[(1)] = (9));

} else {
var statearr_36364_36381 = state_36350__$1;
(statearr_36364_36381[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__33236__auto__))
;
return ((function (switch__33122__auto__,c__33236__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__33123__auto__ = null;
var figwheel$client$file_reloading$state_machine__33123__auto____0 = (function (){
var statearr_36368 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36368[(0)] = figwheel$client$file_reloading$state_machine__33123__auto__);

(statearr_36368[(1)] = (1));

return statearr_36368;
});
var figwheel$client$file_reloading$state_machine__33123__auto____1 = (function (state_36350){
while(true){
var ret_value__33124__auto__ = (function (){try{while(true){
var result__33125__auto__ = switch__33122__auto__.call(null,state_36350);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33125__auto__;
}
break;
}
}catch (e36369){if((e36369 instanceof Object)){
var ex__33126__auto__ = e36369;
var statearr_36370_36382 = state_36350;
(statearr_36370_36382[(5)] = ex__33126__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36350);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36369;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33124__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36383 = state_36350;
state_36350 = G__36383;
continue;
} else {
return ret_value__33124__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__33123__auto__ = function(state_36350){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__33123__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__33123__auto____1.call(this,state_36350);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__33123__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__33123__auto____0;
figwheel$client$file_reloading$state_machine__33123__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__33123__auto____1;
return figwheel$client$file_reloading$state_machine__33123__auto__;
})()
;})(switch__33122__auto__,c__33236__auto__))
})();
var state__33238__auto__ = (function (){var statearr_36371 = f__33237__auto__.call(null);
(statearr_36371[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33236__auto__);

return statearr_36371;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33238__auto__);
});})(c__33236__auto__))
);

return c__33236__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__36384,callback){
var map__36387 = p__36384;
var map__36387__$1 = ((((!((map__36387 == null)))?((((map__36387.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36387.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36387):map__36387);
var file_msg = map__36387__$1;
var namespace = cljs.core.get.call(null,map__36387__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__36387,map__36387__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__36387,map__36387__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__36389){
var map__36392 = p__36389;
var map__36392__$1 = ((((!((map__36392 == null)))?((((map__36392.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36392.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36392):map__36392);
var file_msg = map__36392__$1;
var namespace = cljs.core.get.call(null,map__36392__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__20085__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__20085__auto__){
var or__20097__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__20097__auto__)){
return or__20097__auto__;
} else {
var or__20097__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__20097__auto____$1)){
return or__20097__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__20085__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__36394,callback){
var map__36397 = p__36394;
var map__36397__$1 = ((((!((map__36397 == null)))?((((map__36397.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36397.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36397):map__36397);
var file_msg = map__36397__$1;
var request_url = cljs.core.get.call(null,map__36397__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__36397__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__33236__auto___36501 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33236__auto___36501,out){
return (function (){
var f__33237__auto__ = (function (){var switch__33122__auto__ = ((function (c__33236__auto___36501,out){
return (function (state_36483){
var state_val_36484 = (state_36483[(1)]);
if((state_val_36484 === (1))){
var inst_36457 = cljs.core.seq.call(null,files);
var inst_36458 = cljs.core.first.call(null,inst_36457);
var inst_36459 = cljs.core.next.call(null,inst_36457);
var inst_36460 = files;
var state_36483__$1 = (function (){var statearr_36485 = state_36483;
(statearr_36485[(7)] = inst_36460);

(statearr_36485[(8)] = inst_36459);

(statearr_36485[(9)] = inst_36458);

return statearr_36485;
})();
var statearr_36486_36502 = state_36483__$1;
(statearr_36486_36502[(2)] = null);

(statearr_36486_36502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36484 === (2))){
var inst_36466 = (state_36483[(10)]);
var inst_36460 = (state_36483[(7)]);
var inst_36465 = cljs.core.seq.call(null,inst_36460);
var inst_36466__$1 = cljs.core.first.call(null,inst_36465);
var inst_36467 = cljs.core.next.call(null,inst_36465);
var inst_36468 = (inst_36466__$1 == null);
var inst_36469 = cljs.core.not.call(null,inst_36468);
var state_36483__$1 = (function (){var statearr_36487 = state_36483;
(statearr_36487[(11)] = inst_36467);

(statearr_36487[(10)] = inst_36466__$1);

return statearr_36487;
})();
if(inst_36469){
var statearr_36488_36503 = state_36483__$1;
(statearr_36488_36503[(1)] = (4));

} else {
var statearr_36489_36504 = state_36483__$1;
(statearr_36489_36504[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36484 === (3))){
var inst_36481 = (state_36483[(2)]);
var state_36483__$1 = state_36483;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36483__$1,inst_36481);
} else {
if((state_val_36484 === (4))){
var inst_36466 = (state_36483[(10)]);
var inst_36471 = figwheel.client.file_reloading.reload_js_file.call(null,inst_36466);
var state_36483__$1 = state_36483;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36483__$1,(7),inst_36471);
} else {
if((state_val_36484 === (5))){
var inst_36477 = cljs.core.async.close_BANG_.call(null,out);
var state_36483__$1 = state_36483;
var statearr_36490_36505 = state_36483__$1;
(statearr_36490_36505[(2)] = inst_36477);

(statearr_36490_36505[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36484 === (6))){
var inst_36479 = (state_36483[(2)]);
var state_36483__$1 = state_36483;
var statearr_36491_36506 = state_36483__$1;
(statearr_36491_36506[(2)] = inst_36479);

(statearr_36491_36506[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36484 === (7))){
var inst_36467 = (state_36483[(11)]);
var inst_36473 = (state_36483[(2)]);
var inst_36474 = cljs.core.async.put_BANG_.call(null,out,inst_36473);
var inst_36460 = inst_36467;
var state_36483__$1 = (function (){var statearr_36492 = state_36483;
(statearr_36492[(7)] = inst_36460);

(statearr_36492[(12)] = inst_36474);

return statearr_36492;
})();
var statearr_36493_36507 = state_36483__$1;
(statearr_36493_36507[(2)] = null);

(statearr_36493_36507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__33236__auto___36501,out))
;
return ((function (switch__33122__auto__,c__33236__auto___36501,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33123__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33123__auto____0 = (function (){
var statearr_36497 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36497[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33123__auto__);

(statearr_36497[(1)] = (1));

return statearr_36497;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33123__auto____1 = (function (state_36483){
while(true){
var ret_value__33124__auto__ = (function (){try{while(true){
var result__33125__auto__ = switch__33122__auto__.call(null,state_36483);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33125__auto__;
}
break;
}
}catch (e36498){if((e36498 instanceof Object)){
var ex__33126__auto__ = e36498;
var statearr_36499_36508 = state_36483;
(statearr_36499_36508[(5)] = ex__33126__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36483);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36498;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33124__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36509 = state_36483;
state_36483 = G__36509;
continue;
} else {
return ret_value__33124__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33123__auto__ = function(state_36483){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33123__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33123__auto____1.call(this,state_36483);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33123__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33123__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33123__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33123__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33123__auto__;
})()
;})(switch__33122__auto__,c__33236__auto___36501,out))
})();
var state__33238__auto__ = (function (){var statearr_36500 = f__33237__auto__.call(null);
(statearr_36500[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33236__auto___36501);

return statearr_36500;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33238__auto__);
});})(c__33236__auto___36501,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__36510,opts){
var map__36514 = p__36510;
var map__36514__$1 = ((((!((map__36514 == null)))?((((map__36514.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36514.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36514):map__36514);
var eval_body__$1 = cljs.core.get.call(null,map__36514__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__36514__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__20085__auto__ = eval_body__$1;
if(cljs.core.truth_(and__20085__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__20085__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e36516){var e = e36516;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__6726__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__36517_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__36517_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__6726__auto__)){
var file_msg = temp__6726__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__36526){
var vec__36527 = p__36526;
var k = cljs.core.nth.call(null,vec__36527,(0),null);
var v = cljs.core.nth.call(null,vec__36527,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__36530){
var vec__36531 = p__36530;
var k = cljs.core.nth.call(null,vec__36531,(0),null);
var v = cljs.core.nth.call(null,vec__36531,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__36537,p__36538){
var map__36785 = p__36537;
var map__36785__$1 = ((((!((map__36785 == null)))?((((map__36785.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36785.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36785):map__36785);
var opts = map__36785__$1;
var before_jsload = cljs.core.get.call(null,map__36785__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__36785__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__36785__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__36786 = p__36538;
var map__36786__$1 = ((((!((map__36786 == null)))?((((map__36786.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36786.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36786):map__36786);
var msg = map__36786__$1;
var files = cljs.core.get.call(null,map__36786__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__36786__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__36786__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__33236__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33236__auto__,map__36785,map__36785__$1,opts,before_jsload,on_jsload,reload_dependents,map__36786,map__36786__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__33237__auto__ = (function (){var switch__33122__auto__ = ((function (c__33236__auto__,map__36785,map__36785__$1,opts,before_jsload,on_jsload,reload_dependents,map__36786,map__36786__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_36939){
var state_val_36940 = (state_36939[(1)]);
if((state_val_36940 === (7))){
var inst_36802 = (state_36939[(7)]);
var inst_36803 = (state_36939[(8)]);
var inst_36801 = (state_36939[(9)]);
var inst_36800 = (state_36939[(10)]);
var inst_36808 = cljs.core._nth.call(null,inst_36801,inst_36803);
var inst_36809 = figwheel.client.file_reloading.eval_body.call(null,inst_36808,opts);
var inst_36810 = (inst_36803 + (1));
var tmp36941 = inst_36802;
var tmp36942 = inst_36801;
var tmp36943 = inst_36800;
var inst_36800__$1 = tmp36943;
var inst_36801__$1 = tmp36942;
var inst_36802__$1 = tmp36941;
var inst_36803__$1 = inst_36810;
var state_36939__$1 = (function (){var statearr_36944 = state_36939;
(statearr_36944[(7)] = inst_36802__$1);

(statearr_36944[(8)] = inst_36803__$1);

(statearr_36944[(9)] = inst_36801__$1);

(statearr_36944[(10)] = inst_36800__$1);

(statearr_36944[(11)] = inst_36809);

return statearr_36944;
})();
var statearr_36945_37031 = state_36939__$1;
(statearr_36945_37031[(2)] = null);

(statearr_36945_37031[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36940 === (20))){
var inst_36843 = (state_36939[(12)]);
var inst_36851 = figwheel.client.file_reloading.sort_files.call(null,inst_36843);
var state_36939__$1 = state_36939;
var statearr_36946_37032 = state_36939__$1;
(statearr_36946_37032[(2)] = inst_36851);

(statearr_36946_37032[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36940 === (27))){
var state_36939__$1 = state_36939;
var statearr_36947_37033 = state_36939__$1;
(statearr_36947_37033[(2)] = null);

(statearr_36947_37033[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36940 === (1))){
var inst_36792 = (state_36939[(13)]);
var inst_36789 = before_jsload.call(null,files);
var inst_36790 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_36791 = (function (){return ((function (inst_36792,inst_36789,inst_36790,state_val_36940,c__33236__auto__,map__36785,map__36785__$1,opts,before_jsload,on_jsload,reload_dependents,map__36786,map__36786__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36534_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__36534_SHARP_);
});
;})(inst_36792,inst_36789,inst_36790,state_val_36940,c__33236__auto__,map__36785,map__36785__$1,opts,before_jsload,on_jsload,reload_dependents,map__36786,map__36786__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36792__$1 = cljs.core.filter.call(null,inst_36791,files);
var inst_36793 = cljs.core.not_empty.call(null,inst_36792__$1);
var state_36939__$1 = (function (){var statearr_36948 = state_36939;
(statearr_36948[(14)] = inst_36789);

(statearr_36948[(15)] = inst_36790);

(statearr_36948[(13)] = inst_36792__$1);

return statearr_36948;
})();
if(cljs.core.truth_(inst_36793)){
var statearr_36949_37034 = state_36939__$1;
(statearr_36949_37034[(1)] = (2));

} else {
var statearr_36950_37035 = state_36939__$1;
(statearr_36950_37035[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36940 === (24))){
var state_36939__$1 = state_36939;
var statearr_36951_37036 = state_36939__$1;
(statearr_36951_37036[(2)] = null);

(statearr_36951_37036[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36940 === (39))){
var inst_36893 = (state_36939[(16)]);
var state_36939__$1 = state_36939;
var statearr_36952_37037 = state_36939__$1;
(statearr_36952_37037[(2)] = inst_36893);

(statearr_36952_37037[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36940 === (46))){
var inst_36934 = (state_36939[(2)]);
var state_36939__$1 = state_36939;
var statearr_36953_37038 = state_36939__$1;
(statearr_36953_37038[(2)] = inst_36934);

(statearr_36953_37038[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36940 === (4))){
var inst_36837 = (state_36939[(2)]);
var inst_36838 = cljs.core.List.EMPTY;
var inst_36839 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_36838);
var inst_36840 = (function (){return ((function (inst_36837,inst_36838,inst_36839,state_val_36940,c__33236__auto__,map__36785,map__36785__$1,opts,before_jsload,on_jsload,reload_dependents,map__36786,map__36786__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36535_SHARP_){
var and__20085__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__36535_SHARP_);
if(cljs.core.truth_(and__20085__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__36535_SHARP_));
} else {
return and__20085__auto__;
}
});
;})(inst_36837,inst_36838,inst_36839,state_val_36940,c__33236__auto__,map__36785,map__36785__$1,opts,before_jsload,on_jsload,reload_dependents,map__36786,map__36786__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36841 = cljs.core.filter.call(null,inst_36840,files);
var inst_36842 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_36843 = cljs.core.concat.call(null,inst_36841,inst_36842);
var state_36939__$1 = (function (){var statearr_36954 = state_36939;
(statearr_36954[(12)] = inst_36843);

(statearr_36954[(17)] = inst_36839);

(statearr_36954[(18)] = inst_36837);

return statearr_36954;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_36955_37039 = state_36939__$1;
(statearr_36955_37039[(1)] = (16));

} else {
var statearr_36956_37040 = state_36939__$1;
(statearr_36956_37040[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36940 === (15))){
var inst_36827 = (state_36939[(2)]);
var state_36939__$1 = state_36939;
var statearr_36957_37041 = state_36939__$1;
(statearr_36957_37041[(2)] = inst_36827);

(statearr_36957_37041[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36940 === (21))){
var inst_36853 = (state_36939[(19)]);
var inst_36853__$1 = (state_36939[(2)]);
var inst_36854 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_36853__$1);
var state_36939__$1 = (function (){var statearr_36958 = state_36939;
(statearr_36958[(19)] = inst_36853__$1);

return statearr_36958;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36939__$1,(22),inst_36854);
} else {
if((state_val_36940 === (31))){
var inst_36937 = (state_36939[(2)]);
var state_36939__$1 = state_36939;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36939__$1,inst_36937);
} else {
if((state_val_36940 === (32))){
var inst_36893 = (state_36939[(16)]);
var inst_36898 = inst_36893.cljs$lang$protocol_mask$partition0$;
var inst_36899 = (inst_36898 & (64));
var inst_36900 = inst_36893.cljs$core$ISeq$;
var inst_36901 = (inst_36899) || (inst_36900);
var state_36939__$1 = state_36939;
if(cljs.core.truth_(inst_36901)){
var statearr_36959_37042 = state_36939__$1;
(statearr_36959_37042[(1)] = (35));

} else {
var statearr_36960_37043 = state_36939__$1;
(statearr_36960_37043[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36940 === (40))){
var inst_36914 = (state_36939[(20)]);
var inst_36913 = (state_36939[(2)]);
var inst_36914__$1 = cljs.core.get.call(null,inst_36913,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_36915 = cljs.core.get.call(null,inst_36913,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_36916 = cljs.core.not_empty.call(null,inst_36914__$1);
var state_36939__$1 = (function (){var statearr_36961 = state_36939;
(statearr_36961[(20)] = inst_36914__$1);

(statearr_36961[(21)] = inst_36915);

return statearr_36961;
})();
if(cljs.core.truth_(inst_36916)){
var statearr_36962_37044 = state_36939__$1;
(statearr_36962_37044[(1)] = (41));

} else {
var statearr_36963_37045 = state_36939__$1;
(statearr_36963_37045[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36940 === (33))){
var state_36939__$1 = state_36939;
var statearr_36964_37046 = state_36939__$1;
(statearr_36964_37046[(2)] = false);

(statearr_36964_37046[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36940 === (13))){
var inst_36813 = (state_36939[(22)]);
var inst_36817 = cljs.core.chunk_first.call(null,inst_36813);
var inst_36818 = cljs.core.chunk_rest.call(null,inst_36813);
var inst_36819 = cljs.core.count.call(null,inst_36817);
var inst_36800 = inst_36818;
var inst_36801 = inst_36817;
var inst_36802 = inst_36819;
var inst_36803 = (0);
var state_36939__$1 = (function (){var statearr_36965 = state_36939;
(statearr_36965[(7)] = inst_36802);

(statearr_36965[(8)] = inst_36803);

(statearr_36965[(9)] = inst_36801);

(statearr_36965[(10)] = inst_36800);

return statearr_36965;
})();
var statearr_36966_37047 = state_36939__$1;
(statearr_36966_37047[(2)] = null);

(statearr_36966_37047[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36940 === (22))){
var inst_36853 = (state_36939[(19)]);
var inst_36861 = (state_36939[(23)]);
var inst_36856 = (state_36939[(24)]);
var inst_36857 = (state_36939[(25)]);
var inst_36856__$1 = (state_36939[(2)]);
var inst_36857__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_36856__$1);
var inst_36858 = (function (){var all_files = inst_36853;
var res_SINGLEQUOTE_ = inst_36856__$1;
var res = inst_36857__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_36853,inst_36861,inst_36856,inst_36857,inst_36856__$1,inst_36857__$1,state_val_36940,c__33236__auto__,map__36785,map__36785__$1,opts,before_jsload,on_jsload,reload_dependents,map__36786,map__36786__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36536_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__36536_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_36853,inst_36861,inst_36856,inst_36857,inst_36856__$1,inst_36857__$1,state_val_36940,c__33236__auto__,map__36785,map__36785__$1,opts,before_jsload,on_jsload,reload_dependents,map__36786,map__36786__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36859 = cljs.core.filter.call(null,inst_36858,inst_36856__$1);
var inst_36860 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_36861__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_36860);
var inst_36862 = cljs.core.not_empty.call(null,inst_36861__$1);
var state_36939__$1 = (function (){var statearr_36967 = state_36939;
(statearr_36967[(23)] = inst_36861__$1);

(statearr_36967[(24)] = inst_36856__$1);

(statearr_36967[(26)] = inst_36859);

(statearr_36967[(25)] = inst_36857__$1);

return statearr_36967;
})();
if(cljs.core.truth_(inst_36862)){
var statearr_36968_37048 = state_36939__$1;
(statearr_36968_37048[(1)] = (23));

} else {
var statearr_36969_37049 = state_36939__$1;
(statearr_36969_37049[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36940 === (36))){
var state_36939__$1 = state_36939;
var statearr_36970_37050 = state_36939__$1;
(statearr_36970_37050[(2)] = false);

(statearr_36970_37050[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36940 === (41))){
var inst_36914 = (state_36939[(20)]);
var inst_36918 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_36919 = cljs.core.map.call(null,inst_36918,inst_36914);
var inst_36920 = cljs.core.pr_str.call(null,inst_36919);
var inst_36921 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_36920)].join('');
var inst_36922 = figwheel.client.utils.log.call(null,inst_36921);
var state_36939__$1 = state_36939;
var statearr_36971_37051 = state_36939__$1;
(statearr_36971_37051[(2)] = inst_36922);

(statearr_36971_37051[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36940 === (43))){
var inst_36915 = (state_36939[(21)]);
var inst_36925 = (state_36939[(2)]);
var inst_36926 = cljs.core.not_empty.call(null,inst_36915);
var state_36939__$1 = (function (){var statearr_36972 = state_36939;
(statearr_36972[(27)] = inst_36925);

return statearr_36972;
})();
if(cljs.core.truth_(inst_36926)){
var statearr_36973_37052 = state_36939__$1;
(statearr_36973_37052[(1)] = (44));

} else {
var statearr_36974_37053 = state_36939__$1;
(statearr_36974_37053[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36940 === (29))){
var inst_36893 = (state_36939[(16)]);
var inst_36853 = (state_36939[(19)]);
var inst_36861 = (state_36939[(23)]);
var inst_36856 = (state_36939[(24)]);
var inst_36859 = (state_36939[(26)]);
var inst_36857 = (state_36939[(25)]);
var inst_36889 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_36892 = (function (){var all_files = inst_36853;
var res_SINGLEQUOTE_ = inst_36856;
var res = inst_36857;
var files_not_loaded = inst_36859;
var dependencies_that_loaded = inst_36861;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36893,inst_36853,inst_36861,inst_36856,inst_36859,inst_36857,inst_36889,state_val_36940,c__33236__auto__,map__36785,map__36785__$1,opts,before_jsload,on_jsload,reload_dependents,map__36786,map__36786__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36891){
var map__36975 = p__36891;
var map__36975__$1 = ((((!((map__36975 == null)))?((((map__36975.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36975.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36975):map__36975);
var namespace = cljs.core.get.call(null,map__36975__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36893,inst_36853,inst_36861,inst_36856,inst_36859,inst_36857,inst_36889,state_val_36940,c__33236__auto__,map__36785,map__36785__$1,opts,before_jsload,on_jsload,reload_dependents,map__36786,map__36786__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36893__$1 = cljs.core.group_by.call(null,inst_36892,inst_36859);
var inst_36895 = (inst_36893__$1 == null);
var inst_36896 = cljs.core.not.call(null,inst_36895);
var state_36939__$1 = (function (){var statearr_36977 = state_36939;
(statearr_36977[(16)] = inst_36893__$1);

(statearr_36977[(28)] = inst_36889);

return statearr_36977;
})();
if(inst_36896){
var statearr_36978_37054 = state_36939__$1;
(statearr_36978_37054[(1)] = (32));

} else {
var statearr_36979_37055 = state_36939__$1;
(statearr_36979_37055[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36940 === (44))){
var inst_36915 = (state_36939[(21)]);
var inst_36928 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36915);
var inst_36929 = cljs.core.pr_str.call(null,inst_36928);
var inst_36930 = [cljs.core.str("not required: "),cljs.core.str(inst_36929)].join('');
var inst_36931 = figwheel.client.utils.log.call(null,inst_36930);
var state_36939__$1 = state_36939;
var statearr_36980_37056 = state_36939__$1;
(statearr_36980_37056[(2)] = inst_36931);

(statearr_36980_37056[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36940 === (6))){
var inst_36834 = (state_36939[(2)]);
var state_36939__$1 = state_36939;
var statearr_36981_37057 = state_36939__$1;
(statearr_36981_37057[(2)] = inst_36834);

(statearr_36981_37057[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36940 === (28))){
var inst_36859 = (state_36939[(26)]);
var inst_36886 = (state_36939[(2)]);
var inst_36887 = cljs.core.not_empty.call(null,inst_36859);
var state_36939__$1 = (function (){var statearr_36982 = state_36939;
(statearr_36982[(29)] = inst_36886);

return statearr_36982;
})();
if(cljs.core.truth_(inst_36887)){
var statearr_36983_37058 = state_36939__$1;
(statearr_36983_37058[(1)] = (29));

} else {
var statearr_36984_37059 = state_36939__$1;
(statearr_36984_37059[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36940 === (25))){
var inst_36857 = (state_36939[(25)]);
var inst_36873 = (state_36939[(2)]);
var inst_36874 = cljs.core.not_empty.call(null,inst_36857);
var state_36939__$1 = (function (){var statearr_36985 = state_36939;
(statearr_36985[(30)] = inst_36873);

return statearr_36985;
})();
if(cljs.core.truth_(inst_36874)){
var statearr_36986_37060 = state_36939__$1;
(statearr_36986_37060[(1)] = (26));

} else {
var statearr_36987_37061 = state_36939__$1;
(statearr_36987_37061[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36940 === (34))){
var inst_36908 = (state_36939[(2)]);
var state_36939__$1 = state_36939;
if(cljs.core.truth_(inst_36908)){
var statearr_36988_37062 = state_36939__$1;
(statearr_36988_37062[(1)] = (38));

} else {
var statearr_36989_37063 = state_36939__$1;
(statearr_36989_37063[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36940 === (17))){
var state_36939__$1 = state_36939;
var statearr_36990_37064 = state_36939__$1;
(statearr_36990_37064[(2)] = recompile_dependents);

(statearr_36990_37064[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36940 === (3))){
var state_36939__$1 = state_36939;
var statearr_36991_37065 = state_36939__$1;
(statearr_36991_37065[(2)] = null);

(statearr_36991_37065[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36940 === (12))){
var inst_36830 = (state_36939[(2)]);
var state_36939__$1 = state_36939;
var statearr_36992_37066 = state_36939__$1;
(statearr_36992_37066[(2)] = inst_36830);

(statearr_36992_37066[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36940 === (2))){
var inst_36792 = (state_36939[(13)]);
var inst_36799 = cljs.core.seq.call(null,inst_36792);
var inst_36800 = inst_36799;
var inst_36801 = null;
var inst_36802 = (0);
var inst_36803 = (0);
var state_36939__$1 = (function (){var statearr_36993 = state_36939;
(statearr_36993[(7)] = inst_36802);

(statearr_36993[(8)] = inst_36803);

(statearr_36993[(9)] = inst_36801);

(statearr_36993[(10)] = inst_36800);

return statearr_36993;
})();
var statearr_36994_37067 = state_36939__$1;
(statearr_36994_37067[(2)] = null);

(statearr_36994_37067[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36940 === (23))){
var inst_36853 = (state_36939[(19)]);
var inst_36861 = (state_36939[(23)]);
var inst_36856 = (state_36939[(24)]);
var inst_36859 = (state_36939[(26)]);
var inst_36857 = (state_36939[(25)]);
var inst_36864 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_36866 = (function (){var all_files = inst_36853;
var res_SINGLEQUOTE_ = inst_36856;
var res = inst_36857;
var files_not_loaded = inst_36859;
var dependencies_that_loaded = inst_36861;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36853,inst_36861,inst_36856,inst_36859,inst_36857,inst_36864,state_val_36940,c__33236__auto__,map__36785,map__36785__$1,opts,before_jsload,on_jsload,reload_dependents,map__36786,map__36786__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36865){
var map__36995 = p__36865;
var map__36995__$1 = ((((!((map__36995 == null)))?((((map__36995.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36995.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36995):map__36995);
var request_url = cljs.core.get.call(null,map__36995__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36853,inst_36861,inst_36856,inst_36859,inst_36857,inst_36864,state_val_36940,c__33236__auto__,map__36785,map__36785__$1,opts,before_jsload,on_jsload,reload_dependents,map__36786,map__36786__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36867 = cljs.core.reverse.call(null,inst_36861);
var inst_36868 = cljs.core.map.call(null,inst_36866,inst_36867);
var inst_36869 = cljs.core.pr_str.call(null,inst_36868);
var inst_36870 = figwheel.client.utils.log.call(null,inst_36869);
var state_36939__$1 = (function (){var statearr_36997 = state_36939;
(statearr_36997[(31)] = inst_36864);

return statearr_36997;
})();
var statearr_36998_37068 = state_36939__$1;
(statearr_36998_37068[(2)] = inst_36870);

(statearr_36998_37068[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36940 === (35))){
var state_36939__$1 = state_36939;
var statearr_36999_37069 = state_36939__$1;
(statearr_36999_37069[(2)] = true);

(statearr_36999_37069[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36940 === (19))){
var inst_36843 = (state_36939[(12)]);
var inst_36849 = figwheel.client.file_reloading.expand_files.call(null,inst_36843);
var state_36939__$1 = state_36939;
var statearr_37000_37070 = state_36939__$1;
(statearr_37000_37070[(2)] = inst_36849);

(statearr_37000_37070[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36940 === (11))){
var state_36939__$1 = state_36939;
var statearr_37001_37071 = state_36939__$1;
(statearr_37001_37071[(2)] = null);

(statearr_37001_37071[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36940 === (9))){
var inst_36832 = (state_36939[(2)]);
var state_36939__$1 = state_36939;
var statearr_37002_37072 = state_36939__$1;
(statearr_37002_37072[(2)] = inst_36832);

(statearr_37002_37072[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36940 === (5))){
var inst_36802 = (state_36939[(7)]);
var inst_36803 = (state_36939[(8)]);
var inst_36805 = (inst_36803 < inst_36802);
var inst_36806 = inst_36805;
var state_36939__$1 = state_36939;
if(cljs.core.truth_(inst_36806)){
var statearr_37003_37073 = state_36939__$1;
(statearr_37003_37073[(1)] = (7));

} else {
var statearr_37004_37074 = state_36939__$1;
(statearr_37004_37074[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36940 === (14))){
var inst_36813 = (state_36939[(22)]);
var inst_36822 = cljs.core.first.call(null,inst_36813);
var inst_36823 = figwheel.client.file_reloading.eval_body.call(null,inst_36822,opts);
var inst_36824 = cljs.core.next.call(null,inst_36813);
var inst_36800 = inst_36824;
var inst_36801 = null;
var inst_36802 = (0);
var inst_36803 = (0);
var state_36939__$1 = (function (){var statearr_37005 = state_36939;
(statearr_37005[(7)] = inst_36802);

(statearr_37005[(8)] = inst_36803);

(statearr_37005[(9)] = inst_36801);

(statearr_37005[(10)] = inst_36800);

(statearr_37005[(32)] = inst_36823);

return statearr_37005;
})();
var statearr_37006_37075 = state_36939__$1;
(statearr_37006_37075[(2)] = null);

(statearr_37006_37075[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36940 === (45))){
var state_36939__$1 = state_36939;
var statearr_37007_37076 = state_36939__$1;
(statearr_37007_37076[(2)] = null);

(statearr_37007_37076[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36940 === (26))){
var inst_36853 = (state_36939[(19)]);
var inst_36861 = (state_36939[(23)]);
var inst_36856 = (state_36939[(24)]);
var inst_36859 = (state_36939[(26)]);
var inst_36857 = (state_36939[(25)]);
var inst_36876 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_36878 = (function (){var all_files = inst_36853;
var res_SINGLEQUOTE_ = inst_36856;
var res = inst_36857;
var files_not_loaded = inst_36859;
var dependencies_that_loaded = inst_36861;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36853,inst_36861,inst_36856,inst_36859,inst_36857,inst_36876,state_val_36940,c__33236__auto__,map__36785,map__36785__$1,opts,before_jsload,on_jsload,reload_dependents,map__36786,map__36786__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36877){
var map__37008 = p__36877;
var map__37008__$1 = ((((!((map__37008 == null)))?((((map__37008.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37008.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37008):map__37008);
var namespace = cljs.core.get.call(null,map__37008__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__37008__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36853,inst_36861,inst_36856,inst_36859,inst_36857,inst_36876,state_val_36940,c__33236__auto__,map__36785,map__36785__$1,opts,before_jsload,on_jsload,reload_dependents,map__36786,map__36786__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36879 = cljs.core.map.call(null,inst_36878,inst_36857);
var inst_36880 = cljs.core.pr_str.call(null,inst_36879);
var inst_36881 = figwheel.client.utils.log.call(null,inst_36880);
var inst_36882 = (function (){var all_files = inst_36853;
var res_SINGLEQUOTE_ = inst_36856;
var res = inst_36857;
var files_not_loaded = inst_36859;
var dependencies_that_loaded = inst_36861;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36853,inst_36861,inst_36856,inst_36859,inst_36857,inst_36876,inst_36878,inst_36879,inst_36880,inst_36881,state_val_36940,c__33236__auto__,map__36785,map__36785__$1,opts,before_jsload,on_jsload,reload_dependents,map__36786,map__36786__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36853,inst_36861,inst_36856,inst_36859,inst_36857,inst_36876,inst_36878,inst_36879,inst_36880,inst_36881,state_val_36940,c__33236__auto__,map__36785,map__36785__$1,opts,before_jsload,on_jsload,reload_dependents,map__36786,map__36786__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36883 = setTimeout(inst_36882,(10));
var state_36939__$1 = (function (){var statearr_37010 = state_36939;
(statearr_37010[(33)] = inst_36876);

(statearr_37010[(34)] = inst_36881);

return statearr_37010;
})();
var statearr_37011_37077 = state_36939__$1;
(statearr_37011_37077[(2)] = inst_36883);

(statearr_37011_37077[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36940 === (16))){
var state_36939__$1 = state_36939;
var statearr_37012_37078 = state_36939__$1;
(statearr_37012_37078[(2)] = reload_dependents);

(statearr_37012_37078[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36940 === (38))){
var inst_36893 = (state_36939[(16)]);
var inst_36910 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36893);
var state_36939__$1 = state_36939;
var statearr_37013_37079 = state_36939__$1;
(statearr_37013_37079[(2)] = inst_36910);

(statearr_37013_37079[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36940 === (30))){
var state_36939__$1 = state_36939;
var statearr_37014_37080 = state_36939__$1;
(statearr_37014_37080[(2)] = null);

(statearr_37014_37080[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36940 === (10))){
var inst_36813 = (state_36939[(22)]);
var inst_36815 = cljs.core.chunked_seq_QMARK_.call(null,inst_36813);
var state_36939__$1 = state_36939;
if(inst_36815){
var statearr_37015_37081 = state_36939__$1;
(statearr_37015_37081[(1)] = (13));

} else {
var statearr_37016_37082 = state_36939__$1;
(statearr_37016_37082[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36940 === (18))){
var inst_36847 = (state_36939[(2)]);
var state_36939__$1 = state_36939;
if(cljs.core.truth_(inst_36847)){
var statearr_37017_37083 = state_36939__$1;
(statearr_37017_37083[(1)] = (19));

} else {
var statearr_37018_37084 = state_36939__$1;
(statearr_37018_37084[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36940 === (42))){
var state_36939__$1 = state_36939;
var statearr_37019_37085 = state_36939__$1;
(statearr_37019_37085[(2)] = null);

(statearr_37019_37085[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36940 === (37))){
var inst_36905 = (state_36939[(2)]);
var state_36939__$1 = state_36939;
var statearr_37020_37086 = state_36939__$1;
(statearr_37020_37086[(2)] = inst_36905);

(statearr_37020_37086[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36940 === (8))){
var inst_36800 = (state_36939[(10)]);
var inst_36813 = (state_36939[(22)]);
var inst_36813__$1 = cljs.core.seq.call(null,inst_36800);
var state_36939__$1 = (function (){var statearr_37021 = state_36939;
(statearr_37021[(22)] = inst_36813__$1);

return statearr_37021;
})();
if(inst_36813__$1){
var statearr_37022_37087 = state_36939__$1;
(statearr_37022_37087[(1)] = (10));

} else {
var statearr_37023_37088 = state_36939__$1;
(statearr_37023_37088[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33236__auto__,map__36785,map__36785__$1,opts,before_jsload,on_jsload,reload_dependents,map__36786,map__36786__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__33122__auto__,c__33236__auto__,map__36785,map__36785__$1,opts,before_jsload,on_jsload,reload_dependents,map__36786,map__36786__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33123__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33123__auto____0 = (function (){
var statearr_37027 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37027[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__33123__auto__);

(statearr_37027[(1)] = (1));

return statearr_37027;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33123__auto____1 = (function (state_36939){
while(true){
var ret_value__33124__auto__ = (function (){try{while(true){
var result__33125__auto__ = switch__33122__auto__.call(null,state_36939);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33125__auto__;
}
break;
}
}catch (e37028){if((e37028 instanceof Object)){
var ex__33126__auto__ = e37028;
var statearr_37029_37089 = state_36939;
(statearr_37029_37089[(5)] = ex__33126__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36939);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37028;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33124__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37090 = state_36939;
state_36939 = G__37090;
continue;
} else {
return ret_value__33124__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__33123__auto__ = function(state_36939){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33123__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33123__auto____1.call(this,state_36939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__33123__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__33123__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__33123__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__33123__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33123__auto__;
})()
;})(switch__33122__auto__,c__33236__auto__,map__36785,map__36785__$1,opts,before_jsload,on_jsload,reload_dependents,map__36786,map__36786__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__33238__auto__ = (function (){var statearr_37030 = f__33237__auto__.call(null);
(statearr_37030[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33236__auto__);

return statearr_37030;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33238__auto__);
});})(c__33236__auto__,map__36785,map__36785__$1,opts,before_jsload,on_jsload,reload_dependents,map__36786,map__36786__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__33236__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__37093,link){
var map__37096 = p__37093;
var map__37096__$1 = ((((!((map__37096 == null)))?((((map__37096.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37096.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37096):map__37096);
var file = cljs.core.get.call(null,map__37096__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__6728__auto__ = link.href;
if(cljs.core.truth_(temp__6728__auto__)){
var link_href = temp__6728__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__6728__auto__,map__37096,map__37096__$1,file){
return (function (p1__37091_SHARP_,p2__37092_SHARP_){
if(cljs.core._EQ_.call(null,p1__37091_SHARP_,p2__37092_SHARP_)){
return p1__37091_SHARP_;
} else {
return false;
}
});})(link_href,temp__6728__auto__,map__37096,map__37096__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__6728__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__37102){
var map__37103 = p__37102;
var map__37103__$1 = ((((!((map__37103 == null)))?((((map__37103.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37103.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37103):map__37103);
var match_length = cljs.core.get.call(null,map__37103__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__37103__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__37098_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__37098_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__6728__auto__)){
var res = temp__6728__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args37105 = [];
var len__21280__auto___37108 = arguments.length;
var i__21281__auto___37109 = (0);
while(true){
if((i__21281__auto___37109 < len__21280__auto___37108)){
args37105.push((arguments[i__21281__auto___37109]));

var G__37110 = (i__21281__auto___37109 + (1));
i__21281__auto___37109 = G__37110;
continue;
} else {
}
break;
}

var G__37107 = args37105.length;
switch (G__37107) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37105.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__37112_SHARP_,p2__37113_SHARP_){
return cljs.core.assoc.call(null,p1__37112_SHARP_,cljs.core.get.call(null,p2__37113_SHARP_,key),p2__37113_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__37114){
var map__37117 = p__37114;
var map__37117__$1 = ((((!((map__37117 == null)))?((((map__37117.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37117.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37117):map__37117);
var f_data = map__37117__$1;
var file = cljs.core.get.call(null,map__37117__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__6728__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__6728__auto__)){
var link = temp__6728__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__37119,files_msg){
var map__37126 = p__37119;
var map__37126__$1 = ((((!((map__37126 == null)))?((((map__37126.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37126.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37126):map__37126);
var opts = map__37126__$1;
var on_cssload = cljs.core.get.call(null,map__37126__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__37128_37132 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__37129_37133 = null;
var count__37130_37134 = (0);
var i__37131_37135 = (0);
while(true){
if((i__37131_37135 < count__37130_37134)){
var f_37136 = cljs.core._nth.call(null,chunk__37129_37133,i__37131_37135);
figwheel.client.file_reloading.reload_css_file.call(null,f_37136);

var G__37137 = seq__37128_37132;
var G__37138 = chunk__37129_37133;
var G__37139 = count__37130_37134;
var G__37140 = (i__37131_37135 + (1));
seq__37128_37132 = G__37137;
chunk__37129_37133 = G__37138;
count__37130_37134 = G__37139;
i__37131_37135 = G__37140;
continue;
} else {
var temp__6728__auto___37141 = cljs.core.seq.call(null,seq__37128_37132);
if(temp__6728__auto___37141){
var seq__37128_37142__$1 = temp__6728__auto___37141;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37128_37142__$1)){
var c__21000__auto___37143 = cljs.core.chunk_first.call(null,seq__37128_37142__$1);
var G__37144 = cljs.core.chunk_rest.call(null,seq__37128_37142__$1);
var G__37145 = c__21000__auto___37143;
var G__37146 = cljs.core.count.call(null,c__21000__auto___37143);
var G__37147 = (0);
seq__37128_37132 = G__37144;
chunk__37129_37133 = G__37145;
count__37130_37134 = G__37146;
i__37131_37135 = G__37147;
continue;
} else {
var f_37148 = cljs.core.first.call(null,seq__37128_37142__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_37148);

var G__37149 = cljs.core.next.call(null,seq__37128_37142__$1);
var G__37150 = null;
var G__37151 = (0);
var G__37152 = (0);
seq__37128_37132 = G__37149;
chunk__37129_37133 = G__37150;
count__37130_37134 = G__37151;
i__37131_37135 = G__37152;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__37126,map__37126__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__37126,map__37126__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map