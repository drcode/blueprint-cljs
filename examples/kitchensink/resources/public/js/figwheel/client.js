// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__38862 = cljs.core._EQ_;
var expr__38863 = (function (){var or__20097__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__20097__auto__)){
return or__20097__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__38862.call(null,"true",expr__38863))){
return true;
} else {
if(cljs.core.truth_(pred__38862.call(null,"false",expr__38863))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__38863)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__38865__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__38865 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38866__i = 0, G__38866__a = new Array(arguments.length -  0);
while (G__38866__i < G__38866__a.length) {G__38866__a[G__38866__i] = arguments[G__38866__i + 0]; ++G__38866__i;}
  args = new cljs.core.IndexedSeq(G__38866__a,0);
} 
return G__38865__delegate.call(this,args);};
G__38865.cljs$lang$maxFixedArity = 0;
G__38865.cljs$lang$applyTo = (function (arglist__38867){
var args = cljs.core.seq(arglist__38867);
return G__38865__delegate(args);
});
G__38865.cljs$core$IFn$_invoke$arity$variadic = G__38865__delegate;
return G__38865;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__38868){
var map__38871 = p__38868;
var map__38871__$1 = ((((!((map__38871 == null)))?((((map__38871.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38871.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38871):map__38871);
var message = cljs.core.get.call(null,map__38871__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__38871__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__20097__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__20097__auto__)){
return or__20097__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__20085__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__20085__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__20085__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__33236__auto___39033 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33236__auto___39033,ch){
return (function (){
var f__33237__auto__ = (function (){var switch__33122__auto__ = ((function (c__33236__auto___39033,ch){
return (function (state_39002){
var state_val_39003 = (state_39002[(1)]);
if((state_val_39003 === (7))){
var inst_38998 = (state_39002[(2)]);
var state_39002__$1 = state_39002;
var statearr_39004_39034 = state_39002__$1;
(statearr_39004_39034[(2)] = inst_38998);

(statearr_39004_39034[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39003 === (1))){
var state_39002__$1 = state_39002;
var statearr_39005_39035 = state_39002__$1;
(statearr_39005_39035[(2)] = null);

(statearr_39005_39035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39003 === (4))){
var inst_38955 = (state_39002[(7)]);
var inst_38955__$1 = (state_39002[(2)]);
var state_39002__$1 = (function (){var statearr_39006 = state_39002;
(statearr_39006[(7)] = inst_38955__$1);

return statearr_39006;
})();
if(cljs.core.truth_(inst_38955__$1)){
var statearr_39007_39036 = state_39002__$1;
(statearr_39007_39036[(1)] = (5));

} else {
var statearr_39008_39037 = state_39002__$1;
(statearr_39008_39037[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39003 === (15))){
var inst_38962 = (state_39002[(8)]);
var inst_38977 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_38962);
var inst_38978 = cljs.core.first.call(null,inst_38977);
var inst_38979 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_38978);
var inst_38980 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_38979)].join('');
var inst_38981 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_38980);
var state_39002__$1 = state_39002;
var statearr_39009_39038 = state_39002__$1;
(statearr_39009_39038[(2)] = inst_38981);

(statearr_39009_39038[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39003 === (13))){
var inst_38986 = (state_39002[(2)]);
var state_39002__$1 = state_39002;
var statearr_39010_39039 = state_39002__$1;
(statearr_39010_39039[(2)] = inst_38986);

(statearr_39010_39039[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39003 === (6))){
var state_39002__$1 = state_39002;
var statearr_39011_39040 = state_39002__$1;
(statearr_39011_39040[(2)] = null);

(statearr_39011_39040[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39003 === (17))){
var inst_38984 = (state_39002[(2)]);
var state_39002__$1 = state_39002;
var statearr_39012_39041 = state_39002__$1;
(statearr_39012_39041[(2)] = inst_38984);

(statearr_39012_39041[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39003 === (3))){
var inst_39000 = (state_39002[(2)]);
var state_39002__$1 = state_39002;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39002__$1,inst_39000);
} else {
if((state_val_39003 === (12))){
var inst_38961 = (state_39002[(9)]);
var inst_38975 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_38961,opts);
var state_39002__$1 = state_39002;
if(cljs.core.truth_(inst_38975)){
var statearr_39013_39042 = state_39002__$1;
(statearr_39013_39042[(1)] = (15));

} else {
var statearr_39014_39043 = state_39002__$1;
(statearr_39014_39043[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39003 === (2))){
var state_39002__$1 = state_39002;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39002__$1,(4),ch);
} else {
if((state_val_39003 === (11))){
var inst_38962 = (state_39002[(8)]);
var inst_38967 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38968 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_38962);
var inst_38969 = cljs.core.async.timeout.call(null,(1000));
var inst_38970 = [inst_38968,inst_38969];
var inst_38971 = (new cljs.core.PersistentVector(null,2,(5),inst_38967,inst_38970,null));
var state_39002__$1 = state_39002;
return cljs.core.async.ioc_alts_BANG_.call(null,state_39002__$1,(14),inst_38971);
} else {
if((state_val_39003 === (9))){
var inst_38962 = (state_39002[(8)]);
var inst_38988 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_38989 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_38962);
var inst_38990 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_38989);
var inst_38991 = [cljs.core.str("Not loading: "),cljs.core.str(inst_38990)].join('');
var inst_38992 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_38991);
var state_39002__$1 = (function (){var statearr_39015 = state_39002;
(statearr_39015[(10)] = inst_38988);

return statearr_39015;
})();
var statearr_39016_39044 = state_39002__$1;
(statearr_39016_39044[(2)] = inst_38992);

(statearr_39016_39044[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39003 === (5))){
var inst_38955 = (state_39002[(7)]);
var inst_38957 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_38958 = (new cljs.core.PersistentArrayMap(null,2,inst_38957,null));
var inst_38959 = (new cljs.core.PersistentHashSet(null,inst_38958,null));
var inst_38960 = figwheel.client.focus_msgs.call(null,inst_38959,inst_38955);
var inst_38961 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_38960);
var inst_38962 = cljs.core.first.call(null,inst_38960);
var inst_38963 = figwheel.client.autoload_QMARK_.call(null);
var state_39002__$1 = (function (){var statearr_39017 = state_39002;
(statearr_39017[(9)] = inst_38961);

(statearr_39017[(8)] = inst_38962);

return statearr_39017;
})();
if(cljs.core.truth_(inst_38963)){
var statearr_39018_39045 = state_39002__$1;
(statearr_39018_39045[(1)] = (8));

} else {
var statearr_39019_39046 = state_39002__$1;
(statearr_39019_39046[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39003 === (14))){
var inst_38973 = (state_39002[(2)]);
var state_39002__$1 = state_39002;
var statearr_39020_39047 = state_39002__$1;
(statearr_39020_39047[(2)] = inst_38973);

(statearr_39020_39047[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39003 === (16))){
var state_39002__$1 = state_39002;
var statearr_39021_39048 = state_39002__$1;
(statearr_39021_39048[(2)] = null);

(statearr_39021_39048[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39003 === (10))){
var inst_38994 = (state_39002[(2)]);
var state_39002__$1 = (function (){var statearr_39022 = state_39002;
(statearr_39022[(11)] = inst_38994);

return statearr_39022;
})();
var statearr_39023_39049 = state_39002__$1;
(statearr_39023_39049[(2)] = null);

(statearr_39023_39049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39003 === (8))){
var inst_38961 = (state_39002[(9)]);
var inst_38965 = figwheel.client.reload_file_state_QMARK_.call(null,inst_38961,opts);
var state_39002__$1 = state_39002;
if(cljs.core.truth_(inst_38965)){
var statearr_39024_39050 = state_39002__$1;
(statearr_39024_39050[(1)] = (11));

} else {
var statearr_39025_39051 = state_39002__$1;
(statearr_39025_39051[(1)] = (12));

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
});})(c__33236__auto___39033,ch))
;
return ((function (switch__33122__auto__,c__33236__auto___39033,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__33123__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__33123__auto____0 = (function (){
var statearr_39029 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39029[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__33123__auto__);

(statearr_39029[(1)] = (1));

return statearr_39029;
});
var figwheel$client$file_reloader_plugin_$_state_machine__33123__auto____1 = (function (state_39002){
while(true){
var ret_value__33124__auto__ = (function (){try{while(true){
var result__33125__auto__ = switch__33122__auto__.call(null,state_39002);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33125__auto__;
}
break;
}
}catch (e39030){if((e39030 instanceof Object)){
var ex__33126__auto__ = e39030;
var statearr_39031_39052 = state_39002;
(statearr_39031_39052[(5)] = ex__33126__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39002);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39030;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33124__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39053 = state_39002;
state_39002 = G__39053;
continue;
} else {
return ret_value__33124__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__33123__auto__ = function(state_39002){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__33123__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__33123__auto____1.call(this,state_39002);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__33123__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__33123__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__33123__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__33123__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__33123__auto__;
})()
;})(switch__33122__auto__,c__33236__auto___39033,ch))
})();
var state__33238__auto__ = (function (){var statearr_39032 = f__33237__auto__.call(null);
(statearr_39032[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33236__auto___39033);

return statearr_39032;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33238__auto__);
});})(c__33236__auto___39033,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__39054_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__39054_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_39061 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_39061){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_39059 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_39060 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_39059,_STAR_print_newline_STAR_39060,base_path_39061){
return (function() { 
var G__39062__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__39062 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39063__i = 0, G__39063__a = new Array(arguments.length -  0);
while (G__39063__i < G__39063__a.length) {G__39063__a[G__39063__i] = arguments[G__39063__i + 0]; ++G__39063__i;}
  args = new cljs.core.IndexedSeq(G__39063__a,0);
} 
return G__39062__delegate.call(this,args);};
G__39062.cljs$lang$maxFixedArity = 0;
G__39062.cljs$lang$applyTo = (function (arglist__39064){
var args = cljs.core.seq(arglist__39064);
return G__39062__delegate(args);
});
G__39062.cljs$core$IFn$_invoke$arity$variadic = G__39062__delegate;
return G__39062;
})()
;})(_STAR_print_fn_STAR_39059,_STAR_print_newline_STAR_39060,base_path_39061))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_39060;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_39059;
}}catch (e39058){if((e39058 instanceof Error)){
var e = e39058;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_39061], null));
} else {
var e = e39058;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_39061))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__39065){
var map__39074 = p__39065;
var map__39074__$1 = ((((!((map__39074 == null)))?((((map__39074.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39074.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39074):map__39074);
var opts = map__39074__$1;
var build_id = cljs.core.get.call(null,map__39074__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__39074,map__39074__$1,opts,build_id){
return (function (p__39076){
var vec__39077 = p__39076;
var seq__39078 = cljs.core.seq.call(null,vec__39077);
var first__39079 = cljs.core.first.call(null,seq__39078);
var seq__39078__$1 = cljs.core.next.call(null,seq__39078);
var map__39080 = first__39079;
var map__39080__$1 = ((((!((map__39080 == null)))?((((map__39080.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39080.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39080):map__39080);
var msg = map__39080__$1;
var msg_name = cljs.core.get.call(null,map__39080__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39078__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__39077,seq__39078,first__39079,seq__39078__$1,map__39080,map__39080__$1,msg,msg_name,_,map__39074,map__39074__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__39077,seq__39078,first__39079,seq__39078__$1,map__39080,map__39080__$1,msg,msg_name,_,map__39074,map__39074__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__39074,map__39074__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__39088){
var vec__39089 = p__39088;
var seq__39090 = cljs.core.seq.call(null,vec__39089);
var first__39091 = cljs.core.first.call(null,seq__39090);
var seq__39090__$1 = cljs.core.next.call(null,seq__39090);
var map__39092 = first__39091;
var map__39092__$1 = ((((!((map__39092 == null)))?((((map__39092.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39092.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39092):map__39092);
var msg = map__39092__$1;
var msg_name = cljs.core.get.call(null,map__39092__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39090__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__39094){
var map__39106 = p__39094;
var map__39106__$1 = ((((!((map__39106 == null)))?((((map__39106.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39106.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39106):map__39106);
var on_compile_warning = cljs.core.get.call(null,map__39106__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__39106__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__39106,map__39106__$1,on_compile_warning,on_compile_fail){
return (function (p__39108){
var vec__39109 = p__39108;
var seq__39110 = cljs.core.seq.call(null,vec__39109);
var first__39111 = cljs.core.first.call(null,seq__39110);
var seq__39110__$1 = cljs.core.next.call(null,seq__39110);
var map__39112 = first__39111;
var map__39112__$1 = ((((!((map__39112 == null)))?((((map__39112.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39112.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39112):map__39112);
var msg = map__39112__$1;
var msg_name = cljs.core.get.call(null,map__39112__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39110__$1;
var pred__39114 = cljs.core._EQ_;
var expr__39115 = msg_name;
if(cljs.core.truth_(pred__39114.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__39115))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__39114.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__39115))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__39106,map__39106__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__33236__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33236__auto__,msg_hist,msg_names,msg){
return (function (){
var f__33237__auto__ = (function (){var switch__33122__auto__ = ((function (c__33236__auto__,msg_hist,msg_names,msg){
return (function (state_39331){
var state_val_39332 = (state_39331[(1)]);
if((state_val_39332 === (7))){
var inst_39255 = (state_39331[(2)]);
var state_39331__$1 = state_39331;
if(cljs.core.truth_(inst_39255)){
var statearr_39333_39379 = state_39331__$1;
(statearr_39333_39379[(1)] = (8));

} else {
var statearr_39334_39380 = state_39331__$1;
(statearr_39334_39380[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39332 === (20))){
var inst_39325 = (state_39331[(2)]);
var state_39331__$1 = state_39331;
var statearr_39335_39381 = state_39331__$1;
(statearr_39335_39381[(2)] = inst_39325);

(statearr_39335_39381[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39332 === (27))){
var inst_39321 = (state_39331[(2)]);
var state_39331__$1 = state_39331;
var statearr_39336_39382 = state_39331__$1;
(statearr_39336_39382[(2)] = inst_39321);

(statearr_39336_39382[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39332 === (1))){
var inst_39248 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_39331__$1 = state_39331;
if(cljs.core.truth_(inst_39248)){
var statearr_39337_39383 = state_39331__$1;
(statearr_39337_39383[(1)] = (2));

} else {
var statearr_39338_39384 = state_39331__$1;
(statearr_39338_39384[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39332 === (24))){
var inst_39323 = (state_39331[(2)]);
var state_39331__$1 = state_39331;
var statearr_39339_39385 = state_39331__$1;
(statearr_39339_39385[(2)] = inst_39323);

(statearr_39339_39385[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39332 === (4))){
var inst_39329 = (state_39331[(2)]);
var state_39331__$1 = state_39331;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39331__$1,inst_39329);
} else {
if((state_val_39332 === (15))){
var inst_39327 = (state_39331[(2)]);
var state_39331__$1 = state_39331;
var statearr_39340_39386 = state_39331__$1;
(statearr_39340_39386[(2)] = inst_39327);

(statearr_39340_39386[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39332 === (21))){
var inst_39286 = (state_39331[(2)]);
var state_39331__$1 = state_39331;
var statearr_39341_39387 = state_39331__$1;
(statearr_39341_39387[(2)] = inst_39286);

(statearr_39341_39387[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39332 === (31))){
var inst_39310 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_39331__$1 = state_39331;
if(cljs.core.truth_(inst_39310)){
var statearr_39342_39388 = state_39331__$1;
(statearr_39342_39388[(1)] = (34));

} else {
var statearr_39343_39389 = state_39331__$1;
(statearr_39343_39389[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39332 === (32))){
var inst_39319 = (state_39331[(2)]);
var state_39331__$1 = state_39331;
var statearr_39344_39390 = state_39331__$1;
(statearr_39344_39390[(2)] = inst_39319);

(statearr_39344_39390[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39332 === (33))){
var inst_39308 = (state_39331[(2)]);
var state_39331__$1 = state_39331;
var statearr_39345_39391 = state_39331__$1;
(statearr_39345_39391[(2)] = inst_39308);

(statearr_39345_39391[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39332 === (13))){
var inst_39269 = figwheel.client.heads_up.clear.call(null);
var state_39331__$1 = state_39331;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39331__$1,(16),inst_39269);
} else {
if((state_val_39332 === (22))){
var inst_39290 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39291 = figwheel.client.heads_up.append_message.call(null,inst_39290);
var state_39331__$1 = state_39331;
var statearr_39346_39392 = state_39331__$1;
(statearr_39346_39392[(2)] = inst_39291);

(statearr_39346_39392[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39332 === (36))){
var inst_39317 = (state_39331[(2)]);
var state_39331__$1 = state_39331;
var statearr_39347_39393 = state_39331__$1;
(statearr_39347_39393[(2)] = inst_39317);

(statearr_39347_39393[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39332 === (29))){
var inst_39301 = (state_39331[(2)]);
var state_39331__$1 = state_39331;
var statearr_39348_39394 = state_39331__$1;
(statearr_39348_39394[(2)] = inst_39301);

(statearr_39348_39394[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39332 === (6))){
var inst_39250 = (state_39331[(7)]);
var state_39331__$1 = state_39331;
var statearr_39349_39395 = state_39331__$1;
(statearr_39349_39395[(2)] = inst_39250);

(statearr_39349_39395[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39332 === (28))){
var inst_39297 = (state_39331[(2)]);
var inst_39298 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39299 = figwheel.client.heads_up.display_warning.call(null,inst_39298);
var state_39331__$1 = (function (){var statearr_39350 = state_39331;
(statearr_39350[(8)] = inst_39297);

return statearr_39350;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39331__$1,(29),inst_39299);
} else {
if((state_val_39332 === (25))){
var inst_39295 = figwheel.client.heads_up.clear.call(null);
var state_39331__$1 = state_39331;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39331__$1,(28),inst_39295);
} else {
if((state_val_39332 === (34))){
var inst_39312 = figwheel.client.heads_up.flash_loaded.call(null);
var state_39331__$1 = state_39331;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39331__$1,(37),inst_39312);
} else {
if((state_val_39332 === (17))){
var inst_39277 = (state_39331[(2)]);
var state_39331__$1 = state_39331;
var statearr_39351_39396 = state_39331__$1;
(statearr_39351_39396[(2)] = inst_39277);

(statearr_39351_39396[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39332 === (3))){
var inst_39267 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_39331__$1 = state_39331;
if(cljs.core.truth_(inst_39267)){
var statearr_39352_39397 = state_39331__$1;
(statearr_39352_39397[(1)] = (13));

} else {
var statearr_39353_39398 = state_39331__$1;
(statearr_39353_39398[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39332 === (12))){
var inst_39263 = (state_39331[(2)]);
var state_39331__$1 = state_39331;
var statearr_39354_39399 = state_39331__$1;
(statearr_39354_39399[(2)] = inst_39263);

(statearr_39354_39399[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39332 === (2))){
var inst_39250 = (state_39331[(7)]);
var inst_39250__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_39331__$1 = (function (){var statearr_39355 = state_39331;
(statearr_39355[(7)] = inst_39250__$1);

return statearr_39355;
})();
if(cljs.core.truth_(inst_39250__$1)){
var statearr_39356_39400 = state_39331__$1;
(statearr_39356_39400[(1)] = (5));

} else {
var statearr_39357_39401 = state_39331__$1;
(statearr_39357_39401[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39332 === (23))){
var inst_39293 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_39331__$1 = state_39331;
if(cljs.core.truth_(inst_39293)){
var statearr_39358_39402 = state_39331__$1;
(statearr_39358_39402[(1)] = (25));

} else {
var statearr_39359_39403 = state_39331__$1;
(statearr_39359_39403[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39332 === (35))){
var state_39331__$1 = state_39331;
var statearr_39360_39404 = state_39331__$1;
(statearr_39360_39404[(2)] = null);

(statearr_39360_39404[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39332 === (19))){
var inst_39288 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_39331__$1 = state_39331;
if(cljs.core.truth_(inst_39288)){
var statearr_39361_39405 = state_39331__$1;
(statearr_39361_39405[(1)] = (22));

} else {
var statearr_39362_39406 = state_39331__$1;
(statearr_39362_39406[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39332 === (11))){
var inst_39259 = (state_39331[(2)]);
var state_39331__$1 = state_39331;
var statearr_39363_39407 = state_39331__$1;
(statearr_39363_39407[(2)] = inst_39259);

(statearr_39363_39407[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39332 === (9))){
var inst_39261 = figwheel.client.heads_up.clear.call(null);
var state_39331__$1 = state_39331;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39331__$1,(12),inst_39261);
} else {
if((state_val_39332 === (5))){
var inst_39252 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_39331__$1 = state_39331;
var statearr_39364_39408 = state_39331__$1;
(statearr_39364_39408[(2)] = inst_39252);

(statearr_39364_39408[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39332 === (14))){
var inst_39279 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_39331__$1 = state_39331;
if(cljs.core.truth_(inst_39279)){
var statearr_39365_39409 = state_39331__$1;
(statearr_39365_39409[(1)] = (18));

} else {
var statearr_39366_39410 = state_39331__$1;
(statearr_39366_39410[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39332 === (26))){
var inst_39303 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_39331__$1 = state_39331;
if(cljs.core.truth_(inst_39303)){
var statearr_39367_39411 = state_39331__$1;
(statearr_39367_39411[(1)] = (30));

} else {
var statearr_39368_39412 = state_39331__$1;
(statearr_39368_39412[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39332 === (16))){
var inst_39271 = (state_39331[(2)]);
var inst_39272 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39273 = figwheel.client.format_messages.call(null,inst_39272);
var inst_39274 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39275 = figwheel.client.heads_up.display_error.call(null,inst_39273,inst_39274);
var state_39331__$1 = (function (){var statearr_39369 = state_39331;
(statearr_39369[(9)] = inst_39271);

return statearr_39369;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39331__$1,(17),inst_39275);
} else {
if((state_val_39332 === (30))){
var inst_39305 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39306 = figwheel.client.heads_up.display_warning.call(null,inst_39305);
var state_39331__$1 = state_39331;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39331__$1,(33),inst_39306);
} else {
if((state_val_39332 === (10))){
var inst_39265 = (state_39331[(2)]);
var state_39331__$1 = state_39331;
var statearr_39370_39413 = state_39331__$1;
(statearr_39370_39413[(2)] = inst_39265);

(statearr_39370_39413[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39332 === (18))){
var inst_39281 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39282 = figwheel.client.format_messages.call(null,inst_39281);
var inst_39283 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39284 = figwheel.client.heads_up.display_error.call(null,inst_39282,inst_39283);
var state_39331__$1 = state_39331;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39331__$1,(21),inst_39284);
} else {
if((state_val_39332 === (37))){
var inst_39314 = (state_39331[(2)]);
var state_39331__$1 = state_39331;
var statearr_39371_39414 = state_39331__$1;
(statearr_39371_39414[(2)] = inst_39314);

(statearr_39371_39414[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39332 === (8))){
var inst_39257 = figwheel.client.heads_up.flash_loaded.call(null);
var state_39331__$1 = state_39331;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39331__$1,(11),inst_39257);
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
});})(c__33236__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__33122__auto__,c__33236__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33123__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33123__auto____0 = (function (){
var statearr_39375 = [null,null,null,null,null,null,null,null,null,null];
(statearr_39375[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33123__auto__);

(statearr_39375[(1)] = (1));

return statearr_39375;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33123__auto____1 = (function (state_39331){
while(true){
var ret_value__33124__auto__ = (function (){try{while(true){
var result__33125__auto__ = switch__33122__auto__.call(null,state_39331);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33125__auto__;
}
break;
}
}catch (e39376){if((e39376 instanceof Object)){
var ex__33126__auto__ = e39376;
var statearr_39377_39415 = state_39331;
(statearr_39377_39415[(5)] = ex__33126__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39331);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39376;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33124__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39416 = state_39331;
state_39331 = G__39416;
continue;
} else {
return ret_value__33124__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33123__auto__ = function(state_39331){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33123__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33123__auto____1.call(this,state_39331);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33123__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33123__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33123__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33123__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33123__auto__;
})()
;})(switch__33122__auto__,c__33236__auto__,msg_hist,msg_names,msg))
})();
var state__33238__auto__ = (function (){var statearr_39378 = f__33237__auto__.call(null);
(statearr_39378[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33236__auto__);

return statearr_39378;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33238__auto__);
});})(c__33236__auto__,msg_hist,msg_names,msg))
);

return c__33236__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__33236__auto___39479 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33236__auto___39479,ch){
return (function (){
var f__33237__auto__ = (function (){var switch__33122__auto__ = ((function (c__33236__auto___39479,ch){
return (function (state_39462){
var state_val_39463 = (state_39462[(1)]);
if((state_val_39463 === (1))){
var state_39462__$1 = state_39462;
var statearr_39464_39480 = state_39462__$1;
(statearr_39464_39480[(2)] = null);

(statearr_39464_39480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39463 === (2))){
var state_39462__$1 = state_39462;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39462__$1,(4),ch);
} else {
if((state_val_39463 === (3))){
var inst_39460 = (state_39462[(2)]);
var state_39462__$1 = state_39462;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39462__$1,inst_39460);
} else {
if((state_val_39463 === (4))){
var inst_39450 = (state_39462[(7)]);
var inst_39450__$1 = (state_39462[(2)]);
var state_39462__$1 = (function (){var statearr_39465 = state_39462;
(statearr_39465[(7)] = inst_39450__$1);

return statearr_39465;
})();
if(cljs.core.truth_(inst_39450__$1)){
var statearr_39466_39481 = state_39462__$1;
(statearr_39466_39481[(1)] = (5));

} else {
var statearr_39467_39482 = state_39462__$1;
(statearr_39467_39482[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39463 === (5))){
var inst_39450 = (state_39462[(7)]);
var inst_39452 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_39450);
var state_39462__$1 = state_39462;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39462__$1,(8),inst_39452);
} else {
if((state_val_39463 === (6))){
var state_39462__$1 = state_39462;
var statearr_39468_39483 = state_39462__$1;
(statearr_39468_39483[(2)] = null);

(statearr_39468_39483[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39463 === (7))){
var inst_39458 = (state_39462[(2)]);
var state_39462__$1 = state_39462;
var statearr_39469_39484 = state_39462__$1;
(statearr_39469_39484[(2)] = inst_39458);

(statearr_39469_39484[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39463 === (8))){
var inst_39454 = (state_39462[(2)]);
var state_39462__$1 = (function (){var statearr_39470 = state_39462;
(statearr_39470[(8)] = inst_39454);

return statearr_39470;
})();
var statearr_39471_39485 = state_39462__$1;
(statearr_39471_39485[(2)] = null);

(statearr_39471_39485[(1)] = (2));


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
});})(c__33236__auto___39479,ch))
;
return ((function (switch__33122__auto__,c__33236__auto___39479,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__33123__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__33123__auto____0 = (function (){
var statearr_39475 = [null,null,null,null,null,null,null,null,null];
(statearr_39475[(0)] = figwheel$client$heads_up_plugin_$_state_machine__33123__auto__);

(statearr_39475[(1)] = (1));

return statearr_39475;
});
var figwheel$client$heads_up_plugin_$_state_machine__33123__auto____1 = (function (state_39462){
while(true){
var ret_value__33124__auto__ = (function (){try{while(true){
var result__33125__auto__ = switch__33122__auto__.call(null,state_39462);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33125__auto__;
}
break;
}
}catch (e39476){if((e39476 instanceof Object)){
var ex__33126__auto__ = e39476;
var statearr_39477_39486 = state_39462;
(statearr_39477_39486[(5)] = ex__33126__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39462);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39476;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33124__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39487 = state_39462;
state_39462 = G__39487;
continue;
} else {
return ret_value__33124__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__33123__auto__ = function(state_39462){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__33123__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__33123__auto____1.call(this,state_39462);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__33123__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__33123__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__33123__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__33123__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__33123__auto__;
})()
;})(switch__33122__auto__,c__33236__auto___39479,ch))
})();
var state__33238__auto__ = (function (){var statearr_39478 = f__33237__auto__.call(null);
(statearr_39478[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33236__auto___39479);

return statearr_39478;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33238__auto__);
});})(c__33236__auto___39479,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__33236__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33236__auto__){
return (function (){
var f__33237__auto__ = (function (){var switch__33122__auto__ = ((function (c__33236__auto__){
return (function (state_39508){
var state_val_39509 = (state_39508[(1)]);
if((state_val_39509 === (1))){
var inst_39503 = cljs.core.async.timeout.call(null,(3000));
var state_39508__$1 = state_39508;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39508__$1,(2),inst_39503);
} else {
if((state_val_39509 === (2))){
var inst_39505 = (state_39508[(2)]);
var inst_39506 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_39508__$1 = (function (){var statearr_39510 = state_39508;
(statearr_39510[(7)] = inst_39505);

return statearr_39510;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39508__$1,inst_39506);
} else {
return null;
}
}
});})(c__33236__auto__))
;
return ((function (switch__33122__auto__,c__33236__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__33123__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__33123__auto____0 = (function (){
var statearr_39514 = [null,null,null,null,null,null,null,null];
(statearr_39514[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__33123__auto__);

(statearr_39514[(1)] = (1));

return statearr_39514;
});
var figwheel$client$enforce_project_plugin_$_state_machine__33123__auto____1 = (function (state_39508){
while(true){
var ret_value__33124__auto__ = (function (){try{while(true){
var result__33125__auto__ = switch__33122__auto__.call(null,state_39508);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33125__auto__;
}
break;
}
}catch (e39515){if((e39515 instanceof Object)){
var ex__33126__auto__ = e39515;
var statearr_39516_39518 = state_39508;
(statearr_39516_39518[(5)] = ex__33126__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39508);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39515;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33124__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39519 = state_39508;
state_39508 = G__39519;
continue;
} else {
return ret_value__33124__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__33123__auto__ = function(state_39508){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__33123__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__33123__auto____1.call(this,state_39508);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__33123__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__33123__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__33123__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__33123__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__33123__auto__;
})()
;})(switch__33122__auto__,c__33236__auto__))
})();
var state__33238__auto__ = (function (){var statearr_39517 = f__33237__auto__.call(null);
(statearr_39517[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33236__auto__);

return statearr_39517;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33238__auto__);
});})(c__33236__auto__))
);

return c__33236__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__39520){
var map__39527 = p__39520;
var map__39527__$1 = ((((!((map__39527 == null)))?((((map__39527.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39527.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39527):map__39527);
var ed = map__39527__$1;
var formatted_exception = cljs.core.get.call(null,map__39527__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__39527__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__39527__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__39529_39533 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__39530_39534 = null;
var count__39531_39535 = (0);
var i__39532_39536 = (0);
while(true){
if((i__39532_39536 < count__39531_39535)){
var msg_39537 = cljs.core._nth.call(null,chunk__39530_39534,i__39532_39536);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_39537);

var G__39538 = seq__39529_39533;
var G__39539 = chunk__39530_39534;
var G__39540 = count__39531_39535;
var G__39541 = (i__39532_39536 + (1));
seq__39529_39533 = G__39538;
chunk__39530_39534 = G__39539;
count__39531_39535 = G__39540;
i__39532_39536 = G__39541;
continue;
} else {
var temp__6728__auto___39542 = cljs.core.seq.call(null,seq__39529_39533);
if(temp__6728__auto___39542){
var seq__39529_39543__$1 = temp__6728__auto___39542;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39529_39543__$1)){
var c__21000__auto___39544 = cljs.core.chunk_first.call(null,seq__39529_39543__$1);
var G__39545 = cljs.core.chunk_rest.call(null,seq__39529_39543__$1);
var G__39546 = c__21000__auto___39544;
var G__39547 = cljs.core.count.call(null,c__21000__auto___39544);
var G__39548 = (0);
seq__39529_39533 = G__39545;
chunk__39530_39534 = G__39546;
count__39531_39535 = G__39547;
i__39532_39536 = G__39548;
continue;
} else {
var msg_39549 = cljs.core.first.call(null,seq__39529_39543__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_39549);

var G__39550 = cljs.core.next.call(null,seq__39529_39543__$1);
var G__39551 = null;
var G__39552 = (0);
var G__39553 = (0);
seq__39529_39533 = G__39550;
chunk__39530_39534 = G__39551;
count__39531_39535 = G__39552;
i__39532_39536 = G__39553;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__39554){
var map__39557 = p__39554;
var map__39557__$1 = ((((!((map__39557 == null)))?((((map__39557.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39557.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39557):map__39557);
var w = map__39557__$1;
var message = cljs.core.get.call(null,map__39557__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__20085__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__20085__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__20085__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__39569 = cljs.core.seq.call(null,plugins);
var chunk__39570 = null;
var count__39571 = (0);
var i__39572 = (0);
while(true){
if((i__39572 < count__39571)){
var vec__39573 = cljs.core._nth.call(null,chunk__39570,i__39572);
var k = cljs.core.nth.call(null,vec__39573,(0),null);
var plugin = cljs.core.nth.call(null,vec__39573,(1),null);
if(cljs.core.truth_(plugin)){
var pl_39579 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__39569,chunk__39570,count__39571,i__39572,pl_39579,vec__39573,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_39579.call(null,msg_hist);
});})(seq__39569,chunk__39570,count__39571,i__39572,pl_39579,vec__39573,k,plugin))
);
} else {
}

var G__39580 = seq__39569;
var G__39581 = chunk__39570;
var G__39582 = count__39571;
var G__39583 = (i__39572 + (1));
seq__39569 = G__39580;
chunk__39570 = G__39581;
count__39571 = G__39582;
i__39572 = G__39583;
continue;
} else {
var temp__6728__auto__ = cljs.core.seq.call(null,seq__39569);
if(temp__6728__auto__){
var seq__39569__$1 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39569__$1)){
var c__21000__auto__ = cljs.core.chunk_first.call(null,seq__39569__$1);
var G__39584 = cljs.core.chunk_rest.call(null,seq__39569__$1);
var G__39585 = c__21000__auto__;
var G__39586 = cljs.core.count.call(null,c__21000__auto__);
var G__39587 = (0);
seq__39569 = G__39584;
chunk__39570 = G__39585;
count__39571 = G__39586;
i__39572 = G__39587;
continue;
} else {
var vec__39576 = cljs.core.first.call(null,seq__39569__$1);
var k = cljs.core.nth.call(null,vec__39576,(0),null);
var plugin = cljs.core.nth.call(null,vec__39576,(1),null);
if(cljs.core.truth_(plugin)){
var pl_39588 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__39569,chunk__39570,count__39571,i__39572,pl_39588,vec__39576,k,plugin,seq__39569__$1,temp__6728__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_39588.call(null,msg_hist);
});})(seq__39569,chunk__39570,count__39571,i__39572,pl_39588,vec__39576,k,plugin,seq__39569__$1,temp__6728__auto__))
);
} else {
}

var G__39589 = cljs.core.next.call(null,seq__39569__$1);
var G__39590 = null;
var G__39591 = (0);
var G__39592 = (0);
seq__39569 = G__39589;
chunk__39570 = G__39590;
count__39571 = G__39591;
i__39572 = G__39592;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args39593 = [];
var len__21280__auto___39596 = arguments.length;
var i__21281__auto___39597 = (0);
while(true){
if((i__21281__auto___39597 < len__21280__auto___39596)){
args39593.push((arguments[i__21281__auto___39597]));

var G__39598 = (i__21281__auto___39597 + (1));
i__21281__auto___39597 = G__39598;
continue;
} else {
}
break;
}

var G__39595 = args39593.length;
switch (G__39595) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39593.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__21287__auto__ = [];
var len__21280__auto___39604 = arguments.length;
var i__21281__auto___39605 = (0);
while(true){
if((i__21281__auto___39605 < len__21280__auto___39604)){
args__21287__auto__.push((arguments[i__21281__auto___39605]));

var G__39606 = (i__21281__auto___39605 + (1));
i__21281__auto___39605 = G__39606;
continue;
} else {
}
break;
}

var argseq__21288__auto__ = ((((0) < args__21287__auto__.length))?(new cljs.core.IndexedSeq(args__21287__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__21288__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__39601){
var map__39602 = p__39601;
var map__39602__$1 = ((((!((map__39602 == null)))?((((map__39602.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39602.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39602):map__39602);
var opts = map__39602__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq39600){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39600));
});


//# sourceMappingURL=client.js.map