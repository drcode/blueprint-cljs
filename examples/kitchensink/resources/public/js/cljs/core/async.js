// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args19062 = [];
var len__17922__auto___19068 = arguments.length;
var i__17923__auto___19069 = (0);
while(true){
if((i__17923__auto___19069 < len__17922__auto___19068)){
args19062.push((arguments[i__17923__auto___19069]));

var G__19070 = (i__17923__auto___19069 + (1));
i__17923__auto___19069 = G__19070;
continue;
} else {
}
break;
}

var G__19064 = args19062.length;
switch (G__19064) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19062.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async19065 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19065 = (function (f,blockable,meta19066){
this.f = f;
this.blockable = blockable;
this.meta19066 = meta19066;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19065.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19067,meta19066__$1){
var self__ = this;
var _19067__$1 = this;
return (new cljs.core.async.t_cljs$core$async19065(self__.f,self__.blockable,meta19066__$1));
});

cljs.core.async.t_cljs$core$async19065.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19067){
var self__ = this;
var _19067__$1 = this;
return self__.meta19066;
});

cljs.core.async.t_cljs$core$async19065.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async19065.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async19065.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async19065.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async19065.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta19066","meta19066",1673473908,null)], null);
});

cljs.core.async.t_cljs$core$async19065.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19065.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19065";

cljs.core.async.t_cljs$core$async19065.cljs$lang$ctorPrWriter = (function (this__17462__auto__,writer__17463__auto__,opt__17464__auto__){
return cljs.core._write.call(null,writer__17463__auto__,"cljs.core.async/t_cljs$core$async19065");
});

cljs.core.async.__GT_t_cljs$core$async19065 = (function cljs$core$async$__GT_t_cljs$core$async19065(f__$1,blockable__$1,meta19066){
return (new cljs.core.async.t_cljs$core$async19065(f__$1,blockable__$1,meta19066));
});

}

return (new cljs.core.async.t_cljs$core$async19065(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args19074 = [];
var len__17922__auto___19077 = arguments.length;
var i__17923__auto___19078 = (0);
while(true){
if((i__17923__auto___19078 < len__17922__auto___19077)){
args19074.push((arguments[i__17923__auto___19078]));

var G__19079 = (i__17923__auto___19078 + (1));
i__17923__auto___19078 = G__19079;
continue;
} else {
}
break;
}

var G__19076 = args19074.length;
switch (G__19076) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19074.length)].join('')));

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
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
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
var args19081 = [];
var len__17922__auto___19084 = arguments.length;
var i__17923__auto___19085 = (0);
while(true){
if((i__17923__auto___19085 < len__17922__auto___19084)){
args19081.push((arguments[i__17923__auto___19085]));

var G__19086 = (i__17923__auto___19085 + (1));
i__17923__auto___19085 = G__19086;
continue;
} else {
}
break;
}

var G__19083 = args19081.length;
switch (G__19083) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19081.length)].join('')));

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
var args19088 = [];
var len__17922__auto___19091 = arguments.length;
var i__17923__auto___19092 = (0);
while(true){
if((i__17923__auto___19092 < len__17922__auto___19091)){
args19088.push((arguments[i__17923__auto___19092]));

var G__19093 = (i__17923__auto___19092 + (1));
i__17923__auto___19092 = G__19093;
continue;
} else {
}
break;
}

var G__19090 = args19088.length;
switch (G__19090) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19088.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_19095 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_19095);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_19095,ret){
return (function (){
return fn1.call(null,val_19095);
});})(val_19095,ret))
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
var args19096 = [];
var len__17922__auto___19099 = arguments.length;
var i__17923__auto___19100 = (0);
while(true){
if((i__17923__auto___19100 < len__17922__auto___19099)){
args19096.push((arguments[i__17923__auto___19100]));

var G__19101 = (i__17923__auto___19100 + (1));
i__17923__auto___19100 = G__19101;
continue;
} else {
}
break;
}

var G__19098 = args19096.length;
switch (G__19098) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19096.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
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
var n__17767__auto___19103 = n;
var x_19104 = (0);
while(true){
if((x_19104 < n__17767__auto___19103)){
(a[x_19104] = (0));

var G__19105 = (x_19104 + (1));
x_19104 = G__19105;
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

var G__19106 = (i + (1));
i = G__19106;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async19110 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19110 = (function (alt_flag,flag,meta19111){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta19111 = meta19111;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19110.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_19112,meta19111__$1){
var self__ = this;
var _19112__$1 = this;
return (new cljs.core.async.t_cljs$core$async19110(self__.alt_flag,self__.flag,meta19111__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async19110.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_19112){
var self__ = this;
var _19112__$1 = this;
return self__.meta19111;
});})(flag))
;

cljs.core.async.t_cljs$core$async19110.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async19110.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async19110.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async19110.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async19110.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta19111","meta19111",-1845304454,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async19110.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19110.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19110";

cljs.core.async.t_cljs$core$async19110.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17462__auto__,writer__17463__auto__,opt__17464__auto__){
return cljs.core._write.call(null,writer__17463__auto__,"cljs.core.async/t_cljs$core$async19110");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async19110 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async19110(alt_flag__$1,flag__$1,meta19111){
return (new cljs.core.async.t_cljs$core$async19110(alt_flag__$1,flag__$1,meta19111));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async19110(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async19116 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19116 = (function (alt_handler,flag,cb,meta19117){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta19117 = meta19117;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19116.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19118,meta19117__$1){
var self__ = this;
var _19118__$1 = this;
return (new cljs.core.async.t_cljs$core$async19116(self__.alt_handler,self__.flag,self__.cb,meta19117__$1));
});

cljs.core.async.t_cljs$core$async19116.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19118){
var self__ = this;
var _19118__$1 = this;
return self__.meta19117;
});

cljs.core.async.t_cljs$core$async19116.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async19116.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async19116.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async19116.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async19116.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta19117","meta19117",-1279397715,null)], null);
});

cljs.core.async.t_cljs$core$async19116.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19116.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19116";

cljs.core.async.t_cljs$core$async19116.cljs$lang$ctorPrWriter = (function (this__17462__auto__,writer__17463__auto__,opt__17464__auto__){
return cljs.core._write.call(null,writer__17463__auto__,"cljs.core.async/t_cljs$core$async19116");
});

cljs.core.async.__GT_t_cljs$core$async19116 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async19116(alt_handler__$1,flag__$1,cb__$1,meta19117){
return (new cljs.core.async.t_cljs$core$async19116(alt_handler__$1,flag__$1,cb__$1,meta19117));
});

}

