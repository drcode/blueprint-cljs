// Compiled by ClojureScript 1.7.170 {}
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
var pred__23403 = cljs.core._EQ_;
var expr__23404 = (function (){var or__16864__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__16864__auto__)){
return or__16864__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__23403.call(null,"true",expr__23404))){
return true;
} else {
if(cljs.core.truth_(pred__23403.call(null,"false",expr__23404))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__23404)].join('')));
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
var G__23406__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__23406 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23407__i = 0, G__23407__a = new Array(arguments.length -  0);
while (G__23407__i < G__23407__a.length) {G__23407__a[G__23407__i] = arguments[G__23407__i + 0]; ++G__23407__i;}
  args = new cljs.core.IndexedSeq(G__23407__a,0);
} 
return G__23406__delegate.call(this,args);};
G__23406.cljs$lang$maxFixedArity = 0;
G__23406.cljs$lang$applyTo = (function (arglist__23408){
var args = cljs.core.seq(arglist__23408);
return G__23406__delegate(args);
});
G__23406.cljs$core$IFn$_invoke$arity$variadic = G__23406__delegate;
return G__23406;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__23409){
var map__23412 = p__23409;
var map__23412__$1 = ((((!((map__23412 == null)))?((((map__23412.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23412.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23412):map__23412);
var message = cljs.core.get.call(null,map__23412__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__23412__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16864__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16864__auto__)){
return or__16864__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16852__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16852__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16852__auto__;
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
var c__19017__auto___23574 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19017__auto___23574,ch){
return (function (){
var f__19018__auto__ = (function (){var switch__18905__auto__ = ((function (c__19017__auto___23574,ch){
return (function (state_23543){
var state_val_23544 = (state_23543[(1)]);
if((state_val_23544 === (7))){
var inst_23539 = (state_23543[(2)]);
var state_23543__$1 = state_23543;
var statearr_23545_23575 = state_23543__$1;
(statearr_23545_23575[(2)] = inst_23539);

(statearr_23545_23575[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23544 === (1))){
var state_23543__$1 = state_23543;
var statearr_23546_23576 = state_23543__$1;
(statearr_23546_23576[(2)] = null);

(statearr_23546_23576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23544 === (4))){
var inst_23496 = (state_23543[(7)]);
var inst_23496__$1 = (state_23543[(2)]);
var state_23543__$1 = (function (){var statearr_23547 = state_23543;
(statearr_23547[(7)] = inst_23496__$1);

return statearr_23547;
})();
if(cljs.core.truth_(inst_23496__$1)){
var statearr_23548_23577 = state_23543__$1;
(statearr_23548_23577[(1)] = (5));

} else {
var statearr_23549_23578 = state_23543__$1;
(statearr_23549_23578[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23544 === (15))){
var inst_23503 = (state_23543[(8)]);
var inst_23518 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_23503);
var inst_23519 = cljs.core.first.call(null,inst_23518);
var inst_23520 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_23519);
var inst_23521 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_23520)].join('');
var inst_23522 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_23521);
var state_23543__$1 = state_23543;
var statearr_23550_23579 = state_23543__$1;
(statearr_23550_23579[(2)] = inst_23522);

(statearr_23550_23579[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23544 === (13))){
var inst_23527 = (state_23543[(2)]);
var state_23543__$1 = state_23543;
var statearr_23551_23580 = state_23543__$1;
(statearr_23551_23580[(2)] = inst_23527);

(statearr_23551_23580[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23544 === (6))){
var state_23543__$1 = state_23543;
var statearr_23552_23581 = state_23543__$1;
(statearr_23552_23581[(2)] = null);

(statearr_23552_23581[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23544 === (17))){
var inst_23525 = (state_23543[(2)]);
var state_23543__$1 = state_23543;
var statearr_23553_23582 = state_23543__$1;
(statearr_23553_23582[(2)] = inst_23525);

(statearr_23553_23582[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23544 === (3))){
var inst_23541 = (state_23543[(2)]);
var state_23543__$1 = state_23543;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23543__$1,inst_23541);
} else {
if((state_val_23544 === (12))){
var inst_23502 = (state_23543[(9)]);
var inst_23516 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_23502,opts);
var state_23543__$1 = state_23543;
if(cljs.core.truth_(inst_23516)){
var statearr_23554_23583 = state_23543__$1;
(statearr_23554_23583[(1)] = (15));

} else {
var statearr_23555_23584 = state_23543__$1;
(statearr_23555_23584[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23544 === (2))){
var state_23543__$1 = state_23543;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23543__$1,(4),ch);
} else {
if((state_val_23544 === (11))){
var inst_23503 = (state_23543[(8)]);
var inst_23508 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23509 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_23503);
var inst_23510 = cljs.core.async.timeout.call(null,(1000));
var inst_23511 = [inst_23509,inst_23510];
var inst_23512 = (new cljs.core.PersistentVector(null,2,(5),inst_23508,inst_23511,null));
var state_23543__$1 = state_23543;
return cljs.core.async.ioc_alts_BANG_.call(null,state_23543__$1,(14),inst_23512);
} else {
if((state_val_23544 === (9))){
var inst_23503 = (state_23543[(8)]);
var inst_23529 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_23530 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_23503);
var inst_23531 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_23530);
var inst_23532 = [cljs.core.str("Not loading: "),cljs.core.str(inst_23531)].join('');
var inst_23533 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_23532);
var state_23543__$1 = (function (){var statearr_23556 = state_23543;
(statearr_23556[(10)] = inst_23529);

return statearr_23556;
})();
var statearr_23557_23585 = state_23543__$1;
(statearr_23557_23585[(2)] = inst_23533);

(statearr_23557_23585[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23544 === (5))){
var inst_23496 = (state_23543[(7)]);
var inst_23498 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_23499 = (new cljs.core.PersistentArrayMap(null,2,inst_23498,null));
var inst_23500 = (new cljs.core.PersistentHashSet(null,inst_23499,null));
var inst_23501 = figwheel.client.focus_msgs.call(null,inst_23500,inst_23496);
var inst_23502 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_23501);
var inst_23503 = cljs.core.first.call(null,inst_23501);
var inst_23504 = figwheel.client.autoload_QMARK_.call(null);
var state_23543__$1 = (function (){var statearr_23558 = state_23543;
(statearr_23558[(8)] = inst_23503);

(statearr_23558[(9)] = inst_23502);

return statearr_23558;
})();
if(cljs.core.truth_(inst_23504)){
var statearr_23559_23586 = state_23543__$1;
(statearr_23559_23586[(1)] = (8));

} else {
var statearr_23560_23587 = state_23543__$1;
(statearr_23560_23587[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23544 === (14))){
var inst_23514 = (state_23543[(2)]);
var state_23543__$1 = state_23543;
var statearr_23561_23588 = state_23543__$1;
(statearr_23561_23588[(2)] = inst_23514);

(statearr_23561_23588[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23544 === (16))){
var state_23543__$1 = state_23543;
var statearr_23562_23589 = state_23543__$1;
(statearr_23562_23589[(2)] = null);

(statearr_23562_23589[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23544 === (10))){
var inst_23535 = (state_23543[(2)]);
var state_23543__$1 = (function (){var statearr_23563 = state_23543;
(statearr_23563[(11)] = inst_23535);

return statearr_23563;
})();
var statearr_23564_23590 = state_23543__$1;
(statearr_23564_23590[(2)] = null);

(statearr_23564_23590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23544 === (8))){
var inst_23502 = (state_23543[(9)]);
var inst_23506 = figwheel.client.reload_file_state_QMARK_.call(null,inst_23502,opts);
var state_23543__$1 = state_23543;
if(cljs.core.truth_(inst_23506)){
var statearr_23565_23591 = state_23543__$1;
(statearr_23565_23591[(1)] = (11));

} else {
var statearr_23566_23592 = state_23543__$1;
(statearr_23566_23592[(1)] = (12));

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
});})(c__19017__auto___23574,ch))
;
return ((function (switch__18905__auto__,c__19017__auto___23574,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__18906__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__18906__auto____0 = (function (){
var statearr_23570 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23570[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__18906__auto__);

(statearr_23570[(1)] = (1));

return statearr_23570;
});
var figwheel$client$file_reloader_plugin_$_state_machine__18906__auto____1 = (function (state_23543){
while(true){
var ret_value__18907__auto__ = (function (){try{while(true){
var result__18908__auto__ = switch__18905__auto__.call(null,state_23543);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18908__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18908__auto__;
}
break;
}
}catch (e23571){if((e23571 instanceof Object)){
var ex__18909__auto__ = e23571;
var statearr_23572_23593 = state_23543;
(statearr_23572_23593[(5)] = ex__18909__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23543);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23571;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18907__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23594 = state_23543;
state_23543 = G__23594;
continue;
} else {
return ret_value__18907__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__18906__auto__ = function(state_23543){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__18906__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__18906__auto____1.call(this,state_23543);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__18906__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__18906__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__18906__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__18906__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__18906__auto__;
})()
;})(switch__18905__auto__,c__19017__auto___23574,ch))
})();
var state__19019__auto__ = (function (){var statearr_23573 = f__19018__auto__.call(null);
(statearr_23573[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19017__auto___23574);

return statearr_23573;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19019__auto__);
});})(c__19017__auto___23574,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__23595_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__23595_SHARP_));
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
var base_path_23602 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_23602){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_23600 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_23601 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_23600,_STAR_print_newline_STAR_23601,base_path_23602){
return (function() { 
var G__23603__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__23603 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23604__i = 0, G__23604__a = new Array(arguments.length -  0);
while (G__23604__i < G__23604__a.length) {G__23604__a[G__23604__i] = arguments[G__23604__i + 0]; ++G__23604__i;}
  args = new cljs.core.IndexedSeq(G__23604__a,0);
} 
return G__23603__delegate.call(this,args);};
G__23603.cljs$lang$maxFixedArity = 0;
G__23603.cljs$lang$applyTo = (function (arglist__23605){
var args = cljs.core.seq(arglist__23605);
return G__23603__delegate(args);
});
G__23603.cljs$core$IFn$_invoke$arity$variadic = G__23603__delegate;
return G__23603;
})()
;})(_STAR_print_fn_STAR_23600,_STAR_print_newline_STAR_23601,base_path_23602))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_23601;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_23600;
}}catch (e23599){if((e23599 instanceof Error)){
var e = e23599;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_23602], null));
} else {
var e = e23599;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_23602))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__23606){
var map__23613 = p__23606;
var map__23613__$1 = ((((!((map__23613 == null)))?((((map__23613.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23613.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23613):map__23613);
var opts = map__23613__$1;
var build_id = cljs.core.get.call(null,map__23613__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__23613,map__23613__$1,opts,build_id){
return (function (p__23615){
var vec__23616 = p__23615;
var map__23617 = cljs.core.nth.call(null,vec__23616,(0),null);
var map__23617__$1 = ((((!((map__23617 == null)))?((((map__23617.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23617.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23617):map__23617);
var msg = map__23617__$1;
var msg_name = cljs.core.get.call(null,map__23617__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__23616,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__23616,map__23617,map__23617__$1,msg,msg_name,_,map__23613,map__23613__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__23616,map__23617,map__23617__$1,msg,msg_name,_,map__23613,map__23613__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__23613,map__23613__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__23623){
var vec__23624 = p__23623;
var map__23625 = cljs.core.nth.call(null,vec__23624,(0),null);
var map__23625__$1 = ((((!((map__23625 == null)))?((((map__23625.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23625.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23625):map__23625);
var msg = map__23625__$1;
var msg_name = cljs.core.get.call(null,map__23625__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__23624,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__23627){
var map__23637 = p__23627;
var map__23637__$1 = ((((!((map__23637 == null)))?((((map__23637.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23637.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23637):map__23637);
var on_compile_warning = cljs.core.get.call(null,map__23637__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__23637__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__23637,map__23637__$1,on_compile_warning,on_compile_fail){
return (function (p__23639){
var vec__23640 = p__23639;
var map__23641 = cljs.core.nth.call(null,vec__23640,(0),null);
var map__23641__$1 = ((((!((map__23641 == null)))?((((map__23641.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23641.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23641):map__23641);
var msg = map__23641__$1;
var msg_name = cljs.core.get.call(null,map__23641__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__23640,(1));
var pred__23643 = cljs.core._EQ_;
var expr__23644 = msg_name;
if(cljs.core.truth_(pred__23643.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__23644))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__23643.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__23644))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__23637,map__23637__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__19017__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19017__auto__,msg_hist,msg_names,msg){
return (function (){
var f__19018__auto__ = (function (){var switch__18905__auto__ = ((function (c__19017__auto__,msg_hist,msg_names,msg){
return (function (state_23860){
var state_val_23861 = (state_23860[(1)]);
if((state_val_23861 === (7))){
var inst_23784 = (state_23860[(2)]);
var state_23860__$1 = state_23860;
if(cljs.core.truth_(inst_23784)){
var statearr_23862_23908 = state_23860__$1;
(statearr_23862_23908[(1)] = (8));

} else {
var statearr_23863_23909 = state_23860__$1;
(statearr_23863_23909[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23861 === (20))){
var inst_23854 = (state_23860[(2)]);
var state_23860__$1 = state_23860;
var statearr_23864_23910 = state_23860__$1;
(statearr_23864_23910[(2)] = inst_23854);

(statearr_23864_23910[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23861 === (27))){
var inst_23850 = (state_23860[(2)]);
var state_23860__$1 = state_23860;
var statearr_23865_23911 = state_23860__$1;
(statearr_23865_23911[(2)] = inst_23850);

(statearr_23865_23911[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23861 === (1))){
var inst_23777 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_23860__$1 = state_23860;
if(cljs.core.truth_(inst_23777)){
var statearr_23866_23912 = state_23860__$1;
(statearr_23866_23912[(1)] = (2));

} else {
var statearr_23867_23913 = state_23860__$1;
(statearr_23867_23913[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23861 === (24))){
var inst_23852 = (state_23860[(2)]);
var state_23860__$1 = state_23860;
var statearr_23868_23914 = state_23860__$1;
(statearr_23868_23914[(2)] = inst_23852);

(statearr_23868_23914[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23861 === (4))){
var inst_23858 = (state_23860[(2)]);
var state_23860__$1 = state_23860;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23860__$1,inst_23858);
} else {
if((state_val_23861 === (15))){
var inst_23856 = (state_23860[(2)]);
var state_23860__$1 = state_23860;
var statearr_23869_23915 = state_23860__$1;
(statearr_23869_23915[(2)] = inst_23856);

(statearr_23869_23915[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23861 === (21))){
var inst_23815 = (state_23860[(2)]);
var state_23860__$1 = state_23860;
var statearr_23870_23916 = state_23860__$1;
(statearr_23870_23916[(2)] = inst_23815);

(statearr_23870_23916[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23861 === (31))){
var inst_23839 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_23860__$1 = state_23860;
if(cljs.core.truth_(inst_23839)){
var statearr_23871_23917 = state_23860__$1;
(statearr_23871_23917[(1)] = (34));

} else {
var statearr_23872_23918 = state_23860__$1;
(statearr_23872_23918[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23861 === (32))){
var inst_23848 = (state_23860[(2)]);
var state_23860__$1 = state_23860;
var statearr_23873_23919 = state_23860__$1;
(statearr_23873_23919[(2)] = inst_23848);

(statearr_23873_23919[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23861 === (33))){
var inst_23837 = (state_23860[(2)]);
var state_23860__$1 = state_23860;
var statearr_23874_23920 = state_23860__$1;
(statearr_23874_23920[(2)] = inst_23837);

(statearr_23874_23920[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23861 === (13))){
var inst_23798 = figwheel.client.heads_up.clear.call(null);
var state_23860__$1 = state_23860;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23860__$1,(16),inst_23798);
} else {
if((state_val_23861 === (22))){
var inst_23819 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23820 = figwheel.client.heads_up.append_message.call(null,inst_23819);
var state_23860__$1 = state_23860;
var statearr_23875_23921 = state_23860__$1;
(statearr_23875_23921[(2)] = inst_23820);

(statearr_23875_23921[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23861 === (36))){
var inst_23846 = (state_23860[(2)]);
var state_23860__$1 = state_23860;
var statearr_23876_23922 = state_23860__$1;
(statearr_23876_23922[(2)] = inst_23846);

(statearr_23876_23922[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23861 === (29))){
var inst_23830 = (state_23860[(2)]);
var state_23860__$1 = state_23860;
var statearr_23877_23923 = state_23860__$1;
(statearr_23877_23923[(2)] = inst_23830);

(statearr_23877_23923[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23861 === (6))){
var inst_23779 = (state_23860[(7)]);
var state_23860__$1 = state_23860;
var statearr_23878_23924 = state_23860__$1;
(statearr_23878_23924[(2)] = inst_23779);

(statearr_23878_23924[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23861 === (28))){
var inst_23826 = (state_23860[(2)]);
var inst_23827 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23828 = figwheel.client.heads_up.display_warning.call(null,inst_23827);
var state_23860__$1 = (function (){var statearr_23879 = state_23860;
(statearr_23879[(8)] = inst_23826);

return statearr_23879;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23860__$1,(29),inst_23828);
} else {
if((state_val_23861 === (25))){
var inst_23824 = figwheel.client.heads_up.clear.call(null);
var state_23860__$1 = state_23860;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23860__$1,(28),inst_23824);
} else {
if((state_val_23861 === (34))){
var inst_23841 = figwheel.client.heads_up.flash_loaded.call(null);
var state_23860__$1 = state_23860;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23860__$1,(37),inst_23841);
} else {
if((state_val_23861 === (17))){
var inst_23806 = (state_23860[(2)]);
var state_23860__$1 = state_23860;
var statearr_23880_23925 = state_23860__$1;
(statearr_23880_23925[(2)] = inst_23806);

(statearr_23880_23925[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23861 === (3))){
var inst_23796 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_23860__$1 = state_23860;
if(cljs.core.truth_(inst_23796)){
var statearr_23881_23926 = state_23860__$1;
(statearr_23881_23926[(1)] = (13));

} else {
var statearr_23882_23927 = state_23860__$1;
(statearr_23882_23927[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23861 === (12))){
var inst_23792 = (state_23860[(2)]);
var state_23860__$1 = state_23860;
var statearr_23883_23928 = state_23860__$1;
(statearr_23883_23928[(2)] = inst_23792);

(statearr_23883_23928[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23861 === (2))){
var inst_23779 = (state_23860[(7)]);
var inst_23779__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_23860__$1 = (function (){var statearr_23884 = state_23860;
(statearr_23884[(7)] = inst_23779__$1);

return statearr_23884;
})();
if(cljs.core.truth_(inst_23779__$1)){
var statearr_23885_23929 = state_23860__$1;
(statearr_23885_23929[(1)] = (5));

} else {
var statearr_23886_23930 = state_23860__$1;
(statearr_23886_23930[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23861 === (23))){
var inst_23822 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_23860__$1 = state_23860;
if(cljs.core.truth_(inst_23822)){
var statearr_23887_23931 = state_23860__$1;
(statearr_23887_23931[(1)] = (25));

} else {
var statearr_23888_23932 = state_23860__$1;
(statearr_23888_23932[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23861 === (35))){
var state_23860__$1 = state_23860;
var statearr_23889_23933 = state_23860__$1;
(statearr_23889_23933[(2)] = null);

(statearr_23889_23933[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23861 === (19))){
var inst_23817 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_23860__$1 = state_23860;
if(cljs.core.truth_(inst_23817)){
var statearr_23890_23934 = state_23860__$1;
(statearr_23890_23934[(1)] = (22));

} else {
var statearr_23891_23935 = state_23860__$1;
(statearr_23891_23935[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23861 === (11))){
var inst_23788 = (state_23860[(2)]);
var state_23860__$1 = state_23860;
var statearr_23892_23936 = state_23860__$1;
(statearr_23892_23936[(2)] = inst_23788);

(statearr_23892_23936[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23861 === (9))){
var inst_23790 = figwheel.client.heads_up.clear.call(null);
var state_23860__$1 = state_23860;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23860__$1,(12),inst_23790);
} else {
if((state_val_23861 === (5))){
var inst_23781 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_23860__$1 = state_23860;
var statearr_23893_23937 = state_23860__$1;
(statearr_23893_23937[(2)] = inst_23781);

(statearr_23893_23937[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23861 === (14))){
var inst_23808 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_23860__$1 = state_23860;
if(cljs.core.truth_(inst_23808)){
var statearr_23894_23938 = state_23860__$1;
(statearr_23894_23938[(1)] = (18));

} else {
var statearr_23895_23939 = state_23860__$1;
(statearr_23895_23939[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23861 === (26))){
var inst_23832 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_23860__$1 = state_23860;
if(cljs.core.truth_(inst_23832)){
var statearr_23896_23940 = state_23860__$1;
(statearr_23896_23940[(1)] = (30));

} else {
var statearr_23897_23941 = state_23860__$1;
(statearr_23897_23941[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23861 === (16))){
var inst_23800 = (state_23860[(2)]);
var inst_23801 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23802 = figwheel.client.format_messages.call(null,inst_23801);
var inst_23803 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23804 = figwheel.client.heads_up.display_error.call(null,inst_23802,inst_23803);
var state_23860__$1 = (function (){var statearr_23898 = state_23860;
(statearr_23898[(9)] = inst_23800);

return statearr_23898;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23860__$1,(17),inst_23804);
} else {
if((state_val_23861 === (30))){
var inst_23834 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23835 = figwheel.client.heads_up.display_warning.call(null,inst_23834);
var state_23860__$1 = state_23860;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23860__$1,(33),inst_23835);
} else {
if((state_val_23861 === (10))){
var inst_23794 = (state_23860[(2)]);
var state_23860__$1 = state_23860;
var statearr_23899_23942 = state_23860__$1;
(statearr_23899_23942[(2)] = inst_23794);

(statearr_23899_23942[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23861 === (18))){
var inst_23810 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23811 = figwheel.client.format_messages.call(null,inst_23810);
var inst_23812 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23813 = figwheel.client.heads_up.display_error.call(null,inst_23811,inst_23812);
var state_23860__$1 = state_23860;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23860__$1,(21),inst_23813);
} else {
if((state_val_23861 === (37))){
var inst_23843 = (state_23860[(2)]);
var state_23860__$1 = state_23860;
var statearr_23900_23943 = state_23860__$1;
(statearr_23900_23943[(2)] = inst_23843);

(statearr_23900_23943[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23861 === (8))){
var inst_23786 = figwheel.client.heads_up.flash_loaded.call(null);
var state_23860__$1 = state_23860;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23860__$1,(11),inst_23786);
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
});})(c__19017__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__18905__auto__,c__19017__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18906__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18906__auto____0 = (function (){
var statearr_23904 = [null,null,null,null,null,null,null,null,null,null];
(statearr_23904[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18906__auto__);

(statearr_23904[(1)] = (1));

return statearr_23904;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18906__auto____1 = (function (state_23860){
while(true){
var ret_value__18907__auto__ = (function (){try{while(true){
var result__18908__auto__ = switch__18905__auto__.call(null,state_23860);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18908__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18908__auto__;
}
break;
}
}catch (e23905){if((e23905 instanceof Object)){
var ex__18909__auto__ = e23905;
var statearr_23906_23944 = state_23860;
(statearr_23906_23944[(5)] = ex__18909__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23860);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23905;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18907__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23945 = state_23860;
state_23860 = G__23945;
continue;
} else {
return ret_value__18907__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18906__auto__ = function(state_23860){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18906__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18906__auto____1.call(this,state_23860);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18906__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18906__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18906__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18906__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18906__auto__;
})()
;})(switch__18905__auto__,c__19017__auto__,msg_hist,msg_names,msg))
})();
var state__19019__auto__ = (function (){var statearr_23907 = f__19018__auto__.call(null);
(statearr_23907[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19017__auto__);

return statearr_23907;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19019__auto__);
});})(c__19017__auto__,msg_hist,msg_names,msg))
);

return c__19017__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__19017__auto___24008 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19017__auto___24008,ch){
return (function (){
var f__19018__auto__ = (function (){var switch__18905__auto__ = ((function (c__19017__auto___24008,ch){
return (function (state_23991){
var state_val_23992 = (state_23991[(1)]);
if((state_val_23992 === (1))){
var state_23991__$1 = state_23991;
var statearr_23993_24009 = state_23991__$1;
(statearr_23993_24009[(2)] = null);

(statearr_23993_24009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23992 === (2))){
var state_23991__$1 = state_23991;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23991__$1,(4),ch);
} else {
if((state_val_23992 === (3))){
var inst_23989 = (state_23991[(2)]);
var state_23991__$1 = state_23991;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23991__$1,inst_23989);
} else {
if((state_val_23992 === (4))){
var inst_23979 = (state_23991[(7)]);
var inst_23979__$1 = (state_23991[(2)]);
var state_23991__$1 = (function (){var statearr_23994 = state_23991;
(statearr_23994[(7)] = inst_23979__$1);

return statearr_23994;
})();
if(cljs.core.truth_(inst_23979__$1)){
var statearr_23995_24010 = state_23991__$1;
(statearr_23995_24010[(1)] = (5));

} else {
var statearr_23996_24011 = state_23991__$1;
(statearr_23996_24011[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23992 === (5))){
var inst_23979 = (state_23991[(7)]);
var inst_23981 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_23979);
var state_23991__$1 = state_23991;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23991__$1,(8),inst_23981);
} else {
if((state_val_23992 === (6))){
var state_23991__$1 = state_23991;
var statearr_23997_24012 = state_23991__$1;
(statearr_23997_24012[(2)] = null);

(statearr_23997_24012[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23992 === (7))){
var inst_23987 = (state_23991[(2)]);
var state_23991__$1 = state_23991;
var statearr_23998_24013 = state_23991__$1;
(statearr_23998_24013[(2)] = inst_23987);

(statearr_23998_24013[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23992 === (8))){
var inst_23983 = (state_23991[(2)]);
var state_23991__$1 = (function (){var statearr_23999 = state_23991;
(statearr_23999[(8)] = inst_23983);

return statearr_23999;
})();
var statearr_24000_24014 = state_23991__$1;
(statearr_24000_24014[(2)] = null);

(statearr_24000_24014[(1)] = (2));


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
});})(c__19017__auto___24008,ch))
;
return ((function (switch__18905__auto__,c__19017__auto___24008,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__18906__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__18906__auto____0 = (function (){
var statearr_24004 = [null,null,null,null,null,null,null,null,null];
(statearr_24004[(0)] = figwheel$client$heads_up_plugin_$_state_machine__18906__auto__);

(statearr_24004[(1)] = (1));

return statearr_24004;
});
var figwheel$client$heads_up_plugin_$_state_machine__18906__auto____1 = (function (state_23991){
while(true){
var ret_value__18907__auto__ = (function (){try{while(true){
var result__18908__auto__ = switch__18905__auto__.call(null,state_23991);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18908__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18908__auto__;
}
break;
}
}catch (e24005){if((e24005 instanceof Object)){
var ex__18909__auto__ = e24005;
var statearr_24006_24015 = state_23991;
(statearr_24006_24015[(5)] = ex__18909__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23991);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24005;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18907__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24016 = state_23991;
state_23991 = G__24016;
continue;
} else {
return ret_value__18907__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__18906__auto__ = function(state_23991){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__18906__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__18906__auto____1.call(this,state_23991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__18906__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__18906__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__18906__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__18906__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__18906__auto__;
})()
;})(switch__18905__auto__,c__19017__auto___24008,ch))
})();
var state__19019__auto__ = (function (){var statearr_24007 = f__19018__auto__.call(null);
(statearr_24007[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19017__auto___24008);

return statearr_24007;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19019__auto__);
});})(c__19017__auto___24008,ch))
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
var c__19017__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19017__auto__){
return (function (){
var f__19018__auto__ = (function (){var switch__18905__auto__ = ((function (c__19017__auto__){
return (function (state_24037){
var state_val_24038 = (state_24037[(1)]);
if((state_val_24038 === (1))){
var inst_24032 = cljs.core.async.timeout.call(null,(3000));
var state_24037__$1 = state_24037;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24037__$1,(2),inst_24032);
} else {
if((state_val_24038 === (2))){
var inst_24034 = (state_24037[(2)]);
var inst_24035 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_24037__$1 = (function (){var statearr_24039 = state_24037;
(statearr_24039[(7)] = inst_24034);

return statearr_24039;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24037__$1,inst_24035);
} else {
return null;
}
}
});})(c__19017__auto__))
;
return ((function (switch__18905__auto__,c__19017__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__18906__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__18906__auto____0 = (function (){
var statearr_24043 = [null,null,null,null,null,null,null,null];
(statearr_24043[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__18906__auto__);

(statearr_24043[(1)] = (1));

return statearr_24043;
});
var figwheel$client$enforce_project_plugin_$_state_machine__18906__auto____1 = (function (state_24037){
while(true){
var ret_value__18907__auto__ = (function (){try{while(true){
var result__18908__auto__ = switch__18905__auto__.call(null,state_24037);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18908__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18908__auto__;
}
break;
}
}catch (e24044){if((e24044 instanceof Object)){
var ex__18909__auto__ = e24044;
var statearr_24045_24047 = state_24037;
(statearr_24045_24047[(5)] = ex__18909__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24037);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24044;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18907__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24048 = state_24037;
state_24037 = G__24048;
continue;
} else {
return ret_value__18907__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__18906__auto__ = function(state_24037){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__18906__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__18906__auto____1.call(this,state_24037);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__18906__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__18906__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__18906__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__18906__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__18906__auto__;
})()
;})(switch__18905__auto__,c__19017__auto__))
})();
var state__19019__auto__ = (function (){var statearr_24046 = f__19018__auto__.call(null);
(statearr_24046[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19017__auto__);

return statearr_24046;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19019__auto__);
});})(c__19017__auto__))
);

return c__19017__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__24049){
var map__24056 = p__24049;
var map__24056__$1 = ((((!((map__24056 == null)))?((((map__24056.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24056.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24056):map__24056);
var ed = map__24056__$1;
var formatted_exception = cljs.core.get.call(null,map__24056__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__24056__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__24056__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__24058_24062 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__24059_24063 = null;
var count__24060_24064 = (0);
var i__24061_24065 = (0);
while(true){
if((i__24061_24065 < count__24060_24064)){
var msg_24066 = cljs.core._nth.call(null,chunk__24059_24063,i__24061_24065);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_24066);

var G__24067 = seq__24058_24062;
var G__24068 = chunk__24059_24063;
var G__24069 = count__24060_24064;
var G__24070 = (i__24061_24065 + (1));
seq__24058_24062 = G__24067;
chunk__24059_24063 = G__24068;
count__24060_24064 = G__24069;
i__24061_24065 = G__24070;
continue;
} else {
var temp__4657__auto___24071 = cljs.core.seq.call(null,seq__24058_24062);
if(temp__4657__auto___24071){
var seq__24058_24072__$1 = temp__4657__auto___24071;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24058_24072__$1)){
var c__17667__auto___24073 = cljs.core.chunk_first.call(null,seq__24058_24072__$1);
var G__24074 = cljs.core.chunk_rest.call(null,seq__24058_24072__$1);
var G__24075 = c__17667__auto___24073;
var G__24076 = cljs.core.count.call(null,c__17667__auto___24073);
var G__24077 = (0);
seq__24058_24062 = G__24074;
chunk__24059_24063 = G__24075;
count__24060_24064 = G__24076;
i__24061_24065 = G__24077;
continue;
} else {
var msg_24078 = cljs.core.first.call(null,seq__24058_24072__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_24078);

var G__24079 = cljs.core.next.call(null,seq__24058_24072__$1);
var G__24080 = null;
var G__24081 = (0);
var G__24082 = (0);
seq__24058_24062 = G__24079;
chunk__24059_24063 = G__24080;
count__24060_24064 = G__24081;
i__24061_24065 = G__24082;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__24083){
var map__24086 = p__24083;
var map__24086__$1 = ((((!((map__24086 == null)))?((((map__24086.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24086.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24086):map__24086);
var w = map__24086__$1;
var message = cljs.core.get.call(null,map__24086__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__16852__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16852__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16852__auto__;
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
var seq__24094 = cljs.core.seq.call(null,plugins);
var chunk__24095 = null;
var count__24096 = (0);
var i__24097 = (0);
while(true){
if((i__24097 < count__24096)){
var vec__24098 = cljs.core._nth.call(null,chunk__24095,i__24097);
var k = cljs.core.nth.call(null,vec__24098,(0),null);
var plugin = cljs.core.nth.call(null,vec__24098,(1),null);
if(cljs.core.truth_(plugin)){
var pl_24100 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__24094,chunk__24095,count__24096,i__24097,pl_24100,vec__24098,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_24100.call(null,msg_hist);
});})(seq__24094,chunk__24095,count__24096,i__24097,pl_24100,vec__24098,k,plugin))
);
} else {
}

var G__24101 = seq__24094;
var G__24102 = chunk__24095;
var G__24103 = count__24096;
var G__24104 = (i__24097 + (1));
seq__24094 = G__24101;
chunk__24095 = G__24102;
count__24096 = G__24103;
i__24097 = G__24104;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__24094);
if(temp__4657__auto__){
var seq__24094__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24094__$1)){
var c__17667__auto__ = cljs.core.chunk_first.call(null,seq__24094__$1);
var G__24105 = cljs.core.chunk_rest.call(null,seq__24094__$1);
var G__24106 = c__17667__auto__;
var G__24107 = cljs.core.count.call(null,c__17667__auto__);
var G__24108 = (0);
seq__24094 = G__24105;
chunk__24095 = G__24106;
count__24096 = G__24107;
i__24097 = G__24108;
continue;
} else {
var vec__24099 = cljs.core.first.call(null,seq__24094__$1);
var k = cljs.core.nth.call(null,vec__24099,(0),null);
var plugin = cljs.core.nth.call(null,vec__24099,(1),null);
if(cljs.core.truth_(plugin)){
var pl_24109 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__24094,chunk__24095,count__24096,i__24097,pl_24109,vec__24099,k,plugin,seq__24094__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_24109.call(null,msg_hist);
});})(seq__24094,chunk__24095,count__24096,i__24097,pl_24109,vec__24099,k,plugin,seq__24094__$1,temp__4657__auto__))
);
} else {
}

var G__24110 = cljs.core.next.call(null,seq__24094__$1);
var G__24111 = null;
var G__24112 = (0);
var G__24113 = (0);
seq__24094 = G__24110;
chunk__24095 = G__24111;
count__24096 = G__24112;
i__24097 = G__24113;
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
var args24114 = [];
var len__17922__auto___24117 = arguments.length;
var i__17923__auto___24118 = (0);
while(true){
if((i__17923__auto___24118 < len__17922__auto___24117)){
args24114.push((arguments[i__17923__auto___24118]));

var G__24119 = (i__17923__auto___24118 + (1));
i__17923__auto___24118 = G__24119;
continue;
} else {
}
break;
}

var G__24116 = args24114.length;
switch (G__24116) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24114.length)].join('')));

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
var args__17929__auto__ = [];
var len__17922__auto___24125 = arguments.length;
var i__17923__auto___24126 = (0);
while(true){
if((i__17923__auto___24126 < len__17922__auto___24125)){
args__17929__auto__.push((arguments[i__17923__auto___24126]));

var G__24127 = (i__17923__auto___24126 + (1));
i__17923__auto___24126 = G__24127;
continue;
} else {
}
break;
}

var argseq__17930__auto__ = ((((0) < args__17929__auto__.length))?(new cljs.core.IndexedSeq(args__17929__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17930__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__24122){
var map__24123 = p__24122;
var map__24123__$1 = ((((!((map__24123 == null)))?((((map__24123.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24123.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24123):map__24123);
var opts = map__24123__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq24121){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24121));
});

//# sourceMappingURL=client.js.map