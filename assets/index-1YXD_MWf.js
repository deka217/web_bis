(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(l){if(l.ep)return;l.ep=!0;const o=n(l);fetch(l.href,o)}})();var Vs={exports:{}},Rl={},Qs={exports:{}},T={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dr=Symbol.for("react.element"),Sd=Symbol.for("react.portal"),kd=Symbol.for("react.fragment"),Nd=Symbol.for("react.strict_mode"),Cd=Symbol.for("react.profiler"),Ed=Symbol.for("react.provider"),jd=Symbol.for("react.context"),Rd=Symbol.for("react.forward_ref"),Ad=Symbol.for("react.suspense"),Pd=Symbol.for("react.memo"),Ld=Symbol.for("react.lazy"),Ca=Symbol.iterator;function Fd(e){return e===null||typeof e!="object"?null:(e=Ca&&e[Ca]||e["@@iterator"],typeof e=="function"?e:null)}var _s={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ws=Object.assign,Ks={};function vn(e,t,n){this.props=e,this.context=t,this.refs=Ks,this.updater=n||_s}vn.prototype.isReactComponent={};vn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};vn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ys(){}Ys.prototype=vn.prototype;function Si(e,t,n){this.props=e,this.context=t,this.refs=Ks,this.updater=n||_s}var ki=Si.prototype=new Ys;ki.constructor=Si;Ws(ki,vn.prototype);ki.isPureReactComponent=!0;var Ea=Array.isArray,Xs=Object.prototype.hasOwnProperty,Ni={current:null},qs={key:!0,ref:!0,__self:!0,__source:!0};function Gs(e,t,n){var r,l={},o=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(o=""+t.key),t)Xs.call(t,r)&&!qs.hasOwnProperty(r)&&(l[r]=t[r]);var a=arguments.length-2;if(a===1)l.children=n;else if(1<a){for(var s=Array(a),u=0;u<a;u++)s[u]=arguments[u+2];l.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)l[r]===void 0&&(l[r]=a[r]);return{$$typeof:dr,type:e,key:o,ref:i,props:l,_owner:Ni.current}}function Dd(e,t){return{$$typeof:dr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ci(e){return typeof e=="object"&&e!==null&&e.$$typeof===dr}function Td(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ja=/\/+/g;function Gl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Td(""+e.key):t.toString(36)}function Hr(e,t,n,r,l){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case dr:case Sd:i=!0}}if(i)return i=e,l=l(i),e=r===""?"."+Gl(i,0):r,Ea(l)?(n="",e!=null&&(n=e.replace(ja,"$&/")+"/"),Hr(l,t,n,"",function(u){return u})):l!=null&&(Ci(l)&&(l=Dd(l,n+(!l.key||i&&i.key===l.key?"":(""+l.key).replace(ja,"$&/")+"/")+e)),t.push(l)),1;if(i=0,r=r===""?".":r+":",Ea(e))for(var a=0;a<e.length;a++){o=e[a];var s=r+Gl(o,a);i+=Hr(o,t,n,s,l)}else if(s=Fd(e),typeof s=="function")for(e=s.call(e),a=0;!(o=e.next()).done;)o=o.value,s=r+Gl(o,a++),i+=Hr(o,t,n,s,l);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function kr(e,t,n){if(e==null)return e;var r=[],l=0;return Hr(e,r,"","",function(o){return t.call(n,o,l++)}),r}function Id(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ue={current:null},Vr={transition:null},Od={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:Vr,ReactCurrentOwner:Ni};function Zs(){throw Error("act(...) is not supported in production builds of React.")}T.Children={map:kr,forEach:function(e,t,n){kr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return kr(e,function(){t++}),t},toArray:function(e){return kr(e,function(t){return t})||[]},only:function(e){if(!Ci(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};T.Component=vn;T.Fragment=kd;T.Profiler=Cd;T.PureComponent=Si;T.StrictMode=Nd;T.Suspense=Ad;T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Od;T.act=Zs;T.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ws({},e.props),l=e.key,o=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,i=Ni.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)Xs.call(t,s)&&!qs.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var u=0;u<s;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:dr,type:e.type,key:l,ref:o,props:r,_owner:i}};T.createContext=function(e){return e={$$typeof:jd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Ed,_context:e},e.Consumer=e};T.createElement=Gs;T.createFactory=function(e){var t=Gs.bind(null,e);return t.type=e,t};T.createRef=function(){return{current:null}};T.forwardRef=function(e){return{$$typeof:Rd,render:e}};T.isValidElement=Ci;T.lazy=function(e){return{$$typeof:Ld,_payload:{_status:-1,_result:e},_init:Id}};T.memo=function(e,t){return{$$typeof:Pd,type:e,compare:t===void 0?null:t}};T.startTransition=function(e){var t=Vr.transition;Vr.transition={};try{e()}finally{Vr.transition=t}};T.unstable_act=Zs;T.useCallback=function(e,t){return ue.current.useCallback(e,t)};T.useContext=function(e){return ue.current.useContext(e)};T.useDebugValue=function(){};T.useDeferredValue=function(e){return ue.current.useDeferredValue(e)};T.useEffect=function(e,t){return ue.current.useEffect(e,t)};T.useId=function(){return ue.current.useId()};T.useImperativeHandle=function(e,t,n){return ue.current.useImperativeHandle(e,t,n)};T.useInsertionEffect=function(e,t){return ue.current.useInsertionEffect(e,t)};T.useLayoutEffect=function(e,t){return ue.current.useLayoutEffect(e,t)};T.useMemo=function(e,t){return ue.current.useMemo(e,t)};T.useReducer=function(e,t,n){return ue.current.useReducer(e,t,n)};T.useRef=function(e){return ue.current.useRef(e)};T.useState=function(e){return ue.current.useState(e)};T.useSyncExternalStore=function(e,t,n){return ue.current.useSyncExternalStore(e,t,n)};T.useTransition=function(){return ue.current.useTransition()};T.version="18.3.1";Qs.exports=T;var x=Qs.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Md=x,zd=Symbol.for("react.element"),Ud=Symbol.for("react.fragment"),Bd=Object.prototype.hasOwnProperty,Hd=Md.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Vd={key:!0,ref:!0,__self:!0,__source:!0};function bs(e,t,n){var r,l={},o=null,i=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)Bd.call(t,r)&&!Vd.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:zd,type:e,key:o,ref:i,props:l,_owner:Hd.current}}Rl.Fragment=Ud;Rl.jsx=bs;Rl.jsxs=bs;Vs.exports=Rl;var c=Vs.exports,jo={},Js={exports:{}},Se={},$s={exports:{}},eu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(A,L){var D=A.length;A.push(L);e:for(;0<D;){var Y=D-1>>>1,b=A[Y];if(0<l(b,L))A[Y]=L,A[D]=b,D=Y;else break e}}function n(A){return A.length===0?null:A[0]}function r(A){if(A.length===0)return null;var L=A[0],D=A.pop();if(D!==L){A[0]=D;e:for(var Y=0,b=A.length,wr=b>>>1;Y<wr;){var jt=2*(Y+1)-1,ql=A[jt],Rt=jt+1,Sr=A[Rt];if(0>l(ql,D))Rt<b&&0>l(Sr,ql)?(A[Y]=Sr,A[Rt]=D,Y=Rt):(A[Y]=ql,A[jt]=D,Y=jt);else if(Rt<b&&0>l(Sr,D))A[Y]=Sr,A[Rt]=D,Y=Rt;else break e}}return L}function l(A,L){var D=A.sortIndex-L.sortIndex;return D!==0?D:A.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var i=Date,a=i.now();e.unstable_now=function(){return i.now()-a}}var s=[],u=[],h=1,p=null,m=3,v=!1,w=!1,y=!1,C=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(A){for(var L=n(u);L!==null;){if(L.callback===null)r(u);else if(L.startTime<=A)r(u),L.sortIndex=L.expirationTime,t(s,L);else break;L=n(u)}}function S(A){if(y=!1,g(A),!w)if(n(s)!==null)w=!0,Yl(N);else{var L=n(u);L!==null&&Xl(S,L.startTime-A)}}function N(A,L){w=!1,y&&(y=!1,f(P),P=-1),v=!0;var D=m;try{for(g(L),p=n(s);p!==null&&(!(p.expirationTime>L)||A&&!ge());){var Y=p.callback;if(typeof Y=="function"){p.callback=null,m=p.priorityLevel;var b=Y(p.expirationTime<=L);L=e.unstable_now(),typeof b=="function"?p.callback=b:p===n(s)&&r(s),g(L)}else r(s);p=n(s)}if(p!==null)var wr=!0;else{var jt=n(u);jt!==null&&Xl(S,jt.startTime-L),wr=!1}return wr}finally{p=null,m=D,v=!1}}var E=!1,j=null,P=-1,M=5,F=-1;function ge(){return!(e.unstable_now()-F<M)}function Et(){if(j!==null){var A=e.unstable_now();F=A;var L=!0;try{L=j(!0,A)}finally{L?lt():(E=!1,j=null)}}else E=!1}var lt;if(typeof d=="function")lt=function(){d(Et)};else if(typeof MessageChannel<"u"){var Nn=new MessageChannel,Ue=Nn.port2;Nn.port1.onmessage=Et,lt=function(){Ue.postMessage(null)}}else lt=function(){C(Et,0)};function Yl(A){j=A,E||(E=!0,lt())}function Xl(A,L){P=C(function(){A(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(A){A.callback=null},e.unstable_continueExecution=function(){w||v||(w=!0,Yl(N))},e.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<A?Math.floor(1e3/A):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(A){switch(m){case 1:case 2:case 3:var L=3;break;default:L=m}var D=m;m=L;try{return A()}finally{m=D}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(A,L){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var D=m;m=A;try{return L()}finally{m=D}},e.unstable_scheduleCallback=function(A,L,D){var Y=e.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?Y+D:Y):D=Y,A){case 1:var b=-1;break;case 2:b=250;break;case 5:b=1073741823;break;case 4:b=1e4;break;default:b=5e3}return b=D+b,A={id:h++,callback:L,priorityLevel:A,startTime:D,expirationTime:b,sortIndex:-1},D>Y?(A.sortIndex=D,t(u,A),n(s)===null&&A===n(u)&&(y?(f(P),P=-1):y=!0,Xl(S,D-Y))):(A.sortIndex=b,t(s,A),w||v||(w=!0,Yl(N))),A},e.unstable_shouldYield=ge,e.unstable_wrapCallback=function(A){var L=m;return function(){var D=m;m=L;try{return A.apply(this,arguments)}finally{m=D}}}})(eu);$s.exports=eu;var Qd=$s.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _d=x,we=Qd;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var tu=new Set,Xn={};function Qt(e,t){cn(e,t),cn(e+"Capture",t)}function cn(e,t){for(Xn[e]=t,e=0;e<t.length;e++)tu.add(t[e])}var be=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ro=Object.prototype.hasOwnProperty,Wd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ra={},Aa={};function Kd(e){return Ro.call(Aa,e)?!0:Ro.call(Ra,e)?!1:Wd.test(e)?Aa[e]=!0:(Ra[e]=!0,!1)}function Yd(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Xd(e,t,n,r){if(t===null||typeof t>"u"||Yd(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ce(e,t,n,r,l,o,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=i}var ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ne[e]=new ce(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ne[t]=new ce(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ne[e]=new ce(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ne[e]=new ce(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ne[e]=new ce(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ne[e]=new ce(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ne[e]=new ce(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ne[e]=new ce(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ne[e]=new ce(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ei=/[\-:]([a-z])/g;function ji(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ei,ji);ne[t]=new ce(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ei,ji);ne[t]=new ce(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ei,ji);ne[t]=new ce(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ne[e]=new ce(e,1,!1,e.toLowerCase(),null,!1,!1)});ne.xlinkHref=new ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ne[e]=new ce(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ri(e,t,n,r){var l=ne.hasOwnProperty(t)?ne[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Xd(t,n,l,r)&&(n=null),r||l===null?Kd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var nt=_d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Nr=Symbol.for("react.element"),Kt=Symbol.for("react.portal"),Yt=Symbol.for("react.fragment"),Ai=Symbol.for("react.strict_mode"),Ao=Symbol.for("react.profiler"),nu=Symbol.for("react.provider"),ru=Symbol.for("react.context"),Pi=Symbol.for("react.forward_ref"),Po=Symbol.for("react.suspense"),Lo=Symbol.for("react.suspense_list"),Li=Symbol.for("react.memo"),it=Symbol.for("react.lazy"),lu=Symbol.for("react.offscreen"),Pa=Symbol.iterator;function Cn(e){return e===null||typeof e!="object"?null:(e=Pa&&e[Pa]||e["@@iterator"],typeof e=="function"?e:null)}var W=Object.assign,Zl;function In(e){if(Zl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Zl=t&&t[1]||""}return`
`+Zl+e}var bl=!1;function Jl(e,t){if(!e||bl)return"";bl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var l=u.stack.split(`
`),o=r.stack.split(`
`),i=l.length-1,a=o.length-1;1<=i&&0<=a&&l[i]!==o[a];)a--;for(;1<=i&&0<=a;i--,a--)if(l[i]!==o[a]){if(i!==1||a!==1)do if(i--,a--,0>a||l[i]!==o[a]){var s=`
`+l[i].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=i&&0<=a);break}}}finally{bl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?In(e):""}function qd(e){switch(e.tag){case 5:return In(e.type);case 16:return In("Lazy");case 13:return In("Suspense");case 19:return In("SuspenseList");case 0:case 2:case 15:return e=Jl(e.type,!1),e;case 11:return e=Jl(e.type.render,!1),e;case 1:return e=Jl(e.type,!0),e;default:return""}}function Fo(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Yt:return"Fragment";case Kt:return"Portal";case Ao:return"Profiler";case Ai:return"StrictMode";case Po:return"Suspense";case Lo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ru:return(e.displayName||"Context")+".Consumer";case nu:return(e._context.displayName||"Context")+".Provider";case Pi:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Li:return t=e.displayName||null,t!==null?t:Fo(e.type)||"Memo";case it:t=e._payload,e=e._init;try{return Fo(e(t))}catch{}}return null}function Gd(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Fo(t);case 8:return t===Ai?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function wt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ou(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Zd(e){var t=ou(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(i){r=""+i,o.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Cr(e){e._valueTracker||(e._valueTracker=Zd(e))}function iu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ou(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function tl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Do(e,t){var n=t.checked;return W({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function La(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=wt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function au(e,t){t=t.checked,t!=null&&Ri(e,"checked",t,!1)}function To(e,t){au(e,t);var n=wt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Io(e,t.type,n):t.hasOwnProperty("defaultValue")&&Io(e,t.type,wt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Fa(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Io(e,t,n){(t!=="number"||tl(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var On=Array.isArray;function rn(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+wt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Oo(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return W({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Da(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(k(92));if(On(n)){if(1<n.length)throw Error(k(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:wt(n)}}function su(e,t){var n=wt(t.value),r=wt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ta(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function uu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Mo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?uu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Er,cu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Er=Er||document.createElement("div"),Er.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Er.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function qn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Un={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},bd=["Webkit","ms","Moz","O"];Object.keys(Un).forEach(function(e){bd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Un[t]=Un[e]})});function du(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Un.hasOwnProperty(e)&&Un[e]?(""+t).trim():t+"px"}function fu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=du(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Jd=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function zo(e,t){if(t){if(Jd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function Uo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bo=null;function Fi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ho=null,ln=null,on=null;function Ia(e){if(e=hr(e)){if(typeof Ho!="function")throw Error(k(280));var t=e.stateNode;t&&(t=Dl(t),Ho(e.stateNode,e.type,t))}}function pu(e){ln?on?on.push(e):on=[e]:ln=e}function hu(){if(ln){var e=ln,t=on;if(on=ln=null,Ia(e),t)for(e=0;e<t.length;e++)Ia(t[e])}}function mu(e,t){return e(t)}function gu(){}var $l=!1;function xu(e,t,n){if($l)return e(t,n);$l=!0;try{return mu(e,t,n)}finally{$l=!1,(ln!==null||on!==null)&&(gu(),hu())}}function Gn(e,t){var n=e.stateNode;if(n===null)return null;var r=Dl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var Vo=!1;if(be)try{var En={};Object.defineProperty(En,"passive",{get:function(){Vo=!0}}),window.addEventListener("test",En,En),window.removeEventListener("test",En,En)}catch{Vo=!1}function $d(e,t,n,r,l,o,i,a,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(h){this.onError(h)}}var Bn=!1,nl=null,rl=!1,Qo=null,ef={onError:function(e){Bn=!0,nl=e}};function tf(e,t,n,r,l,o,i,a,s){Bn=!1,nl=null,$d.apply(ef,arguments)}function nf(e,t,n,r,l,o,i,a,s){if(tf.apply(this,arguments),Bn){if(Bn){var u=nl;Bn=!1,nl=null}else throw Error(k(198));rl||(rl=!0,Qo=u)}}function _t(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function vu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Oa(e){if(_t(e)!==e)throw Error(k(188))}function rf(e){var t=e.alternate;if(!t){if(t=_t(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var o=l.alternate;if(o===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===n)return Oa(l),e;if(o===r)return Oa(l),t;o=o.sibling}throw Error(k(188))}if(n.return!==r.return)n=l,r=o;else{for(var i=!1,a=l.child;a;){if(a===n){i=!0,n=l,r=o;break}if(a===r){i=!0,r=l,n=o;break}a=a.sibling}if(!i){for(a=o.child;a;){if(a===n){i=!0,n=o,r=l;break}if(a===r){i=!0,r=o,n=l;break}a=a.sibling}if(!i)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function yu(e){return e=rf(e),e!==null?wu(e):null}function wu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=wu(e);if(t!==null)return t;e=e.sibling}return null}var Su=we.unstable_scheduleCallback,Ma=we.unstable_cancelCallback,lf=we.unstable_shouldYield,of=we.unstable_requestPaint,X=we.unstable_now,af=we.unstable_getCurrentPriorityLevel,Di=we.unstable_ImmediatePriority,ku=we.unstable_UserBlockingPriority,ll=we.unstable_NormalPriority,sf=we.unstable_LowPriority,Nu=we.unstable_IdlePriority,Al=null,Qe=null;function uf(e){if(Qe&&typeof Qe.onCommitFiberRoot=="function")try{Qe.onCommitFiberRoot(Al,e,void 0,(e.current.flags&128)===128)}catch{}}var Ie=Math.clz32?Math.clz32:ff,cf=Math.log,df=Math.LN2;function ff(e){return e>>>=0,e===0?32:31-(cf(e)/df|0)|0}var jr=64,Rr=4194304;function Mn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ol(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,o=e.pingedLanes,i=n&268435455;if(i!==0){var a=i&~l;a!==0?r=Mn(a):(o&=i,o!==0&&(r=Mn(o)))}else i=n&~l,i!==0?r=Mn(i):o!==0&&(r=Mn(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,o=t&-t,l>=o||l===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ie(t),l=1<<n,r|=e[n],t&=~l;return r}function pf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function hf(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-Ie(o),a=1<<i,s=l[i];s===-1?(!(a&n)||a&r)&&(l[i]=pf(a,t)):s<=t&&(e.expiredLanes|=a),o&=~a}}function _o(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Cu(){var e=jr;return jr<<=1,!(jr&4194240)&&(jr=64),e}function eo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function fr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ie(t),e[t]=n}function mf(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Ie(n),o=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~o}}function Ti(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ie(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var O=0;function Eu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ju,Ii,Ru,Au,Pu,Wo=!1,Ar=[],ft=null,pt=null,ht=null,Zn=new Map,bn=new Map,st=[],gf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function za(e,t){switch(e){case"focusin":case"focusout":ft=null;break;case"dragenter":case"dragleave":pt=null;break;case"mouseover":case"mouseout":ht=null;break;case"pointerover":case"pointerout":Zn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":bn.delete(t.pointerId)}}function jn(e,t,n,r,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[l]},t!==null&&(t=hr(t),t!==null&&Ii(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function xf(e,t,n,r,l){switch(t){case"focusin":return ft=jn(ft,e,t,n,r,l),!0;case"dragenter":return pt=jn(pt,e,t,n,r,l),!0;case"mouseover":return ht=jn(ht,e,t,n,r,l),!0;case"pointerover":var o=l.pointerId;return Zn.set(o,jn(Zn.get(o)||null,e,t,n,r,l)),!0;case"gotpointercapture":return o=l.pointerId,bn.set(o,jn(bn.get(o)||null,e,t,n,r,l)),!0}return!1}function Lu(e){var t=Ft(e.target);if(t!==null){var n=_t(t);if(n!==null){if(t=n.tag,t===13){if(t=vu(n),t!==null){e.blockedOn=t,Pu(e.priority,function(){Ru(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Qr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ko(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Bo=r,n.target.dispatchEvent(r),Bo=null}else return t=hr(n),t!==null&&Ii(t),e.blockedOn=n,!1;t.shift()}return!0}function Ua(e,t,n){Qr(e)&&n.delete(t)}function vf(){Wo=!1,ft!==null&&Qr(ft)&&(ft=null),pt!==null&&Qr(pt)&&(pt=null),ht!==null&&Qr(ht)&&(ht=null),Zn.forEach(Ua),bn.forEach(Ua)}function Rn(e,t){e.blockedOn===t&&(e.blockedOn=null,Wo||(Wo=!0,we.unstable_scheduleCallback(we.unstable_NormalPriority,vf)))}function Jn(e){function t(l){return Rn(l,e)}if(0<Ar.length){Rn(Ar[0],e);for(var n=1;n<Ar.length;n++){var r=Ar[n];r.blockedOn===e&&(r.blockedOn=null)}}for(ft!==null&&Rn(ft,e),pt!==null&&Rn(pt,e),ht!==null&&Rn(ht,e),Zn.forEach(t),bn.forEach(t),n=0;n<st.length;n++)r=st[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<st.length&&(n=st[0],n.blockedOn===null);)Lu(n),n.blockedOn===null&&st.shift()}var an=nt.ReactCurrentBatchConfig,il=!0;function yf(e,t,n,r){var l=O,o=an.transition;an.transition=null;try{O=1,Oi(e,t,n,r)}finally{O=l,an.transition=o}}function wf(e,t,n,r){var l=O,o=an.transition;an.transition=null;try{O=4,Oi(e,t,n,r)}finally{O=l,an.transition=o}}function Oi(e,t,n,r){if(il){var l=Ko(e,t,n,r);if(l===null)co(e,t,r,al,n),za(e,r);else if(xf(l,e,t,n,r))r.stopPropagation();else if(za(e,r),t&4&&-1<gf.indexOf(e)){for(;l!==null;){var o=hr(l);if(o!==null&&ju(o),o=Ko(e,t,n,r),o===null&&co(e,t,r,al,n),o===l)break;l=o}l!==null&&r.stopPropagation()}else co(e,t,r,null,n)}}var al=null;function Ko(e,t,n,r){if(al=null,e=Fi(r),e=Ft(e),e!==null)if(t=_t(e),t===null)e=null;else if(n=t.tag,n===13){if(e=vu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return al=e,null}function Fu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(af()){case Di:return 1;case ku:return 4;case ll:case sf:return 16;case Nu:return 536870912;default:return 16}default:return 16}}var ct=null,Mi=null,_r=null;function Du(){if(_r)return _r;var e,t=Mi,n=t.length,r,l="value"in ct?ct.value:ct.textContent,o=l.length;for(e=0;e<n&&t[e]===l[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===l[o-r];r++);return _r=l.slice(e,1<r?1-r:void 0)}function Wr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Pr(){return!0}function Ba(){return!1}function ke(e){function t(n,r,l,o,i){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Pr:Ba,this.isPropagationStopped=Ba,this}return W(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Pr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Pr)},persist:function(){},isPersistent:Pr}),t}var yn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zi=ke(yn),pr=W({},yn,{view:0,detail:0}),Sf=ke(pr),to,no,An,Pl=W({},pr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ui,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==An&&(An&&e.type==="mousemove"?(to=e.screenX-An.screenX,no=e.screenY-An.screenY):no=to=0,An=e),to)},movementY:function(e){return"movementY"in e?e.movementY:no}}),Ha=ke(Pl),kf=W({},Pl,{dataTransfer:0}),Nf=ke(kf),Cf=W({},pr,{relatedTarget:0}),ro=ke(Cf),Ef=W({},yn,{animationName:0,elapsedTime:0,pseudoElement:0}),jf=ke(Ef),Rf=W({},yn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Af=ke(Rf),Pf=W({},yn,{data:0}),Va=ke(Pf),Lf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ff={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Df={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Tf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Df[e])?!!t[e]:!1}function Ui(){return Tf}var If=W({},pr,{key:function(e){if(e.key){var t=Lf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Wr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ff[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ui,charCode:function(e){return e.type==="keypress"?Wr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Wr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Of=ke(If),Mf=W({},Pl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qa=ke(Mf),zf=W({},pr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ui}),Uf=ke(zf),Bf=W({},yn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Hf=ke(Bf),Vf=W({},Pl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Qf=ke(Vf),_f=[9,13,27,32],Bi=be&&"CompositionEvent"in window,Hn=null;be&&"documentMode"in document&&(Hn=document.documentMode);var Wf=be&&"TextEvent"in window&&!Hn,Tu=be&&(!Bi||Hn&&8<Hn&&11>=Hn),_a=" ",Wa=!1;function Iu(e,t){switch(e){case"keyup":return _f.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ou(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Xt=!1;function Kf(e,t){switch(e){case"compositionend":return Ou(t);case"keypress":return t.which!==32?null:(Wa=!0,_a);case"textInput":return e=t.data,e===_a&&Wa?null:e;default:return null}}function Yf(e,t){if(Xt)return e==="compositionend"||!Bi&&Iu(e,t)?(e=Du(),_r=Mi=ct=null,Xt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Tu&&t.locale!=="ko"?null:t.data;default:return null}}var Xf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ka(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Xf[e.type]:t==="textarea"}function Mu(e,t,n,r){pu(r),t=sl(t,"onChange"),0<t.length&&(n=new zi("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Vn=null,$n=null;function qf(e){Xu(e,0)}function Ll(e){var t=Zt(e);if(iu(t))return e}function Gf(e,t){if(e==="change")return t}var zu=!1;if(be){var lo;if(be){var oo="oninput"in document;if(!oo){var Ya=document.createElement("div");Ya.setAttribute("oninput","return;"),oo=typeof Ya.oninput=="function"}lo=oo}else lo=!1;zu=lo&&(!document.documentMode||9<document.documentMode)}function Xa(){Vn&&(Vn.detachEvent("onpropertychange",Uu),$n=Vn=null)}function Uu(e){if(e.propertyName==="value"&&Ll($n)){var t=[];Mu(t,$n,e,Fi(e)),xu(qf,t)}}function Zf(e,t,n){e==="focusin"?(Xa(),Vn=t,$n=n,Vn.attachEvent("onpropertychange",Uu)):e==="focusout"&&Xa()}function bf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ll($n)}function Jf(e,t){if(e==="click")return Ll(t)}function $f(e,t){if(e==="input"||e==="change")return Ll(t)}function ep(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ze=typeof Object.is=="function"?Object.is:ep;function er(e,t){if(ze(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!Ro.call(t,l)||!ze(e[l],t[l]))return!1}return!0}function qa(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ga(e,t){var n=qa(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=qa(n)}}function Bu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Bu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Hu(){for(var e=window,t=tl();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=tl(e.document)}return t}function Hi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function tp(e){var t=Hu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Bu(n.ownerDocument.documentElement,n)){if(r!==null&&Hi(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,o=Math.min(r.start,l);r=r.end===void 0?o:Math.min(r.end,l),!e.extend&&o>r&&(l=r,r=o,o=l),l=Ga(n,o);var i=Ga(n,r);l&&i&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var np=be&&"documentMode"in document&&11>=document.documentMode,qt=null,Yo=null,Qn=null,Xo=!1;function Za(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Xo||qt==null||qt!==tl(r)||(r=qt,"selectionStart"in r&&Hi(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Qn&&er(Qn,r)||(Qn=r,r=sl(Yo,"onSelect"),0<r.length&&(t=new zi("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=qt)))}function Lr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Gt={animationend:Lr("Animation","AnimationEnd"),animationiteration:Lr("Animation","AnimationIteration"),animationstart:Lr("Animation","AnimationStart"),transitionend:Lr("Transition","TransitionEnd")},io={},Vu={};be&&(Vu=document.createElement("div").style,"AnimationEvent"in window||(delete Gt.animationend.animation,delete Gt.animationiteration.animation,delete Gt.animationstart.animation),"TransitionEvent"in window||delete Gt.transitionend.transition);function Fl(e){if(io[e])return io[e];if(!Gt[e])return e;var t=Gt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Vu)return io[e]=t[n];return e}var Qu=Fl("animationend"),_u=Fl("animationiteration"),Wu=Fl("animationstart"),Ku=Fl("transitionend"),Yu=new Map,ba="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function kt(e,t){Yu.set(e,t),Qt(t,[e])}for(var ao=0;ao<ba.length;ao++){var so=ba[ao],rp=so.toLowerCase(),lp=so[0].toUpperCase()+so.slice(1);kt(rp,"on"+lp)}kt(Qu,"onAnimationEnd");kt(_u,"onAnimationIteration");kt(Wu,"onAnimationStart");kt("dblclick","onDoubleClick");kt("focusin","onFocus");kt("focusout","onBlur");kt(Ku,"onTransitionEnd");cn("onMouseEnter",["mouseout","mouseover"]);cn("onMouseLeave",["mouseout","mouseover"]);cn("onPointerEnter",["pointerout","pointerover"]);cn("onPointerLeave",["pointerout","pointerover"]);Qt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Qt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Qt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Qt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Qt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Qt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),op=new Set("cancel close invalid load scroll toggle".split(" ").concat(zn));function Ja(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,nf(r,t,void 0,e),e.currentTarget=null}function Xu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var i=r.length-1;0<=i;i--){var a=r[i],s=a.instance,u=a.currentTarget;if(a=a.listener,s!==o&&l.isPropagationStopped())break e;Ja(l,a,u),o=s}else for(i=0;i<r.length;i++){if(a=r[i],s=a.instance,u=a.currentTarget,a=a.listener,s!==o&&l.isPropagationStopped())break e;Ja(l,a,u),o=s}}}if(rl)throw e=Qo,rl=!1,Qo=null,e}function U(e,t){var n=t[Jo];n===void 0&&(n=t[Jo]=new Set);var r=e+"__bubble";n.has(r)||(qu(t,e,2,!1),n.add(r))}function uo(e,t,n){var r=0;t&&(r|=4),qu(n,e,r,t)}var Fr="_reactListening"+Math.random().toString(36).slice(2);function tr(e){if(!e[Fr]){e[Fr]=!0,tu.forEach(function(n){n!=="selectionchange"&&(op.has(n)||uo(n,!1,e),uo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Fr]||(t[Fr]=!0,uo("selectionchange",!1,t))}}function qu(e,t,n,r){switch(Fu(t)){case 1:var l=yf;break;case 4:l=wf;break;default:l=Oi}n=l.bind(null,t,n,e),l=void 0,!Vo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function co(e,t,n,r,l){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var a=r.stateNode.containerInfo;if(a===l||a.nodeType===8&&a.parentNode===l)break;if(i===4)for(i=r.return;i!==null;){var s=i.tag;if((s===3||s===4)&&(s=i.stateNode.containerInfo,s===l||s.nodeType===8&&s.parentNode===l))return;i=i.return}for(;a!==null;){if(i=Ft(a),i===null)return;if(s=i.tag,s===5||s===6){r=o=i;continue e}a=a.parentNode}}r=r.return}xu(function(){var u=o,h=Fi(n),p=[];e:{var m=Yu.get(e);if(m!==void 0){var v=zi,w=e;switch(e){case"keypress":if(Wr(n)===0)break e;case"keydown":case"keyup":v=Of;break;case"focusin":w="focus",v=ro;break;case"focusout":w="blur",v=ro;break;case"beforeblur":case"afterblur":v=ro;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Ha;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Nf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Uf;break;case Qu:case _u:case Wu:v=jf;break;case Ku:v=Hf;break;case"scroll":v=Sf;break;case"wheel":v=Qf;break;case"copy":case"cut":case"paste":v=Af;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Qa}var y=(t&4)!==0,C=!y&&e==="scroll",f=y?m!==null?m+"Capture":null:m;y=[];for(var d=u,g;d!==null;){g=d;var S=g.stateNode;if(g.tag===5&&S!==null&&(g=S,f!==null&&(S=Gn(d,f),S!=null&&y.push(nr(d,S,g)))),C)break;d=d.return}0<y.length&&(m=new v(m,w,null,n,h),p.push({event:m,listeners:y}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",m&&n!==Bo&&(w=n.relatedTarget||n.fromElement)&&(Ft(w)||w[Je]))break e;if((v||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,v?(w=n.relatedTarget||n.toElement,v=u,w=w?Ft(w):null,w!==null&&(C=_t(w),w!==C||w.tag!==5&&w.tag!==6)&&(w=null)):(v=null,w=u),v!==w)){if(y=Ha,S="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(y=Qa,S="onPointerLeave",f="onPointerEnter",d="pointer"),C=v==null?m:Zt(v),g=w==null?m:Zt(w),m=new y(S,d+"leave",v,n,h),m.target=C,m.relatedTarget=g,S=null,Ft(h)===u&&(y=new y(f,d+"enter",w,n,h),y.target=g,y.relatedTarget=C,S=y),C=S,v&&w)t:{for(y=v,f=w,d=0,g=y;g;g=Wt(g))d++;for(g=0,S=f;S;S=Wt(S))g++;for(;0<d-g;)y=Wt(y),d--;for(;0<g-d;)f=Wt(f),g--;for(;d--;){if(y===f||f!==null&&y===f.alternate)break t;y=Wt(y),f=Wt(f)}y=null}else y=null;v!==null&&$a(p,m,v,y,!1),w!==null&&C!==null&&$a(p,C,w,y,!0)}}e:{if(m=u?Zt(u):window,v=m.nodeName&&m.nodeName.toLowerCase(),v==="select"||v==="input"&&m.type==="file")var N=Gf;else if(Ka(m))if(zu)N=$f;else{N=bf;var E=Zf}else(v=m.nodeName)&&v.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(N=Jf);if(N&&(N=N(e,u))){Mu(p,N,n,h);break e}E&&E(e,m,u),e==="focusout"&&(E=m._wrapperState)&&E.controlled&&m.type==="number"&&Io(m,"number",m.value)}switch(E=u?Zt(u):window,e){case"focusin":(Ka(E)||E.contentEditable==="true")&&(qt=E,Yo=u,Qn=null);break;case"focusout":Qn=Yo=qt=null;break;case"mousedown":Xo=!0;break;case"contextmenu":case"mouseup":case"dragend":Xo=!1,Za(p,n,h);break;case"selectionchange":if(np)break;case"keydown":case"keyup":Za(p,n,h)}var j;if(Bi)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Xt?Iu(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Tu&&n.locale!=="ko"&&(Xt||P!=="onCompositionStart"?P==="onCompositionEnd"&&Xt&&(j=Du()):(ct=h,Mi="value"in ct?ct.value:ct.textContent,Xt=!0)),E=sl(u,P),0<E.length&&(P=new Va(P,e,null,n,h),p.push({event:P,listeners:E}),j?P.data=j:(j=Ou(n),j!==null&&(P.data=j)))),(j=Wf?Kf(e,n):Yf(e,n))&&(u=sl(u,"onBeforeInput"),0<u.length&&(h=new Va("onBeforeInput","beforeinput",null,n,h),p.push({event:h,listeners:u}),h.data=j))}Xu(p,t)})}function nr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function sl(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,o=l.stateNode;l.tag===5&&o!==null&&(l=o,o=Gn(e,n),o!=null&&r.unshift(nr(e,o,l)),o=Gn(e,t),o!=null&&r.push(nr(e,o,l))),e=e.return}return r}function Wt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function $a(e,t,n,r,l){for(var o=t._reactName,i=[];n!==null&&n!==r;){var a=n,s=a.alternate,u=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&u!==null&&(a=u,l?(s=Gn(n,o),s!=null&&i.unshift(nr(n,s,a))):l||(s=Gn(n,o),s!=null&&i.push(nr(n,s,a)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var ip=/\r\n?/g,ap=/\u0000|\uFFFD/g;function es(e){return(typeof e=="string"?e:""+e).replace(ip,`
`).replace(ap,"")}function Dr(e,t,n){if(t=es(t),es(e)!==t&&n)throw Error(k(425))}function ul(){}var qo=null,Go=null;function Zo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var bo=typeof setTimeout=="function"?setTimeout:void 0,sp=typeof clearTimeout=="function"?clearTimeout:void 0,ts=typeof Promise=="function"?Promise:void 0,up=typeof queueMicrotask=="function"?queueMicrotask:typeof ts<"u"?function(e){return ts.resolve(null).then(e).catch(cp)}:bo;function cp(e){setTimeout(function(){throw e})}function fo(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Jn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Jn(t)}function mt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ns(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var wn=Math.random().toString(36).slice(2),Ve="__reactFiber$"+wn,rr="__reactProps$"+wn,Je="__reactContainer$"+wn,Jo="__reactEvents$"+wn,dp="__reactListeners$"+wn,fp="__reactHandles$"+wn;function Ft(e){var t=e[Ve];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Je]||n[Ve]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ns(e);e!==null;){if(n=e[Ve])return n;e=ns(e)}return t}e=n,n=e.parentNode}return null}function hr(e){return e=e[Ve]||e[Je],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Zt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function Dl(e){return e[rr]||null}var $o=[],bt=-1;function Nt(e){return{current:e}}function B(e){0>bt||(e.current=$o[bt],$o[bt]=null,bt--)}function z(e,t){bt++,$o[bt]=e.current,e.current=t}var St={},ie=Nt(St),pe=Nt(!1),Mt=St;function dn(e,t){var n=e.type.contextTypes;if(!n)return St;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},o;for(o in n)l[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function he(e){return e=e.childContextTypes,e!=null}function cl(){B(pe),B(ie)}function rs(e,t,n){if(ie.current!==St)throw Error(k(168));z(ie,t),z(pe,n)}function Gu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(k(108,Gd(e)||"Unknown",l));return W({},n,r)}function dl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||St,Mt=ie.current,z(ie,e),z(pe,pe.current),!0}function ls(e,t,n){var r=e.stateNode;if(!r)throw Error(k(169));n?(e=Gu(e,t,Mt),r.__reactInternalMemoizedMergedChildContext=e,B(pe),B(ie),z(ie,e)):B(pe),z(pe,n)}var Xe=null,Tl=!1,po=!1;function Zu(e){Xe===null?Xe=[e]:Xe.push(e)}function pp(e){Tl=!0,Zu(e)}function Ct(){if(!po&&Xe!==null){po=!0;var e=0,t=O;try{var n=Xe;for(O=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Xe=null,Tl=!1}catch(l){throw Xe!==null&&(Xe=Xe.slice(e+1)),Su(Di,Ct),l}finally{O=t,po=!1}}return null}var Jt=[],$t=0,fl=null,pl=0,Ne=[],Ce=0,zt=null,qe=1,Ge="";function At(e,t){Jt[$t++]=pl,Jt[$t++]=fl,fl=e,pl=t}function bu(e,t,n){Ne[Ce++]=qe,Ne[Ce++]=Ge,Ne[Ce++]=zt,zt=e;var r=qe;e=Ge;var l=32-Ie(r)-1;r&=~(1<<l),n+=1;var o=32-Ie(t)+l;if(30<o){var i=l-l%5;o=(r&(1<<i)-1).toString(32),r>>=i,l-=i,qe=1<<32-Ie(t)+l|n<<l|r,Ge=o+e}else qe=1<<o|n<<l|r,Ge=e}function Vi(e){e.return!==null&&(At(e,1),bu(e,1,0))}function Qi(e){for(;e===fl;)fl=Jt[--$t],Jt[$t]=null,pl=Jt[--$t],Jt[$t]=null;for(;e===zt;)zt=Ne[--Ce],Ne[Ce]=null,Ge=Ne[--Ce],Ne[Ce]=null,qe=Ne[--Ce],Ne[Ce]=null}var ye=null,ve=null,H=!1,Te=null;function Ju(e,t){var n=Ee(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function os(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ye=e,ve=mt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ye=e,ve=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=zt!==null?{id:qe,overflow:Ge}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ee(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ye=e,ve=null,!0):!1;default:return!1}}function ei(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ti(e){if(H){var t=ve;if(t){var n=t;if(!os(e,t)){if(ei(e))throw Error(k(418));t=mt(n.nextSibling);var r=ye;t&&os(e,t)?Ju(r,n):(e.flags=e.flags&-4097|2,H=!1,ye=e)}}else{if(ei(e))throw Error(k(418));e.flags=e.flags&-4097|2,H=!1,ye=e}}}function is(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ye=e}function Tr(e){if(e!==ye)return!1;if(!H)return is(e),H=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Zo(e.type,e.memoizedProps)),t&&(t=ve)){if(ei(e))throw $u(),Error(k(418));for(;t;)Ju(e,t),t=mt(t.nextSibling)}if(is(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ve=mt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ve=null}}else ve=ye?mt(e.stateNode.nextSibling):null;return!0}function $u(){for(var e=ve;e;)e=mt(e.nextSibling)}function fn(){ve=ye=null,H=!1}function _i(e){Te===null?Te=[e]:Te.push(e)}var hp=nt.ReactCurrentBatchConfig;function Pn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,e));var l=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(i){var a=l.refs;i===null?delete a[o]:a[o]=i},t._stringRef=o,t)}if(typeof e!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,e))}return e}function Ir(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function as(e){var t=e._init;return t(e._payload)}function ec(e){function t(f,d){if(e){var g=f.deletions;g===null?(f.deletions=[d],f.flags|=16):g.push(d)}}function n(f,d){if(!e)return null;for(;d!==null;)t(f,d),d=d.sibling;return null}function r(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function l(f,d){return f=yt(f,d),f.index=0,f.sibling=null,f}function o(f,d,g){return f.index=g,e?(g=f.alternate,g!==null?(g=g.index,g<d?(f.flags|=2,d):g):(f.flags|=2,d)):(f.flags|=1048576,d)}function i(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,d,g,S){return d===null||d.tag!==6?(d=wo(g,f.mode,S),d.return=f,d):(d=l(d,g),d.return=f,d)}function s(f,d,g,S){var N=g.type;return N===Yt?h(f,d,g.props.children,S,g.key):d!==null&&(d.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===it&&as(N)===d.type)?(S=l(d,g.props),S.ref=Pn(f,d,g),S.return=f,S):(S=br(g.type,g.key,g.props,null,f.mode,S),S.ref=Pn(f,d,g),S.return=f,S)}function u(f,d,g,S){return d===null||d.tag!==4||d.stateNode.containerInfo!==g.containerInfo||d.stateNode.implementation!==g.implementation?(d=So(g,f.mode,S),d.return=f,d):(d=l(d,g.children||[]),d.return=f,d)}function h(f,d,g,S,N){return d===null||d.tag!==7?(d=Ot(g,f.mode,S,N),d.return=f,d):(d=l(d,g),d.return=f,d)}function p(f,d,g){if(typeof d=="string"&&d!==""||typeof d=="number")return d=wo(""+d,f.mode,g),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Nr:return g=br(d.type,d.key,d.props,null,f.mode,g),g.ref=Pn(f,null,d),g.return=f,g;case Kt:return d=So(d,f.mode,g),d.return=f,d;case it:var S=d._init;return p(f,S(d._payload),g)}if(On(d)||Cn(d))return d=Ot(d,f.mode,g,null),d.return=f,d;Ir(f,d)}return null}function m(f,d,g,S){var N=d!==null?d.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return N!==null?null:a(f,d,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Nr:return g.key===N?s(f,d,g,S):null;case Kt:return g.key===N?u(f,d,g,S):null;case it:return N=g._init,m(f,d,N(g._payload),S)}if(On(g)||Cn(g))return N!==null?null:h(f,d,g,S,null);Ir(f,g)}return null}function v(f,d,g,S,N){if(typeof S=="string"&&S!==""||typeof S=="number")return f=f.get(g)||null,a(d,f,""+S,N);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Nr:return f=f.get(S.key===null?g:S.key)||null,s(d,f,S,N);case Kt:return f=f.get(S.key===null?g:S.key)||null,u(d,f,S,N);case it:var E=S._init;return v(f,d,g,E(S._payload),N)}if(On(S)||Cn(S))return f=f.get(g)||null,h(d,f,S,N,null);Ir(d,S)}return null}function w(f,d,g,S){for(var N=null,E=null,j=d,P=d=0,M=null;j!==null&&P<g.length;P++){j.index>P?(M=j,j=null):M=j.sibling;var F=m(f,j,g[P],S);if(F===null){j===null&&(j=M);break}e&&j&&F.alternate===null&&t(f,j),d=o(F,d,P),E===null?N=F:E.sibling=F,E=F,j=M}if(P===g.length)return n(f,j),H&&At(f,P),N;if(j===null){for(;P<g.length;P++)j=p(f,g[P],S),j!==null&&(d=o(j,d,P),E===null?N=j:E.sibling=j,E=j);return H&&At(f,P),N}for(j=r(f,j);P<g.length;P++)M=v(j,f,P,g[P],S),M!==null&&(e&&M.alternate!==null&&j.delete(M.key===null?P:M.key),d=o(M,d,P),E===null?N=M:E.sibling=M,E=M);return e&&j.forEach(function(ge){return t(f,ge)}),H&&At(f,P),N}function y(f,d,g,S){var N=Cn(g);if(typeof N!="function")throw Error(k(150));if(g=N.call(g),g==null)throw Error(k(151));for(var E=N=null,j=d,P=d=0,M=null,F=g.next();j!==null&&!F.done;P++,F=g.next()){j.index>P?(M=j,j=null):M=j.sibling;var ge=m(f,j,F.value,S);if(ge===null){j===null&&(j=M);break}e&&j&&ge.alternate===null&&t(f,j),d=o(ge,d,P),E===null?N=ge:E.sibling=ge,E=ge,j=M}if(F.done)return n(f,j),H&&At(f,P),N;if(j===null){for(;!F.done;P++,F=g.next())F=p(f,F.value,S),F!==null&&(d=o(F,d,P),E===null?N=F:E.sibling=F,E=F);return H&&At(f,P),N}for(j=r(f,j);!F.done;P++,F=g.next())F=v(j,f,P,F.value,S),F!==null&&(e&&F.alternate!==null&&j.delete(F.key===null?P:F.key),d=o(F,d,P),E===null?N=F:E.sibling=F,E=F);return e&&j.forEach(function(Et){return t(f,Et)}),H&&At(f,P),N}function C(f,d,g,S){if(typeof g=="object"&&g!==null&&g.type===Yt&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Nr:e:{for(var N=g.key,E=d;E!==null;){if(E.key===N){if(N=g.type,N===Yt){if(E.tag===7){n(f,E.sibling),d=l(E,g.props.children),d.return=f,f=d;break e}}else if(E.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===it&&as(N)===E.type){n(f,E.sibling),d=l(E,g.props),d.ref=Pn(f,E,g),d.return=f,f=d;break e}n(f,E);break}else t(f,E);E=E.sibling}g.type===Yt?(d=Ot(g.props.children,f.mode,S,g.key),d.return=f,f=d):(S=br(g.type,g.key,g.props,null,f.mode,S),S.ref=Pn(f,d,g),S.return=f,f=S)}return i(f);case Kt:e:{for(E=g.key;d!==null;){if(d.key===E)if(d.tag===4&&d.stateNode.containerInfo===g.containerInfo&&d.stateNode.implementation===g.implementation){n(f,d.sibling),d=l(d,g.children||[]),d.return=f,f=d;break e}else{n(f,d);break}else t(f,d);d=d.sibling}d=So(g,f.mode,S),d.return=f,f=d}return i(f);case it:return E=g._init,C(f,d,E(g._payload),S)}if(On(g))return w(f,d,g,S);if(Cn(g))return y(f,d,g,S);Ir(f,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,d!==null&&d.tag===6?(n(f,d.sibling),d=l(d,g),d.return=f,f=d):(n(f,d),d=wo(g,f.mode,S),d.return=f,f=d),i(f)):n(f,d)}return C}var pn=ec(!0),tc=ec(!1),hl=Nt(null),ml=null,en=null,Wi=null;function Ki(){Wi=en=ml=null}function Yi(e){var t=hl.current;B(hl),e._currentValue=t}function ni(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function sn(e,t){ml=e,Wi=en=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(fe=!0),e.firstContext=null)}function Re(e){var t=e._currentValue;if(Wi!==e)if(e={context:e,memoizedValue:t,next:null},en===null){if(ml===null)throw Error(k(308));en=e,ml.dependencies={lanes:0,firstContext:e}}else en=en.next=e;return t}var Dt=null;function Xi(e){Dt===null?Dt=[e]:Dt.push(e)}function nc(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,Xi(t)):(n.next=l.next,l.next=n),t.interleaved=n,$e(e,r)}function $e(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var at=!1;function qi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function rc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ze(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function gt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,I&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,$e(e,n)}return l=r.interleaved,l===null?(t.next=t,Xi(r)):(t.next=l.next,l.next=t),r.interleaved=t,$e(e,n)}function Kr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ti(e,n)}}function ss(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?l=o=i:o=o.next=i,n=n.next}while(n!==null);o===null?l=o=t:o=o.next=t}else l=o=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function gl(e,t,n,r){var l=e.updateQueue;at=!1;var o=l.firstBaseUpdate,i=l.lastBaseUpdate,a=l.shared.pending;if(a!==null){l.shared.pending=null;var s=a,u=s.next;s.next=null,i===null?o=u:i.next=u,i=s;var h=e.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==i&&(a===null?h.firstBaseUpdate=u:a.next=u,h.lastBaseUpdate=s))}if(o!==null){var p=l.baseState;i=0,h=u=s=null,a=o;do{var m=a.lane,v=a.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=e,y=a;switch(m=t,v=n,y.tag){case 1:if(w=y.payload,typeof w=="function"){p=w.call(v,p,m);break e}p=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=y.payload,m=typeof w=="function"?w.call(v,p,m):w,m==null)break e;p=W({},p,m);break e;case 2:at=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=l.effects,m===null?l.effects=[a]:m.push(a))}else v={eventTime:v,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(u=h=v,s=p):h=h.next=v,i|=m;if(a=a.next,a===null){if(a=l.shared.pending,a===null)break;m=a,a=m.next,m.next=null,l.lastBaseUpdate=m,l.shared.pending=null}}while(!0);if(h===null&&(s=p),l.baseState=s,l.firstBaseUpdate=u,l.lastBaseUpdate=h,t=l.shared.interleaved,t!==null){l=t;do i|=l.lane,l=l.next;while(l!==t)}else o===null&&(l.shared.lanes=0);Bt|=i,e.lanes=i,e.memoizedState=p}}function us(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(k(191,l));l.call(r)}}}var mr={},_e=Nt(mr),lr=Nt(mr),or=Nt(mr);function Tt(e){if(e===mr)throw Error(k(174));return e}function Gi(e,t){switch(z(or,t),z(lr,e),z(_e,mr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Mo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Mo(t,e)}B(_e),z(_e,t)}function hn(){B(_e),B(lr),B(or)}function lc(e){Tt(or.current);var t=Tt(_e.current),n=Mo(t,e.type);t!==n&&(z(lr,e),z(_e,n))}function Zi(e){lr.current===e&&(B(_e),B(lr))}var V=Nt(0);function xl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ho=[];function bi(){for(var e=0;e<ho.length;e++)ho[e]._workInProgressVersionPrimary=null;ho.length=0}var Yr=nt.ReactCurrentDispatcher,mo=nt.ReactCurrentBatchConfig,Ut=0,Q=null,G=null,J=null,vl=!1,_n=!1,ir=0,mp=0;function re(){throw Error(k(321))}function Ji(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ze(e[n],t[n]))return!1;return!0}function $i(e,t,n,r,l,o){if(Ut=o,Q=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Yr.current=e===null||e.memoizedState===null?yp:wp,e=n(r,l),_n){o=0;do{if(_n=!1,ir=0,25<=o)throw Error(k(301));o+=1,J=G=null,t.updateQueue=null,Yr.current=Sp,e=n(r,l)}while(_n)}if(Yr.current=yl,t=G!==null&&G.next!==null,Ut=0,J=G=Q=null,vl=!1,t)throw Error(k(300));return e}function ea(){var e=ir!==0;return ir=0,e}function He(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return J===null?Q.memoizedState=J=e:J=J.next=e,J}function Ae(){if(G===null){var e=Q.alternate;e=e!==null?e.memoizedState:null}else e=G.next;var t=J===null?Q.memoizedState:J.next;if(t!==null)J=t,G=e;else{if(e===null)throw Error(k(310));G=e,e={memoizedState:G.memoizedState,baseState:G.baseState,baseQueue:G.baseQueue,queue:G.queue,next:null},J===null?Q.memoizedState=J=e:J=J.next=e}return J}function ar(e,t){return typeof t=="function"?t(e):t}function go(e){var t=Ae(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=G,l=r.baseQueue,o=n.pending;if(o!==null){if(l!==null){var i=l.next;l.next=o.next,o.next=i}r.baseQueue=l=o,n.pending=null}if(l!==null){o=l.next,r=r.baseState;var a=i=null,s=null,u=o;do{var h=u.lane;if((Ut&h)===h)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(a=s=p,i=r):s=s.next=p,Q.lanes|=h,Bt|=h}u=u.next}while(u!==null&&u!==o);s===null?i=r:s.next=a,ze(r,t.memoizedState)||(fe=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do o=l.lane,Q.lanes|=o,Bt|=o,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function xo(e){var t=Ae(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,o=t.memoizedState;if(l!==null){n.pending=null;var i=l=l.next;do o=e(o,i.action),i=i.next;while(i!==l);ze(o,t.memoizedState)||(fe=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function oc(){}function ic(e,t){var n=Q,r=Ae(),l=t(),o=!ze(r.memoizedState,l);if(o&&(r.memoizedState=l,fe=!0),r=r.queue,ta(uc.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||J!==null&&J.memoizedState.tag&1){if(n.flags|=2048,sr(9,sc.bind(null,n,r,l,t),void 0,null),$===null)throw Error(k(349));Ut&30||ac(n,t,l)}return l}function ac(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Q.updateQueue,t===null?(t={lastEffect:null,stores:null},Q.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function sc(e,t,n,r){t.value=n,t.getSnapshot=r,cc(t)&&dc(e)}function uc(e,t,n){return n(function(){cc(t)&&dc(e)})}function cc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ze(e,n)}catch{return!0}}function dc(e){var t=$e(e,1);t!==null&&Oe(t,e,1,-1)}function cs(e){var t=He();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ar,lastRenderedState:e},t.queue=e,e=e.dispatch=vp.bind(null,Q,e),[t.memoizedState,e]}function sr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Q.updateQueue,t===null?(t={lastEffect:null,stores:null},Q.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function fc(){return Ae().memoizedState}function Xr(e,t,n,r){var l=He();Q.flags|=e,l.memoizedState=sr(1|t,n,void 0,r===void 0?null:r)}function Il(e,t,n,r){var l=Ae();r=r===void 0?null:r;var o=void 0;if(G!==null){var i=G.memoizedState;if(o=i.destroy,r!==null&&Ji(r,i.deps)){l.memoizedState=sr(t,n,o,r);return}}Q.flags|=e,l.memoizedState=sr(1|t,n,o,r)}function ds(e,t){return Xr(8390656,8,e,t)}function ta(e,t){return Il(2048,8,e,t)}function pc(e,t){return Il(4,2,e,t)}function hc(e,t){return Il(4,4,e,t)}function mc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function gc(e,t,n){return n=n!=null?n.concat([e]):null,Il(4,4,mc.bind(null,t,e),n)}function na(){}function xc(e,t){var n=Ae();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ji(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function vc(e,t){var n=Ae();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ji(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function yc(e,t,n){return Ut&21?(ze(n,t)||(n=Cu(),Q.lanes|=n,Bt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,fe=!0),e.memoizedState=n)}function gp(e,t){var n=O;O=n!==0&&4>n?n:4,e(!0);var r=mo.transition;mo.transition={};try{e(!1),t()}finally{O=n,mo.transition=r}}function wc(){return Ae().memoizedState}function xp(e,t,n){var r=vt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Sc(e))kc(t,n);else if(n=nc(e,t,n,r),n!==null){var l=se();Oe(n,e,r,l),Nc(n,t,r)}}function vp(e,t,n){var r=vt(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Sc(e))kc(t,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var i=t.lastRenderedState,a=o(i,n);if(l.hasEagerState=!0,l.eagerState=a,ze(a,i)){var s=t.interleaved;s===null?(l.next=l,Xi(t)):(l.next=s.next,s.next=l),t.interleaved=l;return}}catch{}finally{}n=nc(e,t,l,r),n!==null&&(l=se(),Oe(n,e,r,l),Nc(n,t,r))}}function Sc(e){var t=e.alternate;return e===Q||t!==null&&t===Q}function kc(e,t){_n=vl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Nc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ti(e,n)}}var yl={readContext:Re,useCallback:re,useContext:re,useEffect:re,useImperativeHandle:re,useInsertionEffect:re,useLayoutEffect:re,useMemo:re,useReducer:re,useRef:re,useState:re,useDebugValue:re,useDeferredValue:re,useTransition:re,useMutableSource:re,useSyncExternalStore:re,useId:re,unstable_isNewReconciler:!1},yp={readContext:Re,useCallback:function(e,t){return He().memoizedState=[e,t===void 0?null:t],e},useContext:Re,useEffect:ds,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Xr(4194308,4,mc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Xr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Xr(4,2,e,t)},useMemo:function(e,t){var n=He();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=He();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=xp.bind(null,Q,e),[r.memoizedState,e]},useRef:function(e){var t=He();return e={current:e},t.memoizedState=e},useState:cs,useDebugValue:na,useDeferredValue:function(e){return He().memoizedState=e},useTransition:function(){var e=cs(!1),t=e[0];return e=gp.bind(null,e[1]),He().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Q,l=He();if(H){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),$===null)throw Error(k(349));Ut&30||ac(r,t,n)}l.memoizedState=n;var o={value:n,getSnapshot:t};return l.queue=o,ds(uc.bind(null,r,o,e),[e]),r.flags|=2048,sr(9,sc.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=He(),t=$.identifierPrefix;if(H){var n=Ge,r=qe;n=(r&~(1<<32-Ie(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ir++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=mp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},wp={readContext:Re,useCallback:xc,useContext:Re,useEffect:ta,useImperativeHandle:gc,useInsertionEffect:pc,useLayoutEffect:hc,useMemo:vc,useReducer:go,useRef:fc,useState:function(){return go(ar)},useDebugValue:na,useDeferredValue:function(e){var t=Ae();return yc(t,G.memoizedState,e)},useTransition:function(){var e=go(ar)[0],t=Ae().memoizedState;return[e,t]},useMutableSource:oc,useSyncExternalStore:ic,useId:wc,unstable_isNewReconciler:!1},Sp={readContext:Re,useCallback:xc,useContext:Re,useEffect:ta,useImperativeHandle:gc,useInsertionEffect:pc,useLayoutEffect:hc,useMemo:vc,useReducer:xo,useRef:fc,useState:function(){return xo(ar)},useDebugValue:na,useDeferredValue:function(e){var t=Ae();return G===null?t.memoizedState=e:yc(t,G.memoizedState,e)},useTransition:function(){var e=xo(ar)[0],t=Ae().memoizedState;return[e,t]},useMutableSource:oc,useSyncExternalStore:ic,useId:wc,unstable_isNewReconciler:!1};function Fe(e,t){if(e&&e.defaultProps){t=W({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ri(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:W({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ol={isMounted:function(e){return(e=e._reactInternals)?_t(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=se(),l=vt(e),o=Ze(r,l);o.payload=t,n!=null&&(o.callback=n),t=gt(e,o,l),t!==null&&(Oe(t,e,l,r),Kr(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=se(),l=vt(e),o=Ze(r,l);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=gt(e,o,l),t!==null&&(Oe(t,e,l,r),Kr(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=se(),r=vt(e),l=Ze(n,r);l.tag=2,t!=null&&(l.callback=t),t=gt(e,l,r),t!==null&&(Oe(t,e,r,n),Kr(t,e,r))}};function fs(e,t,n,r,l,o,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,i):t.prototype&&t.prototype.isPureReactComponent?!er(n,r)||!er(l,o):!0}function Cc(e,t,n){var r=!1,l=St,o=t.contextType;return typeof o=="object"&&o!==null?o=Re(o):(l=he(t)?Mt:ie.current,r=t.contextTypes,o=(r=r!=null)?dn(e,l):St),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ol,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=o),t}function ps(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ol.enqueueReplaceState(t,t.state,null)}function li(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},qi(e);var o=t.contextType;typeof o=="object"&&o!==null?l.context=Re(o):(o=he(t)?Mt:ie.current,l.context=dn(e,o)),l.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(ri(e,t,o,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&Ol.enqueueReplaceState(l,l.state,null),gl(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function mn(e,t){try{var n="",r=t;do n+=qd(r),r=r.return;while(r);var l=n}catch(o){l=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:l,digest:null}}function vo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function oi(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var kp=typeof WeakMap=="function"?WeakMap:Map;function Ec(e,t,n){n=Ze(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Sl||(Sl=!0,mi=r),oi(e,t)},n}function jc(e,t,n){n=Ze(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){oi(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){oi(e,t),typeof r!="function"&&(xt===null?xt=new Set([this]):xt.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function hs(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new kp;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=Mp.bind(null,e,t,n),t.then(e,e))}function ms(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function gs(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ze(-1,1),t.tag=2,gt(n,t,1))),n.lanes|=1),e)}var Np=nt.ReactCurrentOwner,fe=!1;function ae(e,t,n,r){t.child=e===null?tc(t,null,n,r):pn(t,e.child,n,r)}function xs(e,t,n,r,l){n=n.render;var o=t.ref;return sn(t,l),r=$i(e,t,n,r,o,l),n=ea(),e!==null&&!fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,et(e,t,l)):(H&&n&&Vi(t),t.flags|=1,ae(e,t,r,l),t.child)}function vs(e,t,n,r,l){if(e===null){var o=n.type;return typeof o=="function"&&!ca(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Rc(e,t,o,r,l)):(e=br(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&l)){var i=o.memoizedProps;if(n=n.compare,n=n!==null?n:er,n(i,r)&&e.ref===t.ref)return et(e,t,l)}return t.flags|=1,e=yt(o,r),e.ref=t.ref,e.return=t,t.child=e}function Rc(e,t,n,r,l){if(e!==null){var o=e.memoizedProps;if(er(o,r)&&e.ref===t.ref)if(fe=!1,t.pendingProps=r=o,(e.lanes&l)!==0)e.flags&131072&&(fe=!0);else return t.lanes=e.lanes,et(e,t,l)}return ii(e,t,n,r,l)}function Ac(e,t,n){var r=t.pendingProps,l=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},z(nn,xe),xe|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,z(nn,xe),xe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,z(nn,xe),xe|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,z(nn,xe),xe|=r;return ae(e,t,l,n),t.child}function Pc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ii(e,t,n,r,l){var o=he(n)?Mt:ie.current;return o=dn(t,o),sn(t,l),n=$i(e,t,n,r,o,l),r=ea(),e!==null&&!fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,et(e,t,l)):(H&&r&&Vi(t),t.flags|=1,ae(e,t,n,l),t.child)}function ys(e,t,n,r,l){if(he(n)){var o=!0;dl(t)}else o=!1;if(sn(t,l),t.stateNode===null)qr(e,t),Cc(t,n,r),li(t,n,r,l),r=!0;else if(e===null){var i=t.stateNode,a=t.memoizedProps;i.props=a;var s=i.context,u=n.contextType;typeof u=="object"&&u!==null?u=Re(u):(u=he(n)?Mt:ie.current,u=dn(t,u));var h=n.getDerivedStateFromProps,p=typeof h=="function"||typeof i.getSnapshotBeforeUpdate=="function";p||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==r||s!==u)&&ps(t,i,r,u),at=!1;var m=t.memoizedState;i.state=m,gl(t,r,i,l),s=t.memoizedState,a!==r||m!==s||pe.current||at?(typeof h=="function"&&(ri(t,n,h,r),s=t.memoizedState),(a=at||fs(t,n,a,r,m,s,u))?(p||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),i.props=r,i.state=s,i.context=u,r=a):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,rc(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Fe(t.type,a),i.props=u,p=t.pendingProps,m=i.context,s=n.contextType,typeof s=="object"&&s!==null?s=Re(s):(s=he(n)?Mt:ie.current,s=dn(t,s));var v=n.getDerivedStateFromProps;(h=typeof v=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==p||m!==s)&&ps(t,i,r,s),at=!1,m=t.memoizedState,i.state=m,gl(t,r,i,l);var w=t.memoizedState;a!==p||m!==w||pe.current||at?(typeof v=="function"&&(ri(t,n,v,r),w=t.memoizedState),(u=at||fs(t,n,u,r,m,w,s)||!1)?(h||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,w,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,w,s)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),i.props=r,i.state=w,i.context=s,r=u):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return ai(e,t,n,r,o,l)}function ai(e,t,n,r,l,o){Pc(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return l&&ls(t,n,!1),et(e,t,o);r=t.stateNode,Np.current=t;var a=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=pn(t,e.child,null,o),t.child=pn(t,null,a,o)):ae(e,t,a,o),t.memoizedState=r.state,l&&ls(t,n,!0),t.child}function Lc(e){var t=e.stateNode;t.pendingContext?rs(e,t.pendingContext,t.pendingContext!==t.context):t.context&&rs(e,t.context,!1),Gi(e,t.containerInfo)}function ws(e,t,n,r,l){return fn(),_i(l),t.flags|=256,ae(e,t,n,r),t.child}var si={dehydrated:null,treeContext:null,retryLane:0};function ui(e){return{baseLanes:e,cachePool:null,transitions:null}}function Fc(e,t,n){var r=t.pendingProps,l=V.current,o=!1,i=(t.flags&128)!==0,a;if((a=i)||(a=e!==null&&e.memoizedState===null?!1:(l&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),z(V,l&1),e===null)return ti(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,o?(r=t.mode,o=t.child,i={mode:"hidden",children:i},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=i):o=Ul(i,r,0,null),e=Ot(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=ui(n),t.memoizedState=si,e):ra(t,i));if(l=e.memoizedState,l!==null&&(a=l.dehydrated,a!==null))return Cp(e,t,i,r,a,l,n);if(o){o=r.fallback,i=t.mode,l=e.child,a=l.sibling;var s={mode:"hidden",children:r.children};return!(i&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=yt(l,s),r.subtreeFlags=l.subtreeFlags&14680064),a!==null?o=yt(a,o):(o=Ot(o,i,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,i=e.child.memoizedState,i=i===null?ui(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=e.childLanes&~n,t.memoizedState=si,r}return o=e.child,e=o.sibling,r=yt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ra(e,t){return t=Ul({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Or(e,t,n,r){return r!==null&&_i(r),pn(t,e.child,null,n),e=ra(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Cp(e,t,n,r,l,o,i){if(n)return t.flags&256?(t.flags&=-257,r=vo(Error(k(422))),Or(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,l=t.mode,r=Ul({mode:"visible",children:r.children},l,0,null),o=Ot(o,l,i,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&pn(t,e.child,null,i),t.child.memoizedState=ui(i),t.memoizedState=si,o);if(!(t.mode&1))return Or(e,t,i,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(k(419)),r=vo(o,r,void 0),Or(e,t,i,r)}if(a=(i&e.childLanes)!==0,fe||a){if(r=$,r!==null){switch(i&-i){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|i)?0:l,l!==0&&l!==o.retryLane&&(o.retryLane=l,$e(e,l),Oe(r,e,l,-1))}return ua(),r=vo(Error(k(421))),Or(e,t,i,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=zp.bind(null,e),l._reactRetry=t,null):(e=o.treeContext,ve=mt(l.nextSibling),ye=t,H=!0,Te=null,e!==null&&(Ne[Ce++]=qe,Ne[Ce++]=Ge,Ne[Ce++]=zt,qe=e.id,Ge=e.overflow,zt=t),t=ra(t,r.children),t.flags|=4096,t)}function Ss(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ni(e.return,t,n)}function yo(e,t,n,r,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=l)}function Dc(e,t,n){var r=t.pendingProps,l=r.revealOrder,o=r.tail;if(ae(e,t,r.children,n),r=V.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ss(e,n,t);else if(e.tag===19)Ss(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(z(V,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&xl(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),yo(t,!1,l,n,o);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&xl(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}yo(t,!0,n,null,o);break;case"together":yo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function qr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function et(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Bt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=yt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=yt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ep(e,t,n){switch(t.tag){case 3:Lc(t),fn();break;case 5:lc(t);break;case 1:he(t.type)&&dl(t);break;case 4:Gi(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;z(hl,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(z(V,V.current&1),t.flags|=128,null):n&t.child.childLanes?Fc(e,t,n):(z(V,V.current&1),e=et(e,t,n),e!==null?e.sibling:null);z(V,V.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Dc(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),z(V,V.current),r)break;return null;case 22:case 23:return t.lanes=0,Ac(e,t,n)}return et(e,t,n)}var Tc,ci,Ic,Oc;Tc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ci=function(){};Ic=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,Tt(_e.current);var o=null;switch(n){case"input":l=Do(e,l),r=Do(e,r),o=[];break;case"select":l=W({},l,{value:void 0}),r=W({},r,{value:void 0}),o=[];break;case"textarea":l=Oo(e,l),r=Oo(e,r),o=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ul)}zo(n,r);var i;n=null;for(u in l)if(!r.hasOwnProperty(u)&&l.hasOwnProperty(u)&&l[u]!=null)if(u==="style"){var a=l[u];for(i in a)a.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Xn.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var s=r[u];if(a=l!=null?l[u]:void 0,r.hasOwnProperty(u)&&s!==a&&(s!=null||a!=null))if(u==="style")if(a){for(i in a)!a.hasOwnProperty(i)||s&&s.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in s)s.hasOwnProperty(i)&&a[i]!==s[i]&&(n||(n={}),n[i]=s[i])}else n||(o||(o=[]),o.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(o=o||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Xn.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&U("scroll",e),o||a===s||(o=[])):(o=o||[]).push(u,s))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Oc=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ln(e,t){if(!H)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function le(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function jp(e,t,n){var r=t.pendingProps;switch(Qi(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return le(t),null;case 1:return he(t.type)&&cl(),le(t),null;case 3:return r=t.stateNode,hn(),B(pe),B(ie),bi(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Tr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Te!==null&&(vi(Te),Te=null))),ci(e,t),le(t),null;case 5:Zi(t);var l=Tt(or.current);if(n=t.type,e!==null&&t.stateNode!=null)Ic(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(k(166));return le(t),null}if(e=Tt(_e.current),Tr(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Ve]=t,r[rr]=o,e=(t.mode&1)!==0,n){case"dialog":U("cancel",r),U("close",r);break;case"iframe":case"object":case"embed":U("load",r);break;case"video":case"audio":for(l=0;l<zn.length;l++)U(zn[l],r);break;case"source":U("error",r);break;case"img":case"image":case"link":U("error",r),U("load",r);break;case"details":U("toggle",r);break;case"input":La(r,o),U("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},U("invalid",r);break;case"textarea":Da(r,o),U("invalid",r)}zo(n,o),l=null;for(var i in o)if(o.hasOwnProperty(i)){var a=o[i];i==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Dr(r.textContent,a,e),l=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Dr(r.textContent,a,e),l=["children",""+a]):Xn.hasOwnProperty(i)&&a!=null&&i==="onScroll"&&U("scroll",r)}switch(n){case"input":Cr(r),Fa(r,o,!0);break;case"textarea":Cr(r),Ta(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=ul)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=uu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[Ve]=t,e[rr]=r,Tc(e,t,!1,!1),t.stateNode=e;e:{switch(i=Uo(n,r),n){case"dialog":U("cancel",e),U("close",e),l=r;break;case"iframe":case"object":case"embed":U("load",e),l=r;break;case"video":case"audio":for(l=0;l<zn.length;l++)U(zn[l],e);l=r;break;case"source":U("error",e),l=r;break;case"img":case"image":case"link":U("error",e),U("load",e),l=r;break;case"details":U("toggle",e),l=r;break;case"input":La(e,r),l=Do(e,r),U("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=W({},r,{value:void 0}),U("invalid",e);break;case"textarea":Da(e,r),l=Oo(e,r),U("invalid",e);break;default:l=r}zo(n,l),a=l;for(o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="style"?fu(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&cu(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&qn(e,s):typeof s=="number"&&qn(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Xn.hasOwnProperty(o)?s!=null&&o==="onScroll"&&U("scroll",e):s!=null&&Ri(e,o,s,i))}switch(n){case"input":Cr(e),Fa(e,r,!1);break;case"textarea":Cr(e),Ta(e);break;case"option":r.value!=null&&e.setAttribute("value",""+wt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?rn(e,!!r.multiple,o,!1):r.defaultValue!=null&&rn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=ul)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return le(t),null;case 6:if(e&&t.stateNode!=null)Oc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(k(166));if(n=Tt(or.current),Tt(_e.current),Tr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ve]=t,(o=r.nodeValue!==n)&&(e=ye,e!==null))switch(e.tag){case 3:Dr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Dr(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ve]=t,t.stateNode=r}return le(t),null;case 13:if(B(V),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(H&&ve!==null&&t.mode&1&&!(t.flags&128))$u(),fn(),t.flags|=98560,o=!1;else if(o=Tr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(k(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(k(317));o[Ve]=t}else fn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;le(t),o=!1}else Te!==null&&(vi(Te),Te=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||V.current&1?Z===0&&(Z=3):ua())),t.updateQueue!==null&&(t.flags|=4),le(t),null);case 4:return hn(),ci(e,t),e===null&&tr(t.stateNode.containerInfo),le(t),null;case 10:return Yi(t.type._context),le(t),null;case 17:return he(t.type)&&cl(),le(t),null;case 19:if(B(V),o=t.memoizedState,o===null)return le(t),null;if(r=(t.flags&128)!==0,i=o.rendering,i===null)if(r)Ln(o,!1);else{if(Z!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=xl(e),i!==null){for(t.flags|=128,Ln(o,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,e=i.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return z(V,V.current&1|2),t.child}e=e.sibling}o.tail!==null&&X()>gn&&(t.flags|=128,r=!0,Ln(o,!1),t.lanes=4194304)}else{if(!r)if(e=xl(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ln(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!H)return le(t),null}else 2*X()-o.renderingStartTime>gn&&n!==1073741824&&(t.flags|=128,r=!0,Ln(o,!1),t.lanes=4194304);o.isBackwards?(i.sibling=t.child,t.child=i):(n=o.last,n!==null?n.sibling=i:t.child=i,o.last=i)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=X(),t.sibling=null,n=V.current,z(V,r?n&1|2:n&1),t):(le(t),null);case 22:case 23:return sa(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?xe&1073741824&&(le(t),t.subtreeFlags&6&&(t.flags|=8192)):le(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function Rp(e,t){switch(Qi(t),t.tag){case 1:return he(t.type)&&cl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return hn(),B(pe),B(ie),bi(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Zi(t),null;case 13:if(B(V),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));fn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return B(V),null;case 4:return hn(),null;case 10:return Yi(t.type._context),null;case 22:case 23:return sa(),null;case 24:return null;default:return null}}var Mr=!1,oe=!1,Ap=typeof WeakSet=="function"?WeakSet:Set,R=null;function tn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){K(e,t,r)}else n.current=null}function di(e,t,n){try{n()}catch(r){K(e,t,r)}}var ks=!1;function Pp(e,t){if(qo=il,e=Hu(),Hi(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var i=0,a=-1,s=-1,u=0,h=0,p=e,m=null;t:for(;;){for(var v;p!==n||l!==0&&p.nodeType!==3||(a=i+l),p!==o||r!==0&&p.nodeType!==3||(s=i+r),p.nodeType===3&&(i+=p.nodeValue.length),(v=p.firstChild)!==null;)m=p,p=v;for(;;){if(p===e)break t;if(m===n&&++u===l&&(a=i),m===o&&++h===r&&(s=i),(v=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=v}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Go={focusedElem:e,selectionRange:n},il=!1,R=t;R!==null;)if(t=R,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,R=e;else for(;R!==null;){t=R;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var y=w.memoizedProps,C=w.memoizedState,f=t.stateNode,d=f.getSnapshotBeforeUpdate(t.elementType===t.type?y:Fe(t.type,y),C);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(S){K(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,R=e;break}R=t.return}return w=ks,ks=!1,w}function Wn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var o=l.destroy;l.destroy=void 0,o!==void 0&&di(t,n,o)}l=l.next}while(l!==r)}}function Ml(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function fi(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Mc(e){var t=e.alternate;t!==null&&(e.alternate=null,Mc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ve],delete t[rr],delete t[Jo],delete t[dp],delete t[fp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function zc(e){return e.tag===5||e.tag===3||e.tag===4}function Ns(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||zc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function pi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ul));else if(r!==4&&(e=e.child,e!==null))for(pi(e,t,n),e=e.sibling;e!==null;)pi(e,t,n),e=e.sibling}function hi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(hi(e,t,n),e=e.sibling;e!==null;)hi(e,t,n),e=e.sibling}var ee=null,De=!1;function ot(e,t,n){for(n=n.child;n!==null;)Uc(e,t,n),n=n.sibling}function Uc(e,t,n){if(Qe&&typeof Qe.onCommitFiberUnmount=="function")try{Qe.onCommitFiberUnmount(Al,n)}catch{}switch(n.tag){case 5:oe||tn(n,t);case 6:var r=ee,l=De;ee=null,ot(e,t,n),ee=r,De=l,ee!==null&&(De?(e=ee,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ee.removeChild(n.stateNode));break;case 18:ee!==null&&(De?(e=ee,n=n.stateNode,e.nodeType===8?fo(e.parentNode,n):e.nodeType===1&&fo(e,n),Jn(e)):fo(ee,n.stateNode));break;case 4:r=ee,l=De,ee=n.stateNode.containerInfo,De=!0,ot(e,t,n),ee=r,De=l;break;case 0:case 11:case 14:case 15:if(!oe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var o=l,i=o.destroy;o=o.tag,i!==void 0&&(o&2||o&4)&&di(n,t,i),l=l.next}while(l!==r)}ot(e,t,n);break;case 1:if(!oe&&(tn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){K(n,t,a)}ot(e,t,n);break;case 21:ot(e,t,n);break;case 22:n.mode&1?(oe=(r=oe)||n.memoizedState!==null,ot(e,t,n),oe=r):ot(e,t,n);break;default:ot(e,t,n)}}function Cs(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Ap),t.forEach(function(r){var l=Up.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Le(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var o=e,i=t,a=i;e:for(;a!==null;){switch(a.tag){case 5:ee=a.stateNode,De=!1;break e;case 3:ee=a.stateNode.containerInfo,De=!0;break e;case 4:ee=a.stateNode.containerInfo,De=!0;break e}a=a.return}if(ee===null)throw Error(k(160));Uc(o,i,l),ee=null,De=!1;var s=l.alternate;s!==null&&(s.return=null),l.return=null}catch(u){K(l,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Bc(t,e),t=t.sibling}function Bc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Le(t,e),Be(e),r&4){try{Wn(3,e,e.return),Ml(3,e)}catch(y){K(e,e.return,y)}try{Wn(5,e,e.return)}catch(y){K(e,e.return,y)}}break;case 1:Le(t,e),Be(e),r&512&&n!==null&&tn(n,n.return);break;case 5:if(Le(t,e),Be(e),r&512&&n!==null&&tn(n,n.return),e.flags&32){var l=e.stateNode;try{qn(l,"")}catch(y){K(e,e.return,y)}}if(r&4&&(l=e.stateNode,l!=null)){var o=e.memoizedProps,i=n!==null?n.memoizedProps:o,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&au(l,o),Uo(a,i);var u=Uo(a,o);for(i=0;i<s.length;i+=2){var h=s[i],p=s[i+1];h==="style"?fu(l,p):h==="dangerouslySetInnerHTML"?cu(l,p):h==="children"?qn(l,p):Ri(l,h,p,u)}switch(a){case"input":To(l,o);break;case"textarea":su(l,o);break;case"select":var m=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?rn(l,!!o.multiple,v,!1):m!==!!o.multiple&&(o.defaultValue!=null?rn(l,!!o.multiple,o.defaultValue,!0):rn(l,!!o.multiple,o.multiple?[]:"",!1))}l[rr]=o}catch(y){K(e,e.return,y)}}break;case 6:if(Le(t,e),Be(e),r&4){if(e.stateNode===null)throw Error(k(162));l=e.stateNode,o=e.memoizedProps;try{l.nodeValue=o}catch(y){K(e,e.return,y)}}break;case 3:if(Le(t,e),Be(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Jn(t.containerInfo)}catch(y){K(e,e.return,y)}break;case 4:Le(t,e),Be(e);break;case 13:Le(t,e),Be(e),l=e.child,l.flags&8192&&(o=l.memoizedState!==null,l.stateNode.isHidden=o,!o||l.alternate!==null&&l.alternate.memoizedState!==null||(ia=X())),r&4&&Cs(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(oe=(u=oe)||h,Le(t,e),oe=u):Le(t,e),Be(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!h&&e.mode&1)for(R=e,h=e.child;h!==null;){for(p=R=h;R!==null;){switch(m=R,v=m.child,m.tag){case 0:case 11:case 14:case 15:Wn(4,m,m.return);break;case 1:tn(m,m.return);var w=m.stateNode;if(typeof w.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(y){K(r,n,y)}}break;case 5:tn(m,m.return);break;case 22:if(m.memoizedState!==null){js(p);continue}}v!==null?(v.return=m,R=v):js(p)}h=h.sibling}e:for(h=null,p=e;;){if(p.tag===5){if(h===null){h=p;try{l=p.stateNode,u?(o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=p.stateNode,s=p.memoizedProps.style,i=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=du("display",i))}catch(y){K(e,e.return,y)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(y){K(e,e.return,y)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Le(t,e),Be(e),r&4&&Cs(e);break;case 21:break;default:Le(t,e),Be(e)}}function Be(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(zc(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(qn(l,""),r.flags&=-33);var o=Ns(e);hi(e,o,l);break;case 3:case 4:var i=r.stateNode.containerInfo,a=Ns(e);pi(e,a,i);break;default:throw Error(k(161))}}catch(s){K(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Lp(e,t,n){R=e,Hc(e)}function Hc(e,t,n){for(var r=(e.mode&1)!==0;R!==null;){var l=R,o=l.child;if(l.tag===22&&r){var i=l.memoizedState!==null||Mr;if(!i){var a=l.alternate,s=a!==null&&a.memoizedState!==null||oe;a=Mr;var u=oe;if(Mr=i,(oe=s)&&!u)for(R=l;R!==null;)i=R,s=i.child,i.tag===22&&i.memoizedState!==null?Rs(l):s!==null?(s.return=i,R=s):Rs(l);for(;o!==null;)R=o,Hc(o),o=o.sibling;R=l,Mr=a,oe=u}Es(e)}else l.subtreeFlags&8772&&o!==null?(o.return=l,R=o):Es(e)}}function Es(e){for(;R!==null;){var t=R;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:oe||Ml(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!oe)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Fe(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&us(t,o,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}us(t,i,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&Jn(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}oe||t.flags&512&&fi(t)}catch(m){K(t,t.return,m)}}if(t===e){R=null;break}if(n=t.sibling,n!==null){n.return=t.return,R=n;break}R=t.return}}function js(e){for(;R!==null;){var t=R;if(t===e){R=null;break}var n=t.sibling;if(n!==null){n.return=t.return,R=n;break}R=t.return}}function Rs(e){for(;R!==null;){var t=R;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ml(4,t)}catch(s){K(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(s){K(t,l,s)}}var o=t.return;try{fi(t)}catch(s){K(t,o,s)}break;case 5:var i=t.return;try{fi(t)}catch(s){K(t,i,s)}}}catch(s){K(t,t.return,s)}if(t===e){R=null;break}var a=t.sibling;if(a!==null){a.return=t.return,R=a;break}R=t.return}}var Fp=Math.ceil,wl=nt.ReactCurrentDispatcher,la=nt.ReactCurrentOwner,je=nt.ReactCurrentBatchConfig,I=0,$=null,q=null,te=0,xe=0,nn=Nt(0),Z=0,ur=null,Bt=0,zl=0,oa=0,Kn=null,de=null,ia=0,gn=1/0,Ye=null,Sl=!1,mi=null,xt=null,zr=!1,dt=null,kl=0,Yn=0,gi=null,Gr=-1,Zr=0;function se(){return I&6?X():Gr!==-1?Gr:Gr=X()}function vt(e){return e.mode&1?I&2&&te!==0?te&-te:hp.transition!==null?(Zr===0&&(Zr=Cu()),Zr):(e=O,e!==0||(e=window.event,e=e===void 0?16:Fu(e.type)),e):1}function Oe(e,t,n,r){if(50<Yn)throw Yn=0,gi=null,Error(k(185));fr(e,n,r),(!(I&2)||e!==$)&&(e===$&&(!(I&2)&&(zl|=n),Z===4&&ut(e,te)),me(e,r),n===1&&I===0&&!(t.mode&1)&&(gn=X()+500,Tl&&Ct()))}function me(e,t){var n=e.callbackNode;hf(e,t);var r=ol(e,e===$?te:0);if(r===0)n!==null&&Ma(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ma(n),t===1)e.tag===0?pp(As.bind(null,e)):Zu(As.bind(null,e)),up(function(){!(I&6)&&Ct()}),n=null;else{switch(Eu(r)){case 1:n=Di;break;case 4:n=ku;break;case 16:n=ll;break;case 536870912:n=Nu;break;default:n=ll}n=qc(n,Vc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Vc(e,t){if(Gr=-1,Zr=0,I&6)throw Error(k(327));var n=e.callbackNode;if(un()&&e.callbackNode!==n)return null;var r=ol(e,e===$?te:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Nl(e,r);else{t=r;var l=I;I|=2;var o=_c();($!==e||te!==t)&&(Ye=null,gn=X()+500,It(e,t));do try{Ip();break}catch(a){Qc(e,a)}while(!0);Ki(),wl.current=o,I=l,q!==null?t=0:($=null,te=0,t=Z)}if(t!==0){if(t===2&&(l=_o(e),l!==0&&(r=l,t=xi(e,l))),t===1)throw n=ur,It(e,0),ut(e,r),me(e,X()),n;if(t===6)ut(e,r);else{if(l=e.current.alternate,!(r&30)&&!Dp(l)&&(t=Nl(e,r),t===2&&(o=_o(e),o!==0&&(r=o,t=xi(e,o))),t===1))throw n=ur,It(e,0),ut(e,r),me(e,X()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(k(345));case 2:Pt(e,de,Ye);break;case 3:if(ut(e,r),(r&130023424)===r&&(t=ia+500-X(),10<t)){if(ol(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){se(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=bo(Pt.bind(null,e,de,Ye),t);break}Pt(e,de,Ye);break;case 4:if(ut(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var i=31-Ie(r);o=1<<i,i=t[i],i>l&&(l=i),r&=~o}if(r=l,r=X()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Fp(r/1960))-r,10<r){e.timeoutHandle=bo(Pt.bind(null,e,de,Ye),r);break}Pt(e,de,Ye);break;case 5:Pt(e,de,Ye);break;default:throw Error(k(329))}}}return me(e,X()),e.callbackNode===n?Vc.bind(null,e):null}function xi(e,t){var n=Kn;return e.current.memoizedState.isDehydrated&&(It(e,t).flags|=256),e=Nl(e,t),e!==2&&(t=de,de=n,t!==null&&vi(t)),e}function vi(e){de===null?de=e:de.push.apply(de,e)}function Dp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],o=l.getSnapshot;l=l.value;try{if(!ze(o(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ut(e,t){for(t&=~oa,t&=~zl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ie(t),r=1<<n;e[n]=-1,t&=~r}}function As(e){if(I&6)throw Error(k(327));un();var t=ol(e,0);if(!(t&1))return me(e,X()),null;var n=Nl(e,t);if(e.tag!==0&&n===2){var r=_o(e);r!==0&&(t=r,n=xi(e,r))}if(n===1)throw n=ur,It(e,0),ut(e,t),me(e,X()),n;if(n===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Pt(e,de,Ye),me(e,X()),null}function aa(e,t){var n=I;I|=1;try{return e(t)}finally{I=n,I===0&&(gn=X()+500,Tl&&Ct())}}function Ht(e){dt!==null&&dt.tag===0&&!(I&6)&&un();var t=I;I|=1;var n=je.transition,r=O;try{if(je.transition=null,O=1,e)return e()}finally{O=r,je.transition=n,I=t,!(I&6)&&Ct()}}function sa(){xe=nn.current,B(nn)}function It(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,sp(n)),q!==null)for(n=q.return;n!==null;){var r=n;switch(Qi(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&cl();break;case 3:hn(),B(pe),B(ie),bi();break;case 5:Zi(r);break;case 4:hn();break;case 13:B(V);break;case 19:B(V);break;case 10:Yi(r.type._context);break;case 22:case 23:sa()}n=n.return}if($=e,q=e=yt(e.current,null),te=xe=t,Z=0,ur=null,oa=zl=Bt=0,de=Kn=null,Dt!==null){for(t=0;t<Dt.length;t++)if(n=Dt[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,o=n.pending;if(o!==null){var i=o.next;o.next=l,r.next=i}n.pending=r}Dt=null}return e}function Qc(e,t){do{var n=q;try{if(Ki(),Yr.current=yl,vl){for(var r=Q.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}vl=!1}if(Ut=0,J=G=Q=null,_n=!1,ir=0,la.current=null,n===null||n.return===null){Z=1,ur=t,q=null;break}e:{var o=e,i=n.return,a=n,s=t;if(t=te,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,h=a,p=h.tag;if(!(h.mode&1)&&(p===0||p===11||p===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var v=ms(i);if(v!==null){v.flags&=-257,gs(v,i,a,o,t),v.mode&1&&hs(o,u,t),t=v,s=u;var w=t.updateQueue;if(w===null){var y=new Set;y.add(s),t.updateQueue=y}else w.add(s);break e}else{if(!(t&1)){hs(o,u,t),ua();break e}s=Error(k(426))}}else if(H&&a.mode&1){var C=ms(i);if(C!==null){!(C.flags&65536)&&(C.flags|=256),gs(C,i,a,o,t),_i(mn(s,a));break e}}o=s=mn(s,a),Z!==4&&(Z=2),Kn===null?Kn=[o]:Kn.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=Ec(o,s,t);ss(o,f);break e;case 1:a=s;var d=o.type,g=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(xt===null||!xt.has(g)))){o.flags|=65536,t&=-t,o.lanes|=t;var S=jc(o,a,t);ss(o,S);break e}}o=o.return}while(o!==null)}Kc(n)}catch(N){t=N,q===n&&n!==null&&(q=n=n.return);continue}break}while(!0)}function _c(){var e=wl.current;return wl.current=yl,e===null?yl:e}function ua(){(Z===0||Z===3||Z===2)&&(Z=4),$===null||!(Bt&268435455)&&!(zl&268435455)||ut($,te)}function Nl(e,t){var n=I;I|=2;var r=_c();($!==e||te!==t)&&(Ye=null,It(e,t));do try{Tp();break}catch(l){Qc(e,l)}while(!0);if(Ki(),I=n,wl.current=r,q!==null)throw Error(k(261));return $=null,te=0,Z}function Tp(){for(;q!==null;)Wc(q)}function Ip(){for(;q!==null&&!lf();)Wc(q)}function Wc(e){var t=Xc(e.alternate,e,xe);e.memoizedProps=e.pendingProps,t===null?Kc(e):q=t,la.current=null}function Kc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Rp(n,t),n!==null){n.flags&=32767,q=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Z=6,q=null;return}}else if(n=jp(n,t,xe),n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);Z===0&&(Z=5)}function Pt(e,t,n){var r=O,l=je.transition;try{je.transition=null,O=1,Op(e,t,n,r)}finally{je.transition=l,O=r}return null}function Op(e,t,n,r){do un();while(dt!==null);if(I&6)throw Error(k(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(mf(e,o),e===$&&(q=$=null,te=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||zr||(zr=!0,qc(ll,function(){return un(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=je.transition,je.transition=null;var i=O;O=1;var a=I;I|=4,la.current=null,Pp(e,n),Bc(n,e),tp(Go),il=!!qo,Go=qo=null,e.current=n,Lp(n),of(),I=a,O=i,je.transition=o}else e.current=n;if(zr&&(zr=!1,dt=e,kl=l),o=e.pendingLanes,o===0&&(xt=null),uf(n.stateNode),me(e,X()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(Sl)throw Sl=!1,e=mi,mi=null,e;return kl&1&&e.tag!==0&&un(),o=e.pendingLanes,o&1?e===gi?Yn++:(Yn=0,gi=e):Yn=0,Ct(),null}function un(){if(dt!==null){var e=Eu(kl),t=je.transition,n=O;try{if(je.transition=null,O=16>e?16:e,dt===null)var r=!1;else{if(e=dt,dt=null,kl=0,I&6)throw Error(k(331));var l=I;for(I|=4,R=e.current;R!==null;){var o=R,i=o.child;if(R.flags&16){var a=o.deletions;if(a!==null){for(var s=0;s<a.length;s++){var u=a[s];for(R=u;R!==null;){var h=R;switch(h.tag){case 0:case 11:case 15:Wn(8,h,o)}var p=h.child;if(p!==null)p.return=h,R=p;else for(;R!==null;){h=R;var m=h.sibling,v=h.return;if(Mc(h),h===u){R=null;break}if(m!==null){m.return=v,R=m;break}R=v}}}var w=o.alternate;if(w!==null){var y=w.child;if(y!==null){w.child=null;do{var C=y.sibling;y.sibling=null,y=C}while(y!==null)}}R=o}}if(o.subtreeFlags&2064&&i!==null)i.return=o,R=i;else e:for(;R!==null;){if(o=R,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Wn(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,R=f;break e}R=o.return}}var d=e.current;for(R=d;R!==null;){i=R;var g=i.child;if(i.subtreeFlags&2064&&g!==null)g.return=i,R=g;else e:for(i=d;R!==null;){if(a=R,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ml(9,a)}}catch(N){K(a,a.return,N)}if(a===i){R=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,R=S;break e}R=a.return}}if(I=l,Ct(),Qe&&typeof Qe.onPostCommitFiberRoot=="function")try{Qe.onPostCommitFiberRoot(Al,e)}catch{}r=!0}return r}finally{O=n,je.transition=t}}return!1}function Ps(e,t,n){t=mn(n,t),t=Ec(e,t,1),e=gt(e,t,1),t=se(),e!==null&&(fr(e,1,t),me(e,t))}function K(e,t,n){if(e.tag===3)Ps(e,e,n);else for(;t!==null;){if(t.tag===3){Ps(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(xt===null||!xt.has(r))){e=mn(n,e),e=jc(t,e,1),t=gt(t,e,1),e=se(),t!==null&&(fr(t,1,e),me(t,e));break}}t=t.return}}function Mp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=se(),e.pingedLanes|=e.suspendedLanes&n,$===e&&(te&n)===n&&(Z===4||Z===3&&(te&130023424)===te&&500>X()-ia?It(e,0):oa|=n),me(e,t)}function Yc(e,t){t===0&&(e.mode&1?(t=Rr,Rr<<=1,!(Rr&130023424)&&(Rr=4194304)):t=1);var n=se();e=$e(e,t),e!==null&&(fr(e,t,n),me(e,n))}function zp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Yc(e,n)}function Up(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(t),Yc(e,n)}var Xc;Xc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||pe.current)fe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return fe=!1,Ep(e,t,n);fe=!!(e.flags&131072)}else fe=!1,H&&t.flags&1048576&&bu(t,pl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;qr(e,t),e=t.pendingProps;var l=dn(t,ie.current);sn(t,n),l=$i(null,t,r,e,l,n);var o=ea();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,he(r)?(o=!0,dl(t)):o=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,qi(t),l.updater=Ol,t.stateNode=l,l._reactInternals=t,li(t,r,e,n),t=ai(null,t,r,!0,o,n)):(t.tag=0,H&&o&&Vi(t),ae(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(qr(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Hp(r),e=Fe(r,e),l){case 0:t=ii(null,t,r,e,n);break e;case 1:t=ys(null,t,r,e,n);break e;case 11:t=xs(null,t,r,e,n);break e;case 14:t=vs(null,t,r,Fe(r.type,e),n);break e}throw Error(k(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Fe(r,l),ii(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Fe(r,l),ys(e,t,r,l,n);case 3:e:{if(Lc(t),e===null)throw Error(k(387));r=t.pendingProps,o=t.memoizedState,l=o.element,rc(e,t),gl(t,r,null,n);var i=t.memoizedState;if(r=i.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){l=mn(Error(k(423)),t),t=ws(e,t,r,n,l);break e}else if(r!==l){l=mn(Error(k(424)),t),t=ws(e,t,r,n,l);break e}else for(ve=mt(t.stateNode.containerInfo.firstChild),ye=t,H=!0,Te=null,n=tc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(fn(),r===l){t=et(e,t,n);break e}ae(e,t,r,n)}t=t.child}return t;case 5:return lc(t),e===null&&ti(t),r=t.type,l=t.pendingProps,o=e!==null?e.memoizedProps:null,i=l.children,Zo(r,l)?i=null:o!==null&&Zo(r,o)&&(t.flags|=32),Pc(e,t),ae(e,t,i,n),t.child;case 6:return e===null&&ti(t),null;case 13:return Fc(e,t,n);case 4:return Gi(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=pn(t,null,r,n):ae(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Fe(r,l),xs(e,t,r,l,n);case 7:return ae(e,t,t.pendingProps,n),t.child;case 8:return ae(e,t,t.pendingProps.children,n),t.child;case 12:return ae(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,o=t.memoizedProps,i=l.value,z(hl,r._currentValue),r._currentValue=i,o!==null)if(ze(o.value,i)){if(o.children===l.children&&!pe.current){t=et(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){i=o.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=Ze(-1,n&-n),s.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?s.next=s:(s.next=h.next,h.next=s),u.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),ni(o.return,n,t),a.lanes|=n;break}s=s.next}}else if(o.tag===10)i=o.type===t.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(k(341));i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),ni(i,n,t),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===t){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}ae(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,sn(t,n),l=Re(l),r=r(l),t.flags|=1,ae(e,t,r,n),t.child;case 14:return r=t.type,l=Fe(r,t.pendingProps),l=Fe(r.type,l),vs(e,t,r,l,n);case 15:return Rc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Fe(r,l),qr(e,t),t.tag=1,he(r)?(e=!0,dl(t)):e=!1,sn(t,n),Cc(t,r,l),li(t,r,l,n),ai(null,t,r,!0,e,n);case 19:return Dc(e,t,n);case 22:return Ac(e,t,n)}throw Error(k(156,t.tag))};function qc(e,t){return Su(e,t)}function Bp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ee(e,t,n,r){return new Bp(e,t,n,r)}function ca(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Hp(e){if(typeof e=="function")return ca(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Pi)return 11;if(e===Li)return 14}return 2}function yt(e,t){var n=e.alternate;return n===null?(n=Ee(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function br(e,t,n,r,l,o){var i=2;if(r=e,typeof e=="function")ca(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Yt:return Ot(n.children,l,o,t);case Ai:i=8,l|=8;break;case Ao:return e=Ee(12,n,t,l|2),e.elementType=Ao,e.lanes=o,e;case Po:return e=Ee(13,n,t,l),e.elementType=Po,e.lanes=o,e;case Lo:return e=Ee(19,n,t,l),e.elementType=Lo,e.lanes=o,e;case lu:return Ul(n,l,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case nu:i=10;break e;case ru:i=9;break e;case Pi:i=11;break e;case Li:i=14;break e;case it:i=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=Ee(i,n,t,l),t.elementType=e,t.type=r,t.lanes=o,t}function Ot(e,t,n,r){return e=Ee(7,e,r,t),e.lanes=n,e}function Ul(e,t,n,r){return e=Ee(22,e,r,t),e.elementType=lu,e.lanes=n,e.stateNode={isHidden:!1},e}function wo(e,t,n){return e=Ee(6,e,null,t),e.lanes=n,e}function So(e,t,n){return t=Ee(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Vp(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=eo(0),this.expirationTimes=eo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=eo(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function da(e,t,n,r,l,o,i,a,s){return e=new Vp(e,t,n,a,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Ee(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},qi(o),e}function Qp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Kt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Gc(e){if(!e)return St;e=e._reactInternals;e:{if(_t(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(he(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var n=e.type;if(he(n))return Gu(e,n,t)}return t}function Zc(e,t,n,r,l,o,i,a,s){return e=da(n,r,!0,e,l,o,i,a,s),e.context=Gc(null),n=e.current,r=se(),l=vt(n),o=Ze(r,l),o.callback=t??null,gt(n,o,l),e.current.lanes=l,fr(e,l,r),me(e,r),e}function Bl(e,t,n,r){var l=t.current,o=se(),i=vt(l);return n=Gc(n),t.context===null?t.context=n:t.pendingContext=n,t=Ze(o,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=gt(l,t,i),e!==null&&(Oe(e,l,i,o),Kr(e,l,i)),i}function Cl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ls(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function fa(e,t){Ls(e,t),(e=e.alternate)&&Ls(e,t)}function _p(){return null}var bc=typeof reportError=="function"?reportError:function(e){console.error(e)};function pa(e){this._internalRoot=e}Hl.prototype.render=pa.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));Bl(e,t,null,null)};Hl.prototype.unmount=pa.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ht(function(){Bl(null,e,null,null)}),t[Je]=null}};function Hl(e){this._internalRoot=e}Hl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Au();e={blockedOn:null,target:e,priority:t};for(var n=0;n<st.length&&t!==0&&t<st[n].priority;n++);st.splice(n,0,e),n===0&&Lu(e)}};function ha(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Vl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Fs(){}function Wp(e,t,n,r,l){if(l){if(typeof r=="function"){var o=r;r=function(){var u=Cl(i);o.call(u)}}var i=Zc(t,r,e,0,null,!1,!1,"",Fs);return e._reactRootContainer=i,e[Je]=i.current,tr(e.nodeType===8?e.parentNode:e),Ht(),i}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var a=r;r=function(){var u=Cl(s);a.call(u)}}var s=da(e,0,!1,null,null,!1,!1,"",Fs);return e._reactRootContainer=s,e[Je]=s.current,tr(e.nodeType===8?e.parentNode:e),Ht(function(){Bl(t,s,n,r)}),s}function Ql(e,t,n,r,l){var o=n._reactRootContainer;if(o){var i=o;if(typeof l=="function"){var a=l;l=function(){var s=Cl(i);a.call(s)}}Bl(t,i,e,l)}else i=Wp(n,t,e,l,r);return Cl(i)}ju=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Mn(t.pendingLanes);n!==0&&(Ti(t,n|1),me(t,X()),!(I&6)&&(gn=X()+500,Ct()))}break;case 13:Ht(function(){var r=$e(e,1);if(r!==null){var l=se();Oe(r,e,1,l)}}),fa(e,1)}};Ii=function(e){if(e.tag===13){var t=$e(e,134217728);if(t!==null){var n=se();Oe(t,e,134217728,n)}fa(e,134217728)}};Ru=function(e){if(e.tag===13){var t=vt(e),n=$e(e,t);if(n!==null){var r=se();Oe(n,e,t,r)}fa(e,t)}};Au=function(){return O};Pu=function(e,t){var n=O;try{return O=e,t()}finally{O=n}};Ho=function(e,t,n){switch(t){case"input":if(To(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=Dl(r);if(!l)throw Error(k(90));iu(r),To(r,l)}}}break;case"textarea":su(e,n);break;case"select":t=n.value,t!=null&&rn(e,!!n.multiple,t,!1)}};mu=aa;gu=Ht;var Kp={usingClientEntryPoint:!1,Events:[hr,Zt,Dl,pu,hu,aa]},Fn={findFiberByHostInstance:Ft,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Yp={bundleType:Fn.bundleType,version:Fn.version,rendererPackageName:Fn.rendererPackageName,rendererConfig:Fn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:nt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=yu(e),e===null?null:e.stateNode},findFiberByHostInstance:Fn.findFiberByHostInstance||_p,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ur=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ur.isDisabled&&Ur.supportsFiber)try{Al=Ur.inject(Yp),Qe=Ur}catch{}}Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Kp;Se.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ha(t))throw Error(k(200));return Qp(e,t,null,n)};Se.createRoot=function(e,t){if(!ha(e))throw Error(k(299));var n=!1,r="",l=bc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=da(e,1,!1,null,null,n,!1,r,l),e[Je]=t.current,tr(e.nodeType===8?e.parentNode:e),new pa(t)};Se.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=yu(t),e=e===null?null:e.stateNode,e};Se.flushSync=function(e){return Ht(e)};Se.hydrate=function(e,t,n){if(!Vl(t))throw Error(k(200));return Ql(null,e,t,!0,n)};Se.hydrateRoot=function(e,t,n){if(!ha(e))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,l=!1,o="",i=bc;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=Zc(t,null,e,1,n??null,l,!1,o,i),e[Je]=t.current,tr(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new Hl(t)};Se.render=function(e,t,n){if(!Vl(t))throw Error(k(200));return Ql(null,e,t,!1,n)};Se.unmountComponentAtNode=function(e){if(!Vl(e))throw Error(k(40));return e._reactRootContainer?(Ht(function(){Ql(null,null,e,!1,function(){e._reactRootContainer=null,e[Je]=null})}),!0):!1};Se.unstable_batchedUpdates=aa;Se.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Vl(n))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return Ql(e,t,n,!1,r)};Se.version="18.3.1-next-f1338f8080-20240426";function Jc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Jc)}catch(e){console.error(e)}}Jc(),Js.exports=Se;var Xp=Js.exports,Ds=Xp;jo.createRoot=Ds.createRoot,jo.hydrateRoot=Ds.hydrateRoot;/**
 * react-router v7.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var ma=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,$c=/^[\\/]{2}/;function qp(e,t){return t+e.replace(/\\/g,"/")}var Ts="popstate";function Is(e){return typeof e=="object"&&e!=null&&"pathname"in e&&"search"in e&&"hash"in e&&"state"in e&&"key"in e}function Gp(e={}){function t(r,l){var u;let o=(u=l.state)==null?void 0:u.masked,{pathname:i,search:a,hash:s}=o||r.location;return yi("",{pathname:i,search:a,hash:s},l.state&&l.state.usr||null,l.state&&l.state.key||"default",o?{pathname:r.location.pathname,search:r.location.search,hash:r.location.hash}:void 0)}function n(r,l){return typeof l=="string"?l:cr(l)}return bp(t,n,null,e)}function _(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function We(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Zp(){return Math.random().toString(36).substring(2,10)}function Os(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function yi(e,t,n=null,r,l){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?Sn(t):t,state:n,key:t&&t.key||r||Zp(),mask:l}}function cr({pathname:e="/",search:t="",hash:n=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function Sn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function bp(e,t,n,r={}){let{window:l=document.defaultView,v5Compat:o=!1}=r,i=l.history,a="POP",s=null,u=h();u==null&&(u=0,i.replaceState({...i.state,idx:u},""));function h(){return(i.state||{idx:null}).idx}function p(){a="POP";let C=h(),f=C==null?null:C-u;u=C,s&&s({action:a,location:y.location,delta:f})}function m(C,f){a="PUSH";let d=Is(C)?C:yi(y.location,C,f);u=h()+1;let g=Os(d,u),S=y.createHref(d.mask||d);try{i.pushState(g,"",S)}catch(N){if(N instanceof DOMException&&N.name==="DataCloneError")throw N;l.location.assign(S)}o&&s&&s({action:a,location:y.location,delta:1})}function v(C,f){a="REPLACE";let d=Is(C)?C:yi(y.location,C,f);u=h();let g=Os(d,u),S=y.createHref(d.mask||d);i.replaceState(g,"",S),o&&s&&s({action:a,location:y.location,delta:0})}function w(C){return Jp(l,C)}let y={get action(){return a},get location(){return e(l,i)},listen(C){if(s)throw new Error("A history only accepts one active listener");return l.addEventListener(Ts,p),s=C,()=>{l.removeEventListener(Ts,p),s=null}},createHref(C){return t(l,C)},createURL:w,encodeLocation(C){let f=w(C);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:m,replace:v,go(C){return i.go(C)}};return y}function Jp(e,t,n=!1){let r="http://localhost";e&&(r=e.location.origin!=="null"?e.location.origin:e.location.href),_(r,"No window.location.(origin|href) available to create URL");let l=typeof t=="string"?t:cr(t);return l=l.replace(/ $/,"%20"),!n&&$c.test(l)&&(l=r+l),new URL(l,r)}function ed(e,t,n="/"){return $p(e,t,n,!1)}function $p(e,t,n,r,l){let o=typeof t=="string"?Sn(t):t,i=tt(o.pathname||"/",n);if(i==null)return null;let a=eh(e),s=null,u=dh(i);for(let h=0;s==null&&h<a.length;++h)s=ch(a[h],u,r);return s}function eh(e){let t=td(e);return th(t),t}function td(e,t=[],n=[],r="",l=!1){let o=(i,a,s=l,u)=>{let h={relativePath:u===void 0?i.path||"":u,caseSensitive:i.caseSensitive===!0,childrenIndex:a,route:i};if(h.relativePath.startsWith("/")){if(!h.relativePath.startsWith(r)&&s)return;_(h.relativePath.startsWith(r),`Absolute route path "${h.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),h.relativePath=h.relativePath.slice(r.length)}let p=Me([r,h.relativePath]),m=n.concat(h);i.children&&i.children.length>0&&(_(i.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${p}".`),td(i.children,t,m,p,s)),!(i.path==null&&!i.index)&&t.push({path:p,score:sh(p,i.index),routesMeta:m.map((v,w)=>{let[y,C]=ld(v.relativePath,v.caseSensitive,w===m.length-1);return{...v,matcher:y,compiledParams:C}})})};return e.forEach((i,a)=>{var s;if(i.path===""||!((s=i.path)!=null&&s.includes("?")))o(i,a);else for(let u of nd(i.path))o(i,a,!0,u)}),t}function nd(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,l=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return l?[o,""]:[o];let i=nd(r.join("/")),a=[];return a.push(...i.map(s=>s===""?o:[o,s].join("/"))),l&&a.push(...i),a.map(s=>e.startsWith("/")&&s===""?"/":s)}function th(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:uh(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}var nh=/^:[\w-]+$/,rh=3,lh=2,oh=1,ih=10,ah=-2,Ms=e=>e==="*";function sh(e,t){let n=e.split("/"),r=n.length;return n.some(Ms)&&(r+=ah),t&&(r+=lh),n.filter(l=>!Ms(l)).reduce((l,o)=>l+(nh.test(o)?rh:o===""?oh:ih),r)}function uh(e,t){return e.length===t.length&&e.slice(0,-1).every((r,l)=>r===t[l])?e[e.length-1]-t[t.length-1]:0}function ch(e,t,n=!1){let{routesMeta:r}=e,l={},o="/",i=[];for(let a=0;a<r.length;++a){let s=r[a],u=a===r.length-1,h=o==="/"?t:t.slice(o.length)||"/",p={path:s.relativePath,caseSensitive:s.caseSensitive,end:u},m=s.matcher&&s.compiledParams?rd(p,h,s.matcher,s.compiledParams):El(p,h),v=s.route;if(!m&&u&&n&&!r[r.length-1].route.index&&(m=El({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},h)),!m)return null;Object.assign(l,m.params),i.push({params:l,pathname:Me([o,m.pathname]),pathnameBase:hh(Me([o,m.pathnameBase])),route:v}),m.pathnameBase!=="/"&&(o=Me([o,m.pathnameBase]))}return i}function El(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=ld(e.path,e.caseSensitive,e.end);return rd(e,t,n,r)}function rd(e,t,n,r){let l=t.match(n);if(!l)return null;let o=l[0],i=o.replace(/(.)\/+$/,"$1"),a=l.slice(1);return{params:r.reduce((u,{paramName:h,isOptional:p},m)=>{if(h==="*"){let w=a[m]||"";i=o.slice(0,o.length-w.length).replace(/(.)\/+$/,"$1")}const v=a[m];return p&&!v?u[h]=void 0:u[h]=(v||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:i,pattern:e}}function ld(e,t=!1,n=!0){We(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],l="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(i,a,s,u,h)=>{if(r.push({paramName:a,isOptional:s!=null}),s){let p=h.charAt(u+i.length);return p&&p!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(r.push({paramName:"*"}),l+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?l+="\\/*$":e!==""&&e!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),r]}function dh(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return We(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function tt(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function fh(e,t="/"){let{pathname:n,search:r="",hash:l=""}=typeof e=="string"?Sn(e):e,o;return n?(n=id(n),n.startsWith("/")?o=zs(n.substring(1),"/"):o=zs(n,t)):o=t,{pathname:o,search:mh(r),hash:gh(l)}}function zs(e,t){let n=jl(t).split("/");return e.split("/").forEach(l=>{l===".."?n.length>1&&n.pop():l!=="."&&n.push(l)}),n.length>1?n.join("/"):"/"}function ko(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function ph(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function od(e){let t=ph(e);return t.map((n,r)=>r===t.length-1?n.pathname:n.pathnameBase)}function ga(e,t,n,r=!1){let l;typeof e=="string"?l=Sn(e):(l={...e},_(!l.pathname||!l.pathname.includes("?"),ko("?","pathname","search",l)),_(!l.pathname||!l.pathname.includes("#"),ko("#","pathname","hash",l)),_(!l.search||!l.search.includes("#"),ko("#","search","hash",l)));let o=e===""||l.pathname==="",i=o?"/":l.pathname,a;if(i==null)a=n;else{let p=t.length-1;if(!r&&i.startsWith("..")){let m=i.split("/");for(;m[0]==="..";)m.shift(),p-=1;l.pathname=m.join("/")}a=p>=0?t[p]:"/"}let s=fh(l,a),u=i&&i!=="/"&&i.endsWith("/"),h=(o||i===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||h)&&(s.pathname+="/"),s}var id=e=>e.replace(/[\\/]{2,}/g,"/"),Me=e=>id(e.join("/")),jl=e=>e.replace(/\/+$/,""),hh=e=>jl(e).replace(/^\/*/,"/"),mh=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,gh=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,xh=class{constructor(e,t,n,r=!1){this.status=e,this.statusText=t||"",this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function vh(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}function yh(e){let t=e.map(n=>n.route.path).filter(Boolean);return Me(t)||"/"}var ad=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function sd(e,t){let n=e;if(typeof n!="string"||!ma.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,l=!1;if(ad)try{let o=new URL(window.location.href),i=$c.test(n)?new URL(qp(n,o.protocol)):new URL(n),a=tt(i.pathname,t);i.origin===o.origin&&a!=null?n=a+i.search+i.hash:l=!0}catch{We(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:l,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var ud=["POST","PUT","PATCH","DELETE"];new Set(ud);var wh=["GET",...ud];new Set(wh);var Sh=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function kh(e){try{return Sh.includes(new URL(e).protocol)}catch{return!1}}var kn=x.createContext(null);kn.displayName="DataRouter";var _l=x.createContext(null);_l.displayName="DataRouterState";var cd=x.createContext(!1);function Nh(){return x.useContext(cd)}var dd=x.createContext({isTransitioning:!1});dd.displayName="ViewTransition";var Ch=x.createContext(new Map);Ch.displayName="Fetchers";var Eh=x.createContext(null);Eh.displayName="Await";var Pe=x.createContext(null);Pe.displayName="Navigation";var gr=x.createContext(null);gr.displayName="Location";var Ke=x.createContext({outlet:null,matches:[],isDataRoute:!1});Ke.displayName="Route";var xa=x.createContext(null);xa.displayName="RouteError";var fd="REACT_ROUTER_ERROR",jh="REDIRECT",Rh="ROUTE_ERROR_RESPONSE";function Ah(e){if(e.startsWith(`${fd}:${jh}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.location=="string"&&typeof t.reloadDocument=="boolean"&&typeof t.replace=="boolean")return t}catch{}}function Ph(e){if(e.startsWith(`${fd}:${Rh}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string")return new xh(t.status,t.statusText,t.data)}catch{}}function Lh(e,{relative:t}={}){_(xr(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=x.useContext(Pe),{hash:l,pathname:o,search:i}=vr(e,{relative:t}),a=o;return n!=="/"&&(a=o==="/"?n:Me([n,o])),r.createHref({pathname:a,search:i,hash:l})}function xr(){return x.useContext(gr)!=null}function rt(){return _(xr(),"useLocation() may be used only in the context of a <Router> component."),x.useContext(gr).location}var pd="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function hd(e){x.useContext(Pe).static||x.useLayoutEffect(e)}function va(){let{isDataRoute:e}=x.useContext(Ke);return e?Wh():Fh()}function Fh(){_(xr(),"useNavigate() may be used only in the context of a <Router> component.");let e=x.useContext(kn),{basename:t,navigator:n}=x.useContext(Pe),{matches:r}=x.useContext(Ke),{pathname:l}=rt(),o=JSON.stringify(od(r)),i=x.useRef(!1);return hd(()=>{i.current=!0}),x.useCallback((s,u={})=>{if(We(i.current,pd),!i.current)return;if(typeof s=="number"){n.go(s);return}let h=ga(s,JSON.parse(o),l,u.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:Me([t,h.pathname])),(u.replace?n.replace:n.push)(h,u.state,u)},[t,n,o,l,e])}x.createContext(null);function Dh(){let{matches:e}=x.useContext(Ke),t=e[e.length-1];return(t==null?void 0:t.params)??{}}function vr(e,{relative:t}={}){let{matches:n}=x.useContext(Ke),{pathname:r}=rt(),l=JSON.stringify(od(n));return x.useMemo(()=>ga(e,JSON.parse(l),r,t==="path"),[e,l,r,t])}function Th(e,t){return md(e,t)}function md(e,t,n){var C;_(xr(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:r}=x.useContext(Pe),{matches:l}=x.useContext(Ke),o=l[l.length-1],i=o?o.params:{},a=o?o.pathname:"/",s=o?o.pathnameBase:"/",u=o&&o.route;{let f=u&&u.path||"";xd(a,!u||f.endsWith("*")||f.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${a}" (under <Route path="${f}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${f}"> to <Route path="${f==="/"?"*":`${f}/*`}">.`)}let h=rt(),p;if(t){let f=typeof t=="string"?Sn(t):t;_(s==="/"||((C=f.pathname)==null?void 0:C.startsWith(s)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${s}" but pathname "${f.pathname}" was given in the \`location\` prop.`),p=f}else p=h;let m=p.pathname||"/",v=m;if(s!=="/"){let f=s.replace(/^\//,"").split("/");v="/"+m.replace(/^\//,"").split("/").slice(f.length).join("/")}let w=n&&n.state.matches.length?n.state.matches.map(f=>Object.assign(f,{route:n.manifest[f.route.id]||f.route})):ed(e,{pathname:v});We(u||w!=null,`No routes matched location "${p.pathname}${p.search}${p.hash}" `),We(w==null||w[w.length-1].route.element!==void 0||w[w.length-1].route.Component!==void 0||w[w.length-1].route.lazy!==void 0,`Matched leaf route at location "${p.pathname}${p.search}${p.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let y=Uh(w&&w.map(f=>Object.assign({},f,{params:Object.assign({},i,f.params),pathname:Me([s,r.encodeLocation?r.encodeLocation(f.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:f.pathname]),pathnameBase:f.pathnameBase==="/"?s:Me([s,r.encodeLocation?r.encodeLocation(f.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:f.pathnameBase])})),l,n);return t&&y?x.createElement(gr.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...p},navigationType:"POP"}},y):y}function Ih(){let e=_h(),t=vh(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:r},o={padding:"2px 4px",backgroundColor:r},i=null;return console.error("Error handled by React Router default ErrorBoundary:",e),i=x.createElement(x.Fragment,null,x.createElement("p",null,"💿 Hey developer 👋"),x.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",x.createElement("code",{style:o},"ErrorBoundary")," or"," ",x.createElement("code",{style:o},"errorElement")," prop on your route.")),x.createElement(x.Fragment,null,x.createElement("h2",null,"Unexpected Application Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},t),n?x.createElement("pre",{style:l},n):null,i)}var Oh=x.createElement(Ih,null),gd=class extends x.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error("React Router caught the following error during render",e)}render(){let e=this.state.error;if(this.context&&typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){const n=Ph(e.digest);n&&(e=n)}let t=e!==void 0?x.createElement(Ke.Provider,{value:this.props.routeContext},x.createElement(xa.Provider,{value:e,children:this.props.component})):this.props.children;return this.context?x.createElement(Mh,{error:e},t):t}};gd.contextType=cd;var No=new WeakMap;function Mh({children:e,error:t}){let{basename:n}=x.useContext(Pe);if(typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){let r=Ah(t.digest);if(r){let l=No.get(t);if(l)throw l;let o=sd(r.location,n),i=o.absoluteURL||o.to;if(kh(i))throw new Error("Invalid redirect location");if(ad&&!No.get(t))if(o.isExternal||r.reloadDocument)window.location.href=i;else{const a=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(o.to,{replace:r.replace}));throw No.set(t,a),a}return x.createElement("meta",{httpEquiv:"refresh",content:`0;url=${i}`})}}return e}function zh({routeContext:e,match:t,children:n}){let r=x.useContext(kn);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),x.createElement(Ke.Provider,{value:e},n)}function Uh(e,t=[],n){let r=n==null?void 0:n.state;if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let l=e,o=r==null?void 0:r.errors;if(o!=null){let h=l.findIndex(p=>p.route.id&&(o==null?void 0:o[p.route.id])!==void 0);_(h>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`),l=l.slice(0,Math.min(l.length,h+1))}let i=!1,a=-1;if(n&&r){i=r.renderFallback;for(let h=0;h<l.length;h++){let p=l[h];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(a=h),p.route.id){let{loaderData:m,errors:v}=r,w=p.route.loader&&!m.hasOwnProperty(p.route.id)&&(!v||v[p.route.id]===void 0);if(p.route.lazy||w){n.isStatic&&(i=!0),a>=0?l=l.slice(0,a+1):l=[l[0]];break}}}}let s=n==null?void 0:n.onError,u=r&&s?(h,p)=>{var m,v;s(h,{location:r.location,params:((v=(m=r.matches)==null?void 0:m[0])==null?void 0:v.params)??{},pattern:yh(r.matches),errorInfo:p})}:void 0;return l.reduceRight((h,p,m)=>{let v,w=!1,y=null,C=null;r&&(v=o&&p.route.id?o[p.route.id]:void 0,y=p.route.errorElement||Oh,i&&(a<0&&m===0?(xd("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),w=!0,C=null):a===m&&(w=!0,C=p.route.hydrateFallbackElement||null)));let f=t.concat(l.slice(0,m+1)),d=()=>{let g;return v?g=y:w?g=C:p.route.Component?g=x.createElement(p.route.Component,null):p.route.element?g=p.route.element:g=h,x.createElement(zh,{match:p,routeContext:{outlet:h,matches:f,isDataRoute:r!=null},children:g})};return r&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?x.createElement(gd,{location:r.location,revalidation:r.revalidation,component:y,error:v,children:d(),routeContext:{outlet:null,matches:f,isDataRoute:!0},onError:u}):d()},null)}function ya(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Bh(e){let t=x.useContext(kn);return _(t,ya(e)),t}function Hh(e){let t=x.useContext(_l);return _(t,ya(e)),t}function Vh(e){let t=x.useContext(Ke);return _(t,ya(e)),t}function wa(e){let t=Vh(e),n=t.matches[t.matches.length-1];return _(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function Qh(){return wa("useRouteId")}function _h(){var r;let e=x.useContext(xa),t=Hh("useRouteError"),n=wa("useRouteError");return e!==void 0?e:(r=t.errors)==null?void 0:r[n]}function Wh(){let{router:e}=Bh("useNavigate"),t=wa("useNavigate"),n=x.useRef(!1);return hd(()=>{n.current=!0}),x.useCallback(async(l,o={})=>{We(n.current,pd),n.current&&(typeof l=="number"?await e.navigate(l):await e.navigate(l,{fromRouteId:t,...o}))},[e,t])}var Us={};function xd(e,t,n){!t&&!Us[e]&&(Us[e]=!0,We(!1,n))}x.memo(Kh);function Kh({routes:e,manifest:t,future:n,state:r,isStatic:l,onError:o}){return md(e,void 0,{manifest:t,state:r,isStatic:l,onError:o})}function Lt(e){_(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Yh({basename:e="/",children:t=null,location:n,navigationType:r="POP",navigator:l,static:o=!1,useTransitions:i}){_(!xr(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let a=e.replace(/^\/*/,"/"),s=x.useMemo(()=>({basename:a,navigator:l,static:o,useTransitions:i,future:{}}),[a,l,o,i]);typeof n=="string"&&(n=Sn(n));let{pathname:u="/",search:h="",hash:p="",state:m=null,key:v="default",mask:w}=n,y=x.useMemo(()=>{let C=tt(u,a);return C==null?null:{location:{pathname:C,search:h,hash:p,state:m,key:v,mask:w},navigationType:r}},[a,u,h,p,m,v,r,w]);return We(y!=null,`<Router basename="${a}"> is not able to match the URL "${u}${h}${p}" because it does not start with the basename, so the <Router> won't render anything.`),y==null?null:x.createElement(Pe.Provider,{value:s},x.createElement(gr.Provider,{children:t,value:y}))}function Xh({children:e,location:t}){return Th(wi(e),t)}function wi(e,t=[]){let n=[];return x.Children.forEach(e,(r,l)=>{if(!x.isValidElement(r))return;let o=[...t,l];if(r.type===x.Fragment){n.push.apply(n,wi(r.props.children,o));return}_(r.type===Lt,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),_(!r.props.index||!r.props.children,"An index route cannot have child routes.");let i={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(i.children=wi(r.props.children,o)),n.push(i)}),n}var Jr="get",$r="application/x-www-form-urlencoded";function Wl(e){return typeof HTMLElement<"u"&&e instanceof HTMLElement}function qh(e){return Wl(e)&&e.tagName.toLowerCase()==="button"}function Gh(e){return Wl(e)&&e.tagName.toLowerCase()==="form"}function Zh(e){return Wl(e)&&e.tagName.toLowerCase()==="input"}function bh(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Jh(e,t){return e.button===0&&(!t||t==="_self")&&!bh(e)}var Br=null;function $h(){if(Br===null)try{new FormData(document.createElement("form"),0),Br=!1}catch{Br=!0}return Br}var em=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Co(e){return e!=null&&!em.has(e)?(We(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${$r}"`),null):e}function tm(e,t){let n,r,l,o,i;if(Gh(e)){let a=e.getAttribute("action");r=a?tt(a,t):null,n=e.getAttribute("method")||Jr,l=Co(e.getAttribute("enctype"))||$r,o=new FormData(e)}else if(qh(e)||Zh(e)&&(e.type==="submit"||e.type==="image")){let a=e.form;if(a==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let s=e.getAttribute("formaction")||a.getAttribute("action");if(r=s?tt(s,t):null,n=e.getAttribute("formmethod")||a.getAttribute("method")||Jr,l=Co(e.getAttribute("formenctype"))||Co(a.getAttribute("enctype"))||$r,o=new FormData(a,e),!$h()){let{name:u,type:h,value:p}=e;if(h==="image"){let m=u?`${u}.`:"";o.append(`${m}x`,"0"),o.append(`${m}y`,"0")}else u&&o.append(u,p)}}else{if(Wl(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Jr,r=null,l=$r,i=e}return o&&l==="text/plain"&&(i=o,o=void 0),{action:r,method:n.toLowerCase(),encType:l,formData:o,body:i}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Sa(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function vd(e,t,n,r){let l=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return n?l.pathname.endsWith("/")?l.pathname=`${l.pathname}_.${r}`:l.pathname=`${l.pathname}.${r}`:l.pathname==="/"?l.pathname=`_root.${r}`:t&&tt(l.pathname,t)==="/"?l.pathname=`${jl(t)}/_root.${r}`:l.pathname=`${jl(l.pathname)}.${r}`,l}async function nm(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function rm(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function lm(e,t,n){let r=await Promise.all(e.map(async l=>{let o=t.routes[l.route.id];if(o){let i=await nm(o,n);return i.links?i.links():[]}return[]}));return sm(r.flat(1).filter(rm).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function Bs(e,t,n,r,l,o){let i=(s,u)=>n[u]?s.route.id!==n[u].route.id:!0,a=(s,u)=>{var h;return n[u].pathname!==s.pathname||((h=n[u].route.path)==null?void 0:h.endsWith("*"))&&n[u].params["*"]!==s.params["*"]};return o==="assets"?t.filter((s,u)=>i(s,u)||a(s,u)):o==="data"?t.filter((s,u)=>{var p;let h=r.routes[s.route.id];if(!h||!h.hasLoader)return!1;if(i(s,u)||a(s,u))return!0;if(s.route.shouldRevalidate){let m=s.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:((p=n[0])==null?void 0:p.params)||{},nextUrl:new URL(e,window.origin),nextParams:s.params,defaultShouldRevalidate:!0});if(typeof m=="boolean")return m}return!0}):[]}function om(e,t,{includeHydrateFallback:n}={}){return im(e.map(r=>{let l=t.routes[r.route.id];if(!l)return[];let o=[l.module];return l.clientActionModule&&(o=o.concat(l.clientActionModule)),l.clientLoaderModule&&(o=o.concat(l.clientLoaderModule)),n&&l.hydrateFallbackModule&&(o=o.concat(l.hydrateFallbackModule)),l.imports&&(o=o.concat(l.imports)),o}).flat(1))}function im(e){return[...new Set(e)]}function am(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function sm(e,t){let n=new Set;return new Set(t),e.reduce((r,l)=>{let o=JSON.stringify(am(l));return n.has(o)||(n.add(o),r.push({key:o,link:l})),r},[])}function ka(){let e=x.useContext(kn);return Sa(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function um(){let e=x.useContext(_l);return Sa(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var Na=x.createContext(void 0);Na.displayName="FrameworkContext";function Kl(){let e=x.useContext(Na);return Sa(e,"You must render this element inside a <HydratedRouter> element"),e}function cm(e,t){let n=x.useContext(Na),[r,l]=x.useState(!1),[o,i]=x.useState(!1),{onFocus:a,onBlur:s,onMouseEnter:u,onMouseLeave:h,onTouchStart:p}=t,m=x.useRef(null);x.useEffect(()=>{if(e==="render"&&i(!0),e==="viewport"){let y=f=>{f.forEach(d=>{i(d.isIntersecting)})},C=new IntersectionObserver(y,{threshold:.5});return m.current&&C.observe(m.current),()=>{C.disconnect()}}},[e]),x.useEffect(()=>{if(r){let y=setTimeout(()=>{i(!0)},100);return()=>{clearTimeout(y)}}},[r]);let v=()=>{l(!0)},w=()=>{l(!1),i(!1)};return n?e!=="intent"?[o,m,{}]:[o,m,{onFocus:Dn(a,v),onBlur:Dn(s,w),onMouseEnter:Dn(u,v),onMouseLeave:Dn(h,w),onTouchStart:Dn(p,v)}]:[!1,m,{}]}function Dn(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function dm({page:e,...t}){let n=Nh(),{nonce:r}=Kl(),{router:l}=ka(),o=x.useMemo(()=>ed(l.routes,e,l.basename),[l.routes,e,l.basename]);return o?(t.nonce==null&&r&&(t={...t,nonce:r}),n?x.createElement(pm,{page:e,matches:o,...t}):x.createElement(hm,{page:e,matches:o,...t})):null}function fm(e){let{manifest:t,routeModules:n}=Kl(),[r,l]=x.useState([]);return x.useEffect(()=>{let o=!1;return lm(e,t,n).then(i=>{o||l(i)}),()=>{o=!0}},[e,t,n]),r}function pm({page:e,matches:t,...n}){let r=rt(),{future:l}=Kl(),{basename:o}=ka(),i=x.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let a=vd(e,o,l.v8_trailingSlashAwareDataRequests,"rsc"),s=!1,u=[];for(let h of t)typeof h.route.shouldRevalidate=="function"?s=!0:u.push(h.route.id);return s&&u.length>0&&a.searchParams.set("_routes",u.join(",")),[a.pathname+a.search]},[o,l.v8_trailingSlashAwareDataRequests,e,r,t]);return x.createElement(x.Fragment,null,i.map(a=>x.createElement("link",{key:a,rel:"prefetch",as:"fetch",href:a,...n})))}function hm({page:e,matches:t,...n}){let r=rt(),{future:l,manifest:o,routeModules:i}=Kl(),{basename:a}=ka(),{loaderData:s,matches:u}=um(),h=x.useMemo(()=>Bs(e,t,u,o,r,"data"),[e,t,u,o,r]),p=x.useMemo(()=>Bs(e,t,u,o,r,"assets"),[e,t,u,o,r]),m=x.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let y=new Set,C=!1;if(t.forEach(d=>{var S;let g=o.routes[d.route.id];!g||!g.hasLoader||(!h.some(N=>N.route.id===d.route.id)&&d.route.id in s&&((S=i[d.route.id])!=null&&S.shouldRevalidate)||g.hasClientLoader?C=!0:y.add(d.route.id))}),y.size===0)return[];let f=vd(e,a,l.v8_trailingSlashAwareDataRequests,"data");return C&&y.size>0&&f.searchParams.set("_routes",t.filter(d=>y.has(d.route.id)).map(d=>d.route.id).join(",")),[f.pathname+f.search]},[a,l.v8_trailingSlashAwareDataRequests,s,r,o,h,t,e,i]),v=x.useMemo(()=>om(p,o),[p,o]),w=fm(p);return x.createElement(x.Fragment,null,m.map(y=>x.createElement("link",{key:y,rel:"prefetch",as:"fetch",href:y,...n})),v.map(y=>x.createElement("link",{key:y,rel:"modulepreload",href:y,...n})),w.map(({key:y,link:C})=>x.createElement("link",{key:y,nonce:n.nonce,...C,crossOrigin:C.crossOrigin??n.crossOrigin})))}function mm(...e){return t=>{e.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})}}var gm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{gm&&(window.__reactRouterVersion="7.18.0")}catch{}function xm({basename:e,children:t,useTransitions:n,window:r}){let l=x.useRef();l.current==null&&(l.current=Gp({window:r,v5Compat:!0}));let o=l.current,[i,a]=x.useState({action:o.action,location:o.location}),s=x.useCallback(u=>{n===!1?a(u):x.startTransition(()=>a(u))},[n]);return x.useLayoutEffect(()=>o.listen(s),[o,s]),x.createElement(Yh,{basename:e,children:t,location:i.location,navigationType:i.action,navigator:o,useTransitions:n})}var xn=x.forwardRef(function({onClick:t,discover:n="render",prefetch:r="none",relative:l,reloadDocument:o,replace:i,mask:a,state:s,target:u,to:h,preventScrollReset:p,viewTransition:m,defaultShouldRevalidate:v,...w},y){let{basename:C,navigator:f,useTransitions:d}=x.useContext(Pe),g=typeof h=="string"&&ma.test(h),S=sd(h,C);h=S.to;let N=Lh(h,{relative:l}),E=rt(),j=null;if(a){let Ue=ga(a,[],E.mask?E.mask.pathname:"/",!0);C!=="/"&&(Ue.pathname=Ue.pathname==="/"?C:Me([C,Ue.pathname])),j=f.createHref(Ue)}let[P,M,F]=cm(r,w),ge=wm(h,{replace:i,mask:a,state:s,target:u,preventScrollReset:p,relative:l,viewTransition:m,defaultShouldRevalidate:v,useTransitions:d});function Et(Ue){t&&t(Ue),Ue.defaultPrevented||ge(Ue)}let lt=!(S.isExternal||o),Nn=x.createElement("a",{...w,...F,href:(lt?j:void 0)||S.absoluteURL||N,onClick:lt?Et:t,ref:mm(y,M),target:u,"data-discover":!g&&n==="render"?"true":void 0});return P&&!g?x.createElement(x.Fragment,null,Nn,x.createElement(dm,{page:N})):Nn});xn.displayName="Link";var el=x.forwardRef(function({"aria-current":t="page",caseSensitive:n=!1,className:r="",end:l=!1,style:o,to:i,viewTransition:a,children:s,...u},h){let p=vr(i,{relative:u.relative}),m=rt(),v=x.useContext(_l),{navigator:w,basename:y}=x.useContext(Pe),C=v!=null&&Em(p)&&a===!0,f=w.encodeLocation?w.encodeLocation(p).pathname:p.pathname,d=m.pathname,g=v&&v.navigation&&v.navigation.location?v.navigation.location.pathname:null;n||(d=d.toLowerCase(),g=g?g.toLowerCase():null,f=f.toLowerCase()),g&&y&&(g=tt(g,y)||g);const S=f!=="/"&&f.endsWith("/")?f.length-1:f.length;let N=d===f||!l&&d.startsWith(f)&&d.charAt(S)==="/",E=g!=null&&(g===f||!l&&g.startsWith(f)&&g.charAt(f.length)==="/"),j={isActive:N,isPending:E,isTransitioning:C},P=N?t:void 0,M;typeof r=="function"?M=r(j):M=[r,N?"active":null,E?"pending":null,C?"transitioning":null].filter(Boolean).join(" ");let F=typeof o=="function"?o(j):o;return x.createElement(xn,{...u,"aria-current":P,className:M,ref:h,style:F,to:i,viewTransition:a},typeof s=="function"?s(j):s)});el.displayName="NavLink";var vm=x.forwardRef(({discover:e="render",fetcherKey:t,navigate:n,reloadDocument:r,replace:l,state:o,method:i=Jr,action:a,onSubmit:s,relative:u,preventScrollReset:h,viewTransition:p,defaultShouldRevalidate:m,...v},w)=>{let{useTransitions:y}=x.useContext(Pe),C=Nm(),f=Cm(a,{relative:u}),d=i.toLowerCase()==="get"?"get":"post",g=typeof a=="string"&&ma.test(a),S=N=>{if(s&&s(N),N.defaultPrevented)return;N.preventDefault();let E=N.nativeEvent.submitter,j=(E==null?void 0:E.getAttribute("formmethod"))||i,P=()=>C(E||N.currentTarget,{fetcherKey:t,method:j,navigate:n,replace:l,state:o,relative:u,preventScrollReset:h,viewTransition:p,defaultShouldRevalidate:m});y&&n!==!1?x.startTransition(()=>P()):P()};return x.createElement("form",{ref:w,method:d,action:f,onSubmit:r?s:S,...v,"data-discover":!g&&e==="render"?"true":void 0})});vm.displayName="Form";function ym(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function yd(e){let t=x.useContext(kn);return _(t,ym(e)),t}function wm(e,{target:t,replace:n,mask:r,state:l,preventScrollReset:o,relative:i,viewTransition:a,defaultShouldRevalidate:s,useTransitions:u}={}){let h=va(),p=rt(),m=vr(e,{relative:i});return x.useCallback(v=>{if(Jh(v,t)){v.preventDefault();let w=n!==void 0?n:cr(p)===cr(m),y=()=>h(e,{replace:w,mask:r,state:l,preventScrollReset:o,relative:i,viewTransition:a,defaultShouldRevalidate:s});u?x.startTransition(()=>y()):y()}},[p,h,m,n,r,l,t,e,o,i,a,s,u])}var Sm=0,km=()=>`__${String(++Sm)}__`;function Nm(){let{router:e}=yd("useSubmit"),{basename:t}=x.useContext(Pe),n=Qh(),r=e.fetch,l=e.navigate;return x.useCallback(async(o,i={})=>{let{action:a,method:s,encType:u,formData:h,body:p}=tm(o,t);if(i.navigate===!1){let m=i.fetcherKey||km();await r(m,n,i.action||a,{defaultShouldRevalidate:i.defaultShouldRevalidate,preventScrollReset:i.preventScrollReset,formData:h,body:p,formMethod:i.method||s,formEncType:i.encType||u,flushSync:i.flushSync})}else await l(i.action||a,{defaultShouldRevalidate:i.defaultShouldRevalidate,preventScrollReset:i.preventScrollReset,formData:h,body:p,formMethod:i.method||s,formEncType:i.encType||u,replace:i.replace,state:i.state,fromRouteId:n,flushSync:i.flushSync,viewTransition:i.viewTransition})},[r,l,t,n])}function Cm(e,{relative:t}={}){let{basename:n}=x.useContext(Pe),r=x.useContext(Ke);_(r,"useFormAction must be used inside a RouteContext");let[l]=r.matches.slice(-1),o={...vr(e||".",{relative:t})},i=rt();if(e==null){o.search=i.search;let a=new URLSearchParams(o.search),s=a.getAll("index");if(s.some(h=>h==="")){a.delete("index"),s.filter(p=>p).forEach(p=>a.append("index",p));let h=a.toString();o.search=h?`?${h}`:""}}return(!e||e===".")&&l.route.index&&(o.search=o.search?o.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(o.pathname=o.pathname==="/"?n:Me([n,o.pathname])),cr(o)}function Em(e,{relative:t}={}){let n=x.useContext(dd);_(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=yd("useViewTransitionState"),l=vr(e,{relative:t});if(!n.isTransitioning)return!1;let o=tt(n.currentLocation.pathname,r)||n.currentLocation.pathname,i=tt(n.nextLocation.pathname,r)||n.nextLocation.pathname;return El(l.pathname,i)!=null||El(l.pathname,o)!=null}function yr({children:e,className:t="",variant:n="light",icon:r=null,...l}){return c.jsxs("button",{className:`menu-button menu-button--${n} ${t}`.trim(),type:"button",...l,children:[c.jsx("span",{className:"menu-button__glow","aria-hidden":"true",children:c.jsx("svg",{viewBox:"0 0 173 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:c.jsx("circle",{cx:"85",cy:"33",r:"100",fill:"#FFF0E1"})})}),r?c.jsx("span",{className:"menu-button__icon",children:r}):null,c.jsx("span",{className:"menu-button__label",children:e})]})}const jm="/web_bis/assets/logoBIS-DnObfTjx.png",wd="data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M7.35156%2014.4219C6.46094%2017.0703%202.92969%2017.0703%202.92969%2017.0703C2.92969%2017.0703%202.92969%2013.5391%205.57813%2012.6484'%20stroke='%23F8F9FF'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M15.3047%208.23438L10%2013.5391L6.46094%2010L11.7656%204.69531C13.7734%202.6875%2015.7813%202.71094%2016.6406%202.83594C16.7732%202.85363%2016.8963%202.91447%2016.9909%203.00907C17.0855%203.10367%2017.1464%203.22677%2017.1641%203.35938C17.2891%204.21875%2017.3125%206.22656%2015.3047%208.23438Z'%20stroke='%23F8F9FF'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M14.4219%209.11719V14.1641C14.4195%2014.3289%2014.3521%2014.4862%2014.2344%2014.6016L11.7109%2017.1328C11.6309%2017.2128%2011.5306%2017.2695%2011.4208%2017.297C11.3111%2017.3244%2011.1959%2017.3215%2011.0876%2017.2886C10.9794%2017.2558%2010.882%2017.1941%2010.8061%2017.1102C10.7301%2017.0264%2010.6783%2016.9235%2010.6562%2016.8125L10%2013.5391'%20stroke='%23F8F9FF'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M10.883%205.57812H5.83612C5.67127%205.58047%205.51402%205.64787%205.39862%205.76563L2.86737%208.28906C2.78741%208.36912%202.73068%208.46939%202.70323%208.57916C2.67579%208.68894%202.67866%208.8041%202.71154%208.91237C2.74442%209.02064%202.80608%209.11796%202.88994%209.19393C2.9738%209.2699%203.07671%209.32168%203.18769%209.34375L6.46112%2010'%20stroke='%23F8F9FF'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",Hs=[{label:"Home",path:"/",variant:"light"},{label:"About Us",path:"/about",variant:"light"},{label:"Products",path:"/products",variant:"light"},{label:"Contact Us",path:"/contact",variant:"accent",icon:c.jsx("img",{src:wd,alt:"rocket",style:{width:18,height:18,display:"block",objectFit:"contain"}})}];function Rm(){const[e,t]=x.useState(!1);return c.jsxs("header",{className:"navbar relative",children:[c.jsx(el,{to:"/",className:"navbar__brand",children:c.jsx("img",{src:jm,alt:"PT BestAgro Indo Sukses",className:"navbar__logo"})}),c.jsx("nav",{className:"navbar__menu hidden lg:flex","aria-label":"Primary",children:Hs.map(n=>c.jsx(el,{to:n.path,style:{textDecoration:"none"},children:({isActive:r})=>c.jsx(yr,{variant:n.variant,icon:n.icon,className:r&&n.variant!=="accent"?"is-active":"",children:n.label})},n.label))}),c.jsx("button",{onClick:()=>t(!e),className:`
      lg:hidden

      flex
      items-center
      justify-center

      w-11
      h-11

      ml-auto

      text-[#2D2D2D]
    `,children:e?c.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:c.jsx("path",{d:"M6 6L18 18M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})}):c.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:c.jsx("path",{d:"M4 7H20M4 12H20M4 17H20",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})})}),e&&c.jsx("div",{className:`
absolute
top-[70px]
left-5
right-5

z-50

rounded-2xl
bg-white

shadow-xl

p-5

lg:hidden
`,children:c.jsx("div",{className:"flex flex-col gap-3",children:Hs.map(n=>c.jsx(el,{to:n.path,onClick:()=>t(!1),className:({isActive:r})=>`
                rounded-xl
                px-4
                py-3
                transition
                ${r?"bg-[#FFA600] text-white":"text-[#333] hover:bg-[#FFF3E0]"}
              `,children:c.jsxs("div",{className:"flex items-center gap-3",children:[n.icon,n.label]})},n.label))})})]})}const Am="/web_bis/assets/leafvectorright-C6WaLDmY.png",Pm="/web_bis/assets/fruitvectorleft-CklmoKJo.png";function Lm(){return c.jsxs("footer",{className:`
    relative

    mt-[350px]
h-[182px]

    ml-[calc(50%-50vw)]
    mr-[calc(50%-50vw)]

    flex
    w-screen
    flex-col
    justify-end

    bg-[#2D2D2D]

    text-white
  `,children:[c.jsx("div",{className:`
    relative

    z-10

    mx-auto

    -mt-[140px]

    w-full
    max-w-[1440px]

    px-6

    lg:px-[134px]
  `,children:c.jsxs("section",{className:`
    relative
    overflow-hidden

    flex
    flex-col
    items-start

    gap-4

    rounded-[20px]

    bg-[#FFA600]

    px-6
    py-10

    text-[#231300]

    shadow-[0_20px_60px_rgba(0,0,0,0.12)]

    sm:px-8
    sm:py-12

    md:px-12
    md:py-14

    lg:w-full
    lg:max-w-[1170px]
    lg:gap-[10px]
    lg:rounded-[24px]
    lg:px-[80px]
    lg:py-[80px]
  `,children:[c.jsx("img",{src:Pm,alt:"fruit decoration",className:`
    absolute
    left-[-4.999px]
    bottom-[-2.48px]

    w-[250px]
    h-[250px]

    rotate-[9.962deg]

    opacity-90

    object-contain
    pointer-events-none
    select-none
  `}),c.jsx("img",{src:Am,alt:"leaf decoration",className:`
  pointer-events-none
  absolute
  right-[-120px]
  top-[-80px]
  z-0
  hidden
  opacity-70
  md:block
  md:h-[260px]
  md:w-[260px]
  lg:right-[-67px]
  lg:top-[-67px]
  lg:h-[340px]
  lg:w-[340px]
`,style:{padding:"48.473px 61.804px 47.809px 62.457px"}}),c.jsxs("div",{className:`
    relative
    z-10

    mx-auto

    flex
    w-full
    max-w-[940px]
    flex-col
    items-center

    text-center

    lg:items-start
    lg:text-left
  `,children:[c.jsx("h2",{className:`
    text-[32px]
    font-bold
    leading-tight
    text-[#241100]
    mx-auto
    sm:text-[40px]

    md:text-[48px]

    lg:text-[58px]
  `,children:"Ready to Grow Together?"}),c.jsx("p",{className:"text-center mt-8 max-w-[990px] text-[18px] leading-[1.6] text-[#231300] lg:text-[18px]",children:"We work with distributors and partners who value quality, reliability, and long-term collaboration. Let's discuss how PT BestAgro Indo Sukses can support your agricultural business."}),c.jsx(yr,{variant:"light",className:`
    mt-8
mx-auto
    flex
    items-center
    justify-center
    gap-[10px]

    h-[48px]
    w-full
    max-w-[173px]

    rounded-[20px]

    bg-white

    px-[50px]
    py-[16px]

    text-[16px]
    font-semibold
    text-[#FFA600]

    flex-shrink-0

    sm:w-[173px]

    lg:mt-12
    lg:text-[18px]
  `,icon:c.jsx("img",{src:wd,alt:"rocket",className:`
      block

      h-[28px]
      w-[28px]

      object-contain
      shrink-0

      brightness-0

      saturate-100

      opacity-100
    `,style:{filter:`
        brightness(0)
        saturate(100%)
        invert(67%)
        sepia(95%)
        saturate(2137%)
        hue-rotate(2deg)
        brightness(101%)
        contrast(103%)
        drop-shadow(0 1px 2px rgba(0,0,0,0.12))
      `}}),children:"Contact Us"})]})]})}),c.jsx("div",{className:`
    mx-auto

    flex
    mb-[-1.4rem]
    h-[182px]
    w-full
    max-w-[1440px]

    items-end
    justify-center

    bg-[#2D2D2D]

    px-6
    pb-[24px]
    pt-[60px]

    text-center

    lg:px-[60px]
  `,children:c.jsx("p",{className:"text-center text-[14px] font-normal text-white/90",children:"© 2026 PT BestAgro Indo Sukses"})})]})}function Fm({children:e}){return c.jsxs("main",{className:"ui-shell",children:[c.jsx(Rm,{}),e,c.jsx(Lm,{})]})}const Dm="/web_bis/assets/Background_leaff-B3D2SFjx.png",Tm="/web_bis/assets/Background_color-BNBMnozb.png",Im="/web_bis/assets/Background_circle-CpDGvlBI.png",Om="/web_bis/assets/Produk-6UlIh-nx.png";function Mm(){return c.jsxs("section",{className:"hero","aria-label":"Hero",children:[c.jsxs("div",{className:"hero__media","aria-hidden":"true",children:[c.jsx("img",{className:"hero__color",src:Tm,alt:""}),c.jsx("img",{className:"hero__leaf",src:Dm,alt:""}),c.jsx("img",{className:"hero__circle",src:Im,alt:""}),c.jsx("img",{className:"hero__product",src:Om,alt:""})]}),c.jsx("div",{className:"hero__inner",children:c.jsxs("div",{className:"hero__content",children:[c.jsxs("h2",{className:"hero__title",children:["Sustainable Farming.",c.jsx("br",{}),"Profitable Results. Premium Quality."]}),c.jsx(yr,{className:"hero__cta",variant:"light",children:"Products"})]})})]})}const zm="/web_bis/assets/Tomato-DV9-6xOr.png",Um="/web_bis/assets/vegetable-C5hsvCLt.png",Bm="/web_bis/assets/Leaf-C9Fo2Mvc.png",Hm="/web_bis/assets/Strawberry-CHmShjkm.png";function Vm(){return c.jsx("section",{className:"-mt-[18px] relative ml-[calc(50%-50vw)] mr-[calc(50%-50vw)] w-screen overflow-hidden bg-[#F4F4F4]",children:c.jsxs("div",{className:"mx-auto flex h-auto w-full max-w-[1440px] flex-col items-center justify-between gap-14 px-6 py-10 lg:h-[628px] lg:flex-row lg:px-[72px] lg:py-[64px]",children:[c.jsxs("div",{className:"flex flex-col gap-4",children:[c.jsxs("div",{className:"flex gap-4",children:[c.jsx("div",{className:"rounded-[28px] overflow-hidden",children:c.jsx("img",{src:zm,alt:"Tomato",className:"w-[240px] h-[210px] object-cover"})}),c.jsx("div",{className:"rounded-[28px] overflow-hidden",children:c.jsx("img",{src:Um,alt:"Vegetables",className:"w-[420px] h-[210px] object-cover"})})]}),c.jsxs("div",{className:"flex gap-4",children:[c.jsx("div",{className:"rounded-[28px] overflow-hidden",children:c.jsx("img",{src:Bm,alt:"Leaf",className:"w-[390px] h-[210px] object-cover"})}),c.jsx("div",{className:"rounded-[28px] overflow-hidden",children:c.jsx("img",{src:Hm,alt:"Strawberry",className:"w-[240px] h-[210px] object-cover"})})]})]}),c.jsxs("div",{className:"max-w-[520px] text-justify",children:[c.jsx("h2",{className:"text-[42px] leading-[52px] font-bold text-black mb-6",children:"About Company"}),c.jsx("p",{className:"text-[#4B4B4B] text-[16px] leading-[24px] font-normal mb-8",children:"PT BestAgro Indo Sukses (BIS) is an Indonesian agrochemical company committed to supporting agricultural progress through high-quality pesticide solutions. Established in 2012 (formerly PT Berkah Sumber Sukses), BIS develops and supplies fungicides, herbicides, insecticides, and rodenticides trusted by farmers nationwide."}),c.jsx("p",{className:"text-[#4B4B4B] text-[16px] leading-[24px] font-normal mb-10",children:"By collaborating with international partners and experienced local distributors, BIS ensures reliable, effective, and market-proven products that help farmers achieve better yields sustainably and profitably."}),c.jsx(yr,{style:{display:"flex",width:"173px",height:"60px",padding:"16px 50px",justifyContent:"center",alignItems:"center",gap:"8px",flexShrink:0,borderRadius:"20px",background:"#FFA600",color:"#FFF",border:"none",cursor:"pointer",fontSize:"18px",fontWeight:600},children:"More About Us"})]})]})})}const Vt="https://indobiz-solution.com/api";function Qm(){const[e,t]=x.useState([]),[n,r]=x.useState(!0);x.useEffect(()=>{l()},[]);const l=async()=>{try{const i=await(await fetch(`${Vt}/brands`)).json();t(i||[])}catch(o){console.error("Failed to load brands:",o)}finally{r(!1)}};return c.jsx("section",{className:"w-full py-10",children:c.jsxs("div",{className:"mx-auto max-w-[1200px] px-6",children:[c.jsx("h2",{className:`
            mb-8
            text-center
            text-[28px]
            font-bold
            text-[#333333]

            md:text-[36px]
          `,children:"Our Products"}),n?c.jsx("div",{className:"text-center",children:"Loading brands..."}):c.jsx("div",{className:`
              grid
              grid-cols-2
              gap-x-8
              gap-y-8

              sm:grid-cols-3
              md:grid-cols-4
              lg:grid-cols-5
              xl:grid-cols-6
            `,children:e.map(o=>c.jsx("div",{className:`
                  flex
                  items-center
                  justify-center
                  transition-all
                  duration-300
                  hover:scale-105
                `,children:c.jsx("img",{src:o.logoBrand,alt:o.brandName,className:`
                    h-auto
                    max-h-[80px]
                    w-auto
                    max-w-[160px]
                    object-contain
                  `,loading:"lazy"})},o.brandID))})]})})}function _m(){const[e,t]=x.useState([]),[n,r]=x.useState(!0);x.useEffect(()=>{l()},[]);const l=async()=>{try{const i=await(await fetch(`${Vt}/products`)).json();t(i||[])}catch(o){console.error("Failed to fetch products:",o)}finally{r(!1)}};return c.jsxs("section",{className:`
    py-12
    sm:py-14
    lg:py-16
  `,children:[c.jsx("div",{className:"mx-auto max-w-[1340px] px-6",children:n?c.jsx("div",{className:"text-center",children:"Loading products..."}):c.jsx("div",{className:`
              grid
    grid-cols-2
    gap-5

    md:grid-cols-2

    lg:grid-cols-4
    lg:gap-8
            `,children:e.map(o=>c.jsxs("div",{className:`
    group
    w-full
    flex
    flex-col
    overflow-hidden
    transition-all
    duration-300
  `,children:[c.jsx("div",{className:`
      w-full

      h-[170px]

      bg-[#EFE5DA]

      flex
      items-center
      justify-center

      overflow-hidden

      sm:h-[260px]

      md:h-[250px]
h-[170px]
sm:h-[210px]
      lg:h-[323px]
    `,children:c.jsx("img",{src:o.imageURL,alt:o.productName,className:`
        w-full
        h-full

        object-contain

        p-3

        sm:p-3

        lg:p-5

        transition-transform
        duration-500

        group-hover:scale-110
      `})}),c.jsx("div",{className:`
      flex

      min-h-[67px]

      w-full

      items-center

      gap-[3px]

      px-[16px]
      py-[15px]

      transition-all
      duration-300

      group-hover:shadow-lg
    `,children:c.jsxs("div",{className:"flex flex-col",children:[c.jsx("h3",{className:`
          text-black

          text-[14px]
          font-bold

          sm:text-[15px]

          lg:text-[16px]
        `,children:o.productName}),c.jsx("p",{className:`
          text-black/50

          text-[12px]

          sm:text-[13px]

          lg:text-[14px]
        `,children:o.categoryName})]})})]},o.productID))})}),c.jsx(xn,{to:"/products",className:`
    block
    w-full
    lg:max-w-[1272px]
    mx-auto
    no-underline
  `,children:c.jsx(yr,{variant:"accent",className:`
      !flex

      !w-full
      !h-[60px]

      !items-center
      !justify-center

      !gap-[8px]

      !rounded-[20px]

      !border
      !border-[#FFA600]

      !bg-white

      !px-[50px]
      !py-[16px]

      !text-[#FFA600]
    `,children:"View All Products"})})]})}function Wm(){return c.jsxs(c.Fragment,{children:[c.jsx(Mm,{}),c.jsx(Vm,{}),c.jsx(Qm,{}),c.jsx(_m,{})]})}function Km({title:e,description:t}){return c.jsx("section",{className:"mx-auto flex min-h-[420px] w-full max-w-[1340px] items-center justify-center rounded-[28px] bg-[#F4F4F4] px-6 py-16 text-center",children:c.jsxs("div",{className:"max-w-[720px]",children:[c.jsx("h1",{className:"text-[42px] font-bold leading-tight text-[#231300]",children:e}),c.jsx("p",{className:"mt-5 text-[18px] leading-[1.7] text-[#4B4B4B]",children:t})]})})}const Ym="/web_bis/assets/HeroAboutus-Nq4Y6BYc.png",Xm="/web_bis/assets/Paddy-CBUzVuyC.png",qm="/web_bis/assets/Bluberryleft-BoQOU9N0.png",Gm="/web_bis/assets/Blueberryright-DvCkJffY.png",Zm="/web_bis/assets/ValueComitmen-PrOAMa5a.png",bm="/web_bis/assets/MarketMap-BfQ6AVOJ.png",Jm="/web_bis/assets/PadiFilosopi-BORRRMUV.png",$m="/web_bis/assets/Simplification-B4tofmUx.png",eg="data:image/png;base64,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",tg="data:image/png;base64,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",ng="data:image/png;base64,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",rg="data:image/png;base64,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";function Tn({icon:e,title:t,description:n}){return c.jsxs("div",{className:`
relative

w-full
max-w-[429px]

min-h-[520px]

mb-6
lg:mb-0

rounded-[24px]
bg-[#F4EBDD]

px-[28px]
pt-[120px]
pb-[32px]

shadow-[0_10px_30px_rgba(0,0,0,0.12)]
`,children:[c.jsx("div",{className:`
          absolute
          left-1/2
          top-0

          h-[170px]
          w-[170px]

          -translate-x-1/2
          -translate-y-1/2

          rounded-full
          border-[5px]
          border-[#FFB000]

          bg-[#F18B00]

          flex
          items-center
          justify-center

          shadow-[0_12px_24px_rgba(0,0,0,0.25)]
        `,children:c.jsx("img",{src:e,alt:t,className:"h-[80px] w-[80px] object-contain"})}),c.jsx("h3",{className:`
          mb-6
          text-[24px]
          font-bold
          text-[#A45A00]
        `,children:t}),c.jsx("p",{className:`
    w-full
    max-w-[365px]
    text-start
    lg:text-left
    text-[14px]
    leading-[1.6]
    text-[#A45A00]
    sm:text-[15px]
    lg:text-[16px]
  `,children:n})]})}function lg(){return c.jsxs("section",{className:`
    w-screen
    ml-[calc(50%-50vw)]
    mr-[calc(50%-50vw)]
  `,children:[c.jsxs("div",{className:"relative overflow-hidden",children:[c.jsx("img",{src:Ym,alt:"About Company",className:`
        block
        w-full
        h-auto
        object-cover
      `}),c.jsx("div",{className:`
        absolute
        inset-0

        flex
        items-center
        justify-center

        px-6

        lg:px-[80px]
      `,children:c.jsx("div",{className:`
          w-full
          max-w-[1275px]
        `,children:c.jsxs("h2",{className:`
            text-white
            text-[32px]
            font-bold
            leading-[42px]

            md:text-[40px]

            lg:text-[48px]
          `,children:["About-",c.jsx("br",{}),"Company."]})})})]}),c.jsxs("div",{className:`
      mx-auto
      flex
      max-w-[1440px]

      flex-col
      gap-10

      px-6
      py-12

      lg:flex-row
      lg:items-center
      lg:gap-[80px]
      lg:px-[80px]
      lg:py-[80px]
    `,children:[c.jsx("div",{className:"w-full lg:w-1/2",children:c.jsx("img",{src:Xm,alt:"Paddy",className:`
          w-full
          rounded-[24px]
          object-cover
        `})}),c.jsxs("div",{className:"flex flex-col gap-6 lg:w-1/2",children:[c.jsx("h3",{className:`
          sm:text-[28px]
          font-bold
          text-[#2D2D2D]
          lg:text-[32px]
        `,children:"PT BestAgro Indo Sukses (BIS)"}),c.jsxs("p",{className:`
                          lg:text-[20px]
                          sm:text-[16px]
                          leading-[1.5]
                          text-[#000]
                          text-justify
                          `,children:["formerly known as ",c.jsx("strong",{children:"PT Berkah Sumber Sukses (BSS)"}),", is an agrochemical company dedicated to supporting the advancement of agriculture in Indonesia."]})]})]}),c.jsxs("div",{className:`
                mx-auto
                flex
                max-w-[1440px]
                flex-col
                gap-10
                px-6
                py-12
                lg:flex-row
                lg:items-center
                lg:gap-[80px]
                lg:px-[80px]
                lg:py-[80px]
                `,children:[c.jsxs("div",{className:`
    order-2
    w-full
    text-justify

    lg:order-1
    lg:w-1/2
  `,children:[c.jsx("h3",{className:`
      text-[24px]
      font-bold
      text-[#2D2D2D]

      sm:text-[28px]
      lg:text-[32px]
    `,children:"PT BestAgro Indo Sukses (BIS)"}),c.jsx("p",{className:`
      mt-4
      text-[16px]
      leading-[1.6]
      text-[#000]

      lg:text-[20px]
    `,children:"Established in 2012, BIS has developed its own range of agrochemical products, including fungicides, herbicides, insecticides, and rodenticides. The company continuously strives to deliver high-quality products that are well accepted by the market while consistently expanding its product portfolio to meet the evolving needs of farmers."}),c.jsx("p",{className:`
      mt-6
      text-[16px]
      leading-[1.6]
      text-[#000]

      lg:text-[20px]
    `,children:"To ensure product reliability and effectiveness, BIS collaborates with reputable pesticide manufacturers in China and India, ensuring that Indonesian farmers receive trusted, market-proven solutions."}),c.jsx("p",{className:`
      mt-6
      text-[16px]
      leading-[1.6]
      text-[#000]

      lg:text-[20px]
    `,children:"BIS has also built strong business relationships with experienced main distributors across Indonesia to ensure efficient and reliable product distribution."})]}),c.jsxs("div",{className:`
    order-1
    flex
    w-full
    gap-[16px]
    mb-8

    lg:order-2
    lg:mb-0
    lg:w-1/2
  `,children:[c.jsx("img",{src:qm,alt:"Blueberry Left",className:`
      h-[300px]
      w-1/2

      -mt-[20px]

      rounded-[24px]

      object-cover

      transition-all
      duration-700

      hover:scale-[1.03]

      lg:h-[460px]
      lg:-mt-[30px]
    `}),c.jsx("img",{src:Gm,alt:"Blueberry Right",className:`
      h-[300px]
      w-1/2

      rounded-[24px]

      object-cover

      transition-all
      duration-700

      hover:scale-[1.03]

      lg:h-[460px]
    `})]})]}),c.jsxs("div",{className:"relative overflow-hidden",children:[c.jsx("img",{src:Zm,alt:"About Company",className:`
        block
        w-full
        lg:h-auto
        h-[380px]
        md:[450px]
        object-cover
      `}),c.jsx("div",{className:`
        absolute
        inset-0

        flex
        items-center
        justify-center

        px-6

        lg:px-[80px]
      `,children:c.jsxs("div",{className:`
          w-full
          max-w-[1275px]
        `,children:[c.jsxs("span",{className:"lg:text-[20px] sm:text-[16px] text-white text-center block mb-4",children:["Guided by its commitment to quality and integrity,",c.jsx("br",{}),"BIS operates under the tagline:"]}),c.jsx("h2",{className:`
            text-white
            sm:text-[24px]
            font-bold
            leading-[42px]
            text-center
            md:text-[40px]
            lg:text-[48px]
          `,children:"Your Values, Our Commitment"})]})})]}),c.jsxs("div",{className:`
    mx-auto
    flex
    w-full
    max-w-[1048px]
    p-12
    flex-col
    gap-6

    lg:flex-row
    lg:gap-[32px]
  `,children:[c.jsx("div",{className:`
      flex
      w-full
      flex-col
      items-start

      gap-[64px]

      rounded-[24px]

      bg-[#E87E06]

      p-[24px]

      lg:w-[484px]
    `,children:c.jsxs("div",{className:"flex flex-col gap-6",children:[c.jsx("h3",{className:`
          text-[36px]
          font-bold
          text-white
        `,children:"Our Vision"}),c.jsx("p",{className:`
          text-[18px]
          leading-[1.8]
          text-white
        `,children:"To provide sustainable farming solutions that are both profitable and supported by high-quality products."})]})}),c.jsx("div",{className:`
      flex
      w-full
      flex-col
      items-start

      gap-[64px]

      rounded-[24px]

      bg-[#FFA600]

      p-[24px]

      lg:w-[484px]
    `,children:c.jsxs("div",{className:"flex flex-col gap-6",children:[c.jsx("h3",{className:`
          text-[36px]
          font-bold
          text-white
        `,children:"Our Mission"}),c.jsx("p",{className:`
          text-[18px]
          leading-[1.8]
          text-white
        `,children:"To become the most trusted agrochemical company by delivering the highest level of commitment to all stakeholders."})]})})]}),c.jsxs("div",{className:"flex sm:w-[420px] lg:w-[1252px] mx-auto flex-col items-center",children:[c.jsx("h2",{className:`
    w-full
    text-center

    text-[#333333]
    text-[32px]
    font-semibold
    leading-[120%]

    md:text-[40px]
    lg:text-[48px]
  `,children:"Market Map"}),c.jsx("img",{src:bm,alt:"Market Map",className:`
    block
    w-full
    p-2
    h-[336px]
    self-stretch
    object-cover

    md:h-[500px]
    lg:h-[980px]
    lg:aspect-[290/227]
  `})]}),c.jsxs("div",{className:"relative overflow-hidden",children:[c.jsx("img",{src:Jm,alt:"Our Philosophy",className:`
      block
      w-full
      lg:h-auto
      h-[310px]
      object-cover
    `}),c.jsx("div",{className:`
      absolute
      inset-0

      flex
      items-center
      justify-center

      px-6
      -translate-y-[40px]
      lg:-translate-y-[60px]
      lg:px-[80px]
    `,children:c.jsx("div",{className:`
        w-full
        max-w-[1275px]
      `,children:c.jsx("h2",{className:`
          text-center
          text-white

          text-[32px]
          font-bold
          leading-[42px]

          md:text-[40px]
          lg:text-[48px]
        `,children:"Our Philosophy"})})})]}),c.jsxs("div",{className:`
  relative
  z-20
    mx-auto
    lg:-mt-[60px]
    -mt-[20px]
    w-full
    max-w-[1440px]
    px-6
    lg:px-[40px]
  `,children:[c.jsxs("div",{className:`
    grid
    gap-y-[90px]
    gap-x-[24px]
    md:grid-cols-2
    md:gap-[40px]
    lg:grid-cols-3
    lg:gap-[32px]
  `,children:[c.jsx(Tn,{icon:$m,title:"Commitment & Continuity",description:"Committed to give the best quality of Pesticide products to meet the needs of every farmers in Indonesia. This is a dedication which given continuously. The aim is to make sure that only the best products being used by Indonesian farmers in order to continue to advance the country’s agricultural products. Full commitment also given to the Distributors in order to create a long and good relationship with them."}),c.jsx(Tn,{icon:eg,title:"Trust & Team",description:"Trust means that you rely on someone else, you believe in the person’s integrity and strength. Trust is essential to an effective team for it provides a sense of safety. When the team members feel safe with each other, they feel comfortable to open up, take appropriate risks, and expose vulnerabilities. Without trust there’s less innovation, collaboration, creative thinking, and productivity. So, if the team members trust one another, they’re far more likely to share knowledge, and communicate openly."}),c.jsx(Tn,{icon:tg,title:"People & Partners",description:"Always put the customers’ as top priority and consider them as Partners without any discrimination. Always try to reach all levels in the society, especially People in Indonesian Agriculture to be able to understand their needs and desires."})]}),c.jsxs("div",{className:`
      mt-[90px]
      md:mt-[110px]
      lg:mt-[120px]
      flex
      flex-col
      items-center

      gap-[32px]

      lg:flex-row
      lg:justify-center
    `,children:[c.jsx(Tn,{icon:ng,title:"Quality",description:"Only provide the best quality of each product offered to farmers in Indonesia with the hope that these products can meet their needs and expectations. In addition, efforts should also be made to ensure product quality is always maintained."}),c.jsx(Tn,{icon:rg,title:"Adaptability & Innovation",description:"Adaptation and innovation help create a product that suits to the needs of consumers. A product must be able to adapt to the current conditions and situations. When the Indonesian economy is decreasing, purchasing ability also declines; it is necessary to have an innovation to be able to adapt to existing situations and conditions. For example, by launching products in small packages that are more affordable to the customers."})]})]})]})}const og="/web_bis/assets/ProductpageHero-DObdb5X2.png";function ig(){const[e,t]=x.useState([]),[n,r]=x.useState(""),[l,o]=x.useState([]),[i,a]=x.useState([]);va(),x.useEffect(()=>{fetch(`${Vt}/categories`).then(u=>u.json()).then(u=>{t(u)}).catch(u=>{console.error("Failed to load categories:",u)})},[]),x.useEffect(()=>{fetch(`${Vt}/products`).then(u=>u.json()).then(u=>{o(u),a(u)}).catch(u=>{console.error("Failed to load products:",u)})},[]),x.useEffect(()=>{if(!n){a(l);return}a(l.filter(u=>String(u.categoryID)===String(n)))},[n,l]);const s=()=>{r(""),a(l)};return x.useEffect(()=>{console.log("selectedCategory =",n)},[n]),console.log("Selected Category:",n),console.log("Filtered Products:",i),c.jsxs(c.Fragment,{children:[c.jsxs("section",{className:`
    relative
    w-screen
    h-[320px]
    sm:h-[360px]
    lg:h-[380px]
    ml-[calc(50%-50vw)]
    mr-[calc(50%-50vw)]
    overflow-hidden
  `,children:[c.jsx("img",{src:og,alt:"Our Products",className:`
      absolute
      inset-0

      h-full
      w-full

      object-cover
    `}),c.jsx("div",{className:`
      absolute
      inset-0

      bg-[#D89200]/70
    `}),c.jsx("div",{className:`
      relative
      z-10
      mx-auto
      flex
      h-full
      w-full
      max-w-[1440px]
      items-end
      lg:items-center
      px-6
      pb-8
      lg:px-[80px]
      lg:pb-0
      lg:px-[80px]
    `,children:c.jsxs("div",{className:`
        flex
        w-full
        max-w-[740px]

        flex-col

        gap-6
      `,children:[c.jsx("h1",{className:`
          text-white
          text-[24px]
          leading-tight
          sm:text-[30px]
          lg:text-[56px]
          font-bold
          uppercase
          md:text-[48px]
        `,children:"OUR PRODUCTS"}),c.jsxs("div",{className:"flex flex-col gap-2",children:[c.jsx("label",{className:`
            text-white
            text-[18px]
            lg:text-[20px]
            font-medium
          `,children:"Filter"}),c.jsxs("div",{className:`
            flex
            flex-col
            items-start
            gap-4
            lg:flex-row
            lg:items-center
          `,children:[c.jsxs("select",{value:n,onChange:u=>r(u.target.value),className:`
              h-[48px]
              text-[16px]
              lg:h-[42px]
              lg:w-[480px]
              lg:text-[20px]
              w-full
              rounded-[12px]
              bg-white
              px-4
              text-[#999]
              outline-none
            `,children:[c.jsx("option",{value:"",children:"Select Category..."}),e.map(u=>c.jsx("option",{value:u.categoryID,children:u.categoryName},u.categoryID))]}),c.jsx("button",{onClick:s,className:`
              h-[40px]
w-[110px]
text-[18px]
lg:h-[42px]
lg:w-[240px]
lg:text-[24px]

              rounded-[12px]
              bg-white
              text-[24px]
              font-semibold
              text-[#FFA600]
              transition-all
              duration-300
              hover:bg-[#fff7ea]
              lg:w-[240px]
            `,children:"Clear"})]})]})]})})]}),c.jsx("section",{className:`
      mx-auto
      w-full
      max-w-[1440px]
      py-[24px]
      px-6
      sm:px-8
      md:px-10
      lg:py-[35px]
      lg:px-[60px]
      xl:py-[55px]
      xl:px-[90px]
      xxl:px=[90px]
    `,children:c.jsx("div",{className:`
    mx-auto
    max-w-[1440px]
  `,children:c.jsx("div",{className:`
      grid

      grid-cols-2
      gap-x-6
      gap-y-8
      lg:grid-cols-4
      lg:gap-[40px]
    `,children:i.map(u=>c.jsx(xn,{to:`/products/${u.productID}`,className:"block",children:c.jsxs("div",{className:`
        group
        flex
        h-auto
        lg:h-[400px]
        w-full
        cursor-pointer
        flex-col
        items-center
        overflow-hidden
        transition-all
        duration-300

        hover:-translate-y-1
      `,children:[c.jsx("div",{className:`
          flex
          aspect-square
          lg:h-[323px]
          w-full

          items-center
          justify-center

          overflow-hidden

          rounded-t-[16px]
          bg-[#F4EBDD]
        `,children:c.jsx("img",{src:u.imageURL,alt:u.productName,className:`
            h-full
            w-full

            object-contain

            transition-transform
            duration-500

            group-hover:scale-110
          `})}),c.jsxs("div",{className:`
          flex
          h-[67px]
          w-full

          flex-col
          items-start
          justify-center

          gap-[3px]

          rounded-b-[16px]
          bg-white

          px-[16px]
          py-[15px]

          transition-shadow
          duration-300

          group-hover:shadow-lg
        `,children:[c.jsx("h3",{className:`
            text-[14px]
            font-bold
            lg:text-[16px]
            font-bold
            text-black
          `,children:u.productName}),c.jsx("p",{className:`
            text-[12px]
            lg:text-[14px]
            font-normal
            text-black/50
          `,children:u.categoryName})]})]})},u.productID))})})})]})}const ag="/web_bis/assets/ContactUsbackground-sGeH4GWz.png",sg="/web_bis/assets/Headquarters-Bv1Rw-hW.png",Eo="/web_bis/assets/Warehouse-BYIZtkec.png";function ug(){const e=[Eo,Eo,Eo],[t,n]=x.useState(0),r=()=>{n(p=>p===0?e.length-1:p-1)},l=()=>{n(p=>(p+1)%e.length)},[o,i]=x.useState({firstName:"",lastName:"",email:"",phoneNumber:"",message:""}),a=p=>{i(m=>({...m,[p.target.name]:p.target.value}))},s=async p=>{p.preventDefault(),h(!0);try{const m=await fetch(`${Vt}/messages`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({firstName:o.firstName,lastName:o.lastName,email:o.email,message:o.message})}),v=await m.json();if(!m.ok)throw new Error(v.message||"Failed to send message.");alert("Message sent successfully!"),i({firstName:"",lastName:"",email:"",phoneNumber:"",message:""})}catch(m){console.error(m),alert(m.message)}finally{h(!1)}},[u,h]=x.useState(!1);return c.jsxs("section",{className:`
        relative
        w-screen
        min-h-screen
        ml-[calc(50%-50vw)]
        mr-[calc(50%-50vw)]
        overflow-hidden
      `,children:[c.jsx("img",{src:ag,alt:"Contact Background",className:`
          absolute
          inset-0
          h-full
          w-full
          object-cover
        `}),c.jsx("div",{className:"absolute inset-0 bg-[#8A5D23]/75"}),c.jsx("div",{className:`
          relative
          z-10

          mx-auto
          max-w-[1440px]
          px-8
          py-10
          sm:px-8
          lg:px-[60px]
          lg:py-[120px]
          xl:px-[80px]
          md:px-[40px]
          2xl:px-[100px]
        `,children:c.jsxs("div",{className:`
    flex
    flex-col
    gap-10

    lg:flex-row
    lg:items-stretch
    lg:justify-between
    lg:gap-10

    xl:gap-12
  `,children:[c.jsxs("div",{className:`
            order-1
            flex
            flex-col
            w-full
            lg:order-1
            lg:w-1/2
            `,children:[c.jsxs("div",{className:"flex flex-col gap-[20px]",children:[c.jsx("h2",{className:`
                text-white
                text-[28px]
leading-tight
sm:text-[34px]
lg:text-[64px]
                font-bold
                leading-tight
              `,children:"Let's talk with us"}),c.jsx("p",{className:`
                xxl:mt-6
                max-w-[500px]
                sm:mt-2
                text-white/90
                text-[15px]
leading-7
lg:text-[16px]
lg:leading-[26px]
              `,children:"Questions, comments, or suggestions? Simply fill in the form and we'll be in touch shortly."})]}),c.jsxs("div",{className:`
    mt-5
    grid
    grid-cols-2
    gap-4
    lg:flex
    lg:flex-col
    lg:gap-4
`,children:[c.jsxs("div",{className:"flex items-center gap-4",children:[c.jsx("span",{className:"text-[22px] lg:text-[28px] text-[#FFA600]",children:"☎"}),c.jsx("span",{className:"text-[14px] sm:text-[15px] lg:text-[20px] font-semibold text-white",children:"+62 21 2452 5959"})]}),c.jsxs("div",{className:"flex items-center gap-4",children:[c.jsx("span",{className:"text-[22px] lg:text-[28px] text-[#FFA600]",children:"✉"}),c.jsx("span",{className:"text-[14px] sm:text-[15px] lg:text-[20px] font-semibold text-white",children:"info@bss-pt.com"})]})]}),c.jsxs("div",{className:`
                grid
                grid-cols-1
                gap-4
                sm:grid-cols-2
              `,children:[c.jsxs("div",{className:`
                  rounded-[16px]
                  bg-white/10
                  p-[8px]
                  backdrop-blur-md
                  border
                  border-white/20
                  w-full
                  lg:max-w-[287px] 
                  min-h-[285px]
                  xxl:max-h-[384px]
                  sm:max-h-[354px]
                `,children:[c.jsx("img",{src:sg,alt:"Headquarters",className:`
                        h-[190px]
                        lg:h-[200px]
                        w-full
                        rounded-[12px]
                        object-cover
                        transition-transform
                        duration-500
                        hover:scale-105
                        `}),c.jsxs("div",{className:"mt-4 text-white",children:[c.jsx("h3",{className:"font-bold",children:"Headquarters:"}),c.jsx("p",{className:"mt-2 text-[14px] leading-[1.7]",children:"Citi Hub Harton Tower 5th Floor, Unit G Jl. Sentra Bisnis Artha Gading Blok D, Kav. No.3, Jakarta Utara 14240 Indonesia"})]})]}),c.jsxs("div",{className:`
    rounded-[16px]
    border
    border-white/20
    bg-white/10
    p-[8px]
    backdrop-blur-md
    lg:max-w-[287px] 
    min-h-[285px]
    xxl:max-h-[384px]
    sm:max-h-[354px]
  `,children:[c.jsxs("div",{className:"relative overflow-hidden rounded-[12px]",children:[c.jsx("img",{src:e[t],alt:"Warehouse",className:`
        h-[190px]
        lg:h-[200px]
        w-full
        rounded-[12px]
        object-cover
        transition-all
        duration-500
      `}),c.jsx("button",{onClick:r,className:`
        absolute
        left-[10px]
        top-1/2
        -translate-y-1/2

        flex
        h-[44px]
        w-[44px]
        items-center
        justify-center

        rounded-full
        bg-white
        text-[#FFA600]

        shadow-lg

        transition
        hover:scale-110
      `,children:"❮"}),c.jsx("button",{onClick:l,className:`
        absolute
        right-[10px]
        top-1/2
        -translate-y-1/2

        flex
        h-[44px]
        w-[44px]
        items-center
        justify-center

        rounded-full
        bg-white
        text-[#FFA600]

        shadow-lg

        transition
        hover:scale-110
      `,children:"❯"}),c.jsx("div",{className:`
        absolute
        bottom-[12px]
        left-1/2
        -translate-x-1/2

        flex
        gap-2
      `,children:e.map((p,m)=>c.jsx("button",{onClick:()=>n(m),className:`h-[10px] w-[10px] rounded-full transition-all ${t===m?"bg-white w-[22px]":"bg-white/60"}`},m))})]}),c.jsxs("div",{className:"mt-4 text-white",children:[c.jsx("h3",{className:"text-[18px] font-bold",children:"Warehouse:"}),c.jsxs("p",{className:"mt-2 text-[14px] leading-[1.7] text-white/90",children:["Green Sedayu Biz Park,",c.jsx("br",{}),"Jl. Raya Cakung Cilincing,",c.jsx("br",{}),"KM. 2 Blok GS 9A No. 11,",c.jsx("br",{}),"Cakung, Jakarta Timur, Indonesia"]})]})]})]})]}),c.jsx("div",{className:`
                order-2
    flex
    flex-col
    w-full
    lg:order-2
    lg:w-1/2 
                rounded-[24px]
                bg-white
                p-4
sm:p-5
lg:p-10
xl:p-12
                shadow-[0_20px_60px_rgba(0,0,0,0.18)]
                lg:h-full
                lg:p-10
                xl:p-12
                `,children:c.jsxs("form",{onSubmit:s,className:"flex flex-col h-full",children:[c.jsxs("div",{className:`
                    grid
                    grid-cols-1
                    gap-5
                    sm:grid-cols-2
                    `,children:[c.jsx("input",{type:"text",name:"firstName",value:o.firstName,onChange:a,placeholder:"First Name*",className:`
    h-[48px]
    lg:h-[50px]
    w-full
    rounded-[12px]
    border
    border-[#D9D9D9]
    px-5
    outline-none
  `}),c.jsx("input",{type:"text",name:"lastName",value:o.lastName,onChange:a,placeholder:"Last Name*",className:`
    h-[48px]
    w-full
    rounded-[12px]
    border
    border-[#D9D9D9]
    px-5
    outline-none
  `})]}),c.jsx("input",{type:"email",name:"email",value:o.email,onChange:a,placeholder:"Email*",className:`
    mt-5
    h-[48px]
    lg:h-[50px]
    w-full
    rounded-[12px]
    border
    border-[#D9D9D9]
    px-5
    outline-none
  `}),c.jsx("input",{type:"text",name:"phoneNumber",value:o.phoneNumber,onChange:a,placeholder:"Phone Number*",className:`
    mt-5
    h-[48px]
    lg:h-[50px]
    w-full
    rounded-[12px]
    border
    border-[#D9D9D9]
    px-5
    outline-none
  `}),c.jsx("textarea",{rows:5,name:"message",value:o.message,onChange:a,placeholder:"Your message...",className:`
                    mt-5
                    w-full
                    rounded-[12px]
                    border
                    border-[#D9D9D9]
                    p-5
                    outline-none
                    resize-none
                    `}),c.jsx("button",{type:"submit",disable:u,className:`
                mt-6
                lg:mt-8
                h-[48px]
                w-full
                rounded-[12px]
                bg-[#FFA600]
                text-[18px]
                font-semibold
                text-white
                transition-all
                duration-300
                hover:bg-[#e69600]
              `,children:u?"Sending...":"Send Message"})]})})]})})]})}function cg(){var s;const{id:e}=Dh();x.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[e]);const[t,n]=x.useState(null),[r,l]=x.useState(!0),[o,i]=x.useState([]),a=va();return x.useEffect(()=>{async function u(){try{const p=await(await fetch(`${Vt}/products/${e}`)).json();n(p);const v=await(await fetch(`${Vt}/products`)).json();i(v.filter(w=>w.productID!==Number(e)))}catch(h){console.error(h)}finally{l(!1)}}u()},[e]),r?c.jsx("div",{className:"py-32 text-center text-xl",children:"Loading..."}):t?c.jsxs(c.Fragment,{children:[c.jsxs("section",{className:`
        mx-auto
        max-w-[1440px]

        px-6
        py-[60px]

        xl:px-[80px]
      `,children:[c.jsxs("div",{className:`
          mb-10

          flex
          flex-wrap

          items-center

          gap-2

          text-[15px]
        `,children:[c.jsx(xn,{to:"/products",className:"text-[#8D99AE]",children:"Category"}),c.jsx("span",{className:"text-[#8D99AE]",children:"/"}),c.jsx("span",{className:"text-[#8D99AE]",children:t.categoryName}),c.jsx("span",{className:"text-[#8D99AE]",children:"/"}),c.jsx("span",{className:"font-semibold text-[#FFA600]",children:t.productName})]}),c.jsxs("div",{className:`
          grid

          gap-14

          xl:grid-cols-[minmax(420px,560px)_minmax(0,1fr)]
        `,children:[c.jsx("div",{className:`
            flex

            h-[560px]

            items-center
            justify-center

            rounded-[24px]

            bg-[#F4EBDD]

            p-10
          `,children:c.jsx("img",{src:t.imageURL,alt:t.productName,className:`
              max-h-full
              max-w-full

              object-contain

              transition-all
              duration-500

              hover:scale-105
            `})}),c.jsxs("div",{className:`
            flex
            flex-col

            min-w-0
            gap-8
          `,children:[c.jsxs("div",{children:[c.jsx("h1",{className:`
                text-[34px]
                font-bold

                break-words
                text-[#1F2937]

                lg:text-[58px]
              `,children:t.productName}),c.jsxs("div",{className:`
                mt-3

                flex
                flex-wrap

                gap-8

                text-[22px]
              `,children:[c.jsx("span",{className:"font-semibold text-[#FFA600]",children:t.categoryName}),c.jsx("span",{className:"font-semibold text-[#333]",children:t.volume||"-"})]})]}),c.jsxs("div",{children:[c.jsx("h3",{className:`
                text-[26px]
                font-semibold

                text-[#2D3748]
              `,children:"Active Ingredient:"}),c.jsx("p",{className:`
                mt-2

                text-[22px]

                text-[#444]
              `,children:t.activeIngredient||"No active ingredient"})]}),c.jsx("hr",{className:"border-[#D9D9D9]"}),c.jsx("p",{className:`
              max-w-[760px]

              text-[18px]

              leading-[34px]

              text-[#444]
            `,children:t.description||"No description available."}),c.jsx("div",{className:`
              flex

              h-[58px]

              items-center
              justify-center

              rounded-full

              border-[3px]
              border-[#E5E7EB]

              text-[22px]
              font-semibold

              text-[#2D3748]
            `,children:"Instructions for Use"}),c.jsx("div",{className:`
    w-full

    overflow-x-auto
    overflow-y-hidden

    touch-pan-x
    [-webkit-overflow-scrolling:touch]

    scrollbar-thin
    scrollbar-thumb-[#FFA600]
    scrollbar-track
  `,children:c.jsxs("table",{className:`
    min-w-[920px]
      w-full

      table-fixed
      border-collapse

      lg:min-w-full
  `,children:[c.jsxs("colgroup",{children:[c.jsx("col",{className:"w-[32%] lg:w-[20%]"}),c.jsx("col",{className:"w-[68%] lg:w-[34%]"})]}),c.jsx("thead",{children:c.jsxs("tr",{className:`
          border-b-2
          border-[#FFA600]
        `,children:[c.jsx("th",{className:`
            py-4
            pr-3
            text-left
            text-[15px]
            font-semibold
            leading-snug
            text-[#333]
            lg:text-[16px]
            2xl:text-[18px]
          `,children:"Crop"}),c.jsx("th",{className:`
            py-4
            pr-3
            text-left
            text-[15px]
            font-semibold
            leading-snug
            text-[#333]
            lg:text-[16px]
            2xl:text-[18px]
          `,children:"Pest"}),c.jsx("th",{className:`
    hidden
    lg:table-cell

    py-4
    pr-3
    text-left
    text-[15px]
    font-semibold
    leading-snug
    text-[#333]

    lg:text-[16px]
    2xl:text-[18px]
  `,children:"Dosage"}),c.jsx("th",{className:`
                      hidden
                      lg:table-cell
                      py-4
                      text-left
                      text-[15px]
                      font-semibold
                      leading-snug
                      text-[#333]
                      lg:text-[16px]
                      2xl:text-[18px]
                      `,children:"Application Method"})]})}),c.jsx("tbody",{children:((s=t.productDetails)==null?void 0:s.length)>0?t.productDetails.map(u=>c.jsxs("tr",{className:`
              border-b
              border-[#E5E7EB]
              align-top
            `,children:[c.jsx("td",{className:`
  py-4
  pr-4

  text-[14px]
  font-medium
  leading-7
  text-[#333]

  break-words

  lg:py-5
  lg:pr-5
  lg:text-[16px]

  2xl:text-[18px]
`,children:u.crop}),c.jsx("td",{className:`
  py-4

  text-[14px]
  leading-7
  text-[#333]

  break-words

  lg:py-5
  lg:pr-8
  lg:text-[16px]

  2xl:text-[18px]
`,children:u.pest}),c.jsx("td",{className:`
    hidden
    lg:table-cell

    py-5
    pr-6

    break-words

    text-[16px]
    text-[#333]
  `,children:c.jsx("span",{className:"underline underline-offset-4",children:u.dosage})}),c.jsx("td",{className:`
    hidden
    lg:table-cell

    py-5

    break-words

    text-[16px]
    leading-7
    text-[#6B7280]
  `,children:u.applicationMethod})]},u.detailID)):c.jsx("tr",{children:c.jsx("td",{colSpan:4,className:`
              py-10
              text-center
              text-gray-400
            `,children:"No instruction available."})})})]})}),c.jsx("div",{className:`
    mb-3
    flex
    items-center
    justify-end

    text-[13px]
    text-gray-500

    lg:hidden
  `,children:"← Swipe left / right →"})]})]})]}),c.jsxs("section",{className:`
    mt-[48px]
    lg:mt-[60px]
  `,children:[c.jsx("h2",{className:`
    mb-8

    text-center

    text-[28px]
    font-semibold
    text-[#333]

    sm:text-[32px]

    lg:mb-[48px]
    lg:text-[42px]
  `,children:"Other Products"}),c.jsx("div",{className:`
    grid

    grid-cols-2

    justify-items-center

    gap-x-4
    gap-y-8

    px-4

    lg:grid-cols-3
    xl:grid-cols-4

    lg:px-0
    lg:gap-y-10
    lg:gap-x-6
    xl:gap-x-8
  `,children:o.slice(0,4).map(u=>c.jsx("div",{className:"block cursor-pointer",onClick:()=>{a(`/products/${u.productID}`),window.scrollTo({top:0,behavior:"smooth"})},children:c.jsxs("div",{className:`
  group

  flex
  flex-col

  w-full
  max-w-[300px]

  h-auto

  cursor-pointer

  overflow-hidden

  rounded-[16px]

  bg-white

  transition-all
  duration-300

  hover:-translate-y-2

  lg:h-[400px]
  lg:rounded-none
  lg:bg-transparent
`,children:[c.jsx("div",{className:`
  flex
  items-center
  justify-center

  w-full

  aspect-square

  overflow-hidden

  rounded-t-[16px]

  bg-[#F4EBDD]

  lg:h-[323px]
`,children:c.jsx("img",{src:u.imageURL,alt:u.productName,className:`
  w-[82%]
  h-[82%]

  object-contain

  transition-transform
  duration-500

  group-hover:scale-110

  lg:w-full
  lg:h-full
`})}),c.jsxs("div",{className:`
  flex
  flex-col
  justify-center
  items-start

  w-full

  px-4
  py-3

  bg-white

  lg:h-[77px]
`,children:[c.jsx("h3",{className:`
            text-[14px]
            sm:text-[16px]
            font-bold
            text-black
          `,children:u.productName}),c.jsx("p",{className:`
            text-[12px]
            sm:text-[14px]
            text-black/50
          `,children:u.categoryName})]})]})},u.productID))}),c.jsx(xn,{to:"/products",className:`
  mt-10

  flex
  h-[56px]
  w-full

  items-center
  justify-center

  rounded-[18px]

  border
  border-[#FFA600]

  text-[16px]
  font-semibold

  text-[#FFA600]

  transition-all
  duration-300

  hover:bg-[#FFA600]
  hover:text-white

  lg:mt-[56px]
  lg:h-[60px]
  lg:rounded-[20px]
  lg:text-[18px]
`,children:"See All Products"})]})]}):c.jsx("div",{className:"py-32 text-center text-xl",children:"Product not found."})}function dg(){return c.jsx(Fm,{children:c.jsxs(Xh,{children:[c.jsx(Lt,{path:"/",element:c.jsx(Wm,{})}),c.jsx(Lt,{path:"/about",element:c.jsx(lg,{})}),c.jsx(Lt,{path:"/products",element:c.jsx(ig,{})}),c.jsx(Lt,{path:"/products/:id",element:c.jsx(cg,{},window.location.pathname)}),c.jsx(Lt,{path:"/contact",element:c.jsx(ug,{})}),c.jsx(Lt,{path:"*",element:c.jsx(Km,{title:"404",description:"Page not found."})})]})})}jo.createRoot(document.getElementById("root")).render(c.jsx(xm,{basename:"/web_bis/",children:c.jsx(dg,{})}));
