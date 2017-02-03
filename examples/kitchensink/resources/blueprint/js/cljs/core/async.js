// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args33295 = [];
var len__21280__auto___33301 = arguments.length;
var i__21281__auto___33302 = (0);
while(true){
if((i__21281__auto___33302 < len__21280__auto___33301)){
args33295.push((arguments[i__21281__auto___33302]));

var G__33303 = (i__21281__auto___33302 + (1));
i__21281__auto___33302 = G__33303;
continue;
} else {
}
break;
}

var G__33297 = args33295.length;
switch (G__33297) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33295.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async33298 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33298 = (function (f,blockable,meta33299){
this.f = f;
this.blockable = blockable;
this.meta33299 = meta33299;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async33298.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33300,meta33299__$1){
var self__ = this;
var _33300__$1 = this;
return (new cljs.core.async.t_cljs$core$async33298(self__.f,self__.blockable,meta33299__$1));
});


cljs.core.async.t_cljs$core$async33298.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33300){
var self__ = this;
var _33300__$1 = this;
return self__.meta33299;
});


cljs.core.async.t_cljs$core$async33298.prototype.cljs$core$async$impl$protocols$Handler$ = true;


cljs.core.async.t_cljs$core$async33298.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});


cljs.core.async.t_cljs$core$async33298.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});


cljs.core.async.t_cljs$core$async33298.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async33298.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta33299","meta33299",-1730213020,null)], null);
});

cljs.core.async.t_cljs$core$async33298.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33298.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33298";

cljs.core.async.t_cljs$core$async33298.cljs$lang$ctorPrWriter = (function (this__20749__auto__,writer__20750__auto__,opt__20751__auto__){
return cljs.core._write.call(null,writer__20750__auto__,"cljs.core.async/t_cljs$core$async33298");
});

cljs.core.async.__GT_t_cljs$core$async33298 = (function cljs$core$async$__GT_t_cljs$core$async33298(f__$1,blockable__$1,meta33299){
return (new cljs.core.async.t_cljs$core$async33298(f__$1,blockable__$1,meta33299));
});

}

return (new cljs.core.async.t_cljs$core$async33298(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args33307 = [];
var len__21280__auto___33310 = arguments.length;
var i__21281__auto___33311 = (0);
while(true){
if((i__21281__auto___33311 < len__21280__auto___33310)){
args33307.push((arguments[i__21281__auto___33311]));

var G__33312 = (i__21281__auto___33311 + (1));
i__21281__auto___33311 = G__33312;
continue;
} else {
}
break;
}

var G__33309 = args33307.length;
switch (G__33309) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33307.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args33314 = [];
var len__21280__auto___33317 = arguments.length;
var i__21281__auto___33318 = (0);
while(true){
if((i__21281__auto___33318 < len__21280__auto___33317)){
args33314.push((arguments[i__21281__auto___33318]));

var G__33319 = (i__21281__auto___33318 + (1));
i__21281__auto___33318 = G__33319;
continue;
} else {
}
break;
}

var G__33316 = args33314.length;
switch (G__33316) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33314.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args33321 = [];
var len__21280__auto___33324 = arguments.length;
var i__21281__auto___33325 = (0);
while(true){
if((i__21281__auto___33325 < len__21280__auto___33324)){
args33321.push((arguments[i__21281__auto___33325]));

var G__33326 = (i__21281__auto___33325 + (1));
i__21281__auto___33325 = G__33326;
continue;
} else {
}
break;
}

var G__33323 = args33321.length;
switch (G__33323) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33321.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_33328 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_33328);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_33328,ret){
return (function (){
return fn1.call(null,val_33328);
});})(val_33328,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args33329 = [];
var len__21280__auto___33332 = arguments.length;
var i__21281__auto___33333 = (0);
while(true){
if((i__21281__auto___33333 < len__21280__auto___33332)){
args33329.push((arguments[i__21281__auto___33333]));

var G__33334 = (i__21281__auto___33333 + (1));
i__21281__auto___33333 = G__33334;
continue;
} else {
}
break;
}

var G__33331 = args33329.length;
switch (G__33331) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33329.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__6726__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__6726__auto__)){
var ret = temp__6726__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__6726__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__6726__auto__)){
var retb = temp__6726__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__6726__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__6726__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__21110__auto___33336 = n;
var x_33337 = (0);
while(true){
if((x_33337 < n__21110__auto___33336)){
(a[x_33337] = (0));

var G__33338 = (x_33337 + (1));
x_33337 = G__33338;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__33339 = (i + (1));
i = G__33339;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async33343 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33343 = (function (alt_flag,flag,meta33344){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta33344 = meta33344;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async33343.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_33345,meta33344__$1){
var self__ = this;
var _33345__$1 = this;
return (new cljs.core.async.t_cljs$core$async33343(self__.alt_flag,self__.flag,meta33344__$1));
});})(flag))
;


cljs.core.async.t_cljs$core$async33343.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_33345){
var self__ = this;
var _33345__$1 = this;
return self__.meta33344;
});})(flag))
;


cljs.core.async.t_cljs$core$async33343.prototype.cljs$core$async$impl$protocols$Handler$ = true;


cljs.core.async.t_cljs$core$async33343.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;


cljs.core.async.t_cljs$core$async33343.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;


cljs.core.async.t_cljs$core$async33343.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async33343.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta33344","meta33344",-214089141,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async33343.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33343.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33343";

cljs.core.async.t_cljs$core$async33343.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__20749__auto__,writer__20750__auto__,opt__20751__auto__){
return cljs.core._write.call(null,writer__20750__auto__,"cljs.core.async/t_cljs$core$async33343");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async33343 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async33343(alt_flag__$1,flag__$1,meta33344){
return (new cljs.core.async.t_cljs$core$async33343(alt_flag__$1,flag__$1,meta33344));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async33343(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async33349 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33349 = (function (alt_handler,flag,cb,meta33350){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta33350 = meta33350;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async33349.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33351,meta33350__$1){
var self__ = this;
var _33351__$1 = this;
return (new cljs.core.async.t_cljs$core$async33349(self__.alt_handler,self__.flag,self__.cb,meta33350__$1));
});


cljs.core.async.t_cljs$core$async33349.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33351){
var self__ = this;
var _33351__$1 = this;
return self__.meta33350;
});


cljs.core.async.t_cljs$core$async33349.prototype.cljs$core$async$impl$protocols$Handler$ = true;


cljs.core.async.t_cljs$core$async33349.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});


cljs.core.async.t_cljs$core$async33349.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});


cljs.core.async.t_cljs$core$async33349.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async33349.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta33350","meta33350",2055807511,null)], null);
});

cljs.core.async.t_cljs$core$async33349.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33349.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33349";

cljs.core.async.t_cljs$core$async33349.cljs$lang$ctorPrWriter = (function (this__20749__auto__,writer__20750__auto__,opt__20751__auto__){
return cljs.core._write.call(null,writer__20750__auto__,"cljs.core.async/t_cljs$core$async33349");
});

cljs.core.async.__GT_t_cljs$core$async33349 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async33349(alt_handler__$1,flag__$1,cb__$1,meta33350){
return (new cljs.core.async.t_cljs$core$async33349(alt_handler__$1,flag__$1,cb__$1,meta33350));
});

}

