var hM=Object.defineProperty;var pM=(r,t,n)=>t in r?hM(r,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[t]=n;var Zt=(r,t,n)=>pM(r,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();function dx(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var kd={exports:{}},Qo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uv;function mM(){if(Uv)return Qo;Uv=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(a,o,c){var u=null;if(c!==void 0&&(u=""+c),o.key!==void 0&&(u=""+o.key),"key"in o){c={};for(var d in o)d!=="key"&&(c[d]=o[d])}else c=o;return o=c.ref,{$$typeof:r,type:a,key:u,ref:o!==void 0?o:null,props:c}}return Qo.Fragment=t,Qo.jsx=n,Qo.jsxs=n,Qo}var Lv;function gM(){return Lv||(Lv=1,kd.exports=mM()),kd.exports}var j=gM(),Xd={exports:{}},le={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nv;function vM(){if(Nv)return le;Nv=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),_=Symbol.iterator;function S(z){return z===null||typeof z!="object"?null:(z=_&&z[_]||z["@@iterator"],typeof z=="function"?z:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,M={};function x(z,it,Mt){this.props=z,this.context=it,this.refs=M,this.updater=Mt||E}x.prototype.isReactComponent={},x.prototype.setState=function(z,it){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,it,"setState")},x.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function N(){}N.prototype=x.prototype;function U(z,it,Mt){this.props=z,this.context=it,this.refs=M,this.updater=Mt||E}var T=U.prototype=new N;T.constructor=U,b(T,x.prototype),T.isPureReactComponent=!0;var W=Array.isArray;function B(){}var O={H:null,A:null,T:null,S:null},k=Object.prototype.hasOwnProperty;function D(z,it,Mt){var J=Mt.ref;return{$$typeof:r,type:z,key:it,ref:J!==void 0?J:null,props:Mt}}function C(z,it){return D(z.type,it,z.props)}function G(z){return typeof z=="object"&&z!==null&&z.$$typeof===r}function at(z){var it={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(Mt){return it[Mt]})}var tt=/\/+/g;function ct(z,it){return typeof z=="object"&&z!==null&&z.key!=null?at(""+z.key):it.toString(36)}function mt(z){switch(z.status){case"fulfilled":return z.value;case"rejected":throw z.reason;default:switch(typeof z.status=="string"?z.then(B,B):(z.status="pending",z.then(function(it){z.status==="pending"&&(z.status="fulfilled",z.value=it)},function(it){z.status==="pending"&&(z.status="rejected",z.reason=it)})),z.status){case"fulfilled":return z.value;case"rejected":throw z.reason}}throw z}function I(z,it,Mt,J,ht){var Q=typeof z;(Q==="undefined"||Q==="boolean")&&(z=null);var ut=!1;if(z===null)ut=!0;else switch(Q){case"bigint":case"string":case"number":ut=!0;break;case"object":switch(z.$$typeof){case r:case t:ut=!0;break;case g:return ut=z._init,I(ut(z._payload),it,Mt,J,ht)}}if(ut)return ht=ht(z),ut=J===""?"."+ct(z,0):J,W(ht)?(Mt="",ut!=null&&(Mt=ut.replace(tt,"$&/")+"/"),I(ht,it,Mt,"",function(Dt){return Dt})):ht!=null&&(G(ht)&&(ht=C(ht,Mt+(ht.key==null||z&&z.key===ht.key?"":(""+ht.key).replace(tt,"$&/")+"/")+ut)),it.push(ht)),1;ut=0;var St=J===""?".":J+":";if(W(z))for(var Tt=0;Tt<z.length;Tt++)J=z[Tt],Q=St+ct(J,Tt),ut+=I(J,it,Mt,Q,ht);else if(Tt=S(z),typeof Tt=="function")for(z=Tt.call(z),Tt=0;!(J=z.next()).done;)J=J.value,Q=St+ct(J,Tt++),ut+=I(J,it,Mt,Q,ht);else if(Q==="object"){if(typeof z.then=="function")return I(mt(z),it,Mt,J,ht);throw it=String(z),Error("Objects are not valid as a React child (found: "+(it==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":it)+"). If you meant to render a collection of children, use an array instead.")}return ut}function H(z,it,Mt){if(z==null)return z;var J=[],ht=0;return I(z,J,"","",function(Q){return it.call(Mt,Q,ht++)}),J}function V(z){if(z._status===-1){var it=z._result;it=it(),it.then(function(Mt){(z._status===0||z._status===-1)&&(z._status=1,z._result=Mt)},function(Mt){(z._status===0||z._status===-1)&&(z._status=2,z._result=Mt)}),z._status===-1&&(z._status=0,z._result=it)}if(z._status===1)return z._result.default;throw z._result}var _t=typeof reportError=="function"?reportError:function(z){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var it=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof z=="object"&&z!==null&&typeof z.message=="string"?String(z.message):String(z),error:z});if(!window.dispatchEvent(it))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",z);return}console.error(z)},bt={map:H,forEach:function(z,it,Mt){H(z,function(){it.apply(this,arguments)},Mt)},count:function(z){var it=0;return H(z,function(){it++}),it},toArray:function(z){return H(z,function(it){return it})||[]},only:function(z){if(!G(z))throw Error("React.Children.only expected to receive a single React element child.");return z}};return le.Activity=v,le.Children=bt,le.Component=x,le.Fragment=n,le.Profiler=o,le.PureComponent=U,le.StrictMode=a,le.Suspense=h,le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,le.__COMPILER_RUNTIME={__proto__:null,c:function(z){return O.H.useMemoCache(z)}},le.cache=function(z){return function(){return z.apply(null,arguments)}},le.cacheSignal=function(){return null},le.cloneElement=function(z,it,Mt){if(z==null)throw Error("The argument must be a React element, but you passed "+z+".");var J=b({},z.props),ht=z.key;if(it!=null)for(Q in it.key!==void 0&&(ht=""+it.key),it)!k.call(it,Q)||Q==="key"||Q==="__self"||Q==="__source"||Q==="ref"&&it.ref===void 0||(J[Q]=it[Q]);var Q=arguments.length-2;if(Q===1)J.children=Mt;else if(1<Q){for(var ut=Array(Q),St=0;St<Q;St++)ut[St]=arguments[St+2];J.children=ut}return D(z.type,ht,J)},le.createContext=function(z){return z={$$typeof:u,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null},z.Provider=z,z.Consumer={$$typeof:c,_context:z},z},le.createElement=function(z,it,Mt){var J,ht={},Q=null;if(it!=null)for(J in it.key!==void 0&&(Q=""+it.key),it)k.call(it,J)&&J!=="key"&&J!=="__self"&&J!=="__source"&&(ht[J]=it[J]);var ut=arguments.length-2;if(ut===1)ht.children=Mt;else if(1<ut){for(var St=Array(ut),Tt=0;Tt<ut;Tt++)St[Tt]=arguments[Tt+2];ht.children=St}if(z&&z.defaultProps)for(J in ut=z.defaultProps,ut)ht[J]===void 0&&(ht[J]=ut[J]);return D(z,Q,ht)},le.createRef=function(){return{current:null}},le.forwardRef=function(z){return{$$typeof:d,render:z}},le.isValidElement=G,le.lazy=function(z){return{$$typeof:g,_payload:{_status:-1,_result:z},_init:V}},le.memo=function(z,it){return{$$typeof:m,type:z,compare:it===void 0?null:it}},le.startTransition=function(z){var it=O.T,Mt={};O.T=Mt;try{var J=z(),ht=O.S;ht!==null&&ht(Mt,J),typeof J=="object"&&J!==null&&typeof J.then=="function"&&J.then(B,_t)}catch(Q){_t(Q)}finally{it!==null&&Mt.types!==null&&(it.types=Mt.types),O.T=it}},le.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},le.use=function(z){return O.H.use(z)},le.useActionState=function(z,it,Mt){return O.H.useActionState(z,it,Mt)},le.useCallback=function(z,it){return O.H.useCallback(z,it)},le.useContext=function(z){return O.H.useContext(z)},le.useDebugValue=function(){},le.useDeferredValue=function(z,it){return O.H.useDeferredValue(z,it)},le.useEffect=function(z,it){return O.H.useEffect(z,it)},le.useEffectEvent=function(z){return O.H.useEffectEvent(z)},le.useId=function(){return O.H.useId()},le.useImperativeHandle=function(z,it,Mt){return O.H.useImperativeHandle(z,it,Mt)},le.useInsertionEffect=function(z,it){return O.H.useInsertionEffect(z,it)},le.useLayoutEffect=function(z,it){return O.H.useLayoutEffect(z,it)},le.useMemo=function(z,it){return O.H.useMemo(z,it)},le.useOptimistic=function(z,it){return O.H.useOptimistic(z,it)},le.useReducer=function(z,it,Mt){return O.H.useReducer(z,it,Mt)},le.useRef=function(z){return O.H.useRef(z)},le.useState=function(z){return O.H.useState(z)},le.useSyncExternalStore=function(z,it,Mt){return O.H.useSyncExternalStore(z,it,Mt)},le.useTransition=function(){return O.H.useTransition()},le.version="19.2.5",le}var Ov;function wp(){return Ov||(Ov=1,Xd.exports=vM()),Xd.exports}var ne=wp();const _M=dx(ne);var jd={exports:{}},Jo={},Wd={exports:{}},qd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zv;function xM(){return zv||(zv=1,(function(r){function t(I,H){var V=I.length;I.push(H);t:for(;0<V;){var _t=V-1>>>1,bt=I[_t];if(0<o(bt,H))I[_t]=H,I[V]=bt,V=_t;else break t}}function n(I){return I.length===0?null:I[0]}function a(I){if(I.length===0)return null;var H=I[0],V=I.pop();if(V!==H){I[0]=V;t:for(var _t=0,bt=I.length,z=bt>>>1;_t<z;){var it=2*(_t+1)-1,Mt=I[it],J=it+1,ht=I[J];if(0>o(Mt,V))J<bt&&0>o(ht,Mt)?(I[_t]=ht,I[J]=V,_t=J):(I[_t]=Mt,I[it]=V,_t=it);else if(J<bt&&0>o(ht,V))I[_t]=ht,I[J]=V,_t=J;else break t}}return H}function o(I,H){var V=I.sortIndex-H.sortIndex;return V!==0?V:I.id-H.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var u=Date,d=u.now();r.unstable_now=function(){return u.now()-d}}var h=[],m=[],g=1,v=null,_=3,S=!1,E=!1,b=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function T(I){for(var H=n(m);H!==null;){if(H.callback===null)a(m);else if(H.startTime<=I)a(m),H.sortIndex=H.expirationTime,t(h,H);else break;H=n(m)}}function W(I){if(b=!1,T(I),!E)if(n(h)!==null)E=!0,B||(B=!0,at());else{var H=n(m);H!==null&&mt(W,H.startTime-I)}}var B=!1,O=-1,k=5,D=-1;function C(){return M?!0:!(r.unstable_now()-D<k)}function G(){if(M=!1,B){var I=r.unstable_now();D=I;var H=!0;try{t:{E=!1,b&&(b=!1,N(O),O=-1),S=!0;var V=_;try{e:{for(T(I),v=n(h);v!==null&&!(v.expirationTime>I&&C());){var _t=v.callback;if(typeof _t=="function"){v.callback=null,_=v.priorityLevel;var bt=_t(v.expirationTime<=I);if(I=r.unstable_now(),typeof bt=="function"){v.callback=bt,T(I),H=!0;break e}v===n(h)&&a(h),T(I)}else a(h);v=n(h)}if(v!==null)H=!0;else{var z=n(m);z!==null&&mt(W,z.startTime-I),H=!1}}break t}finally{v=null,_=V,S=!1}H=void 0}}finally{H?at():B=!1}}}var at;if(typeof U=="function")at=function(){U(G)};else if(typeof MessageChannel<"u"){var tt=new MessageChannel,ct=tt.port2;tt.port1.onmessage=G,at=function(){ct.postMessage(null)}}else at=function(){x(G,0)};function mt(I,H){O=x(function(){I(r.unstable_now())},H)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(I){I.callback=null},r.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<I?Math.floor(1e3/I):5},r.unstable_getCurrentPriorityLevel=function(){return _},r.unstable_next=function(I){switch(_){case 1:case 2:case 3:var H=3;break;default:H=_}var V=_;_=H;try{return I()}finally{_=V}},r.unstable_requestPaint=function(){M=!0},r.unstable_runWithPriority=function(I,H){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var V=_;_=I;try{return H()}finally{_=V}},r.unstable_scheduleCallback=function(I,H,V){var _t=r.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?_t+V:_t):V=_t,I){case 1:var bt=-1;break;case 2:bt=250;break;case 5:bt=1073741823;break;case 4:bt=1e4;break;default:bt=5e3}return bt=V+bt,I={id:g++,callback:H,priorityLevel:I,startTime:V,expirationTime:bt,sortIndex:-1},V>_t?(I.sortIndex=V,t(m,I),n(h)===null&&I===n(m)&&(b?(N(O),O=-1):b=!0,mt(W,V-_t))):(I.sortIndex=bt,t(h,I),E||S||(E=!0,B||(B=!0,at()))),I},r.unstable_shouldYield=C,r.unstable_wrapCallback=function(I){var H=_;return function(){var V=_;_=H;try{return I.apply(this,arguments)}finally{_=V}}}})(qd)),qd}var Pv;function yM(){return Pv||(Pv=1,Wd.exports=xM()),Wd.exports}var Yd={exports:{}},Nn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bv;function SM(){if(Bv)return Nn;Bv=1;var r=wp();function t(h){var m="https://react.dev/errors/"+h;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)m+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+h+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(h,m,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:v==null?null:""+v,children:h,containerInfo:m,implementation:g}}var u=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(h,m){if(h==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Nn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Nn.createPortal=function(h,m){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(t(299));return c(h,m,null,g)},Nn.flushSync=function(h){var m=u.T,g=a.p;try{if(u.T=null,a.p=2,h)return h()}finally{u.T=m,a.p=g,a.d.f()}},Nn.preconnect=function(h,m){typeof h=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,a.d.C(h,m))},Nn.prefetchDNS=function(h){typeof h=="string"&&a.d.D(h)},Nn.preinit=function(h,m){if(typeof h=="string"&&m&&typeof m.as=="string"){var g=m.as,v=d(g,m.crossOrigin),_=typeof m.integrity=="string"?m.integrity:void 0,S=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;g==="style"?a.d.S(h,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:v,integrity:_,fetchPriority:S}):g==="script"&&a.d.X(h,{crossOrigin:v,integrity:_,fetchPriority:S,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Nn.preinitModule=function(h,m){if(typeof h=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var g=d(m.as,m.crossOrigin);a.d.M(h,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&a.d.M(h)},Nn.preload=function(h,m){if(typeof h=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var g=m.as,v=d(g,m.crossOrigin);a.d.L(h,g,{crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Nn.preloadModule=function(h,m){if(typeof h=="string")if(m){var g=d(m.as,m.crossOrigin);a.d.m(h,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else a.d.m(h)},Nn.requestFormReset=function(h){a.d.r(h)},Nn.unstable_batchedUpdates=function(h,m){return h(m)},Nn.useFormState=function(h,m,g){return u.H.useFormState(h,m,g)},Nn.useFormStatus=function(){return u.H.useHostTransitionStatus()},Nn.version="19.2.5",Nn}var Iv;function MM(){if(Iv)return Yd.exports;Iv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Yd.exports=SM(),Yd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fv;function EM(){if(Fv)return Jo;Fv=1;var r=yM(),t=wp(),n=MM();function a(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var i=e,s=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(s=i.return),e=i.return;while(e)}return i.tag===3?s:null}function u(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function d(e){if(e.tag===31){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function h(e){if(c(e)!==e)throw Error(a(188))}function m(e){var i=e.alternate;if(!i){if(i=c(e),i===null)throw Error(a(188));return i!==e?null:e}for(var s=e,l=i;;){var f=s.return;if(f===null)break;var p=f.alternate;if(p===null){if(l=f.return,l!==null){s=l;continue}break}if(f.child===p.child){for(p=f.child;p;){if(p===s)return h(f),e;if(p===l)return h(f),i;p=p.sibling}throw Error(a(188))}if(s.return!==l.return)s=f,l=p;else{for(var y=!1,A=f.child;A;){if(A===s){y=!0,s=f,l=p;break}if(A===l){y=!0,l=f,s=p;break}A=A.sibling}if(!y){for(A=p.child;A;){if(A===s){y=!0,s=p,l=f;break}if(A===l){y=!0,l=p,s=f;break}A=A.sibling}if(!y)throw Error(a(189))}}if(s.alternate!==l)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?e:i}function g(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=g(e),i!==null)return i;e=e.sibling}return null}var v=Object.assign,_=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),N=Symbol.for("react.consumer"),U=Symbol.for("react.context"),T=Symbol.for("react.forward_ref"),W=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function at(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var tt=Symbol.for("react.client.reference");function ct(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===tt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case b:return"Fragment";case x:return"Profiler";case M:return"StrictMode";case W:return"Suspense";case B:return"SuspenseList";case D:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case U:return e.displayName||"Context";case N:return(e._context.displayName||"Context")+".Consumer";case T:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case O:return i=e.displayName||null,i!==null?i:ct(e.type)||"Memo";case k:i=e._payload,e=e._init;try{return ct(e(i))}catch{}}return null}var mt=Array.isArray,I=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V={pending:!1,data:null,method:null,action:null},_t=[],bt=-1;function z(e){return{current:e}}function it(e){0>bt||(e.current=_t[bt],_t[bt]=null,bt--)}function Mt(e,i){bt++,_t[bt]=e.current,e.current=i}var J=z(null),ht=z(null),Q=z(null),ut=z(null);function St(e,i){switch(Mt(Q,i),Mt(ht,e),Mt(J,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?tv(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=tv(i),e=ev(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}it(J),Mt(J,e)}function Tt(){it(J),it(ht),it(Q)}function Dt(e){e.memoizedState!==null&&Mt(ut,e);var i=J.current,s=ev(i,e.type);i!==s&&(Mt(ht,e),Mt(J,s))}function $t(e){ht.current===e&&(it(J),it(ht)),ut.current===e&&(it(ut),qo._currentValue=V)}var Qt,me;function q(e){if(Qt===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);Qt=i&&i[1]||"",me=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Qt+e+me}var Ne=!1;function oe(e,i){if(!e||Ne)return"";Ne=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var yt=function(){throw Error()};if(Object.defineProperty(yt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(yt,[])}catch(ft){var st=ft}Reflect.construct(e,[],yt)}else{try{yt.call()}catch(ft){st=ft}e.call(yt.prototype)}}else{try{throw Error()}catch(ft){st=ft}(yt=e())&&typeof yt.catch=="function"&&yt.catch(function(){})}}catch(ft){if(ft&&st&&typeof ft.stack=="string")return[ft.stack,st.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var p=l.DetermineComponentFrameRoot(),y=p[0],A=p[1];if(y&&A){var F=y.split(`
`),nt=A.split(`
`);for(f=l=0;l<F.length&&!F[l].includes("DetermineComponentFrameRoot");)l++;for(;f<nt.length&&!nt[f].includes("DetermineComponentFrameRoot");)f++;if(l===F.length||f===nt.length)for(l=F.length-1,f=nt.length-1;1<=l&&0<=f&&F[l]!==nt[f];)f--;for(;1<=l&&0<=f;l--,f--)if(F[l]!==nt[f]){if(l!==1||f!==1)do if(l--,f--,0>f||F[l]!==nt[f]){var pt=`
`+F[l].replace(" at new "," at ");return e.displayName&&pt.includes("<anonymous>")&&(pt=pt.replace("<anonymous>",e.displayName)),pt}while(1<=l&&0<=f);break}}}finally{Ne=!1,Error.prepareStackTrace=s}return(s=e?e.displayName||e.name:"")?q(s):""}function ue(e,i){switch(e.tag){case 26:case 27:case 5:return q(e.type);case 16:return q("Lazy");case 13:return e.child!==i&&i!==null?q("Suspense Fallback"):q("Suspense");case 19:return q("SuspenseList");case 0:case 15:return oe(e.type,!1);case 11:return oe(e.type.render,!1);case 1:return oe(e.type,!0);case 31:return q("Activity");default:return""}}function qt(e){try{var i="",s=null;do i+=ue(e,s),s=e,e=e.return;while(e);return i}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Ee=Object.prototype.hasOwnProperty,Yt=r.unstable_scheduleCallback,L=r.unstable_cancelCallback,w=r.unstable_shouldYield,rt=r.unstable_requestPaint,gt=r.unstable_now,At=r.unstable_getCurrentPriorityLevel,xt=r.unstable_ImmediatePriority,jt=r.unstable_UserBlockingPriority,zt=r.unstable_NormalPriority,It=r.unstable_LowPriority,ye=r.unstable_IdlePriority,Ct=r.log,Ft=r.unstable_setDisableYieldValue,Jt=null,Wt=null;function Bt(e){if(typeof Ct=="function"&&Ft(e),Wt&&typeof Wt.setStrictMode=="function")try{Wt.setStrictMode(Jt,e)}catch{}}var ie=Math.clz32?Math.clz32:Y,fe=Math.log,Ie=Math.LN2;function Y(e){return e>>>=0,e===0?32:31-(fe(e)/Ie|0)|0}var Ut=256,dt=262144,Et=4194304;function Lt(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Pt(e,i,s){var l=e.pendingLanes;if(l===0)return 0;var f=0,p=e.suspendedLanes,y=e.pingedLanes;e=e.warmLanes;var A=l&134217727;return A!==0?(l=A&~p,l!==0?f=Lt(l):(y&=A,y!==0?f=Lt(y):s||(s=A&~e,s!==0&&(f=Lt(s))))):(A=l&~p,A!==0?f=Lt(A):y!==0?f=Lt(y):s||(s=l&~e,s!==0&&(f=Lt(s)))),f===0?0:i!==0&&i!==f&&(i&p)===0&&(p=f&-f,s=i&-i,p>=s||p===32&&(s&4194048)!==0)?i:f}function ae(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function Ze(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fn(){var e=Et;return Et<<=1,(Et&62914560)===0&&(Et=4194304),e}function we(e){for(var i=[],s=0;31>s;s++)i.push(e);return i}function Sn(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Mi(e,i,s,l,f,p){var y=e.pendingLanes;e.pendingLanes=s,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=s,e.entangledLanes&=s,e.errorRecoveryDisabledLanes&=s,e.shellSuspendCounter=0;var A=e.entanglements,F=e.expirationTimes,nt=e.hiddenUpdates;for(s=y&~s;0<s;){var pt=31-ie(s),yt=1<<pt;A[pt]=0,F[pt]=-1;var st=nt[pt];if(st!==null)for(nt[pt]=null,pt=0;pt<st.length;pt++){var ft=st[pt];ft!==null&&(ft.lane&=-536870913)}s&=~yt}l!==0&&so(e,l,0),p!==0&&f===0&&e.tag!==0&&(e.suspendedLanes|=p&~(y&~i))}function so(e,i,s){e.pendingLanes|=i,e.suspendedLanes&=~i;var l=31-ie(i);e.entangledLanes|=i,e.entanglements[l]=e.entanglements[l]|1073741824|s&261930}function ro(e,i){var s=e.entangledLanes|=i;for(e=e.entanglements;s;){var l=31-ie(s),f=1<<l;f&i|e[l]&i&&(e[l]|=i),s&=~f}}function Ni(e,i){var s=i&-i;return s=(s&42)!==0?1:os(s),(s&(e.suspendedLanes|i))!==0?0:s}function os(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Gs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function oo(){var e=H.p;return e!==0?e:(e=window.event,e===void 0?32:bv(e.type))}function ls(e,i){var s=H.p;try{return H.p=e,i()}finally{H.p=s}}var Ei=Math.random().toString(36).slice(2),$e="__reactFiber$"+Ei,Mn="__reactProps$"+Ei,Wi="__reactContainer$"+Ei,lo="__reactEvents$"+Ei,Pu="__reactListeners$"+Ei,Bu="__reactHandles$"+Ei,R="__reactResources$"+Ei,Z="__reactMarker$"+Ei;function lt(e){delete e[$e],delete e[Mn],delete e[lo],delete e[Pu],delete e[Bu]}function ot(e){var i=e[$e];if(i)return i;for(var s=e.parentNode;s;){if(i=s[Wi]||s[$e]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(e=lv(e);e!==null;){if(s=e[$e])return s;e=lv(e)}return i}e=s,s=e.parentNode}return null}function K(e){if(e=e[$e]||e[Wi]){var i=e.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return e}return null}function wt(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(a(33))}function Nt(e){var i=e[R];return i||(i=e[R]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function Ot(e){e[Z]=!0}var Gt=new Set,se={};function ee(e,i){Ht(e,i),Ht(e+"Capture",i)}function Ht(e,i){for(se[e]=i,e=0;e<i.length;e++)Gt.add(i[e])}var Ae=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Oe={},Fe={};function Un(e){return Ee.call(Fe,e)?!0:Ee.call(Oe,e)?!1:Ae.test(e)?Fe[e]=!0:(Oe[e]=!0,!1)}function be(e,i,s){if(Un(i))if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+s)}}function kt(e,i,s){if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+s)}}function dn(e,i,s,l){if(l===null)e.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttributeNS(i,s,""+l)}}function ce(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Vn(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ta(e,i,s){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,i);if(!e.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,p=l.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return f.call(this)},set:function(y){s=""+y,p.call(this,y)}}),Object.defineProperty(e,i,{enumerable:l.enumerable}),{getValue:function(){return s},setValue:function(y){s=""+y},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function En(e){if(!e._valueTracker){var i=Vn(e)?"checked":"value";e._valueTracker=Ta(e,i,""+e[i])}}function Aa(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return e&&(l=Vn(e)?e.checked?"true":"false":e.value),e=l,e!==s?(i.setValue(e),!0):!1}function Le(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var li=/[\n"\\]/g;function vn(e){return e.replace(li,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Ln(e,i,s,l,f,p,y,A){e.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.type=y:e.removeAttribute("type"),i!=null?y==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+ce(i)):e.value!==""+ce(i)&&(e.value=""+ce(i)):y!=="submit"&&y!=="reset"||e.removeAttribute("value"),i!=null?ci(e,y,ce(i)):s!=null?ci(e,y,ce(s)):l!=null&&e.removeAttribute("value"),f==null&&p!=null&&(e.defaultChecked=!!p),f!=null&&(e.checked=f&&typeof f!="function"&&typeof f!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+ce(A):e.removeAttribute("name")}function bi(e,i,s,l,f,p,y,A){if(p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(e.type=p),i!=null||s!=null){if(!(p!=="submit"&&p!=="reset"||i!=null)){En(e);return}s=s!=null?""+ce(s):"",i=i!=null?""+ce(i):s,A||i===e.value||(e.value=i),e.defaultValue=i}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=A?e.checked:!!l,e.defaultChecked=!!l,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(e.name=y),En(e)}function ci(e,i,s){i==="number"&&Le(e.ownerDocument)===e||e.defaultValue===""+s||(e.defaultValue=""+s)}function qi(e,i,s,l){if(e=e.options,i){i={};for(var f=0;f<s.length;f++)i["$"+s[f]]=!0;for(s=0;s<e.length;s++)f=i.hasOwnProperty("$"+e[s].value),e[s].selected!==f&&(e[s].selected=f),f&&l&&(e[s].defaultSelected=!0)}else{for(s=""+ce(s),i=null,f=0;f<e.length;f++){if(e[f].value===s){e[f].selected=!0,l&&(e[f].defaultSelected=!0);return}i!==null||e[f].disabled||(i=e[f])}i!==null&&(i.selected=!0)}}function Zp(e,i,s){if(i!=null&&(i=""+ce(i),i!==e.value&&(e.value=i),s==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=s!=null?""+ce(s):""}function Kp(e,i,s,l){if(i==null){if(l!=null){if(s!=null)throw Error(a(92));if(mt(l)){if(1<l.length)throw Error(a(93));l=l[0]}s=l}s==null&&(s=""),i=s}s=ce(i),e.defaultValue=s,l=e.textContent,l===s&&l!==""&&l!==null&&(e.value=l),En(e)}function ks(e,i){if(i){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=i;return}}e.textContent=i}var ly=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Qp(e,i,s){var l=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":l?e.setProperty(i,s):typeof s!="number"||s===0||ly.has(i)?i==="float"?e.cssFloat=s:e[i]=(""+s).trim():e[i]=s+"px"}function Jp(e,i,s){if(i!=null&&typeof i!="object")throw Error(a(62));if(e=e.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var f in i)l=i[f],i.hasOwnProperty(f)&&s[f]!==l&&Qp(e,f,l)}else for(var p in i)i.hasOwnProperty(p)&&Qp(e,p,i[p])}function Iu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var cy=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),uy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function bl(e){return uy.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Yi(){}var Fu=null;function Hu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Xs=null,js=null;function $p(e){var i=K(e);if(i&&(e=i.stateNode)){var s=e[Mn]||null;t:switch(e=i.stateNode,i.type){case"input":if(Ln(e,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+vn(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==e&&l.form===e.form){var f=l[Mn]||null;if(!f)throw Error(a(90));Ln(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(i=0;i<s.length;i++)l=s[i],l.form===e.form&&Aa(l)}break t;case"textarea":Zp(e,s.value,s.defaultValue);break t;case"select":i=s.value,i!=null&&qi(e,!!s.multiple,i,!1)}}}var Vu=!1;function tm(e,i,s){if(Vu)return e(i,s);Vu=!0;try{var l=e(i);return l}finally{if(Vu=!1,(Xs!==null||js!==null)&&(fc(),Xs&&(i=Xs,e=js,js=Xs=null,$p(i),e)))for(i=0;i<e.length;i++)$p(e[i])}}function co(e,i){var s=e.stateNode;if(s===null)return null;var l=s[Mn]||null;if(l===null)return null;s=l[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break t;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(a(231,i,typeof s));return s}var Zi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gu=!1;if(Zi)try{var uo={};Object.defineProperty(uo,"passive",{get:function(){Gu=!0}}),window.addEventListener("test",uo,uo),window.removeEventListener("test",uo,uo)}catch{Gu=!1}var wa=null,ku=null,Tl=null;function em(){if(Tl)return Tl;var e,i=ku,s=i.length,l,f="value"in wa?wa.value:wa.textContent,p=f.length;for(e=0;e<s&&i[e]===f[e];e++);var y=s-e;for(l=1;l<=y&&i[s-l]===f[p-l];l++);return Tl=f.slice(e,1<l?1-l:void 0)}function Al(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function wl(){return!0}function nm(){return!1}function Gn(e){function i(s,l,f,p,y){this._reactName=s,this._targetInst=f,this.type=l,this.nativeEvent=p,this.target=y,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(s=e[A],this[A]=s?s(p):p[A]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?wl:nm,this.isPropagationStopped=nm,this}return v(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=wl)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=wl)},persist:function(){},isPersistent:wl}),i}var cs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Cl=Gn(cs),fo=v({},cs,{view:0,detail:0}),fy=Gn(fo),Xu,ju,ho,Rl=v({},fo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ho&&(ho&&e.type==="mousemove"?(Xu=e.screenX-ho.screenX,ju=e.screenY-ho.screenY):ju=Xu=0,ho=e),Xu)},movementY:function(e){return"movementY"in e?e.movementY:ju}}),im=Gn(Rl),dy=v({},Rl,{dataTransfer:0}),hy=Gn(dy),py=v({},fo,{relatedTarget:0}),Wu=Gn(py),my=v({},cs,{animationName:0,elapsedTime:0,pseudoElement:0}),gy=Gn(my),vy=v({},cs,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),_y=Gn(vy),xy=v({},cs,{data:0}),am=Gn(xy),yy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},My={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ey(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=My[e])?!!i[e]:!1}function qu(){return Ey}var by=v({},fo,{key:function(e){if(e.key){var i=yy[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=Al(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Sy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qu,charCode:function(e){return e.type==="keypress"?Al(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Al(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ty=Gn(by),Ay=v({},Rl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sm=Gn(Ay),wy=v({},fo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qu}),Cy=Gn(wy),Ry=v({},cs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Dy=Gn(Ry),Uy=v({},Rl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ly=Gn(Uy),Ny=v({},cs,{newState:0,oldState:0}),Oy=Gn(Ny),zy=[9,13,27,32],Yu=Zi&&"CompositionEvent"in window,po=null;Zi&&"documentMode"in document&&(po=document.documentMode);var Py=Zi&&"TextEvent"in window&&!po,rm=Zi&&(!Yu||po&&8<po&&11>=po),om=" ",lm=!1;function cm(e,i){switch(e){case"keyup":return zy.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function um(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ws=!1;function By(e,i){switch(e){case"compositionend":return um(i);case"keypress":return i.which!==32?null:(lm=!0,om);case"textInput":return e=i.data,e===om&&lm?null:e;default:return null}}function Iy(e,i){if(Ws)return e==="compositionend"||!Yu&&cm(e,i)?(e=em(),Tl=ku=wa=null,Ws=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return rm&&i.locale!=="ko"?null:i.data;default:return null}}var Fy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fm(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!Fy[e.type]:i==="textarea"}function dm(e,i,s,l){Xs?js?js.push(l):js=[l]:Xs=l,i=_c(i,"onChange"),0<i.length&&(s=new Cl("onChange","change",null,s,l),e.push({event:s,listeners:i}))}var mo=null,go=null;function Hy(e){Y0(e,0)}function Dl(e){var i=wt(e);if(Aa(i))return e}function hm(e,i){if(e==="change")return i}var pm=!1;if(Zi){var Zu;if(Zi){var Ku="oninput"in document;if(!Ku){var mm=document.createElement("div");mm.setAttribute("oninput","return;"),Ku=typeof mm.oninput=="function"}Zu=Ku}else Zu=!1;pm=Zu&&(!document.documentMode||9<document.documentMode)}function gm(){mo&&(mo.detachEvent("onpropertychange",vm),go=mo=null)}function vm(e){if(e.propertyName==="value"&&Dl(go)){var i=[];dm(i,go,e,Hu(e)),tm(Hy,i)}}function Vy(e,i,s){e==="focusin"?(gm(),mo=i,go=s,mo.attachEvent("onpropertychange",vm)):e==="focusout"&&gm()}function Gy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Dl(go)}function ky(e,i){if(e==="click")return Dl(i)}function Xy(e,i){if(e==="input"||e==="change")return Dl(i)}function jy(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var Kn=typeof Object.is=="function"?Object.is:jy;function vo(e,i){if(Kn(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var s=Object.keys(e),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var f=s[l];if(!Ee.call(i,f)||!Kn(e[f],i[f]))return!1}return!0}function _m(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function xm(e,i){var s=_m(e);e=0;for(var l;s;){if(s.nodeType===3){if(l=e+s.textContent.length,e<=i&&l>=i)return{node:s,offset:i-e};e=l}t:{for(;s;){if(s.nextSibling){s=s.nextSibling;break t}s=s.parentNode}s=void 0}s=_m(s)}}function ym(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?ym(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function Sm(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=Le(e.document);i instanceof e.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)e=i.contentWindow;else break;i=Le(e.document)}return i}function Qu(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var Wy=Zi&&"documentMode"in document&&11>=document.documentMode,qs=null,Ju=null,_o=null,$u=!1;function Mm(e,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;$u||qs==null||qs!==Le(l)||(l=qs,"selectionStart"in l&&Qu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),_o&&vo(_o,l)||(_o=l,l=_c(Ju,"onSelect"),0<l.length&&(i=new Cl("onSelect","select",null,i,s),e.push({event:i,listeners:l}),i.target=qs)))}function us(e,i){var s={};return s[e.toLowerCase()]=i.toLowerCase(),s["Webkit"+e]="webkit"+i,s["Moz"+e]="moz"+i,s}var Ys={animationend:us("Animation","AnimationEnd"),animationiteration:us("Animation","AnimationIteration"),animationstart:us("Animation","AnimationStart"),transitionrun:us("Transition","TransitionRun"),transitionstart:us("Transition","TransitionStart"),transitioncancel:us("Transition","TransitionCancel"),transitionend:us("Transition","TransitionEnd")},tf={},Em={};Zi&&(Em=document.createElement("div").style,"AnimationEvent"in window||(delete Ys.animationend.animation,delete Ys.animationiteration.animation,delete Ys.animationstart.animation),"TransitionEvent"in window||delete Ys.transitionend.transition);function fs(e){if(tf[e])return tf[e];if(!Ys[e])return e;var i=Ys[e],s;for(s in i)if(i.hasOwnProperty(s)&&s in Em)return tf[e]=i[s];return e}var bm=fs("animationend"),Tm=fs("animationiteration"),Am=fs("animationstart"),qy=fs("transitionrun"),Yy=fs("transitionstart"),Zy=fs("transitioncancel"),wm=fs("transitionend"),Cm=new Map,ef="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ef.push("scrollEnd");function Ti(e,i){Cm.set(e,i),ee(i,[e])}var Ul=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ui=[],Zs=0,nf=0;function Ll(){for(var e=Zs,i=nf=Zs=0;i<e;){var s=ui[i];ui[i++]=null;var l=ui[i];ui[i++]=null;var f=ui[i];ui[i++]=null;var p=ui[i];if(ui[i++]=null,l!==null&&f!==null){var y=l.pending;y===null?f.next=f:(f.next=y.next,y.next=f),l.pending=f}p!==0&&Rm(s,f,p)}}function Nl(e,i,s,l){ui[Zs++]=e,ui[Zs++]=i,ui[Zs++]=s,ui[Zs++]=l,nf|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function af(e,i,s,l){return Nl(e,i,s,l),Ol(e)}function ds(e,i){return Nl(e,null,null,i),Ol(e)}function Rm(e,i,s){e.lanes|=s;var l=e.alternate;l!==null&&(l.lanes|=s);for(var f=!1,p=e.return;p!==null;)p.childLanes|=s,l=p.alternate,l!==null&&(l.childLanes|=s),p.tag===22&&(e=p.stateNode,e===null||e._visibility&1||(f=!0)),e=p,p=p.return;return e.tag===3?(p=e.stateNode,f&&i!==null&&(f=31-ie(s),e=p.hiddenUpdates,l=e[f],l===null?e[f]=[i]:l.push(i),i.lane=s|536870912),p):null}function Ol(e){if(50<Ho)throw Ho=0,hd=null,Error(a(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var Ks={};function Ky(e,i,s,l){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qn(e,i,s,l){return new Ky(e,i,s,l)}function sf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ki(e,i){var s=e.alternate;return s===null?(s=Qn(e.tag,i,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=i,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&65011712,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,i=e.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s.refCleanup=e.refCleanup,s}function Dm(e,i){e.flags&=65011714;var s=e.alternate;return s===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=s.childLanes,e.lanes=s.lanes,e.child=s.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=s.memoizedProps,e.memoizedState=s.memoizedState,e.updateQueue=s.updateQueue,e.type=s.type,i=s.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function zl(e,i,s,l,f,p){var y=0;if(l=e,typeof e=="function")sf(e)&&(y=1);else if(typeof e=="string")y=eM(e,s,J.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case D:return e=Qn(31,s,i,f),e.elementType=D,e.lanes=p,e;case b:return hs(s.children,f,p,i);case M:y=8,f|=24;break;case x:return e=Qn(12,s,i,f|2),e.elementType=x,e.lanes=p,e;case W:return e=Qn(13,s,i,f),e.elementType=W,e.lanes=p,e;case B:return e=Qn(19,s,i,f),e.elementType=B,e.lanes=p,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case U:y=10;break t;case N:y=9;break t;case T:y=11;break t;case O:y=14;break t;case k:y=16,l=null;break t}y=29,s=Error(a(130,e===null?"null":typeof e,"")),l=null}return i=Qn(y,s,i,f),i.elementType=e,i.type=l,i.lanes=p,i}function hs(e,i,s,l){return e=Qn(7,e,l,i),e.lanes=s,e}function rf(e,i,s){return e=Qn(6,e,null,i),e.lanes=s,e}function Um(e){var i=Qn(18,null,null,0);return i.stateNode=e,i}function of(e,i,s){return i=Qn(4,e.children!==null?e.children:[],e.key,i),i.lanes=s,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var Lm=new WeakMap;function fi(e,i){if(typeof e=="object"&&e!==null){var s=Lm.get(e);return s!==void 0?s:(i={value:e,source:i,stack:qt(i)},Lm.set(e,i),i)}return{value:e,source:i,stack:qt(i)}}var Qs=[],Js=0,Pl=null,xo=0,di=[],hi=0,Ca=null,Oi=1,zi="";function Qi(e,i){Qs[Js++]=xo,Qs[Js++]=Pl,Pl=e,xo=i}function Nm(e,i,s){di[hi++]=Oi,di[hi++]=zi,di[hi++]=Ca,Ca=e;var l=Oi;e=zi;var f=32-ie(l)-1;l&=~(1<<f),s+=1;var p=32-ie(i)+f;if(30<p){var y=f-f%5;p=(l&(1<<y)-1).toString(32),l>>=y,f-=y,Oi=1<<32-ie(i)+f|s<<f|l,zi=p+e}else Oi=1<<p|s<<f|l,zi=e}function lf(e){e.return!==null&&(Qi(e,1),Nm(e,1,0))}function cf(e){for(;e===Pl;)Pl=Qs[--Js],Qs[Js]=null,xo=Qs[--Js],Qs[Js]=null;for(;e===Ca;)Ca=di[--hi],di[hi]=null,zi=di[--hi],di[hi]=null,Oi=di[--hi],di[hi]=null}function Om(e,i){di[hi++]=Oi,di[hi++]=zi,di[hi++]=Ca,Oi=i.id,zi=i.overflow,Ca=e}var bn=null,qe=null,Te=!1,Ra=null,pi=!1,uf=Error(a(519));function Da(e){var i=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw yo(fi(i,e)),uf}function zm(e){var i=e.stateNode,s=e.type,l=e.memoizedProps;switch(i[$e]=e,i[Mn]=l,s){case"dialog":xe("cancel",i),xe("close",i);break;case"iframe":case"object":case"embed":xe("load",i);break;case"video":case"audio":for(s=0;s<Go.length;s++)xe(Go[s],i);break;case"source":xe("error",i);break;case"img":case"image":case"link":xe("error",i),xe("load",i);break;case"details":xe("toggle",i);break;case"input":xe("invalid",i),bi(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":xe("invalid",i);break;case"textarea":xe("invalid",i),Kp(i,l.value,l.defaultValue,l.children)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||l.suppressHydrationWarning===!0||J0(i.textContent,s)?(l.popover!=null&&(xe("beforetoggle",i),xe("toggle",i)),l.onScroll!=null&&xe("scroll",i),l.onScrollEnd!=null&&xe("scrollend",i),l.onClick!=null&&(i.onclick=Yi),i=!0):i=!1,i||Da(e,!0)}function Pm(e){for(bn=e.return;bn;)switch(bn.tag){case 5:case 31:case 13:pi=!1;return;case 27:case 3:pi=!0;return;default:bn=bn.return}}function $s(e){if(e!==bn)return!1;if(!Te)return Pm(e),Te=!0,!1;var i=e.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=e.type,s=!(s!=="form"&&s!=="button")||Cd(e.type,e.memoizedProps)),s=!s),s&&qe&&Da(e),Pm(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));qe=ov(e)}else if(i===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));qe=ov(e)}else i===27?(i=qe,Xa(e.type)?(e=Nd,Nd=null,qe=e):qe=i):qe=bn?gi(e.stateNode.nextSibling):null;return!0}function ps(){qe=bn=null,Te=!1}function ff(){var e=Ra;return e!==null&&(Wn===null?Wn=e:Wn.push.apply(Wn,e),Ra=null),e}function yo(e){Ra===null?Ra=[e]:Ra.push(e)}var df=z(null),ms=null,Ji=null;function Ua(e,i,s){Mt(df,i._currentValue),i._currentValue=s}function $i(e){e._currentValue=df.current,it(df)}function hf(e,i,s){for(;e!==null;){var l=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),e===s)break;e=e.return}}function pf(e,i,s,l){var f=e.child;for(f!==null&&(f.return=e);f!==null;){var p=f.dependencies;if(p!==null){var y=f.child;p=p.firstContext;t:for(;p!==null;){var A=p;p=f;for(var F=0;F<i.length;F++)if(A.context===i[F]){p.lanes|=s,A=p.alternate,A!==null&&(A.lanes|=s),hf(p.return,s,e),l||(y=null);break t}p=A.next}}else if(f.tag===18){if(y=f.return,y===null)throw Error(a(341));y.lanes|=s,p=y.alternate,p!==null&&(p.lanes|=s),hf(y,s,e),y=null}else y=f.child;if(y!==null)y.return=f;else for(y=f;y!==null;){if(y===e){y=null;break}if(f=y.sibling,f!==null){f.return=y.return,y=f;break}y=y.return}f=y}}function tr(e,i,s,l){e=null;for(var f=i,p=!1;f!==null;){if(!p){if((f.flags&524288)!==0)p=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var y=f.alternate;if(y===null)throw Error(a(387));if(y=y.memoizedProps,y!==null){var A=f.type;Kn(f.pendingProps.value,y.value)||(e!==null?e.push(A):e=[A])}}else if(f===ut.current){if(y=f.alternate,y===null)throw Error(a(387));y.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(e!==null?e.push(qo):e=[qo])}f=f.return}e!==null&&pf(i,e,s,l),i.flags|=262144}function Bl(e){for(e=e.firstContext;e!==null;){if(!Kn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function gs(e){ms=e,Ji=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Tn(e){return Bm(ms,e)}function Il(e,i){return ms===null&&gs(e),Bm(e,i)}function Bm(e,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},Ji===null){if(e===null)throw Error(a(308));Ji=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else Ji=Ji.next=i;return s}var Qy=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(s,l){e.push(l)}};this.abort=function(){i.aborted=!0,e.forEach(function(s){return s()})}},Jy=r.unstable_scheduleCallback,$y=r.unstable_NormalPriority,rn={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function mf(){return{controller:new Qy,data:new Map,refCount:0}}function So(e){e.refCount--,e.refCount===0&&Jy($y,function(){e.controller.abort()})}var Mo=null,gf=0,er=0,nr=null;function tS(e,i){if(Mo===null){var s=Mo=[];gf=0,er=xd(),nr={status:"pending",value:void 0,then:function(l){s.push(l)}}}return gf++,i.then(Im,Im),i}function Im(){if(--gf===0&&Mo!==null){nr!==null&&(nr.status="fulfilled");var e=Mo;Mo=null,er=0,nr=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function eS(e,i){var s=[],l={status:"pending",value:null,reason:null,then:function(f){s.push(f)}};return e.then(function(){l.status="fulfilled",l.value=i;for(var f=0;f<s.length;f++)(0,s[f])(i)},function(f){for(l.status="rejected",l.reason=f,f=0;f<s.length;f++)(0,s[f])(void 0)}),l}var Fm=I.S;I.S=function(e,i){M0=gt(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&tS(e,i),Fm!==null&&Fm(e,i)};var vs=z(null);function vf(){var e=vs.current;return e!==null?e:Xe.pooledCache}function Fl(e,i){i===null?Mt(vs,vs.current):Mt(vs,i.pool)}function Hm(){var e=vf();return e===null?null:{parent:rn._currentValue,pool:e}}var ir=Error(a(460)),_f=Error(a(474)),Hl=Error(a(542)),Vl={then:function(){}};function Vm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Gm(e,i,s){switch(s=e[s],s===void 0?e.push(i):s!==i&&(i.then(Yi,Yi),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,Xm(e),e;default:if(typeof i.status=="string")i.then(Yi,Yi);else{if(e=Xe,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=i,e.status="pending",e.then(function(l){if(i.status==="pending"){var f=i;f.status="fulfilled",f.value=l}},function(l){if(i.status==="pending"){var f=i;f.status="rejected",f.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,Xm(e),e}throw xs=i,ir}}function _s(e){try{var i=e._init;return i(e._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(xs=s,ir):s}}var xs=null;function km(){if(xs===null)throw Error(a(459));var e=xs;return xs=null,e}function Xm(e){if(e===ir||e===Hl)throw Error(a(483))}var ar=null,Eo=0;function Gl(e){var i=Eo;return Eo+=1,ar===null&&(ar=[]),Gm(ar,e,i)}function bo(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function kl(e,i){throw i.$$typeof===_?Error(a(525)):(e=Object.prototype.toString.call(i),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function jm(e){function i($,X){if(e){var et=$.deletions;et===null?($.deletions=[X],$.flags|=16):et.push(X)}}function s($,X){if(!e)return null;for(;X!==null;)i($,X),X=X.sibling;return null}function l($){for(var X=new Map;$!==null;)$.key!==null?X.set($.key,$):X.set($.index,$),$=$.sibling;return X}function f($,X){return $=Ki($,X),$.index=0,$.sibling=null,$}function p($,X,et){return $.index=et,e?(et=$.alternate,et!==null?(et=et.index,et<X?($.flags|=67108866,X):et):($.flags|=67108866,X)):($.flags|=1048576,X)}function y($){return e&&$.alternate===null&&($.flags|=67108866),$}function A($,X,et,vt){return X===null||X.tag!==6?(X=rf(et,$.mode,vt),X.return=$,X):(X=f(X,et),X.return=$,X)}function F($,X,et,vt){var Kt=et.type;return Kt===b?pt($,X,et.props.children,vt,et.key):X!==null&&(X.elementType===Kt||typeof Kt=="object"&&Kt!==null&&Kt.$$typeof===k&&_s(Kt)===X.type)?(X=f(X,et.props),bo(X,et),X.return=$,X):(X=zl(et.type,et.key,et.props,null,$.mode,vt),bo(X,et),X.return=$,X)}function nt($,X,et,vt){return X===null||X.tag!==4||X.stateNode.containerInfo!==et.containerInfo||X.stateNode.implementation!==et.implementation?(X=of(et,$.mode,vt),X.return=$,X):(X=f(X,et.children||[]),X.return=$,X)}function pt($,X,et,vt,Kt){return X===null||X.tag!==7?(X=hs(et,$.mode,vt,Kt),X.return=$,X):(X=f(X,et),X.return=$,X)}function yt($,X,et){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=rf(""+X,$.mode,et),X.return=$,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case S:return et=zl(X.type,X.key,X.props,null,$.mode,et),bo(et,X),et.return=$,et;case E:return X=of(X,$.mode,et),X.return=$,X;case k:return X=_s(X),yt($,X,et)}if(mt(X)||at(X))return X=hs(X,$.mode,et,null),X.return=$,X;if(typeof X.then=="function")return yt($,Gl(X),et);if(X.$$typeof===U)return yt($,Il($,X),et);kl($,X)}return null}function st($,X,et,vt){var Kt=X!==null?X.key:null;if(typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint")return Kt!==null?null:A($,X,""+et,vt);if(typeof et=="object"&&et!==null){switch(et.$$typeof){case S:return et.key===Kt?F($,X,et,vt):null;case E:return et.key===Kt?nt($,X,et,vt):null;case k:return et=_s(et),st($,X,et,vt)}if(mt(et)||at(et))return Kt!==null?null:pt($,X,et,vt,null);if(typeof et.then=="function")return st($,X,Gl(et),vt);if(et.$$typeof===U)return st($,X,Il($,et),vt);kl($,et)}return null}function ft($,X,et,vt,Kt){if(typeof vt=="string"&&vt!==""||typeof vt=="number"||typeof vt=="bigint")return $=$.get(et)||null,A(X,$,""+vt,Kt);if(typeof vt=="object"&&vt!==null){switch(vt.$$typeof){case S:return $=$.get(vt.key===null?et:vt.key)||null,F(X,$,vt,Kt);case E:return $=$.get(vt.key===null?et:vt.key)||null,nt(X,$,vt,Kt);case k:return vt=_s(vt),ft($,X,et,vt,Kt)}if(mt(vt)||at(vt))return $=$.get(et)||null,pt(X,$,vt,Kt,null);if(typeof vt.then=="function")return ft($,X,et,Gl(vt),Kt);if(vt.$$typeof===U)return ft($,X,et,Il(X,vt),Kt);kl(X,vt)}return null}function Vt($,X,et,vt){for(var Kt=null,Re=null,Xt=X,he=X=0,Me=null;Xt!==null&&he<et.length;he++){Xt.index>he?(Me=Xt,Xt=null):Me=Xt.sibling;var De=st($,Xt,et[he],vt);if(De===null){Xt===null&&(Xt=Me);break}e&&Xt&&De.alternate===null&&i($,Xt),X=p(De,X,he),Re===null?Kt=De:Re.sibling=De,Re=De,Xt=Me}if(he===et.length)return s($,Xt),Te&&Qi($,he),Kt;if(Xt===null){for(;he<et.length;he++)Xt=yt($,et[he],vt),Xt!==null&&(X=p(Xt,X,he),Re===null?Kt=Xt:Re.sibling=Xt,Re=Xt);return Te&&Qi($,he),Kt}for(Xt=l(Xt);he<et.length;he++)Me=ft(Xt,$,he,et[he],vt),Me!==null&&(e&&Me.alternate!==null&&Xt.delete(Me.key===null?he:Me.key),X=p(Me,X,he),Re===null?Kt=Me:Re.sibling=Me,Re=Me);return e&&Xt.forEach(function(Za){return i($,Za)}),Te&&Qi($,he),Kt}function te($,X,et,vt){if(et==null)throw Error(a(151));for(var Kt=null,Re=null,Xt=X,he=X=0,Me=null,De=et.next();Xt!==null&&!De.done;he++,De=et.next()){Xt.index>he?(Me=Xt,Xt=null):Me=Xt.sibling;var Za=st($,Xt,De.value,vt);if(Za===null){Xt===null&&(Xt=Me);break}e&&Xt&&Za.alternate===null&&i($,Xt),X=p(Za,X,he),Re===null?Kt=Za:Re.sibling=Za,Re=Za,Xt=Me}if(De.done)return s($,Xt),Te&&Qi($,he),Kt;if(Xt===null){for(;!De.done;he++,De=et.next())De=yt($,De.value,vt),De!==null&&(X=p(De,X,he),Re===null?Kt=De:Re.sibling=De,Re=De);return Te&&Qi($,he),Kt}for(Xt=l(Xt);!De.done;he++,De=et.next())De=ft(Xt,$,he,De.value,vt),De!==null&&(e&&De.alternate!==null&&Xt.delete(De.key===null?he:De.key),X=p(De,X,he),Re===null?Kt=De:Re.sibling=De,Re=De);return e&&Xt.forEach(function(dM){return i($,dM)}),Te&&Qi($,he),Kt}function Ge($,X,et,vt){if(typeof et=="object"&&et!==null&&et.type===b&&et.key===null&&(et=et.props.children),typeof et=="object"&&et!==null){switch(et.$$typeof){case S:t:{for(var Kt=et.key;X!==null;){if(X.key===Kt){if(Kt=et.type,Kt===b){if(X.tag===7){s($,X.sibling),vt=f(X,et.props.children),vt.return=$,$=vt;break t}}else if(X.elementType===Kt||typeof Kt=="object"&&Kt!==null&&Kt.$$typeof===k&&_s(Kt)===X.type){s($,X.sibling),vt=f(X,et.props),bo(vt,et),vt.return=$,$=vt;break t}s($,X);break}else i($,X);X=X.sibling}et.type===b?(vt=hs(et.props.children,$.mode,vt,et.key),vt.return=$,$=vt):(vt=zl(et.type,et.key,et.props,null,$.mode,vt),bo(vt,et),vt.return=$,$=vt)}return y($);case E:t:{for(Kt=et.key;X!==null;){if(X.key===Kt)if(X.tag===4&&X.stateNode.containerInfo===et.containerInfo&&X.stateNode.implementation===et.implementation){s($,X.sibling),vt=f(X,et.children||[]),vt.return=$,$=vt;break t}else{s($,X);break}else i($,X);X=X.sibling}vt=of(et,$.mode,vt),vt.return=$,$=vt}return y($);case k:return et=_s(et),Ge($,X,et,vt)}if(mt(et))return Vt($,X,et,vt);if(at(et)){if(Kt=at(et),typeof Kt!="function")throw Error(a(150));return et=Kt.call(et),te($,X,et,vt)}if(typeof et.then=="function")return Ge($,X,Gl(et),vt);if(et.$$typeof===U)return Ge($,X,Il($,et),vt);kl($,et)}return typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint"?(et=""+et,X!==null&&X.tag===6?(s($,X.sibling),vt=f(X,et),vt.return=$,$=vt):(s($,X),vt=rf(et,$.mode,vt),vt.return=$,$=vt),y($)):s($,X)}return function($,X,et,vt){try{Eo=0;var Kt=Ge($,X,et,vt);return ar=null,Kt}catch(Xt){if(Xt===ir||Xt===Hl)throw Xt;var Re=Qn(29,Xt,null,$.mode);return Re.lanes=vt,Re.return=$,Re}finally{}}}var ys=jm(!0),Wm=jm(!1),La=!1;function xf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function yf(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Na(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Oa(e,i,s){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Ue&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,i=Ol(e),Rm(e,null,s),i}return Nl(e,l,i,s),Ol(e)}function To(e,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var l=i.lanes;l&=e.pendingLanes,s|=l,i.lanes=s,ro(e,s)}}function Sf(e,i){var s=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var f=null,p=null;if(s=s.firstBaseUpdate,s!==null){do{var y={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};p===null?f=p=y:p=p.next=y,s=s.next}while(s!==null);p===null?f=p=i:p=p.next=i}else f=p=i;s={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:p,shared:l.shared,callbacks:l.callbacks},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=i:e.next=i,s.lastBaseUpdate=i}var Mf=!1;function Ao(){if(Mf){var e=nr;if(e!==null)throw e}}function wo(e,i,s,l){Mf=!1;var f=e.updateQueue;La=!1;var p=f.firstBaseUpdate,y=f.lastBaseUpdate,A=f.shared.pending;if(A!==null){f.shared.pending=null;var F=A,nt=F.next;F.next=null,y===null?p=nt:y.next=nt,y=F;var pt=e.alternate;pt!==null&&(pt=pt.updateQueue,A=pt.lastBaseUpdate,A!==y&&(A===null?pt.firstBaseUpdate=nt:A.next=nt,pt.lastBaseUpdate=F))}if(p!==null){var yt=f.baseState;y=0,pt=nt=F=null,A=p;do{var st=A.lane&-536870913,ft=st!==A.lane;if(ft?(Se&st)===st:(l&st)===st){st!==0&&st===er&&(Mf=!0),pt!==null&&(pt=pt.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var Vt=e,te=A;st=i;var Ge=s;switch(te.tag){case 1:if(Vt=te.payload,typeof Vt=="function"){yt=Vt.call(Ge,yt,st);break t}yt=Vt;break t;case 3:Vt.flags=Vt.flags&-65537|128;case 0:if(Vt=te.payload,st=typeof Vt=="function"?Vt.call(Ge,yt,st):Vt,st==null)break t;yt=v({},yt,st);break t;case 2:La=!0}}st=A.callback,st!==null&&(e.flags|=64,ft&&(e.flags|=8192),ft=f.callbacks,ft===null?f.callbacks=[st]:ft.push(st))}else ft={lane:st,tag:A.tag,payload:A.payload,callback:A.callback,next:null},pt===null?(nt=pt=ft,F=yt):pt=pt.next=ft,y|=st;if(A=A.next,A===null){if(A=f.shared.pending,A===null)break;ft=A,A=ft.next,ft.next=null,f.lastBaseUpdate=ft,f.shared.pending=null}}while(!0);pt===null&&(F=yt),f.baseState=F,f.firstBaseUpdate=nt,f.lastBaseUpdate=pt,p===null&&(f.shared.lanes=0),Fa|=y,e.lanes=y,e.memoizedState=yt}}function qm(e,i){if(typeof e!="function")throw Error(a(191,e));e.call(i)}function Ym(e,i){var s=e.callbacks;if(s!==null)for(e.callbacks=null,e=0;e<s.length;e++)qm(s[e],i)}var sr=z(null),Xl=z(0);function Zm(e,i){e=la,Mt(Xl,e),Mt(sr,i),la=e|i.baseLanes}function Ef(){Mt(Xl,la),Mt(sr,sr.current)}function bf(){la=Xl.current,it(sr),it(Xl)}var Jn=z(null),mi=null;function za(e){var i=e.alternate;Mt(nn,nn.current&1),Mt(Jn,e),mi===null&&(i===null||sr.current!==null||i.memoizedState!==null)&&(mi=e)}function Tf(e){Mt(nn,nn.current),Mt(Jn,e),mi===null&&(mi=e)}function Km(e){e.tag===22?(Mt(nn,nn.current),Mt(Jn,e),mi===null&&(mi=e)):Pa()}function Pa(){Mt(nn,nn.current),Mt(Jn,Jn.current)}function $n(e){it(Jn),mi===e&&(mi=null),it(nn)}var nn=z(0);function jl(e){for(var i=e;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||Ud(s)||Ld(s)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var ta=0,de=null,He=null,on=null,Wl=!1,rr=!1,Ss=!1,ql=0,Co=0,or=null,nS=0;function tn(){throw Error(a(321))}function Af(e,i){if(i===null)return!1;for(var s=0;s<i.length&&s<e.length;s++)if(!Kn(e[s],i[s]))return!1;return!0}function wf(e,i,s,l,f,p){return ta=p,de=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,I.H=e===null||e.memoizedState===null?Ng:Gf,Ss=!1,p=s(l,f),Ss=!1,rr&&(p=Jm(i,s,l,f)),Qm(e),p}function Qm(e){I.H=Uo;var i=He!==null&&He.next!==null;if(ta=0,on=He=de=null,Wl=!1,Co=0,or=null,i)throw Error(a(300));e===null||ln||(e=e.dependencies,e!==null&&Bl(e)&&(ln=!0))}function Jm(e,i,s,l){de=e;var f=0;do{if(rr&&(or=null),Co=0,rr=!1,25<=f)throw Error(a(301));if(f+=1,on=He=null,e.updateQueue!=null){var p=e.updateQueue;p.lastEffect=null,p.events=null,p.stores=null,p.memoCache!=null&&(p.memoCache.index=0)}I.H=Og,p=i(s,l)}while(rr);return p}function iS(){var e=I.H,i=e.useState()[0];return i=typeof i.then=="function"?Ro(i):i,e=e.useState()[0],(He!==null?He.memoizedState:null)!==e&&(de.flags|=1024),i}function Cf(){var e=ql!==0;return ql=0,e}function Rf(e,i,s){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~s}function Df(e){if(Wl){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}Wl=!1}ta=0,on=He=de=null,rr=!1,Co=ql=0,or=null}function Bn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return on===null?de.memoizedState=on=e:on=on.next=e,on}function an(){if(He===null){var e=de.alternate;e=e!==null?e.memoizedState:null}else e=He.next;var i=on===null?de.memoizedState:on.next;if(i!==null)on=i,He=e;else{if(e===null)throw de.alternate===null?Error(a(467)):Error(a(310));He=e,e={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},on===null?de.memoizedState=on=e:on=on.next=e}return on}function Yl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ro(e){var i=Co;return Co+=1,or===null&&(or=[]),e=Gm(or,e,i),i=de,(on===null?i.memoizedState:on.next)===null&&(i=i.alternate,I.H=i===null||i.memoizedState===null?Ng:Gf),e}function Zl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ro(e);if(e.$$typeof===U)return Tn(e)}throw Error(a(438,String(e)))}function Uf(e){var i=null,s=de.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var l=de.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(f){return f.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=Yl(),de.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(e),l=0;l<e;l++)s[l]=C;return i.index++,s}function ea(e,i){return typeof i=="function"?i(e):i}function Kl(e){var i=an();return Lf(i,He,e)}function Lf(e,i,s){var l=e.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=s;var f=e.baseQueue,p=l.pending;if(p!==null){if(f!==null){var y=f.next;f.next=p.next,p.next=y}i.baseQueue=f=p,l.pending=null}if(p=e.baseState,f===null)e.memoizedState=p;else{i=f.next;var A=y=null,F=null,nt=i,pt=!1;do{var yt=nt.lane&-536870913;if(yt!==nt.lane?(Se&yt)===yt:(ta&yt)===yt){var st=nt.revertLane;if(st===0)F!==null&&(F=F.next={lane:0,revertLane:0,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null}),yt===er&&(pt=!0);else if((ta&st)===st){nt=nt.next,st===er&&(pt=!0);continue}else yt={lane:0,revertLane:nt.revertLane,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},F===null?(A=F=yt,y=p):F=F.next=yt,de.lanes|=st,Fa|=st;yt=nt.action,Ss&&s(p,yt),p=nt.hasEagerState?nt.eagerState:s(p,yt)}else st={lane:yt,revertLane:nt.revertLane,gesture:nt.gesture,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},F===null?(A=F=st,y=p):F=F.next=st,de.lanes|=yt,Fa|=yt;nt=nt.next}while(nt!==null&&nt!==i);if(F===null?y=p:F.next=A,!Kn(p,e.memoizedState)&&(ln=!0,pt&&(s=nr,s!==null)))throw s;e.memoizedState=p,e.baseState=y,e.baseQueue=F,l.lastRenderedState=p}return f===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Nf(e){var i=an(),s=i.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=e;var l=s.dispatch,f=s.pending,p=i.memoizedState;if(f!==null){s.pending=null;var y=f=f.next;do p=e(p,y.action),y=y.next;while(y!==f);Kn(p,i.memoizedState)||(ln=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),s.lastRenderedState=p}return[p,l]}function $m(e,i,s){var l=de,f=an(),p=Te;if(p){if(s===void 0)throw Error(a(407));s=s()}else s=i();var y=!Kn((He||f).memoizedState,s);if(y&&(f.memoizedState=s,ln=!0),f=f.queue,Pf(ng.bind(null,l,f,e),[e]),f.getSnapshot!==i||y||on!==null&&on.memoizedState.tag&1){if(l.flags|=2048,lr(9,{destroy:void 0},eg.bind(null,l,f,s,i),null),Xe===null)throw Error(a(349));p||(ta&127)!==0||tg(l,i,s)}return s}function tg(e,i,s){e.flags|=16384,e={getSnapshot:i,value:s},i=de.updateQueue,i===null?(i=Yl(),de.updateQueue=i,i.stores=[e]):(s=i.stores,s===null?i.stores=[e]:s.push(e))}function eg(e,i,s,l){i.value=s,i.getSnapshot=l,ig(i)&&ag(e)}function ng(e,i,s){return s(function(){ig(i)&&ag(e)})}function ig(e){var i=e.getSnapshot;e=e.value;try{var s=i();return!Kn(e,s)}catch{return!0}}function ag(e){var i=ds(e,2);i!==null&&qn(i,e,2)}function Of(e){var i=Bn();if(typeof e=="function"){var s=e;if(e=s(),Ss){Bt(!0);try{s()}finally{Bt(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:e},i}function sg(e,i,s,l){return e.baseState=s,Lf(e,He,typeof l=="function"?l:ea)}function aS(e,i,s,l,f){if($l(e))throw Error(a(485));if(e=i.action,e!==null){var p={payload:f,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){p.listeners.push(y)}};I.T!==null?s(!0):p.isTransition=!1,l(p),s=i.pending,s===null?(p.next=i.pending=p,rg(i,p)):(p.next=s.next,i.pending=s.next=p)}}function rg(e,i){var s=i.action,l=i.payload,f=e.state;if(i.isTransition){var p=I.T,y={};I.T=y;try{var A=s(f,l),F=I.S;F!==null&&F(y,A),og(e,i,A)}catch(nt){zf(e,i,nt)}finally{p!==null&&y.types!==null&&(p.types=y.types),I.T=p}}else try{p=s(f,l),og(e,i,p)}catch(nt){zf(e,i,nt)}}function og(e,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){lg(e,i,l)},function(l){return zf(e,i,l)}):lg(e,i,s)}function lg(e,i,s){i.status="fulfilled",i.value=s,cg(i),e.state=s,i=e.pending,i!==null&&(s=i.next,s===i?e.pending=null:(s=s.next,i.next=s,rg(e,s)))}function zf(e,i,s){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=s,cg(i),i=i.next;while(i!==l)}e.action=null}function cg(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function ug(e,i){return i}function fg(e,i){if(Te){var s=Xe.formState;if(s!==null){t:{var l=de;if(Te){if(qe){e:{for(var f=qe,p=pi;f.nodeType!==8;){if(!p){f=null;break e}if(f=gi(f.nextSibling),f===null){f=null;break e}}p=f.data,f=p==="F!"||p==="F"?f:null}if(f){qe=gi(f.nextSibling),l=f.data==="F!";break t}}Da(l)}l=!1}l&&(i=s[0])}}return s=Bn(),s.memoizedState=s.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ug,lastRenderedState:i},s.queue=l,s=Dg.bind(null,de,l),l.dispatch=s,l=Of(!1),p=Vf.bind(null,de,!1,l.queue),l=Bn(),f={state:i,dispatch:null,action:e,pending:null},l.queue=f,s=aS.bind(null,de,f,p,s),f.dispatch=s,l.memoizedState=e,[i,s,!1]}function dg(e){var i=an();return hg(i,He,e)}function hg(e,i,s){if(i=Lf(e,i,ug)[0],e=Kl(ea)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=Ro(i)}catch(y){throw y===ir?Hl:y}else l=i;i=an();var f=i.queue,p=f.dispatch;return s!==i.memoizedState&&(de.flags|=2048,lr(9,{destroy:void 0},sS.bind(null,f,s),null)),[l,p,e]}function sS(e,i){e.action=i}function pg(e){var i=an(),s=He;if(s!==null)return hg(i,s,e);an(),i=i.memoizedState,s=an();var l=s.queue.dispatch;return s.memoizedState=e,[i,l,!1]}function lr(e,i,s,l){return e={tag:e,create:s,deps:l,inst:i,next:null},i=de.updateQueue,i===null&&(i=Yl(),de.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=e.next=e:(l=s.next,s.next=e,e.next=l,i.lastEffect=e),e}function mg(){return an().memoizedState}function Ql(e,i,s,l){var f=Bn();de.flags|=e,f.memoizedState=lr(1|i,{destroy:void 0},s,l===void 0?null:l)}function Jl(e,i,s,l){var f=an();l=l===void 0?null:l;var p=f.memoizedState.inst;He!==null&&l!==null&&Af(l,He.memoizedState.deps)?f.memoizedState=lr(i,p,s,l):(de.flags|=e,f.memoizedState=lr(1|i,p,s,l))}function gg(e,i){Ql(8390656,8,e,i)}function Pf(e,i){Jl(2048,8,e,i)}function rS(e){de.flags|=4;var i=de.updateQueue;if(i===null)i=Yl(),de.updateQueue=i,i.events=[e];else{var s=i.events;s===null?i.events=[e]:s.push(e)}}function vg(e){var i=an().memoizedState;return rS({ref:i,nextImpl:e}),function(){if((Ue&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}function _g(e,i){return Jl(4,2,e,i)}function xg(e,i){return Jl(4,4,e,i)}function yg(e,i){if(typeof i=="function"){e=e();var s=i(e);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function Sg(e,i,s){s=s!=null?s.concat([e]):null,Jl(4,4,yg.bind(null,i,e),s)}function Bf(){}function Mg(e,i){var s=an();i=i===void 0?null:i;var l=s.memoizedState;return i!==null&&Af(i,l[1])?l[0]:(s.memoizedState=[e,i],e)}function Eg(e,i){var s=an();i=i===void 0?null:i;var l=s.memoizedState;if(i!==null&&Af(i,l[1]))return l[0];if(l=e(),Ss){Bt(!0);try{e()}finally{Bt(!1)}}return s.memoizedState=[l,i],l}function If(e,i,s){return s===void 0||(ta&1073741824)!==0&&(Se&261930)===0?e.memoizedState=i:(e.memoizedState=s,e=b0(),de.lanes|=e,Fa|=e,s)}function bg(e,i,s,l){return Kn(s,i)?s:sr.current!==null?(e=If(e,s,l),Kn(e,i)||(ln=!0),e):(ta&42)===0||(ta&1073741824)!==0&&(Se&261930)===0?(ln=!0,e.memoizedState=s):(e=b0(),de.lanes|=e,Fa|=e,i)}function Tg(e,i,s,l,f){var p=H.p;H.p=p!==0&&8>p?p:8;var y=I.T,A={};I.T=A,Vf(e,!1,i,s);try{var F=f(),nt=I.S;if(nt!==null&&nt(A,F),F!==null&&typeof F=="object"&&typeof F.then=="function"){var pt=eS(F,l);Do(e,i,pt,ni(e))}else Do(e,i,l,ni(e))}catch(yt){Do(e,i,{then:function(){},status:"rejected",reason:yt},ni())}finally{H.p=p,y!==null&&A.types!==null&&(y.types=A.types),I.T=y}}function oS(){}function Ff(e,i,s,l){if(e.tag!==5)throw Error(a(476));var f=Ag(e).queue;Tg(e,f,i,V,s===null?oS:function(){return wg(e),s(l)})}function Ag(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:V,baseState:V,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:V},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:s},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function wg(e){var i=Ag(e);i.next===null&&(i=e.alternate.memoizedState),Do(e,i.next.queue,{},ni())}function Hf(){return Tn(qo)}function Cg(){return an().memoizedState}function Rg(){return an().memoizedState}function lS(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var s=ni();e=Na(s);var l=Oa(i,e,s);l!==null&&(qn(l,i,s),To(l,i,s)),i={cache:mf()},e.payload=i;return}i=i.return}}function cS(e,i,s){var l=ni();s={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},$l(e)?Ug(i,s):(s=af(e,i,s,l),s!==null&&(qn(s,e,l),Lg(s,i,l)))}function Dg(e,i,s){var l=ni();Do(e,i,s,l)}function Do(e,i,s,l){var f={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if($l(e))Ug(i,f);else{var p=e.alternate;if(e.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var y=i.lastRenderedState,A=p(y,s);if(f.hasEagerState=!0,f.eagerState=A,Kn(A,y))return Nl(e,i,f,0),Xe===null&&Ll(),!1}catch{}finally{}if(s=af(e,i,f,l),s!==null)return qn(s,e,l),Lg(s,i,l),!0}return!1}function Vf(e,i,s,l){if(l={lane:2,revertLane:xd(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},$l(e)){if(i)throw Error(a(479))}else i=af(e,s,l,2),i!==null&&qn(i,e,2)}function $l(e){var i=e.alternate;return e===de||i!==null&&i===de}function Ug(e,i){rr=Wl=!0;var s=e.pending;s===null?i.next=i:(i.next=s.next,s.next=i),e.pending=i}function Lg(e,i,s){if((s&4194048)!==0){var l=i.lanes;l&=e.pendingLanes,s|=l,i.lanes=s,ro(e,s)}}var Uo={readContext:Tn,use:Zl,useCallback:tn,useContext:tn,useEffect:tn,useImperativeHandle:tn,useLayoutEffect:tn,useInsertionEffect:tn,useMemo:tn,useReducer:tn,useRef:tn,useState:tn,useDebugValue:tn,useDeferredValue:tn,useTransition:tn,useSyncExternalStore:tn,useId:tn,useHostTransitionStatus:tn,useFormState:tn,useActionState:tn,useOptimistic:tn,useMemoCache:tn,useCacheRefresh:tn};Uo.useEffectEvent=tn;var Ng={readContext:Tn,use:Zl,useCallback:function(e,i){return Bn().memoizedState=[e,i===void 0?null:i],e},useContext:Tn,useEffect:gg,useImperativeHandle:function(e,i,s){s=s!=null?s.concat([e]):null,Ql(4194308,4,yg.bind(null,i,e),s)},useLayoutEffect:function(e,i){return Ql(4194308,4,e,i)},useInsertionEffect:function(e,i){Ql(4,2,e,i)},useMemo:function(e,i){var s=Bn();i=i===void 0?null:i;var l=e();if(Ss){Bt(!0);try{e()}finally{Bt(!1)}}return s.memoizedState=[l,i],l},useReducer:function(e,i,s){var l=Bn();if(s!==void 0){var f=s(i);if(Ss){Bt(!0);try{s(i)}finally{Bt(!1)}}}else f=i;return l.memoizedState=l.baseState=f,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:f},l.queue=e,e=e.dispatch=cS.bind(null,de,e),[l.memoizedState,e]},useRef:function(e){var i=Bn();return e={current:e},i.memoizedState=e},useState:function(e){e=Of(e);var i=e.queue,s=Dg.bind(null,de,i);return i.dispatch=s,[e.memoizedState,s]},useDebugValue:Bf,useDeferredValue:function(e,i){var s=Bn();return If(s,e,i)},useTransition:function(){var e=Of(!1);return e=Tg.bind(null,de,e.queue,!0,!1),Bn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,s){var l=de,f=Bn();if(Te){if(s===void 0)throw Error(a(407));s=s()}else{if(s=i(),Xe===null)throw Error(a(349));(Se&127)!==0||tg(l,i,s)}f.memoizedState=s;var p={value:s,getSnapshot:i};return f.queue=p,gg(ng.bind(null,l,p,e),[e]),l.flags|=2048,lr(9,{destroy:void 0},eg.bind(null,l,p,s,i),null),s},useId:function(){var e=Bn(),i=Xe.identifierPrefix;if(Te){var s=zi,l=Oi;s=(l&~(1<<32-ie(l)-1)).toString(32)+s,i="_"+i+"R_"+s,s=ql++,0<s&&(i+="H"+s.toString(32)),i+="_"}else s=nS++,i="_"+i+"r_"+s.toString(32)+"_";return e.memoizedState=i},useHostTransitionStatus:Hf,useFormState:fg,useActionState:fg,useOptimistic:function(e){var i=Bn();i.memoizedState=i.baseState=e;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=Vf.bind(null,de,!0,s),s.dispatch=i,[e,i]},useMemoCache:Uf,useCacheRefresh:function(){return Bn().memoizedState=lS.bind(null,de)},useEffectEvent:function(e){var i=Bn(),s={impl:e};return i.memoizedState=s,function(){if((Ue&2)!==0)throw Error(a(440));return s.impl.apply(void 0,arguments)}}},Gf={readContext:Tn,use:Zl,useCallback:Mg,useContext:Tn,useEffect:Pf,useImperativeHandle:Sg,useInsertionEffect:_g,useLayoutEffect:xg,useMemo:Eg,useReducer:Kl,useRef:mg,useState:function(){return Kl(ea)},useDebugValue:Bf,useDeferredValue:function(e,i){var s=an();return bg(s,He.memoizedState,e,i)},useTransition:function(){var e=Kl(ea)[0],i=an().memoizedState;return[typeof e=="boolean"?e:Ro(e),i]},useSyncExternalStore:$m,useId:Cg,useHostTransitionStatus:Hf,useFormState:dg,useActionState:dg,useOptimistic:function(e,i){var s=an();return sg(s,He,e,i)},useMemoCache:Uf,useCacheRefresh:Rg};Gf.useEffectEvent=vg;var Og={readContext:Tn,use:Zl,useCallback:Mg,useContext:Tn,useEffect:Pf,useImperativeHandle:Sg,useInsertionEffect:_g,useLayoutEffect:xg,useMemo:Eg,useReducer:Nf,useRef:mg,useState:function(){return Nf(ea)},useDebugValue:Bf,useDeferredValue:function(e,i){var s=an();return He===null?If(s,e,i):bg(s,He.memoizedState,e,i)},useTransition:function(){var e=Nf(ea)[0],i=an().memoizedState;return[typeof e=="boolean"?e:Ro(e),i]},useSyncExternalStore:$m,useId:Cg,useHostTransitionStatus:Hf,useFormState:pg,useActionState:pg,useOptimistic:function(e,i){var s=an();return He!==null?sg(s,He,e,i):(s.baseState=e,[e,s.queue.dispatch])},useMemoCache:Uf,useCacheRefresh:Rg};Og.useEffectEvent=vg;function kf(e,i,s,l){i=e.memoizedState,s=s(l,i),s=s==null?i:v({},i,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var Xf={enqueueSetState:function(e,i,s){e=e._reactInternals;var l=ni(),f=Na(l);f.payload=i,s!=null&&(f.callback=s),i=Oa(e,f,l),i!==null&&(qn(i,e,l),To(i,e,l))},enqueueReplaceState:function(e,i,s){e=e._reactInternals;var l=ni(),f=Na(l);f.tag=1,f.payload=i,s!=null&&(f.callback=s),i=Oa(e,f,l),i!==null&&(qn(i,e,l),To(i,e,l))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var s=ni(),l=Na(s);l.tag=2,i!=null&&(l.callback=i),i=Oa(e,l,s),i!==null&&(qn(i,e,s),To(i,e,s))}};function zg(e,i,s,l,f,p,y){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,p,y):i.prototype&&i.prototype.isPureReactComponent?!vo(s,l)||!vo(f,p):!0}function Pg(e,i,s,l){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==e&&Xf.enqueueReplaceState(i,i.state,null)}function Ms(e,i){var s=i;if("ref"in i){s={};for(var l in i)l!=="ref"&&(s[l]=i[l])}if(e=e.defaultProps){s===i&&(s=v({},s));for(var f in e)s[f]===void 0&&(s[f]=e[f])}return s}function Bg(e){Ul(e)}function Ig(e){console.error(e)}function Fg(e){Ul(e)}function tc(e,i){try{var s=e.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function Hg(e,i,s){try{var l=e.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function jf(e,i,s){return s=Na(s),s.tag=3,s.payload={element:null},s.callback=function(){tc(e,i)},s}function Vg(e){return e=Na(e),e.tag=3,e}function Gg(e,i,s,l){var f=s.type.getDerivedStateFromError;if(typeof f=="function"){var p=l.value;e.payload=function(){return f(p)},e.callback=function(){Hg(i,s,l)}}var y=s.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(e.callback=function(){Hg(i,s,l),typeof f!="function"&&(Ha===null?Ha=new Set([this]):Ha.add(this));var A=l.stack;this.componentDidCatch(l.value,{componentStack:A!==null?A:""})})}function uS(e,i,s,l,f){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=s.alternate,i!==null&&tr(i,s,f,!0),s=Jn.current,s!==null){switch(s.tag){case 31:case 13:return mi===null?dc():s.alternate===null&&en===0&&(en=3),s.flags&=-257,s.flags|=65536,s.lanes=f,l===Vl?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([l]):i.add(l),gd(e,l,f)),!1;case 22:return s.flags|=65536,l===Vl?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([l]):s.add(l)),gd(e,l,f)),!1}throw Error(a(435,s.tag))}return gd(e,l,f),dc(),!1}if(Te)return i=Jn.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=f,l!==uf&&(e=Error(a(422),{cause:l}),yo(fi(e,s)))):(l!==uf&&(i=Error(a(423),{cause:l}),yo(fi(i,s))),e=e.current.alternate,e.flags|=65536,f&=-f,e.lanes|=f,l=fi(l,s),f=jf(e.stateNode,l,f),Sf(e,f),en!==4&&(en=2)),!1;var p=Error(a(520),{cause:l});if(p=fi(p,s),Fo===null?Fo=[p]:Fo.push(p),en!==4&&(en=2),i===null)return!0;l=fi(l,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,e=f&-f,s.lanes|=e,e=jf(s.stateNode,l,e),Sf(s,e),!1;case 1:if(i=s.type,p=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Ha===null||!Ha.has(p))))return s.flags|=65536,f&=-f,s.lanes|=f,f=Vg(f),Gg(f,e,s,l),Sf(s,f),!1}s=s.return}while(s!==null);return!1}var Wf=Error(a(461)),ln=!1;function An(e,i,s,l){i.child=e===null?Wm(i,null,s,l):ys(i,e.child,s,l)}function kg(e,i,s,l,f){s=s.render;var p=i.ref;if("ref"in l){var y={};for(var A in l)A!=="ref"&&(y[A]=l[A])}else y=l;return gs(i),l=wf(e,i,s,y,p,f),A=Cf(),e!==null&&!ln?(Rf(e,i,f),na(e,i,f)):(Te&&A&&lf(i),i.flags|=1,An(e,i,l,f),i.child)}function Xg(e,i,s,l,f){if(e===null){var p=s.type;return typeof p=="function"&&!sf(p)&&p.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=p,jg(e,i,p,l,f)):(e=zl(s.type,null,l,i,i.mode,f),e.ref=i.ref,e.return=i,i.child=e)}if(p=e.child,!td(e,f)){var y=p.memoizedProps;if(s=s.compare,s=s!==null?s:vo,s(y,l)&&e.ref===i.ref)return na(e,i,f)}return i.flags|=1,e=Ki(p,l),e.ref=i.ref,e.return=i,i.child=e}function jg(e,i,s,l,f){if(e!==null){var p=e.memoizedProps;if(vo(p,l)&&e.ref===i.ref)if(ln=!1,i.pendingProps=l=p,td(e,f))(e.flags&131072)!==0&&(ln=!0);else return i.lanes=e.lanes,na(e,i,f)}return qf(e,i,s,l,f)}function Wg(e,i,s,l){var f=l.children,p=e!==null?e.memoizedState:null;if(e===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((i.flags&128)!==0){if(p=p!==null?p.baseLanes|s:s,e!==null){for(l=i.child=e.child,f=0;l!==null;)f=f|l.lanes|l.childLanes,l=l.sibling;l=f&~p}else l=0,i.child=null;return qg(e,i,p,s,l)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&Fl(i,p!==null?p.cachePool:null),p!==null?Zm(i,p):Ef(),Km(i);else return l=i.lanes=536870912,qg(e,i,p!==null?p.baseLanes|s:s,s,l)}else p!==null?(Fl(i,p.cachePool),Zm(i,p),Pa(),i.memoizedState=null):(e!==null&&Fl(i,null),Ef(),Pa());return An(e,i,f,s),i.child}function Lo(e,i){return e!==null&&e.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function qg(e,i,s,l,f){var p=vf();return p=p===null?null:{parent:rn._currentValue,pool:p},i.memoizedState={baseLanes:s,cachePool:p},e!==null&&Fl(i,null),Ef(),Km(i),e!==null&&tr(e,i,l,!0),i.childLanes=f,null}function ec(e,i){return i=ic({mode:i.mode,children:i.children},e.mode),i.ref=e.ref,e.child=i,i.return=e,i}function Yg(e,i,s){return ys(i,e.child,null,s),e=ec(i,i.pendingProps),e.flags|=2,$n(i),i.memoizedState=null,e}function fS(e,i,s){var l=i.pendingProps,f=(i.flags&128)!==0;if(i.flags&=-129,e===null){if(Te){if(l.mode==="hidden")return e=ec(i,l),i.lanes=536870912,Lo(null,e);if(Tf(i),(e=qe)?(e=rv(e,pi),e=e!==null&&e.data==="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:Ca!==null?{id:Oi,overflow:zi}:null,retryLane:536870912,hydrationErrors:null},s=Um(e),s.return=i,i.child=s,bn=i,qe=null)):e=null,e===null)throw Da(i);return i.lanes=536870912,null}return ec(i,l)}var p=e.memoizedState;if(p!==null){var y=p.dehydrated;if(Tf(i),f)if(i.flags&256)i.flags&=-257,i=Yg(e,i,s);else if(i.memoizedState!==null)i.child=e.child,i.flags|=128,i=null;else throw Error(a(558));else if(ln||tr(e,i,s,!1),f=(s&e.childLanes)!==0,ln||f){if(l=Xe,l!==null&&(y=Ni(l,s),y!==0&&y!==p.retryLane))throw p.retryLane=y,ds(e,y),qn(l,e,y),Wf;dc(),i=Yg(e,i,s)}else e=p.treeContext,qe=gi(y.nextSibling),bn=i,Te=!0,Ra=null,pi=!1,e!==null&&Om(i,e),i=ec(i,l),i.flags|=4096;return i}return e=Ki(e.child,{mode:l.mode,children:l.children}),e.ref=i.ref,i.child=e,e.return=i,e}function nc(e,i){var s=i.ref;if(s===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(e===null||e.ref!==s)&&(i.flags|=4194816)}}function qf(e,i,s,l,f){return gs(i),s=wf(e,i,s,l,void 0,f),l=Cf(),e!==null&&!ln?(Rf(e,i,f),na(e,i,f)):(Te&&l&&lf(i),i.flags|=1,An(e,i,s,f),i.child)}function Zg(e,i,s,l,f,p){return gs(i),i.updateQueue=null,s=Jm(i,l,s,f),Qm(e),l=Cf(),e!==null&&!ln?(Rf(e,i,p),na(e,i,p)):(Te&&l&&lf(i),i.flags|=1,An(e,i,s,p),i.child)}function Kg(e,i,s,l,f){if(gs(i),i.stateNode===null){var p=Ks,y=s.contextType;typeof y=="object"&&y!==null&&(p=Tn(y)),p=new s(l,p),i.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,p.updater=Xf,i.stateNode=p,p._reactInternals=i,p=i.stateNode,p.props=l,p.state=i.memoizedState,p.refs={},xf(i),y=s.contextType,p.context=typeof y=="object"&&y!==null?Tn(y):Ks,p.state=i.memoizedState,y=s.getDerivedStateFromProps,typeof y=="function"&&(kf(i,s,y,l),p.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(y=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),y!==p.state&&Xf.enqueueReplaceState(p,p.state,null),wo(i,l,p,f),Ao(),p.state=i.memoizedState),typeof p.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(e===null){p=i.stateNode;var A=i.memoizedProps,F=Ms(s,A);p.props=F;var nt=p.context,pt=s.contextType;y=Ks,typeof pt=="object"&&pt!==null&&(y=Tn(pt));var yt=s.getDerivedStateFromProps;pt=typeof yt=="function"||typeof p.getSnapshotBeforeUpdate=="function",A=i.pendingProps!==A,pt||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(A||nt!==y)&&Pg(i,p,l,y),La=!1;var st=i.memoizedState;p.state=st,wo(i,l,p,f),Ao(),nt=i.memoizedState,A||st!==nt||La?(typeof yt=="function"&&(kf(i,s,yt,l),nt=i.memoizedState),(F=La||zg(i,s,F,l,st,nt,y))?(pt||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount()),typeof p.componentDidMount=="function"&&(i.flags|=4194308)):(typeof p.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=nt),p.props=l,p.state=nt,p.context=y,l=F):(typeof p.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{p=i.stateNode,yf(e,i),y=i.memoizedProps,pt=Ms(s,y),p.props=pt,yt=i.pendingProps,st=p.context,nt=s.contextType,F=Ks,typeof nt=="object"&&nt!==null&&(F=Tn(nt)),A=s.getDerivedStateFromProps,(nt=typeof A=="function"||typeof p.getSnapshotBeforeUpdate=="function")||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(y!==yt||st!==F)&&Pg(i,p,l,F),La=!1,st=i.memoizedState,p.state=st,wo(i,l,p,f),Ao();var ft=i.memoizedState;y!==yt||st!==ft||La||e!==null&&e.dependencies!==null&&Bl(e.dependencies)?(typeof A=="function"&&(kf(i,s,A,l),ft=i.memoizedState),(pt=La||zg(i,s,pt,l,st,ft,F)||e!==null&&e.dependencies!==null&&Bl(e.dependencies))?(nt||typeof p.UNSAFE_componentWillUpdate!="function"&&typeof p.componentWillUpdate!="function"||(typeof p.componentWillUpdate=="function"&&p.componentWillUpdate(l,ft,F),typeof p.UNSAFE_componentWillUpdate=="function"&&p.UNSAFE_componentWillUpdate(l,ft,F)),typeof p.componentDidUpdate=="function"&&(i.flags|=4),typeof p.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof p.componentDidUpdate!="function"||y===e.memoizedProps&&st===e.memoizedState||(i.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&st===e.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=ft),p.props=l,p.state=ft,p.context=F,l=pt):(typeof p.componentDidUpdate!="function"||y===e.memoizedProps&&st===e.memoizedState||(i.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&st===e.memoizedState||(i.flags|=1024),l=!1)}return p=l,nc(e,i),l=(i.flags&128)!==0,p||l?(p=i.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:p.render(),i.flags|=1,e!==null&&l?(i.child=ys(i,e.child,null,f),i.child=ys(i,null,s,f)):An(e,i,s,f),i.memoizedState=p.state,e=i.child):e=na(e,i,f),e}function Qg(e,i,s,l){return ps(),i.flags|=256,An(e,i,s,l),i.child}var Yf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Zf(e){return{baseLanes:e,cachePool:Hm()}}function Kf(e,i,s){return e=e!==null?e.childLanes&~s:0,i&&(e|=ei),e}function Jg(e,i,s){var l=i.pendingProps,f=!1,p=(i.flags&128)!==0,y;if((y=p)||(y=e!==null&&e.memoizedState===null?!1:(nn.current&2)!==0),y&&(f=!0,i.flags&=-129),y=(i.flags&32)!==0,i.flags&=-33,e===null){if(Te){if(f?za(i):Pa(),(e=qe)?(e=rv(e,pi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:Ca!==null?{id:Oi,overflow:zi}:null,retryLane:536870912,hydrationErrors:null},s=Um(e),s.return=i,i.child=s,bn=i,qe=null)):e=null,e===null)throw Da(i);return Ld(e)?i.lanes=32:i.lanes=536870912,null}var A=l.children;return l=l.fallback,f?(Pa(),f=i.mode,A=ic({mode:"hidden",children:A},f),l=hs(l,f,s,null),A.return=i,l.return=i,A.sibling=l,i.child=A,l=i.child,l.memoizedState=Zf(s),l.childLanes=Kf(e,y,s),i.memoizedState=Yf,Lo(null,l)):(za(i),Qf(i,A))}var F=e.memoizedState;if(F!==null&&(A=F.dehydrated,A!==null)){if(p)i.flags&256?(za(i),i.flags&=-257,i=Jf(e,i,s)):i.memoizedState!==null?(Pa(),i.child=e.child,i.flags|=128,i=null):(Pa(),A=l.fallback,f=i.mode,l=ic({mode:"visible",children:l.children},f),A=hs(A,f,s,null),A.flags|=2,l.return=i,A.return=i,l.sibling=A,i.child=l,ys(i,e.child,null,s),l=i.child,l.memoizedState=Zf(s),l.childLanes=Kf(e,y,s),i.memoizedState=Yf,i=Lo(null,l));else if(za(i),Ld(A)){if(y=A.nextSibling&&A.nextSibling.dataset,y)var nt=y.dgst;y=nt,l=Error(a(419)),l.stack="",l.digest=y,yo({value:l,source:null,stack:null}),i=Jf(e,i,s)}else if(ln||tr(e,i,s,!1),y=(s&e.childLanes)!==0,ln||y){if(y=Xe,y!==null&&(l=Ni(y,s),l!==0&&l!==F.retryLane))throw F.retryLane=l,ds(e,l),qn(y,e,l),Wf;Ud(A)||dc(),i=Jf(e,i,s)}else Ud(A)?(i.flags|=192,i.child=e.child,i=null):(e=F.treeContext,qe=gi(A.nextSibling),bn=i,Te=!0,Ra=null,pi=!1,e!==null&&Om(i,e),i=Qf(i,l.children),i.flags|=4096);return i}return f?(Pa(),A=l.fallback,f=i.mode,F=e.child,nt=F.sibling,l=Ki(F,{mode:"hidden",children:l.children}),l.subtreeFlags=F.subtreeFlags&65011712,nt!==null?A=Ki(nt,A):(A=hs(A,f,s,null),A.flags|=2),A.return=i,l.return=i,l.sibling=A,i.child=l,Lo(null,l),l=i.child,A=e.child.memoizedState,A===null?A=Zf(s):(f=A.cachePool,f!==null?(F=rn._currentValue,f=f.parent!==F?{parent:F,pool:F}:f):f=Hm(),A={baseLanes:A.baseLanes|s,cachePool:f}),l.memoizedState=A,l.childLanes=Kf(e,y,s),i.memoizedState=Yf,Lo(e.child,l)):(za(i),s=e.child,e=s.sibling,s=Ki(s,{mode:"visible",children:l.children}),s.return=i,s.sibling=null,e!==null&&(y=i.deletions,y===null?(i.deletions=[e],i.flags|=16):y.push(e)),i.child=s,i.memoizedState=null,s)}function Qf(e,i){return i=ic({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function ic(e,i){return e=Qn(22,e,null,i),e.lanes=0,e}function Jf(e,i,s){return ys(i,e.child,null,s),e=Qf(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function $g(e,i,s){e.lanes|=i;var l=e.alternate;l!==null&&(l.lanes|=i),hf(e.return,i,s)}function $f(e,i,s,l,f,p){var y=e.memoizedState;y===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:f,treeForkCount:p}:(y.isBackwards=i,y.rendering=null,y.renderingStartTime=0,y.last=l,y.tail=s,y.tailMode=f,y.treeForkCount=p)}function t0(e,i,s){var l=i.pendingProps,f=l.revealOrder,p=l.tail;l=l.children;var y=nn.current,A=(y&2)!==0;if(A?(y=y&1|2,i.flags|=128):y&=1,Mt(nn,y),An(e,i,l,s),l=Te?xo:0,!A&&e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&$g(e,s,i);else if(e.tag===19)$g(e,s,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(f){case"forwards":for(s=i.child,f=null;s!==null;)e=s.alternate,e!==null&&jl(e)===null&&(f=s),s=s.sibling;s=f,s===null?(f=i.child,i.child=null):(f=s.sibling,s.sibling=null),$f(i,!1,f,s,p,l);break;case"backwards":case"unstable_legacy-backwards":for(s=null,f=i.child,i.child=null;f!==null;){if(e=f.alternate,e!==null&&jl(e)===null){i.child=f;break}e=f.sibling,f.sibling=s,s=f,f=e}$f(i,!0,s,null,p,l);break;case"together":$f(i,!1,null,null,void 0,l);break;default:i.memoizedState=null}return i.child}function na(e,i,s){if(e!==null&&(i.dependencies=e.dependencies),Fa|=i.lanes,(s&i.childLanes)===0)if(e!==null){if(tr(e,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(a(153));if(i.child!==null){for(e=i.child,s=Ki(e,e.pendingProps),i.child=s,s.return=i;e.sibling!==null;)e=e.sibling,s=s.sibling=Ki(e,e.pendingProps),s.return=i;s.sibling=null}return i.child}function td(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&Bl(e)))}function dS(e,i,s){switch(i.tag){case 3:St(i,i.stateNode.containerInfo),Ua(i,rn,e.memoizedState.cache),ps();break;case 27:case 5:Dt(i);break;case 4:St(i,i.stateNode.containerInfo);break;case 10:Ua(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,Tf(i),null;break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(za(i),i.flags|=128,null):(s&i.child.childLanes)!==0?Jg(e,i,s):(za(i),e=na(e,i,s),e!==null?e.sibling:null);za(i);break;case 19:var f=(e.flags&128)!==0;if(l=(s&i.childLanes)!==0,l||(tr(e,i,s,!1),l=(s&i.childLanes)!==0),f){if(l)return t0(e,i,s);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Mt(nn,nn.current),l)break;return null;case 22:return i.lanes=0,Wg(e,i,s,i.pendingProps);case 24:Ua(i,rn,e.memoizedState.cache)}return na(e,i,s)}function e0(e,i,s){if(e!==null)if(e.memoizedProps!==i.pendingProps)ln=!0;else{if(!td(e,s)&&(i.flags&128)===0)return ln=!1,dS(e,i,s);ln=(e.flags&131072)!==0}else ln=!1,Te&&(i.flags&1048576)!==0&&Nm(i,xo,i.index);switch(i.lanes=0,i.tag){case 16:t:{var l=i.pendingProps;if(e=_s(i.elementType),i.type=e,typeof e=="function")sf(e)?(l=Ms(e,l),i.tag=1,i=Kg(null,i,e,l,s)):(i.tag=0,i=qf(null,i,e,l,s));else{if(e!=null){var f=e.$$typeof;if(f===T){i.tag=11,i=kg(null,i,e,l,s);break t}else if(f===O){i.tag=14,i=Xg(null,i,e,l,s);break t}}throw i=ct(e)||e,Error(a(306,i,""))}}return i;case 0:return qf(e,i,i.type,i.pendingProps,s);case 1:return l=i.type,f=Ms(l,i.pendingProps),Kg(e,i,l,f,s);case 3:t:{if(St(i,i.stateNode.containerInfo),e===null)throw Error(a(387));l=i.pendingProps;var p=i.memoizedState;f=p.element,yf(e,i),wo(i,l,null,s);var y=i.memoizedState;if(l=y.cache,Ua(i,rn,l),l!==p.cache&&pf(i,[rn],s,!0),Ao(),l=y.element,p.isDehydrated)if(p={element:l,isDehydrated:!1,cache:y.cache},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){i=Qg(e,i,l,s);break t}else if(l!==f){f=fi(Error(a(424)),i),yo(f),i=Qg(e,i,l,s);break t}else{switch(e=i.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(qe=gi(e.firstChild),bn=i,Te=!0,Ra=null,pi=!0,s=Wm(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(ps(),l===f){i=na(e,i,s);break t}An(e,i,l,s)}i=i.child}return i;case 26:return nc(e,i),e===null?(s=dv(i.type,null,i.pendingProps,null))?i.memoizedState=s:Te||(s=i.type,e=i.pendingProps,l=xc(Q.current).createElement(s),l[$e]=i,l[Mn]=e,wn(l,s,e),Ot(l),i.stateNode=l):i.memoizedState=dv(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return Dt(i),e===null&&Te&&(l=i.stateNode=cv(i.type,i.pendingProps,Q.current),bn=i,pi=!0,f=qe,Xa(i.type)?(Nd=f,qe=gi(l.firstChild)):qe=f),An(e,i,i.pendingProps.children,s),nc(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&Te&&((f=l=qe)&&(l=GS(l,i.type,i.pendingProps,pi),l!==null?(i.stateNode=l,bn=i,qe=gi(l.firstChild),pi=!1,f=!0):f=!1),f||Da(i)),Dt(i),f=i.type,p=i.pendingProps,y=e!==null?e.memoizedProps:null,l=p.children,Cd(f,p)?l=null:y!==null&&Cd(f,y)&&(i.flags|=32),i.memoizedState!==null&&(f=wf(e,i,iS,null,null,s),qo._currentValue=f),nc(e,i),An(e,i,l,s),i.child;case 6:return e===null&&Te&&((e=s=qe)&&(s=kS(s,i.pendingProps,pi),s!==null?(i.stateNode=s,bn=i,qe=null,e=!0):e=!1),e||Da(i)),null;case 13:return Jg(e,i,s);case 4:return St(i,i.stateNode.containerInfo),l=i.pendingProps,e===null?i.child=ys(i,null,l,s):An(e,i,l,s),i.child;case 11:return kg(e,i,i.type,i.pendingProps,s);case 7:return An(e,i,i.pendingProps,s),i.child;case 8:return An(e,i,i.pendingProps.children,s),i.child;case 12:return An(e,i,i.pendingProps.children,s),i.child;case 10:return l=i.pendingProps,Ua(i,i.type,l.value),An(e,i,l.children,s),i.child;case 9:return f=i.type._context,l=i.pendingProps.children,gs(i),f=Tn(f),l=l(f),i.flags|=1,An(e,i,l,s),i.child;case 14:return Xg(e,i,i.type,i.pendingProps,s);case 15:return jg(e,i,i.type,i.pendingProps,s);case 19:return t0(e,i,s);case 31:return fS(e,i,s);case 22:return Wg(e,i,s,i.pendingProps);case 24:return gs(i),l=Tn(rn),e===null?(f=vf(),f===null&&(f=Xe,p=mf(),f.pooledCache=p,p.refCount++,p!==null&&(f.pooledCacheLanes|=s),f=p),i.memoizedState={parent:l,cache:f},xf(i),Ua(i,rn,f)):((e.lanes&s)!==0&&(yf(e,i),wo(i,null,null,s),Ao()),f=e.memoizedState,p=i.memoizedState,f.parent!==l?(f={parent:l,cache:l},i.memoizedState=f,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=f),Ua(i,rn,l)):(l=p.cache,Ua(i,rn,l),l!==f.cache&&pf(i,[rn],s,!0))),An(e,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function ia(e){e.flags|=4}function ed(e,i,s,l,f){if((i=(e.mode&32)!==0)&&(i=!1),i){if(e.flags|=16777216,(f&335544128)===f)if(e.stateNode.complete)e.flags|=8192;else if(C0())e.flags|=8192;else throw xs=Vl,_f}else e.flags&=-16777217}function n0(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!vv(i))if(C0())e.flags|=8192;else throw xs=Vl,_f}function ac(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?fn():536870912,e.lanes|=i,dr|=i)}function No(e,i){if(!Te)switch(e.tailMode){case"hidden":i=e.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Ye(e){var i=e.alternate!==null&&e.alternate.child===e.child,s=0,l=0;if(i)for(var f=e.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=e,f=f.sibling;else for(f=e.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=e,f=f.sibling;return e.subtreeFlags|=l,e.childLanes=s,i}function hS(e,i,s){var l=i.pendingProps;switch(cf(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(i),null;case 1:return Ye(i),null;case 3:return s=i.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),$i(rn),Tt(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&($s(i)?ia(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ff())),Ye(i),null;case 26:var f=i.type,p=i.memoizedState;return e===null?(ia(i),p!==null?(Ye(i),n0(i,p)):(Ye(i),ed(i,f,null,l,s))):p?p!==e.memoizedState?(ia(i),Ye(i),n0(i,p)):(Ye(i),i.flags&=-16777217):(e=e.memoizedProps,e!==l&&ia(i),Ye(i),ed(i,f,e,l,s)),null;case 27:if($t(i),s=Q.current,f=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&ia(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return Ye(i),null}e=J.current,$s(i)?zm(i):(e=cv(f,l,s),i.stateNode=e,ia(i))}return Ye(i),null;case 5:if($t(i),f=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&ia(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return Ye(i),null}if(p=J.current,$s(i))zm(i);else{var y=xc(Q.current);switch(p){case 1:p=y.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:p=y.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":p=y.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":p=y.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":p=y.createElement("div"),p.innerHTML="<script><\/script>",p=p.removeChild(p.firstChild);break;case"select":p=typeof l.is=="string"?y.createElement("select",{is:l.is}):y.createElement("select"),l.multiple?p.multiple=!0:l.size&&(p.size=l.size);break;default:p=typeof l.is=="string"?y.createElement(f,{is:l.is}):y.createElement(f)}}p[$e]=i,p[Mn]=l;t:for(y=i.child;y!==null;){if(y.tag===5||y.tag===6)p.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===i)break t;for(;y.sibling===null;){if(y.return===null||y.return===i)break t;y=y.return}y.sibling.return=y.return,y=y.sibling}i.stateNode=p;t:switch(wn(p,f,l),f){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break t;case"img":l=!0;break t;default:l=!1}l&&ia(i)}}return Ye(i),ed(i,i.type,e===null?null:e.memoizedProps,i.pendingProps,s),null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==l&&ia(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(a(166));if(e=Q.current,$s(i)){if(e=i.stateNode,s=i.memoizedProps,l=null,f=bn,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}e[$e]=i,e=!!(e.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||J0(e.nodeValue,s)),e||Da(i,!0)}else e=xc(e).createTextNode(l),e[$e]=i,i.stateNode=e}return Ye(i),null;case 31:if(s=i.memoizedState,e===null||e.memoizedState!==null){if(l=$s(i),s!==null){if(e===null){if(!l)throw Error(a(318));if(e=i.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(557));e[$e]=i}else ps(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Ye(i),e=!1}else s=ff(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),e=!0;if(!e)return i.flags&256?($n(i),i):($n(i),null);if((i.flags&128)!==0)throw Error(a(558))}return Ye(i),null;case 13:if(l=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(f=$s(i),l!==null&&l.dehydrated!==null){if(e===null){if(!f)throw Error(a(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(a(317));f[$e]=i}else ps(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Ye(i),f=!1}else f=ff(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=f),f=!0;if(!f)return i.flags&256?($n(i),i):($n(i),null)}return $n(i),(i.flags&128)!==0?(i.lanes=s,i):(s=l!==null,e=e!==null&&e.memoizedState!==null,s&&(l=i.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool),p=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(p=l.memoizedState.cachePool.pool),p!==f&&(l.flags|=2048)),s!==e&&s&&(i.child.flags|=8192),ac(i,i.updateQueue),Ye(i),null);case 4:return Tt(),e===null&&Ed(i.stateNode.containerInfo),Ye(i),null;case 10:return $i(i.type),Ye(i),null;case 19:if(it(nn),l=i.memoizedState,l===null)return Ye(i),null;if(f=(i.flags&128)!==0,p=l.rendering,p===null)if(f)No(l,!1);else{if(en!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(p=jl(e),p!==null){for(i.flags|=128,No(l,!1),e=p.updateQueue,i.updateQueue=e,ac(i,e),i.subtreeFlags=0,e=s,s=i.child;s!==null;)Dm(s,e),s=s.sibling;return Mt(nn,nn.current&1|2),Te&&Qi(i,l.treeForkCount),i.child}e=e.sibling}l.tail!==null&&gt()>cc&&(i.flags|=128,f=!0,No(l,!1),i.lanes=4194304)}else{if(!f)if(e=jl(p),e!==null){if(i.flags|=128,f=!0,e=e.updateQueue,i.updateQueue=e,ac(i,e),No(l,!0),l.tail===null&&l.tailMode==="hidden"&&!p.alternate&&!Te)return Ye(i),null}else 2*gt()-l.renderingStartTime>cc&&s!==536870912&&(i.flags|=128,f=!0,No(l,!1),i.lanes=4194304);l.isBackwards?(p.sibling=i.child,i.child=p):(e=l.last,e!==null?e.sibling=p:i.child=p,l.last=p)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=gt(),e.sibling=null,s=nn.current,Mt(nn,f?s&1|2:s&1),Te&&Qi(i,l.treeForkCount),e):(Ye(i),null);case 22:case 23:return $n(i),bf(),l=i.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(s&536870912)!==0&&(i.flags&128)===0&&(Ye(i),i.subtreeFlags&6&&(i.flags|=8192)):Ye(i),s=i.updateQueue,s!==null&&ac(i,s.retryQueue),s=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==s&&(i.flags|=2048),e!==null&&it(vs),null;case 24:return s=null,e!==null&&(s=e.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),$i(rn),Ye(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function pS(e,i){switch(cf(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return $i(rn),Tt(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return $t(i),null;case 31:if(i.memoizedState!==null){if($n(i),i.alternate===null)throw Error(a(340));ps()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 13:if($n(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(a(340));ps()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return it(nn),null;case 4:return Tt(),null;case 10:return $i(i.type),null;case 22:case 23:return $n(i),bf(),e!==null&&it(vs),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return $i(rn),null;case 25:return null;default:return null}}function i0(e,i){switch(cf(i),i.tag){case 3:$i(rn),Tt();break;case 26:case 27:case 5:$t(i);break;case 4:Tt();break;case 31:i.memoizedState!==null&&$n(i);break;case 13:$n(i);break;case 19:it(nn);break;case 10:$i(i.type);break;case 22:case 23:$n(i),bf(),e!==null&&it(vs);break;case 24:$i(rn)}}function Oo(e,i){try{var s=i.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var f=l.next;s=f;do{if((s.tag&e)===e){l=void 0;var p=s.create,y=s.inst;l=p(),y.destroy=l}s=s.next}while(s!==f)}}catch(A){Pe(i,i.return,A)}}function Ba(e,i,s){try{var l=i.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var p=f.next;l=p;do{if((l.tag&e)===e){var y=l.inst,A=y.destroy;if(A!==void 0){y.destroy=void 0,f=i;var F=s,nt=A;try{nt()}catch(pt){Pe(f,F,pt)}}}l=l.next}while(l!==p)}}catch(pt){Pe(i,i.return,pt)}}function a0(e){var i=e.updateQueue;if(i!==null){var s=e.stateNode;try{Ym(i,s)}catch(l){Pe(e,e.return,l)}}}function s0(e,i,s){s.props=Ms(e.type,e.memoizedProps),s.state=e.memoizedState;try{s.componentWillUnmount()}catch(l){Pe(e,i,l)}}function zo(e,i){try{var s=e.ref;if(s!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof s=="function"?e.refCleanup=s(l):s.current=l}}catch(f){Pe(e,i,f)}}function Pi(e,i){var s=e.ref,l=e.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(f){Pe(e,i,f)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(f){Pe(e,i,f)}else s.current=null}function r0(e){var i=e.type,s=e.memoizedProps,l=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break t;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(f){Pe(e,e.return,f)}}function nd(e,i,s){try{var l=e.stateNode;PS(l,e.type,s,i),l[Mn]=i}catch(f){Pe(e,e.return,f)}}function o0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Xa(e.type)||e.tag===4}function id(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||o0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Xa(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ad(e,i,s){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(e,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(e),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=Yi));else if(l!==4&&(l===27&&Xa(e.type)&&(s=e.stateNode,i=null),e=e.child,e!==null))for(ad(e,i,s),e=e.sibling;e!==null;)ad(e,i,s),e=e.sibling}function sc(e,i,s){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?s.insertBefore(e,i):s.appendChild(e);else if(l!==4&&(l===27&&Xa(e.type)&&(s=e.stateNode),e=e.child,e!==null))for(sc(e,i,s),e=e.sibling;e!==null;)sc(e,i,s),e=e.sibling}function l0(e){var i=e.stateNode,s=e.memoizedProps;try{for(var l=e.type,f=i.attributes;f.length;)i.removeAttributeNode(f[0]);wn(i,l,s),i[$e]=e,i[Mn]=s}catch(p){Pe(e,e.return,p)}}var aa=!1,cn=!1,sd=!1,c0=typeof WeakSet=="function"?WeakSet:Set,_n=null;function mS(e,i){if(e=e.containerInfo,Ad=Ac,e=Sm(e),Qu(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else t:{s=(s=e.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var f=l.anchorOffset,p=l.focusNode;l=l.focusOffset;try{s.nodeType,p.nodeType}catch{s=null;break t}var y=0,A=-1,F=-1,nt=0,pt=0,yt=e,st=null;e:for(;;){for(var ft;yt!==s||f!==0&&yt.nodeType!==3||(A=y+f),yt!==p||l!==0&&yt.nodeType!==3||(F=y+l),yt.nodeType===3&&(y+=yt.nodeValue.length),(ft=yt.firstChild)!==null;)st=yt,yt=ft;for(;;){if(yt===e)break e;if(st===s&&++nt===f&&(A=y),st===p&&++pt===l&&(F=y),(ft=yt.nextSibling)!==null)break;yt=st,st=yt.parentNode}yt=ft}s=A===-1||F===-1?null:{start:A,end:F}}else s=null}s=s||{start:0,end:0}}else s=null;for(wd={focusedElem:e,selectionRange:s},Ac=!1,_n=i;_n!==null;)if(i=_n,e=i.child,(i.subtreeFlags&1028)!==0&&e!==null)e.return=i,_n=e;else for(;_n!==null;){switch(i=_n,p=i.alternate,e=i.flags,i.tag){case 0:if((e&4)!==0&&(e=i.updateQueue,e=e!==null?e.events:null,e!==null))for(s=0;s<e.length;s++)f=e[s],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&p!==null){e=void 0,s=i,f=p.memoizedProps,p=p.memoizedState,l=s.stateNode;try{var Vt=Ms(s.type,f);e=l.getSnapshotBeforeUpdate(Vt,p),l.__reactInternalSnapshotBeforeUpdate=e}catch(te){Pe(s,s.return,te)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,s=e.nodeType,s===9)Dd(e);else if(s===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Dd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=i.sibling,e!==null){e.return=i.return,_n=e;break}_n=i.return}}function u0(e,i,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:ra(e,s),l&4&&Oo(5,s);break;case 1:if(ra(e,s),l&4)if(e=s.stateNode,i===null)try{e.componentDidMount()}catch(y){Pe(s,s.return,y)}else{var f=Ms(s.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(f,i,e.__reactInternalSnapshotBeforeUpdate)}catch(y){Pe(s,s.return,y)}}l&64&&a0(s),l&512&&zo(s,s.return);break;case 3:if(ra(e,s),l&64&&(e=s.updateQueue,e!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{Ym(e,i)}catch(y){Pe(s,s.return,y)}}break;case 27:i===null&&l&4&&l0(s);case 26:case 5:ra(e,s),i===null&&l&4&&r0(s),l&512&&zo(s,s.return);break;case 12:ra(e,s);break;case 31:ra(e,s),l&4&&h0(e,s);break;case 13:ra(e,s),l&4&&p0(e,s),l&64&&(e=s.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(s=bS.bind(null,s),XS(e,s))));break;case 22:if(l=s.memoizedState!==null||aa,!l){i=i!==null&&i.memoizedState!==null||cn,f=aa;var p=cn;aa=l,(cn=i)&&!p?oa(e,s,(s.subtreeFlags&8772)!==0):ra(e,s),aa=f,cn=p}break;case 30:break;default:ra(e,s)}}function f0(e){var i=e.alternate;i!==null&&(e.alternate=null,f0(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&lt(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ke=null,kn=!1;function sa(e,i,s){for(s=s.child;s!==null;)d0(e,i,s),s=s.sibling}function d0(e,i,s){if(Wt&&typeof Wt.onCommitFiberUnmount=="function")try{Wt.onCommitFiberUnmount(Jt,s)}catch{}switch(s.tag){case 26:cn||Pi(s,i),sa(e,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:cn||Pi(s,i);var l=Ke,f=kn;Xa(s.type)&&(Ke=s.stateNode,kn=!1),sa(e,i,s),Xo(s.stateNode),Ke=l,kn=f;break;case 5:cn||Pi(s,i);case 6:if(l=Ke,f=kn,Ke=null,sa(e,i,s),Ke=l,kn=f,Ke!==null)if(kn)try{(Ke.nodeType===9?Ke.body:Ke.nodeName==="HTML"?Ke.ownerDocument.body:Ke).removeChild(s.stateNode)}catch(p){Pe(s,i,p)}else try{Ke.removeChild(s.stateNode)}catch(p){Pe(s,i,p)}break;case 18:Ke!==null&&(kn?(e=Ke,av(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,s.stateNode),yr(e)):av(Ke,s.stateNode));break;case 4:l=Ke,f=kn,Ke=s.stateNode.containerInfo,kn=!0,sa(e,i,s),Ke=l,kn=f;break;case 0:case 11:case 14:case 15:Ba(2,s,i),cn||Ba(4,s,i),sa(e,i,s);break;case 1:cn||(Pi(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"&&s0(s,i,l)),sa(e,i,s);break;case 21:sa(e,i,s);break;case 22:cn=(l=cn)||s.memoizedState!==null,sa(e,i,s),cn=l;break;default:sa(e,i,s)}}function h0(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{yr(e)}catch(s){Pe(i,i.return,s)}}}function p0(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{yr(e)}catch(s){Pe(i,i.return,s)}}function gS(e){switch(e.tag){case 31:case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new c0),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new c0),i;default:throw Error(a(435,e.tag))}}function rc(e,i){var s=gS(e);i.forEach(function(l){if(!s.has(l)){s.add(l);var f=TS.bind(null,e,l);l.then(f,f)}})}function Xn(e,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var f=s[l],p=e,y=i,A=y;t:for(;A!==null;){switch(A.tag){case 27:if(Xa(A.type)){Ke=A.stateNode,kn=!1;break t}break;case 5:Ke=A.stateNode,kn=!1;break t;case 3:case 4:Ke=A.stateNode.containerInfo,kn=!0;break t}A=A.return}if(Ke===null)throw Error(a(160));d0(p,y,f),Ke=null,kn=!1,p=f.alternate,p!==null&&(p.return=null),f.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)m0(i,e),i=i.sibling}var Ai=null;function m0(e,i){var s=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Xn(i,e),jn(e),l&4&&(Ba(3,e,e.return),Oo(3,e),Ba(5,e,e.return));break;case 1:Xn(i,e),jn(e),l&512&&(cn||s===null||Pi(s,s.return)),l&64&&aa&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(s=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var f=Ai;if(Xn(i,e),jn(e),l&512&&(cn||s===null||Pi(s,s.return)),l&4){var p=s!==null?s.memoizedState:null;if(l=e.memoizedState,s===null)if(l===null)if(e.stateNode===null){t:{l=e.type,s=e.memoizedProps,f=f.ownerDocument||f;e:switch(l){case"title":p=f.getElementsByTagName("title")[0],(!p||p[Z]||p[$e]||p.namespaceURI==="http://www.w3.org/2000/svg"||p.hasAttribute("itemprop"))&&(p=f.createElement(l),f.head.insertBefore(p,f.querySelector("head > title"))),wn(p,l,s),p[$e]=e,Ot(p),l=p;break t;case"link":var y=mv("link","href",f).get(l+(s.href||""));if(y){for(var A=0;A<y.length;A++)if(p=y[A],p.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&p.getAttribute("rel")===(s.rel==null?null:s.rel)&&p.getAttribute("title")===(s.title==null?null:s.title)&&p.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){y.splice(A,1);break e}}p=f.createElement(l),wn(p,l,s),f.head.appendChild(p);break;case"meta":if(y=mv("meta","content",f).get(l+(s.content||""))){for(A=0;A<y.length;A++)if(p=y[A],p.getAttribute("content")===(s.content==null?null:""+s.content)&&p.getAttribute("name")===(s.name==null?null:s.name)&&p.getAttribute("property")===(s.property==null?null:s.property)&&p.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&p.getAttribute("charset")===(s.charSet==null?null:s.charSet)){y.splice(A,1);break e}}p=f.createElement(l),wn(p,l,s),f.head.appendChild(p);break;default:throw Error(a(468,l))}p[$e]=e,Ot(p),l=p}e.stateNode=l}else gv(f,e.type,e.stateNode);else e.stateNode=pv(f,l,e.memoizedProps);else p!==l?(p===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):p.count--,l===null?gv(f,e.type,e.stateNode):pv(f,l,e.memoizedProps)):l===null&&e.stateNode!==null&&nd(e,e.memoizedProps,s.memoizedProps)}break;case 27:Xn(i,e),jn(e),l&512&&(cn||s===null||Pi(s,s.return)),s!==null&&l&4&&nd(e,e.memoizedProps,s.memoizedProps);break;case 5:if(Xn(i,e),jn(e),l&512&&(cn||s===null||Pi(s,s.return)),e.flags&32){f=e.stateNode;try{ks(f,"")}catch(Vt){Pe(e,e.return,Vt)}}l&4&&e.stateNode!=null&&(f=e.memoizedProps,nd(e,f,s!==null?s.memoizedProps:f)),l&1024&&(sd=!0);break;case 6:if(Xn(i,e),jn(e),l&4){if(e.stateNode===null)throw Error(a(162));l=e.memoizedProps,s=e.stateNode;try{s.nodeValue=l}catch(Vt){Pe(e,e.return,Vt)}}break;case 3:if(Mc=null,f=Ai,Ai=yc(i.containerInfo),Xn(i,e),Ai=f,jn(e),l&4&&s!==null&&s.memoizedState.isDehydrated)try{yr(i.containerInfo)}catch(Vt){Pe(e,e.return,Vt)}sd&&(sd=!1,g0(e));break;case 4:l=Ai,Ai=yc(e.stateNode.containerInfo),Xn(i,e),jn(e),Ai=l;break;case 12:Xn(i,e),jn(e);break;case 31:Xn(i,e),jn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,rc(e,l)));break;case 13:Xn(i,e),jn(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(lc=gt()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,rc(e,l)));break;case 22:f=e.memoizedState!==null;var F=s!==null&&s.memoizedState!==null,nt=aa,pt=cn;if(aa=nt||f,cn=pt||F,Xn(i,e),cn=pt,aa=nt,jn(e),l&8192)t:for(i=e.stateNode,i._visibility=f?i._visibility&-2:i._visibility|1,f&&(s===null||F||aa||cn||Es(e)),s=null,i=e;;){if(i.tag===5||i.tag===26){if(s===null){F=s=i;try{if(p=F.stateNode,f)y=p.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{A=F.stateNode;var yt=F.memoizedProps.style,st=yt!=null&&yt.hasOwnProperty("display")?yt.display:null;A.style.display=st==null||typeof st=="boolean"?"":(""+st).trim()}}catch(Vt){Pe(F,F.return,Vt)}}}else if(i.tag===6){if(s===null){F=i;try{F.stateNode.nodeValue=f?"":F.memoizedProps}catch(Vt){Pe(F,F.return,Vt)}}}else if(i.tag===18){if(s===null){F=i;try{var ft=F.stateNode;f?sv(ft,!0):sv(F.stateNode,!1)}catch(Vt){Pe(F,F.return,Vt)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=e.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,rc(e,s))));break;case 19:Xn(i,e),jn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,rc(e,l)));break;case 30:break;case 21:break;default:Xn(i,e),jn(e)}}function jn(e){var i=e.flags;if(i&2){try{for(var s,l=e.return;l!==null;){if(o0(l)){s=l;break}l=l.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var f=s.stateNode,p=id(e);sc(e,p,f);break;case 5:var y=s.stateNode;s.flags&32&&(ks(y,""),s.flags&=-33);var A=id(e);sc(e,A,y);break;case 3:case 4:var F=s.stateNode.containerInfo,nt=id(e);ad(e,nt,F);break;default:throw Error(a(161))}}catch(pt){Pe(e,e.return,pt)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function g0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;g0(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function ra(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)u0(e,i.alternate,i),i=i.sibling}function Es(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:Ba(4,i,i.return),Es(i);break;case 1:Pi(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&s0(i,i.return,s),Es(i);break;case 27:Xo(i.stateNode);case 26:case 5:Pi(i,i.return),Es(i);break;case 22:i.memoizedState===null&&Es(i);break;case 30:Es(i);break;default:Es(i)}e=e.sibling}}function oa(e,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,f=e,p=i,y=p.flags;switch(p.tag){case 0:case 11:case 15:oa(f,p,s),Oo(4,p);break;case 1:if(oa(f,p,s),l=p,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(nt){Pe(l,l.return,nt)}if(l=p,f=l.updateQueue,f!==null){var A=l.stateNode;try{var F=f.shared.hiddenCallbacks;if(F!==null)for(f.shared.hiddenCallbacks=null,f=0;f<F.length;f++)qm(F[f],A)}catch(nt){Pe(l,l.return,nt)}}s&&y&64&&a0(p),zo(p,p.return);break;case 27:l0(p);case 26:case 5:oa(f,p,s),s&&l===null&&y&4&&r0(p),zo(p,p.return);break;case 12:oa(f,p,s);break;case 31:oa(f,p,s),s&&y&4&&h0(f,p);break;case 13:oa(f,p,s),s&&y&4&&p0(f,p);break;case 22:p.memoizedState===null&&oa(f,p,s),zo(p,p.return);break;case 30:break;default:oa(f,p,s)}i=i.sibling}}function rd(e,i){var s=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==s&&(e!=null&&e.refCount++,s!=null&&So(s))}function od(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&So(e))}function wi(e,i,s,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)v0(e,i,s,l),i=i.sibling}function v0(e,i,s,l){var f=i.flags;switch(i.tag){case 0:case 11:case 15:wi(e,i,s,l),f&2048&&Oo(9,i);break;case 1:wi(e,i,s,l);break;case 3:wi(e,i,s,l),f&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&So(e)));break;case 12:if(f&2048){wi(e,i,s,l),e=i.stateNode;try{var p=i.memoizedProps,y=p.id,A=p.onPostCommit;typeof A=="function"&&A(y,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(F){Pe(i,i.return,F)}}else wi(e,i,s,l);break;case 31:wi(e,i,s,l);break;case 13:wi(e,i,s,l);break;case 23:break;case 22:p=i.stateNode,y=i.alternate,i.memoizedState!==null?p._visibility&2?wi(e,i,s,l):Po(e,i):p._visibility&2?wi(e,i,s,l):(p._visibility|=2,cr(e,i,s,l,(i.subtreeFlags&10256)!==0||!1)),f&2048&&rd(y,i);break;case 24:wi(e,i,s,l),f&2048&&od(i.alternate,i);break;default:wi(e,i,s,l)}}function cr(e,i,s,l,f){for(f=f&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var p=e,y=i,A=s,F=l,nt=y.flags;switch(y.tag){case 0:case 11:case 15:cr(p,y,A,F,f),Oo(8,y);break;case 23:break;case 22:var pt=y.stateNode;y.memoizedState!==null?pt._visibility&2?cr(p,y,A,F,f):Po(p,y):(pt._visibility|=2,cr(p,y,A,F,f)),f&&nt&2048&&rd(y.alternate,y);break;case 24:cr(p,y,A,F,f),f&&nt&2048&&od(y.alternate,y);break;default:cr(p,y,A,F,f)}i=i.sibling}}function Po(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=e,l=i,f=l.flags;switch(l.tag){case 22:Po(s,l),f&2048&&rd(l.alternate,l);break;case 24:Po(s,l),f&2048&&od(l.alternate,l);break;default:Po(s,l)}i=i.sibling}}var Bo=8192;function ur(e,i,s){if(e.subtreeFlags&Bo)for(e=e.child;e!==null;)_0(e,i,s),e=e.sibling}function _0(e,i,s){switch(e.tag){case 26:ur(e,i,s),e.flags&Bo&&e.memoizedState!==null&&nM(s,Ai,e.memoizedState,e.memoizedProps);break;case 5:ur(e,i,s);break;case 3:case 4:var l=Ai;Ai=yc(e.stateNode.containerInfo),ur(e,i,s),Ai=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=Bo,Bo=16777216,ur(e,i,s),Bo=l):ur(e,i,s));break;default:ur(e,i,s)}}function x0(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function Io(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];_n=l,S0(l,e)}x0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)y0(e),e=e.sibling}function y0(e){switch(e.tag){case 0:case 11:case 15:Io(e),e.flags&2048&&Ba(9,e,e.return);break;case 3:Io(e);break;case 12:Io(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,oc(e)):Io(e);break;default:Io(e)}}function oc(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];_n=l,S0(l,e)}x0(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:Ba(8,i,i.return),oc(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,oc(i));break;default:oc(i)}e=e.sibling}}function S0(e,i){for(;_n!==null;){var s=_n;switch(s.tag){case 0:case 11:case 15:Ba(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:So(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,_n=l;else t:for(s=e;_n!==null;){l=_n;var f=l.sibling,p=l.return;if(f0(l),l===s){_n=null;break t}if(f!==null){f.return=p,_n=f;break t}_n=p}}}var vS={getCacheForType:function(e){var i=Tn(rn),s=i.data.get(e);return s===void 0&&(s=e(),i.data.set(e,s)),s},cacheSignal:function(){return Tn(rn).controller.signal}},_S=typeof WeakMap=="function"?WeakMap:Map,Ue=0,Xe=null,_e=null,Se=0,ze=0,ti=null,Ia=!1,fr=!1,ld=!1,la=0,en=0,Fa=0,bs=0,cd=0,ei=0,dr=0,Fo=null,Wn=null,ud=!1,lc=0,M0=0,cc=1/0,uc=null,Ha=null,hn=0,Va=null,hr=null,ca=0,fd=0,dd=null,E0=null,Ho=0,hd=null;function ni(){return(Ue&2)!==0&&Se!==0?Se&-Se:I.T!==null?xd():oo()}function b0(){if(ei===0)if((Se&536870912)===0||Te){var e=dt;dt<<=1,(dt&3932160)===0&&(dt=262144),ei=e}else ei=536870912;return e=Jn.current,e!==null&&(e.flags|=32),ei}function qn(e,i,s){(e===Xe&&(ze===2||ze===9)||e.cancelPendingCommit!==null)&&(pr(e,0),Ga(e,Se,ei,!1)),Sn(e,s),((Ue&2)===0||e!==Xe)&&(e===Xe&&((Ue&2)===0&&(bs|=s),en===4&&Ga(e,Se,ei,!1)),Bi(e))}function T0(e,i,s){if((Ue&6)!==0)throw Error(a(327));var l=!s&&(i&127)===0&&(i&e.expiredLanes)===0||ae(e,i),f=l?SS(e,i):md(e,i,!0),p=l;do{if(f===0){fr&&!l&&Ga(e,i,0,!1);break}else{if(s=e.current.alternate,p&&!xS(s)){f=md(e,i,!1),p=!1;continue}if(f===2){if(p=i,e.errorRecoveryDisabledLanes&p)var y=0;else y=e.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){i=y;t:{var A=e;f=Fo;var F=A.current.memoizedState.isDehydrated;if(F&&(pr(A,y).flags|=256),y=md(A,y,!1),y!==2){if(ld&&!F){A.errorRecoveryDisabledLanes|=p,bs|=p,f=4;break t}p=Wn,Wn=f,p!==null&&(Wn===null?Wn=p:Wn.push.apply(Wn,p))}f=y}if(p=!1,f!==2)continue}}if(f===1){pr(e,0),Ga(e,i,0,!0);break}t:{switch(l=e,p=f,p){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:Ga(l,i,ei,!Ia);break t;case 2:Wn=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(f=lc+300-gt(),10<f)){if(Ga(l,i,ei,!Ia),Pt(l,0,!0)!==0)break t;ca=i,l.timeoutHandle=nv(A0.bind(null,l,s,Wn,uc,ud,i,ei,bs,dr,Ia,p,"Throttled",-0,0),f);break t}A0(l,s,Wn,uc,ud,i,ei,bs,dr,Ia,p,null,-0,0)}}break}while(!0);Bi(e)}function A0(e,i,s,l,f,p,y,A,F,nt,pt,yt,st,ft){if(e.timeoutHandle=-1,yt=i.subtreeFlags,yt&8192||(yt&16785408)===16785408){yt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Yi},_0(i,p,yt);var Vt=(p&62914560)===p?lc-gt():(p&4194048)===p?M0-gt():0;if(Vt=iM(yt,Vt),Vt!==null){ca=p,e.cancelPendingCommit=Vt(O0.bind(null,e,i,p,s,l,f,y,A,F,pt,yt,null,st,ft)),Ga(e,p,y,!nt);return}}O0(e,i,p,s,l,f,y,A,F)}function xS(e){for(var i=e;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var f=s[l],p=f.getSnapshot;f=f.value;try{if(!Kn(p(),f))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Ga(e,i,s,l){i&=~cd,i&=~bs,e.suspendedLanes|=i,e.pingedLanes&=~i,l&&(e.warmLanes|=i),l=e.expirationTimes;for(var f=i;0<f;){var p=31-ie(f),y=1<<p;l[p]=-1,f&=~y}s!==0&&so(e,s,i)}function fc(){return(Ue&6)===0?(Vo(0),!1):!0}function pd(){if(_e!==null){if(ze===0)var e=_e.return;else e=_e,Ji=ms=null,Df(e),ar=null,Eo=0,e=_e;for(;e!==null;)i0(e.alternate,e),e=e.return;_e=null}}function pr(e,i){var s=e.timeoutHandle;s!==-1&&(e.timeoutHandle=-1,FS(s)),s=e.cancelPendingCommit,s!==null&&(e.cancelPendingCommit=null,s()),ca=0,pd(),Xe=e,_e=s=Ki(e.current,null),Se=i,ze=0,ti=null,Ia=!1,fr=ae(e,i),ld=!1,dr=ei=cd=bs=Fa=en=0,Wn=Fo=null,ud=!1,(i&8)!==0&&(i|=i&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=i;0<l;){var f=31-ie(l),p=1<<f;i|=e[f],l&=~p}return la=i,Ll(),s}function w0(e,i){de=null,I.H=Uo,i===ir||i===Hl?(i=km(),ze=3):i===_f?(i=km(),ze=4):ze=i===Wf?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,ti=i,_e===null&&(en=1,tc(e,fi(i,e.current)))}function C0(){var e=Jn.current;return e===null?!0:(Se&4194048)===Se?mi===null:(Se&62914560)===Se||(Se&536870912)!==0?e===mi:!1}function R0(){var e=I.H;return I.H=Uo,e===null?Uo:e}function D0(){var e=I.A;return I.A=vS,e}function dc(){en=4,Ia||(Se&4194048)!==Se&&Jn.current!==null||(fr=!0),(Fa&134217727)===0&&(bs&134217727)===0||Xe===null||Ga(Xe,Se,ei,!1)}function md(e,i,s){var l=Ue;Ue|=2;var f=R0(),p=D0();(Xe!==e||Se!==i)&&(uc=null,pr(e,i)),i=!1;var y=en;t:do try{if(ze!==0&&_e!==null){var A=_e,F=ti;switch(ze){case 8:pd(),y=6;break t;case 3:case 2:case 9:case 6:Jn.current===null&&(i=!0);var nt=ze;if(ze=0,ti=null,mr(e,A,F,nt),s&&fr){y=0;break t}break;default:nt=ze,ze=0,ti=null,mr(e,A,F,nt)}}yS(),y=en;break}catch(pt){w0(e,pt)}while(!0);return i&&e.shellSuspendCounter++,Ji=ms=null,Ue=l,I.H=f,I.A=p,_e===null&&(Xe=null,Se=0,Ll()),y}function yS(){for(;_e!==null;)U0(_e)}function SS(e,i){var s=Ue;Ue|=2;var l=R0(),f=D0();Xe!==e||Se!==i?(uc=null,cc=gt()+500,pr(e,i)):fr=ae(e,i);t:do try{if(ze!==0&&_e!==null){i=_e;var p=ti;e:switch(ze){case 1:ze=0,ti=null,mr(e,i,p,1);break;case 2:case 9:if(Vm(p)){ze=0,ti=null,L0(i);break}i=function(){ze!==2&&ze!==9||Xe!==e||(ze=7),Bi(e)},p.then(i,i);break t;case 3:ze=7;break t;case 4:ze=5;break t;case 7:Vm(p)?(ze=0,ti=null,L0(i)):(ze=0,ti=null,mr(e,i,p,7));break;case 5:var y=null;switch(_e.tag){case 26:y=_e.memoizedState;case 5:case 27:var A=_e;if(y?vv(y):A.stateNode.complete){ze=0,ti=null;var F=A.sibling;if(F!==null)_e=F;else{var nt=A.return;nt!==null?(_e=nt,hc(nt)):_e=null}break e}}ze=0,ti=null,mr(e,i,p,5);break;case 6:ze=0,ti=null,mr(e,i,p,6);break;case 8:pd(),en=6;break t;default:throw Error(a(462))}}MS();break}catch(pt){w0(e,pt)}while(!0);return Ji=ms=null,I.H=l,I.A=f,Ue=s,_e!==null?0:(Xe=null,Se=0,Ll(),en)}function MS(){for(;_e!==null&&!w();)U0(_e)}function U0(e){var i=e0(e.alternate,e,la);e.memoizedProps=e.pendingProps,i===null?hc(e):_e=i}function L0(e){var i=e,s=i.alternate;switch(i.tag){case 15:case 0:i=Zg(s,i,i.pendingProps,i.type,void 0,Se);break;case 11:i=Zg(s,i,i.pendingProps,i.type.render,i.ref,Se);break;case 5:Df(i);default:i0(s,i),i=_e=Dm(i,la),i=e0(s,i,la)}e.memoizedProps=e.pendingProps,i===null?hc(e):_e=i}function mr(e,i,s,l){Ji=ms=null,Df(i),ar=null,Eo=0;var f=i.return;try{if(uS(e,f,i,s,Se)){en=1,tc(e,fi(s,e.current)),_e=null;return}}catch(p){if(f!==null)throw _e=f,p;en=1,tc(e,fi(s,e.current)),_e=null;return}i.flags&32768?(Te||l===1?e=!0:fr||(Se&536870912)!==0?e=!1:(Ia=e=!0,(l===2||l===9||l===3||l===6)&&(l=Jn.current,l!==null&&l.tag===13&&(l.flags|=16384))),N0(i,e)):hc(i)}function hc(e){var i=e;do{if((i.flags&32768)!==0){N0(i,Ia);return}e=i.return;var s=hS(i.alternate,i,la);if(s!==null){_e=s;return}if(i=i.sibling,i!==null){_e=i;return}_e=i=e}while(i!==null);en===0&&(en=5)}function N0(e,i){do{var s=pS(e.alternate,e);if(s!==null){s.flags&=32767,_e=s;return}if(s=e.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(e=e.sibling,e!==null)){_e=e;return}_e=e=s}while(e!==null);en=6,_e=null}function O0(e,i,s,l,f,p,y,A,F){e.cancelPendingCommit=null;do pc();while(hn!==0);if((Ue&6)!==0)throw Error(a(327));if(i!==null){if(i===e.current)throw Error(a(177));if(p=i.lanes|i.childLanes,p|=nf,Mi(e,s,p,y,A,F),e===Xe&&(_e=Xe=null,Se=0),hr=i,Va=e,ca=s,fd=p,dd=f,E0=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,AS(zt,function(){return F0(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=I.T,I.T=null,f=H.p,H.p=2,y=Ue,Ue|=4;try{mS(e,i,s)}finally{Ue=y,H.p=f,I.T=l}}hn=1,z0(),P0(),B0()}}function z0(){if(hn===1){hn=0;var e=Va,i=hr,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=I.T,I.T=null;var l=H.p;H.p=2;var f=Ue;Ue|=4;try{m0(i,e);var p=wd,y=Sm(e.containerInfo),A=p.focusedElem,F=p.selectionRange;if(y!==A&&A&&A.ownerDocument&&ym(A.ownerDocument.documentElement,A)){if(F!==null&&Qu(A)){var nt=F.start,pt=F.end;if(pt===void 0&&(pt=nt),"selectionStart"in A)A.selectionStart=nt,A.selectionEnd=Math.min(pt,A.value.length);else{var yt=A.ownerDocument||document,st=yt&&yt.defaultView||window;if(st.getSelection){var ft=st.getSelection(),Vt=A.textContent.length,te=Math.min(F.start,Vt),Ge=F.end===void 0?te:Math.min(F.end,Vt);!ft.extend&&te>Ge&&(y=Ge,Ge=te,te=y);var $=xm(A,te),X=xm(A,Ge);if($&&X&&(ft.rangeCount!==1||ft.anchorNode!==$.node||ft.anchorOffset!==$.offset||ft.focusNode!==X.node||ft.focusOffset!==X.offset)){var et=yt.createRange();et.setStart($.node,$.offset),ft.removeAllRanges(),te>Ge?(ft.addRange(et),ft.extend(X.node,X.offset)):(et.setEnd(X.node,X.offset),ft.addRange(et))}}}}for(yt=[],ft=A;ft=ft.parentNode;)ft.nodeType===1&&yt.push({element:ft,left:ft.scrollLeft,top:ft.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<yt.length;A++){var vt=yt[A];vt.element.scrollLeft=vt.left,vt.element.scrollTop=vt.top}}Ac=!!Ad,wd=Ad=null}finally{Ue=f,H.p=l,I.T=s}}e.current=i,hn=2}}function P0(){if(hn===2){hn=0;var e=Va,i=hr,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=I.T,I.T=null;var l=H.p;H.p=2;var f=Ue;Ue|=4;try{u0(e,i.alternate,i)}finally{Ue=f,H.p=l,I.T=s}}hn=3}}function B0(){if(hn===4||hn===3){hn=0,rt();var e=Va,i=hr,s=ca,l=E0;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?hn=5:(hn=0,hr=Va=null,I0(e,e.pendingLanes));var f=e.pendingLanes;if(f===0&&(Ha=null),Gs(s),i=i.stateNode,Wt&&typeof Wt.onCommitFiberRoot=="function")try{Wt.onCommitFiberRoot(Jt,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=I.T,f=H.p,H.p=2,I.T=null;try{for(var p=e.onRecoverableError,y=0;y<l.length;y++){var A=l[y];p(A.value,{componentStack:A.stack})}}finally{I.T=i,H.p=f}}(ca&3)!==0&&pc(),Bi(e),f=e.pendingLanes,(s&261930)!==0&&(f&42)!==0?e===hd?Ho++:(Ho=0,hd=e):Ho=0,Vo(0)}}function I0(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,So(i)))}function pc(){return z0(),P0(),B0(),F0()}function F0(){if(hn!==5)return!1;var e=Va,i=fd;fd=0;var s=Gs(ca),l=I.T,f=H.p;try{H.p=32>s?32:s,I.T=null,s=dd,dd=null;var p=Va,y=ca;if(hn=0,hr=Va=null,ca=0,(Ue&6)!==0)throw Error(a(331));var A=Ue;if(Ue|=4,y0(p.current),v0(p,p.current,y,s),Ue=A,Vo(0,!1),Wt&&typeof Wt.onPostCommitFiberRoot=="function")try{Wt.onPostCommitFiberRoot(Jt,p)}catch{}return!0}finally{H.p=f,I.T=l,I0(e,i)}}function H0(e,i,s){i=fi(s,i),i=jf(e.stateNode,i,2),e=Oa(e,i,2),e!==null&&(Sn(e,2),Bi(e))}function Pe(e,i,s){if(e.tag===3)H0(e,e,s);else for(;i!==null;){if(i.tag===3){H0(i,e,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Ha===null||!Ha.has(l))){e=fi(s,e),s=Vg(2),l=Oa(i,s,2),l!==null&&(Gg(s,l,i,e),Sn(l,2),Bi(l));break}}i=i.return}}function gd(e,i,s){var l=e.pingCache;if(l===null){l=e.pingCache=new _S;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(s)||(ld=!0,f.add(s),e=ES.bind(null,e,i,s),i.then(e,e))}function ES(e,i,s){var l=e.pingCache;l!==null&&l.delete(i),e.pingedLanes|=e.suspendedLanes&s,e.warmLanes&=~s,Xe===e&&(Se&s)===s&&(en===4||en===3&&(Se&62914560)===Se&&300>gt()-lc?(Ue&2)===0&&pr(e,0):cd|=s,dr===Se&&(dr=0)),Bi(e)}function V0(e,i){i===0&&(i=fn()),e=ds(e,i),e!==null&&(Sn(e,i),Bi(e))}function bS(e){var i=e.memoizedState,s=0;i!==null&&(s=i.retryLane),V0(e,s)}function TS(e,i){var s=0;switch(e.tag){case 31:case 13:var l=e.stateNode,f=e.memoizedState;f!==null&&(s=f.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(i),V0(e,s)}function AS(e,i){return Yt(e,i)}var mc=null,gr=null,vd=!1,gc=!1,_d=!1,ka=0;function Bi(e){e!==gr&&e.next===null&&(gr===null?mc=gr=e:gr=gr.next=e),gc=!0,vd||(vd=!0,CS())}function Vo(e,i){if(!_d&&gc){_d=!0;do for(var s=!1,l=mc;l!==null;){if(e!==0){var f=l.pendingLanes;if(f===0)var p=0;else{var y=l.suspendedLanes,A=l.pingedLanes;p=(1<<31-ie(42|e)+1)-1,p&=f&~(y&~A),p=p&201326741?p&201326741|1:p?p|2:0}p!==0&&(s=!0,j0(l,p))}else p=Se,p=Pt(l,l===Xe?p:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(p&3)===0||ae(l,p)||(s=!0,j0(l,p));l=l.next}while(s);_d=!1}}function wS(){G0()}function G0(){gc=vd=!1;var e=0;ka!==0&&IS()&&(e=ka);for(var i=gt(),s=null,l=mc;l!==null;){var f=l.next,p=k0(l,i);p===0?(l.next=null,s===null?mc=f:s.next=f,f===null&&(gr=s)):(s=l,(e!==0||(p&3)!==0)&&(gc=!0)),l=f}hn!==0&&hn!==5||Vo(e),ka!==0&&(ka=0)}function k0(e,i){for(var s=e.suspendedLanes,l=e.pingedLanes,f=e.expirationTimes,p=e.pendingLanes&-62914561;0<p;){var y=31-ie(p),A=1<<y,F=f[y];F===-1?((A&s)===0||(A&l)!==0)&&(f[y]=Ze(A,i)):F<=i&&(e.expiredLanes|=A),p&=~A}if(i=Xe,s=Se,s=Pt(e,e===i?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,s===0||e===i&&(ze===2||ze===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&L(l),e.callbackNode=null,e.callbackPriority=0;if((s&3)===0||ae(e,s)){if(i=s&-s,i===e.callbackPriority)return i;switch(l!==null&&L(l),Gs(s)){case 2:case 8:s=jt;break;case 32:s=zt;break;case 268435456:s=ye;break;default:s=zt}return l=X0.bind(null,e),s=Yt(s,l),e.callbackPriority=i,e.callbackNode=s,i}return l!==null&&l!==null&&L(l),e.callbackPriority=2,e.callbackNode=null,2}function X0(e,i){if(hn!==0&&hn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var s=e.callbackNode;if(pc()&&e.callbackNode!==s)return null;var l=Se;return l=Pt(e,e===Xe?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(T0(e,l,i),k0(e,gt()),e.callbackNode!=null&&e.callbackNode===s?X0.bind(null,e):null)}function j0(e,i){if(pc())return null;T0(e,i,!0)}function CS(){HS(function(){(Ue&6)!==0?Yt(xt,wS):G0()})}function xd(){if(ka===0){var e=er;e===0&&(e=Ut,Ut<<=1,(Ut&261888)===0&&(Ut=256)),ka=e}return ka}function W0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:bl(""+e)}function q0(e,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,e.id&&s.setAttribute("form",e.id),i.parentNode.insertBefore(s,i),e=new FormData(e),s.parentNode.removeChild(s),e}function RS(e,i,s,l,f){if(i==="submit"&&s&&s.stateNode===f){var p=W0((f[Mn]||null).action),y=l.submitter;y&&(i=(i=y[Mn]||null)?W0(i.formAction):y.getAttribute("formAction"),i!==null&&(p=i,y=null));var A=new Cl("action","action",null,l,f);e.push({event:A,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(ka!==0){var F=y?q0(f,y):new FormData(f);Ff(s,{pending:!0,data:F,method:f.method,action:p},null,F)}}else typeof p=="function"&&(A.preventDefault(),F=y?q0(f,y):new FormData(f),Ff(s,{pending:!0,data:F,method:f.method,action:p},p,F))},currentTarget:f}]})}}for(var yd=0;yd<ef.length;yd++){var Sd=ef[yd],DS=Sd.toLowerCase(),US=Sd[0].toUpperCase()+Sd.slice(1);Ti(DS,"on"+US)}Ti(bm,"onAnimationEnd"),Ti(Tm,"onAnimationIteration"),Ti(Am,"onAnimationStart"),Ti("dblclick","onDoubleClick"),Ti("focusin","onFocus"),Ti("focusout","onBlur"),Ti(qy,"onTransitionRun"),Ti(Yy,"onTransitionStart"),Ti(Zy,"onTransitionCancel"),Ti(wm,"onTransitionEnd"),Ht("onMouseEnter",["mouseout","mouseover"]),Ht("onMouseLeave",["mouseout","mouseover"]),Ht("onPointerEnter",["pointerout","pointerover"]),Ht("onPointerLeave",["pointerout","pointerover"]),ee("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ee("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ee("onBeforeInput",["compositionend","keypress","textInput","paste"]),ee("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ee("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ee("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Go="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),LS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Go));function Y0(e,i){i=(i&4)!==0;for(var s=0;s<e.length;s++){var l=e[s],f=l.event;l=l.listeners;t:{var p=void 0;if(i)for(var y=l.length-1;0<=y;y--){var A=l[y],F=A.instance,nt=A.currentTarget;if(A=A.listener,F!==p&&f.isPropagationStopped())break t;p=A,f.currentTarget=nt;try{p(f)}catch(pt){Ul(pt)}f.currentTarget=null,p=F}else for(y=0;y<l.length;y++){if(A=l[y],F=A.instance,nt=A.currentTarget,A=A.listener,F!==p&&f.isPropagationStopped())break t;p=A,f.currentTarget=nt;try{p(f)}catch(pt){Ul(pt)}f.currentTarget=null,p=F}}}}function xe(e,i){var s=i[lo];s===void 0&&(s=i[lo]=new Set);var l=e+"__bubble";s.has(l)||(Z0(i,e,2,!1),s.add(l))}function Md(e,i,s){var l=0;i&&(l|=4),Z0(s,e,l,i)}var vc="_reactListening"+Math.random().toString(36).slice(2);function Ed(e){if(!e[vc]){e[vc]=!0,Gt.forEach(function(s){s!=="selectionchange"&&(LS.has(s)||Md(s,!1,e),Md(s,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[vc]||(i[vc]=!0,Md("selectionchange",!1,i))}}function Z0(e,i,s,l){switch(bv(i)){case 2:var f=rM;break;case 8:f=oM;break;default:f=Id}s=f.bind(null,i,s,e),f=void 0,!Gu||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?e.addEventListener(i,s,{capture:!0,passive:f}):e.addEventListener(i,s,!0):f!==void 0?e.addEventListener(i,s,{passive:f}):e.addEventListener(i,s,!1)}function bd(e,i,s,l,f){var p=l;if((i&1)===0&&(i&2)===0&&l!==null)t:for(;;){if(l===null)return;var y=l.tag;if(y===3||y===4){var A=l.stateNode.containerInfo;if(A===f)break;if(y===4)for(y=l.return;y!==null;){var F=y.tag;if((F===3||F===4)&&y.stateNode.containerInfo===f)return;y=y.return}for(;A!==null;){if(y=ot(A),y===null)return;if(F=y.tag,F===5||F===6||F===26||F===27){l=p=y;continue t}A=A.parentNode}}l=l.return}tm(function(){var nt=p,pt=Hu(s),yt=[];t:{var st=Cm.get(e);if(st!==void 0){var ft=Cl,Vt=e;switch(e){case"keypress":if(Al(s)===0)break t;case"keydown":case"keyup":ft=Ty;break;case"focusin":Vt="focus",ft=Wu;break;case"focusout":Vt="blur",ft=Wu;break;case"beforeblur":case"afterblur":ft=Wu;break;case"click":if(s.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ft=im;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ft=hy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ft=Cy;break;case bm:case Tm:case Am:ft=gy;break;case wm:ft=Dy;break;case"scroll":case"scrollend":ft=fy;break;case"wheel":ft=Ly;break;case"copy":case"cut":case"paste":ft=_y;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ft=sm;break;case"toggle":case"beforetoggle":ft=Oy}var te=(i&4)!==0,Ge=!te&&(e==="scroll"||e==="scrollend"),$=te?st!==null?st+"Capture":null:st;te=[];for(var X=nt,et;X!==null;){var vt=X;if(et=vt.stateNode,vt=vt.tag,vt!==5&&vt!==26&&vt!==27||et===null||$===null||(vt=co(X,$),vt!=null&&te.push(ko(X,vt,et))),Ge)break;X=X.return}0<te.length&&(st=new ft(st,Vt,null,s,pt),yt.push({event:st,listeners:te}))}}if((i&7)===0){t:{if(st=e==="mouseover"||e==="pointerover",ft=e==="mouseout"||e==="pointerout",st&&s!==Fu&&(Vt=s.relatedTarget||s.fromElement)&&(ot(Vt)||Vt[Wi]))break t;if((ft||st)&&(st=pt.window===pt?pt:(st=pt.ownerDocument)?st.defaultView||st.parentWindow:window,ft?(Vt=s.relatedTarget||s.toElement,ft=nt,Vt=Vt?ot(Vt):null,Vt!==null&&(Ge=c(Vt),te=Vt.tag,Vt!==Ge||te!==5&&te!==27&&te!==6)&&(Vt=null)):(ft=null,Vt=nt),ft!==Vt)){if(te=im,vt="onMouseLeave",$="onMouseEnter",X="mouse",(e==="pointerout"||e==="pointerover")&&(te=sm,vt="onPointerLeave",$="onPointerEnter",X="pointer"),Ge=ft==null?st:wt(ft),et=Vt==null?st:wt(Vt),st=new te(vt,X+"leave",ft,s,pt),st.target=Ge,st.relatedTarget=et,vt=null,ot(pt)===nt&&(te=new te($,X+"enter",Vt,s,pt),te.target=et,te.relatedTarget=Ge,vt=te),Ge=vt,ft&&Vt)e:{for(te=NS,$=ft,X=Vt,et=0,vt=$;vt;vt=te(vt))et++;vt=0;for(var Kt=X;Kt;Kt=te(Kt))vt++;for(;0<et-vt;)$=te($),et--;for(;0<vt-et;)X=te(X),vt--;for(;et--;){if($===X||X!==null&&$===X.alternate){te=$;break e}$=te($),X=te(X)}te=null}else te=null;ft!==null&&K0(yt,st,ft,te,!1),Vt!==null&&Ge!==null&&K0(yt,Ge,Vt,te,!0)}}t:{if(st=nt?wt(nt):window,ft=st.nodeName&&st.nodeName.toLowerCase(),ft==="select"||ft==="input"&&st.type==="file")var Re=hm;else if(fm(st))if(pm)Re=Xy;else{Re=Gy;var Xt=Vy}else ft=st.nodeName,!ft||ft.toLowerCase()!=="input"||st.type!=="checkbox"&&st.type!=="radio"?nt&&Iu(nt.elementType)&&(Re=hm):Re=ky;if(Re&&(Re=Re(e,nt))){dm(yt,Re,s,pt);break t}Xt&&Xt(e,st,nt),e==="focusout"&&nt&&st.type==="number"&&nt.memoizedProps.value!=null&&ci(st,"number",st.value)}switch(Xt=nt?wt(nt):window,e){case"focusin":(fm(Xt)||Xt.contentEditable==="true")&&(qs=Xt,Ju=nt,_o=null);break;case"focusout":_o=Ju=qs=null;break;case"mousedown":$u=!0;break;case"contextmenu":case"mouseup":case"dragend":$u=!1,Mm(yt,s,pt);break;case"selectionchange":if(Wy)break;case"keydown":case"keyup":Mm(yt,s,pt)}var he;if(Yu)t:{switch(e){case"compositionstart":var Me="onCompositionStart";break t;case"compositionend":Me="onCompositionEnd";break t;case"compositionupdate":Me="onCompositionUpdate";break t}Me=void 0}else Ws?cm(e,s)&&(Me="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(Me="onCompositionStart");Me&&(rm&&s.locale!=="ko"&&(Ws||Me!=="onCompositionStart"?Me==="onCompositionEnd"&&Ws&&(he=em()):(wa=pt,ku="value"in wa?wa.value:wa.textContent,Ws=!0)),Xt=_c(nt,Me),0<Xt.length&&(Me=new am(Me,e,null,s,pt),yt.push({event:Me,listeners:Xt}),he?Me.data=he:(he=um(s),he!==null&&(Me.data=he)))),(he=Py?By(e,s):Iy(e,s))&&(Me=_c(nt,"onBeforeInput"),0<Me.length&&(Xt=new am("onBeforeInput","beforeinput",null,s,pt),yt.push({event:Xt,listeners:Me}),Xt.data=he)),RS(yt,e,nt,s,pt)}Y0(yt,i)})}function ko(e,i,s){return{instance:e,listener:i,currentTarget:s}}function _c(e,i){for(var s=i+"Capture",l=[];e!==null;){var f=e,p=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||p===null||(f=co(e,s),f!=null&&l.unshift(ko(e,f,p)),f=co(e,i),f!=null&&l.push(ko(e,f,p))),e.tag===3)return l;e=e.return}return[]}function NS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function K0(e,i,s,l,f){for(var p=i._reactName,y=[];s!==null&&s!==l;){var A=s,F=A.alternate,nt=A.stateNode;if(A=A.tag,F!==null&&F===l)break;A!==5&&A!==26&&A!==27||nt===null||(F=nt,f?(nt=co(s,p),nt!=null&&y.unshift(ko(s,nt,F))):f||(nt=co(s,p),nt!=null&&y.push(ko(s,nt,F)))),s=s.return}y.length!==0&&e.push({event:i,listeners:y})}var OS=/\r\n?/g,zS=/\u0000|\uFFFD/g;function Q0(e){return(typeof e=="string"?e:""+e).replace(OS,`
`).replace(zS,"")}function J0(e,i){return i=Q0(i),Q0(e)===i}function Ve(e,i,s,l,f,p){switch(s){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||ks(e,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&ks(e,""+l);break;case"className":kt(e,"class",l);break;case"tabIndex":kt(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":kt(e,s,l);break;case"style":Jp(e,l,p);break;case"data":if(i!=="object"){kt(e,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||s!=="href")){e.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(s);break}l=bl(""+l),e.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof p=="function"&&(s==="formAction"?(i!=="input"&&Ve(e,i,"name",f.name,f,null),Ve(e,i,"formEncType",f.formEncType,f,null),Ve(e,i,"formMethod",f.formMethod,f,null),Ve(e,i,"formTarget",f.formTarget,f,null)):(Ve(e,i,"encType",f.encType,f,null),Ve(e,i,"method",f.method,f,null),Ve(e,i,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(s);break}l=bl(""+l),e.setAttribute(s,l);break;case"onClick":l!=null&&(e.onclick=Yi);break;case"onScroll":l!=null&&xe("scroll",e);break;case"onScrollEnd":l!=null&&xe("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}s=bl(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,""+l):e.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,""):e.removeAttribute(s);break;case"capture":case"download":l===!0?e.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,l):e.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(s,l):e.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(s):e.setAttribute(s,l);break;case"popover":xe("beforetoggle",e),xe("toggle",e),be(e,"popover",l);break;case"xlinkActuate":dn(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":dn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":dn(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":dn(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":dn(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":dn(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":dn(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":dn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":dn(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":be(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=cy.get(s)||s,be(e,s,l))}}function Td(e,i,s,l,f,p){switch(s){case"style":Jp(e,l,p);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"children":typeof l=="string"?ks(e,l):(typeof l=="number"||typeof l=="bigint")&&ks(e,""+l);break;case"onScroll":l!=null&&xe("scroll",e);break;case"onScrollEnd":l!=null&&xe("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Yi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!se.hasOwnProperty(s))t:{if(s[0]==="o"&&s[1]==="n"&&(f=s.endsWith("Capture"),i=s.slice(2,f?s.length-7:void 0),p=e[Mn]||null,p=p!=null?p[s]:null,typeof p=="function"&&e.removeEventListener(i,p,f),typeof l=="function")){typeof p!="function"&&p!==null&&(s in e?e[s]=null:e.hasAttribute(s)&&e.removeAttribute(s)),e.addEventListener(i,l,f);break t}s in e?e[s]=l:l===!0?e.setAttribute(s,""):be(e,s,l)}}}function wn(e,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xe("error",e),xe("load",e);var l=!1,f=!1,p;for(p in s)if(s.hasOwnProperty(p)){var y=s[p];if(y!=null)switch(p){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Ve(e,i,p,y,s,null)}}f&&Ve(e,i,"srcSet",s.srcSet,s,null),l&&Ve(e,i,"src",s.src,s,null);return;case"input":xe("invalid",e);var A=p=y=f=null,F=null,nt=null;for(l in s)if(s.hasOwnProperty(l)){var pt=s[l];if(pt!=null)switch(l){case"name":f=pt;break;case"type":y=pt;break;case"checked":F=pt;break;case"defaultChecked":nt=pt;break;case"value":p=pt;break;case"defaultValue":A=pt;break;case"children":case"dangerouslySetInnerHTML":if(pt!=null)throw Error(a(137,i));break;default:Ve(e,i,l,pt,s,null)}}bi(e,p,A,F,nt,y,f,!1);return;case"select":xe("invalid",e),l=y=p=null;for(f in s)if(s.hasOwnProperty(f)&&(A=s[f],A!=null))switch(f){case"value":p=A;break;case"defaultValue":y=A;break;case"multiple":l=A;default:Ve(e,i,f,A,s,null)}i=p,s=y,e.multiple=!!l,i!=null?qi(e,!!l,i,!1):s!=null&&qi(e,!!l,s,!0);return;case"textarea":xe("invalid",e),p=f=l=null;for(y in s)if(s.hasOwnProperty(y)&&(A=s[y],A!=null))switch(y){case"value":l=A;break;case"defaultValue":f=A;break;case"children":p=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(a(91));break;default:Ve(e,i,y,A,s,null)}Kp(e,l,f,p);return;case"option":for(F in s)if(s.hasOwnProperty(F)&&(l=s[F],l!=null))switch(F){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Ve(e,i,F,l,s,null)}return;case"dialog":xe("beforetoggle",e),xe("toggle",e),xe("cancel",e),xe("close",e);break;case"iframe":case"object":xe("load",e);break;case"video":case"audio":for(l=0;l<Go.length;l++)xe(Go[l],e);break;case"image":xe("error",e),xe("load",e);break;case"details":xe("toggle",e);break;case"embed":case"source":case"link":xe("error",e),xe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(nt in s)if(s.hasOwnProperty(nt)&&(l=s[nt],l!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Ve(e,i,nt,l,s,null)}return;default:if(Iu(i)){for(pt in s)s.hasOwnProperty(pt)&&(l=s[pt],l!==void 0&&Td(e,i,pt,l,s,void 0));return}}for(A in s)s.hasOwnProperty(A)&&(l=s[A],l!=null&&Ve(e,i,A,l,s,null))}function PS(e,i,s,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,p=null,y=null,A=null,F=null,nt=null,pt=null;for(ft in s){var yt=s[ft];if(s.hasOwnProperty(ft)&&yt!=null)switch(ft){case"checked":break;case"value":break;case"defaultValue":F=yt;default:l.hasOwnProperty(ft)||Ve(e,i,ft,null,l,yt)}}for(var st in l){var ft=l[st];if(yt=s[st],l.hasOwnProperty(st)&&(ft!=null||yt!=null))switch(st){case"type":p=ft;break;case"name":f=ft;break;case"checked":nt=ft;break;case"defaultChecked":pt=ft;break;case"value":y=ft;break;case"defaultValue":A=ft;break;case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(a(137,i));break;default:ft!==yt&&Ve(e,i,st,ft,l,yt)}}Ln(e,y,A,F,nt,pt,p,f);return;case"select":ft=y=A=st=null;for(p in s)if(F=s[p],s.hasOwnProperty(p)&&F!=null)switch(p){case"value":break;case"multiple":ft=F;default:l.hasOwnProperty(p)||Ve(e,i,p,null,l,F)}for(f in l)if(p=l[f],F=s[f],l.hasOwnProperty(f)&&(p!=null||F!=null))switch(f){case"value":st=p;break;case"defaultValue":A=p;break;case"multiple":y=p;default:p!==F&&Ve(e,i,f,p,l,F)}i=A,s=y,l=ft,st!=null?qi(e,!!s,st,!1):!!l!=!!s&&(i!=null?qi(e,!!s,i,!0):qi(e,!!s,s?[]:"",!1));return;case"textarea":ft=st=null;for(A in s)if(f=s[A],s.hasOwnProperty(A)&&f!=null&&!l.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Ve(e,i,A,null,l,f)}for(y in l)if(f=l[y],p=s[y],l.hasOwnProperty(y)&&(f!=null||p!=null))switch(y){case"value":st=f;break;case"defaultValue":ft=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(a(91));break;default:f!==p&&Ve(e,i,y,f,l,p)}Zp(e,st,ft);return;case"option":for(var Vt in s)if(st=s[Vt],s.hasOwnProperty(Vt)&&st!=null&&!l.hasOwnProperty(Vt))switch(Vt){case"selected":e.selected=!1;break;default:Ve(e,i,Vt,null,l,st)}for(F in l)if(st=l[F],ft=s[F],l.hasOwnProperty(F)&&st!==ft&&(st!=null||ft!=null))switch(F){case"selected":e.selected=st&&typeof st!="function"&&typeof st!="symbol";break;default:Ve(e,i,F,st,l,ft)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var te in s)st=s[te],s.hasOwnProperty(te)&&st!=null&&!l.hasOwnProperty(te)&&Ve(e,i,te,null,l,st);for(nt in l)if(st=l[nt],ft=s[nt],l.hasOwnProperty(nt)&&st!==ft&&(st!=null||ft!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(a(137,i));break;default:Ve(e,i,nt,st,l,ft)}return;default:if(Iu(i)){for(var Ge in s)st=s[Ge],s.hasOwnProperty(Ge)&&st!==void 0&&!l.hasOwnProperty(Ge)&&Td(e,i,Ge,void 0,l,st);for(pt in l)st=l[pt],ft=s[pt],!l.hasOwnProperty(pt)||st===ft||st===void 0&&ft===void 0||Td(e,i,pt,st,l,ft);return}}for(var $ in s)st=s[$],s.hasOwnProperty($)&&st!=null&&!l.hasOwnProperty($)&&Ve(e,i,$,null,l,st);for(yt in l)st=l[yt],ft=s[yt],!l.hasOwnProperty(yt)||st===ft||st==null&&ft==null||Ve(e,i,yt,st,l,ft)}function $0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function BS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,i=0,s=performance.getEntriesByType("resource"),l=0;l<s.length;l++){var f=s[l],p=f.transferSize,y=f.initiatorType,A=f.duration;if(p&&A&&$0(y)){for(y=0,A=f.responseEnd,l+=1;l<s.length;l++){var F=s[l],nt=F.startTime;if(nt>A)break;var pt=F.transferSize,yt=F.initiatorType;pt&&$0(yt)&&(F=F.responseEnd,y+=pt*(F<A?1:(A-nt)/(F-nt)))}if(--l,i+=8*(p+y)/(f.duration/1e3),e++,10<e)break}}if(0<e)return i/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Ad=null,wd=null;function xc(e){return e.nodeType===9?e:e.ownerDocument}function tv(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ev(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function Cd(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Rd=null;function IS(){var e=window.event;return e&&e.type==="popstate"?e===Rd?!1:(Rd=e,!0):(Rd=null,!1)}var nv=typeof setTimeout=="function"?setTimeout:void 0,FS=typeof clearTimeout=="function"?clearTimeout:void 0,iv=typeof Promise=="function"?Promise:void 0,HS=typeof queueMicrotask=="function"?queueMicrotask:typeof iv<"u"?function(e){return iv.resolve(null).then(e).catch(VS)}:nv;function VS(e){setTimeout(function(){throw e})}function Xa(e){return e==="head"}function av(e,i){var s=i,l=0;do{var f=s.nextSibling;if(e.removeChild(s),f&&f.nodeType===8)if(s=f.data,s==="/$"||s==="/&"){if(l===0){e.removeChild(f),yr(i);return}l--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")l++;else if(s==="html")Xo(e.ownerDocument.documentElement);else if(s==="head"){s=e.ownerDocument.head,Xo(s);for(var p=s.firstChild;p;){var y=p.nextSibling,A=p.nodeName;p[Z]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&p.rel.toLowerCase()==="stylesheet"||s.removeChild(p),p=y}}else s==="body"&&Xo(e.ownerDocument.body);s=f}while(s);yr(i)}function sv(e,i){var s=e;e=0;do{var l=s.nextSibling;if(s.nodeType===1?i?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(i?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),l&&l.nodeType===8)if(s=l.data,s==="/$"){if(e===0)break;e--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||e++;s=l}while(s)}function Dd(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Dd(s),lt(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}e.removeChild(s)}}function GS(e,i,s,l){for(;e.nodeType===1;){var f=s;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Z])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(p=e.getAttribute("rel"),p==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(p!==f.rel||e.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||e.getAttribute("title")!==(f.title==null?null:f.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(p=e.getAttribute("src"),(p!==(f.src==null?null:f.src)||e.getAttribute("type")!==(f.type==null?null:f.type)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&p&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var p=f.name==null?null:""+f.name;if(f.type==="hidden"&&e.getAttribute("name")===p)return e}else return e;if(e=gi(e.nextSibling),e===null)break}return null}function kS(e,i,s){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=gi(e.nextSibling),e===null))return null;return e}function rv(e,i){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=gi(e.nextSibling),e===null))return null;return e}function Ud(e){return e.data==="$?"||e.data==="$~"}function Ld(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function XS(e,i){var s=e.ownerDocument;if(e.data==="$~")e._reactRetry=i;else if(e.data!=="$?"||s.readyState!=="loading")i();else{var l=function(){i(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function gi(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return e}var Nd=null;function ov(e){e=e.nextSibling;for(var i=0;e;){if(e.nodeType===8){var s=e.data;if(s==="/$"||s==="/&"){if(i===0)return gi(e.nextSibling);i--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||i++}e=e.nextSibling}return null}function lv(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(i===0)return e;i--}else s!=="/$"&&s!=="/&"||i++}e=e.previousSibling}return null}function cv(e,i,s){switch(i=xc(s),e){case"html":if(e=i.documentElement,!e)throw Error(a(452));return e;case"head":if(e=i.head,!e)throw Error(a(453));return e;case"body":if(e=i.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function Xo(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);lt(e)}var vi=new Map,uv=new Set;function yc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ua=H.d;H.d={f:jS,r:WS,D:qS,C:YS,L:ZS,m:KS,X:JS,S:QS,M:$S};function jS(){var e=ua.f(),i=fc();return e||i}function WS(e){var i=K(e);i!==null&&i.tag===5&&i.type==="form"?wg(i):ua.r(e)}var vr=typeof document>"u"?null:document;function fv(e,i,s){var l=vr;if(l&&typeof i=="string"&&i){var f=vn(i);f='link[rel="'+e+'"][href="'+f+'"]',typeof s=="string"&&(f+='[crossorigin="'+s+'"]'),uv.has(f)||(uv.add(f),e={rel:e,crossOrigin:s,href:i},l.querySelector(f)===null&&(i=l.createElement("link"),wn(i,"link",e),Ot(i),l.head.appendChild(i)))}}function qS(e){ua.D(e),fv("dns-prefetch",e,null)}function YS(e,i){ua.C(e,i),fv("preconnect",e,i)}function ZS(e,i,s){ua.L(e,i,s);var l=vr;if(l&&e&&i){var f='link[rel="preload"][as="'+vn(i)+'"]';i==="image"&&s&&s.imageSrcSet?(f+='[imagesrcset="'+vn(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(f+='[imagesizes="'+vn(s.imageSizes)+'"]')):f+='[href="'+vn(e)+'"]';var p=f;switch(i){case"style":p=_r(e);break;case"script":p=xr(e)}vi.has(p)||(e=v({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:e,as:i},s),vi.set(p,e),l.querySelector(f)!==null||i==="style"&&l.querySelector(jo(p))||i==="script"&&l.querySelector(Wo(p))||(i=l.createElement("link"),wn(i,"link",e),Ot(i),l.head.appendChild(i)))}}function KS(e,i){ua.m(e,i);var s=vr;if(s&&e){var l=i&&typeof i.as=="string"?i.as:"script",f='link[rel="modulepreload"][as="'+vn(l)+'"][href="'+vn(e)+'"]',p=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":p=xr(e)}if(!vi.has(p)&&(e=v({rel:"modulepreload",href:e},i),vi.set(p,e),s.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Wo(p)))return}l=s.createElement("link"),wn(l,"link",e),Ot(l),s.head.appendChild(l)}}}function QS(e,i,s){ua.S(e,i,s);var l=vr;if(l&&e){var f=Nt(l).hoistableStyles,p=_r(e);i=i||"default";var y=f.get(p);if(!y){var A={loading:0,preload:null};if(y=l.querySelector(jo(p)))A.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":i},s),(s=vi.get(p))&&Od(e,s);var F=y=l.createElement("link");Ot(F),wn(F,"link",e),F._p=new Promise(function(nt,pt){F.onload=nt,F.onerror=pt}),F.addEventListener("load",function(){A.loading|=1}),F.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Sc(y,i,l)}y={type:"stylesheet",instance:y,count:1,state:A},f.set(p,y)}}}function JS(e,i){ua.X(e,i);var s=vr;if(s&&e){var l=Nt(s).hoistableScripts,f=xr(e),p=l.get(f);p||(p=s.querySelector(Wo(f)),p||(e=v({src:e,async:!0},i),(i=vi.get(f))&&zd(e,i),p=s.createElement("script"),Ot(p),wn(p,"link",e),s.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},l.set(f,p))}}function $S(e,i){ua.M(e,i);var s=vr;if(s&&e){var l=Nt(s).hoistableScripts,f=xr(e),p=l.get(f);p||(p=s.querySelector(Wo(f)),p||(e=v({src:e,async:!0,type:"module"},i),(i=vi.get(f))&&zd(e,i),p=s.createElement("script"),Ot(p),wn(p,"link",e),s.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},l.set(f,p))}}function dv(e,i,s,l){var f=(f=Q.current)?yc(f):null;if(!f)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=_r(s.href),s=Nt(f).hoistableStyles,l=s.get(i),l||(l={type:"style",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){e=_r(s.href);var p=Nt(f).hoistableStyles,y=p.get(e);if(y||(f=f.ownerDocument||f,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},p.set(e,y),(p=f.querySelector(jo(e)))&&!p._p&&(y.instance=p,y.state.loading=5),vi.has(e)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},vi.set(e,s),p||tM(f,e,s,y.state))),i&&l===null)throw Error(a(528,""));return y}if(i&&l!==null)throw Error(a(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=xr(s),s=Nt(f).hoistableScripts,l=s.get(i),l||(l={type:"script",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function _r(e){return'href="'+vn(e)+'"'}function jo(e){return'link[rel="stylesheet"]['+e+"]"}function hv(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function tM(e,i,s,l){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=e.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),wn(i,"link",s),Ot(i),e.head.appendChild(i))}function xr(e){return'[src="'+vn(e)+'"]'}function Wo(e){return"script[async]"+e}function pv(e,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var l=e.querySelector('style[data-href~="'+vn(s.href)+'"]');if(l)return i.instance=l,Ot(l),l;var f=v({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Ot(l),wn(l,"style",f),Sc(l,s.precedence,e),i.instance=l;case"stylesheet":f=_r(s.href);var p=e.querySelector(jo(f));if(p)return i.state.loading|=4,i.instance=p,Ot(p),p;l=hv(s),(f=vi.get(f))&&Od(l,f),p=(e.ownerDocument||e).createElement("link"),Ot(p);var y=p;return y._p=new Promise(function(A,F){y.onload=A,y.onerror=F}),wn(p,"link",l),i.state.loading|=4,Sc(p,s.precedence,e),i.instance=p;case"script":return p=xr(s.src),(f=e.querySelector(Wo(p)))?(i.instance=f,Ot(f),f):(l=s,(f=vi.get(p))&&(l=v({},s),zd(l,f)),e=e.ownerDocument||e,f=e.createElement("script"),Ot(f),wn(f,"link",l),e.head.appendChild(f),i.instance=f);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,Sc(l,s.precedence,e));return i.instance}function Sc(e,i,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,p=f,y=0;y<l.length;y++){var A=l[y];if(A.dataset.precedence===i)p=A;else if(p!==f)break}p?p.parentNode.insertBefore(e,p.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(e,i.firstChild))}function Od(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function zd(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var Mc=null;function mv(e,i,s){if(Mc===null){var l=new Map,f=Mc=new Map;f.set(s,l)}else f=Mc,l=f.get(s),l||(l=new Map,f.set(s,l));if(l.has(e))return l;for(l.set(e,null),s=s.getElementsByTagName(e),f=0;f<s.length;f++){var p=s[f];if(!(p[Z]||p[$e]||e==="link"&&p.getAttribute("rel")==="stylesheet")&&p.namespaceURI!=="http://www.w3.org/2000/svg"){var y=p.getAttribute(i)||"";y=e+y;var A=l.get(y);A?A.push(p):l.set(y,[p])}}return l}function gv(e,i,s){e=e.ownerDocument||e,e.head.insertBefore(s,i==="title"?e.querySelector("head > title"):null)}function eM(e,i,s){if(s===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function vv(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function nM(e,i,s,l){if(s.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var f=_r(l.href),p=i.querySelector(jo(f));if(p){i=p._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(e.count++,e=Ec.bind(e),i.then(e,e)),s.state.loading|=4,s.instance=p,Ot(p);return}p=i.ownerDocument||i,l=hv(l),(f=vi.get(f))&&Od(l,f),p=p.createElement("link"),Ot(p);var y=p;y._p=new Promise(function(A,F){y.onload=A,y.onerror=F}),wn(p,"link",l),s.instance=p}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(s,i),(i=s.state.preload)&&(s.state.loading&3)===0&&(e.count++,s=Ec.bind(e),i.addEventListener("load",s),i.addEventListener("error",s))}}var Pd=0;function iM(e,i){return e.stylesheets&&e.count===0&&Tc(e,e.stylesheets),0<e.count||0<e.imgCount?function(s){var l=setTimeout(function(){if(e.stylesheets&&Tc(e,e.stylesheets),e.unsuspend){var p=e.unsuspend;e.unsuspend=null,p()}},6e4+i);0<e.imgBytes&&Pd===0&&(Pd=62500*BS());var f=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Tc(e,e.stylesheets),e.unsuspend)){var p=e.unsuspend;e.unsuspend=null,p()}},(e.imgBytes>Pd?50:800)+i);return e.unsuspend=s,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(f)}}:null}function Ec(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Tc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var bc=null;function Tc(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,bc=new Map,i.forEach(aM,e),bc=null,Ec.call(e))}function aM(e,i){if(!(i.state.loading&4)){var s=bc.get(e);if(s)var l=s.get(null);else{s=new Map,bc.set(e,s);for(var f=e.querySelectorAll("link[data-precedence],style[data-precedence]"),p=0;p<f.length;p++){var y=f[p];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(s.set(y.dataset.precedence,y),l=y)}l&&s.set(null,l)}f=i.instance,y=f.getAttribute("data-precedence"),p=s.get(y)||l,p===l&&s.set(null,f),s.set(y,f),this.count++,l=Ec.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),p?p.parentNode.insertBefore(f,p.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(f,e.firstChild)),i.state.loading|=4}}var qo={$$typeof:U,Provider:null,Consumer:null,_currentValue:V,_currentValue2:V,_threadCount:0};function sM(e,i,s,l,f,p,y,A,F){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=we(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=we(0),this.hiddenUpdates=we(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=p,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=F,this.incompleteTransitions=new Map}function _v(e,i,s,l,f,p,y,A,F,nt,pt,yt){return e=new sM(e,i,s,y,F,nt,pt,yt,A),i=1,p===!0&&(i|=24),p=Qn(3,null,null,i),e.current=p,p.stateNode=e,i=mf(),i.refCount++,e.pooledCache=i,i.refCount++,p.memoizedState={element:l,isDehydrated:s,cache:i},xf(p),e}function xv(e){return e?(e=Ks,e):Ks}function yv(e,i,s,l,f,p){f=xv(f),l.context===null?l.context=f:l.pendingContext=f,l=Na(i),l.payload={element:s},p=p===void 0?null:p,p!==null&&(l.callback=p),s=Oa(e,l,i),s!==null&&(qn(s,e,i),To(s,e,i))}function Sv(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<i?s:i}}function Bd(e,i){Sv(e,i),(e=e.alternate)&&Sv(e,i)}function Mv(e){if(e.tag===13||e.tag===31){var i=ds(e,67108864);i!==null&&qn(i,e,67108864),Bd(e,67108864)}}function Ev(e){if(e.tag===13||e.tag===31){var i=ni();i=os(i);var s=ds(e,i);s!==null&&qn(s,e,i),Bd(e,i)}}var Ac=!0;function rM(e,i,s,l){var f=I.T;I.T=null;var p=H.p;try{H.p=2,Id(e,i,s,l)}finally{H.p=p,I.T=f}}function oM(e,i,s,l){var f=I.T;I.T=null;var p=H.p;try{H.p=8,Id(e,i,s,l)}finally{H.p=p,I.T=f}}function Id(e,i,s,l){if(Ac){var f=Fd(l);if(f===null)bd(e,i,l,wc,s),Tv(e,l);else if(cM(f,e,i,s,l))l.stopPropagation();else if(Tv(e,l),i&4&&-1<lM.indexOf(e)){for(;f!==null;){var p=K(f);if(p!==null)switch(p.tag){case 3:if(p=p.stateNode,p.current.memoizedState.isDehydrated){var y=Lt(p.pendingLanes);if(y!==0){var A=p;for(A.pendingLanes|=2,A.entangledLanes|=2;y;){var F=1<<31-ie(y);A.entanglements[1]|=F,y&=~F}Bi(p),(Ue&6)===0&&(cc=gt()+500,Vo(0))}}break;case 31:case 13:A=ds(p,2),A!==null&&qn(A,p,2),fc(),Bd(p,2)}if(p=Fd(l),p===null&&bd(e,i,l,wc,s),p===f)break;f=p}f!==null&&l.stopPropagation()}else bd(e,i,l,null,s)}}function Fd(e){return e=Hu(e),Hd(e)}var wc=null;function Hd(e){if(wc=null,e=ot(e),e!==null){var i=c(e);if(i===null)e=null;else{var s=i.tag;if(s===13){if(e=u(i),e!==null)return e;e=null}else if(s===31){if(e=d(i),e!==null)return e;e=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return wc=e,null}function bv(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(At()){case xt:return 2;case jt:return 8;case zt:case It:return 32;case ye:return 268435456;default:return 32}default:return 32}}var Vd=!1,ja=null,Wa=null,qa=null,Yo=new Map,Zo=new Map,Ya=[],lM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Tv(e,i){switch(e){case"focusin":case"focusout":ja=null;break;case"dragenter":case"dragleave":Wa=null;break;case"mouseover":case"mouseout":qa=null;break;case"pointerover":case"pointerout":Yo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zo.delete(i.pointerId)}}function Ko(e,i,s,l,f,p){return e===null||e.nativeEvent!==p?(e={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:p,targetContainers:[f]},i!==null&&(i=K(i),i!==null&&Mv(i)),e):(e.eventSystemFlags|=l,i=e.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),e)}function cM(e,i,s,l,f){switch(i){case"focusin":return ja=Ko(ja,e,i,s,l,f),!0;case"dragenter":return Wa=Ko(Wa,e,i,s,l,f),!0;case"mouseover":return qa=Ko(qa,e,i,s,l,f),!0;case"pointerover":var p=f.pointerId;return Yo.set(p,Ko(Yo.get(p)||null,e,i,s,l,f)),!0;case"gotpointercapture":return p=f.pointerId,Zo.set(p,Ko(Zo.get(p)||null,e,i,s,l,f)),!0}return!1}function Av(e){var i=ot(e.target);if(i!==null){var s=c(i);if(s!==null){if(i=s.tag,i===13){if(i=u(s),i!==null){e.blockedOn=i,ls(e.priority,function(){Ev(s)});return}}else if(i===31){if(i=d(s),i!==null){e.blockedOn=i,ls(e.priority,function(){Ev(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Cc(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var s=Fd(e.nativeEvent);if(s===null){s=e.nativeEvent;var l=new s.constructor(s.type,s);Fu=l,s.target.dispatchEvent(l),Fu=null}else return i=K(s),i!==null&&Mv(i),e.blockedOn=s,!1;i.shift()}return!0}function wv(e,i,s){Cc(e)&&s.delete(i)}function uM(){Vd=!1,ja!==null&&Cc(ja)&&(ja=null),Wa!==null&&Cc(Wa)&&(Wa=null),qa!==null&&Cc(qa)&&(qa=null),Yo.forEach(wv),Zo.forEach(wv)}function Rc(e,i){e.blockedOn===i&&(e.blockedOn=null,Vd||(Vd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,uM)))}var Dc=null;function Cv(e){Dc!==e&&(Dc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Dc===e&&(Dc=null);for(var i=0;i<e.length;i+=3){var s=e[i],l=e[i+1],f=e[i+2];if(typeof l!="function"){if(Hd(l||s)===null)continue;break}var p=K(s);p!==null&&(e.splice(i,3),i-=3,Ff(p,{pending:!0,data:f,method:s.method,action:l},l,f))}}))}function yr(e){function i(F){return Rc(F,e)}ja!==null&&Rc(ja,e),Wa!==null&&Rc(Wa,e),qa!==null&&Rc(qa,e),Yo.forEach(i),Zo.forEach(i);for(var s=0;s<Ya.length;s++){var l=Ya[s];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Ya.length&&(s=Ya[0],s.blockedOn===null);)Av(s),s.blockedOn===null&&Ya.shift();if(s=(e.ownerDocument||e).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var f=s[l],p=s[l+1],y=f[Mn]||null;if(typeof p=="function")y||Cv(s);else if(y){var A=null;if(p&&p.hasAttribute("formAction")){if(f=p,y=p[Mn]||null)A=y.formAction;else if(Hd(f)!==null)continue}else A=y.action;typeof A=="function"?s[l+1]=A:(s.splice(l,3),l-=3),Cv(s)}}}function Rv(){function e(p){p.canIntercept&&p.info==="react-transition"&&p.intercept({handler:function(){return new Promise(function(y){return f=y})},focusReset:"manual",scroll:"manual"})}function i(){f!==null&&(f(),f=null),l||setTimeout(s,20)}function s(){if(!l&&!navigation.transition){var p=navigation.currentEntry;p&&p.url!=null&&navigation.navigate(p.url,{state:p.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,f=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(s,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),f!==null&&(f(),f=null)}}}function Gd(e){this._internalRoot=e}Uc.prototype.render=Gd.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(a(409));var s=i.current,l=ni();yv(s,l,e,i,null,null)},Uc.prototype.unmount=Gd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;yv(e.current,2,null,e,null,null),fc(),i[Wi]=null}};function Uc(e){this._internalRoot=e}Uc.prototype.unstable_scheduleHydration=function(e){if(e){var i=oo();e={blockedOn:null,target:e,priority:i};for(var s=0;s<Ya.length&&i!==0&&i<Ya[s].priority;s++);Ya.splice(s,0,e),s===0&&Av(e)}};var Dv=t.version;if(Dv!=="19.2.5")throw Error(a(527,Dv,"19.2.5"));H.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=m(i),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var fM={bundleType:0,version:"19.2.5",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.2.5"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Lc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Lc.isDisabled&&Lc.supportsFiber)try{Jt=Lc.inject(fM),Wt=Lc}catch{}}return Jo.createRoot=function(e,i){if(!o(e))throw Error(a(299));var s=!1,l="",f=Bg,p=Ig,y=Fg;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(f=i.onUncaughtError),i.onCaughtError!==void 0&&(p=i.onCaughtError),i.onRecoverableError!==void 0&&(y=i.onRecoverableError)),i=_v(e,1,!1,null,null,s,l,null,f,p,y,Rv),e[Wi]=i.current,Ed(e),new Gd(i)},Jo.hydrateRoot=function(e,i,s){if(!o(e))throw Error(a(299));var l=!1,f="",p=Bg,y=Ig,A=Fg,F=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onUncaughtError!==void 0&&(p=s.onUncaughtError),s.onCaughtError!==void 0&&(y=s.onCaughtError),s.onRecoverableError!==void 0&&(A=s.onRecoverableError),s.formState!==void 0&&(F=s.formState)),i=_v(e,1,!0,i,s??null,l,f,F,p,y,A,Rv),i.context=xv(null),s=i.current,l=ni(),l=os(l),f=Na(l),f.callback=null,Oa(s,f,l),s=l,i.current.lanes=s,Sn(i,s),Bi(i),e[Wi]=i.current,Ed(e),new Uc(i)},Jo.version="19.2.5",Jo}var Hv;function bM(){if(Hv)return jd.exports;Hv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),jd.exports=EM(),jd.exports}var TM=bM();const AM=dx(TM),wM={appTitle:"数学图形描述器 3D",toolbar:{lattice:"点阵",edit:"编辑",view:"选择",label:"标记",settings:"设置",clear:"清空"},topBar:{export:"导出",import:"导入",help:"?",language:"English",figureName:"图形名称",zoomOut:"-",zoomIn:"+"},commentDialog:{title:"编辑注释",confirm:"确认",cancel:"取消",delete:"删除注释",placeholder:"输入注释..."},messages:{clearConfirm:"确定要清空所有图形数据吗? 此操作不可恢复。",importError:"导入失败，文件格式不正确"},objectTypes:{point:"点",line:"线",face:"面"},editOverlay:{createFace:"创建面",changeStart:"变更起始点",cancel:"取消",deleteFace:"删除面"},helpPanel:{title:"3D 标注与描述帮助",close:"关闭",summary:"这个工具用于把三维点阵、面和标注整理成 AI 可读取的几何描述文档。导出的 Markdown 会同时保留结构化数据、对象注释、可见标记和原始 JSON。",sections:[{title:"基本操作",items:["选择工具: 左键选择点、线或面，空格为当前选中对象添加注释。","标记工具: 左键点、线或面显示标记牌；拖拽标记牌可以调整显示位置。","标记工具: 右键点、线、面或标记牌会删除对应标记。","编辑工具: 选择顶点后创建面，选中面后可以删除面。","视图控制: 左键拖动旋转，中键拖动平移，滚轮缩放相机。"]},{title:"标记与注释",items:["标记牌是屏幕 billboard，会始终面向相机，并通过虚线指向 3D 目标。","点标记指向顶点坐标；线标记指向边中点；面标记指向面顶点中心。","注释是语义信息，会被导出给 AI，AI 应优先参考注释中对坐标、关系或问题的说明。"]},{title:"导入导出",items:["导出文件是 Markdown，包含 AI 阅读说明、坐标系说明、点/线/面表格、标记表格、注释表格和 JSON 备份。","导入支持本工具导出的 Markdown，也兼容旧版只包含 block JSON 的文件。","顶部缩放按钮调整标记等界面元素比例，不改变几何坐标。"]},{title:"快捷键",items:["1: 选择，2: 编辑，3: 标记。","Space: 为选中点、线或面添加注释。","Esc: 清除选择或关闭弹窗。","Ctrl+E / Cmd+E: 导出 Markdown。"]}]}},CM={appTitle:"Math Diagram Descriptor 3D",toolbar:{lattice:"Lattice",edit:"Edit",view:"Select",label:"Label",settings:"Settings",clear:"Clear"},topBar:{export:"Export",import:"Import",help:"?",language:"中文",figureName:"Figure Name",zoomOut:"-",zoomIn:"+"},commentDialog:{title:"Edit Comment",confirm:"Confirm",cancel:"Cancel",delete:"Delete Comment",placeholder:"Enter comment..."},messages:{clearConfirm:"Clear all diagram data? This cannot be undone.",importError:"Import failed. Invalid file format."},objectTypes:{point:"Point",line:"Line",face:"Face"},editOverlay:{createFace:"Create Face",changeStart:"Change Start",cancel:"Cancel",deleteFace:"Delete Face"},helpPanel:{title:"3D Annotation Help",close:"Close",summary:"This tool turns a 3D lattice, faces, annotations, and labels into a geometry description that AI can read. Exported Markdown preserves structured data, comments, visible labels, and raw JSON.",sections:[{title:"Basic Operations",items:["Select tool: left-click a point, line, or face; press Space to add a comment to the selected object.","Label tool: left-click a point, line, or face to show its label; drag a label to move it.","Label tool: right-click a point, line, face, or label to remove that label.","Edit tool: select vertices to create faces, or delete a selected face.","Viewport: left-drag to orbit, middle-drag to pan, and use the wheel to zoom the camera."]},{title:"Labels And Comments",items:["Labels are screen billboards, always facing the camera, with a dashed pointer to the 3D target.","Point labels target vertex coordinates; line labels target edge midpoints; face labels target face centers.","Comments are exported as semantic context, and AI should prioritize them when interpreting geometry."]},{title:"Import And Export",items:["Export creates Markdown with AI instructions, coordinate rules, point/line/face tables, label data, comments, and JSON backup.","Import supports Markdown exported by this tool and older files containing only block JSON.","The top zoom controls scale label UI elements without changing geometry coordinates."]},{title:"Shortcuts",items:["1: Select, 2: Edit, 3: Label.","Space: add a comment to the selected point, line, or face.","Esc: clear selection or close dialogs.","Ctrl+E / Cmd+E: export Markdown."]}]}},RM={"zh-CN":wM,"en-US":CM},hx=ne.createContext(null),DM=({children:r,initialLanguage:t="zh-CN"})=>{const[n,a]=ne.useState(t),o=ne.useCallback(u=>{const d=u.split(".");let h=RM[n];for(const m of d)if(typeof h=="object"&&h!==null&&!Array.isArray(h)&&m in h)h=h[m];else return;return h},[n]),c=ne.useCallback(u=>{const d=o(u);return typeof d=="string"?d:u},[o]);return j.jsx(hx.Provider,{value:{language:n,setLanguage:a,t:c,raw:o},children:r})};function Jr(){const r=ne.useContext(hx);if(!r)throw new Error("useI18n must be used within I18nProvider");return r}const UM=({title:r,onTitleChange:t,onExport:n,onImport:a,onToggleLanguage:o,onToggleHelp:c,language:u,elementScale:d,onZoomOut:h,onZoomIn:m,onZoomReset:g,onZoomSet:v})=>{const{t:_}=Jr(),S=Math.round(d/1.5*100),[E,b]=ne.useState(String(S));ne.useEffect(()=>{b(String(S))},[S]);const M=()=>{const x=Number.parseInt(E,10),N=Number.isFinite(x)?Math.min(300,Math.max(1,x)):S;b(String(N)),v(N)};return j.jsxs("div",{className:"h-[3.8em] bg-slate-900 border-b border-slate-700 flex items-center px-[1em] gap-[1em]",children:[j.jsx("h1",{className:"text-lg font-bold text-cyan-400 whitespace-nowrap",children:_("appTitle")}),j.jsx("input",{type:"text",value:r,onChange:x=>t(x.target.value),className:"bg-slate-800 border border-slate-600 rounded px-[0.75em] py-[0.4em] text-sm text-slate-100 focus:ring-2 focus:ring-cyan-400 focus:border-transparent w-[10em]",placeholder:_("topBar.figureName")}),j.jsxs("div",{className:"flex items-center gap-[0.15em] bg-slate-800 rounded border border-slate-600",children:[j.jsx("button",{onClick:h,className:"px-[0.55em] py-[0.3em] text-slate-300 hover:text-cyan-400 hover:bg-slate-700 transition-colors text-sm",title:"Zoom out",children:_("topBar.zoomOut")}),j.jsx("input",{type:"text",inputMode:"numeric",pattern:"[0-9]*",value:E,onChange:x=>b(x.target.value.replace(/\D/g,"")),onBlur:M,onKeyDown:x=>{x.key==="Enter"&&x.currentTarget.blur()},onDoubleClick:g,className:"zoom-percent-input w-[4.25em] px-[0.4em] py-[0.3em] bg-slate-900 text-center text-slate-300 hover:text-cyan-400 focus:text-cyan-100 focus:outline-none focus:ring-1 focus:ring-cyan-400 text-sm","aria-label":"Zoom percent"}),j.jsx("button",{onClick:m,className:"px-[0.55em] py-[0.3em] text-slate-300 hover:text-cyan-400 hover:bg-slate-700 transition-colors text-sm",title:"Zoom in",children:_("topBar.zoomIn")})]}),j.jsxs("div",{className:"flex items-center gap-[0.55em] ml-auto",children:[j.jsx("button",{onClick:n,className:"px-[1em] py-[0.45em] bg-cyan-600 hover:bg-cyan-500 text-white text-sm rounded transition-colors",children:_("topBar.export")}),j.jsx("button",{onClick:a,className:"px-[1em] py-[0.45em] bg-green-600 hover:bg-green-500 text-white text-sm rounded transition-colors",children:_("topBar.import")})]}),j.jsxs("div",{className:"flex items-center gap-[0.55em]",children:[j.jsx("button",{onClick:c,className:"w-[1.9em] h-[1.9em] flex items-center justify-center bg-slate-700 hover:bg-slate-600 text-slate-200 text-sm rounded transition-colors font-bold",title:"帮助",children:_("topBar.help")}),j.jsx("button",{onClick:o,className:"px-[1em] py-[0.45em] bg-slate-700 hover:bg-slate-600 text-slate-200 text-sm rounded transition-colors",children:_("topBar.language")}),u==="zh-CN"&&j.jsx("button",{onClick:()=>{window.location.href="https://ai.oldking.wang/"},className:"w-[1.9em] h-[1.9em] flex items-center justify-center bg-slate-700 hover:bg-slate-600 text-slate-200 rounded transition-colors",title:"主页","aria-label":"主页",children:j.jsxs("svg",{viewBox:"0 0 24 24",className:"h-[1em] w-[1em]",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[j.jsx("path",{d:"M3 10.5 12 3l9 7.5"}),j.jsx("path",{d:"M5 10v10h14V10"}),j.jsx("path",{d:"M9 20v-6h6v6"})]})})]})]})},LM=({currentTool:r,onToolChange:t,onOpenLatticeDialog:n,onOpenPreferences:a,onClear:o})=>{const{t:c}=Jr(),u="flex flex-col items-center justify-center px-[0.45em] py-[0.7em] gap-[0.35em] transition-colors min-h-[4.3em]",d="text-slate-400 hover:bg-slate-700 hover:text-slate-200",h="w-[1.45em] h-[1.45em] shrink-0",m="text-xs leading-none";return j.jsxs("div",{className:"h-full w-[4.9em] bg-slate-800 border-r border-slate-700 flex flex-col py-[0.6em] gap-[0.25em]",children:[j.jsxs("button",{onClick:n,className:`${u} ${d}`,title:"创建点阵",children:[j.jsxs("svg",{viewBox:"0 0 24 24",className:h,fill:"currentColor",children:[j.jsx("rect",{x:"4",y:"4",width:"4",height:"4",fill:"currentColor"}),j.jsx("rect",{x:"10",y:"4",width:"4",height:"4",fill:"currentColor",opacity:"0.5"}),j.jsx("rect",{x:"16",y:"4",width:"4",height:"4",fill:"currentColor",opacity:"0.3"}),j.jsx("rect",{x:"4",y:"10",width:"4",height:"4",fill:"currentColor",opacity:"0.5"}),j.jsx("rect",{x:"10",y:"10",width:"4",height:"4",fill:"currentColor"}),j.jsx("rect",{x:"16",y:"10",width:"4",height:"4",fill:"currentColor",opacity:"0.5"}),j.jsx("rect",{x:"4",y:"16",width:"4",height:"4",fill:"currentColor",opacity:"0.3"}),j.jsx("rect",{x:"10",y:"16",width:"4",height:"4",fill:"currentColor",opacity:"0.5"}),j.jsx("rect",{x:"16",y:"16",width:"4",height:"4",fill:"currentColor"})]}),j.jsx("span",{className:m,children:c("toolbar.lattice")})]}),j.jsxs("button",{onClick:()=>t("edit"),className:`${u} ${r==="edit"?"bg-cyan-900/50 text-cyan-400 border-l-2 border-cyan-400":d}`,title:"编辑面",children:[j.jsx("svg",{viewBox:"0 0 24 24",className:h,fill:"currentColor",children:j.jsx("polygon",{points:"4,16 10,4 16,16",fill:"none",stroke:"currentColor",strokeWidth:"2"})}),j.jsx("span",{className:m,children:c("toolbar.edit")})]}),j.jsxs("button",{onClick:()=>t("view"),className:`${u} ${r==="view"?"bg-cyan-900/50 text-cyan-400 border-l-2 border-cyan-400":d}`,title:"视图模式",children:[j.jsx("svg",{viewBox:"0 0 24 24",className:h,fill:"currentColor",children:j.jsx("path",{d:"M12 4C6.5 4 2 8.5 2 12s4.5 8 10 8 10-4.5 10-8-4.5-8-10-8Zm0 14c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8Zm0-12c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4Z"})}),j.jsx("span",{className:m,children:c("toolbar.view")})]}),j.jsxs("button",{onClick:()=>t("label"),className:`${u} ${r==="label"?"bg-cyan-900/50 text-cyan-400 border-l-2 border-cyan-400":d}`,title:"标记",children:[j.jsxs("svg",{viewBox:"0 0 24 24",className:h,fill:"none",stroke:"currentColor",strokeWidth:"2",children:[j.jsx("rect",{x:"3",y:"4",width:"12",height:"8",rx:"1"}),j.jsx("line",{x1:"15",y1:"8",x2:"21",y2:"8",strokeDasharray:"2,2"}),j.jsx("circle",{cx:"21",cy:"8",r:"1.5",fill:"currentColor"})]}),j.jsx("span",{className:m,children:c("toolbar.label")})]}),j.jsx("div",{className:"flex-1"}),j.jsxs("button",{onClick:a,className:`${u} ${d}`,title:"设置",children:[j.jsx("svg",{viewBox:"0 0 24 24",className:h,fill:"currentColor",children:j.jsx("path",{d:"M12 15.5A3.5 3.5 0 0 1 8.5 12 3.5 3.5 0 0 1 12 8.5 3.5 3.5 0 0 1 15.5 12 3.5 3.5 0 0 1 12 15.5Zm0-11.5A7.5 7.5 0 0 0 4.5 12 7.5 7.5 0 0 0 12 19.5 7.5 7.5 0 0 0 19.5 12 7.5 7.5 0 0 0 12 4Z"})}),j.jsx("span",{className:m,children:c("toolbar.settings")})]}),j.jsxs("button",{onClick:o,className:`${u} text-slate-400 hover:bg-slate-700 hover:text-red-400`,title:"清空",children:[j.jsx("svg",{viewBox:"0 0 24 24",className:h,fill:"none",stroke:"currentColor",strokeWidth:"2",children:j.jsx("path",{d:"M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"})}),j.jsx("span",{className:m,children:c("toolbar.clear")})]})]})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Cp="170",NM=0,Vv=1,OM=2,px=1,zM=2,ga=3,ss=0,Zn=1,Vi=2,is=0,Vr=1,Gv=2,kv=3,Xv=4,PM=5,Ns=100,BM=101,IM=102,FM=103,HM=104,VM=200,GM=201,kM=202,XM=203,zh=204,Ph=205,jM=206,WM=207,qM=208,YM=209,ZM=210,KM=211,QM=212,JM=213,$M=214,Bh=0,Ih=1,Fh=2,jr=3,Hh=4,Vh=5,Gh=6,kh=7,mx=0,tE=1,eE=2,as=0,nE=1,iE=2,aE=3,sE=4,rE=5,oE=6,lE=7,gx=300,Wr=301,qr=302,Xh=303,jh=304,Ru=306,pl=1e3,zs=1001,Wh=1002,Si=1003,cE=1004,Nc=1005,ki=1006,Zd=1007,Ps=1008,Ma=1009,vx=1010,_x=1011,ml=1012,Rp=1013,Is=1014,va=1015,Sl=1016,Dp=1017,Up=1018,Yr=1020,xx=35902,yx=1021,Sx=1022,Li=1023,Mx=1024,Ex=1025,Gr=1026,Zr=1027,bx=1028,Lp=1029,Tx=1030,Np=1031,Op=1033,gu=33776,vu=33777,_u=33778,xu=33779,qh=35840,Yh=35841,Zh=35842,Kh=35843,Qh=36196,Jh=37492,$h=37496,tp=37808,ep=37809,np=37810,ip=37811,ap=37812,sp=37813,rp=37814,op=37815,lp=37816,cp=37817,up=37818,fp=37819,dp=37820,hp=37821,yu=36492,pp=36494,mp=36495,Ax=36283,gp=36284,vp=36285,_p=36286,uE=3200,fE=3201,dE=0,hE=1,ns="",xi="srgb",$r="srgb-linear",Du="linear",ke="srgb",Sr=7680,jv=519,pE=512,mE=513,gE=514,wx=515,vE=516,_E=517,xE=518,yE=519,xp=35044,Wv="300 es",_a=2e3,Eu=2001;class to{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[t]===void 0&&(a[t]=[]),a[t].indexOf(n)===-1&&a[t].push(n)}hasEventListener(t,n){if(this._listeners===void 0)return!1;const a=this._listeners;return a[t]!==void 0&&a[t].indexOf(n)!==-1}removeEventListener(t,n){if(this._listeners===void 0)return;const o=this._listeners[t];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const a=this._listeners[t.type];if(a!==void 0){t.target=this;const o=a.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,t);t.target=null}}}const On=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let qv=1234567;const kr=Math.PI/180,gl=180/Math.PI;function xa(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(On[r&255]+On[r>>8&255]+On[r>>16&255]+On[r>>24&255]+"-"+On[t&255]+On[t>>8&255]+"-"+On[t>>16&15|64]+On[t>>24&255]+"-"+On[n&63|128]+On[n>>8&255]+"-"+On[n>>16&255]+On[n>>24&255]+On[a&255]+On[a>>8&255]+On[a>>16&255]+On[a>>24&255]).toLowerCase()}function Pn(r,t,n){return Math.max(t,Math.min(n,r))}function zp(r,t){return(r%t+t)%t}function SE(r,t,n,a,o){return a+(r-t)*(o-a)/(n-t)}function ME(r,t,n){return r!==t?(n-r)/(t-r):0}function hl(r,t,n){return(1-n)*r+n*t}function EE(r,t,n,a){return hl(r,t,1-Math.exp(-n*a))}function bE(r,t=1){return t-Math.abs(zp(r,t*2)-t)}function TE(r,t,n){return r<=t?0:r>=n?1:(r=(r-t)/(n-t),r*r*(3-2*r))}function AE(r,t,n){return r<=t?0:r>=n?1:(r=(r-t)/(n-t),r*r*r*(r*(r*6-15)+10))}function wE(r,t){return r+Math.floor(Math.random()*(t-r+1))}function CE(r,t){return r+Math.random()*(t-r)}function RE(r){return r*(.5-Math.random())}function DE(r){r!==void 0&&(qv=r);let t=qv+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function UE(r){return r*kr}function LE(r){return r*gl}function NE(r){return(r&r-1)===0&&r!==0}function OE(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function zE(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function PE(r,t,n,a,o){const c=Math.cos,u=Math.sin,d=c(n/2),h=u(n/2),m=c((t+a)/2),g=u((t+a)/2),v=c((t-a)/2),_=u((t-a)/2),S=c((a-t)/2),E=u((a-t)/2);switch(o){case"XYX":r.set(d*g,h*v,h*_,d*m);break;case"YZY":r.set(h*_,d*g,h*v,d*m);break;case"ZXZ":r.set(h*v,h*_,d*g,d*m);break;case"XZX":r.set(d*g,h*E,h*S,d*m);break;case"YXY":r.set(h*S,d*g,h*E,d*m);break;case"ZYZ":r.set(h*E,h*S,d*g,d*m);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function Ui(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Be(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const BE={DEG2RAD:kr,RAD2DEG:gl,generateUUID:xa,clamp:Pn,euclideanModulo:zp,mapLinear:SE,inverseLerp:ME,lerp:hl,damp:EE,pingpong:bE,smoothstep:TE,smootherstep:AE,randInt:wE,randFloat:CE,randFloatSpread:RE,seededRandom:DE,degToRad:UE,radToDeg:LE,isPowerOfTwo:NE,ceilPowerOfTwo:OE,floorPowerOfTwo:zE,setQuaternionFromProperEuler:PE,normalize:Be,denormalize:Ui};class re{constructor(t=0,n=0){re.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,a=this.y,o=t.elements;return this.x=o[0]*n+o[3]*a+o[6],this.y=o[1]*n+o[4]*a+o[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Math.max(t,Math.min(n,a)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(Pn(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y;return n*n+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const a=Math.cos(n),o=Math.sin(n),c=this.x-t.x,u=this.y-t.y;return this.x=c*a-u*o+t.x,this.y=c*o+u*a+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class pe{constructor(t,n,a,o,c,u,d,h,m){pe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,a,o,c,u,d,h,m)}set(t,n,a,o,c,u,d,h,m){const g=this.elements;return g[0]=t,g[1]=o,g[2]=d,g[3]=n,g[4]=c,g[5]=h,g[6]=a,g[7]=u,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(t,n,a){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,o=n.elements,c=this.elements,u=a[0],d=a[3],h=a[6],m=a[1],g=a[4],v=a[7],_=a[2],S=a[5],E=a[8],b=o[0],M=o[3],x=o[6],N=o[1],U=o[4],T=o[7],W=o[2],B=o[5],O=o[8];return c[0]=u*b+d*N+h*W,c[3]=u*M+d*U+h*B,c[6]=u*x+d*T+h*O,c[1]=m*b+g*N+v*W,c[4]=m*M+g*U+v*B,c[7]=m*x+g*T+v*O,c[2]=_*b+S*N+E*W,c[5]=_*M+S*U+E*B,c[8]=_*x+S*T+E*O,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[1],o=t[2],c=t[3],u=t[4],d=t[5],h=t[6],m=t[7],g=t[8];return n*u*g-n*d*m-a*c*g+a*d*h+o*c*m-o*u*h}invert(){const t=this.elements,n=t[0],a=t[1],o=t[2],c=t[3],u=t[4],d=t[5],h=t[6],m=t[7],g=t[8],v=g*u-d*m,_=d*h-g*c,S=m*c-u*h,E=n*v+a*_+o*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/E;return t[0]=v*b,t[1]=(o*m-g*a)*b,t[2]=(d*a-o*u)*b,t[3]=_*b,t[4]=(g*n-o*h)*b,t[5]=(o*c-d*n)*b,t[6]=S*b,t[7]=(a*h-m*n)*b,t[8]=(u*n-a*c)*b,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,a,o,c,u,d){const h=Math.cos(c),m=Math.sin(c);return this.set(a*h,a*m,-a*(h*u+m*d)+u+t,-o*m,o*h,-o*(-m*u+h*d)+d+n,0,0,1),this}scale(t,n){return this.premultiply(Kd.makeScale(t,n)),this}rotate(t){return this.premultiply(Kd.makeRotation(-t)),this}translate(t,n){return this.premultiply(Kd.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,a=t.elements;for(let o=0;o<9;o++)if(n[o]!==a[o])return!1;return!0}fromArray(t,n=0){for(let a=0;a<9;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Kd=new pe;function Cx(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function bu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function IE(){const r=bu("canvas");return r.style.display="block",r}const Yv={};function cl(r){r in Yv||(Yv[r]=!0,console.warn(r))}function FE(r,t,n){return new Promise(function(a,o){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:o();break;case r.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:a()}}setTimeout(c,n)})}function HE(r){const t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function VE(r){const t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Ce={enabled:!0,workingColorSpace:$r,spaces:{},convert:function(r,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===ke&&(r.r=ya(r.r),r.g=ya(r.g),r.b=ya(r.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(r.applyMatrix3(this.spaces[t].toXYZ),r.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===ke&&(r.r=Xr(r.r),r.g=Xr(r.g),r.b=Xr(r.b))),r},fromWorkingColorSpace:function(r,t){return this.convert(r,this.workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ns?Du:this.spaces[r].transfer},getLuminanceCoefficients:function(r,t=this.workingColorSpace){return r.fromArray(this.spaces[t].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,t,n){return r.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function ya(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Xr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const Zv=[.64,.33,.3,.6,.15,.06],Kv=[.2126,.7152,.0722],Qv=[.3127,.329],Jv=new pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$v=new pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ce.define({[$r]:{primaries:Zv,whitePoint:Qv,transfer:Du,toXYZ:Jv,fromXYZ:$v,luminanceCoefficients:Kv,workingColorSpaceConfig:{unpackColorSpace:xi},outputColorSpaceConfig:{drawingBufferColorSpace:xi}},[xi]:{primaries:Zv,whitePoint:Qv,transfer:ke,toXYZ:Jv,fromXYZ:$v,luminanceCoefficients:Kv,outputColorSpaceConfig:{drawingBufferColorSpace:xi}}});let Mr;class GE{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Mr===void 0&&(Mr=bu("canvas")),Mr.width=t.width,Mr.height=t.height;const a=Mr.getContext("2d");t instanceof ImageData?a.putImageData(t,0,0):a.drawImage(t,0,0,t.width,t.height),n=Mr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=bu("canvas");n.width=t.width,n.height=t.height;const a=n.getContext("2d");a.drawImage(t,0,0,t.width,t.height);const o=a.getImageData(0,0,t.width,t.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=ya(c[u]/255)*255;return a.putImageData(o,0,0),n}else if(t.data){const n=t.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(ya(n[a]/255)*255):n[a]=ya(n[a]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let kE=0;class Rx{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:kE++}),this.uuid=xa(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const a={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,d=o.length;u<d;u++)o[u].isDataTexture?c.push(Qd(o[u].image)):c.push(Qd(o[u]))}else c=Qd(o);a.url=c}return n||(t.images[this.uuid]=a),a}}function Qd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?GE.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let XE=0;class Hn extends to{constructor(t=Hn.DEFAULT_IMAGE,n=Hn.DEFAULT_MAPPING,a=zs,o=zs,c=ki,u=Ps,d=Li,h=Ma,m=Hn.DEFAULT_ANISOTROPY,g=ns){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:XE++}),this.uuid=xa(),this.name="",this.source=new Rx(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=h,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const a={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(t.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==gx)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case pl:t.x=t.x-Math.floor(t.x);break;case zs:t.x=t.x<0?0:1;break;case Wh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case pl:t.y=t.y-Math.floor(t.y);break;case zs:t.y=t.y<0?0:1;break;case Wh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=gx;Hn.DEFAULT_ANISOTROPY=1;class je{constructor(t=0,n=0,a=0,o=1){je.prototype.isVector4=!0,this.x=t,this.y=n,this.z=a,this.w=o}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,a,o){return this.x=t,this.y=n,this.z=a,this.w=o,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,a=this.y,o=this.z,c=this.w,u=t.elements;return this.x=u[0]*n+u[4]*a+u[8]*o+u[12]*c,this.y=u[1]*n+u[5]*a+u[9]*o+u[13]*c,this.z=u[2]*n+u[6]*a+u[10]*o+u[14]*c,this.w=u[3]*n+u[7]*a+u[11]*o+u[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,a,o,c;const h=t.elements,m=h[0],g=h[4],v=h[8],_=h[1],S=h[5],E=h[9],b=h[2],M=h[6],x=h[10];if(Math.abs(g-_)<.01&&Math.abs(v-b)<.01&&Math.abs(E-M)<.01){if(Math.abs(g+_)<.1&&Math.abs(v+b)<.1&&Math.abs(E+M)<.1&&Math.abs(m+S+x-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const U=(m+1)/2,T=(S+1)/2,W=(x+1)/2,B=(g+_)/4,O=(v+b)/4,k=(E+M)/4;return U>T&&U>W?U<.01?(a=0,o=.707106781,c=.707106781):(a=Math.sqrt(U),o=B/a,c=O/a):T>W?T<.01?(a=.707106781,o=0,c=.707106781):(o=Math.sqrt(T),a=B/o,c=k/o):W<.01?(a=.707106781,o=.707106781,c=0):(c=Math.sqrt(W),a=O/c,o=k/c),this.set(a,o,c,n),this}let N=Math.sqrt((M-E)*(M-E)+(v-b)*(v-b)+(_-g)*(_-g));return Math.abs(N)<.001&&(N=1),this.x=(M-E)/N,this.y=(v-b)/N,this.z=(_-g)/N,this.w=Math.acos((m+S+x-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this.z=Math.max(t.z,Math.min(n.z,this.z)),this.w=Math.max(t.w,Math.min(n.w,this.w)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this.z=Math.max(t,Math.min(n,this.z)),this.w=Math.max(t,Math.min(n,this.w)),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Math.max(t,Math.min(n,a)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this.w=t.w+(n.w-t.w)*a,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class jE extends to{constructor(t=1,n=1,a={}){super(),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=1,this.scissor=new je(0,0,t,n),this.scissorTest=!1,this.viewport=new je(0,0,t,n);const o={width:t,height:n,depth:1};a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ki,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},a);const c=new Hn(o,a.mapping,a.wrapS,a.wrapT,a.magFilter,a.minFilter,a.format,a.type,a.anisotropy,a.colorSpace);c.flipY=!1,c.generateMipmaps=a.generateMipmaps,c.internalFormat=a.internalFormat,this.textures=[];const u=a.count;for(let d=0;d<u;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this.depthTexture=a.depthTexture,this.samples=a.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,n,a=1){if(this.width!==t||this.height!==n||this.depth!==a){this.width=t,this.height=n,this.depth=a;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=t,this.textures[o].image.height=n,this.textures[o].image.depth=a;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let a=0,o=t.textures.length;a<o;a++)this.textures[a]=t.textures[a].clone(),this.textures[a].isRenderTargetTexture=!0;const n=Object.assign({},t.texture.image);return this.texture.source=new Rx(n),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fs extends jE{constructor(t=1,n=1,a={}){super(t,n,a),this.isWebGLRenderTarget=!0}}class Dx extends Hn{constructor(t=null,n=1,a=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:a,depth:o},this.magFilter=Si,this.minFilter=Si,this.wrapR=zs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class WE extends Hn{constructor(t=null,n=1,a=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:a,depth:o},this.magFilter=Si,this.minFilter=Si,this.wrapR=zs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hs{constructor(t=0,n=0,a=0,o=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=a,this._w=o}static slerpFlat(t,n,a,o,c,u,d){let h=a[o+0],m=a[o+1],g=a[o+2],v=a[o+3];const _=c[u+0],S=c[u+1],E=c[u+2],b=c[u+3];if(d===0){t[n+0]=h,t[n+1]=m,t[n+2]=g,t[n+3]=v;return}if(d===1){t[n+0]=_,t[n+1]=S,t[n+2]=E,t[n+3]=b;return}if(v!==b||h!==_||m!==S||g!==E){let M=1-d;const x=h*_+m*S+g*E+v*b,N=x>=0?1:-1,U=1-x*x;if(U>Number.EPSILON){const W=Math.sqrt(U),B=Math.atan2(W,x*N);M=Math.sin(M*B)/W,d=Math.sin(d*B)/W}const T=d*N;if(h=h*M+_*T,m=m*M+S*T,g=g*M+E*T,v=v*M+b*T,M===1-d){const W=1/Math.sqrt(h*h+m*m+g*g+v*v);h*=W,m*=W,g*=W,v*=W}}t[n]=h,t[n+1]=m,t[n+2]=g,t[n+3]=v}static multiplyQuaternionsFlat(t,n,a,o,c,u){const d=a[o],h=a[o+1],m=a[o+2],g=a[o+3],v=c[u],_=c[u+1],S=c[u+2],E=c[u+3];return t[n]=d*E+g*v+h*S-m*_,t[n+1]=h*E+g*_+m*v-d*S,t[n+2]=m*E+g*S+d*_-h*v,t[n+3]=g*E-d*v-h*_-m*S,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,a,o){return this._x=t,this._y=n,this._z=a,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const a=t._x,o=t._y,c=t._z,u=t._order,d=Math.cos,h=Math.sin,m=d(a/2),g=d(o/2),v=d(c/2),_=h(a/2),S=h(o/2),E=h(c/2);switch(u){case"XYZ":this._x=_*g*v+m*S*E,this._y=m*S*v-_*g*E,this._z=m*g*E+_*S*v,this._w=m*g*v-_*S*E;break;case"YXZ":this._x=_*g*v+m*S*E,this._y=m*S*v-_*g*E,this._z=m*g*E-_*S*v,this._w=m*g*v+_*S*E;break;case"ZXY":this._x=_*g*v-m*S*E,this._y=m*S*v+_*g*E,this._z=m*g*E+_*S*v,this._w=m*g*v-_*S*E;break;case"ZYX":this._x=_*g*v-m*S*E,this._y=m*S*v+_*g*E,this._z=m*g*E-_*S*v,this._w=m*g*v+_*S*E;break;case"YZX":this._x=_*g*v+m*S*E,this._y=m*S*v+_*g*E,this._z=m*g*E-_*S*v,this._w=m*g*v-_*S*E;break;case"XZY":this._x=_*g*v-m*S*E,this._y=m*S*v-_*g*E,this._z=m*g*E+_*S*v,this._w=m*g*v+_*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const a=n/2,o=Math.sin(a);return this._x=t.x*o,this._y=t.y*o,this._z=t.z*o,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,a=n[0],o=n[4],c=n[8],u=n[1],d=n[5],h=n[9],m=n[2],g=n[6],v=n[10],_=a+d+v;if(_>0){const S=.5/Math.sqrt(_+1);this._w=.25/S,this._x=(g-h)*S,this._y=(c-m)*S,this._z=(u-o)*S}else if(a>d&&a>v){const S=2*Math.sqrt(1+a-d-v);this._w=(g-h)/S,this._x=.25*S,this._y=(o+u)/S,this._z=(c+m)/S}else if(d>v){const S=2*Math.sqrt(1+d-a-v);this._w=(c-m)/S,this._x=(o+u)/S,this._y=.25*S,this._z=(h+g)/S}else{const S=2*Math.sqrt(1+v-a-d);this._w=(u-o)/S,this._x=(c+m)/S,this._y=(h+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let a=t.dot(n)+1;return a<Number.EPSILON?(a=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=a):(this._x=0,this._y=-t.z,this._z=t.y,this._w=a)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=a),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Pn(this.dot(t),-1,1)))}rotateTowards(t,n){const a=this.angleTo(t);if(a===0)return this;const o=Math.min(1,n/a);return this.slerp(t,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const a=t._x,o=t._y,c=t._z,u=t._w,d=n._x,h=n._y,m=n._z,g=n._w;return this._x=a*g+u*d+o*m-c*h,this._y=o*g+u*h+c*d-a*m,this._z=c*g+u*m+a*h-o*d,this._w=u*g-a*d-o*h-c*m,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);const a=this._x,o=this._y,c=this._z,u=this._w;let d=u*t._w+a*t._x+o*t._y+c*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=u,this._x=a,this._y=o,this._z=c,this;const h=1-d*d;if(h<=Number.EPSILON){const S=1-n;return this._w=S*u+n*this._w,this._x=S*a+n*this._x,this._y=S*o+n*this._y,this._z=S*c+n*this._z,this.normalize(),this}const m=Math.sqrt(h),g=Math.atan2(m,d),v=Math.sin((1-n)*g)/m,_=Math.sin(n*g)/m;return this._w=u*v+this._w*_,this._x=a*v+this._x*_,this._y=o*v+this._y*_,this._z=c*v+this._z*_,this._onChangeCallback(),this}slerpQuaternions(t,n,a){return this.copy(t).slerp(n,a)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),o=Math.sqrt(1-a),c=Math.sqrt(a);return this.set(o*Math.sin(t),o*Math.cos(t),c*Math.sin(n),c*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,n=0,a=0){P.prototype.isVector3=!0,this.x=t,this.y=n,this.z=a}set(t,n,a){return a===void 0&&(a=this.z),this.x=t,this.y=n,this.z=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(t_.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(t_.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,a=this.y,o=this.z,c=t.elements;return this.x=c[0]*n+c[3]*a+c[6]*o,this.y=c[1]*n+c[4]*a+c[7]*o,this.z=c[2]*n+c[5]*a+c[8]*o,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,a=this.y,o=this.z,c=t.elements,u=1/(c[3]*n+c[7]*a+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*a+c[8]*o+c[12])*u,this.y=(c[1]*n+c[5]*a+c[9]*o+c[13])*u,this.z=(c[2]*n+c[6]*a+c[10]*o+c[14])*u,this}applyQuaternion(t){const n=this.x,a=this.y,o=this.z,c=t.x,u=t.y,d=t.z,h=t.w,m=2*(u*o-d*a),g=2*(d*n-c*o),v=2*(c*a-u*n);return this.x=n+h*m+u*v-d*g,this.y=a+h*g+d*m-c*v,this.z=o+h*v+c*g-u*m,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,a=this.y,o=this.z,c=t.elements;return this.x=c[0]*n+c[4]*a+c[8]*o,this.y=c[1]*n+c[5]*a+c[9]*o,this.z=c[2]*n+c[6]*a+c[10]*o,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this.z=Math.max(t.z,Math.min(n.z,this.z)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this.z=Math.max(t,Math.min(n,this.z)),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Math.max(t,Math.min(n,a)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const a=t.x,o=t.y,c=t.z,u=n.x,d=n.y,h=n.z;return this.x=o*h-c*d,this.y=c*u-a*h,this.z=a*d-o*u,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const a=t.dot(this)/n;return this.copy(t).multiplyScalar(a)}projectOnPlane(t){return Jd.copy(this).projectOnVector(t),this.sub(Jd)}reflect(t){return this.sub(Jd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(Pn(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y,o=this.z-t.z;return n*n+a*a+o*o}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,a){const o=Math.sin(n)*t;return this.x=o*Math.sin(a),this.y=Math.cos(n)*t,this.z=o*Math.cos(a),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,a){return this.x=t*Math.sin(n),this.y=a,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),a=this.setFromMatrixColumn(t,1).length(),o=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=a,this.z=o,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(t),this.y=n,this.z=a*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Jd=new P,t_=new Hs;class rs{constructor(t=new P(1/0,1/0,1/0),n=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n+=3)this.expandByPoint(Ci.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,a=t.count;n<a;n++)this.expandByPoint(Ci.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const a=Ci.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(a),this.max.copy(t).add(a),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const a=t.geometry;if(a!==void 0){const c=a.getAttribute("position");if(n===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let u=0,d=c.count;u<d;u++)t.isMesh===!0?t.getVertexPosition(u,Ci):Ci.fromBufferAttribute(c,u),Ci.applyMatrix4(t.matrixWorld),this.expandByPoint(Ci);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Oc.copy(t.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),Oc.copy(a.boundingBox)),Oc.applyMatrix4(t.matrixWorld),this.union(Oc)}const o=t.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ci),Ci.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,a;return t.normal.x>0?(n=t.normal.x*this.min.x,a=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,a=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,a+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,a+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,a+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,a+=t.normal.z*this.min.z),n<=-t.constant&&a>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter($o),zc.subVectors(this.max,$o),Er.subVectors(t.a,$o),br.subVectors(t.b,$o),Tr.subVectors(t.c,$o),Ka.subVectors(br,Er),Qa.subVectors(Tr,br),Ts.subVectors(Er,Tr);let n=[0,-Ka.z,Ka.y,0,-Qa.z,Qa.y,0,-Ts.z,Ts.y,Ka.z,0,-Ka.x,Qa.z,0,-Qa.x,Ts.z,0,-Ts.x,-Ka.y,Ka.x,0,-Qa.y,Qa.x,0,-Ts.y,Ts.x,0];return!$d(n,Er,br,Tr,zc)||(n=[1,0,0,0,1,0,0,0,1],!$d(n,Er,br,Tr,zc))?!1:(Pc.crossVectors(Ka,Qa),n=[Pc.x,Pc.y,Pc.z],$d(n,Er,br,Tr,zc))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ci).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ci).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(fa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),fa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),fa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),fa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),fa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),fa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),fa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),fa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(fa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const fa=[new P,new P,new P,new P,new P,new P,new P,new P],Ci=new P,Oc=new rs,Er=new P,br=new P,Tr=new P,Ka=new P,Qa=new P,Ts=new P,$o=new P,zc=new P,Pc=new P,As=new P;function $d(r,t,n,a,o){for(let c=0,u=r.length-3;c<=u;c+=3){As.fromArray(r,c);const d=o.x*Math.abs(As.x)+o.y*Math.abs(As.y)+o.z*Math.abs(As.z),h=t.dot(As),m=n.dot(As),g=a.dot(As);if(Math.max(-Math.max(h,m,g),Math.min(h,m,g))>d)return!1}return!0}const qE=new rs,tl=new P,th=new P;class eo{constructor(t=new P,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const a=this.center;n!==void 0?a.copy(n):qE.setFromPoints(t).getCenter(a);let o=0;for(let c=0,u=t.length;c<u;c++)o=Math.max(o,a.distanceToSquared(t[c]));return this.radius=Math.sqrt(o),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const a=this.center.distanceToSquared(t);return n.copy(t),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;tl.subVectors(t,this.center);const n=tl.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),o=(a-this.radius)*.5;this.center.addScaledVector(tl,o/a),this.radius+=o}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(th.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(tl.copy(t.center).add(th)),this.expandByPoint(tl.copy(t.center).sub(th))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const da=new P,eh=new P,Bc=new P,Ja=new P,nh=new P,Ic=new P,ih=new P;class Pp{constructor(t=new P,n=new P(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,da)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=da.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(da.copy(this.origin).addScaledVector(this.direction,n),da.distanceToSquared(t))}distanceSqToSegment(t,n,a,o){eh.copy(t).add(n).multiplyScalar(.5),Bc.copy(n).sub(t).normalize(),Ja.copy(this.origin).sub(eh);const c=t.distanceTo(n)*.5,u=-this.direction.dot(Bc),d=Ja.dot(this.direction),h=-Ja.dot(Bc),m=Ja.lengthSq(),g=Math.abs(1-u*u);let v,_,S,E;if(g>0)if(v=u*h-d,_=u*d-h,E=c*g,v>=0)if(_>=-E)if(_<=E){const b=1/g;v*=b,_*=b,S=v*(v+u*_+2*d)+_*(u*v+_+2*h)+m}else _=c,v=Math.max(0,-(u*_+d)),S=-v*v+_*(_+2*h)+m;else _=-c,v=Math.max(0,-(u*_+d)),S=-v*v+_*(_+2*h)+m;else _<=-E?(v=Math.max(0,-(-u*c+d)),_=v>0?-c:Math.min(Math.max(-c,-h),c),S=-v*v+_*(_+2*h)+m):_<=E?(v=0,_=Math.min(Math.max(-c,-h),c),S=_*(_+2*h)+m):(v=Math.max(0,-(u*c+d)),_=v>0?c:Math.min(Math.max(-c,-h),c),S=-v*v+_*(_+2*h)+m);else _=u>0?-c:c,v=Math.max(0,-(u*_+d)),S=-v*v+_*(_+2*h)+m;return a&&a.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(eh).addScaledVector(Bc,_),S}intersectSphere(t,n){da.subVectors(t.center,this.origin);const a=da.dot(this.direction),o=da.dot(da)-a*a,c=t.radius*t.radius;if(o>c)return null;const u=Math.sqrt(c-o),d=a-u,h=a+u;return h<0?null:d<0?this.at(h,n):this.at(d,n)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(t.normal)+t.constant)/n;return a>=0?a:null}intersectPlane(t,n){const a=this.distanceToPlane(t);return a===null?null:this.at(a,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let a,o,c,u,d,h;const m=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,_=this.origin;return m>=0?(a=(t.min.x-_.x)*m,o=(t.max.x-_.x)*m):(a=(t.max.x-_.x)*m,o=(t.min.x-_.x)*m),g>=0?(c=(t.min.y-_.y)*g,u=(t.max.y-_.y)*g):(c=(t.max.y-_.y)*g,u=(t.min.y-_.y)*g),a>u||c>o||((c>a||isNaN(a))&&(a=c),(u<o||isNaN(o))&&(o=u),v>=0?(d=(t.min.z-_.z)*v,h=(t.max.z-_.z)*v):(d=(t.max.z-_.z)*v,h=(t.min.z-_.z)*v),a>h||d>o)||((d>a||a!==a)&&(a=d),(h<o||o!==o)&&(o=h),o<0)?null:this.at(a>=0?a:o,n)}intersectsBox(t){return this.intersectBox(t,da)!==null}intersectTriangle(t,n,a,o,c){nh.subVectors(n,t),Ic.subVectors(a,t),ih.crossVectors(nh,Ic);let u=this.direction.dot(ih),d;if(u>0){if(o)return null;d=1}else if(u<0)d=-1,u=-u;else return null;Ja.subVectors(this.origin,t);const h=d*this.direction.dot(Ic.crossVectors(Ja,Ic));if(h<0)return null;const m=d*this.direction.dot(nh.cross(Ja));if(m<0||h+m>u)return null;const g=-d*Ja.dot(ih);return g<0?null:this.at(g/u,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class We{constructor(t,n,a,o,c,u,d,h,m,g,v,_,S,E,b,M){We.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,a,o,c,u,d,h,m,g,v,_,S,E,b,M)}set(t,n,a,o,c,u,d,h,m,g,v,_,S,E,b,M){const x=this.elements;return x[0]=t,x[4]=n,x[8]=a,x[12]=o,x[1]=c,x[5]=u,x[9]=d,x[13]=h,x[2]=m,x[6]=g,x[10]=v,x[14]=_,x[3]=S,x[7]=E,x[11]=b,x[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new We().fromArray(this.elements)}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(t){const n=this.elements,a=t.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,a){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this}makeBasis(t,n,a){return this.set(t.x,n.x,a.x,0,t.y,n.y,a.y,0,t.z,n.z,a.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,a=t.elements,o=1/Ar.setFromMatrixColumn(t,0).length(),c=1/Ar.setFromMatrixColumn(t,1).length(),u=1/Ar.setFromMatrixColumn(t,2).length();return n[0]=a[0]*o,n[1]=a[1]*o,n[2]=a[2]*o,n[3]=0,n[4]=a[4]*c,n[5]=a[5]*c,n[6]=a[6]*c,n[7]=0,n[8]=a[8]*u,n[9]=a[9]*u,n[10]=a[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,a=t.x,o=t.y,c=t.z,u=Math.cos(a),d=Math.sin(a),h=Math.cos(o),m=Math.sin(o),g=Math.cos(c),v=Math.sin(c);if(t.order==="XYZ"){const _=u*g,S=u*v,E=d*g,b=d*v;n[0]=h*g,n[4]=-h*v,n[8]=m,n[1]=S+E*m,n[5]=_-b*m,n[9]=-d*h,n[2]=b-_*m,n[6]=E+S*m,n[10]=u*h}else if(t.order==="YXZ"){const _=h*g,S=h*v,E=m*g,b=m*v;n[0]=_+b*d,n[4]=E*d-S,n[8]=u*m,n[1]=u*v,n[5]=u*g,n[9]=-d,n[2]=S*d-E,n[6]=b+_*d,n[10]=u*h}else if(t.order==="ZXY"){const _=h*g,S=h*v,E=m*g,b=m*v;n[0]=_-b*d,n[4]=-u*v,n[8]=E+S*d,n[1]=S+E*d,n[5]=u*g,n[9]=b-_*d,n[2]=-u*m,n[6]=d,n[10]=u*h}else if(t.order==="ZYX"){const _=u*g,S=u*v,E=d*g,b=d*v;n[0]=h*g,n[4]=E*m-S,n[8]=_*m+b,n[1]=h*v,n[5]=b*m+_,n[9]=S*m-E,n[2]=-m,n[6]=d*h,n[10]=u*h}else if(t.order==="YZX"){const _=u*h,S=u*m,E=d*h,b=d*m;n[0]=h*g,n[4]=b-_*v,n[8]=E*v+S,n[1]=v,n[5]=u*g,n[9]=-d*g,n[2]=-m*g,n[6]=S*v+E,n[10]=_-b*v}else if(t.order==="XZY"){const _=u*h,S=u*m,E=d*h,b=d*m;n[0]=h*g,n[4]=-v,n[8]=m*g,n[1]=_*v+b,n[5]=u*g,n[9]=S*v-E,n[2]=E*v-S,n[6]=d*g,n[10]=b*v+_}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(YE,t,ZE)}lookAt(t,n,a){const o=this.elements;return ii.subVectors(t,n),ii.lengthSq()===0&&(ii.z=1),ii.normalize(),$a.crossVectors(a,ii),$a.lengthSq()===0&&(Math.abs(a.z)===1?ii.x+=1e-4:ii.z+=1e-4,ii.normalize(),$a.crossVectors(a,ii)),$a.normalize(),Fc.crossVectors(ii,$a),o[0]=$a.x,o[4]=Fc.x,o[8]=ii.x,o[1]=$a.y,o[5]=Fc.y,o[9]=ii.y,o[2]=$a.z,o[6]=Fc.z,o[10]=ii.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,o=n.elements,c=this.elements,u=a[0],d=a[4],h=a[8],m=a[12],g=a[1],v=a[5],_=a[9],S=a[13],E=a[2],b=a[6],M=a[10],x=a[14],N=a[3],U=a[7],T=a[11],W=a[15],B=o[0],O=o[4],k=o[8],D=o[12],C=o[1],G=o[5],at=o[9],tt=o[13],ct=o[2],mt=o[6],I=o[10],H=o[14],V=o[3],_t=o[7],bt=o[11],z=o[15];return c[0]=u*B+d*C+h*ct+m*V,c[4]=u*O+d*G+h*mt+m*_t,c[8]=u*k+d*at+h*I+m*bt,c[12]=u*D+d*tt+h*H+m*z,c[1]=g*B+v*C+_*ct+S*V,c[5]=g*O+v*G+_*mt+S*_t,c[9]=g*k+v*at+_*I+S*bt,c[13]=g*D+v*tt+_*H+S*z,c[2]=E*B+b*C+M*ct+x*V,c[6]=E*O+b*G+M*mt+x*_t,c[10]=E*k+b*at+M*I+x*bt,c[14]=E*D+b*tt+M*H+x*z,c[3]=N*B+U*C+T*ct+W*V,c[7]=N*O+U*G+T*mt+W*_t,c[11]=N*k+U*at+T*I+W*bt,c[15]=N*D+U*tt+T*H+W*z,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[4],o=t[8],c=t[12],u=t[1],d=t[5],h=t[9],m=t[13],g=t[2],v=t[6],_=t[10],S=t[14],E=t[3],b=t[7],M=t[11],x=t[15];return E*(+c*h*v-o*m*v-c*d*_+a*m*_+o*d*S-a*h*S)+b*(+n*h*S-n*m*_+c*u*_-o*u*S+o*m*g-c*h*g)+M*(+n*m*v-n*d*S-c*u*v+a*u*S+c*d*g-a*m*g)+x*(-o*d*g-n*h*v+n*d*_+o*u*v-a*u*_+a*h*g)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,a){const o=this.elements;return t.isVector3?(o[12]=t.x,o[13]=t.y,o[14]=t.z):(o[12]=t,o[13]=n,o[14]=a),this}invert(){const t=this.elements,n=t[0],a=t[1],o=t[2],c=t[3],u=t[4],d=t[5],h=t[6],m=t[7],g=t[8],v=t[9],_=t[10],S=t[11],E=t[12],b=t[13],M=t[14],x=t[15],N=v*M*m-b*_*m+b*h*S-d*M*S-v*h*x+d*_*x,U=E*_*m-g*M*m-E*h*S+u*M*S+g*h*x-u*_*x,T=g*b*m-E*v*m+E*d*S-u*b*S-g*d*x+u*v*x,W=E*v*h-g*b*h-E*d*_+u*b*_+g*d*M-u*v*M,B=n*N+a*U+o*T+c*W;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/B;return t[0]=N*O,t[1]=(b*_*c-v*M*c-b*o*S+a*M*S+v*o*x-a*_*x)*O,t[2]=(d*M*c-b*h*c+b*o*m-a*M*m-d*o*x+a*h*x)*O,t[3]=(v*h*c-d*_*c-v*o*m+a*_*m+d*o*S-a*h*S)*O,t[4]=U*O,t[5]=(g*M*c-E*_*c+E*o*S-n*M*S-g*o*x+n*_*x)*O,t[6]=(E*h*c-u*M*c-E*o*m+n*M*m+u*o*x-n*h*x)*O,t[7]=(u*_*c-g*h*c+g*o*m-n*_*m-u*o*S+n*h*S)*O,t[8]=T*O,t[9]=(E*v*c-g*b*c-E*a*S+n*b*S+g*a*x-n*v*x)*O,t[10]=(u*b*c-E*d*c+E*a*m-n*b*m-u*a*x+n*d*x)*O,t[11]=(g*d*c-u*v*c-g*a*m+n*v*m+u*a*S-n*d*S)*O,t[12]=W*O,t[13]=(g*b*o-E*v*o+E*a*_-n*b*_-g*a*M+n*v*M)*O,t[14]=(E*d*o-u*b*o-E*a*h+n*b*h+u*a*M-n*d*M)*O,t[15]=(u*v*o-g*d*o+g*a*h-n*v*h-u*a*_+n*d*_)*O,this}scale(t){const n=this.elements,a=t.x,o=t.y,c=t.z;return n[0]*=a,n[4]*=o,n[8]*=c,n[1]*=a,n[5]*=o,n[9]*=c,n[2]*=a,n[6]*=o,n[10]*=c,n[3]*=a,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],a=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],o=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,a,o))}makeTranslation(t,n,a){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),a=Math.sin(t);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const a=Math.cos(n),o=Math.sin(n),c=1-a,u=t.x,d=t.y,h=t.z,m=c*u,g=c*d;return this.set(m*u+a,m*d-o*h,m*h+o*d,0,m*d+o*h,g*d+a,g*h-o*u,0,m*h-o*d,g*h+o*u,c*h*h+a,0,0,0,0,1),this}makeScale(t,n,a){return this.set(t,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(t,n,a,o,c,u){return this.set(1,a,c,0,t,1,u,0,n,o,1,0,0,0,0,1),this}compose(t,n,a){const o=this.elements,c=n._x,u=n._y,d=n._z,h=n._w,m=c+c,g=u+u,v=d+d,_=c*m,S=c*g,E=c*v,b=u*g,M=u*v,x=d*v,N=h*m,U=h*g,T=h*v,W=a.x,B=a.y,O=a.z;return o[0]=(1-(b+x))*W,o[1]=(S+T)*W,o[2]=(E-U)*W,o[3]=0,o[4]=(S-T)*B,o[5]=(1-(_+x))*B,o[6]=(M+N)*B,o[7]=0,o[8]=(E+U)*O,o[9]=(M-N)*O,o[10]=(1-(_+b))*O,o[11]=0,o[12]=t.x,o[13]=t.y,o[14]=t.z,o[15]=1,this}decompose(t,n,a){const o=this.elements;let c=Ar.set(o[0],o[1],o[2]).length();const u=Ar.set(o[4],o[5],o[6]).length(),d=Ar.set(o[8],o[9],o[10]).length();this.determinant()<0&&(c=-c),t.x=o[12],t.y=o[13],t.z=o[14],Ri.copy(this);const m=1/c,g=1/u,v=1/d;return Ri.elements[0]*=m,Ri.elements[1]*=m,Ri.elements[2]*=m,Ri.elements[4]*=g,Ri.elements[5]*=g,Ri.elements[6]*=g,Ri.elements[8]*=v,Ri.elements[9]*=v,Ri.elements[10]*=v,n.setFromRotationMatrix(Ri),a.x=c,a.y=u,a.z=d,this}makePerspective(t,n,a,o,c,u,d=_a){const h=this.elements,m=2*c/(n-t),g=2*c/(a-o),v=(n+t)/(n-t),_=(a+o)/(a-o);let S,E;if(d===_a)S=-(u+c)/(u-c),E=-2*u*c/(u-c);else if(d===Eu)S=-u/(u-c),E=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return h[0]=m,h[4]=0,h[8]=v,h[12]=0,h[1]=0,h[5]=g,h[9]=_,h[13]=0,h[2]=0,h[6]=0,h[10]=S,h[14]=E,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,n,a,o,c,u,d=_a){const h=this.elements,m=1/(n-t),g=1/(a-o),v=1/(u-c),_=(n+t)*m,S=(a+o)*g;let E,b;if(d===_a)E=(u+c)*v,b=-2*v;else if(d===Eu)E=c*v,b=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return h[0]=2*m,h[4]=0,h[8]=0,h[12]=-_,h[1]=0,h[5]=2*g,h[9]=0,h[13]=-S,h[2]=0,h[6]=0,h[10]=b,h[14]=-E,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){const n=this.elements,a=t.elements;for(let o=0;o<16;o++)if(n[o]!==a[o])return!1;return!0}fromArray(t,n=0){for(let a=0;a<16;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t[n+9]=a[9],t[n+10]=a[10],t[n+11]=a[11],t[n+12]=a[12],t[n+13]=a[13],t[n+14]=a[14],t[n+15]=a[15],t}}const Ar=new P,Ri=new We,YE=new P(0,0,0),ZE=new P(1,1,1),$a=new P,Fc=new P,ii=new P,e_=new We,n_=new Hs;class Ea{constructor(t=0,n=0,a=0,o=Ea.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=a,this._order=o}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,a,o=this._order){return this._x=t,this._y=n,this._z=a,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,a=!0){const o=t.elements,c=o[0],u=o[4],d=o[8],h=o[1],m=o[5],g=o[9],v=o[2],_=o[6],S=o[10];switch(n){case"XYZ":this._y=Math.asin(Pn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(_,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Pn(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(h,m)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(Pn(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-u,m)):(this._y=0,this._z=Math.atan2(h,c));break;case"ZYX":this._y=Math.asin(-Pn(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,S),this._z=Math.atan2(h,c)):(this._x=0,this._z=Math.atan2(-u,m));break;case"YZX":this._z=Math.asin(Pn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-Pn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(_,m),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,a){return e_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(e_,n,a)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return n_.setFromEuler(this),this.setFromQuaternion(n_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ea.DEFAULT_ORDER="XYZ";class Bp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let KE=0;const i_=new P,wr=new Hs,ha=new We,Hc=new P,el=new P,QE=new P,JE=new Hs,a_=new P(1,0,0),s_=new P(0,1,0),r_=new P(0,0,1),o_={type:"added"},$E={type:"removed"},Cr={type:"childadded",child:null},ah={type:"childremoved",child:null};class pn extends to{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:KE++}),this.uuid=xa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pn.DEFAULT_UP.clone();const t=new P,n=new Ea,a=new Hs,o=new P(1,1,1);function c(){a.setFromEuler(n,!1)}function u(){n.setFromQuaternion(a,void 0,!1)}n._onChange(c),a._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new We},normalMatrix:{value:new pe}}),this.matrix=new We,this.matrixWorld=new We,this.matrixAutoUpdate=pn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return wr.setFromAxisAngle(t,n),this.quaternion.multiply(wr),this}rotateOnWorldAxis(t,n){return wr.setFromAxisAngle(t,n),this.quaternion.premultiply(wr),this}rotateX(t){return this.rotateOnAxis(a_,t)}rotateY(t){return this.rotateOnAxis(s_,t)}rotateZ(t){return this.rotateOnAxis(r_,t)}translateOnAxis(t,n){return i_.copy(t).applyQuaternion(this.quaternion),this.position.add(i_.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(a_,t)}translateY(t){return this.translateOnAxis(s_,t)}translateZ(t){return this.translateOnAxis(r_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ha.copy(this.matrixWorld).invert())}lookAt(t,n,a){t.isVector3?Hc.copy(t):Hc.set(t,n,a);const o=this.parent;this.updateWorldMatrix(!0,!1),el.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ha.lookAt(el,Hc,this.up):ha.lookAt(Hc,el,this.up),this.quaternion.setFromRotationMatrix(ha),o&&(ha.extractRotation(o.matrixWorld),wr.setFromRotationMatrix(ha),this.quaternion.premultiply(wr.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(o_),Cr.child=t,this.dispatchEvent(Cr),Cr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent($E),ah.child=t,this.dispatchEvent(ah),ah.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ha.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ha.multiply(t.parent.matrixWorld)),t.applyMatrix4(ha),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(o_),Cr.child=t,this.dispatchEvent(Cr),Cr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let a=0,o=this.children.length;a<o;a++){const u=this.children[a].getObjectByProperty(t,n);if(u!==void 0)return u}}getObjectsByProperty(t,n,a=[]){this[t]===n&&a.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(t,n,a);return a}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(el,t,QE),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(el,JE,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].updateMatrixWorld(t)}updateWorldMatrix(t,n){const a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",a={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function c(d,h){return d[h.uuid]===void 0&&(d[h.uuid]=h.toJSON(t)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const h=d.shapes;if(Array.isArray(h))for(let m=0,g=h.length;m<g;m++){const v=h[m];c(t.shapes,v)}else c(t.shapes,h)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let h=0,m=this.material.length;h<m;h++)d.push(c(t.materials,this.material[h]));o.material=d}else o.material=c(t.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const h=this.animations[d];o.animations.push(c(t.animations,h))}}if(n){const d=u(t.geometries),h=u(t.materials),m=u(t.textures),g=u(t.images),v=u(t.shapes),_=u(t.skeletons),S=u(t.animations),E=u(t.nodes);d.length>0&&(a.geometries=d),h.length>0&&(a.materials=h),m.length>0&&(a.textures=m),g.length>0&&(a.images=g),v.length>0&&(a.shapes=v),_.length>0&&(a.skeletons=_),S.length>0&&(a.animations=S),E.length>0&&(a.nodes=E)}return a.object=o,a;function u(d){const h=[];for(const m in d){const g=d[m];delete g.metadata,h.push(g)}return h}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let a=0;a<t.children.length;a++){const o=t.children[a];this.add(o.clone())}return this}}pn.DEFAULT_UP=new P(0,1,0);pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Di=new P,pa=new P,sh=new P,ma=new P,Rr=new P,Dr=new P,l_=new P,rh=new P,oh=new P,lh=new P,ch=new je,uh=new je,fh=new je;class si{constructor(t=new P,n=new P,a=new P){this.a=t,this.b=n,this.c=a}static getNormal(t,n,a,o){o.subVectors(a,n),Di.subVectors(t,n),o.cross(Di);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(t,n,a,o,c){Di.subVectors(o,n),pa.subVectors(a,n),sh.subVectors(t,n);const u=Di.dot(Di),d=Di.dot(pa),h=Di.dot(sh),m=pa.dot(pa),g=pa.dot(sh),v=u*m-d*d;if(v===0)return c.set(0,0,0),null;const _=1/v,S=(m*h-d*g)*_,E=(u*g-d*h)*_;return c.set(1-S-E,E,S)}static containsPoint(t,n,a,o){return this.getBarycoord(t,n,a,o,ma)===null?!1:ma.x>=0&&ma.y>=0&&ma.x+ma.y<=1}static getInterpolation(t,n,a,o,c,u,d,h){return this.getBarycoord(t,n,a,o,ma)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(c,ma.x),h.addScaledVector(u,ma.y),h.addScaledVector(d,ma.z),h)}static getInterpolatedAttribute(t,n,a,o,c,u){return ch.setScalar(0),uh.setScalar(0),fh.setScalar(0),ch.fromBufferAttribute(t,n),uh.fromBufferAttribute(t,a),fh.fromBufferAttribute(t,o),u.setScalar(0),u.addScaledVector(ch,c.x),u.addScaledVector(uh,c.y),u.addScaledVector(fh,c.z),u}static isFrontFacing(t,n,a,o){return Di.subVectors(a,n),pa.subVectors(t,n),Di.cross(pa).dot(o)<0}set(t,n,a){return this.a.copy(t),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(t,n,a,o){return this.a.copy(t[n]),this.b.copy(t[a]),this.c.copy(t[o]),this}setFromAttributeAndIndices(t,n,a,o){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,a),this.c.fromBufferAttribute(t,o),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Di.subVectors(this.c,this.b),pa.subVectors(this.a,this.b),Di.cross(pa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return si.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return si.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,a,o,c){return si.getInterpolation(t,this.a,this.b,this.c,n,a,o,c)}containsPoint(t){return si.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return si.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const a=this.a,o=this.b,c=this.c;let u,d;Rr.subVectors(o,a),Dr.subVectors(c,a),rh.subVectors(t,a);const h=Rr.dot(rh),m=Dr.dot(rh);if(h<=0&&m<=0)return n.copy(a);oh.subVectors(t,o);const g=Rr.dot(oh),v=Dr.dot(oh);if(g>=0&&v<=g)return n.copy(o);const _=h*v-g*m;if(_<=0&&h>=0&&g<=0)return u=h/(h-g),n.copy(a).addScaledVector(Rr,u);lh.subVectors(t,c);const S=Rr.dot(lh),E=Dr.dot(lh);if(E>=0&&S<=E)return n.copy(c);const b=S*m-h*E;if(b<=0&&m>=0&&E<=0)return d=m/(m-E),n.copy(a).addScaledVector(Dr,d);const M=g*E-S*v;if(M<=0&&v-g>=0&&S-E>=0)return l_.subVectors(c,o),d=(v-g)/(v-g+(S-E)),n.copy(o).addScaledVector(l_,d);const x=1/(M+b+_);return u=b*x,d=_*x,n.copy(a).addScaledVector(Rr,u).addScaledVector(Dr,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ux={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ts={h:0,s:0,l:0},Vc={h:0,s:0,l:0};function dh(r,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?r+(t-r)*6*n:n<1/2?t:n<2/3?r+(t-r)*6*(2/3-n):r}class ve{constructor(t,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,a)}set(t,n,a){if(n===void 0&&a===void 0){const o=t;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(t,n,a);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=xi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ce.toWorkingColorSpace(this,n),this}setRGB(t,n,a,o=Ce.workingColorSpace){return this.r=t,this.g=n,this.b=a,Ce.toWorkingColorSpace(this,o),this}setHSL(t,n,a,o=Ce.workingColorSpace){if(t=zp(t,1),n=Pn(n,0,1),a=Pn(a,0,1),n===0)this.r=this.g=this.b=a;else{const c=a<=.5?a*(1+n):a+n-a*n,u=2*a-c;this.r=dh(u,c,t+1/3),this.g=dh(u,c,t),this.b=dh(u,c,t-1/3)}return Ce.toWorkingColorSpace(this,o),this}setStyle(t,n=xi){function a(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const u=o[1],d=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return a(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return a(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return a(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=xi){const a=Ux[t.toLowerCase()];return a!==void 0?this.setHex(a,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ya(t.r),this.g=ya(t.g),this.b=ya(t.b),this}copyLinearToSRGB(t){return this.r=Xr(t.r),this.g=Xr(t.g),this.b=Xr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=xi){return Ce.fromWorkingColorSpace(zn.copy(this),t),Math.round(Pn(zn.r*255,0,255))*65536+Math.round(Pn(zn.g*255,0,255))*256+Math.round(Pn(zn.b*255,0,255))}getHexString(t=xi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Ce.workingColorSpace){Ce.fromWorkingColorSpace(zn.copy(this),n);const a=zn.r,o=zn.g,c=zn.b,u=Math.max(a,o,c),d=Math.min(a,o,c);let h,m;const g=(d+u)/2;if(d===u)h=0,m=0;else{const v=u-d;switch(m=g<=.5?v/(u+d):v/(2-u-d),u){case a:h=(o-c)/v+(o<c?6:0);break;case o:h=(c-a)/v+2;break;case c:h=(a-o)/v+4;break}h/=6}return t.h=h,t.s=m,t.l=g,t}getRGB(t,n=Ce.workingColorSpace){return Ce.fromWorkingColorSpace(zn.copy(this),n),t.r=zn.r,t.g=zn.g,t.b=zn.b,t}getStyle(t=xi){Ce.fromWorkingColorSpace(zn.copy(this),t);const n=zn.r,a=zn.g,o=zn.b;return t!==xi?`color(${t} ${n.toFixed(3)} ${a.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(o*255)})`}offsetHSL(t,n,a){return this.getHSL(ts),this.setHSL(ts.h+t,ts.s+n,ts.l+a)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,a){return this.r=t.r+(n.r-t.r)*a,this.g=t.g+(n.g-t.g)*a,this.b=t.b+(n.b-t.b)*a,this}lerpHSL(t,n){this.getHSL(ts),t.getHSL(Vc);const a=hl(ts.h,Vc.h,n),o=hl(ts.s,Vc.s,n),c=hl(ts.l,Vc.l,n);return this.setHSL(a,o,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,a=this.g,o=this.b,c=t.elements;return this.r=c[0]*n+c[3]*a+c[6]*o,this.g=c[1]*n+c[4]*a+c[7]*o,this.b=c[2]*n+c[5]*a+c[8]*o,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zn=new ve;ve.NAMES=Ux;let tb=0;class no extends to{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tb++}),this.uuid=xa(),this.name="",this.blending=Vr,this.side=ss,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zh,this.blendDst=Ph,this.blendEquation=Ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ve(0,0,0),this.blendAlpha=0,this.depthFunc=jr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Sr,this.stencilZFail=Sr,this.stencilZPass=Sr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const a=t[n];if(a===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(a):o&&o.isVector3&&a&&a.isVector3?o.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const a={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(t).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(t).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(t).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(t).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(t).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==Vr&&(a.blending=this.blending),this.side!==ss&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==zh&&(a.blendSrc=this.blendSrc),this.blendDst!==Ph&&(a.blendDst=this.blendDst),this.blendEquation!==Ns&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==jr&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jv&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Sr&&(a.stencilFail=this.stencilFail),this.stencilZFail!==Sr&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==Sr&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function o(c){const u=[];for(const d in c){const h=c[d];delete h.metadata,u.push(h)}return u}if(n){const c=o(t.textures),u=o(t.images);c.length>0&&(a.textures=c),u.length>0&&(a.images=u)}return a}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let a=null;if(n!==null){const o=n.length;a=new Array(o);for(let c=0;c!==o;++c)a[c]=n[c].clone()}return this.clippingPlanes=a,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class vl extends no{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ea,this.combine=mx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const un=new P,Gc=new re;class oi{constructor(t,n,a=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=a,this.usage=xp,this.updateRanges=[],this.gpuType=va,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,a){t*=this.itemSize,a*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[t+o]=n.array[a+o];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)Gc.fromBufferAttribute(this,n),Gc.applyMatrix3(t),this.setXY(n,Gc.x,Gc.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)un.fromBufferAttribute(this,n),un.applyMatrix3(t),this.setXYZ(n,un.x,un.y,un.z);return this}applyMatrix4(t){for(let n=0,a=this.count;n<a;n++)un.fromBufferAttribute(this,n),un.applyMatrix4(t),this.setXYZ(n,un.x,un.y,un.z);return this}applyNormalMatrix(t){for(let n=0,a=this.count;n<a;n++)un.fromBufferAttribute(this,n),un.applyNormalMatrix(t),this.setXYZ(n,un.x,un.y,un.z);return this}transformDirection(t){for(let n=0,a=this.count;n<a;n++)un.fromBufferAttribute(this,n),un.transformDirection(t),this.setXYZ(n,un.x,un.y,un.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let a=this.array[t*this.itemSize+n];return this.normalized&&(a=Ui(a,this.array)),a}setComponent(t,n,a){return this.normalized&&(a=Be(a,this.array)),this.array[t*this.itemSize+n]=a,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Ui(n,this.array)),n}setX(t,n){return this.normalized&&(n=Be(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Ui(n,this.array)),n}setY(t,n){return this.normalized&&(n=Be(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Ui(n,this.array)),n}setZ(t,n){return this.normalized&&(n=Be(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Ui(n,this.array)),n}setW(t,n){return this.normalized&&(n=Be(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,a){return t*=this.itemSize,this.normalized&&(n=Be(n,this.array),a=Be(a,this.array)),this.array[t+0]=n,this.array[t+1]=a,this}setXYZ(t,n,a,o){return t*=this.itemSize,this.normalized&&(n=Be(n,this.array),a=Be(a,this.array),o=Be(o,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=o,this}setXYZW(t,n,a,o,c){return t*=this.itemSize,this.normalized&&(n=Be(n,this.array),a=Be(a,this.array),o=Be(o,this.array),c=Be(c,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=o,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==xp&&(t.usage=this.usage),t}}class Lx extends oi{constructor(t,n,a){super(new Uint16Array(t),n,a)}}class Nx extends oi{constructor(t,n,a){super(new Uint32Array(t),n,a)}}class Qe extends oi{constructor(t,n,a){super(new Float32Array(t),n,a)}}let eb=0;const _i=new We,hh=new pn,Ur=new P,ai=new rs,nl=new rs,xn=new P;class yn extends to{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:eb++}),this.uuid=xa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Cx(t)?Nx:Lx)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,a=0){this.groups.push({start:t,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const c=new pe().getNormalMatrix(t);a.applyNormalMatrix(c),a.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(t),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return _i.makeRotationFromQuaternion(t),this.applyMatrix4(_i),this}rotateX(t){return _i.makeRotationX(t),this.applyMatrix4(_i),this}rotateY(t){return _i.makeRotationY(t),this.applyMatrix4(_i),this}rotateZ(t){return _i.makeRotationZ(t),this.applyMatrix4(_i),this}translate(t,n,a){return _i.makeTranslation(t,n,a),this.applyMatrix4(_i),this}scale(t,n,a){return _i.makeScale(t,n,a),this.applyMatrix4(_i),this}lookAt(t){return hh.lookAt(t),hh.updateMatrix(),this.applyMatrix4(hh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ur).negate(),this.translate(Ur.x,Ur.y,Ur.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let o=0,c=t.length;o<c;o++){const u=t[o];a.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Qe(a,3))}else{for(let a=0,o=n.count;a<o;a++){const c=t[a];n.setXYZ(a,c.x,c.y,c.z||0)}t.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rs);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let a=0,o=n.length;a<o;a++){const c=n[a];ai.setFromBufferAttribute(c),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,ai.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,ai.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(ai.min),this.boundingBox.expandByPoint(ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new eo);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const a=this.boundingSphere.center;if(ai.setFromBufferAttribute(t),n)for(let c=0,u=n.length;c<u;c++){const d=n[c];nl.setFromBufferAttribute(d),this.morphTargetsRelative?(xn.addVectors(ai.min,nl.min),ai.expandByPoint(xn),xn.addVectors(ai.max,nl.max),ai.expandByPoint(xn)):(ai.expandByPoint(nl.min),ai.expandByPoint(nl.max))}ai.getCenter(a);let o=0;for(let c=0,u=t.count;c<u;c++)xn.fromBufferAttribute(t,c),o=Math.max(o,a.distanceToSquared(xn));if(n)for(let c=0,u=n.length;c<u;c++){const d=n[c],h=this.morphTargetsRelative;for(let m=0,g=d.count;m<g;m++)xn.fromBufferAttribute(d,m),h&&(Ur.fromBufferAttribute(t,m),xn.add(Ur)),o=Math.max(o,a.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,o=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new oi(new Float32Array(4*a.count),4));const u=this.getAttribute("tangent"),d=[],h=[];for(let k=0;k<a.count;k++)d[k]=new P,h[k]=new P;const m=new P,g=new P,v=new P,_=new re,S=new re,E=new re,b=new P,M=new P;function x(k,D,C){m.fromBufferAttribute(a,k),g.fromBufferAttribute(a,D),v.fromBufferAttribute(a,C),_.fromBufferAttribute(c,k),S.fromBufferAttribute(c,D),E.fromBufferAttribute(c,C),g.sub(m),v.sub(m),S.sub(_),E.sub(_);const G=1/(S.x*E.y-E.x*S.y);isFinite(G)&&(b.copy(g).multiplyScalar(E.y).addScaledVector(v,-S.y).multiplyScalar(G),M.copy(v).multiplyScalar(S.x).addScaledVector(g,-E.x).multiplyScalar(G),d[k].add(b),d[D].add(b),d[C].add(b),h[k].add(M),h[D].add(M),h[C].add(M))}let N=this.groups;N.length===0&&(N=[{start:0,count:t.count}]);for(let k=0,D=N.length;k<D;++k){const C=N[k],G=C.start,at=C.count;for(let tt=G,ct=G+at;tt<ct;tt+=3)x(t.getX(tt+0),t.getX(tt+1),t.getX(tt+2))}const U=new P,T=new P,W=new P,B=new P;function O(k){W.fromBufferAttribute(o,k),B.copy(W);const D=d[k];U.copy(D),U.sub(W.multiplyScalar(W.dot(D))).normalize(),T.crossVectors(B,D);const G=T.dot(h[k])<0?-1:1;u.setXYZW(k,U.x,U.y,U.z,G)}for(let k=0,D=N.length;k<D;++k){const C=N[k],G=C.start,at=C.count;for(let tt=G,ct=G+at;tt<ct;tt+=3)O(t.getX(tt+0)),O(t.getX(tt+1)),O(t.getX(tt+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new oi(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let _=0,S=a.count;_<S;_++)a.setXYZ(_,0,0,0);const o=new P,c=new P,u=new P,d=new P,h=new P,m=new P,g=new P,v=new P;if(t)for(let _=0,S=t.count;_<S;_+=3){const E=t.getX(_+0),b=t.getX(_+1),M=t.getX(_+2);o.fromBufferAttribute(n,E),c.fromBufferAttribute(n,b),u.fromBufferAttribute(n,M),g.subVectors(u,c),v.subVectors(o,c),g.cross(v),d.fromBufferAttribute(a,E),h.fromBufferAttribute(a,b),m.fromBufferAttribute(a,M),d.add(g),h.add(g),m.add(g),a.setXYZ(E,d.x,d.y,d.z),a.setXYZ(b,h.x,h.y,h.z),a.setXYZ(M,m.x,m.y,m.z)}else for(let _=0,S=n.count;_<S;_+=3)o.fromBufferAttribute(n,_+0),c.fromBufferAttribute(n,_+1),u.fromBufferAttribute(n,_+2),g.subVectors(u,c),v.subVectors(o,c),g.cross(v),a.setXYZ(_+0,g.x,g.y,g.z),a.setXYZ(_+1,g.x,g.y,g.z),a.setXYZ(_+2,g.x,g.y,g.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,a=t.count;n<a;n++)xn.fromBufferAttribute(t,n),xn.normalize(),t.setXYZ(n,xn.x,xn.y,xn.z)}toNonIndexed(){function t(d,h){const m=d.array,g=d.itemSize,v=d.normalized,_=new m.constructor(h.length*g);let S=0,E=0;for(let b=0,M=h.length;b<M;b++){d.isInterleavedBufferAttribute?S=h[b]*d.data.stride+d.offset:S=h[b]*g;for(let x=0;x<g;x++)_[E++]=m[S++]}return new oi(_,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new yn,a=this.index.array,o=this.attributes;for(const d in o){const h=o[d],m=t(h,a);n.setAttribute(d,m)}const c=this.morphAttributes;for(const d in c){const h=[],m=c[d];for(let g=0,v=m.length;g<v;g++){const _=m[g],S=t(_,a);h.push(S)}n.morphAttributes[d]=h}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,h=u.length;d<h;d++){const m=u[d];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const m in h)h[m]!==void 0&&(t[m]=h[m]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const h in a){const m=a[h];t.data.attributes[h]=m.toJSON(t.data)}const o={};let c=!1;for(const h in this.morphAttributes){const m=this.morphAttributes[h],g=[];for(let v=0,_=m.length;v<_;v++){const S=m[v];g.push(S.toJSON(t.data))}g.length>0&&(o[h]=g,c=!0)}c&&(t.data.morphAttributes=o,t.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(t.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const a=t.index;a!==null&&this.setIndex(a.clone(n));const o=t.attributes;for(const m in o){const g=o[m];this.setAttribute(m,g.clone(n))}const c=t.morphAttributes;for(const m in c){const g=[],v=c[m];for(let _=0,S=v.length;_<S;_++)g.push(v[_].clone(n));this.morphAttributes[m]=g}this.morphTargetsRelative=t.morphTargetsRelative;const u=t.groups;for(let m=0,g=u.length;m<g;m++){const v=u[m];this.addGroup(v.start,v.count,v.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const h=t.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const c_=new We,ws=new Pp,kc=new eo,u_=new P,Xc=new P,jc=new P,Wc=new P,ph=new P,qc=new P,f_=new P,Yc=new P;class ri extends pn{constructor(t=new yn,n=new vl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const d=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,n){const a=this.geometry,o=a.attributes.position,c=a.morphAttributes.position,u=a.morphTargetsRelative;n.fromBufferAttribute(o,t);const d=this.morphTargetInfluences;if(c&&d){qc.set(0,0,0);for(let h=0,m=c.length;h<m;h++){const g=d[h],v=c[h];g!==0&&(ph.fromBufferAttribute(v,t),u?qc.addScaledVector(ph,g):qc.addScaledVector(ph.sub(n),g))}n.add(qc)}return n}raycast(t,n){const a=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),kc.copy(a.boundingSphere),kc.applyMatrix4(c),ws.copy(t.ray).recast(t.near),!(kc.containsPoint(ws.origin)===!1&&(ws.intersectSphere(kc,u_)===null||ws.origin.distanceToSquared(u_)>(t.far-t.near)**2))&&(c_.copy(c).invert(),ws.copy(t.ray).applyMatrix4(c_),!(a.boundingBox!==null&&ws.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(t,n,ws)))}_computeIntersections(t,n,a){let o;const c=this.geometry,u=this.material,d=c.index,h=c.attributes.position,m=c.attributes.uv,g=c.attributes.uv1,v=c.attributes.normal,_=c.groups,S=c.drawRange;if(d!==null)if(Array.isArray(u))for(let E=0,b=_.length;E<b;E++){const M=_[E],x=u[M.materialIndex],N=Math.max(M.start,S.start),U=Math.min(d.count,Math.min(M.start+M.count,S.start+S.count));for(let T=N,W=U;T<W;T+=3){const B=d.getX(T),O=d.getX(T+1),k=d.getX(T+2);o=Zc(this,x,t,a,m,g,v,B,O,k),o&&(o.faceIndex=Math.floor(T/3),o.face.materialIndex=M.materialIndex,n.push(o))}}else{const E=Math.max(0,S.start),b=Math.min(d.count,S.start+S.count);for(let M=E,x=b;M<x;M+=3){const N=d.getX(M),U=d.getX(M+1),T=d.getX(M+2);o=Zc(this,u,t,a,m,g,v,N,U,T),o&&(o.faceIndex=Math.floor(M/3),n.push(o))}}else if(h!==void 0)if(Array.isArray(u))for(let E=0,b=_.length;E<b;E++){const M=_[E],x=u[M.materialIndex],N=Math.max(M.start,S.start),U=Math.min(h.count,Math.min(M.start+M.count,S.start+S.count));for(let T=N,W=U;T<W;T+=3){const B=T,O=T+1,k=T+2;o=Zc(this,x,t,a,m,g,v,B,O,k),o&&(o.faceIndex=Math.floor(T/3),o.face.materialIndex=M.materialIndex,n.push(o))}}else{const E=Math.max(0,S.start),b=Math.min(h.count,S.start+S.count);for(let M=E,x=b;M<x;M+=3){const N=M,U=M+1,T=M+2;o=Zc(this,u,t,a,m,g,v,N,U,T),o&&(o.faceIndex=Math.floor(M/3),n.push(o))}}}}function nb(r,t,n,a,o,c,u,d){let h;if(t.side===Zn?h=a.intersectTriangle(u,c,o,!0,d):h=a.intersectTriangle(o,c,u,t.side===ss,d),h===null)return null;Yc.copy(d),Yc.applyMatrix4(r.matrixWorld);const m=n.ray.origin.distanceTo(Yc);return m<n.near||m>n.far?null:{distance:m,point:Yc.clone(),object:r}}function Zc(r,t,n,a,o,c,u,d,h,m){r.getVertexPosition(d,Xc),r.getVertexPosition(h,jc),r.getVertexPosition(m,Wc);const g=nb(r,t,n,a,Xc,jc,Wc,f_);if(g){const v=new P;si.getBarycoord(f_,Xc,jc,Wc,v),o&&(g.uv=si.getInterpolatedAttribute(o,d,h,m,v,new re)),c&&(g.uv1=si.getInterpolatedAttribute(c,d,h,m,v,new re)),u&&(g.normal=si.getInterpolatedAttribute(u,d,h,m,v,new P),g.normal.dot(a.direction)>0&&g.normal.multiplyScalar(-1));const _={a:d,b:h,c:m,normal:new P,materialIndex:0};si.getNormal(Xc,jc,Wc,_.normal),g.face=_,g.barycoord=v}return g}class io extends yn{constructor(t=1,n=1,a=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:a,widthSegments:o,heightSegments:c,depthSegments:u};const d=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const h=[],m=[],g=[],v=[];let _=0,S=0;E("z","y","x",-1,-1,a,n,t,u,c,0),E("z","y","x",1,-1,a,n,-t,u,c,1),E("x","z","y",1,1,t,a,n,o,u,2),E("x","z","y",1,-1,t,a,-n,o,u,3),E("x","y","z",1,-1,t,n,a,o,c,4),E("x","y","z",-1,-1,t,n,-a,o,c,5),this.setIndex(h),this.setAttribute("position",new Qe(m,3)),this.setAttribute("normal",new Qe(g,3)),this.setAttribute("uv",new Qe(v,2));function E(b,M,x,N,U,T,W,B,O,k,D){const C=T/O,G=W/k,at=T/2,tt=W/2,ct=B/2,mt=O+1,I=k+1;let H=0,V=0;const _t=new P;for(let bt=0;bt<I;bt++){const z=bt*G-tt;for(let it=0;it<mt;it++){const Mt=it*C-at;_t[b]=Mt*N,_t[M]=z*U,_t[x]=ct,m.push(_t.x,_t.y,_t.z),_t[b]=0,_t[M]=0,_t[x]=B>0?1:-1,g.push(_t.x,_t.y,_t.z),v.push(it/O),v.push(1-bt/k),H+=1}}for(let bt=0;bt<k;bt++)for(let z=0;z<O;z++){const it=_+z+mt*bt,Mt=_+z+mt*(bt+1),J=_+(z+1)+mt*(bt+1),ht=_+(z+1)+mt*bt;h.push(it,Mt,ht),h.push(Mt,J,ht),V+=6}d.addGroup(S,V,D),S+=V,_+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new io(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Kr(r){const t={};for(const n in r){t[n]={};for(const a in r[n]){const o=r[n][a];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][a]=null):t[n][a]=o.clone():Array.isArray(o)?t[n][a]=o.slice():t[n][a]=o}}return t}function Fn(r){const t={};for(let n=0;n<r.length;n++){const a=Kr(r[n]);for(const o in a)t[o]=a[o]}return t}function ib(r){const t=[];for(let n=0;n<r.length;n++)t.push(r[n].clone());return t}function Ox(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ce.workingColorSpace}const Ip={clone:Kr,merge:Fn};var ab=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ba extends no{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ab,this.fragmentShader=sb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Kr(t.uniforms),this.uniformsGroups=ib(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?n.uniforms[o]={type:"t",value:u.toJSON(t).uuid}:u&&u.isColor?n.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[o]={type:"m4",value:u.toArray()}:n.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const o in this.extensions)this.extensions[o]===!0&&(a[o]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}}class zx extends pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new We,this.projectionMatrix=new We,this.projectionMatrixInverse=new We,this.coordinateSystem=_a}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const es=new P,d_=new re,h_=new re;class yi extends zx{constructor(t=50,n=1,a=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=a,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=gl*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(kr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return gl*2*Math.atan(Math.tan(kr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,a){es.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(es.x,es.y).multiplyScalar(-t/es.z),es.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(es.x,es.y).multiplyScalar(-t/es.z)}getViewSize(t,n){return this.getViewBounds(t,d_,h_),n.subVectors(h_,d_)}setViewOffset(t,n,a,o,c,u){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(kr*.5*this.fov)/this.zoom,a=2*n,o=this.aspect*a,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const h=u.fullWidth,m=u.fullHeight;c+=u.offsetX*o/h,n-=u.offsetY*a/m,o*=u.width/h,a*=u.height/m}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-a,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Lr=-90,Nr=1;class rb extends pn{constructor(t,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new yi(Lr,Nr,t,n);o.layers=this.layers,this.add(o);const c=new yi(Lr,Nr,t,n);c.layers=this.layers,this.add(c);const u=new yi(Lr,Nr,t,n);u.layers=this.layers,this.add(u);const d=new yi(Lr,Nr,t,n);d.layers=this.layers,this.add(d);const h=new yi(Lr,Nr,t,n);h.layers=this.layers,this.add(h);const m=new yi(Lr,Nr,t,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[a,o,c,u,d,h]=n;for(const m of n)this.remove(m);if(t===_a)a.up.set(0,1,0),a.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(t===Eu)a.up.set(0,-1,0),a.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const m of n)this.add(m),m.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:o}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,u,d,h,m,g]=this.children,v=t.getRenderTarget(),_=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const b=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,t.setRenderTarget(a,0,o),t.render(n,c),t.setRenderTarget(a,1,o),t.render(n,u),t.setRenderTarget(a,2,o),t.render(n,d),t.setRenderTarget(a,3,o),t.render(n,h),t.setRenderTarget(a,4,o),t.render(n,m),a.texture.generateMipmaps=b,t.setRenderTarget(a,5,o),t.render(n,g),t.setRenderTarget(v,_,S),t.xr.enabled=E,a.texture.needsPMREMUpdate=!0}}class Px extends Hn{constructor(t,n,a,o,c,u,d,h,m,g){t=t!==void 0?t:[],n=n!==void 0?n:Wr,super(t,n,a,o,c,u,d,h,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ob extends Fs{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const a={width:t,height:t,depth:1},o=[a,a,a,a,a,a];this.texture=new Px(o,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ki}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new io(5,5,5),c=new ba({name:"CubemapFromEquirect",uniforms:Kr(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:Zn,blending:is});c.uniforms.tEquirect.value=n;const u=new ri(o,c),d=n.minFilter;return n.minFilter===Ps&&(n.minFilter=ki),new rb(1,10,this).update(t,u),n.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(t,n,a,o){const c=t.getRenderTarget();for(let u=0;u<6;u++)t.setRenderTarget(this,u),t.clear(n,a,o);t.setRenderTarget(c)}}const mh=new P,lb=new P,cb=new pe;class Us{constructor(t=new P(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,a,o){return this.normal.set(t,n,a),this.constant=o,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,a){const o=mh.subVectors(a,n).cross(lb.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const a=t.delta(mh),o=this.normal.dot(a);if(o===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/o;return c<0||c>1?null:n.copy(t.start).addScaledVector(a,c)}intersectsLine(t){const n=this.distanceToPoint(t.start),a=this.distanceToPoint(t.end);return n<0&&a>0||a<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const a=n||cb.getNormalMatrix(t),o=this.coplanarPoint(mh).applyMatrix4(t),c=this.normal.applyMatrix3(a).normalize();return this.constant=-o.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Cs=new eo,Kc=new P;class Fp{constructor(t=new Us,n=new Us,a=new Us,o=new Us,c=new Us,u=new Us){this.planes=[t,n,a,o,c,u]}set(t,n,a,o,c,u){const d=this.planes;return d[0].copy(t),d[1].copy(n),d[2].copy(a),d[3].copy(o),d[4].copy(c),d[5].copy(u),this}copy(t){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(t.planes[a]);return this}setFromProjectionMatrix(t,n=_a){const a=this.planes,o=t.elements,c=o[0],u=o[1],d=o[2],h=o[3],m=o[4],g=o[5],v=o[6],_=o[7],S=o[8],E=o[9],b=o[10],M=o[11],x=o[12],N=o[13],U=o[14],T=o[15];if(a[0].setComponents(h-c,_-m,M-S,T-x).normalize(),a[1].setComponents(h+c,_+m,M+S,T+x).normalize(),a[2].setComponents(h+u,_+g,M+E,T+N).normalize(),a[3].setComponents(h-u,_-g,M-E,T-N).normalize(),a[4].setComponents(h-d,_-v,M-b,T-U).normalize(),n===_a)a[5].setComponents(h+d,_+v,M+b,T+U).normalize();else if(n===Eu)a[5].setComponents(d,v,b,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Cs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Cs.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Cs)}intersectsSprite(t){return Cs.center.set(0,0,0),Cs.radius=.7071067811865476,Cs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Cs)}intersectsSphere(t){const n=this.planes,a=t.center,o=-t.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(a)<o)return!1;return!0}intersectsBox(t){const n=this.planes;for(let a=0;a<6;a++){const o=n[a];if(Kc.x=o.normal.x>0?t.max.x:t.min.x,Kc.y=o.normal.y>0?t.max.y:t.min.y,Kc.z=o.normal.z>0?t.max.z:t.min.z,o.distanceToPoint(Kc)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Bx(){let r=null,t=!1,n=null,a=null;function o(c,u){n(c,u),a=r.requestAnimationFrame(o)}return{start:function(){t!==!0&&n!==null&&(a=r.requestAnimationFrame(o),t=!0)},stop:function(){r.cancelAnimationFrame(a),t=!1},setAnimationLoop:function(c){n=c},setContext:function(c){r=c}}}function ub(r){const t=new WeakMap;function n(d,h){const m=d.array,g=d.usage,v=m.byteLength,_=r.createBuffer();r.bindBuffer(h,_),r.bufferData(h,m,g),d.onUploadCallback();let S;if(m instanceof Float32Array)S=r.FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?S=r.HALF_FLOAT:S=r.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=r.SHORT;else if(m instanceof Uint32Array)S=r.UNSIGNED_INT;else if(m instanceof Int32Array)S=r.INT;else if(m instanceof Int8Array)S=r.BYTE;else if(m instanceof Uint8Array)S=r.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:_,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:v}}function a(d,h,m){const g=h.array,v=h.updateRanges;if(r.bindBuffer(m,d),v.length===0)r.bufferSubData(m,0,g);else{v.sort((S,E)=>S.start-E.start);let _=0;for(let S=1;S<v.length;S++){const E=v[_],b=v[S];b.start<=E.start+E.count+1?E.count=Math.max(E.count,b.start+b.count-E.start):(++_,v[_]=b)}v.length=_+1;for(let S=0,E=v.length;S<E;S++){const b=v[S];r.bufferSubData(m,b.start*g.BYTES_PER_ELEMENT,g,b.start,b.count)}h.clearUpdateRanges()}h.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const h=t.get(d);h&&(r.deleteBuffer(h.buffer),t.delete(d))}function u(d,h){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=t.get(d);(!g||g.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=t.get(d);if(m===void 0)t.set(d,n(d,h));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(m.buffer,d,h),m.version=d.version}}return{get:o,remove:c,update:u}}class Uu extends yn{constructor(t=1,n=1,a=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:a,heightSegments:o};const c=t/2,u=n/2,d=Math.floor(a),h=Math.floor(o),m=d+1,g=h+1,v=t/d,_=n/h,S=[],E=[],b=[],M=[];for(let x=0;x<g;x++){const N=x*_-u;for(let U=0;U<m;U++){const T=U*v-c;E.push(T,-N,0),b.push(0,0,1),M.push(U/d),M.push(1-x/h)}}for(let x=0;x<h;x++)for(let N=0;N<d;N++){const U=N+m*x,T=N+m*(x+1),W=N+1+m*(x+1),B=N+1+m*x;S.push(U,T,B),S.push(T,W,B)}this.setIndex(S),this.setAttribute("position",new Qe(E,3)),this.setAttribute("normal",new Qe(b,3)),this.setAttribute("uv",new Qe(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Uu(t.width,t.height,t.widthSegments,t.heightSegments)}}var fb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,db=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,hb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,_b=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xb=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,yb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Sb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Mb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Eb=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,bb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Tb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ab=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,wb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Rb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Db=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ub=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Lb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Nb=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Ob=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,zb=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Pb=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Bb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ib=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Gb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Xb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,jb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Wb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Yb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Kb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,$b=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,t1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,e1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,n1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,i1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,a1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,s1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,r1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,o1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,l1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,c1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,u1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,f1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,d1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,h1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,p1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,m1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,g1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,v1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,x1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,y1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,S1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,M1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,E1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,b1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,T1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,A1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,w1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,C1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,R1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,D1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,U1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,L1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,N1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,O1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,z1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,P1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,B1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,I1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,F1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,H1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,V1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,G1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,k1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,X1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,j1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,W1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,q1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Y1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Z1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,K1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Q1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,J1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,tT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,eT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,iT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,aT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,sT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,rT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,oT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,cT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const uT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,vT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,_T=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,xT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,yT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ST=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ET=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,TT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,RT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,UT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,LT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,NT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,zT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,BT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,FT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,HT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,VT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,GT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ge={alphahash_fragment:fb,alphahash_pars_fragment:db,alphamap_fragment:hb,alphamap_pars_fragment:pb,alphatest_fragment:mb,alphatest_pars_fragment:gb,aomap_fragment:vb,aomap_pars_fragment:_b,batching_pars_vertex:xb,batching_vertex:yb,begin_vertex:Sb,beginnormal_vertex:Mb,bsdfs:Eb,iridescence_fragment:bb,bumpmap_pars_fragment:Tb,clipping_planes_fragment:Ab,clipping_planes_pars_fragment:wb,clipping_planes_pars_vertex:Cb,clipping_planes_vertex:Rb,color_fragment:Db,color_pars_fragment:Ub,color_pars_vertex:Lb,color_vertex:Nb,common:Ob,cube_uv_reflection_fragment:zb,defaultnormal_vertex:Pb,displacementmap_pars_vertex:Bb,displacementmap_vertex:Ib,emissivemap_fragment:Fb,emissivemap_pars_fragment:Hb,colorspace_fragment:Vb,colorspace_pars_fragment:Gb,envmap_fragment:kb,envmap_common_pars_fragment:Xb,envmap_pars_fragment:jb,envmap_pars_vertex:Wb,envmap_physical_pars_fragment:i1,envmap_vertex:qb,fog_vertex:Yb,fog_pars_vertex:Zb,fog_fragment:Kb,fog_pars_fragment:Qb,gradientmap_pars_fragment:Jb,lightmap_pars_fragment:$b,lights_lambert_fragment:t1,lights_lambert_pars_fragment:e1,lights_pars_begin:n1,lights_toon_fragment:a1,lights_toon_pars_fragment:s1,lights_phong_fragment:r1,lights_phong_pars_fragment:o1,lights_physical_fragment:l1,lights_physical_pars_fragment:c1,lights_fragment_begin:u1,lights_fragment_maps:f1,lights_fragment_end:d1,logdepthbuf_fragment:h1,logdepthbuf_pars_fragment:p1,logdepthbuf_pars_vertex:m1,logdepthbuf_vertex:g1,map_fragment:v1,map_pars_fragment:_1,map_particle_fragment:x1,map_particle_pars_fragment:y1,metalnessmap_fragment:S1,metalnessmap_pars_fragment:M1,morphinstance_vertex:E1,morphcolor_vertex:b1,morphnormal_vertex:T1,morphtarget_pars_vertex:A1,morphtarget_vertex:w1,normal_fragment_begin:C1,normal_fragment_maps:R1,normal_pars_fragment:D1,normal_pars_vertex:U1,normal_vertex:L1,normalmap_pars_fragment:N1,clearcoat_normal_fragment_begin:O1,clearcoat_normal_fragment_maps:z1,clearcoat_pars_fragment:P1,iridescence_pars_fragment:B1,opaque_fragment:I1,packing:F1,premultiplied_alpha_fragment:H1,project_vertex:V1,dithering_fragment:G1,dithering_pars_fragment:k1,roughnessmap_fragment:X1,roughnessmap_pars_fragment:j1,shadowmap_pars_fragment:W1,shadowmap_pars_vertex:q1,shadowmap_vertex:Y1,shadowmask_pars_fragment:Z1,skinbase_vertex:K1,skinning_pars_vertex:Q1,skinning_vertex:J1,skinnormal_vertex:$1,specularmap_fragment:tT,specularmap_pars_fragment:eT,tonemapping_fragment:nT,tonemapping_pars_fragment:iT,transmission_fragment:aT,transmission_pars_fragment:sT,uv_pars_fragment:rT,uv_pars_vertex:oT,uv_vertex:lT,worldpos_vertex:cT,background_vert:uT,background_frag:fT,backgroundCube_vert:dT,backgroundCube_frag:hT,cube_vert:pT,cube_frag:mT,depth_vert:gT,depth_frag:vT,distanceRGBA_vert:_T,distanceRGBA_frag:xT,equirect_vert:yT,equirect_frag:ST,linedashed_vert:MT,linedashed_frag:ET,meshbasic_vert:bT,meshbasic_frag:TT,meshlambert_vert:AT,meshlambert_frag:wT,meshmatcap_vert:CT,meshmatcap_frag:RT,meshnormal_vert:DT,meshnormal_frag:UT,meshphong_vert:LT,meshphong_frag:NT,meshphysical_vert:OT,meshphysical_frag:zT,meshtoon_vert:PT,meshtoon_frag:BT,points_vert:IT,points_frag:FT,shadow_vert:HT,shadow_frag:VT,sprite_vert:GT,sprite_frag:kT},Rt={common:{diffuse:{value:new ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pe}},envmap:{envMap:{value:null},envMapRotation:{value:new pe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pe},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0},uvTransform:{value:new pe}},sprite:{diffuse:{value:new ve(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}}},Yn={basic:{uniforms:Fn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.fog]),vertexShader:ge.meshbasic_vert,fragmentShader:ge.meshbasic_frag},lambert:{uniforms:Fn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new ve(0)}}]),vertexShader:ge.meshlambert_vert,fragmentShader:ge.meshlambert_frag},phong:{uniforms:Fn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new ve(0)},specular:{value:new ve(1118481)},shininess:{value:30}}]),vertexShader:ge.meshphong_vert,fragmentShader:ge.meshphong_frag},standard:{uniforms:Fn([Rt.common,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.roughnessmap,Rt.metalnessmap,Rt.fog,Rt.lights,{emissive:{value:new ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag},toon:{uniforms:Fn([Rt.common,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.gradientmap,Rt.fog,Rt.lights,{emissive:{value:new ve(0)}}]),vertexShader:ge.meshtoon_vert,fragmentShader:ge.meshtoon_frag},matcap:{uniforms:Fn([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,{matcap:{value:null}}]),vertexShader:ge.meshmatcap_vert,fragmentShader:ge.meshmatcap_frag},points:{uniforms:Fn([Rt.points,Rt.fog]),vertexShader:ge.points_vert,fragmentShader:ge.points_frag},dashed:{uniforms:Fn([Rt.common,Rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ge.linedashed_vert,fragmentShader:ge.linedashed_frag},depth:{uniforms:Fn([Rt.common,Rt.displacementmap]),vertexShader:ge.depth_vert,fragmentShader:ge.depth_frag},normal:{uniforms:Fn([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,{opacity:{value:1}}]),vertexShader:ge.meshnormal_vert,fragmentShader:ge.meshnormal_frag},sprite:{uniforms:Fn([Rt.sprite,Rt.fog]),vertexShader:ge.sprite_vert,fragmentShader:ge.sprite_frag},background:{uniforms:{uvTransform:{value:new pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ge.background_vert,fragmentShader:ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pe}},vertexShader:ge.backgroundCube_vert,fragmentShader:ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ge.cube_vert,fragmentShader:ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ge.equirect_vert,fragmentShader:ge.equirect_frag},distanceRGBA:{uniforms:Fn([Rt.common,Rt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ge.distanceRGBA_vert,fragmentShader:ge.distanceRGBA_frag},shadow:{uniforms:Fn([Rt.lights,Rt.fog,{color:{value:new ve(0)},opacity:{value:1}}]),vertexShader:ge.shadow_vert,fragmentShader:ge.shadow_frag}};Yn.physical={uniforms:Fn([Yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pe},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pe},sheen:{value:0},sheenColor:{value:new ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pe},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pe},attenuationDistance:{value:0},attenuationColor:{value:new ve(0)},specularColor:{value:new ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pe},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pe}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag};const Qc={r:0,b:0,g:0},Rs=new Ea,XT=new We;function jT(r,t,n,a,o,c,u){const d=new ve(0);let h=c===!0?0:1,m,g,v=null,_=0,S=null;function E(N){let U=N.isScene===!0?N.background:null;return U&&U.isTexture&&(U=(N.backgroundBlurriness>0?n:t).get(U)),U}function b(N){let U=!1;const T=E(N);T===null?x(d,h):T&&T.isColor&&(x(T,1),U=!0);const W=r.xr.getEnvironmentBlendMode();W==="additive"?a.buffers.color.setClear(0,0,0,1,u):W==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,u),(r.autoClear||U)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function M(N,U){const T=E(U);T&&(T.isCubeTexture||T.mapping===Ru)?(g===void 0&&(g=new ri(new io(1,1,1),new ba({name:"BackgroundCubeMaterial",uniforms:Kr(Yn.backgroundCube.uniforms),vertexShader:Yn.backgroundCube.vertexShader,fragmentShader:Yn.backgroundCube.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(W,B,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(g)),Rs.copy(U.backgroundRotation),Rs.x*=-1,Rs.y*=-1,Rs.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Rs.y*=-1,Rs.z*=-1),g.material.uniforms.envMap.value=T,g.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(XT.makeRotationFromEuler(Rs)),g.material.toneMapped=Ce.getTransfer(T.colorSpace)!==ke,(v!==T||_!==T.version||S!==r.toneMapping)&&(g.material.needsUpdate=!0,v=T,_=T.version,S=r.toneMapping),g.layers.enableAll(),N.unshift(g,g.geometry,g.material,0,0,null)):T&&T.isTexture&&(m===void 0&&(m=new ri(new Uu(2,2),new ba({name:"BackgroundMaterial",uniforms:Kr(Yn.background.uniforms),vertexShader:Yn.background.vertexShader,fragmentShader:Yn.background.fragmentShader,side:ss,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(m)),m.material.uniforms.t2D.value=T,m.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,m.material.toneMapped=Ce.getTransfer(T.colorSpace)!==ke,T.matrixAutoUpdate===!0&&T.updateMatrix(),m.material.uniforms.uvTransform.value.copy(T.matrix),(v!==T||_!==T.version||S!==r.toneMapping)&&(m.material.needsUpdate=!0,v=T,_=T.version,S=r.toneMapping),m.layers.enableAll(),N.unshift(m,m.geometry,m.material,0,0,null))}function x(N,U){N.getRGB(Qc,Ox(r)),a.buffers.color.setClear(Qc.r,Qc.g,Qc.b,U,u)}return{getClearColor:function(){return d},setClearColor:function(N,U=1){d.set(N),h=U,x(d,h)},getClearAlpha:function(){return h},setClearAlpha:function(N){h=N,x(d,h)},render:b,addToRenderList:M}}function WT(r,t){const n=r.getParameter(r.MAX_VERTEX_ATTRIBS),a={},o=_(null);let c=o,u=!1;function d(C,G,at,tt,ct){let mt=!1;const I=v(tt,at,G);c!==I&&(c=I,m(c.object)),mt=S(C,tt,at,ct),mt&&E(C,tt,at,ct),ct!==null&&t.update(ct,r.ELEMENT_ARRAY_BUFFER),(mt||u)&&(u=!1,T(C,G,at,tt),ct!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(ct).buffer))}function h(){return r.createVertexArray()}function m(C){return r.bindVertexArray(C)}function g(C){return r.deleteVertexArray(C)}function v(C,G,at){const tt=at.wireframe===!0;let ct=a[C.id];ct===void 0&&(ct={},a[C.id]=ct);let mt=ct[G.id];mt===void 0&&(mt={},ct[G.id]=mt);let I=mt[tt];return I===void 0&&(I=_(h()),mt[tt]=I),I}function _(C){const G=[],at=[],tt=[];for(let ct=0;ct<n;ct++)G[ct]=0,at[ct]=0,tt[ct]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:at,attributeDivisors:tt,object:C,attributes:{},index:null}}function S(C,G,at,tt){const ct=c.attributes,mt=G.attributes;let I=0;const H=at.getAttributes();for(const V in H)if(H[V].location>=0){const bt=ct[V];let z=mt[V];if(z===void 0&&(V==="instanceMatrix"&&C.instanceMatrix&&(z=C.instanceMatrix),V==="instanceColor"&&C.instanceColor&&(z=C.instanceColor)),bt===void 0||bt.attribute!==z||z&&bt.data!==z.data)return!0;I++}return c.attributesNum!==I||c.index!==tt}function E(C,G,at,tt){const ct={},mt=G.attributes;let I=0;const H=at.getAttributes();for(const V in H)if(H[V].location>=0){let bt=mt[V];bt===void 0&&(V==="instanceMatrix"&&C.instanceMatrix&&(bt=C.instanceMatrix),V==="instanceColor"&&C.instanceColor&&(bt=C.instanceColor));const z={};z.attribute=bt,bt&&bt.data&&(z.data=bt.data),ct[V]=z,I++}c.attributes=ct,c.attributesNum=I,c.index=tt}function b(){const C=c.newAttributes;for(let G=0,at=C.length;G<at;G++)C[G]=0}function M(C){x(C,0)}function x(C,G){const at=c.newAttributes,tt=c.enabledAttributes,ct=c.attributeDivisors;at[C]=1,tt[C]===0&&(r.enableVertexAttribArray(C),tt[C]=1),ct[C]!==G&&(r.vertexAttribDivisor(C,G),ct[C]=G)}function N(){const C=c.newAttributes,G=c.enabledAttributes;for(let at=0,tt=G.length;at<tt;at++)G[at]!==C[at]&&(r.disableVertexAttribArray(at),G[at]=0)}function U(C,G,at,tt,ct,mt,I){I===!0?r.vertexAttribIPointer(C,G,at,ct,mt):r.vertexAttribPointer(C,G,at,tt,ct,mt)}function T(C,G,at,tt){b();const ct=tt.attributes,mt=at.getAttributes(),I=G.defaultAttributeValues;for(const H in mt){const V=mt[H];if(V.location>=0){let _t=ct[H];if(_t===void 0&&(H==="instanceMatrix"&&C.instanceMatrix&&(_t=C.instanceMatrix),H==="instanceColor"&&C.instanceColor&&(_t=C.instanceColor)),_t!==void 0){const bt=_t.normalized,z=_t.itemSize,it=t.get(_t);if(it===void 0)continue;const Mt=it.buffer,J=it.type,ht=it.bytesPerElement,Q=J===r.INT||J===r.UNSIGNED_INT||_t.gpuType===Rp;if(_t.isInterleavedBufferAttribute){const ut=_t.data,St=ut.stride,Tt=_t.offset;if(ut.isInstancedInterleavedBuffer){for(let Dt=0;Dt<V.locationSize;Dt++)x(V.location+Dt,ut.meshPerAttribute);C.isInstancedMesh!==!0&&tt._maxInstanceCount===void 0&&(tt._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let Dt=0;Dt<V.locationSize;Dt++)M(V.location+Dt);r.bindBuffer(r.ARRAY_BUFFER,Mt);for(let Dt=0;Dt<V.locationSize;Dt++)U(V.location+Dt,z/V.locationSize,J,bt,St*ht,(Tt+z/V.locationSize*Dt)*ht,Q)}else{if(_t.isInstancedBufferAttribute){for(let ut=0;ut<V.locationSize;ut++)x(V.location+ut,_t.meshPerAttribute);C.isInstancedMesh!==!0&&tt._maxInstanceCount===void 0&&(tt._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let ut=0;ut<V.locationSize;ut++)M(V.location+ut);r.bindBuffer(r.ARRAY_BUFFER,Mt);for(let ut=0;ut<V.locationSize;ut++)U(V.location+ut,z/V.locationSize,J,bt,z*ht,z/V.locationSize*ut*ht,Q)}}else if(I!==void 0){const bt=I[H];if(bt!==void 0)switch(bt.length){case 2:r.vertexAttrib2fv(V.location,bt);break;case 3:r.vertexAttrib3fv(V.location,bt);break;case 4:r.vertexAttrib4fv(V.location,bt);break;default:r.vertexAttrib1fv(V.location,bt)}}}}N()}function W(){k();for(const C in a){const G=a[C];for(const at in G){const tt=G[at];for(const ct in tt)g(tt[ct].object),delete tt[ct];delete G[at]}delete a[C]}}function B(C){if(a[C.id]===void 0)return;const G=a[C.id];for(const at in G){const tt=G[at];for(const ct in tt)g(tt[ct].object),delete tt[ct];delete G[at]}delete a[C.id]}function O(C){for(const G in a){const at=a[G];if(at[C.id]===void 0)continue;const tt=at[C.id];for(const ct in tt)g(tt[ct].object),delete tt[ct];delete at[C.id]}}function k(){D(),u=!0,c!==o&&(c=o,m(c.object))}function D(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:k,resetDefaultState:D,dispose:W,releaseStatesOfGeometry:B,releaseStatesOfProgram:O,initAttributes:b,enableAttribute:M,disableUnusedAttributes:N}}function qT(r,t,n){let a;function o(m){a=m}function c(m,g){r.drawArrays(a,m,g),n.update(g,a,1)}function u(m,g,v){v!==0&&(r.drawArraysInstanced(a,m,g,v),n.update(g,a,v))}function d(m,g,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,m,0,g,0,v);let S=0;for(let E=0;E<v;E++)S+=g[E];n.update(S,a,1)}function h(m,g,v,_){if(v===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<m.length;E++)u(m[E],g[E],_[E]);else{S.multiDrawArraysInstancedWEBGL(a,m,0,g,0,_,0,v);let E=0;for(let b=0;b<v;b++)E+=g[b]*_[b];n.update(E,a,1)}}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function YT(r,t,n,a){let o;function c(){if(o!==void 0)return o;if(t.has("EXT_texture_filter_anisotropic")===!0){const O=t.get("EXT_texture_filter_anisotropic");o=r.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(O){return!(O!==Li&&a.convert(O)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(O){const k=O===Sl&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(O!==Ma&&a.convert(O)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==va&&!k)}function h(O){if(O==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const g=h(m);g!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",g,"instead."),m=g);const v=n.logarithmicDepthBuffer===!0,_=n.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),S=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),x=r.getParameter(r.MAX_VERTEX_ATTRIBS),N=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),U=r.getParameter(r.MAX_VARYING_VECTORS),T=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),W=E>0,B=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:h,textureFormatReadable:u,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:v,reverseDepthBuffer:_,maxTextures:S,maxVertexTextures:E,maxTextureSize:b,maxCubemapSize:M,maxAttributes:x,maxVertexUniforms:N,maxVaryings:U,maxFragmentUniforms:T,vertexTextures:W,maxSamples:B}}function ZT(r){const t=this;let n=null,a=0,o=!1,c=!1;const u=new Us,d=new pe,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){const S=v.length!==0||_||a!==0||o;return o=_,a=v.length,S},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,_){n=g(v,_,0)},this.setState=function(v,_,S){const E=v.clippingPlanes,b=v.clipIntersection,M=v.clipShadows,x=r.get(v);if(!o||E===null||E.length===0||c&&!M)c?g(null):m();else{const N=c?0:a,U=N*4;let T=x.clippingState||null;h.value=T,T=g(E,_,U,S);for(let W=0;W!==U;++W)T[W]=n[W];x.clippingState=T,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=N}};function m(){h.value!==n&&(h.value=n,h.needsUpdate=a>0),t.numPlanes=a,t.numIntersection=0}function g(v,_,S,E){const b=v!==null?v.length:0;let M=null;if(b!==0){if(M=h.value,E!==!0||M===null){const x=S+b*4,N=_.matrixWorldInverse;d.getNormalMatrix(N),(M===null||M.length<x)&&(M=new Float32Array(x));for(let U=0,T=S;U!==b;++U,T+=4)u.copy(v[U]).applyMatrix4(N,d),u.normal.toArray(M,T),M[T+3]=u.constant}h.value=M,h.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,M}}function KT(r){let t=new WeakMap;function n(u,d){return d===Xh?u.mapping=Wr:d===jh&&(u.mapping=qr),u}function a(u){if(u&&u.isTexture){const d=u.mapping;if(d===Xh||d===jh)if(t.has(u)){const h=t.get(u).texture;return n(h,u.mapping)}else{const h=u.image;if(h&&h.height>0){const m=new ob(h.height);return m.fromEquirectangularTexture(r,u),t.set(u,m),u.addEventListener("dispose",o),n(m.texture,u.mapping)}else return null}}return u}function o(u){const d=u.target;d.removeEventListener("dispose",o);const h=t.get(d);h!==void 0&&(t.delete(d),h.dispose())}function c(){t=new WeakMap}return{get:a,dispose:c}}class Hp extends zx{constructor(t=-1,n=1,a=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=a,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,a,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=a-t,u=a+t,d=o+n,h=o-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,u=c+m*this.view.width,d-=g*this.view.offsetY,h=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,u,d,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Fr=4,p_=[.125,.215,.35,.446,.526,.582],Os=20,gh=new Hp,m_=new ve;let vh=null,_h=0,xh=0,yh=!1;const Ls=(1+Math.sqrt(5))/2,Or=1/Ls,g_=[new P(-Ls,Or,0),new P(Ls,Or,0),new P(-Or,0,Ls),new P(Or,0,Ls),new P(0,Ls,-Or),new P(0,Ls,Or),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class v_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,a=.1,o=100){vh=this._renderer.getRenderTarget(),_h=this._renderer.getActiveCubeFace(),xh=this._renderer.getActiveMipmapLevel(),yh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,a,o,c),n>0&&this._blur(c,0,0,n),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=y_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=x_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(vh,_h,xh),this._renderer.xr.enabled=yh,t.scissorTest=!1,Jc(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Wr||t.mapping===qr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),vh=this._renderer.getRenderTarget(),_h=this._renderer.getActiveCubeFace(),xh=this._renderer.getActiveMipmapLevel(),yh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(t,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:ki,minFilter:ki,generateMipmaps:!1,type:Sl,format:Li,colorSpace:$r,depthBuffer:!1},o=__(t,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=__(t,n,a);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=QT(c)),this._blurMaterial=JT(c,t,n)}return o}_compileMaterial(t){const n=new ri(this._lodPlanes[0],t);this._renderer.compile(n,gh)}_sceneToCubeUV(t,n,a,o){const d=new yi(90,1,n,a),h=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,_=g.toneMapping;g.getClearColor(m_),g.toneMapping=as,g.autoClear=!1;const S=new vl({name:"PMREM.Background",side:Zn,depthWrite:!1,depthTest:!1}),E=new ri(new io,S);let b=!1;const M=t.background;M?M.isColor&&(S.color.copy(M),t.background=null,b=!0):(S.color.copy(m_),b=!0);for(let x=0;x<6;x++){const N=x%3;N===0?(d.up.set(0,h[x],0),d.lookAt(m[x],0,0)):N===1?(d.up.set(0,0,h[x]),d.lookAt(0,m[x],0)):(d.up.set(0,h[x],0),d.lookAt(0,0,m[x]));const U=this._cubeSize;Jc(o,N*U,x>2?U:0,U,U),g.setRenderTarget(o),b&&g.render(E,d),g.render(t,d)}E.geometry.dispose(),E.material.dispose(),g.toneMapping=_,g.autoClear=v,t.background=M}_textureToCubeUV(t,n){const a=this._renderer,o=t.mapping===Wr||t.mapping===qr;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=y_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=x_());const c=o?this._cubemapMaterial:this._equirectMaterial,u=new ri(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=t;const h=this._cubeSize;Jc(n,0,0,3*h,2*h),a.setRenderTarget(n),a.render(u,gh)}_applyPMREM(t){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const o=this._lodPlanes.length;for(let c=1;c<o;c++){const u=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=g_[(o-c-1)%g_.length];this._blur(t,c-1,c,u,d)}n.autoClear=a}_blur(t,n,a,o,c){const u=this._pingPongRenderTarget;this._halfBlur(t,u,n,a,o,"latitudinal",c),this._halfBlur(u,t,a,a,o,"longitudinal",c)}_halfBlur(t,n,a,o,c,u,d){const h=this._renderer,m=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new ri(this._lodPlanes[o],m),_=m.uniforms,S=this._sizeLods[a]-1,E=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*Os-1),b=c/E,M=isFinite(c)?1+Math.floor(g*b):Os;M>Os&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Os}`);const x=[];let N=0;for(let O=0;O<Os;++O){const k=O/b,D=Math.exp(-k*k/2);x.push(D),O===0?N+=D:O<M&&(N+=2*D)}for(let O=0;O<x.length;O++)x[O]=x[O]/N;_.envMap.value=t.texture,_.samples.value=M,_.weights.value=x,_.latitudinal.value=u==="latitudinal",d&&(_.poleAxis.value=d);const{_lodMax:U}=this;_.dTheta.value=E,_.mipInt.value=U-a;const T=this._sizeLods[o],W=3*T*(o>U-Fr?o-U+Fr:0),B=4*(this._cubeSize-T);Jc(n,W,B,3*T,2*T),h.setRenderTarget(n),h.render(v,gh)}}function QT(r){const t=[],n=[],a=[];let o=r;const c=r-Fr+1+p_.length;for(let u=0;u<c;u++){const d=Math.pow(2,o);n.push(d);let h=1/d;u>r-Fr?h=p_[u-r+Fr-1]:u===0&&(h=0),a.push(h);const m=1/(d-2),g=-m,v=1+m,_=[g,g,v,g,v,v,g,g,v,v,g,v],S=6,E=6,b=3,M=2,x=1,N=new Float32Array(b*E*S),U=new Float32Array(M*E*S),T=new Float32Array(x*E*S);for(let B=0;B<S;B++){const O=B%3*2/3-1,k=B>2?0:-1,D=[O,k,0,O+2/3,k,0,O+2/3,k+1,0,O,k,0,O+2/3,k+1,0,O,k+1,0];N.set(D,b*E*B),U.set(_,M*E*B);const C=[B,B,B,B,B,B];T.set(C,x*E*B)}const W=new yn;W.setAttribute("position",new oi(N,b)),W.setAttribute("uv",new oi(U,M)),W.setAttribute("faceIndex",new oi(T,x)),t.push(W),o>Fr&&o--}return{lodPlanes:t,sizeLods:n,sigmas:a}}function __(r,t,n){const a=new Fs(r,t,n);return a.texture.mapping=Ru,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function Jc(r,t,n,a,o){r.viewport.set(t,n,a,o),r.scissor.set(t,n,a,o)}function JT(r,t,n){const a=new Float32Array(Os),o=new P(0,1,0);return new ba({name:"SphericalGaussianBlur",defines:{n:Os,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Vp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:is,depthTest:!1,depthWrite:!1})}function x_(){return new ba({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:is,depthTest:!1,depthWrite:!1})}function y_(){return new ba({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:is,depthTest:!1,depthWrite:!1})}function Vp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function $T(r){let t=new WeakMap,n=null;function a(d){if(d&&d.isTexture){const h=d.mapping,m=h===Xh||h===jh,g=h===Wr||h===qr;if(m||g){let v=t.get(d);const _=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==_)return n===null&&(n=new v_(r)),v=m?n.fromEquirectangular(d,v):n.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,t.set(d,v),v.texture;if(v!==void 0)return v.texture;{const S=d.image;return m&&S&&S.height>0||g&&S&&o(S)?(n===null&&(n=new v_(r)),v=m?n.fromEquirectangular(d):n.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,t.set(d,v),d.addEventListener("dispose",c),v.texture):null}}}return d}function o(d){let h=0;const m=6;for(let g=0;g<m;g++)d[g]!==void 0&&h++;return h===m}function c(d){const h=d.target;h.removeEventListener("dispose",c);const m=t.get(h);m!==void 0&&(t.delete(h),m.dispose())}function u(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:a,dispose:u}}function tA(r){const t={};function n(a){if(t[a]!==void 0)return t[a];let o;switch(a){case"WEBGL_depth_texture":o=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=r.getExtension(a)}return t[a]=o,o}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const o=n(a);return o===null&&cl("THREE.WebGLRenderer: "+a+" extension not supported."),o}}}function eA(r,t,n,a){const o={},c=new WeakMap;function u(v){const _=v.target;_.index!==null&&t.remove(_.index);for(const E in _.attributes)t.remove(_.attributes[E]);for(const E in _.morphAttributes){const b=_.morphAttributes[E];for(let M=0,x=b.length;M<x;M++)t.remove(b[M])}_.removeEventListener("dispose",u),delete o[_.id];const S=c.get(_);S&&(t.remove(S),c.delete(_)),a.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,n.memory.geometries--}function d(v,_){return o[_.id]===!0||(_.addEventListener("dispose",u),o[_.id]=!0,n.memory.geometries++),_}function h(v){const _=v.attributes;for(const E in _)t.update(_[E],r.ARRAY_BUFFER);const S=v.morphAttributes;for(const E in S){const b=S[E];for(let M=0,x=b.length;M<x;M++)t.update(b[M],r.ARRAY_BUFFER)}}function m(v){const _=[],S=v.index,E=v.attributes.position;let b=0;if(S!==null){const N=S.array;b=S.version;for(let U=0,T=N.length;U<T;U+=3){const W=N[U+0],B=N[U+1],O=N[U+2];_.push(W,B,B,O,O,W)}}else if(E!==void 0){const N=E.array;b=E.version;for(let U=0,T=N.length/3-1;U<T;U+=3){const W=U+0,B=U+1,O=U+2;_.push(W,B,B,O,O,W)}}else return;const M=new(Cx(_)?Nx:Lx)(_,1);M.version=b;const x=c.get(v);x&&t.remove(x),c.set(v,M)}function g(v){const _=c.get(v);if(_){const S=v.index;S!==null&&_.version<S.version&&m(v)}else m(v);return c.get(v)}return{get:d,update:h,getWireframeAttribute:g}}function nA(r,t,n){let a;function o(_){a=_}let c,u;function d(_){c=_.type,u=_.bytesPerElement}function h(_,S){r.drawElements(a,S,c,_*u),n.update(S,a,1)}function m(_,S,E){E!==0&&(r.drawElementsInstanced(a,S,c,_*u,E),n.update(S,a,E))}function g(_,S,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,S,0,c,_,0,E);let M=0;for(let x=0;x<E;x++)M+=S[x];n.update(M,a,1)}function v(_,S,E,b){if(E===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let x=0;x<_.length;x++)m(_[x]/u,S[x],b[x]);else{M.multiDrawElementsInstancedWEBGL(a,S,0,c,_,0,b,0,E);let x=0;for(let N=0;N<E;N++)x+=S[N]*b[N];n.update(x,a,1)}}this.setMode=o,this.setIndex=d,this.render=h,this.renderInstances=m,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function iA(r){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(c,u,d){switch(n.calls++,u){case r.TRIANGLES:n.triangles+=d*(c/3);break;case r.LINES:n.lines+=d*(c/2);break;case r.LINE_STRIP:n.lines+=d*(c-1);break;case r.LINE_LOOP:n.lines+=d*c;break;case r.POINTS:n.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:o,update:a}}function aA(r,t,n){const a=new WeakMap,o=new je;function c(u,d,h){const m=u.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=g!==void 0?g.length:0;let _=a.get(d);if(_===void 0||_.count!==v){let C=function(){k.dispose(),a.delete(d),d.removeEventListener("dispose",C)};var S=C;_!==void 0&&_.texture.dispose();const E=d.morphAttributes.position!==void 0,b=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,x=d.morphAttributes.position||[],N=d.morphAttributes.normal||[],U=d.morphAttributes.color||[];let T=0;E===!0&&(T=1),b===!0&&(T=2),M===!0&&(T=3);let W=d.attributes.position.count*T,B=1;W>t.maxTextureSize&&(B=Math.ceil(W/t.maxTextureSize),W=t.maxTextureSize);const O=new Float32Array(W*B*4*v),k=new Dx(O,W,B,v);k.type=va,k.needsUpdate=!0;const D=T*4;for(let G=0;G<v;G++){const at=x[G],tt=N[G],ct=U[G],mt=W*B*4*G;for(let I=0;I<at.count;I++){const H=I*D;E===!0&&(o.fromBufferAttribute(at,I),O[mt+H+0]=o.x,O[mt+H+1]=o.y,O[mt+H+2]=o.z,O[mt+H+3]=0),b===!0&&(o.fromBufferAttribute(tt,I),O[mt+H+4]=o.x,O[mt+H+5]=o.y,O[mt+H+6]=o.z,O[mt+H+7]=0),M===!0&&(o.fromBufferAttribute(ct,I),O[mt+H+8]=o.x,O[mt+H+9]=o.y,O[mt+H+10]=o.z,O[mt+H+11]=ct.itemSize===4?o.w:1)}}_={count:v,texture:k,size:new re(W,B)},a.set(d,_),d.addEventListener("dispose",C)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)h.getUniforms().setValue(r,"morphTexture",u.morphTexture,n);else{let E=0;for(let M=0;M<m.length;M++)E+=m[M];const b=d.morphTargetsRelative?1:1-E;h.getUniforms().setValue(r,"morphTargetBaseInfluence",b),h.getUniforms().setValue(r,"morphTargetInfluences",m)}h.getUniforms().setValue(r,"morphTargetsTexture",_.texture,n),h.getUniforms().setValue(r,"morphTargetsTextureSize",_.size)}return{update:c}}function sA(r,t,n,a){let o=new WeakMap;function c(h){const m=a.render.frame,g=h.geometry,v=t.get(h,g);if(o.get(v)!==m&&(t.update(v),o.set(v,m)),h.isInstancedMesh&&(h.hasEventListener("dispose",d)===!1&&h.addEventListener("dispose",d),o.get(h)!==m&&(n.update(h.instanceMatrix,r.ARRAY_BUFFER),h.instanceColor!==null&&n.update(h.instanceColor,r.ARRAY_BUFFER),o.set(h,m))),h.isSkinnedMesh){const _=h.skeleton;o.get(_)!==m&&(_.update(),o.set(_,m))}return v}function u(){o=new WeakMap}function d(h){const m=h.target;m.removeEventListener("dispose",d),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:c,dispose:u}}class Ix extends Hn{constructor(t,n,a,o,c,u,d,h,m,g=Gr){if(g!==Gr&&g!==Zr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");a===void 0&&g===Gr&&(a=Is),a===void 0&&g===Zr&&(a=Yr),super(null,o,c,u,d,h,g,a,m),this.isDepthTexture=!0,this.image={width:t,height:n},this.magFilter=d!==void 0?d:Si,this.minFilter=h!==void 0?h:Si,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Fx=new Hn,S_=new Ix(1,1),Hx=new Dx,Vx=new WE,Gx=new Px,M_=[],E_=[],b_=new Float32Array(16),T_=new Float32Array(9),A_=new Float32Array(4);function ao(r,t,n){const a=r[0];if(a<=0||a>0)return r;const o=t*n;let c=M_[o];if(c===void 0&&(c=new Float32Array(o),M_[o]=c),t!==0){a.toArray(c,0);for(let u=1,d=0;u!==t;++u)d+=n,r[u].toArray(c,d)}return c}function mn(r,t){if(r.length!==t.length)return!1;for(let n=0,a=r.length;n<a;n++)if(r[n]!==t[n])return!1;return!0}function gn(r,t){for(let n=0,a=t.length;n<a;n++)r[n]=t[n]}function Lu(r,t){let n=E_[t];n===void 0&&(n=new Int32Array(t),E_[t]=n);for(let a=0;a!==t;++a)n[a]=r.allocateTextureUnit();return n}function rA(r,t){const n=this.cache;n[0]!==t&&(r.uniform1f(this.addr,t),n[0]=t)}function oA(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(mn(n,t))return;r.uniform2fv(this.addr,t),gn(n,t)}}function lA(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(mn(n,t))return;r.uniform3fv(this.addr,t),gn(n,t)}}function cA(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(mn(n,t))return;r.uniform4fv(this.addr,t),gn(n,t)}}function uA(r,t){const n=this.cache,a=t.elements;if(a===void 0){if(mn(n,t))return;r.uniformMatrix2fv(this.addr,!1,t),gn(n,t)}else{if(mn(n,a))return;A_.set(a),r.uniformMatrix2fv(this.addr,!1,A_),gn(n,a)}}function fA(r,t){const n=this.cache,a=t.elements;if(a===void 0){if(mn(n,t))return;r.uniformMatrix3fv(this.addr,!1,t),gn(n,t)}else{if(mn(n,a))return;T_.set(a),r.uniformMatrix3fv(this.addr,!1,T_),gn(n,a)}}function dA(r,t){const n=this.cache,a=t.elements;if(a===void 0){if(mn(n,t))return;r.uniformMatrix4fv(this.addr,!1,t),gn(n,t)}else{if(mn(n,a))return;b_.set(a),r.uniformMatrix4fv(this.addr,!1,b_),gn(n,a)}}function hA(r,t){const n=this.cache;n[0]!==t&&(r.uniform1i(this.addr,t),n[0]=t)}function pA(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(mn(n,t))return;r.uniform2iv(this.addr,t),gn(n,t)}}function mA(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(mn(n,t))return;r.uniform3iv(this.addr,t),gn(n,t)}}function gA(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(mn(n,t))return;r.uniform4iv(this.addr,t),gn(n,t)}}function vA(r,t){const n=this.cache;n[0]!==t&&(r.uniform1ui(this.addr,t),n[0]=t)}function _A(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(mn(n,t))return;r.uniform2uiv(this.addr,t),gn(n,t)}}function xA(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(mn(n,t))return;r.uniform3uiv(this.addr,t),gn(n,t)}}function yA(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(mn(n,t))return;r.uniform4uiv(this.addr,t),gn(n,t)}}function SA(r,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o);let c;this.type===r.SAMPLER_2D_SHADOW?(S_.compareFunction=wx,c=S_):c=Fx,n.setTexture2D(t||c,o)}function MA(r,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTexture3D(t||Vx,o)}function EA(r,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTextureCube(t||Gx,o)}function bA(r,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTexture2DArray(t||Hx,o)}function TA(r){switch(r){case 5126:return rA;case 35664:return oA;case 35665:return lA;case 35666:return cA;case 35674:return uA;case 35675:return fA;case 35676:return dA;case 5124:case 35670:return hA;case 35667:case 35671:return pA;case 35668:case 35672:return mA;case 35669:case 35673:return gA;case 5125:return vA;case 36294:return _A;case 36295:return xA;case 36296:return yA;case 35678:case 36198:case 36298:case 36306:case 35682:return SA;case 35679:case 36299:case 36307:return MA;case 35680:case 36300:case 36308:case 36293:return EA;case 36289:case 36303:case 36311:case 36292:return bA}}function AA(r,t){r.uniform1fv(this.addr,t)}function wA(r,t){const n=ao(t,this.size,2);r.uniform2fv(this.addr,n)}function CA(r,t){const n=ao(t,this.size,3);r.uniform3fv(this.addr,n)}function RA(r,t){const n=ao(t,this.size,4);r.uniform4fv(this.addr,n)}function DA(r,t){const n=ao(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,n)}function UA(r,t){const n=ao(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,n)}function LA(r,t){const n=ao(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,n)}function NA(r,t){r.uniform1iv(this.addr,t)}function OA(r,t){r.uniform2iv(this.addr,t)}function zA(r,t){r.uniform3iv(this.addr,t)}function PA(r,t){r.uniform4iv(this.addr,t)}function BA(r,t){r.uniform1uiv(this.addr,t)}function IA(r,t){r.uniform2uiv(this.addr,t)}function FA(r,t){r.uniform3uiv(this.addr,t)}function HA(r,t){r.uniform4uiv(this.addr,t)}function VA(r,t,n){const a=this.cache,o=t.length,c=Lu(n,o);mn(a,c)||(r.uniform1iv(this.addr,c),gn(a,c));for(let u=0;u!==o;++u)n.setTexture2D(t[u]||Fx,c[u])}function GA(r,t,n){const a=this.cache,o=t.length,c=Lu(n,o);mn(a,c)||(r.uniform1iv(this.addr,c),gn(a,c));for(let u=0;u!==o;++u)n.setTexture3D(t[u]||Vx,c[u])}function kA(r,t,n){const a=this.cache,o=t.length,c=Lu(n,o);mn(a,c)||(r.uniform1iv(this.addr,c),gn(a,c));for(let u=0;u!==o;++u)n.setTextureCube(t[u]||Gx,c[u])}function XA(r,t,n){const a=this.cache,o=t.length,c=Lu(n,o);mn(a,c)||(r.uniform1iv(this.addr,c),gn(a,c));for(let u=0;u!==o;++u)n.setTexture2DArray(t[u]||Hx,c[u])}function jA(r){switch(r){case 5126:return AA;case 35664:return wA;case 35665:return CA;case 35666:return RA;case 35674:return DA;case 35675:return UA;case 35676:return LA;case 5124:case 35670:return NA;case 35667:case 35671:return OA;case 35668:case 35672:return zA;case 35669:case 35673:return PA;case 5125:return BA;case 36294:return IA;case 36295:return FA;case 36296:return HA;case 35678:case 36198:case 36298:case 36306:case 35682:return VA;case 35679:case 36299:case 36307:return GA;case 35680:case 36300:case 36308:case 36293:return kA;case 36289:case 36303:case 36311:case 36292:return XA}}class WA{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.setValue=TA(n.type)}}class qA{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=jA(n.type)}}class YA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,a){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const d=o[c];d.setValue(t,n[d.id],a)}}}const Sh=/(\w+)(\])?(\[|\.)?/g;function w_(r,t){r.seq.push(t),r.map[t.id]=t}function ZA(r,t,n){const a=r.name,o=a.length;for(Sh.lastIndex=0;;){const c=Sh.exec(a),u=Sh.lastIndex;let d=c[1];const h=c[2]==="]",m=c[3];if(h&&(d=d|0),m===void 0||m==="["&&u+2===o){w_(n,m===void 0?new WA(d,r,t):new qA(d,r,t));break}else{let v=n.map[d];v===void 0&&(v=new YA(d),w_(n,v)),n=v}}}class Su{constructor(t,n){this.seq=[],this.map={};const a=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let o=0;o<a;++o){const c=t.getActiveUniform(n,o),u=t.getUniformLocation(n,c.name);ZA(c,u,this)}}setValue(t,n,a,o){const c=this.map[n];c!==void 0&&c.setValue(t,a,o)}setOptional(t,n,a){const o=n[a];o!==void 0&&this.setValue(t,a,o)}static upload(t,n,a,o){for(let c=0,u=n.length;c!==u;++c){const d=n[c],h=a[d.id];h.needsUpdate!==!1&&d.setValue(t,h.value,o)}}static seqWithValue(t,n){const a=[];for(let o=0,c=t.length;o!==c;++o){const u=t[o];u.id in n&&a.push(u)}return a}}function C_(r,t,n){const a=r.createShader(t);return r.shaderSource(a,n),r.compileShader(a),a}const KA=37297;let QA=0;function JA(r,t){const n=r.split(`
`),a=[],o=Math.max(t-6,0),c=Math.min(t+6,n.length);for(let u=o;u<c;u++){const d=u+1;a.push(`${d===t?">":" "} ${d}: ${n[u]}`)}return a.join(`
`)}const R_=new pe;function $A(r){Ce._getMatrix(R_,Ce.workingColorSpace,r);const t=`mat3( ${R_.elements.map(n=>n.toFixed(4))} )`;switch(Ce.getTransfer(r)){case Du:return[t,"LinearTransferOETF"];case ke:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function D_(r,t,n){const a=r.getShaderParameter(t,r.COMPILE_STATUS),o=r.getShaderInfoLog(t).trim();if(a&&o==="")return"";const c=/ERROR: 0:(\d+)/.exec(o);if(c){const u=parseInt(c[1]);return n.toUpperCase()+`

`+o+`

`+JA(r.getShaderSource(t),u)}else return o}function tw(r,t){const n=$A(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function ew(r,t){let n;switch(t){case nE:n="Linear";break;case iE:n="Reinhard";break;case aE:n="Cineon";break;case sE:n="ACESFilmic";break;case oE:n="AgX";break;case lE:n="Neutral";break;case rE:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+r+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const $c=new P;function nw(){Ce.getLuminanceCoefficients($c);const r=$c.x.toFixed(4),t=$c.y.toFixed(4),n=$c.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function iw(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ul).join(`
`)}function aw(r){const t=[];for(const n in r){const a=r[n];a!==!1&&t.push("#define "+n+" "+a)}return t.join(`
`)}function sw(r,t){const n={},a=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let o=0;o<a;o++){const c=r.getActiveAttrib(t,o),u=c.name;let d=1;c.type===r.FLOAT_MAT2&&(d=2),c.type===r.FLOAT_MAT3&&(d=3),c.type===r.FLOAT_MAT4&&(d=4),n[u]={type:c.type,location:r.getAttribLocation(t,u),locationSize:d}}return n}function ul(r){return r!==""}function U_(r,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function L_(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const rw=/^[ \t]*#include +<([\w\d./]+)>/gm;function yp(r){return r.replace(rw,lw)}const ow=new Map;function lw(r,t){let n=ge[t];if(n===void 0){const a=ow.get(t);if(a!==void 0)n=ge[a],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,a);else throw new Error("Can not resolve #include <"+t+">")}return yp(n)}const cw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function N_(r){return r.replace(cw,uw)}function uw(r,t,n,a){let o="";for(let c=parseInt(t);c<parseInt(n);c++)o+=a.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function O_(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function fw(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===px?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===zM?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ga&&(t="SHADOWMAP_TYPE_VSM"),t}function dw(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Wr:case qr:t="ENVMAP_TYPE_CUBE";break;case Ru:t="ENVMAP_TYPE_CUBE_UV";break}return t}function hw(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case qr:t="ENVMAP_MODE_REFRACTION";break}return t}function pw(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case mx:t="ENVMAP_BLENDING_MULTIPLY";break;case tE:t="ENVMAP_BLENDING_MIX";break;case eE:t="ENVMAP_BLENDING_ADD";break}return t}function mw(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,a=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function gw(r,t,n,a){const o=r.getContext(),c=n.defines;let u=n.vertexShader,d=n.fragmentShader;const h=fw(n),m=dw(n),g=hw(n),v=pw(n),_=mw(n),S=iw(n),E=aw(c),b=o.createProgram();let M,x,N=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(M=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(ul).join(`
`),M.length>0&&(M+=`
`),x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(ul).join(`
`),x.length>0&&(x+=`
`)):(M=[O_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ul).join(`
`),x=[O_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+g:"",n.envMap?"#define "+v:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==as?"#define TONE_MAPPING":"",n.toneMapping!==as?ge.tonemapping_pars_fragment:"",n.toneMapping!==as?ew("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ge.colorspace_pars_fragment,tw("linearToOutputTexel",n.outputColorSpace),nw(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ul).join(`
`)),u=yp(u),u=U_(u,n),u=L_(u,n),d=yp(d),d=U_(d,n),d=L_(d,n),u=N_(u),d=N_(d),n.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,M=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,x=["#define varying in",n.glslVersion===Wv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Wv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const U=N+M+u,T=N+x+d,W=C_(o,o.VERTEX_SHADER,U),B=C_(o,o.FRAGMENT_SHADER,T);o.attachShader(b,W),o.attachShader(b,B),n.index0AttributeName!==void 0?o.bindAttribLocation(b,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(b,0,"position"),o.linkProgram(b);function O(G){if(r.debug.checkShaderErrors){const at=o.getProgramInfoLog(b).trim(),tt=o.getShaderInfoLog(W).trim(),ct=o.getShaderInfoLog(B).trim();let mt=!0,I=!0;if(o.getProgramParameter(b,o.LINK_STATUS)===!1)if(mt=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(o,b,W,B);else{const H=D_(o,W,"vertex"),V=D_(o,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(b,o.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+at+`
`+H+`
`+V)}else at!==""?console.warn("THREE.WebGLProgram: Program Info Log:",at):(tt===""||ct==="")&&(I=!1);I&&(G.diagnostics={runnable:mt,programLog:at,vertexShader:{log:tt,prefix:M},fragmentShader:{log:ct,prefix:x}})}o.deleteShader(W),o.deleteShader(B),k=new Su(o,b),D=sw(o,b)}let k;this.getUniforms=function(){return k===void 0&&O(this),k};let D;this.getAttributes=function(){return D===void 0&&O(this),D};let C=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=o.getProgramParameter(b,KA)),C},this.destroy=function(){a.releaseStatesOfProgram(this),o.deleteProgram(b),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=QA++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=W,this.fragmentShader=B,this}let vw=0;class _w{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,a=t.fragmentShader,o=this._getShaderStage(n),c=this._getShaderStage(a),u=this._getShaderCacheForMaterial(t);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(c)===!1&&(u.add(c),c.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let a=n.get(t);return a===void 0&&(a=new Set,n.set(t,a)),a}_getShaderStage(t){const n=this.shaderCache;let a=n.get(t);return a===void 0&&(a=new xw(t),n.set(t,a)),a}}class xw{constructor(t){this.id=vw++,this.code=t,this.usedTimes=0}}function yw(r,t,n,a,o,c,u){const d=new Bp,h=new _w,m=new Set,g=[],v=o.logarithmicDepthBuffer,_=o.vertexTextures;let S=o.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(D){return m.add(D),D===0?"uv":`uv${D}`}function M(D,C,G,at,tt){const ct=at.fog,mt=tt.geometry,I=D.isMeshStandardMaterial?at.environment:null,H=(D.isMeshStandardMaterial?n:t).get(D.envMap||I),V=H&&H.mapping===Ru?H.image.height:null,_t=E[D.type];D.precision!==null&&(S=o.getMaxPrecision(D.precision),S!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",S,"instead."));const bt=mt.morphAttributes.position||mt.morphAttributes.normal||mt.morphAttributes.color,z=bt!==void 0?bt.length:0;let it=0;mt.morphAttributes.position!==void 0&&(it=1),mt.morphAttributes.normal!==void 0&&(it=2),mt.morphAttributes.color!==void 0&&(it=3);let Mt,J,ht,Q;if(_t){const we=Yn[_t];Mt=we.vertexShader,J=we.fragmentShader}else Mt=D.vertexShader,J=D.fragmentShader,h.update(D),ht=h.getVertexShaderID(D),Q=h.getFragmentShaderID(D);const ut=r.getRenderTarget(),St=r.state.buffers.depth.getReversed(),Tt=tt.isInstancedMesh===!0,Dt=tt.isBatchedMesh===!0,$t=!!D.map,Qt=!!D.matcap,me=!!H,q=!!D.aoMap,Ne=!!D.lightMap,oe=!!D.bumpMap,ue=!!D.normalMap,qt=!!D.displacementMap,Ee=!!D.emissiveMap,Yt=!!D.metalnessMap,L=!!D.roughnessMap,w=D.anisotropy>0,rt=D.clearcoat>0,gt=D.dispersion>0,At=D.iridescence>0,xt=D.sheen>0,jt=D.transmission>0,zt=w&&!!D.anisotropyMap,It=rt&&!!D.clearcoatMap,ye=rt&&!!D.clearcoatNormalMap,Ct=rt&&!!D.clearcoatRoughnessMap,Ft=At&&!!D.iridescenceMap,Jt=At&&!!D.iridescenceThicknessMap,Wt=xt&&!!D.sheenColorMap,Bt=xt&&!!D.sheenRoughnessMap,ie=!!D.specularMap,fe=!!D.specularColorMap,Ie=!!D.specularIntensityMap,Y=jt&&!!D.transmissionMap,Ut=jt&&!!D.thicknessMap,dt=!!D.gradientMap,Et=!!D.alphaMap,Lt=D.alphaTest>0,Pt=!!D.alphaHash,ae=!!D.extensions;let Ze=as;D.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(Ze=r.toneMapping);const fn={shaderID:_t,shaderType:D.type,shaderName:D.name,vertexShader:Mt,fragmentShader:J,defines:D.defines,customVertexShaderID:ht,customFragmentShaderID:Q,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:S,batching:Dt,batchingColor:Dt&&tt._colorsTexture!==null,instancing:Tt,instancingColor:Tt&&tt.instanceColor!==null,instancingMorph:Tt&&tt.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:ut===null?r.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:$r,alphaToCoverage:!!D.alphaToCoverage,map:$t,matcap:Qt,envMap:me,envMapMode:me&&H.mapping,envMapCubeUVHeight:V,aoMap:q,lightMap:Ne,bumpMap:oe,normalMap:ue,displacementMap:_&&qt,emissiveMap:Ee,normalMapObjectSpace:ue&&D.normalMapType===hE,normalMapTangentSpace:ue&&D.normalMapType===dE,metalnessMap:Yt,roughnessMap:L,anisotropy:w,anisotropyMap:zt,clearcoat:rt,clearcoatMap:It,clearcoatNormalMap:ye,clearcoatRoughnessMap:Ct,dispersion:gt,iridescence:At,iridescenceMap:Ft,iridescenceThicknessMap:Jt,sheen:xt,sheenColorMap:Wt,sheenRoughnessMap:Bt,specularMap:ie,specularColorMap:fe,specularIntensityMap:Ie,transmission:jt,transmissionMap:Y,thicknessMap:Ut,gradientMap:dt,opaque:D.transparent===!1&&D.blending===Vr&&D.alphaToCoverage===!1,alphaMap:Et,alphaTest:Lt,alphaHash:Pt,combine:D.combine,mapUv:$t&&b(D.map.channel),aoMapUv:q&&b(D.aoMap.channel),lightMapUv:Ne&&b(D.lightMap.channel),bumpMapUv:oe&&b(D.bumpMap.channel),normalMapUv:ue&&b(D.normalMap.channel),displacementMapUv:qt&&b(D.displacementMap.channel),emissiveMapUv:Ee&&b(D.emissiveMap.channel),metalnessMapUv:Yt&&b(D.metalnessMap.channel),roughnessMapUv:L&&b(D.roughnessMap.channel),anisotropyMapUv:zt&&b(D.anisotropyMap.channel),clearcoatMapUv:It&&b(D.clearcoatMap.channel),clearcoatNormalMapUv:ye&&b(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ct&&b(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Ft&&b(D.iridescenceMap.channel),iridescenceThicknessMapUv:Jt&&b(D.iridescenceThicknessMap.channel),sheenColorMapUv:Wt&&b(D.sheenColorMap.channel),sheenRoughnessMapUv:Bt&&b(D.sheenRoughnessMap.channel),specularMapUv:ie&&b(D.specularMap.channel),specularColorMapUv:fe&&b(D.specularColorMap.channel),specularIntensityMapUv:Ie&&b(D.specularIntensityMap.channel),transmissionMapUv:Y&&b(D.transmissionMap.channel),thicknessMapUv:Ut&&b(D.thicknessMap.channel),alphaMapUv:Et&&b(D.alphaMap.channel),vertexTangents:!!mt.attributes.tangent&&(ue||w),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!mt.attributes.color&&mt.attributes.color.itemSize===4,pointsUvs:tt.isPoints===!0&&!!mt.attributes.uv&&($t||Et),fog:!!ct,useFog:D.fog===!0,fogExp2:!!ct&&ct.isFogExp2,flatShading:D.flatShading===!0,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:St,skinning:tt.isSkinnedMesh===!0,morphTargets:mt.morphAttributes.position!==void 0,morphNormals:mt.morphAttributes.normal!==void 0,morphColors:mt.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:it,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:D.dithering,shadowMapEnabled:r.shadowMap.enabled&&G.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ze,decodeVideoTexture:$t&&D.map.isVideoTexture===!0&&Ce.getTransfer(D.map.colorSpace)===ke,decodeVideoTextureEmissive:Ee&&D.emissiveMap.isVideoTexture===!0&&Ce.getTransfer(D.emissiveMap.colorSpace)===ke,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===Vi,flipSided:D.side===Zn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:ae&&D.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&D.extensions.multiDraw===!0||Dt)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return fn.vertexUv1s=m.has(1),fn.vertexUv2s=m.has(2),fn.vertexUv3s=m.has(3),m.clear(),fn}function x(D){const C=[];if(D.shaderID?C.push(D.shaderID):(C.push(D.customVertexShaderID),C.push(D.customFragmentShaderID)),D.defines!==void 0)for(const G in D.defines)C.push(G),C.push(D.defines[G]);return D.isRawShaderMaterial===!1&&(N(C,D),U(C,D),C.push(r.outputColorSpace)),C.push(D.customProgramCacheKey),C.join()}function N(D,C){D.push(C.precision),D.push(C.outputColorSpace),D.push(C.envMapMode),D.push(C.envMapCubeUVHeight),D.push(C.mapUv),D.push(C.alphaMapUv),D.push(C.lightMapUv),D.push(C.aoMapUv),D.push(C.bumpMapUv),D.push(C.normalMapUv),D.push(C.displacementMapUv),D.push(C.emissiveMapUv),D.push(C.metalnessMapUv),D.push(C.roughnessMapUv),D.push(C.anisotropyMapUv),D.push(C.clearcoatMapUv),D.push(C.clearcoatNormalMapUv),D.push(C.clearcoatRoughnessMapUv),D.push(C.iridescenceMapUv),D.push(C.iridescenceThicknessMapUv),D.push(C.sheenColorMapUv),D.push(C.sheenRoughnessMapUv),D.push(C.specularMapUv),D.push(C.specularColorMapUv),D.push(C.specularIntensityMapUv),D.push(C.transmissionMapUv),D.push(C.thicknessMapUv),D.push(C.combine),D.push(C.fogExp2),D.push(C.sizeAttenuation),D.push(C.morphTargetsCount),D.push(C.morphAttributeCount),D.push(C.numDirLights),D.push(C.numPointLights),D.push(C.numSpotLights),D.push(C.numSpotLightMaps),D.push(C.numHemiLights),D.push(C.numRectAreaLights),D.push(C.numDirLightShadows),D.push(C.numPointLightShadows),D.push(C.numSpotLightShadows),D.push(C.numSpotLightShadowsWithMaps),D.push(C.numLightProbes),D.push(C.shadowMapType),D.push(C.toneMapping),D.push(C.numClippingPlanes),D.push(C.numClipIntersection),D.push(C.depthPacking)}function U(D,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),D.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reverseDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),D.push(d.mask)}function T(D){const C=E[D.type];let G;if(C){const at=Yn[C];G=Ip.clone(at.uniforms)}else G=D.uniforms;return G}function W(D,C){let G;for(let at=0,tt=g.length;at<tt;at++){const ct=g[at];if(ct.cacheKey===C){G=ct,++G.usedTimes;break}}return G===void 0&&(G=new gw(r,C,D,c),g.push(G)),G}function B(D){if(--D.usedTimes===0){const C=g.indexOf(D);g[C]=g[g.length-1],g.pop(),D.destroy()}}function O(D){h.remove(D)}function k(){h.dispose()}return{getParameters:M,getProgramCacheKey:x,getUniforms:T,acquireProgram:W,releaseProgram:B,releaseShaderCache:O,programs:g,dispose:k}}function Sw(){let r=new WeakMap;function t(u){return r.has(u)}function n(u){let d=r.get(u);return d===void 0&&(d={},r.set(u,d)),d}function a(u){r.delete(u)}function o(u,d,h){r.get(u)[d]=h}function c(){r=new WeakMap}return{has:t,get:n,remove:a,update:o,dispose:c}}function Mw(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function z_(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function P_(){const r=[];let t=0;const n=[],a=[],o=[];function c(){t=0,n.length=0,a.length=0,o.length=0}function u(v,_,S,E,b,M){let x=r[t];return x===void 0?(x={id:v.id,object:v,geometry:_,material:S,groupOrder:E,renderOrder:v.renderOrder,z:b,group:M},r[t]=x):(x.id=v.id,x.object=v,x.geometry=_,x.material=S,x.groupOrder=E,x.renderOrder=v.renderOrder,x.z=b,x.group=M),t++,x}function d(v,_,S,E,b,M){const x=u(v,_,S,E,b,M);S.transmission>0?a.push(x):S.transparent===!0?o.push(x):n.push(x)}function h(v,_,S,E,b,M){const x=u(v,_,S,E,b,M);S.transmission>0?a.unshift(x):S.transparent===!0?o.unshift(x):n.unshift(x)}function m(v,_){n.length>1&&n.sort(v||Mw),a.length>1&&a.sort(_||z_),o.length>1&&o.sort(_||z_)}function g(){for(let v=t,_=r.length;v<_;v++){const S=r[v];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:a,transparent:o,init:c,push:d,unshift:h,finish:g,sort:m}}function Ew(){let r=new WeakMap;function t(a,o){const c=r.get(a);let u;return c===void 0?(u=new P_,r.set(a,[u])):o>=c.length?(u=new P_,c.push(u)):u=c[o],u}function n(){r=new WeakMap}return{get:t,dispose:n}}function bw(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new P,color:new ve};break;case"SpotLight":n={position:new P,direction:new P,color:new ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new P,color:new ve,distance:0,decay:0};break;case"HemisphereLight":n={direction:new P,skyColor:new ve,groundColor:new ve};break;case"RectAreaLight":n={color:new ve,position:new P,halfWidth:new P,halfHeight:new P};break}return r[t.id]=n,n}}}function Tw(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=n,n}}}let Aw=0;function ww(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function Cw(r){const t=new bw,n=Tw(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)a.probe.push(new P);const o=new P,c=new We,u=new We;function d(m){let g=0,v=0,_=0;for(let D=0;D<9;D++)a.probe[D].set(0,0,0);let S=0,E=0,b=0,M=0,x=0,N=0,U=0,T=0,W=0,B=0,O=0;m.sort(ww);for(let D=0,C=m.length;D<C;D++){const G=m[D],at=G.color,tt=G.intensity,ct=G.distance,mt=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)g+=at.r*tt,v+=at.g*tt,_+=at.b*tt;else if(G.isLightProbe){for(let I=0;I<9;I++)a.probe[I].addScaledVector(G.sh.coefficients[I],tt);O++}else if(G.isDirectionalLight){const I=t.get(G);if(I.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const H=G.shadow,V=n.get(G);V.shadowIntensity=H.intensity,V.shadowBias=H.bias,V.shadowNormalBias=H.normalBias,V.shadowRadius=H.radius,V.shadowMapSize=H.mapSize,a.directionalShadow[S]=V,a.directionalShadowMap[S]=mt,a.directionalShadowMatrix[S]=G.shadow.matrix,N++}a.directional[S]=I,S++}else if(G.isSpotLight){const I=t.get(G);I.position.setFromMatrixPosition(G.matrixWorld),I.color.copy(at).multiplyScalar(tt),I.distance=ct,I.coneCos=Math.cos(G.angle),I.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),I.decay=G.decay,a.spot[b]=I;const H=G.shadow;if(G.map&&(a.spotLightMap[W]=G.map,W++,H.updateMatrices(G),G.castShadow&&B++),a.spotLightMatrix[b]=H.matrix,G.castShadow){const V=n.get(G);V.shadowIntensity=H.intensity,V.shadowBias=H.bias,V.shadowNormalBias=H.normalBias,V.shadowRadius=H.radius,V.shadowMapSize=H.mapSize,a.spotShadow[b]=V,a.spotShadowMap[b]=mt,T++}b++}else if(G.isRectAreaLight){const I=t.get(G);I.color.copy(at).multiplyScalar(tt),I.halfWidth.set(G.width*.5,0,0),I.halfHeight.set(0,G.height*.5,0),a.rectArea[M]=I,M++}else if(G.isPointLight){const I=t.get(G);if(I.color.copy(G.color).multiplyScalar(G.intensity),I.distance=G.distance,I.decay=G.decay,G.castShadow){const H=G.shadow,V=n.get(G);V.shadowIntensity=H.intensity,V.shadowBias=H.bias,V.shadowNormalBias=H.normalBias,V.shadowRadius=H.radius,V.shadowMapSize=H.mapSize,V.shadowCameraNear=H.camera.near,V.shadowCameraFar=H.camera.far,a.pointShadow[E]=V,a.pointShadowMap[E]=mt,a.pointShadowMatrix[E]=G.shadow.matrix,U++}a.point[E]=I,E++}else if(G.isHemisphereLight){const I=t.get(G);I.skyColor.copy(G.color).multiplyScalar(tt),I.groundColor.copy(G.groundColor).multiplyScalar(tt),a.hemi[x]=I,x++}}M>0&&(r.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Rt.LTC_FLOAT_1,a.rectAreaLTC2=Rt.LTC_FLOAT_2):(a.rectAreaLTC1=Rt.LTC_HALF_1,a.rectAreaLTC2=Rt.LTC_HALF_2)),a.ambient[0]=g,a.ambient[1]=v,a.ambient[2]=_;const k=a.hash;(k.directionalLength!==S||k.pointLength!==E||k.spotLength!==b||k.rectAreaLength!==M||k.hemiLength!==x||k.numDirectionalShadows!==N||k.numPointShadows!==U||k.numSpotShadows!==T||k.numSpotMaps!==W||k.numLightProbes!==O)&&(a.directional.length=S,a.spot.length=b,a.rectArea.length=M,a.point.length=E,a.hemi.length=x,a.directionalShadow.length=N,a.directionalShadowMap.length=N,a.pointShadow.length=U,a.pointShadowMap.length=U,a.spotShadow.length=T,a.spotShadowMap.length=T,a.directionalShadowMatrix.length=N,a.pointShadowMatrix.length=U,a.spotLightMatrix.length=T+W-B,a.spotLightMap.length=W,a.numSpotLightShadowsWithMaps=B,a.numLightProbes=O,k.directionalLength=S,k.pointLength=E,k.spotLength=b,k.rectAreaLength=M,k.hemiLength=x,k.numDirectionalShadows=N,k.numPointShadows=U,k.numSpotShadows=T,k.numSpotMaps=W,k.numLightProbes=O,a.version=Aw++)}function h(m,g){let v=0,_=0,S=0,E=0,b=0;const M=g.matrixWorldInverse;for(let x=0,N=m.length;x<N;x++){const U=m[x];if(U.isDirectionalLight){const T=a.directional[v];T.direction.setFromMatrixPosition(U.matrixWorld),o.setFromMatrixPosition(U.target.matrixWorld),T.direction.sub(o),T.direction.transformDirection(M),v++}else if(U.isSpotLight){const T=a.spot[S];T.position.setFromMatrixPosition(U.matrixWorld),T.position.applyMatrix4(M),T.direction.setFromMatrixPosition(U.matrixWorld),o.setFromMatrixPosition(U.target.matrixWorld),T.direction.sub(o),T.direction.transformDirection(M),S++}else if(U.isRectAreaLight){const T=a.rectArea[E];T.position.setFromMatrixPosition(U.matrixWorld),T.position.applyMatrix4(M),u.identity(),c.copy(U.matrixWorld),c.premultiply(M),u.extractRotation(c),T.halfWidth.set(U.width*.5,0,0),T.halfHeight.set(0,U.height*.5,0),T.halfWidth.applyMatrix4(u),T.halfHeight.applyMatrix4(u),E++}else if(U.isPointLight){const T=a.point[_];T.position.setFromMatrixPosition(U.matrixWorld),T.position.applyMatrix4(M),_++}else if(U.isHemisphereLight){const T=a.hemi[b];T.direction.setFromMatrixPosition(U.matrixWorld),T.direction.transformDirection(M),b++}}}return{setup:d,setupView:h,state:a}}function B_(r){const t=new Cw(r),n=[],a=[];function o(g){m.camera=g,n.length=0,a.length=0}function c(g){n.push(g)}function u(g){a.push(g)}function d(){t.setup(n)}function h(g){t.setupView(n,g)}const m={lightsArray:n,shadowsArray:a,camera:null,lights:t,transmissionRenderTarget:{}};return{init:o,state:m,setupLights:d,setupLightsView:h,pushLight:c,pushShadow:u}}function Rw(r){let t=new WeakMap;function n(o,c=0){const u=t.get(o);let d;return u===void 0?(d=new B_(r),t.set(o,[d])):c>=u.length?(d=new B_(r),u.push(d)):d=u[c],d}function a(){t=new WeakMap}return{get:n,dispose:a}}class Dw extends no{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=uE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Uw extends no{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Lw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Nw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ow(r,t,n){let a=new Fp;const o=new re,c=new re,u=new je,d=new Dw({depthPacking:fE}),h=new Uw,m={},g=n.maxTextureSize,v={[ss]:Zn,[Zn]:ss,[Vi]:Vi},_=new ba({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:Lw,fragmentShader:Nw}),S=_.clone();S.defines.HORIZONTAL_PASS=1;const E=new yn;E.setAttribute("position",new oi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new ri(E,_),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=px;let x=this.type;this.render=function(B,O,k){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||B.length===0)return;const D=r.getRenderTarget(),C=r.getActiveCubeFace(),G=r.getActiveMipmapLevel(),at=r.state;at.setBlending(is),at.buffers.color.setClear(1,1,1,1),at.buffers.depth.setTest(!0),at.setScissorTest(!1);const tt=x!==ga&&this.type===ga,ct=x===ga&&this.type!==ga;for(let mt=0,I=B.length;mt<I;mt++){const H=B[mt],V=H.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",H,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;o.copy(V.mapSize);const _t=V.getFrameExtents();if(o.multiply(_t),c.copy(V.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(c.x=Math.floor(g/_t.x),o.x=c.x*_t.x,V.mapSize.x=c.x),o.y>g&&(c.y=Math.floor(g/_t.y),o.y=c.y*_t.y,V.mapSize.y=c.y)),V.map===null||tt===!0||ct===!0){const z=this.type!==ga?{minFilter:Si,magFilter:Si}:{};V.map!==null&&V.map.dispose(),V.map=new Fs(o.x,o.y,z),V.map.texture.name=H.name+".shadowMap",V.camera.updateProjectionMatrix()}r.setRenderTarget(V.map),r.clear();const bt=V.getViewportCount();for(let z=0;z<bt;z++){const it=V.getViewport(z);u.set(c.x*it.x,c.y*it.y,c.x*it.z,c.y*it.w),at.viewport(u),V.updateMatrices(H,z),a=V.getFrustum(),T(O,k,V.camera,H,this.type)}V.isPointLightShadow!==!0&&this.type===ga&&N(V,k),V.needsUpdate=!1}x=this.type,M.needsUpdate=!1,r.setRenderTarget(D,C,G)};function N(B,O){const k=t.update(b);_.defines.VSM_SAMPLES!==B.blurSamples&&(_.defines.VSM_SAMPLES=B.blurSamples,S.defines.VSM_SAMPLES=B.blurSamples,_.needsUpdate=!0,S.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new Fs(o.x,o.y)),_.uniforms.shadow_pass.value=B.map.texture,_.uniforms.resolution.value=B.mapSize,_.uniforms.radius.value=B.radius,r.setRenderTarget(B.mapPass),r.clear(),r.renderBufferDirect(O,null,k,_,b,null),S.uniforms.shadow_pass.value=B.mapPass.texture,S.uniforms.resolution.value=B.mapSize,S.uniforms.radius.value=B.radius,r.setRenderTarget(B.map),r.clear(),r.renderBufferDirect(O,null,k,S,b,null)}function U(B,O,k,D){let C=null;const G=k.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(G!==void 0)C=G;else if(C=k.isPointLight===!0?h:d,r.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0){const at=C.uuid,tt=O.uuid;let ct=m[at];ct===void 0&&(ct={},m[at]=ct);let mt=ct[tt];mt===void 0&&(mt=C.clone(),ct[tt]=mt,O.addEventListener("dispose",W)),C=mt}if(C.visible=O.visible,C.wireframe=O.wireframe,D===ga?C.side=O.shadowSide!==null?O.shadowSide:O.side:C.side=O.shadowSide!==null?O.shadowSide:v[O.side],C.alphaMap=O.alphaMap,C.alphaTest=O.alphaTest,C.map=O.map,C.clipShadows=O.clipShadows,C.clippingPlanes=O.clippingPlanes,C.clipIntersection=O.clipIntersection,C.displacementMap=O.displacementMap,C.displacementScale=O.displacementScale,C.displacementBias=O.displacementBias,C.wireframeLinewidth=O.wireframeLinewidth,C.linewidth=O.linewidth,k.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const at=r.properties.get(C);at.light=k}return C}function T(B,O,k,D,C){if(B.visible===!1)return;if(B.layers.test(O.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&C===ga)&&(!B.frustumCulled||a.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,B.matrixWorld);const tt=t.update(B),ct=B.material;if(Array.isArray(ct)){const mt=tt.groups;for(let I=0,H=mt.length;I<H;I++){const V=mt[I],_t=ct[V.materialIndex];if(_t&&_t.visible){const bt=U(B,_t,D,C);B.onBeforeShadow(r,B,O,k,tt,bt,V),r.renderBufferDirect(k,null,tt,bt,B,V),B.onAfterShadow(r,B,O,k,tt,bt,V)}}}else if(ct.visible){const mt=U(B,ct,D,C);B.onBeforeShadow(r,B,O,k,tt,mt,null),r.renderBufferDirect(k,null,tt,mt,B,null),B.onAfterShadow(r,B,O,k,tt,mt,null)}}const at=B.children;for(let tt=0,ct=at.length;tt<ct;tt++)T(at[tt],O,k,D,C)}function W(B){B.target.removeEventListener("dispose",W);for(const k in m){const D=m[k],C=B.target.uuid;C in D&&(D[C].dispose(),delete D[C])}}}const zw={[Bh]:Ih,[Fh]:Gh,[Hh]:kh,[jr]:Vh,[Ih]:Bh,[Gh]:Fh,[kh]:Hh,[Vh]:jr};function Pw(r,t){function n(){let Y=!1;const Ut=new je;let dt=null;const Et=new je(0,0,0,0);return{setMask:function(Lt){dt!==Lt&&!Y&&(r.colorMask(Lt,Lt,Lt,Lt),dt=Lt)},setLocked:function(Lt){Y=Lt},setClear:function(Lt,Pt,ae,Ze,fn){fn===!0&&(Lt*=Ze,Pt*=Ze,ae*=Ze),Ut.set(Lt,Pt,ae,Ze),Et.equals(Ut)===!1&&(r.clearColor(Lt,Pt,ae,Ze),Et.copy(Ut))},reset:function(){Y=!1,dt=null,Et.set(-1,0,0,0)}}}function a(){let Y=!1,Ut=!1,dt=null,Et=null,Lt=null;return{setReversed:function(Pt){if(Ut!==Pt){const ae=t.get("EXT_clip_control");Ut?ae.clipControlEXT(ae.LOWER_LEFT_EXT,ae.ZERO_TO_ONE_EXT):ae.clipControlEXT(ae.LOWER_LEFT_EXT,ae.NEGATIVE_ONE_TO_ONE_EXT);const Ze=Lt;Lt=null,this.setClear(Ze)}Ut=Pt},getReversed:function(){return Ut},setTest:function(Pt){Pt?ut(r.DEPTH_TEST):St(r.DEPTH_TEST)},setMask:function(Pt){dt!==Pt&&!Y&&(r.depthMask(Pt),dt=Pt)},setFunc:function(Pt){if(Ut&&(Pt=zw[Pt]),Et!==Pt){switch(Pt){case Bh:r.depthFunc(r.NEVER);break;case Ih:r.depthFunc(r.ALWAYS);break;case Fh:r.depthFunc(r.LESS);break;case jr:r.depthFunc(r.LEQUAL);break;case Hh:r.depthFunc(r.EQUAL);break;case Vh:r.depthFunc(r.GEQUAL);break;case Gh:r.depthFunc(r.GREATER);break;case kh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Et=Pt}},setLocked:function(Pt){Y=Pt},setClear:function(Pt){Lt!==Pt&&(Ut&&(Pt=1-Pt),r.clearDepth(Pt),Lt=Pt)},reset:function(){Y=!1,dt=null,Et=null,Lt=null,Ut=!1}}}function o(){let Y=!1,Ut=null,dt=null,Et=null,Lt=null,Pt=null,ae=null,Ze=null,fn=null;return{setTest:function(we){Y||(we?ut(r.STENCIL_TEST):St(r.STENCIL_TEST))},setMask:function(we){Ut!==we&&!Y&&(r.stencilMask(we),Ut=we)},setFunc:function(we,Sn,Mi){(dt!==we||Et!==Sn||Lt!==Mi)&&(r.stencilFunc(we,Sn,Mi),dt=we,Et=Sn,Lt=Mi)},setOp:function(we,Sn,Mi){(Pt!==we||ae!==Sn||Ze!==Mi)&&(r.stencilOp(we,Sn,Mi),Pt=we,ae=Sn,Ze=Mi)},setLocked:function(we){Y=we},setClear:function(we){fn!==we&&(r.clearStencil(we),fn=we)},reset:function(){Y=!1,Ut=null,dt=null,Et=null,Lt=null,Pt=null,ae=null,Ze=null,fn=null}}}const c=new n,u=new a,d=new o,h=new WeakMap,m=new WeakMap;let g={},v={},_=new WeakMap,S=[],E=null,b=!1,M=null,x=null,N=null,U=null,T=null,W=null,B=null,O=new ve(0,0,0),k=0,D=!1,C=null,G=null,at=null,tt=null,ct=null;const mt=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,H=0;const V=r.getParameter(r.VERSION);V.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(V)[1]),I=H>=1):V.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),I=H>=2);let _t=null,bt={};const z=r.getParameter(r.SCISSOR_BOX),it=r.getParameter(r.VIEWPORT),Mt=new je().fromArray(z),J=new je().fromArray(it);function ht(Y,Ut,dt,Et){const Lt=new Uint8Array(4),Pt=r.createTexture();r.bindTexture(Y,Pt),r.texParameteri(Y,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(Y,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ae=0;ae<dt;ae++)Y===r.TEXTURE_3D||Y===r.TEXTURE_2D_ARRAY?r.texImage3D(Ut,0,r.RGBA,1,1,Et,0,r.RGBA,r.UNSIGNED_BYTE,Lt):r.texImage2D(Ut+ae,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Lt);return Pt}const Q={};Q[r.TEXTURE_2D]=ht(r.TEXTURE_2D,r.TEXTURE_2D,1),Q[r.TEXTURE_CUBE_MAP]=ht(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[r.TEXTURE_2D_ARRAY]=ht(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Q[r.TEXTURE_3D]=ht(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),d.setClear(0),ut(r.DEPTH_TEST),u.setFunc(jr),oe(!1),ue(Vv),ut(r.CULL_FACE),q(is);function ut(Y){g[Y]!==!0&&(r.enable(Y),g[Y]=!0)}function St(Y){g[Y]!==!1&&(r.disable(Y),g[Y]=!1)}function Tt(Y,Ut){return v[Y]!==Ut?(r.bindFramebuffer(Y,Ut),v[Y]=Ut,Y===r.DRAW_FRAMEBUFFER&&(v[r.FRAMEBUFFER]=Ut),Y===r.FRAMEBUFFER&&(v[r.DRAW_FRAMEBUFFER]=Ut),!0):!1}function Dt(Y,Ut){let dt=S,Et=!1;if(Y){dt=_.get(Ut),dt===void 0&&(dt=[],_.set(Ut,dt));const Lt=Y.textures;if(dt.length!==Lt.length||dt[0]!==r.COLOR_ATTACHMENT0){for(let Pt=0,ae=Lt.length;Pt<ae;Pt++)dt[Pt]=r.COLOR_ATTACHMENT0+Pt;dt.length=Lt.length,Et=!0}}else dt[0]!==r.BACK&&(dt[0]=r.BACK,Et=!0);Et&&r.drawBuffers(dt)}function $t(Y){return E!==Y?(r.useProgram(Y),E=Y,!0):!1}const Qt={[Ns]:r.FUNC_ADD,[BM]:r.FUNC_SUBTRACT,[IM]:r.FUNC_REVERSE_SUBTRACT};Qt[FM]=r.MIN,Qt[HM]=r.MAX;const me={[VM]:r.ZERO,[GM]:r.ONE,[kM]:r.SRC_COLOR,[zh]:r.SRC_ALPHA,[ZM]:r.SRC_ALPHA_SATURATE,[qM]:r.DST_COLOR,[jM]:r.DST_ALPHA,[XM]:r.ONE_MINUS_SRC_COLOR,[Ph]:r.ONE_MINUS_SRC_ALPHA,[YM]:r.ONE_MINUS_DST_COLOR,[WM]:r.ONE_MINUS_DST_ALPHA,[KM]:r.CONSTANT_COLOR,[QM]:r.ONE_MINUS_CONSTANT_COLOR,[JM]:r.CONSTANT_ALPHA,[$M]:r.ONE_MINUS_CONSTANT_ALPHA};function q(Y,Ut,dt,Et,Lt,Pt,ae,Ze,fn,we){if(Y===is){b===!0&&(St(r.BLEND),b=!1);return}if(b===!1&&(ut(r.BLEND),b=!0),Y!==PM){if(Y!==M||we!==D){if((x!==Ns||T!==Ns)&&(r.blendEquation(r.FUNC_ADD),x=Ns,T=Ns),we)switch(Y){case Vr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Gv:r.blendFunc(r.ONE,r.ONE);break;case kv:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Xv:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}else switch(Y){case Vr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Gv:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case kv:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Xv:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}N=null,U=null,W=null,B=null,O.set(0,0,0),k=0,M=Y,D=we}return}Lt=Lt||Ut,Pt=Pt||dt,ae=ae||Et,(Ut!==x||Lt!==T)&&(r.blendEquationSeparate(Qt[Ut],Qt[Lt]),x=Ut,T=Lt),(dt!==N||Et!==U||Pt!==W||ae!==B)&&(r.blendFuncSeparate(me[dt],me[Et],me[Pt],me[ae]),N=dt,U=Et,W=Pt,B=ae),(Ze.equals(O)===!1||fn!==k)&&(r.blendColor(Ze.r,Ze.g,Ze.b,fn),O.copy(Ze),k=fn),M=Y,D=!1}function Ne(Y,Ut){Y.side===Vi?St(r.CULL_FACE):ut(r.CULL_FACE);let dt=Y.side===Zn;Ut&&(dt=!dt),oe(dt),Y.blending===Vr&&Y.transparent===!1?q(is):q(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),u.setFunc(Y.depthFunc),u.setTest(Y.depthTest),u.setMask(Y.depthWrite),c.setMask(Y.colorWrite);const Et=Y.stencilWrite;d.setTest(Et),Et&&(d.setMask(Y.stencilWriteMask),d.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),d.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),Ee(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?ut(r.SAMPLE_ALPHA_TO_COVERAGE):St(r.SAMPLE_ALPHA_TO_COVERAGE)}function oe(Y){C!==Y&&(Y?r.frontFace(r.CW):r.frontFace(r.CCW),C=Y)}function ue(Y){Y!==NM?(ut(r.CULL_FACE),Y!==G&&(Y===Vv?r.cullFace(r.BACK):Y===OM?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):St(r.CULL_FACE),G=Y}function qt(Y){Y!==at&&(I&&r.lineWidth(Y),at=Y)}function Ee(Y,Ut,dt){Y?(ut(r.POLYGON_OFFSET_FILL),(tt!==Ut||ct!==dt)&&(r.polygonOffset(Ut,dt),tt=Ut,ct=dt)):St(r.POLYGON_OFFSET_FILL)}function Yt(Y){Y?ut(r.SCISSOR_TEST):St(r.SCISSOR_TEST)}function L(Y){Y===void 0&&(Y=r.TEXTURE0+mt-1),_t!==Y&&(r.activeTexture(Y),_t=Y)}function w(Y,Ut,dt){dt===void 0&&(_t===null?dt=r.TEXTURE0+mt-1:dt=_t);let Et=bt[dt];Et===void 0&&(Et={type:void 0,texture:void 0},bt[dt]=Et),(Et.type!==Y||Et.texture!==Ut)&&(_t!==dt&&(r.activeTexture(dt),_t=dt),r.bindTexture(Y,Ut||Q[Y]),Et.type=Y,Et.texture=Ut)}function rt(){const Y=bt[_t];Y!==void 0&&Y.type!==void 0&&(r.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function gt(){try{r.compressedTexImage2D.apply(r,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function At(){try{r.compressedTexImage3D.apply(r,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function xt(){try{r.texSubImage2D.apply(r,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function jt(){try{r.texSubImage3D.apply(r,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function zt(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function It(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function ye(){try{r.texStorage2D.apply(r,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ct(){try{r.texStorage3D.apply(r,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ft(){try{r.texImage2D.apply(r,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Jt(){try{r.texImage3D.apply(r,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Wt(Y){Mt.equals(Y)===!1&&(r.scissor(Y.x,Y.y,Y.z,Y.w),Mt.copy(Y))}function Bt(Y){J.equals(Y)===!1&&(r.viewport(Y.x,Y.y,Y.z,Y.w),J.copy(Y))}function ie(Y,Ut){let dt=m.get(Ut);dt===void 0&&(dt=new WeakMap,m.set(Ut,dt));let Et=dt.get(Y);Et===void 0&&(Et=r.getUniformBlockIndex(Ut,Y.name),dt.set(Y,Et))}function fe(Y,Ut){const Et=m.get(Ut).get(Y);h.get(Ut)!==Et&&(r.uniformBlockBinding(Ut,Et,Y.__bindingPointIndex),h.set(Ut,Et))}function Ie(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),u.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},_t=null,bt={},v={},_=new WeakMap,S=[],E=null,b=!1,M=null,x=null,N=null,U=null,T=null,W=null,B=null,O=new ve(0,0,0),k=0,D=!1,C=null,G=null,at=null,tt=null,ct=null,Mt.set(0,0,r.canvas.width,r.canvas.height),J.set(0,0,r.canvas.width,r.canvas.height),c.reset(),u.reset(),d.reset()}return{buffers:{color:c,depth:u,stencil:d},enable:ut,disable:St,bindFramebuffer:Tt,drawBuffers:Dt,useProgram:$t,setBlending:q,setMaterial:Ne,setFlipSided:oe,setCullFace:ue,setLineWidth:qt,setPolygonOffset:Ee,setScissorTest:Yt,activeTexture:L,bindTexture:w,unbindTexture:rt,compressedTexImage2D:gt,compressedTexImage3D:At,texImage2D:Ft,texImage3D:Jt,updateUBOMapping:ie,uniformBlockBinding:fe,texStorage2D:ye,texStorage3D:Ct,texSubImage2D:xt,texSubImage3D:jt,compressedTexSubImage2D:zt,compressedTexSubImage3D:It,scissor:Wt,viewport:Bt,reset:Ie}}function I_(r,t,n,a){const o=Bw(a);switch(n){case yx:return r*t;case Mx:return r*t;case Ex:return r*t*2;case bx:return r*t/o.components*o.byteLength;case Lp:return r*t/o.components*o.byteLength;case Tx:return r*t*2/o.components*o.byteLength;case Np:return r*t*2/o.components*o.byteLength;case Sx:return r*t*3/o.components*o.byteLength;case Li:return r*t*4/o.components*o.byteLength;case Op:return r*t*4/o.components*o.byteLength;case gu:case vu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case _u:case xu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Yh:case Kh:return Math.max(r,16)*Math.max(t,8)/4;case qh:case Zh:return Math.max(r,8)*Math.max(t,8)/2;case Qh:case Jh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case $h:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case tp:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case ep:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case np:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case ip:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case ap:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case sp:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case rp:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case op:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case lp:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case cp:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case up:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case fp:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case dp:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case hp:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case yu:case pp:case mp:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Ax:case gp:return Math.ceil(r/4)*Math.ceil(t/4)*8;case vp:case _p:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Bw(r){switch(r){case Ma:case vx:return{byteLength:1,components:1};case ml:case _x:case Sl:return{byteLength:2,components:1};case Dp:case Up:return{byteLength:2,components:4};case Is:case Rp:case va:return{byteLength:4,components:1};case xx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function Iw(r,t,n,a,o,c,u){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new re,g=new WeakMap;let v;const _=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(L,w){return S?new OffscreenCanvas(L,w):bu("canvas")}function b(L,w,rt){let gt=1;const At=Yt(L);if((At.width>rt||At.height>rt)&&(gt=rt/Math.max(At.width,At.height)),gt<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const xt=Math.floor(gt*At.width),jt=Math.floor(gt*At.height);v===void 0&&(v=E(xt,jt));const zt=w?E(xt,jt):v;return zt.width=xt,zt.height=jt,zt.getContext("2d").drawImage(L,0,0,xt,jt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+At.width+"x"+At.height+") to ("+xt+"x"+jt+")."),zt}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+At.width+"x"+At.height+")."),L;return L}function M(L){return L.generateMipmaps}function x(L){r.generateMipmap(L)}function N(L){return L.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?r.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function U(L,w,rt,gt,At=!1){if(L!==null){if(r[L]!==void 0)return r[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let xt=w;if(w===r.RED&&(rt===r.FLOAT&&(xt=r.R32F),rt===r.HALF_FLOAT&&(xt=r.R16F),rt===r.UNSIGNED_BYTE&&(xt=r.R8)),w===r.RED_INTEGER&&(rt===r.UNSIGNED_BYTE&&(xt=r.R8UI),rt===r.UNSIGNED_SHORT&&(xt=r.R16UI),rt===r.UNSIGNED_INT&&(xt=r.R32UI),rt===r.BYTE&&(xt=r.R8I),rt===r.SHORT&&(xt=r.R16I),rt===r.INT&&(xt=r.R32I)),w===r.RG&&(rt===r.FLOAT&&(xt=r.RG32F),rt===r.HALF_FLOAT&&(xt=r.RG16F),rt===r.UNSIGNED_BYTE&&(xt=r.RG8)),w===r.RG_INTEGER&&(rt===r.UNSIGNED_BYTE&&(xt=r.RG8UI),rt===r.UNSIGNED_SHORT&&(xt=r.RG16UI),rt===r.UNSIGNED_INT&&(xt=r.RG32UI),rt===r.BYTE&&(xt=r.RG8I),rt===r.SHORT&&(xt=r.RG16I),rt===r.INT&&(xt=r.RG32I)),w===r.RGB_INTEGER&&(rt===r.UNSIGNED_BYTE&&(xt=r.RGB8UI),rt===r.UNSIGNED_SHORT&&(xt=r.RGB16UI),rt===r.UNSIGNED_INT&&(xt=r.RGB32UI),rt===r.BYTE&&(xt=r.RGB8I),rt===r.SHORT&&(xt=r.RGB16I),rt===r.INT&&(xt=r.RGB32I)),w===r.RGBA_INTEGER&&(rt===r.UNSIGNED_BYTE&&(xt=r.RGBA8UI),rt===r.UNSIGNED_SHORT&&(xt=r.RGBA16UI),rt===r.UNSIGNED_INT&&(xt=r.RGBA32UI),rt===r.BYTE&&(xt=r.RGBA8I),rt===r.SHORT&&(xt=r.RGBA16I),rt===r.INT&&(xt=r.RGBA32I)),w===r.RGB&&rt===r.UNSIGNED_INT_5_9_9_9_REV&&(xt=r.RGB9_E5),w===r.RGBA){const jt=At?Du:Ce.getTransfer(gt);rt===r.FLOAT&&(xt=r.RGBA32F),rt===r.HALF_FLOAT&&(xt=r.RGBA16F),rt===r.UNSIGNED_BYTE&&(xt=jt===ke?r.SRGB8_ALPHA8:r.RGBA8),rt===r.UNSIGNED_SHORT_4_4_4_4&&(xt=r.RGBA4),rt===r.UNSIGNED_SHORT_5_5_5_1&&(xt=r.RGB5_A1)}return(xt===r.R16F||xt===r.R32F||xt===r.RG16F||xt===r.RG32F||xt===r.RGBA16F||xt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),xt}function T(L,w){let rt;return L?w===null||w===Is||w===Yr?rt=r.DEPTH24_STENCIL8:w===va?rt=r.DEPTH32F_STENCIL8:w===ml&&(rt=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Is||w===Yr?rt=r.DEPTH_COMPONENT24:w===va?rt=r.DEPTH_COMPONENT32F:w===ml&&(rt=r.DEPTH_COMPONENT16),rt}function W(L,w){return M(L)===!0||L.isFramebufferTexture&&L.minFilter!==Si&&L.minFilter!==ki?Math.log2(Math.max(w.width,w.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?w.mipmaps.length:1}function B(L){const w=L.target;w.removeEventListener("dispose",B),k(w),w.isVideoTexture&&g.delete(w)}function O(L){const w=L.target;w.removeEventListener("dispose",O),C(w)}function k(L){const w=a.get(L);if(w.__webglInit===void 0)return;const rt=L.source,gt=_.get(rt);if(gt){const At=gt[w.__cacheKey];At.usedTimes--,At.usedTimes===0&&D(L),Object.keys(gt).length===0&&_.delete(rt)}a.remove(L)}function D(L){const w=a.get(L);r.deleteTexture(w.__webglTexture);const rt=L.source,gt=_.get(rt);delete gt[w.__cacheKey],u.memory.textures--}function C(L){const w=a.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),a.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let gt=0;gt<6;gt++){if(Array.isArray(w.__webglFramebuffer[gt]))for(let At=0;At<w.__webglFramebuffer[gt].length;At++)r.deleteFramebuffer(w.__webglFramebuffer[gt][At]);else r.deleteFramebuffer(w.__webglFramebuffer[gt]);w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer[gt])}else{if(Array.isArray(w.__webglFramebuffer))for(let gt=0;gt<w.__webglFramebuffer.length;gt++)r.deleteFramebuffer(w.__webglFramebuffer[gt]);else r.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&r.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let gt=0;gt<w.__webglColorRenderbuffer.length;gt++)w.__webglColorRenderbuffer[gt]&&r.deleteRenderbuffer(w.__webglColorRenderbuffer[gt]);w.__webglDepthRenderbuffer&&r.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const rt=L.textures;for(let gt=0,At=rt.length;gt<At;gt++){const xt=a.get(rt[gt]);xt.__webglTexture&&(r.deleteTexture(xt.__webglTexture),u.memory.textures--),a.remove(rt[gt])}a.remove(L)}let G=0;function at(){G=0}function tt(){const L=G;return L>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+o.maxTextures),G+=1,L}function ct(L){const w=[];return w.push(L.wrapS),w.push(L.wrapT),w.push(L.wrapR||0),w.push(L.magFilter),w.push(L.minFilter),w.push(L.anisotropy),w.push(L.internalFormat),w.push(L.format),w.push(L.type),w.push(L.generateMipmaps),w.push(L.premultiplyAlpha),w.push(L.flipY),w.push(L.unpackAlignment),w.push(L.colorSpace),w.join()}function mt(L,w){const rt=a.get(L);if(L.isVideoTexture&&qt(L),L.isRenderTargetTexture===!1&&L.version>0&&rt.__version!==L.version){const gt=L.image;if(gt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(gt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(rt,L,w);return}}n.bindTexture(r.TEXTURE_2D,rt.__webglTexture,r.TEXTURE0+w)}function I(L,w){const rt=a.get(L);if(L.version>0&&rt.__version!==L.version){J(rt,L,w);return}n.bindTexture(r.TEXTURE_2D_ARRAY,rt.__webglTexture,r.TEXTURE0+w)}function H(L,w){const rt=a.get(L);if(L.version>0&&rt.__version!==L.version){J(rt,L,w);return}n.bindTexture(r.TEXTURE_3D,rt.__webglTexture,r.TEXTURE0+w)}function V(L,w){const rt=a.get(L);if(L.version>0&&rt.__version!==L.version){ht(rt,L,w);return}n.bindTexture(r.TEXTURE_CUBE_MAP,rt.__webglTexture,r.TEXTURE0+w)}const _t={[pl]:r.REPEAT,[zs]:r.CLAMP_TO_EDGE,[Wh]:r.MIRRORED_REPEAT},bt={[Si]:r.NEAREST,[cE]:r.NEAREST_MIPMAP_NEAREST,[Nc]:r.NEAREST_MIPMAP_LINEAR,[ki]:r.LINEAR,[Zd]:r.LINEAR_MIPMAP_NEAREST,[Ps]:r.LINEAR_MIPMAP_LINEAR},z={[pE]:r.NEVER,[yE]:r.ALWAYS,[mE]:r.LESS,[wx]:r.LEQUAL,[gE]:r.EQUAL,[xE]:r.GEQUAL,[vE]:r.GREATER,[_E]:r.NOTEQUAL};function it(L,w){if(w.type===va&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===ki||w.magFilter===Zd||w.magFilter===Nc||w.magFilter===Ps||w.minFilter===ki||w.minFilter===Zd||w.minFilter===Nc||w.minFilter===Ps)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(L,r.TEXTURE_WRAP_S,_t[w.wrapS]),r.texParameteri(L,r.TEXTURE_WRAP_T,_t[w.wrapT]),(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)&&r.texParameteri(L,r.TEXTURE_WRAP_R,_t[w.wrapR]),r.texParameteri(L,r.TEXTURE_MAG_FILTER,bt[w.magFilter]),r.texParameteri(L,r.TEXTURE_MIN_FILTER,bt[w.minFilter]),w.compareFunction&&(r.texParameteri(L,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(L,r.TEXTURE_COMPARE_FUNC,z[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Si||w.minFilter!==Nc&&w.minFilter!==Ps||w.type===va&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||a.get(w).__currentAnisotropy){const rt=t.get("EXT_texture_filter_anisotropic");r.texParameterf(L,rt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,o.getMaxAnisotropy())),a.get(w).__currentAnisotropy=w.anisotropy}}}function Mt(L,w){let rt=!1;L.__webglInit===void 0&&(L.__webglInit=!0,w.addEventListener("dispose",B));const gt=w.source;let At=_.get(gt);At===void 0&&(At={},_.set(gt,At));const xt=ct(w);if(xt!==L.__cacheKey){At[xt]===void 0&&(At[xt]={texture:r.createTexture(),usedTimes:0},u.memory.textures++,rt=!0),At[xt].usedTimes++;const jt=At[L.__cacheKey];jt!==void 0&&(At[L.__cacheKey].usedTimes--,jt.usedTimes===0&&D(w)),L.__cacheKey=xt,L.__webglTexture=At[xt].texture}return rt}function J(L,w,rt){let gt=r.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(gt=r.TEXTURE_2D_ARRAY),w.isData3DTexture&&(gt=r.TEXTURE_3D);const At=Mt(L,w),xt=w.source;n.bindTexture(gt,L.__webglTexture,r.TEXTURE0+rt);const jt=a.get(xt);if(xt.version!==jt.__version||At===!0){n.activeTexture(r.TEXTURE0+rt);const zt=Ce.getPrimaries(Ce.workingColorSpace),It=w.colorSpace===ns?null:Ce.getPrimaries(w.colorSpace),ye=w.colorSpace===ns||zt===It?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);let Ct=b(w.image,!1,o.maxTextureSize);Ct=Ee(w,Ct);const Ft=c.convert(w.format,w.colorSpace),Jt=c.convert(w.type);let Wt=U(w.internalFormat,Ft,Jt,w.colorSpace,w.isVideoTexture);it(gt,w);let Bt;const ie=w.mipmaps,fe=w.isVideoTexture!==!0,Ie=jt.__version===void 0||At===!0,Y=xt.dataReady,Ut=W(w,Ct);if(w.isDepthTexture)Wt=T(w.format===Zr,w.type),Ie&&(fe?n.texStorage2D(r.TEXTURE_2D,1,Wt,Ct.width,Ct.height):n.texImage2D(r.TEXTURE_2D,0,Wt,Ct.width,Ct.height,0,Ft,Jt,null));else if(w.isDataTexture)if(ie.length>0){fe&&Ie&&n.texStorage2D(r.TEXTURE_2D,Ut,Wt,ie[0].width,ie[0].height);for(let dt=0,Et=ie.length;dt<Et;dt++)Bt=ie[dt],fe?Y&&n.texSubImage2D(r.TEXTURE_2D,dt,0,0,Bt.width,Bt.height,Ft,Jt,Bt.data):n.texImage2D(r.TEXTURE_2D,dt,Wt,Bt.width,Bt.height,0,Ft,Jt,Bt.data);w.generateMipmaps=!1}else fe?(Ie&&n.texStorage2D(r.TEXTURE_2D,Ut,Wt,Ct.width,Ct.height),Y&&n.texSubImage2D(r.TEXTURE_2D,0,0,0,Ct.width,Ct.height,Ft,Jt,Ct.data)):n.texImage2D(r.TEXTURE_2D,0,Wt,Ct.width,Ct.height,0,Ft,Jt,Ct.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){fe&&Ie&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Ut,Wt,ie[0].width,ie[0].height,Ct.depth);for(let dt=0,Et=ie.length;dt<Et;dt++)if(Bt=ie[dt],w.format!==Li)if(Ft!==null)if(fe){if(Y)if(w.layerUpdates.size>0){const Lt=I_(Bt.width,Bt.height,w.format,w.type);for(const Pt of w.layerUpdates){const ae=Bt.data.subarray(Pt*Lt/Bt.data.BYTES_PER_ELEMENT,(Pt+1)*Lt/Bt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,dt,0,0,Pt,Bt.width,Bt.height,1,Ft,ae)}w.clearLayerUpdates()}else n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,dt,0,0,0,Bt.width,Bt.height,Ct.depth,Ft,Bt.data)}else n.compressedTexImage3D(r.TEXTURE_2D_ARRAY,dt,Wt,Bt.width,Bt.height,Ct.depth,0,Bt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else fe?Y&&n.texSubImage3D(r.TEXTURE_2D_ARRAY,dt,0,0,0,Bt.width,Bt.height,Ct.depth,Ft,Jt,Bt.data):n.texImage3D(r.TEXTURE_2D_ARRAY,dt,Wt,Bt.width,Bt.height,Ct.depth,0,Ft,Jt,Bt.data)}else{fe&&Ie&&n.texStorage2D(r.TEXTURE_2D,Ut,Wt,ie[0].width,ie[0].height);for(let dt=0,Et=ie.length;dt<Et;dt++)Bt=ie[dt],w.format!==Li?Ft!==null?fe?Y&&n.compressedTexSubImage2D(r.TEXTURE_2D,dt,0,0,Bt.width,Bt.height,Ft,Bt.data):n.compressedTexImage2D(r.TEXTURE_2D,dt,Wt,Bt.width,Bt.height,0,Bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):fe?Y&&n.texSubImage2D(r.TEXTURE_2D,dt,0,0,Bt.width,Bt.height,Ft,Jt,Bt.data):n.texImage2D(r.TEXTURE_2D,dt,Wt,Bt.width,Bt.height,0,Ft,Jt,Bt.data)}else if(w.isDataArrayTexture)if(fe){if(Ie&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Ut,Wt,Ct.width,Ct.height,Ct.depth),Y)if(w.layerUpdates.size>0){const dt=I_(Ct.width,Ct.height,w.format,w.type);for(const Et of w.layerUpdates){const Lt=Ct.data.subarray(Et*dt/Ct.data.BYTES_PER_ELEMENT,(Et+1)*dt/Ct.data.BYTES_PER_ELEMENT);n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Et,Ct.width,Ct.height,1,Ft,Jt,Lt)}w.clearLayerUpdates()}else n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Ct.width,Ct.height,Ct.depth,Ft,Jt,Ct.data)}else n.texImage3D(r.TEXTURE_2D_ARRAY,0,Wt,Ct.width,Ct.height,Ct.depth,0,Ft,Jt,Ct.data);else if(w.isData3DTexture)fe?(Ie&&n.texStorage3D(r.TEXTURE_3D,Ut,Wt,Ct.width,Ct.height,Ct.depth),Y&&n.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Ct.width,Ct.height,Ct.depth,Ft,Jt,Ct.data)):n.texImage3D(r.TEXTURE_3D,0,Wt,Ct.width,Ct.height,Ct.depth,0,Ft,Jt,Ct.data);else if(w.isFramebufferTexture){if(Ie)if(fe)n.texStorage2D(r.TEXTURE_2D,Ut,Wt,Ct.width,Ct.height);else{let dt=Ct.width,Et=Ct.height;for(let Lt=0;Lt<Ut;Lt++)n.texImage2D(r.TEXTURE_2D,Lt,Wt,dt,Et,0,Ft,Jt,null),dt>>=1,Et>>=1}}else if(ie.length>0){if(fe&&Ie){const dt=Yt(ie[0]);n.texStorage2D(r.TEXTURE_2D,Ut,Wt,dt.width,dt.height)}for(let dt=0,Et=ie.length;dt<Et;dt++)Bt=ie[dt],fe?Y&&n.texSubImage2D(r.TEXTURE_2D,dt,0,0,Ft,Jt,Bt):n.texImage2D(r.TEXTURE_2D,dt,Wt,Ft,Jt,Bt);w.generateMipmaps=!1}else if(fe){if(Ie){const dt=Yt(Ct);n.texStorage2D(r.TEXTURE_2D,Ut,Wt,dt.width,dt.height)}Y&&n.texSubImage2D(r.TEXTURE_2D,0,0,0,Ft,Jt,Ct)}else n.texImage2D(r.TEXTURE_2D,0,Wt,Ft,Jt,Ct);M(w)&&x(gt),jt.__version=xt.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function ht(L,w,rt){if(w.image.length!==6)return;const gt=Mt(L,w),At=w.source;n.bindTexture(r.TEXTURE_CUBE_MAP,L.__webglTexture,r.TEXTURE0+rt);const xt=a.get(At);if(At.version!==xt.__version||gt===!0){n.activeTexture(r.TEXTURE0+rt);const jt=Ce.getPrimaries(Ce.workingColorSpace),zt=w.colorSpace===ns?null:Ce.getPrimaries(w.colorSpace),It=w.colorSpace===ns||jt===zt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,It);const ye=w.isCompressedTexture||w.image[0].isCompressedTexture,Ct=w.image[0]&&w.image[0].isDataTexture,Ft=[];for(let Et=0;Et<6;Et++)!ye&&!Ct?Ft[Et]=b(w.image[Et],!0,o.maxCubemapSize):Ft[Et]=Ct?w.image[Et].image:w.image[Et],Ft[Et]=Ee(w,Ft[Et]);const Jt=Ft[0],Wt=c.convert(w.format,w.colorSpace),Bt=c.convert(w.type),ie=U(w.internalFormat,Wt,Bt,w.colorSpace),fe=w.isVideoTexture!==!0,Ie=xt.__version===void 0||gt===!0,Y=At.dataReady;let Ut=W(w,Jt);it(r.TEXTURE_CUBE_MAP,w);let dt;if(ye){fe&&Ie&&n.texStorage2D(r.TEXTURE_CUBE_MAP,Ut,ie,Jt.width,Jt.height);for(let Et=0;Et<6;Et++){dt=Ft[Et].mipmaps;for(let Lt=0;Lt<dt.length;Lt++){const Pt=dt[Lt];w.format!==Li?Wt!==null?fe?Y&&n.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Lt,0,0,Pt.width,Pt.height,Wt,Pt.data):n.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Lt,ie,Pt.width,Pt.height,0,Pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):fe?Y&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Lt,0,0,Pt.width,Pt.height,Wt,Bt,Pt.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Lt,ie,Pt.width,Pt.height,0,Wt,Bt,Pt.data)}}}else{if(dt=w.mipmaps,fe&&Ie){dt.length>0&&Ut++;const Et=Yt(Ft[0]);n.texStorage2D(r.TEXTURE_CUBE_MAP,Ut,ie,Et.width,Et.height)}for(let Et=0;Et<6;Et++)if(Ct){fe?Y&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,Ft[Et].width,Ft[Et].height,Wt,Bt,Ft[Et].data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,ie,Ft[Et].width,Ft[Et].height,0,Wt,Bt,Ft[Et].data);for(let Lt=0;Lt<dt.length;Lt++){const ae=dt[Lt].image[Et].image;fe?Y&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Lt+1,0,0,ae.width,ae.height,Wt,Bt,ae.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Lt+1,ie,ae.width,ae.height,0,Wt,Bt,ae.data)}}else{fe?Y&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,Wt,Bt,Ft[Et]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,ie,Wt,Bt,Ft[Et]);for(let Lt=0;Lt<dt.length;Lt++){const Pt=dt[Lt];fe?Y&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Lt+1,0,0,Wt,Bt,Pt.image[Et]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Lt+1,ie,Wt,Bt,Pt.image[Et])}}}M(w)&&x(r.TEXTURE_CUBE_MAP),xt.__version=At.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function Q(L,w,rt,gt,At,xt){const jt=c.convert(rt.format,rt.colorSpace),zt=c.convert(rt.type),It=U(rt.internalFormat,jt,zt,rt.colorSpace),ye=a.get(w),Ct=a.get(rt);if(Ct.__renderTarget=w,!ye.__hasExternalTextures){const Ft=Math.max(1,w.width>>xt),Jt=Math.max(1,w.height>>xt);At===r.TEXTURE_3D||At===r.TEXTURE_2D_ARRAY?n.texImage3D(At,xt,It,Ft,Jt,w.depth,0,jt,zt,null):n.texImage2D(At,xt,It,Ft,Jt,0,jt,zt,null)}n.bindFramebuffer(r.FRAMEBUFFER,L),ue(w)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,gt,At,Ct.__webglTexture,0,oe(w)):(At===r.TEXTURE_2D||At>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&At<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,gt,At,Ct.__webglTexture,xt),n.bindFramebuffer(r.FRAMEBUFFER,null)}function ut(L,w,rt){if(r.bindRenderbuffer(r.RENDERBUFFER,L),w.depthBuffer){const gt=w.depthTexture,At=gt&&gt.isDepthTexture?gt.type:null,xt=T(w.stencilBuffer,At),jt=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,zt=oe(w);ue(w)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,zt,xt,w.width,w.height):rt?r.renderbufferStorageMultisample(r.RENDERBUFFER,zt,xt,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,xt,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,jt,r.RENDERBUFFER,L)}else{const gt=w.textures;for(let At=0;At<gt.length;At++){const xt=gt[At],jt=c.convert(xt.format,xt.colorSpace),zt=c.convert(xt.type),It=U(xt.internalFormat,jt,zt,xt.colorSpace),ye=oe(w);rt&&ue(w)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ye,It,w.width,w.height):ue(w)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ye,It,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,It,w.width,w.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function St(L,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(r.FRAMEBUFFER,L),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const gt=a.get(w.depthTexture);gt.__renderTarget=w,(!gt.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),mt(w.depthTexture,0);const At=gt.__webglTexture,xt=oe(w);if(w.depthTexture.format===Gr)ue(w)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,At,0,xt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,At,0);else if(w.depthTexture.format===Zr)ue(w)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,At,0,xt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,At,0);else throw new Error("Unknown depthTexture format")}function Tt(L){const w=a.get(L),rt=L.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==L.depthTexture){const gt=L.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),gt){const At=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,gt.removeEventListener("dispose",At)};gt.addEventListener("dispose",At),w.__depthDisposeCallback=At}w.__boundDepthTexture=gt}if(L.depthTexture&&!w.__autoAllocateDepthBuffer){if(rt)throw new Error("target.depthTexture not supported in Cube render targets");St(w.__webglFramebuffer,L)}else if(rt){w.__webglDepthbuffer=[];for(let gt=0;gt<6;gt++)if(n.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer[gt]),w.__webglDepthbuffer[gt]===void 0)w.__webglDepthbuffer[gt]=r.createRenderbuffer(),ut(w.__webglDepthbuffer[gt],L,!1);else{const At=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,xt=w.__webglDepthbuffer[gt];r.bindRenderbuffer(r.RENDERBUFFER,xt),r.framebufferRenderbuffer(r.FRAMEBUFFER,At,r.RENDERBUFFER,xt)}}else if(n.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=r.createRenderbuffer(),ut(w.__webglDepthbuffer,L,!1);else{const gt=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,At=w.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,At),r.framebufferRenderbuffer(r.FRAMEBUFFER,gt,r.RENDERBUFFER,At)}n.bindFramebuffer(r.FRAMEBUFFER,null)}function Dt(L,w,rt){const gt=a.get(L);w!==void 0&&Q(gt.__webglFramebuffer,L,L.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),rt!==void 0&&Tt(L)}function $t(L){const w=L.texture,rt=a.get(L),gt=a.get(w);L.addEventListener("dispose",O);const At=L.textures,xt=L.isWebGLCubeRenderTarget===!0,jt=At.length>1;if(jt||(gt.__webglTexture===void 0&&(gt.__webglTexture=r.createTexture()),gt.__version=w.version,u.memory.textures++),xt){rt.__webglFramebuffer=[];for(let zt=0;zt<6;zt++)if(w.mipmaps&&w.mipmaps.length>0){rt.__webglFramebuffer[zt]=[];for(let It=0;It<w.mipmaps.length;It++)rt.__webglFramebuffer[zt][It]=r.createFramebuffer()}else rt.__webglFramebuffer[zt]=r.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){rt.__webglFramebuffer=[];for(let zt=0;zt<w.mipmaps.length;zt++)rt.__webglFramebuffer[zt]=r.createFramebuffer()}else rt.__webglFramebuffer=r.createFramebuffer();if(jt)for(let zt=0,It=At.length;zt<It;zt++){const ye=a.get(At[zt]);ye.__webglTexture===void 0&&(ye.__webglTexture=r.createTexture(),u.memory.textures++)}if(L.samples>0&&ue(L)===!1){rt.__webglMultisampledFramebuffer=r.createFramebuffer(),rt.__webglColorRenderbuffer=[],n.bindFramebuffer(r.FRAMEBUFFER,rt.__webglMultisampledFramebuffer);for(let zt=0;zt<At.length;zt++){const It=At[zt];rt.__webglColorRenderbuffer[zt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,rt.__webglColorRenderbuffer[zt]);const ye=c.convert(It.format,It.colorSpace),Ct=c.convert(It.type),Ft=U(It.internalFormat,ye,Ct,It.colorSpace,L.isXRRenderTarget===!0),Jt=oe(L);r.renderbufferStorageMultisample(r.RENDERBUFFER,Jt,Ft,L.width,L.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+zt,r.RENDERBUFFER,rt.__webglColorRenderbuffer[zt])}r.bindRenderbuffer(r.RENDERBUFFER,null),L.depthBuffer&&(rt.__webglDepthRenderbuffer=r.createRenderbuffer(),ut(rt.__webglDepthRenderbuffer,L,!0)),n.bindFramebuffer(r.FRAMEBUFFER,null)}}if(xt){n.bindTexture(r.TEXTURE_CUBE_MAP,gt.__webglTexture),it(r.TEXTURE_CUBE_MAP,w);for(let zt=0;zt<6;zt++)if(w.mipmaps&&w.mipmaps.length>0)for(let It=0;It<w.mipmaps.length;It++)Q(rt.__webglFramebuffer[zt][It],L,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+zt,It);else Q(rt.__webglFramebuffer[zt],L,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+zt,0);M(w)&&x(r.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(jt){for(let zt=0,It=At.length;zt<It;zt++){const ye=At[zt],Ct=a.get(ye);n.bindTexture(r.TEXTURE_2D,Ct.__webglTexture),it(r.TEXTURE_2D,ye),Q(rt.__webglFramebuffer,L,ye,r.COLOR_ATTACHMENT0+zt,r.TEXTURE_2D,0),M(ye)&&x(r.TEXTURE_2D)}n.unbindTexture()}else{let zt=r.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(zt=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(zt,gt.__webglTexture),it(zt,w),w.mipmaps&&w.mipmaps.length>0)for(let It=0;It<w.mipmaps.length;It++)Q(rt.__webglFramebuffer[It],L,w,r.COLOR_ATTACHMENT0,zt,It);else Q(rt.__webglFramebuffer,L,w,r.COLOR_ATTACHMENT0,zt,0);M(w)&&x(zt),n.unbindTexture()}L.depthBuffer&&Tt(L)}function Qt(L){const w=L.textures;for(let rt=0,gt=w.length;rt<gt;rt++){const At=w[rt];if(M(At)){const xt=N(L),jt=a.get(At).__webglTexture;n.bindTexture(xt,jt),x(xt),n.unbindTexture()}}}const me=[],q=[];function Ne(L){if(L.samples>0){if(ue(L)===!1){const w=L.textures,rt=L.width,gt=L.height;let At=r.COLOR_BUFFER_BIT;const xt=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,jt=a.get(L),zt=w.length>1;if(zt)for(let It=0;It<w.length;It++)n.bindFramebuffer(r.FRAMEBUFFER,jt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+It,r.RENDERBUFFER,null),n.bindFramebuffer(r.FRAMEBUFFER,jt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+It,r.TEXTURE_2D,null,0);n.bindFramebuffer(r.READ_FRAMEBUFFER,jt.__webglMultisampledFramebuffer),n.bindFramebuffer(r.DRAW_FRAMEBUFFER,jt.__webglFramebuffer);for(let It=0;It<w.length;It++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(At|=r.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(At|=r.STENCIL_BUFFER_BIT)),zt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,jt.__webglColorRenderbuffer[It]);const ye=a.get(w[It]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ye,0)}r.blitFramebuffer(0,0,rt,gt,0,0,rt,gt,At,r.NEAREST),h===!0&&(me.length=0,q.length=0,me.push(r.COLOR_ATTACHMENT0+It),L.depthBuffer&&L.resolveDepthBuffer===!1&&(me.push(xt),q.push(xt),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,q)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,me))}if(n.bindFramebuffer(r.READ_FRAMEBUFFER,null),n.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),zt)for(let It=0;It<w.length;It++){n.bindFramebuffer(r.FRAMEBUFFER,jt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+It,r.RENDERBUFFER,jt.__webglColorRenderbuffer[It]);const ye=a.get(w[It]).__webglTexture;n.bindFramebuffer(r.FRAMEBUFFER,jt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+It,r.TEXTURE_2D,ye,0)}n.bindFramebuffer(r.DRAW_FRAMEBUFFER,jt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&h){const w=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[w])}}}function oe(L){return Math.min(o.maxSamples,L.samples)}function ue(L){const w=a.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function qt(L){const w=u.render.frame;g.get(L)!==w&&(g.set(L,w),L.update())}function Ee(L,w){const rt=L.colorSpace,gt=L.format,At=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||rt!==$r&&rt!==ns&&(Ce.getTransfer(rt)===ke?(gt!==Li||At!==Ma)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",rt)),w}function Yt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(m.width=L.naturalWidth||L.width,m.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(m.width=L.displayWidth,m.height=L.displayHeight):(m.width=L.width,m.height=L.height),m}this.allocateTextureUnit=tt,this.resetTextureUnits=at,this.setTexture2D=mt,this.setTexture2DArray=I,this.setTexture3D=H,this.setTextureCube=V,this.rebindTextures=Dt,this.setupRenderTarget=$t,this.updateRenderTargetMipmap=Qt,this.updateMultisampleRenderTarget=Ne,this.setupDepthRenderbuffer=Tt,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=ue}function Fw(r,t){function n(a,o=ns){let c;const u=Ce.getTransfer(o);if(a===Ma)return r.UNSIGNED_BYTE;if(a===Dp)return r.UNSIGNED_SHORT_4_4_4_4;if(a===Up)return r.UNSIGNED_SHORT_5_5_5_1;if(a===xx)return r.UNSIGNED_INT_5_9_9_9_REV;if(a===vx)return r.BYTE;if(a===_x)return r.SHORT;if(a===ml)return r.UNSIGNED_SHORT;if(a===Rp)return r.INT;if(a===Is)return r.UNSIGNED_INT;if(a===va)return r.FLOAT;if(a===Sl)return r.HALF_FLOAT;if(a===yx)return r.ALPHA;if(a===Sx)return r.RGB;if(a===Li)return r.RGBA;if(a===Mx)return r.LUMINANCE;if(a===Ex)return r.LUMINANCE_ALPHA;if(a===Gr)return r.DEPTH_COMPONENT;if(a===Zr)return r.DEPTH_STENCIL;if(a===bx)return r.RED;if(a===Lp)return r.RED_INTEGER;if(a===Tx)return r.RG;if(a===Np)return r.RG_INTEGER;if(a===Op)return r.RGBA_INTEGER;if(a===gu||a===vu||a===_u||a===xu)if(u===ke)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===gu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===vu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===_u)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===xu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===gu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===vu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===_u)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===xu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===qh||a===Yh||a===Zh||a===Kh)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===qh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Yh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Zh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Kh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Qh||a===Jh||a===$h)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(a===Qh||a===Jh)return u===ke?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===$h)return u===ke?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===tp||a===ep||a===np||a===ip||a===ap||a===sp||a===rp||a===op||a===lp||a===cp||a===up||a===fp||a===dp||a===hp)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(a===tp)return u===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===ep)return u===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===np)return u===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===ip)return u===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===ap)return u===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===sp)return u===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===rp)return u===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===op)return u===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===lp)return u===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===cp)return u===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===up)return u===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===fp)return u===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===dp)return u===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===hp)return u===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===yu||a===pp||a===mp)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(a===yu)return u===ke?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===pp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===mp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===Ax||a===gp||a===vp||a===_p)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(a===yu)return c.COMPRESSED_RED_RGTC1_EXT;if(a===gp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===vp)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===_p)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Yr?r.UNSIGNED_INT_24_8:r[a]!==void 0?r[a]:null}return{convert:n}}class Hw extends yi{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class fl extends pn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Vw={type:"move"};class Mh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const a of t.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,a){let o=null,c=null,u=null;const d=this._targetRay,h=this._grip,m=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(m&&t.hand){u=!0;for(const b of t.hand.values()){const M=n.getJointPose(b,a),x=this._getHandJoint(m,b);M!==null&&(x.matrix.fromArray(M.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=M.radius),x.visible=M!==null}const g=m.joints["index-finger-tip"],v=m.joints["thumb-tip"],_=g.position.distanceTo(v.position),S=.02,E=.005;m.inputState.pinching&&_>S+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!m.inputState.pinching&&_<=S-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else h!==null&&t.gripSpace&&(c=n.getPose(t.gripSpace,a),c!==null&&(h.matrix.fromArray(c.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,c.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(c.linearVelocity)):h.hasLinearVelocity=!1,c.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(c.angularVelocity)):h.hasAngularVelocity=!1));d!==null&&(o=n.getPose(t.targetRaySpace,a),o===null&&c!==null&&(o=c),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(Vw)))}return d!==null&&(d.visible=o!==null),h!==null&&(h.visible=c!==null),m!==null&&(m.visible=u!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const a=new fl;a.matrixAutoUpdate=!1,a.visible=!1,t.joints[n.jointName]=a,t.add(a)}return t.joints[n.jointName]}}const Gw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,kw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Xw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n,a){if(this.texture===null){const o=new Hn,c=t.properties.get(o);c.__webglTexture=n.texture,(n.depthNear!=a.depthNear||n.depthFar!=a.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=o}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,a=new ba({vertexShader:Gw,fragmentShader:kw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ri(new Uu(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class jw extends to{constructor(t,n){super();const a=this;let o=null,c=1,u=null,d="local-floor",h=1,m=null,g=null,v=null,_=null,S=null,E=null;const b=new Xw,M=n.getContextAttributes();let x=null,N=null;const U=[],T=[],W=new re;let B=null;const O=new yi;O.viewport=new je;const k=new yi;k.viewport=new je;const D=[O,k],C=new Hw;let G=null,at=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ht=U[J];return ht===void 0&&(ht=new Mh,U[J]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function(J){let ht=U[J];return ht===void 0&&(ht=new Mh,U[J]=ht),ht.getGripSpace()},this.getHand=function(J){let ht=U[J];return ht===void 0&&(ht=new Mh,U[J]=ht),ht.getHandSpace()};function tt(J){const ht=T.indexOf(J.inputSource);if(ht===-1)return;const Q=U[ht];Q!==void 0&&(Q.update(J.inputSource,J.frame,m||u),Q.dispatchEvent({type:J.type,data:J.inputSource}))}function ct(){o.removeEventListener("select",tt),o.removeEventListener("selectstart",tt),o.removeEventListener("selectend",tt),o.removeEventListener("squeeze",tt),o.removeEventListener("squeezestart",tt),o.removeEventListener("squeezeend",tt),o.removeEventListener("end",ct),o.removeEventListener("inputsourceschange",mt);for(let J=0;J<U.length;J++){const ht=T[J];ht!==null&&(T[J]=null,U[J].disconnect(ht))}G=null,at=null,b.reset(),t.setRenderTarget(x),S=null,_=null,v=null,o=null,N=null,Mt.stop(),a.isPresenting=!1,t.setPixelRatio(B),t.setSize(W.width,W.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){c=J,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){d=J,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||u},this.setReferenceSpace=function(J){m=J},this.getBaseLayer=function(){return _!==null?_:S},this.getBinding=function(){return v},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(J){if(o=J,o!==null){if(x=t.getRenderTarget(),o.addEventListener("select",tt),o.addEventListener("selectstart",tt),o.addEventListener("selectend",tt),o.addEventListener("squeeze",tt),o.addEventListener("squeezestart",tt),o.addEventListener("squeezeend",tt),o.addEventListener("end",ct),o.addEventListener("inputsourceschange",mt),M.xrCompatible!==!0&&await n.makeXRCompatible(),B=t.getPixelRatio(),t.getSize(W),o.renderState.layers===void 0){const ht={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(o,n,ht),o.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),N=new Fs(S.framebufferWidth,S.framebufferHeight,{format:Li,type:Ma,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil})}else{let ht=null,Q=null,ut=null;M.depth&&(ut=M.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ht=M.stencil?Zr:Gr,Q=M.stencil?Yr:Is);const St={colorFormat:n.RGBA8,depthFormat:ut,scaleFactor:c};v=new XRWebGLBinding(o,n),_=v.createProjectionLayer(St),o.updateRenderState({layers:[_]}),t.setPixelRatio(1),t.setSize(_.textureWidth,_.textureHeight,!1),N=new Fs(_.textureWidth,_.textureHeight,{format:Li,type:Ma,depthTexture:new Ix(_.textureWidth,_.textureHeight,Q,void 0,void 0,void 0,void 0,void 0,void 0,ht),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(h),m=null,u=await o.requestReferenceSpace(d),Mt.setContext(o),Mt.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function mt(J){for(let ht=0;ht<J.removed.length;ht++){const Q=J.removed[ht],ut=T.indexOf(Q);ut>=0&&(T[ut]=null,U[ut].disconnect(Q))}for(let ht=0;ht<J.added.length;ht++){const Q=J.added[ht];let ut=T.indexOf(Q);if(ut===-1){for(let Tt=0;Tt<U.length;Tt++)if(Tt>=T.length){T.push(Q),ut=Tt;break}else if(T[Tt]===null){T[Tt]=Q,ut=Tt;break}if(ut===-1)break}const St=U[ut];St&&St.connect(Q)}}const I=new P,H=new P;function V(J,ht,Q){I.setFromMatrixPosition(ht.matrixWorld),H.setFromMatrixPosition(Q.matrixWorld);const ut=I.distanceTo(H),St=ht.projectionMatrix.elements,Tt=Q.projectionMatrix.elements,Dt=St[14]/(St[10]-1),$t=St[14]/(St[10]+1),Qt=(St[9]+1)/St[5],me=(St[9]-1)/St[5],q=(St[8]-1)/St[0],Ne=(Tt[8]+1)/Tt[0],oe=Dt*q,ue=Dt*Ne,qt=ut/(-q+Ne),Ee=qt*-q;if(ht.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Ee),J.translateZ(qt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),St[10]===-1)J.projectionMatrix.copy(ht.projectionMatrix),J.projectionMatrixInverse.copy(ht.projectionMatrixInverse);else{const Yt=Dt+qt,L=$t+qt,w=oe-Ee,rt=ue+(ut-Ee),gt=Qt*$t/L*Yt,At=me*$t/L*Yt;J.projectionMatrix.makePerspective(w,rt,gt,At,Yt,L),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function _t(J,ht){ht===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ht.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(o===null)return;let ht=J.near,Q=J.far;b.texture!==null&&(b.depthNear>0&&(ht=b.depthNear),b.depthFar>0&&(Q=b.depthFar)),C.near=k.near=O.near=ht,C.far=k.far=O.far=Q,(G!==C.near||at!==C.far)&&(o.updateRenderState({depthNear:C.near,depthFar:C.far}),G=C.near,at=C.far),O.layers.mask=J.layers.mask|2,k.layers.mask=J.layers.mask|4,C.layers.mask=O.layers.mask|k.layers.mask;const ut=J.parent,St=C.cameras;_t(C,ut);for(let Tt=0;Tt<St.length;Tt++)_t(St[Tt],ut);St.length===2?V(C,O,k):C.projectionMatrix.copy(O.projectionMatrix),bt(J,C,ut)};function bt(J,ht,Q){Q===null?J.matrix.copy(ht.matrixWorld):(J.matrix.copy(Q.matrixWorld),J.matrix.invert(),J.matrix.multiply(ht.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ht.projectionMatrix),J.projectionMatrixInverse.copy(ht.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=gl*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(_===null&&S===null))return h},this.setFoveation=function(J){h=J,_!==null&&(_.fixedFoveation=J),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=J)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(C)};let z=null;function it(J,ht){if(g=ht.getViewerPose(m||u),E=ht,g!==null){const Q=g.views;S!==null&&(t.setRenderTargetFramebuffer(N,S.framebuffer),t.setRenderTarget(N));let ut=!1;Q.length!==C.cameras.length&&(C.cameras.length=0,ut=!0);for(let Tt=0;Tt<Q.length;Tt++){const Dt=Q[Tt];let $t=null;if(S!==null)$t=S.getViewport(Dt);else{const me=v.getViewSubImage(_,Dt);$t=me.viewport,Tt===0&&(t.setRenderTargetTextures(N,me.colorTexture,_.ignoreDepthValues?void 0:me.depthStencilTexture),t.setRenderTarget(N))}let Qt=D[Tt];Qt===void 0&&(Qt=new yi,Qt.layers.enable(Tt),Qt.viewport=new je,D[Tt]=Qt),Qt.matrix.fromArray(Dt.transform.matrix),Qt.matrix.decompose(Qt.position,Qt.quaternion,Qt.scale),Qt.projectionMatrix.fromArray(Dt.projectionMatrix),Qt.projectionMatrixInverse.copy(Qt.projectionMatrix).invert(),Qt.viewport.set($t.x,$t.y,$t.width,$t.height),Tt===0&&(C.matrix.copy(Qt.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),ut===!0&&C.cameras.push(Qt)}const St=o.enabledFeatures;if(St&&St.includes("depth-sensing")){const Tt=v.getDepthInformation(Q[0]);Tt&&Tt.isValid&&Tt.texture&&b.init(t,Tt,o.renderState)}}for(let Q=0;Q<U.length;Q++){const ut=T[Q],St=U[Q];ut!==null&&St!==void 0&&St.update(ut,ht,m||u)}z&&z(J,ht),ht.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:ht}),E=null}const Mt=new Bx;Mt.setAnimationLoop(it),this.setAnimationLoop=function(J){z=J},this.dispose=function(){}}}const Ds=new Ea,Ww=new We;function qw(r,t){function n(M,x){M.matrixAutoUpdate===!0&&M.updateMatrix(),x.value.copy(M.matrix)}function a(M,x){x.color.getRGB(M.fogColor.value,Ox(r)),x.isFog?(M.fogNear.value=x.near,M.fogFar.value=x.far):x.isFogExp2&&(M.fogDensity.value=x.density)}function o(M,x,N,U,T){x.isMeshBasicMaterial||x.isMeshLambertMaterial?c(M,x):x.isMeshToonMaterial?(c(M,x),v(M,x)):x.isMeshPhongMaterial?(c(M,x),g(M,x)):x.isMeshStandardMaterial?(c(M,x),_(M,x),x.isMeshPhysicalMaterial&&S(M,x,T)):x.isMeshMatcapMaterial?(c(M,x),E(M,x)):x.isMeshDepthMaterial?c(M,x):x.isMeshDistanceMaterial?(c(M,x),b(M,x)):x.isMeshNormalMaterial?c(M,x):x.isLineBasicMaterial?(u(M,x),x.isLineDashedMaterial&&d(M,x)):x.isPointsMaterial?h(M,x,N,U):x.isSpriteMaterial?m(M,x):x.isShadowMaterial?(M.color.value.copy(x.color),M.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(M,x){M.opacity.value=x.opacity,x.color&&M.diffuse.value.copy(x.color),x.emissive&&M.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(M.map.value=x.map,n(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,n(x.alphaMap,M.alphaMapTransform)),x.bumpMap&&(M.bumpMap.value=x.bumpMap,n(x.bumpMap,M.bumpMapTransform),M.bumpScale.value=x.bumpScale,x.side===Zn&&(M.bumpScale.value*=-1)),x.normalMap&&(M.normalMap.value=x.normalMap,n(x.normalMap,M.normalMapTransform),M.normalScale.value.copy(x.normalScale),x.side===Zn&&M.normalScale.value.negate()),x.displacementMap&&(M.displacementMap.value=x.displacementMap,n(x.displacementMap,M.displacementMapTransform),M.displacementScale.value=x.displacementScale,M.displacementBias.value=x.displacementBias),x.emissiveMap&&(M.emissiveMap.value=x.emissiveMap,n(x.emissiveMap,M.emissiveMapTransform)),x.specularMap&&(M.specularMap.value=x.specularMap,n(x.specularMap,M.specularMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest);const N=t.get(x),U=N.envMap,T=N.envMapRotation;U&&(M.envMap.value=U,Ds.copy(T),Ds.x*=-1,Ds.y*=-1,Ds.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Ds.y*=-1,Ds.z*=-1),M.envMapRotation.value.setFromMatrix4(Ww.makeRotationFromEuler(Ds)),M.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=x.reflectivity,M.ior.value=x.ior,M.refractionRatio.value=x.refractionRatio),x.lightMap&&(M.lightMap.value=x.lightMap,M.lightMapIntensity.value=x.lightMapIntensity,n(x.lightMap,M.lightMapTransform)),x.aoMap&&(M.aoMap.value=x.aoMap,M.aoMapIntensity.value=x.aoMapIntensity,n(x.aoMap,M.aoMapTransform))}function u(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,x.map&&(M.map.value=x.map,n(x.map,M.mapTransform))}function d(M,x){M.dashSize.value=x.dashSize,M.totalSize.value=x.dashSize+x.gapSize,M.scale.value=x.scale}function h(M,x,N,U){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.size.value=x.size*N,M.scale.value=U*.5,x.map&&(M.map.value=x.map,n(x.map,M.uvTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,n(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function m(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.rotation.value=x.rotation,x.map&&(M.map.value=x.map,n(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,n(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function g(M,x){M.specular.value.copy(x.specular),M.shininess.value=Math.max(x.shininess,1e-4)}function v(M,x){x.gradientMap&&(M.gradientMap.value=x.gradientMap)}function _(M,x){M.metalness.value=x.metalness,x.metalnessMap&&(M.metalnessMap.value=x.metalnessMap,n(x.metalnessMap,M.metalnessMapTransform)),M.roughness.value=x.roughness,x.roughnessMap&&(M.roughnessMap.value=x.roughnessMap,n(x.roughnessMap,M.roughnessMapTransform)),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)}function S(M,x,N){M.ior.value=x.ior,x.sheen>0&&(M.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),M.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(M.sheenColorMap.value=x.sheenColorMap,n(x.sheenColorMap,M.sheenColorMapTransform)),x.sheenRoughnessMap&&(M.sheenRoughnessMap.value=x.sheenRoughnessMap,n(x.sheenRoughnessMap,M.sheenRoughnessMapTransform))),x.clearcoat>0&&(M.clearcoat.value=x.clearcoat,M.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(M.clearcoatMap.value=x.clearcoatMap,n(x.clearcoatMap,M.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,n(x.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(M.clearcoatNormalMap.value=x.clearcoatNormalMap,n(x.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Zn&&M.clearcoatNormalScale.value.negate())),x.dispersion>0&&(M.dispersion.value=x.dispersion),x.iridescence>0&&(M.iridescence.value=x.iridescence,M.iridescenceIOR.value=x.iridescenceIOR,M.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(M.iridescenceMap.value=x.iridescenceMap,n(x.iridescenceMap,M.iridescenceMapTransform)),x.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=x.iridescenceThicknessMap,n(x.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),x.transmission>0&&(M.transmission.value=x.transmission,M.transmissionSamplerMap.value=N.texture,M.transmissionSamplerSize.value.set(N.width,N.height),x.transmissionMap&&(M.transmissionMap.value=x.transmissionMap,n(x.transmissionMap,M.transmissionMapTransform)),M.thickness.value=x.thickness,x.thicknessMap&&(M.thicknessMap.value=x.thicknessMap,n(x.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=x.attenuationDistance,M.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(M.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(M.anisotropyMap.value=x.anisotropyMap,n(x.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=x.specularIntensity,M.specularColor.value.copy(x.specularColor),x.specularColorMap&&(M.specularColorMap.value=x.specularColorMap,n(x.specularColorMap,M.specularColorMapTransform)),x.specularIntensityMap&&(M.specularIntensityMap.value=x.specularIntensityMap,n(x.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,x){x.matcap&&(M.matcap.value=x.matcap)}function b(M,x){const N=t.get(x).light;M.referencePosition.value.setFromMatrixPosition(N.matrixWorld),M.nearDistance.value=N.shadow.camera.near,M.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:o}}function Yw(r,t,n,a){let o={},c={},u=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function h(N,U){const T=U.program;a.uniformBlockBinding(N,T)}function m(N,U){let T=o[N.id];T===void 0&&(E(N),T=g(N),o[N.id]=T,N.addEventListener("dispose",M));const W=U.program;a.updateUBOMapping(N,W);const B=t.render.frame;c[N.id]!==B&&(_(N),c[N.id]=B)}function g(N){const U=v();N.__bindingPointIndex=U;const T=r.createBuffer(),W=N.__size,B=N.usage;return r.bindBuffer(r.UNIFORM_BUFFER,T),r.bufferData(r.UNIFORM_BUFFER,W,B),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,U,T),T}function v(){for(let N=0;N<d;N++)if(u.indexOf(N)===-1)return u.push(N),N;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(N){const U=o[N.id],T=N.uniforms,W=N.__cache;r.bindBuffer(r.UNIFORM_BUFFER,U);for(let B=0,O=T.length;B<O;B++){const k=Array.isArray(T[B])?T[B]:[T[B]];for(let D=0,C=k.length;D<C;D++){const G=k[D];if(S(G,B,D,W)===!0){const at=G.__offset,tt=Array.isArray(G.value)?G.value:[G.value];let ct=0;for(let mt=0;mt<tt.length;mt++){const I=tt[mt],H=b(I);typeof I=="number"||typeof I=="boolean"?(G.__data[0]=I,r.bufferSubData(r.UNIFORM_BUFFER,at+ct,G.__data)):I.isMatrix3?(G.__data[0]=I.elements[0],G.__data[1]=I.elements[1],G.__data[2]=I.elements[2],G.__data[3]=0,G.__data[4]=I.elements[3],G.__data[5]=I.elements[4],G.__data[6]=I.elements[5],G.__data[7]=0,G.__data[8]=I.elements[6],G.__data[9]=I.elements[7],G.__data[10]=I.elements[8],G.__data[11]=0):(I.toArray(G.__data,ct),ct+=H.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,at,G.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function S(N,U,T,W){const B=N.value,O=U+"_"+T;if(W[O]===void 0)return typeof B=="number"||typeof B=="boolean"?W[O]=B:W[O]=B.clone(),!0;{const k=W[O];if(typeof B=="number"||typeof B=="boolean"){if(k!==B)return W[O]=B,!0}else if(k.equals(B)===!1)return k.copy(B),!0}return!1}function E(N){const U=N.uniforms;let T=0;const W=16;for(let O=0,k=U.length;O<k;O++){const D=Array.isArray(U[O])?U[O]:[U[O]];for(let C=0,G=D.length;C<G;C++){const at=D[C],tt=Array.isArray(at.value)?at.value:[at.value];for(let ct=0,mt=tt.length;ct<mt;ct++){const I=tt[ct],H=b(I),V=T%W,_t=V%H.boundary,bt=V+_t;T+=_t,bt!==0&&W-bt<H.storage&&(T+=W-bt),at.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),at.__offset=T,T+=H.storage}}}const B=T%W;return B>0&&(T+=W-B),N.__size=T,N.__cache={},this}function b(N){const U={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(U.boundary=4,U.storage=4):N.isVector2?(U.boundary=8,U.storage=8):N.isVector3||N.isColor?(U.boundary=16,U.storage=12):N.isVector4?(U.boundary=16,U.storage=16):N.isMatrix3?(U.boundary=48,U.storage=48):N.isMatrix4?(U.boundary=64,U.storage=64):N.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",N),U}function M(N){const U=N.target;U.removeEventListener("dispose",M);const T=u.indexOf(U.__bindingPointIndex);u.splice(T,1),r.deleteBuffer(o[U.id]),delete o[U.id],delete c[U.id]}function x(){for(const N in o)r.deleteBuffer(o[N]);u=[],o={},c={}}return{bind:h,update:m,dispose:x}}class Zw{constructor(t={}){const{canvas:n=IE(),context:a=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:_=!1}=t;this.isWebGLRenderer=!0;let S;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=a.getContextAttributes().alpha}else S=u;const E=new Uint32Array(4),b=new Int32Array(4);let M=null,x=null;const N=[],U=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=xi,this.toneMapping=as,this.toneMappingExposure=1;const T=this;let W=!1,B=0,O=0,k=null,D=-1,C=null;const G=new je,at=new je;let tt=null;const ct=new ve(0);let mt=0,I=n.width,H=n.height,V=1,_t=null,bt=null;const z=new je(0,0,I,H),it=new je(0,0,I,H);let Mt=!1;const J=new Fp;let ht=!1,Q=!1;const ut=new We,St=new We,Tt=new P,Dt=new je,$t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Qt=!1;function me(){return k===null?V:1}let q=a;function Ne(R,Z){return n.getContext(R,Z)}try{const R={alpha:!0,depth:o,stencil:c,antialias:d,premultipliedAlpha:h,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Cp}`),n.addEventListener("webglcontextlost",Et,!1),n.addEventListener("webglcontextrestored",Lt,!1),n.addEventListener("webglcontextcreationerror",Pt,!1),q===null){const Z="webgl2";if(q=Ne(Z,R),q===null)throw Ne(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let oe,ue,qt,Ee,Yt,L,w,rt,gt,At,xt,jt,zt,It,ye,Ct,Ft,Jt,Wt,Bt,ie,fe,Ie,Y;function Ut(){oe=new tA(q),oe.init(),fe=new Fw(q,oe),ue=new YT(q,oe,t,fe),qt=new Pw(q,oe),ue.reverseDepthBuffer&&_&&qt.buffers.depth.setReversed(!0),Ee=new iA(q),Yt=new Sw,L=new Iw(q,oe,qt,Yt,ue,fe,Ee),w=new KT(T),rt=new $T(T),gt=new ub(q),Ie=new WT(q,gt),At=new eA(q,gt,Ee,Ie),xt=new sA(q,At,gt,Ee),Wt=new aA(q,ue,L),Ct=new ZT(Yt),jt=new yw(T,w,rt,oe,ue,Ie,Ct),zt=new qw(T,Yt),It=new Ew,ye=new Rw(oe),Jt=new jT(T,w,rt,qt,xt,S,h),Ft=new Ow(T,xt,ue),Y=new Yw(q,Ee,ue,qt),Bt=new qT(q,oe,Ee),ie=new nA(q,oe,Ee),Ee.programs=jt.programs,T.capabilities=ue,T.extensions=oe,T.properties=Yt,T.renderLists=It,T.shadowMap=Ft,T.state=qt,T.info=Ee}Ut();const dt=new jw(T,q);this.xr=dt,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const R=oe.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=oe.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(R){R!==void 0&&(V=R,this.setSize(I,H,!1))},this.getSize=function(R){return R.set(I,H)},this.setSize=function(R,Z,lt=!0){if(dt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=R,H=Z,n.width=Math.floor(R*V),n.height=Math.floor(Z*V),lt===!0&&(n.style.width=R+"px",n.style.height=Z+"px"),this.setViewport(0,0,R,Z)},this.getDrawingBufferSize=function(R){return R.set(I*V,H*V).floor()},this.setDrawingBufferSize=function(R,Z,lt){I=R,H=Z,V=lt,n.width=Math.floor(R*lt),n.height=Math.floor(Z*lt),this.setViewport(0,0,R,Z)},this.getCurrentViewport=function(R){return R.copy(G)},this.getViewport=function(R){return R.copy(z)},this.setViewport=function(R,Z,lt,ot){R.isVector4?z.set(R.x,R.y,R.z,R.w):z.set(R,Z,lt,ot),qt.viewport(G.copy(z).multiplyScalar(V).round())},this.getScissor=function(R){return R.copy(it)},this.setScissor=function(R,Z,lt,ot){R.isVector4?it.set(R.x,R.y,R.z,R.w):it.set(R,Z,lt,ot),qt.scissor(at.copy(it).multiplyScalar(V).round())},this.getScissorTest=function(){return Mt},this.setScissorTest=function(R){qt.setScissorTest(Mt=R)},this.setOpaqueSort=function(R){_t=R},this.setTransparentSort=function(R){bt=R},this.getClearColor=function(R){return R.copy(Jt.getClearColor())},this.setClearColor=function(){Jt.setClearColor.apply(Jt,arguments)},this.getClearAlpha=function(){return Jt.getClearAlpha()},this.setClearAlpha=function(){Jt.setClearAlpha.apply(Jt,arguments)},this.clear=function(R=!0,Z=!0,lt=!0){let ot=0;if(R){let K=!1;if(k!==null){const wt=k.texture.format;K=wt===Op||wt===Np||wt===Lp}if(K){const wt=k.texture.type,Nt=wt===Ma||wt===Is||wt===ml||wt===Yr||wt===Dp||wt===Up,Ot=Jt.getClearColor(),Gt=Jt.getClearAlpha(),se=Ot.r,ee=Ot.g,Ht=Ot.b;Nt?(E[0]=se,E[1]=ee,E[2]=Ht,E[3]=Gt,q.clearBufferuiv(q.COLOR,0,E)):(b[0]=se,b[1]=ee,b[2]=Ht,b[3]=Gt,q.clearBufferiv(q.COLOR,0,b))}else ot|=q.COLOR_BUFFER_BIT}Z&&(ot|=q.DEPTH_BUFFER_BIT),lt&&(ot|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q.clear(ot)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Et,!1),n.removeEventListener("webglcontextrestored",Lt,!1),n.removeEventListener("webglcontextcreationerror",Pt,!1),It.dispose(),ye.dispose(),Yt.dispose(),w.dispose(),rt.dispose(),xt.dispose(),Ie.dispose(),Y.dispose(),jt.dispose(),dt.dispose(),dt.removeEventListener("sessionstart",so),dt.removeEventListener("sessionend",ro),Ni.stop()};function Et(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),W=!0}function Lt(){console.log("THREE.WebGLRenderer: Context Restored."),W=!1;const R=Ee.autoReset,Z=Ft.enabled,lt=Ft.autoUpdate,ot=Ft.needsUpdate,K=Ft.type;Ut(),Ee.autoReset=R,Ft.enabled=Z,Ft.autoUpdate=lt,Ft.needsUpdate=ot,Ft.type=K}function Pt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ae(R){const Z=R.target;Z.removeEventListener("dispose",ae),Ze(Z)}function Ze(R){fn(R),Yt.remove(R)}function fn(R){const Z=Yt.get(R).programs;Z!==void 0&&(Z.forEach(function(lt){jt.releaseProgram(lt)}),R.isShaderMaterial&&jt.releaseShaderCache(R))}this.renderBufferDirect=function(R,Z,lt,ot,K,wt){Z===null&&(Z=$t);const Nt=K.isMesh&&K.matrixWorld.determinant()<0,Ot=lo(R,Z,lt,ot,K);qt.setMaterial(ot,Nt);let Gt=lt.index,se=1;if(ot.wireframe===!0){if(Gt=At.getWireframeAttribute(lt),Gt===void 0)return;se=2}const ee=lt.drawRange,Ht=lt.attributes.position;let Ae=ee.start*se,Oe=(ee.start+ee.count)*se;wt!==null&&(Ae=Math.max(Ae,wt.start*se),Oe=Math.min(Oe,(wt.start+wt.count)*se)),Gt!==null?(Ae=Math.max(Ae,0),Oe=Math.min(Oe,Gt.count)):Ht!=null&&(Ae=Math.max(Ae,0),Oe=Math.min(Oe,Ht.count));const Fe=Oe-Ae;if(Fe<0||Fe===1/0)return;Ie.setup(K,ot,Ot,lt,Gt);let Un,be=Bt;if(Gt!==null&&(Un=gt.get(Gt),be=ie,be.setIndex(Un)),K.isMesh)ot.wireframe===!0?(qt.setLineWidth(ot.wireframeLinewidth*me()),be.setMode(q.LINES)):be.setMode(q.TRIANGLES);else if(K.isLine){let kt=ot.linewidth;kt===void 0&&(kt=1),qt.setLineWidth(kt*me()),K.isLineSegments?be.setMode(q.LINES):K.isLineLoop?be.setMode(q.LINE_LOOP):be.setMode(q.LINE_STRIP)}else K.isPoints?be.setMode(q.POINTS):K.isSprite&&be.setMode(q.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)be.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(oe.get("WEBGL_multi_draw"))be.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const kt=K._multiDrawStarts,dn=K._multiDrawCounts,ce=K._multiDrawCount,Vn=Gt?gt.get(Gt).bytesPerElement:1,Ta=Yt.get(ot).currentProgram.getUniforms();for(let En=0;En<ce;En++)Ta.setValue(q,"_gl_DrawID",En),be.render(kt[En]/Vn,dn[En])}else if(K.isInstancedMesh)be.renderInstances(Ae,Fe,K.count);else if(lt.isInstancedBufferGeometry){const kt=lt._maxInstanceCount!==void 0?lt._maxInstanceCount:1/0,dn=Math.min(lt.instanceCount,kt);be.renderInstances(Ae,Fe,dn)}else be.render(Ae,Fe)};function we(R,Z,lt){R.transparent===!0&&R.side===Vi&&R.forceSinglePass===!1?(R.side=Zn,R.needsUpdate=!0,$e(R,Z,lt),R.side=ss,R.needsUpdate=!0,$e(R,Z,lt),R.side=Vi):$e(R,Z,lt)}this.compile=function(R,Z,lt=null){lt===null&&(lt=R),x=ye.get(lt),x.init(Z),U.push(x),lt.traverseVisible(function(K){K.isLight&&K.layers.test(Z.layers)&&(x.pushLight(K),K.castShadow&&x.pushShadow(K))}),R!==lt&&R.traverseVisible(function(K){K.isLight&&K.layers.test(Z.layers)&&(x.pushLight(K),K.castShadow&&x.pushShadow(K))}),x.setupLights();const ot=new Set;return R.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const wt=K.material;if(wt)if(Array.isArray(wt))for(let Nt=0;Nt<wt.length;Nt++){const Ot=wt[Nt];we(Ot,lt,K),ot.add(Ot)}else we(wt,lt,K),ot.add(wt)}),U.pop(),x=null,ot},this.compileAsync=function(R,Z,lt=null){const ot=this.compile(R,Z,lt);return new Promise(K=>{function wt(){if(ot.forEach(function(Nt){Yt.get(Nt).currentProgram.isReady()&&ot.delete(Nt)}),ot.size===0){K(R);return}setTimeout(wt,10)}oe.get("KHR_parallel_shader_compile")!==null?wt():setTimeout(wt,10)})};let Sn=null;function Mi(R){Sn&&Sn(R)}function so(){Ni.stop()}function ro(){Ni.start()}const Ni=new Bx;Ni.setAnimationLoop(Mi),typeof self<"u"&&Ni.setContext(self),this.setAnimationLoop=function(R){Sn=R,dt.setAnimationLoop(R),R===null?Ni.stop():Ni.start()},dt.addEventListener("sessionstart",so),dt.addEventListener("sessionend",ro),this.render=function(R,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(W===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),dt.enabled===!0&&dt.isPresenting===!0&&(dt.cameraAutoUpdate===!0&&dt.updateCamera(Z),Z=dt.getCamera()),R.isScene===!0&&R.onBeforeRender(T,R,Z,k),x=ye.get(R,U.length),x.init(Z),U.push(x),St.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),J.setFromProjectionMatrix(St),Q=this.localClippingEnabled,ht=Ct.init(this.clippingPlanes,Q),M=It.get(R,N.length),M.init(),N.push(M),dt.enabled===!0&&dt.isPresenting===!0){const wt=T.xr.getDepthSensingMesh();wt!==null&&os(wt,Z,-1/0,T.sortObjects)}os(R,Z,0,T.sortObjects),M.finish(),T.sortObjects===!0&&M.sort(_t,bt),Qt=dt.enabled===!1||dt.isPresenting===!1||dt.hasDepthSensing()===!1,Qt&&Jt.addToRenderList(M,R),this.info.render.frame++,ht===!0&&Ct.beginShadows();const lt=x.state.shadowsArray;Ft.render(lt,R,Z),ht===!0&&Ct.endShadows(),this.info.autoReset===!0&&this.info.reset();const ot=M.opaque,K=M.transmissive;if(x.setupLights(),Z.isArrayCamera){const wt=Z.cameras;if(K.length>0)for(let Nt=0,Ot=wt.length;Nt<Ot;Nt++){const Gt=wt[Nt];oo(ot,K,R,Gt)}Qt&&Jt.render(R);for(let Nt=0,Ot=wt.length;Nt<Ot;Nt++){const Gt=wt[Nt];Gs(M,R,Gt,Gt.viewport)}}else K.length>0&&oo(ot,K,R,Z),Qt&&Jt.render(R),Gs(M,R,Z);k!==null&&(L.updateMultisampleRenderTarget(k),L.updateRenderTargetMipmap(k)),R.isScene===!0&&R.onAfterRender(T,R,Z),Ie.resetDefaultState(),D=-1,C=null,U.pop(),U.length>0?(x=U[U.length-1],ht===!0&&Ct.setGlobalState(T.clippingPlanes,x.state.camera)):x=null,N.pop(),N.length>0?M=N[N.length-1]:M=null};function os(R,Z,lt,ot){if(R.visible===!1)return;if(R.layers.test(Z.layers)){if(R.isGroup)lt=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Z);else if(R.isLight)x.pushLight(R),R.castShadow&&x.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||J.intersectsSprite(R)){ot&&Dt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(St);const Nt=xt.update(R),Ot=R.material;Ot.visible&&M.push(R,Nt,Ot,lt,Dt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||J.intersectsObject(R))){const Nt=xt.update(R),Ot=R.material;if(ot&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Dt.copy(R.boundingSphere.center)):(Nt.boundingSphere===null&&Nt.computeBoundingSphere(),Dt.copy(Nt.boundingSphere.center)),Dt.applyMatrix4(R.matrixWorld).applyMatrix4(St)),Array.isArray(Ot)){const Gt=Nt.groups;for(let se=0,ee=Gt.length;se<ee;se++){const Ht=Gt[se],Ae=Ot[Ht.materialIndex];Ae&&Ae.visible&&M.push(R,Nt,Ae,lt,Dt.z,Ht)}}else Ot.visible&&M.push(R,Nt,Ot,lt,Dt.z,null)}}const wt=R.children;for(let Nt=0,Ot=wt.length;Nt<Ot;Nt++)os(wt[Nt],Z,lt,ot)}function Gs(R,Z,lt,ot){const K=R.opaque,wt=R.transmissive,Nt=R.transparent;x.setupLightsView(lt),ht===!0&&Ct.setGlobalState(T.clippingPlanes,lt),ot&&qt.viewport(G.copy(ot)),K.length>0&&ls(K,Z,lt),wt.length>0&&ls(wt,Z,lt),Nt.length>0&&ls(Nt,Z,lt),qt.buffers.depth.setTest(!0),qt.buffers.depth.setMask(!0),qt.buffers.color.setMask(!0),qt.setPolygonOffset(!1)}function oo(R,Z,lt,ot){if((lt.isScene===!0?lt.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[ot.id]===void 0&&(x.state.transmissionRenderTarget[ot.id]=new Fs(1,1,{generateMipmaps:!0,type:oe.has("EXT_color_buffer_half_float")||oe.has("EXT_color_buffer_float")?Sl:Ma,minFilter:Ps,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ce.workingColorSpace}));const wt=x.state.transmissionRenderTarget[ot.id],Nt=ot.viewport||G;wt.setSize(Nt.z,Nt.w);const Ot=T.getRenderTarget();T.setRenderTarget(wt),T.getClearColor(ct),mt=T.getClearAlpha(),mt<1&&T.setClearColor(16777215,.5),T.clear(),Qt&&Jt.render(lt);const Gt=T.toneMapping;T.toneMapping=as;const se=ot.viewport;if(ot.viewport!==void 0&&(ot.viewport=void 0),x.setupLightsView(ot),ht===!0&&Ct.setGlobalState(T.clippingPlanes,ot),ls(R,lt,ot),L.updateMultisampleRenderTarget(wt),L.updateRenderTargetMipmap(wt),oe.has("WEBGL_multisampled_render_to_texture")===!1){let ee=!1;for(let Ht=0,Ae=Z.length;Ht<Ae;Ht++){const Oe=Z[Ht],Fe=Oe.object,Un=Oe.geometry,be=Oe.material,kt=Oe.group;if(be.side===Vi&&Fe.layers.test(ot.layers)){const dn=be.side;be.side=Zn,be.needsUpdate=!0,Ei(Fe,lt,ot,Un,be,kt),be.side=dn,be.needsUpdate=!0,ee=!0}}ee===!0&&(L.updateMultisampleRenderTarget(wt),L.updateRenderTargetMipmap(wt))}T.setRenderTarget(Ot),T.setClearColor(ct,mt),se!==void 0&&(ot.viewport=se),T.toneMapping=Gt}function ls(R,Z,lt){const ot=Z.isScene===!0?Z.overrideMaterial:null;for(let K=0,wt=R.length;K<wt;K++){const Nt=R[K],Ot=Nt.object,Gt=Nt.geometry,se=ot===null?Nt.material:ot,ee=Nt.group;Ot.layers.test(lt.layers)&&Ei(Ot,Z,lt,Gt,se,ee)}}function Ei(R,Z,lt,ot,K,wt){R.onBeforeRender(T,Z,lt,ot,K,wt),R.modelViewMatrix.multiplyMatrices(lt.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),K.onBeforeRender(T,Z,lt,ot,R,wt),K.transparent===!0&&K.side===Vi&&K.forceSinglePass===!1?(K.side=Zn,K.needsUpdate=!0,T.renderBufferDirect(lt,Z,ot,K,R,wt),K.side=ss,K.needsUpdate=!0,T.renderBufferDirect(lt,Z,ot,K,R,wt),K.side=Vi):T.renderBufferDirect(lt,Z,ot,K,R,wt),R.onAfterRender(T,Z,lt,ot,K,wt)}function $e(R,Z,lt){Z.isScene!==!0&&(Z=$t);const ot=Yt.get(R),K=x.state.lights,wt=x.state.shadowsArray,Nt=K.state.version,Ot=jt.getParameters(R,K.state,wt,Z,lt),Gt=jt.getProgramCacheKey(Ot);let se=ot.programs;ot.environment=R.isMeshStandardMaterial?Z.environment:null,ot.fog=Z.fog,ot.envMap=(R.isMeshStandardMaterial?rt:w).get(R.envMap||ot.environment),ot.envMapRotation=ot.environment!==null&&R.envMap===null?Z.environmentRotation:R.envMapRotation,se===void 0&&(R.addEventListener("dispose",ae),se=new Map,ot.programs=se);let ee=se.get(Gt);if(ee!==void 0){if(ot.currentProgram===ee&&ot.lightsStateVersion===Nt)return Wi(R,Ot),ee}else Ot.uniforms=jt.getUniforms(R),R.onBeforeCompile(Ot,T),ee=jt.acquireProgram(Ot,Gt),se.set(Gt,ee),ot.uniforms=Ot.uniforms;const Ht=ot.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ht.clippingPlanes=Ct.uniform),Wi(R,Ot),ot.needsLights=Bu(R),ot.lightsStateVersion=Nt,ot.needsLights&&(Ht.ambientLightColor.value=K.state.ambient,Ht.lightProbe.value=K.state.probe,Ht.directionalLights.value=K.state.directional,Ht.directionalLightShadows.value=K.state.directionalShadow,Ht.spotLights.value=K.state.spot,Ht.spotLightShadows.value=K.state.spotShadow,Ht.rectAreaLights.value=K.state.rectArea,Ht.ltc_1.value=K.state.rectAreaLTC1,Ht.ltc_2.value=K.state.rectAreaLTC2,Ht.pointLights.value=K.state.point,Ht.pointLightShadows.value=K.state.pointShadow,Ht.hemisphereLights.value=K.state.hemi,Ht.directionalShadowMap.value=K.state.directionalShadowMap,Ht.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Ht.spotShadowMap.value=K.state.spotShadowMap,Ht.spotLightMatrix.value=K.state.spotLightMatrix,Ht.spotLightMap.value=K.state.spotLightMap,Ht.pointShadowMap.value=K.state.pointShadowMap,Ht.pointShadowMatrix.value=K.state.pointShadowMatrix),ot.currentProgram=ee,ot.uniformsList=null,ee}function Mn(R){if(R.uniformsList===null){const Z=R.currentProgram.getUniforms();R.uniformsList=Su.seqWithValue(Z.seq,R.uniforms)}return R.uniformsList}function Wi(R,Z){const lt=Yt.get(R);lt.outputColorSpace=Z.outputColorSpace,lt.batching=Z.batching,lt.batchingColor=Z.batchingColor,lt.instancing=Z.instancing,lt.instancingColor=Z.instancingColor,lt.instancingMorph=Z.instancingMorph,lt.skinning=Z.skinning,lt.morphTargets=Z.morphTargets,lt.morphNormals=Z.morphNormals,lt.morphColors=Z.morphColors,lt.morphTargetsCount=Z.morphTargetsCount,lt.numClippingPlanes=Z.numClippingPlanes,lt.numIntersection=Z.numClipIntersection,lt.vertexAlphas=Z.vertexAlphas,lt.vertexTangents=Z.vertexTangents,lt.toneMapping=Z.toneMapping}function lo(R,Z,lt,ot,K){Z.isScene!==!0&&(Z=$t),L.resetTextureUnits();const wt=Z.fog,Nt=ot.isMeshStandardMaterial?Z.environment:null,Ot=k===null?T.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:$r,Gt=(ot.isMeshStandardMaterial?rt:w).get(ot.envMap||Nt),se=ot.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,ee=!!lt.attributes.tangent&&(!!ot.normalMap||ot.anisotropy>0),Ht=!!lt.morphAttributes.position,Ae=!!lt.morphAttributes.normal,Oe=!!lt.morphAttributes.color;let Fe=as;ot.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Fe=T.toneMapping);const Un=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,be=Un!==void 0?Un.length:0,kt=Yt.get(ot),dn=x.state.lights;if(ht===!0&&(Q===!0||R!==C)){const Ln=R===C&&ot.id===D;Ct.setState(ot,R,Ln)}let ce=!1;ot.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==dn.state.version||kt.outputColorSpace!==Ot||K.isBatchedMesh&&kt.batching===!1||!K.isBatchedMesh&&kt.batching===!0||K.isBatchedMesh&&kt.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&kt.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&kt.instancing===!1||!K.isInstancedMesh&&kt.instancing===!0||K.isSkinnedMesh&&kt.skinning===!1||!K.isSkinnedMesh&&kt.skinning===!0||K.isInstancedMesh&&kt.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&kt.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&kt.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&kt.instancingMorph===!1&&K.morphTexture!==null||kt.envMap!==Gt||ot.fog===!0&&kt.fog!==wt||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==Ct.numPlanes||kt.numIntersection!==Ct.numIntersection)||kt.vertexAlphas!==se||kt.vertexTangents!==ee||kt.morphTargets!==Ht||kt.morphNormals!==Ae||kt.morphColors!==Oe||kt.toneMapping!==Fe||kt.morphTargetsCount!==be)&&(ce=!0):(ce=!0,kt.__version=ot.version);let Vn=kt.currentProgram;ce===!0&&(Vn=$e(ot,Z,K));let Ta=!1,En=!1,Aa=!1;const Le=Vn.getUniforms(),li=kt.uniforms;if(qt.useProgram(Vn.program)&&(Ta=!0,En=!0,Aa=!0),ot.id!==D&&(D=ot.id,En=!0),Ta||C!==R){qt.buffers.depth.getReversed()?(ut.copy(R.projectionMatrix),HE(ut),VE(ut),Le.setValue(q,"projectionMatrix",ut)):Le.setValue(q,"projectionMatrix",R.projectionMatrix),Le.setValue(q,"viewMatrix",R.matrixWorldInverse);const bi=Le.map.cameraPosition;bi!==void 0&&bi.setValue(q,Tt.setFromMatrixPosition(R.matrixWorld)),ue.logarithmicDepthBuffer&&Le.setValue(q,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ot.isMeshPhongMaterial||ot.isMeshToonMaterial||ot.isMeshLambertMaterial||ot.isMeshBasicMaterial||ot.isMeshStandardMaterial||ot.isShaderMaterial)&&Le.setValue(q,"isOrthographic",R.isOrthographicCamera===!0),C!==R&&(C=R,En=!0,Aa=!0)}if(K.isSkinnedMesh){Le.setOptional(q,K,"bindMatrix"),Le.setOptional(q,K,"bindMatrixInverse");const Ln=K.skeleton;Ln&&(Ln.boneTexture===null&&Ln.computeBoneTexture(),Le.setValue(q,"boneTexture",Ln.boneTexture,L))}K.isBatchedMesh&&(Le.setOptional(q,K,"batchingTexture"),Le.setValue(q,"batchingTexture",K._matricesTexture,L),Le.setOptional(q,K,"batchingIdTexture"),Le.setValue(q,"batchingIdTexture",K._indirectTexture,L),Le.setOptional(q,K,"batchingColorTexture"),K._colorsTexture!==null&&Le.setValue(q,"batchingColorTexture",K._colorsTexture,L));const vn=lt.morphAttributes;if((vn.position!==void 0||vn.normal!==void 0||vn.color!==void 0)&&Wt.update(K,lt,Vn),(En||kt.receiveShadow!==K.receiveShadow)&&(kt.receiveShadow=K.receiveShadow,Le.setValue(q,"receiveShadow",K.receiveShadow)),ot.isMeshGouraudMaterial&&ot.envMap!==null&&(li.envMap.value=Gt,li.flipEnvMap.value=Gt.isCubeTexture&&Gt.isRenderTargetTexture===!1?-1:1),ot.isMeshStandardMaterial&&ot.envMap===null&&Z.environment!==null&&(li.envMapIntensity.value=Z.environmentIntensity),En&&(Le.setValue(q,"toneMappingExposure",T.toneMappingExposure),kt.needsLights&&Pu(li,Aa),wt&&ot.fog===!0&&zt.refreshFogUniforms(li,wt),zt.refreshMaterialUniforms(li,ot,V,H,x.state.transmissionRenderTarget[R.id]),Su.upload(q,Mn(kt),li,L)),ot.isShaderMaterial&&ot.uniformsNeedUpdate===!0&&(Su.upload(q,Mn(kt),li,L),ot.uniformsNeedUpdate=!1),ot.isSpriteMaterial&&Le.setValue(q,"center",K.center),Le.setValue(q,"modelViewMatrix",K.modelViewMatrix),Le.setValue(q,"normalMatrix",K.normalMatrix),Le.setValue(q,"modelMatrix",K.matrixWorld),ot.isShaderMaterial||ot.isRawShaderMaterial){const Ln=ot.uniformsGroups;for(let bi=0,ci=Ln.length;bi<ci;bi++){const qi=Ln[bi];Y.update(qi,Vn),Y.bind(qi,Vn)}}return Vn}function Pu(R,Z){R.ambientLightColor.needsUpdate=Z,R.lightProbe.needsUpdate=Z,R.directionalLights.needsUpdate=Z,R.directionalLightShadows.needsUpdate=Z,R.pointLights.needsUpdate=Z,R.pointLightShadows.needsUpdate=Z,R.spotLights.needsUpdate=Z,R.spotLightShadows.needsUpdate=Z,R.rectAreaLights.needsUpdate=Z,R.hemisphereLights.needsUpdate=Z}function Bu(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(R,Z,lt){Yt.get(R.texture).__webglTexture=Z,Yt.get(R.depthTexture).__webglTexture=lt;const ot=Yt.get(R);ot.__hasExternalTextures=!0,ot.__autoAllocateDepthBuffer=lt===void 0,ot.__autoAllocateDepthBuffer||oe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ot.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,Z){const lt=Yt.get(R);lt.__webglFramebuffer=Z,lt.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(R,Z=0,lt=0){k=R,B=Z,O=lt;let ot=!0,K=null,wt=!1,Nt=!1;if(R){const Gt=Yt.get(R);if(Gt.__useDefaultFramebuffer!==void 0)qt.bindFramebuffer(q.FRAMEBUFFER,null),ot=!1;else if(Gt.__webglFramebuffer===void 0)L.setupRenderTarget(R);else if(Gt.__hasExternalTextures)L.rebindTextures(R,Yt.get(R.texture).__webglTexture,Yt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Ht=R.depthTexture;if(Gt.__boundDepthTexture!==Ht){if(Ht!==null&&Yt.has(Ht)&&(R.width!==Ht.image.width||R.height!==Ht.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(R)}}const se=R.texture;(se.isData3DTexture||se.isDataArrayTexture||se.isCompressedArrayTexture)&&(Nt=!0);const ee=Yt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ee[Z])?K=ee[Z][lt]:K=ee[Z],wt=!0):R.samples>0&&L.useMultisampledRTT(R)===!1?K=Yt.get(R).__webglMultisampledFramebuffer:Array.isArray(ee)?K=ee[lt]:K=ee,G.copy(R.viewport),at.copy(R.scissor),tt=R.scissorTest}else G.copy(z).multiplyScalar(V).floor(),at.copy(it).multiplyScalar(V).floor(),tt=Mt;if(qt.bindFramebuffer(q.FRAMEBUFFER,K)&&ot&&qt.drawBuffers(R,K),qt.viewport(G),qt.scissor(at),qt.setScissorTest(tt),wt){const Gt=Yt.get(R.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Gt.__webglTexture,lt)}else if(Nt){const Gt=Yt.get(R.texture),se=Z||0;q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,Gt.__webglTexture,lt||0,se)}D=-1},this.readRenderTargetPixels=function(R,Z,lt,ot,K,wt,Nt){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=Yt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Nt!==void 0&&(Ot=Ot[Nt]),Ot){qt.bindFramebuffer(q.FRAMEBUFFER,Ot);try{const Gt=R.texture,se=Gt.format,ee=Gt.type;if(!ue.textureFormatReadable(se)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ue.textureTypeReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=R.width-ot&&lt>=0&&lt<=R.height-K&&q.readPixels(Z,lt,ot,K,fe.convert(se),fe.convert(ee),wt)}finally{const Gt=k!==null?Yt.get(k).__webglFramebuffer:null;qt.bindFramebuffer(q.FRAMEBUFFER,Gt)}}},this.readRenderTargetPixelsAsync=async function(R,Z,lt,ot,K,wt,Nt){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ot=Yt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Nt!==void 0&&(Ot=Ot[Nt]),Ot){const Gt=R.texture,se=Gt.format,ee=Gt.type;if(!ue.textureFormatReadable(se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ue.textureTypeReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Z>=0&&Z<=R.width-ot&&lt>=0&&lt<=R.height-K){qt.bindFramebuffer(q.FRAMEBUFFER,Ot);const Ht=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,Ht),q.bufferData(q.PIXEL_PACK_BUFFER,wt.byteLength,q.STREAM_READ),q.readPixels(Z,lt,ot,K,fe.convert(se),fe.convert(ee),0);const Ae=k!==null?Yt.get(k).__webglFramebuffer:null;qt.bindFramebuffer(q.FRAMEBUFFER,Ae);const Oe=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await FE(q,Oe,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,Ht),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,wt),q.deleteBuffer(Ht),q.deleteSync(Oe),wt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,Z=null,lt=0){R.isTexture!==!0&&(cl("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Z=arguments[0]||null,R=arguments[1]);const ot=Math.pow(2,-lt),K=Math.floor(R.image.width*ot),wt=Math.floor(R.image.height*ot),Nt=Z!==null?Z.x:0,Ot=Z!==null?Z.y:0;L.setTexture2D(R,0),q.copyTexSubImage2D(q.TEXTURE_2D,lt,0,0,Nt,Ot,K,wt),qt.unbindTexture()},this.copyTextureToTexture=function(R,Z,lt=null,ot=null,K=0){R.isTexture!==!0&&(cl("WebGLRenderer: copyTextureToTexture function signature has changed."),ot=arguments[0]||null,R=arguments[1],Z=arguments[2],K=arguments[3]||0,lt=null);let wt,Nt,Ot,Gt,se,ee,Ht,Ae,Oe;const Fe=R.isCompressedTexture?R.mipmaps[K]:R.image;lt!==null?(wt=lt.max.x-lt.min.x,Nt=lt.max.y-lt.min.y,Ot=lt.isBox3?lt.max.z-lt.min.z:1,Gt=lt.min.x,se=lt.min.y,ee=lt.isBox3?lt.min.z:0):(wt=Fe.width,Nt=Fe.height,Ot=Fe.depth||1,Gt=0,se=0,ee=0),ot!==null?(Ht=ot.x,Ae=ot.y,Oe=ot.z):(Ht=0,Ae=0,Oe=0);const Un=fe.convert(Z.format),be=fe.convert(Z.type);let kt;Z.isData3DTexture?(L.setTexture3D(Z,0),kt=q.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(L.setTexture2DArray(Z,0),kt=q.TEXTURE_2D_ARRAY):(L.setTexture2D(Z,0),kt=q.TEXTURE_2D),q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,Z.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,Z.unpackAlignment);const dn=q.getParameter(q.UNPACK_ROW_LENGTH),ce=q.getParameter(q.UNPACK_IMAGE_HEIGHT),Vn=q.getParameter(q.UNPACK_SKIP_PIXELS),Ta=q.getParameter(q.UNPACK_SKIP_ROWS),En=q.getParameter(q.UNPACK_SKIP_IMAGES);q.pixelStorei(q.UNPACK_ROW_LENGTH,Fe.width),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Fe.height),q.pixelStorei(q.UNPACK_SKIP_PIXELS,Gt),q.pixelStorei(q.UNPACK_SKIP_ROWS,se),q.pixelStorei(q.UNPACK_SKIP_IMAGES,ee);const Aa=R.isDataArrayTexture||R.isData3DTexture,Le=Z.isDataArrayTexture||Z.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){const li=Yt.get(R),vn=Yt.get(Z),Ln=Yt.get(li.__renderTarget),bi=Yt.get(vn.__renderTarget);qt.bindFramebuffer(q.READ_FRAMEBUFFER,Ln.__webglFramebuffer),qt.bindFramebuffer(q.DRAW_FRAMEBUFFER,bi.__webglFramebuffer);for(let ci=0;ci<Ot;ci++)Aa&&q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Yt.get(R).__webglTexture,K,ee+ci),R.isDepthTexture?(Le&&q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Yt.get(Z).__webglTexture,K,Oe+ci),q.blitFramebuffer(Gt,se,wt,Nt,Ht,Ae,wt,Nt,q.DEPTH_BUFFER_BIT,q.NEAREST)):Le?q.copyTexSubImage3D(kt,K,Ht,Ae,Oe+ci,Gt,se,wt,Nt):q.copyTexSubImage2D(kt,K,Ht,Ae,Oe+ci,Gt,se,wt,Nt);qt.bindFramebuffer(q.READ_FRAMEBUFFER,null),qt.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else Le?R.isDataTexture||R.isData3DTexture?q.texSubImage3D(kt,K,Ht,Ae,Oe,wt,Nt,Ot,Un,be,Fe.data):Z.isCompressedArrayTexture?q.compressedTexSubImage3D(kt,K,Ht,Ae,Oe,wt,Nt,Ot,Un,Fe.data):q.texSubImage3D(kt,K,Ht,Ae,Oe,wt,Nt,Ot,Un,be,Fe):R.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,K,Ht,Ae,wt,Nt,Un,be,Fe.data):R.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,K,Ht,Ae,Fe.width,Fe.height,Un,Fe.data):q.texSubImage2D(q.TEXTURE_2D,K,Ht,Ae,wt,Nt,Un,be,Fe);q.pixelStorei(q.UNPACK_ROW_LENGTH,dn),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,ce),q.pixelStorei(q.UNPACK_SKIP_PIXELS,Vn),q.pixelStorei(q.UNPACK_SKIP_ROWS,Ta),q.pixelStorei(q.UNPACK_SKIP_IMAGES,En),K===0&&Z.generateMipmaps&&q.generateMipmap(kt),qt.unbindTexture()},this.copyTextureToTexture3D=function(R,Z,lt=null,ot=null,K=0){return R.isTexture!==!0&&(cl("WebGLRenderer: copyTextureToTexture3D function signature has changed."),lt=arguments[0]||null,ot=arguments[1]||null,R=arguments[2],Z=arguments[3],K=arguments[4]||0),cl('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,Z,lt,ot,K)},this.initRenderTarget=function(R){Yt.get(R).__webglFramebuffer===void 0&&L.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?L.setTextureCube(R,0):R.isData3DTexture?L.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?L.setTexture2DArray(R,0):L.setTexture2D(R,0),qt.unbindTexture()},this.resetState=function(){B=0,O=0,k=null,qt.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _a}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorspace=Ce._getDrawingBufferColorSpace(t),n.unpackColorSpace=Ce._getUnpackColorSpace()}}class kx extends pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ea,this.environmentIntensity=1,this.environmentRotation=new Ea,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Xx{constructor(t,n){this.isInterleavedBuffer=!0,this.array=t,this.stride=n,this.count=t!==void 0?t.length/n:0,this.usage=xp,this.updateRanges=[],this.version=0,this.uuid=xa()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,n,a){t*=this.stride,a*=n.stride;for(let o=0,c=this.stride;o<c;o++)this.array[t+o]=n.array[a+o];return this}set(t,n=0){return this.array.set(t,n),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xa()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),a=new this.constructor(n,this.stride);return a.setUsage(this.usage),a}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xa()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const In=new P;class Xi{constructor(t,n,a,o=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=n,this.offset=a,this.normalized=o}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let n=0,a=this.data.count;n<a;n++)In.fromBufferAttribute(this,n),In.applyMatrix4(t),this.setXYZ(n,In.x,In.y,In.z);return this}applyNormalMatrix(t){for(let n=0,a=this.count;n<a;n++)In.fromBufferAttribute(this,n),In.applyNormalMatrix(t),this.setXYZ(n,In.x,In.y,In.z);return this}transformDirection(t){for(let n=0,a=this.count;n<a;n++)In.fromBufferAttribute(this,n),In.transformDirection(t),this.setXYZ(n,In.x,In.y,In.z);return this}getComponent(t,n){let a=this.array[t*this.data.stride+this.offset+n];return this.normalized&&(a=Ui(a,this.array)),a}setComponent(t,n,a){return this.normalized&&(a=Be(a,this.array)),this.data.array[t*this.data.stride+this.offset+n]=a,this}setX(t,n){return this.normalized&&(n=Be(n,this.array)),this.data.array[t*this.data.stride+this.offset]=n,this}setY(t,n){return this.normalized&&(n=Be(n,this.array)),this.data.array[t*this.data.stride+this.offset+1]=n,this}setZ(t,n){return this.normalized&&(n=Be(n,this.array)),this.data.array[t*this.data.stride+this.offset+2]=n,this}setW(t,n){return this.normalized&&(n=Be(n,this.array)),this.data.array[t*this.data.stride+this.offset+3]=n,this}getX(t){let n=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(n=Ui(n,this.array)),n}getY(t){let n=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(n=Ui(n,this.array)),n}getZ(t){let n=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(n=Ui(n,this.array)),n}getW(t){let n=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(n=Ui(n,this.array)),n}setXY(t,n,a){return t=t*this.data.stride+this.offset,this.normalized&&(n=Be(n,this.array),a=Be(a,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=a,this}setXYZ(t,n,a,o){return t=t*this.data.stride+this.offset,this.normalized&&(n=Be(n,this.array),a=Be(a,this.array),o=Be(o,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=a,this.data.array[t+2]=o,this}setXYZW(t,n,a,o,c){return t=t*this.data.stride+this.offset,this.normalized&&(n=Be(n,this.array),a=Be(a,this.array),o=Be(o,this.array),c=Be(c,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=a,this.data.array[t+2]=o,this.data.array[t+3]=c,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let a=0;a<this.count;a++){const o=a*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)n.push(this.data.array[o+c])}return new oi(new this.array.constructor(n),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Xi(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let a=0;a<this.count;a++){const o=a*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)n.push(this.data.array[o+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class jx extends no{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new ve(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let zr;const il=new P,Pr=new P,Br=new P,Ir=new re,al=new re,Wx=new We,tu=new P,sl=new P,eu=new P,F_=new re,Eh=new re,H_=new re;class Kw extends pn{constructor(t=new jx){if(super(),this.isSprite=!0,this.type="Sprite",zr===void 0){zr=new yn;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),a=new Xx(n,5);zr.setIndex([0,1,2,0,2,3]),zr.setAttribute("position",new Xi(a,3,0,!1)),zr.setAttribute("uv",new Xi(a,2,3,!1))}this.geometry=zr,this.material=t,this.center=new re(.5,.5)}raycast(t,n){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Pr.setFromMatrixScale(this.matrixWorld),Wx.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Br.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Pr.multiplyScalar(-Br.z);const a=this.material.rotation;let o,c;a!==0&&(c=Math.cos(a),o=Math.sin(a));const u=this.center;nu(tu.set(-.5,-.5,0),Br,u,Pr,o,c),nu(sl.set(.5,-.5,0),Br,u,Pr,o,c),nu(eu.set(.5,.5,0),Br,u,Pr,o,c),F_.set(0,0),Eh.set(1,0),H_.set(1,1);let d=t.ray.intersectTriangle(tu,sl,eu,!1,il);if(d===null&&(nu(sl.set(-.5,.5,0),Br,u,Pr,o,c),Eh.set(0,1),d=t.ray.intersectTriangle(tu,eu,sl,!1,il),d===null))return;const h=t.ray.origin.distanceTo(il);h<t.near||h>t.far||n.push({distance:h,point:il.clone(),uv:si.getInterpolation(il,tu,sl,eu,F_,Eh,H_,new re),face:null,object:this})}copy(t,n){return super.copy(t,n),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function nu(r,t,n,a,o,c){Ir.subVectors(r,n).addScalar(.5).multiply(a),o!==void 0?(al.x=c*Ir.x-o*Ir.y,al.y=o*Ir.x+c*Ir.y):al.copy(Ir),r.copy(t),r.x+=al.x,r.y+=al.y,r.applyMatrix4(Wx)}class Ml extends no{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Tu=new P,Au=new P,V_=new We,rl=new Pp,iu=new eo,bh=new P,G_=new P;class qx extends pn{constructor(t=new yn,n=new Ml){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=n,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,a=[0];for(let o=1,c=n.count;o<c;o++)Tu.fromBufferAttribute(n,o-1),Au.fromBufferAttribute(n,o),a[o]=a[o-1],a[o]+=Tu.distanceTo(Au);t.setAttribute("lineDistance",new Qe(a,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,n){const a=this.geometry,o=this.matrixWorld,c=t.params.Line.threshold,u=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),iu.copy(a.boundingSphere),iu.applyMatrix4(o),iu.radius+=c,t.ray.intersectsSphere(iu)===!1)return;V_.copy(o).invert(),rl.copy(t.ray).applyMatrix4(V_);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),h=d*d,m=this.isLineSegments?2:1,g=a.index,_=a.attributes.position;if(g!==null){const S=Math.max(0,u.start),E=Math.min(g.count,u.start+u.count);for(let b=S,M=E-1;b<M;b+=m){const x=g.getX(b),N=g.getX(b+1),U=au(this,t,rl,h,x,N);U&&n.push(U)}if(this.isLineLoop){const b=g.getX(E-1),M=g.getX(S),x=au(this,t,rl,h,b,M);x&&n.push(x)}}else{const S=Math.max(0,u.start),E=Math.min(_.count,u.start+u.count);for(let b=S,M=E-1;b<M;b+=m){const x=au(this,t,rl,h,b,b+1);x&&n.push(x)}if(this.isLineLoop){const b=au(this,t,rl,h,E-1,S);b&&n.push(b)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const d=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function au(r,t,n,a,o,c){const u=r.geometry.attributes.position;if(Tu.fromBufferAttribute(u,o),Au.fromBufferAttribute(u,c),n.distanceSqToSegment(Tu,Au,bh,G_)>a)return;bh.applyMatrix4(r.matrixWorld);const h=t.ray.origin.distanceTo(bh);if(!(h<t.near||h>t.far))return{distance:h,point:G_.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}const k_=new P,X_=new P;class Gp extends qx{constructor(t,n){super(t,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,a=[];for(let o=0,c=n.count;o<c;o+=2)k_.fromBufferAttribute(n,o),X_.fromBufferAttribute(n,o+1),a[o]=o===0?0:a[o-1],a[o+1]=a[o]+k_.distanceTo(X_);t.setAttribute("lineDistance",new Qe(a,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Yx extends Hn{constructor(t,n,a,o,c,u,d,h,m){super(t,n,a,o,c,u,d,h,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class kp extends yn{constructor(t=1,n=1,a=1,o=32,c=1,u=!1,d=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:n,height:a,radialSegments:o,heightSegments:c,openEnded:u,thetaStart:d,thetaLength:h};const m=this;o=Math.floor(o),c=Math.floor(c);const g=[],v=[],_=[],S=[];let E=0;const b=[],M=a/2;let x=0;N(),u===!1&&(t>0&&U(!0),n>0&&U(!1)),this.setIndex(g),this.setAttribute("position",new Qe(v,3)),this.setAttribute("normal",new Qe(_,3)),this.setAttribute("uv",new Qe(S,2));function N(){const T=new P,W=new P;let B=0;const O=(n-t)/a;for(let k=0;k<=c;k++){const D=[],C=k/c,G=C*(n-t)+t;for(let at=0;at<=o;at++){const tt=at/o,ct=tt*h+d,mt=Math.sin(ct),I=Math.cos(ct);W.x=G*mt,W.y=-C*a+M,W.z=G*I,v.push(W.x,W.y,W.z),T.set(mt,O,I).normalize(),_.push(T.x,T.y,T.z),S.push(tt,1-C),D.push(E++)}b.push(D)}for(let k=0;k<o;k++)for(let D=0;D<c;D++){const C=b[D][k],G=b[D+1][k],at=b[D+1][k+1],tt=b[D][k+1];(t>0||D!==0)&&(g.push(C,G,tt),B+=3),(n>0||D!==c-1)&&(g.push(G,at,tt),B+=3)}m.addGroup(x,B,0),x+=B}function U(T){const W=E,B=new re,O=new P;let k=0;const D=T===!0?t:n,C=T===!0?1:-1;for(let at=1;at<=o;at++)v.push(0,M*C,0),_.push(0,C,0),S.push(.5,.5),E++;const G=E;for(let at=0;at<=o;at++){const ct=at/o*h+d,mt=Math.cos(ct),I=Math.sin(ct);O.x=D*I,O.y=M*C,O.z=D*mt,v.push(O.x,O.y,O.z),_.push(0,C,0),B.x=mt*.5+.5,B.y=I*.5*C+.5,S.push(B.x,B.y),E++}for(let at=0;at<o;at++){const tt=W+at,ct=G+at;T===!0?g.push(ct,ct+1,tt):g.push(ct+1,ct,tt),k+=3}m.addGroup(x,k,T===!0?1:2),x+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new kp(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}const su=new P,ru=new P,Th=new P,ou=new si;class Qw extends yn{constructor(t=null,n=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:n},t!==null){const o=Math.pow(10,4),c=Math.cos(kr*n),u=t.getIndex(),d=t.getAttribute("position"),h=u?u.count:d.count,m=[0,0,0],g=["a","b","c"],v=new Array(3),_={},S=[];for(let E=0;E<h;E+=3){u?(m[0]=u.getX(E),m[1]=u.getX(E+1),m[2]=u.getX(E+2)):(m[0]=E,m[1]=E+1,m[2]=E+2);const{a:b,b:M,c:x}=ou;if(b.fromBufferAttribute(d,m[0]),M.fromBufferAttribute(d,m[1]),x.fromBufferAttribute(d,m[2]),ou.getNormal(Th),v[0]=`${Math.round(b.x*o)},${Math.round(b.y*o)},${Math.round(b.z*o)}`,v[1]=`${Math.round(M.x*o)},${Math.round(M.y*o)},${Math.round(M.z*o)}`,v[2]=`${Math.round(x.x*o)},${Math.round(x.y*o)},${Math.round(x.z*o)}`,!(v[0]===v[1]||v[1]===v[2]||v[2]===v[0]))for(let N=0;N<3;N++){const U=(N+1)%3,T=v[N],W=v[U],B=ou[g[N]],O=ou[g[U]],k=`${T}_${W}`,D=`${W}_${T}`;D in _&&_[D]?(Th.dot(_[D].normal)<=c&&(S.push(B.x,B.y,B.z),S.push(O.x,O.y,O.z)),_[D]=null):k in _||(_[k]={index0:m[N],index1:m[U],normal:Th.clone()})}}for(const E in _)if(_[E]){const{index0:b,index1:M}=_[E];su.fromBufferAttribute(d,b),ru.fromBufferAttribute(d,M),S.push(su.x,su.y,su.z),S.push(ru.x,ru.y,ru.z)}this.setAttribute("position",new Qe(S,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}const Jw={triangulate:function(r,t,n=2){const a=t&&t.length,o=a?t[0]*n:r.length;let c=Zx(r,0,o,n,!0);const u=[];if(!c||c.next===c.prev)return u;let d,h,m,g,v,_,S;if(a&&(c=iC(r,t,c,n)),r.length>80*n){d=m=r[0],h=g=r[1];for(let E=n;E<o;E+=n)v=r[E],_=r[E+1],v<d&&(d=v),_<h&&(h=_),v>m&&(m=v),_>g&&(g=_);S=Math.max(m-d,g-h),S=S!==0?32767/S:0}return _l(c,u,n,d,h,S,0),u}};function Zx(r,t,n,a,o){let c,u;if(o===pC(r,t,n,a)>0)for(c=t;c<n;c+=a)u=j_(c,r[c],r[c+1],u);else for(c=n-a;c>=t;c-=a)u=j_(c,r[c],r[c+1],u);return u&&Nu(u,u.next)&&(yl(u),u=u.next),u}function Vs(r,t){if(!r)return r;t||(t=r);let n=r,a;do if(a=!1,!n.steiner&&(Nu(n,n.next)||Je(n.prev,n,n.next)===0)){if(yl(n),n=t=n.prev,n===n.next)break;a=!0}else n=n.next;while(a||n!==t);return t}function _l(r,t,n,a,o,c,u){if(!r)return;!u&&c&&lC(r,a,o,c);let d=r,h,m;for(;r.prev!==r.next;){if(h=r.prev,m=r.next,c?tC(r,a,o,c):$w(r)){t.push(h.i/n|0),t.push(r.i/n|0),t.push(m.i/n|0),yl(r),r=m.next,d=m.next;continue}if(r=m,r===d){u?u===1?(r=eC(Vs(r),t,n),_l(r,t,n,a,o,c,2)):u===2&&nC(r,t,n,a,o,c):_l(Vs(r),t,n,a,o,c,1);break}}}function $w(r){const t=r.prev,n=r,a=r.next;if(Je(t,n,a)>=0)return!1;const o=t.x,c=n.x,u=a.x,d=t.y,h=n.y,m=a.y,g=o<c?o<u?o:u:c<u?c:u,v=d<h?d<m?d:m:h<m?h:m,_=o>c?o>u?o:u:c>u?c:u,S=d>h?d>m?d:m:h>m?h:m;let E=a.next;for(;E!==t;){if(E.x>=g&&E.x<=_&&E.y>=v&&E.y<=S&&Hr(o,d,c,h,u,m,E.x,E.y)&&Je(E.prev,E,E.next)>=0)return!1;E=E.next}return!0}function tC(r,t,n,a){const o=r.prev,c=r,u=r.next;if(Je(o,c,u)>=0)return!1;const d=o.x,h=c.x,m=u.x,g=o.y,v=c.y,_=u.y,S=d<h?d<m?d:m:h<m?h:m,E=g<v?g<_?g:_:v<_?v:_,b=d>h?d>m?d:m:h>m?h:m,M=g>v?g>_?g:_:v>_?v:_,x=Sp(S,E,t,n,a),N=Sp(b,M,t,n,a);let U=r.prevZ,T=r.nextZ;for(;U&&U.z>=x&&T&&T.z<=N;){if(U.x>=S&&U.x<=b&&U.y>=E&&U.y<=M&&U!==o&&U!==u&&Hr(d,g,h,v,m,_,U.x,U.y)&&Je(U.prev,U,U.next)>=0||(U=U.prevZ,T.x>=S&&T.x<=b&&T.y>=E&&T.y<=M&&T!==o&&T!==u&&Hr(d,g,h,v,m,_,T.x,T.y)&&Je(T.prev,T,T.next)>=0))return!1;T=T.nextZ}for(;U&&U.z>=x;){if(U.x>=S&&U.x<=b&&U.y>=E&&U.y<=M&&U!==o&&U!==u&&Hr(d,g,h,v,m,_,U.x,U.y)&&Je(U.prev,U,U.next)>=0)return!1;U=U.prevZ}for(;T&&T.z<=N;){if(T.x>=S&&T.x<=b&&T.y>=E&&T.y<=M&&T!==o&&T!==u&&Hr(d,g,h,v,m,_,T.x,T.y)&&Je(T.prev,T,T.next)>=0)return!1;T=T.nextZ}return!0}function eC(r,t,n){let a=r;do{const o=a.prev,c=a.next.next;!Nu(o,c)&&Kx(o,a,a.next,c)&&xl(o,c)&&xl(c,o)&&(t.push(o.i/n|0),t.push(a.i/n|0),t.push(c.i/n|0),yl(a),yl(a.next),a=r=c),a=a.next}while(a!==r);return Vs(a)}function nC(r,t,n,a,o,c){let u=r;do{let d=u.next.next;for(;d!==u.prev;){if(u.i!==d.i&&fC(u,d)){let h=Qx(u,d);u=Vs(u,u.next),h=Vs(h,h.next),_l(u,t,n,a,o,c,0),_l(h,t,n,a,o,c,0);return}d=d.next}u=u.next}while(u!==r)}function iC(r,t,n,a){const o=[];let c,u,d,h,m;for(c=0,u=t.length;c<u;c++)d=t[c]*a,h=c<u-1?t[c+1]*a:r.length,m=Zx(r,d,h,a,!1),m===m.next&&(m.steiner=!0),o.push(uC(m));for(o.sort(aC),c=0;c<o.length;c++)n=sC(o[c],n);return n}function aC(r,t){return r.x-t.x}function sC(r,t){const n=rC(r,t);if(!n)return t;const a=Qx(n,r);return Vs(a,a.next),Vs(n,n.next)}function rC(r,t){let n=t,a=-1/0,o;const c=r.x,u=r.y;do{if(u<=n.y&&u>=n.next.y&&n.next.y!==n.y){const _=n.x+(u-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(_<=c&&_>a&&(a=_,o=n.x<n.next.x?n:n.next,_===c))return o}n=n.next}while(n!==t);if(!o)return null;const d=o,h=o.x,m=o.y;let g=1/0,v;n=o;do c>=n.x&&n.x>=h&&c!==n.x&&Hr(u<m?c:a,u,h,m,u<m?a:c,u,n.x,n.y)&&(v=Math.abs(u-n.y)/(c-n.x),xl(n,r)&&(v<g||v===g&&(n.x>o.x||n.x===o.x&&oC(o,n)))&&(o=n,g=v)),n=n.next;while(n!==d);return o}function oC(r,t){return Je(r.prev,r,t.prev)<0&&Je(t.next,r,r.next)<0}function lC(r,t,n,a){let o=r;do o.z===0&&(o.z=Sp(o.x,o.y,t,n,a)),o.prevZ=o.prev,o.nextZ=o.next,o=o.next;while(o!==r);o.prevZ.nextZ=null,o.prevZ=null,cC(o)}function cC(r){let t,n,a,o,c,u,d,h,m=1;do{for(n=r,r=null,c=null,u=0;n;){for(u++,a=n,d=0,t=0;t<m&&(d++,a=a.nextZ,!!a);t++);for(h=m;d>0||h>0&&a;)d!==0&&(h===0||!a||n.z<=a.z)?(o=n,n=n.nextZ,d--):(o=a,a=a.nextZ,h--),c?c.nextZ=o:r=o,o.prevZ=c,c=o;n=a}c.nextZ=null,m*=2}while(u>1);return r}function Sp(r,t,n,a,o){return r=(r-n)*o|0,t=(t-a)*o|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function uC(r){let t=r,n=r;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==r);return n}function Hr(r,t,n,a,o,c,u,d){return(o-u)*(t-d)>=(r-u)*(c-d)&&(r-u)*(a-d)>=(n-u)*(t-d)&&(n-u)*(c-d)>=(o-u)*(a-d)}function fC(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!dC(r,t)&&(xl(r,t)&&xl(t,r)&&hC(r,t)&&(Je(r.prev,r,t.prev)||Je(r,t.prev,t))||Nu(r,t)&&Je(r.prev,r,r.next)>0&&Je(t.prev,t,t.next)>0)}function Je(r,t,n){return(t.y-r.y)*(n.x-t.x)-(t.x-r.x)*(n.y-t.y)}function Nu(r,t){return r.x===t.x&&r.y===t.y}function Kx(r,t,n,a){const o=cu(Je(r,t,n)),c=cu(Je(r,t,a)),u=cu(Je(n,a,r)),d=cu(Je(n,a,t));return!!(o!==c&&u!==d||o===0&&lu(r,n,t)||c===0&&lu(r,a,t)||u===0&&lu(n,r,a)||d===0&&lu(n,t,a))}function lu(r,t,n){return t.x<=Math.max(r.x,n.x)&&t.x>=Math.min(r.x,n.x)&&t.y<=Math.max(r.y,n.y)&&t.y>=Math.min(r.y,n.y)}function cu(r){return r>0?1:r<0?-1:0}function dC(r,t){let n=r;do{if(n.i!==r.i&&n.next.i!==r.i&&n.i!==t.i&&n.next.i!==t.i&&Kx(n,n.next,r,t))return!0;n=n.next}while(n!==r);return!1}function xl(r,t){return Je(r.prev,r,r.next)<0?Je(r,t,r.next)>=0&&Je(r,r.prev,t)>=0:Je(r,t,r.prev)<0||Je(r,r.next,t)<0}function hC(r,t){let n=r,a=!1;const o=(r.x+t.x)/2,c=(r.y+t.y)/2;do n.y>c!=n.next.y>c&&n.next.y!==n.y&&o<(n.next.x-n.x)*(c-n.y)/(n.next.y-n.y)+n.x&&(a=!a),n=n.next;while(n!==r);return a}function Qx(r,t){const n=new Mp(r.i,r.x,r.y),a=new Mp(t.i,t.x,t.y),o=r.next,c=t.prev;return r.next=t,t.prev=r,n.next=o,o.prev=n,a.next=n,n.prev=a,c.next=a,a.prev=c,a}function j_(r,t,n,a){const o=new Mp(r,t,n);return a?(o.next=a.next,o.prev=a,a.next.prev=o,a.next=o):(o.prev=o,o.next=o),o}function yl(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Mp(r,t,n){this.i=r,this.x=t,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function pC(r,t,n,a){let o=0;for(let c=t,u=n-a;c<n;c+=a)o+=(r[u]-r[c])*(r[c+1]+r[u+1]),u=c;return o}class Ou{static area(t){const n=t.length;let a=0;for(let o=n-1,c=0;c<n;o=c++)a+=t[o].x*t[c].y-t[c].x*t[o].y;return a*.5}static isClockWise(t){return Ou.area(t)<0}static triangulateShape(t,n){const a=[],o=[],c=[];W_(t),q_(a,t);let u=t.length;n.forEach(W_);for(let h=0;h<n.length;h++)o.push(u),u+=n[h].length,q_(a,n[h]);const d=Jw.triangulate(a,o);for(let h=0;h<d.length;h+=3)c.push(d.slice(h,h+3));return c}}function W_(r){const t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function q_(r,t){for(let n=0;n<t.length;n++)r.push(t[n].x),r.push(t[n].y)}class Xp extends yn{constructor(t=1,n=32,a=16,o=0,c=Math.PI*2,u=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:a,phiStart:o,phiLength:c,thetaStart:u,thetaLength:d},n=Math.max(3,Math.floor(n)),a=Math.max(2,Math.floor(a));const h=Math.min(u+d,Math.PI);let m=0;const g=[],v=new P,_=new P,S=[],E=[],b=[],M=[];for(let x=0;x<=a;x++){const N=[],U=x/a;let T=0;x===0&&u===0?T=.5/n:x===a&&h===Math.PI&&(T=-.5/n);for(let W=0;W<=n;W++){const B=W/n;v.x=-t*Math.cos(o+B*c)*Math.sin(u+U*d),v.y=t*Math.cos(u+U*d),v.z=t*Math.sin(o+B*c)*Math.sin(u+U*d),E.push(v.x,v.y,v.z),_.copy(v).normalize(),b.push(_.x,_.y,_.z),M.push(B+T,1-U),N.push(m++)}g.push(N)}for(let x=0;x<a;x++)for(let N=0;N<n;N++){const U=g[x][N+1],T=g[x][N],W=g[x+1][N],B=g[x+1][N+1];(x!==0||u>0)&&S.push(U,T,B),(x!==a-1||h<Math.PI)&&S.push(T,W,B)}this.setIndex(S),this.setAttribute("position",new Qe(E,3)),this.setAttribute("normal",new Qe(b,3)),this.setAttribute("uv",new Qe(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xp(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class mC extends yn{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const n=[],a=new Set,o=new P,c=new P;if(t.index!==null){const u=t.attributes.position,d=t.index;let h=t.groups;h.length===0&&(h=[{start:0,count:d.count,materialIndex:0}]);for(let m=0,g=h.length;m<g;++m){const v=h[m],_=v.start,S=v.count;for(let E=_,b=_+S;E<b;E+=3)for(let M=0;M<3;M++){const x=d.getX(E+M),N=d.getX(E+(M+1)%3);o.fromBufferAttribute(u,x),c.fromBufferAttribute(u,N),Y_(o,c,a)===!0&&(n.push(o.x,o.y,o.z),n.push(c.x,c.y,c.z))}}}else{const u=t.attributes.position;for(let d=0,h=u.count/3;d<h;d++)for(let m=0;m<3;m++){const g=3*d+m,v=3*d+(m+1)%3;o.fromBufferAttribute(u,g),c.fromBufferAttribute(u,v),Y_(o,c,a)===!0&&(n.push(o.x,o.y,o.z),n.push(c.x,c.y,c.z))}}this.setAttribute("position",new Qe(n,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function Y_(r,t,n){const a=`${r.x},${r.y},${r.z}-${t.x},${t.y},${t.z}`,o=`${t.x},${t.y},${t.z}-${r.x},${r.y},${r.z}`;return n.has(a)===!0||n.has(o)===!0?!1:(n.add(a),n.add(o),!0)}class gC extends Ml{static get type(){return"LineDashedMaterial"}constructor(t){super(),this.isLineDashedMaterial=!0,this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}class Jx extends pn{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new ve(t),this.intensity=n}dispose(){}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const Ah=new We,Z_=new P,K_=new P;class vC{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new re(512,512),this.map=null,this.mapPass=null,this.matrix=new We,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fp,this._frameExtents=new re(1,1),this._viewportCount=1,this._viewports=[new je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,a=this.matrix;Z_.setFromMatrixPosition(t.matrixWorld),n.position.copy(Z_),K_.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(K_),n.updateMatrixWorld(),Ah.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ah),a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(Ah)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class _C extends vC{constructor(){super(new Hp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class xC extends Jx{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pn.DEFAULT_UP),this.updateMatrix(),this.target=new pn,this.shadow=new _C}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class yC extends Jx{constructor(t,n){super(t,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class SC extends yn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}class Ep extends Xx{constructor(t,n,a=1){super(t,n),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=a}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){const n=super.clone(t);return n.meshPerAttribute=this.meshPerAttribute,n}toJSON(t){const n=super.toJSON(t);return n.isInstancedInterleavedBuffer=!0,n.meshPerAttribute=this.meshPerAttribute,n}}const Q_=new We;class $x{constructor(t,n,a=0,o=1/0){this.ray=new Pp(t,n),this.near=a,this.far=o,this.camera=null,this.layers=new Bp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,n){this.ray.set(t,n)}setFromCamera(t,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(t){return Q_.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Q_),this}intersectObject(t,n=!0,a=[]){return bp(t,this,a,n),a.sort(J_),a}intersectObjects(t,n=!0,a=[]){for(let o=0,c=t.length;o<c;o++)bp(t[o],this,a,n);return a.sort(J_),a}}function J_(r,t){return r.distance-t.distance}function bp(r,t,n,a){let o=!0;if(r.layers.test(t.layers)&&r.raycast(t,n)===!1&&(o=!1),o===!0&&a===!0){const c=r.children;for(let u=0,d=c.length;u<d;u++)bp(c[u],t,n,!0)}}const $_=new P,uu=new P;class MC{constructor(t=new P,n=new P){this.start=t,this.end=n}set(t,n){return this.start.copy(t),this.end.copy(n),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,n){return this.delta(n).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,n){$_.subVectors(t,this.start),uu.subVectors(this.end,this.start);const a=uu.dot(uu);let c=uu.dot($_)/a;return n&&(c=Pn(c,0,1)),c}closestPointToPoint(t,n,a){const o=this.closestPointToPointParameter(t,n);return this.delta(a).multiplyScalar(o).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class EC extends Gp{constructor(t=10,n=10,a=4473924,o=8947848){a=new ve(a),o=new ve(o);const c=n/2,u=t/n,d=t/2,h=[],m=[];for(let _=0,S=0,E=-d;_<=n;_++,E+=u){h.push(-d,0,E,d,0,E),h.push(E,0,-d,E,0,d);const b=_===c?a:o;b.toArray(m,S),S+=3,b.toArray(m,S),S+=3,b.toArray(m,S),S+=3,b.toArray(m,S),S+=3}const g=new yn;g.setAttribute("position",new Qe(h,3)),g.setAttribute("color",new Qe(m,3));const v=new Ml({vertexColors:!0,toneMapped:!1});super(g,v),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const tx=new P;let fu,wh;class bC extends pn{constructor(t=new P(0,0,1),n=new P(0,0,0),a=1,o=16776960,c=a*.2,u=c*.2){super(),this.type="ArrowHelper",fu===void 0&&(fu=new yn,fu.setAttribute("position",new Qe([0,0,0,0,1,0],3)),wh=new kp(0,.5,1,5,1),wh.translate(0,-.5,0)),this.position.copy(n),this.line=new qx(fu,new Ml({color:o,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new ri(wh,new vl({color:o,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(a,c,u)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{tx.set(t.z,0,-t.x).normalize();const n=Math.acos(t.y);this.quaternion.setFromAxisAngle(tx,n)}}setLength(t,n=t*.2,a=n*.2){this.line.scale.set(1,Math.max(1e-4,t-n),1),this.line.updateMatrix(),this.cone.scale.set(a,n,a),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class TC extends Gp{constructor(t=1){const n=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],a=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],o=new yn;o.setAttribute("position",new Qe(n,3)),o.setAttribute("color",new Qe(a,3));const c=new Ml({vertexColors:!0,toneMapped:!1});super(o,c),this.type="AxesHelper"}setColors(t,n,a){const o=new ve,c=this.geometry.attributes.color.array;return o.set(t),o.toArray(c,0),o.toArray(c,3),o.set(n),o.toArray(c,6),o.toArray(c,9),o.set(a),o.toArray(c,12),o.toArray(c,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Cp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Cp);const AC={orbitSensitivity:5,panSensitivity:6,zoomSensitivity:10,rightClickDragThresholdPixels:4};class wC{constructor(t,n,a={}){Zt(this,"camera");Zt(this,"domElement");Zt(this,"config");Zt(this,"target",new P(.5,.5,.5));Zt(this,"isOrbiting",!1);Zt(this,"isPanning",!1);Zt(this,"isLeftMousePending",!1);Zt(this,"orbitStartMouse",{x:0,y:0});Zt(this,"orbitDistanceMoved",0);Zt(this,"onLeftClick");Zt(this,"onRightClick");Zt(this,"preventContextMenu",t=>t.preventDefault());Zt(this,"onMouseDown",t=>{t.button===0?(this.isLeftMousePending=!0,this.orbitStartMouse={x:t.clientX,y:t.clientY},this.orbitDistanceMoved=0,t.preventDefault()):t.button===1?(this.isPanning=!0,t.preventDefault()):t.button===2&&t.preventDefault()});Zt(this,"onMouseMove",t=>{if(!((this.isLeftMousePending||this.isOrbiting)&&(t.buttons&1)===0)&&!(this.isPanning&&(t.buttons&4)===0)){if(this.isLeftMousePending){const n=t.clientX-this.orbitStartMouse.x,a=t.clientY-this.orbitStartMouse.y;this.orbitDistanceMoved=Math.hypot(n,a),this.orbitDistanceMoved>=this.config.rightClickDragThresholdPixels&&(this.isLeftMousePending=!1,this.isOrbiting=!0)}if(this.isOrbiting){const n=t.movementX,a=t.movementY;this.orbitDistanceMoved+=Math.abs(n)+Math.abs(a);const o=new P().copy(this.camera.position).sub(this.target),c=this.config.orbitSensitivity*.001,u=new Hs().setFromAxisAngle(new P(0,1,0),-n*c);o.applyQuaternion(u);const d=new P().crossVectors(this.camera.up,o).normalize(),h=new Hs().setFromAxisAngle(d,-a*c),m=o.clone().applyQuaternion(h);m.y>-o.length()*.99&&m.y<o.length()*.99&&o.copy(m),this.camera.position.copy(this.target).add(o),this.camera.lookAt(this.target)}else if(this.isPanning){const n=t.movementX,a=t.movementY,o=new P().copy(this.camera.position).sub(this.target),c=o.length(),u=new P().crossVectors(this.camera.up,o).normalize(),d=new P().crossVectors(o,u).normalize(),h=this.config.panSensitivity*1e-4*c,m=u.multiplyScalar(-n*h),g=d.multiplyScalar(a*h);this.camera.position.add(m).add(g),this.target.add(m).add(g)}}});Zt(this,"onMouseUp",t=>{t.button===0&&this.isLeftMousePending?(this.isLeftMousePending=!1,this.onLeftClick&&this.onLeftClick(t)):t.button===0&&this.isOrbiting?this.isOrbiting=!1:t.button===1&&this.isPanning?this.isPanning=!1:t.button===2&&this.onRightClick&&this.onRightClick(t)});Zt(this,"onWheel",t=>{t.preventDefault();const n=new P().copy(this.camera.position).sub(this.target);n.length();const a=t.deltaY>0?1:-1,o=this.config.zoomSensitivity*.01,c=1+a*o;n.multiplyScalar(c),n.length()<.1&&n.setLength(.1),this.camera.position.copy(this.target).add(n)});this.camera=t,this.domElement=n,this.config={...AC,...a},this.camera.lookAt(this.target),this.domElement.addEventListener("mousedown",this.onMouseDown),window.addEventListener("mousemove",this.onMouseMove),window.addEventListener("mouseup",this.onMouseUp),this.domElement.addEventListener("wheel",this.onWheel,{passive:!1}),this.domElement.addEventListener("contextmenu",this.preventContextMenu)}updateConfig(t){this.config={...this.config,...t}}setTarget(t){this.target.copy(t),this.camera.lookAt(this.target)}dispose(){this.domElement.removeEventListener("mousedown",this.onMouseDown),window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("mouseup",this.onMouseUp),this.domElement.removeEventListener("wheel",this.onWheel),this.domElement.removeEventListener("contextmenu",this.preventContextMenu)}update(){}}const Hi={orbitSensitivity:5,panSensitivity:6,zoomSensitivity:10,rightClickDragThresholdPixels:4,faceColor:"#1ea4a2",uvScale:5,vertexRadius:.04,vertexColorNormal:"#ffff00",vertexColorHover:"#ffffee",vertexColorSelected:"#ffaa00",normalLineThickness:2,normalLineColor:"#00ff00",createFaceLineThickness:3,createFaceLineColor:"#ffff00",modelVoxelColor:"#6aa7ff",modelGridColor:"#58606b"};function jp(){return{version:"1.0.0",language:"zh-CN",title:"未命名图形",block:null,preferences:Hi,currentTool:"view",selectedVertices:[],selectedFaceId:null,selected:null,lineAnnotations:[],viewport:{elementScale:1.5},labelCounters:{point:0,line:0,face:0}}}const ex=new rs,du=new P;class ty extends SC{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],n=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],a=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(a),this.setAttribute("position",new Qe(t,3)),this.setAttribute("uv",new Qe(n,2))}applyMatrix4(t){const n=this.attributes.instanceStart,a=this.attributes.instanceEnd;return n!==void 0&&(n.applyMatrix4(t),a.applyMatrix4(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let n;t instanceof Float32Array?n=t:Array.isArray(t)&&(n=new Float32Array(t));const a=new Ep(n,6,1);return this.setAttribute("instanceStart",new Xi(a,3,0)),this.setAttribute("instanceEnd",new Xi(a,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let n;t instanceof Float32Array?n=t:Array.isArray(t)&&(n=new Float32Array(t));const a=new Ep(n,6,1);return this.setAttribute("instanceColorStart",new Xi(a,3,0)),this.setAttribute("instanceColorEnd",new Xi(a,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new mC(t.geometry)),this}fromLineSegments(t){const n=t.geometry;return this.setPositions(n.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rs);const t=this.attributes.instanceStart,n=this.attributes.instanceEnd;t!==void 0&&n!==void 0&&(this.boundingBox.setFromBufferAttribute(t),ex.setFromBufferAttribute(n),this.boundingBox.union(ex))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new eo),this.boundingBox===null&&this.computeBoundingBox();const t=this.attributes.instanceStart,n=this.attributes.instanceEnd;if(t!==void 0&&n!==void 0){const a=this.boundingSphere.center;this.boundingBox.getCenter(a);let o=0;for(let c=0,u=t.count;c<u;c++)du.fromBufferAttribute(t,c),o=Math.max(o,a.distanceToSquared(du)),du.fromBufferAttribute(n,c),o=Math.max(o,a.distanceToSquared(du));this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(t){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(t)}}Rt.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new re(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Yn.line={uniforms:Ip.merge([Rt.common,Rt.fog,Rt.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class wu extends ba{static get type(){return"LineMaterial"}constructor(t){super({uniforms:Ip.clone(Yn.line.uniforms),vertexShader:Yn.line.vertexShader,fragmentShader:Yn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const Ch=new je,nx=new P,ix=new P,Cn=new je,Rn=new je,Ii=new je,Rh=new P,Dh=new We,Dn=new MC,ax=new P,hu=new rs,pu=new eo,Fi=new je;let Gi,Bs;function sx(r,t,n){return Fi.set(0,0,-t,1).applyMatrix4(r.projectionMatrix),Fi.multiplyScalar(1/Fi.w),Fi.x=Bs/n.width,Fi.y=Bs/n.height,Fi.applyMatrix4(r.projectionMatrixInverse),Fi.multiplyScalar(1/Fi.w),Math.abs(Math.max(Fi.x,Fi.y))}function CC(r,t){const n=r.matrixWorld,a=r.geometry,o=a.attributes.instanceStart,c=a.attributes.instanceEnd,u=Math.min(a.instanceCount,o.count);for(let d=0,h=u;d<h;d++){Dn.start.fromBufferAttribute(o,d),Dn.end.fromBufferAttribute(c,d),Dn.applyMatrix4(n);const m=new P,g=new P;Gi.distanceSqToSegment(Dn.start,Dn.end,g,m),g.distanceTo(m)<Bs*.5&&t.push({point:g,pointOnLine:m,distance:Gi.origin.distanceTo(g),object:r,face:null,faceIndex:d,uv:null,uv1:null})}}function RC(r,t,n){const a=t.projectionMatrix,c=r.material.resolution,u=r.matrixWorld,d=r.geometry,h=d.attributes.instanceStart,m=d.attributes.instanceEnd,g=Math.min(d.instanceCount,h.count),v=-t.near;Gi.at(1,Ii),Ii.w=1,Ii.applyMatrix4(t.matrixWorldInverse),Ii.applyMatrix4(a),Ii.multiplyScalar(1/Ii.w),Ii.x*=c.x/2,Ii.y*=c.y/2,Ii.z=0,Rh.copy(Ii),Dh.multiplyMatrices(t.matrixWorldInverse,u);for(let _=0,S=g;_<S;_++){if(Cn.fromBufferAttribute(h,_),Rn.fromBufferAttribute(m,_),Cn.w=1,Rn.w=1,Cn.applyMatrix4(Dh),Rn.applyMatrix4(Dh),Cn.z>v&&Rn.z>v)continue;if(Cn.z>v){const U=Cn.z-Rn.z,T=(Cn.z-v)/U;Cn.lerp(Rn,T)}else if(Rn.z>v){const U=Rn.z-Cn.z,T=(Rn.z-v)/U;Rn.lerp(Cn,T)}Cn.applyMatrix4(a),Rn.applyMatrix4(a),Cn.multiplyScalar(1/Cn.w),Rn.multiplyScalar(1/Rn.w),Cn.x*=c.x/2,Cn.y*=c.y/2,Rn.x*=c.x/2,Rn.y*=c.y/2,Dn.start.copy(Cn),Dn.start.z=0,Dn.end.copy(Rn),Dn.end.z=0;const b=Dn.closestPointToPointParameter(Rh,!0);Dn.at(b,ax);const M=BE.lerp(Cn.z,Rn.z,b),x=M>=-1&&M<=1,N=Rh.distanceTo(ax)<Bs*.5;if(x&&N){Dn.start.fromBufferAttribute(h,_),Dn.end.fromBufferAttribute(m,_),Dn.start.applyMatrix4(u),Dn.end.applyMatrix4(u);const U=new P,T=new P;Gi.distanceSqToSegment(Dn.start,Dn.end,T,U),n.push({point:T,pointOnLine:U,distance:Gi.origin.distanceTo(T),object:r,face:null,faceIndex:_,uv:null,uv1:null})}}}class DC extends ri{constructor(t=new ty,n=new wu({color:Math.random()*16777215})){super(t,n),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const t=this.geometry,n=t.attributes.instanceStart,a=t.attributes.instanceEnd,o=new Float32Array(2*n.count);for(let u=0,d=0,h=n.count;u<h;u++,d+=2)nx.fromBufferAttribute(n,u),ix.fromBufferAttribute(a,u),o[d]=d===0?0:o[d-1],o[d+1]=o[d]+nx.distanceTo(ix);const c=new Ep(o,2,1);return t.setAttribute("instanceDistanceStart",new Xi(c,1,0)),t.setAttribute("instanceDistanceEnd",new Xi(c,1,1)),this}raycast(t,n){const a=this.material.worldUnits,o=t.camera;o===null&&!a&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const c=t.params.Line2!==void 0&&t.params.Line2.threshold||0;Gi=t.ray;const u=this.matrixWorld,d=this.geometry,h=this.material;Bs=h.linewidth+c,d.boundingSphere===null&&d.computeBoundingSphere(),pu.copy(d.boundingSphere).applyMatrix4(u);let m;if(a)m=Bs*.5;else{const v=Math.max(o.near,pu.distanceToPoint(Gi.origin));m=sx(o,v,h.resolution)}if(pu.radius+=m,Gi.intersectsSphere(pu)===!1)return;d.boundingBox===null&&d.computeBoundingBox(),hu.copy(d.boundingBox).applyMatrix4(u);let g;if(a)g=Bs*.5;else{const v=Math.max(o.near,hu.distanceToPoint(Gi.origin));g=sx(o,v,h.resolution)}hu.expandByScalar(g),Gi.intersectsBox(hu)!==!1&&(a?CC(this,n):RC(this,o,n))}onBeforeRender(t){const n=this.material.uniforms;n&&n.resolution&&(t.getViewport(Ch),this.material.uniforms.resolution.value.set(Ch.z,Ch.w))}}class Tp extends ty{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(t){const n=t.length-3,a=new Float32Array(2*n);for(let o=0;o<n;o+=3)a[2*o]=t[o],a[2*o+1]=t[o+1],a[2*o+2]=t[o+2],a[2*o+3]=t[o+3],a[2*o+4]=t[o+4],a[2*o+5]=t[o+5];return super.setPositions(a),this}setColors(t){const n=t.length-3,a=new Float32Array(2*n);for(let o=0;o<n;o+=3)a[2*o]=t[o],a[2*o+1]=t[o+1],a[2*o+2]=t[o+2],a[2*o+3]=t[o+3],a[2*o+4]=t[o+4],a[2*o+5]=t[o+5];return super.setColors(a),this}fromLine(t){const n=t.geometry;return this.setPositions(n.attributes.position.array),this}}class Uh extends DC{constructor(t=new Tp,n=new wu({color:Math.random()*16777215})){super(t,n),this.isLine2=!0,this.type="Line2"}}function UC(){const r=document.createElement("canvas");r.width=256,r.height=256;const t=r.getContext("2d");t.fillStyle="#b0b0b0",t.fillRect(0,0,256,256),t.fillStyle="#ffffff",t.fillRect(0,0,128,128),t.fillRect(128,128,128,128);const n=new Yx(r);return n.wrapS=pl,n.wrapT=pl,n.magFilter=Si,n}class LC{constructor(t){Zt(this,"scene");Zt(this,"blockGroup");Zt(this,"vertexMeshes",new Map);Zt(this,"faceMeshes",new Map);Zt(this,"defaultPreviewMaterial");Zt(this,"normalArrow");Zt(this,"hoverVertexId",null);Zt(this,"hoverFaceId",null);Zt(this,"selectedVertices",[]);Zt(this,"selectedFaceId",null);Zt(this,"currentPrefs",Hi);Zt(this,"resolution",new re(window.innerWidth,window.innerHeight));Zt(this,"toolEdgeMeshes",[]);Zt(this,"normalEdgeMeshes",[]);Zt(this,"cursorBox",null);Zt(this,"toolHoverEdgeId",null);this.scene=t,this.blockGroup=new fl,this.scene.add(this.blockGroup);const n=UC();this.defaultPreviewMaterial=new vl({map:n,side:Vi}),this.normalArrow=new bC(new P(0,1,0),new P,.3,43775,.08,.04),this.normalArrow.visible=!1,this.normalArrow.renderOrder=20,this.scene.add(this.normalArrow)}setResolution(t,n){this.resolution.set(t,n),this.blockGroup.traverse(a=>{a instanceof Uh&&a.material.resolution.copy(this.resolution)})}updateBlock(t,n){if(this.currentPrefs=n,this.vertexMeshes.forEach(h=>this.blockGroup.remove(h)),this.faceMeshes.forEach(h=>this.blockGroup.remove(h)),this.normalEdgeMeshes.forEach(h=>{h.mesh.material.dispose(),h.mesh.geometry.dispose(),this.blockGroup.remove(h.mesh)}),this.vertexMeshes.clear(),this.faceMeshes.clear(),this.normalEdgeMeshes=[],this.normalArrow.visible=!1,!t)return;const a=t.size.width/2,o=t.size.height/2,c=t.size.depth/2,u=new Xp(n.vertexRadius,8,8),d=new vl({color:n.vertexColorNormal,depthTest:!0,depthWrite:!1});t.vertices.forEach(h=>{const m=new ri(u,d.clone());m.position.set(h.position[0]-a,h.position[1]-o,h.position[2]-c),m.userData={id:h.id,type:"vertex"},m.renderOrder=10,m.visible=!0,this.blockGroup.add(m),this.vertexMeshes.set(h.id,m)}),t.faces.forEach(h=>{if(h.vertexIds.length>=3){const m=[],g=new Float32Array(h.vertexIds.length*3);h.vertexIds.forEach((B,O)=>{const k=t.vertices.find(D=>D.id===B);if(k){const D=new P(k.position[0]-a,k.position[1]-o,k.position[2]-c);m.push(D),g[O*3]=D.x,g[O*3+1]=D.y,g[O*3+2]=D.z}});let v=new P;for(let B=0;B<m.length;B++){let O=m[B],k=m[(B+1)%m.length];v.x+=(O.y-k.y)*(O.z+k.z),v.y+=(O.z-k.z)*(O.x+k.x),v.z+=(O.x-k.x)*(O.y+k.y)}v.normalize();let _=new P(0,1,0);Math.abs(v.y)>.99&&(_=new P(1,0,0));const S=new P().crossVectors(_,v).normalize(),E=new P().crossVectors(v,S).normalize(),b=m.map(B=>new re(B.dot(S),B.dot(E))),M=Ou.triangulateShape(b,[]),x=[];for(let B=0;B<M.length;B++)x.push(M[B][0],M[B][1],M[B][2]);const N=new Float32Array(m.length*2);b.forEach((B,O)=>{N[O*2]=B.x*n.uvScale,N[O*2+1]=B.y*n.uvScale});const U=new yn;U.setAttribute("position",new oi(g,3)),U.setAttribute("uv",new oi(N,2)),U.setIndex(x),U.computeVertexNormals();const T=this.defaultPreviewMaterial.clone();T.color.set(n.faceColor);const W=new ri(U,T);if(W.userData={id:h.id,type:"face"},W.renderOrder=1,n.normalLineThickness>0)for(let B=0;B<h.vertexIds.length;B++){const O=h.vertexIds[B],k=h.vertexIds[(B+1)%h.vertexIds.length],D=t.vertices.find(ct=>ct.id===O),C=t.vertices.find(ct=>ct.id===k);if(!D||!C)continue;const G=new Tp;G.setPositions([D.position[0]-a,D.position[1]-o,D.position[2]-c,C.position[0]-a,C.position[1]-o,C.position[2]-c]);const at=new wu({color:new ve(n.normalLineColor).getHex(),linewidth:n.normalLineThickness,resolution:this.resolution}),tt=new Uh(G,at);tt.computeLineDistances(),tt.renderOrder=3,W.add(tt),this.normalEdgeMeshes.push({mesh:tt,v1:O,v2:k})}this.blockGroup.add(W),this.faceMeshes.set(h.id,W)}}),this.applyVisualStates()}updateFaceToolState(t,n,a,o,c){if(this.toolEdgeMeshes.forEach(v=>{v.material.dispose(),v.geometry.dispose(),this.blockGroup.remove(v)}),this.toolEdgeMeshes=[],this.cursorBox&&(this.blockGroup.remove(this.cursorBox),this.cursorBox=null),this.toolHoverEdgeId=a,!c)return;const u=c.size.width/2,d=c.size.height/2,h=c.size.depth/2,m=new Set;n.forEach(v=>{m.add(`${v.v1}-${v.v2}`),m.add(`${v.v2}-${v.v1}`);const _=c.vertices.find(E=>E.id===v.v1),S=c.vertices.find(E=>E.id===v.v2);if(_&&S){const E=new Tp;E.setPositions([_.position[0]-u,_.position[1]-d,_.position[2]-h,S.position[0]-u,S.position[1]-d,S.position[2]-h]);const b=a===v.id?16711680:new ve(this.currentPrefs.createFaceLineColor).getHex(),M=new wu({color:b,linewidth:this.currentPrefs.createFaceLineThickness||2,resolution:this.resolution}),x=new Uh(E,M);x.computeLineDistances(),x.userData={id:v.id,type:"toolEdge"},x.renderOrder=15,this.blockGroup.add(x),this.toolEdgeMeshes.push(x)}});const g=n.length>0;if(this.normalEdgeMeshes.forEach(v=>{v.mesh.visible=!g}),t){const v=c.vertices.find(_=>_.id===t);if(v){const _=this.currentPrefs.vertexRadius*3,S=new io(_,_,_),E=new Qw(S),b=new gC({color:16765952,dashSize:_/4,gapSize:_/4}),M=new Gp(E,b);M.computeLineDistances(),M.position.set(v.position[0]-u,v.position[1]-d,v.position[2]-h),this.blockGroup.add(M),this.cursorBox=M}}this.vertexMeshes.forEach((v,_)=>{v.visible=!o.has(_)})}setHover(t,n){this.hoverVertexId=t,this.hoverFaceId=n,this.applyVisualStates()}updateSelection(t,n,a){this.selectedVertices=t,this.selectedFaceId=n,this.currentPrefs=a,this.applyVisualStates()}applyVisualStates(){const t=this.currentPrefs;this.vertexMeshes.forEach((n,a)=>{const o=n.material,c=this.selectedVertices.includes(a),u=this.hoverVertexId===a;c&&u?o.color.set(t.vertexColorSelected).lerp(new ve(16777215),.5):c?o.color.set(t.vertexColorSelected):u?o.color.set(t.vertexColorHover):o.color.set(t.vertexColorNormal),n.scale.setScalar(1),c&&n.scale.setScalar(1.2)}),this.faceMeshes.forEach((n,a)=>{const o=n.material,c=this.selectedFaceId===a,u=this.hoverFaceId===a,d=new ve(t.faceColor);c?o.color.setHex(16755200):u?o.color.copy(d).lerp(new ve(16777215),.3):o.color.copy(d),c&&(NC(n.geometry,n.position,this.normalArrow),this.normalArrow.visible=!0)}),this.selectedFaceId||(this.normalArrow.visible=!1)}}function NC(r,t,n){const a=r.getAttribute("position");if(!a||a.count<3)return;let o=new P;for(let u=0;u<a.count;u++){let d=new P().fromBufferAttribute(a,u),h=new P().fromBufferAttribute(a,(u+1)%a.count);o.x+=(d.y-h.y)*(d.z+h.z),o.y+=(d.z-h.z)*(d.x+h.x),o.z+=(d.x-h.x)*(d.y+h.y)}o.normalize();let c=new P;for(let u=0;u<a.count;u++)c.add(new P().fromBufferAttribute(a,u));c.divideScalar(a.count),c.add(t),n.position.copy(c),n.setDirection(o)}const sn=1e-5,rx=12;function Ap(r){let t=new P;for(let n=0;n<r.length;n++){let a=r[n],o=r[(n+1)%r.length];t.x+=(a.y-o.y)*(a.z+o.z),t.y+=(a.z-o.z)*(a.x+o.x),t.z+=(a.x-o.x)*(a.y+o.y)}return t.normalize()}function mu(r,t){return`${r}->${t}`}function ji(r,t){const n=r.get(t);return n?new P(...n.position):null}function ey(r,t){return t.map(n=>ji(r,n)).filter(Boolean)}function OC(r,t,n){const a=new P().subVectors(n,t),o=a.lengthSq();if(o<sn*sn)return null;const c=new P().subVectors(r,t).dot(a)/o;return c<-sn||c>1+sn||t.clone().add(a.multiplyScalar(c)).distanceToSquared(r)>sn*sn?null:Math.min(1,Math.max(0,c))}function zC(r,t){let n=null;for(const u of r){const d=ey(t,u);if(d.length<3)continue;const h=Ap(d);if(h.lengthSq()>sn*sn){n=h;break}}if(!n)return null;let a=new P(0,1,0);Math.abs(n.y)>.99&&(a=new P(1,0,0));const o=new P().crossVectors(a,n).normalize(),c=new P().crossVectors(n,o).normalize();return{project(u){return new re(u.dot(o),u.dot(c))}}}function PC(r,t,n){const a=new re().subVectors(n,t),o=a.lengthSq();if(o<sn*sn)return!1;const c=new re().subVectors(r,t);if(Math.abs(a.x*c.y-a.y*c.x)>sn*Math.sqrt(o))return!1;const d=c.dot(a);return d>=-sn&&d<=o+sn}function BC(r,t){let n=!1;for(let a=0,o=t.length-1;a<t.length;o=a++){const c=t[a],u=t[o];if(PC(r,u,c))return!0;if(c.y>r.y!=u.y>r.y){const h=(u.x-c.x)*(r.y-c.y)/(u.y-c.y)+c.x;r.x<h+sn&&(n=!n)}}return n}function IC(r,t,n,a){if(!a)return!1;const o=ji(n,r.start),c=ji(n,r.end);if(!o||!c)return!1;const u=new P().addVectors(o,c).multiplyScalar(.5),d=a.project(u);return t.some((h,m)=>{if(m===r.polygonIndex)return!1;const g=ey(n,h).map(v=>a.project(v));return g.length>=3&&BC(d,g)})}function FC(r,t,n,a,o){const c=ji(r,t),u=ji(r,n),d=ji(r,a),h=ji(r,o);if(!c||!u||!d||!h)return!1;const m=new P().subVectors(u,c),g=m.lengthSq();if(g<sn*sn)return!1;const v=new P().subVectors(d,c),_=new P().subVectors(h,c);if(new P().crossVectors(m,v).lengthSq()>sn*sn*g||new P().crossVectors(m,_).lengthSq()>sn*sn*g)return!1;const S=v.dot(m)/g,E=_.dot(m)/g,b=Math.max(0,Math.min(S,E));return Math.min(1,Math.max(S,E))-b>sn}function HC(r,t,n){for(let a=0;a<r.length;a++){const o=r[a],c=r[(a+1)%r.length];for(let u=0;u<t.length;u++){const d=t[u],h=t[(u+1)%t.length];if(FC(n,o,c,d,h))return!0}}return!1}function VC(r,t,n,a){const o=[];for(let c=0;c<r.length;c++){const u=r[c],d=r[(c+1)%r.length],h=ji(n,u),m=ji(n,d);if(!h||!m)continue;const g=[];t.forEach(_=>{const S=ji(n,_);if(!S)return;const E=OC(S,h,m);E!==null&&g.push({id:_,t:E})}),g.sort((_,S)=>_.t-S.t);const v=[];g.forEach(_=>{const S=v[v.length-1];(!S||S.id!==_.id)&&v.push(_)});for(let _=0;_<v.length-1;_++){const S=v[_].id,E=v[_+1].id;S!==E&&o.push({start:S,end:E,polygonIndex:a})}}return o}function GC(r,t){const n=Array.from(new Set(r.flat())),a=new Map,o=new Map;r.flatMap((E,b)=>VC(E,n,t,b)).forEach(E=>{const b=mu(E.start,E.end);a.set(b,(a.get(b)||0)+1),o.has(b)||o.set(b,[]),o.get(b).push(E)});const u=[];a.forEach((E,b)=>{const[M,x]=b.split("->"),N=a.get(mu(x,M))||0,U=E-N,T=o.get(b)||[];for(let W=0;W<U;W++)u.push(T[W]||{start:M,end:x,polygonIndex:-1})});const d=zC(r,t),h=u.filter(E=>!IC(E,r,t,d));if(h.length<3)return null;const m=new Map;h.forEach(E=>{m.has(E.start)||m.set(E.start,[]),m.get(E.start).push(E.end)});const g=h[0].start,v=[],_=new Set;let S=g;for(;;){v.push(S);const b=(m.get(S)||[]).find(M=>!_.has(mu(S,M)));if(!b)return null;if(_.add(mu(S,b)),S=b,S===g)break;if(v.length>h.length)return null}return _.size!==h.length||v.length<3?null:v}class kC{constructor(t,n,a){Zt(this,"camera");Zt(this,"scene");Zt(this,"blockRenderer");Zt(this,"raycaster",new $x);Zt(this,"isToolActive",!1);Zt(this,"selectedVertices",[]);Zt(this,"setSelectedVertices");Zt(this,"selectedFaceId",null);Zt(this,"setSelectedFaceId");Zt(this,"activeBlock",null);Zt(this,"setActiveBlock");Zt(this,"hoverVertexId",null);Zt(this,"hoverFaceId",null);Zt(this,"toolEdges",[]);Zt(this,"cursorVertexId",null);Zt(this,"hoverToolEdgeId",null);Zt(this,"hiddenVertices",new Set);Zt(this,"onCanCreateFaceChange");Zt(this,"isChangeStartMode",!1);Zt(this,"onChangeStartModeChange");this.camera=t,this.scene=n,this.blockRenderer=a,this.raycaster.params.Points={threshold:.1},this.raycaster.params.Line={threshold:.1}}setOnCanCreateFaceChange(t){this.onCanCreateFaceChange=t}setOnChangeStartModeChange(t){this.onChangeStartModeChange=t}toggleChangeStartMode(){this.isChangeStartMode=!this.isChangeStartMode,this.onChangeStartModeChange&&this.onChangeStartModeChange(this.isChangeStartMode)}setToolState(t,n,a,o,c,u,d){!t&&this.isToolActive&&this.cancelTool(),this.isToolActive=t,this.selectedVertices=n,this.setSelectedVertices=a,this.selectedFaceId=o,this.setSelectedFaceId=c,this.activeBlock=u,this.setActiveBlock=d}cancelTool(){this.toolEdges=[],this.cursorVertexId=null,this.hiddenVertices.clear(),this.isChangeStartMode=!1,this.onChangeStartModeChange&&this.onChangeStartModeChange(!1),this.onCanCreateFaceChange&&this.onCanCreateFaceChange(!1),this.activeBlock&&this.blockRenderer.updateFaceToolState(null,[],null,new Set,this.activeBlock),this.setSelectedVertices&&this.setSelectedVertices([])}isActive(){return this.isToolActive}getMousePos(t,n){const a=n.getBoundingClientRect();return new re((t.clientX-a.left)/a.width*2-1,-((t.clientY-a.top)/a.height)*2+1)}getVisibleVertexMeshes(){return Array.from(this.blockRenderer.vertexMeshes.values()).filter(t=>t.visible)}findVertexAtMouse(t,n){const a=this.getMousePos(t,n);this.raycaster.setFromCamera(a,this.camera);const o=this.getVisibleVertexMeshes(),c=this.raycaster.intersectObjects(o);if(c.length>0)return c[0].object;const u=n.getBoundingClientRect(),d=t.clientX-u.left,h=t.clientY-u.top;let m=null,g=rx*rx;const v=new P;return o.forEach(_=>{_.getWorldPosition(v);const S=v.project(this.camera);if(S.z<-1||S.z>1)return;const E=(S.x+1)/2*u.width,b=(-S.y+1)/2*u.height,M=E-d,x=b-h,N=M*M+x*x;N<=g&&(g=N,m=_)}),m}onMouseMove(t,n){const a=this.getMousePos(t,n);this.raycaster.setFromCamera(a,this.camera);let o=null,c=null,u=null;const d=this.findVertexAtMouse(t,n);if(d)o=d.userData.id;else{const m=Array.from(this.blockRenderer.toolEdgeMeshes),g=this.raycaster.intersectObjects(m);if(g.length>0)u=g[0].object.userData.id;else{const v=Array.from(this.blockRenderer.faceMeshes.values()),_=this.raycaster.intersectObjects(v);_.length>0&&(c=_[0].object.userData.id)}}let h=!1;(this.hoverVertexId!==o||this.hoverFaceId!==c)&&(this.hoverVertexId=o,this.hoverFaceId=c,this.blockRenderer.setHover(this.hoverVertexId,this.hoverFaceId)),this.hoverToolEdgeId!==u&&(this.hoverToolEdgeId=u,h=!0),h&&this.updateStateAndRenderer()}updateStateAndRenderer(){const t=new Set;this.toolEdges.forEach(o=>{t.add(o.v1),t.add(o.v2)}),this.cursorVertexId&&t.add(this.cursorVertexId);const n=Array.from(t);if(this.setSelectedVertices&&n.sort().join(",")!==this.selectedVertices.sort().join(",")&&this.setSelectedVertices(n),this.hiddenVertices.clear(),t.size>=3&&this.activeBlock){const o=Array.from(t).map(d=>this.activeBlock.vertices.find(h=>h.id===d)).filter(Boolean);let c=null,u=null;for(let d=0;d<o.length-2&&!c;d++)for(let h=d+1;h<o.length-1&&!c;h++)for(let m=h+1;m<o.length&&!c;m++){const g=new P(...o[d].position),v=new P(...o[h].position),_=new P(...o[m].position),S=new P().subVectors(v,g),E=new P().subVectors(_,g),b=new P().crossVectors(S,E);b.lengthSq()>1e-4&&(c=b.normalize(),u=g)}c&&u&&this.activeBlock.vertices.forEach(d=>{const h=new P(...d.position);Math.abs(c.dot(new P().subVectors(h,u)))>.001&&this.hiddenVertices.add(d.id)})}this.activeBlock&&this.blockRenderer.updateFaceToolState(this.cursorVertexId,this.toolEdges,this.hoverToolEdgeId,this.hiddenVertices,this.activeBlock);let a=!1;if(this.toolEdges.length>=3&&t.size===this.toolEdges.length){const o={};if(t.forEach(u=>o[u]=0),this.toolEdges.forEach(u=>{o[u.v1]++,o[u.v2]++}),Object.values(o).every(u=>u===2)){let u=new Set,d=[this.toolEdges[0].v1];for(;d.length>0;){const h=d.pop();u.has(h)||(u.add(h),this.toolEdges.forEach(m=>{m.v1===h&&!u.has(m.v2)&&d.push(m.v2),m.v2===h&&!u.has(m.v1)&&d.push(m.v1)}))}u.size===t.size&&(a=!0)}}this.onCanCreateFaceChange&&this.onCanCreateFaceChange(a)}onLeftClick(t,n){if(!this.activeBlock||!this.setActiveBlock||!this.setSelectedVertices||!this.setSelectedFaceId)return;const a=this.getMousePos(t,n);this.raycaster.setFromCamera(a,this.camera);const o=this.findVertexAtMouse(t,n);if(o){const d=o.userData.id;if(this.setSelectedFaceId(null),this.isChangeStartMode){this.cursorVertexId=d,this.isChangeStartMode=!1,this.onChangeStartModeChange&&this.onChangeStartModeChange(!1),this.updateStateAndRenderer();return}this.cursorVertexId?d!==this.cursorVertexId&&(this.toolEdges.some(m=>m.v1===this.cursorVertexId&&m.v2===d||m.v2===this.cursorVertexId&&m.v1===d)||this.toolEdges.push({id:`edge_${Date.now()}_${Math.random().toString(36).substring(2,7)}`,v1:this.cursorVertexId,v2:d}),this.cursorVertexId=d):this.cursorVertexId=d,this.updateStateAndRenderer();return}else if(this.isChangeStartMode){this.isChangeStartMode=!1,this.onChangeStartModeChange&&this.onChangeStartModeChange(!1);return}const c=Array.from(this.blockRenderer.faceMeshes.values()),u=this.raycaster.intersectObjects(c);if(u.length>0){const d=u[0].object.userData.id;this.setSelectedFaceId(d)}else this.setSelectedFaceId(null)}onRightClick(t,n){if(!this.activeBlock||!this.setActiveBlock)return;const a=this.getMousePos(t,n);this.raycaster.setFromCamera(a,this.camera);const o=Array.from(this.blockRenderer.toolEdgeMeshes),c=this.raycaster.intersectObjects(o);if(c.length>0){const h=c[0].object.userData.id;this.toolEdges=this.toolEdges.filter(g=>g.id!==h);const m=new Set;this.toolEdges.forEach(g=>{m.add(g.v1),m.add(g.v2)}),this.cursorVertexId&&!m.has(this.cursorVertexId)&&(this.cursorVertexId=null),this.updateStateAndRenderer();return}const u=Array.from(this.blockRenderer.faceMeshes.values()),d=this.raycaster.intersectObjects(u);if(d.length>0){const h=d[0].object.userData.id,m={...this.activeBlock};m.faces=m.faces.filter(g=>g.id!==h),this.setActiveBlock(m),this.selectedFaceId===h&&this.setSelectedFaceId&&this.setSelectedFaceId(null)}}tryCreateFace(){if(!this.activeBlock||!this.setActiveBlock||this.toolEdges.length<3)return;let t=[],n=new Map;this.toolEdges.forEach(T=>{n.has(T.v1)||n.set(T.v1,[]),n.has(T.v2)||n.set(T.v2,[]),n.get(T.v1).push(T.v2),n.get(T.v2).push(T.v1)});const a=this.toolEdges[0].v1;let o=a,c=null;do{t.push(o);const T=n.get(o);if(!T)break;const W=T.find(B=>B!==c);if(!W)break;c=o,o=W}while(o!==a&&t.length<=this.toolEdges.length);t.length!==this.toolEdges.length&&(t=Array.from(new Set(this.toolEdges.flatMap(T=>[T.v1,T.v2]))));const u=t.map(T=>this.activeBlock.vertices.find(W=>W.id===T)).filter(Boolean);if(u.length<3)return;const d=Ap(u.map(T=>new P(...T.position)));if(d.lengthSq()<1e-4){alert("Vertices are collinear.");return}let h=new P;u.forEach(T=>h.add(new P(...T.position))),h.divideScalar(u.length);const m=new P(this.activeBlock.size.width/2,this.activeBlock.size.height/2,this.activeBlock.size.depth/2);let g=[...t];const v=new P().subVectors(h,m);d.dot(v)<0&&(g=[t[0],...t.slice(1).reverse()],d.negate());const _=new P(...u[0].position),S=-d.dot(_),E={...this.activeBlock},b=new Map(this.activeBlock.vertices.map(T=>[T.id,T])),M=[],x=[];E.faces.forEach(T=>{const W=T.vertexIds.map(k=>this.activeBlock.vertices.find(D=>D.id===k)).filter(Boolean);if(W.length<3)return;const B=new P(...W[0].position);if(Ap(W.map(k=>new P(...k.position))).dot(d)>.99&&Math.abs(d.dot(B)+S)<.001&&HC(T.vertexIds,g,b)){M.push(T);return}x.push(T)});let N=g;if(M.length>0){const T=[g,...M.map(B=>B.vertexIds)],W=GC(T,b);W&&(N=W,E.faces=x)}const U={id:`f_${Date.now()}_${Math.random().toString(36).substring(2,7)}`,vertexIds:N,materialId:"default_preview",uvPolicy:"auto",surfaceType:"planar",normalSmoothing:"flat",normalMode:"autoOutward"};E.faces=[...E.faces,U],this.setActiveBlock(E),this.cancelTool()}flipNormal(t){if(!this.activeBlock||!this.setActiveBlock)return;const n={...this.activeBlock},a=n.faces.findIndex(o=>o.id===t);if(a>=0){const o=n.faces[a],c=o.vertexIds;o.vertexIds=[c[0],...c.slice(1).reverse()],o.normalMode="manualFlipped",this.setActiveBlock(n)}}deleteFace(t){if(!this.activeBlock||!this.setActiveBlock)return;const n={...this.activeBlock};n.faces=n.faces.filter(a=>a.id!==t),this.setActiveBlock(n),this.selectedFaceId===t&&this.setSelectedFaceId&&this.setSelectedFaceId(null)}}class XC{constructor(t){Zt(this,"scene");Zt(this,"camera");Zt(this,"axesHelper");Zt(this,"renderer");this.renderer=t,this.scene=new kx;const n=100;this.camera=new Hp(-n,n,n,-n,.1,1e3),this.camera.position.set(0,0,100),this.axesHelper=new TC(60),this.scene.add(this.axesHelper);const a=(o,c,u)=>{const d=document.createElement("canvas");d.width=64,d.height=64;const h=d.getContext("2d");h.fillStyle=c,h.font="48px Arial",h.textAlign="center",h.textBaseline="middle",h.fillText(o,32,32);const m=new Yx(d),g=new jx({map:m,sizeAttenuation:!1,depthTest:!1}),v=new Kw(g);v.scale.set(.15,.15,1),v.position.copy(u),this.scene.add(v)};a("X","#ff0000",new P(70,0,0)),a("Y","#00ff00",new P(0,70,0)),a("Z","#0000ff",new P(0,0,70))}update(t){this.camera.quaternion.copy(t.quaternion),this.camera.position.set(0,0,100).applyQuaternion(t.quaternion),this.camera.lookAt(0,0,0)}render(){const n=this.renderer.domElement.width,a=this.renderer.domElement.height;this.renderer.setViewport(n-120,a-120,120,120),this.renderer.render(this.scene,this.camera),this.renderer.setViewport(0,0,n,a)}}const jC={visible:!1,offsetX:44,offsetY:-44};function Mu(r=!1){return{...jC,visible:r}}function ny(r,t){const[n,a]=[r,t].sort();return`${n}__${a}`}function Wp(r){const t=r.split("__");return t.length!==2||!t[0]||!t[1]?null:[t[0],t[1]]}function El(r){const t=Wp(r);return t?`L(${t[0]}-${t[1]})`:r}function zu(r,t){return r.lineAnnotations.find(n=>n.id===t)}function iy(r,t){const n=zu(r,t);if(n)return n;const a=Wp(t);return{id:t,vertexIds:a||["",""],comment:"",label:Mu()}}function dl(r,t,n){var a,o,c,u,d;return t==="point"?((o=(a=r.block)==null?void 0:a.vertices.find(h=>h.id===n))==null?void 0:o.comment)||"":t==="face"?((u=(c=r.block)==null?void 0:c.faces.find(h=>h.id===n))==null?void 0:u.comment)||"":((d=zu(r,n))==null?void 0:d.comment)||""}function Sa(r,t,n){var a,o,c,u,d;return t==="point"?((o=(a=r.block)==null?void 0:a.vertices.find(h=>h.id===n))==null?void 0:o.label)||Mu():t==="face"?((u=(c=r.block)==null?void 0:c.faces.find(h=>h.id===n))==null?void 0:u.label)||Mu():((d=zu(r,n))==null?void 0:d.label)||Mu()}function ox(r,t,n,a){if(t==="line"){const c={...iy(r,n),comment:a};return{...r,lineAnnotations:ay(r.lineAnnotations,c)}}if(!r.block)return r;const o={...r.block};return t==="point"?o.vertices=o.vertices.map(c=>c.id===n?{...c,comment:a}:c):o.faces=o.faces.map(c=>c.id===n?{...c,comment:a}:c),{...r,block:o}}function qp(r,t,n,a){if(t==="line"){const c={...iy(r,n),label:a};return{...r,lineAnnotations:ay(r.lineAnnotations,c)}}if(!r.block)return r;const o={...r.block};return t==="point"?o.vertices=o.vertices.map(c=>c.id===n?{...c,label:a}:c):o.faces=o.faces.map(c=>c.id===n?{...c,label:a}:c),{...r,block:o}}function WC(r,t,n){const a=Sa(r,t,n);if(a.visible)return r;const o=r.labelCounters||{point:0,line:0,face:0},c=(o[t]||0)+1,u=t==="point"?"V":t==="line"?"L":"F";return qp({...r,labelCounters:{...o,[t]:c}},t,n,{...a,visible:!0,displayName:a.displayName||`${u}${c}`})}function lx(r,t,n){const a=Sa(r,t,n);return qp(r,t,n,{...a,visible:!1})}function qC(r,t,n,a,o){const c=Sa(r,t,n);return qp(r,t,n,{...c,visible:!0,offsetX:a,offsetY:o})}function ay(r,t){return r.findIndex(a=>a.id===t.id)<0?[...r,t]:r.map(a=>a.id===t.id?t:a)}const Cu=12;function ol(r){return(r||1.5)/1.5}const YC=({state:r,block:t,preferences:n,currentTool:a,selectedVertices:o,setSelectedVertices:c,selectedFaceId:u,setSelectedFaceId:d,setSelected:h,setBlock:m,setState:g})=>{var ht;const{t:v}=Jr(),_=ne.useRef(null),S=ne.useRef(null),E=ne.useRef(null),b=ne.useRef(null),M=ne.useRef(null),x=ne.useRef(null),N=ne.useRef(null),U=ne.useRef(null),T=ne.useRef(new $x),W=ne.useRef(null),[B,O]=ne.useState(!1),[k,D]=ne.useState(!1),[C,G]=ne.useState([]),at=ne.useMemo(()=>QC(t),[t]),tt=ne.useRef({state:r,block:t,currentTool:a,edges:at});ne.useEffect(()=>{tt.current={state:r,block:t,currentTool:a,edges:at}},[r,t,a,at]),ne.useEffect(()=>{if(!_.current)return;const Q=_.current,ut=new kx;ut.background=new ve(1973790),S.current=ut;const St=new yi(45,Q.clientWidth/Q.clientHeight,.1,1e3);St.position.set(3,3,3),E.current=St;const Tt=new Zw({antialias:!0,alpha:!0,preserveDrawingBuffer:!0});Tt.setClearColor(1973790,1),Tt.setSize(Q.clientWidth,Q.clientHeight),Tt.setPixelRatio(window.devicePixelRatio),Tt.autoClear=!1,Q.appendChild(Tt.domElement),b.current=Tt;const Dt=new EC(10,40,4473924,2236962);ut.add(Dt);const $t=new yC(16777215,.6);ut.add($t);const Qt=new xC(16777215,.8);Qt.position.set(5,10,7),ut.add(Qt);const me=new wC(St,Tt.domElement);M.current=me;const q=new LC(ut);x.current=q;const Ne=new kC(St,ut,q);N.current=Ne,Ne.setOnCanCreateFaceChange(O),Ne.setOnChangeStartModeChange(D);const oe=new XC(Tt);U.current=oe;const ue=L=>{Ne.isActive()&&Ne.onMouseMove(L,Q)};Tt.domElement.addEventListener("mousemove",ue),me.onRightClick=L=>{if(Ne.isActive()){Ne.onRightClick(L,Q);return}I(L,Q)},me.onLeftClick=L=>{if(Ne.isActive()){Ne.onLeftClick(L,Q);return}mt(L,Q)};const qt=()=>{St.aspect=Q.clientWidth/Q.clientHeight,St.updateProjectionMatrix(),Tt.setSize(Q.clientWidth,Q.clientHeight),q.setResolution(Q.clientWidth,Q.clientHeight)};window.addEventListener("resize",qt),qt();let Ee;const Yt=()=>{Ee=requestAnimationFrame(Yt),Tt.clear(),Tt.render(ut,St),oe.update(St),oe.render(),ct()};return Yt(),()=>{cancelAnimationFrame(Ee),window.removeEventListener("resize",qt),Tt.domElement.removeEventListener("mousemove",ue),me.dispose(),Tt.dispose(),Q.contains(Tt.domElement)&&Q.removeChild(Tt.domElement)}},[]),ne.useEffect(()=>{const Q=St=>{const Tt=W.current;if(!Tt)return;const Dt=ol(tt.current.state.viewport.elementScale),$t=Tt.startOffsetX+(St.clientX-Tt.startX)/Dt,Qt=Tt.startOffsetY+(St.clientY-Tt.startY)/Dt;g(me=>qC(me,Tt.type,Tt.id,$t,Qt))},ut=()=>{W.current=null};return window.addEventListener("mousemove",Q),window.addEventListener("mouseup",ut),()=>{window.removeEventListener("mousemove",Q),window.removeEventListener("mouseup",ut)}},[g]),ne.useEffect(()=>{M.current&&M.current.updateConfig(n)},[n]),ne.useEffect(()=>{x.current&&(x.current.updateBlock(t,n),t&&x.current.vertexMeshes.forEach(Q=>{Q.visible=!0}))},[t,n,a,r.selected]),ne.useEffect(()=>{if(N.current){const Q=a==="edit";N.current.setToolState(Q,o,c,u,d,t,m)}},[a,o,u,t,m,c,d]),ne.useEffect(()=>{x.current&&x.current.updateSelection(o,u,n)},[o,u,n]),ne.useEffect(()=>{const Q=ut=>{N.current&&ut.key==="Escape"&&(N.current.isActive()?c([]):(h(null),c([]),d(null)))};return window.addEventListener("keydown",Q),()=>{window.removeEventListener("keydown",Q)}},[u,h,d,c]);const ct=()=>{const Q=_.current,ut=E.current,St=tt.current;if(!Q||!ut||!St.block){G(Dt=>Dt.length?[]:Dt);return}const Tt=[];St.block.vertices.forEach(Dt=>{const $t=Sa(St.state,"point",Dt.id);if(!$t.visible)return;const Qt=Oh(Qr(St.block,new P(...Dt.position)),ut,Q);Qt.visible&&Lh(Tt,"point",Dt.id,$t.displayName||Dt.id,$t,Qt,ol(St.state.viewport.elementScale),dl(St.state,"point",Dt.id))}),St.edges.forEach(Dt=>{const $t=Sa(St.state,"line",Dt.id);if(!$t.visible)return;const Qt=JC(St.block,Dt);if(!Qt)return;const me=Oh(Qt,ut,Q);me.visible&&Lh(Tt,"line",Dt.id,$t.displayName||El(Dt.id),$t,me,ol(St.state.viewport.elementScale),dl(St.state,"line",Dt.id))}),St.block.faces.forEach(Dt=>{const $t=Sa(St.state,"face",Dt.id);if(!$t.visible)return;const Qt=$C(St.block,Dt.vertexIds);if(!Qt)return;const me=Oh(Qt,ut,Q);me.visible&&Lh(Tt,"face",Dt.id,$t.displayName||Dt.id,$t,me,ol(St.state.viewport.elementScale),dl(St.state,"face",Dt.id))}),G(Dt=>KC(Dt,Tt)?Dt:Tt)},mt=(Q,ut)=>{const St=V(Q,ut);if(!St){h(null),c([]),d(null);return}if(tt.current.currentTool==="label"){g(Dt=>WC(Dt,St.type,St.id)),h({type:St.type,id:St.id}),H(St);return}h({type:St.type,id:St.id}),H(St)},I=(Q,ut)=>{const St=V(Q,ut),Tt=tt.current;if(Tt.currentTool==="label"&&St){g(lx(Tt.state,St.type,St.id));return}h(null),c([]),d(null)},H=Q=>{if(Q.type==="point"){c([Q.id]),d(null);return}if(Q.type==="face"){c([]),d(Q.id);return}const ut=Q.id.split("__");c(ut.length===2?ut:[]),d(null)},V=(Q,ut)=>{const St=E.current,Tt=x.current,Dt=tt.current;if(!St||!Tt||!Dt.block)return null;const $t=ut.getBoundingClientRect(),Qt=Q.clientX-$t.left,me=Q.clientY-$t.top,q=e2(Tt,St,Qt,me,$t);if(q)return{type:"point",id:q};const Ne=n2(Dt.block,Dt.edges,St,Qt,me,$t);if(Ne)return{type:"line",id:Ne};const oe=new re((Q.clientX-$t.left)/$t.width*2-1,-((Q.clientY-$t.top)/$t.height)*2+1),ue=T.current;ue.setFromCamera(oe,St);const qt=Array.from(Tt.faceMeshes.values()),Ee=ue.intersectObjects(qt);return Ee.length>0?{type:"face",id:Ee[0].object.userData.id}:null},_t=()=>{var Q;(Q=N.current)==null||Q.tryCreateFace()},bt=()=>{var Q;(Q=N.current)==null||Q.toggleChangeStartMode()},z=()=>{var Q;(Q=N.current)==null||Q.cancelTool()},it=()=>{var Q;u&&((Q=N.current)==null||Q.deleteFace(u))},Mt=((ht=r.selected)==null?void 0:ht.type)==="label"?r.selected.objectType&&r.selected.objectId?{type:r.selected.objectType,id:r.selected.objectId}:null:r.selected?{type:r.selected.type,id:r.selected.id}:null,J=Mt?dl(r,Mt.type,Mt.id).trim():"";return j.jsxs("div",{className:"flex-1 relative",children:[j.jsx("div",{ref:_,className:"w-full h-full outline-none",tabIndex:0}),j.jsx("svg",{className:"absolute inset-0 pointer-events-none z-10 w-full h-full",children:C.map(Q=>j.jsx("line",{x1:Q.targetScreen.x,y1:Q.targetScreen.y,x2:Q.labelScreen.x,y2:Q.labelScreen.y,stroke:"#67e8f9",strokeWidth:"1.5",strokeDasharray:"4 4"},`${Q.key}-pointer`))}),j.jsx("div",{className:"absolute inset-0 pointer-events-none z-20",children:C.map(Q=>j.jsxs("button",{type:"button",onMouseDown:ut=>{a!=="label"||ut.button!==0||(ut.preventDefault(),ut.stopPropagation(),W.current={type:Q.type,id:Q.id,startX:ut.clientX,startY:ut.clientY,startOffsetX:Q.label.offsetX,startOffsetY:Q.label.offsetY})},onContextMenu:ut=>{ut.preventDefault(),ut.stopPropagation(),g(St=>lx(St,Q.type,Q.id))},onClick:ut=>{ut.stopPropagation(),h({type:"label",id:Q.id,objectType:Q.type,objectId:Q.id})},className:`absolute px-3 py-1.5 rounded border text-xs shadow-lg shadow-black/40 whitespace-nowrap ${ZC(Q.type)} ${a==="label"?"pointer-events-auto cursor-move":"pointer-events-none"}`,style:{left:`${Q.labelScreen.x}px`,top:`${Q.labelScreen.y}px`,transform:`translate(-50%, -50%) scale(${ol(r.viewport.elementScale)})`,transformOrigin:"center"},title:`${v(`objectTypes.${Q.type}`)} ${Q.displayId}`,children:[j.jsx("span",{className:"absolute -top-5 left-1/2 -translate-x-1/2 rounded border border-current bg-slate-950/90 px-1.5 py-0.5 text-[10px] leading-none opacity-90",children:v(`objectTypes.${Q.type}`)}),Q.displayId,Q.hasComment&&j.jsx("span",{className:"ml-1 inline-flex h-4 min-w-4 items-center justify-center rounded-full bg-amber-400 px-1 text-[10px] font-bold text-slate-950",children:"注"})]},Q.key))}),Mt&&J&&j.jsxs("aside",{className:"absolute right-4 top-4 z-30 w-64 rounded border border-slate-600 bg-slate-950/90 p-3 text-sm shadow-xl shadow-black/40",children:[j.jsxs("div",{className:"mb-2 flex items-center justify-between gap-2 text-xs text-slate-400",children:[j.jsx("span",{children:v(`objectTypes.${Mt.type}`)}),j.jsx("span",{className:"text-cyan-200",children:Mt.id})]}),j.jsx("div",{className:"whitespace-pre-wrap break-words leading-relaxed text-slate-100",children:J})]}),a==="edit"&&j.jsxs("div",{className:"absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex gap-4",children:[j.jsx("button",{onClick:_t,disabled:!B,className:`px-6 py-3 rounded-lg font-bold transition-all ${B?"bg-blue-600 hover:bg-blue-500 text-white cursor-pointer":"bg-gray-600 text-gray-400 cursor-not-allowed"}`,children:v("editOverlay.createFace")}),j.jsx("button",{onClick:bt,className:`px-6 py-3 rounded-lg font-bold transition-all border ${k?"bg-yellow-600 border-yellow-500 text-white":"bg-gray-800 border-gray-600 text-gray-300 hover:bg-gray-700"}`,children:v("editOverlay.changeStart")}),j.jsx("button",{onClick:z,className:"px-6 py-3 rounded-lg font-bold bg-transparent border border-gray-600 text-gray-300 hover:bg-gray-800 transition-all",children:v("editOverlay.cancel")}),u&&j.jsx("button",{onClick:it,className:"px-6 py-3 rounded-lg font-bold bg-red-600 hover:bg-red-500 text-white transition-all",children:v("editOverlay.deleteFace")})]})]})};function Lh(r,t,n,a,o,c,u,d){r.push({key:`${t}:${n}`,type:t,id:n,displayId:a,label:o,hasComment:!!d.trim(),targetScreen:c,labelScreen:{x:c.x+o.offsetX*u,y:c.y+o.offsetY*u},visible:c.visible})}function ZC(r){return r==="point"?"border-cyan-300/75 bg-slate-950/90 text-cyan-100 rounded":r==="line"?"border-emerald-300/75 bg-emerald-950/90 text-emerald-100 rounded-sm":"border-amber-300/80 bg-amber-950/90 text-amber-100 rounded-md border-dashed"}function KC(r,t){if(r.length!==t.length)return!1;for(let n=0;n<r.length;n++){const a=r[n],o=t[n];if(a.key!==o.key||a.type!==o.type||a.id!==o.id||a.displayId!==o.displayId||a.visible!==o.visible||a.hasComment!==o.hasComment||a.label.visible!==o.label.visible||a.label.offsetX!==o.label.offsetX||a.label.offsetY!==o.label.offsetY||Math.abs(a.targetScreen.x-o.targetScreen.x)>.1||Math.abs(a.targetScreen.y-o.targetScreen.y)>.1||Math.abs(a.labelScreen.x-o.labelScreen.x)>.1||Math.abs(a.labelScreen.y-o.labelScreen.y)>.1)return!1}return!0}function QC(r){if(!r)return[];const t=new Map;return r.faces.forEach(n=>{for(let a=0;a<n.vertexIds.length;a++){const o=n.vertexIds[a],c=n.vertexIds[(a+1)%n.vertexIds.length],u=ny(o,c);if(!t.has(u)){const[d,h]=[o,c].sort();t.set(u,{id:u,vertexIds:[d,h]})}}}),Array.from(t.values())}function Qr(r,t){return new P(t.x-r.size.width/2,t.y-r.size.height/2,t.z-r.size.depth/2)}function JC(r,t){const n=r.vertices.find(o=>o.id===t.vertexIds[0]),a=r.vertices.find(o=>o.id===t.vertexIds[1]);return!n||!a?null:Qr(r,new P((n.position[0]+a.position[0])/2,(n.position[1]+a.position[1])/2,(n.position[2]+a.position[2])/2))}function Nh(r,t){const n=t.map(o=>r.vertices.find(c=>c.id===o)).filter(Boolean);if(!n.length)return null;const a=new P;return n.forEach(o=>{o&&a.add(new P(...o.position))}),a.divideScalar(n.length),Qr(r,a)}function $C(r,t){const n=t.map(v=>r.vertices.find(_=>_.id===v)).filter(Boolean).map(v=>new P(...v.position));if(n.length<3)return Nh(r,t);const a=t2(n);if(a.lengthSq()<1e-5)return Nh(r,t);let o=new P(0,1,0);Math.abs(a.y)>.99&&(o=new P(1,0,0));const c=new P().crossVectors(o,a).normalize(),u=new P().crossVectors(a,c).normalize(),d=n.map(v=>new re(v.dot(c),v.dot(u))),m=Ou.triangulateShape(d,[])[0];if(!m)return Nh(r,t);const g=new P().add(n[m[0]]).add(n[m[1]]).add(n[m[2]]).divideScalar(3);return Qr(r,g)}function t2(r){const t=new P;for(let n=0;n<r.length;n++){const a=r[n],o=r[(n+1)%r.length];t.x+=(a.y-o.y)*(a.z+o.z),t.y+=(a.z-o.z)*(a.x+o.x),t.z+=(a.x-o.x)*(a.y+o.y)}return t.normalize()}function Oh(r,t,n){const a=r.clone().project(t);return{x:(a.x+1)/2*n.clientWidth,y:(-a.y+1)/2*n.clientHeight,visible:a.z>=-1&&a.z<=1}}function e2(r,t,n,a,o){let c=null,u=Cu*Cu;const d=new P;return r.vertexMeshes.forEach((h,m)=>{h.getWorldPosition(d);const g=d.project(t);if(g.z<-1||g.z>1)return;const v=(g.x+1)/2*o.width,_=(-g.y+1)/2*o.height,S=v-n,E=_-a,b=S*S+E*E;b<=u&&(u=b,c=m)}),c}function n2(r,t,n,a,o,c){let u=null,d=Cu*Cu;return t.forEach(h=>{const m=r.vertices.find(E=>E.id===h.vertexIds[0]),g=r.vertices.find(E=>E.id===h.vertexIds[1]);if(!m||!g)return;const v=cx(Qr(r,new P(...m.position)),n,c),_=cx(Qr(r,new P(...g.position)),n,c);if(!v||!_)return;const S=i2(a,o,v.x,v.y,_.x,_.y);S<d&&(d=S,u=h.id)}),u}function cx(r,t,n){const a=r.clone().project(t);return a.z<-1||a.z>1?null:{x:(a.x+1)/2*n.width,y:(-a.y+1)/2*n.height}}function i2(r,t,n,a,o,c){const u=o-n,d=c-a;if(u===0&&d===0){const S=r-n,E=t-a;return S*S+E*E}const h=Math.max(0,Math.min(1,((r-n)*u+(t-a)*d)/(u*u+d*d))),m=n+h*u,g=a+h*d,v=r-m,_=t-g;return v*v+_*_}const a2=({isOpen:r,hasExistingBlock:t,onClose:n,onCreate:a})=>{const[o,c]=ne.useState(3),[u,d]=ne.useState(3),[h,m]=ne.useState(3);if(!r)return null;const g=()=>{const _=[];let S=1;for(let b=0;b<o;b++)for(let M=0;M<u;M++)for(let x=0;x<h;x++)_.push({id:`v_${S.toString().padStart(6,"0")}`,position:[b,M,x]}),S++;const E={schemaVersion:1,id:`lattice_${Date.now().toString(36)}`,name:`Lattice ${o}x${u}x${h}`,size:{width:o-1,height:u-1,depth:h-1},grid:{subdivisionsPerUnit:1,unitSize:1},vertices:_,faces:[],materials:[{id:"default_white",name:"Default White",color:"#ffffff"}],thumbnail:"thumbnail.png",createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()};a(E),n()},v=()=>{confirm("这将覆盖当前内容。确定要继续吗？")&&g()};return j.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0,0,0,0.8)",zIndex:1e3,display:"flex",alignItems:"center",justifyContent:"center"},children:j.jsxs("div",{style:{background:"#252526",border:"1px solid #444",padding:"32px",borderRadius:"12px",width:"400px",boxShadow:"0 16px 40px rgba(0,0,0,0.5)"},children:[j.jsx("h2",{style:{margin:"0 0 24px 0",fontSize:"20px",color:"#fff"},children:"创建点阵"}),j.jsxs("div",{style:{marginBottom:"24px"},children:[j.jsx("label",{style:{display:"block",marginBottom:"8px",color:"#ccc",fontSize:"14px"},children:"点阵尺寸 (X x Y x Z):"}),j.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[j.jsx("input",{type:"number",min:"2",max:"32",value:o,onChange:_=>c(Math.max(2,Math.min(32,parseInt(_.target.value)||2))),style:{width:"80px",padding:"10px",background:"#1e1e1e",border:"1px solid #444",color:"#fff",borderRadius:"6px"}}),j.jsx("span",{style:{color:"#888"},children:"x"}),j.jsx("input",{type:"number",min:"2",max:"32",value:u,onChange:_=>d(Math.max(2,Math.min(32,parseInt(_.target.value)||2))),style:{width:"80px",padding:"10px",background:"#1e1e1e",border:"1px solid #444",color:"#fff",borderRadius:"6px"}}),j.jsx("span",{style:{color:"#888"},children:"x"}),j.jsx("input",{type:"number",min:"2",max:"32",value:h,onChange:_=>m(Math.max(2,Math.min(32,parseInt(_.target.value)||2))),style:{width:"80px",padding:"10px",background:"#1e1e1e",border:"1px solid #444",color:"#fff",borderRadius:"6px"}})]})]}),j.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"12px"},children:[j.jsx("button",{onClick:n,style:{padding:"10px 20px",background:"transparent",color:"#ccc",border:"1px solid #444",borderRadius:"6px",cursor:"pointer"},children:"取消"}),j.jsx("button",{onClick:t?v:g,style:{padding:"10px 20px",background:"#3b82f6",color:"#fff",border:"none",borderRadius:"6px",cursor:"pointer"},children:"确定"})]})]})})},s2=({isOpen:r,preferences:t,onClose:n,onSave:a})=>{const[o,c]=ne.useState(t);if(!r)return null;const u=(g,v)=>{c(_=>({..._,[g]:v}))},d=()=>{a(o),n()},h={width:"100%",padding:"6px",background:"#1e1e1e",border:"1px solid #444",color:"#fff",borderRadius:"4px"},m={display:"block",marginBottom:"4px",color:"#ccc",fontSize:"12px"};return j.jsxs("div",{style:{position:"fixed",left:"50%",top:"50%",transform:"translate(-50%, -50%)",zIndex:1e3,background:"#252526",border:"1px solid #444",borderRadius:"8px",width:"500px",maxHeight:"80vh",display:"flex",flexDirection:"column",boxShadow:"0 16px 40px rgba(0,0,0,0.5)"},children:[j.jsxs("div",{style:{padding:"12px 24px",borderBottom:"1px solid #444",background:"#2d2d2d",borderTopLeftRadius:"8px",borderTopRightRadius:"8px",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[j.jsx("h2",{style:{margin:0,fontSize:"16px",color:"#fff"},children:"设置"}),j.jsx("div",{style:{cursor:"pointer",color:"#888",fontSize:"20px"},onClick:n,children:"✕"})]}),j.jsxs("div",{style:{padding:"24px",overflowY:"auto"},children:[j.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",marginBottom:"24px"},children:[j.jsxs("div",{children:[j.jsx("h3",{style:{fontSize:"14px",borderBottom:"1px solid #444",paddingBottom:"4px",marginBottom:"8px",color:"#eee"},children:"相机控制"}),j.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"8px"},children:[j.jsxs("div",{children:[j.jsx("label",{style:m,children:"轨道旋转灵敏度:"}),j.jsx("input",{type:"number",step:"0.1",value:o.orbitSensitivity,onChange:g=>u("orbitSensitivity",parseFloat(g.target.value)||Hi.orbitSensitivity),style:h})]}),j.jsxs("div",{children:[j.jsx("label",{style:m,children:"平移灵敏度:"}),j.jsx("input",{type:"number",step:"0.1",value:o.panSensitivity,onChange:g=>u("panSensitivity",parseFloat(g.target.value)||Hi.panSensitivity),style:h})]}),j.jsxs("div",{children:[j.jsx("label",{style:m,children:"缩放灵敏度:"}),j.jsx("input",{type:"number",step:"0.5",value:o.zoomSensitivity,onChange:g=>u("zoomSensitivity",parseFloat(g.target.value)||Hi.zoomSensitivity),style:h})]}),j.jsxs("div",{children:[j.jsx("label",{style:m,children:"右键拖动阈值:"}),j.jsx("input",{type:"number",step:"1",value:o.rightClickDragThresholdPixels,onChange:g=>u("rightClickDragThresholdPixels",parseInt(g.target.value)||Hi.rightClickDragThresholdPixels),style:h})]})]})]}),j.jsxs("div",{children:[j.jsx("h3",{style:{fontSize:"14px",borderBottom:"1px solid #444",paddingBottom:"4px",marginBottom:"8px",color:"#eee"},children:"视觉效果"}),j.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"8px"},children:[j.jsxs("div",{children:[j.jsx("label",{style:m,children:"面颜色:"}),j.jsx("input",{type:"color",value:o.faceColor,onChange:g=>u("faceColor",g.target.value),style:{...h,padding:"0",height:"30px"}})]}),j.jsxs("div",{children:[j.jsx("label",{style:m,children:"UV缩放:"}),j.jsx("input",{type:"number",step:"0.1",value:o.uvScale,onChange:g=>u("uvScale",parseFloat(g.target.value)||Hi.uvScale),style:h})]}),j.jsxs("div",{children:[j.jsx("label",{style:m,children:"法线线粗细:"}),j.jsx("input",{type:"number",step:"0.5",value:o.normalLineThickness,onChange:g=>u("normalLineThickness",parseFloat(g.target.value)||Hi.normalLineThickness),style:h})]}),j.jsxs("div",{children:[j.jsx("label",{style:m,children:"法线线颜色:"}),j.jsx("input",{type:"color",value:o.normalLineColor,onChange:g=>u("normalLineColor",g.target.value),style:{...h,padding:"0",height:"30px"}})]}),j.jsxs("div",{children:[j.jsx("label",{style:m,children:"面工具线粗细:"}),j.jsx("input",{type:"number",step:"0.5",value:o.createFaceLineThickness,onChange:g=>u("createFaceLineThickness",parseFloat(g.target.value)||Hi.createFaceLineThickness),style:h})]}),j.jsxs("div",{children:[j.jsx("label",{style:m,children:"面工具线颜色:"}),j.jsx("input",{type:"color",value:o.createFaceLineColor,onChange:g=>u("createFaceLineColor",g.target.value),style:{...h,padding:"0",height:"30px"}})]})]})]}),j.jsxs("div",{children:[j.jsx("h3",{style:{fontSize:"14px",borderBottom:"1px solid #444",paddingBottom:"4px",marginBottom:"8px",color:"#eee"},children:"顶点"}),j.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"8px"},children:[j.jsxs("div",{children:[j.jsx("label",{style:m,children:"顶点半径:"}),j.jsx("input",{type:"number",step:"0.01",value:o.vertexRadius,onChange:g=>u("vertexRadius",parseFloat(g.target.value)||Hi.vertexRadius),style:h})]}),j.jsxs("div",{children:[j.jsx("label",{style:m,children:"顶点常态颜色:"}),j.jsx("input",{type:"color",value:o.vertexColorNormal,onChange:g=>u("vertexColorNormal",g.target.value),style:{...h,padding:"0",height:"30px"}})]}),j.jsxs("div",{children:[j.jsx("label",{style:m,children:"顶点悬停颜色:"}),j.jsx("input",{type:"color",value:o.vertexColorHover,onChange:g=>u("vertexColorHover",g.target.value),style:{...h,padding:"0",height:"30px"}})]}),j.jsxs("div",{children:[j.jsx("label",{style:m,children:"顶点选中颜色:"}),j.jsx("input",{type:"color",value:o.vertexColorSelected,onChange:g=>u("vertexColorSelected",g.target.value),style:{...h,padding:"0",height:"30px"}})]})]})]})]}),j.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"12px"},children:[j.jsx("button",{onClick:n,style:{padding:"8px 16px",background:"transparent",color:"#ccc",border:"1px solid #444",borderRadius:"4px",cursor:"pointer"},children:"取消"}),j.jsx("button",{onClick:d,style:{padding:"8px 16px",background:"#3b82f6",color:"#fff",border:"none",borderRadius:"4px",cursor:"pointer"},children:"保存"})]})]})]})},r2=({isOpen:r,objectId:t,objectType:n,currentComment:a,onClose:o,onSave:c,onDelete:u})=>{const{t:d}=Jr(),[h,m]=ne.useState(a),g=ne.useRef(null);if(ne.useEffect(()=>{m(a)},[a]),ne.useEffect(()=>{var _;r&&((_=g.current)==null||_.focus())},[r]),!r)return null;const v=()=>{c(h),o()};return j.jsx("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center z-50",children:j.jsxs("div",{className:"bg-slate-800 rounded-lg shadow-xl border border-slate-700 p-6 w-96 max-w-[90vw]",children:[j.jsxs("h3",{className:"text-lg font-semibold text-slate-200 mb-4",children:[d("commentDialog.title")," - ",d(`objectTypes.${n}`)," ",t]}),j.jsx("textarea",{ref:g,value:h,onChange:_=>m(_.target.value),onKeyDown:_=>{(_.ctrlKey||_.metaKey)&&_.key==="Enter"&&(_.preventDefault(),v()),_.key==="Escape"&&o()},placeholder:d("commentDialog.placeholder"),className:"w-full h-32 bg-slate-900 border border-slate-600 rounded px-3 py-2 text-slate-100 resize-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"}),j.jsxs("div",{className:"flex justify-between mt-4 gap-2",children:[j.jsx("div",{children:a&&j.jsx("button",{onClick:()=>{u(),o()},className:"px-4 py-2 bg-red-600 hover:bg-red-500 text-white text-sm rounded transition-colors",children:d("commentDialog.delete")})}),j.jsxs("div",{className:"flex gap-2",children:[j.jsx("button",{onClick:o,className:"px-4 py-2 bg-slate-700 hover:bg-slate-600 text-slate-200 text-sm rounded transition-colors",children:d("commentDialog.cancel")}),j.jsx("button",{onClick:v,className:"px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white text-sm rounded transition-colors",children:d("commentDialog.confirm")})]})]})]})})},o2=({isOpen:r,onClose:t})=>{const{t:n,raw:a}=Jr();if(!r)return null;const o=a("helpPanel.sections")||[];return j.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50",onClick:t,children:j.jsxs("div",{className:"bg-slate-800 rounded-lg shadow-xl border border-slate-700 w-[760px] max-w-[92vw] max-h-[84vh] overflow-hidden",onClick:c=>c.stopPropagation(),children:[j.jsxs("div",{className:"px-6 py-4 border-b border-slate-700 flex items-center justify-between",children:[j.jsxs("div",{children:[j.jsx("h2",{className:"text-lg font-semibold text-slate-100",children:n("helpPanel.title")}),j.jsx("p",{className:"text-sm text-slate-400 mt-1 max-w-2xl",children:n("helpPanel.summary")})]}),j.jsx("button",{onClick:t,className:"w-8 h-8 flex items-center justify-center text-slate-400 hover:text-slate-100 hover:bg-slate-700 rounded transition-colors","aria-label":n("helpPanel.close"),children:j.jsxs("svg",{viewBox:"0 0 24 24",className:"w-5 h-5",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[j.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),j.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]}),j.jsx("div",{className:"p-6 overflow-y-auto max-h-[calc(84vh-128px)] grid grid-cols-1 md:grid-cols-2 gap-4",children:o.map(c=>j.jsxs("section",{className:"bg-slate-900 border border-slate-700 rounded p-4",children:[j.jsx("h3",{className:"text-sm font-semibold text-cyan-300 mb-3",children:c.title}),j.jsx("ul",{className:"space-y-2",children:c.items.map(u=>j.jsxs("li",{className:"text-sm text-slate-300 leading-relaxed flex gap-2",children:[j.jsx("span",{className:"text-cyan-400 mt-0.5",children:"•"}),j.jsx("span",{children:u})]},u))})]},c.title))}),j.jsx("div",{className:"px-6 py-3 border-t border-slate-700 flex justify-end",children:j.jsx("button",{onClick:t,className:"px-4 py-2 bg-slate-700 hover:bg-slate-600 text-slate-100 text-sm rounded transition-colors",children:n("helpPanel.close")})})]})})},sy="coordscribe-3d-state";function l2(){const{t:r,language:t,setLanguage:n}=Jr(),[a,o]=ne.useState(()=>ry(u2())),[c,u]=ne.useState(!1),[d,h]=ne.useState(!1),[m,g]=ne.useState(!1),[v,_]=ne.useState(!1),S=ne.useRef(null);ne.useEffect(()=>{n(a.language)},[a.language,n]),ne.useEffect(()=>{const H=window.setTimeout(()=>{localStorage.setItem(sy,JSON.stringify(a))},300);return()=>window.clearTimeout(H)},[a]),ne.useEffect(()=>{const H=V=>{const _t=V.target instanceof HTMLInputElement||V.target instanceof HTMLTextAreaElement;if(!(_t&&V.key!=="Escape"&&!(V.key==="Enter"&&(V.ctrlKey||V.metaKey)))){if(!_t&&V.key>="1"&&V.key<="3"){const bt=["view","edit","label"];o(z=>({...z,currentTool:bt[Number(V.key)-1]}));return}if(!_t&&V.key===" "&&ux(a.selected)){V.preventDefault(),_(!0);return}if((V.ctrlKey||V.metaKey)&&V.key.toLowerCase()==="e"){V.preventDefault(),G();return}V.key==="Escape"&&(v?_(!1):m&&g(!1))}};return window.addEventListener("keydown",H),()=>window.removeEventListener("keydown",H)},[a,v,m]);const E=H=>{o(V=>({...V,title:H}))},b=H=>{o(V=>({...V,currentTool:H}))},M=H=>{o(V=>({...V,block:{...H,updatedAt:new Date().toISOString()}}))},x=H=>{o(V=>({...V,selectedVertices:H}))},N=H=>{o(V=>({...V,selectedFaceId:H}))},U=H=>{o(V=>({...V,selected:H}))},T=H=>{o(V=>({...V,preferences:H}))},W=()=>{confirm(r("messages.clearConfirm"))&&o({...jp(),language:t})},B=()=>{const H=t==="zh-CN"?"en-US":"zh-CN";n(H),o(V=>({...V,language:H}))},O=()=>{o(H=>({...H,viewport:{...H.viewport,elementScale:Math.max(.45,(H.viewport.elementScale||1.5)*.9)}}))},k=()=>{o(H=>({...H,viewport:{...H.viewport,elementScale:Math.min(4.5,(H.viewport.elementScale||1.5)*1.1)}}))},D=()=>{o(H=>({...H,viewport:{elementScale:1.5}}))},C=H=>{if(!Number.isFinite(H))return;const V=Math.min(300,Math.max(1,Math.trunc(H)));o(_t=>({..._t,viewport:{..._t.viewport,elementScale:1.5*(V/100)}}))},G=ne.useCallback(()=>{const H=p2(a),V=new Blob([H],{type:"text/markdown;charset=utf-8"}),_t=URL.createObjectURL(V),bt=document.createElement("a");bt.href=_t,bt.download=h2(a.title,a.language),document.body.appendChild(bt),bt.click(),document.body.removeChild(bt),URL.revokeObjectURL(_t)},[a]),at=()=>{var H;(H=S.current)==null||H.click()},tt=H=>{var bt;const V=(bt=H.target.files)==null?void 0:bt[0];if(!V)return;const _t=new FileReader;_t.onload=z=>{var it;try{const Mt=(it=z.target)==null?void 0:it.result,J=m2(Mt);o(J)}catch(Mt){console.error("Import error:",Mt),alert(r("messages.importError"))}},_t.readAsText(V),S.current&&(S.current.value="")},ct=ux(a.selected),mt=ct?{objectId:ct.id,displayId:d2(a,ct.type,ct.id),objectType:ct.type,currentComment:dl(a,ct.type,ct.id)}:{displayId:"",objectType:"point",currentComment:""},I=(a.viewport.elementScale||1.5)/1.5;return j.jsxs("div",{className:"h-screen flex flex-col bg-slate-900 text-slate-100",children:[j.jsx("div",{className:"scaled-ui",style:{fontSize:`${I}rem`},children:j.jsx(UM,{title:a.title,onTitleChange:E,onExport:G,onImport:at,onToggleLanguage:B,onToggleHelp:()=>g(H=>!H),language:a.language,elementScale:a.viewport.elementScale||1.5,onZoomOut:O,onZoomIn:k,onZoomReset:D,onZoomSet:C})}),j.jsxs("div",{className:"flex flex-1 overflow-hidden",children:[j.jsx("div",{className:"scaled-ui h-full",style:{fontSize:`${I}rem`},children:j.jsx(LM,{currentTool:a.currentTool,onToolChange:b,onOpenLatticeDialog:()=>u(!0),onOpenPreferences:()=>h(!0),onClear:W})}),j.jsx(YC,{state:a,block:a.block,preferences:a.preferences,currentTool:a.currentTool,selectedVertices:a.selectedVertices,setSelectedVertices:x,selectedFaceId:a.selectedFaceId,setSelectedFaceId:N,setSelected:U,setBlock:M,setState:o})]}),j.jsx(a2,{isOpen:c,hasExistingBlock:!!a.block,onClose:()=>u(!1),onCreate:H=>o(V=>({...V,block:H,selected:null}))}),j.jsx(s2,{isOpen:d,preferences:a.preferences,onClose:()=>h(!1),onSave:T}),j.jsx(r2,{isOpen:v,objectId:mt.displayId,objectType:mt.objectType,currentComment:mt.currentComment,onClose:()=>_(!1),onSave:H=>{ct&&o(V=>ox(V,ct.type,ct.id,H))},onDelete:()=>{ct&&o(H=>ox(H,ct.type,ct.id,""))}}),j.jsx(o2,{isOpen:m,onClose:()=>g(!1)}),j.jsx("input",{ref:S,type:"file",accept:".md",onChange:tt,className:"hidden"})]})}function c2(){return j.jsx(DM,{children:j.jsx(l2,{})})}function u2(){const r=localStorage.getItem(sy);if(!r)return null;try{return JSON.parse(r)}catch(t){return console.error("Failed to load saved state:",t),null}}function ry(r){const t=jp();return r?{...t,...r,version:r.version||t.version,language:r.language||t.language,preferences:{...t.preferences,...r.preferences||{}},selectedVertices:r.selectedVertices||[],selectedFaceId:r.selectedFaceId||null,selected:r.selected||null,lineAnnotations:r.lineAnnotations||[],viewport:{...t.viewport,...r.viewport||{}},labelCounters:r.labelCounters||f2(r)}:t}function f2(r){var a,o,c;const t={point:0,line:0,face:0},n=(u,d)=>{const h=d==null?void 0:d.match(/^[VLF](\d+)$/);h&&(t[u]=Math.max(t[u],Number(h[1])))};return(a=r.block)==null||a.vertices.forEach(u=>{var d;return n("point",(d=u.label)==null?void 0:d.displayName)}),(o=r.block)==null||o.faces.forEach(u=>{var d;return n("face",(d=u.label)==null?void 0:d.displayName)}),(c=r.lineAnnotations)==null||c.forEach(u=>{var d;return n("line",(d=u.label)==null?void 0:d.displayName)}),t}function ux(r){return r?r.type==="label"?r.objectType&&r.objectId?{type:r.objectType,id:r.objectId}:null:{type:r.type,id:r.id}:null}function d2(r,t,n){const a=Sa(r,t,n);return a.displayName?a.displayName:t==="line"?El(n):n}function h2(r,t){return`${(r||"coordscribe-3d").replace(/[\/\\:*?"<>|]/g,"_")}${t==="zh-CN"?"_描述.md":"_Description.md"}`}function p2(r){const t=r.language==="zh-CN",n=_2(t),a=r.block,o=Yp(r),c=g2(r),u=v2(r);let d=`# ${r.title||n.defaultTitle} ${n.titleSuffix}

`;return d+=`## ${n.sections.aiReading}

${n.aiInstructions}

`,d+=`## ${n.sections.coordinateSystem}

${n.coordinateDesc}

`,d+=`## ${n.sections.objectNaming}

${n.objectNamingDesc}

`,d+=`## ${n.sections.overview}

`,a?(d+=`- ${n.tables.pointCount}: ${a.vertices.length}
`,d+=`- ${n.tables.lineCount}: ${o.length}
`,d+=`- ${n.tables.faceCount}: ${a.faces.length}
`,d+=`- ${n.tables.labelCount}: ${c.length}
`,d+=`- ${n.tables.commentCount}: ${u.length}
`,d+=`- ${n.tables.size}: ${a.size.width} x ${a.size.height} x ${a.size.depth}

`,d+=`## ${n.sections.points}

`,d+=`| ${n.tables.id} | X | Y | Z | ${n.tables.comment} |
|---|---|---|---|---|
`,a.vertices.forEach(h=>{d+=`| ${h.id} | ${h.position[0]} | ${h.position[1]} | ${h.position[2]} | ${h.comment||""} |
`}),d+=`
`,d+=`## ${n.sections.lines}

`,o.length?(d+=`| ${n.tables.id} | ${n.tables.from} | ${n.tables.to} | ${n.tables.fromCoord} | ${n.tables.toCoord} | ${n.tables.midpoint} | ${n.tables.comment} |
|---|---|---|---|---|---|---|
`,o.forEach(h=>{d+=`| ${El(h.id)} | ${h.vertexIds[0]} | ${h.vertexIds[1]} | ${ll(h.from)} | ${ll(h.to)} | ${ll(h.midpoint)} | ${h.comment||""} |
`})):d+=`${n.noLines}
`,d+=`
`,d+=`## ${n.sections.faces}

`,a.faces.length?(d+=`| ${n.tables.id} | ${n.tables.vertices} | ${n.tables.center} | ${n.tables.comment} |
|---|---|---|---|
`,a.faces.forEach(h=>{d+=`| ${h.id} | [${h.vertexIds.join(", ")}] | ${ll(oy(a,h.vertexIds))} | ${h.comment||""} |
`})):d+=`${n.noFaces}
`,d+=`
`,d+=`## ${n.sections.labels}

`,c.length?(d+=`| ${n.tables.id} | ${n.tables.objectType} | ${n.tables.labelText} | ${n.tables.arrowTarget} |
|---|---|---|---|
`,c.forEach(h=>{d+=`| ${h.displayId} | ${h.type} | ${h.displayId} | ${ll(h.target)} |
`})):d+=`${n.noLabels}
`,d+=`
`,d+=`## ${n.sections.comments}

`,u.length?(d+=`| ${n.tables.id} | ${n.tables.objectType} | ${n.tables.comment} |
|---|---|---|
`,u.forEach(h=>{d+=`| ${h.displayId} | ${h.type} | ${h.comment} |
`})):d+=`${n.noComments}
`,d+=`
`,d+=`## ${n.sections.rawJSON}

`,d+=`\`\`\`json
${JSON.stringify(r,null,2)}
\`\`\`
`,d):(d+=`${n.empty}

`,d+=`## ${n.sections.rawJSON}

\`\`\`json
${JSON.stringify(r,null,2)}
\`\`\`
`,d)}function m2(r){const t=r.match(/```json\s*([\s\S]*?)\s*```/);if(!t)throw new Error("无法找到有效的 JSON 数据");const n=JSON.parse(t[1]);if(n.block||n.version||n.lineAnnotations)return ry({...n,title:fx(r)||n.title,selected:null,selectedVertices:[],selectedFaceId:null});if(n.vertices&&n.faces){const a=jp();return a.title=fx(r)||n.name||a.title,a.block=n,a}throw new Error("JSON 数据结构不完整")}function fx(r){const t=r.match(/^#\s+(.+?)\s+(?:描述|Description)\s*$/m);return t?t[1].trim():""}function Yp(r){if(!r.block)return[];const t=new Set;return r.block.faces.forEach(n=>{for(let a=0;a<n.vertexIds.length;a++)t.add(ny(n.vertexIds[a],n.vertexIds[(a+1)%n.vertexIds.length]))}),Array.from(t).map(n=>{const a=Wp(n)||["",""],o=r.block.vertices.find(d=>d.id===a[0]),c=r.block.vertices.find(d=>d.id===a[1]),u=zu(r,n);return{id:n,vertexIds:a,from:(o==null?void 0:o.position)||[0,0,0],to:(c==null?void 0:c.position)||[0,0,0],midpoint:o&&c?[(o.position[0]+c.position[0])/2,(o.position[1]+c.position[1])/2,(o.position[2]+c.position[2])/2]:[0,0,0],comment:(u==null?void 0:u.comment)||"",label:u==null?void 0:u.label}})}function g2(r){if(!r.block)return[];const t=[];return r.block.vertices.forEach(n=>{const a=Sa(r,"point",n.id);a.visible&&t.push({type:"point",displayId:a.displayName||n.id,target:n.position})}),Yp(r).forEach(n=>{var a;(a=n.label)!=null&&a.visible&&t.push({type:"line",displayId:n.label.displayName||El(n.id),target:n.midpoint})}),r.block.faces.forEach(n=>{const a=Sa(r,"face",n.id);a.visible&&t.push({type:"face",displayId:a.displayName||n.id,target:oy(r.block,n.vertexIds)})}),t}function v2(r){if(!r.block)return[];const t=[];return r.block.vertices.forEach(n=>{var a;(a=n.comment)!=null&&a.trim()&&t.push({type:"point",displayId:n.id,comment:n.comment})}),Yp(r).forEach(n=>{n.comment.trim()&&t.push({type:"line",displayId:El(n.id),comment:n.comment})}),r.block.faces.forEach(n=>{var a;(a=n.comment)!=null&&a.trim()&&t.push({type:"face",displayId:n.id,comment:n.comment})}),t}function oy(r,t){const n=t.map(o=>r.vertices.find(c=>c.id===o)).filter(Boolean);if(!n.length)return[0,0,0];const a=n.reduce((o,c)=>(c&&(o[0]+=c.position[0],o[1]+=c.position[1],o[2]+=c.position[2]),o),[0,0,0]);return[a[0]/n.length,a[1]/n.length,a[2]/n.length]}function ll(r){return`(${r.map(t=>Number.isInteger(t)?t:Number(t).toFixed(3).replace(/\.?0+$/,"")).join(", ")})`}function _2(r){return r?{defaultTitle:"CoordScribe 3D 图形",titleSuffix:"描述",empty:"暂无数据，请先创建点阵。",noLines:"无线数据",noFaces:"无面数据",noLabels:"无显示标记",noComments:"无注释数据",sections:{aiReading:"1. AI 阅读说明",coordinateSystem:"2. 坐标系说明",objectNaming:"3. 对象编号说明",overview:"4. 图形数据总览",points:"5. 点数据",lines:"6. 线数据",faces:"7. 面数据",labels:"8. 标记数据",comments:"9. 注释数据",rawJSON:"10. 原始 JSON 数据"},tables:{pointCount:"点数量",lineCount:"线数量",faceCount:"面数量",labelCount:"显示标记数量",commentCount:"有注释对象数量",size:"尺寸",id:"ID",comment:"注释",from:"起点",to:"终点",fromCoord:"起点坐标",toCoord:"终点坐标",midpoint:"中点",vertices:"顶点序列",center:"中心",objectType:"对象类型",labelText:"标记文本",arrowTarget:"箭头指向"},aiInstructions:`这是一份用于描述三维几何结构的 Markdown 文档。文档前半部分解释数据规则，后半部分给出具体图形数据。

请按照以下规则理解图形:

- 本图形位于三维笛卡尔坐标系中。
- X、Y、Z 轴使用右手坐标系。
- 点对象表示顶点，坐标为 (x, y, z)。
- 线对象表示由两个顶点构成的边，通常来自面的边界。
- 面对象由有序顶点序列构成，表示一个平面多边形。
- 如果对象存在注释，注释内容是用户希望 AI 额外理解的语义信息。
- 重要: 对于有注释的对象，用户可能在注释中提供了修正的坐标、几何关系说明或具体问题。AI 应优先使用注释信息。
- 标记是视觉辅助，不改变几何含义。`,coordinateDesc:`- 坐标系类型: 三维笛卡尔坐标系
- 原点: (0, 0, 0)
- 网格线表示整数坐标
- 坐标单位: 1`,objectNamingDesc:`- 点: block.vertices 中的顶点
- 线: 面边界派生的边，ID 使用两个端点顶点组成
- 面: block.faces 中的平面多边形`}:{defaultTitle:"CoordScribe 3D Figure",titleSuffix:"Description",empty:"No data. Create a lattice first.",noLines:"No lines",noFaces:"No faces",noLabels:"No visible labels",noComments:"No comments",sections:{aiReading:"1. Instructions for AI",coordinateSystem:"2. Coordinate System",objectNaming:"3. Object Naming",overview:"4. Diagram Overview",points:"5. Points",lines:"6. Lines",faces:"7. Faces",labels:"8. Labels",comments:"9. Comments",rawJSON:"10. Raw JSON Data"},tables:{pointCount:"Points",lineCount:"Lines",faceCount:"Faces",labelCount:"Visible Labels",commentCount:"Objects with Comments",size:"Size",id:"ID",comment:"Comment",from:"From",to:"To",fromCoord:"From Coord",toCoord:"To Coord",midpoint:"Midpoint",vertices:"Vertex Sequence",center:"Center",objectType:"Object Type",labelText:"Label Text",arrowTarget:"Arrow Target"},aiInstructions:`This Markdown document describes a 3D geometric structure. The first part explains how to read the data, and the second part contains the actual geometry.

Please interpret the geometry using these rules:

- The figure is placed in a 3D Cartesian coordinate system.
- The X, Y, and Z axes use a right-handed coordinate system.
- Point objects are vertices with coordinates (x, y, z).
- Line objects are edges formed by two vertices, usually derived from face boundaries.
- Face objects are planar polygons represented by ordered vertex sequences.
- Object comments contain additional semantic information provided by the user.
- Important: for commented objects, the user may provide corrected coordinates, geometric relationships, or specific questions. AI should prioritize comments.
- Labels are visual aids only and do not change the geometric meaning.`,coordinateDesc:`- Coordinate System Type: 3D Cartesian
- Origin: (0, 0, 0)
- Grid lines represent integer coordinates
- Coordinate unit: 1`,objectNamingDesc:`- Point: vertices in block.vertices
- Line: edges derived from face boundaries, identified by their two endpoint vertices
- Face: planar polygons in block.faces`}}AM.createRoot(document.getElementById("root")).render(j.jsx(_M.StrictMode,{children:j.jsx(c2,{})}));
