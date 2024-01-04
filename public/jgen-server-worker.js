"use strict";(()=>{var fm=Object.defineProperty;var Pj=Object.getOwnPropertyDescriptor;var Aj=Object.getOwnPropertyNames;var Sj=Object.prototype.hasOwnProperty;var zl=(t=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(t,{get:(e,r)=>(typeof require<"u"?require:e)[r]}):t)(function(t){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+t+'" is not supported')});var Ej=(t,e)=>()=>(t&&(e=t(t=0)),e);var h=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),kj=(t,e)=>{for(var r in e)fm(t,r,{get:e[r],enumerable:!0})},Nj=(t,e,r,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of Aj(e))!Sj.call(t,i)&&i!==r&&fm(t,i,{get:()=>e[i],enumerable:!(n=Pj(e,i))||n.enumerable});return t};var bC=t=>Nj(fm({},"__esModule",{value:!0}),t);var es=h(Pr=>{"use strict";Object.defineProperty(Pr,"__esModule",{value:!0});Pr.stringArray=Pr.array=Pr.func=Pr.error=Pr.number=Pr.string=Pr.boolean=void 0;function wj(t){return t===!0||t===!1}Pr.boolean=wj;function CC(t){return typeof t=="string"||t instanceof String}Pr.string=CC;function Dj(t){return typeof t=="number"||t instanceof Number}Pr.number=Dj;function Oj(t){return t instanceof Error}Pr.error=Oj;function qj(t){return typeof t=="function"}Pr.func=qj;function PC(t){return Array.isArray(t)}Pr.array=PC;function Ij(t){return PC(t)&&t.every(e=>CC(e))}Pr.stringArray=Ij});var Lm=h(se=>{"use strict";Object.defineProperty(se,"__esModule",{value:!0});se.Message=se.NotificationType9=se.NotificationType8=se.NotificationType7=se.NotificationType6=se.NotificationType5=se.NotificationType4=se.NotificationType3=se.NotificationType2=se.NotificationType1=se.NotificationType0=se.NotificationType=se.RequestType9=se.RequestType8=se.RequestType7=se.RequestType6=se.RequestType5=se.RequestType4=se.RequestType3=se.RequestType2=se.RequestType1=se.RequestType=se.RequestType0=se.AbstractMessageSignature=se.ParameterStructures=se.ResponseError=se.ErrorCodes=void 0;var ma=es(),AC;(function(t){t.ParseError=-32700,t.InvalidRequest=-32600,t.MethodNotFound=-32601,t.InvalidParams=-32602,t.InternalError=-32603,t.jsonrpcReservedErrorRangeStart=-32099,t.serverErrorStart=-32099,t.MessageWriteError=-32099,t.MessageReadError=-32098,t.PendingResponseRejected=-32097,t.ConnectionInactive=-32096,t.ServerNotInitialized=-32002,t.UnknownErrorCode=-32001,t.jsonrpcReservedErrorRangeEnd=-32e3,t.serverErrorEnd=-32e3})(AC=se.ErrorCodes||(se.ErrorCodes={}));var pm=class t extends Error{constructor(e,r,n){super(r),this.code=ma.number(e)?e:AC.UnknownErrorCode,this.data=n,Object.setPrototypeOf(this,t.prototype)}toJson(){let e={code:this.code,message:this.message};return this.data!==void 0&&(e.data=this.data),e}};se.ResponseError=pm;var Yr=class t{constructor(e){this.kind=e}static is(e){return e===t.auto||e===t.byName||e===t.byPosition}toString(){return this.kind}};se.ParameterStructures=Yr;Yr.auto=new Yr("auto");Yr.byPosition=new Yr("byPosition");Yr.byName=new Yr("byName");var ct=class{constructor(e,r){this.method=e,this.numberOfParams=r}get parameterStructures(){return Yr.auto}};se.AbstractMessageSignature=ct;var hm=class extends ct{constructor(e){super(e,0)}};se.RequestType0=hm;var mm=class extends ct{constructor(e,r=Yr.auto){super(e,1),this._parameterStructures=r}get parameterStructures(){return this._parameterStructures}};se.RequestType=mm;var gm=class extends ct{constructor(e,r=Yr.auto){super(e,1),this._parameterStructures=r}get parameterStructures(){return this._parameterStructures}};se.RequestType1=gm;var ym=class extends ct{constructor(e){super(e,2)}};se.RequestType2=ym;var vm=class extends ct{constructor(e){super(e,3)}};se.RequestType3=vm;var _m=class extends ct{constructor(e){super(e,4)}};se.RequestType4=_m;var Tm=class extends ct{constructor(e){super(e,5)}};se.RequestType5=Tm;var Rm=class extends ct{constructor(e){super(e,6)}};se.RequestType6=Rm;var bm=class extends ct{constructor(e){super(e,7)}};se.RequestType7=bm;var Cm=class extends ct{constructor(e){super(e,8)}};se.RequestType8=Cm;var Pm=class extends ct{constructor(e){super(e,9)}};se.RequestType9=Pm;var Am=class extends ct{constructor(e,r=Yr.auto){super(e,1),this._parameterStructures=r}get parameterStructures(){return this._parameterStructures}};se.NotificationType=Am;var Sm=class extends ct{constructor(e){super(e,0)}};se.NotificationType0=Sm;var Em=class extends ct{constructor(e,r=Yr.auto){super(e,1),this._parameterStructures=r}get parameterStructures(){return this._parameterStructures}};se.NotificationType1=Em;var km=class extends ct{constructor(e){super(e,2)}};se.NotificationType2=km;var Nm=class extends ct{constructor(e){super(e,3)}};se.NotificationType3=Nm;var wm=class extends ct{constructor(e){super(e,4)}};se.NotificationType4=wm;var Dm=class extends ct{constructor(e){super(e,5)}};se.NotificationType5=Dm;var Om=class extends ct{constructor(e){super(e,6)}};se.NotificationType6=Om;var qm=class extends ct{constructor(e){super(e,7)}};se.NotificationType7=qm;var Im=class extends ct{constructor(e){super(e,8)}};se.NotificationType8=Im;var xm=class extends ct{constructor(e){super(e,9)}};se.NotificationType9=xm;var xj;(function(t){function e(i){let o=i;return o&&ma.string(o.method)&&(ma.string(o.id)||ma.number(o.id))}t.isRequest=e;function r(i){let o=i;return o&&ma.string(o.method)&&i.id===void 0}t.isNotification=r;function n(i){let o=i;return o&&(o.result!==void 0||!!o.error)&&(ma.string(o.id)||ma.number(o.id)||o.id===null)}t.isResponse=n})(xj=se.Message||(se.Message={}))});var $m=h(Xi=>{"use strict";var SC;Object.defineProperty(Xi,"__esModule",{value:!0});Xi.LRUCache=Xi.LinkedMap=Xi.Touch=void 0;var Ir;(function(t){t.None=0,t.First=1,t.AsOld=t.First,t.Last=2,t.AsNew=t.Last})(Ir=Xi.Touch||(Xi.Touch={}));var Yl=class{constructor(){this[SC]="LinkedMap",this._map=new Map,this._head=void 0,this._tail=void 0,this._size=0,this._state=0}clear(){this._map.clear(),this._head=void 0,this._tail=void 0,this._size=0,this._state++}isEmpty(){return!this._head&&!this._tail}get size(){return this._size}get first(){return this._head?.value}get last(){return this._tail?.value}has(e){return this._map.has(e)}get(e,r=Ir.None){let n=this._map.get(e);if(n)return r!==Ir.None&&this.touch(n,r),n.value}set(e,r,n=Ir.None){let i=this._map.get(e);if(i)i.value=r,n!==Ir.None&&this.touch(i,n);else{switch(i={key:e,value:r,next:void 0,previous:void 0},n){case Ir.None:this.addItemLast(i);break;case Ir.First:this.addItemFirst(i);break;case Ir.Last:this.addItemLast(i);break;default:this.addItemLast(i);break}this._map.set(e,i),this._size++}return this}delete(e){return!!this.remove(e)}remove(e){let r=this._map.get(e);if(r)return this._map.delete(e),this.removeItem(r),this._size--,r.value}shift(){if(!this._head&&!this._tail)return;if(!this._head||!this._tail)throw new Error("Invalid list");let e=this._head;return this._map.delete(e.key),this.removeItem(e),this._size--,e.value}forEach(e,r){let n=this._state,i=this._head;for(;i;){if(r?e.bind(r)(i.value,i.key,this):e(i.value,i.key,this),this._state!==n)throw new Error("LinkedMap got modified during iteration.");i=i.next}}keys(){let e=this._state,r=this._head,n={[Symbol.iterator]:()=>n,next:()=>{if(this._state!==e)throw new Error("LinkedMap got modified during iteration.");if(r){let i={value:r.key,done:!1};return r=r.next,i}else return{value:void 0,done:!0}}};return n}values(){let e=this._state,r=this._head,n={[Symbol.iterator]:()=>n,next:()=>{if(this._state!==e)throw new Error("LinkedMap got modified during iteration.");if(r){let i={value:r.value,done:!1};return r=r.next,i}else return{value:void 0,done:!0}}};return n}entries(){let e=this._state,r=this._head,n={[Symbol.iterator]:()=>n,next:()=>{if(this._state!==e)throw new Error("LinkedMap got modified during iteration.");if(r){let i={value:[r.key,r.value],done:!1};return r=r.next,i}else return{value:void 0,done:!0}}};return n}[(SC=Symbol.toStringTag,Symbol.iterator)](){return this.entries()}trimOld(e){if(e>=this.size)return;if(e===0){this.clear();return}let r=this._head,n=this.size;for(;r&&n>e;)this._map.delete(r.key),r=r.next,n--;this._head=r,this._size=n,r&&(r.previous=void 0),this._state++}addItemFirst(e){if(!this._head&&!this._tail)this._tail=e;else if(this._head)e.next=this._head,this._head.previous=e;else throw new Error("Invalid list");this._head=e,this._state++}addItemLast(e){if(!this._head&&!this._tail)this._head=e;else if(this._tail)e.previous=this._tail,this._tail.next=e;else throw new Error("Invalid list");this._tail=e,this._state++}removeItem(e){if(e===this._head&&e===this._tail)this._head=void 0,this._tail=void 0;else if(e===this._head){if(!e.next)throw new Error("Invalid list");e.next.previous=void 0,this._head=e.next}else if(e===this._tail){if(!e.previous)throw new Error("Invalid list");e.previous.next=void 0,this._tail=e.previous}else{let r=e.next,n=e.previous;if(!r||!n)throw new Error("Invalid list");r.previous=n,n.next=r}e.next=void 0,e.previous=void 0,this._state++}touch(e,r){if(!this._head||!this._tail)throw new Error("Invalid list");if(!(r!==Ir.First&&r!==Ir.Last)){if(r===Ir.First){if(e===this._head)return;let n=e.next,i=e.previous;e===this._tail?(i.next=void 0,this._tail=i):(n.previous=i,i.next=n),e.previous=void 0,e.next=this._head,this._head.previous=e,this._head=e,this._state++}else if(r===Ir.Last){if(e===this._tail)return;let n=e.next,i=e.previous;e===this._head?(n.previous=void 0,this._head=n):(n.previous=i,i.next=n),e.next=void 0,e.previous=this._tail,this._tail.next=e,this._tail=e,this._state++}}}toJSON(){let e=[];return this.forEach((r,n)=>{e.push([n,r])}),e}fromJSON(e){this.clear();for(let[r,n]of e)this.set(r,n)}};Xi.LinkedMap=Yl;var Mm=class extends Yl{constructor(e,r=1){super(),this._limit=e,this._ratio=Math.min(Math.max(0,r),1)}get limit(){return this._limit}set limit(e){this._limit=e,this.checkTrim()}get ratio(){return this._ratio}set ratio(e){this._ratio=Math.min(Math.max(0,e),1),this.checkTrim()}get(e,r=Ir.AsNew){return super.get(e,r)}peek(e){return super.get(e,Ir.None)}set(e,r){return super.set(e,r,Ir.Last),this.checkTrim(),this}checkTrim(){this.size>this._limit&&this.trimOld(Math.round(this._limit*this._ratio))}};Xi.LRUCache=Mm});var EC=h(Zu=>{"use strict";Object.defineProperty(Zu,"__esModule",{value:!0});Zu.Disposable=void 0;var Lj;(function(t){function e(r){return{dispose:r}}t.create=e})(Lj=Zu.Disposable||(Zu.Disposable={}))});var Do=h(Um=>{"use strict";Object.defineProperty(Um,"__esModule",{value:!0});var Fm;function jm(){if(Fm===void 0)throw new Error("No runtime abstraction layer installed");return Fm}(function(t){function e(r){if(r===void 0)throw new Error("No runtime abstraction layer provided");Fm=r}t.install=e})(jm||(jm={}));Um.default=jm});var ts=h(ga=>{"use strict";Object.defineProperty(ga,"__esModule",{value:!0});ga.Emitter=ga.Event=void 0;var Mj=Do(),$j;(function(t){let e={dispose(){}};t.None=function(){return e}})($j=ga.Event||(ga.Event={}));var Gm=class{add(e,r=null,n){this._callbacks||(this._callbacks=[],this._contexts=[]),this._callbacks.push(e),this._contexts.push(r),Array.isArray(n)&&n.push({dispose:()=>this.remove(e,r)})}remove(e,r=null){if(!this._callbacks)return;let n=!1;for(let i=0,o=this._callbacks.length;i<o;i++)if(this._callbacks[i]===e)if(this._contexts[i]===r){this._callbacks.splice(i,1),this._contexts.splice(i,1);return}else n=!0;if(n)throw new Error("When adding a listener with a context, you should remove it with the same context")}invoke(...e){if(!this._callbacks)return[];let r=[],n=this._callbacks.slice(0),i=this._contexts.slice(0);for(let o=0,a=n.length;o<a;o++)try{r.push(n[o].apply(i[o],e))}catch(s){(0,Mj.default)().console.error(s)}return r}isEmpty(){return!this._callbacks||this._callbacks.length===0}dispose(){this._callbacks=void 0,this._contexts=void 0}},Xl=class t{constructor(e){this._options=e}get event(){return this._event||(this._event=(e,r,n)=>{this._callbacks||(this._callbacks=new Gm),this._options&&this._options.onFirstListenerAdd&&this._callbacks.isEmpty()&&this._options.onFirstListenerAdd(this),this._callbacks.add(e,r);let i={dispose:()=>{this._callbacks&&(this._callbacks.remove(e,r),i.dispose=t._noop,this._options&&this._options.onLastListenerRemove&&this._callbacks.isEmpty()&&this._options.onLastListenerRemove(this))}};return Array.isArray(n)&&n.push(i),i}),this._event}fire(e){this._callbacks&&this._callbacks.invoke.call(this._callbacks,e)}dispose(){this._callbacks&&(this._callbacks.dispose(),this._callbacks=void 0)}};ga.Emitter=Xl;Xl._noop=function(){}});var Ql=h(ya=>{"use strict";Object.defineProperty(ya,"__esModule",{value:!0});ya.CancellationTokenSource=ya.CancellationToken=void 0;var Fj=Do(),jj=es(),Wm=ts(),Hm;(function(t){t.None=Object.freeze({isCancellationRequested:!1,onCancellationRequested:Wm.Event.None}),t.Cancelled=Object.freeze({isCancellationRequested:!0,onCancellationRequested:Wm.Event.None});function e(r){let n=r;return n&&(n===t.None||n===t.Cancelled||jj.boolean(n.isCancellationRequested)&&!!n.onCancellationRequested)}t.is=e})(Hm=ya.CancellationToken||(ya.CancellationToken={}));var Uj=Object.freeze(function(t,e){let r=(0,Fj.default)().timer.setTimeout(t.bind(e),0);return{dispose(){r.dispose()}}}),Jl=class{constructor(){this._isCancelled=!1}cancel(){this._isCancelled||(this._isCancelled=!0,this._emitter&&(this._emitter.fire(void 0),this.dispose()))}get isCancellationRequested(){return this._isCancelled}get onCancellationRequested(){return this._isCancelled?Uj:(this._emitter||(this._emitter=new Wm.Emitter),this._emitter.event)}dispose(){this._emitter&&(this._emitter.dispose(),this._emitter=void 0)}},Km=class{get token(){return this._token||(this._token=new Jl),this._token}cancel(){this._token?this._token.cancel():this._token=Hm.Cancelled}dispose(){this._token?this._token instanceof Jl&&this._token.dispose():this._token=Hm.None}};ya.CancellationTokenSource=Km});var kC=h(rs=>{"use strict";Object.defineProperty(rs,"__esModule",{value:!0});rs.SharedArrayReceiverStrategy=rs.SharedArraySenderStrategy=void 0;var Gj=Ql(),ec;(function(t){t.Continue=0,t.Cancelled=1})(ec||(ec={}));var Bm=class{constructor(){this.buffers=new Map}enableCancellation(e){if(e.id===null)return;let r=new SharedArrayBuffer(4),n=new Int32Array(r,0,1);n[0]=ec.Continue,this.buffers.set(e.id,r),e.$cancellationData=r}async sendCancellation(e,r){let n=this.buffers.get(r);if(n===void 0)return;let i=new Int32Array(n,0,1);Atomics.store(i,0,ec.Cancelled)}cleanup(e){this.buffers.delete(e)}dispose(){this.buffers.clear()}};rs.SharedArraySenderStrategy=Bm;var Vm=class{constructor(e){this.data=new Int32Array(e,0,1)}get isCancellationRequested(){return Atomics.load(this.data,0)===ec.Cancelled}get onCancellationRequested(){throw new Error("Cancellation over SharedArrayBuffer doesn't support cancellation events")}},zm=class{constructor(e){this.token=new Vm(e)}cancel(){}dispose(){}},Ym=class{constructor(){this.kind="request"}createCancellationTokenSource(e){let r=e.$cancellationData;return r===void 0?new Gj.CancellationTokenSource:new zm(r)}};rs.SharedArrayReceiverStrategy=Ym});var Jm=h(Zl=>{"use strict";Object.defineProperty(Zl,"__esModule",{value:!0});Zl.Semaphore=void 0;var Wj=Do(),Xm=class{constructor(e=1){if(e<=0)throw new Error("Capacity must be greater than 0");this._capacity=e,this._active=0,this._waiting=[]}lock(e){return new Promise((r,n)=>{this._waiting.push({thunk:e,resolve:r,reject:n}),this.runNext()})}get active(){return this._active}runNext(){this._waiting.length===0||this._active===this._capacity||(0,Wj.default)().timer.setImmediate(()=>this.doRunNext())}doRunNext(){if(this._waiting.length===0||this._active===this._capacity)return;let e=this._waiting.shift();if(this._active++,this._active>this._capacity)throw new Error("To many thunks active");try{let r=e.thunk();r instanceof Promise?r.then(n=>{this._active--,e.resolve(n),this.runNext()},n=>{this._active--,e.reject(n),this.runNext()}):(this._active--,e.resolve(r),this.runNext())}catch(r){this._active--,e.reject(r),this.runNext()}}};Zl.Semaphore=Xm});var NC=h(Ji=>{"use strict";Object.defineProperty(Ji,"__esModule",{value:!0});Ji.ReadableStreamMessageReader=Ji.AbstractMessageReader=Ji.MessageReader=void 0;var Zm=Do(),ns=es(),Qm=ts(),Hj=Jm(),Kj;(function(t){function e(r){let n=r;return n&&ns.func(n.listen)&&ns.func(n.dispose)&&ns.func(n.onError)&&ns.func(n.onClose)&&ns.func(n.onPartialMessage)}t.is=e})(Kj=Ji.MessageReader||(Ji.MessageReader={}));var ed=class{constructor(){this.errorEmitter=new Qm.Emitter,this.closeEmitter=new Qm.Emitter,this.partialMessageEmitter=new Qm.Emitter}dispose(){this.errorEmitter.dispose(),this.closeEmitter.dispose()}get onError(){return this.errorEmitter.event}fireError(e){this.errorEmitter.fire(this.asError(e))}get onClose(){return this.closeEmitter.event}fireClose(){this.closeEmitter.fire(void 0)}get onPartialMessage(){return this.partialMessageEmitter.event}firePartialMessage(e){this.partialMessageEmitter.fire(e)}asError(e){return e instanceof Error?e:new Error(`Reader received error. Reason: ${ns.string(e.message)?e.message:"unknown"}`)}};Ji.AbstractMessageReader=ed;var eg;(function(t){function e(r){let n,i,o,a=new Map,s,u=new Map;if(r===void 0||typeof r=="string")n=r??"utf-8";else{if(n=r.charset??"utf-8",r.contentDecoder!==void 0&&(o=r.contentDecoder,a.set(o.name,o)),r.contentDecoders!==void 0)for(let d of r.contentDecoders)a.set(d.name,d);if(r.contentTypeDecoder!==void 0&&(s=r.contentTypeDecoder,u.set(s.name,s)),r.contentTypeDecoders!==void 0)for(let d of r.contentTypeDecoders)u.set(d.name,d)}return s===void 0&&(s=(0,Zm.default)().applicationJson.decoder,u.set(s.name,s)),{charset:n,contentDecoder:o,contentDecoders:a,contentTypeDecoder:s,contentTypeDecoders:u}}t.fromOptions=e})(eg||(eg={}));var tg=class extends ed{constructor(e,r){super(),this.readable=e,this.options=eg.fromOptions(r),this.buffer=(0,Zm.default)().messageBuffer.create(this.options.charset),this._partialMessageTimeout=1e4,this.nextMessageLength=-1,this.messageToken=0,this.readSemaphore=new Hj.Semaphore(1)}set partialMessageTimeout(e){this._partialMessageTimeout=e}get partialMessageTimeout(){return this._partialMessageTimeout}listen(e){this.nextMessageLength=-1,this.messageToken=0,this.partialMessageTimer=void 0,this.callback=e;let r=this.readable.onData(n=>{this.onData(n)});return this.readable.onError(n=>this.fireError(n)),this.readable.onClose(()=>this.fireClose()),r}onData(e){for(this.buffer.append(e);;){if(this.nextMessageLength===-1){let n=this.buffer.tryReadHeaders(!0);if(!n)return;let i=n.get("content-length");if(!i){this.fireError(new Error("Header must provide a Content-Length property."));return}let o=parseInt(i);if(isNaN(o)){this.fireError(new Error("Content-Length value must be a number."));return}this.nextMessageLength=o}let r=this.buffer.tryReadBody(this.nextMessageLength);if(r===void 0){this.setPartialMessageTimer();return}this.clearPartialMessageTimer(),this.nextMessageLength=-1,this.readSemaphore.lock(async()=>{let n=this.options.contentDecoder!==void 0?await this.options.contentDecoder.decode(r):r,i=await this.options.contentTypeDecoder.decode(n,this.options);this.callback(i)}).catch(n=>{this.fireError(n)})}}clearPartialMessageTimer(){this.partialMessageTimer&&(this.partialMessageTimer.dispose(),this.partialMessageTimer=void 0)}setPartialMessageTimer(){this.clearPartialMessageTimer(),!(this._partialMessageTimeout<=0)&&(this.partialMessageTimer=(0,Zm.default)().timer.setTimeout((e,r)=>{this.partialMessageTimer=void 0,e===this.messageToken&&(this.firePartialMessage({messageToken:e,waitingTime:r}),this.setPartialMessageTimer())},this._partialMessageTimeout,this.messageToken,this._partialMessageTimeout))}};Ji.ReadableStreamMessageReader=tg});var qC=h(Qi=>{"use strict";Object.defineProperty(Qi,"__esModule",{value:!0});Qi.WriteableStreamMessageWriter=Qi.AbstractMessageWriter=Qi.MessageWriter=void 0;var wC=Do(),tc=es(),Bj=Jm(),DC=ts(),Vj="Content-Length: ",OC=`\r
`,zj;(function(t){function e(r){let n=r;return n&&tc.func(n.dispose)&&tc.func(n.onClose)&&tc.func(n.onError)&&tc.func(n.write)}t.is=e})(zj=Qi.MessageWriter||(Qi.MessageWriter={}));var td=class{constructor(){this.errorEmitter=new DC.Emitter,this.closeEmitter=new DC.Emitter}dispose(){this.errorEmitter.dispose(),this.closeEmitter.dispose()}get onError(){return this.errorEmitter.event}fireError(e,r,n){this.errorEmitter.fire([this.asError(e),r,n])}get onClose(){return this.closeEmitter.event}fireClose(){this.closeEmitter.fire(void 0)}asError(e){return e instanceof Error?e:new Error(`Writer received error. Reason: ${tc.string(e.message)?e.message:"unknown"}`)}};Qi.AbstractMessageWriter=td;var rg;(function(t){function e(r){return r===void 0||typeof r=="string"?{charset:r??"utf-8",contentTypeEncoder:(0,wC.default)().applicationJson.encoder}:{charset:r.charset??"utf-8",contentEncoder:r.contentEncoder,contentTypeEncoder:r.contentTypeEncoder??(0,wC.default)().applicationJson.encoder}}t.fromOptions=e})(rg||(rg={}));var ng=class extends td{constructor(e,r){super(),this.writable=e,this.options=rg.fromOptions(r),this.errorCount=0,this.writeSemaphore=new Bj.Semaphore(1),this.writable.onError(n=>this.fireError(n)),this.writable.onClose(()=>this.fireClose())}async write(e){return this.writeSemaphore.lock(async()=>this.options.contentTypeEncoder.encode(e,this.options).then(n=>this.options.contentEncoder!==void 0?this.options.contentEncoder.encode(n):n).then(n=>{let i=[];return i.push(Vj,n.byteLength.toString(),OC),i.push(OC),this.doWrite(e,i,n)},n=>{throw this.fireError(n),n}))}async doWrite(e,r,n){try{return await this.writable.write(r.join(""),"ascii"),this.writable.write(n)}catch(i){return this.handleError(i,e),Promise.reject(i)}}handleError(e,r){this.errorCount++,this.fireError(e,r,this.errorCount)}end(){this.writable.end()}};Qi.WriteableStreamMessageWriter=ng});var IC=h(rd=>{"use strict";Object.defineProperty(rd,"__esModule",{value:!0});rd.AbstractMessageBuffer=void 0;var Yj=13,Xj=10,Jj=`\r
`,ig=class{constructor(e="utf-8"){this._encoding=e,this._chunks=[],this._totalLength=0}get encoding(){return this._encoding}append(e){let r=typeof e=="string"?this.fromString(e,this._encoding):e;this._chunks.push(r),this._totalLength+=r.byteLength}tryReadHeaders(e=!1){if(this._chunks.length===0)return;let r=0,n=0,i=0,o=0;e:for(;n<this._chunks.length;){let d=this._chunks[n];for(i=0;i<d.length;){switch(d[i]){case Yj:switch(r){case 0:r=1;break;case 2:r=3;break;default:r=0}break;case Xj:switch(r){case 1:r=2;break;case 3:r=4,i++;break e;default:r=0}break;default:r=0}i++}o+=d.byteLength,n++}if(r!==4)return;let a=this._read(o+i),s=new Map,u=this.toString(a,"ascii").split(Jj);if(u.length<2)return s;for(let d=0;d<u.length-2;d++){let p=u[d],m=p.indexOf(":");if(m===-1)throw new Error("Message header must separate key and value using :");let y=p.substr(0,m),S=p.substr(m+1).trim();s.set(e?y.toLowerCase():y,S)}return s}tryReadBody(e){if(!(this._totalLength<e))return this._read(e)}get numberOfBytes(){return this._totalLength}_read(e){if(e===0)return this.emptyBuffer();if(e>this._totalLength)throw new Error("Cannot read so many bytes!");if(this._chunks[0].byteLength===e){let o=this._chunks[0];return this._chunks.shift(),this._totalLength-=e,this.asNative(o)}if(this._chunks[0].byteLength>e){let o=this._chunks[0],a=this.asNative(o,e);return this._chunks[0]=o.slice(e),this._totalLength-=e,a}let r=this.allocNative(e),n=0,i=0;for(;e>0;){let o=this._chunks[i];if(o.byteLength>e){let a=o.slice(0,e);r.set(a,n),n+=e,this._chunks[i]=o.slice(e),this._totalLength-=e,e-=e}else r.set(o,n),n+=o.byteLength,this._chunks.shift(),this._totalLength-=o.byteLength,e-=o.byteLength}return r}};rd.AbstractMessageBuffer=ig});var UC=h(ie=>{"use strict";Object.defineProperty(ie,"__esModule",{value:!0});ie.createMessageConnection=ie.ConnectionOptions=ie.MessageStrategy=ie.CancellationStrategy=ie.CancellationSenderStrategy=ie.CancellationReceiverStrategy=ie.RequestCancellationReceiverStrategy=ie.IdCancellationReceiverStrategy=ie.ConnectionStrategy=ie.ConnectionError=ie.ConnectionErrors=ie.LogTraceNotification=ie.SetTraceNotification=ie.TraceFormat=ie.TraceValues=ie.Trace=ie.NullLogger=ie.ProgressType=ie.ProgressToken=void 0;var xC=Do(),Pt=es(),ye=Lm(),LC=$m(),rc=ts(),og=Ql(),ic;(function(t){t.type=new ye.NotificationType("$/cancelRequest")})(ic||(ic={}));var MC;(function(t){function e(r){return typeof r=="string"||typeof r=="number"}t.is=e})(MC=ie.ProgressToken||(ie.ProgressToken={}));var nc;(function(t){t.type=new ye.NotificationType("$/progress")})(nc||(nc={}));var ag=class{constructor(){}};ie.ProgressType=ag;var sg;(function(t){function e(r){return Pt.func(r)}t.is=e})(sg||(sg={}));ie.NullLogger=Object.freeze({error:()=>{},warn:()=>{},info:()=>{},log:()=>{}});var He;(function(t){t[t.Off=0]="Off",t[t.Messages=1]="Messages",t[t.Compact=2]="Compact",t[t.Verbose=3]="Verbose"})(He=ie.Trace||(ie.Trace={}));var Qj;(function(t){t.Off="off",t.Messages="messages",t.Compact="compact",t.Verbose="verbose"})(Qj=ie.TraceValues||(ie.TraceValues={}));(function(t){function e(n){if(!Pt.string(n))return t.Off;switch(n=n.toLowerCase(),n){case"off":return t.Off;case"messages":return t.Messages;case"compact":return t.Compact;case"verbose":return t.Verbose;default:return t.Off}}t.fromString=e;function r(n){switch(n){case t.Off:return"off";case t.Messages:return"messages";case t.Compact:return"compact";case t.Verbose:return"verbose";default:return"off"}}t.toString=r})(He=ie.Trace||(ie.Trace={}));var Fn;(function(t){t.Text="text",t.JSON="json"})(Fn=ie.TraceFormat||(ie.TraceFormat={}));(function(t){function e(r){return Pt.string(r)?(r=r.toLowerCase(),r==="json"?t.JSON:t.Text):t.Text}t.fromString=e})(Fn=ie.TraceFormat||(ie.TraceFormat={}));var $C;(function(t){t.type=new ye.NotificationType("$/setTrace")})($C=ie.SetTraceNotification||(ie.SetTraceNotification={}));var ug;(function(t){t.type=new ye.NotificationType("$/logTrace")})(ug=ie.LogTraceNotification||(ie.LogTraceNotification={}));var nd;(function(t){t[t.Closed=1]="Closed",t[t.Disposed=2]="Disposed",t[t.AlreadyListening=3]="AlreadyListening"})(nd=ie.ConnectionErrors||(ie.ConnectionErrors={}));var is=class t extends Error{constructor(e,r){super(r),this.code=e,Object.setPrototypeOf(this,t.prototype)}};ie.ConnectionError=is;var FC;(function(t){function e(r){let n=r;return n&&Pt.func(n.cancelUndispatched)}t.is=e})(FC=ie.ConnectionStrategy||(ie.ConnectionStrategy={}));var dg;(function(t){function e(r){let n=r;return n&&(n.kind===void 0||n.kind==="id")&&Pt.func(n.createCancellationTokenSource)&&(n.dispose===void 0||Pt.func(n.dispose))}t.is=e})(dg=ie.IdCancellationReceiverStrategy||(ie.IdCancellationReceiverStrategy={}));var jC;(function(t){function e(r){let n=r;return n&&n.kind==="request"&&Pt.func(n.createCancellationTokenSource)&&(n.dispose===void 0||Pt.func(n.dispose))}t.is=e})(jC=ie.RequestCancellationReceiverStrategy||(ie.RequestCancellationReceiverStrategy={}));var cg;(function(t){t.Message=Object.freeze({createCancellationTokenSource(r){return new og.CancellationTokenSource}});function e(r){return dg.is(r)||jC.is(r)}t.is=e})(cg=ie.CancellationReceiverStrategy||(ie.CancellationReceiverStrategy={}));var lg;(function(t){t.Message=Object.freeze({sendCancellation(r,n){return r.sendNotification(ic.type,{id:n})},cleanup(r){}});function e(r){let n=r;return n&&Pt.func(n.sendCancellation)&&Pt.func(n.cleanup)}t.is=e})(lg=ie.CancellationSenderStrategy||(ie.CancellationSenderStrategy={}));var fg;(function(t){t.Message=Object.freeze({receiver:cg.Message,sender:lg.Message});function e(r){let n=r;return n&&cg.is(n.receiver)&&lg.is(n.sender)}t.is=e})(fg=ie.CancellationStrategy||(ie.CancellationStrategy={}));var pg;(function(t){function e(r){let n=r;return n&&Pt.func(n.handleMessage)}t.is=e})(pg=ie.MessageStrategy||(ie.MessageStrategy={}));var Zj;(function(t){function e(r){let n=r;return n&&(fg.is(n.cancellationStrategy)||FC.is(n.connectionStrategy)||pg.is(n.messageStrategy))}t.is=e})(Zj=ie.ConnectionOptions||(ie.ConnectionOptions={}));var jn;(function(t){t[t.New=1]="New",t[t.Listening=2]="Listening",t[t.Closed=3]="Closed",t[t.Disposed=4]="Disposed"})(jn||(jn={}));function eU(t,e,r,n){let i=r!==void 0?r:ie.NullLogger,o=0,a=0,s=0,u="2.0",d,p=new Map,m,y=new Map,S=new Map,_,w=new LC.LinkedMap,k=new Map,N=new Set,C=new Map,E=He.Off,L=Fn.Text,U,z=jn.New,te=new rc.Emitter,we=new rc.Emitter,Z=new rc.Emitter,G=new rc.Emitter,j=new rc.Emitter,Y=n&&n.cancellationStrategy?n.cancellationStrategy:fg.Message;function J(T){if(T===null)throw new Error("Can't send requests with id null since the response can't be correlated.");return"req-"+T.toString()}function Ce(T){return T===null?"res-unknown-"+(++s).toString():"res-"+T.toString()}function _e(){return"not-"+(++a).toString()}function me(T,I){ye.Message.isRequest(I)?T.set(J(I.id),I):ye.Message.isResponse(I)?T.set(Ce(I.id),I):T.set(_e(),I)}function Je(T){}function ze(){return z===jn.Listening}function Se(){return z===jn.Closed}function ut(){return z===jn.Disposed}function cr(){(z===jn.New||z===jn.Listening)&&(z=jn.Closed,we.fire(void 0))}function Rr(T){te.fire([T,void 0,void 0])}function fi(T){te.fire(T)}t.onClose(cr),t.onError(Rr),e.onClose(cr),e.onError(fi);function Mn(){_||w.size===0||(_=(0,xC.default)().timer.setImmediate(()=>{_=void 0,Bt()}))}function $n(T){ye.Message.isRequest(T)?hi(T):ye.Message.isNotification(T)?Vi(T):ye.Message.isResponse(T)?mi(T):Qe(T)}function Bt(){if(w.size===0)return;let T=w.shift();try{let I=n?.messageStrategy;pg.is(I)?I.handleMessage(T,$n):$n(T)}finally{Mn()}}let pi=T=>{try{if(ye.Message.isNotification(T)&&T.method===ic.type.method){let I=T.params.id,M=J(I),W=w.get(M);if(ye.Message.isRequest(W)){let fe=n?.connectionStrategy,Te=fe&&fe.cancelUndispatched?fe.cancelUndispatched(W,Je):void 0;if(Te&&(Te.error!==void 0||Te.result!==void 0)){w.delete(M),C.delete(I),Te.id=W.id,Br(Te,T.method,Date.now()),e.write(Te).catch(()=>i.error("Sending response for canceled message failed."));return}}let le=C.get(I);if(le!==void 0){le.cancel(),an(T);return}else N.add(I)}me(w,T)}finally{Mn()}};function hi(T){if(ut())return;function I(re,ne,pe){let Ee={jsonrpc:u,id:T.id};re instanceof ye.ResponseError?Ee.error=re.toJson():Ee.result=re===void 0?null:re,Br(Ee,ne,pe),e.write(Ee).catch(()=>i.error("Sending response failed."))}function M(re,ne,pe){let Ee={jsonrpc:u,id:T.id,error:re.toJson()};Br(Ee,ne,pe),e.write(Ee).catch(()=>i.error("Sending response failed."))}function W(re,ne,pe){re===void 0&&(re=null);let Ee={jsonrpc:u,id:T.id,result:re};Br(Ee,ne,pe),e.write(Ee).catch(()=>i.error("Sending response failed."))}Vr(T);let le=p.get(T.method),fe,Te;le&&(fe=le.type,Te=le.handler);let ae=Date.now();if(Te||d){let re=T.id??String(Date.now()),ne=dg.is(Y.receiver)?Y.receiver.createCancellationTokenSource(re):Y.receiver.createCancellationTokenSource(T);T.id!==null&&N.has(T.id)&&ne.cancel(),T.id!==null&&C.set(re,ne);try{let pe;if(Te)if(T.params===void 0){if(fe!==void 0&&fe.numberOfParams!==0){M(new ye.ResponseError(ye.ErrorCodes.InvalidParams,`Request ${T.method} defines ${fe.numberOfParams} params but received none.`),T.method,ae);return}pe=Te(ne.token)}else if(Array.isArray(T.params)){if(fe!==void 0&&fe.parameterStructures===ye.ParameterStructures.byName){M(new ye.ResponseError(ye.ErrorCodes.InvalidParams,`Request ${T.method} defines parameters by name but received parameters by position`),T.method,ae);return}pe=Te(...T.params,ne.token)}else{if(fe!==void 0&&fe.parameterStructures===ye.ParameterStructures.byPosition){M(new ye.ResponseError(ye.ErrorCodes.InvalidParams,`Request ${T.method} defines parameters by position but received parameters by name`),T.method,ae);return}pe=Te(T.params,ne.token)}else d&&(pe=d(T.method,T.params,ne.token));let Ee=pe;pe?Ee.then?Ee.then(Ze=>{C.delete(re),I(Ze,T.method,ae)},Ze=>{C.delete(re),Ze instanceof ye.ResponseError?M(Ze,T.method,ae):Ze&&Pt.string(Ze.message)?M(new ye.ResponseError(ye.ErrorCodes.InternalError,`Request ${T.method} failed with message: ${Ze.message}`),T.method,ae):M(new ye.ResponseError(ye.ErrorCodes.InternalError,`Request ${T.method} failed unexpectedly without providing any details.`),T.method,ae)}):(C.delete(re),I(pe,T.method,ae)):(C.delete(re),W(pe,T.method,ae))}catch(pe){C.delete(re),pe instanceof ye.ResponseError?I(pe,T.method,ae):pe&&Pt.string(pe.message)?M(new ye.ResponseError(ye.ErrorCodes.InternalError,`Request ${T.method} failed with message: ${pe.message}`),T.method,ae):M(new ye.ResponseError(ye.ErrorCodes.InternalError,`Request ${T.method} failed unexpectedly without providing any details.`),T.method,ae)}}else M(new ye.ResponseError(ye.ErrorCodes.MethodNotFound,`Unhandled method ${T.method}`),T.method,ae)}function mi(T){if(!ut())if(T.id===null)T.error?i.error(`Received response message without id: Error is: 
${JSON.stringify(T.error,void 0,4)}`):i.error("Received response message without id. No further error information provided.");else{let I=T.id,M=k.get(I);if(br(T,M),M!==void 0){k.delete(I);try{if(T.error){let W=T.error;M.reject(new ye.ResponseError(W.code,W.message,W.data))}else if(T.result!==void 0)M.resolve(T.result);else throw new Error("Should never happen.")}catch(W){W.message?i.error(`Response handler '${M.method}' failed with message: ${W.message}`):i.error(`Response handler '${M.method}' failed unexpectedly.`)}}}}function Vi(T){if(ut())return;let I,M;if(T.method===ic.type.method){let W=T.params.id;N.delete(W),an(T);return}else{let W=y.get(T.method);W&&(M=W.handler,I=W.type)}if(M||m)try{if(an(T),M)if(T.params===void 0)I!==void 0&&I.numberOfParams!==0&&I.parameterStructures!==ye.ParameterStructures.byName&&i.error(`Notification ${T.method} defines ${I.numberOfParams} params but received none.`),M();else if(Array.isArray(T.params)){let W=T.params;T.method===nc.type.method&&W.length===2&&MC.is(W[0])?M({token:W[0],value:W[1]}):(I!==void 0&&(I.parameterStructures===ye.ParameterStructures.byName&&i.error(`Notification ${T.method} defines parameters by name but received parameters by position`),I.numberOfParams!==T.params.length&&i.error(`Notification ${T.method} defines ${I.numberOfParams} params but received ${W.length} arguments`)),M(...W))}else I!==void 0&&I.parameterStructures===ye.ParameterStructures.byPosition&&i.error(`Notification ${T.method} defines parameters by position but received parameters by name`),M(T.params);else m&&m(T.method,T.params)}catch(W){W.message?i.error(`Notification handler '${T.method}' failed with message: ${W.message}`):i.error(`Notification handler '${T.method}' failed unexpectedly.`)}else Z.fire(T)}function Qe(T){if(!T){i.error("Received empty message.");return}i.error(`Received message which is neither a response nor a notification message:
${JSON.stringify(T,null,4)}`);let I=T;if(Pt.string(I.id)||Pt.number(I.id)){let M=I.id,W=k.get(M);W&&W.reject(new Error("The received response has neither a result nor an error property."))}}function Dt(T){if(T!=null)switch(E){case He.Verbose:return JSON.stringify(T,null,4);case He.Compact:return JSON.stringify(T);default:return}}function zi(T){if(!(E===He.Off||!U))if(L===Fn.Text){let I;(E===He.Verbose||E===He.Compact)&&T.params&&(I=`Params: ${Dt(T.params)}

`),U.log(`Sending request '${T.method} - (${T.id})'.`,I)}else Ot("send-request",T)}function Kr(T){if(!(E===He.Off||!U))if(L===Fn.Text){let I;(E===He.Verbose||E===He.Compact)&&(T.params?I=`Params: ${Dt(T.params)}

`:I=`No parameters provided.

`),U.log(`Sending notification '${T.method}'.`,I)}else Ot("send-notification",T)}function Br(T,I,M){if(!(E===He.Off||!U))if(L===Fn.Text){let W;(E===He.Verbose||E===He.Compact)&&(T.error&&T.error.data?W=`Error data: ${Dt(T.error.data)}

`:T.result?W=`Result: ${Dt(T.result)}

`:T.error===void 0&&(W=`No result returned.

`)),U.log(`Sending response '${I} - (${T.id})'. Processing request took ${Date.now()-M}ms`,W)}else Ot("send-response",T)}function Vr(T){if(!(E===He.Off||!U))if(L===Fn.Text){let I;(E===He.Verbose||E===He.Compact)&&T.params&&(I=`Params: ${Dt(T.params)}

`),U.log(`Received request '${T.method} - (${T.id})'.`,I)}else Ot("receive-request",T)}function an(T){if(!(E===He.Off||!U||T.method===ug.type.method))if(L===Fn.Text){let I;(E===He.Verbose||E===He.Compact)&&(T.params?I=`Params: ${Dt(T.params)}

`:I=`No parameters provided.

`),U.log(`Received notification '${T.method}'.`,I)}else Ot("receive-notification",T)}function br(T,I){if(!(E===He.Off||!U))if(L===Fn.Text){let M;if((E===He.Verbose||E===He.Compact)&&(T.error&&T.error.data?M=`Error data: ${Dt(T.error.data)}

`:T.result?M=`Result: ${Dt(T.result)}

`:T.error===void 0&&(M=`No result returned.

`)),I){let W=T.error?` Request failed: ${T.error.message} (${T.error.code}).`:"";U.log(`Received response '${I.method} - (${T.id})' in ${Date.now()-I.timerStart}ms.${W}`,M)}else U.log(`Received response ${T.id} without active response promise.`,M)}else Ot("receive-response",T)}function Ot(T,I){if(!U||E===He.Off)return;let M={isLSPMessage:!0,type:T,message:I,timestamp:Date.now()};U.log(M)}function zr(){if(Se())throw new is(nd.Closed,"Connection is closed.");if(ut())throw new is(nd.Disposed,"Connection is disposed.")}function gi(){if(ze())throw new is(nd.AlreadyListening,"Connection is already listening")}function lr(){if(!ze())throw new Error("Call listen() first.")}function qt(T){return T===void 0?null:T}function Tt(T){if(T!==null)return T}function Cr(T){return T!=null&&!Array.isArray(T)&&typeof T=="object"}function dr(T,I){switch(T){case ye.ParameterStructures.auto:return Cr(I)?Tt(I):[qt(I)];case ye.ParameterStructures.byName:if(!Cr(I))throw new Error("Received parameters by name but param is not an object literal.");return Tt(I);case ye.ParameterStructures.byPosition:return[qt(I)];default:throw new Error(`Unknown parameter structure ${T.toString()}`)}}function qr(T,I){let M,W=T.numberOfParams;switch(W){case 0:M=void 0;break;case 1:M=dr(T.parameterStructures,I[0]);break;default:M=[];for(let le=0;le<I.length&&le<W;le++)M.push(qt(I[le]));if(I.length<W)for(let le=I.length;le<W;le++)M.push(null);break}return M}let q={sendNotification:(T,...I)=>{zr();let M,W;if(Pt.string(T)){M=T;let fe=I[0],Te=0,ae=ye.ParameterStructures.auto;ye.ParameterStructures.is(fe)&&(Te=1,ae=fe);let re=I.length,ne=re-Te;switch(ne){case 0:W=void 0;break;case 1:W=dr(ae,I[Te]);break;default:if(ae===ye.ParameterStructures.byName)throw new Error(`Received ${ne} parameters for 'by Name' notification parameter structure.`);W=I.slice(Te,re).map(pe=>qt(pe));break}}else{let fe=I;M=T.method,W=qr(T,fe)}let le={jsonrpc:u,method:M,params:W};return Kr(le),e.write(le).catch(fe=>{throw i.error("Sending notification failed."),fe})},onNotification:(T,I)=>{zr();let M;return Pt.func(T)?m=T:I&&(Pt.string(T)?(M=T,y.set(T,{type:void 0,handler:I})):(M=T.method,y.set(T.method,{type:T,handler:I}))),{dispose:()=>{M!==void 0?y.delete(M):m=void 0}}},onProgress:(T,I,M)=>{if(S.has(I))throw new Error(`Progress handler for token ${I} already registered`);return S.set(I,M),{dispose:()=>{S.delete(I)}}},sendProgress:(T,I,M)=>q.sendNotification(nc.type,{token:I,value:M}),onUnhandledProgress:G.event,sendRequest:(T,...I)=>{zr(),lr();let M,W,le;if(Pt.string(T)){M=T;let re=I[0],ne=I[I.length-1],pe=0,Ee=ye.ParameterStructures.auto;ye.ParameterStructures.is(re)&&(pe=1,Ee=re);let Ze=I.length;og.CancellationToken.is(ne)&&(Ze=Ze-1,le=ne);let Rt=Ze-pe;switch(Rt){case 0:W=void 0;break;case 1:W=dr(Ee,I[pe]);break;default:if(Ee===ye.ParameterStructures.byName)throw new Error(`Received ${Rt} parameters for 'by Name' request parameter structure.`);W=I.slice(pe,Ze).map(R=>qt(R));break}}else{let re=I;M=T.method,W=qr(T,re);let ne=T.numberOfParams;le=og.CancellationToken.is(re[ne])?re[ne]:void 0}let fe=o++,Te;le&&(Te=le.onCancellationRequested(()=>{let re=Y.sender.sendCancellation(q,fe);return re===void 0?(i.log(`Received no promise from cancellation strategy when cancelling id ${fe}`),Promise.resolve()):re.catch(()=>{i.log(`Sending cancellation messages for id ${fe} failed`)})}));let ae={jsonrpc:u,id:fe,method:M,params:W};return zi(ae),typeof Y.sender.enableCancellation=="function"&&Y.sender.enableCancellation(ae),new Promise(async(re,ne)=>{let pe=Rt=>{re(Rt),Y.sender.cleanup(fe),Te?.dispose()},Ee=Rt=>{ne(Rt),Y.sender.cleanup(fe),Te?.dispose()},Ze={method:M,timerStart:Date.now(),resolve:pe,reject:Ee};try{await e.write(ae),k.set(fe,Ze)}catch(Rt){throw i.error("Sending request failed."),Ze.reject(new ye.ResponseError(ye.ErrorCodes.MessageWriteError,Rt.message?Rt.message:"Unknown reason")),Rt}})},onRequest:(T,I)=>{zr();let M=null;return sg.is(T)?(M=void 0,d=T):Pt.string(T)?(M=null,I!==void 0&&(M=T,p.set(T,{handler:I,type:void 0}))):I!==void 0&&(M=T.method,p.set(T.method,{type:T,handler:I})),{dispose:()=>{M!==null&&(M!==void 0?p.delete(M):d=void 0)}}},hasPendingResponse:()=>k.size>0,trace:async(T,I,M)=>{let W=!1,le=Fn.Text;M!==void 0&&(Pt.boolean(M)?W=M:(W=M.sendNotification||!1,le=M.traceFormat||Fn.Text)),E=T,L=le,E===He.Off?U=void 0:U=I,W&&!Se()&&!ut()&&await q.sendNotification($C.type,{value:He.toString(T)})},onError:te.event,onClose:we.event,onUnhandledNotification:Z.event,onDispose:j.event,end:()=>{e.end()},dispose:()=>{if(ut())return;z=jn.Disposed,j.fire(void 0);let T=new ye.ResponseError(ye.ErrorCodes.PendingResponseRejected,"Pending response rejected since connection got disposed");for(let I of k.values())I.reject(T);k=new Map,C=new Map,N=new Set,w=new LC.LinkedMap,Pt.func(e.dispose)&&e.dispose(),Pt.func(t.dispose)&&t.dispose()},listen:()=>{zr(),gi(),z=jn.Listening,t.listen(pi)},inspect:()=>{(0,xC.default)().console.log("inspect")}};return q.onNotification(ug.type,T=>{if(E===He.Off||!U)return;let I=E===He.Verbose||E===He.Compact;U.log(T.message,I?T.verbose:void 0)}),q.onNotification(nc.type,T=>{let I=S.get(T.token);I?I(T.value):G.fire(T)}),q}ie.createMessageConnection=eU});var id=h($=>{"use strict";Object.defineProperty($,"__esModule",{value:!0});$.ProgressType=$.ProgressToken=$.createMessageConnection=$.NullLogger=$.ConnectionOptions=$.ConnectionStrategy=$.AbstractMessageBuffer=$.WriteableStreamMessageWriter=$.AbstractMessageWriter=$.MessageWriter=$.ReadableStreamMessageReader=$.AbstractMessageReader=$.MessageReader=$.SharedArrayReceiverStrategy=$.SharedArraySenderStrategy=$.CancellationToken=$.CancellationTokenSource=$.Emitter=$.Event=$.Disposable=$.LRUCache=$.Touch=$.LinkedMap=$.ParameterStructures=$.NotificationType9=$.NotificationType8=$.NotificationType7=$.NotificationType6=$.NotificationType5=$.NotificationType4=$.NotificationType3=$.NotificationType2=$.NotificationType1=$.NotificationType0=$.NotificationType=$.ErrorCodes=$.ResponseError=$.RequestType9=$.RequestType8=$.RequestType7=$.RequestType6=$.RequestType5=$.RequestType4=$.RequestType3=$.RequestType2=$.RequestType1=$.RequestType0=$.RequestType=$.Message=$.RAL=void 0;$.MessageStrategy=$.CancellationStrategy=$.CancellationSenderStrategy=$.CancellationReceiverStrategy=$.ConnectionError=$.ConnectionErrors=$.LogTraceNotification=$.SetTraceNotification=$.TraceFormat=$.TraceValues=$.Trace=void 0;var nt=Lm();Object.defineProperty($,"Message",{enumerable:!0,get:function(){return nt.Message}});Object.defineProperty($,"RequestType",{enumerable:!0,get:function(){return nt.RequestType}});Object.defineProperty($,"RequestType0",{enumerable:!0,get:function(){return nt.RequestType0}});Object.defineProperty($,"RequestType1",{enumerable:!0,get:function(){return nt.RequestType1}});Object.defineProperty($,"RequestType2",{enumerable:!0,get:function(){return nt.RequestType2}});Object.defineProperty($,"RequestType3",{enumerable:!0,get:function(){return nt.RequestType3}});Object.defineProperty($,"RequestType4",{enumerable:!0,get:function(){return nt.RequestType4}});Object.defineProperty($,"RequestType5",{enumerable:!0,get:function(){return nt.RequestType5}});Object.defineProperty($,"RequestType6",{enumerable:!0,get:function(){return nt.RequestType6}});Object.defineProperty($,"RequestType7",{enumerable:!0,get:function(){return nt.RequestType7}});Object.defineProperty($,"RequestType8",{enumerable:!0,get:function(){return nt.RequestType8}});Object.defineProperty($,"RequestType9",{enumerable:!0,get:function(){return nt.RequestType9}});Object.defineProperty($,"ResponseError",{enumerable:!0,get:function(){return nt.ResponseError}});Object.defineProperty($,"ErrorCodes",{enumerable:!0,get:function(){return nt.ErrorCodes}});Object.defineProperty($,"NotificationType",{enumerable:!0,get:function(){return nt.NotificationType}});Object.defineProperty($,"NotificationType0",{enumerable:!0,get:function(){return nt.NotificationType0}});Object.defineProperty($,"NotificationType1",{enumerable:!0,get:function(){return nt.NotificationType1}});Object.defineProperty($,"NotificationType2",{enumerable:!0,get:function(){return nt.NotificationType2}});Object.defineProperty($,"NotificationType3",{enumerable:!0,get:function(){return nt.NotificationType3}});Object.defineProperty($,"NotificationType4",{enumerable:!0,get:function(){return nt.NotificationType4}});Object.defineProperty($,"NotificationType5",{enumerable:!0,get:function(){return nt.NotificationType5}});Object.defineProperty($,"NotificationType6",{enumerable:!0,get:function(){return nt.NotificationType6}});Object.defineProperty($,"NotificationType7",{enumerable:!0,get:function(){return nt.NotificationType7}});Object.defineProperty($,"NotificationType8",{enumerable:!0,get:function(){return nt.NotificationType8}});Object.defineProperty($,"NotificationType9",{enumerable:!0,get:function(){return nt.NotificationType9}});Object.defineProperty($,"ParameterStructures",{enumerable:!0,get:function(){return nt.ParameterStructures}});var hg=$m();Object.defineProperty($,"LinkedMap",{enumerable:!0,get:function(){return hg.LinkedMap}});Object.defineProperty($,"LRUCache",{enumerable:!0,get:function(){return hg.LRUCache}});Object.defineProperty($,"Touch",{enumerable:!0,get:function(){return hg.Touch}});var tU=EC();Object.defineProperty($,"Disposable",{enumerable:!0,get:function(){return tU.Disposable}});var GC=ts();Object.defineProperty($,"Event",{enumerable:!0,get:function(){return GC.Event}});Object.defineProperty($,"Emitter",{enumerable:!0,get:function(){return GC.Emitter}});var WC=Ql();Object.defineProperty($,"CancellationTokenSource",{enumerable:!0,get:function(){return WC.CancellationTokenSource}});Object.defineProperty($,"CancellationToken",{enumerable:!0,get:function(){return WC.CancellationToken}});var HC=kC();Object.defineProperty($,"SharedArraySenderStrategy",{enumerable:!0,get:function(){return HC.SharedArraySenderStrategy}});Object.defineProperty($,"SharedArrayReceiverStrategy",{enumerable:!0,get:function(){return HC.SharedArrayReceiverStrategy}});var mg=NC();Object.defineProperty($,"MessageReader",{enumerable:!0,get:function(){return mg.MessageReader}});Object.defineProperty($,"AbstractMessageReader",{enumerable:!0,get:function(){return mg.AbstractMessageReader}});Object.defineProperty($,"ReadableStreamMessageReader",{enumerable:!0,get:function(){return mg.ReadableStreamMessageReader}});var gg=qC();Object.defineProperty($,"MessageWriter",{enumerable:!0,get:function(){return gg.MessageWriter}});Object.defineProperty($,"AbstractMessageWriter",{enumerable:!0,get:function(){return gg.AbstractMessageWriter}});Object.defineProperty($,"WriteableStreamMessageWriter",{enumerable:!0,get:function(){return gg.WriteableStreamMessageWriter}});var rU=IC();Object.defineProperty($,"AbstractMessageBuffer",{enumerable:!0,get:function(){return rU.AbstractMessageBuffer}});var fr=UC();Object.defineProperty($,"ConnectionStrategy",{enumerable:!0,get:function(){return fr.ConnectionStrategy}});Object.defineProperty($,"ConnectionOptions",{enumerable:!0,get:function(){return fr.ConnectionOptions}});Object.defineProperty($,"NullLogger",{enumerable:!0,get:function(){return fr.NullLogger}});Object.defineProperty($,"createMessageConnection",{enumerable:!0,get:function(){return fr.createMessageConnection}});Object.defineProperty($,"ProgressToken",{enumerable:!0,get:function(){return fr.ProgressToken}});Object.defineProperty($,"ProgressType",{enumerable:!0,get:function(){return fr.ProgressType}});Object.defineProperty($,"Trace",{enumerable:!0,get:function(){return fr.Trace}});Object.defineProperty($,"TraceValues",{enumerable:!0,get:function(){return fr.TraceValues}});Object.defineProperty($,"TraceFormat",{enumerable:!0,get:function(){return fr.TraceFormat}});Object.defineProperty($,"SetTraceNotification",{enumerable:!0,get:function(){return fr.SetTraceNotification}});Object.defineProperty($,"LogTraceNotification",{enumerable:!0,get:function(){return fr.LogTraceNotification}});Object.defineProperty($,"ConnectionErrors",{enumerable:!0,get:function(){return fr.ConnectionErrors}});Object.defineProperty($,"ConnectionError",{enumerable:!0,get:function(){return fr.ConnectionError}});Object.defineProperty($,"CancellationReceiverStrategy",{enumerable:!0,get:function(){return fr.CancellationReceiverStrategy}});Object.defineProperty($,"CancellationSenderStrategy",{enumerable:!0,get:function(){return fr.CancellationSenderStrategy}});Object.defineProperty($,"CancellationStrategy",{enumerable:!0,get:function(){return fr.CancellationStrategy}});Object.defineProperty($,"MessageStrategy",{enumerable:!0,get:function(){return fr.MessageStrategy}});var nU=Do();$.RAL=nU.default});var BC=h(Tg=>{"use strict";Object.defineProperty(Tg,"__esModule",{value:!0});var yi=id(),od=class t extends yi.AbstractMessageBuffer{constructor(e="utf-8"){super(e),this.asciiDecoder=new TextDecoder("ascii")}emptyBuffer(){return t.emptyBuffer}fromString(e,r){return new TextEncoder().encode(e)}toString(e,r){return r==="ascii"?this.asciiDecoder.decode(e):new TextDecoder(r).decode(e)}asNative(e,r){return r===void 0?e:e.slice(0,r)}allocNative(e){return new Uint8Array(e)}};od.emptyBuffer=new Uint8Array(0);var yg=class{constructor(e){this.socket=e,this._onData=new yi.Emitter,this._messageListener=r=>{r.data.arrayBuffer().then(i=>{this._onData.fire(new Uint8Array(i))},()=>{(0,yi.RAL)().console.error("Converting blob to array buffer failed.")})},this.socket.addEventListener("message",this._messageListener)}onClose(e){return this.socket.addEventListener("close",e),yi.Disposable.create(()=>this.socket.removeEventListener("close",e))}onError(e){return this.socket.addEventListener("error",e),yi.Disposable.create(()=>this.socket.removeEventListener("error",e))}onEnd(e){return this.socket.addEventListener("end",e),yi.Disposable.create(()=>this.socket.removeEventListener("end",e))}onData(e){return this._onData.event(e)}},vg=class{constructor(e){this.socket=e}onClose(e){return this.socket.addEventListener("close",e),yi.Disposable.create(()=>this.socket.removeEventListener("close",e))}onError(e){return this.socket.addEventListener("error",e),yi.Disposable.create(()=>this.socket.removeEventListener("error",e))}onEnd(e){return this.socket.addEventListener("end",e),yi.Disposable.create(()=>this.socket.removeEventListener("end",e))}write(e,r){if(typeof e=="string"){if(r!==void 0&&r!=="utf-8")throw new Error(`In a Browser environments only utf-8 text encoding is supported. But got encoding: ${r}`);this.socket.send(e)}else this.socket.send(e);return Promise.resolve()}end(){this.socket.close()}},iU=new TextEncoder,KC=Object.freeze({messageBuffer:Object.freeze({create:t=>new od(t)}),applicationJson:Object.freeze({encoder:Object.freeze({name:"application/json",encode:(t,e)=>{if(e.charset!=="utf-8")throw new Error(`In a Browser environments only utf-8 text encoding is supported. But got encoding: ${e.charset}`);return Promise.resolve(iU.encode(JSON.stringify(t,void 0,0)))}}),decoder:Object.freeze({name:"application/json",decode:(t,e)=>{if(!(t instanceof Uint8Array))throw new Error("In a Browser environments only Uint8Arrays are supported.");return Promise.resolve(JSON.parse(new TextDecoder(e.charset).decode(t)))}})}),stream:Object.freeze({asReadableStream:t=>new yg(t),asWritableStream:t=>new vg(t)}),console,timer:Object.freeze({setTimeout(t,e,...r){let n=setTimeout(t,e,...r);return{dispose:()=>clearTimeout(n)}},setImmediate(t,...e){let r=setTimeout(t,0,...e);return{dispose:()=>clearTimeout(r)}},setInterval(t,e,...r){let n=setInterval(t,e,...r);return{dispose:()=>clearInterval(n)}}})});function _g(){return KC}(function(t){function e(){yi.RAL.install(KC)}t.install=e})(_g||(_g={}));Tg.default=_g});var va=h(un=>{"use strict";var oU=un&&un.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var i=Object.getOwnPropertyDescriptor(e,r);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,i)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),aU=un&&un.__exportStar||function(t,e){for(var r in t)r!=="default"&&!Object.prototype.hasOwnProperty.call(e,r)&&oU(e,t,r)};Object.defineProperty(un,"__esModule",{value:!0});un.createMessageConnection=un.BrowserMessageWriter=un.BrowserMessageReader=void 0;var sU=BC();sU.default.install();var os=id();aU(id(),un);var Rg=class extends os.AbstractMessageReader{constructor(e){super(),this._onData=new os.Emitter,this._messageListener=r=>{this._onData.fire(r.data)},e.addEventListener("error",r=>this.fireError(r)),e.onmessage=this._messageListener}listen(e){return this._onData.event(e)}};un.BrowserMessageReader=Rg;var bg=class extends os.AbstractMessageWriter{constructor(e){super(),this.port=e,this.errorCount=0,e.addEventListener("error",r=>this.fireError(r))}write(e){try{return this.port.postMessage(e),Promise.resolve()}catch(r){return this.handleError(r,e),Promise.reject(r)}}handleError(e,r){this.errorCount++,this.fireError(e,r,this.errorCount)}end(){}};un.BrowserMessageWriter=bg;function uU(t,e,r,n){return r===void 0&&(r=os.NullLogger),os.ConnectionStrategy.is(n)&&(n={connectionStrategy:n}),(0,os.createMessageConnection)(t,e,r,n)}un.createMessageConnection=uU});var Cg=h((Age,VC)=>{"use strict";VC.exports=va()});var sd=h((zC,ad)=>{(function(t){if(typeof ad=="object"&&typeof ad.exports=="object"){var e=t(zl,zC);e!==void 0&&(ad.exports=e)}else typeof define=="function"&&define.amd&&define(["require","exports"],t)})(function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.TextDocument=e.EOL=e.WorkspaceFolder=e.InlayHint=e.InlayHintLabelPart=e.InlayHintKind=e.InlineValueContext=e.InlineValueEvaluatableExpression=e.InlineValueVariableLookup=e.InlineValueText=e.SemanticTokens=e.SemanticTokenModifiers=e.SemanticTokenTypes=e.SelectionRange=e.DocumentLink=e.FormattingOptions=e.CodeLens=e.CodeAction=e.CodeActionContext=e.CodeActionTriggerKind=e.CodeActionKind=e.DocumentSymbol=e.WorkspaceSymbol=e.SymbolInformation=e.SymbolTag=e.SymbolKind=e.DocumentHighlight=e.DocumentHighlightKind=e.SignatureInformation=e.ParameterInformation=e.Hover=e.MarkedString=e.CompletionList=e.CompletionItem=e.CompletionItemLabelDetails=e.InsertTextMode=e.InsertReplaceEdit=e.CompletionItemTag=e.InsertTextFormat=e.CompletionItemKind=e.MarkupContent=e.MarkupKind=e.TextDocumentItem=e.OptionalVersionedTextDocumentIdentifier=e.VersionedTextDocumentIdentifier=e.TextDocumentIdentifier=e.WorkspaceChange=e.WorkspaceEdit=e.DeleteFile=e.RenameFile=e.CreateFile=e.TextDocumentEdit=e.AnnotatedTextEdit=e.ChangeAnnotationIdentifier=e.ChangeAnnotation=e.TextEdit=e.Command=e.Diagnostic=e.CodeDescription=e.DiagnosticTag=e.DiagnosticSeverity=e.DiagnosticRelatedInformation=e.FoldingRange=e.FoldingRangeKind=e.ColorPresentation=e.ColorInformation=e.Color=e.LocationLink=e.Location=e.Range=e.Position=e.uinteger=e.integer=e.URI=e.DocumentUri=void 0;var r;(function(l){function g(v){return typeof v=="string"}l.is=g})(r=e.DocumentUri||(e.DocumentUri={}));var n;(function(l){function g(v){return typeof v=="string"}l.is=g})(n=e.URI||(e.URI={}));var i;(function(l){l.MIN_VALUE=-2147483648,l.MAX_VALUE=2147483647;function g(v){return typeof v=="number"&&l.MIN_VALUE<=v&&v<=l.MAX_VALUE}l.is=g})(i=e.integer||(e.integer={}));var o;(function(l){l.MIN_VALUE=0,l.MAX_VALUE=2147483647;function g(v){return typeof v=="number"&&l.MIN_VALUE<=v&&v<=l.MAX_VALUE}l.is=g})(o=e.uinteger||(e.uinteger={}));var a;(function(l){function g(f,c){return f===Number.MAX_VALUE&&(f=o.MAX_VALUE),c===Number.MAX_VALUE&&(c=o.MAX_VALUE),{line:f,character:c}}l.create=g;function v(f){var c=f;return R.objectLiteral(c)&&R.uinteger(c.line)&&R.uinteger(c.character)}l.is=v})(a=e.Position||(e.Position={}));var s;(function(l){function g(f,c,b,O){if(R.uinteger(f)&&R.uinteger(c)&&R.uinteger(b)&&R.uinteger(O))return{start:a.create(f,c),end:a.create(b,O)};if(a.is(f)&&a.is(c))return{start:f,end:c};throw new Error("Range#create called with invalid arguments[".concat(f,", ").concat(c,", ").concat(b,", ").concat(O,"]"))}l.create=g;function v(f){var c=f;return R.objectLiteral(c)&&a.is(c.start)&&a.is(c.end)}l.is=v})(s=e.Range||(e.Range={}));var u;(function(l){function g(f,c){return{uri:f,range:c}}l.create=g;function v(f){var c=f;return R.objectLiteral(c)&&s.is(c.range)&&(R.string(c.uri)||R.undefined(c.uri))}l.is=v})(u=e.Location||(e.Location={}));var d;(function(l){function g(f,c,b,O){return{targetUri:f,targetRange:c,targetSelectionRange:b,originSelectionRange:O}}l.create=g;function v(f){var c=f;return R.objectLiteral(c)&&s.is(c.targetRange)&&R.string(c.targetUri)&&s.is(c.targetSelectionRange)&&(s.is(c.originSelectionRange)||R.undefined(c.originSelectionRange))}l.is=v})(d=e.LocationLink||(e.LocationLink={}));var p;(function(l){function g(f,c,b,O){return{red:f,green:c,blue:b,alpha:O}}l.create=g;function v(f){var c=f;return R.objectLiteral(c)&&R.numberRange(c.red,0,1)&&R.numberRange(c.green,0,1)&&R.numberRange(c.blue,0,1)&&R.numberRange(c.alpha,0,1)}l.is=v})(p=e.Color||(e.Color={}));var m;(function(l){function g(f,c){return{range:f,color:c}}l.create=g;function v(f){var c=f;return R.objectLiteral(c)&&s.is(c.range)&&p.is(c.color)}l.is=v})(m=e.ColorInformation||(e.ColorInformation={}));var y;(function(l){function g(f,c,b){return{label:f,textEdit:c,additionalTextEdits:b}}l.create=g;function v(f){var c=f;return R.objectLiteral(c)&&R.string(c.label)&&(R.undefined(c.textEdit)||U.is(c))&&(R.undefined(c.additionalTextEdits)||R.typedArray(c.additionalTextEdits,U.is))}l.is=v})(y=e.ColorPresentation||(e.ColorPresentation={}));var S;(function(l){l.Comment="comment",l.Imports="imports",l.Region="region"})(S=e.FoldingRangeKind||(e.FoldingRangeKind={}));var _;(function(l){function g(f,c,b,O,H,Re){var he={startLine:f,endLine:c};return R.defined(b)&&(he.startCharacter=b),R.defined(O)&&(he.endCharacter=O),R.defined(H)&&(he.kind=H),R.defined(Re)&&(he.collapsedText=Re),he}l.create=g;function v(f){var c=f;return R.objectLiteral(c)&&R.uinteger(c.startLine)&&R.uinteger(c.startLine)&&(R.undefined(c.startCharacter)||R.uinteger(c.startCharacter))&&(R.undefined(c.endCharacter)||R.uinteger(c.endCharacter))&&(R.undefined(c.kind)||R.string(c.kind))}l.is=v})(_=e.FoldingRange||(e.FoldingRange={}));var w;(function(l){function g(f,c){return{location:f,message:c}}l.create=g;function v(f){var c=f;return R.defined(c)&&u.is(c.location)&&R.string(c.message)}l.is=v})(w=e.DiagnosticRelatedInformation||(e.DiagnosticRelatedInformation={}));var k;(function(l){l.Error=1,l.Warning=2,l.Information=3,l.Hint=4})(k=e.DiagnosticSeverity||(e.DiagnosticSeverity={}));var N;(function(l){l.Unnecessary=1,l.Deprecated=2})(N=e.DiagnosticTag||(e.DiagnosticTag={}));var C;(function(l){function g(v){var f=v;return R.objectLiteral(f)&&R.string(f.href)}l.is=g})(C=e.CodeDescription||(e.CodeDescription={}));var E;(function(l){function g(f,c,b,O,H,Re){var he={range:f,message:c};return R.defined(b)&&(he.severity=b),R.defined(O)&&(he.code=O),R.defined(H)&&(he.source=H),R.defined(Re)&&(he.relatedInformation=Re),he}l.create=g;function v(f){var c,b=f;return R.defined(b)&&s.is(b.range)&&R.string(b.message)&&(R.number(b.severity)||R.undefined(b.severity))&&(R.integer(b.code)||R.string(b.code)||R.undefined(b.code))&&(R.undefined(b.codeDescription)||R.string((c=b.codeDescription)===null||c===void 0?void 0:c.href))&&(R.string(b.source)||R.undefined(b.source))&&(R.undefined(b.relatedInformation)||R.typedArray(b.relatedInformation,w.is))}l.is=v})(E=e.Diagnostic||(e.Diagnostic={}));var L;(function(l){function g(f,c){for(var b=[],O=2;O<arguments.length;O++)b[O-2]=arguments[O];var H={title:f,command:c};return R.defined(b)&&b.length>0&&(H.arguments=b),H}l.create=g;function v(f){var c=f;return R.defined(c)&&R.string(c.title)&&R.string(c.command)}l.is=v})(L=e.Command||(e.Command={}));var U;(function(l){function g(b,O){return{range:b,newText:O}}l.replace=g;function v(b,O){return{range:{start:b,end:b},newText:O}}l.insert=v;function f(b){return{range:b,newText:""}}l.del=f;function c(b){var O=b;return R.objectLiteral(O)&&R.string(O.newText)&&s.is(O.range)}l.is=c})(U=e.TextEdit||(e.TextEdit={}));var z;(function(l){function g(f,c,b){var O={label:f};return c!==void 0&&(O.needsConfirmation=c),b!==void 0&&(O.description=b),O}l.create=g;function v(f){var c=f;return R.objectLiteral(c)&&R.string(c.label)&&(R.boolean(c.needsConfirmation)||c.needsConfirmation===void 0)&&(R.string(c.description)||c.description===void 0)}l.is=v})(z=e.ChangeAnnotation||(e.ChangeAnnotation={}));var te;(function(l){function g(v){var f=v;return R.string(f)}l.is=g})(te=e.ChangeAnnotationIdentifier||(e.ChangeAnnotationIdentifier={}));var we;(function(l){function g(b,O,H){return{range:b,newText:O,annotationId:H}}l.replace=g;function v(b,O,H){return{range:{start:b,end:b},newText:O,annotationId:H}}l.insert=v;function f(b,O){return{range:b,newText:"",annotationId:O}}l.del=f;function c(b){var O=b;return U.is(O)&&(z.is(O.annotationId)||te.is(O.annotationId))}l.is=c})(we=e.AnnotatedTextEdit||(e.AnnotatedTextEdit={}));var Z;(function(l){function g(f,c){return{textDocument:f,edits:c}}l.create=g;function v(f){var c=f;return R.defined(c)&&Se.is(c.textDocument)&&Array.isArray(c.edits)}l.is=v})(Z=e.TextDocumentEdit||(e.TextDocumentEdit={}));var G;(function(l){function g(f,c,b){var O={kind:"create",uri:f};return c!==void 0&&(c.overwrite!==void 0||c.ignoreIfExists!==void 0)&&(O.options=c),b!==void 0&&(O.annotationId=b),O}l.create=g;function v(f){var c=f;return c&&c.kind==="create"&&R.string(c.uri)&&(c.options===void 0||(c.options.overwrite===void 0||R.boolean(c.options.overwrite))&&(c.options.ignoreIfExists===void 0||R.boolean(c.options.ignoreIfExists)))&&(c.annotationId===void 0||te.is(c.annotationId))}l.is=v})(G=e.CreateFile||(e.CreateFile={}));var j;(function(l){function g(f,c,b,O){var H={kind:"rename",oldUri:f,newUri:c};return b!==void 0&&(b.overwrite!==void 0||b.ignoreIfExists!==void 0)&&(H.options=b),O!==void 0&&(H.annotationId=O),H}l.create=g;function v(f){var c=f;return c&&c.kind==="rename"&&R.string(c.oldUri)&&R.string(c.newUri)&&(c.options===void 0||(c.options.overwrite===void 0||R.boolean(c.options.overwrite))&&(c.options.ignoreIfExists===void 0||R.boolean(c.options.ignoreIfExists)))&&(c.annotationId===void 0||te.is(c.annotationId))}l.is=v})(j=e.RenameFile||(e.RenameFile={}));var Y;(function(l){function g(f,c,b){var O={kind:"delete",uri:f};return c!==void 0&&(c.recursive!==void 0||c.ignoreIfNotExists!==void 0)&&(O.options=c),b!==void 0&&(O.annotationId=b),O}l.create=g;function v(f){var c=f;return c&&c.kind==="delete"&&R.string(c.uri)&&(c.options===void 0||(c.options.recursive===void 0||R.boolean(c.options.recursive))&&(c.options.ignoreIfNotExists===void 0||R.boolean(c.options.ignoreIfNotExists)))&&(c.annotationId===void 0||te.is(c.annotationId))}l.is=v})(Y=e.DeleteFile||(e.DeleteFile={}));var J;(function(l){function g(v){var f=v;return f&&(f.changes!==void 0||f.documentChanges!==void 0)&&(f.documentChanges===void 0||f.documentChanges.every(function(c){return R.string(c.kind)?G.is(c)||j.is(c)||Y.is(c):Z.is(c)}))}l.is=g})(J=e.WorkspaceEdit||(e.WorkspaceEdit={}));var Ce=function(){function l(g,v){this.edits=g,this.changeAnnotations=v}return l.prototype.insert=function(g,v,f){var c,b;if(f===void 0?c=U.insert(g,v):te.is(f)?(b=f,c=we.insert(g,v,f)):(this.assertChangeAnnotations(this.changeAnnotations),b=this.changeAnnotations.manage(f),c=we.insert(g,v,b)),this.edits.push(c),b!==void 0)return b},l.prototype.replace=function(g,v,f){var c,b;if(f===void 0?c=U.replace(g,v):te.is(f)?(b=f,c=we.replace(g,v,f)):(this.assertChangeAnnotations(this.changeAnnotations),b=this.changeAnnotations.manage(f),c=we.replace(g,v,b)),this.edits.push(c),b!==void 0)return b},l.prototype.delete=function(g,v){var f,c;if(v===void 0?f=U.del(g):te.is(v)?(c=v,f=we.del(g,v)):(this.assertChangeAnnotations(this.changeAnnotations),c=this.changeAnnotations.manage(v),f=we.del(g,c)),this.edits.push(f),c!==void 0)return c},l.prototype.add=function(g){this.edits.push(g)},l.prototype.all=function(){return this.edits},l.prototype.clear=function(){this.edits.splice(0,this.edits.length)},l.prototype.assertChangeAnnotations=function(g){if(g===void 0)throw new Error("Text edit change is not configured to manage change annotations.")},l}(),_e=function(){function l(g){this._annotations=g===void 0?Object.create(null):g,this._counter=0,this._size=0}return l.prototype.all=function(){return this._annotations},Object.defineProperty(l.prototype,"size",{get:function(){return this._size},enumerable:!1,configurable:!0}),l.prototype.manage=function(g,v){var f;if(te.is(g)?f=g:(f=this.nextId(),v=g),this._annotations[f]!==void 0)throw new Error("Id ".concat(f," is already in use."));if(v===void 0)throw new Error("No annotation provided for id ".concat(f));return this._annotations[f]=v,this._size++,f},l.prototype.nextId=function(){return this._counter++,this._counter.toString()},l}(),me=function(){function l(g){var v=this;this._textEditChanges=Object.create(null),g!==void 0?(this._workspaceEdit=g,g.documentChanges?(this._changeAnnotations=new _e(g.changeAnnotations),g.changeAnnotations=this._changeAnnotations.all(),g.documentChanges.forEach(function(f){if(Z.is(f)){var c=new Ce(f.edits,v._changeAnnotations);v._textEditChanges[f.textDocument.uri]=c}})):g.changes&&Object.keys(g.changes).forEach(function(f){var c=new Ce(g.changes[f]);v._textEditChanges[f]=c})):this._workspaceEdit={}}return Object.defineProperty(l.prototype,"edit",{get:function(){return this.initDocumentChanges(),this._changeAnnotations!==void 0&&(this._changeAnnotations.size===0?this._workspaceEdit.changeAnnotations=void 0:this._workspaceEdit.changeAnnotations=this._changeAnnotations.all()),this._workspaceEdit},enumerable:!1,configurable:!0}),l.prototype.getTextEditChange=function(g){if(Se.is(g)){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var v={uri:g.uri,version:g.version},f=this._textEditChanges[v.uri];if(!f){var c=[],b={textDocument:v,edits:c};this._workspaceEdit.documentChanges.push(b),f=new Ce(c,this._changeAnnotations),this._textEditChanges[v.uri]=f}return f}else{if(this.initChanges(),this._workspaceEdit.changes===void 0)throw new Error("Workspace edit is not configured for normal text edit changes.");var f=this._textEditChanges[g];if(!f){var c=[];this._workspaceEdit.changes[g]=c,f=new Ce(c),this._textEditChanges[g]=f}return f}},l.prototype.initDocumentChanges=function(){this._workspaceEdit.documentChanges===void 0&&this._workspaceEdit.changes===void 0&&(this._changeAnnotations=new _e,this._workspaceEdit.documentChanges=[],this._workspaceEdit.changeAnnotations=this._changeAnnotations.all())},l.prototype.initChanges=function(){this._workspaceEdit.documentChanges===void 0&&this._workspaceEdit.changes===void 0&&(this._workspaceEdit.changes=Object.create(null))},l.prototype.createFile=function(g,v,f){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var c;z.is(v)||te.is(v)?c=v:f=v;var b,O;if(c===void 0?b=G.create(g,f):(O=te.is(c)?c:this._changeAnnotations.manage(c),b=G.create(g,f,O)),this._workspaceEdit.documentChanges.push(b),O!==void 0)return O},l.prototype.renameFile=function(g,v,f,c){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var b;z.is(f)||te.is(f)?b=f:c=f;var O,H;if(b===void 0?O=j.create(g,v,c):(H=te.is(b)?b:this._changeAnnotations.manage(b),O=j.create(g,v,c,H)),this._workspaceEdit.documentChanges.push(O),H!==void 0)return H},l.prototype.deleteFile=function(g,v,f){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var c;z.is(v)||te.is(v)?c=v:f=v;var b,O;if(c===void 0?b=Y.create(g,f):(O=te.is(c)?c:this._changeAnnotations.manage(c),b=Y.create(g,f,O)),this._workspaceEdit.documentChanges.push(b),O!==void 0)return O},l}();e.WorkspaceChange=me;var Je;(function(l){function g(f){return{uri:f}}l.create=g;function v(f){var c=f;return R.defined(c)&&R.string(c.uri)}l.is=v})(Je=e.TextDocumentIdentifier||(e.TextDocumentIdentifier={}));var ze;(function(l){function g(f,c){return{uri:f,version:c}}l.create=g;function v(f){var c=f;return R.defined(c)&&R.string(c.uri)&&R.integer(c.version)}l.is=v})(ze=e.VersionedTextDocumentIdentifier||(e.VersionedTextDocumentIdentifier={}));var Se;(function(l){function g(f,c){return{uri:f,version:c}}l.create=g;function v(f){var c=f;return R.defined(c)&&R.string(c.uri)&&(c.version===null||R.integer(c.version))}l.is=v})(Se=e.OptionalVersionedTextDocumentIdentifier||(e.OptionalVersionedTextDocumentIdentifier={}));var ut;(function(l){function g(f,c,b,O){return{uri:f,languageId:c,version:b,text:O}}l.create=g;function v(f){var c=f;return R.defined(c)&&R.string(c.uri)&&R.string(c.languageId)&&R.integer(c.version)&&R.string(c.text)}l.is=v})(ut=e.TextDocumentItem||(e.TextDocumentItem={}));var cr;(function(l){l.PlainText="plaintext",l.Markdown="markdown";function g(v){var f=v;return f===l.PlainText||f===l.Markdown}l.is=g})(cr=e.MarkupKind||(e.MarkupKind={}));var Rr;(function(l){function g(v){var f=v;return R.objectLiteral(v)&&cr.is(f.kind)&&R.string(f.value)}l.is=g})(Rr=e.MarkupContent||(e.MarkupContent={}));var fi;(function(l){l.Text=1,l.Method=2,l.Function=3,l.Constructor=4,l.Field=5,l.Variable=6,l.Class=7,l.Interface=8,l.Module=9,l.Property=10,l.Unit=11,l.Value=12,l.Enum=13,l.Keyword=14,l.Snippet=15,l.Color=16,l.File=17,l.Reference=18,l.Folder=19,l.EnumMember=20,l.Constant=21,l.Struct=22,l.Event=23,l.Operator=24,l.TypeParameter=25})(fi=e.CompletionItemKind||(e.CompletionItemKind={}));var Mn;(function(l){l.PlainText=1,l.Snippet=2})(Mn=e.InsertTextFormat||(e.InsertTextFormat={}));var $n;(function(l){l.Deprecated=1})($n=e.CompletionItemTag||(e.CompletionItemTag={}));var Bt;(function(l){function g(f,c,b){return{newText:f,insert:c,replace:b}}l.create=g;function v(f){var c=f;return c&&R.string(c.newText)&&s.is(c.insert)&&s.is(c.replace)}l.is=v})(Bt=e.InsertReplaceEdit||(e.InsertReplaceEdit={}));var pi;(function(l){l.asIs=1,l.adjustIndentation=2})(pi=e.InsertTextMode||(e.InsertTextMode={}));var hi;(function(l){function g(v){var f=v;return f&&(R.string(f.detail)||f.detail===void 0)&&(R.string(f.description)||f.description===void 0)}l.is=g})(hi=e.CompletionItemLabelDetails||(e.CompletionItemLabelDetails={}));var mi;(function(l){function g(v){return{label:v}}l.create=g})(mi=e.CompletionItem||(e.CompletionItem={}));var Vi;(function(l){function g(v,f){return{items:v||[],isIncomplete:!!f}}l.create=g})(Vi=e.CompletionList||(e.CompletionList={}));var Qe;(function(l){function g(f){return f.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}l.fromPlainText=g;function v(f){var c=f;return R.string(c)||R.objectLiteral(c)&&R.string(c.language)&&R.string(c.value)}l.is=v})(Qe=e.MarkedString||(e.MarkedString={}));var Dt;(function(l){function g(v){var f=v;return!!f&&R.objectLiteral(f)&&(Rr.is(f.contents)||Qe.is(f.contents)||R.typedArray(f.contents,Qe.is))&&(v.range===void 0||s.is(v.range))}l.is=g})(Dt=e.Hover||(e.Hover={}));var zi;(function(l){function g(v,f){return f?{label:v,documentation:f}:{label:v}}l.create=g})(zi=e.ParameterInformation||(e.ParameterInformation={}));var Kr;(function(l){function g(v,f){for(var c=[],b=2;b<arguments.length;b++)c[b-2]=arguments[b];var O={label:v};return R.defined(f)&&(O.documentation=f),R.defined(c)?O.parameters=c:O.parameters=[],O}l.create=g})(Kr=e.SignatureInformation||(e.SignatureInformation={}));var Br;(function(l){l.Text=1,l.Read=2,l.Write=3})(Br=e.DocumentHighlightKind||(e.DocumentHighlightKind={}));var Vr;(function(l){function g(v,f){var c={range:v};return R.number(f)&&(c.kind=f),c}l.create=g})(Vr=e.DocumentHighlight||(e.DocumentHighlight={}));var an;(function(l){l.File=1,l.Module=2,l.Namespace=3,l.Package=4,l.Class=5,l.Method=6,l.Property=7,l.Field=8,l.Constructor=9,l.Enum=10,l.Interface=11,l.Function=12,l.Variable=13,l.Constant=14,l.String=15,l.Number=16,l.Boolean=17,l.Array=18,l.Object=19,l.Key=20,l.Null=21,l.EnumMember=22,l.Struct=23,l.Event=24,l.Operator=25,l.TypeParameter=26})(an=e.SymbolKind||(e.SymbolKind={}));var br;(function(l){l.Deprecated=1})(br=e.SymbolTag||(e.SymbolTag={}));var Ot;(function(l){function g(v,f,c,b,O){var H={name:v,kind:f,location:{uri:b,range:c}};return O&&(H.containerName=O),H}l.create=g})(Ot=e.SymbolInformation||(e.SymbolInformation={}));var zr;(function(l){function g(v,f,c,b){return b!==void 0?{name:v,kind:f,location:{uri:c,range:b}}:{name:v,kind:f,location:{uri:c}}}l.create=g})(zr=e.WorkspaceSymbol||(e.WorkspaceSymbol={}));var gi;(function(l){function g(f,c,b,O,H,Re){var he={name:f,detail:c,kind:b,range:O,selectionRange:H};return Re!==void 0&&(he.children=Re),he}l.create=g;function v(f){var c=f;return c&&R.string(c.name)&&R.number(c.kind)&&s.is(c.range)&&s.is(c.selectionRange)&&(c.detail===void 0||R.string(c.detail))&&(c.deprecated===void 0||R.boolean(c.deprecated))&&(c.children===void 0||Array.isArray(c.children))&&(c.tags===void 0||Array.isArray(c.tags))}l.is=v})(gi=e.DocumentSymbol||(e.DocumentSymbol={}));var lr;(function(l){l.Empty="",l.QuickFix="quickfix",l.Refactor="refactor",l.RefactorExtract="refactor.extract",l.RefactorInline="refactor.inline",l.RefactorRewrite="refactor.rewrite",l.Source="source",l.SourceOrganizeImports="source.organizeImports",l.SourceFixAll="source.fixAll"})(lr=e.CodeActionKind||(e.CodeActionKind={}));var qt;(function(l){l.Invoked=1,l.Automatic=2})(qt=e.CodeActionTriggerKind||(e.CodeActionTriggerKind={}));var Tt;(function(l){function g(f,c,b){var O={diagnostics:f};return c!=null&&(O.only=c),b!=null&&(O.triggerKind=b),O}l.create=g;function v(f){var c=f;return R.defined(c)&&R.typedArray(c.diagnostics,E.is)&&(c.only===void 0||R.typedArray(c.only,R.string))&&(c.triggerKind===void 0||c.triggerKind===qt.Invoked||c.triggerKind===qt.Automatic)}l.is=v})(Tt=e.CodeActionContext||(e.CodeActionContext={}));var Cr;(function(l){function g(f,c,b){var O={title:f},H=!0;return typeof c=="string"?(H=!1,O.kind=c):L.is(c)?O.command=c:O.edit=c,H&&b!==void 0&&(O.kind=b),O}l.create=g;function v(f){var c=f;return c&&R.string(c.title)&&(c.diagnostics===void 0||R.typedArray(c.diagnostics,E.is))&&(c.kind===void 0||R.string(c.kind))&&(c.edit!==void 0||c.command!==void 0)&&(c.command===void 0||L.is(c.command))&&(c.isPreferred===void 0||R.boolean(c.isPreferred))&&(c.edit===void 0||J.is(c.edit))}l.is=v})(Cr=e.CodeAction||(e.CodeAction={}));var dr;(function(l){function g(f,c){var b={range:f};return R.defined(c)&&(b.data=c),b}l.create=g;function v(f){var c=f;return R.defined(c)&&s.is(c.range)&&(R.undefined(c.command)||L.is(c.command))}l.is=v})(dr=e.CodeLens||(e.CodeLens={}));var qr;(function(l){function g(f,c){return{tabSize:f,insertSpaces:c}}l.create=g;function v(f){var c=f;return R.defined(c)&&R.uinteger(c.tabSize)&&R.boolean(c.insertSpaces)}l.is=v})(qr=e.FormattingOptions||(e.FormattingOptions={}));var q;(function(l){function g(f,c,b){return{range:f,target:c,data:b}}l.create=g;function v(f){var c=f;return R.defined(c)&&s.is(c.range)&&(R.undefined(c.target)||R.string(c.target))}l.is=v})(q=e.DocumentLink||(e.DocumentLink={}));var T;(function(l){function g(f,c){return{range:f,parent:c}}l.create=g;function v(f){var c=f;return R.objectLiteral(c)&&s.is(c.range)&&(c.parent===void 0||l.is(c.parent))}l.is=v})(T=e.SelectionRange||(e.SelectionRange={}));var I;(function(l){l.namespace="namespace",l.type="type",l.class="class",l.enum="enum",l.interface="interface",l.struct="struct",l.typeParameter="typeParameter",l.parameter="parameter",l.variable="variable",l.property="property",l.enumMember="enumMember",l.event="event",l.function="function",l.method="method",l.macro="macro",l.keyword="keyword",l.modifier="modifier",l.comment="comment",l.string="string",l.number="number",l.regexp="regexp",l.operator="operator",l.decorator="decorator"})(I=e.SemanticTokenTypes||(e.SemanticTokenTypes={}));var M;(function(l){l.declaration="declaration",l.definition="definition",l.readonly="readonly",l.static="static",l.deprecated="deprecated",l.abstract="abstract",l.async="async",l.modification="modification",l.documentation="documentation",l.defaultLibrary="defaultLibrary"})(M=e.SemanticTokenModifiers||(e.SemanticTokenModifiers={}));var W;(function(l){function g(v){var f=v;return R.objectLiteral(f)&&(f.resultId===void 0||typeof f.resultId=="string")&&Array.isArray(f.data)&&(f.data.length===0||typeof f.data[0]=="number")}l.is=g})(W=e.SemanticTokens||(e.SemanticTokens={}));var le;(function(l){function g(f,c){return{range:f,text:c}}l.create=g;function v(f){var c=f;return c!=null&&s.is(c.range)&&R.string(c.text)}l.is=v})(le=e.InlineValueText||(e.InlineValueText={}));var fe;(function(l){function g(f,c,b){return{range:f,variableName:c,caseSensitiveLookup:b}}l.create=g;function v(f){var c=f;return c!=null&&s.is(c.range)&&R.boolean(c.caseSensitiveLookup)&&(R.string(c.variableName)||c.variableName===void 0)}l.is=v})(fe=e.InlineValueVariableLookup||(e.InlineValueVariableLookup={}));var Te;(function(l){function g(f,c){return{range:f,expression:c}}l.create=g;function v(f){var c=f;return c!=null&&s.is(c.range)&&(R.string(c.expression)||c.expression===void 0)}l.is=v})(Te=e.InlineValueEvaluatableExpression||(e.InlineValueEvaluatableExpression={}));var ae;(function(l){function g(f,c){return{frameId:f,stoppedLocation:c}}l.create=g;function v(f){var c=f;return R.defined(c)&&s.is(f.stoppedLocation)}l.is=v})(ae=e.InlineValueContext||(e.InlineValueContext={}));var re;(function(l){l.Type=1,l.Parameter=2;function g(v){return v===1||v===2}l.is=g})(re=e.InlayHintKind||(e.InlayHintKind={}));var ne;(function(l){function g(f){return{value:f}}l.create=g;function v(f){var c=f;return R.objectLiteral(c)&&(c.tooltip===void 0||R.string(c.tooltip)||Rr.is(c.tooltip))&&(c.location===void 0||u.is(c.location))&&(c.command===void 0||L.is(c.command))}l.is=v})(ne=e.InlayHintLabelPart||(e.InlayHintLabelPart={}));var pe;(function(l){function g(f,c,b){var O={position:f,label:c};return b!==void 0&&(O.kind=b),O}l.create=g;function v(f){var c=f;return R.objectLiteral(c)&&a.is(c.position)&&(R.string(c.label)||R.typedArray(c.label,ne.is))&&(c.kind===void 0||re.is(c.kind))&&c.textEdits===void 0||R.typedArray(c.textEdits,U.is)&&(c.tooltip===void 0||R.string(c.tooltip)||Rr.is(c.tooltip))&&(c.paddingLeft===void 0||R.boolean(c.paddingLeft))&&(c.paddingRight===void 0||R.boolean(c.paddingRight))}l.is=v})(pe=e.InlayHint||(e.InlayHint={}));var Ee;(function(l){function g(v){var f=v;return R.objectLiteral(f)&&n.is(f.uri)&&R.string(f.name)}l.is=g})(Ee=e.WorkspaceFolder||(e.WorkspaceFolder={})),e.EOL=[`
`,`\r
`,"\r"];var Ze;(function(l){function g(b,O,H,Re){return new Rt(b,O,H,Re)}l.create=g;function v(b){var O=b;return!!(R.defined(O)&&R.string(O.uri)&&(R.undefined(O.languageId)||R.string(O.languageId))&&R.uinteger(O.lineCount)&&R.func(O.getText)&&R.func(O.positionAt)&&R.func(O.offsetAt))}l.is=v;function f(b,O){for(var H=b.getText(),Re=c(O,function(sn,Yi){var Qu=sn.range.start.line-Yi.range.start.line;return Qu===0?sn.range.start.character-Yi.range.start.character:Qu}),he=H.length,bt=Re.length-1;bt>=0;bt--){var Ct=Re[bt],Vt=b.offsetAt(Ct.range.start),ee=b.offsetAt(Ct.range.end);if(ee<=he)H=H.substring(0,Vt)+Ct.newText+H.substring(ee,H.length);else throw new Error("Overlapping edit");he=Vt}return H}l.applyEdits=f;function c(b,O){if(b.length<=1)return b;var H=b.length/2|0,Re=b.slice(0,H),he=b.slice(H);c(Re,O),c(he,O);for(var bt=0,Ct=0,Vt=0;bt<Re.length&&Ct<he.length;){var ee=O(Re[bt],he[Ct]);ee<=0?b[Vt++]=Re[bt++]:b[Vt++]=he[Ct++]}for(;bt<Re.length;)b[Vt++]=Re[bt++];for(;Ct<he.length;)b[Vt++]=he[Ct++];return b}})(Ze=e.TextDocument||(e.TextDocument={}));var Rt=function(){function l(g,v,f,c){this._uri=g,this._languageId=v,this._version=f,this._content=c,this._lineOffsets=void 0}return Object.defineProperty(l.prototype,"uri",{get:function(){return this._uri},enumerable:!1,configurable:!0}),Object.defineProperty(l.prototype,"languageId",{get:function(){return this._languageId},enumerable:!1,configurable:!0}),Object.defineProperty(l.prototype,"version",{get:function(){return this._version},enumerable:!1,configurable:!0}),l.prototype.getText=function(g){if(g){var v=this.offsetAt(g.start),f=this.offsetAt(g.end);return this._content.substring(v,f)}return this._content},l.prototype.update=function(g,v){this._content=g.text,this._version=v,this._lineOffsets=void 0},l.prototype.getLineOffsets=function(){if(this._lineOffsets===void 0){for(var g=[],v=this._content,f=!0,c=0;c<v.length;c++){f&&(g.push(c),f=!1);var b=v.charAt(c);f=b==="\r"||b===`
`,b==="\r"&&c+1<v.length&&v.charAt(c+1)===`
`&&c++}f&&v.length>0&&g.push(v.length),this._lineOffsets=g}return this._lineOffsets},l.prototype.positionAt=function(g){g=Math.max(Math.min(g,this._content.length),0);var v=this.getLineOffsets(),f=0,c=v.length;if(c===0)return a.create(0,g);for(;f<c;){var b=Math.floor((f+c)/2);v[b]>g?c=b:f=b+1}var O=f-1;return a.create(O,g-v[O])},l.prototype.offsetAt=function(g){var v=this.getLineOffsets();if(g.line>=v.length)return this._content.length;if(g.line<0)return 0;var f=v[g.line],c=g.line+1<v.length?v[g.line+1]:this._content.length;return Math.max(Math.min(f+g.character,c),f)},Object.defineProperty(l.prototype,"lineCount",{get:function(){return this.getLineOffsets().length},enumerable:!1,configurable:!0}),l}(),R;(function(l){var g=Object.prototype.toString;function v(ee){return typeof ee<"u"}l.defined=v;function f(ee){return typeof ee>"u"}l.undefined=f;function c(ee){return ee===!0||ee===!1}l.boolean=c;function b(ee){return g.call(ee)==="[object String]"}l.string=b;function O(ee){return g.call(ee)==="[object Number]"}l.number=O;function H(ee,sn,Yi){return g.call(ee)==="[object Number]"&&sn<=ee&&ee<=Yi}l.numberRange=H;function Re(ee){return g.call(ee)==="[object Number]"&&-2147483648<=ee&&ee<=2147483647}l.integer=Re;function he(ee){return g.call(ee)==="[object Number]"&&0<=ee&&ee<=2147483647}l.uinteger=he;function bt(ee){return g.call(ee)==="[object Function]"}l.func=bt;function Ct(ee){return ee!==null&&typeof ee=="object"}l.objectLiteral=Ct;function Vt(ee,sn){return Array.isArray(ee)&&ee.every(sn)}l.typedArray=Vt})(R||(R={}))})});var At=h(xr=>{"use strict";Object.defineProperty(xr,"__esModule",{value:!0});xr.ProtocolNotificationType=xr.ProtocolNotificationType0=xr.ProtocolRequestType=xr.ProtocolRequestType0=xr.RegistrationType=xr.MessageDirection=void 0;var as=va(),cU;(function(t){t.clientToServer="clientToServer",t.serverToClient="serverToClient",t.both="both"})(cU=xr.MessageDirection||(xr.MessageDirection={}));var Pg=class{constructor(e){this.method=e}};xr.RegistrationType=Pg;var Ag=class extends as.RequestType0{constructor(e){super(e)}};xr.ProtocolRequestType0=Ag;var Sg=class extends as.RequestType{constructor(e){super(e,as.ParameterStructures.byName)}};xr.ProtocolRequestType=Sg;var Eg=class extends as.NotificationType0{constructor(e){super(e)}};xr.ProtocolNotificationType0=Eg;var kg=class extends as.NotificationType{constructor(e){super(e,as.ParameterStructures.byName)}};xr.ProtocolNotificationType=kg});var ud=h(It=>{"use strict";Object.defineProperty(It,"__esModule",{value:!0});It.objectLiteral=It.typedArray=It.stringArray=It.array=It.func=It.error=It.number=It.string=It.boolean=void 0;function lU(t){return t===!0||t===!1}It.boolean=lU;function YC(t){return typeof t=="string"||t instanceof String}It.string=YC;function dU(t){return typeof t=="number"||t instanceof Number}It.number=dU;function fU(t){return t instanceof Error}It.error=fU;function pU(t){return typeof t=="function"}It.func=pU;function XC(t){return Array.isArray(t)}It.array=XC;function hU(t){return XC(t)&&t.every(e=>YC(e))}It.stringArray=hU;function mU(t,e){return Array.isArray(t)&&t.every(e)}It.typedArray=mU;function gU(t){return t!==null&&typeof t=="object"}It.objectLiteral=gU});var QC=h(oc=>{"use strict";Object.defineProperty(oc,"__esModule",{value:!0});oc.ImplementationRequest=void 0;var JC=At(),yU;(function(t){t.method="textDocument/implementation",t.messageDirection=JC.MessageDirection.clientToServer,t.type=new JC.ProtocolRequestType(t.method)})(yU=oc.ImplementationRequest||(oc.ImplementationRequest={}))});var e0=h(ac=>{"use strict";Object.defineProperty(ac,"__esModule",{value:!0});ac.TypeDefinitionRequest=void 0;var ZC=At(),vU;(function(t){t.method="textDocument/typeDefinition",t.messageDirection=ZC.MessageDirection.clientToServer,t.type=new ZC.ProtocolRequestType(t.method)})(vU=ac.TypeDefinitionRequest||(ac.TypeDefinitionRequest={}))});var t0=h(Oo=>{"use strict";Object.defineProperty(Oo,"__esModule",{value:!0});Oo.DidChangeWorkspaceFoldersNotification=Oo.WorkspaceFoldersRequest=void 0;var cd=At(),_U;(function(t){t.method="workspace/workspaceFolders",t.messageDirection=cd.MessageDirection.serverToClient,t.type=new cd.ProtocolRequestType0(t.method)})(_U=Oo.WorkspaceFoldersRequest||(Oo.WorkspaceFoldersRequest={}));var TU;(function(t){t.method="workspace/didChangeWorkspaceFolders",t.messageDirection=cd.MessageDirection.clientToServer,t.type=new cd.ProtocolNotificationType(t.method)})(TU=Oo.DidChangeWorkspaceFoldersNotification||(Oo.DidChangeWorkspaceFoldersNotification={}))});var n0=h(sc=>{"use strict";Object.defineProperty(sc,"__esModule",{value:!0});sc.ConfigurationRequest=void 0;var r0=At(),RU;(function(t){t.method="workspace/configuration",t.messageDirection=r0.MessageDirection.serverToClient,t.type=new r0.ProtocolRequestType(t.method)})(RU=sc.ConfigurationRequest||(sc.ConfigurationRequest={}))});var i0=h(qo=>{"use strict";Object.defineProperty(qo,"__esModule",{value:!0});qo.ColorPresentationRequest=qo.DocumentColorRequest=void 0;var ld=At(),bU;(function(t){t.method="textDocument/documentColor",t.messageDirection=ld.MessageDirection.clientToServer,t.type=new ld.ProtocolRequestType(t.method)})(bU=qo.DocumentColorRequest||(qo.DocumentColorRequest={}));var CU;(function(t){t.method="textDocument/colorPresentation",t.messageDirection=ld.MessageDirection.clientToServer,t.type=new ld.ProtocolRequestType(t.method)})(CU=qo.ColorPresentationRequest||(qo.ColorPresentationRequest={}))});var a0=h(uc=>{"use strict";Object.defineProperty(uc,"__esModule",{value:!0});uc.FoldingRangeRequest=void 0;var o0=At(),PU;(function(t){t.method="textDocument/foldingRange",t.messageDirection=o0.MessageDirection.clientToServer,t.type=new o0.ProtocolRequestType(t.method)})(PU=uc.FoldingRangeRequest||(uc.FoldingRangeRequest={}))});var u0=h(cc=>{"use strict";Object.defineProperty(cc,"__esModule",{value:!0});cc.DeclarationRequest=void 0;var s0=At(),AU;(function(t){t.method="textDocument/declaration",t.messageDirection=s0.MessageDirection.clientToServer,t.type=new s0.ProtocolRequestType(t.method)})(AU=cc.DeclarationRequest||(cc.DeclarationRequest={}))});var l0=h(lc=>{"use strict";Object.defineProperty(lc,"__esModule",{value:!0});lc.SelectionRangeRequest=void 0;var c0=At(),SU;(function(t){t.method="textDocument/selectionRange",t.messageDirection=c0.MessageDirection.clientToServer,t.type=new c0.ProtocolRequestType(t.method)})(SU=lc.SelectionRangeRequest||(lc.SelectionRangeRequest={}))});var d0=h(Un=>{"use strict";Object.defineProperty(Un,"__esModule",{value:!0});Un.WorkDoneProgressCancelNotification=Un.WorkDoneProgressCreateRequest=Un.WorkDoneProgress=void 0;var EU=va(),dd=At(),kU;(function(t){t.type=new EU.ProgressType;function e(r){return r===t.type}t.is=e})(kU=Un.WorkDoneProgress||(Un.WorkDoneProgress={}));var NU;(function(t){t.method="window/workDoneProgress/create",t.messageDirection=dd.MessageDirection.serverToClient,t.type=new dd.ProtocolRequestType(t.method)})(NU=Un.WorkDoneProgressCreateRequest||(Un.WorkDoneProgressCreateRequest={}));var wU;(function(t){t.method="window/workDoneProgress/cancel",t.messageDirection=dd.MessageDirection.clientToServer,t.type=new dd.ProtocolNotificationType(t.method)})(wU=Un.WorkDoneProgressCancelNotification||(Un.WorkDoneProgressCancelNotification={}))});var f0=h(Gn=>{"use strict";Object.defineProperty(Gn,"__esModule",{value:!0});Gn.CallHierarchyOutgoingCallsRequest=Gn.CallHierarchyIncomingCallsRequest=Gn.CallHierarchyPrepareRequest=void 0;var ss=At(),DU;(function(t){t.method="textDocument/prepareCallHierarchy",t.messageDirection=ss.MessageDirection.clientToServer,t.type=new ss.ProtocolRequestType(t.method)})(DU=Gn.CallHierarchyPrepareRequest||(Gn.CallHierarchyPrepareRequest={}));var OU;(function(t){t.method="callHierarchy/incomingCalls",t.messageDirection=ss.MessageDirection.clientToServer,t.type=new ss.ProtocolRequestType(t.method)})(OU=Gn.CallHierarchyIncomingCallsRequest||(Gn.CallHierarchyIncomingCallsRequest={}));var qU;(function(t){t.method="callHierarchy/outgoingCalls",t.messageDirection=ss.MessageDirection.clientToServer,t.type=new ss.ProtocolRequestType(t.method)})(qU=Gn.CallHierarchyOutgoingCallsRequest||(Gn.CallHierarchyOutgoingCallsRequest={}))});var p0=h(xt=>{"use strict";Object.defineProperty(xt,"__esModule",{value:!0});xt.SemanticTokensRefreshRequest=xt.SemanticTokensRangeRequest=xt.SemanticTokensDeltaRequest=xt.SemanticTokensRequest=xt.SemanticTokensRegistrationType=xt.TokenFormat=void 0;var Zi=At(),IU;(function(t){t.Relative="relative"})(IU=xt.TokenFormat||(xt.TokenFormat={}));var fd;(function(t){t.method="textDocument/semanticTokens",t.type=new Zi.RegistrationType(t.method)})(fd=xt.SemanticTokensRegistrationType||(xt.SemanticTokensRegistrationType={}));var xU;(function(t){t.method="textDocument/semanticTokens/full",t.messageDirection=Zi.MessageDirection.clientToServer,t.type=new Zi.ProtocolRequestType(t.method),t.registrationMethod=fd.method})(xU=xt.SemanticTokensRequest||(xt.SemanticTokensRequest={}));var LU;(function(t){t.method="textDocument/semanticTokens/full/delta",t.messageDirection=Zi.MessageDirection.clientToServer,t.type=new Zi.ProtocolRequestType(t.method),t.registrationMethod=fd.method})(LU=xt.SemanticTokensDeltaRequest||(xt.SemanticTokensDeltaRequest={}));var MU;(function(t){t.method="textDocument/semanticTokens/range",t.messageDirection=Zi.MessageDirection.clientToServer,t.type=new Zi.ProtocolRequestType(t.method),t.registrationMethod=fd.method})(MU=xt.SemanticTokensRangeRequest||(xt.SemanticTokensRangeRequest={}));var $U;(function(t){t.method="workspace/semanticTokens/refresh",t.messageDirection=Zi.MessageDirection.serverToClient,t.type=new Zi.ProtocolRequestType0(t.method)})($U=xt.SemanticTokensRefreshRequest||(xt.SemanticTokensRefreshRequest={}))});var m0=h(dc=>{"use strict";Object.defineProperty(dc,"__esModule",{value:!0});dc.ShowDocumentRequest=void 0;var h0=At(),FU;(function(t){t.method="window/showDocument",t.messageDirection=h0.MessageDirection.serverToClient,t.type=new h0.ProtocolRequestType(t.method)})(FU=dc.ShowDocumentRequest||(dc.ShowDocumentRequest={}))});var y0=h(fc=>{"use strict";Object.defineProperty(fc,"__esModule",{value:!0});fc.LinkedEditingRangeRequest=void 0;var g0=At(),jU;(function(t){t.method="textDocument/linkedEditingRange",t.messageDirection=g0.MessageDirection.clientToServer,t.type=new g0.ProtocolRequestType(t.method)})(jU=fc.LinkedEditingRangeRequest||(fc.LinkedEditingRangeRequest={}))});var v0=h(St=>{"use strict";Object.defineProperty(St,"__esModule",{value:!0});St.WillDeleteFilesRequest=St.DidDeleteFilesNotification=St.DidRenameFilesNotification=St.WillRenameFilesRequest=St.DidCreateFilesNotification=St.WillCreateFilesRequest=St.FileOperationPatternKind=void 0;var vn=At(),UU;(function(t){t.file="file",t.folder="folder"})(UU=St.FileOperationPatternKind||(St.FileOperationPatternKind={}));var GU;(function(t){t.method="workspace/willCreateFiles",t.messageDirection=vn.MessageDirection.clientToServer,t.type=new vn.ProtocolRequestType(t.method)})(GU=St.WillCreateFilesRequest||(St.WillCreateFilesRequest={}));var WU;(function(t){t.method="workspace/didCreateFiles",t.messageDirection=vn.MessageDirection.clientToServer,t.type=new vn.ProtocolNotificationType(t.method)})(WU=St.DidCreateFilesNotification||(St.DidCreateFilesNotification={}));var HU;(function(t){t.method="workspace/willRenameFiles",t.messageDirection=vn.MessageDirection.clientToServer,t.type=new vn.ProtocolRequestType(t.method)})(HU=St.WillRenameFilesRequest||(St.WillRenameFilesRequest={}));var KU;(function(t){t.method="workspace/didRenameFiles",t.messageDirection=vn.MessageDirection.clientToServer,t.type=new vn.ProtocolNotificationType(t.method)})(KU=St.DidRenameFilesNotification||(St.DidRenameFilesNotification={}));var BU;(function(t){t.method="workspace/didDeleteFiles",t.messageDirection=vn.MessageDirection.clientToServer,t.type=new vn.ProtocolNotificationType(t.method)})(BU=St.DidDeleteFilesNotification||(St.DidDeleteFilesNotification={}));var VU;(function(t){t.method="workspace/willDeleteFiles",t.messageDirection=vn.MessageDirection.clientToServer,t.type=new vn.ProtocolRequestType(t.method)})(VU=St.WillDeleteFilesRequest||(St.WillDeleteFilesRequest={}))});var T0=h(Wn=>{"use strict";Object.defineProperty(Wn,"__esModule",{value:!0});Wn.MonikerRequest=Wn.MonikerKind=Wn.UniquenessLevel=void 0;var _0=At(),zU;(function(t){t.document="document",t.project="project",t.group="group",t.scheme="scheme",t.global="global"})(zU=Wn.UniquenessLevel||(Wn.UniquenessLevel={}));var YU;(function(t){t.$import="import",t.$export="export",t.local="local"})(YU=Wn.MonikerKind||(Wn.MonikerKind={}));var XU;(function(t){t.method="textDocument/moniker",t.messageDirection=_0.MessageDirection.clientToServer,t.type=new _0.ProtocolRequestType(t.method)})(XU=Wn.MonikerRequest||(Wn.MonikerRequest={}))});var R0=h(Hn=>{"use strict";Object.defineProperty(Hn,"__esModule",{value:!0});Hn.TypeHierarchySubtypesRequest=Hn.TypeHierarchySupertypesRequest=Hn.TypeHierarchyPrepareRequest=void 0;var us=At(),JU;(function(t){t.method="textDocument/prepareTypeHierarchy",t.messageDirection=us.MessageDirection.clientToServer,t.type=new us.ProtocolRequestType(t.method)})(JU=Hn.TypeHierarchyPrepareRequest||(Hn.TypeHierarchyPrepareRequest={}));var QU;(function(t){t.method="typeHierarchy/supertypes",t.messageDirection=us.MessageDirection.clientToServer,t.type=new us.ProtocolRequestType(t.method)})(QU=Hn.TypeHierarchySupertypesRequest||(Hn.TypeHierarchySupertypesRequest={}));var ZU;(function(t){t.method="typeHierarchy/subtypes",t.messageDirection=us.MessageDirection.clientToServer,t.type=new us.ProtocolRequestType(t.method)})(ZU=Hn.TypeHierarchySubtypesRequest||(Hn.TypeHierarchySubtypesRequest={}))});var b0=h(Io=>{"use strict";Object.defineProperty(Io,"__esModule",{value:!0});Io.InlineValueRefreshRequest=Io.InlineValueRequest=void 0;var pd=At(),eG;(function(t){t.method="textDocument/inlineValue",t.messageDirection=pd.MessageDirection.clientToServer,t.type=new pd.ProtocolRequestType(t.method)})(eG=Io.InlineValueRequest||(Io.InlineValueRequest={}));var tG;(function(t){t.method="workspace/inlineValue/refresh",t.messageDirection=pd.MessageDirection.serverToClient,t.type=new pd.ProtocolRequestType0(t.method)})(tG=Io.InlineValueRefreshRequest||(Io.InlineValueRefreshRequest={}))});var C0=h(Kn=>{"use strict";Object.defineProperty(Kn,"__esModule",{value:!0});Kn.InlayHintRefreshRequest=Kn.InlayHintResolveRequest=Kn.InlayHintRequest=void 0;var cs=At(),rG;(function(t){t.method="textDocument/inlayHint",t.messageDirection=cs.MessageDirection.clientToServer,t.type=new cs.ProtocolRequestType(t.method)})(rG=Kn.InlayHintRequest||(Kn.InlayHintRequest={}));var nG;(function(t){t.method="inlayHint/resolve",t.messageDirection=cs.MessageDirection.clientToServer,t.type=new cs.ProtocolRequestType(t.method)})(nG=Kn.InlayHintResolveRequest||(Kn.InlayHintResolveRequest={}));var iG;(function(t){t.method="workspace/inlayHint/refresh",t.messageDirection=cs.MessageDirection.serverToClient,t.type=new cs.ProtocolRequestType0(t.method)})(iG=Kn.InlayHintRefreshRequest||(Kn.InlayHintRefreshRequest={}))});var A0=h(pr=>{"use strict";Object.defineProperty(pr,"__esModule",{value:!0});pr.DiagnosticRefreshRequest=pr.WorkspaceDiagnosticRequest=pr.DocumentDiagnosticRequest=pr.DocumentDiagnosticReportKind=pr.DiagnosticServerCancellationData=void 0;var P0=va(),oG=ud(),ls=At(),aG;(function(t){function e(r){let n=r;return n&&oG.boolean(n.retriggerRequest)}t.is=e})(aG=pr.DiagnosticServerCancellationData||(pr.DiagnosticServerCancellationData={}));var sG;(function(t){t.Full="full",t.Unchanged="unchanged"})(sG=pr.DocumentDiagnosticReportKind||(pr.DocumentDiagnosticReportKind={}));var uG;(function(t){t.method="textDocument/diagnostic",t.messageDirection=ls.MessageDirection.clientToServer,t.type=new ls.ProtocolRequestType(t.method),t.partialResult=new P0.ProgressType})(uG=pr.DocumentDiagnosticRequest||(pr.DocumentDiagnosticRequest={}));var cG;(function(t){t.method="workspace/diagnostic",t.messageDirection=ls.MessageDirection.clientToServer,t.type=new ls.ProtocolRequestType(t.method),t.partialResult=new P0.ProgressType})(cG=pr.WorkspaceDiagnosticRequest||(pr.WorkspaceDiagnosticRequest={}));var lG;(function(t){t.method="workspace/diagnostic/refresh",t.messageDirection=ls.MessageDirection.serverToClient,t.type=new ls.ProtocolRequestType0(t.method)})(lG=pr.DiagnosticRefreshRequest||(pr.DiagnosticRefreshRequest={}))});var k0=h(Me=>{"use strict";Object.defineProperty(Me,"__esModule",{value:!0});Me.DidCloseNotebookDocumentNotification=Me.DidSaveNotebookDocumentNotification=Me.DidChangeNotebookDocumentNotification=Me.NotebookCellArrayChange=Me.DidOpenNotebookDocumentNotification=Me.NotebookDocumentSyncRegistrationType=Me.NotebookDocument=Me.NotebookCell=Me.ExecutionSummary=Me.NotebookCellKind=void 0;var pc=sd(),Bn=ud(),vi=At(),S0;(function(t){t.Markup=1,t.Code=2;function e(r){return r===1||r===2}t.is=e})(S0=Me.NotebookCellKind||(Me.NotebookCellKind={}));var E0;(function(t){function e(i,o){let a={executionOrder:i};return(o===!0||o===!1)&&(a.success=o),a}t.create=e;function r(i){let o=i;return Bn.objectLiteral(o)&&pc.uinteger.is(o.executionOrder)&&(o.success===void 0||Bn.boolean(o.success))}t.is=r;function n(i,o){return i===o?!0:i==null||o===null||o===void 0?!1:i.executionOrder===o.executionOrder&&i.success===o.success}t.equals=n})(E0=Me.ExecutionSummary||(Me.ExecutionSummary={}));var Ng;(function(t){function e(o,a){return{kind:o,document:a}}t.create=e;function r(o){let a=o;return Bn.objectLiteral(a)&&S0.is(a.kind)&&pc.DocumentUri.is(a.document)&&(a.metadata===void 0||Bn.objectLiteral(a.metadata))}t.is=r;function n(o,a){let s=new Set;return o.document!==a.document&&s.add("document"),o.kind!==a.kind&&s.add("kind"),o.executionSummary!==a.executionSummary&&s.add("executionSummary"),(o.metadata!==void 0||a.metadata!==void 0)&&!i(o.metadata,a.metadata)&&s.add("metadata"),(o.executionSummary!==void 0||a.executionSummary!==void 0)&&!E0.equals(o.executionSummary,a.executionSummary)&&s.add("executionSummary"),s}t.diff=n;function i(o,a){if(o===a)return!0;if(o==null||a===null||a===void 0||typeof o!=typeof a||typeof o!="object")return!1;let s=Array.isArray(o),u=Array.isArray(a);if(s!==u)return!1;if(s&&u){if(o.length!==a.length)return!1;for(let d=0;d<o.length;d++)if(!i(o[d],a[d]))return!1}if(Bn.objectLiteral(o)&&Bn.objectLiteral(a)){let d=Object.keys(o),p=Object.keys(a);if(d.length!==p.length||(d.sort(),p.sort(),!i(d,p)))return!1;for(let m=0;m<d.length;m++){let y=d[m];if(!i(o[y],a[y]))return!1}}return!0}})(Ng=Me.NotebookCell||(Me.NotebookCell={}));var dG;(function(t){function e(n,i,o,a){return{uri:n,notebookType:i,version:o,cells:a}}t.create=e;function r(n){let i=n;return Bn.objectLiteral(i)&&Bn.string(i.uri)&&pc.integer.is(i.version)&&Bn.typedArray(i.cells,Ng.is)}t.is=r})(dG=Me.NotebookDocument||(Me.NotebookDocument={}));var hc;(function(t){t.method="notebookDocument/sync",t.messageDirection=vi.MessageDirection.clientToServer,t.type=new vi.RegistrationType(t.method)})(hc=Me.NotebookDocumentSyncRegistrationType||(Me.NotebookDocumentSyncRegistrationType={}));var fG;(function(t){t.method="notebookDocument/didOpen",t.messageDirection=vi.MessageDirection.clientToServer,t.type=new vi.ProtocolNotificationType(t.method),t.registrationMethod=hc.method})(fG=Me.DidOpenNotebookDocumentNotification||(Me.DidOpenNotebookDocumentNotification={}));var pG;(function(t){function e(n){let i=n;return Bn.objectLiteral(i)&&pc.uinteger.is(i.start)&&pc.uinteger.is(i.deleteCount)&&(i.cells===void 0||Bn.typedArray(i.cells,Ng.is))}t.is=e;function r(n,i,o){let a={start:n,deleteCount:i};return o!==void 0&&(a.cells=o),a}t.create=r})(pG=Me.NotebookCellArrayChange||(Me.NotebookCellArrayChange={}));var hG;(function(t){t.method="notebookDocument/didChange",t.messageDirection=vi.MessageDirection.clientToServer,t.type=new vi.ProtocolNotificationType(t.method),t.registrationMethod=hc.method})(hG=Me.DidChangeNotebookDocumentNotification||(Me.DidChangeNotebookDocumentNotification={}));var mG;(function(t){t.method="notebookDocument/didSave",t.messageDirection=vi.MessageDirection.clientToServer,t.type=new vi.ProtocolNotificationType(t.method),t.registrationMethod=hc.method})(mG=Me.DidSaveNotebookDocumentNotification||(Me.DidSaveNotebookDocumentNotification={}));var gG;(function(t){t.method="notebookDocument/didClose",t.messageDirection=vi.MessageDirection.clientToServer,t.type=new vi.ProtocolNotificationType(t.method),t.registrationMethod=hc.method})(gG=Me.DidCloseNotebookDocumentNotification||(Me.DidCloseNotebookDocumentNotification={}))});var M0=h(P=>{"use strict";Object.defineProperty(P,"__esModule",{value:!0});P.WorkspaceSymbolRequest=P.CodeActionResolveRequest=P.CodeActionRequest=P.DocumentSymbolRequest=P.DocumentHighlightRequest=P.ReferencesRequest=P.DefinitionRequest=P.SignatureHelpRequest=P.SignatureHelpTriggerKind=P.HoverRequest=P.CompletionResolveRequest=P.CompletionRequest=P.CompletionTriggerKind=P.PublishDiagnosticsNotification=P.WatchKind=P.RelativePattern=P.FileChangeType=P.DidChangeWatchedFilesNotification=P.WillSaveTextDocumentWaitUntilRequest=P.WillSaveTextDocumentNotification=P.TextDocumentSaveReason=P.DidSaveTextDocumentNotification=P.DidCloseTextDocumentNotification=P.DidChangeTextDocumentNotification=P.TextDocumentContentChangeEvent=P.DidOpenTextDocumentNotification=P.TextDocumentSyncKind=P.TelemetryEventNotification=P.LogMessageNotification=P.ShowMessageRequest=P.ShowMessageNotification=P.MessageType=P.DidChangeConfigurationNotification=P.ExitNotification=P.ShutdownRequest=P.InitializedNotification=P.InitializeErrorCodes=P.InitializeRequest=P.WorkDoneProgressOptions=P.TextDocumentRegistrationOptions=P.StaticRegistrationOptions=P.PositionEncodingKind=P.FailureHandlingKind=P.ResourceOperationKind=P.UnregistrationRequest=P.RegistrationRequest=P.DocumentSelector=P.NotebookCellTextDocumentFilter=P.NotebookDocumentFilter=P.TextDocumentFilter=void 0;P.TypeHierarchySubtypesRequest=P.TypeHierarchyPrepareRequest=P.MonikerRequest=P.MonikerKind=P.UniquenessLevel=P.WillDeleteFilesRequest=P.DidDeleteFilesNotification=P.WillRenameFilesRequest=P.DidRenameFilesNotification=P.WillCreateFilesRequest=P.DidCreateFilesNotification=P.FileOperationPatternKind=P.LinkedEditingRangeRequest=P.ShowDocumentRequest=P.SemanticTokensRegistrationType=P.SemanticTokensRefreshRequest=P.SemanticTokensRangeRequest=P.SemanticTokensDeltaRequest=P.SemanticTokensRequest=P.TokenFormat=P.CallHierarchyPrepareRequest=P.CallHierarchyOutgoingCallsRequest=P.CallHierarchyIncomingCallsRequest=P.WorkDoneProgressCancelNotification=P.WorkDoneProgressCreateRequest=P.WorkDoneProgress=P.SelectionRangeRequest=P.DeclarationRequest=P.FoldingRangeRequest=P.ColorPresentationRequest=P.DocumentColorRequest=P.ConfigurationRequest=P.DidChangeWorkspaceFoldersNotification=P.WorkspaceFoldersRequest=P.TypeDefinitionRequest=P.ImplementationRequest=P.ApplyWorkspaceEditRequest=P.ExecuteCommandRequest=P.PrepareRenameRequest=P.RenameRequest=P.PrepareSupportDefaultBehavior=P.DocumentOnTypeFormattingRequest=P.DocumentRangeFormattingRequest=P.DocumentFormattingRequest=P.DocumentLinkResolveRequest=P.DocumentLinkRequest=P.CodeLensRefreshRequest=P.CodeLensResolveRequest=P.CodeLensRequest=P.WorkspaceSymbolResolveRequest=void 0;P.DidCloseNotebookDocumentNotification=P.DidSaveNotebookDocumentNotification=P.DidChangeNotebookDocumentNotification=P.NotebookCellArrayChange=P.DidOpenNotebookDocumentNotification=P.NotebookDocumentSyncRegistrationType=P.NotebookDocument=P.NotebookCell=P.ExecutionSummary=P.NotebookCellKind=P.DiagnosticRefreshRequest=P.WorkspaceDiagnosticRequest=P.DocumentDiagnosticRequest=P.DocumentDiagnosticReportKind=P.DiagnosticServerCancellationData=P.InlayHintRefreshRequest=P.InlayHintResolveRequest=P.InlayHintRequest=P.InlineValueRefreshRequest=P.InlineValueRequest=P.TypeHierarchySupertypesRequest=void 0;var K=At(),N0=sd(),hr=ud(),yG=QC();Object.defineProperty(P,"ImplementationRequest",{enumerable:!0,get:function(){return yG.ImplementationRequest}});var vG=e0();Object.defineProperty(P,"TypeDefinitionRequest",{enumerable:!0,get:function(){return vG.TypeDefinitionRequest}});var w0=t0();Object.defineProperty(P,"WorkspaceFoldersRequest",{enumerable:!0,get:function(){return w0.WorkspaceFoldersRequest}});Object.defineProperty(P,"DidChangeWorkspaceFoldersNotification",{enumerable:!0,get:function(){return w0.DidChangeWorkspaceFoldersNotification}});var _G=n0();Object.defineProperty(P,"ConfigurationRequest",{enumerable:!0,get:function(){return _G.ConfigurationRequest}});var D0=i0();Object.defineProperty(P,"DocumentColorRequest",{enumerable:!0,get:function(){return D0.DocumentColorRequest}});Object.defineProperty(P,"ColorPresentationRequest",{enumerable:!0,get:function(){return D0.ColorPresentationRequest}});var TG=a0();Object.defineProperty(P,"FoldingRangeRequest",{enumerable:!0,get:function(){return TG.FoldingRangeRequest}});var RG=u0();Object.defineProperty(P,"DeclarationRequest",{enumerable:!0,get:function(){return RG.DeclarationRequest}});var bG=l0();Object.defineProperty(P,"SelectionRangeRequest",{enumerable:!0,get:function(){return bG.SelectionRangeRequest}});var wg=d0();Object.defineProperty(P,"WorkDoneProgress",{enumerable:!0,get:function(){return wg.WorkDoneProgress}});Object.defineProperty(P,"WorkDoneProgressCreateRequest",{enumerable:!0,get:function(){return wg.WorkDoneProgressCreateRequest}});Object.defineProperty(P,"WorkDoneProgressCancelNotification",{enumerable:!0,get:function(){return wg.WorkDoneProgressCancelNotification}});var Dg=f0();Object.defineProperty(P,"CallHierarchyIncomingCallsRequest",{enumerable:!0,get:function(){return Dg.CallHierarchyIncomingCallsRequest}});Object.defineProperty(P,"CallHierarchyOutgoingCallsRequest",{enumerable:!0,get:function(){return Dg.CallHierarchyOutgoingCallsRequest}});Object.defineProperty(P,"CallHierarchyPrepareRequest",{enumerable:!0,get:function(){return Dg.CallHierarchyPrepareRequest}});var ds=p0();Object.defineProperty(P,"TokenFormat",{enumerable:!0,get:function(){return ds.TokenFormat}});Object.defineProperty(P,"SemanticTokensRequest",{enumerable:!0,get:function(){return ds.SemanticTokensRequest}});Object.defineProperty(P,"SemanticTokensDeltaRequest",{enumerable:!0,get:function(){return ds.SemanticTokensDeltaRequest}});Object.defineProperty(P,"SemanticTokensRangeRequest",{enumerable:!0,get:function(){return ds.SemanticTokensRangeRequest}});Object.defineProperty(P,"SemanticTokensRefreshRequest",{enumerable:!0,get:function(){return ds.SemanticTokensRefreshRequest}});Object.defineProperty(P,"SemanticTokensRegistrationType",{enumerable:!0,get:function(){return ds.SemanticTokensRegistrationType}});var CG=m0();Object.defineProperty(P,"ShowDocumentRequest",{enumerable:!0,get:function(){return CG.ShowDocumentRequest}});var PG=y0();Object.defineProperty(P,"LinkedEditingRangeRequest",{enumerable:!0,get:function(){return PG.LinkedEditingRangeRequest}});var _a=v0();Object.defineProperty(P,"FileOperationPatternKind",{enumerable:!0,get:function(){return _a.FileOperationPatternKind}});Object.defineProperty(P,"DidCreateFilesNotification",{enumerable:!0,get:function(){return _a.DidCreateFilesNotification}});Object.defineProperty(P,"WillCreateFilesRequest",{enumerable:!0,get:function(){return _a.WillCreateFilesRequest}});Object.defineProperty(P,"DidRenameFilesNotification",{enumerable:!0,get:function(){return _a.DidRenameFilesNotification}});Object.defineProperty(P,"WillRenameFilesRequest",{enumerable:!0,get:function(){return _a.WillRenameFilesRequest}});Object.defineProperty(P,"DidDeleteFilesNotification",{enumerable:!0,get:function(){return _a.DidDeleteFilesNotification}});Object.defineProperty(P,"WillDeleteFilesRequest",{enumerable:!0,get:function(){return _a.WillDeleteFilesRequest}});var Og=T0();Object.defineProperty(P,"UniquenessLevel",{enumerable:!0,get:function(){return Og.UniquenessLevel}});Object.defineProperty(P,"MonikerKind",{enumerable:!0,get:function(){return Og.MonikerKind}});Object.defineProperty(P,"MonikerRequest",{enumerable:!0,get:function(){return Og.MonikerRequest}});var qg=R0();Object.defineProperty(P,"TypeHierarchyPrepareRequest",{enumerable:!0,get:function(){return qg.TypeHierarchyPrepareRequest}});Object.defineProperty(P,"TypeHierarchySubtypesRequest",{enumerable:!0,get:function(){return qg.TypeHierarchySubtypesRequest}});Object.defineProperty(P,"TypeHierarchySupertypesRequest",{enumerable:!0,get:function(){return qg.TypeHierarchySupertypesRequest}});var O0=b0();Object.defineProperty(P,"InlineValueRequest",{enumerable:!0,get:function(){return O0.InlineValueRequest}});Object.defineProperty(P,"InlineValueRefreshRequest",{enumerable:!0,get:function(){return O0.InlineValueRefreshRequest}});var Ig=C0();Object.defineProperty(P,"InlayHintRequest",{enumerable:!0,get:function(){return Ig.InlayHintRequest}});Object.defineProperty(P,"InlayHintResolveRequest",{enumerable:!0,get:function(){return Ig.InlayHintResolveRequest}});Object.defineProperty(P,"InlayHintRefreshRequest",{enumerable:!0,get:function(){return Ig.InlayHintRefreshRequest}});var mc=A0();Object.defineProperty(P,"DiagnosticServerCancellationData",{enumerable:!0,get:function(){return mc.DiagnosticServerCancellationData}});Object.defineProperty(P,"DocumentDiagnosticReportKind",{enumerable:!0,get:function(){return mc.DocumentDiagnosticReportKind}});Object.defineProperty(P,"DocumentDiagnosticRequest",{enumerable:!0,get:function(){return mc.DocumentDiagnosticRequest}});Object.defineProperty(P,"WorkspaceDiagnosticRequest",{enumerable:!0,get:function(){return mc.WorkspaceDiagnosticRequest}});Object.defineProperty(P,"DiagnosticRefreshRequest",{enumerable:!0,get:function(){return mc.DiagnosticRefreshRequest}});var _i=k0();Object.defineProperty(P,"NotebookCellKind",{enumerable:!0,get:function(){return _i.NotebookCellKind}});Object.defineProperty(P,"ExecutionSummary",{enumerable:!0,get:function(){return _i.ExecutionSummary}});Object.defineProperty(P,"NotebookCell",{enumerable:!0,get:function(){return _i.NotebookCell}});Object.defineProperty(P,"NotebookDocument",{enumerable:!0,get:function(){return _i.NotebookDocument}});Object.defineProperty(P,"NotebookDocumentSyncRegistrationType",{enumerable:!0,get:function(){return _i.NotebookDocumentSyncRegistrationType}});Object.defineProperty(P,"DidOpenNotebookDocumentNotification",{enumerable:!0,get:function(){return _i.DidOpenNotebookDocumentNotification}});Object.defineProperty(P,"NotebookCellArrayChange",{enumerable:!0,get:function(){return _i.NotebookCellArrayChange}});Object.defineProperty(P,"DidChangeNotebookDocumentNotification",{enumerable:!0,get:function(){return _i.DidChangeNotebookDocumentNotification}});Object.defineProperty(P,"DidSaveNotebookDocumentNotification",{enumerable:!0,get:function(){return _i.DidSaveNotebookDocumentNotification}});Object.defineProperty(P,"DidCloseNotebookDocumentNotification",{enumerable:!0,get:function(){return _i.DidCloseNotebookDocumentNotification}});var q0;(function(t){function e(r){let n=r;return hr.string(n.language)||hr.string(n.scheme)||hr.string(n.pattern)}t.is=e})(q0=P.TextDocumentFilter||(P.TextDocumentFilter={}));var I0;(function(t){function e(r){let n=r;return hr.objectLiteral(n)&&(hr.string(n.notebookType)||hr.string(n.scheme)||hr.string(n.pattern))}t.is=e})(I0=P.NotebookDocumentFilter||(P.NotebookDocumentFilter={}));var x0;(function(t){function e(r){let n=r;return hr.objectLiteral(n)&&(hr.string(n.notebook)||I0.is(n.notebook))&&(n.language===void 0||hr.string(n.language))}t.is=e})(x0=P.NotebookCellTextDocumentFilter||(P.NotebookCellTextDocumentFilter={}));var L0;(function(t){function e(r){if(!Array.isArray(r))return!1;for(let n of r)if(!hr.string(n)&&!q0.is(n)&&!x0.is(n))return!1;return!0}t.is=e})(L0=P.DocumentSelector||(P.DocumentSelector={}));var AG;(function(t){t.method="client/registerCapability",t.messageDirection=K.MessageDirection.serverToClient,t.type=new K.ProtocolRequestType(t.method)})(AG=P.RegistrationRequest||(P.RegistrationRequest={}));var SG;(function(t){t.method="client/unregisterCapability",t.messageDirection=K.MessageDirection.serverToClient,t.type=new K.ProtocolRequestType(t.method)})(SG=P.UnregistrationRequest||(P.UnregistrationRequest={}));var EG;(function(t){t.Create="create",t.Rename="rename",t.Delete="delete"})(EG=P.ResourceOperationKind||(P.ResourceOperationKind={}));var kG;(function(t){t.Abort="abort",t.Transactional="transactional",t.TextOnlyTransactional="textOnlyTransactional",t.Undo="undo"})(kG=P.FailureHandlingKind||(P.FailureHandlingKind={}));var NG;(function(t){t.UTF8="utf-8",t.UTF16="utf-16",t.UTF32="utf-32"})(NG=P.PositionEncodingKind||(P.PositionEncodingKind={}));var wG;(function(t){function e(r){let n=r;return n&&hr.string(n.id)&&n.id.length>0}t.hasId=e})(wG=P.StaticRegistrationOptions||(P.StaticRegistrationOptions={}));var DG;(function(t){function e(r){let n=r;return n&&(n.documentSelector===null||L0.is(n.documentSelector))}t.is=e})(DG=P.TextDocumentRegistrationOptions||(P.TextDocumentRegistrationOptions={}));var OG;(function(t){function e(n){let i=n;return hr.objectLiteral(i)&&(i.workDoneProgress===void 0||hr.boolean(i.workDoneProgress))}t.is=e;function r(n){let i=n;return i&&hr.boolean(i.workDoneProgress)}t.hasWorkDoneProgress=r})(OG=P.WorkDoneProgressOptions||(P.WorkDoneProgressOptions={}));var qG;(function(t){t.method="initialize",t.messageDirection=K.MessageDirection.clientToServer,t.type=new K.ProtocolRequestType(t.method)})(qG=P.InitializeRequest||(P.InitializeRequest={}));var IG;(function(t){t.unknownProtocolVersion=1})(IG=P.InitializeErrorCodes||(P.InitializeErrorCodes={}));var xG;(function(t){t.method="initialized",t.messageDirection=K.MessageDirection.clientToServer,t.type=new K.ProtocolNotificationType(t.method)})(xG=P.InitializedNotification||(P.InitializedNotification={}));var LG;(function(t){t.method="shutdown",t.messageDirection=K.MessageDirection.clientToServer,t.type=new K.ProtocolRequestType0(t.method)})(LG=P.ShutdownRequest||(P.ShutdownRequest={}));var MG;(function(t){t.method="exit",t.messageDirection=K.MessageDirection.clientToServer,t.type=new K.ProtocolNotificationType0(t.method)})(MG=P.ExitNotification||(P.ExitNotification={}));var $G;(function(t){t.method="workspace/didChangeConfiguration",t.messageDirection=K.MessageDirection.clientToServer,t.type=new K.ProtocolNotificationType(t.method)})($G=P.DidChangeConfigurationNotification||(P.DidChangeConfigurationNotification={}));var FG;(function(t){t.Error=1,t.Warning=2,t.Info=3,t.Log=4})(FG=P.MessageType||(P.MessageType={}));var jG;(function(t){t.method="window/showMessage",t.messageDirection=K.MessageDirection.serverToClient,t.type=new K.ProtocolNotificationType(t.method)})(jG=P.ShowMessageNotification||(P.ShowMessageNotification={}));var UG;(function(t){t.method="window/showMessageRequest",t.messageDirection=K.MessageDirection.serverToClient,t.type=new K.ProtocolRequestType(t.method)})(UG=P.ShowMessageRequest||(P.ShowMessageRequest={}));var GG;(function(t){t.method="window/logMessage",t.messageDirection=K.MessageDirection.serverToClient,t.type=new K.ProtocolNotificationType(t.method)})(GG=P.LogMessageNotification||(P.LogMessageNotification={}));var WG;(function(t){t.method="telemetry/event",t.messageDirection=K.MessageDirection.serverToClient,t.type=new K.ProtocolNotificationType(t.method)})(WG=P.TelemetryEventNotification||(P.TelemetryEventNotification={}));var HG;(function(t){t.None=0,t.Full=1,t.Incremental=2})(HG=P.TextDocumentSyncKind||(P.TextDocumentSyncKind={}));var KG;(function(t){t.method="textDocument/didOpen",t.messageDirection=K.MessageDirection.clientToServer,t.type=new K.ProtocolNotificationType(t.method)})(KG=P.DidOpenTextDocumentNotification||(P.DidOpenTextDocumentNotification={}));var BG;(function(t){function e(n){let i=n;return i!=null&&typeof i.text=="string"&&i.range!==void 0&&(i.rangeLength===void 0||typeof i.rangeLength=="number")}t.isIncremental=e;function r(n){let i=n;return i!=null&&typeof i.text=="string"&&i.range===void 0&&i.rangeLength===void 0}t.isFull=r})(BG=P.TextDocumentContentChangeEvent||(P.TextDocumentContentChangeEvent={}));var VG;(function(t){t.method="textDocument/didChange",t.messageDirection=K.MessageDirection.clientToServer,t.type=new K.ProtocolNotificationType(t.method)})(VG=P.DidChangeTextDocumentNotification||(P.DidChangeTextDocumentNotification={}));var zG;(function(t){t.method="textDocument/didClose",t.messageDirection=K.MessageDirection.clientToServer,t.type=new K.ProtocolNotificationType(t.method)})(zG=P.DidCloseTextDocumentNotification||(P.DidCloseTextDocumentNotification={}));var YG;(function(t){t.method="textDocument/didSave",t.messageDirection=K.MessageDirection.clientToServer,t.type=new K.ProtocolNotificationType(t.method)})(YG=P.DidSaveTextDocumentNotification||(P.DidSaveTextDocumentNotification={}));var XG;(function(t){t.Manual=1,t.AfterDelay=2,t.FocusOut=3})(XG=P.TextDocumentSaveReason||(P.TextDocumentSaveReason={}));var JG;(function(t){t.method="textDocument/willSave",t.messageDirection=K.MessageDirection.clientToServer,t.type=new K.ProtocolNotificationType(t.method)})(JG=P.WillSaveTextDocumentNotification||(P.WillSaveTextDocumentNotification={}));var QG;(function(t){t.method="textDocument/willSaveWaitUntil",t.messageDirection=K.MessageDirection.clientToServer,t.type=new K.ProtocolRequestType(t.method)})(QG=P.WillSaveTextDocumentWaitUntilRequest||(P.WillSaveTextDocumentWaitUntilRequest={}));var ZG;(function(t){t.method="workspace/didChangeWatchedFiles",t.messageDirection=K.MessageDirection.clientToServer,t.type=new K.ProtocolNotificationType(t.method)})(ZG=P.DidChangeWatchedFilesNotification||(P.DidChangeWatchedFilesNotification={}));var eW;(function(t){t.Created=1,t.Changed=2,t.Deleted=3})(eW=P.FileChangeType||(P.FileChangeType={}));var tW;(function(t){function e(r){let n=r;return hr.objectLiteral(n)&&(N0.URI.is(n.baseUri)||N0.WorkspaceFolder.is(n.baseUri))&&hr.string(n.pattern)}t.is=e})(tW=P.RelativePattern||(P.RelativePattern={}));var rW;(function(t){t.Create=1,t.Change=2,t.Delete=4})(rW=P.WatchKind||(P.WatchKind={}));var nW;(function(t){t.method="textDocument/publishDiagnostics",t.messageDirection=K.MessageDirection.serverToClient,t.type=new K.ProtocolNotificationType(t.method)})(nW=P.PublishDiagnosticsNotification||(P.PublishDiagnosticsNotification={}));var iW;(function(t){t.Invoked=1,t.TriggerCharacter=2,t.TriggerForIncompleteCompletions=3})(iW=P.CompletionTriggerKind||(P.CompletionTriggerKind={}));var oW;(function(t){t.method="textDocument/completion",t.messageDirection=K.MessageDirection.clientToServer,t.type=new K.ProtocolRequestType(t.method)})(oW=P.CompletionRequest||(P.CompletionRequest={}));var aW;(function(t){t.method="completionItem/resolve",t.messageDirection=K.MessageDirection.clientToServer,t.type=new K.ProtocolRequestType(t.method)})(aW=P.CompletionResolveRequest||(P.CompletionResolveRequest={}));var sW;(function(t){t.method="textDocument/hover",t.messageDirection=K.MessageDirection.clientToServer,t.type=new K.ProtocolRequestType(t.method)})(sW=P.HoverRequest||(P.HoverRequest={}));var uW;(function(t){t.Invoked=1,t.TriggerCharacter=2,t.ContentChange=3})(uW=P.SignatureHelpTriggerKind||(P.SignatureHelpTriggerKind={}));var cW;(function(t){t.method="textDocument/signatureHelp",t.messageDirection=K.MessageDirection.clientToServer,t.type=new K.ProtocolRequestType(t.method)})(cW=P.SignatureHelpRequest||(P.SignatureHelpRequest={}));var lW;(function(t){t.method="textDocument/definition",t.messageDirection=K.MessageDirection.clientToServer,t.type=new K.ProtocolRequestType(t.method)})(lW=P.DefinitionRequest||(P.DefinitionRequest={}));var dW;(function(t){t.method="textDocument/references",t.messageDirection=K.MessageDirection.clientToServer,t.type=new K.ProtocolRequestType(t.method)})(dW=P.ReferencesRequest||(P.ReferencesRequest={}));var fW;(function(t){t.method="textDocument/documentHighlight",t.messageDirection=K.MessageDirection.clientToServer,t.type=new K.ProtocolRequestType(t.method)})(fW=P.DocumentHighlightRequest||(P.DocumentHighlightRequest={}));var pW;(function(t){t.method="textDocument/documentSymbol",t.messageDirection=K.MessageDirection.clientToServer,t.type=new K.ProtocolRequestType(t.method)})(pW=P.DocumentSymbolRequest||(P.DocumentSymbolRequest={}));var hW;(function(t){t.method="textDocument/codeAction",t.messageDirection=K.MessageDirection.clientToServer,t.type=new K.ProtocolRequestType(t.method)})(hW=P.CodeActionRequest||(P.CodeActionRequest={}));var mW;(function(t){t.method="codeAction/resolve",t.messageDirection=K.MessageDirection.clientToServer,t.type=new K.ProtocolRequestType(t.method)})(mW=P.CodeActionResolveRequest||(P.CodeActionResolveRequest={}));var gW;(function(t){t.method="workspace/symbol",t.messageDirection=K.MessageDirection.clientToServer,t.type=new K.ProtocolRequestType(t.method)})(gW=P.WorkspaceSymbolRequest||(P.WorkspaceSymbolRequest={}));var yW;(function(t){t.method="workspaceSymbol/resolve",t.messageDirection=K.MessageDirection.clientToServer,t.type=new K.ProtocolRequestType(t.method)})(yW=P.WorkspaceSymbolResolveRequest||(P.WorkspaceSymbolResolveRequest={}));var vW;(function(t){t.method="textDocument/codeLens",t.messageDirection=K.MessageDirection.clientToServer,t.type=new K.ProtocolRequestType(t.method)})(vW=P.CodeLensRequest||(P.CodeLensRequest={}));var _W;(function(t){t.method="codeLens/resolve",t.messageDirection=K.MessageDirection.clientToServer,t.type=new K.ProtocolRequestType(t.method)})(_W=P.CodeLensResolveRequest||(P.CodeLensResolveRequest={}));var TW;(function(t){t.method="workspace/codeLens/refresh",t.messageDirection=K.MessageDirection.serverToClient,t.type=new K.ProtocolRequestType0(t.method)})(TW=P.CodeLensRefreshRequest||(P.CodeLensRefreshRequest={}));var RW;(function(t){t.method="textDocument/documentLink",t.messageDirection=K.MessageDirection.clientToServer,t.type=new K.ProtocolRequestType(t.method)})(RW=P.DocumentLinkRequest||(P.DocumentLinkRequest={}));var bW;(function(t){t.method="documentLink/resolve",t.messageDirection=K.MessageDirection.clientToServer,t.type=new K.ProtocolRequestType(t.method)})(bW=P.DocumentLinkResolveRequest||(P.DocumentLinkResolveRequest={}));var CW;(function(t){t.method="textDocument/formatting",t.messageDirection=K.MessageDirection.clientToServer,t.type=new K.ProtocolRequestType(t.method)})(CW=P.DocumentFormattingRequest||(P.DocumentFormattingRequest={}));var PW;(function(t){t.method="textDocument/rangeFormatting",t.messageDirection=K.MessageDirection.clientToServer,t.type=new K.ProtocolRequestType(t.method)})(PW=P.DocumentRangeFormattingRequest||(P.DocumentRangeFormattingRequest={}));var AW;(function(t){t.method="textDocument/onTypeFormatting",t.messageDirection=K.MessageDirection.clientToServer,t.type=new K.ProtocolRequestType(t.method)})(AW=P.DocumentOnTypeFormattingRequest||(P.DocumentOnTypeFormattingRequest={}));var SW;(function(t){t.Identifier=1})(SW=P.PrepareSupportDefaultBehavior||(P.PrepareSupportDefaultBehavior={}));var EW;(function(t){t.method="textDocument/rename",t.messageDirection=K.MessageDirection.clientToServer,t.type=new K.ProtocolRequestType(t.method)})(EW=P.RenameRequest||(P.RenameRequest={}));var kW;(function(t){t.method="textDocument/prepareRename",t.messageDirection=K.MessageDirection.clientToServer,t.type=new K.ProtocolRequestType(t.method)})(kW=P.PrepareRenameRequest||(P.PrepareRenameRequest={}));var NW;(function(t){t.method="workspace/executeCommand",t.messageDirection=K.MessageDirection.clientToServer,t.type=new K.ProtocolRequestType(t.method)})(NW=P.ExecuteCommandRequest||(P.ExecuteCommandRequest={}));var wW;(function(t){t.method="workspace/applyEdit",t.messageDirection=K.MessageDirection.serverToClient,t.type=new K.ProtocolRequestType("workspace/applyEdit")})(wW=P.ApplyWorkspaceEditRequest||(P.ApplyWorkspaceEditRequest={}))});var F0=h(hd=>{"use strict";Object.defineProperty(hd,"__esModule",{value:!0});hd.createProtocolConnection=void 0;var $0=va();function DW(t,e,r,n){return $0.ConnectionStrategy.is(n)&&(n={connectionStrategy:n}),(0,$0.createMessageConnection)(t,e,r,n)}hd.createProtocolConnection=DW});var j0=h(Lr=>{"use strict";var OW=Lr&&Lr.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var i=Object.getOwnPropertyDescriptor(e,r);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,i)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),md=Lr&&Lr.__exportStar||function(t,e){for(var r in t)r!=="default"&&!Object.prototype.hasOwnProperty.call(e,r)&&OW(e,t,r)};Object.defineProperty(Lr,"__esModule",{value:!0});Lr.LSPErrorCodes=Lr.createProtocolConnection=void 0;md(va(),Lr);md(sd(),Lr);md(At(),Lr);md(M0(),Lr);var qW=F0();Object.defineProperty(Lr,"createProtocolConnection",{enumerable:!0,get:function(){return qW.createProtocolConnection}});var IW;(function(t){t.lspReservedErrorRangeStart=-32899,t.RequestFailed=-32803,t.ServerCancelled=-32802,t.ContentModified=-32801,t.RequestCancelled=-32800,t.lspReservedErrorRangeEnd=-32800})(IW=Lr.LSPErrorCodes||(Lr.LSPErrorCodes={}))});var zt=h(Ti=>{"use strict";var xW=Ti&&Ti.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var i=Object.getOwnPropertyDescriptor(e,r);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,i)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),U0=Ti&&Ti.__exportStar||function(t,e){for(var r in t)r!=="default"&&!Object.prototype.hasOwnProperty.call(e,r)&&xW(e,t,r)};Object.defineProperty(Ti,"__esModule",{value:!0});Ti.createProtocolConnection=void 0;var LW=Cg();U0(Cg(),Ti);U0(j0(),Ti);function MW(t,e,r,n){return(0,LW.createMessageConnection)(t,e,r,n)}Ti.createProtocolConnection=MW});var Lg=h(xo=>{"use strict";Object.defineProperty(xo,"__esModule",{value:!0});xo.SemanticTokensBuilder=xo.SemanticTokensDiff=xo.SemanticTokensFeature=void 0;var gd=zt(),$W=t=>class extends t{get semanticTokens(){return{refresh:()=>this.connection.sendRequest(gd.SemanticTokensRefreshRequest.type),on:e=>{let r=gd.SemanticTokensRequest.type;return this.connection.onRequest(r,(n,i)=>e(n,i,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))},onDelta:e=>{let r=gd.SemanticTokensDeltaRequest.type;return this.connection.onRequest(r,(n,i)=>e(n,i,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))},onRange:e=>{let r=gd.SemanticTokensRangeRequest.type;return this.connection.onRequest(r,(n,i)=>e(n,i,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))}}}};xo.SemanticTokensFeature=$W;var yd=class{constructor(e,r){this.originalSequence=e,this.modifiedSequence=r}computeDiff(){let e=this.originalSequence.length,r=this.modifiedSequence.length,n=0;for(;n<r&&n<e&&this.originalSequence[n]===this.modifiedSequence[n];)n++;if(n<r&&n<e){let i=e-1,o=r-1;for(;i>=n&&o>=n&&this.originalSequence[i]===this.modifiedSequence[o];)i--,o--;(i<n||o<n)&&(i++,o++);let a=i-n+1,s=this.modifiedSequence.slice(n,o+1);return s.length===1&&s[0]===this.originalSequence[i]?[{start:n,deleteCount:a-1}]:[{start:n,deleteCount:a,data:s}]}else return n<r?[{start:n,deleteCount:0,data:this.modifiedSequence.slice(n)}]:n<e?[{start:n,deleteCount:e-n}]:[]}};xo.SemanticTokensDiff=yd;var xg=class{constructor(){this._prevData=void 0,this.initialize()}initialize(){this._id=Date.now(),this._prevLine=0,this._prevChar=0,this._data=[],this._dataLen=0}push(e,r,n,i,o){let a=e,s=r;this._dataLen>0&&(a-=this._prevLine,a===0&&(s-=this._prevChar)),this._data[this._dataLen++]=a,this._data[this._dataLen++]=s,this._data[this._dataLen++]=n,this._data[this._dataLen++]=i,this._data[this._dataLen++]=o,this._prevLine=e,this._prevChar=r}get id(){return this._id.toString()}previousResult(e){this.id===e&&(this._prevData=this._data),this.initialize()}build(){return this._prevData=void 0,{resultId:this.id,data:this._data}}canBuildEdits(){return this._prevData!==void 0}buildEdits(){return this._prevData!==void 0?{resultId:this.id,edits:new yd(this._prevData,this._data).computeDiff()}:this.build()}};xo.SemanticTokensBuilder=xg});var $g=h(vd=>{"use strict";Object.defineProperty(vd,"__esModule",{value:!0});vd.TextDocuments=void 0;var Ta=zt(),Mg=class{constructor(e){this._configuration=e,this._syncedDocuments=new Map,this._onDidChangeContent=new Ta.Emitter,this._onDidOpen=new Ta.Emitter,this._onDidClose=new Ta.Emitter,this._onDidSave=new Ta.Emitter,this._onWillSave=new Ta.Emitter}get onDidOpen(){return this._onDidOpen.event}get onDidChangeContent(){return this._onDidChangeContent.event}get onWillSave(){return this._onWillSave.event}onWillSaveWaitUntil(e){this._willSaveWaitUntil=e}get onDidSave(){return this._onDidSave.event}get onDidClose(){return this._onDidClose.event}get(e){return this._syncedDocuments.get(e)}all(){return Array.from(this._syncedDocuments.values())}keys(){return Array.from(this._syncedDocuments.keys())}listen(e){e.__textDocumentSync=Ta.TextDocumentSyncKind.Incremental;let r=[];return r.push(e.onDidOpenTextDocument(n=>{let i=n.textDocument,o=this._configuration.create(i.uri,i.languageId,i.version,i.text);this._syncedDocuments.set(i.uri,o);let a=Object.freeze({document:o});this._onDidOpen.fire(a),this._onDidChangeContent.fire(a)})),r.push(e.onDidChangeTextDocument(n=>{let i=n.textDocument,o=n.contentChanges;if(o.length===0)return;let{version:a}=i;if(a==null)throw new Error(`Received document change event for ${i.uri} without valid version identifier`);let s=this._syncedDocuments.get(i.uri);s!==void 0&&(s=this._configuration.update(s,o,a),this._syncedDocuments.set(i.uri,s),this._onDidChangeContent.fire(Object.freeze({document:s})))})),r.push(e.onDidCloseTextDocument(n=>{let i=this._syncedDocuments.get(n.textDocument.uri);i!==void 0&&(this._syncedDocuments.delete(n.textDocument.uri),this._onDidClose.fire(Object.freeze({document:i})))})),r.push(e.onWillSaveTextDocument(n=>{let i=this._syncedDocuments.get(n.textDocument.uri);i!==void 0&&this._onWillSave.fire(Object.freeze({document:i,reason:n.reason}))})),r.push(e.onWillSaveTextDocumentWaitUntil((n,i)=>{let o=this._syncedDocuments.get(n.textDocument.uri);return o!==void 0&&this._willSaveWaitUntil?this._willSaveWaitUntil(Object.freeze({document:o,reason:n.reason}),i):[]})),r.push(e.onDidSaveTextDocument(n=>{let i=this._syncedDocuments.get(n.textDocument.uri);i!==void 0&&this._onDidSave.fire(Object.freeze({document:i}))})),Ta.Disposable.create(()=>{r.forEach(n=>n.dispose())})}};vd.TextDocuments=Mg});var jg=h(fs=>{"use strict";Object.defineProperty(fs,"__esModule",{value:!0});fs.NotebookDocuments=fs.NotebookSyncFeature=void 0;var _n=zt(),G0=$g(),FW=t=>class extends t{get synchronization(){return{onDidOpenNotebookDocument:e=>this.connection.onNotification(_n.DidOpenNotebookDocumentNotification.type,r=>{e(r)}),onDidChangeNotebookDocument:e=>this.connection.onNotification(_n.DidChangeNotebookDocumentNotification.type,r=>{e(r)}),onDidSaveNotebookDocument:e=>this.connection.onNotification(_n.DidSaveNotebookDocumentNotification.type,r=>{e(r)}),onDidCloseNotebookDocument:e=>this.connection.onNotification(_n.DidCloseNotebookDocumentNotification.type,r=>{e(r)})}}};fs.NotebookSyncFeature=FW;var _d=class t{onDidOpenTextDocument(e){return this.openHandler=e,_n.Disposable.create(()=>{this.openHandler=void 0})}openTextDocument(e){this.openHandler&&this.openHandler(e)}onDidChangeTextDocument(e){return this.changeHandler=e,_n.Disposable.create(()=>{this.changeHandler=e})}changeTextDocument(e){this.changeHandler&&this.changeHandler(e)}onDidCloseTextDocument(e){return this.closeHandler=e,_n.Disposable.create(()=>{this.closeHandler=void 0})}closeTextDocument(e){this.closeHandler&&this.closeHandler(e)}onWillSaveTextDocument(){return t.NULL_DISPOSE}onWillSaveTextDocumentWaitUntil(){return t.NULL_DISPOSE}onDidSaveTextDocument(){return t.NULL_DISPOSE}};_d.NULL_DISPOSE=Object.freeze({dispose:()=>{}});var Fg=class{constructor(e){e instanceof G0.TextDocuments?this._cellTextDocuments=e:this._cellTextDocuments=new G0.TextDocuments(e),this.notebookDocuments=new Map,this.notebookCellMap=new Map,this._onDidOpen=new _n.Emitter,this._onDidChange=new _n.Emitter,this._onDidSave=new _n.Emitter,this._onDidClose=new _n.Emitter}get cellTextDocuments(){return this._cellTextDocuments}getCellTextDocument(e){return this._cellTextDocuments.get(e.document)}getNotebookDocument(e){return this.notebookDocuments.get(e)}getNotebookCell(e){let r=this.notebookCellMap.get(e);return r&&r[0]}findNotebookDocumentForCell(e){let r=typeof e=="string"?e:e.document,n=this.notebookCellMap.get(r);return n&&n[1]}get onDidOpen(){return this._onDidOpen.event}get onDidSave(){return this._onDidSave.event}get onDidChange(){return this._onDidChange.event}get onDidClose(){return this._onDidClose.event}listen(e){let r=new _d,n=[];return n.push(this.cellTextDocuments.listen(r)),n.push(e.notebooks.synchronization.onDidOpenNotebookDocument(i=>{this.notebookDocuments.set(i.notebookDocument.uri,i.notebookDocument);for(let o of i.cellTextDocuments)r.openTextDocument({textDocument:o});this.updateCellMap(i.notebookDocument),this._onDidOpen.fire(i.notebookDocument)})),n.push(e.notebooks.synchronization.onDidChangeNotebookDocument(i=>{let o=this.notebookDocuments.get(i.notebookDocument.uri);if(o===void 0)return;o.version=i.notebookDocument.version;let a=o.metadata,s=!1,u=i.change;u.metadata!==void 0&&(s=!0,o.metadata=u.metadata);let d=[],p=[],m=[],y=[];if(u.cells!==void 0){let N=u.cells;if(N.structure!==void 0){let C=N.structure.array;if(o.cells.splice(C.start,C.deleteCount,...C.cells!==void 0?C.cells:[]),N.structure.didOpen!==void 0)for(let E of N.structure.didOpen)r.openTextDocument({textDocument:E}),d.push(E.uri);if(N.structure.didClose)for(let E of N.structure.didClose)r.closeTextDocument({textDocument:E}),p.push(E.uri)}if(N.data!==void 0){let C=new Map(N.data.map(E=>[E.document,E]));for(let E=0;E<=o.cells.length;E++){let L=C.get(o.cells[E].document);if(L!==void 0){let U=o.cells.splice(E,1,L);if(m.push({old:U[0],new:L}),C.delete(L.document),C.size===0)break}}}if(N.textContent!==void 0)for(let C of N.textContent)r.changeTextDocument({textDocument:C.document,contentChanges:C.changes}),y.push(C.document.uri)}this.updateCellMap(o);let S={notebookDocument:o};s&&(S.metadata={old:a,new:o.metadata});let _=[];for(let N of d)_.push(this.getNotebookCell(N));let w=[];for(let N of p)w.push(this.getNotebookCell(N));let k=[];for(let N of y)k.push(this.getNotebookCell(N));(_.length>0||w.length>0||m.length>0||k.length>0)&&(S.cells={added:_,removed:w,changed:{data:m,textContent:k}}),(S.metadata!==void 0||S.cells!==void 0)&&this._onDidChange.fire(S)})),n.push(e.notebooks.synchronization.onDidSaveNotebookDocument(i=>{let o=this.notebookDocuments.get(i.notebookDocument.uri);o!==void 0&&this._onDidSave.fire(o)})),n.push(e.notebooks.synchronization.onDidCloseNotebookDocument(i=>{let o=this.notebookDocuments.get(i.notebookDocument.uri);if(o!==void 0){this._onDidClose.fire(o);for(let a of i.cellTextDocuments)r.closeTextDocument({textDocument:a});this.notebookDocuments.delete(i.notebookDocument.uri);for(let a of o.cells)this.notebookCellMap.delete(a.document)}})),_n.Disposable.create(()=>{n.forEach(i=>i.dispose())})}updateCellMap(e){for(let r of e.cells)this.notebookCellMap.set(r.document,[r,e])}};fs.NotebookDocuments=Fg});var Ug=h(Lt=>{"use strict";Object.defineProperty(Lt,"__esModule",{value:!0});Lt.thenable=Lt.typedArray=Lt.stringArray=Lt.array=Lt.func=Lt.error=Lt.number=Lt.string=Lt.boolean=void 0;function jW(t){return t===!0||t===!1}Lt.boolean=jW;function W0(t){return typeof t=="string"||t instanceof String}Lt.string=W0;function UW(t){return typeof t=="number"||t instanceof Number}Lt.number=UW;function GW(t){return t instanceof Error}Lt.error=GW;function H0(t){return typeof t=="function"}Lt.func=H0;function K0(t){return Array.isArray(t)}Lt.array=K0;function WW(t){return K0(t)&&t.every(e=>W0(e))}Lt.stringArray=WW;function HW(t,e){return Array.isArray(t)&&t.every(e)}Lt.typedArray=HW;function KW(t){return t&&H0(t.then)}Lt.thenable=KW});var Gg=h(Tn=>{"use strict";Object.defineProperty(Tn,"__esModule",{value:!0});Tn.generateUuid=Tn.parse=Tn.isUUID=Tn.v4=Tn.empty=void 0;var gc=class{constructor(e){this._value=e}asHex(){return this._value}equals(e){return this.asHex()===e.asHex()}},yc=class t extends gc{constructor(){super([t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),"-",t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),"-","4",t._randomHex(),t._randomHex(),t._randomHex(),"-",t._oneOf(t._timeHighBits),t._randomHex(),t._randomHex(),t._randomHex(),"-",t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex()].join(""))}static _oneOf(e){return e[Math.floor(e.length*Math.random())]}static _randomHex(){return t._oneOf(t._chars)}};yc._chars=["0","1","2","3","4","5","6","6","7","8","9","a","b","c","d","e","f"];yc._timeHighBits=["8","9","a","b"];Tn.empty=new gc("00000000-0000-0000-0000-000000000000");function B0(){return new yc}Tn.v4=B0;var BW=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;function V0(t){return BW.test(t)}Tn.isUUID=V0;function VW(t){if(!V0(t))throw new Error("invalid uuid");return new gc(t)}Tn.parse=VW;function zW(){return B0().asHex()}Tn.generateUuid=zW});var z0=h(Mo=>{"use strict";Object.defineProperty(Mo,"__esModule",{value:!0});Mo.attachPartialResult=Mo.ProgressFeature=Mo.attachWorkDone=void 0;var Lo=zt(),YW=Gg(),Ra=class t{constructor(e,r){this._connection=e,this._token=r,t.Instances.set(this._token,this)}begin(e,r,n,i){let o={kind:"begin",title:e,percentage:r,message:n,cancellable:i};this._connection.sendProgress(Lo.WorkDoneProgress.type,this._token,o)}report(e,r){let n={kind:"report"};typeof e=="number"?(n.percentage=e,r!==void 0&&(n.message=r)):n.message=e,this._connection.sendProgress(Lo.WorkDoneProgress.type,this._token,n)}done(){t.Instances.delete(this._token),this._connection.sendProgress(Lo.WorkDoneProgress.type,this._token,{kind:"end"})}};Ra.Instances=new Map;var Td=class extends Ra{constructor(e,r){super(e,r),this._source=new Lo.CancellationTokenSource}get token(){return this._source.token}done(){this._source.dispose(),super.done()}cancel(){this._source.cancel()}},vc=class{constructor(){}begin(){}report(){}done(){}},Rd=class extends vc{constructor(){super(),this._source=new Lo.CancellationTokenSource}get token(){return this._source.token}done(){this._source.dispose()}cancel(){this._source.cancel()}};function XW(t,e){if(e===void 0||e.workDoneToken===void 0)return new vc;let r=e.workDoneToken;return delete e.workDoneToken,new Ra(t,r)}Mo.attachWorkDone=XW;var JW=t=>class extends t{constructor(){super(),this._progressSupported=!1}initialize(e){super.initialize(e),e?.window?.workDoneProgress===!0&&(this._progressSupported=!0,this.connection.onNotification(Lo.WorkDoneProgressCancelNotification.type,r=>{let n=Ra.Instances.get(r.token);(n instanceof Td||n instanceof Rd)&&n.cancel()}))}attachWorkDoneProgress(e){return e===void 0?new vc:new Ra(this.connection,e)}createWorkDoneProgress(){if(this._progressSupported){let e=(0,YW.generateUuid)();return this.connection.sendRequest(Lo.WorkDoneProgressCreateRequest.type,{token:e}).then(()=>new Td(this.connection,e))}else return Promise.resolve(new Rd)}};Mo.ProgressFeature=JW;var Wg;(function(t){t.type=new Lo.ProgressType})(Wg||(Wg={}));var Hg=class{constructor(e,r){this._connection=e,this._token=r}report(e){this._connection.sendProgress(Wg.type,this._token,e)}};function QW(t,e){if(e===void 0||e.partialResultToken===void 0)return;let r=e.partialResultToken;return delete e.partialResultToken,new Hg(t,r)}Mo.attachPartialResult=QW});var Y0=h(bd=>{"use strict";Object.defineProperty(bd,"__esModule",{value:!0});bd.ConfigurationFeature=void 0;var ZW=zt(),eH=Ug(),tH=t=>class extends t{getConfiguration(e){return e?eH.string(e)?this._getConfiguration({section:e}):this._getConfiguration(e):this._getConfiguration({})}_getConfiguration(e){let r={items:Array.isArray(e)?e:[e]};return this.connection.sendRequest(ZW.ConfigurationRequest.type,r).then(n=>Array.isArray(n)?Array.isArray(e)?n:n[0]:Array.isArray(e)?[]:null)}};bd.ConfigurationFeature=tH});var X0=h(Pd=>{"use strict";Object.defineProperty(Pd,"__esModule",{value:!0});Pd.WorkspaceFoldersFeature=void 0;var Cd=zt(),rH=t=>class extends t{constructor(){super(),this._notificationIsAutoRegistered=!1}initialize(e){super.initialize(e);let r=e.workspace;r&&r.workspaceFolders&&(this._onDidChangeWorkspaceFolders=new Cd.Emitter,this.connection.onNotification(Cd.DidChangeWorkspaceFoldersNotification.type,n=>{this._onDidChangeWorkspaceFolders.fire(n.event)}))}fillServerCapabilities(e){super.fillServerCapabilities(e);let r=e.workspace?.workspaceFolders?.changeNotifications;this._notificationIsAutoRegistered=r===!0||typeof r=="string"}getWorkspaceFolders(){return this.connection.sendRequest(Cd.WorkspaceFoldersRequest.type)}get onDidChangeWorkspaceFolders(){if(!this._onDidChangeWorkspaceFolders)throw new Error("Client doesn't support sending workspace folder change events.");return!this._notificationIsAutoRegistered&&!this._unregistration&&(this._unregistration=this.connection.client.register(Cd.DidChangeWorkspaceFoldersNotification.type)),this._onDidChangeWorkspaceFolders.event}};Pd.WorkspaceFoldersFeature=rH});var J0=h(Ad=>{"use strict";Object.defineProperty(Ad,"__esModule",{value:!0});Ad.CallHierarchyFeature=void 0;var Kg=zt(),nH=t=>class extends t{get callHierarchy(){return{onPrepare:e=>this.connection.onRequest(Kg.CallHierarchyPrepareRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r),void 0)),onIncomingCalls:e=>{let r=Kg.CallHierarchyIncomingCallsRequest.type;return this.connection.onRequest(r,(n,i)=>e(n,i,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))},onOutgoingCalls:e=>{let r=Kg.CallHierarchyOutgoingCallsRequest.type;return this.connection.onRequest(r,(n,i)=>e(n,i,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))}}}};Ad.CallHierarchyFeature=nH});var Q0=h(Sd=>{"use strict";Object.defineProperty(Sd,"__esModule",{value:!0});Sd.ShowDocumentFeature=void 0;var iH=zt(),oH=t=>class extends t{showDocument(e){return this.connection.sendRequest(iH.ShowDocumentRequest.type,e)}};Sd.ShowDocumentFeature=oH});var Z0=h(Ed=>{"use strict";Object.defineProperty(Ed,"__esModule",{value:!0});Ed.FileOperationsFeature=void 0;var ps=zt(),aH=t=>class extends t{onDidCreateFiles(e){return this.connection.onNotification(ps.DidCreateFilesNotification.type,r=>{e(r)})}onDidRenameFiles(e){return this.connection.onNotification(ps.DidRenameFilesNotification.type,r=>{e(r)})}onDidDeleteFiles(e){return this.connection.onNotification(ps.DidDeleteFilesNotification.type,r=>{e(r)})}onWillCreateFiles(e){return this.connection.onRequest(ps.WillCreateFilesRequest.type,(r,n)=>e(r,n))}onWillRenameFiles(e){return this.connection.onRequest(ps.WillRenameFilesRequest.type,(r,n)=>e(r,n))}onWillDeleteFiles(e){return this.connection.onRequest(ps.WillDeleteFilesRequest.type,(r,n)=>e(r,n))}};Ed.FileOperationsFeature=aH});var eP=h(kd=>{"use strict";Object.defineProperty(kd,"__esModule",{value:!0});kd.LinkedEditingRangeFeature=void 0;var sH=zt(),uH=t=>class extends t{onLinkedEditingRange(e){return this.connection.onRequest(sH.LinkedEditingRangeRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r),void 0))}};kd.LinkedEditingRangeFeature=uH});var tP=h(Nd=>{"use strict";Object.defineProperty(Nd,"__esModule",{value:!0});Nd.TypeHierarchyFeature=void 0;var Bg=zt(),cH=t=>class extends t{get typeHierarchy(){return{onPrepare:e=>this.connection.onRequest(Bg.TypeHierarchyPrepareRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r),void 0)),onSupertypes:e=>{let r=Bg.TypeHierarchySupertypesRequest.type;return this.connection.onRequest(r,(n,i)=>e(n,i,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))},onSubtypes:e=>{let r=Bg.TypeHierarchySubtypesRequest.type;return this.connection.onRequest(r,(n,i)=>e(n,i,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))}}}};Nd.TypeHierarchyFeature=cH});var nP=h(wd=>{"use strict";Object.defineProperty(wd,"__esModule",{value:!0});wd.InlineValueFeature=void 0;var rP=zt(),lH=t=>class extends t{get inlineValue(){return{refresh:()=>this.connection.sendRequest(rP.InlineValueRefreshRequest.type),on:e=>this.connection.onRequest(rP.InlineValueRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r)))}}};wd.InlineValueFeature=lH});var iP=h(Dd=>{"use strict";Object.defineProperty(Dd,"__esModule",{value:!0});Dd.InlayHintFeature=void 0;var Vg=zt(),dH=t=>class extends t{get inlayHint(){return{refresh:()=>this.connection.sendRequest(Vg.InlayHintRefreshRequest.type),on:e=>this.connection.onRequest(Vg.InlayHintRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r))),resolve:e=>this.connection.onRequest(Vg.InlayHintResolveRequest.type,(r,n)=>e(r,n))}}};Dd.InlayHintFeature=dH});var oP=h(Od=>{"use strict";Object.defineProperty(Od,"__esModule",{value:!0});Od.DiagnosticFeature=void 0;var _c=zt(),fH=t=>class extends t{get diagnostics(){return{refresh:()=>this.connection.sendRequest(_c.DiagnosticRefreshRequest.type),on:e=>this.connection.onRequest(_c.DocumentDiagnosticRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r),this.attachPartialResultProgress(_c.DocumentDiagnosticRequest.partialResult,r))),onWorkspace:e=>this.connection.onRequest(_c.WorkspaceDiagnosticRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r),this.attachPartialResultProgress(_c.WorkspaceDiagnosticRequest.partialResult,r)))}}};Od.DiagnosticFeature=fH});var aP=h(qd=>{"use strict";Object.defineProperty(qd,"__esModule",{value:!0});qd.MonikerFeature=void 0;var pH=zt(),hH=t=>class extends t{get moniker(){return{on:e=>{let r=pH.MonikerRequest.type;return this.connection.onRequest(r,(n,i)=>e(n,i,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))}}}};qd.MonikerFeature=hH});var _P=h(Ie=>{"use strict";Object.defineProperty(Ie,"__esModule",{value:!0});Ie.createConnection=Ie.combineFeatures=Ie.combineNotebooksFeatures=Ie.combineLanguagesFeatures=Ie.combineWorkspaceFeatures=Ie.combineWindowFeatures=Ie.combineClientFeatures=Ie.combineTracerFeatures=Ie.combineTelemetryFeatures=Ie.combineConsoleFeatures=Ie._NotebooksImpl=Ie._LanguagesImpl=Ie.BulkUnregistration=Ie.BulkRegistration=Ie.ErrorMessageTracker=void 0;var X=zt(),Rn=Ug(),Yg=Gg(),be=z0(),mH=Y0(),gH=X0(),yH=J0(),vH=Lg(),_H=Q0(),TH=Z0(),RH=eP(),bH=tP(),CH=nP(),PH=iP(),AH=oP(),SH=jg(),EH=aP();function zg(t){if(t!==null)return t}var Xg=class{constructor(){this._messages=Object.create(null)}add(e){let r=this._messages[e];r||(r=0),r++,this._messages[e]=r}sendErrors(e){Object.keys(this._messages).forEach(r=>{e.window.showErrorMessage(r)})}};Ie.ErrorMessageTracker=Xg;var Id=class{constructor(){}rawAttach(e){this._rawConnection=e}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}fillServerCapabilities(e){}initialize(e){}error(e){this.send(X.MessageType.Error,e)}warn(e){this.send(X.MessageType.Warning,e)}info(e){this.send(X.MessageType.Info,e)}log(e){this.send(X.MessageType.Log,e)}send(e,r){this._rawConnection&&this._rawConnection.sendNotification(X.LogMessageNotification.type,{type:e,message:r}).catch(()=>{(0,X.RAL)().console.error("Sending log message failed")})}},Jg=class{constructor(){}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}showErrorMessage(e,...r){let n={type:X.MessageType.Error,message:e,actions:r};return this.connection.sendRequest(X.ShowMessageRequest.type,n).then(zg)}showWarningMessage(e,...r){let n={type:X.MessageType.Warning,message:e,actions:r};return this.connection.sendRequest(X.ShowMessageRequest.type,n).then(zg)}showInformationMessage(e,...r){let n={type:X.MessageType.Info,message:e,actions:r};return this.connection.sendRequest(X.ShowMessageRequest.type,n).then(zg)}},sP=(0,_H.ShowDocumentFeature)((0,be.ProgressFeature)(Jg)),kH;(function(t){function e(){return new xd}t.create=e})(kH=Ie.BulkRegistration||(Ie.BulkRegistration={}));var xd=class{constructor(){this._registrations=[],this._registered=new Set}add(e,r){let n=Rn.string(e)?e:e.method;if(this._registered.has(n))throw new Error(`${n} is already added to this registration`);let i=Yg.generateUuid();this._registrations.push({id:i,method:n,registerOptions:r||{}}),this._registered.add(n)}asRegistrationParams(){return{registrations:this._registrations}}},NH;(function(t){function e(){return new Tc(void 0,[])}t.create=e})(NH=Ie.BulkUnregistration||(Ie.BulkUnregistration={}));var Tc=class{constructor(e,r){this._connection=e,this._unregistrations=new Map,r.forEach(n=>{this._unregistrations.set(n.method,n)})}get isAttached(){return!!this._connection}attach(e){this._connection=e}add(e){this._unregistrations.set(e.method,e)}dispose(){let e=[];for(let n of this._unregistrations.values())e.push(n);let r={unregisterations:e};this._connection.sendRequest(X.UnregistrationRequest.type,r).catch(()=>{this._connection.console.info("Bulk unregistration failed.")})}disposeSingle(e){let r=Rn.string(e)?e:e.method,n=this._unregistrations.get(r);if(!n)return!1;let i={unregisterations:[n]};return this._connection.sendRequest(X.UnregistrationRequest.type,i).then(()=>{this._unregistrations.delete(r)},o=>{this._connection.console.info(`Un-registering request handler for ${n.id} failed.`)}),!0}},Ld=class{attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}register(e,r,n){return e instanceof xd?this.registerMany(e):e instanceof Tc?this.registerSingle1(e,r,n):this.registerSingle2(e,r)}registerSingle1(e,r,n){let i=Rn.string(r)?r:r.method,o=Yg.generateUuid(),a={registrations:[{id:o,method:i,registerOptions:n||{}}]};return e.isAttached||e.attach(this.connection),this.connection.sendRequest(X.RegistrationRequest.type,a).then(s=>(e.add({id:o,method:i}),e),s=>(this.connection.console.info(`Registering request handler for ${i} failed.`),Promise.reject(s)))}registerSingle2(e,r){let n=Rn.string(e)?e:e.method,i=Yg.generateUuid(),o={registrations:[{id:i,method:n,registerOptions:r||{}}]};return this.connection.sendRequest(X.RegistrationRequest.type,o).then(a=>X.Disposable.create(()=>{this.unregisterSingle(i,n).catch(()=>{this.connection.console.info(`Un-registering capability with id ${i} failed.`)})}),a=>(this.connection.console.info(`Registering request handler for ${n} failed.`),Promise.reject(a)))}unregisterSingle(e,r){let n={unregisterations:[{id:e,method:r}]};return this.connection.sendRequest(X.UnregistrationRequest.type,n).catch(()=>{this.connection.console.info(`Un-registering request handler for ${e} failed.`)})}registerMany(e){let r=e.asRegistrationParams();return this.connection.sendRequest(X.RegistrationRequest.type,r).then(()=>new Tc(this._connection,r.registrations.map(n=>({id:n.id,method:n.method}))),n=>(this.connection.console.info("Bulk registration failed."),Promise.reject(n)))}},Qg=class{constructor(){}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}applyEdit(e){function r(i){return i&&!!i.edit}let n=r(e)?e:{edit:e};return this.connection.sendRequest(X.ApplyWorkspaceEditRequest.type,n)}},uP=(0,TH.FileOperationsFeature)((0,gH.WorkspaceFoldersFeature)((0,mH.ConfigurationFeature)(Qg))),Md=class{constructor(){this._trace=X.Trace.Off}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}set trace(e){this._trace=e}log(e,r){this._trace!==X.Trace.Off&&this.connection.sendNotification(X.LogTraceNotification.type,{message:e,verbose:this._trace===X.Trace.Verbose?r:void 0}).catch(()=>{})}},$d=class{constructor(){}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}logEvent(e){this.connection.sendNotification(X.TelemetryEventNotification.type,e).catch(()=>{this.connection.console.log("Sending TelemetryEventNotification failed")})}},Fd=class{constructor(){}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}attachWorkDoneProgress(e){return(0,be.attachWorkDone)(this.connection,e)}attachPartialResultProgress(e,r){return(0,be.attachPartialResult)(this.connection,r)}};Ie._LanguagesImpl=Fd;var cP=(0,EH.MonikerFeature)((0,AH.DiagnosticFeature)((0,PH.InlayHintFeature)((0,CH.InlineValueFeature)((0,bH.TypeHierarchyFeature)((0,RH.LinkedEditingRangeFeature)((0,vH.SemanticTokensFeature)((0,yH.CallHierarchyFeature)(Fd)))))))),jd=class{constructor(){}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}attachWorkDoneProgress(e){return(0,be.attachWorkDone)(this.connection,e)}attachPartialResultProgress(e,r){return(0,be.attachPartialResult)(this.connection,r)}};Ie._NotebooksImpl=jd;var lP=(0,SH.NotebookSyncFeature)(jd);function dP(t,e){return function(r){return e(t(r))}}Ie.combineConsoleFeatures=dP;function fP(t,e){return function(r){return e(t(r))}}Ie.combineTelemetryFeatures=fP;function pP(t,e){return function(r){return e(t(r))}}Ie.combineTracerFeatures=pP;function hP(t,e){return function(r){return e(t(r))}}Ie.combineClientFeatures=hP;function mP(t,e){return function(r){return e(t(r))}}Ie.combineWindowFeatures=mP;function gP(t,e){return function(r){return e(t(r))}}Ie.combineWorkspaceFeatures=gP;function yP(t,e){return function(r){return e(t(r))}}Ie.combineLanguagesFeatures=yP;function vP(t,e){return function(r){return e(t(r))}}Ie.combineNotebooksFeatures=vP;function wH(t,e){function r(i,o,a){return i&&o?a(i,o):i||o}return{__brand:"features",console:r(t.console,e.console,dP),tracer:r(t.tracer,e.tracer,pP),telemetry:r(t.telemetry,e.telemetry,fP),client:r(t.client,e.client,hP),window:r(t.window,e.window,mP),workspace:r(t.workspace,e.workspace,gP),languages:r(t.languages,e.languages,yP),notebooks:r(t.notebooks,e.notebooks,vP)}}Ie.combineFeatures=wH;function DH(t,e,r){let n=r&&r.console?new(r.console(Id)):new Id,i=t(n);n.rawAttach(i);let o=r&&r.tracer?new(r.tracer(Md)):new Md,a=r&&r.telemetry?new(r.telemetry($d)):new $d,s=r&&r.client?new(r.client(Ld)):new Ld,u=r&&r.window?new(r.window(sP)):new sP,d=r&&r.workspace?new(r.workspace(uP)):new uP,p=r&&r.languages?new(r.languages(cP)):new cP,m=r&&r.notebooks?new(r.notebooks(lP)):new lP,y=[n,o,a,s,u,d,p,m];function S(C){return C instanceof Promise?C:Rn.thenable(C)?new Promise((E,L)=>{C.then(U=>E(U),U=>L(U))}):Promise.resolve(C)}let _,w,k,N={listen:()=>i.listen(),sendRequest:(C,...E)=>i.sendRequest(Rn.string(C)?C:C.method,...E),onRequest:(C,E)=>i.onRequest(C,E),sendNotification:(C,E)=>{let L=Rn.string(C)?C:C.method;return arguments.length===1?i.sendNotification(L):i.sendNotification(L,E)},onNotification:(C,E)=>i.onNotification(C,E),onProgress:i.onProgress,sendProgress:i.sendProgress,onInitialize:C=>(w=C,{dispose:()=>{w=void 0}}),onInitialized:C=>i.onNotification(X.InitializedNotification.type,C),onShutdown:C=>(_=C,{dispose:()=>{_=void 0}}),onExit:C=>(k=C,{dispose:()=>{k=void 0}}),get console(){return n},get telemetry(){return a},get tracer(){return o},get client(){return s},get window(){return u},get workspace(){return d},get languages(){return p},get notebooks(){return m},onDidChangeConfiguration:C=>i.onNotification(X.DidChangeConfigurationNotification.type,C),onDidChangeWatchedFiles:C=>i.onNotification(X.DidChangeWatchedFilesNotification.type,C),__textDocumentSync:void 0,onDidOpenTextDocument:C=>i.onNotification(X.DidOpenTextDocumentNotification.type,C),onDidChangeTextDocument:C=>i.onNotification(X.DidChangeTextDocumentNotification.type,C),onDidCloseTextDocument:C=>i.onNotification(X.DidCloseTextDocumentNotification.type,C),onWillSaveTextDocument:C=>i.onNotification(X.WillSaveTextDocumentNotification.type,C),onWillSaveTextDocumentWaitUntil:C=>i.onRequest(X.WillSaveTextDocumentWaitUntilRequest.type,C),onDidSaveTextDocument:C=>i.onNotification(X.DidSaveTextDocumentNotification.type,C),sendDiagnostics:C=>i.sendNotification(X.PublishDiagnosticsNotification.type,C),onHover:C=>i.onRequest(X.HoverRequest.type,(E,L)=>C(E,L,(0,be.attachWorkDone)(i,E),void 0)),onCompletion:C=>i.onRequest(X.CompletionRequest.type,(E,L)=>C(E,L,(0,be.attachWorkDone)(i,E),(0,be.attachPartialResult)(i,E))),onCompletionResolve:C=>i.onRequest(X.CompletionResolveRequest.type,C),onSignatureHelp:C=>i.onRequest(X.SignatureHelpRequest.type,(E,L)=>C(E,L,(0,be.attachWorkDone)(i,E),void 0)),onDeclaration:C=>i.onRequest(X.DeclarationRequest.type,(E,L)=>C(E,L,(0,be.attachWorkDone)(i,E),(0,be.attachPartialResult)(i,E))),onDefinition:C=>i.onRequest(X.DefinitionRequest.type,(E,L)=>C(E,L,(0,be.attachWorkDone)(i,E),(0,be.attachPartialResult)(i,E))),onTypeDefinition:C=>i.onRequest(X.TypeDefinitionRequest.type,(E,L)=>C(E,L,(0,be.attachWorkDone)(i,E),(0,be.attachPartialResult)(i,E))),onImplementation:C=>i.onRequest(X.ImplementationRequest.type,(E,L)=>C(E,L,(0,be.attachWorkDone)(i,E),(0,be.attachPartialResult)(i,E))),onReferences:C=>i.onRequest(X.ReferencesRequest.type,(E,L)=>C(E,L,(0,be.attachWorkDone)(i,E),(0,be.attachPartialResult)(i,E))),onDocumentHighlight:C=>i.onRequest(X.DocumentHighlightRequest.type,(E,L)=>C(E,L,(0,be.attachWorkDone)(i,E),(0,be.attachPartialResult)(i,E))),onDocumentSymbol:C=>i.onRequest(X.DocumentSymbolRequest.type,(E,L)=>C(E,L,(0,be.attachWorkDone)(i,E),(0,be.attachPartialResult)(i,E))),onWorkspaceSymbol:C=>i.onRequest(X.WorkspaceSymbolRequest.type,(E,L)=>C(E,L,(0,be.attachWorkDone)(i,E),(0,be.attachPartialResult)(i,E))),onWorkspaceSymbolResolve:C=>i.onRequest(X.WorkspaceSymbolResolveRequest.type,C),onCodeAction:C=>i.onRequest(X.CodeActionRequest.type,(E,L)=>C(E,L,(0,be.attachWorkDone)(i,E),(0,be.attachPartialResult)(i,E))),onCodeActionResolve:C=>i.onRequest(X.CodeActionResolveRequest.type,(E,L)=>C(E,L)),onCodeLens:C=>i.onRequest(X.CodeLensRequest.type,(E,L)=>C(E,L,(0,be.attachWorkDone)(i,E),(0,be.attachPartialResult)(i,E))),onCodeLensResolve:C=>i.onRequest(X.CodeLensResolveRequest.type,(E,L)=>C(E,L)),onDocumentFormatting:C=>i.onRequest(X.DocumentFormattingRequest.type,(E,L)=>C(E,L,(0,be.attachWorkDone)(i,E),void 0)),onDocumentRangeFormatting:C=>i.onRequest(X.DocumentRangeFormattingRequest.type,(E,L)=>C(E,L,(0,be.attachWorkDone)(i,E),void 0)),onDocumentOnTypeFormatting:C=>i.onRequest(X.DocumentOnTypeFormattingRequest.type,(E,L)=>C(E,L)),onRenameRequest:C=>i.onRequest(X.RenameRequest.type,(E,L)=>C(E,L,(0,be.attachWorkDone)(i,E),void 0)),onPrepareRename:C=>i.onRequest(X.PrepareRenameRequest.type,(E,L)=>C(E,L)),onDocumentLinks:C=>i.onRequest(X.DocumentLinkRequest.type,(E,L)=>C(E,L,(0,be.attachWorkDone)(i,E),(0,be.attachPartialResult)(i,E))),onDocumentLinkResolve:C=>i.onRequest(X.DocumentLinkResolveRequest.type,(E,L)=>C(E,L)),onDocumentColor:C=>i.onRequest(X.DocumentColorRequest.type,(E,L)=>C(E,L,(0,be.attachWorkDone)(i,E),(0,be.attachPartialResult)(i,E))),onColorPresentation:C=>i.onRequest(X.ColorPresentationRequest.type,(E,L)=>C(E,L,(0,be.attachWorkDone)(i,E),(0,be.attachPartialResult)(i,E))),onFoldingRanges:C=>i.onRequest(X.FoldingRangeRequest.type,(E,L)=>C(E,L,(0,be.attachWorkDone)(i,E),(0,be.attachPartialResult)(i,E))),onSelectionRanges:C=>i.onRequest(X.SelectionRangeRequest.type,(E,L)=>C(E,L,(0,be.attachWorkDone)(i,E),(0,be.attachPartialResult)(i,E))),onExecuteCommand:C=>i.onRequest(X.ExecuteCommandRequest.type,(E,L)=>C(E,L,(0,be.attachWorkDone)(i,E),void 0)),dispose:()=>i.dispose()};for(let C of y)C.attach(N);return i.onRequest(X.InitializeRequest.type,C=>{e.initialize(C),Rn.string(C.trace)&&(o.trace=X.Trace.fromString(C.trace));for(let E of y)E.initialize(C.capabilities);if(w){let E=w(C,new X.CancellationTokenSource().token,(0,be.attachWorkDone)(i,C),void 0);return S(E).then(L=>{if(L instanceof X.ResponseError)return L;let U=L;U||(U={capabilities:{}});let z=U.capabilities;z||(z={},U.capabilities=z),z.textDocumentSync===void 0||z.textDocumentSync===null?z.textDocumentSync=Rn.number(N.__textDocumentSync)?N.__textDocumentSync:X.TextDocumentSyncKind.None:!Rn.number(z.textDocumentSync)&&!Rn.number(z.textDocumentSync.change)&&(z.textDocumentSync.change=Rn.number(N.__textDocumentSync)?N.__textDocumentSync:X.TextDocumentSyncKind.None);for(let te of y)te.fillServerCapabilities(z);return U})}else{let E={capabilities:{textDocumentSync:X.TextDocumentSyncKind.None}};for(let L of y)L.fillServerCapabilities(E.capabilities);return E}}),i.onRequest(X.ShutdownRequest.type,()=>{if(e.shutdownReceived=!0,_)return _(new X.CancellationTokenSource().token)}),i.onNotification(X.ExitNotification.type,()=>{try{k&&k()}finally{e.shutdownReceived?e.exit(0):e.exit(1)}}),i.onNotification(X.SetTraceNotification.type,C=>{o.trace=X.Trace.fromString(C.value)}),N}Ie.createConnection=DH});var Zg=h(mr=>{"use strict";var OH=mr&&mr.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var i=Object.getOwnPropertyDescriptor(e,r);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,i)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),TP=mr&&mr.__exportStar||function(t,e){for(var r in t)r!=="default"&&!Object.prototype.hasOwnProperty.call(e,r)&&OH(e,t,r)};Object.defineProperty(mr,"__esModule",{value:!0});mr.ProposedFeatures=mr.NotebookDocuments=mr.TextDocuments=mr.SemanticTokensBuilder=void 0;var qH=Lg();Object.defineProperty(mr,"SemanticTokensBuilder",{enumerable:!0,get:function(){return qH.SemanticTokensBuilder}});TP(zt(),mr);var IH=$g();Object.defineProperty(mr,"TextDocuments",{enumerable:!0,get:function(){return IH.TextDocuments}});var xH=jg();Object.defineProperty(mr,"NotebookDocuments",{enumerable:!0,get:function(){return xH.NotebookDocuments}});TP(_P(),mr);var LH;(function(t){t.all={__brand:"features"}})(LH=mr.ProposedFeatures||(mr.ProposedFeatures={}))});var bP=h((Oye,RP)=>{"use strict";RP.exports=zt()});var et=h(Ri=>{"use strict";var MH=Ri&&Ri.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var i=Object.getOwnPropertyDescriptor(e,r);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,i)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),PP=Ri&&Ri.__exportStar||function(t,e){for(var r in t)r!=="default"&&!Object.prototype.hasOwnProperty.call(e,r)&&MH(e,t,r)};Object.defineProperty(Ri,"__esModule",{value:!0});Ri.createConnection=void 0;var Ud=Zg();PP(bP(),Ri);PP(Zg(),Ri);var CP=!1,$H={initialize:t=>{},get shutdownReceived(){return CP},set shutdownReceived(t){CP=t},exit:t=>{}};function FH(t,e,r,n){let i,o,a,s;t!==void 0&&t.__brand==="features"&&(i=t,t=e,e=r,r=n),Ud.ConnectionStrategy.is(t)||Ud.ConnectionOptions.is(t)?s=t:(o=t,a=e,s=r);let u=d=>(0,Ud.createProtocolConnection)(o,a,d,s);return(0,Ud.createConnection)(u,$H,i)}Ri.createConnection=FH});var ry={};kj(ry,{TextDocument:()=>ey});function ty(t,e){if(t.length<=1)return t;let r=t.length/2|0,n=t.slice(0,r),i=t.slice(r);ty(n,e),ty(i,e);let o=0,a=0,s=0;for(;o<n.length&&a<i.length;)e(n[o],i[a])<=0?t[s++]=n[o++]:t[s++]=i[a++];for(;o<n.length;)t[s++]=n[o++];for(;a<i.length;)t[s++]=i[a++];return t}function AP(t,e,r=0){let n=e?[r]:[];for(let i=0;i<t.length;i++){let o=t.charCodeAt(i);(o===13||o===10)&&(o===13&&i+1<t.length&&t.charCodeAt(i+1)===10&&i++,n.push(r+i+1))}return n}function SP(t){let e=t.start,r=t.end;return e.line>r.line||e.line===r.line&&e.character>r.character?{start:r,end:e}:t}function jH(t){let e=SP(t.range);return e!==t.range?{newText:t.newText,range:e}:t}var Gd,ey,ny=Ej(()=>{"use strict";Gd=class t{constructor(e,r,n,i){this._uri=e,this._languageId=r,this._version=n,this._content=i,this._lineOffsets=void 0}get uri(){return this._uri}get languageId(){return this._languageId}get version(){return this._version}getText(e){if(e){let r=this.offsetAt(e.start),n=this.offsetAt(e.end);return this._content.substring(r,n)}return this._content}update(e,r){for(let n of e)if(t.isIncremental(n)){let i=SP(n.range),o=this.offsetAt(i.start),a=this.offsetAt(i.end);this._content=this._content.substring(0,o)+n.text+this._content.substring(a,this._content.length);let s=Math.max(i.start.line,0),u=Math.max(i.end.line,0),d=this._lineOffsets,p=AP(n.text,!1,o);if(u-s===p.length)for(let y=0,S=p.length;y<S;y++)d[y+s+1]=p[y];else p.length<1e4?d.splice(s+1,u-s,...p):this._lineOffsets=d=d.slice(0,s+1).concat(p,d.slice(u+1));let m=n.text.length-(a-o);if(m!==0)for(let y=s+1+p.length,S=d.length;y<S;y++)d[y]=d[y]+m}else if(t.isFull(n))this._content=n.text,this._lineOffsets=void 0;else throw new Error("Unknown change event received");this._version=r}getLineOffsets(){return this._lineOffsets===void 0&&(this._lineOffsets=AP(this._content,!0)),this._lineOffsets}positionAt(e){e=Math.max(Math.min(e,this._content.length),0);let r=this.getLineOffsets(),n=0,i=r.length;if(i===0)return{line:0,character:e};for(;n<i;){let a=Math.floor((n+i)/2);r[a]>e?i=a:n=a+1}let o=n-1;return{line:o,character:e-r[o]}}offsetAt(e){let r=this.getLineOffsets();if(e.line>=r.length)return this._content.length;if(e.line<0)return 0;let n=r[e.line],i=e.line+1<r.length?r[e.line+1]:this._content.length;return Math.max(Math.min(n+e.character,i),n)}get lineCount(){return this.getLineOffsets().length}static isIncremental(e){let r=e;return r!=null&&typeof r.text=="string"&&r.range!==void 0&&(r.rangeLength===void 0||typeof r.rangeLength=="number")}static isFull(e){let r=e;return r!=null&&typeof r.text=="string"&&r.range===void 0&&r.rangeLength===void 0}};(function(t){function e(i,o,a,s){return new Gd(i,o,a,s)}t.create=e;function r(i,o,a){if(i instanceof Gd)return i.update(o,a),i;throw new Error("TextDocument.update: document must be created by TextDocument.create")}t.update=r;function n(i,o){let a=i.getText(),s=ty(o.map(jH),(p,m)=>{let y=p.range.start.line-m.range.start.line;return y===0?p.range.start.character-m.range.start.character:y}),u=0,d=[];for(let p of s){let m=i.offsetAt(p.range.start);if(m<u)throw new Error("Overlapping edit");m>u&&d.push(a.substring(u,m)),p.newText.length&&d.push(p.newText),u=i.offsetAt(p.range.end)}return d.push(a.substr(u)),d.join("")}t.applyEdits=n})(ey||(ey={}))});var Xr=h(er=>{"use strict";Object.defineProperty(er,"__esModule",{value:!0});er.isRootCstNode=er.isLeafCstNode=er.isCompositeCstNode=er.AbstractAstReflection=er.isLinkingError=er.isAstNodeDescription=er.isReference=er.isAstNode=void 0;function oy(t){return typeof t=="object"&&t!==null&&typeof t.$type=="string"}er.isAstNode=oy;function EP(t){return typeof t=="object"&&t!==null&&typeof t.$refText=="string"}er.isReference=EP;function UH(t){return typeof t=="object"&&t!==null&&typeof t.name=="string"&&typeof t.type=="string"&&typeof t.path=="string"}er.isAstNodeDescription=UH;function GH(t){return typeof t=="object"&&t!==null&&oy(t.container)&&EP(t.reference)&&typeof t.message=="string"}er.isLinkingError=GH;var iy=class{constructor(){this.subtypes={}}isInstance(e,r){return oy(e)&&this.isSubtype(e.$type,r)}isSubtype(e,r){if(e===r)return!0;let n=this.subtypes[e];n||(n=this.subtypes[e]={});let i=n[r];if(i!==void 0)return i;{let o=this.computeIsSubtype(e,r);return n[r]=o,o}}};er.AbstractAstReflection=iy;function kP(t){return typeof t=="object"&&t!==null&&"children"in t}er.isCompositeCstNode=kP;function WH(t){return typeof t=="object"&&t!==null&&"tokenType"in t}er.isLeafCstNode=WH;function HH(t){return kP(t)&&"fullText"in t}er.isRootCstNode=HH});var tr=h(it=>{"use strict";Object.defineProperty(it,"__esModule",{value:!0});it.Reduction=it.TreeStreamImpl=it.stream=it.DONE_RESULT=it.EMPTY_STREAM=it.StreamImpl=void 0;var eo=class t{constructor(e,r){this.startFn=e,this.nextFn=r}iterator(){let e={state:this.startFn(),next:()=>this.nextFn(e.state),[Symbol.iterator]:()=>e};return e}[Symbol.iterator](){return this.iterator()}isEmpty(){return!!this.iterator().next().done}count(){let e=this.iterator(),r=0,n=e.next();for(;!n.done;)r++,n=e.next();return r}toArray(){let e=[],r=this.iterator(),n;do n=r.next(),n.value!==void 0&&e.push(n.value);while(!n.done);return e}toSet(){return new Set(this)}toMap(e,r){let n=this.map(i=>[e?e(i):i,r?r(i):i]);return new Map(n)}toString(){return this.join()}concat(e){let r=e[Symbol.iterator]();return new t(()=>({first:this.startFn(),firstDone:!1}),n=>{let i;if(!n.firstDone){do if(i=this.nextFn(n.first),!i.done)return i;while(!i.done);n.firstDone=!0}do if(i=r.next(),!i.done)return i;while(!i.done);return it.DONE_RESULT})}join(e=","){let r=this.iterator(),n="",i,o=!1;do i=r.next(),i.done||(o&&(n+=e),n+=KH(i.value)),o=!0;while(!i.done);return n}indexOf(e,r=0){let n=this.iterator(),i=0,o=n.next();for(;!o.done;){if(i>=r&&o.value===e)return i;o=n.next(),i++}return-1}every(e){let r=this.iterator(),n=r.next();for(;!n.done;){if(!e(n.value))return!1;n=r.next()}return!0}some(e){let r=this.iterator(),n=r.next();for(;!n.done;){if(e(n.value))return!0;n=r.next()}return!1}forEach(e){let r=this.iterator(),n=0,i=r.next();for(;!i.done;)e(i.value,n),i=r.next(),n++}map(e){return new t(this.startFn,r=>{let{done:n,value:i}=this.nextFn(r);return n?it.DONE_RESULT:{done:!1,value:e(i)}})}filter(e){return new t(this.startFn,r=>{let n;do if(n=this.nextFn(r),!n.done&&e(n.value))return n;while(!n.done);return it.DONE_RESULT})}nonNullable(){return this.filter(e=>e!=null)}reduce(e,r){let n=this.iterator(),i=r,o=n.next();for(;!o.done;)i===void 0?i=o.value:i=e(i,o.value),o=n.next();return i}reduceRight(e,r){return this.recursiveReduce(this.iterator(),e,r)}recursiveReduce(e,r,n){let i=e.next();if(i.done)return n;let o=this.recursiveReduce(e,r,n);return o===void 0?i.value:r(o,i.value)}find(e){let r=this.iterator(),n=r.next();for(;!n.done;){if(e(n.value))return n.value;n=r.next()}}findIndex(e){let r=this.iterator(),n=0,i=r.next();for(;!i.done;){if(e(i.value))return n;i=r.next(),n++}return-1}includes(e){let r=this.iterator(),n=r.next();for(;!n.done;){if(n.value===e)return!0;n=r.next()}return!1}flatMap(e){return new t(()=>({this:this.startFn()}),r=>{do{if(r.iterator){let o=r.iterator.next();if(o.done)r.iterator=void 0;else return o}let{done:n,value:i}=this.nextFn(r.this);if(!n){let o=e(i);if(Wd(o))r.iterator=o[Symbol.iterator]();else return{done:!1,value:o}}}while(r.iterator);return it.DONE_RESULT})}flat(e){if(e===void 0&&(e=1),e<=0)return this;let r=e>1?this.flat(e-1):this;return new t(()=>({this:r.startFn()}),n=>{do{if(n.iterator){let a=n.iterator.next();if(a.done)n.iterator=void 0;else return a}let{done:i,value:o}=r.nextFn(n.this);if(!i)if(Wd(o))n.iterator=o[Symbol.iterator]();else return{done:!1,value:o}}while(n.iterator);return it.DONE_RESULT})}head(){let r=this.iterator().next();if(!r.done)return r.value}tail(e=1){return new t(()=>{let r=this.startFn();for(let n=0;n<e;n++)if(this.nextFn(r).done)return r;return r},this.nextFn)}limit(e){return new t(()=>({size:0,state:this.startFn()}),r=>(r.size++,r.size>e?it.DONE_RESULT:this.nextFn(r.state)))}distinct(e){let r=new Set;return this.filter(n=>{let i=e?e(n):n;return r.has(i)?!1:(r.add(i),!0)})}exclude(e,r){let n=new Set;for(let i of e){let o=r?r(i):i;n.add(o)}return this.filter(i=>{let o=r?r(i):i;return!n.has(o)})}};it.StreamImpl=eo;function KH(t){return typeof t=="string"?t:typeof t>"u"?"undefined":typeof t.toString=="function"?t.toString():Object.prototype.toString.call(t)}function Wd(t){return!!t&&typeof t[Symbol.iterator]=="function"}it.EMPTY_STREAM=new eo(()=>{},()=>it.DONE_RESULT);it.DONE_RESULT=Object.freeze({done:!0,value:void 0});function BH(...t){if(t.length===1){let e=t[0];if(e instanceof eo)return e;if(Wd(e))return new eo(()=>e[Symbol.iterator](),r=>r.next());if(typeof e.length=="number")return new eo(()=>({index:0}),r=>r.index<e.length?{done:!1,value:e[r.index++]}:it.DONE_RESULT)}return t.length>1?new eo(()=>({collIndex:0,arrIndex:0}),e=>{do{if(e.iterator){let r=e.iterator.next();if(!r.done)return r;e.iterator=void 0}if(e.array){if(e.arrIndex<e.array.length)return{done:!1,value:e.array[e.arrIndex++]};e.array=void 0,e.arrIndex=0}if(e.collIndex<t.length){let r=t[e.collIndex++];Wd(r)?e.iterator=r[Symbol.iterator]():r&&typeof r.length=="number"&&(e.array=r)}}while(e.iterator||e.array||e.collIndex<t.length);return it.DONE_RESULT}):it.EMPTY_STREAM}it.stream=BH;var ay=class extends eo{constructor(e,r,n){super(()=>({iterators:n?.includeRoot?[[e][Symbol.iterator]()]:[r(e)[Symbol.iterator]()],pruned:!1}),i=>{for(i.pruned&&(i.iterators.pop(),i.pruned=!1);i.iterators.length>0;){let a=i.iterators[i.iterators.length-1].next();if(a.done)i.iterators.pop();else return i.iterators.push(r(a.value)[Symbol.iterator]()),a}return it.DONE_RESULT})}iterator(){let e={state:this.startFn(),next:()=>this.nextFn(e.state),prune:()=>{e.state.pruned=!0},[Symbol.iterator]:()=>e};return e}};it.TreeStreamImpl=ay;var VH;(function(t){function e(o){return o.reduce((a,s)=>a+s,0)}t.sum=e;function r(o){return o.reduce((a,s)=>a*s,0)}t.product=r;function n(o){return o.reduce((a,s)=>Math.min(a,s))}t.min=n;function i(o){return o.reduce((a,s)=>Math.max(a,s))}t.max=i})(VH=it.Reduction||(it.Reduction={}))});var pt=h(Ue=>{"use strict";Object.defineProperty(Ue,"__esModule",{value:!0});Ue.getInteriorNodes=Ue.getStartlineNode=Ue.getNextNode=Ue.getPreviousNode=Ue.findLeafNodeAtOffset=Ue.isCommentNode=Ue.findCommentNode=Ue.findDeclarationNodeAtOffset=Ue.DefaultNameRegexp=Ue.toDocumentSegment=Ue.tokenToRange=Ue.isCstChildNode=Ue.flattenCst=Ue.streamCst=void 0;var hs=Xr(),zH=tr();function wP(t){return new zH.TreeStreamImpl(t,e=>(0,hs.isCompositeCstNode)(e)?e.children:[],{includeRoot:!0})}Ue.streamCst=wP;function YH(t){return wP(t).filter(hs.isLeafCstNode)}Ue.flattenCst=YH;function XH(t,e){for(;t.parent;)if(t=t.parent,t===e)return!0;return!1}Ue.isCstChildNode=XH;function JH(t){return{start:{character:t.startColumn-1,line:t.startLine-1},end:{character:t.endColumn,line:t.endLine-1}}}Ue.tokenToRange=JH;function QH(t){let{offset:e,end:r,range:n}=t;return{range:n,offset:e,end:r,length:r-e}}Ue.toDocumentSegment=QH;Ue.DefaultNameRegexp=/^[\w\p{L}]$/u;function ZH(t,e,r=Ue.DefaultNameRegexp){if(t){if(e>0){let n=e-t.offset,i=t.text.charAt(n);r.test(i)||e--}return uy(t,e)}}Ue.findDeclarationNodeAtOffset=ZH;function eK(t,e){if(t){let r=DP(t,!0);if(r&&sy(r,e))return r;if((0,hs.isRootCstNode)(t)){let n=t.children.findIndex(i=>!i.hidden);for(let i=n-1;i>=0;i--){let o=t.children[i];if(sy(o,e))return o}}}}Ue.findCommentNode=eK;function sy(t,e){return(0,hs.isLeafCstNode)(t)&&e.includes(t.tokenType.name)}Ue.isCommentNode=sy;function uy(t,e){if((0,hs.isLeafCstNode)(t))return t;if((0,hs.isCompositeCstNode)(t)){let r=0,n=t.children.length-1;for(;r<=n;){let i=Math.floor((r+n)/2),o=t.children[i];if(o.offset>e)n=i-1;else if(o.end<=e)r=i+1;else return uy(o,e)}}}Ue.findLeafNodeAtOffset=uy;function DP(t,e=!0){for(;t.parent;){let r=t.parent,n=r.children.indexOf(t);if(n===0)t=r;else{n--;let i=r.children[n];if(e||!i.hidden)return i}}}Ue.getPreviousNode=DP;function tK(t,e=!0){for(;t.parent;){let r=t.parent,n=r.children.indexOf(t);if(r.children.length-1===n)t=r;else{n++;let i=r.children[n];if(e||!i.hidden)return i}}}Ue.getNextNode=tK;function rK(t){if(t.range.start.character===0)return t;let e=t.range.start.line,r=t,n;for(;t.parent;){let i=t.parent,o=n??i.children.indexOf(t);if(o===0?(t=i,n=void 0):(n=o-1,t=i.children[n]),t.range.start.line!==e)break;r=t}return r}Ue.getStartlineNode=rK;function nK(t,e){let r=iK(t,e);return r?r.parent.children.slice(r.a+1,r.b):[]}Ue.getInteriorNodes=nK;function iK(t,e){let r=NP(t),n=NP(e),i;for(let o=0;o<r.length&&o<n.length;o++){let a=r[o],s=n[o];if(a.parent===s.parent)i={parent:a.parent,a:a.index,b:s.index};else break}return i}function NP(t){let e=[];for(;t.parent;){let r=t.parent,n=r.children.indexOf(t);e.push({parent:r,index:n}),t=r}return e.reverse()}});var to=h((Rc,cy)=>{(function(t,e){if(typeof Rc=="object"&&typeof cy=="object")cy.exports=e();else if(typeof define=="function"&&define.amd)define([],e);else{var r=e();for(var n in r)(typeof Rc=="object"?Rc:t)[n]=r[n]}})(Rc,()=>(()=>{"use strict";var t={470:i=>{function o(u){if(typeof u!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(u))}function a(u,d){for(var p,m="",y=0,S=-1,_=0,w=0;w<=u.length;++w){if(w<u.length)p=u.charCodeAt(w);else{if(p===47)break;p=47}if(p===47){if(!(S===w-1||_===1))if(S!==w-1&&_===2){if(m.length<2||y!==2||m.charCodeAt(m.length-1)!==46||m.charCodeAt(m.length-2)!==46){if(m.length>2){var k=m.lastIndexOf("/");if(k!==m.length-1){k===-1?(m="",y=0):y=(m=m.slice(0,k)).length-1-m.lastIndexOf("/"),S=w,_=0;continue}}else if(m.length===2||m.length===1){m="",y=0,S=w,_=0;continue}}d&&(m.length>0?m+="/..":m="..",y=2)}else m.length>0?m+="/"+u.slice(S+1,w):m=u.slice(S+1,w),y=w-S-1;S=w,_=0}else p===46&&_!==-1?++_:_=-1}return m}var s={resolve:function(){for(var u,d="",p=!1,m=arguments.length-1;m>=-1&&!p;m--){var y;m>=0?y=arguments[m]:(u===void 0&&(u=process.cwd()),y=u),o(y),y.length!==0&&(d=y+"/"+d,p=y.charCodeAt(0)===47)}return d=a(d,!p),p?d.length>0?"/"+d:"/":d.length>0?d:"."},normalize:function(u){if(o(u),u.length===0)return".";var d=u.charCodeAt(0)===47,p=u.charCodeAt(u.length-1)===47;return(u=a(u,!d)).length!==0||d||(u="."),u.length>0&&p&&(u+="/"),d?"/"+u:u},isAbsolute:function(u){return o(u),u.length>0&&u.charCodeAt(0)===47},join:function(){if(arguments.length===0)return".";for(var u,d=0;d<arguments.length;++d){var p=arguments[d];o(p),p.length>0&&(u===void 0?u=p:u+="/"+p)}return u===void 0?".":s.normalize(u)},relative:function(u,d){if(o(u),o(d),u===d||(u=s.resolve(u))===(d=s.resolve(d)))return"";for(var p=1;p<u.length&&u.charCodeAt(p)===47;++p);for(var m=u.length,y=m-p,S=1;S<d.length&&d.charCodeAt(S)===47;++S);for(var _=d.length-S,w=y<_?y:_,k=-1,N=0;N<=w;++N){if(N===w){if(_>w){if(d.charCodeAt(S+N)===47)return d.slice(S+N+1);if(N===0)return d.slice(S+N)}else y>w&&(u.charCodeAt(p+N)===47?k=N:N===0&&(k=0));break}var C=u.charCodeAt(p+N);if(C!==d.charCodeAt(S+N))break;C===47&&(k=N)}var E="";for(N=p+k+1;N<=m;++N)N!==m&&u.charCodeAt(N)!==47||(E.length===0?E+="..":E+="/..");return E.length>0?E+d.slice(S+k):(S+=k,d.charCodeAt(S)===47&&++S,d.slice(S))},_makeLong:function(u){return u},dirname:function(u){if(o(u),u.length===0)return".";for(var d=u.charCodeAt(0),p=d===47,m=-1,y=!0,S=u.length-1;S>=1;--S)if((d=u.charCodeAt(S))===47){if(!y){m=S;break}}else y=!1;return m===-1?p?"/":".":p&&m===1?"//":u.slice(0,m)},basename:function(u,d){if(d!==void 0&&typeof d!="string")throw new TypeError('"ext" argument must be a string');o(u);var p,m=0,y=-1,S=!0;if(d!==void 0&&d.length>0&&d.length<=u.length){if(d.length===u.length&&d===u)return"";var _=d.length-1,w=-1;for(p=u.length-1;p>=0;--p){var k=u.charCodeAt(p);if(k===47){if(!S){m=p+1;break}}else w===-1&&(S=!1,w=p+1),_>=0&&(k===d.charCodeAt(_)?--_==-1&&(y=p):(_=-1,y=w))}return m===y?y=w:y===-1&&(y=u.length),u.slice(m,y)}for(p=u.length-1;p>=0;--p)if(u.charCodeAt(p)===47){if(!S){m=p+1;break}}else y===-1&&(S=!1,y=p+1);return y===-1?"":u.slice(m,y)},extname:function(u){o(u);for(var d=-1,p=0,m=-1,y=!0,S=0,_=u.length-1;_>=0;--_){var w=u.charCodeAt(_);if(w!==47)m===-1&&(y=!1,m=_+1),w===46?d===-1?d=_:S!==1&&(S=1):d!==-1&&(S=-1);else if(!y){p=_+1;break}}return d===-1||m===-1||S===0||S===1&&d===m-1&&d===p+1?"":u.slice(d,m)},format:function(u){if(u===null||typeof u!="object")throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof u);return function(d,p){var m=p.dir||p.root,y=p.base||(p.name||"")+(p.ext||"");return m?m===p.root?m+y:m+"/"+y:y}(0,u)},parse:function(u){o(u);var d={root:"",dir:"",base:"",ext:"",name:""};if(u.length===0)return d;var p,m=u.charCodeAt(0),y=m===47;y?(d.root="/",p=1):p=0;for(var S=-1,_=0,w=-1,k=!0,N=u.length-1,C=0;N>=p;--N)if((m=u.charCodeAt(N))!==47)w===-1&&(k=!1,w=N+1),m===46?S===-1?S=N:C!==1&&(C=1):S!==-1&&(C=-1);else if(!k){_=N+1;break}return S===-1||w===-1||C===0||C===1&&S===w-1&&S===_+1?w!==-1&&(d.base=d.name=_===0&&y?u.slice(1,w):u.slice(_,w)):(_===0&&y?(d.name=u.slice(1,S),d.base=u.slice(1,w)):(d.name=u.slice(_,S),d.base=u.slice(_,w)),d.ext=u.slice(S,w)),_>0?d.dir=u.slice(0,_-1):y&&(d.dir="/"),d},sep:"/",delimiter:":",win32:null,posix:null};s.posix=s,i.exports=s},674:(i,o)=>{if(Object.defineProperty(o,"__esModule",{value:!0}),o.isWindows=void 0,typeof process=="object")o.isWindows=process.platform==="win32";else if(typeof navigator=="object"){let a=navigator.userAgent;o.isWindows=a.indexOf("Windows")>=0}},796:(i,o,a)=>{Object.defineProperty(o,"__esModule",{value:!0}),o.uriToFsPath=o.URI=void 0;let s=a(674),u=/^\w[\w\d+.-]*$/,d=/^\//,p=/^\/\//;function m(G,j){if(!G.scheme&&j)throw new Error(`[UriError]: Scheme is missing: {scheme: "", authority: "${G.authority}", path: "${G.path}", query: "${G.query}", fragment: "${G.fragment}"}`);if(G.scheme&&!u.test(G.scheme))throw new Error("[UriError]: Scheme contains illegal characters.");if(G.path){if(G.authority){if(!d.test(G.path))throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character')}else if(p.test(G.path))throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")')}}let y="",S="/",_=/^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;class w{static isUri(j){return j instanceof w||!!j&&typeof j.authority=="string"&&typeof j.fragment=="string"&&typeof j.path=="string"&&typeof j.query=="string"&&typeof j.scheme=="string"&&typeof j.fsPath=="string"&&typeof j.with=="function"&&typeof j.toString=="function"}scheme;authority;path;query;fragment;constructor(j,Y,J,Ce,_e,me=!1){typeof j=="object"?(this.scheme=j.scheme||y,this.authority=j.authority||y,this.path=j.path||y,this.query=j.query||y,this.fragment=j.fragment||y):(this.scheme=function(Je,ze){return Je||ze?Je:"file"}(j,me),this.authority=Y||y,this.path=function(Je,ze){switch(Je){case"https":case"http":case"file":ze?ze[0]!==S&&(ze=S+ze):ze=S}return ze}(this.scheme,J||y),this.query=Ce||y,this.fragment=_e||y,m(this,me))}get fsPath(){return U(this,!1)}with(j){if(!j)return this;let{scheme:Y,authority:J,path:Ce,query:_e,fragment:me}=j;return Y===void 0?Y=this.scheme:Y===null&&(Y=y),J===void 0?J=this.authority:J===null&&(J=y),Ce===void 0?Ce=this.path:Ce===null&&(Ce=y),_e===void 0?_e=this.query:_e===null&&(_e=y),me===void 0?me=this.fragment:me===null&&(me=y),Y===this.scheme&&J===this.authority&&Ce===this.path&&_e===this.query&&me===this.fragment?this:new N(Y,J,Ce,_e,me)}static parse(j,Y=!1){let J=_.exec(j);return J?new N(J[2]||y,Z(J[4]||y),Z(J[5]||y),Z(J[7]||y),Z(J[9]||y),Y):new N(y,y,y,y,y)}static file(j){let Y=y;if(s.isWindows&&(j=j.replace(/\\/g,S)),j[0]===S&&j[1]===S){let J=j.indexOf(S,2);J===-1?(Y=j.substring(2),j=S):(Y=j.substring(2,J),j=j.substring(J)||S)}return new N("file",Y,j,y,y)}static from(j){let Y=new N(j.scheme,j.authority,j.path,j.query,j.fragment);return m(Y,!0),Y}toString(j=!1){return z(this,j)}toJSON(){return this}static revive(j){if(j){if(j instanceof w)return j;{let Y=new N(j);return Y._formatted=j.external,Y._fsPath=j._sep===k?j.fsPath:null,Y}}return j}}o.URI=w;let k=s.isWindows?1:void 0;class N extends w{_formatted=null;_fsPath=null;get fsPath(){return this._fsPath||(this._fsPath=U(this,!1)),this._fsPath}toString(j=!1){return j?z(this,!0):(this._formatted||(this._formatted=z(this,!1)),this._formatted)}toJSON(){let j={$mid:1};return this._fsPath&&(j.fsPath=this._fsPath,j._sep=k),this._formatted&&(j.external=this._formatted),this.path&&(j.path=this.path),this.scheme&&(j.scheme=this.scheme),this.authority&&(j.authority=this.authority),this.query&&(j.query=this.query),this.fragment&&(j.fragment=this.fragment),j}}let C={58:"%3A",47:"%2F",63:"%3F",35:"%23",91:"%5B",93:"%5D",64:"%40",33:"%21",36:"%24",38:"%26",39:"%27",40:"%28",41:"%29",42:"%2A",43:"%2B",44:"%2C",59:"%3B",61:"%3D",32:"%20"};function E(G,j,Y){let J,Ce=-1;for(let _e=0;_e<G.length;_e++){let me=G.charCodeAt(_e);if(me>=97&&me<=122||me>=65&&me<=90||me>=48&&me<=57||me===45||me===46||me===95||me===126||j&&me===47||Y&&me===91||Y&&me===93||Y&&me===58)Ce!==-1&&(J+=encodeURIComponent(G.substring(Ce,_e)),Ce=-1),J!==void 0&&(J+=G.charAt(_e));else{J===void 0&&(J=G.substr(0,_e));let Je=C[me];Je!==void 0?(Ce!==-1&&(J+=encodeURIComponent(G.substring(Ce,_e)),Ce=-1),J+=Je):Ce===-1&&(Ce=_e)}}return Ce!==-1&&(J+=encodeURIComponent(G.substring(Ce))),J!==void 0?J:G}function L(G){let j;for(let Y=0;Y<G.length;Y++){let J=G.charCodeAt(Y);J===35||J===63?(j===void 0&&(j=G.substr(0,Y)),j+=C[J]):j!==void 0&&(j+=G[Y])}return j!==void 0?j:G}function U(G,j){let Y;return Y=G.authority&&G.path.length>1&&G.scheme==="file"?`//${G.authority}${G.path}`:G.path.charCodeAt(0)===47&&(G.path.charCodeAt(1)>=65&&G.path.charCodeAt(1)<=90||G.path.charCodeAt(1)>=97&&G.path.charCodeAt(1)<=122)&&G.path.charCodeAt(2)===58?j?G.path.substr(1):G.path[1].toLowerCase()+G.path.substr(2):G.path,s.isWindows&&(Y=Y.replace(/\//g,"\\")),Y}function z(G,j){let Y=j?L:E,J="",{scheme:Ce,authority:_e,path:me,query:Je,fragment:ze}=G;if(Ce&&(J+=Ce,J+=":"),(_e||Ce==="file")&&(J+=S,J+=S),_e){let Se=_e.indexOf("@");if(Se!==-1){let ut=_e.substr(0,Se);_e=_e.substr(Se+1),Se=ut.lastIndexOf(":"),Se===-1?J+=Y(ut,!1,!1):(J+=Y(ut.substr(0,Se),!1,!1),J+=":",J+=Y(ut.substr(Se+1),!1,!0)),J+="@"}_e=_e.toLowerCase(),Se=_e.lastIndexOf(":"),Se===-1?J+=Y(_e,!1,!0):(J+=Y(_e.substr(0,Se),!1,!0),J+=_e.substr(Se))}if(me){if(me.length>=3&&me.charCodeAt(0)===47&&me.charCodeAt(2)===58){let Se=me.charCodeAt(1);Se>=65&&Se<=90&&(me=`/${String.fromCharCode(Se+32)}:${me.substr(3)}`)}else if(me.length>=2&&me.charCodeAt(1)===58){let Se=me.charCodeAt(0);Se>=65&&Se<=90&&(me=`${String.fromCharCode(Se+32)}:${me.substr(2)}`)}J+=Y(me,!0,!1)}return Je&&(J+="?",J+=Y(Je,!1,!1)),ze&&(J+="#",J+=j?ze:E(ze,!1,!1)),J}function te(G){try{return decodeURIComponent(G)}catch{return G.length>3?G.substr(0,3)+te(G.substr(3)):G}}o.uriToFsPath=U;let we=/(%[0-9A-Za-z][0-9A-Za-z])+/g;function Z(G){return G.match(we)?G.replace(we,j=>te(j)):G}},679:function(i,o,a){var s=this&&this.__createBinding||(Object.create?function(_,w,k,N){N===void 0&&(N=k);var C=Object.getOwnPropertyDescriptor(w,k);C&&!("get"in C?!w.__esModule:C.writable||C.configurable)||(C={enumerable:!0,get:function(){return w[k]}}),Object.defineProperty(_,N,C)}:function(_,w,k,N){N===void 0&&(N=k),_[N]=w[k]}),u=this&&this.__setModuleDefault||(Object.create?function(_,w){Object.defineProperty(_,"default",{enumerable:!0,value:w})}:function(_,w){_.default=w}),d=this&&this.__importStar||function(_){if(_&&_.__esModule)return _;var w={};if(_!=null)for(var k in _)k!=="default"&&Object.prototype.hasOwnProperty.call(_,k)&&s(w,_,k);return u(w,_),w};Object.defineProperty(o,"__esModule",{value:!0}),o.Utils=void 0;let p=d(a(470)),m=p.posix||p,y="/";var S;(function(_){_.joinPath=function(w,...k){return w.with({path:m.join(w.path,...k)})},_.resolvePath=function(w,...k){let N=w.path,C=!1;N[0]!==y&&(N=y+N,C=!0);let E=m.resolve(N,...k);return C&&E[0]===y&&!w.authority&&(E=E.substring(1)),w.with({path:E})},_.dirname=function(w){if(w.path.length===0||w.path===y)return w;let k=m.dirname(w.path);return k.length===1&&k.charCodeAt(0)===46&&(k=""),w.with({path:k})},_.basename=function(w){return m.basename(w.path)},_.extname=function(w){return m.extname(w.path)}})(S||(o.Utils=S={}))}},e={};function r(i){var o=e[i];if(o!==void 0)return o.exports;var a=e[i]={exports:{}};return t[i].call(a.exports,a,a.exports,r),a.exports}var n={};return(()=>{var i=n;Object.defineProperty(i,"__esModule",{value:!0}),i.Utils=i.URI=void 0;let o=r(796);Object.defineProperty(i,"URI",{enumerable:!0,get:function(){return o.URI}});let a=r(679);Object.defineProperty(i,"Utils",{enumerable:!0,get:function(){return a.Utils}})})(),n})())});var bc=h(ms=>{"use strict";Object.defineProperty(ms,"__esModule",{value:!0});ms.eagerLoad=ms.inject=void 0;function oK(t,e,r,n){let i=[t,e,r,n].reduce(LP,{});return xP(i)}ms.inject=oK;var ly=Symbol("isProxy");function IP(t){if(t&&t[ly])for(let e of Object.values(t))IP(e);return t}ms.eagerLoad=IP;function xP(t,e){let r=new Proxy({},{deleteProperty:()=>!1,get:(n,i)=>qP(n,i,t,e||r),getOwnPropertyDescriptor:(n,i)=>(qP(n,i,t,e||r),Object.getOwnPropertyDescriptor(n,i)),has:(n,i)=>i in t,ownKeys:()=>[...Reflect.ownKeys(t),ly]});return r[ly]=!0,r}var OP=Symbol();function qP(t,e,r,n){if(e in t){if(t[e]instanceof Error)throw new Error("Construction failure. Please make sure that your dependencies are constructable.",{cause:t[e]});if(t[e]===OP)throw new Error('Cycle detected. Please make "'+String(e)+'" lazy. See https://langium.org/docs/di/cyclic-dependencies');return t[e]}else if(e in r){let i=r[e];t[e]=OP;try{t[e]=typeof i=="function"?i(n):xP(i,n)}catch(o){throw t[e]=o instanceof Error?o:void 0,o}return t[e]}else return}function LP(t,e){if(e){for(let[r,n]of Object.entries(e))if(n!==void 0){let i=t[r];i!==null&&n!==null&&typeof i=="object"&&typeof n=="object"?t[r]=LP(i,n):t[r]=n}}return t}});var cn=h(Hd=>{"use strict";Object.defineProperty(Hd,"__esModule",{value:!0});Hd.MultiMap=void 0;var gs=tr(),dy=class{constructor(e){if(this.map=new Map,e)for(let[r,n]of e)this.add(r,n)}get size(){return gs.Reduction.sum((0,gs.stream)(this.map.values()).map(e=>e.length))}clear(){this.map.clear()}delete(e,r){if(r===void 0)return this.map.delete(e);{let n=this.map.get(e);if(n){let i=n.indexOf(r);if(i>=0)return n.length===1?this.map.delete(e):n.splice(i,1),!0}return!1}}get(e){var r;return(r=this.map.get(e))!==null&&r!==void 0?r:[]}has(e,r){if(r===void 0)return this.map.has(e);{let n=this.map.get(e);return n?n.indexOf(r)>=0:!1}}add(e,r){return this.map.has(e)?this.map.get(e).push(r):this.map.set(e,[r]),this}addAll(e,r){return this.map.has(e)?this.map.get(e).push(...r):this.map.set(e,Array.from(r)),this}forEach(e){this.map.forEach((r,n)=>r.forEach(i=>e(i,n,this)))}[Symbol.iterator](){return this.entries().iterator()}entries(){return(0,gs.stream)(this.map.entries()).flatMap(([e,r])=>r.map(n=>[e,n]))}keys(){return(0,gs.stream)(this.map.keys())}values(){return(0,gs.stream)(this.map.values()).flat()}entriesGroupedByKey(){return(0,gs.stream)(this.map.entries())}};Hd.MultiMap=dy});var Ke=h(D=>{"use strict";Object.defineProperty(D,"__esModule",{value:!0});D.isCharacterRange=D.CharacterRange=D.isAssignment=D.Assignment=D.isAlternatives=D.Alternatives=D.isAction=D.Action=D.isTypeAttribute=D.TypeAttribute=D.isType=D.Type=D.isTerminalRule=D.TerminalRule=D.isReturnType=D.ReturnType=D.isParserRule=D.ParserRule=D.isParameterReference=D.ParameterReference=D.isParameter=D.Parameter=D.isNegation=D.Negation=D.isNamedArgument=D.NamedArgument=D.isLiteralCondition=D.LiteralCondition=D.isInterface=D.Interface=D.isInferredType=D.InferredType=D.isGrammarImport=D.GrammarImport=D.isGrammar=D.Grammar=D.isDisjunction=D.Disjunction=D.isConjunction=D.Conjunction=D.isAtomType=D.AtomType=D.isAbstractElement=D.AbstractElement=D.isCondition=D.Condition=D.isAbstractType=D.AbstractType=D.isAbstractRule=D.AbstractRule=void 0;D.reflection=D.LangiumGrammarAstReflection=D.isWildcard=D.Wildcard=D.isUntilToken=D.UntilToken=D.isUnorderedGroup=D.UnorderedGroup=D.isTerminalRuleCall=D.TerminalRuleCall=D.isTerminalGroup=D.TerminalGroup=D.isTerminalAlternatives=D.TerminalAlternatives=D.isRuleCall=D.RuleCall=D.isRegexToken=D.RegexToken=D.isNegatedToken=D.NegatedToken=D.isKeyword=D.Keyword=D.isGroup=D.Group=D.isCrossReference=D.CrossReference=void 0;var aK=Xr();D.AbstractRule="AbstractRule";function sK(t){return D.reflection.isInstance(t,D.AbstractRule)}D.isAbstractRule=sK;D.AbstractType="AbstractType";function uK(t){return D.reflection.isInstance(t,D.AbstractType)}D.isAbstractType=uK;D.Condition="Condition";function cK(t){return D.reflection.isInstance(t,D.Condition)}D.isCondition=cK;D.AbstractElement="AbstractElement";function lK(t){return D.reflection.isInstance(t,D.AbstractElement)}D.isAbstractElement=lK;D.AtomType="AtomType";function dK(t){return D.reflection.isInstance(t,D.AtomType)}D.isAtomType=dK;D.Conjunction="Conjunction";function fK(t){return D.reflection.isInstance(t,D.Conjunction)}D.isConjunction=fK;D.Disjunction="Disjunction";function pK(t){return D.reflection.isInstance(t,D.Disjunction)}D.isDisjunction=pK;D.Grammar="Grammar";function hK(t){return D.reflection.isInstance(t,D.Grammar)}D.isGrammar=hK;D.GrammarImport="GrammarImport";function mK(t){return D.reflection.isInstance(t,D.GrammarImport)}D.isGrammarImport=mK;D.InferredType="InferredType";function gK(t){return D.reflection.isInstance(t,D.InferredType)}D.isInferredType=gK;D.Interface="Interface";function yK(t){return D.reflection.isInstance(t,D.Interface)}D.isInterface=yK;D.LiteralCondition="LiteralCondition";function vK(t){return D.reflection.isInstance(t,D.LiteralCondition)}D.isLiteralCondition=vK;D.NamedArgument="NamedArgument";function _K(t){return D.reflection.isInstance(t,D.NamedArgument)}D.isNamedArgument=_K;D.Negation="Negation";function TK(t){return D.reflection.isInstance(t,D.Negation)}D.isNegation=TK;D.Parameter="Parameter";function RK(t){return D.reflection.isInstance(t,D.Parameter)}D.isParameter=RK;D.ParameterReference="ParameterReference";function bK(t){return D.reflection.isInstance(t,D.ParameterReference)}D.isParameterReference=bK;D.ParserRule="ParserRule";function CK(t){return D.reflection.isInstance(t,D.ParserRule)}D.isParserRule=CK;D.ReturnType="ReturnType";function PK(t){return D.reflection.isInstance(t,D.ReturnType)}D.isReturnType=PK;D.TerminalRule="TerminalRule";function AK(t){return D.reflection.isInstance(t,D.TerminalRule)}D.isTerminalRule=AK;D.Type="Type";function SK(t){return D.reflection.isInstance(t,D.Type)}D.isType=SK;D.TypeAttribute="TypeAttribute";function EK(t){return D.reflection.isInstance(t,D.TypeAttribute)}D.isTypeAttribute=EK;D.Action="Action";function kK(t){return D.reflection.isInstance(t,D.Action)}D.isAction=kK;D.Alternatives="Alternatives";function NK(t){return D.reflection.isInstance(t,D.Alternatives)}D.isAlternatives=NK;D.Assignment="Assignment";function wK(t){return D.reflection.isInstance(t,D.Assignment)}D.isAssignment=wK;D.CharacterRange="CharacterRange";function DK(t){return D.reflection.isInstance(t,D.CharacterRange)}D.isCharacterRange=DK;D.CrossReference="CrossReference";function OK(t){return D.reflection.isInstance(t,D.CrossReference)}D.isCrossReference=OK;D.Group="Group";function qK(t){return D.reflection.isInstance(t,D.Group)}D.isGroup=qK;D.Keyword="Keyword";function IK(t){return D.reflection.isInstance(t,D.Keyword)}D.isKeyword=IK;D.NegatedToken="NegatedToken";function xK(t){return D.reflection.isInstance(t,D.NegatedToken)}D.isNegatedToken=xK;D.RegexToken="RegexToken";function LK(t){return D.reflection.isInstance(t,D.RegexToken)}D.isRegexToken=LK;D.RuleCall="RuleCall";function MK(t){return D.reflection.isInstance(t,D.RuleCall)}D.isRuleCall=MK;D.TerminalAlternatives="TerminalAlternatives";function $K(t){return D.reflection.isInstance(t,D.TerminalAlternatives)}D.isTerminalAlternatives=$K;D.TerminalGroup="TerminalGroup";function FK(t){return D.reflection.isInstance(t,D.TerminalGroup)}D.isTerminalGroup=FK;D.TerminalRuleCall="TerminalRuleCall";function jK(t){return D.reflection.isInstance(t,D.TerminalRuleCall)}D.isTerminalRuleCall=jK;D.UnorderedGroup="UnorderedGroup";function UK(t){return D.reflection.isInstance(t,D.UnorderedGroup)}D.isUnorderedGroup=UK;D.UntilToken="UntilToken";function GK(t){return D.reflection.isInstance(t,D.UntilToken)}D.isUntilToken=GK;D.Wildcard="Wildcard";function WK(t){return D.reflection.isInstance(t,D.Wildcard)}D.isWildcard=WK;var Kd=class extends aK.AbstractAstReflection{getAllTypes(){return["AbstractElement","AbstractRule","AbstractType","Action","Alternatives","Assignment","AtomType","CharacterRange","Condition","Conjunction","CrossReference","Disjunction","Grammar","GrammarImport","Group","InferredType","Interface","Keyword","LiteralCondition","NamedArgument","NegatedToken","Negation","Parameter","ParameterReference","ParserRule","RegexToken","ReturnType","RuleCall","TerminalAlternatives","TerminalGroup","TerminalRule","TerminalRuleCall","Type","TypeAttribute","UnorderedGroup","UntilToken","Wildcard"]}computeIsSubtype(e,r){switch(e){case D.Conjunction:case D.Disjunction:case D.LiteralCondition:case D.Negation:case D.ParameterReference:return this.isSubtype(D.Condition,r);case D.Interface:case D.Type:return this.isSubtype(D.AbstractType,r);case D.ParserRule:return this.isSubtype(D.AbstractRule,r)||this.isSubtype(D.AbstractType,r);case D.TerminalRule:return this.isSubtype(D.AbstractRule,r);case D.Action:return this.isSubtype(D.AbstractElement,r)||this.isSubtype(D.AbstractType,r);case D.Alternatives:case D.Assignment:case D.CharacterRange:case D.CrossReference:case D.Group:case D.Keyword:case D.NegatedToken:case D.RegexToken:case D.RuleCall:case D.TerminalAlternatives:case D.TerminalGroup:case D.TerminalRuleCall:case D.UnorderedGroup:case D.UntilToken:case D.Wildcard:return this.isSubtype(D.AbstractElement,r);default:return!1}}getReferenceType(e){let r=`${e.container.$type}:${e.property}`;switch(r){case"Action:type":case"AtomType:refType":case"CrossReference:type":case"Interface:superTypes":case"ParserRule:returnType":return D.AbstractType;case"Grammar:hiddenTokens":case"ParserRule:hiddenTokens":case"RuleCall:rule":return D.AbstractRule;case"Grammar:usedGrammars":return D.Grammar;case"NamedArgument:parameter":case"ParameterReference:parameter":return D.Parameter;case"TerminalRuleCall:rule":return D.TerminalRule;default:throw new Error(`${r} is not a valid reference id.`)}}getTypeMetaData(e){switch(e){case"AtomType":return{name:"AtomType",mandatory:[{name:"isArray",type:"boolean"},{name:"isRef",type:"boolean"}]};case"Grammar":return{name:"Grammar",mandatory:[{name:"definesHiddenTokens",type:"boolean"},{name:"hiddenTokens",type:"array"},{name:"imports",type:"array"},{name:"interfaces",type:"array"},{name:"isDeclared",type:"boolean"},{name:"rules",type:"array"},{name:"types",type:"array"},{name:"usedGrammars",type:"array"}]};case"Interface":return{name:"Interface",mandatory:[{name:"attributes",type:"array"},{name:"superTypes",type:"array"}]};case"LiteralCondition":return{name:"LiteralCondition",mandatory:[{name:"true",type:"boolean"}]};case"NamedArgument":return{name:"NamedArgument",mandatory:[{name:"calledByName",type:"boolean"}]};case"ParserRule":return{name:"ParserRule",mandatory:[{name:"definesHiddenTokens",type:"boolean"},{name:"entry",type:"boolean"},{name:"fragment",type:"boolean"},{name:"hiddenTokens",type:"array"},{name:"parameters",type:"array"},{name:"wildcard",type:"boolean"}]};case"TerminalRule":return{name:"TerminalRule",mandatory:[{name:"fragment",type:"boolean"},{name:"hidden",type:"boolean"}]};case"Type":return{name:"Type",mandatory:[{name:"typeAlternatives",type:"array"}]};case"TypeAttribute":return{name:"TypeAttribute",mandatory:[{name:"isOptional",type:"boolean"},{name:"typeAlternatives",type:"array"}]};case"Alternatives":return{name:"Alternatives",mandatory:[{name:"elements",type:"array"}]};case"CrossReference":return{name:"CrossReference",mandatory:[{name:"deprecatedSyntax",type:"boolean"}]};case"Group":return{name:"Group",mandatory:[{name:"elements",type:"array"}]};case"RuleCall":return{name:"RuleCall",mandatory:[{name:"arguments",type:"array"}]};case"TerminalAlternatives":return{name:"TerminalAlternatives",mandatory:[{name:"elements",type:"array"}]};case"TerminalGroup":return{name:"TerminalGroup",mandatory:[{name:"elements",type:"array"}]};case"UnorderedGroup":return{name:"UnorderedGroup",mandatory:[{name:"elements",type:"array"}]};default:return{name:e,mandatory:[]}}}};D.LangiumGrammarAstReflection=Kd;D.reflection=new Kd});var ro=h(Mt=>{"use strict";Object.defineProperty(Mt,"__esModule",{value:!0});Mt.addSubTypes=Mt.sortInterfacesTopologically=Mt.mergeTypesAndInterfaces=Mt.mergeInterfaces=Mt.comparePropertyType=Mt.collectSuperTypes=Mt.collectChildrenTypes=Mt.distinctAndSorted=Mt.collectAllProperties=void 0;var HK=cn(),ba=Ke();function KK(t){let e=new HK.MultiMap;for(let r of t)e.addAll(r.name,r.properties);for(let r of t)for(let n of r.printingSuperTypes){let i=e.get(n);i&&e.addAll(r.name,i)}return e}Mt.collectAllProperties=KK;function fy(t,e){return Array.from(new Set(t)).sort(e)}Mt.distinctAndSorted=fy;function MP(t,e,r,n){let i=new Set;return i.add(t),e.findReferences(t,{}).forEach(a=>{let s=r.getOrCreateDocument(a.sourceUri),u=n.getAstNode(s.parseResult.value,a.sourcePath);(0,ba.isInterface)(u)?(i.add(u),MP(u,e,r,n).forEach(p=>i.add(p))):u&&(0,ba.isType)(u.$container)&&i.add(u.$container)}),i}Mt.collectChildrenTypes=MP;function py(t){let e=new Set;return(0,ba.isInterface)(t)?(e.add(t),t.superTypes.forEach(r=>{if((0,ba.isInterface)(r.ref)){e.add(r.ref);let n=py(r.ref);for(let i of n)e.add(i)}})):(0,ba.isType)(t)&&t.typeAlternatives.forEach(r=>{var n;if(!((n=r.refType)===null||n===void 0)&&n.ref&&((0,ba.isInterface)(r.refType.ref)||(0,ba.isType)(r.refType.ref))){let i=py(r.refType.ref);for(let o of i)e.add(o)}}),e}Mt.collectSuperTypes=py;function BK(t,e){return t.array===e.array&&t.reference===e.reference&&VK(t.types,e.types)}Mt.comparePropertyType=BK;function VK(t,e,r=(n,i)=>n===i){let n=fy(t),i=fy(e);return n.length!==i.length?!1:i.every((o,a)=>r(o,n[a]))}function zK(t,e){return t.interfaces.concat(e.interfaces)}Mt.mergeInterfaces=zK;function YK(t){return t.interfaces.concat(t.unions)}Mt.mergeTypesAndInterfaces=YK;function XK(t){let e=t.sort((i,o)=>i.name.localeCompare(o.name)).map(i=>({value:i,nodes:[]}));for(let i of e)i.nodes=e.filter(o=>i.value.realSuperTypes.has(o.value.name));let r=[],n=e.filter(i=>i.nodes.length===0);for(;n.length>0;){let i=n.shift();r.includes(i)||(r.push(i),e.filter(o=>o.nodes.includes(i)).forEach(o=>n.push(o)))}return r.map(i=>i.value)}Mt.sortInterfacesTopologically=XK;function JK(t){var e;for(let r of t.values())for(let n of r.realSuperTypes)(e=t.get(n))===null||e===void 0||e.subTypes.add(r.name)}Mt.addSubTypes=JK});var my=h(Bd=>{"use strict";Object.defineProperty(Bd,"__esModule",{value:!0});Bd.processGeneratorNode=void 0;var Cc=ys(),hy=class{constructor(e){this.defaultIndentation="    ",this.pendingIndent=!0,this.currentIndents=[],this.lines=[[]],typeof e=="string"?this.defaultIndentation=e:typeof e=="number"&&(this.defaultIndentation="".padStart(e))}get content(){return this.lines.map(e=>e.join("")).join("")}get currentLineNumber(){return this.lines.length-1}get currentLineContent(){return this.lines[this.currentLineNumber].join("")}append(e){e.length>0&&this.lines[this.currentLineNumber].push(e)}increaseIndent(e){this.currentIndents.push(e)}decreaseIndent(){this.currentIndents.pop()}resetCurrentLine(){this.lines[this.currentLineNumber]=[]}addNewLine(){this.pendingIndent=!0,this.lines.push([])}};function QK(t,e){let r=new hy(e);return $P(t,r),r.content}Bd.processGeneratorNode=QK;function $P(t,e){typeof t=="string"?ZK(t,e):t instanceof Cc.IndentNode?eB(t,e):t instanceof Cc.CompositeGeneratorNode?UP(t,e):t instanceof Cc.NewLineNode&&tB(t,e)}function FP(t,e){return typeof t=="string"?GP(t):t instanceof Cc.CompositeGeneratorNode?t.contents.some(r=>FP(r,e)):t instanceof Cc.NewLineNode?!(t.ifNotEmpty&&e.currentLineContent.length===0):!1}function ZK(t,e){t&&(e.pendingIndent&&jP(e,!1),e.append(t))}function jP(t,e){var r;let n="";for(let i of t.currentIndents.filter(o=>o.indentEmptyLines||!e))n+=(r=i.indentation)!==null&&r!==void 0?r:t.defaultIndentation;t.append(n),t.pendingIndent=!1}function UP(t,e){for(let r of t.contents)$P(r,e)}function eB(t,e){var r;if(FP(t,e)){t.indentImmediately&&!e.pendingIndent&&e.append((r=t.indentation)!==null&&r!==void 0?r:e.defaultIndentation);try{e.increaseIndent(t),UP(t,e)}finally{e.decreaseIndent()}}}function tB(t,e){t.ifNotEmpty&&!GP(e.currentLineContent)?e.resetCurrentLine():(e.pendingIndent&&jP(e,!0),e.append(t.lineDelimiter),e.addNewLine())}function GP(t){return t.trimStart()!==""}});var ys=h(ht=>{"use strict";Object.defineProperty(ht,"__esModule",{value:!0});ht.NLEmpty=ht.NL=ht.NewLineNode=ht.IndentNode=ht.CompositeGeneratorNode=ht.toString=ht.isNewLineNode=ht.isGeneratorNode=ht.EOL=void 0;var rB=my();ht.EOL=typeof process>"u"?`
`:process.platform==="win32"?`\r
`:`
`;function WP(t){return t instanceof Pc||t instanceof Ac||t instanceof Ca}ht.isGeneratorNode=WP;function nB(t){return t instanceof Ca}ht.isNewLineNode=nB;function iB(t,e){return WP(t)?(0,rB.processGeneratorNode)(t,e):String(t)}ht.toString=iB;var Pc=class{constructor(...e){this.contents=[],this.append(...e)}isEmpty(){return this.contents.length===0}append(...e){for(let r of e)typeof r=="function"?r(this):r&&this.contents.push(r);return this}appendIf(e,r){return e?this.append(...r):this}appendNewLine(){return this.append(ht.NL)}appendNewLineIf(e){return e?this.append(ht.NL):this}appendNewLineIfNotEmpty(){return this.append(ht.NLEmpty)}appendNewLineIfNotEmptyIf(e){return e?this.appendNewLineIfNotEmpty():this}indent(e,r){let n=new Ac(r,!1);return this.contents.push(n),e&&e(n),this}};ht.CompositeGeneratorNode=Pc;var Ac=class extends Pc{constructor(e,r=!0,n=!1){super(),this.indentImmediately=!0,this.indentEmptyLines=!1,typeof e=="string"?this.indentation=e:typeof e=="number"&&(this.indentation="".padStart(e)),this.indentImmediately=r,this.indentEmptyLines=n}};ht.IndentNode=Ac;var Ca=class{constructor(e,r=!1){this.ifNotEmpty=!1,this.lineDelimiter=e??ht.EOL,this.ifNotEmpty=r}};ht.NewLineNode=Ca;ht.NL=new Ca;ht.NLEmpty=new Ca(void 0,!0)});var $o=h(Jr=>{"use strict";Object.defineProperty(Jr,"__esModule",{value:!0});Jr.propertyTypesToString=Jr.TypeResolutionError=Jr.InterfaceType=Jr.UnionType=Jr.isInterfaceType=Jr.isUnionType=void 0;var $t=ys(),Vd=my(),oB=cn(),vs=ro();function aB(t){return t&&"alternatives"in t}Jr.isUnionType=aB;function sB(t){return t&&"properties"in t}Jr.isInterfaceType=sB;var gy=class{constructor(e,r,n){var i;this.realSuperTypes=new Set,this.subTypes=new Set,this.containerTypes=new Set,this.typeTypes=new Set,this.name=e,this.alternatives=r,this.reflection=(i=n?.reflection)!==null&&i!==void 0?i:!1}toAstTypesString(){let e=new $t.CompositeGeneratorNode;return e.append(`export type ${this.name} = ${zd(this.alternatives,"AstType")};`,$t.NL),this.reflection&&(e.append($t.NL),KP(e,this.name)),(0,Vd.processGeneratorNode)(e)}toDeclaredTypesString(e){let r=new $t.CompositeGeneratorNode;return r.append(`type ${_y(this.name,e)} = ${zd(this.alternatives,"DeclaredType")};`,$t.NL),(0,Vd.processGeneratorNode)(r)}};Jr.UnionType=gy;var yy=class{constructor(e,r,n){this.realSuperTypes=new Set,this.subTypes=new Set,this.containerTypes=new Set,this.typeTypes=new Set,this.printingSuperTypes=[],this.superProperties=new oB.MultiMap,this.name=e,this.realSuperTypes=new Set(r),this.printingSuperTypes=[...r],this.properties=n,n.forEach(i=>this.superProperties.add(i.name,i))}toAstTypesString(){let e=new $t.CompositeGeneratorNode,r=this.printingSuperTypes.length>0?(0,vs.distinctAndSorted)([...this.printingSuperTypes]):["AstNode"];return e.append(`export interface ${this.name} extends ${r.join(", ")} {`,$t.NL),e.indent(n=>{this.containerTypes.size>0&&n.append(`readonly $container: ${(0,vs.distinctAndSorted)([...this.containerTypes]).join(" | ")};`,$t.NL),this.typeTypes.size>0&&n.append(`readonly $type: ${(0,vs.distinctAndSorted)([...this.typeTypes]).map(i=>`'${i}'`).join(" | ")};`,$t.NL),HP(n,this.properties,"AstType")}),e.append("}",$t.NL),e.append($t.NL),KP(e,this.name),(0,Vd.processGeneratorNode)(e)}toDeclaredTypesString(e){let r=new $t.CompositeGeneratorNode,n=_y(this.name,e),i=Array.from(this.printingSuperTypes).join(", ");return r.append(`interface ${n}${i.length>0?` extends ${i}`:""} {`,$t.NL),r.indent(o=>HP(o,this.properties,"DeclaredType",e)),r.append("}",$t.NL),(0,Vd.processGeneratorNode)(r)}};Jr.InterfaceType=yy;var vy=class extends Error{constructor(e,r){super(e),this.name="TypeResolutionError",this.target=r}};Jr.TypeResolutionError=vy;function zd(t,e="AstType"){function r(n){let i=(0,vs.distinctAndSorted)(n.types).join(" | ");return i=n.reference?e==="AstType"?`Reference<${i}>`:`@${i}`:i,i=n.array?e==="AstType"?`Array<${i}>`:`${i}[]`:i,i}return(0,vs.distinctAndSorted)(t.map(r)).join(" | ")}Jr.propertyTypesToString=zd;function HP(t,e,r,n=new Set){function i(o){let a=r==="AstType"?o.name:_y(o.name,n),s=o.optional&&!o.typeAlternatives.some(d=>d.array)&&!o.typeAlternatives.every(d=>d.types.length===1&&d.types[0]==="boolean"),u=zd(o.typeAlternatives,r);return`${a}${s?"?":""}: ${u}`}(0,vs.distinctAndSorted)(e,(o,a)=>o.name.localeCompare(a.name)).forEach(o=>t.append(i(o),$t.NL))}function KP(t,e){t.append(`export const ${e} = '${e}';`,$t.NL),t.append($t.NL),t.append(`export function is${e}(item: unknown): item is ${e} {`,$t.NL),t.indent(r=>r.append(`return reflection.isInstance(item, ${e});`,$t.NL)),t.append("}",$t.NL)}function _y(t,e){return e.has(t)?`^${t}`:t}});var Ts=h(_s=>{"use strict";Object.defineProperty(_s,"__esModule",{value:!0});_s.DefaultNameProvider=_s.isNamed=void 0;var uB=Yt();function BP(t){return typeof t.name=="string"}_s.isNamed=BP;var Ty=class{getName(e){if(BP(e))return e.name}getNameNode(e){return(0,uB.findNodeForProperty)(e.$cstNode,"name")}};_s.DefaultNameProvider=Ty});var Ye=h(mt=>{"use strict";Object.defineProperty(mt,"__esModule",{value:!0});mt.copyAstNode=mt.findLocalReferences=mt.streamReferences=mt.streamAst=mt.streamAllContents=mt.streamContents=mt.findRootNode=mt.getDocument=mt.hasContainerOfType=mt.getContainerOfType=mt.linkContentToContainer=void 0;var bi=Xr(),Pa=tr();function VP(t){for(let[e,r]of Object.entries(t))e.startsWith("$")||(Array.isArray(r)?r.forEach((n,i)=>{(0,bi.isAstNode)(n)&&(n.$container=t,n.$containerProperty=e,n.$containerIndex=i)}):(0,bi.isAstNode)(r)&&(r.$container=t,r.$containerProperty=e))}mt.linkContentToContainer=VP;function cB(t,e){let r=t;for(;r;){if(e(r))return r;r=r.$container}}mt.getContainerOfType=cB;function lB(t,e){let r=t;for(;r;){if(e(r))return!0;r=r.$container}return!1}mt.hasContainerOfType=lB;function zP(t){let r=YP(t).$document;if(!r)throw new Error("AST node has no document.");return r}mt.getDocument=zP;function YP(t){for(;t.$container;)t=t.$container;return t}mt.findRootNode=YP;function by(t){if(!t)throw new Error("Node must be an AstNode.");return new Pa.StreamImpl(()=>({keys:Object.keys(t),keyIndex:0,arrayIndex:0}),e=>{for(;e.keyIndex<e.keys.length;){let r=e.keys[e.keyIndex];if(!r.startsWith("$")){let n=t[r];if((0,bi.isAstNode)(n))return e.keyIndex++,{done:!1,value:n};if(Array.isArray(n)){for(;e.arrayIndex<n.length;){let i=e.arrayIndex++,o=n[i];if((0,bi.isAstNode)(o))return{done:!1,value:o}}e.arrayIndex=0}}e.keyIndex++}return Pa.DONE_RESULT})}mt.streamContents=by;function dB(t){if(!t)throw new Error("Root node must be an AstNode.");return new Pa.TreeStreamImpl(t,e=>by(e))}mt.streamAllContents=dB;function XP(t){if(!t)throw new Error("Root node must be an AstNode.");return new Pa.TreeStreamImpl(t,e=>by(e),{includeRoot:!0})}mt.streamAst=XP;function JP(t){return new Pa.StreamImpl(()=>({keys:Object.keys(t),keyIndex:0,arrayIndex:0}),e=>{for(;e.keyIndex<e.keys.length;){let r=e.keys[e.keyIndex];if(!r.startsWith("$")){let n=t[r];if((0,bi.isReference)(n))return e.keyIndex++,{done:!1,value:{reference:n,container:t,property:r}};if(Array.isArray(n)){for(;e.arrayIndex<n.length;){let i=e.arrayIndex++,o=n[i];if((0,bi.isReference)(o))return{done:!1,value:{reference:o,container:t,property:r,index:i}}}e.arrayIndex=0}}e.keyIndex++}return Pa.DONE_RESULT})}mt.streamReferences=JP;function fB(t,e=zP(t).parseResult.value){let r=[];return XP(e).forEach(n=>{JP(n).forEach(i=>{i.reference.ref===t&&r.push(i.reference)})}),(0,Pa.stream)(r)}mt.findLocalReferences=fB;function Ry(t,e){let r={$type:t.$type};for(let[n,i]of Object.entries(t))if(!n.startsWith("$"))if((0,bi.isAstNode)(i))r[n]=Ry(i,e);else if((0,bi.isReference)(i))r[n]=e(r,n,i.$refNode,i.$refText);else if(Array.isArray(i)){let o=[];for(let a of i)(0,bi.isAstNode)(a)?o.push(Ry(a,e)):(0,bi.isReference)(a)?o.push(e(r,n,a.$refNode,a.$refText)):o.push(a);r[n]=o}else r[n]=i;return VP(r),r}mt.copyAstNode=Ry});var Sc=h((QP,Yd)=>{(function(t,e){typeof define=="function"&&define.amd?define([],e):typeof Yd=="object"&&Yd.exports?Yd.exports=e():t.regexpToAst=e()})(typeof self<"u"?self:QP,function(){function t(){}t.prototype.saveState=function(){return{idx:this.idx,input:this.input,groupIdx:this.groupIdx}},t.prototype.restoreState=function(_){this.idx=_.idx,this.input=_.input,this.groupIdx=_.groupIdx},t.prototype.pattern=function(_){this.idx=0,this.input=_,this.groupIdx=0,this.consumeChar("/");var w=this.disjunction();this.consumeChar("/");for(var k={type:"Flags",loc:{begin:this.idx,end:_.length},global:!1,ignoreCase:!1,multiLine:!1,unicode:!1,sticky:!1};this.isRegExpFlag();)switch(this.popChar()){case"g":a(k,"global");break;case"i":a(k,"ignoreCase");break;case"m":a(k,"multiLine");break;case"u":a(k,"unicode");break;case"y":a(k,"sticky");break}if(this.idx!==this.input.length)throw Error("Redundant input: "+this.input.substring(this.idx));return{type:"Pattern",flags:k,value:w,loc:this.loc(0)}},t.prototype.disjunction=function(){var _=[],w=this.idx;for(_.push(this.alternative());this.peekChar()==="|";)this.consumeChar("|"),_.push(this.alternative());return{type:"Disjunction",value:_,loc:this.loc(w)}},t.prototype.alternative=function(){for(var _=[],w=this.idx;this.isTerm();)_.push(this.term());return{type:"Alternative",value:_,loc:this.loc(w)}},t.prototype.term=function(){return this.isAssertion()?this.assertion():this.atom()},t.prototype.assertion=function(){var _=this.idx;switch(this.popChar()){case"^":return{type:"StartAnchor",loc:this.loc(_)};case"$":return{type:"EndAnchor",loc:this.loc(_)};case"\\":switch(this.popChar()){case"b":return{type:"WordBoundary",loc:this.loc(_)};case"B":return{type:"NonWordBoundary",loc:this.loc(_)}}throw Error("Invalid Assertion Escape");case"(":this.consumeChar("?");var w;switch(this.popChar()){case"=":w="Lookahead";break;case"!":w="NegativeLookahead";break}s(w);var k=this.disjunction();return this.consumeChar(")"),{type:w,value:k,loc:this.loc(_)}}u()},t.prototype.quantifier=function(_){var w,k=this.idx;switch(this.popChar()){case"*":w={atLeast:0,atMost:1/0};break;case"+":w={atLeast:1,atMost:1/0};break;case"?":w={atLeast:0,atMost:1};break;case"{":var N=this.integerIncludingZero();switch(this.popChar()){case"}":w={atLeast:N,atMost:N};break;case",":var C;this.isDigit()?(C=this.integerIncludingZero(),w={atLeast:N,atMost:C}):w={atLeast:N,atMost:1/0},this.consumeChar("}");break}if(_===!0&&w===void 0)return;s(w);break}if(!(_===!0&&w===void 0))return s(w),this.peekChar(0)==="?"?(this.consumeChar("?"),w.greedy=!1):w.greedy=!0,w.type="Quantifier",w.loc=this.loc(k),w},t.prototype.atom=function(){var _,w=this.idx;switch(this.peekChar()){case".":_=this.dotAll();break;case"\\":_=this.atomEscape();break;case"[":_=this.characterClass();break;case"(":_=this.group();break}return _===void 0&&this.isPatternCharacter()&&(_=this.patternCharacter()),s(_),_.loc=this.loc(w),this.isQuantifier()&&(_.quantifier=this.quantifier()),_},t.prototype.dotAll=function(){return this.consumeChar("."),{type:"Set",complement:!0,value:[i(`
`),i("\r"),i("\u2028"),i("\u2029")]}},t.prototype.atomEscape=function(){switch(this.consumeChar("\\"),this.peekChar()){case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":return this.decimalEscapeAtom();case"d":case"D":case"s":case"S":case"w":case"W":return this.characterClassEscape();case"f":case"n":case"r":case"t":case"v":return this.controlEscapeAtom();case"c":return this.controlLetterEscapeAtom();case"0":return this.nulCharacterAtom();case"x":return this.hexEscapeSequenceAtom();case"u":return this.regExpUnicodeEscapeSequenceAtom();default:return this.identityEscapeAtom()}},t.prototype.decimalEscapeAtom=function(){var _=this.positiveInteger();return{type:"GroupBackReference",value:_}},t.prototype.characterClassEscape=function(){var _,w=!1;switch(this.popChar()){case"d":_=p;break;case"D":_=p,w=!0;break;case"s":_=y;break;case"S":_=y,w=!0;break;case"w":_=m;break;case"W":_=m,w=!0;break}return s(_),{type:"Set",value:_,complement:w}},t.prototype.controlEscapeAtom=function(){var _;switch(this.popChar()){case"f":_=i("\f");break;case"n":_=i(`
`);break;case"r":_=i("\r");break;case"t":_=i("	");break;case"v":_=i("\v");break}return s(_),{type:"Character",value:_}},t.prototype.controlLetterEscapeAtom=function(){this.consumeChar("c");var _=this.popChar();if(/[a-zA-Z]/.test(_)===!1)throw Error("Invalid ");var w=_.toUpperCase().charCodeAt(0)-64;return{type:"Character",value:w}},t.prototype.nulCharacterAtom=function(){return this.consumeChar("0"),{type:"Character",value:i("\0")}},t.prototype.hexEscapeSequenceAtom=function(){return this.consumeChar("x"),this.parseHexDigits(2)},t.prototype.regExpUnicodeEscapeSequenceAtom=function(){return this.consumeChar("u"),this.parseHexDigits(4)},t.prototype.identityEscapeAtom=function(){var _=this.popChar();return{type:"Character",value:i(_)}},t.prototype.classPatternCharacterAtom=function(){switch(this.peekChar()){case`
`:case"\r":case"\u2028":case"\u2029":case"\\":case"]":throw Error("TBD");default:var _=this.popChar();return{type:"Character",value:i(_)}}},t.prototype.characterClass=function(){var _=[],w=!1;for(this.consumeChar("["),this.peekChar(0)==="^"&&(this.consumeChar("^"),w=!0);this.isClassAtom();){var k=this.classAtom(),N=k.type==="Character";if(N&&this.isRangeDash()){this.consumeChar("-");var C=this.classAtom(),E=C.type==="Character";if(E){if(C.value<k.value)throw Error("Range out of order in character class");_.push({from:k.value,to:C.value})}else o(k.value,_),_.push(i("-")),o(C.value,_)}else o(k.value,_)}return this.consumeChar("]"),{type:"Set",complement:w,value:_}},t.prototype.classAtom=function(){switch(this.peekChar()){case"]":case`
`:case"\r":case"\u2028":case"\u2029":throw Error("TBD");case"\\":return this.classEscape();default:return this.classPatternCharacterAtom()}},t.prototype.classEscape=function(){switch(this.consumeChar("\\"),this.peekChar()){case"b":return this.consumeChar("b"),{type:"Character",value:i("\b")};case"d":case"D":case"s":case"S":case"w":case"W":return this.characterClassEscape();case"f":case"n":case"r":case"t":case"v":return this.controlEscapeAtom();case"c":return this.controlLetterEscapeAtom();case"0":return this.nulCharacterAtom();case"x":return this.hexEscapeSequenceAtom();case"u":return this.regExpUnicodeEscapeSequenceAtom();default:return this.identityEscapeAtom()}},t.prototype.group=function(){var _=!0;switch(this.consumeChar("("),this.peekChar(0)){case"?":this.consumeChar("?"),this.consumeChar(":"),_=!1;break;default:this.groupIdx++;break}var w=this.disjunction();this.consumeChar(")");var k={type:"Group",capturing:_,value:w};return _&&(k.idx=this.groupIdx),k},t.prototype.positiveInteger=function(){var _=this.popChar();if(n.test(_)===!1)throw Error("Expecting a positive integer");for(;r.test(this.peekChar(0));)_+=this.popChar();return parseInt(_,10)},t.prototype.integerIncludingZero=function(){var _=this.popChar();if(r.test(_)===!1)throw Error("Expecting an integer");for(;r.test(this.peekChar(0));)_+=this.popChar();return parseInt(_,10)},t.prototype.patternCharacter=function(){var _=this.popChar();switch(_){case`
`:case"\r":case"\u2028":case"\u2029":case"^":case"$":case"\\":case".":case"*":case"+":case"?":case"(":case")":case"[":case"|":throw Error("TBD");default:return{type:"Character",value:i(_)}}},t.prototype.isRegExpFlag=function(){switch(this.peekChar(0)){case"g":case"i":case"m":case"u":case"y":return!0;default:return!1}},t.prototype.isRangeDash=function(){return this.peekChar()==="-"&&this.isClassAtom(1)},t.prototype.isDigit=function(){return r.test(this.peekChar(0))},t.prototype.isClassAtom=function(_){switch(_===void 0&&(_=0),this.peekChar(_)){case"]":case`
`:case"\r":case"\u2028":case"\u2029":return!1;default:return!0}},t.prototype.isTerm=function(){return this.isAtom()||this.isAssertion()},t.prototype.isAtom=function(){if(this.isPatternCharacter())return!0;switch(this.peekChar(0)){case".":case"\\":case"[":case"(":return!0;default:return!1}},t.prototype.isAssertion=function(){switch(this.peekChar(0)){case"^":case"$":return!0;case"\\":switch(this.peekChar(1)){case"b":case"B":return!0;default:return!1}case"(":return this.peekChar(1)==="?"&&(this.peekChar(2)==="="||this.peekChar(2)==="!");default:return!1}},t.prototype.isQuantifier=function(){var _=this.saveState();try{return this.quantifier(!0)!==void 0}catch{return!1}finally{this.restoreState(_)}},t.prototype.isPatternCharacter=function(){switch(this.peekChar()){case"^":case"$":case"\\":case".":case"*":case"+":case"?":case"(":case")":case"[":case"|":case"/":case`
`:case"\r":case"\u2028":case"\u2029":return!1;default:return!0}},t.prototype.parseHexDigits=function(_){for(var w="",k=0;k<_;k++){var N=this.popChar();if(e.test(N)===!1)throw Error("Expecting a HexDecimal digits");w+=N}var C=parseInt(w,16);return{type:"Character",value:C}},t.prototype.peekChar=function(_){return _===void 0&&(_=0),this.input[this.idx+_]},t.prototype.popChar=function(){var _=this.peekChar(0);return this.consumeChar(),_},t.prototype.consumeChar=function(_){if(_!==void 0&&this.input[this.idx]!==_)throw Error("Expected: '"+_+"' but found: '"+this.input[this.idx]+"' at offset: "+this.idx);if(this.idx>=this.input.length)throw Error("Unexpected end of input");this.idx++},t.prototype.loc=function(_){return{begin:_,end:this.idx}};var e=/[0-9a-fA-F]/,r=/[0-9]/,n=/[1-9]/;function i(_){return _.charCodeAt(0)}function o(_,w){_.length!==void 0?_.forEach(function(k){w.push(k)}):w.push(_)}function a(_,w){if(_[w]===!0)throw"duplicate flag "+w;_[w]=!0}function s(_){if(_===void 0)throw Error("Internal Error - Should never get here!")}function u(){throw Error("Internal Error - Should never get here!")}var d,p=[];for(d=i("0");d<=i("9");d++)p.push(d);var m=[i("_")].concat(p);for(d=i("a");d<=i("z");d++)m.push(d);for(d=i("A");d<=i("Z");d++)m.push(d);var y=[i(" "),i("\f"),i(`
`),i("\r"),i("	"),i("\v"),i("	"),i("\xA0"),i("\u1680"),i("\u2000"),i("\u2001"),i("\u2002"),i("\u2003"),i("\u2004"),i("\u2005"),i("\u2006"),i("\u2007"),i("\u2008"),i("\u2009"),i("\u200A"),i("\u2028"),i("\u2029"),i("\u202F"),i("\u205F"),i("\u3000"),i("\uFEFF")];function S(){}return S.prototype.visitChildren=function(_){for(var w in _){var k=_[w];_.hasOwnProperty(w)&&(k.type!==void 0?this.visit(k):Array.isArray(k)&&k.forEach(function(N){this.visit(N)},this))}},S.prototype.visit=function(_){switch(_.type){case"Pattern":this.visitPattern(_);break;case"Flags":this.visitFlags(_);break;case"Disjunction":this.visitDisjunction(_);break;case"Alternative":this.visitAlternative(_);break;case"StartAnchor":this.visitStartAnchor(_);break;case"EndAnchor":this.visitEndAnchor(_);break;case"WordBoundary":this.visitWordBoundary(_);break;case"NonWordBoundary":this.visitNonWordBoundary(_);break;case"Lookahead":this.visitLookahead(_);break;case"NegativeLookahead":this.visitNegativeLookahead(_);break;case"Character":this.visitCharacter(_);break;case"Set":this.visitSet(_);break;case"Group":this.visitGroup(_);break;case"GroupBackReference":this.visitGroupBackReference(_);break;case"Quantifier":this.visitQuantifier(_);break}this.visitChildren(_)},S.prototype.visitPattern=function(_){},S.prototype.visitFlags=function(_){},S.prototype.visitDisjunction=function(_){},S.prototype.visitAlternative=function(_){},S.prototype.visitStartAnchor=function(_){},S.prototype.visitEndAnchor=function(_){},S.prototype.visitWordBoundary=function(_){},S.prototype.visitNonWordBoundary=function(_){},S.prototype.visitLookahead=function(_){},S.prototype.visitNegativeLookahead=function(_){},S.prototype.visitCharacter=function(_){},S.prototype.visitSet=function(_){},S.prototype.visitGroup=function(_){},S.prototype.visitGroupBackReference=function(_){},S.prototype.visitQuantifier=function(_){},{RegExpParser:t,BaseRegExpVisitor:S,VERSION:"0.5.0"}})});var Rs=h(Ar=>{"use strict";Object.defineProperty(Ar,"__esModule",{value:!0});Ar.partialRegex=Ar.partialMatches=Ar.getCaseInsensitivePattern=Ar.escapeRegExp=Ar.isWhitespaceRegExp=Ar.isMultilineComment=Ar.getTerminalParts=void 0;var ZP=Sc(),eA=new ZP.RegExpParser,Cy=class extends ZP.BaseRegExpVisitor{constructor(){super(...arguments),this.isStarting=!0,this.endRegexStack=[],this.multiline=!1}get endRegex(){return this.endRegexStack.join("")}reset(e){this.multiline=!1,this.regex=e,this.startRegex="",this.isStarting=!0,this.endRegexStack=[]}visitGroup(e){e.quantifier&&(this.isStarting=!1,this.endRegexStack=[])}visitCharacter(e){let r=String.fromCharCode(e.value);if(!this.multiline&&r===`
`&&(this.multiline=!0),e.quantifier)this.isStarting=!1,this.endRegexStack=[];else{let n=Py(r);this.endRegexStack.push(n),this.isStarting&&(this.startRegex+=n)}}visitSet(e){if(!this.multiline){let r=this.regex.substring(e.loc.begin,e.loc.end),n=new RegExp(r);this.multiline=!!`
`.match(n)}if(e.quantifier)this.isStarting=!1,this.endRegexStack=[];else{let r=this.regex.substring(e.loc.begin,e.loc.end);this.endRegexStack.push(r),this.isStarting&&(this.startRegex+=r)}}},Aa=new Cy;function pB(t){try{typeof t!="string"&&(t=t.source),t=`/${t}/`;let e=eA.pattern(t),r=[];for(let n of e.value.value)Aa.reset(t),Aa.visit(n),r.push({start:Aa.startRegex,end:Aa.endRegex});return r}catch{return[]}}Ar.getTerminalParts=pB;function hB(t){try{return typeof t!="string"&&(t=t.source),t=`/${t}/`,Aa.reset(t),Aa.visit(eA.pattern(t)),Aa.multiline}catch{return!1}}Ar.isMultilineComment=hB;function mB(t){return(typeof t=="string"?new RegExp(t):t).test(" ")}Ar.isWhitespaceRegExp=mB;function Py(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}Ar.escapeRegExp=Py;function gB(t){return Array.prototype.map.call(t,e=>/\w/.test(e)?`[${e.toLowerCase()}${e.toUpperCase()}]`:Py(e)).join("")}Ar.getCaseInsensitivePattern=gB;function yB(t,e){let r=tA(t),n=e.match(r);return!!n&&n[0].length>0}Ar.partialMatches=yB;function tA(t){typeof t=="string"&&(t=new RegExp(t));let e=t,r=t.source,n=0;function i(){let o="",a;function s(d){o+=r.substr(n,d),n+=d}function u(d){o+="(?:"+r.substr(n,d)+"|$)",n+=d}for(;n<r.length;)switch(r[n]){case"\\":switch(r[n+1]){case"c":u(3);break;case"x":u(4);break;case"u":e.unicode?r[n+2]==="{"?u(r.indexOf("}",n)-n+1):u(6):u(2);break;case"p":case"P":e.unicode?u(r.indexOf("}",n)-n+1):u(2);break;case"k":u(r.indexOf(">",n)-n+1);break;default:u(2);break}break;case"[":a=/\[(?:\\.|.)*?\]/g,a.lastIndex=n,a=a.exec(r)||[],u(a[0].length);break;case"|":case"^":case"$":case"*":case"+":case"?":s(1);break;case"{":a=/\{\d+,?\d*\}/g,a.lastIndex=n,a=a.exec(r),a?s(a[0].length):u(1);break;case"(":if(r[n+1]==="?")switch(r[n+2]){case":":o+="(?:",n+=3,o+=i()+"|$)";break;case"=":o+="(?=",n+=3,o+=i()+")";break;case"!":a=n,n+=3,i(),o+=r.substr(a,n-a);break;case"<":switch(r[n+3]){case"=":case"!":a=n,n+=4,i(),o+=r.substr(a,n-a);break;default:s(r.indexOf(">",n)-n+1),o+=i()+"|$)";break}break}else s(1),o+=i()+"|$)";break;case")":return++n,o;default:u(1);break}return o}return new RegExp(i(),t.flags)}Ar.partialRegex=tA});var Xt=h(Pe=>{"use strict";var vB=Pe&&Pe.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var i=Object.getOwnPropertyDescriptor(e,r);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,i)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),_B=Pe&&Pe.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),TB=Pe&&Pe.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var r in t)r!=="default"&&Object.prototype.hasOwnProperty.call(t,r)&&vB(e,t,r);return _B(e,t),e};Object.defineProperty(Pe,"__esModule",{value:!0});Pe.isPrimitiveType=Pe.extractAssignments=Pe.resolveTransitiveImports=Pe.resolveImport=Pe.resolveImportUri=Pe.terminalRegex=Pe.getRuleType=Pe.getActionType=Pe.getExplicitRuleType=Pe.getTypeNameWithoutError=Pe.getTypeName=Pe.getActionAtElement=Pe.isDataTypeRule=Pe.isArrayOperator=Pe.isArrayCardinality=Pe.isOptionalCardinality=void 0;var $e=TB(Ke()),rA=to(),Xd=Ye(),RB=$o(),bB=Rs();function CB(t){return t==="?"||t==="*"}Pe.isOptionalCardinality=CB;function PB(t){return t==="*"||t==="+"}Pe.isArrayCardinality=PB;function AB(t){return t==="+="}Pe.isArrayOperator=AB;function Ey(t){return nA(t,new Set)}Pe.isDataTypeRule=Ey;function nA(t,e){if(e.has(t))return!0;e.add(t);for(let r of(0,Xd.streamAllContents)(t))if($e.isRuleCall(r)){if(!r.rule.ref||$e.isParserRule(r.rule.ref)&&!nA(r.rule.ref,e))return!1}else{if($e.isAssignment(r))return!1;if($e.isAction(r))return!1}return!!t.definition}function iA(t){let e=t.$container;if($e.isGroup(e)){let r=e.elements,n=r.indexOf(t);for(let i=n-1;i>=0;i--){let o=r[i];if($e.isAction(o))return o;{let a=(0,Xd.streamAllContents)(r[i]).find($e.isAction);if(a)return a}}}if($e.isAbstractElement(e))return iA(e)}Pe.getActionAtElement=iA;function ky(t){var e;if($e.isParserRule(t))return Ey(t)?t.name:(e=Ny(t))!==null&&e!==void 0?e:t.name;if($e.isInterface(t)||$e.isType(t)||$e.isReturnType(t))return t.name;if($e.isAction(t)){let r=oA(t);if(r)return r}else if($e.isInferredType(t))return t.name;throw new RB.TypeResolutionError("Cannot get name of Unknown Type",t.$cstNode)}Pe.getTypeName=ky;function SB(t){try{return ky(t)}catch{return"never"}}Pe.getTypeNameWithoutError=SB;function Ny(t){if(t.inferredType)return t.inferredType.name;if(t.dataType)return t.dataType;if(t.returnType){let e=t.returnType.ref;if(e){if($e.isParserRule(e))return e.name;if($e.isInterface(e)||$e.isType(e))return e.name}}}Pe.getExplicitRuleType=Ny;function oA(t){var e;if(t.inferredType)return t.inferredType.name;if(!((e=t.type)===null||e===void 0)&&e.ref)return ky(t.type.ref)}Pe.getActionType=oA;function EB(t){var e,r,n;return $e.isTerminalRule(t)?(r=(e=t.type)===null||e===void 0?void 0:e.name)!==null&&r!==void 0?r:"string":Ey(t)?t.name:(n=Ny(t))!==null&&n!==void 0?n:t.name}Pe.getRuleType=EB;function aA(t){return Ec(t.definition)}Pe.terminalRegex=aA;var wy=/[\s\S]/.source;function Ec(t){if($e.isTerminalAlternatives(t))return kB(t);if($e.isTerminalGroup(t))return NB(t);if($e.isCharacterRange(t))return OB(t);if($e.isTerminalRuleCall(t)){let e=t.rule.ref;if(!e)throw new Error("Missing rule reference.");return no(aA(e),t.cardinality)}else{if($e.isNegatedToken(t))return DB(t);if($e.isUntilToken(t))return wB(t);if($e.isRegexToken(t))return no(t.regex,t.cardinality,!1);if($e.isWildcard(t))return no(wy,t.cardinality);throw new Error("Invalid terminal element.")}}function kB(t){return no(t.elements.map(Ec).join("|"),t.cardinality)}function NB(t){return no(t.elements.map(Ec).join(""),t.cardinality)}function wB(t){return no(`${wy}*?${Ec(t.terminal)}`,t.cardinality)}function DB(t){return no(`(?!${Ec(t.terminal)})${wy}*?`,t.cardinality)}function OB(t){return t.right?no(`[${Ay(t.left)}-${Ay(t.right)}]`,t.cardinality,!1):no(Ay(t.left),t.cardinality,!1)}function Ay(t){return(0,bB.escapeRegExp)(t.value)}function no(t,e,r=!0){return r&&(t=`(${t})`),e?`${t}${e}`:t}function sA(t){if(t.path===void 0||t.path.length===0)return;let e=rA.Utils.dirname((0,Xd.getDocument)(t).uri),r=t.path;return r.endsWith(".langium")||(r+=".langium"),rA.Utils.resolvePath(e,r)}Pe.resolveImportUri=sA;function Dy(t,e){let r=sA(e);try{if(r){let i=t.getOrCreateDocument(r).parseResult.value;if($e.isGrammar(i))return i}}catch{}}Pe.resolveImport=Dy;function qB(t,e){if($e.isGrammarImport(e)){let r=Dy(t,e);if(r){let n=Sy(t,r);return n.push(r),n}return[]}else return Sy(t,e)}Pe.resolveTransitiveImports=qB;function Sy(t,e,r=e,n=new Set,i=new Set){let o=(0,Xd.getDocument)(e);if(r!==e&&i.add(e),!n.has(o.uri)){n.add(o.uri);for(let a of e.imports){let s=Dy(t,a);s&&Sy(t,s,r,n,i)}}return Array.from(i)}function uA(t){return $e.isAssignment(t)?[t]:$e.isAlternatives(t)||$e.isGroup(t)||$e.isUnorderedGroup(t)?t.elements.flatMap(e=>uA(e)):[]}Pe.extractAssignments=uA;var IB=["string","number","boolean","Date","bigint"];function xB(t){return IB.includes(t)}Pe.isPrimitiveType=xB});var pA=h(Qd=>{"use strict";Object.defineProperty(Qd,"__esModule",{value:!0});Qd.collectInferredTypes=void 0;var LB=Ts(),cA=cn(),MB=tr(),Jt=Ke(),io=Xt(),$B=ro(),Jd=$o(),Oy=class{constructor(e,r){this.context=e,this.root=r}getTypes(){let e={name:this.root.name,properties:this.root.properties,ruleCalls:this.root.ruleCalls,super:[]};return this.root.children.length===0?[{alt:e,next:[]}]:this.applyNext(this.root,{alt:e,next:this.root.children})}applyNext(e,r){let n=this.splitType(r.alt,r.next.length),i=[];for(let o=0;o<r.next.length;o++){let a=n[o],s=r.next[o];s.actionWithAssignment&&i.push({alt:this.copyTypeAlternative(a),next:[]}),s.name!==void 0&&s.name!==a.name&&(s.actionWithAssignment?(a.properties=[],a.ruleCalls=[],a.super=[e.name],a.name=s.name):(a.super=[a.name,...a.ruleCalls],a.properties=[],a.ruleCalls=[],a.name=s.name)),a.properties.push(...s.properties),a.ruleCalls.push(...s.ruleCalls);let u={alt:a,next:s.children};u.next.length===0?(u.alt.super=u.alt.super.filter(d=>d!==u.alt.name),i.push(u)):i.push(...this.applyNext(e,u))}return fA(i)}splitType(e,r){let n=[];for(let i=0;i<r;i++)n.push(this.copyTypeAlternative(e));return n}copyTypeAlternative(e){function r(n){return{name:n.name,optional:n.optional,typeAlternatives:n.typeAlternatives,astNodes:n.astNodes}}return{name:e.name,super:e.super,ruleCalls:e.ruleCalls,properties:e.properties.map(n=>r(n))}}getSuperTypes(e){let r=new Set;return this.collectSuperTypes(e,e,r),Array.from(r)}collectSuperTypes(e,r,n){if(r.ruleCalls.length>0){for(let i of r.ruleCalls)n.add(i);return}for(let i of r.parents)e.name===void 0?this.collectSuperTypes(i,i,n):i.name!==void 0&&i.name!==e.name?n.add(i.name):this.collectSuperTypes(e,i,n);r.parents.length===0&&r.name&&n.add(r.name)}connect(e,r){return r.parents.push(e),e.children.push(r),r}merge(...e){if(e.length===1)return e[0];if(e.length===0)throw new Error("No parts to merge");let r=Sa();r.parents=e;for(let n of e)n.children.push(r);return r}};function FB(t,e){var r;let n=[],i={fragments:new Map};for(let u of t)n.push(...lA(i,u));let o=HB(n),a=BB(o),s=VB(o,a);for(let u of e){let d=(0,Jt.isAlternatives)(u.definition)&&u.definition.elements.every(p=>(0,Jt.isKeyword)(p))?(0,MB.stream)(u.definition.elements).filter(Jt.isKeyword).map(p=>`'${p.value}'`).toArray():[(r=(0,io.getExplicitRuleType)(u))!==null&&r!==void 0?r:"string"];s.unions.push(new Jd.UnionType(u.name,kc(!1,!1,d)))}return s}Qd.collectInferredTypes=FB;function lA(t,e){let r=Sa(e),n=new Oy(t,r);return e.definition&&qy(n,n.root,e.definition),n.getTypes()}function Sa(t){return{name:(0,Jt.isParserRule)(t)||(0,Jt.isAction)(t)?(0,io.getTypeNameWithoutError)(t):t,properties:[],ruleCalls:[],children:[],parents:[],actionWithAssignment:!1}}function qy(t,e,r){let n=(0,io.isOptionalCardinality)(r.cardinality);if((0,Jt.isAlternatives)(r)){let i=[];n&&i.push(t.connect(e,Sa()));for(let o of r.elements){let a=t.connect(e,Sa());i.push(qy(t,a,o))}return t.merge(...i)}else if((0,Jt.isGroup)(r)||(0,Jt.isUnorderedGroup)(r)){let i=t.connect(e,Sa());for(let o of r.elements)i=qy(t,i,o);if(n){let o=t.connect(e,Sa());return t.merge(o,i)}else return i}else{if((0,Jt.isAction)(r))return jB(t,e,r);(0,Jt.isAssignment)(r)?UB(e,r):(0,Jt.isRuleCall)(r)&&GB(t,e,r)}return e}function jB(t,e,r){var n;let i=t.connect(e,Sa(r));if(r.type){let o=(n=r.type)===null||n===void 0?void 0:n.ref;o&&(0,LB.isNamed)(o)&&(i.name=o.name)}return r.feature&&r.operator&&(i.actionWithAssignment=!0,i.properties.push({name:r.feature,optional:!1,typeAlternatives:kc(r.operator==="+=",!1,t.root.ruleCalls.length!==0?t.root.ruleCalls:t.getSuperTypes(i)),astNodes:new Set([r])})),i}function UB(t,e){let r={types:new Set,reference:!1};dA(e.terminal,r);let n=kc(e.operator==="+=",r.reference,e.operator==="?="?["boolean"]:Array.from(r.types));t.properties.push({name:e.feature,optional:(0,io.isOptionalCardinality)(e.cardinality),typeAlternatives:n,astNodes:new Set([e])})}function dA(t,e){if((0,Jt.isAlternatives)(t)||(0,Jt.isUnorderedGroup)(t)||(0,Jt.isGroup)(t))for(let r of t.elements)dA(r,e);else(0,Jt.isKeyword)(t)?e.types.add(`'${t.value}'`):(0,Jt.isRuleCall)(t)&&t.rule.ref?e.types.add((0,io.getRuleType)(t.rule.ref)):(0,Jt.isCrossReference)(t)&&t.type.ref&&(e.types.add((0,io.getTypeNameWithoutError)(t.type.ref)),e.reference=!0)}function GB(t,e,r){let n=r.rule.ref;if((0,Jt.isParserRule)(n)&&n.fragment){let i=WB(n,t.context);(0,io.isOptionalCardinality)(r.cardinality)?e.properties.push(...i.map(o=>Object.assign(Object.assign({},o),{optional:!0}))):e.properties.push(...i)}else(0,Jt.isParserRule)(n)&&e.ruleCalls.push((0,io.getRuleType)(n))}function WB(t,e){let r=e.fragments.get(t);if(r)return r;let n=[];e.fragments.set(t,n);let i=(0,io.getTypeNameWithoutError)(t),o=lA(e,t).filter(a=>a.alt.name===i);return n.push(...o.flatMap(a=>a.alt.properties)),n}function HB(t){let e=new Map,r=[],n=fA(t).map(i=>i.alt);for(let i of n){let o=new Jd.InterfaceType(i.name,i.super,i.properties);e.set(o.name,o),i.ruleCalls.length>0&&(r.push(i),i.ruleCalls.forEach(a=>{a!==o.name&&o.subTypes.add(a)}))}for(let i of r)for(let o of i.ruleCalls){let a=e.get(o);a&&a.name!==i.name&&a.realSuperTypes.add(i.name)}return Array.from(e.values())}function fA(t){let e=t.reduce((n,i)=>n.add(i.alt.name,i),new cA.MultiMap),r=[];for(let[n,i]of e.entriesGroupedByKey()){let o=[],a=new Set,s={alt:{name:n,properties:o,ruleCalls:[],super:[]},next:[]};for(let u of i){let d=u.alt;s.alt.super.push(...d.super),s.next.push(...u.next);let p=d.properties;for(let m of p){let y=o.find(S=>S.name===m.name);y?(m.typeAlternatives.filter(KB(y.typeAlternatives)).forEach(S=>y.typeAlternatives.push(S)),m.astNodes.forEach(S=>y.astNodes.add(S))):o.push(Object.assign({},m))}d.ruleCalls.forEach(m=>a.add(m))}for(let u of i){let d=u.alt;if(d.ruleCalls.length===0)for(let p of o)d.properties.find(m=>m.name===p.name)||(p.optional=!0)}s.alt.ruleCalls=Array.from(a),r.push(s)}return r}function KB(t){return e=>!t.some(r=>(0,$B.comparePropertyType)(r,e))}function BB(t){let e=[],r=new cA.MultiMap;for(let n of t)for(let i of n.realSuperTypes)r.add(i,n.name);for(let[n,i]of r.entriesGroupedByKey())t.some(o=>o.name===n)||e.push(new Jd.UnionType(n,kc(!1,!1,i),{reflection:!0}));return e}function VB(t,e){var r;for(let o of t)for(let a of o.realSuperTypes)(r=t.find(s=>s.name===a))===null||r===void 0||r.subTypes.add(o.name);let n={interfaces:[],unions:e},i=new Set(e.map(o=>o.name));for(let o of t)if(o.properties.length===0&&o.subTypes.size>0){let a=kc(!1,!1,Array.from(o.subTypes)),s=e.find(u=>u.name===o.name);if(s)s.alternatives.push(...a);else{let u=new Jd.UnionType(o.name,a,{reflection:!0});u.realSuperTypes=o.realSuperTypes,n.unions.push(u),i.add(o.name)}}else n.interfaces.push(o);for(let o of n.interfaces)o.printingSuperTypes=[...o.realSuperTypes].filter(a=>!i.has(a));return n}function kc(t,e,r){return t||e?[{array:t,reference:e,types:r}]:r.map(n=>({array:t,reference:e,types:[n]}))}});var yA=h(Zd=>{"use strict";Object.defineProperty(Zd,"__esModule",{value:!0});Zd.collectDeclaredTypes=void 0;var gA=Xt(),hA=$o();function zB(t,e){let r={unions:[],interfaces:[]};for(let n of t){let i=n.superTypes.filter(a=>a.ref).map(a=>(0,gA.getTypeNameWithoutError)(a.ref)),o=n.attributes.map(a=>({name:a.name,optional:a.isOptional===!0,typeAlternatives:a.typeAlternatives.map(mA),astNodes:new Set([a])}));r.interfaces.push(new hA.InterfaceType(n.name,i,o))}for(let n of e){let i=n.typeAlternatives.map(mA),o=n.typeAlternatives.length>1&&n.typeAlternatives.some(a=>{var s;return((s=a.refType)===null||s===void 0?void 0:s.ref)!==void 0});r.unions.push(new hA.UnionType(n.name,i,{reflection:o}))}return r}Zd.collectDeclaredTypes=zB;function mA(t){var e,r;let n=[];return t.refType?n=[t.refType.ref?(0,gA.getTypeNameWithoutError)(t.refType.ref):t.refType.$refText]:n=[(e=t.primitiveType)!==null&&e!==void 0?e:`'${(r=t.keywordType)===null||r===void 0?void 0:r.value}'`],{types:n,reference:t.isRef===!0,array:t.isArray===!0}}});var xy=h(bs=>{"use strict";Object.defineProperty(bs,"__esModule",{value:!0});bs.collectAllAstResources=bs.collectTypeResources=void 0;var YB=pA(),XB=yA(),JB=Ye(),QB=cn(),ZB=Ke(),vA=Xt(),e2=ro(),t2=$o();function r2(t,e){let r=Iy(t,e),n=(0,YB.collectInferredTypes)(r.parserRules,r.datatypeRules),i=(0,XB.collectDeclaredTypes)(r.interfaces,r.types);return i2(n,i),n2((0,e2.mergeInterfaces)(n,i)),{astResources:r,inferred:n,declared:i}}bs.collectTypeResources=r2;function n2(t){function e(r,n=new Set){if(!n.has(r)){n.add(r);for(let i of r.printingSuperTypes){let o=t.find(a=>a.name===i);o&&(0,t2.isInterfaceType)(o)&&(e(o),o.superProperties.entriesGroupedByKey().forEach(a=>r.superProperties.addAll(a[0],a[1])))}}}for(let r of t)e(r)}function i2(t,e){let r=new QB.MultiMap,n=t.unions.concat(e.unions);for(let o of n)if(o.reflection)for(let a of o.alternatives)a.types.forEach(s=>r.add(s,o.name));function i(o,a,s){var u;let d=(u=o.interfaces.find(p=>p.name===a))!==null&&u!==void 0?u:o.unions.find(p=>p.name===a);d&&s.forEach(p=>d.realSuperTypes.add(p))}for(let[o,a]of r.entriesGroupedByKey())i(t,o,a),i(e,o,a)}function Iy(t,e,r=new Set,n={parserRules:[],datatypeRules:[],interfaces:[],types:[]}){Array.isArray(t)||(t=[t]);for(let i of t){let o=(0,JB.getDocument)(i);if(!r.has(o.uri)){r.add(o.uri);for(let a of i.rules)(0,ZB.isParserRule)(a)&&!a.fragment&&((0,vA.isDataTypeRule)(a)?n.datatypeRules.push(a):n.parserRules.push(a));if(i.interfaces.forEach(a=>n.interfaces.push(a)),i.types.forEach(a=>n.types.push(a)),e){let a=i.imports.map(s=>(0,vA.resolveImport)(e,s));Iy(a,e,r,n)}}}return n}bs.collectAllAstResources=Iy});var bA=h(Cs=>{"use strict";Object.defineProperty(Cs,"__esModule",{value:!0});Cs.specifyAstNodeProperties=Cs.collectAst=void 0;var TA=ro(),Ly=$o(),o2=xy(),a2=Xt();function s2(t,e){let{inferred:r,declared:n}=(0,o2.collectTypeResources)(t,e),i={interfaces:(0,TA.sortInterfacesTopologically)(_A(r.interfaces,n.interfaces)),unions:_A(r.unions,n.unions)};return RA(i),i}Cs.collectAst=s2;function _A(t,e){return Array.from(t.concat(e).reduce((r,n)=>(r.set(n.name,n),r),new Map).values()).sort((r,n)=>r.name.localeCompare(n.name))}function RA(t){let e=c2(t);(0,TA.addSubTypes)(e),l2(e),u2(e)}Cs.specifyAstNodeProperties=RA;function u2(t){let e=Array.from(t.values()).filter(n=>n.subTypes.size===0),r=new Set;for(let n of e){r.add(n),n.typeTypes.add(n.name);let i=Array.from(n.realSuperTypes).map(o=>t.get(o)).filter(o=>o!==void 0);for(let o of i)n.typeTypes.forEach(a=>o.typeTypes.add(a));e.push(...i.filter(o=>!r.has(o)))}}function c2({interfaces:t,unions:e}){let r=t.concat(e).reduce((o,a)=>(o.set(a.name,a),o),new Map),n=new Map;function i(o,a=new Set){if(n.has(o))return n.get(o);if(a.has(o))return!0;a.add(o);let s=o.alternatives.flatMap(u=>u.types).filter(u=>!(0,a2.isPrimitiveType)(u));if(s.length===0)return!0;for(let u of s){let d=r.get(u);if(d&&((0,Ly.isInterfaceType)(d)||(0,Ly.isUnionType)(d)&&!i(d,a)))return!1}return!0}for(let o of e){let a=i(o);n.set(o,a)}for(let[o,a]of n)a&&r.delete(o.name);return r}function l2(t){var e;let r=Array.from(t.values()),n=r.filter(o=>(0,Ly.isInterfaceType)(o));for(let o of n){let a=o.properties.flatMap(s=>s.typeAlternatives.filter(u=>!u.reference).flatMap(u=>u.types));for(let s of a)(e=t.get(s))===null||e===void 0||e.containerTypes.add(o.name)}let i=d2(r);f2(i)}function d2(t){function e(i){let o=[i];n.add(i.name);let a=[...i.subTypes,...i.realSuperTypes];for(let s of a)if(!n.has(s)){let u=t.find(d=>d.name===s);u&&o.push(...e(u))}return o}let r=[],n=new Set;for(let i of t)n.has(i.name)||r.push(e(i));return r}function f2(t){for(let e of t){let r=new Set;e.forEach(n=>n.containerTypes.forEach(i=>r.add(i))),e.forEach(n=>n.containerTypes=r)}}});var My=h(ef=>{"use strict";Object.defineProperty(ef,"__esModule",{value:!0});ef.interpretAstReflection=void 0;var p2=Xr(),CA=cn(),h2=Ke(),m2=bA(),g2=ro();function y2(t,e){let r;(0,h2.isGrammar)(t)?r=(0,m2.collectAst)(t,e):r=t;let n=r.interfaces.map(s=>s.name).concat(r.unions.map(s=>s.name)),i=v2(r),o=_2(r),a=R2(r);return{getAllTypes(){return n},getReferenceType(s){let u=`${s.container.$type}:${s.property}`,d=i.get(u);if(d)return d;throw new Error("Could not find reference type for "+u)},getTypeMetaData(s){var u;return(u=o.get(s))!==null&&u!==void 0?u:{name:s,mandatory:[]}},isInstance(s,u){return(0,p2.isAstNode)(s)&&this.isSubtype(s.$type,u)},isSubtype(s,u){if(s===u)return!0;let d=a.get(s);for(let p of d)if(this.isSubtype(p,u))return!0;return!1}}}ef.interpretAstReflection=y2;function v2(t){let e=new CA.MultiMap;for(let n of t.interfaces){for(let i of n.properties)for(let o of i.typeAlternatives)o.reference&&e.add(n.name,[i.name,o.types[0]]);for(let i of n.printingSuperTypes){let o=e.get(i);e.addAll(n.name,o)}}let r=new Map;for(let[n,[i,o]]of e)r.set(`${n}:${i}`,o);return r}function _2(t){let e=new Map,r=(0,g2.collectAllProperties)(t.interfaces);for(let n of t.interfaces){let i=r.get(n.name),o=i.filter(s=>s.typeAlternatives.some(u=>u.array)),a=i.filter(s=>s.typeAlternatives.every(u=>!u.array&&u.types.includes("boolean")));(o.length>0||a.length>0)&&e.set(n.name,{name:n.name,mandatory:T2(o,a)})}return e}function T2(t,e){let r=[],n=t.concat(e).sort((i,o)=>i.name.localeCompare(o.name));for(let i of n){let o=t.includes(i)?"array":"boolean";r.push({name:i.name,type:o})}return r}function R2(t){let e=new CA.MultiMap;for(let r of t.interfaces)e.addAll(r.name,r.realSuperTypes);for(let r of t.unions)e.addAll(r.name,r.realSuperTypes);return e}});var PA=h(rf=>{"use strict";Object.defineProperty(rf,"__esModule",{value:!0});rf.LangiumGrammarGrammar=void 0;var b2=Yt(),tf,C2=()=>tf??(tf=(0,b2.loadGrammarFromJson)(`{
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
}`));rf.LangiumGrammarGrammar=C2});var AA=h(bn=>{"use strict";Object.defineProperty(bn,"__esModule",{value:!0});bn.LangiumGrammarGeneratedModule=bn.LangiumGrammarGeneratedSharedModule=bn.LangiumGrammarParserConfig=bn.LangiumGrammarLanguageMetaData=void 0;var P2=Ke(),A2=PA();bn.LangiumGrammarLanguageMetaData={languageId:"langium",fileExtensions:[".langium"],caseInsensitive:!1};bn.LangiumGrammarParserConfig={maxLookahead:3};bn.LangiumGrammarGeneratedSharedModule={AstReflection:()=>new P2.LangiumGrammarAstReflection};bn.LangiumGrammarGeneratedModule={Grammar:()=>(0,A2.LangiumGrammarGrammar)(),LanguageMetaData:()=>bn.LangiumGrammarLanguageMetaData,parser:{ParserConfig:()=>bn.LangiumGrammarParserConfig}}});var oo=h(jy=>{"use strict";Object.defineProperty(jy,"__esModule",{value:!0});var $y;function Fy(){if($y===void 0)throw new Error("No runtime abstraction layer installed");return $y}(function(t){function e(r){if(r===void 0)throw new Error("No runtime abstraction layer provided");$y=r}t.install=e})(Fy||(Fy={}));jy.default=Fy});var Uy=h(Nc=>{"use strict";Object.defineProperty(Nc,"__esModule",{value:!0});Nc.Disposable=void 0;var S2;(function(t){function e(r){return{dispose:r}}t.create=e})(S2=Nc.Disposable||(Nc.Disposable={}))});var ka=h(Ea=>{"use strict";Object.defineProperty(Ea,"__esModule",{value:!0});Ea.Emitter=Ea.Event=void 0;var E2=oo(),k2;(function(t){let e={dispose(){}};t.None=function(){return e}})(k2=Ea.Event||(Ea.Event={}));var Gy=class{add(e,r=null,n){this._callbacks||(this._callbacks=[],this._contexts=[]),this._callbacks.push(e),this._contexts.push(r),Array.isArray(n)&&n.push({dispose:()=>this.remove(e,r)})}remove(e,r=null){if(!this._callbacks)return;let n=!1;for(let i=0,o=this._callbacks.length;i<o;i++)if(this._callbacks[i]===e)if(this._contexts[i]===r){this._callbacks.splice(i,1),this._contexts.splice(i,1);return}else n=!0;if(n)throw new Error("When adding a listener with a context, you should remove it with the same context")}invoke(...e){if(!this._callbacks)return[];let r=[],n=this._callbacks.slice(0),i=this._contexts.slice(0);for(let o=0,a=n.length;o<a;o++)try{r.push(n[o].apply(i[o],e))}catch(s){(0,E2.default)().console.error(s)}return r}isEmpty(){return!this._callbacks||this._callbacks.length===0}dispose(){this._callbacks=void 0,this._contexts=void 0}},nf=class t{constructor(e){this._options=e}get event(){return this._event||(this._event=(e,r,n)=>{this._callbacks||(this._callbacks=new Gy),this._options&&this._options.onFirstListenerAdd&&this._callbacks.isEmpty()&&this._options.onFirstListenerAdd(this),this._callbacks.add(e,r);let i={dispose:()=>{this._callbacks&&(this._callbacks.remove(e,r),i.dispose=t._noop,this._options&&this._options.onLastListenerRemove&&this._callbacks.isEmpty()&&this._options.onLastListenerRemove(this))}};return Array.isArray(n)&&n.push(i),i}),this._event}fire(e){this._callbacks&&this._callbacks.invoke.call(this._callbacks,e)}dispose(){this._callbacks&&(this._callbacks.dispose(),this._callbacks=void 0)}};Ea.Emitter=nf;nf._noop=function(){}});var SA=h(of=>{"use strict";Object.defineProperty(of,"__esModule",{value:!0});of.AbstractMessageBuffer=void 0;var N2=13,w2=10,D2=`\r
`,Wy=class{constructor(e="utf-8"){this._encoding=e,this._chunks=[],this._totalLength=0}get encoding(){return this._encoding}append(e){let r=typeof e=="string"?this.fromString(e,this._encoding):e;this._chunks.push(r),this._totalLength+=r.byteLength}tryReadHeaders(){if(this._chunks.length===0)return;let e=0,r=0,n=0,i=0;e:for(;r<this._chunks.length;){let u=this._chunks[r];for(n=0;n<u.length;){switch(u[n]){case N2:switch(e){case 0:e=1;break;case 2:e=3;break;default:e=0}break;case w2:switch(e){case 1:e=2;break;case 3:e=4,n++;break e;default:e=0}break;default:e=0}n++}i+=u.byteLength,r++}if(e!==4)return;let o=this._read(i+n),a=new Map,s=this.toString(o,"ascii").split(D2);if(s.length<2)return a;for(let u=0;u<s.length-2;u++){let d=s[u],p=d.indexOf(":");if(p===-1)throw new Error("Message header must separate key and value using :");let m=d.substr(0,p),y=d.substr(p+1).trim();a.set(m,y)}return a}tryReadBody(e){if(!(this._totalLength<e))return this._read(e)}get numberOfBytes(){return this._totalLength}_read(e){if(e===0)return this.emptyBuffer();if(e>this._totalLength)throw new Error("Cannot read so many bytes!");if(this._chunks[0].byteLength===e){let o=this._chunks[0];return this._chunks.shift(),this._totalLength-=e,this.asNative(o)}if(this._chunks[0].byteLength>e){let o=this._chunks[0],a=this.asNative(o,e);return this._chunks[0]=o.slice(e),this._totalLength-=e,a}let r=this.allocNative(e),n=0,i=0;for(;e>0;){let o=this._chunks[i];if(o.byteLength>e){let a=o.slice(0,e);r.set(a,n),n+=e,this._chunks[i]=o.slice(e),this._totalLength-=e,e-=e}else r.set(o,n),n+=o.byteLength,this._chunks.shift(),this._totalLength-=o.byteLength,e-=o.byteLength}return r}};of.AbstractMessageBuffer=Wy});var NA=h(Vy=>{"use strict";Object.defineProperty(Vy,"__esModule",{value:!0});var EA=oo(),Ps=Uy(),O2=ka(),q2=SA(),af=class t extends q2.AbstractMessageBuffer{constructor(e="utf-8"){super(e),this.asciiDecoder=new TextDecoder("ascii")}emptyBuffer(){return t.emptyBuffer}fromString(e,r){return new TextEncoder().encode(e)}toString(e,r){return r==="ascii"?this.asciiDecoder.decode(e):new TextDecoder(r).decode(e)}asNative(e,r){return r===void 0?e:e.slice(0,r)}allocNative(e){return new Uint8Array(e)}};af.emptyBuffer=new Uint8Array(0);var Hy=class{constructor(e){this.socket=e,this._onData=new O2.Emitter,this._messageListener=r=>{r.data.arrayBuffer().then(i=>{this._onData.fire(new Uint8Array(i))},()=>{(0,EA.default)().console.error("Converting blob to array buffer failed.")})},this.socket.addEventListener("message",this._messageListener)}onClose(e){return this.socket.addEventListener("close",e),Ps.Disposable.create(()=>this.socket.removeEventListener("close",e))}onError(e){return this.socket.addEventListener("error",e),Ps.Disposable.create(()=>this.socket.removeEventListener("error",e))}onEnd(e){return this.socket.addEventListener("end",e),Ps.Disposable.create(()=>this.socket.removeEventListener("end",e))}onData(e){return this._onData.event(e)}},Ky=class{constructor(e){this.socket=e}onClose(e){return this.socket.addEventListener("close",e),Ps.Disposable.create(()=>this.socket.removeEventListener("close",e))}onError(e){return this.socket.addEventListener("error",e),Ps.Disposable.create(()=>this.socket.removeEventListener("error",e))}onEnd(e){return this.socket.addEventListener("end",e),Ps.Disposable.create(()=>this.socket.removeEventListener("end",e))}write(e,r){if(typeof e=="string"){if(r!==void 0&&r!=="utf-8")throw new Error(`In a Browser environments only utf-8 text encoding is supported. But got encoding: ${r}`);this.socket.send(e)}else this.socket.send(e);return Promise.resolve()}end(){this.socket.close()}},I2=new TextEncoder,kA=Object.freeze({messageBuffer:Object.freeze({create:t=>new af(t)}),applicationJson:Object.freeze({encoder:Object.freeze({name:"application/json",encode:(t,e)=>{if(e.charset!=="utf-8")throw new Error(`In a Browser environments only utf-8 text encoding is supported. But got encoding: ${e.charset}`);return Promise.resolve(I2.encode(JSON.stringify(t,void 0,0)))}}),decoder:Object.freeze({name:"application/json",decode:(t,e)=>{if(!(t instanceof Uint8Array))throw new Error("In a Browser environments only Uint8Arrays are supported.");return Promise.resolve(JSON.parse(new TextDecoder(e.charset).decode(t)))}})}),stream:Object.freeze({asReadableStream:t=>new Hy(t),asWritableStream:t=>new Ky(t)}),console,timer:Object.freeze({setTimeout(t,e,...r){let n=setTimeout(t,e,...r);return{dispose:()=>clearTimeout(n)}},setImmediate(t,...e){let r=setTimeout(t,0,...e);return{dispose:()=>clearTimeout(r)}},setInterval(t,e,...r){let n=setInterval(t,e,...r);return{dispose:()=>clearInterval(n)}}})});function By(){return kA}(function(t){function e(){EA.default.install(kA)}t.install=e})(By||(By={}));Vy.default=By});var As=h(Sr=>{"use strict";Object.defineProperty(Sr,"__esModule",{value:!0});Sr.stringArray=Sr.array=Sr.func=Sr.error=Sr.number=Sr.string=Sr.boolean=void 0;function x2(t){return t===!0||t===!1}Sr.boolean=x2;function wA(t){return typeof t=="string"||t instanceof String}Sr.string=wA;function L2(t){return typeof t=="number"||t instanceof Number}Sr.number=L2;function M2(t){return t instanceof Error}Sr.error=M2;function $2(t){return typeof t=="function"}Sr.func=$2;function DA(t){return Array.isArray(t)}Sr.array=DA;function F2(t){return DA(t)&&t.every(e=>wA(e))}Sr.stringArray=F2});var yv=h(ue=>{"use strict";Object.defineProperty(ue,"__esModule",{value:!0});ue.Message=ue.NotificationType9=ue.NotificationType8=ue.NotificationType7=ue.NotificationType6=ue.NotificationType5=ue.NotificationType4=ue.NotificationType3=ue.NotificationType2=ue.NotificationType1=ue.NotificationType0=ue.NotificationType=ue.RequestType9=ue.RequestType8=ue.RequestType7=ue.RequestType6=ue.RequestType5=ue.RequestType4=ue.RequestType3=ue.RequestType2=ue.RequestType1=ue.RequestType=ue.RequestType0=ue.AbstractMessageSignature=ue.ParameterStructures=ue.ResponseError=ue.ErrorCodes=void 0;var Na=As(),OA;(function(t){t.ParseError=-32700,t.InvalidRequest=-32600,t.MethodNotFound=-32601,t.InvalidParams=-32602,t.InternalError=-32603,t.jsonrpcReservedErrorRangeStart=-32099,t.serverErrorStart=-32099,t.MessageWriteError=-32099,t.MessageReadError=-32098,t.PendingResponseRejected=-32097,t.ConnectionInactive=-32096,t.ServerNotInitialized=-32002,t.UnknownErrorCode=-32001,t.jsonrpcReservedErrorRangeEnd=-32e3,t.serverErrorEnd=-32e3})(OA=ue.ErrorCodes||(ue.ErrorCodes={}));var zy=class t extends Error{constructor(e,r,n){super(r),this.code=Na.number(e)?e:OA.UnknownErrorCode,this.data=n,Object.setPrototypeOf(this,t.prototype)}toJson(){let e={code:this.code,message:this.message};return this.data!==void 0&&(e.data=this.data),e}};ue.ResponseError=zy;var Qr=class t{constructor(e){this.kind=e}static is(e){return e===t.auto||e===t.byName||e===t.byPosition}toString(){return this.kind}};ue.ParameterStructures=Qr;Qr.auto=new Qr("auto");Qr.byPosition=new Qr("byPosition");Qr.byName=new Qr("byName");var lt=class{constructor(e,r){this.method=e,this.numberOfParams=r}get parameterStructures(){return Qr.auto}};ue.AbstractMessageSignature=lt;var Yy=class extends lt{constructor(e){super(e,0)}};ue.RequestType0=Yy;var Xy=class extends lt{constructor(e,r=Qr.auto){super(e,1),this._parameterStructures=r}get parameterStructures(){return this._parameterStructures}};ue.RequestType=Xy;var Jy=class extends lt{constructor(e,r=Qr.auto){super(e,1),this._parameterStructures=r}get parameterStructures(){return this._parameterStructures}};ue.RequestType1=Jy;var Qy=class extends lt{constructor(e){super(e,2)}};ue.RequestType2=Qy;var Zy=class extends lt{constructor(e){super(e,3)}};ue.RequestType3=Zy;var ev=class extends lt{constructor(e){super(e,4)}};ue.RequestType4=ev;var tv=class extends lt{constructor(e){super(e,5)}};ue.RequestType5=tv;var rv=class extends lt{constructor(e){super(e,6)}};ue.RequestType6=rv;var nv=class extends lt{constructor(e){super(e,7)}};ue.RequestType7=nv;var iv=class extends lt{constructor(e){super(e,8)}};ue.RequestType8=iv;var ov=class extends lt{constructor(e){super(e,9)}};ue.RequestType9=ov;var av=class extends lt{constructor(e,r=Qr.auto){super(e,1),this._parameterStructures=r}get parameterStructures(){return this._parameterStructures}};ue.NotificationType=av;var sv=class extends lt{constructor(e){super(e,0)}};ue.NotificationType0=sv;var uv=class extends lt{constructor(e,r=Qr.auto){super(e,1),this._parameterStructures=r}get parameterStructures(){return this._parameterStructures}};ue.NotificationType1=uv;var cv=class extends lt{constructor(e){super(e,2)}};ue.NotificationType2=cv;var lv=class extends lt{constructor(e){super(e,3)}};ue.NotificationType3=lv;var dv=class extends lt{constructor(e){super(e,4)}};ue.NotificationType4=dv;var fv=class extends lt{constructor(e){super(e,5)}};ue.NotificationType5=fv;var pv=class extends lt{constructor(e){super(e,6)}};ue.NotificationType6=pv;var hv=class extends lt{constructor(e){super(e,7)}};ue.NotificationType7=hv;var mv=class extends lt{constructor(e){super(e,8)}};ue.NotificationType8=mv;var gv=class extends lt{constructor(e){super(e,9)}};ue.NotificationType9=gv;var j2;(function(t){function e(i){let o=i;return o&&Na.string(o.method)&&(Na.string(o.id)||Na.number(o.id))}t.isRequest=e;function r(i){let o=i;return o&&Na.string(o.method)&&i.id===void 0}t.isNotification=r;function n(i){let o=i;return o&&(o.result!==void 0||!!o.error)&&(Na.string(o.id)||Na.number(o.id)||o.id===null)}t.isResponse=n})(j2=ue.Message||(ue.Message={}))});var _v=h(ao=>{"use strict";var qA;Object.defineProperty(ao,"__esModule",{value:!0});ao.LRUCache=ao.LinkedMap=ao.Touch=void 0;var Mr;(function(t){t.None=0,t.First=1,t.AsOld=t.First,t.Last=2,t.AsNew=t.Last})(Mr=ao.Touch||(ao.Touch={}));var sf=class{constructor(){this[qA]="LinkedMap",this._map=new Map,this._head=void 0,this._tail=void 0,this._size=0,this._state=0}clear(){this._map.clear(),this._head=void 0,this._tail=void 0,this._size=0,this._state++}isEmpty(){return!this._head&&!this._tail}get size(){return this._size}get first(){return this._head?.value}get last(){return this._tail?.value}has(e){return this._map.has(e)}get(e,r=Mr.None){let n=this._map.get(e);if(n)return r!==Mr.None&&this.touch(n,r),n.value}set(e,r,n=Mr.None){let i=this._map.get(e);if(i)i.value=r,n!==Mr.None&&this.touch(i,n);else{switch(i={key:e,value:r,next:void 0,previous:void 0},n){case Mr.None:this.addItemLast(i);break;case Mr.First:this.addItemFirst(i);break;case Mr.Last:this.addItemLast(i);break;default:this.addItemLast(i);break}this._map.set(e,i),this._size++}return this}delete(e){return!!this.remove(e)}remove(e){let r=this._map.get(e);if(r)return this._map.delete(e),this.removeItem(r),this._size--,r.value}shift(){if(!this._head&&!this._tail)return;if(!this._head||!this._tail)throw new Error("Invalid list");let e=this._head;return this._map.delete(e.key),this.removeItem(e),this._size--,e.value}forEach(e,r){let n=this._state,i=this._head;for(;i;){if(r?e.bind(r)(i.value,i.key,this):e(i.value,i.key,this),this._state!==n)throw new Error("LinkedMap got modified during iteration.");i=i.next}}keys(){let e=this._state,r=this._head,n={[Symbol.iterator]:()=>n,next:()=>{if(this._state!==e)throw new Error("LinkedMap got modified during iteration.");if(r){let i={value:r.key,done:!1};return r=r.next,i}else return{value:void 0,done:!0}}};return n}values(){let e=this._state,r=this._head,n={[Symbol.iterator]:()=>n,next:()=>{if(this._state!==e)throw new Error("LinkedMap got modified during iteration.");if(r){let i={value:r.value,done:!1};return r=r.next,i}else return{value:void 0,done:!0}}};return n}entries(){let e=this._state,r=this._head,n={[Symbol.iterator]:()=>n,next:()=>{if(this._state!==e)throw new Error("LinkedMap got modified during iteration.");if(r){let i={value:[r.key,r.value],done:!1};return r=r.next,i}else return{value:void 0,done:!0}}};return n}[(qA=Symbol.toStringTag,Symbol.iterator)](){return this.entries()}trimOld(e){if(e>=this.size)return;if(e===0){this.clear();return}let r=this._head,n=this.size;for(;r&&n>e;)this._map.delete(r.key),r=r.next,n--;this._head=r,this._size=n,r&&(r.previous=void 0),this._state++}addItemFirst(e){if(!this._head&&!this._tail)this._tail=e;else if(this._head)e.next=this._head,this._head.previous=e;else throw new Error("Invalid list");this._head=e,this._state++}addItemLast(e){if(!this._head&&!this._tail)this._head=e;else if(this._tail)e.previous=this._tail,this._tail.next=e;else throw new Error("Invalid list");this._tail=e,this._state++}removeItem(e){if(e===this._head&&e===this._tail)this._head=void 0,this._tail=void 0;else if(e===this._head){if(!e.next)throw new Error("Invalid list");e.next.previous=void 0,this._head=e.next}else if(e===this._tail){if(!e.previous)throw new Error("Invalid list");e.previous.next=void 0,this._tail=e.previous}else{let r=e.next,n=e.previous;if(!r||!n)throw new Error("Invalid list");r.previous=n,n.next=r}e.next=void 0,e.previous=void 0,this._state++}touch(e,r){if(!this._head||!this._tail)throw new Error("Invalid list");if(!(r!==Mr.First&&r!==Mr.Last)){if(r===Mr.First){if(e===this._head)return;let n=e.next,i=e.previous;e===this._tail?(i.next=void 0,this._tail=i):(n.previous=i,i.next=n),e.previous=void 0,e.next=this._head,this._head.previous=e,this._head=e,this._state++}else if(r===Mr.Last){if(e===this._tail)return;let n=e.next,i=e.previous;e===this._head?(n.previous=void 0,this._head=n):(n.previous=i,i.next=n),e.next=void 0,e.previous=this._tail,this._tail.next=e,this._tail=e,this._state++}}}toJSON(){let e=[];return this.forEach((r,n)=>{e.push([n,r])}),e}fromJSON(e){this.clear();for(let[r,n]of e)this.set(r,n)}};ao.LinkedMap=sf;var vv=class extends sf{constructor(e,r=1){super(),this._limit=e,this._ratio=Math.min(Math.max(0,r),1)}get limit(){return this._limit}set limit(e){this._limit=e,this.checkTrim()}get ratio(){return this._ratio}set ratio(e){this._ratio=Math.min(Math.max(0,e),1),this.checkTrim()}get(e,r=Mr.AsNew){return super.get(e,r)}peek(e){return super.get(e,Mr.None)}set(e,r){return super.set(e,r,Mr.Last),this.checkTrim(),this}checkTrim(){this.size>this._limit&&this.trimOld(Math.round(this._limit*this._ratio))}};ao.LRUCache=vv});var Cv=h(wa=>{"use strict";Object.defineProperty(wa,"__esModule",{value:!0});wa.CancellationTokenSource=wa.CancellationToken=void 0;var U2=oo(),G2=As(),Tv=ka(),Rv;(function(t){t.None=Object.freeze({isCancellationRequested:!1,onCancellationRequested:Tv.Event.None}),t.Cancelled=Object.freeze({isCancellationRequested:!0,onCancellationRequested:Tv.Event.None});function e(r){let n=r;return n&&(n===t.None||n===t.Cancelled||G2.boolean(n.isCancellationRequested)&&!!n.onCancellationRequested)}t.is=e})(Rv=wa.CancellationToken||(wa.CancellationToken={}));var W2=Object.freeze(function(t,e){let r=(0,U2.default)().timer.setTimeout(t.bind(e),0);return{dispose(){r.dispose()}}}),uf=class{constructor(){this._isCancelled=!1}cancel(){this._isCancelled||(this._isCancelled=!0,this._emitter&&(this._emitter.fire(void 0),this.dispose()))}get isCancellationRequested(){return this._isCancelled}get onCancellationRequested(){return this._isCancelled?W2:(this._emitter||(this._emitter=new Tv.Emitter),this._emitter.event)}dispose(){this._emitter&&(this._emitter.dispose(),this._emitter=void 0)}},bv=class{get token(){return this._token||(this._token=new uf),this._token}cancel(){this._token?this._token.cancel():this._token=Rv.Cancelled}dispose(){this._token?this._token instanceof uf&&this._token.dispose():this._token=Rv.None}};wa.CancellationTokenSource=bv});var IA=h(so=>{"use strict";Object.defineProperty(so,"__esModule",{value:!0});so.ReadableStreamMessageReader=so.AbstractMessageReader=so.MessageReader=void 0;var Av=oo(),Ss=As(),Pv=ka(),H2;(function(t){function e(r){let n=r;return n&&Ss.func(n.listen)&&Ss.func(n.dispose)&&Ss.func(n.onError)&&Ss.func(n.onClose)&&Ss.func(n.onPartialMessage)}t.is=e})(H2=so.MessageReader||(so.MessageReader={}));var cf=class{constructor(){this.errorEmitter=new Pv.Emitter,this.closeEmitter=new Pv.Emitter,this.partialMessageEmitter=new Pv.Emitter}dispose(){this.errorEmitter.dispose(),this.closeEmitter.dispose()}get onError(){return this.errorEmitter.event}fireError(e){this.errorEmitter.fire(this.asError(e))}get onClose(){return this.closeEmitter.event}fireClose(){this.closeEmitter.fire(void 0)}get onPartialMessage(){return this.partialMessageEmitter.event}firePartialMessage(e){this.partialMessageEmitter.fire(e)}asError(e){return e instanceof Error?e:new Error(`Reader received error. Reason: ${Ss.string(e.message)?e.message:"unknown"}`)}};so.AbstractMessageReader=cf;var Sv;(function(t){function e(r){let n,i,o,a=new Map,s,u=new Map;if(r===void 0||typeof r=="string")n=r??"utf-8";else{if(n=r.charset??"utf-8",r.contentDecoder!==void 0&&(o=r.contentDecoder,a.set(o.name,o)),r.contentDecoders!==void 0)for(let d of r.contentDecoders)a.set(d.name,d);if(r.contentTypeDecoder!==void 0&&(s=r.contentTypeDecoder,u.set(s.name,s)),r.contentTypeDecoders!==void 0)for(let d of r.contentTypeDecoders)u.set(d.name,d)}return s===void 0&&(s=(0,Av.default)().applicationJson.decoder,u.set(s.name,s)),{charset:n,contentDecoder:o,contentDecoders:a,contentTypeDecoder:s,contentTypeDecoders:u}}t.fromOptions=e})(Sv||(Sv={}));var Ev=class extends cf{constructor(e,r){super(),this.readable=e,this.options=Sv.fromOptions(r),this.buffer=(0,Av.default)().messageBuffer.create(this.options.charset),this._partialMessageTimeout=1e4,this.nextMessageLength=-1,this.messageToken=0}set partialMessageTimeout(e){this._partialMessageTimeout=e}get partialMessageTimeout(){return this._partialMessageTimeout}listen(e){this.nextMessageLength=-1,this.messageToken=0,this.partialMessageTimer=void 0,this.callback=e;let r=this.readable.onData(n=>{this.onData(n)});return this.readable.onError(n=>this.fireError(n)),this.readable.onClose(()=>this.fireClose()),r}onData(e){for(this.buffer.append(e);;){if(this.nextMessageLength===-1){let i=this.buffer.tryReadHeaders();if(!i)return;let o=i.get("Content-Length");if(!o)throw new Error("Header must provide a Content-Length property.");let a=parseInt(o);if(isNaN(a))throw new Error("Content-Length value must be a number.");this.nextMessageLength=a}let r=this.buffer.tryReadBody(this.nextMessageLength);if(r===void 0){this.setPartialMessageTimer();return}this.clearPartialMessageTimer(),this.nextMessageLength=-1;let n;this.options.contentDecoder!==void 0?n=this.options.contentDecoder.decode(r):n=Promise.resolve(r),n.then(i=>{this.options.contentTypeDecoder.decode(i,this.options).then(o=>{this.callback(o)},o=>{this.fireError(o)})},i=>{this.fireError(i)})}}clearPartialMessageTimer(){this.partialMessageTimer&&(this.partialMessageTimer.dispose(),this.partialMessageTimer=void 0)}setPartialMessageTimer(){this.clearPartialMessageTimer(),!(this._partialMessageTimeout<=0)&&(this.partialMessageTimer=(0,Av.default)().timer.setTimeout((e,r)=>{this.partialMessageTimer=void 0,e===this.messageToken&&(this.firePartialMessage({messageToken:e,waitingTime:r}),this.setPartialMessageTimer())},this._partialMessageTimeout,this.messageToken,this._partialMessageTimeout))}};so.ReadableStreamMessageReader=Ev});var xA=h(lf=>{"use strict";Object.defineProperty(lf,"__esModule",{value:!0});lf.Semaphore=void 0;var K2=oo(),kv=class{constructor(e=1){if(e<=0)throw new Error("Capacity must be greater than 0");this._capacity=e,this._active=0,this._waiting=[]}lock(e){return new Promise((r,n)=>{this._waiting.push({thunk:e,resolve:r,reject:n}),this.runNext()})}get active(){return this._active}runNext(){this._waiting.length===0||this._active===this._capacity||(0,K2.default)().timer.setImmediate(()=>this.doRunNext())}doRunNext(){if(this._waiting.length===0||this._active===this._capacity)return;let e=this._waiting.shift();if(this._active++,this._active>this._capacity)throw new Error("To many thunks active");try{let r=e.thunk();r instanceof Promise?r.then(n=>{this._active--,e.resolve(n),this.runNext()},n=>{this._active--,e.reject(n),this.runNext()}):(this._active--,e.resolve(r),this.runNext())}catch(r){this._active--,e.reject(r),this.runNext()}}};lf.Semaphore=kv});var FA=h(uo=>{"use strict";Object.defineProperty(uo,"__esModule",{value:!0});uo.WriteableStreamMessageWriter=uo.AbstractMessageWriter=uo.MessageWriter=void 0;var LA=oo(),wc=As(),B2=xA(),MA=ka(),V2="Content-Length: ",$A=`\r
`,z2;(function(t){function e(r){let n=r;return n&&wc.func(n.dispose)&&wc.func(n.onClose)&&wc.func(n.onError)&&wc.func(n.write)}t.is=e})(z2=uo.MessageWriter||(uo.MessageWriter={}));var df=class{constructor(){this.errorEmitter=new MA.Emitter,this.closeEmitter=new MA.Emitter}dispose(){this.errorEmitter.dispose(),this.closeEmitter.dispose()}get onError(){return this.errorEmitter.event}fireError(e,r,n){this.errorEmitter.fire([this.asError(e),r,n])}get onClose(){return this.closeEmitter.event}fireClose(){this.closeEmitter.fire(void 0)}asError(e){return e instanceof Error?e:new Error(`Writer received error. Reason: ${wc.string(e.message)?e.message:"unknown"}`)}};uo.AbstractMessageWriter=df;var Nv;(function(t){function e(r){return r===void 0||typeof r=="string"?{charset:r??"utf-8",contentTypeEncoder:(0,LA.default)().applicationJson.encoder}:{charset:r.charset??"utf-8",contentEncoder:r.contentEncoder,contentTypeEncoder:r.contentTypeEncoder??(0,LA.default)().applicationJson.encoder}}t.fromOptions=e})(Nv||(Nv={}));var wv=class extends df{constructor(e,r){super(),this.writable=e,this.options=Nv.fromOptions(r),this.errorCount=0,this.writeSemaphore=new B2.Semaphore(1),this.writable.onError(n=>this.fireError(n)),this.writable.onClose(()=>this.fireClose())}async write(e){return this.writeSemaphore.lock(async()=>this.options.contentTypeEncoder.encode(e,this.options).then(n=>this.options.contentEncoder!==void 0?this.options.contentEncoder.encode(n):n).then(n=>{let i=[];return i.push(V2,n.byteLength.toString(),$A),i.push($A),this.doWrite(e,i,n)},n=>{throw this.fireError(n),n}))}async doWrite(e,r,n){try{return await this.writable.write(r.join(""),"ascii"),this.writable.write(n)}catch(i){return this.handleError(i,e),Promise.reject(i)}}handleError(e,r){this.errorCount++,this.fireError(e,r,this.errorCount)}end(){this.writable.end()}};uo.WriteableStreamMessageWriter=wv});var KA=h(ge=>{"use strict";Object.defineProperty(ge,"__esModule",{value:!0});ge.createMessageConnection=ge.ConnectionOptions=ge.CancellationStrategy=ge.CancellationSenderStrategy=ge.CancellationReceiverStrategy=ge.ConnectionStrategy=ge.ConnectionError=ge.ConnectionErrors=ge.LogTraceNotification=ge.SetTraceNotification=ge.TraceFormat=ge.TraceValues=ge.Trace=ge.NullLogger=ge.ProgressType=ge.ProgressToken=void 0;var jA=oo(),Qt=As(),ve=yv(),UA=_v(),Dc=ka(),Dv=Cv(),qc;(function(t){t.type=new ve.NotificationType("$/cancelRequest")})(qc||(qc={}));var GA;(function(t){function e(r){return typeof r=="string"||typeof r=="number"}t.is=e})(GA=ge.ProgressToken||(ge.ProgressToken={}));var Oc;(function(t){t.type=new ve.NotificationType("$/progress")})(Oc||(Oc={}));var Ov=class{constructor(){}};ge.ProgressType=Ov;var qv;(function(t){function e(r){return Qt.func(r)}t.is=e})(qv||(qv={}));ge.NullLogger=Object.freeze({error:()=>{},warn:()=>{},info:()=>{},log:()=>{}});var Be;(function(t){t[t.Off=0]="Off",t[t.Messages=1]="Messages",t[t.Compact=2]="Compact",t[t.Verbose=3]="Verbose"})(Be=ge.Trace||(ge.Trace={}));var Y2;(function(t){t.Off="off",t.Messages="messages",t.Compact="compact",t.Verbose="verbose"})(Y2=ge.TraceValues||(ge.TraceValues={}));(function(t){function e(n){if(!Qt.string(n))return t.Off;switch(n=n.toLowerCase(),n){case"off":return t.Off;case"messages":return t.Messages;case"compact":return t.Compact;case"verbose":return t.Verbose;default:return t.Off}}t.fromString=e;function r(n){switch(n){case t.Off:return"off";case t.Messages:return"messages";case t.Compact:return"compact";case t.Verbose:return"verbose";default:return"off"}}t.toString=r})(Be=ge.Trace||(ge.Trace={}));var Vn;(function(t){t.Text="text",t.JSON="json"})(Vn=ge.TraceFormat||(ge.TraceFormat={}));(function(t){function e(r){return Qt.string(r)?(r=r.toLowerCase(),r==="json"?t.JSON:t.Text):t.Text}t.fromString=e})(Vn=ge.TraceFormat||(ge.TraceFormat={}));var WA;(function(t){t.type=new ve.NotificationType("$/setTrace")})(WA=ge.SetTraceNotification||(ge.SetTraceNotification={}));var Iv;(function(t){t.type=new ve.NotificationType("$/logTrace")})(Iv=ge.LogTraceNotification||(ge.LogTraceNotification={}));var ff;(function(t){t[t.Closed=1]="Closed",t[t.Disposed=2]="Disposed",t[t.AlreadyListening=3]="AlreadyListening"})(ff=ge.ConnectionErrors||(ge.ConnectionErrors={}));var Es=class t extends Error{constructor(e,r){super(r),this.code=e,Object.setPrototypeOf(this,t.prototype)}};ge.ConnectionError=Es;var HA;(function(t){function e(r){let n=r;return n&&Qt.func(n.cancelUndispatched)}t.is=e})(HA=ge.ConnectionStrategy||(ge.ConnectionStrategy={}));var xv;(function(t){t.Message=Object.freeze({createCancellationTokenSource(r){return new Dv.CancellationTokenSource}});function e(r){let n=r;return n&&Qt.func(n.createCancellationTokenSource)}t.is=e})(xv=ge.CancellationReceiverStrategy||(ge.CancellationReceiverStrategy={}));var Lv;(function(t){t.Message=Object.freeze({sendCancellation(r,n){return r.sendNotification(qc.type,{id:n})},cleanup(r){}});function e(r){let n=r;return n&&Qt.func(n.sendCancellation)&&Qt.func(n.cleanup)}t.is=e})(Lv=ge.CancellationSenderStrategy||(ge.CancellationSenderStrategy={}));var Mv;(function(t){t.Message=Object.freeze({receiver:xv.Message,sender:Lv.Message});function e(r){let n=r;return n&&xv.is(n.receiver)&&Lv.is(n.sender)}t.is=e})(Mv=ge.CancellationStrategy||(ge.CancellationStrategy={}));var X2;(function(t){function e(r){let n=r;return n&&(Mv.is(n.cancellationStrategy)||HA.is(n.connectionStrategy))}t.is=e})(X2=ge.ConnectionOptions||(ge.ConnectionOptions={}));var zn;(function(t){t[t.New=1]="New",t[t.Listening=2]="Listening",t[t.Closed=3]="Closed",t[t.Disposed=4]="Disposed"})(zn||(zn={}));function J2(t,e,r,n){let i=r!==void 0?r:ge.NullLogger,o=0,a=0,s=0,u="2.0",d,p=new Map,m,y=new Map,S=new Map,_,w=new UA.LinkedMap,k=new Map,N=new Set,C=new Map,E=Be.Off,L=Vn.Text,U,z=zn.New,te=new Dc.Emitter,we=new Dc.Emitter,Z=new Dc.Emitter,G=new Dc.Emitter,j=new Dc.Emitter,Y=n&&n.cancellationStrategy?n.cancellationStrategy:Mv.Message;function J(q){if(q===null)throw new Error("Can't send requests with id null since the response can't be correlated.");return"req-"+q.toString()}function Ce(q){return q===null?"res-unknown-"+(++s).toString():"res-"+q.toString()}function _e(){return"not-"+(++a).toString()}function me(q,T){ve.Message.isRequest(T)?q.set(J(T.id),T):ve.Message.isResponse(T)?q.set(Ce(T.id),T):q.set(_e(),T)}function Je(q){}function ze(){return z===zn.Listening}function Se(){return z===zn.Closed}function ut(){return z===zn.Disposed}function cr(){(z===zn.New||z===zn.Listening)&&(z=zn.Closed,we.fire(void 0))}function Rr(q){te.fire([q,void 0,void 0])}function fi(q){te.fire(q)}t.onClose(cr),t.onError(Rr),e.onClose(cr),e.onError(fi);function Mn(){_||w.size===0||(_=(0,jA.default)().timer.setImmediate(()=>{_=void 0,$n()}))}function $n(){if(w.size===0)return;let q=w.shift();try{ve.Message.isRequest(q)?pi(q):ve.Message.isNotification(q)?mi(q):ve.Message.isResponse(q)?hi(q):Vi(q)}finally{Mn()}}let Bt=q=>{try{if(ve.Message.isNotification(q)&&q.method===qc.type.method){let T=q.params.id,I=J(T),M=w.get(I);if(ve.Message.isRequest(M)){let le=n?.connectionStrategy,fe=le&&le.cancelUndispatched?le.cancelUndispatched(M,Je):void 0;if(fe&&(fe.error!==void 0||fe.result!==void 0)){w.delete(I),C.delete(T),fe.id=M.id,Kr(fe,q.method,Date.now()),e.write(fe).catch(()=>i.error("Sending response for canceled message failed."));return}}let W=C.get(T);if(W!==void 0){W.cancel(),Vr(q);return}else N.add(T)}me(w,q)}finally{Mn()}};function pi(q){if(ut())return;function T(ae,re,ne){let pe={jsonrpc:u,id:q.id};ae instanceof ve.ResponseError?pe.error=ae.toJson():pe.result=ae===void 0?null:ae,Kr(pe,re,ne),e.write(pe).catch(()=>i.error("Sending response failed."))}function I(ae,re,ne){let pe={jsonrpc:u,id:q.id,error:ae.toJson()};Kr(pe,re,ne),e.write(pe).catch(()=>i.error("Sending response failed."))}function M(ae,re,ne){ae===void 0&&(ae=null);let pe={jsonrpc:u,id:q.id,result:ae};Kr(pe,re,ne),e.write(pe).catch(()=>i.error("Sending response failed."))}Br(q);let W=p.get(q.method),le,fe;W&&(le=W.type,fe=W.handler);let Te=Date.now();if(fe||d){let ae=q.id??String(Date.now()),re=Y.receiver.createCancellationTokenSource(ae);q.id!==null&&N.has(q.id)&&re.cancel(),q.id!==null&&C.set(ae,re);try{let ne;if(fe)if(q.params===void 0){if(le!==void 0&&le.numberOfParams!==0){I(new ve.ResponseError(ve.ErrorCodes.InvalidParams,`Request ${q.method} defines ${le.numberOfParams} params but received none.`),q.method,Te);return}ne=fe(re.token)}else if(Array.isArray(q.params)){if(le!==void 0&&le.parameterStructures===ve.ParameterStructures.byName){I(new ve.ResponseError(ve.ErrorCodes.InvalidParams,`Request ${q.method} defines parameters by name but received parameters by position`),q.method,Te);return}ne=fe(...q.params,re.token)}else{if(le!==void 0&&le.parameterStructures===ve.ParameterStructures.byPosition){I(new ve.ResponseError(ve.ErrorCodes.InvalidParams,`Request ${q.method} defines parameters by position but received parameters by name`),q.method,Te);return}ne=fe(q.params,re.token)}else d&&(ne=d(q.method,q.params,re.token));let pe=ne;ne?pe.then?pe.then(Ee=>{C.delete(ae),T(Ee,q.method,Te)},Ee=>{C.delete(ae),Ee instanceof ve.ResponseError?I(Ee,q.method,Te):Ee&&Qt.string(Ee.message)?I(new ve.ResponseError(ve.ErrorCodes.InternalError,`Request ${q.method} failed with message: ${Ee.message}`),q.method,Te):I(new ve.ResponseError(ve.ErrorCodes.InternalError,`Request ${q.method} failed unexpectedly without providing any details.`),q.method,Te)}):(C.delete(ae),T(ne,q.method,Te)):(C.delete(ae),M(ne,q.method,Te))}catch(ne){C.delete(ae),ne instanceof ve.ResponseError?T(ne,q.method,Te):ne&&Qt.string(ne.message)?I(new ve.ResponseError(ve.ErrorCodes.InternalError,`Request ${q.method} failed with message: ${ne.message}`),q.method,Te):I(new ve.ResponseError(ve.ErrorCodes.InternalError,`Request ${q.method} failed unexpectedly without providing any details.`),q.method,Te)}}else I(new ve.ResponseError(ve.ErrorCodes.MethodNotFound,`Unhandled method ${q.method}`),q.method,Te)}function hi(q){if(!ut())if(q.id===null)q.error?i.error(`Received response message without id: Error is: 
${JSON.stringify(q.error,void 0,4)}`):i.error("Received response message without id. No further error information provided.");else{let T=q.id,I=k.get(T);if(an(q,I),I!==void 0){k.delete(T);try{if(q.error){let M=q.error;I.reject(new ve.ResponseError(M.code,M.message,M.data))}else if(q.result!==void 0)I.resolve(q.result);else throw new Error("Should never happen.")}catch(M){M.message?i.error(`Response handler '${I.method}' failed with message: ${M.message}`):i.error(`Response handler '${I.method}' failed unexpectedly.`)}}}}function mi(q){if(ut())return;let T,I;if(q.method===qc.type.method){let M=q.params.id;N.delete(M),Vr(q);return}else{let M=y.get(q.method);M&&(I=M.handler,T=M.type)}if(I||m)try{if(Vr(q),I)if(q.params===void 0)T!==void 0&&T.numberOfParams!==0&&T.parameterStructures!==ve.ParameterStructures.byName&&i.error(`Notification ${q.method} defines ${T.numberOfParams} params but received none.`),I();else if(Array.isArray(q.params)){let M=q.params;q.method===Oc.type.method&&M.length===2&&GA.is(M[0])?I({token:M[0],value:M[1]}):(T!==void 0&&(T.parameterStructures===ve.ParameterStructures.byName&&i.error(`Notification ${q.method} defines parameters by name but received parameters by position`),T.numberOfParams!==q.params.length&&i.error(`Notification ${q.method} defines ${T.numberOfParams} params but received ${M.length} arguments`)),I(...M))}else T!==void 0&&T.parameterStructures===ve.ParameterStructures.byPosition&&i.error(`Notification ${q.method} defines parameters by position but received parameters by name`),I(q.params);else m&&m(q.method,q.params)}catch(M){M.message?i.error(`Notification handler '${q.method}' failed with message: ${M.message}`):i.error(`Notification handler '${q.method}' failed unexpectedly.`)}else Z.fire(q)}function Vi(q){if(!q){i.error("Received empty message.");return}i.error(`Received message which is neither a response nor a notification message:
${JSON.stringify(q,null,4)}`);let T=q;if(Qt.string(T.id)||Qt.number(T.id)){let I=T.id,M=k.get(I);M&&M.reject(new Error("The received response has neither a result nor an error property."))}}function Qe(q){if(q!=null)switch(E){case Be.Verbose:return JSON.stringify(q,null,4);case Be.Compact:return JSON.stringify(q);default:return}}function Dt(q){if(!(E===Be.Off||!U))if(L===Vn.Text){let T;(E===Be.Verbose||E===Be.Compact)&&q.params&&(T=`Params: ${Qe(q.params)}

`),U.log(`Sending request '${q.method} - (${q.id})'.`,T)}else br("send-request",q)}function zi(q){if(!(E===Be.Off||!U))if(L===Vn.Text){let T;(E===Be.Verbose||E===Be.Compact)&&(q.params?T=`Params: ${Qe(q.params)}

`:T=`No parameters provided.

`),U.log(`Sending notification '${q.method}'.`,T)}else br("send-notification",q)}function Kr(q,T,I){if(!(E===Be.Off||!U))if(L===Vn.Text){let M;(E===Be.Verbose||E===Be.Compact)&&(q.error&&q.error.data?M=`Error data: ${Qe(q.error.data)}

`:q.result?M=`Result: ${Qe(q.result)}

`:q.error===void 0&&(M=`No result returned.

`)),U.log(`Sending response '${T} - (${q.id})'. Processing request took ${Date.now()-I}ms`,M)}else br("send-response",q)}function Br(q){if(!(E===Be.Off||!U))if(L===Vn.Text){let T;(E===Be.Verbose||E===Be.Compact)&&q.params&&(T=`Params: ${Qe(q.params)}

`),U.log(`Received request '${q.method} - (${q.id})'.`,T)}else br("receive-request",q)}function Vr(q){if(!(E===Be.Off||!U||q.method===Iv.type.method))if(L===Vn.Text){let T;(E===Be.Verbose||E===Be.Compact)&&(q.params?T=`Params: ${Qe(q.params)}

`:T=`No parameters provided.

`),U.log(`Received notification '${q.method}'.`,T)}else br("receive-notification",q)}function an(q,T){if(!(E===Be.Off||!U))if(L===Vn.Text){let I;if((E===Be.Verbose||E===Be.Compact)&&(q.error&&q.error.data?I=`Error data: ${Qe(q.error.data)}

`:q.result?I=`Result: ${Qe(q.result)}

`:q.error===void 0&&(I=`No result returned.

`)),T){let M=q.error?` Request failed: ${q.error.message} (${q.error.code}).`:"";U.log(`Received response '${T.method} - (${q.id})' in ${Date.now()-T.timerStart}ms.${M}`,I)}else U.log(`Received response ${q.id} without active response promise.`,I)}else br("receive-response",q)}function br(q,T){if(!U||E===Be.Off)return;let I={isLSPMessage:!0,type:q,message:T,timestamp:Date.now()};U.log(I)}function Ot(){if(Se())throw new Es(ff.Closed,"Connection is closed.");if(ut())throw new Es(ff.Disposed,"Connection is disposed.")}function zr(){if(ze())throw new Es(ff.AlreadyListening,"Connection is already listening")}function gi(){if(!ze())throw new Error("Call listen() first.")}function lr(q){return q===void 0?null:q}function qt(q){if(q!==null)return q}function Tt(q){return q!=null&&!Array.isArray(q)&&typeof q=="object"}function Cr(q,T){switch(q){case ve.ParameterStructures.auto:return Tt(T)?qt(T):[lr(T)];case ve.ParameterStructures.byName:if(!Tt(T))throw new Error("Received parameters by name but param is not an object literal.");return qt(T);case ve.ParameterStructures.byPosition:return[lr(T)];default:throw new Error(`Unknown parameter structure ${q.toString()}`)}}function dr(q,T){let I,M=q.numberOfParams;switch(M){case 0:I=void 0;break;case 1:I=Cr(q.parameterStructures,T[0]);break;default:I=[];for(let W=0;W<T.length&&W<M;W++)I.push(lr(T[W]));if(T.length<M)for(let W=T.length;W<M;W++)I.push(null);break}return I}let qr={sendNotification:(q,...T)=>{Ot();let I,M;if(Qt.string(q)){I=q;let le=T[0],fe=0,Te=ve.ParameterStructures.auto;ve.ParameterStructures.is(le)&&(fe=1,Te=le);let ae=T.length,re=ae-fe;switch(re){case 0:M=void 0;break;case 1:M=Cr(Te,T[fe]);break;default:if(Te===ve.ParameterStructures.byName)throw new Error(`Received ${re} parameters for 'by Name' notification parameter structure.`);M=T.slice(fe,ae).map(ne=>lr(ne));break}}else{let le=T;I=q.method,M=dr(q,le)}let W={jsonrpc:u,method:I,params:M};return zi(W),e.write(W).catch(()=>i.error("Sending notification failed."))},onNotification:(q,T)=>{Ot();let I;return Qt.func(q)?m=q:T&&(Qt.string(q)?(I=q,y.set(q,{type:void 0,handler:T})):(I=q.method,y.set(q.method,{type:q,handler:T}))),{dispose:()=>{I!==void 0?y.delete(I):m=void 0}}},onProgress:(q,T,I)=>{if(S.has(T))throw new Error(`Progress handler for token ${T} already registered`);return S.set(T,I),{dispose:()=>{S.delete(T)}}},sendProgress:(q,T,I)=>qr.sendNotification(Oc.type,{token:T,value:I}),onUnhandledProgress:G.event,sendRequest:(q,...T)=>{Ot(),gi();let I,M,W;if(Qt.string(q)){I=q;let ae=T[0],re=T[T.length-1],ne=0,pe=ve.ParameterStructures.auto;ve.ParameterStructures.is(ae)&&(ne=1,pe=ae);let Ee=T.length;Dv.CancellationToken.is(re)&&(Ee=Ee-1,W=re);let Ze=Ee-ne;switch(Ze){case 0:M=void 0;break;case 1:M=Cr(pe,T[ne]);break;default:if(pe===ve.ParameterStructures.byName)throw new Error(`Received ${Ze} parameters for 'by Name' request parameter structure.`);M=T.slice(ne,Ee).map(Rt=>lr(Rt));break}}else{let ae=T;I=q.method,M=dr(q,ae);let re=q.numberOfParams;W=Dv.CancellationToken.is(ae[re])?ae[re]:void 0}let le=o++,fe;return W&&(fe=W.onCancellationRequested(()=>{let ae=Y.sender.sendCancellation(qr,le);return ae===void 0?(i.log(`Received no promise from cancellation strategy when cancelling id ${le}`),Promise.resolve()):ae.catch(()=>{i.log(`Sending cancellation messages for id ${le} failed`)})})),new Promise((ae,re)=>{let ne={jsonrpc:u,id:le,method:I,params:M},pe=Rt=>{ae(Rt),Y.sender.cleanup(le),fe?.dispose()},Ee=Rt=>{re(Rt),Y.sender.cleanup(le),fe?.dispose()},Ze={method:I,timerStart:Date.now(),resolve:pe,reject:Ee};Dt(ne);try{e.write(ne).catch(()=>i.error("Sending request failed."))}catch(Rt){Ze.reject(new ve.ResponseError(ve.ErrorCodes.MessageWriteError,Rt.message?Rt.message:"Unknown reason")),Ze=null}Ze&&k.set(le,Ze)})},onRequest:(q,T)=>{Ot();let I=null;return qv.is(q)?(I=void 0,d=q):Qt.string(q)?(I=null,T!==void 0&&(I=q,p.set(q,{handler:T,type:void 0}))):T!==void 0&&(I=q.method,p.set(q.method,{type:q,handler:T})),{dispose:()=>{I!==null&&(I!==void 0?p.delete(I):d=void 0)}}},hasPendingResponse:()=>k.size>0,trace:async(q,T,I)=>{let M=!1,W=Vn.Text;I!==void 0&&(Qt.boolean(I)?M=I:(M=I.sendNotification||!1,W=I.traceFormat||Vn.Text)),E=q,L=W,E===Be.Off?U=void 0:U=T,M&&!Se()&&!ut()&&await qr.sendNotification(WA.type,{value:Be.toString(q)})},onError:te.event,onClose:we.event,onUnhandledNotification:Z.event,onDispose:j.event,end:()=>{e.end()},dispose:()=>{if(ut())return;z=zn.Disposed,j.fire(void 0);let q=new ve.ResponseError(ve.ErrorCodes.PendingResponseRejected,"Pending response rejected since connection got disposed");for(let T of k.values())T.reject(q);k=new Map,C=new Map,N=new Set,w=new UA.LinkedMap,Qt.func(e.dispose)&&e.dispose(),Qt.func(t.dispose)&&t.dispose()},listen:()=>{Ot(),zr(),z=zn.Listening,t.listen(Bt)},inspect:()=>{(0,jA.default)().console.log("inspect")}};return qr.onNotification(Iv.type,q=>{if(E===Be.Off||!U)return;let T=E===Be.Verbose||E===Be.Compact;U.log(q.message,T?q.verbose:void 0)}),qr.onNotification(Oc.type,q=>{let T=S.get(q.token);T?T(q.value):G.fire(q)}),qr}ge.createMessageConnection=J2});var Uv=h(F=>{"use strict";Object.defineProperty(F,"__esModule",{value:!0});F.TraceFormat=F.TraceValues=F.Trace=F.ProgressType=F.ProgressToken=F.createMessageConnection=F.NullLogger=F.ConnectionOptions=F.ConnectionStrategy=F.WriteableStreamMessageWriter=F.AbstractMessageWriter=F.MessageWriter=F.ReadableStreamMessageReader=F.AbstractMessageReader=F.MessageReader=F.CancellationToken=F.CancellationTokenSource=F.Emitter=F.Event=F.Disposable=F.LRUCache=F.Touch=F.LinkedMap=F.ParameterStructures=F.NotificationType9=F.NotificationType8=F.NotificationType7=F.NotificationType6=F.NotificationType5=F.NotificationType4=F.NotificationType3=F.NotificationType2=F.NotificationType1=F.NotificationType0=F.NotificationType=F.ErrorCodes=F.ResponseError=F.RequestType9=F.RequestType8=F.RequestType7=F.RequestType6=F.RequestType5=F.RequestType4=F.RequestType3=F.RequestType2=F.RequestType1=F.RequestType0=F.RequestType=F.Message=F.RAL=void 0;F.CancellationStrategy=F.CancellationSenderStrategy=F.CancellationReceiverStrategy=F.ConnectionError=F.ConnectionErrors=F.LogTraceNotification=F.SetTraceNotification=void 0;var ot=yv();Object.defineProperty(F,"Message",{enumerable:!0,get:function(){return ot.Message}});Object.defineProperty(F,"RequestType",{enumerable:!0,get:function(){return ot.RequestType}});Object.defineProperty(F,"RequestType0",{enumerable:!0,get:function(){return ot.RequestType0}});Object.defineProperty(F,"RequestType1",{enumerable:!0,get:function(){return ot.RequestType1}});Object.defineProperty(F,"RequestType2",{enumerable:!0,get:function(){return ot.RequestType2}});Object.defineProperty(F,"RequestType3",{enumerable:!0,get:function(){return ot.RequestType3}});Object.defineProperty(F,"RequestType4",{enumerable:!0,get:function(){return ot.RequestType4}});Object.defineProperty(F,"RequestType5",{enumerable:!0,get:function(){return ot.RequestType5}});Object.defineProperty(F,"RequestType6",{enumerable:!0,get:function(){return ot.RequestType6}});Object.defineProperty(F,"RequestType7",{enumerable:!0,get:function(){return ot.RequestType7}});Object.defineProperty(F,"RequestType8",{enumerable:!0,get:function(){return ot.RequestType8}});Object.defineProperty(F,"RequestType9",{enumerable:!0,get:function(){return ot.RequestType9}});Object.defineProperty(F,"ResponseError",{enumerable:!0,get:function(){return ot.ResponseError}});Object.defineProperty(F,"ErrorCodes",{enumerable:!0,get:function(){return ot.ErrorCodes}});Object.defineProperty(F,"NotificationType",{enumerable:!0,get:function(){return ot.NotificationType}});Object.defineProperty(F,"NotificationType0",{enumerable:!0,get:function(){return ot.NotificationType0}});Object.defineProperty(F,"NotificationType1",{enumerable:!0,get:function(){return ot.NotificationType1}});Object.defineProperty(F,"NotificationType2",{enumerable:!0,get:function(){return ot.NotificationType2}});Object.defineProperty(F,"NotificationType3",{enumerable:!0,get:function(){return ot.NotificationType3}});Object.defineProperty(F,"NotificationType4",{enumerable:!0,get:function(){return ot.NotificationType4}});Object.defineProperty(F,"NotificationType5",{enumerable:!0,get:function(){return ot.NotificationType5}});Object.defineProperty(F,"NotificationType6",{enumerable:!0,get:function(){return ot.NotificationType6}});Object.defineProperty(F,"NotificationType7",{enumerable:!0,get:function(){return ot.NotificationType7}});Object.defineProperty(F,"NotificationType8",{enumerable:!0,get:function(){return ot.NotificationType8}});Object.defineProperty(F,"NotificationType9",{enumerable:!0,get:function(){return ot.NotificationType9}});Object.defineProperty(F,"ParameterStructures",{enumerable:!0,get:function(){return ot.ParameterStructures}});var $v=_v();Object.defineProperty(F,"LinkedMap",{enumerable:!0,get:function(){return $v.LinkedMap}});Object.defineProperty(F,"LRUCache",{enumerable:!0,get:function(){return $v.LRUCache}});Object.defineProperty(F,"Touch",{enumerable:!0,get:function(){return $v.Touch}});var Q2=Uy();Object.defineProperty(F,"Disposable",{enumerable:!0,get:function(){return Q2.Disposable}});var BA=ka();Object.defineProperty(F,"Event",{enumerable:!0,get:function(){return BA.Event}});Object.defineProperty(F,"Emitter",{enumerable:!0,get:function(){return BA.Emitter}});var VA=Cv();Object.defineProperty(F,"CancellationTokenSource",{enumerable:!0,get:function(){return VA.CancellationTokenSource}});Object.defineProperty(F,"CancellationToken",{enumerable:!0,get:function(){return VA.CancellationToken}});var Fv=IA();Object.defineProperty(F,"MessageReader",{enumerable:!0,get:function(){return Fv.MessageReader}});Object.defineProperty(F,"AbstractMessageReader",{enumerable:!0,get:function(){return Fv.AbstractMessageReader}});Object.defineProperty(F,"ReadableStreamMessageReader",{enumerable:!0,get:function(){return Fv.ReadableStreamMessageReader}});var jv=FA();Object.defineProperty(F,"MessageWriter",{enumerable:!0,get:function(){return jv.MessageWriter}});Object.defineProperty(F,"AbstractMessageWriter",{enumerable:!0,get:function(){return jv.AbstractMessageWriter}});Object.defineProperty(F,"WriteableStreamMessageWriter",{enumerable:!0,get:function(){return jv.WriteableStreamMessageWriter}});var Er=KA();Object.defineProperty(F,"ConnectionStrategy",{enumerable:!0,get:function(){return Er.ConnectionStrategy}});Object.defineProperty(F,"ConnectionOptions",{enumerable:!0,get:function(){return Er.ConnectionOptions}});Object.defineProperty(F,"NullLogger",{enumerable:!0,get:function(){return Er.NullLogger}});Object.defineProperty(F,"createMessageConnection",{enumerable:!0,get:function(){return Er.createMessageConnection}});Object.defineProperty(F,"ProgressToken",{enumerable:!0,get:function(){return Er.ProgressToken}});Object.defineProperty(F,"ProgressType",{enumerable:!0,get:function(){return Er.ProgressType}});Object.defineProperty(F,"Trace",{enumerable:!0,get:function(){return Er.Trace}});Object.defineProperty(F,"TraceValues",{enumerable:!0,get:function(){return Er.TraceValues}});Object.defineProperty(F,"TraceFormat",{enumerable:!0,get:function(){return Er.TraceFormat}});Object.defineProperty(F,"SetTraceNotification",{enumerable:!0,get:function(){return Er.SetTraceNotification}});Object.defineProperty(F,"LogTraceNotification",{enumerable:!0,get:function(){return Er.LogTraceNotification}});Object.defineProperty(F,"ConnectionErrors",{enumerable:!0,get:function(){return Er.ConnectionErrors}});Object.defineProperty(F,"ConnectionError",{enumerable:!0,get:function(){return Er.ConnectionError}});Object.defineProperty(F,"CancellationReceiverStrategy",{enumerable:!0,get:function(){return Er.CancellationReceiverStrategy}});Object.defineProperty(F,"CancellationSenderStrategy",{enumerable:!0,get:function(){return Er.CancellationSenderStrategy}});Object.defineProperty(F,"CancellationStrategy",{enumerable:!0,get:function(){return Er.CancellationStrategy}});var Z2=oo();F.RAL=Z2.default});var co=h(ln=>{"use strict";var eV=ln&&ln.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var i=Object.getOwnPropertyDescriptor(e,r);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,i)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),tV=ln&&ln.__exportStar||function(t,e){for(var r in t)r!=="default"&&!Object.prototype.hasOwnProperty.call(e,r)&&eV(e,t,r)};Object.defineProperty(ln,"__esModule",{value:!0});ln.createMessageConnection=ln.BrowserMessageWriter=ln.BrowserMessageReader=void 0;var rV=NA();rV.default.install();var ks=Uv();tV(Uv(),ln);var Gv=class extends ks.AbstractMessageReader{constructor(e){super(),this._onData=new ks.Emitter,this._messageListener=r=>{this._onData.fire(r.data)},e.addEventListener("error",r=>this.fireError(r)),e.onmessage=this._messageListener}listen(e){return this._onData.event(e)}};ln.BrowserMessageReader=Gv;var Wv=class extends ks.AbstractMessageWriter{constructor(e){super(),this.context=e,this.errorCount=0,e.addEventListener("error",r=>this.fireError(r))}write(e){try{return this.context.postMessage(e),Promise.resolve()}catch(r){return this.handleError(r,e),Promise.reject(r)}}handleError(e,r){this.errorCount++,this.fireError(e,r,this.errorCount)}end(){}};ln.BrowserMessageWriter=Wv;function nV(t,e,r,n){return r===void 0&&(r=ks.NullLogger),ks.ConnectionStrategy.is(n)&&(n={connectionStrategy:n}),(0,ks.createMessageConnection)(t,e,r,n)}ln.createMessageConnection=nV});var Cn=h(Ft=>{"use strict";Object.defineProperty(Ft,"__esModule",{value:!0});Ft.Deferred=Ft.MutexLock=Ft.interruptAndCheck=Ft.isOperationCancelled=Ft.OperationCancelled=Ft.setInterruptionPeriod=Ft.startCancelableOperation=Ft.delayNextTick=void 0;var pf=co();function zA(){return new Promise(t=>{typeof setImmediate>"u"?setTimeout(t,0):setImmediate(t)})}Ft.delayNextTick=zA;var Hv=0,YA=10;function iV(){return Hv=Date.now(),new pf.CancellationTokenSource}Ft.startCancelableOperation=iV;function oV(t){YA=t}Ft.setInterruptionPeriod=oV;Ft.OperationCancelled=Symbol("OperationCancelled");function XA(t){return t===Ft.OperationCancelled}Ft.isOperationCancelled=XA;async function aV(t){if(t===pf.CancellationToken.None)return;let e=Date.now();if(e-Hv>=YA&&(Hv=e,await zA()),t.isCancellationRequested)throw Ft.OperationCancelled}Ft.interruptAndCheck=aV;var Kv=class{constructor(){this.previousAction=Promise.resolve(),this.previousTokenSource=new pf.CancellationTokenSource}lock(e){this.cancel();let r=new pf.CancellationTokenSource;return this.previousTokenSource=r,this.previousAction=this.previousAction.then(()=>e(r.token).catch(n=>{XA(n)||console.error("Error: ",n)}))}cancel(){this.previousTokenSource.cancel()}};Ft.MutexLock=Kv;var Bv=class{constructor(){this.promise=new Promise((e,r)=>{this.resolve=n=>(e(n),this),this.reject=n=>(r(n),this)})}};Ft.Deferred=Bv});var mf=h(hf=>{"use strict";Object.defineProperty(hf,"__esModule",{value:!0});hf.DefaultScopeComputation=void 0;var Vv=co(),JA=Ye(),sV=cn(),QA=Cn(),zv=class{constructor(e){this.nameProvider=e.references.NameProvider,this.descriptions=e.workspace.AstNodeDescriptionProvider}async computeExports(e,r=Vv.CancellationToken.None){return this.computeExportsForNode(e.parseResult.value,e,void 0,r)}async computeExportsForNode(e,r,n=JA.streamContents,i=Vv.CancellationToken.None){let o=[];this.exportNode(e,o,r);for(let a of n(e))await(0,QA.interruptAndCheck)(i),this.exportNode(a,o,r);return o}exportNode(e,r,n){let i=this.nameProvider.getName(e);i&&r.push(this.descriptions.createDescription(e,i,n))}async computeLocalScopes(e,r=Vv.CancellationToken.None){let n=e.parseResult.value,i=new sV.MultiMap;for(let o of(0,JA.streamAllContents)(n))await(0,QA.interruptAndCheck)(r),this.processNode(o,e,i);return i}processNode(e,r,n){let i=e.$container;if(i){let o=this.nameProvider.getName(e);o&&n.add(i,this.descriptions.createDescription(e,o,r))}}};hf.DefaultScopeComputation=zv});var yf=h(Fo=>{"use strict";Object.defineProperty(Fo,"__esModule",{value:!0});Fo.DefaultScopeProvider=Fo.EMPTY_SCOPE=Fo.StreamScope=void 0;var uV=Ye(),gf=tr(),Ns=class{constructor(e,r,n){this.elements=e,this.outerScope=r,this.caseInsensitive=n?.caseInsensitive}getAllElements(){return this.outerScope?this.elements.concat(this.outerScope.getAllElements()):this.elements}getElement(e){let r=this.caseInsensitive?this.elements.find(n=>n.name.toLowerCase()===e.toLowerCase()):this.elements.find(n=>n.name===e);if(r)return r;if(this.outerScope)return this.outerScope.getElement(e)}};Fo.StreamScope=Ns;Fo.EMPTY_SCOPE={getElement(){},getAllElements(){return gf.EMPTY_STREAM}};var Yv=class{constructor(e){this.reflection=e.shared.AstReflection,this.nameProvider=e.references.NameProvider,this.descriptions=e.workspace.AstNodeDescriptionProvider,this.indexManager=e.shared.workspace.IndexManager}getScope(e){let r=[],n=this.reflection.getReferenceType(e),i=(0,uV.getDocument)(e.container).precomputedScopes;if(i){let a=e.container;do{let s=i.get(a);s.length>0&&r.push((0,gf.stream)(s).filter(u=>this.reflection.isSubtype(u.type,n))),a=a.$container}while(a)}let o=this.getGlobalScope(n,e);for(let a=r.length-1;a>=0;a--)o=this.createScope(r[a],o);return o}createScope(e,r,n){return new Ns((0,gf.stream)(e),r,n)}createScopeForNodes(e,r,n){let i=(0,gf.stream)(e).map(o=>{let a=this.nameProvider.getName(o);if(a)return this.descriptions.createDescription(o,a)}).nonNullable();return new Ns(i,r,n)}getGlobalScope(e,r){return new Ns(this.indexManager.allElements(e))}};Fo.DefaultScopeProvider=Yv});var lo=h(ws=>{"use strict";Object.defineProperty(ws,"__esModule",{value:!0});ws.relativeURI=ws.equalURI=void 0;function cV(t,e){return t?.toString()===e?.toString()}ws.equalURI=cV;function lV(t,e){let r=t.path,n=e.path,i=r.split("/").filter(d=>d.length>0),o=n.split("/").filter(d=>d.length>0),a=0;for(;a<i.length&&i[a]===o[a];a++);let s="../".repeat(i.length-a),u=o.slice(a).join("/");return s+u}ws.relativeURI=lV});var eS=h(Ds=>{"use strict";Object.defineProperty(Ds,"__esModule",{value:!0});Ds.LangiumGrammarScopeComputation=Ds.LangiumGrammarScopeProvider=void 0;var dV=mf(),Xv=yf(),Ic=Ye(),ZA=tr(),fV=lo(),Pn=Ke(),Jv=Xt(),Qv=class extends Xv.DefaultScopeProvider{constructor(e){super(e)}getScope(e){let r=this.reflection.getReferenceType(e);return r===Pn.AbstractType?this.getTypeScope(r,e):super.getScope(e)}getTypeScope(e,r){let n,i=(0,Ic.getDocument)(r.container).precomputedScopes,o=(0,Ic.findRootNode)(r.container);if(i&&o){let s=i.get(o);s.length>0&&(n=(0,ZA.stream)(s).filter(u=>u.type===Pn.Interface||u.type===Pn.Type))}let a=this.getGlobalScope(e,r);return n?this.createScope(n,a):a}getGlobalScope(e,r){let n=(0,Ic.getContainerOfType)(r.container,Pn.isGrammar);if(!n)return Xv.EMPTY_SCOPE;let i=(0,ZA.stream)(n.imports).map(Jv.resolveImportUri).nonNullable(),o=this.indexManager.allElements(e).filter(a=>i.some(s=>(0,fV.equalURI)(a.documentUri,s)));return e===Pn.AbstractType&&(o=o.filter(a=>a.type===Pn.Interface||a.type===Pn.Type)),new Xv.StreamScope(o)}};Ds.LangiumGrammarScopeProvider=Qv;var Zv=class extends dV.DefaultScopeComputation{constructor(e){super(e),this.astNodeLocator=e.workspace.AstNodeLocator}exportNode(e,r,n){var i;if(super.exportNode(e,r,n),(0,Pn.isParserRule)(e)){if(!e.returnType&&!e.dataType){let o=(i=e.inferredType)!==null&&i!==void 0?i:e;r.push({node:o,name:o.name,type:"Interface",documentUri:n.uri,path:this.astNodeLocator.getAstNodePath(o)})}(0,Ic.streamAllContents)(e).forEach(o=>{if((0,Pn.isAction)(o)&&o.inferredType){let a=(0,Jv.getActionType)(o);a&&r.push({node:e,name:a,type:"Interface",documentUri:n.uri,path:this.astNodeLocator.getAstNodePath(e)})}})}}processNode(e,r,n){(0,Pn.isReturnType)(e)||(this.processTypeNode(e,r,n),this.processActionNode(e,r,n),super.processNode(e,r,n))}processTypeNode(e,r,n){var i;let o=e.$container;if(o&&(0,Pn.isParserRule)(e)&&!e.returnType&&!e.dataType){let a=(i=e.inferredType)!==null&&i!==void 0?i:e;n.add(o,{node:a,name:a.name,type:"Interface",documentUri:r.uri,path:this.astNodeLocator.getAstNodePath(a)})}}processActionNode(e,r,n){let i=(0,Ic.findRootNode)(e);if(i&&(0,Pn.isAction)(e)&&e.inferredType){let o=(0,Jv.getActionType)(e);o&&n.add(i,{node:e,name:o,type:"Interface",documentUri:r.uri,path:this.astNodeLocator.getAstNodePath(e)})}}};Ds.LangiumGrammarScopeComputation=Zv});var Os=h((tS,vf)=>{(function(t){if(typeof vf=="object"&&typeof vf.exports=="object"){var e=t(zl,tS);e!==void 0&&(vf.exports=e)}else typeof define=="function"&&define.amd&&define(["require","exports"],t)})(function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.TextDocument=e.EOL=e.WorkspaceFolder=e.InlayHint=e.InlayHintLabelPart=e.InlayHintKind=e.InlineValueContext=e.InlineValueEvaluatableExpression=e.InlineValueVariableLookup=e.InlineValueText=e.SemanticTokens=e.SemanticTokenModifiers=e.SemanticTokenTypes=e.SelectionRange=e.DocumentLink=e.FormattingOptions=e.CodeLens=e.CodeAction=e.CodeActionContext=e.CodeActionTriggerKind=e.CodeActionKind=e.DocumentSymbol=e.WorkspaceSymbol=e.SymbolInformation=e.SymbolTag=e.SymbolKind=e.DocumentHighlight=e.DocumentHighlightKind=e.SignatureInformation=e.ParameterInformation=e.Hover=e.MarkedString=e.CompletionList=e.CompletionItem=e.CompletionItemLabelDetails=e.InsertTextMode=e.InsertReplaceEdit=e.CompletionItemTag=e.InsertTextFormat=e.CompletionItemKind=e.MarkupContent=e.MarkupKind=e.TextDocumentItem=e.OptionalVersionedTextDocumentIdentifier=e.VersionedTextDocumentIdentifier=e.TextDocumentIdentifier=e.WorkspaceChange=e.WorkspaceEdit=e.DeleteFile=e.RenameFile=e.CreateFile=e.TextDocumentEdit=e.AnnotatedTextEdit=e.ChangeAnnotationIdentifier=e.ChangeAnnotation=e.TextEdit=e.Command=e.Diagnostic=e.CodeDescription=e.DiagnosticTag=e.DiagnosticSeverity=e.DiagnosticRelatedInformation=e.FoldingRange=e.FoldingRangeKind=e.ColorPresentation=e.ColorInformation=e.Color=e.LocationLink=e.Location=e.Range=e.Position=e.uinteger=e.integer=e.URI=e.DocumentUri=void 0;var r;(function(l){function g(v){return typeof v=="string"}l.is=g})(r=e.DocumentUri||(e.DocumentUri={}));var n;(function(l){function g(v){return typeof v=="string"}l.is=g})(n=e.URI||(e.URI={}));var i;(function(l){l.MIN_VALUE=-2147483648,l.MAX_VALUE=2147483647;function g(v){return typeof v=="number"&&l.MIN_VALUE<=v&&v<=l.MAX_VALUE}l.is=g})(i=e.integer||(e.integer={}));var o;(function(l){l.MIN_VALUE=0,l.MAX_VALUE=2147483647;function g(v){return typeof v=="number"&&l.MIN_VALUE<=v&&v<=l.MAX_VALUE}l.is=g})(o=e.uinteger||(e.uinteger={}));var a;(function(l){function g(f,c){return f===Number.MAX_VALUE&&(f=o.MAX_VALUE),c===Number.MAX_VALUE&&(c=o.MAX_VALUE),{line:f,character:c}}l.create=g;function v(f){var c=f;return R.objectLiteral(c)&&R.uinteger(c.line)&&R.uinteger(c.character)}l.is=v})(a=e.Position||(e.Position={}));var s;(function(l){function g(f,c,b,O){if(R.uinteger(f)&&R.uinteger(c)&&R.uinteger(b)&&R.uinteger(O))return{start:a.create(f,c),end:a.create(b,O)};if(a.is(f)&&a.is(c))return{start:f,end:c};throw new Error("Range#create called with invalid arguments[".concat(f,", ").concat(c,", ").concat(b,", ").concat(O,"]"))}l.create=g;function v(f){var c=f;return R.objectLiteral(c)&&a.is(c.start)&&a.is(c.end)}l.is=v})(s=e.Range||(e.Range={}));var u;(function(l){function g(f,c){return{uri:f,range:c}}l.create=g;function v(f){var c=f;return R.objectLiteral(c)&&s.is(c.range)&&(R.string(c.uri)||R.undefined(c.uri))}l.is=v})(u=e.Location||(e.Location={}));var d;(function(l){function g(f,c,b,O){return{targetUri:f,targetRange:c,targetSelectionRange:b,originSelectionRange:O}}l.create=g;function v(f){var c=f;return R.objectLiteral(c)&&s.is(c.targetRange)&&R.string(c.targetUri)&&s.is(c.targetSelectionRange)&&(s.is(c.originSelectionRange)||R.undefined(c.originSelectionRange))}l.is=v})(d=e.LocationLink||(e.LocationLink={}));var p;(function(l){function g(f,c,b,O){return{red:f,green:c,blue:b,alpha:O}}l.create=g;function v(f){var c=f;return R.objectLiteral(c)&&R.numberRange(c.red,0,1)&&R.numberRange(c.green,0,1)&&R.numberRange(c.blue,0,1)&&R.numberRange(c.alpha,0,1)}l.is=v})(p=e.Color||(e.Color={}));var m;(function(l){function g(f,c){return{range:f,color:c}}l.create=g;function v(f){var c=f;return R.objectLiteral(c)&&s.is(c.range)&&p.is(c.color)}l.is=v})(m=e.ColorInformation||(e.ColorInformation={}));var y;(function(l){function g(f,c,b){return{label:f,textEdit:c,additionalTextEdits:b}}l.create=g;function v(f){var c=f;return R.objectLiteral(c)&&R.string(c.label)&&(R.undefined(c.textEdit)||U.is(c))&&(R.undefined(c.additionalTextEdits)||R.typedArray(c.additionalTextEdits,U.is))}l.is=v})(y=e.ColorPresentation||(e.ColorPresentation={}));var S;(function(l){l.Comment="comment",l.Imports="imports",l.Region="region"})(S=e.FoldingRangeKind||(e.FoldingRangeKind={}));var _;(function(l){function g(f,c,b,O,H,Re){var he={startLine:f,endLine:c};return R.defined(b)&&(he.startCharacter=b),R.defined(O)&&(he.endCharacter=O),R.defined(H)&&(he.kind=H),R.defined(Re)&&(he.collapsedText=Re),he}l.create=g;function v(f){var c=f;return R.objectLiteral(c)&&R.uinteger(c.startLine)&&R.uinteger(c.startLine)&&(R.undefined(c.startCharacter)||R.uinteger(c.startCharacter))&&(R.undefined(c.endCharacter)||R.uinteger(c.endCharacter))&&(R.undefined(c.kind)||R.string(c.kind))}l.is=v})(_=e.FoldingRange||(e.FoldingRange={}));var w;(function(l){function g(f,c){return{location:f,message:c}}l.create=g;function v(f){var c=f;return R.defined(c)&&u.is(c.location)&&R.string(c.message)}l.is=v})(w=e.DiagnosticRelatedInformation||(e.DiagnosticRelatedInformation={}));var k;(function(l){l.Error=1,l.Warning=2,l.Information=3,l.Hint=4})(k=e.DiagnosticSeverity||(e.DiagnosticSeverity={}));var N;(function(l){l.Unnecessary=1,l.Deprecated=2})(N=e.DiagnosticTag||(e.DiagnosticTag={}));var C;(function(l){function g(v){var f=v;return R.objectLiteral(f)&&R.string(f.href)}l.is=g})(C=e.CodeDescription||(e.CodeDescription={}));var E;(function(l){function g(f,c,b,O,H,Re){var he={range:f,message:c};return R.defined(b)&&(he.severity=b),R.defined(O)&&(he.code=O),R.defined(H)&&(he.source=H),R.defined(Re)&&(he.relatedInformation=Re),he}l.create=g;function v(f){var c,b=f;return R.defined(b)&&s.is(b.range)&&R.string(b.message)&&(R.number(b.severity)||R.undefined(b.severity))&&(R.integer(b.code)||R.string(b.code)||R.undefined(b.code))&&(R.undefined(b.codeDescription)||R.string((c=b.codeDescription)===null||c===void 0?void 0:c.href))&&(R.string(b.source)||R.undefined(b.source))&&(R.undefined(b.relatedInformation)||R.typedArray(b.relatedInformation,w.is))}l.is=v})(E=e.Diagnostic||(e.Diagnostic={}));var L;(function(l){function g(f,c){for(var b=[],O=2;O<arguments.length;O++)b[O-2]=arguments[O];var H={title:f,command:c};return R.defined(b)&&b.length>0&&(H.arguments=b),H}l.create=g;function v(f){var c=f;return R.defined(c)&&R.string(c.title)&&R.string(c.command)}l.is=v})(L=e.Command||(e.Command={}));var U;(function(l){function g(b,O){return{range:b,newText:O}}l.replace=g;function v(b,O){return{range:{start:b,end:b},newText:O}}l.insert=v;function f(b){return{range:b,newText:""}}l.del=f;function c(b){var O=b;return R.objectLiteral(O)&&R.string(O.newText)&&s.is(O.range)}l.is=c})(U=e.TextEdit||(e.TextEdit={}));var z;(function(l){function g(f,c,b){var O={label:f};return c!==void 0&&(O.needsConfirmation=c),b!==void 0&&(O.description=b),O}l.create=g;function v(f){var c=f;return R.objectLiteral(c)&&R.string(c.label)&&(R.boolean(c.needsConfirmation)||c.needsConfirmation===void 0)&&(R.string(c.description)||c.description===void 0)}l.is=v})(z=e.ChangeAnnotation||(e.ChangeAnnotation={}));var te;(function(l){function g(v){var f=v;return R.string(f)}l.is=g})(te=e.ChangeAnnotationIdentifier||(e.ChangeAnnotationIdentifier={}));var we;(function(l){function g(b,O,H){return{range:b,newText:O,annotationId:H}}l.replace=g;function v(b,O,H){return{range:{start:b,end:b},newText:O,annotationId:H}}l.insert=v;function f(b,O){return{range:b,newText:"",annotationId:O}}l.del=f;function c(b){var O=b;return U.is(O)&&(z.is(O.annotationId)||te.is(O.annotationId))}l.is=c})(we=e.AnnotatedTextEdit||(e.AnnotatedTextEdit={}));var Z;(function(l){function g(f,c){return{textDocument:f,edits:c}}l.create=g;function v(f){var c=f;return R.defined(c)&&Se.is(c.textDocument)&&Array.isArray(c.edits)}l.is=v})(Z=e.TextDocumentEdit||(e.TextDocumentEdit={}));var G;(function(l){function g(f,c,b){var O={kind:"create",uri:f};return c!==void 0&&(c.overwrite!==void 0||c.ignoreIfExists!==void 0)&&(O.options=c),b!==void 0&&(O.annotationId=b),O}l.create=g;function v(f){var c=f;return c&&c.kind==="create"&&R.string(c.uri)&&(c.options===void 0||(c.options.overwrite===void 0||R.boolean(c.options.overwrite))&&(c.options.ignoreIfExists===void 0||R.boolean(c.options.ignoreIfExists)))&&(c.annotationId===void 0||te.is(c.annotationId))}l.is=v})(G=e.CreateFile||(e.CreateFile={}));var j;(function(l){function g(f,c,b,O){var H={kind:"rename",oldUri:f,newUri:c};return b!==void 0&&(b.overwrite!==void 0||b.ignoreIfExists!==void 0)&&(H.options=b),O!==void 0&&(H.annotationId=O),H}l.create=g;function v(f){var c=f;return c&&c.kind==="rename"&&R.string(c.oldUri)&&R.string(c.newUri)&&(c.options===void 0||(c.options.overwrite===void 0||R.boolean(c.options.overwrite))&&(c.options.ignoreIfExists===void 0||R.boolean(c.options.ignoreIfExists)))&&(c.annotationId===void 0||te.is(c.annotationId))}l.is=v})(j=e.RenameFile||(e.RenameFile={}));var Y;(function(l){function g(f,c,b){var O={kind:"delete",uri:f};return c!==void 0&&(c.recursive!==void 0||c.ignoreIfNotExists!==void 0)&&(O.options=c),b!==void 0&&(O.annotationId=b),O}l.create=g;function v(f){var c=f;return c&&c.kind==="delete"&&R.string(c.uri)&&(c.options===void 0||(c.options.recursive===void 0||R.boolean(c.options.recursive))&&(c.options.ignoreIfNotExists===void 0||R.boolean(c.options.ignoreIfNotExists)))&&(c.annotationId===void 0||te.is(c.annotationId))}l.is=v})(Y=e.DeleteFile||(e.DeleteFile={}));var J;(function(l){function g(v){var f=v;return f&&(f.changes!==void 0||f.documentChanges!==void 0)&&(f.documentChanges===void 0||f.documentChanges.every(function(c){return R.string(c.kind)?G.is(c)||j.is(c)||Y.is(c):Z.is(c)}))}l.is=g})(J=e.WorkspaceEdit||(e.WorkspaceEdit={}));var Ce=function(){function l(g,v){this.edits=g,this.changeAnnotations=v}return l.prototype.insert=function(g,v,f){var c,b;if(f===void 0?c=U.insert(g,v):te.is(f)?(b=f,c=we.insert(g,v,f)):(this.assertChangeAnnotations(this.changeAnnotations),b=this.changeAnnotations.manage(f),c=we.insert(g,v,b)),this.edits.push(c),b!==void 0)return b},l.prototype.replace=function(g,v,f){var c,b;if(f===void 0?c=U.replace(g,v):te.is(f)?(b=f,c=we.replace(g,v,f)):(this.assertChangeAnnotations(this.changeAnnotations),b=this.changeAnnotations.manage(f),c=we.replace(g,v,b)),this.edits.push(c),b!==void 0)return b},l.prototype.delete=function(g,v){var f,c;if(v===void 0?f=U.del(g):te.is(v)?(c=v,f=we.del(g,v)):(this.assertChangeAnnotations(this.changeAnnotations),c=this.changeAnnotations.manage(v),f=we.del(g,c)),this.edits.push(f),c!==void 0)return c},l.prototype.add=function(g){this.edits.push(g)},l.prototype.all=function(){return this.edits},l.prototype.clear=function(){this.edits.splice(0,this.edits.length)},l.prototype.assertChangeAnnotations=function(g){if(g===void 0)throw new Error("Text edit change is not configured to manage change annotations.")},l}(),_e=function(){function l(g){this._annotations=g===void 0?Object.create(null):g,this._counter=0,this._size=0}return l.prototype.all=function(){return this._annotations},Object.defineProperty(l.prototype,"size",{get:function(){return this._size},enumerable:!1,configurable:!0}),l.prototype.manage=function(g,v){var f;if(te.is(g)?f=g:(f=this.nextId(),v=g),this._annotations[f]!==void 0)throw new Error("Id ".concat(f," is already in use."));if(v===void 0)throw new Error("No annotation provided for id ".concat(f));return this._annotations[f]=v,this._size++,f},l.prototype.nextId=function(){return this._counter++,this._counter.toString()},l}(),me=function(){function l(g){var v=this;this._textEditChanges=Object.create(null),g!==void 0?(this._workspaceEdit=g,g.documentChanges?(this._changeAnnotations=new _e(g.changeAnnotations),g.changeAnnotations=this._changeAnnotations.all(),g.documentChanges.forEach(function(f){if(Z.is(f)){var c=new Ce(f.edits,v._changeAnnotations);v._textEditChanges[f.textDocument.uri]=c}})):g.changes&&Object.keys(g.changes).forEach(function(f){var c=new Ce(g.changes[f]);v._textEditChanges[f]=c})):this._workspaceEdit={}}return Object.defineProperty(l.prototype,"edit",{get:function(){return this.initDocumentChanges(),this._changeAnnotations!==void 0&&(this._changeAnnotations.size===0?this._workspaceEdit.changeAnnotations=void 0:this._workspaceEdit.changeAnnotations=this._changeAnnotations.all()),this._workspaceEdit},enumerable:!1,configurable:!0}),l.prototype.getTextEditChange=function(g){if(Se.is(g)){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var v={uri:g.uri,version:g.version},f=this._textEditChanges[v.uri];if(!f){var c=[],b={textDocument:v,edits:c};this._workspaceEdit.documentChanges.push(b),f=new Ce(c,this._changeAnnotations),this._textEditChanges[v.uri]=f}return f}else{if(this.initChanges(),this._workspaceEdit.changes===void 0)throw new Error("Workspace edit is not configured for normal text edit changes.");var f=this._textEditChanges[g];if(!f){var c=[];this._workspaceEdit.changes[g]=c,f=new Ce(c),this._textEditChanges[g]=f}return f}},l.prototype.initDocumentChanges=function(){this._workspaceEdit.documentChanges===void 0&&this._workspaceEdit.changes===void 0&&(this._changeAnnotations=new _e,this._workspaceEdit.documentChanges=[],this._workspaceEdit.changeAnnotations=this._changeAnnotations.all())},l.prototype.initChanges=function(){this._workspaceEdit.documentChanges===void 0&&this._workspaceEdit.changes===void 0&&(this._workspaceEdit.changes=Object.create(null))},l.prototype.createFile=function(g,v,f){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var c;z.is(v)||te.is(v)?c=v:f=v;var b,O;if(c===void 0?b=G.create(g,f):(O=te.is(c)?c:this._changeAnnotations.manage(c),b=G.create(g,f,O)),this._workspaceEdit.documentChanges.push(b),O!==void 0)return O},l.prototype.renameFile=function(g,v,f,c){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var b;z.is(f)||te.is(f)?b=f:c=f;var O,H;if(b===void 0?O=j.create(g,v,c):(H=te.is(b)?b:this._changeAnnotations.manage(b),O=j.create(g,v,c,H)),this._workspaceEdit.documentChanges.push(O),H!==void 0)return H},l.prototype.deleteFile=function(g,v,f){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var c;z.is(v)||te.is(v)?c=v:f=v;var b,O;if(c===void 0?b=Y.create(g,f):(O=te.is(c)?c:this._changeAnnotations.manage(c),b=Y.create(g,f,O)),this._workspaceEdit.documentChanges.push(b),O!==void 0)return O},l}();e.WorkspaceChange=me;var Je;(function(l){function g(f){return{uri:f}}l.create=g;function v(f){var c=f;return R.defined(c)&&R.string(c.uri)}l.is=v})(Je=e.TextDocumentIdentifier||(e.TextDocumentIdentifier={}));var ze;(function(l){function g(f,c){return{uri:f,version:c}}l.create=g;function v(f){var c=f;return R.defined(c)&&R.string(c.uri)&&R.integer(c.version)}l.is=v})(ze=e.VersionedTextDocumentIdentifier||(e.VersionedTextDocumentIdentifier={}));var Se;(function(l){function g(f,c){return{uri:f,version:c}}l.create=g;function v(f){var c=f;return R.defined(c)&&R.string(c.uri)&&(c.version===null||R.integer(c.version))}l.is=v})(Se=e.OptionalVersionedTextDocumentIdentifier||(e.OptionalVersionedTextDocumentIdentifier={}));var ut;(function(l){function g(f,c,b,O){return{uri:f,languageId:c,version:b,text:O}}l.create=g;function v(f){var c=f;return R.defined(c)&&R.string(c.uri)&&R.string(c.languageId)&&R.integer(c.version)&&R.string(c.text)}l.is=v})(ut=e.TextDocumentItem||(e.TextDocumentItem={}));var cr;(function(l){l.PlainText="plaintext",l.Markdown="markdown";function g(v){var f=v;return f===l.PlainText||f===l.Markdown}l.is=g})(cr=e.MarkupKind||(e.MarkupKind={}));var Rr;(function(l){function g(v){var f=v;return R.objectLiteral(v)&&cr.is(f.kind)&&R.string(f.value)}l.is=g})(Rr=e.MarkupContent||(e.MarkupContent={}));var fi;(function(l){l.Text=1,l.Method=2,l.Function=3,l.Constructor=4,l.Field=5,l.Variable=6,l.Class=7,l.Interface=8,l.Module=9,l.Property=10,l.Unit=11,l.Value=12,l.Enum=13,l.Keyword=14,l.Snippet=15,l.Color=16,l.File=17,l.Reference=18,l.Folder=19,l.EnumMember=20,l.Constant=21,l.Struct=22,l.Event=23,l.Operator=24,l.TypeParameter=25})(fi=e.CompletionItemKind||(e.CompletionItemKind={}));var Mn;(function(l){l.PlainText=1,l.Snippet=2})(Mn=e.InsertTextFormat||(e.InsertTextFormat={}));var $n;(function(l){l.Deprecated=1})($n=e.CompletionItemTag||(e.CompletionItemTag={}));var Bt;(function(l){function g(f,c,b){return{newText:f,insert:c,replace:b}}l.create=g;function v(f){var c=f;return c&&R.string(c.newText)&&s.is(c.insert)&&s.is(c.replace)}l.is=v})(Bt=e.InsertReplaceEdit||(e.InsertReplaceEdit={}));var pi;(function(l){l.asIs=1,l.adjustIndentation=2})(pi=e.InsertTextMode||(e.InsertTextMode={}));var hi;(function(l){function g(v){var f=v;return f&&(R.string(f.detail)||f.detail===void 0)&&(R.string(f.description)||f.description===void 0)}l.is=g})(hi=e.CompletionItemLabelDetails||(e.CompletionItemLabelDetails={}));var mi;(function(l){function g(v){return{label:v}}l.create=g})(mi=e.CompletionItem||(e.CompletionItem={}));var Vi;(function(l){function g(v,f){return{items:v||[],isIncomplete:!!f}}l.create=g})(Vi=e.CompletionList||(e.CompletionList={}));var Qe;(function(l){function g(f){return f.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}l.fromPlainText=g;function v(f){var c=f;return R.string(c)||R.objectLiteral(c)&&R.string(c.language)&&R.string(c.value)}l.is=v})(Qe=e.MarkedString||(e.MarkedString={}));var Dt;(function(l){function g(v){var f=v;return!!f&&R.objectLiteral(f)&&(Rr.is(f.contents)||Qe.is(f.contents)||R.typedArray(f.contents,Qe.is))&&(v.range===void 0||s.is(v.range))}l.is=g})(Dt=e.Hover||(e.Hover={}));var zi;(function(l){function g(v,f){return f?{label:v,documentation:f}:{label:v}}l.create=g})(zi=e.ParameterInformation||(e.ParameterInformation={}));var Kr;(function(l){function g(v,f){for(var c=[],b=2;b<arguments.length;b++)c[b-2]=arguments[b];var O={label:v};return R.defined(f)&&(O.documentation=f),R.defined(c)?O.parameters=c:O.parameters=[],O}l.create=g})(Kr=e.SignatureInformation||(e.SignatureInformation={}));var Br;(function(l){l.Text=1,l.Read=2,l.Write=3})(Br=e.DocumentHighlightKind||(e.DocumentHighlightKind={}));var Vr;(function(l){function g(v,f){var c={range:v};return R.number(f)&&(c.kind=f),c}l.create=g})(Vr=e.DocumentHighlight||(e.DocumentHighlight={}));var an;(function(l){l.File=1,l.Module=2,l.Namespace=3,l.Package=4,l.Class=5,l.Method=6,l.Property=7,l.Field=8,l.Constructor=9,l.Enum=10,l.Interface=11,l.Function=12,l.Variable=13,l.Constant=14,l.String=15,l.Number=16,l.Boolean=17,l.Array=18,l.Object=19,l.Key=20,l.Null=21,l.EnumMember=22,l.Struct=23,l.Event=24,l.Operator=25,l.TypeParameter=26})(an=e.SymbolKind||(e.SymbolKind={}));var br;(function(l){l.Deprecated=1})(br=e.SymbolTag||(e.SymbolTag={}));var Ot;(function(l){function g(v,f,c,b,O){var H={name:v,kind:f,location:{uri:b,range:c}};return O&&(H.containerName=O),H}l.create=g})(Ot=e.SymbolInformation||(e.SymbolInformation={}));var zr;(function(l){function g(v,f,c,b){return b!==void 0?{name:v,kind:f,location:{uri:c,range:b}}:{name:v,kind:f,location:{uri:c}}}l.create=g})(zr=e.WorkspaceSymbol||(e.WorkspaceSymbol={}));var gi;(function(l){function g(f,c,b,O,H,Re){var he={name:f,detail:c,kind:b,range:O,selectionRange:H};return Re!==void 0&&(he.children=Re),he}l.create=g;function v(f){var c=f;return c&&R.string(c.name)&&R.number(c.kind)&&s.is(c.range)&&s.is(c.selectionRange)&&(c.detail===void 0||R.string(c.detail))&&(c.deprecated===void 0||R.boolean(c.deprecated))&&(c.children===void 0||Array.isArray(c.children))&&(c.tags===void 0||Array.isArray(c.tags))}l.is=v})(gi=e.DocumentSymbol||(e.DocumentSymbol={}));var lr;(function(l){l.Empty="",l.QuickFix="quickfix",l.Refactor="refactor",l.RefactorExtract="refactor.extract",l.RefactorInline="refactor.inline",l.RefactorRewrite="refactor.rewrite",l.Source="source",l.SourceOrganizeImports="source.organizeImports",l.SourceFixAll="source.fixAll"})(lr=e.CodeActionKind||(e.CodeActionKind={}));var qt;(function(l){l.Invoked=1,l.Automatic=2})(qt=e.CodeActionTriggerKind||(e.CodeActionTriggerKind={}));var Tt;(function(l){function g(f,c,b){var O={diagnostics:f};return c!=null&&(O.only=c),b!=null&&(O.triggerKind=b),O}l.create=g;function v(f){var c=f;return R.defined(c)&&R.typedArray(c.diagnostics,E.is)&&(c.only===void 0||R.typedArray(c.only,R.string))&&(c.triggerKind===void 0||c.triggerKind===qt.Invoked||c.triggerKind===qt.Automatic)}l.is=v})(Tt=e.CodeActionContext||(e.CodeActionContext={}));var Cr;(function(l){function g(f,c,b){var O={title:f},H=!0;return typeof c=="string"?(H=!1,O.kind=c):L.is(c)?O.command=c:O.edit=c,H&&b!==void 0&&(O.kind=b),O}l.create=g;function v(f){var c=f;return c&&R.string(c.title)&&(c.diagnostics===void 0||R.typedArray(c.diagnostics,E.is))&&(c.kind===void 0||R.string(c.kind))&&(c.edit!==void 0||c.command!==void 0)&&(c.command===void 0||L.is(c.command))&&(c.isPreferred===void 0||R.boolean(c.isPreferred))&&(c.edit===void 0||J.is(c.edit))}l.is=v})(Cr=e.CodeAction||(e.CodeAction={}));var dr;(function(l){function g(f,c){var b={range:f};return R.defined(c)&&(b.data=c),b}l.create=g;function v(f){var c=f;return R.defined(c)&&s.is(c.range)&&(R.undefined(c.command)||L.is(c.command))}l.is=v})(dr=e.CodeLens||(e.CodeLens={}));var qr;(function(l){function g(f,c){return{tabSize:f,insertSpaces:c}}l.create=g;function v(f){var c=f;return R.defined(c)&&R.uinteger(c.tabSize)&&R.boolean(c.insertSpaces)}l.is=v})(qr=e.FormattingOptions||(e.FormattingOptions={}));var q;(function(l){function g(f,c,b){return{range:f,target:c,data:b}}l.create=g;function v(f){var c=f;return R.defined(c)&&s.is(c.range)&&(R.undefined(c.target)||R.string(c.target))}l.is=v})(q=e.DocumentLink||(e.DocumentLink={}));var T;(function(l){function g(f,c){return{range:f,parent:c}}l.create=g;function v(f){var c=f;return R.objectLiteral(c)&&s.is(c.range)&&(c.parent===void 0||l.is(c.parent))}l.is=v})(T=e.SelectionRange||(e.SelectionRange={}));var I;(function(l){l.namespace="namespace",l.type="type",l.class="class",l.enum="enum",l.interface="interface",l.struct="struct",l.typeParameter="typeParameter",l.parameter="parameter",l.variable="variable",l.property="property",l.enumMember="enumMember",l.event="event",l.function="function",l.method="method",l.macro="macro",l.keyword="keyword",l.modifier="modifier",l.comment="comment",l.string="string",l.number="number",l.regexp="regexp",l.operator="operator",l.decorator="decorator"})(I=e.SemanticTokenTypes||(e.SemanticTokenTypes={}));var M;(function(l){l.declaration="declaration",l.definition="definition",l.readonly="readonly",l.static="static",l.deprecated="deprecated",l.abstract="abstract",l.async="async",l.modification="modification",l.documentation="documentation",l.defaultLibrary="defaultLibrary"})(M=e.SemanticTokenModifiers||(e.SemanticTokenModifiers={}));var W;(function(l){function g(v){var f=v;return R.objectLiteral(f)&&(f.resultId===void 0||typeof f.resultId=="string")&&Array.isArray(f.data)&&(f.data.length===0||typeof f.data[0]=="number")}l.is=g})(W=e.SemanticTokens||(e.SemanticTokens={}));var le;(function(l){function g(f,c){return{range:f,text:c}}l.create=g;function v(f){var c=f;return c!=null&&s.is(c.range)&&R.string(c.text)}l.is=v})(le=e.InlineValueText||(e.InlineValueText={}));var fe;(function(l){function g(f,c,b){return{range:f,variableName:c,caseSensitiveLookup:b}}l.create=g;function v(f){var c=f;return c!=null&&s.is(c.range)&&R.boolean(c.caseSensitiveLookup)&&(R.string(c.variableName)||c.variableName===void 0)}l.is=v})(fe=e.InlineValueVariableLookup||(e.InlineValueVariableLookup={}));var Te;(function(l){function g(f,c){return{range:f,expression:c}}l.create=g;function v(f){var c=f;return c!=null&&s.is(c.range)&&(R.string(c.expression)||c.expression===void 0)}l.is=v})(Te=e.InlineValueEvaluatableExpression||(e.InlineValueEvaluatableExpression={}));var ae;(function(l){function g(f,c){return{frameId:f,stoppedLocation:c}}l.create=g;function v(f){var c=f;return R.defined(c)&&s.is(f.stoppedLocation)}l.is=v})(ae=e.InlineValueContext||(e.InlineValueContext={}));var re;(function(l){l.Type=1,l.Parameter=2;function g(v){return v===1||v===2}l.is=g})(re=e.InlayHintKind||(e.InlayHintKind={}));var ne;(function(l){function g(f){return{value:f}}l.create=g;function v(f){var c=f;return R.objectLiteral(c)&&(c.tooltip===void 0||R.string(c.tooltip)||Rr.is(c.tooltip))&&(c.location===void 0||u.is(c.location))&&(c.command===void 0||L.is(c.command))}l.is=v})(ne=e.InlayHintLabelPart||(e.InlayHintLabelPart={}));var pe;(function(l){function g(f,c,b){var O={position:f,label:c};return b!==void 0&&(O.kind=b),O}l.create=g;function v(f){var c=f;return R.objectLiteral(c)&&a.is(c.position)&&(R.string(c.label)||R.typedArray(c.label,ne.is))&&(c.kind===void 0||re.is(c.kind))&&c.textEdits===void 0||R.typedArray(c.textEdits,U.is)&&(c.tooltip===void 0||R.string(c.tooltip)||Rr.is(c.tooltip))&&(c.paddingLeft===void 0||R.boolean(c.paddingLeft))&&(c.paddingRight===void 0||R.boolean(c.paddingRight))}l.is=v})(pe=e.InlayHint||(e.InlayHint={}));var Ee;(function(l){function g(v){var f=v;return R.objectLiteral(f)&&n.is(f.uri)&&R.string(f.name)}l.is=g})(Ee=e.WorkspaceFolder||(e.WorkspaceFolder={})),e.EOL=[`
`,`\r
`,"\r"];var Ze;(function(l){function g(b,O,H,Re){return new Rt(b,O,H,Re)}l.create=g;function v(b){var O=b;return!!(R.defined(O)&&R.string(O.uri)&&(R.undefined(O.languageId)||R.string(O.languageId))&&R.uinteger(O.lineCount)&&R.func(O.getText)&&R.func(O.positionAt)&&R.func(O.offsetAt))}l.is=v;function f(b,O){for(var H=b.getText(),Re=c(O,function(sn,Yi){var Qu=sn.range.start.line-Yi.range.start.line;return Qu===0?sn.range.start.character-Yi.range.start.character:Qu}),he=H.length,bt=Re.length-1;bt>=0;bt--){var Ct=Re[bt],Vt=b.offsetAt(Ct.range.start),ee=b.offsetAt(Ct.range.end);if(ee<=he)H=H.substring(0,Vt)+Ct.newText+H.substring(ee,H.length);else throw new Error("Overlapping edit");he=Vt}return H}l.applyEdits=f;function c(b,O){if(b.length<=1)return b;var H=b.length/2|0,Re=b.slice(0,H),he=b.slice(H);c(Re,O),c(he,O);for(var bt=0,Ct=0,Vt=0;bt<Re.length&&Ct<he.length;){var ee=O(Re[bt],he[Ct]);ee<=0?b[Vt++]=Re[bt++]:b[Vt++]=he[Ct++]}for(;bt<Re.length;)b[Vt++]=Re[bt++];for(;Ct<he.length;)b[Vt++]=he[Ct++];return b}})(Ze=e.TextDocument||(e.TextDocument={}));var Rt=function(){function l(g,v,f,c){this._uri=g,this._languageId=v,this._version=f,this._content=c,this._lineOffsets=void 0}return Object.defineProperty(l.prototype,"uri",{get:function(){return this._uri},enumerable:!1,configurable:!0}),Object.defineProperty(l.prototype,"languageId",{get:function(){return this._languageId},enumerable:!1,configurable:!0}),Object.defineProperty(l.prototype,"version",{get:function(){return this._version},enumerable:!1,configurable:!0}),l.prototype.getText=function(g){if(g){var v=this.offsetAt(g.start),f=this.offsetAt(g.end);return this._content.substring(v,f)}return this._content},l.prototype.update=function(g,v){this._content=g.text,this._version=v,this._lineOffsets=void 0},l.prototype.getLineOffsets=function(){if(this._lineOffsets===void 0){for(var g=[],v=this._content,f=!0,c=0;c<v.length;c++){f&&(g.push(c),f=!1);var b=v.charAt(c);f=b==="\r"||b===`
`,b==="\r"&&c+1<v.length&&v.charAt(c+1)===`
`&&c++}f&&v.length>0&&g.push(v.length),this._lineOffsets=g}return this._lineOffsets},l.prototype.positionAt=function(g){g=Math.max(Math.min(g,this._content.length),0);var v=this.getLineOffsets(),f=0,c=v.length;if(c===0)return a.create(0,g);for(;f<c;){var b=Math.floor((f+c)/2);v[b]>g?c=b:f=b+1}var O=f-1;return a.create(O,g-v[O])},l.prototype.offsetAt=function(g){var v=this.getLineOffsets();if(g.line>=v.length)return this._content.length;if(g.line<0)return 0;var f=v[g.line],c=g.line+1<v.length?v[g.line+1]:this._content.length;return Math.max(Math.min(f+g.character,c),f)},Object.defineProperty(l.prototype,"lineCount",{get:function(){return this.getLineOffsets().length},enumerable:!1,configurable:!0}),l}(),R;(function(l){var g=Object.prototype.toString;function v(ee){return typeof ee<"u"}l.defined=v;function f(ee){return typeof ee>"u"}l.undefined=f;function c(ee){return ee===!0||ee===!1}l.boolean=c;function b(ee){return g.call(ee)==="[object String]"}l.string=b;function O(ee){return g.call(ee)==="[object Number]"}l.number=O;function H(ee,sn,Yi){return g.call(ee)==="[object Number]"&&sn<=ee&&ee<=Yi}l.numberRange=H;function Re(ee){return g.call(ee)==="[object Number]"&&-2147483648<=ee&&ee<=2147483647}l.integer=Re;function he(ee){return g.call(ee)==="[object Number]"&&0<=ee&&ee<=2147483647}l.uinteger=he;function bt(ee){return g.call(ee)==="[object Function]"}l.func=bt;function Ct(ee){return ee!==null&&typeof ee=="object"}l.objectLiteral=Ct;function Vt(ee,sn){return Array.isArray(ee)&&ee.every(sn)}l.typedArray=Vt})(R||(R={}))})});var o_=h(Fr=>{"use strict";var pV=Fr&&Fr.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var i=Object.getOwnPropertyDescriptor(e,r);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,i)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),hV=Fr&&Fr.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),mV=Fr&&Fr.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var r in t)r!=="default"&&Object.prototype.hasOwnProperty.call(t,r)&&pV(e,t,r);return hV(e,t),e};Object.defineProperty(Fr,"__esModule",{value:!0});Fr.LangiumGrammarValidator=Fr.IssueCodes=Fr.registerValidationChecks=void 0;var e_=Os(),jo=Ye(),Uo=cn(),t_=pt(),Go=Yt(),r_=tr(),dt=mV(Ke()),n_=Ke(),rr=Xt();function gV(t){let e=t.validation.ValidationRegistry,r=t.validation.LangiumGrammarValidator,n={Action:[r.checkAssignmentReservedName],AbstractRule:r.checkRuleName,Assignment:[r.checkAssignmentWithFeatureName,r.checkAssignmentToFragmentRule,r.checkAssignmentTypes,r.checkAssignmentReservedName],ParserRule:[r.checkParserRuleDataType,r.checkRuleParametersUsed,r.checkParserRuleReservedName],TerminalRule:[r.checkTerminalRuleReturnType,r.checkHiddenTerminalRule,r.checkEmptyTerminalRule],InferredType:r.checkTypeReservedName,Keyword:r.checkKeyword,UnorderedGroup:r.checkUnorderedGroup,Grammar:[r.checkGrammarName,r.checkEntryGrammarRule,r.checkUniqueRuleName,r.checkUniqueTypeName,r.checkUniqueImportedRules,r.checkDuplicateImportedGrammar,r.checkGrammarHiddenTokens,r.checkGrammarForUnusedRules,r.checkGrammarTypeInfer,r.checkClashingTerminalNames],GrammarImport:r.checkPackageImport,CharacterRange:r.checkInvalidCharacterRange,Interface:[r.checkTypeReservedName,r.checkInterfacePropertyTypes],Type:[r.checkTypeReservedName],TypeAttribute:r.checkTypeReservedName,RuleCall:[r.checkUsedHiddenTerminalRule,r.checkUsedFragmentTerminalRule,r.checkRuleCallParameters],TerminalRuleCall:r.checkUsedHiddenTerminalRule,CrossReference:[r.checkCrossReferenceSyntax,r.checkCrossRefNameAssignment,r.checkCrossRefTerminalType,r.checkCrossRefType],AtomType:[r.checkAtomTypeRefType,r.checkFragmentsInTypes]};e.register(n,r)}Fr.registerValidationChecks=gV;var $r;(function(t){t.GrammarNameUppercase="grammar-name-uppercase",t.RuleNameUppercase="rule-name-uppercase",t.HiddenGrammarTokens="hidden-grammar-tokens",t.UseRegexTokens="use-regex-tokens",t.EntryRuleTokenSyntax="entry-rule-token-syntax",t.CrossRefTokenSyntax="cross-ref-token-syntax",t.UnnecessaryFileExtension="unnecessary-file-extension",t.InvalidReturns="invalid-returns",t.InvalidInfers="invalid-infers",t.MissingInfer="missing-infer",t.MissingReturns="missing-returns",t.SuperfluousInfer="superfluous-infer",t.OptionalUnorderedGroup="optional-unordered-group"})($r=Fr.IssueCodes||(Fr.IssueCodes={}));var i_=class{constructor(e){this.references=e.references.References,this.documents=e.shared.workspace.LangiumDocuments}checkGrammarName(e,r){if(e.name){let n=e.name.substring(0,1);n.toUpperCase()!==n&&r("warning","Grammar name should start with an upper case letter.",{node:e,property:"name",code:$r.GrammarNameUppercase})}}checkEntryGrammarRule(e,r){if(e.isDeclared&&!e.name)return;let n=e.rules.filter(i=>dt.isParserRule(i)&&i.entry);if(e.isDeclared&&n.length===0){let i=e.rules.find(o=>dt.isParserRule(o)&&!(0,rr.isDataTypeRule)(o));i?r("error","The grammar is missing an entry parser rule. This rule can be an entry one.",{node:i,property:"name",code:$r.EntryRuleTokenSyntax}):r("error","This grammar is missing an entry parser rule.",{node:e,property:"name"})}else!e.isDeclared&&n.length>=1?n.forEach(i=>r("error","Cannot declare entry rules for unnamed grammars.",{node:i,property:"name"})):n.length>1?n.forEach(i=>r("error","The entry rule has to be unique.",{node:i,property:"name"})):n.length===1&&(0,rr.isDataTypeRule)(n[0])&&r("error","The entry rule cannot be a data type rule.",{node:n[0],property:"name"})}checkUniqueRuleName(e,r){let n=i=>(0,r_.stream)(i.rules).filter(o=>!xc(o));this.checkUniqueName(e,r,n,"rule")}checkUniqueTypeName(e,r){let n=i=>(0,r_.stream)(i.types).concat(i.interfaces);this.checkUniqueName(e,r,n,"type")}checkUniqueName(e,r,n,i){let o=new Uo.MultiMap;n(e).forEach(u=>o.add(u.name,u));for(let[,u]of o.entriesGroupedByKey())u.length>1&&u.forEach(d=>{r("error",`A ${i}'s name has to be unique.`,{node:d,property:"name"})});let a=new Set,s=(0,rr.resolveTransitiveImports)(this.documents,e);for(let u of s)n(u).forEach(d=>a.add(d.name));for(let u of o.keys())a.has(u)&&o.get(u).forEach(p=>{r("error",`A ${i} with the name '${p.name}' already exists in an imported grammar.`,{node:p,property:"name"})})}checkDuplicateImportedGrammar(e,r){let n=new Uo.MultiMap;for(let i of e.imports){let o=(0,rr.resolveImport)(this.documents,i);o&&n.add(o,i)}for(let[,i]of n.entriesGroupedByKey())i.length>1&&i.forEach((o,a)=>{a>0&&r("warning","The grammar is already being directly imported.",{node:o,tags:[e_.DiagnosticTag.Unnecessary]})})}checkUniqueImportedRules(e,r){let n=new Map;for(let o of e.imports){let a=(0,rr.resolveTransitiveImports)(this.documents,o);n.set(o,a)}let i=new Uo.MultiMap;for(let o of e.imports){let a=n.get(o);for(let s of e.imports){if(o===s)continue;let u=n.get(s),d=this.getDuplicateExportedRules(a,u);for(let p of d)i.add(o,p)}}for(let o of e.imports){let a=i.get(o);a.length>0&&r("error","Some rules exported by this grammar are also included in other imports: "+(0,r_.stream)(a).distinct().join(", "),{node:o,property:"path"})}}getDuplicateExportedRules(e,r){let i=e.filter(s=>!r.includes(s)).flatMap(s=>s.rules),o=r.flatMap(s=>s.rules),a=new Set;for(let s of i){let u=s.name;for(let d of o){let p=d.name;u===p&&a.add(d.name)}}return a}checkGrammarTypeInfer(e,r){var n,i,o;let a=new Set;for(let u of e.types)a.add(u.name);for(let u of e.interfaces)a.add(u.name);(0,rr.resolveTransitiveImports)(this.documents,e).forEach(u=>{u.types.forEach(d=>a.add(d.name)),u.interfaces.forEach(d=>a.add(d.name))});for(let u of e.rules.filter(dt.isParserRule)){if(xc(u))continue;let d=(0,rr.isDataTypeRule)(u),p=!u.returnType&&!u.dataType,m=(0,rr.getTypeNameWithoutError)(u);if(!d&&m&&a.has(m)===p){if((p||((n=u.returnType)===null||n===void 0?void 0:n.ref)!==void 0)&&u.inferredType===void 0)r("error",s(m,p),{node:u,property:"name",code:$r.MissingReturns});else if(p||((i=u.returnType)===null||i===void 0?void 0:i.ref)!==void 0){let y=(0,Go.findNodeForKeyword)(u.inferredType.$cstNode,"infers");r("error",s(m,p),{node:u.inferredType,property:"name",code:$r.InvalidInfers,data:y&&(0,t_.toDocumentSegment)(y)})}}else if(d&&p){let y=(0,Go.findNodeForKeyword)(u.$cstNode,"infer");r("error","Data type rules cannot infer a type.",{node:u,property:"inferredType",code:$r.InvalidInfers,data:y&&(0,t_.toDocumentSegment)(y)})}}for(let u of(0,jo.streamAllContents)(e).filter(dt.isAction)){let d=this.getActionType(u);if(d){let p=!!u.inferredType,m=(0,rr.getTypeNameWithoutError)(u);if(u.type&&a.has(m)===p){let y=p?(0,Go.findNodeForKeyword)(u.$cstNode,"infer"):(0,Go.findNodeForKeyword)(u.$cstNode,"{");r("error",s(m,p),{node:u,property:"type",code:p?$r.SuperfluousInfer:$r.MissingInfer,data:y&&(0,t_.toDocumentSegment)(y)})}else if(d&&a.has(m)&&p&&u.$cstNode){let y=(0,Go.findNodeForProperty)((o=u.inferredType)===null||o===void 0?void 0:o.$cstNode,"name"),S=(0,Go.findNodeForKeyword)(u.$cstNode,"{");y&&S&&r("error",`${m} is a declared type and cannot be redefined.`,{node:u,property:"type",code:$r.SuperfluousInfer,data:{start:S.range.end,end:y.range.start}})}}}function s(u,d){return d?`The type '${u}' is already explicitly declared and cannot be inferred.`:`The type '${u}' is not explicitly declared and must be inferred.`}}getActionType(e){var r;if(e.type)return(r=e.type)===null||r===void 0?void 0:r.ref;if(e.inferredType)return e.inferredType}checkGrammarHiddenTokens(e,r){e.definesHiddenTokens&&r("error","Hidden terminals are declared at the terminal definition.",{node:e,property:"definesHiddenTokens",code:$r.HiddenGrammarTokens})}checkHiddenTerminalRule(e,r){e.hidden&&e.fragment&&r("error","Cannot use terminal fragments as hidden tokens.",{node:e,property:"hidden"})}checkEmptyTerminalRule(e,r){try{let n=(0,rr.terminalRegex)(e);new RegExp(n).test("")&&r("error","This terminal could match an empty string.",{node:e,property:"name"})}catch{}}checkUsedHiddenTerminalRule(e,r){let n=(0,jo.getContainerOfType)(e,i=>dt.isTerminalRule(i)||dt.isParserRule(i));if(n){if("hidden"in n&&n.hidden)return;let i=e.rule.ref;dt.isTerminalRule(i)&&i.hidden&&r("error","Cannot use hidden terminal in non-hidden rule",{node:e,property:"rule"})}}checkUsedFragmentTerminalRule(e,r){let n=e.rule.ref;dt.isTerminalRule(n)&&n.fragment&&(0,jo.getContainerOfType)(e,dt.isParserRule)&&r("error","Cannot use terminal fragments as part of parser rules.",{node:e,property:"rule"})}checkCrossReferenceSyntax(e,r){e.deprecatedSyntax&&r("error","'|' is deprecated. Please, use ':' instead.",{node:e,property:"deprecatedSyntax",code:$r.CrossRefTokenSyntax})}checkPackageImport(e,r){(0,rr.resolveImport)(this.documents,e)===void 0?r("error","Import cannot be resolved.",{node:e,property:"path"}):e.path.endsWith(".langium")&&r("warning","Imports do not need file extensions.",{node:e,property:"path",code:$r.UnnecessaryFileExtension})}checkInvalidCharacterRange(e,r){if(e.right){let n="Character ranges cannot use more than one character",i=!1;e.left.value.length>1&&(i=!0,r("error",n,{node:e.left,property:"value"})),e.right.value.length>1&&(i=!0,r("error",n,{node:e.right,property:"value"})),i||r("hint","Consider using regex instead of character ranges",{node:e,code:$r.UseRegexTokens})}}checkGrammarForUnusedRules(e,r){let n=(0,Go.getAllReachableRules)(e,!0);for(let i of e.rules)dt.isTerminalRule(i)&&i.hidden||xc(i)||n.has(i)||r("hint","This rule is declared but never referenced.",{node:i,property:"name",tags:[e_.DiagnosticTag.Unnecessary]})}checkClashingTerminalNames(e,r){let n=new Uo.MultiMap,i=new Set;for(let d of e.rules)dt.isTerminalRule(d)&&d.name&&n.add(d.name,d),dt.isParserRule(d)&&(0,jo.streamAllContents)(d).filter(dt.isKeyword).forEach(m=>i.add(m.value));let o=new Uo.MultiMap,a=new Uo.MultiMap;for(let d of e.imports){let p=(0,rr.resolveTransitiveImports)(this.documents,d);for(let m of p)for(let y of m.rules)dt.isTerminalRule(y)&&y.name?o.add(y.name,d):dt.isParserRule(y)&&y.name&&(0,jo.streamAllContents)(y).filter(dt.isKeyword).forEach(_=>a.add(_.value,d))}for(let d of n.values())if(i.has(d.name))r("error","Terminal name clashes with existing keyword.",{node:d,property:"name"});else if(a.has(d.name)){let p=a.get(d.name);r("error",`Terminal name clashes with imported keyword from "${p[0].path}".`,{node:d,property:"name"})}let s=new Uo.MultiMap;for(let d of i)for(let p of o.get(d))s.add(p,d);for(let[d,p]of s.entriesGroupedByKey())p.length>0&&r("error",`Imported terminals (${p.join(", ")}) clash with locally defined keywords.`,{node:d,property:"path"});let u=new Uo.MultiMap;for(let[d,p]of o.entriesGroupedByKey()){let m=a.get(d);m.length>0&&p.filter(y=>!m.includes(y)).forEach(y=>u.add(y,d))}for(let[d,p]of u.entriesGroupedByKey())p.length>0&&r("error",`Imported terminals (${p.join(", ")}) clash with imported keywords.`,{node:d,property:"path"})}checkRuleName(e,r){if(e.name&&!xc(e)){let n=e.name.substring(0,1);n.toUpperCase()!==n&&r("warning","Rule name should start with an upper case letter.",{node:e,property:"name",code:$r.RuleNameUppercase})}}checkTypeReservedName(e,r){this.checkReservedName(e,"name",r)}checkAssignmentReservedName(e,r){this.checkReservedName(e,"feature",r)}checkParserRuleReservedName(e,r){e.inferredType||this.checkReservedName(e,"name",r)}checkReservedName(e,r,n){let i=e[r];typeof i=="string"&&yV.has(i)&&n("error",`'${i}' is a reserved name of the JavaScript runtime.`,{node:e,property:r})}checkKeyword(e,r){(0,jo.getContainerOfType)(e,n_.isParserRule)&&(e.value.length===0?r("error","Keywords cannot be empty.",{node:e}):e.value.trim().length===0?r("error","Keywords cannot only consist of whitespace characters.",{node:e}):/\s/g.test(e.value)&&r("warning","Keywords should not contain whitespace characters.",{node:e}))}checkUnorderedGroup(e,r){e.elements.forEach(n=>{(0,rr.isOptionalCardinality)(n.cardinality)&&r("error","Optional elements in Unordered groups are currently not supported",{node:n,code:$r.OptionalUnorderedGroup})})}checkRuleParametersUsed(e,r){let n=e.parameters;if(n.length>0){let i=(0,jo.streamAllContents)(e).filter(dt.isParameterReference);for(let o of n)i.some(a=>a.parameter.ref===o)||r("hint",`Parameter '${o.name}' is unused.`,{node:o,tags:[e_.DiagnosticTag.Unnecessary]})}}checkParserRuleDataType(e,r){if(xc(e))return;let n=e.dataType,i=(0,rr.isDataTypeRule)(e);!n&&i?r("error","This parser rule does not create an object. Add a primitive return type or an action to the start of the rule to force object instantiation.",{node:e,property:"name"}):n&&!i&&r("error","Normal parser rules are not allowed to return a primitive value. Use a datatype rule for that.",{node:e,property:"dataType"})}checkAssignmentToFragmentRule(e,r){e.terminal&&(0,n_.isRuleCall)(e.terminal)&&(0,n_.isParserRule)(e.terminal.rule.ref)&&e.terminal.rule.ref.fragment&&r("error",`Cannot use fragment rule '${e.terminal.rule.ref.name}' for assignment of property '${e.feature}'.`,{node:e,property:"terminal"})}checkAssignmentTypes(e,r){if(!e.terminal)return;let n;(0,jo.streamAllContents)(e.terminal).map(o=>dt.isCrossReference(o)?"ref":"other").find(o=>n?o!==n:(n=o,!1))&&r("error",this.createMixedTypeError(e.feature),{node:e,property:"terminal"})}checkInterfacePropertyTypes(e,r){e.attributes.filter(n=>n.typeAlternatives.length>1).forEach(n=>{let i=a=>a.isRef?"ref":"other",o=i(n.typeAlternatives[0]);n.typeAlternatives.slice(1).some(a=>i(a)!==o)&&r("error",this.createMixedTypeError(n.name),{node:n,property:"typeAlternatives"})})}createMixedTypeError(e){return`Mixing a cross-reference with other types is not supported. Consider splitting property "${e}" into two or more different properties.`}checkTerminalRuleReturnType(e,r){var n;!((n=e.type)===null||n===void 0)&&n.name&&!(0,rr.isPrimitiveType)(e.type.name)&&r("error","Terminal rules can only return primitive types like 'string', 'boolean', 'number', 'Date' or 'bigint'.",{node:e.type,property:"name"})}checkRuleCallParameters(e,r){let n=e.rule.ref;if(dt.isParserRule(n)){let i=n.parameters.length,o=e.arguments.length;i!==o&&r("error",`Rule '${n.name}' expects ${i} arguments, but got ${o}.`,{node:e})}else dt.isTerminalRule(n)&&e.arguments.length>0&&r("error","Terminal rules do not accept any arguments",{node:e})}checkCrossRefNameAssignment(e,r){!e.terminal&&e.type.ref&&!(0,Go.findNameAssignment)(e.type.ref)&&r("error","Cannot infer terminal or data type rule for cross reference.",{node:e,property:"type"})}checkCrossRefTerminalType(e,r){dt.isRuleCall(e.terminal)&&dt.isParserRule(e.terminal.rule.ref)&&!(0,rr.isDataTypeRule)(e.terminal.rule.ref)&&r("error","Parser rules cannot be used for cross references.",{node:e.terminal,property:"rule"})}checkCrossRefType(e,r){let n=this.checkReferenceToRuleButNotType(e?.type);n&&r("error",n,{node:e,property:"type"})}checkAtomTypeRefType(e,r){if(e?.refType){let n=this.checkReferenceToRuleButNotType(e?.refType);n&&r("error",n,{node:e,property:"refType"})}}checkFragmentsInTypes(e,r){var n,i;dt.isParserRule((n=e.refType)===null||n===void 0?void 0:n.ref)&&(!((i=e.refType)===null||i===void 0)&&i.ref.fragment)&&r("error","Cannot use rule fragments in types.",{node:e,property:"refType"})}checkReferenceToRuleButNotType(e){if(e&&dt.isParserRule(e.ref)&&!(0,rr.isDataTypeRule)(e.ref)&&(e.ref.returnType||e.ref.inferredType)){let r=(0,rr.getTypeNameWithoutError)(e.ref);if(r)return`Use the rule type '${r}' instead of the typed rule name '${e.ref.name}' for cross references.`}}checkAssignmentWithFeatureName(e,r){e.feature==="name"&&dt.isCrossReference(e.terminal)&&r("warning",'The "name" property is not recommended for cross-references.',{node:e,property:"feature"})}};Fr.LangiumGrammarValidator=i_;function xc(t){return!t.definition||!t.definition.$cstNode||t.definition.$cstNode.length===0}var yV=new Set(["Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array","BigInt64Array","BigUint64Array","Map","Set","WeakMap","WeakSet","Error","AggregateError","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError","BigInt","RegExp","Number","Object","Function","Symbol","String","Math","NaN","Infinity","isFinite","isNaN","Buffer","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","globalThis","decodeURIComponent","decodeURI","encodeURIComponent","encodeURI","parseInt","parseFloat","Promise","Generator","GeneratorFunction","AsyncFunction","AsyncGenerator","AsyncGeneratorFunction","Reflect","Proxy","Date","Intl","eval","undefined"])});var Rf=h(Yn=>{"use strict";Object.defineProperty(Yn,"__esModule",{value:!0});Yn.DocumentValidator=Yn.toDiagnosticSeverity=Yn.getDiagnosticRange=Yn.DefaultDocumentValidator=void 0;var An=et(),rS=Yt(),vV=Ye(),_V=pt(),_f=Cn(),a_=class{constructor(e){this.validationRegistry=e.validation.ValidationRegistry,this.metadata=e.LanguageMetaData}async validateDocument(e,r=An.CancellationToken.None){let n=e.parseResult,i=[];await(0,_f.interruptAndCheck)(r);for(let o of n.lexerErrors){let a={severity:An.DiagnosticSeverity.Error,range:{start:{line:o.line-1,character:o.column-1},end:{line:o.line-1,character:o.column+o.length-1}},message:o.message,code:Tf.LexingError,source:this.getSource()};i.push(a)}for(let o of n.parserErrors){let a;if(isNaN(o.token.startOffset)){if("previousToken"in o){let s=o.previousToken;if(isNaN(s.startOffset))a=An.Range.create(0,0,0,0);else{let u=An.Position.create(s.endLine-1,s.endColumn);a=An.Range.create(u,u)}}}else a=(0,_V.tokenToRange)(o.token);if(a){let s={severity:An.DiagnosticSeverity.Error,range:a,message:o.message,code:Tf.ParsingError,source:this.getSource()};i.push(s)}}for(let o of e.references){let a=o.error;if(a){let s={containerType:a.container.$type,property:a.property,refText:a.reference.$refText},u={node:a.container,property:a.property,index:a.index,code:Tf.LinkingError,data:s};i.push(this.toDiagnostic("error",a.message,u))}}try{i.push(...await this.validateAst(n.value,e,r))}catch(o){if((0,_f.isOperationCancelled)(o))throw o;console.error("An error occurred during validation:",o)}return await(0,_f.interruptAndCheck)(r),i}async validateAst(e,r,n=An.CancellationToken.None){let i=[],o=(a,s,u)=>{i.push(this.toDiagnostic(a,s,u))};return await Promise.all((0,vV.streamAst)(e).map(async a=>{await(0,_f.interruptAndCheck)(n);let s=this.validationRegistry.getChecks(a.$type);for(let u of s)await u(a,o,n)})),i}toDiagnostic(e,r,n){return{message:r,range:nS(n),severity:iS(e),code:n.code,codeDescription:n.codeDescription,tags:n.tags,relatedInformation:n.relatedInformation,data:n.data,source:this.getSource()}}getSource(){return this.metadata.languageId}};Yn.DefaultDocumentValidator=a_;function nS(t){if(An.Range.is(t.range))return t.range;let e;return typeof t.property=="string"?e=(0,rS.findNodeForProperty)(t.node.$cstNode,t.property,t.index):typeof t.keyword=="string"&&(e=(0,rS.findNodeForKeyword)(t.node.$cstNode,t.keyword,t.index)),e??(e=t.node.$cstNode),e?e.range:{start:{line:0,character:0},end:{line:0,character:0}}}Yn.getDiagnosticRange=nS;function iS(t){switch(t){case"error":return An.DiagnosticSeverity.Error;case"warning":return An.DiagnosticSeverity.Warning;case"info":return An.DiagnosticSeverity.Information;case"hint":return An.DiagnosticSeverity.Hint;default:throw new Error("Invalid diagnostic severity: "+t)}}Yn.toDiagnosticSeverity=iS;var Tf;(function(t){t.LexingError="lexing-error",t.ParsingError="parsing-error",t.LinkingError="linking-error"})(Tf=Yn.DocumentValidator||(Yn.DocumentValidator={}))});var cS=h(Ci=>{"use strict";var TV=Ci&&Ci.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var i=Object.getOwnPropertyDescriptor(e,r);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,i)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),RV=Ci&&Ci.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),bV=Ci&&Ci.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var r in t)r!=="default"&&Object.prototype.hasOwnProperty.call(t,r)&&TV(e,t,r);return RV(e,t),e};Object.defineProperty(Ci,"__esModule",{value:!0});Ci.LangiumGrammarCodeActionProvider=void 0;var Sn=et(),CV=to(),oS=Ye(),aS=pt(),PV=Yt(),sS=Rs(),uS=lo(),AV=Rf(),s_=bV(Ke()),En=o_(),u_=class{constructor(e){this.reflection=e.shared.AstReflection,this.indexManager=e.shared.workspace.IndexManager}getCodeActions(e,r){let n=[],i=o=>o&&n.push(o);for(let o of r.context.diagnostics)this.createCodeActions(o,e,i);return n}createCodeActions(e,r,n){switch(e.code){case En.IssueCodes.GrammarNameUppercase:case En.IssueCodes.RuleNameUppercase:n(this.makeUpperCase(e,r));break;case En.IssueCodes.HiddenGrammarTokens:n(this.fixHiddenTerminals(e,r));break;case En.IssueCodes.UseRegexTokens:n(this.fixRegexTokens(e,r));break;case En.IssueCodes.EntryRuleTokenSyntax:n(this.addEntryKeyword(e,r));break;case En.IssueCodes.CrossRefTokenSyntax:n(this.fixCrossRefSyntax(e,r));break;case En.IssueCodes.UnnecessaryFileExtension:n(this.fixUnnecessaryFileExtension(e,r));break;case En.IssueCodes.MissingReturns:n(this.fixMissingReturns(e,r));break;case En.IssueCodes.InvalidInfers:case En.IssueCodes.InvalidReturns:n(this.fixInvalidReturnsInfers(e,r));break;case En.IssueCodes.MissingInfer:n(this.fixMissingInfer(e,r));break;case En.IssueCodes.SuperfluousInfer:n(this.fixSuperfluousInfer(e,r));break;case AV.DocumentValidator.LinkingError:{let i=e.data;i&&i.containerType==="RuleCall"&&i.property==="rule"&&n(this.addNewRule(e,i,r)),i&&this.lookInGlobalScope(e,i,r).forEach(n);break}}}fixMissingReturns(e,r){let n=r.textDocument.getText(e.range);if(n)return{title:`Add explicit return type for parser rule ${n}`,kind:Sn.CodeActionKind.QuickFix,diagnostics:[e],edit:{changes:{[r.textDocument.uri]:[{range:e.range,newText:`${n} returns ${n}`}]}}}}fixInvalidReturnsInfers(e,r){let n=e.data;if(n){let i=r.textDocument.getText(n.range);return{title:`Correct ${i} usage`,kind:Sn.CodeActionKind.QuickFix,diagnostics:[e],edit:{changes:{[r.textDocument.uri]:[{range:n.range,newText:i==="infers"?"returns":"infers"}]}}}}}fixMissingInfer(e,r){let n=e.data;if(n)return{title:"Correct 'infer' usage",kind:Sn.CodeActionKind.QuickFix,diagnostics:[e],edit:{changes:{[r.textDocument.uri]:[{range:{start:n.range.end,end:n.range.end},newText:"infer "}]}}}}fixSuperfluousInfer(e,r){if(e.data)return{title:"Remove the 'infer' keyword",kind:Sn.CodeActionKind.QuickFix,diagnostics:[e],edit:{changes:{[r.textDocument.uri]:[{range:e.data,newText:""}]}}}}fixUnnecessaryFileExtension(e,r){let n=Object.assign({},e.range.end);n.character-=1;let i=Object.assign({},n);return i.character-=8,{title:"Remove file extension",kind:Sn.CodeActionKind.QuickFix,diagnostics:[e],isPreferred:!0,edit:{changes:{[r.textDocument.uri]:[{range:{start:i,end:n},newText:""}]}}}}makeUpperCase(e,r){let n={start:e.range.start,end:{line:e.range.start.line,character:e.range.start.character+1}};return{title:"First letter to upper case",kind:Sn.CodeActionKind.QuickFix,diagnostics:[e],isPreferred:!0,edit:{changes:{[r.textDocument.uri]:[{range:n,newText:r.textDocument.getText(n).toUpperCase()}]}}}}addEntryKeyword(e,r){return{title:"Add entry keyword",kind:Sn.CodeActionKind.QuickFix,diagnostics:[e],isPreferred:!0,edit:{changes:{[r.textDocument.uri]:[{range:{start:e.range.start,end:e.range.start},newText:"entry "}]}}}}fixRegexTokens(e,r){let n=r.textDocument.offsetAt(e.range.start),i=r.parseResult.value.$cstNode;if(i){let o=(0,aS.findLeafNodeAtOffset)(i,n),a=(0,oS.getContainerOfType)(o?.element,s_.isCharacterRange);if(a&&a.right&&a.$cstNode){let s=a.left.value,u=a.right.value;return{title:"Refactor into regular expression",kind:Sn.CodeActionKind.QuickFix,diagnostics:[e],isPreferred:!0,edit:{changes:{[r.textDocument.uri]:[{range:a.$cstNode.range,newText:`/[${(0,sS.escapeRegExp)(s)}-${(0,sS.escapeRegExp)(u)}]/`}]}}}}}}fixCrossRefSyntax(e,r){return{title:"Replace '|' with ':'",kind:Sn.CodeActionKind.QuickFix,diagnostics:[e],isPreferred:!0,edit:{changes:{[r.textDocument.uri]:[{range:e.range,newText:":"}]}}}}fixHiddenTerminals(e,r){let n=r.parseResult.value,i=n.hiddenTokens,o=[],a=(0,PV.findNodeForProperty)(n.$cstNode,"definesHiddenTokens");if(a){let s=a.range.start,u=a.offset,d=n.$cstNode.text.indexOf(")",u)+1;o.push({newText:"",range:{start:s,end:r.textDocument.positionAt(d)}})}for(let s of i){let u=s.ref;if(u&&s_.isTerminalRule(u)&&!u.hidden&&u.$cstNode){let d=u.$cstNode.range.start;o.push({newText:"hidden ",range:{start:d,end:d}})}}return{title:"Fix hidden terminals",kind:Sn.CodeActionKind.QuickFix,diagnostics:[e],isPreferred:!0,edit:{changes:{[r.textDocument.uri]:o}}}}addNewRule(e,r,n){let i=n.textDocument.offsetAt(e.range.start),o=n.parseResult.value.$cstNode;if(o){let a=(0,aS.findLeafNodeAtOffset)(o,i),s=(0,oS.getContainerOfType)(a?.element,s_.isParserRule);if(s&&s.$cstNode)return{title:`Add new rule '${r.refText}'`,kind:Sn.CodeActionKind.QuickFix,diagnostics:[e],isPreferred:!1,edit:{changes:{[n.textDocument.uri]:[{range:{start:s.$cstNode.range.end,end:s.$cstNode.range.end},newText:`

`+r.refText+`:
    /* TODO implement rule */ {infer `+r.refText+"};"}]}}}}}lookInGlobalScope(e,r,n){var i,o;let a={container:{$type:r.containerType},property:r.property,reference:{$refText:r.refText}},s=this.reflection.getReferenceType(a),u=this.indexManager.allElements(s).filter(y=>y.name===r.refText),d=[],p=-1,m=-1;for(let y of u){if((0,uS.equalURI)(y.documentUri,n.uri))continue;let S=SV(n.uri,y.documentUri),_,w="",k=n.parseResult.value,N=k.imports.find(C=>C.path&&S<C.path);if(N)_=(i=N.$cstNode)===null||i===void 0?void 0:i.range.start;else if(k.imports.length>0){let C=k.imports[k.imports.length-1].$cstNode.range.end;C&&(_={line:C.line+1,character:0})}else k.rules.length>0&&(_=(o=k.rules[0].$cstNode)===null||o===void 0?void 0:o.range.start,w=`
`);_&&((p<0||S.length<m)&&(p=d.length,m=S.length),d.push({title:`Add import to '${S}'`,kind:Sn.CodeActionKind.QuickFix,diagnostics:[e],isPreferred:!1,edit:{changes:{[n.textDocument.uri]:[{range:{start:_,end:_},newText:`import '${S}'
${w}`}]}}}))}return p>=0&&(d[p].isPreferred=!0),d}};Ci.LangiumGrammarCodeActionProvider=u_;function SV(t,e){let r=CV.Utils.dirname(t),n=(0,uS.relativeURI)(r,e);return!n.startsWith("./")&&!n.startsWith("../")&&(n="./"+n),n.endsWith(".langium")&&(n=n.substring(0,n.length-8)),n}});var Cf=h(bf=>{"use strict";Object.defineProperty(bf,"__esModule",{value:!0});bf.DefaultFoldingRangeProvider=void 0;var c_=et(),EV=Ye(),kV=pt(),l_=class{constructor(e){this.commentNames=e.parser.GrammarConfig.multilineCommentRules}getFoldingRanges(e){let r=[],n=i=>r.push(i);return this.collectFolding(e,n),r}collectFolding(e,r){var n;let i=(n=e.parseResult)===null||n===void 0?void 0:n.value;if(i){if(this.shouldProcessContent(i)){let o=(0,EV.streamAllContents)(i).iterator(),a;do if(a=o.next(),!a.done){let s=a.value;this.shouldProcess(s)&&this.collectObjectFolding(e,s,r),this.shouldProcessContent(s)||o.prune()}while(!a.done)}this.collectCommentFolding(e,i,r)}}shouldProcess(e){return!0}shouldProcessContent(e){return!0}collectObjectFolding(e,r,n){let i=r.$cstNode;if(i){let o=this.toFoldingRange(e,i);o&&n(o)}}collectCommentFolding(e,r,n){let i=r.$cstNode;if(i){for(let o of(0,kV.flattenCst)(i))if(this.commentNames.includes(o.tokenType.name)){let a=this.toFoldingRange(e,o,c_.FoldingRangeKind.Comment);a&&n(a)}}}toFoldingRange(e,r,n){let i=r.range,o=i.start,a=i.end;if(!(a.line-o.line<2))return this.includeLastFoldingLine(r,n)||(a=e.textDocument.positionAt(e.textDocument.offsetAt({line:a.line,character:0})-1)),c_.FoldingRange.create(o.line,a.line,o.character,a.character,n)}includeLastFoldingLine(e,r){if(r===c_.FoldingRangeKind.Comment)return!1;let n=e.text,i=n.charAt(n.length-1);return!(i==="}"||i===")"||i==="]")}};bf.DefaultFoldingRangeProvider=l_});var lS=h(Pf=>{"use strict";Object.defineProperty(Pf,"__esModule",{value:!0});Pf.LangiumGrammarFoldingRangeProvider=void 0;var NV=Cf(),wV=Ke(),d_=class extends NV.DefaultFoldingRangeProvider{shouldProcessContent(e){return!(0,wV.isParserRule)(e)}};Pf.LangiumGrammarFoldingRangeProvider=d_});var h_=h(Xn=>{"use strict";Object.defineProperty(Xn,"__esModule",{value:!0});Xn.Formatting=Xn.FormattingRegion=Xn.DefaultNodeFormatter=Xn.AbstractFormatter=void 0;var Af=Yt(),f_=Xr(),DV=Ye(),dS=pt(),Lc=tr(),p_=class{constructor(){this.collector=()=>{}}getNodeFormatter(e){return new Sf(e,this.collector)}formatDocument(e,r){return this.doDocumentFormat(e,r.options)}formatDocumentRange(e,r){return this.doDocumentFormat(e,r.options,r.range)}formatDocumentOnType(e,r){return this.doDocumentFormat(e,r.options,{start:{character:0,line:r.position.line},end:r.position})}get formatOnTypeOptions(){}doDocumentFormat(e,r,n){let i=new Map,o=(s,u,d)=>{var p,m;let y=this.nodeModeToKey(s,u),S=i.get(y),_=(p=d.options.priority)!==null&&p!==void 0?p:0,w=(m=S?.options.priority)!==null&&m!==void 0?m:0;(!S||w<=_)&&i.set(y,d)};this.collector=o,this.iterateAstFormatting(e,n);let a=this.iterateCstFormatting(e,i,r,n);return this.avoidOverlappingEdits(e.textDocument,a)}avoidOverlappingEdits(e,r){let n=[];for(let i of r){let o=n[n.length-1];if(o){let a=e.offsetAt(i.range.start),s=e.offsetAt(o.range.end);a<s&&n.pop()}n.push(i)}return n}iterateAstFormatting(e,r){let n=e.parseResult.value;this.format(n);let i=(0,DV.streamAllContents)(n).iterator(),o;do if(o=i.next(),!o.done){let a=o.value;this.insideRange(a.$cstNode.range,r)?this.format(a):i.prune()}while(!o.done)}nodeModeToKey(e,r){return`${e.offset}:${e.end}:${r}`}insideRange(e,r){return!r||e.start.line<=r.start.line&&e.end.line>=r.end.line||e.start.line>=r.start.line&&e.end.line<=r.end.line||e.start.line<=r.end.line&&e.end.line>=r.end.line}isNecessary(e,r){return r.getText(e.range)!==e.newText}iterateCstFormatting(e,r,n,i){let o={indentation:0,options:n,document:e.textDocument},a=[],u=this.iterateCstTree(e,o).iterator(),d,p;do if(p=u.next(),!p.done){let m=p.value,y=(0,f_.isLeafCstNode)(m),S=this.nodeModeToKey(m,"prepend"),_=r.get(S);if(r.delete(S),_){let N=this.createTextEdit(d,m,_,o);for(let C of N)C&&this.insideRange(C.range,i)&&this.isNecessary(C,e.textDocument)&&a.push(C)}let w=this.nodeModeToKey(m,"append"),k=r.get(w);if(r.delete(w),k){let N=(0,dS.getNextNode)(m);if(N){let C=this.createTextEdit(m,N,k,o);for(let E of C)E&&this.insideRange(E.range,i)&&this.isNecessary(E,e.textDocument)&&a.push(E)}}if(!_&&m.hidden){let N=this.createHiddenTextEdits(d,m,void 0,o);for(let C of N)C&&this.insideRange(C.range,i)&&this.isNecessary(C,e.textDocument)&&a.push(C)}y&&(d=m)}while(!p.done);return a}createHiddenTextEdits(e,r,n,i){var o;let a=r.range.start.line;if(e&&e.range.end.line===a)return[];let s=[],u={start:{character:0,line:a},end:r.range.start},d=i.document.getText(u),p=this.findFittingMove(u,(o=n?.moves)!==null&&o!==void 0?o:[],i),m=this.getExistingIndentationCharacterCount(d,i),S=this.getIndentationCharacterCount(i,p)-m;if(S===0)return[];let _="";S>0&&(_=(i.options.insertSpaces?" ":"	").repeat(S));let w=r.text.split(`
`);w[0]=d+w[0];for(let k=0;k<w.length;k++){let N=a+k,C={character:0,line:N};if(S>0)s.push({newText:_,range:{start:C,end:C}});else{let E=w[k],L=0;for(;L<E.length;L++){let U=E.charAt(L);if(U!==" "&&U!=="	")break}s.push({newText:"",range:{start:C,end:{line:N,character:Math.min(L,Math.abs(S))}}})}}return s}getExistingIndentationCharacterCount(e,r){let n=" ".repeat(r.options.tabSize);return(r.options.insertSpaces?e.replaceAll("	",n):e.replaceAll(n,"	")).length}getIndentationCharacterCount(e,r){let n=e.indentation;return r&&r.tabs&&(n+=r.tabs),(e.options.insertSpaces?e.options.tabSize:1)*n}createTextEdit(e,r,n,i){var o;if(r.hidden)return this.createHiddenTextEdits(e,r,n,i);let a={start:(o=e?.range.end)!==null&&o!==void 0?o:{character:0,line:0},end:r.range.start},s=this.findFittingMove(a,n.moves,i);if(!s)return[];let u=s.characters,d=s.lines,p=s.tabs,m=i.indentation;i.indentation+=p??0;let y=[];return u!==void 0?y.push(this.createSpaceTextEdit(a,u,n.options)):d!==void 0?y.push(this.createLineTextEdit(a,d,i,n.options)):p!==void 0&&y.push(this.createTabTextEdit(a,!!e,i)),(0,f_.isLeafCstNode)(r)&&(i.indentation=m),y}createSpaceTextEdit(e,r,n){if(e.start.line===e.end.line){let o=e.end.character-e.start.character;r=this.fitIntoOptions(r,o,n)}return{newText:" ".repeat(r),range:e}}createLineTextEdit(e,r,n,i){let o=e.end.line-e.start.line;r=this.fitIntoOptions(r,o,i);let s=(n.options.insertSpaces?" ".repeat(n.options.tabSize):"	").repeat(n.indentation);return{newText:`${`
`.repeat(r)}${s}`,range:e}}createTabTextEdit(e,r,n){let o=(n.options.insertSpaces?" ".repeat(n.options.tabSize):"	").repeat(n.indentation),a=r?1:0,s=Math.max(e.end.line-e.start.line,a);return{newText:`${`
`.repeat(s)}${o}`,range:e}}fitIntoOptions(e,r,n){return n.allowMore?e=Math.max(r,e):n.allowLess&&(e=Math.min(r,e)),e}findFittingMove(e,r,n){if(r.length===0)return;if(r.length===1)return r[0];let i=e.end.line-e.start.line;for(let o of r){if(o.lines!==void 0&&i<=o.lines)return o;if(o.lines===void 0&&i===0)return o}return r[r.length-1]}iterateCstTree(e,r){let i=e.parseResult.value.$cstNode;return i?new Lc.TreeStreamImpl(i,o=>this.iterateCst(o,r)):Lc.EMPTY_STREAM}iterateCst(e,r){if(!(0,f_.isCompositeCstNode)(e))return Lc.EMPTY_STREAM;let n=r.indentation;return new Lc.StreamImpl(()=>({index:0}),i=>i.index<e.children.length?{done:!1,value:e.children[i.index++]}:(r.indentation=n,Lc.DONE_RESULT))}};Xn.AbstractFormatter=p_;var Sf=class{constructor(e,r){this.astNode=e,this.collector=r}node(e){return new kn(e.$cstNode?[e.$cstNode]:[],this.collector)}nodes(...e){let r=[];for(let n of e)n.$cstNode&&r.push(n.$cstNode);return new kn(r,this.collector)}property(e,r){let n=(0,Af.findNodeForProperty)(this.astNode.$cstNode,e,r);return new kn(n?[n]:[],this.collector)}properties(...e){let r=[];for(let n of e){let i=(0,Af.findNodesForProperty)(this.astNode.$cstNode,n);r.push(...i)}return new kn(r,this.collector)}keyword(e,r){let n=(0,Af.findNodeForKeyword)(this.astNode.$cstNode,e,r);return new kn(n?[n]:[],this.collector)}keywords(...e){let r=[];for(let n of e){let i=(0,Af.findNodesForKeyword)(this.astNode.$cstNode,n);r.push(...i)}return new kn(r,this.collector)}cst(e){return new kn([...e],this.collector)}interior(e,r){let n=e.nodes,i=r.nodes;if(n.length!==1||i.length!==1)return new kn([],this.collector);let o=n[0],a=i[0];if(o.offset>a.offset){let s=o;o=a,a=s}return new kn((0,dS.getInteriorNodes)(o,a),this.collector)}};Xn.DefaultNodeFormatter=Sf;var kn=class t{constructor(e,r){this.nodes=e,this.collector=r}prepend(e){for(let r of this.nodes)this.collector(r,"prepend",e);return this}append(e){for(let r of this.nodes)this.collector(r,"append",e);return this}surround(e){for(let r of this.nodes)this.collector(r,"prepend",e),this.collector(r,"append",e);return this}slice(e,r){return new t(this.nodes.slice(e,r),this.collector)}};Xn.FormattingRegion=kn;var OV;(function(t){function e(...p){return{options:{},moves:p.flatMap(m=>m.moves).sort(d)}}t.fit=e;function r(p){return i(0,p)}t.noSpace=r;function n(p){return i(1,p)}t.oneSpace=n;function i(p,m){return{options:m??{},moves:[{characters:p}]}}t.spaces=i;function o(p){return a(1,p)}t.newLine=o;function a(p,m){return{options:m??{},moves:[{lines:p}]}}t.newLines=a;function s(p){return{options:p??{},moves:[{tabs:1,lines:1}]}}t.indent=s;function u(p){return{options:p??{},moves:[{tabs:0}]}}t.noIndent=u;function d(p,m){var y,S,_,w,k,N;let C=(y=p.lines)!==null&&y!==void 0?y:0,E=(S=m.lines)!==null&&S!==void 0?S:0,L=(_=p.tabs)!==null&&_!==void 0?_:0,U=(w=m.tabs)!==null&&w!==void 0?w:0,z=(k=p.characters)!==null&&k!==void 0?k:0,te=(N=m.characters)!==null&&N!==void 0?N:0;return C<E?-1:C>E?1:L<U?-1:L>U?1:z<te?-1:z>te?1:0}})(OV=Xn.Formatting||(Xn.Formatting={}))});var fS=h(Pi=>{"use strict";var qV=Pi&&Pi.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var i=Object.getOwnPropertyDescriptor(e,r);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,i)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),IV=Pi&&Pi.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),xV=Pi&&Pi.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var r in t)r!=="default"&&Object.prototype.hasOwnProperty.call(t,r)&&qV(e,t,r);return IV(e,t),e};Object.defineProperty(Pi,"__esModule",{value:!0});Pi.LangiumGrammarFormatter=void 0;var Ge=h_(),Wo=xV(Ke()),m_=class extends Ge.AbstractFormatter{format(e){if(Wo.isCrossReference(e))this.getNodeFormatter(e).properties("type","terminal").surround(Ge.Formatting.noSpace());else if(Wo.isParserRule(e)){let r=this.getNodeFormatter(e);r.keywords("entry","fragment","returns").append(Ge.Formatting.oneSpace()),(e.inferredType||e.returnType||e.dataType)&&e.parameters.length===0?r.property("name").append(Ge.Formatting.oneSpace()):r.property("name").append(Ge.Formatting.noSpace()),r.properties("parameters").append(Ge.Formatting.noSpace()),r.keywords(",").append(Ge.Formatting.oneSpace()),r.keywords("<").append(Ge.Formatting.noSpace());let n=r.keyword(";"),i=r.keyword(":");i.prepend(Ge.Formatting.noSpace()),r.interior(i,n).prepend(Ge.Formatting.indent()),n.prepend(Ge.Formatting.fit(Ge.Formatting.noSpace(),Ge.Formatting.newLine())),r.node(e).prepend(Ge.Formatting.noIndent())}else if(Wo.isTerminalRule(e)){let r=this.getNodeFormatter(e);e.type&&(r.property("name").append(Ge.Formatting.oneSpace()),r.keyword("returns").append(Ge.Formatting.oneSpace())),r.keywords("hidden","terminal","fragment").append(Ge.Formatting.oneSpace()),r.keyword(":").prepend(Ge.Formatting.noSpace()),r.keyword(";").prepend(Ge.Formatting.fit(Ge.Formatting.noSpace(),Ge.Formatting.newLine())),r.node(e).prepend(Ge.Formatting.noIndent())}else if(Wo.isAction(e)){let r=this.getNodeFormatter(e);r.keyword("{").append(Ge.Formatting.noSpace()),r.keywords(".","+=","=").surround(Ge.Formatting.noSpace()),r.keyword("}").prepend(Ge.Formatting.noSpace())}else if(Wo.isInferredType(e))this.getNodeFormatter(e).keywords("infer","infers").append(Ge.Formatting.oneSpace());else if(Wo.isAssignment(e))this.getNodeFormatter(e).keywords("=","+=","?=").surround(Ge.Formatting.noSpace());else if(Wo.isRuleCall(e)){let r=this.getNodeFormatter(e);r.keyword("<").surround(Ge.Formatting.noSpace()),r.keyword(",").append(Ge.Formatting.oneSpace()),r.properties("arguments").append(Ge.Formatting.noSpace())}Wo.isAbstractElement(e)&&this.getNodeFormatter(e).property("cardinality").prepend(Ge.Formatting.noSpace())}};Pi.LangiumGrammarFormatter=m_});var Nf=h(jt=>{"use strict";Object.defineProperty(jt,"__esModule",{value:!0});jt.SemanticTokensDecoder=jt.AbstractSemanticTokenProvider=jt.SemanticTokensBuilder=jt.DefaultSemanticTokenOptions=jt.AllSemanticTokenModifiers=jt.AllSemanticTokenTypes=void 0;var De=et(),Ef=Yt(),LV=Ye();jt.AllSemanticTokenTypes={[De.SemanticTokenTypes.class]:0,[De.SemanticTokenTypes.comment]:1,[De.SemanticTokenTypes.enum]:2,[De.SemanticTokenTypes.enumMember]:3,[De.SemanticTokenTypes.event]:4,[De.SemanticTokenTypes.function]:5,[De.SemanticTokenTypes.interface]:6,[De.SemanticTokenTypes.keyword]:7,[De.SemanticTokenTypes.macro]:8,[De.SemanticTokenTypes.method]:9,[De.SemanticTokenTypes.modifier]:10,[De.SemanticTokenTypes.namespace]:11,[De.SemanticTokenTypes.number]:12,[De.SemanticTokenTypes.operator]:13,[De.SemanticTokenTypes.parameter]:14,[De.SemanticTokenTypes.property]:15,[De.SemanticTokenTypes.regexp]:16,[De.SemanticTokenTypes.string]:17,[De.SemanticTokenTypes.struct]:18,[De.SemanticTokenTypes.type]:19,[De.SemanticTokenTypes.typeParameter]:20,[De.SemanticTokenTypes.variable]:21};jt.AllSemanticTokenModifiers={[De.SemanticTokenModifiers.abstract]:1,[De.SemanticTokenModifiers.async]:2,[De.SemanticTokenModifiers.declaration]:4,[De.SemanticTokenModifiers.defaultLibrary]:8,[De.SemanticTokenModifiers.definition]:16,[De.SemanticTokenModifiers.deprecated]:32,[De.SemanticTokenModifiers.documentation]:64,[De.SemanticTokenModifiers.modification]:128,[De.SemanticTokenModifiers.readonly]:256,[De.SemanticTokenModifiers.static]:512};jt.DefaultSemanticTokenOptions={legend:{tokenTypes:Object.keys(jt.AllSemanticTokenTypes),tokenModifiers:Object.keys(jt.AllSemanticTokenModifiers)},full:{delta:!0},range:!0};var kf=class extends De.SemanticTokensBuilder{constructor(){super(...arguments),this._tokens=[]}push(e,r,n,i,o){this._tokens.push({line:e,char:r,length:n,tokenType:i,tokenModifiers:o})}build(){return this.applyTokens(),super.build()}buildEdits(){return this.applyTokens(),super.buildEdits()}applyTokens(){for(let e of this._tokens.sort(this.compareTokens))super.push(e.line,e.char,e.length,e.tokenType,e.tokenModifiers);this._tokens=[]}compareTokens(e,r){return e.line===r.line?e.char-r.char:e.line-r.line}};jt.SemanticTokensBuilder=kf;var g_=class{constructor(e){this.tokensBuilders=new Map,e.shared.workspace.TextDocuments.onDidClose(r=>{this.tokensBuilders.delete(r.document.uri)}),e.shared.lsp.LanguageServer.onInitialize(r=>{var n;this.initialize((n=r.capabilities.textDocument)===null||n===void 0?void 0:n.semanticTokens)})}initialize(e){this.clientCapabilities=e}semanticHighlight(e,r,n=De.CancellationToken.None){return this.currentRange=void 0,this.currentDocument=e,this.currentTokensBuilder=this.getDocumentTokensBuilder(e),this.computeHighlighting(e,this.createAcceptor(),n),this.currentTokensBuilder.build()}semanticHighlightRange(e,r,n=De.CancellationToken.None){return this.currentRange=r.range,this.currentDocument=e,this.currentTokensBuilder=this.getDocumentTokensBuilder(e),this.computeHighlighting(e,this.createAcceptor(),n),this.currentTokensBuilder.build()}semanticHighlightDelta(e,r,n=De.CancellationToken.None){return this.currentRange=void 0,this.currentDocument=e,this.currentTokensBuilder=this.getDocumentTokensBuilder(e),this.currentTokensBuilder.previousResult(r.previousResultId),this.computeHighlighting(e,this.createAcceptor(),n),this.currentTokensBuilder.buildEdits()}createAcceptor(){return r=>{"line"in r?this.highlightToken({range:{start:{line:r.line,character:r.char},end:{line:r.line,character:r.char+r.length}},type:r.type,modifier:r.modifier}):"range"in r?this.highlightToken(r):"keyword"in r?this.highlightKeyword(r):"property"in r?this.highlightProperty(r):this.highlightNode({node:r.cst,type:r.type,modifier:r.modifier})}}getDocumentTokensBuilder(e){let r=this.tokensBuilders.get(e.uri.toString());if(r)return r;let n=new kf;return this.tokensBuilders.set(e.uri.toString(),n),n}computeHighlighting(e,r,n){let i=e.parseResult.value;if(this.highlightElement(i,r)==="prune")return;let o=(0,LV.streamAllContents)(i).iterator(),a;do if(a=o.next(),!a.done){if(n.isCancellationRequested)break;let s=a.value,u=s.$cstNode.range,d=this.compareRange(u);if(d===1)break;if(d===-1)continue;this.highlightElement(s,r)==="prune"&&o.prune()}while(!a.done)}compareRange(e){if(!this.currentRange)return 0;let r=typeof e=="number"?e:e.start.line;return(typeof e=="number"?e:e.end.line)<this.currentRange.start.line?-1:r>this.currentRange.end.line?1:0}highlightToken(e){var r;let{range:n,type:i}=e,o=e.modifier;if(this.compareRange(n)!==0||!this.currentDocument||!this.currentTokensBuilder)return;let a=jt.AllSemanticTokenTypes[i],s=0;if(o!==void 0){typeof o=="string"&&(o=[o]);for(let p of o){let m=jt.AllSemanticTokenModifiers[p];s|=m}}let u=n.start.line,d=n.end.line;if(u===d){let p=n.start.character,m=n.end.character-p;this.currentTokensBuilder.push(u,p,m,a,s)}else if(!((r=this.clientCapabilities)===null||r===void 0)&&r.multilineTokenSupport){let p=n.start.character,m=this.currentDocument.textDocument.offsetAt(n.start),y=this.currentDocument.textDocument.offsetAt(n.end);this.currentTokensBuilder.push(u,p,y-m,a,s)}else{let p=n.start,m=this.currentDocument.textDocument.offsetAt({line:u+1,character:0});this.currentTokensBuilder.push(p.line,p.character,m-p.character-1,a,s);for(let y=u+1;y<d;y++){let S=m;m=this.currentDocument.textDocument.offsetAt({line:y+1,character:0}),this.currentTokensBuilder.push(y,0,m-S-1,a,s)}this.currentTokensBuilder.push(d,0,n.end.character,a,s)}}highlightProperty(e){let r=[];if(typeof e.index=="number"){let o=(0,Ef.findNodeForProperty)(e.node.$cstNode,e.property,e.index);o&&r.push(o)}else r.push(...(0,Ef.findNodesForProperty)(e.node.$cstNode,e.property));let{type:n,modifier:i}=e;for(let o of r)this.highlightNode({node:o,type:n,modifier:i})}highlightKeyword(e){let{node:r,keyword:n,type:i,index:o,modifier:a}=e,s=[];if(typeof o=="number"){let u=(0,Ef.findNodeForKeyword)(r.$cstNode,n,o);u&&s.push(u)}else s.push(...(0,Ef.findNodesForKeyword)(r.$cstNode,n));for(let u of s)this.highlightNode({node:u,type:i,modifier:a})}highlightNode(e){let{node:r,type:n,modifier:i}=e,o=r.range;this.highlightToken({range:o,type:n,modifier:i})}};jt.AbstractSemanticTokenProvider=g_;var MV;(function(t){function e(n,i){let o=new Map;Object.entries(jt.AllSemanticTokenTypes).forEach(([u,d])=>o.set(d,u));let a=0,s=0;return r(n.data,5).map(u=>{a+=u[0],u[0]!==0&&(s=0),s+=u[1];let d=u[2];return{offset:i.textDocument.offsetAt({line:a,character:s}),tokenType:o.get(u[3]),tokenModifiers:u[4],text:i.textDocument.getText({start:{line:a,character:s},end:{line:a,character:s+d}})}})}t.decode=e;function r(n,i){let o=[];for(let a=0;a<n.length;a+=i){let s=n.slice(a,a+i);o.push(s)}return o}})(MV=jt.SemanticTokensDecoder||(jt.SemanticTokensDecoder={}))});var pS=h(wf=>{"use strict";Object.defineProperty(wf,"__esModule",{value:!0});wf.LangiumGrammarSemanticTokenProvider=void 0;var Ho=et(),$V=Nf(),Ko=Ke(),y_=class extends $V.AbstractSemanticTokenProvider{highlightElement(e,r){var n;(0,Ko.isAssignment)(e)?r({node:e,property:"feature",type:Ho.SemanticTokenTypes.property}):(0,Ko.isAction)(e)?e.feature&&r({node:e,property:"feature",type:Ho.SemanticTokenTypes.property}):(0,Ko.isReturnType)(e)?r({node:e,property:"name",type:Ho.SemanticTokenTypes.type}):(0,Ko.isAtomType)(e)?(e.primitiveType||e.refType)&&r({node:e,property:e.primitiveType?"primitiveType":"refType",type:Ho.SemanticTokenTypes.type}):(0,Ko.isParameter)(e)?r({node:e,property:"name",type:Ho.SemanticTokenTypes.parameter}):(0,Ko.isParameterReference)(e)?r({node:e,property:"parameter",type:Ho.SemanticTokenTypes.parameter}):(0,Ko.isRuleCall)(e)?!((n=e.rule.ref)===null||n===void 0)&&n.fragment&&r({node:e,property:"rule",type:Ho.SemanticTokenTypes.type}):(0,Ko.isTypeAttribute)(e)&&r({node:e,property:"name",type:Ho.SemanticTokenTypes.property})}};wf.LangiumGrammarSemanticTokenProvider=y_});var mS=h(Df=>{"use strict";Object.defineProperty(Df,"__esModule",{value:!0});Df.LangiumGrammarNameProvider=void 0;var FV=Ts(),jV=Yt(),hS=Ke(),v_=class extends FV.DefaultNameProvider{getName(e){return(0,hS.isAssignment)(e)?e.feature:super.getName(e)}getNameNode(e){return(0,hS.isAssignment)(e)?(0,jV.findNodeForProperty)(e.$cstNode,"feature"):super.getNameNode(e)}};Df.LangiumGrammarNameProvider=v_});var R_=h(Of=>{"use strict";Object.defineProperty(Of,"__esModule",{value:!0});Of.DefaultReferences=void 0;var UV=Yt(),gS=Xr(),Bo=Ye(),__=pt(),yS=tr(),GV=lo(),T_=class{constructor(e){this.nameProvider=e.references.NameProvider,this.index=e.shared.workspace.IndexManager,this.nodeLocator=e.workspace.AstNodeLocator}findDeclaration(e){if(e){let r=(0,UV.findAssignment)(e),n=e.element;if(r&&n){let i=n[r.feature];if((0,gS.isReference)(i))return i.ref;if(Array.isArray(i)){for(let o of i)if((0,gS.isReference)(o)&&o.$refNode&&o.$refNode.offset<=e.offset&&o.$refNode.end>=e.end)return o.ref}}if(n){let i=this.nameProvider.getNameNode(n);if(i&&(i===e||(0,__.isCstChildNode)(e,i)))return n}}}findDeclarationNode(e){let r=this.findDeclaration(e);if(r?.$cstNode){let n=this.nameProvider.getNameNode(r);return n||r.$cstNode}}findReferences(e,r){return r.onlyLocal?this.findLocalReferences(e,r.includeDeclaration):this.findGlobalReferences(e,r.includeDeclaration)}findGlobalReferences(e,r=!1){let n=[];if(r){let i=this.getReferenceToSelf(e);i&&n.push(i)}return n.push(...this.index.findAllReferences(e,this.nodeLocator.getAstNodePath(e))),(0,yS.stream)(n)}findLocalReferences(e,r=!1){let i=(0,Bo.getDocument)(e).parseResult.value,o=[];if(r){let a=this.getReferenceToSelf(e);a&&o.push(a)}return(0,Bo.streamAst)(i).forEach(a=>{(0,Bo.streamReferences)(a).forEach(({reference:s})=>{if(s.ref===e&&s.$refNode){let u=s.$refNode;o.push({sourceUri:(0,Bo.getDocument)(u.element).uri,sourcePath:this.nodeLocator.getAstNodePath(u.element),targetUri:(0,Bo.getDocument)(e).uri,targetPath:this.nodeLocator.getAstNodePath(e),segment:(0,__.toDocumentSegment)(u),local:(0,GV.equalURI)((0,Bo.getDocument)(u.element).uri,(0,Bo.getDocument)(e).uri)})}})}),(0,yS.stream)(o)}getReferenceToSelf(e){let r=this.nameProvider.getNameNode(e);if(r){let n=(0,Bo.getDocument)(e),i=this.nodeLocator.getAstNodePath(e);return{sourceUri:n.uri,sourcePath:i,targetUri:n.uri,targetPath:i,segment:(0,__.toDocumentSegment)(r),local:!0}}}};Of.DefaultReferences=T_});var bS=h(If=>{"use strict";Object.defineProperty(If,"__esModule",{value:!0});If.LangiumGrammarReferences=void 0;var WV=R_(),kr=Ye(),vS=pt(),_S=Yt(),TS=tr(),b_=lo(),gr=Ke(),RS=Xt(),qf=ro(),C_=class extends WV.DefaultReferences{constructor(e){super(e),this.documents=e.shared.workspace.LangiumDocuments}findDeclaration(e){let r=e.element,n=(0,_S.findAssignment)(e);if(n&&n.feature==="feature"){if((0,gr.isAssignment)(r))return this.findAssignmentDeclaration(r);if((0,gr.isAction)(r))return this.findActionDeclaration(r)}return super.findDeclaration(e)}findLocalReferences(e,r=!1){if((0,gr.isTypeAttribute)(e)){let i=(0,kr.getDocument)(e).parseResult.value;return this.findLocalReferencesToTypeAttribute(e,i,r)}else return super.findLocalReferences(e,r)}findGlobalReferences(e,r=!1){return(0,gr.isTypeAttribute)(e)?this.findReferencesToTypeAttribute(e,r):super.findGlobalReferences(e,r)}findLocalReferencesToTypeAttribute(e,r,n){let i=[],o=(0,kr.getContainerOfType)(e,gr.isInterface);if(o){let a=(0,qf.collectChildrenTypes)(o,this,this.documents,this.nodeLocator),s=[];if(a.forEach(u=>{let d=this.findLocalRulesWithReturnType(u,r);s.push(...d)}),(0,b_.equalURI)((0,kr.getDocument)(e).uri,(0,kr.getDocument)(r).uri)&&n){let u=this.getReferenceToSelf(e);u&&i.push(u)}s.forEach(u=>{let d=this.createReferencesToAttribute(u,e);i.push(...d)})}return(0,TS.stream)(i)}findReferencesToTypeAttribute(e,r){let n=[],i=(0,kr.getContainerOfType)(e,gr.isInterface);if(i){if(r){let s=this.getReferenceToSelf(e);s&&n.push(s)}let o=(0,qf.collectChildrenTypes)(i,this,this.documents,this.nodeLocator),a=[];o.forEach(s=>{let u=this.findRulesWithReturnType(s);a.push(...u)}),a.forEach(s=>{let u=this.createReferencesToAttribute(s,e);n.push(...u)})}return(0,TS.stream)(n)}createReferencesToAttribute(e,r){let n=[];if((0,gr.isParserRule)(e)){let i=(0,RS.extractAssignments)(e.definition).find(o=>o.feature===r.name);if(i?.$cstNode){let o=this.nameProvider.getNameNode(i);o&&n.push({sourceUri:(0,kr.getDocument)(i).uri,sourcePath:this.nodeLocator.getAstNodePath(i),targetUri:(0,kr.getDocument)(r).uri,targetPath:this.nodeLocator.getAstNodePath(r),segment:(0,vS.toDocumentSegment)(o),local:(0,b_.equalURI)((0,kr.getDocument)(i).uri,(0,kr.getDocument)(r).uri)})}}else{if(e.feature===r.name){let o=(0,_S.findNodeForProperty)(e.$cstNode,"feature");o&&n.push({sourceUri:(0,kr.getDocument)(e).uri,sourcePath:this.nodeLocator.getAstNodePath(e),targetUri:(0,kr.getDocument)(r).uri,targetPath:this.nodeLocator.getAstNodePath(r),segment:(0,vS.toDocumentSegment)(o),local:(0,b_.equalURI)((0,kr.getDocument)(e).uri,(0,kr.getDocument)(r).uri)})}let i=(0,kr.getContainerOfType)(e,gr.isParserRule);n.push(...this.createReferencesToAttribute(i,r))}return n}findAssignmentDeclaration(e){var r;let n=(0,kr.getContainerOfType)(e,gr.isParserRule),i=(0,RS.getActionAtElement)(e);if(i){let o=this.findActionDeclaration(i,e.feature);if(o)return o}if(!((r=n?.returnType)===null||r===void 0)&&r.ref&&((0,gr.isInterface)(n.returnType.ref)||(0,gr.isType)(n.returnType.ref))){let o=(0,qf.collectSuperTypes)(n.returnType.ref);for(let a of o){let s=a.attributes.find(u=>u.name===e.feature);if(s)return s}}return e}findActionDeclaration(e,r){var n;if(!((n=e.type)===null||n===void 0)&&n.ref){let i=r??e.feature,o=(0,qf.collectSuperTypes)(e.type.ref);for(let a of o){let s=a.attributes.find(u=>u.name===i);if(s)return s}}}findRulesWithReturnType(e){let r=[];return this.index.findAllReferences(e,this.nodeLocator.getAstNodePath(e)).forEach(i=>{let o=this.documents.getOrCreateDocument(i.sourceUri),a=this.nodeLocator.getAstNode(o.parseResult.value,i.sourcePath);((0,gr.isParserRule)(a)||(0,gr.isAction)(a))&&r.push(a)}),r}findLocalRulesWithReturnType(e,r){let n=[];return(0,kr.streamAst)(r).filter(o=>{var a,s;return(0,gr.isParserRule)(o)&&((a=o.returnType)===null||a===void 0?void 0:a.ref)===e||(0,gr.isAction)(o)&&((s=o.type)===null||s===void 0?void 0:s.ref)===e}).forEach(o=>{((0,gr.isParserRule)(o)||(0,gr.isAction)(o))&&n.push(o)}),n}};If.LangiumGrammarReferences=C_});var S_=h(Nn=>{"use strict";var HV=Nn&&Nn.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var i=Object.getOwnPropertyDescriptor(e,r);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,i)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),KV=Nn&&Nn.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),BV=Nn&&Nn.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var r in t)r!=="default"&&Object.prototype.hasOwnProperty.call(t,r)&&HV(e,t,r);return KV(e,t),e};Object.defineProperty(Nn,"__esModule",{value:!0});Nn.findFirstFeatures=Nn.findNextFeatures=void 0;var Nr=BV(Ke()),fo=Xt(),VV=Xr(),zV=Ye(),YV=Yt();function XV(t,e){let r={stacks:t,tokens:e};return JV(r),r.stacks.flat().forEach(i=>{i.property=void 0}),AS(r.stacks).map(i=>i[i.length-1])}Nn.findNextFeatures=XV;function P_(t){let{next:e,cardinalities:r,visited:n,plus:i}=t,o=[],a=e.feature;if(n.has(a))return[];n.add(a);let s,u=a;for(;u.$container;)if(Nr.isGroup(u.$container)){s=u.$container;break}else if(Nr.isAbstractElement(u.$container))u=u.$container;else break;if((0,fo.isArrayCardinality)(u.cardinality)){let d=qs({next:{feature:u,type:e.type,new:!1},cardinalities:r,visited:n,plus:i});for(let p of d)i.add(p.feature);o.push(...d)}if(s){let d=s.elements.indexOf(u);d!==void 0&&d<s.elements.length-1&&o.push(...PS({feature:s,type:e.type,new:!1},d+1,r,n,i)),o.every(p=>(0,fo.isOptionalCardinality)(p.feature.cardinality)||(0,fo.isOptionalCardinality)(r.get(p.feature))||i.has(p.feature))&&o.push(...P_({next:{feature:s,type:e.type,new:!1},cardinalities:r,visited:n,plus:i}))}return o}function CS(t){return(0,VV.isAstNode)(t)&&(t={feature:t}),qs({next:t,cardinalities:new Map,visited:new Set,plus:new Set})}Nn.findFirstFeatures=CS;function qs(t){var e,r,n;let{next:i,cardinalities:o,visited:a,plus:s}=t;if(i===void 0)return[];let{feature:u,type:d}=i;if(Nr.isGroup(u)){if(a.has(u))return[];a.add(u)}if(Nr.isGroup(u))return PS(i,0,o,a,s).map(p=>xf(p,u.cardinality,o));if(Nr.isAlternatives(u)||Nr.isUnorderedGroup(u))return u.elements.flatMap(p=>qs({next:{feature:p,new:!1,type:d},cardinalities:o,visited:a,plus:s})).map(p=>xf(p,u.cardinality,o));if(Nr.isAssignment(u)){let p={feature:u.terminal,new:!1,type:d,property:(e=i.property)!==null&&e!==void 0?e:u.feature};return qs({next:p,cardinalities:o,visited:a,plus:s}).map(m=>xf(m,u.cardinality,o))}else{if(Nr.isAction(u))return P_({next:{feature:u,new:!0,type:(0,fo.getTypeName)(u),property:(r=i.property)!==null&&r!==void 0?r:u.feature},cardinalities:o,visited:a,plus:s});if(Nr.isRuleCall(u)&&Nr.isParserRule(u.rule.ref)){let p=u.rule.ref,m={feature:p.definition,new:!0,type:p.fragment?void 0:(n=(0,fo.getExplicitRuleType)(p))!==null&&n!==void 0?n:p.name,property:i.property};return qs({next:m,cardinalities:o,visited:a,plus:s}).map(y=>xf(y,u.cardinality,o))}else return[i]}}function xf(t,e,r){return r.set(t.feature,e),t}function PS(t,e,r,n,i){var o;let a=[],s;for(;e<t.feature.elements.length&&(s={feature:t.feature.elements[e++],new:!1,type:t.type},a.push(...qs({next:s,cardinalities:r,visited:n,plus:i})),!!(0,fo.isOptionalCardinality)((o=s.feature.cardinality)!==null&&o!==void 0?o:r.get(s.feature))););return a}function JV(t){for(let e of t.tokens){let r=AS(t.stacks,e);t.stacks=r}}function AS(t,e){let r=[];for(let n of t)r.push(...QV(n,e));return r}function QV(t,e){let r=new Map,n=new Set(t.map(o=>o.feature).filter(ZV)),i=[];for(;t.length>0;){let o=t.pop(),a=P_({next:o,cardinalities:r,plus:n,visited:new Set}).filter(s=>e?A_(s.feature,e):!0);for(let s of a)i.push([...t,s]);if(!a.every(s=>(0,fo.isOptionalCardinality)(s.feature.cardinality)||(0,fo.isOptionalCardinality)(r.get(s.feature))))break}return i}function ZV(t){if(t.cardinality==="+")return!0;let e=(0,zV.getContainerOfType)(t,Nr.isAssignment);return!!(e&&e.cardinality==="+")}function A_(t,e){if(Nr.isKeyword(t))return t.value===e.image;if(Nr.isRuleCall(t))return ez(t.rule.ref,e);if(Nr.isCrossReference(t)){let r=(0,YV.getCrossReferenceTerminal)(t);if(r)return A_(r,e)}return!1}function ez(t,e){return Nr.isParserRule(t)?CS(t.definition).some(n=>A_(n.feature,e)):Nr.isTerminalRule(t)?new RegExp((0,fo.terminalRegex)(t)).test(e.image):!1}});var k_=h(Ai=>{"use strict";var tz=Ai&&Ai.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var i=Object.getOwnPropertyDescriptor(e,r);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,i)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),rz=Ai&&Ai.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),nz=Ai&&Ai.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var r in t)r!=="default"&&Object.prototype.hasOwnProperty.call(t,r)&&tz(e,t,r);return rz(e,t),e};Object.defineProperty(Ai,"__esModule",{value:!0});Ai.DefaultCompletionProvider=void 0;var Mc=et(),$c=nz(Ke()),iz=Xt(),oz=Ye(),az=pt(),SS=Yt(),ES=tr(),Lf=S_(),E_=class{constructor(e){this.scopeProvider=e.references.ScopeProvider,this.grammar=e.Grammar,this.completionParser=e.parser.CompletionParser,this.nameProvider=e.references.NameProvider,this.grammarConfig=e.parser.GrammarConfig}async getCompletion(e,r){let i=e.parseResult.value.$cstNode;if(!i)return;let o=[],a=e.textDocument,s=a.getText(),u=a.offsetAt(r.position),d=N=>{let C=this.fillCompletionItem(a,u,N);C&&o.push(C)},p=(0,az.findLeafNodeAtOffset)(i,this.backtrackToAnyToken(s,u)),m={document:e,textDocument:a,node:p?.element,offset:u,position:r.position};if(!p){let N=(0,SS.getEntryRule)(this.grammar);return await this.completionForRule(m,N,d),Mc.CompletionList.create(o,!0)}let y=this.backtrackToTokenStart(s,u),S=this.findFeaturesAt(a,y),_=[],w=this.canReparse()&&u!==y;w&&(_=this.findFeaturesAt(a,u));let k=N=>$c.isKeyword(N.feature)?N.feature.value:N.feature;return await Promise.all((0,ES.stream)(S).distinct(k).map(N=>this.completionFor(m,N,d))),w&&await Promise.all((0,ES.stream)(_).exclude(S,k).distinct(k).map(N=>this.completionFor(m,N,d))),Mc.CompletionList.create(o,!0)}canReparse(){return!1}findFeaturesAt(e,r){let n=e.getText({start:Mc.Position.create(0,0),end:e.positionAt(r)}),i=this.completionParser.parse(n),o=i.tokens;if(i.tokenIndex===0){let u=(0,SS.getEntryRule)(this.grammar),d=(0,Lf.findFirstFeatures)({feature:u.definition,new:!0,type:(0,iz.getExplicitRuleType)(u)});return o.length>0?(o.shift(),(0,Lf.findNextFeatures)(d.map(p=>[p]),o)):d}let a=[...o].splice(i.tokenIndex);return(0,Lf.findNextFeatures)([i.elementStack.map(u=>({feature:u}))],a)}backtrackToAnyToken(e,r){for(r>=e.length&&(r=e.length-1);r>0&&/\s/.test(e.charAt(r));)r--;return r}backtrackToTokenStart(e,r){if(r<1)return r;let n=this.grammarConfig.nameRegexp,i=e.charAt(r-1);for(;r>0&&n.test(i);)r--,i=e.charAt(r-1);return r}async completionForRule(e,r,n){if($c.isParserRule(r)){let i=(0,Lf.findFirstFeatures)(r.definition);await Promise.all(i.map(o=>this.completionFor(e,o,n)))}}completionFor(e,r,n){if($c.isKeyword(r.feature))return this.completionForKeyword(e,r.feature,n);if($c.isCrossReference(r.feature)&&e.node)return this.completionForCrossReference(e,r,n)}completionForCrossReference(e,r,n){let i=(0,oz.getContainerOfType)(r.feature,$c.isAssignment),o=e.node;if(i&&o){if(r.type&&(r.new||o.$type!==r.type)&&(o={$type:r.type,$container:o,$containerProperty:r.property}),!e)return;let a={reference:{},container:o,property:i.feature};try{let s=this.scopeProvider.getScope(a),u=new Set;s.getAllElements().forEach(d=>{!u.has(d.name)&&this.filterCrossReference(d)&&(n(this.createReferenceCompletionItem(d)),u.add(d.name))})}catch(s){console.error(s)}}}createReferenceCompletionItem(e){return{nodeDescription:e,kind:Mc.CompletionItemKind.Reference,detail:e.type,sortText:"0"}}filterCrossReference(e){return!0}completionForKeyword(e,r,n){r.value.match(/[\w]/)&&n({label:r.value,kind:Mc.CompletionItemKind.Keyword,detail:"Keyword",sortText:"1"})}fillCompletionItem(e,r,n){var i,o;let a;if(typeof n.label=="string")a=n.label;else if("node"in n){let p=this.nameProvider.getName(n.node);if(!p)return;a=p}else if("nodeDescription"in n)a=n.nodeDescription.name;else return;let s;typeof((i=n.textEdit)===null||i===void 0?void 0:i.newText)=="string"?s=n.textEdit.newText:typeof n.insertText=="string"?s=n.insertText:s=a;let u=(o=n.textEdit)!==null&&o!==void 0?o:this.buildCompletionTextEdit(e,r,a,s);return u?{additionalTextEdits:n.additionalTextEdits,command:n.command,commitCharacters:n.commitCharacters,data:n.data,detail:n.detail,documentation:n.documentation,filterText:n.filterText,insertText:n.insertText,insertTextFormat:n.insertTextFormat,insertTextMode:n.insertTextMode,kind:n.kind,labelDetails:n.labelDetails,preselect:n.preselect,sortText:n.sortText,tags:n.tags,textEditText:n.textEditText,textEdit:u,label:a}:void 0}buildCompletionTextEdit(e,r,n,i){let o=e.getText(),a=this.backtrackToTokenStart(o,r),s=o.substring(a,r);if(this.charactersFuzzyMatch(s,n)){let u=e.positionAt(a),d=e.positionAt(r);return{newText:i,range:{start:u,end:d}}}else return}isWordCharacterAt(e,r){return this.grammarConfig.nameRegexp.test(e.charAt(r))}charactersFuzzyMatch(e,r){if(e.length===0)return!0;r=r.toLowerCase();let n=!1,i,o=0,a=r.length;for(let s=0;s<a;s++){let u=r.charCodeAt(s),d=e.charCodeAt(o);if((u===d||this.toUpperCharCode(u)===this.toUpperCharCode(d))&&(n||(n=i===void 0||this.isWordTransition(i,u)),n&&o++,o===e.length))return!0;i=u}return!1}isWordTransition(e,r){return kS<=e&&e<=NS&&sz<=r&&r<=uz||e===wS&&r!==wS}toUpperCharCode(e){return kS<=e&&e<=NS?e-32:e}};Ai.DefaultCompletionProvider=E_;var kS=97,NS=122,sz=65,uz=90,wS=95});var OS=h(DS=>{"use strict";Object.defineProperty(DS,"__esModule",{value:!0})});var w_=h(Mf=>{"use strict";Object.defineProperty(Mf,"__esModule",{value:!0});Mf.DefaultDocumentHighlightProvider=void 0;var cz=et(),lz=Ye(),dz=pt(),fz=lo(),N_=class{constructor(e){this.references=e.references.References,this.nameProvider=e.references.NameProvider,this.grammarConfig=e.parser.GrammarConfig}getDocumentHighlight(e,r){let n=e.parseResult.value.$cstNode;if(!n)return;let i=(0,dz.findDeclarationNodeAtOffset)(n,e.textDocument.offsetAt(r.position),this.grammarConfig.nameRegexp);if(!i)return;let o=this.references.findDeclaration(i);if(o){let a=[],u={onlyLocal:!0,includeDeclaration:(0,fz.equalURI)((0,lz.getDocument)(o).uri,e.uri)};return this.references.findReferences(o,u).forEach(d=>{a.push(this.createDocumentHighlight(d))}),a}}createDocumentHighlight(e){return cz.DocumentHighlight.create(e.segment.range)}};Mf.DefaultDocumentHighlightProvider=N_});var IS=h(qS=>{"use strict";Object.defineProperty(qS,"__esModule",{value:!0})});var O_=h($f=>{"use strict";Object.defineProperty($f,"__esModule",{value:!0});$f.DefaultDocumentSymbolProvider=void 0;var pz=et(),hz=Ye(),D_=class{constructor(e){this.nameProvider=e.references.NameProvider}getSymbols(e){return this.getSymbol(e,e.parseResult.value)}getSymbol(e,r){let n=r.$cstNode,i=this.nameProvider.getNameNode(r);if(i&&n){let o=this.nameProvider.getName(r);return[{kind:this.getSymbolKind(r.$type),name:o??i.text,range:n.range,selectionRange:i.range,children:this.getChildSymbols(e,r)}]}else return this.getChildSymbols(e,r)||[]}getChildSymbols(e,r){let n=[];for(let i of(0,hz.streamContents)(r)){let o=this.getSymbol(e,i);n.push(...o)}if(n.length>0)return n}getSymbolKind(e){return pz.SymbolKind.Field}};$f.DefaultDocumentSymbolProvider=D_});var xS=h(Ff=>{"use strict";Object.defineProperty(Ff,"__esModule",{value:!0});Ff.AbstractExecuteCommandHandler=void 0;var mz=et(),q_=class{get commands(){return Array.from(this.registeredCommands.keys())}constructor(){this.registeredCommands=new Map,this.registerCommands(this.createCommandAcceptor())}async executeCommand(e,r,n=mz.CancellationToken.None){let i=this.registeredCommands.get(e);if(i)return i(r,n)}createCommandAcceptor(){return(e,r)=>this.registeredCommands.set(e,r)}};Ff.AbstractExecuteCommandHandler=q_});var x_=h(jf=>{"use strict";Object.defineProperty(jf,"__esModule",{value:!0});jf.DefaultDefinitionProvider=void 0;var gz=et(),yz=Ye(),vz=pt(),I_=class{constructor(e){this.nameProvider=e.references.NameProvider,this.references=e.references.References,this.grammarConfig=e.parser.GrammarConfig}getDefinition(e,r){let n=e.parseResult.value;if(n.$cstNode){let i=n.$cstNode,o=(0,vz.findDeclarationNodeAtOffset)(i,e.textDocument.offsetAt(r.position),this.grammarConfig.nameRegexp);if(o)return this.collectLocationLinks(o,r)}}collectLocationLinks(e,r){var n;let i=this.findLink(e);if(i)return[gz.LocationLink.create(i.targetDocument.textDocument.uri,((n=i.target.element.$cstNode)!==null&&n!==void 0?n:i.target).range,i.target.range,i.source.range)]}findLink(e){let r=this.references.findDeclarationNode(e);if(r?.element){let n=(0,yz.getDocument)(r.element);if(r&&n)return{source:e,target:r,targetDocument:n}}}};jf.DefaultDefinitionProvider=I_});var M_=h(Is=>{"use strict";Object.defineProperty(Is,"__esModule",{value:!0});Is.MultilineCommentHoverProvider=Is.AstNodeHoverProvider=void 0;var LS=pt(),Uf=class{constructor(e){this.references=e.references.References,this.grammarConfig=e.parser.GrammarConfig}getHoverContent(e,r){var n,i;let o=(i=(n=e.parseResult)===null||n===void 0?void 0:n.value)===null||i===void 0?void 0:i.$cstNode;if(o){let a=e.textDocument.offsetAt(r.position),s=(0,LS.findDeclarationNodeAtOffset)(o,a,this.grammarConfig.nameRegexp);if(s&&s.offset+s.length>a){let u=this.references.findDeclaration(s);if(u)return this.getAstNodeHoverContent(u)}}}};Is.AstNodeHoverProvider=Uf;var L_=class extends Uf{constructor(){super(...arguments),this.commentContentRegex=/\/\*([\s\S]*?)\*\//}getAstNodeHoverContent(e){let r=(0,LS.findCommentNode)(e.$cstNode,this.grammarConfig.multilineCommentRules),n;if(r){let i=this.commentContentRegex.exec(r.text);i&&i[1]&&(n=this.getCommentContent(i[1]))}if(n)return{contents:{kind:"markdown",value:n}}}getCommentContent(e){return e.split(`
`).map(n=>(n=n.trim(),n.startsWith("*")&&(n=n.substring(1).trim()),n)).join(" ").trim()}};Is.MultilineCommentHoverProvider=L_});var MS=h(Gf=>{"use strict";Object.defineProperty(Gf,"__esModule",{value:!0});Gf.AbstractGoToImplementationProvider=void 0;var _z=et(),Tz=pt(),$_=class{constructor(e){this.references=e.references.References,this.grammarConfig=e.parser.GrammarConfig}getImplementation(e,r,n=_z.CancellationToken.None){let i=e.parseResult.value;if(i.$cstNode){let o=(0,Tz.findDeclarationNodeAtOffset)(i.$cstNode,e.textDocument.offsetAt(r.position),this.grammarConfig.nameRegexp);if(o){let a=this.references.findDeclaration(o);if(a)return this.collectGoToImplementationLocationLinks(a,n)}}}};Gf.AbstractGoToImplementationProvider=$_});var Vo=h(po=>{"use strict";Object.defineProperty(po,"__esModule",{value:!0});po.DefaultLangiumDocuments=po.DefaultLangiumDocumentFactory=po.DocumentState=void 0;var Rz=(ny(),bC(ry)),bz=to(),Cz=tr(),xs;(function(t){t[t.Changed=0]="Changed",t[t.Parsed=1]="Parsed",t[t.IndexedContent=2]="IndexedContent",t[t.ComputedScopes=3]="ComputedScopes",t[t.Linked=4]="Linked",t[t.IndexedReferences=5]="IndexedReferences",t[t.Validated=6]="Validated"})(xs=po.DocumentState||(po.DocumentState={}));var F_=class{constructor(e){this.serviceRegistry=e.ServiceRegistry,this.textDocuments=e.workspace.TextDocuments,this.fileSystemProvider=e.workspace.FileSystemProvider}fromTextDocument(e,r){return this.create(r??bz.URI.parse(e.uri),e)}fromString(e,r){return this.create(r,e)}fromModel(e,r){return this.create(r,{$model:e})}create(e,r){if(r??(r=this.textDocuments.get(e.toString())),r??(r=this.getContentFromFileSystem(e)),typeof r=="string"){let n=this.parse(e,r);return this.createLangiumDocument(n,e,void 0,r)}else if("$model"in r){let n={value:r.$model,parserErrors:[],lexerErrors:[]};return this.createLangiumDocument(n,e)}else{let n=this.parse(e,r.getText());return this.createLangiumDocument(n,e,r)}}createLangiumDocument(e,r,n,i){let o;if(n)o={parseResult:e,uri:r,state:xs.Parsed,references:[],textDocument:n};else{let a=this.createTextDocumentGetter(r,i);o={parseResult:e,uri:r,state:xs.Parsed,references:[],get textDocument(){return a()}}}return e.value.$document=o,o}update(e){let r=this.textDocuments.get(e.uri.toString()),n=r?r.getText():this.getContentFromFileSystem(e.uri);if(r)Object.defineProperty(e,"textDocument",{value:r});else{let i=this.createTextDocumentGetter(e.uri,n);Object.defineProperty(e,"textDocument",{get:i})}return e.parseResult=this.parse(e.uri,n),e.parseResult.value.$document=e,e.state=xs.Parsed,e}getContentFromFileSystem(e){return this.fileSystemProvider.readFileSync(e)}parse(e,r){return this.serviceRegistry.getServices(e).parser.LangiumParser.parse(r)}createTextDocumentGetter(e,r){let n=this.serviceRegistry,i;return()=>i??(i=Rz.TextDocument.create(e.toString(),n.getServices(e).LanguageMetaData.languageId,0,r??""))}};po.DefaultLangiumDocumentFactory=F_;var j_=class{constructor(e){this.documentMap=new Map,this.langiumDocumentFactory=e.workspace.LangiumDocumentFactory}get all(){return(0,Cz.stream)(this.documentMap.values())}addDocument(e){let r=e.uri.toString();if(this.documentMap.has(r))throw new Error(`A document with the URI '${r}' is already present.`);this.documentMap.set(r,e)}getOrCreateDocument(e){let r=e.toString(),n=this.documentMap.get(r);return n||(n=this.langiumDocumentFactory.create(e),this.documentMap.set(r,n),n)}hasDocument(e){return this.documentMap.has(e.toString())}invalidateDocument(e){let r=e.toString(),n=this.documentMap.get(r);return n&&(n.state=xs.Changed,n.references=[],n.precomputedScopes=void 0,n.diagnostics=[]),n}deleteDocument(e){let r=e.toString(),n=this.documentMap.get(r);return n&&(n.state=xs.Changed,this.documentMap.delete(r)),n}};po.DefaultLangiumDocuments=j_});var G_=h(Ls=>{"use strict";Object.defineProperty(Ls,"__esModule",{value:!0});Ls.mergeSignatureHelpOptions=Ls.AbstractSignatureHelpProvider=void 0;var Pz=et(),Az=pt(),U_=class{provideSignatureHelp(e,r,n=Pz.CancellationToken.None){let o=e.parseResult.value.$cstNode;if(o){let a=(0,Az.findLeafNodeAtOffset)(o,e.textDocument.offsetAt(r.position));if(a)return this.getSignatureFromElement(a.element,n)}}get signatureHelpOptions(){return{triggerCharacters:["("],retriggerCharacters:[","]}}};Ls.AbstractSignatureHelpProvider=U_;function Sz(t){let e=[],r=[];t.forEach(i=>{i?.triggerCharacters&&e.push(...i.triggerCharacters),i?.retriggerCharacters&&r.push(...i.retriggerCharacters)});let n={triggerCharacters:e.length>0?Array.from(new Set(e)).sort():void 0,retriggerCharacters:r.length>0?Array.from(new Set(r)).sort():void 0};return n.triggerCharacters?n:void 0}Ls.mergeSignatureHelpOptions=Sz});var K_=h(ce=>{"use strict";Object.defineProperty(ce,"__esModule",{value:!0});ce.createRequestHandler=ce.createServerRequestHandler=ce.createCallHierarchyRequestHandler=ce.addCallHierarchyHandler=ce.addCodeLensHandler=ce.addSignatureHelpHandler=ce.addDocumentLinkHandler=ce.addExecuteCommandHandler=ce.addConfigurationChangeHandler=ce.addSemanticTokenHandler=ce.addRenameHandler=ce.addFormattingHandler=ce.addFoldingRangeHandler=ce.addHoverHandler=ce.addDocumentHighlightsHandler=ce.addGoToDeclarationHandler=ce.addGoToImplementationHandler=ce.addGoToTypeDefinitionHandler=ce.addGotoDefinitionHandler=ce.addDocumentSymbolHandler=ce.addCodeActionHandler=ce.addFindReferencesHandler=ce.addCompletionHandler=ce.addDiagnosticsHandler=ce.addDocumentsHandler=ce.startLanguageServer=ce.DefaultLanguageServer=void 0;var Zr=et(),Ms=to(),$S=bc(),Ez=Cn(),kz=Vo(),Nz=Nf(),wz=G_(),W_=class{constructor(e){this.onInitializeEmitter=new Zr.Emitter,this.onInitializedEmitter=new Zr.Emitter,this.services=e}get onInitialize(){return this.onInitializeEmitter.event}get onInitialized(){return this.onInitializedEmitter.event}async initialize(e){return this.eagerLoadServices(),this.onInitializeEmitter.fire(e),this.onInitializeEmitter.dispose(),this.buildInitializeResult(e)}eagerLoadServices(){(0,$S.eagerLoad)(this.services),this.services.ServiceRegistry.all.forEach(e=>(0,$S.eagerLoad)(e))}hasService(e){return this.services.ServiceRegistry.all.some(r=>e(r)!==void 0)}buildInitializeResult(e){var r;let n=this.services.ServiceRegistry.all,i=this.hasService(Z=>Z.lsp.Formatter),o=n.map(Z=>{var G;return(G=Z.lsp.Formatter)===null||G===void 0?void 0:G.formatOnTypeOptions}).find(Z=>!!Z),a=this.hasService(Z=>Z.lsp.CodeActionProvider),s=this.hasService(Z=>Z.lsp.SemanticTokenProvider),u=(r=this.services.lsp.ExecuteCommandHandler)===null||r===void 0?void 0:r.commands,d=this.services.lsp.DocumentLinkProvider,p=(0,wz.mergeSignatureHelpOptions)(n.map(Z=>{var G;return(G=Z.lsp.SignatureHelp)===null||G===void 0?void 0:G.signatureHelpOptions})),m=this.hasService(Z=>Z.lsp.TypeProvider),y=this.hasService(Z=>Z.lsp.ImplementationProvider),S=this.hasService(Z=>Z.lsp.CompletionProvider),_=this.hasService(Z=>Z.lsp.ReferencesProvider),w=this.hasService(Z=>Z.lsp.DocumentSymbolProvider),k=this.hasService(Z=>Z.lsp.DefinitionProvider),N=this.hasService(Z=>Z.lsp.DocumentHighlightProvider),C=this.hasService(Z=>Z.lsp.FoldingRangeProvider),E=this.hasService(Z=>Z.lsp.HoverProvider),L=this.hasService(Z=>Z.lsp.RenameProvider),U=this.hasService(Z=>Z.lsp.CallHierarchyProvider),z=this.services.lsp.CodeLensProvider,te=this.hasService(Z=>Z.lsp.DeclarationProvider);return{capabilities:{workspace:{workspaceFolders:{supported:!0}},executeCommandProvider:u&&{commands:u},textDocumentSync:Zr.TextDocumentSyncKind.Incremental,completionProvider:S?{}:void 0,referencesProvider:_,documentSymbolProvider:w,definitionProvider:k,typeDefinitionProvider:m,documentHighlightProvider:N,codeActionProvider:a,documentFormattingProvider:i,documentRangeFormattingProvider:i,documentOnTypeFormattingProvider:o,foldingRangeProvider:C,hoverProvider:E,renameProvider:L?{prepareProvider:!0}:void 0,semanticTokensProvider:s?Nz.DefaultSemanticTokenOptions:void 0,signatureHelpProvider:p,implementationProvider:y,callHierarchyProvider:U?{}:void 0,documentLinkProvider:d?{resolveProvider:!!d.resolveDocumentLink}:void 0,codeLensProvider:z?{resolveProvider:!!z.resolveCodeLens}:void 0,declarationProvider:te}}}async initialized(e){this.onInitializedEmitter.fire(e),this.onInitializedEmitter.dispose()}};ce.DefaultLanguageServer=W_;function Dz(t){let e=t.lsp.Connection;if(!e)throw new Error("Starting a language server requires the languageServer.Connection service to be set.");FS(e,t),jS(e,t),US(e,t),GS(e,t),HS(e,t),KS(e,t),BS(e,t),VS(e,t),YS(e,t),JS(e,t),QS(e,t),WS(e,t),ZS(e,t),XS(e,t),eE(e,t),rE(e,t),iE(e,t),aE(e,t),oE(e,t),nE(e,t),tE(e,t),zS(e,t),e.onInitialize(n=>t.lsp.LanguageServer.initialize(n)),e.onInitialized(n=>t.lsp.LanguageServer.initialized(n)),t.workspace.TextDocuments.listen(e),e.listen()}ce.startLanguageServer=Dz;function FS(t,e){let r=e.workspace.DocumentBuilder,n=e.workspace.MutexLock;function i(a,s){n.lock(u=>r.update(a,s,u))}e.workspace.TextDocuments.onDidChangeContent(a=>{i([Ms.URI.parse(a.document.uri)],[])}),t.onDidChangeWatchedFiles(a=>{let s=a.changes.filter(d=>d.type!==Zr.FileChangeType.Deleted).map(d=>Ms.URI.parse(d.uri)),u=a.changes.filter(d=>d.type===Zr.FileChangeType.Deleted).map(d=>Ms.URI.parse(d.uri));i(s,u)})}ce.addDocumentsHandler=FS;function jS(t,e){e.workspace.DocumentBuilder.onBuildPhase(kz.DocumentState.Validated,async(n,i)=>{for(let o of n)if(o.diagnostics&&t.sendDiagnostics({uri:o.uri.toString(),diagnostics:o.diagnostics}),i.isCancellationRequested)return})}ce.addDiagnosticsHandler=jS;function US(t,e){t.onCompletion(yr((r,n,i,o)=>{var a;return(a=r.lsp.CompletionProvider)===null||a===void 0?void 0:a.getCompletion(n,i,o)},e))}ce.addCompletionHandler=US;function GS(t,e){t.onReferences(yr((r,n,i,o)=>{var a;return(a=r.lsp.ReferencesProvider)===null||a===void 0?void 0:a.findReferences(n,i,o)},e))}ce.addFindReferencesHandler=GS;function WS(t,e){t.onCodeAction(yr((r,n,i,o)=>{var a;return(a=r.lsp.CodeActionProvider)===null||a===void 0?void 0:a.getCodeActions(n,i,o)},e))}ce.addCodeActionHandler=WS;function HS(t,e){t.onDocumentSymbol(yr((r,n,i,o)=>{var a;return(a=r.lsp.DocumentSymbolProvider)===null||a===void 0?void 0:a.getSymbols(n,i,o)},e))}ce.addDocumentSymbolHandler=HS;function KS(t,e){t.onDefinition(yr((r,n,i,o)=>{var a;return(a=r.lsp.DefinitionProvider)===null||a===void 0?void 0:a.getDefinition(n,i,o)},e))}ce.addGotoDefinitionHandler=KS;function BS(t,e){t.onTypeDefinition(yr((r,n,i,o)=>{var a;return(a=r.lsp.TypeProvider)===null||a===void 0?void 0:a.getTypeDefinition(n,i,o)},e))}ce.addGoToTypeDefinitionHandler=BS;function VS(t,e){t.onImplementation(yr((r,n,i,o)=>{var a;return(a=r.lsp.ImplementationProvider)===null||a===void 0?void 0:a.getImplementation(n,i,o)},e))}ce.addGoToImplementationHandler=VS;function zS(t,e){t.onDeclaration(yr((r,n,i,o)=>{var a;return(a=r.lsp.DeclarationProvider)===null||a===void 0?void 0:a.getDeclaration(n,i,o)},e))}ce.addGoToDeclarationHandler=zS;function YS(t,e){t.onDocumentHighlight(yr((r,n,i,o)=>{var a;return(a=r.lsp.DocumentHighlightProvider)===null||a===void 0?void 0:a.getDocumentHighlight(n,i,o)},e))}ce.addDocumentHighlightsHandler=YS;function XS(t,e){t.onHover(yr((r,n,i,o)=>{var a;return(a=r.lsp.HoverProvider)===null||a===void 0?void 0:a.getHoverContent(n,i,o)},e))}ce.addHoverHandler=XS;function JS(t,e){t.onFoldingRanges(yr((r,n,i,o)=>{var a;return(a=r.lsp.FoldingRangeProvider)===null||a===void 0?void 0:a.getFoldingRanges(n,i,o)},e))}ce.addFoldingRangeHandler=JS;function QS(t,e){t.onDocumentFormatting(yr((r,n,i,o)=>{var a;return(a=r.lsp.Formatter)===null||a===void 0?void 0:a.formatDocument(n,i,o)},e)),t.onDocumentRangeFormatting(yr((r,n,i,o)=>{var a;return(a=r.lsp.Formatter)===null||a===void 0?void 0:a.formatDocumentRange(n,i,o)},e)),t.onDocumentOnTypeFormatting(yr((r,n,i,o)=>{var a;return(a=r.lsp.Formatter)===null||a===void 0?void 0:a.formatDocumentOnType(n,i,o)},e))}ce.addFormattingHandler=QS;function ZS(t,e){t.onRenameRequest(yr((r,n,i,o)=>{var a;return(a=r.lsp.RenameProvider)===null||a===void 0?void 0:a.rename(n,i,o)},e)),t.onPrepareRename(yr((r,n,i,o)=>{var a;return(a=r.lsp.RenameProvider)===null||a===void 0?void 0:a.prepareRename(n,i,o)},e))}ce.addRenameHandler=ZS;function eE(t,e){let r="No semantic token provider registered";t.languages.semanticTokens.on(zo((n,i,o,a)=>n.lsp.SemanticTokenProvider?n.lsp.SemanticTokenProvider.semanticHighlight(i,o,a):new Zr.ResponseError(0,r),e)),t.languages.semanticTokens.onDelta(zo((n,i,o,a)=>n.lsp.SemanticTokenProvider?n.lsp.SemanticTokenProvider.semanticHighlightDelta(i,o,a):new Zr.ResponseError(0,r),e)),t.languages.semanticTokens.onRange(zo((n,i,o,a)=>n.lsp.SemanticTokenProvider?n.lsp.SemanticTokenProvider.semanticHighlightRange(i,o,a):new Zr.ResponseError(0,r),e))}ce.addSemanticTokenHandler=eE;function tE(t,e){t.onDidChangeConfiguration(r=>{r.settings&&e.workspace.ConfigurationProvider.updateConfiguration(r)})}ce.addConfigurationChangeHandler=tE;function rE(t,e){let r=e.lsp.ExecuteCommandHandler;r&&t.onExecuteCommand(async(n,i)=>{var o;try{return await r.executeCommand(n.command,(o=n.arguments)!==null&&o!==void 0?o:[],i)}catch(a){return $s(a)}})}ce.addExecuteCommandHandler=rE;function nE(t,e){var r;let n=e.lsp.DocumentLinkProvider;if(n){t.onDocumentLinks(zo((o,a,s,u)=>n.getDocumentLinks(a,s,u),e));let i=(r=n.resolveDocumentLink)===null||r===void 0?void 0:r.bind(n);i&&t.onDocumentLinkResolve(async(o,a)=>{try{return await i(o,a)}catch(s){return $s(s)}})}}ce.addDocumentLinkHandler=nE;function iE(t,e){t.onSignatureHelp(zo((r,n,i,o)=>{var a;return(a=r.lsp.SignatureHelp)===null||a===void 0?void 0:a.provideSignatureHelp(n,i,o)},e))}ce.addSignatureHelpHandler=iE;function oE(t,e){var r;let n=e.lsp.CodeLensProvider;if(n){t.onCodeLens(zo((o,a,s,u)=>n.provideCodeLens(a,s,u),e));let i=(r=n.resolveCodeLens)===null||r===void 0?void 0:r.bind(n);i&&t.onCodeLensResolve(async(o,a)=>{try{return await i(o,a)}catch(s){return $s(s)}})}}ce.addCodeLensHandler=oE;function aE(t,e){let r="No call hierarchy provider registered";t.languages.callHierarchy.onPrepare(zo((n,i,o,a)=>{var s;return n.lsp.CallHierarchyProvider?(s=n.lsp.CallHierarchyProvider.prepareCallHierarchy(i,o,a))!==null&&s!==void 0?s:null:new Zr.ResponseError(0,r)},e)),t.languages.callHierarchy.onIncomingCalls(H_((n,i,o)=>{var a;return n.lsp.CallHierarchyProvider?(a=n.lsp.CallHierarchyProvider.incomingCalls(i,o))!==null&&a!==void 0?a:null:new Zr.ResponseError(0,r)},e)),t.languages.callHierarchy.onOutgoingCalls(H_((n,i,o)=>{var a;return n.lsp.CallHierarchyProvider?(a=n.lsp.CallHierarchyProvider.outgoingCalls(i,o))!==null&&a!==void 0?a:null:new Zr.ResponseError(0,r)},e))}ce.addCallHierarchyHandler=aE;function H_(t,e){let r=e.ServiceRegistry;return async(n,i)=>{let o=Ms.URI.parse(n.item.uri),a=r.getServices(o);if(!a)throw console.error(`Could not find service instance for uri: '${o.toString()}'`),new Error;try{return await t(a,n,i)}catch(s){return $s(s)}}}ce.createCallHierarchyRequestHandler=H_;function zo(t,e){let r=e.workspace.LangiumDocuments,n=e.ServiceRegistry;return async(i,o)=>{let a=Ms.URI.parse(i.textDocument.uri),s=n.getServices(a);if(!s)throw console.error(`Could not find service instance for uri: '${a.toString()}'`),new Error;let u=r.getOrCreateDocument(a);if(!u)throw new Error;try{return await t(s,u,i,o)}catch(d){return $s(d)}}}ce.createServerRequestHandler=zo;function yr(t,e){let r=e.workspace.LangiumDocuments,n=e.ServiceRegistry;return async(i,o)=>{let a=Ms.URI.parse(i.textDocument.uri),s=n.getServices(a);if(!s)return console.error(`Could not find service instance for uri: '${a.toString()}'`),null;let u=r.getOrCreateDocument(a);if(!u)return null;try{return await t(s,u,i,o)}catch(d){return $s(d)}}}ce.createRequestHandler=yr;function $s(t){if((0,Ez.isOperationCancelled)(t))return new Zr.ResponseError(Zr.LSPErrorCodes.RequestCancelled,"The request has been cancelled.");if(t instanceof Zr.ResponseError)return t;throw t}});var V_=h(Wf=>{"use strict";Object.defineProperty(Wf,"__esModule",{value:!0});Wf.DefaultReferencesProvider=void 0;var Oz=et(),qz=pt(),B_=class{constructor(e){this.nameProvider=e.references.NameProvider,this.references=e.references.References,this.grammarConfig=e.parser.GrammarConfig}findReferences(e,r){let n=e.parseResult.value.$cstNode;if(!n)return[];let i=(0,qz.findDeclarationNodeAtOffset)(n,e.textDocument.offsetAt(r.position),this.grammarConfig.nameRegexp);return i?this.getReferences(i,r,e):[]}getReferences(e,r,n){let i=[],o=this.references.findDeclaration(e);if(o){let a={includeDeclaration:r.context.includeDeclaration};this.references.findReferences(o,a).forEach(s=>{i.push(Oz.Location.create(s.sourceUri.toString(),s.segment.range))})}return i}};Wf.DefaultReferencesProvider=B_});var Y_=h(Hf=>{"use strict";Object.defineProperty(Hf,"__esModule",{value:!0});Hf.DefaultRenameProvider=void 0;var Iz=et(),xz=Ts(),sE=pt(),z_=class{constructor(e){this.references=e.references.References,this.nameProvider=e.references.NameProvider,this.grammarConfig=e.parser.GrammarConfig}async rename(e,r){let n={},i=e.parseResult.value.$cstNode;if(!i)return;let o=e.textDocument.offsetAt(r.position),a=(0,sE.findDeclarationNodeAtOffset)(i,o,this.grammarConfig.nameRegexp);if(!a)return;let s=this.references.findDeclaration(a);if(!s)return;let u={onlyLocal:!1,includeDeclaration:!0};return this.references.findReferences(s,u).forEach(p=>{let m=Iz.TextEdit.replace(p.segment.range,r.newName),y=p.sourceUri.toString();n[y]?n[y].push(m):n[y]=[m]}),{changes:n}}prepareRename(e,r){return this.renameNodeRange(e,r.position)}renameNodeRange(e,r){let n=e.parseResult.value.$cstNode,i=e.textDocument.offsetAt(r);if(n&&i){let o=(0,sE.findDeclarationNodeAtOffset)(n,i,this.grammarConfig.nameRegexp);if(!o)return;if(this.references.findDeclaration(o)||this.isNameNode(o))return o.range}}isNameNode(e){return e?.element&&(0,xz.isNamed)(e.element)&&e===this.nameProvider.getNameNode(e.element)}};Hf.DefaultRenameProvider=z_});var uE=h(Kf=>{"use strict";Object.defineProperty(Kf,"__esModule",{value:!0});Kf.AbstractTypeDefinitionProvider=void 0;var Lz=et(),Mz=pt(),X_=class{constructor(e){this.references=e.references.References}getTypeDefinition(e,r,n=Lz.CancellationToken.None){let i=e.parseResult.value;if(i.$cstNode){let o=(0,Mz.findDeclarationNodeAtOffset)(i.$cstNode,e.textDocument.offsetAt(r.position));if(o){let a=this.references.findDeclaration(o);if(a)return this.collectGoToTypeLocationLinks(a,n)}}}};Kf.AbstractTypeDefinitionProvider=X_});var J_=h(gt=>{"use strict";var $z=gt&&gt.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var i=Object.getOwnPropertyDescriptor(e,r);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,i)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),nr=gt&&gt.__exportStar||function(t,e){for(var r in t)r!=="default"&&!Object.prototype.hasOwnProperty.call(e,r)&&$z(e,t,r)};Object.defineProperty(gt,"__esModule",{value:!0});nr(k_(),gt);nr(S_(),gt);nr(OS(),gt);nr(w_(),gt);nr(IS(),gt);nr(O_(),gt);nr(xS(),gt);nr(Cf(),gt);nr(x_(),gt);nr(M_(),gt);nr(h_(),gt);nr(MS(),gt);nr(K_(),gt);nr(V_(),gt);nr(Y_(),gt);nr(Nf(),gt);nr(G_(),gt);nr(uE(),gt)});var cE=h(Bf=>{"use strict";Object.defineProperty(Bf,"__esModule",{value:!0});Bf.LangiumGrammarDefinitionProvider=void 0;var Q_=et(),Fz=J_(),jz=Ye(),Uz=Yt(),Gz=Ke(),Wz=Xt(),Z_=class extends Fz.DefaultDefinitionProvider{constructor(e){super(e),this.documents=e.shared.workspace.LangiumDocuments}collectLocationLinks(e,r){var n,i,o,a,s,u;if((0,Gz.isGrammarImport)(e.element)&&((n=(0,Uz.findAssignment)(e))===null||n===void 0?void 0:n.feature)==="path"){let p=(0,Wz.resolveImport)(this.documents,e.element);if(p?.$document){let m=(i=this.findTargetObject(p))!==null&&i!==void 0?i:p,y=(a=(o=this.nameProvider.getNameNode(m))===null||o===void 0?void 0:o.range)!==null&&a!==void 0?a:Q_.Range.create(0,0,0,0),S=(u=(s=m.$cstNode)===null||s===void 0?void 0:s.range)!==null&&u!==void 0?u:Q_.Range.create(0,0,0,0);return[Q_.LocationLink.create(p.$document.uri.toString(),S,y,e.range)]}return}return super.collectLocationLinks(e,r)}findTargetObject(e){return e.isDeclared?e:(0,jz.streamContents)(e).head()}};Bf.LangiumGrammarDefinitionProvider=Z_});var dE=h(Vf=>{"use strict";Object.defineProperty(Vf,"__esModule",{value:!0});Vf.AbstractCallHierarchyProvider=void 0;var Hz=et(),lE=to(),eT=pt(),tT=class{constructor(e){this.grammarConfig=e.parser.GrammarConfig,this.nameProvider=e.references.NameProvider,this.documents=e.shared.workspace.LangiumDocuments,this.references=e.references.References}prepareCallHierarchy(e,r){let n=e.parseResult.value,i=(0,eT.findDeclarationNodeAtOffset)(n.$cstNode,e.textDocument.offsetAt(r.position),this.grammarConfig.nameRegexp);if(!i)return;let o=this.references.findDeclarationNode(i);if(o)return this.getCallHierarchyItems(o.element,e)}getCallHierarchyItems(e,r){let n=this.nameProvider.getNameNode(e),i=this.nameProvider.getName(e);if(!(!n||!e.$cstNode||i===void 0))return[Object.assign({kind:Hz.SymbolKind.Method,name:i,range:e.$cstNode.range,selectionRange:n.range,uri:r.uri.toString()},this.getCallHierarchyItem(e))]}getCallHierarchyItem(e){}incomingCalls(e){let r=this.documents.getOrCreateDocument(lE.URI.parse(e.item.uri)),n=r.parseResult.value,i=(0,eT.findDeclarationNodeAtOffset)(n.$cstNode,r.textDocument.offsetAt(e.item.range.start),this.grammarConfig.nameRegexp);if(!i)return;let o=this.references.findReferences(i.element,{includeDeclaration:!1,onlyLocal:!1});return this.getIncomingCalls(i.element,o)}outgoingCalls(e){let r=this.documents.getOrCreateDocument(lE.URI.parse(e.item.uri)),n=r.parseResult.value,i=(0,eT.findDeclarationNodeAtOffset)(n.$cstNode,r.textDocument.offsetAt(e.item.range.start),this.grammarConfig.nameRegexp);if(i)return this.getOutgoingCalls(i.element)}};Vf.AbstractCallHierarchyProvider=tT});var pE=h(Yf=>{"use strict";Object.defineProperty(Yf,"__esModule",{value:!0});Yf.LangiumGrammarCallHierarchyProvider=void 0;var fE=et(),Kz=dE(),rT=Ye(),Bz=pt(),zf=Ke(),nT=class extends Kz.AbstractCallHierarchyProvider{getIncomingCalls(e,r){if(!(0,zf.isParserRule)(e))return;let n=new Map;if(r.forEach(i=>{let a=this.documents.getOrCreateDocument(i.sourceUri).parseResult.value;if(!a.$cstNode)return;let s=(0,Bz.findLeafNodeAtOffset)(a.$cstNode,i.segment.offset);if(!s)return;let u=(0,rT.getContainerOfType)(s.element,zf.isParserRule);if(!u||!u.$cstNode)return;let d=this.nameProvider.getNameNode(u);if(!d)return;let p=i.sourceUri.toString(),m=p+"@"+d.text;n.has(m)?n.set(m,{parserRule:u.$cstNode,nameNode:d,targetNodes:[...n.get(m).targetNodes,s],docUri:p}):n.set(m,{parserRule:u.$cstNode,nameNode:d,targetNodes:[s],docUri:p})}),n.size!==0)return Array.from(n.values()).map(i=>({from:{kind:fE.SymbolKind.Method,name:i.nameNode.text,range:i.parserRule.range,selectionRange:i.nameNode.range,uri:i.docUri},fromRanges:i.targetNodes.map(o=>o.range)}))}getOutgoingCalls(e){if(!(0,zf.isParserRule)(e))return;let r=(0,rT.streamAllContents)(e).filter(zf.isRuleCall).toArray(),n=new Map;if(r.forEach(i=>{var o;let a=i.$cstNode;if(!a)return;let s=(o=i.rule.ref)===null||o===void 0?void 0:o.$cstNode;if(!s)return;let u=this.nameProvider.getNameNode(s.element);if(!u)return;let d=(0,rT.getDocument)(s.element).uri.toString(),p=d+"@"+u.text;n.has(p)?n.set(p,{refCstNode:s,to:u,from:[...n.get(p).from,a.range],docUri:d}):n.set(p,{refCstNode:s,to:u,from:[a.range],docUri:d})}),n.size!==0)return Array.from(n.values()).map(i=>({to:{kind:fE.SymbolKind.Method,name:i.to.text,range:i.refCstNode.range,selectionRange:i.to.range,uri:i.docUri},fromRanges:i.from}))}};Yf.LangiumGrammarCallHierarchyProvider=nT});var iT=h(Yo=>{"use strict";Object.defineProperty(Yo,"__esModule",{value:!0});Yo.isInferredAndDeclared=Yo.isInferred=Yo.isDeclared=void 0;function Vz(t){return t&&"declared"in t}Yo.isDeclared=Vz;function zz(t){return t&&"inferred"in t}Yo.isInferred=zz;function Yz(t){return t&&"inferred"in t&&"declared"in t}Yo.isInferredAndDeclared=Yz});var mE=h(Zf=>{"use strict";Object.defineProperty(Zf,"__esModule",{value:!0});Zf.LangiumGrammarValidationResourcesCollector=void 0;var Xz=cn(),Qf=tr(),Xf=Ke(),hE=Xt(),Jz=xy(),Jf=ro(),Qz=$o(),Zz=iT(),oT=class{constructor(e){this.documents=e.shared.workspace.LangiumDocuments}collectValidationResources(e){let r=(0,Jz.collectTypeResources)(e,this.documents),n=this.collectValidationInfo(r),i=this.collectSuperProperties(r),o=this.collectSubTypesAndAliases(n);return{typeToValidationInfo:n,typeToSuperProperties:i,typeToAliases:o}}collectValidationInfo({astResources:e,inferred:r,declared:n}){let i=new Map,o=e3(e);for(let s of(0,Jf.mergeTypesAndInterfaces)(r))i.set(s.name,{inferred:s,inferredNodes:o.get(s.name)});let a=(0,Qf.stream)(e.interfaces).concat(e.types).reduce((s,u)=>s.set(u.name,u),new Map);for(let s of(0,Jf.mergeTypesAndInterfaces)(n)){let u=a.get(s.name);if(u){let d=i.get(s.name);i.set(s.name,d?Object.assign(Object.assign({},d),{declared:s,declaredNode:u}):{declared:s,declaredNode:u})}}return i}collectSuperProperties({inferred:e,declared:r}){let n=new Map;for(let i of(0,Jf.mergeInterfaces)(e,r))n.set(i.name,Array.from(i.superProperties.values()));return n}collectSubTypesAndAliases(e){let r=(0,Qf.stream)(e.entries()).reduce((s,[u,d])=>(s.set(u,(0,Zz.isDeclared)(d)?d.declared:d.inferred),s),new Map);(0,Jf.addSubTypes)(r);let n=new Map;function i(s,u){let d=n.get(s);d?d.add(u):n.set(s,new Set([u]))}let o=Array.from(r.values()).filter(s=>s.subTypes.size===0),a=new Set;for(let s of o){a.add(s),i(s.name,s.name);for(let u of(0,Qf.stream)(s.realSuperTypes)){i(u,s.name);let d=r.get(u);d&&!a.has(d)&&o.push(d)}(0,Qz.isUnionType)(s)&&s.alternatives.length===1&&s.alternatives.filter(u=>!u.array&&!u.reference).flatMap(u=>u.types).forEach(u=>{i(s.name,u),i(u,u),i(u,s.name)})}return n}};Zf.LangiumGrammarValidationResourcesCollector=oT;function e3({parserRules:t,datatypeRules:e}){let r=new Xz.MultiMap;(0,Qf.stream)(t).concat(e).forEach(i=>r.add((0,hE.getRuleType)(i),i));function n(i){if((0,Xf.isAction)(i)){let o=(0,hE.getActionType)(i);o&&r.add(o,i)}((0,Xf.isAlternatives)(i)||(0,Xf.isGroup)(i)||(0,Xf.isUnorderedGroup)(i))&&i.elements.forEach(o=>n(o))}return t.forEach(i=>n(i.definition)),r}});var yE=h(wn=>{"use strict";var t3=wn&&wn.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var i=Object.getOwnPropertyDescriptor(e,r);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,i)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),r3=wn&&wn.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),n3=wn&&wn.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var r in t)r!=="default"&&Object.prototype.hasOwnProperty.call(t,r)&&t3(e,t,r);return r3(e,t),e};Object.defineProperty(wn,"__esModule",{value:!0});wn.LangiumGrammarTypesValidator=wn.registerTypeValidationChecks=void 0;var i3=cn(),Fs=n3(Ke()),o3=Xt(),Si=$o(),sT=ro(),Da=iT();function a3(t){let e=t.validation.ValidationRegistry,r=t.validation.LangiumGrammarTypesValidator,n={Action:[r.checkActionIsNotUnionType],Grammar:[r.checkDeclaredTypesConsistency,r.checkDeclaredAndInferredTypesConsistency]};e.register(n,r)}wn.registerTypeValidationChecks=a3;var aT=class{checkDeclaredTypesConsistency(e,r){var n;let i=(n=e.$document)===null||n===void 0?void 0:n.validationResources;if(i){for(let o of i.typeToValidationInfo.values())if((0,Da.isDeclared)(o)&&(0,Si.isInterfaceType)(o.declared)&&Fs.isInterface(o.declaredNode)){let a=o;u3(a,i.typeToValidationInfo,r),c3(a,i.typeToSuperProperties,r)}}}checkDeclaredAndInferredTypesConsistency(e,r){var n;let i=(n=e.$document)===null||n===void 0?void 0:n.validationResources;if(i)for(let o of i.typeToValidationInfo.values())(0,Da.isInferred)(o)&&o.inferred instanceof Si.InterfaceType&&s3(o.inferred,r),(0,Da.isInferredAndDeclared)(o)&&f3(o,i.typeToAliases,r)}checkActionIsNotUnionType(e,r){Fs.isType(e.type)&&r("error","Actions cannot create union types.",{node:e,property:"type"})}};wn.LangiumGrammarTypesValidator=aT;function s3(t,e){t.properties.filter(r=>r.typeAlternatives.length>1).forEach(r=>{let n=o=>o.reference?"ref":"other",i=n(r.typeAlternatives[0]);if(r.typeAlternatives.slice(1).some(o=>n(o)!==i)){let o=r.astNodes.values().next().value;o&&e("error",`Mixing a cross-reference with other types is not supported. Consider splitting property "${r.name}" into two or more different properties.`,{node:o})}})}function u3({declared:t,declaredNode:e},r,n){t.printingSuperTypes.forEach((i,o)=>{let a=r.get(i);a&&(((0,Da.isInferred)(a)&&(0,Si.isUnionType)(a.inferred)||(0,Da.isDeclared)(a)&&(0,Si.isUnionType)(a.declared))&&n("error","Interfaces cannot extend union types.",{node:e,property:"superTypes",index:o}),(0,Da.isInferred)(a)&&!(0,Da.isDeclared)(a)&&n("error","Extending an inferred type is discouraged.",{node:e,property:"superTypes",index:o}))})}function c3({declared:t,declaredNode:e},r,n){var i,o,a;let s=t.properties.reduce((p,m)=>p.add(m.name,m),new i3.MultiMap);for(let[p,m]of s.entriesGroupedByKey())if(m.length>1)for(let y of m)n("error",`Cannot have two properties with the same name '${p}'.`,{node:Array.from(y.astNodes)[0],property:"name"});let u=t.printingSuperTypes;for(let p=0;p<u.length;p++)for(let m=p+1;m<u.length;m++){let y=u[p],S=u[m],_=(i=r.get(y))!==null&&i!==void 0?i:[],w=(o=r.get(S))!==null&&o!==void 0?o:[],k=l3(_,w);k.length>0&&n("error",`Cannot simultaneously inherit from '${y}' and '${S}'. Their ${k.map(N=>"'"+N+"'").join(", ")} properties are not identical.`,{node:e,property:"name"})}let d=new Set;for(let p of u){let m=(a=r.get(p))!==null&&a!==void 0?a:[];for(let y of m)d.add(y.name)}for(let p of t.properties)if(d.has(p.name)){let y=e.attributes.find(S=>S.name===p.name);y&&n("error",`Cannot redeclare property '${p.name}'. It is already inherited from another interface.`,{node:y,property:"name"})}}function l3(t,e){let r=[];for(let n of t){let i=e.find(o=>o.name===n.name);i&&!d3(n,i)&&r.push(n.name)}return r}function d3(t,e){if(t.optional!==e.optional||t.typeAlternatives.length!==e.typeAlternatives.length)return!1;for(let r of t.typeAlternatives)if(!e.typeAlternatives.some(i=>i.array===r.array&&i.reference===r.reference&&i.types.length===r.types.length&&i.types.every(o=>r.types.includes(o))))return!1;return!0}function f3(t,e,r){let{inferred:n,declared:i,declaredNode:o,inferredNodes:a}=t,s=i.name,u=m=>y=>a.forEach(S=>r("error",`${y[-1]==="."?y.slice(0,-1):y}${m?` ${m}`:""}.`,S?.inferredType?{node:S?.inferredType,property:"name"}:{node:S,property:Fs.isAction(S)?"type":"name"})),d=(m,y)=>m.forEach(S=>r("error",y,{node:S,property:Fs.isAssignment(S)||Fs.isAction(S)?"feature":"name"})),p=m=>{a.forEach(y=>{Fs.isParserRule(y)&&(0,o3.extractAssignments)(y.definition).find(_=>_.feature===m)===void 0&&r("error",`Property '${m}' is missing in a rule '${y.name}', but is required in type '${s}'.`,{node:y,property:"parameters"})})};if((0,Si.isUnionType)(n)&&(0,Si.isUnionType)(i))p3(n.alternatives,i.alternatives,e,u(`in a rule that returns type '${s}'`));else if((0,Si.isInterfaceType)(n)&&(0,Si.isInterfaceType)(i))g3(n.superProperties,i.superProperties,e,u(`in a rule that returns type '${s}'`),d,p);else{let m=`Inferred and declared versions of type '${s}' both have to be interfaces or unions.`;u()(m),r("error",m,{node:o,property:"name"})}}function p3(t,e,r,n){let i=gE(t,e,r);for(let o of i)n(`A type '${o.typeAsString}' ${o.errorMessage}`)}function h3(t,e){let r=t.types.map(i=>{var o;return Array.from((o=e.get(i))!==null&&o!==void 0?o:new Set([i]))}),n=[];for(let i of r)if(n.length===0&&n.push([]),i.length===1)n.forEach(o=>o.push(i[0]));else{let o=JSON.parse(JSON.stringify(n));n=[];for(let a of i){let s=JSON.parse(JSON.stringify(o));s.forEach(u=>u.push(a)),n.push(...s)}}return n.map(i=>(0,sT.distinctAndSorted)(i).join(" | "))}function m3(t){let e=t.types.filter(r=>!r.startsWith("'"));return e.push("string"),(0,sT.distinctAndSorted)(e).join(" | ")}function gE(t,e,r){var n;let i=(u,d)=>u.array&&!d.array&&u.reference&&!d.reference?"can't be an array and a reference":!u.array&&d.array&&!u.reference&&d.reference?"has to be an array and a reference":u.array&&!d.array?"can't be an array":!u.array&&d.array?"has to be an array":u.reference&&!d.reference?"can't be a reference":!u.reference&&d.reference?"has to be a reference":"",o=t.reduce((u,d)=>u.set((0,sT.distinctAndSorted)(d.types).join(" | "),d),new Map),a=e.reduce((u,d)=>(h3(d,r).forEach(p=>u.set(p,d)),u),new Map),s=[];for(let[u,d]of o){let p=(n=a.get(u))!==null&&n!==void 0?n:a.get(m3(d));p?(p.array!==d.array||p.reference!==d.reference)&&s.push({typeAsString:u,errorMessage:i(d,p)}):s.push({typeAsString:u,errorMessage:"is not expected"})}return s}function g3(t,e,r,n,i,o){let a=(s,u)=>!(s.typeAlternatives.length===1&&s.typeAlternatives[0].array)&&!(u.typeAlternatives.length===1&&u.typeAlternatives[0].array);for(let[s,u]of t.entriesGroupedByKey()){let d=u[0],p=e.get(s)[0];if(p){let m=(0,Si.propertyTypesToString)(d.typeAlternatives),y=(0,Si.propertyTypesToString)(p.typeAlternatives);if(m!==y){let S=gE(d.typeAlternatives,p.typeAlternatives,r);if(S.length>0){let _=`The assigned type '${m}' is not compatible with the declared property '${s}' of type '${y}'`,w=S.map(k=>` '${k.typeAsString}' ${k.errorMessage}`).join("; ");i(d.astNodes,`${_}: ${w}.`)}}!p.optional&&d.optional&&a(d,p)&&o(s)}else i(d.astNodes,`A property '${s}' is not expected.`)}for(let[s,u]of e.entriesGroupedByKey())t.get(s).length===0&&!u.some(p=>p.optional)&&n(`A property '${s}' is expected.`)}});var uT=h(Oa=>{"use strict";Object.defineProperty(Oa,"__esModule",{value:!0});Oa.createLangiumGrammarServices=Oa.LangiumGrammarModule=void 0;var vE=ep(),_E=bc(),TE=AA(),RE=eS(),bE=o_(),y3=cS(),v3=lS(),_3=fS(),T3=pS(),R3=mS(),b3=bS(),C3=cE(),P3=pE(),A3=mE(),CE=yE(),S3=Cn(),E3=Vo();Oa.LangiumGrammarModule={validation:{LangiumGrammarValidator:t=>new bE.LangiumGrammarValidator(t),ValidationResourcesCollector:t=>new A3.LangiumGrammarValidationResourcesCollector(t),LangiumGrammarTypesValidator:()=>new CE.LangiumGrammarTypesValidator},lsp:{FoldingRangeProvider:t=>new v3.LangiumGrammarFoldingRangeProvider(t),CodeActionProvider:t=>new y3.LangiumGrammarCodeActionProvider(t),SemanticTokenProvider:t=>new T3.LangiumGrammarSemanticTokenProvider(t),Formatter:()=>new _3.LangiumGrammarFormatter,DefinitionProvider:t=>new C3.LangiumGrammarDefinitionProvider(t),CallHierarchyProvider:t=>new P3.LangiumGrammarCallHierarchyProvider(t)},references:{ScopeComputation:t=>new RE.LangiumGrammarScopeComputation(t),ScopeProvider:t=>new RE.LangiumGrammarScopeProvider(t),References:t=>new b3.LangiumGrammarReferences(t),NameProvider:()=>new R3.LangiumGrammarNameProvider}};function k3(t,e){let r=(0,_E.inject)((0,vE.createDefaultSharedModule)(t),TE.LangiumGrammarGeneratedSharedModule,e),n=(0,_E.inject)((0,vE.createDefaultModule)({shared:r}),TE.LangiumGrammarGeneratedModule,Oa.LangiumGrammarModule);return N3(r,n),r.ServiceRegistry.register(n),(0,bE.registerValidationChecks)(n),(0,CE.registerTypeValidationChecks)(n),{shared:r,grammar:n}}Oa.createLangiumGrammarServices=k3;function N3(t,e){t.workspace.DocumentBuilder.onBuildPhase(E3.DocumentState.IndexedReferences,async(n,i)=>{for(let o of n){await(0,S3.interruptAndCheck)(i);let a=e.validation.ValidationResourcesCollector,s=o.parseResult.value;o.validationResources=a.collectValidationResources(s)}})}});var cT=h(js=>{"use strict";Object.defineProperty(js,"__esModule",{value:!0});js.EmptyFileSystem=js.EmptyFileSystemProvider=void 0;var tp=class{readFile(){throw new Error("Method not implemented.")}readFileSync(){throw new Error("Method not implemented.")}async readDirectory(){return[]}};js.EmptyFileSystemProvider=tp;js.EmptyFileSystem={fileSystemProvider:()=>new tp}});var Yt=h(xe=>{"use strict";var w3=xe&&xe.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var i=Object.getOwnPropertyDescriptor(e,r);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,i)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),D3=xe&&xe.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),O3=xe&&xe.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var r in t)r!=="default"&&Object.prototype.hasOwnProperty.call(t,r)&&w3(e,t,r);return D3(e,t),e};Object.defineProperty(xe,"__esModule",{value:!0});xe.createServicesForGrammar=xe.loadGrammarFromJson=xe.findNameAssignment=xe.findAssignment=xe.findNodesForKeywordInternal=xe.findNodeForKeyword=xe.findNodesForKeyword=xe.findNodeForProperty=xe.findNodesForProperty=xe.isCommentTerminal=xe.getCrossReferenceTerminal=xe.getAllReachableRules=xe.getEntryRule=void 0;var SE=to(),PE=ep(),AE=bc(),q3=My(),en=O3(Ke()),I3=Xt(),EE=uT(),x3=Xr(),Us=Ye(),L3=pt(),lT=cT();function kE(t){return t.rules.find(e=>en.isParserRule(e)&&e.entry)}xe.getEntryRule=kE;function M3(t,e){let r=new Set,n=kE(t);if(!n)return new Set(t.rules);NE(n,r,e);let i=new Set;for(let o of t.rules)(r.has(o.name)||en.isTerminalRule(o)&&o.hidden)&&i.add(o);return i}xe.getAllReachableRules=M3;function NE(t,e,r){e.add(t.name),(0,Us.streamAllContents)(t).forEach(n=>{if(en.isRuleCall(n)||r&&en.isTerminalRuleCall(n)){let i=n.rule.ref;i&&!e.has(i.name)&&NE(i,e,r)}})}function $3(t){if(t.terminal)return t.terminal;if(t.type.ref){let e=wE(t.type.ref);return e?.terminal}}xe.getCrossReferenceTerminal=$3;function F3(t){return t.hidden&&!" ".match((0,I3.terminalRegex)(t))}xe.isCommentTerminal=F3;function j3(t,e){return!t||!e?[]:dT(t,e,t.element,!0)}xe.findNodesForProperty=j3;function U3(t,e,r){if(!t||!e)return;let n=dT(t,e,t.element,!0);if(n.length!==0)return r!==void 0?r=Math.max(0,Math.min(r,n.length-1)):r=0,n[r]}xe.findNodeForProperty=U3;function dT(t,e,r,n){if(!n){let i=(0,Us.getContainerOfType)(t.feature,en.isAssignment);if(i&&i.feature===e)return[t]}return(0,x3.isCompositeCstNode)(t)&&t.element===r?t.children.flatMap(i=>dT(i,e,r,!1)):[]}function G3(t,e){return t?fT(t,e,t?.element):[]}xe.findNodesForKeyword=G3;function W3(t,e,r){if(!t)return;let n=fT(t,e,t?.element);if(n.length!==0)return r!==void 0?r=Math.max(0,Math.min(r,n.length-1)):r=0,n[r]}xe.findNodeForKeyword=W3;function fT(t,e,r){if(t.element!==r)return[];if(en.isKeyword(t.feature)&&t.feature.value===e)return[t];let n=(0,L3.streamCst)(t).iterator(),i,o=[];do if(i=n.next(),!i.done){let a=i.value;a.element===r?en.isKeyword(a.feature)&&a.feature.value===e&&o.push(a):n.prune()}while(!i.done);return o}xe.findNodesForKeywordInternal=fT;function H3(t){var e;let r=t.element;for(;r===((e=t.parent)===null||e===void 0?void 0:e.element);){let n=(0,Us.getContainerOfType)(t.feature,en.isAssignment);if(n)return n;t=t.parent}}xe.findAssignment=H3;function wE(t){return en.isInferredType(t)&&(t=t.$container),DE(t,new Map)}xe.findNameAssignment=wE;function DE(t,e){var r;function n(i,o){let a;return(0,Us.getContainerOfType)(i,en.isAssignment)||(a=DE(o,e)),e.set(t,a),a}if(e.has(t))return e.get(t);e.set(t,void 0);for(let i of(0,Us.streamAllContents)(t)){if(en.isAssignment(i)&&i.feature.toLowerCase()==="name")return e.set(t,i),i;if(en.isRuleCall(i)&&en.isParserRule(i.rule.ref))return n(i,i.rule.ref);if(en.isAtomType(i)&&(!((r=i?.refType)===null||r===void 0)&&r.ref))return n(i,i.refType.ref)}}function K3(t){var e;let r=(0,EE.createLangiumGrammarServices)(lT.EmptyFileSystem).grammar,n=r.serializer.JsonSerializer.deserialize(t);return r.shared.workspace.LangiumDocumentFactory.fromModel(n,SE.URI.parse(`memory://${(e=n.name)!==null&&e!==void 0?e:"grammar"}.langium`)),n}xe.loadGrammarFromJson=K3;async function B3(t){var e,r,n,i,o,a;let s=(e=t.grammarServices)!==null&&e!==void 0?e:(0,EE.createLangiumGrammarServices)(lT.EmptyFileSystem).grammar,u=SE.URI.parse("memory:///grammar.langium"),d=s.shared.workspace.LangiumDocumentFactory,p=typeof t.grammar=="string"?d.fromString(t.grammar,u):(0,Us.getDocument)(t.grammar),m=p.parseResult.value;await s.shared.workspace.DocumentBuilder.build([p],{validationChecks:"none"});let S=(r=t.parserConfig)!==null&&r!==void 0?r:{skipValidations:!1},_=(n=t.languageMetaData)!==null&&n!==void 0?n:{caseInsensitive:!1,fileExtensions:[`.${(o=(i=m.name)===null||i===void 0?void 0:i.toLowerCase())!==null&&o!==void 0?o:"unknown"}`],languageId:(a=m.name)!==null&&a!==void 0?a:"UNKNOWN"},w={AstReflection:()=>(0,q3.interpretAstReflection)(m)},k={Grammar:()=>m,LanguageMetaData:()=>_,parser:{ParserConfig:()=>S}},N=(0,AE.inject)((0,PE.createDefaultSharedModule)(lT.EmptyFileSystem),w,t.sharedModule),C=(0,AE.inject)((0,PE.createDefaultModule)({shared:N}),k,t.module);return N.ServiceRegistry.register(C),C}xe.createServicesForGrammar=B3});var OE=h(rp=>{"use strict";Object.defineProperty(rp,"__esModule",{value:!0});rp.createGrammarConfig=void 0;var V3=pt(),z3=Yt(),Y3=Rs(),X3=Ke(),J3=Xt();function Q3(t){let e=[],r=t.Grammar;for(let n of r.rules)(0,X3.isTerminalRule)(n)&&(0,z3.isCommentTerminal)(n)&&(0,Y3.isMultilineComment)((0,J3.terminalRegex)(n))&&e.push(n.name);return{multilineCommentRules:e,nameRegexp:V3.DefaultNameRegexp}}rp.createGrammarConfig=Q3});var pT=h(np=>{"use strict";Object.defineProperty(np,"__esModule",{value:!0});np.VERSION=void 0;np.VERSION="10.4.2"});var Gs=h((u_e,qE)=>{var Z3=Object.prototype;function e4(t){var e=t&&t.constructor,r=typeof e=="function"&&e.prototype||Z3;return t===r}qE.exports=e4});var hT=h((c_e,IE)=>{function t4(t,e){return function(r){return t(e(r))}}IE.exports=t4});var LE=h((l_e,xE)=>{var r4=hT(),n4=r4(Object.keys,Object);xE.exports=n4});var mT=h((d_e,ME)=>{var i4=Gs(),o4=LE(),a4=Object.prototype,s4=a4.hasOwnProperty;function u4(t){if(!i4(t))return o4(t);var e=[];for(var r in Object(t))s4.call(t,r)&&r!="constructor"&&e.push(r);return e}ME.exports=u4});var gT=h((f_e,$E)=>{var c4=typeof global=="object"&&global&&global.Object===Object&&global;$E.exports=c4});var Jn=h((p_e,FE)=>{var l4=gT(),d4=typeof self=="object"&&self&&self.Object===Object&&self,f4=l4||d4||Function("return this")();FE.exports=f4});var qa=h((h_e,jE)=>{var p4=Jn(),h4=p4.Symbol;jE.exports=h4});var HE=h((m_e,WE)=>{var UE=qa(),GE=Object.prototype,m4=GE.hasOwnProperty,g4=GE.toString,Fc=UE?UE.toStringTag:void 0;function y4(t){var e=m4.call(t,Fc),r=t[Fc];try{t[Fc]=void 0;var n=!0}catch{}var i=g4.call(t);return n&&(e?t[Fc]=r:delete t[Fc]),i}WE.exports=y4});var BE=h((g_e,KE)=>{var v4=Object.prototype,_4=v4.toString;function T4(t){return _4.call(t)}KE.exports=T4});var Xo=h((y_e,YE)=>{var VE=qa(),R4=HE(),b4=BE(),C4="[object Null]",P4="[object Undefined]",zE=VE?VE.toStringTag:void 0;function A4(t){return t==null?t===void 0?P4:C4:zE&&zE in Object(t)?R4(t):b4(t)}YE.exports=A4});var Qn=h((v_e,XE)=>{function S4(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}XE.exports=S4});var Ws=h((__e,JE)=>{var E4=Xo(),k4=Qn(),N4="[object AsyncFunction]",w4="[object Function]",D4="[object GeneratorFunction]",O4="[object Proxy]";function q4(t){if(!k4(t))return!1;var e=E4(t);return e==w4||e==D4||e==N4||e==O4}JE.exports=q4});var ZE=h((T_e,QE)=>{var I4=Jn(),x4=I4["__core-js_shared__"];QE.exports=x4});var rk=h((R_e,tk)=>{var yT=ZE(),ek=function(){var t=/[^.]+$/.exec(yT&&yT.keys&&yT.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function L4(t){return!!ek&&ek in t}tk.exports=L4});var vT=h((b_e,nk)=>{var M4=Function.prototype,$4=M4.toString;function F4(t){if(t!=null){try{return $4.call(t)}catch{}try{return t+""}catch{}}return""}nk.exports=F4});var ok=h((C_e,ik)=>{var j4=Ws(),U4=rk(),G4=Qn(),W4=vT(),H4=/[\\^$.*+?()[\]{}|]/g,K4=/^\[object .+?Constructor\]$/,B4=Function.prototype,V4=Object.prototype,z4=B4.toString,Y4=V4.hasOwnProperty,X4=RegExp("^"+z4.call(Y4).replace(H4,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function J4(t){if(!G4(t)||U4(t))return!1;var e=j4(t)?X4:K4;return e.test(W4(t))}ik.exports=J4});var sk=h((P_e,ak)=>{function Q4(t,e){return t?.[e]}ak.exports=Q4});var Jo=h((A_e,uk)=>{var Z4=ok(),e8=sk();function t8(t,e){var r=e8(t,e);return Z4(r)?r:void 0}uk.exports=t8});var lk=h((S_e,ck)=>{var r8=Jo(),n8=Jn(),i8=r8(n8,"DataView");ck.exports=i8});var ip=h((E_e,dk)=>{var o8=Jo(),a8=Jn(),s8=o8(a8,"Map");dk.exports=s8});var pk=h((k_e,fk)=>{var u8=Jo(),c8=Jn(),l8=u8(c8,"Promise");fk.exports=l8});var _T=h((N_e,hk)=>{var d8=Jo(),f8=Jn(),p8=d8(f8,"Set");hk.exports=p8});var gk=h((w_e,mk)=>{var h8=Jo(),m8=Jn(),g8=h8(m8,"WeakMap");mk.exports=g8});var Ks=h((D_e,Ck)=>{var TT=lk(),RT=ip(),bT=pk(),CT=_T(),PT=gk(),bk=Xo(),Hs=vT(),yk="[object Map]",y8="[object Object]",vk="[object Promise]",_k="[object Set]",Tk="[object WeakMap]",Rk="[object DataView]",v8=Hs(TT),_8=Hs(RT),T8=Hs(bT),R8=Hs(CT),b8=Hs(PT),Ia=bk;(TT&&Ia(new TT(new ArrayBuffer(1)))!=Rk||RT&&Ia(new RT)!=yk||bT&&Ia(bT.resolve())!=vk||CT&&Ia(new CT)!=_k||PT&&Ia(new PT)!=Tk)&&(Ia=function(t){var e=bk(t),r=e==y8?t.constructor:void 0,n=r?Hs(r):"";if(n)switch(n){case v8:return Rk;case _8:return yk;case T8:return vk;case R8:return _k;case b8:return Tk}return e});Ck.exports=Ia});var Zn=h((O_e,Pk)=>{function C8(t){return t!=null&&typeof t=="object"}Pk.exports=C8});var Sk=h((q_e,Ak)=>{var P8=Xo(),A8=Zn(),S8="[object Arguments]";function E8(t){return A8(t)&&P8(t)==S8}Ak.exports=E8});var jc=h((I_e,Nk)=>{var Ek=Sk(),k8=Zn(),kk=Object.prototype,N8=kk.hasOwnProperty,w8=kk.propertyIsEnumerable,D8=Ek(function(){return arguments}())?Ek:function(t){return k8(t)&&N8.call(t,"callee")&&!w8.call(t,"callee")};Nk.exports=D8});var Ve=h((x_e,wk)=>{var O8=Array.isArray;wk.exports=O8});var op=h((L_e,Dk)=>{var q8=9007199254740991;function I8(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=q8}Dk.exports=I8});var ei=h((M_e,Ok)=>{var x8=Ws(),L8=op();function M8(t){return t!=null&&L8(t.length)&&!x8(t)}Ok.exports=M8});var Ik=h(($_e,qk)=>{function $8(){return!1}qk.exports=$8});var Gc=h((Uc,Bs)=>{var F8=Jn(),j8=Ik(),Mk=typeof Uc=="object"&&Uc&&!Uc.nodeType&&Uc,xk=Mk&&typeof Bs=="object"&&Bs&&!Bs.nodeType&&Bs,U8=xk&&xk.exports===Mk,Lk=U8?F8.Buffer:void 0,G8=Lk?Lk.isBuffer:void 0,W8=G8||j8;Bs.exports=W8});var Fk=h((F_e,$k)=>{var H8=Xo(),K8=op(),B8=Zn(),V8="[object Arguments]",z8="[object Array]",Y8="[object Boolean]",X8="[object Date]",J8="[object Error]",Q8="[object Function]",Z8="[object Map]",e6="[object Number]",t6="[object Object]",r6="[object RegExp]",n6="[object Set]",i6="[object String]",o6="[object WeakMap]",a6="[object ArrayBuffer]",s6="[object DataView]",u6="[object Float32Array]",c6="[object Float64Array]",l6="[object Int8Array]",d6="[object Int16Array]",f6="[object Int32Array]",p6="[object Uint8Array]",h6="[object Uint8ClampedArray]",m6="[object Uint16Array]",g6="[object Uint32Array]",ft={};ft[u6]=ft[c6]=ft[l6]=ft[d6]=ft[f6]=ft[p6]=ft[h6]=ft[m6]=ft[g6]=!0;ft[V8]=ft[z8]=ft[a6]=ft[Y8]=ft[s6]=ft[X8]=ft[J8]=ft[Q8]=ft[Z8]=ft[e6]=ft[t6]=ft[r6]=ft[n6]=ft[i6]=ft[o6]=!1;function y6(t){return B8(t)&&K8(t.length)&&!!ft[H8(t)]}$k.exports=y6});var Vs=h((j_e,jk)=>{function v6(t){return function(e){return t(e)}}jk.exports=v6});var Kc=h((Wc,zs)=>{var _6=gT(),Uk=typeof Wc=="object"&&Wc&&!Wc.nodeType&&Wc,Hc=Uk&&typeof zs=="object"&&zs&&!zs.nodeType&&zs,T6=Hc&&Hc.exports===Uk,AT=T6&&_6.process,R6=function(){try{var t=Hc&&Hc.require&&Hc.require("util").types;return t||AT&&AT.binding&&AT.binding("util")}catch{}}();zs.exports=R6});var ap=h((U_e,Hk)=>{var b6=Fk(),C6=Vs(),Gk=Kc(),Wk=Gk&&Gk.isTypedArray,P6=Wk?C6(Wk):b6;Hk.exports=P6});var dn=h((G_e,Kk)=>{var A6=mT(),S6=Ks(),E6=jc(),k6=Ve(),N6=ei(),w6=Gc(),D6=Gs(),O6=ap(),q6="[object Map]",I6="[object Set]",x6=Object.prototype,L6=x6.hasOwnProperty;function M6(t){if(t==null)return!0;if(N6(t)&&(k6(t)||typeof t=="string"||typeof t.splice=="function"||w6(t)||O6(t)||E6(t)))return!t.length;var e=S6(t);if(e==q6||e==I6)return!t.size;if(D6(t))return!A6(t).length;for(var r in t)if(L6.call(t,r))return!1;return!0}Kk.exports=M6});var Ys=h((W_e,Bk)=>{function $6(t,e){for(var r=-1,n=t==null?0:t.length,i=Array(n);++r<n;)i[r]=e(t[r],r,t);return i}Bk.exports=$6});var zk=h((H_e,Vk)=>{function F6(){this.__data__=[],this.size=0}Vk.exports=F6});var Xs=h((K_e,Yk)=>{function j6(t,e){return t===e||t!==t&&e!==e}Yk.exports=j6});var Bc=h((B_e,Xk)=>{var U6=Xs();function G6(t,e){for(var r=t.length;r--;)if(U6(t[r][0],e))return r;return-1}Xk.exports=G6});var Qk=h((V_e,Jk)=>{var W6=Bc(),H6=Array.prototype,K6=H6.splice;function B6(t){var e=this.__data__,r=W6(e,t);if(r<0)return!1;var n=e.length-1;return r==n?e.pop():K6.call(e,r,1),--this.size,!0}Jk.exports=B6});var eN=h((z_e,Zk)=>{var V6=Bc();function z6(t){var e=this.__data__,r=V6(e,t);return r<0?void 0:e[r][1]}Zk.exports=z6});var rN=h((Y_e,tN)=>{var Y6=Bc();function X6(t){return Y6(this.__data__,t)>-1}tN.exports=X6});var iN=h((X_e,nN)=>{var J6=Bc();function Q6(t,e){var r=this.__data__,n=J6(r,t);return n<0?(++this.size,r.push([t,e])):r[n][1]=e,this}nN.exports=Q6});var Vc=h((J_e,oN)=>{var Z6=zk(),e7=Qk(),t7=eN(),r7=rN(),n7=iN();function Js(t){var e=-1,r=t==null?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}Js.prototype.clear=Z6;Js.prototype.delete=e7;Js.prototype.get=t7;Js.prototype.has=r7;Js.prototype.set=n7;oN.exports=Js});var sN=h((Q_e,aN)=>{var i7=Vc();function o7(){this.__data__=new i7,this.size=0}aN.exports=o7});var cN=h((Z_e,uN)=>{function a7(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r}uN.exports=a7});var dN=h((eTe,lN)=>{function s7(t){return this.__data__.get(t)}lN.exports=s7});var pN=h((tTe,fN)=>{function u7(t){return this.__data__.has(t)}fN.exports=u7});var zc=h((rTe,hN)=>{var c7=Jo(),l7=c7(Object,"create");hN.exports=l7});var yN=h((nTe,gN)=>{var mN=zc();function d7(){this.__data__=mN?mN(null):{},this.size=0}gN.exports=d7});var _N=h((iTe,vN)=>{function f7(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}vN.exports=f7});var RN=h((oTe,TN)=>{var p7=zc(),h7="__lodash_hash_undefined__",m7=Object.prototype,g7=m7.hasOwnProperty;function y7(t){var e=this.__data__;if(p7){var r=e[t];return r===h7?void 0:r}return g7.call(e,t)?e[t]:void 0}TN.exports=y7});var CN=h((aTe,bN)=>{var v7=zc(),_7=Object.prototype,T7=_7.hasOwnProperty;function R7(t){var e=this.__data__;return v7?e[t]!==void 0:T7.call(e,t)}bN.exports=R7});var AN=h((sTe,PN)=>{var b7=zc(),C7="__lodash_hash_undefined__";function P7(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=b7&&e===void 0?C7:e,this}PN.exports=P7});var EN=h((uTe,SN)=>{var A7=yN(),S7=_N(),E7=RN(),k7=CN(),N7=AN();function Qs(t){var e=-1,r=t==null?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}Qs.prototype.clear=A7;Qs.prototype.delete=S7;Qs.prototype.get=E7;Qs.prototype.has=k7;Qs.prototype.set=N7;SN.exports=Qs});var wN=h((cTe,NN)=>{var kN=EN(),w7=Vc(),D7=ip();function O7(){this.size=0,this.__data__={hash:new kN,map:new(D7||w7),string:new kN}}NN.exports=O7});var ON=h((lTe,DN)=>{function q7(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}DN.exports=q7});var Yc=h((dTe,qN)=>{var I7=ON();function x7(t,e){var r=t.__data__;return I7(e)?r[typeof e=="string"?"string":"hash"]:r.map}qN.exports=x7});var xN=h((fTe,IN)=>{var L7=Yc();function M7(t){var e=L7(this,t).delete(t);return this.size-=e?1:0,e}IN.exports=M7});var MN=h((pTe,LN)=>{var $7=Yc();function F7(t){return $7(this,t).get(t)}LN.exports=F7});var FN=h((hTe,$N)=>{var j7=Yc();function U7(t){return j7(this,t).has(t)}$N.exports=U7});var UN=h((mTe,jN)=>{var G7=Yc();function W7(t,e){var r=G7(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this}jN.exports=W7});var sp=h((gTe,GN)=>{var H7=wN(),K7=xN(),B7=MN(),V7=FN(),z7=UN();function Zs(t){var e=-1,r=t==null?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}Zs.prototype.clear=H7;Zs.prototype.delete=K7;Zs.prototype.get=B7;Zs.prototype.has=V7;Zs.prototype.set=z7;GN.exports=Zs});var HN=h((yTe,WN)=>{var Y7=Vc(),X7=ip(),J7=sp(),Q7=200;function Z7(t,e){var r=this.__data__;if(r instanceof Y7){var n=r.__data__;if(!X7||n.length<Q7-1)return n.push([t,e]),this.size=++r.size,this;r=this.__data__=new J7(n)}return r.set(t,e),this.size=r.size,this}WN.exports=Z7});var up=h((vTe,KN)=>{var e5=Vc(),t5=sN(),r5=cN(),n5=dN(),i5=pN(),o5=HN();function eu(t){var e=this.__data__=new e5(t);this.size=e.size}eu.prototype.clear=t5;eu.prototype.delete=r5;eu.prototype.get=n5;eu.prototype.has=i5;eu.prototype.set=o5;KN.exports=eu});var VN=h((_Te,BN)=>{var a5="__lodash_hash_undefined__";function s5(t){return this.__data__.set(t,a5),this}BN.exports=s5});var YN=h((TTe,zN)=>{function u5(t){return this.__data__.has(t)}zN.exports=u5});var lp=h((RTe,XN)=>{var c5=sp(),l5=VN(),d5=YN();function cp(t){var e=-1,r=t==null?0:t.length;for(this.__data__=new c5;++e<r;)this.add(t[e])}cp.prototype.add=cp.prototype.push=l5;cp.prototype.has=d5;XN.exports=cp});var ST=h((bTe,JN)=>{function f5(t,e){for(var r=-1,n=t==null?0:t.length;++r<n;)if(e(t[r],r,t))return!0;return!1}JN.exports=f5});var dp=h((CTe,QN)=>{function p5(t,e){return t.has(e)}QN.exports=p5});var ET=h((PTe,ZN)=>{var h5=lp(),m5=ST(),g5=dp(),y5=1,v5=2;function _5(t,e,r,n,i,o){var a=r&y5,s=t.length,u=e.length;if(s!=u&&!(a&&u>s))return!1;var d=o.get(t),p=o.get(e);if(d&&p)return d==e&&p==t;var m=-1,y=!0,S=r&v5?new h5:void 0;for(o.set(t,e),o.set(e,t);++m<s;){var _=t[m],w=e[m];if(n)var k=a?n(w,_,m,e,t,o):n(_,w,m,t,e,o);if(k!==void 0){if(k)continue;y=!1;break}if(S){if(!m5(e,function(N,C){if(!g5(S,C)&&(_===N||i(_,N,r,n,o)))return S.push(C)})){y=!1;break}}else if(!(_===w||i(_,w,r,n,o))){y=!1;break}}return o.delete(t),o.delete(e),y}ZN.exports=_5});var kT=h((ATe,ew)=>{var T5=Jn(),R5=T5.Uint8Array;ew.exports=R5});var rw=h((STe,tw)=>{function b5(t){var e=-1,r=Array(t.size);return t.forEach(function(n,i){r[++e]=[i,n]}),r}tw.exports=b5});var fp=h((ETe,nw)=>{function C5(t){var e=-1,r=Array(t.size);return t.forEach(function(n){r[++e]=n}),r}nw.exports=C5});var uw=h((kTe,sw)=>{var iw=qa(),ow=kT(),P5=Xs(),A5=ET(),S5=rw(),E5=fp(),k5=1,N5=2,w5="[object Boolean]",D5="[object Date]",O5="[object Error]",q5="[object Map]",I5="[object Number]",x5="[object RegExp]",L5="[object Set]",M5="[object String]",$5="[object Symbol]",F5="[object ArrayBuffer]",j5="[object DataView]",aw=iw?iw.prototype:void 0,NT=aw?aw.valueOf:void 0;function U5(t,e,r,n,i,o,a){switch(r){case j5:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case F5:return!(t.byteLength!=e.byteLength||!o(new ow(t),new ow(e)));case w5:case D5:case I5:return P5(+t,+e);case O5:return t.name==e.name&&t.message==e.message;case x5:case M5:return t==e+"";case q5:var s=S5;case L5:var u=n&k5;if(s||(s=E5),t.size!=e.size&&!u)return!1;var d=a.get(t);if(d)return d==e;n|=N5,a.set(t,e);var p=A5(s(t),s(e),n,i,o,a);return a.delete(t),p;case $5:if(NT)return NT.call(t)==NT.call(e)}return!1}sw.exports=U5});var pp=h((NTe,cw)=>{function G5(t,e){for(var r=-1,n=e.length,i=t.length;++r<n;)t[i+r]=e[r];return t}cw.exports=G5});var wT=h((wTe,lw)=>{var W5=pp(),H5=Ve();function K5(t,e,r){var n=e(t);return H5(t)?n:W5(n,r(t))}lw.exports=K5});var hp=h((DTe,dw)=>{function B5(t,e){for(var r=-1,n=t==null?0:t.length,i=0,o=[];++r<n;){var a=t[r];e(a,r,t)&&(o[i++]=a)}return o}dw.exports=B5});var DT=h((OTe,fw)=>{function V5(){return[]}fw.exports=V5});var mp=h((qTe,hw)=>{var z5=hp(),Y5=DT(),X5=Object.prototype,J5=X5.propertyIsEnumerable,pw=Object.getOwnPropertySymbols,Q5=pw?function(t){return t==null?[]:(t=Object(t),z5(pw(t),function(e){return J5.call(t,e)}))}:Y5;hw.exports=Q5});var gw=h((ITe,mw)=>{function Z5(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}mw.exports=Z5});var Xc=h((xTe,yw)=>{var e9=9007199254740991,t9=/^(?:0|[1-9]\d*)$/;function r9(t,e){var r=typeof t;return e=e??e9,!!e&&(r=="number"||r!="symbol"&&t9.test(t))&&t>-1&&t%1==0&&t<e}yw.exports=r9});var OT=h((LTe,vw)=>{var n9=gw(),i9=jc(),o9=Ve(),a9=Gc(),s9=Xc(),u9=ap(),c9=Object.prototype,l9=c9.hasOwnProperty;function d9(t,e){var r=o9(t),n=!r&&i9(t),i=!r&&!n&&a9(t),o=!r&&!n&&!i&&u9(t),a=r||n||i||o,s=a?n9(t.length,String):[],u=s.length;for(var d in t)(e||l9.call(t,d))&&!(a&&(d=="length"||i&&(d=="offset"||d=="parent")||o&&(d=="buffer"||d=="byteLength"||d=="byteOffset")||s9(d,u)))&&s.push(d);return s}vw.exports=d9});var fn=h((MTe,_w)=>{var f9=OT(),p9=mT(),h9=ei();function m9(t){return h9(t)?f9(t):p9(t)}_w.exports=m9});var qT=h(($Te,Tw)=>{var g9=wT(),y9=mp(),v9=fn();function _9(t){return g9(t,v9,y9)}Tw.exports=_9});var Cw=h((FTe,bw)=>{var Rw=qT(),T9=1,R9=Object.prototype,b9=R9.hasOwnProperty;function C9(t,e,r,n,i,o){var a=r&T9,s=Rw(t),u=s.length,d=Rw(e),p=d.length;if(u!=p&&!a)return!1;for(var m=u;m--;){var y=s[m];if(!(a?y in e:b9.call(e,y)))return!1}var S=o.get(t),_=o.get(e);if(S&&_)return S==e&&_==t;var w=!0;o.set(t,e),o.set(e,t);for(var k=a;++m<u;){y=s[m];var N=t[y],C=e[y];if(n)var E=a?n(C,N,y,e,t,o):n(N,C,y,t,e,o);if(!(E===void 0?N===C||i(N,C,r,n,o):E)){w=!1;break}k||(k=y=="constructor")}if(w&&!k){var L=t.constructor,U=e.constructor;L!=U&&"constructor"in t&&"constructor"in e&&!(typeof L=="function"&&L instanceof L&&typeof U=="function"&&U instanceof U)&&(w=!1)}return o.delete(t),o.delete(e),w}bw.exports=C9});var Dw=h((jTe,ww)=>{var IT=up(),P9=ET(),A9=uw(),S9=Cw(),Pw=Ks(),Aw=Ve(),Sw=Gc(),E9=ap(),k9=1,Ew="[object Arguments]",kw="[object Array]",gp="[object Object]",N9=Object.prototype,Nw=N9.hasOwnProperty;function w9(t,e,r,n,i,o){var a=Aw(t),s=Aw(e),u=a?kw:Pw(t),d=s?kw:Pw(e);u=u==Ew?gp:u,d=d==Ew?gp:d;var p=u==gp,m=d==gp,y=u==d;if(y&&Sw(t)){if(!Sw(e))return!1;a=!0,p=!1}if(y&&!p)return o||(o=new IT),a||E9(t)?P9(t,e,r,n,i,o):A9(t,e,u,r,n,i,o);if(!(r&k9)){var S=p&&Nw.call(t,"__wrapped__"),_=m&&Nw.call(e,"__wrapped__");if(S||_){var w=S?t.value():t,k=_?e.value():e;return o||(o=new IT),i(w,k,r,n,o)}}return y?(o||(o=new IT),S9(t,e,r,n,i,o)):!1}ww.exports=w9});var xT=h((UTe,Iw)=>{var D9=Dw(),Ow=Zn();function qw(t,e,r,n,i){return t===e?!0:t==null||e==null||!Ow(t)&&!Ow(e)?t!==t&&e!==e:D9(t,e,r,n,qw,i)}Iw.exports=qw});var Lw=h((GTe,xw)=>{var O9=up(),q9=xT(),I9=1,x9=2;function L9(t,e,r,n){var i=r.length,o=i,a=!n;if(t==null)return!o;for(t=Object(t);i--;){var s=r[i];if(a&&s[2]?s[1]!==t[s[0]]:!(s[0]in t))return!1}for(;++i<o;){s=r[i];var u=s[0],d=t[u],p=s[1];if(a&&s[2]){if(d===void 0&&!(u in t))return!1}else{var m=new O9;if(n)var y=n(d,p,u,t,e,m);if(!(y===void 0?q9(p,d,I9|x9,n,m):y))return!1}}return!0}xw.exports=L9});var LT=h((WTe,Mw)=>{var M9=Qn();function $9(t){return t===t&&!M9(t)}Mw.exports=$9});var Fw=h((HTe,$w)=>{var F9=LT(),j9=fn();function U9(t){for(var e=j9(t),r=e.length;r--;){var n=e[r],i=t[n];e[r]=[n,i,F9(i)]}return e}$w.exports=U9});var MT=h((KTe,jw)=>{function G9(t,e){return function(r){return r==null?!1:r[t]===e&&(e!==void 0||t in Object(r))}}jw.exports=G9});var Gw=h((BTe,Uw)=>{var W9=Lw(),H9=Fw(),K9=MT();function B9(t){var e=H9(t);return e.length==1&&e[0][2]?K9(e[0][0],e[0][1]):function(r){return r===t||W9(r,t,e)}}Uw.exports=B9});var tu=h((VTe,Ww)=>{var V9=Xo(),z9=Zn(),Y9="[object Symbol]";function X9(t){return typeof t=="symbol"||z9(t)&&V9(t)==Y9}Ww.exports=X9});var yp=h((zTe,Hw)=>{var J9=Ve(),Q9=tu(),Z9=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,eY=/^\w*$/;function tY(t,e){if(J9(t))return!1;var r=typeof t;return r=="number"||r=="symbol"||r=="boolean"||t==null||Q9(t)?!0:eY.test(t)||!Z9.test(t)||e!=null&&t in Object(e)}Hw.exports=tY});var Vw=h((YTe,Bw)=>{var Kw=sp(),rY="Expected a function";function $T(t,e){if(typeof t!="function"||e!=null&&typeof e!="function")throw new TypeError(rY);var r=function(){var n=arguments,i=e?e.apply(this,n):n[0],o=r.cache;if(o.has(i))return o.get(i);var a=t.apply(this,n);return r.cache=o.set(i,a)||o,a};return r.cache=new($T.Cache||Kw),r}$T.Cache=Kw;Bw.exports=$T});var Yw=h((XTe,zw)=>{var nY=Vw(),iY=500;function oY(t){var e=nY(t,function(n){return r.size===iY&&r.clear(),n}),r=e.cache;return e}zw.exports=oY});var Jw=h((JTe,Xw)=>{var aY=Yw(),sY=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,uY=/\\(\\)?/g,cY=aY(function(t){var e=[];return t.charCodeAt(0)===46&&e.push(""),t.replace(sY,function(r,n,i,o){e.push(i?o.replace(uY,"$1"):n||r)}),e});Xw.exports=cY});var nD=h((QTe,rD)=>{var Qw=qa(),lY=Ys(),dY=Ve(),fY=tu(),pY=1/0,Zw=Qw?Qw.prototype:void 0,eD=Zw?Zw.toString:void 0;function tD(t){if(typeof t=="string")return t;if(dY(t))return lY(t,tD)+"";if(fY(t))return eD?eD.call(t):"";var e=t+"";return e=="0"&&1/t==-pY?"-0":e}rD.exports=tD});var FT=h((ZTe,iD)=>{var hY=nD();function mY(t){return t==null?"":hY(t)}iD.exports=mY});var Jc=h((eRe,oD)=>{var gY=Ve(),yY=yp(),vY=Jw(),_Y=FT();function TY(t,e){return gY(t)?t:yY(t,e)?[t]:vY(_Y(t))}oD.exports=TY});var ru=h((tRe,aD)=>{var RY=tu(),bY=1/0;function CY(t){if(typeof t=="string"||RY(t))return t;var e=t+"";return e=="0"&&1/t==-bY?"-0":e}aD.exports=CY});var vp=h((rRe,sD)=>{var PY=Jc(),AY=ru();function SY(t,e){e=PY(e,t);for(var r=0,n=e.length;t!=null&&r<n;)t=t[AY(e[r++])];return r&&r==n?t:void 0}sD.exports=SY});var cD=h((nRe,uD)=>{var EY=vp();function kY(t,e,r){var n=t==null?void 0:EY(t,e);return n===void 0?r:n}uD.exports=kY});var dD=h((iRe,lD)=>{function NY(t,e){return t!=null&&e in Object(t)}lD.exports=NY});var jT=h((oRe,fD)=>{var wY=Jc(),DY=jc(),OY=Ve(),qY=Xc(),IY=op(),xY=ru();function LY(t,e,r){e=wY(e,t);for(var n=-1,i=e.length,o=!1;++n<i;){var a=xY(e[n]);if(!(o=t!=null&&r(t,a)))break;t=t[a]}return o||++n!=i?o:(i=t==null?0:t.length,!!i&&IY(i)&&qY(a,i)&&(OY(t)||DY(t)))}fD.exports=LY});var hD=h((aRe,pD)=>{var MY=dD(),$Y=jT();function FY(t,e){return t!=null&&$Y(t,e,MY)}pD.exports=FY});var gD=h((sRe,mD)=>{var jY=xT(),UY=cD(),GY=hD(),WY=yp(),HY=LT(),KY=MT(),BY=ru(),VY=1,zY=2;function YY(t,e){return WY(t)&&HY(e)?KY(BY(t),e):function(r){var n=UY(r,t);return n===void 0&&n===e?GY(r,t):jY(e,n,VY|zY)}}mD.exports=YY});var xa=h((uRe,yD)=>{function XY(t){return t}yD.exports=XY});var _D=h((cRe,vD)=>{function JY(t){return function(e){return e?.[t]}}vD.exports=JY});var RD=h((lRe,TD)=>{var QY=vp();function ZY(t){return function(e){return QY(e,t)}}TD.exports=ZY});var CD=h((dRe,bD)=>{var eX=_D(),tX=RD(),rX=yp(),nX=ru();function iX(t){return rX(t)?eX(nX(t)):tX(t)}bD.exports=iX});var Dn=h((fRe,PD)=>{var oX=Gw(),aX=gD(),sX=xa(),uX=Ve(),cX=CD();function lX(t){return typeof t=="function"?t:t==null?sX:typeof t=="object"?uX(t)?aX(t[0],t[1]):oX(t):cX(t)}PD.exports=lX});var SD=h((pRe,AD)=>{function dX(t){return function(e,r,n){for(var i=-1,o=Object(e),a=n(e),s=a.length;s--;){var u=a[t?s:++i];if(r(o[u],u,o)===!1)break}return e}}AD.exports=dX});var kD=h((hRe,ED)=>{var fX=SD(),pX=fX();ED.exports=pX});var wD=h((mRe,ND)=>{var hX=kD(),mX=fn();function gX(t,e){return t&&hX(t,e,mX)}ND.exports=gX});var OD=h((gRe,DD)=>{var yX=ei();function vX(t,e){return function(r,n){if(r==null)return r;if(!yX(r))return t(r,n);for(var i=r.length,o=e?i:-1,a=Object(r);(e?o--:++o<i)&&n(a[o],o,a)!==!1;);return r}}DD.exports=vX});var Qo=h((yRe,qD)=>{var _X=wD(),TX=OD(),RX=TX(_X);qD.exports=RX});var xD=h((vRe,ID)=>{var bX=Qo(),CX=ei();function PX(t,e){var r=-1,n=CX(t)?Array(t.length):[];return bX(t,function(i,o,a){n[++r]=e(i,o,a)}),n}ID.exports=PX});var ir=h((_Re,LD)=>{var AX=Ys(),SX=Dn(),EX=xD(),kX=Ve();function NX(t,e){var r=kX(t)?AX:EX;return r(t,SX(e,3))}LD.exports=NX});var UT=h((TRe,MD)=>{function wX(t,e){for(var r=-1,n=t==null?0:t.length;++r<n&&e(t[r],r,t)!==!1;);return t}MD.exports=wX});var FD=h((RRe,$D)=>{var DX=xa();function OX(t){return typeof t=="function"?t:DX}$D.exports=OX});var or=h((bRe,jD)=>{var qX=UT(),IX=Qo(),xX=FD(),LX=Ve();function MX(t,e){var r=LX(t)?qX:IX;return r(t,xX(e))}jD.exports=MX});var GD=h((CRe,UD)=>{var $X=Ys();function FX(t,e){return $X(e,function(r){return t[r]})}UD.exports=FX});var Ei=h((PRe,WD)=>{var jX=GD(),UX=fn();function GX(t){return t==null?[]:jX(t,UX(t))}WD.exports=GX});var KD=h((ARe,HD)=>{var WX=Object.prototype,HX=WX.hasOwnProperty;function KX(t,e){return t!=null&&HX.call(t,e)}HD.exports=KX});var pn=h((SRe,BD)=>{var BX=KD(),VX=jT();function zX(t,e){return t!=null&&VX(t,e,BX)}BD.exports=zX});var GT=h((ERe,VD)=>{var YX=Jo(),XX=function(){try{var t=YX(Object,"defineProperty");return t({},"",{}),t}catch{}}();VD.exports=XX});var _p=h((kRe,YD)=>{var zD=GT();function JX(t,e,r){e=="__proto__"&&zD?zD(t,e,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[e]=r}YD.exports=JX});var Qc=h((NRe,XD)=>{var QX=_p(),ZX=Xs(),eJ=Object.prototype,tJ=eJ.hasOwnProperty;function rJ(t,e,r){var n=t[e];(!(tJ.call(t,e)&&ZX(n,r))||r===void 0&&!(e in t))&&QX(t,e,r)}XD.exports=rJ});var nu=h((wRe,JD)=>{var nJ=Qc(),iJ=_p();function oJ(t,e,r,n){var i=!r;r||(r={});for(var o=-1,a=e.length;++o<a;){var s=e[o],u=n?n(r[s],t[s],s,r,t):void 0;u===void 0&&(u=t[s]),i?iJ(r,s,u):nJ(r,s,u)}return r}JD.exports=oJ});var ZD=h((DRe,QD)=>{var aJ=nu(),sJ=fn();function uJ(t,e){return t&&aJ(e,sJ(e),t)}QD.exports=uJ});var tO=h((ORe,eO)=>{function cJ(t){var e=[];if(t!=null)for(var r in Object(t))e.push(r);return e}eO.exports=cJ});var nO=h((qRe,rO)=>{var lJ=Qn(),dJ=Gs(),fJ=tO(),pJ=Object.prototype,hJ=pJ.hasOwnProperty;function mJ(t){if(!lJ(t))return fJ(t);var e=dJ(t),r=[];for(var n in t)n=="constructor"&&(e||!hJ.call(t,n))||r.push(n);return r}rO.exports=mJ});var Zc=h((IRe,iO)=>{var gJ=OT(),yJ=nO(),vJ=ei();function _J(t){return vJ(t)?gJ(t,!0):yJ(t)}iO.exports=_J});var aO=h((xRe,oO)=>{var TJ=nu(),RJ=Zc();function bJ(t,e){return t&&TJ(e,RJ(e),t)}oO.exports=bJ});var dO=h((el,iu)=>{var CJ=Jn(),lO=typeof el=="object"&&el&&!el.nodeType&&el,sO=lO&&typeof iu=="object"&&iu&&!iu.nodeType&&iu,PJ=sO&&sO.exports===lO,uO=PJ?CJ.Buffer:void 0,cO=uO?uO.allocUnsafe:void 0;function AJ(t,e){if(e)return t.slice();var r=t.length,n=cO?cO(r):new t.constructor(r);return t.copy(n),n}iu.exports=AJ});var pO=h((LRe,fO)=>{function SJ(t,e){var r=-1,n=t.length;for(e||(e=Array(n));++r<n;)e[r]=t[r];return e}fO.exports=SJ});var mO=h((MRe,hO)=>{var EJ=nu(),kJ=mp();function NJ(t,e){return EJ(t,kJ(t),e)}hO.exports=NJ});var WT=h(($Re,gO)=>{var wJ=hT(),DJ=wJ(Object.getPrototypeOf,Object);gO.exports=DJ});var HT=h((FRe,yO)=>{var OJ=pp(),qJ=WT(),IJ=mp(),xJ=DT(),LJ=Object.getOwnPropertySymbols,MJ=LJ?function(t){for(var e=[];t;)OJ(e,IJ(t)),t=qJ(t);return e}:xJ;yO.exports=MJ});var _O=h((jRe,vO)=>{var $J=nu(),FJ=HT();function jJ(t,e){return $J(t,FJ(t),e)}vO.exports=jJ});var KT=h((URe,TO)=>{var UJ=wT(),GJ=HT(),WJ=Zc();function HJ(t){return UJ(t,WJ,GJ)}TO.exports=HJ});var bO=h((GRe,RO)=>{var KJ=Object.prototype,BJ=KJ.hasOwnProperty;function VJ(t){var e=t.length,r=new t.constructor(e);return e&&typeof t[0]=="string"&&BJ.call(t,"index")&&(r.index=t.index,r.input=t.input),r}RO.exports=VJ});var Tp=h((WRe,PO)=>{var CO=kT();function zJ(t){var e=new t.constructor(t.byteLength);return new CO(e).set(new CO(t)),e}PO.exports=zJ});var SO=h((HRe,AO)=>{var YJ=Tp();function XJ(t,e){var r=e?YJ(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}AO.exports=XJ});var kO=h((KRe,EO)=>{var JJ=/\w*$/;function QJ(t){var e=new t.constructor(t.source,JJ.exec(t));return e.lastIndex=t.lastIndex,e}EO.exports=QJ});var qO=h((BRe,OO)=>{var NO=qa(),wO=NO?NO.prototype:void 0,DO=wO?wO.valueOf:void 0;function ZJ(t){return DO?Object(DO.call(t)):{}}OO.exports=ZJ});var xO=h((VRe,IO)=>{var eQ=Tp();function tQ(t,e){var r=e?eQ(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}IO.exports=tQ});var MO=h((zRe,LO)=>{var rQ=Tp(),nQ=SO(),iQ=kO(),oQ=qO(),aQ=xO(),sQ="[object Boolean]",uQ="[object Date]",cQ="[object Map]",lQ="[object Number]",dQ="[object RegExp]",fQ="[object Set]",pQ="[object String]",hQ="[object Symbol]",mQ="[object ArrayBuffer]",gQ="[object DataView]",yQ="[object Float32Array]",vQ="[object Float64Array]",_Q="[object Int8Array]",TQ="[object Int16Array]",RQ="[object Int32Array]",bQ="[object Uint8Array]",CQ="[object Uint8ClampedArray]",PQ="[object Uint16Array]",AQ="[object Uint32Array]";function SQ(t,e,r){var n=t.constructor;switch(e){case mQ:return rQ(t);case sQ:case uQ:return new n(+t);case gQ:return nQ(t,r);case yQ:case vQ:case _Q:case TQ:case RQ:case bQ:case CQ:case PQ:case AQ:return aQ(t,r);case cQ:return new n;case lQ:case pQ:return new n(t);case dQ:return iQ(t);case fQ:return new n;case hQ:return oQ(t)}}LO.exports=SQ});var jO=h((YRe,FO)=>{var EQ=Qn(),$O=Object.create,kQ=function(){function t(){}return function(e){if(!EQ(e))return{};if($O)return $O(e);t.prototype=e;var r=new t;return t.prototype=void 0,r}}();FO.exports=kQ});var GO=h((XRe,UO)=>{var NQ=jO(),wQ=WT(),DQ=Gs();function OQ(t){return typeof t.constructor=="function"&&!DQ(t)?NQ(wQ(t)):{}}UO.exports=OQ});var HO=h((JRe,WO)=>{var qQ=Ks(),IQ=Zn(),xQ="[object Map]";function LQ(t){return IQ(t)&&qQ(t)==xQ}WO.exports=LQ});var zO=h((QRe,VO)=>{var MQ=HO(),$Q=Vs(),KO=Kc(),BO=KO&&KO.isMap,FQ=BO?$Q(BO):MQ;VO.exports=FQ});var XO=h((ZRe,YO)=>{var jQ=Ks(),UQ=Zn(),GQ="[object Set]";function WQ(t){return UQ(t)&&jQ(t)==GQ}YO.exports=WQ});var eq=h((ebe,ZO)=>{var HQ=XO(),KQ=Vs(),JO=Kc(),QO=JO&&JO.isSet,BQ=QO?KQ(QO):HQ;ZO.exports=BQ});var oq=h((tbe,iq)=>{var VQ=up(),zQ=UT(),YQ=Qc(),XQ=ZD(),JQ=aO(),QQ=dO(),ZQ=pO(),eZ=mO(),tZ=_O(),rZ=qT(),nZ=KT(),iZ=Ks(),oZ=bO(),aZ=MO(),sZ=GO(),uZ=Ve(),cZ=Gc(),lZ=zO(),dZ=Qn(),fZ=eq(),pZ=fn(),hZ=Zc(),mZ=1,gZ=2,yZ=4,tq="[object Arguments]",vZ="[object Array]",_Z="[object Boolean]",TZ="[object Date]",RZ="[object Error]",rq="[object Function]",bZ="[object GeneratorFunction]",CZ="[object Map]",PZ="[object Number]",nq="[object Object]",AZ="[object RegExp]",SZ="[object Set]",EZ="[object String]",kZ="[object Symbol]",NZ="[object WeakMap]",wZ="[object ArrayBuffer]",DZ="[object DataView]",OZ="[object Float32Array]",qZ="[object Float64Array]",IZ="[object Int8Array]",xZ="[object Int16Array]",LZ="[object Int32Array]",MZ="[object Uint8Array]",$Z="[object Uint8ClampedArray]",FZ="[object Uint16Array]",jZ="[object Uint32Array]",at={};at[tq]=at[vZ]=at[wZ]=at[DZ]=at[_Z]=at[TZ]=at[OZ]=at[qZ]=at[IZ]=at[xZ]=at[LZ]=at[CZ]=at[PZ]=at[nq]=at[AZ]=at[SZ]=at[EZ]=at[kZ]=at[MZ]=at[$Z]=at[FZ]=at[jZ]=!0;at[RZ]=at[rq]=at[NZ]=!1;function Rp(t,e,r,n,i,o){var a,s=e&mZ,u=e&gZ,d=e&yZ;if(r&&(a=i?r(t,n,i,o):r(t)),a!==void 0)return a;if(!dZ(t))return t;var p=uZ(t);if(p){if(a=oZ(t),!s)return ZQ(t,a)}else{var m=iZ(t),y=m==rq||m==bZ;if(cZ(t))return QQ(t,s);if(m==nq||m==tq||y&&!i){if(a=u||y?{}:sZ(t),!s)return u?tZ(t,JQ(a,t)):eZ(t,XQ(a,t))}else{if(!at[m])return i?t:{};a=aZ(t,m,s)}}o||(o=new VQ);var S=o.get(t);if(S)return S;o.set(t,a),fZ(t)?t.forEach(function(k){a.add(Rp(k,e,r,k,t,o))}):lZ(t)&&t.forEach(function(k,N){a.set(N,Rp(k,e,r,N,t,o))});var _=d?u?nZ:rZ:u?hZ:pZ,w=p?void 0:_(t);return zQ(w||t,function(k,N){w&&(N=k,k=t[N]),YQ(a,N,Rp(k,e,r,N,t,o))}),a}iq.exports=Rp});var ho=h((rbe,aq)=>{var UZ=oq(),GZ=4;function WZ(t){return UZ(t,GZ)}aq.exports=WZ});var sq=h(ou=>{"use strict";Object.defineProperty(ou,"__esModule",{value:!0});ou.PRINT_WARNING=ou.PRINT_ERROR=void 0;function HZ(t){console&&console.error&&console.error("Error: ".concat(t))}ou.PRINT_ERROR=HZ;function KZ(t){console&&console.warn&&console.warn("Warning: ".concat(t))}ou.PRINT_WARNING=KZ});var uq=h(bp=>{"use strict";Object.defineProperty(bp,"__esModule",{value:!0});bp.timer=void 0;function BZ(t){var e=new Date().getTime(),r=t(),n=new Date().getTime(),i=n-e;return{time:i,value:r}}bp.timer=BZ});var cq=h((exports,module)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0});exports.toFastProperties=void 0;function toFastProperties(toBecomeFast){function FakeConstructor(){}FakeConstructor.prototype=toBecomeFast;var fakeInstance=new FakeConstructor;function fakeAccess(){return typeof fakeInstance.bar}return fakeAccess(),fakeAccess(),toBecomeFast;eval(toBecomeFast)}exports.toFastProperties=toFastProperties});var au=h(ki=>{"use strict";Object.defineProperty(ki,"__esModule",{value:!0});ki.toFastProperties=ki.timer=ki.PRINT_ERROR=ki.PRINT_WARNING=void 0;var lq=sq();Object.defineProperty(ki,"PRINT_WARNING",{enumerable:!0,get:function(){return lq.PRINT_WARNING}});Object.defineProperty(ki,"PRINT_ERROR",{enumerable:!0,get:function(){return lq.PRINT_ERROR}});var VZ=uq();Object.defineProperty(ki,"timer",{enumerable:!0,get:function(){return VZ.timer}});var zZ=cq();Object.defineProperty(ki,"toFastProperties",{enumerable:!0,get:function(){return zZ.toFastProperties}})});var Cp=h((abe,dq)=>{function YZ(t,e,r){var n=-1,i=t.length;e<0&&(e=-e>i?0:i+e),r=r>i?i:r,r<0&&(r+=i),i=e>r?0:r-e>>>0,e>>>=0;for(var o=Array(i);++n<i;)o[n]=t[n+e];return o}dq.exports=YZ});var pq=h((sbe,fq)=>{var XZ=/\s/;function JZ(t){for(var e=t.length;e--&&XZ.test(t.charAt(e)););return e}fq.exports=JZ});var mq=h((ube,hq)=>{var QZ=pq(),ZZ=/^\s+/;function eee(t){return t&&t.slice(0,QZ(t)+1).replace(ZZ,"")}hq.exports=eee});var _q=h((cbe,vq)=>{var tee=mq(),gq=Qn(),ree=tu(),yq=NaN,nee=/^[-+]0x[0-9a-f]+$/i,iee=/^0b[01]+$/i,oee=/^0o[0-7]+$/i,aee=parseInt;function see(t){if(typeof t=="number")return t;if(ree(t))return yq;if(gq(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=gq(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=tee(t);var r=iee.test(t);return r||oee.test(t)?aee(t.slice(2),r?2:8):nee.test(t)?yq:+t}vq.exports=see});var bq=h((lbe,Rq)=>{var uee=_q(),Tq=1/0,cee=17976931348623157e292;function lee(t){if(!t)return t===0?t:0;if(t=uee(t),t===Tq||t===-Tq){var e=t<0?-1:1;return e*cee}return t===t?t:0}Rq.exports=lee});var su=h((dbe,Cq)=>{var dee=bq();function fee(t){var e=dee(t),r=e%1;return e===e?r?e-r:e:0}Cq.exports=fee});var Pp=h((fbe,Pq)=>{var pee=Cp(),hee=su();function mee(t,e,r){var n=t==null?0:t.length;return n?(e=r||e===void 0?1:hee(e),pee(t,e<0?0:e,n)):[]}Pq.exports=mee});var tl=h((pbe,Aq)=>{var gee=Xo(),yee=Ve(),vee=Zn(),_ee="[object String]";function Tee(t){return typeof t=="string"||!yee(t)&&vee(t)&&gee(t)==_ee}Aq.exports=Tee});var Eq=h((hbe,Sq)=>{var Ree=Xo(),bee=Zn(),Cee="[object RegExp]";function Pee(t){return bee(t)&&Ree(t)==Cee}Sq.exports=Pee});var BT=h((mbe,wq)=>{var Aee=Eq(),See=Vs(),kq=Kc(),Nq=kq&&kq.isRegExp,Eee=Nq?See(Nq):Aee;wq.exports=Eee});var qq=h((gbe,Oq)=>{var kee=Qc(),Nee=Jc(),wee=Xc(),Dq=Qn(),Dee=ru();function Oee(t,e,r,n){if(!Dq(t))return t;e=Nee(e,t);for(var i=-1,o=e.length,a=o-1,s=t;s!=null&&++i<o;){var u=Dee(e[i]),d=r;if(u==="__proto__"||u==="constructor"||u==="prototype")return t;if(i!=a){var p=s[u];d=n?n(p,u,s):void 0,d===void 0&&(d=Dq(p)?p:wee(e[i+1])?[]:{})}kee(s,u,d),s=s[u]}return t}Oq.exports=Oee});var xq=h((ybe,Iq)=>{var qee=vp(),Iee=qq(),xee=Jc();function Lee(t,e,r){for(var n=-1,i=e.length,o={};++n<i;){var a=e[n],s=qee(t,a);r(s,a)&&Iee(o,xee(a,t),s)}return o}Iq.exports=Lee});var VT=h((vbe,Lq)=>{var Mee=Ys(),$ee=Dn(),Fee=xq(),jee=KT();function Uee(t,e){if(t==null)return{};var r=Mee(jee(t),function(n){return[n]});return e=$ee(e),Fee(t,r,function(n,i){return e(n,i[0])})}Lq.exports=Uee});var $q=h((_be,Mq)=>{function Gee(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)}Mq.exports=Gee});var Uq=h((Tbe,jq)=>{var Wee=$q(),Fq=Math.max;function Hee(t,e,r){return e=Fq(e===void 0?t.length-1:e,0),function(){for(var n=arguments,i=-1,o=Fq(n.length-e,0),a=Array(o);++i<o;)a[i]=n[e+i];i=-1;for(var s=Array(e+1);++i<e;)s[i]=n[i];return s[e]=r(a),Wee(t,this,s)}}jq.exports=Hee});var Wq=h((Rbe,Gq)=>{function Kee(t){return function(){return t}}Gq.exports=Kee});var Bq=h((bbe,Kq)=>{var Bee=Wq(),Hq=GT(),Vee=xa(),zee=Hq?function(t,e){return Hq(t,"toString",{configurable:!0,enumerable:!1,value:Bee(e),writable:!0})}:Vee;Kq.exports=zee});var zq=h((Cbe,Vq)=>{var Yee=800,Xee=16,Jee=Date.now;function Qee(t){var e=0,r=0;return function(){var n=Jee(),i=Xee-(n-r);if(r=n,i>0){if(++e>=Yee)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}Vq.exports=Qee});var Xq=h((Pbe,Yq)=>{var Zee=Bq(),ete=zq(),tte=ete(Zee);Yq.exports=tte});var Ap=h((Abe,Jq)=>{var rte=xa(),nte=Uq(),ite=Xq();function ote(t,e){return ite(nte(t,e,rte),t+"")}Jq.exports=ote});var rl=h((Sbe,Qq)=>{var ate=Xs(),ste=ei(),ute=Xc(),cte=Qn();function lte(t,e,r){if(!cte(r))return!1;var n=typeof e;return(n=="number"?ste(r)&&ute(e,r.length):n=="string"&&e in r)?ate(r[e],t):!1}Qq.exports=lte});var eI=h((Ebe,Zq)=>{var dte=Ap(),fte=rl();function pte(t){return dte(function(e,r){var n=-1,i=r.length,o=i>1?r[i-1]:void 0,a=i>2?r[2]:void 0;for(o=t.length>3&&typeof o=="function"?(i--,o):void 0,a&&fte(r[0],r[1],a)&&(o=i<3?void 0:o,i=1),e=Object(e);++n<i;){var s=r[n];s&&t(e,s,n,o)}return e})}Zq.exports=pte});var nl=h((kbe,tI)=>{var hte=Qc(),mte=nu(),gte=eI(),yte=ei(),vte=Gs(),_te=fn(),Tte=Object.prototype,Rte=Tte.hasOwnProperty,bte=gte(function(t,e){if(vte(e)||yte(e)){mte(e,_te(e),t);return}for(var r in e)Rte.call(e,r)&&hte(t,r,e[r])});tI.exports=bte});var Ep=h(Fe=>{"use strict";var mo=Fe&&Fe.__extends||function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(n[o]=i[o])},t(e,r)};return function(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");t(e,r);function n(){this.constructor=e}e.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}(),uu=Fe&&Fe.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(Fe,"__esModule",{value:!0});Fe.serializeProduction=Fe.serializeGrammar=Fe.Terminal=Fe.Alternation=Fe.RepetitionWithSeparator=Fe.Repetition=Fe.RepetitionMandatoryWithSeparator=Fe.RepetitionMandatory=Fe.Option=Fe.Alternative=Fe.Rule=Fe.NonTerminal=Fe.AbstractProduction=void 0;var rI=uu(ir()),Cte=uu(or()),zT=uu(tl()),Pte=uu(BT()),Ni=uu(VT()),wi=uu(nl());function Ate(t){return Ste(t)?t.LABEL:t.name}function Ste(t){return(0,zT.default)(t.LABEL)&&t.LABEL!==""}var Di=function(){function t(e){this._definition=e}return Object.defineProperty(t.prototype,"definition",{get:function(){return this._definition},set:function(e){this._definition=e},enumerable:!1,configurable:!0}),t.prototype.accept=function(e){e.visit(this),(0,Cte.default)(this.definition,function(r){r.accept(e)})},t}();Fe.AbstractProduction=Di;var nI=function(t){mo(e,t);function e(r){var n=t.call(this,[])||this;return n.idx=1,(0,wi.default)(n,(0,Ni.default)(r,function(i){return i!==void 0})),n}return Object.defineProperty(e.prototype,"definition",{get:function(){return this.referencedRule!==void 0?this.referencedRule.definition:[]},set:function(r){},enumerable:!1,configurable:!0}),e.prototype.accept=function(r){r.visit(this)},e}(Di);Fe.NonTerminal=nI;var iI=function(t){mo(e,t);function e(r){var n=t.call(this,r.definition)||this;return n.orgText="",(0,wi.default)(n,(0,Ni.default)(r,function(i){return i!==void 0})),n}return e}(Di);Fe.Rule=iI;var oI=function(t){mo(e,t);function e(r){var n=t.call(this,r.definition)||this;return n.ignoreAmbiguities=!1,(0,wi.default)(n,(0,Ni.default)(r,function(i){return i!==void 0})),n}return e}(Di);Fe.Alternative=oI;var aI=function(t){mo(e,t);function e(r){var n=t.call(this,r.definition)||this;return n.idx=1,(0,wi.default)(n,(0,Ni.default)(r,function(i){return i!==void 0})),n}return e}(Di);Fe.Option=aI;var sI=function(t){mo(e,t);function e(r){var n=t.call(this,r.definition)||this;return n.idx=1,(0,wi.default)(n,(0,Ni.default)(r,function(i){return i!==void 0})),n}return e}(Di);Fe.RepetitionMandatory=sI;var uI=function(t){mo(e,t);function e(r){var n=t.call(this,r.definition)||this;return n.idx=1,(0,wi.default)(n,(0,Ni.default)(r,function(i){return i!==void 0})),n}return e}(Di);Fe.RepetitionMandatoryWithSeparator=uI;var cI=function(t){mo(e,t);function e(r){var n=t.call(this,r.definition)||this;return n.idx=1,(0,wi.default)(n,(0,Ni.default)(r,function(i){return i!==void 0})),n}return e}(Di);Fe.Repetition=cI;var lI=function(t){mo(e,t);function e(r){var n=t.call(this,r.definition)||this;return n.idx=1,(0,wi.default)(n,(0,Ni.default)(r,function(i){return i!==void 0})),n}return e}(Di);Fe.RepetitionWithSeparator=lI;var dI=function(t){mo(e,t);function e(r){var n=t.call(this,r.definition)||this;return n.idx=1,n.ignoreAmbiguities=!1,n.hasPredicates=!1,(0,wi.default)(n,(0,Ni.default)(r,function(i){return i!==void 0})),n}return Object.defineProperty(e.prototype,"definition",{get:function(){return this._definition},set:function(r){this._definition=r},enumerable:!1,configurable:!0}),e}(Di);Fe.Alternation=dI;var Sp=function(){function t(e){this.idx=1,(0,wi.default)(this,(0,Ni.default)(e,function(r){return r!==void 0}))}return t.prototype.accept=function(e){e.visit(this)},t}();Fe.Terminal=Sp;function Ete(t){return(0,rI.default)(t,il)}Fe.serializeGrammar=Ete;function il(t){function e(o){return(0,rI.default)(o,il)}if(t instanceof nI){var r={type:"NonTerminal",name:t.nonTerminalName,idx:t.idx};return(0,zT.default)(t.label)&&(r.label=t.label),r}else{if(t instanceof oI)return{type:"Alternative",definition:e(t.definition)};if(t instanceof aI)return{type:"Option",idx:t.idx,definition:e(t.definition)};if(t instanceof sI)return{type:"RepetitionMandatory",idx:t.idx,definition:e(t.definition)};if(t instanceof uI)return{type:"RepetitionMandatoryWithSeparator",idx:t.idx,separator:il(new Sp({terminalType:t.separator})),definition:e(t.definition)};if(t instanceof lI)return{type:"RepetitionWithSeparator",idx:t.idx,separator:il(new Sp({terminalType:t.separator})),definition:e(t.definition)};if(t instanceof cI)return{type:"Repetition",idx:t.idx,definition:e(t.definition)};if(t instanceof dI)return{type:"Alternation",idx:t.idx,definition:e(t.definition)};if(t instanceof Sp){var n={type:"Terminal",name:t.terminalType.name,label:Ate(t.terminalType),idx:t.idx};(0,zT.default)(t.label)&&(n.terminalLabel=t.label);var i=t.terminalType.PATTERN;return t.terminalType.PATTERN&&(n.pattern=(0,Pte.default)(i)?i.source:i),n}else{if(t instanceof iI)return{type:"Rule",name:t.name,orgText:t.orgText,definition:e(t.definition)};throw Error("non exhaustive match")}}}Fe.serializeProduction=il});var fI=h(kp=>{"use strict";Object.defineProperty(kp,"__esModule",{value:!0});kp.GAstVisitor=void 0;var Oi=Ep(),kte=function(){function t(){}return t.prototype.visit=function(e){var r=e;switch(r.constructor){case Oi.NonTerminal:return this.visitNonTerminal(r);case Oi.Alternative:return this.visitAlternative(r);case Oi.Option:return this.visitOption(r);case Oi.RepetitionMandatory:return this.visitRepetitionMandatory(r);case Oi.RepetitionMandatoryWithSeparator:return this.visitRepetitionMandatoryWithSeparator(r);case Oi.RepetitionWithSeparator:return this.visitRepetitionWithSeparator(r);case Oi.Repetition:return this.visitRepetition(r);case Oi.Alternation:return this.visitAlternation(r);case Oi.Terminal:return this.visitTerminal(r);case Oi.Rule:return this.visitRule(r);default:throw Error("non exhaustive match")}},t.prototype.visitNonTerminal=function(e){},t.prototype.visitAlternative=function(e){},t.prototype.visitOption=function(e){},t.prototype.visitRepetition=function(e){},t.prototype.visitRepetitionMandatory=function(e){},t.prototype.visitRepetitionMandatoryWithSeparator=function(e){},t.prototype.visitRepetitionWithSeparator=function(e){},t.prototype.visitAlternation=function(e){},t.prototype.visitTerminal=function(e){},t.prototype.visitRule=function(e){},t}();kp.GAstVisitor=kte});var hI=h((Dbe,pI)=>{var Nte=Qo();function wte(t,e){var r;return Nte(t,function(n,i,o){return r=e(n,i,o),!r}),!!r}pI.exports=wte});var Np=h((Obe,mI)=>{var Dte=ST(),Ote=Dn(),qte=hI(),Ite=Ve(),xte=rl();function Lte(t,e,r){var n=Ite(t)?Dte:qte;return r&&xte(t,e,r)&&(e=void 0),n(t,Ote(e,3))}mI.exports=Lte});var yI=h((qbe,gI)=>{function Mte(t,e){for(var r=-1,n=t==null?0:t.length;++r<n;)if(!e(t[r],r,t))return!1;return!0}gI.exports=Mte});var _I=h((Ibe,vI)=>{var $te=Qo();function Fte(t,e){var r=!0;return $te(t,function(n,i,o){return r=!!e(n,i,o),r}),r}vI.exports=Fte});var ol=h((xbe,TI)=>{var jte=yI(),Ute=_I(),Gte=Dn(),Wte=Ve(),Hte=rl();function Kte(t,e,r){var n=Wte(t)?jte:Ute;return r&&Hte(t,e,r)&&(e=void 0),n(t,Gte(e,3))}TI.exports=Kte});var YT=h((Lbe,RI)=>{function Bte(t,e,r,n){for(var i=t.length,o=r+(n?1:-1);n?o--:++o<i;)if(e(t[o],o,t))return o;return-1}RI.exports=Bte});var CI=h((Mbe,bI)=>{function Vte(t){return t!==t}bI.exports=Vte});var AI=h(($be,PI)=>{function zte(t,e,r){for(var n=r-1,i=t.length;++n<i;)if(t[n]===e)return n;return-1}PI.exports=zte});var wp=h((Fbe,SI)=>{var Yte=YT(),Xte=CI(),Jte=AI();function Qte(t,e,r){return e===e?Jte(t,e,r):Yte(t,Xte,r)}SI.exports=Qte});var go=h((jbe,EI)=>{var Zte=wp(),ere=ei(),tre=tl(),rre=su(),nre=Ei(),ire=Math.max;function ore(t,e,r,n){t=ere(t)?t:nre(t),r=r&&!n?rre(r):0;var i=t.length;return r<0&&(r=ire(i+r,0)),tre(t)?r<=i&&t.indexOf(e,r)>-1:!!i&&Zte(t,e,r)>-1}EI.exports=ore});var kI=h(On=>{"use strict";var JT=On&&On.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(On,"__esModule",{value:!0});On.getProductionDslName=On.isBranchingProd=On.isOptionalProd=On.isSequenceProd=void 0;var are=JT(Np()),sre=JT(ol()),ure=JT(go()),yt=Ep();function cre(t){return t instanceof yt.Alternative||t instanceof yt.Option||t instanceof yt.Repetition||t instanceof yt.RepetitionMandatory||t instanceof yt.RepetitionMandatoryWithSeparator||t instanceof yt.RepetitionWithSeparator||t instanceof yt.Terminal||t instanceof yt.Rule}On.isSequenceProd=cre;function XT(t,e){e===void 0&&(e=[]);var r=t instanceof yt.Option||t instanceof yt.Repetition||t instanceof yt.RepetitionWithSeparator;return r?!0:t instanceof yt.Alternation?(0,are.default)(t.definition,function(n){return XT(n,e)}):t instanceof yt.NonTerminal&&(0,ure.default)(e,t)?!1:t instanceof yt.AbstractProduction?(t instanceof yt.NonTerminal&&e.push(t),(0,sre.default)(t.definition,function(n){return XT(n,e)})):!1}On.isOptionalProd=XT;function lre(t){return t instanceof yt.Alternation}On.isBranchingProd=lre;function dre(t){if(t instanceof yt.NonTerminal)return"SUBRULE";if(t instanceof yt.Option)return"OPTION";if(t instanceof yt.Alternation)return"OR";if(t instanceof yt.RepetitionMandatory)return"AT_LEAST_ONE";if(t instanceof yt.RepetitionMandatoryWithSeparator)return"AT_LEAST_ONE_SEP";if(t instanceof yt.RepetitionWithSeparator)return"MANY_SEP";if(t instanceof yt.Repetition)return"MANY";if(t instanceof yt.Terminal)return"CONSUME";throw Error("non exhaustive match")}On.getProductionDslName=dre});var wt=h(Oe=>{"use strict";Object.defineProperty(Oe,"__esModule",{value:!0});Oe.isSequenceProd=Oe.isBranchingProd=Oe.isOptionalProd=Oe.getProductionDslName=Oe.GAstVisitor=Oe.serializeProduction=Oe.serializeGrammar=Oe.Alternative=Oe.Alternation=Oe.RepetitionWithSeparator=Oe.RepetitionMandatoryWithSeparator=Oe.RepetitionMandatory=Oe.Repetition=Oe.Option=Oe.NonTerminal=Oe.Terminal=Oe.Rule=void 0;var qn=Ep();Object.defineProperty(Oe,"Rule",{enumerable:!0,get:function(){return qn.Rule}});Object.defineProperty(Oe,"Terminal",{enumerable:!0,get:function(){return qn.Terminal}});Object.defineProperty(Oe,"NonTerminal",{enumerable:!0,get:function(){return qn.NonTerminal}});Object.defineProperty(Oe,"Option",{enumerable:!0,get:function(){return qn.Option}});Object.defineProperty(Oe,"Repetition",{enumerable:!0,get:function(){return qn.Repetition}});Object.defineProperty(Oe,"RepetitionMandatory",{enumerable:!0,get:function(){return qn.RepetitionMandatory}});Object.defineProperty(Oe,"RepetitionMandatoryWithSeparator",{enumerable:!0,get:function(){return qn.RepetitionMandatoryWithSeparator}});Object.defineProperty(Oe,"RepetitionWithSeparator",{enumerable:!0,get:function(){return qn.RepetitionWithSeparator}});Object.defineProperty(Oe,"Alternation",{enumerable:!0,get:function(){return qn.Alternation}});Object.defineProperty(Oe,"Alternative",{enumerable:!0,get:function(){return qn.Alternative}});Object.defineProperty(Oe,"serializeGrammar",{enumerable:!0,get:function(){return qn.serializeGrammar}});Object.defineProperty(Oe,"serializeProduction",{enumerable:!0,get:function(){return qn.serializeProduction}});var fre=fI();Object.defineProperty(Oe,"GAstVisitor",{enumerable:!0,get:function(){return fre.GAstVisitor}});var Dp=kI();Object.defineProperty(Oe,"getProductionDslName",{enumerable:!0,get:function(){return Dp.getProductionDslName}});Object.defineProperty(Oe,"isOptionalProd",{enumerable:!0,get:function(){return Dp.isOptionalProd}});Object.defineProperty(Oe,"isBranchingProd",{enumerable:!0,get:function(){return Dp.isBranchingProd}});Object.defineProperty(Oe,"isSequenceProd",{enumerable:!0,get:function(){return Dp.isSequenceProd}})});var Op=h(cu=>{"use strict";var DI=cu&&cu.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(cu,"__esModule",{value:!0});cu.RestWalker=void 0;var pre=DI(Pp()),NI=DI(or()),tn=wt(),hre=function(){function t(){}return t.prototype.walk=function(e,r){var n=this;r===void 0&&(r=[]),(0,NI.default)(e.definition,function(i,o){var a=(0,pre.default)(e.definition,o+1);if(i instanceof tn.NonTerminal)n.walkProdRef(i,a,r);else if(i instanceof tn.Terminal)n.walkTerminal(i,a,r);else if(i instanceof tn.Alternative)n.walkFlat(i,a,r);else if(i instanceof tn.Option)n.walkOption(i,a,r);else if(i instanceof tn.RepetitionMandatory)n.walkAtLeastOne(i,a,r);else if(i instanceof tn.RepetitionMandatoryWithSeparator)n.walkAtLeastOneSep(i,a,r);else if(i instanceof tn.RepetitionWithSeparator)n.walkManySep(i,a,r);else if(i instanceof tn.Repetition)n.walkMany(i,a,r);else if(i instanceof tn.Alternation)n.walkOr(i,a,r);else throw Error("non exhaustive match")})},t.prototype.walkTerminal=function(e,r,n){},t.prototype.walkProdRef=function(e,r,n){},t.prototype.walkFlat=function(e,r,n){var i=r.concat(n);this.walk(e,i)},t.prototype.walkOption=function(e,r,n){var i=r.concat(n);this.walk(e,i)},t.prototype.walkAtLeastOne=function(e,r,n){var i=[new tn.Option({definition:e.definition})].concat(r,n);this.walk(e,i)},t.prototype.walkAtLeastOneSep=function(e,r,n){var i=wI(e,r,n);this.walk(e,i)},t.prototype.walkMany=function(e,r,n){var i=[new tn.Option({definition:e.definition})].concat(r,n);this.walk(e,i)},t.prototype.walkManySep=function(e,r,n){var i=wI(e,r,n);this.walk(e,i)},t.prototype.walkOr=function(e,r,n){var i=this,o=r.concat(n);(0,NI.default)(e.definition,function(a){var s=new tn.Alternative({definition:[a]});i.walk(s,o)})},t}();cu.RestWalker=hre;function wI(t,e,r){var n=[new tn.Option({definition:[new tn.Terminal({terminalType:t.separator})].concat(t.definition)})],i=n.concat(e,r);return i}});var xI=h((Hbe,II)=>{var OI=qa(),mre=jc(),gre=Ve(),qI=OI?OI.isConcatSpreadable:void 0;function yre(t){return gre(t)||mre(t)||!!(qI&&t&&t[qI])}II.exports=yre});var qp=h((Kbe,MI)=>{var vre=pp(),_re=xI();function LI(t,e,r,n,i){var o=-1,a=t.length;for(r||(r=_re),i||(i=[]);++o<a;){var s=t[o];e>0&&r(s)?e>1?LI(s,e-1,r,n,i):vre(i,s):n||(i[i.length]=s)}return i}MI.exports=LI});var ti=h((Bbe,$I)=>{var Tre=qp();function Rre(t){var e=t==null?0:t.length;return e?Tre(t,1):[]}$I.exports=Rre});var QT=h((Vbe,FI)=>{var bre=wp();function Cre(t,e){var r=t==null?0:t.length;return!!r&&bre(t,e,0)>-1}FI.exports=Cre});var ZT=h((zbe,jI)=>{function Pre(t,e,r){for(var n=-1,i=t==null?0:t.length;++n<i;)if(r(e,t[n]))return!0;return!1}jI.exports=Pre});var Ip=h((Ybe,UI)=>{function Are(){}UI.exports=Are});var WI=h((Xbe,GI)=>{var eR=_T(),Sre=Ip(),Ere=fp(),kre=1/0,Nre=eR&&1/Ere(new eR([,-0]))[1]==kre?function(t){return new eR(t)}:Sre;GI.exports=Nre});var tR=h((Jbe,HI)=>{var wre=lp(),Dre=QT(),Ore=ZT(),qre=dp(),Ire=WI(),xre=fp(),Lre=200;function Mre(t,e,r){var n=-1,i=Dre,o=t.length,a=!0,s=[],u=s;if(r)a=!1,i=Ore;else if(o>=Lre){var d=e?null:Ire(t);if(d)return xre(d);a=!1,i=qre,u=new wre}else u=e?[]:s;e:for(;++n<o;){var p=t[n],m=e?e(p):p;if(p=r||p!==0?p:0,a&&m===m){for(var y=u.length;y--;)if(u[y]===m)continue e;e&&u.push(m),s.push(p)}else i(u,m,r)||(u!==s&&u.push(m),s.push(p))}return s}HI.exports=Mre});var xp=h((Qbe,KI)=>{var $re=tR();function Fre(t){return t&&t.length?$re(t):[]}KI.exports=Fre});var iR=h(In=>{"use strict";var nR=In&&In.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(In,"__esModule",{value:!0});In.firstForTerminal=In.firstForBranching=In.firstForSequence=In.first=void 0;var jre=nR(ti()),VI=nR(xp()),Ure=nR(ir()),BI=wt(),rR=wt();function Lp(t){if(t instanceof BI.NonTerminal)return Lp(t.referencedRule);if(t instanceof BI.Terminal)return XI(t);if((0,rR.isSequenceProd)(t))return zI(t);if((0,rR.isBranchingProd)(t))return YI(t);throw Error("non exhaustive match")}In.first=Lp;function zI(t){for(var e=[],r=t.definition,n=0,i=r.length>n,o,a=!0;i&&a;)o=r[n],a=(0,rR.isOptionalProd)(o),e=e.concat(Lp(o)),n=n+1,i=r.length>n;return(0,VI.default)(e)}In.firstForSequence=zI;function YI(t){var e=(0,Ure.default)(t.definition,function(r){return Lp(r)});return(0,VI.default)((0,jre.default)(e))}In.firstForBranching=YI;function XI(t){return[t.terminalType]}In.firstForTerminal=XI});var oR=h(Mp=>{"use strict";Object.defineProperty(Mp,"__esModule",{value:!0});Mp.IN=void 0;Mp.IN="_~IN~_"});var tx=h(rn=>{"use strict";var Gre=rn&&rn.__extends||function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(n[o]=i[o])},t(e,r)};return function(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");t(e,r);function n(){this.constructor=e}e.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}(),JI=rn&&rn.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(rn,"__esModule",{value:!0});rn.buildInProdFollowPrefix=rn.buildBetweenProdsFollowPrefix=rn.computeAllProdsFollows=rn.ResyncFollowsWalker=void 0;var Wre=Op(),Hre=iR(),Kre=JI(or()),Bre=JI(nl()),QI=oR(),Vre=wt(),ZI=function(t){Gre(e,t);function e(r){var n=t.call(this)||this;return n.topProd=r,n.follows={},n}return e.prototype.startWalking=function(){return this.walk(this.topProd),this.follows},e.prototype.walkTerminal=function(r,n,i){},e.prototype.walkProdRef=function(r,n,i){var o=ex(r.referencedRule,r.idx)+this.topProd.name,a=n.concat(i),s=new Vre.Alternative({definition:a}),u=(0,Hre.first)(s);this.follows[o]=u},e}(Wre.RestWalker);rn.ResyncFollowsWalker=ZI;function zre(t){var e={};return(0,Kre.default)(t,function(r){var n=new ZI(r).startWalking();(0,Bre.default)(e,n)}),e}rn.computeAllProdsFollows=zre;function ex(t,e){return t.name+e+QI.IN}rn.buildBetweenProdsFollowPrefix=ex;function Yre(t){var e=t.terminalType.name;return e+t.idx+QI.IN}rn.buildInProdFollowPrefix=Yre});var La=h((rCe,rx)=>{function Xre(t){return t===void 0}rx.exports=Xre});var ix=h((nCe,nx)=>{function Jre(t){return t&&t.length?t[0]:void 0}nx.exports=Jre});var lu=h((iCe,ox)=>{ox.exports=ix()});var al=h((oCe,ax)=>{function Qre(t){for(var e=-1,r=t==null?0:t.length,n=0,i=[];++e<r;){var o=t[e];o&&(i[n++]=o)}return i}ax.exports=Qre});var aR=h((aCe,sx)=>{var Zre=Qo();function ene(t,e){var r=[];return Zre(t,function(n,i,o){e(n,i,o)&&r.push(n)}),r}sx.exports=ene});var cx=h((sCe,ux)=>{var tne="Expected a function";function rne(t){if(typeof t!="function")throw new TypeError(tne);return function(){var e=arguments;switch(e.length){case 0:return!t.call(this);case 1:return!t.call(this,e[0]);case 2:return!t.call(this,e[0],e[1]);case 3:return!t.call(this,e[0],e[1],e[2])}return!t.apply(this,e)}}ux.exports=rne});var $p=h((uCe,lx)=>{var nne=hp(),ine=aR(),one=Dn(),ane=Ve(),sne=cx();function une(t,e){var r=ane(t)?nne:ine;return r(t,sne(one(e,3)))}lx.exports=une});var fx=h((cCe,dx)=>{var cne=lp(),lne=QT(),dne=ZT(),fne=Ys(),pne=Vs(),hne=dp(),mne=200;function gne(t,e,r,n){var i=-1,o=lne,a=!0,s=t.length,u=[],d=e.length;if(!s)return u;r&&(e=fne(e,pne(r))),n?(o=dne,a=!1):e.length>=mne&&(o=hne,a=!1,e=new cne(e));e:for(;++i<s;){var p=t[i],m=r==null?p:r(p);if(p=n||p!==0?p:0,a&&m===m){for(var y=d;y--;)if(e[y]===m)continue e;u.push(p)}else o(e,m,n)||u.push(p)}return u}dx.exports=gne});var hx=h((lCe,px)=>{var yne=ei(),vne=Zn();function _ne(t){return vne(t)&&yne(t)}px.exports=_ne});var Fp=h((dCe,gx)=>{var Tne=fx(),Rne=qp(),bne=Ap(),mx=hx(),Cne=bne(function(t,e){return mx(t)?Tne(t,Rne(e,1,mx,!0)):[]});gx.exports=Cne});var vx=h((fCe,yx)=>{var Pne=wp(),Ane=su(),Sne=Math.max;function Ene(t,e,r){var n=t==null?0:t.length;if(!n)return-1;var i=r==null?0:Ane(r);return i<0&&(i=Sne(n+i,0)),Pne(t,e,i)}yx.exports=Ene});var Tx=h((pCe,_x)=>{var kne=Dn(),Nne=ei(),wne=fn();function Dne(t){return function(e,r,n){var i=Object(e);if(!Nne(e)){var o=kne(r,3);e=wne(e),r=function(s){return o(i[s],s,i)}}var a=t(e,r,n);return a>-1?i[o?e[a]:a]:void 0}}_x.exports=Dne});var bx=h((hCe,Rx)=>{var One=YT(),qne=Dn(),Ine=su(),xne=Math.max;function Lne(t,e,r){var n=t==null?0:t.length;if(!n)return-1;var i=r==null?0:Ine(r);return i<0&&(i=xne(n+i,0)),One(t,qne(e,3),i)}Rx.exports=Lne});var jp=h((mCe,Cx)=>{var Mne=Tx(),$ne=bx(),Fne=Mne($ne);Cx.exports=Fne});var sl=h((gCe,Px)=>{var jne=hp(),Une=aR(),Gne=Dn(),Wne=Ve();function Hne(t,e){var r=Wne(t)?jne:Une;return r(t,Gne(e,3))}Px.exports=Hne});var sR=h((yCe,Sx)=>{var Kne=Ap(),Bne=Xs(),Vne=rl(),zne=Zc(),Ax=Object.prototype,Yne=Ax.hasOwnProperty,Xne=Kne(function(t,e){t=Object(t);var r=-1,n=e.length,i=n>2?e[2]:void 0;for(i&&Vne(e[0],e[1],i)&&(n=1);++r<n;)for(var o=e[r],a=zne(o),s=-1,u=a.length;++s<u;){var d=a[s],p=t[d];(p===void 0||Bne(p,Ax[d])&&!Yne.call(t,d))&&(t[d]=o[d])}return t});Sx.exports=Xne});var kx=h((vCe,Ex)=>{function Jne(t,e,r,n){var i=-1,o=t==null?0:t.length;for(n&&o&&(r=t[++i]);++i<o;)r=e(r,t[i],i,t);return r}Ex.exports=Jne});var wx=h((_Ce,Nx)=>{function Qne(t,e,r,n,i){return i(t,function(o,a,s){r=n?(n=!1,o):e(r,o,a,s)}),r}Nx.exports=Qne});var yo=h((TCe,Dx)=>{var Zne=kx(),eie=Qo(),tie=Dn(),rie=wx(),nie=Ve();function iie(t,e,r){var n=nie(t)?Zne:rie,i=arguments.length<3;return n(t,tie(e,4),r,i,eie)}Dx.exports=iie});var Gp=h(du=>{"use strict";Object.defineProperty(du,"__esModule",{value:!0});du.clearRegExpParserCache=du.getRegExpAst=void 0;var oie=Sc(),Up={},aie=new oie.RegExpParser;function sie(t){var e=t.toString();if(Up.hasOwnProperty(e))return Up[e];var r=aie.pattern(e);return Up[e]=r,r}du.getRegExpAst=sie;function uie(){Up={}}du.clearRegExpParserCache=uie});var Mx=h(wr=>{"use strict";var cie=wr&&wr.__extends||function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(n[o]=i[o])},t(e,r)};return function(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");t(e,r);function n(){this.constructor=e}e.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}(),fu=wr&&wr.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(wr,"__esModule",{value:!0});wr.canMatchCharCode=wr.firstCharOptimizedIndices=wr.getOptimizedStartCodesIndices=wr.failedOptimizationPrefixMsg=void 0;var Ix=Sc(),lie=fu(Ve()),die=fu(ol()),fie=fu(or()),uR=fu(jp()),pie=fu(Ei()),lR=fu(go()),Ox=au(),xx=Gp(),vo=dR(),Lx="Complement Sets are not supported for first char optimization";wr.failedOptimizationPrefixMsg=`Unable to use "first char" lexer optimizations:
`;function hie(t,e){e===void 0&&(e=!1);try{var r=(0,xx.getRegExpAst)(t),n=Hp(r.value,{},r.flags.ignoreCase);return n}catch(o){if(o.message===Lx)e&&(0,Ox.PRINT_WARNING)("".concat(wr.failedOptimizationPrefixMsg)+"	Unable to optimize: < ".concat(t.toString(),` >
`)+`	Complement Sets cannot be automatically optimized.
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#COMPLEMENT for details.`);else{var i="";e&&(i=`
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#REGEXP_PARSING for details.`),(0,Ox.PRINT_ERROR)("".concat(wr.failedOptimizationPrefixMsg,`
`)+"	Failed parsing: < ".concat(t.toString(),` >
`)+"	Using the regexp-to-ast library version: ".concat(Ix.VERSION,`
`)+"	Please open an issue at: https://github.com/bd82/regexp-to-ast/issues"+i)}}return[]}wr.getOptimizedStartCodesIndices=hie;function Hp(t,e,r){switch(t.type){case"Disjunction":for(var n=0;n<t.value.length;n++)Hp(t.value[n],e,r);break;case"Alternative":for(var i=t.value,n=0;n<i.length;n++){var o=i[n];switch(o.type){case"EndAnchor":case"GroupBackReference":case"Lookahead":case"NegativeLookahead":case"StartAnchor":case"WordBoundary":case"NonWordBoundary":continue}var a=o;switch(a.type){case"Character":Wp(a.value,e,r);break;case"Set":if(a.complement===!0)throw Error(Lx);(0,fie.default)(a.value,function(d){if(typeof d=="number")Wp(d,e,r);else{var p=d;if(r===!0)for(var m=p.from;m<=p.to;m++)Wp(m,e,r);else{for(var m=p.from;m<=p.to&&m<vo.minOptimizationVal;m++)Wp(m,e,r);if(p.to>=vo.minOptimizationVal)for(var y=p.from>=vo.minOptimizationVal?p.from:vo.minOptimizationVal,S=p.to,_=(0,vo.charCodeToOptimizedIndex)(y),w=(0,vo.charCodeToOptimizedIndex)(S),k=_;k<=w;k++)e[k]=k}}});break;case"Group":Hp(a.value,e,r);break;default:throw Error("Non Exhaustive Match")}var s=a.quantifier!==void 0&&a.quantifier.atLeast===0;if(a.type==="Group"&&cR(a)===!1||a.type!=="Group"&&s===!1)break}break;default:throw Error("non exhaustive match!")}return(0,pie.default)(e)}wr.firstCharOptimizedIndices=Hp;function Wp(t,e,r){var n=(0,vo.charCodeToOptimizedIndex)(t);e[n]=n,r===!0&&mie(t,e)}function mie(t,e){var r=String.fromCharCode(t),n=r.toUpperCase();if(n!==r){var i=(0,vo.charCodeToOptimizedIndex)(n.charCodeAt(0));e[i]=i}else{var o=r.toLowerCase();if(o!==r){var i=(0,vo.charCodeToOptimizedIndex)(o.charCodeAt(0));e[i]=i}}}function qx(t,e){return(0,uR.default)(t.value,function(r){if(typeof r=="number")return(0,lR.default)(e,r);var n=r;return(0,uR.default)(e,function(i){return n.from<=i&&i<=n.to})!==void 0})}function cR(t){var e=t.quantifier;return e&&e.atLeast===0?!0:t.value?(0,lie.default)(t.value)?(0,die.default)(t.value,cR):cR(t.value):!1}var gie=function(t){cie(e,t);function e(r){var n=t.call(this)||this;return n.targetCharCodes=r,n.found=!1,n}return e.prototype.visitChildren=function(r){if(this.found!==!0){switch(r.type){case"Lookahead":this.visitLookahead(r);return;case"NegativeLookahead":this.visitNegativeLookahead(r);return}t.prototype.visitChildren.call(this,r)}},e.prototype.visitCharacter=function(r){(0,lR.default)(this.targetCharCodes,r.value)&&(this.found=!0)},e.prototype.visitSet=function(r){r.complement?qx(r,this.targetCharCodes)===void 0&&(this.found=!0):qx(r,this.targetCharCodes)!==void 0&&(this.found=!0)},e}(Ix.BaseRegExpVisitor);function yie(t,e){if(e instanceof RegExp){var r=(0,xx.getRegExpAst)(e),n=new gie(t);return n.visit(r),n.found}else return(0,uR.default)(e,function(i){return(0,lR.default)(t,i.charCodeAt(0))})!==void 0}wr.canMatchCharCode=yie});var dR=h(Q=>{"use strict";var jx=Q&&Q.__extends||function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(n[o]=i[o])},t(e,r)};return function(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");t(e,r);function n(){this.constructor=e}e.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}(),Nt=Q&&Q.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(Q,"__esModule",{value:!0});Q.charCodeToOptimizedIndex=Q.minOptimizationVal=Q.buildLineBreakIssueMessage=Q.LineTerminatorOptimizedTester=Q.isShortPattern=Q.isCustomPattern=Q.cloneEmptyGroups=Q.performWarningRuntimeChecks=Q.performRuntimeChecks=Q.addStickyFlag=Q.addStartOfInput=Q.findUnreachablePatterns=Q.findModesThatDoNotExist=Q.findInvalidGroupType=Q.findDuplicatePatterns=Q.findUnsupportedFlags=Q.findStartOfInputAnchor=Q.findEmptyMatchRegExps=Q.findEndOfInputAnchor=Q.findInvalidPatterns=Q.findMissingPatterns=Q.validatePatterns=Q.analyzeTokenTypes=Q.enableSticky=Q.disableSticky=Q.SUPPORT_STICKY=Q.MODES=Q.DEFAULT_MODE=void 0;var Ux=Sc(),Xe=ul(),vie=Nt(lu()),Gx=Nt(dn()),Wx=Nt(al()),Bp=Nt(Ve()),_ie=Nt(Ei()),Tie=Nt(ti()),Hx=Nt($p()),Kx=Nt(Fp()),$x=Nt(vx()),vt=Nt(ir()),_o=Nt(or()),To=Nt(tl()),zp=Nt(Ws()),pR=Nt(La()),Rie=Nt(jp()),Dr=Nt(pn()),bie=Nt(fn()),Zo=Nt(BT()),qi=Nt(sl()),Cie=Nt(sR()),Vp=Nt(yo()),Yp=Nt(go()),Fx=au(),pu=Mx(),Bx=Gp(),Ma="PATTERN";Q.DEFAULT_MODE="defaultMode";Q.MODES="modes";Q.SUPPORT_STICKY=typeof new RegExp("(?:)").sticky=="boolean";function Pie(){Q.SUPPORT_STICKY=!1}Q.disableSticky=Pie;function Aie(){Q.SUPPORT_STICKY=!0}Q.enableSticky=Aie;function Sie(t,e){e=(0,Cie.default)(e,{useSticky:Q.SUPPORT_STICKY,debug:!1,safeMode:!1,positionTracking:"full",lineTerminatorCharacters:["\r",`
`],tracer:function(C,E){return E()}});var r=e.tracer;r("initCharCodeToOptimizedIndexMap",function(){Lie()});var n;r("Reject Lexer.NA",function(){n=(0,Hx.default)(t,function(C){return C[Ma]===Xe.Lexer.NA})});var i=!1,o;r("Transform Patterns",function(){i=!1,o=(0,vt.default)(n,function(C){var E=C[Ma];if((0,Zo.default)(E)){var L=E.source;return L.length===1&&L!=="^"&&L!=="$"&&L!=="."&&!E.ignoreCase?L:L.length===2&&L[0]==="\\"&&!(0,Yp.default)(["d","D","s","S","t","r","n","t","0","c","b","B","f","v","w","W"],L[1])?L[1]:e.useSticky?mR(E):hR(E)}else{if((0,zp.default)(E))return i=!0,{exec:E};if(typeof E=="object")return i=!0,E;if(typeof E=="string"){if(E.length===1)return E;var U=E.replace(/[\\^$.*+?()[\]{}|]/g,"\\$&"),z=new RegExp(U);return e.useSticky?mR(z):hR(z)}else throw Error("non exhaustive match")}})});var a,s,u,d,p;r("misc mapping",function(){a=(0,vt.default)(n,function(C){return C.tokenTypeIdx}),s=(0,vt.default)(n,function(C){var E=C.GROUP;if(E!==Xe.Lexer.SKIPPED){if((0,To.default)(E))return E;if((0,pR.default)(E))return!1;throw Error("non exhaustive match")}}),u=(0,vt.default)(n,function(C){var E=C.LONGER_ALT;if(E){var L=(0,Bp.default)(E)?(0,vt.default)(E,function(U){return(0,$x.default)(n,U)}):[(0,$x.default)(n,E)];return L}}),d=(0,vt.default)(n,function(C){return C.PUSH_MODE}),p=(0,vt.default)(n,function(C){return(0,Dr.default)(C,"POP_MODE")})});var m;r("Line Terminator Handling",function(){var C=aL(e.lineTerminatorCharacters);m=(0,vt.default)(n,function(E){return!1}),e.positionTracking!=="onlyOffset"&&(m=(0,vt.default)(n,function(E){return(0,Dr.default)(E,"LINE_BREAKS")?!!E.LINE_BREAKS:iL(E,C)===!1&&(0,pu.canMatchCharCode)(C,E.PATTERN)}))});var y,S,_,w;r("Misc Mapping #2",function(){y=(0,vt.default)(n,yR),S=(0,vt.default)(o,nL),_=(0,Vp.default)(n,function(C,E){var L=E.GROUP;return(0,To.default)(L)&&L!==Xe.Lexer.SKIPPED&&(C[L]=[]),C},{}),w=(0,vt.default)(o,function(C,E){return{pattern:o[E],longerAlt:u[E],canLineTerminator:m[E],isCustom:y[E],short:S[E],group:s[E],push:d[E],pop:p[E],tokenTypeIdx:a[E],tokenType:n[E]}})});var k=!0,N=[];return e.safeMode||r("First Char Optimization",function(){N=(0,Vp.default)(n,function(C,E,L){if(typeof E.PATTERN=="string"){var U=E.PATTERN.charCodeAt(0),z=gR(U);fR(C,z,w[L])}else if((0,Bp.default)(E.START_CHARS_HINT)){var te;(0,_o.default)(E.START_CHARS_HINT,function(Z){var G=typeof Z=="string"?Z.charCodeAt(0):Z,j=gR(G);te!==j&&(te=j,fR(C,j,w[L]))})}else if((0,Zo.default)(E.PATTERN))if(E.PATTERN.unicode)k=!1,e.ensureOptimizations&&(0,Fx.PRINT_ERROR)("".concat(pu.failedOptimizationPrefixMsg)+"	Unable to analyze < ".concat(E.PATTERN.toString(),` > pattern.
`)+`	The regexp unicode flag is not currently supported by the regexp-to-ast library.
	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNICODE_OPTIMIZE`);else{var we=(0,pu.getOptimizedStartCodesIndices)(E.PATTERN,e.ensureOptimizations);(0,Gx.default)(we)&&(k=!1),(0,_o.default)(we,function(Z){fR(C,Z,w[L])})}else e.ensureOptimizations&&(0,Fx.PRINT_ERROR)("".concat(pu.failedOptimizationPrefixMsg)+"	TokenType: <".concat(E.name,`> is using a custom token pattern without providing <start_chars_hint> parameter.
`)+`	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_OPTIMIZE`),k=!1;return C},[])}),{emptyGroups:_,patternIdxToConfig:w,charCodeToPatternIdxToConfig:N,hasCustom:i,canBeOptimized:k}}Q.analyzeTokenTypes=Sie;function Eie(t,e){var r=[],n=Vx(t);r=r.concat(n.errors);var i=zx(n.valid),o=i.valid;return r=r.concat(i.errors),r=r.concat(kie(o)),r=r.concat(eL(o)),r=r.concat(tL(o,e)),r=r.concat(rL(o)),r}Q.validatePatterns=Eie;function kie(t){var e=[],r=(0,qi.default)(t,function(n){return(0,Zo.default)(n[Ma])});return e=e.concat(Yx(r)),e=e.concat(Jx(r)),e=e.concat(Qx(r)),e=e.concat(Zx(r)),e=e.concat(Xx(r)),e}function Vx(t){var e=(0,qi.default)(t,function(i){return!(0,Dr.default)(i,Ma)}),r=(0,vt.default)(e,function(i){return{message:"Token Type: ->"+i.name+"<- missing static 'PATTERN' property",type:Xe.LexerDefinitionErrorType.MISSING_PATTERN,tokenTypes:[i]}}),n=(0,Kx.default)(t,e);return{errors:r,valid:n}}Q.findMissingPatterns=Vx;function zx(t){var e=(0,qi.default)(t,function(i){var o=i[Ma];return!(0,Zo.default)(o)&&!(0,zp.default)(o)&&!(0,Dr.default)(o,"exec")&&!(0,To.default)(o)}),r=(0,vt.default)(e,function(i){return{message:"Token Type: ->"+i.name+"<- static 'PATTERN' can only be a RegExp, a Function matching the {CustomPatternMatcherFunc} type or an Object matching the {ICustomPattern} interface.",type:Xe.LexerDefinitionErrorType.INVALID_PATTERN,tokenTypes:[i]}}),n=(0,Kx.default)(t,e);return{errors:r,valid:n}}Q.findInvalidPatterns=zx;var Nie=/[^\\][$]/;function Yx(t){var e=function(i){jx(o,i);function o(){var a=i!==null&&i.apply(this,arguments)||this;return a.found=!1,a}return o.prototype.visitEndAnchor=function(a){this.found=!0},o}(Ux.BaseRegExpVisitor),r=(0,qi.default)(t,function(i){var o=i.PATTERN;try{var a=(0,Bx.getRegExpAst)(o),s=new e;return s.visit(a),s.found}catch{return Nie.test(o.source)}}),n=(0,vt.default)(r,function(i){return{message:`Unexpected RegExp Anchor Error:
	Token Type: ->`+i.name+`<- static 'PATTERN' cannot contain end of input anchor '$'
	See chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.`,type:Xe.LexerDefinitionErrorType.EOI_ANCHOR_FOUND,tokenTypes:[i]}});return n}Q.findEndOfInputAnchor=Yx;function Xx(t){var e=(0,qi.default)(t,function(n){var i=n.PATTERN;return i.test("")}),r=(0,vt.default)(e,function(n){return{message:"Token Type: ->"+n.name+"<- static 'PATTERN' must not match an empty string",type:Xe.LexerDefinitionErrorType.EMPTY_MATCH_PATTERN,tokenTypes:[n]}});return r}Q.findEmptyMatchRegExps=Xx;var wie=/[^\\[][\^]|^\^/;function Jx(t){var e=function(i){jx(o,i);function o(){var a=i!==null&&i.apply(this,arguments)||this;return a.found=!1,a}return o.prototype.visitStartAnchor=function(a){this.found=!0},o}(Ux.BaseRegExpVisitor),r=(0,qi.default)(t,function(i){var o=i.PATTERN;try{var a=(0,Bx.getRegExpAst)(o),s=new e;return s.visit(a),s.found}catch{return wie.test(o.source)}}),n=(0,vt.default)(r,function(i){return{message:`Unexpected RegExp Anchor Error:
	Token Type: ->`+i.name+`<- static 'PATTERN' cannot contain start of input anchor '^'
	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.`,type:Xe.LexerDefinitionErrorType.SOI_ANCHOR_FOUND,tokenTypes:[i]}});return n}Q.findStartOfInputAnchor=Jx;function Qx(t){var e=(0,qi.default)(t,function(n){var i=n[Ma];return i instanceof RegExp&&(i.multiline||i.global)}),r=(0,vt.default)(e,function(n){return{message:"Token Type: ->"+n.name+"<- static 'PATTERN' may NOT contain global('g') or multiline('m')",type:Xe.LexerDefinitionErrorType.UNSUPPORTED_FLAGS_FOUND,tokenTypes:[n]}});return r}Q.findUnsupportedFlags=Qx;function Zx(t){var e=[],r=(0,vt.default)(t,function(o){return(0,Vp.default)(t,function(a,s){return o.PATTERN.source===s.PATTERN.source&&!(0,Yp.default)(e,s)&&s.PATTERN!==Xe.Lexer.NA&&(e.push(s),a.push(s)),a},[])});r=(0,Wx.default)(r);var n=(0,qi.default)(r,function(o){return o.length>1}),i=(0,vt.default)(n,function(o){var a=(0,vt.default)(o,function(u){return u.name}),s=(0,vie.default)(o).PATTERN;return{message:"The same RegExp pattern ->".concat(s,"<-")+"has been used in all of the following Token Types: ".concat(a.join(", ")," <-"),type:Xe.LexerDefinitionErrorType.DUPLICATE_PATTERNS_FOUND,tokenTypes:o}});return i}Q.findDuplicatePatterns=Zx;function eL(t){var e=(0,qi.default)(t,function(n){if(!(0,Dr.default)(n,"GROUP"))return!1;var i=n.GROUP;return i!==Xe.Lexer.SKIPPED&&i!==Xe.Lexer.NA&&!(0,To.default)(i)}),r=(0,vt.default)(e,function(n){return{message:"Token Type: ->"+n.name+"<- static 'GROUP' can only be Lexer.SKIPPED/Lexer.NA/A String",type:Xe.LexerDefinitionErrorType.INVALID_GROUP_TYPE_FOUND,tokenTypes:[n]}});return r}Q.findInvalidGroupType=eL;function tL(t,e){var r=(0,qi.default)(t,function(i){return i.PUSH_MODE!==void 0&&!(0,Yp.default)(e,i.PUSH_MODE)}),n=(0,vt.default)(r,function(i){var o="Token Type: ->".concat(i.name,"<- static 'PUSH_MODE' value cannot refer to a Lexer Mode ->").concat(i.PUSH_MODE,"<-")+"which does not exist";return{message:o,type:Xe.LexerDefinitionErrorType.PUSH_MODE_DOES_NOT_EXIST,tokenTypes:[i]}});return n}Q.findModesThatDoNotExist=tL;function rL(t){var e=[],r=(0,Vp.default)(t,function(n,i,o){var a=i.PATTERN;return a===Xe.Lexer.NA||((0,To.default)(a)?n.push({str:a,idx:o,tokenType:i}):(0,Zo.default)(a)&&Oie(a)&&n.push({str:a.source,idx:o,tokenType:i})),n},[]);return(0,_o.default)(t,function(n,i){(0,_o.default)(r,function(o){var a=o.str,s=o.idx,u=o.tokenType;if(i<s&&Die(a,n.PATTERN)){var d="Token: ->".concat(u.name,`<- can never be matched.
`)+"Because it appears AFTER the Token Type ->".concat(n.name,"<-")+`in the lexer's definition.
See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNREACHABLE`;e.push({message:d,type:Xe.LexerDefinitionErrorType.UNREACHABLE_PATTERN,tokenTypes:[n,u]})}})}),e}Q.findUnreachablePatterns=rL;function Die(t,e){if((0,Zo.default)(e)){var r=e.exec(t);return r!==null&&r.index===0}else{if((0,zp.default)(e))return e(t,0,[],{});if((0,Dr.default)(e,"exec"))return e.exec(t,0,[],{});if(typeof e=="string")return e===t;throw Error("non exhaustive match")}}function Oie(t){var e=[".","\\","[","]","|","^","$","(",")","?","*","+","{"];return(0,Rie.default)(e,function(r){return t.source.indexOf(r)!==-1})===void 0}function hR(t){var e=t.ignoreCase?"i":"";return new RegExp("^(?:".concat(t.source,")"),e)}Q.addStartOfInput=hR;function mR(t){var e=t.ignoreCase?"iy":"y";return new RegExp("".concat(t.source),e)}Q.addStickyFlag=mR;function qie(t,e,r){var n=[];return(0,Dr.default)(t,Q.DEFAULT_MODE)||n.push({message:"A MultiMode Lexer cannot be initialized without a <"+Q.DEFAULT_MODE+`> property in its definition
`,type:Xe.LexerDefinitionErrorType.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE}),(0,Dr.default)(t,Q.MODES)||n.push({message:"A MultiMode Lexer cannot be initialized without a <"+Q.MODES+`> property in its definition
`,type:Xe.LexerDefinitionErrorType.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY}),(0,Dr.default)(t,Q.MODES)&&(0,Dr.default)(t,Q.DEFAULT_MODE)&&!(0,Dr.default)(t.modes,t.defaultMode)&&n.push({message:"A MultiMode Lexer cannot be initialized with a ".concat(Q.DEFAULT_MODE,": <").concat(t.defaultMode,">")+`which does not exist
`,type:Xe.LexerDefinitionErrorType.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST}),(0,Dr.default)(t,Q.MODES)&&(0,_o.default)(t.modes,function(i,o){(0,_o.default)(i,function(a,s){if((0,pR.default)(a))n.push({message:"A Lexer cannot be initialized using an undefined Token Type. Mode:"+"<".concat(o,"> at index: <").concat(s,`>
`),type:Xe.LexerDefinitionErrorType.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED});else if((0,Dr.default)(a,"LONGER_ALT")){var u=(0,Bp.default)(a.LONGER_ALT)?a.LONGER_ALT:[a.LONGER_ALT];(0,_o.default)(u,function(d){!(0,pR.default)(d)&&!(0,Yp.default)(i,d)&&n.push({message:"A MultiMode Lexer cannot be initialized with a longer_alt <".concat(d.name,"> on token <").concat(a.name,"> outside of mode <").concat(o,`>
`),type:Xe.LexerDefinitionErrorType.MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE})})}})}),n}Q.performRuntimeChecks=qie;function Iie(t,e,r){var n=[],i=!1,o=(0,Wx.default)((0,Tie.default)((0,_ie.default)(t.modes))),a=(0,Hx.default)(o,function(u){return u[Ma]===Xe.Lexer.NA}),s=aL(r);return e&&(0,_o.default)(a,function(u){var d=iL(u,s);if(d!==!1){var p=oL(u,d),m={message:p,type:d.issue,tokenType:u};n.push(m)}else(0,Dr.default)(u,"LINE_BREAKS")?u.LINE_BREAKS===!0&&(i=!0):(0,pu.canMatchCharCode)(s,u.PATTERN)&&(i=!0)}),e&&!i&&n.push({message:`Warning: No LINE_BREAKS Found.
	This Lexer has been defined to track line and column information,
	But none of the Token Types can be identified as matching a line terminator.
	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#LINE_BREAKS 
	for details.`,type:Xe.LexerDefinitionErrorType.NO_LINE_BREAKS_FLAGS}),n}Q.performWarningRuntimeChecks=Iie;function xie(t){var e={},r=(0,bie.default)(t);return(0,_o.default)(r,function(n){var i=t[n];if((0,Bp.default)(i))e[n]=[];else throw Error("non exhaustive match")}),e}Q.cloneEmptyGroups=xie;function yR(t){var e=t.PATTERN;if((0,Zo.default)(e))return!1;if((0,zp.default)(e))return!0;if((0,Dr.default)(e,"exec"))return!0;if((0,To.default)(e))return!1;throw Error("non exhaustive match")}Q.isCustomPattern=yR;function nL(t){return(0,To.default)(t)&&t.length===1?t.charCodeAt(0):!1}Q.isShortPattern=nL;Q.LineTerminatorOptimizedTester={test:function(t){for(var e=t.length,r=this.lastIndex;r<e;r++){var n=t.charCodeAt(r);if(n===10)return this.lastIndex=r+1,!0;if(n===13)return t.charCodeAt(r+1)===10?this.lastIndex=r+2:this.lastIndex=r+1,!0}return!1},lastIndex:0};function iL(t,e){if((0,Dr.default)(t,"LINE_BREAKS"))return!1;if((0,Zo.default)(t.PATTERN)){try{(0,pu.canMatchCharCode)(e,t.PATTERN)}catch(r){return{issue:Xe.LexerDefinitionErrorType.IDENTIFY_TERMINATOR,errMsg:r.message}}return!1}else{if((0,To.default)(t.PATTERN))return!1;if(yR(t))return{issue:Xe.LexerDefinitionErrorType.CUSTOM_LINE_BREAK};throw Error("non exhaustive match")}}function oL(t,e){if(e.issue===Xe.LexerDefinitionErrorType.IDENTIFY_TERMINATOR)return`Warning: unable to identify line terminator usage in pattern.
`+"	The problem is in the <".concat(t.name,`> Token Type
`)+"	 Root cause: ".concat(e.errMsg,`.
`)+"	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#IDENTIFY_TERMINATOR";if(e.issue===Xe.LexerDefinitionErrorType.CUSTOM_LINE_BREAK)return`Warning: A Custom Token Pattern should specify the <line_breaks> option.
`+"	The problem is in the <".concat(t.name,`> Token Type
`)+"	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_LINE_BREAK";throw Error("non exhaustive match")}Q.buildLineBreakIssueMessage=oL;function aL(t){var e=(0,vt.default)(t,function(r){return(0,To.default)(r)?r.charCodeAt(0):r});return e}function fR(t,e,r){t[e]===void 0?t[e]=[r]:t[e].push(r)}Q.minOptimizationVal=256;var Kp=[];function gR(t){return t<Q.minOptimizationVal?t:Kp[t]}Q.charCodeToOptimizedIndex=gR;function Lie(){if((0,Gx.default)(Kp)){Kp=new Array(65536);for(var t=0;t<65536;t++)Kp[t]=t>255?255+~~(t/255):t}}});var Xp=h((PCe,sL)=>{function Mie(t){var e=t==null?0:t.length;return e?t[e-1]:void 0}sL.exports=Mie});var Fa=h(ke=>{"use strict";var Ii=ke&&ke.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(ke,"__esModule",{value:!0});ke.isTokenType=ke.hasExtendingTokensTypesMapProperty=ke.hasExtendingTokensTypesProperty=ke.hasCategoriesProperty=ke.hasShortKeyProperty=ke.singleAssignCategoriesToksMap=ke.assignCategoriesMapProp=ke.assignCategoriesTokensProp=ke.assignTokenDefaultProps=ke.expandCategories=ke.augmentTokenTypes=ke.tokenIdxToClass=ke.tokenShortNameIdx=ke.tokenStructuredMatcherNoCategories=ke.tokenStructuredMatcher=void 0;var $ie=Ii(dn()),Fie=Ii(al()),jie=Ii(Ve()),Uie=Ii(ti()),Gie=Ii(Fp()),Wie=Ii(ir()),$a=Ii(or()),cl=Ii(pn()),Hie=Ii(go()),Kie=Ii(ho());function Bie(t,e){var r=t.tokenTypeIdx;return r===e.tokenTypeIdx?!0:e.isParent===!0&&e.categoryMatchesMap[r]===!0}ke.tokenStructuredMatcher=Bie;function Vie(t,e){return t.tokenTypeIdx===e.tokenTypeIdx}ke.tokenStructuredMatcherNoCategories=Vie;ke.tokenShortNameIdx=1;ke.tokenIdxToClass={};function zie(t){var e=uL(t);cL(e),dL(e),lL(e),(0,$a.default)(e,function(r){r.isParent=r.categoryMatches.length>0})}ke.augmentTokenTypes=zie;function uL(t){for(var e=(0,Kie.default)(t),r=t,n=!0;n;){r=(0,Fie.default)((0,Uie.default)((0,Wie.default)(r,function(o){return o.CATEGORIES})));var i=(0,Gie.default)(r,e);e=e.concat(i),(0,$ie.default)(i)?n=!1:r=i}return e}ke.expandCategories=uL;function cL(t){(0,$a.default)(t,function(e){fL(e)||(ke.tokenIdxToClass[ke.tokenShortNameIdx]=e,e.tokenTypeIdx=ke.tokenShortNameIdx++),vR(e)&&!(0,jie.default)(e.CATEGORIES)&&(e.CATEGORIES=[e.CATEGORIES]),vR(e)||(e.CATEGORIES=[]),pL(e)||(e.categoryMatches=[]),hL(e)||(e.categoryMatchesMap={})})}ke.assignTokenDefaultProps=cL;function lL(t){(0,$a.default)(t,function(e){e.categoryMatches=[],(0,$a.default)(e.categoryMatchesMap,function(r,n){e.categoryMatches.push(ke.tokenIdxToClass[n].tokenTypeIdx)})})}ke.assignCategoriesTokensProp=lL;function dL(t){(0,$a.default)(t,function(e){_R([],e)})}ke.assignCategoriesMapProp=dL;function _R(t,e){(0,$a.default)(t,function(r){e.categoryMatchesMap[r.tokenTypeIdx]=!0}),(0,$a.default)(e.CATEGORIES,function(r){var n=t.concat(e);(0,Hie.default)(n,r)||_R(n,r)})}ke.singleAssignCategoriesToksMap=_R;function fL(t){return(0,cl.default)(t,"tokenTypeIdx")}ke.hasShortKeyProperty=fL;function vR(t){return(0,cl.default)(t,"CATEGORIES")}ke.hasCategoriesProperty=vR;function pL(t){return(0,cl.default)(t,"categoryMatches")}ke.hasExtendingTokensTypesProperty=pL;function hL(t){return(0,cl.default)(t,"categoryMatchesMap")}ke.hasExtendingTokensTypesMapProperty=hL;function Yie(t){return(0,cl.default)(t,"tokenTypeIdx")}ke.isTokenType=Yie});var TR=h(Jp=>{"use strict";Object.defineProperty(Jp,"__esModule",{value:!0});Jp.defaultLexerErrorProvider=void 0;Jp.defaultLexerErrorProvider={buildUnableToPopLexerModeMessage:function(t){return"Unable to pop Lexer Mode after encountering Token ->".concat(t.image,"<- The Mode Stack is empty")},buildUnexpectedCharactersMessage:function(t,e,r,n,i){return"unexpected character: ->".concat(t.charAt(e),"<- at offset: ").concat(e,",")+" skipped ".concat(r," characters.")}}});var ul=h(bo=>{"use strict";var hn=bo&&bo.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(bo,"__esModule",{value:!0});bo.Lexer=bo.LexerDefinitionErrorType=void 0;var Ro=dR(),RR=hn(Ip()),Qp=hn(dn()),Xie=hn(Ve()),Jie=hn(Xp()),Qie=hn($p()),mL=hn(ir()),bR=hn(or()),Zie=hn(fn()),eoe=hn(La()),gL=hn(xa()),yL=hn(nl()),toe=hn(yo()),vL=hn(ho()),CR=au(),roe=Fa(),noe=TR(),ioe=Gp(),ooe;(function(t){t[t.MISSING_PATTERN=0]="MISSING_PATTERN",t[t.INVALID_PATTERN=1]="INVALID_PATTERN",t[t.EOI_ANCHOR_FOUND=2]="EOI_ANCHOR_FOUND",t[t.UNSUPPORTED_FLAGS_FOUND=3]="UNSUPPORTED_FLAGS_FOUND",t[t.DUPLICATE_PATTERNS_FOUND=4]="DUPLICATE_PATTERNS_FOUND",t[t.INVALID_GROUP_TYPE_FOUND=5]="INVALID_GROUP_TYPE_FOUND",t[t.PUSH_MODE_DOES_NOT_EXIST=6]="PUSH_MODE_DOES_NOT_EXIST",t[t.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE=7]="MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE",t[t.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY=8]="MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY",t[t.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST=9]="MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST",t[t.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED=10]="LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED",t[t.SOI_ANCHOR_FOUND=11]="SOI_ANCHOR_FOUND",t[t.EMPTY_MATCH_PATTERN=12]="EMPTY_MATCH_PATTERN",t[t.NO_LINE_BREAKS_FLAGS=13]="NO_LINE_BREAKS_FLAGS",t[t.UNREACHABLE_PATTERN=14]="UNREACHABLE_PATTERN",t[t.IDENTIFY_TERMINATOR=15]="IDENTIFY_TERMINATOR",t[t.CUSTOM_LINE_BREAK=16]="CUSTOM_LINE_BREAK",t[t.MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE=17]="MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE"})(ooe=bo.LexerDefinitionErrorType||(bo.LexerDefinitionErrorType={}));var ll={deferDefinitionErrorsHandling:!1,positionTracking:"full",lineTerminatorsPattern:/\n|\r\n?/g,lineTerminatorCharacters:[`
`,"\r"],ensureOptimizations:!1,safeMode:!1,errorMessageProvider:noe.defaultLexerErrorProvider,traceInitPerf:!1,skipValidations:!1,recoveryEnabled:!0};Object.freeze(ll);var aoe=function(){function t(e,r){r===void 0&&(r=ll);var n=this;if(this.lexerDefinition=e,this.lexerDefinitionErrors=[],this.lexerDefinitionWarning=[],this.patternIdxToConfig={},this.charCodeToPatternIdxToConfig={},this.modes=[],this.emptyGroups={},this.trackStartLines=!0,this.trackEndLines=!0,this.hasCustom=!1,this.canModeBeOptimized={},this.TRACE_INIT=function(o,a){if(n.traceInitPerf===!0){n.traceInitIndent++;var s=new Array(n.traceInitIndent+1).join("	");n.traceInitIndent<n.traceInitMaxIdent&&console.log("".concat(s,"--> <").concat(o,">"));var u=(0,CR.timer)(a),d=u.time,p=u.value,m=d>10?console.warn:console.log;return n.traceInitIndent<n.traceInitMaxIdent&&m("".concat(s,"<-- <").concat(o,"> time: ").concat(d,"ms")),n.traceInitIndent--,p}else return a()},typeof r=="boolean")throw Error(`The second argument to the Lexer constructor is now an ILexerConfig Object.
a boolean 2nd argument is no longer supported`);this.config=(0,yL.default)({},ll,r);var i=this.config.traceInitPerf;i===!0?(this.traceInitMaxIdent=1/0,this.traceInitPerf=!0):typeof i=="number"&&(this.traceInitMaxIdent=i,this.traceInitPerf=!0),this.traceInitIndent=-1,this.TRACE_INIT("Lexer Constructor",function(){var o,a=!0;n.TRACE_INIT("Lexer Config handling",function(){if(n.config.lineTerminatorsPattern===ll.lineTerminatorsPattern)n.config.lineTerminatorsPattern=Ro.LineTerminatorOptimizedTester;else if(n.config.lineTerminatorCharacters===ll.lineTerminatorCharacters)throw Error(`Error: Missing <lineTerminatorCharacters> property on the Lexer config.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#MISSING_LINE_TERM_CHARS`);if(r.safeMode&&r.ensureOptimizations)throw Error('"safeMode" and "ensureOptimizations" flags are mutually exclusive.');n.trackStartLines=/full|onlyStart/i.test(n.config.positionTracking),n.trackEndLines=/full/i.test(n.config.positionTracking),(0,Xie.default)(e)?o={modes:{defaultMode:(0,vL.default)(e)},defaultMode:Ro.DEFAULT_MODE}:(a=!1,o=(0,vL.default)(e))}),n.config.skipValidations===!1&&(n.TRACE_INIT("performRuntimeChecks",function(){n.lexerDefinitionErrors=n.lexerDefinitionErrors.concat((0,Ro.performRuntimeChecks)(o,n.trackStartLines,n.config.lineTerminatorCharacters))}),n.TRACE_INIT("performWarningRuntimeChecks",function(){n.lexerDefinitionWarning=n.lexerDefinitionWarning.concat((0,Ro.performWarningRuntimeChecks)(o,n.trackStartLines,n.config.lineTerminatorCharacters))})),o.modes=o.modes?o.modes:{},(0,bR.default)(o.modes,function(p,m){o.modes[m]=(0,Qie.default)(p,function(y){return(0,eoe.default)(y)})});var s=(0,Zie.default)(o.modes);if((0,bR.default)(o.modes,function(p,m){n.TRACE_INIT("Mode: <".concat(m,"> processing"),function(){if(n.modes.push(m),n.config.skipValidations===!1&&n.TRACE_INIT("validatePatterns",function(){n.lexerDefinitionErrors=n.lexerDefinitionErrors.concat((0,Ro.validatePatterns)(p,s))}),(0,Qp.default)(n.lexerDefinitionErrors)){(0,roe.augmentTokenTypes)(p);var y;n.TRACE_INIT("analyzeTokenTypes",function(){y=(0,Ro.analyzeTokenTypes)(p,{lineTerminatorCharacters:n.config.lineTerminatorCharacters,positionTracking:r.positionTracking,ensureOptimizations:r.ensureOptimizations,safeMode:r.safeMode,tracer:n.TRACE_INIT})}),n.patternIdxToConfig[m]=y.patternIdxToConfig,n.charCodeToPatternIdxToConfig[m]=y.charCodeToPatternIdxToConfig,n.emptyGroups=(0,yL.default)({},n.emptyGroups,y.emptyGroups),n.hasCustom=y.hasCustom||n.hasCustom,n.canModeBeOptimized[m]=y.canBeOptimized}})}),n.defaultMode=o.defaultMode,!(0,Qp.default)(n.lexerDefinitionErrors)&&!n.config.deferDefinitionErrorsHandling){var u=(0,mL.default)(n.lexerDefinitionErrors,function(p){return p.message}),d=u.join(`-----------------------
`);throw new Error(`Errors detected in definition of Lexer:
`+d)}(0,bR.default)(n.lexerDefinitionWarning,function(p){(0,CR.PRINT_WARNING)(p.message)}),n.TRACE_INIT("Choosing sub-methods implementations",function(){if(Ro.SUPPORT_STICKY?(n.chopInput=gL.default,n.match=n.matchWithTest):(n.updateLastIndex=RR.default,n.match=n.matchWithExec),a&&(n.handleModes=RR.default),n.trackStartLines===!1&&(n.computeNewColumn=gL.default),n.trackEndLines===!1&&(n.updateTokenEndLineColumnLocation=RR.default),/full/i.test(n.config.positionTracking))n.createTokenInstance=n.createFullToken;else if(/onlyStart/i.test(n.config.positionTracking))n.createTokenInstance=n.createStartOnlyToken;else if(/onlyOffset/i.test(n.config.positionTracking))n.createTokenInstance=n.createOffsetOnlyToken;else throw Error('Invalid <positionTracking> config option: "'.concat(n.config.positionTracking,'"'));n.hasCustom?(n.addToken=n.addTokenUsingPush,n.handlePayload=n.handlePayloadWithCustom):(n.addToken=n.addTokenUsingMemberAccess,n.handlePayload=n.handlePayloadNoCustom)}),n.TRACE_INIT("Failed Optimization Warnings",function(){var p=(0,toe.default)(n.canModeBeOptimized,function(m,y,S){return y===!1&&m.push(S),m},[]);if(r.ensureOptimizations&&!(0,Qp.default)(p))throw Error("Lexer Modes: < ".concat(p.join(", "),` > cannot be optimized.
`)+`	 Disable the "ensureOptimizations" lexer config flag to silently ignore this and run the lexer in an un-optimized mode.
	 Or inspect the console log for details on how to resolve these issues.`)}),n.TRACE_INIT("clearRegExpParserCache",function(){(0,ioe.clearRegExpParserCache)()}),n.TRACE_INIT("toFastProperties",function(){(0,CR.toFastProperties)(n)})})}return t.prototype.tokenize=function(e,r){if(r===void 0&&(r=this.defaultMode),!(0,Qp.default)(this.lexerDefinitionErrors)){var n=(0,mL.default)(this.lexerDefinitionErrors,function(o){return o.message}),i=n.join(`-----------------------
`);throw new Error(`Unable to Tokenize because Errors detected in definition of Lexer:
`+i)}return this.tokenizeInternal(e,r)},t.prototype.tokenizeInternal=function(e,r){var n=this,i,o,a,s,u,d,p,m,y,S,_,w,k,N,C,E,L=e,U=L.length,z=0,te=0,we=this.hasCustom?0:Math.floor(e.length/10),Z=new Array(we),G=[],j=this.trackStartLines?1:void 0,Y=this.trackStartLines?1:void 0,J=(0,Ro.cloneEmptyGroups)(this.emptyGroups),Ce=this.trackStartLines,_e=this.config.lineTerminatorsPattern,me=0,Je=[],ze=[],Se=[],ut=[];Object.freeze(ut);var cr;function Rr(){return Je}function fi(Tt){var Cr=(0,Ro.charCodeToOptimizedIndex)(Tt),dr=ze[Cr];return dr===void 0?ut:dr}var Mn=function(Tt){if(Se.length===1&&Tt.tokenType.PUSH_MODE===void 0){var Cr=n.config.errorMessageProvider.buildUnableToPopLexerModeMessage(Tt);G.push({offset:Tt.startOffset,line:Tt.startLine,column:Tt.startColumn,length:Tt.image.length,message:Cr})}else{Se.pop();var dr=(0,Jie.default)(Se);Je=n.patternIdxToConfig[dr],ze=n.charCodeToPatternIdxToConfig[dr],me=Je.length;var qr=n.canModeBeOptimized[dr]&&n.config.safeMode===!1;ze&&qr?cr=fi:cr=Rr}};function $n(Tt){Se.push(Tt),ze=this.charCodeToPatternIdxToConfig[Tt],Je=this.patternIdxToConfig[Tt],me=Je.length,me=Je.length;var Cr=this.canModeBeOptimized[Tt]&&this.config.safeMode===!1;ze&&Cr?cr=fi:cr=Rr}$n.call(this,r);for(var Bt,pi=this.config.recoveryEnabled;z<U;){d=null;var hi=L.charCodeAt(z),mi=cr(hi),Vi=mi.length;for(i=0;i<Vi;i++){Bt=mi[i];var Qe=Bt.pattern;p=null;var Dt=Bt.short;if(Dt!==!1?hi===Dt&&(d=Qe):Bt.isCustom===!0?(E=Qe.exec(L,z,Z,J),E!==null?(d=E[0],E.payload!==void 0&&(p=E.payload)):d=null):(this.updateLastIndex(Qe,z),d=this.match(Qe,e,z)),d!==null){if(u=Bt.longerAlt,u!==void 0){var zi=u.length;for(a=0;a<zi;a++){var Kr=Je[u[a]],Br=Kr.pattern;if(m=null,Kr.isCustom===!0?(E=Br.exec(L,z,Z,J),E!==null?(s=E[0],E.payload!==void 0&&(m=E.payload)):s=null):(this.updateLastIndex(Br,z),s=this.match(Br,e,z)),s&&s.length>d.length){d=s,p=m,Bt=Kr;break}}}break}}if(d!==null){if(y=d.length,S=Bt.group,S!==void 0&&(_=Bt.tokenTypeIdx,w=this.createTokenInstance(d,z,_,Bt.tokenType,j,Y,y),this.handlePayload(w,p),S===!1?te=this.addToken(Z,te,w):J[S].push(w)),e=this.chopInput(e,y),z=z+y,Y=this.computeNewColumn(Y,y),Ce===!0&&Bt.canLineTerminator===!0){var Vr=0,an=void 0,br=void 0;_e.lastIndex=0;do an=_e.test(d),an===!0&&(br=_e.lastIndex-1,Vr++);while(an===!0);Vr!==0&&(j=j+Vr,Y=y-br,this.updateTokenEndLineColumnLocation(w,S,br,Vr,j,Y,y))}this.handleModes(Bt,Mn,$n,w)}else{for(var Ot=z,zr=j,gi=Y,lr=pi===!1;lr===!1&&z<U;)for(e=this.chopInput(e,1),z++,o=0;o<me;o++){var qt=Je[o],Qe=qt.pattern,Dt=qt.short;if(Dt!==!1?L.charCodeAt(z)===Dt&&(lr=!0):qt.isCustom===!0?lr=Qe.exec(L,z,Z,J)!==null:(this.updateLastIndex(Qe,z),lr=Qe.exec(e)!==null),lr===!0)break}if(k=z-Ot,C=this.config.errorMessageProvider.buildUnexpectedCharactersMessage(L,Ot,k,zr,gi),G.push({offset:Ot,line:zr,column:gi,length:k,message:C}),pi===!1)break}}return this.hasCustom||(Z.length=te),{tokens:Z,groups:J,errors:G}},t.prototype.handleModes=function(e,r,n,i){if(e.pop===!0){var o=e.push;r(i),o!==void 0&&n.call(this,o)}else e.push!==void 0&&n.call(this,e.push)},t.prototype.chopInput=function(e,r){return e.substring(r)},t.prototype.updateLastIndex=function(e,r){e.lastIndex=r},t.prototype.updateTokenEndLineColumnLocation=function(e,r,n,i,o,a,s){var u,d;r!==void 0&&(u=n===s-1,d=u?-1:0,i===1&&u===!0||(e.endLine=o+d,e.endColumn=a-1+-d))},t.prototype.computeNewColumn=function(e,r){return e+r},t.prototype.createOffsetOnlyToken=function(e,r,n,i){return{image:e,startOffset:r,tokenTypeIdx:n,tokenType:i}},t.prototype.createStartOnlyToken=function(e,r,n,i,o,a){return{image:e,startOffset:r,startLine:o,startColumn:a,tokenTypeIdx:n,tokenType:i}},t.prototype.createFullToken=function(e,r,n,i,o,a,s){return{image:e,startOffset:r,endOffset:r+s-1,startLine:o,endLine:o,startColumn:a,endColumn:a+s-1,tokenTypeIdx:n,tokenType:i}},t.prototype.addTokenUsingPush=function(e,r,n){return e.push(n),r},t.prototype.addTokenUsingMemberAccess=function(e,r,n){return e[r]=n,r++,r},t.prototype.handlePayloadNoCustom=function(e,r){},t.prototype.handlePayloadWithCustom=function(e,r){r!==null&&(e.payload=r)},t.prototype.matchWithTest=function(e,r,n){var i=e.test(r);return i===!0?r.substring(n,e.lastIndex):null},t.prototype.matchWithExec=function(e,r){var n=e.exec(r);return n!==null?n[0]:null},t.SKIPPED="This marks a skipped Token pattern, this means each token identified by it willbe consumed and then thrown into oblivion, this can be used to for example to completely ignore whitespace.",t.NA=/NOT_APPLICABLE/,t}();bo.Lexer=aoe});var ja=h(Zt=>{"use strict";var PR=Zt&&Zt.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(Zt,"__esModule",{value:!0});Zt.tokenMatcher=Zt.createTokenInstance=Zt.EOF=Zt.createToken=Zt.hasTokenLabel=Zt.tokenName=Zt.tokenLabel=void 0;var soe=PR(tl()),Co=PR(pn()),uoe=PR(La()),coe=ul(),AR=Fa();function loe(t){return EL(t)?t.LABEL:t.name}Zt.tokenLabel=loe;function doe(t){return t.name}Zt.tokenName=doe;function EL(t){return(0,soe.default)(t.LABEL)&&t.LABEL!==""}Zt.hasTokenLabel=EL;var foe="parent",_L="categories",TL="label",RL="group",bL="push_mode",CL="pop_mode",PL="longer_alt",AL="line_breaks",SL="start_chars_hint";function kL(t){return poe(t)}Zt.createToken=kL;function poe(t){var e=t.pattern,r={};if(r.name=t.name,(0,uoe.default)(e)||(r.PATTERN=e),(0,Co.default)(t,foe))throw`The parent property is no longer supported.
See: https://github.com/chevrotain/chevrotain/issues/564#issuecomment-349062346 for details.`;return(0,Co.default)(t,_L)&&(r.CATEGORIES=t[_L]),(0,AR.augmentTokenTypes)([r]),(0,Co.default)(t,TL)&&(r.LABEL=t[TL]),(0,Co.default)(t,RL)&&(r.GROUP=t[RL]),(0,Co.default)(t,CL)&&(r.POP_MODE=t[CL]),(0,Co.default)(t,bL)&&(r.PUSH_MODE=t[bL]),(0,Co.default)(t,PL)&&(r.LONGER_ALT=t[PL]),(0,Co.default)(t,AL)&&(r.LINE_BREAKS=t[AL]),(0,Co.default)(t,SL)&&(r.START_CHARS_HINT=t[SL]),r}Zt.EOF=kL({name:"EOF",pattern:coe.Lexer.NA});(0,AR.augmentTokenTypes)([Zt.EOF]);function hoe(t,e,r,n,i,o,a,s){return{image:e,startOffset:r,endOffset:n,startLine:i,endLine:o,startColumn:a,endColumn:s,tokenTypeIdx:t.tokenTypeIdx,tokenType:t}}Zt.createTokenInstance=hoe;function moe(t,e){return(0,AR.tokenStructuredMatcher)(t,e)}Zt.tokenMatcher=moe});var mu=h(ri=>{"use strict";var kR=ri&&ri.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(ri,"__esModule",{value:!0});ri.defaultGrammarValidatorErrorProvider=ri.defaultGrammarResolverErrorProvider=ri.defaultParserErrorProvider=void 0;var hu=ja(),ER=kR(lu()),ea=kR(ir()),goe=kR(yo()),SR=wt(),NL=wt();ri.defaultParserErrorProvider={buildMismatchTokenMessage:function(t){var e=t.expected,r=t.actual,n=t.previous,i=t.ruleName,o=(0,hu.hasTokenLabel)(e),a=o?"--> ".concat((0,hu.tokenLabel)(e)," <--"):"token of type --> ".concat(e.name," <--"),s="Expecting ".concat(a," but found --> '").concat(r.image,"' <--");return s},buildNotAllInputParsedMessage:function(t){var e=t.firstRedundant,r=t.ruleName;return"Redundant input, expecting EOF but found: "+e.image},buildNoViableAltMessage:function(t){var e=t.expectedPathsPerAlt,r=t.actual,n=t.previous,i=t.customUserDescription,o=t.ruleName,a="Expecting: ",s=(0,ER.default)(r).image,u=`
but found: '`+s+"'";if(i)return a+i+u;var d=(0,goe.default)(e,function(S,_){return S.concat(_)},[]),p=(0,ea.default)(d,function(S){return"[".concat((0,ea.default)(S,function(_){return(0,hu.tokenLabel)(_)}).join(", "),"]")}),m=(0,ea.default)(p,function(S,_){return"  ".concat(_+1,". ").concat(S)}),y=`one of these possible Token sequences:
`.concat(m.join(`
`));return a+y+u},buildEarlyExitMessage:function(t){var e=t.expectedIterationPaths,r=t.actual,n=t.customUserDescription,i=t.ruleName,o="Expecting: ",a=(0,ER.default)(r).image,s=`
but found: '`+a+"'";if(n)return o+n+s;var u=(0,ea.default)(e,function(p){return"[".concat((0,ea.default)(p,function(m){return(0,hu.tokenLabel)(m)}).join(","),"]")}),d=`expecting at least one iteration which starts with one of these possible Token sequences::
  `+"<".concat(u.join(" ,"),">");return o+d+s}};Object.freeze(ri.defaultParserErrorProvider);ri.defaultGrammarResolverErrorProvider={buildRuleNotFoundError:function(t,e){var r="Invalid grammar, reference to a rule which is not defined: ->"+e.nonTerminalName+`<-
inside top level rule: ->`+t.name+"<-";return r}};ri.defaultGrammarValidatorErrorProvider={buildDuplicateFoundError:function(t,e){function r(p){return p instanceof SR.Terminal?p.terminalType.name:p instanceof SR.NonTerminal?p.nonTerminalName:""}var n=t.name,i=(0,ER.default)(e),o=i.idx,a=(0,NL.getProductionDslName)(i),s=r(i),u=o>0,d="->".concat(a).concat(u?o:"","<- ").concat(s?"with argument: ->".concat(s,"<-"):"",`
                  appears more than once (`).concat(e.length," times) in the top level rule: ->").concat(n,`<-.                  
                  For further details see: https://chevrotain.io/docs/FAQ.html#NUMERICAL_SUFFIXES 
                  `);return d=d.replace(/[ \t]+/g," "),d=d.replace(/\s\s+/g,`
`),d},buildNamespaceConflictError:function(t){var e=`Namespace conflict found in grammar.
`+"The grammar has both a Terminal(Token) and a Non-Terminal(Rule) named: <".concat(t.name,`>.
`)+`To resolve this make sure each Terminal and Non-Terminal names are unique
This is easy to accomplish by using the convention that Terminal names start with an uppercase letter
and Non-Terminal names start with a lower case letter.`;return e},buildAlternationPrefixAmbiguityError:function(t){var e=(0,ea.default)(t.prefixPath,function(i){return(0,hu.tokenLabel)(i)}).join(", "),r=t.alternation.idx===0?"":t.alternation.idx,n="Ambiguous alternatives: <".concat(t.ambiguityIndices.join(" ,"),`> due to common lookahead prefix
`)+"in <OR".concat(r,"> inside <").concat(t.topLevelRule.name,`> Rule,
`)+"<".concat(e,`> may appears as a prefix path in all these alternatives.
`)+`See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#COMMON_PREFIX
For Further details.`;return n},buildAlternationAmbiguityError:function(t){var e=(0,ea.default)(t.prefixPath,function(i){return(0,hu.tokenLabel)(i)}).join(", "),r=t.alternation.idx===0?"":t.alternation.idx,n="Ambiguous Alternatives Detected: <".concat(t.ambiguityIndices.join(" ,"),"> in <OR").concat(r,">")+" inside <".concat(t.topLevelRule.name,`> Rule,
`)+"<".concat(e,`> may appears as a prefix path in all these alternatives.
`);return n=n+`See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#AMBIGUOUS_ALTERNATIVES
For Further details.`,n},buildEmptyRepetitionError:function(t){var e=(0,NL.getProductionDslName)(t.repetition);t.repetition.idx!==0&&(e+=t.repetition.idx);var r="The repetition <".concat(e,"> within Rule <").concat(t.topLevelRule.name,`> can never consume any tokens.
`)+"This could lead to an infinite loop.";return r},buildTokenNameError:function(t){return"deprecated"},buildEmptyAlternationError:function(t){var e="Ambiguous empty alternative: <".concat(t.emptyChoiceIdx+1,">")+" in <OR".concat(t.alternation.idx,"> inside <").concat(t.topLevelRule.name,`> Rule.
`)+"Only the last alternative may be an empty alternative.";return e},buildTooManyAlternativesError:function(t){var e=`An Alternation cannot have more than 256 alternatives:
`+"<OR".concat(t.alternation.idx,"> inside <").concat(t.topLevelRule.name,`> Rule.
 has `).concat(t.alternation.definition.length+1," alternatives.");return e},buildLeftRecursionError:function(t){var e=t.topLevelRule.name,r=(0,ea.default)(t.leftRecursionPath,function(o){return o.name}),n="".concat(e," --> ").concat(r.concat([e]).join(" --> ")),i=`Left Recursion found in grammar.
`+"rule: <".concat(e,`> can be invoked from itself (directly or indirectly)
`)+`without consuming any Tokens. The grammar path that causes this is: 
 `.concat(n,`
`)+` To fix this refactor your grammar to remove the left recursion.
see: https://en.wikipedia.org/wiki/LL_parser#Left_factoring.`;return i},buildInvalidRuleNameError:function(t){return"deprecated"},buildDuplicateRuleNameError:function(t){var e;t.topLevelRule instanceof SR.Rule?e=t.topLevelRule.name:e=t.topLevelRule;var r="Duplicate definition, rule: ->".concat(e,"<- is already defined in the grammar: ->").concat(t.grammarName,"<-");return r}}});var OL=h(xi=>{"use strict";var yoe=xi&&xi.__extends||function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(n[o]=i[o])},t(e,r)};return function(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");t(e,r);function n(){this.constructor=e}e.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}(),wL=xi&&xi.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(xi,"__esModule",{value:!0});xi.GastRefResolverVisitor=xi.resolveGrammar=void 0;var voe=nn(),_oe=wL(or()),Toe=wL(Ei()),Roe=wt();function boe(t,e){var r=new DL(t,e);return r.resolveRefs(),r.errors}xi.resolveGrammar=boe;var DL=function(t){yoe(e,t);function e(r,n){var i=t.call(this)||this;return i.nameToTopRule=r,i.errMsgProvider=n,i.errors=[],i}return e.prototype.resolveRefs=function(){var r=this;(0,_oe.default)((0,Toe.default)(this.nameToTopRule),function(n){r.currTopLevel=n,n.accept(r)})},e.prototype.visitNonTerminal=function(r){var n=this.nameToTopRule[r.nonTerminalName];if(n)r.referencedRule=n;else{var i=this.errMsgProvider.buildRuleNotFoundError(this.currTopLevel,r);this.errors.push({message:i,type:voe.ParserDefinitionErrorType.UNRESOLVED_SUBRULE_REF,ruleName:this.currTopLevel.name,unresolvedRefName:r.nonTerminalName})}},e}(Roe.GAstVisitor);xi.GastRefResolverVisitor=DL});var IL=h((DCe,qL)=>{function Coe(t,e,r,n){for(var i=-1,o=t==null?0:t.length;++i<o;){var a=t[i];e(n,a,r(a),t)}return n}qL.exports=Coe});var LL=h((OCe,xL)=>{var Poe=Qo();function Aoe(t,e,r,n){return Poe(t,function(i,o,a){e(n,i,r(i),a)}),n}xL.exports=Aoe});var $L=h((qCe,ML)=>{var Soe=IL(),Eoe=LL(),koe=Dn(),Noe=Ve();function woe(t,e){return function(r,n){var i=Noe(r)?Soe:Eoe,o=e?e():{};return i(r,t,koe(n,2),o)}}ML.exports=woe});var NR=h((ICe,FL)=>{var Doe=_p(),Ooe=$L(),qoe=Object.prototype,Ioe=qoe.hasOwnProperty,xoe=Ooe(function(t,e,r){Ioe.call(t,r)?t[r].push(e):Doe(t,r,[e])});FL.exports=xoe});var Zp=h((xCe,jL)=>{var Loe=qp(),Moe=ir();function $oe(t,e){return Loe(Moe(t,e),1)}jL.exports=$oe});var eh=h((LCe,UL)=>{var Foe=Cp(),joe=su();function Uoe(t,e,r){var n=t==null?0:t.length;return n?(e=r||e===void 0?1:joe(e),e=n-e,Foe(t,0,e<0?0:e)):[]}UL.exports=Uoe});var fl=h(_t=>{"use strict";var Ga=_t&&_t.__extends||function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(n[o]=i[o])},t(e,r)};return function(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");t(e,r);function n(){this.constructor=e}e.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}(),Wa=_t&&_t.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(_t,"__esModule",{value:!0});_t.nextPossibleTokensAfter=_t.possiblePathsFrom=_t.NextTerminalAfterAtLeastOneSepWalker=_t.NextTerminalAfterAtLeastOneWalker=_t.NextTerminalAfterManySepWalker=_t.NextTerminalAfterManyWalker=_t.AbstractNextTerminalAfterProductionWalker=_t.NextAfterTokenWalker=_t.AbstractNextPossibleTokensWalker=void 0;var WL=Op(),rh=Wa(lu()),th=Wa(dn()),GL=Wa(eh()),jr=Wa(Pp()),Goe=Wa(Xp()),Woe=Wa(or()),Ua=Wa(ho()),Hoe=iR(),Ne=wt(),HL=function(t){Ga(e,t);function e(r,n){var i=t.call(this)||this;return i.topProd=r,i.path=n,i.possibleTokTypes=[],i.nextProductionName="",i.nextProductionOccurrence=0,i.found=!1,i.isAtEndOfPath=!1,i}return e.prototype.startWalking=function(){if(this.found=!1,this.path.ruleStack[0]!==this.topProd.name)throw Error("The path does not start with the walker's top Rule!");return this.ruleStack=(0,Ua.default)(this.path.ruleStack).reverse(),this.occurrenceStack=(0,Ua.default)(this.path.occurrenceStack).reverse(),this.ruleStack.pop(),this.occurrenceStack.pop(),this.updateExpectedNext(),this.walk(this.topProd),this.possibleTokTypes},e.prototype.walk=function(r,n){n===void 0&&(n=[]),this.found||t.prototype.walk.call(this,r,n)},e.prototype.walkProdRef=function(r,n,i){if(r.referencedRule.name===this.nextProductionName&&r.idx===this.nextProductionOccurrence){var o=n.concat(i);this.updateExpectedNext(),this.walk(r.referencedRule,o)}},e.prototype.updateExpectedNext=function(){(0,th.default)(this.ruleStack)?(this.nextProductionName="",this.nextProductionOccurrence=0,this.isAtEndOfPath=!0):(this.nextProductionName=this.ruleStack.pop(),this.nextProductionOccurrence=this.occurrenceStack.pop())},e}(WL.RestWalker);_t.AbstractNextPossibleTokensWalker=HL;var Koe=function(t){Ga(e,t);function e(r,n){var i=t.call(this,r,n)||this;return i.path=n,i.nextTerminalName="",i.nextTerminalOccurrence=0,i.nextTerminalName=i.path.lastTok.name,i.nextTerminalOccurrence=i.path.lastTokOccurrence,i}return e.prototype.walkTerminal=function(r,n,i){if(this.isAtEndOfPath&&r.terminalType.name===this.nextTerminalName&&r.idx===this.nextTerminalOccurrence&&!this.found){var o=n.concat(i),a=new Ne.Alternative({definition:o});this.possibleTokTypes=(0,Hoe.first)(a),this.found=!0}},e}(HL);_t.NextAfterTokenWalker=Koe;var dl=function(t){Ga(e,t);function e(r,n){var i=t.call(this)||this;return i.topRule=r,i.occurrence=n,i.result={token:void 0,occurrence:void 0,isEndOfRule:void 0},i}return e.prototype.startWalking=function(){return this.walk(this.topRule),this.result},e}(WL.RestWalker);_t.AbstractNextTerminalAfterProductionWalker=dl;var Boe=function(t){Ga(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e.prototype.walkMany=function(r,n,i){if(r.idx===this.occurrence){var o=(0,rh.default)(n.concat(i));this.result.isEndOfRule=o===void 0,o instanceof Ne.Terminal&&(this.result.token=o.terminalType,this.result.occurrence=o.idx)}else t.prototype.walkMany.call(this,r,n,i)},e}(dl);_t.NextTerminalAfterManyWalker=Boe;var Voe=function(t){Ga(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e.prototype.walkManySep=function(r,n,i){if(r.idx===this.occurrence){var o=(0,rh.default)(n.concat(i));this.result.isEndOfRule=o===void 0,o instanceof Ne.Terminal&&(this.result.token=o.terminalType,this.result.occurrence=o.idx)}else t.prototype.walkManySep.call(this,r,n,i)},e}(dl);_t.NextTerminalAfterManySepWalker=Voe;var zoe=function(t){Ga(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e.prototype.walkAtLeastOne=function(r,n,i){if(r.idx===this.occurrence){var o=(0,rh.default)(n.concat(i));this.result.isEndOfRule=o===void 0,o instanceof Ne.Terminal&&(this.result.token=o.terminalType,this.result.occurrence=o.idx)}else t.prototype.walkAtLeastOne.call(this,r,n,i)},e}(dl);_t.NextTerminalAfterAtLeastOneWalker=zoe;var Yoe=function(t){Ga(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e.prototype.walkAtLeastOneSep=function(r,n,i){if(r.idx===this.occurrence){var o=(0,rh.default)(n.concat(i));this.result.isEndOfRule=o===void 0,o instanceof Ne.Terminal&&(this.result.token=o.terminalType,this.result.occurrence=o.idx)}else t.prototype.walkAtLeastOneSep.call(this,r,n,i)},e}(dl);_t.NextTerminalAfterAtLeastOneSepWalker=Yoe;function KL(t,e,r){r===void 0&&(r=[]),r=(0,Ua.default)(r);var n=[],i=0;function o(d){return d.concat((0,jr.default)(t,i+1))}function a(d){var p=KL(o(d),e,r);return n.concat(p)}for(;r.length<e&&i<t.length;){var s=t[i];if(s instanceof Ne.Alternative)return a(s.definition);if(s instanceof Ne.NonTerminal)return a(s.definition);if(s instanceof Ne.Option)n=a(s.definition);else if(s instanceof Ne.RepetitionMandatory){var u=s.definition.concat([new Ne.Repetition({definition:s.definition})]);return a(u)}else if(s instanceof Ne.RepetitionMandatoryWithSeparator){var u=[new Ne.Alternative({definition:s.definition}),new Ne.Repetition({definition:[new Ne.Terminal({terminalType:s.separator})].concat(s.definition)})];return a(u)}else if(s instanceof Ne.RepetitionWithSeparator){var u=s.definition.concat([new Ne.Repetition({definition:[new Ne.Terminal({terminalType:s.separator})].concat(s.definition)})]);n=a(u)}else if(s instanceof Ne.Repetition){var u=s.definition.concat([new Ne.Repetition({definition:s.definition})]);n=a(u)}else{if(s instanceof Ne.Alternation)return(0,Woe.default)(s.definition,function(d){(0,th.default)(d.definition)===!1&&(n=a(d.definition))}),n;if(s instanceof Ne.Terminal)r.push(s.terminalType);else throw Error("non exhaustive match")}i++}return n.push({partialPath:r,suffixDef:(0,jr.default)(t,i)}),n}_t.possiblePathsFrom=KL;function Xoe(t,e,r,n){var i="EXIT_NONE_TERMINAL",o=[i],a="EXIT_ALTERNATIVE",s=!1,u=e.length,d=u-n-1,p=[],m=[];for(m.push({idx:-1,def:t,ruleStack:[],occurrenceStack:[]});!(0,th.default)(m);){var y=m.pop();if(y===a){s&&(0,Goe.default)(m).idx<=d&&m.pop();continue}var S=y.def,_=y.idx,w=y.ruleStack,k=y.occurrenceStack;if(!(0,th.default)(S)){var N=S[0];if(N===i){var C={idx:_,def:(0,jr.default)(S),ruleStack:(0,GL.default)(w),occurrenceStack:(0,GL.default)(k)};m.push(C)}else if(N instanceof Ne.Terminal)if(_<u-1){var E=_+1,L=e[E];if(r(L,N.terminalType)){var C={idx:E,def:(0,jr.default)(S),ruleStack:w,occurrenceStack:k};m.push(C)}}else if(_===u-1)p.push({nextTokenType:N.terminalType,nextTokenOccurrence:N.idx,ruleStack:w,occurrenceStack:k}),s=!0;else throw Error("non exhaustive match");else if(N instanceof Ne.NonTerminal){var U=(0,Ua.default)(w);U.push(N.nonTerminalName);var z=(0,Ua.default)(k);z.push(N.idx);var C={idx:_,def:N.definition.concat(o,(0,jr.default)(S)),ruleStack:U,occurrenceStack:z};m.push(C)}else if(N instanceof Ne.Option){var te={idx:_,def:(0,jr.default)(S),ruleStack:w,occurrenceStack:k};m.push(te),m.push(a);var we={idx:_,def:N.definition.concat((0,jr.default)(S)),ruleStack:w,occurrenceStack:k};m.push(we)}else if(N instanceof Ne.RepetitionMandatory){var Z=new Ne.Repetition({definition:N.definition,idx:N.idx}),G=N.definition.concat([Z],(0,jr.default)(S)),C={idx:_,def:G,ruleStack:w,occurrenceStack:k};m.push(C)}else if(N instanceof Ne.RepetitionMandatoryWithSeparator){var j=new Ne.Terminal({terminalType:N.separator}),Z=new Ne.Repetition({definition:[j].concat(N.definition),idx:N.idx}),G=N.definition.concat([Z],(0,jr.default)(S)),C={idx:_,def:G,ruleStack:w,occurrenceStack:k};m.push(C)}else if(N instanceof Ne.RepetitionWithSeparator){var te={idx:_,def:(0,jr.default)(S),ruleStack:w,occurrenceStack:k};m.push(te),m.push(a);var j=new Ne.Terminal({terminalType:N.separator}),Y=new Ne.Repetition({definition:[j].concat(N.definition),idx:N.idx}),G=N.definition.concat([Y],(0,jr.default)(S)),we={idx:_,def:G,ruleStack:w,occurrenceStack:k};m.push(we)}else if(N instanceof Ne.Repetition){var te={idx:_,def:(0,jr.default)(S),ruleStack:w,occurrenceStack:k};m.push(te),m.push(a);var Y=new Ne.Repetition({definition:N.definition,idx:N.idx}),G=N.definition.concat([Y],(0,jr.default)(S)),we={idx:_,def:G,ruleStack:w,occurrenceStack:k};m.push(we)}else if(N instanceof Ne.Alternation)for(var J=N.definition.length-1;J>=0;J--){var Ce=N.definition[J],_e={idx:_,def:Ce.definition.concat((0,jr.default)(S)),ruleStack:w,occurrenceStack:k};m.push(_e),m.push(a)}else if(N instanceof Ne.Alternative)m.push({idx:_,def:N.definition.concat((0,jr.default)(S)),ruleStack:w,occurrenceStack:k});else if(N instanceof Ne.Rule)m.push(Joe(N,_,w,k));else throw Error("non exhaustive match")}}return p}_t.nextPossibleTokensAfter=Xoe;function Joe(t,e,r,n){var i=(0,Ua.default)(r);i.push(t.name);var o=(0,Ua.default)(n);return o.push(1),{idx:e,def:t.definition,ruleStack:i,occurrenceStack:o}}});var gu=h(Le=>{"use strict";var YL=Le&&Le.__extends||function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(n[o]=i[o])},t(e,r)};return function(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");t(e,r);function n(){this.constructor=e}e.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}(),Ba=Le&&Le.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(Le,"__esModule",{value:!0});Le.areTokenCategoriesNotUsed=Le.isStrictPrefixOfPath=Le.containsPath=Le.getLookaheadPathsForOptionalProd=Le.getLookaheadPathsForOr=Le.lookAheadSequenceFromAlternatives=Le.buildSingleAlternativeLookaheadFunction=Le.buildAlternativesLookAheadFunc=Le.buildLookaheadFuncForOptionalProd=Le.buildLookaheadFuncForOr=Le.getLookaheadPaths=Le.getProdType=Le.PROD_TYPE=void 0;var DR=Ba(dn()),XL=Ba(ti()),Ka=Ba(ol()),nh=Ba(ir()),Ha=Ba(or()),BL=Ba(pn()),JL=Ba(yo()),VL=fl(),Qoe=Op(),ih=Fa(),ta=wt(),Zoe=wt(),Ut;(function(t){t[t.OPTION=0]="OPTION",t[t.REPETITION=1]="REPETITION",t[t.REPETITION_MANDATORY=2]="REPETITION_MANDATORY",t[t.REPETITION_MANDATORY_WITH_SEPARATOR=3]="REPETITION_MANDATORY_WITH_SEPARATOR",t[t.REPETITION_WITH_SEPARATOR=4]="REPETITION_WITH_SEPARATOR",t[t.ALTERNATION=5]="ALTERNATION"})(Ut=Le.PROD_TYPE||(Le.PROD_TYPE={}));function QL(t){if(t instanceof ta.Option||t==="Option")return Ut.OPTION;if(t instanceof ta.Repetition||t==="Repetition")return Ut.REPETITION;if(t instanceof ta.RepetitionMandatory||t==="RepetitionMandatory")return Ut.REPETITION_MANDATORY;if(t instanceof ta.RepetitionMandatoryWithSeparator||t==="RepetitionMandatoryWithSeparator")return Ut.REPETITION_MANDATORY_WITH_SEPARATOR;if(t instanceof ta.RepetitionWithSeparator||t==="RepetitionWithSeparator")return Ut.REPETITION_WITH_SEPARATOR;if(t instanceof ta.Alternation||t==="Alternation")return Ut.ALTERNATION;throw Error("non exhaustive match")}Le.getProdType=QL;function eae(t){var e=t.occurrence,r=t.rule,n=t.prodType,i=t.maxLookahead,o=QL(n);return o===Ut.ALTERNATION?qR(e,r,i):IR(e,r,o,i)}Le.getLookaheadPaths=eae;function tae(t,e,r,n,i,o){var a=qR(t,e,r),s=xR(a)?ih.tokenStructuredMatcherNoCategories:ih.tokenStructuredMatcher;return o(a,n,s,i)}Le.buildLookaheadFuncForOr=tae;function rae(t,e,r,n,i,o){var a=IR(t,e,i,r),s=xR(a)?ih.tokenStructuredMatcherNoCategories:ih.tokenStructuredMatcher;return o(a[0],s,n)}Le.buildLookaheadFuncForOptionalProd=rae;function nae(t,e,r,n){var i=t.length,o=(0,Ka.default)(t,function(u){return(0,Ka.default)(u,function(d){return d.length===1})});if(e)return function(u){for(var d=(0,nh.default)(u,function(E){return E.GATE}),p=0;p<i;p++){var m=t[p],y=m.length,S=d[p];if(!(S!==void 0&&S.call(this)===!1))e:for(var _=0;_<y;_++){for(var w=m[_],k=w.length,N=0;N<k;N++){var C=this.LA(N+1);if(r(C,w[N])===!1)continue e}return p}}};if(o&&!n){var a=(0,nh.default)(t,function(u){return(0,XL.default)(u)}),s=(0,JL.default)(a,function(u,d,p){return(0,Ha.default)(d,function(m){(0,BL.default)(u,m.tokenTypeIdx)||(u[m.tokenTypeIdx]=p),(0,Ha.default)(m.categoryMatches,function(y){(0,BL.default)(u,y)||(u[y]=p)})}),u},{});return function(){var u=this.LA(1);return s[u.tokenTypeIdx]}}else return function(){for(var u=0;u<i;u++){var d=t[u],p=d.length;e:for(var m=0;m<p;m++){for(var y=d[m],S=y.length,_=0;_<S;_++){var w=this.LA(_+1);if(r(w,y[_])===!1)continue e}return u}}}}Le.buildAlternativesLookAheadFunc=nae;function iae(t,e,r){var n=(0,Ka.default)(t,function(d){return d.length===1}),i=t.length;if(n&&!r){var o=(0,XL.default)(t);if(o.length===1&&(0,DR.default)(o[0].categoryMatches)){var a=o[0],s=a.tokenTypeIdx;return function(){return this.LA(1).tokenTypeIdx===s}}else{var u=(0,JL.default)(o,function(d,p,m){return d[p.tokenTypeIdx]=!0,(0,Ha.default)(p.categoryMatches,function(y){d[y]=!0}),d},[]);return function(){var d=this.LA(1);return u[d.tokenTypeIdx]===!0}}}else return function(){e:for(var d=0;d<i;d++){for(var p=t[d],m=p.length,y=0;y<m;y++){var S=this.LA(y+1);if(e(S,p[y])===!1)continue e}return!0}return!1}}Le.buildSingleAlternativeLookaheadFunction=iae;var oae=function(t){YL(e,t);function e(r,n,i){var o=t.call(this)||this;return o.topProd=r,o.targetOccurrence=n,o.targetProdType=i,o}return e.prototype.startWalking=function(){return this.walk(this.topProd),this.restDef},e.prototype.checkIsTarget=function(r,n,i,o){return r.idx===this.targetOccurrence&&this.targetProdType===n?(this.restDef=i.concat(o),!0):!1},e.prototype.walkOption=function(r,n,i){this.checkIsTarget(r,Ut.OPTION,n,i)||t.prototype.walkOption.call(this,r,n,i)},e.prototype.walkAtLeastOne=function(r,n,i){this.checkIsTarget(r,Ut.REPETITION_MANDATORY,n,i)||t.prototype.walkOption.call(this,r,n,i)},e.prototype.walkAtLeastOneSep=function(r,n,i){this.checkIsTarget(r,Ut.REPETITION_MANDATORY_WITH_SEPARATOR,n,i)||t.prototype.walkOption.call(this,r,n,i)},e.prototype.walkMany=function(r,n,i){this.checkIsTarget(r,Ut.REPETITION,n,i)||t.prototype.walkOption.call(this,r,n,i)},e.prototype.walkManySep=function(r,n,i){this.checkIsTarget(r,Ut.REPETITION_WITH_SEPARATOR,n,i)||t.prototype.walkOption.call(this,r,n,i)},e}(Qoe.RestWalker),ZL=function(t){YL(e,t);function e(r,n,i){var o=t.call(this)||this;return o.targetOccurrence=r,o.targetProdType=n,o.targetRef=i,o.result=[],o}return e.prototype.checkIsTarget=function(r,n){r.idx===this.targetOccurrence&&this.targetProdType===n&&(this.targetRef===void 0||r===this.targetRef)&&(this.result=r.definition)},e.prototype.visitOption=function(r){this.checkIsTarget(r,Ut.OPTION)},e.prototype.visitRepetition=function(r){this.checkIsTarget(r,Ut.REPETITION)},e.prototype.visitRepetitionMandatory=function(r){this.checkIsTarget(r,Ut.REPETITION_MANDATORY)},e.prototype.visitRepetitionMandatoryWithSeparator=function(r){this.checkIsTarget(r,Ut.REPETITION_MANDATORY_WITH_SEPARATOR)},e.prototype.visitRepetitionWithSeparator=function(r){this.checkIsTarget(r,Ut.REPETITION_WITH_SEPARATOR)},e.prototype.visitAlternation=function(r){this.checkIsTarget(r,Ut.ALTERNATION)},e}(Zoe.GAstVisitor);function zL(t){for(var e=new Array(t),r=0;r<t;r++)e[r]=[];return e}function wR(t){for(var e=[""],r=0;r<t.length;r++){for(var n=t[r],i=[],o=0;o<e.length;o++){var a=e[o];i.push(a+"_"+n.tokenTypeIdx);for(var s=0;s<n.categoryMatches.length;s++){var u="_"+n.categoryMatches[s];i.push(a+u)}}e=i}return e}function aae(t,e,r){for(var n=0;n<t.length;n++)if(n!==r)for(var i=t[n],o=0;o<e.length;o++){var a=e[o];if(i[a]===!0)return!1}return!0}function OR(t,e){for(var r=(0,nh.default)(t,function(p){return(0,VL.possiblePathsFrom)([p],1)}),n=zL(r.length),i=(0,nh.default)(r,function(p){var m={};return(0,Ha.default)(p,function(y){var S=wR(y.partialPath);(0,Ha.default)(S,function(_){m[_]=!0})}),m}),o=r,a=1;a<=e;a++){var s=o;o=zL(s.length);for(var u=function(p){for(var m=s[p],y=0;y<m.length;y++){var S=m[y].partialPath,_=m[y].suffixDef,w=wR(S),k=aae(i,w,p);if(k||(0,DR.default)(_)||S.length===e){var N=n[p];if(eM(N,S)===!1){N.push(S);for(var C=0;C<w.length;C++){var E=w[C];i[p][E]=!0}}}else{var L=(0,VL.possiblePathsFrom)(_,a+1,S);o[p]=o[p].concat(L),(0,Ha.default)(L,function(U){var z=wR(U.partialPath);(0,Ha.default)(z,function(te){i[p][te]=!0})})}}},d=0;d<s.length;d++)u(d)}return n}Le.lookAheadSequenceFromAlternatives=OR;function qR(t,e,r,n){var i=new ZL(t,Ut.ALTERNATION,n);return e.accept(i),OR(i.result,r)}Le.getLookaheadPathsForOr=qR;function IR(t,e,r,n){var i=new ZL(t,r);e.accept(i);var o=i.result,a=new oae(e,t,r),s=a.startWalking(),u=new ta.Alternative({definition:o}),d=new ta.Alternative({definition:s});return OR([u,d],n)}Le.getLookaheadPathsForOptionalProd=IR;function eM(t,e){e:for(var r=0;r<t.length;r++){var n=t[r];if(n.length===e.length){for(var i=0;i<n.length;i++){var o=e[i],a=n[i],s=o===a||a.categoryMatchesMap[o.tokenTypeIdx]!==void 0;if(s===!1)continue e}return!0}}return!1}Le.containsPath=eM;function sae(t,e){return t.length<e.length&&(0,Ka.default)(t,function(r,n){var i=e[n];return r===i||i.categoryMatchesMap[r.tokenTypeIdx]})}Le.isStrictPrefixOfPath=sae;function xR(t){return(0,Ka.default)(t,function(e){return(0,Ka.default)(e,function(r){return(0,Ka.default)(r,function(n){return(0,DR.default)(n.categoryMatches)})})})}Le.areTokenCategoriesNotUsed=xR});var ml=h(qe=>{"use strict";var MR=qe&&qe.__extends||function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(n[o]=i[o])},t(e,r)};return function(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");t(e,r);function n(){this.constructor=e}e.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}(),LR=qe&&qe.__assign||function(){return LR=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++){e=arguments[r];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},LR.apply(this,arguments)},ar=qe&&qe.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(qe,"__esModule",{value:!0});qe.checkPrefixAlternativesAmbiguities=qe.validateSomeNonEmptyLookaheadPath=qe.validateTooManyAlts=qe.RepetitionCollector=qe.validateAmbiguousAlternationAlternatives=qe.validateEmptyOrAlternative=qe.getFirstNoneTerminal=qe.validateNoLeftRecursion=qe.validateRuleIsOverridden=qe.validateRuleDoesNotAlreadyExist=qe.OccurrenceValidationCollector=qe.identifyProductionForDuplicates=qe.validateGrammar=qe.validateLookahead=void 0;var tM=ar(lu()),oh=ar(dn()),uae=ar(Pp()),rM=ar(ti()),cae=ar(sl()),lae=ar($p()),dae=ar(Fp()),ra=ar(ir()),hl=ar(or()),fae=ar(NR()),$R=ar(yo()),pae=ar(VT()),hae=ar(Ei()),FR=ar(go()),Po=ar(Zp()),mae=ar(ho()),ii=nn(),jR=wt(),yu=gu(),gae=fl(),ni=wt(),UR=wt(),yae=ar(eh()),vae=ar(al()),_ae=Fa();function Tae(t){var e=t.lookaheadStrategy.validate({rules:t.rules,tokenTypes:t.tokenTypes,grammarName:t.grammarName});return(0,ra.default)(e,function(r){return LR({type:ii.ParserDefinitionErrorType.CUSTOM_LOOKAHEAD_VALIDATION},r)})}qe.validateLookahead=Tae;function Rae(t,e,r,n){var i=(0,Po.default)(t,function(u){return bae(u,r)}),o=kae(t,e,r),a=(0,Po.default)(t,function(u){return cM(u,r)}),s=(0,Po.default)(t,function(u){return aM(u,t,n,r)});return i.concat(o,a,s)}qe.validateGrammar=Rae;function bae(t,e){var r=new oM;t.accept(r);var n=r.allProductions,i=(0,fae.default)(n,nM),o=(0,pae.default)(i,function(s){return s.length>1}),a=(0,ra.default)((0,hae.default)(o),function(s){var u=(0,tM.default)(s),d=e.buildDuplicateFoundError(t,s),p=(0,jR.getProductionDslName)(u),m={message:d,type:ii.ParserDefinitionErrorType.DUPLICATE_PRODUCTIONS,ruleName:t.name,dslName:p,occurrence:u.idx},y=iM(u);return y&&(m.parameter=y),m});return a}function nM(t){return"".concat((0,jR.getProductionDslName)(t),"_#_").concat(t.idx,"_#_").concat(iM(t))}qe.identifyProductionForDuplicates=nM;function iM(t){return t instanceof ni.Terminal?t.terminalType.name:t instanceof ni.NonTerminal?t.nonTerminalName:""}var oM=function(t){MR(e,t);function e(){var r=t!==null&&t.apply(this,arguments)||this;return r.allProductions=[],r}return e.prototype.visitNonTerminal=function(r){this.allProductions.push(r)},e.prototype.visitOption=function(r){this.allProductions.push(r)},e.prototype.visitRepetitionWithSeparator=function(r){this.allProductions.push(r)},e.prototype.visitRepetitionMandatory=function(r){this.allProductions.push(r)},e.prototype.visitRepetitionMandatoryWithSeparator=function(r){this.allProductions.push(r)},e.prototype.visitRepetition=function(r){this.allProductions.push(r)},e.prototype.visitAlternation=function(r){this.allProductions.push(r)},e.prototype.visitTerminal=function(r){this.allProductions.push(r)},e}(UR.GAstVisitor);qe.OccurrenceValidationCollector=oM;function aM(t,e,r,n){var i=[],o=(0,$R.default)(e,function(s,u){return u.name===t.name?s+1:s},0);if(o>1){var a=n.buildDuplicateRuleNameError({topLevelRule:t,grammarName:r});i.push({message:a,type:ii.ParserDefinitionErrorType.DUPLICATE_RULE_NAME,ruleName:t.name})}return i}qe.validateRuleDoesNotAlreadyExist=aM;function Cae(t,e,r){var n=[],i;return(0,FR.default)(e,t)||(i="Invalid rule override, rule: ->".concat(t,"<- cannot be overridden in the grammar: ->").concat(r,"<-")+"as it is not defined in any of the super grammars ",n.push({message:i,type:ii.ParserDefinitionErrorType.INVALID_RULE_OVERRIDE,ruleName:t})),n}qe.validateRuleIsOverridden=Cae;function sM(t,e,r,n){n===void 0&&(n=[]);var i=[],o=pl(e.definition);if((0,oh.default)(o))return[];var a=t.name,s=(0,FR.default)(o,t);s&&i.push({message:r.buildLeftRecursionError({topLevelRule:t,leftRecursionPath:n}),type:ii.ParserDefinitionErrorType.LEFT_RECURSION,ruleName:a});var u=(0,dae.default)(o,n.concat([t])),d=(0,Po.default)(u,function(p){var m=(0,mae.default)(n);return m.push(p),sM(t,p,r,m)});return i.concat(d)}qe.validateNoLeftRecursion=sM;function pl(t){var e=[];if((0,oh.default)(t))return e;var r=(0,tM.default)(t);if(r instanceof ni.NonTerminal)e.push(r.referencedRule);else if(r instanceof ni.Alternative||r instanceof ni.Option||r instanceof ni.RepetitionMandatory||r instanceof ni.RepetitionMandatoryWithSeparator||r instanceof ni.RepetitionWithSeparator||r instanceof ni.Repetition)e=e.concat(pl(r.definition));else if(r instanceof ni.Alternation)e=(0,rM.default)((0,ra.default)(r.definition,function(a){return pl(a.definition)}));else if(!(r instanceof ni.Terminal))throw Error("non exhaustive match");var n=(0,jR.isOptionalProd)(r),i=t.length>1;if(n&&i){var o=(0,uae.default)(t);return e.concat(pl(o))}else return e}qe.getFirstNoneTerminal=pl;var GR=function(t){MR(e,t);function e(){var r=t!==null&&t.apply(this,arguments)||this;return r.alternations=[],r}return e.prototype.visitAlternation=function(r){this.alternations.push(r)},e}(UR.GAstVisitor);function Pae(t,e){var r=new GR;t.accept(r);var n=r.alternations,i=(0,Po.default)(n,function(o){var a=(0,yae.default)(o.definition);return(0,Po.default)(a,function(s,u){var d=(0,gae.nextPossibleTokensAfter)([s],[],_ae.tokenStructuredMatcher,1);return(0,oh.default)(d)?[{message:e.buildEmptyAlternationError({topLevelRule:t,alternation:o,emptyChoiceIdx:u}),type:ii.ParserDefinitionErrorType.NONE_LAST_EMPTY_ALT,ruleName:t.name,occurrence:o.idx,alternative:u+1}]:[]})});return i}qe.validateEmptyOrAlternative=Pae;function Aae(t,e,r){var n=new GR;t.accept(n);var i=n.alternations;i=(0,lae.default)(i,function(a){return a.ignoreAmbiguities===!0});var o=(0,Po.default)(i,function(a){var s=a.idx,u=a.maxLookahead||e,d=(0,yu.getLookaheadPathsForOr)(s,t,u,a),p=Eae(d,a,t,r),m=lM(d,a,t,r);return p.concat(m)});return o}qe.validateAmbiguousAlternationAlternatives=Aae;var uM=function(t){MR(e,t);function e(){var r=t!==null&&t.apply(this,arguments)||this;return r.allProductions=[],r}return e.prototype.visitRepetitionWithSeparator=function(r){this.allProductions.push(r)},e.prototype.visitRepetitionMandatory=function(r){this.allProductions.push(r)},e.prototype.visitRepetitionMandatoryWithSeparator=function(r){this.allProductions.push(r)},e.prototype.visitRepetition=function(r){this.allProductions.push(r)},e}(UR.GAstVisitor);qe.RepetitionCollector=uM;function cM(t,e){var r=new GR;t.accept(r);var n=r.alternations,i=(0,Po.default)(n,function(o){return o.definition.length>255?[{message:e.buildTooManyAlternativesError({topLevelRule:t,alternation:o}),type:ii.ParserDefinitionErrorType.TOO_MANY_ALTS,ruleName:t.name,occurrence:o.idx}]:[]});return i}qe.validateTooManyAlts=cM;function Sae(t,e,r){var n=[];return(0,hl.default)(t,function(i){var o=new uM;i.accept(o);var a=o.allProductions;(0,hl.default)(a,function(s){var u=(0,yu.getProdType)(s),d=s.maxLookahead||e,p=s.idx,m=(0,yu.getLookaheadPathsForOptionalProd)(p,i,u,d),y=m[0];if((0,oh.default)((0,rM.default)(y))){var S=r.buildEmptyRepetitionError({topLevelRule:i,repetition:s});n.push({message:S,type:ii.ParserDefinitionErrorType.NO_NON_EMPTY_LOOKAHEAD,ruleName:i.name})}})}),n}qe.validateSomeNonEmptyLookaheadPath=Sae;function Eae(t,e,r,n){var i=[],o=(0,$R.default)(t,function(s,u,d){return e.definition[d].ignoreAmbiguities===!0||(0,hl.default)(u,function(p){var m=[d];(0,hl.default)(t,function(y,S){d!==S&&(0,yu.containsPath)(y,p)&&e.definition[S].ignoreAmbiguities!==!0&&m.push(S)}),m.length>1&&!(0,yu.containsPath)(i,p)&&(i.push(p),s.push({alts:m,path:p}))}),s},[]),a=(0,ra.default)(o,function(s){var u=(0,ra.default)(s.alts,function(p){return p+1}),d=n.buildAlternationAmbiguityError({topLevelRule:r,alternation:e,ambiguityIndices:u,prefixPath:s.path});return{message:d,type:ii.ParserDefinitionErrorType.AMBIGUOUS_ALTS,ruleName:r.name,occurrence:e.idx,alternatives:s.alts}});return a}function lM(t,e,r,n){var i=(0,$R.default)(t,function(a,s,u){var d=(0,ra.default)(s,function(p){return{idx:u,path:p}});return a.concat(d)},[]),o=(0,vae.default)((0,Po.default)(i,function(a){var s=e.definition[a.idx];if(s.ignoreAmbiguities===!0)return[];var u=a.idx,d=a.path,p=(0,cae.default)(i,function(y){return e.definition[y.idx].ignoreAmbiguities!==!0&&y.idx<u&&(0,yu.isStrictPrefixOfPath)(y.path,d)}),m=(0,ra.default)(p,function(y){var S=[y.idx+1,u+1],_=e.idx===0?"":e.idx,w=n.buildAlternationPrefixAmbiguityError({topLevelRule:r,alternation:e,ambiguityIndices:S,prefixPath:y.path});return{message:w,type:ii.ParserDefinitionErrorType.AMBIGUOUS_PREFIX_ALTS,ruleName:r.name,occurrence:_,alternatives:S}});return m}));return o}qe.checkPrefixAlternativesAmbiguities=lM;function kae(t,e,r){var n=[],i=(0,ra.default)(e,function(o){return o.name});return(0,hl.default)(t,function(o){var a=o.name;if((0,FR.default)(i,a)){var s=r.buildNamespaceConflictError(o);n.push({message:s,type:ii.ParserDefinitionErrorType.CONFLICT_TOKENS_RULES_NAMESPACE,ruleName:a})}}),n}});var hM=h(na=>{"use strict";var dM=na&&na.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(na,"__esModule",{value:!0});na.validateGrammar=na.resolveGrammar=void 0;var Nae=dM(or()),fM=dM(sR()),wae=OL(),Dae=ml(),pM=mu();function Oae(t){var e=(0,fM.default)(t,{errMsgProvider:pM.defaultGrammarResolverErrorProvider}),r={};return(0,Nae.default)(t.rules,function(n){r[n.name]=n}),(0,wae.resolveGrammar)(r,e.errMsgProvider)}na.resolveGrammar=Oae;function qae(t){return t=(0,fM.default)(t,{errMsgProvider:pM.defaultGrammarValidatorErrorProvider}),(0,Dae.validateGrammar)(t.rules,t.tokenTypes,t.errMsgProvider,t.grammarName)}na.validateGrammar=qae});var vu=h(Or=>{"use strict";var gl=Or&&Or.__extends||function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(n[o]=i[o])},t(e,r)};return function(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");t(e,r);function n(){this.constructor=e}e.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}(),Iae=Or&&Or.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(Or,"__esModule",{value:!0});Or.EarlyExitException=Or.NotAllInputParsedException=Or.NoViableAltException=Or.MismatchedTokenException=Or.isRecognitionException=void 0;var xae=Iae(go()),mM="MismatchedTokenException",gM="NoViableAltException",yM="EarlyExitException",vM="NotAllInputParsedException",_M=[mM,gM,yM,vM];Object.freeze(_M);function Lae(t){return(0,xae.default)(_M,t.name)}Or.isRecognitionException=Lae;var ah=function(t){gl(e,t);function e(r,n){var i=this.constructor,o=t.call(this,r)||this;return o.token=n,o.resyncedTokens=[],Object.setPrototypeOf(o,i.prototype),Error.captureStackTrace&&Error.captureStackTrace(o,o.constructor),o}return e}(Error),Mae=function(t){gl(e,t);function e(r,n,i){var o=t.call(this,r,n)||this;return o.previousToken=i,o.name=mM,o}return e}(ah);Or.MismatchedTokenException=Mae;var $ae=function(t){gl(e,t);function e(r,n,i){var o=t.call(this,r,n)||this;return o.previousToken=i,o.name=gM,o}return e}(ah);Or.NoViableAltException=$ae;var Fae=function(t){gl(e,t);function e(r,n){var i=t.call(this,r,n)||this;return i.name=vM,i}return e}(ah);Or.NotAllInputParsedException=Fae;var jae=function(t){gl(e,t);function e(r,n,i){var o=t.call(this,r,n)||this;return o.previousToken=i,o.name=yM,o}return e}(ah);Or.EarlyExitException=jae});var HR=h(Gt=>{"use strict";var Uae=Gt&&Gt.__extends||function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(n[o]=i[o])},t(e,r)};return function(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");t(e,r);function n(){this.constructor=e}e.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}(),ia=Gt&&Gt.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(Gt,"__esModule",{value:!0});Gt.attemptInRepetitionRecovery=Gt.Recoverable=Gt.InRuleRecoveryException=Gt.IN_RULE_RECOVERY_EXCEPTION=Gt.EOF_FOLLOW_KEY=void 0;var yl=ja(),Gae=ia(dn()),TM=ia(eh()),Wae=ia(ti()),WR=ia(ir()),RM=ia(jp()),Hae=ia(pn()),Kae=ia(go()),Bae=ia(ho()),Vae=vu(),zae=oR(),Yae=nn();Gt.EOF_FOLLOW_KEY={};Gt.IN_RULE_RECOVERY_EXCEPTION="InRuleRecoveryException";var bM=function(t){Uae(e,t);function e(r){var n=t.call(this,r)||this;return n.name=Gt.IN_RULE_RECOVERY_EXCEPTION,n}return e}(Error);Gt.InRuleRecoveryException=bM;var Xae=function(){function t(){}return t.prototype.initRecoverable=function(e){this.firstAfterRepMap={},this.resyncFollows={},this.recoveryEnabled=(0,Hae.default)(e,"recoveryEnabled")?e.recoveryEnabled:Yae.DEFAULT_PARSER_CONFIG.recoveryEnabled,this.recoveryEnabled&&(this.attemptInRepetitionRecovery=CM)},t.prototype.getTokenToInsert=function(e){var r=(0,yl.createTokenInstance)(e,"",NaN,NaN,NaN,NaN,NaN,NaN);return r.isInsertedInRecovery=!0,r},t.prototype.canTokenTypeBeInsertedInRecovery=function(e){return!0},t.prototype.canTokenTypeBeDeletedInRecovery=function(e){return!0},t.prototype.tryInRepetitionRecovery=function(e,r,n,i){for(var o=this,a=this.findReSyncTokenType(),s=this.exportLexerState(),u=[],d=!1,p=this.LA(1),m=this.LA(1),y=function(){var S=o.LA(0),_=o.errorMessageProvider.buildMismatchTokenMessage({expected:i,actual:p,previous:S,ruleName:o.getCurrRuleFullName()}),w=new Vae.MismatchedTokenException(_,p,o.LA(0));w.resyncedTokens=(0,TM.default)(u),o.SAVE_ERROR(w)};!d;)if(this.tokenMatcher(m,i)){y();return}else if(n.call(this)){y(),e.apply(this,r);return}else this.tokenMatcher(m,a)?d=!0:(m=this.SKIP_TOKEN(),this.addToResyncTokens(m,u));this.importLexerState(s)},t.prototype.shouldInRepetitionRecoveryBeTried=function(e,r,n){return!(n===!1||this.tokenMatcher(this.LA(1),e)||this.isBackTracking()||this.canPerformInRuleRecovery(e,this.getFollowsForInRuleRecovery(e,r)))},t.prototype.getFollowsForInRuleRecovery=function(e,r){var n=this.getCurrentGrammarPath(e,r),i=this.getNextPossibleTokenTypes(n);return i},t.prototype.tryInRuleRecovery=function(e,r){if(this.canRecoverWithSingleTokenInsertion(e,r)){var n=this.getTokenToInsert(e);return n}if(this.canRecoverWithSingleTokenDeletion(e)){var i=this.SKIP_TOKEN();return this.consumeToken(),i}throw new bM("sad sad panda")},t.prototype.canPerformInRuleRecovery=function(e,r){return this.canRecoverWithSingleTokenInsertion(e,r)||this.canRecoverWithSingleTokenDeletion(e)},t.prototype.canRecoverWithSingleTokenInsertion=function(e,r){var n=this;if(!this.canTokenTypeBeInsertedInRecovery(e)||(0,Gae.default)(r))return!1;var i=this.LA(1),o=(0,RM.default)(r,function(a){return n.tokenMatcher(i,a)})!==void 0;return o},t.prototype.canRecoverWithSingleTokenDeletion=function(e){if(!this.canTokenTypeBeDeletedInRecovery(e))return!1;var r=this.tokenMatcher(this.LA(2),e);return r},t.prototype.isInCurrentRuleReSyncSet=function(e){var r=this.getCurrFollowKey(),n=this.getFollowSetFromFollowKey(r);return(0,Kae.default)(n,e)},t.prototype.findReSyncTokenType=function(){for(var e=this.flattenFollowSet(),r=this.LA(1),n=2;;){var i=(0,RM.default)(e,function(o){var a=(0,yl.tokenMatcher)(r,o);return a});if(i!==void 0)return i;r=this.LA(n),n++}},t.prototype.getCurrFollowKey=function(){if(this.RULE_STACK.length===1)return Gt.EOF_FOLLOW_KEY;var e=this.getLastExplicitRuleShortName(),r=this.getLastExplicitRuleOccurrenceIndex(),n=this.getPreviousExplicitRuleShortName();return{ruleName:this.shortRuleNameToFullName(e),idxInCallingRule:r,inRule:this.shortRuleNameToFullName(n)}},t.prototype.buildFullFollowKeyStack=function(){var e=this,r=this.RULE_STACK,n=this.RULE_OCCURRENCE_STACK;return(0,WR.default)(r,function(i,o){return o===0?Gt.EOF_FOLLOW_KEY:{ruleName:e.shortRuleNameToFullName(i),idxInCallingRule:n[o],inRule:e.shortRuleNameToFullName(r[o-1])}})},t.prototype.flattenFollowSet=function(){var e=this,r=(0,WR.default)(this.buildFullFollowKeyStack(),function(n){return e.getFollowSetFromFollowKey(n)});return(0,Wae.default)(r)},t.prototype.getFollowSetFromFollowKey=function(e){if(e===Gt.EOF_FOLLOW_KEY)return[yl.EOF];var r=e.ruleName+e.idxInCallingRule+zae.IN+e.inRule;return this.resyncFollows[r]},t.prototype.addToResyncTokens=function(e,r){return this.tokenMatcher(e,yl.EOF)||r.push(e),r},t.prototype.reSyncTo=function(e){for(var r=[],n=this.LA(1);this.tokenMatcher(n,e)===!1;)n=this.SKIP_TOKEN(),this.addToResyncTokens(n,r);return(0,TM.default)(r)},t.prototype.attemptInRepetitionRecovery=function(e,r,n,i,o,a,s){},t.prototype.getCurrentGrammarPath=function(e,r){var n=this.getHumanReadableRuleStack(),i=(0,Bae.default)(this.RULE_OCCURRENCE_STACK),o={ruleStack:n,occurrenceStack:i,lastTok:e,lastTokOccurrence:r};return o},t.prototype.getHumanReadableRuleStack=function(){var e=this;return(0,WR.default)(this.RULE_STACK,function(r){return e.shortRuleNameToFullName(r)})},t}();Gt.Recoverable=Xae;function CM(t,e,r,n,i,o,a){var s=this.getKeyForAutomaticLookahead(n,i),u=this.firstAfterRepMap[s];if(u===void 0){var d=this.getCurrRuleFullName(),p=this.getGAstProductions()[d],m=new o(p,i);u=m.startWalking(),this.firstAfterRepMap[s]=u}var y=u.token,S=u.occurrence,_=u.isEndOfRule;this.RULE_STACK.length===1&&_&&y===void 0&&(y=yl.EOF,S=1),!(y===void 0||S===void 0)&&this.shouldInRepetitionRecoveryBeTried(y,S,a)&&this.tryInRepetitionRecovery(t,e,r,y)}Gt.attemptInRepetitionRecovery=CM});var sh=h(We=>{"use strict";Object.defineProperty(We,"__esModule",{value:!0});We.getKeyForAutomaticLookahead=We.AT_LEAST_ONE_SEP_IDX=We.MANY_SEP_IDX=We.AT_LEAST_ONE_IDX=We.MANY_IDX=We.OPTION_IDX=We.OR_IDX=We.BITS_FOR_ALT_IDX=We.BITS_FOR_RULE_IDX=We.BITS_FOR_OCCURRENCE_IDX=We.BITS_FOR_METHOD_TYPE=void 0;We.BITS_FOR_METHOD_TYPE=4;We.BITS_FOR_OCCURRENCE_IDX=8;We.BITS_FOR_RULE_IDX=12;We.BITS_FOR_ALT_IDX=8;We.OR_IDX=1<<We.BITS_FOR_OCCURRENCE_IDX;We.OPTION_IDX=2<<We.BITS_FOR_OCCURRENCE_IDX;We.MANY_IDX=3<<We.BITS_FOR_OCCURRENCE_IDX;We.AT_LEAST_ONE_IDX=4<<We.BITS_FOR_OCCURRENCE_IDX;We.MANY_SEP_IDX=5<<We.BITS_FOR_OCCURRENCE_IDX;We.AT_LEAST_ONE_SEP_IDX=6<<We.BITS_FOR_OCCURRENCE_IDX;function Jae(t,e,r){return r|e|t}We.getKeyForAutomaticLookahead=Jae;var WCe=32-We.BITS_FOR_ALT_IDX});var BR=h(oa=>{"use strict";var uh=oa&&oa.__spreadArray||function(t,e,r){if(r||arguments.length===2)for(var n=0,i=e.length,o;n<i;n++)(o||!(n in e))&&(o||(o=Array.prototype.slice.call(e,0,n)),o[n]=e[n]);return t.concat(o||Array.prototype.slice.call(e))},PM=oa&&oa.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(oa,"__esModule",{value:!0});oa.LLkLookaheadStrategy=void 0;var KR=PM(Zp()),Qae=PM(dn()),ch=mu(),Zae=nn(),lh=ml(),vl=gu(),ese=function(){function t(e){var r;this.maxLookahead=(r=e?.maxLookahead)!==null&&r!==void 0?r:Zae.DEFAULT_PARSER_CONFIG.maxLookahead}return t.prototype.validate=function(e){var r=this.validateNoLeftRecursion(e.rules);if((0,Qae.default)(r)){var n=this.validateEmptyOrAlternatives(e.rules),i=this.validateAmbiguousAlternationAlternatives(e.rules,this.maxLookahead),o=this.validateSomeNonEmptyLookaheadPath(e.rules,this.maxLookahead),a=uh(uh(uh(uh([],r,!0),n,!0),i,!0),o,!0);return a}return r},t.prototype.validateNoLeftRecursion=function(e){return(0,KR.default)(e,function(r){return(0,lh.validateNoLeftRecursion)(r,r,ch.defaultGrammarValidatorErrorProvider)})},t.prototype.validateEmptyOrAlternatives=function(e){return(0,KR.default)(e,function(r){return(0,lh.validateEmptyOrAlternative)(r,ch.defaultGrammarValidatorErrorProvider)})},t.prototype.validateAmbiguousAlternationAlternatives=function(e,r){return(0,KR.default)(e,function(n){return(0,lh.validateAmbiguousAlternationAlternatives)(n,r,ch.defaultGrammarValidatorErrorProvider)})},t.prototype.validateSomeNonEmptyLookaheadPath=function(e,r){return(0,lh.validateSomeNonEmptyLookaheadPath)(e,r,ch.defaultGrammarValidatorErrorProvider)},t.prototype.buildLookaheadForAlternation=function(e){return(0,vl.buildLookaheadFuncForOr)(e.prodOccurrence,e.rule,e.maxLookahead,e.hasPredicates,e.dynamicTokensEnabled,vl.buildAlternativesLookAheadFunc)},t.prototype.buildLookaheadForOptional=function(e){return(0,vl.buildLookaheadFuncForOptionalProd)(e.prodOccurrence,e.rule,e.maxLookahead,e.dynamicTokensEnabled,(0,vl.getProdType)(e.prodType),vl.buildSingleAlternativeLookaheadFunction)},t}();oa.LLkLookaheadStrategy=ese});var kM=h(Li=>{"use strict";var tse=Li&&Li.__extends||function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(n[o]=i[o])},t(e,r)};return function(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");t(e,r);function n(){this.constructor=e}e.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}(),SM=Li&&Li.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(Li,"__esModule",{value:!0});Li.collectMethods=Li.LooksAhead=void 0;var Va=SM(or()),VR=SM(pn()),AM=nn(),Ao=sh(),rse=wt(),_u=wt(),nse=BR(),ise=function(){function t(){}return t.prototype.initLooksAhead=function(e){this.dynamicTokensEnabled=(0,VR.default)(e,"dynamicTokensEnabled")?e.dynamicTokensEnabled:AM.DEFAULT_PARSER_CONFIG.dynamicTokensEnabled,this.maxLookahead=(0,VR.default)(e,"maxLookahead")?e.maxLookahead:AM.DEFAULT_PARSER_CONFIG.maxLookahead,this.lookaheadStrategy=(0,VR.default)(e,"lookaheadStrategy")?e.lookaheadStrategy:new nse.LLkLookaheadStrategy({maxLookahead:this.maxLookahead}),this.lookAheadFuncsCache=new Map},t.prototype.preComputeLookaheadFunctions=function(e){var r=this;(0,Va.default)(e,function(n){r.TRACE_INIT("".concat(n.name," Rule Lookahead"),function(){var i=EM(n),o=i.alternation,a=i.repetition,s=i.option,u=i.repetitionMandatory,d=i.repetitionMandatoryWithSeparator,p=i.repetitionWithSeparator;(0,Va.default)(o,function(m){var y=m.idx===0?"":m.idx;r.TRACE_INIT("".concat((0,_u.getProductionDslName)(m)).concat(y),function(){var S=r.lookaheadStrategy.buildLookaheadForAlternation({prodOccurrence:m.idx,rule:n,maxLookahead:m.maxLookahead||r.maxLookahead,hasPredicates:m.hasPredicates,dynamicTokensEnabled:r.dynamicTokensEnabled}),_=(0,Ao.getKeyForAutomaticLookahead)(r.fullRuleNameToShort[n.name],Ao.OR_IDX,m.idx);r.setLaFuncCache(_,S)})}),(0,Va.default)(a,function(m){r.computeLookaheadFunc(n,m.idx,Ao.MANY_IDX,"Repetition",m.maxLookahead,(0,_u.getProductionDslName)(m))}),(0,Va.default)(s,function(m){r.computeLookaheadFunc(n,m.idx,Ao.OPTION_IDX,"Option",m.maxLookahead,(0,_u.getProductionDslName)(m))}),(0,Va.default)(u,function(m){r.computeLookaheadFunc(n,m.idx,Ao.AT_LEAST_ONE_IDX,"RepetitionMandatory",m.maxLookahead,(0,_u.getProductionDslName)(m))}),(0,Va.default)(d,function(m){r.computeLookaheadFunc(n,m.idx,Ao.AT_LEAST_ONE_SEP_IDX,"RepetitionMandatoryWithSeparator",m.maxLookahead,(0,_u.getProductionDslName)(m))}),(0,Va.default)(p,function(m){r.computeLookaheadFunc(n,m.idx,Ao.MANY_SEP_IDX,"RepetitionWithSeparator",m.maxLookahead,(0,_u.getProductionDslName)(m))})})})},t.prototype.computeLookaheadFunc=function(e,r,n,i,o,a){var s=this;this.TRACE_INIT("".concat(a).concat(r===0?"":r),function(){var u=s.lookaheadStrategy.buildLookaheadForOptional({prodOccurrence:r,rule:e,maxLookahead:o||s.maxLookahead,dynamicTokensEnabled:s.dynamicTokensEnabled,prodType:i}),d=(0,Ao.getKeyForAutomaticLookahead)(s.fullRuleNameToShort[e.name],n,r);s.setLaFuncCache(d,u)})},t.prototype.getKeyForAutomaticLookahead=function(e,r){var n=this.getLastExplicitRuleShortName();return(0,Ao.getKeyForAutomaticLookahead)(n,e,r)},t.prototype.getLaFuncFromCache=function(e){return this.lookAheadFuncsCache.get(e)},t.prototype.setLaFuncCache=function(e,r){this.lookAheadFuncsCache.set(e,r)},t}();Li.LooksAhead=ise;var ose=function(t){tse(e,t);function e(){var r=t!==null&&t.apply(this,arguments)||this;return r.dslMethods={option:[],alternation:[],repetition:[],repetitionWithSeparator:[],repetitionMandatory:[],repetitionMandatoryWithSeparator:[]},r}return e.prototype.reset=function(){this.dslMethods={option:[],alternation:[],repetition:[],repetitionWithSeparator:[],repetitionMandatory:[],repetitionMandatoryWithSeparator:[]}},e.prototype.visitOption=function(r){this.dslMethods.option.push(r)},e.prototype.visitRepetitionWithSeparator=function(r){this.dslMethods.repetitionWithSeparator.push(r)},e.prototype.visitRepetitionMandatory=function(r){this.dslMethods.repetitionMandatory.push(r)},e.prototype.visitRepetitionMandatoryWithSeparator=function(r){this.dslMethods.repetitionMandatoryWithSeparator.push(r)},e.prototype.visitRepetition=function(r){this.dslMethods.repetition.push(r)},e.prototype.visitAlternation=function(r){this.dslMethods.alternation.push(r)},e}(rse.GAstVisitor),dh=new ose;function EM(t){dh.reset(),t.accept(dh);var e=dh.dslMethods;return dh.reset(),e}Li.collectMethods=EM});var NM=h(Mi=>{"use strict";Object.defineProperty(Mi,"__esModule",{value:!0});Mi.addNoneTerminalToCst=Mi.addTerminalToCst=Mi.setNodeLocationFull=Mi.setNodeLocationOnlyOffset=void 0;function ase(t,e){isNaN(t.startOffset)===!0?(t.startOffset=e.startOffset,t.endOffset=e.endOffset):t.endOffset<e.endOffset&&(t.endOffset=e.endOffset)}Mi.setNodeLocationOnlyOffset=ase;function sse(t,e){isNaN(t.startOffset)===!0?(t.startOffset=e.startOffset,t.startColumn=e.startColumn,t.startLine=e.startLine,t.endOffset=e.endOffset,t.endColumn=e.endColumn,t.endLine=e.endLine):t.endOffset<e.endOffset&&(t.endOffset=e.endOffset,t.endColumn=e.endColumn,t.endLine=e.endLine)}Mi.setNodeLocationFull=sse;function use(t,e,r){t.children[r]===void 0?t.children[r]=[e]:t.children[r].push(e)}Mi.addTerminalToCst=use;function cse(t,e,r){t.children[e]===void 0?t.children[e]=[r]:t.children[e].push(r)}Mi.addNoneTerminalToCst=cse});var wM=h(fh=>{"use strict";Object.defineProperty(fh,"__esModule",{value:!0});fh.defineNameProp=void 0;var lse="name";function dse(t,e){Object.defineProperty(t,lse,{enumerable:!1,configurable:!0,writable:!1,value:e})}fh.defineNameProp=dse});var MM=h(vr=>{"use strict";var So=vr&&vr.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(vr,"__esModule",{value:!0});vr.validateMissingCstMethods=vr.validateVisitor=vr.CstVisitorDefinitionError=vr.createBaseVisitorConstructorWithDefaults=vr.createBaseSemanticVisitorConstructor=vr.defaultVisit=void 0;var fse=So(dn()),pse=So(al()),hse=So(Ve()),DM=So(ir()),mse=So(or()),gse=So(sl()),yse=So(fn()),vse=So(Ws()),_se=So(La()),OM=wM();function qM(t,e){for(var r=(0,yse.default)(t),n=r.length,i=0;i<n;i++)for(var o=r[i],a=t[o],s=a.length,u=0;u<s;u++){var d=a[u];d.tokenTypeIdx===void 0&&this[d.name](d.children,e)}}vr.defaultVisit=qM;function Tse(t,e){var r=function(){};(0,OM.defineNameProp)(r,t+"BaseSemantics");var n={visit:function(i,o){if((0,hse.default)(i)&&(i=i[0]),!(0,_se.default)(i))return this[i.name](i.children,o)},validateVisitor:function(){var i=xM(this,e);if(!(0,fse.default)(i)){var o=(0,DM.default)(i,function(a){return a.msg});throw Error("Errors Detected in CST Visitor <".concat(this.constructor.name,`>:
	`)+"".concat(o.join(`

`).replace(/\n/g,`
	`)))}}};return r.prototype=n,r.prototype.constructor=r,r._RULE_NAMES=e,r}vr.createBaseSemanticVisitorConstructor=Tse;function Rse(t,e,r){var n=function(){};(0,OM.defineNameProp)(n,t+"BaseSemanticsWithDefaults");var i=Object.create(r.prototype);return(0,mse.default)(e,function(o){i[o]=qM}),n.prototype=i,n.prototype.constructor=n,n}vr.createBaseVisitorConstructorWithDefaults=Rse;var IM;(function(t){t[t.REDUNDANT_METHOD=0]="REDUNDANT_METHOD",t[t.MISSING_METHOD=1]="MISSING_METHOD"})(IM=vr.CstVisitorDefinitionError||(vr.CstVisitorDefinitionError={}));function xM(t,e){var r=LM(t,e);return r}vr.validateVisitor=xM;function LM(t,e){var r=(0,gse.default)(e,function(i){return(0,vse.default)(t[i])===!1}),n=(0,DM.default)(r,function(i){return{msg:"Missing visitor method: <".concat(i,"> on ").concat(t.constructor.name," CST Visitor."),type:IM.MISSING_METHOD,methodName:i}});return(0,pse.default)(n)}vr.validateMissingCstMethods=LM});var UM=h(Ru=>{"use strict";var ph=Ru&&Ru.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(Ru,"__esModule",{value:!0});Ru.TreeBuilder=void 0;var Tu=NM(),Ur=ph(Ip()),bse=ph(pn()),$M=ph(fn()),FM=ph(La()),jM=MM(),Cse=nn(),Pse=function(){function t(){}return t.prototype.initTreeBuilder=function(e){if(this.CST_STACK=[],this.outputCst=e.outputCst,this.nodeLocationTracking=(0,bse.default)(e,"nodeLocationTracking")?e.nodeLocationTracking:Cse.DEFAULT_PARSER_CONFIG.nodeLocationTracking,!this.outputCst)this.cstInvocationStateUpdate=Ur.default,this.cstFinallyStateUpdate=Ur.default,this.cstPostTerminal=Ur.default,this.cstPostNonTerminal=Ur.default,this.cstPostRule=Ur.default;else if(/full/i.test(this.nodeLocationTracking))this.recoveryEnabled?(this.setNodeLocationFromToken=Tu.setNodeLocationFull,this.setNodeLocationFromNode=Tu.setNodeLocationFull,this.cstPostRule=Ur.default,this.setInitialNodeLocation=this.setInitialNodeLocationFullRecovery):(this.setNodeLocationFromToken=Ur.default,this.setNodeLocationFromNode=Ur.default,this.cstPostRule=this.cstPostRuleFull,this.setInitialNodeLocation=this.setInitialNodeLocationFullRegular);else if(/onlyOffset/i.test(this.nodeLocationTracking))this.recoveryEnabled?(this.setNodeLocationFromToken=Tu.setNodeLocationOnlyOffset,this.setNodeLocationFromNode=Tu.setNodeLocationOnlyOffset,this.cstPostRule=Ur.default,this.setInitialNodeLocation=this.setInitialNodeLocationOnlyOffsetRecovery):(this.setNodeLocationFromToken=Ur.default,this.setNodeLocationFromNode=Ur.default,this.cstPostRule=this.cstPostRuleOnlyOffset,this.setInitialNodeLocation=this.setInitialNodeLocationOnlyOffsetRegular);else if(/none/i.test(this.nodeLocationTracking))this.setNodeLocationFromToken=Ur.default,this.setNodeLocationFromNode=Ur.default,this.cstPostRule=Ur.default,this.setInitialNodeLocation=Ur.default;else throw Error('Invalid <nodeLocationTracking> config option: "'.concat(e.nodeLocationTracking,'"'))},t.prototype.setInitialNodeLocationOnlyOffsetRecovery=function(e){e.location={startOffset:NaN,endOffset:NaN}},t.prototype.setInitialNodeLocationOnlyOffsetRegular=function(e){e.location={startOffset:this.LA(1).startOffset,endOffset:NaN}},t.prototype.setInitialNodeLocationFullRecovery=function(e){e.location={startOffset:NaN,startLine:NaN,startColumn:NaN,endOffset:NaN,endLine:NaN,endColumn:NaN}},t.prototype.setInitialNodeLocationFullRegular=function(e){var r=this.LA(1);e.location={startOffset:r.startOffset,startLine:r.startLine,startColumn:r.startColumn,endOffset:NaN,endLine:NaN,endColumn:NaN}},t.prototype.cstInvocationStateUpdate=function(e){var r={name:e,children:Object.create(null)};this.setInitialNodeLocation(r),this.CST_STACK.push(r)},t.prototype.cstFinallyStateUpdate=function(){this.CST_STACK.pop()},t.prototype.cstPostRuleFull=function(e){var r=this.LA(0),n=e.location;n.startOffset<=r.startOffset?(n.endOffset=r.endOffset,n.endLine=r.endLine,n.endColumn=r.endColumn):(n.startOffset=NaN,n.startLine=NaN,n.startColumn=NaN)},t.prototype.cstPostRuleOnlyOffset=function(e){var r=this.LA(0),n=e.location;n.startOffset<=r.startOffset?n.endOffset=r.endOffset:n.startOffset=NaN},t.prototype.cstPostTerminal=function(e,r){var n=this.CST_STACK[this.CST_STACK.length-1];(0,Tu.addTerminalToCst)(n,r,e),this.setNodeLocationFromToken(n.location,r)},t.prototype.cstPostNonTerminal=function(e,r){var n=this.CST_STACK[this.CST_STACK.length-1];(0,Tu.addNoneTerminalToCst)(n,r,e),this.setNodeLocationFromNode(n.location,e.location)},t.prototype.getBaseCstVisitorConstructor=function(){if((0,FM.default)(this.baseCstVisitorConstructor)){var e=(0,jM.createBaseSemanticVisitorConstructor)(this.className,(0,$M.default)(this.gastProductionsCache));return this.baseCstVisitorConstructor=e,e}return this.baseCstVisitorConstructor},t.prototype.getBaseCstVisitorConstructorWithDefaults=function(){if((0,FM.default)(this.baseCstVisitorWithDefaultsConstructor)){var e=(0,jM.createBaseVisitorConstructorWithDefaults)(this.className,(0,$M.default)(this.gastProductionsCache),this.getBaseCstVisitorConstructor());return this.baseCstVisitorWithDefaultsConstructor=e,e}return this.baseCstVisitorWithDefaultsConstructor},t.prototype.getLastExplicitRuleShortName=function(){var e=this.RULE_STACK;return e[e.length-1]},t.prototype.getPreviousExplicitRuleShortName=function(){var e=this.RULE_STACK;return e[e.length-2]},t.prototype.getLastExplicitRuleOccurrenceIndex=function(){var e=this.RULE_OCCURRENCE_STACK;return e[e.length-1]},t}();Ru.TreeBuilder=Pse});var WM=h(hh=>{"use strict";Object.defineProperty(hh,"__esModule",{value:!0});hh.LexerAdapter=void 0;var GM=nn(),Ase=function(){function t(){}return t.prototype.initLexerAdapter=function(){this.tokVector=[],this.tokVectorLength=0,this.currIdx=-1},Object.defineProperty(t.prototype,"input",{get:function(){return this.tokVector},set:function(e){if(this.selfAnalysisDone!==!0)throw Error("Missing <performSelfAnalysis> invocation at the end of the Parser's constructor.");this.reset(),this.tokVector=e,this.tokVectorLength=e.length},enumerable:!1,configurable:!0}),t.prototype.SKIP_TOKEN=function(){return this.currIdx<=this.tokVector.length-2?(this.consumeToken(),this.LA(1)):GM.END_OF_FILE},t.prototype.LA=function(e){var r=this.currIdx+e;return r<0||this.tokVectorLength<=r?GM.END_OF_FILE:this.tokVector[r]},t.prototype.consumeToken=function(){this.currIdx++},t.prototype.exportLexerState=function(){return this.currIdx},t.prototype.importLexerState=function(e){this.currIdx=e},t.prototype.resetLexerState=function(){this.currIdx=-1},t.prototype.moveToTerminatedState=function(){this.currIdx=this.tokVector.length-1},t.prototype.getLexerPosition=function(){return this.exportLexerState()},t}();hh.LexerAdapter=Ase});var KM=h(bu=>{"use strict";var HM=bu&&bu.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(bu,"__esModule",{value:!0});bu.RecognizerApi=void 0;var Sse=HM(Ei()),Ese=HM(go()),kse=vu(),zR=nn(),Nse=mu(),wse=ml(),Dse=wt(),Ose=function(){function t(){}return t.prototype.ACTION=function(e){return e.call(this)},t.prototype.consume=function(e,r,n){return this.consumeInternal(r,e,n)},t.prototype.subrule=function(e,r,n){return this.subruleInternal(r,e,n)},t.prototype.option=function(e,r){return this.optionInternal(r,e)},t.prototype.or=function(e,r){return this.orInternal(r,e)},t.prototype.many=function(e,r){return this.manyInternal(e,r)},t.prototype.atLeastOne=function(e,r){return this.atLeastOneInternal(e,r)},t.prototype.CONSUME=function(e,r){return this.consumeInternal(e,0,r)},t.prototype.CONSUME1=function(e,r){return this.consumeInternal(e,1,r)},t.prototype.CONSUME2=function(e,r){return this.consumeInternal(e,2,r)},t.prototype.CONSUME3=function(e,r){return this.consumeInternal(e,3,r)},t.prototype.CONSUME4=function(e,r){return this.consumeInternal(e,4,r)},t.prototype.CONSUME5=function(e,r){return this.consumeInternal(e,5,r)},t.prototype.CONSUME6=function(e,r){return this.consumeInternal(e,6,r)},t.prototype.CONSUME7=function(e,r){return this.consumeInternal(e,7,r)},t.prototype.CONSUME8=function(e,r){return this.consumeInternal(e,8,r)},t.prototype.CONSUME9=function(e,r){return this.consumeInternal(e,9,r)},t.prototype.SUBRULE=function(e,r){return this.subruleInternal(e,0,r)},t.prototype.SUBRULE1=function(e,r){return this.subruleInternal(e,1,r)},t.prototype.SUBRULE2=function(e,r){return this.subruleInternal(e,2,r)},t.prototype.SUBRULE3=function(e,r){return this.subruleInternal(e,3,r)},t.prototype.SUBRULE4=function(e,r){return this.subruleInternal(e,4,r)},t.prototype.SUBRULE5=function(e,r){return this.subruleInternal(e,5,r)},t.prototype.SUBRULE6=function(e,r){return this.subruleInternal(e,6,r)},t.prototype.SUBRULE7=function(e,r){return this.subruleInternal(e,7,r)},t.prototype.SUBRULE8=function(e,r){return this.subruleInternal(e,8,r)},t.prototype.SUBRULE9=function(e,r){return this.subruleInternal(e,9,r)},t.prototype.OPTION=function(e){return this.optionInternal(e,0)},t.prototype.OPTION1=function(e){return this.optionInternal(e,1)},t.prototype.OPTION2=function(e){return this.optionInternal(e,2)},t.prototype.OPTION3=function(e){return this.optionInternal(e,3)},t.prototype.OPTION4=function(e){return this.optionInternal(e,4)},t.prototype.OPTION5=function(e){return this.optionInternal(e,5)},t.prototype.OPTION6=function(e){return this.optionInternal(e,6)},t.prototype.OPTION7=function(e){return this.optionInternal(e,7)},t.prototype.OPTION8=function(e){return this.optionInternal(e,8)},t.prototype.OPTION9=function(e){return this.optionInternal(e,9)},t.prototype.OR=function(e){return this.orInternal(e,0)},t.prototype.OR1=function(e){return this.orInternal(e,1)},t.prototype.OR2=function(e){return this.orInternal(e,2)},t.prototype.OR3=function(e){return this.orInternal(e,3)},t.prototype.OR4=function(e){return this.orInternal(e,4)},t.prototype.OR5=function(e){return this.orInternal(e,5)},t.prototype.OR6=function(e){return this.orInternal(e,6)},t.prototype.OR7=function(e){return this.orInternal(e,7)},t.prototype.OR8=function(e){return this.orInternal(e,8)},t.prototype.OR9=function(e){return this.orInternal(e,9)},t.prototype.MANY=function(e){this.manyInternal(0,e)},t.prototype.MANY1=function(e){this.manyInternal(1,e)},t.prototype.MANY2=function(e){this.manyInternal(2,e)},t.prototype.MANY3=function(e){this.manyInternal(3,e)},t.prototype.MANY4=function(e){this.manyInternal(4,e)},t.prototype.MANY5=function(e){this.manyInternal(5,e)},t.prototype.MANY6=function(e){this.manyInternal(6,e)},t.prototype.MANY7=function(e){this.manyInternal(7,e)},t.prototype.MANY8=function(e){this.manyInternal(8,e)},t.prototype.MANY9=function(e){this.manyInternal(9,e)},t.prototype.MANY_SEP=function(e){this.manySepFirstInternal(0,e)},t.prototype.MANY_SEP1=function(e){this.manySepFirstInternal(1,e)},t.prototype.MANY_SEP2=function(e){this.manySepFirstInternal(2,e)},t.prototype.MANY_SEP3=function(e){this.manySepFirstInternal(3,e)},t.prototype.MANY_SEP4=function(e){this.manySepFirstInternal(4,e)},t.prototype.MANY_SEP5=function(e){this.manySepFirstInternal(5,e)},t.prototype.MANY_SEP6=function(e){this.manySepFirstInternal(6,e)},t.prototype.MANY_SEP7=function(e){this.manySepFirstInternal(7,e)},t.prototype.MANY_SEP8=function(e){this.manySepFirstInternal(8,e)},t.prototype.MANY_SEP9=function(e){this.manySepFirstInternal(9,e)},t.prototype.AT_LEAST_ONE=function(e){this.atLeastOneInternal(0,e)},t.prototype.AT_LEAST_ONE1=function(e){return this.atLeastOneInternal(1,e)},t.prototype.AT_LEAST_ONE2=function(e){this.atLeastOneInternal(2,e)},t.prototype.AT_LEAST_ONE3=function(e){this.atLeastOneInternal(3,e)},t.prototype.AT_LEAST_ONE4=function(e){this.atLeastOneInternal(4,e)},t.prototype.AT_LEAST_ONE5=function(e){this.atLeastOneInternal(5,e)},t.prototype.AT_LEAST_ONE6=function(e){this.atLeastOneInternal(6,e)},t.prototype.AT_LEAST_ONE7=function(e){this.atLeastOneInternal(7,e)},t.prototype.AT_LEAST_ONE8=function(e){this.atLeastOneInternal(8,e)},t.prototype.AT_LEAST_ONE9=function(e){this.atLeastOneInternal(9,e)},t.prototype.AT_LEAST_ONE_SEP=function(e){this.atLeastOneSepFirstInternal(0,e)},t.prototype.AT_LEAST_ONE_SEP1=function(e){this.atLeastOneSepFirstInternal(1,e)},t.prototype.AT_LEAST_ONE_SEP2=function(e){this.atLeastOneSepFirstInternal(2,e)},t.prototype.AT_LEAST_ONE_SEP3=function(e){this.atLeastOneSepFirstInternal(3,e)},t.prototype.AT_LEAST_ONE_SEP4=function(e){this.atLeastOneSepFirstInternal(4,e)},t.prototype.AT_LEAST_ONE_SEP5=function(e){this.atLeastOneSepFirstInternal(5,e)},t.prototype.AT_LEAST_ONE_SEP6=function(e){this.atLeastOneSepFirstInternal(6,e)},t.prototype.AT_LEAST_ONE_SEP7=function(e){this.atLeastOneSepFirstInternal(7,e)},t.prototype.AT_LEAST_ONE_SEP8=function(e){this.atLeastOneSepFirstInternal(8,e)},t.prototype.AT_LEAST_ONE_SEP9=function(e){this.atLeastOneSepFirstInternal(9,e)},t.prototype.RULE=function(e,r,n){if(n===void 0&&(n=zR.DEFAULT_RULE_CONFIG),(0,Ese.default)(this.definedRulesNames,e)){var i=Nse.defaultGrammarValidatorErrorProvider.buildDuplicateRuleNameError({topLevelRule:e,grammarName:this.className}),o={message:i,type:zR.ParserDefinitionErrorType.DUPLICATE_RULE_NAME,ruleName:e};this.definitionErrors.push(o)}this.definedRulesNames.push(e);var a=this.defineRule(e,r,n);return this[e]=a,a},t.prototype.OVERRIDE_RULE=function(e,r,n){n===void 0&&(n=zR.DEFAULT_RULE_CONFIG);var i=(0,wse.validateRuleIsOverridden)(e,this.definedRulesNames,this.className);this.definitionErrors=this.definitionErrors.concat(i);var o=this.defineRule(e,r,n);return this[e]=o,o},t.prototype.BACKTRACK=function(e,r){return function(){this.isBackTrackingStack.push(1);var n=this.saveRecogState();try{return e.apply(this,r),!0}catch(i){if((0,kse.isRecognitionException)(i))return!1;throw i}finally{this.reloadRecogState(n),this.isBackTrackingStack.pop()}}},t.prototype.getGAstProductions=function(){return this.gastProductionsCache},t.prototype.getSerializedGastProductions=function(){return(0,Dse.serializeGrammar)((0,Sse.default)(this.gastProductionsCache))},t}();bu.RecognizerApi=Ose});var ZM=h(Pu=>{"use strict";var $i=Pu&&Pu.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(Pu,"__esModule",{value:!0});Pu.RecognizerEngine=void 0;var BM=$i(dn()),YR=$i(Ve()),XR=$i(ti()),VM=$i(ol()),qse=$i(xp()),Ise=$i(Qn()),_l=$i(pn()),Tl=$i(Ei()),zM=$i(yo()),YM=$i(ho()),mn=sh(),mh=vu(),XM=gu(),Cu=fl(),JM=nn(),xse=HR(),QM=ja(),Rl=Fa(),Lse=function(){function t(){}return t.prototype.initRecognizerEngine=function(e,r){if(this.className=this.constructor.name,this.shortRuleNameToFull={},this.fullRuleNameToShort={},this.ruleShortNameIdx=256,this.tokenMatcher=Rl.tokenStructuredMatcherNoCategories,this.subruleIdx=0,this.definedRulesNames=[],this.tokensMap={},this.isBackTrackingStack=[],this.RULE_STACK=[],this.RULE_OCCURRENCE_STACK=[],this.gastProductionsCache={},(0,_l.default)(r,"serializedGrammar"))throw Error(`The Parser's configuration can no longer contain a <serializedGrammar> property.
	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_6-0-0
	For Further details.`);if((0,YR.default)(e)){if((0,BM.default)(e))throw Error(`A Token Vocabulary cannot be empty.
	Note that the first argument for the parser constructor
	is no longer a Token vector (since v4.0).`);if(typeof e[0].startOffset=="number")throw Error(`The Parser constructor no longer accepts a token vector as the first argument.
	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_4-0-0
	For Further details.`)}if((0,YR.default)(e))this.tokensMap=(0,zM.default)(e,function(s,u){return s[u.name]=u,s},{});else if((0,_l.default)(e,"modes")&&(0,VM.default)((0,XR.default)((0,Tl.default)(e.modes)),Rl.isTokenType)){var n=(0,XR.default)((0,Tl.default)(e.modes)),i=(0,qse.default)(n);this.tokensMap=(0,zM.default)(i,function(s,u){return s[u.name]=u,s},{})}else if((0,Ise.default)(e))this.tokensMap=(0,YM.default)(e);else throw new Error("<tokensDictionary> argument must be An Array of Token constructors, A dictionary of Token constructors or an IMultiModeLexerDefinition");this.tokensMap.EOF=QM.EOF;var o=(0,_l.default)(e,"modes")?(0,XR.default)((0,Tl.default)(e.modes)):(0,Tl.default)(e),a=(0,VM.default)(o,function(s){return(0,BM.default)(s.categoryMatches)});this.tokenMatcher=a?Rl.tokenStructuredMatcherNoCategories:Rl.tokenStructuredMatcher,(0,Rl.augmentTokenTypes)((0,Tl.default)(this.tokensMap))},t.prototype.defineRule=function(e,r,n){if(this.selfAnalysisDone)throw Error("Grammar rule <".concat(e,`> may not be defined after the 'performSelfAnalysis' method has been called'
`)+"Make sure that all grammar rule definitions are done before 'performSelfAnalysis' is called.");var i=(0,_l.default)(n,"resyncEnabled")?n.resyncEnabled:JM.DEFAULT_RULE_CONFIG.resyncEnabled,o=(0,_l.default)(n,"recoveryValueFunc")?n.recoveryValueFunc:JM.DEFAULT_RULE_CONFIG.recoveryValueFunc,a=this.ruleShortNameIdx<<mn.BITS_FOR_METHOD_TYPE+mn.BITS_FOR_OCCURRENCE_IDX;this.ruleShortNameIdx++,this.shortRuleNameToFull[a]=e,this.fullRuleNameToShort[e]=a;var s;this.outputCst===!0?s=function(){for(var p=[],m=0;m<arguments.length;m++)p[m]=arguments[m];try{this.ruleInvocationStateUpdate(a,e,this.subruleIdx),r.apply(this,p);var y=this.CST_STACK[this.CST_STACK.length-1];return this.cstPostRule(y),y}catch(S){return this.invokeRuleCatch(S,i,o)}finally{this.ruleFinallyStateUpdate()}}:s=function(){for(var p=[],m=0;m<arguments.length;m++)p[m]=arguments[m];try{return this.ruleInvocationStateUpdate(a,e,this.subruleIdx),r.apply(this,p)}catch(y){return this.invokeRuleCatch(y,i,o)}finally{this.ruleFinallyStateUpdate()}};var u=Object.assign(s,{ruleName:e,originalGrammarAction:r});return u},t.prototype.invokeRuleCatch=function(e,r,n){var i=this.RULE_STACK.length===1,o=r&&!this.isBackTracking()&&this.recoveryEnabled;if((0,mh.isRecognitionException)(e)){var a=e;if(o){var s=this.findReSyncTokenType();if(this.isInCurrentRuleReSyncSet(s))if(a.resyncedTokens=this.reSyncTo(s),this.outputCst){var u=this.CST_STACK[this.CST_STACK.length-1];return u.recoveredNode=!0,u}else return n();else{if(this.outputCst){var u=this.CST_STACK[this.CST_STACK.length-1];u.recoveredNode=!0,a.partialCstResult=u}throw a}}else{if(i)return this.moveToTerminatedState(),n();throw a}}else throw e},t.prototype.optionInternal=function(e,r){var n=this.getKeyForAutomaticLookahead(mn.OPTION_IDX,r);return this.optionInternalLogic(e,r,n)},t.prototype.optionInternalLogic=function(e,r,n){var i=this,o=this.getLaFuncFromCache(n),a;if(typeof e!="function"){a=e.DEF;var s=e.GATE;if(s!==void 0){var u=o;o=function(){return s.call(i)&&u.call(i)}}}else a=e;if(o.call(this)===!0)return a.call(this)},t.prototype.atLeastOneInternal=function(e,r){var n=this.getKeyForAutomaticLookahead(mn.AT_LEAST_ONE_IDX,e);return this.atLeastOneInternalLogic(e,r,n)},t.prototype.atLeastOneInternalLogic=function(e,r,n){var i=this,o=this.getLaFuncFromCache(n),a;if(typeof r!="function"){a=r.DEF;var s=r.GATE;if(s!==void 0){var u=o;o=function(){return s.call(i)&&u.call(i)}}}else a=r;if(o.call(this)===!0)for(var d=this.doSingleRepetition(a);o.call(this)===!0&&d===!0;)d=this.doSingleRepetition(a);else throw this.raiseEarlyExitException(e,XM.PROD_TYPE.REPETITION_MANDATORY,r.ERR_MSG);this.attemptInRepetitionRecovery(this.atLeastOneInternal,[e,r],o,mn.AT_LEAST_ONE_IDX,e,Cu.NextTerminalAfterAtLeastOneWalker)},t.prototype.atLeastOneSepFirstInternal=function(e,r){var n=this.getKeyForAutomaticLookahead(mn.AT_LEAST_ONE_SEP_IDX,e);this.atLeastOneSepFirstInternalLogic(e,r,n)},t.prototype.atLeastOneSepFirstInternalLogic=function(e,r,n){var i=this,o=r.DEF,a=r.SEP,s=this.getLaFuncFromCache(n);if(s.call(this)===!0){o.call(this);for(var u=function(){return i.tokenMatcher(i.LA(1),a)};this.tokenMatcher(this.LA(1),a)===!0;)this.CONSUME(a),o.call(this);this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal,[e,a,u,o,Cu.NextTerminalAfterAtLeastOneSepWalker],u,mn.AT_LEAST_ONE_SEP_IDX,e,Cu.NextTerminalAfterAtLeastOneSepWalker)}else throw this.raiseEarlyExitException(e,XM.PROD_TYPE.REPETITION_MANDATORY_WITH_SEPARATOR,r.ERR_MSG)},t.prototype.manyInternal=function(e,r){var n=this.getKeyForAutomaticLookahead(mn.MANY_IDX,e);return this.manyInternalLogic(e,r,n)},t.prototype.manyInternalLogic=function(e,r,n){var i=this,o=this.getLaFuncFromCache(n),a;if(typeof r!="function"){a=r.DEF;var s=r.GATE;if(s!==void 0){var u=o;o=function(){return s.call(i)&&u.call(i)}}}else a=r;for(var d=!0;o.call(this)===!0&&d===!0;)d=this.doSingleRepetition(a);this.attemptInRepetitionRecovery(this.manyInternal,[e,r],o,mn.MANY_IDX,e,Cu.NextTerminalAfterManyWalker,d)},t.prototype.manySepFirstInternal=function(e,r){var n=this.getKeyForAutomaticLookahead(mn.MANY_SEP_IDX,e);this.manySepFirstInternalLogic(e,r,n)},t.prototype.manySepFirstInternalLogic=function(e,r,n){var i=this,o=r.DEF,a=r.SEP,s=this.getLaFuncFromCache(n);if(s.call(this)===!0){o.call(this);for(var u=function(){return i.tokenMatcher(i.LA(1),a)};this.tokenMatcher(this.LA(1),a)===!0;)this.CONSUME(a),o.call(this);this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal,[e,a,u,o,Cu.NextTerminalAfterManySepWalker],u,mn.MANY_SEP_IDX,e,Cu.NextTerminalAfterManySepWalker)}},t.prototype.repetitionSepSecondInternal=function(e,r,n,i,o){for(;n();)this.CONSUME(r),i.call(this);this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal,[e,r,n,i,o],n,mn.AT_LEAST_ONE_SEP_IDX,e,o)},t.prototype.doSingleRepetition=function(e){var r=this.getLexerPosition();e.call(this);var n=this.getLexerPosition();return n>r},t.prototype.orInternal=function(e,r){var n=this.getKeyForAutomaticLookahead(mn.OR_IDX,r),i=(0,YR.default)(e)?e:e.DEF,o=this.getLaFuncFromCache(n),a=o.call(this,i);if(a!==void 0){var s=i[a];return s.ALT.call(this)}this.raiseNoAltException(r,e.ERR_MSG)},t.prototype.ruleFinallyStateUpdate=function(){if(this.RULE_STACK.pop(),this.RULE_OCCURRENCE_STACK.pop(),this.cstFinallyStateUpdate(),this.RULE_STACK.length===0&&this.isAtEndOfInput()===!1){var e=this.LA(1),r=this.errorMessageProvider.buildNotAllInputParsedMessage({firstRedundant:e,ruleName:this.getCurrRuleFullName()});this.SAVE_ERROR(new mh.NotAllInputParsedException(r,e))}},t.prototype.subruleInternal=function(e,r,n){var i;try{var o=n!==void 0?n.ARGS:void 0;return this.subruleIdx=r,i=e.apply(this,o),this.cstPostNonTerminal(i,n!==void 0&&n.LABEL!==void 0?n.LABEL:e.ruleName),i}catch(a){throw this.subruleInternalError(a,n,e.ruleName)}},t.prototype.subruleInternalError=function(e,r,n){throw(0,mh.isRecognitionException)(e)&&e.partialCstResult!==void 0&&(this.cstPostNonTerminal(e.partialCstResult,r!==void 0&&r.LABEL!==void 0?r.LABEL:n),delete e.partialCstResult),e},t.prototype.consumeInternal=function(e,r,n){var i;try{var o=this.LA(1);this.tokenMatcher(o,e)===!0?(this.consumeToken(),i=o):this.consumeInternalError(e,o,n)}catch(a){i=this.consumeInternalRecovery(e,r,a)}return this.cstPostTerminal(n!==void 0&&n.LABEL!==void 0?n.LABEL:e.name,i),i},t.prototype.consumeInternalError=function(e,r,n){var i,o=this.LA(0);throw n!==void 0&&n.ERR_MSG?i=n.ERR_MSG:i=this.errorMessageProvider.buildMismatchTokenMessage({expected:e,actual:r,previous:o,ruleName:this.getCurrRuleFullName()}),this.SAVE_ERROR(new mh.MismatchedTokenException(i,r,o))},t.prototype.consumeInternalRecovery=function(e,r,n){if(this.recoveryEnabled&&n.name==="MismatchedTokenException"&&!this.isBackTracking()){var i=this.getFollowsForInRuleRecovery(e,r);try{return this.tryInRuleRecovery(e,i)}catch(o){throw o.name===xse.IN_RULE_RECOVERY_EXCEPTION?n:o}}else throw n},t.prototype.saveRecogState=function(){var e=this.errors,r=(0,YM.default)(this.RULE_STACK);return{errors:e,lexerState:this.exportLexerState(),RULE_STACK:r,CST_STACK:this.CST_STACK}},t.prototype.reloadRecogState=function(e){this.errors=e.errors,this.importLexerState(e.lexerState),this.RULE_STACK=e.RULE_STACK},t.prototype.ruleInvocationStateUpdate=function(e,r,n){this.RULE_OCCURRENCE_STACK.push(n),this.RULE_STACK.push(e),this.cstInvocationStateUpdate(r)},t.prototype.isBackTracking=function(){return this.isBackTrackingStack.length!==0},t.prototype.getCurrRuleFullName=function(){var e=this.getLastExplicitRuleShortName();return this.shortRuleNameToFull[e]},t.prototype.shortRuleNameToFullName=function(e){return this.shortRuleNameToFull[e]},t.prototype.isAtEndOfInput=function(){return this.tokenMatcher(this.LA(1),QM.EOF)},t.prototype.reset=function(){this.resetLexerState(),this.subruleIdx=0,this.isBackTrackingStack=[],this.errors=[],this.RULE_STACK=[],this.CST_STACK=[],this.RULE_OCCURRENCE_STACK=[]},t}();Pu.RecognizerEngine=Lse});var n1=h(Au=>{"use strict";var r1=Au&&Au.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(Au,"__esModule",{value:!0});Au.ErrorHandler=void 0;var JR=vu(),Mse=r1(pn()),e1=r1(ho()),t1=gu(),$se=nn(),Fse=function(){function t(){}return t.prototype.initErrorHandler=function(e){this._errors=[],this.errorMessageProvider=(0,Mse.default)(e,"errorMessageProvider")?e.errorMessageProvider:$se.DEFAULT_PARSER_CONFIG.errorMessageProvider},t.prototype.SAVE_ERROR=function(e){if((0,JR.isRecognitionException)(e))return e.context={ruleStack:this.getHumanReadableRuleStack(),ruleOccurrenceStack:(0,e1.default)(this.RULE_OCCURRENCE_STACK)},this._errors.push(e),e;throw Error("Trying to save an Error which is not a RecognitionException")},Object.defineProperty(t.prototype,"errors",{get:function(){return(0,e1.default)(this._errors)},set:function(e){this._errors=e},enumerable:!1,configurable:!0}),t.prototype.raiseEarlyExitException=function(e,r,n){for(var i=this.getCurrRuleFullName(),o=this.getGAstProductions()[i],a=(0,t1.getLookaheadPathsForOptionalProd)(e,o,r,this.maxLookahead),s=a[0],u=[],d=1;d<=this.maxLookahead;d++)u.push(this.LA(d));var p=this.errorMessageProvider.buildEarlyExitMessage({expectedIterationPaths:s,actual:u,previous:this.LA(0),customUserDescription:n,ruleName:i});throw this.SAVE_ERROR(new JR.EarlyExitException(p,this.LA(1),this.LA(0)))},t.prototype.raiseNoAltException=function(e,r){for(var n=this.getCurrRuleFullName(),i=this.getGAstProductions()[n],o=(0,t1.getLookaheadPathsForOr)(e,i,this.maxLookahead),a=[],s=1;s<=this.maxLookahead;s++)a.push(this.LA(s));var u=this.LA(0),d=this.errorMessageProvider.buildNoViableAltMessage({expectedPathsPerAlt:o,actual:a,previous:u,customUserDescription:r,ruleName:this.getCurrRuleFullName()});throw this.SAVE_ERROR(new JR.NoViableAltException(d,this.LA(1),u))},t}();Au.ErrorHandler=Fse});var a1=h(Su=>{"use strict";var o1=Su&&Su.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(Su,"__esModule",{value:!0});Su.ContentAssist=void 0;var i1=fl(),jse=o1(lu()),Use=o1(La()),Gse=function(){function t(){}return t.prototype.initContentAssist=function(){},t.prototype.computeContentAssist=function(e,r){var n=this.gastProductionsCache[e];if((0,Use.default)(n))throw Error("Rule ->".concat(e,"<- does not exist in this grammar."));return(0,i1.nextPossibleTokensAfter)([n],r,this.tokenMatcher,this.maxLookahead)},t.prototype.getNextPossibleTokenTypes=function(e){var r=(0,jse.default)(e.ruleStack),n=this.getGAstProductions(),i=n[r],o=new i1.NextAfterTokenWalker(i,e).startWalking();return o},t}();Su.ContentAssist=Gse});var m1=h(Eu=>{"use strict";var ku=Eu&&Eu.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(Eu,"__esModule",{value:!0});Eu.GastRecorder=void 0;var gh=ku(Xp()),Wse=ku(Ve()),Hse=ku(Np()),Kse=ku(or()),l1=ku(Ws()),Cl=ku(pn()),Fi=wt(),Bse=ul(),d1=Fa(),f1=ja(),Vse=nn(),zse=sh(),vh={description:"This Object indicates the Parser is during Recording Phase"};Object.freeze(vh);var s1=!0,u1=Math.pow(2,zse.BITS_FOR_OCCURRENCE_IDX)-1,p1=(0,f1.createToken)({name:"RECORDING_PHASE_TOKEN",pattern:Bse.Lexer.NA});(0,d1.augmentTokenTypes)([p1]);var h1=(0,f1.createTokenInstance)(p1,`This IToken indicates the Parser is in Recording Phase
	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details`,-1,-1,-1,-1,-1,-1);Object.freeze(h1);var Yse={name:`This CSTNode indicates the Parser is in Recording Phase
	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details`,children:{}},Xse=function(){function t(){}return t.prototype.initGastRecorder=function(e){this.recordingProdStack=[],this.RECORDING_PHASE=!1},t.prototype.enableRecording=function(){var e=this;this.RECORDING_PHASE=!0,this.TRACE_INIT("Enable Recording",function(){for(var r=function(i){var o=i>0?i:"";e["CONSUME".concat(o)]=function(a,s){return this.consumeInternalRecord(a,i,s)},e["SUBRULE".concat(o)]=function(a,s){return this.subruleInternalRecord(a,i,s)},e["OPTION".concat(o)]=function(a){return this.optionInternalRecord(a,i)},e["OR".concat(o)]=function(a){return this.orInternalRecord(a,i)},e["MANY".concat(o)]=function(a){this.manyInternalRecord(i,a)},e["MANY_SEP".concat(o)]=function(a){this.manySepFirstInternalRecord(i,a)},e["AT_LEAST_ONE".concat(o)]=function(a){this.atLeastOneInternalRecord(i,a)},e["AT_LEAST_ONE_SEP".concat(o)]=function(a){this.atLeastOneSepFirstInternalRecord(i,a)}},n=0;n<10;n++)r(n);e.consume=function(i,o,a){return this.consumeInternalRecord(o,i,a)},e.subrule=function(i,o,a){return this.subruleInternalRecord(o,i,a)},e.option=function(i,o){return this.optionInternalRecord(o,i)},e.or=function(i,o){return this.orInternalRecord(o,i)},e.many=function(i,o){this.manyInternalRecord(i,o)},e.atLeastOne=function(i,o){this.atLeastOneInternalRecord(i,o)},e.ACTION=e.ACTION_RECORD,e.BACKTRACK=e.BACKTRACK_RECORD,e.LA=e.LA_RECORD})},t.prototype.disableRecording=function(){var e=this;this.RECORDING_PHASE=!1,this.TRACE_INIT("Deleting Recording methods",function(){for(var r=e,n=0;n<10;n++){var i=n>0?n:"";delete r["CONSUME".concat(i)],delete r["SUBRULE".concat(i)],delete r["OPTION".concat(i)],delete r["OR".concat(i)],delete r["MANY".concat(i)],delete r["MANY_SEP".concat(i)],delete r["AT_LEAST_ONE".concat(i)],delete r["AT_LEAST_ONE_SEP".concat(i)]}delete r.consume,delete r.subrule,delete r.option,delete r.or,delete r.many,delete r.atLeastOne,delete r.ACTION,delete r.BACKTRACK,delete r.LA})},t.prototype.ACTION_RECORD=function(e){},t.prototype.BACKTRACK_RECORD=function(e,r){return function(){return!0}},t.prototype.LA_RECORD=function(e){return Vse.END_OF_FILE},t.prototype.topLevelRuleRecord=function(e,r){try{var n=new Fi.Rule({definition:[],name:e});return n.name=e,this.recordingProdStack.push(n),r.call(this),this.recordingProdStack.pop(),n}catch(i){if(i.KNOWN_RECORDER_ERROR!==!0)try{i.message=i.message+`
	 This error was thrown during the "grammar recording phase" For more info see:
	https://chevrotain.io/docs/guide/internals.html#grammar-recording`}catch{throw i}throw i}},t.prototype.optionInternalRecord=function(e,r){return bl.call(this,Fi.Option,e,r)},t.prototype.atLeastOneInternalRecord=function(e,r){bl.call(this,Fi.RepetitionMandatory,r,e)},t.prototype.atLeastOneSepFirstInternalRecord=function(e,r){bl.call(this,Fi.RepetitionMandatoryWithSeparator,r,e,s1)},t.prototype.manyInternalRecord=function(e,r){bl.call(this,Fi.Repetition,r,e)},t.prototype.manySepFirstInternalRecord=function(e,r){bl.call(this,Fi.RepetitionWithSeparator,r,e,s1)},t.prototype.orInternalRecord=function(e,r){return Jse.call(this,e,r)},t.prototype.subruleInternalRecord=function(e,r,n){if(yh(r),!e||(0,Cl.default)(e,"ruleName")===!1){var i=new Error("<SUBRULE".concat(c1(r),"> argument is invalid")+" expecting a Parser method reference but got: <".concat(JSON.stringify(e),">")+`
 inside top level rule: <`.concat(this.recordingProdStack[0].name,">"));throw i.KNOWN_RECORDER_ERROR=!0,i}var o=(0,gh.default)(this.recordingProdStack),a=e.ruleName,s=new Fi.NonTerminal({idx:r,nonTerminalName:a,label:n?.LABEL,referencedRule:void 0});return o.definition.push(s),this.outputCst?Yse:vh},t.prototype.consumeInternalRecord=function(e,r,n){if(yh(r),!(0,d1.hasShortKeyProperty)(e)){var i=new Error("<CONSUME".concat(c1(r),"> argument is invalid")+" expecting a TokenType reference but got: <".concat(JSON.stringify(e),">")+`
 inside top level rule: <`.concat(this.recordingProdStack[0].name,">"));throw i.KNOWN_RECORDER_ERROR=!0,i}var o=(0,gh.default)(this.recordingProdStack),a=new Fi.Terminal({idx:r,terminalType:e,label:n?.LABEL});return o.definition.push(a),h1},t}();Eu.GastRecorder=Xse;function bl(t,e,r,n){n===void 0&&(n=!1),yh(r);var i=(0,gh.default)(this.recordingProdStack),o=(0,l1.default)(e)?e:e.DEF,a=new t({definition:[],idx:r});return n&&(a.separator=e.SEP),(0,Cl.default)(e,"MAX_LOOKAHEAD")&&(a.maxLookahead=e.MAX_LOOKAHEAD),this.recordingProdStack.push(a),o.call(this),i.definition.push(a),this.recordingProdStack.pop(),vh}function Jse(t,e){var r=this;yh(e);var n=(0,gh.default)(this.recordingProdStack),i=(0,Wse.default)(t)===!1,o=i===!1?t:t.DEF,a=new Fi.Alternation({definition:[],idx:e,ignoreAmbiguities:i&&t.IGNORE_AMBIGUITIES===!0});(0,Cl.default)(t,"MAX_LOOKAHEAD")&&(a.maxLookahead=t.MAX_LOOKAHEAD);var s=(0,Hse.default)(o,function(u){return(0,l1.default)(u.GATE)});return a.hasPredicates=s,n.definition.push(a),(0,Kse.default)(o,function(u){var d=new Fi.Alternative({definition:[]});a.definition.push(d),(0,Cl.default)(u,"IGNORE_AMBIGUITIES")?d.ignoreAmbiguities=u.IGNORE_AMBIGUITIES:(0,Cl.default)(u,"GATE")&&(d.ignoreAmbiguities=!0),r.recordingProdStack.push(d),u.ALT.call(r),r.recordingProdStack.pop()}),vh}function c1(t){return t===0?"":"".concat(t)}function yh(t){if(t<0||t>u1){var e=new Error("Invalid DSL Method idx value: <".concat(t,`>
	`)+"Idx value must be a none negative value smaller than ".concat(u1+1));throw e.KNOWN_RECORDER_ERROR=!0,e}}});var g1=h(Nu=>{"use strict";var Qse=Nu&&Nu.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(Nu,"__esModule",{value:!0});Nu.PerformanceTracer=void 0;var Zse=Qse(pn()),eue=au(),tue=nn(),rue=function(){function t(){}return t.prototype.initPerformanceTracer=function(e){if((0,Zse.default)(e,"traceInitPerf")){var r=e.traceInitPerf,n=typeof r=="number";this.traceInitMaxIdent=n?r:1/0,this.traceInitPerf=n?r>0:r}else this.traceInitMaxIdent=0,this.traceInitPerf=tue.DEFAULT_PARSER_CONFIG.traceInitPerf;this.traceInitIndent=-1},t.prototype.TRACE_INIT=function(e,r){if(this.traceInitPerf===!0){this.traceInitIndent++;var n=new Array(this.traceInitIndent+1).join("	");this.traceInitIndent<this.traceInitMaxIdent&&console.log("".concat(n,"--> <").concat(e,">"));var i=(0,eue.timer)(r),o=i.time,a=i.value,s=o>10?console.warn:console.log;return this.traceInitIndent<this.traceInitMaxIdent&&s("".concat(n,"<-- <").concat(e,"> time: ").concat(o,"ms")),this.traceInitIndent--,a}else return r()},t}();Nu.PerformanceTracer=rue});var y1=h(_h=>{"use strict";Object.defineProperty(_h,"__esModule",{value:!0});_h.applyMixins=void 0;function nue(t,e){e.forEach(function(r){var n=r.prototype;Object.getOwnPropertyNames(n).forEach(function(i){if(i!=="constructor"){var o=Object.getOwnPropertyDescriptor(n,i);o&&(o.get||o.set)?Object.defineProperty(t.prototype,i,o):t.prototype[i]=r.prototype[i]}})})}_h.applyMixins=nue});var nn=h(tt=>{"use strict";var R1=tt&&tt.__extends||function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(n[o]=i[o])},t(e,r)};return function(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");t(e,r);function n(){this.constructor=e}e.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}(),wu=tt&&tt.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(tt,"__esModule",{value:!0});tt.EmbeddedActionsParser=tt.CstParser=tt.Parser=tt.EMPTY_ALT=tt.ParserDefinitionErrorType=tt.DEFAULT_RULE_CONFIG=tt.DEFAULT_PARSER_CONFIG=tt.END_OF_FILE=void 0;var QR=wu(dn()),iue=wu(ir()),oue=wu(or()),aa=wu(Ei()),v1=wu(pn()),b1=wu(ho()),aue=au(),sue=tx(),_1=ja(),C1=mu(),T1=hM(),uue=HR(),cue=kM(),lue=UM(),due=WM(),fue=KM(),pue=ZM(),hue=n1(),mue=a1(),gue=m1(),yue=g1(),vue=y1(),_ue=ml();tt.END_OF_FILE=(0,_1.createTokenInstance)(_1.EOF,"",NaN,NaN,NaN,NaN,NaN,NaN);Object.freeze(tt.END_OF_FILE);tt.DEFAULT_PARSER_CONFIG=Object.freeze({recoveryEnabled:!1,maxLookahead:3,dynamicTokensEnabled:!1,outputCst:!0,errorMessageProvider:C1.defaultParserErrorProvider,nodeLocationTracking:"none",traceInitPerf:!1,skipValidations:!1});tt.DEFAULT_RULE_CONFIG=Object.freeze({recoveryValueFunc:function(){},resyncEnabled:!0});var Tue;(function(t){t[t.INVALID_RULE_NAME=0]="INVALID_RULE_NAME",t[t.DUPLICATE_RULE_NAME=1]="DUPLICATE_RULE_NAME",t[t.INVALID_RULE_OVERRIDE=2]="INVALID_RULE_OVERRIDE",t[t.DUPLICATE_PRODUCTIONS=3]="DUPLICATE_PRODUCTIONS",t[t.UNRESOLVED_SUBRULE_REF=4]="UNRESOLVED_SUBRULE_REF",t[t.LEFT_RECURSION=5]="LEFT_RECURSION",t[t.NONE_LAST_EMPTY_ALT=6]="NONE_LAST_EMPTY_ALT",t[t.AMBIGUOUS_ALTS=7]="AMBIGUOUS_ALTS",t[t.CONFLICT_TOKENS_RULES_NAMESPACE=8]="CONFLICT_TOKENS_RULES_NAMESPACE",t[t.INVALID_TOKEN_NAME=9]="INVALID_TOKEN_NAME",t[t.NO_NON_EMPTY_LOOKAHEAD=10]="NO_NON_EMPTY_LOOKAHEAD",t[t.AMBIGUOUS_PREFIX_ALTS=11]="AMBIGUOUS_PREFIX_ALTS",t[t.TOO_MANY_ALTS=12]="TOO_MANY_ALTS",t[t.CUSTOM_LOOKAHEAD_VALIDATION=13]="CUSTOM_LOOKAHEAD_VALIDATION"})(Tue=tt.ParserDefinitionErrorType||(tt.ParserDefinitionErrorType={}));function Rue(t){return t===void 0&&(t=void 0),function(){return t}}tt.EMPTY_ALT=Rue;var Th=function(){function t(e,r){this.definitionErrors=[],this.selfAnalysisDone=!1;var n=this;if(n.initErrorHandler(r),n.initLexerAdapter(),n.initLooksAhead(r),n.initRecognizerEngine(e,r),n.initRecoverable(r),n.initTreeBuilder(r),n.initContentAssist(),n.initGastRecorder(r),n.initPerformanceTracer(r),(0,v1.default)(r,"ignoredIssues"))throw new Error(`The <ignoredIssues> IParserConfig property has been deprecated.
	Please use the <IGNORE_AMBIGUITIES> flag on the relevant DSL method instead.
	See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#IGNORING_AMBIGUITIES
	For further details.`);this.skipValidations=(0,v1.default)(r,"skipValidations")?r.skipValidations:tt.DEFAULT_PARSER_CONFIG.skipValidations}return t.performSelfAnalysis=function(e){throw Error("The **static** `performSelfAnalysis` method has been deprecated.	\nUse the **instance** method with the same name instead.")},t.prototype.performSelfAnalysis=function(){var e=this;this.TRACE_INIT("performSelfAnalysis",function(){var r;e.selfAnalysisDone=!0;var n=e.className;e.TRACE_INIT("toFastProps",function(){(0,aue.toFastProperties)(e)}),e.TRACE_INIT("Grammar Recording",function(){try{e.enableRecording(),(0,oue.default)(e.definedRulesNames,function(o){var a=e[o],s=a.originalGrammarAction,u;e.TRACE_INIT("".concat(o," Rule"),function(){u=e.topLevelRuleRecord(o,s)}),e.gastProductionsCache[o]=u})}finally{e.disableRecording()}});var i=[];if(e.TRACE_INIT("Grammar Resolving",function(){i=(0,T1.resolveGrammar)({rules:(0,aa.default)(e.gastProductionsCache)}),e.definitionErrors=e.definitionErrors.concat(i)}),e.TRACE_INIT("Grammar Validations",function(){if((0,QR.default)(i)&&e.skipValidations===!1){var o=(0,T1.validateGrammar)({rules:(0,aa.default)(e.gastProductionsCache),tokenTypes:(0,aa.default)(e.tokensMap),errMsgProvider:C1.defaultGrammarValidatorErrorProvider,grammarName:n}),a=(0,_ue.validateLookahead)({lookaheadStrategy:e.lookaheadStrategy,rules:(0,aa.default)(e.gastProductionsCache),tokenTypes:(0,aa.default)(e.tokensMap),grammarName:n});e.definitionErrors=e.definitionErrors.concat(o,a)}}),(0,QR.default)(e.definitionErrors)&&(e.recoveryEnabled&&e.TRACE_INIT("computeAllProdsFollows",function(){var o=(0,sue.computeAllProdsFollows)((0,aa.default)(e.gastProductionsCache));e.resyncFollows=o}),e.TRACE_INIT("ComputeLookaheadFunctions",function(){var o,a;(a=(o=e.lookaheadStrategy).initialize)===null||a===void 0||a.call(o,{rules:(0,aa.default)(e.gastProductionsCache)}),e.preComputeLookaheadFunctions((0,aa.default)(e.gastProductionsCache))})),!t.DEFER_DEFINITION_ERRORS_HANDLING&&!(0,QR.default)(e.definitionErrors))throw r=(0,iue.default)(e.definitionErrors,function(o){return o.message}),new Error(`Parser Definition Errors detected:
 `.concat(r.join(`
-------------------------------
`)))})},t.DEFER_DEFINITION_ERRORS_HANDLING=!1,t}();tt.Parser=Th;(0,vue.applyMixins)(Th,[uue.Recoverable,cue.LooksAhead,lue.TreeBuilder,due.LexerAdapter,pue.RecognizerEngine,fue.RecognizerApi,hue.ErrorHandler,mue.ContentAssist,gue.GastRecorder,yue.PerformanceTracer]);var bue=function(t){R1(e,t);function e(r,n){n===void 0&&(n=tt.DEFAULT_PARSER_CONFIG);var i=(0,b1.default)(n);return i.outputCst=!0,t.call(this,r,i)||this}return e}(Th);tt.CstParser=bue;var Cue=function(t){R1(e,t);function e(r,n){n===void 0&&(n=tt.DEFAULT_PARSER_CONFIG);var i=(0,b1.default)(n);return i.outputCst=!1,t.call(this,r,i)||this}return e}(Th);tt.EmbeddedActionsParser=Cue});var A1=h(sa=>{"use strict";var Pue=sa&&sa.__extends||function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(n[o]=i[o])},t(e,r)};return function(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");t(e,r);function n(){this.constructor=e}e.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}(),Du=sa&&sa.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(sa,"__esModule",{value:!0});sa.buildModel=void 0;var P1=wt(),Pl=Du(ir()),Aue=Du(ti()),Sue=Du(Ei()),Eue=Du(Np()),kue=Du(NR()),Nue=Du(nl());function wue(t){var e=new Due,r=(0,Sue.default)(t);return(0,Pl.default)(r,function(n){return e.visitRule(n)})}sa.buildModel=wue;var Due=function(t){Pue(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e.prototype.visitRule=function(r){var n=this.visitEach(r.definition),i=(0,kue.default)(n,function(a){return a.propertyName}),o=(0,Pl.default)(i,function(a,s){var u=!(0,Eue.default)(a,function(p){return!p.canBeNull}),d=a[0].type;return a.length>1&&(d=(0,Pl.default)(a,function(p){return p.type})),{name:s,type:d,optional:u}});return{name:r.name,properties:o}},e.prototype.visitAlternative=function(r){return this.visitEachAndOverrideWith(r.definition,{canBeNull:!0})},e.prototype.visitOption=function(r){return this.visitEachAndOverrideWith(r.definition,{canBeNull:!0})},e.prototype.visitRepetition=function(r){return this.visitEachAndOverrideWith(r.definition,{canBeNull:!0})},e.prototype.visitRepetitionMandatory=function(r){return this.visitEach(r.definition)},e.prototype.visitRepetitionMandatoryWithSeparator=function(r){return this.visitEach(r.definition).concat({propertyName:r.separator.name,canBeNull:!0,type:Rh(r.separator)})},e.prototype.visitRepetitionWithSeparator=function(r){return this.visitEachAndOverrideWith(r.definition,{canBeNull:!0}).concat({propertyName:r.separator.name,canBeNull:!0,type:Rh(r.separator)})},e.prototype.visitAlternation=function(r){return this.visitEachAndOverrideWith(r.definition,{canBeNull:!0})},e.prototype.visitTerminal=function(r){return[{propertyName:r.label||r.terminalType.name,canBeNull:!1,type:Rh(r)}]},e.prototype.visitNonTerminal=function(r){return[{propertyName:r.label||r.nonTerminalName,canBeNull:!1,type:Rh(r)}]},e.prototype.visitEachAndOverrideWith=function(r,n){return(0,Pl.default)(this.visitEach(r),function(i){return(0,Nue.default)({},i,n)})},e.prototype.visitEach=function(r){var n=this;return(0,Aue.default)((0,Pl.default)(r,function(i){return n.visit(i)}))},e}(P1.GAstVisitor);function Rh(t){return t instanceof P1.NonTerminal?{kind:"rule",name:t.referencedRule.name}:{kind:"token"}}});var E1=h((s0e,S1)=>{var Oue=Cp();function que(t,e,r){var n=t.length;return r=r===void 0?n:r,!e&&r>=n?t:Oue(t,e,r)}S1.exports=que});var ZR=h((u0e,k1)=>{var Iue="\\ud800-\\udfff",xue="\\u0300-\\u036f",Lue="\\ufe20-\\ufe2f",Mue="\\u20d0-\\u20ff",$ue=xue+Lue+Mue,Fue="\\ufe0e\\ufe0f",jue="\\u200d",Uue=RegExp("["+jue+Iue+$ue+Fue+"]");function Gue(t){return Uue.test(t)}k1.exports=Gue});var w1=h((c0e,N1)=>{function Wue(t){return t.split("")}N1.exports=Wue});var $1=h((l0e,M1)=>{var D1="\\ud800-\\udfff",Hue="\\u0300-\\u036f",Kue="\\ufe20-\\ufe2f",Bue="\\u20d0-\\u20ff",Vue=Hue+Kue+Bue,zue="\\ufe0e\\ufe0f",Yue="["+D1+"]",eb="["+Vue+"]",tb="\\ud83c[\\udffb-\\udfff]",Xue="(?:"+eb+"|"+tb+")",O1="[^"+D1+"]",q1="(?:\\ud83c[\\udde6-\\uddff]){2}",I1="[\\ud800-\\udbff][\\udc00-\\udfff]",Jue="\\u200d",x1=Xue+"?",L1="["+zue+"]?",Que="(?:"+Jue+"(?:"+[O1,q1,I1].join("|")+")"+L1+x1+")*",Zue=L1+x1+Que,ece="(?:"+[O1+eb+"?",eb,q1,I1,Yue].join("|")+")",tce=RegExp(tb+"(?="+tb+")|"+ece+Zue,"g");function rce(t){return t.match(tce)||[]}M1.exports=rce});var j1=h((d0e,F1)=>{var nce=w1(),ice=ZR(),oce=$1();function ace(t){return ice(t)?oce(t):nce(t)}F1.exports=ace});var G1=h((f0e,U1)=>{var sce=E1(),uce=ZR(),cce=j1(),lce=FT();function dce(t){return function(e){e=lce(e);var r=uce(e)?cce(e):void 0,n=r?r[0]:e.charAt(0),i=r?sce(r,1).join(""):e.slice(1);return n[t]()+i}}U1.exports=dce});var H1=h((p0e,W1)=>{var fce=G1(),pce=fce("toUpperCase");W1.exports=pce});var z1=h(Ou=>{"use strict";var qu=Ou&&Ou.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(Ou,"__esModule",{value:!0});Ou.genDts=void 0;var hce=qu(ti()),mce=qu(Ve()),bh=qu(ir()),gce=qu(yo()),yce=qu(xp()),B1=qu(H1());function vce(t,e){var r=[];return r=r.concat('import type { CstNode, ICstVisitor, IToken } from "chevrotain";'),r=r.concat((0,hce.default)((0,bh.default)(t,function(n){return _ce(n)}))),e.includeVisitorInterface&&(r=r.concat(Cce(e.visitorInterfaceName,t))),r.join(`

`)+`
`}Ou.genDts=vce;function _ce(t){var e=Tce(t),r=Rce(t);return[e,r]}function Tce(t){var e=V1(t.name),r=rb(t.name);return"export interface ".concat(e,` extends CstNode {
  name: "`).concat(t.name,`";
  children: `).concat(r,`;
}`)}function Rce(t){var e=rb(t.name);return"export type ".concat(e,` = {
  `).concat((0,bh.default)(t.properties,function(r){return bce(r)}).join(`
  `),`
};`)}function bce(t){var e=Ace(t.type);return"".concat(t.name).concat(t.optional?"?":"",": ").concat(e,"[];")}function Cce(t,e){return"export interface ".concat(t,`<IN, OUT> extends ICstVisitor<IN, OUT> {
  `).concat((0,bh.default)(e,function(r){return Pce(r)}).join(`
  `),`
}`)}function Pce(t){var e=rb(t.name);return"".concat(t.name,"(children: ").concat(e,", param?: IN): OUT;")}function Ace(t){if((0,mce.default)(t)){var e=(0,yce.default)((0,bh.default)(t,function(n){return K1(n)})),r=(0,gce.default)(e,function(n,i){return n+" | "+i});return"("+r+")"}else return K1(t)}function K1(t){return t.kind==="token"?"IToken":V1(t.name)}function V1(t){return(0,B1.default)(t)+"CstNode"}function rb(t){return(0,B1.default)(t)+"CstChildren"}});var Y1=h(Iu=>{"use strict";var Ch=Iu&&Iu.__assign||function(){return Ch=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++){e=arguments[r];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},Ch.apply(this,arguments)};Object.defineProperty(Iu,"__esModule",{value:!0});Iu.generateCstDts=void 0;var Sce=A1(),Ece=z1(),kce={includeVisitorInterface:!0,visitorInterfaceName:"ICstNodeVisitor"};function Nce(t,e){var r=Ch(Ch({},kce),e),n=(0,Sce.buildModel)(t);return(0,Ece.genDts)(n,r)}Iu.generateCstDts=Nce});var J1=h(Ph=>{"use strict";Object.defineProperty(Ph,"__esModule",{value:!0});Ph.createSyntaxDiagramsCode=void 0;var X1=pT();function wce(t,e){var r=e===void 0?{}:e,n=r.resourceBase,i=n===void 0?"https://unpkg.com/chevrotain@".concat(X1.VERSION,"/diagrams/"):n,o=r.css,a=o===void 0?"https://unpkg.com/chevrotain@".concat(X1.VERSION,"/diagrams/diagrams.css"):o,s=`
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
`),y=`
<script>
    var diagramsDiv = document.getElementById("diagrams");
    main.drawDiagramsFromSerializedGrammar(serializedGrammar, diagramsDiv);
<\/script>
`;return s+u+d+p+m+y}Ph.createSyntaxDiagramsCode=wce});var za=h(V=>{"use strict";Object.defineProperty(V,"__esModule",{value:!0});V.Parser=V.createSyntaxDiagramsCode=V.clearCache=V.generateCstDts=V.GAstVisitor=V.serializeProduction=V.serializeGrammar=V.Terminal=V.Rule=V.RepetitionWithSeparator=V.RepetitionMandatoryWithSeparator=V.RepetitionMandatory=V.Repetition=V.Option=V.NonTerminal=V.Alternative=V.Alternation=V.defaultLexerErrorProvider=V.NoViableAltException=V.NotAllInputParsedException=V.MismatchedTokenException=V.isRecognitionException=V.EarlyExitException=V.defaultParserErrorProvider=V.LLkLookaheadStrategy=V.getLookaheadPaths=V.tokenName=V.tokenMatcher=V.tokenLabel=V.EOF=V.createTokenInstance=V.createToken=V.LexerDefinitionErrorType=V.Lexer=V.EMPTY_ALT=V.ParserDefinitionErrorType=V.EmbeddedActionsParser=V.CstParser=V.VERSION=void 0;var Dce=pT();Object.defineProperty(V,"VERSION",{enumerable:!0,get:function(){return Dce.VERSION}});var Ah=nn();Object.defineProperty(V,"CstParser",{enumerable:!0,get:function(){return Ah.CstParser}});Object.defineProperty(V,"EmbeddedActionsParser",{enumerable:!0,get:function(){return Ah.EmbeddedActionsParser}});Object.defineProperty(V,"ParserDefinitionErrorType",{enumerable:!0,get:function(){return Ah.ParserDefinitionErrorType}});Object.defineProperty(V,"EMPTY_ALT",{enumerable:!0,get:function(){return Ah.EMPTY_ALT}});var Q1=ul();Object.defineProperty(V,"Lexer",{enumerable:!0,get:function(){return Q1.Lexer}});Object.defineProperty(V,"LexerDefinitionErrorType",{enumerable:!0,get:function(){return Q1.LexerDefinitionErrorType}});var xu=ja();Object.defineProperty(V,"createToken",{enumerable:!0,get:function(){return xu.createToken}});Object.defineProperty(V,"createTokenInstance",{enumerable:!0,get:function(){return xu.createTokenInstance}});Object.defineProperty(V,"EOF",{enumerable:!0,get:function(){return xu.EOF}});Object.defineProperty(V,"tokenLabel",{enumerable:!0,get:function(){return xu.tokenLabel}});Object.defineProperty(V,"tokenMatcher",{enumerable:!0,get:function(){return xu.tokenMatcher}});Object.defineProperty(V,"tokenName",{enumerable:!0,get:function(){return xu.tokenName}});var Oce=gu();Object.defineProperty(V,"getLookaheadPaths",{enumerable:!0,get:function(){return Oce.getLookaheadPaths}});var qce=BR();Object.defineProperty(V,"LLkLookaheadStrategy",{enumerable:!0,get:function(){return qce.LLkLookaheadStrategy}});var Ice=mu();Object.defineProperty(V,"defaultParserErrorProvider",{enumerable:!0,get:function(){return Ice.defaultParserErrorProvider}});var Al=vu();Object.defineProperty(V,"EarlyExitException",{enumerable:!0,get:function(){return Al.EarlyExitException}});Object.defineProperty(V,"isRecognitionException",{enumerable:!0,get:function(){return Al.isRecognitionException}});Object.defineProperty(V,"MismatchedTokenException",{enumerable:!0,get:function(){return Al.MismatchedTokenException}});Object.defineProperty(V,"NotAllInputParsedException",{enumerable:!0,get:function(){return Al.NotAllInputParsedException}});Object.defineProperty(V,"NoViableAltException",{enumerable:!0,get:function(){return Al.NoViableAltException}});var xce=TR();Object.defineProperty(V,"defaultLexerErrorProvider",{enumerable:!0,get:function(){return xce.defaultLexerErrorProvider}});var ji=wt();Object.defineProperty(V,"Alternation",{enumerable:!0,get:function(){return ji.Alternation}});Object.defineProperty(V,"Alternative",{enumerable:!0,get:function(){return ji.Alternative}});Object.defineProperty(V,"NonTerminal",{enumerable:!0,get:function(){return ji.NonTerminal}});Object.defineProperty(V,"Option",{enumerable:!0,get:function(){return ji.Option}});Object.defineProperty(V,"Repetition",{enumerable:!0,get:function(){return ji.Repetition}});Object.defineProperty(V,"RepetitionMandatory",{enumerable:!0,get:function(){return ji.RepetitionMandatory}});Object.defineProperty(V,"RepetitionMandatoryWithSeparator",{enumerable:!0,get:function(){return ji.RepetitionMandatoryWithSeparator}});Object.defineProperty(V,"RepetitionWithSeparator",{enumerable:!0,get:function(){return ji.RepetitionWithSeparator}});Object.defineProperty(V,"Rule",{enumerable:!0,get:function(){return ji.Rule}});Object.defineProperty(V,"Terminal",{enumerable:!0,get:function(){return ji.Terminal}});var nb=wt();Object.defineProperty(V,"serializeGrammar",{enumerable:!0,get:function(){return nb.serializeGrammar}});Object.defineProperty(V,"serializeProduction",{enumerable:!0,get:function(){return nb.serializeProduction}});Object.defineProperty(V,"GAstVisitor",{enumerable:!0,get:function(){return nb.GAstVisitor}});var Lce=Y1();Object.defineProperty(V,"generateCstDts",{enumerable:!0,get:function(){return Lce.generateCstDts}});function Mce(){console.warn(`The clearCache function was 'soft' removed from the Chevrotain API.
	 It performs no action other than printing this message.
	 Please avoid using it as it will be completely removed in the future`)}V.clearCache=Mce;var $ce=J1();Object.defineProperty(V,"createSyntaxDiagramsCode",{enumerable:!0,get:function(){return $ce.createSyntaxDiagramsCode}});var Fce=function(){function t(){throw new Error(`The Parser class has been deprecated, use CstParser or EmbeddedActionsParser instead.	
See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_7-0-0`)}return t}();V.Parser=Fce});var i$=h(oe=>{"use strict";var Z1=oe&&oe.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(oe,"__esModule",{value:!0});oe.createATN=oe.RuleTransition=oe.EpsilonTransition=oe.AtomTransition=oe.AbstractTransition=oe.ATN_LOOP_END=oe.ATN_PLUS_LOOP_BACK=oe.ATN_STAR_LOOP_ENTRY=oe.ATN_STAR_LOOP_BACK=oe.ATN_BLOCK_END=oe.ATN_RULE_STOP=oe.ATN_TOKEN_START=oe.ATN_STAR_BLOCK_START=oe.ATN_PLUS_BLOCK_START=oe.ATN_RULE_START=oe.ATN_BASIC=oe.ATN_INVALID_TYPE=oe.buildATNKey=void 0;var e$=Z1(ir()),jce=Z1(sl()),on=za();function El(t,e,r){return`${t.name}_${e}_${r}`}oe.buildATNKey=El;oe.ATN_INVALID_TYPE=0;oe.ATN_BASIC=1;oe.ATN_RULE_START=2;oe.ATN_PLUS_BLOCK_START=4;oe.ATN_STAR_BLOCK_START=5;oe.ATN_TOKEN_START=6;oe.ATN_RULE_STOP=7;oe.ATN_BLOCK_END=8;oe.ATN_STAR_LOOP_BACK=9;oe.ATN_STAR_LOOP_ENTRY=10;oe.ATN_PLUS_LOOP_BACK=11;oe.ATN_LOOP_END=12;var Lu=class{constructor(e){this.target=e}isEpsilon(){return!1}};oe.AbstractTransition=Lu;var Sh=class extends Lu{constructor(e,r){super(e),this.tokenType=r}};oe.AtomTransition=Sh;var Eh=class extends Lu{constructor(e){super(e)}isEpsilon(){return!0}};oe.EpsilonTransition=Eh;var Sl=class extends Lu{constructor(e,r,n){super(e),this.rule=r,this.followState=n}isEpsilon(){return!0}};oe.RuleTransition=Sl;function Uce(t){let e={decisionMap:{},decisionStates:[],ruleToStartState:new Map,ruleToStopState:new Map,states:[]};Gce(e,t);let r=t.length;for(let n=0;n<r;n++){let i=t[n],o=Ya(e,i,i);o!==void 0&&Zce(e,i,o)}return e}oe.createATN=Uce;function Gce(t,e){let r=e.length;for(let n=0;n<r;n++){let i=e[n],o=sr(t,i,void 0,{type:oe.ATN_RULE_START}),a=sr(t,i,void 0,{type:oe.ATN_RULE_STOP});o.stop=a,t.ruleToStartState.set(i,o),t.ruleToStopState.set(i,a)}}function t$(t,e,r){return r instanceof on.Terminal?ib(t,e,r.terminalType,r):r instanceof on.NonTerminal?Qce(t,e,r):r instanceof on.Alternation?Vce(t,e,r):r instanceof on.Option?zce(t,e,r):r instanceof on.Repetition?Wce(t,e,r):r instanceof on.RepetitionWithSeparator?Hce(t,e,r):r instanceof on.RepetitionMandatory?Kce(t,e,r):r instanceof on.RepetitionMandatoryWithSeparator?Bce(t,e,r):Ya(t,e,r)}function Wce(t,e,r){let n=sr(t,e,r,{type:oe.ATN_STAR_BLOCK_START});ua(t,n);let i=Mu(t,e,n,r,Ya(t,e,r));return n$(t,e,r,i)}function Hce(t,e,r){let n=sr(t,e,r,{type:oe.ATN_STAR_BLOCK_START});ua(t,n);let i=Mu(t,e,n,r,Ya(t,e,r)),o=ib(t,e,r.separator,r);return n$(t,e,r,i,o)}function Kce(t,e,r){let n=sr(t,e,r,{type:oe.ATN_PLUS_BLOCK_START});ua(t,n);let i=Mu(t,e,n,r,Ya(t,e,r));return r$(t,e,r,i)}function Bce(t,e,r){let n=sr(t,e,r,{type:oe.ATN_PLUS_BLOCK_START});ua(t,n);let i=Mu(t,e,n,r,Ya(t,e,r)),o=ib(t,e,r.separator,r);return r$(t,e,r,i,o)}function Vce(t,e,r){let n=sr(t,e,r,{type:oe.ATN_BASIC});ua(t,n);let i=(0,e$.default)(r.definition,a=>t$(t,e,a));return Mu(t,e,n,r,...i)}function zce(t,e,r){let n=sr(t,e,r,{type:oe.ATN_BASIC});ua(t,n);let i=Mu(t,e,n,r,Ya(t,e,r));return Yce(t,e,r,i)}function Ya(t,e,r){let n=(0,jce.default)((0,e$.default)(r.definition,i=>t$(t,e,i)),i=>i!==void 0);return n.length===1?n[0]:n.length===0?void 0:Jce(t,n)}function r$(t,e,r,n,i){let o=n.left,a=n.right,s=sr(t,e,r,{type:oe.ATN_PLUS_LOOP_BACK});ua(t,s);let u=sr(t,e,r,{type:oe.ATN_LOOP_END});return o.loopback=s,u.loopback=s,t.decisionMap[El(e,i?"RepetitionMandatoryWithSeparator":"RepetitionMandatory",r.idx)]=s,Wt(a,s),i===void 0?(Wt(s,o),Wt(s,u)):(Wt(s,u),Wt(s,i.left),Wt(i.right,o)),{left:o,right:u}}function n$(t,e,r,n,i){let o=n.left,a=n.right,s=sr(t,e,r,{type:oe.ATN_STAR_LOOP_ENTRY});ua(t,s);let u=sr(t,e,r,{type:oe.ATN_LOOP_END}),d=sr(t,e,r,{type:oe.ATN_STAR_LOOP_BACK});return s.loopback=d,u.loopback=d,Wt(s,o),Wt(s,u),Wt(a,d),i!==void 0?(Wt(d,u),Wt(d,i.left),Wt(i.right,o)):Wt(d,s),t.decisionMap[El(e,i?"RepetitionWithSeparator":"Repetition",r.idx)]=s,{left:s,right:u}}function Yce(t,e,r,n){let i=n.left,o=n.right;return Wt(i,o),t.decisionMap[El(e,"Option",r.idx)]=i,n}function ua(t,e){return t.decisionStates.push(e),e.decision=t.decisionStates.length-1,e.decision}function Mu(t,e,r,n,...i){let o=sr(t,e,n,{type:oe.ATN_BLOCK_END,start:r});r.end=o;for(let s of i)s!==void 0?(Wt(r,s.left),Wt(s.right,o)):Wt(r,o);let a={left:r,right:o};return t.decisionMap[El(e,Xce(n),n.idx)]=r,a}function Xce(t){if(t instanceof on.Alternation)return"Alternation";if(t instanceof on.Option)return"Option";if(t instanceof on.Repetition)return"Repetition";if(t instanceof on.RepetitionWithSeparator)return"RepetitionWithSeparator";if(t instanceof on.RepetitionMandatory)return"RepetitionMandatory";if(t instanceof on.RepetitionMandatoryWithSeparator)return"RepetitionMandatoryWithSeparator";throw new Error("Invalid production type encountered")}function Jce(t,e){let r=e.length;for(let o=0;o<r-1;o++){let a=e[o],s;a.left.transitions.length===1&&(s=a.left.transitions[0]);let u=s instanceof Sl,d=s,p=e[o+1].left;a.left.type===oe.ATN_BASIC&&a.right.type===oe.ATN_BASIC&&s!==void 0&&(u&&d.followState===a.right||s.target===a.right)?(u?d.followState=p:s.target=p,ele(t,a.right)):Wt(a.right,p)}let n=e[0],i=e[r-1];return{left:n.left,right:i.right}}function ib(t,e,r,n){let i=sr(t,e,n,{type:oe.ATN_BASIC}),o=sr(t,e,n,{type:oe.ATN_BASIC});return ob(i,new Sh(o,r)),{left:i,right:o}}function Qce(t,e,r){let n=r.referencedRule,i=t.ruleToStartState.get(n),o=sr(t,e,r,{type:oe.ATN_BASIC}),a=sr(t,e,r,{type:oe.ATN_BASIC}),s=new Sl(i,n,a);return ob(o,s),{left:o,right:a}}function Zce(t,e,r){let n=t.ruleToStartState.get(e);Wt(n,r.left);let i=t.ruleToStopState.get(e);return Wt(r.right,i),{left:n,right:i}}function Wt(t,e){let r=new Eh(e);ob(t,r)}function sr(t,e,r,n){let i=Object.assign({atn:t,production:r,epsilonOnlyTransitions:!1,rule:e,transitions:[],nextTokenWithinRule:[],stateNumber:t.states.length},n);return t.states.push(i),i}function ob(t,e){t.transitions.length===0&&(t.epsilonOnlyTransitions=e.isEpsilon()),t.transitions.push(e)}function ele(t,e){t.states.splice(t.states.indexOf(e),1)}});var a$=h(Ui=>{"use strict";var tle=Ui&&Ui.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(Ui,"__esModule",{value:!0});Ui.getATNConfigKey=Ui.ATNConfigSet=Ui.DFA_ERROR=void 0;var rle=tle(ir());Ui.DFA_ERROR={};var ab=class{constructor(){this.map={},this.configs=[]}get size(){return this.configs.length}finalize(){this.map={}}add(e){let r=o$(e);r in this.map||(this.map[r]=this.configs.length,this.configs.push(e))}get elements(){return this.configs}get alts(){return(0,rle.default)(this.configs,e=>e.alt)}get key(){let e="";for(let r in this.map)e+=r+":";return e}};Ui.ATNConfigSet=ab;function o$(t,e=!0){return`${e?`a${t.alt}`:""}s${t.state.stateNumber}:${t.stack.map(r=>r.stateNumber.toString()).join("_")}`}Ui.getATNConfigKey=o$});var u$=h((T0e,s$)=>{var nle=tu();function ile(t,e,r){for(var n=-1,i=t.length;++n<i;){var o=t[n],a=e(o);if(a!=null&&(s===void 0?a===a&&!nle(a):r(a,s)))var s=a,u=o}return u}s$.exports=ile});var l$=h((R0e,c$)=>{function ole(t,e){return t<e}c$.exports=ole});var f$=h((b0e,d$)=>{var ale=u$(),sle=l$(),ule=xa();function cle(t){return t&&t.length?ale(t,ule,sle):void 0}d$.exports=cle});var h$=h((C0e,p$)=>{var lle=Dn(),dle=tR();function fle(t,e){return t&&t.length?dle(t,lle(e,2)):[]}p$.exports=fle});var R$=h($u=>{"use strict";var la=$u&&$u.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty($u,"__esModule",{value:!0});$u.LLStarLookaheadStrategy=void 0;var gn=za(),oi=i$(),ca=a$(),ple=la(f$()),hle=la(Zp()),mle=la(h$()),kl=la(ir()),gle=la(ti()),sb=la(or()),yle=la(dn()),m$=la(yo());function vle(t,e){let r={};return n=>{let i=n.toString(),o=r[i];return o!==void 0||(o={atnStartState:t,decision:e,states:{}},r[i]=o),o}}var kh=class{constructor(){this.predicates=[]}is(e){return e>=this.predicates.length||this.predicates[e]}set(e,r){this.predicates[e]=r}toString(){let e="",r=this.predicates.length;for(let n=0;n<r;n++)e+=this.predicates[n]===!0?"1":"0";return e}},g$=new kh,cb=class extends gn.LLkLookaheadStrategy{constructor(e){var r;super(),this.logging=(r=e?.logging)!==null&&r!==void 0?r:n=>console.log(n)}initialize(e){this.atn=(0,oi.createATN)(e.rules),this.dfas=_le(this.atn)}validateAmbiguousAlternationAlternatives(){return[]}validateEmptyOrAlternatives(){return[]}buildLookaheadForAlternation(e){let{prodOccurrence:r,rule:n,hasPredicates:i,dynamicTokensEnabled:o}=e,a=this.dfas,s=this.logging,u=(0,oi.buildATNKey)(n,"Alternation",r),p=this.atn.decisionMap[u].decision,m=(0,kl.default)((0,gn.getLookaheadPaths)({maxLookahead:1,occurrence:r,prodType:"Alternation",rule:n}),y=>(0,kl.default)(y,S=>S[0]));if(y$(m,!1)&&!o){let y=(0,m$.default)(m,(S,_,w)=>((0,sb.default)(_,k=>{k&&(S[k.tokenTypeIdx]=w,(0,sb.default)(k.categoryMatches,N=>{S[N]=w}))}),S),{});return i?function(S){var _;let w=this.LA(1),k=y[w.tokenTypeIdx];if(S!==void 0&&k!==void 0){let N=(_=S[k])===null||_===void 0?void 0:_.GATE;if(N!==void 0&&N.call(this)===!1)return}return k}:function(){let S=this.LA(1);return y[S.tokenTypeIdx]}}else return i?function(y){let S=new kh,_=y===void 0?0:y.length;for(let k=0;k<_;k++){let N=y?.[k].GATE;S.set(k,N===void 0||N.call(this))}let w=ub.call(this,a,p,S,s);return typeof w=="number"?w:void 0}:function(){let y=ub.call(this,a,p,g$,s);return typeof y=="number"?y:void 0}}buildLookaheadForOptional(e){let{prodOccurrence:r,rule:n,prodType:i,dynamicTokensEnabled:o}=e,a=this.dfas,s=this.logging,u=(0,oi.buildATNKey)(n,i,r),p=this.atn.decisionMap[u].decision,m=(0,kl.default)((0,gn.getLookaheadPaths)({maxLookahead:1,occurrence:r,prodType:i,rule:n}),y=>(0,kl.default)(y,S=>S[0]));if(y$(m)&&m[0][0]&&!o){let y=m[0],S=(0,gle.default)(y);if(S.length===1&&(0,yle.default)(S[0].categoryMatches)){let w=S[0].tokenTypeIdx;return function(){return this.LA(1).tokenTypeIdx===w}}else{let _=(0,m$.default)(S,(w,k)=>(k!==void 0&&(w[k.tokenTypeIdx]=!0,(0,sb.default)(k.categoryMatches,N=>{w[N]=!0})),w),{});return function(){let w=this.LA(1);return _[w.tokenTypeIdx]===!0}}}return function(){let y=ub.call(this,a,p,g$,s);return typeof y=="object"?!1:y===0}}};$u.LLStarLookaheadStrategy=cb;function y$(t,e=!0){let r=new Set;for(let n of t){let i=new Set;for(let o of n){if(o===void 0){if(e)break;return!1}let a=[o.tokenTypeIdx].concat(o.categoryMatches);for(let s of a)if(r.has(s)){if(!i.has(s))return!1}else r.add(s),i.add(s)}}return!0}function _le(t){let e=t.decisionStates.length,r=Array(e);for(let n=0;n<e;n++)r[n]=vle(t.decisionStates[n],n);return r}function ub(t,e,r,n){let i=t[e](r),o=i.start;if(o===void 0){let s=wle(i.atnStartState);o=T$(i,_$(s)),i.start=o}return Tle.apply(this,[i,o,r,n])}function Tle(t,e,r,n){let i=e,o=1,a=[],s=this.LA(o++);for(;;){let u=Sle(i,s);if(u===void 0&&(u=Rle.apply(this,[t,i,s,o,r,n])),u===ca.DFA_ERROR)return Ale(a,i,s);if(u.isAcceptState===!0)return u.prediction;i=u,a.push(s),s=this.LA(o++)}}function Rle(t,e,r,n,i,o){let a=Ele(e.configs,r,i);if(a.size===0)return v$(t,e,r,ca.DFA_ERROR),ca.DFA_ERROR;let s=_$(a),u=Nle(a,i);if(u!==void 0)s.isAcceptState=!0,s.prediction=u,s.configs.uniqueAlt=u;else if(Ile(a)){let d=(0,ple.default)(a.alts);s.isAcceptState=!0,s.prediction=d,s.configs.uniqueAlt=d,ble.apply(this,[t,n,a.alts,o])}return s=v$(t,e,r,s),s}function ble(t,e,r,n){let i=[];for(let d=1;d<=e;d++)i.push(this.LA(d).tokenType);let o=t.atnStartState,a=o.rule,s=o.production,u=Cle({topLevelRule:a,ambiguityIndices:r,production:s,prefixPath:i});n(u)}function Cle(t){let e=(0,kl.default)(t.prefixPath,i=>(0,gn.tokenLabel)(i)).join(", "),r=t.production.idx===0?"":t.production.idx,n=`Ambiguous Alternatives Detected: <${t.ambiguityIndices.join(", ")}> in <${Ple(t.production)}${r}> inside <${t.topLevelRule.name}> Rule,
<${e}> may appears as a prefix path in all these alternatives.
`;return n=n+`See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#AMBIGUOUS_ALTERNATIVES
For Further details.`,n}function Ple(t){if(t instanceof gn.NonTerminal)return"SUBRULE";if(t instanceof gn.Option)return"OPTION";if(t instanceof gn.Alternation)return"OR";if(t instanceof gn.RepetitionMandatory)return"AT_LEAST_ONE";if(t instanceof gn.RepetitionMandatoryWithSeparator)return"AT_LEAST_ONE_SEP";if(t instanceof gn.RepetitionWithSeparator)return"MANY_SEP";if(t instanceof gn.Repetition)return"MANY";if(t instanceof gn.Terminal)return"CONSUME";throw Error("non exhaustive match")}function Ale(t,e,r){let n=(0,hle.default)(e.configs.elements,o=>o.state.transitions),i=(0,mle.default)(n.filter(o=>o instanceof oi.AtomTransition).map(o=>o.tokenType),o=>o.tokenTypeIdx);return{actualToken:r,possibleTokenTypes:i,tokenPath:t}}function Sle(t,e){return t.edges[e.tokenTypeIdx]}function Ele(t,e,r){let n=new ca.ATNConfigSet,i=[];for(let a of t.elements){if(r.is(a.alt)===!1)continue;if(a.state.type===oi.ATN_RULE_STOP){i.push(a);continue}let s=a.state.transitions.length;for(let u=0;u<s;u++){let d=a.state.transitions[u],p=kle(d,e);p!==void 0&&n.add({state:p,alt:a.alt,stack:a.stack})}}let o;if(i.length===0&&n.size===1&&(o=n),o===void 0){o=new ca.ATNConfigSet;for(let a of n.elements)Nh(a,o)}if(i.length>0&&!Ole(o))for(let a of i)o.add(a);return o}function kle(t,e){if(t instanceof oi.AtomTransition&&(0,gn.tokenMatcher)(e,t.tokenType))return t.target}function Nle(t,e){let r;for(let n of t.elements)if(e.is(n.alt)===!0){if(r===void 0)r=n.alt;else if(r!==n.alt)return}return r}function _$(t){return{configs:t,edges:{},isAcceptState:!1,prediction:-1}}function v$(t,e,r,n){return n=T$(t,n),e.edges[r.tokenTypeIdx]=n,n}function T$(t,e){if(e===ca.DFA_ERROR)return e;let r=e.configs.key,n=t.states[r];return n!==void 0?n:(e.configs.finalize(),t.states[r]=e,e)}function wle(t){let e=new ca.ATNConfigSet,r=t.transitions.length;for(let n=0;n<r;n++){let o={state:t.transitions[n].target,alt:n,stack:[]};Nh(o,e)}return e}function Nh(t,e){let r=t.state;if(r.type===oi.ATN_RULE_STOP){if(t.stack.length>0){let i=[...t.stack],a={state:i.pop(),alt:t.alt,stack:i};Nh(a,e)}else e.add(t);return}r.epsilonOnlyTransitions||e.add(t);let n=r.transitions.length;for(let i=0;i<n;i++){let o=r.transitions[i],a=Dle(t,o);a!==void 0&&Nh(a,e)}}function Dle(t,e){if(e instanceof oi.EpsilonTransition)return{state:e.target,alt:t.alt,stack:t.stack};if(e instanceof oi.RuleTransition){let r=[...t.stack,e.followState];return{state:e.target,alt:t.alt,stack:r}}}function Ole(t){for(let e of t.elements)if(e.state.type===oi.ATN_RULE_STOP)return!0;return!1}function qle(t){for(let e of t.elements)if(e.state.type!==oi.ATN_RULE_STOP)return!1;return!0}function Ile(t){if(qle(t))return!0;let e=xle(t.elements);return Lle(e)&&!Mle(e)}function xle(t){let e=new Map;for(let r of t){let n=(0,ca.getATNConfigKey)(r,!1),i=e.get(n);i===void 0&&(i={},e.set(n,i)),i[r.alt]=!0}return e}function Lle(t){for(let e of Array.from(t.values()))if(Object.keys(e).length>1)return!0;return!1}function Mle(t){for(let e of Array.from(t.values()))if(Object.keys(e).length===1)return!0;return!1}});var b$=h(wh=>{"use strict";Object.defineProperty(wh,"__esModule",{value:!0});wh.LLStarLookaheadStrategy=void 0;var $le=R$();Object.defineProperty(wh,"LLStarLookaheadStrategy",{enumerable:!0,get:function(){return $le.LLStarLookaheadStrategy}})});var A$=h(xn=>{"use strict";Object.defineProperty(xn,"__esModule",{value:!0});xn.RootCstNodeImpl=xn.CompositeCstNodeImpl=xn.LeafCstNodeImpl=xn.AbstractCstNode=xn.CstNodeBuilder=void 0;var C$=Os(),Fle=Xr(),P$=pt(),lb=class{constructor(){this.nodeStack=[]}get current(){return this.nodeStack[this.nodeStack.length-1]}buildRootNode(e){return this.rootNode=new Dh(e),this.nodeStack=[this.rootNode],this.rootNode}buildCompositeNode(e){let r=new Dl;return r.feature=e,r.root=this.rootNode,this.current.children.push(r),this.nodeStack.push(r),r}buildLeafNode(e,r){let n=new wl(e.startOffset,e.image.length,(0,P$.tokenToRange)(e),e.tokenType,!1);return n.feature=r,n.root=this.rootNode,this.current.children.push(n),n}removeNode(e){let r=e.parent;if(r){let n=r.children.indexOf(e);n>=0&&r.children.splice(n,1)}}construct(e){let r=this.current;typeof e.$type=="string"&&(this.current.element=e),e.$cstNode=r;let n=this.nodeStack.pop();n?.children.length===0&&this.removeNode(n)}addHiddenTokens(e){for(let r of e){let n=new wl(r.startOffset,r.image.length,(0,P$.tokenToRange)(r),r.tokenType,!0);n.root=this.rootNode,this.addHiddenToken(this.rootNode,n)}}addHiddenToken(e,r){let{offset:n,end:i}=r;for(let o=0;o<e.children.length;o++){let a=e.children[o],{offset:s,end:u}=a;if((0,Fle.isCompositeCstNode)(a)&&n>s&&i<u){this.addHiddenToken(a,r);return}else if(i<=s){e.children.splice(o,0,r);return}}e.children.push(r)}};xn.CstNodeBuilder=lb;var Nl=class{get hidden(){return!1}get element(){var e,r;let n=typeof((e=this._element)===null||e===void 0?void 0:e.$type)=="string"?this._element:(r=this.parent)===null||r===void 0?void 0:r.element;if(!n)throw new Error("This node has no associated AST element");return n}set element(e){this._element=e}get text(){return this.root.fullText.substring(this.offset,this.end)}};xn.AbstractCstNode=Nl;var wl=class extends Nl{get offset(){return this._offset}get length(){return this._length}get end(){return this._offset+this._length}get hidden(){return this._hidden}get tokenType(){return this._tokenType}get range(){return this._range}constructor(e,r,n,i,o=!1){super(),this._hidden=o,this._offset=e,this._tokenType=i,this._length=r,this._range=n}};xn.LeafCstNodeImpl=wl;var Dl=class extends Nl{constructor(){super(...arguments),this.children=new db(this)}get offset(){var e,r;return(r=(e=this.firstNonHiddenNode)===null||e===void 0?void 0:e.offset)!==null&&r!==void 0?r:0}get length(){return this.end-this.offset}get end(){var e,r;return(r=(e=this.lastNonHiddenNode)===null||e===void 0?void 0:e.end)!==null&&r!==void 0?r:0}get range(){let e=this.firstNonHiddenNode,r=this.lastNonHiddenNode;if(e&&r){if(this._rangeCache===void 0){let{range:n}=e,{range:i}=r;this._rangeCache={start:n.start,end:i.end.line<n.start.line?n.start:i.end}}return this._rangeCache}else return{start:C$.Position.create(0,0),end:C$.Position.create(0,0)}}get firstNonHiddenNode(){for(let e of this.children)if(!e.hidden)return e;return this.children[0]}get lastNonHiddenNode(){for(let e=this.children.length-1;e>=0;e--){let r=this.children[e];if(!r.hidden)return r}return this.children[this.children.length-1]}};xn.CompositeCstNodeImpl=Dl;var db=class t extends Array{constructor(e){super(),this.parent=e,Object.setPrototypeOf(this,t.prototype)}push(...e){return this.addParents(e),super.push(...e)}unshift(...e){return this.addParents(e),super.unshift(...e)}splice(e,r,...n){return this.addParents(n),super.splice(e,r,...n)}addParents(e){for(let r of e)r.parent=this.parent}},Dh=class extends Dl{get text(){return this._text.substring(this.offset,this.end)}get fullText(){return this._text}constructor(e){super(),this._text="",this._text=e??""}};xn.RootCstNodeImpl=Dh});var xh=h(Gr=>{"use strict";Object.defineProperty(Gr,"__esModule",{value:!0});Gr.LangiumCompletionParser=Gr.LangiumParserErrorMessageProvider=Gr.LangiumParser=Gr.AbstractLangiumParser=Gr.DatatypeSymbol=void 0;var qh=za(),jle=b$(),Oh=Ke(),S$=Xt(),E$=Ye(),Ule=A$();Gr.DatatypeSymbol=Symbol("Datatype");function fb(t){return t.$type===Gr.DatatypeSymbol}var k$="\u200B",N$=t=>t.endsWith(k$)?t:t+k$,Ol=class{constructor(e){this._unorderedGroups=new Map,this.lexer=e.parser.Lexer;let r=this.lexer.definition;this.wrapper=new mb(r,e.parser.ParserConfig)}alternatives(e,r){this.wrapper.wrapOr(e,r)}optional(e,r){this.wrapper.wrapOption(e,r)}many(e,r){this.wrapper.wrapMany(e,r)}atLeastOne(e,r){this.wrapper.wrapAtLeastOne(e,r)}isRecording(){return this.wrapper.IS_RECORDING}get unorderedGroups(){return this._unorderedGroups}getRuleStack(){return this.wrapper.RULE_STACK}finalize(){this.wrapper.wrapSelfAnalysis()}};Gr.AbstractLangiumParser=Ol;var pb=class extends Ol{get current(){return this.stack[this.stack.length-1]}constructor(e){super(e),this.nodeBuilder=new Ule.CstNodeBuilder,this.stack=[],this.assignmentMap=new Map,this.linker=e.references.Linker,this.converter=e.parser.ValueConverter,this.astReflection=e.shared.AstReflection}rule(e,r){let n=e.fragment?void 0:(0,S$.isDataTypeRule)(e)?Gr.DatatypeSymbol:(0,S$.getTypeName)(e),i=this.wrapper.DEFINE_RULE(N$(e.name),this.startImplementation(n,r).bind(this));return e.entry&&(this.mainRule=i),i}parse(e){this.nodeBuilder.buildRootNode(e);let r=this.lexer.tokenize(e);this.wrapper.input=r.tokens;let n=this.mainRule.call(this.wrapper,{});return this.nodeBuilder.addHiddenTokens(r.hidden),this.unorderedGroups.clear(),{value:n,lexerErrors:r.errors,parserErrors:this.wrapper.errors}}startImplementation(e,r){return n=>{if(!this.isRecording()){let o={$type:e};this.stack.push(o),e===Gr.DatatypeSymbol&&(o.value="")}let i;try{i=r(n)}catch{i=void 0}return!this.isRecording()&&i===void 0&&(i=this.construct()),i}}consume(e,r,n){let i=this.wrapper.wrapConsume(e,r);if(!this.isRecording()&&!i.isInsertedInRecovery){let o=this.nodeBuilder.buildLeafNode(i,n),{assignment:a,isCrossRef:s}=this.getAssignment(n),u=this.current;if(a){let d=(0,Oh.isKeyword)(n)?i.image:this.converter.convert(i.image,o);this.assign(a.operator,a.feature,d,o,s)}else if(fb(u)){let d=i.image;(0,Oh.isKeyword)(n)||(d=this.converter.convert(d,o).toString()),u.value+=d}}}subrule(e,r,n,i){let o;this.isRecording()||(o=this.nodeBuilder.buildCompositeNode(n));let a=this.wrapper.wrapSubrule(e,r,i);!this.isRecording()&&o&&o.length>0&&this.performSubruleAssignment(a,n,o)}performSubruleAssignment(e,r,n){let{assignment:i,isCrossRef:o}=this.getAssignment(r);if(i)this.assign(i.operator,i.feature,e,n,o);else if(!i){let a=this.current;if(fb(a))a.value+=e.toString();else{let s=e.$type,u=this.assignWithoutOverride(e,a);s&&(u.$type=s);let d=u;this.stack.pop(),this.stack.push(d)}}}action(e,r){if(!this.isRecording()){let n=this.current;if(!n.$cstNode&&r.feature&&r.operator){n=this.construct(!1);let o=n.$cstNode.feature;this.nodeBuilder.buildCompositeNode(o)}let i={$type:e};this.stack.pop(),this.stack.push(i),r.feature&&r.operator&&this.assign(r.operator,r.feature,n,n.$cstNode,!1)}}construct(e=!0){if(this.isRecording())return;let r=this.current;return(0,E$.linkContentToContainer)(r),this.nodeBuilder.construct(r),e&&this.stack.pop(),fb(r)?this.converter.convert(r.value,r.$cstNode):(this.assignMandatoryProperties(r),r)}assignMandatoryProperties(e){let r=this.astReflection.getTypeMetaData(e.$type);for(let n of r.mandatory){let i=e[n.name];n.type==="array"&&!Array.isArray(i)?e[n.name]=[]:n.type==="boolean"&&i===void 0&&(e[n.name]=!1)}}getAssignment(e){if(!this.assignmentMap.has(e)){let r=(0,E$.getContainerOfType)(e,Oh.isAssignment);this.assignmentMap.set(e,{assignment:r,isCrossRef:r?(0,Oh.isCrossReference)(r.terminal):!1})}return this.assignmentMap.get(e)}assign(e,r,n,i,o){let a=this.current,s;switch(o&&typeof n=="string"?s=this.linker.buildReference(a,r,i,n):s=n,e){case"=":{a[r]=s;break}case"?=":{a[r]=!0;break}case"+=":Array.isArray(a[r])||(a[r]=[]),a[r].push(s)}}assignWithoutOverride(e,r){for(let[n,i]of Object.entries(r))e[n]===void 0&&(e[n]=i);return e}get definitionErrors(){return this.wrapper.definitionErrors}};Gr.LangiumParser=pb;var Ih=class{buildMismatchTokenMessage({expected:e,actual:r}){return`Expecting ${e.LABEL?"`"+e.LABEL+"`":e.name.endsWith(":KW")?`keyword '${e.name.substring(0,e.name.length-3)}'`:`token of type '${e.name}'`} but found \`${r.image}\`.`}buildNotAllInputParsedMessage({firstRedundant:e}){return`Expecting end of file but found \`${e.image}\`.`}buildNoViableAltMessage(e){return qh.defaultParserErrorProvider.buildNoViableAltMessage(e)}buildEarlyExitMessage(e){return qh.defaultParserErrorProvider.buildEarlyExitMessage(e)}};Gr.LangiumParserErrorMessageProvider=Ih;var hb=class extends Ol{constructor(){super(...arguments),this.tokens=[],this.elementStack=[],this.lastElementStack=[],this.nextTokenIndex=0,this.stackSize=0}action(){}construct(){}parse(e){this.resetState();let r=this.lexer.tokenize(e);return this.tokens=r.tokens,this.wrapper.input=[...this.tokens],this.mainRule.call(this.wrapper,{}),this.unorderedGroups.clear(),{tokens:this.tokens,elementStack:[...this.lastElementStack],tokenIndex:this.nextTokenIndex}}rule(e,r){let n=this.wrapper.DEFINE_RULE(N$(e.name),this.startImplementation(r).bind(this));return e.entry&&(this.mainRule=n),n}resetState(){this.elementStack=[],this.lastElementStack=[],this.nextTokenIndex=0,this.stackSize=0}startImplementation(e){return r=>{let n=this.keepStackSize();try{e(r)}finally{this.resetStackSize(n)}}}removeUnexpectedElements(){this.elementStack.splice(this.stackSize)}keepStackSize(){let e=this.elementStack.length;return this.stackSize=e,e}resetStackSize(e){this.removeUnexpectedElements(),this.stackSize=e}consume(e,r,n){this.wrapper.wrapConsume(e,r),this.isRecording()||(this.lastElementStack=[...this.elementStack,n],this.nextTokenIndex=this.currIdx+1)}subrule(e,r,n,i){this.before(n),this.wrapper.wrapSubrule(e,r,i),this.after(n)}before(e){this.isRecording()||this.elementStack.push(e)}after(e){if(!this.isRecording()){let r=this.elementStack.lastIndexOf(e);r>=0&&this.elementStack.splice(r)}}get currIdx(){return this.wrapper.currIdx}};Gr.LangiumCompletionParser=hb;var Gle={recoveryEnabled:!0,nodeLocationTracking:"full",skipValidations:!0,errorMessageProvider:new Ih},mb=class extends qh.EmbeddedActionsParser{constructor(e,r){let n=r&&"maxLookahead"in r;super(e,Object.assign(Object.assign(Object.assign({},Gle),{lookaheadStrategy:n?new qh.LLkLookaheadStrategy({maxLookahead:r.maxLookahead}):new jle.LLStarLookaheadStrategy}),r))}get IS_RECORDING(){return this.RECORDING_PHASE}DEFINE_RULE(e,r){return this.RULE(e,r)}wrapSelfAnalysis(){this.performSelfAnalysis()}wrapConsume(e,r){return this.consume(e,r)}wrapSubrule(e,r,n){return this.subrule(e,r,{ARGS:[n]})}wrapOr(e,r){this.or(e,r)}wrapOption(e,r){this.option(e,r)}wrapMany(e,r){this.many(e,r)}wrapAtLeastOne(e,r){this.atLeastOne(e,r)}}});var w$=h(Fu=>{"use strict";Object.defineProperty(Fu,"__esModule",{value:!0});Fu.assertUnreachable=Fu.ErrorWithLocation=void 0;var gb=class extends Error{constructor(e,r){super(e?`${r} at ${e.range.start.line}:${e.range.start.character}`:r)}};Fu.ErrorWithLocation=gb;function Wle(t){throw new Error("Error! The input value was not handled.")}Fu.assertUnreachable=Wle});var vb=h(Mh=>{"use strict";Object.defineProperty(Mh,"__esModule",{value:!0});Mh.createParser=void 0;var D$=za(),rt=Ke(),ql=w$(),Hle=tr(),O$=Xt(),q$=Yt();function Kle(t,e,r){return Ble({parser:e,tokens:r,rules:new Map,ruleNames:new Map},t),e}Mh.createParser=Kle;function Ble(t,e){let r=(0,q$.getAllReachableRules)(e,!1),n=(0,Hle.stream)(e.rules).filter(rt.isParserRule).filter(i=>r.has(i));for(let i of n){let o=Object.assign(Object.assign({},t),{consume:1,optional:1,subrule:1,many:1,or:1});o.rules.set(i.name,t.parser.rule(i,Xa(o,i.definition)))}}function Xa(t,e,r=!1){let n;if((0,rt.isKeyword)(e))n=Zle(t,e);else if((0,rt.isAction)(e))n=Vle(t,e);else if((0,rt.isAssignment)(e))n=Xa(t,e.terminal);else if((0,rt.isCrossReference)(e))n=I$(t,e);else if((0,rt.isRuleCall)(e))n=zle(t,e);else if((0,rt.isAlternatives)(e))n=Xle(t,e);else if((0,rt.isUnorderedGroup)(e))n=Jle(t,e);else if((0,rt.isGroup)(e))n=Qle(t,e);else throw new ql.ErrorWithLocation(e.$cstNode,`Unexpected element type: ${e.$type}`);return x$(t,r?void 0:Lh(e),n,e.cardinality)}function Vle(t,e){let r=(0,O$.getTypeName)(e);return()=>t.parser.action(r,e)}function zle(t,e){let r=e.rule.ref;if((0,rt.isParserRule)(r)){let n=t.subrule++,i=e.arguments.length>0?Yle(r,e.arguments):()=>({});return o=>t.parser.subrule(n,L$(t,r),e,i(o))}else if((0,rt.isTerminalRule)(r)){let n=t.consume++,i=yb(t,r.name);return()=>t.parser.consume(n,i,e)}else if(r)(0,ql.assertUnreachable)(r);else throw new ql.ErrorWithLocation(e.$cstNode,`Undefined rule type: ${e.$type}`)}function Yle(t,e){let r=e.map(n=>Eo(n.value));return n=>{let i={};for(let o=0;o<r.length;o++){let a=t.parameters[o],s=r[o];i[a.name]=s(n)}return i}}function Eo(t){if((0,rt.isDisjunction)(t)){let e=Eo(t.left),r=Eo(t.right);return n=>e(n)||r(n)}else if((0,rt.isConjunction)(t)){let e=Eo(t.left),r=Eo(t.right);return n=>e(n)&&r(n)}else if((0,rt.isNegation)(t)){let e=Eo(t.value);return r=>!e(r)}else if((0,rt.isParameterReference)(t)){let e=t.parameter.ref.name;return r=>r!==void 0&&r[e]===!0}else if((0,rt.isLiteralCondition)(t)){let e=!!t.true;return()=>e}(0,ql.assertUnreachable)(t)}function Xle(t,e){if(e.elements.length===1)return Xa(t,e.elements[0]);{let r=[];for(let i of e.elements){let o={ALT:Xa(t,i,!0)},a=Lh(i);a&&(o.GATE=Eo(a)),r.push(o)}let n=t.or++;return i=>t.parser.alternatives(n,r.map(o=>{let a={ALT:()=>o.ALT(i)},s=o.GATE;return s&&(a.GATE=()=>s(i)),a}))}}function Jle(t,e){if(e.elements.length===1)return Xa(t,e.elements[0]);let r=[];for(let s of e.elements){let u={ALT:Xa(t,s,!0)},d=Lh(s);d&&(u.GATE=Eo(d)),r.push(u)}let n=t.or++,i=(s,u)=>{let d=u.getRuleStack().join("-");return`uGroup_${s}_${d}`},o=s=>t.parser.alternatives(n,r.map((u,d)=>{let p={ALT:()=>!0},m=t.parser;p.ALT=()=>{if(u.ALT(s),!m.isRecording()){let S=i(n,m);m.unorderedGroups.get(S)||m.unorderedGroups.set(S,[]);let _=m.unorderedGroups.get(S);typeof _?.[d]>"u"&&(_[d]=!0)}};let y=u.GATE;return y?p.GATE=()=>y(s):p.GATE=()=>{let S=m.unorderedGroups.get(i(n,m));return!S?.[d]},p})),a=x$(t,Lh(e),o,"*");return s=>{a(s),t.parser.isRecording()||t.parser.unorderedGroups.delete(i(n,t.parser))}}function Qle(t,e){let r=e.elements.map(n=>Xa(t,n));return n=>r.forEach(i=>i(n))}function Lh(t){if((0,rt.isGroup)(t))return t.guardCondition}function I$(t,e,r=e.terminal){if(r)if((0,rt.isRuleCall)(r)&&(0,rt.isParserRule)(r.rule.ref)){let n=t.subrule++;return i=>t.parser.subrule(n,L$(t,r.rule.ref),e,i)}else if((0,rt.isRuleCall)(r)&&(0,rt.isTerminalRule)(r.rule.ref)){let n=t.consume++,i=yb(t,r.rule.ref.name);return()=>t.parser.consume(n,i,e)}else if((0,rt.isKeyword)(r)){let n=t.consume++,i=yb(t,r.value);return()=>t.parser.consume(n,i,e)}else throw new Error("Could not build cross reference parser");else{if(!e.type.ref)throw new Error("Could not resolve reference to type: "+e.type.$refText);let n=(0,q$.findNameAssignment)(e.type.ref),i=n?.terminal;if(!i)throw new Error("Could not find name assignment for type: "+(0,O$.getTypeName)(e.type.ref));return I$(t,e,i)}}function Zle(t,e){let r=t.consume++,n=t.tokens[e.value];if(!n)throw new Error("Could not find token for keyword: "+e.value);return()=>t.parser.consume(r,n,e)}function x$(t,e,r,n){let i=e&&Eo(e);if(!n)if(i){let o=t.or++;return a=>t.parser.alternatives(o,[{ALT:()=>r(a),GATE:()=>i(a)},{ALT:(0,D$.EMPTY_ALT)(),GATE:()=>!i(a)}])}else return r;if(n==="*"){let o=t.many++;return a=>t.parser.many(o,{DEF:()=>r(a),GATE:i?()=>i(a):void 0})}else if(n==="+"){let o=t.many++;if(i){let a=t.or++;return s=>t.parser.alternatives(a,[{ALT:()=>t.parser.atLeastOne(o,{DEF:()=>r(s)}),GATE:()=>i(s)},{ALT:(0,D$.EMPTY_ALT)(),GATE:()=>!i(s)}])}else return a=>t.parser.atLeastOne(o,{DEF:()=>r(a)})}else if(n==="?"){let o=t.optional++;return a=>t.parser.optional(o,{DEF:()=>r(a),GATE:i?()=>i(a):void 0})}else(0,ql.assertUnreachable)(n)}function L$(t,e){let r=ede(t,e),n=t.rules.get(r);if(!n)throw new Error(`Rule "${r}" not found."`);return n}function ede(t,e){if((0,rt.isParserRule)(e))return e.name;if(t.ruleNames.has(e))return t.ruleNames.get(e);{let r=e,n=r.$container,i=e.$type;for(;!(0,rt.isParserRule)(n);)((0,rt.isGroup)(n)||(0,rt.isAlternatives)(n)||(0,rt.isUnorderedGroup)(n))&&(i=n.elements.indexOf(r).toString()+":"+i),r=n,n=n.$container;return i=n.name+":"+i,t.ruleNames.set(e,i),i}}function yb(t,e){let r=t.tokens[e];if(!r)throw new Error(`Token "${e}" not found."`);return r}});var M$=h($h=>{"use strict";Object.defineProperty($h,"__esModule",{value:!0});$h.createCompletionParser=void 0;var tde=xh(),rde=vb();function nde(t){let e=t.Grammar,r=t.parser.Lexer,n=new tde.LangiumCompletionParser(t);return(0,rde.createParser)(e,n,r.definition),n.finalize(),n}$h.createCompletionParser=nde});var _b=h(ju=>{"use strict";Object.defineProperty(ju,"__esModule",{value:!0});ju.prepareLangiumParser=ju.createLangiumParser=void 0;var ide=xh(),ode=vb();function ade(t){let e=$$(t);return e.finalize(),e}ju.createLangiumParser=ade;function $$(t){let e=t.Grammar,r=t.parser.Lexer,n=new ide.LangiumParser(t);return(0,ode.createParser)(e,n,r.definition)}ju.prepareLangiumParser=$$});var bb=h(jh=>{"use strict";Object.defineProperty(jh,"__esModule",{value:!0});jh.DefaultTokenBuilder=void 0;var sde=za(),Tb=Ke(),ude=Xt(),cde=Ye(),lde=Yt(),Fh=Rs(),dde=tr(),Rb=class{buildTokens(e,r){let n=(0,dde.stream)((0,lde.getAllReachableRules)(e,!1)),i=this.buildTerminalTokens(n),o=this.buildKeywordTokens(n,i,r);return i.forEach(a=>{let s=a.PATTERN;typeof s=="object"&&s&&"test"in s&&(0,Fh.isWhitespaceRegExp)(s)?o.unshift(a):o.push(a)}),o}buildTerminalTokens(e){return e.filter(Tb.isTerminalRule).filter(r=>!r.fragment).map(r=>this.buildTerminalToken(r)).toArray()}buildTerminalToken(e){let r=(0,ude.terminalRegex)(e),n={name:e.name,PATTERN:new RegExp(r)};return e.hidden&&(n.GROUP=(0,Fh.isWhitespaceRegExp)(r)?sde.Lexer.SKIPPED:"hidden"),n}buildKeywordTokens(e,r,n){return e.filter(Tb.isParserRule).flatMap(i=>(0,cde.streamAllContents)(i).filter(Tb.isKeyword)).distinct(i=>i.value).toArray().sort((i,o)=>o.value.length-i.value.length).map(i=>this.buildKeywordToken(i,r,!!n?.caseInsensitive))}buildKeywordToken(e,r,n){return{name:e.value,PATTERN:this.buildKeywordPattern(e,n),LONGER_ALT:this.findLongerAlt(e,r)}}buildKeywordPattern(e,r){return r?new RegExp((0,Fh.getCaseInsensitivePattern)(e.value)):e.value}findLongerAlt(e,r){return r.reduce((n,i)=>{let o=i?.PATTERN;return o?.source&&(0,Fh.partialMatches)("^"+o.source+"$",e.value)&&n.push(i),n},[])}};jh.DefaultTokenBuilder=Rb});var Ab=h(ur=>{"use strict";Object.defineProperty(ur,"__esModule",{value:!0});ur.convertBoolean=ur.convertNumber=ur.convertDate=ur.convertBigint=ur.convertInt=ur.convertID=ur.convertString=ur.DefaultValueConverter=void 0;var F$=Ke(),fde=Xt(),pde=Yt(),Cb=class{convert(e,r){let n=r.feature;if((0,F$.isCrossReference)(n)&&(n=(0,pde.getCrossReferenceTerminal)(n)),(0,F$.isRuleCall)(n)){let i=n.rule.ref;if(!i)throw new Error("This cst node was not parsed by a rule.");return this.runConverter(i,e,r)}return e}runConverter(e,r,n){var i;switch(e.name.toUpperCase()){case"INT":return U$(r);case"STRING":return Pb(r);case"ID":return j$(r);case"REGEXLITERAL":return Pb(r)}switch((i=(0,fde.getRuleType)(e))===null||i===void 0?void 0:i.toLowerCase()){case"number":return H$(r);case"boolean":return K$(r);case"bigint":return G$(r);case"date":return W$(r);default:return r}}};ur.DefaultValueConverter=Cb;function Pb(t){return t.substring(1,t.length-1)}ur.convertString=Pb;function j$(t){return t.charAt(0)==="^"?t.substring(1):t}ur.convertID=j$;function U$(t){return parseInt(t)}ur.convertInt=U$;function G$(t){return BigInt(t)}ur.convertBigint=G$;function W$(t){return new Date(t)}ur.convertDate=W$;function H$(t){return Number(t)}ur.convertNumber=H$;function K$(t){return t.toLowerCase()==="true"}ur.convertBoolean=K$});var kb=h(Gh=>{"use strict";Object.defineProperty(Gh,"__esModule",{value:!0});Gh.DefaultLinker=void 0;var hde=et(),Uu=Xr(),Uh=Ye(),mde=Cn(),Sb=Vo(),Eb=class{constructor(e){this.reflection=e.shared.AstReflection,this.langiumDocuments=()=>e.shared.workspace.LangiumDocuments,this.scopeProvider=e.references.ScopeProvider,this.astNodeLocator=e.workspace.AstNodeLocator}async link(e,r=hde.CancellationToken.None){for(let n of(0,Uh.streamAst)(e.parseResult.value))await(0,mde.interruptAndCheck)(r),(0,Uh.streamReferences)(n).forEach(i=>this.doLink(i,e));e.state=Sb.DocumentState.Linked}doLink(e,r){let n=e.reference;if(n._ref===void 0)try{let i=this.getCandidate(e);if((0,Uu.isLinkingError)(i))n._ref=i;else if(n._nodeDescription=i,this.langiumDocuments().hasDocument(i.documentUri)){let o=this.loadAstNode(i);n._ref=o??this.createLinkingError(e,i)}}catch(i){n._ref=Object.assign(Object.assign({},e),{message:`An error occurred while resolving reference to '${n.$refText}': ${i}`})}r.references.push(n)}unlink(e){for(let r of e.references)delete r._ref,delete r._nodeDescription;e.references=[]}getCandidate(e){let n=this.scopeProvider.getScope(e).getElement(e.reference.$refText);return n??this.createLinkingError(e)}buildReference(e,r,n,i){let o=this,a={$refNode:n,$refText:i,get ref(){var s;if((0,Uu.isAstNode)(this._ref))return this._ref;if((0,Uu.isAstNodeDescription)(this._nodeDescription)){let u=o.loadAstNode(this._nodeDescription);this._ref=u??o.createLinkingError({reference:a,container:e,property:r},this._nodeDescription)}else if(this._ref===void 0){let u=o.getLinkedNode({reference:a,container:e,property:r});if(u.error&&(0,Uh.getDocument)(e).state<Sb.DocumentState.ComputedScopes)return;this._ref=(s=u.node)!==null&&s!==void 0?s:u.error,this._nodeDescription=u.descr}return(0,Uu.isAstNode)(this._ref)?this._ref:void 0},get $nodeDescription(){return this._nodeDescription},get error(){return(0,Uu.isLinkingError)(this._ref)?this._ref:void 0}};return a}getLinkedNode(e){try{let r=this.getCandidate(e);if((0,Uu.isLinkingError)(r))return{error:r};let n=this.loadAstNode(r);return n?{node:n,descr:r}:{descr:r,error:this.createLinkingError(e,r)}}catch(r){return{error:Object.assign(Object.assign({},e),{message:`An error occurred while resolving reference to '${e.reference.$refText}': ${r}`})}}}loadAstNode(e){if(e.node)return e.node;let r=this.langiumDocuments().getOrCreateDocument(e.documentUri);return this.astNodeLocator.getAstNode(r.parseResult.value,e.path)}createLinkingError(e,r){let n=(0,Uh.getDocument)(e.container);n.state<Sb.DocumentState.ComputedScopes&&console.warn(`Attempted reference resolution before document reached ComputedScopes state (${n.uri}).`);let i=this.reflection.getReferenceType(e);return Object.assign(Object.assign({},e),{message:`Could not resolve reference to ${i} named '${e.reference.$refText}'.`,targetDescription:r})}};Gh.DefaultLinker=Eb});var Db=h(Wh=>{"use strict";Object.defineProperty(Wh,"__esModule",{value:!0});Wh.DefaultJsonSerializer=void 0;var Nb=Xr();function B$(t){return typeof t=="object"&&!!t&&("$ref"in t||"$error"in t)}var wb=class{constructor(e){this.ignoreProperties=new Set(["$container","$containerProperty","$containerIndex","$document","$cstNode"]),this.astNodeLocator=e.workspace.AstNodeLocator,this.nameProvider=e.references.NameProvider}serialize(e,r){return JSON.stringify(e,(n,i)=>this.replacer(n,i,r?.refText),r?.space)}deserialize(e){let r=JSON.parse(e);return this.linkNode(r,r),r}replacer(e,r,n){var i,o;if(!this.ignoreProperties.has(e)){if((0,Nb.isReference)(r)){let a=r.ref,s=n?r.$refText:void 0;return a?{$refText:s,$ref:"#"+(a&&this.astNodeLocator.getAstNodePath(a))}:{$refText:s,$error:(o=(i=r.error)===null||i===void 0?void 0:i.message)!==null&&o!==void 0?o:"Could not resolve reference"}}return r}}linkNode(e,r,n,i,o){for(let[s,u]of Object.entries(e))if(Array.isArray(u))for(let d=0;d<u.length;d++){let p=u[d];B$(p)?u[d]=this.reviveReference(e,s,r,p):(0,Nb.isAstNode)(p)&&this.linkNode(p,r,e,s,d)}else B$(u)?e[s]=this.reviveReference(e,s,r,u):(0,Nb.isAstNode)(u)&&this.linkNode(u,r,e,s);let a=e;a.$container=n,a.$containerProperty=i,a.$containerIndex=o}reviveReference(e,r,n,i){let o=i.$refText;if(i.$ref){let a=this.getRefNode(n,i.$ref);return o||(o=this.nameProvider.getName(a)),{$refText:o??"",ref:a}}else if(i.$error){let a={$refText:o??""};return a.error={container:e,property:r,message:i.$error,reference:a},a}else return}getRefNode(e,r){return this.astNodeLocator.getAstNode(e,r.substring(1))}};Wh.DefaultJsonSerializer=wb});var qb=h(Hh=>{"use strict";Object.defineProperty(Hh,"__esModule",{value:!0});Hh.DefaultServiceRegistry=void 0;var gde=to(),Ob=class{register(e){if(!this.singleton&&!this.map){this.singleton=e;return}if(!this.map&&(this.map={},this.singleton)){for(let r of this.singleton.LanguageMetaData.fileExtensions)this.map[r]=this.singleton;this.singleton=void 0}for(let r of e.LanguageMetaData.fileExtensions)this.map[r]!==void 0&&this.map[r]!==e&&console.warn(`The file extension ${r} is used by multiple languages. It is now assigned to '${e.LanguageMetaData.languageId}'.`),this.map[r]=e}getServices(e){if(this.singleton!==void 0)return this.singleton;if(this.map===void 0)throw new Error("The service registry is empty. Use `register` to register the services of a language.");let r=gde.Utils.extname(e),n=this.map[r];if(!n)throw new Error(`The service registry contains no services for the extension '${r}'.`);return n}get all(){return this.singleton!==void 0?[this.singleton]:this.map!==void 0?Object.values(this.map):[]}};Hh.DefaultServiceRegistry=Ob});var xb=h(Kh=>{"use strict";Object.defineProperty(Kh,"__esModule",{value:!0});Kh.ValidationRegistry=void 0;var yde=cn(),vde=Cn(),Ib=class{constructor(e){this.validationChecks=new yde.MultiMap,this.reflection=e.shared.AstReflection}register(e,r=this){for(let[n,i]of Object.entries(e)){let o=i;if(Array.isArray(o))for(let a of o)this.doRegister(n,this.wrapValidationException(a,r));else typeof o=="function"&&this.doRegister(n,this.wrapValidationException(o,r))}}wrapValidationException(e,r){return async(n,i,o)=>{try{await e.call(r,n,i,o)}catch(a){if((0,vde.isOperationCancelled)(a))throw a;console.error("An error occurred during validation:",a);let s=a instanceof Error?a.message:String(a);a instanceof Error&&a.stack&&console.error(a.stack),i("error","An error occurred during validation: "+s,{node:n})}}}doRegister(e,r){for(let n of this.reflection.getAllTypes())this.reflection.isSubtype(n,e)&&this.validationChecks.add(n,r)}getChecks(e){return this.validationChecks.get(e)}};Kh.ValidationRegistry=Ib});var $b=h(Gu=>{"use strict";Object.defineProperty(Gu,"__esModule",{value:!0});Gu.DefaultReferenceDescriptionProvider=Gu.DefaultAstNodeDescriptionProvider=void 0;var _de=et(),Tde=Xr(),Bh=Ye(),Rde=pt(),bde=Cn(),Cde=lo(),Lb=class{constructor(e){this.astNodeLocator=e.workspace.AstNodeLocator}createDescription(e,r,n=(0,Bh.getDocument)(e)){return{node:e,name:r,type:e.$type,documentUri:n.uri,path:this.astNodeLocator.getAstNodePath(e)}}};Gu.DefaultAstNodeDescriptionProvider=Lb;var Mb=class{constructor(e){this.nodeLocator=e.workspace.AstNodeLocator}async createDescriptions(e,r=_de.CancellationToken.None){let n=[],i=e.parseResult.value;for(let o of(0,Bh.streamAst)(i))await(0,bde.interruptAndCheck)(r),(0,Bh.streamReferences)(o).filter(a=>!(0,Tde.isLinkingError)(a)).forEach(a=>{let s=this.createDescription(a);s&&n.push(s)});return n}createDescription(e){let r=e.reference.$nodeDescription,n=e.reference.$refNode;if(!r||!n)return;let i=(0,Bh.getDocument)(e.container).uri;return{sourceUri:i,sourcePath:this.nodeLocator.getAstNodePath(e.container),targetUri:r.documentUri,targetPath:r.path,segment:(0,Rde.toDocumentSegment)(n),local:(0,Cde.equalURI)(r.documentUri,i)}}};Gu.DefaultReferenceDescriptionProvider=Mb});var V$=h(Vh=>{"use strict";Object.defineProperty(Vh,"__esModule",{value:!0});Vh.DefaultAstNodeLocator=void 0;var Fb=class{constructor(){this.segmentSeparator="/",this.indexSeparator="@"}getAstNodePath(e){if(e.$container){let r=this.getAstNodePath(e.$container),n=this.getPathSegment(e);return r+this.segmentSeparator+n}return""}getPathSegment({$containerProperty:e,$containerIndex:r}){if(!e)throw new Error("Missing '$containerProperty' in AST node.");return r!==void 0?e+this.indexSeparator+r:e}getAstNode(e,r){return r.split(this.segmentSeparator).reduce((i,o)=>{if(!i||o.length===0)return i;let a=o.indexOf(this.indexSeparator);if(a>0){let s=o.substring(0,a),u=parseInt(o.substring(a+1)),d=i[s];return d?.[u]}return i[o]},e)}};Vh.DefaultAstNodeLocator=Fb});var jb=h((j0e,z$)=>{"use strict";z$.exports=co()});var Et=h(Wr=>{"use strict";Object.defineProperty(Wr,"__esModule",{value:!0});Wr.ProtocolNotificationType=Wr.ProtocolNotificationType0=Wr.ProtocolRequestType=Wr.ProtocolRequestType0=Wr.RegistrationType=Wr.MessageDirection=void 0;var Wu=co(),Pde;(function(t){t.clientToServer="clientToServer",t.serverToClient="serverToClient",t.both="both"})(Pde=Wr.MessageDirection||(Wr.MessageDirection={}));var Ub=class{constructor(e){this.method=e}};Wr.RegistrationType=Ub;var Gb=class extends Wu.RequestType0{constructor(e){super(e)}};Wr.ProtocolRequestType0=Gb;var Wb=class extends Wu.RequestType{constructor(e){super(e,Wu.ParameterStructures.byName)}};Wr.ProtocolRequestType=Wb;var Hb=class extends Wu.NotificationType0{constructor(e){super(e)}};Wr.ProtocolNotificationType0=Hb;var Kb=class extends Wu.NotificationType{constructor(e){super(e,Wu.ParameterStructures.byName)}};Wr.ProtocolNotificationType=Kb});var zh=h(Ht=>{"use strict";Object.defineProperty(Ht,"__esModule",{value:!0});Ht.objectLiteral=Ht.typedArray=Ht.stringArray=Ht.array=Ht.func=Ht.error=Ht.number=Ht.string=Ht.boolean=void 0;function Ade(t){return t===!0||t===!1}Ht.boolean=Ade;function Y$(t){return typeof t=="string"||t instanceof String}Ht.string=Y$;function Sde(t){return typeof t=="number"||t instanceof Number}Ht.number=Sde;function Ede(t){return t instanceof Error}Ht.error=Ede;function kde(t){return typeof t=="function"}Ht.func=kde;function X$(t){return Array.isArray(t)}Ht.array=X$;function Nde(t){return X$(t)&&t.every(e=>Y$(e))}Ht.stringArray=Nde;function wde(t,e){return Array.isArray(t)&&t.every(e)}Ht.typedArray=wde;function Dde(t){return t!==null&&typeof t=="object"}Ht.objectLiteral=Dde});var Q$=h(Il=>{"use strict";Object.defineProperty(Il,"__esModule",{value:!0});Il.ImplementationRequest=void 0;var J$=Et(),Ode;(function(t){t.method="textDocument/implementation",t.messageDirection=J$.MessageDirection.clientToServer,t.type=new J$.ProtocolRequestType(t.method)})(Ode=Il.ImplementationRequest||(Il.ImplementationRequest={}))});var eF=h(xl=>{"use strict";Object.defineProperty(xl,"__esModule",{value:!0});xl.TypeDefinitionRequest=void 0;var Z$=Et(),qde;(function(t){t.method="textDocument/typeDefinition",t.messageDirection=Z$.MessageDirection.clientToServer,t.type=new Z$.ProtocolRequestType(t.method)})(qde=xl.TypeDefinitionRequest||(xl.TypeDefinitionRequest={}))});var tF=h(da=>{"use strict";Object.defineProperty(da,"__esModule",{value:!0});da.DidChangeWorkspaceFoldersNotification=da.WorkspaceFoldersRequest=void 0;var Yh=Et(),Ide;(function(t){t.method="workspace/workspaceFolders",t.messageDirection=Yh.MessageDirection.serverToClient,t.type=new Yh.ProtocolRequestType0(t.method)})(Ide=da.WorkspaceFoldersRequest||(da.WorkspaceFoldersRequest={}));var xde;(function(t){t.method="workspace/didChangeWorkspaceFolders",t.messageDirection=Yh.MessageDirection.clientToServer,t.type=new Yh.ProtocolNotificationType(t.method)})(xde=da.DidChangeWorkspaceFoldersNotification||(da.DidChangeWorkspaceFoldersNotification={}))});var nF=h(Ll=>{"use strict";Object.defineProperty(Ll,"__esModule",{value:!0});Ll.ConfigurationRequest=void 0;var rF=Et(),Lde;(function(t){t.method="workspace/configuration",t.messageDirection=rF.MessageDirection.serverToClient,t.type=new rF.ProtocolRequestType(t.method)})(Lde=Ll.ConfigurationRequest||(Ll.ConfigurationRequest={}))});var iF=h(fa=>{"use strict";Object.defineProperty(fa,"__esModule",{value:!0});fa.ColorPresentationRequest=fa.DocumentColorRequest=void 0;var Xh=Et(),Mde;(function(t){t.method="textDocument/documentColor",t.messageDirection=Xh.MessageDirection.clientToServer,t.type=new Xh.ProtocolRequestType(t.method)})(Mde=fa.DocumentColorRequest||(fa.DocumentColorRequest={}));var $de;(function(t){t.method="textDocument/colorPresentation",t.messageDirection=Xh.MessageDirection.clientToServer,t.type=new Xh.ProtocolRequestType(t.method)})($de=fa.ColorPresentationRequest||(fa.ColorPresentationRequest={}))});var aF=h(Ml=>{"use strict";Object.defineProperty(Ml,"__esModule",{value:!0});Ml.FoldingRangeRequest=void 0;var oF=Et(),Fde;(function(t){t.method="textDocument/foldingRange",t.messageDirection=oF.MessageDirection.clientToServer,t.type=new oF.ProtocolRequestType(t.method)})(Fde=Ml.FoldingRangeRequest||(Ml.FoldingRangeRequest={}))});var uF=h($l=>{"use strict";Object.defineProperty($l,"__esModule",{value:!0});$l.DeclarationRequest=void 0;var sF=Et(),jde;(function(t){t.method="textDocument/declaration",t.messageDirection=sF.MessageDirection.clientToServer,t.type=new sF.ProtocolRequestType(t.method)})(jde=$l.DeclarationRequest||($l.DeclarationRequest={}))});var lF=h(Fl=>{"use strict";Object.defineProperty(Fl,"__esModule",{value:!0});Fl.SelectionRangeRequest=void 0;var cF=Et(),Ude;(function(t){t.method="textDocument/selectionRange",t.messageDirection=cF.MessageDirection.clientToServer,t.type=new cF.ProtocolRequestType(t.method)})(Ude=Fl.SelectionRangeRequest||(Fl.SelectionRangeRequest={}))});var dF=h(ai=>{"use strict";Object.defineProperty(ai,"__esModule",{value:!0});ai.WorkDoneProgressCancelNotification=ai.WorkDoneProgressCreateRequest=ai.WorkDoneProgress=void 0;var Gde=co(),Jh=Et(),Wde;(function(t){t.type=new Gde.ProgressType;function e(r){return r===t.type}t.is=e})(Wde=ai.WorkDoneProgress||(ai.WorkDoneProgress={}));var Hde;(function(t){t.method="window/workDoneProgress/create",t.messageDirection=Jh.MessageDirection.serverToClient,t.type=new Jh.ProtocolRequestType(t.method)})(Hde=ai.WorkDoneProgressCreateRequest||(ai.WorkDoneProgressCreateRequest={}));var Kde;(function(t){t.method="window/workDoneProgress/cancel",t.messageDirection=Jh.MessageDirection.clientToServer,t.type=new Jh.ProtocolNotificationType(t.method)})(Kde=ai.WorkDoneProgressCancelNotification||(ai.WorkDoneProgressCancelNotification={}))});var fF=h(si=>{"use strict";Object.defineProperty(si,"__esModule",{value:!0});si.CallHierarchyOutgoingCallsRequest=si.CallHierarchyIncomingCallsRequest=si.CallHierarchyPrepareRequest=void 0;var Hu=Et(),Bde;(function(t){t.method="textDocument/prepareCallHierarchy",t.messageDirection=Hu.MessageDirection.clientToServer,t.type=new Hu.ProtocolRequestType(t.method)})(Bde=si.CallHierarchyPrepareRequest||(si.CallHierarchyPrepareRequest={}));var Vde;(function(t){t.method="callHierarchy/incomingCalls",t.messageDirection=Hu.MessageDirection.clientToServer,t.type=new Hu.ProtocolRequestType(t.method)})(Vde=si.CallHierarchyIncomingCallsRequest||(si.CallHierarchyIncomingCallsRequest={}));var zde;(function(t){t.method="callHierarchy/outgoingCalls",t.messageDirection=Hu.MessageDirection.clientToServer,t.type=new Hu.ProtocolRequestType(t.method)})(zde=si.CallHierarchyOutgoingCallsRequest||(si.CallHierarchyOutgoingCallsRequest={}))});var pF=h(Kt=>{"use strict";Object.defineProperty(Kt,"__esModule",{value:!0});Kt.SemanticTokensRefreshRequest=Kt.SemanticTokensRangeRequest=Kt.SemanticTokensDeltaRequest=Kt.SemanticTokensRequest=Kt.SemanticTokensRegistrationType=Kt.TokenFormat=void 0;var ko=Et(),Yde;(function(t){t.Relative="relative"})(Yde=Kt.TokenFormat||(Kt.TokenFormat={}));var Qh;(function(t){t.method="textDocument/semanticTokens",t.type=new ko.RegistrationType(t.method)})(Qh=Kt.SemanticTokensRegistrationType||(Kt.SemanticTokensRegistrationType={}));var Xde;(function(t){t.method="textDocument/semanticTokens/full",t.messageDirection=ko.MessageDirection.clientToServer,t.type=new ko.ProtocolRequestType(t.method),t.registrationMethod=Qh.method})(Xde=Kt.SemanticTokensRequest||(Kt.SemanticTokensRequest={}));var Jde;(function(t){t.method="textDocument/semanticTokens/full/delta",t.messageDirection=ko.MessageDirection.clientToServer,t.type=new ko.ProtocolRequestType(t.method),t.registrationMethod=Qh.method})(Jde=Kt.SemanticTokensDeltaRequest||(Kt.SemanticTokensDeltaRequest={}));var Qde;(function(t){t.method="textDocument/semanticTokens/range",t.messageDirection=ko.MessageDirection.clientToServer,t.type=new ko.ProtocolRequestType(t.method),t.registrationMethod=Qh.method})(Qde=Kt.SemanticTokensRangeRequest||(Kt.SemanticTokensRangeRequest={}));var Zde;(function(t){t.method="workspace/semanticTokens/refresh",t.messageDirection=ko.MessageDirection.clientToServer,t.type=new ko.ProtocolRequestType0(t.method)})(Zde=Kt.SemanticTokensRefreshRequest||(Kt.SemanticTokensRefreshRequest={}))});var mF=h(jl=>{"use strict";Object.defineProperty(jl,"__esModule",{value:!0});jl.ShowDocumentRequest=void 0;var hF=Et(),efe;(function(t){t.method="window/showDocument",t.messageDirection=hF.MessageDirection.serverToClient,t.type=new hF.ProtocolRequestType(t.method)})(efe=jl.ShowDocumentRequest||(jl.ShowDocumentRequest={}))});var yF=h(Ul=>{"use strict";Object.defineProperty(Ul,"__esModule",{value:!0});Ul.LinkedEditingRangeRequest=void 0;var gF=Et(),tfe;(function(t){t.method="textDocument/linkedEditingRange",t.messageDirection=gF.MessageDirection.clientToServer,t.type=new gF.ProtocolRequestType(t.method)})(tfe=Ul.LinkedEditingRangeRequest||(Ul.LinkedEditingRangeRequest={}))});var vF=h(kt=>{"use strict";Object.defineProperty(kt,"__esModule",{value:!0});kt.WillDeleteFilesRequest=kt.DidDeleteFilesNotification=kt.DidRenameFilesNotification=kt.WillRenameFilesRequest=kt.DidCreateFilesNotification=kt.WillCreateFilesRequest=kt.FileOperationPatternKind=void 0;var Ln=Et(),rfe;(function(t){t.file="file",t.folder="folder"})(rfe=kt.FileOperationPatternKind||(kt.FileOperationPatternKind={}));var nfe;(function(t){t.method="workspace/willCreateFiles",t.messageDirection=Ln.MessageDirection.clientToServer,t.type=new Ln.ProtocolRequestType(t.method)})(nfe=kt.WillCreateFilesRequest||(kt.WillCreateFilesRequest={}));var ife;(function(t){t.method="workspace/didCreateFiles",t.messageDirection=Ln.MessageDirection.clientToServer,t.type=new Ln.ProtocolNotificationType(t.method)})(ife=kt.DidCreateFilesNotification||(kt.DidCreateFilesNotification={}));var ofe;(function(t){t.method="workspace/willRenameFiles",t.messageDirection=Ln.MessageDirection.clientToServer,t.type=new Ln.ProtocolRequestType(t.method)})(ofe=kt.WillRenameFilesRequest||(kt.WillRenameFilesRequest={}));var afe;(function(t){t.method="workspace/didRenameFiles",t.messageDirection=Ln.MessageDirection.clientToServer,t.type=new Ln.ProtocolNotificationType(t.method)})(afe=kt.DidRenameFilesNotification||(kt.DidRenameFilesNotification={}));var sfe;(function(t){t.method="workspace/didDeleteFiles",t.messageDirection=Ln.MessageDirection.clientToServer,t.type=new Ln.ProtocolNotificationType(t.method)})(sfe=kt.DidDeleteFilesNotification||(kt.DidDeleteFilesNotification={}));var ufe;(function(t){t.method="workspace/willDeleteFiles",t.messageDirection=Ln.MessageDirection.clientToServer,t.type=new Ln.ProtocolRequestType(t.method)})(ufe=kt.WillDeleteFilesRequest||(kt.WillDeleteFilesRequest={}))});var TF=h(ui=>{"use strict";Object.defineProperty(ui,"__esModule",{value:!0});ui.MonikerRequest=ui.MonikerKind=ui.UniquenessLevel=void 0;var _F=Et(),cfe;(function(t){t.document="document",t.project="project",t.group="group",t.scheme="scheme",t.global="global"})(cfe=ui.UniquenessLevel||(ui.UniquenessLevel={}));var lfe;(function(t){t.$import="import",t.$export="export",t.local="local"})(lfe=ui.MonikerKind||(ui.MonikerKind={}));var dfe;(function(t){t.method="textDocument/moniker",t.messageDirection=_F.MessageDirection.clientToServer,t.type=new _F.ProtocolRequestType(t.method)})(dfe=ui.MonikerRequest||(ui.MonikerRequest={}))});var RF=h(ci=>{"use strict";Object.defineProperty(ci,"__esModule",{value:!0});ci.TypeHierarchySubtypesRequest=ci.TypeHierarchySupertypesRequest=ci.TypeHierarchyPrepareRequest=void 0;var Ku=Et(),ffe;(function(t){t.method="textDocument/prepareTypeHierarchy",t.messageDirection=Ku.MessageDirection.clientToServer,t.type=new Ku.ProtocolRequestType(t.method)})(ffe=ci.TypeHierarchyPrepareRequest||(ci.TypeHierarchyPrepareRequest={}));var pfe;(function(t){t.method="typeHierarchy/supertypes",t.messageDirection=Ku.MessageDirection.clientToServer,t.type=new Ku.ProtocolRequestType(t.method)})(pfe=ci.TypeHierarchySupertypesRequest||(ci.TypeHierarchySupertypesRequest={}));var hfe;(function(t){t.method="typeHierarchy/subtypes",t.messageDirection=Ku.MessageDirection.clientToServer,t.type=new Ku.ProtocolRequestType(t.method)})(hfe=ci.TypeHierarchySubtypesRequest||(ci.TypeHierarchySubtypesRequest={}))});var bF=h(pa=>{"use strict";Object.defineProperty(pa,"__esModule",{value:!0});pa.InlineValueRefreshRequest=pa.InlineValueRequest=void 0;var Zh=Et(),mfe;(function(t){t.method="textDocument/inlineValue",t.messageDirection=Zh.MessageDirection.clientToServer,t.type=new Zh.ProtocolRequestType(t.method)})(mfe=pa.InlineValueRequest||(pa.InlineValueRequest={}));var gfe;(function(t){t.method="workspace/inlineValue/refresh",t.messageDirection=Zh.MessageDirection.clientToServer,t.type=new Zh.ProtocolRequestType0(t.method)})(gfe=pa.InlineValueRefreshRequest||(pa.InlineValueRefreshRequest={}))});var CF=h(li=>{"use strict";Object.defineProperty(li,"__esModule",{value:!0});li.InlayHintRefreshRequest=li.InlayHintResolveRequest=li.InlayHintRequest=void 0;var Bu=Et(),yfe;(function(t){t.method="textDocument/inlayHint",t.messageDirection=Bu.MessageDirection.clientToServer,t.type=new Bu.ProtocolRequestType(t.method)})(yfe=li.InlayHintRequest||(li.InlayHintRequest={}));var vfe;(function(t){t.method="inlayHint/resolve",t.messageDirection=Bu.MessageDirection.clientToServer,t.type=new Bu.ProtocolRequestType(t.method)})(vfe=li.InlayHintResolveRequest||(li.InlayHintResolveRequest={}));var _fe;(function(t){t.method="workspace/inlayHint/refresh",t.messageDirection=Bu.MessageDirection.clientToServer,t.type=new Bu.ProtocolRequestType0(t.method)})(_fe=li.InlayHintRefreshRequest||(li.InlayHintRefreshRequest={}))});var AF=h(_r=>{"use strict";Object.defineProperty(_r,"__esModule",{value:!0});_r.DiagnosticRefreshRequest=_r.WorkspaceDiagnosticRequest=_r.DocumentDiagnosticRequest=_r.DocumentDiagnosticReportKind=_r.DiagnosticServerCancellationData=void 0;var PF=co(),Tfe=zh(),Vu=Et(),Rfe;(function(t){function e(r){let n=r;return n&&Tfe.boolean(n.retriggerRequest)}t.is=e})(Rfe=_r.DiagnosticServerCancellationData||(_r.DiagnosticServerCancellationData={}));var bfe;(function(t){t.Full="full",t.Unchanged="unchanged"})(bfe=_r.DocumentDiagnosticReportKind||(_r.DocumentDiagnosticReportKind={}));var Cfe;(function(t){t.method="textDocument/diagnostic",t.messageDirection=Vu.MessageDirection.clientToServer,t.type=new Vu.ProtocolRequestType(t.method),t.partialResult=new PF.ProgressType})(Cfe=_r.DocumentDiagnosticRequest||(_r.DocumentDiagnosticRequest={}));var Pfe;(function(t){t.method="workspace/diagnostic",t.messageDirection=Vu.MessageDirection.clientToServer,t.type=new Vu.ProtocolRequestType(t.method),t.partialResult=new PF.ProgressType})(Pfe=_r.WorkspaceDiagnosticRequest||(_r.WorkspaceDiagnosticRequest={}));var Afe;(function(t){t.method="workspace/diagnostic/refresh",t.messageDirection=Vu.MessageDirection.clientToServer,t.type=new Vu.ProtocolRequestType0(t.method)})(Afe=_r.DiagnosticRefreshRequest||(_r.DiagnosticRefreshRequest={}))});var kF=h(je=>{"use strict";Object.defineProperty(je,"__esModule",{value:!0});je.DidCloseNotebookDocumentNotification=je.DidSaveNotebookDocumentNotification=je.DidChangeNotebookDocumentNotification=je.NotebookCellArrayChange=je.DidOpenNotebookDocumentNotification=je.NotebookDocumentSyncRegistrationType=je.NotebookDocument=je.NotebookCell=je.ExecutionSummary=je.NotebookCellKind=void 0;var Gl=Os(),di=zh(),Gi=Et(),SF;(function(t){t.Markup=1,t.Code=2;function e(r){return r===1||r===2}t.is=e})(SF=je.NotebookCellKind||(je.NotebookCellKind={}));var EF;(function(t){function e(i,o){let a={executionOrder:i};return(o===!0||o===!1)&&(a.success=o),a}t.create=e;function r(i){let o=i;return di.objectLiteral(o)&&Gl.uinteger.is(o.executionOrder)&&(o.success===void 0||di.boolean(o.success))}t.is=r;function n(i,o){return i===o?!0:i==null||o===null||o===void 0?!1:i.executionOrder===o.executionOrder&&i.success===o.success}t.equals=n})(EF=je.ExecutionSummary||(je.ExecutionSummary={}));var Bb;(function(t){function e(o,a){return{kind:o,document:a}}t.create=e;function r(o){let a=o;return di.objectLiteral(a)&&SF.is(a.kind)&&Gl.DocumentUri.is(a.document)&&(a.metadata===void 0||di.objectLiteral(a.metadata))}t.is=r;function n(o,a){let s=new Set;return o.document!==a.document&&s.add("document"),o.kind!==a.kind&&s.add("kind"),o.executionSummary!==a.executionSummary&&s.add("executionSummary"),(o.metadata!==void 0||a.metadata!==void 0)&&!i(o.metadata,a.metadata)&&s.add("metadata"),(o.executionSummary!==void 0||a.executionSummary!==void 0)&&!EF.equals(o.executionSummary,a.executionSummary)&&s.add("executionSummary"),s}t.diff=n;function i(o,a){if(o===a)return!0;if(o==null||a===null||a===void 0||typeof o!=typeof a||typeof o!="object")return!1;let s=Array.isArray(o),u=Array.isArray(a);if(s!==u)return!1;if(s&&u){if(o.length!==a.length)return!1;for(let d=0;d<o.length;d++)if(!i(o[d],a[d]))return!1}if(di.objectLiteral(o)&&di.objectLiteral(a)){let d=Object.keys(o),p=Object.keys(a);if(d.length!==p.length||(d.sort(),p.sort(),!i(d,p)))return!1;for(let m=0;m<d.length;m++){let y=d[m];if(!i(o[y],a[y]))return!1}}return!0}})(Bb=je.NotebookCell||(je.NotebookCell={}));var Sfe;(function(t){function e(n,i,o,a){return{uri:n,notebookType:i,version:o,cells:a}}t.create=e;function r(n){let i=n;return di.objectLiteral(i)&&di.string(i.uri)&&Gl.integer.is(i.version)&&di.typedArray(i.cells,Bb.is)}t.is=r})(Sfe=je.NotebookDocument||(je.NotebookDocument={}));var Wl;(function(t){t.method="notebookDocument/sync",t.messageDirection=Gi.MessageDirection.clientToServer,t.type=new Gi.RegistrationType(t.method)})(Wl=je.NotebookDocumentSyncRegistrationType||(je.NotebookDocumentSyncRegistrationType={}));var Efe;(function(t){t.method="notebookDocument/didOpen",t.messageDirection=Gi.MessageDirection.clientToServer,t.type=new Gi.ProtocolNotificationType(t.method),t.registrationMethod=Wl.method})(Efe=je.DidOpenNotebookDocumentNotification||(je.DidOpenNotebookDocumentNotification={}));var kfe;(function(t){function e(n){let i=n;return di.objectLiteral(i)&&Gl.uinteger.is(i.start)&&Gl.uinteger.is(i.deleteCount)&&(i.cells===void 0||di.typedArray(i.cells,Bb.is))}t.is=e;function r(n,i,o){let a={start:n,deleteCount:i};return o!==void 0&&(a.cells=o),a}t.create=r})(kfe=je.NotebookCellArrayChange||(je.NotebookCellArrayChange={}));var Nfe;(function(t){t.method="notebookDocument/didChange",t.messageDirection=Gi.MessageDirection.clientToServer,t.type=new Gi.ProtocolNotificationType(t.method),t.registrationMethod=Wl.method})(Nfe=je.DidChangeNotebookDocumentNotification||(je.DidChangeNotebookDocumentNotification={}));var wfe;(function(t){t.method="notebookDocument/didSave",t.messageDirection=Gi.MessageDirection.clientToServer,t.type=new Gi.ProtocolNotificationType(t.method),t.registrationMethod=Wl.method})(wfe=je.DidSaveNotebookDocumentNotification||(je.DidSaveNotebookDocumentNotification={}));var Dfe;(function(t){t.method="notebookDocument/didClose",t.messageDirection=Gi.MessageDirection.clientToServer,t.type=new Gi.ProtocolNotificationType(t.method),t.registrationMethod=Wl.method})(Dfe=je.DidCloseNotebookDocumentNotification||(je.DidCloseNotebookDocumentNotification={}))});var MF=h(A=>{"use strict";Object.defineProperty(A,"__esModule",{value:!0});A.WorkspaceSymbolRequest=A.CodeActionResolveRequest=A.CodeActionRequest=A.DocumentSymbolRequest=A.DocumentHighlightRequest=A.ReferencesRequest=A.DefinitionRequest=A.SignatureHelpRequest=A.SignatureHelpTriggerKind=A.HoverRequest=A.CompletionResolveRequest=A.CompletionRequest=A.CompletionTriggerKind=A.PublishDiagnosticsNotification=A.WatchKind=A.RelativePattern=A.FileChangeType=A.DidChangeWatchedFilesNotification=A.WillSaveTextDocumentWaitUntilRequest=A.WillSaveTextDocumentNotification=A.TextDocumentSaveReason=A.DidSaveTextDocumentNotification=A.DidCloseTextDocumentNotification=A.DidChangeTextDocumentNotification=A.TextDocumentContentChangeEvent=A.DidOpenTextDocumentNotification=A.TextDocumentSyncKind=A.TelemetryEventNotification=A.LogMessageNotification=A.ShowMessageRequest=A.ShowMessageNotification=A.MessageType=A.DidChangeConfigurationNotification=A.ExitNotification=A.ShutdownRequest=A.InitializedNotification=A.InitializeErrorCodes=A.InitializeRequest=A.WorkDoneProgressOptions=A.TextDocumentRegistrationOptions=A.StaticRegistrationOptions=A.PositionEncodingKind=A.FailureHandlingKind=A.ResourceOperationKind=A.UnregistrationRequest=A.RegistrationRequest=A.DocumentSelector=A.NotebookCellTextDocumentFilter=A.NotebookDocumentFilter=A.TextDocumentFilter=void 0;A.TypeHierarchySubtypesRequest=A.TypeHierarchyPrepareRequest=A.MonikerRequest=A.MonikerKind=A.UniquenessLevel=A.WillDeleteFilesRequest=A.DidDeleteFilesNotification=A.WillRenameFilesRequest=A.DidRenameFilesNotification=A.WillCreateFilesRequest=A.DidCreateFilesNotification=A.FileOperationPatternKind=A.LinkedEditingRangeRequest=A.ShowDocumentRequest=A.SemanticTokensRegistrationType=A.SemanticTokensRefreshRequest=A.SemanticTokensRangeRequest=A.SemanticTokensDeltaRequest=A.SemanticTokensRequest=A.TokenFormat=A.CallHierarchyPrepareRequest=A.CallHierarchyOutgoingCallsRequest=A.CallHierarchyIncomingCallsRequest=A.WorkDoneProgressCancelNotification=A.WorkDoneProgressCreateRequest=A.WorkDoneProgress=A.SelectionRangeRequest=A.DeclarationRequest=A.FoldingRangeRequest=A.ColorPresentationRequest=A.DocumentColorRequest=A.ConfigurationRequest=A.DidChangeWorkspaceFoldersNotification=A.WorkspaceFoldersRequest=A.TypeDefinitionRequest=A.ImplementationRequest=A.ApplyWorkspaceEditRequest=A.ExecuteCommandRequest=A.PrepareRenameRequest=A.RenameRequest=A.PrepareSupportDefaultBehavior=A.DocumentOnTypeFormattingRequest=A.DocumentRangeFormattingRequest=A.DocumentFormattingRequest=A.DocumentLinkResolveRequest=A.DocumentLinkRequest=A.CodeLensRefreshRequest=A.CodeLensResolveRequest=A.CodeLensRequest=A.WorkspaceSymbolResolveRequest=void 0;A.DidCloseNotebookDocumentNotification=A.DidSaveNotebookDocumentNotification=A.DidChangeNotebookDocumentNotification=A.NotebookCellArrayChange=A.DidOpenNotebookDocumentNotification=A.NotebookDocumentSyncRegistrationType=A.NotebookDocument=A.NotebookCell=A.ExecutionSummary=A.NotebookCellKind=A.DiagnosticRefreshRequest=A.WorkspaceDiagnosticRequest=A.DocumentDiagnosticRequest=A.DocumentDiagnosticReportKind=A.DiagnosticServerCancellationData=A.InlayHintRefreshRequest=A.InlayHintResolveRequest=A.InlayHintRequest=A.InlineValueRefreshRequest=A.InlineValueRequest=A.TypeHierarchySupertypesRequest=void 0;var B=Et(),NF=Os(),Tr=zh(),Ofe=Q$();Object.defineProperty(A,"ImplementationRequest",{enumerable:!0,get:function(){return Ofe.ImplementationRequest}});var qfe=eF();Object.defineProperty(A,"TypeDefinitionRequest",{enumerable:!0,get:function(){return qfe.TypeDefinitionRequest}});var wF=tF();Object.defineProperty(A,"WorkspaceFoldersRequest",{enumerable:!0,get:function(){return wF.WorkspaceFoldersRequest}});Object.defineProperty(A,"DidChangeWorkspaceFoldersNotification",{enumerable:!0,get:function(){return wF.DidChangeWorkspaceFoldersNotification}});var Ife=nF();Object.defineProperty(A,"ConfigurationRequest",{enumerable:!0,get:function(){return Ife.ConfigurationRequest}});var DF=iF();Object.defineProperty(A,"DocumentColorRequest",{enumerable:!0,get:function(){return DF.DocumentColorRequest}});Object.defineProperty(A,"ColorPresentationRequest",{enumerable:!0,get:function(){return DF.ColorPresentationRequest}});var xfe=aF();Object.defineProperty(A,"FoldingRangeRequest",{enumerable:!0,get:function(){return xfe.FoldingRangeRequest}});var Lfe=uF();Object.defineProperty(A,"DeclarationRequest",{enumerable:!0,get:function(){return Lfe.DeclarationRequest}});var Mfe=lF();Object.defineProperty(A,"SelectionRangeRequest",{enumerable:!0,get:function(){return Mfe.SelectionRangeRequest}});var Vb=dF();Object.defineProperty(A,"WorkDoneProgress",{enumerable:!0,get:function(){return Vb.WorkDoneProgress}});Object.defineProperty(A,"WorkDoneProgressCreateRequest",{enumerable:!0,get:function(){return Vb.WorkDoneProgressCreateRequest}});Object.defineProperty(A,"WorkDoneProgressCancelNotification",{enumerable:!0,get:function(){return Vb.WorkDoneProgressCancelNotification}});var zb=fF();Object.defineProperty(A,"CallHierarchyIncomingCallsRequest",{enumerable:!0,get:function(){return zb.CallHierarchyIncomingCallsRequest}});Object.defineProperty(A,"CallHierarchyOutgoingCallsRequest",{enumerable:!0,get:function(){return zb.CallHierarchyOutgoingCallsRequest}});Object.defineProperty(A,"CallHierarchyPrepareRequest",{enumerable:!0,get:function(){return zb.CallHierarchyPrepareRequest}});var zu=pF();Object.defineProperty(A,"TokenFormat",{enumerable:!0,get:function(){return zu.TokenFormat}});Object.defineProperty(A,"SemanticTokensRequest",{enumerable:!0,get:function(){return zu.SemanticTokensRequest}});Object.defineProperty(A,"SemanticTokensDeltaRequest",{enumerable:!0,get:function(){return zu.SemanticTokensDeltaRequest}});Object.defineProperty(A,"SemanticTokensRangeRequest",{enumerable:!0,get:function(){return zu.SemanticTokensRangeRequest}});Object.defineProperty(A,"SemanticTokensRefreshRequest",{enumerable:!0,get:function(){return zu.SemanticTokensRefreshRequest}});Object.defineProperty(A,"SemanticTokensRegistrationType",{enumerable:!0,get:function(){return zu.SemanticTokensRegistrationType}});var $fe=mF();Object.defineProperty(A,"ShowDocumentRequest",{enumerable:!0,get:function(){return $fe.ShowDocumentRequest}});var Ffe=yF();Object.defineProperty(A,"LinkedEditingRangeRequest",{enumerable:!0,get:function(){return Ffe.LinkedEditingRangeRequest}});var Ja=vF();Object.defineProperty(A,"FileOperationPatternKind",{enumerable:!0,get:function(){return Ja.FileOperationPatternKind}});Object.defineProperty(A,"DidCreateFilesNotification",{enumerable:!0,get:function(){return Ja.DidCreateFilesNotification}});Object.defineProperty(A,"WillCreateFilesRequest",{enumerable:!0,get:function(){return Ja.WillCreateFilesRequest}});Object.defineProperty(A,"DidRenameFilesNotification",{enumerable:!0,get:function(){return Ja.DidRenameFilesNotification}});Object.defineProperty(A,"WillRenameFilesRequest",{enumerable:!0,get:function(){return Ja.WillRenameFilesRequest}});Object.defineProperty(A,"DidDeleteFilesNotification",{enumerable:!0,get:function(){return Ja.DidDeleteFilesNotification}});Object.defineProperty(A,"WillDeleteFilesRequest",{enumerable:!0,get:function(){return Ja.WillDeleteFilesRequest}});var Yb=TF();Object.defineProperty(A,"UniquenessLevel",{enumerable:!0,get:function(){return Yb.UniquenessLevel}});Object.defineProperty(A,"MonikerKind",{enumerable:!0,get:function(){return Yb.MonikerKind}});Object.defineProperty(A,"MonikerRequest",{enumerable:!0,get:function(){return Yb.MonikerRequest}});var Xb=RF();Object.defineProperty(A,"TypeHierarchyPrepareRequest",{enumerable:!0,get:function(){return Xb.TypeHierarchyPrepareRequest}});Object.defineProperty(A,"TypeHierarchySubtypesRequest",{enumerable:!0,get:function(){return Xb.TypeHierarchySubtypesRequest}});Object.defineProperty(A,"TypeHierarchySupertypesRequest",{enumerable:!0,get:function(){return Xb.TypeHierarchySupertypesRequest}});var OF=bF();Object.defineProperty(A,"InlineValueRequest",{enumerable:!0,get:function(){return OF.InlineValueRequest}});Object.defineProperty(A,"InlineValueRefreshRequest",{enumerable:!0,get:function(){return OF.InlineValueRefreshRequest}});var Jb=CF();Object.defineProperty(A,"InlayHintRequest",{enumerable:!0,get:function(){return Jb.InlayHintRequest}});Object.defineProperty(A,"InlayHintResolveRequest",{enumerable:!0,get:function(){return Jb.InlayHintResolveRequest}});Object.defineProperty(A,"InlayHintRefreshRequest",{enumerable:!0,get:function(){return Jb.InlayHintRefreshRequest}});var Hl=AF();Object.defineProperty(A,"DiagnosticServerCancellationData",{enumerable:!0,get:function(){return Hl.DiagnosticServerCancellationData}});Object.defineProperty(A,"DocumentDiagnosticReportKind",{enumerable:!0,get:function(){return Hl.DocumentDiagnosticReportKind}});Object.defineProperty(A,"DocumentDiagnosticRequest",{enumerable:!0,get:function(){return Hl.DocumentDiagnosticRequest}});Object.defineProperty(A,"WorkspaceDiagnosticRequest",{enumerable:!0,get:function(){return Hl.WorkspaceDiagnosticRequest}});Object.defineProperty(A,"DiagnosticRefreshRequest",{enumerable:!0,get:function(){return Hl.DiagnosticRefreshRequest}});var Wi=kF();Object.defineProperty(A,"NotebookCellKind",{enumerable:!0,get:function(){return Wi.NotebookCellKind}});Object.defineProperty(A,"ExecutionSummary",{enumerable:!0,get:function(){return Wi.ExecutionSummary}});Object.defineProperty(A,"NotebookCell",{enumerable:!0,get:function(){return Wi.NotebookCell}});Object.defineProperty(A,"NotebookDocument",{enumerable:!0,get:function(){return Wi.NotebookDocument}});Object.defineProperty(A,"NotebookDocumentSyncRegistrationType",{enumerable:!0,get:function(){return Wi.NotebookDocumentSyncRegistrationType}});Object.defineProperty(A,"DidOpenNotebookDocumentNotification",{enumerable:!0,get:function(){return Wi.DidOpenNotebookDocumentNotification}});Object.defineProperty(A,"NotebookCellArrayChange",{enumerable:!0,get:function(){return Wi.NotebookCellArrayChange}});Object.defineProperty(A,"DidChangeNotebookDocumentNotification",{enumerable:!0,get:function(){return Wi.DidChangeNotebookDocumentNotification}});Object.defineProperty(A,"DidSaveNotebookDocumentNotification",{enumerable:!0,get:function(){return Wi.DidSaveNotebookDocumentNotification}});Object.defineProperty(A,"DidCloseNotebookDocumentNotification",{enumerable:!0,get:function(){return Wi.DidCloseNotebookDocumentNotification}});var qF;(function(t){function e(r){let n=r;return Tr.string(n.language)||Tr.string(n.scheme)||Tr.string(n.pattern)}t.is=e})(qF=A.TextDocumentFilter||(A.TextDocumentFilter={}));var IF;(function(t){function e(r){let n=r;return Tr.objectLiteral(n)&&(Tr.string(n.notebookType)||Tr.string(n.scheme)||Tr.string(n.pattern))}t.is=e})(IF=A.NotebookDocumentFilter||(A.NotebookDocumentFilter={}));var xF;(function(t){function e(r){let n=r;return Tr.objectLiteral(n)&&(Tr.string(n.notebook)||IF.is(n.notebook))&&(n.language===void 0||Tr.string(n.language))}t.is=e})(xF=A.NotebookCellTextDocumentFilter||(A.NotebookCellTextDocumentFilter={}));var LF;(function(t){function e(r){if(!Array.isArray(r))return!1;for(let n of r)if(!Tr.string(n)&&!qF.is(n)&&!xF.is(n))return!1;return!0}t.is=e})(LF=A.DocumentSelector||(A.DocumentSelector={}));var jfe;(function(t){t.method="client/registerCapability",t.messageDirection=B.MessageDirection.serverToClient,t.type=new B.ProtocolRequestType(t.method)})(jfe=A.RegistrationRequest||(A.RegistrationRequest={}));var Ufe;(function(t){t.method="client/unregisterCapability",t.messageDirection=B.MessageDirection.serverToClient,t.type=new B.ProtocolRequestType(t.method)})(Ufe=A.UnregistrationRequest||(A.UnregistrationRequest={}));var Gfe;(function(t){t.Create="create",t.Rename="rename",t.Delete="delete"})(Gfe=A.ResourceOperationKind||(A.ResourceOperationKind={}));var Wfe;(function(t){t.Abort="abort",t.Transactional="transactional",t.TextOnlyTransactional="textOnlyTransactional",t.Undo="undo"})(Wfe=A.FailureHandlingKind||(A.FailureHandlingKind={}));var Hfe;(function(t){t.UTF8="utf-8",t.UTF16="utf-16",t.UTF32="utf-32"})(Hfe=A.PositionEncodingKind||(A.PositionEncodingKind={}));var Kfe;(function(t){function e(r){let n=r;return n&&Tr.string(n.id)&&n.id.length>0}t.hasId=e})(Kfe=A.StaticRegistrationOptions||(A.StaticRegistrationOptions={}));var Bfe;(function(t){function e(r){let n=r;return n&&(n.documentSelector===null||LF.is(n.documentSelector))}t.is=e})(Bfe=A.TextDocumentRegistrationOptions||(A.TextDocumentRegistrationOptions={}));var Vfe;(function(t){function e(n){let i=n;return Tr.objectLiteral(i)&&(i.workDoneProgress===void 0||Tr.boolean(i.workDoneProgress))}t.is=e;function r(n){let i=n;return i&&Tr.boolean(i.workDoneProgress)}t.hasWorkDoneProgress=r})(Vfe=A.WorkDoneProgressOptions||(A.WorkDoneProgressOptions={}));var zfe;(function(t){t.method="initialize",t.messageDirection=B.MessageDirection.clientToServer,t.type=new B.ProtocolRequestType(t.method)})(zfe=A.InitializeRequest||(A.InitializeRequest={}));var Yfe;(function(t){t.unknownProtocolVersion=1})(Yfe=A.InitializeErrorCodes||(A.InitializeErrorCodes={}));var Xfe;(function(t){t.method="initialized",t.messageDirection=B.MessageDirection.clientToServer,t.type=new B.ProtocolNotificationType(t.method)})(Xfe=A.InitializedNotification||(A.InitializedNotification={}));var Jfe;(function(t){t.method="shutdown",t.messageDirection=B.MessageDirection.clientToServer,t.type=new B.ProtocolRequestType0(t.method)})(Jfe=A.ShutdownRequest||(A.ShutdownRequest={}));var Qfe;(function(t){t.method="exit",t.messageDirection=B.MessageDirection.clientToServer,t.type=new B.ProtocolNotificationType0(t.method)})(Qfe=A.ExitNotification||(A.ExitNotification={}));var Zfe;(function(t){t.method="workspace/didChangeConfiguration",t.messageDirection=B.MessageDirection.clientToServer,t.type=new B.ProtocolNotificationType(t.method)})(Zfe=A.DidChangeConfigurationNotification||(A.DidChangeConfigurationNotification={}));var epe;(function(t){t.Error=1,t.Warning=2,t.Info=3,t.Log=4})(epe=A.MessageType||(A.MessageType={}));var tpe;(function(t){t.method="window/showMessage",t.messageDirection=B.MessageDirection.serverToClient,t.type=new B.ProtocolNotificationType(t.method)})(tpe=A.ShowMessageNotification||(A.ShowMessageNotification={}));var rpe;(function(t){t.method="window/showMessageRequest",t.messageDirection=B.MessageDirection.serverToClient,t.type=new B.ProtocolRequestType(t.method)})(rpe=A.ShowMessageRequest||(A.ShowMessageRequest={}));var npe;(function(t){t.method="window/logMessage",t.messageDirection=B.MessageDirection.serverToClient,t.type=new B.ProtocolNotificationType(t.method)})(npe=A.LogMessageNotification||(A.LogMessageNotification={}));var ipe;(function(t){t.method="telemetry/event",t.messageDirection=B.MessageDirection.serverToClient,t.type=new B.ProtocolNotificationType(t.method)})(ipe=A.TelemetryEventNotification||(A.TelemetryEventNotification={}));var ope;(function(t){t.None=0,t.Full=1,t.Incremental=2})(ope=A.TextDocumentSyncKind||(A.TextDocumentSyncKind={}));var ape;(function(t){t.method="textDocument/didOpen",t.messageDirection=B.MessageDirection.clientToServer,t.type=new B.ProtocolNotificationType(t.method)})(ape=A.DidOpenTextDocumentNotification||(A.DidOpenTextDocumentNotification={}));var spe;(function(t){function e(n){let i=n;return i!=null&&typeof i.text=="string"&&i.range!==void 0&&(i.rangeLength===void 0||typeof i.rangeLength=="number")}t.isIncremental=e;function r(n){let i=n;return i!=null&&typeof i.text=="string"&&i.range===void 0&&i.rangeLength===void 0}t.isFull=r})(spe=A.TextDocumentContentChangeEvent||(A.TextDocumentContentChangeEvent={}));var upe;(function(t){t.method="textDocument/didChange",t.messageDirection=B.MessageDirection.clientToServer,t.type=new B.ProtocolNotificationType(t.method)})(upe=A.DidChangeTextDocumentNotification||(A.DidChangeTextDocumentNotification={}));var cpe;(function(t){t.method="textDocument/didClose",t.messageDirection=B.MessageDirection.clientToServer,t.type=new B.ProtocolNotificationType(t.method)})(cpe=A.DidCloseTextDocumentNotification||(A.DidCloseTextDocumentNotification={}));var lpe;(function(t){t.method="textDocument/didSave",t.messageDirection=B.MessageDirection.clientToServer,t.type=new B.ProtocolNotificationType(t.method)})(lpe=A.DidSaveTextDocumentNotification||(A.DidSaveTextDocumentNotification={}));var dpe;(function(t){t.Manual=1,t.AfterDelay=2,t.FocusOut=3})(dpe=A.TextDocumentSaveReason||(A.TextDocumentSaveReason={}));var fpe;(function(t){t.method="textDocument/willSave",t.messageDirection=B.MessageDirection.clientToServer,t.type=new B.ProtocolNotificationType(t.method)})(fpe=A.WillSaveTextDocumentNotification||(A.WillSaveTextDocumentNotification={}));var ppe;(function(t){t.method="textDocument/willSaveWaitUntil",t.messageDirection=B.MessageDirection.clientToServer,t.type=new B.ProtocolRequestType(t.method)})(ppe=A.WillSaveTextDocumentWaitUntilRequest||(A.WillSaveTextDocumentWaitUntilRequest={}));var hpe;(function(t){t.method="workspace/didChangeWatchedFiles",t.messageDirection=B.MessageDirection.clientToServer,t.type=new B.ProtocolNotificationType(t.method)})(hpe=A.DidChangeWatchedFilesNotification||(A.DidChangeWatchedFilesNotification={}));var mpe;(function(t){t.Created=1,t.Changed=2,t.Deleted=3})(mpe=A.FileChangeType||(A.FileChangeType={}));var gpe;(function(t){function e(r){let n=r;return Tr.objectLiteral(n)&&(NF.URI.is(n.baseUri)||NF.WorkspaceFolder.is(n.baseUri))&&Tr.string(n.pattern)}t.is=e})(gpe=A.RelativePattern||(A.RelativePattern={}));var ype;(function(t){t.Create=1,t.Change=2,t.Delete=4})(ype=A.WatchKind||(A.WatchKind={}));var vpe;(function(t){t.method="textDocument/publishDiagnostics",t.messageDirection=B.MessageDirection.serverToClient,t.type=new B.ProtocolNotificationType(t.method)})(vpe=A.PublishDiagnosticsNotification||(A.PublishDiagnosticsNotification={}));var _pe;(function(t){t.Invoked=1,t.TriggerCharacter=2,t.TriggerForIncompleteCompletions=3})(_pe=A.CompletionTriggerKind||(A.CompletionTriggerKind={}));var Tpe;(function(t){t.method="textDocument/completion",t.messageDirection=B.MessageDirection.clientToServer,t.type=new B.ProtocolRequestType(t.method)})(Tpe=A.CompletionRequest||(A.CompletionRequest={}));var Rpe;(function(t){t.method="completionItem/resolve",t.messageDirection=B.MessageDirection.clientToServer,t.type=new B.ProtocolRequestType(t.method)})(Rpe=A.CompletionResolveRequest||(A.CompletionResolveRequest={}));var bpe;(function(t){t.method="textDocument/hover",t.messageDirection=B.MessageDirection.clientToServer,t.type=new B.ProtocolRequestType(t.method)})(bpe=A.HoverRequest||(A.HoverRequest={}));var Cpe;(function(t){t.Invoked=1,t.TriggerCharacter=2,t.ContentChange=3})(Cpe=A.SignatureHelpTriggerKind||(A.SignatureHelpTriggerKind={}));var Ppe;(function(t){t.method="textDocument/signatureHelp",t.messageDirection=B.MessageDirection.clientToServer,t.type=new B.ProtocolRequestType(t.method)})(Ppe=A.SignatureHelpRequest||(A.SignatureHelpRequest={}));var Ape;(function(t){t.method="textDocument/definition",t.messageDirection=B.MessageDirection.clientToServer,t.type=new B.ProtocolRequestType(t.method)})(Ape=A.DefinitionRequest||(A.DefinitionRequest={}));var Spe;(function(t){t.method="textDocument/references",t.messageDirection=B.MessageDirection.clientToServer,t.type=new B.ProtocolRequestType(t.method)})(Spe=A.ReferencesRequest||(A.ReferencesRequest={}));var Epe;(function(t){t.method="textDocument/documentHighlight",t.messageDirection=B.MessageDirection.clientToServer,t.type=new B.ProtocolRequestType(t.method)})(Epe=A.DocumentHighlightRequest||(A.DocumentHighlightRequest={}));var kpe;(function(t){t.method="textDocument/documentSymbol",t.messageDirection=B.MessageDirection.clientToServer,t.type=new B.ProtocolRequestType(t.method)})(kpe=A.DocumentSymbolRequest||(A.DocumentSymbolRequest={}));var Npe;(function(t){t.method="textDocument/codeAction",t.messageDirection=B.MessageDirection.clientToServer,t.type=new B.ProtocolRequestType(t.method)})(Npe=A.CodeActionRequest||(A.CodeActionRequest={}));var wpe;(function(t){t.method="codeAction/resolve",t.messageDirection=B.MessageDirection.clientToServer,t.type=new B.ProtocolRequestType(t.method)})(wpe=A.CodeActionResolveRequest||(A.CodeActionResolveRequest={}));var Dpe;(function(t){t.method="workspace/symbol",t.messageDirection=B.MessageDirection.clientToServer,t.type=new B.ProtocolRequestType(t.method)})(Dpe=A.WorkspaceSymbolRequest||(A.WorkspaceSymbolRequest={}));var Ope;(function(t){t.method="workspaceSymbol/resolve",t.messageDirection=B.MessageDirection.clientToServer,t.type=new B.ProtocolRequestType(t.method)})(Ope=A.WorkspaceSymbolResolveRequest||(A.WorkspaceSymbolResolveRequest={}));var qpe;(function(t){t.method="textDocument/codeLens",t.messageDirection=B.MessageDirection.clientToServer,t.type=new B.ProtocolRequestType(t.method)})(qpe=A.CodeLensRequest||(A.CodeLensRequest={}));var Ipe;(function(t){t.method="codeLens/resolve",t.messageDirection=B.MessageDirection.clientToServer,t.type=new B.ProtocolRequestType(t.method)})(Ipe=A.CodeLensResolveRequest||(A.CodeLensResolveRequest={}));var xpe;(function(t){t.method="workspace/codeLens/refresh",t.messageDirection=B.MessageDirection.serverToClient,t.type=new B.ProtocolRequestType0(t.method)})(xpe=A.CodeLensRefreshRequest||(A.CodeLensRefreshRequest={}));var Lpe;(function(t){t.method="textDocument/documentLink",t.messageDirection=B.MessageDirection.clientToServer,t.type=new B.ProtocolRequestType(t.method)})(Lpe=A.DocumentLinkRequest||(A.DocumentLinkRequest={}));var Mpe;(function(t){t.method="documentLink/resolve",t.messageDirection=B.MessageDirection.clientToServer,t.type=new B.ProtocolRequestType(t.method)})(Mpe=A.DocumentLinkResolveRequest||(A.DocumentLinkResolveRequest={}));var $pe;(function(t){t.method="textDocument/formatting",t.messageDirection=B.MessageDirection.clientToServer,t.type=new B.ProtocolRequestType(t.method)})($pe=A.DocumentFormattingRequest||(A.DocumentFormattingRequest={}));var Fpe;(function(t){t.method="textDocument/rangeFormatting",t.messageDirection=B.MessageDirection.clientToServer,t.type=new B.ProtocolRequestType(t.method)})(Fpe=A.DocumentRangeFormattingRequest||(A.DocumentRangeFormattingRequest={}));var jpe;(function(t){t.method="textDocument/onTypeFormatting",t.messageDirection=B.MessageDirection.clientToServer,t.type=new B.ProtocolRequestType(t.method)})(jpe=A.DocumentOnTypeFormattingRequest||(A.DocumentOnTypeFormattingRequest={}));var Upe;(function(t){t.Identifier=1})(Upe=A.PrepareSupportDefaultBehavior||(A.PrepareSupportDefaultBehavior={}));var Gpe;(function(t){t.method="textDocument/rename",t.messageDirection=B.MessageDirection.clientToServer,t.type=new B.ProtocolRequestType(t.method)})(Gpe=A.RenameRequest||(A.RenameRequest={}));var Wpe;(function(t){t.method="textDocument/prepareRename",t.messageDirection=B.MessageDirection.clientToServer,t.type=new B.ProtocolRequestType(t.method)})(Wpe=A.PrepareRenameRequest||(A.PrepareRenameRequest={}));var Hpe;(function(t){t.method="workspace/executeCommand",t.messageDirection=B.MessageDirection.clientToServer,t.type=new B.ProtocolRequestType(t.method)})(Hpe=A.ExecuteCommandRequest||(A.ExecuteCommandRequest={}));var Kpe;(function(t){t.method="workspace/applyEdit",t.messageDirection=B.MessageDirection.serverToClient,t.type=new B.ProtocolRequestType("workspace/applyEdit")})(Kpe=A.ApplyWorkspaceEditRequest||(A.ApplyWorkspaceEditRequest={}))});var FF=h(em=>{"use strict";Object.defineProperty(em,"__esModule",{value:!0});em.createProtocolConnection=void 0;var $F=co();function Bpe(t,e,r,n){return $F.ConnectionStrategy.is(n)&&(n={connectionStrategy:n}),(0,$F.createMessageConnection)(t,e,r,n)}em.createProtocolConnection=Bpe});var jF=h(Hr=>{"use strict";var Vpe=Hr&&Hr.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var i=Object.getOwnPropertyDescriptor(e,r);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,i)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),tm=Hr&&Hr.__exportStar||function(t,e){for(var r in t)r!=="default"&&!Object.prototype.hasOwnProperty.call(e,r)&&Vpe(e,t,r)};Object.defineProperty(Hr,"__esModule",{value:!0});Hr.LSPErrorCodes=Hr.createProtocolConnection=void 0;tm(co(),Hr);tm(Os(),Hr);tm(Et(),Hr);tm(MF(),Hr);var zpe=FF();Object.defineProperty(Hr,"createProtocolConnection",{enumerable:!0,get:function(){return zpe.createProtocolConnection}});var Ype;(function(t){t.lspReservedErrorRangeStart=-32899,t.RequestFailed=-32803,t.ServerCancelled=-32802,t.ContentModified=-32801,t.RequestCancelled=-32800,t.lspReservedErrorRangeEnd=-32800})(Ype=Hr.LSPErrorCodes||(Hr.LSPErrorCodes={}))});var GF=h(Hi=>{"use strict";var Xpe=Hi&&Hi.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var i=Object.getOwnPropertyDescriptor(e,r);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,i)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),UF=Hi&&Hi.__exportStar||function(t,e){for(var r in t)r!=="default"&&!Object.prototype.hasOwnProperty.call(e,r)&&Xpe(e,t,r)};Object.defineProperty(Hi,"__esModule",{value:!0});Hi.createProtocolConnection=void 0;var Jpe=jb();UF(jb(),Hi);UF(jF(),Hi);function Qpe(t,e,r,n){return(0,Jpe.createMessageConnection)(t,e,r,n)}Hi.createProtocolConnection=Qpe});var Zb=h(rm=>{"use strict";Object.defineProperty(rm,"__esModule",{value:!0});rm.DefaultConfigurationProvider=void 0;var Zpe=GF(),Qb=class{constructor(e){this.settings={},this.workspaceConfig=!1,this.initialized=!1,this.serviceRegistry=e.ServiceRegistry,this.connection=e.lsp.Connection,e.lsp.LanguageServer.onInitialize(r=>{var n,i;this.workspaceConfig=(i=(n=r.capabilities.workspace)===null||n===void 0?void 0:n.configuration)!==null&&i!==void 0?i:!1}),e.lsp.LanguageServer.onInitialized(r=>{var n;let i=this.serviceRegistry.all;(n=e.lsp.Connection)===null||n===void 0||n.client.register(Zpe.DidChangeConfigurationNotification.type,{section:i.map(o=>this.toSectionName(o.LanguageMetaData.languageId))})})}async initialize(){if(this.workspaceConfig&&this.connection){let r=this.serviceRegistry.all.map(i=>({section:this.toSectionName(i.LanguageMetaData.languageId)})),n=await this.connection.workspace.getConfiguration(r);r.forEach((i,o)=>{this.updateSectionConfiguration(i.section,n[o])})}this.initialized=!0}updateConfiguration(e){e.settings&&Object.keys(e.settings).forEach(r=>{this.updateSectionConfiguration(r,e.settings[r])})}updateSectionConfiguration(e,r){this.settings[e]=r}async getConfiguration(e,r){this.initialized||await this.initialize();let n=this.toSectionName(e);if(this.settings[n])return this.settings[n][r]}toSectionName(e){return`${e}`}};rm.DefaultConfigurationProvider=Qb});var rC=h(im=>{"use strict";Object.defineProperty(im,"__esModule",{value:!0});im.DefaultDocumentBuilder=void 0;var nm=et(),ehe=cn(),eC=Cn(),Ki=Vo(),tC=class{constructor(e){this.updateListeners=[],this.buildPhaseListeners=new ehe.MultiMap,this.langiumDocuments=e.workspace.LangiumDocuments,this.langiumDocumentFactory=e.workspace.LangiumDocumentFactory,this.indexManager=e.workspace.IndexManager,this.serviceRegistry=e.ServiceRegistry}async build(e,r={},n=nm.CancellationToken.None){await this.buildDocuments(e,r,n)}async update(e,r,n=nm.CancellationToken.None){for(let s of r)this.langiumDocuments.deleteDocument(s);this.indexManager.remove(r);for(let s of e)this.langiumDocuments.invalidateDocument(s);for(let s of this.updateListeners)s(e,r);await(0,eC.interruptAndCheck)(n);let i=e.map(s=>this.langiumDocuments.getOrCreateDocument(s)),o=this.collectDocuments(i,r),a={validationChecks:"all"};await this.buildDocuments(o,a,n)}onUpdate(e){return this.updateListeners.push(e),nm.Disposable.create(()=>{let r=this.updateListeners.indexOf(e);r>=0&&this.updateListeners.splice(r,1)})}collectDocuments(e,r){let n=e.map(a=>a.uri).concat(r),i=this.indexManager.getAffectedDocuments(n).toArray();i.forEach(a=>{this.serviceRegistry.getServices(a.uri).references.Linker.unlink(a),a.state=Math.min(a.state,Ki.DocumentState.ComputedScopes)});let o=new Set([...e,...i,...this.langiumDocuments.all.filter(a=>a.state<Ki.DocumentState.Validated)]);return Array.from(o)}async buildDocuments(e,r,n){await this.runCancelable(e,Ki.DocumentState.Parsed,n,o=>this.langiumDocumentFactory.update(o)),await this.runCancelable(e,Ki.DocumentState.IndexedContent,n,o=>this.indexManager.updateContent(o,n)),await this.runCancelable(e,Ki.DocumentState.ComputedScopes,n,o=>this.computeScopes(o,n)),await this.runCancelable(e,Ki.DocumentState.Linked,n,o=>this.serviceRegistry.getServices(o.uri).references.Linker.link(o,n)),await this.runCancelable(e,Ki.DocumentState.IndexedReferences,n,o=>this.indexManager.updateReferences(o,n));let i=e.filter(o=>this.shouldValidate(o,r));await this.runCancelable(i,Ki.DocumentState.Validated,n,o=>this.validate(o,n))}async runCancelable(e,r,n,i){let o=e.filter(a=>a.state<r);for(let a of o)await(0,eC.interruptAndCheck)(n),await i(a);await this.notifyBuildPhase(o,r,n)}onBuildPhase(e,r){return this.buildPhaseListeners.add(e,r),nm.Disposable.create(()=>{this.buildPhaseListeners.delete(e,r)})}async notifyBuildPhase(e,r,n){if(e.length===0)return;let i=this.buildPhaseListeners.get(r);for(let o of i)await(0,eC.interruptAndCheck)(n),await o(e,n)}async computeScopes(e,r){let n=this.serviceRegistry.getServices(e.uri).references.ScopeComputation;e.precomputedScopes=await n.computeLocalScopes(e,r),e.state=Ki.DocumentState.ComputedScopes}shouldValidate(e,r){return r.validationChecks==="all"}async validate(e,r){let i=await this.serviceRegistry.getServices(e.uri).validation.DocumentValidator.validateDocument(e,r);e.diagnostics=i,e.state=Ki.DocumentState.Validated}};im.DefaultDocumentBuilder=tC});var aC=h(om=>{"use strict";Object.defineProperty(om,"__esModule",{value:!0});om.DefaultIndexManager=void 0;var WF=et(),the=Ye(),nC=tr(),iC=lo(),HF=Vo(),oC=class{constructor(e){this.simpleIndex=new Map,this.referenceIndex=new Map,this.globalScopeCache=new Map,this.serviceRegistry=e.ServiceRegistry,this.astReflection=e.AstReflection,this.langiumDocuments=()=>e.workspace.LangiumDocuments}findAllReferences(e,r){let n=(0,the.getDocument)(e).uri,i=[];return this.referenceIndex.forEach(o=>{o.forEach(a=>{(0,iC.equalURI)(a.targetUri,n)&&a.targetPath===r&&i.push(a)})}),(0,nC.stream)(i)}allElements(e=""){this.globalScopeCache.has("")||this.globalScopeCache.set("",Array.from(this.simpleIndex.values()).flat());let r=this.globalScopeCache.get(e);if(r)return(0,nC.stream)(r);{let n=this.globalScopeCache.get("").filter(i=>this.astReflection.isSubtype(i.type,e));return this.globalScopeCache.set(e,n),(0,nC.stream)(n)}}remove(e){for(let r of e){let n=r.toString();this.simpleIndex.delete(n),this.referenceIndex.delete(n),this.globalScopeCache.clear()}}async updateContent(e,r=WF.CancellationToken.None){this.globalScopeCache.clear();let i=await this.serviceRegistry.getServices(e.uri).references.ScopeComputation.computeExports(e,r);for(let o of i)o.node=void 0;this.simpleIndex.set(e.uri.toString(),i),e.state=HF.DocumentState.IndexedContent}async updateReferences(e,r=WF.CancellationToken.None){let i=await this.serviceRegistry.getServices(e.uri).workspace.ReferenceDescriptionProvider.createDescriptions(e,r);this.referenceIndex.set(e.uri.toString(),i),e.state=HF.DocumentState.IndexedReferences}getAffectedDocuments(e){return this.langiumDocuments().all.filter(r=>{if(e.some(n=>(0,iC.equalURI)(r.uri,n)))return!1;for(let n of e)if(this.isAffected(r,n))return!0;return!1})}isAffected(e,r){let n=r.toString(),i=e.uri.toString();if(e.references.some(a=>a.error!==void 0))return!0;let o=this.referenceIndex.get(i);return o?o.filter(a=>!a.local).some(a=>(0,iC.equalURI)(a.targetUri,n)):!1}};om.DefaultIndexManager=oC});var cC=h(am=>{"use strict";Object.defineProperty(am,"__esModule",{value:!0});am.DefaultWorkspaceManager=void 0;var rhe=et(),sC=to(),nhe=Cn(),uC=class{constructor(e){this.serviceRegistry=e.ServiceRegistry,this.langiumDocuments=e.workspace.LangiumDocuments,this.documentBuilder=e.workspace.DocumentBuilder,this.fileSystemProvider=e.workspace.FileSystemProvider,this.mutex=e.workspace.MutexLock,e.lsp.LanguageServer.onInitialize(r=>{var n;this.folders=(n=r.workspaceFolders)!==null&&n!==void 0?n:void 0}),e.lsp.LanguageServer.onInitialized(r=>{this.mutex.lock(n=>{var i;return this.initializeWorkspace((i=this.folders)!==null&&i!==void 0?i:[],n)})})}async initializeWorkspace(e,r=rhe.CancellationToken.None){let n=this.serviceRegistry.all.flatMap(a=>a.LanguageMetaData.fileExtensions),i=[],o=a=>{i.push(a),this.langiumDocuments.hasDocument(a.uri)||this.langiumDocuments.addDocument(a)};await this.loadAdditionalDocuments(e,o),await Promise.all(e.map(a=>[a,this.getRootFolder(a)]).map(async a=>this.traverseFolder(...a,n,o))),await(0,nhe.interruptAndCheck)(r),await this.documentBuilder.build(i,void 0,r)}loadAdditionalDocuments(e,r){return Promise.resolve()}getRootFolder(e){return sC.URI.parse(e.uri)}async traverseFolder(e,r,n,i){let o=await this.fileSystemProvider.readDirectory(r);await Promise.all(o.map(async a=>{if(this.includeEntry(e,a,n)){if(a.isDirectory)await this.traverseFolder(e,a.uri,n,i);else if(a.isFile){let s=this.langiumDocuments.getOrCreateDocument(a.uri);i(s)}}}))}includeEntry(e,r,n){let i=sC.Utils.basename(r.uri);if(i.startsWith("."))return!1;if(r.isDirectory)return i!=="node_modules"&&i!=="out";if(r.isFile){let o=sC.Utils.extname(r.uri);return n.includes(o)}return!1}};am.DefaultWorkspaceManager=uC});var pC=h(Bi=>{"use strict";Object.defineProperty(Bi,"__esModule",{value:!0});Bi.isTokenTypeDictionary=Bi.isIMultiModeLexerDefinition=Bi.isTokenTypeArray=Bi.DefaultLexer=void 0;var ihe=za(),lC=class{constructor(e){let r=e.parser.TokenBuilder.buildTokens(e.Grammar,{caseInsensitive:e.LanguageMetaData.caseInsensitive});this.tokenTypes=this.toTokenTypeDictionary(r);let n=dC(r)?Object.values(r):r;this.chevrotainLexer=new ihe.Lexer(n)}get definition(){return this.tokenTypes}tokenize(e){var r;let n=this.chevrotainLexer.tokenize(e);return{tokens:n.tokens,errors:n.errors,hidden:(r=n.groups.hidden)!==null&&r!==void 0?r:[]}}toTokenTypeDictionary(e){if(dC(e))return e;let r=fC(e)?Object.values(e.modes).flat():e,n={};return r.forEach(i=>n[i.name]=i),n}};Bi.DefaultLexer=lC;function KF(t){return Array.isArray(t)&&(t.length===0||"name"in t[0])}Bi.isTokenTypeArray=KF;function fC(t){return t&&"modes"in t&&"defaultMode"in t}Bi.isIMultiModeLexerDefinition=fC;function dC(t){return!KF(t)&&!fC(t)}Bi.isTokenTypeDictionary=dC});var ep=h(Yu=>{"use strict";Object.defineProperty(Yu,"__esModule",{value:!0});Yu.createDefaultSharedModule=Yu.createDefaultModule=void 0;var ohe=et(),ahe=(ny(),bC(ry)),she=OE(),uhe=M$(),che=k_(),lhe=w_(),dhe=O_(),fhe=Cf(),phe=x_(),hhe=M_(),mhe=K_(),ghe=V_(),yhe=Y_(),vhe=_b(),_he=bb(),The=Ab(),Rhe=kb(),bhe=Ts(),Che=R_(),Phe=mf(),Ahe=yf(),She=Db(),Ehe=qb(),khe=Cn(),Nhe=Rf(),whe=xb(),BF=$b(),Dhe=V$(),Ohe=Zb(),qhe=rC(),VF=Vo(),Ihe=aC(),xhe=cC(),Lhe=pC();function Mhe(t){return{parser:{GrammarConfig:e=>(0,she.createGrammarConfig)(e),LangiumParser:e=>(0,vhe.createLangiumParser)(e),CompletionParser:e=>(0,uhe.createCompletionParser)(e),ValueConverter:()=>new The.DefaultValueConverter,TokenBuilder:()=>new _he.DefaultTokenBuilder,Lexer:e=>new Lhe.DefaultLexer(e)},lsp:{CompletionProvider:e=>new che.DefaultCompletionProvider(e),DocumentSymbolProvider:e=>new dhe.DefaultDocumentSymbolProvider(e),HoverProvider:e=>new hhe.MultilineCommentHoverProvider(e),FoldingRangeProvider:e=>new fhe.DefaultFoldingRangeProvider(e),ReferencesProvider:e=>new ghe.DefaultReferencesProvider(e),DefinitionProvider:e=>new phe.DefaultDefinitionProvider(e),DocumentHighlightProvider:e=>new lhe.DefaultDocumentHighlightProvider(e),RenameProvider:e=>new yhe.DefaultRenameProvider(e)},workspace:{AstNodeLocator:()=>new Dhe.DefaultAstNodeLocator,AstNodeDescriptionProvider:e=>new BF.DefaultAstNodeDescriptionProvider(e),ReferenceDescriptionProvider:e=>new BF.DefaultReferenceDescriptionProvider(e)},references:{Linker:e=>new Rhe.DefaultLinker(e),NameProvider:()=>new bhe.DefaultNameProvider,ScopeProvider:e=>new Ahe.DefaultScopeProvider(e),ScopeComputation:e=>new Phe.DefaultScopeComputation(e),References:e=>new Che.DefaultReferences(e)},serializer:{JsonSerializer:e=>new She.DefaultJsonSerializer(e)},validation:{DocumentValidator:e=>new Nhe.DefaultDocumentValidator(e),ValidationRegistry:e=>new whe.ValidationRegistry(e)},shared:()=>t.shared}}Yu.createDefaultModule=Mhe;function $he(t){return{ServiceRegistry:()=>new Ehe.DefaultServiceRegistry,lsp:{Connection:()=>t.connection,LanguageServer:e=>new mhe.DefaultLanguageServer(e)},workspace:{LangiumDocuments:e=>new VF.DefaultLangiumDocuments(e),LangiumDocumentFactory:e=>new VF.DefaultLangiumDocumentFactory(e),DocumentBuilder:e=>new qhe.DefaultDocumentBuilder(e),TextDocuments:()=>new ohe.TextDocuments(ahe.TextDocument),IndexManager:e=>new Ihe.DefaultIndexManager(e),WorkspaceManager:e=>new xhe.DefaultWorkspaceManager(e),FileSystemProvider:e=>t.fileSystemProvider(e),MutexLock:()=>new khe.MutexLock,ConfigurationProvider:e=>new Ohe.DefaultConfigurationProvider(e)}}}Yu.createDefaultSharedModule=$he});var hC=h(yn=>{"use strict";Object.defineProperty(yn,"__esModule",{value:!0});yn.findIndentation=yn.SNLE=yn.expandToString=yn.expandToStringWithNL=void 0;var Kl=ys();function Fhe(t,...e){return zF(t,...e)+Kl.EOL}yn.expandToStringWithNL=Fhe;function zF(t,...e){let r=e.reduce((a,s,u)=>{var d;return a+(s===void 0?yn.SNLE:Ghe((0,Kl.toString)(s),a))+((d=t[u+1])!==null&&d!==void 0?d:"")},t[0]).split(Kl.EOL).filter(a=>a.trim()!==yn.SNLE).map(a=>a.replace(yn.SNLE,"").trimRight());r=r.length>1&&r[0].trim().length===0?r.slice(1):r,r=r.length!==0&&r[r.length-1].trimRight().length===0?r.slice(0,r.length-1):r;let o=YF(r);return r.map(a=>a.slice(o).trimRight()).join(`
`)}yn.expandToString=zF;yn.SNLE=Object.freeze("__\xABSKIP^NEW^LINE^IF^EMPTY\xBB__");var jhe=new RegExp(Kl.EOL,"g"),Uhe=/\S|$/;function Ghe(t,e){let r=Math.max(0,e.length-e.lastIndexOf(`
`)-1),n=" ".repeat(r);return t.replace(jhe,Kl.EOL+n)}function YF(t){let e=t.filter(n=>n.length>0).map(n=>n.search(Uhe)),r=e.length===0?0:Math.min(...e);return Math.max(0,r)}yn.findIndentation=YF});var JF=h(Xu=>{"use strict";Object.defineProperty(Xu,"__esModule",{value:!0});Xu.joinToNode=Xu.expandToNode=void 0;var No=ys(),Whe=hC(),sm=Object.freeze(new No.NewLineNode),XF=Object.freeze(new No.CompositeGeneratorNode);function Hhe(t,...e){let r=Khe(t),n=Bhe(t,e,r);return Vhe(n)}Xu.expandToNode=Hhe;function Khe(t){let e=t.join("_").split(No.EOL),r=e.length>1&&e[0].trim().length===0,n=r&&e.length>1&&e[e.length-1].trim().length===0;if(e.length===1||e.length!==0&&e[0].trim().length!==0||e.length===2&&e[1].trim().length===0)return{indentation:0,omitFirstLine:r,omitLastLine:n,trimLastLine:e.length!==1&&e[e.length-1].trim().length===0};{let i=r?e.slice(1):e;i=n?i.slice(0,i.length-1):i,i=i.filter(a=>a.length!==0);let o=(0,Whe.findIndentation)(i);return{indentation:o,omitFirstLine:r,omitLastLine:n&&(e[e.length-1].length<o||!e[e.length-1].startsWith(i[0].substring(0,o)))}}}function Bhe(t,e,{indentation:r,omitFirstLine:n,omitLastLine:i,trimLastLine:o}){let a=[];t.forEach((d,p)=>{a.push(...d.split(No.EOL).map((m,y)=>y===0||m.length<r?m:m.substring(r)).reduce(p===0?(m,y,S)=>S===0?n?[]:[y]:S===1&&m.length===0?[y]:m.concat(sm,y):(m,y,S)=>S===0?[y]:m.concat(sm,y),[]).filter(m=>!(typeof m=="string"&&m.length===0)).concat((0,No.isGeneratorNode)(e[p])?e[p]:e[p]!==void 0?new No.CompositeGeneratorNode(String(e[p])):p<e.length?XF:[]))});let s=a.length,u=s!==0?a[s-1]:void 0;return(i||o)&&typeof u=="string"&&u.trim().length===0?n&&s!==1&&a[s-2]===sm?a.slice(0,s-2):a.slice(0,s-1):a}function Vhe(t){return t.reduce((r,n,i)=>n===XF?r:n===sm?{indent:"",node:i===0||(0,No.isNewLineNode)(t[i-1])||typeof t[i-1]=="string"?r.node.appendNewLine():r.node.appendNewLineIfNotEmpty()}:{indent:r.indent===""&&typeof n=="string"&&n.length!==0?"".padStart(n.length-n.trimLeft().length):r.indent,node:r.indent.length===0?r.node.append(n):r.node.indent(a=>a.append(n),r.indent)},{indent:"",node:new No.CompositeGeneratorNode}).node}function zhe(t,e=String,{prefix:r,suffix:n,appendNewLineIfNotEmpty:i}={}){return Yhe(t,(o,a,s,u)=>(o??(o=new No.CompositeGeneratorNode),o.append(r&&r(a,s,u)).append(e(a,s,u)).append(n&&n(a,s,u)).appendNewLineIfNotEmptyIf(!o.isEmpty()&&!!i)))}Xu.joinToNode=zhe;function Yhe(t,e,r){let n=t[Symbol.iterator](),i=n.next(),o=0,a=r;for(;!i.done;){let s=n.next();a=e(a,i.value,o,!!s.done),i=s,o++}return a}});var ZF=h(QF=>{"use strict";Object.defineProperty(QF,"__esModule",{value:!0})});var tj=h(ej=>{"use strict";Object.defineProperty(ej,"__esModule",{value:!0})});var nj=h(rj=>{"use strict";Object.defineProperty(rj,"__esModule",{value:!0})});var Bl=h(de=>{"use strict";var ij=de&&de.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var i=Object.getOwnPropertyDescriptor(e,r);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,i)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),Xhe=de&&de.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),Ae=de&&de.__exportStar||function(t,e){for(var r in t)r!=="default"&&!Object.prototype.hasOwnProperty.call(e,r)&&ij(e,t,r)},Jhe=de&&de.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var r in t)r!=="default"&&Object.prototype.hasOwnProperty.call(t,r)&&ij(e,t,r);return Xhe(e,t),e};Object.defineProperty(de,"__esModule",{value:!0});de.GrammarAST=de.expandToStringWithNL=de.expandToString=void 0;Ae(ep(),de);Ae(bc(),de);Ae(ys(),de);Ae(JF(),de);var oj=hC();Object.defineProperty(de,"expandToString",{enumerable:!0,get:function(){return oj.expandToString}});Object.defineProperty(de,"expandToStringWithNL",{enumerable:!0,get:function(){return oj.expandToStringWithNL}});Ae(My(),de);Ae(uT(),de);Ae(ZF(),de);Ae(J_(),de);Ae(xh(),de);Ae(_b(),de);Ae(tj(),de);Ae(bb(),de);Ae(Ab(),de);Ae(pC(),de);Ae(kb(),de);Ae(Ts(),de);Ae(mf(),de);Ae(yf(),de);Ae(Db(),de);Ae(qb(),de);Ae(nj(),de);Ae(Xr(),de);Ae(Ye(),de);Ae(cn(),de);Ae(pt(),de);Ae(Yt(),de);Ae(Cn(),de);Ae(lo(),de);Ae(Rs(),de);Ae(tr(),de);Ae(Rf(),de);Ae(xb(),de);Ae($b(),de);Ae(rC(),de);Ae(Vo(),de);Ae(aC(),de);Ae(cT(),de);Ae(cC(),de);Ae(Zb(),de);var Qhe=Jhe(Ke());de.GrammarAST=Qhe});var sj=h((APe,aj)=>{"use strict";aj.exports=et()});var mC=h(x=>{"use strict";Object.defineProperty(x,"__esModule",{value:!0});x.isService=x.Service=x.isServer=x.Server=x.isRoute=x.Route=x.isRequestParameter=x.RequestParameter=x.isRequestBody=x.RequestBody=x.isRepository=x.Repository=x.isRelationship=x.Relationship=x.isQuery=x.Query=x.isProject=x.Project=x.isPort=x.Port=x.isPath=x.Path=x.isParameter=x.Parameter=x.isOperation=x.Operation=x.isMethod=x.Method=x.isMetadata=x.Metadata=x.isLiteral=x.Literal=x.isHost=x.Host=x.isEnum=x.Enum=x.isEntity=x.Entity=x.isDatasource=x.Datasource=x.isDatabase=x.Database=x.isController=x.Controller=x.isConfiguration=x.Configuration=x.isAttribute=x.Attribute=x.isStructuralComponent=x.StructuralComponent=void 0;x.reflection=x.JgenAstReflection=void 0;var Zhe=Bl();x.StructuralComponent="StructuralComponent";function eme(t){return x.reflection.isInstance(t,x.StructuralComponent)}x.isStructuralComponent=eme;x.Attribute="Attribute";function tme(t){return x.reflection.isInstance(t,x.Attribute)}x.isAttribute=tme;x.Configuration="Configuration";function rme(t){return x.reflection.isInstance(t,x.Configuration)}x.isConfiguration=rme;x.Controller="Controller";function nme(t){return x.reflection.isInstance(t,x.Controller)}x.isController=nme;x.Database="Database";function ime(t){return x.reflection.isInstance(t,x.Database)}x.isDatabase=ime;x.Datasource="Datasource";function ome(t){return x.reflection.isInstance(t,x.Datasource)}x.isDatasource=ome;x.Entity="Entity";function ame(t){return x.reflection.isInstance(t,x.Entity)}x.isEntity=ame;x.Enum="Enum";function sme(t){return x.reflection.isInstance(t,x.Enum)}x.isEnum=sme;x.Host="Host";function ume(t){return x.reflection.isInstance(t,x.Host)}x.isHost=ume;x.Literal="Literal";function cme(t){return x.reflection.isInstance(t,x.Literal)}x.isLiteral=cme;x.Metadata="Metadata";function lme(t){return x.reflection.isInstance(t,x.Metadata)}x.isMetadata=lme;x.Method="Method";function dme(t){return x.reflection.isInstance(t,x.Method)}x.isMethod=dme;x.Operation="Operation";function fme(t){return x.reflection.isInstance(t,x.Operation)}x.isOperation=fme;x.Parameter="Parameter";function pme(t){return x.reflection.isInstance(t,x.Parameter)}x.isParameter=pme;x.Path="Path";function hme(t){return x.reflection.isInstance(t,x.Path)}x.isPath=hme;x.Port="Port";function mme(t){return x.reflection.isInstance(t,x.Port)}x.isPort=mme;x.Project="Project";function gme(t){return x.reflection.isInstance(t,x.Project)}x.isProject=gme;x.Query="Query";function yme(t){return x.reflection.isInstance(t,x.Query)}x.isQuery=yme;x.Relationship="Relationship";function vme(t){return x.reflection.isInstance(t,x.Relationship)}x.isRelationship=vme;x.Repository="Repository";function _me(t){return x.reflection.isInstance(t,x.Repository)}x.isRepository=_me;x.RequestBody="RequestBody";function Tme(t){return x.reflection.isInstance(t,x.RequestBody)}x.isRequestBody=Tme;x.RequestParameter="RequestParameter";function Rme(t){return x.reflection.isInstance(t,x.RequestParameter)}x.isRequestParameter=Rme;x.Route="Route";function bme(t){return x.reflection.isInstance(t,x.Route)}x.isRoute=bme;x.Server="Server";function Cme(t){return x.reflection.isInstance(t,x.Server)}x.isServer=Cme;x.Service="Service";function Pme(t){return x.reflection.isInstance(t,x.Service)}x.isService=Pme;var um=class extends Zhe.AbstractAstReflection{getAllTypes(){return["Attribute","Configuration","Controller","Database","Datasource","Entity","Enum","Host","Literal","Metadata","Method","Operation","Parameter","Path","Port","Project","Query","Relationship","Repository","RequestBody","RequestParameter","Route","Server","Service","StructuralComponent"]}computeIsSubtype(e,r){switch(e){case x.Controller:case x.Entity:case x.Enum:case x.Relationship:case x.Repository:case x.Service:return this.isSubtype(x.StructuralComponent,r);default:return!1}}getReferenceType(e){let r=`${e.container.$type}:${e.property}`;switch(r){case"Attribute:enumType":return x.Enum;case"Controller:entity":case"Relationship:from":case"Relationship:to":case"Repository:entity":case"Service:entity":return x.Entity;case"Controller:service":return x.Service;case"Service:repository":return x.Repository;default:throw new Error(`${r} is not a valid reference id.`)}}getTypeMetaData(e){switch(e){case"Attribute":return{name:"Attribute",mandatory:[{name:"nullable",type:"boolean"},{name:"primaryKey",type:"boolean"},{name:"unique",type:"boolean"}]};case"Controller":return{name:"Controller",mandatory:[{name:"routes",type:"array"}]};case"Entity":return{name:"Entity",mandatory:[{name:"attributes",type:"array"}]};case"Enum":return{name:"Enum",mandatory:[{name:"literals",type:"array"}]};case"Method":return{name:"Method",mandatory:[{name:"parameters",type:"array"}]};case"Parameter":return{name:"Parameter",mandatory:[{name:"required",type:"boolean"}]};case"Project":return{name:"Project",mandatory:[{name:"structuralComponents",type:"array"}]};case"Query":return{name:"Query",mandatory:[{name:"parameters",type:"array"}]};case"Repository":return{name:"Repository",mandatory:[{name:"queries",type:"array"}]};case"RequestBody":return{name:"RequestBody",mandatory:[{name:"parameters",type:"array"}]};case"RequestParameter":return{name:"RequestParameter",mandatory:[{name:"required",type:"boolean"}]};case"Route":return{name:"Route",mandatory:[{name:"requestParameters",type:"array"}]};case"Service":return{name:"Service",mandatory:[{name:"methods",type:"array"}]};default:return{name:e,mandatory:[]}}}};x.JgenAstReflection=um;x.reflection=new um});var uj=h(lm=>{"use strict";Object.defineProperty(lm,"__esModule",{value:!0});lm.JgenGrammar=void 0;var Ame=Bl(),cm,Sme=()=>cm??(cm=(0,Ame.loadGrammarFromJson)(`{
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
}`));lm.JgenGrammar=Sme});var cj=h(wo=>{"use strict";Object.defineProperty(wo,"__esModule",{value:!0});wo.JgenGeneratedModule=wo.JgenGeneratedSharedModule=wo.JgenLanguageMetaData=void 0;var Eme=mC(),kme=uj();wo.JgenLanguageMetaData={languageId:"jgen",fileExtensions:[".jgen"],caseInsensitive:!1};wo.JgenGeneratedSharedModule={AstReflection:()=>new Eme.JgenAstReflection};wo.JgenGeneratedModule={Grammar:()=>(0,kme.JgenGrammar)(),LanguageMetaData:()=>wo.JgenLanguageMetaData,parser:{}}});var lj=h(Ju=>{"use strict";Object.defineProperty(Ju,"__esModule",{value:!0});Ju.JgenValidator=Ju.registerValidationChecks=void 0;var Qa=mC(),Nme={OneToMany:["ManyToOne"],ManyToOne:["OneToMany"],ManyToMany:["ManyToMany"]};function wme(t){let e=t.validation.ValidationRegistry,r=t.validation.JgenValidator,n={Enum:(i,o)=>{r.checkStartsWithCapital(i,o),r.checkEnumLiterals(i,o)},Entity:(i,o)=>{r.checkStartsWithCapital(i,o),r.checkEntityAttributes(i,o)},Relationship:r.checkRelationship,Repository:r.checkRepository,Service:r.checkService,Controller:r.checkController,Project:r.checkProject};e.register(n,r)}Ju.registerValidationChecks=wme;var gC=class{checkStartsWithCapital(e,r){if(e.name){let n=e.name[0];n.toUpperCase()!==n&&r("warning","keyword should start with a capital.",{node:e,property:"name"})}}checkEntityAttributes(e,r){e.attributes.length===0&&r("error","Entity must contain at least one attribute.",{node:e,property:"name"})}checkEnumLiterals(e,r){e.literals.length===0&&r("error","Enum must contain at least one literal.",{node:e,property:"name"})}checkRelationship(e,r){e.from&&e.to&&e.from===e.to&&r("error","Relationship from and to the same entity.",{node:e,property:"type"})}checkRepository(e,r){e.queries.forEach(n=>{n.parameters.forEach(i=>{var o,a;!((o=e.entity.ref)===null||o===void 0)&&o.attributes.some(s=>s.name===i.attribute)||r("error",`Parameter attribute '${i.attribute}' not found in entity '${(a=e.entity.ref)===null||a===void 0?void 0:a.name}'.`,{node:i,property:"attribute"})})})}checkService(e,r){e.methods.forEach(n=>{n.parameters.forEach(i=>{var o,a;!((o=e.entity.ref)===null||o===void 0)&&o.attributes.some(s=>s.name===i.attribute)||r("error",`Parameter attribute '${i.attribute}' not found in entity '${(a=e.entity.ref)===null||a===void 0?void 0:a.name}'.`,{node:i,property:"attribute"})})})}checkController(e,r){e.routes.forEach(n=>{n.requestParameters.length>0&&n.requestParameters.forEach(i=>{var o,a;!((o=e.entity.ref)===null||o===void 0)&&o.attributes.some(s=>s.name===i.attribute)||r("error",`Parameter attribute '${i.attribute}' not found in entity '${(a=e.entity.ref)===null||a===void 0?void 0:a.name}'.`,{node:i,property:"attribute"})}),n.requestBody&&n.requestBody.parameters.forEach(i=>{var o,a;!((o=e.entity.ref)===null||o===void 0)&&o.attributes.some(s=>s.name===i.attribute)||r("error",`Parameter attribute '${i.attribute}' not found in entity '${(a=e.entity.ref)===null||a===void 0?void 0:a.name}'.`,{node:i,property:"attribute"})})})}checkProject(e,r){if(!(0,Qa.isProject)(e))throw new Error("Retrieve a non-model in validation");let n=new Set,i=new Set,o=[];e.structuralComponents.forEach(a=>{Dme(a)&&(i.has(a.name)&&r("error",`Enum has non-unique name '${a.name}'.`,{node:a,property:"name"}),i.add(a.name))}),e.structuralComponents.forEach(a=>{Ome(a)&&(n.has(a.name)&&r("error",`Entity has non-unique name '${a.name}'.`,{node:a,property:"name"}),n.add(a.name))}),e.structuralComponents.forEach(a=>{var s,u;if(qme(a)){let d=(s=a.from.ref)===null||s===void 0?void 0:s.name,p=(u=a.to.ref)===null||u===void 0?void 0:u.name,m=a.type;if(!d||!p){r("error",'Relationship must have both "from" and "to" entities defined.',{node:a,property:"type"});return}o.some(y=>y.from===d&&y.to===p&&y.type===m)&&r("error",`Duplicate relationship type '${m}' between '${d}' and '${p}'.`,{node:a,property:"type"}),o.some(y=>y.from===d&&y.to===p&&y.type!==m)&&r("warning",`Different relationship type '${m}' between '${d}' and '${p}'.`,{node:a,property:"type"}),o.some(y=>{var S;return y.from===p&&y.to===d&&!(!((S=Nme[y.type])===null||S===void 0)&&S.includes(m))})&&r("warning",`Invalid relationship type combination '${m}' between '${d}' and '${p}'.`,{node:a,property:"type"}),o.push({from:d,to:p,type:m})}})}};Ju.JgenValidator=gC;function Dme(t){return Qa.reflection.isInstance(t,Qa.Enum)}function Ome(t){return Qa.reflection.isInstance(t,Qa.Entity)}function qme(t){return Qa.reflection.isInstance(t,Qa.Relationship)}});var pj=h(Za=>{"use strict";Object.defineProperty(Za,"__esModule",{value:!0});Za.createJgenServices=Za.JgenModule=void 0;var dm=Bl(),dj=cj(),fj=lj();Za.JgenModule={validation:{JgenValidator:()=>new fj.JgenValidator}};function Ime(t){let e=(0,dm.inject)((0,dm.createDefaultSharedModule)(t),dj.JgenGeneratedSharedModule),r=(0,dm.inject)((0,dm.createDefaultModule)({shared:e}),dj.JgenGeneratedModule,Za.JgenModule);return e.ServiceRegistry.register(r),(0,fj.registerValidationChecks)(r),{shared:e,Jgen:r}}Za.createJgenServices=Ime});var Tj=h(ha=>{"use strict";Object.defineProperty(ha,"__esModule",{value:!0});ha.parseProjectToJgenNode=ha.parseJSONToJgenFormat=ha.parseJgenJson=void 0;var yj=["enum","entity","relationship","repository","service","controller","configuration"],st=0,vj;function yC(t){let e={};return yj.forEach(r=>{let n=(t.match(new RegExp(r,"g"))||[]).length;n>0&&(e[r]=n)}),e}function _j(t,e,r,n){let i=e.indexOf("//");i>0&&(e=e.slice(0,i).trim());let o=yC(vj),a=yj.filter(s=>e.includes(s));if(a.length>0)for(let s of a){let u;if(r!==""&&r===s?u=e.indexOf(r,n):r!==""?u=e.indexOf(r):u=e.indexOf(s),u>=0){let d=e.slice(0,u).trim(),p=e.slice(u).trim();if(t.push(d.trim().replace(/\s+/g," ")),Object.values(yC(p)).reduce((m,y)=>m+y,0)===1)t.push(p.trim().replace(/\s+/g," "));else if(Object.values(yC(p)).reduce((m,y)=>m+y,0)>1&&u>0&&(n++,p.trim()!=="")){let m=p.trim().replace(/\s+/g," ");_j(t,m,r===""?s:r,n)}}else(r!==""&&n===o[r]||Object.values(o).reduce((d,p)=>d+p,0)===1)&&t.push(e.trim().replace(/\s+/g," "))}else t.push(e.trim().replace(/\s+/g," "))}function xme(t){let e=t.split(`
`),r=[];for(let n of e)vj=n,_j(r,n,"",0);return r.join(`
`)}function hj(t,e){return{id:st++,name:t[e],value:t[e+2]}}function mj(t,e){let r={id:st++,name:t[e],type:t[e+2],primaryKey:!1,nullable:!1};return(t[e+3]==="primaryKey"||t[e+4]==="primaryKey")&&(r.primaryKey=!0),(t[e+3]==="nullable"||t[e+4]==="nullable")&&(r.nullable=!0),r}function gj(t,e){return{id:st++,name:t[e],type:t[e+1]==="type"?t[e+2]:"",parameters:[]}}function vC(t,e){return{id:st++,name:t[e],attribute:t[e+2]}}function Lme(t){st=0,t=xme(t.trim().replace(/\n\s+/g,`
`));let e={project:{id:0,name:"",entities:[],relationships:[],enums:[],repositories:[],services:[],controllers:[],configuration:{id:st++,metadata:{id:st++,buildTool:"",springVersion:"",group:"",artifact:"",name:"",description:"",package:"",packaging:"",javaVersion:0},datasource:{id:st++,type:"",host:"",port:0,database:""},server:{id:st++,host:"",port:0}}}},r=t.split(`
`).map(k=>k.trim()),n=null,i=null,o=null,a=null,s=null,u=null,d=null,p=null,m=!0,y=!0,S=!0,_=!0,w=!0;for(let k of r)if(y&&k.startsWith("service")?m=!1:(k.startsWith("entity")||k.startsWith("enum")||k.startsWith("relationship")||k.startsWith("controller")||k.startsWith("configuration"))&&(m=!0),k.startsWith("controller")?y=!1:(k.startsWith("entity")||k.startsWith("enum")||k.startsWith("relationship")||k.startsWith("repository")||k.startsWith("configuration"))&&(y=!0),k.startsWith("query")?S=!0:k.startsWith("configuration")&&(S=!1),k.startsWith("controller")?_=!0:k.startsWith("route")&&(_=!1),k.startsWith("datasource")?w=!1:k.startsWith("server")&&(w=!0),k.startsWith("project"))e.project.name=k.split("project ")[1].replace(":","").trim();else if(k.startsWith("enum")){let N=k.split("enum ")[1].trim().split(/\s+/);if(i={id:st++,name:N[0],literals:[]},e.project.enums.push({enum:i}),N.length>1)for(let C=2;C<N.length;C+=4){let E=hj(N,C);i.literals.push({literal:E})}}else if(k.startsWith("literal")){if(i){let N=k.split("literal ")[1].trim().split(" "),C=hj(N,0);i.literals.push({literal:C})}}else if(k.startsWith("entity")){let N=k.split("entity ")[1].replace(":","").trim().split(/\s+/);if(n={id:st++,name:N[0],attributes:[]},e.project.entities.push({entity:n}),N.length>1)for(let C=2;C<N.length;C+=4){let E=mj(N,C);E.primaryKey&&C++,E.nullable&&C++,n.attributes.push({attribute:E})}}else if(k.startsWith("attribute")){if(n){let N=k.split("attribute ")[1].trim().split(" "),C=mj(N,0);n.attributes.push({attribute:C})}}else if(k.startsWith("relationship")){let N=k.split("relationship ")[1].trim().split(" "),C={id:st++,from:N[2],to:N[4],type:N[0]};e.project.relationships.push({relationship:C})}else if(k.startsWith("repository")){if(m){let N=k.split("repository ")[1].trim().split(/\s+/);if(o={id:st++,name:N[0],entity:N[2],queries:[]},N.length>3){u={id:0,name:"",type:"",parameters:[]};for(let C=4;C<N.length;C+=4)if(N[C-1]==="query")u=gj(N,C);else if(N[C-1]==="parameter"){let E=vC(N,C);u.parameters.push({parameter:E}),(N[C+4]!=="parameter"&&C<N.length-8||!N[C+4])&&o.queries.push({query:u})}}e.project.repositories.push({repository:o})}else if(a){let N=k.split("repository ")[1].trim().split(" ");a.repository=N[0]}}else if(k.startsWith("query")){if(o){let N=k.split("query ")[1].trim().split(" ");if(u=gj(N,0),o.queries.push({query:u}),N.length>3)for(let C=4;C<N.length;C+=4){let E=vC(N,C);u.parameters.push({parameter:E})}}}else if(k.startsWith("type")){let N=k.split("type ")[1].trim().split(" ");u&&S?u.type=N[0]:e.project.configuration.datasource.type=N[0]}else if(k.startsWith("parameter")){if(m&&y){if(u){let N=k.split("parameter ")[1].trim().split(" "),C=vC(N,0);u.parameters.push({parameter:C})}}else if(m){if(p){let N=k.split("parameter ")[1].trim().split(" "),C={id:st++,name:N[0],attribute:N[2]};p.requestBody||(p.requestBody={id:st++,parameters:[]}),p.requestBody.parameters.push({parameter:C})}}else if(d){let N=k.split("parameter ")[1].trim().split(" "),C={id:st++,name:N[0],attribute:N[2]};d.parameters.push({parameter:C})}}else if(k.startsWith("service")){if(y){let N=k.split("service ")[1].split(" for "),C=N[0].trim(),E=N[1]?N[1].replace(":","").trim():"";a={id:st++,name:C,entity:E,repository:"",methods:[]},e.project.services.push({service:a})}else if(s){let N=k.split("service ")[1].trim().split(" ");s.service=N[0]}}else if(k.startsWith("method")){if(a){let N=k.split("method ")[1].trim().split(" ");d={id:st++,name:N[0],parameters:[]},a.methods.push({method:d})}}else if(k.startsWith("controller")){let N=k.split("controller ")[1].split(" for "),C=N[0].trim(),E=N[1]?N[1].replace(":","").trim():"";s={id:st++,name:C,path:"",entity:E,service:"",routes:[]},e.project.controllers.push({controller:s})}else if(k.startsWith("route")){if(s){let N=k.split("route ")[1].trim().split(" ");p={id:st++,name:N[0],path:"",operation:"",requestParameters:[],requestBody:null},s.routes.push({route:p})}}else if(k.startsWith("path")){let N=k.split("path ")[1].trim().split(" ");s&&_?s.path=N[0]:p&&(p.path=N[0])}else if(k.startsWith("operation")){if(p){let N=k.split("operation ")[1].trim().split(" ");p.operation=N[0]}}else if(k.startsWith("requestParameter")){if(p){let N=k.split("requestParameter ")[1].trim().split(" "),C={id:st++,name:N[0],attribute:N[2],isRequired:N.includes("required")};p.requestParameters.push({requestParameter:C})}}else k.startsWith("configuration")?e.project.configuration.id=st++:k.startsWith("metadata")?e.project.configuration.metadata.id=st++:k.startsWith("buildTool")?e.project.configuration.metadata.buildTool=k.split("buildTool ")[1].trim().split(" ")[0]:k.startsWith("springVersion")?e.project.configuration.metadata.springVersion=k.split("springVersion ")[1].trim().split(" ")[0]:k.startsWith("group")?e.project.configuration.metadata.group=k.split("group ")[1].trim().split(" ")[0]:k.startsWith("artifact")?e.project.configuration.metadata.artifact=k.split("artifact ")[1].trim().split(" ")[0]:k.startsWith("name")?e.project.configuration.metadata.name=k.split("name ")[1].trim().split(" ")[0]:k.startsWith("description")?e.project.configuration.metadata.description=k.split("description ")[1].trim().replace(/^"(.*)"$/,"$1"):k.startsWith("package")?e.project.configuration.metadata.package=k.split("package ")[1].trim().split(" ")[0]:k.startsWith("packaging")?e.project.configuration.metadata.packaging=k.split("packaging ")[1].trim().split(" ")[0]:k.startsWith("javaVersion")?e.project.configuration.metadata.javaVersion=parseInt(k.split("javaVersion ")[1].trim().split(" ")[0],10):k.startsWith("datasource")?e.project.configuration.datasource.id=st++:k.startsWith("server")?e.project.configuration.server.id=st++:k.startsWith("database")?e.project.configuration.datasource.database=k.split("database ")[1].trim().split(" ")[0]:k.startsWith("host")?w?e.project.configuration.server.host=k.split("host ")[1].trim().split(" ")[0]:e.project.configuration.datasource.host=k.split("host ")[1].trim().split(" ")[0]:k.startsWith("port")&&(e.project.configuration.server.id=st++,w?e.project.configuration.server.port=parseInt(k.split("port ")[1].trim().split(" ")[0],10):e.project.configuration.datasource.port=parseInt(k.split("port ")[1].trim().split(" ")[0],10));return e}ha.parseJgenJson=Lme;function Mme(t){let e=`
project ${t.project.name}

`;for(let n of t.project.enums){e+=`	enum ${n.enum.name}
`;for(let i of n.enum.literals)e+=`		literal ${i.literal.name} value ${i.literal.value}
`;e+=`
`}for(let n of t.project.entities){console.log("entity data",n),e+=`	entity ${n.entity.name}
`;for(let i of n.entity.attributes)e+=`		attribute ${i.attribute.name} type ${i.attribute.type}`,i.attribute.primaryKey&&(e+=" primaryKey"),i.attribute.nullable&&(e+=" nullable"),e+=`
`;e+=`
`}for(let n of t.project.relationships){let i=n.relationship;e+=`	relationship ${i.type} from ${i.from} to ${i.to}

`}for(let n of t.project.repositories){let i=n.repository;e+=`	repository ${i.name} for ${i.entity}
`;for(let o of i.queries){let a=o.query;e+=`		query ${a.name}
`,e+=`			type ${a.type}
`;for(let s of a.parameters){let u=s.parameter;e+=`			parameter ${u.name} is ${u.attribute}
`}}e+=`
`}for(let n of t.project.services){let i=n.service;e+=`	service ${i.name} for ${i.entity}
`,e+=`		repository ${i.repository}
`;for(let o of i.methods){let a=o.method;e+=`		method ${a.name}
`;for(let s of a.parameters){let u=s.parameter;e+=`			parameter ${u.name} is ${u.attribute}
`}}e+=`
`}for(let n of t.project.controllers){let i=n.controller;e+=`	controller ${i.name} for ${i.entity}
`,e+=`		path ${i.path}
`,e+=`		service ${i.service}
`;for(let o of i.routes){let a=o.route;if(e+=`		route ${a.name}
`,e+=`			path ${a.path}
`,e+=`			operation ${a.operation}
`,a.requestParameters)for(let s of a.requestParameters){let u=s.requestParameter;e+=`			requestParameter ${u.name} is ${u.attribute} ${u.isRequired?"required":""}
`}if(a.requestBody){e+=`			requestBody
`;for(let s of a.requestBody.parameters){let u=s.parameter;e+=`				parameter ${u.name} is ${u.attribute}
`}}}e+=`
`}let r=t.project.configuration;return e+=`	configuration
`,e+=`		metadata
`,e+=`			buildTool ${r.metadata.buildTool}
`,e+=`			springVersion ${r.metadata.springVersion}
`,e+=`			group ${r.metadata.group}
`,e+=`			artifact ${r.metadata.artifact}
`,e+=`			name ${r.metadata.name}
`,e+=`			description "${r.metadata.description}"
`,e+=`			package ${r.metadata.package}
`,e+=`			packaging ${r.metadata.packaging}
`,e+=`			javaVersion ${r.metadata.javaVersion}

`,e+=`		datasource
`,e+=`			type ${r.datasource.type}
`,e+=`			host ${r.datasource.host}
`,e+=`			port ${r.datasource.port}
`,e+=`			database ${r.datasource.database}

`,e+=`		server
`,e+=`			host ${r.server.host}
`,e+=`			port ${r.server.port}
`,e}ha.parseJSONToJgenFormat=Mme;function $me(t){return{project:{name:t.name,entities:t.structuralComponents.filter(r=>r.$type==="Entity").map(r=>({entity:Fme(r)})),relationships:t.structuralComponents.filter(r=>r.$type==="Relationship").map(r=>({relationship:Ume(r)})),enums:t.structuralComponents.filter(r=>r.$type==="Enum").map(r=>({enum:Gme(r)})),repositories:t.structuralComponents.filter(r=>r.$type==="Repository").map(r=>({repository:Hme(r)})),services:t.structuralComponents.filter(r=>r.$type==="Service").map(r=>({service:Bme(r)})),controllers:t.structuralComponents.filter(r=>r.$type==="Controller").map(r=>({controller:zme(r)})),configuration:Jme(t.configuration)}}}ha.parseProjectToJgenNode=$me;function Fme(t){return{name:t.name,attributes:t.attributes.map(e=>({attribute:jme(e)}))}}function jme(t){return{name:t.name,type:t.type||"",primaryKey:t.primaryKey||!1,nullable:t.nullable||!1}}function Ume(t){var e,r;return{from:((e=t.from.ref)===null||e===void 0?void 0:e.name)||"",to:((r=t.to.ref)===null||r===void 0?void 0:r.name)||"",type:t.type||""}}function Gme(t){return{name:t.name,literals:t.literals.map(e=>({literal:Wme(e)}))}}function Wme(t){return{name:t.name,value:t.value||""}}function Hme(t){var e;return{name:t.name,entity:((e=t.entity.ref)===null||e===void 0?void 0:e.name)||"",queries:t.queries.map(r=>({query:Kme(r)}))}}function Kme(t){return{name:t.name||"",type:t.type||"",parameters:t.parameters.map(e=>({parameter:_C(e)}))}}function _C(t){return{name:t.name||"",attribute:t.attribute||""}}function Bme(t){var e,r;return{name:t.name,entity:((e=t.entity.ref)===null||e===void 0?void 0:e.name)||"",repository:((r=t.repository.ref)===null||r===void 0?void 0:r.name)||"",methods:t.methods.map(n=>({method:Vme(n)}))}}function Vme(t){return{name:t.name,parameters:t.parameters.map(e=>({parameter:_C(e)}))}}function zme(t){var e,r;return{name:t.name,path:t.path||"",entity:((e=t.entity.ref)===null||e===void 0?void 0:e.name)||"",service:((r=t.service.ref)===null||r===void 0?void 0:r.name)||"",routes:t.routes.map(n=>({route:Yme(n)}))}}function Yme(t){var e,r;let n={name:t.name,path:t.path.name,operation:t.operation.name,requestParameters:t.requestParameters.map(i=>({requestParameter:Xme(i)}))};return t.requestBody!==void 0&&(n.requestBody={parameters:(r=(e=t.requestBody)===null||e===void 0?void 0:e.parameters)===null||r===void 0?void 0:r.map(i=>({parameter:_C(i)}))}),n}function Xme(t){return{name:t.name||"",attribute:t.attribute||"",isRequired:t.required}}function Jme(t){return{metadata:Qme(t.metadata),datasource:Zme(t.datasource),server:ege(t.server)}}function Qme(t){return{buildTool:t.tool||"",springVersion:t.springVersion||"",group:t.group||"",artifact:t.artifact||"",name:t.name||"",description:t.description||"",package:t.package||"",packaging:t.packaging||"",javaVersion:parseInt(t.javaVersion)||0}}function Zme(t){return{type:t.type||"",host:t.host.name||"",port:t.port.name||0,database:t.database.name||""}}function ege(t){return{host:t.host.name||"",port:t.port.name||0}}});var sge=h(Cj=>{Object.defineProperty(Cj,"__esModule",{value:!0});var RC=Bl(),Vl=sj(),tge=pj(),Rj=Tj(),rge=new Vl.BrowserMessageReader(self),nge=new Vl.BrowserMessageWriter(self),TC=(0,Vl.createConnection)(rge,nge),{shared:bj,Jgen:ige}=(0,tge.createJgenServices)(Object.assign({connection:TC},RC.EmptyFileSystem));(0,RC.startLanguageServer)(bj);var oge=new Vl.NotificationType("browser/DocumentChange"),age=new Vl.NotificationType("browser/InvalidChange"),OPe=ige.serializer.JsonSerializer;bj.workspace.DocumentBuilder.onBuildPhase(RC.DocumentState.Validated,t=>{var e,r;for(let n of t){let i=n.parseResult.value;n.diagnostics===void 0||n.diagnostics.filter(o=>o.severity===1).length===0?TC.sendNotification(oge,{uri:n.uri.toString(),content:(0,Rj.parseJSONToJgenFormat)((0,Rj.parseProjectToJgenNode)(i)),diagnostics:(e=n.diagnostics)!==null&&e!==void 0?e:[]}):TC.sendNotification(age,{uri:n.uri.toString(),content:"Invalide Changes",diagnostics:(r=n.diagnostics)!==null&&r!==void 0?r:[]})}})});sge();})();