return (new cljs.core.async.t_cljs$core$async33349(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33352_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33352_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33353_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33353_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__20097__auto__ = wport;
if(cljs.core.truth_(or__20097__auto__)){
return or__20097__auto__;
} else {
return port;
}
})()], null));
} else {
var G__33354 = (i + (1));
i = G__33354;
continue;
}
} else {
return null;
}
break;
}
})();
var or__20097__auto__ = ret;
if(cljs.core.truth_(or__20097__auto__)){
return or__20097__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__6728__auto__ = (function (){var and__20085__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__20085__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__20085__auto__;
}
})();
if(cljs.core.truth_(temp__6728__auto__)){
var got = temp__6728__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__21287__auto__ = [];
var len__21280__auto___33360 = arguments.length;
var i__21281__auto___33361 = (0);
while(true){
if((i__21281__auto___33361 < len__21280__auto___33360)){
args__21287__auto__.push((arguments[i__21281__auto___33361]));

var G__33362 = (i__21281__auto___33361 + (1));
i__21281__auto___33361 = G__33362;
continue;
} else {
}
break;
}

var argseq__21288__auto__ = ((((1) < args__21287__auto__.length))?(new cljs.core.IndexedSeq(args__21287__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21288__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__33357){
var map__33358 = p__33357;
var map__33358__$1 = ((((!((map__33358 == null)))?((((map__33358.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33358.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33358):map__33358);
var opts = map__33358__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq33355){
var G__33356 = cljs.core.first.call(null,seq33355);
var seq33355__$1 = cljs.core.next.call(null,seq33355);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33356,seq33355__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args33363 = [];
var len__21280__auto___33413 = arguments.length;
var i__21281__auto___33414 = (0);
while(true){
if((i__21281__auto___33414 < len__21280__auto___33413)){
args33363.push((arguments[i__21281__auto___33414]));

var G__33415 = (i__21281__auto___33414 + (1));
i__21281__auto___33414 = G__33415;
continue;
} else {
}
break;
}

var G__33365 = args33363.length;
switch (G__33365) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33363.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__33236__auto___33417 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33236__auto___33417){
return (function (){
var f__33237__auto__ = (function (){var switch__33122__auto__ = ((function (c__33236__auto___33417){
return (function (state_33389){
var state_val_33390 = (state_33389[(1)]);
if((state_val_33390 === (7))){
var inst_33385 = (state_33389[(2)]);
var state_33389__$1 = state_33389;
var statearr_33391_33418 = state_33389__$1;
(statearr_33391_33418[(2)] = inst_33385);

(statearr_33391_33418[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33390 === (1))){
var state_33389__$1 = state_33389;
var statearr_33392_33419 = state_33389__$1;
(statearr_33392_33419[(2)] = null);

(statearr_33392_33419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33390 === (4))){
var inst_33368 = (state_33389[(7)]);
var inst_33368__$1 = (state_33389[(2)]);
var inst_33369 = (inst_33368__$1 == null);
var state_33389__$1 = (function (){var statearr_33393 = state_33389;
(statearr_33393[(7)] = inst_33368__$1);

return statearr_33393;
})();
if(cljs.core.truth_(inst_33369)){
var statearr_33394_33420 = state_33389__$1;
(statearr_33394_33420[(1)] = (5));

} else {
var statearr_33395_33421 = state_33389__$1;
(statearr_33395_33421[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33390 === (13))){
var state_33389__$1 = state_33389;
var statearr_33396_33422 = state_33389__$1;
(statearr_33396_33422[(2)] = null);

(statearr_33396_33422[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33390 === (6))){
var inst_33368 = (state_33389[(7)]);
var state_33389__$1 = state_33389;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33389__$1,(11),to,inst_33368);
} else {
if((state_val_33390 === (3))){
var inst_33387 = (state_33389[(2)]);
var state_33389__$1 = state_33389;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33389__$1,inst_33387);
} else {
if((state_val_33390 === (12))){
var state_33389__$1 = state_33389;
var statearr_33397_33423 = state_33389__$1;
(statearr_33397_33423[(2)] = null);

(statearr_33397_33423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33390 === (2))){
var state_33389__$1 = state_33389;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33389__$1,(4),from);
} else {
if((state_val_33390 === (11))){
var inst_33378 = (state_33389[(2)]);
var state_33389__$1 = state_33389;
if(cljs.core.truth_(inst_33378)){
var statearr_33398_33424 = state_33389__$1;
(statearr_33398_33424[(1)] = (12));

} else {
var statearr_33399_33425 = state_33389__$1;
(statearr_33399_33425[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33390 === (9))){
var state_33389__$1 = state_33389;
var statearr_33400_33426 = state_33389__$1;
(statearr_33400_33426[(2)] = null);

(statearr_33400_33426[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33390 === (5))){
var state_33389__$1 = state_33389;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33401_33427 = state_33389__$1;
(statearr_33401_33427[(1)] = (8));

} else {
var statearr_33402_33428 = state_33389__$1;
(statearr_33402_33428[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33390 === (14))){
var inst_33383 = (state_33389[(2)]);
var state_33389__$1 = state_33389;
var statearr_33403_33429 = state_33389__$1;
(statearr_33403_33429[(2)] = inst_33383);

(statearr_33403_33429[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33390 === (10))){
var inst_33375 = (state_33389[(2)]);
var state_33389__$1 = state_33389;
var statearr_33404_33430 = state_33389__$1;
(statearr_33404_33430[(2)] = inst_33375);

(statearr_33404_33430[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33390 === (8))){
var inst_33372 = cljs.core.async.close_BANG_.call(null,to);
var state_33389__$1 = state_33389;
var statearr_33405_33431 = state_33389__$1;
(statearr_33405_33431[(2)] = inst_33372);

(statearr_33405_33431[(1)] = (10));


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
});})(c__33236__auto___33417))
;
return ((function (switch__33122__auto__,c__33236__auto___33417){
return (function() {
var cljs$core$async$state_machine__33123__auto__ = null;
var cljs$core$async$state_machine__33123__auto____0 = (function (){
var statearr_33409 = [null,null,null,null,null,null,null,null];
(statearr_33409[(0)] = cljs$core$async$state_machine__33123__auto__);

(statearr_33409[(1)] = (1));

return statearr_33409;
});
var cljs$core$async$state_machine__33123__auto____1 = (function (state_33389){
while(true){
var ret_value__33124__auto__ = (function (){try{while(true){
var result__33125__auto__ = switch__33122__auto__.call(null,state_33389);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33125__auto__;
}
break;
}
}catch (e33410){if((e33410 instanceof Object)){
var ex__33126__auto__ = e33410;
var statearr_33411_33432 = state_33389;
(statearr_33411_33432[(5)] = ex__33126__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33389);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33410;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33124__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33433 = state_33389;
state_33389 = G__33433;
continue;
} else {
return ret_value__33124__auto__;
}
break;
}
});
cljs$core$async$state_machine__33123__auto__ = function(state_33389){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33123__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33123__auto____1.call(this,state_33389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33123__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33123__auto____0;
cljs$core$async$state_machine__33123__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33123__auto____1;
return cljs$core$async$state_machine__33123__auto__;
})()
;})(switch__33122__auto__,c__33236__auto___33417))
})();
var state__33238__auto__ = (function (){var statearr_33412 = f__33237__auto__.call(null);
(statearr_33412[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33236__auto___33417);

return statearr_33412;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33238__auto__);
});})(c__33236__auto___33417))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__33621){
var vec__33622 = p__33621;
var v = cljs.core.nth.call(null,vec__33622,(0),null);
var p = cljs.core.nth.call(null,vec__33622,(1),null);
var job = vec__33622;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__33236__auto___33808 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33236__auto___33808,res,vec__33622,v,p,job,jobs,results){
return (function (){
var f__33237__auto__ = (function (){var switch__33122__auto__ = ((function (c__33236__auto___33808,res,vec__33622,v,p,job,jobs,results){
return (function (state_33629){
var state_val_33630 = (state_33629[(1)]);
if((state_val_33630 === (1))){
var state_33629__$1 = state_33629;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33629__$1,(2),res,v);
} else {
if((state_val_33630 === (2))){
var inst_33626 = (state_33629[(2)]);
var inst_33627 = cljs.core.async.close_BANG_.call(null,res);
var state_33629__$1 = (function (){var statearr_33631 = state_33629;
(statearr_33631[(7)] = inst_33626);

return statearr_33631;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33629__$1,inst_33627);
} else {
return null;
}
}
});})(c__33236__auto___33808,res,vec__33622,v,p,job,jobs,results))
;
return ((function (switch__33122__auto__,c__33236__auto___33808,res,vec__33622,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33123__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33123__auto____0 = (function (){
var statearr_33635 = [null,null,null,null,null,null,null,null];
(statearr_33635[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33123__auto__);

(statearr_33635[(1)] = (1));

return statearr_33635;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33123__auto____1 = (function (state_33629){
while(true){
var ret_value__33124__auto__ = (function (){try{while(true){
var result__33125__auto__ = switch__33122__auto__.call(null,state_33629);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33125__auto__;
}
break;
}
}catch (e33636){if((e33636 instanceof Object)){
var ex__33126__auto__ = e33636;
var statearr_33637_33809 = state_33629;
(statearr_33637_33809[(5)] = ex__33126__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33629);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33636;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33124__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33810 = state_33629;
state_33629 = G__33810;
continue;
} else {
return ret_value__33124__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33123__auto__ = function(state_33629){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33123__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33123__auto____1.call(this,state_33629);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33123__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33123__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33123__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33123__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33123__auto__;
})()
;})(switch__33122__auto__,c__33236__auto___33808,res,vec__33622,v,p,job,jobs,results))
})();
var state__33238__auto__ = (function (){var statearr_33638 = f__33237__auto__.call(null);
(statearr_33638[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33236__auto___33808);

return statearr_33638;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33238__auto__);
});})(c__33236__auto___33808,res,vec__33622,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__33639){
var vec__33640 = p__33639;
var v = cljs.core.nth.call(null,vec__33640,(0),null);
var p = cljs.core.nth.call(null,vec__33640,(1),null);
var job = vec__33640;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__21110__auto___33811 = n;
var __33812 = (0);
while(true){
if((__33812 < n__21110__auto___33811)){
var G__33643_33813 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__33643_33813) {
case "compute":
var c__33236__auto___33815 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__33812,c__33236__auto___33815,G__33643_33813,n__21110__auto___33811,jobs,results,process,async){
return (function (){
var f__33237__auto__ = (function (){var switch__33122__auto__ = ((function (__33812,c__33236__auto___33815,G__33643_33813,n__21110__auto___33811,jobs,results,process,async){
return (function (state_33656){
var state_val_33657 = (state_33656[(1)]);
if((state_val_33657 === (1))){
var state_33656__$1 = state_33656;
var statearr_33658_33816 = state_33656__$1;
(statearr_33658_33816[(2)] = null);

(statearr_33658_33816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33657 === (2))){
var state_33656__$1 = state_33656;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33656__$1,(4),jobs);
} else {
if((state_val_33657 === (3))){
var inst_33654 = (state_33656[(2)]);
var state_33656__$1 = state_33656;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33656__$1,inst_33654);
} else {
if((state_val_33657 === (4))){
var inst_33646 = (state_33656[(2)]);
var inst_33647 = process.call(null,inst_33646);
var state_33656__$1 = state_33656;
if(cljs.core.truth_(inst_33647)){
var statearr_33659_33817 = state_33656__$1;
(statearr_33659_33817[(1)] = (5));

} else {
var statearr_33660_33818 = state_33656__$1;
(statearr_33660_33818[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33657 === (5))){
var state_33656__$1 = state_33656;
var statearr_33661_33819 = state_33656__$1;
(statearr_33661_33819[(2)] = null);

(statearr_33661_33819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33657 === (6))){
var state_33656__$1 = state_33656;
var statearr_33662_33820 = state_33656__$1;
(statearr_33662_33820[(2)] = null);

(statearr_33662_33820[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33657 === (7))){
var inst_33652 = (state_33656[(2)]);
var state_33656__$1 = state_33656;
var statearr_33663_33821 = state_33656__$1;
(statearr_33663_33821[(2)] = inst_33652);

(statearr_33663_33821[(1)] = (3));


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
});})(__33812,c__33236__auto___33815,G__33643_33813,n__21110__auto___33811,jobs,results,process,async))
;
return ((function (__33812,switch__33122__auto__,c__33236__auto___33815,G__33643_33813,n__21110__auto___33811,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33123__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33123__auto____0 = (function (){
var statearr_33667 = [null,null,null,null,null,null,null];
(statearr_33667[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33123__auto__);

(statearr_33667[(1)] = (1));

return statearr_33667;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33123__auto____1 = (function (state_33656){
while(true){
var ret_value__33124__auto__ = (function (){try{while(true){
var result__33125__auto__ = switch__33122__auto__.call(null,state_33656);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33125__auto__;
}
break;
}
}catch (e33668){if((e33668 instanceof Object)){
var ex__33126__auto__ = e33668;
var statearr_33669_33822 = state_33656;
(statearr_33669_33822[(5)] = ex__33126__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33656);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33668;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33124__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33823 = state_33656;
state_33656 = G__33823;
continue;
} else {
return ret_value__33124__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33123__auto__ = function(state_33656){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33123__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33123__auto____1.call(this,state_33656);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33123__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33123__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33123__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33123__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33123__auto__;
})()
;})(__33812,switch__33122__auto__,c__33236__auto___33815,G__33643_33813,n__21110__auto___33811,jobs,results,process,async))
})();
var state__33238__auto__ = (function (){var statearr_33670 = f__33237__auto__.call(null);
(statearr_33670[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33236__auto___33815);

return statearr_33670;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33238__auto__);
});})(__33812,c__33236__auto___33815,G__33643_33813,n__21110__auto___33811,jobs,results,process,async))
);


break;
case "async":
var c__33236__auto___33824 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__33812,c__33236__auto___33824,G__33643_33813,n__21110__auto___33811,jobs,results,process,async){
return (function (){
var f__33237__auto__ = (function (){var switch__33122__auto__ = ((function (__33812,c__33236__auto___33824,G__33643_33813,n__21110__auto___33811,jobs,results,process,async){
return (function (state_33683){
var state_val_33684 = (state_33683[(1)]);
if((state_val_33684 === (1))){
var state_33683__$1 = state_33683;
var statearr_33685_33825 = state_33683__$1;
(statearr_33685_33825[(2)] = null);

(statearr_33685_33825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33684 === (2))){
var state_33683__$1 = state_33683;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33683__$1,(4),jobs);
} else {
if((state_val_33684 === (3))){
var inst_33681 = (state_33683[(2)]);
var state_33683__$1 = state_33683;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33683__$1,inst_33681);
} else {
if((state_val_33684 === (4))){
var inst_33673 = (state_33683[(2)]);
var inst_33674 = async.call(null,inst_33673);
var state_33683__$1 = state_33683;
if(cljs.core.truth_(inst_33674)){
var statearr_33686_33826 = state_33683__$1;
(statearr_33686_33826[(1)] = (5));

} else {
var statearr_33687_33827 = state_33683__$1;
(statearr_33687_33827[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33684 === (5))){
var state_33683__$1 = state_33683;
var statearr_33688_33828 = state_33683__$1;
(statearr_33688_33828[(2)] = null);

(statearr_33688_33828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33684 === (6))){
var state_33683__$1 = state_33683;
var statearr_33689_33829 = state_33683__$1;
(statearr_33689_33829[(2)] = null);

(statearr_33689_33829[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33684 === (7))){
var inst_33679 = (state_33683[(2)]);
var state_33683__$1 = state_33683;
var statearr_33690_33830 = state_33683__$1;
(statearr_33690_33830[(2)] = inst_33679);

(statearr_33690_33830[(1)] = (3));


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
});})(__33812,c__33236__auto___33824,G__33643_33813,n__21110__auto___33811,jobs,results,process,async))
;
return ((function (__33812,switch__33122__auto__,c__33236__auto___33824,G__33643_33813,n__21110__auto___33811,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33123__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33123__auto____0 = (function (){
var statearr_33694 = [null,null,null,null,null,null,null];
(statearr_33694[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33123__auto__);

(statearr_33694[(1)] = (1));

return statearr_33694;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33123__auto____1 = (function (state_33683){
while(true){
var ret_value__33124__auto__ = (function (){try{while(true){
var result__33125__auto__ = switch__33122__auto__.call(null,state_33683);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33125__auto__;
}
break;
}
}catch (e33695){if((e33695 instanceof Object)){
var ex__33126__auto__ = e33695;
var statearr_33696_33831 = state_33683;
(statearr_33696_33831[(5)] = ex__33126__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33683);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33695;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33124__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33832 = state_33683;
state_33683 = G__33832;
continue;
} else {
return ret_value__33124__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33123__auto__ = function(state_33683){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33123__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33123__auto____1.call(this,state_33683);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33123__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33123__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33123__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33123__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33123__auto__;
})()
;})(__33812,switch__33122__auto__,c__33236__auto___33824,G__33643_33813,n__21110__auto___33811,jobs,results,process,async))
})();
var state__33238__auto__ = (function (){var statearr_33697 = f__33237__auto__.call(null);
(statearr_33697[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33236__auto___33824);

return statearr_33697;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33238__auto__);
});})(__33812,c__33236__auto___33824,G__33643_33813,n__21110__auto___33811,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__33833 = (__33812 + (1));
__33812 = G__33833;
continue;
} else {
}
break;
}

var c__33236__auto___33834 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33236__auto___33834,jobs,results,process,async){
return (function (){
var f__33237__auto__ = (function (){var switch__33122__auto__ = ((function (c__33236__auto___33834,jobs,results,process,async){
return (function (state_33719){
var state_val_33720 = (state_33719[(1)]);
if((state_val_33720 === (1))){
var state_33719__$1 = state_33719;
var statearr_33721_33835 = state_33719__$1;
(statearr_33721_33835[(2)] = null);

(statearr_33721_33835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33720 === (2))){
var state_33719__$1 = state_33719;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33719__$1,(4),from);
} else {
if((state_val_33720 === (3))){
var inst_33717 = (state_33719[(2)]);
var state_33719__$1 = state_33719;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33719__$1,inst_33717);
} else {
if((state_val_33720 === (4))){
var inst_33700 = (state_33719[(7)]);
var inst_33700__$1 = (state_33719[(2)]);
var inst_33701 = (inst_33700__$1 == null);
var state_33719__$1 = (function (){var statearr_33722 = state_33719;
(statearr_33722[(7)] = inst_33700__$1);

return statearr_33722;
})();
if(cljs.core.truth_(inst_33701)){
var statearr_33723_33836 = state_33719__$1;
(statearr_33723_33836[(1)] = (5));

} else {
var statearr_33724_33837 = state_33719__$1;
(statearr_33724_33837[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33720 === (5))){
var inst_33703 = cljs.core.async.close_BANG_.call(null,jobs);
var state_33719__$1 = state_33719;
var statearr_33725_33838 = state_33719__$1;
(statearr_33725_33838[(2)] = inst_33703);

(statearr_33725_33838[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33720 === (6))){
var inst_33700 = (state_33719[(7)]);
var inst_33705 = (state_33719[(8)]);
var inst_33705__$1 = cljs.core.async.chan.call(null,(1));
var inst_33706 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33707 = [inst_33700,inst_33705__$1];
var inst_33708 = (new cljs.core.PersistentVector(null,2,(5),inst_33706,inst_33707,null));
var state_33719__$1 = (function (){var statearr_33726 = state_33719;
(statearr_33726[(8)] = inst_33705__$1);

return statearr_33726;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33719__$1,(8),jobs,inst_33708);
} else {
if((state_val_33720 === (7))){
var inst_33715 = (state_33719[(2)]);
var state_33719__$1 = state_33719;
var statearr_33727_33839 = state_33719__$1;
(statearr_33727_33839[(2)] = inst_33715);

(statearr_33727_33839[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33720 === (8))){
var inst_33705 = (state_33719[(8)]);
var inst_33710 = (state_33719[(2)]);
var state_33719__$1 = (function (){var statearr_33728 = state_33719;
(statearr_33728[(9)] = inst_33710);

return statearr_33728;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33719__$1,(9),results,inst_33705);
} else {
if((state_val_33720 === (9))){
var inst_33712 = (state_33719[(2)]);
var state_33719__$1 = (function (){var statearr_33729 = state_33719;
(statearr_33729[(10)] = inst_33712);

return statearr_33729;
})();
var statearr_33730_33840 = state_33719__$1;
(statearr_33730_33840[(2)] = null);

(statearr_33730_33840[(1)] = (2));


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
});})(c__33236__auto___33834,jobs,results,process,async))
;
return ((function (switch__33122__auto__,c__33236__auto___33834,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33123__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33123__auto____0 = (function (){
var statearr_33734 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33734[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33123__auto__);

(statearr_33734[(1)] = (1));

return statearr_33734;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33123__auto____1 = (function (state_33719){
while(true){
var ret_value__33124__auto__ = (function (){try{while(true){
var result__33125__auto__ = switch__33122__auto__.call(null,state_33719);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33125__auto__;
}
break;
}
}catch (e33735){if((e33735 instanceof Object)){
var ex__33126__auto__ = e33735;
var statearr_33736_33841 = state_33719;
(statearr_33736_33841[(5)] = ex__33126__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33719);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33735;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33124__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33842 = state_33719;
state_33719 = G__33842;
continue;
} else {
return ret_value__33124__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33123__auto__ = function(state_33719){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33123__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33123__auto____1.call(this,state_33719);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33123__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33123__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33123__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33123__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33123__auto__;
})()
;})(switch__33122__auto__,c__33236__auto___33834,jobs,results,process,async))
})();
var state__33238__auto__ = (function (){var statearr_33737 = f__33237__auto__.call(null);
(statearr_33737[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33236__auto___33834);

return statearr_33737;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33238__auto__);
});})(c__33236__auto___33834,jobs,results,process,async))
);


var c__33236__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33236__auto__,jobs,results,process,async){
return (function (){
var f__33237__auto__ = (function (){var switch__33122__auto__ = ((function (c__33236__auto__,jobs,results,process,async){
return (function (state_33775){
var state_val_33776 = (state_33775[(1)]);
if((state_val_33776 === (7))){
var inst_33771 = (state_33775[(2)]);
var state_33775__$1 = state_33775;
var statearr_33777_33843 = state_33775__$1;
(statearr_33777_33843[(2)] = inst_33771);

(statearr_33777_33843[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33776 === (20))){
var state_33775__$1 = state_33775;
var statearr_33778_33844 = state_33775__$1;
(statearr_33778_33844[(2)] = null);

(statearr_33778_33844[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33776 === (1))){
var state_33775__$1 = state_33775;
var statearr_33779_33845 = state_33775__$1;
(statearr_33779_33845[(2)] = null);

(statearr_33779_33845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33776 === (4))){
var inst_33740 = (state_33775[(7)]);
var inst_33740__$1 = (state_33775[(2)]);
var inst_33741 = (inst_33740__$1 == null);
var state_33775__$1 = (function (){var statearr_33780 = state_33775;
(statearr_33780[(7)] = inst_33740__$1);

return statearr_33780;
})();
if(cljs.core.truth_(inst_33741)){
var statearr_33781_33846 = state_33775__$1;
(statearr_33781_33846[(1)] = (5));

} else {
var statearr_33782_33847 = state_33775__$1;
(statearr_33782_33847[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33776 === (15))){
var inst_33753 = (state_33775[(8)]);
var state_33775__$1 = state_33775;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33775__$1,(18),to,inst_33753);
} else {
if((state_val_33776 === (21))){
var inst_33766 = (state_33775[(2)]);
var state_33775__$1 = state_33775;
var statearr_33783_33848 = state_33775__$1;
(statearr_33783_33848[(2)] = inst_33766);

(statearr_33783_33848[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33776 === (13))){
var inst_33768 = (state_33775[(2)]);
var state_33775__$1 = (function (){var statearr_33784 = state_33775;
(statearr_33784[(9)] = inst_33768);

return statearr_33784;
})();
var statearr_33785_33849 = state_33775__$1;
(statearr_33785_33849[(2)] = null);

(statearr_33785_33849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33776 === (6))){
var inst_33740 = (state_33775[(7)]);
var state_33775__$1 = state_33775;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33775__$1,(11),inst_33740);
} else {
if((state_val_33776 === (17))){
var inst_33761 = (state_33775[(2)]);
var state_33775__$1 = state_33775;
if(cljs.core.truth_(inst_33761)){
var statearr_33786_33850 = state_33775__$1;
(statearr_33786_33850[(1)] = (19));

} else {
var statearr_33787_33851 = state_33775__$1;
(statearr_33787_33851[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33776 === (3))){
var inst_33773 = (state_33775[(2)]);
var state_33775__$1 = state_33775;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33775__$1,inst_33773);
} else {
if((state_val_33776 === (12))){
var inst_33750 = (state_33775[(10)]);
var state_33775__$1 = state_33775;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33775__$1,(14),inst_33750);
} else {
if((state_val_33776 === (2))){
var state_33775__$1 = state_33775;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33775__$1,(4),results);
} else {
if((state_val_33776 === (19))){
var state_33775__$1 = state_33775;
var statearr_33788_33852 = state_33775__$1;
(statearr_33788_33852[(2)] = null);

(statearr_33788_33852[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33776 === (11))){
var inst_33750 = (state_33775[(2)]);
var state_33775__$1 = (function (){var statearr_33789 = state_33775;
(statearr_33789[(10)] = inst_33750);

return statearr_33789;
})();
var statearr_33790_33853 = state_33775__$1;
(statearr_33790_33853[(2)] = null);

(statearr_33790_33853[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33776 === (9))){
var state_33775__$1 = state_33775;
var statearr_33791_33854 = state_33775__$1;
(statearr_33791_33854[(2)] = null);

(statearr_33791_33854[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33776 === (5))){
var state_33775__$1 = state_33775;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33792_33855 = state_33775__$1;
(statearr_33792_33855[(1)] = (8));

} else {
var statearr_33793_33856 = state_33775__$1;
(statearr_33793_33856[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33776 === (14))){
var inst_33753 = (state_33775[(8)]);
var inst_33755 = (state_33775[(11)]);
var inst_33753__$1 = (state_33775[(2)]);
var inst_33754 = (inst_33753__$1 == null);
var inst_33755__$1 = cljs.core.not.call(null,inst_33754);
var state_33775__$1 = (function (){var statearr_33794 = state_33775;
(statearr_33794[(8)] = inst_33753__$1);

(statearr_33794[(11)] = inst_33755__$1);

return statearr_33794;
})();
if(inst_33755__$1){
var statearr_33795_33857 = state_33775__$1;
(statearr_33795_33857[(1)] = (15));

} else {
var statearr_33796_33858 = state_33775__$1;
(statearr_33796_33858[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33776 === (16))){
var inst_33755 = (state_33775[(11)]);
var state_33775__$1 = state_33775;
var statearr_33797_33859 = state_33775__$1;
(statearr_33797_33859[(2)] = inst_33755);

(statearr_33797_33859[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33776 === (10))){
var inst_33747 = (state_33775[(2)]);
var state_33775__$1 = state_33775;
var statearr_33798_33860 = state_33775__$1;
(statearr_33798_33860[(2)] = inst_33747);

(statearr_33798_33860[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33776 === (18))){
var inst_33758 = (state_33775[(2)]);
var state_33775__$1 = state_33775;
var statearr_33799_33861 = state_33775__$1;
(statearr_33799_33861[(2)] = inst_33758);

(statearr_33799_33861[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33776 === (8))){
var inst_33744 = cljs.core.async.close_BANG_.call(null,to);
var state_33775__$1 = state_33775;
var statearr_33800_33862 = state_33775__$1;
(statearr_33800_33862[(2)] = inst_33744);

(statearr_33800_33862[(1)] = (10));


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
});})(c__33236__auto__,jobs,results,process,async))
;
return ((function (switch__33122__auto__,c__33236__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33123__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33123__auto____0 = (function (){
var statearr_33804 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33804[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33123__auto__);

(statearr_33804[(1)] = (1));

return statearr_33804;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33123__auto____1 = (function (state_33775){
while(true){
var ret_value__33124__auto__ = (function (){try{while(true){
var result__33125__auto__ = switch__33122__auto__.call(null,state_33775);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33125__auto__;
}
break;
}
}catch (e33805){if((e33805 instanceof Object)){
var ex__33126__auto__ = e33805;
var statearr_33806_33863 = state_33775;
(statearr_33806_33863[(5)] = ex__33126__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33775);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33805;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33124__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33864 = state_33775;
state_33775 = G__33864;
continue;
} else {
return ret_value__33124__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33123__auto__ = function(state_33775){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33123__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33123__auto____1.call(this,state_33775);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33123__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33123__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33123__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33123__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33123__auto__;
})()
;})(switch__33122__auto__,c__33236__auto__,jobs,results,process,async))
})();
var state__33238__auto__ = (function (){var statearr_33807 = f__33237__auto__.call(null);
(statearr_33807[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33236__auto__);

return statearr_33807;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33238__auto__);
});})(c__33236__auto__,jobs,results,process,async))
);

return c__33236__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args33865 = [];
var len__21280__auto___33868 = arguments.length;
var i__21281__auto___33869 = (0);
while(true){
if((i__21281__auto___33869 < len__21280__auto___33868)){
args33865.push((arguments[i__21281__auto___33869]));

var G__33870 = (i__21281__auto___33869 + (1));
i__21281__auto___33869 = G__33870;
continue;
} else {
}
break;
}

var G__33867 = args33865.length;
switch (G__33867) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33865.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args33872 = [];
var len__21280__auto___33875 = arguments.length;
var i__21281__auto___33876 = (0);
while(true){
if((i__21281__auto___33876 < len__21280__auto___33875)){
args33872.push((arguments[i__21281__auto___33876]));

var G__33877 = (i__21281__auto___33876 + (1));
i__21281__auto___33876 = G__33877;
continue;
} else {
}
break;
}

var G__33874 = args33872.length;
switch (G__33874) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33872.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args33879 = [];
var len__21280__auto___33932 = arguments.length;
var i__21281__auto___33933 = (0);
while(true){
if((i__21281__auto___33933 < len__21280__auto___33932)){
args33879.push((arguments[i__21281__auto___33933]));

var G__33934 = (i__21281__auto___33933 + (1));
i__21281__auto___33933 = G__33934;
continue;
} else {
}
break;
}

var G__33881 = args33879.length;
switch (G__33881) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33879.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__33236__auto___33936 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33236__auto___33936,tc,fc){
return (function (){
var f__33237__auto__ = (function (){var switch__33122__auto__ = ((function (c__33236__auto___33936,tc,fc){
return (function (state_33907){
var state_val_33908 = (state_33907[(1)]);
if((state_val_33908 === (7))){
var inst_33903 = (state_33907[(2)]);
var state_33907__$1 = state_33907;
var statearr_33909_33937 = state_33907__$1;
(statearr_33909_33937[(2)] = inst_33903);

(statearr_33909_33937[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33908 === (1))){
var state_33907__$1 = state_33907;
var statearr_33910_33938 = state_33907__$1;
(statearr_33910_33938[(2)] = null);

(statearr_33910_33938[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33908 === (4))){
var inst_33884 = (state_33907[(7)]);
var inst_33884__$1 = (state_33907[(2)]);
var inst_33885 = (inst_33884__$1 == null);
var state_33907__$1 = (function (){var statearr_33911 = state_33907;
(statearr_33911[(7)] = inst_33884__$1);

return statearr_33911;
})();
if(cljs.core.truth_(inst_33885)){
var statearr_33912_33939 = state_33907__$1;
(statearr_33912_33939[(1)] = (5));

} else {
var statearr_33913_33940 = state_33907__$1;
(statearr_33913_33940[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33908 === (13))){
var state_33907__$1 = state_33907;
var statearr_33914_33941 = state_33907__$1;
(statearr_33914_33941[(2)] = null);

(statearr_33914_33941[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33908 === (6))){
var inst_33884 = (state_33907[(7)]);
var inst_33890 = p.call(null,inst_33884);
var state_33907__$1 = state_33907;
if(cljs.core.truth_(inst_33890)){
var statearr_33915_33942 = state_33907__$1;
(statearr_33915_33942[(1)] = (9));

} else {
var statearr_33916_33943 = state_33907__$1;
(statearr_33916_33943[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33908 === (3))){
var inst_33905 = (state_33907[(2)]);
var state_33907__$1 = state_33907;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33907__$1,inst_33905);
} else {
if((state_val_33908 === (12))){
var state_33907__$1 = state_33907;
var statearr_33917_33944 = state_33907__$1;
(statearr_33917_33944[(2)] = null);

(statearr_33917_33944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33908 === (2))){
var state_33907__$1 = state_33907;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33907__$1,(4),ch);
} else {
if((state_val_33908 === (11))){
var inst_33884 = (state_33907[(7)]);
var inst_33894 = (state_33907[(2)]);
var state_33907__$1 = state_33907;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33907__$1,(8),inst_33894,inst_33884);
} else {
if((state_val_33908 === (9))){
var state_33907__$1 = state_33907;
var statearr_33918_33945 = state_33907__$1;
(statearr_33918_33945[(2)] = tc);

(statearr_33918_33945[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33908 === (5))){
var inst_33887 = cljs.core.async.close_BANG_.call(null,tc);
var inst_33888 = cljs.core.async.close_BANG_.call(null,fc);
var state_33907__$1 = (function (){var statearr_33919 = state_33907;
(statearr_33919[(8)] = inst_33887);

return statearr_33919;
})();
var statearr_33920_33946 = state_33907__$1;
(statearr_33920_33946[(2)] = inst_33888);

(statearr_33920_33946[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33908 === (14))){
var inst_33901 = (state_33907[(2)]);
var state_33907__$1 = state_33907;
var statearr_33921_33947 = state_33907__$1;
(statearr_33921_33947[(2)] = inst_33901);

(statearr_33921_33947[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33908 === (10))){
var state_33907__$1 = state_33907;
var statearr_33922_33948 = state_33907__$1;
(statearr_33922_33948[(2)] = fc);

(statearr_33922_33948[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33908 === (8))){
var inst_33896 = (state_33907[(2)]);
var state_33907__$1 = state_33907;
if(cljs.core.truth_(inst_33896)){
var statearr_33923_33949 = state_33907__$1;
(statearr_33923_33949[(1)] = (12));

} else {
var statearr_33924_33950 = state_33907__$1;
(statearr_33924_33950[(1)] = (13));

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
});})(c__33236__auto___33936,tc,fc))
;
return ((function (switch__33122__auto__,c__33236__auto___33936,tc,fc){
return (function() {
var cljs$core$async$state_machine__33123__auto__ = null;
var cljs$core$async$state_machine__33123__auto____0 = (function (){
var statearr_33928 = [null,null,null,null,null,null,null,null,null];
(statearr_33928[(0)] = cljs$core$async$state_machine__33123__auto__);

(statearr_33928[(1)] = (1));

return statearr_33928;
});
var cljs$core$async$state_machine__33123__auto____1 = (function (state_33907){
while(true){
var ret_value__33124__auto__ = (function (){try{while(true){
var result__33125__auto__ = switch__33122__auto__.call(null,state_33907);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33125__auto__;
}
break;
}
}catch (e33929){if((e33929 instanceof Object)){
var ex__33126__auto__ = e33929;
var statearr_33930_33951 = state_33907;
(statearr_33930_33951[(5)] = ex__33126__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33907);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33929;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33124__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33952 = state_33907;
state_33907 = G__33952;
continue;
} else {
return ret_value__33124__auto__;
}
break;
}
});
cljs$core$async$state_machine__33123__auto__ = function(state_33907){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33123__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33123__auto____1.call(this,state_33907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33123__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33123__auto____0;
cljs$core$async$state_machine__33123__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33123__auto____1;
return cljs$core$async$state_machine__33123__auto__;
})()
;})(switch__33122__auto__,c__33236__auto___33936,tc,fc))
})();
var state__33238__auto__ = (function (){var statearr_33931 = f__33237__auto__.call(null);
(statearr_33931[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33236__auto___33936);

return statearr_33931;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33238__auto__);
});})(c__33236__auto___33936,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__33236__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33236__auto__){
return (function (){
var f__33237__auto__ = (function (){var switch__33122__auto__ = ((function (c__33236__auto__){
return (function (state_34016){
var state_val_34017 = (state_34016[(1)]);
if((state_val_34017 === (7))){
var inst_34012 = (state_34016[(2)]);
var state_34016__$1 = state_34016;
var statearr_34018_34039 = state_34016__$1;
(statearr_34018_34039[(2)] = inst_34012);

(statearr_34018_34039[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34017 === (1))){
var inst_33996 = init;
var state_34016__$1 = (function (){var statearr_34019 = state_34016;
(statearr_34019[(7)] = inst_33996);

return statearr_34019;
})();
var statearr_34020_34040 = state_34016__$1;
(statearr_34020_34040[(2)] = null);

(statearr_34020_34040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34017 === (4))){
var inst_33999 = (state_34016[(8)]);
var inst_33999__$1 = (state_34016[(2)]);
var inst_34000 = (inst_33999__$1 == null);
var state_34016__$1 = (function (){var statearr_34021 = state_34016;
(statearr_34021[(8)] = inst_33999__$1);

return statearr_34021;
})();
if(cljs.core.truth_(inst_34000)){
var statearr_34022_34041 = state_34016__$1;
(statearr_34022_34041[(1)] = (5));

} else {
var statearr_34023_34042 = state_34016__$1;
(statearr_34023_34042[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34017 === (6))){
var inst_34003 = (state_34016[(9)]);
var inst_33999 = (state_34016[(8)]);
var inst_33996 = (state_34016[(7)]);
var inst_34003__$1 = f.call(null,inst_33996,inst_33999);
var inst_34004 = cljs.core.reduced_QMARK_.call(null,inst_34003__$1);
var state_34016__$1 = (function (){var statearr_34024 = state_34016;
(statearr_34024[(9)] = inst_34003__$1);

return statearr_34024;
})();
if(inst_34004){
var statearr_34025_34043 = state_34016__$1;
(statearr_34025_34043[(1)] = (8));

} else {
var statearr_34026_34044 = state_34016__$1;
(statearr_34026_34044[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34017 === (3))){
var inst_34014 = (state_34016[(2)]);
var state_34016__$1 = state_34016;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34016__$1,inst_34014);
} else {
if((state_val_34017 === (2))){
var state_34016__$1 = state_34016;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34016__$1,(4),ch);
} else {
if((state_val_34017 === (9))){
var inst_34003 = (state_34016[(9)]);
var inst_33996 = inst_34003;
var state_34016__$1 = (function (){var statearr_34027 = state_34016;
(statearr_34027[(7)] = inst_33996);

return statearr_34027;
})();
var statearr_34028_34045 = state_34016__$1;
(statearr_34028_34045[(2)] = null);

(statearr_34028_34045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34017 === (5))){
var inst_33996 = (state_34016[(7)]);
var state_34016__$1 = state_34016;
var statearr_34029_34046 = state_34016__$1;
(statearr_34029_34046[(2)] = inst_33996);

(statearr_34029_34046[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34017 === (10))){
var inst_34010 = (state_34016[(2)]);
var state_34016__$1 = state_34016;
var statearr_34030_34047 = state_34016__$1;
(statearr_34030_34047[(2)] = inst_34010);

(statearr_34030_34047[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34017 === (8))){
var inst_34003 = (state_34016[(9)]);
var inst_34006 = cljs.core.deref.call(null,inst_34003);
var state_34016__$1 = state_34016;
var statearr_34031_34048 = state_34016__$1;
(statearr_34031_34048[(2)] = inst_34006);

(statearr_34031_34048[(1)] = (10));


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
});})(c__33236__auto__))
;
return ((function (switch__33122__auto__,c__33236__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__33123__auto__ = null;
var cljs$core$async$reduce_$_state_machine__33123__auto____0 = (function (){
var statearr_34035 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34035[(0)] = cljs$core$async$reduce_$_state_machine__33123__auto__);

(statearr_34035[(1)] = (1));

return statearr_34035;
});
var cljs$core$async$reduce_$_state_machine__33123__auto____1 = (function (state_34016){
while(true){
var ret_value__33124__auto__ = (function (){try{while(true){
var result__33125__auto__ = switch__33122__auto__.call(null,state_34016);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33125__auto__;
}
break;
}
}catch (e34036){if((e34036 instanceof Object)){
var ex__33126__auto__ = e34036;
var statearr_34037_34049 = state_34016;
(statearr_34037_34049[(5)] = ex__33126__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34016);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34036;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33124__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34050 = state_34016;
state_34016 = G__34050;
continue;
} else {
return ret_value__33124__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__33123__auto__ = function(state_34016){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__33123__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__33123__auto____1.call(this,state_34016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__33123__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__33123__auto____0;
cljs$core$async$reduce_$_state_machine__33123__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__33123__auto____1;
return cljs$core$async$reduce_$_state_machine__33123__auto__;
})()
;})(switch__33122__auto__,c__33236__auto__))
})();
var state__33238__auto__ = (function (){var statearr_34038 = f__33237__auto__.call(null);
(statearr_34038[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33236__auto__);

return statearr_34038;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33238__auto__);
});})(c__33236__auto__))
);

return c__33236__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args34051 = [];
var len__21280__auto___34103 = arguments.length;
var i__21281__auto___34104 = (0);
while(true){
if((i__21281__auto___34104 < len__21280__auto___34103)){
args34051.push((arguments[i__21281__auto___34104]));

var G__34105 = (i__21281__auto___34104 + (1));
i__21281__auto___34104 = G__34105;
continue;
} else {
}
break;
}

var G__34053 = args34051.length;
switch (G__34053) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34051.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__33236__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33236__auto__){
return (function (){
var f__33237__auto__ = (function (){var switch__33122__auto__ = ((function (c__33236__auto__){
return (function (state_34078){
var state_val_34079 = (state_34078[(1)]);
if((state_val_34079 === (7))){
var inst_34060 = (state_34078[(2)]);
var state_34078__$1 = state_34078;
var statearr_34080_34107 = state_34078__$1;
(statearr_34080_34107[(2)] = inst_34060);

(statearr_34080_34107[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34079 === (1))){
var inst_34054 = cljs.core.seq.call(null,coll);
var inst_34055 = inst_34054;
var state_34078__$1 = (function (){var statearr_34081 = state_34078;
(statearr_34081[(7)] = inst_34055);

return statearr_34081;
})();
var statearr_34082_34108 = state_34078__$1;
(statearr_34082_34108[(2)] = null);

(statearr_34082_34108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34079 === (4))){
var inst_34055 = (state_34078[(7)]);
var inst_34058 = cljs.core.first.call(null,inst_34055);
var state_34078__$1 = state_34078;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34078__$1,(7),ch,inst_34058);
} else {
if((state_val_34079 === (13))){
var inst_34072 = (state_34078[(2)]);
var state_34078__$1 = state_34078;
var statearr_34083_34109 = state_34078__$1;
(statearr_34083_34109[(2)] = inst_34072);

(statearr_34083_34109[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34079 === (6))){
var inst_34063 = (state_34078[(2)]);
var state_34078__$1 = state_34078;
if(cljs.core.truth_(inst_34063)){
var statearr_34084_34110 = state_34078__$1;
(statearr_34084_34110[(1)] = (8));

} else {
var statearr_34085_34111 = state_34078__$1;
(statearr_34085_34111[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34079 === (3))){
var inst_34076 = (state_34078[(2)]);
var state_34078__$1 = state_34078;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34078__$1,inst_34076);
} else {
if((state_val_34079 === (12))){
var state_34078__$1 = state_34078;
var statearr_34086_34112 = state_34078__$1;
(statearr_34086_34112[(2)] = null);

(statearr_34086_34112[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34079 === (2))){
var inst_34055 = (state_34078[(7)]);
var state_34078__$1 = state_34078;
if(cljs.core.truth_(inst_34055)){
var statearr_34087_34113 = state_34078__$1;
(statearr_34087_34113[(1)] = (4));

} else {
var statearr_34088_34114 = state_34078__$1;
(statearr_34088_34114[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34079 === (11))){
var inst_34069 = cljs.core.async.close_BANG_.call(null,ch);
var state_34078__$1 = state_34078;
var statearr_34089_34115 = state_34078__$1;
(statearr_34089_34115[(2)] = inst_34069);

(statearr_34089_34115[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34079 === (9))){
var state_34078__$1 = state_34078;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34090_34116 = state_34078__$1;
(statearr_34090_34116[(1)] = (11));

} else {
var statearr_34091_34117 = state_34078__$1;
(statearr_34091_34117[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34079 === (5))){
var inst_34055 = (state_34078[(7)]);
var state_34078__$1 = state_34078;
var statearr_34092_34118 = state_34078__$1;
(statearr_34092_34118[(2)] = inst_34055);

(statearr_34092_34118[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34079 === (10))){
var inst_34074 = (state_34078[(2)]);
var state_34078__$1 = state_34078;
var statearr_34093_34119 = state_34078__$1;
(statearr_34093_34119[(2)] = inst_34074);

(statearr_34093_34119[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34079 === (8))){
var inst_34055 = (state_34078[(7)]);
var inst_34065 = cljs.core.next.call(null,inst_34055);
var inst_34055__$1 = inst_34065;
var state_34078__$1 = (function (){var statearr_34094 = state_34078;
(statearr_34094[(7)] = inst_34055__$1);

return statearr_34094;
})();
var statearr_34095_34120 = state_34078__$1;
(statearr_34095_34120[(2)] = null);

(statearr_34095_34120[(1)] = (2));


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
});})(c__33236__auto__))
;
return ((function (switch__33122__auto__,c__33236__auto__){
return (function() {
var cljs$core$async$state_machine__33123__auto__ = null;
var cljs$core$async$state_machine__33123__auto____0 = (function (){
var statearr_34099 = [null,null,null,null,null,null,null,null];
(statearr_34099[(0)] = cljs$core$async$state_machine__33123__auto__);

(statearr_34099[(1)] = (1));

return statearr_34099;
});
var cljs$core$async$state_machine__33123__auto____1 = (function (state_34078){
while(true){
var ret_value__33124__auto__ = (function (){try{while(true){
var result__33125__auto__ = switch__33122__auto__.call(null,state_34078);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33125__auto__;
}
break;
}
}catch (e34100){if((e34100 instanceof Object)){
var ex__33126__auto__ = e34100;
var statearr_34101_34121 = state_34078;
(statearr_34101_34121[(5)] = ex__33126__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34078);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34100;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33124__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34122 = state_34078;
state_34078 = G__34122;
continue;
} else {
return ret_value__33124__auto__;
}
break;
}
});
cljs$core$async$state_machine__33123__auto__ = function(state_34078){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33123__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33123__auto____1.call(this,state_34078);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33123__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33123__auto____0;
cljs$core$async$state_machine__33123__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33123__auto____1;
return cljs$core$async$state_machine__33123__auto__;
})()
;})(switch__33122__auto__,c__33236__auto__))
})();
var state__33238__auto__ = (function (){var statearr_34102 = f__33237__auto__.call(null);
(statearr_34102[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33236__auto__);

return statearr_34102;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33238__auto__);
});})(c__33236__auto__))
);

return c__33236__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__20810__auto__ = (((_ == null))?null:_);
var m__20811__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__20810__auto__)]);
if(!((m__20811__auto__ == null))){
return m__20811__auto__.call(null,_);
} else {
var m__20811__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__20811__auto____$1 == null))){
return m__20811__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__20810__auto__ = (((m == null))?null:m);
var m__20811__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__20810__auto__)]);
if(!((m__20811__auto__ == null))){
return m__20811__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__20811__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__20811__auto____$1 == null))){
return m__20811__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__20810__auto__ = (((m == null))?null:m);
var m__20811__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__20810__auto__)]);
if(!((m__20811__auto__ == null))){
return m__20811__auto__.call(null,m,ch);
} else {
var m__20811__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__20811__auto____$1 == null))){
return m__20811__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__20810__auto__ = (((m == null))?null:m);
var m__20811__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__20810__auto__)]);
if(!((m__20811__auto__ == null))){
return m__20811__auto__.call(null,m);
} else {
var m__20811__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__20811__auto____$1 == null))){
return m__20811__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async34348 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34348 = (function (mult,ch,cs,meta34349){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta34349 = meta34349;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async34348.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_34350,meta34349__$1){
var self__ = this;
var _34350__$1 = this;
return (new cljs.core.async.t_cljs$core$async34348(self__.mult,self__.ch,self__.cs,meta34349__$1));
});})(cs))
;


cljs.core.async.t_cljs$core$async34348.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_34350){
var self__ = this;
var _34350__$1 = this;
return self__.meta34349;
});})(cs))
;


cljs.core.async.t_cljs$core$async34348.prototype.cljs$core$async$Mux$ = true;


cljs.core.async.t_cljs$core$async34348.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;


cljs.core.async.t_cljs$core$async34348.prototype.cljs$core$async$Mult$ = true;


cljs.core.async.t_cljs$core$async34348.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;


cljs.core.async.t_cljs$core$async34348.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;


cljs.core.async.t_cljs$core$async34348.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34348.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta34349","meta34349",1097138592,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async34348.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34348.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34348";

cljs.core.async.t_cljs$core$async34348.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__20749__auto__,writer__20750__auto__,opt__20751__auto__){
return cljs.core._write.call(null,writer__20750__auto__,"cljs.core.async/t_cljs$core$async34348");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async34348 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async34348(mult__$1,ch__$1,cs__$1,meta34349){
return (new cljs.core.async.t_cljs$core$async34348(mult__$1,ch__$1,cs__$1,meta34349));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async34348(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__33236__auto___34573 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33236__auto___34573,cs,m,dchan,dctr,done){
return (function (){
var f__33237__auto__ = (function (){var switch__33122__auto__ = ((function (c__33236__auto___34573,cs,m,dchan,dctr,done){
return (function (state_34485){
var state_val_34486 = (state_34485[(1)]);
if((state_val_34486 === (7))){
var inst_34481 = (state_34485[(2)]);
var state_34485__$1 = state_34485;
var statearr_34487_34574 = state_34485__$1;
(statearr_34487_34574[(2)] = inst_34481);

(statearr_34487_34574[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34486 === (20))){
var inst_34384 = (state_34485[(7)]);
var inst_34396 = cljs.core.first.call(null,inst_34384);
var inst_34397 = cljs.core.nth.call(null,inst_34396,(0),null);
var inst_34398 = cljs.core.nth.call(null,inst_34396,(1),null);
var state_34485__$1 = (function (){var statearr_34488 = state_34485;
(statearr_34488[(8)] = inst_34397);

return statearr_34488;
})();
if(cljs.core.truth_(inst_34398)){
var statearr_34489_34575 = state_34485__$1;
(statearr_34489_34575[(1)] = (22));

} else {
var statearr_34490_34576 = state_34485__$1;
(statearr_34490_34576[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34486 === (27))){
var inst_34433 = (state_34485[(9)]);
var inst_34353 = (state_34485[(10)]);
var inst_34428 = (state_34485[(11)]);
var inst_34426 = (state_34485[(12)]);
var inst_34433__$1 = cljs.core._nth.call(null,inst_34426,inst_34428);
var inst_34434 = cljs.core.async.put_BANG_.call(null,inst_34433__$1,inst_34353,done);
var state_34485__$1 = (function (){var statearr_34491 = state_34485;
(statearr_34491[(9)] = inst_34433__$1);

return statearr_34491;
})();
if(cljs.core.truth_(inst_34434)){
var statearr_34492_34577 = state_34485__$1;
(statearr_34492_34577[(1)] = (30));

} else {
var statearr_34493_34578 = state_34485__$1;
(statearr_34493_34578[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34486 === (1))){
var state_34485__$1 = state_34485;
var statearr_34494_34579 = state_34485__$1;
(statearr_34494_34579[(2)] = null);

(statearr_34494_34579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34486 === (24))){
var inst_34384 = (state_34485[(7)]);
var inst_34403 = (state_34485[(2)]);
var inst_34404 = cljs.core.next.call(null,inst_34384);
var inst_34362 = inst_34404;
var inst_34363 = null;
var inst_34364 = (0);
var inst_34365 = (0);
var state_34485__$1 = (function (){var statearr_34495 = state_34485;
(statearr_34495[(13)] = inst_34362);

(statearr_34495[(14)] = inst_34364);

(statearr_34495[(15)] = inst_34403);

(statearr_34495[(16)] = inst_34365);

(statearr_34495[(17)] = inst_34363);

return statearr_34495;
})();
var statearr_34496_34580 = state_34485__$1;
(statearr_34496_34580[(2)] = null);

(statearr_34496_34580[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34486 === (39))){
var state_34485__$1 = state_34485;
var statearr_34500_34581 = state_34485__$1;
(statearr_34500_34581[(2)] = null);

(statearr_34500_34581[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34486 === (4))){
var inst_34353 = (state_34485[(10)]);
var inst_34353__$1 = (state_34485[(2)]);
var inst_34354 = (inst_34353__$1 == null);
var state_34485__$1 = (function (){var statearr_34501 = state_34485;
(statearr_34501[(10)] = inst_34353__$1);

return statearr_34501;
})();
if(cljs.core.truth_(inst_34354)){
var statearr_34502_34582 = state_34485__$1;
(statearr_34502_34582[(1)] = (5));

} else {
var statearr_34503_34583 = state_34485__$1;
(statearr_34503_34583[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34486 === (15))){
var inst_34362 = (state_34485[(13)]);
var inst_34364 = (state_34485[(14)]);
var inst_34365 = (state_34485[(16)]);
var inst_34363 = (state_34485[(17)]);
var inst_34380 = (state_34485[(2)]);
var inst_34381 = (inst_34365 + (1));
var tmp34497 = inst_34362;
var tmp34498 = inst_34364;
var tmp34499 = inst_34363;
var inst_34362__$1 = tmp34497;
var inst_34363__$1 = tmp34499;
var inst_34364__$1 = tmp34498;
var inst_34365__$1 = inst_34381;
var state_34485__$1 = (function (){var statearr_34504 = state_34485;
(statearr_34504[(13)] = inst_34362__$1);

(statearr_34504[(14)] = inst_34364__$1);

(statearr_34504[(18)] = inst_34380);

(statearr_34504[(16)] = inst_34365__$1);

(statearr_34504[(17)] = inst_34363__$1);

return statearr_34504;
})();
var statearr_34505_34584 = state_34485__$1;
(statearr_34505_34584[(2)] = null);

(statearr_34505_34584[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34486 === (21))){
var inst_34407 = (state_34485[(2)]);
var state_34485__$1 = state_34485;
var statearr_34509_34585 = state_34485__$1;
(statearr_34509_34585[(2)] = inst_34407);

(statearr_34509_34585[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34486 === (31))){
var inst_34433 = (state_34485[(9)]);
var inst_34437 = done.call(null,null);
var inst_34438 = cljs.core.async.untap_STAR_.call(null,m,inst_34433);
var state_34485__$1 = (function (){var statearr_34510 = state_34485;
(statearr_34510[(19)] = inst_34437);

return statearr_34510;
})();
var statearr_34511_34586 = state_34485__$1;
(statearr_34511_34586[(2)] = inst_34438);

(statearr_34511_34586[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34486 === (32))){
var inst_34428 = (state_34485[(11)]);
var inst_34427 = (state_34485[(20)]);
var inst_34426 = (state_34485[(12)]);
var inst_34425 = (state_34485[(21)]);
var inst_34440 = (state_34485[(2)]);
var inst_34441 = (inst_34428 + (1));
var tmp34506 = inst_34427;
var tmp34507 = inst_34426;
var tmp34508 = inst_34425;
var inst_34425__$1 = tmp34508;
var inst_34426__$1 = tmp34507;
var inst_34427__$1 = tmp34506;
var inst_34428__$1 = inst_34441;
var state_34485__$1 = (function (){var statearr_34512 = state_34485;
(statearr_34512[(22)] = inst_34440);

(statearr_34512[(11)] = inst_34428__$1);

(statearr_34512[(20)] = inst_34427__$1);

(statearr_34512[(12)] = inst_34426__$1);

(statearr_34512[(21)] = inst_34425__$1);

return statearr_34512;
})();
var statearr_34513_34587 = state_34485__$1;
(statearr_34513_34587[(2)] = null);

(statearr_34513_34587[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34486 === (40))){
var inst_34453 = (state_34485[(23)]);
var inst_34457 = done.call(null,null);
var inst_34458 = cljs.core.async.untap_STAR_.call(null,m,inst_34453);
var state_34485__$1 = (function (){var statearr_34514 = state_34485;
(statearr_34514[(24)] = inst_34457);

return statearr_34514;
})();
var statearr_34515_34588 = state_34485__$1;
(statearr_34515_34588[(2)] = inst_34458);

(statearr_34515_34588[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34486 === (33))){
var inst_34444 = (state_34485[(25)]);
var inst_34446 = cljs.core.chunked_seq_QMARK_.call(null,inst_34444);
var state_34485__$1 = state_34485;
if(inst_34446){
var statearr_34516_34589 = state_34485__$1;
(statearr_34516_34589[(1)] = (36));

} else {
var statearr_34517_34590 = state_34485__$1;
(statearr_34517_34590[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34486 === (13))){
var inst_34374 = (state_34485[(26)]);
var inst_34377 = cljs.core.async.close_BANG_.call(null,inst_34374);
var state_34485__$1 = state_34485;
var statearr_34518_34591 = state_34485__$1;
(statearr_34518_34591[(2)] = inst_34377);

(statearr_34518_34591[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34486 === (22))){
var inst_34397 = (state_34485[(8)]);
var inst_34400 = cljs.core.async.close_BANG_.call(null,inst_34397);
var state_34485__$1 = state_34485;
var statearr_34519_34592 = state_34485__$1;
(statearr_34519_34592[(2)] = inst_34400);

(statearr_34519_34592[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34486 === (36))){
var inst_34444 = (state_34485[(25)]);
var inst_34448 = cljs.core.chunk_first.call(null,inst_34444);
var inst_34449 = cljs.core.chunk_rest.call(null,inst_34444);
var inst_34450 = cljs.core.count.call(null,inst_34448);
var inst_34425 = inst_34449;
var inst_34426 = inst_34448;
var inst_34427 = inst_34450;
var inst_34428 = (0);
var state_34485__$1 = (function (){var statearr_34520 = state_34485;
(statearr_34520[(11)] = inst_34428);

(statearr_34520[(20)] = inst_34427);

(statearr_34520[(12)] = inst_34426);

(statearr_34520[(21)] = inst_34425);

return statearr_34520;
})();
var statearr_34521_34593 = state_34485__$1;
(statearr_34521_34593[(2)] = null);

(statearr_34521_34593[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34486 === (41))){
var inst_34444 = (state_34485[(25)]);
var inst_34460 = (state_34485[(2)]);
var inst_34461 = cljs.core.next.call(null,inst_34444);
var inst_34425 = inst_34461;
var inst_34426 = null;
var inst_34427 = (0);
var inst_34428 = (0);
var state_34485__$1 = (function (){var statearr_34522 = state_34485;
(statearr_34522[(27)] = inst_34460);

(statearr_34522[(11)] = inst_34428);

(statearr_34522[(20)] = inst_34427);

(statearr_34522[(12)] = inst_34426);

(statearr_34522[(21)] = inst_34425);

return statearr_34522;
})();
var statearr_34523_34594 = state_34485__$1;
(statearr_34523_34594[(2)] = null);

(statearr_34523_34594[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34486 === (43))){
var state_34485__$1 = state_34485;
var statearr_34524_34595 = state_34485__$1;
(statearr_34524_34595[(2)] = null);

(statearr_34524_34595[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34486 === (29))){
var inst_34469 = (state_34485[(2)]);
var state_34485__$1 = state_34485;
var statearr_34525_34596 = state_34485__$1;
(statearr_34525_34596[(2)] = inst_34469);

(statearr_34525_34596[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34486 === (44))){
var inst_34478 = (state_34485[(2)]);
var state_34485__$1 = (function (){var statearr_34526 = state_34485;
(statearr_34526[(28)] = inst_34478);

return statearr_34526;
})();
var statearr_34527_34597 = state_34485__$1;
(statearr_34527_34597[(2)] = null);

(statearr_34527_34597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34486 === (6))){
var inst_34417 = (state_34485[(29)]);
var inst_34416 = cljs.core.deref.call(null,cs);
var inst_34417__$1 = cljs.core.keys.call(null,inst_34416);
var inst_34418 = cljs.core.count.call(null,inst_34417__$1);
var inst_34419 = cljs.core.reset_BANG_.call(null,dctr,inst_34418);
var inst_34424 = cljs.core.seq.call(null,inst_34417__$1);
var inst_34425 = inst_34424;
var inst_34426 = null;
var inst_34427 = (0);
var inst_34428 = (0);
var state_34485__$1 = (function (){var statearr_34528 = state_34485;
(statearr_34528[(11)] = inst_34428);

(statearr_34528[(20)] = inst_34427);

(statearr_34528[(12)] = inst_34426);

(statearr_34528[(21)] = inst_34425);

(statearr_34528[(29)] = inst_34417__$1);

(statearr_34528[(30)] = inst_34419);

return statearr_34528;
})();
var statearr_34529_34598 = state_34485__$1;
(statearr_34529_34598[(2)] = null);

(statearr_34529_34598[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34486 === (28))){
var inst_34444 = (state_34485[(25)]);
var inst_34425 = (state_34485[(21)]);
var inst_34444__$1 = cljs.core.seq.call(null,inst_34425);
var state_34485__$1 = (function (){var statearr_34530 = state_34485;
(statearr_34530[(25)] = inst_34444__$1);

return statearr_34530;
})();
if(inst_34444__$1){
var statearr_34531_34599 = state_34485__$1;
(statearr_34531_34599[(1)] = (33));

} else {
var statearr_34532_34600 = state_34485__$1;
(statearr_34532_34600[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34486 === (25))){
var inst_34428 = (state_34485[(11)]);
var inst_34427 = (state_34485[(20)]);
var inst_34430 = (inst_34428 < inst_34427);
var inst_34431 = inst_34430;
var state_34485__$1 = state_34485;
if(cljs.core.truth_(inst_34431)){
var statearr_34533_34601 = state_34485__$1;
(statearr_34533_34601[(1)] = (27));

} else {
var statearr_34534_34602 = state_34485__$1;
(statearr_34534_34602[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34486 === (34))){
var state_34485__$1 = state_34485;
var statearr_34535_34603 = state_34485__$1;
(statearr_34535_34603[(2)] = null);

(statearr_34535_34603[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34486 === (17))){
var state_34485__$1 = state_34485;
var statearr_34536_34604 = state_34485__$1;
(statearr_34536_34604[(2)] = null);

(statearr_34536_34604[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34486 === (3))){
var inst_34483 = (state_34485[(2)]);
var state_34485__$1 = state_34485;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34485__$1,inst_34483);
} else {
if((state_val_34486 === (12))){
var inst_34412 = (state_34485[(2)]);
var state_34485__$1 = state_34485;
var statearr_34537_34605 = state_34485__$1;
(statearr_34537_34605[(2)] = inst_34412);

(statearr_34537_34605[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34486 === (2))){
var state_34485__$1 = state_34485;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34485__$1,(4),ch);
} else {
if((state_val_34486 === (23))){
var state_34485__$1 = state_34485;
var statearr_34538_34606 = state_34485__$1;
(statearr_34538_34606[(2)] = null);

(statearr_34538_34606[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34486 === (35))){
var inst_34467 = (state_34485[(2)]);
var state_34485__$1 = state_34485;
var statearr_34539_34607 = state_34485__$1;
(statearr_34539_34607[(2)] = inst_34467);

(statearr_34539_34607[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34486 === (19))){
var inst_34384 = (state_34485[(7)]);
var inst_34388 = cljs.core.chunk_first.call(null,inst_34384);
var inst_34389 = cljs.core.chunk_rest.call(null,inst_34384);
var inst_34390 = cljs.core.count.call(null,inst_34388);
var inst_34362 = inst_34389;
var inst_34363 = inst_34388;
var inst_34364 = inst_34390;
var inst_34365 = (0);
var state_34485__$1 = (function (){var statearr_34540 = state_34485;
(statearr_34540[(13)] = inst_34362);

(statearr_34540[(14)] = inst_34364);

(statearr_34540[(16)] = inst_34365);

(statearr_34540[(17)] = inst_34363);

return statearr_34540;
})();
var statearr_34541_34608 = state_34485__$1;
(statearr_34541_34608[(2)] = null);

(statearr_34541_34608[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34486 === (11))){
var inst_34362 = (state_34485[(13)]);
var inst_34384 = (state_34485[(7)]);
var inst_34384__$1 = cljs.core.seq.call(null,inst_34362);
var state_34485__$1 = (function (){var statearr_34542 = state_34485;
(statearr_34542[(7)] = inst_34384__$1);

return statearr_34542;
})();
if(inst_34384__$1){
var statearr_34543_34609 = state_34485__$1;
(statearr_34543_34609[(1)] = (16));

} else {
var statearr_34544_34610 = state_34485__$1;
(statearr_34544_34610[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34486 === (9))){
var inst_34414 = (state_34485[(2)]);
var state_34485__$1 = state_34485;
var statearr_34545_34611 = state_34485__$1;
(statearr_34545_34611[(2)] = inst_34414);

(statearr_34545_34611[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34486 === (5))){
var inst_34360 = cljs.core.deref.call(null,cs);
var inst_34361 = cljs.core.seq.call(null,inst_34360);
var inst_34362 = inst_34361;
var inst_34363 = null;
var inst_34364 = (0);
var inst_34365 = (0);
var state_34485__$1 = (function (){var statearr_34546 = state_34485;
(statearr_34546[(13)] = inst_34362);

(statearr_34546[(14)] = inst_34364);

(statearr_34546[(16)] = inst_34365);

(statearr_34546[(17)] = inst_34363);

return statearr_34546;
})();
var statearr_34547_34612 = state_34485__$1;
(statearr_34547_34612[(2)] = null);

(statearr_34547_34612[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34486 === (14))){
var state_34485__$1 = state_34485;
var statearr_34548_34613 = state_34485__$1;
(statearr_34548_34613[(2)] = null);

(statearr_34548_34613[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34486 === (45))){
var inst_34475 = (state_34485[(2)]);
var state_34485__$1 = state_34485;
var statearr_34549_34614 = state_34485__$1;
(statearr_34549_34614[(2)] = inst_34475);

(statearr_34549_34614[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34486 === (26))){
var inst_34417 = (state_34485[(29)]);
var inst_34471 = (state_34485[(2)]);
var inst_34472 = cljs.core.seq.call(null,inst_34417);
var state_34485__$1 = (function (){var statearr_34550 = state_34485;
(statearr_34550[(31)] = inst_34471);

return statearr_34550;
})();
if(inst_34472){
var statearr_34551_34615 = state_34485__$1;
(statearr_34551_34615[(1)] = (42));

} else {
var statearr_34552_34616 = state_34485__$1;
(statearr_34552_34616[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34486 === (16))){
var inst_34384 = (state_34485[(7)]);
var inst_34386 = cljs.core.chunked_seq_QMARK_.call(null,inst_34384);
var state_34485__$1 = state_34485;
if(inst_34386){
var statearr_34553_34617 = state_34485__$1;
(statearr_34553_34617[(1)] = (19));

} else {
var statearr_34554_34618 = state_34485__$1;
(statearr_34554_34618[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34486 === (38))){
var inst_34464 = (state_34485[(2)]);
var state_34485__$1 = state_34485;
var statearr_34555_34619 = state_34485__$1;
(statearr_34555_34619[(2)] = inst_34464);

(statearr_34555_34619[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34486 === (30))){
var state_34485__$1 = state_34485;
var statearr_34556_34620 = state_34485__$1;
(statearr_34556_34620[(2)] = null);

(statearr_34556_34620[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34486 === (10))){
var inst_34365 = (state_34485[(16)]);
var inst_34363 = (state_34485[(17)]);
var inst_34373 = cljs.core._nth.call(null,inst_34363,inst_34365);
var inst_34374 = cljs.core.nth.call(null,inst_34373,(0),null);
var inst_34375 = cljs.core.nth.call(null,inst_34373,(1),null);
var state_34485__$1 = (function (){var statearr_34557 = state_34485;
(statearr_34557[(26)] = inst_34374);

return statearr_34557;
})();
if(cljs.core.truth_(inst_34375)){
var statearr_34558_34621 = state_34485__$1;
(statearr_34558_34621[(1)] = (13));

} else {
var statearr_34559_34622 = state_34485__$1;
(statearr_34559_34622[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34486 === (18))){
var inst_34410 = (state_34485[(2)]);
var state_34485__$1 = state_34485;
var statearr_34560_34623 = state_34485__$1;
(statearr_34560_34623[(2)] = inst_34410);

(statearr_34560_34623[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34486 === (42))){
var state_34485__$1 = state_34485;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34485__$1,(45),dchan);
} else {
if((state_val_34486 === (37))){
var inst_34453 = (state_34485[(23)]);
var inst_34353 = (state_34485[(10)]);
var inst_34444 = (state_34485[(25)]);
var inst_34453__$1 = cljs.core.first.call(null,inst_34444);
var inst_34454 = cljs.core.async.put_BANG_.call(null,inst_34453__$1,inst_34353,done);
var state_34485__$1 = (function (){var statearr_34561 = state_34485;
(statearr_34561[(23)] = inst_34453__$1);

return statearr_34561;
})();
if(cljs.core.truth_(inst_34454)){
var statearr_34562_34624 = state_34485__$1;
(statearr_34562_34624[(1)] = (39));

} else {
var statearr_34563_34625 = state_34485__$1;
(statearr_34563_34625[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34486 === (8))){
var inst_34364 = (state_34485[(14)]);
var inst_34365 = (state_34485[(16)]);
var inst_34367 = (inst_34365 < inst_34364);
var inst_34368 = inst_34367;
var state_34485__$1 = state_34485;
if(cljs.core.truth_(inst_34368)){
var statearr_34564_34626 = state_34485__$1;
(statearr_34564_34626[(1)] = (10));

} else {
var statearr_34565_34627 = state_34485__$1;
(statearr_34565_34627[(1)] = (11));

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
});})(c__33236__auto___34573,cs,m,dchan,dctr,done))
;
return ((function (switch__33122__auto__,c__33236__auto___34573,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__33123__auto__ = null;
var cljs$core$async$mult_$_state_machine__33123__auto____0 = (function (){
var statearr_34569 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34569[(0)] = cljs$core$async$mult_$_state_machine__33123__auto__);

(statearr_34569[(1)] = (1));

return statearr_34569;
});
var cljs$core$async$mult_$_state_machine__33123__auto____1 = (function (state_34485){
while(true){
var ret_value__33124__auto__ = (function (){try{while(true){
var result__33125__auto__ = switch__33122__auto__.call(null,state_34485);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33125__auto__;
}
break;
}
}catch (e34570){if((e34570 instanceof Object)){
var ex__33126__auto__ = e34570;
var statearr_34571_34628 = state_34485;
(statearr_34571_34628[(5)] = ex__33126__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34485);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34570;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33124__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34629 = state_34485;
state_34485 = G__34629;
continue;
} else {
return ret_value__33124__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__33123__auto__ = function(state_34485){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__33123__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__33123__auto____1.call(this,state_34485);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__33123__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__33123__auto____0;
cljs$core$async$mult_$_state_machine__33123__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__33123__auto____1;
return cljs$core$async$mult_$_state_machine__33123__auto__;
})()
;})(switch__33122__auto__,c__33236__auto___34573,cs,m,dchan,dctr,done))
})();
var state__33238__auto__ = (function (){var statearr_34572 = f__33237__auto__.call(null);
(statearr_34572[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33236__auto___34573);

return statearr_34572;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33238__auto__);
});})(c__33236__auto___34573,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args34630 = [];
var len__21280__auto___34633 = arguments.length;
var i__21281__auto___34634 = (0);
while(true){
if((i__21281__auto___34634 < len__21280__auto___34633)){
args34630.push((arguments[i__21281__auto___34634]));

var G__34635 = (i__21281__auto___34634 + (1));
i__21281__auto___34634 = G__34635;
continue;
} else {
}
break;
}

var G__34632 = args34630.length;
switch (G__34632) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34630.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__20810__auto__ = (((m == null))?null:m);
var m__20811__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__20810__auto__)]);
if(!((m__20811__auto__ == null))){
return m__20811__auto__.call(null,m,ch);
} else {
var m__20811__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__20811__auto____$1 == null))){
return m__20811__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__20810__auto__ = (((m == null))?null:m);
var m__20811__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__20810__auto__)]);
if(!((m__20811__auto__ == null))){
return m__20811__auto__.call(null,m,ch);
} else {
var m__20811__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__20811__auto____$1 == null))){
return m__20811__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__20810__auto__ = (((m == null))?null:m);
var m__20811__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__20810__auto__)]);
if(!((m__20811__auto__ == null))){
return m__20811__auto__.call(null,m);
} else {
var m__20811__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__20811__auto____$1 == null))){
return m__20811__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__20810__auto__ = (((m == null))?null:m);
var m__20811__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__20810__auto__)]);
if(!((m__20811__auto__ == null))){
return m__20811__auto__.call(null,m,state_map);
} else {
var m__20811__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__20811__auto____$1 == null))){
return m__20811__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__20810__auto__ = (((m == null))?null:m);
var m__20811__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__20810__auto__)]);
if(!((m__20811__auto__ == null))){
return m__20811__auto__.call(null,m,mode);
} else {
var m__20811__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__20811__auto____$1 == null))){
return m__20811__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__21287__auto__ = [];
var len__21280__auto___34647 = arguments.length;
var i__21281__auto___34648 = (0);
while(true){
if((i__21281__auto___34648 < len__21280__auto___34647)){
args__21287__auto__.push((arguments[i__21281__auto___34648]));

var G__34649 = (i__21281__auto___34648 + (1));
i__21281__auto___34648 = G__34649;
continue;
} else {
}
break;
}

var argseq__21288__auto__ = ((((3) < args__21287__auto__.length))?(new cljs.core.IndexedSeq(args__21287__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__21288__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__34641){
var map__34642 = p__34641;
var map__34642__$1 = ((((!((map__34642 == null)))?((((map__34642.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34642.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34642):map__34642);
var opts = map__34642__$1;
var statearr_34644_34650 = state;
(statearr_34644_34650[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__6728__auto__ = cljs.core.async.do_alts.call(null,((function (map__34642,map__34642__$1,opts){
return (function (val){
var statearr_34645_34651 = state;
(statearr_34645_34651[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__34642,map__34642__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__6728__auto__)){
var cb = temp__6728__auto__;
var statearr_34646_34652 = state;
(statearr_34646_34652[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq34637){
var G__34638 = cljs.core.first.call(null,seq34637);
var seq34637__$1 = cljs.core.next.call(null,seq34637);
var G__34639 = cljs.core.first.call(null,seq34637__$1);
var seq34637__$2 = cljs.core.next.call(null,seq34637__$1);
var G__34640 = cljs.core.first.call(null,seq34637__$2);
var seq34637__$3 = cljs.core.next.call(null,seq34637__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__34638,G__34639,G__34640,seq34637__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async34818 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34818 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta34819){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta34819 = meta34819;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async34818.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34820,meta34819__$1){
var self__ = this;
var _34820__$1 = this;
return (new cljs.core.async.t_cljs$core$async34818(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta34819__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async34818.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34820){
var self__ = this;
var _34820__$1 = this;
return self__.meta34819;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async34818.prototype.cljs$core$async$Mux$ = true;


cljs.core.async.t_cljs$core$async34818.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async34818.prototype.cljs$core$async$Mix$ = true;


cljs.core.async.t_cljs$core$async34818.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async34818.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async34818.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async34818.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async34818.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34818.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta34819","meta34819",-294428853,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34818.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34818.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34818";

cljs.core.async.t_cljs$core$async34818.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__20749__auto__,writer__20750__auto__,opt__20751__auto__){
return cljs.core._write.call(null,writer__20750__auto__,"cljs.core.async/t_cljs$core$async34818");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async34818 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async34818(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta34819){
return (new cljs.core.async.t_cljs$core$async34818(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta34819));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async34818(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33236__auto___34983 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33236__auto___34983,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__33237__auto__ = (function (){var switch__33122__auto__ = ((function (c__33236__auto___34983,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_34920){
var state_val_34921 = (state_34920[(1)]);
if((state_val_34921 === (7))){
var inst_34836 = (state_34920[(2)]);
var state_34920__$1 = state_34920;
var statearr_34922_34984 = state_34920__$1;
(statearr_34922_34984[(2)] = inst_34836);

(statearr_34922_34984[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34921 === (20))){
var inst_34848 = (state_34920[(7)]);
var state_34920__$1 = state_34920;
var statearr_34923_34985 = state_34920__$1;
(statearr_34923_34985[(2)] = inst_34848);

(statearr_34923_34985[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34921 === (27))){
var state_34920__$1 = state_34920;
var statearr_34924_34986 = state_34920__$1;
(statearr_34924_34986[(2)] = null);

(statearr_34924_34986[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34921 === (1))){
var inst_34824 = (state_34920[(8)]);
var inst_34824__$1 = calc_state.call(null);
var inst_34826 = (inst_34824__$1 == null);
var inst_34827 = cljs.core.not.call(null,inst_34826);
var state_34920__$1 = (function (){var statearr_34925 = state_34920;
(statearr_34925[(8)] = inst_34824__$1);

return statearr_34925;
})();
if(inst_34827){
var statearr_34926_34987 = state_34920__$1;
(statearr_34926_34987[(1)] = (2));

} else {
var statearr_34927_34988 = state_34920__$1;
(statearr_34927_34988[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34921 === (24))){
var inst_34871 = (state_34920[(9)]);
var inst_34880 = (state_34920[(10)]);
var inst_34894 = (state_34920[(11)]);
var inst_34894__$1 = inst_34871.call(null,inst_34880);
var state_34920__$1 = (function (){var statearr_34928 = state_34920;
(statearr_34928[(11)] = inst_34894__$1);

return statearr_34928;
})();
if(cljs.core.truth_(inst_34894__$1)){
var statearr_34929_34989 = state_34920__$1;
(statearr_34929_34989[(1)] = (29));

} else {
var statearr_34930_34990 = state_34920__$1;
(statearr_34930_34990[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34921 === (4))){
var inst_34839 = (state_34920[(2)]);
var state_34920__$1 = state_34920;
if(cljs.core.truth_(inst_34839)){
var statearr_34931_34991 = state_34920__$1;
(statearr_34931_34991[(1)] = (8));

} else {
var statearr_34932_34992 = state_34920__$1;
(statearr_34932_34992[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34921 === (15))){
var inst_34865 = (state_34920[(2)]);
var state_34920__$1 = state_34920;
if(cljs.core.truth_(inst_34865)){
var statearr_34933_34993 = state_34920__$1;
(statearr_34933_34993[(1)] = (19));

} else {
var statearr_34934_34994 = state_34920__$1;
(statearr_34934_34994[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34921 === (21))){
var inst_34870 = (state_34920[(12)]);
var inst_34870__$1 = (state_34920[(2)]);
var inst_34871 = cljs.core.get.call(null,inst_34870__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34872 = cljs.core.get.call(null,inst_34870__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34873 = cljs.core.get.call(null,inst_34870__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_34920__$1 = (function (){var statearr_34935 = state_34920;
(statearr_34935[(12)] = inst_34870__$1);

(statearr_34935[(9)] = inst_34871);

(statearr_34935[(13)] = inst_34872);

return statearr_34935;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_34920__$1,(22),inst_34873);
} else {
if((state_val_34921 === (31))){
var inst_34902 = (state_34920[(2)]);
var state_34920__$1 = state_34920;
if(cljs.core.truth_(inst_34902)){
var statearr_34936_34995 = state_34920__$1;
(statearr_34936_34995[(1)] = (32));

} else {
var statearr_34937_34996 = state_34920__$1;
(statearr_34937_34996[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34921 === (32))){
var inst_34879 = (state_34920[(14)]);
var state_34920__$1 = state_34920;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34920__$1,(35),out,inst_34879);
} else {
if((state_val_34921 === (33))){
var inst_34870 = (state_34920[(12)]);
var inst_34848 = inst_34870;
var state_34920__$1 = (function (){var statearr_34938 = state_34920;
(statearr_34938[(7)] = inst_34848);

return statearr_34938;
})();
var statearr_34939_34997 = state_34920__$1;
(statearr_34939_34997[(2)] = null);

(statearr_34939_34997[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34921 === (13))){
var inst_34848 = (state_34920[(7)]);
var inst_34855 = inst_34848.cljs$lang$protocol_mask$partition0$;
var inst_34856 = (inst_34855 & (64));
var inst_34857 = inst_34848.cljs$core$ISeq$;
var inst_34858 = (inst_34856) || (inst_34857);
var state_34920__$1 = state_34920;
if(cljs.core.truth_(inst_34858)){
var statearr_34940_34998 = state_34920__$1;
(statearr_34940_34998[(1)] = (16));

} else {
var statearr_34941_34999 = state_34920__$1;
(statearr_34941_34999[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34921 === (22))){
var inst_34879 = (state_34920[(14)]);
var inst_34880 = (state_34920[(10)]);
var inst_34878 = (state_34920[(2)]);
var inst_34879__$1 = cljs.core.nth.call(null,inst_34878,(0),null);
var inst_34880__$1 = cljs.core.nth.call(null,inst_34878,(1),null);
var inst_34881 = (inst_34879__$1 == null);
var inst_34882 = cljs.core._EQ_.call(null,inst_34880__$1,change);
var inst_34883 = (inst_34881) || (inst_34882);
var state_34920__$1 = (function (){var statearr_34942 = state_34920;
(statearr_34942[(14)] = inst_34879__$1);

(statearr_34942[(10)] = inst_34880__$1);

return statearr_34942;
})();
if(cljs.core.truth_(inst_34883)){
var statearr_34943_35000 = state_34920__$1;
(statearr_34943_35000[(1)] = (23));

} else {
var statearr_34944_35001 = state_34920__$1;
(statearr_34944_35001[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34921 === (36))){
var inst_34870 = (state_34920[(12)]);
var inst_34848 = inst_34870;
var state_34920__$1 = (function (){var statearr_34945 = state_34920;
(statearr_34945[(7)] = inst_34848);

return statearr_34945;
})();
var statearr_34946_35002 = state_34920__$1;
(statearr_34946_35002[(2)] = null);

(statearr_34946_35002[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34921 === (29))){
var inst_34894 = (state_34920[(11)]);
var state_34920__$1 = state_34920;
var statearr_34947_35003 = state_34920__$1;
(statearr_34947_35003[(2)] = inst_34894);

(statearr_34947_35003[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34921 === (6))){
var state_34920__$1 = state_34920;
var statearr_34948_35004 = state_34920__$1;
(statearr_34948_35004[(2)] = false);

(statearr_34948_35004[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34921 === (28))){
var inst_34890 = (state_34920[(2)]);
var inst_34891 = calc_state.call(null);
var inst_34848 = inst_34891;
var state_34920__$1 = (function (){var statearr_34949 = state_34920;
(statearr_34949[(7)] = inst_34848);

(statearr_34949[(15)] = inst_34890);

return statearr_34949;
})();
var statearr_34950_35005 = state_34920__$1;
(statearr_34950_35005[(2)] = null);

(statearr_34950_35005[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34921 === (25))){
var inst_34916 = (state_34920[(2)]);
var state_34920__$1 = state_34920;
var statearr_34951_35006 = state_34920__$1;
(statearr_34951_35006[(2)] = inst_34916);

(statearr_34951_35006[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34921 === (34))){
var inst_34914 = (state_34920[(2)]);
var state_34920__$1 = state_34920;
var statearr_34952_35007 = state_34920__$1;
(statearr_34952_35007[(2)] = inst_34914);

(statearr_34952_35007[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34921 === (17))){
var state_34920__$1 = state_34920;
var statearr_34953_35008 = state_34920__$1;
(statearr_34953_35008[(2)] = false);

(statearr_34953_35008[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34921 === (3))){
var state_34920__$1 = state_34920;
var statearr_34954_35009 = state_34920__$1;
(statearr_34954_35009[(2)] = false);

(statearr_34954_35009[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34921 === (12))){
var inst_34918 = (state_34920[(2)]);
var state_34920__$1 = state_34920;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34920__$1,inst_34918);
} else {
if((state_val_34921 === (2))){
var inst_34824 = (state_34920[(8)]);
var inst_34829 = inst_34824.cljs$lang$protocol_mask$partition0$;
var inst_34830 = (inst_34829 & (64));
var inst_34831 = inst_34824.cljs$core$ISeq$;
var inst_34832 = (inst_34830) || (inst_34831);
var state_34920__$1 = state_34920;
if(cljs.core.truth_(inst_34832)){
var statearr_34955_35010 = state_34920__$1;
(statearr_34955_35010[(1)] = (5));

} else {
var statearr_34956_35011 = state_34920__$1;
(statearr_34956_35011[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34921 === (23))){
var inst_34879 = (state_34920[(14)]);
var inst_34885 = (inst_34879 == null);
var state_34920__$1 = state_34920;
if(cljs.core.truth_(inst_34885)){
var statearr_34957_35012 = state_34920__$1;
(statearr_34957_35012[(1)] = (26));

} else {
var statearr_34958_35013 = state_34920__$1;
(statearr_34958_35013[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34921 === (35))){
var inst_34905 = (state_34920[(2)]);
var state_34920__$1 = state_34920;
if(cljs.core.truth_(inst_34905)){
var statearr_34959_35014 = state_34920__$1;
(statearr_34959_35014[(1)] = (36));

} else {
var statearr_34960_35015 = state_34920__$1;
(statearr_34960_35015[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34921 === (19))){
var inst_34848 = (state_34920[(7)]);
var inst_34867 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34848);
var state_34920__$1 = state_34920;
var statearr_34961_35016 = state_34920__$1;
(statearr_34961_35016[(2)] = inst_34867);

(statearr_34961_35016[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34921 === (11))){
var inst_34848 = (state_34920[(7)]);
var inst_34852 = (inst_34848 == null);
var inst_34853 = cljs.core.not.call(null,inst_34852);
var state_34920__$1 = state_34920;
if(inst_34853){
var statearr_34962_35017 = state_34920__$1;
(statearr_34962_35017[(1)] = (13));

} else {
var statearr_34963_35018 = state_34920__$1;
(statearr_34963_35018[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34921 === (9))){
var inst_34824 = (state_34920[(8)]);
var state_34920__$1 = state_34920;
var statearr_34964_35019 = state_34920__$1;
(statearr_34964_35019[(2)] = inst_34824);

(statearr_34964_35019[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34921 === (5))){
var state_34920__$1 = state_34920;
var statearr_34965_35020 = state_34920__$1;
(statearr_34965_35020[(2)] = true);

(statearr_34965_35020[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34921 === (14))){
var state_34920__$1 = state_34920;
var statearr_34966_35021 = state_34920__$1;
(statearr_34966_35021[(2)] = false);

(statearr_34966_35021[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34921 === (26))){
var inst_34880 = (state_34920[(10)]);
var inst_34887 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_34880);
var state_34920__$1 = state_34920;
var statearr_34967_35022 = state_34920__$1;
(statearr_34967_35022[(2)] = inst_34887);

(statearr_34967_35022[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34921 === (16))){
var state_34920__$1 = state_34920;
var statearr_34968_35023 = state_34920__$1;
(statearr_34968_35023[(2)] = true);

(statearr_34968_35023[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34921 === (38))){
var inst_34910 = (state_34920[(2)]);
var state_34920__$1 = state_34920;
var statearr_34969_35024 = state_34920__$1;
(statearr_34969_35024[(2)] = inst_34910);

(statearr_34969_35024[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34921 === (30))){
var inst_34871 = (state_34920[(9)]);
var inst_34872 = (state_34920[(13)]);
var inst_34880 = (state_34920[(10)]);
var inst_34897 = cljs.core.empty_QMARK_.call(null,inst_34871);
var inst_34898 = inst_34872.call(null,inst_34880);
var inst_34899 = cljs.core.not.call(null,inst_34898);
var inst_34900 = (inst_34897) && (inst_34899);
var state_34920__$1 = state_34920;
var statearr_34970_35025 = state_34920__$1;
(statearr_34970_35025[(2)] = inst_34900);

(statearr_34970_35025[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34921 === (10))){
var inst_34824 = (state_34920[(8)]);
var inst_34844 = (state_34920[(2)]);
var inst_34845 = cljs.core.get.call(null,inst_34844,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34846 = cljs.core.get.call(null,inst_34844,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34847 = cljs.core.get.call(null,inst_34844,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_34848 = inst_34824;
var state_34920__$1 = (function (){var statearr_34971 = state_34920;
(statearr_34971[(7)] = inst_34848);

(statearr_34971[(16)] = inst_34845);

(statearr_34971[(17)] = inst_34846);

(statearr_34971[(18)] = inst_34847);

return statearr_34971;
})();
var statearr_34972_35026 = state_34920__$1;
(statearr_34972_35026[(2)] = null);

(statearr_34972_35026[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34921 === (18))){
var inst_34862 = (state_34920[(2)]);
var state_34920__$1 = state_34920;
var statearr_34973_35027 = state_34920__$1;
(statearr_34973_35027[(2)] = inst_34862);

(statearr_34973_35027[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34921 === (37))){
var state_34920__$1 = state_34920;
var statearr_34974_35028 = state_34920__$1;
(statearr_34974_35028[(2)] = null);

(statearr_34974_35028[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34921 === (8))){
var inst_34824 = (state_34920[(8)]);
var inst_34841 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34824);
var state_34920__$1 = state_34920;
var statearr_34975_35029 = state_34920__$1;
(statearr_34975_35029[(2)] = inst_34841);

(statearr_34975_35029[(1)] = (10));


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
});})(c__33236__auto___34983,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__33122__auto__,c__33236__auto___34983,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__33123__auto__ = null;
var cljs$core$async$mix_$_state_machine__33123__auto____0 = (function (){
var statearr_34979 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34979[(0)] = cljs$core$async$mix_$_state_machine__33123__auto__);

(statearr_34979[(1)] = (1));

return statearr_34979;
});
var cljs$core$async$mix_$_state_machine__33123__auto____1 = (function (state_34920){
while(true){
var ret_value__33124__auto__ = (function (){try{while(true){
var result__33125__auto__ = switch__33122__auto__.call(null,state_34920);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33125__auto__;
}
break;
}
}catch (e34980){if((e34980 instanceof Object)){
var ex__33126__auto__ = e34980;
var statearr_34981_35030 = state_34920;
(statearr_34981_35030[(5)] = ex__33126__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34920);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34980;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33124__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35031 = state_34920;
state_34920 = G__35031;
continue;
} else {
return ret_value__33124__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__33123__auto__ = function(state_34920){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__33123__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__33123__auto____1.call(this,state_34920);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__33123__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__33123__auto____0;
cljs$core$async$mix_$_state_machine__33123__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__33123__auto____1;
return cljs$core$async$mix_$_state_machine__33123__auto__;
})()
;})(switch__33122__auto__,c__33236__auto___34983,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__33238__auto__ = (function (){var statearr_34982 = f__33237__auto__.call(null);
(statearr_34982[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33236__auto___34983);

return statearr_34982;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33238__auto__);
});})(c__33236__auto___34983,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__20810__auto__ = (((p == null))?null:p);
var m__20811__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__20810__auto__)]);
if(!((m__20811__auto__ == null))){
return m__20811__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__20811__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__20811__auto____$1 == null))){
return m__20811__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__20810__auto__ = (((p == null))?null:p);
var m__20811__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__20810__auto__)]);
if(!((m__20811__auto__ == null))){
return m__20811__auto__.call(null,p,v,ch);
} else {
var m__20811__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__20811__auto____$1 == null))){
return m__20811__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args35032 = [];
var len__21280__auto___35035 = arguments.length;
var i__21281__auto___35036 = (0);
while(true){
if((i__21281__auto___35036 < len__21280__auto___35035)){
args35032.push((arguments[i__21281__auto___35036]));

var G__35037 = (i__21281__auto___35036 + (1));
i__21281__auto___35036 = G__35037;
continue;
} else {
}
break;
}

var G__35034 = args35032.length;
switch (G__35034) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35032.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__20810__auto__ = (((p == null))?null:p);
var m__20811__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__20810__auto__)]);
if(!((m__20811__auto__ == null))){
return m__20811__auto__.call(null,p);
} else {
var m__20811__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__20811__auto____$1 == null))){
return m__20811__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__20810__auto__ = (((p == null))?null:p);
var m__20811__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__20810__auto__)]);
if(!((m__20811__auto__ == null))){
return m__20811__auto__.call(null,p,v);
} else {
var m__20811__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__20811__auto____$1 == null))){
return m__20811__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args35040 = [];
var len__21280__auto___35165 = arguments.length;
var i__21281__auto___35166 = (0);
while(true){
if((i__21281__auto___35166 < len__21280__auto___35165)){
args35040.push((arguments[i__21281__auto___35166]));

var G__35167 = (i__21281__auto___35166 + (1));
i__21281__auto___35166 = G__35167;
continue;
} else {
}
break;
}

var G__35042 = args35040.length;
switch (G__35042) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35040.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__20097__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__20097__auto__)){
return or__20097__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__20097__auto__,mults){
return (function (p1__35039_SHARP_){
if(cljs.core.truth_(p1__35039_SHARP_.call(null,topic))){
return p1__35039_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__35039_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__20097__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async35043 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35043 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35044){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35044 = meta35044;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async35043.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_35045,meta35044__$1){
var self__ = this;
var _35045__$1 = this;
return (new cljs.core.async.t_cljs$core$async35043(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35044__$1));
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async35043.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_35045){
var self__ = this;
var _35045__$1 = this;
return self__.meta35044;
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async35043.prototype.cljs$core$async$Mux$ = true;


cljs.core.async.t_cljs$core$async35043.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async35043.prototype.cljs$core$async$Pub$ = true;


cljs.core.async.t_cljs$core$async35043.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async35043.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__6728__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__6728__auto__)){
var m = temp__6728__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async35043.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async35043.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35043.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35044","meta35044",179684296,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35043.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35043.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35043";

cljs.core.async.t_cljs$core$async35043.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__20749__auto__,writer__20750__auto__,opt__20751__auto__){
return cljs.core._write.call(null,writer__20750__auto__,"cljs.core.async/t_cljs$core$async35043");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async35043 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async35043(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35044){
return (new cljs.core.async.t_cljs$core$async35043(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35044));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async35043(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33236__auto___35169 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33236__auto___35169,mults,ensure_mult,p){
return (function (){
var f__33237__auto__ = (function (){var switch__33122__auto__ = ((function (c__33236__auto___35169,mults,ensure_mult,p){
return (function (state_35117){
var state_val_35118 = (state_35117[(1)]);
if((state_val_35118 === (7))){
var inst_35113 = (state_35117[(2)]);
var state_35117__$1 = state_35117;
var statearr_35119_35170 = state_35117__$1;
(statearr_35119_35170[(2)] = inst_35113);

(statearr_35119_35170[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35118 === (20))){
var state_35117__$1 = state_35117;
var statearr_35120_35171 = state_35117__$1;
(statearr_35120_35171[(2)] = null);

(statearr_35120_35171[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35118 === (1))){
var state_35117__$1 = state_35117;
var statearr_35121_35172 = state_35117__$1;
(statearr_35121_35172[(2)] = null);

(statearr_35121_35172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35118 === (24))){
var inst_35096 = (state_35117[(7)]);
var inst_35105 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_35096);
var state_35117__$1 = state_35117;
var statearr_35122_35173 = state_35117__$1;
(statearr_35122_35173[(2)] = inst_35105);

(statearr_35122_35173[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35118 === (4))){
var inst_35048 = (state_35117[(8)]);
var inst_35048__$1 = (state_35117[(2)]);
var inst_35049 = (inst_35048__$1 == null);
var state_35117__$1 = (function (){var statearr_35123 = state_35117;
(statearr_35123[(8)] = inst_35048__$1);

return statearr_35123;
})();
if(cljs.core.truth_(inst_35049)){
var statearr_35124_35174 = state_35117__$1;
(statearr_35124_35174[(1)] = (5));

} else {
var statearr_35125_35175 = state_35117__$1;
(statearr_35125_35175[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35118 === (15))){
var inst_35090 = (state_35117[(2)]);
var state_35117__$1 = state_35117;
var statearr_35126_35176 = state_35117__$1;
(statearr_35126_35176[(2)] = inst_35090);

(statearr_35126_35176[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35118 === (21))){
var inst_35110 = (state_35117[(2)]);
var state_35117__$1 = (function (){var statearr_35127 = state_35117;
(statearr_35127[(9)] = inst_35110);

return statearr_35127;
})();
var statearr_35128_35177 = state_35117__$1;
(statearr_35128_35177[(2)] = null);

(statearr_35128_35177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35118 === (13))){
var inst_35072 = (state_35117[(10)]);
var inst_35074 = cljs.core.chunked_seq_QMARK_.call(null,inst_35072);
var state_35117__$1 = state_35117;
if(inst_35074){
var statearr_35129_35178 = state_35117__$1;
(statearr_35129_35178[(1)] = (16));

} else {
var statearr_35130_35179 = state_35117__$1;
(statearr_35130_35179[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35118 === (22))){
var inst_35102 = (state_35117[(2)]);
var state_35117__$1 = state_35117;
if(cljs.core.truth_(inst_35102)){
var statearr_35131_35180 = state_35117__$1;
(statearr_35131_35180[(1)] = (23));

} else {
var statearr_35132_35181 = state_35117__$1;
(statearr_35132_35181[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35118 === (6))){
var inst_35098 = (state_35117[(11)]);
var inst_35096 = (state_35117[(7)]);
var inst_35048 = (state_35117[(8)]);
var inst_35096__$1 = topic_fn.call(null,inst_35048);
var inst_35097 = cljs.core.deref.call(null,mults);
var inst_35098__$1 = cljs.core.get.call(null,inst_35097,inst_35096__$1);
var state_35117__$1 = (function (){var statearr_35133 = state_35117;
(statearr_35133[(11)] = inst_35098__$1);

(statearr_35133[(7)] = inst_35096__$1);

return statearr_35133;
})();
if(cljs.core.truth_(inst_35098__$1)){
var statearr_35134_35182 = state_35117__$1;
(statearr_35134_35182[(1)] = (19));

} else {
var statearr_35135_35183 = state_35117__$1;
(statearr_35135_35183[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35118 === (25))){
var inst_35107 = (state_35117[(2)]);
var state_35117__$1 = state_35117;
var statearr_35136_35184 = state_35117__$1;
(statearr_35136_35184[(2)] = inst_35107);

(statearr_35136_35184[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35118 === (17))){
var inst_35072 = (state_35117[(10)]);
var inst_35081 = cljs.core.first.call(null,inst_35072);
var inst_35082 = cljs.core.async.muxch_STAR_.call(null,inst_35081);
var inst_35083 = cljs.core.async.close_BANG_.call(null,inst_35082);
var inst_35084 = cljs.core.next.call(null,inst_35072);
var inst_35058 = inst_35084;
var inst_35059 = null;
var inst_35060 = (0);
var inst_35061 = (0);
var state_35117__$1 = (function (){var statearr_35137 = state_35117;
(statearr_35137[(12)] = inst_35083);

(statearr_35137[(13)] = inst_35061);

(statearr_35137[(14)] = inst_35060);

(statearr_35137[(15)] = inst_35058);

(statearr_35137[(16)] = inst_35059);

return statearr_35137;
})();
var statearr_35138_35185 = state_35117__$1;
(statearr_35138_35185[(2)] = null);

(statearr_35138_35185[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35118 === (3))){
var inst_35115 = (state_35117[(2)]);
var state_35117__$1 = state_35117;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35117__$1,inst_35115);
} else {
if((state_val_35118 === (12))){
var inst_35092 = (state_35117[(2)]);
var state_35117__$1 = state_35117;
var statearr_35139_35186 = state_35117__$1;
(statearr_35139_35186[(2)] = inst_35092);

(statearr_35139_35186[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35118 === (2))){
var state_35117__$1 = state_35117;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35117__$1,(4),ch);
} else {
if((state_val_35118 === (23))){
var state_35117__$1 = state_35117;
var statearr_35140_35187 = state_35117__$1;
(statearr_35140_35187[(2)] = null);

(statearr_35140_35187[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35118 === (19))){
var inst_35098 = (state_35117[(11)]);
var inst_35048 = (state_35117[(8)]);
var inst_35100 = cljs.core.async.muxch_STAR_.call(null,inst_35098);
var state_35117__$1 = state_35117;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35117__$1,(22),inst_35100,inst_35048);
} else {
if((state_val_35118 === (11))){
var inst_35072 = (state_35117[(10)]);
var inst_35058 = (state_35117[(15)]);
var inst_35072__$1 = cljs.core.seq.call(null,inst_35058);
var state_35117__$1 = (function (){var statearr_35141 = state_35117;
(statearr_35141[(10)] = inst_35072__$1);

return statearr_35141;
})();
if(inst_35072__$1){
var statearr_35142_35188 = state_35117__$1;
(statearr_35142_35188[(1)] = (13));

} else {
var statearr_35143_35189 = state_35117__$1;
(statearr_35143_35189[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35118 === (9))){
var inst_35094 = (state_35117[(2)]);
var state_35117__$1 = state_35117;
var statearr_35144_35190 = state_35117__$1;
(statearr_35144_35190[(2)] = inst_35094);

(statearr_35144_35190[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35118 === (5))){
var inst_35055 = cljs.core.deref.call(null,mults);
var inst_35056 = cljs.core.vals.call(null,inst_35055);
var inst_35057 = cljs.core.seq.call(null,inst_35056);
var inst_35058 = inst_35057;
var inst_35059 = null;
var inst_35060 = (0);
var inst_35061 = (0);
var state_35117__$1 = (function (){var statearr_35145 = state_35117;
(statearr_35145[(13)] = inst_35061);

(statearr_35145[(14)] = inst_35060);

(statearr_35145[(15)] = inst_35058);

(statearr_35145[(16)] = inst_35059);

return statearr_35145;
})();
var statearr_35146_35191 = state_35117__$1;
(statearr_35146_35191[(2)] = null);

(statearr_35146_35191[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35118 === (14))){
var state_35117__$1 = state_35117;
var statearr_35150_35192 = state_35117__$1;
(statearr_35150_35192[(2)] = null);

(statearr_35150_35192[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35118 === (16))){
var inst_35072 = (state_35117[(10)]);
var inst_35076 = cljs.core.chunk_first.call(null,inst_35072);
var inst_35077 = cljs.core.chunk_rest.call(null,inst_35072);
var inst_35078 = cljs.core.count.call(null,inst_35076);
var inst_35058 = inst_35077;
var inst_35059 = inst_35076;
var inst_35060 = inst_35078;
var inst_35061 = (0);
var state_35117__$1 = (function (){var statearr_35151 = state_35117;
(statearr_35151[(13)] = inst_35061);

(statearr_35151[(14)] = inst_35060);

(statearr_35151[(15)] = inst_35058);

(statearr_35151[(16)] = inst_35059);

return statearr_35151;
})();
var statearr_35152_35193 = state_35117__$1;
(statearr_35152_35193[(2)] = null);

(statearr_35152_35193[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35118 === (10))){
var inst_35061 = (state_35117[(13)]);
var inst_35060 = (state_35117[(14)]);
var inst_35058 = (state_35117[(15)]);
var inst_35059 = (state_35117[(16)]);
var inst_35066 = cljs.core._nth.call(null,inst_35059,inst_35061);
var inst_35067 = cljs.core.async.muxch_STAR_.call(null,inst_35066);
var inst_35068 = cljs.core.async.close_BANG_.call(null,inst_35067);
var inst_35069 = (inst_35061 + (1));
var tmp35147 = inst_35060;
var tmp35148 = inst_35058;
var tmp35149 = inst_35059;
var inst_35058__$1 = tmp35148;
var inst_35059__$1 = tmp35149;
var inst_35060__$1 = tmp35147;
var inst_35061__$1 = inst_35069;
var state_35117__$1 = (function (){var statearr_35153 = state_35117;
(statearr_35153[(13)] = inst_35061__$1);

(statearr_35153[(14)] = inst_35060__$1);

(statearr_35153[(15)] = inst_35058__$1);

(statearr_35153[(17)] = inst_35068);

(statearr_35153[(16)] = inst_35059__$1);

return statearr_35153;
})();
var statearr_35154_35194 = state_35117__$1;
(statearr_35154_35194[(2)] = null);

(statearr_35154_35194[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35118 === (18))){
var inst_35087 = (state_35117[(2)]);
var state_35117__$1 = state_35117;
var statearr_35155_35195 = state_35117__$1;
(statearr_35155_35195[(2)] = inst_35087);

(statearr_35155_35195[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35118 === (8))){
var inst_35061 = (state_35117[(13)]);
var inst_35060 = (state_35117[(14)]);
var inst_35063 = (inst_35061 < inst_35060);
var inst_35064 = inst_35063;
var state_35117__$1 = state_35117;
if(cljs.core.truth_(inst_35064)){
var statearr_35156_35196 = state_35117__$1;
(statearr_35156_35196[(1)] = (10));

} else {
var statearr_35157_35197 = state_35117__$1;
(statearr_35157_35197[(1)] = (11));

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
});})(c__33236__auto___35169,mults,ensure_mult,p))
;
return ((function (switch__33122__auto__,c__33236__auto___35169,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__33123__auto__ = null;
var cljs$core$async$state_machine__33123__auto____0 = (function (){
var statearr_35161 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35161[(0)] = cljs$core$async$state_machine__33123__auto__);

(statearr_35161[(1)] = (1));

return statearr_35161;
});
var cljs$core$async$state_machine__33123__auto____1 = (function (state_35117){
while(true){
var ret_value__33124__auto__ = (function (){try{while(true){
var result__33125__auto__ = switch__33122__auto__.call(null,state_35117);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33125__auto__;
}
break;
}
}catch (e35162){if((e35162 instanceof Object)){
var ex__33126__auto__ = e35162;
var statearr_35163_35198 = state_35117;
(statearr_35163_35198[(5)] = ex__33126__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35117);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35162;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33124__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35199 = state_35117;
state_35117 = G__35199;
continue;
} else {
return ret_value__33124__auto__;
}
break;
}
});
cljs$core$async$state_machine__33123__auto__ = function(state_35117){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33123__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33123__auto____1.call(this,state_35117);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33123__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33123__auto____0;
cljs$core$async$state_machine__33123__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33123__auto____1;
return cljs$core$async$state_machine__33123__auto__;
})()
;})(switch__33122__auto__,c__33236__auto___35169,mults,ensure_mult,p))
})();
var state__33238__auto__ = (function (){var statearr_35164 = f__33237__auto__.call(null);
(statearr_35164[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33236__auto___35169);

return statearr_35164;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33238__auto__);
});})(c__33236__auto___35169,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args35200 = [];
var len__21280__auto___35203 = arguments.length;
var i__21281__auto___35204 = (0);
while(true){
if((i__21281__auto___35204 < len__21280__auto___35203)){
args35200.push((arguments[i__21281__auto___35204]));

var G__35205 = (i__21281__auto___35204 + (1));
i__21281__auto___35204 = G__35205;
continue;
} else {
}
break;
}

var G__35202 = args35200.length;
switch (G__35202) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35200.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args35207 = [];
var len__21280__auto___35210 = arguments.length;
var i__21281__auto___35211 = (0);
while(true){
if((i__21281__auto___35211 < len__21280__auto___35210)){
args35207.push((arguments[i__21281__auto___35211]));

var G__35212 = (i__21281__auto___35211 + (1));
i__21281__auto___35211 = G__35212;
continue;
} else {
}
break;
}

var G__35209 = args35207.length;
switch (G__35209) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35207.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args35214 = [];
var len__21280__auto___35285 = arguments.length;
var i__21281__auto___35286 = (0);
while(true){
if((i__21281__auto___35286 < len__21280__auto___35285)){
args35214.push((arguments[i__21281__auto___35286]));

var G__35287 = (i__21281__auto___35286 + (1));
i__21281__auto___35286 = G__35287;
continue;
} else {
}
break;
}

var G__35216 = args35214.length;
switch (G__35216) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35214.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__33236__auto___35289 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33236__auto___35289,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__33237__auto__ = (function (){var switch__33122__auto__ = ((function (c__33236__auto___35289,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_35255){
var state_val_35256 = (state_35255[(1)]);
if((state_val_35256 === (7))){
var state_35255__$1 = state_35255;
var statearr_35257_35290 = state_35255__$1;
(statearr_35257_35290[(2)] = null);

(statearr_35257_35290[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35256 === (1))){
var state_35255__$1 = state_35255;
var statearr_35258_35291 = state_35255__$1;
(statearr_35258_35291[(2)] = null);

(statearr_35258_35291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35256 === (4))){
var inst_35219 = (state_35255[(7)]);
var inst_35221 = (inst_35219 < cnt);
var state_35255__$1 = state_35255;
if(cljs.core.truth_(inst_35221)){
var statearr_35259_35292 = state_35255__$1;
(statearr_35259_35292[(1)] = (6));

} else {
var statearr_35260_35293 = state_35255__$1;
(statearr_35260_35293[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35256 === (15))){
var inst_35251 = (state_35255[(2)]);
var state_35255__$1 = state_35255;
var statearr_35261_35294 = state_35255__$1;
(statearr_35261_35294[(2)] = inst_35251);

(statearr_35261_35294[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35256 === (13))){
var inst_35244 = cljs.core.async.close_BANG_.call(null,out);
var state_35255__$1 = state_35255;
var statearr_35262_35295 = state_35255__$1;
(statearr_35262_35295[(2)] = inst_35244);

(statearr_35262_35295[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35256 === (6))){
var state_35255__$1 = state_35255;
var statearr_35263_35296 = state_35255__$1;
(statearr_35263_35296[(2)] = null);

(statearr_35263_35296[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35256 === (3))){
var inst_35253 = (state_35255[(2)]);
var state_35255__$1 = state_35255;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35255__$1,inst_35253);
} else {
if((state_val_35256 === (12))){
var inst_35241 = (state_35255[(8)]);
var inst_35241__$1 = (state_35255[(2)]);
var inst_35242 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_35241__$1);
var state_35255__$1 = (function (){var statearr_35264 = state_35255;
(statearr_35264[(8)] = inst_35241__$1);

return statearr_35264;
})();
if(cljs.core.truth_(inst_35242)){
var statearr_35265_35297 = state_35255__$1;
(statearr_35265_35297[(1)] = (13));

} else {
var statearr_35266_35298 = state_35255__$1;
(statearr_35266_35298[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35256 === (2))){
var inst_35218 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_35219 = (0);
var state_35255__$1 = (function (){var statearr_35267 = state_35255;
(statearr_35267[(7)] = inst_35219);

(statearr_35267[(9)] = inst_35218);

return statearr_35267;
})();
var statearr_35268_35299 = state_35255__$1;
(statearr_35268_35299[(2)] = null);

(statearr_35268_35299[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35256 === (11))){
var inst_35219 = (state_35255[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35255,(10),Object,null,(9));
var inst_35228 = chs__$1.call(null,inst_35219);
var inst_35229 = done.call(null,inst_35219);
var inst_35230 = cljs.core.async.take_BANG_.call(null,inst_35228,inst_35229);
var state_35255__$1 = state_35255;
var statearr_35269_35300 = state_35255__$1;
(statearr_35269_35300[(2)] = inst_35230);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35255__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35256 === (9))){
var inst_35219 = (state_35255[(7)]);
var inst_35232 = (state_35255[(2)]);
var inst_35233 = (inst_35219 + (1));
var inst_35219__$1 = inst_35233;
var state_35255__$1 = (function (){var statearr_35270 = state_35255;
(statearr_35270[(7)] = inst_35219__$1);

(statearr_35270[(10)] = inst_35232);

return statearr_35270;
})();
var statearr_35271_35301 = state_35255__$1;
(statearr_35271_35301[(2)] = null);

(statearr_35271_35301[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35256 === (5))){
var inst_35239 = (state_35255[(2)]);
var state_35255__$1 = (function (){var statearr_35272 = state_35255;
(statearr_35272[(11)] = inst_35239);

return statearr_35272;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35255__$1,(12),dchan);
} else {
if((state_val_35256 === (14))){
var inst_35241 = (state_35255[(8)]);
var inst_35246 = cljs.core.apply.call(null,f,inst_35241);
var state_35255__$1 = state_35255;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35255__$1,(16),out,inst_35246);
} else {
if((state_val_35256 === (16))){
var inst_35248 = (state_35255[(2)]);
var state_35255__$1 = (function (){var statearr_35273 = state_35255;
(statearr_35273[(12)] = inst_35248);

return statearr_35273;
})();
var statearr_35274_35302 = state_35255__$1;
(statearr_35274_35302[(2)] = null);

(statearr_35274_35302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35256 === (10))){
var inst_35223 = (state_35255[(2)]);
var inst_35224 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_35255__$1 = (function (){var statearr_35275 = state_35255;
(statearr_35275[(13)] = inst_35223);

return statearr_35275;
})();
var statearr_35276_35303 = state_35255__$1;
(statearr_35276_35303[(2)] = inst_35224);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35255__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35256 === (8))){
var inst_35237 = (state_35255[(2)]);
var state_35255__$1 = state_35255;
var statearr_35277_35304 = state_35255__$1;
(statearr_35277_35304[(2)] = inst_35237);

(statearr_35277_35304[(1)] = (5));


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
});})(c__33236__auto___35289,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__33122__auto__,c__33236__auto___35289,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__33123__auto__ = null;
var cljs$core$async$state_machine__33123__auto____0 = (function (){
var statearr_35281 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35281[(0)] = cljs$core$async$state_machine__33123__auto__);

(statearr_35281[(1)] = (1));

return statearr_35281;
});
var cljs$core$async$state_machine__33123__auto____1 = (function (state_35255){
while(true){
var ret_value__33124__auto__ = (function (){try{while(true){
var result__33125__auto__ = switch__33122__auto__.call(null,state_35255);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33125__auto__;
}
break;
}
}catch (e35282){if((e35282 instanceof Object)){
var ex__33126__auto__ = e35282;
var statearr_35283_35305 = state_35255;
(statearr_35283_35305[(5)] = ex__33126__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35255);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35282;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33124__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35306 = state_35255;
state_35255 = G__35306;
continue;
} else {
return ret_value__33124__auto__;
}
break;
}
});
cljs$core$async$state_machine__33123__auto__ = function(state_35255){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33123__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33123__auto____1.call(this,state_35255);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33123__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33123__auto____0;
cljs$core$async$state_machine__33123__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33123__auto____1;
return cljs$core$async$state_machine__33123__auto__;
})()
;})(switch__33122__auto__,c__33236__auto___35289,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__33238__auto__ = (function (){var statearr_35284 = f__33237__auto__.call(null);
(statearr_35284[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33236__auto___35289);

return statearr_35284;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33238__auto__);
});})(c__33236__auto___35289,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args35308 = [];
var len__21280__auto___35366 = arguments.length;
var i__21281__auto___35367 = (0);
while(true){
if((i__21281__auto___35367 < len__21280__auto___35366)){
args35308.push((arguments[i__21281__auto___35367]));

var G__35368 = (i__21281__auto___35367 + (1));
i__21281__auto___35367 = G__35368;
continue;
} else {
}
break;
}

var G__35310 = args35308.length;
switch (G__35310) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35308.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33236__auto___35370 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33236__auto___35370,out){
return (function (){
var f__33237__auto__ = (function (){var switch__33122__auto__ = ((function (c__33236__auto___35370,out){
return (function (state_35342){
var state_val_35343 = (state_35342[(1)]);
if((state_val_35343 === (7))){
var inst_35321 = (state_35342[(7)]);
var inst_35322 = (state_35342[(8)]);
var inst_35321__$1 = (state_35342[(2)]);
var inst_35322__$1 = cljs.core.nth.call(null,inst_35321__$1,(0),null);
var inst_35323 = cljs.core.nth.call(null,inst_35321__$1,(1),null);
var inst_35324 = (inst_35322__$1 == null);
var state_35342__$1 = (function (){var statearr_35344 = state_35342;
(statearr_35344[(7)] = inst_35321__$1);

(statearr_35344[(9)] = inst_35323);

(statearr_35344[(8)] = inst_35322__$1);

return statearr_35344;
})();
if(cljs.core.truth_(inst_35324)){
var statearr_35345_35371 = state_35342__$1;
(statearr_35345_35371[(1)] = (8));

} else {
var statearr_35346_35372 = state_35342__$1;
(statearr_35346_35372[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35343 === (1))){
var inst_35311 = cljs.core.vec.call(null,chs);
var inst_35312 = inst_35311;
var state_35342__$1 = (function (){var statearr_35347 = state_35342;
(statearr_35347[(10)] = inst_35312);

return statearr_35347;
})();
var statearr_35348_35373 = state_35342__$1;
(statearr_35348_35373[(2)] = null);

(statearr_35348_35373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35343 === (4))){
var inst_35312 = (state_35342[(10)]);
var state_35342__$1 = state_35342;
return cljs.core.async.ioc_alts_BANG_.call(null,state_35342__$1,(7),inst_35312);
} else {
if((state_val_35343 === (6))){
var inst_35338 = (state_35342[(2)]);
var state_35342__$1 = state_35342;
var statearr_35349_35374 = state_35342__$1;
(statearr_35349_35374[(2)] = inst_35338);

(statearr_35349_35374[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35343 === (3))){
var inst_35340 = (state_35342[(2)]);
var state_35342__$1 = state_35342;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35342__$1,inst_35340);
} else {
if((state_val_35343 === (2))){
var inst_35312 = (state_35342[(10)]);
var inst_35314 = cljs.core.count.call(null,inst_35312);
var inst_35315 = (inst_35314 > (0));
var state_35342__$1 = state_35342;
if(cljs.core.truth_(inst_35315)){
var statearr_35351_35375 = state_35342__$1;
(statearr_35351_35375[(1)] = (4));

} else {
var statearr_35352_35376 = state_35342__$1;
(statearr_35352_35376[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35343 === (11))){
var inst_35312 = (state_35342[(10)]);
var inst_35331 = (state_35342[(2)]);
var tmp35350 = inst_35312;
var inst_35312__$1 = tmp35350;
var state_35342__$1 = (function (){var statearr_35353 = state_35342;
(statearr_35353[(10)] = inst_35312__$1);

(statearr_35353[(11)] = inst_35331);

return statearr_35353;
})();
var statearr_35354_35377 = state_35342__$1;
(statearr_35354_35377[(2)] = null);

(statearr_35354_35377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35343 === (9))){
var inst_35322 = (state_35342[(8)]);
var state_35342__$1 = state_35342;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35342__$1,(11),out,inst_35322);
} else {
if((state_val_35343 === (5))){
var inst_35336 = cljs.core.async.close_BANG_.call(null,out);
var state_35342__$1 = state_35342;
var statearr_35355_35378 = state_35342__$1;
(statearr_35355_35378[(2)] = inst_35336);

(statearr_35355_35378[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35343 === (10))){
var inst_35334 = (state_35342[(2)]);
var state_35342__$1 = state_35342;
var statearr_35356_35379 = state_35342__$1;
(statearr_35356_35379[(2)] = inst_35334);

(statearr_35356_35379[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35343 === (8))){
var inst_35312 = (state_35342[(10)]);
var inst_35321 = (state_35342[(7)]);
var inst_35323 = (state_35342[(9)]);
var inst_35322 = (state_35342[(8)]);
var inst_35326 = (function (){var cs = inst_35312;
var vec__35317 = inst_35321;
var v = inst_35322;
var c = inst_35323;
return ((function (cs,vec__35317,v,c,inst_35312,inst_35321,inst_35323,inst_35322,state_val_35343,c__33236__auto___35370,out){
return (function (p1__35307_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__35307_SHARP_);
});
;})(cs,vec__35317,v,c,inst_35312,inst_35321,inst_35323,inst_35322,state_val_35343,c__33236__auto___35370,out))
})();
var inst_35327 = cljs.core.filterv.call(null,inst_35326,inst_35312);
var inst_35312__$1 = inst_35327;
var state_35342__$1 = (function (){var statearr_35357 = state_35342;
(statearr_35357[(10)] = inst_35312__$1);

return statearr_35357;
})();
var statearr_35358_35380 = state_35342__$1;
(statearr_35358_35380[(2)] = null);

(statearr_35358_35380[(1)] = (2));


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
});})(c__33236__auto___35370,out))
;
return ((function (switch__33122__auto__,c__33236__auto___35370,out){
return (function() {
var cljs$core$async$state_machine__33123__auto__ = null;
var cljs$core$async$state_machine__33123__auto____0 = (function (){
var statearr_35362 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35362[(0)] = cljs$core$async$state_machine__33123__auto__);

(statearr_35362[(1)] = (1));

return statearr_35362;
});
var cljs$core$async$state_machine__33123__auto____1 = (function (state_35342){
while(true){
var ret_value__33124__auto__ = (function (){try{while(true){
var result__33125__auto__ = switch__33122__auto__.call(null,state_35342);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33125__auto__;
}
break;
}
}catch (e35363){if((e35363 instanceof Object)){
var ex__33126__auto__ = e35363;
var statearr_35364_35381 = state_35342;
(statearr_35364_35381[(5)] = ex__33126__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35342);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35363;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33124__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35382 = state_35342;
state_35342 = G__35382;
continue;
} else {
return ret_value__33124__auto__;
}
break;
}
});
cljs$core$async$state_machine__33123__auto__ = function(state_35342){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33123__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33123__auto____1.call(this,state_35342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33123__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33123__auto____0;
cljs$core$async$state_machine__33123__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33123__auto____1;
return cljs$core$async$state_machine__33123__auto__;
})()
;})(switch__33122__auto__,c__33236__auto___35370,out))
})();
var state__33238__auto__ = (function (){var statearr_35365 = f__33237__auto__.call(null);
(statearr_35365[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33236__auto___35370);

return statearr_35365;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33238__auto__);
});})(c__33236__auto___35370,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args35383 = [];
var len__21280__auto___35432 = arguments.length;
var i__21281__auto___35433 = (0);
while(true){
if((i__21281__auto___35433 < len__21280__auto___35432)){
args35383.push((arguments[i__21281__auto___35433]));

var G__35434 = (i__21281__auto___35433 + (1));
i__21281__auto___35433 = G__35434;
continue;
} else {
}
break;
}

var G__35385 = args35383.length;
switch (G__35385) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35383.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33236__auto___35436 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33236__auto___35436,out){
return (function (){
var f__33237__auto__ = (function (){var switch__33122__auto__ = ((function (c__33236__auto___35436,out){
return (function (state_35409){
var state_val_35410 = (state_35409[(1)]);
if((state_val_35410 === (7))){
var inst_35391 = (state_35409[(7)]);
var inst_35391__$1 = (state_35409[(2)]);
var inst_35392 = (inst_35391__$1 == null);
var inst_35393 = cljs.core.not.call(null,inst_35392);
var state_35409__$1 = (function (){var statearr_35411 = state_35409;
(statearr_35411[(7)] = inst_35391__$1);

return statearr_35411;
})();
if(inst_35393){
var statearr_35412_35437 = state_35409__$1;
(statearr_35412_35437[(1)] = (8));

} else {
var statearr_35413_35438 = state_35409__$1;
(statearr_35413_35438[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35410 === (1))){
var inst_35386 = (0);
var state_35409__$1 = (function (){var statearr_35414 = state_35409;
(statearr_35414[(8)] = inst_35386);

return statearr_35414;
})();
var statearr_35415_35439 = state_35409__$1;
(statearr_35415_35439[(2)] = null);

(statearr_35415_35439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35410 === (4))){
var state_35409__$1 = state_35409;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35409__$1,(7),ch);
} else {
if((state_val_35410 === (6))){
var inst_35404 = (state_35409[(2)]);
var state_35409__$1 = state_35409;
var statearr_35416_35440 = state_35409__$1;
(statearr_35416_35440[(2)] = inst_35404);

(statearr_35416_35440[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35410 === (3))){
var inst_35406 = (state_35409[(2)]);
var inst_35407 = cljs.core.async.close_BANG_.call(null,out);
var state_35409__$1 = (function (){var statearr_35417 = state_35409;
(statearr_35417[(9)] = inst_35406);

return statearr_35417;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35409__$1,inst_35407);
} else {
if((state_val_35410 === (2))){
var inst_35386 = (state_35409[(8)]);
var inst_35388 = (inst_35386 < n);
var state_35409__$1 = state_35409;
if(cljs.core.truth_(inst_35388)){
var statearr_35418_35441 = state_35409__$1;
(statearr_35418_35441[(1)] = (4));

} else {
var statearr_35419_35442 = state_35409__$1;
(statearr_35419_35442[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35410 === (11))){
var inst_35386 = (state_35409[(8)]);
var inst_35396 = (state_35409[(2)]);
var inst_35397 = (inst_35386 + (1));
var inst_35386__$1 = inst_35397;
var state_35409__$1 = (function (){var statearr_35420 = state_35409;
(statearr_35420[(10)] = inst_35396);

(statearr_35420[(8)] = inst_35386__$1);

return statearr_35420;
})();
var statearr_35421_35443 = state_35409__$1;
(statearr_35421_35443[(2)] = null);

(statearr_35421_35443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35410 === (9))){
var state_35409__$1 = state_35409;
var statearr_35422_35444 = state_35409__$1;
(statearr_35422_35444[(2)] = null);

(statearr_35422_35444[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35410 === (5))){
var state_35409__$1 = state_35409;
var statearr_35423_35445 = state_35409__$1;
(statearr_35423_35445[(2)] = null);

(statearr_35423_35445[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35410 === (10))){
var inst_35401 = (state_35409[(2)]);
var state_35409__$1 = state_35409;
var statearr_35424_35446 = state_35409__$1;
(statearr_35424_35446[(2)] = inst_35401);

(statearr_35424_35446[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35410 === (8))){
var inst_35391 = (state_35409[(7)]);
var state_35409__$1 = state_35409;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35409__$1,(11),out,inst_35391);
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
});})(c__33236__auto___35436,out))
;
return ((function (switch__33122__auto__,c__33236__auto___35436,out){
return (function() {
var cljs$core$async$state_machine__33123__auto__ = null;
var cljs$core$async$state_machine__33123__auto____0 = (function (){
var statearr_35428 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35428[(0)] = cljs$core$async$state_machine__33123__auto__);

(statearr_35428[(1)] = (1));

return statearr_35428;
});
var cljs$core$async$state_machine__33123__auto____1 = (function (state_35409){
while(true){
var ret_value__33124__auto__ = (function (){try{while(true){
var result__33125__auto__ = switch__33122__auto__.call(null,state_35409);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33125__auto__;
}
break;
}
}catch (e35429){if((e35429 instanceof Object)){
var ex__33126__auto__ = e35429;
var statearr_35430_35447 = state_35409;
(statearr_35430_35447[(5)] = ex__33126__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35409);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35429;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33124__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35448 = state_35409;
state_35409 = G__35448;
continue;
} else {
return ret_value__33124__auto__;
}
break;
}
});
cljs$core$async$state_machine__33123__auto__ = function(state_35409){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33123__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33123__auto____1.call(this,state_35409);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33123__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33123__auto____0;
cljs$core$async$state_machine__33123__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33123__auto____1;
return cljs$core$async$state_machine__33123__auto__;
})()
;})(switch__33122__auto__,c__33236__auto___35436,out))
})();
var state__33238__auto__ = (function (){var statearr_35431 = f__33237__auto__.call(null);
(statearr_35431[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33236__auto___35436);

return statearr_35431;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33238__auto__);
});})(c__33236__auto___35436,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async35456 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35456 = (function (map_LT_,f,ch,meta35457){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta35457 = meta35457;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async35456.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35458,meta35457__$1){
var self__ = this;
var _35458__$1 = this;
return (new cljs.core.async.t_cljs$core$async35456(self__.map_LT_,self__.f,self__.ch,meta35457__$1));
});


cljs.core.async.t_cljs$core$async35456.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35458){
var self__ = this;
var _35458__$1 = this;
return self__.meta35457;
});


cljs.core.async.t_cljs$core$async35456.prototype.cljs$core$async$impl$protocols$Channel$ = true;


cljs.core.async.t_cljs$core$async35456.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});


cljs.core.async.t_cljs$core$async35456.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});


cljs.core.async.t_cljs$core$async35456.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;


cljs.core.async.t_cljs$core$async35456.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async35459 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35459 = (function (map_LT_,f,ch,meta35457,_,fn1,meta35460){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta35457 = meta35457;
this._ = _;
this.fn1 = fn1;
this.meta35460 = meta35460;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async35459.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_35461,meta35460__$1){
var self__ = this;
var _35461__$1 = this;
return (new cljs.core.async.t_cljs$core$async35459(self__.map_LT_,self__.f,self__.ch,self__.meta35457,self__._,self__.fn1,meta35460__$1));
});})(___$1))
;


cljs.core.async.t_cljs$core$async35459.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_35461){
var self__ = this;
var _35461__$1 = this;
return self__.meta35460;
});})(___$1))
;


cljs.core.async.t_cljs$core$async35459.prototype.cljs$core$async$impl$protocols$Handler$ = true;


cljs.core.async.t_cljs$core$async35459.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;


cljs.core.async.t_cljs$core$async35459.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;


cljs.core.async.t_cljs$core$async35459.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__35449_SHARP_){
return f1.call(null,(((p1__35449_SHARP_ == null))?null:self__.f.call(null,p1__35449_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async35459.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35457","meta35457",1717945241,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async35456","cljs.core.async/t_cljs$core$async35456",-1231763979,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta35460","meta35460",1092657819,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async35459.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35459.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35459";

cljs.core.async.t_cljs$core$async35459.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__20749__auto__,writer__20750__auto__,opt__20751__auto__){
return cljs.core._write.call(null,writer__20750__auto__,"cljs.core.async/t_cljs$core$async35459");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async35459 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35459(map_LT___$1,f__$1,ch__$1,meta35457__$1,___$2,fn1__$1,meta35460){
return (new cljs.core.async.t_cljs$core$async35459(map_LT___$1,f__$1,ch__$1,meta35457__$1,___$2,fn1__$1,meta35460));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async35459(self__.map_LT_,self__.f,self__.ch,self__.meta35457,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__20085__auto__ = ret;
if(cljs.core.truth_(and__20085__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__20085__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});


cljs.core.async.t_cljs$core$async35456.prototype.cljs$core$async$impl$protocols$WritePort$ = true;


cljs.core.async.t_cljs$core$async35456.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async35456.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35457","meta35457",1717945241,null)], null);
});

cljs.core.async.t_cljs$core$async35456.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35456.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35456";

cljs.core.async.t_cljs$core$async35456.cljs$lang$ctorPrWriter = (function (this__20749__auto__,writer__20750__auto__,opt__20751__auto__){
return cljs.core._write.call(null,writer__20750__auto__,"cljs.core.async/t_cljs$core$async35456");
});

cljs.core.async.__GT_t_cljs$core$async35456 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35456(map_LT___$1,f__$1,ch__$1,meta35457){
return (new cljs.core.async.t_cljs$core$async35456(map_LT___$1,f__$1,ch__$1,meta35457));
});

}

return (new cljs.core.async.t_cljs$core$async35456(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async35465 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35465 = (function (map_GT_,f,ch,meta35466){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta35466 = meta35466;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async35465.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35467,meta35466__$1){
var self__ = this;
var _35467__$1 = this;
return (new cljs.core.async.t_cljs$core$async35465(self__.map_GT_,self__.f,self__.ch,meta35466__$1));
});


cljs.core.async.t_cljs$core$async35465.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35467){
var self__ = this;
var _35467__$1 = this;
return self__.meta35466;
});


cljs.core.async.t_cljs$core$async35465.prototype.cljs$core$async$impl$protocols$Channel$ = true;


cljs.core.async.t_cljs$core$async35465.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});


cljs.core.async.t_cljs$core$async35465.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;


cljs.core.async.t_cljs$core$async35465.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});


cljs.core.async.t_cljs$core$async35465.prototype.cljs$core$async$impl$protocols$WritePort$ = true;


cljs.core.async.t_cljs$core$async35465.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async35465.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35466","meta35466",-768159046,null)], null);
});

cljs.core.async.t_cljs$core$async35465.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35465.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35465";

cljs.core.async.t_cljs$core$async35465.cljs$lang$ctorPrWriter = (function (this__20749__auto__,writer__20750__auto__,opt__20751__auto__){
return cljs.core._write.call(null,writer__20750__auto__,"cljs.core.async/t_cljs$core$async35465");
});

cljs.core.async.__GT_t_cljs$core$async35465 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async35465(map_GT___$1,f__$1,ch__$1,meta35466){
return (new cljs.core.async.t_cljs$core$async35465(map_GT___$1,f__$1,ch__$1,meta35466));
});

}

return (new cljs.core.async.t_cljs$core$async35465(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async35471 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35471 = (function (filter_GT_,p,ch,meta35472){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta35472 = meta35472;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async35471.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35473,meta35472__$1){
var self__ = this;
var _35473__$1 = this;
return (new cljs.core.async.t_cljs$core$async35471(self__.filter_GT_,self__.p,self__.ch,meta35472__$1));
});


cljs.core.async.t_cljs$core$async35471.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35473){
var self__ = this;
var _35473__$1 = this;
return self__.meta35472;
});


cljs.core.async.t_cljs$core$async35471.prototype.cljs$core$async$impl$protocols$Channel$ = true;


cljs.core.async.t_cljs$core$async35471.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});


cljs.core.async.t_cljs$core$async35471.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});


cljs.core.async.t_cljs$core$async35471.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;


cljs.core.async.t_cljs$core$async35471.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});


cljs.core.async.t_cljs$core$async35471.prototype.cljs$core$async$impl$protocols$WritePort$ = true;


cljs.core.async.t_cljs$core$async35471.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async35471.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35472","meta35472",-53119338,null)], null);
});

cljs.core.async.t_cljs$core$async35471.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35471.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35471";

cljs.core.async.t_cljs$core$async35471.cljs$lang$ctorPrWriter = (function (this__20749__auto__,writer__20750__auto__,opt__20751__auto__){
return cljs.core._write.call(null,writer__20750__auto__,"cljs.core.async/t_cljs$core$async35471");
});

cljs.core.async.__GT_t_cljs$core$async35471 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async35471(filter_GT___$1,p__$1,ch__$1,meta35472){
return (new cljs.core.async.t_cljs$core$async35471(filter_GT___$1,p__$1,ch__$1,meta35472));
});

}

return (new cljs.core.async.t_cljs$core$async35471(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args35474 = [];
var len__21280__auto___35518 = arguments.length;
var i__21281__auto___35519 = (0);
while(true){
if((i__21281__auto___35519 < len__21280__auto___35518)){
args35474.push((arguments[i__21281__auto___35519]));

var G__35520 = (i__21281__auto___35519 + (1));
i__21281__auto___35519 = G__35520;
continue;
} else {
}
break;
}

var G__35476 = args35474.length;
switch (G__35476) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35474.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33236__auto___35522 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33236__auto___35522,out){
return (function (){
var f__33237__auto__ = (function (){var switch__33122__auto__ = ((function (c__33236__auto___35522,out){
return (function (state_35497){
var state_val_35498 = (state_35497[(1)]);
if((state_val_35498 === (7))){
var inst_35493 = (state_35497[(2)]);
var state_35497__$1 = state_35497;
var statearr_35499_35523 = state_35497__$1;
(statearr_35499_35523[(2)] = inst_35493);

(statearr_35499_35523[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35498 === (1))){
var state_35497__$1 = state_35497;
var statearr_35500_35524 = state_35497__$1;
(statearr_35500_35524[(2)] = null);

(statearr_35500_35524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35498 === (4))){
var inst_35479 = (state_35497[(7)]);
var inst_35479__$1 = (state_35497[(2)]);
var inst_35480 = (inst_35479__$1 == null);
var state_35497__$1 = (function (){var statearr_35501 = state_35497;
(statearr_35501[(7)] = inst_35479__$1);

return statearr_35501;
})();
if(cljs.core.truth_(inst_35480)){
var statearr_35502_35525 = state_35497__$1;
(statearr_35502_35525[(1)] = (5));

} else {
var statearr_35503_35526 = state_35497__$1;
(statearr_35503_35526[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35498 === (6))){
var inst_35479 = (state_35497[(7)]);
var inst_35484 = p.call(null,inst_35479);
var state_35497__$1 = state_35497;
if(cljs.core.truth_(inst_35484)){
var statearr_35504_35527 = state_35497__$1;
(statearr_35504_35527[(1)] = (8));

} else {
var statearr_35505_35528 = state_35497__$1;
(statearr_35505_35528[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35498 === (3))){
var inst_35495 = (state_35497[(2)]);
var state_35497__$1 = state_35497;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35497__$1,inst_35495);
} else {
if((state_val_35498 === (2))){
var state_35497__$1 = state_35497;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35497__$1,(4),ch);
} else {
if((state_val_35498 === (11))){
var inst_35487 = (state_35497[(2)]);
var state_35497__$1 = state_35497;
var statearr_35506_35529 = state_35497__$1;
(statearr_35506_35529[(2)] = inst_35487);

(statearr_35506_35529[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35498 === (9))){
var state_35497__$1 = state_35497;
var statearr_35507_35530 = state_35497__$1;
(statearr_35507_35530[(2)] = null);

(statearr_35507_35530[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35498 === (5))){
var inst_35482 = cljs.core.async.close_BANG_.call(null,out);
var state_35497__$1 = state_35497;
var statearr_35508_35531 = state_35497__$1;
(statearr_35508_35531[(2)] = inst_35482);

(statearr_35508_35531[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35498 === (10))){
var inst_35490 = (state_35497[(2)]);
var state_35497__$1 = (function (){var statearr_35509 = state_35497;
(statearr_35509[(8)] = inst_35490);

return statearr_35509;
})();
var statearr_35510_35532 = state_35497__$1;
(statearr_35510_35532[(2)] = null);

(statearr_35510_35532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35498 === (8))){
var inst_35479 = (state_35497[(7)]);
var state_35497__$1 = state_35497;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35497__$1,(11),out,inst_35479);
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
});})(c__33236__auto___35522,out))
;
return ((function (switch__33122__auto__,c__33236__auto___35522,out){
return (function() {
var cljs$core$async$state_machine__33123__auto__ = null;
var cljs$core$async$state_machine__33123__auto____0 = (function (){
var statearr_35514 = [null,null,null,null,null,null,null,null,null];
(statearr_35514[(0)] = cljs$core$async$state_machine__33123__auto__);

(statearr_35514[(1)] = (1));

return statearr_35514;
});
var cljs$core$async$state_machine__33123__auto____1 = (function (state_35497){
while(true){
var ret_value__33124__auto__ = (function (){try{while(true){
var result__33125__auto__ = switch__33122__auto__.call(null,state_35497);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33125__auto__;
}
break;
}
}catch (e35515){if((e35515 instanceof Object)){
var ex__33126__auto__ = e35515;
var statearr_35516_35533 = state_35497;
(statearr_35516_35533[(5)] = ex__33126__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35497);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35515;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33124__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35534 = state_35497;
state_35497 = G__35534;
continue;
} else {
return ret_value__33124__auto__;
}
break;
}
});
cljs$core$async$state_machine__33123__auto__ = function(state_35497){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33123__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33123__auto____1.call(this,state_35497);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33123__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33123__auto____0;
cljs$core$async$state_machine__33123__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33123__auto____1;
return cljs$core$async$state_machine__33123__auto__;
})()
;})(switch__33122__auto__,c__33236__auto___35522,out))
})();
var state__33238__auto__ = (function (){var statearr_35517 = f__33237__auto__.call(null);
(statearr_35517[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33236__auto___35522);

return statearr_35517;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33238__auto__);
});})(c__33236__auto___35522,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args35535 = [];
var len__21280__auto___35538 = arguments.length;
var i__21281__auto___35539 = (0);
while(true){
if((i__21281__auto___35539 < len__21280__auto___35538)){
args35535.push((arguments[i__21281__auto___35539]));

var G__35540 = (i__21281__auto___35539 + (1));
i__21281__auto___35539 = G__35540;
continue;
} else {
}
break;
}

var G__35537 = args35535.length;
switch (G__35537) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35535.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__33236__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33236__auto__){
return (function (){
var f__33237__auto__ = (function (){var switch__33122__auto__ = ((function (c__33236__auto__){
return (function (state_35707){
var state_val_35708 = (state_35707[(1)]);
if((state_val_35708 === (7))){
var inst_35703 = (state_35707[(2)]);
var state_35707__$1 = state_35707;
var statearr_35709_35750 = state_35707__$1;
(statearr_35709_35750[(2)] = inst_35703);

(statearr_35709_35750[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35708 === (20))){
var inst_35673 = (state_35707[(7)]);
var inst_35684 = (state_35707[(2)]);
var inst_35685 = cljs.core.next.call(null,inst_35673);
var inst_35659 = inst_35685;
var inst_35660 = null;
var inst_35661 = (0);
var inst_35662 = (0);
var state_35707__$1 = (function (){var statearr_35710 = state_35707;
(statearr_35710[(8)] = inst_35659);

(statearr_35710[(9)] = inst_35662);

(statearr_35710[(10)] = inst_35684);

(statearr_35710[(11)] = inst_35660);

(statearr_35710[(12)] = inst_35661);

return statearr_35710;
})();
var statearr_35711_35751 = state_35707__$1;
(statearr_35711_35751[(2)] = null);

(statearr_35711_35751[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35708 === (1))){
var state_35707__$1 = state_35707;
var statearr_35712_35752 = state_35707__$1;
(statearr_35712_35752[(2)] = null);

(statearr_35712_35752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35708 === (4))){
var inst_35648 = (state_35707[(13)]);
var inst_35648__$1 = (state_35707[(2)]);
var inst_35649 = (inst_35648__$1 == null);
var state_35707__$1 = (function (){var statearr_35713 = state_35707;
(statearr_35713[(13)] = inst_35648__$1);

return statearr_35713;
})();
if(cljs.core.truth_(inst_35649)){
var statearr_35714_35753 = state_35707__$1;
(statearr_35714_35753[(1)] = (5));

} else {
var statearr_35715_35754 = state_35707__$1;
(statearr_35715_35754[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35708 === (15))){
var state_35707__$1 = state_35707;
var statearr_35719_35755 = state_35707__$1;
(statearr_35719_35755[(2)] = null);

(statearr_35719_35755[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35708 === (21))){
var state_35707__$1 = state_35707;
var statearr_35720_35756 = state_35707__$1;
(statearr_35720_35756[(2)] = null);

(statearr_35720_35756[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35708 === (13))){
var inst_35659 = (state_35707[(8)]);
var inst_35662 = (state_35707[(9)]);
var inst_35660 = (state_35707[(11)]);
var inst_35661 = (state_35707[(12)]);
var inst_35669 = (state_35707[(2)]);
var inst_35670 = (inst_35662 + (1));
var tmp35716 = inst_35659;
var tmp35717 = inst_35660;
var tmp35718 = inst_35661;
var inst_35659__$1 = tmp35716;
var inst_35660__$1 = tmp35717;
var inst_35661__$1 = tmp35718;
var inst_35662__$1 = inst_35670;
var state_35707__$1 = (function (){var statearr_35721 = state_35707;
(statearr_35721[(8)] = inst_35659__$1);

(statearr_35721[(9)] = inst_35662__$1);

(statearr_35721[(14)] = inst_35669);

(statearr_35721[(11)] = inst_35660__$1);

(statearr_35721[(12)] = inst_35661__$1);

return statearr_35721;
})();
var statearr_35722_35757 = state_35707__$1;
(statearr_35722_35757[(2)] = null);

(statearr_35722_35757[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35708 === (22))){
var state_35707__$1 = state_35707;
var statearr_35723_35758 = state_35707__$1;
(statearr_35723_35758[(2)] = null);

(statearr_35723_35758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35708 === (6))){
var inst_35648 = (state_35707[(13)]);
var inst_35657 = f.call(null,inst_35648);
var inst_35658 = cljs.core.seq.call(null,inst_35657);
var inst_35659 = inst_35658;
var inst_35660 = null;
var inst_35661 = (0);
var inst_35662 = (0);
var state_35707__$1 = (function (){var statearr_35724 = state_35707;
(statearr_35724[(8)] = inst_35659);

(statearr_35724[(9)] = inst_35662);

(statearr_35724[(11)] = inst_35660);

(statearr_35724[(12)] = inst_35661);

return statearr_35724;
})();
var statearr_35725_35759 = state_35707__$1;
(statearr_35725_35759[(2)] = null);

(statearr_35725_35759[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35708 === (17))){
var inst_35673 = (state_35707[(7)]);
var inst_35677 = cljs.core.chunk_first.call(null,inst_35673);
var inst_35678 = cljs.core.chunk_rest.call(null,inst_35673);
var inst_35679 = cljs.core.count.call(null,inst_35677);
var inst_35659 = inst_35678;
var inst_35660 = inst_35677;
var inst_35661 = inst_35679;
var inst_35662 = (0);
var state_35707__$1 = (function (){var statearr_35726 = state_35707;
(statearr_35726[(8)] = inst_35659);

(statearr_35726[(9)] = inst_35662);

(statearr_35726[(11)] = inst_35660);

(statearr_35726[(12)] = inst_35661);

return statearr_35726;
})();
var statearr_35727_35760 = state_35707__$1;
(statearr_35727_35760[(2)] = null);

(statearr_35727_35760[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35708 === (3))){
var inst_35705 = (state_35707[(2)]);
var state_35707__$1 = state_35707;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35707__$1,inst_35705);
} else {
if((state_val_35708 === (12))){
var inst_35693 = (state_35707[(2)]);
var state_35707__$1 = state_35707;
var statearr_35728_35761 = state_35707__$1;
(statearr_35728_35761[(2)] = inst_35693);

(statearr_35728_35761[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35708 === (2))){
var state_35707__$1 = state_35707;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35707__$1,(4),in$);
} else {
if((state_val_35708 === (23))){
var inst_35701 = (state_35707[(2)]);
var state_35707__$1 = state_35707;
var statearr_35729_35762 = state_35707__$1;
(statearr_35729_35762[(2)] = inst_35701);

(statearr_35729_35762[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35708 === (19))){
var inst_35688 = (state_35707[(2)]);
var state_35707__$1 = state_35707;
var statearr_35730_35763 = state_35707__$1;
(statearr_35730_35763[(2)] = inst_35688);

(statearr_35730_35763[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35708 === (11))){
var inst_35659 = (state_35707[(8)]);
var inst_35673 = (state_35707[(7)]);
var inst_35673__$1 = cljs.core.seq.call(null,inst_35659);
var state_35707__$1 = (function (){var statearr_35731 = state_35707;
(statearr_35731[(7)] = inst_35673__$1);

return statearr_35731;
})();
if(inst_35673__$1){
var statearr_35732_35764 = state_35707__$1;
(statearr_35732_35764[(1)] = (14));

} else {
var statearr_35733_35765 = state_35707__$1;
(statearr_35733_35765[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35708 === (9))){
var inst_35695 = (state_35707[(2)]);
var inst_35696 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_35707__$1 = (function (){var statearr_35734 = state_35707;
(statearr_35734[(15)] = inst_35695);

return statearr_35734;
})();
if(cljs.core.truth_(inst_35696)){
var statearr_35735_35766 = state_35707__$1;
(statearr_35735_35766[(1)] = (21));

} else {
var statearr_35736_35767 = state_35707__$1;
(statearr_35736_35767[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35708 === (5))){
var inst_35651 = cljs.core.async.close_BANG_.call(null,out);
var state_35707__$1 = state_35707;
var statearr_35737_35768 = state_35707__$1;
(statearr_35737_35768[(2)] = inst_35651);

(statearr_35737_35768[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35708 === (14))){
var inst_35673 = (state_35707[(7)]);
var inst_35675 = cljs.core.chunked_seq_QMARK_.call(null,inst_35673);
var state_35707__$1 = state_35707;
if(inst_35675){
var statearr_35738_35769 = state_35707__$1;
(statearr_35738_35769[(1)] = (17));

} else {
var statearr_35739_35770 = state_35707__$1;
(statearr_35739_35770[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35708 === (16))){
var inst_35691 = (state_35707[(2)]);
var state_35707__$1 = state_35707;
var statearr_35740_35771 = state_35707__$1;
(statearr_35740_35771[(2)] = inst_35691);

(statearr_35740_35771[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35708 === (10))){
var inst_35662 = (state_35707[(9)]);
var inst_35660 = (state_35707[(11)]);
var inst_35667 = cljs.core._nth.call(null,inst_35660,inst_35662);
var state_35707__$1 = state_35707;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35707__$1,(13),out,inst_35667);
} else {
if((state_val_35708 === (18))){
var inst_35673 = (state_35707[(7)]);
var inst_35682 = cljs.core.first.call(null,inst_35673);
var state_35707__$1 = state_35707;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35707__$1,(20),out,inst_35682);
} else {
if((state_val_35708 === (8))){
var inst_35662 = (state_35707[(9)]);
var inst_35661 = (state_35707[(12)]);
var inst_35664 = (inst_35662 < inst_35661);
var inst_35665 = inst_35664;
var state_35707__$1 = state_35707;
if(cljs.core.truth_(inst_35665)){
var statearr_35741_35772 = state_35707__$1;
(statearr_35741_35772[(1)] = (10));

} else {
var statearr_35742_35773 = state_35707__$1;
(statearr_35742_35773[(1)] = (11));

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
});})(c__33236__auto__))
;
return ((function (switch__33122__auto__,c__33236__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__33123__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__33123__auto____0 = (function (){
var statearr_35746 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35746[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__33123__auto__);

(statearr_35746[(1)] = (1));

return statearr_35746;
});
var cljs$core$async$mapcat_STAR__$_state_machine__33123__auto____1 = (function (state_35707){
while(true){
var ret_value__33124__auto__ = (function (){try{while(true){
var result__33125__auto__ = switch__33122__auto__.call(null,state_35707);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33125__auto__;
}
break;
}
}catch (e35747){if((e35747 instanceof Object)){
var ex__33126__auto__ = e35747;
var statearr_35748_35774 = state_35707;
(statearr_35748_35774[(5)] = ex__33126__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35707);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35747;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33124__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35775 = state_35707;
state_35707 = G__35775;
continue;
} else {
return ret_value__33124__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__33123__auto__ = function(state_35707){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__33123__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__33123__auto____1.call(this,state_35707);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__33123__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__33123__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__33123__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__33123__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__33123__auto__;
})()
;})(switch__33122__auto__,c__33236__auto__))
})();
var state__33238__auto__ = (function (){var statearr_35749 = f__33237__auto__.call(null);
(statearr_35749[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33236__auto__);

return statearr_35749;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33238__auto__);
});})(c__33236__auto__))
);

return c__33236__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args35776 = [];
var len__21280__auto___35779 = arguments.length;
var i__21281__auto___35780 = (0);
while(true){
if((i__21281__auto___35780 < len__21280__auto___35779)){
args35776.push((arguments[i__21281__auto___35780]));

var G__35781 = (i__21281__auto___35780 + (1));
i__21281__auto___35780 = G__35781;
continue;
} else {
}
break;
}

var G__35778 = args35776.length;
switch (G__35778) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35776.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args35783 = [];
var len__21280__auto___35786 = arguments.length;
var i__21281__auto___35787 = (0);
while(true){
if((i__21281__auto___35787 < len__21280__auto___35786)){
args35783.push((arguments[i__21281__auto___35787]));

var G__35788 = (i__21281__auto___35787 + (1));
i__21281__auto___35787 = G__35788;
continue;
} else {
}
break;
}

var G__35785 = args35783.length;
switch (G__35785) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35783.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args35790 = [];
var len__21280__auto___35841 = arguments.length;
var i__21281__auto___35842 = (0);
while(true){
if((i__21281__auto___35842 < len__21280__auto___35841)){
args35790.push((arguments[i__21281__auto___35842]));

var G__35843 = (i__21281__auto___35842 + (1));
i__21281__auto___35842 = G__35843;
continue;
} else {
}
break;
}

var G__35792 = args35790.length;
switch (G__35792) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35790.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33236__auto___35845 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33236__auto___35845,out){
return (function (){
var f__33237__auto__ = (function (){var switch__33122__auto__ = ((function (c__33236__auto___35845,out){
return (function (state_35816){
var state_val_35817 = (state_35816[(1)]);
if((state_val_35817 === (7))){
var inst_35811 = (state_35816[(2)]);
var state_35816__$1 = state_35816;
var statearr_35818_35846 = state_35816__$1;
(statearr_35818_35846[(2)] = inst_35811);

(statearr_35818_35846[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35817 === (1))){
var inst_35793 = null;
var state_35816__$1 = (function (){var statearr_35819 = state_35816;
(statearr_35819[(7)] = inst_35793);

return statearr_35819;
})();
var statearr_35820_35847 = state_35816__$1;
(statearr_35820_35847[(2)] = null);

(statearr_35820_35847[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35817 === (4))){
var inst_35796 = (state_35816[(8)]);
var inst_35796__$1 = (state_35816[(2)]);
var inst_35797 = (inst_35796__$1 == null);
var inst_35798 = cljs.core.not.call(null,inst_35797);
var state_35816__$1 = (function (){var statearr_35821 = state_35816;
(statearr_35821[(8)] = inst_35796__$1);

return statearr_35821;
})();
if(inst_35798){
var statearr_35822_35848 = state_35816__$1;
(statearr_35822_35848[(1)] = (5));

} else {
var statearr_35823_35849 = state_35816__$1;
(statearr_35823_35849[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35817 === (6))){
var state_35816__$1 = state_35816;
var statearr_35824_35850 = state_35816__$1;
(statearr_35824_35850[(2)] = null);

(statearr_35824_35850[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35817 === (3))){
var inst_35813 = (state_35816[(2)]);
var inst_35814 = cljs.core.async.close_BANG_.call(null,out);
var state_35816__$1 = (function (){var statearr_35825 = state_35816;
(statearr_35825[(9)] = inst_35813);

return statearr_35825;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35816__$1,inst_35814);
} else {
if((state_val_35817 === (2))){
var state_35816__$1 = state_35816;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35816__$1,(4),ch);
} else {
if((state_val_35817 === (11))){
var inst_35796 = (state_35816[(8)]);
var inst_35805 = (state_35816[(2)]);
var inst_35793 = inst_35796;
var state_35816__$1 = (function (){var statearr_35826 = state_35816;
(statearr_35826[(10)] = inst_35805);

(statearr_35826[(7)] = inst_35793);

return statearr_35826;
})();
var statearr_35827_35851 = state_35816__$1;
(statearr_35827_35851[(2)] = null);

(statearr_35827_35851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35817 === (9))){
var inst_35796 = (state_35816[(8)]);
var state_35816__$1 = state_35816;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35816__$1,(11),out,inst_35796);
} else {
if((state_val_35817 === (5))){
var inst_35793 = (state_35816[(7)]);
var inst_35796 = (state_35816[(8)]);
var inst_35800 = cljs.core._EQ_.call(null,inst_35796,inst_35793);
var state_35816__$1 = state_35816;
if(inst_35800){
var statearr_35829_35852 = state_35816__$1;
(statearr_35829_35852[(1)] = (8));

} else {
var statearr_35830_35853 = state_35816__$1;
(statearr_35830_35853[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35817 === (10))){
var inst_35808 = (state_35816[(2)]);
var state_35816__$1 = state_35816;
var statearr_35831_35854 = state_35816__$1;
(statearr_35831_35854[(2)] = inst_35808);

(statearr_35831_35854[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35817 === (8))){
var inst_35793 = (state_35816[(7)]);
var tmp35828 = inst_35793;
var inst_35793__$1 = tmp35828;
var state_35816__$1 = (function (){var statearr_35832 = state_35816;
(statearr_35832[(7)] = inst_35793__$1);

return statearr_35832;
})();
var statearr_35833_35855 = state_35816__$1;
(statearr_35833_35855[(2)] = null);

(statearr_35833_35855[(1)] = (2));


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
});})(c__33236__auto___35845,out))
;
return ((function (switch__33122__auto__,c__33236__auto___35845,out){
return (function() {
var cljs$core$async$state_machine__33123__auto__ = null;
var cljs$core$async$state_machine__33123__auto____0 = (function (){
var statearr_35837 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35837[(0)] = cljs$core$async$state_machine__33123__auto__);

(statearr_35837[(1)] = (1));

return statearr_35837;
});
var cljs$core$async$state_machine__33123__auto____1 = (function (state_35816){
while(true){
var ret_value__33124__auto__ = (function (){try{while(true){
var result__33125__auto__ = switch__33122__auto__.call(null,state_35816);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33125__auto__;
}
break;
}
}catch (e35838){if((e35838 instanceof Object)){
var ex__33126__auto__ = e35838;
var statearr_35839_35856 = state_35816;
(statearr_35839_35856[(5)] = ex__33126__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35816);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35838;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33124__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35857 = state_35816;
state_35816 = G__35857;
continue;
} else {
return ret_value__33124__auto__;
}
break;
}
});
cljs$core$async$state_machine__33123__auto__ = function(state_35816){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33123__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33123__auto____1.call(this,state_35816);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33123__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33123__auto____0;
cljs$core$async$state_machine__33123__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33123__auto____1;
return cljs$core$async$state_machine__33123__auto__;
})()
;})(switch__33122__auto__,c__33236__auto___35845,out))
})();
var state__33238__auto__ = (function (){var statearr_35840 = f__33237__auto__.call(null);
(statearr_35840[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33236__auto___35845);

return statearr_35840;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33238__auto__);
});})(c__33236__auto___35845,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args35858 = [];
var len__21280__auto___35928 = arguments.length;
var i__21281__auto___35929 = (0);
while(true){
if((i__21281__auto___35929 < len__21280__auto___35928)){
args35858.push((arguments[i__21281__auto___35929]));

var G__35930 = (i__21281__auto___35929 + (1));
i__21281__auto___35929 = G__35930;
continue;
} else {
}
break;
}

var G__35860 = args35858.length;
switch (G__35860) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35858.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33236__auto___35932 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33236__auto___35932,out){
return (function (){
var f__33237__auto__ = (function (){var switch__33122__auto__ = ((function (c__33236__auto___35932,out){
return (function (state_35898){
var state_val_35899 = (state_35898[(1)]);
if((state_val_35899 === (7))){
var inst_35894 = (state_35898[(2)]);
var state_35898__$1 = state_35898;
var statearr_35900_35933 = state_35898__$1;
(statearr_35900_35933[(2)] = inst_35894);

(statearr_35900_35933[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35899 === (1))){
var inst_35861 = (new Array(n));
var inst_35862 = inst_35861;
var inst_35863 = (0);
var state_35898__$1 = (function (){var statearr_35901 = state_35898;
(statearr_35901[(7)] = inst_35862);

(statearr_35901[(8)] = inst_35863);

return statearr_35901;
})();
var statearr_35902_35934 = state_35898__$1;
(statearr_35902_35934[(2)] = null);

(statearr_35902_35934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35899 === (4))){
var inst_35866 = (state_35898[(9)]);
var inst_35866__$1 = (state_35898[(2)]);
var inst_35867 = (inst_35866__$1 == null);
var inst_35868 = cljs.core.not.call(null,inst_35867);
var state_35898__$1 = (function (){var statearr_35903 = state_35898;
(statearr_35903[(9)] = inst_35866__$1);

return statearr_35903;
})();
if(inst_35868){
var statearr_35904_35935 = state_35898__$1;
(statearr_35904_35935[(1)] = (5));

} else {
var statearr_35905_35936 = state_35898__$1;
(statearr_35905_35936[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35899 === (15))){
var inst_35888 = (state_35898[(2)]);
var state_35898__$1 = state_35898;
var statearr_35906_35937 = state_35898__$1;
(statearr_35906_35937[(2)] = inst_35888);

(statearr_35906_35937[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35899 === (13))){
var state_35898__$1 = state_35898;
var statearr_35907_35938 = state_35898__$1;
(statearr_35907_35938[(2)] = null);

(statearr_35907_35938[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35899 === (6))){
var inst_35863 = (state_35898[(8)]);
var inst_35884 = (inst_35863 > (0));
var state_35898__$1 = state_35898;
if(cljs.core.truth_(inst_35884)){
var statearr_35908_35939 = state_35898__$1;
(statearr_35908_35939[(1)] = (12));

} else {
var statearr_35909_35940 = state_35898__$1;
(statearr_35909_35940[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35899 === (3))){
var inst_35896 = (state_35898[(2)]);
var state_35898__$1 = state_35898;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35898__$1,inst_35896);
} else {
if((state_val_35899 === (12))){
var inst_35862 = (state_35898[(7)]);
var inst_35886 = cljs.core.vec.call(null,inst_35862);
var state_35898__$1 = state_35898;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35898__$1,(15),out,inst_35886);
} else {
if((state_val_35899 === (2))){
var state_35898__$1 = state_35898;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35898__$1,(4),ch);
} else {
if((state_val_35899 === (11))){
var inst_35878 = (state_35898[(2)]);
var inst_35879 = (new Array(n));
var inst_35862 = inst_35879;
var inst_35863 = (0);
var state_35898__$1 = (function (){var statearr_35910 = state_35898;
(statearr_35910[(7)] = inst_35862);

(statearr_35910[(8)] = inst_35863);

(statearr_35910[(10)] = inst_35878);

return statearr_35910;
})();
var statearr_35911_35941 = state_35898__$1;
(statearr_35911_35941[(2)] = null);

(statearr_35911_35941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35899 === (9))){
var inst_35862 = (state_35898[(7)]);
var inst_35876 = cljs.core.vec.call(null,inst_35862);
var state_35898__$1 = state_35898;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35898__$1,(11),out,inst_35876);
} else {
if((state_val_35899 === (5))){
var inst_35862 = (state_35898[(7)]);
var inst_35863 = (state_35898[(8)]);
var inst_35866 = (state_35898[(9)]);
var inst_35871 = (state_35898[(11)]);
var inst_35870 = (inst_35862[inst_35863] = inst_35866);
var inst_35871__$1 = (inst_35863 + (1));
var inst_35872 = (inst_35871__$1 < n);
var state_35898__$1 = (function (){var statearr_35912 = state_35898;
(statearr_35912[(12)] = inst_35870);

(statearr_35912[(11)] = inst_35871__$1);

return statearr_35912;
})();
if(cljs.core.truth_(inst_35872)){
var statearr_35913_35942 = state_35898__$1;
(statearr_35913_35942[(1)] = (8));

} else {
var statearr_35914_35943 = state_35898__$1;
(statearr_35914_35943[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35899 === (14))){
var inst_35891 = (state_35898[(2)]);
var inst_35892 = cljs.core.async.close_BANG_.call(null,out);
var state_35898__$1 = (function (){var statearr_35916 = state_35898;
(statearr_35916[(13)] = inst_35891);

return statearr_35916;
})();
var statearr_35917_35944 = state_35898__$1;
(statearr_35917_35944[(2)] = inst_35892);

(statearr_35917_35944[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35899 === (10))){
var inst_35882 = (state_35898[(2)]);
var state_35898__$1 = state_35898;
var statearr_35918_35945 = state_35898__$1;
(statearr_35918_35945[(2)] = inst_35882);

(statearr_35918_35945[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35899 === (8))){
var inst_35862 = (state_35898[(7)]);
var inst_35871 = (state_35898[(11)]);
var tmp35915 = inst_35862;
var inst_35862__$1 = tmp35915;
var inst_35863 = inst_35871;
var state_35898__$1 = (function (){var statearr_35919 = state_35898;
(statearr_35919[(7)] = inst_35862__$1);

(statearr_35919[(8)] = inst_35863);

return statearr_35919;
})();
var statearr_35920_35946 = state_35898__$1;
(statearr_35920_35946[(2)] = null);

(statearr_35920_35946[(1)] = (2));


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
});})(c__33236__auto___35932,out))
;
return ((function (switch__33122__auto__,c__33236__auto___35932,out){
return (function() {
var cljs$core$async$state_machine__33123__auto__ = null;
var cljs$core$async$state_machine__33123__auto____0 = (function (){
var statearr_35924 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35924[(0)] = cljs$core$async$state_machine__33123__auto__);

(statearr_35924[(1)] = (1));

return statearr_35924;
});
var cljs$core$async$state_machine__33123__auto____1 = (function (state_35898){
while(true){
var ret_value__33124__auto__ = (function (){try{while(true){
var result__33125__auto__ = switch__33122__auto__.call(null,state_35898);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33125__auto__;
}
break;
}
}catch (e35925){if((e35925 instanceof Object)){
var ex__33126__auto__ = e35925;
var statearr_35926_35947 = state_35898;
(statearr_35926_35947[(5)] = ex__33126__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35898);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35925;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33124__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35948 = state_35898;
state_35898 = G__35948;
continue;
} else {
return ret_value__33124__auto__;
}
break;
}
});
cljs$core$async$state_machine__33123__auto__ = function(state_35898){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33123__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33123__auto____1.call(this,state_35898);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33123__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33123__auto____0;
cljs$core$async$state_machine__33123__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33123__auto____1;
return cljs$core$async$state_machine__33123__auto__;
})()
;})(switch__33122__auto__,c__33236__auto___35932,out))
})();
var state__33238__auto__ = (function (){var statearr_35927 = f__33237__auto__.call(null);
(statearr_35927[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33236__auto___35932);

return statearr_35927;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33238__auto__);
});})(c__33236__auto___35932,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args35949 = [];
var len__21280__auto___36023 = arguments.length;
var i__21281__auto___36024 = (0);
while(true){
if((i__21281__auto___36024 < len__21280__auto___36023)){
args35949.push((arguments[i__21281__auto___36024]));

var G__36025 = (i__21281__auto___36024 + (1));
i__21281__auto___36024 = G__36025;
continue;
} else {
}
break;
}

var G__35951 = args35949.length;
switch (G__35951) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35949.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33236__auto___36027 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33236__auto___36027,out){
return (function (){
var f__33237__auto__ = (function (){var switch__33122__auto__ = ((function (c__33236__auto___36027,out){
return (function (state_35993){
var state_val_35994 = (state_35993[(1)]);
if((state_val_35994 === (7))){
var inst_35989 = (state_35993[(2)]);
var state_35993__$1 = state_35993;
var statearr_35995_36028 = state_35993__$1;
(statearr_35995_36028[(2)] = inst_35989);

(statearr_35995_36028[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35994 === (1))){
var inst_35952 = [];
var inst_35953 = inst_35952;
var inst_35954 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_35993__$1 = (function (){var statearr_35996 = state_35993;
(statearr_35996[(7)] = inst_35954);

(statearr_35996[(8)] = inst_35953);

return statearr_35996;
})();
var statearr_35997_36029 = state_35993__$1;
(statearr_35997_36029[(2)] = null);

(statearr_35997_36029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35994 === (4))){
var inst_35957 = (state_35993[(9)]);
var inst_35957__$1 = (state_35993[(2)]);
var inst_35958 = (inst_35957__$1 == null);
var inst_35959 = cljs.core.not.call(null,inst_35958);
var state_35993__$1 = (function (){var statearr_35998 = state_35993;
(statearr_35998[(9)] = inst_35957__$1);

return statearr_35998;
})();
if(inst_35959){
var statearr_35999_36030 = state_35993__$1;
(statearr_35999_36030[(1)] = (5));

} else {
var statearr_36000_36031 = state_35993__$1;
(statearr_36000_36031[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35994 === (15))){
var inst_35983 = (state_35993[(2)]);
var state_35993__$1 = state_35993;
var statearr_36001_36032 = state_35993__$1;
(statearr_36001_36032[(2)] = inst_35983);

(statearr_36001_36032[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35994 === (13))){
var state_35993__$1 = state_35993;
var statearr_36002_36033 = state_35993__$1;
(statearr_36002_36033[(2)] = null);

(statearr_36002_36033[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35994 === (6))){
var inst_35953 = (state_35993[(8)]);
var inst_35978 = inst_35953.length;
var inst_35979 = (inst_35978 > (0));
var state_35993__$1 = state_35993;
if(cljs.core.truth_(inst_35979)){
var statearr_36003_36034 = state_35993__$1;
(statearr_36003_36034[(1)] = (12));

} else {
var statearr_36004_36035 = state_35993__$1;
(statearr_36004_36035[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35994 === (3))){
var inst_35991 = (state_35993[(2)]);
var state_35993__$1 = state_35993;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35993__$1,inst_35991);
} else {
if((state_val_35994 === (12))){
var inst_35953 = (state_35993[(8)]);
var inst_35981 = cljs.core.vec.call(null,inst_35953);
var state_35993__$1 = state_35993;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35993__$1,(15),out,inst_35981);
} else {
if((state_val_35994 === (2))){
var state_35993__$1 = state_35993;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35993__$1,(4),ch);
} else {
if((state_val_35994 === (11))){
var inst_35961 = (state_35993[(10)]);
var inst_35957 = (state_35993[(9)]);
var inst_35971 = (state_35993[(2)]);
var inst_35972 = [];
var inst_35973 = inst_35972.push(inst_35957);
var inst_35953 = inst_35972;
var inst_35954 = inst_35961;
var state_35993__$1 = (function (){var statearr_36005 = state_35993;
(statearr_36005[(11)] = inst_35973);

(statearr_36005[(7)] = inst_35954);

(statearr_36005[(12)] = inst_35971);

(statearr_36005[(8)] = inst_35953);

return statearr_36005;
})();
var statearr_36006_36036 = state_35993__$1;
(statearr_36006_36036[(2)] = null);

(statearr_36006_36036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35994 === (9))){
var inst_35953 = (state_35993[(8)]);
var inst_35969 = cljs.core.vec.call(null,inst_35953);
var state_35993__$1 = state_35993;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35993__$1,(11),out,inst_35969);
} else {
if((state_val_35994 === (5))){
var inst_35961 = (state_35993[(10)]);
var inst_35954 = (state_35993[(7)]);
var inst_35957 = (state_35993[(9)]);
var inst_35961__$1 = f.call(null,inst_35957);
var inst_35962 = cljs.core._EQ_.call(null,inst_35961__$1,inst_35954);
var inst_35963 = cljs.core.keyword_identical_QMARK_.call(null,inst_35954,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_35964 = (inst_35962) || (inst_35963);
var state_35993__$1 = (function (){var statearr_36007 = state_35993;
(statearr_36007[(10)] = inst_35961__$1);

return statearr_36007;
})();
if(cljs.core.truth_(inst_35964)){
var statearr_36008_36037 = state_35993__$1;
(statearr_36008_36037[(1)] = (8));

} else {
var statearr_36009_36038 = state_35993__$1;
(statearr_36009_36038[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35994 === (14))){
var inst_35986 = (state_35993[(2)]);
var inst_35987 = cljs.core.async.close_BANG_.call(null,out);
var state_35993__$1 = (function (){var statearr_36011 = state_35993;
(statearr_36011[(13)] = inst_35986);

return statearr_36011;
})();
var statearr_36012_36039 = state_35993__$1;
(statearr_36012_36039[(2)] = inst_35987);

(statearr_36012_36039[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35994 === (10))){
var inst_35976 = (state_35993[(2)]);
var state_35993__$1 = state_35993;
var statearr_36013_36040 = state_35993__$1;
(statearr_36013_36040[(2)] = inst_35976);

(statearr_36013_36040[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35994 === (8))){
var inst_35961 = (state_35993[(10)]);
var inst_35957 = (state_35993[(9)]);
var inst_35953 = (state_35993[(8)]);
var inst_35966 = inst_35953.push(inst_35957);
var tmp36010 = inst_35953;
var inst_35953__$1 = tmp36010;
var inst_35954 = inst_35961;
var state_35993__$1 = (function (){var statearr_36014 = state_35993;
(statearr_36014[(7)] = inst_35954);

(statearr_36014[(14)] = inst_35966);

(statearr_36014[(8)] = inst_35953__$1);

return statearr_36014;
})();
var statearr_36015_36041 = state_35993__$1;
(statearr_36015_36041[(2)] = null);

(statearr_36015_36041[(1)] = (2));


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
});})(c__33236__auto___36027,out))
;
return ((function (switch__33122__auto__,c__33236__auto___36027,out){
return (function() {
var cljs$core$async$state_machine__33123__auto__ = null;
var cljs$core$async$state_machine__33123__auto____0 = (function (){
var statearr_36019 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36019[(0)] = cljs$core$async$state_machine__33123__auto__);

(statearr_36019[(1)] = (1));

return statearr_36019;
});
var cljs$core$async$state_machine__33123__auto____1 = (function (state_35993){
while(true){
var ret_value__33124__auto__ = (function (){try{while(true){
var result__33125__auto__ = switch__33122__auto__.call(null,state_35993);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33125__auto__;
}
break;
}
}catch (e36020){if((e36020 instanceof Object)){
var ex__33126__auto__ = e36020;
var statearr_36021_36042 = state_35993;
(statearr_36021_36042[(5)] = ex__33126__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35993);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36020;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33124__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36043 = state_35993;
state_35993 = G__36043;
continue;
} else {
return ret_value__33124__auto__;
}
break;
}
});
cljs$core$async$state_machine__33123__auto__ = function(state_35993){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33123__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33123__auto____1.call(this,state_35993);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33123__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33123__auto____0;
cljs$core$async$state_machine__33123__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33123__auto____1;
return cljs$core$async$state_machine__33123__auto__;
})()
;})(switch__33122__auto__,c__33236__auto___36027,out))
})();
var state__33238__auto__ = (function (){var statearr_36022 = f__33237__auto__.call(null);
(statearr_36022[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33236__auto___36027);

return statearr_36022;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33238__auto__);
});})(c__33236__auto___36027,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map