return (new cljs.core.async.t_cljs$core$async19116(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__19119_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19119_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__19120_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19120_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16864__auto__ = wport;
if(cljs.core.truth_(or__16864__auto__)){
return or__16864__auto__;
} else {
return port;
}
})()], null));
} else {
var G__19121 = (i + (1));
i = G__19121;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16864__auto__ = ret;
if(cljs.core.truth_(or__16864__auto__)){
return or__16864__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__16852__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16852__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16852__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
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
var args__17929__auto__ = [];
var len__17922__auto___19127 = arguments.length;
var i__17923__auto___19128 = (0);
while(true){
if((i__17923__auto___19128 < len__17922__auto___19127)){
args__17929__auto__.push((arguments[i__17923__auto___19128]));

var G__19129 = (i__17923__auto___19128 + (1));
i__17923__auto___19128 = G__19129;
continue;
} else {
}
break;
}

var argseq__17930__auto__ = ((((1) < args__17929__auto__.length))?(new cljs.core.IndexedSeq(args__17929__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17930__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__19124){
var map__19125 = p__19124;
var map__19125__$1 = ((((!((map__19125 == null)))?((((map__19125.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19125.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19125):map__19125);
var opts = map__19125__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq19122){
var G__19123 = cljs.core.first.call(null,seq19122);
var seq19122__$1 = cljs.core.next.call(null,seq19122);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19123,seq19122__$1);
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
var args19130 = [];
var len__17922__auto___19180 = arguments.length;
var i__17923__auto___19181 = (0);
while(true){
if((i__17923__auto___19181 < len__17922__auto___19180)){
args19130.push((arguments[i__17923__auto___19181]));

var G__19182 = (i__17923__auto___19181 + (1));
i__17923__auto___19181 = G__19182;
continue;
} else {
}
break;
}

var G__19132 = args19130.length;
switch (G__19132) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19130.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__19017__auto___19184 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19017__auto___19184){
return (function (){
var f__19018__auto__ = (function (){var switch__18905__auto__ = ((function (c__19017__auto___19184){
return (function (state_19156){
var state_val_19157 = (state_19156[(1)]);
if((state_val_19157 === (7))){
var inst_19152 = (state_19156[(2)]);
var state_19156__$1 = state_19156;
var statearr_19158_19185 = state_19156__$1;
(statearr_19158_19185[(2)] = inst_19152);

(statearr_19158_19185[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19157 === (1))){
var state_19156__$1 = state_19156;
var statearr_19159_19186 = state_19156__$1;
(statearr_19159_19186[(2)] = null);

(statearr_19159_19186[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19157 === (4))){
var inst_19135 = (state_19156[(7)]);
var inst_19135__$1 = (state_19156[(2)]);
var inst_19136 = (inst_19135__$1 == null);
var state_19156__$1 = (function (){var statearr_19160 = state_19156;
(statearr_19160[(7)] = inst_19135__$1);

return statearr_19160;
})();
if(cljs.core.truth_(inst_19136)){
var statearr_19161_19187 = state_19156__$1;
(statearr_19161_19187[(1)] = (5));

} else {
var statearr_19162_19188 = state_19156__$1;
(statearr_19162_19188[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19157 === (13))){
var state_19156__$1 = state_19156;
var statearr_19163_19189 = state_19156__$1;
(statearr_19163_19189[(2)] = null);

(statearr_19163_19189[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19157 === (6))){
var inst_19135 = (state_19156[(7)]);
var state_19156__$1 = state_19156;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19156__$1,(11),to,inst_19135);
} else {
if((state_val_19157 === (3))){
var inst_19154 = (state_19156[(2)]);
var state_19156__$1 = state_19156;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19156__$1,inst_19154);
} else {
if((state_val_19157 === (12))){
var state_19156__$1 = state_19156;
var statearr_19164_19190 = state_19156__$1;
(statearr_19164_19190[(2)] = null);

(statearr_19164_19190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19157 === (2))){
var state_19156__$1 = state_19156;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19156__$1,(4),from);
} else {
if((state_val_19157 === (11))){
var inst_19145 = (state_19156[(2)]);
var state_19156__$1 = state_19156;
if(cljs.core.truth_(inst_19145)){
var statearr_19165_19191 = state_19156__$1;
(statearr_19165_19191[(1)] = (12));

} else {
var statearr_19166_19192 = state_19156__$1;
(statearr_19166_19192[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19157 === (9))){
var state_19156__$1 = state_19156;
var statearr_19167_19193 = state_19156__$1;
(statearr_19167_19193[(2)] = null);

(statearr_19167_19193[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19157 === (5))){
var state_19156__$1 = state_19156;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19168_19194 = state_19156__$1;
(statearr_19168_19194[(1)] = (8));

} else {
var statearr_19169_19195 = state_19156__$1;
(statearr_19169_19195[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19157 === (14))){
var inst_19150 = (state_19156[(2)]);
var state_19156__$1 = state_19156;
var statearr_19170_19196 = state_19156__$1;
(statearr_19170_19196[(2)] = inst_19150);

(statearr_19170_19196[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19157 === (10))){
var inst_19142 = (state_19156[(2)]);
var state_19156__$1 = state_19156;
var statearr_19171_19197 = state_19156__$1;
(statearr_19171_19197[(2)] = inst_19142);

(statearr_19171_19197[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19157 === (8))){
var inst_19139 = cljs.core.async.close_BANG_.call(null,to);
var state_19156__$1 = state_19156;
var statearr_19172_19198 = state_19156__$1;
(statearr_19172_19198[(2)] = inst_19139);

(statearr_19172_19198[(1)] = (10));


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
});})(c__19017__auto___19184))
;
return ((function (switch__18905__auto__,c__19017__auto___19184){
return (function() {
var cljs$core$async$state_machine__18906__auto__ = null;
var cljs$core$async$state_machine__18906__auto____0 = (function (){
var statearr_19176 = [null,null,null,null,null,null,null,null];
(statearr_19176[(0)] = cljs$core$async$state_machine__18906__auto__);

(statearr_19176[(1)] = (1));

return statearr_19176;
});
var cljs$core$async$state_machine__18906__auto____1 = (function (state_19156){
while(true){
var ret_value__18907__auto__ = (function (){try{while(true){
var result__18908__auto__ = switch__18905__auto__.call(null,state_19156);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18908__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18908__auto__;
}
break;
}
}catch (e19177){if((e19177 instanceof Object)){
var ex__18909__auto__ = e19177;
var statearr_19178_19199 = state_19156;
(statearr_19178_19199[(5)] = ex__18909__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19156);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19177;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18907__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19200 = state_19156;
state_19156 = G__19200;
continue;
} else {
return ret_value__18907__auto__;
}
break;
}
});
cljs$core$async$state_machine__18906__auto__ = function(state_19156){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18906__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18906__auto____1.call(this,state_19156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18906__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18906__auto____0;
cljs$core$async$state_machine__18906__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18906__auto____1;
return cljs$core$async$state_machine__18906__auto__;
})()
;})(switch__18905__auto__,c__19017__auto___19184))
})();
var state__19019__auto__ = (function (){var statearr_19179 = f__19018__auto__.call(null);
(statearr_19179[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19017__auto___19184);

return statearr_19179;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19019__auto__);
});})(c__19017__auto___19184))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__19384){
var vec__19385 = p__19384;
var v = cljs.core.nth.call(null,vec__19385,(0),null);
var p = cljs.core.nth.call(null,vec__19385,(1),null);
var job = vec__19385;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19017__auto___19567 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19017__auto___19567,res,vec__19385,v,p,job,jobs,results){
return (function (){
var f__19018__auto__ = (function (){var switch__18905__auto__ = ((function (c__19017__auto___19567,res,vec__19385,v,p,job,jobs,results){
return (function (state_19390){
var state_val_19391 = (state_19390[(1)]);
if((state_val_19391 === (1))){
var state_19390__$1 = state_19390;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19390__$1,(2),res,v);
} else {
if((state_val_19391 === (2))){
var inst_19387 = (state_19390[(2)]);
var inst_19388 = cljs.core.async.close_BANG_.call(null,res);
var state_19390__$1 = (function (){var statearr_19392 = state_19390;
(statearr_19392[(7)] = inst_19387);

return statearr_19392;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19390__$1,inst_19388);
} else {
return null;
}
}
});})(c__19017__auto___19567,res,vec__19385,v,p,job,jobs,results))
;
return ((function (switch__18905__auto__,c__19017__auto___19567,res,vec__19385,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18906__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18906__auto____0 = (function (){
var statearr_19396 = [null,null,null,null,null,null,null,null];
(statearr_19396[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18906__auto__);

(statearr_19396[(1)] = (1));

return statearr_19396;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18906__auto____1 = (function (state_19390){
while(true){
var ret_value__18907__auto__ = (function (){try{while(true){
var result__18908__auto__ = switch__18905__auto__.call(null,state_19390);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18908__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18908__auto__;
}
break;
}
}catch (e19397){if((e19397 instanceof Object)){
var ex__18909__auto__ = e19397;
var statearr_19398_19568 = state_19390;
(statearr_19398_19568[(5)] = ex__18909__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19390);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19397;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18907__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19569 = state_19390;
state_19390 = G__19569;
continue;
} else {
return ret_value__18907__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18906__auto__ = function(state_19390){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18906__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18906__auto____1.call(this,state_19390);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18906__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18906__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18906__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18906__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18906__auto__;
})()
;})(switch__18905__auto__,c__19017__auto___19567,res,vec__19385,v,p,job,jobs,results))
})();
var state__19019__auto__ = (function (){var statearr_19399 = f__19018__auto__.call(null);
(statearr_19399[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19017__auto___19567);

return statearr_19399;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19019__auto__);
});})(c__19017__auto___19567,res,vec__19385,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__19400){
var vec__19401 = p__19400;
var v = cljs.core.nth.call(null,vec__19401,(0),null);
var p = cljs.core.nth.call(null,vec__19401,(1),null);
var job = vec__19401;
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
var n__17767__auto___19570 = n;
var __19571 = (0);
while(true){
if((__19571 < n__17767__auto___19570)){
var G__19402_19572 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__19402_19572) {
case "compute":
var c__19017__auto___19574 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__19571,c__19017__auto___19574,G__19402_19572,n__17767__auto___19570,jobs,results,process,async){
return (function (){
var f__19018__auto__ = (function (){var switch__18905__auto__ = ((function (__19571,c__19017__auto___19574,G__19402_19572,n__17767__auto___19570,jobs,results,process,async){
return (function (state_19415){
var state_val_19416 = (state_19415[(1)]);
if((state_val_19416 === (1))){
var state_19415__$1 = state_19415;
var statearr_19417_19575 = state_19415__$1;
(statearr_19417_19575[(2)] = null);

(statearr_19417_19575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19416 === (2))){
var state_19415__$1 = state_19415;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19415__$1,(4),jobs);
} else {
if((state_val_19416 === (3))){
var inst_19413 = (state_19415[(2)]);
var state_19415__$1 = state_19415;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19415__$1,inst_19413);
} else {
if((state_val_19416 === (4))){
var inst_19405 = (state_19415[(2)]);
var inst_19406 = process.call(null,inst_19405);
var state_19415__$1 = state_19415;
if(cljs.core.truth_(inst_19406)){
var statearr_19418_19576 = state_19415__$1;
(statearr_19418_19576[(1)] = (5));

} else {
var statearr_19419_19577 = state_19415__$1;
(statearr_19419_19577[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19416 === (5))){
var state_19415__$1 = state_19415;
var statearr_19420_19578 = state_19415__$1;
(statearr_19420_19578[(2)] = null);

(statearr_19420_19578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19416 === (6))){
var state_19415__$1 = state_19415;
var statearr_19421_19579 = state_19415__$1;
(statearr_19421_19579[(2)] = null);

(statearr_19421_19579[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19416 === (7))){
var inst_19411 = (state_19415[(2)]);
var state_19415__$1 = state_19415;
var statearr_19422_19580 = state_19415__$1;
(statearr_19422_19580[(2)] = inst_19411);

(statearr_19422_19580[(1)] = (3));


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
});})(__19571,c__19017__auto___19574,G__19402_19572,n__17767__auto___19570,jobs,results,process,async))
;
return ((function (__19571,switch__18905__auto__,c__19017__auto___19574,G__19402_19572,n__17767__auto___19570,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18906__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18906__auto____0 = (function (){
var statearr_19426 = [null,null,null,null,null,null,null];
(statearr_19426[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18906__auto__);

(statearr_19426[(1)] = (1));

return statearr_19426;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18906__auto____1 = (function (state_19415){
while(true){
var ret_value__18907__auto__ = (function (){try{while(true){
var result__18908__auto__ = switch__18905__auto__.call(null,state_19415);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18908__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18908__auto__;
}
break;
}
}catch (e19427){if((e19427 instanceof Object)){
var ex__18909__auto__ = e19427;
var statearr_19428_19581 = state_19415;
(statearr_19428_19581[(5)] = ex__18909__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19415);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19427;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18907__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19582 = state_19415;
state_19415 = G__19582;
continue;
} else {
return ret_value__18907__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18906__auto__ = function(state_19415){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18906__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18906__auto____1.call(this,state_19415);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18906__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18906__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18906__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18906__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18906__auto__;
})()
;})(__19571,switch__18905__auto__,c__19017__auto___19574,G__19402_19572,n__17767__auto___19570,jobs,results,process,async))
})();
var state__19019__auto__ = (function (){var statearr_19429 = f__19018__auto__.call(null);
(statearr_19429[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19017__auto___19574);

return statearr_19429;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19019__auto__);
});})(__19571,c__19017__auto___19574,G__19402_19572,n__17767__auto___19570,jobs,results,process,async))
);


break;
case "async":
var c__19017__auto___19583 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__19571,c__19017__auto___19583,G__19402_19572,n__17767__auto___19570,jobs,results,process,async){
return (function (){
var f__19018__auto__ = (function (){var switch__18905__auto__ = ((function (__19571,c__19017__auto___19583,G__19402_19572,n__17767__auto___19570,jobs,results,process,async){
return (function (state_19442){
var state_val_19443 = (state_19442[(1)]);
if((state_val_19443 === (1))){
var state_19442__$1 = state_19442;
var statearr_19444_19584 = state_19442__$1;
(statearr_19444_19584[(2)] = null);

(statearr_19444_19584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19443 === (2))){
var state_19442__$1 = state_19442;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19442__$1,(4),jobs);
} else {
if((state_val_19443 === (3))){
var inst_19440 = (state_19442[(2)]);
var state_19442__$1 = state_19442;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19442__$1,inst_19440);
} else {
if((state_val_19443 === (4))){
var inst_19432 = (state_19442[(2)]);
var inst_19433 = async.call(null,inst_19432);
var state_19442__$1 = state_19442;
if(cljs.core.truth_(inst_19433)){
var statearr_19445_19585 = state_19442__$1;
(statearr_19445_19585[(1)] = (5));

} else {
var statearr_19446_19586 = state_19442__$1;
(statearr_19446_19586[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19443 === (5))){
var state_19442__$1 = state_19442;
var statearr_19447_19587 = state_19442__$1;
(statearr_19447_19587[(2)] = null);

(statearr_19447_19587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19443 === (6))){
var state_19442__$1 = state_19442;
var statearr_19448_19588 = state_19442__$1;
(statearr_19448_19588[(2)] = null);

(statearr_19448_19588[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19443 === (7))){
var inst_19438 = (state_19442[(2)]);
var state_19442__$1 = state_19442;
var statearr_19449_19589 = state_19442__$1;
(statearr_19449_19589[(2)] = inst_19438);

(statearr_19449_19589[(1)] = (3));


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
});})(__19571,c__19017__auto___19583,G__19402_19572,n__17767__auto___19570,jobs,results,process,async))
;
return ((function (__19571,switch__18905__auto__,c__19017__auto___19583,G__19402_19572,n__17767__auto___19570,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18906__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18906__auto____0 = (function (){
var statearr_19453 = [null,null,null,null,null,null,null];
(statearr_19453[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18906__auto__);

(statearr_19453[(1)] = (1));

return statearr_19453;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18906__auto____1 = (function (state_19442){
while(true){
var ret_value__18907__auto__ = (function (){try{while(true){
var result__18908__auto__ = switch__18905__auto__.call(null,state_19442);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18908__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18908__auto__;
}
break;
}
}catch (e19454){if((e19454 instanceof Object)){
var ex__18909__auto__ = e19454;
var statearr_19455_19590 = state_19442;
(statearr_19455_19590[(5)] = ex__18909__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19442);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19454;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18907__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19591 = state_19442;
state_19442 = G__19591;
continue;
} else {
return ret_value__18907__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18906__auto__ = function(state_19442){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18906__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18906__auto____1.call(this,state_19442);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18906__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18906__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18906__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18906__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18906__auto__;
})()
;})(__19571,switch__18905__auto__,c__19017__auto___19583,G__19402_19572,n__17767__auto___19570,jobs,results,process,async))
})();
var state__19019__auto__ = (function (){var statearr_19456 = f__19018__auto__.call(null);
(statearr_19456[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19017__auto___19583);

return statearr_19456;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19019__auto__);
});})(__19571,c__19017__auto___19583,G__19402_19572,n__17767__auto___19570,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__19592 = (__19571 + (1));
__19571 = G__19592;
continue;
} else {
}
break;
}

var c__19017__auto___19593 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19017__auto___19593,jobs,results,process,async){
return (function (){
var f__19018__auto__ = (function (){var switch__18905__auto__ = ((function (c__19017__auto___19593,jobs,results,process,async){
return (function (state_19478){
var state_val_19479 = (state_19478[(1)]);
if((state_val_19479 === (1))){
var state_19478__$1 = state_19478;
var statearr_19480_19594 = state_19478__$1;
(statearr_19480_19594[(2)] = null);

(statearr_19480_19594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19479 === (2))){
var state_19478__$1 = state_19478;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19478__$1,(4),from);
} else {
if((state_val_19479 === (3))){
var inst_19476 = (state_19478[(2)]);
var state_19478__$1 = state_19478;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19478__$1,inst_19476);
} else {
if((state_val_19479 === (4))){
var inst_19459 = (state_19478[(7)]);
var inst_19459__$1 = (state_19478[(2)]);
var inst_19460 = (inst_19459__$1 == null);
var state_19478__$1 = (function (){var statearr_19481 = state_19478;
(statearr_19481[(7)] = inst_19459__$1);

return statearr_19481;
})();
if(cljs.core.truth_(inst_19460)){
var statearr_19482_19595 = state_19478__$1;
(statearr_19482_19595[(1)] = (5));

} else {
var statearr_19483_19596 = state_19478__$1;
(statearr_19483_19596[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19479 === (5))){
var inst_19462 = cljs.core.async.close_BANG_.call(null,jobs);
var state_19478__$1 = state_19478;
var statearr_19484_19597 = state_19478__$1;
(statearr_19484_19597[(2)] = inst_19462);

(statearr_19484_19597[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19479 === (6))){
var inst_19459 = (state_19478[(7)]);
var inst_19464 = (state_19478[(8)]);
var inst_19464__$1 = cljs.core.async.chan.call(null,(1));
var inst_19465 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19466 = [inst_19459,inst_19464__$1];
var inst_19467 = (new cljs.core.PersistentVector(null,2,(5),inst_19465,inst_19466,null));
var state_19478__$1 = (function (){var statearr_19485 = state_19478;
(statearr_19485[(8)] = inst_19464__$1);

return statearr_19485;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19478__$1,(8),jobs,inst_19467);
} else {
if((state_val_19479 === (7))){
var inst_19474 = (state_19478[(2)]);
var state_19478__$1 = state_19478;
var statearr_19486_19598 = state_19478__$1;
(statearr_19486_19598[(2)] = inst_19474);

(statearr_19486_19598[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19479 === (8))){
var inst_19464 = (state_19478[(8)]);
var inst_19469 = (state_19478[(2)]);
var state_19478__$1 = (function (){var statearr_19487 = state_19478;
(statearr_19487[(9)] = inst_19469);

return statearr_19487;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19478__$1,(9),results,inst_19464);
} else {
if((state_val_19479 === (9))){
var inst_19471 = (state_19478[(2)]);
var state_19478__$1 = (function (){var statearr_19488 = state_19478;
(statearr_19488[(10)] = inst_19471);

return statearr_19488;
})();
var statearr_19489_19599 = state_19478__$1;
(statearr_19489_19599[(2)] = null);

(statearr_19489_19599[(1)] = (2));


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
});})(c__19017__auto___19593,jobs,results,process,async))
;
return ((function (switch__18905__auto__,c__19017__auto___19593,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18906__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18906__auto____0 = (function (){
var statearr_19493 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19493[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18906__auto__);

(statearr_19493[(1)] = (1));

return statearr_19493;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18906__auto____1 = (function (state_19478){
while(true){
var ret_value__18907__auto__ = (function (){try{while(true){
var result__18908__auto__ = switch__18905__auto__.call(null,state_19478);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18908__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18908__auto__;
}
break;
}
}catch (e19494){if((e19494 instanceof Object)){
var ex__18909__auto__ = e19494;
var statearr_19495_19600 = state_19478;
(statearr_19495_19600[(5)] = ex__18909__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19478);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19494;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18907__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19601 = state_19478;
state_19478 = G__19601;
continue;
} else {
return ret_value__18907__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18906__auto__ = function(state_19478){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18906__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18906__auto____1.call(this,state_19478);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18906__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18906__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18906__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18906__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18906__auto__;
})()
;})(switch__18905__auto__,c__19017__auto___19593,jobs,results,process,async))
})();
var state__19019__auto__ = (function (){var statearr_19496 = f__19018__auto__.call(null);
(statearr_19496[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19017__auto___19593);

return statearr_19496;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19019__auto__);
});})(c__19017__auto___19593,jobs,results,process,async))
);


var c__19017__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19017__auto__,jobs,results,process,async){
return (function (){
var f__19018__auto__ = (function (){var switch__18905__auto__ = ((function (c__19017__auto__,jobs,results,process,async){
return (function (state_19534){
var state_val_19535 = (state_19534[(1)]);
if((state_val_19535 === (7))){
var inst_19530 = (state_19534[(2)]);
var state_19534__$1 = state_19534;
var statearr_19536_19602 = state_19534__$1;
(statearr_19536_19602[(2)] = inst_19530);

(statearr_19536_19602[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19535 === (20))){
var state_19534__$1 = state_19534;
var statearr_19537_19603 = state_19534__$1;
(statearr_19537_19603[(2)] = null);

(statearr_19537_19603[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19535 === (1))){
var state_19534__$1 = state_19534;
var statearr_19538_19604 = state_19534__$1;
(statearr_19538_19604[(2)] = null);

(statearr_19538_19604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19535 === (4))){
var inst_19499 = (state_19534[(7)]);
var inst_19499__$1 = (state_19534[(2)]);
var inst_19500 = (inst_19499__$1 == null);
var state_19534__$1 = (function (){var statearr_19539 = state_19534;
(statearr_19539[(7)] = inst_19499__$1);

return statearr_19539;
})();
if(cljs.core.truth_(inst_19500)){
var statearr_19540_19605 = state_19534__$1;
(statearr_19540_19605[(1)] = (5));

} else {
var statearr_19541_19606 = state_19534__$1;
(statearr_19541_19606[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19535 === (15))){
var inst_19512 = (state_19534[(8)]);
var state_19534__$1 = state_19534;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19534__$1,(18),to,inst_19512);
} else {
if((state_val_19535 === (21))){
var inst_19525 = (state_19534[(2)]);
var state_19534__$1 = state_19534;
var statearr_19542_19607 = state_19534__$1;
(statearr_19542_19607[(2)] = inst_19525);

(statearr_19542_19607[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19535 === (13))){
var inst_19527 = (state_19534[(2)]);
var state_19534__$1 = (function (){var statearr_19543 = state_19534;
(statearr_19543[(9)] = inst_19527);

return statearr_19543;
})();
var statearr_19544_19608 = state_19534__$1;
(statearr_19544_19608[(2)] = null);

(statearr_19544_19608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19535 === (6))){
var inst_19499 = (state_19534[(7)]);
var state_19534__$1 = state_19534;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19534__$1,(11),inst_19499);
} else {
if((state_val_19535 === (17))){
var inst_19520 = (state_19534[(2)]);
var state_19534__$1 = state_19534;
if(cljs.core.truth_(inst_19520)){
var statearr_19545_19609 = state_19534__$1;
(statearr_19545_19609[(1)] = (19));

} else {
var statearr_19546_19610 = state_19534__$1;
(statearr_19546_19610[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19535 === (3))){
var inst_19532 = (state_19534[(2)]);
var state_19534__$1 = state_19534;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19534__$1,inst_19532);
} else {
if((state_val_19535 === (12))){
var inst_19509 = (state_19534[(10)]);
var state_19534__$1 = state_19534;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19534__$1,(14),inst_19509);
} else {
if((state_val_19535 === (2))){
var state_19534__$1 = state_19534;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19534__$1,(4),results);
} else {
if((state_val_19535 === (19))){
var state_19534__$1 = state_19534;
var statearr_19547_19611 = state_19534__$1;
(statearr_19547_19611[(2)] = null);

(statearr_19547_19611[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19535 === (11))){
var inst_19509 = (state_19534[(2)]);
var state_19534__$1 = (function (){var statearr_19548 = state_19534;
(statearr_19548[(10)] = inst_19509);

return statearr_19548;
})();
var statearr_19549_19612 = state_19534__$1;
(statearr_19549_19612[(2)] = null);

(statearr_19549_19612[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19535 === (9))){
var state_19534__$1 = state_19534;
var statearr_19550_19613 = state_19534__$1;
(statearr_19550_19613[(2)] = null);

(statearr_19550_19613[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19535 === (5))){
var state_19534__$1 = state_19534;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19551_19614 = state_19534__$1;
(statearr_19551_19614[(1)] = (8));

} else {
var statearr_19552_19615 = state_19534__$1;
(statearr_19552_19615[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19535 === (14))){
var inst_19512 = (state_19534[(8)]);
var inst_19514 = (state_19534[(11)]);
var inst_19512__$1 = (state_19534[(2)]);
var inst_19513 = (inst_19512__$1 == null);
var inst_19514__$1 = cljs.core.not.call(null,inst_19513);
var state_19534__$1 = (function (){var statearr_19553 = state_19534;
(statearr_19553[(8)] = inst_19512__$1);

(statearr_19553[(11)] = inst_19514__$1);

return statearr_19553;
})();
if(inst_19514__$1){
var statearr_19554_19616 = state_19534__$1;
(statearr_19554_19616[(1)] = (15));

} else {
var statearr_19555_19617 = state_19534__$1;
(statearr_19555_19617[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19535 === (16))){
var inst_19514 = (state_19534[(11)]);
var state_19534__$1 = state_19534;
var statearr_19556_19618 = state_19534__$1;
(statearr_19556_19618[(2)] = inst_19514);

(statearr_19556_19618[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19535 === (10))){
var inst_19506 = (state_19534[(2)]);
var state_19534__$1 = state_19534;
var statearr_19557_19619 = state_19534__$1;
(statearr_19557_19619[(2)] = inst_19506);

(statearr_19557_19619[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19535 === (18))){
var inst_19517 = (state_19534[(2)]);
var state_19534__$1 = state_19534;
var statearr_19558_19620 = state_19534__$1;
(statearr_19558_19620[(2)] = inst_19517);

(statearr_19558_19620[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19535 === (8))){
var inst_19503 = cljs.core.async.close_BANG_.call(null,to);
var state_19534__$1 = state_19534;
var statearr_19559_19621 = state_19534__$1;
(statearr_19559_19621[(2)] = inst_19503);

(statearr_19559_19621[(1)] = (10));


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
});})(c__19017__auto__,jobs,results,process,async))
;
return ((function (switch__18905__auto__,c__19017__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18906__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18906__auto____0 = (function (){
var statearr_19563 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19563[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18906__auto__);

(statearr_19563[(1)] = (1));

return statearr_19563;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18906__auto____1 = (function (state_19534){
while(true){
var ret_value__18907__auto__ = (function (){try{while(true){
var result__18908__auto__ = switch__18905__auto__.call(null,state_19534);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18908__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18908__auto__;
}
break;
}
}catch (e19564){if((e19564 instanceof Object)){
var ex__18909__auto__ = e19564;
var statearr_19565_19622 = state_19534;
(statearr_19565_19622[(5)] = ex__18909__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19534);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19564;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18907__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19623 = state_19534;
state_19534 = G__19623;
continue;
} else {
return ret_value__18907__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18906__auto__ = function(state_19534){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18906__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18906__auto____1.call(this,state_19534);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18906__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18906__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18906__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18906__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18906__auto__;
})()
;})(switch__18905__auto__,c__19017__auto__,jobs,results,process,async))
})();
var state__19019__auto__ = (function (){var statearr_19566 = f__19018__auto__.call(null);
(statearr_19566[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19017__auto__);

return statearr_19566;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19019__auto__);
});})(c__19017__auto__,jobs,results,process,async))
);

return c__19017__auto__;
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
var args19624 = [];
var len__17922__auto___19627 = arguments.length;
var i__17923__auto___19628 = (0);
while(true){
if((i__17923__auto___19628 < len__17922__auto___19627)){
args19624.push((arguments[i__17923__auto___19628]));

var G__19629 = (i__17923__auto___19628 + (1));
i__17923__auto___19628 = G__19629;
continue;
} else {
}
break;
}

var G__19626 = args19624.length;
switch (G__19626) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19624.length)].join('')));

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
var args19631 = [];
var len__17922__auto___19634 = arguments.length;
var i__17923__auto___19635 = (0);
while(true){
if((i__17923__auto___19635 < len__17922__auto___19634)){
args19631.push((arguments[i__17923__auto___19635]));

var G__19636 = (i__17923__auto___19635 + (1));
i__17923__auto___19635 = G__19636;
continue;
} else {
}
break;
}

var G__19633 = args19631.length;
switch (G__19633) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19631.length)].join('')));

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
var args19638 = [];
var len__17922__auto___19691 = arguments.length;
var i__17923__auto___19692 = (0);
while(true){
if((i__17923__auto___19692 < len__17922__auto___19691)){
args19638.push((arguments[i__17923__auto___19692]));

var G__19693 = (i__17923__auto___19692 + (1));
i__17923__auto___19692 = G__19693;
continue;
} else {
}
break;
}

var G__19640 = args19638.length;
switch (G__19640) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19638.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__19017__auto___19695 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19017__auto___19695,tc,fc){
return (function (){
var f__19018__auto__ = (function (){var switch__18905__auto__ = ((function (c__19017__auto___19695,tc,fc){
return (function (state_19666){
var state_val_19667 = (state_19666[(1)]);
if((state_val_19667 === (7))){
var inst_19662 = (state_19666[(2)]);
var state_19666__$1 = state_19666;
var statearr_19668_19696 = state_19666__$1;
(statearr_19668_19696[(2)] = inst_19662);

(statearr_19668_19696[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19667 === (1))){
var state_19666__$1 = state_19666;
var statearr_19669_19697 = state_19666__$1;
(statearr_19669_19697[(2)] = null);

(statearr_19669_19697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19667 === (4))){
var inst_19643 = (state_19666[(7)]);
var inst_19643__$1 = (state_19666[(2)]);
var inst_19644 = (inst_19643__$1 == null);
var state_19666__$1 = (function (){var statearr_19670 = state_19666;
(statearr_19670[(7)] = inst_19643__$1);

return statearr_19670;
})();
if(cljs.core.truth_(inst_19644)){
var statearr_19671_19698 = state_19666__$1;
(statearr_19671_19698[(1)] = (5));

} else {
var statearr_19672_19699 = state_19666__$1;
(statearr_19672_19699[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19667 === (13))){
var state_19666__$1 = state_19666;
var statearr_19673_19700 = state_19666__$1;
(statearr_19673_19700[(2)] = null);

(statearr_19673_19700[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19667 === (6))){
var inst_19643 = (state_19666[(7)]);
var inst_19649 = p.call(null,inst_19643);
var state_19666__$1 = state_19666;
if(cljs.core.truth_(inst_19649)){
var statearr_19674_19701 = state_19666__$1;
(statearr_19674_19701[(1)] = (9));

} else {
var statearr_19675_19702 = state_19666__$1;
(statearr_19675_19702[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19667 === (3))){
var inst_19664 = (state_19666[(2)]);
var state_19666__$1 = state_19666;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19666__$1,inst_19664);
} else {
if((state_val_19667 === (12))){
var state_19666__$1 = state_19666;
var statearr_19676_19703 = state_19666__$1;
(statearr_19676_19703[(2)] = null);

(statearr_19676_19703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19667 === (2))){
var state_19666__$1 = state_19666;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19666__$1,(4),ch);
} else {
if((state_val_19667 === (11))){
var inst_19643 = (state_19666[(7)]);
var inst_19653 = (state_19666[(2)]);
var state_19666__$1 = state_19666;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19666__$1,(8),inst_19653,inst_19643);
} else {
if((state_val_19667 === (9))){
var state_19666__$1 = state_19666;
var statearr_19677_19704 = state_19666__$1;
(statearr_19677_19704[(2)] = tc);

(statearr_19677_19704[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19667 === (5))){
var inst_19646 = cljs.core.async.close_BANG_.call(null,tc);
var inst_19647 = cljs.core.async.close_BANG_.call(null,fc);
var state_19666__$1 = (function (){var statearr_19678 = state_19666;
(statearr_19678[(8)] = inst_19646);

return statearr_19678;
})();
var statearr_19679_19705 = state_19666__$1;
(statearr_19679_19705[(2)] = inst_19647);

(statearr_19679_19705[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19667 === (14))){
var inst_19660 = (state_19666[(2)]);
var state_19666__$1 = state_19666;
var statearr_19680_19706 = state_19666__$1;
(statearr_19680_19706[(2)] = inst_19660);

(statearr_19680_19706[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19667 === (10))){
var state_19666__$1 = state_19666;
var statearr_19681_19707 = state_19666__$1;
(statearr_19681_19707[(2)] = fc);

(statearr_19681_19707[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19667 === (8))){
var inst_19655 = (state_19666[(2)]);
var state_19666__$1 = state_19666;
if(cljs.core.truth_(inst_19655)){
var statearr_19682_19708 = state_19666__$1;
(statearr_19682_19708[(1)] = (12));

} else {
var statearr_19683_19709 = state_19666__$1;
(statearr_19683_19709[(1)] = (13));

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
});})(c__19017__auto___19695,tc,fc))
;
return ((function (switch__18905__auto__,c__19017__auto___19695,tc,fc){
return (function() {
var cljs$core$async$state_machine__18906__auto__ = null;
var cljs$core$async$state_machine__18906__auto____0 = (function (){
var statearr_19687 = [null,null,null,null,null,null,null,null,null];
(statearr_19687[(0)] = cljs$core$async$state_machine__18906__auto__);

(statearr_19687[(1)] = (1));

return statearr_19687;
});
var cljs$core$async$state_machine__18906__auto____1 = (function (state_19666){
while(true){
var ret_value__18907__auto__ = (function (){try{while(true){
var result__18908__auto__ = switch__18905__auto__.call(null,state_19666);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18908__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18908__auto__;
}
break;
}
}catch (e19688){if((e19688 instanceof Object)){
var ex__18909__auto__ = e19688;
var statearr_19689_19710 = state_19666;
(statearr_19689_19710[(5)] = ex__18909__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19666);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19688;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18907__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19711 = state_19666;
state_19666 = G__19711;
continue;
} else {
return ret_value__18907__auto__;
}
break;
}
});
cljs$core$async$state_machine__18906__auto__ = function(state_19666){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18906__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18906__auto____1.call(this,state_19666);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18906__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18906__auto____0;
cljs$core$async$state_machine__18906__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18906__auto____1;
return cljs$core$async$state_machine__18906__auto__;
})()
;})(switch__18905__auto__,c__19017__auto___19695,tc,fc))
})();
var state__19019__auto__ = (function (){var statearr_19690 = f__19018__auto__.call(null);
(statearr_19690[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19017__auto___19695);

return statearr_19690;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19019__auto__);
});})(c__19017__auto___19695,tc,fc))
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
var c__19017__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19017__auto__){
return (function (){
var f__19018__auto__ = (function (){var switch__18905__auto__ = ((function (c__19017__auto__){
return (function (state_19775){
var state_val_19776 = (state_19775[(1)]);
if((state_val_19776 === (7))){
var inst_19771 = (state_19775[(2)]);
var state_19775__$1 = state_19775;
var statearr_19777_19798 = state_19775__$1;
(statearr_19777_19798[(2)] = inst_19771);

(statearr_19777_19798[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19776 === (1))){
var inst_19755 = init;
var state_19775__$1 = (function (){var statearr_19778 = state_19775;
(statearr_19778[(7)] = inst_19755);

return statearr_19778;
})();
var statearr_19779_19799 = state_19775__$1;
(statearr_19779_19799[(2)] = null);

(statearr_19779_19799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19776 === (4))){
var inst_19758 = (state_19775[(8)]);
var inst_19758__$1 = (state_19775[(2)]);
var inst_19759 = (inst_19758__$1 == null);
var state_19775__$1 = (function (){var statearr_19780 = state_19775;
(statearr_19780[(8)] = inst_19758__$1);

return statearr_19780;
})();
if(cljs.core.truth_(inst_19759)){
var statearr_19781_19800 = state_19775__$1;
(statearr_19781_19800[(1)] = (5));

} else {
var statearr_19782_19801 = state_19775__$1;
(statearr_19782_19801[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19776 === (6))){
var inst_19755 = (state_19775[(7)]);
var inst_19762 = (state_19775[(9)]);
var inst_19758 = (state_19775[(8)]);
var inst_19762__$1 = f.call(null,inst_19755,inst_19758);
var inst_19763 = cljs.core.reduced_QMARK_.call(null,inst_19762__$1);
var state_19775__$1 = (function (){var statearr_19783 = state_19775;
(statearr_19783[(9)] = inst_19762__$1);

return statearr_19783;
})();
if(inst_19763){
var statearr_19784_19802 = state_19775__$1;
(statearr_19784_19802[(1)] = (8));

} else {
var statearr_19785_19803 = state_19775__$1;
(statearr_19785_19803[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19776 === (3))){
var inst_19773 = (state_19775[(2)]);
var state_19775__$1 = state_19775;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19775__$1,inst_19773);
} else {
if((state_val_19776 === (2))){
var state_19775__$1 = state_19775;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19775__$1,(4),ch);
} else {
if((state_val_19776 === (9))){
var inst_19762 = (state_19775[(9)]);
var inst_19755 = inst_19762;
var state_19775__$1 = (function (){var statearr_19786 = state_19775;
(statearr_19786[(7)] = inst_19755);

return statearr_19786;
})();
var statearr_19787_19804 = state_19775__$1;
(statearr_19787_19804[(2)] = null);

(statearr_19787_19804[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19776 === (5))){
var inst_19755 = (state_19775[(7)]);
var state_19775__$1 = state_19775;
var statearr_19788_19805 = state_19775__$1;
(statearr_19788_19805[(2)] = inst_19755);

(statearr_19788_19805[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19776 === (10))){
var inst_19769 = (state_19775[(2)]);
var state_19775__$1 = state_19775;
var statearr_19789_19806 = state_19775__$1;
(statearr_19789_19806[(2)] = inst_19769);

(statearr_19789_19806[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19776 === (8))){
var inst_19762 = (state_19775[(9)]);
var inst_19765 = cljs.core.deref.call(null,inst_19762);
var state_19775__$1 = state_19775;
var statearr_19790_19807 = state_19775__$1;
(statearr_19790_19807[(2)] = inst_19765);

(statearr_19790_19807[(1)] = (10));


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
});})(c__19017__auto__))
;
return ((function (switch__18905__auto__,c__19017__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__18906__auto__ = null;
var cljs$core$async$reduce_$_state_machine__18906__auto____0 = (function (){
var statearr_19794 = [null,null,null,null,null,null,null,null,null,null];
(statearr_19794[(0)] = cljs$core$async$reduce_$_state_machine__18906__auto__);

(statearr_19794[(1)] = (1));

return statearr_19794;
});
var cljs$core$async$reduce_$_state_machine__18906__auto____1 = (function (state_19775){
while(true){
var ret_value__18907__auto__ = (function (){try{while(true){
var result__18908__auto__ = switch__18905__auto__.call(null,state_19775);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18908__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18908__auto__;
}
break;
}
}catch (e19795){if((e19795 instanceof Object)){
var ex__18909__auto__ = e19795;
var statearr_19796_19808 = state_19775;
(statearr_19796_19808[(5)] = ex__18909__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19775);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19795;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18907__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19809 = state_19775;
state_19775 = G__19809;
continue;
} else {
return ret_value__18907__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__18906__auto__ = function(state_19775){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__18906__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__18906__auto____1.call(this,state_19775);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__18906__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__18906__auto____0;
cljs$core$async$reduce_$_state_machine__18906__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__18906__auto____1;
return cljs$core$async$reduce_$_state_machine__18906__auto__;
})()
;})(switch__18905__auto__,c__19017__auto__))
})();
var state__19019__auto__ = (function (){var statearr_19797 = f__19018__auto__.call(null);
(statearr_19797[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19017__auto__);

return statearr_19797;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19019__auto__);
});})(c__19017__auto__))
);

return c__19017__auto__;
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
var args19810 = [];
var len__17922__auto___19862 = arguments.length;
var i__17923__auto___19863 = (0);
while(true){
if((i__17923__auto___19863 < len__17922__auto___19862)){
args19810.push((arguments[i__17923__auto___19863]));

var G__19864 = (i__17923__auto___19863 + (1));
i__17923__auto___19863 = G__19864;
continue;
} else {
}
break;
}

var G__19812 = args19810.length;
switch (G__19812) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19810.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__19017__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19017__auto__){
return (function (){
var f__19018__auto__ = (function (){var switch__18905__auto__ = ((function (c__19017__auto__){
return (function (state_19837){
var state_val_19838 = (state_19837[(1)]);
if((state_val_19838 === (7))){
var inst_19819 = (state_19837[(2)]);
var state_19837__$1 = state_19837;
var statearr_19839_19866 = state_19837__$1;
(statearr_19839_19866[(2)] = inst_19819);

(statearr_19839_19866[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19838 === (1))){
var inst_19813 = cljs.core.seq.call(null,coll);
var inst_19814 = inst_19813;
var state_19837__$1 = (function (){var statearr_19840 = state_19837;
(statearr_19840[(7)] = inst_19814);

return statearr_19840;
})();
var statearr_19841_19867 = state_19837__$1;
(statearr_19841_19867[(2)] = null);

(statearr_19841_19867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19838 === (4))){
var inst_19814 = (state_19837[(7)]);
var inst_19817 = cljs.core.first.call(null,inst_19814);
var state_19837__$1 = state_19837;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19837__$1,(7),ch,inst_19817);
} else {
if((state_val_19838 === (13))){
var inst_19831 = (state_19837[(2)]);
var state_19837__$1 = state_19837;
var statearr_19842_19868 = state_19837__$1;
(statearr_19842_19868[(2)] = inst_19831);

(statearr_19842_19868[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19838 === (6))){
var inst_19822 = (state_19837[(2)]);
var state_19837__$1 = state_19837;
if(cljs.core.truth_(inst_19822)){
var statearr_19843_19869 = state_19837__$1;
(statearr_19843_19869[(1)] = (8));

} else {
var statearr_19844_19870 = state_19837__$1;
(statearr_19844_19870[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19838 === (3))){
var inst_19835 = (state_19837[(2)]);
var state_19837__$1 = state_19837;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19837__$1,inst_19835);
} else {
if((state_val_19838 === (12))){
var state_19837__$1 = state_19837;
var statearr_19845_19871 = state_19837__$1;
(statearr_19845_19871[(2)] = null);

(statearr_19845_19871[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19838 === (2))){
var inst_19814 = (state_19837[(7)]);
var state_19837__$1 = state_19837;
if(cljs.core.truth_(inst_19814)){
var statearr_19846_19872 = state_19837__$1;
(statearr_19846_19872[(1)] = (4));

} else {
var statearr_19847_19873 = state_19837__$1;
(statearr_19847_19873[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19838 === (11))){
var inst_19828 = cljs.core.async.close_BANG_.call(null,ch);
var state_19837__$1 = state_19837;
var statearr_19848_19874 = state_19837__$1;
(statearr_19848_19874[(2)] = inst_19828);

(statearr_19848_19874[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19838 === (9))){
var state_19837__$1 = state_19837;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19849_19875 = state_19837__$1;
(statearr_19849_19875[(1)] = (11));

} else {
var statearr_19850_19876 = state_19837__$1;
(statearr_19850_19876[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19838 === (5))){
var inst_19814 = (state_19837[(7)]);
var state_19837__$1 = state_19837;
var statearr_19851_19877 = state_19837__$1;
(statearr_19851_19877[(2)] = inst_19814);

(statearr_19851_19877[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19838 === (10))){
var inst_19833 = (state_19837[(2)]);
var state_19837__$1 = state_19837;
var statearr_19852_19878 = state_19837__$1;
(statearr_19852_19878[(2)] = inst_19833);

(statearr_19852_19878[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19838 === (8))){
var inst_19814 = (state_19837[(7)]);
var inst_19824 = cljs.core.next.call(null,inst_19814);
var inst_19814__$1 = inst_19824;
var state_19837__$1 = (function (){var statearr_19853 = state_19837;
(statearr_19853[(7)] = inst_19814__$1);

return statearr_19853;
})();
var statearr_19854_19879 = state_19837__$1;
(statearr_19854_19879[(2)] = null);

(statearr_19854_19879[(1)] = (2));


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
});})(c__19017__auto__))
;
return ((function (switch__18905__auto__,c__19017__auto__){
return (function() {
var cljs$core$async$state_machine__18906__auto__ = null;
var cljs$core$async$state_machine__18906__auto____0 = (function (){
var statearr_19858 = [null,null,null,null,null,null,null,null];
(statearr_19858[(0)] = cljs$core$async$state_machine__18906__auto__);

(statearr_19858[(1)] = (1));

return statearr_19858;
});
var cljs$core$async$state_machine__18906__auto____1 = (function (state_19837){
while(true){
var ret_value__18907__auto__ = (function (){try{while(true){
var result__18908__auto__ = switch__18905__auto__.call(null,state_19837);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18908__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18908__auto__;
}
break;
}
}catch (e19859){if((e19859 instanceof Object)){
var ex__18909__auto__ = e19859;
var statearr_19860_19880 = state_19837;
(statearr_19860_19880[(5)] = ex__18909__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19837);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19859;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18907__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19881 = state_19837;
state_19837 = G__19881;
continue;
} else {
return ret_value__18907__auto__;
}
break;
}
});
cljs$core$async$state_machine__18906__auto__ = function(state_19837){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18906__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18906__auto____1.call(this,state_19837);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18906__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18906__auto____0;
cljs$core$async$state_machine__18906__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18906__auto____1;
return cljs$core$async$state_machine__18906__auto__;
})()
;})(switch__18905__auto__,c__19017__auto__))
})();
var state__19019__auto__ = (function (){var statearr_19861 = f__19018__auto__.call(null);
(statearr_19861[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19017__auto__);

return statearr_19861;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19019__auto__);
});})(c__19017__auto__))
);

return c__19017__auto__;
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
var x__17519__auto__ = (((_ == null))?null:_);
var m__17520__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17519__auto__)]);
if(!((m__17520__auto__ == null))){
return m__17520__auto__.call(null,_);
} else {
var m__17520__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17520__auto____$1 == null))){
return m__17520__auto____$1.call(null,_);
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
var x__17519__auto__ = (((m == null))?null:m);
var m__17520__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17519__auto__)]);
if(!((m__17520__auto__ == null))){
return m__17520__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17520__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17520__auto____$1 == null))){
return m__17520__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__17519__auto__ = (((m == null))?null:m);
var m__17520__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17519__auto__)]);
if(!((m__17520__auto__ == null))){
return m__17520__auto__.call(null,m,ch);
} else {
var m__17520__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17520__auto____$1 == null))){
return m__17520__auto____$1.call(null,m,ch);
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
var x__17519__auto__ = (((m == null))?null:m);
var m__17520__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17519__auto__)]);
if(!((m__17520__auto__ == null))){
return m__17520__auto__.call(null,m);
} else {
var m__17520__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17520__auto____$1 == null))){
return m__17520__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async20103 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20103 = (function (mult,ch,cs,meta20104){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta20104 = meta20104;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20103.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_20105,meta20104__$1){
var self__ = this;
var _20105__$1 = this;
return (new cljs.core.async.t_cljs$core$async20103(self__.mult,self__.ch,self__.cs,meta20104__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async20103.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_20105){
var self__ = this;
var _20105__$1 = this;
return self__.meta20104;
});})(cs))
;

cljs.core.async.t_cljs$core$async20103.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async20103.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async20103.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async20103.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async20103.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async20103.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async20103.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta20104","meta20104",-653116355,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async20103.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20103.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20103";

cljs.core.async.t_cljs$core$async20103.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17462__auto__,writer__17463__auto__,opt__17464__auto__){
return cljs.core._write.call(null,writer__17463__auto__,"cljs.core.async/t_cljs$core$async20103");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async20103 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async20103(mult__$1,ch__$1,cs__$1,meta20104){
return (new cljs.core.async.t_cljs$core$async20103(mult__$1,ch__$1,cs__$1,meta20104));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async20103(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__19017__auto___20324 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19017__auto___20324,cs,m,dchan,dctr,done){
return (function (){
var f__19018__auto__ = (function (){var switch__18905__auto__ = ((function (c__19017__auto___20324,cs,m,dchan,dctr,done){
return (function (state_20236){
var state_val_20237 = (state_20236[(1)]);
if((state_val_20237 === (7))){
var inst_20232 = (state_20236[(2)]);
var state_20236__$1 = state_20236;
var statearr_20238_20325 = state_20236__$1;
(statearr_20238_20325[(2)] = inst_20232);

(statearr_20238_20325[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20237 === (20))){
var inst_20137 = (state_20236[(7)]);
var inst_20147 = cljs.core.first.call(null,inst_20137);
var inst_20148 = cljs.core.nth.call(null,inst_20147,(0),null);
var inst_20149 = cljs.core.nth.call(null,inst_20147,(1),null);
var state_20236__$1 = (function (){var statearr_20239 = state_20236;
(statearr_20239[(8)] = inst_20148);

return statearr_20239;
})();
if(cljs.core.truth_(inst_20149)){
var statearr_20240_20326 = state_20236__$1;
(statearr_20240_20326[(1)] = (22));

} else {
var statearr_20241_20327 = state_20236__$1;
(statearr_20241_20327[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20237 === (27))){
var inst_20108 = (state_20236[(9)]);
var inst_20177 = (state_20236[(10)]);
var inst_20184 = (state_20236[(11)]);
var inst_20179 = (state_20236[(12)]);
var inst_20184__$1 = cljs.core._nth.call(null,inst_20177,inst_20179);
var inst_20185 = cljs.core.async.put_BANG_.call(null,inst_20184__$1,inst_20108,done);
var state_20236__$1 = (function (){var statearr_20242 = state_20236;
(statearr_20242[(11)] = inst_20184__$1);

return statearr_20242;
})();
if(cljs.core.truth_(inst_20185)){
var statearr_20243_20328 = state_20236__$1;
(statearr_20243_20328[(1)] = (30));

} else {
var statearr_20244_20329 = state_20236__$1;
(statearr_20244_20329[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20237 === (1))){
var state_20236__$1 = state_20236;
var statearr_20245_20330 = state_20236__$1;
(statearr_20245_20330[(2)] = null);

(statearr_20245_20330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20237 === (24))){
var inst_20137 = (state_20236[(7)]);
var inst_20154 = (state_20236[(2)]);
var inst_20155 = cljs.core.next.call(null,inst_20137);
var inst_20117 = inst_20155;
var inst_20118 = null;
var inst_20119 = (0);
var inst_20120 = (0);
var state_20236__$1 = (function (){var statearr_20246 = state_20236;
(statearr_20246[(13)] = inst_20118);

(statearr_20246[(14)] = inst_20119);

(statearr_20246[(15)] = inst_20154);

(statearr_20246[(16)] = inst_20120);

(statearr_20246[(17)] = inst_20117);

return statearr_20246;
})();
var statearr_20247_20331 = state_20236__$1;
(statearr_20247_20331[(2)] = null);

(statearr_20247_20331[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20237 === (39))){
var state_20236__$1 = state_20236;
var statearr_20251_20332 = state_20236__$1;
(statearr_20251_20332[(2)] = null);

(statearr_20251_20332[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20237 === (4))){
var inst_20108 = (state_20236[(9)]);
var inst_20108__$1 = (state_20236[(2)]);
var inst_20109 = (inst_20108__$1 == null);
var state_20236__$1 = (function (){var statearr_20252 = state_20236;
(statearr_20252[(9)] = inst_20108__$1);

return statearr_20252;
})();
if(cljs.core.truth_(inst_20109)){
var statearr_20253_20333 = state_20236__$1;
(statearr_20253_20333[(1)] = (5));

} else {
var statearr_20254_20334 = state_20236__$1;
(statearr_20254_20334[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20237 === (15))){
var inst_20118 = (state_20236[(13)]);
var inst_20119 = (state_20236[(14)]);
var inst_20120 = (state_20236[(16)]);
var inst_20117 = (state_20236[(17)]);
var inst_20133 = (state_20236[(2)]);
var inst_20134 = (inst_20120 + (1));
var tmp20248 = inst_20118;
var tmp20249 = inst_20119;
var tmp20250 = inst_20117;
var inst_20117__$1 = tmp20250;
var inst_20118__$1 = tmp20248;
var inst_20119__$1 = tmp20249;
var inst_20120__$1 = inst_20134;
var state_20236__$1 = (function (){var statearr_20255 = state_20236;
(statearr_20255[(18)] = inst_20133);

(statearr_20255[(13)] = inst_20118__$1);

(statearr_20255[(14)] = inst_20119__$1);

(statearr_20255[(16)] = inst_20120__$1);

(statearr_20255[(17)] = inst_20117__$1);

return statearr_20255;
})();
var statearr_20256_20335 = state_20236__$1;
(statearr_20256_20335[(2)] = null);

(statearr_20256_20335[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20237 === (21))){
var inst_20158 = (state_20236[(2)]);
var state_20236__$1 = state_20236;
var statearr_20260_20336 = state_20236__$1;
(statearr_20260_20336[(2)] = inst_20158);

(statearr_20260_20336[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20237 === (31))){
var inst_20184 = (state_20236[(11)]);
var inst_20188 = done.call(null,null);
var inst_20189 = cljs.core.async.untap_STAR_.call(null,m,inst_20184);
var state_20236__$1 = (function (){var statearr_20261 = state_20236;
(statearr_20261[(19)] = inst_20188);

return statearr_20261;
})();
var statearr_20262_20337 = state_20236__$1;
(statearr_20262_20337[(2)] = inst_20189);

(statearr_20262_20337[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20237 === (32))){
var inst_20176 = (state_20236[(20)]);
var inst_20177 = (state_20236[(10)]);
var inst_20178 = (state_20236[(21)]);
var inst_20179 = (state_20236[(12)]);
var inst_20191 = (state_20236[(2)]);
var inst_20192 = (inst_20179 + (1));
var tmp20257 = inst_20176;
var tmp20258 = inst_20177;
var tmp20259 = inst_20178;
var inst_20176__$1 = tmp20257;
var inst_20177__$1 = tmp20258;
var inst_20178__$1 = tmp20259;
var inst_20179__$1 = inst_20192;
var state_20236__$1 = (function (){var statearr_20263 = state_20236;
(statearr_20263[(20)] = inst_20176__$1);

(statearr_20263[(10)] = inst_20177__$1);

(statearr_20263[(21)] = inst_20178__$1);

(statearr_20263[(12)] = inst_20179__$1);

(statearr_20263[(22)] = inst_20191);

return statearr_20263;
})();
var statearr_20264_20338 = state_20236__$1;
(statearr_20264_20338[(2)] = null);

(statearr_20264_20338[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20237 === (40))){
var inst_20204 = (state_20236[(23)]);
var inst_20208 = done.call(null,null);
var inst_20209 = cljs.core.async.untap_STAR_.call(null,m,inst_20204);
var state_20236__$1 = (function (){var statearr_20265 = state_20236;
(statearr_20265[(24)] = inst_20208);

return statearr_20265;
})();
var statearr_20266_20339 = state_20236__$1;
(statearr_20266_20339[(2)] = inst_20209);

(statearr_20266_20339[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20237 === (33))){
var inst_20195 = (state_20236[(25)]);
var inst_20197 = cljs.core.chunked_seq_QMARK_.call(null,inst_20195);
var state_20236__$1 = state_20236;
if(inst_20197){
var statearr_20267_20340 = state_20236__$1;
(statearr_20267_20340[(1)] = (36));

} else {
var statearr_20268_20341 = state_20236__$1;
(statearr_20268_20341[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20237 === (13))){
var inst_20127 = (state_20236[(26)]);
var inst_20130 = cljs.core.async.close_BANG_.call(null,inst_20127);
var state_20236__$1 = state_20236;
var statearr_20269_20342 = state_20236__$1;
(statearr_20269_20342[(2)] = inst_20130);

(statearr_20269_20342[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20237 === (22))){
var inst_20148 = (state_20236[(8)]);
var inst_20151 = cljs.core.async.close_BANG_.call(null,inst_20148);
var state_20236__$1 = state_20236;
var statearr_20270_20343 = state_20236__$1;
(statearr_20270_20343[(2)] = inst_20151);

(statearr_20270_20343[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20237 === (36))){
var inst_20195 = (state_20236[(25)]);
var inst_20199 = cljs.core.chunk_first.call(null,inst_20195);
var inst_20200 = cljs.core.chunk_rest.call(null,inst_20195);
var inst_20201 = cljs.core.count.call(null,inst_20199);
var inst_20176 = inst_20200;
var inst_20177 = inst_20199;
var inst_20178 = inst_20201;
var inst_20179 = (0);
var state_20236__$1 = (function (){var statearr_20271 = state_20236;
(statearr_20271[(20)] = inst_20176);

(statearr_20271[(10)] = inst_20177);

(statearr_20271[(21)] = inst_20178);

(statearr_20271[(12)] = inst_20179);

return statearr_20271;
})();
var statearr_20272_20344 = state_20236__$1;
(statearr_20272_20344[(2)] = null);

(statearr_20272_20344[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20237 === (41))){
var inst_20195 = (state_20236[(25)]);
var inst_20211 = (state_20236[(2)]);
var inst_20212 = cljs.core.next.call(null,inst_20195);
var inst_20176 = inst_20212;
var inst_20177 = null;
var inst_20178 = (0);
var inst_20179 = (0);
var state_20236__$1 = (function (){var statearr_20273 = state_20236;
(statearr_20273[(27)] = inst_20211);

(statearr_20273[(20)] = inst_20176);

(statearr_20273[(10)] = inst_20177);

(statearr_20273[(21)] = inst_20178);

(statearr_20273[(12)] = inst_20179);

return statearr_20273;
})();
var statearr_20274_20345 = state_20236__$1;
(statearr_20274_20345[(2)] = null);

(statearr_20274_20345[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20237 === (43))){
var state_20236__$1 = state_20236;
var statearr_20275_20346 = state_20236__$1;
(statearr_20275_20346[(2)] = null);

(statearr_20275_20346[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20237 === (29))){
var inst_20220 = (state_20236[(2)]);
var state_20236__$1 = state_20236;
var statearr_20276_20347 = state_20236__$1;
(statearr_20276_20347[(2)] = inst_20220);

(statearr_20276_20347[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20237 === (44))){
var inst_20229 = (state_20236[(2)]);
var state_20236__$1 = (function (){var statearr_20277 = state_20236;
(statearr_20277[(28)] = inst_20229);

return statearr_20277;
})();
var statearr_20278_20348 = state_20236__$1;
(statearr_20278_20348[(2)] = null);

(statearr_20278_20348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20237 === (6))){
var inst_20168 = (state_20236[(29)]);
var inst_20167 = cljs.core.deref.call(null,cs);
var inst_20168__$1 = cljs.core.keys.call(null,inst_20167);
var inst_20169 = cljs.core.count.call(null,inst_20168__$1);
var inst_20170 = cljs.core.reset_BANG_.call(null,dctr,inst_20169);
var inst_20175 = cljs.core.seq.call(null,inst_20168__$1);
var inst_20176 = inst_20175;
var inst_20177 = null;
var inst_20178 = (0);
var inst_20179 = (0);
var state_20236__$1 = (function (){var statearr_20279 = state_20236;
(statearr_20279[(29)] = inst_20168__$1);

(statearr_20279[(20)] = inst_20176);

(statearr_20279[(10)] = inst_20177);

(statearr_20279[(21)] = inst_20178);

(statearr_20279[(12)] = inst_20179);

(statearr_20279[(30)] = inst_20170);

return statearr_20279;
})();
var statearr_20280_20349 = state_20236__$1;
(statearr_20280_20349[(2)] = null);

(statearr_20280_20349[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20237 === (28))){
var inst_20176 = (state_20236[(20)]);
var inst_20195 = (state_20236[(25)]);
var inst_20195__$1 = cljs.core.seq.call(null,inst_20176);
var state_20236__$1 = (function (){var statearr_20281 = state_20236;
(statearr_20281[(25)] = inst_20195__$1);

return statearr_20281;
})();
if(inst_20195__$1){
var statearr_20282_20350 = state_20236__$1;
(statearr_20282_20350[(1)] = (33));

} else {
var statearr_20283_20351 = state_20236__$1;
(statearr_20283_20351[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20237 === (25))){
var inst_20178 = (state_20236[(21)]);
var inst_20179 = (state_20236[(12)]);
var inst_20181 = (inst_20179 < inst_20178);
var inst_20182 = inst_20181;
var state_20236__$1 = state_20236;
if(cljs.core.truth_(inst_20182)){
var statearr_20284_20352 = state_20236__$1;
(statearr_20284_20352[(1)] = (27));

} else {
var statearr_20285_20353 = state_20236__$1;
(statearr_20285_20353[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20237 === (34))){
var state_20236__$1 = state_20236;
var statearr_20286_20354 = state_20236__$1;
(statearr_20286_20354[(2)] = null);

(statearr_20286_20354[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20237 === (17))){
var state_20236__$1 = state_20236;
var statearr_20287_20355 = state_20236__$1;
(statearr_20287_20355[(2)] = null);

(statearr_20287_20355[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20237 === (3))){
var inst_20234 = (state_20236[(2)]);
var state_20236__$1 = state_20236;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20236__$1,inst_20234);
} else {
if((state_val_20237 === (12))){
var inst_20163 = (state_20236[(2)]);
var state_20236__$1 = state_20236;
var statearr_20288_20356 = state_20236__$1;
(statearr_20288_20356[(2)] = inst_20163);

(statearr_20288_20356[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20237 === (2))){
var state_20236__$1 = state_20236;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20236__$1,(4),ch);
} else {
if((state_val_20237 === (23))){
var state_20236__$1 = state_20236;
var statearr_20289_20357 = state_20236__$1;
(statearr_20289_20357[(2)] = null);

(statearr_20289_20357[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20237 === (35))){
var inst_20218 = (state_20236[(2)]);
var state_20236__$1 = state_20236;
var statearr_20290_20358 = state_20236__$1;
(statearr_20290_20358[(2)] = inst_20218);

(statearr_20290_20358[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20237 === (19))){
var inst_20137 = (state_20236[(7)]);
var inst_20141 = cljs.core.chunk_first.call(null,inst_20137);
var inst_20142 = cljs.core.chunk_rest.call(null,inst_20137);
var inst_20143 = cljs.core.count.call(null,inst_20141);
var inst_20117 = inst_20142;
var inst_20118 = inst_20141;
var inst_20119 = inst_20143;
var inst_20120 = (0);
var state_20236__$1 = (function (){var statearr_20291 = state_20236;
(statearr_20291[(13)] = inst_20118);

(statearr_20291[(14)] = inst_20119);

(statearr_20291[(16)] = inst_20120);

(statearr_20291[(17)] = inst_20117);

return statearr_20291;
})();
var statearr_20292_20359 = state_20236__$1;
(statearr_20292_20359[(2)] = null);

(statearr_20292_20359[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20237 === (11))){
var inst_20137 = (state_20236[(7)]);
var inst_20117 = (state_20236[(17)]);
var inst_20137__$1 = cljs.core.seq.call(null,inst_20117);
var state_20236__$1 = (function (){var statearr_20293 = state_20236;
(statearr_20293[(7)] = inst_20137__$1);

return statearr_20293;
})();
if(inst_20137__$1){
var statearr_20294_20360 = state_20236__$1;
(statearr_20294_20360[(1)] = (16));

} else {
var statearr_20295_20361 = state_20236__$1;
(statearr_20295_20361[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20237 === (9))){
var inst_20165 = (state_20236[(2)]);
var state_20236__$1 = state_20236;
var statearr_20296_20362 = state_20236__$1;
(statearr_20296_20362[(2)] = inst_20165);

(statearr_20296_20362[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20237 === (5))){
var inst_20115 = cljs.core.deref.call(null,cs);
var inst_20116 = cljs.core.seq.call(null,inst_20115);
var inst_20117 = inst_20116;
var inst_20118 = null;
var inst_20119 = (0);
var inst_20120 = (0);
var state_20236__$1 = (function (){var statearr_20297 = state_20236;
(statearr_20297[(13)] = inst_20118);

(statearr_20297[(14)] = inst_20119);

(statearr_20297[(16)] = inst_20120);

(statearr_20297[(17)] = inst_20117);

return statearr_20297;
})();
var statearr_20298_20363 = state_20236__$1;
(statearr_20298_20363[(2)] = null);

(statearr_20298_20363[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20237 === (14))){
var state_20236__$1 = state_20236;
var statearr_20299_20364 = state_20236__$1;
(statearr_20299_20364[(2)] = null);

(statearr_20299_20364[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20237 === (45))){
var inst_20226 = (state_20236[(2)]);
var state_20236__$1 = state_20236;
var statearr_20300_20365 = state_20236__$1;
(statearr_20300_20365[(2)] = inst_20226);

(statearr_20300_20365[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20237 === (26))){
var inst_20168 = (state_20236[(29)]);
var inst_20222 = (state_20236[(2)]);
var inst_20223 = cljs.core.seq.call(null,inst_20168);
var state_20236__$1 = (function (){var statearr_20301 = state_20236;
(statearr_20301[(31)] = inst_20222);

return statearr_20301;
})();
if(inst_20223){
var statearr_20302_20366 = state_20236__$1;
(statearr_20302_20366[(1)] = (42));

} else {
var statearr_20303_20367 = state_20236__$1;
(statearr_20303_20367[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20237 === (16))){
var inst_20137 = (state_20236[(7)]);
var inst_20139 = cljs.core.chunked_seq_QMARK_.call(null,inst_20137);
var state_20236__$1 = state_20236;
if(inst_20139){
var statearr_20304_20368 = state_20236__$1;
(statearr_20304_20368[(1)] = (19));

} else {
var statearr_20305_20369 = state_20236__$1;
(statearr_20305_20369[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20237 === (38))){
var inst_20215 = (state_20236[(2)]);
var state_20236__$1 = state_20236;
var statearr_20306_20370 = state_20236__$1;
(statearr_20306_20370[(2)] = inst_20215);

(statearr_20306_20370[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20237 === (30))){
var state_20236__$1 = state_20236;
var statearr_20307_20371 = state_20236__$1;
(statearr_20307_20371[(2)] = null);

(statearr_20307_20371[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20237 === (10))){
var inst_20118 = (state_20236[(13)]);
var inst_20120 = (state_20236[(16)]);
var inst_20126 = cljs.core._nth.call(null,inst_20118,inst_20120);
var inst_20127 = cljs.core.nth.call(null,inst_20126,(0),null);
var inst_20128 = cljs.core.nth.call(null,inst_20126,(1),null);
var state_20236__$1 = (function (){var statearr_20308 = state_20236;
(statearr_20308[(26)] = inst_20127);

return statearr_20308;
})();
if(cljs.core.truth_(inst_20128)){
var statearr_20309_20372 = state_20236__$1;
(statearr_20309_20372[(1)] = (13));

} else {
var statearr_20310_20373 = state_20236__$1;
(statearr_20310_20373[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20237 === (18))){
var inst_20161 = (state_20236[(2)]);
var state_20236__$1 = state_20236;
var statearr_20311_20374 = state_20236__$1;
(statearr_20311_20374[(2)] = inst_20161);

(statearr_20311_20374[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20237 === (42))){
var state_20236__$1 = state_20236;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20236__$1,(45),dchan);
} else {
if((state_val_20237 === (37))){
var inst_20108 = (state_20236[(9)]);
var inst_20195 = (state_20236[(25)]);
var inst_20204 = (state_20236[(23)]);
var inst_20204__$1 = cljs.core.first.call(null,inst_20195);
var inst_20205 = cljs.core.async.put_BANG_.call(null,inst_20204__$1,inst_20108,done);
var state_20236__$1 = (function (){var statearr_20312 = state_20236;
(statearr_20312[(23)] = inst_20204__$1);

return statearr_20312;
})();
if(cljs.core.truth_(inst_20205)){
var statearr_20313_20375 = state_20236__$1;
(statearr_20313_20375[(1)] = (39));

} else {
var statearr_20314_20376 = state_20236__$1;
(statearr_20314_20376[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20237 === (8))){
var inst_20119 = (state_20236[(14)]);
var inst_20120 = (state_20236[(16)]);
var inst_20122 = (inst_20120 < inst_20119);
var inst_20123 = inst_20122;
var state_20236__$1 = state_20236;
if(cljs.core.truth_(inst_20123)){
var statearr_20315_20377 = state_20236__$1;
(statearr_20315_20377[(1)] = (10));

} else {
var statearr_20316_20378 = state_20236__$1;
(statearr_20316_20378[(1)] = (11));

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
});})(c__19017__auto___20324,cs,m,dchan,dctr,done))
;
return ((function (switch__18905__auto__,c__19017__auto___20324,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__18906__auto__ = null;
var cljs$core$async$mult_$_state_machine__18906__auto____0 = (function (){
var statearr_20320 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20320[(0)] = cljs$core$async$mult_$_state_machine__18906__auto__);

(statearr_20320[(1)] = (1));

return statearr_20320;
});
var cljs$core$async$mult_$_state_machine__18906__auto____1 = (function (state_20236){
while(true){
var ret_value__18907__auto__ = (function (){try{while(true){
var result__18908__auto__ = switch__18905__auto__.call(null,state_20236);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18908__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18908__auto__;
}
break;
}
}catch (e20321){if((e20321 instanceof Object)){
var ex__18909__auto__ = e20321;
var statearr_20322_20379 = state_20236;
(statearr_20322_20379[(5)] = ex__18909__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20236);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20321;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18907__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20380 = state_20236;
state_20236 = G__20380;
continue;
} else {
return ret_value__18907__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__18906__auto__ = function(state_20236){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__18906__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__18906__auto____1.call(this,state_20236);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__18906__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__18906__auto____0;
cljs$core$async$mult_$_state_machine__18906__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__18906__auto____1;
return cljs$core$async$mult_$_state_machine__18906__auto__;
})()
;})(switch__18905__auto__,c__19017__auto___20324,cs,m,dchan,dctr,done))
})();
var state__19019__auto__ = (function (){var statearr_20323 = f__19018__auto__.call(null);
(statearr_20323[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19017__auto___20324);

return statearr_20323;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19019__auto__);
});})(c__19017__auto___20324,cs,m,dchan,dctr,done))
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
var args20381 = [];
var len__17922__auto___20384 = arguments.length;
var i__17923__auto___20385 = (0);
while(true){
if((i__17923__auto___20385 < len__17922__auto___20384)){
args20381.push((arguments[i__17923__auto___20385]));

var G__20386 = (i__17923__auto___20385 + (1));
i__17923__auto___20385 = G__20386;
continue;
} else {
}
break;
}

var G__20383 = args20381.length;
switch (G__20383) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20381.length)].join('')));

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
var x__17519__auto__ = (((m == null))?null:m);
var m__17520__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17519__auto__)]);
if(!((m__17520__auto__ == null))){
return m__17520__auto__.call(null,m,ch);
} else {
var m__17520__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17520__auto____$1 == null))){
return m__17520__auto____$1.call(null,m,ch);
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
var x__17519__auto__ = (((m == null))?null:m);
var m__17520__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17519__auto__)]);
if(!((m__17520__auto__ == null))){
return m__17520__auto__.call(null,m,ch);
} else {
var m__17520__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17520__auto____$1 == null))){
return m__17520__auto____$1.call(null,m,ch);
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
var x__17519__auto__ = (((m == null))?null:m);
var m__17520__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17519__auto__)]);
if(!((m__17520__auto__ == null))){
return m__17520__auto__.call(null,m);
} else {
var m__17520__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17520__auto____$1 == null))){
return m__17520__auto____$1.call(null,m);
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
var x__17519__auto__ = (((m == null))?null:m);
var m__17520__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17519__auto__)]);
if(!((m__17520__auto__ == null))){
return m__17520__auto__.call(null,m,state_map);
} else {
var m__17520__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17520__auto____$1 == null))){
return m__17520__auto____$1.call(null,m,state_map);
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
var x__17519__auto__ = (((m == null))?null:m);
var m__17520__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17519__auto__)]);
if(!((m__17520__auto__ == null))){
return m__17520__auto__.call(null,m,mode);
} else {
var m__17520__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17520__auto____$1 == null))){
return m__17520__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17929__auto__ = [];
var len__17922__auto___20398 = arguments.length;
var i__17923__auto___20399 = (0);
while(true){
if((i__17923__auto___20399 < len__17922__auto___20398)){
args__17929__auto__.push((arguments[i__17923__auto___20399]));

var G__20400 = (i__17923__auto___20399 + (1));
i__17923__auto___20399 = G__20400;
continue;
} else {
}
break;
}

var argseq__17930__auto__ = ((((3) < args__17929__auto__.length))?(new cljs.core.IndexedSeq(args__17929__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17930__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__20392){
var map__20393 = p__20392;
var map__20393__$1 = ((((!((map__20393 == null)))?((((map__20393.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20393.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20393):map__20393);
var opts = map__20393__$1;
var statearr_20395_20401 = state;
(statearr_20395_20401[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__20393,map__20393__$1,opts){
return (function (val){
var statearr_20396_20402 = state;
(statearr_20396_20402[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__20393,map__20393__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_20397_20403 = state;
(statearr_20397_20403[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq20388){
var G__20389 = cljs.core.first.call(null,seq20388);
var seq20388__$1 = cljs.core.next.call(null,seq20388);
var G__20390 = cljs.core.first.call(null,seq20388__$1);
var seq20388__$2 = cljs.core.next.call(null,seq20388__$1);
var G__20391 = cljs.core.first.call(null,seq20388__$2);
var seq20388__$3 = cljs.core.next.call(null,seq20388__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20389,G__20390,G__20391,seq20388__$3);
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
if(typeof cljs.core.async.t_cljs$core$async20567 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20567 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta20568){
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
this.meta20568 = meta20568;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20567.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20569,meta20568__$1){
var self__ = this;
var _20569__$1 = this;
return (new cljs.core.async.t_cljs$core$async20567(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta20568__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20567.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20569){
var self__ = this;
var _20569__$1 = this;
return self__.meta20568;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20567.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async20567.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20567.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async20567.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20567.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20567.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20567.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20567.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20567.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta20568","meta20568",1621146730,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20567.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20567.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20567";

cljs.core.async.t_cljs$core$async20567.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17462__auto__,writer__17463__auto__,opt__17464__auto__){
return cljs.core._write.call(null,writer__17463__auto__,"cljs.core.async/t_cljs$core$async20567");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async20567 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async20567(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta20568){
return (new cljs.core.async.t_cljs$core$async20567(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta20568));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async20567(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19017__auto___20730 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19017__auto___20730,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19018__auto__ = (function (){var switch__18905__auto__ = ((function (c__19017__auto___20730,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_20667){
var state_val_20668 = (state_20667[(1)]);
if((state_val_20668 === (7))){
var inst_20585 = (state_20667[(2)]);
var state_20667__$1 = state_20667;
var statearr_20669_20731 = state_20667__$1;
(statearr_20669_20731[(2)] = inst_20585);

(statearr_20669_20731[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20668 === (20))){
var inst_20597 = (state_20667[(7)]);
var state_20667__$1 = state_20667;
var statearr_20670_20732 = state_20667__$1;
(statearr_20670_20732[(2)] = inst_20597);

(statearr_20670_20732[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20668 === (27))){
var state_20667__$1 = state_20667;
var statearr_20671_20733 = state_20667__$1;
(statearr_20671_20733[(2)] = null);

(statearr_20671_20733[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20668 === (1))){
var inst_20573 = (state_20667[(8)]);
var inst_20573__$1 = calc_state.call(null);
var inst_20575 = (inst_20573__$1 == null);
var inst_20576 = cljs.core.not.call(null,inst_20575);
var state_20667__$1 = (function (){var statearr_20672 = state_20667;
(statearr_20672[(8)] = inst_20573__$1);

return statearr_20672;
})();
if(inst_20576){
var statearr_20673_20734 = state_20667__$1;
(statearr_20673_20734[(1)] = (2));

} else {
var statearr_20674_20735 = state_20667__$1;
(statearr_20674_20735[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20668 === (24))){
var inst_20620 = (state_20667[(9)]);
var inst_20627 = (state_20667[(10)]);
var inst_20641 = (state_20667[(11)]);
var inst_20641__$1 = inst_20620.call(null,inst_20627);
var state_20667__$1 = (function (){var statearr_20675 = state_20667;
(statearr_20675[(11)] = inst_20641__$1);

return statearr_20675;
})();
if(cljs.core.truth_(inst_20641__$1)){
var statearr_20676_20736 = state_20667__$1;
(statearr_20676_20736[(1)] = (29));

} else {
var statearr_20677_20737 = state_20667__$1;
(statearr_20677_20737[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20668 === (4))){
var inst_20588 = (state_20667[(2)]);
var state_20667__$1 = state_20667;
if(cljs.core.truth_(inst_20588)){
var statearr_20678_20738 = state_20667__$1;
(statearr_20678_20738[(1)] = (8));

} else {
var statearr_20679_20739 = state_20667__$1;
(statearr_20679_20739[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20668 === (15))){
var inst_20614 = (state_20667[(2)]);
var state_20667__$1 = state_20667;
if(cljs.core.truth_(inst_20614)){
var statearr_20680_20740 = state_20667__$1;
(statearr_20680_20740[(1)] = (19));

} else {
var statearr_20681_20741 = state_20667__$1;
(statearr_20681_20741[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20668 === (21))){
var inst_20619 = (state_20667[(12)]);
var inst_20619__$1 = (state_20667[(2)]);
var inst_20620 = cljs.core.get.call(null,inst_20619__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_20621 = cljs.core.get.call(null,inst_20619__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_20622 = cljs.core.get.call(null,inst_20619__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_20667__$1 = (function (){var statearr_20682 = state_20667;
(statearr_20682[(12)] = inst_20619__$1);

(statearr_20682[(13)] = inst_20621);

(statearr_20682[(9)] = inst_20620);

return statearr_20682;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_20667__$1,(22),inst_20622);
} else {
if((state_val_20668 === (31))){
var inst_20649 = (state_20667[(2)]);
var state_20667__$1 = state_20667;
if(cljs.core.truth_(inst_20649)){
var statearr_20683_20742 = state_20667__$1;
(statearr_20683_20742[(1)] = (32));

} else {
var statearr_20684_20743 = state_20667__$1;
(statearr_20684_20743[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20668 === (32))){
var inst_20626 = (state_20667[(14)]);
var state_20667__$1 = state_20667;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20667__$1,(35),out,inst_20626);
} else {
if((state_val_20668 === (33))){
var inst_20619 = (state_20667[(12)]);
var inst_20597 = inst_20619;
var state_20667__$1 = (function (){var statearr_20685 = state_20667;
(statearr_20685[(7)] = inst_20597);

return statearr_20685;
})();
var statearr_20686_20744 = state_20667__$1;
(statearr_20686_20744[(2)] = null);

(statearr_20686_20744[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20668 === (13))){
var inst_20597 = (state_20667[(7)]);
var inst_20604 = inst_20597.cljs$lang$protocol_mask$partition0$;
var inst_20605 = (inst_20604 & (64));
var inst_20606 = inst_20597.cljs$core$ISeq$;
var inst_20607 = (inst_20605) || (inst_20606);
var state_20667__$1 = state_20667;
if(cljs.core.truth_(inst_20607)){
var statearr_20687_20745 = state_20667__$1;
(statearr_20687_20745[(1)] = (16));

} else {
var statearr_20688_20746 = state_20667__$1;
(statearr_20688_20746[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20668 === (22))){
var inst_20626 = (state_20667[(14)]);
var inst_20627 = (state_20667[(10)]);
var inst_20625 = (state_20667[(2)]);
var inst_20626__$1 = cljs.core.nth.call(null,inst_20625,(0),null);
var inst_20627__$1 = cljs.core.nth.call(null,inst_20625,(1),null);
var inst_20628 = (inst_20626__$1 == null);
var inst_20629 = cljs.core._EQ_.call(null,inst_20627__$1,change);
var inst_20630 = (inst_20628) || (inst_20629);
var state_20667__$1 = (function (){var statearr_20689 = state_20667;
(statearr_20689[(14)] = inst_20626__$1);

(statearr_20689[(10)] = inst_20627__$1);

return statearr_20689;
})();
if(cljs.core.truth_(inst_20630)){
var statearr_20690_20747 = state_20667__$1;
(statearr_20690_20747[(1)] = (23));

} else {
var statearr_20691_20748 = state_20667__$1;
(statearr_20691_20748[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20668 === (36))){
var inst_20619 = (state_20667[(12)]);
var inst_20597 = inst_20619;
var state_20667__$1 = (function (){var statearr_20692 = state_20667;
(statearr_20692[(7)] = inst_20597);

return statearr_20692;
})();
var statearr_20693_20749 = state_20667__$1;
(statearr_20693_20749[(2)] = null);

(statearr_20693_20749[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20668 === (29))){
var inst_20641 = (state_20667[(11)]);
var state_20667__$1 = state_20667;
var statearr_20694_20750 = state_20667__$1;
(statearr_20694_20750[(2)] = inst_20641);

(statearr_20694_20750[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20668 === (6))){
var state_20667__$1 = state_20667;
var statearr_20695_20751 = state_20667__$1;
(statearr_20695_20751[(2)] = false);

(statearr_20695_20751[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20668 === (28))){
var inst_20637 = (state_20667[(2)]);
var inst_20638 = calc_state.call(null);
var inst_20597 = inst_20638;
var state_20667__$1 = (function (){var statearr_20696 = state_20667;
(statearr_20696[(15)] = inst_20637);

(statearr_20696[(7)] = inst_20597);

return statearr_20696;
})();
var statearr_20697_20752 = state_20667__$1;
(statearr_20697_20752[(2)] = null);

(statearr_20697_20752[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20668 === (25))){
var inst_20663 = (state_20667[(2)]);
var state_20667__$1 = state_20667;
var statearr_20698_20753 = state_20667__$1;
(statearr_20698_20753[(2)] = inst_20663);

(statearr_20698_20753[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20668 === (34))){
var inst_20661 = (state_20667[(2)]);
var state_20667__$1 = state_20667;
var statearr_20699_20754 = state_20667__$1;
(statearr_20699_20754[(2)] = inst_20661);

(statearr_20699_20754[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20668 === (17))){
var state_20667__$1 = state_20667;
var statearr_20700_20755 = state_20667__$1;
(statearr_20700_20755[(2)] = false);

(statearr_20700_20755[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20668 === (3))){
var state_20667__$1 = state_20667;
var statearr_20701_20756 = state_20667__$1;
(statearr_20701_20756[(2)] = false);

(statearr_20701_20756[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20668 === (12))){
var inst_20665 = (state_20667[(2)]);
var state_20667__$1 = state_20667;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20667__$1,inst_20665);
} else {
if((state_val_20668 === (2))){
var inst_20573 = (state_20667[(8)]);
var inst_20578 = inst_20573.cljs$lang$protocol_mask$partition0$;
var inst_20579 = (inst_20578 & (64));
var inst_20580 = inst_20573.cljs$core$ISeq$;
var inst_20581 = (inst_20579) || (inst_20580);
var state_20667__$1 = state_20667;
if(cljs.core.truth_(inst_20581)){
var statearr_20702_20757 = state_20667__$1;
(statearr_20702_20757[(1)] = (5));

} else {
var statearr_20703_20758 = state_20667__$1;
(statearr_20703_20758[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20668 === (23))){
var inst_20626 = (state_20667[(14)]);
var inst_20632 = (inst_20626 == null);
var state_20667__$1 = state_20667;
if(cljs.core.truth_(inst_20632)){
var statearr_20704_20759 = state_20667__$1;
(statearr_20704_20759[(1)] = (26));

} else {
var statearr_20705_20760 = state_20667__$1;
(statearr_20705_20760[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20668 === (35))){
var inst_20652 = (state_20667[(2)]);
var state_20667__$1 = state_20667;
if(cljs.core.truth_(inst_20652)){
var statearr_20706_20761 = state_20667__$1;
(statearr_20706_20761[(1)] = (36));

} else {
var statearr_20707_20762 = state_20667__$1;
(statearr_20707_20762[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20668 === (19))){
var inst_20597 = (state_20667[(7)]);
var inst_20616 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20597);
var state_20667__$1 = state_20667;
var statearr_20708_20763 = state_20667__$1;
(statearr_20708_20763[(2)] = inst_20616);

(statearr_20708_20763[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20668 === (11))){
var inst_20597 = (state_20667[(7)]);
var inst_20601 = (inst_20597 == null);
var inst_20602 = cljs.core.not.call(null,inst_20601);
var state_20667__$1 = state_20667;
if(inst_20602){
var statearr_20709_20764 = state_20667__$1;
(statearr_20709_20764[(1)] = (13));

} else {
var statearr_20710_20765 = state_20667__$1;
(statearr_20710_20765[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20668 === (9))){
var inst_20573 = (state_20667[(8)]);
var state_20667__$1 = state_20667;
var statearr_20711_20766 = state_20667__$1;
(statearr_20711_20766[(2)] = inst_20573);

(statearr_20711_20766[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20668 === (5))){
var state_20667__$1 = state_20667;
var statearr_20712_20767 = state_20667__$1;
(statearr_20712_20767[(2)] = true);

(statearr_20712_20767[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20668 === (14))){
var state_20667__$1 = state_20667;
var statearr_20713_20768 = state_20667__$1;
(statearr_20713_20768[(2)] = false);

(statearr_20713_20768[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20668 === (26))){
var inst_20627 = (state_20667[(10)]);
var inst_20634 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_20627);
var state_20667__$1 = state_20667;
var statearr_20714_20769 = state_20667__$1;
(statearr_20714_20769[(2)] = inst_20634);

(statearr_20714_20769[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20668 === (16))){
var state_20667__$1 = state_20667;
var statearr_20715_20770 = state_20667__$1;
(statearr_20715_20770[(2)] = true);

(statearr_20715_20770[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20668 === (38))){
var inst_20657 = (state_20667[(2)]);
var state_20667__$1 = state_20667;
var statearr_20716_20771 = state_20667__$1;
(statearr_20716_20771[(2)] = inst_20657);

(statearr_20716_20771[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20668 === (30))){
var inst_20621 = (state_20667[(13)]);
var inst_20620 = (state_20667[(9)]);
var inst_20627 = (state_20667[(10)]);
var inst_20644 = cljs.core.empty_QMARK_.call(null,inst_20620);
var inst_20645 = inst_20621.call(null,inst_20627);
var inst_20646 = cljs.core.not.call(null,inst_20645);
var inst_20647 = (inst_20644) && (inst_20646);
var state_20667__$1 = state_20667;
var statearr_20717_20772 = state_20667__$1;
(statearr_20717_20772[(2)] = inst_20647);

(statearr_20717_20772[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20668 === (10))){
var inst_20573 = (state_20667[(8)]);
var inst_20593 = (state_20667[(2)]);
var inst_20594 = cljs.core.get.call(null,inst_20593,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_20595 = cljs.core.get.call(null,inst_20593,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_20596 = cljs.core.get.call(null,inst_20593,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_20597 = inst_20573;
var state_20667__$1 = (function (){var statearr_20718 = state_20667;
(statearr_20718[(16)] = inst_20595);

(statearr_20718[(17)] = inst_20596);

(statearr_20718[(18)] = inst_20594);

(statearr_20718[(7)] = inst_20597);

return statearr_20718;
})();
var statearr_20719_20773 = state_20667__$1;
(statearr_20719_20773[(2)] = null);

(statearr_20719_20773[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20668 === (18))){
var inst_20611 = (state_20667[(2)]);
var state_20667__$1 = state_20667;
var statearr_20720_20774 = state_20667__$1;
(statearr_20720_20774[(2)] = inst_20611);

(statearr_20720_20774[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20668 === (37))){
var state_20667__$1 = state_20667;
var statearr_20721_20775 = state_20667__$1;
(statearr_20721_20775[(2)] = null);

(statearr_20721_20775[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20668 === (8))){
var inst_20573 = (state_20667[(8)]);
var inst_20590 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20573);
var state_20667__$1 = state_20667;
var statearr_20722_20776 = state_20667__$1;
(statearr_20722_20776[(2)] = inst_20590);

(statearr_20722_20776[(1)] = (10));


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
});})(c__19017__auto___20730,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__18905__auto__,c__19017__auto___20730,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__18906__auto__ = null;
var cljs$core$async$mix_$_state_machine__18906__auto____0 = (function (){
var statearr_20726 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20726[(0)] = cljs$core$async$mix_$_state_machine__18906__auto__);

(statearr_20726[(1)] = (1));

return statearr_20726;
});
var cljs$core$async$mix_$_state_machine__18906__auto____1 = (function (state_20667){
while(true){
var ret_value__18907__auto__ = (function (){try{while(true){
var result__18908__auto__ = switch__18905__auto__.call(null,state_20667);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18908__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18908__auto__;
}
break;
}
}catch (e20727){if((e20727 instanceof Object)){
var ex__18909__auto__ = e20727;
var statearr_20728_20777 = state_20667;
(statearr_20728_20777[(5)] = ex__18909__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20667);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20727;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18907__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20778 = state_20667;
state_20667 = G__20778;
continue;
} else {
return ret_value__18907__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__18906__auto__ = function(state_20667){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__18906__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__18906__auto____1.call(this,state_20667);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__18906__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__18906__auto____0;
cljs$core$async$mix_$_state_machine__18906__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__18906__auto____1;
return cljs$core$async$mix_$_state_machine__18906__auto__;
})()
;})(switch__18905__auto__,c__19017__auto___20730,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19019__auto__ = (function (){var statearr_20729 = f__19018__auto__.call(null);
(statearr_20729[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19017__auto___20730);

return statearr_20729;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19019__auto__);
});})(c__19017__auto___20730,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__17519__auto__ = (((p == null))?null:p);
var m__17520__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17519__auto__)]);
if(!((m__17520__auto__ == null))){
return m__17520__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17520__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17520__auto____$1 == null))){
return m__17520__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__17519__auto__ = (((p == null))?null:p);
var m__17520__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17519__auto__)]);
if(!((m__17520__auto__ == null))){
return m__17520__auto__.call(null,p,v,ch);
} else {
var m__17520__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17520__auto____$1 == null))){
return m__17520__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args20779 = [];
var len__17922__auto___20782 = arguments.length;
var i__17923__auto___20783 = (0);
while(true){
if((i__17923__auto___20783 < len__17922__auto___20782)){
args20779.push((arguments[i__17923__auto___20783]));

var G__20784 = (i__17923__auto___20783 + (1));
i__17923__auto___20783 = G__20784;
continue;
} else {
}
break;
}

var G__20781 = args20779.length;
switch (G__20781) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20779.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17519__auto__ = (((p == null))?null:p);
var m__17520__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17519__auto__)]);
if(!((m__17520__auto__ == null))){
return m__17520__auto__.call(null,p);
} else {
var m__17520__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17520__auto____$1 == null))){
return m__17520__auto____$1.call(null,p);
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
var x__17519__auto__ = (((p == null))?null:p);
var m__17520__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17519__auto__)]);
if(!((m__17520__auto__ == null))){
return m__17520__auto__.call(null,p,v);
} else {
var m__17520__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17520__auto____$1 == null))){
return m__17520__auto____$1.call(null,p,v);
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
var args20787 = [];
var len__17922__auto___20912 = arguments.length;
var i__17923__auto___20913 = (0);
while(true){
if((i__17923__auto___20913 < len__17922__auto___20912)){
args20787.push((arguments[i__17923__auto___20913]));

var G__20914 = (i__17923__auto___20913 + (1));
i__17923__auto___20913 = G__20914;
continue;
} else {
}
break;
}

var G__20789 = args20787.length;
switch (G__20789) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20787.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16864__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16864__auto__)){
return or__16864__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16864__auto__,mults){
return (function (p1__20786_SHARP_){
if(cljs.core.truth_(p1__20786_SHARP_.call(null,topic))){
return p1__20786_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__20786_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16864__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async20790 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20790 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta20791){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta20791 = meta20791;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20790.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_20792,meta20791__$1){
var self__ = this;
var _20792__$1 = this;
return (new cljs.core.async.t_cljs$core$async20790(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta20791__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20790.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_20792){
var self__ = this;
var _20792__$1 = this;
return self__.meta20791;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20790.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async20790.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20790.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async20790.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20790.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20790.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20790.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20790.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta20791","meta20791",1605513367,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20790.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20790.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20790";

cljs.core.async.t_cljs$core$async20790.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17462__auto__,writer__17463__auto__,opt__17464__auto__){
return cljs.core._write.call(null,writer__17463__auto__,"cljs.core.async/t_cljs$core$async20790");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async20790 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async20790(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta20791){
return (new cljs.core.async.t_cljs$core$async20790(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta20791));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async20790(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19017__auto___20916 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19017__auto___20916,mults,ensure_mult,p){
return (function (){
var f__19018__auto__ = (function (){var switch__18905__auto__ = ((function (c__19017__auto___20916,mults,ensure_mult,p){
return (function (state_20864){
var state_val_20865 = (state_20864[(1)]);
if((state_val_20865 === (7))){
var inst_20860 = (state_20864[(2)]);
var state_20864__$1 = state_20864;
var statearr_20866_20917 = state_20864__$1;
(statearr_20866_20917[(2)] = inst_20860);

(statearr_20866_20917[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20865 === (20))){
var state_20864__$1 = state_20864;
var statearr_20867_20918 = state_20864__$1;
(statearr_20867_20918[(2)] = null);

(statearr_20867_20918[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20865 === (1))){
var state_20864__$1 = state_20864;
var statearr_20868_20919 = state_20864__$1;
(statearr_20868_20919[(2)] = null);

(statearr_20868_20919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20865 === (24))){
var inst_20843 = (state_20864[(7)]);
var inst_20852 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_20843);
var state_20864__$1 = state_20864;
var statearr_20869_20920 = state_20864__$1;
(statearr_20869_20920[(2)] = inst_20852);

(statearr_20869_20920[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20865 === (4))){
var inst_20795 = (state_20864[(8)]);
var inst_20795__$1 = (state_20864[(2)]);
var inst_20796 = (inst_20795__$1 == null);
var state_20864__$1 = (function (){var statearr_20870 = state_20864;
(statearr_20870[(8)] = inst_20795__$1);

return statearr_20870;
})();
if(cljs.core.truth_(inst_20796)){
var statearr_20871_20921 = state_20864__$1;
(statearr_20871_20921[(1)] = (5));

} else {
var statearr_20872_20922 = state_20864__$1;
(statearr_20872_20922[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20865 === (15))){
var inst_20837 = (state_20864[(2)]);
var state_20864__$1 = state_20864;
var statearr_20873_20923 = state_20864__$1;
(statearr_20873_20923[(2)] = inst_20837);

(statearr_20873_20923[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20865 === (21))){
var inst_20857 = (state_20864[(2)]);
var state_20864__$1 = (function (){var statearr_20874 = state_20864;
(statearr_20874[(9)] = inst_20857);

return statearr_20874;
})();
var statearr_20875_20924 = state_20864__$1;
(statearr_20875_20924[(2)] = null);

(statearr_20875_20924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20865 === (13))){
var inst_20819 = (state_20864[(10)]);
var inst_20821 = cljs.core.chunked_seq_QMARK_.call(null,inst_20819);
var state_20864__$1 = state_20864;
if(inst_20821){
var statearr_20876_20925 = state_20864__$1;
(statearr_20876_20925[(1)] = (16));

} else {
var statearr_20877_20926 = state_20864__$1;
(statearr_20877_20926[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20865 === (22))){
var inst_20849 = (state_20864[(2)]);
var state_20864__$1 = state_20864;
if(cljs.core.truth_(inst_20849)){
var statearr_20878_20927 = state_20864__$1;
(statearr_20878_20927[(1)] = (23));

} else {
var statearr_20879_20928 = state_20864__$1;
(statearr_20879_20928[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20865 === (6))){
var inst_20843 = (state_20864[(7)]);
var inst_20795 = (state_20864[(8)]);
var inst_20845 = (state_20864[(11)]);
var inst_20843__$1 = topic_fn.call(null,inst_20795);
var inst_20844 = cljs.core.deref.call(null,mults);
var inst_20845__$1 = cljs.core.get.call(null,inst_20844,inst_20843__$1);
var state_20864__$1 = (function (){var statearr_20880 = state_20864;
(statearr_20880[(7)] = inst_20843__$1);

(statearr_20880[(11)] = inst_20845__$1);

return statearr_20880;
})();
if(cljs.core.truth_(inst_20845__$1)){
var statearr_20881_20929 = state_20864__$1;
(statearr_20881_20929[(1)] = (19));

} else {
var statearr_20882_20930 = state_20864__$1;
(statearr_20882_20930[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20865 === (25))){
var inst_20854 = (state_20864[(2)]);
var state_20864__$1 = state_20864;
var statearr_20883_20931 = state_20864__$1;
(statearr_20883_20931[(2)] = inst_20854);

(statearr_20883_20931[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20865 === (17))){
var inst_20819 = (state_20864[(10)]);
var inst_20828 = cljs.core.first.call(null,inst_20819);
var inst_20829 = cljs.core.async.muxch_STAR_.call(null,inst_20828);
var inst_20830 = cljs.core.async.close_BANG_.call(null,inst_20829);
var inst_20831 = cljs.core.next.call(null,inst_20819);
var inst_20805 = inst_20831;
var inst_20806 = null;
var inst_20807 = (0);
var inst_20808 = (0);
var state_20864__$1 = (function (){var statearr_20884 = state_20864;
(statearr_20884[(12)] = inst_20806);

(statearr_20884[(13)] = inst_20807);

(statearr_20884[(14)] = inst_20830);

(statearr_20884[(15)] = inst_20808);

(statearr_20884[(16)] = inst_20805);

return statearr_20884;
})();
var statearr_20885_20932 = state_20864__$1;
(statearr_20885_20932[(2)] = null);

(statearr_20885_20932[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20865 === (3))){
var inst_20862 = (state_20864[(2)]);
var state_20864__$1 = state_20864;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20864__$1,inst_20862);
} else {
if((state_val_20865 === (12))){
var inst_20839 = (state_20864[(2)]);
var state_20864__$1 = state_20864;
var statearr_20886_20933 = state_20864__$1;
(statearr_20886_20933[(2)] = inst_20839);

(statearr_20886_20933[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20865 === (2))){
var state_20864__$1 = state_20864;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20864__$1,(4),ch);
} else {
if((state_val_20865 === (23))){
var state_20864__$1 = state_20864;
var statearr_20887_20934 = state_20864__$1;
(statearr_20887_20934[(2)] = null);

(statearr_20887_20934[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20865 === (19))){
var inst_20795 = (state_20864[(8)]);
var inst_20845 = (state_20864[(11)]);
var inst_20847 = cljs.core.async.muxch_STAR_.call(null,inst_20845);
var state_20864__$1 = state_20864;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20864__$1,(22),inst_20847,inst_20795);
} else {
if((state_val_20865 === (11))){
var inst_20819 = (state_20864[(10)]);
var inst_20805 = (state_20864[(16)]);
var inst_20819__$1 = cljs.core.seq.call(null,inst_20805);
var state_20864__$1 = (function (){var statearr_20888 = state_20864;
(statearr_20888[(10)] = inst_20819__$1);

return statearr_20888;
})();
if(inst_20819__$1){
var statearr_20889_20935 = state_20864__$1;
(statearr_20889_20935[(1)] = (13));

} else {
var statearr_20890_20936 = state_20864__$1;
(statearr_20890_20936[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20865 === (9))){
var inst_20841 = (state_20864[(2)]);
var state_20864__$1 = state_20864;
var statearr_20891_20937 = state_20864__$1;
(statearr_20891_20937[(2)] = inst_20841);

(statearr_20891_20937[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20865 === (5))){
var inst_20802 = cljs.core.deref.call(null,mults);
var inst_20803 = cljs.core.vals.call(null,inst_20802);
var inst_20804 = cljs.core.seq.call(null,inst_20803);
var inst_20805 = inst_20804;
var inst_20806 = null;
var inst_20807 = (0);
var inst_20808 = (0);
var state_20864__$1 = (function (){var statearr_20892 = state_20864;
(statearr_20892[(12)] = inst_20806);

(statearr_20892[(13)] = inst_20807);

(statearr_20892[(15)] = inst_20808);

(statearr_20892[(16)] = inst_20805);

return statearr_20892;
})();
var statearr_20893_20938 = state_20864__$1;
(statearr_20893_20938[(2)] = null);

(statearr_20893_20938[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20865 === (14))){
var state_20864__$1 = state_20864;
var statearr_20897_20939 = state_20864__$1;
(statearr_20897_20939[(2)] = null);

(statearr_20897_20939[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20865 === (16))){
var inst_20819 = (state_20864[(10)]);
var inst_20823 = cljs.core.chunk_first.call(null,inst_20819);
var inst_20824 = cljs.core.chunk_rest.call(null,inst_20819);
var inst_20825 = cljs.core.count.call(null,inst_20823);
var inst_20805 = inst_20824;
var inst_20806 = inst_20823;
var inst_20807 = inst_20825;
var inst_20808 = (0);
var state_20864__$1 = (function (){var statearr_20898 = state_20864;
(statearr_20898[(12)] = inst_20806);

(statearr_20898[(13)] = inst_20807);

(statearr_20898[(15)] = inst_20808);

(statearr_20898[(16)] = inst_20805);

return statearr_20898;
})();
var statearr_20899_20940 = state_20864__$1;
(statearr_20899_20940[(2)] = null);

(statearr_20899_20940[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20865 === (10))){
var inst_20806 = (state_20864[(12)]);
var inst_20807 = (state_20864[(13)]);
var inst_20808 = (state_20864[(15)]);
var inst_20805 = (state_20864[(16)]);
var inst_20813 = cljs.core._nth.call(null,inst_20806,inst_20808);
var inst_20814 = cljs.core.async.muxch_STAR_.call(null,inst_20813);
var inst_20815 = cljs.core.async.close_BANG_.call(null,inst_20814);
var inst_20816 = (inst_20808 + (1));
var tmp20894 = inst_20806;
var tmp20895 = inst_20807;
var tmp20896 = inst_20805;
var inst_20805__$1 = tmp20896;
var inst_20806__$1 = tmp20894;
var inst_20807__$1 = tmp20895;
var inst_20808__$1 = inst_20816;
var state_20864__$1 = (function (){var statearr_20900 = state_20864;
(statearr_20900[(12)] = inst_20806__$1);

(statearr_20900[(13)] = inst_20807__$1);

(statearr_20900[(15)] = inst_20808__$1);

(statearr_20900[(17)] = inst_20815);

(statearr_20900[(16)] = inst_20805__$1);

return statearr_20900;
})();
var statearr_20901_20941 = state_20864__$1;
(statearr_20901_20941[(2)] = null);

(statearr_20901_20941[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20865 === (18))){
var inst_20834 = (state_20864[(2)]);
var state_20864__$1 = state_20864;
var statearr_20902_20942 = state_20864__$1;
(statearr_20902_20942[(2)] = inst_20834);

(statearr_20902_20942[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20865 === (8))){
var inst_20807 = (state_20864[(13)]);
var inst_20808 = (state_20864[(15)]);
var inst_20810 = (inst_20808 < inst_20807);
var inst_20811 = inst_20810;
var state_20864__$1 = state_20864;
if(cljs.core.truth_(inst_20811)){
var statearr_20903_20943 = state_20864__$1;
(statearr_20903_20943[(1)] = (10));

} else {
var statearr_20904_20944 = state_20864__$1;
(statearr_20904_20944[(1)] = (11));

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
});})(c__19017__auto___20916,mults,ensure_mult,p))
;
return ((function (switch__18905__auto__,c__19017__auto___20916,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__18906__auto__ = null;
var cljs$core$async$state_machine__18906__auto____0 = (function (){
var statearr_20908 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20908[(0)] = cljs$core$async$state_machine__18906__auto__);

(statearr_20908[(1)] = (1));

return statearr_20908;
});
var cljs$core$async$state_machine__18906__auto____1 = (function (state_20864){
while(true){
var ret_value__18907__auto__ = (function (){try{while(true){
var result__18908__auto__ = switch__18905__auto__.call(null,state_20864);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18908__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18908__auto__;
}
break;
}
}catch (e20909){if((e20909 instanceof Object)){
var ex__18909__auto__ = e20909;
var statearr_20910_20945 = state_20864;
(statearr_20910_20945[(5)] = ex__18909__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20864);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20909;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18907__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20946 = state_20864;
state_20864 = G__20946;
continue;
} else {
return ret_value__18907__auto__;
}
break;
}
});
cljs$core$async$state_machine__18906__auto__ = function(state_20864){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18906__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18906__auto____1.call(this,state_20864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18906__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18906__auto____0;
cljs$core$async$state_machine__18906__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18906__auto____1;
return cljs$core$async$state_machine__18906__auto__;
})()
;})(switch__18905__auto__,c__19017__auto___20916,mults,ensure_mult,p))
})();
var state__19019__auto__ = (function (){var statearr_20911 = f__19018__auto__.call(null);
(statearr_20911[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19017__auto___20916);

return statearr_20911;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19019__auto__);
});})(c__19017__auto___20916,mults,ensure_mult,p))
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
var args20947 = [];
var len__17922__auto___20950 = arguments.length;
var i__17923__auto___20951 = (0);
while(true){
if((i__17923__auto___20951 < len__17922__auto___20950)){
args20947.push((arguments[i__17923__auto___20951]));

var G__20952 = (i__17923__auto___20951 + (1));
i__17923__auto___20951 = G__20952;
continue;
} else {
}
break;
}

var G__20949 = args20947.length;
switch (G__20949) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20947.length)].join('')));

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
var args20954 = [];
var len__17922__auto___20957 = arguments.length;
var i__17923__auto___20958 = (0);
while(true){
if((i__17923__auto___20958 < len__17922__auto___20957)){
args20954.push((arguments[i__17923__auto___20958]));

var G__20959 = (i__17923__auto___20958 + (1));
i__17923__auto___20958 = G__20959;
continue;
} else {
}
break;
}

var G__20956 = args20954.length;
switch (G__20956) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20954.length)].join('')));

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
var args20961 = [];
var len__17922__auto___21032 = arguments.length;
var i__17923__auto___21033 = (0);
while(true){
if((i__17923__auto___21033 < len__17922__auto___21032)){
args20961.push((arguments[i__17923__auto___21033]));

var G__21034 = (i__17923__auto___21033 + (1));
i__17923__auto___21033 = G__21034;
continue;
} else {
}
break;
}

var G__20963 = args20961.length;
switch (G__20963) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20961.length)].join('')));

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
var c__19017__auto___21036 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19017__auto___21036,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19018__auto__ = (function (){var switch__18905__auto__ = ((function (c__19017__auto___21036,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_21002){
var state_val_21003 = (state_21002[(1)]);
if((state_val_21003 === (7))){
var state_21002__$1 = state_21002;
var statearr_21004_21037 = state_21002__$1;
(statearr_21004_21037[(2)] = null);

(statearr_21004_21037[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21003 === (1))){
var state_21002__$1 = state_21002;
var statearr_21005_21038 = state_21002__$1;
(statearr_21005_21038[(2)] = null);

(statearr_21005_21038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21003 === (4))){
var inst_20966 = (state_21002[(7)]);
var inst_20968 = (inst_20966 < cnt);
var state_21002__$1 = state_21002;
if(cljs.core.truth_(inst_20968)){
var statearr_21006_21039 = state_21002__$1;
(statearr_21006_21039[(1)] = (6));

} else {
var statearr_21007_21040 = state_21002__$1;
(statearr_21007_21040[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21003 === (15))){
var inst_20998 = (state_21002[(2)]);
var state_21002__$1 = state_21002;
var statearr_21008_21041 = state_21002__$1;
(statearr_21008_21041[(2)] = inst_20998);

(statearr_21008_21041[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21003 === (13))){
var inst_20991 = cljs.core.async.close_BANG_.call(null,out);
var state_21002__$1 = state_21002;
var statearr_21009_21042 = state_21002__$1;
(statearr_21009_21042[(2)] = inst_20991);

(statearr_21009_21042[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21003 === (6))){
var state_21002__$1 = state_21002;
var statearr_21010_21043 = state_21002__$1;
(statearr_21010_21043[(2)] = null);

(statearr_21010_21043[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21003 === (3))){
var inst_21000 = (state_21002[(2)]);
var state_21002__$1 = state_21002;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21002__$1,inst_21000);
} else {
if((state_val_21003 === (12))){
var inst_20988 = (state_21002[(8)]);
var inst_20988__$1 = (state_21002[(2)]);
var inst_20989 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_20988__$1);
var state_21002__$1 = (function (){var statearr_21011 = state_21002;
(statearr_21011[(8)] = inst_20988__$1);

return statearr_21011;
})();
if(cljs.core.truth_(inst_20989)){
var statearr_21012_21044 = state_21002__$1;
(statearr_21012_21044[(1)] = (13));

} else {
var statearr_21013_21045 = state_21002__$1;
(statearr_21013_21045[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21003 === (2))){
var inst_20965 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_20966 = (0);
var state_21002__$1 = (function (){var statearr_21014 = state_21002;
(statearr_21014[(7)] = inst_20966);

(statearr_21014[(9)] = inst_20965);

return statearr_21014;
})();
var statearr_21015_21046 = state_21002__$1;
(statearr_21015_21046[(2)] = null);

(statearr_21015_21046[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21003 === (11))){
var inst_20966 = (state_21002[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_21002,(10),Object,null,(9));
var inst_20975 = chs__$1.call(null,inst_20966);
var inst_20976 = done.call(null,inst_20966);
var inst_20977 = cljs.core.async.take_BANG_.call(null,inst_20975,inst_20976);
var state_21002__$1 = state_21002;
var statearr_21016_21047 = state_21002__$1;
(statearr_21016_21047[(2)] = inst_20977);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21002__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21003 === (9))){
var inst_20966 = (state_21002[(7)]);
var inst_20979 = (state_21002[(2)]);
var inst_20980 = (inst_20966 + (1));
var inst_20966__$1 = inst_20980;
var state_21002__$1 = (function (){var statearr_21017 = state_21002;
(statearr_21017[(7)] = inst_20966__$1);

(statearr_21017[(10)] = inst_20979);

return statearr_21017;
})();
var statearr_21018_21048 = state_21002__$1;
(statearr_21018_21048[(2)] = null);

(statearr_21018_21048[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21003 === (5))){
var inst_20986 = (state_21002[(2)]);
var state_21002__$1 = (function (){var statearr_21019 = state_21002;
(statearr_21019[(11)] = inst_20986);

return statearr_21019;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21002__$1,(12),dchan);
} else {
if((state_val_21003 === (14))){
var inst_20988 = (state_21002[(8)]);
var inst_20993 = cljs.core.apply.call(null,f,inst_20988);
var state_21002__$1 = state_21002;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21002__$1,(16),out,inst_20993);
} else {
if((state_val_21003 === (16))){
var inst_20995 = (state_21002[(2)]);
var state_21002__$1 = (function (){var statearr_21020 = state_21002;
(statearr_21020[(12)] = inst_20995);

return statearr_21020;
})();
var statearr_21021_21049 = state_21002__$1;
(statearr_21021_21049[(2)] = null);

(statearr_21021_21049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21003 === (10))){
var inst_20970 = (state_21002[(2)]);
var inst_20971 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_21002__$1 = (function (){var statearr_21022 = state_21002;
(statearr_21022[(13)] = inst_20970);

return statearr_21022;
})();
var statearr_21023_21050 = state_21002__$1;
(statearr_21023_21050[(2)] = inst_20971);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21002__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21003 === (8))){
var inst_20984 = (state_21002[(2)]);
var state_21002__$1 = state_21002;
var statearr_21024_21051 = state_21002__$1;
(statearr_21024_21051[(2)] = inst_20984);

(statearr_21024_21051[(1)] = (5));


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
});})(c__19017__auto___21036,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__18905__auto__,c__19017__auto___21036,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__18906__auto__ = null;
var cljs$core$async$state_machine__18906__auto____0 = (function (){
var statearr_21028 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21028[(0)] = cljs$core$async$state_machine__18906__auto__);

(statearr_21028[(1)] = (1));

return statearr_21028;
});
var cljs$core$async$state_machine__18906__auto____1 = (function (state_21002){
while(true){
var ret_value__18907__auto__ = (function (){try{while(true){
var result__18908__auto__ = switch__18905__auto__.call(null,state_21002);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18908__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18908__auto__;
}
break;
}
}catch (e21029){if((e21029 instanceof Object)){
var ex__18909__auto__ = e21029;
var statearr_21030_21052 = state_21002;
(statearr_21030_21052[(5)] = ex__18909__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21002);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21029;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18907__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21053 = state_21002;
state_21002 = G__21053;
continue;
} else {
return ret_value__18907__auto__;
}
break;
}
});
cljs$core$async$state_machine__18906__auto__ = function(state_21002){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18906__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18906__auto____1.call(this,state_21002);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18906__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18906__auto____0;
cljs$core$async$state_machine__18906__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18906__auto____1;
return cljs$core$async$state_machine__18906__auto__;
})()
;})(switch__18905__auto__,c__19017__auto___21036,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19019__auto__ = (function (){var statearr_21031 = f__19018__auto__.call(null);
(statearr_21031[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19017__auto___21036);

return statearr_21031;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19019__auto__);
});})(c__19017__auto___21036,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args21055 = [];
var len__17922__auto___21111 = arguments.length;
var i__17923__auto___21112 = (0);
while(true){
if((i__17923__auto___21112 < len__17922__auto___21111)){
args21055.push((arguments[i__17923__auto___21112]));

var G__21113 = (i__17923__auto___21112 + (1));
i__17923__auto___21112 = G__21113;
continue;
} else {
}
break;
}

var G__21057 = args21055.length;
switch (G__21057) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21055.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19017__auto___21115 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19017__auto___21115,out){
return (function (){
var f__19018__auto__ = (function (){var switch__18905__auto__ = ((function (c__19017__auto___21115,out){
return (function (state_21087){
var state_val_21088 = (state_21087[(1)]);
if((state_val_21088 === (7))){
var inst_21066 = (state_21087[(7)]);
var inst_21067 = (state_21087[(8)]);
var inst_21066__$1 = (state_21087[(2)]);
var inst_21067__$1 = cljs.core.nth.call(null,inst_21066__$1,(0),null);
var inst_21068 = cljs.core.nth.call(null,inst_21066__$1,(1),null);
var inst_21069 = (inst_21067__$1 == null);
var state_21087__$1 = (function (){var statearr_21089 = state_21087;
(statearr_21089[(9)] = inst_21068);

(statearr_21089[(7)] = inst_21066__$1);

(statearr_21089[(8)] = inst_21067__$1);

return statearr_21089;
})();
if(cljs.core.truth_(inst_21069)){
var statearr_21090_21116 = state_21087__$1;
(statearr_21090_21116[(1)] = (8));

} else {
var statearr_21091_21117 = state_21087__$1;
(statearr_21091_21117[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21088 === (1))){
var inst_21058 = cljs.core.vec.call(null,chs);
var inst_21059 = inst_21058;
var state_21087__$1 = (function (){var statearr_21092 = state_21087;
(statearr_21092[(10)] = inst_21059);

return statearr_21092;
})();
var statearr_21093_21118 = state_21087__$1;
(statearr_21093_21118[(2)] = null);

(statearr_21093_21118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21088 === (4))){
var inst_21059 = (state_21087[(10)]);
var state_21087__$1 = state_21087;
return cljs.core.async.ioc_alts_BANG_.call(null,state_21087__$1,(7),inst_21059);
} else {
if((state_val_21088 === (6))){
var inst_21083 = (state_21087[(2)]);
var state_21087__$1 = state_21087;
var statearr_21094_21119 = state_21087__$1;
(statearr_21094_21119[(2)] = inst_21083);

(statearr_21094_21119[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21088 === (3))){
var inst_21085 = (state_21087[(2)]);
var state_21087__$1 = state_21087;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21087__$1,inst_21085);
} else {
if((state_val_21088 === (2))){
var inst_21059 = (state_21087[(10)]);
var inst_21061 = cljs.core.count.call(null,inst_21059);
var inst_21062 = (inst_21061 > (0));
var state_21087__$1 = state_21087;
if(cljs.core.truth_(inst_21062)){
var statearr_21096_21120 = state_21087__$1;
(statearr_21096_21120[(1)] = (4));

} else {
var statearr_21097_21121 = state_21087__$1;
(statearr_21097_21121[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21088 === (11))){
var inst_21059 = (state_21087[(10)]);
var inst_21076 = (state_21087[(2)]);
var tmp21095 = inst_21059;
var inst_21059__$1 = tmp21095;
var state_21087__$1 = (function (){var statearr_21098 = state_21087;
(statearr_21098[(10)] = inst_21059__$1);

(statearr_21098[(11)] = inst_21076);

return statearr_21098;
})();
var statearr_21099_21122 = state_21087__$1;
(statearr_21099_21122[(2)] = null);

(statearr_21099_21122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21088 === (9))){
var inst_21067 = (state_21087[(8)]);
var state_21087__$1 = state_21087;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21087__$1,(11),out,inst_21067);
} else {
if((state_val_21088 === (5))){
var inst_21081 = cljs.core.async.close_BANG_.call(null,out);
var state_21087__$1 = state_21087;
var statearr_21100_21123 = state_21087__$1;
(statearr_21100_21123[(2)] = inst_21081);

(statearr_21100_21123[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21088 === (10))){
var inst_21079 = (state_21087[(2)]);
var state_21087__$1 = state_21087;
var statearr_21101_21124 = state_21087__$1;
(statearr_21101_21124[(2)] = inst_21079);

(statearr_21101_21124[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21088 === (8))){
var inst_21059 = (state_21087[(10)]);
var inst_21068 = (state_21087[(9)]);
var inst_21066 = (state_21087[(7)]);
var inst_21067 = (state_21087[(8)]);
var inst_21071 = (function (){var cs = inst_21059;
var vec__21064 = inst_21066;
var v = inst_21067;
var c = inst_21068;
return ((function (cs,vec__21064,v,c,inst_21059,inst_21068,inst_21066,inst_21067,state_val_21088,c__19017__auto___21115,out){
return (function (p1__21054_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__21054_SHARP_);
});
;})(cs,vec__21064,v,c,inst_21059,inst_21068,inst_21066,inst_21067,state_val_21088,c__19017__auto___21115,out))
})();
var inst_21072 = cljs.core.filterv.call(null,inst_21071,inst_21059);
var inst_21059__$1 = inst_21072;
var state_21087__$1 = (function (){var statearr_21102 = state_21087;
(statearr_21102[(10)] = inst_21059__$1);

return statearr_21102;
})();
var statearr_21103_21125 = state_21087__$1;
(statearr_21103_21125[(2)] = null);

(statearr_21103_21125[(1)] = (2));


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
});})(c__19017__auto___21115,out))
;
return ((function (switch__18905__auto__,c__19017__auto___21115,out){
return (function() {
var cljs$core$async$state_machine__18906__auto__ = null;
var cljs$core$async$state_machine__18906__auto____0 = (function (){
var statearr_21107 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21107[(0)] = cljs$core$async$state_machine__18906__auto__);

(statearr_21107[(1)] = (1));

return statearr_21107;
});
var cljs$core$async$state_machine__18906__auto____1 = (function (state_21087){
while(true){
var ret_value__18907__auto__ = (function (){try{while(true){
var result__18908__auto__ = switch__18905__auto__.call(null,state_21087);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18908__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18908__auto__;
}
break;
}
}catch (e21108){if((e21108 instanceof Object)){
var ex__18909__auto__ = e21108;
var statearr_21109_21126 = state_21087;
(statearr_21109_21126[(5)] = ex__18909__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21087);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21108;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18907__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21127 = state_21087;
state_21087 = G__21127;
continue;
} else {
return ret_value__18907__auto__;
}
break;
}
});
cljs$core$async$state_machine__18906__auto__ = function(state_21087){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18906__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18906__auto____1.call(this,state_21087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18906__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18906__auto____0;
cljs$core$async$state_machine__18906__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18906__auto____1;
return cljs$core$async$state_machine__18906__auto__;
})()
;})(switch__18905__auto__,c__19017__auto___21115,out))
})();
var state__19019__auto__ = (function (){var statearr_21110 = f__19018__auto__.call(null);
(statearr_21110[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19017__auto___21115);

return statearr_21110;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19019__auto__);
});})(c__19017__auto___21115,out))
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
var args21128 = [];
var len__17922__auto___21177 = arguments.length;
var i__17923__auto___21178 = (0);
while(true){
if((i__17923__auto___21178 < len__17922__auto___21177)){
args21128.push((arguments[i__17923__auto___21178]));

var G__21179 = (i__17923__auto___21178 + (1));
i__17923__auto___21178 = G__21179;
continue;
} else {
}
break;
}

var G__21130 = args21128.length;
switch (G__21130) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21128.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19017__auto___21181 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19017__auto___21181,out){
return (function (){
var f__19018__auto__ = (function (){var switch__18905__auto__ = ((function (c__19017__auto___21181,out){
return (function (state_21154){
var state_val_21155 = (state_21154[(1)]);
if((state_val_21155 === (7))){
var inst_21136 = (state_21154[(7)]);
var inst_21136__$1 = (state_21154[(2)]);
var inst_21137 = (inst_21136__$1 == null);
var inst_21138 = cljs.core.not.call(null,inst_21137);
var state_21154__$1 = (function (){var statearr_21156 = state_21154;
(statearr_21156[(7)] = inst_21136__$1);

return statearr_21156;
})();
if(inst_21138){
var statearr_21157_21182 = state_21154__$1;
(statearr_21157_21182[(1)] = (8));

} else {
var statearr_21158_21183 = state_21154__$1;
(statearr_21158_21183[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21155 === (1))){
var inst_21131 = (0);
var state_21154__$1 = (function (){var statearr_21159 = state_21154;
(statearr_21159[(8)] = inst_21131);

return statearr_21159;
})();
var statearr_21160_21184 = state_21154__$1;
(statearr_21160_21184[(2)] = null);

(statearr_21160_21184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21155 === (4))){
var state_21154__$1 = state_21154;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21154__$1,(7),ch);
} else {
if((state_val_21155 === (6))){
var inst_21149 = (state_21154[(2)]);
var state_21154__$1 = state_21154;
var statearr_21161_21185 = state_21154__$1;
(statearr_21161_21185[(2)] = inst_21149);

(statearr_21161_21185[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21155 === (3))){
var inst_21151 = (state_21154[(2)]);
var inst_21152 = cljs.core.async.close_BANG_.call(null,out);
var state_21154__$1 = (function (){var statearr_21162 = state_21154;
(statearr_21162[(9)] = inst_21151);

return statearr_21162;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21154__$1,inst_21152);
} else {
if((state_val_21155 === (2))){
var inst_21131 = (state_21154[(8)]);
var inst_21133 = (inst_21131 < n);
var state_21154__$1 = state_21154;
if(cljs.core.truth_(inst_21133)){
var statearr_21163_21186 = state_21154__$1;
(statearr_21163_21186[(1)] = (4));

} else {
var statearr_21164_21187 = state_21154__$1;
(statearr_21164_21187[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21155 === (11))){
var inst_21131 = (state_21154[(8)]);
var inst_21141 = (state_21154[(2)]);
var inst_21142 = (inst_21131 + (1));
var inst_21131__$1 = inst_21142;
var state_21154__$1 = (function (){var statearr_21165 = state_21154;
(statearr_21165[(8)] = inst_21131__$1);

(statearr_21165[(10)] = inst_21141);

return statearr_21165;
})();
var statearr_21166_21188 = state_21154__$1;
(statearr_21166_21188[(2)] = null);

(statearr_21166_21188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21155 === (9))){
var state_21154__$1 = state_21154;
var statearr_21167_21189 = state_21154__$1;
(statearr_21167_21189[(2)] = null);

(statearr_21167_21189[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21155 === (5))){
var state_21154__$1 = state_21154;
var statearr_21168_21190 = state_21154__$1;
(statearr_21168_21190[(2)] = null);

(statearr_21168_21190[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21155 === (10))){
var inst_21146 = (state_21154[(2)]);
var state_21154__$1 = state_21154;
var statearr_21169_21191 = state_21154__$1;
(statearr_21169_21191[(2)] = inst_21146);

(statearr_21169_21191[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21155 === (8))){
var inst_21136 = (state_21154[(7)]);
var state_21154__$1 = state_21154;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21154__$1,(11),out,inst_21136);
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
});})(c__19017__auto___21181,out))
;
return ((function (switch__18905__auto__,c__19017__auto___21181,out){
return (function() {
var cljs$core$async$state_machine__18906__auto__ = null;
var cljs$core$async$state_machine__18906__auto____0 = (function (){
var statearr_21173 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21173[(0)] = cljs$core$async$state_machine__18906__auto__);

(statearr_21173[(1)] = (1));

return statearr_21173;
});
var cljs$core$async$state_machine__18906__auto____1 = (function (state_21154){
while(true){
var ret_value__18907__auto__ = (function (){try{while(true){
var result__18908__auto__ = switch__18905__auto__.call(null,state_21154);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18908__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18908__auto__;
}
break;
}
}catch (e21174){if((e21174 instanceof Object)){
var ex__18909__auto__ = e21174;
var statearr_21175_21192 = state_21154;
(statearr_21175_21192[(5)] = ex__18909__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21154);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21174;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18907__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21193 = state_21154;
state_21154 = G__21193;
continue;
} else {
return ret_value__18907__auto__;
}
break;
}
});
cljs$core$async$state_machine__18906__auto__ = function(state_21154){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18906__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18906__auto____1.call(this,state_21154);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18906__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18906__auto____0;
cljs$core$async$state_machine__18906__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18906__auto____1;
return cljs$core$async$state_machine__18906__auto__;
})()
;})(switch__18905__auto__,c__19017__auto___21181,out))
})();
var state__19019__auto__ = (function (){var statearr_21176 = f__19018__auto__.call(null);
(statearr_21176[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19017__auto___21181);

return statearr_21176;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19019__auto__);
});})(c__19017__auto___21181,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async21201 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21201 = (function (map_LT_,f,ch,meta21202){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta21202 = meta21202;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21201.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21203,meta21202__$1){
var self__ = this;
var _21203__$1 = this;
return (new cljs.core.async.t_cljs$core$async21201(self__.map_LT_,self__.f,self__.ch,meta21202__$1));
});

cljs.core.async.t_cljs$core$async21201.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21203){
var self__ = this;
var _21203__$1 = this;
return self__.meta21202;
});

cljs.core.async.t_cljs$core$async21201.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async21201.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21201.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21201.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async21201.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async21204 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21204 = (function (map_LT_,f,ch,meta21202,_,fn1,meta21205){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta21202 = meta21202;
this._ = _;
this.fn1 = fn1;
this.meta21205 = meta21205;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21204.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_21206,meta21205__$1){
var self__ = this;
var _21206__$1 = this;
return (new cljs.core.async.t_cljs$core$async21204(self__.map_LT_,self__.f,self__.ch,self__.meta21202,self__._,self__.fn1,meta21205__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async21204.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_21206){
var self__ = this;
var _21206__$1 = this;
return self__.meta21205;
});})(___$1))
;

cljs.core.async.t_cljs$core$async21204.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21204.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async21204.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async21204.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__21194_SHARP_){
return f1.call(null,(((p1__21194_SHARP_ == null))?null:self__.f.call(null,p1__21194_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async21204.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21202","meta21202",-1351586068,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async21201","cljs.core.async/t_cljs$core$async21201",-503718293,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta21205","meta21205",-1574348046,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async21204.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21204.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21204";

cljs.core.async.t_cljs$core$async21204.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17462__auto__,writer__17463__auto__,opt__17464__auto__){
return cljs.core._write.call(null,writer__17463__auto__,"cljs.core.async/t_cljs$core$async21204");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async21204 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async21204(map_LT___$1,f__$1,ch__$1,meta21202__$1,___$2,fn1__$1,meta21205){
return (new cljs.core.async.t_cljs$core$async21204(map_LT___$1,f__$1,ch__$1,meta21202__$1,___$2,fn1__$1,meta21205));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async21204(self__.map_LT_,self__.f,self__.ch,self__.meta21202,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16852__auto__ = ret;
if(cljs.core.truth_(and__16852__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16852__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async21201.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async21201.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async21201.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21202","meta21202",-1351586068,null)], null);
});

cljs.core.async.t_cljs$core$async21201.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21201.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21201";

cljs.core.async.t_cljs$core$async21201.cljs$lang$ctorPrWriter = (function (this__17462__auto__,writer__17463__auto__,opt__17464__auto__){
return cljs.core._write.call(null,writer__17463__auto__,"cljs.core.async/t_cljs$core$async21201");
});

cljs.core.async.__GT_t_cljs$core$async21201 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async21201(map_LT___$1,f__$1,ch__$1,meta21202){
return (new cljs.core.async.t_cljs$core$async21201(map_LT___$1,f__$1,ch__$1,meta21202));
});

}

return (new cljs.core.async.t_cljs$core$async21201(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async21210 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21210 = (function (map_GT_,f,ch,meta21211){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta21211 = meta21211;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21210.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21212,meta21211__$1){
var self__ = this;
var _21212__$1 = this;
return (new cljs.core.async.t_cljs$core$async21210(self__.map_GT_,self__.f,self__.ch,meta21211__$1));
});

cljs.core.async.t_cljs$core$async21210.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21212){
var self__ = this;
var _21212__$1 = this;
return self__.meta21211;
});

cljs.core.async.t_cljs$core$async21210.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async21210.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21210.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async21210.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async21210.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async21210.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async21210.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21211","meta21211",-1447686754,null)], null);
});

cljs.core.async.t_cljs$core$async21210.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21210.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21210";

cljs.core.async.t_cljs$core$async21210.cljs$lang$ctorPrWriter = (function (this__17462__auto__,writer__17463__auto__,opt__17464__auto__){
return cljs.core._write.call(null,writer__17463__auto__,"cljs.core.async/t_cljs$core$async21210");
});

cljs.core.async.__GT_t_cljs$core$async21210 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async21210(map_GT___$1,f__$1,ch__$1,meta21211){
return (new cljs.core.async.t_cljs$core$async21210(map_GT___$1,f__$1,ch__$1,meta21211));
});

}

return (new cljs.core.async.t_cljs$core$async21210(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async21216 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21216 = (function (filter_GT_,p,ch,meta21217){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta21217 = meta21217;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21216.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21218,meta21217__$1){
var self__ = this;
var _21218__$1 = this;
return (new cljs.core.async.t_cljs$core$async21216(self__.filter_GT_,self__.p,self__.ch,meta21217__$1));
});

cljs.core.async.t_cljs$core$async21216.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21218){
var self__ = this;
var _21218__$1 = this;
return self__.meta21217;
});

cljs.core.async.t_cljs$core$async21216.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async21216.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21216.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21216.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async21216.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async21216.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async21216.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async21216.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21217","meta21217",-2129746716,null)], null);
});

cljs.core.async.t_cljs$core$async21216.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21216.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21216";

cljs.core.async.t_cljs$core$async21216.cljs$lang$ctorPrWriter = (function (this__17462__auto__,writer__17463__auto__,opt__17464__auto__){
return cljs.core._write.call(null,writer__17463__auto__,"cljs.core.async/t_cljs$core$async21216");
});

cljs.core.async.__GT_t_cljs$core$async21216 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async21216(filter_GT___$1,p__$1,ch__$1,meta21217){
return (new cljs.core.async.t_cljs$core$async21216(filter_GT___$1,p__$1,ch__$1,meta21217));
});

}

return (new cljs.core.async.t_cljs$core$async21216(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args21219 = [];
var len__17922__auto___21263 = arguments.length;
var i__17923__auto___21264 = (0);
while(true){
if((i__17923__auto___21264 < len__17922__auto___21263)){
args21219.push((arguments[i__17923__auto___21264]));

var G__21265 = (i__17923__auto___21264 + (1));
i__17923__auto___21264 = G__21265;
continue;
} else {
}
break;
}

var G__21221 = args21219.length;
switch (G__21221) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21219.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19017__auto___21267 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19017__auto___21267,out){
return (function (){
var f__19018__auto__ = (function (){var switch__18905__auto__ = ((function (c__19017__auto___21267,out){
return (function (state_21242){
var state_val_21243 = (state_21242[(1)]);
if((state_val_21243 === (7))){
var inst_21238 = (state_21242[(2)]);
var state_21242__$1 = state_21242;
var statearr_21244_21268 = state_21242__$1;
(statearr_21244_21268[(2)] = inst_21238);

(statearr_21244_21268[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21243 === (1))){
var state_21242__$1 = state_21242;
var statearr_21245_21269 = state_21242__$1;
(statearr_21245_21269[(2)] = null);

(statearr_21245_21269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21243 === (4))){
var inst_21224 = (state_21242[(7)]);
var inst_21224__$1 = (state_21242[(2)]);
var inst_21225 = (inst_21224__$1 == null);
var state_21242__$1 = (function (){var statearr_21246 = state_21242;
(statearr_21246[(7)] = inst_21224__$1);

return statearr_21246;
})();
if(cljs.core.truth_(inst_21225)){
var statearr_21247_21270 = state_21242__$1;
(statearr_21247_21270[(1)] = (5));

} else {
var statearr_21248_21271 = state_21242__$1;
(statearr_21248_21271[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21243 === (6))){
var inst_21224 = (state_21242[(7)]);
var inst_21229 = p.call(null,inst_21224);
var state_21242__$1 = state_21242;
if(cljs.core.truth_(inst_21229)){
var statearr_21249_21272 = state_21242__$1;
(statearr_21249_21272[(1)] = (8));

} else {
var statearr_21250_21273 = state_21242__$1;
(statearr_21250_21273[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21243 === (3))){
var inst_21240 = (state_21242[(2)]);
var state_21242__$1 = state_21242;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21242__$1,inst_21240);
} else {
if((state_val_21243 === (2))){
var state_21242__$1 = state_21242;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21242__$1,(4),ch);
} else {
if((state_val_21243 === (11))){
var inst_21232 = (state_21242[(2)]);
var state_21242__$1 = state_21242;
var statearr_21251_21274 = state_21242__$1;
(statearr_21251_21274[(2)] = inst_21232);

(statearr_21251_21274[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21243 === (9))){
var state_21242__$1 = state_21242;
var statearr_21252_21275 = state_21242__$1;
(statearr_21252_21275[(2)] = null);

(statearr_21252_21275[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21243 === (5))){
var inst_21227 = cljs.core.async.close_BANG_.call(null,out);
var state_21242__$1 = state_21242;
var statearr_21253_21276 = state_21242__$1;
(statearr_21253_21276[(2)] = inst_21227);

(statearr_21253_21276[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21243 === (10))){
var inst_21235 = (state_21242[(2)]);
var state_21242__$1 = (function (){var statearr_21254 = state_21242;
(statearr_21254[(8)] = inst_21235);

return statearr_21254;
})();
var statearr_21255_21277 = state_21242__$1;
(statearr_21255_21277[(2)] = null);

(statearr_21255_21277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21243 === (8))){
var inst_21224 = (state_21242[(7)]);
var state_21242__$1 = state_21242;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21242__$1,(11),out,inst_21224);
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
});})(c__19017__auto___21267,out))
;
return ((function (switch__18905__auto__,c__19017__auto___21267,out){
return (function() {
var cljs$core$async$state_machine__18906__auto__ = null;
var cljs$core$async$state_machine__18906__auto____0 = (function (){
var statearr_21259 = [null,null,null,null,null,null,null,null,null];
(statearr_21259[(0)] = cljs$core$async$state_machine__18906__auto__);

(statearr_21259[(1)] = (1));

return statearr_21259;
});
var cljs$core$async$state_machine__18906__auto____1 = (function (state_21242){
while(true){
var ret_value__18907__auto__ = (function (){try{while(true){
var result__18908__auto__ = switch__18905__auto__.call(null,state_21242);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18908__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18908__auto__;
}
break;
}
}catch (e21260){if((e21260 instanceof Object)){
var ex__18909__auto__ = e21260;
var statearr_21261_21278 = state_21242;
(statearr_21261_21278[(5)] = ex__18909__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21242);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21260;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18907__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21279 = state_21242;
state_21242 = G__21279;
continue;
} else {
return ret_value__18907__auto__;
}
break;
}
});
cljs$core$async$state_machine__18906__auto__ = function(state_21242){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18906__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18906__auto____1.call(this,state_21242);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18906__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18906__auto____0;
cljs$core$async$state_machine__18906__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18906__auto____1;
return cljs$core$async$state_machine__18906__auto__;
})()
;})(switch__18905__auto__,c__19017__auto___21267,out))
})();
var state__19019__auto__ = (function (){var statearr_21262 = f__19018__auto__.call(null);
(statearr_21262[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19017__auto___21267);

return statearr_21262;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19019__auto__);
});})(c__19017__auto___21267,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args21280 = [];
var len__17922__auto___21283 = arguments.length;
var i__17923__auto___21284 = (0);
while(true){
if((i__17923__auto___21284 < len__17922__auto___21283)){
args21280.push((arguments[i__17923__auto___21284]));

var G__21285 = (i__17923__auto___21284 + (1));
i__17923__auto___21284 = G__21285;
continue;
} else {
}
break;
}

var G__21282 = args21280.length;
switch (G__21282) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21280.length)].join('')));

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
var c__19017__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19017__auto__){
return (function (){
var f__19018__auto__ = (function (){var switch__18905__auto__ = ((function (c__19017__auto__){
return (function (state_21452){
var state_val_21453 = (state_21452[(1)]);
if((state_val_21453 === (7))){
var inst_21448 = (state_21452[(2)]);
var state_21452__$1 = state_21452;
var statearr_21454_21495 = state_21452__$1;
(statearr_21454_21495[(2)] = inst_21448);

(statearr_21454_21495[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21453 === (20))){
var inst_21418 = (state_21452[(7)]);
var inst_21429 = (state_21452[(2)]);
var inst_21430 = cljs.core.next.call(null,inst_21418);
var inst_21404 = inst_21430;
var inst_21405 = null;
var inst_21406 = (0);
var inst_21407 = (0);
var state_21452__$1 = (function (){var statearr_21455 = state_21452;
(statearr_21455[(8)] = inst_21406);

(statearr_21455[(9)] = inst_21407);

(statearr_21455[(10)] = inst_21404);

(statearr_21455[(11)] = inst_21405);

(statearr_21455[(12)] = inst_21429);

return statearr_21455;
})();
var statearr_21456_21496 = state_21452__$1;
(statearr_21456_21496[(2)] = null);

(statearr_21456_21496[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21453 === (1))){
var state_21452__$1 = state_21452;
var statearr_21457_21497 = state_21452__$1;
(statearr_21457_21497[(2)] = null);

(statearr_21457_21497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21453 === (4))){
var inst_21393 = (state_21452[(13)]);
var inst_21393__$1 = (state_21452[(2)]);
var inst_21394 = (inst_21393__$1 == null);
var state_21452__$1 = (function (){var statearr_21458 = state_21452;
(statearr_21458[(13)] = inst_21393__$1);

return statearr_21458;
})();
if(cljs.core.truth_(inst_21394)){
var statearr_21459_21498 = state_21452__$1;
(statearr_21459_21498[(1)] = (5));

} else {
var statearr_21460_21499 = state_21452__$1;
(statearr_21460_21499[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21453 === (15))){
var state_21452__$1 = state_21452;
var statearr_21464_21500 = state_21452__$1;
(statearr_21464_21500[(2)] = null);

(statearr_21464_21500[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21453 === (21))){
var state_21452__$1 = state_21452;
var statearr_21465_21501 = state_21452__$1;
(statearr_21465_21501[(2)] = null);

(statearr_21465_21501[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21453 === (13))){
var inst_21406 = (state_21452[(8)]);
var inst_21407 = (state_21452[(9)]);
var inst_21404 = (state_21452[(10)]);
var inst_21405 = (state_21452[(11)]);
var inst_21414 = (state_21452[(2)]);
var inst_21415 = (inst_21407 + (1));
var tmp21461 = inst_21406;
var tmp21462 = inst_21404;
var tmp21463 = inst_21405;
var inst_21404__$1 = tmp21462;
var inst_21405__$1 = tmp21463;
var inst_21406__$1 = tmp21461;
var inst_21407__$1 = inst_21415;
var state_21452__$1 = (function (){var statearr_21466 = state_21452;
(statearr_21466[(8)] = inst_21406__$1);

(statearr_21466[(9)] = inst_21407__$1);

(statearr_21466[(10)] = inst_21404__$1);

(statearr_21466[(14)] = inst_21414);

(statearr_21466[(11)] = inst_21405__$1);

return statearr_21466;
})();
var statearr_21467_21502 = state_21452__$1;
(statearr_21467_21502[(2)] = null);

(statearr_21467_21502[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21453 === (22))){
var state_21452__$1 = state_21452;
var statearr_21468_21503 = state_21452__$1;
(statearr_21468_21503[(2)] = null);

(statearr_21468_21503[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21453 === (6))){
var inst_21393 = (state_21452[(13)]);
var inst_21402 = f.call(null,inst_21393);
var inst_21403 = cljs.core.seq.call(null,inst_21402);
var inst_21404 = inst_21403;
var inst_21405 = null;
var inst_21406 = (0);
var inst_21407 = (0);
var state_21452__$1 = (function (){var statearr_21469 = state_21452;
(statearr_21469[(8)] = inst_21406);

(statearr_21469[(9)] = inst_21407);

(statearr_21469[(10)] = inst_21404);

(statearr_21469[(11)] = inst_21405);

return statearr_21469;
})();
var statearr_21470_21504 = state_21452__$1;
(statearr_21470_21504[(2)] = null);

(statearr_21470_21504[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21453 === (17))){
var inst_21418 = (state_21452[(7)]);
var inst_21422 = cljs.core.chunk_first.call(null,inst_21418);
var inst_21423 = cljs.core.chunk_rest.call(null,inst_21418);
var inst_21424 = cljs.core.count.call(null,inst_21422);
var inst_21404 = inst_21423;
var inst_21405 = inst_21422;
var inst_21406 = inst_21424;
var inst_21407 = (0);
var state_21452__$1 = (function (){var statearr_21471 = state_21452;
(statearr_21471[(8)] = inst_21406);

(statearr_21471[(9)] = inst_21407);

(statearr_21471[(10)] = inst_21404);

(statearr_21471[(11)] = inst_21405);

return statearr_21471;
})();
var statearr_21472_21505 = state_21452__$1;
(statearr_21472_21505[(2)] = null);

(statearr_21472_21505[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21453 === (3))){
var inst_21450 = (state_21452[(2)]);
var state_21452__$1 = state_21452;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21452__$1,inst_21450);
} else {
if((state_val_21453 === (12))){
var inst_21438 = (state_21452[(2)]);
var state_21452__$1 = state_21452;
var statearr_21473_21506 = state_21452__$1;
(statearr_21473_21506[(2)] = inst_21438);

(statearr_21473_21506[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21453 === (2))){
var state_21452__$1 = state_21452;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21452__$1,(4),in$);
} else {
if((state_val_21453 === (23))){
var inst_21446 = (state_21452[(2)]);
var state_21452__$1 = state_21452;
var statearr_21474_21507 = state_21452__$1;
(statearr_21474_21507[(2)] = inst_21446);

(statearr_21474_21507[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21453 === (19))){
var inst_21433 = (state_21452[(2)]);
var state_21452__$1 = state_21452;
var statearr_21475_21508 = state_21452__$1;
(statearr_21475_21508[(2)] = inst_21433);

(statearr_21475_21508[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21453 === (11))){
var inst_21418 = (state_21452[(7)]);
var inst_21404 = (state_21452[(10)]);
var inst_21418__$1 = cljs.core.seq.call(null,inst_21404);
var state_21452__$1 = (function (){var statearr_21476 = state_21452;
(statearr_21476[(7)] = inst_21418__$1);

return statearr_21476;
})();
if(inst_21418__$1){
var statearr_21477_21509 = state_21452__$1;
(statearr_21477_21509[(1)] = (14));

} else {
var statearr_21478_21510 = state_21452__$1;
(statearr_21478_21510[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21453 === (9))){
var inst_21440 = (state_21452[(2)]);
var inst_21441 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_21452__$1 = (function (){var statearr_21479 = state_21452;
(statearr_21479[(15)] = inst_21440);

return statearr_21479;
})();
if(cljs.core.truth_(inst_21441)){
var statearr_21480_21511 = state_21452__$1;
(statearr_21480_21511[(1)] = (21));

} else {
var statearr_21481_21512 = state_21452__$1;
(statearr_21481_21512[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21453 === (5))){
var inst_21396 = cljs.core.async.close_BANG_.call(null,out);
var state_21452__$1 = state_21452;
var statearr_21482_21513 = state_21452__$1;
(statearr_21482_21513[(2)] = inst_21396);

(statearr_21482_21513[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21453 === (14))){
var inst_21418 = (state_21452[(7)]);
var inst_21420 = cljs.core.chunked_seq_QMARK_.call(null,inst_21418);
var state_21452__$1 = state_21452;
if(inst_21420){
var statearr_21483_21514 = state_21452__$1;
(statearr_21483_21514[(1)] = (17));

} else {
var statearr_21484_21515 = state_21452__$1;
(statearr_21484_21515[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21453 === (16))){
var inst_21436 = (state_21452[(2)]);
var state_21452__$1 = state_21452;
var statearr_21485_21516 = state_21452__$1;
(statearr_21485_21516[(2)] = inst_21436);

(statearr_21485_21516[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21453 === (10))){
var inst_21407 = (state_21452[(9)]);
var inst_21405 = (state_21452[(11)]);
var inst_21412 = cljs.core._nth.call(null,inst_21405,inst_21407);
var state_21452__$1 = state_21452;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21452__$1,(13),out,inst_21412);
} else {
if((state_val_21453 === (18))){
var inst_21418 = (state_21452[(7)]);
var inst_21427 = cljs.core.first.call(null,inst_21418);
var state_21452__$1 = state_21452;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21452__$1,(20),out,inst_21427);
} else {
if((state_val_21453 === (8))){
var inst_21406 = (state_21452[(8)]);
var inst_21407 = (state_21452[(9)]);
var inst_21409 = (inst_21407 < inst_21406);
var inst_21410 = inst_21409;
var state_21452__$1 = state_21452;
if(cljs.core.truth_(inst_21410)){
var statearr_21486_21517 = state_21452__$1;
(statearr_21486_21517[(1)] = (10));

} else {
var statearr_21487_21518 = state_21452__$1;
(statearr_21487_21518[(1)] = (11));

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
});})(c__19017__auto__))
;
return ((function (switch__18905__auto__,c__19017__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__18906__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__18906__auto____0 = (function (){
var statearr_21491 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21491[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__18906__auto__);

(statearr_21491[(1)] = (1));

return statearr_21491;
});
var cljs$core$async$mapcat_STAR__$_state_machine__18906__auto____1 = (function (state_21452){
while(true){
var ret_value__18907__auto__ = (function (){try{while(true){
var result__18908__auto__ = switch__18905__auto__.call(null,state_21452);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18908__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18908__auto__;
}
break;
}
}catch (e21492){if((e21492 instanceof Object)){
var ex__18909__auto__ = e21492;
var statearr_21493_21519 = state_21452;
(statearr_21493_21519[(5)] = ex__18909__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21452);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21492;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18907__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21520 = state_21452;
state_21452 = G__21520;
continue;
} else {
return ret_value__18907__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__18906__auto__ = function(state_21452){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__18906__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__18906__auto____1.call(this,state_21452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__18906__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__18906__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__18906__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__18906__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__18906__auto__;
})()
;})(switch__18905__auto__,c__19017__auto__))
})();
var state__19019__auto__ = (function (){var statearr_21494 = f__19018__auto__.call(null);
(statearr_21494[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19017__auto__);

return statearr_21494;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19019__auto__);
});})(c__19017__auto__))
);

return c__19017__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args21521 = [];
var len__17922__auto___21524 = arguments.length;
var i__17923__auto___21525 = (0);
while(true){
if((i__17923__auto___21525 < len__17922__auto___21524)){
args21521.push((arguments[i__17923__auto___21525]));

var G__21526 = (i__17923__auto___21525 + (1));
i__17923__auto___21525 = G__21526;
continue;
} else {
}
break;
}

var G__21523 = args21521.length;
switch (G__21523) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21521.length)].join('')));

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
var args21528 = [];
var len__17922__auto___21531 = arguments.length;
var i__17923__auto___21532 = (0);
while(true){
if((i__17923__auto___21532 < len__17922__auto___21531)){
args21528.push((arguments[i__17923__auto___21532]));

var G__21533 = (i__17923__auto___21532 + (1));
i__17923__auto___21532 = G__21533;
continue;
} else {
}
break;
}

var G__21530 = args21528.length;
switch (G__21530) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21528.length)].join('')));

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
var args21535 = [];
var len__17922__auto___21586 = arguments.length;
var i__17923__auto___21587 = (0);
while(true){
if((i__17923__auto___21587 < len__17922__auto___21586)){
args21535.push((arguments[i__17923__auto___21587]));

var G__21588 = (i__17923__auto___21587 + (1));
i__17923__auto___21587 = G__21588;
continue;
} else {
}
break;
}

var G__21537 = args21535.length;
switch (G__21537) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21535.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19017__auto___21590 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19017__auto___21590,out){
return (function (){
var f__19018__auto__ = (function (){var switch__18905__auto__ = ((function (c__19017__auto___21590,out){
return (function (state_21561){
var state_val_21562 = (state_21561[(1)]);
if((state_val_21562 === (7))){
var inst_21556 = (state_21561[(2)]);
var state_21561__$1 = state_21561;
var statearr_21563_21591 = state_21561__$1;
(statearr_21563_21591[(2)] = inst_21556);

(statearr_21563_21591[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21562 === (1))){
var inst_21538 = null;
var state_21561__$1 = (function (){var statearr_21564 = state_21561;
(statearr_21564[(7)] = inst_21538);

return statearr_21564;
})();
var statearr_21565_21592 = state_21561__$1;
(statearr_21565_21592[(2)] = null);

(statearr_21565_21592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21562 === (4))){
var inst_21541 = (state_21561[(8)]);
var inst_21541__$1 = (state_21561[(2)]);
var inst_21542 = (inst_21541__$1 == null);
var inst_21543 = cljs.core.not.call(null,inst_21542);
var state_21561__$1 = (function (){var statearr_21566 = state_21561;
(statearr_21566[(8)] = inst_21541__$1);

return statearr_21566;
})();
if(inst_21543){
var statearr_21567_21593 = state_21561__$1;
(statearr_21567_21593[(1)] = (5));

} else {
var statearr_21568_21594 = state_21561__$1;
(statearr_21568_21594[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21562 === (6))){
var state_21561__$1 = state_21561;
var statearr_21569_21595 = state_21561__$1;
(statearr_21569_21595[(2)] = null);

(statearr_21569_21595[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21562 === (3))){
var inst_21558 = (state_21561[(2)]);
var inst_21559 = cljs.core.async.close_BANG_.call(null,out);
var state_21561__$1 = (function (){var statearr_21570 = state_21561;
(statearr_21570[(9)] = inst_21558);

return statearr_21570;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21561__$1,inst_21559);
} else {
if((state_val_21562 === (2))){
var state_21561__$1 = state_21561;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21561__$1,(4),ch);
} else {
if((state_val_21562 === (11))){
var inst_21541 = (state_21561[(8)]);
var inst_21550 = (state_21561[(2)]);
var inst_21538 = inst_21541;
var state_21561__$1 = (function (){var statearr_21571 = state_21561;
(statearr_21571[(7)] = inst_21538);

(statearr_21571[(10)] = inst_21550);

return statearr_21571;
})();
var statearr_21572_21596 = state_21561__$1;
(statearr_21572_21596[(2)] = null);

(statearr_21572_21596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21562 === (9))){
var inst_21541 = (state_21561[(8)]);
var state_21561__$1 = state_21561;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21561__$1,(11),out,inst_21541);
} else {
if((state_val_21562 === (5))){
var inst_21538 = (state_21561[(7)]);
var inst_21541 = (state_21561[(8)]);
var inst_21545 = cljs.core._EQ_.call(null,inst_21541,inst_21538);
var state_21561__$1 = state_21561;
if(inst_21545){
var statearr_21574_21597 = state_21561__$1;
(statearr_21574_21597[(1)] = (8));

} else {
var statearr_21575_21598 = state_21561__$1;
(statearr_21575_21598[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21562 === (10))){
var inst_21553 = (state_21561[(2)]);
var state_21561__$1 = state_21561;
var statearr_21576_21599 = state_21561__$1;
(statearr_21576_21599[(2)] = inst_21553);

(statearr_21576_21599[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21562 === (8))){
var inst_21538 = (state_21561[(7)]);
var tmp21573 = inst_21538;
var inst_21538__$1 = tmp21573;
var state_21561__$1 = (function (){var statearr_21577 = state_21561;
(statearr_21577[(7)] = inst_21538__$1);

return statearr_21577;
})();
var statearr_21578_21600 = state_21561__$1;
(statearr_21578_21600[(2)] = null);

(statearr_21578_21600[(1)] = (2));


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
});})(c__19017__auto___21590,out))
;
return ((function (switch__18905__auto__,c__19017__auto___21590,out){
return (function() {
var cljs$core$async$state_machine__18906__auto__ = null;
var cljs$core$async$state_machine__18906__auto____0 = (function (){
var statearr_21582 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21582[(0)] = cljs$core$async$state_machine__18906__auto__);

(statearr_21582[(1)] = (1));

return statearr_21582;
});
var cljs$core$async$state_machine__18906__auto____1 = (function (state_21561){
while(true){
var ret_value__18907__auto__ = (function (){try{while(true){
var result__18908__auto__ = switch__18905__auto__.call(null,state_21561);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18908__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18908__auto__;
}
break;
}
}catch (e21583){if((e21583 instanceof Object)){
var ex__18909__auto__ = e21583;
var statearr_21584_21601 = state_21561;
(statearr_21584_21601[(5)] = ex__18909__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21561);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21583;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18907__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21602 = state_21561;
state_21561 = G__21602;
continue;
} else {
return ret_value__18907__auto__;
}
break;
}
});
cljs$core$async$state_machine__18906__auto__ = function(state_21561){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18906__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18906__auto____1.call(this,state_21561);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18906__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18906__auto____0;
cljs$core$async$state_machine__18906__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18906__auto____1;
return cljs$core$async$state_machine__18906__auto__;
})()
;})(switch__18905__auto__,c__19017__auto___21590,out))
})();
var state__19019__auto__ = (function (){var statearr_21585 = f__19018__auto__.call(null);
(statearr_21585[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19017__auto___21590);

return statearr_21585;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19019__auto__);
});})(c__19017__auto___21590,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args21603 = [];
var len__17922__auto___21673 = arguments.length;
var i__17923__auto___21674 = (0);
while(true){
if((i__17923__auto___21674 < len__17922__auto___21673)){
args21603.push((arguments[i__17923__auto___21674]));

var G__21675 = (i__17923__auto___21674 + (1));
i__17923__auto___21674 = G__21675;
continue;
} else {
}
break;
}

var G__21605 = args21603.length;
switch (G__21605) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21603.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19017__auto___21677 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19017__auto___21677,out){
return (function (){
var f__19018__auto__ = (function (){var switch__18905__auto__ = ((function (c__19017__auto___21677,out){
return (function (state_21643){
var state_val_21644 = (state_21643[(1)]);
if((state_val_21644 === (7))){
var inst_21639 = (state_21643[(2)]);
var state_21643__$1 = state_21643;
var statearr_21645_21678 = state_21643__$1;
(statearr_21645_21678[(2)] = inst_21639);

(statearr_21645_21678[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21644 === (1))){
var inst_21606 = (new Array(n));
var inst_21607 = inst_21606;
var inst_21608 = (0);
var state_21643__$1 = (function (){var statearr_21646 = state_21643;
(statearr_21646[(7)] = inst_21607);

(statearr_21646[(8)] = inst_21608);

return statearr_21646;
})();
var statearr_21647_21679 = state_21643__$1;
(statearr_21647_21679[(2)] = null);

(statearr_21647_21679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21644 === (4))){
var inst_21611 = (state_21643[(9)]);
var inst_21611__$1 = (state_21643[(2)]);
var inst_21612 = (inst_21611__$1 == null);
var inst_21613 = cljs.core.not.call(null,inst_21612);
var state_21643__$1 = (function (){var statearr_21648 = state_21643;
(statearr_21648[(9)] = inst_21611__$1);

return statearr_21648;
})();
if(inst_21613){
var statearr_21649_21680 = state_21643__$1;
(statearr_21649_21680[(1)] = (5));

} else {
var statearr_21650_21681 = state_21643__$1;
(statearr_21650_21681[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21644 === (15))){
var inst_21633 = (state_21643[(2)]);
var state_21643__$1 = state_21643;
var statearr_21651_21682 = state_21643__$1;
(statearr_21651_21682[(2)] = inst_21633);

(statearr_21651_21682[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21644 === (13))){
var state_21643__$1 = state_21643;
var statearr_21652_21683 = state_21643__$1;
(statearr_21652_21683[(2)] = null);

(statearr_21652_21683[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21644 === (6))){
var inst_21608 = (state_21643[(8)]);
var inst_21629 = (inst_21608 > (0));
var state_21643__$1 = state_21643;
if(cljs.core.truth_(inst_21629)){
var statearr_21653_21684 = state_21643__$1;
(statearr_21653_21684[(1)] = (12));

} else {
var statearr_21654_21685 = state_21643__$1;
(statearr_21654_21685[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21644 === (3))){
var inst_21641 = (state_21643[(2)]);
var state_21643__$1 = state_21643;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21643__$1,inst_21641);
} else {
if((state_val_21644 === (12))){
var inst_21607 = (state_21643[(7)]);
var inst_21631 = cljs.core.vec.call(null,inst_21607);
var state_21643__$1 = state_21643;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21643__$1,(15),out,inst_21631);
} else {
if((state_val_21644 === (2))){
var state_21643__$1 = state_21643;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21643__$1,(4),ch);
} else {
if((state_val_21644 === (11))){
var inst_21623 = (state_21643[(2)]);
var inst_21624 = (new Array(n));
var inst_21607 = inst_21624;
var inst_21608 = (0);
var state_21643__$1 = (function (){var statearr_21655 = state_21643;
(statearr_21655[(7)] = inst_21607);

(statearr_21655[(10)] = inst_21623);

(statearr_21655[(8)] = inst_21608);

return statearr_21655;
})();
var statearr_21656_21686 = state_21643__$1;
(statearr_21656_21686[(2)] = null);

(statearr_21656_21686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21644 === (9))){
var inst_21607 = (state_21643[(7)]);
var inst_21621 = cljs.core.vec.call(null,inst_21607);
var state_21643__$1 = state_21643;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21643__$1,(11),out,inst_21621);
} else {
if((state_val_21644 === (5))){
var inst_21607 = (state_21643[(7)]);
var inst_21616 = (state_21643[(11)]);
var inst_21608 = (state_21643[(8)]);
var inst_21611 = (state_21643[(9)]);
var inst_21615 = (inst_21607[inst_21608] = inst_21611);
var inst_21616__$1 = (inst_21608 + (1));
var inst_21617 = (inst_21616__$1 < n);
var state_21643__$1 = (function (){var statearr_21657 = state_21643;
(statearr_21657[(11)] = inst_21616__$1);

(statearr_21657[(12)] = inst_21615);

return statearr_21657;
})();
if(cljs.core.truth_(inst_21617)){
var statearr_21658_21687 = state_21643__$1;
(statearr_21658_21687[(1)] = (8));

} else {
var statearr_21659_21688 = state_21643__$1;
(statearr_21659_21688[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21644 === (14))){
var inst_21636 = (state_21643[(2)]);
var inst_21637 = cljs.core.async.close_BANG_.call(null,out);
var state_21643__$1 = (function (){var statearr_21661 = state_21643;
(statearr_21661[(13)] = inst_21636);

return statearr_21661;
})();
var statearr_21662_21689 = state_21643__$1;
(statearr_21662_21689[(2)] = inst_21637);

(statearr_21662_21689[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21644 === (10))){
var inst_21627 = (state_21643[(2)]);
var state_21643__$1 = state_21643;
var statearr_21663_21690 = state_21643__$1;
(statearr_21663_21690[(2)] = inst_21627);

(statearr_21663_21690[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21644 === (8))){
var inst_21607 = (state_21643[(7)]);
var inst_21616 = (state_21643[(11)]);
var tmp21660 = inst_21607;
var inst_21607__$1 = tmp21660;
var inst_21608 = inst_21616;
var state_21643__$1 = (function (){var statearr_21664 = state_21643;
(statearr_21664[(7)] = inst_21607__$1);

(statearr_21664[(8)] = inst_21608);

return statearr_21664;
})();
var statearr_21665_21691 = state_21643__$1;
(statearr_21665_21691[(2)] = null);

(statearr_21665_21691[(1)] = (2));


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
});})(c__19017__auto___21677,out))
;
return ((function (switch__18905__auto__,c__19017__auto___21677,out){
return (function() {
var cljs$core$async$state_machine__18906__auto__ = null;
var cljs$core$async$state_machine__18906__auto____0 = (function (){
var statearr_21669 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21669[(0)] = cljs$core$async$state_machine__18906__auto__);

(statearr_21669[(1)] = (1));

return statearr_21669;
});
var cljs$core$async$state_machine__18906__auto____1 = (function (state_21643){
while(true){
var ret_value__18907__auto__ = (function (){try{while(true){
var result__18908__auto__ = switch__18905__auto__.call(null,state_21643);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18908__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18908__auto__;
}
break;
}
}catch (e21670){if((e21670 instanceof Object)){
var ex__18909__auto__ = e21670;
var statearr_21671_21692 = state_21643;
(statearr_21671_21692[(5)] = ex__18909__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21643);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21670;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18907__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21693 = state_21643;
state_21643 = G__21693;
continue;
} else {
return ret_value__18907__auto__;
}
break;
}
});
cljs$core$async$state_machine__18906__auto__ = function(state_21643){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18906__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18906__auto____1.call(this,state_21643);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18906__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18906__auto____0;
cljs$core$async$state_machine__18906__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18906__auto____1;
return cljs$core$async$state_machine__18906__auto__;
})()
;})(switch__18905__auto__,c__19017__auto___21677,out))
})();
var state__19019__auto__ = (function (){var statearr_21672 = f__19018__auto__.call(null);
(statearr_21672[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19017__auto___21677);

return statearr_21672;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19019__auto__);
});})(c__19017__auto___21677,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args21694 = [];
var len__17922__auto___21768 = arguments.length;
var i__17923__auto___21769 = (0);
while(true){
if((i__17923__auto___21769 < len__17922__auto___21768)){
args21694.push((arguments[i__17923__auto___21769]));

var G__21770 = (i__17923__auto___21769 + (1));
i__17923__auto___21769 = G__21770;
continue;
} else {
}
break;
}

var G__21696 = args21694.length;
switch (G__21696) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21694.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19017__auto___21772 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19017__auto___21772,out){
return (function (){
var f__19018__auto__ = (function (){var switch__18905__auto__ = ((function (c__19017__auto___21772,out){
return (function (state_21738){
var state_val_21739 = (state_21738[(1)]);
if((state_val_21739 === (7))){
var inst_21734 = (state_21738[(2)]);
var state_21738__$1 = state_21738;
var statearr_21740_21773 = state_21738__$1;
(statearr_21740_21773[(2)] = inst_21734);

(statearr_21740_21773[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21739 === (1))){
var inst_21697 = [];
var inst_21698 = inst_21697;
var inst_21699 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_21738__$1 = (function (){var statearr_21741 = state_21738;
(statearr_21741[(7)] = inst_21699);

(statearr_21741[(8)] = inst_21698);

return statearr_21741;
})();
var statearr_21742_21774 = state_21738__$1;
(statearr_21742_21774[(2)] = null);

(statearr_21742_21774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21739 === (4))){
var inst_21702 = (state_21738[(9)]);
var inst_21702__$1 = (state_21738[(2)]);
var inst_21703 = (inst_21702__$1 == null);
var inst_21704 = cljs.core.not.call(null,inst_21703);
var state_21738__$1 = (function (){var statearr_21743 = state_21738;
(statearr_21743[(9)] = inst_21702__$1);

return statearr_21743;
})();
if(inst_21704){
var statearr_21744_21775 = state_21738__$1;
(statearr_21744_21775[(1)] = (5));

} else {
var statearr_21745_21776 = state_21738__$1;
(statearr_21745_21776[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21739 === (15))){
var inst_21728 = (state_21738[(2)]);
var state_21738__$1 = state_21738;
var statearr_21746_21777 = state_21738__$1;
(statearr_21746_21777[(2)] = inst_21728);

(statearr_21746_21777[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21739 === (13))){
var state_21738__$1 = state_21738;
var statearr_21747_21778 = state_21738__$1;
(statearr_21747_21778[(2)] = null);

(statearr_21747_21778[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21739 === (6))){
var inst_21698 = (state_21738[(8)]);
var inst_21723 = inst_21698.length;
var inst_21724 = (inst_21723 > (0));
var state_21738__$1 = state_21738;
if(cljs.core.truth_(inst_21724)){
var statearr_21748_21779 = state_21738__$1;
(statearr_21748_21779[(1)] = (12));

} else {
var statearr_21749_21780 = state_21738__$1;
(statearr_21749_21780[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21739 === (3))){
var inst_21736 = (state_21738[(2)]);
var state_21738__$1 = state_21738;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21738__$1,inst_21736);
} else {
if((state_val_21739 === (12))){
var inst_21698 = (state_21738[(8)]);
var inst_21726 = cljs.core.vec.call(null,inst_21698);
var state_21738__$1 = state_21738;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21738__$1,(15),out,inst_21726);
} else {
if((state_val_21739 === (2))){
var state_21738__$1 = state_21738;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21738__$1,(4),ch);
} else {
if((state_val_21739 === (11))){
var inst_21706 = (state_21738[(10)]);
var inst_21702 = (state_21738[(9)]);
var inst_21716 = (state_21738[(2)]);
var inst_21717 = [];
var inst_21718 = inst_21717.push(inst_21702);
var inst_21698 = inst_21717;
var inst_21699 = inst_21706;
var state_21738__$1 = (function (){var statearr_21750 = state_21738;
(statearr_21750[(11)] = inst_21716);

(statearr_21750[(12)] = inst_21718);

(statearr_21750[(7)] = inst_21699);

(statearr_21750[(8)] = inst_21698);

return statearr_21750;
})();
var statearr_21751_21781 = state_21738__$1;
(statearr_21751_21781[(2)] = null);

(statearr_21751_21781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21739 === (9))){
var inst_21698 = (state_21738[(8)]);
var inst_21714 = cljs.core.vec.call(null,inst_21698);
var state_21738__$1 = state_21738;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21738__$1,(11),out,inst_21714);
} else {
if((state_val_21739 === (5))){
var inst_21706 = (state_21738[(10)]);
var inst_21702 = (state_21738[(9)]);
var inst_21699 = (state_21738[(7)]);
var inst_21706__$1 = f.call(null,inst_21702);
var inst_21707 = cljs.core._EQ_.call(null,inst_21706__$1,inst_21699);
var inst_21708 = cljs.core.keyword_identical_QMARK_.call(null,inst_21699,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_21709 = (inst_21707) || (inst_21708);
var state_21738__$1 = (function (){var statearr_21752 = state_21738;
(statearr_21752[(10)] = inst_21706__$1);

return statearr_21752;
})();
if(cljs.core.truth_(inst_21709)){
var statearr_21753_21782 = state_21738__$1;
(statearr_21753_21782[(1)] = (8));

} else {
var statearr_21754_21783 = state_21738__$1;
(statearr_21754_21783[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21739 === (14))){
var inst_21731 = (state_21738[(2)]);
var inst_21732 = cljs.core.async.close_BANG_.call(null,out);
var state_21738__$1 = (function (){var statearr_21756 = state_21738;
(statearr_21756[(13)] = inst_21731);

return statearr_21756;
})();
var statearr_21757_21784 = state_21738__$1;
(statearr_21757_21784[(2)] = inst_21732);

(statearr_21757_21784[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21739 === (10))){
var inst_21721 = (state_21738[(2)]);
var state_21738__$1 = state_21738;
var statearr_21758_21785 = state_21738__$1;
(statearr_21758_21785[(2)] = inst_21721);

(statearr_21758_21785[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21739 === (8))){
var inst_21706 = (state_21738[(10)]);
var inst_21702 = (state_21738[(9)]);
var inst_21698 = (state_21738[(8)]);
var inst_21711 = inst_21698.push(inst_21702);
var tmp21755 = inst_21698;
var inst_21698__$1 = tmp21755;
var inst_21699 = inst_21706;
var state_21738__$1 = (function (){var statearr_21759 = state_21738;
(statearr_21759[(7)] = inst_21699);

(statearr_21759[(8)] = inst_21698__$1);

(statearr_21759[(14)] = inst_21711);

return statearr_21759;
})();
var statearr_21760_21786 = state_21738__$1;
(statearr_21760_21786[(2)] = null);

(statearr_21760_21786[(1)] = (2));


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
});})(c__19017__auto___21772,out))
;
return ((function (switch__18905__auto__,c__19017__auto___21772,out){
return (function() {
var cljs$core$async$state_machine__18906__auto__ = null;
var cljs$core$async$state_machine__18906__auto____0 = (function (){
var statearr_21764 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21764[(0)] = cljs$core$async$state_machine__18906__auto__);

(statearr_21764[(1)] = (1));

return statearr_21764;
});
var cljs$core$async$state_machine__18906__auto____1 = (function (state_21738){
while(true){
var ret_value__18907__auto__ = (function (){try{while(true){
var result__18908__auto__ = switch__18905__auto__.call(null,state_21738);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18908__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18908__auto__;
}
break;
}
}catch (e21765){if((e21765 instanceof Object)){
var ex__18909__auto__ = e21765;
var statearr_21766_21787 = state_21738;
(statearr_21766_21787[(5)] = ex__18909__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21738);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21765;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18907__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21788 = state_21738;
state_21738 = G__21788;
continue;
} else {
return ret_value__18907__auto__;
}
break;
}
});
cljs$core$async$state_machine__18906__auto__ = function(state_21738){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18906__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18906__auto____1.call(this,state_21738);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18906__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18906__auto____0;
cljs$core$async$state_machine__18906__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18906__auto____1;
return cljs$core$async$state_machine__18906__auto__;
})()
;})(switch__18905__auto__,c__19017__auto___21772,out))
})();
var state__19019__auto__ = (function (){var statearr_21767 = f__19018__auto__.call(null);
(statearr_21767[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19017__auto___21772);

return statearr_21767;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19019__auto__);
});})(c__19017__auto___21772,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map