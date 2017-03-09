// Compiled by ClojureScript 1.7.170 {}
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
figwheel.client.file_reloading.queued_file_reload;
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
var or__16864__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16864__auto__){
return or__16864__auto__;
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
var or__16864__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16864__auto__)){
return or__16864__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__21960_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__21960_SHARP_));
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
var seq__21965 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__21966 = null;
var count__21967 = (0);
var i__21968 = (0);
while(true){
if((i__21968 < count__21967)){
var n = cljs.core._nth.call(null,chunk__21966,i__21968);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__21969 = seq__21965;
var G__21970 = chunk__21966;
var G__21971 = count__21967;
var G__21972 = (i__21968 + (1));
seq__21965 = G__21969;
chunk__21966 = G__21970;
count__21967 = G__21971;
i__21968 = G__21972;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__21965);
if(temp__4657__auto__){
var seq__21965__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21965__$1)){
var c__17667__auto__ = cljs.core.chunk_first.call(null,seq__21965__$1);
var G__21973 = cljs.core.chunk_rest.call(null,seq__21965__$1);
var G__21974 = c__17667__auto__;
var G__21975 = cljs.core.count.call(null,c__17667__auto__);
var G__21976 = (0);
seq__21965 = G__21973;
chunk__21966 = G__21974;
count__21967 = G__21975;
i__21968 = G__21976;
continue;
} else {
var n = cljs.core.first.call(null,seq__21965__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__21977 = cljs.core.next.call(null,seq__21965__$1);
var G__21978 = null;
var G__21979 = (0);
var G__21980 = (0);
seq__21965 = G__21977;
chunk__21966 = G__21978;
count__21967 = G__21979;
i__21968 = G__21980;
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

var seq__22019_22026 = cljs.core.seq.call(null,deps);
var chunk__22020_22027 = null;
var count__22021_22028 = (0);
var i__22022_22029 = (0);
while(true){
if((i__22022_22029 < count__22021_22028)){
var dep_22030 = cljs.core._nth.call(null,chunk__22020_22027,i__22022_22029);
topo_sort_helper_STAR_.call(null,dep_22030,(depth + (1)),state);

var G__22031 = seq__22019_22026;
var G__22032 = chunk__22020_22027;
var G__22033 = count__22021_22028;
var G__22034 = (i__22022_22029 + (1));
seq__22019_22026 = G__22031;
chunk__22020_22027 = G__22032;
count__22021_22028 = G__22033;
i__22022_22029 = G__22034;
continue;
} else {
var temp__4657__auto___22035 = cljs.core.seq.call(null,seq__22019_22026);
if(temp__4657__auto___22035){
var seq__22019_22036__$1 = temp__4657__auto___22035;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22019_22036__$1)){
var c__17667__auto___22037 = cljs.core.chunk_first.call(null,seq__22019_22036__$1);
var G__22038 = cljs.core.chunk_rest.call(null,seq__22019_22036__$1);
var G__22039 = c__17667__auto___22037;
var G__22040 = cljs.core.count.call(null,c__17667__auto___22037);
var G__22041 = (0);
seq__22019_22026 = G__22038;
chunk__22020_22027 = G__22039;
count__22021_22028 = G__22040;
i__22022_22029 = G__22041;
continue;
} else {
var dep_22042 = cljs.core.first.call(null,seq__22019_22036__$1);
topo_sort_helper_STAR_.call(null,dep_22042,(depth + (1)),state);

var G__22043 = cljs.core.next.call(null,seq__22019_22036__$1);
var G__22044 = null;
var G__22045 = (0);
var G__22046 = (0);
seq__22019_22026 = G__22043;
chunk__22020_22027 = G__22044;
count__22021_22028 = G__22045;
i__22022_22029 = G__22046;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__22023){
var vec__22025 = p__22023;
var x = cljs.core.nth.call(null,vec__22025,(0),null);
var xs = cljs.core.nthnext.call(null,vec__22025,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__22025,x,xs,get_deps__$1){
return (function (p1__21981_SHARP_){
return clojure.set.difference.call(null,p1__21981_SHARP_,x);
});})(vec__22025,x,xs,get_deps__$1))
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
var seq__22059 = cljs.core.seq.call(null,provides);
var chunk__22060 = null;
var count__22061 = (0);
var i__22062 = (0);
while(true){
if((i__22062 < count__22061)){
var prov = cljs.core._nth.call(null,chunk__22060,i__22062);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__22063_22071 = cljs.core.seq.call(null,requires);
var chunk__22064_22072 = null;
var count__22065_22073 = (0);
var i__22066_22074 = (0);
while(true){
if((i__22066_22074 < count__22065_22073)){
var req_22075 = cljs.core._nth.call(null,chunk__22064_22072,i__22066_22074);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22075,prov);

var G__22076 = seq__22063_22071;
var G__22077 = chunk__22064_22072;
var G__22078 = count__22065_22073;
var G__22079 = (i__22066_22074 + (1));
seq__22063_22071 = G__22076;
chunk__22064_22072 = G__22077;
count__22065_22073 = G__22078;
i__22066_22074 = G__22079;
continue;
} else {
var temp__4657__auto___22080 = cljs.core.seq.call(null,seq__22063_22071);
if(temp__4657__auto___22080){
var seq__22063_22081__$1 = temp__4657__auto___22080;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22063_22081__$1)){
var c__17667__auto___22082 = cljs.core.chunk_first.call(null,seq__22063_22081__$1);
var G__22083 = cljs.core.chunk_rest.call(null,seq__22063_22081__$1);
var G__22084 = c__17667__auto___22082;
var G__22085 = cljs.core.count.call(null,c__17667__auto___22082);
var G__22086 = (0);
seq__22063_22071 = G__22083;
chunk__22064_22072 = G__22084;
count__22065_22073 = G__22085;
i__22066_22074 = G__22086;
continue;
} else {
var req_22087 = cljs.core.first.call(null,seq__22063_22081__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22087,prov);

var G__22088 = cljs.core.next.call(null,seq__22063_22081__$1);
var G__22089 = null;
var G__22090 = (0);
var G__22091 = (0);
seq__22063_22071 = G__22088;
chunk__22064_22072 = G__22089;
count__22065_22073 = G__22090;
i__22066_22074 = G__22091;
continue;
}
} else {
}
}
break;
}

var G__22092 = seq__22059;
var G__22093 = chunk__22060;
var G__22094 = count__22061;
var G__22095 = (i__22062 + (1));
seq__22059 = G__22092;
chunk__22060 = G__22093;
count__22061 = G__22094;
i__22062 = G__22095;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__22059);
if(temp__4657__auto__){
var seq__22059__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22059__$1)){
var c__17667__auto__ = cljs.core.chunk_first.call(null,seq__22059__$1);
var G__22096 = cljs.core.chunk_rest.call(null,seq__22059__$1);
var G__22097 = c__17667__auto__;
var G__22098 = cljs.core.count.call(null,c__17667__auto__);
var G__22099 = (0);
seq__22059 = G__22096;
chunk__22060 = G__22097;
count__22061 = G__22098;
i__22062 = G__22099;
continue;
} else {
var prov = cljs.core.first.call(null,seq__22059__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__22067_22100 = cljs.core.seq.call(null,requires);
var chunk__22068_22101 = null;
var count__22069_22102 = (0);
var i__22070_22103 = (0);
while(true){
if((i__22070_22103 < count__22069_22102)){
var req_22104 = cljs.core._nth.call(null,chunk__22068_22101,i__22070_22103);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22104,prov);

var G__22105 = seq__22067_22100;
var G__22106 = chunk__22068_22101;
var G__22107 = count__22069_22102;
var G__22108 = (i__22070_22103 + (1));
seq__22067_22100 = G__22105;
chunk__22068_22101 = G__22106;
count__22069_22102 = G__22107;
i__22070_22103 = G__22108;
continue;
} else {
var temp__4657__auto___22109__$1 = cljs.core.seq.call(null,seq__22067_22100);
if(temp__4657__auto___22109__$1){
var seq__22067_22110__$1 = temp__4657__auto___22109__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22067_22110__$1)){
var c__17667__auto___22111 = cljs.core.chunk_first.call(null,seq__22067_22110__$1);
var G__22112 = cljs.core.chunk_rest.call(null,seq__22067_22110__$1);
var G__22113 = c__17667__auto___22111;
var G__22114 = cljs.core.count.call(null,c__17667__auto___22111);
var G__22115 = (0);
seq__22067_22100 = G__22112;
chunk__22068_22101 = G__22113;
count__22069_22102 = G__22114;
i__22070_22103 = G__22115;
continue;
} else {
var req_22116 = cljs.core.first.call(null,seq__22067_22110__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22116,prov);

var G__22117 = cljs.core.next.call(null,seq__22067_22110__$1);
var G__22118 = null;
var G__22119 = (0);
var G__22120 = (0);
seq__22067_22100 = G__22117;
chunk__22068_22101 = G__22118;
count__22069_22102 = G__22119;
i__22070_22103 = G__22120;
continue;
}
} else {
}
}
break;
}

