"use strict";(()=>{var cm=Object.defineProperty;var cj=Object.getOwnPropertyDescriptor;var lj=Object.getOwnPropertyNames;var dj=Object.prototype.hasOwnProperty;var Kl=(t=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(t,{get:(e,r)=>(typeof require<"u"?require:e)[r]}):t)(function(t){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+t+'" is not supported')});var fj=(t,e)=>()=>(t&&(e=t(t=0)),e);var h=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),pj=(t,e)=>{for(var r in e)cm(t,r,{get:e[r],enumerable:!0})},hj=(t,e,r,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of lj(e))!dj.call(t,i)&&i!==r&&cm(t,i,{get:()=>e[i],enumerable:!(n=cj(e,i))||n.enumerable});return t};var mC=t=>hj(cm({},"__esModule",{value:!0}),t);var Qa=h(Cr=>{"use strict";Object.defineProperty(Cr,"__esModule",{value:!0});Cr.stringArray=Cr.array=Cr.func=Cr.error=Cr.number=Cr.string=Cr.boolean=void 0;function mj(t){return t===!0||t===!1}Cr.boolean=mj;function gC(t){return typeof t=="string"||t instanceof String}Cr.string=gC;function gj(t){return typeof t=="number"||t instanceof Number}Cr.number=gj;function yj(t){return t instanceof Error}Cr.error=yj;function vj(t){return typeof t=="function"}Cr.func=vj;function yC(t){return Array.isArray(t)}Cr.array=yC;function _j(t){return yC(t)&&t.every(e=>gC(e))}Cr.stringArray=_j});var Im=h(se=>{"use strict";Object.defineProperty(se,"__esModule",{value:!0});se.Message=se.NotificationType9=se.NotificationType8=se.NotificationType7=se.NotificationType6=se.NotificationType5=se.NotificationType4=se.NotificationType3=se.NotificationType2=se.NotificationType1=se.NotificationType0=se.NotificationType=se.RequestType9=se.RequestType8=se.RequestType7=se.RequestType6=se.RequestType5=se.RequestType4=se.RequestType3=se.RequestType2=se.RequestType1=se.RequestType=se.RequestType0=se.AbstractMessageSignature=se.ParameterStructures=se.ResponseError=se.ErrorCodes=void 0;var pa=Qa(),vC;(function(t){t.ParseError=-32700,t.InvalidRequest=-32600,t.MethodNotFound=-32601,t.InvalidParams=-32602,t.InternalError=-32603,t.jsonrpcReservedErrorRangeStart=-32099,t.serverErrorStart=-32099,t.MessageWriteError=-32099,t.MessageReadError=-32098,t.PendingResponseRejected=-32097,t.ConnectionInactive=-32096,t.ServerNotInitialized=-32002,t.UnknownErrorCode=-32001,t.jsonrpcReservedErrorRangeEnd=-32e3,t.serverErrorEnd=-32e3})(vC=se.ErrorCodes||(se.ErrorCodes={}));var lm=class t extends Error{constructor(e,r,n){super(r),this.code=pa.number(e)?e:vC.UnknownErrorCode,this.data=n,Object.setPrototypeOf(this,t.prototype)}toJson(){let e={code:this.code,message:this.message};return this.data!==void 0&&(e.data=this.data),e}};se.ResponseError=lm;var Vr=class t{constructor(e){this.kind=e}static is(e){return e===t.auto||e===t.byName||e===t.byPosition}toString(){return this.kind}};se.ParameterStructures=Vr;Vr.auto=new Vr("auto");Vr.byPosition=new Vr("byPosition");Vr.byName=new Vr("byName");var ut=class{constructor(e,r){this.method=e,this.numberOfParams=r}get parameterStructures(){return Vr.auto}};se.AbstractMessageSignature=ut;var dm=class extends ut{constructor(e){super(e,0)}};se.RequestType0=dm;var fm=class extends ut{constructor(e,r=Vr.auto){super(e,1),this._parameterStructures=r}get parameterStructures(){return this._parameterStructures}};se.RequestType=fm;var pm=class extends ut{constructor(e,r=Vr.auto){super(e,1),this._parameterStructures=r}get parameterStructures(){return this._parameterStructures}};se.RequestType1=pm;var hm=class extends ut{constructor(e){super(e,2)}};se.RequestType2=hm;var mm=class extends ut{constructor(e){super(e,3)}};se.RequestType3=mm;var gm=class extends ut{constructor(e){super(e,4)}};se.RequestType4=gm;var ym=class extends ut{constructor(e){super(e,5)}};se.RequestType5=ym;var vm=class extends ut{constructor(e){super(e,6)}};se.RequestType6=vm;var _m=class extends ut{constructor(e){super(e,7)}};se.RequestType7=_m;var Tm=class extends ut{constructor(e){super(e,8)}};se.RequestType8=Tm;var Rm=class extends ut{constructor(e){super(e,9)}};se.RequestType9=Rm;var bm=class extends ut{constructor(e,r=Vr.auto){super(e,1),this._parameterStructures=r}get parameterStructures(){return this._parameterStructures}};se.NotificationType=bm;var Cm=class extends ut{constructor(e){super(e,0)}};se.NotificationType0=Cm;var Am=class extends ut{constructor(e,r=Vr.auto){super(e,1),this._parameterStructures=r}get parameterStructures(){return this._parameterStructures}};se.NotificationType1=Am;var Pm=class extends ut{constructor(e){super(e,2)}};se.NotificationType2=Pm;var Sm=class extends ut{constructor(e){super(e,3)}};se.NotificationType3=Sm;var Em=class extends ut{constructor(e){super(e,4)}};se.NotificationType4=Em;var km=class extends ut{constructor(e){super(e,5)}};se.NotificationType5=km;var Nm=class extends ut{constructor(e){super(e,6)}};se.NotificationType6=Nm;var wm=class extends ut{constructor(e){super(e,7)}};se.NotificationType7=wm;var Dm=class extends ut{constructor(e){super(e,8)}};se.NotificationType8=Dm;var Om=class extends ut{constructor(e){super(e,9)}};se.NotificationType9=Om;var Tj;(function(t){function e(i){let o=i;return o&&pa.string(o.method)&&(pa.string(o.id)||pa.number(o.id))}t.isRequest=e;function r(i){let o=i;return o&&pa.string(o.method)&&i.id===void 0}t.isNotification=r;function n(i){let o=i;return o&&(o.result!==void 0||!!o.error)&&(pa.string(o.id)||pa.number(o.id)||o.id===null)}t.isResponse=n})(Tj=se.Message||(se.Message={}))});var xm=h(Yi=>{"use strict";var _C;Object.defineProperty(Yi,"__esModule",{value:!0});Yi.LRUCache=Yi.LinkedMap=Yi.Touch=void 0;var Ir;(function(t){t.None=0,t.First=1,t.AsOld=t.First,t.Last=2,t.AsNew=t.Last})(Ir=Yi.Touch||(Yi.Touch={}));var Bl=class{constructor(){this[_C]="LinkedMap",this._map=new Map,this._head=void 0,this._tail=void 0,this._size=0,this._state=0}clear(){this._map.clear(),this._head=void 0,this._tail=void 0,this._size=0,this._state++}isEmpty(){return!this._head&&!this._tail}get size(){return this._size}get first(){return this._head?.value}get last(){return this._tail?.value}has(e){return this._map.has(e)}get(e,r=Ir.None){let n=this._map.get(e);if(n)return r!==Ir.None&&this.touch(n,r),n.value}set(e,r,n=Ir.None){let i=this._map.get(e);if(i)i.value=r,n!==Ir.None&&this.touch(i,n);else{switch(i={key:e,value:r,next:void 0,previous:void 0},n){case Ir.None:this.addItemLast(i);break;case Ir.First:this.addItemFirst(i);break;case Ir.Last:this.addItemLast(i);break;default:this.addItemLast(i);break}this._map.set(e,i),this._size++}return this}delete(e){return!!this.remove(e)}remove(e){let r=this._map.get(e);if(r)return this._map.delete(e),this.removeItem(r),this._size--,r.value}shift(){if(!this._head&&!this._tail)return;if(!this._head||!this._tail)throw new Error("Invalid list");let e=this._head;return this._map.delete(e.key),this.removeItem(e),this._size--,e.value}forEach(e,r){let n=this._state,i=this._head;for(;i;){if(r?e.bind(r)(i.value,i.key,this):e(i.value,i.key,this),this._state!==n)throw new Error("LinkedMap got modified during iteration.");i=i.next}}keys(){let e=this._state,r=this._head,n={[Symbol.iterator]:()=>n,next:()=>{if(this._state!==e)throw new Error("LinkedMap got modified during iteration.");if(r){let i={value:r.key,done:!1};return r=r.next,i}else return{value:void 0,done:!0}}};return n}values(){let e=this._state,r=this._head,n={[Symbol.iterator]:()=>n,next:()=>{if(this._state!==e)throw new Error("LinkedMap got modified during iteration.");if(r){let i={value:r.value,done:!1};return r=r.next,i}else return{value:void 0,done:!0}}};return n}entries(){let e=this._state,r=this._head,n={[Symbol.iterator]:()=>n,next:()=>{if(this._state!==e)throw new Error("LinkedMap got modified during iteration.");if(r){let i={value:[r.key,r.value],done:!1};return r=r.next,i}else return{value:void 0,done:!0}}};return n}[(_C=Symbol.toStringTag,Symbol.iterator)](){return this.entries()}trimOld(e){if(e>=this.size)return;if(e===0){this.clear();return}let r=this._head,n=this.size;for(;r&&n>e;)this._map.delete(r.key),r=r.next,n--;this._head=r,this._size=n,r&&(r.previous=void 0),this._state++}addItemFirst(e){if(!this._head&&!this._tail)this._tail=e;else if(this._head)e.next=this._head,this._head.previous=e;else throw new Error("Invalid list");this._head=e,this._state++}addItemLast(e){if(!this._head&&!this._tail)this._head=e;else if(this._tail)e.previous=this._tail,this._tail.next=e;else throw new Error("Invalid list");this._tail=e,this._state++}removeItem(e){if(e===this._head&&e===this._tail)this._head=void 0,this._tail=void 0;else if(e===this._head){if(!e.next)throw new Error("Invalid list");e.next.previous=void 0,this._head=e.next}else if(e===this._tail){if(!e.previous)throw new Error("Invalid list");e.previous.next=void 0,this._tail=e.previous}else{let r=e.next,n=e.previous;if(!r||!n)throw new Error("Invalid list");r.previous=n,n.next=r}e.next=void 0,e.previous=void 0,this._state++}touch(e,r){if(!this._head||!this._tail)throw new Error("Invalid list");if(!(r!==Ir.First&&r!==Ir.Last)){if(r===Ir.First){if(e===this._head)return;let n=e.next,i=e.previous;e===this._tail?(i.next=void 0,this._tail=i):(n.previous=i,i.next=n),e.previous=void 0,e.next=this._head,this._head.previous=e,this._head=e,this._state++}else if(r===Ir.Last){if(e===this._tail)return;let n=e.next,i=e.previous;e===this._head?(n.previous=void 0,this._head=n):(n.previous=i,i.next=n),e.next=void 0,e.previous=this._tail,this._tail.next=e,this._tail=e,this._state++}}}toJSON(){let e=[];return this.forEach((r,n)=>{e.push([n,r])}),e}fromJSON(e){this.clear();for(let[r,n]of e)this.set(r,n)}};Yi.LinkedMap=Bl;var qm=class extends Bl{constructor(e,r=1){super(),this._limit=e,this._ratio=Math.min(Math.max(0,r),1)}get limit(){return this._limit}set limit(e){this._limit=e,this.checkTrim()}get ratio(){return this._ratio}set ratio(e){this._ratio=Math.min(Math.max(0,e),1),this.checkTrim()}get(e,r=Ir.AsNew){return super.get(e,r)}peek(e){return super.get(e,Ir.None)}set(e,r){return super.set(e,r,Ir.Last),this.checkTrim(),this}checkTrim(){this.size>this._limit&&this.trimOld(Math.round(this._limit*this._ratio))}};Yi.LRUCache=qm});var TC=h(Ju=>{"use strict";Object.defineProperty(Ju,"__esModule",{value:!0});Ju.Disposable=void 0;var Rj;(function(t){function e(r){return{dispose:r}}t.create=e})(Rj=Ju.Disposable||(Ju.Disposable={}))});var wo=h($m=>{"use strict";Object.defineProperty($m,"__esModule",{value:!0});var Lm;function Mm(){if(Lm===void 0)throw new Error("No runtime abstraction layer installed");return Lm}(function(t){function e(r){if(r===void 0)throw new Error("No runtime abstraction layer provided");Lm=r}t.install=e})(Mm||(Mm={}));$m.default=Mm});var Za=h(ha=>{"use strict";Object.defineProperty(ha,"__esModule",{value:!0});ha.Emitter=ha.Event=void 0;var bj=wo(),Cj;(function(t){let e={dispose(){}};t.None=function(){return e}})(Cj=ha.Event||(ha.Event={}));var Fm=class{add(e,r=null,n){this._callbacks||(this._callbacks=[],this._contexts=[]),this._callbacks.push(e),this._contexts.push(r),Array.isArray(n)&&n.push({dispose:()=>this.remove(e,r)})}remove(e,r=null){if(!this._callbacks)return;let n=!1;for(let i=0,o=this._callbacks.length;i<o;i++)if(this._callbacks[i]===e)if(this._contexts[i]===r){this._callbacks.splice(i,1),this._contexts.splice(i,1);return}else n=!0;if(n)throw new Error("When adding a listener with a context, you should remove it with the same context")}invoke(...e){if(!this._callbacks)return[];let r=[],n=this._callbacks.slice(0),i=this._contexts.slice(0);for(let o=0,a=n.length;o<a;o++)try{r.push(n[o].apply(i[o],e))}catch(s){(0,bj.default)().console.error(s)}return r}isEmpty(){return!this._callbacks||this._callbacks.length===0}dispose(){this._callbacks=void 0,this._contexts=void 0}},zl=class t{constructor(e){this._options=e}get event(){return this._event||(this._event=(e,r,n)=>{this._callbacks||(this._callbacks=new Fm),this._options&&this._options.onFirstListenerAdd&&this._callbacks.isEmpty()&&this._options.onFirstListenerAdd(this),this._callbacks.add(e,r);let i={dispose:()=>{this._callbacks&&(this._callbacks.remove(e,r),i.dispose=t._noop,this._options&&this._options.onLastListenerRemove&&this._callbacks.isEmpty()&&this._options.onLastListenerRemove(this))}};return Array.isArray(n)&&n.push(i),i}),this._event}fire(e){this._callbacks&&this._callbacks.invoke.call(this._callbacks,e)}dispose(){this._callbacks&&(this._callbacks.dispose(),this._callbacks=void 0)}};ha.Emitter=zl;zl._noop=function(){}});var Yl=h(ma=>{"use strict";Object.defineProperty(ma,"__esModule",{value:!0});ma.CancellationTokenSource=ma.CancellationToken=void 0;var Aj=wo(),Pj=Qa(),jm=Za(),Um;(function(t){t.None=Object.freeze({isCancellationRequested:!1,onCancellationRequested:jm.Event.None}),t.Cancelled=Object.freeze({isCancellationRequested:!0,onCancellationRequested:jm.Event.None});function e(r){let n=r;return n&&(n===t.None||n===t.Cancelled||Pj.boolean(n.isCancellationRequested)&&!!n.onCancellationRequested)}t.is=e})(Um=ma.CancellationToken||(ma.CancellationToken={}));var Sj=Object.freeze(function(t,e){let r=(0,Aj.default)().timer.setTimeout(t.bind(e),0);return{dispose(){r.dispose()}}}),Vl=class{constructor(){this._isCancelled=!1}cancel(){this._isCancelled||(this._isCancelled=!0,this._emitter&&(this._emitter.fire(void 0),this.dispose()))}get isCancellationRequested(){return this._isCancelled}get onCancellationRequested(){return this._isCancelled?Sj:(this._emitter||(this._emitter=new jm.Emitter),this._emitter.event)}dispose(){this._emitter&&(this._emitter.dispose(),this._emitter=void 0)}},Gm=class{get token(){return this._token||(this._token=new Vl),this._token}cancel(){this._token?this._token.cancel():this._token=Um.Cancelled}dispose(){this._token?this._token instanceof Vl&&this._token.dispose():this._token=Um.None}};ma.CancellationTokenSource=Gm});var RC=h(es=>{"use strict";Object.defineProperty(es,"__esModule",{value:!0});es.SharedArrayReceiverStrategy=es.SharedArraySenderStrategy=void 0;var Ej=Yl(),Qu;(function(t){t.Continue=0,t.Cancelled=1})(Qu||(Qu={}));var Hm=class{constructor(){this.buffers=new Map}enableCancellation(e){if(e.id===null)return;let r=new SharedArrayBuffer(4),n=new Int32Array(r,0,1);n[0]=Qu.Continue,this.buffers.set(e.id,r),e.$cancellationData=r}async sendCancellation(e,r){let n=this.buffers.get(r);if(n===void 0)return;let i=new Int32Array(n,0,1);Atomics.store(i,0,Qu.Cancelled)}cleanup(e){this.buffers.delete(e)}dispose(){this.buffers.clear()}};es.SharedArraySenderStrategy=Hm;var Wm=class{constructor(e){this.data=new Int32Array(e,0,1)}get isCancellationRequested(){return Atomics.load(this.data,0)===Qu.Cancelled}get onCancellationRequested(){throw new Error("Cancellation over SharedArrayBuffer doesn't support cancellation events")}},Km=class{constructor(e){this.token=new Wm(e)}cancel(){}dispose(){}},Bm=class{constructor(){this.kind="request"}createCancellationTokenSource(e){let r=e.$cancellationData;return r===void 0?new Ej.CancellationTokenSource:new Km(r)}};es.SharedArrayReceiverStrategy=Bm});var Vm=h(Xl=>{"use strict";Object.defineProperty(Xl,"__esModule",{value:!0});Xl.Semaphore=void 0;var kj=wo(),zm=class{constructor(e=1){if(e<=0)throw new Error("Capacity must be greater than 0");this._capacity=e,this._active=0,this._waiting=[]}lock(e){return new Promise((r,n)=>{this._waiting.push({thunk:e,resolve:r,reject:n}),this.runNext()})}get active(){return this._active}runNext(){this._waiting.length===0||this._active===this._capacity||(0,kj.default)().timer.setImmediate(()=>this.doRunNext())}doRunNext(){if(this._waiting.length===0||this._active===this._capacity)return;let e=this._waiting.shift();if(this._active++,this._active>this._capacity)throw new Error("To many thunks active");try{let r=e.thunk();r instanceof Promise?r.then(n=>{this._active--,e.resolve(n),this.runNext()},n=>{this._active--,e.reject(n),this.runNext()}):(this._active--,e.resolve(r),this.runNext())}catch(r){this._active--,e.reject(r),this.runNext()}}};Xl.Semaphore=zm});var bC=h(Xi=>{"use strict";Object.defineProperty(Xi,"__esModule",{value:!0});Xi.ReadableStreamMessageReader=Xi.AbstractMessageReader=Xi.MessageReader=void 0;var Xm=wo(),ts=Qa(),Ym=Za(),Nj=Vm(),wj;(function(t){function e(r){let n=r;return n&&ts.func(n.listen)&&ts.func(n.dispose)&&ts.func(n.onError)&&ts.func(n.onClose)&&ts.func(n.onPartialMessage)}t.is=e})(wj=Xi.MessageReader||(Xi.MessageReader={}));var Jl=class{constructor(){this.errorEmitter=new Ym.Emitter,this.closeEmitter=new Ym.Emitter,this.partialMessageEmitter=new Ym.Emitter}dispose(){this.errorEmitter.dispose(),this.closeEmitter.dispose()}get onError(){return this.errorEmitter.event}fireError(e){this.errorEmitter.fire(this.asError(e))}get onClose(){return this.closeEmitter.event}fireClose(){this.closeEmitter.fire(void 0)}get onPartialMessage(){return this.partialMessageEmitter.event}firePartialMessage(e){this.partialMessageEmitter.fire(e)}asError(e){return e instanceof Error?e:new Error(`Reader received error. Reason: ${ts.string(e.message)?e.message:"unknown"}`)}};Xi.AbstractMessageReader=Jl;var Jm;(function(t){function e(r){let n,i,o,a=new Map,s,u=new Map;if(r===void 0||typeof r=="string")n=r??"utf-8";else{if(n=r.charset??"utf-8",r.contentDecoder!==void 0&&(o=r.contentDecoder,a.set(o.name,o)),r.contentDecoders!==void 0)for(let d of r.contentDecoders)a.set(d.name,d);if(r.contentTypeDecoder!==void 0&&(s=r.contentTypeDecoder,u.set(s.name,s)),r.contentTypeDecoders!==void 0)for(let d of r.contentTypeDecoders)u.set(d.name,d)}return s===void 0&&(s=(0,Xm.default)().applicationJson.decoder,u.set(s.name,s)),{charset:n,contentDecoder:o,contentDecoders:a,contentTypeDecoder:s,contentTypeDecoders:u}}t.fromOptions=e})(Jm||(Jm={}));var Qm=class extends Jl{constructor(e,r){super(),this.readable=e,this.options=Jm.fromOptions(r),this.buffer=(0,Xm.default)().messageBuffer.create(this.options.charset),this._partialMessageTimeout=1e4,this.nextMessageLength=-1,this.messageToken=0,this.readSemaphore=new Nj.Semaphore(1)}set partialMessageTimeout(e){this._partialMessageTimeout=e}get partialMessageTimeout(){return this._partialMessageTimeout}listen(e){this.nextMessageLength=-1,this.messageToken=0,this.partialMessageTimer=void 0,this.callback=e;let r=this.readable.onData(n=>{this.onData(n)});return this.readable.onError(n=>this.fireError(n)),this.readable.onClose(()=>this.fireClose()),r}onData(e){for(this.buffer.append(e);;){if(this.nextMessageLength===-1){let n=this.buffer.tryReadHeaders(!0);if(!n)return;let i=n.get("content-length");if(!i){this.fireError(new Error("Header must provide a Content-Length property."));return}let o=parseInt(i);if(isNaN(o)){this.fireError(new Error("Content-Length value must be a number."));return}this.nextMessageLength=o}let r=this.buffer.tryReadBody(this.nextMessageLength);if(r===void 0){this.setPartialMessageTimer();return}this.clearPartialMessageTimer(),this.nextMessageLength=-1,this.readSemaphore.lock(async()=>{let n=this.options.contentDecoder!==void 0?await this.options.contentDecoder.decode(r):r,i=await this.options.contentTypeDecoder.decode(n,this.options);this.callback(i)}).catch(n=>{this.fireError(n)})}}clearPartialMessageTimer(){this.partialMessageTimer&&(this.partialMessageTimer.dispose(),this.partialMessageTimer=void 0)}setPartialMessageTimer(){this.clearPartialMessageTimer(),!(this._partialMessageTimeout<=0)&&(this.partialMessageTimer=(0,Xm.default)().timer.setTimeout((e,r)=>{this.partialMessageTimer=void 0,e===this.messageToken&&(this.firePartialMessage({messageToken:e,waitingTime:r}),this.setPartialMessageTimer())},this._partialMessageTimeout,this.messageToken,this._partialMessageTimeout))}};Xi.ReadableStreamMessageReader=Qm});var SC=h(Ji=>{"use strict";Object.defineProperty(Ji,"__esModule",{value:!0});Ji.WriteableStreamMessageWriter=Ji.AbstractMessageWriter=Ji.MessageWriter=void 0;var CC=wo(),Zu=Qa(),Dj=Vm(),AC=Za(),Oj="Content-Length: ",PC=`\r
`,Ij;(function(t){function e(r){let n=r;return n&&Zu.func(n.dispose)&&Zu.func(n.onClose)&&Zu.func(n.onError)&&Zu.func(n.write)}t.is=e})(Ij=Ji.MessageWriter||(Ji.MessageWriter={}));var Ql=class{constructor(){this.errorEmitter=new AC.Emitter,this.closeEmitter=new AC.Emitter}dispose(){this.errorEmitter.dispose(),this.closeEmitter.dispose()}get onError(){return this.errorEmitter.event}fireError(e,r,n){this.errorEmitter.fire([this.asError(e),r,n])}get onClose(){return this.closeEmitter.event}fireClose(){this.closeEmitter.fire(void 0)}asError(e){return e instanceof Error?e:new Error(`Writer received error. Reason: ${Zu.string(e.message)?e.message:"unknown"}`)}};Ji.AbstractMessageWriter=Ql;var Zm;(function(t){function e(r){return r===void 0||typeof r=="string"?{charset:r??"utf-8",contentTypeEncoder:(0,CC.default)().applicationJson.encoder}:{charset:r.charset??"utf-8",contentEncoder:r.contentEncoder,contentTypeEncoder:r.contentTypeEncoder??(0,CC.default)().applicationJson.encoder}}t.fromOptions=e})(Zm||(Zm={}));var eg=class extends Ql{constructor(e,r){super(),this.writable=e,this.options=Zm.fromOptions(r),this.errorCount=0,this.writeSemaphore=new Dj.Semaphore(1),this.writable.onError(n=>this.fireError(n)),this.writable.onClose(()=>this.fireClose())}async write(e){return this.writeSemaphore.lock(async()=>this.options.contentTypeEncoder.encode(e,this.options).then(n=>this.options.contentEncoder!==void 0?this.options.contentEncoder.encode(n):n).then(n=>{let i=[];return i.push(Oj,n.byteLength.toString(),PC),i.push(PC),this.doWrite(e,i,n)},n=>{throw this.fireError(n),n}))}async doWrite(e,r,n){try{return await this.writable.write(r.join(""),"ascii"),this.writable.write(n)}catch(i){return this.handleError(i,e),Promise.reject(i)}}handleError(e,r){this.errorCount++,this.fireError(e,r,this.errorCount)}end(){this.writable.end()}};Ji.WriteableStreamMessageWriter=eg});var EC=h(Zl=>{"use strict";Object.defineProperty(Zl,"__esModule",{value:!0});Zl.AbstractMessageBuffer=void 0;var qj=13,xj=10,Lj=`\r
`,tg=class{constructor(e="utf-8"){this._encoding=e,this._chunks=[],this._totalLength=0}get encoding(){return this._encoding}append(e){let r=typeof e=="string"?this.fromString(e,this._encoding):e;this._chunks.push(r),this._totalLength+=r.byteLength}tryReadHeaders(e=!1){if(this._chunks.length===0)return;let r=0,n=0,i=0,o=0;e:for(;n<this._chunks.length;){let d=this._chunks[n];for(i=0;i<d.length;){switch(d[i]){case qj:switch(r){case 0:r=1;break;case 2:r=3;break;default:r=0}break;case xj:switch(r){case 1:r=2;break;case 3:r=4,i++;break e;default:r=0}break;default:r=0}i++}o+=d.byteLength,n++}if(r!==4)return;let a=this._read(o+i),s=new Map,u=this.toString(a,"ascii").split(Lj);if(u.length<2)return s;for(let d=0;d<u.length-2;d++){let p=u[d],m=p.indexOf(":");if(m===-1)throw new Error("Message header must separate key and value using :");let v=p.substr(0,m),P=p.substr(m+1).trim();s.set(e?v.toLowerCase():v,P)}return s}tryReadBody(e){if(!(this._totalLength<e))return this._read(e)}get numberOfBytes(){return this._totalLength}_read(e){if(e===0)return this.emptyBuffer();if(e>this._totalLength)throw new Error("Cannot read so many bytes!");if(this._chunks[0].byteLength===e){let o=this._chunks[0];return this._chunks.shift(),this._totalLength-=e,this.asNative(o)}if(this._chunks[0].byteLength>e){let o=this._chunks[0],a=this.asNative(o,e);return this._chunks[0]=o.slice(e),this._totalLength-=e,a}let r=this.allocNative(e),n=0,i=0;for(;e>0;){let o=this._chunks[i];if(o.byteLength>e){let a=o.slice(0,e);r.set(a,n),n+=e,this._chunks[i]=o.slice(e),this._totalLength-=e,e-=e}else r.set(o,n),n+=o.byteLength,this._chunks.shift(),this._totalLength-=o.byteLength,e-=o.byteLength}return r}};Zl.AbstractMessageBuffer=tg});var qC=h(ie=>{"use strict";Object.defineProperty(ie,"__esModule",{value:!0});ie.createMessageConnection=ie.ConnectionOptions=ie.MessageStrategy=ie.CancellationStrategy=ie.CancellationSenderStrategy=ie.CancellationReceiverStrategy=ie.RequestCancellationReceiverStrategy=ie.IdCancellationReceiverStrategy=ie.ConnectionStrategy=ie.ConnectionError=ie.ConnectionErrors=ie.LogTraceNotification=ie.SetTraceNotification=ie.TraceFormat=ie.TraceValues=ie.Trace=ie.NullLogger=ie.ProgressType=ie.ProgressToken=void 0;var kC=wo(),Ct=Qa(),ye=Im(),NC=xm(),ec=Za(),rg=Yl(),rc;(function(t){t.type=new ye.NotificationType("$/cancelRequest")})(rc||(rc={}));var wC;(function(t){function e(r){return typeof r=="string"||typeof r=="number"}t.is=e})(wC=ie.ProgressToken||(ie.ProgressToken={}));var tc;(function(t){t.type=new ye.NotificationType("$/progress")})(tc||(tc={}));var ng=class{constructor(){}};ie.ProgressType=ng;var ig;(function(t){function e(r){return Ct.func(r)}t.is=e})(ig||(ig={}));ie.NullLogger=Object.freeze({error:()=>{},warn:()=>{},info:()=>{},log:()=>{}});var We;(function(t){t[t.Off=0]="Off",t[t.Messages=1]="Messages",t[t.Compact=2]="Compact",t[t.Verbose=3]="Verbose"})(We=ie.Trace||(ie.Trace={}));var Mj;(function(t){t.Off="off",t.Messages="messages",t.Compact="compact",t.Verbose="verbose"})(Mj=ie.TraceValues||(ie.TraceValues={}));(function(t){function e(n){if(!Ct.string(n))return t.Off;switch(n=n.toLowerCase(),n){case"off":return t.Off;case"messages":return t.Messages;case"compact":return t.Compact;case"verbose":return t.Verbose;default:return t.Off}}t.fromString=e;function r(n){switch(n){case t.Off:return"off";case t.Messages:return"messages";case t.Compact:return"compact";case t.Verbose:return"verbose";default:return"off"}}t.toString=r})(We=ie.Trace||(ie.Trace={}));var $n;(function(t){t.Text="text",t.JSON="json"})($n=ie.TraceFormat||(ie.TraceFormat={}));(function(t){function e(r){return Ct.string(r)?(r=r.toLowerCase(),r==="json"?t.JSON:t.Text):t.Text}t.fromString=e})($n=ie.TraceFormat||(ie.TraceFormat={}));var DC;(function(t){t.type=new ye.NotificationType("$/setTrace")})(DC=ie.SetTraceNotification||(ie.SetTraceNotification={}));var og;(function(t){t.type=new ye.NotificationType("$/logTrace")})(og=ie.LogTraceNotification||(ie.LogTraceNotification={}));var ed;(function(t){t[t.Closed=1]="Closed",t[t.Disposed=2]="Disposed",t[t.AlreadyListening=3]="AlreadyListening"})(ed=ie.ConnectionErrors||(ie.ConnectionErrors={}));var rs=class t extends Error{constructor(e,r){super(r),this.code=e,Object.setPrototypeOf(this,t.prototype)}};ie.ConnectionError=rs;var OC;(function(t){function e(r){let n=r;return n&&Ct.func(n.cancelUndispatched)}t.is=e})(OC=ie.ConnectionStrategy||(ie.ConnectionStrategy={}));var ug;(function(t){function e(r){let n=r;return n&&(n.kind===void 0||n.kind==="id")&&Ct.func(n.createCancellationTokenSource)&&(n.dispose===void 0||Ct.func(n.dispose))}t.is=e})(ug=ie.IdCancellationReceiverStrategy||(ie.IdCancellationReceiverStrategy={}));var IC;(function(t){function e(r){let n=r;return n&&n.kind==="request"&&Ct.func(n.createCancellationTokenSource)&&(n.dispose===void 0||Ct.func(n.dispose))}t.is=e})(IC=ie.RequestCancellationReceiverStrategy||(ie.RequestCancellationReceiverStrategy={}));var ag;(function(t){t.Message=Object.freeze({createCancellationTokenSource(r){return new rg.CancellationTokenSource}});function e(r){return ug.is(r)||IC.is(r)}t.is=e})(ag=ie.CancellationReceiverStrategy||(ie.CancellationReceiverStrategy={}));var sg;(function(t){t.Message=Object.freeze({sendCancellation(r,n){return r.sendNotification(rc.type,{id:n})},cleanup(r){}});function e(r){let n=r;return n&&Ct.func(n.sendCancellation)&&Ct.func(n.cleanup)}t.is=e})(sg=ie.CancellationSenderStrategy||(ie.CancellationSenderStrategy={}));var cg;(function(t){t.Message=Object.freeze({receiver:ag.Message,sender:sg.Message});function e(r){let n=r;return n&&ag.is(n.receiver)&&sg.is(n.sender)}t.is=e})(cg=ie.CancellationStrategy||(ie.CancellationStrategy={}));var lg;(function(t){function e(r){let n=r;return n&&Ct.func(n.handleMessage)}t.is=e})(lg=ie.MessageStrategy||(ie.MessageStrategy={}));var $j;(function(t){function e(r){let n=r;return n&&(cg.is(n.cancellationStrategy)||OC.is(n.connectionStrategy)||lg.is(n.messageStrategy))}t.is=e})($j=ie.ConnectionOptions||(ie.ConnectionOptions={}));var Fn;(function(t){t[t.New=1]="New",t[t.Listening=2]="Listening",t[t.Closed=3]="Closed",t[t.Disposed=4]="Disposed"})(Fn||(Fn={}));function Fj(t,e,r,n){let i=r!==void 0?r:ie.NullLogger,o=0,a=0,s=0,u="2.0",d,p=new Map,m,v=new Map,P=new Map,_,N=new NC.LinkedMap,I=new Map,O=new Set,E=new Map,S=We.Off,L=$n.Text,U,V=Fn.New,te=new ec.Emitter,we=new ec.Emitter,Z=new ec.Emitter,G=new ec.Emitter,j=new ec.Emitter,Y=n&&n.cancellationStrategy?n.cancellationStrategy:cg.Message;function J(T){if(T===null)throw new Error("Can't send requests with id null since the response can't be correlated.");return"req-"+T.toString()}function Ce(T){return T===null?"res-unknown-"+(++s).toString():"res-"+T.toString()}function _e(){return"not-"+(++a).toString()}function me(T,q){ye.Message.isRequest(q)?T.set(J(q.id),q):ye.Message.isResponse(q)?T.set(Ce(q.id),q):T.set(_e(),q)}function Je(T){}function Ve(){return V===Fn.Listening}function Se(){return V===Fn.Closed}function st(){return V===Fn.Disposed}function ur(){(V===Fn.New||V===Fn.Listening)&&(V=Fn.Closed,we.fire(void 0))}function Tr(T){te.fire([T,void 0,void 0])}function di(T){te.fire(T)}t.onClose(ur),t.onError(Tr),e.onClose(ur),e.onError(di);function Ln(){_||N.size===0||(_=(0,kC.default)().timer.setImmediate(()=>{_=void 0,Kt()}))}function Mn(T){ye.Message.isRequest(T)?pi(T):ye.Message.isNotification(T)?Bi(T):ye.Message.isResponse(T)?hi(T):Qe(T)}function Kt(){if(N.size===0)return;let T=N.shift();try{let q=n?.messageStrategy;lg.is(q)?q.handleMessage(T,Mn):Mn(T)}finally{Ln()}}let fi=T=>{try{if(ye.Message.isNotification(T)&&T.method===rc.type.method){let q=T.params.id,M=J(q),H=N.get(M);if(ye.Message.isRequest(H)){let fe=n?.connectionStrategy,Te=fe&&fe.cancelUndispatched?fe.cancelUndispatched(H,Je):void 0;if(Te&&(Te.error!==void 0||Te.result!==void 0)){N.delete(M),E.delete(q),Te.id=H.id,Kr(Te,T.method,Date.now()),e.write(Te).catch(()=>i.error("Sending response for canceled message failed."));return}}let le=E.get(q);if(le!==void 0){le.cancel(),on(T);return}else O.add(q)}me(N,T)}finally{Ln()}};function pi(T){if(st())return;function q(re,ne,pe){let Ee={jsonrpc:u,id:T.id};re instanceof ye.ResponseError?Ee.error=re.toJson():Ee.result=re===void 0?null:re,Kr(Ee,ne,pe),e.write(Ee).catch(()=>i.error("Sending response failed."))}function M(re,ne,pe){let Ee={jsonrpc:u,id:T.id,error:re.toJson()};Kr(Ee,ne,pe),e.write(Ee).catch(()=>i.error("Sending response failed."))}function H(re,ne,pe){re===void 0&&(re=null);let Ee={jsonrpc:u,id:T.id,result:re};Kr(Ee,ne,pe),e.write(Ee).catch(()=>i.error("Sending response failed."))}Br(T);let le=p.get(T.method),fe,Te;le&&(fe=le.type,Te=le.handler);let ae=Date.now();if(Te||d){let re=T.id??String(Date.now()),ne=ug.is(Y.receiver)?Y.receiver.createCancellationTokenSource(re):Y.receiver.createCancellationTokenSource(T);T.id!==null&&O.has(T.id)&&ne.cancel(),T.id!==null&&E.set(re,ne);try{let pe;if(Te)if(T.params===void 0){if(fe!==void 0&&fe.numberOfParams!==0){M(new ye.ResponseError(ye.ErrorCodes.InvalidParams,`Request ${T.method} defines ${fe.numberOfParams} params but received none.`),T.method,ae);return}pe=Te(ne.token)}else if(Array.isArray(T.params)){if(fe!==void 0&&fe.parameterStructures===ye.ParameterStructures.byName){M(new ye.ResponseError(ye.ErrorCodes.InvalidParams,`Request ${T.method} defines parameters by name but received parameters by position`),T.method,ae);return}pe=Te(...T.params,ne.token)}else{if(fe!==void 0&&fe.parameterStructures===ye.ParameterStructures.byPosition){M(new ye.ResponseError(ye.ErrorCodes.InvalidParams,`Request ${T.method} defines parameters by position but received parameters by name`),T.method,ae);return}pe=Te(T.params,ne.token)}else d&&(pe=d(T.method,T.params,ne.token));let Ee=pe;pe?Ee.then?Ee.then(Ze=>{E.delete(re),q(Ze,T.method,ae)},Ze=>{E.delete(re),Ze instanceof ye.ResponseError?M(Ze,T.method,ae):Ze&&Ct.string(Ze.message)?M(new ye.ResponseError(ye.ErrorCodes.InternalError,`Request ${T.method} failed with message: ${Ze.message}`),T.method,ae):M(new ye.ResponseError(ye.ErrorCodes.InternalError,`Request ${T.method} failed unexpectedly without providing any details.`),T.method,ae)}):(E.delete(re),q(pe,T.method,ae)):(E.delete(re),H(pe,T.method,ae))}catch(pe){E.delete(re),pe instanceof ye.ResponseError?q(pe,T.method,ae):pe&&Ct.string(pe.message)?M(new ye.ResponseError(ye.ErrorCodes.InternalError,`Request ${T.method} failed with message: ${pe.message}`),T.method,ae):M(new ye.ResponseError(ye.ErrorCodes.InternalError,`Request ${T.method} failed unexpectedly without providing any details.`),T.method,ae)}}else M(new ye.ResponseError(ye.ErrorCodes.MethodNotFound,`Unhandled method ${T.method}`),T.method,ae)}function hi(T){if(!st())if(T.id===null)T.error?i.error(`Received response message without id: Error is: 
${JSON.stringify(T.error,void 0,4)}`):i.error("Received response message without id. No further error information provided.");else{let q=T.id,M=I.get(q);if(Rr(T,M),M!==void 0){I.delete(q);try{if(T.error){let H=T.error;M.reject(new ye.ResponseError(H.code,H.message,H.data))}else if(T.result!==void 0)M.resolve(T.result);else throw new Error("Should never happen.")}catch(H){H.message?i.error(`Response handler '${M.method}' failed with message: ${H.message}`):i.error(`Response handler '${M.method}' failed unexpectedly.`)}}}}function Bi(T){if(st())return;let q,M;if(T.method===rc.type.method){let H=T.params.id;O.delete(H),on(T);return}else{let H=v.get(T.method);H&&(M=H.handler,q=H.type)}if(M||m)try{if(on(T),M)if(T.params===void 0)q!==void 0&&q.numberOfParams!==0&&q.parameterStructures!==ye.ParameterStructures.byName&&i.error(`Notification ${T.method} defines ${q.numberOfParams} params but received none.`),M();else if(Array.isArray(T.params)){let H=T.params;T.method===tc.type.method&&H.length===2&&wC.is(H[0])?M({token:H[0],value:H[1]}):(q!==void 0&&(q.parameterStructures===ye.ParameterStructures.byName&&i.error(`Notification ${T.method} defines parameters by name but received parameters by position`),q.numberOfParams!==T.params.length&&i.error(`Notification ${T.method} defines ${q.numberOfParams} params but received ${H.length} arguments`)),M(...H))}else q!==void 0&&q.parameterStructures===ye.ParameterStructures.byPosition&&i.error(`Notification ${T.method} defines parameters by position but received parameters by name`),M(T.params);else m&&m(T.method,T.params)}catch(H){H.message?i.error(`Notification handler '${T.method}' failed with message: ${H.message}`):i.error(`Notification handler '${T.method}' failed unexpectedly.`)}else Z.fire(T)}function Qe(T){if(!T){i.error("Received empty message.");return}i.error(`Received message which is neither a response nor a notification message:
${JSON.stringify(T,null,4)}`);let q=T;if(Ct.string(q.id)||Ct.number(q.id)){let M=q.id,H=I.get(M);H&&H.reject(new Error("The received response has neither a result nor an error property."))}}function wt(T){if(T!=null)switch(S){case We.Verbose:return JSON.stringify(T,null,4);case We.Compact:return JSON.stringify(T);default:return}}function zi(T){if(!(S===We.Off||!U))if(L===$n.Text){let q;(S===We.Verbose||S===We.Compact)&&T.params&&(q=`Params: ${wt(T.params)}

`),U.log(`Sending request '${T.method} - (${T.id})'.`,q)}else Dt("send-request",T)}function Wr(T){if(!(S===We.Off||!U))if(L===$n.Text){let q;(S===We.Verbose||S===We.Compact)&&(T.params?q=`Params: ${wt(T.params)}

`:q=`No parameters provided.

`),U.log(`Sending notification '${T.method}'.`,q)}else Dt("send-notification",T)}function Kr(T,q,M){if(!(S===We.Off||!U))if(L===$n.Text){let H;(S===We.Verbose||S===We.Compact)&&(T.error&&T.error.data?H=`Error data: ${wt(T.error.data)}

`:T.result?H=`Result: ${wt(T.result)}

`:T.error===void 0&&(H=`No result returned.

`)),U.log(`Sending response '${q} - (${T.id})'. Processing request took ${Date.now()-M}ms`,H)}else Dt("send-response",T)}function Br(T){if(!(S===We.Off||!U))if(L===$n.Text){let q;(S===We.Verbose||S===We.Compact)&&T.params&&(q=`Params: ${wt(T.params)}

`),U.log(`Received request '${T.method} - (${T.id})'.`,q)}else Dt("receive-request",T)}function on(T){if(!(S===We.Off||!U||T.method===og.type.method))if(L===$n.Text){let q;(S===We.Verbose||S===We.Compact)&&(T.params?q=`Params: ${wt(T.params)}

`:q=`No parameters provided.

`),U.log(`Received notification '${T.method}'.`,q)}else Dt("receive-notification",T)}function Rr(T,q){if(!(S===We.Off||!U))if(L===$n.Text){let M;if((S===We.Verbose||S===We.Compact)&&(T.error&&T.error.data?M=`Error data: ${wt(T.error.data)}

`:T.result?M=`Result: ${wt(T.result)}

`:T.error===void 0&&(M=`No result returned.

`)),q){let H=T.error?` Request failed: ${T.error.message} (${T.error.code}).`:"";U.log(`Received response '${q.method} - (${T.id})' in ${Date.now()-q.timerStart}ms.${H}`,M)}else U.log(`Received response ${T.id} without active response promise.`,M)}else Dt("receive-response",T)}function Dt(T,q){if(!U||S===We.Off)return;let M={isLSPMessage:!0,type:T,message:q,timestamp:Date.now()};U.log(M)}function zr(){if(Se())throw new rs(ed.Closed,"Connection is closed.");if(st())throw new rs(ed.Disposed,"Connection is disposed.")}function mi(){if(Ve())throw new rs(ed.AlreadyListening,"Connection is already listening")}function cr(){if(!Ve())throw new Error("Call listen() first.")}function Ot(T){return T===void 0?null:T}function _t(T){if(T!==null)return T}function br(T){return T!=null&&!Array.isArray(T)&&typeof T=="object"}function lr(T,q){switch(T){case ye.ParameterStructures.auto:return br(q)?_t(q):[Ot(q)];case ye.ParameterStructures.byName:if(!br(q))throw new Error("Received parameters by name but param is not an object literal.");return _t(q);case ye.ParameterStructures.byPosition:return[Ot(q)];default:throw new Error(`Unknown parameter structure ${T.toString()}`)}}function Or(T,q){let M,H=T.numberOfParams;switch(H){case 0:M=void 0;break;case 1:M=lr(T.parameterStructures,q[0]);break;default:M=[];for(let le=0;le<q.length&&le<H;le++)M.push(Ot(q[le]));if(q.length<H)for(let le=q.length;le<H;le++)M.push(null);break}return M}let D={sendNotification:(T,...q)=>{zr();let M,H;if(Ct.string(T)){M=T;let fe=q[0],Te=0,ae=ye.ParameterStructures.auto;ye.ParameterStructures.is(fe)&&(Te=1,ae=fe);let re=q.length,ne=re-Te;switch(ne){case 0:H=void 0;break;case 1:H=lr(ae,q[Te]);break;default:if(ae===ye.ParameterStructures.byName)throw new Error(`Received ${ne} parameters for 'by Name' notification parameter structure.`);H=q.slice(Te,re).map(pe=>Ot(pe));break}}else{let fe=q;M=T.method,H=Or(T,fe)}let le={jsonrpc:u,method:M,params:H};return Wr(le),e.write(le).catch(fe=>{throw i.error("Sending notification failed."),fe})},onNotification:(T,q)=>{zr();let M;return Ct.func(T)?m=T:q&&(Ct.string(T)?(M=T,v.set(T,{type:void 0,handler:q})):(M=T.method,v.set(T.method,{type:T,handler:q}))),{dispose:()=>{M!==void 0?v.delete(M):m=void 0}}},onProgress:(T,q,M)=>{if(P.has(q))throw new Error(`Progress handler for token ${q} already registered`);return P.set(q,M),{dispose:()=>{P.delete(q)}}},sendProgress:(T,q,M)=>D.sendNotification(tc.type,{token:q,value:M}),onUnhandledProgress:G.event,sendRequest:(T,...q)=>{zr(),cr();let M,H,le;if(Ct.string(T)){M=T;let re=q[0],ne=q[q.length-1],pe=0,Ee=ye.ParameterStructures.auto;ye.ParameterStructures.is(re)&&(pe=1,Ee=re);let Ze=q.length;rg.CancellationToken.is(ne)&&(Ze=Ze-1,le=ne);let Tt=Ze-pe;switch(Tt){case 0:H=void 0;break;case 1:H=lr(Ee,q[pe]);break;default:if(Ee===ye.ParameterStructures.byName)throw new Error(`Received ${Tt} parameters for 'by Name' request parameter structure.`);H=q.slice(pe,Ze).map(R=>Ot(R));break}}else{let re=q;M=T.method,H=Or(T,re);let ne=T.numberOfParams;le=rg.CancellationToken.is(re[ne])?re[ne]:void 0}let fe=o++,Te;le&&(Te=le.onCancellationRequested(()=>{let re=Y.sender.sendCancellation(D,fe);return re===void 0?(i.log(`Received no promise from cancellation strategy when cancelling id ${fe}`),Promise.resolve()):re.catch(()=>{i.log(`Sending cancellation messages for id ${fe} failed`)})}));let ae={jsonrpc:u,id:fe,method:M,params:H};return zi(ae),typeof Y.sender.enableCancellation=="function"&&Y.sender.enableCancellation(ae),new Promise(async(re,ne)=>{let pe=Tt=>{re(Tt),Y.sender.cleanup(fe),Te?.dispose()},Ee=Tt=>{ne(Tt),Y.sender.cleanup(fe),Te?.dispose()},Ze={method:M,timerStart:Date.now(),resolve:pe,reject:Ee};try{await e.write(ae),I.set(fe,Ze)}catch(Tt){throw i.error("Sending request failed."),Ze.reject(new ye.ResponseError(ye.ErrorCodes.MessageWriteError,Tt.message?Tt.message:"Unknown reason")),Tt}})},onRequest:(T,q)=>{zr();let M=null;return ig.is(T)?(M=void 0,d=T):Ct.string(T)?(M=null,q!==void 0&&(M=T,p.set(T,{handler:q,type:void 0}))):q!==void 0&&(M=T.method,p.set(T.method,{type:T,handler:q})),{dispose:()=>{M!==null&&(M!==void 0?p.delete(M):d=void 0)}}},hasPendingResponse:()=>I.size>0,trace:async(T,q,M)=>{let H=!1,le=$n.Text;M!==void 0&&(Ct.boolean(M)?H=M:(H=M.sendNotification||!1,le=M.traceFormat||$n.Text)),S=T,L=le,S===We.Off?U=void 0:U=q,H&&!Se()&&!st()&&await D.sendNotification(DC.type,{value:We.toString(T)})},onError:te.event,onClose:we.event,onUnhandledNotification:Z.event,onDispose:j.event,end:()=>{e.end()},dispose:()=>{if(st())return;V=Fn.Disposed,j.fire(void 0);let T=new ye.ResponseError(ye.ErrorCodes.PendingResponseRejected,"Pending response rejected since connection got disposed");for(let q of I.values())q.reject(T);I=new Map,E=new Map,O=new Set,N=new NC.LinkedMap,Ct.func(e.dispose)&&e.dispose(),Ct.func(t.dispose)&&t.dispose()},listen:()=>{zr(),mi(),V=Fn.Listening,t.listen(fi)},inspect:()=>{(0,kC.default)().console.log("inspect")}};return D.onNotification(og.type,T=>{if(S===We.Off||!U)return;let q=S===We.Verbose||S===We.Compact;U.log(T.message,q?T.verbose:void 0)}),D.onNotification(tc.type,T=>{let q=P.get(T.token);q?q(T.value):G.fire(T)}),D}ie.createMessageConnection=Fj});var td=h($=>{"use strict";Object.defineProperty($,"__esModule",{value:!0});$.ProgressType=$.ProgressToken=$.createMessageConnection=$.NullLogger=$.ConnectionOptions=$.ConnectionStrategy=$.AbstractMessageBuffer=$.WriteableStreamMessageWriter=$.AbstractMessageWriter=$.MessageWriter=$.ReadableStreamMessageReader=$.AbstractMessageReader=$.MessageReader=$.SharedArrayReceiverStrategy=$.SharedArraySenderStrategy=$.CancellationToken=$.CancellationTokenSource=$.Emitter=$.Event=$.Disposable=$.LRUCache=$.Touch=$.LinkedMap=$.ParameterStructures=$.NotificationType9=$.NotificationType8=$.NotificationType7=$.NotificationType6=$.NotificationType5=$.NotificationType4=$.NotificationType3=$.NotificationType2=$.NotificationType1=$.NotificationType0=$.NotificationType=$.ErrorCodes=$.ResponseError=$.RequestType9=$.RequestType8=$.RequestType7=$.RequestType6=$.RequestType5=$.RequestType4=$.RequestType3=$.RequestType2=$.RequestType1=$.RequestType0=$.RequestType=$.Message=$.RAL=void 0;$.MessageStrategy=$.CancellationStrategy=$.CancellationSenderStrategy=$.CancellationReceiverStrategy=$.ConnectionError=$.ConnectionErrors=$.LogTraceNotification=$.SetTraceNotification=$.TraceFormat=$.TraceValues=$.Trace=void 0;var nt=Im();Object.defineProperty($,"Message",{enumerable:!0,get:function(){return nt.Message}});Object.defineProperty($,"RequestType",{enumerable:!0,get:function(){return nt.RequestType}});Object.defineProperty($,"RequestType0",{enumerable:!0,get:function(){return nt.RequestType0}});Object.defineProperty($,"RequestType1",{enumerable:!0,get:function(){return nt.RequestType1}});Object.defineProperty($,"RequestType2",{enumerable:!0,get:function(){return nt.RequestType2}});Object.defineProperty($,"RequestType3",{enumerable:!0,get:function(){return nt.RequestType3}});Object.defineProperty($,"RequestType4",{enumerable:!0,get:function(){return nt.RequestType4}});Object.defineProperty($,"RequestType5",{enumerable:!0,get:function(){return nt.RequestType5}});Object.defineProperty($,"RequestType6",{enumerable:!0,get:function(){return nt.RequestType6}});Object.defineProperty($,"RequestType7",{enumerable:!0,get:function(){return nt.RequestType7}});Object.defineProperty($,"RequestType8",{enumerable:!0,get:function(){return nt.RequestType8}});Object.defineProperty($,"RequestType9",{enumerable:!0,get:function(){return nt.RequestType9}});Object.defineProperty($,"ResponseError",{enumerable:!0,get:function(){return nt.ResponseError}});Object.defineProperty($,"ErrorCodes",{enumerable:!0,get:function(){return nt.ErrorCodes}});Object.defineProperty($,"NotificationType",{enumerable:!0,get:function(){return nt.NotificationType}});Object.defineProperty($,"NotificationType0",{enumerable:!0,get:function(){return nt.NotificationType0}});Object.defineProperty($,"NotificationType1",{enumerable:!0,get:function(){return nt.NotificationType1}});Object.defineProperty($,"NotificationType2",{enumerable:!0,get:function(){return nt.NotificationType2}});Object.defineProperty($,"NotificationType3",{enumerable:!0,get:function(){return nt.NotificationType3}});Object.defineProperty($,"NotificationType4",{enumerable:!0,get:function(){return nt.NotificationType4}});Object.defineProperty($,"NotificationType5",{enumerable:!0,get:function(){return nt.NotificationType5}});Object.defineProperty($,"NotificationType6",{enumerable:!0,get:function(){return nt.NotificationType6}});Object.defineProperty($,"NotificationType7",{enumerable:!0,get:function(){return nt.NotificationType7}});Object.defineProperty($,"NotificationType8",{enumerable:!0,get:function(){return nt.NotificationType8}});Object.defineProperty($,"NotificationType9",{enumerable:!0,get:function(){return nt.NotificationType9}});Object.defineProperty($,"ParameterStructures",{enumerable:!0,get:function(){return nt.ParameterStructures}});var dg=xm();Object.defineProperty($,"LinkedMap",{enumerable:!0,get:function(){return dg.LinkedMap}});Object.defineProperty($,"LRUCache",{enumerable:!0,get:function(){return dg.LRUCache}});Object.defineProperty($,"Touch",{enumerable:!0,get:function(){return dg.Touch}});var jj=TC();Object.defineProperty($,"Disposable",{enumerable:!0,get:function(){return jj.Disposable}});var xC=Za();Object.defineProperty($,"Event",{enumerable:!0,get:function(){return xC.Event}});Object.defineProperty($,"Emitter",{enumerable:!0,get:function(){return xC.Emitter}});var LC=Yl();Object.defineProperty($,"CancellationTokenSource",{enumerable:!0,get:function(){return LC.CancellationTokenSource}});Object.defineProperty($,"CancellationToken",{enumerable:!0,get:function(){return LC.CancellationToken}});var MC=RC();Object.defineProperty($,"SharedArraySenderStrategy",{enumerable:!0,get:function(){return MC.SharedArraySenderStrategy}});Object.defineProperty($,"SharedArrayReceiverStrategy",{enumerable:!0,get:function(){return MC.SharedArrayReceiverStrategy}});var fg=bC();Object.defineProperty($,"MessageReader",{enumerable:!0,get:function(){return fg.MessageReader}});Object.defineProperty($,"AbstractMessageReader",{enumerable:!0,get:function(){return fg.AbstractMessageReader}});Object.defineProperty($,"ReadableStreamMessageReader",{enumerable:!0,get:function(){return fg.ReadableStreamMessageReader}});var pg=SC();Object.defineProperty($,"MessageWriter",{enumerable:!0,get:function(){return pg.MessageWriter}});Object.defineProperty($,"AbstractMessageWriter",{enumerable:!0,get:function(){return pg.AbstractMessageWriter}});Object.defineProperty($,"WriteableStreamMessageWriter",{enumerable:!0,get:function(){return pg.WriteableStreamMessageWriter}});var Uj=EC();Object.defineProperty($,"AbstractMessageBuffer",{enumerable:!0,get:function(){return Uj.AbstractMessageBuffer}});var dr=qC();Object.defineProperty($,"ConnectionStrategy",{enumerable:!0,get:function(){return dr.ConnectionStrategy}});Object.defineProperty($,"ConnectionOptions",{enumerable:!0,get:function(){return dr.ConnectionOptions}});Object.defineProperty($,"NullLogger",{enumerable:!0,get:function(){return dr.NullLogger}});Object.defineProperty($,"createMessageConnection",{enumerable:!0,get:function(){return dr.createMessageConnection}});Object.defineProperty($,"ProgressToken",{enumerable:!0,get:function(){return dr.ProgressToken}});Object.defineProperty($,"ProgressType",{enumerable:!0,get:function(){return dr.ProgressType}});Object.defineProperty($,"Trace",{enumerable:!0,get:function(){return dr.Trace}});Object.defineProperty($,"TraceValues",{enumerable:!0,get:function(){return dr.TraceValues}});Object.defineProperty($,"TraceFormat",{enumerable:!0,get:function(){return dr.TraceFormat}});Object.defineProperty($,"SetTraceNotification",{enumerable:!0,get:function(){return dr.SetTraceNotification}});Object.defineProperty($,"LogTraceNotification",{enumerable:!0,get:function(){return dr.LogTraceNotification}});Object.defineProperty($,"ConnectionErrors",{enumerable:!0,get:function(){return dr.ConnectionErrors}});Object.defineProperty($,"ConnectionError",{enumerable:!0,get:function(){return dr.ConnectionError}});Object.defineProperty($,"CancellationReceiverStrategy",{enumerable:!0,get:function(){return dr.CancellationReceiverStrategy}});Object.defineProperty($,"CancellationSenderStrategy",{enumerable:!0,get:function(){return dr.CancellationSenderStrategy}});Object.defineProperty($,"CancellationStrategy",{enumerable:!0,get:function(){return dr.CancellationStrategy}});Object.defineProperty($,"MessageStrategy",{enumerable:!0,get:function(){return dr.MessageStrategy}});var Gj=wo();$.RAL=Gj.default});var FC=h(yg=>{"use strict";Object.defineProperty(yg,"__esModule",{value:!0});var gi=td(),rd=class t extends gi.AbstractMessageBuffer{constructor(e="utf-8"){super(e),this.asciiDecoder=new TextDecoder("ascii")}emptyBuffer(){return t.emptyBuffer}fromString(e,r){return new TextEncoder().encode(e)}toString(e,r){return r==="ascii"?this.asciiDecoder.decode(e):new TextDecoder(r).decode(e)}asNative(e,r){return r===void 0?e:e.slice(0,r)}allocNative(e){return new Uint8Array(e)}};rd.emptyBuffer=new Uint8Array(0);var hg=class{constructor(e){this.socket=e,this._onData=new gi.Emitter,this._messageListener=r=>{r.data.arrayBuffer().then(i=>{this._onData.fire(new Uint8Array(i))},()=>{(0,gi.RAL)().console.error("Converting blob to array buffer failed.")})},this.socket.addEventListener("message",this._messageListener)}onClose(e){return this.socket.addEventListener("close",e),gi.Disposable.create(()=>this.socket.removeEventListener("close",e))}onError(e){return this.socket.addEventListener("error",e),gi.Disposable.create(()=>this.socket.removeEventListener("error",e))}onEnd(e){return this.socket.addEventListener("end",e),gi.Disposable.create(()=>this.socket.removeEventListener("end",e))}onData(e){return this._onData.event(e)}},mg=class{constructor(e){this.socket=e}onClose(e){return this.socket.addEventListener("close",e),gi.Disposable.create(()=>this.socket.removeEventListener("close",e))}onError(e){return this.socket.addEventListener("error",e),gi.Disposable.create(()=>this.socket.removeEventListener("error",e))}onEnd(e){return this.socket.addEventListener("end",e),gi.Disposable.create(()=>this.socket.removeEventListener("end",e))}write(e,r){if(typeof e=="string"){if(r!==void 0&&r!=="utf-8")throw new Error(`In a Browser environments only utf-8 text encoding is supported. But got encoding: ${r}`);this.socket.send(e)}else this.socket.send(e);return Promise.resolve()}end(){this.socket.close()}},Hj=new TextEncoder,$C=Object.freeze({messageBuffer:Object.freeze({create:t=>new rd(t)}),applicationJson:Object.freeze({encoder:Object.freeze({name:"application/json",encode:(t,e)=>{if(e.charset!=="utf-8")throw new Error(`In a Browser environments only utf-8 text encoding is supported. But got encoding: ${e.charset}`);return Promise.resolve(Hj.encode(JSON.stringify(t,void 0,0)))}}),decoder:Object.freeze({name:"application/json",decode:(t,e)=>{if(!(t instanceof Uint8Array))throw new Error("In a Browser environments only Uint8Arrays are supported.");return Promise.resolve(JSON.parse(new TextDecoder(e.charset).decode(t)))}})}),stream:Object.freeze({asReadableStream:t=>new hg(t),asWritableStream:t=>new mg(t)}),console,timer:Object.freeze({setTimeout(t,e,...r){let n=setTimeout(t,e,...r);return{dispose:()=>clearTimeout(n)}},setImmediate(t,...e){let r=setTimeout(t,0,...e);return{dispose:()=>clearTimeout(r)}},setInterval(t,e,...r){let n=setInterval(t,e,...r);return{dispose:()=>clearInterval(n)}}})});function gg(){return $C}(function(t){function e(){gi.RAL.install($C)}t.install=e})(gg||(gg={}));yg.default=gg});var ga=h(sn=>{"use strict";var Wj=sn&&sn.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var i=Object.getOwnPropertyDescriptor(e,r);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,i)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),Kj=sn&&sn.__exportStar||function(t,e){for(var r in t)r!=="default"&&!Object.prototype.hasOwnProperty.call(e,r)&&Wj(e,t,r)};Object.defineProperty(sn,"__esModule",{value:!0});sn.createMessageConnection=sn.BrowserMessageWriter=sn.BrowserMessageReader=void 0;var Bj=FC();Bj.default.install();var ns=td();Kj(td(),sn);var vg=class extends ns.AbstractMessageReader{constructor(e){super(),this._onData=new ns.Emitter,this._messageListener=r=>{this._onData.fire(r.data)},e.addEventListener("error",r=>this.fireError(r)),e.onmessage=this._messageListener}listen(e){return this._onData.event(e)}};sn.BrowserMessageReader=vg;var _g=class extends ns.AbstractMessageWriter{constructor(e){super(),this.port=e,this.errorCount=0,e.addEventListener("error",r=>this.fireError(r))}write(e){try{return this.port.postMessage(e),Promise.resolve()}catch(r){return this.handleError(r,e),Promise.reject(r)}}handleError(e,r){this.errorCount++,this.fireError(e,r,this.errorCount)}end(){}};sn.BrowserMessageWriter=_g;function zj(t,e,r,n){return r===void 0&&(r=ns.NullLogger),ns.ConnectionStrategy.is(n)&&(n={connectionStrategy:n}),(0,ns.createMessageConnection)(t,e,r,n)}sn.createMessageConnection=zj});var Tg=h((Hme,jC)=>{"use strict";jC.exports=ga()});var id=h((UC,nd)=>{(function(t){if(typeof nd=="object"&&typeof nd.exports=="object"){var e=t(Kl,UC);e!==void 0&&(nd.exports=e)}else typeof define=="function"&&define.amd&&define(["require","exports"],t)})(function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.TextDocument=e.EOL=e.WorkspaceFolder=e.InlayHint=e.InlayHintLabelPart=e.InlayHintKind=e.InlineValueContext=e.InlineValueEvaluatableExpression=e.InlineValueVariableLookup=e.InlineValueText=e.SemanticTokens=e.SemanticTokenModifiers=e.SemanticTokenTypes=e.SelectionRange=e.DocumentLink=e.FormattingOptions=e.CodeLens=e.CodeAction=e.CodeActionContext=e.CodeActionTriggerKind=e.CodeActionKind=e.DocumentSymbol=e.WorkspaceSymbol=e.SymbolInformation=e.SymbolTag=e.SymbolKind=e.DocumentHighlight=e.DocumentHighlightKind=e.SignatureInformation=e.ParameterInformation=e.Hover=e.MarkedString=e.CompletionList=e.CompletionItem=e.CompletionItemLabelDetails=e.InsertTextMode=e.InsertReplaceEdit=e.CompletionItemTag=e.InsertTextFormat=e.CompletionItemKind=e.MarkupContent=e.MarkupKind=e.TextDocumentItem=e.OptionalVersionedTextDocumentIdentifier=e.VersionedTextDocumentIdentifier=e.TextDocumentIdentifier=e.WorkspaceChange=e.WorkspaceEdit=e.DeleteFile=e.RenameFile=e.CreateFile=e.TextDocumentEdit=e.AnnotatedTextEdit=e.ChangeAnnotationIdentifier=e.ChangeAnnotation=e.TextEdit=e.Command=e.Diagnostic=e.CodeDescription=e.DiagnosticTag=e.DiagnosticSeverity=e.DiagnosticRelatedInformation=e.FoldingRange=e.FoldingRangeKind=e.ColorPresentation=e.ColorInformation=e.Color=e.LocationLink=e.Location=e.Range=e.Position=e.uinteger=e.integer=e.URI=e.DocumentUri=void 0;var r;(function(l){function g(y){return typeof y=="string"}l.is=g})(r=e.DocumentUri||(e.DocumentUri={}));var n;(function(l){function g(y){return typeof y=="string"}l.is=g})(n=e.URI||(e.URI={}));var i;(function(l){l.MIN_VALUE=-2147483648,l.MAX_VALUE=2147483647;function g(y){return typeof y=="number"&&l.MIN_VALUE<=y&&y<=l.MAX_VALUE}l.is=g})(i=e.integer||(e.integer={}));var o;(function(l){l.MIN_VALUE=0,l.MAX_VALUE=2147483647;function g(y){return typeof y=="number"&&l.MIN_VALUE<=y&&y<=l.MAX_VALUE}l.is=g})(o=e.uinteger||(e.uinteger={}));var a;(function(l){function g(f,c){return f===Number.MAX_VALUE&&(f=o.MAX_VALUE),c===Number.MAX_VALUE&&(c=o.MAX_VALUE),{line:f,character:c}}l.create=g;function y(f){var c=f;return R.objectLiteral(c)&&R.uinteger(c.line)&&R.uinteger(c.character)}l.is=y})(a=e.Position||(e.Position={}));var s;(function(l){function g(f,c,b,w){if(R.uinteger(f)&&R.uinteger(c)&&R.uinteger(b)&&R.uinteger(w))return{start:a.create(f,c),end:a.create(b,w)};if(a.is(f)&&a.is(c))return{start:f,end:c};throw new Error("Range#create called with invalid arguments[".concat(f,", ").concat(c,", ").concat(b,", ").concat(w,"]"))}l.create=g;function y(f){var c=f;return R.objectLiteral(c)&&a.is(c.start)&&a.is(c.end)}l.is=y})(s=e.Range||(e.Range={}));var u;(function(l){function g(f,c){return{uri:f,range:c}}l.create=g;function y(f){var c=f;return R.objectLiteral(c)&&s.is(c.range)&&(R.string(c.uri)||R.undefined(c.uri))}l.is=y})(u=e.Location||(e.Location={}));var d;(function(l){function g(f,c,b,w){return{targetUri:f,targetRange:c,targetSelectionRange:b,originSelectionRange:w}}l.create=g;function y(f){var c=f;return R.objectLiteral(c)&&s.is(c.targetRange)&&R.string(c.targetUri)&&s.is(c.targetSelectionRange)&&(s.is(c.originSelectionRange)||R.undefined(c.originSelectionRange))}l.is=y})(d=e.LocationLink||(e.LocationLink={}));var p;(function(l){function g(f,c,b,w){return{red:f,green:c,blue:b,alpha:w}}l.create=g;function y(f){var c=f;return R.objectLiteral(c)&&R.numberRange(c.red,0,1)&&R.numberRange(c.green,0,1)&&R.numberRange(c.blue,0,1)&&R.numberRange(c.alpha,0,1)}l.is=y})(p=e.Color||(e.Color={}));var m;(function(l){function g(f,c){return{range:f,color:c}}l.create=g;function y(f){var c=f;return R.objectLiteral(c)&&s.is(c.range)&&p.is(c.color)}l.is=y})(m=e.ColorInformation||(e.ColorInformation={}));var v;(function(l){function g(f,c,b){return{label:f,textEdit:c,additionalTextEdits:b}}l.create=g;function y(f){var c=f;return R.objectLiteral(c)&&R.string(c.label)&&(R.undefined(c.textEdit)||U.is(c))&&(R.undefined(c.additionalTextEdits)||R.typedArray(c.additionalTextEdits,U.is))}l.is=y})(v=e.ColorPresentation||(e.ColorPresentation={}));var P;(function(l){l.Comment="comment",l.Imports="imports",l.Region="region"})(P=e.FoldingRangeKind||(e.FoldingRangeKind={}));var _;(function(l){function g(f,c,b,w,W,Re){var he={startLine:f,endLine:c};return R.defined(b)&&(he.startCharacter=b),R.defined(w)&&(he.endCharacter=w),R.defined(W)&&(he.kind=W),R.defined(Re)&&(he.collapsedText=Re),he}l.create=g;function y(f){var c=f;return R.objectLiteral(c)&&R.uinteger(c.startLine)&&R.uinteger(c.startLine)&&(R.undefined(c.startCharacter)||R.uinteger(c.startCharacter))&&(R.undefined(c.endCharacter)||R.uinteger(c.endCharacter))&&(R.undefined(c.kind)||R.string(c.kind))}l.is=y})(_=e.FoldingRange||(e.FoldingRange={}));var N;(function(l){function g(f,c){return{location:f,message:c}}l.create=g;function y(f){var c=f;return R.defined(c)&&u.is(c.location)&&R.string(c.message)}l.is=y})(N=e.DiagnosticRelatedInformation||(e.DiagnosticRelatedInformation={}));var I;(function(l){l.Error=1,l.Warning=2,l.Information=3,l.Hint=4})(I=e.DiagnosticSeverity||(e.DiagnosticSeverity={}));var O;(function(l){l.Unnecessary=1,l.Deprecated=2})(O=e.DiagnosticTag||(e.DiagnosticTag={}));var E;(function(l){function g(y){var f=y;return R.objectLiteral(f)&&R.string(f.href)}l.is=g})(E=e.CodeDescription||(e.CodeDescription={}));var S;(function(l){function g(f,c,b,w,W,Re){var he={range:f,message:c};return R.defined(b)&&(he.severity=b),R.defined(w)&&(he.code=w),R.defined(W)&&(he.source=W),R.defined(Re)&&(he.relatedInformation=Re),he}l.create=g;function y(f){var c,b=f;return R.defined(b)&&s.is(b.range)&&R.string(b.message)&&(R.number(b.severity)||R.undefined(b.severity))&&(R.integer(b.code)||R.string(b.code)||R.undefined(b.code))&&(R.undefined(b.codeDescription)||R.string((c=b.codeDescription)===null||c===void 0?void 0:c.href))&&(R.string(b.source)||R.undefined(b.source))&&(R.undefined(b.relatedInformation)||R.typedArray(b.relatedInformation,N.is))}l.is=y})(S=e.Diagnostic||(e.Diagnostic={}));var L;(function(l){function g(f,c){for(var b=[],w=2;w<arguments.length;w++)b[w-2]=arguments[w];var W={title:f,command:c};return R.defined(b)&&b.length>0&&(W.arguments=b),W}l.create=g;function y(f){var c=f;return R.defined(c)&&R.string(c.title)&&R.string(c.command)}l.is=y})(L=e.Command||(e.Command={}));var U;(function(l){function g(b,w){return{range:b,newText:w}}l.replace=g;function y(b,w){return{range:{start:b,end:b},newText:w}}l.insert=y;function f(b){return{range:b,newText:""}}l.del=f;function c(b){var w=b;return R.objectLiteral(w)&&R.string(w.newText)&&s.is(w.range)}l.is=c})(U=e.TextEdit||(e.TextEdit={}));var V;(function(l){function g(f,c,b){var w={label:f};return c!==void 0&&(w.needsConfirmation=c),b!==void 0&&(w.description=b),w}l.create=g;function y(f){var c=f;return R.objectLiteral(c)&&R.string(c.label)&&(R.boolean(c.needsConfirmation)||c.needsConfirmation===void 0)&&(R.string(c.description)||c.description===void 0)}l.is=y})(V=e.ChangeAnnotation||(e.ChangeAnnotation={}));var te;(function(l){function g(y){var f=y;return R.string(f)}l.is=g})(te=e.ChangeAnnotationIdentifier||(e.ChangeAnnotationIdentifier={}));var we;(function(l){function g(b,w,W){return{range:b,newText:w,annotationId:W}}l.replace=g;function y(b,w,W){return{range:{start:b,end:b},newText:w,annotationId:W}}l.insert=y;function f(b,w){return{range:b,newText:"",annotationId:w}}l.del=f;function c(b){var w=b;return U.is(w)&&(V.is(w.annotationId)||te.is(w.annotationId))}l.is=c})(we=e.AnnotatedTextEdit||(e.AnnotatedTextEdit={}));var Z;(function(l){function g(f,c){return{textDocument:f,edits:c}}l.create=g;function y(f){var c=f;return R.defined(c)&&Se.is(c.textDocument)&&Array.isArray(c.edits)}l.is=y})(Z=e.TextDocumentEdit||(e.TextDocumentEdit={}));var G;(function(l){function g(f,c,b){var w={kind:"create",uri:f};return c!==void 0&&(c.overwrite!==void 0||c.ignoreIfExists!==void 0)&&(w.options=c),b!==void 0&&(w.annotationId=b),w}l.create=g;function y(f){var c=f;return c&&c.kind==="create"&&R.string(c.uri)&&(c.options===void 0||(c.options.overwrite===void 0||R.boolean(c.options.overwrite))&&(c.options.ignoreIfExists===void 0||R.boolean(c.options.ignoreIfExists)))&&(c.annotationId===void 0||te.is(c.annotationId))}l.is=y})(G=e.CreateFile||(e.CreateFile={}));var j;(function(l){function g(f,c,b,w){var W={kind:"rename",oldUri:f,newUri:c};return b!==void 0&&(b.overwrite!==void 0||b.ignoreIfExists!==void 0)&&(W.options=b),w!==void 0&&(W.annotationId=w),W}l.create=g;function y(f){var c=f;return c&&c.kind==="rename"&&R.string(c.oldUri)&&R.string(c.newUri)&&(c.options===void 0||(c.options.overwrite===void 0||R.boolean(c.options.overwrite))&&(c.options.ignoreIfExists===void 0||R.boolean(c.options.ignoreIfExists)))&&(c.annotationId===void 0||te.is(c.annotationId))}l.is=y})(j=e.RenameFile||(e.RenameFile={}));var Y;(function(l){function g(f,c,b){var w={kind:"delete",uri:f};return c!==void 0&&(c.recursive!==void 0||c.ignoreIfNotExists!==void 0)&&(w.options=c),b!==void 0&&(w.annotationId=b),w}l.create=g;function y(f){var c=f;return c&&c.kind==="delete"&&R.string(c.uri)&&(c.options===void 0||(c.options.recursive===void 0||R.boolean(c.options.recursive))&&(c.options.ignoreIfNotExists===void 0||R.boolean(c.options.ignoreIfNotExists)))&&(c.annotationId===void 0||te.is(c.annotationId))}l.is=y})(Y=e.DeleteFile||(e.DeleteFile={}));var J;(function(l){function g(y){var f=y;return f&&(f.changes!==void 0||f.documentChanges!==void 0)&&(f.documentChanges===void 0||f.documentChanges.every(function(c){return R.string(c.kind)?G.is(c)||j.is(c)||Y.is(c):Z.is(c)}))}l.is=g})(J=e.WorkspaceEdit||(e.WorkspaceEdit={}));var Ce=function(){function l(g,y){this.edits=g,this.changeAnnotations=y}return l.prototype.insert=function(g,y,f){var c,b;if(f===void 0?c=U.insert(g,y):te.is(f)?(b=f,c=we.insert(g,y,f)):(this.assertChangeAnnotations(this.changeAnnotations),b=this.changeAnnotations.manage(f),c=we.insert(g,y,b)),this.edits.push(c),b!==void 0)return b},l.prototype.replace=function(g,y,f){var c,b;if(f===void 0?c=U.replace(g,y):te.is(f)?(b=f,c=we.replace(g,y,f)):(this.assertChangeAnnotations(this.changeAnnotations),b=this.changeAnnotations.manage(f),c=we.replace(g,y,b)),this.edits.push(c),b!==void 0)return b},l.prototype.delete=function(g,y){var f,c;if(y===void 0?f=U.del(g):te.is(y)?(c=y,f=we.del(g,y)):(this.assertChangeAnnotations(this.changeAnnotations),c=this.changeAnnotations.manage(y),f=we.del(g,c)),this.edits.push(f),c!==void 0)return c},l.prototype.add=function(g){this.edits.push(g)},l.prototype.all=function(){return this.edits},l.prototype.clear=function(){this.edits.splice(0,this.edits.length)},l.prototype.assertChangeAnnotations=function(g){if(g===void 0)throw new Error("Text edit change is not configured to manage change annotations.")},l}(),_e=function(){function l(g){this._annotations=g===void 0?Object.create(null):g,this._counter=0,this._size=0}return l.prototype.all=function(){return this._annotations},Object.defineProperty(l.prototype,"size",{get:function(){return this._size},enumerable:!1,configurable:!0}),l.prototype.manage=function(g,y){var f;if(te.is(g)?f=g:(f=this.nextId(),y=g),this._annotations[f]!==void 0)throw new Error("Id ".concat(f," is already in use."));if(y===void 0)throw new Error("No annotation provided for id ".concat(f));return this._annotations[f]=y,this._size++,f},l.prototype.nextId=function(){return this._counter++,this._counter.toString()},l}(),me=function(){function l(g){var y=this;this._textEditChanges=Object.create(null),g!==void 0?(this._workspaceEdit=g,g.documentChanges?(this._changeAnnotations=new _e(g.changeAnnotations),g.changeAnnotations=this._changeAnnotations.all(),g.documentChanges.forEach(function(f){if(Z.is(f)){var c=new Ce(f.edits,y._changeAnnotations);y._textEditChanges[f.textDocument.uri]=c}})):g.changes&&Object.keys(g.changes).forEach(function(f){var c=new Ce(g.changes[f]);y._textEditChanges[f]=c})):this._workspaceEdit={}}return Object.defineProperty(l.prototype,"edit",{get:function(){return this.initDocumentChanges(),this._changeAnnotations!==void 0&&(this._changeAnnotations.size===0?this._workspaceEdit.changeAnnotations=void 0:this._workspaceEdit.changeAnnotations=this._changeAnnotations.all()),this._workspaceEdit},enumerable:!1,configurable:!0}),l.prototype.getTextEditChange=function(g){if(Se.is(g)){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var y={uri:g.uri,version:g.version},f=this._textEditChanges[y.uri];if(!f){var c=[],b={textDocument:y,edits:c};this._workspaceEdit.documentChanges.push(b),f=new Ce(c,this._changeAnnotations),this._textEditChanges[y.uri]=f}return f}else{if(this.initChanges(),this._workspaceEdit.changes===void 0)throw new Error("Workspace edit is not configured for normal text edit changes.");var f=this._textEditChanges[g];if(!f){var c=[];this._workspaceEdit.changes[g]=c,f=new Ce(c),this._textEditChanges[g]=f}return f}},l.prototype.initDocumentChanges=function(){this._workspaceEdit.documentChanges===void 0&&this._workspaceEdit.changes===void 0&&(this._changeAnnotations=new _e,this._workspaceEdit.documentChanges=[],this._workspaceEdit.changeAnnotations=this._changeAnnotations.all())},l.prototype.initChanges=function(){this._workspaceEdit.documentChanges===void 0&&this._workspaceEdit.changes===void 0&&(this._workspaceEdit.changes=Object.create(null))},l.prototype.createFile=function(g,y,f){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var c;V.is(y)||te.is(y)?c=y:f=y;var b,w;if(c===void 0?b=G.create(g,f):(w=te.is(c)?c:this._changeAnnotations.manage(c),b=G.create(g,f,w)),this._workspaceEdit.documentChanges.push(b),w!==void 0)return w},l.prototype.renameFile=function(g,y,f,c){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var b;V.is(f)||te.is(f)?b=f:c=f;var w,W;if(b===void 0?w=j.create(g,y,c):(W=te.is(b)?b:this._changeAnnotations.manage(b),w=j.create(g,y,c,W)),this._workspaceEdit.documentChanges.push(w),W!==void 0)return W},l.prototype.deleteFile=function(g,y,f){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var c;V.is(y)||te.is(y)?c=y:f=y;var b,w;if(c===void 0?b=Y.create(g,f):(w=te.is(c)?c:this._changeAnnotations.manage(c),b=Y.create(g,f,w)),this._workspaceEdit.documentChanges.push(b),w!==void 0)return w},l}();e.WorkspaceChange=me;var Je;(function(l){function g(f){return{uri:f}}l.create=g;function y(f){var c=f;return R.defined(c)&&R.string(c.uri)}l.is=y})(Je=e.TextDocumentIdentifier||(e.TextDocumentIdentifier={}));var Ve;(function(l){function g(f,c){return{uri:f,version:c}}l.create=g;function y(f){var c=f;return R.defined(c)&&R.string(c.uri)&&R.integer(c.version)}l.is=y})(Ve=e.VersionedTextDocumentIdentifier||(e.VersionedTextDocumentIdentifier={}));var Se;(function(l){function g(f,c){return{uri:f,version:c}}l.create=g;function y(f){var c=f;return R.defined(c)&&R.string(c.uri)&&(c.version===null||R.integer(c.version))}l.is=y})(Se=e.OptionalVersionedTextDocumentIdentifier||(e.OptionalVersionedTextDocumentIdentifier={}));var st;(function(l){function g(f,c,b,w){return{uri:f,languageId:c,version:b,text:w}}l.create=g;function y(f){var c=f;return R.defined(c)&&R.string(c.uri)&&R.string(c.languageId)&&R.integer(c.version)&&R.string(c.text)}l.is=y})(st=e.TextDocumentItem||(e.TextDocumentItem={}));var ur;(function(l){l.PlainText="plaintext",l.Markdown="markdown";function g(y){var f=y;return f===l.PlainText||f===l.Markdown}l.is=g})(ur=e.MarkupKind||(e.MarkupKind={}));var Tr;(function(l){function g(y){var f=y;return R.objectLiteral(y)&&ur.is(f.kind)&&R.string(f.value)}l.is=g})(Tr=e.MarkupContent||(e.MarkupContent={}));var di;(function(l){l.Text=1,l.Method=2,l.Function=3,l.Constructor=4,l.Field=5,l.Variable=6,l.Class=7,l.Interface=8,l.Module=9,l.Property=10,l.Unit=11,l.Value=12,l.Enum=13,l.Keyword=14,l.Snippet=15,l.Color=16,l.File=17,l.Reference=18,l.Folder=19,l.EnumMember=20,l.Constant=21,l.Struct=22,l.Event=23,l.Operator=24,l.TypeParameter=25})(di=e.CompletionItemKind||(e.CompletionItemKind={}));var Ln;(function(l){l.PlainText=1,l.Snippet=2})(Ln=e.InsertTextFormat||(e.InsertTextFormat={}));var Mn;(function(l){l.Deprecated=1})(Mn=e.CompletionItemTag||(e.CompletionItemTag={}));var Kt;(function(l){function g(f,c,b){return{newText:f,insert:c,replace:b}}l.create=g;function y(f){var c=f;return c&&R.string(c.newText)&&s.is(c.insert)&&s.is(c.replace)}l.is=y})(Kt=e.InsertReplaceEdit||(e.InsertReplaceEdit={}));var fi;(function(l){l.asIs=1,l.adjustIndentation=2})(fi=e.InsertTextMode||(e.InsertTextMode={}));var pi;(function(l){function g(y){var f=y;return f&&(R.string(f.detail)||f.detail===void 0)&&(R.string(f.description)||f.description===void 0)}l.is=g})(pi=e.CompletionItemLabelDetails||(e.CompletionItemLabelDetails={}));var hi;(function(l){function g(y){return{label:y}}l.create=g})(hi=e.CompletionItem||(e.CompletionItem={}));var Bi;(function(l){function g(y,f){return{items:y||[],isIncomplete:!!f}}l.create=g})(Bi=e.CompletionList||(e.CompletionList={}));var Qe;(function(l){function g(f){return f.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}l.fromPlainText=g;function y(f){var c=f;return R.string(c)||R.objectLiteral(c)&&R.string(c.language)&&R.string(c.value)}l.is=y})(Qe=e.MarkedString||(e.MarkedString={}));var wt;(function(l){function g(y){var f=y;return!!f&&R.objectLiteral(f)&&(Tr.is(f.contents)||Qe.is(f.contents)||R.typedArray(f.contents,Qe.is))&&(y.range===void 0||s.is(y.range))}l.is=g})(wt=e.Hover||(e.Hover={}));var zi;(function(l){function g(y,f){return f?{label:y,documentation:f}:{label:y}}l.create=g})(zi=e.ParameterInformation||(e.ParameterInformation={}));var Wr;(function(l){function g(y,f){for(var c=[],b=2;b<arguments.length;b++)c[b-2]=arguments[b];var w={label:y};return R.defined(f)&&(w.documentation=f),R.defined(c)?w.parameters=c:w.parameters=[],w}l.create=g})(Wr=e.SignatureInformation||(e.SignatureInformation={}));var Kr;(function(l){l.Text=1,l.Read=2,l.Write=3})(Kr=e.DocumentHighlightKind||(e.DocumentHighlightKind={}));var Br;(function(l){function g(y,f){var c={range:y};return R.number(f)&&(c.kind=f),c}l.create=g})(Br=e.DocumentHighlight||(e.DocumentHighlight={}));var on;(function(l){l.File=1,l.Module=2,l.Namespace=3,l.Package=4,l.Class=5,l.Method=6,l.Property=7,l.Field=8,l.Constructor=9,l.Enum=10,l.Interface=11,l.Function=12,l.Variable=13,l.Constant=14,l.String=15,l.Number=16,l.Boolean=17,l.Array=18,l.Object=19,l.Key=20,l.Null=21,l.EnumMember=22,l.Struct=23,l.Event=24,l.Operator=25,l.TypeParameter=26})(on=e.SymbolKind||(e.SymbolKind={}));var Rr;(function(l){l.Deprecated=1})(Rr=e.SymbolTag||(e.SymbolTag={}));var Dt;(function(l){function g(y,f,c,b,w){var W={name:y,kind:f,location:{uri:b,range:c}};return w&&(W.containerName=w),W}l.create=g})(Dt=e.SymbolInformation||(e.SymbolInformation={}));var zr;(function(l){function g(y,f,c,b){return b!==void 0?{name:y,kind:f,location:{uri:c,range:b}}:{name:y,kind:f,location:{uri:c}}}l.create=g})(zr=e.WorkspaceSymbol||(e.WorkspaceSymbol={}));var mi;(function(l){function g(f,c,b,w,W,Re){var he={name:f,detail:c,kind:b,range:w,selectionRange:W};return Re!==void 0&&(he.children=Re),he}l.create=g;function y(f){var c=f;return c&&R.string(c.name)&&R.number(c.kind)&&s.is(c.range)&&s.is(c.selectionRange)&&(c.detail===void 0||R.string(c.detail))&&(c.deprecated===void 0||R.boolean(c.deprecated))&&(c.children===void 0||Array.isArray(c.children))&&(c.tags===void 0||Array.isArray(c.tags))}l.is=y})(mi=e.DocumentSymbol||(e.DocumentSymbol={}));var cr;(function(l){l.Empty="",l.QuickFix="quickfix",l.Refactor="refactor",l.RefactorExtract="refactor.extract",l.RefactorInline="refactor.inline",l.RefactorRewrite="refactor.rewrite",l.Source="source",l.SourceOrganizeImports="source.organizeImports",l.SourceFixAll="source.fixAll"})(cr=e.CodeActionKind||(e.CodeActionKind={}));var Ot;(function(l){l.Invoked=1,l.Automatic=2})(Ot=e.CodeActionTriggerKind||(e.CodeActionTriggerKind={}));var _t;(function(l){function g(f,c,b){var w={diagnostics:f};return c!=null&&(w.only=c),b!=null&&(w.triggerKind=b),w}l.create=g;function y(f){var c=f;return R.defined(c)&&R.typedArray(c.diagnostics,S.is)&&(c.only===void 0||R.typedArray(c.only,R.string))&&(c.triggerKind===void 0||c.triggerKind===Ot.Invoked||c.triggerKind===Ot.Automatic)}l.is=y})(_t=e.CodeActionContext||(e.CodeActionContext={}));var br;(function(l){function g(f,c,b){var w={title:f},W=!0;return typeof c=="string"?(W=!1,w.kind=c):L.is(c)?w.command=c:w.edit=c,W&&b!==void 0&&(w.kind=b),w}l.create=g;function y(f){var c=f;return c&&R.string(c.title)&&(c.diagnostics===void 0||R.typedArray(c.diagnostics,S.is))&&(c.kind===void 0||R.string(c.kind))&&(c.edit!==void 0||c.command!==void 0)&&(c.command===void 0||L.is(c.command))&&(c.isPreferred===void 0||R.boolean(c.isPreferred))&&(c.edit===void 0||J.is(c.edit))}l.is=y})(br=e.CodeAction||(e.CodeAction={}));var lr;(function(l){function g(f,c){var b={range:f};return R.defined(c)&&(b.data=c),b}l.create=g;function y(f){var c=f;return R.defined(c)&&s.is(c.range)&&(R.undefined(c.command)||L.is(c.command))}l.is=y})(lr=e.CodeLens||(e.CodeLens={}));var Or;(function(l){function g(f,c){return{tabSize:f,insertSpaces:c}}l.create=g;function y(f){var c=f;return R.defined(c)&&R.uinteger(c.tabSize)&&R.boolean(c.insertSpaces)}l.is=y})(Or=e.FormattingOptions||(e.FormattingOptions={}));var D;(function(l){function g(f,c,b){return{range:f,target:c,data:b}}l.create=g;function y(f){var c=f;return R.defined(c)&&s.is(c.range)&&(R.undefined(c.target)||R.string(c.target))}l.is=y})(D=e.DocumentLink||(e.DocumentLink={}));var T;(function(l){function g(f,c){return{range:f,parent:c}}l.create=g;function y(f){var c=f;return R.objectLiteral(c)&&s.is(c.range)&&(c.parent===void 0||l.is(c.parent))}l.is=y})(T=e.SelectionRange||(e.SelectionRange={}));var q;(function(l){l.namespace="namespace",l.type="type",l.class="class",l.enum="enum",l.interface="interface",l.struct="struct",l.typeParameter="typeParameter",l.parameter="parameter",l.variable="variable",l.property="property",l.enumMember="enumMember",l.event="event",l.function="function",l.method="method",l.macro="macro",l.keyword="keyword",l.modifier="modifier",l.comment="comment",l.string="string",l.number="number",l.regexp="regexp",l.operator="operator",l.decorator="decorator"})(q=e.SemanticTokenTypes||(e.SemanticTokenTypes={}));var M;(function(l){l.declaration="declaration",l.definition="definition",l.readonly="readonly",l.static="static",l.deprecated="deprecated",l.abstract="abstract",l.async="async",l.modification="modification",l.documentation="documentation",l.defaultLibrary="defaultLibrary"})(M=e.SemanticTokenModifiers||(e.SemanticTokenModifiers={}));var H;(function(l){function g(y){var f=y;return R.objectLiteral(f)&&(f.resultId===void 0||typeof f.resultId=="string")&&Array.isArray(f.data)&&(f.data.length===0||typeof f.data[0]=="number")}l.is=g})(H=e.SemanticTokens||(e.SemanticTokens={}));var le;(function(l){function g(f,c){return{range:f,text:c}}l.create=g;function y(f){var c=f;return c!=null&&s.is(c.range)&&R.string(c.text)}l.is=y})(le=e.InlineValueText||(e.InlineValueText={}));var fe;(function(l){function g(f,c,b){return{range:f,variableName:c,caseSensitiveLookup:b}}l.create=g;function y(f){var c=f;return c!=null&&s.is(c.range)&&R.boolean(c.caseSensitiveLookup)&&(R.string(c.variableName)||c.variableName===void 0)}l.is=y})(fe=e.InlineValueVariableLookup||(e.InlineValueVariableLookup={}));var Te;(function(l){function g(f,c){return{range:f,expression:c}}l.create=g;function y(f){var c=f;return c!=null&&s.is(c.range)&&(R.string(c.expression)||c.expression===void 0)}l.is=y})(Te=e.InlineValueEvaluatableExpression||(e.InlineValueEvaluatableExpression={}));var ae;(function(l){function g(f,c){return{frameId:f,stoppedLocation:c}}l.create=g;function y(f){var c=f;return R.defined(c)&&s.is(f.stoppedLocation)}l.is=y})(ae=e.InlineValueContext||(e.InlineValueContext={}));var re;(function(l){l.Type=1,l.Parameter=2;function g(y){return y===1||y===2}l.is=g})(re=e.InlayHintKind||(e.InlayHintKind={}));var ne;(function(l){function g(f){return{value:f}}l.create=g;function y(f){var c=f;return R.objectLiteral(c)&&(c.tooltip===void 0||R.string(c.tooltip)||Tr.is(c.tooltip))&&(c.location===void 0||u.is(c.location))&&(c.command===void 0||L.is(c.command))}l.is=y})(ne=e.InlayHintLabelPart||(e.InlayHintLabelPart={}));var pe;(function(l){function g(f,c,b){var w={position:f,label:c};return b!==void 0&&(w.kind=b),w}l.create=g;function y(f){var c=f;return R.objectLiteral(c)&&a.is(c.position)&&(R.string(c.label)||R.typedArray(c.label,ne.is))&&(c.kind===void 0||re.is(c.kind))&&c.textEdits===void 0||R.typedArray(c.textEdits,U.is)&&(c.tooltip===void 0||R.string(c.tooltip)||Tr.is(c.tooltip))&&(c.paddingLeft===void 0||R.boolean(c.paddingLeft))&&(c.paddingRight===void 0||R.boolean(c.paddingRight))}l.is=y})(pe=e.InlayHint||(e.InlayHint={}));var Ee;(function(l){function g(y){var f=y;return R.objectLiteral(f)&&n.is(f.uri)&&R.string(f.name)}l.is=g})(Ee=e.WorkspaceFolder||(e.WorkspaceFolder={})),e.EOL=[`
`,`\r
`,"\r"];var Ze;(function(l){function g(b,w,W,Re){return new Tt(b,w,W,Re)}l.create=g;function y(b){var w=b;return!!(R.defined(w)&&R.string(w.uri)&&(R.undefined(w.languageId)||R.string(w.languageId))&&R.uinteger(w.lineCount)&&R.func(w.getText)&&R.func(w.positionAt)&&R.func(w.offsetAt))}l.is=y;function f(b,w){for(var W=b.getText(),Re=c(w,function(an,Vi){var Xu=an.range.start.line-Vi.range.start.line;return Xu===0?an.range.start.character-Vi.range.start.character:Xu}),he=W.length,Rt=Re.length-1;Rt>=0;Rt--){var bt=Re[Rt],Bt=b.offsetAt(bt.range.start),ee=b.offsetAt(bt.range.end);if(ee<=he)W=W.substring(0,Bt)+bt.newText+W.substring(ee,W.length);else throw new Error("Overlapping edit");he=Bt}return W}l.applyEdits=f;function c(b,w){if(b.length<=1)return b;var W=b.length/2|0,Re=b.slice(0,W),he=b.slice(W);c(Re,w),c(he,w);for(var Rt=0,bt=0,Bt=0;Rt<Re.length&&bt<he.length;){var ee=w(Re[Rt],he[bt]);ee<=0?b[Bt++]=Re[Rt++]:b[Bt++]=he[bt++]}for(;Rt<Re.length;)b[Bt++]=Re[Rt++];for(;bt<he.length;)b[Bt++]=he[bt++];return b}})(Ze=e.TextDocument||(e.TextDocument={}));var Tt=function(){function l(g,y,f,c){this._uri=g,this._languageId=y,this._version=f,this._content=c,this._lineOffsets=void 0}return Object.defineProperty(l.prototype,"uri",{get:function(){return this._uri},enumerable:!1,configurable:!0}),Object.defineProperty(l.prototype,"languageId",{get:function(){return this._languageId},enumerable:!1,configurable:!0}),Object.defineProperty(l.prototype,"version",{get:function(){return this._version},enumerable:!1,configurable:!0}),l.prototype.getText=function(g){if(g){var y=this.offsetAt(g.start),f=this.offsetAt(g.end);return this._content.substring(y,f)}return this._content},l.prototype.update=function(g,y){this._content=g.text,this._version=y,this._lineOffsets=void 0},l.prototype.getLineOffsets=function(){if(this._lineOffsets===void 0){for(var g=[],y=this._content,f=!0,c=0;c<y.length;c++){f&&(g.push(c),f=!1);var b=y.charAt(c);f=b==="\r"||b===`
`,b==="\r"&&c+1<y.length&&y.charAt(c+1)===`
`&&c++}f&&y.length>0&&g.push(y.length),this._lineOffsets=g}return this._lineOffsets},l.prototype.positionAt=function(g){g=Math.max(Math.min(g,this._content.length),0);var y=this.getLineOffsets(),f=0,c=y.length;if(c===0)return a.create(0,g);for(;f<c;){var b=Math.floor((f+c)/2);y[b]>g?c=b:f=b+1}var w=f-1;return a.create(w,g-y[w])},l.prototype.offsetAt=function(g){var y=this.getLineOffsets();if(g.line>=y.length)return this._content.length;if(g.line<0)return 0;var f=y[g.line],c=g.line+1<y.length?y[g.line+1]:this._content.length;return Math.max(Math.min(f+g.character,c),f)},Object.defineProperty(l.prototype,"lineCount",{get:function(){return this.getLineOffsets().length},enumerable:!1,configurable:!0}),l}(),R;(function(l){var g=Object.prototype.toString;function y(ee){return typeof ee<"u"}l.defined=y;function f(ee){return typeof ee>"u"}l.undefined=f;function c(ee){return ee===!0||ee===!1}l.boolean=c;function b(ee){return g.call(ee)==="[object String]"}l.string=b;function w(ee){return g.call(ee)==="[object Number]"}l.number=w;function W(ee,an,Vi){return g.call(ee)==="[object Number]"&&an<=ee&&ee<=Vi}l.numberRange=W;function Re(ee){return g.call(ee)==="[object Number]"&&-2147483648<=ee&&ee<=2147483647}l.integer=Re;function he(ee){return g.call(ee)==="[object Number]"&&0<=ee&&ee<=2147483647}l.uinteger=he;function Rt(ee){return g.call(ee)==="[object Function]"}l.func=Rt;function bt(ee){return ee!==null&&typeof ee=="object"}l.objectLiteral=bt;function Bt(ee,an){return Array.isArray(ee)&&ee.every(an)}l.typedArray=Bt})(R||(R={}))})});var At=h(qr=>{"use strict";Object.defineProperty(qr,"__esModule",{value:!0});qr.ProtocolNotificationType=qr.ProtocolNotificationType0=qr.ProtocolRequestType=qr.ProtocolRequestType0=qr.RegistrationType=qr.MessageDirection=void 0;var is=ga(),Vj;(function(t){t.clientToServer="clientToServer",t.serverToClient="serverToClient",t.both="both"})(Vj=qr.MessageDirection||(qr.MessageDirection={}));var Rg=class{constructor(e){this.method=e}};qr.RegistrationType=Rg;var bg=class extends is.RequestType0{constructor(e){super(e)}};qr.ProtocolRequestType0=bg;var Cg=class extends is.RequestType{constructor(e){super(e,is.ParameterStructures.byName)}};qr.ProtocolRequestType=Cg;var Ag=class extends is.NotificationType0{constructor(e){super(e)}};qr.ProtocolNotificationType0=Ag;var Pg=class extends is.NotificationType{constructor(e){super(e,is.ParameterStructures.byName)}};qr.ProtocolNotificationType=Pg});var od=h(It=>{"use strict";Object.defineProperty(It,"__esModule",{value:!0});It.objectLiteral=It.typedArray=It.stringArray=It.array=It.func=It.error=It.number=It.string=It.boolean=void 0;function Yj(t){return t===!0||t===!1}It.boolean=Yj;function GC(t){return typeof t=="string"||t instanceof String}It.string=GC;function Xj(t){return typeof t=="number"||t instanceof Number}It.number=Xj;function Jj(t){return t instanceof Error}It.error=Jj;function Qj(t){return typeof t=="function"}It.func=Qj;function HC(t){return Array.isArray(t)}It.array=HC;function Zj(t){return HC(t)&&t.every(e=>GC(e))}It.stringArray=Zj;function eU(t,e){return Array.isArray(t)&&t.every(e)}It.typedArray=eU;function tU(t){return t!==null&&typeof t=="object"}It.objectLiteral=tU});var KC=h(nc=>{"use strict";Object.defineProperty(nc,"__esModule",{value:!0});nc.ImplementationRequest=void 0;var WC=At(),rU;(function(t){t.method="textDocument/implementation",t.messageDirection=WC.MessageDirection.clientToServer,t.type=new WC.ProtocolRequestType(t.method)})(rU=nc.ImplementationRequest||(nc.ImplementationRequest={}))});var zC=h(ic=>{"use strict";Object.defineProperty(ic,"__esModule",{value:!0});ic.TypeDefinitionRequest=void 0;var BC=At(),nU;(function(t){t.method="textDocument/typeDefinition",t.messageDirection=BC.MessageDirection.clientToServer,t.type=new BC.ProtocolRequestType(t.method)})(nU=ic.TypeDefinitionRequest||(ic.TypeDefinitionRequest={}))});var VC=h(Do=>{"use strict";Object.defineProperty(Do,"__esModule",{value:!0});Do.DidChangeWorkspaceFoldersNotification=Do.WorkspaceFoldersRequest=void 0;var ad=At(),iU;(function(t){t.method="workspace/workspaceFolders",t.messageDirection=ad.MessageDirection.serverToClient,t.type=new ad.ProtocolRequestType0(t.method)})(iU=Do.WorkspaceFoldersRequest||(Do.WorkspaceFoldersRequest={}));var oU;(function(t){t.method="workspace/didChangeWorkspaceFolders",t.messageDirection=ad.MessageDirection.clientToServer,t.type=new ad.ProtocolNotificationType(t.method)})(oU=Do.DidChangeWorkspaceFoldersNotification||(Do.DidChangeWorkspaceFoldersNotification={}))});var XC=h(oc=>{"use strict";Object.defineProperty(oc,"__esModule",{value:!0});oc.ConfigurationRequest=void 0;var YC=At(),aU;(function(t){t.method="workspace/configuration",t.messageDirection=YC.MessageDirection.serverToClient,t.type=new YC.ProtocolRequestType(t.method)})(aU=oc.ConfigurationRequest||(oc.ConfigurationRequest={}))});var JC=h(Oo=>{"use strict";Object.defineProperty(Oo,"__esModule",{value:!0});Oo.ColorPresentationRequest=Oo.DocumentColorRequest=void 0;var sd=At(),sU;(function(t){t.method="textDocument/documentColor",t.messageDirection=sd.MessageDirection.clientToServer,t.type=new sd.ProtocolRequestType(t.method)})(sU=Oo.DocumentColorRequest||(Oo.DocumentColorRequest={}));var uU;(function(t){t.method="textDocument/colorPresentation",t.messageDirection=sd.MessageDirection.clientToServer,t.type=new sd.ProtocolRequestType(t.method)})(uU=Oo.ColorPresentationRequest||(Oo.ColorPresentationRequest={}))});var ZC=h(ac=>{"use strict";Object.defineProperty(ac,"__esModule",{value:!0});ac.FoldingRangeRequest=void 0;var QC=At(),cU;(function(t){t.method="textDocument/foldingRange",t.messageDirection=QC.MessageDirection.clientToServer,t.type=new QC.ProtocolRequestType(t.method)})(cU=ac.FoldingRangeRequest||(ac.FoldingRangeRequest={}))});var tA=h(sc=>{"use strict";Object.defineProperty(sc,"__esModule",{value:!0});sc.DeclarationRequest=void 0;var eA=At(),lU;(function(t){t.method="textDocument/declaration",t.messageDirection=eA.MessageDirection.clientToServer,t.type=new eA.ProtocolRequestType(t.method)})(lU=sc.DeclarationRequest||(sc.DeclarationRequest={}))});var nA=h(uc=>{"use strict";Object.defineProperty(uc,"__esModule",{value:!0});uc.SelectionRangeRequest=void 0;var rA=At(),dU;(function(t){t.method="textDocument/selectionRange",t.messageDirection=rA.MessageDirection.clientToServer,t.type=new rA.ProtocolRequestType(t.method)})(dU=uc.SelectionRangeRequest||(uc.SelectionRangeRequest={}))});var iA=h(jn=>{"use strict";Object.defineProperty(jn,"__esModule",{value:!0});jn.WorkDoneProgressCancelNotification=jn.WorkDoneProgressCreateRequest=jn.WorkDoneProgress=void 0;var fU=ga(),ud=At(),pU;(function(t){t.type=new fU.ProgressType;function e(r){return r===t.type}t.is=e})(pU=jn.WorkDoneProgress||(jn.WorkDoneProgress={}));var hU;(function(t){t.method="window/workDoneProgress/create",t.messageDirection=ud.MessageDirection.serverToClient,t.type=new ud.ProtocolRequestType(t.method)})(hU=jn.WorkDoneProgressCreateRequest||(jn.WorkDoneProgressCreateRequest={}));var mU;(function(t){t.method="window/workDoneProgress/cancel",t.messageDirection=ud.MessageDirection.clientToServer,t.type=new ud.ProtocolNotificationType(t.method)})(mU=jn.WorkDoneProgressCancelNotification||(jn.WorkDoneProgressCancelNotification={}))});var oA=h(Un=>{"use strict";Object.defineProperty(Un,"__esModule",{value:!0});Un.CallHierarchyOutgoingCallsRequest=Un.CallHierarchyIncomingCallsRequest=Un.CallHierarchyPrepareRequest=void 0;var os=At(),gU;(function(t){t.method="textDocument/prepareCallHierarchy",t.messageDirection=os.MessageDirection.clientToServer,t.type=new os.ProtocolRequestType(t.method)})(gU=Un.CallHierarchyPrepareRequest||(Un.CallHierarchyPrepareRequest={}));var yU;(function(t){t.method="callHierarchy/incomingCalls",t.messageDirection=os.MessageDirection.clientToServer,t.type=new os.ProtocolRequestType(t.method)})(yU=Un.CallHierarchyIncomingCallsRequest||(Un.CallHierarchyIncomingCallsRequest={}));var vU;(function(t){t.method="callHierarchy/outgoingCalls",t.messageDirection=os.MessageDirection.clientToServer,t.type=new os.ProtocolRequestType(t.method)})(vU=Un.CallHierarchyOutgoingCallsRequest||(Un.CallHierarchyOutgoingCallsRequest={}))});var aA=h(qt=>{"use strict";Object.defineProperty(qt,"__esModule",{value:!0});qt.SemanticTokensRefreshRequest=qt.SemanticTokensRangeRequest=qt.SemanticTokensDeltaRequest=qt.SemanticTokensRequest=qt.SemanticTokensRegistrationType=qt.TokenFormat=void 0;var Qi=At(),_U;(function(t){t.Relative="relative"})(_U=qt.TokenFormat||(qt.TokenFormat={}));var cd;(function(t){t.method="textDocument/semanticTokens",t.type=new Qi.RegistrationType(t.method)})(cd=qt.SemanticTokensRegistrationType||(qt.SemanticTokensRegistrationType={}));var TU;(function(t){t.method="textDocument/semanticTokens/full",t.messageDirection=Qi.MessageDirection.clientToServer,t.type=new Qi.ProtocolRequestType(t.method),t.registrationMethod=cd.method})(TU=qt.SemanticTokensRequest||(qt.SemanticTokensRequest={}));var RU;(function(t){t.method="textDocument/semanticTokens/full/delta",t.messageDirection=Qi.MessageDirection.clientToServer,t.type=new Qi.ProtocolRequestType(t.method),t.registrationMethod=cd.method})(RU=qt.SemanticTokensDeltaRequest||(qt.SemanticTokensDeltaRequest={}));var bU;(function(t){t.method="textDocument/semanticTokens/range",t.messageDirection=Qi.MessageDirection.clientToServer,t.type=new Qi.ProtocolRequestType(t.method),t.registrationMethod=cd.method})(bU=qt.SemanticTokensRangeRequest||(qt.SemanticTokensRangeRequest={}));var CU;(function(t){t.method="workspace/semanticTokens/refresh",t.messageDirection=Qi.MessageDirection.serverToClient,t.type=new Qi.ProtocolRequestType0(t.method)})(CU=qt.SemanticTokensRefreshRequest||(qt.SemanticTokensRefreshRequest={}))});var uA=h(cc=>{"use strict";Object.defineProperty(cc,"__esModule",{value:!0});cc.ShowDocumentRequest=void 0;var sA=At(),AU;(function(t){t.method="window/showDocument",t.messageDirection=sA.MessageDirection.serverToClient,t.type=new sA.ProtocolRequestType(t.method)})(AU=cc.ShowDocumentRequest||(cc.ShowDocumentRequest={}))});var lA=h(lc=>{"use strict";Object.defineProperty(lc,"__esModule",{value:!0});lc.LinkedEditingRangeRequest=void 0;var cA=At(),PU;(function(t){t.method="textDocument/linkedEditingRange",t.messageDirection=cA.MessageDirection.clientToServer,t.type=new cA.ProtocolRequestType(t.method)})(PU=lc.LinkedEditingRangeRequest||(lc.LinkedEditingRangeRequest={}))});var dA=h(Pt=>{"use strict";Object.defineProperty(Pt,"__esModule",{value:!0});Pt.WillDeleteFilesRequest=Pt.DidDeleteFilesNotification=Pt.DidRenameFilesNotification=Pt.WillRenameFilesRequest=Pt.DidCreateFilesNotification=Pt.WillCreateFilesRequest=Pt.FileOperationPatternKind=void 0;var yn=At(),SU;(function(t){t.file="file",t.folder="folder"})(SU=Pt.FileOperationPatternKind||(Pt.FileOperationPatternKind={}));var EU;(function(t){t.method="workspace/willCreateFiles",t.messageDirection=yn.MessageDirection.clientToServer,t.type=new yn.ProtocolRequestType(t.method)})(EU=Pt.WillCreateFilesRequest||(Pt.WillCreateFilesRequest={}));var kU;(function(t){t.method="workspace/didCreateFiles",t.messageDirection=yn.MessageDirection.clientToServer,t.type=new yn.ProtocolNotificationType(t.method)})(kU=Pt.DidCreateFilesNotification||(Pt.DidCreateFilesNotification={}));var NU;(function(t){t.method="workspace/willRenameFiles",t.messageDirection=yn.MessageDirection.clientToServer,t.type=new yn.ProtocolRequestType(t.method)})(NU=Pt.WillRenameFilesRequest||(Pt.WillRenameFilesRequest={}));var wU;(function(t){t.method="workspace/didRenameFiles",t.messageDirection=yn.MessageDirection.clientToServer,t.type=new yn.ProtocolNotificationType(t.method)})(wU=Pt.DidRenameFilesNotification||(Pt.DidRenameFilesNotification={}));var DU;(function(t){t.method="workspace/didDeleteFiles",t.messageDirection=yn.MessageDirection.clientToServer,t.type=new yn.ProtocolNotificationType(t.method)})(DU=Pt.DidDeleteFilesNotification||(Pt.DidDeleteFilesNotification={}));var OU;(function(t){t.method="workspace/willDeleteFiles",t.messageDirection=yn.MessageDirection.clientToServer,t.type=new yn.ProtocolRequestType(t.method)})(OU=Pt.WillDeleteFilesRequest||(Pt.WillDeleteFilesRequest={}))});var pA=h(Gn=>{"use strict";Object.defineProperty(Gn,"__esModule",{value:!0});Gn.MonikerRequest=Gn.MonikerKind=Gn.UniquenessLevel=void 0;var fA=At(),IU;(function(t){t.document="document",t.project="project",t.group="group",t.scheme="scheme",t.global="global"})(IU=Gn.UniquenessLevel||(Gn.UniquenessLevel={}));var qU;(function(t){t.$import="import",t.$export="export",t.local="local"})(qU=Gn.MonikerKind||(Gn.MonikerKind={}));var xU;(function(t){t.method="textDocument/moniker",t.messageDirection=fA.MessageDirection.clientToServer,t.type=new fA.ProtocolRequestType(t.method)})(xU=Gn.MonikerRequest||(Gn.MonikerRequest={}))});var hA=h(Hn=>{"use strict";Object.defineProperty(Hn,"__esModule",{value:!0});Hn.TypeHierarchySubtypesRequest=Hn.TypeHierarchySupertypesRequest=Hn.TypeHierarchyPrepareRequest=void 0;var as=At(),LU;(function(t){t.method="textDocument/prepareTypeHierarchy",t.messageDirection=as.MessageDirection.clientToServer,t.type=new as.ProtocolRequestType(t.method)})(LU=Hn.TypeHierarchyPrepareRequest||(Hn.TypeHierarchyPrepareRequest={}));var MU;(function(t){t.method="typeHierarchy/supertypes",t.messageDirection=as.MessageDirection.clientToServer,t.type=new as.ProtocolRequestType(t.method)})(MU=Hn.TypeHierarchySupertypesRequest||(Hn.TypeHierarchySupertypesRequest={}));var $U;(function(t){t.method="typeHierarchy/subtypes",t.messageDirection=as.MessageDirection.clientToServer,t.type=new as.ProtocolRequestType(t.method)})($U=Hn.TypeHierarchySubtypesRequest||(Hn.TypeHierarchySubtypesRequest={}))});var mA=h(Io=>{"use strict";Object.defineProperty(Io,"__esModule",{value:!0});Io.InlineValueRefreshRequest=Io.InlineValueRequest=void 0;var ld=At(),FU;(function(t){t.method="textDocument/inlineValue",t.messageDirection=ld.MessageDirection.clientToServer,t.type=new ld.ProtocolRequestType(t.method)})(FU=Io.InlineValueRequest||(Io.InlineValueRequest={}));var jU;(function(t){t.method="workspace/inlineValue/refresh",t.messageDirection=ld.MessageDirection.serverToClient,t.type=new ld.ProtocolRequestType0(t.method)})(jU=Io.InlineValueRefreshRequest||(Io.InlineValueRefreshRequest={}))});var gA=h(Wn=>{"use strict";Object.defineProperty(Wn,"__esModule",{value:!0});Wn.InlayHintRefreshRequest=Wn.InlayHintResolveRequest=Wn.InlayHintRequest=void 0;var ss=At(),UU;(function(t){t.method="textDocument/inlayHint",t.messageDirection=ss.MessageDirection.clientToServer,t.type=new ss.ProtocolRequestType(t.method)})(UU=Wn.InlayHintRequest||(Wn.InlayHintRequest={}));var GU;(function(t){t.method="inlayHint/resolve",t.messageDirection=ss.MessageDirection.clientToServer,t.type=new ss.ProtocolRequestType(t.method)})(GU=Wn.InlayHintResolveRequest||(Wn.InlayHintResolveRequest={}));var HU;(function(t){t.method="workspace/inlayHint/refresh",t.messageDirection=ss.MessageDirection.serverToClient,t.type=new ss.ProtocolRequestType0(t.method)})(HU=Wn.InlayHintRefreshRequest||(Wn.InlayHintRefreshRequest={}))});var vA=h(fr=>{"use strict";Object.defineProperty(fr,"__esModule",{value:!0});fr.DiagnosticRefreshRequest=fr.WorkspaceDiagnosticRequest=fr.DocumentDiagnosticRequest=fr.DocumentDiagnosticReportKind=fr.DiagnosticServerCancellationData=void 0;var yA=ga(),WU=od(),us=At(),KU;(function(t){function e(r){let n=r;return n&&WU.boolean(n.retriggerRequest)}t.is=e})(KU=fr.DiagnosticServerCancellationData||(fr.DiagnosticServerCancellationData={}));var BU;(function(t){t.Full="full",t.Unchanged="unchanged"})(BU=fr.DocumentDiagnosticReportKind||(fr.DocumentDiagnosticReportKind={}));var zU;(function(t){t.method="textDocument/diagnostic",t.messageDirection=us.MessageDirection.clientToServer,t.type=new us.ProtocolRequestType(t.method),t.partialResult=new yA.ProgressType})(zU=fr.DocumentDiagnosticRequest||(fr.DocumentDiagnosticRequest={}));var VU;(function(t){t.method="workspace/diagnostic",t.messageDirection=us.MessageDirection.clientToServer,t.type=new us.ProtocolRequestType(t.method),t.partialResult=new yA.ProgressType})(VU=fr.WorkspaceDiagnosticRequest||(fr.WorkspaceDiagnosticRequest={}));var YU;(function(t){t.method="workspace/diagnostic/refresh",t.messageDirection=us.MessageDirection.serverToClient,t.type=new us.ProtocolRequestType0(t.method)})(YU=fr.DiagnosticRefreshRequest||(fr.DiagnosticRefreshRequest={}))});var RA=h(Me=>{"use strict";Object.defineProperty(Me,"__esModule",{value:!0});Me.DidCloseNotebookDocumentNotification=Me.DidSaveNotebookDocumentNotification=Me.DidChangeNotebookDocumentNotification=Me.NotebookCellArrayChange=Me.DidOpenNotebookDocumentNotification=Me.NotebookDocumentSyncRegistrationType=Me.NotebookDocument=Me.NotebookCell=Me.ExecutionSummary=Me.NotebookCellKind=void 0;var dc=id(),Kn=od(),yi=At(),_A;(function(t){t.Markup=1,t.Code=2;function e(r){return r===1||r===2}t.is=e})(_A=Me.NotebookCellKind||(Me.NotebookCellKind={}));var TA;(function(t){function e(i,o){let a={executionOrder:i};return(o===!0||o===!1)&&(a.success=o),a}t.create=e;function r(i){let o=i;return Kn.objectLiteral(o)&&dc.uinteger.is(o.executionOrder)&&(o.success===void 0||Kn.boolean(o.success))}t.is=r;function n(i,o){return i===o?!0:i==null||o===null||o===void 0?!1:i.executionOrder===o.executionOrder&&i.success===o.success}t.equals=n})(TA=Me.ExecutionSummary||(Me.ExecutionSummary={}));var Sg;(function(t){function e(o,a){return{kind:o,document:a}}t.create=e;function r(o){let a=o;return Kn.objectLiteral(a)&&_A.is(a.kind)&&dc.DocumentUri.is(a.document)&&(a.metadata===void 0||Kn.objectLiteral(a.metadata))}t.is=r;function n(o,a){let s=new Set;return o.document!==a.document&&s.add("document"),o.kind!==a.kind&&s.add("kind"),o.executionSummary!==a.executionSummary&&s.add("executionSummary"),(o.metadata!==void 0||a.metadata!==void 0)&&!i(o.metadata,a.metadata)&&s.add("metadata"),(o.executionSummary!==void 0||a.executionSummary!==void 0)&&!TA.equals(o.executionSummary,a.executionSummary)&&s.add("executionSummary"),s}t.diff=n;function i(o,a){if(o===a)return!0;if(o==null||a===null||a===void 0||typeof o!=typeof a||typeof o!="object")return!1;let s=Array.isArray(o),u=Array.isArray(a);if(s!==u)return!1;if(s&&u){if(o.length!==a.length)return!1;for(let d=0;d<o.length;d++)if(!i(o[d],a[d]))return!1}if(Kn.objectLiteral(o)&&Kn.objectLiteral(a)){let d=Object.keys(o),p=Object.keys(a);if(d.length!==p.length||(d.sort(),p.sort(),!i(d,p)))return!1;for(let m=0;m<d.length;m++){let v=d[m];if(!i(o[v],a[v]))return!1}}return!0}})(Sg=Me.NotebookCell||(Me.NotebookCell={}));var XU;(function(t){function e(n,i,o,a){return{uri:n,notebookType:i,version:o,cells:a}}t.create=e;function r(n){let i=n;return Kn.objectLiteral(i)&&Kn.string(i.uri)&&dc.integer.is(i.version)&&Kn.typedArray(i.cells,Sg.is)}t.is=r})(XU=Me.NotebookDocument||(Me.NotebookDocument={}));var fc;(function(t){t.method="notebookDocument/sync",t.messageDirection=yi.MessageDirection.clientToServer,t.type=new yi.RegistrationType(t.method)})(fc=Me.NotebookDocumentSyncRegistrationType||(Me.NotebookDocumentSyncRegistrationType={}));var JU;(function(t){t.method="notebookDocument/didOpen",t.messageDirection=yi.MessageDirection.clientToServer,t.type=new yi.ProtocolNotificationType(t.method),t.registrationMethod=fc.method})(JU=Me.DidOpenNotebookDocumentNotification||(Me.DidOpenNotebookDocumentNotification={}));var QU;(function(t){function e(n){let i=n;return Kn.objectLiteral(i)&&dc.uinteger.is(i.start)&&dc.uinteger.is(i.deleteCount)&&(i.cells===void 0||Kn.typedArray(i.cells,Sg.is))}t.is=e;function r(n,i,o){let a={start:n,deleteCount:i};return o!==void 0&&(a.cells=o),a}t.create=r})(QU=Me.NotebookCellArrayChange||(Me.NotebookCellArrayChange={}));var ZU;(function(t){t.method="notebookDocument/didChange",t.messageDirection=yi.MessageDirection.clientToServer,t.type=new yi.ProtocolNotificationType(t.method),t.registrationMethod=fc.method})(ZU=Me.DidChangeNotebookDocumentNotification||(Me.DidChangeNotebookDocumentNotification={}));var eG;(function(t){t.method="notebookDocument/didSave",t.messageDirection=yi.MessageDirection.clientToServer,t.type=new yi.ProtocolNotificationType(t.method),t.registrationMethod=fc.method})(eG=Me.DidSaveNotebookDocumentNotification||(Me.DidSaveNotebookDocumentNotification={}));var tG;(function(t){t.method="notebookDocument/didClose",t.messageDirection=yi.MessageDirection.clientToServer,t.type=new yi.ProtocolNotificationType(t.method),t.registrationMethod=fc.method})(tG=Me.DidCloseNotebookDocumentNotification||(Me.DidCloseNotebookDocumentNotification={}))});var wA=h(C=>{"use strict";Object.defineProperty(C,"__esModule",{value:!0});C.WorkspaceSymbolRequest=C.CodeActionResolveRequest=C.CodeActionRequest=C.DocumentSymbolRequest=C.DocumentHighlightRequest=C.ReferencesRequest=C.DefinitionRequest=C.SignatureHelpRequest=C.SignatureHelpTriggerKind=C.HoverRequest=C.CompletionResolveRequest=C.CompletionRequest=C.CompletionTriggerKind=C.PublishDiagnosticsNotification=C.WatchKind=C.RelativePattern=C.FileChangeType=C.DidChangeWatchedFilesNotification=C.WillSaveTextDocumentWaitUntilRequest=C.WillSaveTextDocumentNotification=C.TextDocumentSaveReason=C.DidSaveTextDocumentNotification=C.DidCloseTextDocumentNotification=C.DidChangeTextDocumentNotification=C.TextDocumentContentChangeEvent=C.DidOpenTextDocumentNotification=C.TextDocumentSyncKind=C.TelemetryEventNotification=C.LogMessageNotification=C.ShowMessageRequest=C.ShowMessageNotification=C.MessageType=C.DidChangeConfigurationNotification=C.ExitNotification=C.ShutdownRequest=C.InitializedNotification=C.InitializeErrorCodes=C.InitializeRequest=C.WorkDoneProgressOptions=C.TextDocumentRegistrationOptions=C.StaticRegistrationOptions=C.PositionEncodingKind=C.FailureHandlingKind=C.ResourceOperationKind=C.UnregistrationRequest=C.RegistrationRequest=C.DocumentSelector=C.NotebookCellTextDocumentFilter=C.NotebookDocumentFilter=C.TextDocumentFilter=void 0;C.TypeHierarchySubtypesRequest=C.TypeHierarchyPrepareRequest=C.MonikerRequest=C.MonikerKind=C.UniquenessLevel=C.WillDeleteFilesRequest=C.DidDeleteFilesNotification=C.WillRenameFilesRequest=C.DidRenameFilesNotification=C.WillCreateFilesRequest=C.DidCreateFilesNotification=C.FileOperationPatternKind=C.LinkedEditingRangeRequest=C.ShowDocumentRequest=C.SemanticTokensRegistrationType=C.SemanticTokensRefreshRequest=C.SemanticTokensRangeRequest=C.SemanticTokensDeltaRequest=C.SemanticTokensRequest=C.TokenFormat=C.CallHierarchyPrepareRequest=C.CallHierarchyOutgoingCallsRequest=C.CallHierarchyIncomingCallsRequest=C.WorkDoneProgressCancelNotification=C.WorkDoneProgressCreateRequest=C.WorkDoneProgress=C.SelectionRangeRequest=C.DeclarationRequest=C.FoldingRangeRequest=C.ColorPresentationRequest=C.DocumentColorRequest=C.ConfigurationRequest=C.DidChangeWorkspaceFoldersNotification=C.WorkspaceFoldersRequest=C.TypeDefinitionRequest=C.ImplementationRequest=C.ApplyWorkspaceEditRequest=C.ExecuteCommandRequest=C.PrepareRenameRequest=C.RenameRequest=C.PrepareSupportDefaultBehavior=C.DocumentOnTypeFormattingRequest=C.DocumentRangeFormattingRequest=C.DocumentFormattingRequest=C.DocumentLinkResolveRequest=C.DocumentLinkRequest=C.CodeLensRefreshRequest=C.CodeLensResolveRequest=C.CodeLensRequest=C.WorkspaceSymbolResolveRequest=void 0;C.DidCloseNotebookDocumentNotification=C.DidSaveNotebookDocumentNotification=C.DidChangeNotebookDocumentNotification=C.NotebookCellArrayChange=C.DidOpenNotebookDocumentNotification=C.NotebookDocumentSyncRegistrationType=C.NotebookDocument=C.NotebookCell=C.ExecutionSummary=C.NotebookCellKind=C.DiagnosticRefreshRequest=C.WorkspaceDiagnosticRequest=C.DocumentDiagnosticRequest=C.DocumentDiagnosticReportKind=C.DiagnosticServerCancellationData=C.InlayHintRefreshRequest=C.InlayHintResolveRequest=C.InlayHintRequest=C.InlineValueRefreshRequest=C.InlineValueRequest=C.TypeHierarchySupertypesRequest=void 0;var K=At(),bA=id(),pr=od(),rG=KC();Object.defineProperty(C,"ImplementationRequest",{enumerable:!0,get:function(){return rG.ImplementationRequest}});var nG=zC();Object.defineProperty(C,"TypeDefinitionRequest",{enumerable:!0,get:function(){return nG.TypeDefinitionRequest}});var CA=VC();Object.defineProperty(C,"WorkspaceFoldersRequest",{enumerable:!0,get:function(){return CA.WorkspaceFoldersRequest}});Object.defineProperty(C,"DidChangeWorkspaceFoldersNotification",{enumerable:!0,get:function(){return CA.DidChangeWorkspaceFoldersNotification}});var iG=XC();Object.defineProperty(C,"ConfigurationRequest",{enumerable:!0,get:function(){return iG.ConfigurationRequest}});var AA=JC();Object.defineProperty(C,"DocumentColorRequest",{enumerable:!0,get:function(){return AA.DocumentColorRequest}});Object.defineProperty(C,"ColorPresentationRequest",{enumerable:!0,get:function(){return AA.ColorPresentationRequest}});var oG=ZC();Object.defineProperty(C,"FoldingRangeRequest",{enumerable:!0,get:function(){return oG.FoldingRangeRequest}});var aG=tA();Object.defineProperty(C,"DeclarationRequest",{enumerable:!0,get:function(){return aG.DeclarationRequest}});var sG=nA();Object.defineProperty(C,"SelectionRangeRequest",{enumerable:!0,get:function(){return sG.SelectionRangeRequest}});var Eg=iA();Object.defineProperty(C,"WorkDoneProgress",{enumerable:!0,get:function(){return Eg.WorkDoneProgress}});Object.defineProperty(C,"WorkDoneProgressCreateRequest",{enumerable:!0,get:function(){return Eg.WorkDoneProgressCreateRequest}});Object.defineProperty(C,"WorkDoneProgressCancelNotification",{enumerable:!0,get:function(){return Eg.WorkDoneProgressCancelNotification}});var kg=oA();Object.defineProperty(C,"CallHierarchyIncomingCallsRequest",{enumerable:!0,get:function(){return kg.CallHierarchyIncomingCallsRequest}});Object.defineProperty(C,"CallHierarchyOutgoingCallsRequest",{enumerable:!0,get:function(){return kg.CallHierarchyOutgoingCallsRequest}});Object.defineProperty(C,"CallHierarchyPrepareRequest",{enumerable:!0,get:function(){return kg.CallHierarchyPrepareRequest}});var cs=aA();Object.defineProperty(C,"TokenFormat",{enumerable:!0,get:function(){return cs.TokenFormat}});Object.defineProperty(C,"SemanticTokensRequest",{enumerable:!0,get:function(){return cs.SemanticTokensRequest}});Object.defineProperty(C,"SemanticTokensDeltaRequest",{enumerable:!0,get:function(){return cs.SemanticTokensDeltaRequest}});Object.defineProperty(C,"SemanticTokensRangeRequest",{enumerable:!0,get:function(){return cs.SemanticTokensRangeRequest}});Object.defineProperty(C,"SemanticTokensRefreshRequest",{enumerable:!0,get:function(){return cs.SemanticTokensRefreshRequest}});Object.defineProperty(C,"SemanticTokensRegistrationType",{enumerable:!0,get:function(){return cs.SemanticTokensRegistrationType}});var uG=uA();Object.defineProperty(C,"ShowDocumentRequest",{enumerable:!0,get:function(){return uG.ShowDocumentRequest}});var cG=lA();Object.defineProperty(C,"LinkedEditingRangeRequest",{enumerable:!0,get:function(){return cG.LinkedEditingRangeRequest}});var ya=dA();Object.defineProperty(C,"FileOperationPatternKind",{enumerable:!0,get:function(){return ya.FileOperationPatternKind}});Object.defineProperty(C,"DidCreateFilesNotification",{enumerable:!0,get:function(){return ya.DidCreateFilesNotification}});Object.defineProperty(C,"WillCreateFilesRequest",{enumerable:!0,get:function(){return ya.WillCreateFilesRequest}});Object.defineProperty(C,"DidRenameFilesNotification",{enumerable:!0,get:function(){return ya.DidRenameFilesNotification}});Object.defineProperty(C,"WillRenameFilesRequest",{enumerable:!0,get:function(){return ya.WillRenameFilesRequest}});Object.defineProperty(C,"DidDeleteFilesNotification",{enumerable:!0,get:function(){return ya.DidDeleteFilesNotification}});Object.defineProperty(C,"WillDeleteFilesRequest",{enumerable:!0,get:function(){return ya.WillDeleteFilesRequest}});var Ng=pA();Object.defineProperty(C,"UniquenessLevel",{enumerable:!0,get:function(){return Ng.UniquenessLevel}});Object.defineProperty(C,"MonikerKind",{enumerable:!0,get:function(){return Ng.MonikerKind}});Object.defineProperty(C,"MonikerRequest",{enumerable:!0,get:function(){return Ng.MonikerRequest}});var wg=hA();Object.defineProperty(C,"TypeHierarchyPrepareRequest",{enumerable:!0,get:function(){return wg.TypeHierarchyPrepareRequest}});Object.defineProperty(C,"TypeHierarchySubtypesRequest",{enumerable:!0,get:function(){return wg.TypeHierarchySubtypesRequest}});Object.defineProperty(C,"TypeHierarchySupertypesRequest",{enumerable:!0,get:function(){return wg.TypeHierarchySupertypesRequest}});var PA=mA();Object.defineProperty(C,"InlineValueRequest",{enumerable:!0,get:function(){return PA.InlineValueRequest}});Object.defineProperty(C,"InlineValueRefreshRequest",{enumerable:!0,get:function(){return PA.InlineValueRefreshRequest}});var Dg=gA();Object.defineProperty(C,"InlayHintRequest",{enumerable:!0,get:function(){return Dg.InlayHintRequest}});Object.defineProperty(C,"InlayHintResolveRequest",{enumerable:!0,get:function(){return Dg.InlayHintResolveRequest}});Object.defineProperty(C,"InlayHintRefreshRequest",{enumerable:!0,get:function(){return Dg.InlayHintRefreshRequest}});var pc=vA();Object.defineProperty(C,"DiagnosticServerCancellationData",{enumerable:!0,get:function(){return pc.DiagnosticServerCancellationData}});Object.defineProperty(C,"DocumentDiagnosticReportKind",{enumerable:!0,get:function(){return pc.DocumentDiagnosticReportKind}});Object.defineProperty(C,"DocumentDiagnosticRequest",{enumerable:!0,get:function(){return pc.DocumentDiagnosticRequest}});Object.defineProperty(C,"WorkspaceDiagnosticRequest",{enumerable:!0,get:function(){return pc.WorkspaceDiagnosticRequest}});Object.defineProperty(C,"DiagnosticRefreshRequest",{enumerable:!0,get:function(){return pc.DiagnosticRefreshRequest}});var vi=RA();Object.defineProperty(C,"NotebookCellKind",{enumerable:!0,get:function(){return vi.NotebookCellKind}});Object.defineProperty(C,"ExecutionSummary",{enumerable:!0,get:function(){return vi.ExecutionSummary}});Object.defineProperty(C,"NotebookCell",{enumerable:!0,get:function(){return vi.NotebookCell}});Object.defineProperty(C,"NotebookDocument",{enumerable:!0,get:function(){return vi.NotebookDocument}});Object.defineProperty(C,"NotebookDocumentSyncRegistrationType",{enumerable:!0,get:function(){return vi.NotebookDocumentSyncRegistrationType}});Object.defineProperty(C,"DidOpenNotebookDocumentNotification",{enumerable:!0,get:function(){return vi.DidOpenNotebookDocumentNotification}});Object.defineProperty(C,"NotebookCellArrayChange",{enumerable:!0,get:function(){return vi.NotebookCellArrayChange}});Object.defineProperty(C,"DidChangeNotebookDocumentNotification",{enumerable:!0,get:function(){return vi.DidChangeNotebookDocumentNotification}});Object.defineProperty(C,"DidSaveNotebookDocumentNotification",{enumerable:!0,get:function(){return vi.DidSaveNotebookDocumentNotification}});Object.defineProperty(C,"DidCloseNotebookDocumentNotification",{enumerable:!0,get:function(){return vi.DidCloseNotebookDocumentNotification}});var SA;(function(t){function e(r){let n=r;return pr.string(n.language)||pr.string(n.scheme)||pr.string(n.pattern)}t.is=e})(SA=C.TextDocumentFilter||(C.TextDocumentFilter={}));var EA;(function(t){function e(r){let n=r;return pr.objectLiteral(n)&&(pr.string(n.notebookType)||pr.string(n.scheme)||pr.string(n.pattern))}t.is=e})(EA=C.NotebookDocumentFilter||(C.NotebookDocumentFilter={}));var kA;(function(t){function e(r){let n=r;return pr.objectLiteral(n)&&(pr.string(n.notebook)||EA.is(n.notebook))&&(n.language===void 0||pr.string(n.language))}t.is=e})(kA=C.NotebookCellTextDocumentFilter||(C.NotebookCellTextDocumentFilter={}));var NA;(function(t){function e(r){if(!Array.isArray(r))return!1;for(let n of r)if(!pr.string(n)&&!SA.is(n)&&!kA.is(n))return!1;return!0}t.is=e})(NA=C.DocumentSelector||(C.DocumentSelector={}));var lG;(function(t){t.method="client/registerCapability",t.messageDirection=K.MessageDirection.serverToClient,t.type=new K.ProtocolRequestType(t.method)})(lG=C.RegistrationRequest||(C.RegistrationRequest={}));var dG;(function(t){t.method="client/unregisterCapability",t.messageDirection=K.MessageDirection.serverToClient,t.type=new K.ProtocolRequestType(t.method)})(dG=C.UnregistrationRequest||(C.UnregistrationRequest={}));var fG;(function(t){t.Create="create",t.Rename="rename",t.Delete="delete"})(fG=C.ResourceOperationKind||(C.ResourceOperationKind={}));var pG;(function(t){t.Abort="abort",t.Transactional="transactional",t.TextOnlyTransactional="textOnlyTransactional",t.Undo="undo"})(pG=C.FailureHandlingKind||(C.FailureHandlingKind={}));var hG;(function(t){t.UTF8="utf-8",t.UTF16="utf-16",t.UTF32="utf-32"})(hG=C.PositionEncodingKind||(C.PositionEncodingKind={}));var mG;(function(t){function e(r){let n=r;return n&&pr.string(n.id)&&n.id.length>0}t.hasId=e})(mG=C.StaticRegistrationOptions||(C.StaticRegistrationOptions={}));var gG;(function(t){function e(r){let n=r;return n&&(n.documentSelector===null||NA.is(n.documentSelector))}t.is=e})(gG=C.TextDocumentRegistrationOptions||(C.TextDocumentRegistrationOptions={}));var yG;(function(t){function e(n){let i=n;return pr.objectLiteral(i)&&(i.workDoneProgress===void 0||pr.boolean(i.workDoneProgress))}t.is=e;function r(n){let i=n;return i&&pr.boolean(i.workDoneProgress)}t.hasWorkDoneProgress=r})(yG=C.WorkDoneProgressOptions||(C.WorkDoneProgressOptions={}));var vG;(function(t){t.method="initialize",t.messageDirection=K.MessageDirection.clientToServer,t.type=new K.ProtocolRequestType(t.method)})(vG=C.InitializeRequest||(C.InitializeRequest={}));var _G;(function(t){t.unknownProtocolVersion=1})(_G=C.InitializeErrorCodes||(C.InitializeErrorCodes={}));var TG;(function(t){t.method="initialized",t.messageDirection=K.MessageDirection.clientToServer,t.type=new K.ProtocolNotificationType(t.method)})(TG=C.InitializedNotification||(C.InitializedNotification={}));var RG;(function(t){t.method="shutdown",t.messageDirection=K.MessageDirection.clientToServer,t.type=new K.ProtocolRequestType0(t.method)})(RG=C.ShutdownRequest||(C.ShutdownRequest={}));var bG;(function(t){t.method="exit",t.messageDirection=K.MessageDirection.clientToServer,t.type=new K.ProtocolNotificationType0(t.method)})(bG=C.ExitNotification||(C.ExitNotification={}));var CG;(function(t){t.method="workspace/didChangeConfiguration",t.messageDirection=K.MessageDirection.clientToServer,t.type=new K.ProtocolNotificationType(t.method)})(CG=C.DidChangeConfigurationNotification||(C.DidChangeConfigurationNotification={}));var AG;(function(t){t.Error=1,t.Warning=2,t.Info=3,t.Log=4})(AG=C.MessageType||(C.MessageType={}));var PG;(function(t){t.method="window/showMessage",t.messageDirection=K.MessageDirection.serverToClient,t.type=new K.ProtocolNotificationType(t.method)})(PG=C.ShowMessageNotification||(C.ShowMessageNotification={}));var SG;(function(t){t.method="window/showMessageRequest",t.messageDirection=K.MessageDirection.serverToClient,t.type=new K.ProtocolRequestType(t.method)})(SG=C.ShowMessageRequest||(C.ShowMessageRequest={}));var EG;(function(t){t.method="window/logMessage",t.messageDirection=K.MessageDirection.serverToClient,t.type=new K.ProtocolNotificationType(t.method)})(EG=C.LogMessageNotification||(C.LogMessageNotification={}));var kG;(function(t){t.method="telemetry/event",t.messageDirection=K.MessageDirection.serverToClient,t.type=new K.ProtocolNotificationType(t.method)})(kG=C.TelemetryEventNotification||(C.TelemetryEventNotification={}));var NG;(function(t){t.None=0,t.Full=1,t.Incremental=2})(NG=C.TextDocumentSyncKind||(C.TextDocumentSyncKind={}));var wG;(function(t){t.method="textDocument/didOpen",t.messageDirection=K.MessageDirection.clientToServer,t.type=new K.ProtocolNotificationType(t.method)})(wG=C.DidOpenTextDocumentNotification||(C.DidOpenTextDocumentNotification={}));var DG;(function(t){function e(n){let i=n;return i!=null&&typeof i.text=="string"&&i.range!==void 0&&(i.rangeLength===void 0||typeof i.rangeLength=="number")}t.isIncremental=e;function r(n){let i=n;return i!=null&&typeof i.text=="string"&&i.range===void 0&&i.rangeLength===void 0}t.isFull=r})(DG=C.TextDocumentContentChangeEvent||(C.TextDocumentContentChangeEvent={}));var OG;(function(t){t.method="textDocument/didChange",t.messageDirection=K.MessageDirection.clientToServer,t.type=new K.ProtocolNotificationType(t.method)})(OG=C.DidChangeTextDocumentNotification||(C.DidChangeTextDocumentNotification={}));var IG;(function(t){t.method="textDocument/didClose",t.messageDirection=K.MessageDirection.clientToServer,t.type=new K.ProtocolNotificationType(t.method)})(IG=C.DidCloseTextDocumentNotification||(C.DidCloseTextDocumentNotification={}));var qG;(function(t){t.method="textDocument/didSave",t.messageDirection=K.MessageDirection.clientToServer,t.type=new K.ProtocolNotificationType(t.method)})(qG=C.DidSaveTextDocumentNotification||(C.DidSaveTextDocumentNotification={}));var xG;(function(t){t.Manual=1,t.AfterDelay=2,t.FocusOut=3})(xG=C.TextDocumentSaveReason||(C.TextDocumentSaveReason={}));var LG;(function(t){t.method="textDocument/willSave",t.messageDirection=K.MessageDirection.clientToServer,t.type=new K.ProtocolNotificationType(t.method)})(LG=C.WillSaveTextDocumentNotification||(C.WillSaveTextDocumentNotification={}));var MG;(function(t){t.method="textDocument/willSaveWaitUntil",t.messageDirection=K.MessageDirection.clientToServer,t.type=new K.ProtocolRequestType(t.method)})(MG=C.WillSaveTextDocumentWaitUntilRequest||(C.WillSaveTextDocumentWaitUntilRequest={}));var $G;(function(t){t.method="workspace/didChangeWatchedFiles",t.messageDirection=K.MessageDirection.clientToServer,t.type=new K.ProtocolNotificationType(t.method)})($G=C.DidChangeWatchedFilesNotification||(C.DidChangeWatchedFilesNotification={}));var FG;(function(t){t.Created=1,t.Changed=2,t.Deleted=3})(FG=C.FileChangeType||(C.FileChangeType={}));var jG;(function(t){function e(r){let n=r;return pr.objectLiteral(n)&&(bA.URI.is(n.baseUri)||bA.WorkspaceFolder.is(n.baseUri))&&pr.string(n.pattern)}t.is=e})(jG=C.RelativePattern||(C.RelativePattern={}));var UG;(function(t){t.Create=1,t.Change=2,t.Delete=4})(UG=C.WatchKind||(C.WatchKind={}));var GG;(function(t){t.method="textDocument/publishDiagnostics",t.messageDirection=K.MessageDirection.serverToClient,t.type=new K.ProtocolNotificationType(t.method)})(GG=C.PublishDiagnosticsNotification||(C.PublishDiagnosticsNotification={}));var HG;(function(t){t.Invoked=1,t.TriggerCharacter=2,t.TriggerForIncompleteCompletions=3})(HG=C.CompletionTriggerKind||(C.CompletionTriggerKind={}));var WG;(function(t){t.method="textDocument/completion",t.messageDirection=K.MessageDirection.clientToServer,t.type=new K.ProtocolRequestType(t.method)})(WG=C.CompletionRequest||(C.CompletionRequest={}));var KG;(function(t){t.method="completionItem/resolve",t.messageDirection=K.MessageDirection.clientToServer,t.type=new K.ProtocolRequestType(t.method)})(KG=C.CompletionResolveRequest||(C.CompletionResolveRequest={}));var BG;(function(t){t.method="textDocument/hover",t.messageDirection=K.MessageDirection.clientToServer,t.type=new K.ProtocolRequestType(t.method)})(BG=C.HoverRequest||(C.HoverRequest={}));var zG;(function(t){t.Invoked=1,t.TriggerCharacter=2,t.ContentChange=3})(zG=C.SignatureHelpTriggerKind||(C.SignatureHelpTriggerKind={}));var VG;(function(t){t.method="textDocument/signatureHelp",t.messageDirection=K.MessageDirection.clientToServer,t.type=new K.ProtocolRequestType(t.method)})(VG=C.SignatureHelpRequest||(C.SignatureHelpRequest={}));var YG;(function(t){t.method="textDocument/definition",t.messageDirection=K.MessageDirection.clientToServer,t.type=new K.ProtocolRequestType(t.method)})(YG=C.DefinitionRequest||(C.DefinitionRequest={}));var XG;(function(t){t.method="textDocument/references",t.messageDirection=K.MessageDirection.clientToServer,t.type=new K.ProtocolRequestType(t.method)})(XG=C.ReferencesRequest||(C.ReferencesRequest={}));var JG;(function(t){t.method="textDocument/documentHighlight",t.messageDirection=K.MessageDirection.clientToServer,t.type=new K.ProtocolRequestType(t.method)})(JG=C.DocumentHighlightRequest||(C.DocumentHighlightRequest={}));var QG;(function(t){t.method="textDocument/documentSymbol",t.messageDirection=K.MessageDirection.clientToServer,t.type=new K.ProtocolRequestType(t.method)})(QG=C.DocumentSymbolRequest||(C.DocumentSymbolRequest={}));var ZG;(function(t){t.method="textDocument/codeAction",t.messageDirection=K.MessageDirection.clientToServer,t.type=new K.ProtocolRequestType(t.method)})(ZG=C.CodeActionRequest||(C.CodeActionRequest={}));var eH;(function(t){t.method="codeAction/resolve",t.messageDirection=K.MessageDirection.clientToServer,t.type=new K.ProtocolRequestType(t.method)})(eH=C.CodeActionResolveRequest||(C.CodeActionResolveRequest={}));var tH;(function(t){t.method="workspace/symbol",t.messageDirection=K.MessageDirection.clientToServer,t.type=new K.ProtocolRequestType(t.method)})(tH=C.WorkspaceSymbolRequest||(C.WorkspaceSymbolRequest={}));var rH;(function(t){t.method="workspaceSymbol/resolve",t.messageDirection=K.MessageDirection.clientToServer,t.type=new K.ProtocolRequestType(t.method)})(rH=C.WorkspaceSymbolResolveRequest||(C.WorkspaceSymbolResolveRequest={}));var nH;(function(t){t.method="textDocument/codeLens",t.messageDirection=K.MessageDirection.clientToServer,t.type=new K.ProtocolRequestType(t.method)})(nH=C.CodeLensRequest||(C.CodeLensRequest={}));var iH;(function(t){t.method="codeLens/resolve",t.messageDirection=K.MessageDirection.clientToServer,t.type=new K.ProtocolRequestType(t.method)})(iH=C.CodeLensResolveRequest||(C.CodeLensResolveRequest={}));var oH;(function(t){t.method="workspace/codeLens/refresh",t.messageDirection=K.MessageDirection.serverToClient,t.type=new K.ProtocolRequestType0(t.method)})(oH=C.CodeLensRefreshRequest||(C.CodeLensRefreshRequest={}));var aH;(function(t){t.method="textDocument/documentLink",t.messageDirection=K.MessageDirection.clientToServer,t.type=new K.ProtocolRequestType(t.method)})(aH=C.DocumentLinkRequest||(C.DocumentLinkRequest={}));var sH;(function(t){t.method="documentLink/resolve",t.messageDirection=K.MessageDirection.clientToServer,t.type=new K.ProtocolRequestType(t.method)})(sH=C.DocumentLinkResolveRequest||(C.DocumentLinkResolveRequest={}));var uH;(function(t){t.method="textDocument/formatting",t.messageDirection=K.MessageDirection.clientToServer,t.type=new K.ProtocolRequestType(t.method)})(uH=C.DocumentFormattingRequest||(C.DocumentFormattingRequest={}));var cH;(function(t){t.method="textDocument/rangeFormatting",t.messageDirection=K.MessageDirection.clientToServer,t.type=new K.ProtocolRequestType(t.method)})(cH=C.DocumentRangeFormattingRequest||(C.DocumentRangeFormattingRequest={}));var lH;(function(t){t.method="textDocument/onTypeFormatting",t.messageDirection=K.MessageDirection.clientToServer,t.type=new K.ProtocolRequestType(t.method)})(lH=C.DocumentOnTypeFormattingRequest||(C.DocumentOnTypeFormattingRequest={}));var dH;(function(t){t.Identifier=1})(dH=C.PrepareSupportDefaultBehavior||(C.PrepareSupportDefaultBehavior={}));var fH;(function(t){t.method="textDocument/rename",t.messageDirection=K.MessageDirection.clientToServer,t.type=new K.ProtocolRequestType(t.method)})(fH=C.RenameRequest||(C.RenameRequest={}));var pH;(function(t){t.method="textDocument/prepareRename",t.messageDirection=K.MessageDirection.clientToServer,t.type=new K.ProtocolRequestType(t.method)})(pH=C.PrepareRenameRequest||(C.PrepareRenameRequest={}));var hH;(function(t){t.method="workspace/executeCommand",t.messageDirection=K.MessageDirection.clientToServer,t.type=new K.ProtocolRequestType(t.method)})(hH=C.ExecuteCommandRequest||(C.ExecuteCommandRequest={}));var mH;(function(t){t.method="workspace/applyEdit",t.messageDirection=K.MessageDirection.serverToClient,t.type=new K.ProtocolRequestType("workspace/applyEdit")})(mH=C.ApplyWorkspaceEditRequest||(C.ApplyWorkspaceEditRequest={}))});var OA=h(dd=>{"use strict";Object.defineProperty(dd,"__esModule",{value:!0});dd.createProtocolConnection=void 0;var DA=ga();function gH(t,e,r,n){return DA.ConnectionStrategy.is(n)&&(n={connectionStrategy:n}),(0,DA.createMessageConnection)(t,e,r,n)}dd.createProtocolConnection=gH});var IA=h(xr=>{"use strict";var yH=xr&&xr.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var i=Object.getOwnPropertyDescriptor(e,r);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,i)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),fd=xr&&xr.__exportStar||function(t,e){for(var r in t)r!=="default"&&!Object.prototype.hasOwnProperty.call(e,r)&&yH(e,t,r)};Object.defineProperty(xr,"__esModule",{value:!0});xr.LSPErrorCodes=xr.createProtocolConnection=void 0;fd(ga(),xr);fd(id(),xr);fd(At(),xr);fd(wA(),xr);var vH=OA();Object.defineProperty(xr,"createProtocolConnection",{enumerable:!0,get:function(){return vH.createProtocolConnection}});var _H;(function(t){t.lspReservedErrorRangeStart=-32899,t.RequestFailed=-32803,t.ServerCancelled=-32802,t.ContentModified=-32801,t.RequestCancelled=-32800,t.lspReservedErrorRangeEnd=-32800})(_H=xr.LSPErrorCodes||(xr.LSPErrorCodes={}))});var zt=h(_i=>{"use strict";var TH=_i&&_i.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var i=Object.getOwnPropertyDescriptor(e,r);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,i)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),qA=_i&&_i.__exportStar||function(t,e){for(var r in t)r!=="default"&&!Object.prototype.hasOwnProperty.call(e,r)&&TH(e,t,r)};Object.defineProperty(_i,"__esModule",{value:!0});_i.createProtocolConnection=void 0;var RH=Tg();qA(Tg(),_i);qA(IA(),_i);function bH(t,e,r,n){return(0,RH.createMessageConnection)(t,e,r,n)}_i.createProtocolConnection=bH});var Ig=h(qo=>{"use strict";Object.defineProperty(qo,"__esModule",{value:!0});qo.SemanticTokensBuilder=qo.SemanticTokensDiff=qo.SemanticTokensFeature=void 0;var pd=zt(),CH=t=>class extends t{get semanticTokens(){return{refresh:()=>this.connection.sendRequest(pd.SemanticTokensRefreshRequest.type),on:e=>{let r=pd.SemanticTokensRequest.type;return this.connection.onRequest(r,(n,i)=>e(n,i,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))},onDelta:e=>{let r=pd.SemanticTokensDeltaRequest.type;return this.connection.onRequest(r,(n,i)=>e(n,i,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))},onRange:e=>{let r=pd.SemanticTokensRangeRequest.type;return this.connection.onRequest(r,(n,i)=>e(n,i,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))}}}};qo.SemanticTokensFeature=CH;var hd=class{constructor(e,r){this.originalSequence=e,this.modifiedSequence=r}computeDiff(){let e=this.originalSequence.length,r=this.modifiedSequence.length,n=0;for(;n<r&&n<e&&this.originalSequence[n]===this.modifiedSequence[n];)n++;if(n<r&&n<e){let i=e-1,o=r-1;for(;i>=n&&o>=n&&this.originalSequence[i]===this.modifiedSequence[o];)i--,o--;(i<n||o<n)&&(i++,o++);let a=i-n+1,s=this.modifiedSequence.slice(n,o+1);return s.length===1&&s[0]===this.originalSequence[i]?[{start:n,deleteCount:a-1}]:[{start:n,deleteCount:a,data:s}]}else return n<r?[{start:n,deleteCount:0,data:this.modifiedSequence.slice(n)}]:n<e?[{start:n,deleteCount:e-n}]:[]}};qo.SemanticTokensDiff=hd;var Og=class{constructor(){this._prevData=void 0,this.initialize()}initialize(){this._id=Date.now(),this._prevLine=0,this._prevChar=0,this._data=[],this._dataLen=0}push(e,r,n,i,o){let a=e,s=r;this._dataLen>0&&(a-=this._prevLine,a===0&&(s-=this._prevChar)),this._data[this._dataLen++]=a,this._data[this._dataLen++]=s,this._data[this._dataLen++]=n,this._data[this._dataLen++]=i,this._data[this._dataLen++]=o,this._prevLine=e,this._prevChar=r}get id(){return this._id.toString()}previousResult(e){this.id===e&&(this._prevData=this._data),this.initialize()}build(){return this._prevData=void 0,{resultId:this.id,data:this._data}}canBuildEdits(){return this._prevData!==void 0}buildEdits(){return this._prevData!==void 0?{resultId:this.id,edits:new hd(this._prevData,this._data).computeDiff()}:this.build()}};qo.SemanticTokensBuilder=Og});var xg=h(md=>{"use strict";Object.defineProperty(md,"__esModule",{value:!0});md.TextDocuments=void 0;var va=zt(),qg=class{constructor(e){this._configuration=e,this._syncedDocuments=new Map,this._onDidChangeContent=new va.Emitter,this._onDidOpen=new va.Emitter,this._onDidClose=new va.Emitter,this._onDidSave=new va.Emitter,this._onWillSave=new va.Emitter}get onDidOpen(){return this._onDidOpen.event}get onDidChangeContent(){return this._onDidChangeContent.event}get onWillSave(){return this._onWillSave.event}onWillSaveWaitUntil(e){this._willSaveWaitUntil=e}get onDidSave(){return this._onDidSave.event}get onDidClose(){return this._onDidClose.event}get(e){return this._syncedDocuments.get(e)}all(){return Array.from(this._syncedDocuments.values())}keys(){return Array.from(this._syncedDocuments.keys())}listen(e){e.__textDocumentSync=va.TextDocumentSyncKind.Incremental;let r=[];return r.push(e.onDidOpenTextDocument(n=>{let i=n.textDocument,o=this._configuration.create(i.uri,i.languageId,i.version,i.text);this._syncedDocuments.set(i.uri,o);let a=Object.freeze({document:o});this._onDidOpen.fire(a),this._onDidChangeContent.fire(a)})),r.push(e.onDidChangeTextDocument(n=>{let i=n.textDocument,o=n.contentChanges;if(o.length===0)return;let{version:a}=i;if(a==null)throw new Error(`Received document change event for ${i.uri} without valid version identifier`);let s=this._syncedDocuments.get(i.uri);s!==void 0&&(s=this._configuration.update(s,o,a),this._syncedDocuments.set(i.uri,s),this._onDidChangeContent.fire(Object.freeze({document:s})))})),r.push(e.onDidCloseTextDocument(n=>{let i=this._syncedDocuments.get(n.textDocument.uri);i!==void 0&&(this._syncedDocuments.delete(n.textDocument.uri),this._onDidClose.fire(Object.freeze({document:i})))})),r.push(e.onWillSaveTextDocument(n=>{let i=this._syncedDocuments.get(n.textDocument.uri);i!==void 0&&this._onWillSave.fire(Object.freeze({document:i,reason:n.reason}))})),r.push(e.onWillSaveTextDocumentWaitUntil((n,i)=>{let o=this._syncedDocuments.get(n.textDocument.uri);return o!==void 0&&this._willSaveWaitUntil?this._willSaveWaitUntil(Object.freeze({document:o,reason:n.reason}),i):[]})),r.push(e.onDidSaveTextDocument(n=>{let i=this._syncedDocuments.get(n.textDocument.uri);i!==void 0&&this._onDidSave.fire(Object.freeze({document:i}))})),va.Disposable.create(()=>{r.forEach(n=>n.dispose())})}};md.TextDocuments=qg});var Mg=h(ls=>{"use strict";Object.defineProperty(ls,"__esModule",{value:!0});ls.NotebookDocuments=ls.NotebookSyncFeature=void 0;var vn=zt(),xA=xg(),AH=t=>class extends t{get synchronization(){return{onDidOpenNotebookDocument:e=>this.connection.onNotification(vn.DidOpenNotebookDocumentNotification.type,r=>{e(r)}),onDidChangeNotebookDocument:e=>this.connection.onNotification(vn.DidChangeNotebookDocumentNotification.type,r=>{e(r)}),onDidSaveNotebookDocument:e=>this.connection.onNotification(vn.DidSaveNotebookDocumentNotification.type,r=>{e(r)}),onDidCloseNotebookDocument:e=>this.connection.onNotification(vn.DidCloseNotebookDocumentNotification.type,r=>{e(r)})}}};ls.NotebookSyncFeature=AH;var gd=class t{onDidOpenTextDocument(e){return this.openHandler=e,vn.Disposable.create(()=>{this.openHandler=void 0})}openTextDocument(e){this.openHandler&&this.openHandler(e)}onDidChangeTextDocument(e){return this.changeHandler=e,vn.Disposable.create(()=>{this.changeHandler=e})}changeTextDocument(e){this.changeHandler&&this.changeHandler(e)}onDidCloseTextDocument(e){return this.closeHandler=e,vn.Disposable.create(()=>{this.closeHandler=void 0})}closeTextDocument(e){this.closeHandler&&this.closeHandler(e)}onWillSaveTextDocument(){return t.NULL_DISPOSE}onWillSaveTextDocumentWaitUntil(){return t.NULL_DISPOSE}onDidSaveTextDocument(){return t.NULL_DISPOSE}};gd.NULL_DISPOSE=Object.freeze({dispose:()=>{}});var Lg=class{constructor(e){e instanceof xA.TextDocuments?this._cellTextDocuments=e:this._cellTextDocuments=new xA.TextDocuments(e),this.notebookDocuments=new Map,this.notebookCellMap=new Map,this._onDidOpen=new vn.Emitter,this._onDidChange=new vn.Emitter,this._onDidSave=new vn.Emitter,this._onDidClose=new vn.Emitter}get cellTextDocuments(){return this._cellTextDocuments}getCellTextDocument(e){return this._cellTextDocuments.get(e.document)}getNotebookDocument(e){return this.notebookDocuments.get(e)}getNotebookCell(e){let r=this.notebookCellMap.get(e);return r&&r[0]}findNotebookDocumentForCell(e){let r=typeof e=="string"?e:e.document,n=this.notebookCellMap.get(r);return n&&n[1]}get onDidOpen(){return this._onDidOpen.event}get onDidSave(){return this._onDidSave.event}get onDidChange(){return this._onDidChange.event}get onDidClose(){return this._onDidClose.event}listen(e){let r=new gd,n=[];return n.push(this.cellTextDocuments.listen(r)),n.push(e.notebooks.synchronization.onDidOpenNotebookDocument(i=>{this.notebookDocuments.set(i.notebookDocument.uri,i.notebookDocument);for(let o of i.cellTextDocuments)r.openTextDocument({textDocument:o});this.updateCellMap(i.notebookDocument),this._onDidOpen.fire(i.notebookDocument)})),n.push(e.notebooks.synchronization.onDidChangeNotebookDocument(i=>{let o=this.notebookDocuments.get(i.notebookDocument.uri);if(o===void 0)return;o.version=i.notebookDocument.version;let a=o.metadata,s=!1,u=i.change;u.metadata!==void 0&&(s=!0,o.metadata=u.metadata);let d=[],p=[],m=[],v=[];if(u.cells!==void 0){let O=u.cells;if(O.structure!==void 0){let E=O.structure.array;if(o.cells.splice(E.start,E.deleteCount,...E.cells!==void 0?E.cells:[]),O.structure.didOpen!==void 0)for(let S of O.structure.didOpen)r.openTextDocument({textDocument:S}),d.push(S.uri);if(O.structure.didClose)for(let S of O.structure.didClose)r.closeTextDocument({textDocument:S}),p.push(S.uri)}if(O.data!==void 0){let E=new Map(O.data.map(S=>[S.document,S]));for(let S=0;S<=o.cells.length;S++){let L=E.get(o.cells[S].document);if(L!==void 0){let U=o.cells.splice(S,1,L);if(m.push({old:U[0],new:L}),E.delete(L.document),E.size===0)break}}}if(O.textContent!==void 0)for(let E of O.textContent)r.changeTextDocument({textDocument:E.document,contentChanges:E.changes}),v.push(E.document.uri)}this.updateCellMap(o);let P={notebookDocument:o};s&&(P.metadata={old:a,new:o.metadata});let _=[];for(let O of d)_.push(this.getNotebookCell(O));let N=[];for(let O of p)N.push(this.getNotebookCell(O));let I=[];for(let O of v)I.push(this.getNotebookCell(O));(_.length>0||N.length>0||m.length>0||I.length>0)&&(P.cells={added:_,removed:N,changed:{data:m,textContent:I}}),(P.metadata!==void 0||P.cells!==void 0)&&this._onDidChange.fire(P)})),n.push(e.notebooks.synchronization.onDidSaveNotebookDocument(i=>{let o=this.notebookDocuments.get(i.notebookDocument.uri);o!==void 0&&this._onDidSave.fire(o)})),n.push(e.notebooks.synchronization.onDidCloseNotebookDocument(i=>{let o=this.notebookDocuments.get(i.notebookDocument.uri);if(o!==void 0){this._onDidClose.fire(o);for(let a of i.cellTextDocuments)r.closeTextDocument({textDocument:a});this.notebookDocuments.delete(i.notebookDocument.uri);for(let a of o.cells)this.notebookCellMap.delete(a.document)}})),vn.Disposable.create(()=>{n.forEach(i=>i.dispose())})}updateCellMap(e){for(let r of e.cells)this.notebookCellMap.set(r.document,[r,e])}};ls.NotebookDocuments=Lg});var $g=h(xt=>{"use strict";Object.defineProperty(xt,"__esModule",{value:!0});xt.thenable=xt.typedArray=xt.stringArray=xt.array=xt.func=xt.error=xt.number=xt.string=xt.boolean=void 0;function PH(t){return t===!0||t===!1}xt.boolean=PH;function LA(t){return typeof t=="string"||t instanceof String}xt.string=LA;function SH(t){return typeof t=="number"||t instanceof Number}xt.number=SH;function EH(t){return t instanceof Error}xt.error=EH;function MA(t){return typeof t=="function"}xt.func=MA;function $A(t){return Array.isArray(t)}xt.array=$A;function kH(t){return $A(t)&&t.every(e=>LA(e))}xt.stringArray=kH;function NH(t,e){return Array.isArray(t)&&t.every(e)}xt.typedArray=NH;function wH(t){return t&&MA(t.then)}xt.thenable=wH});var Fg=h(_n=>{"use strict";Object.defineProperty(_n,"__esModule",{value:!0});_n.generateUuid=_n.parse=_n.isUUID=_n.v4=_n.empty=void 0;var hc=class{constructor(e){this._value=e}asHex(){return this._value}equals(e){return this.asHex()===e.asHex()}},mc=class t extends hc{constructor(){super([t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),"-",t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),"-","4",t._randomHex(),t._randomHex(),t._randomHex(),"-",t._oneOf(t._timeHighBits),t._randomHex(),t._randomHex(),t._randomHex(),"-",t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex()].join(""))}static _oneOf(e){return e[Math.floor(e.length*Math.random())]}static _randomHex(){return t._oneOf(t._chars)}};mc._chars=["0","1","2","3","4","5","6","6","7","8","9","a","b","c","d","e","f"];mc._timeHighBits=["8","9","a","b"];_n.empty=new hc("00000000-0000-0000-0000-000000000000");function FA(){return new mc}_n.v4=FA;var DH=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;function jA(t){return DH.test(t)}_n.isUUID=jA;function OH(t){if(!jA(t))throw new Error("invalid uuid");return new hc(t)}_n.parse=OH;function IH(){return FA().asHex()}_n.generateUuid=IH});var UA=h(Lo=>{"use strict";Object.defineProperty(Lo,"__esModule",{value:!0});Lo.attachPartialResult=Lo.ProgressFeature=Lo.attachWorkDone=void 0;var xo=zt(),qH=Fg(),_a=class t{constructor(e,r){this._connection=e,this._token=r,t.Instances.set(this._token,this)}begin(e,r,n,i){let o={kind:"begin",title:e,percentage:r,message:n,cancellable:i};this._connection.sendProgress(xo.WorkDoneProgress.type,this._token,o)}report(e,r){let n={kind:"report"};typeof e=="number"?(n.percentage=e,r!==void 0&&(n.message=r)):n.message=e,this._connection.sendProgress(xo.WorkDoneProgress.type,this._token,n)}done(){t.Instances.delete(this._token),this._connection.sendProgress(xo.WorkDoneProgress.type,this._token,{kind:"end"})}};_a.Instances=new Map;var yd=class extends _a{constructor(e,r){super(e,r),this._source=new xo.CancellationTokenSource}get token(){return this._source.token}done(){this._source.dispose(),super.done()}cancel(){this._source.cancel()}},gc=class{constructor(){}begin(){}report(){}done(){}},vd=class extends gc{constructor(){super(),this._source=new xo.CancellationTokenSource}get token(){return this._source.token}done(){this._source.dispose()}cancel(){this._source.cancel()}};function xH(t,e){if(e===void 0||e.workDoneToken===void 0)return new gc;let r=e.workDoneToken;return delete e.workDoneToken,new _a(t,r)}Lo.attachWorkDone=xH;var LH=t=>class extends t{constructor(){super(),this._progressSupported=!1}initialize(e){super.initialize(e),e?.window?.workDoneProgress===!0&&(this._progressSupported=!0,this.connection.onNotification(xo.WorkDoneProgressCancelNotification.type,r=>{let n=_a.Instances.get(r.token);(n instanceof yd||n instanceof vd)&&n.cancel()}))}attachWorkDoneProgress(e){return e===void 0?new gc:new _a(this.connection,e)}createWorkDoneProgress(){if(this._progressSupported){let e=(0,qH.generateUuid)();return this.connection.sendRequest(xo.WorkDoneProgressCreateRequest.type,{token:e}).then(()=>new yd(this.connection,e))}else return Promise.resolve(new vd)}};Lo.ProgressFeature=LH;var jg;(function(t){t.type=new xo.ProgressType})(jg||(jg={}));var Ug=class{constructor(e,r){this._connection=e,this._token=r}report(e){this._connection.sendProgress(jg.type,this._token,e)}};function MH(t,e){if(e===void 0||e.partialResultToken===void 0)return;let r=e.partialResultToken;return delete e.partialResultToken,new Ug(t,r)}Lo.attachPartialResult=MH});var GA=h(_d=>{"use strict";Object.defineProperty(_d,"__esModule",{value:!0});_d.ConfigurationFeature=void 0;var $H=zt(),FH=$g(),jH=t=>class extends t{getConfiguration(e){return e?FH.string(e)?this._getConfiguration({section:e}):this._getConfiguration(e):this._getConfiguration({})}_getConfiguration(e){let r={items:Array.isArray(e)?e:[e]};return this.connection.sendRequest($H.ConfigurationRequest.type,r).then(n=>Array.isArray(n)?Array.isArray(e)?n:n[0]:Array.isArray(e)?[]:null)}};_d.ConfigurationFeature=jH});var HA=h(Rd=>{"use strict";Object.defineProperty(Rd,"__esModule",{value:!0});Rd.WorkspaceFoldersFeature=void 0;var Td=zt(),UH=t=>class extends t{constructor(){super(),this._notificationIsAutoRegistered=!1}initialize(e){super.initialize(e);let r=e.workspace;r&&r.workspaceFolders&&(this._onDidChangeWorkspaceFolders=new Td.Emitter,this.connection.onNotification(Td.DidChangeWorkspaceFoldersNotification.type,n=>{this._onDidChangeWorkspaceFolders.fire(n.event)}))}fillServerCapabilities(e){super.fillServerCapabilities(e);let r=e.workspace?.workspaceFolders?.changeNotifications;this._notificationIsAutoRegistered=r===!0||typeof r=="string"}getWorkspaceFolders(){return this.connection.sendRequest(Td.WorkspaceFoldersRequest.type)}get onDidChangeWorkspaceFolders(){if(!this._onDidChangeWorkspaceFolders)throw new Error("Client doesn't support sending workspace folder change events.");return!this._notificationIsAutoRegistered&&!this._unregistration&&(this._unregistration=this.connection.client.register(Td.DidChangeWorkspaceFoldersNotification.type)),this._onDidChangeWorkspaceFolders.event}};Rd.WorkspaceFoldersFeature=UH});var WA=h(bd=>{"use strict";Object.defineProperty(bd,"__esModule",{value:!0});bd.CallHierarchyFeature=void 0;var Gg=zt(),GH=t=>class extends t{get callHierarchy(){return{onPrepare:e=>this.connection.onRequest(Gg.CallHierarchyPrepareRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r),void 0)),onIncomingCalls:e=>{let r=Gg.CallHierarchyIncomingCallsRequest.type;return this.connection.onRequest(r,(n,i)=>e(n,i,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))},onOutgoingCalls:e=>{let r=Gg.CallHierarchyOutgoingCallsRequest.type;return this.connection.onRequest(r,(n,i)=>e(n,i,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))}}}};bd.CallHierarchyFeature=GH});var KA=h(Cd=>{"use strict";Object.defineProperty(Cd,"__esModule",{value:!0});Cd.ShowDocumentFeature=void 0;var HH=zt(),WH=t=>class extends t{showDocument(e){return this.connection.sendRequest(HH.ShowDocumentRequest.type,e)}};Cd.ShowDocumentFeature=WH});var BA=h(Ad=>{"use strict";Object.defineProperty(Ad,"__esModule",{value:!0});Ad.FileOperationsFeature=void 0;var ds=zt(),KH=t=>class extends t{onDidCreateFiles(e){return this.connection.onNotification(ds.DidCreateFilesNotification.type,r=>{e(r)})}onDidRenameFiles(e){return this.connection.onNotification(ds.DidRenameFilesNotification.type,r=>{e(r)})}onDidDeleteFiles(e){return this.connection.onNotification(ds.DidDeleteFilesNotification.type,r=>{e(r)})}onWillCreateFiles(e){return this.connection.onRequest(ds.WillCreateFilesRequest.type,(r,n)=>e(r,n))}onWillRenameFiles(e){return this.connection.onRequest(ds.WillRenameFilesRequest.type,(r,n)=>e(r,n))}onWillDeleteFiles(e){return this.connection.onRequest(ds.WillDeleteFilesRequest.type,(r,n)=>e(r,n))}};Ad.FileOperationsFeature=KH});var zA=h(Pd=>{"use strict";Object.defineProperty(Pd,"__esModule",{value:!0});Pd.LinkedEditingRangeFeature=void 0;var BH=zt(),zH=t=>class extends t{onLinkedEditingRange(e){return this.connection.onRequest(BH.LinkedEditingRangeRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r),void 0))}};Pd.LinkedEditingRangeFeature=zH});var VA=h(Sd=>{"use strict";Object.defineProperty(Sd,"__esModule",{value:!0});Sd.TypeHierarchyFeature=void 0;var Hg=zt(),VH=t=>class extends t{get typeHierarchy(){return{onPrepare:e=>this.connection.onRequest(Hg.TypeHierarchyPrepareRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r),void 0)),onSupertypes:e=>{let r=Hg.TypeHierarchySupertypesRequest.type;return this.connection.onRequest(r,(n,i)=>e(n,i,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))},onSubtypes:e=>{let r=Hg.TypeHierarchySubtypesRequest.type;return this.connection.onRequest(r,(n,i)=>e(n,i,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))}}}};Sd.TypeHierarchyFeature=VH});var XA=h(Ed=>{"use strict";Object.defineProperty(Ed,"__esModule",{value:!0});Ed.InlineValueFeature=void 0;var YA=zt(),YH=t=>class extends t{get inlineValue(){return{refresh:()=>this.connection.sendRequest(YA.InlineValueRefreshRequest.type),on:e=>this.connection.onRequest(YA.InlineValueRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r)))}}};Ed.InlineValueFeature=YH});var JA=h(kd=>{"use strict";Object.defineProperty(kd,"__esModule",{value:!0});kd.InlayHintFeature=void 0;var Wg=zt(),XH=t=>class extends t{get inlayHint(){return{refresh:()=>this.connection.sendRequest(Wg.InlayHintRefreshRequest.type),on:e=>this.connection.onRequest(Wg.InlayHintRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r))),resolve:e=>this.connection.onRequest(Wg.InlayHintResolveRequest.type,(r,n)=>e(r,n))}}};kd.InlayHintFeature=XH});var QA=h(Nd=>{"use strict";Object.defineProperty(Nd,"__esModule",{value:!0});Nd.DiagnosticFeature=void 0;var yc=zt(),JH=t=>class extends t{get diagnostics(){return{refresh:()=>this.connection.sendRequest(yc.DiagnosticRefreshRequest.type),on:e=>this.connection.onRequest(yc.DocumentDiagnosticRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r),this.attachPartialResultProgress(yc.DocumentDiagnosticRequest.partialResult,r))),onWorkspace:e=>this.connection.onRequest(yc.WorkspaceDiagnosticRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r),this.attachPartialResultProgress(yc.WorkspaceDiagnosticRequest.partialResult,r)))}}};Nd.DiagnosticFeature=JH});var ZA=h(wd=>{"use strict";Object.defineProperty(wd,"__esModule",{value:!0});wd.MonikerFeature=void 0;var QH=zt(),ZH=t=>class extends t{get moniker(){return{on:e=>{let r=QH.MonikerRequest.type;return this.connection.onRequest(r,(n,i)=>e(n,i,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))}}}};wd.MonikerFeature=ZH});var fP=h(qe=>{"use strict";Object.defineProperty(qe,"__esModule",{value:!0});qe.createConnection=qe.combineFeatures=qe.combineNotebooksFeatures=qe.combineLanguagesFeatures=qe.combineWorkspaceFeatures=qe.combineWindowFeatures=qe.combineClientFeatures=qe.combineTracerFeatures=qe.combineTelemetryFeatures=qe.combineConsoleFeatures=qe._NotebooksImpl=qe._LanguagesImpl=qe.BulkUnregistration=qe.BulkRegistration=qe.ErrorMessageTracker=void 0;var X=zt(),Tn=$g(),Bg=Fg(),be=UA(),eW=GA(),tW=HA(),rW=WA(),nW=Ig(),iW=KA(),oW=BA(),aW=zA(),sW=VA(),uW=XA(),cW=JA(),lW=QA(),dW=Mg(),fW=ZA();function Kg(t){if(t!==null)return t}var zg=class{constructor(){this._messages=Object.create(null)}add(e){let r=this._messages[e];r||(r=0),r++,this._messages[e]=r}sendErrors(e){Object.keys(this._messages).forEach(r=>{e.window.showErrorMessage(r)})}};qe.ErrorMessageTracker=zg;var Dd=class{constructor(){}rawAttach(e){this._rawConnection=e}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}fillServerCapabilities(e){}initialize(e){}error(e){this.send(X.MessageType.Error,e)}warn(e){this.send(X.MessageType.Warning,e)}info(e){this.send(X.MessageType.Info,e)}log(e){this.send(X.MessageType.Log,e)}send(e,r){this._rawConnection&&this._rawConnection.sendNotification(X.LogMessageNotification.type,{type:e,message:r}).catch(()=>{(0,X.RAL)().console.error("Sending log message failed")})}},Vg=class{constructor(){}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}showErrorMessage(e,...r){let n={type:X.MessageType.Error,message:e,actions:r};return this.connection.sendRequest(X.ShowMessageRequest.type,n).then(Kg)}showWarningMessage(e,...r){let n={type:X.MessageType.Warning,message:e,actions:r};return this.connection.sendRequest(X.ShowMessageRequest.type,n).then(Kg)}showInformationMessage(e,...r){let n={type:X.MessageType.Info,message:e,actions:r};return this.connection.sendRequest(X.ShowMessageRequest.type,n).then(Kg)}},eP=(0,iW.ShowDocumentFeature)((0,be.ProgressFeature)(Vg)),pW;(function(t){function e(){return new Od}t.create=e})(pW=qe.BulkRegistration||(qe.BulkRegistration={}));var Od=class{constructor(){this._registrations=[],this._registered=new Set}add(e,r){let n=Tn.string(e)?e:e.method;if(this._registered.has(n))throw new Error(`${n} is already added to this registration`);let i=Bg.generateUuid();this._registrations.push({id:i,method:n,registerOptions:r||{}}),this._registered.add(n)}asRegistrationParams(){return{registrations:this._registrations}}},hW;(function(t){function e(){return new vc(void 0,[])}t.create=e})(hW=qe.BulkUnregistration||(qe.BulkUnregistration={}));var vc=class{constructor(e,r){this._connection=e,this._unregistrations=new Map,r.forEach(n=>{this._unregistrations.set(n.method,n)})}get isAttached(){return!!this._connection}attach(e){this._connection=e}add(e){this._unregistrations.set(e.method,e)}dispose(){let e=[];for(let n of this._unregistrations.values())e.push(n);let r={unregisterations:e};this._connection.sendRequest(X.UnregistrationRequest.type,r).catch(()=>{this._connection.console.info("Bulk unregistration failed.")})}disposeSingle(e){let r=Tn.string(e)?e:e.method,n=this._unregistrations.get(r);if(!n)return!1;let i={unregisterations:[n]};return this._connection.sendRequest(X.UnregistrationRequest.type,i).then(()=>{this._unregistrations.delete(r)},o=>{this._connection.console.info(`Un-registering request handler for ${n.id} failed.`)}),!0}},Id=class{attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}register(e,r,n){return e instanceof Od?this.registerMany(e):e instanceof vc?this.registerSingle1(e,r,n):this.registerSingle2(e,r)}registerSingle1(e,r,n){let i=Tn.string(r)?r:r.method,o=Bg.generateUuid(),a={registrations:[{id:o,method:i,registerOptions:n||{}}]};return e.isAttached||e.attach(this.connection),this.connection.sendRequest(X.RegistrationRequest.type,a).then(s=>(e.add({id:o,method:i}),e),s=>(this.connection.console.info(`Registering request handler for ${i} failed.`),Promise.reject(s)))}registerSingle2(e,r){let n=Tn.string(e)?e:e.method,i=Bg.generateUuid(),o={registrations:[{id:i,method:n,registerOptions:r||{}}]};return this.connection.sendRequest(X.RegistrationRequest.type,o).then(a=>X.Disposable.create(()=>{this.unregisterSingle(i,n).catch(()=>{this.connection.console.info(`Un-registering capability with id ${i} failed.`)})}),a=>(this.connection.console.info(`Registering request handler for ${n} failed.`),Promise.reject(a)))}unregisterSingle(e,r){let n={unregisterations:[{id:e,method:r}]};return this.connection.sendRequest(X.UnregistrationRequest.type,n).catch(()=>{this.connection.console.info(`Un-registering request handler for ${e} failed.`)})}registerMany(e){let r=e.asRegistrationParams();return this.connection.sendRequest(X.RegistrationRequest.type,r).then(()=>new vc(this._connection,r.registrations.map(n=>({id:n.id,method:n.method}))),n=>(this.connection.console.info("Bulk registration failed."),Promise.reject(n)))}},Yg=class{constructor(){}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}applyEdit(e){function r(i){return i&&!!i.edit}let n=r(e)?e:{edit:e};return this.connection.sendRequest(X.ApplyWorkspaceEditRequest.type,n)}},tP=(0,oW.FileOperationsFeature)((0,tW.WorkspaceFoldersFeature)((0,eW.ConfigurationFeature)(Yg))),qd=class{constructor(){this._trace=X.Trace.Off}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}set trace(e){this._trace=e}log(e,r){this._trace!==X.Trace.Off&&this.connection.sendNotification(X.LogTraceNotification.type,{message:e,verbose:this._trace===X.Trace.Verbose?r:void 0}).catch(()=>{})}},xd=class{constructor(){}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}logEvent(e){this.connection.sendNotification(X.TelemetryEventNotification.type,e).catch(()=>{this.connection.console.log("Sending TelemetryEventNotification failed")})}},Ld=class{constructor(){}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}attachWorkDoneProgress(e){return(0,be.attachWorkDone)(this.connection,e)}attachPartialResultProgress(e,r){return(0,be.attachPartialResult)(this.connection,r)}};qe._LanguagesImpl=Ld;var rP=(0,fW.MonikerFeature)((0,lW.DiagnosticFeature)((0,cW.InlayHintFeature)((0,uW.InlineValueFeature)((0,sW.TypeHierarchyFeature)((0,aW.LinkedEditingRangeFeature)((0,nW.SemanticTokensFeature)((0,rW.CallHierarchyFeature)(Ld)))))))),Md=class{constructor(){}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}attachWorkDoneProgress(e){return(0,be.attachWorkDone)(this.connection,e)}attachPartialResultProgress(e,r){return(0,be.attachPartialResult)(this.connection,r)}};qe._NotebooksImpl=Md;var nP=(0,dW.NotebookSyncFeature)(Md);function iP(t,e){return function(r){return e(t(r))}}qe.combineConsoleFeatures=iP;function oP(t,e){return function(r){return e(t(r))}}qe.combineTelemetryFeatures=oP;function aP(t,e){return function(r){return e(t(r))}}qe.combineTracerFeatures=aP;function sP(t,e){return function(r){return e(t(r))}}qe.combineClientFeatures=sP;function uP(t,e){return function(r){return e(t(r))}}qe.combineWindowFeatures=uP;function cP(t,e){return function(r){return e(t(r))}}qe.combineWorkspaceFeatures=cP;function lP(t,e){return function(r){return e(t(r))}}qe.combineLanguagesFeatures=lP;function dP(t,e){return function(r){return e(t(r))}}qe.combineNotebooksFeatures=dP;function mW(t,e){function r(i,o,a){return i&&o?a(i,o):i||o}return{__brand:"features",console:r(t.console,e.console,iP),tracer:r(t.tracer,e.tracer,aP),telemetry:r(t.telemetry,e.telemetry,oP),client:r(t.client,e.client,sP),window:r(t.window,e.window,uP),workspace:r(t.workspace,e.workspace,cP),languages:r(t.languages,e.languages,lP),notebooks:r(t.notebooks,e.notebooks,dP)}}qe.combineFeatures=mW;function gW(t,e,r){let n=r&&r.console?new(r.console(Dd)):new Dd,i=t(n);n.rawAttach(i);let o=r&&r.tracer?new(r.tracer(qd)):new qd,a=r&&r.telemetry?new(r.telemetry(xd)):new xd,s=r&&r.client?new(r.client(Id)):new Id,u=r&&r.window?new(r.window(eP)):new eP,d=r&&r.workspace?new(r.workspace(tP)):new tP,p=r&&r.languages?new(r.languages(rP)):new rP,m=r&&r.notebooks?new(r.notebooks(nP)):new nP,v=[n,o,a,s,u,d,p,m];function P(E){return E instanceof Promise?E:Tn.thenable(E)?new Promise((S,L)=>{E.then(U=>S(U),U=>L(U))}):Promise.resolve(E)}let _,N,I,O={listen:()=>i.listen(),sendRequest:(E,...S)=>i.sendRequest(Tn.string(E)?E:E.method,...S),onRequest:(E,S)=>i.onRequest(E,S),sendNotification:(E,S)=>{let L=Tn.string(E)?E:E.method;return arguments.length===1?i.sendNotification(L):i.sendNotification(L,S)},onNotification:(E,S)=>i.onNotification(E,S),onProgress:i.onProgress,sendProgress:i.sendProgress,onInitialize:E=>(N=E,{dispose:()=>{N=void 0}}),onInitialized:E=>i.onNotification(X.InitializedNotification.type,E),onShutdown:E=>(_=E,{dispose:()=>{_=void 0}}),onExit:E=>(I=E,{dispose:()=>{I=void 0}}),get console(){return n},get telemetry(){return a},get tracer(){return o},get client(){return s},get window(){return u},get workspace(){return d},get languages(){return p},get notebooks(){return m},onDidChangeConfiguration:E=>i.onNotification(X.DidChangeConfigurationNotification.type,E),onDidChangeWatchedFiles:E=>i.onNotification(X.DidChangeWatchedFilesNotification.type,E),__textDocumentSync:void 0,onDidOpenTextDocument:E=>i.onNotification(X.DidOpenTextDocumentNotification.type,E),onDidChangeTextDocument:E=>i.onNotification(X.DidChangeTextDocumentNotification.type,E),onDidCloseTextDocument:E=>i.onNotification(X.DidCloseTextDocumentNotification.type,E),onWillSaveTextDocument:E=>i.onNotification(X.WillSaveTextDocumentNotification.type,E),onWillSaveTextDocumentWaitUntil:E=>i.onRequest(X.WillSaveTextDocumentWaitUntilRequest.type,E),onDidSaveTextDocument:E=>i.onNotification(X.DidSaveTextDocumentNotification.type,E),sendDiagnostics:E=>i.sendNotification(X.PublishDiagnosticsNotification.type,E),onHover:E=>i.onRequest(X.HoverRequest.type,(S,L)=>E(S,L,(0,be.attachWorkDone)(i,S),void 0)),onCompletion:E=>i.onRequest(X.CompletionRequest.type,(S,L)=>E(S,L,(0,be.attachWorkDone)(i,S),(0,be.attachPartialResult)(i,S))),onCompletionResolve:E=>i.onRequest(X.CompletionResolveRequest.type,E),onSignatureHelp:E=>i.onRequest(X.SignatureHelpRequest.type,(S,L)=>E(S,L,(0,be.attachWorkDone)(i,S),void 0)),onDeclaration:E=>i.onRequest(X.DeclarationRequest.type,(S,L)=>E(S,L,(0,be.attachWorkDone)(i,S),(0,be.attachPartialResult)(i,S))),onDefinition:E=>i.onRequest(X.DefinitionRequest.type,(S,L)=>E(S,L,(0,be.attachWorkDone)(i,S),(0,be.attachPartialResult)(i,S))),onTypeDefinition:E=>i.onRequest(X.TypeDefinitionRequest.type,(S,L)=>E(S,L,(0,be.attachWorkDone)(i,S),(0,be.attachPartialResult)(i,S))),onImplementation:E=>i.onRequest(X.ImplementationRequest.type,(S,L)=>E(S,L,(0,be.attachWorkDone)(i,S),(0,be.attachPartialResult)(i,S))),onReferences:E=>i.onRequest(X.ReferencesRequest.type,(S,L)=>E(S,L,(0,be.attachWorkDone)(i,S),(0,be.attachPartialResult)(i,S))),onDocumentHighlight:E=>i.onRequest(X.DocumentHighlightRequest.type,(S,L)=>E(S,L,(0,be.attachWorkDone)(i,S),(0,be.attachPartialResult)(i,S))),onDocumentSymbol:E=>i.onRequest(X.DocumentSymbolRequest.type,(S,L)=>E(S,L,(0,be.attachWorkDone)(i,S),(0,be.attachPartialResult)(i,S))),onWorkspaceSymbol:E=>i.onRequest(X.WorkspaceSymbolRequest.type,(S,L)=>E(S,L,(0,be.attachWorkDone)(i,S),(0,be.attachPartialResult)(i,S))),onWorkspaceSymbolResolve:E=>i.onRequest(X.WorkspaceSymbolResolveRequest.type,E),onCodeAction:E=>i.onRequest(X.CodeActionRequest.type,(S,L)=>E(S,L,(0,be.attachWorkDone)(i,S),(0,be.attachPartialResult)(i,S))),onCodeActionResolve:E=>i.onRequest(X.CodeActionResolveRequest.type,(S,L)=>E(S,L)),onCodeLens:E=>i.onRequest(X.CodeLensRequest.type,(S,L)=>E(S,L,(0,be.attachWorkDone)(i,S),(0,be.attachPartialResult)(i,S))),onCodeLensResolve:E=>i.onRequest(X.CodeLensResolveRequest.type,(S,L)=>E(S,L)),onDocumentFormatting:E=>i.onRequest(X.DocumentFormattingRequest.type,(S,L)=>E(S,L,(0,be.attachWorkDone)(i,S),void 0)),onDocumentRangeFormatting:E=>i.onRequest(X.DocumentRangeFormattingRequest.type,(S,L)=>E(S,L,(0,be.attachWorkDone)(i,S),void 0)),onDocumentOnTypeFormatting:E=>i.onRequest(X.DocumentOnTypeFormattingRequest.type,(S,L)=>E(S,L)),onRenameRequest:E=>i.onRequest(X.RenameRequest.type,(S,L)=>E(S,L,(0,be.attachWorkDone)(i,S),void 0)),onPrepareRename:E=>i.onRequest(X.PrepareRenameRequest.type,(S,L)=>E(S,L)),onDocumentLinks:E=>i.onRequest(X.DocumentLinkRequest.type,(S,L)=>E(S,L,(0,be.attachWorkDone)(i,S),(0,be.attachPartialResult)(i,S))),onDocumentLinkResolve:E=>i.onRequest(X.DocumentLinkResolveRequest.type,(S,L)=>E(S,L)),onDocumentColor:E=>i.onRequest(X.DocumentColorRequest.type,(S,L)=>E(S,L,(0,be.attachWorkDone)(i,S),(0,be.attachPartialResult)(i,S))),onColorPresentation:E=>i.onRequest(X.ColorPresentationRequest.type,(S,L)=>E(S,L,(0,be.attachWorkDone)(i,S),(0,be.attachPartialResult)(i,S))),onFoldingRanges:E=>i.onRequest(X.FoldingRangeRequest.type,(S,L)=>E(S,L,(0,be.attachWorkDone)(i,S),(0,be.attachPartialResult)(i,S))),onSelectionRanges:E=>i.onRequest(X.SelectionRangeRequest.type,(S,L)=>E(S,L,(0,be.attachWorkDone)(i,S),(0,be.attachPartialResult)(i,S))),onExecuteCommand:E=>i.onRequest(X.ExecuteCommandRequest.type,(S,L)=>E(S,L,(0,be.attachWorkDone)(i,S),void 0)),dispose:()=>i.dispose()};for(let E of v)E.attach(O);return i.onRequest(X.InitializeRequest.type,E=>{e.initialize(E),Tn.string(E.trace)&&(o.trace=X.Trace.fromString(E.trace));for(let S of v)S.initialize(E.capabilities);if(N){let S=N(E,new X.CancellationTokenSource().token,(0,be.attachWorkDone)(i,E),void 0);return P(S).then(L=>{if(L instanceof X.ResponseError)return L;let U=L;U||(U={capabilities:{}});let V=U.capabilities;V||(V={},U.capabilities=V),V.textDocumentSync===void 0||V.textDocumentSync===null?V.textDocumentSync=Tn.number(O.__textDocumentSync)?O.__textDocumentSync:X.TextDocumentSyncKind.None:!Tn.number(V.textDocumentSync)&&!Tn.number(V.textDocumentSync.change)&&(V.textDocumentSync.change=Tn.number(O.__textDocumentSync)?O.__textDocumentSync:X.TextDocumentSyncKind.None);for(let te of v)te.fillServerCapabilities(V);return U})}else{let S={capabilities:{textDocumentSync:X.TextDocumentSyncKind.None}};for(let L of v)L.fillServerCapabilities(S.capabilities);return S}}),i.onRequest(X.ShutdownRequest.type,()=>{if(e.shutdownReceived=!0,_)return _(new X.CancellationTokenSource().token)}),i.onNotification(X.ExitNotification.type,()=>{try{I&&I()}finally{e.shutdownReceived?e.exit(0):e.exit(1)}}),i.onNotification(X.SetTraceNotification.type,E=>{o.trace=X.Trace.fromString(E.value)}),O}qe.createConnection=gW});var Xg=h(hr=>{"use strict";var yW=hr&&hr.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var i=Object.getOwnPropertyDescriptor(e,r);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,i)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),pP=hr&&hr.__exportStar||function(t,e){for(var r in t)r!=="default"&&!Object.prototype.hasOwnProperty.call(e,r)&&yW(e,t,r)};Object.defineProperty(hr,"__esModule",{value:!0});hr.ProposedFeatures=hr.NotebookDocuments=hr.TextDocuments=hr.SemanticTokensBuilder=void 0;var vW=Ig();Object.defineProperty(hr,"SemanticTokensBuilder",{enumerable:!0,get:function(){return vW.SemanticTokensBuilder}});pP(zt(),hr);var _W=xg();Object.defineProperty(hr,"TextDocuments",{enumerable:!0,get:function(){return _W.TextDocuments}});var TW=Mg();Object.defineProperty(hr,"NotebookDocuments",{enumerable:!0,get:function(){return TW.NotebookDocuments}});pP(fP(),hr);var RW;(function(t){t.all={__brand:"features"}})(RW=hr.ProposedFeatures||(hr.ProposedFeatures={}))});var mP=h((Xge,hP)=>{"use strict";hP.exports=zt()});var et=h(Ti=>{"use strict";var bW=Ti&&Ti.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var i=Object.getOwnPropertyDescriptor(e,r);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,i)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),yP=Ti&&Ti.__exportStar||function(t,e){for(var r in t)r!=="default"&&!Object.prototype.hasOwnProperty.call(e,r)&&bW(e,t,r)};Object.defineProperty(Ti,"__esModule",{value:!0});Ti.createConnection=void 0;var $d=Xg();yP(mP(),Ti);yP(Xg(),Ti);var gP=!1,CW={initialize:t=>{},get shutdownReceived(){return gP},set shutdownReceived(t){gP=t},exit:t=>{}};function AW(t,e,r,n){let i,o,a,s;t!==void 0&&t.__brand==="features"&&(i=t,t=e,e=r,r=n),$d.ConnectionStrategy.is(t)||$d.ConnectionOptions.is(t)?s=t:(o=t,a=e,s=r);let u=d=>(0,$d.createProtocolConnection)(o,a,d,s);return(0,$d.createConnection)(u,CW,i)}Ti.createConnection=AW});var Zg={};pj(Zg,{TextDocument:()=>Jg});function Qg(t,e){if(t.length<=1)return t;let r=t.length/2|0,n=t.slice(0,r),i=t.slice(r);Qg(n,e),Qg(i,e);let o=0,a=0,s=0;for(;o<n.length&&a<i.length;)e(n[o],i[a])<=0?t[s++]=n[o++]:t[s++]=i[a++];for(;o<n.length;)t[s++]=n[o++];for(;a<i.length;)t[s++]=i[a++];return t}function vP(t,e,r=0){let n=e?[r]:[];for(let i=0;i<t.length;i++){let o=t.charCodeAt(i);(o===13||o===10)&&(o===13&&i+1<t.length&&t.charCodeAt(i+1)===10&&i++,n.push(r+i+1))}return n}function _P(t){let e=t.start,r=t.end;return e.line>r.line||e.line===r.line&&e.character>r.character?{start:r,end:e}:t}function PW(t){let e=_P(t.range);return e!==t.range?{newText:t.newText,range:e}:t}var Fd,Jg,ey=fj(()=>{"use strict";Fd=class t{constructor(e,r,n,i){this._uri=e,this._languageId=r,this._version=n,this._content=i,this._lineOffsets=void 0}get uri(){return this._uri}get languageId(){return this._languageId}get version(){return this._version}getText(e){if(e){let r=this.offsetAt(e.start),n=this.offsetAt(e.end);return this._content.substring(r,n)}return this._content}update(e,r){for(let n of e)if(t.isIncremental(n)){let i=_P(n.range),o=this.offsetAt(i.start),a=this.offsetAt(i.end);this._content=this._content.substring(0,o)+n.text+this._content.substring(a,this._content.length);let s=Math.max(i.start.line,0),u=Math.max(i.end.line,0),d=this._lineOffsets,p=vP(n.text,!1,o);if(u-s===p.length)for(let v=0,P=p.length;v<P;v++)d[v+s+1]=p[v];else p.length<1e4?d.splice(s+1,u-s,...p):this._lineOffsets=d=d.slice(0,s+1).concat(p,d.slice(u+1));let m=n.text.length-(a-o);if(m!==0)for(let v=s+1+p.length,P=d.length;v<P;v++)d[v]=d[v]+m}else if(t.isFull(n))this._content=n.text,this._lineOffsets=void 0;else throw new Error("Unknown change event received");this._version=r}getLineOffsets(){return this._lineOffsets===void 0&&(this._lineOffsets=vP(this._content,!0)),this._lineOffsets}positionAt(e){e=Math.max(Math.min(e,this._content.length),0);let r=this.getLineOffsets(),n=0,i=r.length;if(i===0)return{line:0,character:e};for(;n<i;){let a=Math.floor((n+i)/2);r[a]>e?i=a:n=a+1}let o=n-1;return{line:o,character:e-r[o]}}offsetAt(e){let r=this.getLineOffsets();if(e.line>=r.length)return this._content.length;if(e.line<0)return 0;let n=r[e.line],i=e.line+1<r.length?r[e.line+1]:this._content.length;return Math.max(Math.min(n+e.character,i),n)}get lineCount(){return this.getLineOffsets().length}static isIncremental(e){let r=e;return r!=null&&typeof r.text=="string"&&r.range!==void 0&&(r.rangeLength===void 0||typeof r.rangeLength=="number")}static isFull(e){let r=e;return r!=null&&typeof r.text=="string"&&r.range===void 0&&r.rangeLength===void 0}};(function(t){function e(i,o,a,s){return new Fd(i,o,a,s)}t.create=e;function r(i,o,a){if(i instanceof Fd)return i.update(o,a),i;throw new Error("TextDocument.update: document must be created by TextDocument.create")}t.update=r;function n(i,o){let a=i.getText(),s=Qg(o.map(PW),(p,m)=>{let v=p.range.start.line-m.range.start.line;return v===0?p.range.start.character-m.range.start.character:v}),u=0,d=[];for(let p of s){let m=i.offsetAt(p.range.start);if(m<u)throw new Error("Overlapping edit");m>u&&d.push(a.substring(u,m)),p.newText.length&&d.push(p.newText),u=i.offsetAt(p.range.end)}return d.push(a.substr(u)),d.join("")}t.applyEdits=n})(Jg||(Jg={}))});var Yr=h(Zt=>{"use strict";Object.defineProperty(Zt,"__esModule",{value:!0});Zt.isRootCstNode=Zt.isLeafCstNode=Zt.isCompositeCstNode=Zt.AbstractAstReflection=Zt.isLinkingError=Zt.isAstNodeDescription=Zt.isReference=Zt.isAstNode=void 0;function ry(t){return typeof t=="object"&&t!==null&&typeof t.$type=="string"}Zt.isAstNode=ry;function TP(t){return typeof t=="object"&&t!==null&&typeof t.$refText=="string"}Zt.isReference=TP;function SW(t){return typeof t=="object"&&t!==null&&typeof t.name=="string"&&typeof t.type=="string"&&typeof t.path=="string"}Zt.isAstNodeDescription=SW;function EW(t){return typeof t=="object"&&t!==null&&ry(t.container)&&TP(t.reference)&&typeof t.message=="string"}Zt.isLinkingError=EW;var ty=class{constructor(){this.subtypes={}}isInstance(e,r){return ry(e)&&this.isSubtype(e.$type,r)}isSubtype(e,r){if(e===r)return!0;let n=this.subtypes[e];n||(n=this.subtypes[e]={});let i=n[r];if(i!==void 0)return i;{let o=this.computeIsSubtype(e,r);return n[r]=o,o}}};Zt.AbstractAstReflection=ty;function RP(t){return typeof t=="object"&&t!==null&&"children"in t}Zt.isCompositeCstNode=RP;function kW(t){return typeof t=="object"&&t!==null&&"tokenType"in t}Zt.isLeafCstNode=kW;function NW(t){return RP(t)&&"fullText"in t}Zt.isRootCstNode=NW});var er=h(it=>{"use strict";Object.defineProperty(it,"__esModule",{value:!0});it.Reduction=it.TreeStreamImpl=it.stream=it.DONE_RESULT=it.EMPTY_STREAM=it.StreamImpl=void 0;var Zi=class t{constructor(e,r){this.startFn=e,this.nextFn=r}iterator(){let e={state:this.startFn(),next:()=>this.nextFn(e.state),[Symbol.iterator]:()=>e};return e}[Symbol.iterator](){return this.iterator()}isEmpty(){return!!this.iterator().next().done}count(){let e=this.iterator(),r=0,n=e.next();for(;!n.done;)r++,n=e.next();return r}toArray(){let e=[],r=this.iterator(),n;do n=r.next(),n.value!==void 0&&e.push(n.value);while(!n.done);return e}toSet(){return new Set(this)}toMap(e,r){let n=this.map(i=>[e?e(i):i,r?r(i):i]);return new Map(n)}toString(){return this.join()}concat(e){let r=e[Symbol.iterator]();return new t(()=>({first:this.startFn(),firstDone:!1}),n=>{let i;if(!n.firstDone){do if(i=this.nextFn(n.first),!i.done)return i;while(!i.done);n.firstDone=!0}do if(i=r.next(),!i.done)return i;while(!i.done);return it.DONE_RESULT})}join(e=","){let r=this.iterator(),n="",i,o=!1;do i=r.next(),i.done||(o&&(n+=e),n+=wW(i.value)),o=!0;while(!i.done);return n}indexOf(e,r=0){let n=this.iterator(),i=0,o=n.next();for(;!o.done;){if(i>=r&&o.value===e)return i;o=n.next(),i++}return-1}every(e){let r=this.iterator(),n=r.next();for(;!n.done;){if(!e(n.value))return!1;n=r.next()}return!0}some(e){let r=this.iterator(),n=r.next();for(;!n.done;){if(e(n.value))return!0;n=r.next()}return!1}forEach(e){let r=this.iterator(),n=0,i=r.next();for(;!i.done;)e(i.value,n),i=r.next(),n++}map(e){return new t(this.startFn,r=>{let{done:n,value:i}=this.nextFn(r);return n?it.DONE_RESULT:{done:!1,value:e(i)}})}filter(e){return new t(this.startFn,r=>{let n;do if(n=this.nextFn(r),!n.done&&e(n.value))return n;while(!n.done);return it.DONE_RESULT})}nonNullable(){return this.filter(e=>e!=null)}reduce(e,r){let n=this.iterator(),i=r,o=n.next();for(;!o.done;)i===void 0?i=o.value:i=e(i,o.value),o=n.next();return i}reduceRight(e,r){return this.recursiveReduce(this.iterator(),e,r)}recursiveReduce(e,r,n){let i=e.next();if(i.done)return n;let o=this.recursiveReduce(e,r,n);return o===void 0?i.value:r(o,i.value)}find(e){let r=this.iterator(),n=r.next();for(;!n.done;){if(e(n.value))return n.value;n=r.next()}}findIndex(e){let r=this.iterator(),n=0,i=r.next();for(;!i.done;){if(e(i.value))return n;i=r.next(),n++}return-1}includes(e){let r=this.iterator(),n=r.next();for(;!n.done;){if(n.value===e)return!0;n=r.next()}return!1}flatMap(e){return new t(()=>({this:this.startFn()}),r=>{do{if(r.iterator){let o=r.iterator.next();if(o.done)r.iterator=void 0;else return o}let{done:n,value:i}=this.nextFn(r.this);if(!n){let o=e(i);if(jd(o))r.iterator=o[Symbol.iterator]();else return{done:!1,value:o}}}while(r.iterator);return it.DONE_RESULT})}flat(e){if(e===void 0&&(e=1),e<=0)return this;let r=e>1?this.flat(e-1):this;return new t(()=>({this:r.startFn()}),n=>{do{if(n.iterator){let a=n.iterator.next();if(a.done)n.iterator=void 0;else return a}let{done:i,value:o}=r.nextFn(n.this);if(!i)if(jd(o))n.iterator=o[Symbol.iterator]();else return{done:!1,value:o}}while(n.iterator);return it.DONE_RESULT})}head(){let r=this.iterator().next();if(!r.done)return r.value}tail(e=1){return new t(()=>{let r=this.startFn();for(let n=0;n<e;n++)if(this.nextFn(r).done)return r;return r},this.nextFn)}limit(e){return new t(()=>({size:0,state:this.startFn()}),r=>(r.size++,r.size>e?it.DONE_RESULT:this.nextFn(r.state)))}distinct(e){let r=new Set;return this.filter(n=>{let i=e?e(n):n;return r.has(i)?!1:(r.add(i),!0)})}exclude(e,r){let n=new Set;for(let i of e){let o=r?r(i):i;n.add(o)}return this.filter(i=>{let o=r?r(i):i;return!n.has(o)})}};it.StreamImpl=Zi;function wW(t){return typeof t=="string"?t:typeof t>"u"?"undefined":typeof t.toString=="function"?t.toString():Object.prototype.toString.call(t)}function jd(t){return!!t&&typeof t[Symbol.iterator]=="function"}it.EMPTY_STREAM=new Zi(()=>{},()=>it.DONE_RESULT);it.DONE_RESULT=Object.freeze({done:!0,value:void 0});function DW(...t){if(t.length===1){let e=t[0];if(e instanceof Zi)return e;if(jd(e))return new Zi(()=>e[Symbol.iterator](),r=>r.next());if(typeof e.length=="number")return new Zi(()=>({index:0}),r=>r.index<e.length?{done:!1,value:e[r.index++]}:it.DONE_RESULT)}return t.length>1?new Zi(()=>({collIndex:0,arrIndex:0}),e=>{do{if(e.iterator){let r=e.iterator.next();if(!r.done)return r;e.iterator=void 0}if(e.array){if(e.arrIndex<e.array.length)return{done:!1,value:e.array[e.arrIndex++]};e.array=void 0,e.arrIndex=0}if(e.collIndex<t.length){let r=t[e.collIndex++];jd(r)?e.iterator=r[Symbol.iterator]():r&&typeof r.length=="number"&&(e.array=r)}}while(e.iterator||e.array||e.collIndex<t.length);return it.DONE_RESULT}):it.EMPTY_STREAM}it.stream=DW;var ny=class extends Zi{constructor(e,r,n){super(()=>({iterators:n?.includeRoot?[[e][Symbol.iterator]()]:[r(e)[Symbol.iterator]()],pruned:!1}),i=>{for(i.pruned&&(i.iterators.pop(),i.pruned=!1);i.iterators.length>0;){let a=i.iterators[i.iterators.length-1].next();if(a.done)i.iterators.pop();else return i.iterators.push(r(a.value)[Symbol.iterator]()),a}return it.DONE_RESULT})}iterator(){let e={state:this.startFn(),next:()=>this.nextFn(e.state),prune:()=>{e.state.pruned=!0},[Symbol.iterator]:()=>e};return e}};it.TreeStreamImpl=ny;var OW;(function(t){function e(o){return o.reduce((a,s)=>a+s,0)}t.sum=e;function r(o){return o.reduce((a,s)=>a*s,0)}t.product=r;function n(o){return o.reduce((a,s)=>Math.min(a,s))}t.min=n;function i(o){return o.reduce((a,s)=>Math.max(a,s))}t.max=i})(OW=it.Reduction||(it.Reduction={}))});var ft=h(Ue=>{"use strict";Object.defineProperty(Ue,"__esModule",{value:!0});Ue.getInteriorNodes=Ue.getStartlineNode=Ue.getNextNode=Ue.getPreviousNode=Ue.findLeafNodeAtOffset=Ue.isCommentNode=Ue.findCommentNode=Ue.findDeclarationNodeAtOffset=Ue.DefaultNameRegexp=Ue.toDocumentSegment=Ue.tokenToRange=Ue.isCstChildNode=Ue.flattenCst=Ue.streamCst=void 0;var fs=Yr(),IW=er();function CP(t){return new IW.TreeStreamImpl(t,e=>(0,fs.isCompositeCstNode)(e)?e.children:[],{includeRoot:!0})}Ue.streamCst=CP;function qW(t){return CP(t).filter(fs.isLeafCstNode)}Ue.flattenCst=qW;function xW(t,e){for(;t.parent;)if(t=t.parent,t===e)return!0;return!1}Ue.isCstChildNode=xW;function LW(t){return{start:{character:t.startColumn-1,line:t.startLine-1},end:{character:t.endColumn,line:t.endLine-1}}}Ue.tokenToRange=LW;function MW(t){let{offset:e,end:r,range:n}=t;return{range:n,offset:e,end:r,length:r-e}}Ue.toDocumentSegment=MW;Ue.DefaultNameRegexp=/^[\w\p{L}]$/u;function $W(t,e,r=Ue.DefaultNameRegexp){if(t){if(e>0){let n=e-t.offset,i=t.text.charAt(n);r.test(i)||e--}return oy(t,e)}}Ue.findDeclarationNodeAtOffset=$W;function FW(t,e){if(t){let r=AP(t,!0);if(r&&iy(r,e))return r;if((0,fs.isRootCstNode)(t)){let n=t.children.findIndex(i=>!i.hidden);for(let i=n-1;i>=0;i--){let o=t.children[i];if(iy(o,e))return o}}}}Ue.findCommentNode=FW;function iy(t,e){return(0,fs.isLeafCstNode)(t)&&e.includes(t.tokenType.name)}Ue.isCommentNode=iy;function oy(t,e){if((0,fs.isLeafCstNode)(t))return t;if((0,fs.isCompositeCstNode)(t)){let r=0,n=t.children.length-1;for(;r<=n;){let i=Math.floor((r+n)/2),o=t.children[i];if(o.offset>e)n=i-1;else if(o.end<=e)r=i+1;else return oy(o,e)}}}Ue.findLeafNodeAtOffset=oy;function AP(t,e=!0){for(;t.parent;){let r=t.parent,n=r.children.indexOf(t);if(n===0)t=r;else{n--;let i=r.children[n];if(e||!i.hidden)return i}}}Ue.getPreviousNode=AP;function jW(t,e=!0){for(;t.parent;){let r=t.parent,n=r.children.indexOf(t);if(r.children.length-1===n)t=r;else{n++;let i=r.children[n];if(e||!i.hidden)return i}}}Ue.getNextNode=jW;function UW(t){if(t.range.start.character===0)return t;let e=t.range.start.line,r=t,n;for(;t.parent;){let i=t.parent,o=n??i.children.indexOf(t);if(o===0?(t=i,n=void 0):(n=o-1,t=i.children[n]),t.range.start.line!==e)break;r=t}return r}Ue.getStartlineNode=UW;function GW(t,e){let r=HW(t,e);return r?r.parent.children.slice(r.a+1,r.b):[]}Ue.getInteriorNodes=GW;function HW(t,e){let r=bP(t),n=bP(e),i;for(let o=0;o<r.length&&o<n.length;o++){let a=r[o],s=n[o];if(a.parent===s.parent)i={parent:a.parent,a:a.index,b:s.index};else break}return i}function bP(t){let e=[];for(;t.parent;){let r=t.parent,n=r.children.indexOf(t);e.push({parent:r,index:n}),t=r}return e.reverse()}});var eo=h((_c,ay)=>{(function(t,e){if(typeof _c=="object"&&typeof ay=="object")ay.exports=e();else if(typeof define=="function"&&define.amd)define([],e);else{var r=e();for(var n in r)(typeof _c=="object"?_c:t)[n]=r[n]}})(_c,()=>(()=>{"use strict";var t={470:i=>{function o(u){if(typeof u!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(u))}function a(u,d){for(var p,m="",v=0,P=-1,_=0,N=0;N<=u.length;++N){if(N<u.length)p=u.charCodeAt(N);else{if(p===47)break;p=47}if(p===47){if(!(P===N-1||_===1))if(P!==N-1&&_===2){if(m.length<2||v!==2||m.charCodeAt(m.length-1)!==46||m.charCodeAt(m.length-2)!==46){if(m.length>2){var I=m.lastIndexOf("/");if(I!==m.length-1){I===-1?(m="",v=0):v=(m=m.slice(0,I)).length-1-m.lastIndexOf("/"),P=N,_=0;continue}}else if(m.length===2||m.length===1){m="",v=0,P=N,_=0;continue}}d&&(m.length>0?m+="/..":m="..",v=2)}else m.length>0?m+="/"+u.slice(P+1,N):m=u.slice(P+1,N),v=N-P-1;P=N,_=0}else p===46&&_!==-1?++_:_=-1}return m}var s={resolve:function(){for(var u,d="",p=!1,m=arguments.length-1;m>=-1&&!p;m--){var v;m>=0?v=arguments[m]:(u===void 0&&(u=process.cwd()),v=u),o(v),v.length!==0&&(d=v+"/"+d,p=v.charCodeAt(0)===47)}return d=a(d,!p),p?d.length>0?"/"+d:"/":d.length>0?d:"."},normalize:function(u){if(o(u),u.length===0)return".";var d=u.charCodeAt(0)===47,p=u.charCodeAt(u.length-1)===47;return(u=a(u,!d)).length!==0||d||(u="."),u.length>0&&p&&(u+="/"),d?"/"+u:u},isAbsolute:function(u){return o(u),u.length>0&&u.charCodeAt(0)===47},join:function(){if(arguments.length===0)return".";for(var u,d=0;d<arguments.length;++d){var p=arguments[d];o(p),p.length>0&&(u===void 0?u=p:u+="/"+p)}return u===void 0?".":s.normalize(u)},relative:function(u,d){if(o(u),o(d),u===d||(u=s.resolve(u))===(d=s.resolve(d)))return"";for(var p=1;p<u.length&&u.charCodeAt(p)===47;++p);for(var m=u.length,v=m-p,P=1;P<d.length&&d.charCodeAt(P)===47;++P);for(var _=d.length-P,N=v<_?v:_,I=-1,O=0;O<=N;++O){if(O===N){if(_>N){if(d.charCodeAt(P+O)===47)return d.slice(P+O+1);if(O===0)return d.slice(P+O)}else v>N&&(u.charCodeAt(p+O)===47?I=O:O===0&&(I=0));break}var E=u.charCodeAt(p+O);if(E!==d.charCodeAt(P+O))break;E===47&&(I=O)}var S="";for(O=p+I+1;O<=m;++O)O!==m&&u.charCodeAt(O)!==47||(S.length===0?S+="..":S+="/..");return S.length>0?S+d.slice(P+I):(P+=I,d.charCodeAt(P)===47&&++P,d.slice(P))},_makeLong:function(u){return u},dirname:function(u){if(o(u),u.length===0)return".";for(var d=u.charCodeAt(0),p=d===47,m=-1,v=!0,P=u.length-1;P>=1;--P)if((d=u.charCodeAt(P))===47){if(!v){m=P;break}}else v=!1;return m===-1?p?"/":".":p&&m===1?"//":u.slice(0,m)},basename:function(u,d){if(d!==void 0&&typeof d!="string")throw new TypeError('"ext" argument must be a string');o(u);var p,m=0,v=-1,P=!0;if(d!==void 0&&d.length>0&&d.length<=u.length){if(d.length===u.length&&d===u)return"";var _=d.length-1,N=-1;for(p=u.length-1;p>=0;--p){var I=u.charCodeAt(p);if(I===47){if(!P){m=p+1;break}}else N===-1&&(P=!1,N=p+1),_>=0&&(I===d.charCodeAt(_)?--_==-1&&(v=p):(_=-1,v=N))}return m===v?v=N:v===-1&&(v=u.length),u.slice(m,v)}for(p=u.length-1;p>=0;--p)if(u.charCodeAt(p)===47){if(!P){m=p+1;break}}else v===-1&&(P=!1,v=p+1);return v===-1?"":u.slice(m,v)},extname:function(u){o(u);for(var d=-1,p=0,m=-1,v=!0,P=0,_=u.length-1;_>=0;--_){var N=u.charCodeAt(_);if(N!==47)m===-1&&(v=!1,m=_+1),N===46?d===-1?d=_:P!==1&&(P=1):d!==-1&&(P=-1);else if(!v){p=_+1;break}}return d===-1||m===-1||P===0||P===1&&d===m-1&&d===p+1?"":u.slice(d,m)},format:function(u){if(u===null||typeof u!="object")throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof u);return function(d,p){var m=p.dir||p.root,v=p.base||(p.name||"")+(p.ext||"");return m?m===p.root?m+v:m+"/"+v:v}(0,u)},parse:function(u){o(u);var d={root:"",dir:"",base:"",ext:"",name:""};if(u.length===0)return d;var p,m=u.charCodeAt(0),v=m===47;v?(d.root="/",p=1):p=0;for(var P=-1,_=0,N=-1,I=!0,O=u.length-1,E=0;O>=p;--O)if((m=u.charCodeAt(O))!==47)N===-1&&(I=!1,N=O+1),m===46?P===-1?P=O:E!==1&&(E=1):P!==-1&&(E=-1);else if(!I){_=O+1;break}return P===-1||N===-1||E===0||E===1&&P===N-1&&P===_+1?N!==-1&&(d.base=d.name=_===0&&v?u.slice(1,N):u.slice(_,N)):(_===0&&v?(d.name=u.slice(1,P),d.base=u.slice(1,N)):(d.name=u.slice(_,P),d.base=u.slice(_,N)),d.ext=u.slice(P,N)),_>0?d.dir=u.slice(0,_-1):v&&(d.dir="/"),d},sep:"/",delimiter:":",win32:null,posix:null};s.posix=s,i.exports=s},674:(i,o)=>{if(Object.defineProperty(o,"__esModule",{value:!0}),o.isWindows=void 0,typeof process=="object")o.isWindows=process.platform==="win32";else if(typeof navigator=="object"){let a=navigator.userAgent;o.isWindows=a.indexOf("Windows")>=0}},796:(i,o,a)=>{Object.defineProperty(o,"__esModule",{value:!0}),o.uriToFsPath=o.URI=void 0;let s=a(674),u=/^\w[\w\d+.-]*$/,d=/^\//,p=/^\/\//;function m(G,j){if(!G.scheme&&j)throw new Error(`[UriError]: Scheme is missing: {scheme: "", authority: "${G.authority}", path: "${G.path}", query: "${G.query}", fragment: "${G.fragment}"}`);if(G.scheme&&!u.test(G.scheme))throw new Error("[UriError]: Scheme contains illegal characters.");if(G.path){if(G.authority){if(!d.test(G.path))throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character')}else if(p.test(G.path))throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")')}}let v="",P="/",_=/^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;class N{static isUri(j){return j instanceof N||!!j&&typeof j.authority=="string"&&typeof j.fragment=="string"&&typeof j.path=="string"&&typeof j.query=="string"&&typeof j.scheme=="string"&&typeof j.fsPath=="string"&&typeof j.with=="function"&&typeof j.toString=="function"}scheme;authority;path;query;fragment;constructor(j,Y,J,Ce,_e,me=!1){typeof j=="object"?(this.scheme=j.scheme||v,this.authority=j.authority||v,this.path=j.path||v,this.query=j.query||v,this.fragment=j.fragment||v):(this.scheme=function(Je,Ve){return Je||Ve?Je:"file"}(j,me),this.authority=Y||v,this.path=function(Je,Ve){switch(Je){case"https":case"http":case"file":Ve?Ve[0]!==P&&(Ve=P+Ve):Ve=P}return Ve}(this.scheme,J||v),this.query=Ce||v,this.fragment=_e||v,m(this,me))}get fsPath(){return U(this,!1)}with(j){if(!j)return this;let{scheme:Y,authority:J,path:Ce,query:_e,fragment:me}=j;return Y===void 0?Y=this.scheme:Y===null&&(Y=v),J===void 0?J=this.authority:J===null&&(J=v),Ce===void 0?Ce=this.path:Ce===null&&(Ce=v),_e===void 0?_e=this.query:_e===null&&(_e=v),me===void 0?me=this.fragment:me===null&&(me=v),Y===this.scheme&&J===this.authority&&Ce===this.path&&_e===this.query&&me===this.fragment?this:new O(Y,J,Ce,_e,me)}static parse(j,Y=!1){let J=_.exec(j);return J?new O(J[2]||v,Z(J[4]||v),Z(J[5]||v),Z(J[7]||v),Z(J[9]||v),Y):new O(v,v,v,v,v)}static file(j){let Y=v;if(s.isWindows&&(j=j.replace(/\\/g,P)),j[0]===P&&j[1]===P){let J=j.indexOf(P,2);J===-1?(Y=j.substring(2),j=P):(Y=j.substring(2,J),j=j.substring(J)||P)}return new O("file",Y,j,v,v)}static from(j){let Y=new O(j.scheme,j.authority,j.path,j.query,j.fragment);return m(Y,!0),Y}toString(j=!1){return V(this,j)}toJSON(){return this}static revive(j){if(j){if(j instanceof N)return j;{let Y=new O(j);return Y._formatted=j.external,Y._fsPath=j._sep===I?j.fsPath:null,Y}}return j}}o.URI=N;let I=s.isWindows?1:void 0;class O extends N{_formatted=null;_fsPath=null;get fsPath(){return this._fsPath||(this._fsPath=U(this,!1)),this._fsPath}toString(j=!1){return j?V(this,!0):(this._formatted||(this._formatted=V(this,!1)),this._formatted)}toJSON(){let j={$mid:1};return this._fsPath&&(j.fsPath=this._fsPath,j._sep=I),this._formatted&&(j.external=this._formatted),this.path&&(j.path=this.path),this.scheme&&(j.scheme=this.scheme),this.authority&&(j.authority=this.authority),this.query&&(j.query=this.query),this.fragment&&(j.fragment=this.fragment),j}}let E={58:"%3A",47:"%2F",63:"%3F",35:"%23",91:"%5B",93:"%5D",64:"%40",33:"%21",36:"%24",38:"%26",39:"%27",40:"%28",41:"%29",42:"%2A",43:"%2B",44:"%2C",59:"%3B",61:"%3D",32:"%20"};function S(G,j,Y){let J,Ce=-1;for(let _e=0;_e<G.length;_e++){let me=G.charCodeAt(_e);if(me>=97&&me<=122||me>=65&&me<=90||me>=48&&me<=57||me===45||me===46||me===95||me===126||j&&me===47||Y&&me===91||Y&&me===93||Y&&me===58)Ce!==-1&&(J+=encodeURIComponent(G.substring(Ce,_e)),Ce=-1),J!==void 0&&(J+=G.charAt(_e));else{J===void 0&&(J=G.substr(0,_e));let Je=E[me];Je!==void 0?(Ce!==-1&&(J+=encodeURIComponent(G.substring(Ce,_e)),Ce=-1),J+=Je):Ce===-1&&(Ce=_e)}}return Ce!==-1&&(J+=encodeURIComponent(G.substring(Ce))),J!==void 0?J:G}function L(G){let j;for(let Y=0;Y<G.length;Y++){let J=G.charCodeAt(Y);J===35||J===63?(j===void 0&&(j=G.substr(0,Y)),j+=E[J]):j!==void 0&&(j+=G[Y])}return j!==void 0?j:G}function U(G,j){let Y;return Y=G.authority&&G.path.length>1&&G.scheme==="file"?`//${G.authority}${G.path}`:G.path.charCodeAt(0)===47&&(G.path.charCodeAt(1)>=65&&G.path.charCodeAt(1)<=90||G.path.charCodeAt(1)>=97&&G.path.charCodeAt(1)<=122)&&G.path.charCodeAt(2)===58?j?G.path.substr(1):G.path[1].toLowerCase()+G.path.substr(2):G.path,s.isWindows&&(Y=Y.replace(/\//g,"\\")),Y}function V(G,j){let Y=j?L:S,J="",{scheme:Ce,authority:_e,path:me,query:Je,fragment:Ve}=G;if(Ce&&(J+=Ce,J+=":"),(_e||Ce==="file")&&(J+=P,J+=P),_e){let Se=_e.indexOf("@");if(Se!==-1){let st=_e.substr(0,Se);_e=_e.substr(Se+1),Se=st.lastIndexOf(":"),Se===-1?J+=Y(st,!1,!1):(J+=Y(st.substr(0,Se),!1,!1),J+=":",J+=Y(st.substr(Se+1),!1,!0)),J+="@"}_e=_e.toLowerCase(),Se=_e.lastIndexOf(":"),Se===-1?J+=Y(_e,!1,!0):(J+=Y(_e.substr(0,Se),!1,!0),J+=_e.substr(Se))}if(me){if(me.length>=3&&me.charCodeAt(0)===47&&me.charCodeAt(2)===58){let Se=me.charCodeAt(1);Se>=65&&Se<=90&&(me=`/${String.fromCharCode(Se+32)}:${me.substr(3)}`)}else if(me.length>=2&&me.charCodeAt(1)===58){let Se=me.charCodeAt(0);Se>=65&&Se<=90&&(me=`${String.fromCharCode(Se+32)}:${me.substr(2)}`)}J+=Y(me,!0,!1)}return Je&&(J+="?",J+=Y(Je,!1,!1)),Ve&&(J+="#",J+=j?Ve:S(Ve,!1,!1)),J}function te(G){try{return decodeURIComponent(G)}catch{return G.length>3?G.substr(0,3)+te(G.substr(3)):G}}o.uriToFsPath=U;let we=/(%[0-9A-Za-z][0-9A-Za-z])+/g;function Z(G){return G.match(we)?G.replace(we,j=>te(j)):G}},679:function(i,o,a){var s=this&&this.__createBinding||(Object.create?function(_,N,I,O){O===void 0&&(O=I);var E=Object.getOwnPropertyDescriptor(N,I);E&&!("get"in E?!N.__esModule:E.writable||E.configurable)||(E={enumerable:!0,get:function(){return N[I]}}),Object.defineProperty(_,O,E)}:function(_,N,I,O){O===void 0&&(O=I),_[O]=N[I]}),u=this&&this.__setModuleDefault||(Object.create?function(_,N){Object.defineProperty(_,"default",{enumerable:!0,value:N})}:function(_,N){_.default=N}),d=this&&this.__importStar||function(_){if(_&&_.__esModule)return _;var N={};if(_!=null)for(var I in _)I!=="default"&&Object.prototype.hasOwnProperty.call(_,I)&&s(N,_,I);return u(N,_),N};Object.defineProperty(o,"__esModule",{value:!0}),o.Utils=void 0;let p=d(a(470)),m=p.posix||p,v="/";var P;(function(_){_.joinPath=function(N,...I){return N.with({path:m.join(N.path,...I)})},_.resolvePath=function(N,...I){let O=N.path,E=!1;O[0]!==v&&(O=v+O,E=!0);let S=m.resolve(O,...I);return E&&S[0]===v&&!N.authority&&(S=S.substring(1)),N.with({path:S})},_.dirname=function(N){if(N.path.length===0||N.path===v)return N;let I=m.dirname(N.path);return I.length===1&&I.charCodeAt(0)===46&&(I=""),N.with({path:I})},_.basename=function(N){return m.basename(N.path)},_.extname=function(N){return m.extname(N.path)}})(P||(o.Utils=P={}))}},e={};function r(i){var o=e[i];if(o!==void 0)return o.exports;var a=e[i]={exports:{}};return t[i].call(a.exports,a,a.exports,r),a.exports}var n={};return(()=>{var i=n;Object.defineProperty(i,"__esModule",{value:!0}),i.Utils=i.URI=void 0;let o=r(796);Object.defineProperty(i,"URI",{enumerable:!0,get:function(){return o.URI}});let a=r(679);Object.defineProperty(i,"Utils",{enumerable:!0,get:function(){return a.Utils}})})(),n})())});var Tc=h(ps=>{"use strict";Object.defineProperty(ps,"__esModule",{value:!0});ps.eagerLoad=ps.inject=void 0;function WW(t,e,r,n){let i=[t,e,r,n].reduce(NP,{});return kP(i)}ps.inject=WW;var sy=Symbol("isProxy");function EP(t){if(t&&t[sy])for(let e of Object.values(t))EP(e);return t}ps.eagerLoad=EP;function kP(t,e){let r=new Proxy({},{deleteProperty:()=>!1,get:(n,i)=>SP(n,i,t,e||r),getOwnPropertyDescriptor:(n,i)=>(SP(n,i,t,e||r),Object.getOwnPropertyDescriptor(n,i)),has:(n,i)=>i in t,ownKeys:()=>[...Reflect.ownKeys(t),sy]});return r[sy]=!0,r}var PP=Symbol();function SP(t,e,r,n){if(e in t){if(t[e]instanceof Error)throw new Error("Construction failure. Please make sure that your dependencies are constructable.",{cause:t[e]});if(t[e]===PP)throw new Error('Cycle detected. Please make "'+String(e)+'" lazy. See https://langium.org/docs/di/cyclic-dependencies');return t[e]}else if(e in r){let i=r[e];t[e]=PP;try{t[e]=typeof i=="function"?i(n):kP(i,n)}catch(o){throw t[e]=o instanceof Error?o:void 0,o}return t[e]}else return}function NP(t,e){if(e){for(let[r,n]of Object.entries(e))if(n!==void 0){let i=t[r];i!==null&&n!==null&&typeof i=="object"&&typeof n=="object"?t[r]=NP(i,n):t[r]=n}}return t}});var un=h(Ud=>{"use strict";Object.defineProperty(Ud,"__esModule",{value:!0});Ud.MultiMap=void 0;var hs=er(),uy=class{constructor(e){if(this.map=new Map,e)for(let[r,n]of e)this.add(r,n)}get size(){return hs.Reduction.sum((0,hs.stream)(this.map.values()).map(e=>e.length))}clear(){this.map.clear()}delete(e,r){if(r===void 0)return this.map.delete(e);{let n=this.map.get(e);if(n){let i=n.indexOf(r);if(i>=0)return n.length===1?this.map.delete(e):n.splice(i,1),!0}return!1}}get(e){var r;return(r=this.map.get(e))!==null&&r!==void 0?r:[]}has(e,r){if(r===void 0)return this.map.has(e);{let n=this.map.get(e);return n?n.indexOf(r)>=0:!1}}add(e,r){return this.map.has(e)?this.map.get(e).push(r):this.map.set(e,[r]),this}addAll(e,r){return this.map.has(e)?this.map.get(e).push(...r):this.map.set(e,Array.from(r)),this}forEach(e){this.map.forEach((r,n)=>r.forEach(i=>e(i,n,this)))}[Symbol.iterator](){return this.entries().iterator()}entries(){return(0,hs.stream)(this.map.entries()).flatMap(([e,r])=>r.map(n=>[e,n]))}keys(){return(0,hs.stream)(this.map.keys())}values(){return(0,hs.stream)(this.map.values()).flat()}entriesGroupedByKey(){return(0,hs.stream)(this.map.entries())}};Ud.MultiMap=uy});var Ke=h(k=>{"use strict";Object.defineProperty(k,"__esModule",{value:!0});k.isCharacterRange=k.CharacterRange=k.isAssignment=k.Assignment=k.isAlternatives=k.Alternatives=k.isAction=k.Action=k.isTypeAttribute=k.TypeAttribute=k.isType=k.Type=k.isTerminalRule=k.TerminalRule=k.isReturnType=k.ReturnType=k.isParserRule=k.ParserRule=k.isParameterReference=k.ParameterReference=k.isParameter=k.Parameter=k.isNegation=k.Negation=k.isNamedArgument=k.NamedArgument=k.isLiteralCondition=k.LiteralCondition=k.isInterface=k.Interface=k.isInferredType=k.InferredType=k.isGrammarImport=k.GrammarImport=k.isGrammar=k.Grammar=k.isDisjunction=k.Disjunction=k.isConjunction=k.Conjunction=k.isAtomType=k.AtomType=k.isAbstractElement=k.AbstractElement=k.isCondition=k.Condition=k.isAbstractType=k.AbstractType=k.isAbstractRule=k.AbstractRule=void 0;k.reflection=k.LangiumGrammarAstReflection=k.isWildcard=k.Wildcard=k.isUntilToken=k.UntilToken=k.isUnorderedGroup=k.UnorderedGroup=k.isTerminalRuleCall=k.TerminalRuleCall=k.isTerminalGroup=k.TerminalGroup=k.isTerminalAlternatives=k.TerminalAlternatives=k.isRuleCall=k.RuleCall=k.isRegexToken=k.RegexToken=k.isNegatedToken=k.NegatedToken=k.isKeyword=k.Keyword=k.isGroup=k.Group=k.isCrossReference=k.CrossReference=void 0;var KW=Yr();k.AbstractRule="AbstractRule";function BW(t){return k.reflection.isInstance(t,k.AbstractRule)}k.isAbstractRule=BW;k.AbstractType="AbstractType";function zW(t){return k.reflection.isInstance(t,k.AbstractType)}k.isAbstractType=zW;k.Condition="Condition";function VW(t){return k.reflection.isInstance(t,k.Condition)}k.isCondition=VW;k.AbstractElement="AbstractElement";function YW(t){return k.reflection.isInstance(t,k.AbstractElement)}k.isAbstractElement=YW;k.AtomType="AtomType";function XW(t){return k.reflection.isInstance(t,k.AtomType)}k.isAtomType=XW;k.Conjunction="Conjunction";function JW(t){return k.reflection.isInstance(t,k.Conjunction)}k.isConjunction=JW;k.Disjunction="Disjunction";function QW(t){return k.reflection.isInstance(t,k.Disjunction)}k.isDisjunction=QW;k.Grammar="Grammar";function ZW(t){return k.reflection.isInstance(t,k.Grammar)}k.isGrammar=ZW;k.GrammarImport="GrammarImport";function eK(t){return k.reflection.isInstance(t,k.GrammarImport)}k.isGrammarImport=eK;k.InferredType="InferredType";function tK(t){return k.reflection.isInstance(t,k.InferredType)}k.isInferredType=tK;k.Interface="Interface";function rK(t){return k.reflection.isInstance(t,k.Interface)}k.isInterface=rK;k.LiteralCondition="LiteralCondition";function nK(t){return k.reflection.isInstance(t,k.LiteralCondition)}k.isLiteralCondition=nK;k.NamedArgument="NamedArgument";function iK(t){return k.reflection.isInstance(t,k.NamedArgument)}k.isNamedArgument=iK;k.Negation="Negation";function oK(t){return k.reflection.isInstance(t,k.Negation)}k.isNegation=oK;k.Parameter="Parameter";function aK(t){return k.reflection.isInstance(t,k.Parameter)}k.isParameter=aK;k.ParameterReference="ParameterReference";function sK(t){return k.reflection.isInstance(t,k.ParameterReference)}k.isParameterReference=sK;k.ParserRule="ParserRule";function uK(t){return k.reflection.isInstance(t,k.ParserRule)}k.isParserRule=uK;k.ReturnType="ReturnType";function cK(t){return k.reflection.isInstance(t,k.ReturnType)}k.isReturnType=cK;k.TerminalRule="TerminalRule";function lK(t){return k.reflection.isInstance(t,k.TerminalRule)}k.isTerminalRule=lK;k.Type="Type";function dK(t){return k.reflection.isInstance(t,k.Type)}k.isType=dK;k.TypeAttribute="TypeAttribute";function fK(t){return k.reflection.isInstance(t,k.TypeAttribute)}k.isTypeAttribute=fK;k.Action="Action";function pK(t){return k.reflection.isInstance(t,k.Action)}k.isAction=pK;k.Alternatives="Alternatives";function hK(t){return k.reflection.isInstance(t,k.Alternatives)}k.isAlternatives=hK;k.Assignment="Assignment";function mK(t){return k.reflection.isInstance(t,k.Assignment)}k.isAssignment=mK;k.CharacterRange="CharacterRange";function gK(t){return k.reflection.isInstance(t,k.CharacterRange)}k.isCharacterRange=gK;k.CrossReference="CrossReference";function yK(t){return k.reflection.isInstance(t,k.CrossReference)}k.isCrossReference=yK;k.Group="Group";function vK(t){return k.reflection.isInstance(t,k.Group)}k.isGroup=vK;k.Keyword="Keyword";function _K(t){return k.reflection.isInstance(t,k.Keyword)}k.isKeyword=_K;k.NegatedToken="NegatedToken";function TK(t){return k.reflection.isInstance(t,k.NegatedToken)}k.isNegatedToken=TK;k.RegexToken="RegexToken";function RK(t){return k.reflection.isInstance(t,k.RegexToken)}k.isRegexToken=RK;k.RuleCall="RuleCall";function bK(t){return k.reflection.isInstance(t,k.RuleCall)}k.isRuleCall=bK;k.TerminalAlternatives="TerminalAlternatives";function CK(t){return k.reflection.isInstance(t,k.TerminalAlternatives)}k.isTerminalAlternatives=CK;k.TerminalGroup="TerminalGroup";function AK(t){return k.reflection.isInstance(t,k.TerminalGroup)}k.isTerminalGroup=AK;k.TerminalRuleCall="TerminalRuleCall";function PK(t){return k.reflection.isInstance(t,k.TerminalRuleCall)}k.isTerminalRuleCall=PK;k.UnorderedGroup="UnorderedGroup";function SK(t){return k.reflection.isInstance(t,k.UnorderedGroup)}k.isUnorderedGroup=SK;k.UntilToken="UntilToken";function EK(t){return k.reflection.isInstance(t,k.UntilToken)}k.isUntilToken=EK;k.Wildcard="Wildcard";function kK(t){return k.reflection.isInstance(t,k.Wildcard)}k.isWildcard=kK;var Gd=class extends KW.AbstractAstReflection{getAllTypes(){return["AbstractElement","AbstractRule","AbstractType","Action","Alternatives","Assignment","AtomType","CharacterRange","Condition","Conjunction","CrossReference","Disjunction","Grammar","GrammarImport","Group","InferredType","Interface","Keyword","LiteralCondition","NamedArgument","NegatedToken","Negation","Parameter","ParameterReference","ParserRule","RegexToken","ReturnType","RuleCall","TerminalAlternatives","TerminalGroup","TerminalRule","TerminalRuleCall","Type","TypeAttribute","UnorderedGroup","UntilToken","Wildcard"]}computeIsSubtype(e,r){switch(e){case k.Conjunction:case k.Disjunction:case k.LiteralCondition:case k.Negation:case k.ParameterReference:return this.isSubtype(k.Condition,r);case k.Interface:case k.Type:return this.isSubtype(k.AbstractType,r);case k.ParserRule:return this.isSubtype(k.AbstractRule,r)||this.isSubtype(k.AbstractType,r);case k.TerminalRule:return this.isSubtype(k.AbstractRule,r);case k.Action:return this.isSubtype(k.AbstractElement,r)||this.isSubtype(k.AbstractType,r);case k.Alternatives:case k.Assignment:case k.CharacterRange:case k.CrossReference:case k.Group:case k.Keyword:case k.NegatedToken:case k.RegexToken:case k.RuleCall:case k.TerminalAlternatives:case k.TerminalGroup:case k.TerminalRuleCall:case k.UnorderedGroup:case k.UntilToken:case k.Wildcard:return this.isSubtype(k.AbstractElement,r);default:return!1}}getReferenceType(e){let r=`${e.container.$type}:${e.property}`;switch(r){case"Action:type":case"AtomType:refType":case"CrossReference:type":case"Interface:superTypes":case"ParserRule:returnType":return k.AbstractType;case"Grammar:hiddenTokens":case"ParserRule:hiddenTokens":case"RuleCall:rule":return k.AbstractRule;case"Grammar:usedGrammars":return k.Grammar;case"NamedArgument:parameter":case"ParameterReference:parameter":return k.Parameter;case"TerminalRuleCall:rule":return k.TerminalRule;default:throw new Error(`${r} is not a valid reference id.`)}}getTypeMetaData(e){switch(e){case"AtomType":return{name:"AtomType",mandatory:[{name:"isArray",type:"boolean"},{name:"isRef",type:"boolean"}]};case"Grammar":return{name:"Grammar",mandatory:[{name:"definesHiddenTokens",type:"boolean"},{name:"hiddenTokens",type:"array"},{name:"imports",type:"array"},{name:"interfaces",type:"array"},{name:"isDeclared",type:"boolean"},{name:"rules",type:"array"},{name:"types",type:"array"},{name:"usedGrammars",type:"array"}]};case"Interface":return{name:"Interface",mandatory:[{name:"attributes",type:"array"},{name:"superTypes",type:"array"}]};case"LiteralCondition":return{name:"LiteralCondition",mandatory:[{name:"true",type:"boolean"}]};case"NamedArgument":return{name:"NamedArgument",mandatory:[{name:"calledByName",type:"boolean"}]};case"ParserRule":return{name:"ParserRule",mandatory:[{name:"definesHiddenTokens",type:"boolean"},{name:"entry",type:"boolean"},{name:"fragment",type:"boolean"},{name:"hiddenTokens",type:"array"},{name:"parameters",type:"array"},{name:"wildcard",type:"boolean"}]};case"TerminalRule":return{name:"TerminalRule",mandatory:[{name:"fragment",type:"boolean"},{name:"hidden",type:"boolean"}]};case"Type":return{name:"Type",mandatory:[{name:"typeAlternatives",type:"array"}]};case"TypeAttribute":return{name:"TypeAttribute",mandatory:[{name:"isOptional",type:"boolean"},{name:"typeAlternatives",type:"array"}]};case"Alternatives":return{name:"Alternatives",mandatory:[{name:"elements",type:"array"}]};case"CrossReference":return{name:"CrossReference",mandatory:[{name:"deprecatedSyntax",type:"boolean"}]};case"Group":return{name:"Group",mandatory:[{name:"elements",type:"array"}]};case"RuleCall":return{name:"RuleCall",mandatory:[{name:"arguments",type:"array"}]};case"TerminalAlternatives":return{name:"TerminalAlternatives",mandatory:[{name:"elements",type:"array"}]};case"TerminalGroup":return{name:"TerminalGroup",mandatory:[{name:"elements",type:"array"}]};case"UnorderedGroup":return{name:"UnorderedGroup",mandatory:[{name:"elements",type:"array"}]};default:return{name:e,mandatory:[]}}}};k.LangiumGrammarAstReflection=Gd;k.reflection=new Gd});var to=h(Lt=>{"use strict";Object.defineProperty(Lt,"__esModule",{value:!0});Lt.addSubTypes=Lt.sortInterfacesTopologically=Lt.mergeTypesAndInterfaces=Lt.mergeInterfaces=Lt.comparePropertyType=Lt.collectSuperTypes=Lt.collectChildrenTypes=Lt.distinctAndSorted=Lt.collectAllProperties=void 0;var NK=un(),Ta=Ke();function wK(t){let e=new NK.MultiMap;for(let r of t)e.addAll(r.name,r.properties);for(let r of t)for(let n of r.printingSuperTypes){let i=e.get(n);i&&e.addAll(r.name,i)}return e}Lt.collectAllProperties=wK;function cy(t,e){return Array.from(new Set(t)).sort(e)}Lt.distinctAndSorted=cy;function wP(t,e,r,n){let i=new Set;return i.add(t),e.findReferences(t,{}).forEach(a=>{let s=r.getOrCreateDocument(a.sourceUri),u=n.getAstNode(s.parseResult.value,a.sourcePath);(0,Ta.isInterface)(u)?(i.add(u),wP(u,e,r,n).forEach(p=>i.add(p))):u&&(0,Ta.isType)(u.$container)&&i.add(u.$container)}),i}Lt.collectChildrenTypes=wP;function ly(t){let e=new Set;return(0,Ta.isInterface)(t)?(e.add(t),t.superTypes.forEach(r=>{if((0,Ta.isInterface)(r.ref)){e.add(r.ref);let n=ly(r.ref);for(let i of n)e.add(i)}})):(0,Ta.isType)(t)&&t.typeAlternatives.forEach(r=>{var n;if(!((n=r.refType)===null||n===void 0)&&n.ref&&((0,Ta.isInterface)(r.refType.ref)||(0,Ta.isType)(r.refType.ref))){let i=ly(r.refType.ref);for(let o of i)e.add(o)}}),e}Lt.collectSuperTypes=ly;function DK(t,e){return t.array===e.array&&t.reference===e.reference&&OK(t.types,e.types)}Lt.comparePropertyType=DK;function OK(t,e,r=(n,i)=>n===i){let n=cy(t),i=cy(e);return n.length!==i.length?!1:i.every((o,a)=>r(o,n[a]))}function IK(t,e){return t.interfaces.concat(e.interfaces)}Lt.mergeInterfaces=IK;function qK(t){return t.interfaces.concat(t.unions)}Lt.mergeTypesAndInterfaces=qK;function xK(t){let e=t.sort((i,o)=>i.name.localeCompare(o.name)).map(i=>({value:i,nodes:[]}));for(let i of e)i.nodes=e.filter(o=>i.value.realSuperTypes.has(o.value.name));let r=[],n=e.filter(i=>i.nodes.length===0);for(;n.length>0;){let i=n.shift();r.includes(i)||(r.push(i),e.filter(o=>o.nodes.includes(i)).forEach(o=>n.push(o)))}return r.map(i=>i.value)}Lt.sortInterfacesTopologically=xK;function LK(t){var e;for(let r of t.values())for(let n of r.realSuperTypes)(e=t.get(n))===null||e===void 0||e.subTypes.add(r.name)}Lt.addSubTypes=LK});var fy=h(Hd=>{"use strict";Object.defineProperty(Hd,"__esModule",{value:!0});Hd.processGeneratorNode=void 0;var Rc=ms(),dy=class{constructor(e){this.defaultIndentation="    ",this.pendingIndent=!0,this.currentIndents=[],this.lines=[[]],typeof e=="string"?this.defaultIndentation=e:typeof e=="number"&&(this.defaultIndentation="".padStart(e))}get content(){return this.lines.map(e=>e.join("")).join("")}get currentLineNumber(){return this.lines.length-1}get currentLineContent(){return this.lines[this.currentLineNumber].join("")}append(e){e.length>0&&this.lines[this.currentLineNumber].push(e)}increaseIndent(e){this.currentIndents.push(e)}decreaseIndent(){this.currentIndents.pop()}resetCurrentLine(){this.lines[this.currentLineNumber]=[]}addNewLine(){this.pendingIndent=!0,this.lines.push([])}};function MK(t,e){let r=new dy(e);return DP(t,r),r.content}Hd.processGeneratorNode=MK;function DP(t,e){typeof t=="string"?$K(t,e):t instanceof Rc.IndentNode?FK(t,e):t instanceof Rc.CompositeGeneratorNode?qP(t,e):t instanceof Rc.NewLineNode&&jK(t,e)}function OP(t,e){return typeof t=="string"?xP(t):t instanceof Rc.CompositeGeneratorNode?t.contents.some(r=>OP(r,e)):t instanceof Rc.NewLineNode?!(t.ifNotEmpty&&e.currentLineContent.length===0):!1}function $K(t,e){t&&(e.pendingIndent&&IP(e,!1),e.append(t))}function IP(t,e){var r;let n="";for(let i of t.currentIndents.filter(o=>o.indentEmptyLines||!e))n+=(r=i.indentation)!==null&&r!==void 0?r:t.defaultIndentation;t.append(n),t.pendingIndent=!1}function qP(t,e){for(let r of t.contents)DP(r,e)}function FK(t,e){var r;if(OP(t,e)){t.indentImmediately&&!e.pendingIndent&&e.append((r=t.indentation)!==null&&r!==void 0?r:e.defaultIndentation);try{e.increaseIndent(t),qP(t,e)}finally{e.decreaseIndent()}}}function jK(t,e){t.ifNotEmpty&&!xP(e.currentLineContent)?e.resetCurrentLine():(e.pendingIndent&&IP(e,!0),e.append(t.lineDelimiter),e.addNewLine())}function xP(t){return t.trimStart()!==""}});var ms=h(pt=>{"use strict";Object.defineProperty(pt,"__esModule",{value:!0});pt.NLEmpty=pt.NL=pt.NewLineNode=pt.IndentNode=pt.CompositeGeneratorNode=pt.toString=pt.isNewLineNode=pt.isGeneratorNode=pt.EOL=void 0;var UK=fy();pt.EOL=typeof process>"u"?`
`:process.platform==="win32"?`\r
`:`
`;function LP(t){return t instanceof bc||t instanceof Cc||t instanceof Ra}pt.isGeneratorNode=LP;function GK(t){return t instanceof Ra}pt.isNewLineNode=GK;function HK(t,e){return LP(t)?(0,UK.processGeneratorNode)(t,e):String(t)}pt.toString=HK;var bc=class{constructor(...e){this.contents=[],this.append(...e)}isEmpty(){return this.contents.length===0}append(...e){for(let r of e)typeof r=="function"?r(this):r&&this.contents.push(r);return this}appendIf(e,r){return e?this.append(...r):this}appendNewLine(){return this.append(pt.NL)}appendNewLineIf(e){return e?this.append(pt.NL):this}appendNewLineIfNotEmpty(){return this.append(pt.NLEmpty)}appendNewLineIfNotEmptyIf(e){return e?this.appendNewLineIfNotEmpty():this}indent(e,r){let n=new Cc(r,!1);return this.contents.push(n),e&&e(n),this}};pt.CompositeGeneratorNode=bc;var Cc=class extends bc{constructor(e,r=!0,n=!1){super(),this.indentImmediately=!0,this.indentEmptyLines=!1,typeof e=="string"?this.indentation=e:typeof e=="number"&&(this.indentation="".padStart(e)),this.indentImmediately=r,this.indentEmptyLines=n}};pt.IndentNode=Cc;var Ra=class{constructor(e,r=!1){this.ifNotEmpty=!1,this.lineDelimiter=e??pt.EOL,this.ifNotEmpty=r}};pt.NewLineNode=Ra;pt.NL=new Ra;pt.NLEmpty=new Ra(void 0,!0)});var Mo=h(Xr=>{"use strict";Object.defineProperty(Xr,"__esModule",{value:!0});Xr.propertyTypesToString=Xr.TypeResolutionError=Xr.InterfaceType=Xr.UnionType=Xr.isInterfaceType=Xr.isUnionType=void 0;var Mt=ms(),Wd=fy(),WK=un(),gs=to();function KK(t){return t&&"alternatives"in t}Xr.isUnionType=KK;function BK(t){return t&&"properties"in t}Xr.isInterfaceType=BK;var py=class{constructor(e,r,n){var i;this.realSuperTypes=new Set,this.subTypes=new Set,this.containerTypes=new Set,this.typeTypes=new Set,this.name=e,this.alternatives=r,this.reflection=(i=n?.reflection)!==null&&i!==void 0?i:!1}toAstTypesString(){let e=new Mt.CompositeGeneratorNode;return e.append(`export type ${this.name} = ${Kd(this.alternatives,"AstType")};`,Mt.NL),this.reflection&&(e.append(Mt.NL),$P(e,this.name)),(0,Wd.processGeneratorNode)(e)}toDeclaredTypesString(e){let r=new Mt.CompositeGeneratorNode;return r.append(`type ${gy(this.name,e)} = ${Kd(this.alternatives,"DeclaredType")};`,Mt.NL),(0,Wd.processGeneratorNode)(r)}};Xr.UnionType=py;var hy=class{constructor(e,r,n){this.realSuperTypes=new Set,this.subTypes=new Set,this.containerTypes=new Set,this.typeTypes=new Set,this.printingSuperTypes=[],this.superProperties=new WK.MultiMap,this.name=e,this.realSuperTypes=new Set(r),this.printingSuperTypes=[...r],this.properties=n,n.forEach(i=>this.superProperties.add(i.name,i))}toAstTypesString(){let e=new Mt.CompositeGeneratorNode,r=this.printingSuperTypes.length>0?(0,gs.distinctAndSorted)([...this.printingSuperTypes]):["AstNode"];return e.append(`export interface ${this.name} extends ${r.join(", ")} {`,Mt.NL),e.indent(n=>{this.containerTypes.size>0&&n.append(`readonly $container: ${(0,gs.distinctAndSorted)([...this.containerTypes]).join(" | ")};`,Mt.NL),this.typeTypes.size>0&&n.append(`readonly $type: ${(0,gs.distinctAndSorted)([...this.typeTypes]).map(i=>`'${i}'`).join(" | ")};`,Mt.NL),MP(n,this.properties,"AstType")}),e.append("}",Mt.NL),e.append(Mt.NL),$P(e,this.name),(0,Wd.processGeneratorNode)(e)}toDeclaredTypesString(e){let r=new Mt.CompositeGeneratorNode,n=gy(this.name,e),i=Array.from(this.printingSuperTypes).join(", ");return r.append(`interface ${n}${i.length>0?` extends ${i}`:""} {`,Mt.NL),r.indent(o=>MP(o,this.properties,"DeclaredType",e)),r.append("}",Mt.NL),(0,Wd.processGeneratorNode)(r)}};Xr.InterfaceType=hy;var my=class extends Error{constructor(e,r){super(e),this.name="TypeResolutionError",this.target=r}};Xr.TypeResolutionError=my;function Kd(t,e="AstType"){function r(n){let i=(0,gs.distinctAndSorted)(n.types).join(" | ");return i=n.reference?e==="AstType"?`Reference<${i}>`:`@${i}`:i,i=n.array?e==="AstType"?`Array<${i}>`:`${i}[]`:i,i}return(0,gs.distinctAndSorted)(t.map(r)).join(" | ")}Xr.propertyTypesToString=Kd;function MP(t,e,r,n=new Set){function i(o){let a=r==="AstType"?o.name:gy(o.name,n),s=o.optional&&!o.typeAlternatives.some(d=>d.array)&&!o.typeAlternatives.every(d=>d.types.length===1&&d.types[0]==="boolean"),u=Kd(o.typeAlternatives,r);return`${a}${s?"?":""}: ${u}`}(0,gs.distinctAndSorted)(e,(o,a)=>o.name.localeCompare(a.name)).forEach(o=>t.append(i(o),Mt.NL))}function $P(t,e){t.append(`export const ${e} = '${e}';`,Mt.NL),t.append(Mt.NL),t.append(`export function is${e}(item: unknown): item is ${e} {`,Mt.NL),t.indent(r=>r.append(`return reflection.isInstance(item, ${e});`,Mt.NL)),t.append("}",Mt.NL)}function gy(t,e){return e.has(t)?`^${t}`:t}});var vs=h(ys=>{"use strict";Object.defineProperty(ys,"__esModule",{value:!0});ys.DefaultNameProvider=ys.isNamed=void 0;var zK=Vt();function FP(t){return typeof t.name=="string"}ys.isNamed=FP;var yy=class{getName(e){if(FP(e))return e.name}getNameNode(e){return(0,zK.findNodeForProperty)(e.$cstNode,"name")}};ys.DefaultNameProvider=yy});var Ye=h(ht=>{"use strict";Object.defineProperty(ht,"__esModule",{value:!0});ht.copyAstNode=ht.findLocalReferences=ht.streamReferences=ht.streamAst=ht.streamAllContents=ht.streamContents=ht.findRootNode=ht.getDocument=ht.hasContainerOfType=ht.getContainerOfType=ht.linkContentToContainer=void 0;var Ri=Yr(),ba=er();function jP(t){for(let[e,r]of Object.entries(t))e.startsWith("$")||(Array.isArray(r)?r.forEach((n,i)=>{(0,Ri.isAstNode)(n)&&(n.$container=t,n.$containerProperty=e,n.$containerIndex=i)}):(0,Ri.isAstNode)(r)&&(r.$container=t,r.$containerProperty=e))}ht.linkContentToContainer=jP;function VK(t,e){let r=t;for(;r;){if(e(r))return r;r=r.$container}}ht.getContainerOfType=VK;function YK(t,e){let r=t;for(;r;){if(e(r))return!0;r=r.$container}return!1}ht.hasContainerOfType=YK;function UP(t){let r=GP(t).$document;if(!r)throw new Error("AST node has no document.");return r}ht.getDocument=UP;function GP(t){for(;t.$container;)t=t.$container;return t}ht.findRootNode=GP;function _y(t){if(!t)throw new Error("Node must be an AstNode.");return new ba.StreamImpl(()=>({keys:Object.keys(t),keyIndex:0,arrayIndex:0}),e=>{for(;e.keyIndex<e.keys.length;){let r=e.keys[e.keyIndex];if(!r.startsWith("$")){let n=t[r];if((0,Ri.isAstNode)(n))return e.keyIndex++,{done:!1,value:n};if(Array.isArray(n)){for(;e.arrayIndex<n.length;){let i=e.arrayIndex++,o=n[i];if((0,Ri.isAstNode)(o))return{done:!1,value:o}}e.arrayIndex=0}}e.keyIndex++}return ba.DONE_RESULT})}ht.streamContents=_y;function XK(t){if(!t)throw new Error("Root node must be an AstNode.");return new ba.TreeStreamImpl(t,e=>_y(e))}ht.streamAllContents=XK;function HP(t){if(!t)throw new Error("Root node must be an AstNode.");return new ba.TreeStreamImpl(t,e=>_y(e),{includeRoot:!0})}ht.streamAst=HP;function WP(t){return new ba.StreamImpl(()=>({keys:Object.keys(t),keyIndex:0,arrayIndex:0}),e=>{for(;e.keyIndex<e.keys.length;){let r=e.keys[e.keyIndex];if(!r.startsWith("$")){let n=t[r];if((0,Ri.isReference)(n))return e.keyIndex++,{done:!1,value:{reference:n,container:t,property:r}};if(Array.isArray(n)){for(;e.arrayIndex<n.length;){let i=e.arrayIndex++,o=n[i];if((0,Ri.isReference)(o))return{done:!1,value:{reference:o,container:t,property:r,index:i}}}e.arrayIndex=0}}e.keyIndex++}return ba.DONE_RESULT})}ht.streamReferences=WP;function JK(t,e=UP(t).parseResult.value){let r=[];return HP(e).forEach(n=>{WP(n).forEach(i=>{i.reference.ref===t&&r.push(i.reference)})}),(0,ba.stream)(r)}ht.findLocalReferences=JK;function vy(t,e){let r={$type:t.$type};for(let[n,i]of Object.entries(t))if(!n.startsWith("$"))if((0,Ri.isAstNode)(i))r[n]=vy(i,e);else if((0,Ri.isReference)(i))r[n]=e(r,n,i.$refNode,i.$refText);else if(Array.isArray(i)){let o=[];for(let a of i)(0,Ri.isAstNode)(a)?o.push(vy(a,e)):(0,Ri.isReference)(a)?o.push(e(r,n,a.$refNode,a.$refText)):o.push(a);r[n]=o}else r[n]=i;return jP(r),r}ht.copyAstNode=vy});var Ac=h((KP,Bd)=>{(function(t,e){typeof define=="function"&&define.amd?define([],e):typeof Bd=="object"&&Bd.exports?Bd.exports=e():t.regexpToAst=e()})(typeof self<"u"?self:KP,function(){function t(){}t.prototype.saveState=function(){return{idx:this.idx,input:this.input,groupIdx:this.groupIdx}},t.prototype.restoreState=function(_){this.idx=_.idx,this.input=_.input,this.groupIdx=_.groupIdx},t.prototype.pattern=function(_){this.idx=0,this.input=_,this.groupIdx=0,this.consumeChar("/");var N=this.disjunction();this.consumeChar("/");for(var I={type:"Flags",loc:{begin:this.idx,end:_.length},global:!1,ignoreCase:!1,multiLine:!1,unicode:!1,sticky:!1};this.isRegExpFlag();)switch(this.popChar()){case"g":a(I,"global");break;case"i":a(I,"ignoreCase");break;case"m":a(I,"multiLine");break;case"u":a(I,"unicode");break;case"y":a(I,"sticky");break}if(this.idx!==this.input.length)throw Error("Redundant input: "+this.input.substring(this.idx));return{type:"Pattern",flags:I,value:N,loc:this.loc(0)}},t.prototype.disjunction=function(){var _=[],N=this.idx;for(_.push(this.alternative());this.peekChar()==="|";)this.consumeChar("|"),_.push(this.alternative());return{type:"Disjunction",value:_,loc:this.loc(N)}},t.prototype.alternative=function(){for(var _=[],N=this.idx;this.isTerm();)_.push(this.term());return{type:"Alternative",value:_,loc:this.loc(N)}},t.prototype.term=function(){return this.isAssertion()?this.assertion():this.atom()},t.prototype.assertion=function(){var _=this.idx;switch(this.popChar()){case"^":return{type:"StartAnchor",loc:this.loc(_)};case"$":return{type:"EndAnchor",loc:this.loc(_)};case"\\":switch(this.popChar()){case"b":return{type:"WordBoundary",loc:this.loc(_)};case"B":return{type:"NonWordBoundary",loc:this.loc(_)}}throw Error("Invalid Assertion Escape");case"(":this.consumeChar("?");var N;switch(this.popChar()){case"=":N="Lookahead";break;case"!":N="NegativeLookahead";break}s(N);var I=this.disjunction();return this.consumeChar(")"),{type:N,value:I,loc:this.loc(_)}}u()},t.prototype.quantifier=function(_){var N,I=this.idx;switch(this.popChar()){case"*":N={atLeast:0,atMost:1/0};break;case"+":N={atLeast:1,atMost:1/0};break;case"?":N={atLeast:0,atMost:1};break;case"{":var O=this.integerIncludingZero();switch(this.popChar()){case"}":N={atLeast:O,atMost:O};break;case",":var E;this.isDigit()?(E=this.integerIncludingZero(),N={atLeast:O,atMost:E}):N={atLeast:O,atMost:1/0},this.consumeChar("}");break}if(_===!0&&N===void 0)return;s(N);break}if(!(_===!0&&N===void 0))return s(N),this.peekChar(0)==="?"?(this.consumeChar("?"),N.greedy=!1):N.greedy=!0,N.type="Quantifier",N.loc=this.loc(I),N},t.prototype.atom=function(){var _,N=this.idx;switch(this.peekChar()){case".":_=this.dotAll();break;case"\\":_=this.atomEscape();break;case"[":_=this.characterClass();break;case"(":_=this.group();break}return _===void 0&&this.isPatternCharacter()&&(_=this.patternCharacter()),s(_),_.loc=this.loc(N),this.isQuantifier()&&(_.quantifier=this.quantifier()),_},t.prototype.dotAll=function(){return this.consumeChar("."),{type:"Set",complement:!0,value:[i(`
`),i("\r"),i("\u2028"),i("\u2029")]}},t.prototype.atomEscape=function(){switch(this.consumeChar("\\"),this.peekChar()){case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":return this.decimalEscapeAtom();case"d":case"D":case"s":case"S":case"w":case"W":return this.characterClassEscape();case"f":case"n":case"r":case"t":case"v":return this.controlEscapeAtom();case"c":return this.controlLetterEscapeAtom();case"0":return this.nulCharacterAtom();case"x":return this.hexEscapeSequenceAtom();case"u":return this.regExpUnicodeEscapeSequenceAtom();default:return this.identityEscapeAtom()}},t.prototype.decimalEscapeAtom=function(){var _=this.positiveInteger();return{type:"GroupBackReference",value:_}},t.prototype.characterClassEscape=function(){var _,N=!1;switch(this.popChar()){case"d":_=p;break;case"D":_=p,N=!0;break;case"s":_=v;break;case"S":_=v,N=!0;break;case"w":_=m;break;case"W":_=m,N=!0;break}return s(_),{type:"Set",value:_,complement:N}},t.prototype.controlEscapeAtom=function(){var _;switch(this.popChar()){case"f":_=i("\f");break;case"n":_=i(`
`);break;case"r":_=i("\r");break;case"t":_=i("	");break;case"v":_=i("\v");break}return s(_),{type:"Character",value:_}},t.prototype.controlLetterEscapeAtom=function(){this.consumeChar("c");var _=this.popChar();if(/[a-zA-Z]/.test(_)===!1)throw Error("Invalid ");var N=_.toUpperCase().charCodeAt(0)-64;return{type:"Character",value:N}},t.prototype.nulCharacterAtom=function(){return this.consumeChar("0"),{type:"Character",value:i("\0")}},t.prototype.hexEscapeSequenceAtom=function(){return this.consumeChar("x"),this.parseHexDigits(2)},t.prototype.regExpUnicodeEscapeSequenceAtom=function(){return this.consumeChar("u"),this.parseHexDigits(4)},t.prototype.identityEscapeAtom=function(){var _=this.popChar();return{type:"Character",value:i(_)}},t.prototype.classPatternCharacterAtom=function(){switch(this.peekChar()){case`
`:case"\r":case"\u2028":case"\u2029":case"\\":case"]":throw Error("TBD");default:var _=this.popChar();return{type:"Character",value:i(_)}}},t.prototype.characterClass=function(){var _=[],N=!1;for(this.consumeChar("["),this.peekChar(0)==="^"&&(this.consumeChar("^"),N=!0);this.isClassAtom();){var I=this.classAtom(),O=I.type==="Character";if(O&&this.isRangeDash()){this.consumeChar("-");var E=this.classAtom(),S=E.type==="Character";if(S){if(E.value<I.value)throw Error("Range out of order in character class");_.push({from:I.value,to:E.value})}else o(I.value,_),_.push(i("-")),o(E.value,_)}else o(I.value,_)}return this.consumeChar("]"),{type:"Set",complement:N,value:_}},t.prototype.classAtom=function(){switch(this.peekChar()){case"]":case`
`:case"\r":case"\u2028":case"\u2029":throw Error("TBD");case"\\":return this.classEscape();default:return this.classPatternCharacterAtom()}},t.prototype.classEscape=function(){switch(this.consumeChar("\\"),this.peekChar()){case"b":return this.consumeChar("b"),{type:"Character",value:i("\b")};case"d":case"D":case"s":case"S":case"w":case"W":return this.characterClassEscape();case"f":case"n":case"r":case"t":case"v":return this.controlEscapeAtom();case"c":return this.controlLetterEscapeAtom();case"0":return this.nulCharacterAtom();case"x":return this.hexEscapeSequenceAtom();case"u":return this.regExpUnicodeEscapeSequenceAtom();default:return this.identityEscapeAtom()}},t.prototype.group=function(){var _=!0;switch(this.consumeChar("("),this.peekChar(0)){case"?":this.consumeChar("?"),this.consumeChar(":"),_=!1;break;default:this.groupIdx++;break}var N=this.disjunction();this.consumeChar(")");var I={type:"Group",capturing:_,value:N};return _&&(I.idx=this.groupIdx),I},t.prototype.positiveInteger=function(){var _=this.popChar();if(n.test(_)===!1)throw Error("Expecting a positive integer");for(;r.test(this.peekChar(0));)_+=this.popChar();return parseInt(_,10)},t.prototype.integerIncludingZero=function(){var _=this.popChar();if(r.test(_)===!1)throw Error("Expecting an integer");for(;r.test(this.peekChar(0));)_+=this.popChar();return parseInt(_,10)},t.prototype.patternCharacter=function(){var _=this.popChar();switch(_){case`
`:case"\r":case"\u2028":case"\u2029":case"^":case"$":case"\\":case".":case"*":case"+":case"?":case"(":case")":case"[":case"|":throw Error("TBD");default:return{type:"Character",value:i(_)}}},t.prototype.isRegExpFlag=function(){switch(this.peekChar(0)){case"g":case"i":case"m":case"u":case"y":return!0;default:return!1}},t.prototype.isRangeDash=function(){return this.peekChar()==="-"&&this.isClassAtom(1)},t.prototype.isDigit=function(){return r.test(this.peekChar(0))},t.prototype.isClassAtom=function(_){switch(_===void 0&&(_=0),this.peekChar(_)){case"]":case`
`:case"\r":case"\u2028":case"\u2029":return!1;default:return!0}},t.prototype.isTerm=function(){return this.isAtom()||this.isAssertion()},t.prototype.isAtom=function(){if(this.isPatternCharacter())return!0;switch(this.peekChar(0)){case".":case"\\":case"[":case"(":return!0;default:return!1}},t.prototype.isAssertion=function(){switch(this.peekChar(0)){case"^":case"$":return!0;case"\\":switch(this.peekChar(1)){case"b":case"B":return!0;default:return!1}case"(":return this.peekChar(1)==="?"&&(this.peekChar(2)==="="||this.peekChar(2)==="!");default:return!1}},t.prototype.isQuantifier=function(){var _=this.saveState();try{return this.quantifier(!0)!==void 0}catch{return!1}finally{this.restoreState(_)}},t.prototype.isPatternCharacter=function(){switch(this.peekChar()){case"^":case"$":case"\\":case".":case"*":case"+":case"?":case"(":case")":case"[":case"|":case"/":case`
`:case"\r":case"\u2028":case"\u2029":return!1;default:return!0}},t.prototype.parseHexDigits=function(_){for(var N="",I=0;I<_;I++){var O=this.popChar();if(e.test(O)===!1)throw Error("Expecting a HexDecimal digits");N+=O}var E=parseInt(N,16);return{type:"Character",value:E}},t.prototype.peekChar=function(_){return _===void 0&&(_=0),this.input[this.idx+_]},t.prototype.popChar=function(){var _=this.peekChar(0);return this.consumeChar(),_},t.prototype.consumeChar=function(_){if(_!==void 0&&this.input[this.idx]!==_)throw Error("Expected: '"+_+"' but found: '"+this.input[this.idx]+"' at offset: "+this.idx);if(this.idx>=this.input.length)throw Error("Unexpected end of input");this.idx++},t.prototype.loc=function(_){return{begin:_,end:this.idx}};var e=/[0-9a-fA-F]/,r=/[0-9]/,n=/[1-9]/;function i(_){return _.charCodeAt(0)}function o(_,N){_.length!==void 0?_.forEach(function(I){N.push(I)}):N.push(_)}function a(_,N){if(_[N]===!0)throw"duplicate flag "+N;_[N]=!0}function s(_){if(_===void 0)throw Error("Internal Error - Should never get here!")}function u(){throw Error("Internal Error - Should never get here!")}var d,p=[];for(d=i("0");d<=i("9");d++)p.push(d);var m=[i("_")].concat(p);for(d=i("a");d<=i("z");d++)m.push(d);for(d=i("A");d<=i("Z");d++)m.push(d);var v=[i(" "),i("\f"),i(`
`),i("\r"),i("	"),i("\v"),i("	"),i("\xA0"),i("\u1680"),i("\u2000"),i("\u2001"),i("\u2002"),i("\u2003"),i("\u2004"),i("\u2005"),i("\u2006"),i("\u2007"),i("\u2008"),i("\u2009"),i("\u200A"),i("\u2028"),i("\u2029"),i("\u202F"),i("\u205F"),i("\u3000"),i("\uFEFF")];function P(){}return P.prototype.visitChildren=function(_){for(var N in _){var I=_[N];_.hasOwnProperty(N)&&(I.type!==void 0?this.visit(I):Array.isArray(I)&&I.forEach(function(O){this.visit(O)},this))}},P.prototype.visit=function(_){switch(_.type){case"Pattern":this.visitPattern(_);break;case"Flags":this.visitFlags(_);break;case"Disjunction":this.visitDisjunction(_);break;case"Alternative":this.visitAlternative(_);break;case"StartAnchor":this.visitStartAnchor(_);break;case"EndAnchor":this.visitEndAnchor(_);break;case"WordBoundary":this.visitWordBoundary(_);break;case"NonWordBoundary":this.visitNonWordBoundary(_);break;case"Lookahead":this.visitLookahead(_);break;case"NegativeLookahead":this.visitNegativeLookahead(_);break;case"Character":this.visitCharacter(_);break;case"Set":this.visitSet(_);break;case"Group":this.visitGroup(_);break;case"GroupBackReference":this.visitGroupBackReference(_);break;case"Quantifier":this.visitQuantifier(_);break}this.visitChildren(_)},P.prototype.visitPattern=function(_){},P.prototype.visitFlags=function(_){},P.prototype.visitDisjunction=function(_){},P.prototype.visitAlternative=function(_){},P.prototype.visitStartAnchor=function(_){},P.prototype.visitEndAnchor=function(_){},P.prototype.visitWordBoundary=function(_){},P.prototype.visitNonWordBoundary=function(_){},P.prototype.visitLookahead=function(_){},P.prototype.visitNegativeLookahead=function(_){},P.prototype.visitCharacter=function(_){},P.prototype.visitSet=function(_){},P.prototype.visitGroup=function(_){},P.prototype.visitGroupBackReference=function(_){},P.prototype.visitQuantifier=function(_){},{RegExpParser:t,BaseRegExpVisitor:P,VERSION:"0.5.0"}})});var _s=h(Ar=>{"use strict";Object.defineProperty(Ar,"__esModule",{value:!0});Ar.partialRegex=Ar.partialMatches=Ar.getCaseInsensitivePattern=Ar.escapeRegExp=Ar.isWhitespaceRegExp=Ar.isMultilineComment=Ar.getTerminalParts=void 0;var BP=Ac(),zP=new BP.RegExpParser,Ty=class extends BP.BaseRegExpVisitor{constructor(){super(...arguments),this.isStarting=!0,this.endRegexStack=[],this.multiline=!1}get endRegex(){return this.endRegexStack.join("")}reset(e){this.multiline=!1,this.regex=e,this.startRegex="",this.isStarting=!0,this.endRegexStack=[]}visitGroup(e){e.quantifier&&(this.isStarting=!1,this.endRegexStack=[])}visitCharacter(e){let r=String.fromCharCode(e.value);if(!this.multiline&&r===`
`&&(this.multiline=!0),e.quantifier)this.isStarting=!1,this.endRegexStack=[];else{let n=Ry(r);this.endRegexStack.push(n),this.isStarting&&(this.startRegex+=n)}}visitSet(e){if(!this.multiline){let r=this.regex.substring(e.loc.begin,e.loc.end),n=new RegExp(r);this.multiline=!!`
`.match(n)}if(e.quantifier)this.isStarting=!1,this.endRegexStack=[];else{let r=this.regex.substring(e.loc.begin,e.loc.end);this.endRegexStack.push(r),this.isStarting&&(this.startRegex+=r)}}},Ca=new Ty;function QK(t){try{typeof t!="string"&&(t=t.source),t=`/${t}/`;let e=zP.pattern(t),r=[];for(let n of e.value.value)Ca.reset(t),Ca.visit(n),r.push({start:Ca.startRegex,end:Ca.endRegex});return r}catch{return[]}}Ar.getTerminalParts=QK;function ZK(t){try{return typeof t!="string"&&(t=t.source),t=`/${t}/`,Ca.reset(t),Ca.visit(zP.pattern(t)),Ca.multiline}catch{return!1}}Ar.isMultilineComment=ZK;function eB(t){return(typeof t=="string"?new RegExp(t):t).test(" ")}Ar.isWhitespaceRegExp=eB;function Ry(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}Ar.escapeRegExp=Ry;function tB(t){return Array.prototype.map.call(t,e=>/\w/.test(e)?`[${e.toLowerCase()}${e.toUpperCase()}]`:Ry(e)).join("")}Ar.getCaseInsensitivePattern=tB;function rB(t,e){let r=VP(t),n=e.match(r);return!!n&&n[0].length>0}Ar.partialMatches=rB;function VP(t){typeof t=="string"&&(t=new RegExp(t));let e=t,r=t.source,n=0;function i(){let o="",a;function s(d){o+=r.substr(n,d),n+=d}function u(d){o+="(?:"+r.substr(n,d)+"|$)",n+=d}for(;n<r.length;)switch(r[n]){case"\\":switch(r[n+1]){case"c":u(3);break;case"x":u(4);break;case"u":e.unicode?r[n+2]==="{"?u(r.indexOf("}",n)-n+1):u(6):u(2);break;case"p":case"P":e.unicode?u(r.indexOf("}",n)-n+1):u(2);break;case"k":u(r.indexOf(">",n)-n+1);break;default:u(2);break}break;case"[":a=/\[(?:\\.|.)*?\]/g,a.lastIndex=n,a=a.exec(r)||[],u(a[0].length);break;case"|":case"^":case"$":case"*":case"+":case"?":s(1);break;case"{":a=/\{\d+,?\d*\}/g,a.lastIndex=n,a=a.exec(r),a?s(a[0].length):u(1);break;case"(":if(r[n+1]==="?")switch(r[n+2]){case":":o+="(?:",n+=3,o+=i()+"|$)";break;case"=":o+="(?=",n+=3,o+=i()+")";break;case"!":a=n,n+=3,i(),o+=r.substr(a,n-a);break;case"<":switch(r[n+3]){case"=":case"!":a=n,n+=4,i(),o+=r.substr(a,n-a);break;default:s(r.indexOf(">",n)-n+1),o+=i()+"|$)";break}break}else s(1),o+=i()+"|$)";break;case")":return++n,o;default:u(1);break}return o}return new RegExp(i(),t.flags)}Ar.partialRegex=VP});var Yt=h(Ae=>{"use strict";var nB=Ae&&Ae.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var i=Object.getOwnPropertyDescriptor(e,r);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,i)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),iB=Ae&&Ae.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),oB=Ae&&Ae.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var r in t)r!=="default"&&Object.prototype.hasOwnProperty.call(t,r)&&nB(e,t,r);return iB(e,t),e};Object.defineProperty(Ae,"__esModule",{value:!0});Ae.isPrimitiveType=Ae.extractAssignments=Ae.resolveTransitiveImports=Ae.resolveImport=Ae.resolveImportUri=Ae.terminalRegex=Ae.getRuleType=Ae.getActionType=Ae.getExplicitRuleType=Ae.getTypeNameWithoutError=Ae.getTypeName=Ae.getActionAtElement=Ae.isDataTypeRule=Ae.isArrayOperator=Ae.isArrayCardinality=Ae.isOptionalCardinality=void 0;var $e=oB(Ke()),YP=eo(),zd=Ye(),aB=Mo(),sB=_s();function uB(t){return t==="?"||t==="*"}Ae.isOptionalCardinality=uB;function cB(t){return t==="*"||t==="+"}Ae.isArrayCardinality=cB;function lB(t){return t==="+="}Ae.isArrayOperator=lB;function Ay(t){return XP(t,new Set)}Ae.isDataTypeRule=Ay;function XP(t,e){if(e.has(t))return!0;e.add(t);for(let r of(0,zd.streamAllContents)(t))if($e.isRuleCall(r)){if(!r.rule.ref||$e.isParserRule(r.rule.ref)&&!XP(r.rule.ref,e))return!1}else{if($e.isAssignment(r))return!1;if($e.isAction(r))return!1}return!!t.definition}function JP(t){let e=t.$container;if($e.isGroup(e)){let r=e.elements,n=r.indexOf(t);for(let i=n-1;i>=0;i--){let o=r[i];if($e.isAction(o))return o;{let a=(0,zd.streamAllContents)(r[i]).find($e.isAction);if(a)return a}}}if($e.isAbstractElement(e))return JP(e)}Ae.getActionAtElement=JP;function Py(t){var e;if($e.isParserRule(t))return Ay(t)?t.name:(e=Sy(t))!==null&&e!==void 0?e:t.name;if($e.isInterface(t)||$e.isType(t)||$e.isReturnType(t))return t.name;if($e.isAction(t)){let r=QP(t);if(r)return r}else if($e.isInferredType(t))return t.name;throw new aB.TypeResolutionError("Cannot get name of Unknown Type",t.$cstNode)}Ae.getTypeName=Py;function dB(t){try{return Py(t)}catch{return"never"}}Ae.getTypeNameWithoutError=dB;function Sy(t){if(t.inferredType)return t.inferredType.name;if(t.dataType)return t.dataType;if(t.returnType){let e=t.returnType.ref;if(e){if($e.isParserRule(e))return e.name;if($e.isInterface(e)||$e.isType(e))return e.name}}}Ae.getExplicitRuleType=Sy;function QP(t){var e;if(t.inferredType)return t.inferredType.name;if(!((e=t.type)===null||e===void 0)&&e.ref)return Py(t.type.ref)}Ae.getActionType=QP;function fB(t){var e,r,n;return $e.isTerminalRule(t)?(r=(e=t.type)===null||e===void 0?void 0:e.name)!==null&&r!==void 0?r:"string":Ay(t)?t.name:(n=Sy(t))!==null&&n!==void 0?n:t.name}Ae.getRuleType=fB;function ZP(t){return Pc(t.definition)}Ae.terminalRegex=ZP;var Ey=/[\s\S]/.source;function Pc(t){if($e.isTerminalAlternatives(t))return pB(t);if($e.isTerminalGroup(t))return hB(t);if($e.isCharacterRange(t))return yB(t);if($e.isTerminalRuleCall(t)){let e=t.rule.ref;if(!e)throw new Error("Missing rule reference.");return ro(ZP(e),t.cardinality)}else{if($e.isNegatedToken(t))return gB(t);if($e.isUntilToken(t))return mB(t);if($e.isRegexToken(t))return ro(t.regex,t.cardinality,!1);if($e.isWildcard(t))return ro(Ey,t.cardinality);throw new Error("Invalid terminal element.")}}function pB(t){return ro(t.elements.map(Pc).join("|"),t.cardinality)}function hB(t){return ro(t.elements.map(Pc).join(""),t.cardinality)}function mB(t){return ro(`${Ey}*?${Pc(t.terminal)}`,t.cardinality)}function gB(t){return ro(`(?!${Pc(t.terminal)})${Ey}*?`,t.cardinality)}function yB(t){return t.right?ro(`[${by(t.left)}-${by(t.right)}]`,t.cardinality,!1):ro(by(t.left),t.cardinality,!1)}function by(t){return(0,sB.escapeRegExp)(t.value)}function ro(t,e,r=!0){return r&&(t=`(${t})`),e?`${t}${e}`:t}function eS(t){if(t.path===void 0||t.path.length===0)return;let e=YP.Utils.dirname((0,zd.getDocument)(t).uri),r=t.path;return r.endsWith(".langium")||(r+=".langium"),YP.Utils.resolvePath(e,r)}Ae.resolveImportUri=eS;function ky(t,e){let r=eS(e);try{if(r){let i=t.getOrCreateDocument(r).parseResult.value;if($e.isGrammar(i))return i}}catch{}}Ae.resolveImport=ky;function vB(t,e){if($e.isGrammarImport(e)){let r=ky(t,e);if(r){let n=Cy(t,r);return n.push(r),n}return[]}else return Cy(t,e)}Ae.resolveTransitiveImports=vB;function Cy(t,e,r=e,n=new Set,i=new Set){let o=(0,zd.getDocument)(e);if(r!==e&&i.add(e),!n.has(o.uri)){n.add(o.uri);for(let a of e.imports){let s=ky(t,a);s&&Cy(t,s,r,n,i)}}return Array.from(i)}function tS(t){return $e.isAssignment(t)?[t]:$e.isAlternatives(t)||$e.isGroup(t)||$e.isUnorderedGroup(t)?t.elements.flatMap(e=>tS(e)):[]}Ae.extractAssignments=tS;var _B=["string","number","boolean","Date","bigint"];function TB(t){return _B.includes(t)}Ae.isPrimitiveType=TB});var aS=h(Yd=>{"use strict";Object.defineProperty(Yd,"__esModule",{value:!0});Yd.collectInferredTypes=void 0;var RB=vs(),rS=un(),bB=er(),Xt=Ke(),no=Yt(),CB=to(),Vd=Mo(),Ny=class{constructor(e,r){this.context=e,this.root=r}getTypes(){let e={name:this.root.name,properties:this.root.properties,ruleCalls:this.root.ruleCalls,super:[]};return this.root.children.length===0?[{alt:e,next:[]}]:this.applyNext(this.root,{alt:e,next:this.root.children})}applyNext(e,r){let n=this.splitType(r.alt,r.next.length),i=[];for(let o=0;o<r.next.length;o++){let a=n[o],s=r.next[o];s.actionWithAssignment&&i.push({alt:this.copyTypeAlternative(a),next:[]}),s.name!==void 0&&s.name!==a.name&&(s.actionWithAssignment?(a.properties=[],a.ruleCalls=[],a.super=[e.name],a.name=s.name):(a.super=[a.name,...a.ruleCalls],a.properties=[],a.ruleCalls=[],a.name=s.name)),a.properties.push(...s.properties),a.ruleCalls.push(...s.ruleCalls);let u={alt:a,next:s.children};u.next.length===0?(u.alt.super=u.alt.super.filter(d=>d!==u.alt.name),i.push(u)):i.push(...this.applyNext(e,u))}return oS(i)}splitType(e,r){let n=[];for(let i=0;i<r;i++)n.push(this.copyTypeAlternative(e));return n}copyTypeAlternative(e){function r(n){return{name:n.name,optional:n.optional,typeAlternatives:n.typeAlternatives,astNodes:n.astNodes}}return{name:e.name,super:e.super,ruleCalls:e.ruleCalls,properties:e.properties.map(n=>r(n))}}getSuperTypes(e){let r=new Set;return this.collectSuperTypes(e,e,r),Array.from(r)}collectSuperTypes(e,r,n){if(r.ruleCalls.length>0){for(let i of r.ruleCalls)n.add(i);return}for(let i of r.parents)e.name===void 0?this.collectSuperTypes(i,i,n):i.name!==void 0&&i.name!==e.name?n.add(i.name):this.collectSuperTypes(e,i,n);r.parents.length===0&&r.name&&n.add(r.name)}connect(e,r){return r.parents.push(e),e.children.push(r),r}merge(...e){if(e.length===1)return e[0];if(e.length===0)throw new Error("No parts to merge");let r=Aa();r.parents=e;for(let n of e)n.children.push(r);return r}};function AB(t,e){var r;let n=[],i={fragments:new Map};for(let u of t)n.push(...nS(i,u));let o=NB(n),a=DB(o),s=OB(o,a);for(let u of e){let d=(0,Xt.isAlternatives)(u.definition)&&u.definition.elements.every(p=>(0,Xt.isKeyword)(p))?(0,bB.stream)(u.definition.elements).filter(Xt.isKeyword).map(p=>`'${p.value}'`).toArray():[(r=(0,no.getExplicitRuleType)(u))!==null&&r!==void 0?r:"string"];s.unions.push(new Vd.UnionType(u.name,Sc(!1,!1,d)))}return s}Yd.collectInferredTypes=AB;function nS(t,e){let r=Aa(e),n=new Ny(t,r);return e.definition&&wy(n,n.root,e.definition),n.getTypes()}function Aa(t){return{name:(0,Xt.isParserRule)(t)||(0,Xt.isAction)(t)?(0,no.getTypeNameWithoutError)(t):t,properties:[],ruleCalls:[],children:[],parents:[],actionWithAssignment:!1}}function wy(t,e,r){let n=(0,no.isOptionalCardinality)(r.cardinality);if((0,Xt.isAlternatives)(r)){let i=[];n&&i.push(t.connect(e,Aa()));for(let o of r.elements){let a=t.connect(e,Aa());i.push(wy(t,a,o))}return t.merge(...i)}else if((0,Xt.isGroup)(r)||(0,Xt.isUnorderedGroup)(r)){let i=t.connect(e,Aa());for(let o of r.elements)i=wy(t,i,o);if(n){let o=t.connect(e,Aa());return t.merge(o,i)}else return i}else{if((0,Xt.isAction)(r))return PB(t,e,r);(0,Xt.isAssignment)(r)?SB(e,r):(0,Xt.isRuleCall)(r)&&EB(t,e,r)}return e}function PB(t,e,r){var n;let i=t.connect(e,Aa(r));if(r.type){let o=(n=r.type)===null||n===void 0?void 0:n.ref;o&&(0,RB.isNamed)(o)&&(i.name=o.name)}return r.feature&&r.operator&&(i.actionWithAssignment=!0,i.properties.push({name:r.feature,optional:!1,typeAlternatives:Sc(r.operator==="+=",!1,t.root.ruleCalls.length!==0?t.root.ruleCalls:t.getSuperTypes(i)),astNodes:new Set([r])})),i}function SB(t,e){let r={types:new Set,reference:!1};iS(e.terminal,r);let n=Sc(e.operator==="+=",r.reference,e.operator==="?="?["boolean"]:Array.from(r.types));t.properties.push({name:e.feature,optional:(0,no.isOptionalCardinality)(e.cardinality),typeAlternatives:n,astNodes:new Set([e])})}function iS(t,e){if((0,Xt.isAlternatives)(t)||(0,Xt.isUnorderedGroup)(t)||(0,Xt.isGroup)(t))for(let r of t.elements)iS(r,e);else(0,Xt.isKeyword)(t)?e.types.add(`'${t.value}'`):(0,Xt.isRuleCall)(t)&&t.rule.ref?e.types.add((0,no.getRuleType)(t.rule.ref)):(0,Xt.isCrossReference)(t)&&t.type.ref&&(e.types.add((0,no.getTypeNameWithoutError)(t.type.ref)),e.reference=!0)}function EB(t,e,r){let n=r.rule.ref;if((0,Xt.isParserRule)(n)&&n.fragment){let i=kB(n,t.context);(0,no.isOptionalCardinality)(r.cardinality)?e.properties.push(...i.map(o=>Object.assign(Object.assign({},o),{optional:!0}))):e.properties.push(...i)}else(0,Xt.isParserRule)(n)&&e.ruleCalls.push((0,no.getRuleType)(n))}function kB(t,e){let r=e.fragments.get(t);if(r)return r;let n=[];e.fragments.set(t,n);let i=(0,no.getTypeNameWithoutError)(t),o=nS(e,t).filter(a=>a.alt.name===i);return n.push(...o.flatMap(a=>a.alt.properties)),n}function NB(t){let e=new Map,r=[],n=oS(t).map(i=>i.alt);for(let i of n){let o=new Vd.InterfaceType(i.name,i.super,i.properties);e.set(o.name,o),i.ruleCalls.length>0&&(r.push(i),i.ruleCalls.forEach(a=>{a!==o.name&&o.subTypes.add(a)}))}for(let i of r)for(let o of i.ruleCalls){let a=e.get(o);a&&a.name!==i.name&&a.realSuperTypes.add(i.name)}return Array.from(e.values())}function oS(t){let e=t.reduce((n,i)=>n.add(i.alt.name,i),new rS.MultiMap),r=[];for(let[n,i]of e.entriesGroupedByKey()){let o=[],a=new Set,s={alt:{name:n,properties:o,ruleCalls:[],super:[]},next:[]};for(let u of i){let d=u.alt;s.alt.super.push(...d.super),s.next.push(...u.next);let p=d.properties;for(let m of p){let v=o.find(P=>P.name===m.name);v?(m.typeAlternatives.filter(wB(v.typeAlternatives)).forEach(P=>v.typeAlternatives.push(P)),m.astNodes.forEach(P=>v.astNodes.add(P))):o.push(Object.assign({},m))}d.ruleCalls.forEach(m=>a.add(m))}for(let u of i){let d=u.alt;if(d.ruleCalls.length===0)for(let p of o)d.properties.find(m=>m.name===p.name)||(p.optional=!0)}s.alt.ruleCalls=Array.from(a),r.push(s)}return r}function wB(t){return e=>!t.some(r=>(0,CB.comparePropertyType)(r,e))}function DB(t){let e=[],r=new rS.MultiMap;for(let n of t)for(let i of n.realSuperTypes)r.add(i,n.name);for(let[n,i]of r.entriesGroupedByKey())t.some(o=>o.name===n)||e.push(new Vd.UnionType(n,Sc(!1,!1,i),{reflection:!0}));return e}function OB(t,e){var r;for(let o of t)for(let a of o.realSuperTypes)(r=t.find(s=>s.name===a))===null||r===void 0||r.subTypes.add(o.name);let n={interfaces:[],unions:e},i=new Set(e.map(o=>o.name));for(let o of t)if(o.properties.length===0&&o.subTypes.size>0){let a=Sc(!1,!1,Array.from(o.subTypes)),s=e.find(u=>u.name===o.name);if(s)s.alternatives.push(...a);else{let u=new Vd.UnionType(o.name,a,{reflection:!0});u.realSuperTypes=o.realSuperTypes,n.unions.push(u),i.add(o.name)}}else n.interfaces.push(o);for(let o of n.interfaces)o.printingSuperTypes=[...o.realSuperTypes].filter(a=>!i.has(a));return n}function Sc(t,e,r){return t||e?[{array:t,reference:e,types:r}]:r.map(n=>({array:t,reference:e,types:[n]}))}});var lS=h(Xd=>{"use strict";Object.defineProperty(Xd,"__esModule",{value:!0});Xd.collectDeclaredTypes=void 0;var cS=Yt(),sS=Mo();function IB(t,e){let r={unions:[],interfaces:[]};for(let n of t){let i=n.superTypes.filter(a=>a.ref).map(a=>(0,cS.getTypeNameWithoutError)(a.ref)),o=n.attributes.map(a=>({name:a.name,optional:a.isOptional===!0,typeAlternatives:a.typeAlternatives.map(uS),astNodes:new Set([a])}));r.interfaces.push(new sS.InterfaceType(n.name,i,o))}for(let n of e){let i=n.typeAlternatives.map(uS),o=n.typeAlternatives.length>1&&n.typeAlternatives.some(a=>{var s;return((s=a.refType)===null||s===void 0?void 0:s.ref)!==void 0});r.unions.push(new sS.UnionType(n.name,i,{reflection:o}))}return r}Xd.collectDeclaredTypes=IB;function uS(t){var e,r;let n=[];return t.refType?n=[t.refType.ref?(0,cS.getTypeNameWithoutError)(t.refType.ref):t.refType.$refText]:n=[(e=t.primitiveType)!==null&&e!==void 0?e:`'${(r=t.keywordType)===null||r===void 0?void 0:r.value}'`],{types:n,reference:t.isRef===!0,array:t.isArray===!0}}});var Oy=h(Ts=>{"use strict";Object.defineProperty(Ts,"__esModule",{value:!0});Ts.collectAllAstResources=Ts.collectTypeResources=void 0;var qB=aS(),xB=lS(),LB=Ye(),MB=un(),$B=Ke(),dS=Yt(),FB=to(),jB=Mo();function UB(t,e){let r=Dy(t,e),n=(0,qB.collectInferredTypes)(r.parserRules,r.datatypeRules),i=(0,xB.collectDeclaredTypes)(r.interfaces,r.types);return HB(n,i),GB((0,FB.mergeInterfaces)(n,i)),{astResources:r,inferred:n,declared:i}}Ts.collectTypeResources=UB;function GB(t){function e(r,n=new Set){if(!n.has(r)){n.add(r);for(let i of r.printingSuperTypes){let o=t.find(a=>a.name===i);o&&(0,jB.isInterfaceType)(o)&&(e(o),o.superProperties.entriesGroupedByKey().forEach(a=>r.superProperties.addAll(a[0],a[1])))}}}for(let r of t)e(r)}function HB(t,e){let r=new MB.MultiMap,n=t.unions.concat(e.unions);for(let o of n)if(o.reflection)for(let a of o.alternatives)a.types.forEach(s=>r.add(s,o.name));function i(o,a,s){var u;let d=(u=o.interfaces.find(p=>p.name===a))!==null&&u!==void 0?u:o.unions.find(p=>p.name===a);d&&s.forEach(p=>d.realSuperTypes.add(p))}for(let[o,a]of r.entriesGroupedByKey())i(t,o,a),i(e,o,a)}function Dy(t,e,r=new Set,n={parserRules:[],datatypeRules:[],interfaces:[],types:[]}){Array.isArray(t)||(t=[t]);for(let i of t){let o=(0,LB.getDocument)(i);if(!r.has(o.uri)){r.add(o.uri);for(let a of i.rules)(0,$B.isParserRule)(a)&&!a.fragment&&((0,dS.isDataTypeRule)(a)?n.datatypeRules.push(a):n.parserRules.push(a));if(i.interfaces.forEach(a=>n.interfaces.push(a)),i.types.forEach(a=>n.types.push(a)),e){let a=i.imports.map(s=>(0,dS.resolveImport)(e,s));Dy(a,e,r,n)}}}return n}Ts.collectAllAstResources=Dy});var mS=h(Rs=>{"use strict";Object.defineProperty(Rs,"__esModule",{value:!0});Rs.specifyAstNodeProperties=Rs.collectAst=void 0;var pS=to(),Iy=Mo(),WB=Oy(),KB=Yt();function BB(t,e){let{inferred:r,declared:n}=(0,WB.collectTypeResources)(t,e),i={interfaces:(0,pS.sortInterfacesTopologically)(fS(r.interfaces,n.interfaces)),unions:fS(r.unions,n.unions)};return hS(i),i}Rs.collectAst=BB;function fS(t,e){return Array.from(t.concat(e).reduce((r,n)=>(r.set(n.name,n),r),new Map).values()).sort((r,n)=>r.name.localeCompare(n.name))}function hS(t){let e=VB(t);(0,pS.addSubTypes)(e),YB(e),zB(e)}Rs.specifyAstNodeProperties=hS;function zB(t){let e=Array.from(t.values()).filter(n=>n.subTypes.size===0),r=new Set;for(let n of e){r.add(n),n.typeTypes.add(n.name);let i=Array.from(n.realSuperTypes).map(o=>t.get(o)).filter(o=>o!==void 0);for(let o of i)n.typeTypes.forEach(a=>o.typeTypes.add(a));e.push(...i.filter(o=>!r.has(o)))}}function VB({interfaces:t,unions:e}){let r=t.concat(e).reduce((o,a)=>(o.set(a.name,a),o),new Map),n=new Map;function i(o,a=new Set){if(n.has(o))return n.get(o);if(a.has(o))return!0;a.add(o);let s=o.alternatives.flatMap(u=>u.types).filter(u=>!(0,KB.isPrimitiveType)(u));if(s.length===0)return!0;for(let u of s){let d=r.get(u);if(d&&((0,Iy.isInterfaceType)(d)||(0,Iy.isUnionType)(d)&&!i(d,a)))return!1}return!0}for(let o of e){let a=i(o);n.set(o,a)}for(let[o,a]of n)a&&r.delete(o.name);return r}function YB(t){var e;let r=Array.from(t.values()),n=r.filter(o=>(0,Iy.isInterfaceType)(o));for(let o of n){let a=o.properties.flatMap(s=>s.typeAlternatives.filter(u=>!u.reference).flatMap(u=>u.types));for(let s of a)(e=t.get(s))===null||e===void 0||e.containerTypes.add(o.name)}let i=XB(r);JB(i)}function XB(t){function e(i){let o=[i];n.add(i.name);let a=[...i.subTypes,...i.realSuperTypes];for(let s of a)if(!n.has(s)){let u=t.find(d=>d.name===s);u&&o.push(...e(u))}return o}let r=[],n=new Set;for(let i of t)n.has(i.name)||r.push(e(i));return r}function JB(t){for(let e of t){let r=new Set;e.forEach(n=>n.containerTypes.forEach(i=>r.add(i))),e.forEach(n=>n.containerTypes=r)}}});var qy=h(Jd=>{"use strict";Object.defineProperty(Jd,"__esModule",{value:!0});Jd.interpretAstReflection=void 0;var QB=Yr(),gS=un(),ZB=Ke(),e2=mS(),t2=to();function r2(t,e){let r;(0,ZB.isGrammar)(t)?r=(0,e2.collectAst)(t,e):r=t;let n=r.interfaces.map(s=>s.name).concat(r.unions.map(s=>s.name)),i=n2(r),o=i2(r),a=a2(r);return{getAllTypes(){return n},getReferenceType(s){let u=`${s.container.$type}:${s.property}`,d=i.get(u);if(d)return d;throw new Error("Could not find reference type for "+u)},getTypeMetaData(s){var u;return(u=o.get(s))!==null&&u!==void 0?u:{name:s,mandatory:[]}},isInstance(s,u){return(0,QB.isAstNode)(s)&&this.isSubtype(s.$type,u)},isSubtype(s,u){if(s===u)return!0;let d=a.get(s);for(let p of d)if(this.isSubtype(p,u))return!0;return!1}}}Jd.interpretAstReflection=r2;function n2(t){let e=new gS.MultiMap;for(let n of t.interfaces){for(let i of n.properties)for(let o of i.typeAlternatives)o.reference&&e.add(n.name,[i.name,o.types[0]]);for(let i of n.printingSuperTypes){let o=e.get(i);e.addAll(n.name,o)}}let r=new Map;for(let[n,[i,o]]of e)r.set(`${n}:${i}`,o);return r}function i2(t){let e=new Map,r=(0,t2.collectAllProperties)(t.interfaces);for(let n of t.interfaces){let i=r.get(n.name),o=i.filter(s=>s.typeAlternatives.some(u=>u.array)),a=i.filter(s=>s.typeAlternatives.every(u=>!u.array&&u.types.includes("boolean")));(o.length>0||a.length>0)&&e.set(n.name,{name:n.name,mandatory:o2(o,a)})}return e}function o2(t,e){let r=[],n=t.concat(e).sort((i,o)=>i.name.localeCompare(o.name));for(let i of n){let o=t.includes(i)?"array":"boolean";r.push({name:i.name,type:o})}return r}function a2(t){let e=new gS.MultiMap;for(let r of t.interfaces)e.addAll(r.name,r.realSuperTypes);for(let r of t.unions)e.addAll(r.name,r.realSuperTypes);return e}});var yS=h(Zd=>{"use strict";Object.defineProperty(Zd,"__esModule",{value:!0});Zd.LangiumGrammarGrammar=void 0;var s2=Vt(),Qd,u2=()=>Qd??(Qd=(0,s2.loadGrammarFromJson)(`{
  "$type": "Grammar",
  "isDeclared": true,
  "name": "LangiumGrammar",
  "rules": [
    {
      "$type": "ParserRule",
      "name": "Grammar",
      "entry": true,
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Assignment",
                "feature": "isDeclared",
                "operator": "?=",
                "terminal": {
                  "$type": "Keyword",
                  "value": "grammar"
                }
              },
              {
                "$type": "Assignment",
                "feature": "name",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@57"
                  },
                  "arguments": []
                }
              },
              {
                "$type": "Group",
                "elements": [
                  {
                    "$type": "Keyword",
                    "value": "with"
                  },
                  {
                    "$type": "Assignment",
                    "feature": "usedGrammars",
                    "operator": "+=",
                    "terminal": {
                      "$type": "CrossReference",
                      "type": {
                        "$ref": "#/rules@0"
                      },
                      "terminal": {
                        "$type": "RuleCall",
                        "rule": {
                          "$ref": "#/rules@57"
                        },
                        "arguments": []
                      },
                      "deprecatedSyntax": false
                    }
                  },
                  {
                    "$type": "Group",
                    "elements": [
                      {
                        "$type": "Keyword",
                        "value": ","
                      },
                      {
                        "$type": "Assignment",
                        "feature": "usedGrammars",
                        "operator": "+=",
                        "terminal": {
                          "$type": "CrossReference",
                          "type": {
                            "$ref": "#/rules@0"
                          },
                          "terminal": {
                            "$type": "RuleCall",
                            "rule": {
                              "$ref": "#/rules@57"
                            },
                            "arguments": []
                          },
                          "deprecatedSyntax": false
                        }
                      }
                    ],
                    "cardinality": "*"
                  }
                ],
                "cardinality": "?"
              },
              {
                "$type": "Group",
                "elements": [
                  {
                    "$type": "Assignment",
                    "feature": "definesHiddenTokens",
                    "operator": "?=",
                    "terminal": {
                      "$type": "Keyword",
                      "value": "hidden"
                    }
                  },
                  {
                    "$type": "Keyword",
                    "value": "("
                  },
                  {
                    "$type": "Group",
                    "elements": [
                      {
                        "$type": "Assignment",
                        "feature": "hiddenTokens",
                        "operator": "+=",
                        "terminal": {
                          "$type": "CrossReference",
                          "type": {
                            "$ref": "#/rules@8"
                          },
                          "terminal": {
                            "$type": "RuleCall",
                            "rule": {
                              "$ref": "#/rules@57"
                            },
                            "arguments": []
                          },
                          "deprecatedSyntax": false
                        }
                      },
                      {
                        "$type": "Group",
                        "elements": [
                          {
                            "$type": "Keyword",
                            "value": ","
                          },
                          {
                            "$type": "Assignment",
                            "feature": "hiddenTokens",
                            "operator": "+=",
                            "terminal": {
                              "$type": "CrossReference",
                              "type": {
                                "$ref": "#/rules@8"
                              },
                              "terminal": {
                                "$type": "RuleCall",
                                "rule": {
                                  "$ref": "#/rules@57"
                                },
                                "arguments": []
                              },
                              "deprecatedSyntax": false
                            }
                          }
                        ],
                        "cardinality": "*"
                      }
                    ],
                    "cardinality": "?"
                  },
                  {
                    "$type": "Keyword",
                    "value": ")"
                  }
                ],
                "cardinality": "?"
              }
            ],
            "cardinality": "?"
          },
          {
            "$type": "Assignment",
            "feature": "imports",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@9"
              },
              "arguments": []
            },
            "cardinality": "*"
          },
          {
            "$type": "Alternatives",
            "elements": [
              {
                "$type": "Assignment",
                "feature": "rules",
                "operator": "+=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@8"
                  },
                  "arguments": []
                }
              },
              {
                "$type": "Assignment",
                "feature": "interfaces",
                "operator": "+=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@1"
                  },
                  "arguments": []
                }
              },
              {
                "$type": "Assignment",
                "feature": "types",
                "operator": "+=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@7"
                  },
                  "arguments": []
                }
              }
            ],
            "cardinality": "+"
          }
        ]
      },
      "definesHiddenTokens": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Interface",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "interface"
          },
          {
            "$type": "Assignment",
            "feature": "name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@57"
              },
              "arguments": []
            }
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": "extends"
              },
              {
                "$type": "Assignment",
                "feature": "superTypes",
                "operator": "+=",
                "terminal": {
                  "$type": "CrossReference",
                  "type": {
                    "$ref": "#/types@0"
                  },
                  "deprecatedSyntax": false
                }
              },
              {
                "$type": "Group",
                "elements": [
                  {
                    "$type": "Keyword",
                    "value": ","
                  },
                  {
                    "$type": "Assignment",
                    "feature": "superTypes",
                    "operator": "+=",
                    "terminal": {
                      "$type": "CrossReference",
                      "type": {
                        "$ref": "#/types@0"
                      },
                      "deprecatedSyntax": false
                    }
                  }
                ],
                "cardinality": "*"
              }
            ],
            "cardinality": "?"
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@2"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "SchemaType",
      "fragment": true,
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "{"
          },
          {
            "$type": "Assignment",
            "feature": "attributes",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@3"
              },
              "arguments": []
            },
            "cardinality": "*"
          },
          {
            "$type": "Keyword",
            "value": "}"
          },
          {
            "$type": "Keyword",
            "value": ";",
            "cardinality": "?"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "TypeAttribute",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@56"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "isOptional",
            "operator": "?=",
            "terminal": {
              "$type": "Keyword",
              "value": "?"
            },
            "cardinality": "?"
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@4"
            },
            "arguments": []
          },
          {
            "$type": "Keyword",
            "value": ";",
            "cardinality": "?"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "TypeAlternatives",
      "fragment": true,
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "typeAlternatives",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@5"
              },
              "arguments": []
            }
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": "|"
              },
              {
                "$type": "Assignment",
                "feature": "typeAlternatives",
                "operator": "+=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@5"
                  },
                  "arguments": []
                }
              }
            ],
            "cardinality": "*"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AtomType",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Alternatives",
                "elements": [
                  {
                    "$type": "Assignment",
                    "feature": "primitiveType",
                    "operator": "=",
                    "terminal": {
                      "$type": "RuleCall",
                      "rule": {
                        "$ref": "#/rules@6"
                      },
                      "arguments": []
                    }
                  },
                  {
                    "$type": "Group",
                    "elements": [
                      {
                        "$type": "Assignment",
                        "feature": "isRef",
                        "operator": "?=",
                        "terminal": {
                          "$type": "Keyword",
                          "value": "@"
                        },
                        "cardinality": "?"
                      },
                      {
                        "$type": "Assignment",
                        "feature": "refType",
                        "operator": "=",
                        "terminal": {
                          "$type": "CrossReference",
                          "type": {
                            "$ref": "#/types@0"
                          },
                          "deprecatedSyntax": false
                        }
                      }
                    ]
                  }
                ]
              },
              {
                "$type": "Assignment",
                "feature": "isArray",
                "operator": "?=",
                "terminal": {
                  "$type": "Keyword",
                  "value": "[]"
                },
                "cardinality": "?"
              }
            ]
          },
          {
            "$type": "Assignment",
            "feature": "keywordType",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@22"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "PrimitiveType",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "string"
          },
          {
            "$type": "Keyword",
            "value": "number"
          },
          {
            "$type": "Keyword",
            "value": "boolean"
          },
          {
            "$type": "Keyword",
            "value": "Date"
          },
          {
            "$type": "Keyword",
            "value": "bigint"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Type",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "type"
          },
          {
            "$type": "Assignment",
            "feature": "name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@57"
              },
              "arguments": []
            }
          },
          {
            "$type": "Keyword",
            "value": "="
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@4"
            },
            "arguments": []
          },
          {
            "$type": "Keyword",
            "value": ";",
            "cardinality": "?"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AbstractRule",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@10"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@43"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "GrammarImport",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "import"
          },
          {
            "$type": "Assignment",
            "feature": "path",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@58"
              },
              "arguments": []
            }
          },
          {
            "$type": "Keyword",
            "value": ";",
            "cardinality": "?"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "ParserRule",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Alternatives",
            "elements": [
              {
                "$type": "Assignment",
                "feature": "entry",
                "operator": "?=",
                "terminal": {
                  "$type": "Keyword",
                  "value": "entry"
                }
              },
              {
                "$type": "Assignment",
                "feature": "fragment",
                "operator": "?=",
                "terminal": {
                  "$type": "Keyword",
                  "value": "fragment"
                }
              }
            ],
            "cardinality": "?"
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@12"
            },
            "arguments": []
          },
          {
            "$type": "Alternatives",
            "elements": [
              {
                "$type": "Assignment",
                "feature": "wildcard",
                "operator": "?=",
                "terminal": {
                  "$type": "Keyword",
                  "value": "*"
                }
              },
              {
                "$type": "Group",
                "elements": [
                  {
                    "$type": "Keyword",
                    "value": "returns"
                  },
                  {
                    "$type": "Alternatives",
                    "elements": [
                      {
                        "$type": "Assignment",
                        "feature": "returnType",
                        "operator": "=",
                        "terminal": {
                          "$type": "CrossReference",
                          "type": {
                            "$ref": "#/types@0"
                          },
                          "terminal": {
                            "$type": "RuleCall",
                            "rule": {
                              "$ref": "#/rules@57"
                            },
                            "arguments": []
                          },
                          "deprecatedSyntax": false
                        }
                      },
                      {
                        "$type": "Assignment",
                        "feature": "dataType",
                        "operator": "=",
                        "terminal": {
                          "$type": "RuleCall",
                          "rule": {
                            "$ref": "#/rules@6"
                          },
                          "arguments": []
                        }
                      }
                    ]
                  }
                ]
              },
              {
                "$type": "Assignment",
                "feature": "inferredType",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@11"
                  },
                  "arguments": [
                    {
                      "$type": "NamedArgument",
                      "value": {
                        "$type": "LiteralCondition",
                        "true": false
                      },
                      "calledByName": false
                    }
                  ]
                }
              }
            ],
            "cardinality": "?"
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Assignment",
                "feature": "definesHiddenTokens",
                "operator": "?=",
                "terminal": {
                  "$type": "Keyword",
                  "value": "hidden"
                }
              },
              {
                "$type": "Keyword",
                "value": "("
              },
              {
                "$type": "Group",
                "elements": [
                  {
                    "$type": "Assignment",
                    "feature": "hiddenTokens",
                    "operator": "+=",
                    "terminal": {
                      "$type": "CrossReference",
                      "type": {
                        "$ref": "#/rules@8"
                      },
                      "terminal": {
                        "$type": "RuleCall",
                        "rule": {
                          "$ref": "#/rules@57"
                        },
                        "arguments": []
                      },
                      "deprecatedSyntax": false
                    }
                  },
                  {
                    "$type": "Group",
                    "elements": [
                      {
                        "$type": "Keyword",
                        "value": ","
                      },
                      {
                        "$type": "Assignment",
                        "feature": "hiddenTokens",
                        "operator": "+=",
                        "terminal": {
                          "$type": "CrossReference",
                          "type": {
                            "$ref": "#/rules@8"
                          },
                          "terminal": {
                            "$type": "RuleCall",
                            "rule": {
                              "$ref": "#/rules@57"
                            },
                            "arguments": []
                          },
                          "deprecatedSyntax": false
                        }
                      }
                    ],
                    "cardinality": "*"
                  }
                ],
                "cardinality": "?"
              },
              {
                "$type": "Keyword",
                "value": ")"
              }
            ],
            "cardinality": "?"
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Assignment",
            "feature": "definition",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@14"
              },
              "arguments": []
            }
          },
          {
            "$type": "Keyword",
            "value": ";"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "InferredType",
      "parameters": [
        {
          "$type": "Parameter",
          "name": "imperative"
        }
      ],
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Alternatives",
            "elements": [
              {
                "$type": "Group",
                "guardCondition": {
                  "$type": "ParameterReference",
                  "parameter": {
                    "$ref": "#/rules@11/parameters@0"
                  }
                },
                "elements": [
                  {
                    "$type": "Keyword",
                    "value": "infer"
                  }
                ]
              },
              {
                "$type": "Group",
                "guardCondition": {
                  "$type": "Negation",
                  "value": {
                    "$type": "ParameterReference",
                    "parameter": {
                      "$ref": "#/rules@11/parameters@0"
                    }
                  }
                },
                "elements": [
                  {
                    "$type": "Keyword",
                    "value": "infers"
                  }
                ]
              }
            ]
          },
          {
            "$type": "Assignment",
            "feature": "name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@57"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "RuleNameAndParams",
      "fragment": true,
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@57"
              },
              "arguments": []
            }
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": "<"
              },
              {
                "$type": "Group",
                "elements": [
                  {
                    "$type": "Assignment",
                    "feature": "parameters",
                    "operator": "+=",
                    "terminal": {
                      "$type": "RuleCall",
                      "rule": {
                        "$ref": "#/rules@13"
                      },
                      "arguments": []
                    }
                  },
                  {
                    "$type": "Group",
                    "elements": [
                      {
                        "$type": "Keyword",
                        "value": ","
                      },
                      {
                        "$type": "Assignment",
                        "feature": "parameters",
                        "operator": "+=",
                        "terminal": {
                          "$type": "RuleCall",
                          "rule": {
                            "$ref": "#/rules@13"
                          },
                          "arguments": []
                        }
                      }
                    ],
                    "cardinality": "*"
                  }
                ],
                "cardinality": "?"
              },
              {
                "$type": "Keyword",
                "value": ">"
              }
            ],
            "cardinality": "?"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Parameter",
      "definition": {
        "$type": "Assignment",
        "feature": "name",
        "operator": "=",
        "terminal": {
          "$type": "RuleCall",
          "rule": {
            "$ref": "#/rules@57"
          },
          "arguments": []
        }
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Alternatives",
      "inferredType": {
        "$type": "InferredType",
        "name": "AbstractElement"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@15"
            },
            "arguments": []
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Action",
                "inferredType": {
                  "$type": "InferredType",
                  "name": "Alternatives"
                },
                "feature": "elements",
                "operator": "+="
              },
              {
                "$type": "Group",
                "elements": [
                  {
                    "$type": "Keyword",
                    "value": "|"
                  },
                  {
                    "$type": "Assignment",
                    "feature": "elements",
                    "operator": "+=",
                    "terminal": {
                      "$type": "RuleCall",
                      "rule": {
                        "$ref": "#/rules@15"
                      },
                      "arguments": []
                    }
                  }
                ],
                "cardinality": "+"
              }
            ],
            "cardinality": "?"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "ConditionalBranch",
      "inferredType": {
        "$type": "InferredType",
        "name": "AbstractElement"
      },
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@16"
            },
            "arguments": []
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Action",
                "inferredType": {
                  "$type": "InferredType",
                  "name": "Group"
                }
              },
              {
                "$type": "Keyword",
                "value": "<"
              },
              {
                "$type": "Assignment",
                "feature": "guardCondition",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@26"
                  },
                  "arguments": []
                }
              },
              {
                "$type": "Keyword",
                "value": ">"
              },
              {
                "$type": "Assignment",
                "feature": "elements",
                "operator": "+=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@18"
                  },
                  "arguments": []
                },
                "cardinality": "+"
              }
            ]
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "UnorderedGroup",
      "inferredType": {
        "$type": "InferredType",
        "name": "AbstractElement"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@17"
            },
            "arguments": []
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Action",
                "inferredType": {
                  "$type": "InferredType",
                  "name": "UnorderedGroup"
                },
                "feature": "elements",
                "operator": "+="
              },
              {
                "$type": "Group",
                "elements": [
                  {
                    "$type": "Keyword",
                    "value": "&"
                  },
                  {
                    "$type": "Assignment",
                    "feature": "elements",
                    "operator": "+=",
                    "terminal": {
                      "$type": "RuleCall",
                      "rule": {
                        "$ref": "#/rules@17"
                      },
                      "arguments": []
                    }
                  }
                ],
                "cardinality": "+"
              }
            ],
            "cardinality": "?"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Group",
      "inferredType": {
        "$type": "InferredType",
        "name": "AbstractElement"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@18"
            },
            "arguments": []
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Action",
                "inferredType": {
                  "$type": "InferredType",
                  "name": "Group"
                },
                "feature": "elements",
                "operator": "+="
              },
              {
                "$type": "Assignment",
                "feature": "elements",
                "operator": "+=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@18"
                  },
                  "arguments": []
                },
                "cardinality": "+"
              }
            ],
            "cardinality": "?"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AbstractToken",
      "inferredType": {
        "$type": "InferredType",
        "name": "AbstractElement"
      },
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@19"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@20"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AbstractTokenWithCardinality",
      "inferredType": {
        "$type": "InferredType",
        "name": "AbstractElement"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Alternatives",
            "elements": [
              {
                "$type": "RuleCall",
                "rule": {
                  "$ref": "#/rules@34"
                },
                "arguments": []
              },
              {
                "$type": "RuleCall",
                "rule": {
                  "$ref": "#/rules@21"
                },
                "arguments": []
              }
            ]
          },
          {
            "$type": "Assignment",
            "feature": "cardinality",
            "operator": "=",
            "terminal": {
              "$type": "Alternatives",
              "elements": [
                {
                  "$type": "Keyword",
                  "value": "?"
                },
                {
                  "$type": "Keyword",
                  "value": "*"
                },
                {
                  "$type": "Keyword",
                  "value": "+"
                }
              ]
            },
            "cardinality": "?"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Action",
      "inferredType": {
        "$type": "InferredType",
        "name": "AbstractElement"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Action",
            "inferredType": {
              "$type": "InferredType",
              "name": "Action"
            }
          },
          {
            "$type": "Keyword",
            "value": "{"
          },
          {
            "$type": "Alternatives",
            "elements": [
              {
                "$type": "Assignment",
                "feature": "type",
                "operator": "=",
                "terminal": {
                  "$type": "CrossReference",
                  "type": {
                    "$ref": "#/types@0"
                  },
                  "terminal": {
                    "$type": "RuleCall",
                    "rule": {
                      "$ref": "#/rules@57"
                    },
                    "arguments": []
                  },
                  "deprecatedSyntax": false
                }
              },
              {
                "$type": "Assignment",
                "feature": "inferredType",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@11"
                  },
                  "arguments": [
                    {
                      "$type": "NamedArgument",
                      "value": {
                        "$type": "LiteralCondition",
                        "true": true
                      },
                      "calledByName": false
                    }
                  ]
                }
              }
            ]
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": "."
              },
              {
                "$type": "Assignment",
                "feature": "feature",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@56"
                  },
                  "arguments": []
                }
              },
              {
                "$type": "Assignment",
                "feature": "operator",
                "operator": "=",
                "terminal": {
                  "$type": "Alternatives",
                  "elements": [
                    {
                      "$type": "Keyword",
                      "value": "="
                    },
                    {
                      "$type": "Keyword",
                      "value": "+="
                    }
                  ]
                }
              },
              {
                "$type": "Keyword",
                "value": "current"
              }
            ],
            "cardinality": "?"
          },
          {
            "$type": "Keyword",
            "value": "}"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AbstractTerminal",
      "inferredType": {
        "$type": "InferredType",
        "name": "AbstractElement"
      },
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@22"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@23"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@40"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@32"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@33"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@41"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Keyword",
      "definition": {
        "$type": "Assignment",
        "feature": "value",
        "operator": "=",
        "terminal": {
          "$type": "RuleCall",
          "rule": {
            "$ref": "#/rules@58"
          },
          "arguments": []
        }
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "RuleCall",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "rule",
            "operator": "=",
            "terminal": {
              "$type": "CrossReference",
              "type": {
                "$ref": "#/rules@8"
              },
              "terminal": {
                "$type": "RuleCall",
                "rule": {
                  "$ref": "#/rules@57"
                },
                "arguments": []
              },
              "deprecatedSyntax": false
            }
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": "<"
              },
              {
                "$type": "Assignment",
                "feature": "arguments",
                "operator": "+=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@24"
                  },
                  "arguments": []
                }
              },
              {
                "$type": "Group",
                "elements": [
                  {
                    "$type": "Keyword",
                    "value": ","
                  },
                  {
                    "$type": "Assignment",
                    "feature": "arguments",
                    "operator": "+=",
                    "terminal": {
                      "$type": "RuleCall",
                      "rule": {
                        "$ref": "#/rules@24"
                      },
                      "arguments": []
                    }
                  }
                ],
                "cardinality": "*"
              },
              {
                "$type": "Keyword",
                "value": ">"
              }
            ],
            "cardinality": "?"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "NamedArgument",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Assignment",
                "feature": "parameter",
                "operator": "=",
                "terminal": {
                  "$type": "CrossReference",
                  "type": {
                    "$ref": "#/rules@13"
                  },
                  "terminal": {
                    "$type": "RuleCall",
                    "rule": {
                      "$ref": "#/rules@57"
                    },
                    "arguments": []
                  },
                  "deprecatedSyntax": false
                }
              },
              {
                "$type": "Assignment",
                "feature": "calledByName",
                "operator": "?=",
                "terminal": {
                  "$type": "Keyword",
                  "value": "="
                }
              }
            ],
            "cardinality": "?"
          },
          {
            "$type": "Assignment",
            "feature": "value",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@26"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "LiteralCondition",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "true",
            "operator": "?=",
            "terminal": {
              "$type": "Keyword",
              "value": "true"
            }
          },
          {
            "$type": "Keyword",
            "value": "false"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Disjunction",
      "inferredType": {
        "$type": "InferredType",
        "name": "Condition"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@27"
            },
            "arguments": []
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Action",
                "inferredType": {
                  "$type": "InferredType",
                  "name": "Disjunction"
                },
                "feature": "left",
                "operator": "="
              },
              {
                "$type": "Keyword",
                "value": "|"
              },
              {
                "$type": "Assignment",
                "feature": "right",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@27"
                  },
                  "arguments": []
                }
              }
            ],
            "cardinality": "*"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Conjunction",
      "inferredType": {
        "$type": "InferredType",
        "name": "Condition"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@28"
            },
            "arguments": []
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Action",
                "inferredType": {
                  "$type": "InferredType",
                  "name": "Conjunction"
                },
                "feature": "left",
                "operator": "="
              },
              {
                "$type": "Keyword",
                "value": "&"
              },
              {
                "$type": "Assignment",
                "feature": "right",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@28"
                  },
                  "arguments": []
                }
              }
            ],
            "cardinality": "*"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Negation",
      "inferredType": {
        "$type": "InferredType",
        "name": "Condition"
      },
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@29"
            },
            "arguments": []
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Action",
                "inferredType": {
                  "$type": "InferredType",
                  "name": "Negation"
                }
              },
              {
                "$type": "Keyword",
                "value": "!"
              },
              {
                "$type": "Assignment",
                "feature": "value",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@28"
                  },
                  "arguments": []
                }
              }
            ]
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Atom",
      "inferredType": {
        "$type": "InferredType",
        "name": "Condition"
      },
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@31"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@30"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@25"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "ParenthesizedCondition",
      "inferredType": {
        "$type": "InferredType",
        "name": "Condition"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "("
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@26"
            },
            "arguments": []
          },
          {
            "$type": "Keyword",
            "value": ")"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "ParameterReference",
      "definition": {
        "$type": "Assignment",
        "feature": "parameter",
        "operator": "=",
        "terminal": {
          "$type": "CrossReference",
          "type": {
            "$ref": "#/rules@13"
          },
          "terminal": {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@57"
            },
            "arguments": []
          },
          "deprecatedSyntax": false
        }
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "PredicatedKeyword",
      "inferredType": {
        "$type": "InferredType",
        "name": "Keyword"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Alternatives",
            "elements": [
              {
                "$type": "Keyword",
                "value": "=>"
              },
              {
                "$type": "Keyword",
                "value": "->"
              }
            ]
          },
          {
            "$type": "Assignment",
            "feature": "value",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@58"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "PredicatedRuleCall",
      "inferredType": {
        "$type": "InferredType",
        "name": "RuleCall"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Alternatives",
            "elements": [
              {
                "$type": "Keyword",
                "value": "=>"
              },
              {
                "$type": "Keyword",
                "value": "->"
              }
            ]
          },
          {
            "$type": "Assignment",
            "feature": "rule",
            "operator": "=",
            "terminal": {
              "$type": "CrossReference",
              "type": {
                "$ref": "#/rules@8"
              },
              "terminal": {
                "$type": "RuleCall",
                "rule": {
                  "$ref": "#/rules@57"
                },
                "arguments": []
              },
              "deprecatedSyntax": false
            }
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": "<"
              },
              {
                "$type": "Assignment",
                "feature": "arguments",
                "operator": "+=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@24"
                  },
                  "arguments": []
                }
              },
              {
                "$type": "Group",
                "elements": [
                  {
                    "$type": "Keyword",
                    "value": ","
                  },
                  {
                    "$type": "Assignment",
                    "feature": "arguments",
                    "operator": "+=",
                    "terminal": {
                      "$type": "RuleCall",
                      "rule": {
                        "$ref": "#/rules@24"
                      },
                      "arguments": []
                    }
                  }
                ],
                "cardinality": "*"
              },
              {
                "$type": "Keyword",
                "value": ">"
              }
            ],
            "cardinality": "?"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Assignment",
      "inferredType": {
        "$type": "InferredType",
        "name": "AbstractElement"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Action",
            "inferredType": {
              "$type": "InferredType",
              "name": "Assignment"
            }
          },
          {
            "$type": "Alternatives",
            "elements": [
              {
                "$type": "Keyword",
                "value": "=>"
              },
              {
                "$type": "Keyword",
                "value": "->"
              }
            ],
            "cardinality": "?"
          },
          {
            "$type": "Assignment",
            "feature": "feature",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@56"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "operator",
            "operator": "=",
            "terminal": {
              "$type": "Alternatives",
              "elements": [
                {
                  "$type": "Keyword",
                  "value": "+="
                },
                {
                  "$type": "Keyword",
                  "value": "="
                },
                {
                  "$type": "Keyword",
                  "value": "?="
                }
              ]
            }
          },
          {
            "$type": "Assignment",
            "feature": "terminal",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@35"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AssignableTerminal",
      "inferredType": {
        "$type": "InferredType",
        "name": "AbstractElement"
      },
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@22"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@23"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@36"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@38"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "ParenthesizedAssignableElement",
      "inferredType": {
        "$type": "InferredType",
        "name": "AbstractElement"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "("
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@37"
            },
            "arguments": []
          },
          {
            "$type": "Keyword",
            "value": ")"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AssignableAlternatives",
      "inferredType": {
        "$type": "InferredType",
        "name": "AbstractElement"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@35"
            },
            "arguments": []
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Action",
                "inferredType": {
                  "$type": "InferredType",
                  "name": "Alternatives"
                },
                "feature": "elements",
                "operator": "+="
              },
              {
                "$type": "Group",
                "elements": [
                  {
                    "$type": "Keyword",
                    "value": "|"
                  },
                  {
                    "$type": "Assignment",
                    "feature": "elements",
                    "operator": "+=",
                    "terminal": {
                      "$type": "RuleCall",
                      "rule": {
                        "$ref": "#/rules@35"
                      },
                      "arguments": []
                    }
                  }
                ],
                "cardinality": "+"
              }
            ],
            "cardinality": "?"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "CrossReference",
      "inferredType": {
        "$type": "InferredType",
        "name": "AbstractElement"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Action",
            "inferredType": {
              "$type": "InferredType",
              "name": "CrossReference"
            }
          },
          {
            "$type": "Keyword",
            "value": "["
          },
          {
            "$type": "Assignment",
            "feature": "type",
            "operator": "=",
            "terminal": {
              "$type": "CrossReference",
              "type": {
                "$ref": "#/types@0"
              },
              "deprecatedSyntax": false
            }
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Alternatives",
                "elements": [
                  {
                    "$type": "Assignment",
                    "feature": "deprecatedSyntax",
                    "operator": "?=",
                    "terminal": {
                      "$type": "Keyword",
                      "value": "|"
                    }
                  },
                  {
                    "$type": "Keyword",
                    "value": ":"
                  }
                ]
              },
              {
                "$type": "Assignment",
                "feature": "terminal",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@39"
                  },
                  "arguments": []
                }
              }
            ],
            "cardinality": "?"
          },
          {
            "$type": "Keyword",
            "value": "]"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "CrossReferenceableTerminal",
      "inferredType": {
        "$type": "InferredType",
        "name": "AbstractElement"
      },
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@22"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@23"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "ParenthesizedElement",
      "inferredType": {
        "$type": "InferredType",
        "name": "AbstractElement"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "("
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@14"
            },
            "arguments": []
          },
          {
            "$type": "Keyword",
            "value": ")"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "PredicatedGroup",
      "inferredType": {
        "$type": "InferredType",
        "name": "Group"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Alternatives",
            "elements": [
              {
                "$type": "Keyword",
                "value": "=>"
              },
              {
                "$type": "Keyword",
                "value": "->"
              }
            ]
          },
          {
            "$type": "Keyword",
            "value": "("
          },
          {
            "$type": "Assignment",
            "feature": "elements",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@14"
              },
              "arguments": []
            }
          },
          {
            "$type": "Keyword",
            "value": ")"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "ReturnType",
      "definition": {
        "$type": "Assignment",
        "feature": "name",
        "operator": "=",
        "terminal": {
          "$type": "Alternatives",
          "elements": [
            {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@6"
              },
              "arguments": []
            },
            {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@57"
              },
              "arguments": []
            }
          ]
        }
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "TerminalRule",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "hidden",
            "operator": "?=",
            "terminal": {
              "$type": "Keyword",
              "value": "hidden"
            },
            "cardinality": "?"
          },
          {
            "$type": "Keyword",
            "value": "terminal"
          },
          {
            "$type": "Alternatives",
            "elements": [
              {
                "$type": "Group",
                "elements": [
                  {
                    "$type": "Assignment",
                    "feature": "fragment",
                    "operator": "?=",
                    "terminal": {
                      "$type": "Keyword",
                      "value": "fragment"
                    }
                  },
                  {
                    "$type": "Assignment",
                    "feature": "name",
                    "operator": "=",
                    "terminal": {
                      "$type": "RuleCall",
                      "rule": {
                        "$ref": "#/rules@57"
                      },
                      "arguments": []
                    }
                  }
                ]
              },
              {
                "$type": "Group",
                "elements": [
                  {
                    "$type": "Assignment",
                    "feature": "name",
                    "operator": "=",
                    "terminal": {
                      "$type": "RuleCall",
                      "rule": {
                        "$ref": "#/rules@57"
                      },
                      "arguments": []
                    }
                  },
                  {
                    "$type": "Group",
                    "elements": [
                      {
                        "$type": "Keyword",
                        "value": "returns"
                      },
                      {
                        "$type": "Assignment",
                        "feature": "type",
                        "operator": "=",
                        "terminal": {
                          "$type": "RuleCall",
                          "rule": {
                            "$ref": "#/rules@42"
                          },
                          "arguments": []
                        }
                      }
                    ],
                    "cardinality": "?"
                  }
                ]
              }
            ]
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Assignment",
            "feature": "definition",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@45"
              },
              "arguments": []
            }
          },
          {
            "$type": "Keyword",
            "value": ";"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "TerminalRule",
      "name": "RegexLiteral",
      "type": {
        "$type": "ReturnType",
        "name": "string"
      },
      "definition": {
        "$type": "RegexToken",
        "regex": "\\\\/(?![*+?])(?:[^\\\\r\\\\n\\\\[/\\\\\\\\]|\\\\\\\\.|\\\\[(?:[^\\\\r\\\\n\\\\]\\\\\\\\]|\\\\\\\\.)*\\\\])+\\\\/"
      },
      "fragment": false,
      "hidden": false
    },
    {
      "$type": "ParserRule",
      "name": "TerminalAlternatives",
      "inferredType": {
        "$type": "InferredType",
        "name": "AbstractElement"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@46"
            },
            "arguments": []
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Action",
                "inferredType": {
                  "$type": "InferredType",
                  "name": "TerminalAlternatives"
                },
                "feature": "elements",
                "operator": "+="
              },
              {
                "$type": "Keyword",
                "value": "|"
              },
              {
                "$type": "Assignment",
                "feature": "elements",
                "operator": "+=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@46"
                  },
                  "arguments": []
                }
              }
            ],
            "cardinality": "*"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "TerminalGroup",
      "inferredType": {
        "$type": "InferredType",
        "name": "AbstractElement"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@47"
            },
            "arguments": []
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Action",
                "inferredType": {
                  "$type": "InferredType",
                  "name": "TerminalGroup"
                },
                "feature": "elements",
                "operator": "+="
              },
              {
                "$type": "Assignment",
                "feature": "elements",
                "operator": "+=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@47"
                  },
                  "arguments": []
                },
                "cardinality": "+"
              }
            ],
            "cardinality": "?"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "TerminalToken",
      "inferredType": {
        "$type": "InferredType",
        "name": "AbstractElement"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@48"
            },
            "arguments": []
          },
          {
            "$type": "Assignment",
            "feature": "cardinality",
            "operator": "=",
            "terminal": {
              "$type": "Alternatives",
              "elements": [
                {
                  "$type": "Keyword",
                  "value": "?"
                },
                {
                  "$type": "Keyword",
                  "value": "*"
                },
                {
                  "$type": "Keyword",
                  "value": "+"
                }
              ]
            },
            "cardinality": "?"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "TerminalTokenElement",
      "inferredType": {
        "$type": "InferredType",
        "name": "AbstractElement"
      },
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@55"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@50"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@49"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@51"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@52"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@53"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@54"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "ParenthesizedTerminalElement",
      "inferredType": {
        "$type": "InferredType",
        "name": "AbstractElement"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "("
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@45"
            },
            "arguments": []
          },
          {
            "$type": "Keyword",
            "value": ")"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "TerminalRuleCall",
      "inferredType": {
        "$type": "InferredType",
        "name": "AbstractElement"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Action",
            "inferredType": {
              "$type": "InferredType",
              "name": "TerminalRuleCall"
            }
          },
          {
            "$type": "Assignment",
            "feature": "rule",
            "operator": "=",
            "terminal": {
              "$type": "CrossReference",
              "type": {
                "$ref": "#/rules@43"
              },
              "terminal": {
                "$type": "RuleCall",
                "rule": {
                  "$ref": "#/rules@57"
                },
                "arguments": []
              },
              "deprecatedSyntax": false
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "NegatedToken",
      "inferredType": {
        "$type": "InferredType",
        "name": "AbstractElement"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Action",
            "inferredType": {
              "$type": "InferredType",
              "name": "NegatedToken"
            }
          },
          {
            "$type": "Keyword",
            "value": "!"
          },
          {
            "$type": "Assignment",
            "feature": "terminal",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@48"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "UntilToken",
      "inferredType": {
        "$type": "InferredType",
        "name": "AbstractElement"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Action",
            "inferredType": {
              "$type": "InferredType",
              "name": "UntilToken"
            }
          },
          {
            "$type": "Keyword",
            "value": "->"
          },
          {
            "$type": "Assignment",
            "feature": "terminal",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@48"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "RegexToken",
      "inferredType": {
        "$type": "InferredType",
        "name": "AbstractElement"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Action",
            "inferredType": {
              "$type": "InferredType",
              "name": "RegexToken"
            }
          },
          {
            "$type": "Assignment",
            "feature": "regex",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@44"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Wildcard",
      "inferredType": {
        "$type": "InferredType",
        "name": "AbstractElement"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Action",
            "inferredType": {
              "$type": "InferredType",
              "name": "Wildcard"
            }
          },
          {
            "$type": "Keyword",
            "value": "."
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "CharacterRange",
      "inferredType": {
        "$type": "InferredType",
        "name": "AbstractElement"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Action",
            "inferredType": {
              "$type": "InferredType",
              "name": "CharacterRange"
            }
          },
          {
            "$type": "Assignment",
            "feature": "left",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@22"
              },
              "arguments": []
            }
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": ".."
              },
              {
                "$type": "Assignment",
                "feature": "right",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@22"
                  },
                  "arguments": []
                }
              }
            ],
            "cardinality": "?"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "FeatureName",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "current"
          },
          {
            "$type": "Keyword",
            "value": "entry"
          },
          {
            "$type": "Keyword",
            "value": "extends"
          },
          {
            "$type": "Keyword",
            "value": "false"
          },
          {
            "$type": "Keyword",
            "value": "fragment"
          },
          {
            "$type": "Keyword",
            "value": "grammar"
          },
          {
            "$type": "Keyword",
            "value": "hidden"
          },
          {
            "$type": "Keyword",
            "value": "import"
          },
          {
            "$type": "Keyword",
            "value": "interface"
          },
          {
            "$type": "Keyword",
            "value": "returns"
          },
          {
            "$type": "Keyword",
            "value": "terminal"
          },
          {
            "$type": "Keyword",
            "value": "true"
          },
          {
            "$type": "Keyword",
            "value": "type"
          },
          {
            "$type": "Keyword",
            "value": "infer"
          },
          {
            "$type": "Keyword",
            "value": "infers"
          },
          {
            "$type": "Keyword",
            "value": "with"
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@6"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@57"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "TerminalRule",
      "name": "ID",
      "definition": {
        "$type": "RegexToken",
        "regex": "\\\\^?[_a-zA-Z][\\\\w_]*"
      },
      "fragment": false,
      "hidden": false
    },
    {
      "$type": "TerminalRule",
      "name": "STRING",
      "definition": {
        "$type": "RegexToken",
        "regex": "\\"[^\\"]*\\"|'[^']*'"
      },
      "fragment": false,
      "hidden": false
    },
    {
      "$type": "TerminalRule",
      "hidden": true,
      "name": "WS",
      "definition": {
        "$type": "RegexToken",
        "regex": "\\\\s+"
      },
      "fragment": false
    },
    {
      "$type": "TerminalRule",
      "hidden": true,
      "name": "ML_COMMENT",
      "definition": {
        "$type": "RegexToken",
        "regex": "\\\\/\\\\*[\\\\s\\\\S]*?\\\\*\\\\/"
      },
      "fragment": false
    },
    {
      "$type": "TerminalRule",
      "hidden": true,
      "name": "SL_COMMENT",
      "definition": {
        "$type": "RegexToken",
        "regex": "\\\\/\\\\/[^\\\\n\\\\r]*"
      },
      "fragment": false
    }
  ],
  "types": [
    {
      "$type": "Type",
      "typeAlternatives": [
        {
          "$type": "AtomType",
          "refType": {
            "$ref": "#/rules@1"
          },
          "isArray": false,
          "isRef": false
        },
        {
          "$type": "AtomType",
          "refType": {
            "$ref": "#/rules@7"
          },
          "isArray": false,
          "isRef": false
        },
        {
          "$type": "AtomType",
          "refType": {
            "$ref": "#/rules@20/definition/elements@0"
          },
          "isArray": false,
          "isRef": false
        },
        {
          "$type": "AtomType",
          "refType": {
            "$ref": "#/rules@10"
          },
          "isArray": false,
          "isRef": false
        }
      ],
      "name": "AbstractType"
    }
  ],
  "definesHiddenTokens": false,
  "hiddenTokens": [],
  "imports": [],
  "interfaces": [],
  "usedGrammars": []
}`));Zd.LangiumGrammarGrammar=u2});var vS=h(Rn=>{"use strict";Object.defineProperty(Rn,"__esModule",{value:!0});Rn.LangiumGrammarGeneratedModule=Rn.LangiumGrammarGeneratedSharedModule=Rn.LangiumGrammarParserConfig=Rn.LangiumGrammarLanguageMetaData=void 0;var c2=Ke(),l2=yS();Rn.LangiumGrammarLanguageMetaData={languageId:"langium",fileExtensions:[".langium"],caseInsensitive:!1};Rn.LangiumGrammarParserConfig={maxLookahead:3};Rn.LangiumGrammarGeneratedSharedModule={AstReflection:()=>new c2.LangiumGrammarAstReflection};Rn.LangiumGrammarGeneratedModule={Grammar:()=>(0,l2.LangiumGrammarGrammar)(),LanguageMetaData:()=>Rn.LangiumGrammarLanguageMetaData,parser:{ParserConfig:()=>Rn.LangiumGrammarParserConfig}}});var io=h(My=>{"use strict";Object.defineProperty(My,"__esModule",{value:!0});var xy;function Ly(){if(xy===void 0)throw new Error("No runtime abstraction layer installed");return xy}(function(t){function e(r){if(r===void 0)throw new Error("No runtime abstraction layer provided");xy=r}t.install=e})(Ly||(Ly={}));My.default=Ly});var $y=h(Ec=>{"use strict";Object.defineProperty(Ec,"__esModule",{value:!0});Ec.Disposable=void 0;var d2;(function(t){function e(r){return{dispose:r}}t.create=e})(d2=Ec.Disposable||(Ec.Disposable={}))});var Sa=h(Pa=>{"use strict";Object.defineProperty(Pa,"__esModule",{value:!0});Pa.Emitter=Pa.Event=void 0;var f2=io(),p2;(function(t){let e={dispose(){}};t.None=function(){return e}})(p2=Pa.Event||(Pa.Event={}));var Fy=class{add(e,r=null,n){this._callbacks||(this._callbacks=[],this._contexts=[]),this._callbacks.push(e),this._contexts.push(r),Array.isArray(n)&&n.push({dispose:()=>this.remove(e,r)})}remove(e,r=null){if(!this._callbacks)return;let n=!1;for(let i=0,o=this._callbacks.length;i<o;i++)if(this._callbacks[i]===e)if(this._contexts[i]===r){this._callbacks.splice(i,1),this._contexts.splice(i,1);return}else n=!0;if(n)throw new Error("When adding a listener with a context, you should remove it with the same context")}invoke(...e){if(!this._callbacks)return[];let r=[],n=this._callbacks.slice(0),i=this._contexts.slice(0);for(let o=0,a=n.length;o<a;o++)try{r.push(n[o].apply(i[o],e))}catch(s){(0,f2.default)().console.error(s)}return r}isEmpty(){return!this._callbacks||this._callbacks.length===0}dispose(){this._callbacks=void 0,this._contexts=void 0}},ef=class t{constructor(e){this._options=e}get event(){return this._event||(this._event=(e,r,n)=>{this._callbacks||(this._callbacks=new Fy),this._options&&this._options.onFirstListenerAdd&&this._callbacks.isEmpty()&&this._options.onFirstListenerAdd(this),this._callbacks.add(e,r);let i={dispose:()=>{this._callbacks&&(this._callbacks.remove(e,r),i.dispose=t._noop,this._options&&this._options.onLastListenerRemove&&this._callbacks.isEmpty()&&this._options.onLastListenerRemove(this))}};return Array.isArray(n)&&n.push(i),i}),this._event}fire(e){this._callbacks&&this._callbacks.invoke.call(this._callbacks,e)}dispose(){this._callbacks&&(this._callbacks.dispose(),this._callbacks=void 0)}};Pa.Emitter=ef;ef._noop=function(){}});var _S=h(tf=>{"use strict";Object.defineProperty(tf,"__esModule",{value:!0});tf.AbstractMessageBuffer=void 0;var h2=13,m2=10,g2=`\r
`,jy=class{constructor(e="utf-8"){this._encoding=e,this._chunks=[],this._totalLength=0}get encoding(){return this._encoding}append(e){let r=typeof e=="string"?this.fromString(e,this._encoding):e;this._chunks.push(r),this._totalLength+=r.byteLength}tryReadHeaders(){if(this._chunks.length===0)return;let e=0,r=0,n=0,i=0;e:for(;r<this._chunks.length;){let u=this._chunks[r];for(n=0;n<u.length;){switch(u[n]){case h2:switch(e){case 0:e=1;break;case 2:e=3;break;default:e=0}break;case m2:switch(e){case 1:e=2;break;case 3:e=4,n++;break e;default:e=0}break;default:e=0}n++}i+=u.byteLength,r++}if(e!==4)return;let o=this._read(i+n),a=new Map,s=this.toString(o,"ascii").split(g2);if(s.length<2)return a;for(let u=0;u<s.length-2;u++){let d=s[u],p=d.indexOf(":");if(p===-1)throw new Error("Message header must separate key and value using :");let m=d.substr(0,p),v=d.substr(p+1).trim();a.set(m,v)}return a}tryReadBody(e){if(!(this._totalLength<e))return this._read(e)}get numberOfBytes(){return this._totalLength}_read(e){if(e===0)return this.emptyBuffer();if(e>this._totalLength)throw new Error("Cannot read so many bytes!");if(this._chunks[0].byteLength===e){let o=this._chunks[0];return this._chunks.shift(),this._totalLength-=e,this.asNative(o)}if(this._chunks[0].byteLength>e){let o=this._chunks[0],a=this.asNative(o,e);return this._chunks[0]=o.slice(e),this._totalLength-=e,a}let r=this.allocNative(e),n=0,i=0;for(;e>0;){let o=this._chunks[i];if(o.byteLength>e){let a=o.slice(0,e);r.set(a,n),n+=e,this._chunks[i]=o.slice(e),this._totalLength-=e,e-=e}else r.set(o,n),n+=o.byteLength,this._chunks.shift(),this._totalLength-=o.byteLength,e-=o.byteLength}return r}};tf.AbstractMessageBuffer=jy});var bS=h(Wy=>{"use strict";Object.defineProperty(Wy,"__esModule",{value:!0});var TS=io(),bs=$y(),y2=Sa(),v2=_S(),rf=class t extends v2.AbstractMessageBuffer{constructor(e="utf-8"){super(e),this.asciiDecoder=new TextDecoder("ascii")}emptyBuffer(){return t.emptyBuffer}fromString(e,r){return new TextEncoder().encode(e)}toString(e,r){return r==="ascii"?this.asciiDecoder.decode(e):new TextDecoder(r).decode(e)}asNative(e,r){return r===void 0?e:e.slice(0,r)}allocNative(e){return new Uint8Array(e)}};rf.emptyBuffer=new Uint8Array(0);var Uy=class{constructor(e){this.socket=e,this._onData=new y2.Emitter,this._messageListener=r=>{r.data.arrayBuffer().then(i=>{this._onData.fire(new Uint8Array(i))},()=>{(0,TS.default)().console.error("Converting blob to array buffer failed.")})},this.socket.addEventListener("message",this._messageListener)}onClose(e){return this.socket.addEventListener("close",e),bs.Disposable.create(()=>this.socket.removeEventListener("close",e))}onError(e){return this.socket.addEventListener("error",e),bs.Disposable.create(()=>this.socket.removeEventListener("error",e))}onEnd(e){return this.socket.addEventListener("end",e),bs.Disposable.create(()=>this.socket.removeEventListener("end",e))}onData(e){return this._onData.event(e)}},Gy=class{constructor(e){this.socket=e}onClose(e){return this.socket.addEventListener("close",e),bs.Disposable.create(()=>this.socket.removeEventListener("close",e))}onError(e){return this.socket.addEventListener("error",e),bs.Disposable.create(()=>this.socket.removeEventListener("error",e))}onEnd(e){return this.socket.addEventListener("end",e),bs.Disposable.create(()=>this.socket.removeEventListener("end",e))}write(e,r){if(typeof e=="string"){if(r!==void 0&&r!=="utf-8")throw new Error(`In a Browser environments only utf-8 text encoding is supported. But got encoding: ${r}`);this.socket.send(e)}else this.socket.send(e);return Promise.resolve()}end(){this.socket.close()}},_2=new TextEncoder,RS=Object.freeze({messageBuffer:Object.freeze({create:t=>new rf(t)}),applicationJson:Object.freeze({encoder:Object.freeze({name:"application/json",encode:(t,e)=>{if(e.charset!=="utf-8")throw new Error(`In a Browser environments only utf-8 text encoding is supported. But got encoding: ${e.charset}`);return Promise.resolve(_2.encode(JSON.stringify(t,void 0,0)))}}),decoder:Object.freeze({name:"application/json",decode:(t,e)=>{if(!(t instanceof Uint8Array))throw new Error("In a Browser environments only Uint8Arrays are supported.");return Promise.resolve(JSON.parse(new TextDecoder(e.charset).decode(t)))}})}),stream:Object.freeze({asReadableStream:t=>new Uy(t),asWritableStream:t=>new Gy(t)}),console,timer:Object.freeze({setTimeout(t,e,...r){let n=setTimeout(t,e,...r);return{dispose:()=>clearTimeout(n)}},setImmediate(t,...e){let r=setTimeout(t,0,...e);return{dispose:()=>clearTimeout(r)}},setInterval(t,e,...r){let n=setInterval(t,e,...r);return{dispose:()=>clearInterval(n)}}})});function Hy(){return RS}(function(t){function e(){TS.default.install(RS)}t.install=e})(Hy||(Hy={}));Wy.default=Hy});var Cs=h(Pr=>{"use strict";Object.defineProperty(Pr,"__esModule",{value:!0});Pr.stringArray=Pr.array=Pr.func=Pr.error=Pr.number=Pr.string=Pr.boolean=void 0;function T2(t){return t===!0||t===!1}Pr.boolean=T2;function CS(t){return typeof t=="string"||t instanceof String}Pr.string=CS;function R2(t){return typeof t=="number"||t instanceof Number}Pr.number=R2;function b2(t){return t instanceof Error}Pr.error=b2;function C2(t){return typeof t=="function"}Pr.func=C2;function AS(t){return Array.isArray(t)}Pr.array=AS;function A2(t){return AS(t)&&t.every(e=>CS(e))}Pr.stringArray=A2});var hv=h(ue=>{"use strict";Object.defineProperty(ue,"__esModule",{value:!0});ue.Message=ue.NotificationType9=ue.NotificationType8=ue.NotificationType7=ue.NotificationType6=ue.NotificationType5=ue.NotificationType4=ue.NotificationType3=ue.NotificationType2=ue.NotificationType1=ue.NotificationType0=ue.NotificationType=ue.RequestType9=ue.RequestType8=ue.RequestType7=ue.RequestType6=ue.RequestType5=ue.RequestType4=ue.RequestType3=ue.RequestType2=ue.RequestType1=ue.RequestType=ue.RequestType0=ue.AbstractMessageSignature=ue.ParameterStructures=ue.ResponseError=ue.ErrorCodes=void 0;var Ea=Cs(),PS;(function(t){t.ParseError=-32700,t.InvalidRequest=-32600,t.MethodNotFound=-32601,t.InvalidParams=-32602,t.InternalError=-32603,t.jsonrpcReservedErrorRangeStart=-32099,t.serverErrorStart=-32099,t.MessageWriteError=-32099,t.MessageReadError=-32098,t.PendingResponseRejected=-32097,t.ConnectionInactive=-32096,t.ServerNotInitialized=-32002,t.UnknownErrorCode=-32001,t.jsonrpcReservedErrorRangeEnd=-32e3,t.serverErrorEnd=-32e3})(PS=ue.ErrorCodes||(ue.ErrorCodes={}));var Ky=class t extends Error{constructor(e,r,n){super(r),this.code=Ea.number(e)?e:PS.UnknownErrorCode,this.data=n,Object.setPrototypeOf(this,t.prototype)}toJson(){let e={code:this.code,message:this.message};return this.data!==void 0&&(e.data=this.data),e}};ue.ResponseError=Ky;var Jr=class t{constructor(e){this.kind=e}static is(e){return e===t.auto||e===t.byName||e===t.byPosition}toString(){return this.kind}};ue.ParameterStructures=Jr;Jr.auto=new Jr("auto");Jr.byPosition=new Jr("byPosition");Jr.byName=new Jr("byName");var ct=class{constructor(e,r){this.method=e,this.numberOfParams=r}get parameterStructures(){return Jr.auto}};ue.AbstractMessageSignature=ct;var By=class extends ct{constructor(e){super(e,0)}};ue.RequestType0=By;var zy=class extends ct{constructor(e,r=Jr.auto){super(e,1),this._parameterStructures=r}get parameterStructures(){return this._parameterStructures}};ue.RequestType=zy;var Vy=class extends ct{constructor(e,r=Jr.auto){super(e,1),this._parameterStructures=r}get parameterStructures(){return this._parameterStructures}};ue.RequestType1=Vy;var Yy=class extends ct{constructor(e){super(e,2)}};ue.RequestType2=Yy;var Xy=class extends ct{constructor(e){super(e,3)}};ue.RequestType3=Xy;var Jy=class extends ct{constructor(e){super(e,4)}};ue.RequestType4=Jy;var Qy=class extends ct{constructor(e){super(e,5)}};ue.RequestType5=Qy;var Zy=class extends ct{constructor(e){super(e,6)}};ue.RequestType6=Zy;var ev=class extends ct{constructor(e){super(e,7)}};ue.RequestType7=ev;var tv=class extends ct{constructor(e){super(e,8)}};ue.RequestType8=tv;var rv=class extends ct{constructor(e){super(e,9)}};ue.RequestType9=rv;var nv=class extends ct{constructor(e,r=Jr.auto){super(e,1),this._parameterStructures=r}get parameterStructures(){return this._parameterStructures}};ue.NotificationType=nv;var iv=class extends ct{constructor(e){super(e,0)}};ue.NotificationType0=iv;var ov=class extends ct{constructor(e,r=Jr.auto){super(e,1),this._parameterStructures=r}get parameterStructures(){return this._parameterStructures}};ue.NotificationType1=ov;var av=class extends ct{constructor(e){super(e,2)}};ue.NotificationType2=av;var sv=class extends ct{constructor(e){super(e,3)}};ue.NotificationType3=sv;var uv=class extends ct{constructor(e){super(e,4)}};ue.NotificationType4=uv;var cv=class extends ct{constructor(e){super(e,5)}};ue.NotificationType5=cv;var lv=class extends ct{constructor(e){super(e,6)}};ue.NotificationType6=lv;var dv=class extends ct{constructor(e){super(e,7)}};ue.NotificationType7=dv;var fv=class extends ct{constructor(e){super(e,8)}};ue.NotificationType8=fv;var pv=class extends ct{constructor(e){super(e,9)}};ue.NotificationType9=pv;var P2;(function(t){function e(i){let o=i;return o&&Ea.string(o.method)&&(Ea.string(o.id)||Ea.number(o.id))}t.isRequest=e;function r(i){let o=i;return o&&Ea.string(o.method)&&i.id===void 0}t.isNotification=r;function n(i){let o=i;return o&&(o.result!==void 0||!!o.error)&&(Ea.string(o.id)||Ea.number(o.id)||o.id===null)}t.isResponse=n})(P2=ue.Message||(ue.Message={}))});var gv=h(oo=>{"use strict";var SS;Object.defineProperty(oo,"__esModule",{value:!0});oo.LRUCache=oo.LinkedMap=oo.Touch=void 0;var Lr;(function(t){t.None=0,t.First=1,t.AsOld=t.First,t.Last=2,t.AsNew=t.Last})(Lr=oo.Touch||(oo.Touch={}));var nf=class{constructor(){this[SS]="LinkedMap",this._map=new Map,this._head=void 0,this._tail=void 0,this._size=0,this._state=0}clear(){this._map.clear(),this._head=void 0,this._tail=void 0,this._size=0,this._state++}isEmpty(){return!this._head&&!this._tail}get size(){return this._size}get first(){return this._head?.value}get last(){return this._tail?.value}has(e){return this._map.has(e)}get(e,r=Lr.None){let n=this._map.get(e);if(n)return r!==Lr.None&&this.touch(n,r),n.value}set(e,r,n=Lr.None){let i=this._map.get(e);if(i)i.value=r,n!==Lr.None&&this.touch(i,n);else{switch(i={key:e,value:r,next:void 0,previous:void 0},n){case Lr.None:this.addItemLast(i);break;case Lr.First:this.addItemFirst(i);break;case Lr.Last:this.addItemLast(i);break;default:this.addItemLast(i);break}this._map.set(e,i),this._size++}return this}delete(e){return!!this.remove(e)}remove(e){let r=this._map.get(e);if(r)return this._map.delete(e),this.removeItem(r),this._size--,r.value}shift(){if(!this._head&&!this._tail)return;if(!this._head||!this._tail)throw new Error("Invalid list");let e=this._head;return this._map.delete(e.key),this.removeItem(e),this._size--,e.value}forEach(e,r){let n=this._state,i=this._head;for(;i;){if(r?e.bind(r)(i.value,i.key,this):e(i.value,i.key,this),this._state!==n)throw new Error("LinkedMap got modified during iteration.");i=i.next}}keys(){let e=this._state,r=this._head,n={[Symbol.iterator]:()=>n,next:()=>{if(this._state!==e)throw new Error("LinkedMap got modified during iteration.");if(r){let i={value:r.key,done:!1};return r=r.next,i}else return{value:void 0,done:!0}}};return n}values(){let e=this._state,r=this._head,n={[Symbol.iterator]:()=>n,next:()=>{if(this._state!==e)throw new Error("LinkedMap got modified during iteration.");if(r){let i={value:r.value,done:!1};return r=r.next,i}else return{value:void 0,done:!0}}};return n}entries(){let e=this._state,r=this._head,n={[Symbol.iterator]:()=>n,next:()=>{if(this._state!==e)throw new Error("LinkedMap got modified during iteration.");if(r){let i={value:[r.key,r.value],done:!1};return r=r.next,i}else return{value:void 0,done:!0}}};return n}[(SS=Symbol.toStringTag,Symbol.iterator)](){return this.entries()}trimOld(e){if(e>=this.size)return;if(e===0){this.clear();return}let r=this._head,n=this.size;for(;r&&n>e;)this._map.delete(r.key),r=r.next,n--;this._head=r,this._size=n,r&&(r.previous=void 0),this._state++}addItemFirst(e){if(!this._head&&!this._tail)this._tail=e;else if(this._head)e.next=this._head,this._head.previous=e;else throw new Error("Invalid list");this._head=e,this._state++}addItemLast(e){if(!this._head&&!this._tail)this._head=e;else if(this._tail)e.previous=this._tail,this._tail.next=e;else throw new Error("Invalid list");this._tail=e,this._state++}removeItem(e){if(e===this._head&&e===this._tail)this._head=void 0,this._tail=void 0;else if(e===this._head){if(!e.next)throw new Error("Invalid list");e.next.previous=void 0,this._head=e.next}else if(e===this._tail){if(!e.previous)throw new Error("Invalid list");e.previous.next=void 0,this._tail=e.previous}else{let r=e.next,n=e.previous;if(!r||!n)throw new Error("Invalid list");r.previous=n,n.next=r}e.next=void 0,e.previous=void 0,this._state++}touch(e,r){if(!this._head||!this._tail)throw new Error("Invalid list");if(!(r!==Lr.First&&r!==Lr.Last)){if(r===Lr.First){if(e===this._head)return;let n=e.next,i=e.previous;e===this._tail?(i.next=void 0,this._tail=i):(n.previous=i,i.next=n),e.previous=void 0,e.next=this._head,this._head.previous=e,this._head=e,this._state++}else if(r===Lr.Last){if(e===this._tail)return;let n=e.next,i=e.previous;e===this._head?(n.previous=void 0,this._head=n):(n.previous=i,i.next=n),e.next=void 0,e.previous=this._tail,this._tail.next=e,this._tail=e,this._state++}}}toJSON(){let e=[];return this.forEach((r,n)=>{e.push([n,r])}),e}fromJSON(e){this.clear();for(let[r,n]of e)this.set(r,n)}};oo.LinkedMap=nf;var mv=class extends nf{constructor(e,r=1){super(),this._limit=e,this._ratio=Math.min(Math.max(0,r),1)}get limit(){return this._limit}set limit(e){this._limit=e,this.checkTrim()}get ratio(){return this._ratio}set ratio(e){this._ratio=Math.min(Math.max(0,e),1),this.checkTrim()}get(e,r=Lr.AsNew){return super.get(e,r)}peek(e){return super.get(e,Lr.None)}set(e,r){return super.set(e,r,Lr.Last),this.checkTrim(),this}checkTrim(){this.size>this._limit&&this.trimOld(Math.round(this._limit*this._ratio))}};oo.LRUCache=mv});var Tv=h(ka=>{"use strict";Object.defineProperty(ka,"__esModule",{value:!0});ka.CancellationTokenSource=ka.CancellationToken=void 0;var S2=io(),E2=Cs(),yv=Sa(),vv;(function(t){t.None=Object.freeze({isCancellationRequested:!1,onCancellationRequested:yv.Event.None}),t.Cancelled=Object.freeze({isCancellationRequested:!0,onCancellationRequested:yv.Event.None});function e(r){let n=r;return n&&(n===t.None||n===t.Cancelled||E2.boolean(n.isCancellationRequested)&&!!n.onCancellationRequested)}t.is=e})(vv=ka.CancellationToken||(ka.CancellationToken={}));var k2=Object.freeze(function(t,e){let r=(0,S2.default)().timer.setTimeout(t.bind(e),0);return{dispose(){r.dispose()}}}),of=class{constructor(){this._isCancelled=!1}cancel(){this._isCancelled||(this._isCancelled=!0,this._emitter&&(this._emitter.fire(void 0),this.dispose()))}get isCancellationRequested(){return this._isCancelled}get onCancellationRequested(){return this._isCancelled?k2:(this._emitter||(this._emitter=new yv.Emitter),this._emitter.event)}dispose(){this._emitter&&(this._emitter.dispose(),this._emitter=void 0)}},_v=class{get token(){return this._token||(this._token=new of),this._token}cancel(){this._token?this._token.cancel():this._token=vv.Cancelled}dispose(){this._token?this._token instanceof of&&this._token.dispose():this._token=vv.None}};ka.CancellationTokenSource=_v});var ES=h(ao=>{"use strict";Object.defineProperty(ao,"__esModule",{value:!0});ao.ReadableStreamMessageReader=ao.AbstractMessageReader=ao.MessageReader=void 0;var bv=io(),As=Cs(),Rv=Sa(),N2;(function(t){function e(r){let n=r;return n&&As.func(n.listen)&&As.func(n.dispose)&&As.func(n.onError)&&As.func(n.onClose)&&As.func(n.onPartialMessage)}t.is=e})(N2=ao.MessageReader||(ao.MessageReader={}));var af=class{constructor(){this.errorEmitter=new Rv.Emitter,this.closeEmitter=new Rv.Emitter,this.partialMessageEmitter=new Rv.Emitter}dispose(){this.errorEmitter.dispose(),this.closeEmitter.dispose()}get onError(){return this.errorEmitter.event}fireError(e){this.errorEmitter.fire(this.asError(e))}get onClose(){return this.closeEmitter.event}fireClose(){this.closeEmitter.fire(void 0)}get onPartialMessage(){return this.partialMessageEmitter.event}firePartialMessage(e){this.partialMessageEmitter.fire(e)}asError(e){return e instanceof Error?e:new Error(`Reader received error. Reason: ${As.string(e.message)?e.message:"unknown"}`)}};ao.AbstractMessageReader=af;var Cv;(function(t){function e(r){let n,i,o,a=new Map,s,u=new Map;if(r===void 0||typeof r=="string")n=r??"utf-8";else{if(n=r.charset??"utf-8",r.contentDecoder!==void 0&&(o=r.contentDecoder,a.set(o.name,o)),r.contentDecoders!==void 0)for(let d of r.contentDecoders)a.set(d.name,d);if(r.contentTypeDecoder!==void 0&&(s=r.contentTypeDecoder,u.set(s.name,s)),r.contentTypeDecoders!==void 0)for(let d of r.contentTypeDecoders)u.set(d.name,d)}return s===void 0&&(s=(0,bv.default)().applicationJson.decoder,u.set(s.name,s)),{charset:n,contentDecoder:o,contentDecoders:a,contentTypeDecoder:s,contentTypeDecoders:u}}t.fromOptions=e})(Cv||(Cv={}));var Av=class extends af{constructor(e,r){super(),this.readable=e,this.options=Cv.fromOptions(r),this.buffer=(0,bv.default)().messageBuffer.create(this.options.charset),this._partialMessageTimeout=1e4,this.nextMessageLength=-1,this.messageToken=0}set partialMessageTimeout(e){this._partialMessageTimeout=e}get partialMessageTimeout(){return this._partialMessageTimeout}listen(e){this.nextMessageLength=-1,this.messageToken=0,this.partialMessageTimer=void 0,this.callback=e;let r=this.readable.onData(n=>{this.onData(n)});return this.readable.onError(n=>this.fireError(n)),this.readable.onClose(()=>this.fireClose()),r}onData(e){for(this.buffer.append(e);;){if(this.nextMessageLength===-1){let i=this.buffer.tryReadHeaders();if(!i)return;let o=i.get("Content-Length");if(!o)throw new Error("Header must provide a Content-Length property.");let a=parseInt(o);if(isNaN(a))throw new Error("Content-Length value must be a number.");this.nextMessageLength=a}let r=this.buffer.tryReadBody(this.nextMessageLength);if(r===void 0){this.setPartialMessageTimer();return}this.clearPartialMessageTimer(),this.nextMessageLength=-1;let n;this.options.contentDecoder!==void 0?n=this.options.contentDecoder.decode(r):n=Promise.resolve(r),n.then(i=>{this.options.contentTypeDecoder.decode(i,this.options).then(o=>{this.callback(o)},o=>{this.fireError(o)})},i=>{this.fireError(i)})}}clearPartialMessageTimer(){this.partialMessageTimer&&(this.partialMessageTimer.dispose(),this.partialMessageTimer=void 0)}setPartialMessageTimer(){this.clearPartialMessageTimer(),!(this._partialMessageTimeout<=0)&&(this.partialMessageTimer=(0,bv.default)().timer.setTimeout((e,r)=>{this.partialMessageTimer=void 0,e===this.messageToken&&(this.firePartialMessage({messageToken:e,waitingTime:r}),this.setPartialMessageTimer())},this._partialMessageTimeout,this.messageToken,this._partialMessageTimeout))}};ao.ReadableStreamMessageReader=Av});var kS=h(sf=>{"use strict";Object.defineProperty(sf,"__esModule",{value:!0});sf.Semaphore=void 0;var w2=io(),Pv=class{constructor(e=1){if(e<=0)throw new Error("Capacity must be greater than 0");this._capacity=e,this._active=0,this._waiting=[]}lock(e){return new Promise((r,n)=>{this._waiting.push({thunk:e,resolve:r,reject:n}),this.runNext()})}get active(){return this._active}runNext(){this._waiting.length===0||this._active===this._capacity||(0,w2.default)().timer.setImmediate(()=>this.doRunNext())}doRunNext(){if(this._waiting.length===0||this._active===this._capacity)return;let e=this._waiting.shift();if(this._active++,this._active>this._capacity)throw new Error("To many thunks active");try{let r=e.thunk();r instanceof Promise?r.then(n=>{this._active--,e.resolve(n),this.runNext()},n=>{this._active--,e.reject(n),this.runNext()}):(this._active--,e.resolve(r),this.runNext())}catch(r){this._active--,e.reject(r),this.runNext()}}};sf.Semaphore=Pv});var OS=h(so=>{"use strict";Object.defineProperty(so,"__esModule",{value:!0});so.WriteableStreamMessageWriter=so.AbstractMessageWriter=so.MessageWriter=void 0;var NS=io(),kc=Cs(),D2=kS(),wS=Sa(),O2="Content-Length: ",DS=`\r
`,I2;(function(t){function e(r){let n=r;return n&&kc.func(n.dispose)&&kc.func(n.onClose)&&kc.func(n.onError)&&kc.func(n.write)}t.is=e})(I2=so.MessageWriter||(so.MessageWriter={}));var uf=class{constructor(){this.errorEmitter=new wS.Emitter,this.closeEmitter=new wS.Emitter}dispose(){this.errorEmitter.dispose(),this.closeEmitter.dispose()}get onError(){return this.errorEmitter.event}fireError(e,r,n){this.errorEmitter.fire([this.asError(e),r,n])}get onClose(){return this.closeEmitter.event}fireClose(){this.closeEmitter.fire(void 0)}asError(e){return e instanceof Error?e:new Error(`Writer received error. Reason: ${kc.string(e.message)?e.message:"unknown"}`)}};so.AbstractMessageWriter=uf;var Sv;(function(t){function e(r){return r===void 0||typeof r=="string"?{charset:r??"utf-8",contentTypeEncoder:(0,NS.default)().applicationJson.encoder}:{charset:r.charset??"utf-8",contentEncoder:r.contentEncoder,contentTypeEncoder:r.contentTypeEncoder??(0,NS.default)().applicationJson.encoder}}t.fromOptions=e})(Sv||(Sv={}));var Ev=class extends uf{constructor(e,r){super(),this.writable=e,this.options=Sv.fromOptions(r),this.errorCount=0,this.writeSemaphore=new D2.Semaphore(1),this.writable.onError(n=>this.fireError(n)),this.writable.onClose(()=>this.fireClose())}async write(e){return this.writeSemaphore.lock(async()=>this.options.contentTypeEncoder.encode(e,this.options).then(n=>this.options.contentEncoder!==void 0?this.options.contentEncoder.encode(n):n).then(n=>{let i=[];return i.push(O2,n.byteLength.toString(),DS),i.push(DS),this.doWrite(e,i,n)},n=>{throw this.fireError(n),n}))}async doWrite(e,r,n){try{return await this.writable.write(r.join(""),"ascii"),this.writable.write(n)}catch(i){return this.handleError(i,e),Promise.reject(i)}}handleError(e,r){this.errorCount++,this.fireError(e,r,this.errorCount)}end(){this.writable.end()}};so.WriteableStreamMessageWriter=Ev});var $S=h(ge=>{"use strict";Object.defineProperty(ge,"__esModule",{value:!0});ge.createMessageConnection=ge.ConnectionOptions=ge.CancellationStrategy=ge.CancellationSenderStrategy=ge.CancellationReceiverStrategy=ge.ConnectionStrategy=ge.ConnectionError=ge.ConnectionErrors=ge.LogTraceNotification=ge.SetTraceNotification=ge.TraceFormat=ge.TraceValues=ge.Trace=ge.NullLogger=ge.ProgressType=ge.ProgressToken=void 0;var IS=io(),Jt=Cs(),ve=hv(),qS=gv(),Nc=Sa(),kv=Tv(),Dc;(function(t){t.type=new ve.NotificationType("$/cancelRequest")})(Dc||(Dc={}));var xS;(function(t){function e(r){return typeof r=="string"||typeof r=="number"}t.is=e})(xS=ge.ProgressToken||(ge.ProgressToken={}));var wc;(function(t){t.type=new ve.NotificationType("$/progress")})(wc||(wc={}));var Nv=class{constructor(){}};ge.ProgressType=Nv;var wv;(function(t){function e(r){return Jt.func(r)}t.is=e})(wv||(wv={}));ge.NullLogger=Object.freeze({error:()=>{},warn:()=>{},info:()=>{},log:()=>{}});var Be;(function(t){t[t.Off=0]="Off",t[t.Messages=1]="Messages",t[t.Compact=2]="Compact",t[t.Verbose=3]="Verbose"})(Be=ge.Trace||(ge.Trace={}));var q2;(function(t){t.Off="off",t.Messages="messages",t.Compact="compact",t.Verbose="verbose"})(q2=ge.TraceValues||(ge.TraceValues={}));(function(t){function e(n){if(!Jt.string(n))return t.Off;switch(n=n.toLowerCase(),n){case"off":return t.Off;case"messages":return t.Messages;case"compact":return t.Compact;case"verbose":return t.Verbose;default:return t.Off}}t.fromString=e;function r(n){switch(n){case t.Off:return"off";case t.Messages:return"messages";case t.Compact:return"compact";case t.Verbose:return"verbose";default:return"off"}}t.toString=r})(Be=ge.Trace||(ge.Trace={}));var Bn;(function(t){t.Text="text",t.JSON="json"})(Bn=ge.TraceFormat||(ge.TraceFormat={}));(function(t){function e(r){return Jt.string(r)?(r=r.toLowerCase(),r==="json"?t.JSON:t.Text):t.Text}t.fromString=e})(Bn=ge.TraceFormat||(ge.TraceFormat={}));var LS;(function(t){t.type=new ve.NotificationType("$/setTrace")})(LS=ge.SetTraceNotification||(ge.SetTraceNotification={}));var Dv;(function(t){t.type=new ve.NotificationType("$/logTrace")})(Dv=ge.LogTraceNotification||(ge.LogTraceNotification={}));var cf;(function(t){t[t.Closed=1]="Closed",t[t.Disposed=2]="Disposed",t[t.AlreadyListening=3]="AlreadyListening"})(cf=ge.ConnectionErrors||(ge.ConnectionErrors={}));var Ps=class t extends Error{constructor(e,r){super(r),this.code=e,Object.setPrototypeOf(this,t.prototype)}};ge.ConnectionError=Ps;var MS;(function(t){function e(r){let n=r;return n&&Jt.func(n.cancelUndispatched)}t.is=e})(MS=ge.ConnectionStrategy||(ge.ConnectionStrategy={}));var Ov;(function(t){t.Message=Object.freeze({createCancellationTokenSource(r){return new kv.CancellationTokenSource}});function e(r){let n=r;return n&&Jt.func(n.createCancellationTokenSource)}t.is=e})(Ov=ge.CancellationReceiverStrategy||(ge.CancellationReceiverStrategy={}));var Iv;(function(t){t.Message=Object.freeze({sendCancellation(r,n){return r.sendNotification(Dc.type,{id:n})},cleanup(r){}});function e(r){let n=r;return n&&Jt.func(n.sendCancellation)&&Jt.func(n.cleanup)}t.is=e})(Iv=ge.CancellationSenderStrategy||(ge.CancellationSenderStrategy={}));var qv;(function(t){t.Message=Object.freeze({receiver:Ov.Message,sender:Iv.Message});function e(r){let n=r;return n&&Ov.is(n.receiver)&&Iv.is(n.sender)}t.is=e})(qv=ge.CancellationStrategy||(ge.CancellationStrategy={}));var x2;(function(t){function e(r){let n=r;return n&&(qv.is(n.cancellationStrategy)||MS.is(n.connectionStrategy))}t.is=e})(x2=ge.ConnectionOptions||(ge.ConnectionOptions={}));var zn;(function(t){t[t.New=1]="New",t[t.Listening=2]="Listening",t[t.Closed=3]="Closed",t[t.Disposed=4]="Disposed"})(zn||(zn={}));function L2(t,e,r,n){let i=r!==void 0?r:ge.NullLogger,o=0,a=0,s=0,u="2.0",d,p=new Map,m,v=new Map,P=new Map,_,N=new qS.LinkedMap,I=new Map,O=new Set,E=new Map,S=Be.Off,L=Bn.Text,U,V=zn.New,te=new Nc.Emitter,we=new Nc.Emitter,Z=new Nc.Emitter,G=new Nc.Emitter,j=new Nc.Emitter,Y=n&&n.cancellationStrategy?n.cancellationStrategy:qv.Message;function J(D){if(D===null)throw new Error("Can't send requests with id null since the response can't be correlated.");return"req-"+D.toString()}function Ce(D){return D===null?"res-unknown-"+(++s).toString():"res-"+D.toString()}function _e(){return"not-"+(++a).toString()}function me(D,T){ve.Message.isRequest(T)?D.set(J(T.id),T):ve.Message.isResponse(T)?D.set(Ce(T.id),T):D.set(_e(),T)}function Je(D){}function Ve(){return V===zn.Listening}function Se(){return V===zn.Closed}function st(){return V===zn.Disposed}function ur(){(V===zn.New||V===zn.Listening)&&(V=zn.Closed,we.fire(void 0))}function Tr(D){te.fire([D,void 0,void 0])}function di(D){te.fire(D)}t.onClose(ur),t.onError(Tr),e.onClose(ur),e.onError(di);function Ln(){_||N.size===0||(_=(0,IS.default)().timer.setImmediate(()=>{_=void 0,Mn()}))}function Mn(){if(N.size===0)return;let D=N.shift();try{ve.Message.isRequest(D)?fi(D):ve.Message.isNotification(D)?hi(D):ve.Message.isResponse(D)?pi(D):Bi(D)}finally{Ln()}}let Kt=D=>{try{if(ve.Message.isNotification(D)&&D.method===Dc.type.method){let T=D.params.id,q=J(T),M=N.get(q);if(ve.Message.isRequest(M)){let le=n?.connectionStrategy,fe=le&&le.cancelUndispatched?le.cancelUndispatched(M,Je):void 0;if(fe&&(fe.error!==void 0||fe.result!==void 0)){N.delete(q),E.delete(T),fe.id=M.id,Wr(fe,D.method,Date.now()),e.write(fe).catch(()=>i.error("Sending response for canceled message failed."));return}}let H=E.get(T);if(H!==void 0){H.cancel(),Br(D);return}else O.add(T)}me(N,D)}finally{Ln()}};function fi(D){if(st())return;function T(ae,re,ne){let pe={jsonrpc:u,id:D.id};ae instanceof ve.ResponseError?pe.error=ae.toJson():pe.result=ae===void 0?null:ae,Wr(pe,re,ne),e.write(pe).catch(()=>i.error("Sending response failed."))}function q(ae,re,ne){let pe={jsonrpc:u,id:D.id,error:ae.toJson()};Wr(pe,re,ne),e.write(pe).catch(()=>i.error("Sending response failed."))}function M(ae,re,ne){ae===void 0&&(ae=null);let pe={jsonrpc:u,id:D.id,result:ae};Wr(pe,re,ne),e.write(pe).catch(()=>i.error("Sending response failed."))}Kr(D);let H=p.get(D.method),le,fe;H&&(le=H.type,fe=H.handler);let Te=Date.now();if(fe||d){let ae=D.id??String(Date.now()),re=Y.receiver.createCancellationTokenSource(ae);D.id!==null&&O.has(D.id)&&re.cancel(),D.id!==null&&E.set(ae,re);try{let ne;if(fe)if(D.params===void 0){if(le!==void 0&&le.numberOfParams!==0){q(new ve.ResponseError(ve.ErrorCodes.InvalidParams,`Request ${D.method} defines ${le.numberOfParams} params but received none.`),D.method,Te);return}ne=fe(re.token)}else if(Array.isArray(D.params)){if(le!==void 0&&le.parameterStructures===ve.ParameterStructures.byName){q(new ve.ResponseError(ve.ErrorCodes.InvalidParams,`Request ${D.method} defines parameters by name but received parameters by position`),D.method,Te);return}ne=fe(...D.params,re.token)}else{if(le!==void 0&&le.parameterStructures===ve.ParameterStructures.byPosition){q(new ve.ResponseError(ve.ErrorCodes.InvalidParams,`Request ${D.method} defines parameters by position but received parameters by name`),D.method,Te);return}ne=fe(D.params,re.token)}else d&&(ne=d(D.method,D.params,re.token));let pe=ne;ne?pe.then?pe.then(Ee=>{E.delete(ae),T(Ee,D.method,Te)},Ee=>{E.delete(ae),Ee instanceof ve.ResponseError?q(Ee,D.method,Te):Ee&&Jt.string(Ee.message)?q(new ve.ResponseError(ve.ErrorCodes.InternalError,`Request ${D.method} failed with message: ${Ee.message}`),D.method,Te):q(new ve.ResponseError(ve.ErrorCodes.InternalError,`Request ${D.method} failed unexpectedly without providing any details.`),D.method,Te)}):(E.delete(ae),T(ne,D.method,Te)):(E.delete(ae),M(ne,D.method,Te))}catch(ne){E.delete(ae),ne instanceof ve.ResponseError?T(ne,D.method,Te):ne&&Jt.string(ne.message)?q(new ve.ResponseError(ve.ErrorCodes.InternalError,`Request ${D.method} failed with message: ${ne.message}`),D.method,Te):q(new ve.ResponseError(ve.ErrorCodes.InternalError,`Request ${D.method} failed unexpectedly without providing any details.`),D.method,Te)}}else q(new ve.ResponseError(ve.ErrorCodes.MethodNotFound,`Unhandled method ${D.method}`),D.method,Te)}function pi(D){if(!st())if(D.id===null)D.error?i.error(`Received response message without id: Error is: 
${JSON.stringify(D.error,void 0,4)}`):i.error("Received response message without id. No further error information provided.");else{let T=D.id,q=I.get(T);if(on(D,q),q!==void 0){I.delete(T);try{if(D.error){let M=D.error;q.reject(new ve.ResponseError(M.code,M.message,M.data))}else if(D.result!==void 0)q.resolve(D.result);else throw new Error("Should never happen.")}catch(M){M.message?i.error(`Response handler '${q.method}' failed with message: ${M.message}`):i.error(`Response handler '${q.method}' failed unexpectedly.`)}}}}function hi(D){if(st())return;let T,q;if(D.method===Dc.type.method){let M=D.params.id;O.delete(M),Br(D);return}else{let M=v.get(D.method);M&&(q=M.handler,T=M.type)}if(q||m)try{if(Br(D),q)if(D.params===void 0)T!==void 0&&T.numberOfParams!==0&&T.parameterStructures!==ve.ParameterStructures.byName&&i.error(`Notification ${D.method} defines ${T.numberOfParams} params but received none.`),q();else if(Array.isArray(D.params)){let M=D.params;D.method===wc.type.method&&M.length===2&&xS.is(M[0])?q({token:M[0],value:M[1]}):(T!==void 0&&(T.parameterStructures===ve.ParameterStructures.byName&&i.error(`Notification ${D.method} defines parameters by name but received parameters by position`),T.numberOfParams!==D.params.length&&i.error(`Notification ${D.method} defines ${T.numberOfParams} params but received ${M.length} arguments`)),q(...M))}else T!==void 0&&T.parameterStructures===ve.ParameterStructures.byPosition&&i.error(`Notification ${D.method} defines parameters by position but received parameters by name`),q(D.params);else m&&m(D.method,D.params)}catch(M){M.message?i.error(`Notification handler '${D.method}' failed with message: ${M.message}`):i.error(`Notification handler '${D.method}' failed unexpectedly.`)}else Z.fire(D)}function Bi(D){if(!D){i.error("Received empty message.");return}i.error(`Received message which is neither a response nor a notification message:
${JSON.stringify(D,null,4)}`);let T=D;if(Jt.string(T.id)||Jt.number(T.id)){let q=T.id,M=I.get(q);M&&M.reject(new Error("The received response has neither a result nor an error property."))}}function Qe(D){if(D!=null)switch(S){case Be.Verbose:return JSON.stringify(D,null,4);case Be.Compact:return JSON.stringify(D);default:return}}function wt(D){if(!(S===Be.Off||!U))if(L===Bn.Text){let T;(S===Be.Verbose||S===Be.Compact)&&D.params&&(T=`Params: ${Qe(D.params)}

`),U.log(`Sending request '${D.method} - (${D.id})'.`,T)}else Rr("send-request",D)}function zi(D){if(!(S===Be.Off||!U))if(L===Bn.Text){let T;(S===Be.Verbose||S===Be.Compact)&&(D.params?T=`Params: ${Qe(D.params)}

`:T=`No parameters provided.

`),U.log(`Sending notification '${D.method}'.`,T)}else Rr("send-notification",D)}function Wr(D,T,q){if(!(S===Be.Off||!U))if(L===Bn.Text){let M;(S===Be.Verbose||S===Be.Compact)&&(D.error&&D.error.data?M=`Error data: ${Qe(D.error.data)}

`:D.result?M=`Result: ${Qe(D.result)}

`:D.error===void 0&&(M=`No result returned.

`)),U.log(`Sending response '${T} - (${D.id})'. Processing request took ${Date.now()-q}ms`,M)}else Rr("send-response",D)}function Kr(D){if(!(S===Be.Off||!U))if(L===Bn.Text){let T;(S===Be.Verbose||S===Be.Compact)&&D.params&&(T=`Params: ${Qe(D.params)}

`),U.log(`Received request '${D.method} - (${D.id})'.`,T)}else Rr("receive-request",D)}function Br(D){if(!(S===Be.Off||!U||D.method===Dv.type.method))if(L===Bn.Text){let T;(S===Be.Verbose||S===Be.Compact)&&(D.params?T=`Params: ${Qe(D.params)}

`:T=`No parameters provided.

`),U.log(`Received notification '${D.method}'.`,T)}else Rr("receive-notification",D)}function on(D,T){if(!(S===Be.Off||!U))if(L===Bn.Text){let q;if((S===Be.Verbose||S===Be.Compact)&&(D.error&&D.error.data?q=`Error data: ${Qe(D.error.data)}

`:D.result?q=`Result: ${Qe(D.result)}

`:D.error===void 0&&(q=`No result returned.

`)),T){let M=D.error?` Request failed: ${D.error.message} (${D.error.code}).`:"";U.log(`Received response '${T.method} - (${D.id})' in ${Date.now()-T.timerStart}ms.${M}`,q)}else U.log(`Received response ${D.id} without active response promise.`,q)}else Rr("receive-response",D)}function Rr(D,T){if(!U||S===Be.Off)return;let q={isLSPMessage:!0,type:D,message:T,timestamp:Date.now()};U.log(q)}function Dt(){if(Se())throw new Ps(cf.Closed,"Connection is closed.");if(st())throw new Ps(cf.Disposed,"Connection is disposed.")}function zr(){if(Ve())throw new Ps(cf.AlreadyListening,"Connection is already listening")}function mi(){if(!Ve())throw new Error("Call listen() first.")}function cr(D){return D===void 0?null:D}function Ot(D){if(D!==null)return D}function _t(D){return D!=null&&!Array.isArray(D)&&typeof D=="object"}function br(D,T){switch(D){case ve.ParameterStructures.auto:return _t(T)?Ot(T):[cr(T)];case ve.ParameterStructures.byName:if(!_t(T))throw new Error("Received parameters by name but param is not an object literal.");return Ot(T);case ve.ParameterStructures.byPosition:return[cr(T)];default:throw new Error(`Unknown parameter structure ${D.toString()}`)}}function lr(D,T){let q,M=D.numberOfParams;switch(M){case 0:q=void 0;break;case 1:q=br(D.parameterStructures,T[0]);break;default:q=[];for(let H=0;H<T.length&&H<M;H++)q.push(cr(T[H]));if(T.length<M)for(let H=T.length;H<M;H++)q.push(null);break}return q}let Or={sendNotification:(D,...T)=>{Dt();let q,M;if(Jt.string(D)){q=D;let le=T[0],fe=0,Te=ve.ParameterStructures.auto;ve.ParameterStructures.is(le)&&(fe=1,Te=le);let ae=T.length,re=ae-fe;switch(re){case 0:M=void 0;break;case 1:M=br(Te,T[fe]);break;default:if(Te===ve.ParameterStructures.byName)throw new Error(`Received ${re} parameters for 'by Name' notification parameter structure.`);M=T.slice(fe,ae).map(ne=>cr(ne));break}}else{let le=T;q=D.method,M=lr(D,le)}let H={jsonrpc:u,method:q,params:M};return zi(H),e.write(H).catch(()=>i.error("Sending notification failed."))},onNotification:(D,T)=>{Dt();let q;return Jt.func(D)?m=D:T&&(Jt.string(D)?(q=D,v.set(D,{type:void 0,handler:T})):(q=D.method,v.set(D.method,{type:D,handler:T}))),{dispose:()=>{q!==void 0?v.delete(q):m=void 0}}},onProgress:(D,T,q)=>{if(P.has(T))throw new Error(`Progress handler for token ${T} already registered`);return P.set(T,q),{dispose:()=>{P.delete(T)}}},sendProgress:(D,T,q)=>Or.sendNotification(wc.type,{token:T,value:q}),onUnhandledProgress:G.event,sendRequest:(D,...T)=>{Dt(),mi();let q,M,H;if(Jt.string(D)){q=D;let ae=T[0],re=T[T.length-1],ne=0,pe=ve.ParameterStructures.auto;ve.ParameterStructures.is(ae)&&(ne=1,pe=ae);let Ee=T.length;kv.CancellationToken.is(re)&&(Ee=Ee-1,H=re);let Ze=Ee-ne;switch(Ze){case 0:M=void 0;break;case 1:M=br(pe,T[ne]);break;default:if(pe===ve.ParameterStructures.byName)throw new Error(`Received ${Ze} parameters for 'by Name' request parameter structure.`);M=T.slice(ne,Ee).map(Tt=>cr(Tt));break}}else{let ae=T;q=D.method,M=lr(D,ae);let re=D.numberOfParams;H=kv.CancellationToken.is(ae[re])?ae[re]:void 0}let le=o++,fe;return H&&(fe=H.onCancellationRequested(()=>{let ae=Y.sender.sendCancellation(Or,le);return ae===void 0?(i.log(`Received no promise from cancellation strategy when cancelling id ${le}`),Promise.resolve()):ae.catch(()=>{i.log(`Sending cancellation messages for id ${le} failed`)})})),new Promise((ae,re)=>{let ne={jsonrpc:u,id:le,method:q,params:M},pe=Tt=>{ae(Tt),Y.sender.cleanup(le),fe?.dispose()},Ee=Tt=>{re(Tt),Y.sender.cleanup(le),fe?.dispose()},Ze={method:q,timerStart:Date.now(),resolve:pe,reject:Ee};wt(ne);try{e.write(ne).catch(()=>i.error("Sending request failed."))}catch(Tt){Ze.reject(new ve.ResponseError(ve.ErrorCodes.MessageWriteError,Tt.message?Tt.message:"Unknown reason")),Ze=null}Ze&&I.set(le,Ze)})},onRequest:(D,T)=>{Dt();let q=null;return wv.is(D)?(q=void 0,d=D):Jt.string(D)?(q=null,T!==void 0&&(q=D,p.set(D,{handler:T,type:void 0}))):T!==void 0&&(q=D.method,p.set(D.method,{type:D,handler:T})),{dispose:()=>{q!==null&&(q!==void 0?p.delete(q):d=void 0)}}},hasPendingResponse:()=>I.size>0,trace:async(D,T,q)=>{let M=!1,H=Bn.Text;q!==void 0&&(Jt.boolean(q)?M=q:(M=q.sendNotification||!1,H=q.traceFormat||Bn.Text)),S=D,L=H,S===Be.Off?U=void 0:U=T,M&&!Se()&&!st()&&await Or.sendNotification(LS.type,{value:Be.toString(D)})},onError:te.event,onClose:we.event,onUnhandledNotification:Z.event,onDispose:j.event,end:()=>{e.end()},dispose:()=>{if(st())return;V=zn.Disposed,j.fire(void 0);let D=new ve.ResponseError(ve.ErrorCodes.PendingResponseRejected,"Pending response rejected since connection got disposed");for(let T of I.values())T.reject(D);I=new Map,E=new Map,O=new Set,N=new qS.LinkedMap,Jt.func(e.dispose)&&e.dispose(),Jt.func(t.dispose)&&t.dispose()},listen:()=>{Dt(),zr(),V=zn.Listening,t.listen(Kt)},inspect:()=>{(0,IS.default)().console.log("inspect")}};return Or.onNotification(Dv.type,D=>{if(S===Be.Off||!U)return;let T=S===Be.Verbose||S===Be.Compact;U.log(D.message,T?D.verbose:void 0)}),Or.onNotification(wc.type,D=>{let T=P.get(D.token);T?T(D.value):G.fire(D)}),Or}ge.createMessageConnection=L2});var $v=h(F=>{"use strict";Object.defineProperty(F,"__esModule",{value:!0});F.TraceFormat=F.TraceValues=F.Trace=F.ProgressType=F.ProgressToken=F.createMessageConnection=F.NullLogger=F.ConnectionOptions=F.ConnectionStrategy=F.WriteableStreamMessageWriter=F.AbstractMessageWriter=F.MessageWriter=F.ReadableStreamMessageReader=F.AbstractMessageReader=F.MessageReader=F.CancellationToken=F.CancellationTokenSource=F.Emitter=F.Event=F.Disposable=F.LRUCache=F.Touch=F.LinkedMap=F.ParameterStructures=F.NotificationType9=F.NotificationType8=F.NotificationType7=F.NotificationType6=F.NotificationType5=F.NotificationType4=F.NotificationType3=F.NotificationType2=F.NotificationType1=F.NotificationType0=F.NotificationType=F.ErrorCodes=F.ResponseError=F.RequestType9=F.RequestType8=F.RequestType7=F.RequestType6=F.RequestType5=F.RequestType4=F.RequestType3=F.RequestType2=F.RequestType1=F.RequestType0=F.RequestType=F.Message=F.RAL=void 0;F.CancellationStrategy=F.CancellationSenderStrategy=F.CancellationReceiverStrategy=F.ConnectionError=F.ConnectionErrors=F.LogTraceNotification=F.SetTraceNotification=void 0;var ot=hv();Object.defineProperty(F,"Message",{enumerable:!0,get:function(){return ot.Message}});Object.defineProperty(F,"RequestType",{enumerable:!0,get:function(){return ot.RequestType}});Object.defineProperty(F,"RequestType0",{enumerable:!0,get:function(){return ot.RequestType0}});Object.defineProperty(F,"RequestType1",{enumerable:!0,get:function(){return ot.RequestType1}});Object.defineProperty(F,"RequestType2",{enumerable:!0,get:function(){return ot.RequestType2}});Object.defineProperty(F,"RequestType3",{enumerable:!0,get:function(){return ot.RequestType3}});Object.defineProperty(F,"RequestType4",{enumerable:!0,get:function(){return ot.RequestType4}});Object.defineProperty(F,"RequestType5",{enumerable:!0,get:function(){return ot.RequestType5}});Object.defineProperty(F,"RequestType6",{enumerable:!0,get:function(){return ot.RequestType6}});Object.defineProperty(F,"RequestType7",{enumerable:!0,get:function(){return ot.RequestType7}});Object.defineProperty(F,"RequestType8",{enumerable:!0,get:function(){return ot.RequestType8}});Object.defineProperty(F,"RequestType9",{enumerable:!0,get:function(){return ot.RequestType9}});Object.defineProperty(F,"ResponseError",{enumerable:!0,get:function(){return ot.ResponseError}});Object.defineProperty(F,"ErrorCodes",{enumerable:!0,get:function(){return ot.ErrorCodes}});Object.defineProperty(F,"NotificationType",{enumerable:!0,get:function(){return ot.NotificationType}});Object.defineProperty(F,"NotificationType0",{enumerable:!0,get:function(){return ot.NotificationType0}});Object.defineProperty(F,"NotificationType1",{enumerable:!0,get:function(){return ot.NotificationType1}});Object.defineProperty(F,"NotificationType2",{enumerable:!0,get:function(){return ot.NotificationType2}});Object.defineProperty(F,"NotificationType3",{enumerable:!0,get:function(){return ot.NotificationType3}});Object.defineProperty(F,"NotificationType4",{enumerable:!0,get:function(){return ot.NotificationType4}});Object.defineProperty(F,"NotificationType5",{enumerable:!0,get:function(){return ot.NotificationType5}});Object.defineProperty(F,"NotificationType6",{enumerable:!0,get:function(){return ot.NotificationType6}});Object.defineProperty(F,"NotificationType7",{enumerable:!0,get:function(){return ot.NotificationType7}});Object.defineProperty(F,"NotificationType8",{enumerable:!0,get:function(){return ot.NotificationType8}});Object.defineProperty(F,"NotificationType9",{enumerable:!0,get:function(){return ot.NotificationType9}});Object.defineProperty(F,"ParameterStructures",{enumerable:!0,get:function(){return ot.ParameterStructures}});var xv=gv();Object.defineProperty(F,"LinkedMap",{enumerable:!0,get:function(){return xv.LinkedMap}});Object.defineProperty(F,"LRUCache",{enumerable:!0,get:function(){return xv.LRUCache}});Object.defineProperty(F,"Touch",{enumerable:!0,get:function(){return xv.Touch}});var M2=$y();Object.defineProperty(F,"Disposable",{enumerable:!0,get:function(){return M2.Disposable}});var FS=Sa();Object.defineProperty(F,"Event",{enumerable:!0,get:function(){return FS.Event}});Object.defineProperty(F,"Emitter",{enumerable:!0,get:function(){return FS.Emitter}});var jS=Tv();Object.defineProperty(F,"CancellationTokenSource",{enumerable:!0,get:function(){return jS.CancellationTokenSource}});Object.defineProperty(F,"CancellationToken",{enumerable:!0,get:function(){return jS.CancellationToken}});var Lv=ES();Object.defineProperty(F,"MessageReader",{enumerable:!0,get:function(){return Lv.MessageReader}});Object.defineProperty(F,"AbstractMessageReader",{enumerable:!0,get:function(){return Lv.AbstractMessageReader}});Object.defineProperty(F,"ReadableStreamMessageReader",{enumerable:!0,get:function(){return Lv.ReadableStreamMessageReader}});var Mv=OS();Object.defineProperty(F,"MessageWriter",{enumerable:!0,get:function(){return Mv.MessageWriter}});Object.defineProperty(F,"AbstractMessageWriter",{enumerable:!0,get:function(){return Mv.AbstractMessageWriter}});Object.defineProperty(F,"WriteableStreamMessageWriter",{enumerable:!0,get:function(){return Mv.WriteableStreamMessageWriter}});var Sr=$S();Object.defineProperty(F,"ConnectionStrategy",{enumerable:!0,get:function(){return Sr.ConnectionStrategy}});Object.defineProperty(F,"ConnectionOptions",{enumerable:!0,get:function(){return Sr.ConnectionOptions}});Object.defineProperty(F,"NullLogger",{enumerable:!0,get:function(){return Sr.NullLogger}});Object.defineProperty(F,"createMessageConnection",{enumerable:!0,get:function(){return Sr.createMessageConnection}});Object.defineProperty(F,"ProgressToken",{enumerable:!0,get:function(){return Sr.ProgressToken}});Object.defineProperty(F,"ProgressType",{enumerable:!0,get:function(){return Sr.ProgressType}});Object.defineProperty(F,"Trace",{enumerable:!0,get:function(){return Sr.Trace}});Object.defineProperty(F,"TraceValues",{enumerable:!0,get:function(){return Sr.TraceValues}});Object.defineProperty(F,"TraceFormat",{enumerable:!0,get:function(){return Sr.TraceFormat}});Object.defineProperty(F,"SetTraceNotification",{enumerable:!0,get:function(){return Sr.SetTraceNotification}});Object.defineProperty(F,"LogTraceNotification",{enumerable:!0,get:function(){return Sr.LogTraceNotification}});Object.defineProperty(F,"ConnectionErrors",{enumerable:!0,get:function(){return Sr.ConnectionErrors}});Object.defineProperty(F,"ConnectionError",{enumerable:!0,get:function(){return Sr.ConnectionError}});Object.defineProperty(F,"CancellationReceiverStrategy",{enumerable:!0,get:function(){return Sr.CancellationReceiverStrategy}});Object.defineProperty(F,"CancellationSenderStrategy",{enumerable:!0,get:function(){return Sr.CancellationSenderStrategy}});Object.defineProperty(F,"CancellationStrategy",{enumerable:!0,get:function(){return Sr.CancellationStrategy}});var $2=io();F.RAL=$2.default});var uo=h(cn=>{"use strict";var F2=cn&&cn.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var i=Object.getOwnPropertyDescriptor(e,r);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,i)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),j2=cn&&cn.__exportStar||function(t,e){for(var r in t)r!=="default"&&!Object.prototype.hasOwnProperty.call(e,r)&&F2(e,t,r)};Object.defineProperty(cn,"__esModule",{value:!0});cn.createMessageConnection=cn.BrowserMessageWriter=cn.BrowserMessageReader=void 0;var U2=bS();U2.default.install();var Ss=$v();j2($v(),cn);var Fv=class extends Ss.AbstractMessageReader{constructor(e){super(),this._onData=new Ss.Emitter,this._messageListener=r=>{this._onData.fire(r.data)},e.addEventListener("error",r=>this.fireError(r)),e.onmessage=this._messageListener}listen(e){return this._onData.event(e)}};cn.BrowserMessageReader=Fv;var jv=class extends Ss.AbstractMessageWriter{constructor(e){super(),this.context=e,this.errorCount=0,e.addEventListener("error",r=>this.fireError(r))}write(e){try{return this.context.postMessage(e),Promise.resolve()}catch(r){return this.handleError(r,e),Promise.reject(r)}}handleError(e,r){this.errorCount++,this.fireError(e,r,this.errorCount)}end(){}};cn.BrowserMessageWriter=jv;function G2(t,e,r,n){return r===void 0&&(r=Ss.NullLogger),Ss.ConnectionStrategy.is(n)&&(n={connectionStrategy:n}),(0,Ss.createMessageConnection)(t,e,r,n)}cn.createMessageConnection=G2});var bn=h($t=>{"use strict";Object.defineProperty($t,"__esModule",{value:!0});$t.Deferred=$t.MutexLock=$t.interruptAndCheck=$t.isOperationCancelled=$t.OperationCancelled=$t.setInterruptionPeriod=$t.startCancelableOperation=$t.delayNextTick=void 0;var lf=uo();function US(){return new Promise(t=>{typeof setImmediate>"u"?setTimeout(t,0):setImmediate(t)})}$t.delayNextTick=US;var Uv=0,GS=10;function H2(){return Uv=Date.now(),new lf.CancellationTokenSource}$t.startCancelableOperation=H2;function W2(t){GS=t}$t.setInterruptionPeriod=W2;$t.OperationCancelled=Symbol("OperationCancelled");function HS(t){return t===$t.OperationCancelled}$t.isOperationCancelled=HS;async function K2(t){if(t===lf.CancellationToken.None)return;let e=Date.now();if(e-Uv>=GS&&(Uv=e,await US()),t.isCancellationRequested)throw $t.OperationCancelled}$t.interruptAndCheck=K2;var Gv=class{constructor(){this.previousAction=Promise.resolve(),this.previousTokenSource=new lf.CancellationTokenSource}lock(e){this.cancel();let r=new lf.CancellationTokenSource;return this.previousTokenSource=r,this.previousAction=this.previousAction.then(()=>e(r.token).catch(n=>{HS(n)||console.error("Error: ",n)}))}cancel(){this.previousTokenSource.cancel()}};$t.MutexLock=Gv;var Hv=class{constructor(){this.promise=new Promise((e,r)=>{this.resolve=n=>(e(n),this),this.reject=n=>(r(n),this)})}};$t.Deferred=Hv});var ff=h(df=>{"use strict";Object.defineProperty(df,"__esModule",{value:!0});df.DefaultScopeComputation=void 0;var Wv=uo(),WS=Ye(),B2=un(),KS=bn(),Kv=class{constructor(e){this.nameProvider=e.references.NameProvider,this.descriptions=e.workspace.AstNodeDescriptionProvider}async computeExports(e,r=Wv.CancellationToken.None){return this.computeExportsForNode(e.parseResult.value,e,void 0,r)}async computeExportsForNode(e,r,n=WS.streamContents,i=Wv.CancellationToken.None){let o=[];this.exportNode(e,o,r);for(let a of n(e))await(0,KS.interruptAndCheck)(i),this.exportNode(a,o,r);return o}exportNode(e,r,n){let i=this.nameProvider.getName(e);i&&r.push(this.descriptions.createDescription(e,i,n))}async computeLocalScopes(e,r=Wv.CancellationToken.None){let n=e.parseResult.value,i=new B2.MultiMap;for(let o of(0,WS.streamAllContents)(n))await(0,KS.interruptAndCheck)(r),this.processNode(o,e,i);return i}processNode(e,r,n){let i=e.$container;if(i){let o=this.nameProvider.getName(e);o&&n.add(i,this.descriptions.createDescription(e,o,r))}}};df.DefaultScopeComputation=Kv});var hf=h($o=>{"use strict";Object.defineProperty($o,"__esModule",{value:!0});$o.DefaultScopeProvider=$o.EMPTY_SCOPE=$o.StreamScope=void 0;var z2=Ye(),pf=er(),Es=class{constructor(e,r,n){this.elements=e,this.outerScope=r,this.caseInsensitive=n?.caseInsensitive}getAllElements(){return this.outerScope?this.elements.concat(this.outerScope.getAllElements()):this.elements}getElement(e){let r=this.caseInsensitive?this.elements.find(n=>n.name.toLowerCase()===e.toLowerCase()):this.elements.find(n=>n.name===e);if(r)return r;if(this.outerScope)return this.outerScope.getElement(e)}};$o.StreamScope=Es;$o.EMPTY_SCOPE={getElement(){},getAllElements(){return pf.EMPTY_STREAM}};var Bv=class{constructor(e){this.reflection=e.shared.AstReflection,this.nameProvider=e.references.NameProvider,this.descriptions=e.workspace.AstNodeDescriptionProvider,this.indexManager=e.shared.workspace.IndexManager}getScope(e){let r=[],n=this.reflection.getReferenceType(e),i=(0,z2.getDocument)(e.container).precomputedScopes;if(i){let a=e.container;do{let s=i.get(a);s.length>0&&r.push((0,pf.stream)(s).filter(u=>this.reflection.isSubtype(u.type,n))),a=a.$container}while(a)}let o=this.getGlobalScope(n,e);for(let a=r.length-1;a>=0;a--)o=this.createScope(r[a],o);return o}createScope(e,r,n){return new Es((0,pf.stream)(e),r,n)}createScopeForNodes(e,r,n){let i=(0,pf.stream)(e).map(o=>{let a=this.nameProvider.getName(o);if(a)return this.descriptions.createDescription(o,a)}).nonNullable();return new Es(i,r,n)}getGlobalScope(e,r){return new Es(this.indexManager.allElements(e))}};$o.DefaultScopeProvider=Bv});var co=h(ks=>{"use strict";Object.defineProperty(ks,"__esModule",{value:!0});ks.relativeURI=ks.equalURI=void 0;function V2(t,e){return t?.toString()===e?.toString()}ks.equalURI=V2;function Y2(t,e){let r=t.path,n=e.path,i=r.split("/").filter(d=>d.length>0),o=n.split("/").filter(d=>d.length>0),a=0;for(;a<i.length&&i[a]===o[a];a++);let s="../".repeat(i.length-a),u=o.slice(a).join("/");return s+u}ks.relativeURI=Y2});var zS=h(Ns=>{"use strict";Object.defineProperty(Ns,"__esModule",{value:!0});Ns.LangiumGrammarScopeComputation=Ns.LangiumGrammarScopeProvider=void 0;var X2=ff(),zv=hf(),Oc=Ye(),BS=er(),J2=co(),Cn=Ke(),Vv=Yt(),Yv=class extends zv.DefaultScopeProvider{constructor(e){super(e)}getScope(e){let r=this.reflection.getReferenceType(e);return r===Cn.AbstractType?this.getTypeScope(r,e):super.getScope(e)}getTypeScope(e,r){let n,i=(0,Oc.getDocument)(r.container).precomputedScopes,o=(0,Oc.findRootNode)(r.container);if(i&&o){let s=i.get(o);s.length>0&&(n=(0,BS.stream)(s).filter(u=>u.type===Cn.Interface||u.type===Cn.Type))}let a=this.getGlobalScope(e,r);return n?this.createScope(n,a):a}getGlobalScope(e,r){let n=(0,Oc.getContainerOfType)(r.container,Cn.isGrammar);if(!n)return zv.EMPTY_SCOPE;let i=(0,BS.stream)(n.imports).map(Vv.resolveImportUri).nonNullable(),o=this.indexManager.allElements(e).filter(a=>i.some(s=>(0,J2.equalURI)(a.documentUri,s)));return e===Cn.AbstractType&&(o=o.filter(a=>a.type===Cn.Interface||a.type===Cn.Type)),new zv.StreamScope(o)}};Ns.LangiumGrammarScopeProvider=Yv;var Xv=class extends X2.DefaultScopeComputation{constructor(e){super(e),this.astNodeLocator=e.workspace.AstNodeLocator}exportNode(e,r,n){var i;if(super.exportNode(e,r,n),(0,Cn.isParserRule)(e)){if(!e.returnType&&!e.dataType){let o=(i=e.inferredType)!==null&&i!==void 0?i:e;r.push({node:o,name:o.name,type:"Interface",documentUri:n.uri,path:this.astNodeLocator.getAstNodePath(o)})}(0,Oc.streamAllContents)(e).forEach(o=>{if((0,Cn.isAction)(o)&&o.inferredType){let a=(0,Vv.getActionType)(o);a&&r.push({node:e,name:a,type:"Interface",documentUri:n.uri,path:this.astNodeLocator.getAstNodePath(e)})}})}}processNode(e,r,n){(0,Cn.isReturnType)(e)||(this.processTypeNode(e,r,n),this.processActionNode(e,r,n),super.processNode(e,r,n))}processTypeNode(e,r,n){var i;let o=e.$container;if(o&&(0,Cn.isParserRule)(e)&&!e.returnType&&!e.dataType){let a=(i=e.inferredType)!==null&&i!==void 0?i:e;n.add(o,{node:a,name:a.name,type:"Interface",documentUri:r.uri,path:this.astNodeLocator.getAstNodePath(a)})}}processActionNode(e,r,n){let i=(0,Oc.findRootNode)(e);if(i&&(0,Cn.isAction)(e)&&e.inferredType){let o=(0,Vv.getActionType)(e);o&&n.add(i,{node:e,name:o,type:"Interface",documentUri:r.uri,path:this.astNodeLocator.getAstNodePath(e)})}}};Ns.LangiumGrammarScopeComputation=Xv});var ws=h((VS,mf)=>{(function(t){if(typeof mf=="object"&&typeof mf.exports=="object"){var e=t(Kl,VS);e!==void 0&&(mf.exports=e)}else typeof define=="function"&&define.amd&&define(["require","exports"],t)})(function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.TextDocument=e.EOL=e.WorkspaceFolder=e.InlayHint=e.InlayHintLabelPart=e.InlayHintKind=e.InlineValueContext=e.InlineValueEvaluatableExpression=e.InlineValueVariableLookup=e.InlineValueText=e.SemanticTokens=e.SemanticTokenModifiers=e.SemanticTokenTypes=e.SelectionRange=e.DocumentLink=e.FormattingOptions=e.CodeLens=e.CodeAction=e.CodeActionContext=e.CodeActionTriggerKind=e.CodeActionKind=e.DocumentSymbol=e.WorkspaceSymbol=e.SymbolInformation=e.SymbolTag=e.SymbolKind=e.DocumentHighlight=e.DocumentHighlightKind=e.SignatureInformation=e.ParameterInformation=e.Hover=e.MarkedString=e.CompletionList=e.CompletionItem=e.CompletionItemLabelDetails=e.InsertTextMode=e.InsertReplaceEdit=e.CompletionItemTag=e.InsertTextFormat=e.CompletionItemKind=e.MarkupContent=e.MarkupKind=e.TextDocumentItem=e.OptionalVersionedTextDocumentIdentifier=e.VersionedTextDocumentIdentifier=e.TextDocumentIdentifier=e.WorkspaceChange=e.WorkspaceEdit=e.DeleteFile=e.RenameFile=e.CreateFile=e.TextDocumentEdit=e.AnnotatedTextEdit=e.ChangeAnnotationIdentifier=e.ChangeAnnotation=e.TextEdit=e.Command=e.Diagnostic=e.CodeDescription=e.DiagnosticTag=e.DiagnosticSeverity=e.DiagnosticRelatedInformation=e.FoldingRange=e.FoldingRangeKind=e.ColorPresentation=e.ColorInformation=e.Color=e.LocationLink=e.Location=e.Range=e.Position=e.uinteger=e.integer=e.URI=e.DocumentUri=void 0;var r;(function(l){function g(y){return typeof y=="string"}l.is=g})(r=e.DocumentUri||(e.DocumentUri={}));var n;(function(l){function g(y){return typeof y=="string"}l.is=g})(n=e.URI||(e.URI={}));var i;(function(l){l.MIN_VALUE=-2147483648,l.MAX_VALUE=2147483647;function g(y){return typeof y=="number"&&l.MIN_VALUE<=y&&y<=l.MAX_VALUE}l.is=g})(i=e.integer||(e.integer={}));var o;(function(l){l.MIN_VALUE=0,l.MAX_VALUE=2147483647;function g(y){return typeof y=="number"&&l.MIN_VALUE<=y&&y<=l.MAX_VALUE}l.is=g})(o=e.uinteger||(e.uinteger={}));var a;(function(l){function g(f,c){return f===Number.MAX_VALUE&&(f=o.MAX_VALUE),c===Number.MAX_VALUE&&(c=o.MAX_VALUE),{line:f,character:c}}l.create=g;function y(f){var c=f;return R.objectLiteral(c)&&R.uinteger(c.line)&&R.uinteger(c.character)}l.is=y})(a=e.Position||(e.Position={}));var s;(function(l){function g(f,c,b,w){if(R.uinteger(f)&&R.uinteger(c)&&R.uinteger(b)&&R.uinteger(w))return{start:a.create(f,c),end:a.create(b,w)};if(a.is(f)&&a.is(c))return{start:f,end:c};throw new Error("Range#create called with invalid arguments[".concat(f,", ").concat(c,", ").concat(b,", ").concat(w,"]"))}l.create=g;function y(f){var c=f;return R.objectLiteral(c)&&a.is(c.start)&&a.is(c.end)}l.is=y})(s=e.Range||(e.Range={}));var u;(function(l){function g(f,c){return{uri:f,range:c}}l.create=g;function y(f){var c=f;return R.objectLiteral(c)&&s.is(c.range)&&(R.string(c.uri)||R.undefined(c.uri))}l.is=y})(u=e.Location||(e.Location={}));var d;(function(l){function g(f,c,b,w){return{targetUri:f,targetRange:c,targetSelectionRange:b,originSelectionRange:w}}l.create=g;function y(f){var c=f;return R.objectLiteral(c)&&s.is(c.targetRange)&&R.string(c.targetUri)&&s.is(c.targetSelectionRange)&&(s.is(c.originSelectionRange)||R.undefined(c.originSelectionRange))}l.is=y})(d=e.LocationLink||(e.LocationLink={}));var p;(function(l){function g(f,c,b,w){return{red:f,green:c,blue:b,alpha:w}}l.create=g;function y(f){var c=f;return R.objectLiteral(c)&&R.numberRange(c.red,0,1)&&R.numberRange(c.green,0,1)&&R.numberRange(c.blue,0,1)&&R.numberRange(c.alpha,0,1)}l.is=y})(p=e.Color||(e.Color={}));var m;(function(l){function g(f,c){return{range:f,color:c}}l.create=g;function y(f){var c=f;return R.objectLiteral(c)&&s.is(c.range)&&p.is(c.color)}l.is=y})(m=e.ColorInformation||(e.ColorInformation={}));var v;(function(l){function g(f,c,b){return{label:f,textEdit:c,additionalTextEdits:b}}l.create=g;function y(f){var c=f;return R.objectLiteral(c)&&R.string(c.label)&&(R.undefined(c.textEdit)||U.is(c))&&(R.undefined(c.additionalTextEdits)||R.typedArray(c.additionalTextEdits,U.is))}l.is=y})(v=e.ColorPresentation||(e.ColorPresentation={}));var P;(function(l){l.Comment="comment",l.Imports="imports",l.Region="region"})(P=e.FoldingRangeKind||(e.FoldingRangeKind={}));var _;(function(l){function g(f,c,b,w,W,Re){var he={startLine:f,endLine:c};return R.defined(b)&&(he.startCharacter=b),R.defined(w)&&(he.endCharacter=w),R.defined(W)&&(he.kind=W),R.defined(Re)&&(he.collapsedText=Re),he}l.create=g;function y(f){var c=f;return R.objectLiteral(c)&&R.uinteger(c.startLine)&&R.uinteger(c.startLine)&&(R.undefined(c.startCharacter)||R.uinteger(c.startCharacter))&&(R.undefined(c.endCharacter)||R.uinteger(c.endCharacter))&&(R.undefined(c.kind)||R.string(c.kind))}l.is=y})(_=e.FoldingRange||(e.FoldingRange={}));var N;(function(l){function g(f,c){return{location:f,message:c}}l.create=g;function y(f){var c=f;return R.defined(c)&&u.is(c.location)&&R.string(c.message)}l.is=y})(N=e.DiagnosticRelatedInformation||(e.DiagnosticRelatedInformation={}));var I;(function(l){l.Error=1,l.Warning=2,l.Information=3,l.Hint=4})(I=e.DiagnosticSeverity||(e.DiagnosticSeverity={}));var O;(function(l){l.Unnecessary=1,l.Deprecated=2})(O=e.DiagnosticTag||(e.DiagnosticTag={}));var E;(function(l){function g(y){var f=y;return R.objectLiteral(f)&&R.string(f.href)}l.is=g})(E=e.CodeDescription||(e.CodeDescription={}));var S;(function(l){function g(f,c,b,w,W,Re){var he={range:f,message:c};return R.defined(b)&&(he.severity=b),R.defined(w)&&(he.code=w),R.defined(W)&&(he.source=W),R.defined(Re)&&(he.relatedInformation=Re),he}l.create=g;function y(f){var c,b=f;return R.defined(b)&&s.is(b.range)&&R.string(b.message)&&(R.number(b.severity)||R.undefined(b.severity))&&(R.integer(b.code)||R.string(b.code)||R.undefined(b.code))&&(R.undefined(b.codeDescription)||R.string((c=b.codeDescription)===null||c===void 0?void 0:c.href))&&(R.string(b.source)||R.undefined(b.source))&&(R.undefined(b.relatedInformation)||R.typedArray(b.relatedInformation,N.is))}l.is=y})(S=e.Diagnostic||(e.Diagnostic={}));var L;(function(l){function g(f,c){for(var b=[],w=2;w<arguments.length;w++)b[w-2]=arguments[w];var W={title:f,command:c};return R.defined(b)&&b.length>0&&(W.arguments=b),W}l.create=g;function y(f){var c=f;return R.defined(c)&&R.string(c.title)&&R.string(c.command)}l.is=y})(L=e.Command||(e.Command={}));var U;(function(l){function g(b,w){return{range:b,newText:w}}l.replace=g;function y(b,w){return{range:{start:b,end:b},newText:w}}l.insert=y;function f(b){return{range:b,newText:""}}l.del=f;function c(b){var w=b;return R.objectLiteral(w)&&R.string(w.newText)&&s.is(w.range)}l.is=c})(U=e.TextEdit||(e.TextEdit={}));var V;(function(l){function g(f,c,b){var w={label:f};return c!==void 0&&(w.needsConfirmation=c),b!==void 0&&(w.description=b),w}l.create=g;function y(f){var c=f;return R.objectLiteral(c)&&R.string(c.label)&&(R.boolean(c.needsConfirmation)||c.needsConfirmation===void 0)&&(R.string(c.description)||c.description===void 0)}l.is=y})(V=e.ChangeAnnotation||(e.ChangeAnnotation={}));var te;(function(l){function g(y){var f=y;return R.string(f)}l.is=g})(te=e.ChangeAnnotationIdentifier||(e.ChangeAnnotationIdentifier={}));var we;(function(l){function g(b,w,W){return{range:b,newText:w,annotationId:W}}l.replace=g;function y(b,w,W){return{range:{start:b,end:b},newText:w,annotationId:W}}l.insert=y;function f(b,w){return{range:b,newText:"",annotationId:w}}l.del=f;function c(b){var w=b;return U.is(w)&&(V.is(w.annotationId)||te.is(w.annotationId))}l.is=c})(we=e.AnnotatedTextEdit||(e.AnnotatedTextEdit={}));var Z;(function(l){function g(f,c){return{textDocument:f,edits:c}}l.create=g;function y(f){var c=f;return R.defined(c)&&Se.is(c.textDocument)&&Array.isArray(c.edits)}l.is=y})(Z=e.TextDocumentEdit||(e.TextDocumentEdit={}));var G;(function(l){function g(f,c,b){var w={kind:"create",uri:f};return c!==void 0&&(c.overwrite!==void 0||c.ignoreIfExists!==void 0)&&(w.options=c),b!==void 0&&(w.annotationId=b),w}l.create=g;function y(f){var c=f;return c&&c.kind==="create"&&R.string(c.uri)&&(c.options===void 0||(c.options.overwrite===void 0||R.boolean(c.options.overwrite))&&(c.options.ignoreIfExists===void 0||R.boolean(c.options.ignoreIfExists)))&&(c.annotationId===void 0||te.is(c.annotationId))}l.is=y})(G=e.CreateFile||(e.CreateFile={}));var j;(function(l){function g(f,c,b,w){var W={kind:"rename",oldUri:f,newUri:c};return b!==void 0&&(b.overwrite!==void 0||b.ignoreIfExists!==void 0)&&(W.options=b),w!==void 0&&(W.annotationId=w),W}l.create=g;function y(f){var c=f;return c&&c.kind==="rename"&&R.string(c.oldUri)&&R.string(c.newUri)&&(c.options===void 0||(c.options.overwrite===void 0||R.boolean(c.options.overwrite))&&(c.options.ignoreIfExists===void 0||R.boolean(c.options.ignoreIfExists)))&&(c.annotationId===void 0||te.is(c.annotationId))}l.is=y})(j=e.RenameFile||(e.RenameFile={}));var Y;(function(l){function g(f,c,b){var w={kind:"delete",uri:f};return c!==void 0&&(c.recursive!==void 0||c.ignoreIfNotExists!==void 0)&&(w.options=c),b!==void 0&&(w.annotationId=b),w}l.create=g;function y(f){var c=f;return c&&c.kind==="delete"&&R.string(c.uri)&&(c.options===void 0||(c.options.recursive===void 0||R.boolean(c.options.recursive))&&(c.options.ignoreIfNotExists===void 0||R.boolean(c.options.ignoreIfNotExists)))&&(c.annotationId===void 0||te.is(c.annotationId))}l.is=y})(Y=e.DeleteFile||(e.DeleteFile={}));var J;(function(l){function g(y){var f=y;return f&&(f.changes!==void 0||f.documentChanges!==void 0)&&(f.documentChanges===void 0||f.documentChanges.every(function(c){return R.string(c.kind)?G.is(c)||j.is(c)||Y.is(c):Z.is(c)}))}l.is=g})(J=e.WorkspaceEdit||(e.WorkspaceEdit={}));var Ce=function(){function l(g,y){this.edits=g,this.changeAnnotations=y}return l.prototype.insert=function(g,y,f){var c,b;if(f===void 0?c=U.insert(g,y):te.is(f)?(b=f,c=we.insert(g,y,f)):(this.assertChangeAnnotations(this.changeAnnotations),b=this.changeAnnotations.manage(f),c=we.insert(g,y,b)),this.edits.push(c),b!==void 0)return b},l.prototype.replace=function(g,y,f){var c,b;if(f===void 0?c=U.replace(g,y):te.is(f)?(b=f,c=we.replace(g,y,f)):(this.assertChangeAnnotations(this.changeAnnotations),b=this.changeAnnotations.manage(f),c=we.replace(g,y,b)),this.edits.push(c),b!==void 0)return b},l.prototype.delete=function(g,y){var f,c;if(y===void 0?f=U.del(g):te.is(y)?(c=y,f=we.del(g,y)):(this.assertChangeAnnotations(this.changeAnnotations),c=this.changeAnnotations.manage(y),f=we.del(g,c)),this.edits.push(f),c!==void 0)return c},l.prototype.add=function(g){this.edits.push(g)},l.prototype.all=function(){return this.edits},l.prototype.clear=function(){this.edits.splice(0,this.edits.length)},l.prototype.assertChangeAnnotations=function(g){if(g===void 0)throw new Error("Text edit change is not configured to manage change annotations.")},l}(),_e=function(){function l(g){this._annotations=g===void 0?Object.create(null):g,this._counter=0,this._size=0}return l.prototype.all=function(){return this._annotations},Object.defineProperty(l.prototype,"size",{get:function(){return this._size},enumerable:!1,configurable:!0}),l.prototype.manage=function(g,y){var f;if(te.is(g)?f=g:(f=this.nextId(),y=g),this._annotations[f]!==void 0)throw new Error("Id ".concat(f," is already in use."));if(y===void 0)throw new Error("No annotation provided for id ".concat(f));return this._annotations[f]=y,this._size++,f},l.prototype.nextId=function(){return this._counter++,this._counter.toString()},l}(),me=function(){function l(g){var y=this;this._textEditChanges=Object.create(null),g!==void 0?(this._workspaceEdit=g,g.documentChanges?(this._changeAnnotations=new _e(g.changeAnnotations),g.changeAnnotations=this._changeAnnotations.all(),g.documentChanges.forEach(function(f){if(Z.is(f)){var c=new Ce(f.edits,y._changeAnnotations);y._textEditChanges[f.textDocument.uri]=c}})):g.changes&&Object.keys(g.changes).forEach(function(f){var c=new Ce(g.changes[f]);y._textEditChanges[f]=c})):this._workspaceEdit={}}return Object.defineProperty(l.prototype,"edit",{get:function(){return this.initDocumentChanges(),this._changeAnnotations!==void 0&&(this._changeAnnotations.size===0?this._workspaceEdit.changeAnnotations=void 0:this._workspaceEdit.changeAnnotations=this._changeAnnotations.all()),this._workspaceEdit},enumerable:!1,configurable:!0}),l.prototype.getTextEditChange=function(g){if(Se.is(g)){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var y={uri:g.uri,version:g.version},f=this._textEditChanges[y.uri];if(!f){var c=[],b={textDocument:y,edits:c};this._workspaceEdit.documentChanges.push(b),f=new Ce(c,this._changeAnnotations),this._textEditChanges[y.uri]=f}return f}else{if(this.initChanges(),this._workspaceEdit.changes===void 0)throw new Error("Workspace edit is not configured for normal text edit changes.");var f=this._textEditChanges[g];if(!f){var c=[];this._workspaceEdit.changes[g]=c,f=new Ce(c),this._textEditChanges[g]=f}return f}},l.prototype.initDocumentChanges=function(){this._workspaceEdit.documentChanges===void 0&&this._workspaceEdit.changes===void 0&&(this._changeAnnotations=new _e,this._workspaceEdit.documentChanges=[],this._workspaceEdit.changeAnnotations=this._changeAnnotations.all())},l.prototype.initChanges=function(){this._workspaceEdit.documentChanges===void 0&&this._workspaceEdit.changes===void 0&&(this._workspaceEdit.changes=Object.create(null))},l.prototype.createFile=function(g,y,f){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var c;V.is(y)||te.is(y)?c=y:f=y;var b,w;if(c===void 0?b=G.create(g,f):(w=te.is(c)?c:this._changeAnnotations.manage(c),b=G.create(g,f,w)),this._workspaceEdit.documentChanges.push(b),w!==void 0)return w},l.prototype.renameFile=function(g,y,f,c){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var b;V.is(f)||te.is(f)?b=f:c=f;var w,W;if(b===void 0?w=j.create(g,y,c):(W=te.is(b)?b:this._changeAnnotations.manage(b),w=j.create(g,y,c,W)),this._workspaceEdit.documentChanges.push(w),W!==void 0)return W},l.prototype.deleteFile=function(g,y,f){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var c;V.is(y)||te.is(y)?c=y:f=y;var b,w;if(c===void 0?b=Y.create(g,f):(w=te.is(c)?c:this._changeAnnotations.manage(c),b=Y.create(g,f,w)),this._workspaceEdit.documentChanges.push(b),w!==void 0)return w},l}();e.WorkspaceChange=me;var Je;(function(l){function g(f){return{uri:f}}l.create=g;function y(f){var c=f;return R.defined(c)&&R.string(c.uri)}l.is=y})(Je=e.TextDocumentIdentifier||(e.TextDocumentIdentifier={}));var Ve;(function(l){function g(f,c){return{uri:f,version:c}}l.create=g;function y(f){var c=f;return R.defined(c)&&R.string(c.uri)&&R.integer(c.version)}l.is=y})(Ve=e.VersionedTextDocumentIdentifier||(e.VersionedTextDocumentIdentifier={}));var Se;(function(l){function g(f,c){return{uri:f,version:c}}l.create=g;function y(f){var c=f;return R.defined(c)&&R.string(c.uri)&&(c.version===null||R.integer(c.version))}l.is=y})(Se=e.OptionalVersionedTextDocumentIdentifier||(e.OptionalVersionedTextDocumentIdentifier={}));var st;(function(l){function g(f,c,b,w){return{uri:f,languageId:c,version:b,text:w}}l.create=g;function y(f){var c=f;return R.defined(c)&&R.string(c.uri)&&R.string(c.languageId)&&R.integer(c.version)&&R.string(c.text)}l.is=y})(st=e.TextDocumentItem||(e.TextDocumentItem={}));var ur;(function(l){l.PlainText="plaintext",l.Markdown="markdown";function g(y){var f=y;return f===l.PlainText||f===l.Markdown}l.is=g})(ur=e.MarkupKind||(e.MarkupKind={}));var Tr;(function(l){function g(y){var f=y;return R.objectLiteral(y)&&ur.is(f.kind)&&R.string(f.value)}l.is=g})(Tr=e.MarkupContent||(e.MarkupContent={}));var di;(function(l){l.Text=1,l.Method=2,l.Function=3,l.Constructor=4,l.Field=5,l.Variable=6,l.Class=7,l.Interface=8,l.Module=9,l.Property=10,l.Unit=11,l.Value=12,l.Enum=13,l.Keyword=14,l.Snippet=15,l.Color=16,l.File=17,l.Reference=18,l.Folder=19,l.EnumMember=20,l.Constant=21,l.Struct=22,l.Event=23,l.Operator=24,l.TypeParameter=25})(di=e.CompletionItemKind||(e.CompletionItemKind={}));var Ln;(function(l){l.PlainText=1,l.Snippet=2})(Ln=e.InsertTextFormat||(e.InsertTextFormat={}));var Mn;(function(l){l.Deprecated=1})(Mn=e.CompletionItemTag||(e.CompletionItemTag={}));var Kt;(function(l){function g(f,c,b){return{newText:f,insert:c,replace:b}}l.create=g;function y(f){var c=f;return c&&R.string(c.newText)&&s.is(c.insert)&&s.is(c.replace)}l.is=y})(Kt=e.InsertReplaceEdit||(e.InsertReplaceEdit={}));var fi;(function(l){l.asIs=1,l.adjustIndentation=2})(fi=e.InsertTextMode||(e.InsertTextMode={}));var pi;(function(l){function g(y){var f=y;return f&&(R.string(f.detail)||f.detail===void 0)&&(R.string(f.description)||f.description===void 0)}l.is=g})(pi=e.CompletionItemLabelDetails||(e.CompletionItemLabelDetails={}));var hi;(function(l){function g(y){return{label:y}}l.create=g})(hi=e.CompletionItem||(e.CompletionItem={}));var Bi;(function(l){function g(y,f){return{items:y||[],isIncomplete:!!f}}l.create=g})(Bi=e.CompletionList||(e.CompletionList={}));var Qe;(function(l){function g(f){return f.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}l.fromPlainText=g;function y(f){var c=f;return R.string(c)||R.objectLiteral(c)&&R.string(c.language)&&R.string(c.value)}l.is=y})(Qe=e.MarkedString||(e.MarkedString={}));var wt;(function(l){function g(y){var f=y;return!!f&&R.objectLiteral(f)&&(Tr.is(f.contents)||Qe.is(f.contents)||R.typedArray(f.contents,Qe.is))&&(y.range===void 0||s.is(y.range))}l.is=g})(wt=e.Hover||(e.Hover={}));var zi;(function(l){function g(y,f){return f?{label:y,documentation:f}:{label:y}}l.create=g})(zi=e.ParameterInformation||(e.ParameterInformation={}));var Wr;(function(l){function g(y,f){for(var c=[],b=2;b<arguments.length;b++)c[b-2]=arguments[b];var w={label:y};return R.defined(f)&&(w.documentation=f),R.defined(c)?w.parameters=c:w.parameters=[],w}l.create=g})(Wr=e.SignatureInformation||(e.SignatureInformation={}));var Kr;(function(l){l.Text=1,l.Read=2,l.Write=3})(Kr=e.DocumentHighlightKind||(e.DocumentHighlightKind={}));var Br;(function(l){function g(y,f){var c={range:y};return R.number(f)&&(c.kind=f),c}l.create=g})(Br=e.DocumentHighlight||(e.DocumentHighlight={}));var on;(function(l){l.File=1,l.Module=2,l.Namespace=3,l.Package=4,l.Class=5,l.Method=6,l.Property=7,l.Field=8,l.Constructor=9,l.Enum=10,l.Interface=11,l.Function=12,l.Variable=13,l.Constant=14,l.String=15,l.Number=16,l.Boolean=17,l.Array=18,l.Object=19,l.Key=20,l.Null=21,l.EnumMember=22,l.Struct=23,l.Event=24,l.Operator=25,l.TypeParameter=26})(on=e.SymbolKind||(e.SymbolKind={}));var Rr;(function(l){l.Deprecated=1})(Rr=e.SymbolTag||(e.SymbolTag={}));var Dt;(function(l){function g(y,f,c,b,w){var W={name:y,kind:f,location:{uri:b,range:c}};return w&&(W.containerName=w),W}l.create=g})(Dt=e.SymbolInformation||(e.SymbolInformation={}));var zr;(function(l){function g(y,f,c,b){return b!==void 0?{name:y,kind:f,location:{uri:c,range:b}}:{name:y,kind:f,location:{uri:c}}}l.create=g})(zr=e.WorkspaceSymbol||(e.WorkspaceSymbol={}));var mi;(function(l){function g(f,c,b,w,W,Re){var he={name:f,detail:c,kind:b,range:w,selectionRange:W};return Re!==void 0&&(he.children=Re),he}l.create=g;function y(f){var c=f;return c&&R.string(c.name)&&R.number(c.kind)&&s.is(c.range)&&s.is(c.selectionRange)&&(c.detail===void 0||R.string(c.detail))&&(c.deprecated===void 0||R.boolean(c.deprecated))&&(c.children===void 0||Array.isArray(c.children))&&(c.tags===void 0||Array.isArray(c.tags))}l.is=y})(mi=e.DocumentSymbol||(e.DocumentSymbol={}));var cr;(function(l){l.Empty="",l.QuickFix="quickfix",l.Refactor="refactor",l.RefactorExtract="refactor.extract",l.RefactorInline="refactor.inline",l.RefactorRewrite="refactor.rewrite",l.Source="source",l.SourceOrganizeImports="source.organizeImports",l.SourceFixAll="source.fixAll"})(cr=e.CodeActionKind||(e.CodeActionKind={}));var Ot;(function(l){l.Invoked=1,l.Automatic=2})(Ot=e.CodeActionTriggerKind||(e.CodeActionTriggerKind={}));var _t;(function(l){function g(f,c,b){var w={diagnostics:f};return c!=null&&(w.only=c),b!=null&&(w.triggerKind=b),w}l.create=g;function y(f){var c=f;return R.defined(c)&&R.typedArray(c.diagnostics,S.is)&&(c.only===void 0||R.typedArray(c.only,R.string))&&(c.triggerKind===void 0||c.triggerKind===Ot.Invoked||c.triggerKind===Ot.Automatic)}l.is=y})(_t=e.CodeActionContext||(e.CodeActionContext={}));var br;(function(l){function g(f,c,b){var w={title:f},W=!0;return typeof c=="string"?(W=!1,w.kind=c):L.is(c)?w.command=c:w.edit=c,W&&b!==void 0&&(w.kind=b),w}l.create=g;function y(f){var c=f;return c&&R.string(c.title)&&(c.diagnostics===void 0||R.typedArray(c.diagnostics,S.is))&&(c.kind===void 0||R.string(c.kind))&&(c.edit!==void 0||c.command!==void 0)&&(c.command===void 0||L.is(c.command))&&(c.isPreferred===void 0||R.boolean(c.isPreferred))&&(c.edit===void 0||J.is(c.edit))}l.is=y})(br=e.CodeAction||(e.CodeAction={}));var lr;(function(l){function g(f,c){var b={range:f};return R.defined(c)&&(b.data=c),b}l.create=g;function y(f){var c=f;return R.defined(c)&&s.is(c.range)&&(R.undefined(c.command)||L.is(c.command))}l.is=y})(lr=e.CodeLens||(e.CodeLens={}));var Or;(function(l){function g(f,c){return{tabSize:f,insertSpaces:c}}l.create=g;function y(f){var c=f;return R.defined(c)&&R.uinteger(c.tabSize)&&R.boolean(c.insertSpaces)}l.is=y})(Or=e.FormattingOptions||(e.FormattingOptions={}));var D;(function(l){function g(f,c,b){return{range:f,target:c,data:b}}l.create=g;function y(f){var c=f;return R.defined(c)&&s.is(c.range)&&(R.undefined(c.target)||R.string(c.target))}l.is=y})(D=e.DocumentLink||(e.DocumentLink={}));var T;(function(l){function g(f,c){return{range:f,parent:c}}l.create=g;function y(f){var c=f;return R.objectLiteral(c)&&s.is(c.range)&&(c.parent===void 0||l.is(c.parent))}l.is=y})(T=e.SelectionRange||(e.SelectionRange={}));var q;(function(l){l.namespace="namespace",l.type="type",l.class="class",l.enum="enum",l.interface="interface",l.struct="struct",l.typeParameter="typeParameter",l.parameter="parameter",l.variable="variable",l.property="property",l.enumMember="enumMember",l.event="event",l.function="function",l.method="method",l.macro="macro",l.keyword="keyword",l.modifier="modifier",l.comment="comment",l.string="string",l.number="number",l.regexp="regexp",l.operator="operator",l.decorator="decorator"})(q=e.SemanticTokenTypes||(e.SemanticTokenTypes={}));var M;(function(l){l.declaration="declaration",l.definition="definition",l.readonly="readonly",l.static="static",l.deprecated="deprecated",l.abstract="abstract",l.async="async",l.modification="modification",l.documentation="documentation",l.defaultLibrary="defaultLibrary"})(M=e.SemanticTokenModifiers||(e.SemanticTokenModifiers={}));var H;(function(l){function g(y){var f=y;return R.objectLiteral(f)&&(f.resultId===void 0||typeof f.resultId=="string")&&Array.isArray(f.data)&&(f.data.length===0||typeof f.data[0]=="number")}l.is=g})(H=e.SemanticTokens||(e.SemanticTokens={}));var le;(function(l){function g(f,c){return{range:f,text:c}}l.create=g;function y(f){var c=f;return c!=null&&s.is(c.range)&&R.string(c.text)}l.is=y})(le=e.InlineValueText||(e.InlineValueText={}));var fe;(function(l){function g(f,c,b){return{range:f,variableName:c,caseSensitiveLookup:b}}l.create=g;function y(f){var c=f;return c!=null&&s.is(c.range)&&R.boolean(c.caseSensitiveLookup)&&(R.string(c.variableName)||c.variableName===void 0)}l.is=y})(fe=e.InlineValueVariableLookup||(e.InlineValueVariableLookup={}));var Te;(function(l){function g(f,c){return{range:f,expression:c}}l.create=g;function y(f){var c=f;return c!=null&&s.is(c.range)&&(R.string(c.expression)||c.expression===void 0)}l.is=y})(Te=e.InlineValueEvaluatableExpression||(e.InlineValueEvaluatableExpression={}));var ae;(function(l){function g(f,c){return{frameId:f,stoppedLocation:c}}l.create=g;function y(f){var c=f;return R.defined(c)&&s.is(f.stoppedLocation)}l.is=y})(ae=e.InlineValueContext||(e.InlineValueContext={}));var re;(function(l){l.Type=1,l.Parameter=2;function g(y){return y===1||y===2}l.is=g})(re=e.InlayHintKind||(e.InlayHintKind={}));var ne;(function(l){function g(f){return{value:f}}l.create=g;function y(f){var c=f;return R.objectLiteral(c)&&(c.tooltip===void 0||R.string(c.tooltip)||Tr.is(c.tooltip))&&(c.location===void 0||u.is(c.location))&&(c.command===void 0||L.is(c.command))}l.is=y})(ne=e.InlayHintLabelPart||(e.InlayHintLabelPart={}));var pe;(function(l){function g(f,c,b){var w={position:f,label:c};return b!==void 0&&(w.kind=b),w}l.create=g;function y(f){var c=f;return R.objectLiteral(c)&&a.is(c.position)&&(R.string(c.label)||R.typedArray(c.label,ne.is))&&(c.kind===void 0||re.is(c.kind))&&c.textEdits===void 0||R.typedArray(c.textEdits,U.is)&&(c.tooltip===void 0||R.string(c.tooltip)||Tr.is(c.tooltip))&&(c.paddingLeft===void 0||R.boolean(c.paddingLeft))&&(c.paddingRight===void 0||R.boolean(c.paddingRight))}l.is=y})(pe=e.InlayHint||(e.InlayHint={}));var Ee;(function(l){function g(y){var f=y;return R.objectLiteral(f)&&n.is(f.uri)&&R.string(f.name)}l.is=g})(Ee=e.WorkspaceFolder||(e.WorkspaceFolder={})),e.EOL=[`
`,`\r
`,"\r"];var Ze;(function(l){function g(b,w,W,Re){return new Tt(b,w,W,Re)}l.create=g;function y(b){var w=b;return!!(R.defined(w)&&R.string(w.uri)&&(R.undefined(w.languageId)||R.string(w.languageId))&&R.uinteger(w.lineCount)&&R.func(w.getText)&&R.func(w.positionAt)&&R.func(w.offsetAt))}l.is=y;function f(b,w){for(var W=b.getText(),Re=c(w,function(an,Vi){var Xu=an.range.start.line-Vi.range.start.line;return Xu===0?an.range.start.character-Vi.range.start.character:Xu}),he=W.length,Rt=Re.length-1;Rt>=0;Rt--){var bt=Re[Rt],Bt=b.offsetAt(bt.range.start),ee=b.offsetAt(bt.range.end);if(ee<=he)W=W.substring(0,Bt)+bt.newText+W.substring(ee,W.length);else throw new Error("Overlapping edit");he=Bt}return W}l.applyEdits=f;function c(b,w){if(b.length<=1)return b;var W=b.length/2|0,Re=b.slice(0,W),he=b.slice(W);c(Re,w),c(he,w);for(var Rt=0,bt=0,Bt=0;Rt<Re.length&&bt<he.length;){var ee=w(Re[Rt],he[bt]);ee<=0?b[Bt++]=Re[Rt++]:b[Bt++]=he[bt++]}for(;Rt<Re.length;)b[Bt++]=Re[Rt++];for(;bt<he.length;)b[Bt++]=he[bt++];return b}})(Ze=e.TextDocument||(e.TextDocument={}));var Tt=function(){function l(g,y,f,c){this._uri=g,this._languageId=y,this._version=f,this._content=c,this._lineOffsets=void 0}return Object.defineProperty(l.prototype,"uri",{get:function(){return this._uri},enumerable:!1,configurable:!0}),Object.defineProperty(l.prototype,"languageId",{get:function(){return this._languageId},enumerable:!1,configurable:!0}),Object.defineProperty(l.prototype,"version",{get:function(){return this._version},enumerable:!1,configurable:!0}),l.prototype.getText=function(g){if(g){var y=this.offsetAt(g.start),f=this.offsetAt(g.end);return this._content.substring(y,f)}return this._content},l.prototype.update=function(g,y){this._content=g.text,this._version=y,this._lineOffsets=void 0},l.prototype.getLineOffsets=function(){if(this._lineOffsets===void 0){for(var g=[],y=this._content,f=!0,c=0;c<y.length;c++){f&&(g.push(c),f=!1);var b=y.charAt(c);f=b==="\r"||b===`
`,b==="\r"&&c+1<y.length&&y.charAt(c+1)===`
`&&c++}f&&y.length>0&&g.push(y.length),this._lineOffsets=g}return this._lineOffsets},l.prototype.positionAt=function(g){g=Math.max(Math.min(g,this._content.length),0);var y=this.getLineOffsets(),f=0,c=y.length;if(c===0)return a.create(0,g);for(;f<c;){var b=Math.floor((f+c)/2);y[b]>g?c=b:f=b+1}var w=f-1;return a.create(w,g-y[w])},l.prototype.offsetAt=function(g){var y=this.getLineOffsets();if(g.line>=y.length)return this._content.length;if(g.line<0)return 0;var f=y[g.line],c=g.line+1<y.length?y[g.line+1]:this._content.length;return Math.max(Math.min(f+g.character,c),f)},Object.defineProperty(l.prototype,"lineCount",{get:function(){return this.getLineOffsets().length},enumerable:!1,configurable:!0}),l}(),R;(function(l){var g=Object.prototype.toString;function y(ee){return typeof ee<"u"}l.defined=y;function f(ee){return typeof ee>"u"}l.undefined=f;function c(ee){return ee===!0||ee===!1}l.boolean=c;function b(ee){return g.call(ee)==="[object String]"}l.string=b;function w(ee){return g.call(ee)==="[object Number]"}l.number=w;function W(ee,an,Vi){return g.call(ee)==="[object Number]"&&an<=ee&&ee<=Vi}l.numberRange=W;function Re(ee){return g.call(ee)==="[object Number]"&&-2147483648<=ee&&ee<=2147483647}l.integer=Re;function he(ee){return g.call(ee)==="[object Number]"&&0<=ee&&ee<=2147483647}l.uinteger=he;function Rt(ee){return g.call(ee)==="[object Function]"}l.func=Rt;function bt(ee){return ee!==null&&typeof ee=="object"}l.objectLiteral=bt;function Bt(ee,an){return Array.isArray(ee)&&ee.every(an)}l.typedArray=Bt})(R||(R={}))})});var r_=h($r=>{"use strict";var Q2=$r&&$r.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var i=Object.getOwnPropertyDescriptor(e,r);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,i)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),Z2=$r&&$r.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),ez=$r&&$r.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var r in t)r!=="default"&&Object.prototype.hasOwnProperty.call(t,r)&&Q2(e,t,r);return Z2(e,t),e};Object.defineProperty($r,"__esModule",{value:!0});$r.LangiumGrammarValidator=$r.IssueCodes=$r.registerValidationChecks=void 0;var Jv=ws(),Fo=Ye(),jo=un(),Qv=ft(),Uo=Vt(),Zv=er(),lt=ez(Ke()),e_=Ke(),tr=Yt();function tz(t){let e=t.validation.ValidationRegistry,r=t.validation.LangiumGrammarValidator,n={Action:[r.checkAssignmentReservedName],AbstractRule:r.checkRuleName,Assignment:[r.checkAssignmentWithFeatureName,r.checkAssignmentToFragmentRule,r.checkAssignmentTypes,r.checkAssignmentReservedName],ParserRule:[r.checkParserRuleDataType,r.checkRuleParametersUsed,r.checkParserRuleReservedName],TerminalRule:[r.checkTerminalRuleReturnType,r.checkHiddenTerminalRule,r.checkEmptyTerminalRule],InferredType:r.checkTypeReservedName,Keyword:r.checkKeyword,UnorderedGroup:r.checkUnorderedGroup,Grammar:[r.checkGrammarName,r.checkEntryGrammarRule,r.checkUniqueRuleName,r.checkUniqueTypeName,r.checkUniqueImportedRules,r.checkDuplicateImportedGrammar,r.checkGrammarHiddenTokens,r.checkGrammarForUnusedRules,r.checkGrammarTypeInfer,r.checkClashingTerminalNames],GrammarImport:r.checkPackageImport,CharacterRange:r.checkInvalidCharacterRange,Interface:[r.checkTypeReservedName,r.checkInterfacePropertyTypes],Type:[r.checkTypeReservedName],TypeAttribute:r.checkTypeReservedName,RuleCall:[r.checkUsedHiddenTerminalRule,r.checkUsedFragmentTerminalRule,r.checkRuleCallParameters],TerminalRuleCall:r.checkUsedHiddenTerminalRule,CrossReference:[r.checkCrossReferenceSyntax,r.checkCrossRefNameAssignment,r.checkCrossRefTerminalType,r.checkCrossRefType],AtomType:[r.checkAtomTypeRefType,r.checkFragmentsInTypes]};e.register(n,r)}$r.registerValidationChecks=tz;var Mr;(function(t){t.GrammarNameUppercase="grammar-name-uppercase",t.RuleNameUppercase="rule-name-uppercase",t.HiddenGrammarTokens="hidden-grammar-tokens",t.UseRegexTokens="use-regex-tokens",t.EntryRuleTokenSyntax="entry-rule-token-syntax",t.CrossRefTokenSyntax="cross-ref-token-syntax",t.UnnecessaryFileExtension="unnecessary-file-extension",t.InvalidReturns="invalid-returns",t.InvalidInfers="invalid-infers",t.MissingInfer="missing-infer",t.MissingReturns="missing-returns",t.SuperfluousInfer="superfluous-infer",t.OptionalUnorderedGroup="optional-unordered-group"})(Mr=$r.IssueCodes||($r.IssueCodes={}));var t_=class{constructor(e){this.references=e.references.References,this.documents=e.shared.workspace.LangiumDocuments}checkGrammarName(e,r){if(e.name){let n=e.name.substring(0,1);n.toUpperCase()!==n&&r("warning","Grammar name should start with an upper case letter.",{node:e,property:"name",code:Mr.GrammarNameUppercase})}}checkEntryGrammarRule(e,r){if(e.isDeclared&&!e.name)return;let n=e.rules.filter(i=>lt.isParserRule(i)&&i.entry);if(e.isDeclared&&n.length===0){let i=e.rules.find(o=>lt.isParserRule(o)&&!(0,tr.isDataTypeRule)(o));i?r("error","The grammar is missing an entry parser rule. This rule can be an entry one.",{node:i,property:"name",code:Mr.EntryRuleTokenSyntax}):r("error","This grammar is missing an entry parser rule.",{node:e,property:"name"})}else!e.isDeclared&&n.length>=1?n.forEach(i=>r("error","Cannot declare entry rules for unnamed grammars.",{node:i,property:"name"})):n.length>1?n.forEach(i=>r("error","The entry rule has to be unique.",{node:i,property:"name"})):n.length===1&&(0,tr.isDataTypeRule)(n[0])&&r("error","The entry rule cannot be a data type rule.",{node:n[0],property:"name"})}checkUniqueRuleName(e,r){let n=i=>(0,Zv.stream)(i.rules).filter(o=>!Ic(o));this.checkUniqueName(e,r,n,"rule")}checkUniqueTypeName(e,r){let n=i=>(0,Zv.stream)(i.types).concat(i.interfaces);this.checkUniqueName(e,r,n,"type")}checkUniqueName(e,r,n,i){let o=new jo.MultiMap;n(e).forEach(u=>o.add(u.name,u));for(let[,u]of o.entriesGroupedByKey())u.length>1&&u.forEach(d=>{r("error",`A ${i}'s name has to be unique.`,{node:d,property:"name"})});let a=new Set,s=(0,tr.resolveTransitiveImports)(this.documents,e);for(let u of s)n(u).forEach(d=>a.add(d.name));for(let u of o.keys())a.has(u)&&o.get(u).forEach(p=>{r("error",`A ${i} with the name '${p.name}' already exists in an imported grammar.`,{node:p,property:"name"})})}checkDuplicateImportedGrammar(e,r){let n=new jo.MultiMap;for(let i of e.imports){let o=(0,tr.resolveImport)(this.documents,i);o&&n.add(o,i)}for(let[,i]of n.entriesGroupedByKey())i.length>1&&i.forEach((o,a)=>{a>0&&r("warning","The grammar is already being directly imported.",{node:o,tags:[Jv.DiagnosticTag.Unnecessary]})})}checkUniqueImportedRules(e,r){let n=new Map;for(let o of e.imports){let a=(0,tr.resolveTransitiveImports)(this.documents,o);n.set(o,a)}let i=new jo.MultiMap;for(let o of e.imports){let a=n.get(o);for(let s of e.imports){if(o===s)continue;let u=n.get(s),d=this.getDuplicateExportedRules(a,u);for(let p of d)i.add(o,p)}}for(let o of e.imports){let a=i.get(o);a.length>0&&r("error","Some rules exported by this grammar are also included in other imports: "+(0,Zv.stream)(a).distinct().join(", "),{node:o,property:"path"})}}getDuplicateExportedRules(e,r){let i=e.filter(s=>!r.includes(s)).flatMap(s=>s.rules),o=r.flatMap(s=>s.rules),a=new Set;for(let s of i){let u=s.name;for(let d of o){let p=d.name;u===p&&a.add(d.name)}}return a}checkGrammarTypeInfer(e,r){var n,i,o;let a=new Set;for(let u of e.types)a.add(u.name);for(let u of e.interfaces)a.add(u.name);(0,tr.resolveTransitiveImports)(this.documents,e).forEach(u=>{u.types.forEach(d=>a.add(d.name)),u.interfaces.forEach(d=>a.add(d.name))});for(let u of e.rules.filter(lt.isParserRule)){if(Ic(u))continue;let d=(0,tr.isDataTypeRule)(u),p=!u.returnType&&!u.dataType,m=(0,tr.getTypeNameWithoutError)(u);if(!d&&m&&a.has(m)===p){if((p||((n=u.returnType)===null||n===void 0?void 0:n.ref)!==void 0)&&u.inferredType===void 0)r("error",s(m,p),{node:u,property:"name",code:Mr.MissingReturns});else if(p||((i=u.returnType)===null||i===void 0?void 0:i.ref)!==void 0){let v=(0,Uo.findNodeForKeyword)(u.inferredType.$cstNode,"infers");r("error",s(m,p),{node:u.inferredType,property:"name",code:Mr.InvalidInfers,data:v&&(0,Qv.toDocumentSegment)(v)})}}else if(d&&p){let v=(0,Uo.findNodeForKeyword)(u.$cstNode,"infer");r("error","Data type rules cannot infer a type.",{node:u,property:"inferredType",code:Mr.InvalidInfers,data:v&&(0,Qv.toDocumentSegment)(v)})}}for(let u of(0,Fo.streamAllContents)(e).filter(lt.isAction)){let d=this.getActionType(u);if(d){let p=!!u.inferredType,m=(0,tr.getTypeNameWithoutError)(u);if(u.type&&a.has(m)===p){let v=p?(0,Uo.findNodeForKeyword)(u.$cstNode,"infer"):(0,Uo.findNodeForKeyword)(u.$cstNode,"{");r("error",s(m,p),{node:u,property:"type",code:p?Mr.SuperfluousInfer:Mr.MissingInfer,data:v&&(0,Qv.toDocumentSegment)(v)})}else if(d&&a.has(m)&&p&&u.$cstNode){let v=(0,Uo.findNodeForProperty)((o=u.inferredType)===null||o===void 0?void 0:o.$cstNode,"name"),P=(0,Uo.findNodeForKeyword)(u.$cstNode,"{");v&&P&&r("error",`${m} is a declared type and cannot be redefined.`,{node:u,property:"type",code:Mr.SuperfluousInfer,data:{start:P.range.end,end:v.range.start}})}}}function s(u,d){return d?`The type '${u}' is already explicitly declared and cannot be inferred.`:`The type '${u}' is not explicitly declared and must be inferred.`}}getActionType(e){var r;if(e.type)return(r=e.type)===null||r===void 0?void 0:r.ref;if(e.inferredType)return e.inferredType}checkGrammarHiddenTokens(e,r){e.definesHiddenTokens&&r("error","Hidden terminals are declared at the terminal definition.",{node:e,property:"definesHiddenTokens",code:Mr.HiddenGrammarTokens})}checkHiddenTerminalRule(e,r){e.hidden&&e.fragment&&r("error","Cannot use terminal fragments as hidden tokens.",{node:e,property:"hidden"})}checkEmptyTerminalRule(e,r){try{let n=(0,tr.terminalRegex)(e);new RegExp(n).test("")&&r("error","This terminal could match an empty string.",{node:e,property:"name"})}catch{}}checkUsedHiddenTerminalRule(e,r){let n=(0,Fo.getContainerOfType)(e,i=>lt.isTerminalRule(i)||lt.isParserRule(i));if(n){if("hidden"in n&&n.hidden)return;let i=e.rule.ref;lt.isTerminalRule(i)&&i.hidden&&r("error","Cannot use hidden terminal in non-hidden rule",{node:e,property:"rule"})}}checkUsedFragmentTerminalRule(e,r){let n=e.rule.ref;lt.isTerminalRule(n)&&n.fragment&&(0,Fo.getContainerOfType)(e,lt.isParserRule)&&r("error","Cannot use terminal fragments as part of parser rules.",{node:e,property:"rule"})}checkCrossReferenceSyntax(e,r){e.deprecatedSyntax&&r("error","'|' is deprecated. Please, use ':' instead.",{node:e,property:"deprecatedSyntax",code:Mr.CrossRefTokenSyntax})}checkPackageImport(e,r){(0,tr.resolveImport)(this.documents,e)===void 0?r("error","Import cannot be resolved.",{node:e,property:"path"}):e.path.endsWith(".langium")&&r("warning","Imports do not need file extensions.",{node:e,property:"path",code:Mr.UnnecessaryFileExtension})}checkInvalidCharacterRange(e,r){if(e.right){let n="Character ranges cannot use more than one character",i=!1;e.left.value.length>1&&(i=!0,r("error",n,{node:e.left,property:"value"})),e.right.value.length>1&&(i=!0,r("error",n,{node:e.right,property:"value"})),i||r("hint","Consider using regex instead of character ranges",{node:e,code:Mr.UseRegexTokens})}}checkGrammarForUnusedRules(e,r){let n=(0,Uo.getAllReachableRules)(e,!0);for(let i of e.rules)lt.isTerminalRule(i)&&i.hidden||Ic(i)||n.has(i)||r("hint","This rule is declared but never referenced.",{node:i,property:"name",tags:[Jv.DiagnosticTag.Unnecessary]})}checkClashingTerminalNames(e,r){let n=new jo.MultiMap,i=new Set;for(let d of e.rules)lt.isTerminalRule(d)&&d.name&&n.add(d.name,d),lt.isParserRule(d)&&(0,Fo.streamAllContents)(d).filter(lt.isKeyword).forEach(m=>i.add(m.value));let o=new jo.MultiMap,a=new jo.MultiMap;for(let d of e.imports){let p=(0,tr.resolveTransitiveImports)(this.documents,d);for(let m of p)for(let v of m.rules)lt.isTerminalRule(v)&&v.name?o.add(v.name,d):lt.isParserRule(v)&&v.name&&(0,Fo.streamAllContents)(v).filter(lt.isKeyword).forEach(_=>a.add(_.value,d))}for(let d of n.values())if(i.has(d.name))r("error","Terminal name clashes with existing keyword.",{node:d,property:"name"});else if(a.has(d.name)){let p=a.get(d.name);r("error",`Terminal name clashes with imported keyword from "${p[0].path}".`,{node:d,property:"name"})}let s=new jo.MultiMap;for(let d of i)for(let p of o.get(d))s.add(p,d);for(let[d,p]of s.entriesGroupedByKey())p.length>0&&r("error",`Imported terminals (${p.join(", ")}) clash with locally defined keywords.`,{node:d,property:"path"});let u=new jo.MultiMap;for(let[d,p]of o.entriesGroupedByKey()){let m=a.get(d);m.length>0&&p.filter(v=>!m.includes(v)).forEach(v=>u.add(v,d))}for(let[d,p]of u.entriesGroupedByKey())p.length>0&&r("error",`Imported terminals (${p.join(", ")}) clash with imported keywords.`,{node:d,property:"path"})}checkRuleName(e,r){if(e.name&&!Ic(e)){let n=e.name.substring(0,1);n.toUpperCase()!==n&&r("warning","Rule name should start with an upper case letter.",{node:e,property:"name",code:Mr.RuleNameUppercase})}}checkTypeReservedName(e,r){this.checkReservedName(e,"name",r)}checkAssignmentReservedName(e,r){this.checkReservedName(e,"feature",r)}checkParserRuleReservedName(e,r){e.inferredType||this.checkReservedName(e,"name",r)}checkReservedName(e,r,n){let i=e[r];typeof i=="string"&&rz.has(i)&&n("error",`'${i}' is a reserved name of the JavaScript runtime.`,{node:e,property:r})}checkKeyword(e,r){(0,Fo.getContainerOfType)(e,e_.isParserRule)&&(e.value.length===0?r("error","Keywords cannot be empty.",{node:e}):e.value.trim().length===0?r("error","Keywords cannot only consist of whitespace characters.",{node:e}):/\s/g.test(e.value)&&r("warning","Keywords should not contain whitespace characters.",{node:e}))}checkUnorderedGroup(e,r){e.elements.forEach(n=>{(0,tr.isOptionalCardinality)(n.cardinality)&&r("error","Optional elements in Unordered groups are currently not supported",{node:n,code:Mr.OptionalUnorderedGroup})})}checkRuleParametersUsed(e,r){let n=e.parameters;if(n.length>0){let i=(0,Fo.streamAllContents)(e).filter(lt.isParameterReference);for(let o of n)i.some(a=>a.parameter.ref===o)||r("hint",`Parameter '${o.name}' is unused.`,{node:o,tags:[Jv.DiagnosticTag.Unnecessary]})}}checkParserRuleDataType(e,r){if(Ic(e))return;let n=e.dataType,i=(0,tr.isDataTypeRule)(e);!n&&i?r("error","This parser rule does not create an object. Add a primitive return type or an action to the start of the rule to force object instantiation.",{node:e,property:"name"}):n&&!i&&r("error","Normal parser rules are not allowed to return a primitive value. Use a datatype rule for that.",{node:e,property:"dataType"})}checkAssignmentToFragmentRule(e,r){e.terminal&&(0,e_.isRuleCall)(e.terminal)&&(0,e_.isParserRule)(e.terminal.rule.ref)&&e.terminal.rule.ref.fragment&&r("error",`Cannot use fragment rule '${e.terminal.rule.ref.name}' for assignment of property '${e.feature}'.`,{node:e,property:"terminal"})}checkAssignmentTypes(e,r){if(!e.terminal)return;let n;(0,Fo.streamAllContents)(e.terminal).map(o=>lt.isCrossReference(o)?"ref":"other").find(o=>n?o!==n:(n=o,!1))&&r("error",this.createMixedTypeError(e.feature),{node:e,property:"terminal"})}checkInterfacePropertyTypes(e,r){e.attributes.filter(n=>n.typeAlternatives.length>1).forEach(n=>{let i=a=>a.isRef?"ref":"other",o=i(n.typeAlternatives[0]);n.typeAlternatives.slice(1).some(a=>i(a)!==o)&&r("error",this.createMixedTypeError(n.name),{node:n,property:"typeAlternatives"})})}createMixedTypeError(e){return`Mixing a cross-reference with other types is not supported. Consider splitting property "${e}" into two or more different properties.`}checkTerminalRuleReturnType(e,r){var n;!((n=e.type)===null||n===void 0)&&n.name&&!(0,tr.isPrimitiveType)(e.type.name)&&r("error","Terminal rules can only return primitive types like 'string', 'boolean', 'number', 'Date' or 'bigint'.",{node:e.type,property:"name"})}checkRuleCallParameters(e,r){let n=e.rule.ref;if(lt.isParserRule(n)){let i=n.parameters.length,o=e.arguments.length;i!==o&&r("error",`Rule '${n.name}' expects ${i} arguments, but got ${o}.`,{node:e})}else lt.isTerminalRule(n)&&e.arguments.length>0&&r("error","Terminal rules do not accept any arguments",{node:e})}checkCrossRefNameAssignment(e,r){!e.terminal&&e.type.ref&&!(0,Uo.findNameAssignment)(e.type.ref)&&r("error","Cannot infer terminal or data type rule for cross reference.",{node:e,property:"type"})}checkCrossRefTerminalType(e,r){lt.isRuleCall(e.terminal)&&lt.isParserRule(e.terminal.rule.ref)&&!(0,tr.isDataTypeRule)(e.terminal.rule.ref)&&r("error","Parser rules cannot be used for cross references.",{node:e.terminal,property:"rule"})}checkCrossRefType(e,r){let n=this.checkReferenceToRuleButNotType(e?.type);n&&r("error",n,{node:e,property:"type"})}checkAtomTypeRefType(e,r){if(e?.refType){let n=this.checkReferenceToRuleButNotType(e?.refType);n&&r("error",n,{node:e,property:"refType"})}}checkFragmentsInTypes(e,r){var n,i;lt.isParserRule((n=e.refType)===null||n===void 0?void 0:n.ref)&&(!((i=e.refType)===null||i===void 0)&&i.ref.fragment)&&r("error","Cannot use rule fragments in types.",{node:e,property:"refType"})}checkReferenceToRuleButNotType(e){if(e&&lt.isParserRule(e.ref)&&!(0,tr.isDataTypeRule)(e.ref)&&(e.ref.returnType||e.ref.inferredType)){let r=(0,tr.getTypeNameWithoutError)(e.ref);if(r)return`Use the rule type '${r}' instead of the typed rule name '${e.ref.name}' for cross references.`}}checkAssignmentWithFeatureName(e,r){e.feature==="name"&&lt.isCrossReference(e.terminal)&&r("warning",'The "name" property is not recommended for cross-references.',{node:e,property:"feature"})}};$r.LangiumGrammarValidator=t_;function Ic(t){return!t.definition||!t.definition.$cstNode||t.definition.$cstNode.length===0}var rz=new Set(["Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array","BigInt64Array","BigUint64Array","Map","Set","WeakMap","WeakSet","Error","AggregateError","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError","BigInt","RegExp","Number","Object","Function","Symbol","String","Math","NaN","Infinity","isFinite","isNaN","Buffer","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","globalThis","decodeURIComponent","decodeURI","encodeURIComponent","encodeURI","parseInt","parseFloat","Promise","Generator","GeneratorFunction","AsyncFunction","AsyncGenerator","AsyncGeneratorFunction","Reflect","Proxy","Date","Intl","eval","undefined"])});var vf=h(Vn=>{"use strict";Object.defineProperty(Vn,"__esModule",{value:!0});Vn.DocumentValidator=Vn.toDiagnosticSeverity=Vn.getDiagnosticRange=Vn.DefaultDocumentValidator=void 0;var An=et(),YS=Vt(),nz=Ye(),iz=ft(),gf=bn(),n_=class{constructor(e){this.validationRegistry=e.validation.ValidationRegistry,this.metadata=e.LanguageMetaData}async validateDocument(e,r=An.CancellationToken.None){let n=e.parseResult,i=[];await(0,gf.interruptAndCheck)(r);for(let o of n.lexerErrors){let a={severity:An.DiagnosticSeverity.Error,range:{start:{line:o.line-1,character:o.column-1},end:{line:o.line-1,character:o.column+o.length-1}},message:o.message,code:yf.LexingError,source:this.getSource()};i.push(a)}for(let o of n.parserErrors){let a;if(isNaN(o.token.startOffset)){if("previousToken"in o){let s=o.previousToken;if(isNaN(s.startOffset))a=An.Range.create(0,0,0,0);else{let u=An.Position.create(s.endLine-1,s.endColumn);a=An.Range.create(u,u)}}}else a=(0,iz.tokenToRange)(o.token);if(a){let s={severity:An.DiagnosticSeverity.Error,range:a,message:o.message,code:yf.ParsingError,source:this.getSource()};i.push(s)}}for(let o of e.references){let a=o.error;if(a){let s={containerType:a.container.$type,property:a.property,refText:a.reference.$refText},u={node:a.container,property:a.property,index:a.index,code:yf.LinkingError,data:s};i.push(this.toDiagnostic("error",a.message,u))}}try{i.push(...await this.validateAst(n.value,e,r))}catch(o){if((0,gf.isOperationCancelled)(o))throw o;console.error("An error occurred during validation:",o)}return await(0,gf.interruptAndCheck)(r),i}async validateAst(e,r,n=An.CancellationToken.None){let i=[],o=(a,s,u)=>{i.push(this.toDiagnostic(a,s,u))};return await Promise.all((0,nz.streamAst)(e).map(async a=>{await(0,gf.interruptAndCheck)(n);let s=this.validationRegistry.getChecks(a.$type);for(let u of s)await u(a,o,n)})),i}toDiagnostic(e,r,n){return{message:r,range:XS(n),severity:JS(e),code:n.code,codeDescription:n.codeDescription,tags:n.tags,relatedInformation:n.relatedInformation,data:n.data,source:this.getSource()}}getSource(){return this.metadata.languageId}};Vn.DefaultDocumentValidator=n_;function XS(t){if(An.Range.is(t.range))return t.range;let e;return typeof t.property=="string"?e=(0,YS.findNodeForProperty)(t.node.$cstNode,t.property,t.index):typeof t.keyword=="string"&&(e=(0,YS.findNodeForKeyword)(t.node.$cstNode,t.keyword,t.index)),e??(e=t.node.$cstNode),e?e.range:{start:{line:0,character:0},end:{line:0,character:0}}}Vn.getDiagnosticRange=XS;function JS(t){switch(t){case"error":return An.DiagnosticSeverity.Error;case"warning":return An.DiagnosticSeverity.Warning;case"info":return An.DiagnosticSeverity.Information;case"hint":return An.DiagnosticSeverity.Hint;default:throw new Error("Invalid diagnostic severity: "+t)}}Vn.toDiagnosticSeverity=JS;var yf;(function(t){t.LexingError="lexing-error",t.ParsingError="parsing-error",t.LinkingError="linking-error"})(yf=Vn.DocumentValidator||(Vn.DocumentValidator={}))});var r0=h(bi=>{"use strict";var oz=bi&&bi.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var i=Object.getOwnPropertyDescriptor(e,r);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,i)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),az=bi&&bi.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),sz=bi&&bi.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var r in t)r!=="default"&&Object.prototype.hasOwnProperty.call(t,r)&&oz(e,t,r);return az(e,t),e};Object.defineProperty(bi,"__esModule",{value:!0});bi.LangiumGrammarCodeActionProvider=void 0;var Pn=et(),uz=eo(),QS=Ye(),ZS=ft(),cz=Vt(),e0=_s(),t0=co(),lz=vf(),i_=sz(Ke()),Sn=r_(),o_=class{constructor(e){this.reflection=e.shared.AstReflection,this.indexManager=e.shared.workspace.IndexManager}getCodeActions(e,r){let n=[],i=o=>o&&n.push(o);for(let o of r.context.diagnostics)this.createCodeActions(o,e,i);return n}createCodeActions(e,r,n){switch(e.code){case Sn.IssueCodes.GrammarNameUppercase:case Sn.IssueCodes.RuleNameUppercase:n(this.makeUpperCase(e,r));break;case Sn.IssueCodes.HiddenGrammarTokens:n(this.fixHiddenTerminals(e,r));break;case Sn.IssueCodes.UseRegexTokens:n(this.fixRegexTokens(e,r));break;case Sn.IssueCodes.EntryRuleTokenSyntax:n(this.addEntryKeyword(e,r));break;case Sn.IssueCodes.CrossRefTokenSyntax:n(this.fixCrossRefSyntax(e,r));break;case Sn.IssueCodes.UnnecessaryFileExtension:n(this.fixUnnecessaryFileExtension(e,r));break;case Sn.IssueCodes.MissingReturns:n(this.fixMissingReturns(e,r));break;case Sn.IssueCodes.InvalidInfers:case Sn.IssueCodes.InvalidReturns:n(this.fixInvalidReturnsInfers(e,r));break;case Sn.IssueCodes.MissingInfer:n(this.fixMissingInfer(e,r));break;case Sn.IssueCodes.SuperfluousInfer:n(this.fixSuperfluousInfer(e,r));break;case lz.DocumentValidator.LinkingError:{let i=e.data;i&&i.containerType==="RuleCall"&&i.property==="rule"&&n(this.addNewRule(e,i,r)),i&&this.lookInGlobalScope(e,i,r).forEach(n);break}}}fixMissingReturns(e,r){let n=r.textDocument.getText(e.range);if(n)return{title:`Add explicit return type for parser rule ${n}`,kind:Pn.CodeActionKind.QuickFix,diagnostics:[e],edit:{changes:{[r.textDocument.uri]:[{range:e.range,newText:`${n} returns ${n}`}]}}}}fixInvalidReturnsInfers(e,r){let n=e.data;if(n){let i=r.textDocument.getText(n.range);return{title:`Correct ${i} usage`,kind:Pn.CodeActionKind.QuickFix,diagnostics:[e],edit:{changes:{[r.textDocument.uri]:[{range:n.range,newText:i==="infers"?"returns":"infers"}]}}}}}fixMissingInfer(e,r){let n=e.data;if(n)return{title:"Correct 'infer' usage",kind:Pn.CodeActionKind.QuickFix,diagnostics:[e],edit:{changes:{[r.textDocument.uri]:[{range:{start:n.range.end,end:n.range.end},newText:"infer "}]}}}}fixSuperfluousInfer(e,r){if(e.data)return{title:"Remove the 'infer' keyword",kind:Pn.CodeActionKind.QuickFix,diagnostics:[e],edit:{changes:{[r.textDocument.uri]:[{range:e.data,newText:""}]}}}}fixUnnecessaryFileExtension(e,r){let n=Object.assign({},e.range.end);n.character-=1;let i=Object.assign({},n);return i.character-=8,{title:"Remove file extension",kind:Pn.CodeActionKind.QuickFix,diagnostics:[e],isPreferred:!0,edit:{changes:{[r.textDocument.uri]:[{range:{start:i,end:n},newText:""}]}}}}makeUpperCase(e,r){let n={start:e.range.start,end:{line:e.range.start.line,character:e.range.start.character+1}};return{title:"First letter to upper case",kind:Pn.CodeActionKind.QuickFix,diagnostics:[e],isPreferred:!0,edit:{changes:{[r.textDocument.uri]:[{range:n,newText:r.textDocument.getText(n).toUpperCase()}]}}}}addEntryKeyword(e,r){return{title:"Add entry keyword",kind:Pn.CodeActionKind.QuickFix,diagnostics:[e],isPreferred:!0,edit:{changes:{[r.textDocument.uri]:[{range:{start:e.range.start,end:e.range.start},newText:"entry "}]}}}}fixRegexTokens(e,r){let n=r.textDocument.offsetAt(e.range.start),i=r.parseResult.value.$cstNode;if(i){let o=(0,ZS.findLeafNodeAtOffset)(i,n),a=(0,QS.getContainerOfType)(o?.element,i_.isCharacterRange);if(a&&a.right&&a.$cstNode){let s=a.left.value,u=a.right.value;return{title:"Refactor into regular expression",kind:Pn.CodeActionKind.QuickFix,diagnostics:[e],isPreferred:!0,edit:{changes:{[r.textDocument.uri]:[{range:a.$cstNode.range,newText:`/[${(0,e0.escapeRegExp)(s)}-${(0,e0.escapeRegExp)(u)}]/`}]}}}}}}fixCrossRefSyntax(e,r){return{title:"Replace '|' with ':'",kind:Pn.CodeActionKind.QuickFix,diagnostics:[e],isPreferred:!0,edit:{changes:{[r.textDocument.uri]:[{range:e.range,newText:":"}]}}}}fixHiddenTerminals(e,r){let n=r.parseResult.value,i=n.hiddenTokens,o=[],a=(0,cz.findNodeForProperty)(n.$cstNode,"definesHiddenTokens");if(a){let s=a.range.start,u=a.offset,d=n.$cstNode.text.indexOf(")",u)+1;o.push({newText:"",range:{start:s,end:r.textDocument.positionAt(d)}})}for(let s of i){let u=s.ref;if(u&&i_.isTerminalRule(u)&&!u.hidden&&u.$cstNode){let d=u.$cstNode.range.start;o.push({newText:"hidden ",range:{start:d,end:d}})}}return{title:"Fix hidden terminals",kind:Pn.CodeActionKind.QuickFix,diagnostics:[e],isPreferred:!0,edit:{changes:{[r.textDocument.uri]:o}}}}addNewRule(e,r,n){let i=n.textDocument.offsetAt(e.range.start),o=n.parseResult.value.$cstNode;if(o){let a=(0,ZS.findLeafNodeAtOffset)(o,i),s=(0,QS.getContainerOfType)(a?.element,i_.isParserRule);if(s&&s.$cstNode)return{title:`Add new rule '${r.refText}'`,kind:Pn.CodeActionKind.QuickFix,diagnostics:[e],isPreferred:!1,edit:{changes:{[n.textDocument.uri]:[{range:{start:s.$cstNode.range.end,end:s.$cstNode.range.end},newText:`

`+r.refText+`:
    /* TODO implement rule */ {infer `+r.refText+"};"}]}}}}}lookInGlobalScope(e,r,n){var i,o;let a={container:{$type:r.containerType},property:r.property,reference:{$refText:r.refText}},s=this.reflection.getReferenceType(a),u=this.indexManager.allElements(s).filter(v=>v.name===r.refText),d=[],p=-1,m=-1;for(let v of u){if((0,t0.equalURI)(v.documentUri,n.uri))continue;let P=dz(n.uri,v.documentUri),_,N="",I=n.parseResult.value,O=I.imports.find(E=>E.path&&P<E.path);if(O)_=(i=O.$cstNode)===null||i===void 0?void 0:i.range.start;else if(I.imports.length>0){let E=I.imports[I.imports.length-1].$cstNode.range.end;E&&(_={line:E.line+1,character:0})}else I.rules.length>0&&(_=(o=I.rules[0].$cstNode)===null||o===void 0?void 0:o.range.start,N=`
`);_&&((p<0||P.length<m)&&(p=d.length,m=P.length),d.push({title:`Add import to '${P}'`,kind:Pn.CodeActionKind.QuickFix,diagnostics:[e],isPreferred:!1,edit:{changes:{[n.textDocument.uri]:[{range:{start:_,end:_},newText:`import '${P}'
${N}`}]}}}))}return p>=0&&(d[p].isPreferred=!0),d}};bi.LangiumGrammarCodeActionProvider=o_;function dz(t,e){let r=uz.Utils.dirname(t),n=(0,t0.relativeURI)(r,e);return!n.startsWith("./")&&!n.startsWith("../")&&(n="./"+n),n.endsWith(".langium")&&(n=n.substring(0,n.length-8)),n}});var Tf=h(_f=>{"use strict";Object.defineProperty(_f,"__esModule",{value:!0});_f.DefaultFoldingRangeProvider=void 0;var a_=et(),fz=Ye(),pz=ft(),s_=class{constructor(e){this.commentNames=e.parser.GrammarConfig.multilineCommentRules}getFoldingRanges(e){let r=[],n=i=>r.push(i);return this.collectFolding(e,n),r}collectFolding(e,r){var n;let i=(n=e.parseResult)===null||n===void 0?void 0:n.value;if(i){if(this.shouldProcessContent(i)){let o=(0,fz.streamAllContents)(i).iterator(),a;do if(a=o.next(),!a.done){let s=a.value;this.shouldProcess(s)&&this.collectObjectFolding(e,s,r),this.shouldProcessContent(s)||o.prune()}while(!a.done)}this.collectCommentFolding(e,i,r)}}shouldProcess(e){return!0}shouldProcessContent(e){return!0}collectObjectFolding(e,r,n){let i=r.$cstNode;if(i){let o=this.toFoldingRange(e,i);o&&n(o)}}collectCommentFolding(e,r,n){let i=r.$cstNode;if(i){for(let o of(0,pz.flattenCst)(i))if(this.commentNames.includes(o.tokenType.name)){let a=this.toFoldingRange(e,o,a_.FoldingRangeKind.Comment);a&&n(a)}}}toFoldingRange(e,r,n){let i=r.range,o=i.start,a=i.end;if(!(a.line-o.line<2))return this.includeLastFoldingLine(r,n)||(a=e.textDocument.positionAt(e.textDocument.offsetAt({line:a.line,character:0})-1)),a_.FoldingRange.create(o.line,a.line,o.character,a.character,n)}includeLastFoldingLine(e,r){if(r===a_.FoldingRangeKind.Comment)return!1;let n=e.text,i=n.charAt(n.length-1);return!(i==="}"||i===")"||i==="]")}};_f.DefaultFoldingRangeProvider=s_});var n0=h(Rf=>{"use strict";Object.defineProperty(Rf,"__esModule",{value:!0});Rf.LangiumGrammarFoldingRangeProvider=void 0;var hz=Tf(),mz=Ke(),u_=class extends hz.DefaultFoldingRangeProvider{shouldProcessContent(e){return!(0,mz.isParserRule)(e)}};Rf.LangiumGrammarFoldingRangeProvider=u_});var d_=h(Yn=>{"use strict";Object.defineProperty(Yn,"__esModule",{value:!0});Yn.Formatting=Yn.FormattingRegion=Yn.DefaultNodeFormatter=Yn.AbstractFormatter=void 0;var bf=Vt(),c_=Yr(),gz=Ye(),i0=ft(),qc=er(),l_=class{constructor(){this.collector=()=>{}}getNodeFormatter(e){return new Cf(e,this.collector)}formatDocument(e,r){return this.doDocumentFormat(e,r.options)}formatDocumentRange(e,r){return this.doDocumentFormat(e,r.options,r.range)}formatDocumentOnType(e,r){return this.doDocumentFormat(e,r.options,{start:{character:0,line:r.position.line},end:r.position})}get formatOnTypeOptions(){}doDocumentFormat(e,r,n){let i=new Map,o=(s,u,d)=>{var p,m;let v=this.nodeModeToKey(s,u),P=i.get(v),_=(p=d.options.priority)!==null&&p!==void 0?p:0,N=(m=P?.options.priority)!==null&&m!==void 0?m:0;(!P||N<=_)&&i.set(v,d)};this.collector=o,this.iterateAstFormatting(e,n);let a=this.iterateCstFormatting(e,i,r,n);return this.avoidOverlappingEdits(e.textDocument,a)}avoidOverlappingEdits(e,r){let n=[];for(let i of r){let o=n[n.length-1];if(o){let a=e.offsetAt(i.range.start),s=e.offsetAt(o.range.end);a<s&&n.pop()}n.push(i)}return n}iterateAstFormatting(e,r){let n=e.parseResult.value;this.format(n);let i=(0,gz.streamAllContents)(n).iterator(),o;do if(o=i.next(),!o.done){let a=o.value;this.insideRange(a.$cstNode.range,r)?this.format(a):i.prune()}while(!o.done)}nodeModeToKey(e,r){return`${e.offset}:${e.end}:${r}`}insideRange(e,r){return!r||e.start.line<=r.start.line&&e.end.line>=r.end.line||e.start.line>=r.start.line&&e.end.line<=r.end.line||e.start.line<=r.end.line&&e.end.line>=r.end.line}isNecessary(e,r){return r.getText(e.range)!==e.newText}iterateCstFormatting(e,r,n,i){let o={indentation:0,options:n,document:e.textDocument},a=[],u=this.iterateCstTree(e,o).iterator(),d,p;do if(p=u.next(),!p.done){let m=p.value,v=(0,c_.isLeafCstNode)(m),P=this.nodeModeToKey(m,"prepend"),_=r.get(P);if(r.delete(P),_){let O=this.createTextEdit(d,m,_,o);for(let E of O)E&&this.insideRange(E.range,i)&&this.isNecessary(E,e.textDocument)&&a.push(E)}let N=this.nodeModeToKey(m,"append"),I=r.get(N);if(r.delete(N),I){let O=(0,i0.getNextNode)(m);if(O){let E=this.createTextEdit(m,O,I,o);for(let S of E)S&&this.insideRange(S.range,i)&&this.isNecessary(S,e.textDocument)&&a.push(S)}}if(!_&&m.hidden){let O=this.createHiddenTextEdits(d,m,void 0,o);for(let E of O)E&&this.insideRange(E.range,i)&&this.isNecessary(E,e.textDocument)&&a.push(E)}v&&(d=m)}while(!p.done);return a}createHiddenTextEdits(e,r,n,i){var o;let a=r.range.start.line;if(e&&e.range.end.line===a)return[];let s=[],u={start:{character:0,line:a},end:r.range.start},d=i.document.getText(u),p=this.findFittingMove(u,(o=n?.moves)!==null&&o!==void 0?o:[],i),m=this.getExistingIndentationCharacterCount(d,i),P=this.getIndentationCharacterCount(i,p)-m;if(P===0)return[];let _="";P>0&&(_=(i.options.insertSpaces?" ":"	").repeat(P));let N=r.text.split(`
`);N[0]=d+N[0];for(let I=0;I<N.length;I++){let O=a+I,E={character:0,line:O};if(P>0)s.push({newText:_,range:{start:E,end:E}});else{let S=N[I],L=0;for(;L<S.length;L++){let U=S.charAt(L);if(U!==" "&&U!=="	")break}s.push({newText:"",range:{start:E,end:{line:O,character:Math.min(L,Math.abs(P))}}})}}return s}getExistingIndentationCharacterCount(e,r){let n=" ".repeat(r.options.tabSize);return(r.options.insertSpaces?e.replaceAll("	",n):e.replaceAll(n,"	")).length}getIndentationCharacterCount(e,r){let n=e.indentation;return r&&r.tabs&&(n+=r.tabs),(e.options.insertSpaces?e.options.tabSize:1)*n}createTextEdit(e,r,n,i){var o;if(r.hidden)return this.createHiddenTextEdits(e,r,n,i);let a={start:(o=e?.range.end)!==null&&o!==void 0?o:{character:0,line:0},end:r.range.start},s=this.findFittingMove(a,n.moves,i);if(!s)return[];let u=s.characters,d=s.lines,p=s.tabs,m=i.indentation;i.indentation+=p??0;let v=[];return u!==void 0?v.push(this.createSpaceTextEdit(a,u,n.options)):d!==void 0?v.push(this.createLineTextEdit(a,d,i,n.options)):p!==void 0&&v.push(this.createTabTextEdit(a,!!e,i)),(0,c_.isLeafCstNode)(r)&&(i.indentation=m),v}createSpaceTextEdit(e,r,n){if(e.start.line===e.end.line){let o=e.end.character-e.start.character;r=this.fitIntoOptions(r,o,n)}return{newText:" ".repeat(r),range:e}}createLineTextEdit(e,r,n,i){let o=e.end.line-e.start.line;r=this.fitIntoOptions(r,o,i);let s=(n.options.insertSpaces?" ".repeat(n.options.tabSize):"	").repeat(n.indentation);return{newText:`${`
`.repeat(r)}${s}`,range:e}}createTabTextEdit(e,r,n){let o=(n.options.insertSpaces?" ".repeat(n.options.tabSize):"	").repeat(n.indentation),a=r?1:0,s=Math.max(e.end.line-e.start.line,a);return{newText:`${`
`.repeat(s)}${o}`,range:e}}fitIntoOptions(e,r,n){return n.allowMore?e=Math.max(r,e):n.allowLess&&(e=Math.min(r,e)),e}findFittingMove(e,r,n){if(r.length===0)return;if(r.length===1)return r[0];let i=e.end.line-e.start.line;for(let o of r){if(o.lines!==void 0&&i<=o.lines)return o;if(o.lines===void 0&&i===0)return o}return r[r.length-1]}iterateCstTree(e,r){let i=e.parseResult.value.$cstNode;return i?new qc.TreeStreamImpl(i,o=>this.iterateCst(o,r)):qc.EMPTY_STREAM}iterateCst(e,r){if(!(0,c_.isCompositeCstNode)(e))return qc.EMPTY_STREAM;let n=r.indentation;return new qc.StreamImpl(()=>({index:0}),i=>i.index<e.children.length?{done:!1,value:e.children[i.index++]}:(r.indentation=n,qc.DONE_RESULT))}};Yn.AbstractFormatter=l_;var Cf=class{constructor(e,r){this.astNode=e,this.collector=r}node(e){return new En(e.$cstNode?[e.$cstNode]:[],this.collector)}nodes(...e){let r=[];for(let n of e)n.$cstNode&&r.push(n.$cstNode);return new En(r,this.collector)}property(e,r){let n=(0,bf.findNodeForProperty)(this.astNode.$cstNode,e,r);return new En(n?[n]:[],this.collector)}properties(...e){let r=[];for(let n of e){let i=(0,bf.findNodesForProperty)(this.astNode.$cstNode,n);r.push(...i)}return new En(r,this.collector)}keyword(e,r){let n=(0,bf.findNodeForKeyword)(this.astNode.$cstNode,e,r);return new En(n?[n]:[],this.collector)}keywords(...e){let r=[];for(let n of e){let i=(0,bf.findNodesForKeyword)(this.astNode.$cstNode,n);r.push(...i)}return new En(r,this.collector)}cst(e){return new En([...e],this.collector)}interior(e,r){let n=e.nodes,i=r.nodes;if(n.length!==1||i.length!==1)return new En([],this.collector);let o=n[0],a=i[0];if(o.offset>a.offset){let s=o;o=a,a=s}return new En((0,i0.getInteriorNodes)(o,a),this.collector)}};Yn.DefaultNodeFormatter=Cf;var En=class t{constructor(e,r){this.nodes=e,this.collector=r}prepend(e){for(let r of this.nodes)this.collector(r,"prepend",e);return this}append(e){for(let r of this.nodes)this.collector(r,"append",e);return this}surround(e){for(let r of this.nodes)this.collector(r,"prepend",e),this.collector(r,"append",e);return this}slice(e,r){return new t(this.nodes.slice(e,r),this.collector)}};Yn.FormattingRegion=En;var yz;(function(t){function e(...p){return{options:{},moves:p.flatMap(m=>m.moves).sort(d)}}t.fit=e;function r(p){return i(0,p)}t.noSpace=r;function n(p){return i(1,p)}t.oneSpace=n;function i(p,m){return{options:m??{},moves:[{characters:p}]}}t.spaces=i;function o(p){return a(1,p)}t.newLine=o;function a(p,m){return{options:m??{},moves:[{lines:p}]}}t.newLines=a;function s(p){return{options:p??{},moves:[{tabs:1,lines:1}]}}t.indent=s;function u(p){return{options:p??{},moves:[{tabs:0}]}}t.noIndent=u;function d(p,m){var v,P,_,N,I,O;let E=(v=p.lines)!==null&&v!==void 0?v:0,S=(P=m.lines)!==null&&P!==void 0?P:0,L=(_=p.tabs)!==null&&_!==void 0?_:0,U=(N=m.tabs)!==null&&N!==void 0?N:0,V=(I=p.characters)!==null&&I!==void 0?I:0,te=(O=m.characters)!==null&&O!==void 0?O:0;return E<S?-1:E>S?1:L<U?-1:L>U?1:V<te?-1:V>te?1:0}})(yz=Yn.Formatting||(Yn.Formatting={}))});var o0=h(Ci=>{"use strict";var vz=Ci&&Ci.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var i=Object.getOwnPropertyDescriptor(e,r);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,i)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),_z=Ci&&Ci.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),Tz=Ci&&Ci.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var r in t)r!=="default"&&Object.prototype.hasOwnProperty.call(t,r)&&vz(e,t,r);return _z(e,t),e};Object.defineProperty(Ci,"__esModule",{value:!0});Ci.LangiumGrammarFormatter=void 0;var Ge=d_(),Go=Tz(Ke()),f_=class extends Ge.AbstractFormatter{format(e){if(Go.isCrossReference(e))this.getNodeFormatter(e).properties("type","terminal").surround(Ge.Formatting.noSpace());else if(Go.isParserRule(e)){let r=this.getNodeFormatter(e);r.keywords("entry","fragment","returns").append(Ge.Formatting.oneSpace()),(e.inferredType||e.returnType||e.dataType)&&e.parameters.length===0?r.property("name").append(Ge.Formatting.oneSpace()):r.property("name").append(Ge.Formatting.noSpace()),r.properties("parameters").append(Ge.Formatting.noSpace()),r.keywords(",").append(Ge.Formatting.oneSpace()),r.keywords("<").append(Ge.Formatting.noSpace());let n=r.keyword(";"),i=r.keyword(":");i.prepend(Ge.Formatting.noSpace()),r.interior(i,n).prepend(Ge.Formatting.indent()),n.prepend(Ge.Formatting.fit(Ge.Formatting.noSpace(),Ge.Formatting.newLine())),r.node(e).prepend(Ge.Formatting.noIndent())}else if(Go.isTerminalRule(e)){let r=this.getNodeFormatter(e);e.type&&(r.property("name").append(Ge.Formatting.oneSpace()),r.keyword("returns").append(Ge.Formatting.oneSpace())),r.keywords("hidden","terminal","fragment").append(Ge.Formatting.oneSpace()),r.keyword(":").prepend(Ge.Formatting.noSpace()),r.keyword(";").prepend(Ge.Formatting.fit(Ge.Formatting.noSpace(),Ge.Formatting.newLine())),r.node(e).prepend(Ge.Formatting.noIndent())}else if(Go.isAction(e)){let r=this.getNodeFormatter(e);r.keyword("{").append(Ge.Formatting.noSpace()),r.keywords(".","+=","=").surround(Ge.Formatting.noSpace()),r.keyword("}").prepend(Ge.Formatting.noSpace())}else if(Go.isInferredType(e))this.getNodeFormatter(e).keywords("infer","infers").append(Ge.Formatting.oneSpace());else if(Go.isAssignment(e))this.getNodeFormatter(e).keywords("=","+=","?=").surround(Ge.Formatting.noSpace());else if(Go.isRuleCall(e)){let r=this.getNodeFormatter(e);r.keyword("<").surround(Ge.Formatting.noSpace()),r.keyword(",").append(Ge.Formatting.oneSpace()),r.properties("arguments").append(Ge.Formatting.noSpace())}Go.isAbstractElement(e)&&this.getNodeFormatter(e).property("cardinality").prepend(Ge.Formatting.noSpace())}};Ci.LangiumGrammarFormatter=f_});var Sf=h(Ft=>{"use strict";Object.defineProperty(Ft,"__esModule",{value:!0});Ft.SemanticTokensDecoder=Ft.AbstractSemanticTokenProvider=Ft.SemanticTokensBuilder=Ft.DefaultSemanticTokenOptions=Ft.AllSemanticTokenModifiers=Ft.AllSemanticTokenTypes=void 0;var De=et(),Af=Vt(),Rz=Ye();Ft.AllSemanticTokenTypes={[De.SemanticTokenTypes.class]:0,[De.SemanticTokenTypes.comment]:1,[De.SemanticTokenTypes.enum]:2,[De.SemanticTokenTypes.enumMember]:3,[De.SemanticTokenTypes.event]:4,[De.SemanticTokenTypes.function]:5,[De.SemanticTokenTypes.interface]:6,[De.SemanticTokenTypes.keyword]:7,[De.SemanticTokenTypes.macro]:8,[De.SemanticTokenTypes.method]:9,[De.SemanticTokenTypes.modifier]:10,[De.SemanticTokenTypes.namespace]:11,[De.SemanticTokenTypes.number]:12,[De.SemanticTokenTypes.operator]:13,[De.SemanticTokenTypes.parameter]:14,[De.SemanticTokenTypes.property]:15,[De.SemanticTokenTypes.regexp]:16,[De.SemanticTokenTypes.string]:17,[De.SemanticTokenTypes.struct]:18,[De.SemanticTokenTypes.type]:19,[De.SemanticTokenTypes.typeParameter]:20,[De.SemanticTokenTypes.variable]:21};Ft.AllSemanticTokenModifiers={[De.SemanticTokenModifiers.abstract]:1,[De.SemanticTokenModifiers.async]:2,[De.SemanticTokenModifiers.declaration]:4,[De.SemanticTokenModifiers.defaultLibrary]:8,[De.SemanticTokenModifiers.definition]:16,[De.SemanticTokenModifiers.deprecated]:32,[De.SemanticTokenModifiers.documentation]:64,[De.SemanticTokenModifiers.modification]:128,[De.SemanticTokenModifiers.readonly]:256,[De.SemanticTokenModifiers.static]:512};Ft.DefaultSemanticTokenOptions={legend:{tokenTypes:Object.keys(Ft.AllSemanticTokenTypes),tokenModifiers:Object.keys(Ft.AllSemanticTokenModifiers)},full:{delta:!0},range:!0};var Pf=class extends De.SemanticTokensBuilder{constructor(){super(...arguments),this._tokens=[]}push(e,r,n,i,o){this._tokens.push({line:e,char:r,length:n,tokenType:i,tokenModifiers:o})}build(){return this.applyTokens(),super.build()}buildEdits(){return this.applyTokens(),super.buildEdits()}applyTokens(){for(let e of this._tokens.sort(this.compareTokens))super.push(e.line,e.char,e.length,e.tokenType,e.tokenModifiers);this._tokens=[]}compareTokens(e,r){return e.line===r.line?e.char-r.char:e.line-r.line}};Ft.SemanticTokensBuilder=Pf;var p_=class{constructor(e){this.tokensBuilders=new Map,e.shared.workspace.TextDocuments.onDidClose(r=>{this.tokensBuilders.delete(r.document.uri)}),e.shared.lsp.LanguageServer.onInitialize(r=>{var n;this.initialize((n=r.capabilities.textDocument)===null||n===void 0?void 0:n.semanticTokens)})}initialize(e){this.clientCapabilities=e}semanticHighlight(e,r,n=De.CancellationToken.None){return this.currentRange=void 0,this.currentDocument=e,this.currentTokensBuilder=this.getDocumentTokensBuilder(e),this.computeHighlighting(e,this.createAcceptor(),n),this.currentTokensBuilder.build()}semanticHighlightRange(e,r,n=De.CancellationToken.None){return this.currentRange=r.range,this.currentDocument=e,this.currentTokensBuilder=this.getDocumentTokensBuilder(e),this.computeHighlighting(e,this.createAcceptor(),n),this.currentTokensBuilder.build()}semanticHighlightDelta(e,r,n=De.CancellationToken.None){return this.currentRange=void 0,this.currentDocument=e,this.currentTokensBuilder=this.getDocumentTokensBuilder(e),this.currentTokensBuilder.previousResult(r.previousResultId),this.computeHighlighting(e,this.createAcceptor(),n),this.currentTokensBuilder.buildEdits()}createAcceptor(){return r=>{"line"in r?this.highlightToken({range:{start:{line:r.line,character:r.char},end:{line:r.line,character:r.char+r.length}},type:r.type,modifier:r.modifier}):"range"in r?this.highlightToken(r):"keyword"in r?this.highlightKeyword(r):"property"in r?this.highlightProperty(r):this.highlightNode({node:r.cst,type:r.type,modifier:r.modifier})}}getDocumentTokensBuilder(e){let r=this.tokensBuilders.get(e.uri.toString());if(r)return r;let n=new Pf;return this.tokensBuilders.set(e.uri.toString(),n),n}computeHighlighting(e,r,n){let i=e.parseResult.value;if(this.highlightElement(i,r)==="prune")return;let o=(0,Rz.streamAllContents)(i).iterator(),a;do if(a=o.next(),!a.done){if(n.isCancellationRequested)break;let s=a.value,u=s.$cstNode.range,d=this.compareRange(u);if(d===1)break;if(d===-1)continue;this.highlightElement(s,r)==="prune"&&o.prune()}while(!a.done)}compareRange(e){if(!this.currentRange)return 0;let r=typeof e=="number"?e:e.start.line;return(typeof e=="number"?e:e.end.line)<this.currentRange.start.line?-1:r>this.currentRange.end.line?1:0}highlightToken(e){var r;let{range:n,type:i}=e,o=e.modifier;if(this.compareRange(n)!==0||!this.currentDocument||!this.currentTokensBuilder)return;let a=Ft.AllSemanticTokenTypes[i],s=0;if(o!==void 0){typeof o=="string"&&(o=[o]);for(let p of o){let m=Ft.AllSemanticTokenModifiers[p];s|=m}}let u=n.start.line,d=n.end.line;if(u===d){let p=n.start.character,m=n.end.character-p;this.currentTokensBuilder.push(u,p,m,a,s)}else if(!((r=this.clientCapabilities)===null||r===void 0)&&r.multilineTokenSupport){let p=n.start.character,m=this.currentDocument.textDocument.offsetAt(n.start),v=this.currentDocument.textDocument.offsetAt(n.end);this.currentTokensBuilder.push(u,p,v-m,a,s)}else{let p=n.start,m=this.currentDocument.textDocument.offsetAt({line:u+1,character:0});this.currentTokensBuilder.push(p.line,p.character,m-p.character-1,a,s);for(let v=u+1;v<d;v++){let P=m;m=this.currentDocument.textDocument.offsetAt({line:v+1,character:0}),this.currentTokensBuilder.push(v,0,m-P-1,a,s)}this.currentTokensBuilder.push(d,0,n.end.character,a,s)}}highlightProperty(e){let r=[];if(typeof e.index=="number"){let o=(0,Af.findNodeForProperty)(e.node.$cstNode,e.property,e.index);o&&r.push(o)}else r.push(...(0,Af.findNodesForProperty)(e.node.$cstNode,e.property));let{type:n,modifier:i}=e;for(let o of r)this.highlightNode({node:o,type:n,modifier:i})}highlightKeyword(e){let{node:r,keyword:n,type:i,index:o,modifier:a}=e,s=[];if(typeof o=="number"){let u=(0,Af.findNodeForKeyword)(r.$cstNode,n,o);u&&s.push(u)}else s.push(...(0,Af.findNodesForKeyword)(r.$cstNode,n));for(let u of s)this.highlightNode({node:u,type:i,modifier:a})}highlightNode(e){let{node:r,type:n,modifier:i}=e,o=r.range;this.highlightToken({range:o,type:n,modifier:i})}};Ft.AbstractSemanticTokenProvider=p_;var bz;(function(t){function e(n,i){let o=new Map;Object.entries(Ft.AllSemanticTokenTypes).forEach(([u,d])=>o.set(d,u));let a=0,s=0;return r(n.data,5).map(u=>{a+=u[0],u[0]!==0&&(s=0),s+=u[1];let d=u[2];return{offset:i.textDocument.offsetAt({line:a,character:s}),tokenType:o.get(u[3]),tokenModifiers:u[4],text:i.textDocument.getText({start:{line:a,character:s},end:{line:a,character:s+d}})}})}t.decode=e;function r(n,i){let o=[];for(let a=0;a<n.length;a+=i){let s=n.slice(a,a+i);o.push(s)}return o}})(bz=Ft.SemanticTokensDecoder||(Ft.SemanticTokensDecoder={}))});var a0=h(Ef=>{"use strict";Object.defineProperty(Ef,"__esModule",{value:!0});Ef.LangiumGrammarSemanticTokenProvider=void 0;var Ho=et(),Cz=Sf(),Wo=Ke(),h_=class extends Cz.AbstractSemanticTokenProvider{highlightElement(e,r){var n;(0,Wo.isAssignment)(e)?r({node:e,property:"feature",type:Ho.SemanticTokenTypes.property}):(0,Wo.isAction)(e)?e.feature&&r({node:e,property:"feature",type:Ho.SemanticTokenTypes.property}):(0,Wo.isReturnType)(e)?r({node:e,property:"name",type:Ho.SemanticTokenTypes.type}):(0,Wo.isAtomType)(e)?(e.primitiveType||e.refType)&&r({node:e,property:e.primitiveType?"primitiveType":"refType",type:Ho.SemanticTokenTypes.type}):(0,Wo.isParameter)(e)?r({node:e,property:"name",type:Ho.SemanticTokenTypes.parameter}):(0,Wo.isParameterReference)(e)?r({node:e,property:"parameter",type:Ho.SemanticTokenTypes.parameter}):(0,Wo.isRuleCall)(e)?!((n=e.rule.ref)===null||n===void 0)&&n.fragment&&r({node:e,property:"rule",type:Ho.SemanticTokenTypes.type}):(0,Wo.isTypeAttribute)(e)&&r({node:e,property:"name",type:Ho.SemanticTokenTypes.property})}};Ef.LangiumGrammarSemanticTokenProvider=h_});var u0=h(kf=>{"use strict";Object.defineProperty(kf,"__esModule",{value:!0});kf.LangiumGrammarNameProvider=void 0;var Az=vs(),Pz=Vt(),s0=Ke(),m_=class extends Az.DefaultNameProvider{getName(e){return(0,s0.isAssignment)(e)?e.feature:super.getName(e)}getNameNode(e){return(0,s0.isAssignment)(e)?(0,Pz.findNodeForProperty)(e.$cstNode,"feature"):super.getNameNode(e)}};kf.LangiumGrammarNameProvider=m_});var v_=h(Nf=>{"use strict";Object.defineProperty(Nf,"__esModule",{value:!0});Nf.DefaultReferences=void 0;var Sz=Vt(),c0=Yr(),Ko=Ye(),g_=ft(),l0=er(),Ez=co(),y_=class{constructor(e){this.nameProvider=e.references.NameProvider,this.index=e.shared.workspace.IndexManager,this.nodeLocator=e.workspace.AstNodeLocator}findDeclaration(e){if(e){let r=(0,Sz.findAssignment)(e),n=e.element;if(r&&n){let i=n[r.feature];if((0,c0.isReference)(i))return i.ref;if(Array.isArray(i)){for(let o of i)if((0,c0.isReference)(o)&&o.$refNode&&o.$refNode.offset<=e.offset&&o.$refNode.end>=e.end)return o.ref}}if(n){let i=this.nameProvider.getNameNode(n);if(i&&(i===e||(0,g_.isCstChildNode)(e,i)))return n}}}findDeclarationNode(e){let r=this.findDeclaration(e);if(r?.$cstNode){let n=this.nameProvider.getNameNode(r);return n||r.$cstNode}}findReferences(e,r){return r.onlyLocal?this.findLocalReferences(e,r.includeDeclaration):this.findGlobalReferences(e,r.includeDeclaration)}findGlobalReferences(e,r=!1){let n=[];if(r){let i=this.getReferenceToSelf(e);i&&n.push(i)}return n.push(...this.index.findAllReferences(e,this.nodeLocator.getAstNodePath(e))),(0,l0.stream)(n)}findLocalReferences(e,r=!1){let i=(0,Ko.getDocument)(e).parseResult.value,o=[];if(r){let a=this.getReferenceToSelf(e);a&&o.push(a)}return(0,Ko.streamAst)(i).forEach(a=>{(0,Ko.streamReferences)(a).forEach(({reference:s})=>{if(s.ref===e&&s.$refNode){let u=s.$refNode;o.push({sourceUri:(0,Ko.getDocument)(u.element).uri,sourcePath:this.nodeLocator.getAstNodePath(u.element),targetUri:(0,Ko.getDocument)(e).uri,targetPath:this.nodeLocator.getAstNodePath(e),segment:(0,g_.toDocumentSegment)(u),local:(0,Ez.equalURI)((0,Ko.getDocument)(u.element).uri,(0,Ko.getDocument)(e).uri)})}})}),(0,l0.stream)(o)}getReferenceToSelf(e){let r=this.nameProvider.getNameNode(e);if(r){let n=(0,Ko.getDocument)(e),i=this.nodeLocator.getAstNodePath(e);return{sourceUri:n.uri,sourcePath:i,targetUri:n.uri,targetPath:i,segment:(0,g_.toDocumentSegment)(r),local:!0}}}};Nf.DefaultReferences=y_});var m0=h(Df=>{"use strict";Object.defineProperty(Df,"__esModule",{value:!0});Df.LangiumGrammarReferences=void 0;var kz=v_(),Er=Ye(),d0=ft(),f0=Vt(),p0=er(),__=co(),mr=Ke(),h0=Yt(),wf=to(),T_=class extends kz.DefaultReferences{constructor(e){super(e),this.documents=e.shared.workspace.LangiumDocuments}findDeclaration(e){let r=e.element,n=(0,f0.findAssignment)(e);if(n&&n.feature==="feature"){if((0,mr.isAssignment)(r))return this.findAssignmentDeclaration(r);if((0,mr.isAction)(r))return this.findActionDeclaration(r)}return super.findDeclaration(e)}findLocalReferences(e,r=!1){if((0,mr.isTypeAttribute)(e)){let i=(0,Er.getDocument)(e).parseResult.value;return this.findLocalReferencesToTypeAttribute(e,i,r)}else return super.findLocalReferences(e,r)}findGlobalReferences(e,r=!1){return(0,mr.isTypeAttribute)(e)?this.findReferencesToTypeAttribute(e,r):super.findGlobalReferences(e,r)}findLocalReferencesToTypeAttribute(e,r,n){let i=[],o=(0,Er.getContainerOfType)(e,mr.isInterface);if(o){let a=(0,wf.collectChildrenTypes)(o,this,this.documents,this.nodeLocator),s=[];if(a.forEach(u=>{let d=this.findLocalRulesWithReturnType(u,r);s.push(...d)}),(0,__.equalURI)((0,Er.getDocument)(e).uri,(0,Er.getDocument)(r).uri)&&n){let u=this.getReferenceToSelf(e);u&&i.push(u)}s.forEach(u=>{let d=this.createReferencesToAttribute(u,e);i.push(...d)})}return(0,p0.stream)(i)}findReferencesToTypeAttribute(e,r){let n=[],i=(0,Er.getContainerOfType)(e,mr.isInterface);if(i){if(r){let s=this.getReferenceToSelf(e);s&&n.push(s)}let o=(0,wf.collectChildrenTypes)(i,this,this.documents,this.nodeLocator),a=[];o.forEach(s=>{let u=this.findRulesWithReturnType(s);a.push(...u)}),a.forEach(s=>{let u=this.createReferencesToAttribute(s,e);n.push(...u)})}return(0,p0.stream)(n)}createReferencesToAttribute(e,r){let n=[];if((0,mr.isParserRule)(e)){let i=(0,h0.extractAssignments)(e.definition).find(o=>o.feature===r.name);if(i?.$cstNode){let o=this.nameProvider.getNameNode(i);o&&n.push({sourceUri:(0,Er.getDocument)(i).uri,sourcePath:this.nodeLocator.getAstNodePath(i),targetUri:(0,Er.getDocument)(r).uri,targetPath:this.nodeLocator.getAstNodePath(r),segment:(0,d0.toDocumentSegment)(o),local:(0,__.equalURI)((0,Er.getDocument)(i).uri,(0,Er.getDocument)(r).uri)})}}else{if(e.feature===r.name){let o=(0,f0.findNodeForProperty)(e.$cstNode,"feature");o&&n.push({sourceUri:(0,Er.getDocument)(e).uri,sourcePath:this.nodeLocator.getAstNodePath(e),targetUri:(0,Er.getDocument)(r).uri,targetPath:this.nodeLocator.getAstNodePath(r),segment:(0,d0.toDocumentSegment)(o),local:(0,__.equalURI)((0,Er.getDocument)(e).uri,(0,Er.getDocument)(r).uri)})}let i=(0,Er.getContainerOfType)(e,mr.isParserRule);n.push(...this.createReferencesToAttribute(i,r))}return n}findAssignmentDeclaration(e){var r;let n=(0,Er.getContainerOfType)(e,mr.isParserRule),i=(0,h0.getActionAtElement)(e);if(i){let o=this.findActionDeclaration(i,e.feature);if(o)return o}if(!((r=n?.returnType)===null||r===void 0)&&r.ref&&((0,mr.isInterface)(n.returnType.ref)||(0,mr.isType)(n.returnType.ref))){let o=(0,wf.collectSuperTypes)(n.returnType.ref);for(let a of o){let s=a.attributes.find(u=>u.name===e.feature);if(s)return s}}return e}findActionDeclaration(e,r){var n;if(!((n=e.type)===null||n===void 0)&&n.ref){let i=r??e.feature,o=(0,wf.collectSuperTypes)(e.type.ref);for(let a of o){let s=a.attributes.find(u=>u.name===i);if(s)return s}}}findRulesWithReturnType(e){let r=[];return this.index.findAllReferences(e,this.nodeLocator.getAstNodePath(e)).forEach(i=>{let o=this.documents.getOrCreateDocument(i.sourceUri),a=this.nodeLocator.getAstNode(o.parseResult.value,i.sourcePath);((0,mr.isParserRule)(a)||(0,mr.isAction)(a))&&r.push(a)}),r}findLocalRulesWithReturnType(e,r){let n=[];return(0,Er.streamAst)(r).filter(o=>{var a,s;return(0,mr.isParserRule)(o)&&((a=o.returnType)===null||a===void 0?void 0:a.ref)===e||(0,mr.isAction)(o)&&((s=o.type)===null||s===void 0?void 0:s.ref)===e}).forEach(o=>{((0,mr.isParserRule)(o)||(0,mr.isAction)(o))&&n.push(o)}),n}};Df.LangiumGrammarReferences=T_});var C_=h(kn=>{"use strict";var Nz=kn&&kn.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var i=Object.getOwnPropertyDescriptor(e,r);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,i)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),wz=kn&&kn.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),Dz=kn&&kn.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var r in t)r!=="default"&&Object.prototype.hasOwnProperty.call(t,r)&&Nz(e,t,r);return wz(e,t),e};Object.defineProperty(kn,"__esModule",{value:!0});kn.findFirstFeatures=kn.findNextFeatures=void 0;var kr=Dz(Ke()),lo=Yt(),Oz=Yr(),Iz=Ye(),qz=Vt();function xz(t,e){let r={stacks:t,tokens:e};return Lz(r),r.stacks.flat().forEach(i=>{i.property=void 0}),v0(r.stacks).map(i=>i[i.length-1])}kn.findNextFeatures=xz;function R_(t){let{next:e,cardinalities:r,visited:n,plus:i}=t,o=[],a=e.feature;if(n.has(a))return[];n.add(a);let s,u=a;for(;u.$container;)if(kr.isGroup(u.$container)){s=u.$container;break}else if(kr.isAbstractElement(u.$container))u=u.$container;else break;if((0,lo.isArrayCardinality)(u.cardinality)){let d=Ds({next:{feature:u,type:e.type,new:!1},cardinalities:r,visited:n,plus:i});for(let p of d)i.add(p.feature);o.push(...d)}if(s){let d=s.elements.indexOf(u);d!==void 0&&d<s.elements.length-1&&o.push(...y0({feature:s,type:e.type,new:!1},d+1,r,n,i)),o.every(p=>(0,lo.isOptionalCardinality)(p.feature.cardinality)||(0,lo.isOptionalCardinality)(r.get(p.feature))||i.has(p.feature))&&o.push(...R_({next:{feature:s,type:e.type,new:!1},cardinalities:r,visited:n,plus:i}))}return o}function g0(t){return(0,Oz.isAstNode)(t)&&(t={feature:t}),Ds({next:t,cardinalities:new Map,visited:new Set,plus:new Set})}kn.findFirstFeatures=g0;function Ds(t){var e,r,n;let{next:i,cardinalities:o,visited:a,plus:s}=t;if(i===void 0)return[];let{feature:u,type:d}=i;if(kr.isGroup(u)){if(a.has(u))return[];a.add(u)}if(kr.isGroup(u))return y0(i,0,o,a,s).map(p=>Of(p,u.cardinality,o));if(kr.isAlternatives(u)||kr.isUnorderedGroup(u))return u.elements.flatMap(p=>Ds({next:{feature:p,new:!1,type:d},cardinalities:o,visited:a,plus:s})).map(p=>Of(p,u.cardinality,o));if(kr.isAssignment(u)){let p={feature:u.terminal,new:!1,type:d,property:(e=i.property)!==null&&e!==void 0?e:u.feature};return Ds({next:p,cardinalities:o,visited:a,plus:s}).map(m=>Of(m,u.cardinality,o))}else{if(kr.isAction(u))return R_({next:{feature:u,new:!0,type:(0,lo.getTypeName)(u),property:(r=i.property)!==null&&r!==void 0?r:u.feature},cardinalities:o,visited:a,plus:s});if(kr.isRuleCall(u)&&kr.isParserRule(u.rule.ref)){let p=u.rule.ref,m={feature:p.definition,new:!0,type:p.fragment?void 0:(n=(0,lo.getExplicitRuleType)(p))!==null&&n!==void 0?n:p.name,property:i.property};return Ds({next:m,cardinalities:o,visited:a,plus:s}).map(v=>Of(v,u.cardinality,o))}else return[i]}}function Of(t,e,r){return r.set(t.feature,e),t}function y0(t,e,r,n,i){var o;let a=[],s;for(;e<t.feature.elements.length&&(s={feature:t.feature.elements[e++],new:!1,type:t.type},a.push(...Ds({next:s,cardinalities:r,visited:n,plus:i})),!!(0,lo.isOptionalCardinality)((o=s.feature.cardinality)!==null&&o!==void 0?o:r.get(s.feature))););return a}function Lz(t){for(let e of t.tokens){let r=v0(t.stacks,e);t.stacks=r}}function v0(t,e){let r=[];for(let n of t)r.push(...Mz(n,e));return r}function Mz(t,e){let r=new Map,n=new Set(t.map(o=>o.feature).filter($z)),i=[];for(;t.length>0;){let o=t.pop(),a=R_({next:o,cardinalities:r,plus:n,visited:new Set}).filter(s=>e?b_(s.feature,e):!0);for(let s of a)i.push([...t,s]);if(!a.every(s=>(0,lo.isOptionalCardinality)(s.feature.cardinality)||(0,lo.isOptionalCardinality)(r.get(s.feature))))break}return i}function $z(t){if(t.cardinality==="+")return!0;let e=(0,Iz.getContainerOfType)(t,kr.isAssignment);return!!(e&&e.cardinality==="+")}function b_(t,e){if(kr.isKeyword(t))return t.value===e.image;if(kr.isRuleCall(t))return Fz(t.rule.ref,e);if(kr.isCrossReference(t)){let r=(0,qz.getCrossReferenceTerminal)(t);if(r)return b_(r,e)}return!1}function Fz(t,e){return kr.isParserRule(t)?g0(t.definition).some(n=>b_(n.feature,e)):kr.isTerminalRule(t)?new RegExp((0,lo.terminalRegex)(t)).test(e.image):!1}});var P_=h(Ai=>{"use strict";var jz=Ai&&Ai.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var i=Object.getOwnPropertyDescriptor(e,r);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,i)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),Uz=Ai&&Ai.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),Gz=Ai&&Ai.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var r in t)r!=="default"&&Object.prototype.hasOwnProperty.call(t,r)&&jz(e,t,r);return Uz(e,t),e};Object.defineProperty(Ai,"__esModule",{value:!0});Ai.DefaultCompletionProvider=void 0;var xc=et(),Lc=Gz(Ke()),Hz=Yt(),Wz=Ye(),Kz=ft(),_0=Vt(),T0=er(),If=C_(),A_=class{constructor(e){this.scopeProvider=e.references.ScopeProvider,this.grammar=e.Grammar,this.completionParser=e.parser.CompletionParser,this.nameProvider=e.references.NameProvider,this.grammarConfig=e.parser.GrammarConfig}async getCompletion(e,r){let i=e.parseResult.value.$cstNode;if(!i)return;let o=[],a=e.textDocument,s=a.getText(),u=a.offsetAt(r.position),d=O=>{let E=this.fillCompletionItem(a,u,O);E&&o.push(E)},p=(0,Kz.findLeafNodeAtOffset)(i,this.backtrackToAnyToken(s,u)),m={document:e,textDocument:a,node:p?.element,offset:u,position:r.position};if(!p){let O=(0,_0.getEntryRule)(this.grammar);return await this.completionForRule(m,O,d),xc.CompletionList.create(o,!0)}let v=this.backtrackToTokenStart(s,u),P=this.findFeaturesAt(a,v),_=[],N=this.canReparse()&&u!==v;N&&(_=this.findFeaturesAt(a,u));let I=O=>Lc.isKeyword(O.feature)?O.feature.value:O.feature;return await Promise.all((0,T0.stream)(P).distinct(I).map(O=>this.completionFor(m,O,d))),N&&await Promise.all((0,T0.stream)(_).exclude(P,I).distinct(I).map(O=>this.completionFor(m,O,d))),xc.CompletionList.create(o,!0)}canReparse(){return!1}findFeaturesAt(e,r){let n=e.getText({start:xc.Position.create(0,0),end:e.positionAt(r)}),i=this.completionParser.parse(n),o=i.tokens;if(i.tokenIndex===0){let u=(0,_0.getEntryRule)(this.grammar),d=(0,If.findFirstFeatures)({feature:u.definition,new:!0,type:(0,Hz.getExplicitRuleType)(u)});return o.length>0?(o.shift(),(0,If.findNextFeatures)(d.map(p=>[p]),o)):d}let a=[...o].splice(i.tokenIndex);return(0,If.findNextFeatures)([i.elementStack.map(u=>({feature:u}))],a)}backtrackToAnyToken(e,r){for(r>=e.length&&(r=e.length-1);r>0&&/\s/.test(e.charAt(r));)r--;return r}backtrackToTokenStart(e,r){if(r<1)return r;let n=this.grammarConfig.nameRegexp,i=e.charAt(r-1);for(;r>0&&n.test(i);)r--,i=e.charAt(r-1);return r}async completionForRule(e,r,n){if(Lc.isParserRule(r)){let i=(0,If.findFirstFeatures)(r.definition);await Promise.all(i.map(o=>this.completionFor(e,o,n)))}}completionFor(e,r,n){if(Lc.isKeyword(r.feature))return this.completionForKeyword(e,r.feature,n);if(Lc.isCrossReference(r.feature)&&e.node)return this.completionForCrossReference(e,r,n)}completionForCrossReference(e,r,n){let i=(0,Wz.getContainerOfType)(r.feature,Lc.isAssignment),o=e.node;if(i&&o){if(r.type&&(r.new||o.$type!==r.type)&&(o={$type:r.type,$container:o,$containerProperty:r.property}),!e)return;let a={reference:{},container:o,property:i.feature};try{let s=this.scopeProvider.getScope(a),u=new Set;s.getAllElements().forEach(d=>{!u.has(d.name)&&this.filterCrossReference(d)&&(n(this.createReferenceCompletionItem(d)),u.add(d.name))})}catch(s){console.error(s)}}}createReferenceCompletionItem(e){return{nodeDescription:e,kind:xc.CompletionItemKind.Reference,detail:e.type,sortText:"0"}}filterCrossReference(e){return!0}completionForKeyword(e,r,n){r.value.match(/[\w]/)&&n({label:r.value,kind:xc.CompletionItemKind.Keyword,detail:"Keyword",sortText:"1"})}fillCompletionItem(e,r,n){var i,o;let a;if(typeof n.label=="string")a=n.label;else if("node"in n){let p=this.nameProvider.getName(n.node);if(!p)return;a=p}else if("nodeDescription"in n)a=n.nodeDescription.name;else return;let s;typeof((i=n.textEdit)===null||i===void 0?void 0:i.newText)=="string"?s=n.textEdit.newText:typeof n.insertText=="string"?s=n.insertText:s=a;let u=(o=n.textEdit)!==null&&o!==void 0?o:this.buildCompletionTextEdit(e,r,a,s);return u?{additionalTextEdits:n.additionalTextEdits,command:n.command,commitCharacters:n.commitCharacters,data:n.data,detail:n.detail,documentation:n.documentation,filterText:n.filterText,insertText:n.insertText,insertTextFormat:n.insertTextFormat,insertTextMode:n.insertTextMode,kind:n.kind,labelDetails:n.labelDetails,preselect:n.preselect,sortText:n.sortText,tags:n.tags,textEditText:n.textEditText,textEdit:u,label:a}:void 0}buildCompletionTextEdit(e,r,n,i){let o=e.getText(),a=this.backtrackToTokenStart(o,r),s=o.substring(a,r);if(this.charactersFuzzyMatch(s,n)){let u=e.positionAt(a),d=e.positionAt(r);return{newText:i,range:{start:u,end:d}}}else return}isWordCharacterAt(e,r){return this.grammarConfig.nameRegexp.test(e.charAt(r))}charactersFuzzyMatch(e,r){if(e.length===0)return!0;r=r.toLowerCase();let n=!1,i,o=0,a=r.length;for(let s=0;s<a;s++){let u=r.charCodeAt(s),d=e.charCodeAt(o);if((u===d||this.toUpperCharCode(u)===this.toUpperCharCode(d))&&(n||(n=i===void 0||this.isWordTransition(i,u)),n&&o++,o===e.length))return!0;i=u}return!1}isWordTransition(e,r){return R0<=e&&e<=b0&&Bz<=r&&r<=zz||e===C0&&r!==C0}toUpperCharCode(e){return R0<=e&&e<=b0?e-32:e}};Ai.DefaultCompletionProvider=A_;var R0=97,b0=122,Bz=65,zz=90,C0=95});var P0=h(A0=>{"use strict";Object.defineProperty(A0,"__esModule",{value:!0})});var E_=h(qf=>{"use strict";Object.defineProperty(qf,"__esModule",{value:!0});qf.DefaultDocumentHighlightProvider=void 0;var Vz=et(),Yz=Ye(),Xz=ft(),Jz=co(),S_=class{constructor(e){this.references=e.references.References,this.nameProvider=e.references.NameProvider,this.grammarConfig=e.parser.GrammarConfig}getDocumentHighlight(e,r){let n=e.parseResult.value.$cstNode;if(!n)return;let i=(0,Xz.findDeclarationNodeAtOffset)(n,e.textDocument.offsetAt(r.position),this.grammarConfig.nameRegexp);if(!i)return;let o=this.references.findDeclaration(i);if(o){let a=[],u={onlyLocal:!0,includeDeclaration:(0,Jz.equalURI)((0,Yz.getDocument)(o).uri,e.uri)};return this.references.findReferences(o,u).forEach(d=>{a.push(this.createDocumentHighlight(d))}),a}}createDocumentHighlight(e){return Vz.DocumentHighlight.create(e.segment.range)}};qf.DefaultDocumentHighlightProvider=S_});var E0=h(S0=>{"use strict";Object.defineProperty(S0,"__esModule",{value:!0})});var N_=h(xf=>{"use strict";Object.defineProperty(xf,"__esModule",{value:!0});xf.DefaultDocumentSymbolProvider=void 0;var Qz=et(),Zz=Ye(),k_=class{constructor(e){this.nameProvider=e.references.NameProvider}getSymbols(e){return this.getSymbol(e,e.parseResult.value)}getSymbol(e,r){let n=r.$cstNode,i=this.nameProvider.getNameNode(r);if(i&&n){let o=this.nameProvider.getName(r);return[{kind:this.getSymbolKind(r.$type),name:o??i.text,range:n.range,selectionRange:i.range,children:this.getChildSymbols(e,r)}]}else return this.getChildSymbols(e,r)||[]}getChildSymbols(e,r){let n=[];for(let i of(0,Zz.streamContents)(r)){let o=this.getSymbol(e,i);n.push(...o)}if(n.length>0)return n}getSymbolKind(e){return Qz.SymbolKind.Field}};xf.DefaultDocumentSymbolProvider=k_});var k0=h(Lf=>{"use strict";Object.defineProperty(Lf,"__esModule",{value:!0});Lf.AbstractExecuteCommandHandler=void 0;var eV=et(),w_=class{get commands(){return Array.from(this.registeredCommands.keys())}constructor(){this.registeredCommands=new Map,this.registerCommands(this.createCommandAcceptor())}async executeCommand(e,r,n=eV.CancellationToken.None){let i=this.registeredCommands.get(e);if(i)return i(r,n)}createCommandAcceptor(){return(e,r)=>this.registeredCommands.set(e,r)}};Lf.AbstractExecuteCommandHandler=w_});var O_=h(Mf=>{"use strict";Object.defineProperty(Mf,"__esModule",{value:!0});Mf.DefaultDefinitionProvider=void 0;var tV=et(),rV=Ye(),nV=ft(),D_=class{constructor(e){this.nameProvider=e.references.NameProvider,this.references=e.references.References,this.grammarConfig=e.parser.GrammarConfig}getDefinition(e,r){let n=e.parseResult.value;if(n.$cstNode){let i=n.$cstNode,o=(0,nV.findDeclarationNodeAtOffset)(i,e.textDocument.offsetAt(r.position),this.grammarConfig.nameRegexp);if(o)return this.collectLocationLinks(o,r)}}collectLocationLinks(e,r){var n;let i=this.findLink(e);if(i)return[tV.LocationLink.create(i.targetDocument.textDocument.uri,((n=i.target.element.$cstNode)!==null&&n!==void 0?n:i.target).range,i.target.range,i.source.range)]}findLink(e){let r=this.references.findDeclarationNode(e);if(r?.element){let n=(0,rV.getDocument)(r.element);if(r&&n)return{source:e,target:r,targetDocument:n}}}};Mf.DefaultDefinitionProvider=D_});var q_=h(Os=>{"use strict";Object.defineProperty(Os,"__esModule",{value:!0});Os.MultilineCommentHoverProvider=Os.AstNodeHoverProvider=void 0;var N0=ft(),$f=class{constructor(e){this.references=e.references.References,this.grammarConfig=e.parser.GrammarConfig}getHoverContent(e,r){var n,i;let o=(i=(n=e.parseResult)===null||n===void 0?void 0:n.value)===null||i===void 0?void 0:i.$cstNode;if(o){let a=e.textDocument.offsetAt(r.position),s=(0,N0.findDeclarationNodeAtOffset)(o,a,this.grammarConfig.nameRegexp);if(s&&s.offset+s.length>a){let u=this.references.findDeclaration(s);if(u)return this.getAstNodeHoverContent(u)}}}};Os.AstNodeHoverProvider=$f;var I_=class extends $f{constructor(){super(...arguments),this.commentContentRegex=/\/\*([\s\S]*?)\*\//}getAstNodeHoverContent(e){let r=(0,N0.findCommentNode)(e.$cstNode,this.grammarConfig.multilineCommentRules),n;if(r){let i=this.commentContentRegex.exec(r.text);i&&i[1]&&(n=this.getCommentContent(i[1]))}if(n)return{contents:{kind:"markdown",value:n}}}getCommentContent(e){return e.split(`
`).map(n=>(n=n.trim(),n.startsWith("*")&&(n=n.substring(1).trim()),n)).join(" ").trim()}};Os.MultilineCommentHoverProvider=I_});var w0=h(Ff=>{"use strict";Object.defineProperty(Ff,"__esModule",{value:!0});Ff.AbstractGoToImplementationProvider=void 0;var iV=et(),oV=ft(),x_=class{constructor(e){this.references=e.references.References,this.grammarConfig=e.parser.GrammarConfig}getImplementation(e,r,n=iV.CancellationToken.None){let i=e.parseResult.value;if(i.$cstNode){let o=(0,oV.findDeclarationNodeAtOffset)(i.$cstNode,e.textDocument.offsetAt(r.position),this.grammarConfig.nameRegexp);if(o){let a=this.references.findDeclaration(o);if(a)return this.collectGoToImplementationLocationLinks(a,n)}}}};Ff.AbstractGoToImplementationProvider=x_});var Bo=h(fo=>{"use strict";Object.defineProperty(fo,"__esModule",{value:!0});fo.DefaultLangiumDocuments=fo.DefaultLangiumDocumentFactory=fo.DocumentState=void 0;var aV=(ey(),mC(Zg)),sV=eo(),uV=er(),Is;(function(t){t[t.Changed=0]="Changed",t[t.Parsed=1]="Parsed",t[t.IndexedContent=2]="IndexedContent",t[t.ComputedScopes=3]="ComputedScopes",t[t.Linked=4]="Linked",t[t.IndexedReferences=5]="IndexedReferences",t[t.Validated=6]="Validated"})(Is=fo.DocumentState||(fo.DocumentState={}));var L_=class{constructor(e){this.serviceRegistry=e.ServiceRegistry,this.textDocuments=e.workspace.TextDocuments,this.fileSystemProvider=e.workspace.FileSystemProvider}fromTextDocument(e,r){return this.create(r??sV.URI.parse(e.uri),e)}fromString(e,r){return this.create(r,e)}fromModel(e,r){return this.create(r,{$model:e})}create(e,r){if(r??(r=this.textDocuments.get(e.toString())),r??(r=this.getContentFromFileSystem(e)),typeof r=="string"){let n=this.parse(e,r);return this.createLangiumDocument(n,e,void 0,r)}else if("$model"in r){let n={value:r.$model,parserErrors:[],lexerErrors:[]};return this.createLangiumDocument(n,e)}else{let n=this.parse(e,r.getText());return this.createLangiumDocument(n,e,r)}}createLangiumDocument(e,r,n,i){let o;if(n)o={parseResult:e,uri:r,state:Is.Parsed,references:[],textDocument:n};else{let a=this.createTextDocumentGetter(r,i);o={parseResult:e,uri:r,state:Is.Parsed,references:[],get textDocument(){return a()}}}return e.value.$document=o,o}update(e){let r=this.textDocuments.get(e.uri.toString()),n=r?r.getText():this.getContentFromFileSystem(e.uri);if(r)Object.defineProperty(e,"textDocument",{value:r});else{let i=this.createTextDocumentGetter(e.uri,n);Object.defineProperty(e,"textDocument",{get:i})}return e.parseResult=this.parse(e.uri,n),e.parseResult.value.$document=e,e.state=Is.Parsed,e}getContentFromFileSystem(e){return this.fileSystemProvider.readFileSync(e)}parse(e,r){return this.serviceRegistry.getServices(e).parser.LangiumParser.parse(r)}createTextDocumentGetter(e,r){let n=this.serviceRegistry,i;return()=>i??(i=aV.TextDocument.create(e.toString(),n.getServices(e).LanguageMetaData.languageId,0,r??""))}};fo.DefaultLangiumDocumentFactory=L_;var M_=class{constructor(e){this.documentMap=new Map,this.langiumDocumentFactory=e.workspace.LangiumDocumentFactory}get all(){return(0,uV.stream)(this.documentMap.values())}addDocument(e){let r=e.uri.toString();if(this.documentMap.has(r))throw new Error(`A document with the URI '${r}' is already present.`);this.documentMap.set(r,e)}getOrCreateDocument(e){let r=e.toString(),n=this.documentMap.get(r);return n||(n=this.langiumDocumentFactory.create(e),this.documentMap.set(r,n),n)}hasDocument(e){return this.documentMap.has(e.toString())}invalidateDocument(e){let r=e.toString(),n=this.documentMap.get(r);return n&&(n.state=Is.Changed,n.references=[],n.precomputedScopes=void 0,n.diagnostics=[]),n}deleteDocument(e){let r=e.toString(),n=this.documentMap.get(r);return n&&(n.state=Is.Changed,this.documentMap.delete(r)),n}};fo.DefaultLangiumDocuments=M_});var F_=h(qs=>{"use strict";Object.defineProperty(qs,"__esModule",{value:!0});qs.mergeSignatureHelpOptions=qs.AbstractSignatureHelpProvider=void 0;var cV=et(),lV=ft(),$_=class{provideSignatureHelp(e,r,n=cV.CancellationToken.None){let o=e.parseResult.value.$cstNode;if(o){let a=(0,lV.findLeafNodeAtOffset)(o,e.textDocument.offsetAt(r.position));if(a)return this.getSignatureFromElement(a.element,n)}}get signatureHelpOptions(){return{triggerCharacters:["("],retriggerCharacters:[","]}}};qs.AbstractSignatureHelpProvider=$_;function dV(t){let e=[],r=[];t.forEach(i=>{i?.triggerCharacters&&e.push(...i.triggerCharacters),i?.retriggerCharacters&&r.push(...i.retriggerCharacters)});let n={triggerCharacters:e.length>0?Array.from(new Set(e)).sort():void 0,retriggerCharacters:r.length>0?Array.from(new Set(r)).sort():void 0};return n.triggerCharacters?n:void 0}qs.mergeSignatureHelpOptions=dV});var G_=h(ce=>{"use strict";Object.defineProperty(ce,"__esModule",{value:!0});ce.createRequestHandler=ce.createServerRequestHandler=ce.createCallHierarchyRequestHandler=ce.addCallHierarchyHandler=ce.addCodeLensHandler=ce.addSignatureHelpHandler=ce.addDocumentLinkHandler=ce.addExecuteCommandHandler=ce.addConfigurationChangeHandler=ce.addSemanticTokenHandler=ce.addRenameHandler=ce.addFormattingHandler=ce.addFoldingRangeHandler=ce.addHoverHandler=ce.addDocumentHighlightsHandler=ce.addGoToDeclarationHandler=ce.addGoToImplementationHandler=ce.addGoToTypeDefinitionHandler=ce.addGotoDefinitionHandler=ce.addDocumentSymbolHandler=ce.addCodeActionHandler=ce.addFindReferencesHandler=ce.addCompletionHandler=ce.addDiagnosticsHandler=ce.addDocumentsHandler=ce.startLanguageServer=ce.DefaultLanguageServer=void 0;var Qr=et(),xs=eo(),D0=Tc(),fV=bn(),pV=Bo(),hV=Sf(),mV=F_(),j_=class{constructor(e){this.onInitializeEmitter=new Qr.Emitter,this.onInitializedEmitter=new Qr.Emitter,this.services=e}get onInitialize(){return this.onInitializeEmitter.event}get onInitialized(){return this.onInitializedEmitter.event}async initialize(e){return this.eagerLoadServices(),this.onInitializeEmitter.fire(e),this.onInitializeEmitter.dispose(),this.buildInitializeResult(e)}eagerLoadServices(){(0,D0.eagerLoad)(this.services),this.services.ServiceRegistry.all.forEach(e=>(0,D0.eagerLoad)(e))}hasService(e){return this.services.ServiceRegistry.all.some(r=>e(r)!==void 0)}buildInitializeResult(e){var r;let n=this.services.ServiceRegistry.all,i=this.hasService(Z=>Z.lsp.Formatter),o=n.map(Z=>{var G;return(G=Z.lsp.Formatter)===null||G===void 0?void 0:G.formatOnTypeOptions}).find(Z=>!!Z),a=this.hasService(Z=>Z.lsp.CodeActionProvider),s=this.hasService(Z=>Z.lsp.SemanticTokenProvider),u=(r=this.services.lsp.ExecuteCommandHandler)===null||r===void 0?void 0:r.commands,d=this.services.lsp.DocumentLinkProvider,p=(0,mV.mergeSignatureHelpOptions)(n.map(Z=>{var G;return(G=Z.lsp.SignatureHelp)===null||G===void 0?void 0:G.signatureHelpOptions})),m=this.hasService(Z=>Z.lsp.TypeProvider),v=this.hasService(Z=>Z.lsp.ImplementationProvider),P=this.hasService(Z=>Z.lsp.CompletionProvider),_=this.hasService(Z=>Z.lsp.ReferencesProvider),N=this.hasService(Z=>Z.lsp.DocumentSymbolProvider),I=this.hasService(Z=>Z.lsp.DefinitionProvider),O=this.hasService(Z=>Z.lsp.DocumentHighlightProvider),E=this.hasService(Z=>Z.lsp.FoldingRangeProvider),S=this.hasService(Z=>Z.lsp.HoverProvider),L=this.hasService(Z=>Z.lsp.RenameProvider),U=this.hasService(Z=>Z.lsp.CallHierarchyProvider),V=this.services.lsp.CodeLensProvider,te=this.hasService(Z=>Z.lsp.DeclarationProvider);return{capabilities:{workspace:{workspaceFolders:{supported:!0}},executeCommandProvider:u&&{commands:u},textDocumentSync:Qr.TextDocumentSyncKind.Incremental,completionProvider:P?{}:void 0,referencesProvider:_,documentSymbolProvider:N,definitionProvider:I,typeDefinitionProvider:m,documentHighlightProvider:O,codeActionProvider:a,documentFormattingProvider:i,documentRangeFormattingProvider:i,documentOnTypeFormattingProvider:o,foldingRangeProvider:E,hoverProvider:S,renameProvider:L?{prepareProvider:!0}:void 0,semanticTokensProvider:s?hV.DefaultSemanticTokenOptions:void 0,signatureHelpProvider:p,implementationProvider:v,callHierarchyProvider:U?{}:void 0,documentLinkProvider:d?{resolveProvider:!!d.resolveDocumentLink}:void 0,codeLensProvider:V?{resolveProvider:!!V.resolveCodeLens}:void 0,declarationProvider:te}}}async initialized(e){this.onInitializedEmitter.fire(e),this.onInitializedEmitter.dispose()}};ce.DefaultLanguageServer=j_;function gV(t){let e=t.lsp.Connection;if(!e)throw new Error("Starting a language server requires the languageServer.Connection service to be set.");O0(e,t),I0(e,t),q0(e,t),x0(e,t),M0(e,t),$0(e,t),F0(e,t),j0(e,t),G0(e,t),W0(e,t),K0(e,t),L0(e,t),B0(e,t),H0(e,t),z0(e,t),Y0(e,t),J0(e,t),Z0(e,t),Q0(e,t),X0(e,t),V0(e,t),U0(e,t),e.onInitialize(n=>t.lsp.LanguageServer.initialize(n)),e.onInitialized(n=>t.lsp.LanguageServer.initialized(n)),t.workspace.TextDocuments.listen(e),e.listen()}ce.startLanguageServer=gV;function O0(t,e){let r=e.workspace.DocumentBuilder,n=e.workspace.MutexLock;function i(a,s){n.lock(u=>r.update(a,s,u))}e.workspace.TextDocuments.onDidChangeContent(a=>{i([xs.URI.parse(a.document.uri)],[])}),t.onDidChangeWatchedFiles(a=>{let s=a.changes.filter(d=>d.type!==Qr.FileChangeType.Deleted).map(d=>xs.URI.parse(d.uri)),u=a.changes.filter(d=>d.type===Qr.FileChangeType.Deleted).map(d=>xs.URI.parse(d.uri));i(s,u)})}ce.addDocumentsHandler=O0;function I0(t,e){e.workspace.DocumentBuilder.onBuildPhase(pV.DocumentState.Validated,async(n,i)=>{for(let o of n)if(o.diagnostics&&t.sendDiagnostics({uri:o.uri.toString(),diagnostics:o.diagnostics}),i.isCancellationRequested)return})}ce.addDiagnosticsHandler=I0;function q0(t,e){t.onCompletion(gr((r,n,i,o)=>{var a;return(a=r.lsp.CompletionProvider)===null||a===void 0?void 0:a.getCompletion(n,i,o)},e))}ce.addCompletionHandler=q0;function x0(t,e){t.onReferences(gr((r,n,i,o)=>{var a;return(a=r.lsp.ReferencesProvider)===null||a===void 0?void 0:a.findReferences(n,i,o)},e))}ce.addFindReferencesHandler=x0;function L0(t,e){t.onCodeAction(gr((r,n,i,o)=>{var a;return(a=r.lsp.CodeActionProvider)===null||a===void 0?void 0:a.getCodeActions(n,i,o)},e))}ce.addCodeActionHandler=L0;function M0(t,e){t.onDocumentSymbol(gr((r,n,i,o)=>{var a;return(a=r.lsp.DocumentSymbolProvider)===null||a===void 0?void 0:a.getSymbols(n,i,o)},e))}ce.addDocumentSymbolHandler=M0;function $0(t,e){t.onDefinition(gr((r,n,i,o)=>{var a;return(a=r.lsp.DefinitionProvider)===null||a===void 0?void 0:a.getDefinition(n,i,o)},e))}ce.addGotoDefinitionHandler=$0;function F0(t,e){t.onTypeDefinition(gr((r,n,i,o)=>{var a;return(a=r.lsp.TypeProvider)===null||a===void 0?void 0:a.getTypeDefinition(n,i,o)},e))}ce.addGoToTypeDefinitionHandler=F0;function j0(t,e){t.onImplementation(gr((r,n,i,o)=>{var a;return(a=r.lsp.ImplementationProvider)===null||a===void 0?void 0:a.getImplementation(n,i,o)},e))}ce.addGoToImplementationHandler=j0;function U0(t,e){t.onDeclaration(gr((r,n,i,o)=>{var a;return(a=r.lsp.DeclarationProvider)===null||a===void 0?void 0:a.getDeclaration(n,i,o)},e))}ce.addGoToDeclarationHandler=U0;function G0(t,e){t.onDocumentHighlight(gr((r,n,i,o)=>{var a;return(a=r.lsp.DocumentHighlightProvider)===null||a===void 0?void 0:a.getDocumentHighlight(n,i,o)},e))}ce.addDocumentHighlightsHandler=G0;function H0(t,e){t.onHover(gr((r,n,i,o)=>{var a;return(a=r.lsp.HoverProvider)===null||a===void 0?void 0:a.getHoverContent(n,i,o)},e))}ce.addHoverHandler=H0;function W0(t,e){t.onFoldingRanges(gr((r,n,i,o)=>{var a;return(a=r.lsp.FoldingRangeProvider)===null||a===void 0?void 0:a.getFoldingRanges(n,i,o)},e))}ce.addFoldingRangeHandler=W0;function K0(t,e){t.onDocumentFormatting(gr((r,n,i,o)=>{var a;return(a=r.lsp.Formatter)===null||a===void 0?void 0:a.formatDocument(n,i,o)},e)),t.onDocumentRangeFormatting(gr((r,n,i,o)=>{var a;return(a=r.lsp.Formatter)===null||a===void 0?void 0:a.formatDocumentRange(n,i,o)},e)),t.onDocumentOnTypeFormatting(gr((r,n,i,o)=>{var a;return(a=r.lsp.Formatter)===null||a===void 0?void 0:a.formatDocumentOnType(n,i,o)},e))}ce.addFormattingHandler=K0;function B0(t,e){t.onRenameRequest(gr((r,n,i,o)=>{var a;return(a=r.lsp.RenameProvider)===null||a===void 0?void 0:a.rename(n,i,o)},e)),t.onPrepareRename(gr((r,n,i,o)=>{var a;return(a=r.lsp.RenameProvider)===null||a===void 0?void 0:a.prepareRename(n,i,o)},e))}ce.addRenameHandler=B0;function z0(t,e){let r="No semantic token provider registered";t.languages.semanticTokens.on(zo((n,i,o,a)=>n.lsp.SemanticTokenProvider?n.lsp.SemanticTokenProvider.semanticHighlight(i,o,a):new Qr.ResponseError(0,r),e)),t.languages.semanticTokens.onDelta(zo((n,i,o,a)=>n.lsp.SemanticTokenProvider?n.lsp.SemanticTokenProvider.semanticHighlightDelta(i,o,a):new Qr.ResponseError(0,r),e)),t.languages.semanticTokens.onRange(zo((n,i,o,a)=>n.lsp.SemanticTokenProvider?n.lsp.SemanticTokenProvider.semanticHighlightRange(i,o,a):new Qr.ResponseError(0,r),e))}ce.addSemanticTokenHandler=z0;function V0(t,e){t.onDidChangeConfiguration(r=>{r.settings&&e.workspace.ConfigurationProvider.updateConfiguration(r)})}ce.addConfigurationChangeHandler=V0;function Y0(t,e){let r=e.lsp.ExecuteCommandHandler;r&&t.onExecuteCommand(async(n,i)=>{var o;try{return await r.executeCommand(n.command,(o=n.arguments)!==null&&o!==void 0?o:[],i)}catch(a){return Ls(a)}})}ce.addExecuteCommandHandler=Y0;function X0(t,e){var r;let n=e.lsp.DocumentLinkProvider;if(n){t.onDocumentLinks(zo((o,a,s,u)=>n.getDocumentLinks(a,s,u),e));let i=(r=n.resolveDocumentLink)===null||r===void 0?void 0:r.bind(n);i&&t.onDocumentLinkResolve(async(o,a)=>{try{return await i(o,a)}catch(s){return Ls(s)}})}}ce.addDocumentLinkHandler=X0;function J0(t,e){t.onSignatureHelp(zo((r,n,i,o)=>{var a;return(a=r.lsp.SignatureHelp)===null||a===void 0?void 0:a.provideSignatureHelp(n,i,o)},e))}ce.addSignatureHelpHandler=J0;function Q0(t,e){var r;let n=e.lsp.CodeLensProvider;if(n){t.onCodeLens(zo((o,a,s,u)=>n.provideCodeLens(a,s,u),e));let i=(r=n.resolveCodeLens)===null||r===void 0?void 0:r.bind(n);i&&t.onCodeLensResolve(async(o,a)=>{try{return await i(o,a)}catch(s){return Ls(s)}})}}ce.addCodeLensHandler=Q0;function Z0(t,e){let r="No call hierarchy provider registered";t.languages.callHierarchy.onPrepare(zo((n,i,o,a)=>{var s;return n.lsp.CallHierarchyProvider?(s=n.lsp.CallHierarchyProvider.prepareCallHierarchy(i,o,a))!==null&&s!==void 0?s:null:new Qr.ResponseError(0,r)},e)),t.languages.callHierarchy.onIncomingCalls(U_((n,i,o)=>{var a;return n.lsp.CallHierarchyProvider?(a=n.lsp.CallHierarchyProvider.incomingCalls(i,o))!==null&&a!==void 0?a:null:new Qr.ResponseError(0,r)},e)),t.languages.callHierarchy.onOutgoingCalls(U_((n,i,o)=>{var a;return n.lsp.CallHierarchyProvider?(a=n.lsp.CallHierarchyProvider.outgoingCalls(i,o))!==null&&a!==void 0?a:null:new Qr.ResponseError(0,r)},e))}ce.addCallHierarchyHandler=Z0;function U_(t,e){let r=e.ServiceRegistry;return async(n,i)=>{let o=xs.URI.parse(n.item.uri),a=r.getServices(o);if(!a)throw console.error(`Could not find service instance for uri: '${o.toString()}'`),new Error;try{return await t(a,n,i)}catch(s){return Ls(s)}}}ce.createCallHierarchyRequestHandler=U_;function zo(t,e){let r=e.workspace.LangiumDocuments,n=e.ServiceRegistry;return async(i,o)=>{let a=xs.URI.parse(i.textDocument.uri),s=n.getServices(a);if(!s)throw console.error(`Could not find service instance for uri: '${a.toString()}'`),new Error;let u=r.getOrCreateDocument(a);if(!u)throw new Error;try{return await t(s,u,i,o)}catch(d){return Ls(d)}}}ce.createServerRequestHandler=zo;function gr(t,e){let r=e.workspace.LangiumDocuments,n=e.ServiceRegistry;return async(i,o)=>{let a=xs.URI.parse(i.textDocument.uri),s=n.getServices(a);if(!s)return console.error(`Could not find service instance for uri: '${a.toString()}'`),null;let u=r.getOrCreateDocument(a);if(!u)return null;try{return await t(s,u,i,o)}catch(d){return Ls(d)}}}ce.createRequestHandler=gr;function Ls(t){if((0,fV.isOperationCancelled)(t))return new Qr.ResponseError(Qr.LSPErrorCodes.RequestCancelled,"The request has been cancelled.");if(t instanceof Qr.ResponseError)return t;throw t}});var W_=h(jf=>{"use strict";Object.defineProperty(jf,"__esModule",{value:!0});jf.DefaultReferencesProvider=void 0;var yV=et(),vV=ft(),H_=class{constructor(e){this.nameProvider=e.references.NameProvider,this.references=e.references.References,this.grammarConfig=e.parser.GrammarConfig}findReferences(e,r){let n=e.parseResult.value.$cstNode;if(!n)return[];let i=(0,vV.findDeclarationNodeAtOffset)(n,e.textDocument.offsetAt(r.position),this.grammarConfig.nameRegexp);return i?this.getReferences(i,r,e):[]}getReferences(e,r,n){let i=[],o=this.references.findDeclaration(e);if(o){let a={includeDeclaration:r.context.includeDeclaration};this.references.findReferences(o,a).forEach(s=>{i.push(yV.Location.create(s.sourceUri.toString(),s.segment.range))})}return i}};jf.DefaultReferencesProvider=H_});var B_=h(Uf=>{"use strict";Object.defineProperty(Uf,"__esModule",{value:!0});Uf.DefaultRenameProvider=void 0;var _V=et(),TV=vs(),eE=ft(),K_=class{constructor(e){this.references=e.references.References,this.nameProvider=e.references.NameProvider,this.grammarConfig=e.parser.GrammarConfig}async rename(e,r){let n={},i=e.parseResult.value.$cstNode;if(!i)return;let o=e.textDocument.offsetAt(r.position),a=(0,eE.findDeclarationNodeAtOffset)(i,o,this.grammarConfig.nameRegexp);if(!a)return;let s=this.references.findDeclaration(a);if(!s)return;let u={onlyLocal:!1,includeDeclaration:!0};return this.references.findReferences(s,u).forEach(p=>{let m=_V.TextEdit.replace(p.segment.range,r.newName),v=p.sourceUri.toString();n[v]?n[v].push(m):n[v]=[m]}),{changes:n}}prepareRename(e,r){return this.renameNodeRange(e,r.position)}renameNodeRange(e,r){let n=e.parseResult.value.$cstNode,i=e.textDocument.offsetAt(r);if(n&&i){let o=(0,eE.findDeclarationNodeAtOffset)(n,i,this.grammarConfig.nameRegexp);if(!o)return;if(this.references.findDeclaration(o)||this.isNameNode(o))return o.range}}isNameNode(e){return e?.element&&(0,TV.isNamed)(e.element)&&e===this.nameProvider.getNameNode(e.element)}};Uf.DefaultRenameProvider=K_});var tE=h(Gf=>{"use strict";Object.defineProperty(Gf,"__esModule",{value:!0});Gf.AbstractTypeDefinitionProvider=void 0;var RV=et(),bV=ft(),z_=class{constructor(e){this.references=e.references.References}getTypeDefinition(e,r,n=RV.CancellationToken.None){let i=e.parseResult.value;if(i.$cstNode){let o=(0,bV.findDeclarationNodeAtOffset)(i.$cstNode,e.textDocument.offsetAt(r.position));if(o){let a=this.references.findDeclaration(o);if(a)return this.collectGoToTypeLocationLinks(a,n)}}}};Gf.AbstractTypeDefinitionProvider=z_});var V_=h(mt=>{"use strict";var CV=mt&&mt.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var i=Object.getOwnPropertyDescriptor(e,r);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,i)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),rr=mt&&mt.__exportStar||function(t,e){for(var r in t)r!=="default"&&!Object.prototype.hasOwnProperty.call(e,r)&&CV(e,t,r)};Object.defineProperty(mt,"__esModule",{value:!0});rr(P_(),mt);rr(C_(),mt);rr(P0(),mt);rr(E_(),mt);rr(E0(),mt);rr(N_(),mt);rr(k0(),mt);rr(Tf(),mt);rr(O_(),mt);rr(q_(),mt);rr(d_(),mt);rr(w0(),mt);rr(G_(),mt);rr(W_(),mt);rr(B_(),mt);rr(Sf(),mt);rr(F_(),mt);rr(tE(),mt)});var rE=h(Hf=>{"use strict";Object.defineProperty(Hf,"__esModule",{value:!0});Hf.LangiumGrammarDefinitionProvider=void 0;var Y_=et(),AV=V_(),PV=Ye(),SV=Vt(),EV=Ke(),kV=Yt(),X_=class extends AV.DefaultDefinitionProvider{constructor(e){super(e),this.documents=e.shared.workspace.LangiumDocuments}collectLocationLinks(e,r){var n,i,o,a,s,u;if((0,EV.isGrammarImport)(e.element)&&((n=(0,SV.findAssignment)(e))===null||n===void 0?void 0:n.feature)==="path"){let p=(0,kV.resolveImport)(this.documents,e.element);if(p?.$document){let m=(i=this.findTargetObject(p))!==null&&i!==void 0?i:p,v=(a=(o=this.nameProvider.getNameNode(m))===null||o===void 0?void 0:o.range)!==null&&a!==void 0?a:Y_.Range.create(0,0,0,0),P=(u=(s=m.$cstNode)===null||s===void 0?void 0:s.range)!==null&&u!==void 0?u:Y_.Range.create(0,0,0,0);return[Y_.LocationLink.create(p.$document.uri.toString(),P,v,e.range)]}return}return super.collectLocationLinks(e,r)}findTargetObject(e){return e.isDeclared?e:(0,PV.streamContents)(e).head()}};Hf.LangiumGrammarDefinitionProvider=X_});var iE=h(Wf=>{"use strict";Object.defineProperty(Wf,"__esModule",{value:!0});Wf.AbstractCallHierarchyProvider=void 0;var NV=et(),nE=eo(),J_=ft(),Q_=class{constructor(e){this.grammarConfig=e.parser.GrammarConfig,this.nameProvider=e.references.NameProvider,this.documents=e.shared.workspace.LangiumDocuments,this.references=e.references.References}prepareCallHierarchy(e,r){let n=e.parseResult.value,i=(0,J_.findDeclarationNodeAtOffset)(n.$cstNode,e.textDocument.offsetAt(r.position),this.grammarConfig.nameRegexp);if(!i)return;let o=this.references.findDeclarationNode(i);if(o)return this.getCallHierarchyItems(o.element,e)}getCallHierarchyItems(e,r){let n=this.nameProvider.getNameNode(e),i=this.nameProvider.getName(e);if(!(!n||!e.$cstNode||i===void 0))return[Object.assign({kind:NV.SymbolKind.Method,name:i,range:e.$cstNode.range,selectionRange:n.range,uri:r.uri.toString()},this.getCallHierarchyItem(e))]}getCallHierarchyItem(e){}incomingCalls(e){let r=this.documents.getOrCreateDocument(nE.URI.parse(e.item.uri)),n=r.parseResult.value,i=(0,J_.findDeclarationNodeAtOffset)(n.$cstNode,r.textDocument.offsetAt(e.item.range.start),this.grammarConfig.nameRegexp);if(!i)return;let o=this.references.findReferences(i.element,{includeDeclaration:!1,onlyLocal:!1});return this.getIncomingCalls(i.element,o)}outgoingCalls(e){let r=this.documents.getOrCreateDocument(nE.URI.parse(e.item.uri)),n=r.parseResult.value,i=(0,J_.findDeclarationNodeAtOffset)(n.$cstNode,r.textDocument.offsetAt(e.item.range.start),this.grammarConfig.nameRegexp);if(i)return this.getOutgoingCalls(i.element)}};Wf.AbstractCallHierarchyProvider=Q_});var aE=h(Bf=>{"use strict";Object.defineProperty(Bf,"__esModule",{value:!0});Bf.LangiumGrammarCallHierarchyProvider=void 0;var oE=et(),wV=iE(),Z_=Ye(),DV=ft(),Kf=Ke(),eT=class extends wV.AbstractCallHierarchyProvider{getIncomingCalls(e,r){if(!(0,Kf.isParserRule)(e))return;let n=new Map;if(r.forEach(i=>{let a=this.documents.getOrCreateDocument(i.sourceUri).parseResult.value;if(!a.$cstNode)return;let s=(0,DV.findLeafNodeAtOffset)(a.$cstNode,i.segment.offset);if(!s)return;let u=(0,Z_.getContainerOfType)(s.element,Kf.isParserRule);if(!u||!u.$cstNode)return;let d=this.nameProvider.getNameNode(u);if(!d)return;let p=i.sourceUri.toString(),m=p+"@"+d.text;n.has(m)?n.set(m,{parserRule:u.$cstNode,nameNode:d,targetNodes:[...n.get(m).targetNodes,s],docUri:p}):n.set(m,{parserRule:u.$cstNode,nameNode:d,targetNodes:[s],docUri:p})}),n.size!==0)return Array.from(n.values()).map(i=>({from:{kind:oE.SymbolKind.Method,name:i.nameNode.text,range:i.parserRule.range,selectionRange:i.nameNode.range,uri:i.docUri},fromRanges:i.targetNodes.map(o=>o.range)}))}getOutgoingCalls(e){if(!(0,Kf.isParserRule)(e))return;let r=(0,Z_.streamAllContents)(e).filter(Kf.isRuleCall).toArray(),n=new Map;if(r.forEach(i=>{var o;let a=i.$cstNode;if(!a)return;let s=(o=i.rule.ref)===null||o===void 0?void 0:o.$cstNode;if(!s)return;let u=this.nameProvider.getNameNode(s.element);if(!u)return;let d=(0,Z_.getDocument)(s.element).uri.toString(),p=d+"@"+u.text;n.has(p)?n.set(p,{refCstNode:s,to:u,from:[...n.get(p).from,a.range],docUri:d}):n.set(p,{refCstNode:s,to:u,from:[a.range],docUri:d})}),n.size!==0)return Array.from(n.values()).map(i=>({to:{kind:oE.SymbolKind.Method,name:i.to.text,range:i.refCstNode.range,selectionRange:i.to.range,uri:i.docUri},fromRanges:i.from}))}};Bf.LangiumGrammarCallHierarchyProvider=eT});var tT=h(Vo=>{"use strict";Object.defineProperty(Vo,"__esModule",{value:!0});Vo.isInferredAndDeclared=Vo.isInferred=Vo.isDeclared=void 0;function OV(t){return t&&"declared"in t}Vo.isDeclared=OV;function IV(t){return t&&"inferred"in t}Vo.isInferred=IV;function qV(t){return t&&"inferred"in t&&"declared"in t}Vo.isInferredAndDeclared=qV});var uE=h(Xf=>{"use strict";Object.defineProperty(Xf,"__esModule",{value:!0});Xf.LangiumGrammarValidationResourcesCollector=void 0;var xV=un(),Yf=er(),zf=Ke(),sE=Yt(),LV=Oy(),Vf=to(),MV=Mo(),$V=tT(),rT=class{constructor(e){this.documents=e.shared.workspace.LangiumDocuments}collectValidationResources(e){let r=(0,LV.collectTypeResources)(e,this.documents),n=this.collectValidationInfo(r),i=this.collectSuperProperties(r),o=this.collectSubTypesAndAliases(n);return{typeToValidationInfo:n,typeToSuperProperties:i,typeToAliases:o}}collectValidationInfo({astResources:e,inferred:r,declared:n}){let i=new Map,o=FV(e);for(let s of(0,Vf.mergeTypesAndInterfaces)(r))i.set(s.name,{inferred:s,inferredNodes:o.get(s.name)});let a=(0,Yf.stream)(e.interfaces).concat(e.types).reduce((s,u)=>s.set(u.name,u),new Map);for(let s of(0,Vf.mergeTypesAndInterfaces)(n)){let u=a.get(s.name);if(u){let d=i.get(s.name);i.set(s.name,d?Object.assign(Object.assign({},d),{declared:s,declaredNode:u}):{declared:s,declaredNode:u})}}return i}collectSuperProperties({inferred:e,declared:r}){let n=new Map;for(let i of(0,Vf.mergeInterfaces)(e,r))n.set(i.name,Array.from(i.superProperties.values()));return n}collectSubTypesAndAliases(e){let r=(0,Yf.stream)(e.entries()).reduce((s,[u,d])=>(s.set(u,(0,$V.isDeclared)(d)?d.declared:d.inferred),s),new Map);(0,Vf.addSubTypes)(r);let n=new Map;function i(s,u){let d=n.get(s);d?d.add(u):n.set(s,new Set([u]))}let o=Array.from(r.values()).filter(s=>s.subTypes.size===0),a=new Set;for(let s of o){a.add(s),i(s.name,s.name);for(let u of(0,Yf.stream)(s.realSuperTypes)){i(u,s.name);let d=r.get(u);d&&!a.has(d)&&o.push(d)}(0,MV.isUnionType)(s)&&s.alternatives.length===1&&s.alternatives.filter(u=>!u.array&&!u.reference).flatMap(u=>u.types).forEach(u=>{i(s.name,u),i(u,u),i(u,s.name)})}return n}};Xf.LangiumGrammarValidationResourcesCollector=rT;function FV({parserRules:t,datatypeRules:e}){let r=new xV.MultiMap;(0,Yf.stream)(t).concat(e).forEach(i=>r.add((0,sE.getRuleType)(i),i));function n(i){if((0,zf.isAction)(i)){let o=(0,sE.getActionType)(i);o&&r.add(o,i)}((0,zf.isAlternatives)(i)||(0,zf.isGroup)(i)||(0,zf.isUnorderedGroup)(i))&&i.elements.forEach(o=>n(o))}return t.forEach(i=>n(i.definition)),r}});var lE=h(Nn=>{"use strict";var jV=Nn&&Nn.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var i=Object.getOwnPropertyDescriptor(e,r);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,i)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),UV=Nn&&Nn.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),GV=Nn&&Nn.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var r in t)r!=="default"&&Object.prototype.hasOwnProperty.call(t,r)&&jV(e,t,r);return UV(e,t),e};Object.defineProperty(Nn,"__esModule",{value:!0});Nn.LangiumGrammarTypesValidator=Nn.registerTypeValidationChecks=void 0;var HV=un(),Ms=GV(Ke()),WV=Yt(),Pi=Mo(),iT=to(),Na=tT();function KV(t){let e=t.validation.ValidationRegistry,r=t.validation.LangiumGrammarTypesValidator,n={Action:[r.checkActionIsNotUnionType],Grammar:[r.checkDeclaredTypesConsistency,r.checkDeclaredAndInferredTypesConsistency]};e.register(n,r)}Nn.registerTypeValidationChecks=KV;var nT=class{checkDeclaredTypesConsistency(e,r){var n;let i=(n=e.$document)===null||n===void 0?void 0:n.validationResources;if(i){for(let o of i.typeToValidationInfo.values())if((0,Na.isDeclared)(o)&&(0,Pi.isInterfaceType)(o.declared)&&Ms.isInterface(o.declaredNode)){let a=o;zV(a,i.typeToValidationInfo,r),VV(a,i.typeToSuperProperties,r)}}}checkDeclaredAndInferredTypesConsistency(e,r){var n;let i=(n=e.$document)===null||n===void 0?void 0:n.validationResources;if(i)for(let o of i.typeToValidationInfo.values())(0,Na.isInferred)(o)&&o.inferred instanceof Pi.InterfaceType&&BV(o.inferred,r),(0,Na.isInferredAndDeclared)(o)&&JV(o,i.typeToAliases,r)}checkActionIsNotUnionType(e,r){Ms.isType(e.type)&&r("error","Actions cannot create union types.",{node:e,property:"type"})}};Nn.LangiumGrammarTypesValidator=nT;function BV(t,e){t.properties.filter(r=>r.typeAlternatives.length>1).forEach(r=>{let n=o=>o.reference?"ref":"other",i=n(r.typeAlternatives[0]);if(r.typeAlternatives.slice(1).some(o=>n(o)!==i)){let o=r.astNodes.values().next().value;o&&e("error",`Mixing a cross-reference with other types is not supported. Consider splitting property "${r.name}" into two or more different properties.`,{node:o})}})}function zV({declared:t,declaredNode:e},r,n){t.printingSuperTypes.forEach((i,o)=>{let a=r.get(i);a&&(((0,Na.isInferred)(a)&&(0,Pi.isUnionType)(a.inferred)||(0,Na.isDeclared)(a)&&(0,Pi.isUnionType)(a.declared))&&n("error","Interfaces cannot extend union types.",{node:e,property:"superTypes",index:o}),(0,Na.isInferred)(a)&&!(0,Na.isDeclared)(a)&&n("error","Extending an inferred type is discouraged.",{node:e,property:"superTypes",index:o}))})}function VV({declared:t,declaredNode:e},r,n){var i,o,a;let s=t.properties.reduce((p,m)=>p.add(m.name,m),new HV.MultiMap);for(let[p,m]of s.entriesGroupedByKey())if(m.length>1)for(let v of m)n("error",`Cannot have two properties with the same name '${p}'.`,{node:Array.from(v.astNodes)[0],property:"name"});let u=t.printingSuperTypes;for(let p=0;p<u.length;p++)for(let m=p+1;m<u.length;m++){let v=u[p],P=u[m],_=(i=r.get(v))!==null&&i!==void 0?i:[],N=(o=r.get(P))!==null&&o!==void 0?o:[],I=YV(_,N);I.length>0&&n("error",`Cannot simultaneously inherit from '${v}' and '${P}'. Their ${I.map(O=>"'"+O+"'").join(", ")} properties are not identical.`,{node:e,property:"name"})}let d=new Set;for(let p of u){let m=(a=r.get(p))!==null&&a!==void 0?a:[];for(let v of m)d.add(v.name)}for(let p of t.properties)if(d.has(p.name)){let v=e.attributes.find(P=>P.name===p.name);v&&n("error",`Cannot redeclare property '${p.name}'. It is already inherited from another interface.`,{node:v,property:"name"})}}function YV(t,e){let r=[];for(let n of t){let i=e.find(o=>o.name===n.name);i&&!XV(n,i)&&r.push(n.name)}return r}function XV(t,e){if(t.optional!==e.optional||t.typeAlternatives.length!==e.typeAlternatives.length)return!1;for(let r of t.typeAlternatives)if(!e.typeAlternatives.some(i=>i.array===r.array&&i.reference===r.reference&&i.types.length===r.types.length&&i.types.every(o=>r.types.includes(o))))return!1;return!0}function JV(t,e,r){let{inferred:n,declared:i,declaredNode:o,inferredNodes:a}=t,s=i.name,u=m=>v=>a.forEach(P=>r("error",`${v[-1]==="."?v.slice(0,-1):v}${m?` ${m}`:""}.`,P?.inferredType?{node:P?.inferredType,property:"name"}:{node:P,property:Ms.isAction(P)?"type":"name"})),d=(m,v)=>m.forEach(P=>r("error",v,{node:P,property:Ms.isAssignment(P)||Ms.isAction(P)?"feature":"name"})),p=m=>{a.forEach(v=>{Ms.isParserRule(v)&&(0,WV.extractAssignments)(v.definition).find(_=>_.feature===m)===void 0&&r("error",`Property '${m}' is missing in a rule '${v.name}', but is required in type '${s}'.`,{node:v,property:"parameters"})})};if((0,Pi.isUnionType)(n)&&(0,Pi.isUnionType)(i))QV(n.alternatives,i.alternatives,e,u(`in a rule that returns type '${s}'`));else if((0,Pi.isInterfaceType)(n)&&(0,Pi.isInterfaceType)(i))t3(n.superProperties,i.superProperties,e,u(`in a rule that returns type '${s}'`),d,p);else{let m=`Inferred and declared versions of type '${s}' both have to be interfaces or unions.`;u()(m),r("error",m,{node:o,property:"name"})}}function QV(t,e,r,n){let i=cE(t,e,r);for(let o of i)n(`A type '${o.typeAsString}' ${o.errorMessage}`)}function ZV(t,e){let r=t.types.map(i=>{var o;return Array.from((o=e.get(i))!==null&&o!==void 0?o:new Set([i]))}),n=[];for(let i of r)if(n.length===0&&n.push([]),i.length===1)n.forEach(o=>o.push(i[0]));else{let o=JSON.parse(JSON.stringify(n));n=[];for(let a of i){let s=JSON.parse(JSON.stringify(o));s.forEach(u=>u.push(a)),n.push(...s)}}return n.map(i=>(0,iT.distinctAndSorted)(i).join(" | "))}function e3(t){let e=t.types.filter(r=>!r.startsWith("'"));return e.push("string"),(0,iT.distinctAndSorted)(e).join(" | ")}function cE(t,e,r){var n;let i=(u,d)=>u.array&&!d.array&&u.reference&&!d.reference?"can't be an array and a reference":!u.array&&d.array&&!u.reference&&d.reference?"has to be an array and a reference":u.array&&!d.array?"can't be an array":!u.array&&d.array?"has to be an array":u.reference&&!d.reference?"can't be a reference":!u.reference&&d.reference?"has to be a reference":"",o=t.reduce((u,d)=>u.set((0,iT.distinctAndSorted)(d.types).join(" | "),d),new Map),a=e.reduce((u,d)=>(ZV(d,r).forEach(p=>u.set(p,d)),u),new Map),s=[];for(let[u,d]of o){let p=(n=a.get(u))!==null&&n!==void 0?n:a.get(e3(d));p?(p.array!==d.array||p.reference!==d.reference)&&s.push({typeAsString:u,errorMessage:i(d,p)}):s.push({typeAsString:u,errorMessage:"is not expected"})}return s}function t3(t,e,r,n,i,o){let a=(s,u)=>!(s.typeAlternatives.length===1&&s.typeAlternatives[0].array)&&!(u.typeAlternatives.length===1&&u.typeAlternatives[0].array);for(let[s,u]of t.entriesGroupedByKey()){let d=u[0],p=e.get(s)[0];if(p){let m=(0,Pi.propertyTypesToString)(d.typeAlternatives),v=(0,Pi.propertyTypesToString)(p.typeAlternatives);if(m!==v){let P=cE(d.typeAlternatives,p.typeAlternatives,r);if(P.length>0){let _=`The assigned type '${m}' is not compatible with the declared property '${s}' of type '${v}'`,N=P.map(I=>` '${I.typeAsString}' ${I.errorMessage}`).join("; ");i(d.astNodes,`${_}: ${N}.`)}}!p.optional&&d.optional&&a(d,p)&&o(s)}else i(d.astNodes,`A property '${s}' is not expected.`)}for(let[s,u]of e.entriesGroupedByKey())t.get(s).length===0&&!u.some(p=>p.optional)&&n(`A property '${s}' is expected.`)}});var oT=h(wa=>{"use strict";Object.defineProperty(wa,"__esModule",{value:!0});wa.createLangiumGrammarServices=wa.LangiumGrammarModule=void 0;var dE=Jf(),fE=Tc(),pE=vS(),hE=zS(),mE=r_(),r3=r0(),n3=n0(),i3=o0(),o3=a0(),a3=u0(),s3=m0(),u3=rE(),c3=aE(),l3=uE(),gE=lE(),d3=bn(),f3=Bo();wa.LangiumGrammarModule={validation:{LangiumGrammarValidator:t=>new mE.LangiumGrammarValidator(t),ValidationResourcesCollector:t=>new l3.LangiumGrammarValidationResourcesCollector(t),LangiumGrammarTypesValidator:()=>new gE.LangiumGrammarTypesValidator},lsp:{FoldingRangeProvider:t=>new n3.LangiumGrammarFoldingRangeProvider(t),CodeActionProvider:t=>new r3.LangiumGrammarCodeActionProvider(t),SemanticTokenProvider:t=>new o3.LangiumGrammarSemanticTokenProvider(t),Formatter:()=>new i3.LangiumGrammarFormatter,DefinitionProvider:t=>new u3.LangiumGrammarDefinitionProvider(t),CallHierarchyProvider:t=>new c3.LangiumGrammarCallHierarchyProvider(t)},references:{ScopeComputation:t=>new hE.LangiumGrammarScopeComputation(t),ScopeProvider:t=>new hE.LangiumGrammarScopeProvider(t),References:t=>new s3.LangiumGrammarReferences(t),NameProvider:()=>new a3.LangiumGrammarNameProvider}};function p3(t,e){let r=(0,fE.inject)((0,dE.createDefaultSharedModule)(t),pE.LangiumGrammarGeneratedSharedModule,e),n=(0,fE.inject)((0,dE.createDefaultModule)({shared:r}),pE.LangiumGrammarGeneratedModule,wa.LangiumGrammarModule);return h3(r,n),r.ServiceRegistry.register(n),(0,mE.registerValidationChecks)(n),(0,gE.registerTypeValidationChecks)(n),{shared:r,grammar:n}}wa.createLangiumGrammarServices=p3;function h3(t,e){t.workspace.DocumentBuilder.onBuildPhase(f3.DocumentState.IndexedReferences,async(n,i)=>{for(let o of n){await(0,d3.interruptAndCheck)(i);let a=e.validation.ValidationResourcesCollector,s=o.parseResult.value;o.validationResources=a.collectValidationResources(s)}})}});var aT=h($s=>{"use strict";Object.defineProperty($s,"__esModule",{value:!0});$s.EmptyFileSystem=$s.EmptyFileSystemProvider=void 0;var Qf=class{readFile(){throw new Error("Method not implemented.")}readFileSync(){throw new Error("Method not implemented.")}async readDirectory(){return[]}};$s.EmptyFileSystemProvider=Qf;$s.EmptyFileSystem={fileSystemProvider:()=>new Qf}});var Vt=h(xe=>{"use strict";var m3=xe&&xe.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var i=Object.getOwnPropertyDescriptor(e,r);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,i)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),g3=xe&&xe.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),y3=xe&&xe.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var r in t)r!=="default"&&Object.prototype.hasOwnProperty.call(t,r)&&m3(e,t,r);return g3(e,t),e};Object.defineProperty(xe,"__esModule",{value:!0});xe.createServicesForGrammar=xe.loadGrammarFromJson=xe.findNameAssignment=xe.findAssignment=xe.findNodesForKeywordInternal=xe.findNodeForKeyword=xe.findNodesForKeyword=xe.findNodeForProperty=xe.findNodesForProperty=xe.isCommentTerminal=xe.getCrossReferenceTerminal=xe.getAllReachableRules=xe.getEntryRule=void 0;var _E=eo(),yE=Jf(),vE=Tc(),v3=qy(),Zr=y3(Ke()),_3=Yt(),TE=oT(),T3=Yr(),Fs=Ye(),R3=ft(),sT=aT();function RE(t){return t.rules.find(e=>Zr.isParserRule(e)&&e.entry)}xe.getEntryRule=RE;function b3(t,e){let r=new Set,n=RE(t);if(!n)return new Set(t.rules);bE(n,r,e);let i=new Set;for(let o of t.rules)(r.has(o.name)||Zr.isTerminalRule(o)&&o.hidden)&&i.add(o);return i}xe.getAllReachableRules=b3;function bE(t,e,r){e.add(t.name),(0,Fs.streamAllContents)(t).forEach(n=>{if(Zr.isRuleCall(n)||r&&Zr.isTerminalRuleCall(n)){let i=n.rule.ref;i&&!e.has(i.name)&&bE(i,e,r)}})}function C3(t){if(t.terminal)return t.terminal;if(t.type.ref){let e=CE(t.type.ref);return e?.terminal}}xe.getCrossReferenceTerminal=C3;function A3(t){return t.hidden&&!" ".match((0,_3.terminalRegex)(t))}xe.isCommentTerminal=A3;function P3(t,e){return!t||!e?[]:uT(t,e,t.element,!0)}xe.findNodesForProperty=P3;function S3(t,e,r){if(!t||!e)return;let n=uT(t,e,t.element,!0);if(n.length!==0)return r!==void 0?r=Math.max(0,Math.min(r,n.length-1)):r=0,n[r]}xe.findNodeForProperty=S3;function uT(t,e,r,n){if(!n){let i=(0,Fs.getContainerOfType)(t.feature,Zr.isAssignment);if(i&&i.feature===e)return[t]}return(0,T3.isCompositeCstNode)(t)&&t.element===r?t.children.flatMap(i=>uT(i,e,r,!1)):[]}function E3(t,e){return t?cT(t,e,t?.element):[]}xe.findNodesForKeyword=E3;function k3(t,e,r){if(!t)return;let n=cT(t,e,t?.element);if(n.length!==0)return r!==void 0?r=Math.max(0,Math.min(r,n.length-1)):r=0,n[r]}xe.findNodeForKeyword=k3;function cT(t,e,r){if(t.element!==r)return[];if(Zr.isKeyword(t.feature)&&t.feature.value===e)return[t];let n=(0,R3.streamCst)(t).iterator(),i,o=[];do if(i=n.next(),!i.done){let a=i.value;a.element===r?Zr.isKeyword(a.feature)&&a.feature.value===e&&o.push(a):n.prune()}while(!i.done);return o}xe.findNodesForKeywordInternal=cT;function N3(t){var e;let r=t.element;for(;r===((e=t.parent)===null||e===void 0?void 0:e.element);){let n=(0,Fs.getContainerOfType)(t.feature,Zr.isAssignment);if(n)return n;t=t.parent}}xe.findAssignment=N3;function CE(t){return Zr.isInferredType(t)&&(t=t.$container),AE(t,new Map)}xe.findNameAssignment=CE;function AE(t,e){var r;function n(i,o){let a;return(0,Fs.getContainerOfType)(i,Zr.isAssignment)||(a=AE(o,e)),e.set(t,a),a}if(e.has(t))return e.get(t);e.set(t,void 0);for(let i of(0,Fs.streamAllContents)(t)){if(Zr.isAssignment(i)&&i.feature.toLowerCase()==="name")return e.set(t,i),i;if(Zr.isRuleCall(i)&&Zr.isParserRule(i.rule.ref))return n(i,i.rule.ref);if(Zr.isAtomType(i)&&(!((r=i?.refType)===null||r===void 0)&&r.ref))return n(i,i.refType.ref)}}function w3(t){var e;let r=(0,TE.createLangiumGrammarServices)(sT.EmptyFileSystem).grammar,n=r.serializer.JsonSerializer.deserialize(t);return r.shared.workspace.LangiumDocumentFactory.fromModel(n,_E.URI.parse(`memory://${(e=n.name)!==null&&e!==void 0?e:"grammar"}.langium`)),n}xe.loadGrammarFromJson=w3;async function D3(t){var e,r,n,i,o,a;let s=(e=t.grammarServices)!==null&&e!==void 0?e:(0,TE.createLangiumGrammarServices)(sT.EmptyFileSystem).grammar,u=_E.URI.parse("memory:///grammar.langium"),d=s.shared.workspace.LangiumDocumentFactory,p=typeof t.grammar=="string"?d.fromString(t.grammar,u):(0,Fs.getDocument)(t.grammar),m=p.parseResult.value;await s.shared.workspace.DocumentBuilder.build([p],{validationChecks:"none"});let P=(r=t.parserConfig)!==null&&r!==void 0?r:{skipValidations:!1},_=(n=t.languageMetaData)!==null&&n!==void 0?n:{caseInsensitive:!1,fileExtensions:[`.${(o=(i=m.name)===null||i===void 0?void 0:i.toLowerCase())!==null&&o!==void 0?o:"unknown"}`],languageId:(a=m.name)!==null&&a!==void 0?a:"UNKNOWN"},N={AstReflection:()=>(0,v3.interpretAstReflection)(m)},I={Grammar:()=>m,LanguageMetaData:()=>_,parser:{ParserConfig:()=>P}},O=(0,vE.inject)((0,yE.createDefaultSharedModule)(sT.EmptyFileSystem),N,t.sharedModule),E=(0,vE.inject)((0,yE.createDefaultModule)({shared:O}),I,t.module);return O.ServiceRegistry.register(E),E}xe.createServicesForGrammar=D3});var PE=h(Zf=>{"use strict";Object.defineProperty(Zf,"__esModule",{value:!0});Zf.createGrammarConfig=void 0;var O3=ft(),I3=Vt(),q3=_s(),x3=Ke(),L3=Yt();function M3(t){let e=[],r=t.Grammar;for(let n of r.rules)(0,x3.isTerminalRule)(n)&&(0,I3.isCommentTerminal)(n)&&(0,q3.isMultilineComment)((0,L3.terminalRegex)(n))&&e.push(n.name);return{multilineCommentRules:e,nameRegexp:O3.DefaultNameRegexp}}Zf.createGrammarConfig=M3});var lT=h(ep=>{"use strict";Object.defineProperty(ep,"__esModule",{value:!0});ep.VERSION=void 0;ep.VERSION="10.4.2"});var js=h((Sve,SE)=>{var $3=Object.prototype;function F3(t){var e=t&&t.constructor,r=typeof e=="function"&&e.prototype||$3;return t===r}SE.exports=F3});var dT=h((Eve,EE)=>{function j3(t,e){return function(r){return t(e(r))}}EE.exports=j3});var NE=h((kve,kE)=>{var U3=dT(),G3=U3(Object.keys,Object);kE.exports=G3});var fT=h((Nve,wE)=>{var H3=js(),W3=NE(),K3=Object.prototype,B3=K3.hasOwnProperty;function z3(t){if(!H3(t))return W3(t);var e=[];for(var r in Object(t))B3.call(t,r)&&r!="constructor"&&e.push(r);return e}wE.exports=z3});var pT=h((wve,DE)=>{var V3=typeof global=="object"&&global&&global.Object===Object&&global;DE.exports=V3});var Xn=h((Dve,OE)=>{var Y3=pT(),X3=typeof self=="object"&&self&&self.Object===Object&&self,J3=Y3||X3||Function("return this")();OE.exports=J3});var Da=h((Ove,IE)=>{var Q3=Xn(),Z3=Q3.Symbol;IE.exports=Z3});var ME=h((Ive,LE)=>{var qE=Da(),xE=Object.prototype,e4=xE.hasOwnProperty,t4=xE.toString,Mc=qE?qE.toStringTag:void 0;function r4(t){var e=e4.call(t,Mc),r=t[Mc];try{t[Mc]=void 0;var n=!0}catch{}var i=t4.call(t);return n&&(e?t[Mc]=r:delete t[Mc]),i}LE.exports=r4});var FE=h((qve,$E)=>{var n4=Object.prototype,i4=n4.toString;function o4(t){return i4.call(t)}$E.exports=o4});var Yo=h((xve,GE)=>{var jE=Da(),a4=ME(),s4=FE(),u4="[object Null]",c4="[object Undefined]",UE=jE?jE.toStringTag:void 0;function l4(t){return t==null?t===void 0?c4:u4:UE&&UE in Object(t)?a4(t):s4(t)}GE.exports=l4});var Jn=h((Lve,HE)=>{function d4(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}HE.exports=d4});var Us=h((Mve,WE)=>{var f4=Yo(),p4=Jn(),h4="[object AsyncFunction]",m4="[object Function]",g4="[object GeneratorFunction]",y4="[object Proxy]";function v4(t){if(!p4(t))return!1;var e=f4(t);return e==m4||e==g4||e==h4||e==y4}WE.exports=v4});var BE=h(($ve,KE)=>{var _4=Xn(),T4=_4["__core-js_shared__"];KE.exports=T4});var YE=h((Fve,VE)=>{var hT=BE(),zE=function(){var t=/[^.]+$/.exec(hT&&hT.keys&&hT.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function R4(t){return!!zE&&zE in t}VE.exports=R4});var mT=h((jve,XE)=>{var b4=Function.prototype,C4=b4.toString;function A4(t){if(t!=null){try{return C4.call(t)}catch{}try{return t+""}catch{}}return""}XE.exports=A4});var QE=h((Uve,JE)=>{var P4=Us(),S4=YE(),E4=Jn(),k4=mT(),N4=/[\\^$.*+?()[\]{}|]/g,w4=/^\[object .+?Constructor\]$/,D4=Function.prototype,O4=Object.prototype,I4=D4.toString,q4=O4.hasOwnProperty,x4=RegExp("^"+I4.call(q4).replace(N4,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function L4(t){if(!E4(t)||S4(t))return!1;var e=P4(t)?x4:w4;return e.test(k4(t))}JE.exports=L4});var ek=h((Gve,ZE)=>{function M4(t,e){return t?.[e]}ZE.exports=M4});var Xo=h((Hve,tk)=>{var $4=QE(),F4=ek();function j4(t,e){var r=F4(t,e);return $4(r)?r:void 0}tk.exports=j4});var nk=h((Wve,rk)=>{var U4=Xo(),G4=Xn(),H4=U4(G4,"DataView");rk.exports=H4});var tp=h((Kve,ik)=>{var W4=Xo(),K4=Xn(),B4=W4(K4,"Map");ik.exports=B4});var ak=h((Bve,ok)=>{var z4=Xo(),V4=Xn(),Y4=z4(V4,"Promise");ok.exports=Y4});var gT=h((zve,sk)=>{var X4=Xo(),J4=Xn(),Q4=X4(J4,"Set");sk.exports=Q4});var ck=h((Vve,uk)=>{var Z4=Xo(),e8=Xn(),t8=Z4(e8,"WeakMap");uk.exports=t8});var Hs=h((Yve,gk)=>{var yT=nk(),vT=tp(),_T=ak(),TT=gT(),RT=ck(),mk=Yo(),Gs=mT(),lk="[object Map]",r8="[object Object]",dk="[object Promise]",fk="[object Set]",pk="[object WeakMap]",hk="[object DataView]",n8=Gs(yT),i8=Gs(vT),o8=Gs(_T),a8=Gs(TT),s8=Gs(RT),Oa=mk;(yT&&Oa(new yT(new ArrayBuffer(1)))!=hk||vT&&Oa(new vT)!=lk||_T&&Oa(_T.resolve())!=dk||TT&&Oa(new TT)!=fk||RT&&Oa(new RT)!=pk)&&(Oa=function(t){var e=mk(t),r=e==r8?t.constructor:void 0,n=r?Gs(r):"";if(n)switch(n){case n8:return hk;case i8:return lk;case o8:return dk;case a8:return fk;case s8:return pk}return e});gk.exports=Oa});var Qn=h((Xve,yk)=>{function u8(t){return t!=null&&typeof t=="object"}yk.exports=u8});var _k=h((Jve,vk)=>{var c8=Yo(),l8=Qn(),d8="[object Arguments]";function f8(t){return l8(t)&&c8(t)==d8}vk.exports=f8});var $c=h((Qve,bk)=>{var Tk=_k(),p8=Qn(),Rk=Object.prototype,h8=Rk.hasOwnProperty,m8=Rk.propertyIsEnumerable,g8=Tk(function(){return arguments}())?Tk:function(t){return p8(t)&&h8.call(t,"callee")&&!m8.call(t,"callee")};bk.exports=g8});var ze=h((Zve,Ck)=>{var y8=Array.isArray;Ck.exports=y8});var rp=h((e_e,Ak)=>{var v8=9007199254740991;function _8(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=v8}Ak.exports=_8});var Zn=h((t_e,Pk)=>{var T8=Us(),R8=rp();function b8(t){return t!=null&&R8(t.length)&&!T8(t)}Pk.exports=b8});var Ek=h((r_e,Sk)=>{function C8(){return!1}Sk.exports=C8});var jc=h((Fc,Ws)=>{var A8=Xn(),P8=Ek(),wk=typeof Fc=="object"&&Fc&&!Fc.nodeType&&Fc,kk=wk&&typeof Ws=="object"&&Ws&&!Ws.nodeType&&Ws,S8=kk&&kk.exports===wk,Nk=S8?A8.Buffer:void 0,E8=Nk?Nk.isBuffer:void 0,k8=E8||P8;Ws.exports=k8});var Ok=h((n_e,Dk)=>{var N8=Yo(),w8=rp(),D8=Qn(),O8="[object Arguments]",I8="[object Array]",q8="[object Boolean]",x8="[object Date]",L8="[object Error]",M8="[object Function]",$8="[object Map]",F8="[object Number]",j8="[object Object]",U8="[object RegExp]",G8="[object Set]",H8="[object String]",W8="[object WeakMap]",K8="[object ArrayBuffer]",B8="[object DataView]",z8="[object Float32Array]",V8="[object Float64Array]",Y8="[object Int8Array]",X8="[object Int16Array]",J8="[object Int32Array]",Q8="[object Uint8Array]",Z8="[object Uint8ClampedArray]",e6="[object Uint16Array]",t6="[object Uint32Array]",dt={};dt[z8]=dt[V8]=dt[Y8]=dt[X8]=dt[J8]=dt[Q8]=dt[Z8]=dt[e6]=dt[t6]=!0;dt[O8]=dt[I8]=dt[K8]=dt[q8]=dt[B8]=dt[x8]=dt[L8]=dt[M8]=dt[$8]=dt[F8]=dt[j8]=dt[U8]=dt[G8]=dt[H8]=dt[W8]=!1;function r6(t){return D8(t)&&w8(t.length)&&!!dt[N8(t)]}Dk.exports=r6});var Ks=h((i_e,Ik)=>{function n6(t){return function(e){return t(e)}}Ik.exports=n6});var Hc=h((Uc,Bs)=>{var i6=pT(),qk=typeof Uc=="object"&&Uc&&!Uc.nodeType&&Uc,Gc=qk&&typeof Bs=="object"&&Bs&&!Bs.nodeType&&Bs,o6=Gc&&Gc.exports===qk,bT=o6&&i6.process,a6=function(){try{var t=Gc&&Gc.require&&Gc.require("util").types;return t||bT&&bT.binding&&bT.binding("util")}catch{}}();Bs.exports=a6});var np=h((o_e,Mk)=>{var s6=Ok(),u6=Ks(),xk=Hc(),Lk=xk&&xk.isTypedArray,c6=Lk?u6(Lk):s6;Mk.exports=c6});var ln=h((a_e,$k)=>{var l6=fT(),d6=Hs(),f6=$c(),p6=ze(),h6=Zn(),m6=jc(),g6=js(),y6=np(),v6="[object Map]",_6="[object Set]",T6=Object.prototype,R6=T6.hasOwnProperty;function b6(t){if(t==null)return!0;if(h6(t)&&(p6(t)||typeof t=="string"||typeof t.splice=="function"||m6(t)||y6(t)||f6(t)))return!t.length;var e=d6(t);if(e==v6||e==_6)return!t.size;if(g6(t))return!l6(t).length;for(var r in t)if(R6.call(t,r))return!1;return!0}$k.exports=b6});var zs=h((s_e,Fk)=>{function C6(t,e){for(var r=-1,n=t==null?0:t.length,i=Array(n);++r<n;)i[r]=e(t[r],r,t);return i}Fk.exports=C6});var Uk=h((u_e,jk)=>{function A6(){this.__data__=[],this.size=0}jk.exports=A6});var Vs=h((c_e,Gk)=>{function P6(t,e){return t===e||t!==t&&e!==e}Gk.exports=P6});var Wc=h((l_e,Hk)=>{var S6=Vs();function E6(t,e){for(var r=t.length;r--;)if(S6(t[r][0],e))return r;return-1}Hk.exports=E6});var Kk=h((d_e,Wk)=>{var k6=Wc(),N6=Array.prototype,w6=N6.splice;function D6(t){var e=this.__data__,r=k6(e,t);if(r<0)return!1;var n=e.length-1;return r==n?e.pop():w6.call(e,r,1),--this.size,!0}Wk.exports=D6});var zk=h((f_e,Bk)=>{var O6=Wc();function I6(t){var e=this.__data__,r=O6(e,t);return r<0?void 0:e[r][1]}Bk.exports=I6});var Yk=h((p_e,Vk)=>{var q6=Wc();function x6(t){return q6(this.__data__,t)>-1}Vk.exports=x6});var Jk=h((h_e,Xk)=>{var L6=Wc();function M6(t,e){var r=this.__data__,n=L6(r,t);return n<0?(++this.size,r.push([t,e])):r[n][1]=e,this}Xk.exports=M6});var Kc=h((m_e,Qk)=>{var $6=Uk(),F6=Kk(),j6=zk(),U6=Yk(),G6=Jk();function Ys(t){var e=-1,r=t==null?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}Ys.prototype.clear=$6;Ys.prototype.delete=F6;Ys.prototype.get=j6;Ys.prototype.has=U6;Ys.prototype.set=G6;Qk.exports=Ys});var eN=h((g_e,Zk)=>{var H6=Kc();function W6(){this.__data__=new H6,this.size=0}Zk.exports=W6});var rN=h((y_e,tN)=>{function K6(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r}tN.exports=K6});var iN=h((v_e,nN)=>{function B6(t){return this.__data__.get(t)}nN.exports=B6});var aN=h((__e,oN)=>{function z6(t){return this.__data__.has(t)}oN.exports=z6});var Bc=h((T_e,sN)=>{var V6=Xo(),Y6=V6(Object,"create");sN.exports=Y6});var lN=h((R_e,cN)=>{var uN=Bc();function X6(){this.__data__=uN?uN(null):{},this.size=0}cN.exports=X6});var fN=h((b_e,dN)=>{function J6(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}dN.exports=J6});var hN=h((C_e,pN)=>{var Q6=Bc(),Z6="__lodash_hash_undefined__",e7=Object.prototype,t7=e7.hasOwnProperty;function r7(t){var e=this.__data__;if(Q6){var r=e[t];return r===Z6?void 0:r}return t7.call(e,t)?e[t]:void 0}pN.exports=r7});var gN=h((A_e,mN)=>{var n7=Bc(),i7=Object.prototype,o7=i7.hasOwnProperty;function a7(t){var e=this.__data__;return n7?e[t]!==void 0:o7.call(e,t)}mN.exports=a7});var vN=h((P_e,yN)=>{var s7=Bc(),u7="__lodash_hash_undefined__";function c7(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=s7&&e===void 0?u7:e,this}yN.exports=c7});var TN=h((S_e,_N)=>{var l7=lN(),d7=fN(),f7=hN(),p7=gN(),h7=vN();function Xs(t){var e=-1,r=t==null?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}Xs.prototype.clear=l7;Xs.prototype.delete=d7;Xs.prototype.get=f7;Xs.prototype.has=p7;Xs.prototype.set=h7;_N.exports=Xs});var CN=h((E_e,bN)=>{var RN=TN(),m7=Kc(),g7=tp();function y7(){this.size=0,this.__data__={hash:new RN,map:new(g7||m7),string:new RN}}bN.exports=y7});var PN=h((k_e,AN)=>{function v7(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}AN.exports=v7});var zc=h((N_e,SN)=>{var _7=PN();function T7(t,e){var r=t.__data__;return _7(e)?r[typeof e=="string"?"string":"hash"]:r.map}SN.exports=T7});var kN=h((w_e,EN)=>{var R7=zc();function b7(t){var e=R7(this,t).delete(t);return this.size-=e?1:0,e}EN.exports=b7});var wN=h((D_e,NN)=>{var C7=zc();function A7(t){return C7(this,t).get(t)}NN.exports=A7});var ON=h((O_e,DN)=>{var P7=zc();function S7(t){return P7(this,t).has(t)}DN.exports=S7});var qN=h((I_e,IN)=>{var E7=zc();function k7(t,e){var r=E7(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this}IN.exports=k7});var ip=h((q_e,xN)=>{var N7=CN(),w7=kN(),D7=wN(),O7=ON(),I7=qN();function Js(t){var e=-1,r=t==null?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}Js.prototype.clear=N7;Js.prototype.delete=w7;Js.prototype.get=D7;Js.prototype.has=O7;Js.prototype.set=I7;xN.exports=Js});var MN=h((x_e,LN)=>{var q7=Kc(),x7=tp(),L7=ip(),M7=200;function $7(t,e){var r=this.__data__;if(r instanceof q7){var n=r.__data__;if(!x7||n.length<M7-1)return n.push([t,e]),this.size=++r.size,this;r=this.__data__=new L7(n)}return r.set(t,e),this.size=r.size,this}LN.exports=$7});var op=h((L_e,$N)=>{var F7=Kc(),j7=eN(),U7=rN(),G7=iN(),H7=aN(),W7=MN();function Qs(t){var e=this.__data__=new F7(t);this.size=e.size}Qs.prototype.clear=j7;Qs.prototype.delete=U7;Qs.prototype.get=G7;Qs.prototype.has=H7;Qs.prototype.set=W7;$N.exports=Qs});var jN=h((M_e,FN)=>{var K7="__lodash_hash_undefined__";function B7(t){return this.__data__.set(t,K7),this}FN.exports=B7});var GN=h(($_e,UN)=>{function z7(t){return this.__data__.has(t)}UN.exports=z7});var sp=h((F_e,HN)=>{var V7=ip(),Y7=jN(),X7=GN();function ap(t){var e=-1,r=t==null?0:t.length;for(this.__data__=new V7;++e<r;)this.add(t[e])}ap.prototype.add=ap.prototype.push=Y7;ap.prototype.has=X7;HN.exports=ap});var CT=h((j_e,WN)=>{function J7(t,e){for(var r=-1,n=t==null?0:t.length;++r<n;)if(e(t[r],r,t))return!0;return!1}WN.exports=J7});var up=h((U_e,KN)=>{function Q7(t,e){return t.has(e)}KN.exports=Q7});var AT=h((G_e,BN)=>{var Z7=sp(),e5=CT(),t5=up(),r5=1,n5=2;function i5(t,e,r,n,i,o){var a=r&r5,s=t.length,u=e.length;if(s!=u&&!(a&&u>s))return!1;var d=o.get(t),p=o.get(e);if(d&&p)return d==e&&p==t;var m=-1,v=!0,P=r&n5?new Z7:void 0;for(o.set(t,e),o.set(e,t);++m<s;){var _=t[m],N=e[m];if(n)var I=a?n(N,_,m,e,t,o):n(_,N,m,t,e,o);if(I!==void 0){if(I)continue;v=!1;break}if(P){if(!e5(e,function(O,E){if(!t5(P,E)&&(_===O||i(_,O,r,n,o)))return P.push(E)})){v=!1;break}}else if(!(_===N||i(_,N,r,n,o))){v=!1;break}}return o.delete(t),o.delete(e),v}BN.exports=i5});var PT=h((H_e,zN)=>{var o5=Xn(),a5=o5.Uint8Array;zN.exports=a5});var YN=h((W_e,VN)=>{function s5(t){var e=-1,r=Array(t.size);return t.forEach(function(n,i){r[++e]=[i,n]}),r}VN.exports=s5});var cp=h((K_e,XN)=>{function u5(t){var e=-1,r=Array(t.size);return t.forEach(function(n){r[++e]=n}),r}XN.exports=u5});var tw=h((B_e,ew)=>{var JN=Da(),QN=PT(),c5=Vs(),l5=AT(),d5=YN(),f5=cp(),p5=1,h5=2,m5="[object Boolean]",g5="[object Date]",y5="[object Error]",v5="[object Map]",_5="[object Number]",T5="[object RegExp]",R5="[object Set]",b5="[object String]",C5="[object Symbol]",A5="[object ArrayBuffer]",P5="[object DataView]",ZN=JN?JN.prototype:void 0,ST=ZN?ZN.valueOf:void 0;function S5(t,e,r,n,i,o,a){switch(r){case P5:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case A5:return!(t.byteLength!=e.byteLength||!o(new QN(t),new QN(e)));case m5:case g5:case _5:return c5(+t,+e);case y5:return t.name==e.name&&t.message==e.message;case T5:case b5:return t==e+"";case v5:var s=d5;case R5:var u=n&p5;if(s||(s=f5),t.size!=e.size&&!u)return!1;var d=a.get(t);if(d)return d==e;n|=h5,a.set(t,e);var p=l5(s(t),s(e),n,i,o,a);return a.delete(t),p;case C5:if(ST)return ST.call(t)==ST.call(e)}return!1}ew.exports=S5});var lp=h((z_e,rw)=>{function E5(t,e){for(var r=-1,n=e.length,i=t.length;++r<n;)t[i+r]=e[r];return t}rw.exports=E5});var ET=h((V_e,nw)=>{var k5=lp(),N5=ze();function w5(t,e,r){var n=e(t);return N5(t)?n:k5(n,r(t))}nw.exports=w5});var dp=h((Y_e,iw)=>{function D5(t,e){for(var r=-1,n=t==null?0:t.length,i=0,o=[];++r<n;){var a=t[r];e(a,r,t)&&(o[i++]=a)}return o}iw.exports=D5});var kT=h((X_e,ow)=>{function O5(){return[]}ow.exports=O5});var fp=h((J_e,sw)=>{var I5=dp(),q5=kT(),x5=Object.prototype,L5=x5.propertyIsEnumerable,aw=Object.getOwnPropertySymbols,M5=aw?function(t){return t==null?[]:(t=Object(t),I5(aw(t),function(e){return L5.call(t,e)}))}:q5;sw.exports=M5});var cw=h((Q_e,uw)=>{function $5(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}uw.exports=$5});var Vc=h((Z_e,lw)=>{var F5=9007199254740991,j5=/^(?:0|[1-9]\d*)$/;function U5(t,e){var r=typeof t;return e=e??F5,!!e&&(r=="number"||r!="symbol"&&j5.test(t))&&t>-1&&t%1==0&&t<e}lw.exports=U5});var NT=h((eTe,dw)=>{var G5=cw(),H5=$c(),W5=ze(),K5=jc(),B5=Vc(),z5=np(),V5=Object.prototype,Y5=V5.hasOwnProperty;function X5(t,e){var r=W5(t),n=!r&&H5(t),i=!r&&!n&&K5(t),o=!r&&!n&&!i&&z5(t),a=r||n||i||o,s=a?G5(t.length,String):[],u=s.length;for(var d in t)(e||Y5.call(t,d))&&!(a&&(d=="length"||i&&(d=="offset"||d=="parent")||o&&(d=="buffer"||d=="byteLength"||d=="byteOffset")||B5(d,u)))&&s.push(d);return s}dw.exports=X5});var dn=h((tTe,fw)=>{var J5=NT(),Q5=fT(),Z5=Zn();function e9(t){return Z5(t)?J5(t):Q5(t)}fw.exports=e9});var wT=h((rTe,pw)=>{var t9=ET(),r9=fp(),n9=dn();function i9(t){return t9(t,n9,r9)}pw.exports=i9});var gw=h((nTe,mw)=>{var hw=wT(),o9=1,a9=Object.prototype,s9=a9.hasOwnProperty;function u9(t,e,r,n,i,o){var a=r&o9,s=hw(t),u=s.length,d=hw(e),p=d.length;if(u!=p&&!a)return!1;for(var m=u;m--;){var v=s[m];if(!(a?v in e:s9.call(e,v)))return!1}var P=o.get(t),_=o.get(e);if(P&&_)return P==e&&_==t;var N=!0;o.set(t,e),o.set(e,t);for(var I=a;++m<u;){v=s[m];var O=t[v],E=e[v];if(n)var S=a?n(E,O,v,e,t,o):n(O,E,v,t,e,o);if(!(S===void 0?O===E||i(O,E,r,n,o):S)){N=!1;break}I||(I=v=="constructor")}if(N&&!I){var L=t.constructor,U=e.constructor;L!=U&&"constructor"in t&&"constructor"in e&&!(typeof L=="function"&&L instanceof L&&typeof U=="function"&&U instanceof U)&&(N=!1)}return o.delete(t),o.delete(e),N}mw.exports=u9});var Aw=h((iTe,Cw)=>{var DT=op(),c9=AT(),l9=tw(),d9=gw(),yw=Hs(),vw=ze(),_w=jc(),f9=np(),p9=1,Tw="[object Arguments]",Rw="[object Array]",pp="[object Object]",h9=Object.prototype,bw=h9.hasOwnProperty;function m9(t,e,r,n,i,o){var a=vw(t),s=vw(e),u=a?Rw:yw(t),d=s?Rw:yw(e);u=u==Tw?pp:u,d=d==Tw?pp:d;var p=u==pp,m=d==pp,v=u==d;if(v&&_w(t)){if(!_w(e))return!1;a=!0,p=!1}if(v&&!p)return o||(o=new DT),a||f9(t)?c9(t,e,r,n,i,o):l9(t,e,u,r,n,i,o);if(!(r&p9)){var P=p&&bw.call(t,"__wrapped__"),_=m&&bw.call(e,"__wrapped__");if(P||_){var N=P?t.value():t,I=_?e.value():e;return o||(o=new DT),i(N,I,r,n,o)}}return v?(o||(o=new DT),d9(t,e,r,n,i,o)):!1}Cw.exports=m9});var OT=h((oTe,Ew)=>{var g9=Aw(),Pw=Qn();function Sw(t,e,r,n,i){return t===e?!0:t==null||e==null||!Pw(t)&&!Pw(e)?t!==t&&e!==e:g9(t,e,r,n,Sw,i)}Ew.exports=Sw});var Nw=h((aTe,kw)=>{var y9=op(),v9=OT(),_9=1,T9=2;function R9(t,e,r,n){var i=r.length,o=i,a=!n;if(t==null)return!o;for(t=Object(t);i--;){var s=r[i];if(a&&s[2]?s[1]!==t[s[0]]:!(s[0]in t))return!1}for(;++i<o;){s=r[i];var u=s[0],d=t[u],p=s[1];if(a&&s[2]){if(d===void 0&&!(u in t))return!1}else{var m=new y9;if(n)var v=n(d,p,u,t,e,m);if(!(v===void 0?v9(p,d,_9|T9,n,m):v))return!1}}return!0}kw.exports=R9});var IT=h((sTe,ww)=>{var b9=Jn();function C9(t){return t===t&&!b9(t)}ww.exports=C9});var Ow=h((uTe,Dw)=>{var A9=IT(),P9=dn();function S9(t){for(var e=P9(t),r=e.length;r--;){var n=e[r],i=t[n];e[r]=[n,i,A9(i)]}return e}Dw.exports=S9});var qT=h((cTe,Iw)=>{function E9(t,e){return function(r){return r==null?!1:r[t]===e&&(e!==void 0||t in Object(r))}}Iw.exports=E9});var xw=h((lTe,qw)=>{var k9=Nw(),N9=Ow(),w9=qT();function D9(t){var e=N9(t);return e.length==1&&e[0][2]?w9(e[0][0],e[0][1]):function(r){return r===t||k9(r,t,e)}}qw.exports=D9});var Zs=h((dTe,Lw)=>{var O9=Yo(),I9=Qn(),q9="[object Symbol]";function x9(t){return typeof t=="symbol"||I9(t)&&O9(t)==q9}Lw.exports=x9});var hp=h((fTe,Mw)=>{var L9=ze(),M9=Zs(),$9=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,F9=/^\w*$/;function j9(t,e){if(L9(t))return!1;var r=typeof t;return r=="number"||r=="symbol"||r=="boolean"||t==null||M9(t)?!0:F9.test(t)||!$9.test(t)||e!=null&&t in Object(e)}Mw.exports=j9});var jw=h((pTe,Fw)=>{var $w=ip(),U9="Expected a function";function xT(t,e){if(typeof t!="function"||e!=null&&typeof e!="function")throw new TypeError(U9);var r=function(){var n=arguments,i=e?e.apply(this,n):n[0],o=r.cache;if(o.has(i))return o.get(i);var a=t.apply(this,n);return r.cache=o.set(i,a)||o,a};return r.cache=new(xT.Cache||$w),r}xT.Cache=$w;Fw.exports=xT});var Gw=h((hTe,Uw)=>{var G9=jw(),H9=500;function W9(t){var e=G9(t,function(n){return r.size===H9&&r.clear(),n}),r=e.cache;return e}Uw.exports=W9});var Ww=h((mTe,Hw)=>{var K9=Gw(),B9=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,z9=/\\(\\)?/g,V9=K9(function(t){var e=[];return t.charCodeAt(0)===46&&e.push(""),t.replace(B9,function(r,n,i,o){e.push(i?o.replace(z9,"$1"):n||r)}),e});Hw.exports=V9});var Xw=h((gTe,Yw)=>{var Kw=Da(),Y9=zs(),X9=ze(),J9=Zs(),Q9=1/0,Bw=Kw?Kw.prototype:void 0,zw=Bw?Bw.toString:void 0;function Vw(t){if(typeof t=="string")return t;if(X9(t))return Y9(t,Vw)+"";if(J9(t))return zw?zw.call(t):"";var e=t+"";return e=="0"&&1/t==-Q9?"-0":e}Yw.exports=Vw});var LT=h((yTe,Jw)=>{var Z9=Xw();function eY(t){return t==null?"":Z9(t)}Jw.exports=eY});var Yc=h((vTe,Qw)=>{var tY=ze(),rY=hp(),nY=Ww(),iY=LT();function oY(t,e){return tY(t)?t:rY(t,e)?[t]:nY(iY(t))}Qw.exports=oY});var eu=h((_Te,Zw)=>{var aY=Zs(),sY=1/0;function uY(t){if(typeof t=="string"||aY(t))return t;var e=t+"";return e=="0"&&1/t==-sY?"-0":e}Zw.exports=uY});var mp=h((TTe,eD)=>{var cY=Yc(),lY=eu();function dY(t,e){e=cY(e,t);for(var r=0,n=e.length;t!=null&&r<n;)t=t[lY(e[r++])];return r&&r==n?t:void 0}eD.exports=dY});var rD=h((RTe,tD)=>{var fY=mp();function pY(t,e,r){var n=t==null?void 0:fY(t,e);return n===void 0?r:n}tD.exports=pY});var iD=h((bTe,nD)=>{function hY(t,e){return t!=null&&e in Object(t)}nD.exports=hY});var MT=h((CTe,oD)=>{var mY=Yc(),gY=$c(),yY=ze(),vY=Vc(),_Y=rp(),TY=eu();function RY(t,e,r){e=mY(e,t);for(var n=-1,i=e.length,o=!1;++n<i;){var a=TY(e[n]);if(!(o=t!=null&&r(t,a)))break;t=t[a]}return o||++n!=i?o:(i=t==null?0:t.length,!!i&&_Y(i)&&vY(a,i)&&(yY(t)||gY(t)))}oD.exports=RY});var sD=h((ATe,aD)=>{var bY=iD(),CY=MT();function AY(t,e){return t!=null&&CY(t,e,bY)}aD.exports=AY});var cD=h((PTe,uD)=>{var PY=OT(),SY=rD(),EY=sD(),kY=hp(),NY=IT(),wY=qT(),DY=eu(),OY=1,IY=2;function qY(t,e){return kY(t)&&NY(e)?wY(DY(t),e):function(r){var n=SY(r,t);return n===void 0&&n===e?EY(r,t):PY(e,n,OY|IY)}}uD.exports=qY});var Ia=h((STe,lD)=>{function xY(t){return t}lD.exports=xY});var fD=h((ETe,dD)=>{function LY(t){return function(e){return e?.[t]}}dD.exports=LY});var hD=h((kTe,pD)=>{var MY=mp();function $Y(t){return function(e){return MY(e,t)}}pD.exports=$Y});var gD=h((NTe,mD)=>{var FY=fD(),jY=hD(),UY=hp(),GY=eu();function HY(t){return UY(t)?FY(GY(t)):jY(t)}mD.exports=HY});var wn=h((wTe,yD)=>{var WY=xw(),KY=cD(),BY=Ia(),zY=ze(),VY=gD();function YY(t){return typeof t=="function"?t:t==null?BY:typeof t=="object"?zY(t)?KY(t[0],t[1]):WY(t):VY(t)}yD.exports=YY});var _D=h((DTe,vD)=>{function XY(t){return function(e,r,n){for(var i=-1,o=Object(e),a=n(e),s=a.length;s--;){var u=a[t?s:++i];if(r(o[u],u,o)===!1)break}return e}}vD.exports=XY});var RD=h((OTe,TD)=>{var JY=_D(),QY=JY();TD.exports=QY});var CD=h((ITe,bD)=>{var ZY=RD(),eX=dn();function tX(t,e){return t&&ZY(t,e,eX)}bD.exports=tX});var PD=h((qTe,AD)=>{var rX=Zn();function nX(t,e){return function(r,n){if(r==null)return r;if(!rX(r))return t(r,n);for(var i=r.length,o=e?i:-1,a=Object(r);(e?o--:++o<i)&&n(a[o],o,a)!==!1;);return r}}AD.exports=nX});var Jo=h((xTe,SD)=>{var iX=CD(),oX=PD(),aX=oX(iX);SD.exports=aX});var kD=h((LTe,ED)=>{var sX=Jo(),uX=Zn();function cX(t,e){var r=-1,n=uX(t)?Array(t.length):[];return sX(t,function(i,o,a){n[++r]=e(i,o,a)}),n}ED.exports=cX});var nr=h((MTe,ND)=>{var lX=zs(),dX=wn(),fX=kD(),pX=ze();function hX(t,e){var r=pX(t)?lX:fX;return r(t,dX(e,3))}ND.exports=hX});var $T=h(($Te,wD)=>{function mX(t,e){for(var r=-1,n=t==null?0:t.length;++r<n&&e(t[r],r,t)!==!1;);return t}wD.exports=mX});var OD=h((FTe,DD)=>{var gX=Ia();function yX(t){return typeof t=="function"?t:gX}DD.exports=yX});var ir=h((jTe,ID)=>{var vX=$T(),_X=Jo(),TX=OD(),RX=ze();function bX(t,e){var r=RX(t)?vX:_X;return r(t,TX(e))}ID.exports=bX});var xD=h((UTe,qD)=>{var CX=zs();function AX(t,e){return CX(e,function(r){return t[r]})}qD.exports=AX});var Si=h((GTe,LD)=>{var PX=xD(),SX=dn();function EX(t){return t==null?[]:PX(t,SX(t))}LD.exports=EX});var $D=h((HTe,MD)=>{var kX=Object.prototype,NX=kX.hasOwnProperty;function wX(t,e){return t!=null&&NX.call(t,e)}MD.exports=wX});var fn=h((WTe,FD)=>{var DX=$D(),OX=MT();function IX(t,e){return t!=null&&OX(t,e,DX)}FD.exports=IX});var FT=h((KTe,jD)=>{var qX=Xo(),xX=function(){try{var t=qX(Object,"defineProperty");return t({},"",{}),t}catch{}}();jD.exports=xX});var gp=h((BTe,GD)=>{var UD=FT();function LX(t,e,r){e=="__proto__"&&UD?UD(t,e,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[e]=r}GD.exports=LX});var Xc=h((zTe,HD)=>{var MX=gp(),$X=Vs(),FX=Object.prototype,jX=FX.hasOwnProperty;function UX(t,e,r){var n=t[e];(!(jX.call(t,e)&&$X(n,r))||r===void 0&&!(e in t))&&MX(t,e,r)}HD.exports=UX});var tu=h((VTe,WD)=>{var GX=Xc(),HX=gp();function WX(t,e,r,n){var i=!r;r||(r={});for(var o=-1,a=e.length;++o<a;){var s=e[o],u=n?n(r[s],t[s],s,r,t):void 0;u===void 0&&(u=t[s]),i?HX(r,s,u):GX(r,s,u)}return r}WD.exports=WX});var BD=h((YTe,KD)=>{var KX=tu(),BX=dn();function zX(t,e){return t&&KX(e,BX(e),t)}KD.exports=zX});var VD=h((XTe,zD)=>{function VX(t){var e=[];if(t!=null)for(var r in Object(t))e.push(r);return e}zD.exports=VX});var XD=h((JTe,YD)=>{var YX=Jn(),XX=js(),JX=VD(),QX=Object.prototype,ZX=QX.hasOwnProperty;function eJ(t){if(!YX(t))return JX(t);var e=XX(t),r=[];for(var n in t)n=="constructor"&&(e||!ZX.call(t,n))||r.push(n);return r}YD.exports=eJ});var Jc=h((QTe,JD)=>{var tJ=NT(),rJ=XD(),nJ=Zn();function iJ(t){return nJ(t)?tJ(t,!0):rJ(t)}JD.exports=iJ});var ZD=h((ZTe,QD)=>{var oJ=tu(),aJ=Jc();function sJ(t,e){return t&&oJ(e,aJ(e),t)}QD.exports=sJ});var iO=h((Qc,ru)=>{var uJ=Xn(),nO=typeof Qc=="object"&&Qc&&!Qc.nodeType&&Qc,eO=nO&&typeof ru=="object"&&ru&&!ru.nodeType&&ru,cJ=eO&&eO.exports===nO,tO=cJ?uJ.Buffer:void 0,rO=tO?tO.allocUnsafe:void 0;function lJ(t,e){if(e)return t.slice();var r=t.length,n=rO?rO(r):new t.constructor(r);return t.copy(n),n}ru.exports=lJ});var aO=h((eRe,oO)=>{function dJ(t,e){var r=-1,n=t.length;for(e||(e=Array(n));++r<n;)e[r]=t[r];return e}oO.exports=dJ});var uO=h((tRe,sO)=>{var fJ=tu(),pJ=fp();function hJ(t,e){return fJ(t,pJ(t),e)}sO.exports=hJ});var jT=h((rRe,cO)=>{var mJ=dT(),gJ=mJ(Object.getPrototypeOf,Object);cO.exports=gJ});var UT=h((nRe,lO)=>{var yJ=lp(),vJ=jT(),_J=fp(),TJ=kT(),RJ=Object.getOwnPropertySymbols,bJ=RJ?function(t){for(var e=[];t;)yJ(e,_J(t)),t=vJ(t);return e}:TJ;lO.exports=bJ});var fO=h((iRe,dO)=>{var CJ=tu(),AJ=UT();function PJ(t,e){return CJ(t,AJ(t),e)}dO.exports=PJ});var GT=h((oRe,pO)=>{var SJ=ET(),EJ=UT(),kJ=Jc();function NJ(t){return SJ(t,kJ,EJ)}pO.exports=NJ});var mO=h((aRe,hO)=>{var wJ=Object.prototype,DJ=wJ.hasOwnProperty;function OJ(t){var e=t.length,r=new t.constructor(e);return e&&typeof t[0]=="string"&&DJ.call(t,"index")&&(r.index=t.index,r.input=t.input),r}hO.exports=OJ});var yp=h((sRe,yO)=>{var gO=PT();function IJ(t){var e=new t.constructor(t.byteLength);return new gO(e).set(new gO(t)),e}yO.exports=IJ});var _O=h((uRe,vO)=>{var qJ=yp();function xJ(t,e){var r=e?qJ(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}vO.exports=xJ});var RO=h((cRe,TO)=>{var LJ=/\w*$/;function MJ(t){var e=new t.constructor(t.source,LJ.exec(t));return e.lastIndex=t.lastIndex,e}TO.exports=MJ});var SO=h((lRe,PO)=>{var bO=Da(),CO=bO?bO.prototype:void 0,AO=CO?CO.valueOf:void 0;function $J(t){return AO?Object(AO.call(t)):{}}PO.exports=$J});var kO=h((dRe,EO)=>{var FJ=yp();function jJ(t,e){var r=e?FJ(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}EO.exports=jJ});var wO=h((fRe,NO)=>{var UJ=yp(),GJ=_O(),HJ=RO(),WJ=SO(),KJ=kO(),BJ="[object Boolean]",zJ="[object Date]",VJ="[object Map]",YJ="[object Number]",XJ="[object RegExp]",JJ="[object Set]",QJ="[object String]",ZJ="[object Symbol]",eQ="[object ArrayBuffer]",tQ="[object DataView]",rQ="[object Float32Array]",nQ="[object Float64Array]",iQ="[object Int8Array]",oQ="[object Int16Array]",aQ="[object Int32Array]",sQ="[object Uint8Array]",uQ="[object Uint8ClampedArray]",cQ="[object Uint16Array]",lQ="[object Uint32Array]";function dQ(t,e,r){var n=t.constructor;switch(e){case eQ:return UJ(t);case BJ:case zJ:return new n(+t);case tQ:return GJ(t,r);case rQ:case nQ:case iQ:case oQ:case aQ:case sQ:case uQ:case cQ:case lQ:return KJ(t,r);case VJ:return new n;case YJ:case QJ:return new n(t);case XJ:return HJ(t);case JJ:return new n;case ZJ:return WJ(t)}}NO.exports=dQ});var IO=h((pRe,OO)=>{var fQ=Jn(),DO=Object.create,pQ=function(){function t(){}return function(e){if(!fQ(e))return{};if(DO)return DO(e);t.prototype=e;var r=new t;return t.prototype=void 0,r}}();OO.exports=pQ});var xO=h((hRe,qO)=>{var hQ=IO(),mQ=jT(),gQ=js();function yQ(t){return typeof t.constructor=="function"&&!gQ(t)?hQ(mQ(t)):{}}qO.exports=yQ});var MO=h((mRe,LO)=>{var vQ=Hs(),_Q=Qn(),TQ="[object Map]";function RQ(t){return _Q(t)&&vQ(t)==TQ}LO.exports=RQ});var UO=h((gRe,jO)=>{var bQ=MO(),CQ=Ks(),$O=Hc(),FO=$O&&$O.isMap,AQ=FO?CQ(FO):bQ;jO.exports=AQ});var HO=h((yRe,GO)=>{var PQ=Hs(),SQ=Qn(),EQ="[object Set]";function kQ(t){return SQ(t)&&PQ(t)==EQ}GO.exports=kQ});var zO=h((vRe,BO)=>{var NQ=HO(),wQ=Ks(),WO=Hc(),KO=WO&&WO.isSet,DQ=KO?wQ(KO):NQ;BO.exports=DQ});var QO=h((_Re,JO)=>{var OQ=op(),IQ=$T(),qQ=Xc(),xQ=BD(),LQ=ZD(),MQ=iO(),$Q=aO(),FQ=uO(),jQ=fO(),UQ=wT(),GQ=GT(),HQ=Hs(),WQ=mO(),KQ=wO(),BQ=xO(),zQ=ze(),VQ=jc(),YQ=UO(),XQ=Jn(),JQ=zO(),QQ=dn(),ZQ=Jc(),eZ=1,tZ=2,rZ=4,VO="[object Arguments]",nZ="[object Array]",iZ="[object Boolean]",oZ="[object Date]",aZ="[object Error]",YO="[object Function]",sZ="[object GeneratorFunction]",uZ="[object Map]",cZ="[object Number]",XO="[object Object]",lZ="[object RegExp]",dZ="[object Set]",fZ="[object String]",pZ="[object Symbol]",hZ="[object WeakMap]",mZ="[object ArrayBuffer]",gZ="[object DataView]",yZ="[object Float32Array]",vZ="[object Float64Array]",_Z="[object Int8Array]",TZ="[object Int16Array]",RZ="[object Int32Array]",bZ="[object Uint8Array]",CZ="[object Uint8ClampedArray]",AZ="[object Uint16Array]",PZ="[object Uint32Array]",at={};at[VO]=at[nZ]=at[mZ]=at[gZ]=at[iZ]=at[oZ]=at[yZ]=at[vZ]=at[_Z]=at[TZ]=at[RZ]=at[uZ]=at[cZ]=at[XO]=at[lZ]=at[dZ]=at[fZ]=at[pZ]=at[bZ]=at[CZ]=at[AZ]=at[PZ]=!0;at[aZ]=at[YO]=at[hZ]=!1;function vp(t,e,r,n,i,o){var a,s=e&eZ,u=e&tZ,d=e&rZ;if(r&&(a=i?r(t,n,i,o):r(t)),a!==void 0)return a;if(!XQ(t))return t;var p=zQ(t);if(p){if(a=WQ(t),!s)return $Q(t,a)}else{var m=HQ(t),v=m==YO||m==sZ;if(VQ(t))return MQ(t,s);if(m==XO||m==VO||v&&!i){if(a=u||v?{}:BQ(t),!s)return u?jQ(t,LQ(a,t)):FQ(t,xQ(a,t))}else{if(!at[m])return i?t:{};a=KQ(t,m,s)}}o||(o=new OQ);var P=o.get(t);if(P)return P;o.set(t,a),JQ(t)?t.forEach(function(I){a.add(vp(I,e,r,I,t,o))}):YQ(t)&&t.forEach(function(I,O){a.set(O,vp(I,e,r,O,t,o))});var _=d?u?GQ:UQ:u?ZQ:QQ,N=p?void 0:_(t);return IQ(N||t,function(I,O){N&&(O=I,I=t[O]),qQ(a,O,vp(I,e,r,O,t,o))}),a}JO.exports=vp});var po=h((TRe,ZO)=>{var SZ=QO(),EZ=4;function kZ(t){return SZ(t,EZ)}ZO.exports=kZ});var eI=h(nu=>{"use strict";Object.defineProperty(nu,"__esModule",{value:!0});nu.PRINT_WARNING=nu.PRINT_ERROR=void 0;function NZ(t){console&&console.error&&console.error("Error: ".concat(t))}nu.PRINT_ERROR=NZ;function wZ(t){console&&console.warn&&console.warn("Warning: ".concat(t))}nu.PRINT_WARNING=wZ});var tI=h(_p=>{"use strict";Object.defineProperty(_p,"__esModule",{value:!0});_p.timer=void 0;function DZ(t){var e=new Date().getTime(),r=t(),n=new Date().getTime(),i=n-e;return{time:i,value:r}}_p.timer=DZ});var rI=h((exports,module)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0});exports.toFastProperties=void 0;function toFastProperties(toBecomeFast){function FakeConstructor(){}FakeConstructor.prototype=toBecomeFast;var fakeInstance=new FakeConstructor;function fakeAccess(){return typeof fakeInstance.bar}return fakeAccess(),fakeAccess(),toBecomeFast;eval(toBecomeFast)}exports.toFastProperties=toFastProperties});var iu=h(Ei=>{"use strict";Object.defineProperty(Ei,"__esModule",{value:!0});Ei.toFastProperties=Ei.timer=Ei.PRINT_ERROR=Ei.PRINT_WARNING=void 0;var nI=eI();Object.defineProperty(Ei,"PRINT_WARNING",{enumerable:!0,get:function(){return nI.PRINT_WARNING}});Object.defineProperty(Ei,"PRINT_ERROR",{enumerable:!0,get:function(){return nI.PRINT_ERROR}});var OZ=tI();Object.defineProperty(Ei,"timer",{enumerable:!0,get:function(){return OZ.timer}});var IZ=rI();Object.defineProperty(Ei,"toFastProperties",{enumerable:!0,get:function(){return IZ.toFastProperties}})});var Tp=h((ARe,iI)=>{function qZ(t,e,r){var n=-1,i=t.length;e<0&&(e=-e>i?0:i+e),r=r>i?i:r,r<0&&(r+=i),i=e>r?0:r-e>>>0,e>>>=0;for(var o=Array(i);++n<i;)o[n]=t[n+e];return o}iI.exports=qZ});var aI=h((PRe,oI)=>{var xZ=/\s/;function LZ(t){for(var e=t.length;e--&&xZ.test(t.charAt(e)););return e}oI.exports=LZ});var uI=h((SRe,sI)=>{var MZ=aI(),$Z=/^\s+/;function FZ(t){return t&&t.slice(0,MZ(t)+1).replace($Z,"")}sI.exports=FZ});var fI=h((ERe,dI)=>{var jZ=uI(),cI=Jn(),UZ=Zs(),lI=NaN,GZ=/^[-+]0x[0-9a-f]+$/i,HZ=/^0b[01]+$/i,WZ=/^0o[0-7]+$/i,KZ=parseInt;function BZ(t){if(typeof t=="number")return t;if(UZ(t))return lI;if(cI(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=cI(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=jZ(t);var r=HZ.test(t);return r||WZ.test(t)?KZ(t.slice(2),r?2:8):GZ.test(t)?lI:+t}dI.exports=BZ});var mI=h((kRe,hI)=>{var zZ=fI(),pI=1/0,VZ=17976931348623157e292;function YZ(t){if(!t)return t===0?t:0;if(t=zZ(t),t===pI||t===-pI){var e=t<0?-1:1;return e*VZ}return t===t?t:0}hI.exports=YZ});var ou=h((NRe,gI)=>{var XZ=mI();function JZ(t){var e=XZ(t),r=e%1;return e===e?r?e-r:e:0}gI.exports=JZ});var Rp=h((wRe,yI)=>{var QZ=Tp(),ZZ=ou();function eee(t,e,r){var n=t==null?0:t.length;return n?(e=r||e===void 0?1:ZZ(e),QZ(t,e<0?0:e,n)):[]}yI.exports=eee});var Zc=h((DRe,vI)=>{var tee=Yo(),ree=ze(),nee=Qn(),iee="[object String]";function oee(t){return typeof t=="string"||!ree(t)&&nee(t)&&tee(t)==iee}vI.exports=oee});var TI=h((ORe,_I)=>{var aee=Yo(),see=Qn(),uee="[object RegExp]";function cee(t){return see(t)&&aee(t)==uee}_I.exports=cee});var HT=h((IRe,CI)=>{var lee=TI(),dee=Ks(),RI=Hc(),bI=RI&&RI.isRegExp,fee=bI?dee(bI):lee;CI.exports=fee});var SI=h((qRe,PI)=>{var pee=Xc(),hee=Yc(),mee=Vc(),AI=Jn(),gee=eu();function yee(t,e,r,n){if(!AI(t))return t;e=hee(e,t);for(var i=-1,o=e.length,a=o-1,s=t;s!=null&&++i<o;){var u=gee(e[i]),d=r;if(u==="__proto__"||u==="constructor"||u==="prototype")return t;if(i!=a){var p=s[u];d=n?n(p,u,s):void 0,d===void 0&&(d=AI(p)?p:mee(e[i+1])?[]:{})}pee(s,u,d),s=s[u]}return t}PI.exports=yee});var kI=h((xRe,EI)=>{var vee=mp(),_ee=SI(),Tee=Yc();function Ree(t,e,r){for(var n=-1,i=e.length,o={};++n<i;){var a=e[n],s=vee(t,a);r(s,a)&&_ee(o,Tee(a,t),s)}return o}EI.exports=Ree});var WT=h((LRe,NI)=>{var bee=zs(),Cee=wn(),Aee=kI(),Pee=GT();function See(t,e){if(t==null)return{};var r=bee(Pee(t),function(n){return[n]});return e=Cee(e),Aee(t,r,function(n,i){return e(n,i[0])})}NI.exports=See});var DI=h((MRe,wI)=>{function Eee(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)}wI.exports=Eee});var qI=h(($Re,II)=>{var kee=DI(),OI=Math.max;function Nee(t,e,r){return e=OI(e===void 0?t.length-1:e,0),function(){for(var n=arguments,i=-1,o=OI(n.length-e,0),a=Array(o);++i<o;)a[i]=n[e+i];i=-1;for(var s=Array(e+1);++i<e;)s[i]=n[i];return s[e]=r(a),kee(t,this,s)}}II.exports=Nee});var LI=h((FRe,xI)=>{function wee(t){return function(){return t}}xI.exports=wee});var FI=h((jRe,$I)=>{var Dee=LI(),MI=FT(),Oee=Ia(),Iee=MI?function(t,e){return MI(t,"toString",{configurable:!0,enumerable:!1,value:Dee(e),writable:!0})}:Oee;$I.exports=Iee});var UI=h((URe,jI)=>{var qee=800,xee=16,Lee=Date.now;function Mee(t){var e=0,r=0;return function(){var n=Lee(),i=xee-(n-r);if(r=n,i>0){if(++e>=qee)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}jI.exports=Mee});var HI=h((GRe,GI)=>{var $ee=FI(),Fee=UI(),jee=Fee($ee);GI.exports=jee});var bp=h((HRe,WI)=>{var Uee=Ia(),Gee=qI(),Hee=HI();function Wee(t,e){return Hee(Gee(t,e,Uee),t+"")}WI.exports=Wee});var el=h((WRe,KI)=>{var Kee=Vs(),Bee=Zn(),zee=Vc(),Vee=Jn();function Yee(t,e,r){if(!Vee(r))return!1;var n=typeof e;return(n=="number"?Bee(r)&&zee(e,r.length):n=="string"&&e in r)?Kee(r[e],t):!1}KI.exports=Yee});var zI=h((KRe,BI)=>{var Xee=bp(),Jee=el();function Qee(t){return Xee(function(e,r){var n=-1,i=r.length,o=i>1?r[i-1]:void 0,a=i>2?r[2]:void 0;for(o=t.length>3&&typeof o=="function"?(i--,o):void 0,a&&Jee(r[0],r[1],a)&&(o=i<3?void 0:o,i=1),e=Object(e);++n<i;){var s=r[n];s&&t(e,s,n,o)}return e})}BI.exports=Qee});var tl=h((BRe,VI)=>{var Zee=Xc(),ete=tu(),tte=zI(),rte=Zn(),nte=js(),ite=dn(),ote=Object.prototype,ate=ote.hasOwnProperty,ste=tte(function(t,e){if(nte(e)||rte(e)){ete(e,ite(e),t);return}for(var r in e)ate.call(e,r)&&Zee(t,r,e[r])});VI.exports=ste});var Ap=h(Fe=>{"use strict";var ho=Fe&&Fe.__extends||function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(n[o]=i[o])},t(e,r)};return function(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");t(e,r);function n(){this.constructor=e}e.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}(),au=Fe&&Fe.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(Fe,"__esModule",{value:!0});Fe.serializeProduction=Fe.serializeGrammar=Fe.Terminal=Fe.Alternation=Fe.RepetitionWithSeparator=Fe.Repetition=Fe.RepetitionMandatoryWithSeparator=Fe.RepetitionMandatory=Fe.Option=Fe.Alternative=Fe.Rule=Fe.NonTerminal=Fe.AbstractProduction=void 0;var YI=au(nr()),ute=au(ir()),KT=au(Zc()),cte=au(HT()),ki=au(WT()),Ni=au(tl());function lte(t){return dte(t)?t.LABEL:t.name}function dte(t){return(0,KT.default)(t.LABEL)&&t.LABEL!==""}var wi=function(){function t(e){this._definition=e}return Object.defineProperty(t.prototype,"definition",{get:function(){return this._definition},set:function(e){this._definition=e},enumerable:!1,configurable:!0}),t.prototype.accept=function(e){e.visit(this),(0,ute.default)(this.definition,function(r){r.accept(e)})},t}();Fe.AbstractProduction=wi;var XI=function(t){ho(e,t);function e(r){var n=t.call(this,[])||this;return n.idx=1,(0,Ni.default)(n,(0,ki.default)(r,function(i){return i!==void 0})),n}return Object.defineProperty(e.prototype,"definition",{get:function(){return this.referencedRule!==void 0?this.referencedRule.definition:[]},set:function(r){},enumerable:!1,configurable:!0}),e.prototype.accept=function(r){r.visit(this)},e}(wi);Fe.NonTerminal=XI;var JI=function(t){ho(e,t);function e(r){var n=t.call(this,r.definition)||this;return n.orgText="",(0,Ni.default)(n,(0,ki.default)(r,function(i){return i!==void 0})),n}return e}(wi);Fe.Rule=JI;var QI=function(t){ho(e,t);function e(r){var n=t.call(this,r.definition)||this;return n.ignoreAmbiguities=!1,(0,Ni.default)(n,(0,ki.default)(r,function(i){return i!==void 0})),n}return e}(wi);Fe.Alternative=QI;var ZI=function(t){ho(e,t);function e(r){var n=t.call(this,r.definition)||this;return n.idx=1,(0,Ni.default)(n,(0,ki.default)(r,function(i){return i!==void 0})),n}return e}(wi);Fe.Option=ZI;var eq=function(t){ho(e,t);function e(r){var n=t.call(this,r.definition)||this;return n.idx=1,(0,Ni.default)(n,(0,ki.default)(r,function(i){return i!==void 0})),n}return e}(wi);Fe.RepetitionMandatory=eq;var tq=function(t){ho(e,t);function e(r){var n=t.call(this,r.definition)||this;return n.idx=1,(0,Ni.default)(n,(0,ki.default)(r,function(i){return i!==void 0})),n}return e}(wi);Fe.RepetitionMandatoryWithSeparator=tq;var rq=function(t){ho(e,t);function e(r){var n=t.call(this,r.definition)||this;return n.idx=1,(0,Ni.default)(n,(0,ki.default)(r,function(i){return i!==void 0})),n}return e}(wi);Fe.Repetition=rq;var nq=function(t){ho(e,t);function e(r){var n=t.call(this,r.definition)||this;return n.idx=1,(0,Ni.default)(n,(0,ki.default)(r,function(i){return i!==void 0})),n}return e}(wi);Fe.RepetitionWithSeparator=nq;var iq=function(t){ho(e,t);function e(r){var n=t.call(this,r.definition)||this;return n.idx=1,n.ignoreAmbiguities=!1,n.hasPredicates=!1,(0,Ni.default)(n,(0,ki.default)(r,function(i){return i!==void 0})),n}return Object.defineProperty(e.prototype,"definition",{get:function(){return this._definition},set:function(r){this._definition=r},enumerable:!1,configurable:!0}),e}(wi);Fe.Alternation=iq;var Cp=function(){function t(e){this.idx=1,(0,Ni.default)(this,(0,ki.default)(e,function(r){return r!==void 0}))}return t.prototype.accept=function(e){e.visit(this)},t}();Fe.Terminal=Cp;function fte(t){return(0,YI.default)(t,rl)}Fe.serializeGrammar=fte;function rl(t){function e(o){return(0,YI.default)(o,rl)}if(t instanceof XI){var r={type:"NonTerminal",name:t.nonTerminalName,idx:t.idx};return(0,KT.default)(t.label)&&(r.label=t.label),r}else{if(t instanceof QI)return{type:"Alternative",definition:e(t.definition)};if(t instanceof ZI)return{type:"Option",idx:t.idx,definition:e(t.definition)};if(t instanceof eq)return{type:"RepetitionMandatory",idx:t.idx,definition:e(t.definition)};if(t instanceof tq)return{type:"RepetitionMandatoryWithSeparator",idx:t.idx,separator:rl(new Cp({terminalType:t.separator})),definition:e(t.definition)};if(t instanceof nq)return{type:"RepetitionWithSeparator",idx:t.idx,separator:rl(new Cp({terminalType:t.separator})),definition:e(t.definition)};if(t instanceof rq)return{type:"Repetition",idx:t.idx,definition:e(t.definition)};if(t instanceof iq)return{type:"Alternation",idx:t.idx,definition:e(t.definition)};if(t instanceof Cp){var n={type:"Terminal",name:t.terminalType.name,label:lte(t.terminalType),idx:t.idx};(0,KT.default)(t.label)&&(n.terminalLabel=t.label);var i=t.terminalType.PATTERN;return t.terminalType.PATTERN&&(n.pattern=(0,cte.default)(i)?i.source:i),n}else{if(t instanceof JI)return{type:"Rule",name:t.name,orgText:t.orgText,definition:e(t.definition)};throw Error("non exhaustive match")}}}Fe.serializeProduction=rl});var oq=h(Pp=>{"use strict";Object.defineProperty(Pp,"__esModule",{value:!0});Pp.GAstVisitor=void 0;var Di=Ap(),pte=function(){function t(){}return t.prototype.visit=function(e){var r=e;switch(r.constructor){case Di.NonTerminal:return this.visitNonTerminal(r);case Di.Alternative:return this.visitAlternative(r);case Di.Option:return this.visitOption(r);case Di.RepetitionMandatory:return this.visitRepetitionMandatory(r);case Di.RepetitionMandatoryWithSeparator:return this.visitRepetitionMandatoryWithSeparator(r);case Di.RepetitionWithSeparator:return this.visitRepetitionWithSeparator(r);case Di.Repetition:return this.visitRepetition(r);case Di.Alternation:return this.visitAlternation(r);case Di.Terminal:return this.visitTerminal(r);case Di.Rule:return this.visitRule(r);default:throw Error("non exhaustive match")}},t.prototype.visitNonTerminal=function(e){},t.prototype.visitAlternative=function(e){},t.prototype.visitOption=function(e){},t.prototype.visitRepetition=function(e){},t.prototype.visitRepetitionMandatory=function(e){},t.prototype.visitRepetitionMandatoryWithSeparator=function(e){},t.prototype.visitRepetitionWithSeparator=function(e){},t.prototype.visitAlternation=function(e){},t.prototype.visitTerminal=function(e){},t.prototype.visitRule=function(e){},t}();Pp.GAstVisitor=pte});var sq=h((YRe,aq)=>{var hte=Jo();function mte(t,e){var r;return hte(t,function(n,i,o){return r=e(n,i,o),!r}),!!r}aq.exports=mte});var Sp=h((XRe,uq)=>{var gte=CT(),yte=wn(),vte=sq(),_te=ze(),Tte=el();function Rte(t,e,r){var n=_te(t)?gte:vte;return r&&Tte(t,e,r)&&(e=void 0),n(t,yte(e,3))}uq.exports=Rte});var lq=h((JRe,cq)=>{function bte(t,e){for(var r=-1,n=t==null?0:t.length;++r<n;)if(!e(t[r],r,t))return!1;return!0}cq.exports=bte});var fq=h((QRe,dq)=>{var Cte=Jo();function Ate(t,e){var r=!0;return Cte(t,function(n,i,o){return r=!!e(n,i,o),r}),r}dq.exports=Ate});var nl=h((ZRe,pq)=>{var Pte=lq(),Ste=fq(),Ete=wn(),kte=ze(),Nte=el();function wte(t,e,r){var n=kte(t)?Pte:Ste;return r&&Nte(t,e,r)&&(e=void 0),n(t,Ete(e,3))}pq.exports=wte});var BT=h((ebe,hq)=>{function Dte(t,e,r,n){for(var i=t.length,o=r+(n?1:-1);n?o--:++o<i;)if(e(t[o],o,t))return o;return-1}hq.exports=Dte});var gq=h((tbe,mq)=>{function Ote(t){return t!==t}mq.exports=Ote});var vq=h((rbe,yq)=>{function Ite(t,e,r){for(var n=r-1,i=t.length;++n<i;)if(t[n]===e)return n;return-1}yq.exports=Ite});var Ep=h((nbe,_q)=>{var qte=BT(),xte=gq(),Lte=vq();function Mte(t,e,r){return e===e?Lte(t,e,r):qte(t,xte,r)}_q.exports=Mte});var mo=h((ibe,Tq)=>{var $te=Ep(),Fte=Zn(),jte=Zc(),Ute=ou(),Gte=Si(),Hte=Math.max;function Wte(t,e,r,n){t=Fte(t)?t:Gte(t),r=r&&!n?Ute(r):0;var i=t.length;return r<0&&(r=Hte(i+r,0)),jte(t)?r<=i&&t.indexOf(e,r)>-1:!!i&&$te(t,e,r)>-1}Tq.exports=Wte});var Rq=h(Dn=>{"use strict";var VT=Dn&&Dn.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(Dn,"__esModule",{value:!0});Dn.getProductionDslName=Dn.isBranchingProd=Dn.isOptionalProd=Dn.isSequenceProd=void 0;var Kte=VT(Sp()),Bte=VT(nl()),zte=VT(mo()),gt=Ap();function Vte(t){return t instanceof gt.Alternative||t instanceof gt.Option||t instanceof gt.Repetition||t instanceof gt.RepetitionMandatory||t instanceof gt.RepetitionMandatoryWithSeparator||t instanceof gt.RepetitionWithSeparator||t instanceof gt.Terminal||t instanceof gt.Rule}Dn.isSequenceProd=Vte;function zT(t,e){e===void 0&&(e=[]);var r=t instanceof gt.Option||t instanceof gt.Repetition||t instanceof gt.RepetitionWithSeparator;return r?!0:t instanceof gt.Alternation?(0,Kte.default)(t.definition,function(n){return zT(n,e)}):t instanceof gt.NonTerminal&&(0,zte.default)(e,t)?!1:t instanceof gt.AbstractProduction?(t instanceof gt.NonTerminal&&e.push(t),(0,Bte.default)(t.definition,function(n){return zT(n,e)})):!1}Dn.isOptionalProd=zT;function Yte(t){return t instanceof gt.Alternation}Dn.isBranchingProd=Yte;function Xte(t){if(t instanceof gt.NonTerminal)return"SUBRULE";if(t instanceof gt.Option)return"OPTION";if(t instanceof gt.Alternation)return"OR";if(t instanceof gt.RepetitionMandatory)return"AT_LEAST_ONE";if(t instanceof gt.RepetitionMandatoryWithSeparator)return"AT_LEAST_ONE_SEP";if(t instanceof gt.RepetitionWithSeparator)return"MANY_SEP";if(t instanceof gt.Repetition)return"MANY";if(t instanceof gt.Terminal)return"CONSUME";throw Error("non exhaustive match")}Dn.getProductionDslName=Xte});var Nt=h(Oe=>{"use strict";Object.defineProperty(Oe,"__esModule",{value:!0});Oe.isSequenceProd=Oe.isBranchingProd=Oe.isOptionalProd=Oe.getProductionDslName=Oe.GAstVisitor=Oe.serializeProduction=Oe.serializeGrammar=Oe.Alternative=Oe.Alternation=Oe.RepetitionWithSeparator=Oe.RepetitionMandatoryWithSeparator=Oe.RepetitionMandatory=Oe.Repetition=Oe.Option=Oe.NonTerminal=Oe.Terminal=Oe.Rule=void 0;var On=Ap();Object.defineProperty(Oe,"Rule",{enumerable:!0,get:function(){return On.Rule}});Object.defineProperty(Oe,"Terminal",{enumerable:!0,get:function(){return On.Terminal}});Object.defineProperty(Oe,"NonTerminal",{enumerable:!0,get:function(){return On.NonTerminal}});Object.defineProperty(Oe,"Option",{enumerable:!0,get:function(){return On.Option}});Object.defineProperty(Oe,"Repetition",{enumerable:!0,get:function(){return On.Repetition}});Object.defineProperty(Oe,"RepetitionMandatory",{enumerable:!0,get:function(){return On.RepetitionMandatory}});Object.defineProperty(Oe,"RepetitionMandatoryWithSeparator",{enumerable:!0,get:function(){return On.RepetitionMandatoryWithSeparator}});Object.defineProperty(Oe,"RepetitionWithSeparator",{enumerable:!0,get:function(){return On.RepetitionWithSeparator}});Object.defineProperty(Oe,"Alternation",{enumerable:!0,get:function(){return On.Alternation}});Object.defineProperty(Oe,"Alternative",{enumerable:!0,get:function(){return On.Alternative}});Object.defineProperty(Oe,"serializeGrammar",{enumerable:!0,get:function(){return On.serializeGrammar}});Object.defineProperty(Oe,"serializeProduction",{enumerable:!0,get:function(){return On.serializeProduction}});var Jte=oq();Object.defineProperty(Oe,"GAstVisitor",{enumerable:!0,get:function(){return Jte.GAstVisitor}});var kp=Rq();Object.defineProperty(Oe,"getProductionDslName",{enumerable:!0,get:function(){return kp.getProductionDslName}});Object.defineProperty(Oe,"isOptionalProd",{enumerable:!0,get:function(){return kp.isOptionalProd}});Object.defineProperty(Oe,"isBranchingProd",{enumerable:!0,get:function(){return kp.isBranchingProd}});Object.defineProperty(Oe,"isSequenceProd",{enumerable:!0,get:function(){return kp.isSequenceProd}})});var Np=h(su=>{"use strict";var Aq=su&&su.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(su,"__esModule",{value:!0});su.RestWalker=void 0;var Qte=Aq(Rp()),bq=Aq(ir()),en=Nt(),Zte=function(){function t(){}return t.prototype.walk=function(e,r){var n=this;r===void 0&&(r=[]),(0,bq.default)(e.definition,function(i,o){var a=(0,Qte.default)(e.definition,o+1);if(i instanceof en.NonTerminal)n.walkProdRef(i,a,r);else if(i instanceof en.Terminal)n.walkTerminal(i,a,r);else if(i instanceof en.Alternative)n.walkFlat(i,a,r);else if(i instanceof en.Option)n.walkOption(i,a,r);else if(i instanceof en.RepetitionMandatory)n.walkAtLeastOne(i,a,r);else if(i instanceof en.RepetitionMandatoryWithSeparator)n.walkAtLeastOneSep(i,a,r);else if(i instanceof en.RepetitionWithSeparator)n.walkManySep(i,a,r);else if(i instanceof en.Repetition)n.walkMany(i,a,r);else if(i instanceof en.Alternation)n.walkOr(i,a,r);else throw Error("non exhaustive match")})},t.prototype.walkTerminal=function(e,r,n){},t.prototype.walkProdRef=function(e,r,n){},t.prototype.walkFlat=function(e,r,n){var i=r.concat(n);this.walk(e,i)},t.prototype.walkOption=function(e,r,n){var i=r.concat(n);this.walk(e,i)},t.prototype.walkAtLeastOne=function(e,r,n){var i=[new en.Option({definition:e.definition})].concat(r,n);this.walk(e,i)},t.prototype.walkAtLeastOneSep=function(e,r,n){var i=Cq(e,r,n);this.walk(e,i)},t.prototype.walkMany=function(e,r,n){var i=[new en.Option({definition:e.definition})].concat(r,n);this.walk(e,i)},t.prototype.walkManySep=function(e,r,n){var i=Cq(e,r,n);this.walk(e,i)},t.prototype.walkOr=function(e,r,n){var i=this,o=r.concat(n);(0,bq.default)(e.definition,function(a){var s=new en.Alternative({definition:[a]});i.walk(s,o)})},t}();su.RestWalker=Zte;function Cq(t,e,r){var n=[new en.Option({definition:[new en.Terminal({terminalType:t.separator})].concat(t.definition)})],i=n.concat(e,r);return i}});var kq=h((ube,Eq)=>{var Pq=Da(),ere=$c(),tre=ze(),Sq=Pq?Pq.isConcatSpreadable:void 0;function rre(t){return tre(t)||ere(t)||!!(Sq&&t&&t[Sq])}Eq.exports=rre});var wp=h((cbe,wq)=>{var nre=lp(),ire=kq();function Nq(t,e,r,n,i){var o=-1,a=t.length;for(r||(r=ire),i||(i=[]);++o<a;){var s=t[o];e>0&&r(s)?e>1?Nq(s,e-1,r,n,i):nre(i,s):n||(i[i.length]=s)}return i}wq.exports=Nq});var ei=h((lbe,Dq)=>{var ore=wp();function are(t){var e=t==null?0:t.length;return e?ore(t,1):[]}Dq.exports=are});var YT=h((dbe,Oq)=>{var sre=Ep();function ure(t,e){var r=t==null?0:t.length;return!!r&&sre(t,e,0)>-1}Oq.exports=ure});var XT=h((fbe,Iq)=>{function cre(t,e,r){for(var n=-1,i=t==null?0:t.length;++n<i;)if(r(e,t[n]))return!0;return!1}Iq.exports=cre});var Dp=h((pbe,qq)=>{function lre(){}qq.exports=lre});var Lq=h((hbe,xq)=>{var JT=gT(),dre=Dp(),fre=cp(),pre=1/0,hre=JT&&1/fre(new JT([,-0]))[1]==pre?function(t){return new JT(t)}:dre;xq.exports=hre});var QT=h((mbe,Mq)=>{var mre=sp(),gre=YT(),yre=XT(),vre=up(),_re=Lq(),Tre=cp(),Rre=200;function bre(t,e,r){var n=-1,i=gre,o=t.length,a=!0,s=[],u=s;if(r)a=!1,i=yre;else if(o>=Rre){var d=e?null:_re(t);if(d)return Tre(d);a=!1,i=vre,u=new mre}else u=e?[]:s;e:for(;++n<o;){var p=t[n],m=e?e(p):p;if(p=r||p!==0?p:0,a&&m===m){for(var v=u.length;v--;)if(u[v]===m)continue e;e&&u.push(m),s.push(p)}else i(u,m,r)||(u!==s&&u.push(m),s.push(p))}return s}Mq.exports=bre});var Op=h((gbe,$q)=>{var Cre=QT();function Are(t){return t&&t.length?Cre(t):[]}$q.exports=Are});var tR=h(In=>{"use strict";var eR=In&&In.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(In,"__esModule",{value:!0});In.firstForTerminal=In.firstForBranching=In.firstForSequence=In.first=void 0;var Pre=eR(ei()),jq=eR(Op()),Sre=eR(nr()),Fq=Nt(),ZT=Nt();function Ip(t){if(t instanceof Fq.NonTerminal)return Ip(t.referencedRule);if(t instanceof Fq.Terminal)return Hq(t);if((0,ZT.isSequenceProd)(t))return Uq(t);if((0,ZT.isBranchingProd)(t))return Gq(t);throw Error("non exhaustive match")}In.first=Ip;function Uq(t){for(var e=[],r=t.definition,n=0,i=r.length>n,o,a=!0;i&&a;)o=r[n],a=(0,ZT.isOptionalProd)(o),e=e.concat(Ip(o)),n=n+1,i=r.length>n;return(0,jq.default)(e)}In.firstForSequence=Uq;function Gq(t){var e=(0,Sre.default)(t.definition,function(r){return Ip(r)});return(0,jq.default)((0,Pre.default)(e))}In.firstForBranching=Gq;function Hq(t){return[t.terminalType]}In.firstForTerminal=Hq});var rR=h(qp=>{"use strict";Object.defineProperty(qp,"__esModule",{value:!0});qp.IN=void 0;qp.IN="_~IN~_"});var Vq=h(tn=>{"use strict";var Ere=tn&&tn.__extends||function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(n[o]=i[o])},t(e,r)};return function(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");t(e,r);function n(){this.constructor=e}e.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}(),Wq=tn&&tn.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(tn,"__esModule",{value:!0});tn.buildInProdFollowPrefix=tn.buildBetweenProdsFollowPrefix=tn.computeAllProdsFollows=tn.ResyncFollowsWalker=void 0;var kre=Np(),Nre=tR(),wre=Wq(ir()),Dre=Wq(tl()),Kq=rR(),Ore=Nt(),Bq=function(t){Ere(e,t);function e(r){var n=t.call(this)||this;return n.topProd=r,n.follows={},n}return e.prototype.startWalking=function(){return this.walk(this.topProd),this.follows},e.prototype.walkTerminal=function(r,n,i){},e.prototype.walkProdRef=function(r,n,i){var o=zq(r.referencedRule,r.idx)+this.topProd.name,a=n.concat(i),s=new Ore.Alternative({definition:a}),u=(0,Nre.first)(s);this.follows[o]=u},e}(kre.RestWalker);tn.ResyncFollowsWalker=Bq;function Ire(t){var e={};return(0,wre.default)(t,function(r){var n=new Bq(r).startWalking();(0,Dre.default)(e,n)}),e}tn.computeAllProdsFollows=Ire;function zq(t,e){return t.name+e+Kq.IN}tn.buildBetweenProdsFollowPrefix=zq;function qre(t){var e=t.terminalType.name;return e+t.idx+Kq.IN}tn.buildInProdFollowPrefix=qre});var qa=h((Tbe,Yq)=>{function xre(t){return t===void 0}Yq.exports=xre});var Jq=h((Rbe,Xq)=>{function Lre(t){return t&&t.length?t[0]:void 0}Xq.exports=Lre});var uu=h((bbe,Qq)=>{Qq.exports=Jq()});var il=h((Cbe,Zq)=>{function Mre(t){for(var e=-1,r=t==null?0:t.length,n=0,i=[];++e<r;){var o=t[e];o&&(i[n++]=o)}return i}Zq.exports=Mre});var nR=h((Abe,ex)=>{var $re=Jo();function Fre(t,e){var r=[];return $re(t,function(n,i,o){e(n,i,o)&&r.push(n)}),r}ex.exports=Fre});var rx=h((Pbe,tx)=>{var jre="Expected a function";function Ure(t){if(typeof t!="function")throw new TypeError(jre);return function(){var e=arguments;switch(e.length){case 0:return!t.call(this);case 1:return!t.call(this,e[0]);case 2:return!t.call(this,e[0],e[1]);case 3:return!t.call(this,e[0],e[1],e[2])}return!t.apply(this,e)}}tx.exports=Ure});var xp=h((Sbe,nx)=>{var Gre=dp(),Hre=nR(),Wre=wn(),Kre=ze(),Bre=rx();function zre(t,e){var r=Kre(t)?Gre:Hre;return r(t,Bre(Wre(e,3)))}nx.exports=zre});var ox=h((Ebe,ix)=>{var Vre=sp(),Yre=YT(),Xre=XT(),Jre=zs(),Qre=Ks(),Zre=up(),ene=200;function tne(t,e,r,n){var i=-1,o=Yre,a=!0,s=t.length,u=[],d=e.length;if(!s)return u;r&&(e=Jre(e,Qre(r))),n?(o=Xre,a=!1):e.length>=ene&&(o=Zre,a=!1,e=new Vre(e));e:for(;++i<s;){var p=t[i],m=r==null?p:r(p);if(p=n||p!==0?p:0,a&&m===m){for(var v=d;v--;)if(e[v]===m)continue e;u.push(p)}else o(e,m,n)||u.push(p)}return u}ix.exports=tne});var sx=h((kbe,ax)=>{var rne=Zn(),nne=Qn();function ine(t){return nne(t)&&rne(t)}ax.exports=ine});var Lp=h((Nbe,cx)=>{var one=ox(),ane=wp(),sne=bp(),ux=sx(),une=sne(function(t,e){return ux(t)?one(t,ane(e,1,ux,!0)):[]});cx.exports=une});var dx=h((wbe,lx)=>{var cne=Ep(),lne=ou(),dne=Math.max;function fne(t,e,r){var n=t==null?0:t.length;if(!n)return-1;var i=r==null?0:lne(r);return i<0&&(i=dne(n+i,0)),cne(t,e,i)}lx.exports=fne});var px=h((Dbe,fx)=>{var pne=wn(),hne=Zn(),mne=dn();function gne(t){return function(e,r,n){var i=Object(e);if(!hne(e)){var o=pne(r,3);e=mne(e),r=function(s){return o(i[s],s,i)}}var a=t(e,r,n);return a>-1?i[o?e[a]:a]:void 0}}fx.exports=gne});var mx=h((Obe,hx)=>{var yne=BT(),vne=wn(),_ne=ou(),Tne=Math.max;function Rne(t,e,r){var n=t==null?0:t.length;if(!n)return-1;var i=r==null?0:_ne(r);return i<0&&(i=Tne(n+i,0)),yne(t,vne(e,3),i)}hx.exports=Rne});var Mp=h((Ibe,gx)=>{var bne=px(),Cne=mx(),Ane=bne(Cne);gx.exports=Ane});var ol=h((qbe,yx)=>{var Pne=dp(),Sne=nR(),Ene=wn(),kne=ze();function Nne(t,e){var r=kne(t)?Pne:Sne;return r(t,Ene(e,3))}yx.exports=Nne});var iR=h((xbe,_x)=>{var wne=bp(),Dne=Vs(),One=el(),Ine=Jc(),vx=Object.prototype,qne=vx.hasOwnProperty,xne=wne(function(t,e){t=Object(t);var r=-1,n=e.length,i=n>2?e[2]:void 0;for(i&&One(e[0],e[1],i)&&(n=1);++r<n;)for(var o=e[r],a=Ine(o),s=-1,u=a.length;++s<u;){var d=a[s],p=t[d];(p===void 0||Dne(p,vx[d])&&!qne.call(t,d))&&(t[d]=o[d])}return t});_x.exports=xne});var Rx=h((Lbe,Tx)=>{function Lne(t,e,r,n){var i=-1,o=t==null?0:t.length;for(n&&o&&(r=t[++i]);++i<o;)r=e(r,t[i],i,t);return r}Tx.exports=Lne});var Cx=h((Mbe,bx)=>{function Mne(t,e,r,n,i){return i(t,function(o,a,s){r=n?(n=!1,o):e(r,o,a,s)}),r}bx.exports=Mne});var go=h(($be,Ax)=>{var $ne=Rx(),Fne=Jo(),jne=wn(),Une=Cx(),Gne=ze();function Hne(t,e,r){var n=Gne(t)?$ne:Une,i=arguments.length<3;return n(t,jne(e,4),r,i,Fne)}Ax.exports=Hne});var Fp=h(cu=>{"use strict";Object.defineProperty(cu,"__esModule",{value:!0});cu.clearRegExpParserCache=cu.getRegExpAst=void 0;var Wne=Ac(),$p={},Kne=new Wne.RegExpParser;function Bne(t){var e=t.toString();if($p.hasOwnProperty(e))return $p[e];var r=Kne.pattern(e);return $p[e]=r,r}cu.getRegExpAst=Bne;function zne(){$p={}}cu.clearRegExpParserCache=zne});var wx=h(Nr=>{"use strict";var Vne=Nr&&Nr.__extends||function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(n[o]=i[o])},t(e,r)};return function(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");t(e,r);function n(){this.constructor=e}e.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}(),lu=Nr&&Nr.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(Nr,"__esModule",{value:!0});Nr.canMatchCharCode=Nr.firstCharOptimizedIndices=Nr.getOptimizedStartCodesIndices=Nr.failedOptimizationPrefixMsg=void 0;var Ex=Ac(),Yne=lu(ze()),Xne=lu(nl()),Jne=lu(ir()),oR=lu(Mp()),Qne=lu(Si()),sR=lu(mo()),Px=iu(),kx=Fp(),yo=uR(),Nx="Complement Sets are not supported for first char optimization";Nr.failedOptimizationPrefixMsg=`Unable to use "first char" lexer optimizations:
`;function Zne(t,e){e===void 0&&(e=!1);try{var r=(0,kx.getRegExpAst)(t),n=Up(r.value,{},r.flags.ignoreCase);return n}catch(o){if(o.message===Nx)e&&(0,Px.PRINT_WARNING)("".concat(Nr.failedOptimizationPrefixMsg)+"	Unable to optimize: < ".concat(t.toString(),` >
`)+`	Complement Sets cannot be automatically optimized.
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#COMPLEMENT for details.`);else{var i="";e&&(i=`
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#REGEXP_PARSING for details.`),(0,Px.PRINT_ERROR)("".concat(Nr.failedOptimizationPrefixMsg,`
`)+"	Failed parsing: < ".concat(t.toString(),` >
`)+"	Using the regexp-to-ast library version: ".concat(Ex.VERSION,`
`)+"	Please open an issue at: https://github.com/bd82/regexp-to-ast/issues"+i)}}return[]}Nr.getOptimizedStartCodesIndices=Zne;function Up(t,e,r){switch(t.type){case"Disjunction":for(var n=0;n<t.value.length;n++)Up(t.value[n],e,r);break;case"Alternative":for(var i=t.value,n=0;n<i.length;n++){var o=i[n];switch(o.type){case"EndAnchor":case"GroupBackReference":case"Lookahead":case"NegativeLookahead":case"StartAnchor":case"WordBoundary":case"NonWordBoundary":continue}var a=o;switch(a.type){case"Character":jp(a.value,e,r);break;case"Set":if(a.complement===!0)throw Error(Nx);(0,Jne.default)(a.value,function(d){if(typeof d=="number")jp(d,e,r);else{var p=d;if(r===!0)for(var m=p.from;m<=p.to;m++)jp(m,e,r);else{for(var m=p.from;m<=p.to&&m<yo.minOptimizationVal;m++)jp(m,e,r);if(p.to>=yo.minOptimizationVal)for(var v=p.from>=yo.minOptimizationVal?p.from:yo.minOptimizationVal,P=p.to,_=(0,yo.charCodeToOptimizedIndex)(v),N=(0,yo.charCodeToOptimizedIndex)(P),I=_;I<=N;I++)e[I]=I}}});break;case"Group":Up(a.value,e,r);break;default:throw Error("Non Exhaustive Match")}var s=a.quantifier!==void 0&&a.quantifier.atLeast===0;if(a.type==="Group"&&aR(a)===!1||a.type!=="Group"&&s===!1)break}break;default:throw Error("non exhaustive match!")}return(0,Qne.default)(e)}Nr.firstCharOptimizedIndices=Up;function jp(t,e,r){var n=(0,yo.charCodeToOptimizedIndex)(t);e[n]=n,r===!0&&eie(t,e)}function eie(t,e){var r=String.fromCharCode(t),n=r.toUpperCase();if(n!==r){var i=(0,yo.charCodeToOptimizedIndex)(n.charCodeAt(0));e[i]=i}else{var o=r.toLowerCase();if(o!==r){var i=(0,yo.charCodeToOptimizedIndex)(o.charCodeAt(0));e[i]=i}}}function Sx(t,e){return(0,oR.default)(t.value,function(r){if(typeof r=="number")return(0,sR.default)(e,r);var n=r;return(0,oR.default)(e,function(i){return n.from<=i&&i<=n.to})!==void 0})}function aR(t){var e=t.quantifier;return e&&e.atLeast===0?!0:t.value?(0,Yne.default)(t.value)?(0,Xne.default)(t.value,aR):aR(t.value):!1}var tie=function(t){Vne(e,t);function e(r){var n=t.call(this)||this;return n.targetCharCodes=r,n.found=!1,n}return e.prototype.visitChildren=function(r){if(this.found!==!0){switch(r.type){case"Lookahead":this.visitLookahead(r);return;case"NegativeLookahead":this.visitNegativeLookahead(r);return}t.prototype.visitChildren.call(this,r)}},e.prototype.visitCharacter=function(r){(0,sR.default)(this.targetCharCodes,r.value)&&(this.found=!0)},e.prototype.visitSet=function(r){r.complement?Sx(r,this.targetCharCodes)===void 0&&(this.found=!0):Sx(r,this.targetCharCodes)!==void 0&&(this.found=!0)},e}(Ex.BaseRegExpVisitor);function rie(t,e){if(e instanceof RegExp){var r=(0,kx.getRegExpAst)(e),n=new tie(t);return n.visit(r),n.found}else return(0,oR.default)(e,function(i){return(0,sR.default)(t,i.charCodeAt(0))})!==void 0}Nr.canMatchCharCode=rie});var uR=h(Q=>{"use strict";var Ix=Q&&Q.__extends||function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(n[o]=i[o])},t(e,r)};return function(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");t(e,r);function n(){this.constructor=e}e.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}(),kt=Q&&Q.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(Q,"__esModule",{value:!0});Q.charCodeToOptimizedIndex=Q.minOptimizationVal=Q.buildLineBreakIssueMessage=Q.LineTerminatorOptimizedTester=Q.isShortPattern=Q.isCustomPattern=Q.cloneEmptyGroups=Q.performWarningRuntimeChecks=Q.performRuntimeChecks=Q.addStickyFlag=Q.addStartOfInput=Q.findUnreachablePatterns=Q.findModesThatDoNotExist=Q.findInvalidGroupType=Q.findDuplicatePatterns=Q.findUnsupportedFlags=Q.findStartOfInputAnchor=Q.findEmptyMatchRegExps=Q.findEndOfInputAnchor=Q.findInvalidPatterns=Q.findMissingPatterns=Q.validatePatterns=Q.analyzeTokenTypes=Q.enableSticky=Q.disableSticky=Q.SUPPORT_STICKY=Q.MODES=Q.DEFAULT_MODE=void 0;var qx=Ac(),Xe=al(),nie=kt(uu()),xx=kt(ln()),Lx=kt(il()),Hp=kt(ze()),iie=kt(Si()),oie=kt(ei()),Mx=kt(xp()),$x=kt(Lp()),Dx=kt(dx()),yt=kt(nr()),vo=kt(ir()),_o=kt(Zc()),Kp=kt(Us()),lR=kt(qa()),aie=kt(Mp()),wr=kt(fn()),sie=kt(dn()),Qo=kt(HT()),Oi=kt(ol()),uie=kt(iR()),Wp=kt(go()),Bp=kt(mo()),Ox=iu(),du=wx(),Fx=Fp(),xa="PATTERN";Q.DEFAULT_MODE="defaultMode";Q.MODES="modes";Q.SUPPORT_STICKY=typeof new RegExp("(?:)").sticky=="boolean";function cie(){Q.SUPPORT_STICKY=!1}Q.disableSticky=cie;function lie(){Q.SUPPORT_STICKY=!0}Q.enableSticky=lie;function die(t,e){e=(0,uie.default)(e,{useSticky:Q.SUPPORT_STICKY,debug:!1,safeMode:!1,positionTracking:"full",lineTerminatorCharacters:["\r",`
`],tracer:function(E,S){return S()}});var r=e.tracer;r("initCharCodeToOptimizedIndexMap",function(){Rie()});var n;r("Reject Lexer.NA",function(){n=(0,Mx.default)(t,function(E){return E[xa]===Xe.Lexer.NA})});var i=!1,o;r("Transform Patterns",function(){i=!1,o=(0,yt.default)(n,function(E){var S=E[xa];if((0,Qo.default)(S)){var L=S.source;return L.length===1&&L!=="^"&&L!=="$"&&L!=="."&&!S.ignoreCase?L:L.length===2&&L[0]==="\\"&&!(0,Bp.default)(["d","D","s","S","t","r","n","t","0","c","b","B","f","v","w","W"],L[1])?L[1]:e.useSticky?fR(S):dR(S)}else{if((0,Kp.default)(S))return i=!0,{exec:S};if(typeof S=="object")return i=!0,S;if(typeof S=="string"){if(S.length===1)return S;var U=S.replace(/[\\^$.*+?()[\]{}|]/g,"\\$&"),V=new RegExp(U);return e.useSticky?fR(V):dR(V)}else throw Error("non exhaustive match")}})});var a,s,u,d,p;r("misc mapping",function(){a=(0,yt.default)(n,function(E){return E.tokenTypeIdx}),s=(0,yt.default)(n,function(E){var S=E.GROUP;if(S!==Xe.Lexer.SKIPPED){if((0,_o.default)(S))return S;if((0,lR.default)(S))return!1;throw Error("non exhaustive match")}}),u=(0,yt.default)(n,function(E){var S=E.LONGER_ALT;if(S){var L=(0,Hp.default)(S)?(0,yt.default)(S,function(U){return(0,Dx.default)(n,U)}):[(0,Dx.default)(n,S)];return L}}),d=(0,yt.default)(n,function(E){return E.PUSH_MODE}),p=(0,yt.default)(n,function(E){return(0,wr.default)(E,"POP_MODE")})});var m;r("Line Terminator Handling",function(){var E=Zx(e.lineTerminatorCharacters);m=(0,yt.default)(n,function(S){return!1}),e.positionTracking!=="onlyOffset"&&(m=(0,yt.default)(n,function(S){return(0,wr.default)(S,"LINE_BREAKS")?!!S.LINE_BREAKS:Jx(S,E)===!1&&(0,du.canMatchCharCode)(E,S.PATTERN)}))});var v,P,_,N;r("Misc Mapping #2",function(){v=(0,yt.default)(n,hR),P=(0,yt.default)(o,Xx),_=(0,Wp.default)(n,function(E,S){var L=S.GROUP;return(0,_o.default)(L)&&L!==Xe.Lexer.SKIPPED&&(E[L]=[]),E},{}),N=(0,yt.default)(o,function(E,S){return{pattern:o[S],longerAlt:u[S],canLineTerminator:m[S],isCustom:v[S],short:P[S],group:s[S],push:d[S],pop:p[S],tokenTypeIdx:a[S],tokenType:n[S]}})});var I=!0,O=[];return e.safeMode||r("First Char Optimization",function(){O=(0,Wp.default)(n,function(E,S,L){if(typeof S.PATTERN=="string"){var U=S.PATTERN.charCodeAt(0),V=pR(U);cR(E,V,N[L])}else if((0,Hp.default)(S.START_CHARS_HINT)){var te;(0,vo.default)(S.START_CHARS_HINT,function(Z){var G=typeof Z=="string"?Z.charCodeAt(0):Z,j=pR(G);te!==j&&(te=j,cR(E,j,N[L]))})}else if((0,Qo.default)(S.PATTERN))if(S.PATTERN.unicode)I=!1,e.ensureOptimizations&&(0,Ox.PRINT_ERROR)("".concat(du.failedOptimizationPrefixMsg)+"	Unable to analyze < ".concat(S.PATTERN.toString(),` > pattern.
`)+`	The regexp unicode flag is not currently supported by the regexp-to-ast library.
	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNICODE_OPTIMIZE`);else{var we=(0,du.getOptimizedStartCodesIndices)(S.PATTERN,e.ensureOptimizations);(0,xx.default)(we)&&(I=!1),(0,vo.default)(we,function(Z){cR(E,Z,N[L])})}else e.ensureOptimizations&&(0,Ox.PRINT_ERROR)("".concat(du.failedOptimizationPrefixMsg)+"	TokenType: <".concat(S.name,`> is using a custom token pattern without providing <start_chars_hint> parameter.
`)+`	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_OPTIMIZE`),I=!1;return E},[])}),{emptyGroups:_,patternIdxToConfig:N,charCodeToPatternIdxToConfig:O,hasCustom:i,canBeOptimized:I}}Q.analyzeTokenTypes=die;function fie(t,e){var r=[],n=jx(t);r=r.concat(n.errors);var i=Ux(n.valid),o=i.valid;return r=r.concat(i.errors),r=r.concat(pie(o)),r=r.concat(zx(o)),r=r.concat(Vx(o,e)),r=r.concat(Yx(o)),r}Q.validatePatterns=fie;function pie(t){var e=[],r=(0,Oi.default)(t,function(n){return(0,Qo.default)(n[xa])});return e=e.concat(Gx(r)),e=e.concat(Wx(r)),e=e.concat(Kx(r)),e=e.concat(Bx(r)),e=e.concat(Hx(r)),e}function jx(t){var e=(0,Oi.default)(t,function(i){return!(0,wr.default)(i,xa)}),r=(0,yt.default)(e,function(i){return{message:"Token Type: ->"+i.name+"<- missing static 'PATTERN' property",type:Xe.LexerDefinitionErrorType.MISSING_PATTERN,tokenTypes:[i]}}),n=(0,$x.default)(t,e);return{errors:r,valid:n}}Q.findMissingPatterns=jx;function Ux(t){var e=(0,Oi.default)(t,function(i){var o=i[xa];return!(0,Qo.default)(o)&&!(0,Kp.default)(o)&&!(0,wr.default)(o,"exec")&&!(0,_o.default)(o)}),r=(0,yt.default)(e,function(i){return{message:"Token Type: ->"+i.name+"<- static 'PATTERN' can only be a RegExp, a Function matching the {CustomPatternMatcherFunc} type or an Object matching the {ICustomPattern} interface.",type:Xe.LexerDefinitionErrorType.INVALID_PATTERN,tokenTypes:[i]}}),n=(0,$x.default)(t,e);return{errors:r,valid:n}}Q.findInvalidPatterns=Ux;var hie=/[^\\][$]/;function Gx(t){var e=function(i){Ix(o,i);function o(){var a=i!==null&&i.apply(this,arguments)||this;return a.found=!1,a}return o.prototype.visitEndAnchor=function(a){this.found=!0},o}(qx.BaseRegExpVisitor),r=(0,Oi.default)(t,function(i){var o=i.PATTERN;try{var a=(0,Fx.getRegExpAst)(o),s=new e;return s.visit(a),s.found}catch{return hie.test(o.source)}}),n=(0,yt.default)(r,function(i){return{message:`Unexpected RegExp Anchor Error:
	Token Type: ->`+i.name+`<- static 'PATTERN' cannot contain end of input anchor '$'
	See chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.`,type:Xe.LexerDefinitionErrorType.EOI_ANCHOR_FOUND,tokenTypes:[i]}});return n}Q.findEndOfInputAnchor=Gx;function Hx(t){var e=(0,Oi.default)(t,function(n){var i=n.PATTERN;return i.test("")}),r=(0,yt.default)(e,function(n){return{message:"Token Type: ->"+n.name+"<- static 'PATTERN' must not match an empty string",type:Xe.LexerDefinitionErrorType.EMPTY_MATCH_PATTERN,tokenTypes:[n]}});return r}Q.findEmptyMatchRegExps=Hx;var mie=/[^\\[][\^]|^\^/;function Wx(t){var e=function(i){Ix(o,i);function o(){var a=i!==null&&i.apply(this,arguments)||this;return a.found=!1,a}return o.prototype.visitStartAnchor=function(a){this.found=!0},o}(qx.BaseRegExpVisitor),r=(0,Oi.default)(t,function(i){var o=i.PATTERN;try{var a=(0,Fx.getRegExpAst)(o),s=new e;return s.visit(a),s.found}catch{return mie.test(o.source)}}),n=(0,yt.default)(r,function(i){return{message:`Unexpected RegExp Anchor Error:
	Token Type: ->`+i.name+`<- static 'PATTERN' cannot contain start of input anchor '^'
	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.`,type:Xe.LexerDefinitionErrorType.SOI_ANCHOR_FOUND,tokenTypes:[i]}});return n}Q.findStartOfInputAnchor=Wx;function Kx(t){var e=(0,Oi.default)(t,function(n){var i=n[xa];return i instanceof RegExp&&(i.multiline||i.global)}),r=(0,yt.default)(e,function(n){return{message:"Token Type: ->"+n.name+"<- static 'PATTERN' may NOT contain global('g') or multiline('m')",type:Xe.LexerDefinitionErrorType.UNSUPPORTED_FLAGS_FOUND,tokenTypes:[n]}});return r}Q.findUnsupportedFlags=Kx;function Bx(t){var e=[],r=(0,yt.default)(t,function(o){return(0,Wp.default)(t,function(a,s){return o.PATTERN.source===s.PATTERN.source&&!(0,Bp.default)(e,s)&&s.PATTERN!==Xe.Lexer.NA&&(e.push(s),a.push(s)),a},[])});r=(0,Lx.default)(r);var n=(0,Oi.default)(r,function(o){return o.length>1}),i=(0,yt.default)(n,function(o){var a=(0,yt.default)(o,function(u){return u.name}),s=(0,nie.default)(o).PATTERN;return{message:"The same RegExp pattern ->".concat(s,"<-")+"has been used in all of the following Token Types: ".concat(a.join(", ")," <-"),type:Xe.LexerDefinitionErrorType.DUPLICATE_PATTERNS_FOUND,tokenTypes:o}});return i}Q.findDuplicatePatterns=Bx;function zx(t){var e=(0,Oi.default)(t,function(n){if(!(0,wr.default)(n,"GROUP"))return!1;var i=n.GROUP;return i!==Xe.Lexer.SKIPPED&&i!==Xe.Lexer.NA&&!(0,_o.default)(i)}),r=(0,yt.default)(e,function(n){return{message:"Token Type: ->"+n.name+"<- static 'GROUP' can only be Lexer.SKIPPED/Lexer.NA/A String",type:Xe.LexerDefinitionErrorType.INVALID_GROUP_TYPE_FOUND,tokenTypes:[n]}});return r}Q.findInvalidGroupType=zx;function Vx(t,e){var r=(0,Oi.default)(t,function(i){return i.PUSH_MODE!==void 0&&!(0,Bp.default)(e,i.PUSH_MODE)}),n=(0,yt.default)(r,function(i){var o="Token Type: ->".concat(i.name,"<- static 'PUSH_MODE' value cannot refer to a Lexer Mode ->").concat(i.PUSH_MODE,"<-")+"which does not exist";return{message:o,type:Xe.LexerDefinitionErrorType.PUSH_MODE_DOES_NOT_EXIST,tokenTypes:[i]}});return n}Q.findModesThatDoNotExist=Vx;function Yx(t){var e=[],r=(0,Wp.default)(t,function(n,i,o){var a=i.PATTERN;return a===Xe.Lexer.NA||((0,_o.default)(a)?n.push({str:a,idx:o,tokenType:i}):(0,Qo.default)(a)&&yie(a)&&n.push({str:a.source,idx:o,tokenType:i})),n},[]);return(0,vo.default)(t,function(n,i){(0,vo.default)(r,function(o){var a=o.str,s=o.idx,u=o.tokenType;if(i<s&&gie(a,n.PATTERN)){var d="Token: ->".concat(u.name,`<- can never be matched.
`)+"Because it appears AFTER the Token Type ->".concat(n.name,"<-")+`in the lexer's definition.
See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNREACHABLE`;e.push({message:d,type:Xe.LexerDefinitionErrorType.UNREACHABLE_PATTERN,tokenTypes:[n,u]})}})}),e}Q.findUnreachablePatterns=Yx;function gie(t,e){if((0,Qo.default)(e)){var r=e.exec(t);return r!==null&&r.index===0}else{if((0,Kp.default)(e))return e(t,0,[],{});if((0,wr.default)(e,"exec"))return e.exec(t,0,[],{});if(typeof e=="string")return e===t;throw Error("non exhaustive match")}}function yie(t){var e=[".","\\","[","]","|","^","$","(",")","?","*","+","{"];return(0,aie.default)(e,function(r){return t.source.indexOf(r)!==-1})===void 0}function dR(t){var e=t.ignoreCase?"i":"";return new RegExp("^(?:".concat(t.source,")"),e)}Q.addStartOfInput=dR;function fR(t){var e=t.ignoreCase?"iy":"y";return new RegExp("".concat(t.source),e)}Q.addStickyFlag=fR;function vie(t,e,r){var n=[];return(0,wr.default)(t,Q.DEFAULT_MODE)||n.push({message:"A MultiMode Lexer cannot be initialized without a <"+Q.DEFAULT_MODE+`> property in its definition
`,type:Xe.LexerDefinitionErrorType.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE}),(0,wr.default)(t,Q.MODES)||n.push({message:"A MultiMode Lexer cannot be initialized without a <"+Q.MODES+`> property in its definition
`,type:Xe.LexerDefinitionErrorType.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY}),(0,wr.default)(t,Q.MODES)&&(0,wr.default)(t,Q.DEFAULT_MODE)&&!(0,wr.default)(t.modes,t.defaultMode)&&n.push({message:"A MultiMode Lexer cannot be initialized with a ".concat(Q.DEFAULT_MODE,": <").concat(t.defaultMode,">")+`which does not exist
`,type:Xe.LexerDefinitionErrorType.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST}),(0,wr.default)(t,Q.MODES)&&(0,vo.default)(t.modes,function(i,o){(0,vo.default)(i,function(a,s){if((0,lR.default)(a))n.push({message:"A Lexer cannot be initialized using an undefined Token Type. Mode:"+"<".concat(o,"> at index: <").concat(s,`>
`),type:Xe.LexerDefinitionErrorType.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED});else if((0,wr.default)(a,"LONGER_ALT")){var u=(0,Hp.default)(a.LONGER_ALT)?a.LONGER_ALT:[a.LONGER_ALT];(0,vo.default)(u,function(d){!(0,lR.default)(d)&&!(0,Bp.default)(i,d)&&n.push({message:"A MultiMode Lexer cannot be initialized with a longer_alt <".concat(d.name,"> on token <").concat(a.name,"> outside of mode <").concat(o,`>
`),type:Xe.LexerDefinitionErrorType.MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE})})}})}),n}Q.performRuntimeChecks=vie;function _ie(t,e,r){var n=[],i=!1,o=(0,Lx.default)((0,oie.default)((0,iie.default)(t.modes))),a=(0,Mx.default)(o,function(u){return u[xa]===Xe.Lexer.NA}),s=Zx(r);return e&&(0,vo.default)(a,function(u){var d=Jx(u,s);if(d!==!1){var p=Qx(u,d),m={message:p,type:d.issue,tokenType:u};n.push(m)}else(0,wr.default)(u,"LINE_BREAKS")?u.LINE_BREAKS===!0&&(i=!0):(0,du.canMatchCharCode)(s,u.PATTERN)&&(i=!0)}),e&&!i&&n.push({message:`Warning: No LINE_BREAKS Found.
	This Lexer has been defined to track line and column information,
	But none of the Token Types can be identified as matching a line terminator.
	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#LINE_BREAKS 
	for details.`,type:Xe.LexerDefinitionErrorType.NO_LINE_BREAKS_FLAGS}),n}Q.performWarningRuntimeChecks=_ie;function Tie(t){var e={},r=(0,sie.default)(t);return(0,vo.default)(r,function(n){var i=t[n];if((0,Hp.default)(i))e[n]=[];else throw Error("non exhaustive match")}),e}Q.cloneEmptyGroups=Tie;function hR(t){var e=t.PATTERN;if((0,Qo.default)(e))return!1;if((0,Kp.default)(e))return!0;if((0,wr.default)(e,"exec"))return!0;if((0,_o.default)(e))return!1;throw Error("non exhaustive match")}Q.isCustomPattern=hR;function Xx(t){return(0,_o.default)(t)&&t.length===1?t.charCodeAt(0):!1}Q.isShortPattern=Xx;Q.LineTerminatorOptimizedTester={test:function(t){for(var e=t.length,r=this.lastIndex;r<e;r++){var n=t.charCodeAt(r);if(n===10)return this.lastIndex=r+1,!0;if(n===13)return t.charCodeAt(r+1)===10?this.lastIndex=r+2:this.lastIndex=r+1,!0}return!1},lastIndex:0};function Jx(t,e){if((0,wr.default)(t,"LINE_BREAKS"))return!1;if((0,Qo.default)(t.PATTERN)){try{(0,du.canMatchCharCode)(e,t.PATTERN)}catch(r){return{issue:Xe.LexerDefinitionErrorType.IDENTIFY_TERMINATOR,errMsg:r.message}}return!1}else{if((0,_o.default)(t.PATTERN))return!1;if(hR(t))return{issue:Xe.LexerDefinitionErrorType.CUSTOM_LINE_BREAK};throw Error("non exhaustive match")}}function Qx(t,e){if(e.issue===Xe.LexerDefinitionErrorType.IDENTIFY_TERMINATOR)return`Warning: unable to identify line terminator usage in pattern.
`+"	The problem is in the <".concat(t.name,`> Token Type
`)+"	 Root cause: ".concat(e.errMsg,`.
`)+"	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#IDENTIFY_TERMINATOR";if(e.issue===Xe.LexerDefinitionErrorType.CUSTOM_LINE_BREAK)return`Warning: A Custom Token Pattern should specify the <line_breaks> option.
`+"	The problem is in the <".concat(t.name,`> Token Type
`)+"	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_LINE_BREAK";throw Error("non exhaustive match")}Q.buildLineBreakIssueMessage=Qx;function Zx(t){var e=(0,yt.default)(t,function(r){return(0,_o.default)(r)?r.charCodeAt(0):r});return e}function cR(t,e,r){t[e]===void 0?t[e]=[r]:t[e].push(r)}Q.minOptimizationVal=256;var Gp=[];function pR(t){return t<Q.minOptimizationVal?t:Gp[t]}Q.charCodeToOptimizedIndex=pR;function Rie(){if((0,xx.default)(Gp)){Gp=new Array(65536);for(var t=0;t<65536;t++)Gp[t]=t>255?255+~~(t/255):t}}});var zp=h((Gbe,eL)=>{function bie(t){var e=t==null?0:t.length;return e?t[e-1]:void 0}eL.exports=bie});var Ma=h(ke=>{"use strict";var Ii=ke&&ke.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(ke,"__esModule",{value:!0});ke.isTokenType=ke.hasExtendingTokensTypesMapProperty=ke.hasExtendingTokensTypesProperty=ke.hasCategoriesProperty=ke.hasShortKeyProperty=ke.singleAssignCategoriesToksMap=ke.assignCategoriesMapProp=ke.assignCategoriesTokensProp=ke.assignTokenDefaultProps=ke.expandCategories=ke.augmentTokenTypes=ke.tokenIdxToClass=ke.tokenShortNameIdx=ke.tokenStructuredMatcherNoCategories=ke.tokenStructuredMatcher=void 0;var Cie=Ii(ln()),Aie=Ii(il()),Pie=Ii(ze()),Sie=Ii(ei()),Eie=Ii(Lp()),kie=Ii(nr()),La=Ii(ir()),sl=Ii(fn()),Nie=Ii(mo()),wie=Ii(po());function Die(t,e){var r=t.tokenTypeIdx;return r===e.tokenTypeIdx?!0:e.isParent===!0&&e.categoryMatchesMap[r]===!0}ke.tokenStructuredMatcher=Die;function Oie(t,e){return t.tokenTypeIdx===e.tokenTypeIdx}ke.tokenStructuredMatcherNoCategories=Oie;ke.tokenShortNameIdx=1;ke.tokenIdxToClass={};function Iie(t){var e=tL(t);rL(e),iL(e),nL(e),(0,La.default)(e,function(r){r.isParent=r.categoryMatches.length>0})}ke.augmentTokenTypes=Iie;function tL(t){for(var e=(0,wie.default)(t),r=t,n=!0;n;){r=(0,Aie.default)((0,Sie.default)((0,kie.default)(r,function(o){return o.CATEGORIES})));var i=(0,Eie.default)(r,e);e=e.concat(i),(0,Cie.default)(i)?n=!1:r=i}return e}ke.expandCategories=tL;function rL(t){(0,La.default)(t,function(e){oL(e)||(ke.tokenIdxToClass[ke.tokenShortNameIdx]=e,e.tokenTypeIdx=ke.tokenShortNameIdx++),mR(e)&&!(0,Pie.default)(e.CATEGORIES)&&(e.CATEGORIES=[e.CATEGORIES]),mR(e)||(e.CATEGORIES=[]),aL(e)||(e.categoryMatches=[]),sL(e)||(e.categoryMatchesMap={})})}ke.assignTokenDefaultProps=rL;function nL(t){(0,La.default)(t,function(e){e.categoryMatches=[],(0,La.default)(e.categoryMatchesMap,function(r,n){e.categoryMatches.push(ke.tokenIdxToClass[n].tokenTypeIdx)})})}ke.assignCategoriesTokensProp=nL;function iL(t){(0,La.default)(t,function(e){gR([],e)})}ke.assignCategoriesMapProp=iL;function gR(t,e){(0,La.default)(t,function(r){e.categoryMatchesMap[r.tokenTypeIdx]=!0}),(0,La.default)(e.CATEGORIES,function(r){var n=t.concat(e);(0,Nie.default)(n,r)||gR(n,r)})}ke.singleAssignCategoriesToksMap=gR;function oL(t){return(0,sl.default)(t,"tokenTypeIdx")}ke.hasShortKeyProperty=oL;function mR(t){return(0,sl.default)(t,"CATEGORIES")}ke.hasCategoriesProperty=mR;function aL(t){return(0,sl.default)(t,"categoryMatches")}ke.hasExtendingTokensTypesProperty=aL;function sL(t){return(0,sl.default)(t,"categoryMatchesMap")}ke.hasExtendingTokensTypesMapProperty=sL;function qie(t){return(0,sl.default)(t,"tokenTypeIdx")}ke.isTokenType=qie});var yR=h(Vp=>{"use strict";Object.defineProperty(Vp,"__esModule",{value:!0});Vp.defaultLexerErrorProvider=void 0;Vp.defaultLexerErrorProvider={buildUnableToPopLexerModeMessage:function(t){return"Unable to pop Lexer Mode after encountering Token ->".concat(t.image,"<- The Mode Stack is empty")},buildUnexpectedCharactersMessage:function(t,e,r,n,i){return"unexpected character: ->".concat(t.charAt(e),"<- at offset: ").concat(e,",")+" skipped ".concat(r," characters.")}}});var al=h(Ro=>{"use strict";var pn=Ro&&Ro.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(Ro,"__esModule",{value:!0});Ro.Lexer=Ro.LexerDefinitionErrorType=void 0;var To=uR(),vR=pn(Dp()),Yp=pn(ln()),xie=pn(ze()),Lie=pn(zp()),Mie=pn(xp()),uL=pn(nr()),_R=pn(ir()),$ie=pn(dn()),Fie=pn(qa()),cL=pn(Ia()),lL=pn(tl()),jie=pn(go()),dL=pn(po()),TR=iu(),Uie=Ma(),Gie=yR(),Hie=Fp(),Wie;(function(t){t[t.MISSING_PATTERN=0]="MISSING_PATTERN",t[t.INVALID_PATTERN=1]="INVALID_PATTERN",t[t.EOI_ANCHOR_FOUND=2]="EOI_ANCHOR_FOUND",t[t.UNSUPPORTED_FLAGS_FOUND=3]="UNSUPPORTED_FLAGS_FOUND",t[t.DUPLICATE_PATTERNS_FOUND=4]="DUPLICATE_PATTERNS_FOUND",t[t.INVALID_GROUP_TYPE_FOUND=5]="INVALID_GROUP_TYPE_FOUND",t[t.PUSH_MODE_DOES_NOT_EXIST=6]="PUSH_MODE_DOES_NOT_EXIST",t[t.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE=7]="MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE",t[t.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY=8]="MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY",t[t.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST=9]="MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST",t[t.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED=10]="LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED",t[t.SOI_ANCHOR_FOUND=11]="SOI_ANCHOR_FOUND",t[t.EMPTY_MATCH_PATTERN=12]="EMPTY_MATCH_PATTERN",t[t.NO_LINE_BREAKS_FLAGS=13]="NO_LINE_BREAKS_FLAGS",t[t.UNREACHABLE_PATTERN=14]="UNREACHABLE_PATTERN",t[t.IDENTIFY_TERMINATOR=15]="IDENTIFY_TERMINATOR",t[t.CUSTOM_LINE_BREAK=16]="CUSTOM_LINE_BREAK",t[t.MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE=17]="MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE"})(Wie=Ro.LexerDefinitionErrorType||(Ro.LexerDefinitionErrorType={}));var ul={deferDefinitionErrorsHandling:!1,positionTracking:"full",lineTerminatorsPattern:/\n|\r\n?/g,lineTerminatorCharacters:[`
`,"\r"],ensureOptimizations:!1,safeMode:!1,errorMessageProvider:Gie.defaultLexerErrorProvider,traceInitPerf:!1,skipValidations:!1,recoveryEnabled:!0};Object.freeze(ul);var Kie=function(){function t(e,r){r===void 0&&(r=ul);var n=this;if(this.lexerDefinition=e,this.lexerDefinitionErrors=[],this.lexerDefinitionWarning=[],this.patternIdxToConfig={},this.charCodeToPatternIdxToConfig={},this.modes=[],this.emptyGroups={},this.trackStartLines=!0,this.trackEndLines=!0,this.hasCustom=!1,this.canModeBeOptimized={},this.TRACE_INIT=function(o,a){if(n.traceInitPerf===!0){n.traceInitIndent++;var s=new Array(n.traceInitIndent+1).join("	");n.traceInitIndent<n.traceInitMaxIdent&&console.log("".concat(s,"--> <").concat(o,">"));var u=(0,TR.timer)(a),d=u.time,p=u.value,m=d>10?console.warn:console.log;return n.traceInitIndent<n.traceInitMaxIdent&&m("".concat(s,"<-- <").concat(o,"> time: ").concat(d,"ms")),n.traceInitIndent--,p}else return a()},typeof r=="boolean")throw Error(`The second argument to the Lexer constructor is now an ILexerConfig Object.
a boolean 2nd argument is no longer supported`);this.config=(0,lL.default)({},ul,r);var i=this.config.traceInitPerf;i===!0?(this.traceInitMaxIdent=1/0,this.traceInitPerf=!0):typeof i=="number"&&(this.traceInitMaxIdent=i,this.traceInitPerf=!0),this.traceInitIndent=-1,this.TRACE_INIT("Lexer Constructor",function(){var o,a=!0;n.TRACE_INIT("Lexer Config handling",function(){if(n.config.lineTerminatorsPattern===ul.lineTerminatorsPattern)n.config.lineTerminatorsPattern=To.LineTerminatorOptimizedTester;else if(n.config.lineTerminatorCharacters===ul.lineTerminatorCharacters)throw Error(`Error: Missing <lineTerminatorCharacters> property on the Lexer config.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#MISSING_LINE_TERM_CHARS`);if(r.safeMode&&r.ensureOptimizations)throw Error('"safeMode" and "ensureOptimizations" flags are mutually exclusive.');n.trackStartLines=/full|onlyStart/i.test(n.config.positionTracking),n.trackEndLines=/full/i.test(n.config.positionTracking),(0,xie.default)(e)?o={modes:{defaultMode:(0,dL.default)(e)},defaultMode:To.DEFAULT_MODE}:(a=!1,o=(0,dL.default)(e))}),n.config.skipValidations===!1&&(n.TRACE_INIT("performRuntimeChecks",function(){n.lexerDefinitionErrors=n.lexerDefinitionErrors.concat((0,To.performRuntimeChecks)(o,n.trackStartLines,n.config.lineTerminatorCharacters))}),n.TRACE_INIT("performWarningRuntimeChecks",function(){n.lexerDefinitionWarning=n.lexerDefinitionWarning.concat((0,To.performWarningRuntimeChecks)(o,n.trackStartLines,n.config.lineTerminatorCharacters))})),o.modes=o.modes?o.modes:{},(0,_R.default)(o.modes,function(p,m){o.modes[m]=(0,Mie.default)(p,function(v){return(0,Fie.default)(v)})});var s=(0,$ie.default)(o.modes);if((0,_R.default)(o.modes,function(p,m){n.TRACE_INIT("Mode: <".concat(m,"> processing"),function(){if(n.modes.push(m),n.config.skipValidations===!1&&n.TRACE_INIT("validatePatterns",function(){n.lexerDefinitionErrors=n.lexerDefinitionErrors.concat((0,To.validatePatterns)(p,s))}),(0,Yp.default)(n.lexerDefinitionErrors)){(0,Uie.augmentTokenTypes)(p);var v;n.TRACE_INIT("analyzeTokenTypes",function(){v=(0,To.analyzeTokenTypes)(p,{lineTerminatorCharacters:n.config.lineTerminatorCharacters,positionTracking:r.positionTracking,ensureOptimizations:r.ensureOptimizations,safeMode:r.safeMode,tracer:n.TRACE_INIT})}),n.patternIdxToConfig[m]=v.patternIdxToConfig,n.charCodeToPatternIdxToConfig[m]=v.charCodeToPatternIdxToConfig,n.emptyGroups=(0,lL.default)({},n.emptyGroups,v.emptyGroups),n.hasCustom=v.hasCustom||n.hasCustom,n.canModeBeOptimized[m]=v.canBeOptimized}})}),n.defaultMode=o.defaultMode,!(0,Yp.default)(n.lexerDefinitionErrors)&&!n.config.deferDefinitionErrorsHandling){var u=(0,uL.default)(n.lexerDefinitionErrors,function(p){return p.message}),d=u.join(`-----------------------
`);throw new Error(`Errors detected in definition of Lexer:
`+d)}(0,_R.default)(n.lexerDefinitionWarning,function(p){(0,TR.PRINT_WARNING)(p.message)}),n.TRACE_INIT("Choosing sub-methods implementations",function(){if(To.SUPPORT_STICKY?(n.chopInput=cL.default,n.match=n.matchWithTest):(n.updateLastIndex=vR.default,n.match=n.matchWithExec),a&&(n.handleModes=vR.default),n.trackStartLines===!1&&(n.computeNewColumn=cL.default),n.trackEndLines===!1&&(n.updateTokenEndLineColumnLocation=vR.default),/full/i.test(n.config.positionTracking))n.createTokenInstance=n.createFullToken;else if(/onlyStart/i.test(n.config.positionTracking))n.createTokenInstance=n.createStartOnlyToken;else if(/onlyOffset/i.test(n.config.positionTracking))n.createTokenInstance=n.createOffsetOnlyToken;else throw Error('Invalid <positionTracking> config option: "'.concat(n.config.positionTracking,'"'));n.hasCustom?(n.addToken=n.addTokenUsingPush,n.handlePayload=n.handlePayloadWithCustom):(n.addToken=n.addTokenUsingMemberAccess,n.handlePayload=n.handlePayloadNoCustom)}),n.TRACE_INIT("Failed Optimization Warnings",function(){var p=(0,jie.default)(n.canModeBeOptimized,function(m,v,P){return v===!1&&m.push(P),m},[]);if(r.ensureOptimizations&&!(0,Yp.default)(p))throw Error("Lexer Modes: < ".concat(p.join(", "),` > cannot be optimized.
`)+`	 Disable the "ensureOptimizations" lexer config flag to silently ignore this and run the lexer in an un-optimized mode.
	 Or inspect the console log for details on how to resolve these issues.`)}),n.TRACE_INIT("clearRegExpParserCache",function(){(0,Hie.clearRegExpParserCache)()}),n.TRACE_INIT("toFastProperties",function(){(0,TR.toFastProperties)(n)})})}return t.prototype.tokenize=function(e,r){if(r===void 0&&(r=this.defaultMode),!(0,Yp.default)(this.lexerDefinitionErrors)){var n=(0,uL.default)(this.lexerDefinitionErrors,function(o){return o.message}),i=n.join(`-----------------------
`);throw new Error(`Unable to Tokenize because Errors detected in definition of Lexer:
`+i)}return this.tokenizeInternal(e,r)},t.prototype.tokenizeInternal=function(e,r){var n=this,i,o,a,s,u,d,p,m,v,P,_,N,I,O,E,S,L=e,U=L.length,V=0,te=0,we=this.hasCustom?0:Math.floor(e.length/10),Z=new Array(we),G=[],j=this.trackStartLines?1:void 0,Y=this.trackStartLines?1:void 0,J=(0,To.cloneEmptyGroups)(this.emptyGroups),Ce=this.trackStartLines,_e=this.config.lineTerminatorsPattern,me=0,Je=[],Ve=[],Se=[],st=[];Object.freeze(st);var ur;function Tr(){return Je}function di(_t){var br=(0,To.charCodeToOptimizedIndex)(_t),lr=Ve[br];return lr===void 0?st:lr}var Ln=function(_t){if(Se.length===1&&_t.tokenType.PUSH_MODE===void 0){var br=n.config.errorMessageProvider.buildUnableToPopLexerModeMessage(_t);G.push({offset:_t.startOffset,line:_t.startLine,column:_t.startColumn,length:_t.image.length,message:br})}else{Se.pop();var lr=(0,Lie.default)(Se);Je=n.patternIdxToConfig[lr],Ve=n.charCodeToPatternIdxToConfig[lr],me=Je.length;var Or=n.canModeBeOptimized[lr]&&n.config.safeMode===!1;Ve&&Or?ur=di:ur=Tr}};function Mn(_t){Se.push(_t),Ve=this.charCodeToPatternIdxToConfig[_t],Je=this.patternIdxToConfig[_t],me=Je.length,me=Je.length;var br=this.canModeBeOptimized[_t]&&this.config.safeMode===!1;Ve&&br?ur=di:ur=Tr}Mn.call(this,r);for(var Kt,fi=this.config.recoveryEnabled;V<U;){d=null;var pi=L.charCodeAt(V),hi=ur(pi),Bi=hi.length;for(i=0;i<Bi;i++){Kt=hi[i];var Qe=Kt.pattern;p=null;var wt=Kt.short;if(wt!==!1?pi===wt&&(d=Qe):Kt.isCustom===!0?(S=Qe.exec(L,V,Z,J),S!==null?(d=S[0],S.payload!==void 0&&(p=S.payload)):d=null):(this.updateLastIndex(Qe,V),d=this.match(Qe,e,V)),d!==null){if(u=Kt.longerAlt,u!==void 0){var zi=u.length;for(a=0;a<zi;a++){var Wr=Je[u[a]],Kr=Wr.pattern;if(m=null,Wr.isCustom===!0?(S=Kr.exec(L,V,Z,J),S!==null?(s=S[0],S.payload!==void 0&&(m=S.payload)):s=null):(this.updateLastIndex(Kr,V),s=this.match(Kr,e,V)),s&&s.length>d.length){d=s,p=m,Kt=Wr;break}}}break}}if(d!==null){if(v=d.length,P=Kt.group,P!==void 0&&(_=Kt.tokenTypeIdx,N=this.createTokenInstance(d,V,_,Kt.tokenType,j,Y,v),this.handlePayload(N,p),P===!1?te=this.addToken(Z,te,N):J[P].push(N)),e=this.chopInput(e,v),V=V+v,Y=this.computeNewColumn(Y,v),Ce===!0&&Kt.canLineTerminator===!0){var Br=0,on=void 0,Rr=void 0;_e.lastIndex=0;do on=_e.test(d),on===!0&&(Rr=_e.lastIndex-1,Br++);while(on===!0);Br!==0&&(j=j+Br,Y=v-Rr,this.updateTokenEndLineColumnLocation(N,P,Rr,Br,j,Y,v))}this.handleModes(Kt,Ln,Mn,N)}else{for(var Dt=V,zr=j,mi=Y,cr=fi===!1;cr===!1&&V<U;)for(e=this.chopInput(e,1),V++,o=0;o<me;o++){var Ot=Je[o],Qe=Ot.pattern,wt=Ot.short;if(wt!==!1?L.charCodeAt(V)===wt&&(cr=!0):Ot.isCustom===!0?cr=Qe.exec(L,V,Z,J)!==null:(this.updateLastIndex(Qe,V),cr=Qe.exec(e)!==null),cr===!0)break}if(I=V-Dt,E=this.config.errorMessageProvider.buildUnexpectedCharactersMessage(L,Dt,I,zr,mi),G.push({offset:Dt,line:zr,column:mi,length:I,message:E}),fi===!1)break}}return this.hasCustom||(Z.length=te),{tokens:Z,groups:J,errors:G}},t.prototype.handleModes=function(e,r,n,i){if(e.pop===!0){var o=e.push;r(i),o!==void 0&&n.call(this,o)}else e.push!==void 0&&n.call(this,e.push)},t.prototype.chopInput=function(e,r){return e.substring(r)},t.prototype.updateLastIndex=function(e,r){e.lastIndex=r},t.prototype.updateTokenEndLineColumnLocation=function(e,r,n,i,o,a,s){var u,d;r!==void 0&&(u=n===s-1,d=u?-1:0,i===1&&u===!0||(e.endLine=o+d,e.endColumn=a-1+-d))},t.prototype.computeNewColumn=function(e,r){return e+r},t.prototype.createOffsetOnlyToken=function(e,r,n,i){return{image:e,startOffset:r,tokenTypeIdx:n,tokenType:i}},t.prototype.createStartOnlyToken=function(e,r,n,i,o,a){return{image:e,startOffset:r,startLine:o,startColumn:a,tokenTypeIdx:n,tokenType:i}},t.prototype.createFullToken=function(e,r,n,i,o,a,s){return{image:e,startOffset:r,endOffset:r+s-1,startLine:o,endLine:o,startColumn:a,endColumn:a+s-1,tokenTypeIdx:n,tokenType:i}},t.prototype.addTokenUsingPush=function(e,r,n){return e.push(n),r},t.prototype.addTokenUsingMemberAccess=function(e,r,n){return e[r]=n,r++,r},t.prototype.handlePayloadNoCustom=function(e,r){},t.prototype.handlePayloadWithCustom=function(e,r){r!==null&&(e.payload=r)},t.prototype.matchWithTest=function(e,r,n){var i=e.test(r);return i===!0?r.substring(n,e.lastIndex):null},t.prototype.matchWithExec=function(e,r){var n=e.exec(r);return n!==null?n[0]:null},t.SKIPPED="This marks a skipped Token pattern, this means each token identified by it willbe consumed and then thrown into oblivion, this can be used to for example to completely ignore whitespace.",t.NA=/NOT_APPLICABLE/,t}();Ro.Lexer=Kie});var $a=h(Qt=>{"use strict";var RR=Qt&&Qt.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(Qt,"__esModule",{value:!0});Qt.tokenMatcher=Qt.createTokenInstance=Qt.EOF=Qt.createToken=Qt.hasTokenLabel=Qt.tokenName=Qt.tokenLabel=void 0;var Bie=RR(Zc()),bo=RR(fn()),zie=RR(qa()),Vie=al(),bR=Ma();function Yie(t){return TL(t)?t.LABEL:t.name}Qt.tokenLabel=Yie;function Xie(t){return t.name}Qt.tokenName=Xie;function TL(t){return(0,Bie.default)(t.LABEL)&&t.LABEL!==""}Qt.hasTokenLabel=TL;var Jie="parent",fL="categories",pL="label",hL="group",mL="push_mode",gL="pop_mode",yL="longer_alt",vL="line_breaks",_L="start_chars_hint";function RL(t){return Qie(t)}Qt.createToken=RL;function Qie(t){var e=t.pattern,r={};if(r.name=t.name,(0,zie.default)(e)||(r.PATTERN=e),(0,bo.default)(t,Jie))throw`The parent property is no longer supported.
See: https://github.com/chevrotain/chevrotain/issues/564#issuecomment-349062346 for details.`;return(0,bo.default)(t,fL)&&(r.CATEGORIES=t[fL]),(0,bR.augmentTokenTypes)([r]),(0,bo.default)(t,pL)&&(r.LABEL=t[pL]),(0,bo.default)(t,hL)&&(r.GROUP=t[hL]),(0,bo.default)(t,gL)&&(r.POP_MODE=t[gL]),(0,bo.default)(t,mL)&&(r.PUSH_MODE=t[mL]),(0,bo.default)(t,yL)&&(r.LONGER_ALT=t[yL]),(0,bo.default)(t,vL)&&(r.LINE_BREAKS=t[vL]),(0,bo.default)(t,_L)&&(r.START_CHARS_HINT=t[_L]),r}Qt.EOF=RL({name:"EOF",pattern:Vie.Lexer.NA});(0,bR.augmentTokenTypes)([Qt.EOF]);function Zie(t,e,r,n,i,o,a,s){return{image:e,startOffset:r,endOffset:n,startLine:i,endLine:o,startColumn:a,endColumn:s,tokenTypeIdx:t.tokenTypeIdx,tokenType:t}}Qt.createTokenInstance=Zie;function eoe(t,e){return(0,bR.tokenStructuredMatcher)(t,e)}Qt.tokenMatcher=eoe});var pu=h(ti=>{"use strict";var PR=ti&&ti.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(ti,"__esModule",{value:!0});ti.defaultGrammarValidatorErrorProvider=ti.defaultGrammarResolverErrorProvider=ti.defaultParserErrorProvider=void 0;var fu=$a(),AR=PR(uu()),Zo=PR(nr()),toe=PR(go()),CR=Nt(),bL=Nt();ti.defaultParserErrorProvider={buildMismatchTokenMessage:function(t){var e=t.expected,r=t.actual,n=t.previous,i=t.ruleName,o=(0,fu.hasTokenLabel)(e),a=o?"--> ".concat((0,fu.tokenLabel)(e)," <--"):"token of type --> ".concat(e.name," <--"),s="Expecting ".concat(a," but found --> '").concat(r.image,"' <--");return s},buildNotAllInputParsedMessage:function(t){var e=t.firstRedundant,r=t.ruleName;return"Redundant input, expecting EOF but found: "+e.image},buildNoViableAltMessage:function(t){var e=t.expectedPathsPerAlt,r=t.actual,n=t.previous,i=t.customUserDescription,o=t.ruleName,a="Expecting: ",s=(0,AR.default)(r).image,u=`
but found: '`+s+"'";if(i)return a+i+u;var d=(0,toe.default)(e,function(P,_){return P.concat(_)},[]),p=(0,Zo.default)(d,function(P){return"[".concat((0,Zo.default)(P,function(_){return(0,fu.tokenLabel)(_)}).join(", "),"]")}),m=(0,Zo.default)(p,function(P,_){return"  ".concat(_+1,". ").concat(P)}),v=`one of these possible Token sequences:
`.concat(m.join(`
`));return a+v+u},buildEarlyExitMessage:function(t){var e=t.expectedIterationPaths,r=t.actual,n=t.customUserDescription,i=t.ruleName,o="Expecting: ",a=(0,AR.default)(r).image,s=`
but found: '`+a+"'";if(n)return o+n+s;var u=(0,Zo.default)(e,function(p){return"[".concat((0,Zo.default)(p,function(m){return(0,fu.tokenLabel)(m)}).join(","),"]")}),d=`expecting at least one iteration which starts with one of these possible Token sequences::
  `+"<".concat(u.join(" ,"),">");return o+d+s}};Object.freeze(ti.defaultParserErrorProvider);ti.defaultGrammarResolverErrorProvider={buildRuleNotFoundError:function(t,e){var r="Invalid grammar, reference to a rule which is not defined: ->"+e.nonTerminalName+`<-
inside top level rule: ->`+t.name+"<-";return r}};ti.defaultGrammarValidatorErrorProvider={buildDuplicateFoundError:function(t,e){function r(p){return p instanceof CR.Terminal?p.terminalType.name:p instanceof CR.NonTerminal?p.nonTerminalName:""}var n=t.name,i=(0,AR.default)(e),o=i.idx,a=(0,bL.getProductionDslName)(i),s=r(i),u=o>0,d="->".concat(a).concat(u?o:"","<- ").concat(s?"with argument: ->".concat(s,"<-"):"",`
                  appears more than once (`).concat(e.length," times) in the top level rule: ->").concat(n,`<-.                  
                  For further details see: https://chevrotain.io/docs/FAQ.html#NUMERICAL_SUFFIXES 
                  `);return d=d.replace(/[ \t]+/g," "),d=d.replace(/\s\s+/g,`
`),d},buildNamespaceConflictError:function(t){var e=`Namespace conflict found in grammar.
`+"The grammar has both a Terminal(Token) and a Non-Terminal(Rule) named: <".concat(t.name,`>.
`)+`To resolve this make sure each Terminal and Non-Terminal names are unique
This is easy to accomplish by using the convention that Terminal names start with an uppercase letter
and Non-Terminal names start with a lower case letter.`;return e},buildAlternationPrefixAmbiguityError:function(t){var e=(0,Zo.default)(t.prefixPath,function(i){return(0,fu.tokenLabel)(i)}).join(", "),r=t.alternation.idx===0?"":t.alternation.idx,n="Ambiguous alternatives: <".concat(t.ambiguityIndices.join(" ,"),`> due to common lookahead prefix
`)+"in <OR".concat(r,"> inside <").concat(t.topLevelRule.name,`> Rule,
`)+"<".concat(e,`> may appears as a prefix path in all these alternatives.
`)+`See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#COMMON_PREFIX
For Further details.`;return n},buildAlternationAmbiguityError:function(t){var e=(0,Zo.default)(t.prefixPath,function(i){return(0,fu.tokenLabel)(i)}).join(", "),r=t.alternation.idx===0?"":t.alternation.idx,n="Ambiguous Alternatives Detected: <".concat(t.ambiguityIndices.join(" ,"),"> in <OR").concat(r,">")+" inside <".concat(t.topLevelRule.name,`> Rule,
`)+"<".concat(e,`> may appears as a prefix path in all these alternatives.
`);return n=n+`See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#AMBIGUOUS_ALTERNATIVES
For Further details.`,n},buildEmptyRepetitionError:function(t){var e=(0,bL.getProductionDslName)(t.repetition);t.repetition.idx!==0&&(e+=t.repetition.idx);var r="The repetition <".concat(e,"> within Rule <").concat(t.topLevelRule.name,`> can never consume any tokens.
`)+"This could lead to an infinite loop.";return r},buildTokenNameError:function(t){return"deprecated"},buildEmptyAlternationError:function(t){var e="Ambiguous empty alternative: <".concat(t.emptyChoiceIdx+1,">")+" in <OR".concat(t.alternation.idx,"> inside <").concat(t.topLevelRule.name,`> Rule.
`)+"Only the last alternative may be an empty alternative.";return e},buildTooManyAlternativesError:function(t){var e=`An Alternation cannot have more than 256 alternatives:
`+"<OR".concat(t.alternation.idx,"> inside <").concat(t.topLevelRule.name,`> Rule.
 has `).concat(t.alternation.definition.length+1," alternatives.");return e},buildLeftRecursionError:function(t){var e=t.topLevelRule.name,r=(0,Zo.default)(t.leftRecursionPath,function(o){return o.name}),n="".concat(e," --> ").concat(r.concat([e]).join(" --> ")),i=`Left Recursion found in grammar.
`+"rule: <".concat(e,`> can be invoked from itself (directly or indirectly)
`)+`without consuming any Tokens. The grammar path that causes this is: 
 `.concat(n,`
`)+` To fix this refactor your grammar to remove the left recursion.
see: https://en.wikipedia.org/wiki/LL_parser#Left_factoring.`;return i},buildInvalidRuleNameError:function(t){return"deprecated"},buildDuplicateRuleNameError:function(t){var e;t.topLevelRule instanceof CR.Rule?e=t.topLevelRule.name:e=t.topLevelRule;var r="Duplicate definition, rule: ->".concat(e,"<- is already defined in the grammar: ->").concat(t.grammarName,"<-");return r}}});var PL=h(qi=>{"use strict";var roe=qi&&qi.__extends||function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(n[o]=i[o])},t(e,r)};return function(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");t(e,r);function n(){this.constructor=e}e.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}(),CL=qi&&qi.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(qi,"__esModule",{value:!0});qi.GastRefResolverVisitor=qi.resolveGrammar=void 0;var noe=rn(),ioe=CL(ir()),ooe=CL(Si()),aoe=Nt();function soe(t,e){var r=new AL(t,e);return r.resolveRefs(),r.errors}qi.resolveGrammar=soe;var AL=function(t){roe(e,t);function e(r,n){var i=t.call(this)||this;return i.nameToTopRule=r,i.errMsgProvider=n,i.errors=[],i}return e.prototype.resolveRefs=function(){var r=this;(0,ioe.default)((0,ooe.default)(this.nameToTopRule),function(n){r.currTopLevel=n,n.accept(r)})},e.prototype.visitNonTerminal=function(r){var n=this.nameToTopRule[r.nonTerminalName];if(n)r.referencedRule=n;else{var i=this.errMsgProvider.buildRuleNotFoundError(this.currTopLevel,r);this.errors.push({message:i,type:noe.ParserDefinitionErrorType.UNRESOLVED_SUBRULE_REF,ruleName:this.currTopLevel.name,unresolvedRefName:r.nonTerminalName})}},e}(aoe.GAstVisitor);qi.GastRefResolverVisitor=AL});var EL=h((Ybe,SL)=>{function uoe(t,e,r,n){for(var i=-1,o=t==null?0:t.length;++i<o;){var a=t[i];e(n,a,r(a),t)}return n}SL.exports=uoe});var NL=h((Xbe,kL)=>{var coe=Jo();function loe(t,e,r,n){return coe(t,function(i,o,a){e(n,i,r(i),a)}),n}kL.exports=loe});var DL=h((Jbe,wL)=>{var doe=EL(),foe=NL(),poe=wn(),hoe=ze();function moe(t,e){return function(r,n){var i=hoe(r)?doe:foe,o=e?e():{};return i(r,t,poe(n,2),o)}}wL.exports=moe});var SR=h((Qbe,OL)=>{var goe=gp(),yoe=DL(),voe=Object.prototype,_oe=voe.hasOwnProperty,Toe=yoe(function(t,e,r){_oe.call(t,r)?t[r].push(e):goe(t,r,[e])});OL.exports=Toe});var Xp=h((Zbe,IL)=>{var Roe=wp(),boe=nr();function Coe(t,e){return Roe(boe(t,e),1)}IL.exports=Coe});var Jp=h((eCe,qL)=>{var Aoe=Tp(),Poe=ou();function Soe(t,e,r){var n=t==null?0:t.length;return n?(e=r||e===void 0?1:Poe(e),e=n-e,Aoe(t,0,e<0?0:e)):[]}qL.exports=Soe});var ll=h(vt=>{"use strict";var ja=vt&&vt.__extends||function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(n[o]=i[o])},t(e,r)};return function(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");t(e,r);function n(){this.constructor=e}e.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}(),Ua=vt&&vt.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(vt,"__esModule",{value:!0});vt.nextPossibleTokensAfter=vt.possiblePathsFrom=vt.NextTerminalAfterAtLeastOneSepWalker=vt.NextTerminalAfterAtLeastOneWalker=vt.NextTerminalAfterManySepWalker=vt.NextTerminalAfterManyWalker=vt.AbstractNextTerminalAfterProductionWalker=vt.NextAfterTokenWalker=vt.AbstractNextPossibleTokensWalker=void 0;var LL=Np(),Zp=Ua(uu()),Qp=Ua(ln()),xL=Ua(Jp()),Fr=Ua(Rp()),Eoe=Ua(zp()),koe=Ua(ir()),Fa=Ua(po()),Noe=tR(),Ne=Nt(),ML=function(t){ja(e,t);function e(r,n){var i=t.call(this)||this;return i.topProd=r,i.path=n,i.possibleTokTypes=[],i.nextProductionName="",i.nextProductionOccurrence=0,i.found=!1,i.isAtEndOfPath=!1,i}return e.prototype.startWalking=function(){if(this.found=!1,this.path.ruleStack[0]!==this.topProd.name)throw Error("The path does not start with the walker's top Rule!");return this.ruleStack=(0,Fa.default)(this.path.ruleStack).reverse(),this.occurrenceStack=(0,Fa.default)(this.path.occurrenceStack).reverse(),this.ruleStack.pop(),this.occurrenceStack.pop(),this.updateExpectedNext(),this.walk(this.topProd),this.possibleTokTypes},e.prototype.walk=function(r,n){n===void 0&&(n=[]),this.found||t.prototype.walk.call(this,r,n)},e.prototype.walkProdRef=function(r,n,i){if(r.referencedRule.name===this.nextProductionName&&r.idx===this.nextProductionOccurrence){var o=n.concat(i);this.updateExpectedNext(),this.walk(r.referencedRule,o)}},e.prototype.updateExpectedNext=function(){(0,Qp.default)(this.ruleStack)?(this.nextProductionName="",this.nextProductionOccurrence=0,this.isAtEndOfPath=!0):(this.nextProductionName=this.ruleStack.pop(),this.nextProductionOccurrence=this.occurrenceStack.pop())},e}(LL.RestWalker);vt.AbstractNextPossibleTokensWalker=ML;var woe=function(t){ja(e,t);function e(r,n){var i=t.call(this,r,n)||this;return i.path=n,i.nextTerminalName="",i.nextTerminalOccurrence=0,i.nextTerminalName=i.path.lastTok.name,i.nextTerminalOccurrence=i.path.lastTokOccurrence,i}return e.prototype.walkTerminal=function(r,n,i){if(this.isAtEndOfPath&&r.terminalType.name===this.nextTerminalName&&r.idx===this.nextTerminalOccurrence&&!this.found){var o=n.concat(i),a=new Ne.Alternative({definition:o});this.possibleTokTypes=(0,Noe.first)(a),this.found=!0}},e}(ML);vt.NextAfterTokenWalker=woe;var cl=function(t){ja(e,t);function e(r,n){var i=t.call(this)||this;return i.topRule=r,i.occurrence=n,i.result={token:void 0,occurrence:void 0,isEndOfRule:void 0},i}return e.prototype.startWalking=function(){return this.walk(this.topRule),this.result},e}(LL.RestWalker);vt.AbstractNextTerminalAfterProductionWalker=cl;var Doe=function(t){ja(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e.prototype.walkMany=function(r,n,i){if(r.idx===this.occurrence){var o=(0,Zp.default)(n.concat(i));this.result.isEndOfRule=o===void 0,o instanceof Ne.Terminal&&(this.result.token=o.terminalType,this.result.occurrence=o.idx)}else t.prototype.walkMany.call(this,r,n,i)},e}(cl);vt.NextTerminalAfterManyWalker=Doe;var Ooe=function(t){ja(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e.prototype.walkManySep=function(r,n,i){if(r.idx===this.occurrence){var o=(0,Zp.default)(n.concat(i));this.result.isEndOfRule=o===void 0,o instanceof Ne.Terminal&&(this.result.token=o.terminalType,this.result.occurrence=o.idx)}else t.prototype.walkManySep.call(this,r,n,i)},e}(cl);vt.NextTerminalAfterManySepWalker=Ooe;var Ioe=function(t){ja(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e.prototype.walkAtLeastOne=function(r,n,i){if(r.idx===this.occurrence){var o=(0,Zp.default)(n.concat(i));this.result.isEndOfRule=o===void 0,o instanceof Ne.Terminal&&(this.result.token=o.terminalType,this.result.occurrence=o.idx)}else t.prototype.walkAtLeastOne.call(this,r,n,i)},e}(cl);vt.NextTerminalAfterAtLeastOneWalker=Ioe;var qoe=function(t){ja(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e.prototype.walkAtLeastOneSep=function(r,n,i){if(r.idx===this.occurrence){var o=(0,Zp.default)(n.concat(i));this.result.isEndOfRule=o===void 0,o instanceof Ne.Terminal&&(this.result.token=o.terminalType,this.result.occurrence=o.idx)}else t.prototype.walkAtLeastOneSep.call(this,r,n,i)},e}(cl);vt.NextTerminalAfterAtLeastOneSepWalker=qoe;function $L(t,e,r){r===void 0&&(r=[]),r=(0,Fa.default)(r);var n=[],i=0;function o(d){return d.concat((0,Fr.default)(t,i+1))}function a(d){var p=$L(o(d),e,r);return n.concat(p)}for(;r.length<e&&i<t.length;){var s=t[i];if(s instanceof Ne.Alternative)return a(s.definition);if(s instanceof Ne.NonTerminal)return a(s.definition);if(s instanceof Ne.Option)n=a(s.definition);else if(s instanceof Ne.RepetitionMandatory){var u=s.definition.concat([new Ne.Repetition({definition:s.definition})]);return a(u)}else if(s instanceof Ne.RepetitionMandatoryWithSeparator){var u=[new Ne.Alternative({definition:s.definition}),new Ne.Repetition({definition:[new Ne.Terminal({terminalType:s.separator})].concat(s.definition)})];return a(u)}else if(s instanceof Ne.RepetitionWithSeparator){var u=s.definition.concat([new Ne.Repetition({definition:[new Ne.Terminal({terminalType:s.separator})].concat(s.definition)})]);n=a(u)}else if(s instanceof Ne.Repetition){var u=s.definition.concat([new Ne.Repetition({definition:s.definition})]);n=a(u)}else{if(s instanceof Ne.Alternation)return(0,koe.default)(s.definition,function(d){(0,Qp.default)(d.definition)===!1&&(n=a(d.definition))}),n;if(s instanceof Ne.Terminal)r.push(s.terminalType);else throw Error("non exhaustive match")}i++}return n.push({partialPath:r,suffixDef:(0,Fr.default)(t,i)}),n}vt.possiblePathsFrom=$L;function xoe(t,e,r,n){var i="EXIT_NONE_TERMINAL",o=[i],a="EXIT_ALTERNATIVE",s=!1,u=e.length,d=u-n-1,p=[],m=[];for(m.push({idx:-1,def:t,ruleStack:[],occurrenceStack:[]});!(0,Qp.default)(m);){var v=m.pop();if(v===a){s&&(0,Eoe.default)(m).idx<=d&&m.pop();continue}var P=v.def,_=v.idx,N=v.ruleStack,I=v.occurrenceStack;if(!(0,Qp.default)(P)){var O=P[0];if(O===i){var E={idx:_,def:(0,Fr.default)(P),ruleStack:(0,xL.default)(N),occurrenceStack:(0,xL.default)(I)};m.push(E)}else if(O instanceof Ne.Terminal)if(_<u-1){var S=_+1,L=e[S];if(r(L,O.terminalType)){var E={idx:S,def:(0,Fr.default)(P),ruleStack:N,occurrenceStack:I};m.push(E)}}else if(_===u-1)p.push({nextTokenType:O.terminalType,nextTokenOccurrence:O.idx,ruleStack:N,occurrenceStack:I}),s=!0;else throw Error("non exhaustive match");else if(O instanceof Ne.NonTerminal){var U=(0,Fa.default)(N);U.push(O.nonTerminalName);var V=(0,Fa.default)(I);V.push(O.idx);var E={idx:_,def:O.definition.concat(o,(0,Fr.default)(P)),ruleStack:U,occurrenceStack:V};m.push(E)}else if(O instanceof Ne.Option){var te={idx:_,def:(0,Fr.default)(P),ruleStack:N,occurrenceStack:I};m.push(te),m.push(a);var we={idx:_,def:O.definition.concat((0,Fr.default)(P)),ruleStack:N,occurrenceStack:I};m.push(we)}else if(O instanceof Ne.RepetitionMandatory){var Z=new Ne.Repetition({definition:O.definition,idx:O.idx}),G=O.definition.concat([Z],(0,Fr.default)(P)),E={idx:_,def:G,ruleStack:N,occurrenceStack:I};m.push(E)}else if(O instanceof Ne.RepetitionMandatoryWithSeparator){var j=new Ne.Terminal({terminalType:O.separator}),Z=new Ne.Repetition({definition:[j].concat(O.definition),idx:O.idx}),G=O.definition.concat([Z],(0,Fr.default)(P)),E={idx:_,def:G,ruleStack:N,occurrenceStack:I};m.push(E)}else if(O instanceof Ne.RepetitionWithSeparator){var te={idx:_,def:(0,Fr.default)(P),ruleStack:N,occurrenceStack:I};m.push(te),m.push(a);var j=new Ne.Terminal({terminalType:O.separator}),Y=new Ne.Repetition({definition:[j].concat(O.definition),idx:O.idx}),G=O.definition.concat([Y],(0,Fr.default)(P)),we={idx:_,def:G,ruleStack:N,occurrenceStack:I};m.push(we)}else if(O instanceof Ne.Repetition){var te={idx:_,def:(0,Fr.default)(P),ruleStack:N,occurrenceStack:I};m.push(te),m.push(a);var Y=new Ne.Repetition({definition:O.definition,idx:O.idx}),G=O.definition.concat([Y],(0,Fr.default)(P)),we={idx:_,def:G,ruleStack:N,occurrenceStack:I};m.push(we)}else if(O instanceof Ne.Alternation)for(var J=O.definition.length-1;J>=0;J--){var Ce=O.definition[J],_e={idx:_,def:Ce.definition.concat((0,Fr.default)(P)),ruleStack:N,occurrenceStack:I};m.push(_e),m.push(a)}else if(O instanceof Ne.Alternative)m.push({idx:_,def:O.definition.concat((0,Fr.default)(P)),ruleStack:N,occurrenceStack:I});else if(O instanceof Ne.Rule)m.push(Loe(O,_,N,I));else throw Error("non exhaustive match")}}return p}vt.nextPossibleTokensAfter=xoe;function Loe(t,e,r,n){var i=(0,Fa.default)(r);i.push(t.name);var o=(0,Fa.default)(n);return o.push(1),{idx:e,def:t.definition,ruleStack:i,occurrenceStack:o}}});var hu=h(Le=>{"use strict";var GL=Le&&Le.__extends||function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(n[o]=i[o])},t(e,r)};return function(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");t(e,r);function n(){this.constructor=e}e.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}(),Wa=Le&&Le.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(Le,"__esModule",{value:!0});Le.areTokenCategoriesNotUsed=Le.isStrictPrefixOfPath=Le.containsPath=Le.getLookaheadPathsForOptionalProd=Le.getLookaheadPathsForOr=Le.lookAheadSequenceFromAlternatives=Le.buildSingleAlternativeLookaheadFunction=Le.buildAlternativesLookAheadFunc=Le.buildLookaheadFuncForOptionalProd=Le.buildLookaheadFuncForOr=Le.getLookaheadPaths=Le.getProdType=Le.PROD_TYPE=void 0;var kR=Wa(ln()),HL=Wa(ei()),Ha=Wa(nl()),eh=Wa(nr()),Ga=Wa(ir()),FL=Wa(fn()),WL=Wa(go()),jL=ll(),Moe=Np(),th=Ma(),ea=Nt(),$oe=Nt(),jt;(function(t){t[t.OPTION=0]="OPTION",t[t.REPETITION=1]="REPETITION",t[t.REPETITION_MANDATORY=2]="REPETITION_MANDATORY",t[t.REPETITION_MANDATORY_WITH_SEPARATOR=3]="REPETITION_MANDATORY_WITH_SEPARATOR",t[t.REPETITION_WITH_SEPARATOR=4]="REPETITION_WITH_SEPARATOR",t[t.ALTERNATION=5]="ALTERNATION"})(jt=Le.PROD_TYPE||(Le.PROD_TYPE={}));function KL(t){if(t instanceof ea.Option||t==="Option")return jt.OPTION;if(t instanceof ea.Repetition||t==="Repetition")return jt.REPETITION;if(t instanceof ea.RepetitionMandatory||t==="RepetitionMandatory")return jt.REPETITION_MANDATORY;if(t instanceof ea.RepetitionMandatoryWithSeparator||t==="RepetitionMandatoryWithSeparator")return jt.REPETITION_MANDATORY_WITH_SEPARATOR;if(t instanceof ea.RepetitionWithSeparator||t==="RepetitionWithSeparator")return jt.REPETITION_WITH_SEPARATOR;if(t instanceof ea.Alternation||t==="Alternation")return jt.ALTERNATION;throw Error("non exhaustive match")}Le.getProdType=KL;function Foe(t){var e=t.occurrence,r=t.rule,n=t.prodType,i=t.maxLookahead,o=KL(n);return o===jt.ALTERNATION?wR(e,r,i):DR(e,r,o,i)}Le.getLookaheadPaths=Foe;function joe(t,e,r,n,i,o){var a=wR(t,e,r),s=OR(a)?th.tokenStructuredMatcherNoCategories:th.tokenStructuredMatcher;return o(a,n,s,i)}Le.buildLookaheadFuncForOr=joe;function Uoe(t,e,r,n,i,o){var a=DR(t,e,i,r),s=OR(a)?th.tokenStructuredMatcherNoCategories:th.tokenStructuredMatcher;return o(a[0],s,n)}Le.buildLookaheadFuncForOptionalProd=Uoe;function Goe(t,e,r,n){var i=t.length,o=(0,Ha.default)(t,function(u){return(0,Ha.default)(u,function(d){return d.length===1})});if(e)return function(u){for(var d=(0,eh.default)(u,function(S){return S.GATE}),p=0;p<i;p++){var m=t[p],v=m.length,P=d[p];if(!(P!==void 0&&P.call(this)===!1))e:for(var _=0;_<v;_++){for(var N=m[_],I=N.length,O=0;O<I;O++){var E=this.LA(O+1);if(r(E,N[O])===!1)continue e}return p}}};if(o&&!n){var a=(0,eh.default)(t,function(u){return(0,HL.default)(u)}),s=(0,WL.default)(a,function(u,d,p){return(0,Ga.default)(d,function(m){(0,FL.default)(u,m.tokenTypeIdx)||(u[m.tokenTypeIdx]=p),(0,Ga.default)(m.categoryMatches,function(v){(0,FL.default)(u,v)||(u[v]=p)})}),u},{});return function(){var u=this.LA(1);return s[u.tokenTypeIdx]}}else return function(){for(var u=0;u<i;u++){var d=t[u],p=d.length;e:for(var m=0;m<p;m++){for(var v=d[m],P=v.length,_=0;_<P;_++){var N=this.LA(_+1);if(r(N,v[_])===!1)continue e}return u}}}}Le.buildAlternativesLookAheadFunc=Goe;function Hoe(t,e,r){var n=(0,Ha.default)(t,function(d){return d.length===1}),i=t.length;if(n&&!r){var o=(0,HL.default)(t);if(o.length===1&&(0,kR.default)(o[0].categoryMatches)){var a=o[0],s=a.tokenTypeIdx;return function(){return this.LA(1).tokenTypeIdx===s}}else{var u=(0,WL.default)(o,function(d,p,m){return d[p.tokenTypeIdx]=!0,(0,Ga.default)(p.categoryMatches,function(v){d[v]=!0}),d},[]);return function(){var d=this.LA(1);return u[d.tokenTypeIdx]===!0}}}else return function(){e:for(var d=0;d<i;d++){for(var p=t[d],m=p.length,v=0;v<m;v++){var P=this.LA(v+1);if(e(P,p[v])===!1)continue e}return!0}return!1}}Le.buildSingleAlternativeLookaheadFunction=Hoe;var Woe=function(t){GL(e,t);function e(r,n,i){var o=t.call(this)||this;return o.topProd=r,o.targetOccurrence=n,o.targetProdType=i,o}return e.prototype.startWalking=function(){return this.walk(this.topProd),this.restDef},e.prototype.checkIsTarget=function(r,n,i,o){return r.idx===this.targetOccurrence&&this.targetProdType===n?(this.restDef=i.concat(o),!0):!1},e.prototype.walkOption=function(r,n,i){this.checkIsTarget(r,jt.OPTION,n,i)||t.prototype.walkOption.call(this,r,n,i)},e.prototype.walkAtLeastOne=function(r,n,i){this.checkIsTarget(r,jt.REPETITION_MANDATORY,n,i)||t.prototype.walkOption.call(this,r,n,i)},e.prototype.walkAtLeastOneSep=function(r,n,i){this.checkIsTarget(r,jt.REPETITION_MANDATORY_WITH_SEPARATOR,n,i)||t.prototype.walkOption.call(this,r,n,i)},e.prototype.walkMany=function(r,n,i){this.checkIsTarget(r,jt.REPETITION,n,i)||t.prototype.walkOption.call(this,r,n,i)},e.prototype.walkManySep=function(r,n,i){this.checkIsTarget(r,jt.REPETITION_WITH_SEPARATOR,n,i)||t.prototype.walkOption.call(this,r,n,i)},e}(Moe.RestWalker),BL=function(t){GL(e,t);function e(r,n,i){var o=t.call(this)||this;return o.targetOccurrence=r,o.targetProdType=n,o.targetRef=i,o.result=[],o}return e.prototype.checkIsTarget=function(r,n){r.idx===this.targetOccurrence&&this.targetProdType===n&&(this.targetRef===void 0||r===this.targetRef)&&(this.result=r.definition)},e.prototype.visitOption=function(r){this.checkIsTarget(r,jt.OPTION)},e.prototype.visitRepetition=function(r){this.checkIsTarget(r,jt.REPETITION)},e.prototype.visitRepetitionMandatory=function(r){this.checkIsTarget(r,jt.REPETITION_MANDATORY)},e.prototype.visitRepetitionMandatoryWithSeparator=function(r){this.checkIsTarget(r,jt.REPETITION_MANDATORY_WITH_SEPARATOR)},e.prototype.visitRepetitionWithSeparator=function(r){this.checkIsTarget(r,jt.REPETITION_WITH_SEPARATOR)},e.prototype.visitAlternation=function(r){this.checkIsTarget(r,jt.ALTERNATION)},e}($oe.GAstVisitor);function UL(t){for(var e=new Array(t),r=0;r<t;r++)e[r]=[];return e}function ER(t){for(var e=[""],r=0;r<t.length;r++){for(var n=t[r],i=[],o=0;o<e.length;o++){var a=e[o];i.push(a+"_"+n.tokenTypeIdx);for(var s=0;s<n.categoryMatches.length;s++){var u="_"+n.categoryMatches[s];i.push(a+u)}}e=i}return e}function Koe(t,e,r){for(var n=0;n<t.length;n++)if(n!==r)for(var i=t[n],o=0;o<e.length;o++){var a=e[o];if(i[a]===!0)return!1}return!0}function NR(t,e){for(var r=(0,eh.default)(t,function(p){return(0,jL.possiblePathsFrom)([p],1)}),n=UL(r.length),i=(0,eh.default)(r,function(p){var m={};return(0,Ga.default)(p,function(v){var P=ER(v.partialPath);(0,Ga.default)(P,function(_){m[_]=!0})}),m}),o=r,a=1;a<=e;a++){var s=o;o=UL(s.length);for(var u=function(p){for(var m=s[p],v=0;v<m.length;v++){var P=m[v].partialPath,_=m[v].suffixDef,N=ER(P),I=Koe(i,N,p);if(I||(0,kR.default)(_)||P.length===e){var O=n[p];if(zL(O,P)===!1){O.push(P);for(var E=0;E<N.length;E++){var S=N[E];i[p][S]=!0}}}else{var L=(0,jL.possiblePathsFrom)(_,a+1,P);o[p]=o[p].concat(L),(0,Ga.default)(L,function(U){var V=ER(U.partialPath);(0,Ga.default)(V,function(te){i[p][te]=!0})})}}},d=0;d<s.length;d++)u(d)}return n}Le.lookAheadSequenceFromAlternatives=NR;function wR(t,e,r,n){var i=new BL(t,jt.ALTERNATION,n);return e.accept(i),NR(i.result,r)}Le.getLookaheadPathsForOr=wR;function DR(t,e,r,n){var i=new BL(t,r);e.accept(i);var o=i.result,a=new Woe(e,t,r),s=a.startWalking(),u=new ea.Alternative({definition:o}),d=new ea.Alternative({definition:s});return NR([u,d],n)}Le.getLookaheadPathsForOptionalProd=DR;function zL(t,e){e:for(var r=0;r<t.length;r++){var n=t[r];if(n.length===e.length){for(var i=0;i<n.length;i++){var o=e[i],a=n[i],s=o===a||a.categoryMatchesMap[o.tokenTypeIdx]!==void 0;if(s===!1)continue e}return!0}}return!1}Le.containsPath=zL;function Boe(t,e){return t.length<e.length&&(0,Ha.default)(t,function(r,n){var i=e[n];return r===i||i.categoryMatchesMap[r.tokenTypeIdx]})}Le.isStrictPrefixOfPath=Boe;function OR(t){return(0,Ha.default)(t,function(e){return(0,Ha.default)(e,function(r){return(0,Ha.default)(r,function(n){return(0,kR.default)(n.categoryMatches)})})})}Le.areTokenCategoriesNotUsed=OR});var pl=h(Ie=>{"use strict";var qR=Ie&&Ie.__extends||function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(n[o]=i[o])},t(e,r)};return function(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");t(e,r);function n(){this.constructor=e}e.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}(),IR=Ie&&Ie.__assign||function(){return IR=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++){e=arguments[r];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},IR.apply(this,arguments)},or=Ie&&Ie.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(Ie,"__esModule",{value:!0});Ie.checkPrefixAlternativesAmbiguities=Ie.validateSomeNonEmptyLookaheadPath=Ie.validateTooManyAlts=Ie.RepetitionCollector=Ie.validateAmbiguousAlternationAlternatives=Ie.validateEmptyOrAlternative=Ie.getFirstNoneTerminal=Ie.validateNoLeftRecursion=Ie.validateRuleIsOverridden=Ie.validateRuleDoesNotAlreadyExist=Ie.OccurrenceValidationCollector=Ie.identifyProductionForDuplicates=Ie.validateGrammar=Ie.validateLookahead=void 0;var VL=or(uu()),rh=or(ln()),zoe=or(Rp()),YL=or(ei()),Voe=or(ol()),Yoe=or(xp()),Xoe=or(Lp()),ta=or(nr()),fl=or(ir()),Joe=or(SR()),xR=or(go()),Qoe=or(WT()),Zoe=or(Si()),LR=or(mo()),Co=or(Xp()),eae=or(po()),ni=rn(),MR=Nt(),mu=hu(),tae=ll(),ri=Nt(),$R=Nt(),rae=or(Jp()),nae=or(il()),iae=Ma();function oae(t){var e=t.lookaheadStrategy.validate({rules:t.rules,tokenTypes:t.tokenTypes,grammarName:t.grammarName});return(0,ta.default)(e,function(r){return IR({type:ni.ParserDefinitionErrorType.CUSTOM_LOOKAHEAD_VALIDATION},r)})}Ie.validateLookahead=oae;function aae(t,e,r,n){var i=(0,Co.default)(t,function(u){return sae(u,r)}),o=pae(t,e,r),a=(0,Co.default)(t,function(u){return rM(u,r)}),s=(0,Co.default)(t,function(u){return ZL(u,t,n,r)});return i.concat(o,a,s)}Ie.validateGrammar=aae;function sae(t,e){var r=new QL;t.accept(r);var n=r.allProductions,i=(0,Joe.default)(n,XL),o=(0,Qoe.default)(i,function(s){return s.length>1}),a=(0,ta.default)((0,Zoe.default)(o),function(s){var u=(0,VL.default)(s),d=e.buildDuplicateFoundError(t,s),p=(0,MR.getProductionDslName)(u),m={message:d,type:ni.ParserDefinitionErrorType.DUPLICATE_PRODUCTIONS,ruleName:t.name,dslName:p,occurrence:u.idx},v=JL(u);return v&&(m.parameter=v),m});return a}function XL(t){return"".concat((0,MR.getProductionDslName)(t),"_#_").concat(t.idx,"_#_").concat(JL(t))}Ie.identifyProductionForDuplicates=XL;function JL(t){return t instanceof ri.Terminal?t.terminalType.name:t instanceof ri.NonTerminal?t.nonTerminalName:""}var QL=function(t){qR(e,t);function e(){var r=t!==null&&t.apply(this,arguments)||this;return r.allProductions=[],r}return e.prototype.visitNonTerminal=function(r){this.allProductions.push(r)},e.prototype.visitOption=function(r){this.allProductions.push(r)},e.prototype.visitRepetitionWithSeparator=function(r){this.allProductions.push(r)},e.prototype.visitRepetitionMandatory=function(r){this.allProductions.push(r)},e.prototype.visitRepetitionMandatoryWithSeparator=function(r){this.allProductions.push(r)},e.prototype.visitRepetition=function(r){this.allProductions.push(r)},e.prototype.visitAlternation=function(r){this.allProductions.push(r)},e.prototype.visitTerminal=function(r){this.allProductions.push(r)},e}($R.GAstVisitor);Ie.OccurrenceValidationCollector=QL;function ZL(t,e,r,n){var i=[],o=(0,xR.default)(e,function(s,u){return u.name===t.name?s+1:s},0);if(o>1){var a=n.buildDuplicateRuleNameError({topLevelRule:t,grammarName:r});i.push({message:a,type:ni.ParserDefinitionErrorType.DUPLICATE_RULE_NAME,ruleName:t.name})}return i}Ie.validateRuleDoesNotAlreadyExist=ZL;function uae(t,e,r){var n=[],i;return(0,LR.default)(e,t)||(i="Invalid rule override, rule: ->".concat(t,"<- cannot be overridden in the grammar: ->").concat(r,"<-")+"as it is not defined in any of the super grammars ",n.push({message:i,type:ni.ParserDefinitionErrorType.INVALID_RULE_OVERRIDE,ruleName:t})),n}Ie.validateRuleIsOverridden=uae;function eM(t,e,r,n){n===void 0&&(n=[]);var i=[],o=dl(e.definition);if((0,rh.default)(o))return[];var a=t.name,s=(0,LR.default)(o,t);s&&i.push({message:r.buildLeftRecursionError({topLevelRule:t,leftRecursionPath:n}),type:ni.ParserDefinitionErrorType.LEFT_RECURSION,ruleName:a});var u=(0,Xoe.default)(o,n.concat([t])),d=(0,Co.default)(u,function(p){var m=(0,eae.default)(n);return m.push(p),eM(t,p,r,m)});return i.concat(d)}Ie.validateNoLeftRecursion=eM;function dl(t){var e=[];if((0,rh.default)(t))return e;var r=(0,VL.default)(t);if(r instanceof ri.NonTerminal)e.push(r.referencedRule);else if(r instanceof ri.Alternative||r instanceof ri.Option||r instanceof ri.RepetitionMandatory||r instanceof ri.RepetitionMandatoryWithSeparator||r instanceof ri.RepetitionWithSeparator||r instanceof ri.Repetition)e=e.concat(dl(r.definition));else if(r instanceof ri.Alternation)e=(0,YL.default)((0,ta.default)(r.definition,function(a){return dl(a.definition)}));else if(!(r instanceof ri.Terminal))throw Error("non exhaustive match");var n=(0,MR.isOptionalProd)(r),i=t.length>1;if(n&&i){var o=(0,zoe.default)(t);return e.concat(dl(o))}else return e}Ie.getFirstNoneTerminal=dl;var FR=function(t){qR(e,t);function e(){var r=t!==null&&t.apply(this,arguments)||this;return r.alternations=[],r}return e.prototype.visitAlternation=function(r){this.alternations.push(r)},e}($R.GAstVisitor);function cae(t,e){var r=new FR;t.accept(r);var n=r.alternations,i=(0,Co.default)(n,function(o){var a=(0,rae.default)(o.definition);return(0,Co.default)(a,function(s,u){var d=(0,tae.nextPossibleTokensAfter)([s],[],iae.tokenStructuredMatcher,1);return(0,rh.default)(d)?[{message:e.buildEmptyAlternationError({topLevelRule:t,alternation:o,emptyChoiceIdx:u}),type:ni.ParserDefinitionErrorType.NONE_LAST_EMPTY_ALT,ruleName:t.name,occurrence:o.idx,alternative:u+1}]:[]})});return i}Ie.validateEmptyOrAlternative=cae;function lae(t,e,r){var n=new FR;t.accept(n);var i=n.alternations;i=(0,Yoe.default)(i,function(a){return a.ignoreAmbiguities===!0});var o=(0,Co.default)(i,function(a){var s=a.idx,u=a.maxLookahead||e,d=(0,mu.getLookaheadPathsForOr)(s,t,u,a),p=fae(d,a,t,r),m=nM(d,a,t,r);return p.concat(m)});return o}Ie.validateAmbiguousAlternationAlternatives=lae;var tM=function(t){qR(e,t);function e(){var r=t!==null&&t.apply(this,arguments)||this;return r.allProductions=[],r}return e.prototype.visitRepetitionWithSeparator=function(r){this.allProductions.push(r)},e.prototype.visitRepetitionMandatory=function(r){this.allProductions.push(r)},e.prototype.visitRepetitionMandatoryWithSeparator=function(r){this.allProductions.push(r)},e.prototype.visitRepetition=function(r){this.allProductions.push(r)},e}($R.GAstVisitor);Ie.RepetitionCollector=tM;function rM(t,e){var r=new FR;t.accept(r);var n=r.alternations,i=(0,Co.default)(n,function(o){return o.definition.length>255?[{message:e.buildTooManyAlternativesError({topLevelRule:t,alternation:o}),type:ni.ParserDefinitionErrorType.TOO_MANY_ALTS,ruleName:t.name,occurrence:o.idx}]:[]});return i}Ie.validateTooManyAlts=rM;function dae(t,e,r){var n=[];return(0,fl.default)(t,function(i){var o=new tM;i.accept(o);var a=o.allProductions;(0,fl.default)(a,function(s){var u=(0,mu.getProdType)(s),d=s.maxLookahead||e,p=s.idx,m=(0,mu.getLookaheadPathsForOptionalProd)(p,i,u,d),v=m[0];if((0,rh.default)((0,YL.default)(v))){var P=r.buildEmptyRepetitionError({topLevelRule:i,repetition:s});n.push({message:P,type:ni.ParserDefinitionErrorType.NO_NON_EMPTY_LOOKAHEAD,ruleName:i.name})}})}),n}Ie.validateSomeNonEmptyLookaheadPath=dae;function fae(t,e,r,n){var i=[],o=(0,xR.default)(t,function(s,u,d){return e.definition[d].ignoreAmbiguities===!0||(0,fl.default)(u,function(p){var m=[d];(0,fl.default)(t,function(v,P){d!==P&&(0,mu.containsPath)(v,p)&&e.definition[P].ignoreAmbiguities!==!0&&m.push(P)}),m.length>1&&!(0,mu.containsPath)(i,p)&&(i.push(p),s.push({alts:m,path:p}))}),s},[]),a=(0,ta.default)(o,function(s){var u=(0,ta.default)(s.alts,function(p){return p+1}),d=n.buildAlternationAmbiguityError({topLevelRule:r,alternation:e,ambiguityIndices:u,prefixPath:s.path});return{message:d,type:ni.ParserDefinitionErrorType.AMBIGUOUS_ALTS,ruleName:r.name,occurrence:e.idx,alternatives:s.alts}});return a}function nM(t,e,r,n){var i=(0,xR.default)(t,function(a,s,u){var d=(0,ta.default)(s,function(p){return{idx:u,path:p}});return a.concat(d)},[]),o=(0,nae.default)((0,Co.default)(i,function(a){var s=e.definition[a.idx];if(s.ignoreAmbiguities===!0)return[];var u=a.idx,d=a.path,p=(0,Voe.default)(i,function(v){return e.definition[v.idx].ignoreAmbiguities!==!0&&v.idx<u&&(0,mu.isStrictPrefixOfPath)(v.path,d)}),m=(0,ta.default)(p,function(v){var P=[v.idx+1,u+1],_=e.idx===0?"":e.idx,N=n.buildAlternationPrefixAmbiguityError({topLevelRule:r,alternation:e,ambiguityIndices:P,prefixPath:v.path});return{message:N,type:ni.ParserDefinitionErrorType.AMBIGUOUS_PREFIX_ALTS,ruleName:r.name,occurrence:_,alternatives:P}});return m}));return o}Ie.checkPrefixAlternativesAmbiguities=nM;function pae(t,e,r){var n=[],i=(0,ta.default)(e,function(o){return o.name});return(0,fl.default)(t,function(o){var a=o.name;if((0,LR.default)(i,a)){var s=r.buildNamespaceConflictError(o);n.push({message:s,type:ni.ParserDefinitionErrorType.CONFLICT_TOKENS_RULES_NAMESPACE,ruleName:a})}}),n}});var sM=h(ra=>{"use strict";var iM=ra&&ra.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(ra,"__esModule",{value:!0});ra.validateGrammar=ra.resolveGrammar=void 0;var hae=iM(ir()),oM=iM(iR()),mae=PL(),gae=pl(),aM=pu();function yae(t){var e=(0,oM.default)(t,{errMsgProvider:aM.defaultGrammarResolverErrorProvider}),r={};return(0,hae.default)(t.rules,function(n){r[n.name]=n}),(0,mae.resolveGrammar)(r,e.errMsgProvider)}ra.resolveGrammar=yae;function vae(t){return t=(0,oM.default)(t,{errMsgProvider:aM.defaultGrammarValidatorErrorProvider}),(0,gae.validateGrammar)(t.rules,t.tokenTypes,t.errMsgProvider,t.grammarName)}ra.validateGrammar=vae});var gu=h(Dr=>{"use strict";var hl=Dr&&Dr.__extends||function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(n[o]=i[o])},t(e,r)};return function(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");t(e,r);function n(){this.constructor=e}e.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}(),_ae=Dr&&Dr.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(Dr,"__esModule",{value:!0});Dr.EarlyExitException=Dr.NotAllInputParsedException=Dr.NoViableAltException=Dr.MismatchedTokenException=Dr.isRecognitionException=void 0;var Tae=_ae(mo()),uM="MismatchedTokenException",cM="NoViableAltException",lM="EarlyExitException",dM="NotAllInputParsedException",fM=[uM,cM,lM,dM];Object.freeze(fM);function Rae(t){return(0,Tae.default)(fM,t.name)}Dr.isRecognitionException=Rae;var nh=function(t){hl(e,t);function e(r,n){var i=this.constructor,o=t.call(this,r)||this;return o.token=n,o.resyncedTokens=[],Object.setPrototypeOf(o,i.prototype),Error.captureStackTrace&&Error.captureStackTrace(o,o.constructor),o}return e}(Error),bae=function(t){hl(e,t);function e(r,n,i){var o=t.call(this,r,n)||this;return o.previousToken=i,o.name=uM,o}return e}(nh);Dr.MismatchedTokenException=bae;var Cae=function(t){hl(e,t);function e(r,n,i){var o=t.call(this,r,n)||this;return o.previousToken=i,o.name=cM,o}return e}(nh);Dr.NoViableAltException=Cae;var Aae=function(t){hl(e,t);function e(r,n){var i=t.call(this,r,n)||this;return i.name=dM,i}return e}(nh);Dr.NotAllInputParsedException=Aae;var Pae=function(t){hl(e,t);function e(r,n,i){var o=t.call(this,r,n)||this;return o.previousToken=i,o.name=lM,o}return e}(nh);Dr.EarlyExitException=Pae});var UR=h(Ut=>{"use strict";var Sae=Ut&&Ut.__extends||function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(n[o]=i[o])},t(e,r)};return function(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");t(e,r);function n(){this.constructor=e}e.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}(),na=Ut&&Ut.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(Ut,"__esModule",{value:!0});Ut.attemptInRepetitionRecovery=Ut.Recoverable=Ut.InRuleRecoveryException=Ut.IN_RULE_RECOVERY_EXCEPTION=Ut.EOF_FOLLOW_KEY=void 0;var ml=$a(),Eae=na(ln()),pM=na(Jp()),kae=na(ei()),jR=na(nr()),hM=na(Mp()),Nae=na(fn()),wae=na(mo()),Dae=na(po()),Oae=gu(),Iae=rR(),qae=rn();Ut.EOF_FOLLOW_KEY={};Ut.IN_RULE_RECOVERY_EXCEPTION="InRuleRecoveryException";var mM=function(t){Sae(e,t);function e(r){var n=t.call(this,r)||this;return n.name=Ut.IN_RULE_RECOVERY_EXCEPTION,n}return e}(Error);Ut.InRuleRecoveryException=mM;var xae=function(){function t(){}return t.prototype.initRecoverable=function(e){this.firstAfterRepMap={},this.resyncFollows={},this.recoveryEnabled=(0,Nae.default)(e,"recoveryEnabled")?e.recoveryEnabled:qae.DEFAULT_PARSER_CONFIG.recoveryEnabled,this.recoveryEnabled&&(this.attemptInRepetitionRecovery=gM)},t.prototype.getTokenToInsert=function(e){var r=(0,ml.createTokenInstance)(e,"",NaN,NaN,NaN,NaN,NaN,NaN);return r.isInsertedInRecovery=!0,r},t.prototype.canTokenTypeBeInsertedInRecovery=function(e){return!0},t.prototype.canTokenTypeBeDeletedInRecovery=function(e){return!0},t.prototype.tryInRepetitionRecovery=function(e,r,n,i){for(var o=this,a=this.findReSyncTokenType(),s=this.exportLexerState(),u=[],d=!1,p=this.LA(1),m=this.LA(1),v=function(){var P=o.LA(0),_=o.errorMessageProvider.buildMismatchTokenMessage({expected:i,actual:p,previous:P,ruleName:o.getCurrRuleFullName()}),N=new Oae.MismatchedTokenException(_,p,o.LA(0));N.resyncedTokens=(0,pM.default)(u),o.SAVE_ERROR(N)};!d;)if(this.tokenMatcher(m,i)){v();return}else if(n.call(this)){v(),e.apply(this,r);return}else this.tokenMatcher(m,a)?d=!0:(m=this.SKIP_TOKEN(),this.addToResyncTokens(m,u));this.importLexerState(s)},t.prototype.shouldInRepetitionRecoveryBeTried=function(e,r,n){return!(n===!1||this.tokenMatcher(this.LA(1),e)||this.isBackTracking()||this.canPerformInRuleRecovery(e,this.getFollowsForInRuleRecovery(e,r)))},t.prototype.getFollowsForInRuleRecovery=function(e,r){var n=this.getCurrentGrammarPath(e,r),i=this.getNextPossibleTokenTypes(n);return i},t.prototype.tryInRuleRecovery=function(e,r){if(this.canRecoverWithSingleTokenInsertion(e,r)){var n=this.getTokenToInsert(e);return n}if(this.canRecoverWithSingleTokenDeletion(e)){var i=this.SKIP_TOKEN();return this.consumeToken(),i}throw new mM("sad sad panda")},t.prototype.canPerformInRuleRecovery=function(e,r){return this.canRecoverWithSingleTokenInsertion(e,r)||this.canRecoverWithSingleTokenDeletion(e)},t.prototype.canRecoverWithSingleTokenInsertion=function(e,r){var n=this;if(!this.canTokenTypeBeInsertedInRecovery(e)||(0,Eae.default)(r))return!1;var i=this.LA(1),o=(0,hM.default)(r,function(a){return n.tokenMatcher(i,a)})!==void 0;return o},t.prototype.canRecoverWithSingleTokenDeletion=function(e){if(!this.canTokenTypeBeDeletedInRecovery(e))return!1;var r=this.tokenMatcher(this.LA(2),e);return r},t.prototype.isInCurrentRuleReSyncSet=function(e){var r=this.getCurrFollowKey(),n=this.getFollowSetFromFollowKey(r);return(0,wae.default)(n,e)},t.prototype.findReSyncTokenType=function(){for(var e=this.flattenFollowSet(),r=this.LA(1),n=2;;){var i=(0,hM.default)(e,function(o){var a=(0,ml.tokenMatcher)(r,o);return a});if(i!==void 0)return i;r=this.LA(n),n++}},t.prototype.getCurrFollowKey=function(){if(this.RULE_STACK.length===1)return Ut.EOF_FOLLOW_KEY;var e=this.getLastExplicitRuleShortName(),r=this.getLastExplicitRuleOccurrenceIndex(),n=this.getPreviousExplicitRuleShortName();return{ruleName:this.shortRuleNameToFullName(e),idxInCallingRule:r,inRule:this.shortRuleNameToFullName(n)}},t.prototype.buildFullFollowKeyStack=function(){var e=this,r=this.RULE_STACK,n=this.RULE_OCCURRENCE_STACK;return(0,jR.default)(r,function(i,o){return o===0?Ut.EOF_FOLLOW_KEY:{ruleName:e.shortRuleNameToFullName(i),idxInCallingRule:n[o],inRule:e.shortRuleNameToFullName(r[o-1])}})},t.prototype.flattenFollowSet=function(){var e=this,r=(0,jR.default)(this.buildFullFollowKeyStack(),function(n){return e.getFollowSetFromFollowKey(n)});return(0,kae.default)(r)},t.prototype.getFollowSetFromFollowKey=function(e){if(e===Ut.EOF_FOLLOW_KEY)return[ml.EOF];var r=e.ruleName+e.idxInCallingRule+Iae.IN+e.inRule;return this.resyncFollows[r]},t.prototype.addToResyncTokens=function(e,r){return this.tokenMatcher(e,ml.EOF)||r.push(e),r},t.prototype.reSyncTo=function(e){for(var r=[],n=this.LA(1);this.tokenMatcher(n,e)===!1;)n=this.SKIP_TOKEN(),this.addToResyncTokens(n,r);return(0,pM.default)(r)},t.prototype.attemptInRepetitionRecovery=function(e,r,n,i,o,a,s){},t.prototype.getCurrentGrammarPath=function(e,r){var n=this.getHumanReadableRuleStack(),i=(0,Dae.default)(this.RULE_OCCURRENCE_STACK),o={ruleStack:n,occurrenceStack:i,lastTok:e,lastTokOccurrence:r};return o},t.prototype.getHumanReadableRuleStack=function(){var e=this;return(0,jR.default)(this.RULE_STACK,function(r){return e.shortRuleNameToFullName(r)})},t}();Ut.Recoverable=xae;function gM(t,e,r,n,i,o,a){var s=this.getKeyForAutomaticLookahead(n,i),u=this.firstAfterRepMap[s];if(u===void 0){var d=this.getCurrRuleFullName(),p=this.getGAstProductions()[d],m=new o(p,i);u=m.startWalking(),this.firstAfterRepMap[s]=u}var v=u.token,P=u.occurrence,_=u.isEndOfRule;this.RULE_STACK.length===1&&_&&v===void 0&&(v=ml.EOF,P=1),!(v===void 0||P===void 0)&&this.shouldInRepetitionRecoveryBeTried(v,P,a)&&this.tryInRepetitionRecovery(t,e,r,v)}Ut.attemptInRepetitionRecovery=gM});var ih=h(He=>{"use strict";Object.defineProperty(He,"__esModule",{value:!0});He.getKeyForAutomaticLookahead=He.AT_LEAST_ONE_SEP_IDX=He.MANY_SEP_IDX=He.AT_LEAST_ONE_IDX=He.MANY_IDX=He.OPTION_IDX=He.OR_IDX=He.BITS_FOR_ALT_IDX=He.BITS_FOR_RULE_IDX=He.BITS_FOR_OCCURRENCE_IDX=He.BITS_FOR_METHOD_TYPE=void 0;He.BITS_FOR_METHOD_TYPE=4;He.BITS_FOR_OCCURRENCE_IDX=8;He.BITS_FOR_RULE_IDX=12;He.BITS_FOR_ALT_IDX=8;He.OR_IDX=1<<He.BITS_FOR_OCCURRENCE_IDX;He.OPTION_IDX=2<<He.BITS_FOR_OCCURRENCE_IDX;He.MANY_IDX=3<<He.BITS_FOR_OCCURRENCE_IDX;He.AT_LEAST_ONE_IDX=4<<He.BITS_FOR_OCCURRENCE_IDX;He.MANY_SEP_IDX=5<<He.BITS_FOR_OCCURRENCE_IDX;He.AT_LEAST_ONE_SEP_IDX=6<<He.BITS_FOR_OCCURRENCE_IDX;function Lae(t,e,r){return r|e|t}He.getKeyForAutomaticLookahead=Lae;var sCe=32-He.BITS_FOR_ALT_IDX});var HR=h(ia=>{"use strict";var oh=ia&&ia.__spreadArray||function(t,e,r){if(r||arguments.length===2)for(var n=0,i=e.length,o;n<i;n++)(o||!(n in e))&&(o||(o=Array.prototype.slice.call(e,0,n)),o[n]=e[n]);return t.concat(o||Array.prototype.slice.call(e))},yM=ia&&ia.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(ia,"__esModule",{value:!0});ia.LLkLookaheadStrategy=void 0;var GR=yM(Xp()),Mae=yM(ln()),ah=pu(),$ae=rn(),sh=pl(),gl=hu(),Fae=function(){function t(e){var r;this.maxLookahead=(r=e?.maxLookahead)!==null&&r!==void 0?r:$ae.DEFAULT_PARSER_CONFIG.maxLookahead}return t.prototype.validate=function(e){var r=this.validateNoLeftRecursion(e.rules);if((0,Mae.default)(r)){var n=this.validateEmptyOrAlternatives(e.rules),i=this.validateAmbiguousAlternationAlternatives(e.rules,this.maxLookahead),o=this.validateSomeNonEmptyLookaheadPath(e.rules,this.maxLookahead),a=oh(oh(oh(oh([],r,!0),n,!0),i,!0),o,!0);return a}return r},t.prototype.validateNoLeftRecursion=function(e){return(0,GR.default)(e,function(r){return(0,sh.validateNoLeftRecursion)(r,r,ah.defaultGrammarValidatorErrorProvider)})},t.prototype.validateEmptyOrAlternatives=function(e){return(0,GR.default)(e,function(r){return(0,sh.validateEmptyOrAlternative)(r,ah.defaultGrammarValidatorErrorProvider)})},t.prototype.validateAmbiguousAlternationAlternatives=function(e,r){return(0,GR.default)(e,function(n){return(0,sh.validateAmbiguousAlternationAlternatives)(n,r,ah.defaultGrammarValidatorErrorProvider)})},t.prototype.validateSomeNonEmptyLookaheadPath=function(e,r){return(0,sh.validateSomeNonEmptyLookaheadPath)(e,r,ah.defaultGrammarValidatorErrorProvider)},t.prototype.buildLookaheadForAlternation=function(e){return(0,gl.buildLookaheadFuncForOr)(e.prodOccurrence,e.rule,e.maxLookahead,e.hasPredicates,e.dynamicTokensEnabled,gl.buildAlternativesLookAheadFunc)},t.prototype.buildLookaheadForOptional=function(e){return(0,gl.buildLookaheadFuncForOptionalProd)(e.prodOccurrence,e.rule,e.maxLookahead,e.dynamicTokensEnabled,(0,gl.getProdType)(e.prodType),gl.buildSingleAlternativeLookaheadFunction)},t}();ia.LLkLookaheadStrategy=Fae});var RM=h(xi=>{"use strict";var jae=xi&&xi.__extends||function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(n[o]=i[o])},t(e,r)};return function(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");t(e,r);function n(){this.constructor=e}e.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}(),_M=xi&&xi.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(xi,"__esModule",{value:!0});xi.collectMethods=xi.LooksAhead=void 0;var Ka=_M(ir()),WR=_M(fn()),vM=rn(),Ao=ih(),Uae=Nt(),yu=Nt(),Gae=HR(),Hae=function(){function t(){}return t.prototype.initLooksAhead=function(e){this.dynamicTokensEnabled=(0,WR.default)(e,"dynamicTokensEnabled")?e.dynamicTokensEnabled:vM.DEFAULT_PARSER_CONFIG.dynamicTokensEnabled,this.maxLookahead=(0,WR.default)(e,"maxLookahead")?e.maxLookahead:vM.DEFAULT_PARSER_CONFIG.maxLookahead,this.lookaheadStrategy=(0,WR.default)(e,"lookaheadStrategy")?e.lookaheadStrategy:new Gae.LLkLookaheadStrategy({maxLookahead:this.maxLookahead}),this.lookAheadFuncsCache=new Map},t.prototype.preComputeLookaheadFunctions=function(e){var r=this;(0,Ka.default)(e,function(n){r.TRACE_INIT("".concat(n.name," Rule Lookahead"),function(){var i=TM(n),o=i.alternation,a=i.repetition,s=i.option,u=i.repetitionMandatory,d=i.repetitionMandatoryWithSeparator,p=i.repetitionWithSeparator;(0,Ka.default)(o,function(m){var v=m.idx===0?"":m.idx;r.TRACE_INIT("".concat((0,yu.getProductionDslName)(m)).concat(v),function(){var P=r.lookaheadStrategy.buildLookaheadForAlternation({prodOccurrence:m.idx,rule:n,maxLookahead:m.maxLookahead||r.maxLookahead,hasPredicates:m.hasPredicates,dynamicTokensEnabled:r.dynamicTokensEnabled}),_=(0,Ao.getKeyForAutomaticLookahead)(r.fullRuleNameToShort[n.name],Ao.OR_IDX,m.idx);r.setLaFuncCache(_,P)})}),(0,Ka.default)(a,function(m){r.computeLookaheadFunc(n,m.idx,Ao.MANY_IDX,"Repetition",m.maxLookahead,(0,yu.getProductionDslName)(m))}),(0,Ka.default)(s,function(m){r.computeLookaheadFunc(n,m.idx,Ao.OPTION_IDX,"Option",m.maxLookahead,(0,yu.getProductionDslName)(m))}),(0,Ka.default)(u,function(m){r.computeLookaheadFunc(n,m.idx,Ao.AT_LEAST_ONE_IDX,"RepetitionMandatory",m.maxLookahead,(0,yu.getProductionDslName)(m))}),(0,Ka.default)(d,function(m){r.computeLookaheadFunc(n,m.idx,Ao.AT_LEAST_ONE_SEP_IDX,"RepetitionMandatoryWithSeparator",m.maxLookahead,(0,yu.getProductionDslName)(m))}),(0,Ka.default)(p,function(m){r.computeLookaheadFunc(n,m.idx,Ao.MANY_SEP_IDX,"RepetitionWithSeparator",m.maxLookahead,(0,yu.getProductionDslName)(m))})})})},t.prototype.computeLookaheadFunc=function(e,r,n,i,o,a){var s=this;this.TRACE_INIT("".concat(a).concat(r===0?"":r),function(){var u=s.lookaheadStrategy.buildLookaheadForOptional({prodOccurrence:r,rule:e,maxLookahead:o||s.maxLookahead,dynamicTokensEnabled:s.dynamicTokensEnabled,prodType:i}),d=(0,Ao.getKeyForAutomaticLookahead)(s.fullRuleNameToShort[e.name],n,r);s.setLaFuncCache(d,u)})},t.prototype.getKeyForAutomaticLookahead=function(e,r){var n=this.getLastExplicitRuleShortName();return(0,Ao.getKeyForAutomaticLookahead)(n,e,r)},t.prototype.getLaFuncFromCache=function(e){return this.lookAheadFuncsCache.get(e)},t.prototype.setLaFuncCache=function(e,r){this.lookAheadFuncsCache.set(e,r)},t}();xi.LooksAhead=Hae;var Wae=function(t){jae(e,t);function e(){var r=t!==null&&t.apply(this,arguments)||this;return r.dslMethods={option:[],alternation:[],repetition:[],repetitionWithSeparator:[],repetitionMandatory:[],repetitionMandatoryWithSeparator:[]},r}return e.prototype.reset=function(){this.dslMethods={option:[],alternation:[],repetition:[],repetitionWithSeparator:[],repetitionMandatory:[],repetitionMandatoryWithSeparator:[]}},e.prototype.visitOption=function(r){this.dslMethods.option.push(r)},e.prototype.visitRepetitionWithSeparator=function(r){this.dslMethods.repetitionWithSeparator.push(r)},e.prototype.visitRepetitionMandatory=function(r){this.dslMethods.repetitionMandatory.push(r)},e.prototype.visitRepetitionMandatoryWithSeparator=function(r){this.dslMethods.repetitionMandatoryWithSeparator.push(r)},e.prototype.visitRepetition=function(r){this.dslMethods.repetition.push(r)},e.prototype.visitAlternation=function(r){this.dslMethods.alternation.push(r)},e}(Uae.GAstVisitor),uh=new Wae;function TM(t){uh.reset(),t.accept(uh);var e=uh.dslMethods;return uh.reset(),e}xi.collectMethods=TM});var bM=h(Li=>{"use strict";Object.defineProperty(Li,"__esModule",{value:!0});Li.addNoneTerminalToCst=Li.addTerminalToCst=Li.setNodeLocationFull=Li.setNodeLocationOnlyOffset=void 0;function Kae(t,e){isNaN(t.startOffset)===!0?(t.startOffset=e.startOffset,t.endOffset=e.endOffset):t.endOffset<e.endOffset&&(t.endOffset=e.endOffset)}Li.setNodeLocationOnlyOffset=Kae;function Bae(t,e){isNaN(t.startOffset)===!0?(t.startOffset=e.startOffset,t.startColumn=e.startColumn,t.startLine=e.startLine,t.endOffset=e.endOffset,t.endColumn=e.endColumn,t.endLine=e.endLine):t.endOffset<e.endOffset&&(t.endOffset=e.endOffset,t.endColumn=e.endColumn,t.endLine=e.endLine)}Li.setNodeLocationFull=Bae;function zae(t,e,r){t.children[r]===void 0?t.children[r]=[e]:t.children[r].push(e)}Li.addTerminalToCst=zae;function Vae(t,e,r){t.children[e]===void 0?t.children[e]=[r]:t.children[e].push(r)}Li.addNoneTerminalToCst=Vae});var CM=h(ch=>{"use strict";Object.defineProperty(ch,"__esModule",{value:!0});ch.defineNameProp=void 0;var Yae="name";function Xae(t,e){Object.defineProperty(t,Yae,{enumerable:!1,configurable:!0,writable:!1,value:e})}ch.defineNameProp=Xae});var wM=h(yr=>{"use strict";var Po=yr&&yr.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(yr,"__esModule",{value:!0});yr.validateMissingCstMethods=yr.validateVisitor=yr.CstVisitorDefinitionError=yr.createBaseVisitorConstructorWithDefaults=yr.createBaseSemanticVisitorConstructor=yr.defaultVisit=void 0;var Jae=Po(ln()),Qae=Po(il()),Zae=Po(ze()),AM=Po(nr()),ese=Po(ir()),tse=Po(ol()),rse=Po(dn()),nse=Po(Us()),ise=Po(qa()),PM=CM();function SM(t,e){for(var r=(0,rse.default)(t),n=r.length,i=0;i<n;i++)for(var o=r[i],a=t[o],s=a.length,u=0;u<s;u++){var d=a[u];d.tokenTypeIdx===void 0&&this[d.name](d.children,e)}}yr.defaultVisit=SM;function ose(t,e){var r=function(){};(0,PM.defineNameProp)(r,t+"BaseSemantics");var n={visit:function(i,o){if((0,Zae.default)(i)&&(i=i[0]),!(0,ise.default)(i))return this[i.name](i.children,o)},validateVisitor:function(){var i=kM(this,e);if(!(0,Jae.default)(i)){var o=(0,AM.default)(i,function(a){return a.msg});throw Error("Errors Detected in CST Visitor <".concat(this.constructor.name,`>:
	`)+"".concat(o.join(`

`).replace(/\n/g,`
	`)))}}};return r.prototype=n,r.prototype.constructor=r,r._RULE_NAMES=e,r}yr.createBaseSemanticVisitorConstructor=ose;function ase(t,e,r){var n=function(){};(0,PM.defineNameProp)(n,t+"BaseSemanticsWithDefaults");var i=Object.create(r.prototype);return(0,ese.default)(e,function(o){i[o]=SM}),n.prototype=i,n.prototype.constructor=n,n}yr.createBaseVisitorConstructorWithDefaults=ase;var EM;(function(t){t[t.REDUNDANT_METHOD=0]="REDUNDANT_METHOD",t[t.MISSING_METHOD=1]="MISSING_METHOD"})(EM=yr.CstVisitorDefinitionError||(yr.CstVisitorDefinitionError={}));function kM(t,e){var r=NM(t,e);return r}yr.validateVisitor=kM;function NM(t,e){var r=(0,tse.default)(e,function(i){return(0,nse.default)(t[i])===!1}),n=(0,AM.default)(r,function(i){return{msg:"Missing visitor method: <".concat(i,"> on ").concat(t.constructor.name," CST Visitor."),type:EM.MISSING_METHOD,methodName:i}});return(0,Qae.default)(n)}yr.validateMissingCstMethods=NM});var qM=h(_u=>{"use strict";var lh=_u&&_u.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(_u,"__esModule",{value:!0});_u.TreeBuilder=void 0;var vu=bM(),jr=lh(Dp()),sse=lh(fn()),DM=lh(dn()),OM=lh(qa()),IM=wM(),use=rn(),cse=function(){function t(){}return t.prototype.initTreeBuilder=function(e){if(this.CST_STACK=[],this.outputCst=e.outputCst,this.nodeLocationTracking=(0,sse.default)(e,"nodeLocationTracking")?e.nodeLocationTracking:use.DEFAULT_PARSER_CONFIG.nodeLocationTracking,!this.outputCst)this.cstInvocationStateUpdate=jr.default,this.cstFinallyStateUpdate=jr.default,this.cstPostTerminal=jr.default,this.cstPostNonTerminal=jr.default,this.cstPostRule=jr.default;else if(/full/i.test(this.nodeLocationTracking))this.recoveryEnabled?(this.setNodeLocationFromToken=vu.setNodeLocationFull,this.setNodeLocationFromNode=vu.setNodeLocationFull,this.cstPostRule=jr.default,this.setInitialNodeLocation=this.setInitialNodeLocationFullRecovery):(this.setNodeLocationFromToken=jr.default,this.setNodeLocationFromNode=jr.default,this.cstPostRule=this.cstPostRuleFull,this.setInitialNodeLocation=this.setInitialNodeLocationFullRegular);else if(/onlyOffset/i.test(this.nodeLocationTracking))this.recoveryEnabled?(this.setNodeLocationFromToken=vu.setNodeLocationOnlyOffset,this.setNodeLocationFromNode=vu.setNodeLocationOnlyOffset,this.cstPostRule=jr.default,this.setInitialNodeLocation=this.setInitialNodeLocationOnlyOffsetRecovery):(this.setNodeLocationFromToken=jr.default,this.setNodeLocationFromNode=jr.default,this.cstPostRule=this.cstPostRuleOnlyOffset,this.setInitialNodeLocation=this.setInitialNodeLocationOnlyOffsetRegular);else if(/none/i.test(this.nodeLocationTracking))this.setNodeLocationFromToken=jr.default,this.setNodeLocationFromNode=jr.default,this.cstPostRule=jr.default,this.setInitialNodeLocation=jr.default;else throw Error('Invalid <nodeLocationTracking> config option: "'.concat(e.nodeLocationTracking,'"'))},t.prototype.setInitialNodeLocationOnlyOffsetRecovery=function(e){e.location={startOffset:NaN,endOffset:NaN}},t.prototype.setInitialNodeLocationOnlyOffsetRegular=function(e){e.location={startOffset:this.LA(1).startOffset,endOffset:NaN}},t.prototype.setInitialNodeLocationFullRecovery=function(e){e.location={startOffset:NaN,startLine:NaN,startColumn:NaN,endOffset:NaN,endLine:NaN,endColumn:NaN}},t.prototype.setInitialNodeLocationFullRegular=function(e){var r=this.LA(1);e.location={startOffset:r.startOffset,startLine:r.startLine,startColumn:r.startColumn,endOffset:NaN,endLine:NaN,endColumn:NaN}},t.prototype.cstInvocationStateUpdate=function(e){var r={name:e,children:Object.create(null)};this.setInitialNodeLocation(r),this.CST_STACK.push(r)},t.prototype.cstFinallyStateUpdate=function(){this.CST_STACK.pop()},t.prototype.cstPostRuleFull=function(e){var r=this.LA(0),n=e.location;n.startOffset<=r.startOffset?(n.endOffset=r.endOffset,n.endLine=r.endLine,n.endColumn=r.endColumn):(n.startOffset=NaN,n.startLine=NaN,n.startColumn=NaN)},t.prototype.cstPostRuleOnlyOffset=function(e){var r=this.LA(0),n=e.location;n.startOffset<=r.startOffset?n.endOffset=r.endOffset:n.startOffset=NaN},t.prototype.cstPostTerminal=function(e,r){var n=this.CST_STACK[this.CST_STACK.length-1];(0,vu.addTerminalToCst)(n,r,e),this.setNodeLocationFromToken(n.location,r)},t.prototype.cstPostNonTerminal=function(e,r){var n=this.CST_STACK[this.CST_STACK.length-1];(0,vu.addNoneTerminalToCst)(n,r,e),this.setNodeLocationFromNode(n.location,e.location)},t.prototype.getBaseCstVisitorConstructor=function(){if((0,OM.default)(this.baseCstVisitorConstructor)){var e=(0,IM.createBaseSemanticVisitorConstructor)(this.className,(0,DM.default)(this.gastProductionsCache));return this.baseCstVisitorConstructor=e,e}return this.baseCstVisitorConstructor},t.prototype.getBaseCstVisitorConstructorWithDefaults=function(){if((0,OM.default)(this.baseCstVisitorWithDefaultsConstructor)){var e=(0,IM.createBaseVisitorConstructorWithDefaults)(this.className,(0,DM.default)(this.gastProductionsCache),this.getBaseCstVisitorConstructor());return this.baseCstVisitorWithDefaultsConstructor=e,e}return this.baseCstVisitorWithDefaultsConstructor},t.prototype.getLastExplicitRuleShortName=function(){var e=this.RULE_STACK;return e[e.length-1]},t.prototype.getPreviousExplicitRuleShortName=function(){var e=this.RULE_STACK;return e[e.length-2]},t.prototype.getLastExplicitRuleOccurrenceIndex=function(){var e=this.RULE_OCCURRENCE_STACK;return e[e.length-1]},t}();_u.TreeBuilder=cse});var LM=h(dh=>{"use strict";Object.defineProperty(dh,"__esModule",{value:!0});dh.LexerAdapter=void 0;var xM=rn(),lse=function(){function t(){}return t.prototype.initLexerAdapter=function(){this.tokVector=[],this.tokVectorLength=0,this.currIdx=-1},Object.defineProperty(t.prototype,"input",{get:function(){return this.tokVector},set:function(e){if(this.selfAnalysisDone!==!0)throw Error("Missing <performSelfAnalysis> invocation at the end of the Parser's constructor.");this.reset(),this.tokVector=e,this.tokVectorLength=e.length},enumerable:!1,configurable:!0}),t.prototype.SKIP_TOKEN=function(){return this.currIdx<=this.tokVector.length-2?(this.consumeToken(),this.LA(1)):xM.END_OF_FILE},t.prototype.LA=function(e){var r=this.currIdx+e;return r<0||this.tokVectorLength<=r?xM.END_OF_FILE:this.tokVector[r]},t.prototype.consumeToken=function(){this.currIdx++},t.prototype.exportLexerState=function(){return this.currIdx},t.prototype.importLexerState=function(e){this.currIdx=e},t.prototype.resetLexerState=function(){this.currIdx=-1},t.prototype.moveToTerminatedState=function(){this.currIdx=this.tokVector.length-1},t.prototype.getLexerPosition=function(){return this.exportLexerState()},t}();dh.LexerAdapter=lse});var $M=h(Tu=>{"use strict";var MM=Tu&&Tu.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(Tu,"__esModule",{value:!0});Tu.RecognizerApi=void 0;var dse=MM(Si()),fse=MM(mo()),pse=gu(),KR=rn(),hse=pu(),mse=pl(),gse=Nt(),yse=function(){function t(){}return t.prototype.ACTION=function(e){return e.call(this)},t.prototype.consume=function(e,r,n){return this.consumeInternal(r,e,n)},t.prototype.subrule=function(e,r,n){return this.subruleInternal(r,e,n)},t.prototype.option=function(e,r){return this.optionInternal(r,e)},t.prototype.or=function(e,r){return this.orInternal(r,e)},t.prototype.many=function(e,r){return this.manyInternal(e,r)},t.prototype.atLeastOne=function(e,r){return this.atLeastOneInternal(e,r)},t.prototype.CONSUME=function(e,r){return this.consumeInternal(e,0,r)},t.prototype.CONSUME1=function(e,r){return this.consumeInternal(e,1,r)},t.prototype.CONSUME2=function(e,r){return this.consumeInternal(e,2,r)},t.prototype.CONSUME3=function(e,r){return this.consumeInternal(e,3,r)},t.prototype.CONSUME4=function(e,r){return this.consumeInternal(e,4,r)},t.prototype.CONSUME5=function(e,r){return this.consumeInternal(e,5,r)},t.prototype.CONSUME6=function(e,r){return this.consumeInternal(e,6,r)},t.prototype.CONSUME7=function(e,r){return this.consumeInternal(e,7,r)},t.prototype.CONSUME8=function(e,r){return this.consumeInternal(e,8,r)},t.prototype.CONSUME9=function(e,r){return this.consumeInternal(e,9,r)},t.prototype.SUBRULE=function(e,r){return this.subruleInternal(e,0,r)},t.prototype.SUBRULE1=function(e,r){return this.subruleInternal(e,1,r)},t.prototype.SUBRULE2=function(e,r){return this.subruleInternal(e,2,r)},t.prototype.SUBRULE3=function(e,r){return this.subruleInternal(e,3,r)},t.prototype.SUBRULE4=function(e,r){return this.subruleInternal(e,4,r)},t.prototype.SUBRULE5=function(e,r){return this.subruleInternal(e,5,r)},t.prototype.SUBRULE6=function(e,r){return this.subruleInternal(e,6,r)},t.prototype.SUBRULE7=function(e,r){return this.subruleInternal(e,7,r)},t.prototype.SUBRULE8=function(e,r){return this.subruleInternal(e,8,r)},t.prototype.SUBRULE9=function(e,r){return this.subruleInternal(e,9,r)},t.prototype.OPTION=function(e){return this.optionInternal(e,0)},t.prototype.OPTION1=function(e){return this.optionInternal(e,1)},t.prototype.OPTION2=function(e){return this.optionInternal(e,2)},t.prototype.OPTION3=function(e){return this.optionInternal(e,3)},t.prototype.OPTION4=function(e){return this.optionInternal(e,4)},t.prototype.OPTION5=function(e){return this.optionInternal(e,5)},t.prototype.OPTION6=function(e){return this.optionInternal(e,6)},t.prototype.OPTION7=function(e){return this.optionInternal(e,7)},t.prototype.OPTION8=function(e){return this.optionInternal(e,8)},t.prototype.OPTION9=function(e){return this.optionInternal(e,9)},t.prototype.OR=function(e){return this.orInternal(e,0)},t.prototype.OR1=function(e){return this.orInternal(e,1)},t.prototype.OR2=function(e){return this.orInternal(e,2)},t.prototype.OR3=function(e){return this.orInternal(e,3)},t.prototype.OR4=function(e){return this.orInternal(e,4)},t.prototype.OR5=function(e){return this.orInternal(e,5)},t.prototype.OR6=function(e){return this.orInternal(e,6)},t.prototype.OR7=function(e){return this.orInternal(e,7)},t.prototype.OR8=function(e){return this.orInternal(e,8)},t.prototype.OR9=function(e){return this.orInternal(e,9)},t.prototype.MANY=function(e){this.manyInternal(0,e)},t.prototype.MANY1=function(e){this.manyInternal(1,e)},t.prototype.MANY2=function(e){this.manyInternal(2,e)},t.prototype.MANY3=function(e){this.manyInternal(3,e)},t.prototype.MANY4=function(e){this.manyInternal(4,e)},t.prototype.MANY5=function(e){this.manyInternal(5,e)},t.prototype.MANY6=function(e){this.manyInternal(6,e)},t.prototype.MANY7=function(e){this.manyInternal(7,e)},t.prototype.MANY8=function(e){this.manyInternal(8,e)},t.prototype.MANY9=function(e){this.manyInternal(9,e)},t.prototype.MANY_SEP=function(e){this.manySepFirstInternal(0,e)},t.prototype.MANY_SEP1=function(e){this.manySepFirstInternal(1,e)},t.prototype.MANY_SEP2=function(e){this.manySepFirstInternal(2,e)},t.prototype.MANY_SEP3=function(e){this.manySepFirstInternal(3,e)},t.prototype.MANY_SEP4=function(e){this.manySepFirstInternal(4,e)},t.prototype.MANY_SEP5=function(e){this.manySepFirstInternal(5,e)},t.prototype.MANY_SEP6=function(e){this.manySepFirstInternal(6,e)},t.prototype.MANY_SEP7=function(e){this.manySepFirstInternal(7,e)},t.prototype.MANY_SEP8=function(e){this.manySepFirstInternal(8,e)},t.prototype.MANY_SEP9=function(e){this.manySepFirstInternal(9,e)},t.prototype.AT_LEAST_ONE=function(e){this.atLeastOneInternal(0,e)},t.prototype.AT_LEAST_ONE1=function(e){return this.atLeastOneInternal(1,e)},t.prototype.AT_LEAST_ONE2=function(e){this.atLeastOneInternal(2,e)},t.prototype.AT_LEAST_ONE3=function(e){this.atLeastOneInternal(3,e)},t.prototype.AT_LEAST_ONE4=function(e){this.atLeastOneInternal(4,e)},t.prototype.AT_LEAST_ONE5=function(e){this.atLeastOneInternal(5,e)},t.prototype.AT_LEAST_ONE6=function(e){this.atLeastOneInternal(6,e)},t.prototype.AT_LEAST_ONE7=function(e){this.atLeastOneInternal(7,e)},t.prototype.AT_LEAST_ONE8=function(e){this.atLeastOneInternal(8,e)},t.prototype.AT_LEAST_ONE9=function(e){this.atLeastOneInternal(9,e)},t.prototype.AT_LEAST_ONE_SEP=function(e){this.atLeastOneSepFirstInternal(0,e)},t.prototype.AT_LEAST_ONE_SEP1=function(e){this.atLeastOneSepFirstInternal(1,e)},t.prototype.AT_LEAST_ONE_SEP2=function(e){this.atLeastOneSepFirstInternal(2,e)},t.prototype.AT_LEAST_ONE_SEP3=function(e){this.atLeastOneSepFirstInternal(3,e)},t.prototype.AT_LEAST_ONE_SEP4=function(e){this.atLeastOneSepFirstInternal(4,e)},t.prototype.AT_LEAST_ONE_SEP5=function(e){this.atLeastOneSepFirstInternal(5,e)},t.prototype.AT_LEAST_ONE_SEP6=function(e){this.atLeastOneSepFirstInternal(6,e)},t.prototype.AT_LEAST_ONE_SEP7=function(e){this.atLeastOneSepFirstInternal(7,e)},t.prototype.AT_LEAST_ONE_SEP8=function(e){this.atLeastOneSepFirstInternal(8,e)},t.prototype.AT_LEAST_ONE_SEP9=function(e){this.atLeastOneSepFirstInternal(9,e)},t.prototype.RULE=function(e,r,n){if(n===void 0&&(n=KR.DEFAULT_RULE_CONFIG),(0,fse.default)(this.definedRulesNames,e)){var i=hse.defaultGrammarValidatorErrorProvider.buildDuplicateRuleNameError({topLevelRule:e,grammarName:this.className}),o={message:i,type:KR.ParserDefinitionErrorType.DUPLICATE_RULE_NAME,ruleName:e};this.definitionErrors.push(o)}this.definedRulesNames.push(e);var a=this.defineRule(e,r,n);return this[e]=a,a},t.prototype.OVERRIDE_RULE=function(e,r,n){n===void 0&&(n=KR.DEFAULT_RULE_CONFIG);var i=(0,mse.validateRuleIsOverridden)(e,this.definedRulesNames,this.className);this.definitionErrors=this.definitionErrors.concat(i);var o=this.defineRule(e,r,n);return this[e]=o,o},t.prototype.BACKTRACK=function(e,r){return function(){this.isBackTrackingStack.push(1);var n=this.saveRecogState();try{return e.apply(this,r),!0}catch(i){if((0,pse.isRecognitionException)(i))return!1;throw i}finally{this.reloadRecogState(n),this.isBackTrackingStack.pop()}}},t.prototype.getGAstProductions=function(){return this.gastProductionsCache},t.prototype.getSerializedGastProductions=function(){return(0,gse.serializeGrammar)((0,dse.default)(this.gastProductionsCache))},t}();Tu.RecognizerApi=yse});var BM=h(bu=>{"use strict";var Mi=bu&&bu.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(bu,"__esModule",{value:!0});bu.RecognizerEngine=void 0;var FM=Mi(ln()),BR=Mi(ze()),zR=Mi(ei()),jM=Mi(nl()),vse=Mi(Op()),_se=Mi(Jn()),yl=Mi(fn()),vl=Mi(Si()),UM=Mi(go()),GM=Mi(po()),hn=ih(),fh=gu(),HM=hu(),Ru=ll(),WM=rn(),Tse=UR(),KM=$a(),_l=Ma(),Rse=function(){function t(){}return t.prototype.initRecognizerEngine=function(e,r){if(this.className=this.constructor.name,this.shortRuleNameToFull={},this.fullRuleNameToShort={},this.ruleShortNameIdx=256,this.tokenMatcher=_l.tokenStructuredMatcherNoCategories,this.subruleIdx=0,this.definedRulesNames=[],this.tokensMap={},this.isBackTrackingStack=[],this.RULE_STACK=[],this.RULE_OCCURRENCE_STACK=[],this.gastProductionsCache={},(0,yl.default)(r,"serializedGrammar"))throw Error(`The Parser's configuration can no longer contain a <serializedGrammar> property.
	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_6-0-0
	For Further details.`);if((0,BR.default)(e)){if((0,FM.default)(e))throw Error(`A Token Vocabulary cannot be empty.
	Note that the first argument for the parser constructor
	is no longer a Token vector (since v4.0).`);if(typeof e[0].startOffset=="number")throw Error(`The Parser constructor no longer accepts a token vector as the first argument.
	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_4-0-0
	For Further details.`)}if((0,BR.default)(e))this.tokensMap=(0,UM.default)(e,function(s,u){return s[u.name]=u,s},{});else if((0,yl.default)(e,"modes")&&(0,jM.default)((0,zR.default)((0,vl.default)(e.modes)),_l.isTokenType)){var n=(0,zR.default)((0,vl.default)(e.modes)),i=(0,vse.default)(n);this.tokensMap=(0,UM.default)(i,function(s,u){return s[u.name]=u,s},{})}else if((0,_se.default)(e))this.tokensMap=(0,GM.default)(e);else throw new Error("<tokensDictionary> argument must be An Array of Token constructors, A dictionary of Token constructors or an IMultiModeLexerDefinition");this.tokensMap.EOF=KM.EOF;var o=(0,yl.default)(e,"modes")?(0,zR.default)((0,vl.default)(e.modes)):(0,vl.default)(e),a=(0,jM.default)(o,function(s){return(0,FM.default)(s.categoryMatches)});this.tokenMatcher=a?_l.tokenStructuredMatcherNoCategories:_l.tokenStructuredMatcher,(0,_l.augmentTokenTypes)((0,vl.default)(this.tokensMap))},t.prototype.defineRule=function(e,r,n){if(this.selfAnalysisDone)throw Error("Grammar rule <".concat(e,`> may not be defined after the 'performSelfAnalysis' method has been called'
`)+"Make sure that all grammar rule definitions are done before 'performSelfAnalysis' is called.");var i=(0,yl.default)(n,"resyncEnabled")?n.resyncEnabled:WM.DEFAULT_RULE_CONFIG.resyncEnabled,o=(0,yl.default)(n,"recoveryValueFunc")?n.recoveryValueFunc:WM.DEFAULT_RULE_CONFIG.recoveryValueFunc,a=this.ruleShortNameIdx<<hn.BITS_FOR_METHOD_TYPE+hn.BITS_FOR_OCCURRENCE_IDX;this.ruleShortNameIdx++,this.shortRuleNameToFull[a]=e,this.fullRuleNameToShort[e]=a;var s;this.outputCst===!0?s=function(){for(var p=[],m=0;m<arguments.length;m++)p[m]=arguments[m];try{this.ruleInvocationStateUpdate(a,e,this.subruleIdx),r.apply(this,p);var v=this.CST_STACK[this.CST_STACK.length-1];return this.cstPostRule(v),v}catch(P){return this.invokeRuleCatch(P,i,o)}finally{this.ruleFinallyStateUpdate()}}:s=function(){for(var p=[],m=0;m<arguments.length;m++)p[m]=arguments[m];try{return this.ruleInvocationStateUpdate(a,e,this.subruleIdx),r.apply(this,p)}catch(v){return this.invokeRuleCatch(v,i,o)}finally{this.ruleFinallyStateUpdate()}};var u=Object.assign(s,{ruleName:e,originalGrammarAction:r});return u},t.prototype.invokeRuleCatch=function(e,r,n){var i=this.RULE_STACK.length===1,o=r&&!this.isBackTracking()&&this.recoveryEnabled;if((0,fh.isRecognitionException)(e)){var a=e;if(o){var s=this.findReSyncTokenType();if(this.isInCurrentRuleReSyncSet(s))if(a.resyncedTokens=this.reSyncTo(s),this.outputCst){var u=this.CST_STACK[this.CST_STACK.length-1];return u.recoveredNode=!0,u}else return n();else{if(this.outputCst){var u=this.CST_STACK[this.CST_STACK.length-1];u.recoveredNode=!0,a.partialCstResult=u}throw a}}else{if(i)return this.moveToTerminatedState(),n();throw a}}else throw e},t.prototype.optionInternal=function(e,r){var n=this.getKeyForAutomaticLookahead(hn.OPTION_IDX,r);return this.optionInternalLogic(e,r,n)},t.prototype.optionInternalLogic=function(e,r,n){var i=this,o=this.getLaFuncFromCache(n),a;if(typeof e!="function"){a=e.DEF;var s=e.GATE;if(s!==void 0){var u=o;o=function(){return s.call(i)&&u.call(i)}}}else a=e;if(o.call(this)===!0)return a.call(this)},t.prototype.atLeastOneInternal=function(e,r){var n=this.getKeyForAutomaticLookahead(hn.AT_LEAST_ONE_IDX,e);return this.atLeastOneInternalLogic(e,r,n)},t.prototype.atLeastOneInternalLogic=function(e,r,n){var i=this,o=this.getLaFuncFromCache(n),a;if(typeof r!="function"){a=r.DEF;var s=r.GATE;if(s!==void 0){var u=o;o=function(){return s.call(i)&&u.call(i)}}}else a=r;if(o.call(this)===!0)for(var d=this.doSingleRepetition(a);o.call(this)===!0&&d===!0;)d=this.doSingleRepetition(a);else throw this.raiseEarlyExitException(e,HM.PROD_TYPE.REPETITION_MANDATORY,r.ERR_MSG);this.attemptInRepetitionRecovery(this.atLeastOneInternal,[e,r],o,hn.AT_LEAST_ONE_IDX,e,Ru.NextTerminalAfterAtLeastOneWalker)},t.prototype.atLeastOneSepFirstInternal=function(e,r){var n=this.getKeyForAutomaticLookahead(hn.AT_LEAST_ONE_SEP_IDX,e);this.atLeastOneSepFirstInternalLogic(e,r,n)},t.prototype.atLeastOneSepFirstInternalLogic=function(e,r,n){var i=this,o=r.DEF,a=r.SEP,s=this.getLaFuncFromCache(n);if(s.call(this)===!0){o.call(this);for(var u=function(){return i.tokenMatcher(i.LA(1),a)};this.tokenMatcher(this.LA(1),a)===!0;)this.CONSUME(a),o.call(this);this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal,[e,a,u,o,Ru.NextTerminalAfterAtLeastOneSepWalker],u,hn.AT_LEAST_ONE_SEP_IDX,e,Ru.NextTerminalAfterAtLeastOneSepWalker)}else throw this.raiseEarlyExitException(e,HM.PROD_TYPE.REPETITION_MANDATORY_WITH_SEPARATOR,r.ERR_MSG)},t.prototype.manyInternal=function(e,r){var n=this.getKeyForAutomaticLookahead(hn.MANY_IDX,e);return this.manyInternalLogic(e,r,n)},t.prototype.manyInternalLogic=function(e,r,n){var i=this,o=this.getLaFuncFromCache(n),a;if(typeof r!="function"){a=r.DEF;var s=r.GATE;if(s!==void 0){var u=o;o=function(){return s.call(i)&&u.call(i)}}}else a=r;for(var d=!0;o.call(this)===!0&&d===!0;)d=this.doSingleRepetition(a);this.attemptInRepetitionRecovery(this.manyInternal,[e,r],o,hn.MANY_IDX,e,Ru.NextTerminalAfterManyWalker,d)},t.prototype.manySepFirstInternal=function(e,r){var n=this.getKeyForAutomaticLookahead(hn.MANY_SEP_IDX,e);this.manySepFirstInternalLogic(e,r,n)},t.prototype.manySepFirstInternalLogic=function(e,r,n){var i=this,o=r.DEF,a=r.SEP,s=this.getLaFuncFromCache(n);if(s.call(this)===!0){o.call(this);for(var u=function(){return i.tokenMatcher(i.LA(1),a)};this.tokenMatcher(this.LA(1),a)===!0;)this.CONSUME(a),o.call(this);this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal,[e,a,u,o,Ru.NextTerminalAfterManySepWalker],u,hn.MANY_SEP_IDX,e,Ru.NextTerminalAfterManySepWalker)}},t.prototype.repetitionSepSecondInternal=function(e,r,n,i,o){for(;n();)this.CONSUME(r),i.call(this);this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal,[e,r,n,i,o],n,hn.AT_LEAST_ONE_SEP_IDX,e,o)},t.prototype.doSingleRepetition=function(e){var r=this.getLexerPosition();e.call(this);var n=this.getLexerPosition();return n>r},t.prototype.orInternal=function(e,r){var n=this.getKeyForAutomaticLookahead(hn.OR_IDX,r),i=(0,BR.default)(e)?e:e.DEF,o=this.getLaFuncFromCache(n),a=o.call(this,i);if(a!==void 0){var s=i[a];return s.ALT.call(this)}this.raiseNoAltException(r,e.ERR_MSG)},t.prototype.ruleFinallyStateUpdate=function(){if(this.RULE_STACK.pop(),this.RULE_OCCURRENCE_STACK.pop(),this.cstFinallyStateUpdate(),this.RULE_STACK.length===0&&this.isAtEndOfInput()===!1){var e=this.LA(1),r=this.errorMessageProvider.buildNotAllInputParsedMessage({firstRedundant:e,ruleName:this.getCurrRuleFullName()});this.SAVE_ERROR(new fh.NotAllInputParsedException(r,e))}},t.prototype.subruleInternal=function(e,r,n){var i;try{var o=n!==void 0?n.ARGS:void 0;return this.subruleIdx=r,i=e.apply(this,o),this.cstPostNonTerminal(i,n!==void 0&&n.LABEL!==void 0?n.LABEL:e.ruleName),i}catch(a){throw this.subruleInternalError(a,n,e.ruleName)}},t.prototype.subruleInternalError=function(e,r,n){throw(0,fh.isRecognitionException)(e)&&e.partialCstResult!==void 0&&(this.cstPostNonTerminal(e.partialCstResult,r!==void 0&&r.LABEL!==void 0?r.LABEL:n),delete e.partialCstResult),e},t.prototype.consumeInternal=function(e,r,n){var i;try{var o=this.LA(1);this.tokenMatcher(o,e)===!0?(this.consumeToken(),i=o):this.consumeInternalError(e,o,n)}catch(a){i=this.consumeInternalRecovery(e,r,a)}return this.cstPostTerminal(n!==void 0&&n.LABEL!==void 0?n.LABEL:e.name,i),i},t.prototype.consumeInternalError=function(e,r,n){var i,o=this.LA(0);throw n!==void 0&&n.ERR_MSG?i=n.ERR_MSG:i=this.errorMessageProvider.buildMismatchTokenMessage({expected:e,actual:r,previous:o,ruleName:this.getCurrRuleFullName()}),this.SAVE_ERROR(new fh.MismatchedTokenException(i,r,o))},t.prototype.consumeInternalRecovery=function(e,r,n){if(this.recoveryEnabled&&n.name==="MismatchedTokenException"&&!this.isBackTracking()){var i=this.getFollowsForInRuleRecovery(e,r);try{return this.tryInRuleRecovery(e,i)}catch(o){throw o.name===Tse.IN_RULE_RECOVERY_EXCEPTION?n:o}}else throw n},t.prototype.saveRecogState=function(){var e=this.errors,r=(0,GM.default)(this.RULE_STACK);return{errors:e,lexerState:this.exportLexerState(),RULE_STACK:r,CST_STACK:this.CST_STACK}},t.prototype.reloadRecogState=function(e){this.errors=e.errors,this.importLexerState(e.lexerState),this.RULE_STACK=e.RULE_STACK},t.prototype.ruleInvocationStateUpdate=function(e,r,n){this.RULE_OCCURRENCE_STACK.push(n),this.RULE_STACK.push(e),this.cstInvocationStateUpdate(r)},t.prototype.isBackTracking=function(){return this.isBackTrackingStack.length!==0},t.prototype.getCurrRuleFullName=function(){var e=this.getLastExplicitRuleShortName();return this.shortRuleNameToFull[e]},t.prototype.shortRuleNameToFullName=function(e){return this.shortRuleNameToFull[e]},t.prototype.isAtEndOfInput=function(){return this.tokenMatcher(this.LA(1),KM.EOF)},t.prototype.reset=function(){this.resetLexerState(),this.subruleIdx=0,this.isBackTrackingStack=[],this.errors=[],this.RULE_STACK=[],this.CST_STACK=[],this.RULE_OCCURRENCE_STACK=[]},t}();bu.RecognizerEngine=Rse});var XM=h(Cu=>{"use strict";var YM=Cu&&Cu.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(Cu,"__esModule",{value:!0});Cu.ErrorHandler=void 0;var VR=gu(),bse=YM(fn()),zM=YM(po()),VM=hu(),Cse=rn(),Ase=function(){function t(){}return t.prototype.initErrorHandler=function(e){this._errors=[],this.errorMessageProvider=(0,bse.default)(e,"errorMessageProvider")?e.errorMessageProvider:Cse.DEFAULT_PARSER_CONFIG.errorMessageProvider},t.prototype.SAVE_ERROR=function(e){if((0,VR.isRecognitionException)(e))return e.context={ruleStack:this.getHumanReadableRuleStack(),ruleOccurrenceStack:(0,zM.default)(this.RULE_OCCURRENCE_STACK)},this._errors.push(e),e;throw Error("Trying to save an Error which is not a RecognitionException")},Object.defineProperty(t.prototype,"errors",{get:function(){return(0,zM.default)(this._errors)},set:function(e){this._errors=e},enumerable:!1,configurable:!0}),t.prototype.raiseEarlyExitException=function(e,r,n){for(var i=this.getCurrRuleFullName(),o=this.getGAstProductions()[i],a=(0,VM.getLookaheadPathsForOptionalProd)(e,o,r,this.maxLookahead),s=a[0],u=[],d=1;d<=this.maxLookahead;d++)u.push(this.LA(d));var p=this.errorMessageProvider.buildEarlyExitMessage({expectedIterationPaths:s,actual:u,previous:this.LA(0),customUserDescription:n,ruleName:i});throw this.SAVE_ERROR(new VR.EarlyExitException(p,this.LA(1),this.LA(0)))},t.prototype.raiseNoAltException=function(e,r){for(var n=this.getCurrRuleFullName(),i=this.getGAstProductions()[n],o=(0,VM.getLookaheadPathsForOr)(e,i,this.maxLookahead),a=[],s=1;s<=this.maxLookahead;s++)a.push(this.LA(s));var u=this.LA(0),d=this.errorMessageProvider.buildNoViableAltMessage({expectedPathsPerAlt:o,actual:a,previous:u,customUserDescription:r,ruleName:this.getCurrRuleFullName()});throw this.SAVE_ERROR(new VR.NoViableAltException(d,this.LA(1),u))},t}();Cu.ErrorHandler=Ase});var ZM=h(Au=>{"use strict";var QM=Au&&Au.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(Au,"__esModule",{value:!0});Au.ContentAssist=void 0;var JM=ll(),Pse=QM(uu()),Sse=QM(qa()),Ese=function(){function t(){}return t.prototype.initContentAssist=function(){},t.prototype.computeContentAssist=function(e,r){var n=this.gastProductionsCache[e];if((0,Sse.default)(n))throw Error("Rule ->".concat(e,"<- does not exist in this grammar."));return(0,JM.nextPossibleTokensAfter)([n],r,this.tokenMatcher,this.maxLookahead)},t.prototype.getNextPossibleTokenTypes=function(e){var r=(0,Pse.default)(e.ruleStack),n=this.getGAstProductions(),i=n[r],o=new JM.NextAfterTokenWalker(i,e).startWalking();return o},t}();Au.ContentAssist=Ese});var u1=h(Pu=>{"use strict";var Su=Pu&&Pu.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(Pu,"__esModule",{value:!0});Pu.GastRecorder=void 0;var ph=Su(zp()),kse=Su(ze()),Nse=Su(Sp()),wse=Su(ir()),n1=Su(Us()),Rl=Su(fn()),$i=Nt(),Dse=al(),i1=Ma(),o1=$a(),Ose=rn(),Ise=ih(),mh={description:"This Object indicates the Parser is during Recording Phase"};Object.freeze(mh);var e1=!0,t1=Math.pow(2,Ise.BITS_FOR_OCCURRENCE_IDX)-1,a1=(0,o1.createToken)({name:"RECORDING_PHASE_TOKEN",pattern:Dse.Lexer.NA});(0,i1.augmentTokenTypes)([a1]);var s1=(0,o1.createTokenInstance)(a1,`This IToken indicates the Parser is in Recording Phase
	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details`,-1,-1,-1,-1,-1,-1);Object.freeze(s1);var qse={name:`This CSTNode indicates the Parser is in Recording Phase
	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details`,children:{}},xse=function(){function t(){}return t.prototype.initGastRecorder=function(e){this.recordingProdStack=[],this.RECORDING_PHASE=!1},t.prototype.enableRecording=function(){var e=this;this.RECORDING_PHASE=!0,this.TRACE_INIT("Enable Recording",function(){for(var r=function(i){var o=i>0?i:"";e["CONSUME".concat(o)]=function(a,s){return this.consumeInternalRecord(a,i,s)},e["SUBRULE".concat(o)]=function(a,s){return this.subruleInternalRecord(a,i,s)},e["OPTION".concat(o)]=function(a){return this.optionInternalRecord(a,i)},e["OR".concat(o)]=function(a){return this.orInternalRecord(a,i)},e["MANY".concat(o)]=function(a){this.manyInternalRecord(i,a)},e["MANY_SEP".concat(o)]=function(a){this.manySepFirstInternalRecord(i,a)},e["AT_LEAST_ONE".concat(o)]=function(a){this.atLeastOneInternalRecord(i,a)},e["AT_LEAST_ONE_SEP".concat(o)]=function(a){this.atLeastOneSepFirstInternalRecord(i,a)}},n=0;n<10;n++)r(n);e.consume=function(i,o,a){return this.consumeInternalRecord(o,i,a)},e.subrule=function(i,o,a){return this.subruleInternalRecord(o,i,a)},e.option=function(i,o){return this.optionInternalRecord(o,i)},e.or=function(i,o){return this.orInternalRecord(o,i)},e.many=function(i,o){this.manyInternalRecord(i,o)},e.atLeastOne=function(i,o){this.atLeastOneInternalRecord(i,o)},e.ACTION=e.ACTION_RECORD,e.BACKTRACK=e.BACKTRACK_RECORD,e.LA=e.LA_RECORD})},t.prototype.disableRecording=function(){var e=this;this.RECORDING_PHASE=!1,this.TRACE_INIT("Deleting Recording methods",function(){for(var r=e,n=0;n<10;n++){var i=n>0?n:"";delete r["CONSUME".concat(i)],delete r["SUBRULE".concat(i)],delete r["OPTION".concat(i)],delete r["OR".concat(i)],delete r["MANY".concat(i)],delete r["MANY_SEP".concat(i)],delete r["AT_LEAST_ONE".concat(i)],delete r["AT_LEAST_ONE_SEP".concat(i)]}delete r.consume,delete r.subrule,delete r.option,delete r.or,delete r.many,delete r.atLeastOne,delete r.ACTION,delete r.BACKTRACK,delete r.LA})},t.prototype.ACTION_RECORD=function(e){},t.prototype.BACKTRACK_RECORD=function(e,r){return function(){return!0}},t.prototype.LA_RECORD=function(e){return Ose.END_OF_FILE},t.prototype.topLevelRuleRecord=function(e,r){try{var n=new $i.Rule({definition:[],name:e});return n.name=e,this.recordingProdStack.push(n),r.call(this),this.recordingProdStack.pop(),n}catch(i){if(i.KNOWN_RECORDER_ERROR!==!0)try{i.message=i.message+`
	 This error was thrown during the "grammar recording phase" For more info see:
	https://chevrotain.io/docs/guide/internals.html#grammar-recording`}catch{throw i}throw i}},t.prototype.optionInternalRecord=function(e,r){return Tl.call(this,$i.Option,e,r)},t.prototype.atLeastOneInternalRecord=function(e,r){Tl.call(this,$i.RepetitionMandatory,r,e)},t.prototype.atLeastOneSepFirstInternalRecord=function(e,r){Tl.call(this,$i.RepetitionMandatoryWithSeparator,r,e,e1)},t.prototype.manyInternalRecord=function(e,r){Tl.call(this,$i.Repetition,r,e)},t.prototype.manySepFirstInternalRecord=function(e,r){Tl.call(this,$i.RepetitionWithSeparator,r,e,e1)},t.prototype.orInternalRecord=function(e,r){return Lse.call(this,e,r)},t.prototype.subruleInternalRecord=function(e,r,n){if(hh(r),!e||(0,Rl.default)(e,"ruleName")===!1){var i=new Error("<SUBRULE".concat(r1(r),"> argument is invalid")+" expecting a Parser method reference but got: <".concat(JSON.stringify(e),">")+`
 inside top level rule: <`.concat(this.recordingProdStack[0].name,">"));throw i.KNOWN_RECORDER_ERROR=!0,i}var o=(0,ph.default)(this.recordingProdStack),a=e.ruleName,s=new $i.NonTerminal({idx:r,nonTerminalName:a,label:n?.LABEL,referencedRule:void 0});return o.definition.push(s),this.outputCst?qse:mh},t.prototype.consumeInternalRecord=function(e,r,n){if(hh(r),!(0,i1.hasShortKeyProperty)(e)){var i=new Error("<CONSUME".concat(r1(r),"> argument is invalid")+" expecting a TokenType reference but got: <".concat(JSON.stringify(e),">")+`
 inside top level rule: <`.concat(this.recordingProdStack[0].name,">"));throw i.KNOWN_RECORDER_ERROR=!0,i}var o=(0,ph.default)(this.recordingProdStack),a=new $i.Terminal({idx:r,terminalType:e,label:n?.LABEL});return o.definition.push(a),s1},t}();Pu.GastRecorder=xse;function Tl(t,e,r,n){n===void 0&&(n=!1),hh(r);var i=(0,ph.default)(this.recordingProdStack),o=(0,n1.default)(e)?e:e.DEF,a=new t({definition:[],idx:r});return n&&(a.separator=e.SEP),(0,Rl.default)(e,"MAX_LOOKAHEAD")&&(a.maxLookahead=e.MAX_LOOKAHEAD),this.recordingProdStack.push(a),o.call(this),i.definition.push(a),this.recordingProdStack.pop(),mh}function Lse(t,e){var r=this;hh(e);var n=(0,ph.default)(this.recordingProdStack),i=(0,kse.default)(t)===!1,o=i===!1?t:t.DEF,a=new $i.Alternation({definition:[],idx:e,ignoreAmbiguities:i&&t.IGNORE_AMBIGUITIES===!0});(0,Rl.default)(t,"MAX_LOOKAHEAD")&&(a.maxLookahead=t.MAX_LOOKAHEAD);var s=(0,Nse.default)(o,function(u){return(0,n1.default)(u.GATE)});return a.hasPredicates=s,n.definition.push(a),(0,wse.default)(o,function(u){var d=new $i.Alternative({definition:[]});a.definition.push(d),(0,Rl.default)(u,"IGNORE_AMBIGUITIES")?d.ignoreAmbiguities=u.IGNORE_AMBIGUITIES:(0,Rl.default)(u,"GATE")&&(d.ignoreAmbiguities=!0),r.recordingProdStack.push(d),u.ALT.call(r),r.recordingProdStack.pop()}),mh}function r1(t){return t===0?"":"".concat(t)}function hh(t){if(t<0||t>t1){var e=new Error("Invalid DSL Method idx value: <".concat(t,`>
	`)+"Idx value must be a none negative value smaller than ".concat(t1+1));throw e.KNOWN_RECORDER_ERROR=!0,e}}});var c1=h(Eu=>{"use strict";var Mse=Eu&&Eu.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(Eu,"__esModule",{value:!0});Eu.PerformanceTracer=void 0;var $se=Mse(fn()),Fse=iu(),jse=rn(),Use=function(){function t(){}return t.prototype.initPerformanceTracer=function(e){if((0,$se.default)(e,"traceInitPerf")){var r=e.traceInitPerf,n=typeof r=="number";this.traceInitMaxIdent=n?r:1/0,this.traceInitPerf=n?r>0:r}else this.traceInitMaxIdent=0,this.traceInitPerf=jse.DEFAULT_PARSER_CONFIG.traceInitPerf;this.traceInitIndent=-1},t.prototype.TRACE_INIT=function(e,r){if(this.traceInitPerf===!0){this.traceInitIndent++;var n=new Array(this.traceInitIndent+1).join("	");this.traceInitIndent<this.traceInitMaxIdent&&console.log("".concat(n,"--> <").concat(e,">"));var i=(0,Fse.timer)(r),o=i.time,a=i.value,s=o>10?console.warn:console.log;return this.traceInitIndent<this.traceInitMaxIdent&&s("".concat(n,"<-- <").concat(e,"> time: ").concat(o,"ms")),this.traceInitIndent--,a}else return r()},t}();Eu.PerformanceTracer=Use});var l1=h(gh=>{"use strict";Object.defineProperty(gh,"__esModule",{value:!0});gh.applyMixins=void 0;function Gse(t,e){e.forEach(function(r){var n=r.prototype;Object.getOwnPropertyNames(n).forEach(function(i){if(i!=="constructor"){var o=Object.getOwnPropertyDescriptor(n,i);o&&(o.get||o.set)?Object.defineProperty(t.prototype,i,o):t.prototype[i]=r.prototype[i]}})})}gh.applyMixins=Gse});var rn=h(tt=>{"use strict";var h1=tt&&tt.__extends||function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(n[o]=i[o])},t(e,r)};return function(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");t(e,r);function n(){this.constructor=e}e.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}(),ku=tt&&tt.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(tt,"__esModule",{value:!0});tt.EmbeddedActionsParser=tt.CstParser=tt.Parser=tt.EMPTY_ALT=tt.ParserDefinitionErrorType=tt.DEFAULT_RULE_CONFIG=tt.DEFAULT_PARSER_CONFIG=tt.END_OF_FILE=void 0;var YR=ku(ln()),Hse=ku(nr()),Wse=ku(ir()),oa=ku(Si()),d1=ku(fn()),m1=ku(po()),Kse=iu(),Bse=Vq(),f1=$a(),g1=pu(),p1=sM(),zse=UR(),Vse=RM(),Yse=qM(),Xse=LM(),Jse=$M(),Qse=BM(),Zse=XM(),eue=ZM(),tue=u1(),rue=c1(),nue=l1(),iue=pl();tt.END_OF_FILE=(0,f1.createTokenInstance)(f1.EOF,"",NaN,NaN,NaN,NaN,NaN,NaN);Object.freeze(tt.END_OF_FILE);tt.DEFAULT_PARSER_CONFIG=Object.freeze({recoveryEnabled:!1,maxLookahead:3,dynamicTokensEnabled:!1,outputCst:!0,errorMessageProvider:g1.defaultParserErrorProvider,nodeLocationTracking:"none",traceInitPerf:!1,skipValidations:!1});tt.DEFAULT_RULE_CONFIG=Object.freeze({recoveryValueFunc:function(){},resyncEnabled:!0});var oue;(function(t){t[t.INVALID_RULE_NAME=0]="INVALID_RULE_NAME",t[t.DUPLICATE_RULE_NAME=1]="DUPLICATE_RULE_NAME",t[t.INVALID_RULE_OVERRIDE=2]="INVALID_RULE_OVERRIDE",t[t.DUPLICATE_PRODUCTIONS=3]="DUPLICATE_PRODUCTIONS",t[t.UNRESOLVED_SUBRULE_REF=4]="UNRESOLVED_SUBRULE_REF",t[t.LEFT_RECURSION=5]="LEFT_RECURSION",t[t.NONE_LAST_EMPTY_ALT=6]="NONE_LAST_EMPTY_ALT",t[t.AMBIGUOUS_ALTS=7]="AMBIGUOUS_ALTS",t[t.CONFLICT_TOKENS_RULES_NAMESPACE=8]="CONFLICT_TOKENS_RULES_NAMESPACE",t[t.INVALID_TOKEN_NAME=9]="INVALID_TOKEN_NAME",t[t.NO_NON_EMPTY_LOOKAHEAD=10]="NO_NON_EMPTY_LOOKAHEAD",t[t.AMBIGUOUS_PREFIX_ALTS=11]="AMBIGUOUS_PREFIX_ALTS",t[t.TOO_MANY_ALTS=12]="TOO_MANY_ALTS",t[t.CUSTOM_LOOKAHEAD_VALIDATION=13]="CUSTOM_LOOKAHEAD_VALIDATION"})(oue=tt.ParserDefinitionErrorType||(tt.ParserDefinitionErrorType={}));function aue(t){return t===void 0&&(t=void 0),function(){return t}}tt.EMPTY_ALT=aue;var yh=function(){function t(e,r){this.definitionErrors=[],this.selfAnalysisDone=!1;var n=this;if(n.initErrorHandler(r),n.initLexerAdapter(),n.initLooksAhead(r),n.initRecognizerEngine(e,r),n.initRecoverable(r),n.initTreeBuilder(r),n.initContentAssist(),n.initGastRecorder(r),n.initPerformanceTracer(r),(0,d1.default)(r,"ignoredIssues"))throw new Error(`The <ignoredIssues> IParserConfig property has been deprecated.
	Please use the <IGNORE_AMBIGUITIES> flag on the relevant DSL method instead.
	See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#IGNORING_AMBIGUITIES
	For further details.`);this.skipValidations=(0,d1.default)(r,"skipValidations")?r.skipValidations:tt.DEFAULT_PARSER_CONFIG.skipValidations}return t.performSelfAnalysis=function(e){throw Error("The **static** `performSelfAnalysis` method has been deprecated.	\nUse the **instance** method with the same name instead.")},t.prototype.performSelfAnalysis=function(){var e=this;this.TRACE_INIT("performSelfAnalysis",function(){var r;e.selfAnalysisDone=!0;var n=e.className;e.TRACE_INIT("toFastProps",function(){(0,Kse.toFastProperties)(e)}),e.TRACE_INIT("Grammar Recording",function(){try{e.enableRecording(),(0,Wse.default)(e.definedRulesNames,function(o){var a=e[o],s=a.originalGrammarAction,u;e.TRACE_INIT("".concat(o," Rule"),function(){u=e.topLevelRuleRecord(o,s)}),e.gastProductionsCache[o]=u})}finally{e.disableRecording()}});var i=[];if(e.TRACE_INIT("Grammar Resolving",function(){i=(0,p1.resolveGrammar)({rules:(0,oa.default)(e.gastProductionsCache)}),e.definitionErrors=e.definitionErrors.concat(i)}),e.TRACE_INIT("Grammar Validations",function(){if((0,YR.default)(i)&&e.skipValidations===!1){var o=(0,p1.validateGrammar)({rules:(0,oa.default)(e.gastProductionsCache),tokenTypes:(0,oa.default)(e.tokensMap),errMsgProvider:g1.defaultGrammarValidatorErrorProvider,grammarName:n}),a=(0,iue.validateLookahead)({lookaheadStrategy:e.lookaheadStrategy,rules:(0,oa.default)(e.gastProductionsCache),tokenTypes:(0,oa.default)(e.tokensMap),grammarName:n});e.definitionErrors=e.definitionErrors.concat(o,a)}}),(0,YR.default)(e.definitionErrors)&&(e.recoveryEnabled&&e.TRACE_INIT("computeAllProdsFollows",function(){var o=(0,Bse.computeAllProdsFollows)((0,oa.default)(e.gastProductionsCache));e.resyncFollows=o}),e.TRACE_INIT("ComputeLookaheadFunctions",function(){var o,a;(a=(o=e.lookaheadStrategy).initialize)===null||a===void 0||a.call(o,{rules:(0,oa.default)(e.gastProductionsCache)}),e.preComputeLookaheadFunctions((0,oa.default)(e.gastProductionsCache))})),!t.DEFER_DEFINITION_ERRORS_HANDLING&&!(0,YR.default)(e.definitionErrors))throw r=(0,Hse.default)(e.definitionErrors,function(o){return o.message}),new Error(`Parser Definition Errors detected:
 `.concat(r.join(`
-------------------------------
`)))})},t.DEFER_DEFINITION_ERRORS_HANDLING=!1,t}();tt.Parser=yh;(0,nue.applyMixins)(yh,[zse.Recoverable,Vse.LooksAhead,Yse.TreeBuilder,Xse.LexerAdapter,Qse.RecognizerEngine,Jse.RecognizerApi,Zse.ErrorHandler,eue.ContentAssist,tue.GastRecorder,rue.PerformanceTracer]);var sue=function(t){h1(e,t);function e(r,n){n===void 0&&(n=tt.DEFAULT_PARSER_CONFIG);var i=(0,m1.default)(n);return i.outputCst=!0,t.call(this,r,i)||this}return e}(yh);tt.CstParser=sue;var uue=function(t){h1(e,t);function e(r,n){n===void 0&&(n=tt.DEFAULT_PARSER_CONFIG);var i=(0,m1.default)(n);return i.outputCst=!1,t.call(this,r,i)||this}return e}(yh);tt.EmbeddedActionsParser=uue});var v1=h(aa=>{"use strict";var cue=aa&&aa.__extends||function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(n[o]=i[o])},t(e,r)};return function(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");t(e,r);function n(){this.constructor=e}e.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}(),Nu=aa&&aa.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(aa,"__esModule",{value:!0});aa.buildModel=void 0;var y1=Nt(),bl=Nu(nr()),lue=Nu(ei()),due=Nu(Si()),fue=Nu(Sp()),pue=Nu(SR()),hue=Nu(tl());function mue(t){var e=new gue,r=(0,due.default)(t);return(0,bl.default)(r,function(n){return e.visitRule(n)})}aa.buildModel=mue;var gue=function(t){cue(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e.prototype.visitRule=function(r){var n=this.visitEach(r.definition),i=(0,pue.default)(n,function(a){return a.propertyName}),o=(0,bl.default)(i,function(a,s){var u=!(0,fue.default)(a,function(p){return!p.canBeNull}),d=a[0].type;return a.length>1&&(d=(0,bl.default)(a,function(p){return p.type})),{name:s,type:d,optional:u}});return{name:r.name,properties:o}},e.prototype.visitAlternative=function(r){return this.visitEachAndOverrideWith(r.definition,{canBeNull:!0})},e.prototype.visitOption=function(r){return this.visitEachAndOverrideWith(r.definition,{canBeNull:!0})},e.prototype.visitRepetition=function(r){return this.visitEachAndOverrideWith(r.definition,{canBeNull:!0})},e.prototype.visitRepetitionMandatory=function(r){return this.visitEach(r.definition)},e.prototype.visitRepetitionMandatoryWithSeparator=function(r){return this.visitEach(r.definition).concat({propertyName:r.separator.name,canBeNull:!0,type:vh(r.separator)})},e.prototype.visitRepetitionWithSeparator=function(r){return this.visitEachAndOverrideWith(r.definition,{canBeNull:!0}).concat({propertyName:r.separator.name,canBeNull:!0,type:vh(r.separator)})},e.prototype.visitAlternation=function(r){return this.visitEachAndOverrideWith(r.definition,{canBeNull:!0})},e.prototype.visitTerminal=function(r){return[{propertyName:r.label||r.terminalType.name,canBeNull:!1,type:vh(r)}]},e.prototype.visitNonTerminal=function(r){return[{propertyName:r.label||r.nonTerminalName,canBeNull:!1,type:vh(r)}]},e.prototype.visitEachAndOverrideWith=function(r,n){return(0,bl.default)(this.visitEach(r),function(i){return(0,hue.default)({},i,n)})},e.prototype.visitEach=function(r){var n=this;return(0,lue.default)((0,bl.default)(r,function(i){return n.visit(i)}))},e}(y1.GAstVisitor);function vh(t){return t instanceof y1.NonTerminal?{kind:"rule",name:t.referencedRule.name}:{kind:"token"}}});var T1=h((PCe,_1)=>{var yue=Tp();function vue(t,e,r){var n=t.length;return r=r===void 0?n:r,!e&&r>=n?t:yue(t,e,r)}_1.exports=vue});var XR=h((SCe,R1)=>{var _ue="\\ud800-\\udfff",Tue="\\u0300-\\u036f",Rue="\\ufe20-\\ufe2f",bue="\\u20d0-\\u20ff",Cue=Tue+Rue+bue,Aue="\\ufe0e\\ufe0f",Pue="\\u200d",Sue=RegExp("["+Pue+_ue+Cue+Aue+"]");function Eue(t){return Sue.test(t)}R1.exports=Eue});var C1=h((ECe,b1)=>{function kue(t){return t.split("")}b1.exports=kue});var D1=h((kCe,w1)=>{var A1="\\ud800-\\udfff",Nue="\\u0300-\\u036f",wue="\\ufe20-\\ufe2f",Due="\\u20d0-\\u20ff",Oue=Nue+wue+Due,Iue="\\ufe0e\\ufe0f",que="["+A1+"]",JR="["+Oue+"]",QR="\\ud83c[\\udffb-\\udfff]",xue="(?:"+JR+"|"+QR+")",P1="[^"+A1+"]",S1="(?:\\ud83c[\\udde6-\\uddff]){2}",E1="[\\ud800-\\udbff][\\udc00-\\udfff]",Lue="\\u200d",k1=xue+"?",N1="["+Iue+"]?",Mue="(?:"+Lue+"(?:"+[P1,S1,E1].join("|")+")"+N1+k1+")*",$ue=N1+k1+Mue,Fue="(?:"+[P1+JR+"?",JR,S1,E1,que].join("|")+")",jue=RegExp(QR+"(?="+QR+")|"+Fue+$ue,"g");function Uue(t){return t.match(jue)||[]}w1.exports=Uue});var I1=h((NCe,O1)=>{var Gue=C1(),Hue=XR(),Wue=D1();function Kue(t){return Hue(t)?Wue(t):Gue(t)}O1.exports=Kue});var x1=h((wCe,q1)=>{var Bue=T1(),zue=XR(),Vue=I1(),Yue=LT();function Xue(t){return function(e){e=Yue(e);var r=zue(e)?Vue(e):void 0,n=r?r[0]:e.charAt(0),i=r?Bue(r,1).join(""):e.slice(1);return n[t]()+i}}q1.exports=Xue});var M1=h((DCe,L1)=>{var Jue=x1(),Que=Jue("toUpperCase");L1.exports=Que});var U1=h(wu=>{"use strict";var Du=wu&&wu.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(wu,"__esModule",{value:!0});wu.genDts=void 0;var Zue=Du(ei()),ece=Du(ze()),_h=Du(nr()),tce=Du(go()),rce=Du(Op()),F1=Du(M1());function nce(t,e){var r=[];return r=r.concat('import type { CstNode, ICstVisitor, IToken } from "chevrotain";'),r=r.concat((0,Zue.default)((0,_h.default)(t,function(n){return ice(n)}))),e.includeVisitorInterface&&(r=r.concat(uce(e.visitorInterfaceName,t))),r.join(`

`)+`
`}wu.genDts=nce;function ice(t){var e=oce(t),r=ace(t);return[e,r]}function oce(t){var e=j1(t.name),r=ZR(t.name);return"export interface ".concat(e,` extends CstNode {
  name: "`).concat(t.name,`";
  children: `).concat(r,`;
}`)}function ace(t){var e=ZR(t.name);return"export type ".concat(e,` = {
  `).concat((0,_h.default)(t.properties,function(r){return sce(r)}).join(`
  `),`
};`)}function sce(t){var e=lce(t.type);return"".concat(t.name).concat(t.optional?"?":"",": ").concat(e,"[];")}function uce(t,e){return"export interface ".concat(t,`<IN, OUT> extends ICstVisitor<IN, OUT> {
  `).concat((0,_h.default)(e,function(r){return cce(r)}).join(`
  `),`
}`)}function cce(t){var e=ZR(t.name);return"".concat(t.name,"(children: ").concat(e,", param?: IN): OUT;")}function lce(t){if((0,ece.default)(t)){var e=(0,rce.default)((0,_h.default)(t,function(n){return $1(n)})),r=(0,tce.default)(e,function(n,i){return n+" | "+i});return"("+r+")"}else return $1(t)}function $1(t){return t.kind==="token"?"IToken":j1(t.name)}function j1(t){return(0,F1.default)(t)+"CstNode"}function ZR(t){return(0,F1.default)(t)+"CstChildren"}});var G1=h(Ou=>{"use strict";var Th=Ou&&Ou.__assign||function(){return Th=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++){e=arguments[r];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},Th.apply(this,arguments)};Object.defineProperty(Ou,"__esModule",{value:!0});Ou.generateCstDts=void 0;var dce=v1(),fce=U1(),pce={includeVisitorInterface:!0,visitorInterfaceName:"ICstNodeVisitor"};function hce(t,e){var r=Th(Th({},pce),e),n=(0,dce.buildModel)(t);return(0,fce.genDts)(n,r)}Ou.generateCstDts=hce});var W1=h(Rh=>{"use strict";Object.defineProperty(Rh,"__esModule",{value:!0});Rh.createSyntaxDiagramsCode=void 0;var H1=lT();function mce(t,e){var r=e===void 0?{}:e,n=r.resourceBase,i=n===void 0?"https://unpkg.com/chevrotain@".concat(H1.VERSION,"/diagrams/"):n,o=r.css,a=o===void 0?"https://unpkg.com/chevrotain@".concat(H1.VERSION,"/diagrams/diagrams.css"):o,s=`
<!-- This is a generated file -->
<!DOCTYPE html>
<meta charset="utf-8">
<style>
  body {
    background-color: hsl(30, 20%, 95%)
  }
</style>

`,u=`
<link rel='stylesheet' href='`.concat(a,`'>
`),d=`
<script src='`.concat(i,`vendor/railroad-diagrams.js'><\/script>
<script src='`).concat(i,`src/diagrams_builder.js'><\/script>
<script src='`).concat(i,`src/diagrams_behavior.js'><\/script>
<script src='`).concat(i,`src/main.js'><\/script>
`),p=`
<div id="diagrams" align="center"></div>    
`,m=`
<script>
    window.serializedGrammar = `.concat(JSON.stringify(t,null,"  "),`;
<\/script>
`),v=`
<script>
    var diagramsDiv = document.getElementById("diagrams");
    main.drawDiagramsFromSerializedGrammar(serializedGrammar, diagramsDiv);
<\/script>
`;return s+u+d+p+m+v}Rh.createSyntaxDiagramsCode=mce});var Ba=h(z=>{"use strict";Object.defineProperty(z,"__esModule",{value:!0});z.Parser=z.createSyntaxDiagramsCode=z.clearCache=z.generateCstDts=z.GAstVisitor=z.serializeProduction=z.serializeGrammar=z.Terminal=z.Rule=z.RepetitionWithSeparator=z.RepetitionMandatoryWithSeparator=z.RepetitionMandatory=z.Repetition=z.Option=z.NonTerminal=z.Alternative=z.Alternation=z.defaultLexerErrorProvider=z.NoViableAltException=z.NotAllInputParsedException=z.MismatchedTokenException=z.isRecognitionException=z.EarlyExitException=z.defaultParserErrorProvider=z.LLkLookaheadStrategy=z.getLookaheadPaths=z.tokenName=z.tokenMatcher=z.tokenLabel=z.EOF=z.createTokenInstance=z.createToken=z.LexerDefinitionErrorType=z.Lexer=z.EMPTY_ALT=z.ParserDefinitionErrorType=z.EmbeddedActionsParser=z.CstParser=z.VERSION=void 0;var gce=lT();Object.defineProperty(z,"VERSION",{enumerable:!0,get:function(){return gce.VERSION}});var bh=rn();Object.defineProperty(z,"CstParser",{enumerable:!0,get:function(){return bh.CstParser}});Object.defineProperty(z,"EmbeddedActionsParser",{enumerable:!0,get:function(){return bh.EmbeddedActionsParser}});Object.defineProperty(z,"ParserDefinitionErrorType",{enumerable:!0,get:function(){return bh.ParserDefinitionErrorType}});Object.defineProperty(z,"EMPTY_ALT",{enumerable:!0,get:function(){return bh.EMPTY_ALT}});var K1=al();Object.defineProperty(z,"Lexer",{enumerable:!0,get:function(){return K1.Lexer}});Object.defineProperty(z,"LexerDefinitionErrorType",{enumerable:!0,get:function(){return K1.LexerDefinitionErrorType}});var Iu=$a();Object.defineProperty(z,"createToken",{enumerable:!0,get:function(){return Iu.createToken}});Object.defineProperty(z,"createTokenInstance",{enumerable:!0,get:function(){return Iu.createTokenInstance}});Object.defineProperty(z,"EOF",{enumerable:!0,get:function(){return Iu.EOF}});Object.defineProperty(z,"tokenLabel",{enumerable:!0,get:function(){return Iu.tokenLabel}});Object.defineProperty(z,"tokenMatcher",{enumerable:!0,get:function(){return Iu.tokenMatcher}});Object.defineProperty(z,"tokenName",{enumerable:!0,get:function(){return Iu.tokenName}});var yce=hu();Object.defineProperty(z,"getLookaheadPaths",{enumerable:!0,get:function(){return yce.getLookaheadPaths}});var vce=HR();Object.defineProperty(z,"LLkLookaheadStrategy",{enumerable:!0,get:function(){return vce.LLkLookaheadStrategy}});var _ce=pu();Object.defineProperty(z,"defaultParserErrorProvider",{enumerable:!0,get:function(){return _ce.defaultParserErrorProvider}});var Cl=gu();Object.defineProperty(z,"EarlyExitException",{enumerable:!0,get:function(){return Cl.EarlyExitException}});Object.defineProperty(z,"isRecognitionException",{enumerable:!0,get:function(){return Cl.isRecognitionException}});Object.defineProperty(z,"MismatchedTokenException",{enumerable:!0,get:function(){return Cl.MismatchedTokenException}});Object.defineProperty(z,"NotAllInputParsedException",{enumerable:!0,get:function(){return Cl.NotAllInputParsedException}});Object.defineProperty(z,"NoViableAltException",{enumerable:!0,get:function(){return Cl.NoViableAltException}});var Tce=yR();Object.defineProperty(z,"defaultLexerErrorProvider",{enumerable:!0,get:function(){return Tce.defaultLexerErrorProvider}});var Fi=Nt();Object.defineProperty(z,"Alternation",{enumerable:!0,get:function(){return Fi.Alternation}});Object.defineProperty(z,"Alternative",{enumerable:!0,get:function(){return Fi.Alternative}});Object.defineProperty(z,"NonTerminal",{enumerable:!0,get:function(){return Fi.NonTerminal}});Object.defineProperty(z,"Option",{enumerable:!0,get:function(){return Fi.Option}});Object.defineProperty(z,"Repetition",{enumerable:!0,get:function(){return Fi.Repetition}});Object.defineProperty(z,"RepetitionMandatory",{enumerable:!0,get:function(){return Fi.RepetitionMandatory}});Object.defineProperty(z,"RepetitionMandatoryWithSeparator",{enumerable:!0,get:function(){return Fi.RepetitionMandatoryWithSeparator}});Object.defineProperty(z,"RepetitionWithSeparator",{enumerable:!0,get:function(){return Fi.RepetitionWithSeparator}});Object.defineProperty(z,"Rule",{enumerable:!0,get:function(){return Fi.Rule}});Object.defineProperty(z,"Terminal",{enumerable:!0,get:function(){return Fi.Terminal}});var eb=Nt();Object.defineProperty(z,"serializeGrammar",{enumerable:!0,get:function(){return eb.serializeGrammar}});Object.defineProperty(z,"serializeProduction",{enumerable:!0,get:function(){return eb.serializeProduction}});Object.defineProperty(z,"GAstVisitor",{enumerable:!0,get:function(){return eb.GAstVisitor}});var Rce=G1();Object.defineProperty(z,"generateCstDts",{enumerable:!0,get:function(){return Rce.generateCstDts}});function bce(){console.warn(`The clearCache function was 'soft' removed from the Chevrotain API.
	 It performs no action other than printing this message.
	 Please avoid using it as it will be completely removed in the future`)}z.clearCache=bce;var Cce=W1();Object.defineProperty(z,"createSyntaxDiagramsCode",{enumerable:!0,get:function(){return Cce.createSyntaxDiagramsCode}});var Ace=function(){function t(){throw new Error(`The Parser class has been deprecated, use CstParser or EmbeddedActionsParser instead.	
See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_7-0-0`)}return t}();z.Parser=Ace});var J1=h(oe=>{"use strict";var B1=oe&&oe.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(oe,"__esModule",{value:!0});oe.createATN=oe.RuleTransition=oe.EpsilonTransition=oe.AtomTransition=oe.AbstractTransition=oe.ATN_LOOP_END=oe.ATN_PLUS_LOOP_BACK=oe.ATN_STAR_LOOP_ENTRY=oe.ATN_STAR_LOOP_BACK=oe.ATN_BLOCK_END=oe.ATN_RULE_STOP=oe.ATN_TOKEN_START=oe.ATN_STAR_BLOCK_START=oe.ATN_PLUS_BLOCK_START=oe.ATN_RULE_START=oe.ATN_BASIC=oe.ATN_INVALID_TYPE=oe.buildATNKey=void 0;var z1=B1(nr()),Pce=B1(ol()),nn=Ba();function Pl(t,e,r){return`${t.name}_${e}_${r}`}oe.buildATNKey=Pl;oe.ATN_INVALID_TYPE=0;oe.ATN_BASIC=1;oe.ATN_RULE_START=2;oe.ATN_PLUS_BLOCK_START=4;oe.ATN_STAR_BLOCK_START=5;oe.ATN_TOKEN_START=6;oe.ATN_RULE_STOP=7;oe.ATN_BLOCK_END=8;oe.ATN_STAR_LOOP_BACK=9;oe.ATN_STAR_LOOP_ENTRY=10;oe.ATN_PLUS_LOOP_BACK=11;oe.ATN_LOOP_END=12;var qu=class{constructor(e){this.target=e}isEpsilon(){return!1}};oe.AbstractTransition=qu;var Ch=class extends qu{constructor(e,r){super(e),this.tokenType=r}};oe.AtomTransition=Ch;var Ah=class extends qu{constructor(e){super(e)}isEpsilon(){return!0}};oe.EpsilonTransition=Ah;var Al=class extends qu{constructor(e,r,n){super(e),this.rule=r,this.followState=n}isEpsilon(){return!0}};oe.RuleTransition=Al;function Sce(t){let e={decisionMap:{},decisionStates:[],ruleToStartState:new Map,ruleToStopState:new Map,states:[]};Ece(e,t);let r=t.length;for(let n=0;n<r;n++){let i=t[n],o=za(e,i,i);o!==void 0&&$ce(e,i,o)}return e}oe.createATN=Sce;function Ece(t,e){let r=e.length;for(let n=0;n<r;n++){let i=e[n],o=ar(t,i,void 0,{type:oe.ATN_RULE_START}),a=ar(t,i,void 0,{type:oe.ATN_RULE_STOP});o.stop=a,t.ruleToStartState.set(i,o),t.ruleToStopState.set(i,a)}}function V1(t,e,r){return r instanceof nn.Terminal?tb(t,e,r.terminalType,r):r instanceof nn.NonTerminal?Mce(t,e,r):r instanceof nn.Alternation?Oce(t,e,r):r instanceof nn.Option?Ice(t,e,r):r instanceof nn.Repetition?kce(t,e,r):r instanceof nn.RepetitionWithSeparator?Nce(t,e,r):r instanceof nn.RepetitionMandatory?wce(t,e,r):r instanceof nn.RepetitionMandatoryWithSeparator?Dce(t,e,r):za(t,e,r)}function kce(t,e,r){let n=ar(t,e,r,{type:oe.ATN_STAR_BLOCK_START});sa(t,n);let i=xu(t,e,n,r,za(t,e,r));return X1(t,e,r,i)}function Nce(t,e,r){let n=ar(t,e,r,{type:oe.ATN_STAR_BLOCK_START});sa(t,n);let i=xu(t,e,n,r,za(t,e,r)),o=tb(t,e,r.separator,r);return X1(t,e,r,i,o)}function wce(t,e,r){let n=ar(t,e,r,{type:oe.ATN_PLUS_BLOCK_START});sa(t,n);let i=xu(t,e,n,r,za(t,e,r));return Y1(t,e,r,i)}function Dce(t,e,r){let n=ar(t,e,r,{type:oe.ATN_PLUS_BLOCK_START});sa(t,n);let i=xu(t,e,n,r,za(t,e,r)),o=tb(t,e,r.separator,r);return Y1(t,e,r,i,o)}function Oce(t,e,r){let n=ar(t,e,r,{type:oe.ATN_BASIC});sa(t,n);let i=(0,z1.default)(r.definition,a=>V1(t,e,a));return xu(t,e,n,r,...i)}function Ice(t,e,r){let n=ar(t,e,r,{type:oe.ATN_BASIC});sa(t,n);let i=xu(t,e,n,r,za(t,e,r));return qce(t,e,r,i)}function za(t,e,r){let n=(0,Pce.default)((0,z1.default)(r.definition,i=>V1(t,e,i)),i=>i!==void 0);return n.length===1?n[0]:n.length===0?void 0:Lce(t,n)}function Y1(t,e,r,n,i){let o=n.left,a=n.right,s=ar(t,e,r,{type:oe.ATN_PLUS_LOOP_BACK});sa(t,s);let u=ar(t,e,r,{type:oe.ATN_LOOP_END});return o.loopback=s,u.loopback=s,t.decisionMap[Pl(e,i?"RepetitionMandatoryWithSeparator":"RepetitionMandatory",r.idx)]=s,Gt(a,s),i===void 0?(Gt(s,o),Gt(s,u)):(Gt(s,u),Gt(s,i.left),Gt(i.right,o)),{left:o,right:u}}function X1(t,e,r,n,i){let o=n.left,a=n.right,s=ar(t,e,r,{type:oe.ATN_STAR_LOOP_ENTRY});sa(t,s);let u=ar(t,e,r,{type:oe.ATN_LOOP_END}),d=ar(t,e,r,{type:oe.ATN_STAR_LOOP_BACK});return s.loopback=d,u.loopback=d,Gt(s,o),Gt(s,u),Gt(a,d),i!==void 0?(Gt(d,u),Gt(d,i.left),Gt(i.right,o)):Gt(d,s),t.decisionMap[Pl(e,i?"RepetitionWithSeparator":"Repetition",r.idx)]=s,{left:s,right:u}}function qce(t,e,r,n){let i=n.left,o=n.right;return Gt(i,o),t.decisionMap[Pl(e,"Option",r.idx)]=i,n}function sa(t,e){return t.decisionStates.push(e),e.decision=t.decisionStates.length-1,e.decision}function xu(t,e,r,n,...i){let o=ar(t,e,n,{type:oe.ATN_BLOCK_END,start:r});r.end=o;for(let s of i)s!==void 0?(Gt(r,s.left),Gt(s.right,o)):Gt(r,o);let a={left:r,right:o};return t.decisionMap[Pl(e,xce(n),n.idx)]=r,a}function xce(t){if(t instanceof nn.Alternation)return"Alternation";if(t instanceof nn.Option)return"Option";if(t instanceof nn.Repetition)return"Repetition";if(t instanceof nn.RepetitionWithSeparator)return"RepetitionWithSeparator";if(t instanceof nn.RepetitionMandatory)return"RepetitionMandatory";if(t instanceof nn.RepetitionMandatoryWithSeparator)return"RepetitionMandatoryWithSeparator";throw new Error("Invalid production type encountered")}function Lce(t,e){let r=e.length;for(let o=0;o<r-1;o++){let a=e[o],s;a.left.transitions.length===1&&(s=a.left.transitions[0]);let u=s instanceof Al,d=s,p=e[o+1].left;a.left.type===oe.ATN_BASIC&&a.right.type===oe.ATN_BASIC&&s!==void 0&&(u&&d.followState===a.right||s.target===a.right)?(u?d.followState=p:s.target=p,Fce(t,a.right)):Gt(a.right,p)}let n=e[0],i=e[r-1];return{left:n.left,right:i.right}}function tb(t,e,r,n){let i=ar(t,e,n,{type:oe.ATN_BASIC}),o=ar(t,e,n,{type:oe.ATN_BASIC});return rb(i,new Ch(o,r)),{left:i,right:o}}function Mce(t,e,r){let n=r.referencedRule,i=t.ruleToStartState.get(n),o=ar(t,e,r,{type:oe.ATN_BASIC}),a=ar(t,e,r,{type:oe.ATN_BASIC}),s=new Al(i,n,a);return rb(o,s),{left:o,right:a}}function $ce(t,e,r){let n=t.ruleToStartState.get(e);Gt(n,r.left);let i=t.ruleToStopState.get(e);return Gt(r.right,i),{left:n,right:i}}function Gt(t,e){let r=new Ah(e);rb(t,r)}function ar(t,e,r,n){let i=Object.assign({atn:t,production:r,epsilonOnlyTransitions:!1,rule:e,transitions:[],nextTokenWithinRule:[],stateNumber:t.states.length},n);return t.states.push(i),i}function rb(t,e){t.transitions.length===0&&(t.epsilonOnlyTransitions=e.isEpsilon()),t.transitions.push(e)}function Fce(t,e){t.states.splice(t.states.indexOf(e),1)}});var Z1=h(ji=>{"use strict";var jce=ji&&ji.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(ji,"__esModule",{value:!0});ji.getATNConfigKey=ji.ATNConfigSet=ji.DFA_ERROR=void 0;var Uce=jce(nr());ji.DFA_ERROR={};var nb=class{constructor(){this.map={},this.configs=[]}get size(){return this.configs.length}finalize(){this.map={}}add(e){let r=Q1(e);r in this.map||(this.map[r]=this.configs.length,this.configs.push(e))}get elements(){return this.configs}get alts(){return(0,Uce.default)(this.configs,e=>e.alt)}get key(){let e="";for(let r in this.map)e+=r+":";return e}};ji.ATNConfigSet=nb;function Q1(t,e=!0){return`${e?`a${t.alt}`:""}s${t.state.stateNumber}:${t.stack.map(r=>r.stateNumber.toString()).join("_")}`}ji.getATNConfigKey=Q1});var t$=h(($Ce,e$)=>{var Gce=Zs();function Hce(t,e,r){for(var n=-1,i=t.length;++n<i;){var o=t[n],a=e(o);if(a!=null&&(s===void 0?a===a&&!Gce(a):r(a,s)))var s=a,u=o}return u}e$.exports=Hce});var n$=h((FCe,r$)=>{function Wce(t,e){return t<e}r$.exports=Wce});var o$=h((jCe,i$)=>{var Kce=t$(),Bce=n$(),zce=Ia();function Vce(t){return t&&t.length?Kce(t,zce,Bce):void 0}i$.exports=Vce});var s$=h((UCe,a$)=>{var Yce=wn(),Xce=QT();function Jce(t,e){return t&&t.length?Xce(t,Yce(e,2)):[]}a$.exports=Jce});var h$=h(Lu=>{"use strict";var ca=Lu&&Lu.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(Lu,"__esModule",{value:!0});Lu.LLStarLookaheadStrategy=void 0;var mn=Ba(),ii=J1(),ua=Z1(),Qce=ca(o$()),Zce=ca(Xp()),ele=ca(s$()),Sl=ca(nr()),tle=ca(ei()),ib=ca(ir()),rle=ca(ln()),u$=ca(go());function nle(t,e){let r={};return n=>{let i=n.toString(),o=r[i];return o!==void 0||(o={atnStartState:t,decision:e,states:{}},r[i]=o),o}}var Ph=class{constructor(){this.predicates=[]}is(e){return e>=this.predicates.length||this.predicates[e]}set(e,r){this.predicates[e]=r}toString(){let e="",r=this.predicates.length;for(let n=0;n<r;n++)e+=this.predicates[n]===!0?"1":"0";return e}},c$=new Ph,ab=class extends mn.LLkLookaheadStrategy{constructor(e){var r;super(),this.logging=(r=e?.logging)!==null&&r!==void 0?r:n=>console.log(n)}initialize(e){this.atn=(0,ii.createATN)(e.rules),this.dfas=ile(this.atn)}validateAmbiguousAlternationAlternatives(){return[]}validateEmptyOrAlternatives(){return[]}buildLookaheadForAlternation(e){let{prodOccurrence:r,rule:n,hasPredicates:i,dynamicTokensEnabled:o}=e,a=this.dfas,s=this.logging,u=(0,ii.buildATNKey)(n,"Alternation",r),p=this.atn.decisionMap[u].decision,m=(0,Sl.default)((0,mn.getLookaheadPaths)({maxLookahead:1,occurrence:r,prodType:"Alternation",rule:n}),v=>(0,Sl.default)(v,P=>P[0]));if(l$(m,!1)&&!o){let v=(0,u$.default)(m,(P,_,N)=>((0,ib.default)(_,I=>{I&&(P[I.tokenTypeIdx]=N,(0,ib.default)(I.categoryMatches,O=>{P[O]=N}))}),P),{});return i?function(P){var _;let N=this.LA(1),I=v[N.tokenTypeIdx];if(P!==void 0&&I!==void 0){let O=(_=P[I])===null||_===void 0?void 0:_.GATE;if(O!==void 0&&O.call(this)===!1)return}return I}:function(){let P=this.LA(1);return v[P.tokenTypeIdx]}}else return i?function(v){let P=new Ph,_=v===void 0?0:v.length;for(let I=0;I<_;I++){let O=v?.[I].GATE;P.set(I,O===void 0||O.call(this))}let N=ob.call(this,a,p,P,s);return typeof N=="number"?N:void 0}:function(){let v=ob.call(this,a,p,c$,s);return typeof v=="number"?v:void 0}}buildLookaheadForOptional(e){let{prodOccurrence:r,rule:n,prodType:i,dynamicTokensEnabled:o}=e,a=this.dfas,s=this.logging,u=(0,ii.buildATNKey)(n,i,r),p=this.atn.decisionMap[u].decision,m=(0,Sl.default)((0,mn.getLookaheadPaths)({maxLookahead:1,occurrence:r,prodType:i,rule:n}),v=>(0,Sl.default)(v,P=>P[0]));if(l$(m)&&m[0][0]&&!o){let v=m[0],P=(0,tle.default)(v);if(P.length===1&&(0,rle.default)(P[0].categoryMatches)){let N=P[0].tokenTypeIdx;return function(){return this.LA(1).tokenTypeIdx===N}}else{let _=(0,u$.default)(P,(N,I)=>(I!==void 0&&(N[I.tokenTypeIdx]=!0,(0,ib.default)(I.categoryMatches,O=>{N[O]=!0})),N),{});return function(){let N=this.LA(1);return _[N.tokenTypeIdx]===!0}}}return function(){let v=ob.call(this,a,p,c$,s);return typeof v=="object"?!1:v===0}}};Lu.LLStarLookaheadStrategy=ab;function l$(t,e=!0){let r=new Set;for(let n of t){let i=new Set;for(let o of n){if(o===void 0){if(e)break;return!1}let a=[o.tokenTypeIdx].concat(o.categoryMatches);for(let s of a)if(r.has(s)){if(!i.has(s))return!1}else r.add(s),i.add(s)}}return!0}function ile(t){let e=t.decisionStates.length,r=Array(e);for(let n=0;n<e;n++)r[n]=nle(t.decisionStates[n],n);return r}function ob(t,e,r,n){let i=t[e](r),o=i.start;if(o===void 0){let s=mle(i.atnStartState);o=p$(i,f$(s)),i.start=o}return ole.apply(this,[i,o,r,n])}function ole(t,e,r,n){let i=e,o=1,a=[],s=this.LA(o++);for(;;){let u=dle(i,s);if(u===void 0&&(u=ale.apply(this,[t,i,s,o,r,n])),u===ua.DFA_ERROR)return lle(a,i,s);if(u.isAcceptState===!0)return u.prediction;i=u,a.push(s),s=this.LA(o++)}}function ale(t,e,r,n,i,o){let a=fle(e.configs,r,i);if(a.size===0)return d$(t,e,r,ua.DFA_ERROR),ua.DFA_ERROR;let s=f$(a),u=hle(a,i);if(u!==void 0)s.isAcceptState=!0,s.prediction=u,s.configs.uniqueAlt=u;else if(_le(a)){let d=(0,Qce.default)(a.alts);s.isAcceptState=!0,s.prediction=d,s.configs.uniqueAlt=d,sle.apply(this,[t,n,a.alts,o])}return s=d$(t,e,r,s),s}function sle(t,e,r,n){let i=[];for(let d=1;d<=e;d++)i.push(this.LA(d).tokenType);let o=t.atnStartState,a=o.rule,s=o.production,u=ule({topLevelRule:a,ambiguityIndices:r,production:s,prefixPath:i});n(u)}function ule(t){let e=(0,Sl.default)(t.prefixPath,i=>(0,mn.tokenLabel)(i)).join(", "),r=t.production.idx===0?"":t.production.idx,n=`Ambiguous Alternatives Detected: <${t.ambiguityIndices.join(", ")}> in <${cle(t.production)}${r}> inside <${t.topLevelRule.name}> Rule,
<${e}> may appears as a prefix path in all these alternatives.
`;return n=n+`See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#AMBIGUOUS_ALTERNATIVES
For Further details.`,n}function cle(t){if(t instanceof mn.NonTerminal)return"SUBRULE";if(t instanceof mn.Option)return"OPTION";if(t instanceof mn.Alternation)return"OR";if(t instanceof mn.RepetitionMandatory)return"AT_LEAST_ONE";if(t instanceof mn.RepetitionMandatoryWithSeparator)return"AT_LEAST_ONE_SEP";if(t instanceof mn.RepetitionWithSeparator)return"MANY_SEP";if(t instanceof mn.Repetition)return"MANY";if(t instanceof mn.Terminal)return"CONSUME";throw Error("non exhaustive match")}function lle(t,e,r){let n=(0,Zce.default)(e.configs.elements,o=>o.state.transitions),i=(0,ele.default)(n.filter(o=>o instanceof ii.AtomTransition).map(o=>o.tokenType),o=>o.tokenTypeIdx);return{actualToken:r,possibleTokenTypes:i,tokenPath:t}}function dle(t,e){return t.edges[e.tokenTypeIdx]}function fle(t,e,r){let n=new ua.ATNConfigSet,i=[];for(let a of t.elements){if(r.is(a.alt)===!1)continue;if(a.state.type===ii.ATN_RULE_STOP){i.push(a);continue}let s=a.state.transitions.length;for(let u=0;u<s;u++){let d=a.state.transitions[u],p=ple(d,e);p!==void 0&&n.add({state:p,alt:a.alt,stack:a.stack})}}let o;if(i.length===0&&n.size===1&&(o=n),o===void 0){o=new ua.ATNConfigSet;for(let a of n.elements)Sh(a,o)}if(i.length>0&&!yle(o))for(let a of i)o.add(a);return o}function ple(t,e){if(t instanceof ii.AtomTransition&&(0,mn.tokenMatcher)(e,t.tokenType))return t.target}function hle(t,e){let r;for(let n of t.elements)if(e.is(n.alt)===!0){if(r===void 0)r=n.alt;else if(r!==n.alt)return}return r}function f$(t){return{configs:t,edges:{},isAcceptState:!1,prediction:-1}}function d$(t,e,r,n){return n=p$(t,n),e.edges[r.tokenTypeIdx]=n,n}function p$(t,e){if(e===ua.DFA_ERROR)return e;let r=e.configs.key,n=t.states[r];return n!==void 0?n:(e.configs.finalize(),t.states[r]=e,e)}function mle(t){let e=new ua.ATNConfigSet,r=t.transitions.length;for(let n=0;n<r;n++){let o={state:t.transitions[n].target,alt:n,stack:[]};Sh(o,e)}return e}function Sh(t,e){let r=t.state;if(r.type===ii.ATN_RULE_STOP){if(t.stack.length>0){let i=[...t.stack],a={state:i.pop(),alt:t.alt,stack:i};Sh(a,e)}else e.add(t);return}r.epsilonOnlyTransitions||e.add(t);let n=r.transitions.length;for(let i=0;i<n;i++){let o=r.transitions[i],a=gle(t,o);a!==void 0&&Sh(a,e)}}function gle(t,e){if(e instanceof ii.EpsilonTransition)return{state:e.target,alt:t.alt,stack:t.stack};if(e instanceof ii.RuleTransition){let r=[...t.stack,e.followState];return{state:e.target,alt:t.alt,stack:r}}}function yle(t){for(let e of t.elements)if(e.state.type===ii.ATN_RULE_STOP)return!0;return!1}function vle(t){for(let e of t.elements)if(e.state.type!==ii.ATN_RULE_STOP)return!1;return!0}function _le(t){if(vle(t))return!0;let e=Tle(t.elements);return Rle(e)&&!ble(e)}function Tle(t){let e=new Map;for(let r of t){let n=(0,ua.getATNConfigKey)(r,!1),i=e.get(n);i===void 0&&(i={},e.set(n,i)),i[r.alt]=!0}return e}function Rle(t){for(let e of Array.from(t.values()))if(Object.keys(e).length>1)return!0;return!1}function ble(t){for(let e of Array.from(t.values()))if(Object.keys(e).length===1)return!0;return!1}});var m$=h(Eh=>{"use strict";Object.defineProperty(Eh,"__esModule",{value:!0});Eh.LLStarLookaheadStrategy=void 0;var Cle=h$();Object.defineProperty(Eh,"LLStarLookaheadStrategy",{enumerable:!0,get:function(){return Cle.LLStarLookaheadStrategy}})});var v$=h(qn=>{"use strict";Object.defineProperty(qn,"__esModule",{value:!0});qn.RootCstNodeImpl=qn.CompositeCstNodeImpl=qn.LeafCstNodeImpl=qn.AbstractCstNode=qn.CstNodeBuilder=void 0;var g$=ws(),Ale=Yr(),y$=ft(),sb=class{constructor(){this.nodeStack=[]}get current(){return this.nodeStack[this.nodeStack.length-1]}buildRootNode(e){return this.rootNode=new kh(e),this.nodeStack=[this.rootNode],this.rootNode}buildCompositeNode(e){let r=new Nl;return r.feature=e,r.root=this.rootNode,this.current.children.push(r),this.nodeStack.push(r),r}buildLeafNode(e,r){let n=new kl(e.startOffset,e.image.length,(0,y$.tokenToRange)(e),e.tokenType,!1);return n.feature=r,n.root=this.rootNode,this.current.children.push(n),n}removeNode(e){let r=e.parent;if(r){let n=r.children.indexOf(e);n>=0&&r.children.splice(n,1)}}construct(e){let r=this.current;typeof e.$type=="string"&&(this.current.element=e),e.$cstNode=r;let n=this.nodeStack.pop();n?.children.length===0&&this.removeNode(n)}addHiddenTokens(e){for(let r of e){let n=new kl(r.startOffset,r.image.length,(0,y$.tokenToRange)(r),r.tokenType,!0);n.root=this.rootNode,this.addHiddenToken(this.rootNode,n)}}addHiddenToken(e,r){let{offset:n,end:i}=r;for(let o=0;o<e.children.length;o++){let a=e.children[o],{offset:s,end:u}=a;if((0,Ale.isCompositeCstNode)(a)&&n>s&&i<u){this.addHiddenToken(a,r);return}else if(i<=s){e.children.splice(o,0,r);return}}e.children.push(r)}};qn.CstNodeBuilder=sb;var El=class{get hidden(){return!1}get element(){var e,r;let n=typeof((e=this._element)===null||e===void 0?void 0:e.$type)=="string"?this._element:(r=this.parent)===null||r===void 0?void 0:r.element;if(!n)throw new Error("This node has no associated AST element");return n}set element(e){this._element=e}get text(){return this.root.fullText.substring(this.offset,this.end)}};qn.AbstractCstNode=El;var kl=class extends El{get offset(){return this._offset}get length(){return this._length}get end(){return this._offset+this._length}get hidden(){return this._hidden}get tokenType(){return this._tokenType}get range(){return this._range}constructor(e,r,n,i,o=!1){super(),this._hidden=o,this._offset=e,this._tokenType=i,this._length=r,this._range=n}};qn.LeafCstNodeImpl=kl;var Nl=class extends El{constructor(){super(...arguments),this.children=new ub(this)}get offset(){var e,r;return(r=(e=this.firstNonHiddenNode)===null||e===void 0?void 0:e.offset)!==null&&r!==void 0?r:0}get length(){return this.end-this.offset}get end(){var e,r;return(r=(e=this.lastNonHiddenNode)===null||e===void 0?void 0:e.end)!==null&&r!==void 0?r:0}get range(){let e=this.firstNonHiddenNode,r=this.lastNonHiddenNode;if(e&&r){if(this._rangeCache===void 0){let{range:n}=e,{range:i}=r;this._rangeCache={start:n.start,end:i.end.line<n.start.line?n.start:i.end}}return this._rangeCache}else return{start:g$.Position.create(0,0),end:g$.Position.create(0,0)}}get firstNonHiddenNode(){for(let e of this.children)if(!e.hidden)return e;return this.children[0]}get lastNonHiddenNode(){for(let e=this.children.length-1;e>=0;e--){let r=this.children[e];if(!r.hidden)return r}return this.children[this.children.length-1]}};qn.CompositeCstNodeImpl=Nl;var ub=class t extends Array{constructor(e){super(),this.parent=e,Object.setPrototypeOf(this,t.prototype)}push(...e){return this.addParents(e),super.push(...e)}unshift(...e){return this.addParents(e),super.unshift(...e)}splice(e,r,...n){return this.addParents(n),super.splice(e,r,...n)}addParents(e){for(let r of e)r.parent=this.parent}},kh=class extends Nl{get text(){return this._text.substring(this.offset,this.end)}get fullText(){return this._text}constructor(e){super(),this._text="",this._text=e??""}};qn.RootCstNodeImpl=kh});var Oh=h(Ur=>{"use strict";Object.defineProperty(Ur,"__esModule",{value:!0});Ur.LangiumCompletionParser=Ur.LangiumParserErrorMessageProvider=Ur.LangiumParser=Ur.AbstractLangiumParser=Ur.DatatypeSymbol=void 0;var wh=Ba(),Ple=m$(),Nh=Ke(),_$=Yt(),T$=Ye(),Sle=v$();Ur.DatatypeSymbol=Symbol("Datatype");function cb(t){return t.$type===Ur.DatatypeSymbol}var R$="\u200B",b$=t=>t.endsWith(R$)?t:t+R$,wl=class{constructor(e){this._unorderedGroups=new Map,this.lexer=e.parser.Lexer;let r=this.lexer.definition;this.wrapper=new fb(r,e.parser.ParserConfig)}alternatives(e,r){this.wrapper.wrapOr(e,r)}optional(e,r){this.wrapper.wrapOption(e,r)}many(e,r){this.wrapper.wrapMany(e,r)}atLeastOne(e,r){this.wrapper.wrapAtLeastOne(e,r)}isRecording(){return this.wrapper.IS_RECORDING}get unorderedGroups(){return this._unorderedGroups}getRuleStack(){return this.wrapper.RULE_STACK}finalize(){this.wrapper.wrapSelfAnalysis()}};Ur.AbstractLangiumParser=wl;var lb=class extends wl{get current(){return this.stack[this.stack.length-1]}constructor(e){super(e),this.nodeBuilder=new Sle.CstNodeBuilder,this.stack=[],this.assignmentMap=new Map,this.linker=e.references.Linker,this.converter=e.parser.ValueConverter,this.astReflection=e.shared.AstReflection}rule(e,r){let n=e.fragment?void 0:(0,_$.isDataTypeRule)(e)?Ur.DatatypeSymbol:(0,_$.getTypeName)(e),i=this.wrapper.DEFINE_RULE(b$(e.name),this.startImplementation(n,r).bind(this));return e.entry&&(this.mainRule=i),i}parse(e){this.nodeBuilder.buildRootNode(e);let r=this.lexer.tokenize(e);this.wrapper.input=r.tokens;let n=this.mainRule.call(this.wrapper,{});return this.nodeBuilder.addHiddenTokens(r.hidden),this.unorderedGroups.clear(),{value:n,lexerErrors:r.errors,parserErrors:this.wrapper.errors}}startImplementation(e,r){return n=>{if(!this.isRecording()){let o={$type:e};this.stack.push(o),e===Ur.DatatypeSymbol&&(o.value="")}let i;try{i=r(n)}catch{i=void 0}return!this.isRecording()&&i===void 0&&(i=this.construct()),i}}consume(e,r,n){let i=this.wrapper.wrapConsume(e,r);if(!this.isRecording()&&!i.isInsertedInRecovery){let o=this.nodeBuilder.buildLeafNode(i,n),{assignment:a,isCrossRef:s}=this.getAssignment(n),u=this.current;if(a){let d=(0,Nh.isKeyword)(n)?i.image:this.converter.convert(i.image,o);this.assign(a.operator,a.feature,d,o,s)}else if(cb(u)){let d=i.image;(0,Nh.isKeyword)(n)||(d=this.converter.convert(d,o).toString()),u.value+=d}}}subrule(e,r,n,i){let o;this.isRecording()||(o=this.nodeBuilder.buildCompositeNode(n));let a=this.wrapper.wrapSubrule(e,r,i);!this.isRecording()&&o&&o.length>0&&this.performSubruleAssignment(a,n,o)}performSubruleAssignment(e,r,n){let{assignment:i,isCrossRef:o}=this.getAssignment(r);if(i)this.assign(i.operator,i.feature,e,n,o);else if(!i){let a=this.current;if(cb(a))a.value+=e.toString();else{let s=e.$type,u=this.assignWithoutOverride(e,a);s&&(u.$type=s);let d=u;this.stack.pop(),this.stack.push(d)}}}action(e,r){if(!this.isRecording()){let n=this.current;if(!n.$cstNode&&r.feature&&r.operator){n=this.construct(!1);let o=n.$cstNode.feature;this.nodeBuilder.buildCompositeNode(o)}let i={$type:e};this.stack.pop(),this.stack.push(i),r.feature&&r.operator&&this.assign(r.operator,r.feature,n,n.$cstNode,!1)}}construct(e=!0){if(this.isRecording())return;let r=this.current;return(0,T$.linkContentToContainer)(r),this.nodeBuilder.construct(r),e&&this.stack.pop(),cb(r)?this.converter.convert(r.value,r.$cstNode):(this.assignMandatoryProperties(r),r)}assignMandatoryProperties(e){let r=this.astReflection.getTypeMetaData(e.$type);for(let n of r.mandatory){let i=e[n.name];n.type==="array"&&!Array.isArray(i)?e[n.name]=[]:n.type==="boolean"&&i===void 0&&(e[n.name]=!1)}}getAssignment(e){if(!this.assignmentMap.has(e)){let r=(0,T$.getContainerOfType)(e,Nh.isAssignment);this.assignmentMap.set(e,{assignment:r,isCrossRef:r?(0,Nh.isCrossReference)(r.terminal):!1})}return this.assignmentMap.get(e)}assign(e,r,n,i,o){let a=this.current,s;switch(o&&typeof n=="string"?s=this.linker.buildReference(a,r,i,n):s=n,e){case"=":{a[r]=s;break}case"?=":{a[r]=!0;break}case"+=":Array.isArray(a[r])||(a[r]=[]),a[r].push(s)}}assignWithoutOverride(e,r){for(let[n,i]of Object.entries(r))e[n]===void 0&&(e[n]=i);return e}get definitionErrors(){return this.wrapper.definitionErrors}};Ur.LangiumParser=lb;var Dh=class{buildMismatchTokenMessage({expected:e,actual:r}){return`Expecting ${e.LABEL?"`"+e.LABEL+"`":e.name.endsWith(":KW")?`keyword '${e.name.substring(0,e.name.length-3)}'`:`token of type '${e.name}'`} but found \`${r.image}\`.`}buildNotAllInputParsedMessage({firstRedundant:e}){return`Expecting end of file but found \`${e.image}\`.`}buildNoViableAltMessage(e){return wh.defaultParserErrorProvider.buildNoViableAltMessage(e)}buildEarlyExitMessage(e){return wh.defaultParserErrorProvider.buildEarlyExitMessage(e)}};Ur.LangiumParserErrorMessageProvider=Dh;var db=class extends wl{constructor(){super(...arguments),this.tokens=[],this.elementStack=[],this.lastElementStack=[],this.nextTokenIndex=0,this.stackSize=0}action(){}construct(){}parse(e){this.resetState();let r=this.lexer.tokenize(e);return this.tokens=r.tokens,this.wrapper.input=[...this.tokens],this.mainRule.call(this.wrapper,{}),this.unorderedGroups.clear(),{tokens:this.tokens,elementStack:[...this.lastElementStack],tokenIndex:this.nextTokenIndex}}rule(e,r){let n=this.wrapper.DEFINE_RULE(b$(e.name),this.startImplementation(r).bind(this));return e.entry&&(this.mainRule=n),n}resetState(){this.elementStack=[],this.lastElementStack=[],this.nextTokenIndex=0,this.stackSize=0}startImplementation(e){return r=>{let n=this.keepStackSize();try{e(r)}finally{this.resetStackSize(n)}}}removeUnexpectedElements(){this.elementStack.splice(this.stackSize)}keepStackSize(){let e=this.elementStack.length;return this.stackSize=e,e}resetStackSize(e){this.removeUnexpectedElements(),this.stackSize=e}consume(e,r,n){this.wrapper.wrapConsume(e,r),this.isRecording()||(this.lastElementStack=[...this.elementStack,n],this.nextTokenIndex=this.currIdx+1)}subrule(e,r,n,i){this.before(n),this.wrapper.wrapSubrule(e,r,i),this.after(n)}before(e){this.isRecording()||this.elementStack.push(e)}after(e){if(!this.isRecording()){let r=this.elementStack.lastIndexOf(e);r>=0&&this.elementStack.splice(r)}}get currIdx(){return this.wrapper.currIdx}};Ur.LangiumCompletionParser=db;var Ele={recoveryEnabled:!0,nodeLocationTracking:"full",skipValidations:!0,errorMessageProvider:new Dh},fb=class extends wh.EmbeddedActionsParser{constructor(e,r){let n=r&&"maxLookahead"in r;super(e,Object.assign(Object.assign(Object.assign({},Ele),{lookaheadStrategy:n?new wh.LLkLookaheadStrategy({maxLookahead:r.maxLookahead}):new Ple.LLStarLookaheadStrategy}),r))}get IS_RECORDING(){return this.RECORDING_PHASE}DEFINE_RULE(e,r){return this.RULE(e,r)}wrapSelfAnalysis(){this.performSelfAnalysis()}wrapConsume(e,r){return this.consume(e,r)}wrapSubrule(e,r,n){return this.subrule(e,r,{ARGS:[n]})}wrapOr(e,r){this.or(e,r)}wrapOption(e,r){this.option(e,r)}wrapMany(e,r){this.many(e,r)}wrapAtLeastOne(e,r){this.atLeastOne(e,r)}}});var C$=h(Mu=>{"use strict";Object.defineProperty(Mu,"__esModule",{value:!0});Mu.assertUnreachable=Mu.ErrorWithLocation=void 0;var pb=class extends Error{constructor(e,r){super(e?`${r} at ${e.range.start.line}:${e.range.start.character}`:r)}};Mu.ErrorWithLocation=pb;function kle(t){throw new Error("Error! The input value was not handled.")}Mu.assertUnreachable=kle});var mb=h(qh=>{"use strict";Object.defineProperty(qh,"__esModule",{value:!0});qh.createParser=void 0;var A$=Ba(),rt=Ke(),Dl=C$(),Nle=er(),P$=Yt(),S$=Vt();function wle(t,e,r){return Dle({parser:e,tokens:r,rules:new Map,ruleNames:new Map},t),e}qh.createParser=wle;function Dle(t,e){let r=(0,S$.getAllReachableRules)(e,!1),n=(0,Nle.stream)(e.rules).filter(rt.isParserRule).filter(i=>r.has(i));for(let i of n){let o=Object.assign(Object.assign({},t),{consume:1,optional:1,subrule:1,many:1,or:1});o.rules.set(i.name,t.parser.rule(i,Va(o,i.definition)))}}function Va(t,e,r=!1){let n;if((0,rt.isKeyword)(e))n=$le(t,e);else if((0,rt.isAction)(e))n=Ole(t,e);else if((0,rt.isAssignment)(e))n=Va(t,e.terminal);else if((0,rt.isCrossReference)(e))n=E$(t,e);else if((0,rt.isRuleCall)(e))n=Ile(t,e);else if((0,rt.isAlternatives)(e))n=xle(t,e);else if((0,rt.isUnorderedGroup)(e))n=Lle(t,e);else if((0,rt.isGroup)(e))n=Mle(t,e);else throw new Dl.ErrorWithLocation(e.$cstNode,`Unexpected element type: ${e.$type}`);return k$(t,r?void 0:Ih(e),n,e.cardinality)}function Ole(t,e){let r=(0,P$.getTypeName)(e);return()=>t.parser.action(r,e)}function Ile(t,e){let r=e.rule.ref;if((0,rt.isParserRule)(r)){let n=t.subrule++,i=e.arguments.length>0?qle(r,e.arguments):()=>({});return o=>t.parser.subrule(n,N$(t,r),e,i(o))}else if((0,rt.isTerminalRule)(r)){let n=t.consume++,i=hb(t,r.name);return()=>t.parser.consume(n,i,e)}else if(r)(0,Dl.assertUnreachable)(r);else throw new Dl.ErrorWithLocation(e.$cstNode,`Undefined rule type: ${e.$type}`)}function qle(t,e){let r=e.map(n=>So(n.value));return n=>{let i={};for(let o=0;o<r.length;o++){let a=t.parameters[o],s=r[o];i[a.name]=s(n)}return i}}function So(t){if((0,rt.isDisjunction)(t)){let e=So(t.left),r=So(t.right);return n=>e(n)||r(n)}else if((0,rt.isConjunction)(t)){let e=So(t.left),r=So(t.right);return n=>e(n)&&r(n)}else if((0,rt.isNegation)(t)){let e=So(t.value);return r=>!e(r)}else if((0,rt.isParameterReference)(t)){let e=t.parameter.ref.name;return r=>r!==void 0&&r[e]===!0}else if((0,rt.isLiteralCondition)(t)){let e=!!t.true;return()=>e}(0,Dl.assertUnreachable)(t)}function xle(t,e){if(e.elements.length===1)return Va(t,e.elements[0]);{let r=[];for(let i of e.elements){let o={ALT:Va(t,i,!0)},a=Ih(i);a&&(o.GATE=So(a)),r.push(o)}let n=t.or++;return i=>t.parser.alternatives(n,r.map(o=>{let a={ALT:()=>o.ALT(i)},s=o.GATE;return s&&(a.GATE=()=>s(i)),a}))}}function Lle(t,e){if(e.elements.length===1)return Va(t,e.elements[0]);let r=[];for(let s of e.elements){let u={ALT:Va(t,s,!0)},d=Ih(s);d&&(u.GATE=So(d)),r.push(u)}let n=t.or++,i=(s,u)=>{let d=u.getRuleStack().join("-");return`uGroup_${s}_${d}`},o=s=>t.parser.alternatives(n,r.map((u,d)=>{let p={ALT:()=>!0},m=t.parser;p.ALT=()=>{if(u.ALT(s),!m.isRecording()){let P=i(n,m);m.unorderedGroups.get(P)||m.unorderedGroups.set(P,[]);let _=m.unorderedGroups.get(P);typeof _?.[d]>"u"&&(_[d]=!0)}};let v=u.GATE;return v?p.GATE=()=>v(s):p.GATE=()=>{let P=m.unorderedGroups.get(i(n,m));return!P?.[d]},p})),a=k$(t,Ih(e),o,"*");return s=>{a(s),t.parser.isRecording()||t.parser.unorderedGroups.delete(i(n,t.parser))}}function Mle(t,e){let r=e.elements.map(n=>Va(t,n));return n=>r.forEach(i=>i(n))}function Ih(t){if((0,rt.isGroup)(t))return t.guardCondition}function E$(t,e,r=e.terminal){if(r)if((0,rt.isRuleCall)(r)&&(0,rt.isParserRule)(r.rule.ref)){let n=t.subrule++;return i=>t.parser.subrule(n,N$(t,r.rule.ref),e,i)}else if((0,rt.isRuleCall)(r)&&(0,rt.isTerminalRule)(r.rule.ref)){let n=t.consume++,i=hb(t,r.rule.ref.name);return()=>t.parser.consume(n,i,e)}else if((0,rt.isKeyword)(r)){let n=t.consume++,i=hb(t,r.value);return()=>t.parser.consume(n,i,e)}else throw new Error("Could not build cross reference parser");else{if(!e.type.ref)throw new Error("Could not resolve reference to type: "+e.type.$refText);let n=(0,S$.findNameAssignment)(e.type.ref),i=n?.terminal;if(!i)throw new Error("Could not find name assignment for type: "+(0,P$.getTypeName)(e.type.ref));return E$(t,e,i)}}function $le(t,e){let r=t.consume++,n=t.tokens[e.value];if(!n)throw new Error("Could not find token for keyword: "+e.value);return()=>t.parser.consume(r,n,e)}function k$(t,e,r,n){let i=e&&So(e);if(!n)if(i){let o=t.or++;return a=>t.parser.alternatives(o,[{ALT:()=>r(a),GATE:()=>i(a)},{ALT:(0,A$.EMPTY_ALT)(),GATE:()=>!i(a)}])}else return r;if(n==="*"){let o=t.many++;return a=>t.parser.many(o,{DEF:()=>r(a),GATE:i?()=>i(a):void 0})}else if(n==="+"){let o=t.many++;if(i){let a=t.or++;return s=>t.parser.alternatives(a,[{ALT:()=>t.parser.atLeastOne(o,{DEF:()=>r(s)}),GATE:()=>i(s)},{ALT:(0,A$.EMPTY_ALT)(),GATE:()=>!i(s)}])}else return a=>t.parser.atLeastOne(o,{DEF:()=>r(a)})}else if(n==="?"){let o=t.optional++;return a=>t.parser.optional(o,{DEF:()=>r(a),GATE:i?()=>i(a):void 0})}else(0,Dl.assertUnreachable)(n)}function N$(t,e){let r=Fle(t,e),n=t.rules.get(r);if(!n)throw new Error(`Rule "${r}" not found."`);return n}function Fle(t,e){if((0,rt.isParserRule)(e))return e.name;if(t.ruleNames.has(e))return t.ruleNames.get(e);{let r=e,n=r.$container,i=e.$type;for(;!(0,rt.isParserRule)(n);)((0,rt.isGroup)(n)||(0,rt.isAlternatives)(n)||(0,rt.isUnorderedGroup)(n))&&(i=n.elements.indexOf(r).toString()+":"+i),r=n,n=n.$container;return i=n.name+":"+i,t.ruleNames.set(e,i),i}}function hb(t,e){let r=t.tokens[e];if(!r)throw new Error(`Token "${e}" not found."`);return r}});var w$=h(xh=>{"use strict";Object.defineProperty(xh,"__esModule",{value:!0});xh.createCompletionParser=void 0;var jle=Oh(),Ule=mb();function Gle(t){let e=t.Grammar,r=t.parser.Lexer,n=new jle.LangiumCompletionParser(t);return(0,Ule.createParser)(e,n,r.definition),n.finalize(),n}xh.createCompletionParser=Gle});var gb=h($u=>{"use strict";Object.defineProperty($u,"__esModule",{value:!0});$u.prepareLangiumParser=$u.createLangiumParser=void 0;var Hle=Oh(),Wle=mb();function Kle(t){let e=D$(t);return e.finalize(),e}$u.createLangiumParser=Kle;function D$(t){let e=t.Grammar,r=t.parser.Lexer,n=new Hle.LangiumParser(t);return(0,Wle.createParser)(e,n,r.definition)}$u.prepareLangiumParser=D$});var _b=h(Mh=>{"use strict";Object.defineProperty(Mh,"__esModule",{value:!0});Mh.DefaultTokenBuilder=void 0;var Ble=Ba(),yb=Ke(),zle=Yt(),Vle=Ye(),Yle=Vt(),Lh=_s(),Xle=er(),vb=class{buildTokens(e,r){let n=(0,Xle.stream)((0,Yle.getAllReachableRules)(e,!1)),i=this.buildTerminalTokens(n),o=this.buildKeywordTokens(n,i,r);return i.forEach(a=>{let s=a.PATTERN;typeof s=="object"&&s&&"test"in s&&(0,Lh.isWhitespaceRegExp)(s)?o.unshift(a):o.push(a)}),o}buildTerminalTokens(e){return e.filter(yb.isTerminalRule).filter(r=>!r.fragment).map(r=>this.buildTerminalToken(r)).toArray()}buildTerminalToken(e){let r=(0,zle.terminalRegex)(e),n={name:e.name,PATTERN:new RegExp(r)};return e.hidden&&(n.GROUP=(0,Lh.isWhitespaceRegExp)(r)?Ble.Lexer.SKIPPED:"hidden"),n}buildKeywordTokens(e,r,n){return e.filter(yb.isParserRule).flatMap(i=>(0,Vle.streamAllContents)(i).filter(yb.isKeyword)).distinct(i=>i.value).toArray().sort((i,o)=>o.value.length-i.value.length).map(i=>this.buildKeywordToken(i,r,!!n?.caseInsensitive))}buildKeywordToken(e,r,n){return{name:e.value,PATTERN:this.buildKeywordPattern(e,n),LONGER_ALT:this.findLongerAlt(e,r)}}buildKeywordPattern(e,r){return r?new RegExp((0,Lh.getCaseInsensitivePattern)(e.value)):e.value}findLongerAlt(e,r){return r.reduce((n,i)=>{let o=i?.PATTERN;return o?.source&&(0,Lh.partialMatches)("^"+o.source+"$",e.value)&&n.push(i),n},[])}};Mh.DefaultTokenBuilder=vb});var bb=h(sr=>{"use strict";Object.defineProperty(sr,"__esModule",{value:!0});sr.convertBoolean=sr.convertNumber=sr.convertDate=sr.convertBigint=sr.convertInt=sr.convertID=sr.convertString=sr.DefaultValueConverter=void 0;var O$=Ke(),Jle=Yt(),Qle=Vt(),Tb=class{convert(e,r){let n=r.feature;if((0,O$.isCrossReference)(n)&&(n=(0,Qle.getCrossReferenceTerminal)(n)),(0,O$.isRuleCall)(n)){let i=n.rule.ref;if(!i)throw new Error("This cst node was not parsed by a rule.");return this.runConverter(i,e,r)}return e}runConverter(e,r,n){var i;switch(e.name.toUpperCase()){case"INT":return q$(r);case"STRING":return Rb(r);case"ID":return I$(r);case"REGEXLITERAL":return Rb(r)}switch((i=(0,Jle.getRuleType)(e))===null||i===void 0?void 0:i.toLowerCase()){case"number":return M$(r);case"boolean":return $$(r);case"bigint":return x$(r);case"date":return L$(r);default:return r}}};sr.DefaultValueConverter=Tb;function Rb(t){return t.substring(1,t.length-1)}sr.convertString=Rb;function I$(t){return t.charAt(0)==="^"?t.substring(1):t}sr.convertID=I$;function q$(t){return parseInt(t)}sr.convertInt=q$;function x$(t){return BigInt(t)}sr.convertBigint=x$;function L$(t){return new Date(t)}sr.convertDate=L$;function M$(t){return Number(t)}sr.convertNumber=M$;function $$(t){return t.toLowerCase()==="true"}sr.convertBoolean=$$});var Pb=h(Fh=>{"use strict";Object.defineProperty(Fh,"__esModule",{value:!0});Fh.DefaultLinker=void 0;var Zle=et(),Fu=Yr(),$h=Ye(),ede=bn(),Cb=Bo(),Ab=class{constructor(e){this.reflection=e.shared.AstReflection,this.langiumDocuments=()=>e.shared.workspace.LangiumDocuments,this.scopeProvider=e.references.ScopeProvider,this.astNodeLocator=e.workspace.AstNodeLocator}async link(e,r=Zle.CancellationToken.None){for(let n of(0,$h.streamAst)(e.parseResult.value))await(0,ede.interruptAndCheck)(r),(0,$h.streamReferences)(n).forEach(i=>this.doLink(i,e));e.state=Cb.DocumentState.Linked}doLink(e,r){let n=e.reference;if(n._ref===void 0)try{let i=this.getCandidate(e);if((0,Fu.isLinkingError)(i))n._ref=i;else if(n._nodeDescription=i,this.langiumDocuments().hasDocument(i.documentUri)){let o=this.loadAstNode(i);n._ref=o??this.createLinkingError(e,i)}}catch(i){n._ref=Object.assign(Object.assign({},e),{message:`An error occurred while resolving reference to '${n.$refText}': ${i}`})}r.references.push(n)}unlink(e){for(let r of e.references)delete r._ref,delete r._nodeDescription;e.references=[]}getCandidate(e){let n=this.scopeProvider.getScope(e).getElement(e.reference.$refText);return n??this.createLinkingError(e)}buildReference(e,r,n,i){let o=this,a={$refNode:n,$refText:i,get ref(){var s;if((0,Fu.isAstNode)(this._ref))return this._ref;if((0,Fu.isAstNodeDescription)(this._nodeDescription)){let u=o.loadAstNode(this._nodeDescription);this._ref=u??o.createLinkingError({reference:a,container:e,property:r},this._nodeDescription)}else if(this._ref===void 0){let u=o.getLinkedNode({reference:a,container:e,property:r});if(u.error&&(0,$h.getDocument)(e).state<Cb.DocumentState.ComputedScopes)return;this._ref=(s=u.node)!==null&&s!==void 0?s:u.error,this._nodeDescription=u.descr}return(0,Fu.isAstNode)(this._ref)?this._ref:void 0},get $nodeDescription(){return this._nodeDescription},get error(){return(0,Fu.isLinkingError)(this._ref)?this._ref:void 0}};return a}getLinkedNode(e){try{let r=this.getCandidate(e);if((0,Fu.isLinkingError)(r))return{error:r};let n=this.loadAstNode(r);return n?{node:n,descr:r}:{descr:r,error:this.createLinkingError(e,r)}}catch(r){return{error:Object.assign(Object.assign({},e),{message:`An error occurred while resolving reference to '${e.reference.$refText}': ${r}`})}}}loadAstNode(e){if(e.node)return e.node;let r=this.langiumDocuments().getOrCreateDocument(e.documentUri);return this.astNodeLocator.getAstNode(r.parseResult.value,e.path)}createLinkingError(e,r){let n=(0,$h.getDocument)(e.container);n.state<Cb.DocumentState.ComputedScopes&&console.warn(`Attempted reference resolution before document reached ComputedScopes state (${n.uri}).`);let i=this.reflection.getReferenceType(e);return Object.assign(Object.assign({},e),{message:`Could not resolve reference to ${i} named '${e.reference.$refText}'.`,targetDescription:r})}};Fh.DefaultLinker=Ab});var kb=h(jh=>{"use strict";Object.defineProperty(jh,"__esModule",{value:!0});jh.DefaultJsonSerializer=void 0;var Sb=Yr();function F$(t){return typeof t=="object"&&!!t&&("$ref"in t||"$error"in t)}var Eb=class{constructor(e){this.ignoreProperties=new Set(["$container","$containerProperty","$containerIndex","$document","$cstNode"]),this.astNodeLocator=e.workspace.AstNodeLocator,this.nameProvider=e.references.NameProvider}serialize(e,r){return JSON.stringify(e,(n,i)=>this.replacer(n,i,r?.refText),r?.space)}deserialize(e){let r=JSON.parse(e);return this.linkNode(r,r),r}replacer(e,r,n){var i,o;if(!this.ignoreProperties.has(e)){if((0,Sb.isReference)(r)){let a=r.ref,s=n?r.$refText:void 0;return a?{$refText:s,$ref:"#"+(a&&this.astNodeLocator.getAstNodePath(a))}:{$refText:s,$error:(o=(i=r.error)===null||i===void 0?void 0:i.message)!==null&&o!==void 0?o:"Could not resolve reference"}}return r}}linkNode(e,r,n,i,o){for(let[s,u]of Object.entries(e))if(Array.isArray(u))for(let d=0;d<u.length;d++){let p=u[d];F$(p)?u[d]=this.reviveReference(e,s,r,p):(0,Sb.isAstNode)(p)&&this.linkNode(p,r,e,s,d)}else F$(u)?e[s]=this.reviveReference(e,s,r,u):(0,Sb.isAstNode)(u)&&this.linkNode(u,r,e,s);let a=e;a.$container=n,a.$containerProperty=i,a.$containerIndex=o}reviveReference(e,r,n,i){let o=i.$refText;if(i.$ref){let a=this.getRefNode(n,i.$ref);return o||(o=this.nameProvider.getName(a)),{$refText:o??"",ref:a}}else if(i.$error){let a={$refText:o??""};return a.error={container:e,property:r,message:i.$error,reference:a},a}else return}getRefNode(e,r){return this.astNodeLocator.getAstNode(e,r.substring(1))}};jh.DefaultJsonSerializer=Eb});var wb=h(Uh=>{"use strict";Object.defineProperty(Uh,"__esModule",{value:!0});Uh.DefaultServiceRegistry=void 0;var tde=eo(),Nb=class{register(e){if(!this.singleton&&!this.map){this.singleton=e;return}if(!this.map&&(this.map={},this.singleton)){for(let r of this.singleton.LanguageMetaData.fileExtensions)this.map[r]=this.singleton;this.singleton=void 0}for(let r of e.LanguageMetaData.fileExtensions)this.map[r]!==void 0&&this.map[r]!==e&&console.warn(`The file extension ${r} is used by multiple languages. It is now assigned to '${e.LanguageMetaData.languageId}'.`),this.map[r]=e}getServices(e){if(this.singleton!==void 0)return this.singleton;if(this.map===void 0)throw new Error("The service registry is empty. Use `register` to register the services of a language.");let r=tde.Utils.extname(e),n=this.map[r];if(!n)throw new Error(`The service registry contains no services for the extension '${r}'.`);return n}get all(){return this.singleton!==void 0?[this.singleton]:this.map!==void 0?Object.values(this.map):[]}};Uh.DefaultServiceRegistry=Nb});var Ob=h(Gh=>{"use strict";Object.defineProperty(Gh,"__esModule",{value:!0});Gh.ValidationRegistry=void 0;var rde=un(),nde=bn(),Db=class{constructor(e){this.validationChecks=new rde.MultiMap,this.reflection=e.shared.AstReflection}register(e,r=this){for(let[n,i]of Object.entries(e)){let o=i;if(Array.isArray(o))for(let a of o)this.doRegister(n,this.wrapValidationException(a,r));else typeof o=="function"&&this.doRegister(n,this.wrapValidationException(o,r))}}wrapValidationException(e,r){return async(n,i,o)=>{try{await e.call(r,n,i,o)}catch(a){if((0,nde.isOperationCancelled)(a))throw a;console.error("An error occurred during validation:",a);let s=a instanceof Error?a.message:String(a);a instanceof Error&&a.stack&&console.error(a.stack),i("error","An error occurred during validation: "+s,{node:n})}}}doRegister(e,r){for(let n of this.reflection.getAllTypes())this.reflection.isSubtype(n,e)&&this.validationChecks.add(n,r)}getChecks(e){return this.validationChecks.get(e)}};Gh.ValidationRegistry=Db});var xb=h(ju=>{"use strict";Object.defineProperty(ju,"__esModule",{value:!0});ju.DefaultReferenceDescriptionProvider=ju.DefaultAstNodeDescriptionProvider=void 0;var ide=et(),ode=Yr(),Hh=Ye(),ade=ft(),sde=bn(),ude=co(),Ib=class{constructor(e){this.astNodeLocator=e.workspace.AstNodeLocator}createDescription(e,r,n=(0,Hh.getDocument)(e)){return{node:e,name:r,type:e.$type,documentUri:n.uri,path:this.astNodeLocator.getAstNodePath(e)}}};ju.DefaultAstNodeDescriptionProvider=Ib;var qb=class{constructor(e){this.nodeLocator=e.workspace.AstNodeLocator}async createDescriptions(e,r=ide.CancellationToken.None){let n=[],i=e.parseResult.value;for(let o of(0,Hh.streamAst)(i))await(0,sde.interruptAndCheck)(r),(0,Hh.streamReferences)(o).filter(a=>!(0,ode.isLinkingError)(a)).forEach(a=>{let s=this.createDescription(a);s&&n.push(s)});return n}createDescription(e){let r=e.reference.$nodeDescription,n=e.reference.$refNode;if(!r||!n)return;let i=(0,Hh.getDocument)(e.container).uri;return{sourceUri:i,sourcePath:this.nodeLocator.getAstNodePath(e.container),targetUri:r.documentUri,targetPath:r.path,segment:(0,ade.toDocumentSegment)(n),local:(0,ude.equalURI)(r.documentUri,i)}}};ju.DefaultReferenceDescriptionProvider=qb});var j$=h(Wh=>{"use strict";Object.defineProperty(Wh,"__esModule",{value:!0});Wh.DefaultAstNodeLocator=void 0;var Lb=class{constructor(){this.segmentSeparator="/",this.indexSeparator="@"}getAstNodePath(e){if(e.$container){let r=this.getAstNodePath(e.$container),n=this.getPathSegment(e);return r+this.segmentSeparator+n}return""}getPathSegment({$containerProperty:e,$containerIndex:r}){if(!e)throw new Error("Missing '$containerProperty' in AST node.");return r!==void 0?e+this.indexSeparator+r:e}getAstNode(e,r){return r.split(this.segmentSeparator).reduce((i,o)=>{if(!i||o.length===0)return i;let a=o.indexOf(this.indexSeparator);if(a>0){let s=o.substring(0,a),u=parseInt(o.substring(a+1)),d=i[s];return d?.[u]}return i[o]},e)}};Wh.DefaultAstNodeLocator=Lb});var Mb=h((iAe,U$)=>{"use strict";U$.exports=uo()});var St=h(Gr=>{"use strict";Object.defineProperty(Gr,"__esModule",{value:!0});Gr.ProtocolNotificationType=Gr.ProtocolNotificationType0=Gr.ProtocolRequestType=Gr.ProtocolRequestType0=Gr.RegistrationType=Gr.MessageDirection=void 0;var Uu=uo(),cde;(function(t){t.clientToServer="clientToServer",t.serverToClient="serverToClient",t.both="both"})(cde=Gr.MessageDirection||(Gr.MessageDirection={}));var $b=class{constructor(e){this.method=e}};Gr.RegistrationType=$b;var Fb=class extends Uu.RequestType0{constructor(e){super(e)}};Gr.ProtocolRequestType0=Fb;var jb=class extends Uu.RequestType{constructor(e){super(e,Uu.ParameterStructures.byName)}};Gr.ProtocolRequestType=jb;var Ub=class extends Uu.NotificationType0{constructor(e){super(e)}};Gr.ProtocolNotificationType0=Ub;var Gb=class extends Uu.NotificationType{constructor(e){super(e,Uu.ParameterStructures.byName)}};Gr.ProtocolNotificationType=Gb});var Kh=h(Ht=>{"use strict";Object.defineProperty(Ht,"__esModule",{value:!0});Ht.objectLiteral=Ht.typedArray=Ht.stringArray=Ht.array=Ht.func=Ht.error=Ht.number=Ht.string=Ht.boolean=void 0;function lde(t){return t===!0||t===!1}Ht.boolean=lde;function G$(t){return typeof t=="string"||t instanceof String}Ht.string=G$;function dde(t){return typeof t=="number"||t instanceof Number}Ht.number=dde;function fde(t){return t instanceof Error}Ht.error=fde;function pde(t){return typeof t=="function"}Ht.func=pde;function H$(t){return Array.isArray(t)}Ht.array=H$;function hde(t){return H$(t)&&t.every(e=>G$(e))}Ht.stringArray=hde;function mde(t,e){return Array.isArray(t)&&t.every(e)}Ht.typedArray=mde;function gde(t){return t!==null&&typeof t=="object"}Ht.objectLiteral=gde});var K$=h(Ol=>{"use strict";Object.defineProperty(Ol,"__esModule",{value:!0});Ol.ImplementationRequest=void 0;var W$=St(),yde;(function(t){t.method="textDocument/implementation",t.messageDirection=W$.MessageDirection.clientToServer,t.type=new W$.ProtocolRequestType(t.method)})(yde=Ol.ImplementationRequest||(Ol.ImplementationRequest={}))});var z$=h(Il=>{"use strict";Object.defineProperty(Il,"__esModule",{value:!0});Il.TypeDefinitionRequest=void 0;var B$=St(),vde;(function(t){t.method="textDocument/typeDefinition",t.messageDirection=B$.MessageDirection.clientToServer,t.type=new B$.ProtocolRequestType(t.method)})(vde=Il.TypeDefinitionRequest||(Il.TypeDefinitionRequest={}))});var V$=h(la=>{"use strict";Object.defineProperty(la,"__esModule",{value:!0});la.DidChangeWorkspaceFoldersNotification=la.WorkspaceFoldersRequest=void 0;var Bh=St(),_de;(function(t){t.method="workspace/workspaceFolders",t.messageDirection=Bh.MessageDirection.serverToClient,t.type=new Bh.ProtocolRequestType0(t.method)})(_de=la.WorkspaceFoldersRequest||(la.WorkspaceFoldersRequest={}));var Tde;(function(t){t.method="workspace/didChangeWorkspaceFolders",t.messageDirection=Bh.MessageDirection.clientToServer,t.type=new Bh.ProtocolNotificationType(t.method)})(Tde=la.DidChangeWorkspaceFoldersNotification||(la.DidChangeWorkspaceFoldersNotification={}))});var X$=h(ql=>{"use strict";Object.defineProperty(ql,"__esModule",{value:!0});ql.ConfigurationRequest=void 0;var Y$=St(),Rde;(function(t){t.method="workspace/configuration",t.messageDirection=Y$.MessageDirection.serverToClient,t.type=new Y$.ProtocolRequestType(t.method)})(Rde=ql.ConfigurationRequest||(ql.ConfigurationRequest={}))});var J$=h(da=>{"use strict";Object.defineProperty(da,"__esModule",{value:!0});da.ColorPresentationRequest=da.DocumentColorRequest=void 0;var zh=St(),bde;(function(t){t.method="textDocument/documentColor",t.messageDirection=zh.MessageDirection.clientToServer,t.type=new zh.ProtocolRequestType(t.method)})(bde=da.DocumentColorRequest||(da.DocumentColorRequest={}));var Cde;(function(t){t.method="textDocument/colorPresentation",t.messageDirection=zh.MessageDirection.clientToServer,t.type=new zh.ProtocolRequestType(t.method)})(Cde=da.ColorPresentationRequest||(da.ColorPresentationRequest={}))});var Z$=h(xl=>{"use strict";Object.defineProperty(xl,"__esModule",{value:!0});xl.FoldingRangeRequest=void 0;var Q$=St(),Ade;(function(t){t.method="textDocument/foldingRange",t.messageDirection=Q$.MessageDirection.clientToServer,t.type=new Q$.ProtocolRequestType(t.method)})(Ade=xl.FoldingRangeRequest||(xl.FoldingRangeRequest={}))});var tF=h(Ll=>{"use strict";Object.defineProperty(Ll,"__esModule",{value:!0});Ll.DeclarationRequest=void 0;var eF=St(),Pde;(function(t){t.method="textDocument/declaration",t.messageDirection=eF.MessageDirection.clientToServer,t.type=new eF.ProtocolRequestType(t.method)})(Pde=Ll.DeclarationRequest||(Ll.DeclarationRequest={}))});var nF=h(Ml=>{"use strict";Object.defineProperty(Ml,"__esModule",{value:!0});Ml.SelectionRangeRequest=void 0;var rF=St(),Sde;(function(t){t.method="textDocument/selectionRange",t.messageDirection=rF.MessageDirection.clientToServer,t.type=new rF.ProtocolRequestType(t.method)})(Sde=Ml.SelectionRangeRequest||(Ml.SelectionRangeRequest={}))});var iF=h(oi=>{"use strict";Object.defineProperty(oi,"__esModule",{value:!0});oi.WorkDoneProgressCancelNotification=oi.WorkDoneProgressCreateRequest=oi.WorkDoneProgress=void 0;var Ede=uo(),Vh=St(),kde;(function(t){t.type=new Ede.ProgressType;function e(r){return r===t.type}t.is=e})(kde=oi.WorkDoneProgress||(oi.WorkDoneProgress={}));var Nde;(function(t){t.method="window/workDoneProgress/create",t.messageDirection=Vh.MessageDirection.serverToClient,t.type=new Vh.ProtocolRequestType(t.method)})(Nde=oi.WorkDoneProgressCreateRequest||(oi.WorkDoneProgressCreateRequest={}));var wde;(function(t){t.method="window/workDoneProgress/cancel",t.messageDirection=Vh.MessageDirection.clientToServer,t.type=new Vh.ProtocolNotificationType(t.method)})(wde=oi.WorkDoneProgressCancelNotification||(oi.WorkDoneProgressCancelNotification={}))});var oF=h(ai=>{"use strict";Object.defineProperty(ai,"__esModule",{value:!0});ai.CallHierarchyOutgoingCallsRequest=ai.CallHierarchyIncomingCallsRequest=ai.CallHierarchyPrepareRequest=void 0;var Gu=St(),Dde;(function(t){t.method="textDocument/prepareCallHierarchy",t.messageDirection=Gu.MessageDirection.clientToServer,t.type=new Gu.ProtocolRequestType(t.method)})(Dde=ai.CallHierarchyPrepareRequest||(ai.CallHierarchyPrepareRequest={}));var Ode;(function(t){t.method="callHierarchy/incomingCalls",t.messageDirection=Gu.MessageDirection.clientToServer,t.type=new Gu.ProtocolRequestType(t.method)})(Ode=ai.CallHierarchyIncomingCallsRequest||(ai.CallHierarchyIncomingCallsRequest={}));var Ide;(function(t){t.method="callHierarchy/outgoingCalls",t.messageDirection=Gu.MessageDirection.clientToServer,t.type=new Gu.ProtocolRequestType(t.method)})(Ide=ai.CallHierarchyOutgoingCallsRequest||(ai.CallHierarchyOutgoingCallsRequest={}))});var aF=h(Wt=>{"use strict";Object.defineProperty(Wt,"__esModule",{value:!0});Wt.SemanticTokensRefreshRequest=Wt.SemanticTokensRangeRequest=Wt.SemanticTokensDeltaRequest=Wt.SemanticTokensRequest=Wt.SemanticTokensRegistrationType=Wt.TokenFormat=void 0;var Eo=St(),qde;(function(t){t.Relative="relative"})(qde=Wt.TokenFormat||(Wt.TokenFormat={}));var Yh;(function(t){t.method="textDocument/semanticTokens",t.type=new Eo.RegistrationType(t.method)})(Yh=Wt.SemanticTokensRegistrationType||(Wt.SemanticTokensRegistrationType={}));var xde;(function(t){t.method="textDocument/semanticTokens/full",t.messageDirection=Eo.MessageDirection.clientToServer,t.type=new Eo.ProtocolRequestType(t.method),t.registrationMethod=Yh.method})(xde=Wt.SemanticTokensRequest||(Wt.SemanticTokensRequest={}));var Lde;(function(t){t.method="textDocument/semanticTokens/full/delta",t.messageDirection=Eo.MessageDirection.clientToServer,t.type=new Eo.ProtocolRequestType(t.method),t.registrationMethod=Yh.method})(Lde=Wt.SemanticTokensDeltaRequest||(Wt.SemanticTokensDeltaRequest={}));var Mde;(function(t){t.method="textDocument/semanticTokens/range",t.messageDirection=Eo.MessageDirection.clientToServer,t.type=new Eo.ProtocolRequestType(t.method),t.registrationMethod=Yh.method})(Mde=Wt.SemanticTokensRangeRequest||(Wt.SemanticTokensRangeRequest={}));var $de;(function(t){t.method="workspace/semanticTokens/refresh",t.messageDirection=Eo.MessageDirection.clientToServer,t.type=new Eo.ProtocolRequestType0(t.method)})($de=Wt.SemanticTokensRefreshRequest||(Wt.SemanticTokensRefreshRequest={}))});var uF=h($l=>{"use strict";Object.defineProperty($l,"__esModule",{value:!0});$l.ShowDocumentRequest=void 0;var sF=St(),Fde;(function(t){t.method="window/showDocument",t.messageDirection=sF.MessageDirection.serverToClient,t.type=new sF.ProtocolRequestType(t.method)})(Fde=$l.ShowDocumentRequest||($l.ShowDocumentRequest={}))});var lF=h(Fl=>{"use strict";Object.defineProperty(Fl,"__esModule",{value:!0});Fl.LinkedEditingRangeRequest=void 0;var cF=St(),jde;(function(t){t.method="textDocument/linkedEditingRange",t.messageDirection=cF.MessageDirection.clientToServer,t.type=new cF.ProtocolRequestType(t.method)})(jde=Fl.LinkedEditingRangeRequest||(Fl.LinkedEditingRangeRequest={}))});var dF=h(Et=>{"use strict";Object.defineProperty(Et,"__esModule",{value:!0});Et.WillDeleteFilesRequest=Et.DidDeleteFilesNotification=Et.DidRenameFilesNotification=Et.WillRenameFilesRequest=Et.DidCreateFilesNotification=Et.WillCreateFilesRequest=Et.FileOperationPatternKind=void 0;var xn=St(),Ude;(function(t){t.file="file",t.folder="folder"})(Ude=Et.FileOperationPatternKind||(Et.FileOperationPatternKind={}));var Gde;(function(t){t.method="workspace/willCreateFiles",t.messageDirection=xn.MessageDirection.clientToServer,t.type=new xn.ProtocolRequestType(t.method)})(Gde=Et.WillCreateFilesRequest||(Et.WillCreateFilesRequest={}));var Hde;(function(t){t.method="workspace/didCreateFiles",t.messageDirection=xn.MessageDirection.clientToServer,t.type=new xn.ProtocolNotificationType(t.method)})(Hde=Et.DidCreateFilesNotification||(Et.DidCreateFilesNotification={}));var Wde;(function(t){t.method="workspace/willRenameFiles",t.messageDirection=xn.MessageDirection.clientToServer,t.type=new xn.ProtocolRequestType(t.method)})(Wde=Et.WillRenameFilesRequest||(Et.WillRenameFilesRequest={}));var Kde;(function(t){t.method="workspace/didRenameFiles",t.messageDirection=xn.MessageDirection.clientToServer,t.type=new xn.ProtocolNotificationType(t.method)})(Kde=Et.DidRenameFilesNotification||(Et.DidRenameFilesNotification={}));var Bde;(function(t){t.method="workspace/didDeleteFiles",t.messageDirection=xn.MessageDirection.clientToServer,t.type=new xn.ProtocolNotificationType(t.method)})(Bde=Et.DidDeleteFilesNotification||(Et.DidDeleteFilesNotification={}));var zde;(function(t){t.method="workspace/willDeleteFiles",t.messageDirection=xn.MessageDirection.clientToServer,t.type=new xn.ProtocolRequestType(t.method)})(zde=Et.WillDeleteFilesRequest||(Et.WillDeleteFilesRequest={}))});var pF=h(si=>{"use strict";Object.defineProperty(si,"__esModule",{value:!0});si.MonikerRequest=si.MonikerKind=si.UniquenessLevel=void 0;var fF=St(),Vde;(function(t){t.document="document",t.project="project",t.group="group",t.scheme="scheme",t.global="global"})(Vde=si.UniquenessLevel||(si.UniquenessLevel={}));var Yde;(function(t){t.$import="import",t.$export="export",t.local="local"})(Yde=si.MonikerKind||(si.MonikerKind={}));var Xde;(function(t){t.method="textDocument/moniker",t.messageDirection=fF.MessageDirection.clientToServer,t.type=new fF.ProtocolRequestType(t.method)})(Xde=si.MonikerRequest||(si.MonikerRequest={}))});var hF=h(ui=>{"use strict";Object.defineProperty(ui,"__esModule",{value:!0});ui.TypeHierarchySubtypesRequest=ui.TypeHierarchySupertypesRequest=ui.TypeHierarchyPrepareRequest=void 0;var Hu=St(),Jde;(function(t){t.method="textDocument/prepareTypeHierarchy",t.messageDirection=Hu.MessageDirection.clientToServer,t.type=new Hu.ProtocolRequestType(t.method)})(Jde=ui.TypeHierarchyPrepareRequest||(ui.TypeHierarchyPrepareRequest={}));var Qde;(function(t){t.method="typeHierarchy/supertypes",t.messageDirection=Hu.MessageDirection.clientToServer,t.type=new Hu.ProtocolRequestType(t.method)})(Qde=ui.TypeHierarchySupertypesRequest||(ui.TypeHierarchySupertypesRequest={}));var Zde;(function(t){t.method="typeHierarchy/subtypes",t.messageDirection=Hu.MessageDirection.clientToServer,t.type=new Hu.ProtocolRequestType(t.method)})(Zde=ui.TypeHierarchySubtypesRequest||(ui.TypeHierarchySubtypesRequest={}))});var mF=h(fa=>{"use strict";Object.defineProperty(fa,"__esModule",{value:!0});fa.InlineValueRefreshRequest=fa.InlineValueRequest=void 0;var Xh=St(),efe;(function(t){t.method="textDocument/inlineValue",t.messageDirection=Xh.MessageDirection.clientToServer,t.type=new Xh.ProtocolRequestType(t.method)})(efe=fa.InlineValueRequest||(fa.InlineValueRequest={}));var tfe;(function(t){t.method="workspace/inlineValue/refresh",t.messageDirection=Xh.MessageDirection.clientToServer,t.type=new Xh.ProtocolRequestType0(t.method)})(tfe=fa.InlineValueRefreshRequest||(fa.InlineValueRefreshRequest={}))});var gF=h(ci=>{"use strict";Object.defineProperty(ci,"__esModule",{value:!0});ci.InlayHintRefreshRequest=ci.InlayHintResolveRequest=ci.InlayHintRequest=void 0;var Wu=St(),rfe;(function(t){t.method="textDocument/inlayHint",t.messageDirection=Wu.MessageDirection.clientToServer,t.type=new Wu.ProtocolRequestType(t.method)})(rfe=ci.InlayHintRequest||(ci.InlayHintRequest={}));var nfe;(function(t){t.method="inlayHint/resolve",t.messageDirection=Wu.MessageDirection.clientToServer,t.type=new Wu.ProtocolRequestType(t.method)})(nfe=ci.InlayHintResolveRequest||(ci.InlayHintResolveRequest={}));var ife;(function(t){t.method="workspace/inlayHint/refresh",t.messageDirection=Wu.MessageDirection.clientToServer,t.type=new Wu.ProtocolRequestType0(t.method)})(ife=ci.InlayHintRefreshRequest||(ci.InlayHintRefreshRequest={}))});var vF=h(vr=>{"use strict";Object.defineProperty(vr,"__esModule",{value:!0});vr.DiagnosticRefreshRequest=vr.WorkspaceDiagnosticRequest=vr.DocumentDiagnosticRequest=vr.DocumentDiagnosticReportKind=vr.DiagnosticServerCancellationData=void 0;var yF=uo(),ofe=Kh(),Ku=St(),afe;(function(t){function e(r){let n=r;return n&&ofe.boolean(n.retriggerRequest)}t.is=e})(afe=vr.DiagnosticServerCancellationData||(vr.DiagnosticServerCancellationData={}));var sfe;(function(t){t.Full="full",t.Unchanged="unchanged"})(sfe=vr.DocumentDiagnosticReportKind||(vr.DocumentDiagnosticReportKind={}));var ufe;(function(t){t.method="textDocument/diagnostic",t.messageDirection=Ku.MessageDirection.clientToServer,t.type=new Ku.ProtocolRequestType(t.method),t.partialResult=new yF.ProgressType})(ufe=vr.DocumentDiagnosticRequest||(vr.DocumentDiagnosticRequest={}));var cfe;(function(t){t.method="workspace/diagnostic",t.messageDirection=Ku.MessageDirection.clientToServer,t.type=new Ku.ProtocolRequestType(t.method),t.partialResult=new yF.ProgressType})(cfe=vr.WorkspaceDiagnosticRequest||(vr.WorkspaceDiagnosticRequest={}));var lfe;(function(t){t.method="workspace/diagnostic/refresh",t.messageDirection=Ku.MessageDirection.clientToServer,t.type=new Ku.ProtocolRequestType0(t.method)})(lfe=vr.DiagnosticRefreshRequest||(vr.DiagnosticRefreshRequest={}))});var RF=h(je=>{"use strict";Object.defineProperty(je,"__esModule",{value:!0});je.DidCloseNotebookDocumentNotification=je.DidSaveNotebookDocumentNotification=je.DidChangeNotebookDocumentNotification=je.NotebookCellArrayChange=je.DidOpenNotebookDocumentNotification=je.NotebookDocumentSyncRegistrationType=je.NotebookDocument=je.NotebookCell=je.ExecutionSummary=je.NotebookCellKind=void 0;var jl=ws(),li=Kh(),Ui=St(),_F;(function(t){t.Markup=1,t.Code=2;function e(r){return r===1||r===2}t.is=e})(_F=je.NotebookCellKind||(je.NotebookCellKind={}));var TF;(function(t){function e(i,o){let a={executionOrder:i};return(o===!0||o===!1)&&(a.success=o),a}t.create=e;function r(i){let o=i;return li.objectLiteral(o)&&jl.uinteger.is(o.executionOrder)&&(o.success===void 0||li.boolean(o.success))}t.is=r;function n(i,o){return i===o?!0:i==null||o===null||o===void 0?!1:i.executionOrder===o.executionOrder&&i.success===o.success}t.equals=n})(TF=je.ExecutionSummary||(je.ExecutionSummary={}));var Hb;(function(t){function e(o,a){return{kind:o,document:a}}t.create=e;function r(o){let a=o;return li.objectLiteral(a)&&_F.is(a.kind)&&jl.DocumentUri.is(a.document)&&(a.metadata===void 0||li.objectLiteral(a.metadata))}t.is=r;function n(o,a){let s=new Set;return o.document!==a.document&&s.add("document"),o.kind!==a.kind&&s.add("kind"),o.executionSummary!==a.executionSummary&&s.add("executionSummary"),(o.metadata!==void 0||a.metadata!==void 0)&&!i(o.metadata,a.metadata)&&s.add("metadata"),(o.executionSummary!==void 0||a.executionSummary!==void 0)&&!TF.equals(o.executionSummary,a.executionSummary)&&s.add("executionSummary"),s}t.diff=n;function i(o,a){if(o===a)return!0;if(o==null||a===null||a===void 0||typeof o!=typeof a||typeof o!="object")return!1;let s=Array.isArray(o),u=Array.isArray(a);if(s!==u)return!1;if(s&&u){if(o.length!==a.length)return!1;for(let d=0;d<o.length;d++)if(!i(o[d],a[d]))return!1}if(li.objectLiteral(o)&&li.objectLiteral(a)){let d=Object.keys(o),p=Object.keys(a);if(d.length!==p.length||(d.sort(),p.sort(),!i(d,p)))return!1;for(let m=0;m<d.length;m++){let v=d[m];if(!i(o[v],a[v]))return!1}}return!0}})(Hb=je.NotebookCell||(je.NotebookCell={}));var dfe;(function(t){function e(n,i,o,a){return{uri:n,notebookType:i,version:o,cells:a}}t.create=e;function r(n){let i=n;return li.objectLiteral(i)&&li.string(i.uri)&&jl.integer.is(i.version)&&li.typedArray(i.cells,Hb.is)}t.is=r})(dfe=je.NotebookDocument||(je.NotebookDocument={}));var Ul;(function(t){t.method="notebookDocument/sync",t.messageDirection=Ui.MessageDirection.clientToServer,t.type=new Ui.RegistrationType(t.method)})(Ul=je.NotebookDocumentSyncRegistrationType||(je.NotebookDocumentSyncRegistrationType={}));var ffe;(function(t){t.method="notebookDocument/didOpen",t.messageDirection=Ui.MessageDirection.clientToServer,t.type=new Ui.ProtocolNotificationType(t.method),t.registrationMethod=Ul.method})(ffe=je.DidOpenNotebookDocumentNotification||(je.DidOpenNotebookDocumentNotification={}));var pfe;(function(t){function e(n){let i=n;return li.objectLiteral(i)&&jl.uinteger.is(i.start)&&jl.uinteger.is(i.deleteCount)&&(i.cells===void 0||li.typedArray(i.cells,Hb.is))}t.is=e;function r(n,i,o){let a={start:n,deleteCount:i};return o!==void 0&&(a.cells=o),a}t.create=r})(pfe=je.NotebookCellArrayChange||(je.NotebookCellArrayChange={}));var hfe;(function(t){t.method="notebookDocument/didChange",t.messageDirection=Ui.MessageDirection.clientToServer,t.type=new Ui.ProtocolNotificationType(t.method),t.registrationMethod=Ul.method})(hfe=je.DidChangeNotebookDocumentNotification||(je.DidChangeNotebookDocumentNotification={}));var mfe;(function(t){t.method="notebookDocument/didSave",t.messageDirection=Ui.MessageDirection.clientToServer,t.type=new Ui.ProtocolNotificationType(t.method),t.registrationMethod=Ul.method})(mfe=je.DidSaveNotebookDocumentNotification||(je.DidSaveNotebookDocumentNotification={}));var gfe;(function(t){t.method="notebookDocument/didClose",t.messageDirection=Ui.MessageDirection.clientToServer,t.type=new Ui.ProtocolNotificationType(t.method),t.registrationMethod=Ul.method})(gfe=je.DidCloseNotebookDocumentNotification||(je.DidCloseNotebookDocumentNotification={}))});var wF=h(A=>{"use strict";Object.defineProperty(A,"__esModule",{value:!0});A.WorkspaceSymbolRequest=A.CodeActionResolveRequest=A.CodeActionRequest=A.DocumentSymbolRequest=A.DocumentHighlightRequest=A.ReferencesRequest=A.DefinitionRequest=A.SignatureHelpRequest=A.SignatureHelpTriggerKind=A.HoverRequest=A.CompletionResolveRequest=A.CompletionRequest=A.CompletionTriggerKind=A.PublishDiagnosticsNotification=A.WatchKind=A.RelativePattern=A.FileChangeType=A.DidChangeWatchedFilesNotification=A.WillSaveTextDocumentWaitUntilRequest=A.WillSaveTextDocumentNotification=A.TextDocumentSaveReason=A.DidSaveTextDocumentNotification=A.DidCloseTextDocumentNotification=A.DidChangeTextDocumentNotification=A.TextDocumentContentChangeEvent=A.DidOpenTextDocumentNotification=A.TextDocumentSyncKind=A.TelemetryEventNotification=A.LogMessageNotification=A.ShowMessageRequest=A.ShowMessageNotification=A.MessageType=A.DidChangeConfigurationNotification=A.ExitNotification=A.ShutdownRequest=A.InitializedNotification=A.InitializeErrorCodes=A.InitializeRequest=A.WorkDoneProgressOptions=A.TextDocumentRegistrationOptions=A.StaticRegistrationOptions=A.PositionEncodingKind=A.FailureHandlingKind=A.ResourceOperationKind=A.UnregistrationRequest=A.RegistrationRequest=A.DocumentSelector=A.NotebookCellTextDocumentFilter=A.NotebookDocumentFilter=A.TextDocumentFilter=void 0;A.TypeHierarchySubtypesRequest=A.TypeHierarchyPrepareRequest=A.MonikerRequest=A.MonikerKind=A.UniquenessLevel=A.WillDeleteFilesRequest=A.DidDeleteFilesNotification=A.WillRenameFilesRequest=A.DidRenameFilesNotification=A.WillCreateFilesRequest=A.DidCreateFilesNotification=A.FileOperationPatternKind=A.LinkedEditingRangeRequest=A.ShowDocumentRequest=A.SemanticTokensRegistrationType=A.SemanticTokensRefreshRequest=A.SemanticTokensRangeRequest=A.SemanticTokensDeltaRequest=A.SemanticTokensRequest=A.TokenFormat=A.CallHierarchyPrepareRequest=A.CallHierarchyOutgoingCallsRequest=A.CallHierarchyIncomingCallsRequest=A.WorkDoneProgressCancelNotification=A.WorkDoneProgressCreateRequest=A.WorkDoneProgress=A.SelectionRangeRequest=A.DeclarationRequest=A.FoldingRangeRequest=A.ColorPresentationRequest=A.DocumentColorRequest=A.ConfigurationRequest=A.DidChangeWorkspaceFoldersNotification=A.WorkspaceFoldersRequest=A.TypeDefinitionRequest=A.ImplementationRequest=A.ApplyWorkspaceEditRequest=A.ExecuteCommandRequest=A.PrepareRenameRequest=A.RenameRequest=A.PrepareSupportDefaultBehavior=A.DocumentOnTypeFormattingRequest=A.DocumentRangeFormattingRequest=A.DocumentFormattingRequest=A.DocumentLinkResolveRequest=A.DocumentLinkRequest=A.CodeLensRefreshRequest=A.CodeLensResolveRequest=A.CodeLensRequest=A.WorkspaceSymbolResolveRequest=void 0;A.DidCloseNotebookDocumentNotification=A.DidSaveNotebookDocumentNotification=A.DidChangeNotebookDocumentNotification=A.NotebookCellArrayChange=A.DidOpenNotebookDocumentNotification=A.NotebookDocumentSyncRegistrationType=A.NotebookDocument=A.NotebookCell=A.ExecutionSummary=A.NotebookCellKind=A.DiagnosticRefreshRequest=A.WorkspaceDiagnosticRequest=A.DocumentDiagnosticRequest=A.DocumentDiagnosticReportKind=A.DiagnosticServerCancellationData=A.InlayHintRefreshRequest=A.InlayHintResolveRequest=A.InlayHintRequest=A.InlineValueRefreshRequest=A.InlineValueRequest=A.TypeHierarchySupertypesRequest=void 0;var B=St(),bF=ws(),_r=Kh(),yfe=K$();Object.defineProperty(A,"ImplementationRequest",{enumerable:!0,get:function(){return yfe.ImplementationRequest}});var vfe=z$();Object.defineProperty(A,"TypeDefinitionRequest",{enumerable:!0,get:function(){return vfe.TypeDefinitionRequest}});var CF=V$();Object.defineProperty(A,"WorkspaceFoldersRequest",{enumerable:!0,get:function(){return CF.WorkspaceFoldersRequest}});Object.defineProperty(A,"DidChangeWorkspaceFoldersNotification",{enumerable:!0,get:function(){return CF.DidChangeWorkspaceFoldersNotification}});var _fe=X$();Object.defineProperty(A,"ConfigurationRequest",{enumerable:!0,get:function(){return _fe.ConfigurationRequest}});var AF=J$();Object.defineProperty(A,"DocumentColorRequest",{enumerable:!0,get:function(){return AF.DocumentColorRequest}});Object.defineProperty(A,"ColorPresentationRequest",{enumerable:!0,get:function(){return AF.ColorPresentationRequest}});var Tfe=Z$();Object.defineProperty(A,"FoldingRangeRequest",{enumerable:!0,get:function(){return Tfe.FoldingRangeRequest}});var Rfe=tF();Object.defineProperty(A,"DeclarationRequest",{enumerable:!0,get:function(){return Rfe.DeclarationRequest}});var bfe=nF();Object.defineProperty(A,"SelectionRangeRequest",{enumerable:!0,get:function(){return bfe.SelectionRangeRequest}});var Wb=iF();Object.defineProperty(A,"WorkDoneProgress",{enumerable:!0,get:function(){return Wb.WorkDoneProgress}});Object.defineProperty(A,"WorkDoneProgressCreateRequest",{enumerable:!0,get:function(){return Wb.WorkDoneProgressCreateRequest}});Object.defineProperty(A,"WorkDoneProgressCancelNotification",{enumerable:!0,get:function(){return Wb.WorkDoneProgressCancelNotification}});var Kb=oF();Object.defineProperty(A,"CallHierarchyIncomingCallsRequest",{enumerable:!0,get:function(){return Kb.CallHierarchyIncomingCallsRequest}});Object.defineProperty(A,"CallHierarchyOutgoingCallsRequest",{enumerable:!0,get:function(){return Kb.CallHierarchyOutgoingCallsRequest}});Object.defineProperty(A,"CallHierarchyPrepareRequest",{enumerable:!0,get:function(){return Kb.CallHierarchyPrepareRequest}});var Bu=aF();Object.defineProperty(A,"TokenFormat",{enumerable:!0,get:function(){return Bu.TokenFormat}});Object.defineProperty(A,"SemanticTokensRequest",{enumerable:!0,get:function(){return Bu.SemanticTokensRequest}});Object.defineProperty(A,"SemanticTokensDeltaRequest",{enumerable:!0,get:function(){return Bu.SemanticTokensDeltaRequest}});Object.defineProperty(A,"SemanticTokensRangeRequest",{enumerable:!0,get:function(){return Bu.SemanticTokensRangeRequest}});Object.defineProperty(A,"SemanticTokensRefreshRequest",{enumerable:!0,get:function(){return Bu.SemanticTokensRefreshRequest}});Object.defineProperty(A,"SemanticTokensRegistrationType",{enumerable:!0,get:function(){return Bu.SemanticTokensRegistrationType}});var Cfe=uF();Object.defineProperty(A,"ShowDocumentRequest",{enumerable:!0,get:function(){return Cfe.ShowDocumentRequest}});var Afe=lF();Object.defineProperty(A,"LinkedEditingRangeRequest",{enumerable:!0,get:function(){return Afe.LinkedEditingRangeRequest}});var Ya=dF();Object.defineProperty(A,"FileOperationPatternKind",{enumerable:!0,get:function(){return Ya.FileOperationPatternKind}});Object.defineProperty(A,"DidCreateFilesNotification",{enumerable:!0,get:function(){return Ya.DidCreateFilesNotification}});Object.defineProperty(A,"WillCreateFilesRequest",{enumerable:!0,get:function(){return Ya.WillCreateFilesRequest}});Object.defineProperty(A,"DidRenameFilesNotification",{enumerable:!0,get:function(){return Ya.DidRenameFilesNotification}});Object.defineProperty(A,"WillRenameFilesRequest",{enumerable:!0,get:function(){return Ya.WillRenameFilesRequest}});Object.defineProperty(A,"DidDeleteFilesNotification",{enumerable:!0,get:function(){return Ya.DidDeleteFilesNotification}});Object.defineProperty(A,"WillDeleteFilesRequest",{enumerable:!0,get:function(){return Ya.WillDeleteFilesRequest}});var Bb=pF();Object.defineProperty(A,"UniquenessLevel",{enumerable:!0,get:function(){return Bb.UniquenessLevel}});Object.defineProperty(A,"MonikerKind",{enumerable:!0,get:function(){return Bb.MonikerKind}});Object.defineProperty(A,"MonikerRequest",{enumerable:!0,get:function(){return Bb.MonikerRequest}});var zb=hF();Object.defineProperty(A,"TypeHierarchyPrepareRequest",{enumerable:!0,get:function(){return zb.TypeHierarchyPrepareRequest}});Object.defineProperty(A,"TypeHierarchySubtypesRequest",{enumerable:!0,get:function(){return zb.TypeHierarchySubtypesRequest}});Object.defineProperty(A,"TypeHierarchySupertypesRequest",{enumerable:!0,get:function(){return zb.TypeHierarchySupertypesRequest}});var PF=mF();Object.defineProperty(A,"InlineValueRequest",{enumerable:!0,get:function(){return PF.InlineValueRequest}});Object.defineProperty(A,"InlineValueRefreshRequest",{enumerable:!0,get:function(){return PF.InlineValueRefreshRequest}});var Vb=gF();Object.defineProperty(A,"InlayHintRequest",{enumerable:!0,get:function(){return Vb.InlayHintRequest}});Object.defineProperty(A,"InlayHintResolveRequest",{enumerable:!0,get:function(){return Vb.InlayHintResolveRequest}});Object.defineProperty(A,"InlayHintRefreshRequest",{enumerable:!0,get:function(){return Vb.InlayHintRefreshRequest}});var Gl=vF();Object.defineProperty(A,"DiagnosticServerCancellationData",{enumerable:!0,get:function(){return Gl.DiagnosticServerCancellationData}});Object.defineProperty(A,"DocumentDiagnosticReportKind",{enumerable:!0,get:function(){return Gl.DocumentDiagnosticReportKind}});Object.defineProperty(A,"DocumentDiagnosticRequest",{enumerable:!0,get:function(){return Gl.DocumentDiagnosticRequest}});Object.defineProperty(A,"WorkspaceDiagnosticRequest",{enumerable:!0,get:function(){return Gl.WorkspaceDiagnosticRequest}});Object.defineProperty(A,"DiagnosticRefreshRequest",{enumerable:!0,get:function(){return Gl.DiagnosticRefreshRequest}});var Gi=RF();Object.defineProperty(A,"NotebookCellKind",{enumerable:!0,get:function(){return Gi.NotebookCellKind}});Object.defineProperty(A,"ExecutionSummary",{enumerable:!0,get:function(){return Gi.ExecutionSummary}});Object.defineProperty(A,"NotebookCell",{enumerable:!0,get:function(){return Gi.NotebookCell}});Object.defineProperty(A,"NotebookDocument",{enumerable:!0,get:function(){return Gi.NotebookDocument}});Object.defineProperty(A,"NotebookDocumentSyncRegistrationType",{enumerable:!0,get:function(){return Gi.NotebookDocumentSyncRegistrationType}});Object.defineProperty(A,"DidOpenNotebookDocumentNotification",{enumerable:!0,get:function(){return Gi.DidOpenNotebookDocumentNotification}});Object.defineProperty(A,"NotebookCellArrayChange",{enumerable:!0,get:function(){return Gi.NotebookCellArrayChange}});Object.defineProperty(A,"DidChangeNotebookDocumentNotification",{enumerable:!0,get:function(){return Gi.DidChangeNotebookDocumentNotification}});Object.defineProperty(A,"DidSaveNotebookDocumentNotification",{enumerable:!0,get:function(){return Gi.DidSaveNotebookDocumentNotification}});Object.defineProperty(A,"DidCloseNotebookDocumentNotification",{enumerable:!0,get:function(){return Gi.DidCloseNotebookDocumentNotification}});var SF;(function(t){function e(r){let n=r;return _r.string(n.language)||_r.string(n.scheme)||_r.string(n.pattern)}t.is=e})(SF=A.TextDocumentFilter||(A.TextDocumentFilter={}));var EF;(function(t){function e(r){let n=r;return _r.objectLiteral(n)&&(_r.string(n.notebookType)||_r.string(n.scheme)||_r.string(n.pattern))}t.is=e})(EF=A.NotebookDocumentFilter||(A.NotebookDocumentFilter={}));var kF;(function(t){function e(r){let n=r;return _r.objectLiteral(n)&&(_r.string(n.notebook)||EF.is(n.notebook))&&(n.language===void 0||_r.string(n.language))}t.is=e})(kF=A.NotebookCellTextDocumentFilter||(A.NotebookCellTextDocumentFilter={}));var NF;(function(t){function e(r){if(!Array.isArray(r))return!1;for(let n of r)if(!_r.string(n)&&!SF.is(n)&&!kF.is(n))return!1;return!0}t.is=e})(NF=A.DocumentSelector||(A.DocumentSelector={}));var Pfe;(function(t){t.method="client/registerCapability",t.messageDirection=B.MessageDirection.serverToClient,t.type=new B.ProtocolRequestType(t.method)})(Pfe=A.RegistrationRequest||(A.RegistrationRequest={}));var Sfe;(function(t){t.method="client/unregisterCapability",t.messageDirection=B.MessageDirection.serverToClient,t.type=new B.ProtocolRequestType(t.method)})(Sfe=A.UnregistrationRequest||(A.UnregistrationRequest={}));var Efe;(function(t){t.Create="create",t.Rename="rename",t.Delete="delete"})(Efe=A.ResourceOperationKind||(A.ResourceOperationKind={}));var kfe;(function(t){t.Abort="abort",t.Transactional="transactional",t.TextOnlyTransactional="textOnlyTransactional",t.Undo="undo"})(kfe=A.FailureHandlingKind||(A.FailureHandlingKind={}));var Nfe;(function(t){t.UTF8="utf-8",t.UTF16="utf-16",t.UTF32="utf-32"})(Nfe=A.PositionEncodingKind||(A.PositionEncodingKind={}));var wfe;(function(t){function e(r){let n=r;return n&&_r.string(n.id)&&n.id.length>0}t.hasId=e})(wfe=A.StaticRegistrationOptions||(A.StaticRegistrationOptions={}));var Dfe;(function(t){function e(r){let n=r;return n&&(n.documentSelector===null||NF.is(n.documentSelector))}t.is=e})(Dfe=A.TextDocumentRegistrationOptions||(A.TextDocumentRegistrationOptions={}));var Ofe;(function(t){function e(n){let i=n;return _r.objectLiteral(i)&&(i.workDoneProgress===void 0||_r.boolean(i.workDoneProgress))}t.is=e;function r(n){let i=n;return i&&_r.boolean(i.workDoneProgress)}t.hasWorkDoneProgress=r})(Ofe=A.WorkDoneProgressOptions||(A.WorkDoneProgressOptions={}));var Ife;(function(t){t.method="initialize",t.messageDirection=B.MessageDirection.clientToServer,t.type=new B.ProtocolRequestType(t.method)})(Ife=A.InitializeRequest||(A.InitializeRequest={}));var qfe;(function(t){t.unknownProtocolVersion=1})(qfe=A.InitializeErrorCodes||(A.InitializeErrorCodes={}));var xfe;(function(t){t.method="initialized",t.messageDirection=B.MessageDirection.clientToServer,t.type=new B.ProtocolNotificationType(t.method)})(xfe=A.InitializedNotification||(A.InitializedNotification={}));var Lfe;(function(t){t.method="shutdown",t.messageDirection=B.MessageDirection.clientToServer,t.type=new B.ProtocolRequestType0(t.method)})(Lfe=A.ShutdownRequest||(A.ShutdownRequest={}));var Mfe;(function(t){t.method="exit",t.messageDirection=B.MessageDirection.clientToServer,t.type=new B.ProtocolNotificationType0(t.method)})(Mfe=A.ExitNotification||(A.ExitNotification={}));var $fe;(function(t){t.method="workspace/didChangeConfiguration",t.messageDirection=B.MessageDirection.clientToServer,t.type=new B.ProtocolNotificationType(t.method)})($fe=A.DidChangeConfigurationNotification||(A.DidChangeConfigurationNotification={}));var Ffe;(function(t){t.Error=1,t.Warning=2,t.Info=3,t.Log=4})(Ffe=A.MessageType||(A.MessageType={}));var jfe;(function(t){t.method="window/showMessage",t.messageDirection=B.MessageDirection.serverToClient,t.type=new B.ProtocolNotificationType(t.method)})(jfe=A.ShowMessageNotification||(A.ShowMessageNotification={}));var Ufe;(function(t){t.method="window/showMessageRequest",t.messageDirection=B.MessageDirection.serverToClient,t.type=new B.ProtocolRequestType(t.method)})(Ufe=A.ShowMessageRequest||(A.ShowMessageRequest={}));var Gfe;(function(t){t.method="window/logMessage",t.messageDirection=B.MessageDirection.serverToClient,t.type=new B.ProtocolNotificationType(t.method)})(Gfe=A.LogMessageNotification||(A.LogMessageNotification={}));var Hfe;(function(t){t.method="telemetry/event",t.messageDirection=B.MessageDirection.serverToClient,t.type=new B.ProtocolNotificationType(t.method)})(Hfe=A.TelemetryEventNotification||(A.TelemetryEventNotification={}));var Wfe;(function(t){t.None=0,t.Full=1,t.Incremental=2})(Wfe=A.TextDocumentSyncKind||(A.TextDocumentSyncKind={}));var Kfe;(function(t){t.method="textDocument/didOpen",t.messageDirection=B.MessageDirection.clientToServer,t.type=new B.ProtocolNotificationType(t.method)})(Kfe=A.DidOpenTextDocumentNotification||(A.DidOpenTextDocumentNotification={}));var Bfe;(function(t){function e(n){let i=n;return i!=null&&typeof i.text=="string"&&i.range!==void 0&&(i.rangeLength===void 0||typeof i.rangeLength=="number")}t.isIncremental=e;function r(n){let i=n;return i!=null&&typeof i.text=="string"&&i.range===void 0&&i.rangeLength===void 0}t.isFull=r})(Bfe=A.TextDocumentContentChangeEvent||(A.TextDocumentContentChangeEvent={}));var zfe;(function(t){t.method="textDocument/didChange",t.messageDirection=B.MessageDirection.clientToServer,t.type=new B.ProtocolNotificationType(t.method)})(zfe=A.DidChangeTextDocumentNotification||(A.DidChangeTextDocumentNotification={}));var Vfe;(function(t){t.method="textDocument/didClose",t.messageDirection=B.MessageDirection.clientToServer,t.type=new B.ProtocolNotificationType(t.method)})(Vfe=A.DidCloseTextDocumentNotification||(A.DidCloseTextDocumentNotification={}));var Yfe;(function(t){t.method="textDocument/didSave",t.messageDirection=B.MessageDirection.clientToServer,t.type=new B.ProtocolNotificationType(t.method)})(Yfe=A.DidSaveTextDocumentNotification||(A.DidSaveTextDocumentNotification={}));var Xfe;(function(t){t.Manual=1,t.AfterDelay=2,t.FocusOut=3})(Xfe=A.TextDocumentSaveReason||(A.TextDocumentSaveReason={}));var Jfe;(function(t){t.method="textDocument/willSave",t.messageDirection=B.MessageDirection.clientToServer,t.type=new B.ProtocolNotificationType(t.method)})(Jfe=A.WillSaveTextDocumentNotification||(A.WillSaveTextDocumentNotification={}));var Qfe;(function(t){t.method="textDocument/willSaveWaitUntil",t.messageDirection=B.MessageDirection.clientToServer,t.type=new B.ProtocolRequestType(t.method)})(Qfe=A.WillSaveTextDocumentWaitUntilRequest||(A.WillSaveTextDocumentWaitUntilRequest={}));var Zfe;(function(t){t.method="workspace/didChangeWatchedFiles",t.messageDirection=B.MessageDirection.clientToServer,t.type=new B.ProtocolNotificationType(t.method)})(Zfe=A.DidChangeWatchedFilesNotification||(A.DidChangeWatchedFilesNotification={}));var epe;(function(t){t.Created=1,t.Changed=2,t.Deleted=3})(epe=A.FileChangeType||(A.FileChangeType={}));var tpe;(function(t){function e(r){let n=r;return _r.objectLiteral(n)&&(bF.URI.is(n.baseUri)||bF.WorkspaceFolder.is(n.baseUri))&&_r.string(n.pattern)}t.is=e})(tpe=A.RelativePattern||(A.RelativePattern={}));var rpe;(function(t){t.Create=1,t.Change=2,t.Delete=4})(rpe=A.WatchKind||(A.WatchKind={}));var npe;(function(t){t.method="textDocument/publishDiagnostics",t.messageDirection=B.MessageDirection.serverToClient,t.type=new B.ProtocolNotificationType(t.method)})(npe=A.PublishDiagnosticsNotification||(A.PublishDiagnosticsNotification={}));var ipe;(function(t){t.Invoked=1,t.TriggerCharacter=2,t.TriggerForIncompleteCompletions=3})(ipe=A.CompletionTriggerKind||(A.CompletionTriggerKind={}));var ope;(function(t){t.method="textDocument/completion",t.messageDirection=B.MessageDirection.clientToServer,t.type=new B.ProtocolRequestType(t.method)})(ope=A.CompletionRequest||(A.CompletionRequest={}));var ape;(function(t){t.method="completionItem/resolve",t.messageDirection=B.MessageDirection.clientToServer,t.type=new B.ProtocolRequestType(t.method)})(ape=A.CompletionResolveRequest||(A.CompletionResolveRequest={}));var spe;(function(t){t.method="textDocument/hover",t.messageDirection=B.MessageDirection.clientToServer,t.type=new B.ProtocolRequestType(t.method)})(spe=A.HoverRequest||(A.HoverRequest={}));var upe;(function(t){t.Invoked=1,t.TriggerCharacter=2,t.ContentChange=3})(upe=A.SignatureHelpTriggerKind||(A.SignatureHelpTriggerKind={}));var cpe;(function(t){t.method="textDocument/signatureHelp",t.messageDirection=B.MessageDirection.clientToServer,t.type=new B.ProtocolRequestType(t.method)})(cpe=A.SignatureHelpRequest||(A.SignatureHelpRequest={}));var lpe;(function(t){t.method="textDocument/definition",t.messageDirection=B.MessageDirection.clientToServer,t.type=new B.ProtocolRequestType(t.method)})(lpe=A.DefinitionRequest||(A.DefinitionRequest={}));var dpe;(function(t){t.method="textDocument/references",t.messageDirection=B.MessageDirection.clientToServer,t.type=new B.ProtocolRequestType(t.method)})(dpe=A.ReferencesRequest||(A.ReferencesRequest={}));var fpe;(function(t){t.method="textDocument/documentHighlight",t.messageDirection=B.MessageDirection.clientToServer,t.type=new B.ProtocolRequestType(t.method)})(fpe=A.DocumentHighlightRequest||(A.DocumentHighlightRequest={}));var ppe;(function(t){t.method="textDocument/documentSymbol",t.messageDirection=B.MessageDirection.clientToServer,t.type=new B.ProtocolRequestType(t.method)})(ppe=A.DocumentSymbolRequest||(A.DocumentSymbolRequest={}));var hpe;(function(t){t.method="textDocument/codeAction",t.messageDirection=B.MessageDirection.clientToServer,t.type=new B.ProtocolRequestType(t.method)})(hpe=A.CodeActionRequest||(A.CodeActionRequest={}));var mpe;(function(t){t.method="codeAction/resolve",t.messageDirection=B.MessageDirection.clientToServer,t.type=new B.ProtocolRequestType(t.method)})(mpe=A.CodeActionResolveRequest||(A.CodeActionResolveRequest={}));var gpe;(function(t){t.method="workspace/symbol",t.messageDirection=B.MessageDirection.clientToServer,t.type=new B.ProtocolRequestType(t.method)})(gpe=A.WorkspaceSymbolRequest||(A.WorkspaceSymbolRequest={}));var ype;(function(t){t.method="workspaceSymbol/resolve",t.messageDirection=B.MessageDirection.clientToServer,t.type=new B.ProtocolRequestType(t.method)})(ype=A.WorkspaceSymbolResolveRequest||(A.WorkspaceSymbolResolveRequest={}));var vpe;(function(t){t.method="textDocument/codeLens",t.messageDirection=B.MessageDirection.clientToServer,t.type=new B.ProtocolRequestType(t.method)})(vpe=A.CodeLensRequest||(A.CodeLensRequest={}));var _pe;(function(t){t.method="codeLens/resolve",t.messageDirection=B.MessageDirection.clientToServer,t.type=new B.ProtocolRequestType(t.method)})(_pe=A.CodeLensResolveRequest||(A.CodeLensResolveRequest={}));var Tpe;(function(t){t.method="workspace/codeLens/refresh",t.messageDirection=B.MessageDirection.serverToClient,t.type=new B.ProtocolRequestType0(t.method)})(Tpe=A.CodeLensRefreshRequest||(A.CodeLensRefreshRequest={}));var Rpe;(function(t){t.method="textDocument/documentLink",t.messageDirection=B.MessageDirection.clientToServer,t.type=new B.ProtocolRequestType(t.method)})(Rpe=A.DocumentLinkRequest||(A.DocumentLinkRequest={}));var bpe;(function(t){t.method="documentLink/resolve",t.messageDirection=B.MessageDirection.clientToServer,t.type=new B.ProtocolRequestType(t.method)})(bpe=A.DocumentLinkResolveRequest||(A.DocumentLinkResolveRequest={}));var Cpe;(function(t){t.method="textDocument/formatting",t.messageDirection=B.MessageDirection.clientToServer,t.type=new B.ProtocolRequestType(t.method)})(Cpe=A.DocumentFormattingRequest||(A.DocumentFormattingRequest={}));var Ape;(function(t){t.method="textDocument/rangeFormatting",t.messageDirection=B.MessageDirection.clientToServer,t.type=new B.ProtocolRequestType(t.method)})(Ape=A.DocumentRangeFormattingRequest||(A.DocumentRangeFormattingRequest={}));var Ppe;(function(t){t.method="textDocument/onTypeFormatting",t.messageDirection=B.MessageDirection.clientToServer,t.type=new B.ProtocolRequestType(t.method)})(Ppe=A.DocumentOnTypeFormattingRequest||(A.DocumentOnTypeFormattingRequest={}));var Spe;(function(t){t.Identifier=1})(Spe=A.PrepareSupportDefaultBehavior||(A.PrepareSupportDefaultBehavior={}));var Epe;(function(t){t.method="textDocument/rename",t.messageDirection=B.MessageDirection.clientToServer,t.type=new B.ProtocolRequestType(t.method)})(Epe=A.RenameRequest||(A.RenameRequest={}));var kpe;(function(t){t.method="textDocument/prepareRename",t.messageDirection=B.MessageDirection.clientToServer,t.type=new B.ProtocolRequestType(t.method)})(kpe=A.PrepareRenameRequest||(A.PrepareRenameRequest={}));var Npe;(function(t){t.method="workspace/executeCommand",t.messageDirection=B.MessageDirection.clientToServer,t.type=new B.ProtocolRequestType(t.method)})(Npe=A.ExecuteCommandRequest||(A.ExecuteCommandRequest={}));var wpe;(function(t){t.method="workspace/applyEdit",t.messageDirection=B.MessageDirection.serverToClient,t.type=new B.ProtocolRequestType("workspace/applyEdit")})(wpe=A.ApplyWorkspaceEditRequest||(A.ApplyWorkspaceEditRequest={}))});var OF=h(Jh=>{"use strict";Object.defineProperty(Jh,"__esModule",{value:!0});Jh.createProtocolConnection=void 0;var DF=uo();function Dpe(t,e,r,n){return DF.ConnectionStrategy.is(n)&&(n={connectionStrategy:n}),(0,DF.createMessageConnection)(t,e,r,n)}Jh.createProtocolConnection=Dpe});var IF=h(Hr=>{"use strict";var Ope=Hr&&Hr.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var i=Object.getOwnPropertyDescriptor(e,r);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,i)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),Qh=Hr&&Hr.__exportStar||function(t,e){for(var r in t)r!=="default"&&!Object.prototype.hasOwnProperty.call(e,r)&&Ope(e,t,r)};Object.defineProperty(Hr,"__esModule",{value:!0});Hr.LSPErrorCodes=Hr.createProtocolConnection=void 0;Qh(uo(),Hr);Qh(ws(),Hr);Qh(St(),Hr);Qh(wF(),Hr);var Ipe=OF();Object.defineProperty(Hr,"createProtocolConnection",{enumerable:!0,get:function(){return Ipe.createProtocolConnection}});var qpe;(function(t){t.lspReservedErrorRangeStart=-32899,t.RequestFailed=-32803,t.ServerCancelled=-32802,t.ContentModified=-32801,t.RequestCancelled=-32800,t.lspReservedErrorRangeEnd=-32800})(qpe=Hr.LSPErrorCodes||(Hr.LSPErrorCodes={}))});var xF=h(Hi=>{"use strict";var xpe=Hi&&Hi.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var i=Object.getOwnPropertyDescriptor(e,r);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,i)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),qF=Hi&&Hi.__exportStar||function(t,e){for(var r in t)r!=="default"&&!Object.prototype.hasOwnProperty.call(e,r)&&xpe(e,t,r)};Object.defineProperty(Hi,"__esModule",{value:!0});Hi.createProtocolConnection=void 0;var Lpe=Mb();qF(Mb(),Hi);qF(IF(),Hi);function Mpe(t,e,r,n){return(0,Lpe.createMessageConnection)(t,e,r,n)}Hi.createProtocolConnection=Mpe});var Xb=h(Zh=>{"use strict";Object.defineProperty(Zh,"__esModule",{value:!0});Zh.DefaultConfigurationProvider=void 0;var $pe=xF(),Yb=class{constructor(e){this.settings={},this.workspaceConfig=!1,this.initialized=!1,this.serviceRegistry=e.ServiceRegistry,this.connection=e.lsp.Connection,e.lsp.LanguageServer.onInitialize(r=>{var n,i;this.workspaceConfig=(i=(n=r.capabilities.workspace)===null||n===void 0?void 0:n.configuration)!==null&&i!==void 0?i:!1}),e.lsp.LanguageServer.onInitialized(r=>{var n;let i=this.serviceRegistry.all;(n=e.lsp.Connection)===null||n===void 0||n.client.register($pe.DidChangeConfigurationNotification.type,{section:i.map(o=>this.toSectionName(o.LanguageMetaData.languageId))})})}async initialize(){if(this.workspaceConfig&&this.connection){let r=this.serviceRegistry.all.map(i=>({section:this.toSectionName(i.LanguageMetaData.languageId)})),n=await this.connection.workspace.getConfiguration(r);r.forEach((i,o)=>{this.updateSectionConfiguration(i.section,n[o])})}this.initialized=!0}updateConfiguration(e){e.settings&&Object.keys(e.settings).forEach(r=>{this.updateSectionConfiguration(r,e.settings[r])})}updateSectionConfiguration(e,r){this.settings[e]=r}async getConfiguration(e,r){this.initialized||await this.initialize();let n=this.toSectionName(e);if(this.settings[n])return this.settings[n][r]}toSectionName(e){return`${e}`}};Zh.DefaultConfigurationProvider=Yb});var Zb=h(tm=>{"use strict";Object.defineProperty(tm,"__esModule",{value:!0});tm.DefaultDocumentBuilder=void 0;var em=et(),Fpe=un(),Jb=bn(),Wi=Bo(),Qb=class{constructor(e){this.updateListeners=[],this.buildPhaseListeners=new Fpe.MultiMap,this.langiumDocuments=e.workspace.LangiumDocuments,this.langiumDocumentFactory=e.workspace.LangiumDocumentFactory,this.indexManager=e.workspace.IndexManager,this.serviceRegistry=e.ServiceRegistry}async build(e,r={},n=em.CancellationToken.None){await this.buildDocuments(e,r,n)}async update(e,r,n=em.CancellationToken.None){for(let s of r)this.langiumDocuments.deleteDocument(s);this.indexManager.remove(r);for(let s of e)this.langiumDocuments.invalidateDocument(s);for(let s of this.updateListeners)s(e,r);await(0,Jb.interruptAndCheck)(n);let i=e.map(s=>this.langiumDocuments.getOrCreateDocument(s)),o=this.collectDocuments(i,r),a={validationChecks:"all"};await this.buildDocuments(o,a,n)}onUpdate(e){return this.updateListeners.push(e),em.Disposable.create(()=>{let r=this.updateListeners.indexOf(e);r>=0&&this.updateListeners.splice(r,1)})}collectDocuments(e,r){let n=e.map(a=>a.uri).concat(r),i=this.indexManager.getAffectedDocuments(n).toArray();i.forEach(a=>{this.serviceRegistry.getServices(a.uri).references.Linker.unlink(a),a.state=Math.min(a.state,Wi.DocumentState.ComputedScopes)});let o=new Set([...e,...i,...this.langiumDocuments.all.filter(a=>a.state<Wi.DocumentState.Validated)]);return Array.from(o)}async buildDocuments(e,r,n){await this.runCancelable(e,Wi.DocumentState.Parsed,n,o=>this.langiumDocumentFactory.update(o)),await this.runCancelable(e,Wi.DocumentState.IndexedContent,n,o=>this.indexManager.updateContent(o,n)),await this.runCancelable(e,Wi.DocumentState.ComputedScopes,n,o=>this.computeScopes(o,n)),await this.runCancelable(e,Wi.DocumentState.Linked,n,o=>this.serviceRegistry.getServices(o.uri).references.Linker.link(o,n)),await this.runCancelable(e,Wi.DocumentState.IndexedReferences,n,o=>this.indexManager.updateReferences(o,n));let i=e.filter(o=>this.shouldValidate(o,r));await this.runCancelable(i,Wi.DocumentState.Validated,n,o=>this.validate(o,n))}async runCancelable(e,r,n,i){let o=e.filter(a=>a.state<r);for(let a of o)await(0,Jb.interruptAndCheck)(n),await i(a);await this.notifyBuildPhase(o,r,n)}onBuildPhase(e,r){return this.buildPhaseListeners.add(e,r),em.Disposable.create(()=>{this.buildPhaseListeners.delete(e,r)})}async notifyBuildPhase(e,r,n){if(e.length===0)return;let i=this.buildPhaseListeners.get(r);for(let o of i)await(0,Jb.interruptAndCheck)(n),await o(e,n)}async computeScopes(e,r){let n=this.serviceRegistry.getServices(e.uri).references.ScopeComputation;e.precomputedScopes=await n.computeLocalScopes(e,r),e.state=Wi.DocumentState.ComputedScopes}shouldValidate(e,r){return r.validationChecks==="all"}async validate(e,r){let i=await this.serviceRegistry.getServices(e.uri).validation.DocumentValidator.validateDocument(e,r);e.diagnostics=i,e.state=Wi.DocumentState.Validated}};tm.DefaultDocumentBuilder=Qb});var nC=h(rm=>{"use strict";Object.defineProperty(rm,"__esModule",{value:!0});rm.DefaultIndexManager=void 0;var LF=et(),jpe=Ye(),eC=er(),tC=co(),MF=Bo(),rC=class{constructor(e){this.simpleIndex=new Map,this.referenceIndex=new Map,this.globalScopeCache=new Map,this.serviceRegistry=e.ServiceRegistry,this.astReflection=e.AstReflection,this.langiumDocuments=()=>e.workspace.LangiumDocuments}findAllReferences(e,r){let n=(0,jpe.getDocument)(e).uri,i=[];return this.referenceIndex.forEach(o=>{o.forEach(a=>{(0,tC.equalURI)(a.targetUri,n)&&a.targetPath===r&&i.push(a)})}),(0,eC.stream)(i)}allElements(e=""){this.globalScopeCache.has("")||this.globalScopeCache.set("",Array.from(this.simpleIndex.values()).flat());let r=this.globalScopeCache.get(e);if(r)return(0,eC.stream)(r);{let n=this.globalScopeCache.get("").filter(i=>this.astReflection.isSubtype(i.type,e));return this.globalScopeCache.set(e,n),(0,eC.stream)(n)}}remove(e){for(let r of e){let n=r.toString();this.simpleIndex.delete(n),this.referenceIndex.delete(n),this.globalScopeCache.clear()}}async updateContent(e,r=LF.CancellationToken.None){this.globalScopeCache.clear();let i=await this.serviceRegistry.getServices(e.uri).references.ScopeComputation.computeExports(e,r);for(let o of i)o.node=void 0;this.simpleIndex.set(e.uri.toString(),i),e.state=MF.DocumentState.IndexedContent}async updateReferences(e,r=LF.CancellationToken.None){let i=await this.serviceRegistry.getServices(e.uri).workspace.ReferenceDescriptionProvider.createDescriptions(e,r);this.referenceIndex.set(e.uri.toString(),i),e.state=MF.DocumentState.IndexedReferences}getAffectedDocuments(e){return this.langiumDocuments().all.filter(r=>{if(e.some(n=>(0,tC.equalURI)(r.uri,n)))return!1;for(let n of e)if(this.isAffected(r,n))return!0;return!1})}isAffected(e,r){let n=r.toString(),i=e.uri.toString();if(e.references.some(a=>a.error!==void 0))return!0;let o=this.referenceIndex.get(i);return o?o.filter(a=>!a.local).some(a=>(0,tC.equalURI)(a.targetUri,n)):!1}};rm.DefaultIndexManager=rC});var aC=h(nm=>{"use strict";Object.defineProperty(nm,"__esModule",{value:!0});nm.DefaultWorkspaceManager=void 0;var Upe=et(),iC=eo(),Gpe=bn(),oC=class{constructor(e){this.serviceRegistry=e.ServiceRegistry,this.langiumDocuments=e.workspace.LangiumDocuments,this.documentBuilder=e.workspace.DocumentBuilder,this.fileSystemProvider=e.workspace.FileSystemProvider,this.mutex=e.workspace.MutexLock,e.lsp.LanguageServer.onInitialize(r=>{var n;this.folders=(n=r.workspaceFolders)!==null&&n!==void 0?n:void 0}),e.lsp.LanguageServer.onInitialized(r=>{this.mutex.lock(n=>{var i;return this.initializeWorkspace((i=this.folders)!==null&&i!==void 0?i:[],n)})})}async initializeWorkspace(e,r=Upe.CancellationToken.None){let n=this.serviceRegistry.all.flatMap(a=>a.LanguageMetaData.fileExtensions),i=[],o=a=>{i.push(a),this.langiumDocuments.hasDocument(a.uri)||this.langiumDocuments.addDocument(a)};await this.loadAdditionalDocuments(e,o),await Promise.all(e.map(a=>[a,this.getRootFolder(a)]).map(async a=>this.traverseFolder(...a,n,o))),await(0,Gpe.interruptAndCheck)(r),await this.documentBuilder.build(i,void 0,r)}loadAdditionalDocuments(e,r){return Promise.resolve()}getRootFolder(e){return iC.URI.parse(e.uri)}async traverseFolder(e,r,n,i){let o=await this.fileSystemProvider.readDirectory(r);await Promise.all(o.map(async a=>{if(this.includeEntry(e,a,n)){if(a.isDirectory)await this.traverseFolder(e,a.uri,n,i);else if(a.isFile){let s=this.langiumDocuments.getOrCreateDocument(a.uri);i(s)}}}))}includeEntry(e,r,n){let i=iC.Utils.basename(r.uri);if(i.startsWith("."))return!1;if(r.isDirectory)return i!=="node_modules"&&i!=="out";if(r.isFile){let o=iC.Utils.extname(r.uri);return n.includes(o)}return!1}};nm.DefaultWorkspaceManager=oC});var lC=h(Ki=>{"use strict";Object.defineProperty(Ki,"__esModule",{value:!0});Ki.isTokenTypeDictionary=Ki.isIMultiModeLexerDefinition=Ki.isTokenTypeArray=Ki.DefaultLexer=void 0;var Hpe=Ba(),sC=class{constructor(e){let r=e.parser.TokenBuilder.buildTokens(e.Grammar,{caseInsensitive:e.LanguageMetaData.caseInsensitive});this.tokenTypes=this.toTokenTypeDictionary(r);let n=uC(r)?Object.values(r):r;this.chevrotainLexer=new Hpe.Lexer(n)}get definition(){return this.tokenTypes}tokenize(e){var r;let n=this.chevrotainLexer.tokenize(e);return{tokens:n.tokens,errors:n.errors,hidden:(r=n.groups.hidden)!==null&&r!==void 0?r:[]}}toTokenTypeDictionary(e){if(uC(e))return e;let r=cC(e)?Object.values(e.modes).flat():e,n={};return r.forEach(i=>n[i.name]=i),n}};Ki.DefaultLexer=sC;function $F(t){return Array.isArray(t)&&(t.length===0||"name"in t[0])}Ki.isTokenTypeArray=$F;function cC(t){return t&&"modes"in t&&"defaultMode"in t}Ki.isIMultiModeLexerDefinition=cC;function uC(t){return!$F(t)&&!cC(t)}Ki.isTokenTypeDictionary=uC});var Jf=h(zu=>{"use strict";Object.defineProperty(zu,"__esModule",{value:!0});zu.createDefaultSharedModule=zu.createDefaultModule=void 0;var Wpe=et(),Kpe=(ey(),mC(Zg)),Bpe=PE(),zpe=w$(),Vpe=P_(),Ype=E_(),Xpe=N_(),Jpe=Tf(),Qpe=O_(),Zpe=q_(),ehe=G_(),the=W_(),rhe=B_(),nhe=gb(),ihe=_b(),ohe=bb(),ahe=Pb(),she=vs(),uhe=v_(),che=ff(),lhe=hf(),dhe=kb(),fhe=wb(),phe=bn(),hhe=vf(),mhe=Ob(),FF=xb(),ghe=j$(),yhe=Xb(),vhe=Zb(),jF=Bo(),_he=nC(),The=aC(),Rhe=lC();function bhe(t){return{parser:{GrammarConfig:e=>(0,Bpe.createGrammarConfig)(e),LangiumParser:e=>(0,nhe.createLangiumParser)(e),CompletionParser:e=>(0,zpe.createCompletionParser)(e),ValueConverter:()=>new ohe.DefaultValueConverter,TokenBuilder:()=>new ihe.DefaultTokenBuilder,Lexer:e=>new Rhe.DefaultLexer(e)},lsp:{CompletionProvider:e=>new Vpe.DefaultCompletionProvider(e),DocumentSymbolProvider:e=>new Xpe.DefaultDocumentSymbolProvider(e),HoverProvider:e=>new Zpe.MultilineCommentHoverProvider(e),FoldingRangeProvider:e=>new Jpe.DefaultFoldingRangeProvider(e),ReferencesProvider:e=>new the.DefaultReferencesProvider(e),DefinitionProvider:e=>new Qpe.DefaultDefinitionProvider(e),DocumentHighlightProvider:e=>new Ype.DefaultDocumentHighlightProvider(e),RenameProvider:e=>new rhe.DefaultRenameProvider(e)},workspace:{AstNodeLocator:()=>new ghe.DefaultAstNodeLocator,AstNodeDescriptionProvider:e=>new FF.DefaultAstNodeDescriptionProvider(e),ReferenceDescriptionProvider:e=>new FF.DefaultReferenceDescriptionProvider(e)},references:{Linker:e=>new ahe.DefaultLinker(e),NameProvider:()=>new she.DefaultNameProvider,ScopeProvider:e=>new lhe.DefaultScopeProvider(e),ScopeComputation:e=>new che.DefaultScopeComputation(e),References:e=>new uhe.DefaultReferences(e)},serializer:{JsonSerializer:e=>new dhe.DefaultJsonSerializer(e)},validation:{DocumentValidator:e=>new hhe.DefaultDocumentValidator(e),ValidationRegistry:e=>new mhe.ValidationRegistry(e)},shared:()=>t.shared}}zu.createDefaultModule=bhe;function Che(t){return{ServiceRegistry:()=>new fhe.DefaultServiceRegistry,lsp:{Connection:()=>t.connection,LanguageServer:e=>new ehe.DefaultLanguageServer(e)},workspace:{LangiumDocuments:e=>new jF.DefaultLangiumDocuments(e),LangiumDocumentFactory:e=>new jF.DefaultLangiumDocumentFactory(e),DocumentBuilder:e=>new vhe.DefaultDocumentBuilder(e),TextDocuments:()=>new Wpe.TextDocuments(Kpe.TextDocument),IndexManager:e=>new _he.DefaultIndexManager(e),WorkspaceManager:e=>new The.DefaultWorkspaceManager(e),FileSystemProvider:e=>t.fileSystemProvider(e),MutexLock:()=>new phe.MutexLock,ConfigurationProvider:e=>new yhe.DefaultConfigurationProvider(e)}}}zu.createDefaultSharedModule=Che});var dC=h(gn=>{"use strict";Object.defineProperty(gn,"__esModule",{value:!0});gn.findIndentation=gn.SNLE=gn.expandToString=gn.expandToStringWithNL=void 0;var Hl=ms();function Ahe(t,...e){return UF(t,...e)+Hl.EOL}gn.expandToStringWithNL=Ahe;function UF(t,...e){let r=e.reduce((a,s,u)=>{var d;return a+(s===void 0?gn.SNLE:Ehe((0,Hl.toString)(s),a))+((d=t[u+1])!==null&&d!==void 0?d:"")},t[0]).split(Hl.EOL).filter(a=>a.trim()!==gn.SNLE).map(a=>a.replace(gn.SNLE,"").trimRight());r=r.length>1&&r[0].trim().length===0?r.slice(1):r,r=r.length!==0&&r[r.length-1].trimRight().length===0?r.slice(0,r.length-1):r;let o=GF(r);return r.map(a=>a.slice(o).trimRight()).join(`
`)}gn.expandToString=UF;gn.SNLE=Object.freeze("__\xABSKIP^NEW^LINE^IF^EMPTY\xBB__");var Phe=new RegExp(Hl.EOL,"g"),She=/\S|$/;function Ehe(t,e){let r=Math.max(0,e.length-e.lastIndexOf(`
`)-1),n=" ".repeat(r);return t.replace(Phe,Hl.EOL+n)}function GF(t){let e=t.filter(n=>n.length>0).map(n=>n.search(She)),r=e.length===0?0:Math.min(...e);return Math.max(0,r)}gn.findIndentation=GF});var WF=h(Vu=>{"use strict";Object.defineProperty(Vu,"__esModule",{value:!0});Vu.joinToNode=Vu.expandToNode=void 0;var ko=ms(),khe=dC(),im=Object.freeze(new ko.NewLineNode),HF=Object.freeze(new ko.CompositeGeneratorNode);function Nhe(t,...e){let r=whe(t),n=Dhe(t,e,r);return Ohe(n)}Vu.expandToNode=Nhe;function whe(t){let e=t.join("_").split(ko.EOL),r=e.length>1&&e[0].trim().length===0,n=r&&e.length>1&&e[e.length-1].trim().length===0;if(e.length===1||e.length!==0&&e[0].trim().length!==0||e.length===2&&e[1].trim().length===0)return{indentation:0,omitFirstLine:r,omitLastLine:n,trimLastLine:e.length!==1&&e[e.length-1].trim().length===0};{let i=r?e.slice(1):e;i=n?i.slice(0,i.length-1):i,i=i.filter(a=>a.length!==0);let o=(0,khe.findIndentation)(i);return{indentation:o,omitFirstLine:r,omitLastLine:n&&(e[e.length-1].length<o||!e[e.length-1].startsWith(i[0].substring(0,o)))}}}function Dhe(t,e,{indentation:r,omitFirstLine:n,omitLastLine:i,trimLastLine:o}){let a=[];t.forEach((d,p)=>{a.push(...d.split(ko.EOL).map((m,v)=>v===0||m.length<r?m:m.substring(r)).reduce(p===0?(m,v,P)=>P===0?n?[]:[v]:P===1&&m.length===0?[v]:m.concat(im,v):(m,v,P)=>P===0?[v]:m.concat(im,v),[]).filter(m=>!(typeof m=="string"&&m.length===0)).concat((0,ko.isGeneratorNode)(e[p])?e[p]:e[p]!==void 0?new ko.CompositeGeneratorNode(String(e[p])):p<e.length?HF:[]))});let s=a.length,u=s!==0?a[s-1]:void 0;return(i||o)&&typeof u=="string"&&u.trim().length===0?n&&s!==1&&a[s-2]===im?a.slice(0,s-2):a.slice(0,s-1):a}function Ohe(t){return t.reduce((r,n,i)=>n===HF?r:n===im?{indent:"",node:i===0||(0,ko.isNewLineNode)(t[i-1])||typeof t[i-1]=="string"?r.node.appendNewLine():r.node.appendNewLineIfNotEmpty()}:{indent:r.indent===""&&typeof n=="string"&&n.length!==0?"".padStart(n.length-n.trimLeft().length):r.indent,node:r.indent.length===0?r.node.append(n):r.node.indent(a=>a.append(n),r.indent)},{indent:"",node:new ko.CompositeGeneratorNode}).node}function Ihe(t,e=String,{prefix:r,suffix:n,appendNewLineIfNotEmpty:i}={}){return qhe(t,(o,a,s,u)=>(o??(o=new ko.CompositeGeneratorNode),o.append(r&&r(a,s,u)).append(e(a,s,u)).append(n&&n(a,s,u)).appendNewLineIfNotEmptyIf(!o.isEmpty()&&!!i)))}Vu.joinToNode=Ihe;function qhe(t,e,r){let n=t[Symbol.iterator](),i=n.next(),o=0,a=r;for(;!i.done;){let s=n.next();a=e(a,i.value,o,!!s.done),i=s,o++}return a}});var BF=h(KF=>{"use strict";Object.defineProperty(KF,"__esModule",{value:!0})});var VF=h(zF=>{"use strict";Object.defineProperty(zF,"__esModule",{value:!0})});var XF=h(YF=>{"use strict";Object.defineProperty(YF,"__esModule",{value:!0})});var Wl=h(de=>{"use strict";var JF=de&&de.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var i=Object.getOwnPropertyDescriptor(e,r);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,i)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),xhe=de&&de.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),Pe=de&&de.__exportStar||function(t,e){for(var r in t)r!=="default"&&!Object.prototype.hasOwnProperty.call(e,r)&&JF(e,t,r)},Lhe=de&&de.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var r in t)r!=="default"&&Object.prototype.hasOwnProperty.call(t,r)&&JF(e,t,r);return xhe(e,t),e};Object.defineProperty(de,"__esModule",{value:!0});de.GrammarAST=de.expandToStringWithNL=de.expandToString=void 0;Pe(Jf(),de);Pe(Tc(),de);Pe(ms(),de);Pe(WF(),de);var QF=dC();Object.defineProperty(de,"expandToString",{enumerable:!0,get:function(){return QF.expandToString}});Object.defineProperty(de,"expandToStringWithNL",{enumerable:!0,get:function(){return QF.expandToStringWithNL}});Pe(qy(),de);Pe(oT(),de);Pe(BF(),de);Pe(V_(),de);Pe(Oh(),de);Pe(gb(),de);Pe(VF(),de);Pe(_b(),de);Pe(bb(),de);Pe(lC(),de);Pe(Pb(),de);Pe(vs(),de);Pe(ff(),de);Pe(hf(),de);Pe(kb(),de);Pe(wb(),de);Pe(XF(),de);Pe(Yr(),de);Pe(Ye(),de);Pe(un(),de);Pe(ft(),de);Pe(Vt(),de);Pe(bn(),de);Pe(co(),de);Pe(_s(),de);Pe(er(),de);Pe(vf(),de);Pe(Ob(),de);Pe(xb(),de);Pe(Zb(),de);Pe(Bo(),de);Pe(nC(),de);Pe(aT(),de);Pe(aC(),de);Pe(Xb(),de);var Mhe=Lhe(Ke());de.GrammarAST=Mhe});var ej=h((HAe,ZF)=>{"use strict";ZF.exports=et()});var fC=h(x=>{"use strict";Object.defineProperty(x,"__esModule",{value:!0});x.isService=x.Service=x.isServer=x.Server=x.isRoute=x.Route=x.isRequestParameter=x.RequestParameter=x.isRequestBody=x.RequestBody=x.isRepository=x.Repository=x.isRelationship=x.Relationship=x.isQuery=x.Query=x.isProject=x.Project=x.isPort=x.Port=x.isPath=x.Path=x.isParameter=x.Parameter=x.isOperation=x.Operation=x.isMethod=x.Method=x.isMetadata=x.Metadata=x.isLiteral=x.Literal=x.isHost=x.Host=x.isEnum=x.Enum=x.isEntity=x.Entity=x.isDatasource=x.Datasource=x.isDatabase=x.Database=x.isController=x.Controller=x.isConfiguration=x.Configuration=x.isAttribute=x.Attribute=x.isStructuralComponent=x.StructuralComponent=void 0;x.reflection=x.JgenAstReflection=void 0;var $he=Wl();x.StructuralComponent="StructuralComponent";function Fhe(t){return x.reflection.isInstance(t,x.StructuralComponent)}x.isStructuralComponent=Fhe;x.Attribute="Attribute";function jhe(t){return x.reflection.isInstance(t,x.Attribute)}x.isAttribute=jhe;x.Configuration="Configuration";function Uhe(t){return x.reflection.isInstance(t,x.Configuration)}x.isConfiguration=Uhe;x.Controller="Controller";function Ghe(t){return x.reflection.isInstance(t,x.Controller)}x.isController=Ghe;x.Database="Database";function Hhe(t){return x.reflection.isInstance(t,x.Database)}x.isDatabase=Hhe;x.Datasource="Datasource";function Whe(t){return x.reflection.isInstance(t,x.Datasource)}x.isDatasource=Whe;x.Entity="Entity";function Khe(t){return x.reflection.isInstance(t,x.Entity)}x.isEntity=Khe;x.Enum="Enum";function Bhe(t){return x.reflection.isInstance(t,x.Enum)}x.isEnum=Bhe;x.Host="Host";function zhe(t){return x.reflection.isInstance(t,x.Host)}x.isHost=zhe;x.Literal="Literal";function Vhe(t){return x.reflection.isInstance(t,x.Literal)}x.isLiteral=Vhe;x.Metadata="Metadata";function Yhe(t){return x.reflection.isInstance(t,x.Metadata)}x.isMetadata=Yhe;x.Method="Method";function Xhe(t){return x.reflection.isInstance(t,x.Method)}x.isMethod=Xhe;x.Operation="Operation";function Jhe(t){return x.reflection.isInstance(t,x.Operation)}x.isOperation=Jhe;x.Parameter="Parameter";function Qhe(t){return x.reflection.isInstance(t,x.Parameter)}x.isParameter=Qhe;x.Path="Path";function Zhe(t){return x.reflection.isInstance(t,x.Path)}x.isPath=Zhe;x.Port="Port";function eme(t){return x.reflection.isInstance(t,x.Port)}x.isPort=eme;x.Project="Project";function tme(t){return x.reflection.isInstance(t,x.Project)}x.isProject=tme;x.Query="Query";function rme(t){return x.reflection.isInstance(t,x.Query)}x.isQuery=rme;x.Relationship="Relationship";function nme(t){return x.reflection.isInstance(t,x.Relationship)}x.isRelationship=nme;x.Repository="Repository";function ime(t){return x.reflection.isInstance(t,x.Repository)}x.isRepository=ime;x.RequestBody="RequestBody";function ome(t){return x.reflection.isInstance(t,x.RequestBody)}x.isRequestBody=ome;x.RequestParameter="RequestParameter";function ame(t){return x.reflection.isInstance(t,x.RequestParameter)}x.isRequestParameter=ame;x.Route="Route";function sme(t){return x.reflection.isInstance(t,x.Route)}x.isRoute=sme;x.Server="Server";function ume(t){return x.reflection.isInstance(t,x.Server)}x.isServer=ume;x.Service="Service";function cme(t){return x.reflection.isInstance(t,x.Service)}x.isService=cme;var om=class extends $he.AbstractAstReflection{getAllTypes(){return["Attribute","Configuration","Controller","Database","Datasource","Entity","Enum","Host","Literal","Metadata","Method","Operation","Parameter","Path","Port","Project","Query","Relationship","Repository","RequestBody","RequestParameter","Route","Server","Service","StructuralComponent"]}computeIsSubtype(e,r){switch(e){case x.Controller:case x.Entity:case x.Enum:case x.Relationship:case x.Repository:case x.Service:return this.isSubtype(x.StructuralComponent,r);default:return!1}}getReferenceType(e){let r=`${e.container.$type}:${e.property}`;switch(r){case"Attribute:enumType":return x.Enum;case"Controller:entity":case"Relationship:from":case"Relationship:to":case"Repository:entity":case"Service:entity":return x.Entity;case"Controller:service":return x.Service;case"Service:repository":return x.Repository;default:throw new Error(`${r} is not a valid reference id.`)}}getTypeMetaData(e){switch(e){case"Attribute":return{name:"Attribute",mandatory:[{name:"nullable",type:"boolean"},{name:"primaryKey",type:"boolean"},{name:"unique",type:"boolean"}]};case"Controller":return{name:"Controller",mandatory:[{name:"routes",type:"array"}]};case"Entity":return{name:"Entity",mandatory:[{name:"attributes",type:"array"}]};case"Enum":return{name:"Enum",mandatory:[{name:"literals",type:"array"}]};case"Method":return{name:"Method",mandatory:[{name:"parameters",type:"array"}]};case"Parameter":return{name:"Parameter",mandatory:[{name:"required",type:"boolean"}]};case"Project":return{name:"Project",mandatory:[{name:"structuralComponents",type:"array"}]};case"Query":return{name:"Query",mandatory:[{name:"parameters",type:"array"}]};case"Repository":return{name:"Repository",mandatory:[{name:"queries",type:"array"}]};case"RequestBody":return{name:"RequestBody",mandatory:[{name:"parameters",type:"array"}]};case"RequestParameter":return{name:"RequestParameter",mandatory:[{name:"required",type:"boolean"}]};case"Route":return{name:"Route",mandatory:[{name:"requestParameters",type:"array"}]};case"Service":return{name:"Service",mandatory:[{name:"methods",type:"array"}]};default:return{name:e,mandatory:[]}}}};x.JgenAstReflection=om;x.reflection=new om});var tj=h(sm=>{"use strict";Object.defineProperty(sm,"__esModule",{value:!0});sm.JgenGrammar=void 0;var lme=Wl(),am,dme=()=>am??(am=(0,lme.loadGrammarFromJson)(`{
  "$type": "Grammar",
  "isDeclared": true,
  "name": "Jgen",
  "rules": [
    {
      "$type": "ParserRule",
      "name": "Project",
      "entry": true,
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "project"
          },
          {
            "$type": "Assignment",
            "feature": "name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@34"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "structuralComponents",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@3"
              },
              "arguments": []
            },
            "cardinality": "*"
          },
          {
            "$type": "Assignment",
            "feature": "configuration",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@18"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Entity",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "entity"
          },
          {
            "$type": "Assignment",
            "feature": "name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@34"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "attributes",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@2"
              },
              "arguments": []
            },
            "cardinality": "*"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Attribute",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "attribute"
          },
          {
            "$type": "Assignment",
            "feature": "name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@34"
              },
              "arguments": []
            }
          },
          {
            "$type": "Keyword",
            "value": "type"
          },
          {
            "$type": "Alternatives",
            "elements": [
              {
                "$type": "Assignment",
                "feature": "enumType",
                "operator": "=",
                "terminal": {
                  "$type": "CrossReference",
                  "type": {
                    "$ref": "#/rules@16"
                  },
                  "deprecatedSyntax": false
                }
              },
              {
                "$type": "Assignment",
                "feature": "type",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@29"
                  },
                  "arguments": []
                }
              }
            ]
          },
          {
            "$type": "Assignment",
            "feature": "nullable",
            "operator": "?=",
            "terminal": {
              "$type": "Keyword",
              "value": "nullable"
            },
            "cardinality": "?"
          },
          {
            "$type": "Assignment",
            "feature": "unique",
            "operator": "?=",
            "terminal": {
              "$type": "Keyword",
              "value": "unique"
            },
            "cardinality": "?"
          },
          {
            "$type": "Assignment",
            "feature": "primaryKey",
            "operator": "?=",
            "terminal": {
              "$type": "Keyword",
              "value": "primaryKey"
            },
            "cardinality": "?"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "StructuralComponent",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@16"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@1"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@13"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@4"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@6"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@5"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Repository",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "repository"
          },
          {
            "$type": "Assignment",
            "feature": "name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@34"
              },
              "arguments": []
            }
          },
          {
            "$type": "Keyword",
            "value": "for"
          },
          {
            "$type": "Assignment",
            "feature": "entity",
            "operator": "=",
            "terminal": {
              "$type": "CrossReference",
              "type": {
                "$ref": "#/rules@1"
              },
              "terminal": {
                "$type": "RuleCall",
                "rule": {
                  "$ref": "#/rules@34"
                },
                "arguments": []
              },
              "deprecatedSyntax": false
            }
          },
          {
            "$type": "Assignment",
            "feature": "queries",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@15"
              },
              "arguments": []
            },
            "cardinality": "*"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Service",
      "definition": {
        "$type": "UnorderedGroup",
        "elements": [
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": "service"
              },
              {
                "$type": "Assignment",
                "feature": "name",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@34"
                  },
                  "arguments": []
                }
              },
              {
                "$type": "Keyword",
                "value": "for"
              },
              {
                "$type": "Assignment",
                "feature": "entity",
                "operator": "=",
                "terminal": {
                  "$type": "CrossReference",
                  "type": {
                    "$ref": "#/rules@1"
                  },
                  "terminal": {
                    "$type": "RuleCall",
                    "rule": {
                      "$ref": "#/rules@34"
                    },
                    "arguments": []
                  },
                  "deprecatedSyntax": false
                }
              },
              {
                "$type": "Keyword",
                "value": "repository"
              },
              {
                "$type": "Assignment",
                "feature": "repository",
                "operator": "=",
                "terminal": {
                  "$type": "CrossReference",
                  "type": {
                    "$ref": "#/rules@4"
                  },
                  "terminal": {
                    "$type": "RuleCall",
                    "rule": {
                      "$ref": "#/rules@34"
                    },
                    "arguments": []
                  },
                  "deprecatedSyntax": false
                }
              }
            ]
          },
          {
            "$type": "Assignment",
            "feature": "methods",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@14"
              },
              "arguments": []
            },
            "cardinality": "+"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Controller",
      "definition": {
        "$type": "UnorderedGroup",
        "elements": [
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": "controller"
              },
              {
                "$type": "Assignment",
                "feature": "name",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@34"
                  },
                  "arguments": []
                }
              },
              {
                "$type": "Keyword",
                "value": "for"
              },
              {
                "$type": "Assignment",
                "feature": "entity",
                "operator": "=",
                "terminal": {
                  "$type": "CrossReference",
                  "type": {
                    "$ref": "#/rules@1"
                  },
                  "terminal": {
                    "$type": "RuleCall",
                    "rule": {
                      "$ref": "#/rules@34"
                    },
                    "arguments": []
                  },
                  "deprecatedSyntax": false
                }
              },
              {
                "$type": "Keyword",
                "value": "path"
              },
              {
                "$type": "Assignment",
                "feature": "path",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@36"
                  },
                  "arguments": []
                }
              }
            ]
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": "service"
              },
              {
                "$type": "Assignment",
                "feature": "service",
                "operator": "=",
                "terminal": {
                  "$type": "CrossReference",
                  "type": {
                    "$ref": "#/rules@5"
                  },
                  "terminal": {
                    "$type": "RuleCall",
                    "rule": {
                      "$ref": "#/rules@34"
                    },
                    "arguments": []
                  },
                  "deprecatedSyntax": false
                }
              }
            ]
          },
          {
            "$type": "Assignment",
            "feature": "routes",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@7"
              },
              "arguments": []
            },
            "cardinality": "+"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Route",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "route"
          },
          {
            "$type": "Assignment",
            "feature": "name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@34"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "path",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@11"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "operation",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@12"
              },
              "arguments": []
            }
          },
          {
            "$type": "Alternatives",
            "elements": [
              {
                "$type": "Assignment",
                "feature": "requestBody",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@10"
                  },
                  "arguments": []
                }
              },
              {
                "$type": "Assignment",
                "feature": "requestParameters",
                "operator": "+=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@9"
                  },
                  "arguments": []
                },
                "cardinality": "*"
              }
            ]
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Parameter",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "parameter"
          },
          {
            "$type": "Assignment",
            "feature": "name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@34"
              },
              "arguments": []
            }
          },
          {
            "$type": "Keyword",
            "value": "is"
          },
          {
            "$type": "Assignment",
            "feature": "attribute",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@34"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "required",
            "operator": "?=",
            "terminal": {
              "$type": "Keyword",
              "value": "required"
            },
            "cardinality": "?"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "RequestParameter",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "requestParameter"
          },
          {
            "$type": "Assignment",
            "feature": "name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@34"
              },
              "arguments": []
            }
          },
          {
            "$type": "Keyword",
            "value": "is"
          },
          {
            "$type": "Assignment",
            "feature": "attribute",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@34"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "required",
            "operator": "?=",
            "terminal": {
              "$type": "Keyword",
              "value": "required"
            },
            "cardinality": "?"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "RequestBody",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "requestBody"
          },
          {
            "$type": "Assignment",
            "feature": "parameters",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@8"
              },
              "arguments": []
            },
            "cardinality": "+"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Path",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "path"
          },
          {
            "$type": "Assignment",
            "feature": "name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@36"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Operation",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "operation"
          },
          {
            "$type": "Assignment",
            "feature": "name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@30"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Relationship",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "relationship"
          },
          {
            "$type": "Assignment",
            "feature": "type",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@27"
              },
              "arguments": []
            }
          },
          {
            "$type": "Keyword",
            "value": "from"
          },
          {
            "$type": "Assignment",
            "feature": "from",
            "operator": "=",
            "terminal": {
              "$type": "CrossReference",
              "type": {
                "$ref": "#/rules@1"
              },
              "terminal": {
                "$type": "RuleCall",
                "rule": {
                  "$ref": "#/rules@34"
                },
                "arguments": []
              },
              "deprecatedSyntax": false
            }
          },
          {
            "$type": "Keyword",
            "value": "to"
          },
          {
            "$type": "Assignment",
            "feature": "to",
            "operator": "=",
            "terminal": {
              "$type": "CrossReference",
              "type": {
                "$ref": "#/rules@1"
              },
              "terminal": {
                "$type": "RuleCall",
                "rule": {
                  "$ref": "#/rules@34"
                },
                "arguments": []
              },
              "deprecatedSyntax": false
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Method",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "method"
          },
          {
            "$type": "Assignment",
            "feature": "name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@34"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "parameters",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@8"
              },
              "arguments": []
            },
            "cardinality": "?"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Query",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "query"
          },
          {
            "$type": "Assignment",
            "feature": "name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@34"
              },
              "arguments": []
            }
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Group",
                "elements": [
                  {
                    "$type": "Keyword",
                    "value": "type"
                  },
                  {
                    "$type": "Assignment",
                    "feature": "type",
                    "operator": "=",
                    "terminal": {
                      "$type": "RuleCall",
                      "rule": {
                        "$ref": "#/rules@32"
                      },
                      "arguments": []
                    }
                  }
                ],
                "cardinality": "?"
              },
              {
                "$type": "Assignment",
                "feature": "parameters",
                "operator": "+=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@8"
                  },
                  "arguments": []
                },
                "cardinality": "*"
              }
            ],
            "cardinality": "?"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Enum",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "enum"
          },
          {
            "$type": "Assignment",
            "feature": "name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@34"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "literals",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@17"
              },
              "arguments": []
            },
            "cardinality": "*"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Literal",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "literal"
          },
          {
            "$type": "Assignment",
            "feature": "name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@34"
              },
              "arguments": []
            }
          },
          {
            "$type": "Keyword",
            "value": "value"
          },
          {
            "$type": "Assignment",
            "feature": "value",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@34"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Configuration",
      "definition": {
        "$type": "UnorderedGroup",
        "elements": [
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": "configuration"
              },
              {
                "$type": "Assignment",
                "feature": "metadata",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@24"
                  },
                  "arguments": []
                }
              }
            ]
          },
          {
            "$type": "Assignment",
            "feature": "datasource",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@19"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "server",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@20"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Datasource",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "datasource"
          },
          {
            "$type": "Keyword",
            "value": "type"
          },
          {
            "$type": "Assignment",
            "feature": "type",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@31"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "host",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@21"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "port",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@22"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "database",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@23"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Server",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "server"
          },
          {
            "$type": "Assignment",
            "feature": "host",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@21"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "port",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@22"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Host",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "host"
          },
          {
            "$type": "Assignment",
            "feature": "name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@34"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Port",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "port"
          },
          {
            "$type": "Assignment",
            "feature": "name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@37"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Database",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "database"
          },
          {
            "$type": "Assignment",
            "feature": "name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@34"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Metadata",
      "definition": {
        "$type": "UnorderedGroup",
        "elements": [
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": "metadata"
              },
              {
                "$type": "Keyword",
                "value": "buildTool"
              },
              {
                "$type": "Assignment",
                "feature": "tool",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@28"
                  },
                  "arguments": []
                }
              }
            ]
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": "springVersion"
              },
              {
                "$type": "Assignment",
                "feature": "springVersion",
                "operator": "=",
                "terminal": {
                  "$type": "Alternatives",
                  "elements": [
                    {
                      "$type": "Keyword",
                      "value": "3.2.0"
                    },
                    {
                      "$type": "Keyword",
                      "value": "3.1.6"
                    },
                    {
                      "$type": "Keyword",
                      "value": "3.1.5"
                    },
                    {
                      "$type": "Keyword",
                      "value": "3.0.13"
                    },
                    {
                      "$type": "Keyword",
                      "value": "3.0.12"
                    },
                    {
                      "$type": "Keyword",
                      "value": "2.7.18"
                    },
                    {
                      "$type": "Keyword",
                      "value": "2.7.17"
                    }
                  ]
                }
              }
            ]
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": "group"
              },
              {
                "$type": "Assignment",
                "feature": "group",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@25"
                  },
                  "arguments": []
                }
              }
            ]
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": "artifact"
              },
              {
                "$type": "Assignment",
                "feature": "artifact",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@34"
                  },
                  "arguments": []
                }
              }
            ]
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": "name"
              },
              {
                "$type": "Assignment",
                "feature": "name",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@25"
                  },
                  "arguments": []
                }
              }
            ]
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": "description"
              },
              {
                "$type": "Assignment",
                "feature": "description",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@35"
                  },
                  "arguments": []
                }
              }
            ]
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": "package"
              },
              {
                "$type": "Assignment",
                "feature": "package",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@25"
                  },
                  "arguments": []
                }
              }
            ]
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": "packaging"
              },
              {
                "$type": "Assignment",
                "feature": "packaging",
                "operator": "=",
                "terminal": {
                  "$type": "Alternatives",
                  "elements": [
                    {
                      "$type": "Keyword",
                      "value": "Jar"
                    },
                    {
                      "$type": "Keyword",
                      "value": "War"
                    }
                  ]
                }
              }
            ]
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": "javaVersion"
              },
              {
                "$type": "Assignment",
                "feature": "javaVersion",
                "operator": "=",
                "terminal": {
                  "$type": "Alternatives",
                  "elements": [
                    {
                      "$type": "Keyword",
                      "value": "8"
                    },
                    {
                      "$type": "Keyword",
                      "value": "11"
                    },
                    {
                      "$type": "Keyword",
                      "value": "17"
                    },
                    {
                      "$type": "Keyword",
                      "value": "21"
                    }
                  ]
                }
              }
            ]
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "QualifiedName",
      "dataType": "string",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@34"
            },
            "arguments": []
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": "."
              },
              {
                "$type": "RuleCall",
                "rule": {
                  "$ref": "#/rules@34"
                },
                "arguments": []
              }
            ],
            "cardinality": "*"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "TerminalRule",
      "name": "Dependency",
      "type": {
        "$type": "ReturnType",
        "name": "string"
      },
      "definition": {
        "$type": "RegexToken",
        "regex": "SpringBootStarter|SpringDataJPA"
      },
      "fragment": false,
      "hidden": false
    },
    {
      "$type": "TerminalRule",
      "name": "RELATIONSHIP",
      "type": {
        "$type": "ReturnType",
        "name": "string"
      },
      "definition": {
        "$type": "RegexToken",
        "regex": "OneToOne|OneToMany|ManyToOne|ManyToMany"
      },
      "fragment": false,
      "hidden": false
    },
    {
      "$type": "TerminalRule",
      "name": "BUILDTOOL",
      "type": {
        "$type": "ReturnType",
        "name": "string"
      },
      "definition": {
        "$type": "RegexToken",
        "regex": "Gradle|Maven"
      },
      "fragment": false,
      "hidden": false
    },
    {
      "$type": "TerminalRule",
      "name": "DATATYPE",
      "type": {
        "$type": "ReturnType",
        "name": "string"
      },
      "definition": {
        "$type": "RegexToken",
        "regex": "Integer|Long|Float|String|Boolean"
      },
      "fragment": false,
      "hidden": false
    },
    {
      "$type": "TerminalRule",
      "name": "OPERATION",
      "type": {
        "$type": "ReturnType",
        "name": "string"
      },
      "definition": {
        "$type": "RegexToken",
        "regex": "POST|GET|PUT|PATCH|DELETE"
      },
      "fragment": false,
      "hidden": false
    },
    {
      "$type": "TerminalRule",
      "name": "DATABASE_TYPE",
      "type": {
        "$type": "ReturnType",
        "name": "string"
      },
      "definition": {
        "$type": "RegexToken",
        "regex": "MySQL|Oracle|Mongodb|Maruadn"
      },
      "fragment": false,
      "hidden": false
    },
    {
      "$type": "TerminalRule",
      "name": "QUERY_TYPE",
      "type": {
        "$type": "ReturnType",
        "name": "string"
      },
      "definition": {
        "$type": "RegexToken",
        "regex": "INSERT|UPDATE|SELECT|DELETE"
      },
      "fragment": false,
      "hidden": false
    },
    {
      "$type": "TerminalRule",
      "hidden": true,
      "name": "WS",
      "definition": {
        "$type": "RegexToken",
        "regex": "\\\\s+"
      },
      "fragment": false
    },
    {
      "$type": "TerminalRule",
      "name": "ID",
      "definition": {
        "$type": "RegexToken",
        "regex": "[_a-zA-Z][\\\\w_]*"
      },
      "fragment": false,
      "hidden": false
    },
    {
      "$type": "TerminalRule",
      "name": "STRING",
      "type": {
        "$type": "ReturnType",
        "name": "string"
      },
      "definition": {
        "$type": "RegexToken",
        "regex": "\\"[^\\"]*\\"|'[^']*'"
      },
      "fragment": false,
      "hidden": false
    },
    {
      "$type": "TerminalRule",
      "name": "PATH",
      "type": {
        "$type": "ReturnType",
        "name": "string"
      },
      "definition": {
        "$type": "RegexToken",
        "regex": "[/][_a-zA-Z][\\\\w_]*"
      },
      "fragment": false,
      "hidden": false
    },
    {
      "$type": "TerminalRule",
      "name": "INT",
      "type": {
        "$type": "ReturnType",
        "name": "number"
      },
      "definition": {
        "$type": "RegexToken",
        "regex": "[0-9]+"
      },
      "fragment": false,
      "hidden": false
    },
    {
      "$type": "TerminalRule",
      "hidden": true,
      "name": "ML_COMMENT",
      "definition": {
        "$type": "RegexToken",
        "regex": "\\\\/\\\\*[\\\\s\\\\S]*?\\\\*\\\\/"
      },
      "fragment": false
    },
    {
      "$type": "TerminalRule",
      "hidden": true,
      "name": "SL_COMMENT",
      "definition": {
        "$type": "RegexToken",
        "regex": "\\\\/\\\\/[^\\\\n\\\\r]*"
      },
      "fragment": false
    }
  ],
  "definesHiddenTokens": false,
  "hiddenTokens": [],
  "imports": [],
  "interfaces": [],
  "types": [],
  "usedGrammars": []
}`));sm.JgenGrammar=dme});var rj=h(No=>{"use strict";Object.defineProperty(No,"__esModule",{value:!0});No.JgenGeneratedModule=No.JgenGeneratedSharedModule=No.JgenLanguageMetaData=void 0;var fme=fC(),pme=tj();No.JgenLanguageMetaData={languageId:"jgen",fileExtensions:[".jgen"],caseInsensitive:!1};No.JgenGeneratedSharedModule={AstReflection:()=>new fme.JgenAstReflection};No.JgenGeneratedModule={Grammar:()=>(0,pme.JgenGrammar)(),LanguageMetaData:()=>No.JgenLanguageMetaData,parser:{}}});var nj=h(Yu=>{"use strict";Object.defineProperty(Yu,"__esModule",{value:!0});Yu.JgenValidator=Yu.registerValidationChecks=void 0;var Xa=fC(),hme={OneToMany:["ManyToOne"],ManyToOne:["OneToMany"],ManyToMany:["ManyToMany"]};function mme(t){let e=t.validation.ValidationRegistry,r=t.validation.JgenValidator,n={Enum:(i,o)=>{r.checkStartsWithCapital(i,o),r.checkEnumLiterals(i,o)},Entity:(i,o)=>{r.checkStartsWithCapital(i,o),r.checkEntityAttributes(i,o)},Relationship:r.checkRelationship,Repository:r.checkRepository,Service:r.checkService,Controller:r.checkController,Project:r.checkProject};e.register(n,r)}Yu.registerValidationChecks=mme;var pC=class{checkStartsWithCapital(e,r){if(e.name){let n=e.name[0];n.toUpperCase()!==n&&r("warning","keyword should start with a capital.",{node:e,property:"name"})}}checkEntityAttributes(e,r){e.attributes.length===0&&r("error","Entity must contain at least one attribute.",{node:e,property:"name"})}checkEnumLiterals(e,r){e.literals.length===0&&r("error","Enum must contain at least one literal.",{node:e,property:"name"})}checkRelationship(e,r){e.from&&e.to&&e.from===e.to&&r("error","Relationship from and to the same entity.",{node:e,property:"type"})}checkRepository(e,r){e.queries.forEach(n=>{n.parameters.forEach(i=>{var o,a;!((o=e.entity.ref)===null||o===void 0)&&o.attributes.some(s=>s.name===i.attribute)||r("error",`Parameter attribute '${i.attribute}' not found in entity '${(a=e.entity.ref)===null||a===void 0?void 0:a.name}'.`,{node:i,property:"attribute"})})})}checkService(e,r){e.methods.forEach(n=>{n.parameters.forEach(i=>{var o,a;!((o=e.entity.ref)===null||o===void 0)&&o.attributes.some(s=>s.name===i.attribute)||r("error",`Parameter attribute '${i.attribute}' not found in entity '${(a=e.entity.ref)===null||a===void 0?void 0:a.name}'.`,{node:i,property:"attribute"})})})}checkController(e,r){e.routes.forEach(n=>{n.requestParameters.length>0&&n.requestParameters.forEach(i=>{var o,a;!((o=e.entity.ref)===null||o===void 0)&&o.attributes.some(s=>s.name===i.attribute)||r("error",`Parameter attribute '${i.attribute}' not found in entity '${(a=e.entity.ref)===null||a===void 0?void 0:a.name}'.`,{node:i,property:"attribute"})}),n.requestBody&&n.requestBody.parameters.forEach(i=>{var o,a;!((o=e.entity.ref)===null||o===void 0)&&o.attributes.some(s=>s.name===i.attribute)||r("error",`Parameter attribute '${i.attribute}' not found in entity '${(a=e.entity.ref)===null||a===void 0?void 0:a.name}'.`,{node:i,property:"attribute"})})})}checkProject(e,r){if(!(0,Xa.isProject)(e))throw new Error("Retrieve a non-model in validation");let n=new Set,i=new Set,o=[];e.structuralComponents.forEach(a=>{gme(a)&&(i.has(a.name)&&r("error",`Enum has non-unique name '${a.name}'.`,{node:a,property:"name"}),i.add(a.name))}),e.structuralComponents.forEach(a=>{yme(a)&&(n.has(a.name)&&r("error",`Entity has non-unique name '${a.name}'.`,{node:a,property:"name"}),n.add(a.name))}),e.structuralComponents.forEach(a=>{var s,u;if(vme(a)){let d=(s=a.from.ref)===null||s===void 0?void 0:s.name,p=(u=a.to.ref)===null||u===void 0?void 0:u.name,m=a.type;if(!d||!p){r("error",'Relationship must have both "from" and "to" entities defined.',{node:a,property:"type"});return}o.some(v=>v.from===d&&v.to===p&&v.type===m)&&r("error",`Duplicate relationship type '${m}' between '${d}' and '${p}'.`,{node:a,property:"type"}),o.some(v=>v.from===d&&v.to===p&&v.type!==m)&&r("warning",`Different relationship type '${m}' between '${d}' and '${p}'.`,{node:a,property:"type"}),o.some(v=>{var P;return v.from===p&&v.to===d&&!(!((P=hme[v.type])===null||P===void 0)&&P.includes(m))})&&r("warning",`Invalid relationship type combination '${m}' between '${d}' and '${p}'.`,{node:a,property:"type"}),o.push({from:d,to:p,type:m})}})}};Yu.JgenValidator=pC;function gme(t){return Xa.reflection.isInstance(t,Xa.Enum)}function yme(t){return Xa.reflection.isInstance(t,Xa.Entity)}function vme(t){return Xa.reflection.isInstance(t,Xa.Relationship)}});var aj=h(Ja=>{"use strict";Object.defineProperty(Ja,"__esModule",{value:!0});Ja.createJgenServices=Ja.JgenModule=void 0;var um=Wl(),ij=rj(),oj=nj();Ja.JgenModule={validation:{JgenValidator:()=>new oj.JgenValidator}};function _me(t){let e=(0,um.inject)((0,um.createDefaultSharedModule)(t),ij.JgenGeneratedSharedModule),r=(0,um.inject)((0,um.createDefaultModule)({shared:e}),ij.JgenGeneratedModule,Ja.JgenModule);return e.ServiceRegistry.register(r),(0,oj.registerValidationChecks)(r),{shared:e,Jgen:r}}Ja.createJgenServices=_me});var Pme=h(uj=>{Object.defineProperty(uj,"__esModule",{value:!0});var sj=Wl(),hC=ej(),Tme=aj(),Rme=new hC.BrowserMessageReader(self),bme=new hC.BrowserMessageWriter(self),Cme=(0,hC.createConnection)(Rme,bme),{shared:Ame}=(0,Tme.createJgenServices)(Object.assign({connection:Cme},sj.EmptyFileSystem));(0,sj.startLanguageServer)(Ame)});Pme();})();