var G__22121 = cljs.core.next.call(null,seq__22059__$1);
var G__22122 = null;
var G__22123 = (0);
var G__22124 = (0);
seq__22059 = G__22121;
chunk__22060 = G__22122;
count__22061 = G__22123;
i__22062 = G__22124;
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
var seq__22129_22133 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__22130_22134 = null;
var count__22131_22135 = (0);
var i__22132_22136 = (0);
while(true){
if((i__22132_22136 < count__22131_22135)){
var ns_22137 = cljs.core._nth.call(null,chunk__22130_22134,i__22132_22136);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_22137);

var G__22138 = seq__22129_22133;
var G__22139 = chunk__22130_22134;
var G__22140 = count__22131_22135;
var G__22141 = (i__22132_22136 + (1));
seq__22129_22133 = G__22138;
chunk__22130_22134 = G__22139;
count__22131_22135 = G__22140;
i__22132_22136 = G__22141;
continue;
} else {
var temp__4657__auto___22142 = cljs.core.seq.call(null,seq__22129_22133);
if(temp__4657__auto___22142){
var seq__22129_22143__$1 = temp__4657__auto___22142;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22129_22143__$1)){
var c__17667__auto___22144 = cljs.core.chunk_first.call(null,seq__22129_22143__$1);
var G__22145 = cljs.core.chunk_rest.call(null,seq__22129_22143__$1);
var G__22146 = c__17667__auto___22144;
var G__22147 = cljs.core.count.call(null,c__17667__auto___22144);
var G__22148 = (0);
seq__22129_22133 = G__22145;
chunk__22130_22134 = G__22146;
count__22131_22135 = G__22147;
i__22132_22136 = G__22148;
continue;
} else {
var ns_22149 = cljs.core.first.call(null,seq__22129_22143__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_22149);

var G__22150 = cljs.core.next.call(null,seq__22129_22143__$1);
var G__22151 = null;
var G__22152 = (0);
var G__22153 = (0);
seq__22129_22133 = G__22150;
chunk__22130_22134 = G__22151;
count__22131_22135 = G__22152;
i__22132_22136 = G__22153;
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
goog.require_figwheel_backup_ = (function (){var or__16864__auto__ = goog.require__;
if(cljs.core.truth_(or__16864__auto__)){
return or__16864__auto__;
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
var G__22154__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__22154 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22155__i = 0, G__22155__a = new Array(arguments.length -  0);
while (G__22155__i < G__22155__a.length) {G__22155__a[G__22155__i] = arguments[G__22155__i + 0]; ++G__22155__i;}
  args = new cljs.core.IndexedSeq(G__22155__a,0);
} 
return G__22154__delegate.call(this,args);};
G__22154.cljs$lang$maxFixedArity = 0;
G__22154.cljs$lang$applyTo = (function (arglist__22156){
var args = cljs.core.seq(arglist__22156);
return G__22154__delegate(args);
});
G__22154.cljs$core$IFn$_invoke$arity$variadic = G__22154__delegate;
return G__22154;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__22158 = cljs.core._EQ_;
var expr__22159 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__22158.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__22159))){
var path_parts = ((function (pred__22158,expr__22159){
return (function (p1__22157_SHARP_){
return clojure.string.split.call(null,p1__22157_SHARP_,/[\/\\]/);
});})(pred__22158,expr__22159))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__22158,expr__22159){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e22161){if((e22161 instanceof Error)){
var e = e22161;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e22161;

}
}})());
});
;})(path_parts,sep,root,pred__22158,expr__22159))
} else {
if(cljs.core.truth_(pred__22158.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__22159))){
return ((function (pred__22158,expr__22159){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__22158,expr__22159){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__22158,expr__22159))
);

return deferred.addErrback(((function (deferred,pred__22158,expr__22159){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__22158,expr__22159))
);
});
;})(pred__22158,expr__22159))
} else {
return ((function (pred__22158,expr__22159){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__22158,expr__22159))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__22162,callback){
var map__22165 = p__22162;
var map__22165__$1 = ((((!((map__22165 == null)))?((((map__22165.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22165.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22165):map__22165);
var file_msg = map__22165__$1;
var request_url = cljs.core.get.call(null,map__22165__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__22165,map__22165__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__22165,map__22165__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__19017__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19017__auto__){
return (function (){
var f__19018__auto__ = (function (){var switch__18905__auto__ = ((function (c__19017__auto__){
return (function (state_22189){
var state_val_22190 = (state_22189[(1)]);
if((state_val_22190 === (7))){
var inst_22185 = (state_22189[(2)]);
var state_22189__$1 = state_22189;
var statearr_22191_22211 = state_22189__$1;
(statearr_22191_22211[(2)] = inst_22185);

(statearr_22191_22211[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22190 === (1))){
var state_22189__$1 = state_22189;
var statearr_22192_22212 = state_22189__$1;
(statearr_22192_22212[(2)] = null);

(statearr_22192_22212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22190 === (4))){
var inst_22169 = (state_22189[(7)]);
var inst_22169__$1 = (state_22189[(2)]);
var state_22189__$1 = (function (){var statearr_22193 = state_22189;
(statearr_22193[(7)] = inst_22169__$1);

return statearr_22193;
})();
if(cljs.core.truth_(inst_22169__$1)){
var statearr_22194_22213 = state_22189__$1;
(statearr_22194_22213[(1)] = (5));

} else {
var statearr_22195_22214 = state_22189__$1;
(statearr_22195_22214[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22190 === (6))){
var state_22189__$1 = state_22189;
var statearr_22196_22215 = state_22189__$1;
(statearr_22196_22215[(2)] = null);

(statearr_22196_22215[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22190 === (3))){
var inst_22187 = (state_22189[(2)]);
var state_22189__$1 = state_22189;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22189__$1,inst_22187);
} else {
if((state_val_22190 === (2))){
var state_22189__$1 = state_22189;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22189__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_22190 === (11))){
var inst_22181 = (state_22189[(2)]);
var state_22189__$1 = (function (){var statearr_22197 = state_22189;
(statearr_22197[(8)] = inst_22181);

return statearr_22197;
})();
var statearr_22198_22216 = state_22189__$1;
(statearr_22198_22216[(2)] = null);

(statearr_22198_22216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22190 === (9))){
var inst_22175 = (state_22189[(9)]);
var inst_22173 = (state_22189[(10)]);
var inst_22177 = inst_22175.call(null,inst_22173);
var state_22189__$1 = state_22189;
var statearr_22199_22217 = state_22189__$1;
(statearr_22199_22217[(2)] = inst_22177);

(statearr_22199_22217[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22190 === (5))){
var inst_22169 = (state_22189[(7)]);
var inst_22171 = figwheel.client.file_reloading.blocking_load.call(null,inst_22169);
var state_22189__$1 = state_22189;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22189__$1,(8),inst_22171);
} else {
if((state_val_22190 === (10))){
var inst_22173 = (state_22189[(10)]);
var inst_22179 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_22173);
var state_22189__$1 = state_22189;
var statearr_22200_22218 = state_22189__$1;
(statearr_22200_22218[(2)] = inst_22179);

(statearr_22200_22218[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22190 === (8))){
var inst_22175 = (state_22189[(9)]);
var inst_22169 = (state_22189[(7)]);
var inst_22173 = (state_22189[(2)]);
var inst_22174 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_22175__$1 = cljs.core.get.call(null,inst_22174,inst_22169);
var state_22189__$1 = (function (){var statearr_22201 = state_22189;
(statearr_22201[(9)] = inst_22175__$1);

(statearr_22201[(10)] = inst_22173);

return statearr_22201;
})();
if(cljs.core.truth_(inst_22175__$1)){
var statearr_22202_22219 = state_22189__$1;
(statearr_22202_22219[(1)] = (9));

} else {
var statearr_22203_22220 = state_22189__$1;
(statearr_22203_22220[(1)] = (10));

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
});})(c__19017__auto__))
;
return ((function (switch__18905__auto__,c__19017__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__18906__auto__ = null;
var figwheel$client$file_reloading$state_machine__18906__auto____0 = (function (){
var statearr_22207 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22207[(0)] = figwheel$client$file_reloading$state_machine__18906__auto__);

(statearr_22207[(1)] = (1));

return statearr_22207;
});
var figwheel$client$file_reloading$state_machine__18906__auto____1 = (function (state_22189){
while(true){
var ret_value__18907__auto__ = (function (){try{while(true){
var result__18908__auto__ = switch__18905__auto__.call(null,state_22189);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18908__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18908__auto__;
}
break;
}
}catch (e22208){if((e22208 instanceof Object)){
var ex__18909__auto__ = e22208;
var statearr_22209_22221 = state_22189;
(statearr_22209_22221[(5)] = ex__18909__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22189);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22208;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18907__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22222 = state_22189;
state_22189 = G__22222;
continue;
} else {
return ret_value__18907__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__18906__auto__ = function(state_22189){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__18906__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__18906__auto____1.call(this,state_22189);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__18906__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__18906__auto____0;
figwheel$client$file_reloading$state_machine__18906__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__18906__auto____1;
return figwheel$client$file_reloading$state_machine__18906__auto__;
})()
;})(switch__18905__auto__,c__19017__auto__))
})();
var state__19019__auto__ = (function (){var statearr_22210 = f__19018__auto__.call(null);
(statearr_22210[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19017__auto__);

return statearr_22210;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19019__auto__);
});})(c__19017__auto__))
);

return c__19017__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__22223,callback){
var map__22226 = p__22223;
var map__22226__$1 = ((((!((map__22226 == null)))?((((map__22226.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22226.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22226):map__22226);
var file_msg = map__22226__$1;
var namespace = cljs.core.get.call(null,map__22226__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__22226,map__22226__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__22226,map__22226__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__22228){
var map__22231 = p__22228;
var map__22231__$1 = ((((!((map__22231 == null)))?((((map__22231.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22231.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22231):map__22231);
var file_msg = map__22231__$1;
var namespace = cljs.core.get.call(null,map__22231__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16852__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16852__auto__){
var or__16864__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16864__auto__)){
return or__16864__auto__;
} else {
var or__16864__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16864__auto____$1)){
return or__16864__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16852__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__22233,callback){
var map__22236 = p__22233;
var map__22236__$1 = ((((!((map__22236 == null)))?((((map__22236.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22236.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22236):map__22236);
var file_msg = map__22236__$1;
var request_url = cljs.core.get.call(null,map__22236__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__22236__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__19017__auto___22324 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19017__auto___22324,out){
return (function (){
var f__19018__auto__ = (function (){var switch__18905__auto__ = ((function (c__19017__auto___22324,out){
return (function (state_22306){
var state_val_22307 = (state_22306[(1)]);
if((state_val_22307 === (1))){
var inst_22284 = cljs.core.nth.call(null,files,(0),null);
var inst_22285 = cljs.core.nthnext.call(null,files,(1));
var inst_22286 = files;
var state_22306__$1 = (function (){var statearr_22308 = state_22306;
(statearr_22308[(7)] = inst_22286);

(statearr_22308[(8)] = inst_22285);

(statearr_22308[(9)] = inst_22284);

return statearr_22308;
})();
var statearr_22309_22325 = state_22306__$1;
(statearr_22309_22325[(2)] = null);

(statearr_22309_22325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22307 === (2))){
var inst_22286 = (state_22306[(7)]);
var inst_22289 = (state_22306[(10)]);
var inst_22289__$1 = cljs.core.nth.call(null,inst_22286,(0),null);
var inst_22290 = cljs.core.nthnext.call(null,inst_22286,(1));
var inst_22291 = (inst_22289__$1 == null);
var inst_22292 = cljs.core.not.call(null,inst_22291);
var state_22306__$1 = (function (){var statearr_22310 = state_22306;
(statearr_22310[(11)] = inst_22290);

(statearr_22310[(10)] = inst_22289__$1);

return statearr_22310;
})();
if(inst_22292){
var statearr_22311_22326 = state_22306__$1;
(statearr_22311_22326[(1)] = (4));

} else {
var statearr_22312_22327 = state_22306__$1;
(statearr_22312_22327[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22307 === (3))){
var inst_22304 = (state_22306[(2)]);
var state_22306__$1 = state_22306;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22306__$1,inst_22304);
} else {
if((state_val_22307 === (4))){
var inst_22289 = (state_22306[(10)]);
var inst_22294 = figwheel.client.file_reloading.reload_js_file.call(null,inst_22289);
var state_22306__$1 = state_22306;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22306__$1,(7),inst_22294);
} else {
if((state_val_22307 === (5))){
var inst_22300 = cljs.core.async.close_BANG_.call(null,out);
var state_22306__$1 = state_22306;
var statearr_22313_22328 = state_22306__$1;
(statearr_22313_22328[(2)] = inst_22300);

(statearr_22313_22328[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22307 === (6))){
var inst_22302 = (state_22306[(2)]);
var state_22306__$1 = state_22306;
var statearr_22314_22329 = state_22306__$1;
(statearr_22314_22329[(2)] = inst_22302);

(statearr_22314_22329[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22307 === (7))){
var inst_22290 = (state_22306[(11)]);
var inst_22296 = (state_22306[(2)]);
var inst_22297 = cljs.core.async.put_BANG_.call(null,out,inst_22296);
var inst_22286 = inst_22290;
var state_22306__$1 = (function (){var statearr_22315 = state_22306;
(statearr_22315[(7)] = inst_22286);

(statearr_22315[(12)] = inst_22297);

return statearr_22315;
})();
var statearr_22316_22330 = state_22306__$1;
(statearr_22316_22330[(2)] = null);

(statearr_22316_22330[(1)] = (2));


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
});})(c__19017__auto___22324,out))
;
return ((function (switch__18905__auto__,c__19017__auto___22324,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18906__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18906__auto____0 = (function (){
var statearr_22320 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22320[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18906__auto__);

(statearr_22320[(1)] = (1));

return statearr_22320;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18906__auto____1 = (function (state_22306){
while(true){
var ret_value__18907__auto__ = (function (){try{while(true){
var result__18908__auto__ = switch__18905__auto__.call(null,state_22306);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18908__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18908__auto__;
}
break;
}
}catch (e22321){if((e22321 instanceof Object)){
var ex__18909__auto__ = e22321;
var statearr_22322_22331 = state_22306;
(statearr_22322_22331[(5)] = ex__18909__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22306);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22321;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18907__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22332 = state_22306;
state_22306 = G__22332;
continue;
} else {
return ret_value__18907__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18906__auto__ = function(state_22306){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18906__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18906__auto____1.call(this,state_22306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18906__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18906__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18906__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18906__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18906__auto__;
})()
;})(switch__18905__auto__,c__19017__auto___22324,out))
})();
var state__19019__auto__ = (function (){var statearr_22323 = f__19018__auto__.call(null);
(statearr_22323[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19017__auto___22324);

return statearr_22323;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19019__auto__);
});})(c__19017__auto___22324,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__22333,opts){
var map__22337 = p__22333;
var map__22337__$1 = ((((!((map__22337 == null)))?((((map__22337.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22337.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22337):map__22337);
var eval_body__$1 = cljs.core.get.call(null,map__22337__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__22337__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16852__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16852__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16852__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e22339){var e = e22339;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__22340_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__22340_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
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
return cljs.core.map.call(null,(function (p__22345){
var vec__22346 = p__22345;
var k = cljs.core.nth.call(null,vec__22346,(0),null);
var v = cljs.core.nth.call(null,vec__22346,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__22347){
var vec__22348 = p__22347;
var k = cljs.core.nth.call(null,vec__22348,(0),null);
var v = cljs.core.nth.call(null,vec__22348,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__22352,p__22353){
var map__22600 = p__22352;
var map__22600__$1 = ((((!((map__22600 == null)))?((((map__22600.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22600.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22600):map__22600);
var opts = map__22600__$1;
var before_jsload = cljs.core.get.call(null,map__22600__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__22600__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__22600__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__22601 = p__22353;
var map__22601__$1 = ((((!((map__22601 == null)))?((((map__22601.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22601.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22601):map__22601);
var msg = map__22601__$1;
var files = cljs.core.get.call(null,map__22601__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__22601__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__22601__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__19017__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19017__auto__,map__22600,map__22600__$1,opts,before_jsload,on_jsload,reload_dependents,map__22601,map__22601__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__19018__auto__ = (function (){var switch__18905__auto__ = ((function (c__19017__auto__,map__22600,map__22600__$1,opts,before_jsload,on_jsload,reload_dependents,map__22601,map__22601__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_22754){
var state_val_22755 = (state_22754[(1)]);
if((state_val_22755 === (7))){
var inst_22615 = (state_22754[(7)]);
var inst_22617 = (state_22754[(8)]);
var inst_22618 = (state_22754[(9)]);
var inst_22616 = (state_22754[(10)]);
var inst_22623 = cljs.core._nth.call(null,inst_22616,inst_22618);
var inst_22624 = figwheel.client.file_reloading.eval_body.call(null,inst_22623,opts);
var inst_22625 = (inst_22618 + (1));
var tmp22756 = inst_22615;
var tmp22757 = inst_22617;
var tmp22758 = inst_22616;
var inst_22615__$1 = tmp22756;
var inst_22616__$1 = tmp22758;
var inst_22617__$1 = tmp22757;
var inst_22618__$1 = inst_22625;
var state_22754__$1 = (function (){var statearr_22759 = state_22754;
(statearr_22759[(7)] = inst_22615__$1);

(statearr_22759[(8)] = inst_22617__$1);

(statearr_22759[(9)] = inst_22618__$1);

(statearr_22759[(10)] = inst_22616__$1);

(statearr_22759[(11)] = inst_22624);

return statearr_22759;
})();
var statearr_22760_22846 = state_22754__$1;
(statearr_22760_22846[(2)] = null);

(statearr_22760_22846[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22755 === (20))){
var inst_22658 = (state_22754[(12)]);
var inst_22666 = figwheel.client.file_reloading.sort_files.call(null,inst_22658);
var state_22754__$1 = state_22754;
var statearr_22761_22847 = state_22754__$1;
(statearr_22761_22847[(2)] = inst_22666);

(statearr_22761_22847[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22755 === (27))){
var state_22754__$1 = state_22754;
var statearr_22762_22848 = state_22754__$1;
(statearr_22762_22848[(2)] = null);

(statearr_22762_22848[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22755 === (1))){
var inst_22607 = (state_22754[(13)]);
var inst_22604 = before_jsload.call(null,files);
var inst_22605 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_22606 = (function (){return ((function (inst_22607,inst_22604,inst_22605,state_val_22755,c__19017__auto__,map__22600,map__22600__$1,opts,before_jsload,on_jsload,reload_dependents,map__22601,map__22601__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__22349_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__22349_SHARP_);
});
;})(inst_22607,inst_22604,inst_22605,state_val_22755,c__19017__auto__,map__22600,map__22600__$1,opts,before_jsload,on_jsload,reload_dependents,map__22601,map__22601__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22607__$1 = cljs.core.filter.call(null,inst_22606,files);
var inst_22608 = cljs.core.not_empty.call(null,inst_22607__$1);
var state_22754__$1 = (function (){var statearr_22763 = state_22754;
(statearr_22763[(14)] = inst_22605);

(statearr_22763[(15)] = inst_22604);

(statearr_22763[(13)] = inst_22607__$1);

return statearr_22763;
})();
if(cljs.core.truth_(inst_22608)){
var statearr_22764_22849 = state_22754__$1;
(statearr_22764_22849[(1)] = (2));

} else {
var statearr_22765_22850 = state_22754__$1;
(statearr_22765_22850[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22755 === (24))){
var state_22754__$1 = state_22754;
var statearr_22766_22851 = state_22754__$1;
(statearr_22766_22851[(2)] = null);

(statearr_22766_22851[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22755 === (39))){
var inst_22708 = (state_22754[(16)]);
var state_22754__$1 = state_22754;
var statearr_22767_22852 = state_22754__$1;
(statearr_22767_22852[(2)] = inst_22708);

(statearr_22767_22852[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22755 === (46))){
var inst_22749 = (state_22754[(2)]);
var state_22754__$1 = state_22754;
var statearr_22768_22853 = state_22754__$1;
(statearr_22768_22853[(2)] = inst_22749);

(statearr_22768_22853[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22755 === (4))){
var inst_22652 = (state_22754[(2)]);
var inst_22653 = cljs.core.List.EMPTY;
var inst_22654 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_22653);
var inst_22655 = (function (){return ((function (inst_22652,inst_22653,inst_22654,state_val_22755,c__19017__auto__,map__22600,map__22600__$1,opts,before_jsload,on_jsload,reload_dependents,map__22601,map__22601__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__22350_SHARP_){
var and__16852__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__22350_SHARP_);
if(cljs.core.truth_(and__16852__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__22350_SHARP_));
} else {
return and__16852__auto__;
}
});
;})(inst_22652,inst_22653,inst_22654,state_val_22755,c__19017__auto__,map__22600,map__22600__$1,opts,before_jsload,on_jsload,reload_dependents,map__22601,map__22601__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22656 = cljs.core.filter.call(null,inst_22655,files);
var inst_22657 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_22658 = cljs.core.concat.call(null,inst_22656,inst_22657);
var state_22754__$1 = (function (){var statearr_22769 = state_22754;
(statearr_22769[(17)] = inst_22652);

(statearr_22769[(18)] = inst_22654);

(statearr_22769[(12)] = inst_22658);

return statearr_22769;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_22770_22854 = state_22754__$1;
(statearr_22770_22854[(1)] = (16));

} else {
var statearr_22771_22855 = state_22754__$1;
(statearr_22771_22855[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22755 === (15))){
var inst_22642 = (state_22754[(2)]);
var state_22754__$1 = state_22754;
var statearr_22772_22856 = state_22754__$1;
(statearr_22772_22856[(2)] = inst_22642);

(statearr_22772_22856[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22755 === (21))){
var inst_22668 = (state_22754[(19)]);
var inst_22668__$1 = (state_22754[(2)]);
var inst_22669 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_22668__$1);
var state_22754__$1 = (function (){var statearr_22773 = state_22754;
(statearr_22773[(19)] = inst_22668__$1);

return statearr_22773;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22754__$1,(22),inst_22669);
} else {
if((state_val_22755 === (31))){
var inst_22752 = (state_22754[(2)]);
var state_22754__$1 = state_22754;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22754__$1,inst_22752);
} else {
if((state_val_22755 === (32))){
var inst_22708 = (state_22754[(16)]);
var inst_22713 = inst_22708.cljs$lang$protocol_mask$partition0$;
var inst_22714 = (inst_22713 & (64));
var inst_22715 = inst_22708.cljs$core$ISeq$;
var inst_22716 = (inst_22714) || (inst_22715);
var state_22754__$1 = state_22754;
if(cljs.core.truth_(inst_22716)){
var statearr_22774_22857 = state_22754__$1;
(statearr_22774_22857[(1)] = (35));

} else {
var statearr_22775_22858 = state_22754__$1;
(statearr_22775_22858[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22755 === (40))){
var inst_22729 = (state_22754[(20)]);
var inst_22728 = (state_22754[(2)]);
var inst_22729__$1 = cljs.core.get.call(null,inst_22728,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_22730 = cljs.core.get.call(null,inst_22728,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_22731 = cljs.core.not_empty.call(null,inst_22729__$1);
var state_22754__$1 = (function (){var statearr_22776 = state_22754;
(statearr_22776[(20)] = inst_22729__$1);

(statearr_22776[(21)] = inst_22730);

return statearr_22776;
})();
if(cljs.core.truth_(inst_22731)){
var statearr_22777_22859 = state_22754__$1;
(statearr_22777_22859[(1)] = (41));

} else {
var statearr_22778_22860 = state_22754__$1;
(statearr_22778_22860[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22755 === (33))){
var state_22754__$1 = state_22754;
var statearr_22779_22861 = state_22754__$1;
(statearr_22779_22861[(2)] = false);

(statearr_22779_22861[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22755 === (13))){
var inst_22628 = (state_22754[(22)]);
var inst_22632 = cljs.core.chunk_first.call(null,inst_22628);
var inst_22633 = cljs.core.chunk_rest.call(null,inst_22628);
var inst_22634 = cljs.core.count.call(null,inst_22632);
var inst_22615 = inst_22633;
var inst_22616 = inst_22632;
var inst_22617 = inst_22634;
var inst_22618 = (0);
var state_22754__$1 = (function (){var statearr_22780 = state_22754;
(statearr_22780[(7)] = inst_22615);

(statearr_22780[(8)] = inst_22617);

(statearr_22780[(9)] = inst_22618);

(statearr_22780[(10)] = inst_22616);

return statearr_22780;
})();
var statearr_22781_22862 = state_22754__$1;
(statearr_22781_22862[(2)] = null);

(statearr_22781_22862[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22755 === (22))){
var inst_22672 = (state_22754[(23)]);
var inst_22668 = (state_22754[(19)]);
var inst_22676 = (state_22754[(24)]);
var inst_22671 = (state_22754[(25)]);
var inst_22671__$1 = (state_22754[(2)]);
var inst_22672__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_22671__$1);
var inst_22673 = (function (){var all_files = inst_22668;
var res_SINGLEQUOTE_ = inst_22671__$1;
var res = inst_22672__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_22672,inst_22668,inst_22676,inst_22671,inst_22671__$1,inst_22672__$1,state_val_22755,c__19017__auto__,map__22600,map__22600__$1,opts,before_jsload,on_jsload,reload_dependents,map__22601,map__22601__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__22351_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__22351_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_22672,inst_22668,inst_22676,inst_22671,inst_22671__$1,inst_22672__$1,state_val_22755,c__19017__auto__,map__22600,map__22600__$1,opts,before_jsload,on_jsload,reload_dependents,map__22601,map__22601__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22674 = cljs.core.filter.call(null,inst_22673,inst_22671__$1);
var inst_22675 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_22676__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_22675);
var inst_22677 = cljs.core.not_empty.call(null,inst_22676__$1);
var state_22754__$1 = (function (){var statearr_22782 = state_22754;
(statearr_22782[(23)] = inst_22672__$1);

(statearr_22782[(26)] = inst_22674);

(statearr_22782[(24)] = inst_22676__$1);

(statearr_22782[(25)] = inst_22671__$1);

return statearr_22782;
})();
if(cljs.core.truth_(inst_22677)){
var statearr_22783_22863 = state_22754__$1;
(statearr_22783_22863[(1)] = (23));

} else {
var statearr_22784_22864 = state_22754__$1;
(statearr_22784_22864[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22755 === (36))){
var state_22754__$1 = state_22754;
var statearr_22785_22865 = state_22754__$1;
(statearr_22785_22865[(2)] = false);

(statearr_22785_22865[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22755 === (41))){
var inst_22729 = (state_22754[(20)]);
var inst_22733 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_22734 = cljs.core.map.call(null,inst_22733,inst_22729);
var inst_22735 = cljs.core.pr_str.call(null,inst_22734);
var inst_22736 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_22735)].join('');
var inst_22737 = figwheel.client.utils.log.call(null,inst_22736);
var state_22754__$1 = state_22754;
var statearr_22786_22866 = state_22754__$1;
(statearr_22786_22866[(2)] = inst_22737);

(statearr_22786_22866[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22755 === (43))){
var inst_22730 = (state_22754[(21)]);
var inst_22740 = (state_22754[(2)]);
var inst_22741 = cljs.core.not_empty.call(null,inst_22730);
var state_22754__$1 = (function (){var statearr_22787 = state_22754;
(statearr_22787[(27)] = inst_22740);

return statearr_22787;
})();
if(cljs.core.truth_(inst_22741)){
var statearr_22788_22867 = state_22754__$1;
(statearr_22788_22867[(1)] = (44));

} else {
var statearr_22789_22868 = state_22754__$1;
(statearr_22789_22868[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22755 === (29))){
var inst_22672 = (state_22754[(23)]);
var inst_22668 = (state_22754[(19)]);
var inst_22674 = (state_22754[(26)]);
var inst_22676 = (state_22754[(24)]);
var inst_22708 = (state_22754[(16)]);
var inst_22671 = (state_22754[(25)]);
var inst_22704 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_22707 = (function (){var all_files = inst_22668;
var res_SINGLEQUOTE_ = inst_22671;
var res = inst_22672;
var files_not_loaded = inst_22674;
var dependencies_that_loaded = inst_22676;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22672,inst_22668,inst_22674,inst_22676,inst_22708,inst_22671,inst_22704,state_val_22755,c__19017__auto__,map__22600,map__22600__$1,opts,before_jsload,on_jsload,reload_dependents,map__22601,map__22601__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__22706){
var map__22790 = p__22706;
var map__22790__$1 = ((((!((map__22790 == null)))?((((map__22790.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22790.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22790):map__22790);
var namespace = cljs.core.get.call(null,map__22790__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22672,inst_22668,inst_22674,inst_22676,inst_22708,inst_22671,inst_22704,state_val_22755,c__19017__auto__,map__22600,map__22600__$1,opts,before_jsload,on_jsload,reload_dependents,map__22601,map__22601__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22708__$1 = cljs.core.group_by.call(null,inst_22707,inst_22674);
var inst_22710 = (inst_22708__$1 == null);
var inst_22711 = cljs.core.not.call(null,inst_22710);
var state_22754__$1 = (function (){var statearr_22792 = state_22754;
(statearr_22792[(28)] = inst_22704);

(statearr_22792[(16)] = inst_22708__$1);

return statearr_22792;
})();
if(inst_22711){
var statearr_22793_22869 = state_22754__$1;
(statearr_22793_22869[(1)] = (32));

} else {
var statearr_22794_22870 = state_22754__$1;
(statearr_22794_22870[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22755 === (44))){
var inst_22730 = (state_22754[(21)]);
var inst_22743 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_22730);
var inst_22744 = cljs.core.pr_str.call(null,inst_22743);
var inst_22745 = [cljs.core.str("not required: "),cljs.core.str(inst_22744)].join('');
var inst_22746 = figwheel.client.utils.log.call(null,inst_22745);
var state_22754__$1 = state_22754;
var statearr_22795_22871 = state_22754__$1;
(statearr_22795_22871[(2)] = inst_22746);

(statearr_22795_22871[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22755 === (6))){
var inst_22649 = (state_22754[(2)]);
var state_22754__$1 = state_22754;
var statearr_22796_22872 = state_22754__$1;
(statearr_22796_22872[(2)] = inst_22649);

(statearr_22796_22872[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22755 === (28))){
var inst_22674 = (state_22754[(26)]);
var inst_22701 = (state_22754[(2)]);
var inst_22702 = cljs.core.not_empty.call(null,inst_22674);
var state_22754__$1 = (function (){var statearr_22797 = state_22754;
(statearr_22797[(29)] = inst_22701);

return statearr_22797;
})();
if(cljs.core.truth_(inst_22702)){
var statearr_22798_22873 = state_22754__$1;
(statearr_22798_22873[(1)] = (29));

} else {
var statearr_22799_22874 = state_22754__$1;
(statearr_22799_22874[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22755 === (25))){
var inst_22672 = (state_22754[(23)]);
var inst_22688 = (state_22754[(2)]);
var inst_22689 = cljs.core.not_empty.call(null,inst_22672);
var state_22754__$1 = (function (){var statearr_22800 = state_22754;
(statearr_22800[(30)] = inst_22688);

return statearr_22800;
})();
if(cljs.core.truth_(inst_22689)){
var statearr_22801_22875 = state_22754__$1;
(statearr_22801_22875[(1)] = (26));

} else {
var statearr_22802_22876 = state_22754__$1;
(statearr_22802_22876[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22755 === (34))){
var inst_22723 = (state_22754[(2)]);
var state_22754__$1 = state_22754;
if(cljs.core.truth_(inst_22723)){
var statearr_22803_22877 = state_22754__$1;
(statearr_22803_22877[(1)] = (38));

} else {
var statearr_22804_22878 = state_22754__$1;
(statearr_22804_22878[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22755 === (17))){
var state_22754__$1 = state_22754;
var statearr_22805_22879 = state_22754__$1;
(statearr_22805_22879[(2)] = recompile_dependents);

(statearr_22805_22879[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22755 === (3))){
var state_22754__$1 = state_22754;
var statearr_22806_22880 = state_22754__$1;
(statearr_22806_22880[(2)] = null);

(statearr_22806_22880[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22755 === (12))){
var inst_22645 = (state_22754[(2)]);
var state_22754__$1 = state_22754;
var statearr_22807_22881 = state_22754__$1;
(statearr_22807_22881[(2)] = inst_22645);

(statearr_22807_22881[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22755 === (2))){
var inst_22607 = (state_22754[(13)]);
var inst_22614 = cljs.core.seq.call(null,inst_22607);
var inst_22615 = inst_22614;
var inst_22616 = null;
var inst_22617 = (0);
var inst_22618 = (0);
var state_22754__$1 = (function (){var statearr_22808 = state_22754;
(statearr_22808[(7)] = inst_22615);

(statearr_22808[(8)] = inst_22617);

(statearr_22808[(9)] = inst_22618);

(statearr_22808[(10)] = inst_22616);

return statearr_22808;
})();
var statearr_22809_22882 = state_22754__$1;
(statearr_22809_22882[(2)] = null);

(statearr_22809_22882[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22755 === (23))){
var inst_22672 = (state_22754[(23)]);
var inst_22668 = (state_22754[(19)]);
var inst_22674 = (state_22754[(26)]);
var inst_22676 = (state_22754[(24)]);
var inst_22671 = (state_22754[(25)]);
var inst_22679 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_22681 = (function (){var all_files = inst_22668;
var res_SINGLEQUOTE_ = inst_22671;
var res = inst_22672;
var files_not_loaded = inst_22674;
var dependencies_that_loaded = inst_22676;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22672,inst_22668,inst_22674,inst_22676,inst_22671,inst_22679,state_val_22755,c__19017__auto__,map__22600,map__22600__$1,opts,before_jsload,on_jsload,reload_dependents,map__22601,map__22601__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__22680){
var map__22810 = p__22680;
var map__22810__$1 = ((((!((map__22810 == null)))?((((map__22810.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22810.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22810):map__22810);
var request_url = cljs.core.get.call(null,map__22810__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22672,inst_22668,inst_22674,inst_22676,inst_22671,inst_22679,state_val_22755,c__19017__auto__,map__22600,map__22600__$1,opts,before_jsload,on_jsload,reload_dependents,map__22601,map__22601__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22682 = cljs.core.reverse.call(null,inst_22676);
var inst_22683 = cljs.core.map.call(null,inst_22681,inst_22682);
var inst_22684 = cljs.core.pr_str.call(null,inst_22683);
var inst_22685 = figwheel.client.utils.log.call(null,inst_22684);
var state_22754__$1 = (function (){var statearr_22812 = state_22754;
(statearr_22812[(31)] = inst_22679);

return statearr_22812;
})();
var statearr_22813_22883 = state_22754__$1;
(statearr_22813_22883[(2)] = inst_22685);

(statearr_22813_22883[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22755 === (35))){
var state_22754__$1 = state_22754;
var statearr_22814_22884 = state_22754__$1;
(statearr_22814_22884[(2)] = true);

(statearr_22814_22884[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22755 === (19))){
var inst_22658 = (state_22754[(12)]);
var inst_22664 = figwheel.client.file_reloading.expand_files.call(null,inst_22658);
var state_22754__$1 = state_22754;
var statearr_22815_22885 = state_22754__$1;
(statearr_22815_22885[(2)] = inst_22664);

(statearr_22815_22885[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22755 === (11))){
var state_22754__$1 = state_22754;
var statearr_22816_22886 = state_22754__$1;
(statearr_22816_22886[(2)] = null);

(statearr_22816_22886[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22755 === (9))){
var inst_22647 = (state_22754[(2)]);
var state_22754__$1 = state_22754;
var statearr_22817_22887 = state_22754__$1;
(statearr_22817_22887[(2)] = inst_22647);

(statearr_22817_22887[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22755 === (5))){
var inst_22617 = (state_22754[(8)]);
var inst_22618 = (state_22754[(9)]);
var inst_22620 = (inst_22618 < inst_22617);
var inst_22621 = inst_22620;
var state_22754__$1 = state_22754;
if(cljs.core.truth_(inst_22621)){
var statearr_22818_22888 = state_22754__$1;
(statearr_22818_22888[(1)] = (7));

} else {
var statearr_22819_22889 = state_22754__$1;
(statearr_22819_22889[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22755 === (14))){
var inst_22628 = (state_22754[(22)]);
var inst_22637 = cljs.core.first.call(null,inst_22628);
var inst_22638 = figwheel.client.file_reloading.eval_body.call(null,inst_22637,opts);
var inst_22639 = cljs.core.next.call(null,inst_22628);
var inst_22615 = inst_22639;
var inst_22616 = null;
var inst_22617 = (0);
var inst_22618 = (0);
var state_22754__$1 = (function (){var statearr_22820 = state_22754;
(statearr_22820[(7)] = inst_22615);

(statearr_22820[(8)] = inst_22617);

(statearr_22820[(9)] = inst_22618);

(statearr_22820[(10)] = inst_22616);

(statearr_22820[(32)] = inst_22638);

return statearr_22820;
})();
var statearr_22821_22890 = state_22754__$1;
(statearr_22821_22890[(2)] = null);

(statearr_22821_22890[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22755 === (45))){
var state_22754__$1 = state_22754;
var statearr_22822_22891 = state_22754__$1;
(statearr_22822_22891[(2)] = null);

(statearr_22822_22891[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22755 === (26))){
var inst_22672 = (state_22754[(23)]);
var inst_22668 = (state_22754[(19)]);
var inst_22674 = (state_22754[(26)]);
var inst_22676 = (state_22754[(24)]);
var inst_22671 = (state_22754[(25)]);
var inst_22691 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_22693 = (function (){var all_files = inst_22668;
var res_SINGLEQUOTE_ = inst_22671;
var res = inst_22672;
var files_not_loaded = inst_22674;
var dependencies_that_loaded = inst_22676;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22672,inst_22668,inst_22674,inst_22676,inst_22671,inst_22691,state_val_22755,c__19017__auto__,map__22600,map__22600__$1,opts,before_jsload,on_jsload,reload_dependents,map__22601,map__22601__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__22692){
var map__22823 = p__22692;
var map__22823__$1 = ((((!((map__22823 == null)))?((((map__22823.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22823.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22823):map__22823);
var namespace = cljs.core.get.call(null,map__22823__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__22823__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22672,inst_22668,inst_22674,inst_22676,inst_22671,inst_22691,state_val_22755,c__19017__auto__,map__22600,map__22600__$1,opts,before_jsload,on_jsload,reload_dependents,map__22601,map__22601__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22694 = cljs.core.map.call(null,inst_22693,inst_22672);
var inst_22695 = cljs.core.pr_str.call(null,inst_22694);
var inst_22696 = figwheel.client.utils.log.call(null,inst_22695);
var inst_22697 = (function (){var all_files = inst_22668;
var res_SINGLEQUOTE_ = inst_22671;
var res = inst_22672;
var files_not_loaded = inst_22674;
var dependencies_that_loaded = inst_22676;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22672,inst_22668,inst_22674,inst_22676,inst_22671,inst_22691,inst_22693,inst_22694,inst_22695,inst_22696,state_val_22755,c__19017__auto__,map__22600,map__22600__$1,opts,before_jsload,on_jsload,reload_dependents,map__22601,map__22601__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22672,inst_22668,inst_22674,inst_22676,inst_22671,inst_22691,inst_22693,inst_22694,inst_22695,inst_22696,state_val_22755,c__19017__auto__,map__22600,map__22600__$1,opts,before_jsload,on_jsload,reload_dependents,map__22601,map__22601__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22698 = setTimeout(inst_22697,(10));
var state_22754__$1 = (function (){var statearr_22825 = state_22754;
(statearr_22825[(33)] = inst_22691);

(statearr_22825[(34)] = inst_22696);

return statearr_22825;
})();
var statearr_22826_22892 = state_22754__$1;
(statearr_22826_22892[(2)] = inst_22698);

(statearr_22826_22892[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22755 === (16))){
var state_22754__$1 = state_22754;
var statearr_22827_22893 = state_22754__$1;
(statearr_22827_22893[(2)] = reload_dependents);

(statearr_22827_22893[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22755 === (38))){
var inst_22708 = (state_22754[(16)]);
var inst_22725 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22708);
var state_22754__$1 = state_22754;
var statearr_22828_22894 = state_22754__$1;
(statearr_22828_22894[(2)] = inst_22725);

(statearr_22828_22894[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22755 === (30))){
var state_22754__$1 = state_22754;
var statearr_22829_22895 = state_22754__$1;
(statearr_22829_22895[(2)] = null);

(statearr_22829_22895[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22755 === (10))){
var inst_22628 = (state_22754[(22)]);
var inst_22630 = cljs.core.chunked_seq_QMARK_.call(null,inst_22628);
var state_22754__$1 = state_22754;
if(inst_22630){
var statearr_22830_22896 = state_22754__$1;
(statearr_22830_22896[(1)] = (13));

} else {
var statearr_22831_22897 = state_22754__$1;
(statearr_22831_22897[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22755 === (18))){
var inst_22662 = (state_22754[(2)]);
var state_22754__$1 = state_22754;
if(cljs.core.truth_(inst_22662)){
var statearr_22832_22898 = state_22754__$1;
(statearr_22832_22898[(1)] = (19));

} else {
var statearr_22833_22899 = state_22754__$1;
(statearr_22833_22899[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22755 === (42))){
var state_22754__$1 = state_22754;
var statearr_22834_22900 = state_22754__$1;
(statearr_22834_22900[(2)] = null);

(statearr_22834_22900[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22755 === (37))){
var inst_22720 = (state_22754[(2)]);
var state_22754__$1 = state_22754;
var statearr_22835_22901 = state_22754__$1;
(statearr_22835_22901[(2)] = inst_22720);

(statearr_22835_22901[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22755 === (8))){
var inst_22615 = (state_22754[(7)]);
var inst_22628 = (state_22754[(22)]);
var inst_22628__$1 = cljs.core.seq.call(null,inst_22615);
var state_22754__$1 = (function (){var statearr_22836 = state_22754;
(statearr_22836[(22)] = inst_22628__$1);

return statearr_22836;
})();
if(inst_22628__$1){
var statearr_22837_22902 = state_22754__$1;
(statearr_22837_22902[(1)] = (10));

} else {
var statearr_22838_22903 = state_22754__$1;
(statearr_22838_22903[(1)] = (11));

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
});})(c__19017__auto__,map__22600,map__22600__$1,opts,before_jsload,on_jsload,reload_dependents,map__22601,map__22601__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__18905__auto__,c__19017__auto__,map__22600,map__22600__$1,opts,before_jsload,on_jsload,reload_dependents,map__22601,map__22601__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18906__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18906__auto____0 = (function (){
var statearr_22842 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22842[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__18906__auto__);

(statearr_22842[(1)] = (1));

return statearr_22842;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18906__auto____1 = (function (state_22754){
while(true){
var ret_value__18907__auto__ = (function (){try{while(true){
var result__18908__auto__ = switch__18905__auto__.call(null,state_22754);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18908__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18908__auto__;
}
break;
}
}catch (e22843){if((e22843 instanceof Object)){
var ex__18909__auto__ = e22843;
var statearr_22844_22904 = state_22754;
(statearr_22844_22904[(5)] = ex__18909__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22754);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22843;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18907__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22905 = state_22754;
state_22754 = G__22905;
continue;
} else {
return ret_value__18907__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__18906__auto__ = function(state_22754){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18906__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18906__auto____1.call(this,state_22754);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__18906__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__18906__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__18906__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__18906__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18906__auto__;
})()
;})(switch__18905__auto__,c__19017__auto__,map__22600,map__22600__$1,opts,before_jsload,on_jsload,reload_dependents,map__22601,map__22601__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__19019__auto__ = (function (){var statearr_22845 = f__19018__auto__.call(null);
(statearr_22845[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19017__auto__);

return statearr_22845;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19019__auto__);
});})(c__19017__auto__,map__22600,map__22600__$1,opts,before_jsload,on_jsload,reload_dependents,map__22601,map__22601__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__19017__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__22908,link){
var map__22911 = p__22908;
var map__22911__$1 = ((((!((map__22911 == null)))?((((map__22911.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22911.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22911):map__22911);
var file = cljs.core.get.call(null,map__22911__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__22911,map__22911__$1,file){
return (function (p1__22906_SHARP_,p2__22907_SHARP_){
if(cljs.core._EQ_.call(null,p1__22906_SHARP_,p2__22907_SHARP_)){
return p1__22906_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__22911,map__22911__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__22917){
var map__22918 = p__22917;
var map__22918__$1 = ((((!((map__22918 == null)))?((((map__22918.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22918.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22918):map__22918);
var match_length = cljs.core.get.call(null,map__22918__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__22918__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__22913_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__22913_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
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
var args22920 = [];
var len__17922__auto___22923 = arguments.length;
var i__17923__auto___22924 = (0);
while(true){
if((i__17923__auto___22924 < len__17922__auto___22923)){
args22920.push((arguments[i__17923__auto___22924]));

var G__22925 = (i__17923__auto___22924 + (1));
i__17923__auto___22924 = G__22925;
continue;
} else {
}
break;
}

var G__22922 = args22920.length;
switch (G__22922) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22920.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__22927_SHARP_,p2__22928_SHARP_){
return cljs.core.assoc.call(null,p1__22927_SHARP_,cljs.core.get.call(null,p2__22928_SHARP_,key),p2__22928_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__22929){
var map__22932 = p__22929;
var map__22932__$1 = ((((!((map__22932 == null)))?((((map__22932.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22932.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22932):map__22932);
var f_data = map__22932__$1;
var file = cljs.core.get.call(null,map__22932__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__22934,files_msg){
var map__22941 = p__22934;
var map__22941__$1 = ((((!((map__22941 == null)))?((((map__22941.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22941.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22941):map__22941);
var opts = map__22941__$1;
var on_cssload = cljs.core.get.call(null,map__22941__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__22943_22947 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__22944_22948 = null;
var count__22945_22949 = (0);
var i__22946_22950 = (0);
while(true){
if((i__22946_22950 < count__22945_22949)){
var f_22951 = cljs.core._nth.call(null,chunk__22944_22948,i__22946_22950);
figwheel.client.file_reloading.reload_css_file.call(null,f_22951);

var G__22952 = seq__22943_22947;
var G__22953 = chunk__22944_22948;
var G__22954 = count__22945_22949;
var G__22955 = (i__22946_22950 + (1));
seq__22943_22947 = G__22952;
chunk__22944_22948 = G__22953;
count__22945_22949 = G__22954;
i__22946_22950 = G__22955;
continue;
} else {
var temp__4657__auto___22956 = cljs.core.seq.call(null,seq__22943_22947);
if(temp__4657__auto___22956){
var seq__22943_22957__$1 = temp__4657__auto___22956;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22943_22957__$1)){
var c__17667__auto___22958 = cljs.core.chunk_first.call(null,seq__22943_22957__$1);
var G__22959 = cljs.core.chunk_rest.call(null,seq__22943_22957__$1);
var G__22960 = c__17667__auto___22958;
var G__22961 = cljs.core.count.call(null,c__17667__auto___22958);
var G__22962 = (0);
seq__22943_22947 = G__22959;
chunk__22944_22948 = G__22960;
count__22945_22949 = G__22961;
i__22946_22950 = G__22962;
continue;
} else {
var f_22963 = cljs.core.first.call(null,seq__22943_22957__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_22963);

var G__22964 = cljs.core.next.call(null,seq__22943_22957__$1);
var G__22965 = null;
var G__22966 = (0);
var G__22967 = (0);
seq__22943_22947 = G__22964;
chunk__22944_22948 = G__22965;
count__22945_22949 = G__22966;
i__22946_22950 = G__22967;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__22941,map__22941__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__22941,map__22941__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map