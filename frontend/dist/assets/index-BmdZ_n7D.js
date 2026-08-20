(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Xa(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const at={},ur=[],Cn=()=>{},Ru=()=>!1,co=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),uo=n=>n.startsWith("onUpdate:"),bt=Object.assign,$a=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Cd=Object.prototype.hasOwnProperty,Qe=(n,e)=>Cd.call(n,e),Le=Array.isArray,fr=n=>rs(n)==="[object Map]",br=n=>rs(n)==="[object Set]",vl=n=>rs(n)==="[object Date]",ke=n=>typeof n=="function",ht=n=>typeof n=="string",Dn=n=>typeof n=="symbol",et=n=>n!==null&&typeof n=="object",Cu=n=>(et(n)||ke(n))&&ke(n.then)&&ke(n.catch),Lu=Object.prototype.toString,rs=n=>Lu.call(n),Ld=n=>rs(n).slice(8,-1),Pu=n=>rs(n)==="[object Object]",qa=n=>ht(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Hr=Xa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),fo=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Pd=/-\w/g,_n=fo(n=>n.replace(Pd,e=>e.slice(1).toUpperCase())),Dd=/\B([A-Z])/g,Vi=fo(n=>n.replace(Dd,"-$1").toLowerCase()),Du=fo(n=>n.charAt(0).toUpperCase()+n.slice(1)),Do=fo(n=>n?`on${Du(n)}`:""),wn=(n,e)=>!Object.is(n,e),Gs=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Uu=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},ho=n=>{const e=parseFloat(n);return isNaN(e)?n:e},Ud=n=>{const e=ht(n)?Number(n):NaN;return isNaN(e)?n:e};let xl;const po=()=>xl||(xl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ss(n){if(Le(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=ht(i)?Od(i):ss(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(ht(n)||et(n))return n}const Id=/;(?![^(]*\))/g,Nd=/:([^]+)/,Fd=/\/\*[^]*?\*\//g;function Od(n){const e={};return n.replace(Fd,"").split(Id).forEach(t=>{if(t){const i=t.split(Nd);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Zt(n){let e="";if(ht(n))e=n;else if(Le(n))for(let t=0;t<n.length;t++){const i=Zt(n[t]);i&&(e+=i+" ")}else if(et(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Bd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",zd=Xa(Bd);function Iu(n){return!!n||n===""}function kd(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=Er(n[i],e[i]);return t}function Er(n,e){if(n===e)return!0;let t=vl(n),i=vl(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=Dn(n),i=Dn(e),t||i)return n===e;if(t=Le(n),i=Le(e),t||i)return t&&i?kd(n,e):!1;if(t=et(n),i=et(e),t||i){if(!t||!i)return!1;const r=Object.keys(n).length,s=Object.keys(e).length;if(r!==s)return!1;for(const a in n){const o=n.hasOwnProperty(a),l=e.hasOwnProperty(a);if(o&&!l||!o&&l||!Er(n[a],e[a]))return!1}}return String(n)===String(e)}function ja(n,e){return n.findIndex(t=>Er(t,e))}const Nu=n=>!!(n&&n.__v_isRef===!0),re=n=>ht(n)?n:n==null?"":Le(n)||et(n)&&(n.toString===Lu||!ke(n.toString))?Nu(n)?re(n.value):JSON.stringify(n,Fu,2):String(n),Fu=(n,e)=>Nu(e)?Fu(n,e.value):fr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[Uo(i,s)+" =>"]=r,t),{})}:br(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Uo(t))}:Dn(e)?Uo(e):et(e)&&!Le(e)&&!Pu(e)?String(e):e,Uo=(n,e="")=>{var t;return Dn(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Tt;class Hd{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&Tt&&(Tt.active?(this.parent=Tt,this.index=(Tt.scopes||(Tt.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes){const i=this.scopes.slice();for(e=0,t=i.length;e<t;e++)i[e].pause()}for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes){const r=this.scopes.slice();for(e=0,t=r.length;e<t;e++)r[e].resume()}const i=this.effects.slice();for(e=0,t=i.length;e<t;e++)i[e].resume()}}run(e){if(this._active){const t=Tt;try{return Tt=this,e()}finally{Tt=t}}}on(){++this._on===1&&(this.prevScope=Tt,Tt=this)}off(){if(this._on>0&&--this._on===0){if(Tt===this)Tt=this.prevScope;else{let e=Tt;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){const r=this.scopes.slice();for(t=0,i=r.length;t<i;t++)r[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Gd(){return Tt}let ut;const Io=new WeakSet;class Ou{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Tt&&(Tt.active?Tt.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Io.has(this)&&(Io.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||zu(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Sl(this),ku(this);const e=ut,t=vn;ut=this,vn=!0;try{return this.fn()}finally{Hu(this),ut=e,vn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Za(e);this.deps=this.depsTail=void 0,Sl(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Io.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ma(this)&&this.run()}get dirty(){return Ma(this)}}let Bu=0,Gr,Vr;function zu(n,e=!1){if(n.flags|=8,e){n.next=Vr,Vr=n;return}n.next=Gr,Gr=n}function Ya(){Bu++}function Ka(){if(--Bu>0)return;if(Vr){let e=Vr;for(Vr=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Gr;){let e=Gr;for(Gr=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function ku(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Hu(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),Za(i),Vd(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function Ma(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Gu(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Gu(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===jr)||(n.globalVersion=jr,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Ma(n))))return;n.flags|=2;const e=n.dep,t=ut,i=vn;ut=n,vn=!0;try{ku(n);const r=n.fn(n._value);(e.version===0||wn(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{ut=t,vn=i,Hu(n),n.flags&=-3}}function Za(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)Za(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Vd(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let vn=!0;const Vu=[];function Kn(){Vu.push(vn),vn=!1}function Zn(){const n=Vu.pop();vn=n===void 0?!0:n}function Sl(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=ut;ut=void 0;try{e()}finally{ut=t}}}let jr=0;class Wd{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ja{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!ut||!vn||ut===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==ut)t=this.activeLink=new Wd(ut,this),ut.deps?(t.prevDep=ut.depsTail,ut.depsTail.nextDep=t,ut.depsTail=t):ut.deps=ut.depsTail=t,Wu(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=ut.depsTail,t.nextDep=void 0,ut.depsTail.nextDep=t,ut.depsTail=t,ut.deps===t&&(ut.deps=i)}return t}trigger(e){this.version++,jr++,this.notify(e)}notify(e){Ya();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Ka()}}}function Wu(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Wu(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const ba=new WeakMap,Ni=Symbol(""),Ea=Symbol(""),Yr=Symbol("");function Dt(n,e,t){if(vn&&ut){let i=ba.get(n);i||ba.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new Ja),r.map=i,r.key=t),r.track()}}function Wn(n,e,t,i,r,s){const a=ba.get(n);if(!a){jr++;return}const o=l=>{l&&l.trigger()};if(Ya(),e==="clear")a.forEach(o);else{const l=Le(n),u=l&&qa(t);if(l&&t==="length"){const c=Number(i);a.forEach((f,d)=>{(d==="length"||d===Yr||!Dn(d)&&d>=c)&&o(f)})}else switch((t!==void 0||a.has(void 0))&&o(a.get(t)),u&&o(a.get(Yr)),e){case"add":l?u&&o(a.get("length")):(o(a.get(Ni)),fr(n)&&o(a.get(Ea)));break;case"delete":l||(o(a.get(Ni)),fr(n)&&o(a.get(Ea)));break;case"set":fr(n)&&o(a.get(Ni));break}}Ka()}function Wi(n){const e=Je(n);return e===n?e:(Dt(e,"iterate",Yr),cn(n)?e:e.map(xn))}function mo(n){return Dt(n=Je(n),"iterate",Yr),n}function En(n,e){return Jn(n)?_r(Fi(n)?xn(e):e):xn(e)}const Xd={__proto__:null,[Symbol.iterator](){return No(this,Symbol.iterator,n=>En(this,n))},concat(...n){return Wi(this).concat(...n.map(e=>Le(e)?Wi(e):e))},entries(){return No(this,"entries",n=>(n[1]=En(this,n[1]),n))},every(n,e){return In(this,"every",n,e,void 0,arguments)},filter(n,e){return In(this,"filter",n,e,t=>t.map(i=>En(this,i)),arguments)},find(n,e){return In(this,"find",n,e,t=>En(this,t),arguments)},findIndex(n,e){return In(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return In(this,"findLast",n,e,t=>En(this,t),arguments)},findLastIndex(n,e){return In(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return In(this,"forEach",n,e,void 0,arguments)},includes(...n){return Fo(this,"includes",n)},indexOf(...n){return Fo(this,"indexOf",n)},join(n){return Wi(this).join(n)},lastIndexOf(...n){return Fo(this,"lastIndexOf",n)},map(n,e){return In(this,"map",n,e,void 0,arguments)},pop(){return Rr(this,"pop")},push(...n){return Rr(this,"push",n)},reduce(n,...e){return yl(this,"reduce",n,e)},reduceRight(n,...e){return yl(this,"reduceRight",n,e)},shift(){return Rr(this,"shift")},some(n,e){return In(this,"some",n,e,void 0,arguments)},splice(...n){return Rr(this,"splice",n)},toReversed(){return Wi(this).toReversed()},toSorted(n){return Wi(this).toSorted(n)},toSpliced(...n){return Wi(this).toSpliced(...n)},unshift(...n){return Rr(this,"unshift",n)},values(){return No(this,"values",n=>En(this,n))}};function No(n,e,t){const i=mo(n),r=i[e]();return i!==n&&!cn(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=t(s.value)),s}),r}const $d=Array.prototype;function In(n,e,t,i,r,s){const a=mo(n),o=a!==n&&!cn(n),l=a[e];if(l!==$d[e]){const f=l.apply(n,s);return o?xn(f):f}let u=t;a!==n&&(o?u=function(f,d){return t.call(this,En(n,f),d,n)}:t.length>2&&(u=function(f,d){return t.call(this,f,d,n)}));const c=l.call(a,u,i);return o&&r?r(c):c}function yl(n,e,t,i){const r=mo(n),s=r!==n&&!cn(n);let a=t,o=!1;r!==n&&(s?(o=i.length===0,a=function(u,c,f){return o&&(o=!1,u=En(n,u)),t.call(this,u,En(n,c),f,n)}):t.length>3&&(a=function(u,c,f){return t.call(this,u,c,f,n)}));const l=r[e](a,...i);return o?En(n,l):l}function Fo(n,e,t){const i=Je(n);Dt(i,"iterate",Yr);const r=i[e](...t);return(r===-1||r===!1)&&tl(t[0])?(t[0]=Je(t[0]),i[e](...t)):r}function Rr(n,e,t=[]){Kn(),Ya();const i=Je(n)[e].apply(n,t);return Ka(),Zn(),i}const qd=Xa("__proto__,__v_isRef,__isVue"),Xu=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Dn));function jd(n){Dn(n)||(n=String(n));const e=Je(this);return Dt(e,"has",n),e.hasOwnProperty(n)}class $u{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?rh:Ku:s?Yu:ju).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=Le(e);if(!r){let l;if(a&&(l=Xd[t]))return l;if(t==="hasOwnProperty")return jd}const o=Reflect.get(e,t,Ut(e)?e:i);if((Dn(t)?Xu.has(t):qd(t))||(r||Dt(e,"get",t),s))return o;if(Ut(o)){const l=a&&qa(t)?o:o.value;return r&&et(l)?Aa(l):l}return et(o)?r?Aa(o):Kr(o):o}}class qu extends $u{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];const a=Le(e)&&qa(t);if(!this._isShallow){const u=Jn(s);if(!cn(i)&&!Jn(i)&&(s=Je(s),i=Je(i)),!a&&Ut(s)&&!Ut(i))return u||(s.value=i),!0}const o=a?Number(t)<e.length:Qe(e,t),l=Reflect.set(e,t,i,Ut(e)?e:r);return e===Je(r)&&l&&(o?wn(i,s)&&Wn(e,"set",t,i):Wn(e,"add",t,i)),l}deleteProperty(e,t){const i=Qe(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&Wn(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!Dn(t)||!Xu.has(t))&&Dt(e,"has",t),i}ownKeys(e){return Dt(e,"iterate",Le(e)?"length":Ni),Reflect.ownKeys(e)}}class Yd extends $u{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Kd=new qu,Zd=new Yd,Jd=new qu(!0);const Ta=n=>n,_s=n=>Reflect.getPrototypeOf(n);function Qd(n,e,t){return function(...i){const r=this.__v_raw,s=Je(r),a=fr(s),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,u=r[n](...i),c=t?Ta:e?_r:xn;return!e&&Dt(s,"iterate",l?Ea:Ni),bt(Object.create(u),{next(){const{value:f,done:d}=u.next();return d?{value:f,done:d}:{value:o?[c(f[0]),c(f[1])]:c(f),done:d}}})}}function vs(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function eh(n,e){const t={get(r){const s=this.__v_raw,a=Je(s),o=Je(r);n||(wn(r,o)&&Dt(a,"get",r),Dt(a,"get",o));const{has:l}=_s(a),u=e?Ta:n?_r:xn;if(l.call(a,r))return u(s.get(r));if(l.call(a,o))return u(s.get(o));s!==a&&s.get(r)},get size(){const r=this.__v_raw;return!n&&Dt(Je(r),"iterate",Ni),r.size},has(r){const s=this.__v_raw,a=Je(s),o=Je(r);return n||(wn(r,o)&&Dt(a,"has",r),Dt(a,"has",o)),r===o?s.has(r):s.has(r)||s.has(o)},forEach(r,s){const a=this,o=a.__v_raw,l=Je(o),u=e?Ta:n?_r:xn;return!n&&Dt(l,"iterate",Ni),o.forEach((c,f)=>r.call(s,u(c),u(f),a))}};return bt(t,n?{add:vs("add"),set:vs("set"),delete:vs("delete"),clear:vs("clear")}:{add(r){const s=Je(this),a=_s(s),o=Je(r),l=!e&&!cn(r)&&!Jn(r)?o:r;return a.has.call(s,l)||wn(r,l)&&a.has.call(s,r)||wn(o,l)&&a.has.call(s,o)||(s.add(l),Wn(s,"add",l,l)),this},set(r,s){!e&&!cn(s)&&!Jn(s)&&(s=Je(s));const a=Je(this),{has:o,get:l}=_s(a);let u=o.call(a,r);u||(r=Je(r),u=o.call(a,r));const c=l.call(a,r);return a.set(r,s),u?wn(s,c)&&Wn(a,"set",r,s):Wn(a,"add",r,s),this},delete(r){const s=Je(this),{has:a,get:o}=_s(s);let l=a.call(s,r);l||(r=Je(r),l=a.call(s,r)),o&&o.call(s,r);const u=s.delete(r);return l&&Wn(s,"delete",r,void 0),u},clear(){const r=Je(this),s=r.size!==0,a=r.clear();return s&&Wn(r,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Qd(r,n,e)}),t}function Qa(n,e){const t=eh(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(Qe(t,r)&&r in i?t:i,r,s)}const th={get:Qa(!1,!1)},nh={get:Qa(!1,!0)},ih={get:Qa(!0,!1)};const ju=new WeakMap,Yu=new WeakMap,Ku=new WeakMap,rh=new WeakMap;function sh(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Kr(n){return Jn(n)?n:el(n,!1,Kd,th,ju)}function oh(n){return el(n,!1,Jd,nh,Yu)}function Aa(n){return el(n,!0,Zd,ih,Ku)}function el(n,e,t,i,r){if(!et(n)||n.__v_raw&&!(e&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const s=r.get(n);if(s)return s;const a=sh(Ld(n));if(a===0)return n;const o=new Proxy(n,a===2?i:t);return r.set(n,o),o}function Fi(n){return Jn(n)?Fi(n.__v_raw):!!(n&&n.__v_isReactive)}function Jn(n){return!!(n&&n.__v_isReadonly)}function cn(n){return!!(n&&n.__v_isShallow)}function tl(n){return n?!!n.__v_raw:!1}function Je(n){const e=n&&n.__v_raw;return e?Je(e):n}function ah(n){return!Qe(n,"__v_skip")&&Object.isExtensible(n)&&Uu(n,"__v_skip",!0),n}const xn=n=>et(n)?Kr(n):n,_r=n=>et(n)?Aa(n):n;function Ut(n){return n?n.__v_isRef===!0:!1}function Hi(n){return lh(n,!1)}function lh(n,e){return Ut(n)?n:new ch(n,e)}class ch{constructor(e,t){this.dep=new Ja,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:Je(e),this._value=t?e:xn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||cn(e)||Jn(e);e=i?e:Je(e),wn(e,t)&&(this._rawValue=e,this._value=i?e:xn(e),this.dep.trigger())}}function ve(n){return Ut(n)?n.value:n}const uh={get:(n,e,t)=>e==="__v_raw"?n:ve(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Ut(r)&&!Ut(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function Zu(n){return Fi(n)?n:new Proxy(n,uh)}class fh{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Ja(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=jr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&ut!==this)return zu(this,!0),!0}get value(){const e=this.dep.track();return Gu(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function dh(n,e,t=!1){let i,r;return ke(n)?i=n:(i=n.get,r=n.set),new fh(i,r,t)}const xs={},$s=new WeakMap;let Ri;function hh(n,e=!1,t=Ri){if(t){let i=$s.get(t);i||$s.set(t,i=[]),i.push(n)}}function ph(n,e,t=at){const{immediate:i,deep:r,once:s,scheduler:a,augmentJob:o,call:l}=t,u=b=>r?b:cn(b)||r===!1||r===0?Xn(b,1):Xn(b);let c,f,d,m,y=!1,M=!1;if(Ut(n)?(f=()=>n.value,y=cn(n)):Fi(n)?(f=()=>u(n),y=!0):Le(n)?(M=!0,y=n.some(b=>Fi(b)||cn(b)),f=()=>n.map(b=>{if(Ut(b))return b.value;if(Fi(b))return u(b);if(ke(b))return l?l(b,2):b()})):ke(n)?e?f=l?()=>l(n,2):n:f=()=>{if(d){Kn();try{d()}finally{Zn()}}const b=Ri;Ri=c;try{return l?l(n,3,[m]):n(m)}finally{Ri=b}}:f=Cn,e&&r){const b=f,D=r===!0?1/0:r;f=()=>Xn(b(),D)}const p=Gd(),h=()=>{c.stop(),p&&p.active&&$a(p.effects,c)};if(s&&e){const b=e;e=(...D)=>{const P=b(...D);return h(),P}}let E=M?new Array(n.length).fill(xs):xs;const S=b=>{if(!(!(c.flags&1)||!c.dirty&&!b))if(e){const D=c.run();if(b||r||y||(M?D.some((P,L)=>wn(P,E[L])):wn(D,E))){d&&d();const P=Ri;Ri=c;try{const L=[D,E===xs?void 0:M&&E[0]===xs?[]:E,m];E=D,l?l(e,3,L):e(...L)}finally{Ri=P}}}else c.run()};return o&&o(S),c=new Ou(f),c.scheduler=a?()=>a(S,!1):S,m=b=>hh(b,!1,c),d=c.onStop=()=>{const b=$s.get(c);if(b){if(l)l(b,4);else for(const D of b)D();$s.delete(c)}},e?i?S(!0):E=c.run():a?a(S.bind(null,!0),!0):c.run(),h.pause=c.pause.bind(c),h.resume=c.resume.bind(c),h.stop=h,h}function Xn(n,e=1/0,t){if(e<=0||!et(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,Ut(n))Xn(n.value,e,t);else if(Le(n))for(let i=0;i<n.length;i++)Xn(n[i],e,t);else if(br(n)||fr(n))n.forEach(i=>{Xn(i,e,t)});else if(Pu(n)){for(const i in n)Xn(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Xn(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function os(n,e,t,i){try{return i?n(...i):n()}catch(r){go(r,e,t)}}function un(n,e,t,i){if(ke(n)){const r=os(n,e,t,i);return r&&Cu(r)&&r.catch(s=>{go(s,e,t)}),r}if(Le(n)){const r=[];for(let s=0;s<n.length;s++)r.push(un(n[s],e,t,i));return r}}function go(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||at;if(e){let o=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${t}`;for(;o;){const c=o.ec;if(c){for(let f=0;f<c.length;f++)if(c[f](n,l,u)===!1)return}o=o.parent}if(s){Kn(),os(s,null,10,[n,l,u]),Zn();return}}mh(n,t,r,i,a)}function mh(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const Bt=[];let bn=-1;const dr=[];let li=null,ar=0;const Ju=Promise.resolve();let qs=null;function Qu(n){const e=qs||Ju;return n?e.then(this?n.bind(this):n):e}function gh(n){let e=bn+1,t=Bt.length;for(;e<t;){const i=e+t>>>1,r=Bt[i],s=Zr(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function nl(n){if(!(n.flags&1)){const e=Zr(n),t=Bt[Bt.length-1];!t||!(n.flags&2)&&e>=Zr(t)?Bt.push(n):Bt.splice(gh(e),0,n),n.flags|=1,ef()}}function ef(){qs||(qs=Ju.then(nf))}function _h(n){Le(n)?dr.push(...n):li&&n.id===-1?li.splice(ar+1,0,n):n.flags&1||(dr.push(n),n.flags|=1),ef()}function Ml(n,e,t=bn+1){for(;t<Bt.length;t++){const i=Bt[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Bt.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function tf(n){if(dr.length){const e=[...new Set(dr)].sort((t,i)=>Zr(t)-Zr(i));if(dr.length=0,li){li.push(...e);return}for(li=e,ar=0;ar<li.length;ar++){const t=li[ar];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}li=null,ar=0}}const Zr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function nf(n){try{for(bn=0;bn<Bt.length;bn++){const e=Bt[bn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),os(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;bn<Bt.length;bn++){const e=Bt[bn];e&&(e.flags&=-2)}bn=-1,Bt.length=0,tf(),qs=null,(Bt.length||dr.length)&&nf()}}let ln=null,rf=null;function js(n){const e=ln;return ln=n,rf=n&&n.type.__scopeId||null,e}function Ys(n,e=ln,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&Js(-1);const s=js(e),a=Oi.length;let o;try{o=n(...r)}finally{for(let l=Oi.length;l>a;l--)If();js(s),i._d&&Js(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Cr(n,e){if(ln===null)return n;const t=Mo(ln),i=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[s,a,o,l=at]=e[r];s&&(ke(s)&&(s={mounted:s,updated:s}),s.deep&&Xn(a),i.push({dir:s,instance:t,value:a,oldValue:void 0,arg:o,modifiers:l}))}return n}function Si(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[i];l&&(Kn(),un(l,t,8,[n.el,o,n,e]),Zn())}}function sf(n,e){if(kt){let t=kt.provides;const i=kt.parent&&kt.parent.provides;i===t&&(t=kt.provides=Object.create(i)),t[n]=e}}function Wr(n,e,t=!1){const i=Of();if(i||hr){let r=hr?hr._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&ke(e)?e.call(i&&i.proxy):e}}const vh=Symbol.for("v-scx"),xh=()=>Wr(vh);function Oo(n,e,t){return of(n,e,t)}function of(n,e,t=at){const{immediate:i,deep:r,flush:s,once:a}=t,o=bt({},t),l=e&&i||!e&&s!=="post";let u;if(es){if(s==="sync"){const m=xh();u=m.__watcherHandles||(m.__watcherHandles=[])}else if(!l){const m=()=>{};return m.stop=Cn,m.resume=Cn,m.pause=Cn,m}}const c=kt;o.call=(m,y,M)=>un(m,c,y,M);let f=!1;s==="post"?o.scheduler=m=>{Gt(m,c&&c.suspense)}:s!=="sync"&&(f=!0,o.scheduler=(m,y)=>{y?m():nl(m)}),o.augmentJob=m=>{e&&(m.flags|=4),f&&(m.flags|=2,c&&(m.id=c.uid,m.i=c))};const d=ph(n,e,o);return es&&(u?u.push(d):l&&d()),d}function Sh(n,e,t){const i=this.proxy,r=ht(n)?n.includes(".")?af(i,n):()=>i[n]:n.bind(i,i);let s;ke(e)?s=e:(s=e.handler,t=e);const a=cs(this),o=of(r,s.bind(i),t);return a(),o}function af(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const yh=Symbol("_vte"),lf=n=>n.__isTeleport,sn=Symbol("_leaveCb"),Lr=Symbol("_enterCb");function Mh(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return as(()=>{n.isMounted=!0}),ls(()=>{n.isUnmounting=!0}),n}const nn=[Function,Array],cf={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:nn,onEnter:nn,onAfterEnter:nn,onEnterCancelled:nn,onBeforeLeave:nn,onLeave:nn,onAfterLeave:nn,onLeaveCancelled:nn,onBeforeAppear:nn,onAppear:nn,onAfterAppear:nn,onAppearCancelled:nn},uf=n=>{const e=n.subTree;return e.component?uf(e.component):e},bh={name:"BaseTransition",props:cf,setup(n,{slots:e}){const t=Of(),i=Mh();return()=>{const r=e.default&&hf(e.default(),!0),s=r&&r.length?ff(r):t.subTree?yo():void 0;if(!s)return;const a=Je(n),{mode:o}=a;if(i.isLeaving)return Bo(s);const l=bl(s);if(!l)return Bo(s);let u=wa(l,a,i,t,f=>u=f);l.type!==zt&&Jr(l,u);let c=t.subTree&&bl(t.subTree);if(c&&c.type!==zt&&!Pi(c,l)&&uf(t).type!==zt){let f=wa(c,a,i,t);if(Jr(c,f),o==="out-in"&&l.type!==zt)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,t.job.flags&8||t.update(),delete f.afterLeave,c=void 0},Bo(s);o==="in-out"&&l.type!==zt?f.delayLeave=(d,m,y)=>{const M=df(i,c);M[String(c.key)]=c,d[sn]=()=>{m(),d[sn]=void 0,delete u.delayedLeave,c=void 0},u.delayedLeave=()=>{y(),delete u.delayedLeave,c=void 0}}:c=void 0}else c&&(c=void 0);return s}}};function ff(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==zt){e=t;break}}return e}const Eh=bh;function df(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function wa(n,e,t,i,r){const{appear:s,mode:a,persisted:o=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:c,onEnterCancelled:f,onBeforeLeave:d,onLeave:m,onAfterLeave:y,onLeaveCancelled:M,onBeforeAppear:p,onAppear:h,onAfterAppear:E,onAppearCancelled:S}=e,b=String(n.key),D=df(t,n),P=(K,v)=>{K&&un(K,i,9,v)},L=(K,v)=>{const A=v[1];P(K,v),Le(K)?K.every(F=>F.length<=1)&&A():K.length<=1&&A()},q={mode:a,persisted:o,beforeEnter(K){let v=l;if(!t.isMounted)if(s)v=p||l;else return;K[sn]&&K[sn](!0);const A=D[b];A&&Pi(n,A)&&A.el[sn]&&A.el[sn](),P(v,[K])},enter(K){if(D[b]===n)return;let v=u,A=c,F=f;if(!t.isMounted)if(s)v=h||u,A=E||c,F=S||f;else return;let ne=!1;K[Lr]=Z=>{ne||(ne=!0,Z?P(F,[K]):P(A,[K]),q.delayedLeave&&q.delayedLeave(),K[Lr]=void 0)};const I=K[Lr].bind(null,!1);v?L(v,[K,I]):I()},leave(K,v){const A=String(n.key);if(K[Lr]&&K[Lr](!0),t.isUnmounting)return v();P(d,[K]);let F=!1;K[sn]=I=>{F||(F=!0,v(),I?P(M,[K]):P(y,[K]),K[sn]=void 0,D[A]===n&&delete D[A])};const ne=K[sn].bind(null,!1);D[A]=n,m?L(m,[K,ne]):ne()},clone(K){const v=wa(K,e,t,i,r);return r&&r(v),v}};return q}function Bo(n){if(_o(n))return n=pi(n),n.children=null,n}function bl(n){if(!_o(n))return lf(n.type)&&n.children?ff(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&ke(t.default))return t.default()}}function Jr(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Jr(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function hf(n,e=!1,t){let i=[],r=0;for(let s=0;s<n.length;s++){let a=n[s];const o=t==null?a.key:String(t)+String(a.key!=null?a.key:s);a.type===Ze?(a.patchFlag&128&&r++,i=i.concat(hf(a.children,e,o))):(e||a.type!==zt)&&i.push(o!=null?pi(a,{key:o}):a)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function pf(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function El(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const Ks=new WeakMap;function Xr(n,e,t,i,r=!1){if(Le(n)){n.forEach((M,p)=>Xr(M,e&&(Le(e)?e[p]:e),t,i,r));return}if($r(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Xr(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?Mo(i.component):i.el,a=r?null:s,{i:o,r:l}=n,u=e&&e.r,c=o.refs===at?o.refs={}:o.refs,f=o.setupState,d=Je(f),m=f===at?Ru:M=>El(c,M)?!1:Qe(d,M),y=(M,p)=>!(p&&El(c,p));if(u!=null&&u!==l){if(Tl(e),ht(u))c[u]=null,m(u)&&(f[u]=null);else if(Ut(u)){const M=e;y(u,M.k)&&(u.value=null),M.k&&(c[M.k]=null)}}if(ke(l))os(l,o,12,[a,c]);else{const M=ht(l),p=Ut(l);if(M||p){const h=()=>{if(n.f){const E=M?m(l)?f[l]:c[l]:y()||!n.k?l.value:c[n.k];if(r)Le(E)&&$a(E,s);else if(Le(E))E.includes(s)||E.push(s);else if(M)c[l]=[s],m(l)&&(f[l]=c[l]);else{const S=[s];y(l,n.k)&&(l.value=S),n.k&&(c[n.k]=S)}}else M?(c[l]=a,m(l)&&(f[l]=a)):p&&(y(l,n.k)&&(l.value=a),n.k&&(c[n.k]=a))};if(a){const E=()=>{h(),Ks.delete(n)};E.id=-1,Ks.set(n,E),Gt(E,t)}else Tl(n),h()}}}function Tl(n){const e=Ks.get(n);e&&(e.flags|=8,Ks.delete(n))}po().requestIdleCallback;po().cancelIdleCallback;const $r=n=>!!n.type.__asyncLoader,_o=n=>n.type.__isKeepAlive;function Th(n,e){mf(n,"a",e)}function Ah(n,e){mf(n,"da",e)}function mf(n,e,t=kt){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(vo(e,i,t),t){let r=t.parent;for(;r&&r.parent;)_o(r.parent.vnode)&&wh(i,e,t,r),r=r.parent}}function wh(n,e,t,i){const r=vo(e,n,i,!0);gf(()=>{$a(i[e],r)},t)}function vo(n,e,t=kt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...a)=>{Kn();const o=cs(t),l=un(e,t,n,a);return o(),Zn(),l});return i?r.unshift(s):r.push(s),s}}const ei=n=>(e,t=kt)=>{(!es||n==="sp")&&vo(n,(...i)=>e(...i),t)},Rh=ei("bm"),as=ei("m"),Ch=ei("bu"),Lh=ei("u"),ls=ei("bum"),gf=ei("um"),Ph=ei("sp"),Dh=ei("rtg"),Uh=ei("rtc");function Ih(n,e=kt){vo("ec",n,e)}const Nh=Symbol.for("v-ndc");function mt(n,e,t,i){let r;const s=t,a=Le(n);if(a||ht(n)){const o=a&&Fi(n);let l=!1,u=!1;o&&(l=!cn(n),u=Jn(n),n=mo(n)),r=new Array(n.length);for(let c=0,f=n.length;c<f;c++)r[c]=e(l?u?_r(xn(n[c])):xn(n[c]):n[c],c,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let o=0;o<n;o++)r[o]=e(o+1,o,void 0,s)}else if(et(n))if(n[Symbol.iterator])r=Array.from(n,(o,l)=>e(o,l,void 0,s));else{const o=Object.keys(n);r=new Array(o.length);for(let l=0,u=o.length;l<u;l++){const c=o[l];r[l]=e(n[c],c,l,s)}}else r=[];return r}const Ra=n=>n?Bf(n)?Mo(n):Ra(n.parent):null,qr=bt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Ra(n.parent),$root:n=>Ra(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>vf(n),$forceUpdate:n=>n.f||(n.f=()=>{nl(n.update)}),$nextTick:n=>n.n||(n.n=Qu.bind(n.proxy)),$watch:n=>Sh.bind(n)}),zo=(n,e)=>n!==at&&!n.__isScriptSetup&&Qe(n,e),Fh={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:a,type:o,appContext:l}=n;if(e[0]!=="$"){const d=a[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(zo(i,e))return a[e]=1,i[e];if(r!==at&&Qe(r,e))return a[e]=2,r[e];if(Qe(s,e))return a[e]=3,s[e];if(t!==at&&Qe(t,e))return a[e]=4,t[e];Ca&&(a[e]=0)}}const u=qr[e];let c,f;if(u)return e==="$attrs"&&Dt(n.attrs,"get",""),u(n);if((c=o.__cssModules)&&(c=c[e]))return c;if(t!==at&&Qe(t,e))return a[e]=4,t[e];if(f=l.config.globalProperties,Qe(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return zo(r,e)?(r[e]=t,!0):i!==at&&Qe(i,e)?(i[e]=t,!0):Qe(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,props:s,type:a}},o){let l;return!!(t[o]||n!==at&&o[0]!=="$"&&Qe(n,o)||zo(e,o)||Qe(s,o)||Qe(i,o)||Qe(qr,o)||Qe(r.config.globalProperties,o)||(l=a.__cssModules)&&l[o])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Qe(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Al(n){return Le(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Ca=!0;function Oh(n){const e=vf(n),t=n.proxy,i=n.ctx;Ca=!1,e.beforeCreate&&wl(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:u,created:c,beforeMount:f,mounted:d,beforeUpdate:m,updated:y,activated:M,deactivated:p,beforeDestroy:h,beforeUnmount:E,destroyed:S,unmounted:b,render:D,renderTracked:P,renderTriggered:L,errorCaptured:q,serverPrefetch:K,expose:v,inheritAttrs:A,components:F,directives:ne,filters:I}=e;if(u&&Bh(u,i,null),a)for(const ee in a){const j=a[ee];ke(j)&&(i[ee]=j.bind(t))}if(r){const ee=r.call(t,t);et(ee)&&(n.data=Kr(ee))}if(Ca=!0,s)for(const ee in s){const j=s[ee],se=ke(j)?j.bind(t,t):ke(j.get)?j.get.bind(t,t):Cn,le=!ke(j)&&ke(j.set)?j.set.bind(t):Cn,ue=Xt({get:se,set:le});Object.defineProperty(i,ee,{enumerable:!0,configurable:!0,get:()=>ue.value,set:de=>ue.value=de})}if(o)for(const ee in o)_f(o[ee],i,t,ee);if(l){const ee=ke(l)?l.call(t):l;Reflect.ownKeys(ee).forEach(j=>{sf(j,ee[j])})}c&&wl(c,n,"c");function k(ee,j){Le(j)?j.forEach(se=>ee(se.bind(t))):j&&ee(j.bind(t))}if(k(Rh,f),k(as,d),k(Ch,m),k(Lh,y),k(Th,M),k(Ah,p),k(Ih,q),k(Uh,P),k(Dh,L),k(ls,E),k(gf,b),k(Ph,K),Le(v))if(v.length){const ee=n.exposed||(n.exposed={});v.forEach(j=>{Object.defineProperty(ee,j,{get:()=>t[j],set:se=>t[j]=se,enumerable:!0})})}else n.exposed||(n.exposed={});D&&n.render===Cn&&(n.render=D),A!=null&&(n.inheritAttrs=A),F&&(n.components=F),ne&&(n.directives=ne),K&&pf(n)}function Bh(n,e,t=Cn){Le(n)&&(n=La(n));for(const i in n){const r=n[i];let s;et(r)?"default"in r?s=Wr(r.from||i,r.default,!0):s=Wr(r.from||i):s=Wr(r),Ut(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):e[i]=s}}function wl(n,e,t){un(Le(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function _f(n,e,t,i){let r=i.includes(".")?af(t,i):()=>t[i];if(ht(n)){const s=e[n];ke(s)&&Oo(r,s)}else if(ke(n))Oo(r,n.bind(t));else if(et(n))if(Le(n))n.forEach(s=>_f(s,e,t,i));else{const s=ke(n.handler)?n.handler.bind(t):e[n.handler];ke(s)&&Oo(r,s,n)}}function vf(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=n.appContext,o=s.get(e);let l;return o?l=o:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(u=>Zs(l,u,a,!0)),Zs(l,e,a)),et(e)&&s.set(e,l),l}function Zs(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&Zs(n,s,t,!0),r&&r.forEach(a=>Zs(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=zh[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const zh={data:Rl,props:Cl,emits:Cl,methods:Br,computed:Br,beforeCreate:Nt,created:Nt,beforeMount:Nt,mounted:Nt,beforeUpdate:Nt,updated:Nt,beforeDestroy:Nt,beforeUnmount:Nt,destroyed:Nt,unmounted:Nt,activated:Nt,deactivated:Nt,errorCaptured:Nt,serverPrefetch:Nt,components:Br,directives:Br,watch:Hh,provide:Rl,inject:kh};function Rl(n,e){return e?n?function(){return bt(ke(n)?n.call(this,this):n,ke(e)?e.call(this,this):e)}:e:n}function kh(n,e){return Br(La(n),La(e))}function La(n){if(Le(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Nt(n,e){return n?[...new Set([].concat(n,e))]:e}function Br(n,e){return n?bt(Object.create(null),n,e):e}function Cl(n,e){return n?Le(n)&&Le(e)?[...new Set([...n,...e])]:bt(Object.create(null),Al(n),Al(e??{})):e}function Hh(n,e){if(!n)return e;if(!e)return n;const t=bt(Object.create(null),n);for(const i in e)t[i]=Nt(n[i],e[i]);return t}function xf(){return{app:null,config:{isNativeTag:Ru,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Gh=0;function Vh(n,e){return function(i,r=null){ke(i)||(i=bt({},i)),r!=null&&!et(r)&&(r=null);const s=xf(),a=new WeakSet,o=[];let l=!1;const u=s.app={_uid:Gh++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Mp,get config(){return s.config},set config(c){},use(c,...f){return a.has(c)||(c&&ke(c.install)?(a.add(c),c.install(u,...f)):ke(c)&&(a.add(c),c(u,...f))),u},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),u},component(c,f){return f?(s.components[c]=f,u):s.components[c]},directive(c,f){return f?(s.directives[c]=f,u):s.directives[c]},mount(c,f,d){if(!l){const m=u._ceVNode||nt(i,r);return m.appContext=s,d===!0?d="svg":d===!1&&(d=void 0),n(m,c,d),l=!0,u._container=c,c.__vue_app__=u,Mo(m.component)}},onUnmount(c){o.push(c)},unmount(){l&&(un(o,u._instance,16),n(null,u._container),delete u._container.__vue_app__)},provide(c,f){return s.provides[c]=f,u},runWithContext(c){const f=hr;hr=u;try{return c()}finally{hr=f}}};return u}}let hr=null;const Wh=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${_n(e)}Modifiers`]||n[`${Vi(e)}Modifiers`];function Xh(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||at;let r=t;const s=e.startsWith("update:"),a=s&&Wh(i,e.slice(7));a&&(a.trim&&(r=t.map(c=>ht(c)?c.trim():c)),a.number&&(r=t.map(ho)));let o,l=i[o=Do(e)]||i[o=Do(_n(e))];!l&&s&&(l=i[o=Do(Vi(e))]),l&&un(l,n,6,r);const u=i[o+"Once"];if(u){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,un(u,n,6,r)}}const $h=new WeakMap;function Sf(n,e,t=!1){const i=t?$h:e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let a={},o=!1;if(!ke(n)){const l=u=>{const c=Sf(u,e,!0);c&&(o=!0,bt(a,c))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!o?(et(n)&&i.set(n,null),null):(Le(s)?s.forEach(l=>a[l]=null):bt(a,s),et(n)&&i.set(n,a),a)}function xo(n,e){return!n||!co(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),Qe(n,e[0].toLowerCase()+e.slice(1))||Qe(n,Vi(e))||Qe(n,e))}function Ll(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:a,attrs:o,emit:l,render:u,renderCache:c,props:f,data:d,setupState:m,ctx:y,inheritAttrs:M}=n,p=js(n);let h,E;try{if(t.shapeFlag&4){const b=r||i,D=b;h=Tn(u.call(D,b,c,f,m,d,y)),E=o}else{const b=e;h=Tn(b.length>1?b(f,{attrs:o,slots:a,emit:l}):b(f,null)),E=e.props?o:qh(o)}}catch(b){Oi.length=0,go(b,n,1),h=nt(zt)}let S=h;if(E&&M!==!1){const b=Object.keys(E),{shapeFlag:D}=S;b.length&&D&7&&(s&&b.some(uo)&&(E=jh(E,s)),S=pi(S,E,!1,!0))}return t.dirs&&(S=pi(S,null,!1,!0),S.dirs=S.dirs?S.dirs.concat(t.dirs):t.dirs),t.transition&&Jr(S,t.transition),h=S,js(p),h}const qh=n=>{let e;for(const t in n)(t==="class"||t==="style"||co(t))&&((e||(e={}))[t]=n[t]);return e},jh=(n,e)=>{const t={};for(const i in n)(!uo(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Yh(n,e,t){const{props:i,children:r,component:s}=n,{props:a,children:o,patchFlag:l}=e,u=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Pl(i,a,u):!!a;if(l&8){const c=e.dynamicProps;for(let f=0;f<c.length;f++){const d=c[f];if(yf(a,i,d)&&!xo(u,d))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?Pl(i,a,u):!0:!!a;return!1}function Pl(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(yf(e,n,s)&&!xo(t,s))return!0}return!1}function yf(n,e,t){const i=n[t],r=e[t];return t==="style"&&et(i)&&et(r)?!Er(i,r):i!==r}function Kh({vnode:n,parent:e,suspense:t},i){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.suspense.vnode.el=r.el=i,n=r),r===n)(n=e.vnode).el=i,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=i)}const Mf={},bf=()=>Object.create(Mf),Ef=n=>Object.getPrototypeOf(n)===Mf;function Zh(n,e,t,i=!1){const r={},s=bf();n.propsDefaults=Object.create(null),Tf(n,e,r,s);for(const a in n.propsOptions[0])a in r||(r[a]=void 0);t?n.props=i?r:oh(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function Jh(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=n,o=Je(r),[l]=n.propsOptions;let u=!1;if((i||a>0)&&!(a&16)){if(a&8){const c=n.vnode.dynamicProps;for(let f=0;f<c.length;f++){let d=c[f];if(xo(n.emitsOptions,d))continue;const m=e[d];if(l)if(Qe(s,d))m!==s[d]&&(s[d]=m,u=!0);else{const y=_n(d);r[y]=Pa(l,o,y,m,n,!1)}else m!==s[d]&&(s[d]=m,u=!0)}}}else{Tf(n,e,r,s)&&(u=!0);let c;for(const f in o)(!e||!Qe(e,f)&&((c=Vi(f))===f||!Qe(e,c)))&&(l?t&&(t[f]!==void 0||t[c]!==void 0)&&(r[f]=Pa(l,o,f,void 0,n,!0)):delete r[f]);if(s!==o)for(const f in s)(!e||!Qe(e,f))&&(delete s[f],u=!0)}u&&Wn(n.attrs,"set","")}function Tf(n,e,t,i){const[r,s]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(Hr(l))continue;const u=e[l];let c;r&&Qe(r,c=_n(l))?!s||!s.includes(c)?t[c]=u:(o||(o={}))[c]=u:xo(n.emitsOptions,l)||(!(l in i)||u!==i[l])&&(i[l]=u,a=!0)}if(s){const l=Je(t),u=o||at;for(let c=0;c<s.length;c++){const f=s[c];t[f]=Pa(r,l,f,u[f],n,!Qe(u,f))}}return a}function Pa(n,e,t,i,r,s){const a=n[t];if(a!=null){const o=Qe(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&ke(l)){const{propsDefaults:u}=r;if(t in u)i=u[t];else{const c=cs(r);i=u[t]=l.call(null,e),c()}}else i=l;r.ce&&r.ce._setProp(t,i)}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===Vi(t))&&(i=!0))}return i}const Qh=new WeakMap;function Af(n,e,t=!1){const i=t?Qh:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,a={},o=[];let l=!1;if(!ke(n)){const c=f=>{l=!0;const[d,m]=Af(f,e,!0);bt(a,d),m&&o.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}if(!s&&!l)return et(n)&&i.set(n,ur),ur;if(Le(s))for(let c=0;c<s.length;c++){const f=_n(s[c]);Dl(f)&&(a[f]=at)}else if(s)for(const c in s){const f=_n(c);if(Dl(f)){const d=s[c],m=a[f]=Le(d)||ke(d)?{type:d}:bt({},d),y=m.type;let M=!1,p=!0;if(Le(y))for(let h=0;h<y.length;++h){const E=y[h],S=ke(E)&&E.name;if(S==="Boolean"){M=!0;break}else S==="String"&&(p=!1)}else M=ke(y)&&y.name==="Boolean";m[0]=M,m[1]=p,(M||Qe(m,"default"))&&o.push(f)}}const u=[a,o];return et(n)&&i.set(n,u),u}function Dl(n){return n[0]!=="$"&&!Hr(n)}const il=n=>n==="_"||n==="_ctx"||n==="$stable",rl=n=>Le(n)?n.map(Tn):[Tn(n)],ep=(n,e,t)=>{if(e._n)return e;const i=Ys((...r)=>rl(e(...r)),t);return i._c=!1,i},wf=(n,e,t)=>{const i=n._ctx;for(const r in n){if(il(r))continue;const s=n[r];if(ke(s))e[r]=ep(r,s,i);else if(s!=null){const a=rl(s);e[r]=()=>a}}},Rf=(n,e)=>{const t=rl(e);n.slots.default=()=>t},Cf=(n,e,t)=>{for(const i in e)(t||!il(i))&&(n[i]=e[i])},tp=(n,e,t)=>{const i=n.slots=bf();if(n.vnode.shapeFlag&32){const r=e._;r?(Cf(i,e,t),t&&Uu(i,"_",r,!0)):wf(e,i)}else e&&Rf(n,e)},np=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,a=at;if(i.shapeFlag&32){const o=e._;o?t&&o===1?s=!1:Cf(r,e,t):(s=!e.$stable,wf(e,r)),a=e}else e&&(Rf(n,e),a={default:1});if(s)for(const o in r)!il(o)&&a[o]==null&&delete r[o]},Gt=ap;function ip(n){return rp(n)}function rp(n,e){const t=po();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:u,setElementText:c,parentNode:f,nextSibling:d,setScopeId:m=Cn,insertStaticContent:y}=n,M=(_,U,N,X=null,z=null,Q=null,te=void 0,x=null,g=!!U.dynamicChildren)=>{if(_===U)return;_&&!Pi(_,U)&&(X=we(_),de(_,z,Q,!0),_=null),U.patchFlag===-2&&(g=!1,U.dynamicChildren=null);const{type:w,ref:W,shapeFlag:O}=U;switch(w){case So:p(_,U,N,X);break;case zt:h(_,U,N,X);break;case Vs:_==null&&E(U,N,X,te);break;case Ze:F(_,U,N,X,z,Q,te,x,g);break;default:O&1?D(_,U,N,X,z,Q,te,x,g):O&6?ne(_,U,N,X,z,Q,te,x,g):(O&64||O&128)&&w.process(_,U,N,X,z,Q,te,x,g,qe)}W!=null&&z?Xr(W,_&&_.ref,Q,U||_,!U):W==null&&_&&_.ref!=null&&Xr(_.ref,null,Q,_,!0)},p=(_,U,N,X)=>{if(_==null)i(U.el=o(U.children),N,X);else{const z=U.el=_.el;U.children!==_.children&&u(z,U.children)}},h=(_,U,N,X)=>{_==null?i(U.el=l(U.children||""),N,X):U.el=_.el},E=(_,U,N,X)=>{[_.el,_.anchor]=y(_.children,U,N,X,_.el,_.anchor)},S=({el:_,anchor:U},N,X)=>{let z;for(;_&&_!==U;)z=d(_),i(_,N,X),_=z;i(U,N,X)},b=({el:_,anchor:U})=>{let N;for(;_&&_!==U;)N=d(_),r(_),_=N;r(U)},D=(_,U,N,X,z,Q,te,x,g)=>{if(U.type==="svg"?te="svg":U.type==="math"&&(te="mathml"),_==null)P(U,N,X,z,Q,te,x,g);else{const w=_.el&&_.el._isVueCE?_.el:null;try{w&&w._beginPatch(),K(_,U,z,Q,te,x,g)}finally{w&&w._endPatch()}}},P=(_,U,N,X,z,Q,te,x)=>{let g,w;const{props:W,shapeFlag:O,transition:G,dirs:ae}=_;if(g=_.el=a(_.type,Q,W&&W.is,W),O&8?c(g,_.children):O&16&&q(_.children,g,null,X,z,ko(_,Q),te,x),ae&&Si(_,null,X,"created"),L(g,_,_.scopeId,te,X),W){for(const fe in W)fe!=="value"&&!Hr(fe)&&s(g,fe,null,W[fe],Q,X);"value"in W&&s(g,"value",null,W.value,Q),(w=W.onVnodeBeforeMount)&&Mn(w,X,_)}ae&&Si(_,null,X,"beforeMount");const oe=sp(z,G);oe&&G.beforeEnter(g),i(g,U,N),((w=W&&W.onVnodeMounted)||oe||ae)&&Gt(()=>{try{w&&Mn(w,X,_),oe&&G.enter(g),ae&&Si(_,null,X,"mounted")}finally{}},z)},L=(_,U,N,X,z)=>{if(N&&m(_,N),X)for(let Q=0;Q<X.length;Q++)m(_,X[Q]);if(z){let Q=z.subTree;if(U===Q||Uf(Q.type)&&(Q.ssContent===U||Q.ssFallback===U)){const te=z.vnode;L(_,te,te.scopeId,te.slotScopeIds,z.parent)}}},q=(_,U,N,X,z,Q,te,x,g=0)=>{for(let w=g;w<_.length;w++){const W=_[w]=x?Vn(_[w]):Tn(_[w]);M(null,W,U,N,X,z,Q,te,x)}},K=(_,U,N,X,z,Q,te)=>{const x=U.el=_.el;let{patchFlag:g,dynamicChildren:w,dirs:W}=U;g|=_.patchFlag&16;const O=_.props||at,G=U.props||at;let ae;if(N&&yi(N,!1),(ae=G.onVnodeBeforeUpdate)&&Mn(ae,N,U,_),W&&Si(U,_,N,"beforeUpdate"),N&&yi(N,!0),w&&(!_.dynamicChildren||_.dynamicChildren.length!==w.length)&&(g=0,te=!1,w=null),(O.innerHTML&&G.innerHTML==null||O.textContent&&G.textContent==null)&&c(x,""),w?v(_.dynamicChildren,w,x,N,X,ko(U,z),Q):te||j(_,U,x,null,N,X,ko(U,z),Q,!1),g>0){if(g&16)A(x,O,G,N,z);else if(g&2&&O.class!==G.class&&s(x,"class",null,G.class,z),g&4&&s(x,"style",O.style,G.style,z),g&8){const oe=U.dynamicProps;for(let fe=0;fe<oe.length;fe++){const ge=oe[fe],Ee=O[ge],ie=G[ge];(ie!==Ee||ge==="value")&&s(x,ge,Ee,ie,z,N)}}g&1&&_.children!==U.children&&c(x,U.children)}else!te&&w==null&&A(x,O,G,N,z);((ae=G.onVnodeUpdated)||W)&&Gt(()=>{ae&&Mn(ae,N,U,_),W&&Si(U,_,N,"updated")},X)},v=(_,U,N,X,z,Q,te)=>{for(let x=0;x<U.length;x++){const g=_[x],w=U[x],W=g.el&&(g.type===Ze||!Pi(g,w)||g.shapeFlag&198)?f(g.el):N;M(g,w,W,null,X,z,Q,te,!0)}},A=(_,U,N,X,z)=>{if(U!==N){if(U!==at)for(const Q in U)!Hr(Q)&&!(Q in N)&&s(_,Q,U[Q],null,z,X);for(const Q in N){if(Hr(Q))continue;const te=N[Q],x=U[Q];te!==x&&Q!=="value"&&s(_,Q,x,te,z,X)}"value"in N&&s(_,"value",U.value,N.value,z)}},F=(_,U,N,X,z,Q,te,x,g)=>{const w=U.el=_?_.el:o(""),W=U.anchor=_?_.anchor:o("");let{patchFlag:O,dynamicChildren:G,slotScopeIds:ae}=U;ae&&(x=x?x.concat(ae):ae),_==null?(i(w,N,X),i(W,N,X),q(U.children||[],N,W,z,Q,te,x,g)):O>0&&O&64&&G&&_.dynamicChildren&&_.dynamicChildren.length===G.length?(v(_.dynamicChildren,G,N,z,Q,te,x),(U.key!=null||z&&U===z.subTree)&&Lf(_,U,!0)):j(_,U,N,W,z,Q,te,x,g)},ne=(_,U,N,X,z,Q,te,x,g)=>{U.slotScopeIds=x,_==null?U.shapeFlag&512?z.ctx.activate(U,N,X,te,g):I(U,N,X,z,Q,te,g):Z(_,U,g)},I=(_,U,N,X,z,Q,te)=>{const x=_.component=mp(_,X,z);if(_o(_)&&(x.ctx.renderer=qe),gp(x,!1,te),x.asyncDep){if(z&&z.registerDep(x,k,te),!_.el){const g=x.subTree=nt(zt);h(null,g,U,N),_.placeholder=g.el}}else k(x,_,U,N,z,Q,te)},Z=(_,U,N)=>{const X=U.component=_.component;if(Yh(_,U,N))if(X.asyncDep&&!X.asyncResolved){ee(X,U,N);return}else X.next=U,X.update();else U.el=_.el,X.vnode=U},k=(_,U,N,X,z,Q,te)=>{const x=()=>{if(_.isMounted){let{next:O,bu:G,u:ae,parent:oe,vnode:fe}=_;{const Ie=Pf(_);if(Ie){O&&(O.el=fe.el,ee(_,O,te)),Ie.asyncDep.then(()=>{Gt(()=>{_.isUnmounted||w()},z)});return}}let ge=O,Ee;yi(_,!1),O?(O.el=fe.el,ee(_,O,te)):O=fe,G&&Gs(G),(Ee=O.props&&O.props.onVnodeBeforeUpdate)&&Mn(Ee,oe,O,fe),yi(_,!0);const ie=Ll(_),Ve=_.subTree;_.subTree=ie,M(Ve,ie,f(Ve.el),we(Ve),_,z,Q),O.el=ie.el,ge===null&&Kh(_,ie.el),ae&&Gt(ae,z),(Ee=O.props&&O.props.onVnodeUpdated)&&Gt(()=>Mn(Ee,oe,O,fe),z)}else{let O;const{el:G,props:ae}=U,{bm:oe,m:fe,parent:ge,root:Ee,type:ie}=_,Ve=$r(U);yi(_,!1),oe&&Gs(oe),!Ve&&(O=ae&&ae.onVnodeBeforeMount)&&Mn(O,ge,U),yi(_,!0);{Ee.ce&&Ee.ce._hasShadowRoot()&&Ee.ce._injectChildStyle(ie,_.parent?_.parent.type:void 0);const Ie=_.subTree=Ll(_);M(null,Ie,N,X,_,z,Q),U.el=Ie.el}if(fe&&Gt(fe,z),!Ve&&(O=ae&&ae.onVnodeMounted)){const Ie=U;Gt(()=>Mn(O,ge,Ie),z)}(U.shapeFlag&256||ge&&$r(ge.vnode)&&ge.vnode.shapeFlag&256)&&_.a&&Gt(_.a,z),_.isMounted=!0,U=N=X=null}};_.scope.on();const g=_.effect=new Ou(x);_.scope.off();const w=_.update=g.run.bind(g),W=_.job=g.runIfDirty.bind(g);W.i=_,W.id=_.uid,g.scheduler=()=>nl(W),yi(_,!0),w()},ee=(_,U,N)=>{U.component=_;const X=_.vnode.props;_.vnode=U,_.next=null,Jh(_,U.props,X,N),np(_,U.children,N),Kn(),Ml(_),Zn()},j=(_,U,N,X,z,Q,te,x,g=!1)=>{const w=_&&_.children,W=_?_.shapeFlag:0,O=U.children,{patchFlag:G,shapeFlag:ae}=U;if(G>0){if(G&128){le(w,O,N,X,z,Q,te,x,g);return}else if(G&256){se(w,O,N,X,z,Q,te,x,g);return}}ae&8?(W&16&&xe(w,z,Q),O!==w&&c(N,O)):W&16?ae&16?le(w,O,N,X,z,Q,te,x,g):xe(w,z,Q,!0):(W&8&&c(N,""),ae&16&&q(O,N,X,z,Q,te,x,g))},se=(_,U,N,X,z,Q,te,x,g)=>{_=_||ur,U=U||ur;const w=_.length,W=U.length,O=Math.min(w,W);let G;for(G=0;G<O;G++){const ae=U[G]=g?Vn(U[G]):Tn(U[G]);M(_[G],ae,N,null,z,Q,te,x,g)}w>W?xe(_,z,Q,!0,!1,O):q(U,N,X,z,Q,te,x,g,O)},le=(_,U,N,X,z,Q,te,x,g)=>{let w=0;const W=U.length;let O=_.length-1,G=W-1;for(;w<=O&&w<=G;){const ae=_[w],oe=U[w]=g?Vn(U[w]):Tn(U[w]);if(Pi(ae,oe))M(ae,oe,N,null,z,Q,te,x,g);else break;w++}for(;w<=O&&w<=G;){const ae=_[O],oe=U[G]=g?Vn(U[G]):Tn(U[G]);if(Pi(ae,oe))M(ae,oe,N,null,z,Q,te,x,g);else break;O--,G--}if(w>O){if(w<=G){const ae=G+1,oe=ae<W?U[ae].el:X;for(;w<=G;)M(null,U[w]=g?Vn(U[w]):Tn(U[w]),N,oe,z,Q,te,x,g),w++}}else if(w>G)for(;w<=O;)de(_[w],z,Q,!0),w++;else{const ae=w,oe=w,fe=new Map;for(w=oe;w<=G;w++){const _e=U[w]=g?Vn(U[w]):Tn(U[w]);_e.key!=null&&fe.set(_e.key,w)}let ge,Ee=0;const ie=G-oe+1;let Ve=!1,Ie=0;const Ue=new Array(ie);for(w=0;w<ie;w++)Ue[w]=0;for(w=ae;w<=O;w++){const _e=_[w];if(Ee>=ie){de(_e,z,Q,!0);continue}let Pe;if(_e.key!=null)Pe=fe.get(_e.key);else for(ge=oe;ge<=G;ge++)if(Ue[ge-oe]===0&&Pi(_e,U[ge])){Pe=ge;break}Pe===void 0?de(_e,z,Q,!0):(Ue[Pe-oe]=w+1,Pe>=Ie?Ie=Pe:Ve=!0,M(_e,U[Pe],N,null,z,Q,te,x,g),Ee++)}const Re=Ve?op(Ue):ur;for(ge=Re.length-1,w=ie-1;w>=0;w--){const _e=oe+w,Pe=U[_e],Ke=U[_e+1],it=_e+1<W?Ke.el||Df(Ke):X;Ue[w]===0?M(null,Pe,N,it,z,Q,te,x,g):Ve&&(ge<0||w!==Re[ge]?ue(Pe,N,it,2):ge--)}}},ue=(_,U,N,X,z=null)=>{const{el:Q,type:te,transition:x,children:g,shapeFlag:w}=_;if(w&6){ue(_.component.subTree,U,N,X);return}if(w&128){_.suspense.move(U,N,X);return}if(w&64){te.move(_,U,N,qe);return}if(te===Ze){i(Q,U,N);for(let O=0;O<g.length;O++)ue(g[O],U,N,X);i(_.anchor,U,N);return}if(te===Vs){S(_,U,N);return}if(X!==2&&w&1&&x)if(X===0)x.persisted&&!Q[sn]?i(Q,U,N):(x.beforeEnter(Q),i(Q,U,N),Gt(()=>x.enter(Q),z));else{const{leave:O,delayLeave:G,afterLeave:ae}=x,oe=()=>{_.ctx.isUnmounted?r(Q):i(Q,U,N)},fe=()=>{const ge=Q._isLeaving||!!Q[sn];Q._isLeaving&&Q[sn](!0),x.persisted&&!ge?oe():O(Q,()=>{oe(),ae&&ae()})};G?G(Q,oe,fe):fe()}else i(Q,U,N)},de=(_,U,N,X=!1,z=!1)=>{const{type:Q,props:te,ref:x,children:g,dynamicChildren:w,shapeFlag:W,patchFlag:O,dirs:G,cacheIndex:ae,memo:oe}=_;if(O===-2&&(z=!1),x!=null&&(Kn(),Xr(x,null,N,_,!0),Zn()),ae!=null&&(U.renderCache[ae]=void 0),W&256){U.ctx.deactivate(_);return}const fe=W&1&&G,ge=!$r(_);let Ee;if(ge&&(Ee=te&&te.onVnodeBeforeUnmount)&&Mn(Ee,U,_),W&6)ce(_.component,N,X);else{if(W&128){_.suspense.unmount(N,X);return}fe&&Si(_,null,U,"beforeUnmount"),W&64?_.type.remove(_,U,N,qe,X):w&&!w.hasOnce&&(Q!==Ze||O>0&&O&64)?xe(w,U,N,!1,!0):(Q===Ze&&O&384||!z&&W&16)&&xe(g,U,N),X&&Fe(_)}const ie=oe!=null&&ae==null;(ge&&(Ee=te&&te.onVnodeUnmounted)||fe||ie)&&Gt(()=>{Ee&&Mn(Ee,U,_),fe&&Si(_,null,U,"unmounted"),ie&&(_.el=null)},N)},Fe=_=>{const{type:U,el:N,anchor:X,transition:z}=_;if(U===Ze){J(N,X);return}if(U===Vs){b(_);return}const Q=()=>{r(N),z&&!z.persisted&&z.afterLeave&&z.afterLeave()};if(_.shapeFlag&1&&z&&!z.persisted){const{leave:te,delayLeave:x}=z,g=()=>te(N,Q);x?x(_.el,Q,g):g()}else Q()},J=(_,U)=>{let N;for(;_!==U;)N=d(_),r(_),_=N;r(U)},ce=(_,U,N)=>{const{bum:X,scope:z,job:Q,subTree:te,um:x,m:g,a:w}=_;Ul(g),Ul(w),X&&Gs(X),z.stop(),Q&&(Q.flags|=8,de(te,_,U,N)),x&&Gt(x,U),Gt(()=>{_.isUnmounted=!0},U)},xe=(_,U,N,X=!1,z=!1,Q=0)=>{for(let te=Q;te<_.length;te++)de(_[te],U,N,X,z)},we=_=>{if(_.shapeFlag&6)return we(_.component.subTree);if(_.shapeFlag&128)return _.suspense.next();const U=d(_.anchor||_.el),N=U&&U[yh];return N?d(N):U};let Ce=!1;const be=(_,U,N)=>{let X;_==null?U._vnode&&(de(U._vnode,null,null,!0),X=U._vnode.component):M(U._vnode||null,_,U,null,null,null,N),U._vnode=_,Ce||(Ce=!0,Ml(X),tf(),Ce=!1)},qe={p:M,um:de,m:ue,r:Fe,mt:I,mc:q,pc:j,pbc:v,n:we,o:n};return{render:be,hydrate:void 0,createApp:Vh(be)}}function ko({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function yi({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function sp(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Lf(n,e,t=!1){const i=n.children,r=e.children;if(Le(i)&&Le(r))for(let s=0;s<i.length;s++){const a=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=Vn(r[s]),o.el=a.el),!t&&o.patchFlag!==-2&&Lf(a,o)),o.type===So&&(o.patchFlag===-1&&(o=r[s]=Vn(o)),o.el=a.el),o.type===zt&&!o.el&&(o.el=a.el)}}function op(n){const e=n.slice(),t=[0];let i,r,s,a,o;const l=n.length;for(i=0;i<l;i++){const u=n[i];if(u!==0){if(r=t[t.length-1],n[r]<u){e[i]=r,t.push(i);continue}for(s=0,a=t.length-1;s<a;)o=s+a>>1,n[t[o]]<u?s=o+1:a=o;u<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,a=t[s-1];s-- >0;)t[s]=a,a=e[a];return t}function Pf(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Pf(e)}function Ul(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function Df(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?Df(e.subTree):null}const Uf=n=>n.__isSuspense;function ap(n,e){e&&e.pendingBranch?Le(n)?e.effects.push(...n):e.effects.push(n):_h(n)}const Ze=Symbol.for("v-fgt"),So=Symbol.for("v-txt"),zt=Symbol.for("v-cmt"),Vs=Symbol.for("v-stc"),Oi=[];let Jt=null;function ye(n=!1){Oi.push(Jt=n?null:[])}function If(){Oi.pop(),Jt=Oi[Oi.length-1]||null}let Qr=1;function Js(n,e=!1){Qr+=n,n<0&&Jt&&e&&(Jt.hasOnce=!0)}function Nf(n){return n.dynamicChildren=Qr>0?Jt||ur:null,If(),Qr>0&&Jt&&Jt.push(n),n}function Me(n,e,t,i,r,s){return Nf(C(n,e,t,i,r,s,!0))}function lp(n,e,t,i,r){return Nf(nt(n,e,t,i,r,!0))}function Qs(n){return n?n.__v_isVNode===!0:!1}function Pi(n,e){return n.type===e.type&&n.key===e.key}const Ff=({key:n})=>n??null,Ws=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?ht(n)||Ut(n)||ke(n)?{i:ln,r:n,k:e,f:!!t}:n:null);function C(n,e=null,t=null,i=0,r=null,s=n===Ze?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Ff(e),ref:e&&Ws(e),scopeId:rf,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:ln};return o?(eo(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=ht(t)?8:16),Qr>0&&!a&&Jt&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Jt.push(l),l}const nt=cp;function cp(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===Nh)&&(n=zt),Qs(n)){const o=pi(n,e,!0);return t&&eo(o,t),Qr>0&&!s&&Jt&&(o.shapeFlag&6?Jt[Jt.indexOf(n)]=o:Jt.push(o)),o.patchFlag=-2,o}if(Sp(n)&&(n=n.__vccOpts),e){e=up(e);let{class:o,style:l}=e;o&&!ht(o)&&(e.class=Zt(o)),et(l)&&(tl(l)&&!Le(l)&&(l=bt({},l)),e.style=ss(l))}const a=ht(n)?1:Uf(n)?128:lf(n)?64:et(n)?4:ke(n)?2:0;return C(n,e,t,i,r,a,s,!0)}function up(n){return n?tl(n)||Ef(n)?bt({},n):n:null}function pi(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:a,children:o,transition:l}=n,u=e?dp(r||{},e):r,c={__v_isVNode:!0,__v_skip:!0,type:n.type,props:u,key:u&&Ff(u),ref:e&&e.ref?t&&s?Le(s)?s.concat(Ws(e)):[s,Ws(e)]:Ws(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Ze?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&pi(n.ssContent),ssFallback:n.ssFallback&&pi(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Jr(c,l.clone(c)),c}function _t(n=" ",e=0){return nt(So,null,n,e)}function fp(n,e){const t=nt(Vs,null,n);return t.staticCount=e,t}function yo(n="",e=!1){return e?(ye(),lp(zt,null,n)):nt(zt,null,n)}function Tn(n){return n==null||typeof n=="boolean"?nt(zt):Le(n)?nt(Ze,null,n.slice()):Qs(n)?Vn(n):nt(So,null,String(n))}function Vn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:pi(n)}function eo(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Le(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),eo(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!Ef(e)?e._ctx=ln:r===3&&ln&&(ln.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else if(ke(e)){if(i&65){eo(n,{default:e});return}e={default:e,_ctx:ln},t=32}else e=String(e),i&64?(t=16,e=[_t(e)]):t=8;n.children=e,n.shapeFlag|=t}function dp(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Zt([e.class,i.class]));else if(r==="style")e.style=ss([e.style,i.style]);else if(co(r)){const s=e[r],a=i[r];a&&s!==a&&!(Le(s)&&s.includes(a))?e[r]=s?[].concat(s,a):a:a==null&&s==null&&!uo(r)&&(e[r]=a)}else r!==""&&(e[r]=i[r])}return e}function Mn(n,e,t,i=null){un(n,e,7,[t,i])}const hp=xf();let pp=0;function mp(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||hp,s={uid:pp++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Hd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Af(i,r),emitsOptions:Sf(i,r),emit:null,emitted:null,propsDefaults:at,inheritAttrs:i.inheritAttrs,ctx:at,data:at,props:at,attrs:at,slots:at,refs:at,setupState:at,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Xh.bind(null,s),n.ce&&n.ce(s),s}let kt=null;const Of=()=>kt||ln;let to,Da;{const n=po(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(a=>a(s)):r[0](s)}};to=e("__VUE_INSTANCE_SETTERS__",t=>kt=t),Da=e("__VUE_SSR_SETTERS__",t=>es=t)}const cs=n=>{const e=kt;return to(n),n.scope.on(),()=>{n.scope.off(),to(e)}},Il=()=>{kt&&kt.scope.off(),to(null)};function Bf(n){return n.vnode.shapeFlag&4}let es=!1;function gp(n,e=!1,t=!1){e&&Da(e);const{props:i,children:r}=n.vnode,s=Bf(n);Zh(n,i,s,e),tp(n,r,t||e);const a=s?_p(n,e):void 0;return e&&Da(!1),a}function _p(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Fh);const{setup:i}=t;if(i){Kn();const r=n.setupContext=i.length>1?xp(n):null,s=cs(n),a=os(i,n,0,[n.props,r]),o=Cu(a);if(Zn(),s(),(o||n.sp)&&!$r(n)&&pf(n),o){if(a.then(Il,Il),e)return a.then(l=>{Nl(n,l)}).catch(l=>{go(l,n,0)});n.asyncDep=a}else Nl(n,a)}else zf(n)}function Nl(n,e,t){ke(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:et(e)&&(n.setupState=Zu(e)),zf(n)}function zf(n,e,t){const i=n.type;n.render||(n.render=i.render||Cn);{const r=cs(n);Kn();try{Oh(n)}finally{Zn(),r()}}}const vp={get(n,e){return Dt(n,"get",""),n[e]}};function xp(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,vp),slots:n.slots,emit:n.emit,expose:e}}function Mo(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Zu(ah(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in qr)return qr[t](n)},has(e,t){return t in e||t in qr}})):n.proxy}function Sp(n){return ke(n)&&"__vccOpts"in n}const Xt=(n,e)=>dh(n,e,es);function yp(n,e,t){try{Js(-1);const i=arguments.length;return i===2?et(e)&&!Le(e)?Qs(e)?nt(n,null,[e]):nt(n,e):nt(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Qs(t)&&(t=[t]),nt(n,e,t))}finally{Js(1)}}const Mp="3.5.40";/**
* @vue/runtime-dom v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ua;const Fl=typeof window<"u"&&window.trustedTypes;if(Fl)try{Ua=Fl.createPolicy("vue",{createHTML:n=>n})}catch{}const kf=Ua?n=>Ua.createHTML(n):n=>n,bp="http://www.w3.org/2000/svg",Ep="http://www.w3.org/1998/Math/MathML",Gn=typeof document<"u"?document:null,Ol=Gn&&Gn.createElement("template"),Tp={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?Gn.createElementNS(bp,n):e==="mathml"?Gn.createElementNS(Ep,n):t?Gn.createElement(n,{is:t}):Gn.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Gn.createTextNode(n),createComment:n=>Gn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Gn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const a=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Ol.innerHTML=kf(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const o=Ol.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},ti="transition",Pr="animation",ts=Symbol("_vtc"),Hf={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Ap=bt({},cf,Hf),wp=n=>(n.displayName="Transition",n.props=Ap,n),Ia=wp((n,{slots:e})=>yp(Eh,Rp(n),e)),Mi=(n,e=[])=>{Le(n)?n.forEach(t=>t(...e)):n&&n(...e)},Bl=n=>n?Le(n)?n.some(e=>e.length>1):n.length>1:!1;function Rp(n){const e={};for(const F in n)F in Hf||(e[F]=n[F]);if(n.css===!1)return e;const{name:t="v",type:i,duration:r,enterFromClass:s=`${t}-enter-from`,enterActiveClass:a=`${t}-enter-active`,enterToClass:o=`${t}-enter-to`,appearFromClass:l=s,appearActiveClass:u=a,appearToClass:c=o,leaveFromClass:f=`${t}-leave-from`,leaveActiveClass:d=`${t}-leave-active`,leaveToClass:m=`${t}-leave-to`}=n,y=Cp(r),M=y&&y[0],p=y&&y[1],{onBeforeEnter:h,onEnter:E,onEnterCancelled:S,onLeave:b,onLeaveCancelled:D,onBeforeAppear:P=h,onAppear:L=E,onAppearCancelled:q=S}=e,K=(F,ne,I,Z)=>{F._enterCancelled=Z,bi(F,ne?c:o),bi(F,ne?u:a),I&&I()},v=(F,ne)=>{F._isLeaving=!1,bi(F,f),bi(F,m),bi(F,d),ne&&ne()},A=F=>(ne,I)=>{const Z=F?L:E,k=()=>K(ne,F,I);Mi(Z,[ne,k]),zl(()=>{bi(ne,F?l:s),Nn(ne,F?c:o),Bl(Z)||kl(ne,i,M,k)})};return bt(e,{onBeforeEnter(F){Mi(h,[F]),Nn(F,s),Nn(F,a)},onBeforeAppear(F){Mi(P,[F]),Nn(F,l),Nn(F,u)},onEnter:A(!1),onAppear:A(!0),onLeave(F,ne){F._isLeaving=!0;const I=()=>v(F,ne);Nn(F,f),F._enterCancelled?(Nn(F,d),Vl(F)):(Vl(F),Nn(F,d)),zl(()=>{F._isLeaving&&(bi(F,f),Nn(F,m),Bl(b)||kl(F,i,p,I))}),Mi(b,[F,I])},onEnterCancelled(F){K(F,!1,void 0,!0),Mi(S,[F])},onAppearCancelled(F){K(F,!0,void 0,!0),Mi(q,[F])},onLeaveCancelled(F){v(F),Mi(D,[F])}})}function Cp(n){if(n==null)return null;if(et(n))return[Ho(n.enter),Ho(n.leave)];{const e=Ho(n);return[e,e]}}function Ho(n){return Ud(n)}function Nn(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[ts]||(n[ts]=new Set)).add(e)}function bi(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[ts];t&&(t.delete(e),t.size||(n[ts]=void 0))}function zl(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let Lp=0;function kl(n,e,t,i){const r=n._endId=++Lp,s=()=>{r===n._endId&&i()};if(t!=null)return setTimeout(s,t);const{type:a,timeout:o,propCount:l}=Pp(n,e);if(!a)return i();const u=a+"end";let c=0;const f=()=>{n.removeEventListener(u,d),s()},d=m=>{m.target===n&&++c>=l&&f()};setTimeout(()=>{c<l&&f()},o+1),n.addEventListener(u,d)}function Pp(n,e){const t=window.getComputedStyle(n),i=y=>(t[y]||"").split(", "),r=i(`${ti}Delay`),s=i(`${ti}Duration`),a=Hl(r,s),o=i(`${Pr}Delay`),l=i(`${Pr}Duration`),u=Hl(o,l);let c=null,f=0,d=0;e===ti?a>0&&(c=ti,f=a,d=s.length):e===Pr?u>0&&(c=Pr,f=u,d=l.length):(f=Math.max(a,u),c=f>0?a>u?ti:Pr:null,d=c?c===ti?s.length:l.length:0);const m=c===ti&&/\b(?:transform|all)(?:,|$)/.test(i(`${ti}Property`).toString());return{type:c,timeout:f,propCount:d,hasTransform:m}}function Hl(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>Gl(t)+Gl(n[i])))}function Gl(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function Vl(n){return(n?n.ownerDocument:document).body.offsetHeight}function Dp(n,e,t){const i=n[ts];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Wl=Symbol("_vod"),Up=Symbol("_vsh"),Ip=Symbol(""),Np=/(?:^|;)\s*display\s*:/;function Fp(n,e,t){const i=n.style,r=ht(t);let s=!1;if(t&&!r){if(e)if(ht(e))for(const a of e.split(";")){const o=a.slice(0,a.indexOf(":")).trim();t[o]==null&&zr(i,o,"")}else for(const a in e)t[a]==null&&zr(i,a,"");for(const a in t){a==="display"&&(s=!0);const o=t[a];o!=null?Bp(n,a,!ht(e)&&e?e[a]:void 0,o)||zr(i,a,o):zr(i,a,"")}}else if(r){if(e!==t){const a=i[Ip];a&&(t+=";"+a),i.cssText=t,s=Np.test(t)}}else e&&n.removeAttribute("style");Wl in n&&(n[Wl]=s?i.display:"",n[Up]&&(i.display="none"))}const Xl=/\s*!important$/;function zr(n,e,t){if(Le(t))t.forEach(i=>zr(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Op(n,e);Xl.test(t)?n.setProperty(Vi(i),t.replace(Xl,""),"important"):n[i]=t}}const $l=["Webkit","Moz","ms"],Go={};function Op(n,e){const t=Go[e];if(t)return t;let i=_n(e);if(i!=="filter"&&i in n)return Go[e]=i;i=Du(i);for(let r=0;r<$l.length;r++){const s=$l[r]+i;if(s in n)return Go[e]=s}return e}function Bp(n,e,t,i){return n.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&ht(i)&&t===i}const ql="http://www.w3.org/1999/xlink";function jl(n,e,t,i,r,s=zd(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(ql,e.slice(6,e.length)):n.setAttributeNS(ql,e,t):t==null||s&&!Iu(t)?n.removeAttribute(e):n.setAttribute(e,s?"":Dn(t)?String(t):t)}function Yl(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?kf(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(o!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const o=typeof n[e];o==="boolean"?t=Iu(t):t==null&&o==="string"?(t="",a=!0):o==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(r||e)}function ci(n,e,t,i){n.addEventListener(e,t,i)}function zp(n,e,t,i){n.removeEventListener(e,t,i)}const Kl=Symbol("_vei");function kp(n,e,t,i,r=null){const s=n[Kl]||(n[Kl]={}),a=s[e];if(i&&a)a.value=i;else{const[o,l]=Vp(e);if(i){const u=s[e]=$p(i,r);ci(n,o,u,l)}else a&&(zp(n,o,a,l),s[e]=void 0)}}const Hp=/(Once|Passive|Capture)$/,Gp=/^on:?(?:Once|Passive|Capture)$/;function Vp(n){let e,t;for(;(t=n.match(Hp))&&!Gp.test(n);)e||(e={}),n=n.slice(0,n.length-t[1].length),e[t[1].toLowerCase()]=!0;return[n[2]===":"?n.slice(3):Vi(n.slice(2)),e]}let Vo=0;const Wp=Promise.resolve(),Xp=()=>Vo||(Wp.then(()=>Vo=0),Vo=Date.now());function $p(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;const r=t.value;if(Le(r)){const s=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{s.call(i),i._stopped=!0};const a=r.slice(),o=[i];for(let l=0;l<a.length&&!i._stopped;l++){const u=a[l];u&&un(u,e,5,o)}}else un(r,e,5,[i])};return t.value=n,t.attached=Xp(),t}const Zl=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,qp=(n,e,t,i,r,s)=>{const a=r==="svg";e==="class"?Dp(n,i,a):e==="style"?Fp(n,t,i):co(e)?uo(e)||kp(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):jp(n,e,i,a))?(Yl(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&jl(n,e,i,a,s,e!=="value")):n._isVueCE&&(Yp(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!ht(i)))?Yl(n,_n(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),jl(n,e,i,a))};function jp(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Zl(e)&&ke(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Zl(e)&&ht(t)?!1:e in n}function Yp(n,e){const t=n._def.props;if(!t)return!1;const i=_n(e);return Array.isArray(t)?t.some(r=>_n(r)===i):Object.keys(t).some(r=>_n(r)===i)}const vr=n=>{const e=n.props["onUpdate:modelValue"]||!1;return Le(e)?t=>Gs(e,t):e};function Kp(n){n.target.composing=!0}function Jl(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Yn=Symbol("_assign");function Ql(n,e,t){return e&&(n=n.trim()),t&&(n=ho(n)),n}const Wo={created(n,{modifiers:{lazy:e,trim:t,number:i}},r){n[Yn]=vr(r);const s=i||r.props&&r.props.type==="number";ci(n,e?"change":"input",a=>{a.target.composing||n[Yn](Ql(n.value,t,s))}),(t||s)&&ci(n,"change",()=>{n.value=Ql(n.value,t,s)}),e||(ci(n,"compositionstart",Kp),ci(n,"compositionend",Jl),ci(n,"change",Jl))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:r,number:s}},a){if(n[Yn]=vr(a),n.composing)return;const o=(s||n.type==="number")&&!/^0\d/.test(n.value)?ho(n.value):n.value,l=e??"";if(o===l)return;const u=n.getRootNode();(u instanceof Document||u instanceof ShadowRoot)&&u.activeElement===n&&n.type!=="range"&&(i&&e===t||r&&n.value.trim()===l)||(n.value=l)}},Zp={deep:!0,created(n,e,t){n[Yn]=vr(t),ci(n,"change",()=>{const i=n._modelValue,r=ns(n),s=n.checked,a=n[Yn];if(Le(i)){const o=ja(i,r),l=o!==-1;if(s&&!l)a(i.concat(r));else if(!s&&l){const u=[...i];u.splice(o,1),a(u)}}else if(br(i)){const o=new Set(i);s?o.add(r):o.delete(r),a(o)}else a(Gf(n,s))})},mounted:ec,beforeUpdate(n,e,t){n[Yn]=vr(t),ec(n,e,t)}};function ec(n,{value:e,oldValue:t},i){n._modelValue=e;let r;if(Le(e))r=ja(e,i.props.value)>-1;else if(br(e))r=e.has(i.props.value);else{if(e===t)return;r=Er(e,Gf(n,!0))}n.checked!==r&&(n.checked=r)}const Jp={deep:!0,created(n,{value:e,modifiers:{number:t}},i){n._modelValue=e,ci(n,"change",()=>{const r=Array.prototype.filter.call(n.options,s=>s.selected).map(s=>t?ho(ns(s)):ns(s));n[Yn](n.multiple?br(n._modelValue)?new Set(r):r:r[0]),n._assigning=!0,Qu(()=>{n._assigning=!1})}),n[Yn]=vr(i)},mounted(n,{value:e}){tc(n,e)},beforeUpdate(n,{value:e},t){n._modelValue=e,n[Yn]=vr(t)},updated(n,{value:e}){n._assigning||tc(n,e)}};function tc(n,e){const t=n.multiple,i=Le(e);if(!(t&&!i&&!br(e))){for(let r=0,s=n.options.length;r<s;r++){const a=n.options[r],o=ns(a);if(t)if(i){const l=typeof o;l==="string"||l==="number"?a.selected=e.some(u=>String(u)===String(o)):a.selected=ja(e,o)>-1}else a.selected=e.has(o);else if(Er(ns(a),e)){n.selectedIndex!==r&&(n.selectedIndex=r);return}}!t&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function ns(n){return"_value"in n?n._value:n.value}function Gf(n,e){const t=e?"_trueValue":"_falseValue";return t in n?n[t]:e}const Qp=["ctrl","shift","alt","meta"],em={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>Qp.some(t=>n[`${t}Key`]&&!e.includes(t))},kr=(n,e)=>{if(!n)return n;const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=(r,...s)=>{for(let a=0;a<e.length;a++){const o=em[e[a]];if(o&&o(r,e))return}return n(r,...s)})},tm=bt({patchProp:qp},Tp);let nc;function nm(){return nc||(nc=ip(tm))}const im=(...n)=>{const e=nm().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=sm(i);if(!r)return;const s=e._component;!ke(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const a=t(r,!1,rm(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e};function rm(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function sm(n){return ht(n)?document.querySelector(n):n}const Vf=Symbol("locale"),ic={tr:{nav:{services:"Hizmetler",process:"Süreç",projects:"Projeler",about:"Hakkımızda",cta:"Teklif Al",ctac:"Teklif Al"},hero:{badge:"Özel Yazılım & Özel Yapay Zeka Çözümleri",title1:"İşinizi Geleceğe Taşıyan",titleHighlight:"Özel Yazılım",title2:"ve Yapay Zeka Çözümleri",subtitle:"İhtiyacınıza özel ERP sistemlerinden yüksek performanslı web platformlarına kadar, dijital dönüşümünüzü uçtan uca yönetiyoruz.",ctaPrimary:"Projenizi Başlatın",ctaSecondary:"Çözümlerimizi İnceleyin",stat1Label:"Verimlilik Artışı",stat1Value:"+%124",stat2Label:"Yapay Zeka Verimliliği",stat2Value:"10x Hız",stat3Label:"Sistem Sağlığı",carouselLabel:"Operasyon vitrini",carouselPrevious:"Önceki slayt",carouselNext:"Sonraki slayt",carouselSlides:{results:{eyebrow:"Vaka çalışması / NorthPeak Logistics",title:"Operasyonu veriye dayalı bir sisteme dönüştürün.",description:"ERP ve otomasyon altyapısıyla ekiplerin daha hızlı karar almasını sağlayan ölçülebilir dönüşüm.",visualLabel:"Operasyonel verimlilik"},ai:{eyebrow:"AI otomasyon katmanı",title:"Tekrarlayan işleri akıllı akışlara bırakın.",description:"LLM entegrasyonları ve süreç analiziyle ekibinizin zamanını gerçek iş değerine geri kazandırın.",visualLabel:"AI verimlilik skoru"},stack:{eyebrow:"Güvenilir mühendislik",title:"Ölçeklenebilir altyapıyla güvenle büyüyün.",description:"Modern cloud ve DevOps pratikleri, ürününüzün performansını ve sürekliliğini korur.",visualLabel:"Sistem sağlığı"}}},services:{sectionTitle1:"Uçtan Uca Dijital",sectionTitleHighlight:"Mühendislik",sectionSubtitle:"Geleceğin teknolojilerini bugünün iş ihtiyaçlarıyla buluşturuyoruz.",details:"Detaylar",cards:[{title:"Özel Web & Mobil Platformlar",description:"Kullanıcı deneyimini odağa alan, yüksek performanslı ve ölçeklenebilir dijital çözümler."},{title:"Kurumsal ERP & CRM Sistemleri",description:"Operasyonel mükemmellik için firmanıza özel terzi usulü yönetim platformları."},{title:"Özel Yazılım Geliştirme",description:"Karmaşık iş süreçlerini kolaylaştıran, güvenli ve esnek yazılım mimarileri."},{title:"Yapay Zeka & Otomasyon",description:"İş akışlarını otopilota alan akıllı algoritmalar ve LLM entegrasyonları."}]},ai:{engineLabel:"Sartechs AI Engine Active",engineQuote:'"Süreç analizi tamamlandı. Operasyonel performans +%124 seviyesinde iyileştirildi."',title1:"Yapay Zeka ile Süreçlerinizi",titleHighlight:"Otopilota",title2:"Alın",features:[{title:"Akıllı Karar Mekanizmaları",description:"Veri yığınlarını anlamlı içgörülere dönüştürerek stratejik kararlarınızı destekliyoruz."},{title:"Hızlandırılmış Operasyon",description:"Tekrar eden görevleri otonom sistemlere devrederek ekibinizin yaratıcılığa odaklanmasını sağlıyoruz."},{title:"Öngörülebilir Güvenlik",description:"Anomali tespiti ve proaktif savunma sistemleri ile verilerinizi en üst düzeyde koruyoruz."}]},stats:{reliability:"Güvenilirlik",speed:"Hız",bespoke:"Özel Çözüm"},process:{title1:"Mükemmelliğe Giden",titleHighlight:"Yol",subtitle:"Sistemli ve şeffaf çalışma modelimizle başarıyı garantiliyoruz.",steps:[{title:"Analiz & Strateji",description:"İhtiyaçlarınızı derinlemesine inceliyor, yol haritasını belirliyoruz."},{title:"Mimari & UI/UX",description:"Estetiği fonksiyonla birleştiren, kullanıcı dostu arayüzler tasarlıyoruz."},{title:"Çevik Geliştirme",description:"Modern teknolojilerle güvenli ve ölçeklenebilir kod yazıyoruz."},{title:"Canlıya Alım & Destek",description:"Projenizi yayınlıyor, süreklilik için teknik destek sağlıyoruz."}]},ecosystem:{title:"Teknoloji Ekosistemimiz",subtitle:"En son teknolojilerle güçlendirilmiş modern altyapı.",categoriesLabel:"Teknoloji kategorileri",categoryAll:"Tümü"},contact:{title1:"Bir Sonraki",titleHighlight:"Devriminizi",title2:"Başlatalım",subtitle:"Ekibimiz 24 saat içinde size özel bir strateji ile dönüş yapacaktır.",labelName:"Ad Soyad",placeholderName:"Ahmet Yılmaz",labelEmail:"Şirket E-postası",placeholderEmail:"ahmet@sirket.com",labelService:"Hizmet Türü",labelDetails:"Proje Detayları",placeholderDetails:"Projenizden kısaca bahseder misiniz?",submit:"TEKLİF TALEBİ GÖNDER",email:"sariibasmuhammed@gmail.com",location:"Türkiye / Uzaktan çalışma",quickContact:"Hızlı iletişim için e-posta gönder",quickSubject:"Acil proje görüşmesi",consent:"Gizlilik Politikası ve KVKK aydınlatma metnini okudum, kişisel verilerimin teklif talebimi yanıtlamak amacıyla işlenmesini kabul ediyorum.",serviceOptions:["Özel Yazılım Geliştirme","Yapay Zeka Entegrasyonu","Mobil Uygulama","ERP & CRM Çözümleri"]},footer:{tagline:"Geleceğin teknolojilerini kullanarak işletmenizi dijital çağda zirveye taşıyoruz.",copyright:"Sartechs. Tüm hakları saklıdır.",company:"Şirket",support:"Destek",companyLinks:[{label:"Hizmetler",href:"#hizmetler"},{label:"Süreç",href:"#surec"},{label:"Projeler",href:"#projeler"}],supportLinks:[{label:"İletişim",href:"#iletisim"},{label:"Gizlilik",href:"#gizlilik"},{label:"KVKK",href:"#kvkk"}],legalDocuments:[{id:"gizlilik",title:"Gizlilik Politikası",body:"Teklif formunda paylaştığınız bilgiler yalnızca iletişim kurmak ve talebinizi değerlendirmek amacıyla işlenir. Verileriniz yetkisiz kişilerle paylaşılmaz."},{id:"cerez",title:"Çerez Politikası",body:"Bu tek sayfalık deneyim, zorunlu olmayan pazarlama çerezleri kullanmadan çalışır. Kullanılan teknik depolama, dil tercihi gibi temel deneyim ihtiyaçlarıyla sınırlıdır."},{id:"kvkk",title:"KVKK Aydınlatma",body:"6698 sayılı Kanun kapsamındaki talepleriniz ve veri sahibi haklarınız için sariibasmuhammed@gmail.com adresinden bize ulaşabilirsiniz."}]},about:{title1:"Biz",titleHighlight:"Kimiz?",title2:"",subtitle:"Sartechs, işletmelerin süreçlerini yeniden tasarlayan, özel yazılım ve yapay zeka mimarileri kuran bir teknoloji ortağıdır.",points:["İş kritikliği yüksek sistemler için net mimari ve güvenli geliştirme yaklaşımı.","Kurumsal operasyonları dönüştüren ERP, otomasyon ve dijital platform çözümleri.","İster ürün, ister operasyonel akış olsun; her adımda teknik ve iş odaklı ekip desteği."],techs:["Node.js","Vue","Spring Boot","PostgreSQL","Docker","LLM"],card:{label:"Müşteriler neden bizi seçer",title:"Strateji, ürün ve teslimat",items:[{title:"İş odaklı düşünme",description:"İş süreçlerini teknolojiyle değil, iş değeriyle eşleştirerek çözümler üretiyoruz."},{title:"Net ve güvenli yürütme",description:"Mimari, geliştirme ve yayın sonrası süreçlerde net iletişim ve güvenli ilerleme sağlıyoruz."},{title:"Modern mühendislik ekosistemi",description:""}]}},projects:{title1:"Önceki",titleHighlight:"Başarı Hikâyeleri",title2:"",subtitle:"Yüksek güven gerektiren iş akışlarında, özel yazılım ve AI çözümleriyle ölçülebilir sonuçlar üretiyoruz.",items:[{name:"NorthPeak Logistics",metric:"+42% operasyonel verimlilik",problem:"Dağınık operasyon verileri ve manuel planlama.",solution:"ERP, iş akışı otomasyonu ve merkezi raporlama.",result:"+42% operasyonel verimlilik."},{name:"VerdeOne",metric:"3x daha hızlı ekip koordinasyonu",problem:"Ekipler arası bilgi akışı ve müşteri takibi kopuktu.",solution:"İç operasyon paneli ve birleşik müşteri akışı.",result:"3x daha hızlı ekip koordinasyonu."},{name:"HelioOps",metric:"+68% müşteri yanıt hızı",problem:"Destek talepleri önceliklendirilemeden birikiyordu.",solution:"AI destekli sınıflandırma, yanıt ve yönetişim sistemi.",result:"+68% müşteri yanıt hızı."}]}},en:{nav:{services:"Services",process:"Process",projects:"Projects",about:"About",cta:"Get a Quote"},hero:{badge:"Custom Software & AI Solutions",title1:"Custom Software",titleHighlight:"& AI Solutions",title2:"That Drive Your Business Forward",subtitle:"From tailor-made ERP systems to high-performance web platforms, we manage your digital transformation end-to-end.",ctaPrimary:"Start Your Project",ctaSecondary:"Explore Our Solutions",stat1Label:"Performance Lift",stat1Value:"+124%",stat2Label:"AI Efficiency",stat2Value:"10x Speed",stat3Label:"System Health",carouselLabel:"Operations showcase",carouselPrevious:"Previous slide",carouselNext:"Next slide",carouselSlides:{results:{eyebrow:"Case study / NorthPeak Logistics",title:"Turn operations into a data-led system.",description:"A measurable transformation helping teams make faster decisions through ERP and workflow automation.",visualLabel:"Operational efficiency"},ai:{eyebrow:"AI automation layer",title:"Let intelligent workflows handle the repetitive work.",description:"Give your team time back with process analysis and LLM integrations built around real business value.",visualLabel:"AI efficiency score"},stack:{eyebrow:"Reliable engineering",title:"Scale with infrastructure you can trust.",description:"Modern cloud and DevOps practices keep your product performant, resilient, and ready to grow.",visualLabel:"System health"}}},services:{sectionTitle1:"End-to-End Digital",sectionTitleHighlight:"Engineering",sectionSubtitle:"Bridging tomorrow's technologies with today's business needs.",details:"Details",cards:[{title:"Custom Web & Mobile Platforms",description:"High-performance, scalable digital solutions focused on user experience."},{title:"Enterprise ERP & CRM Systems",description:"Tailor-made management platforms for operational excellence."},{title:"Custom Software Development",description:"Secure and flexible software architectures that streamline complex workflows."},{title:"AI & Automation",description:"Intelligent algorithms and LLM integrations that put workflows on autopilot."}]},ai:{engineLabel:"Sartechs AI Engine Active",engineQuote:'"Process analysis complete. Operational performance improved by 124%."',title1:"Put Your Processes on",titleHighlight:"Autopilot",title2:"with AI",features:[{title:"Intelligent Decision Engines",description:"We turn data mountains into meaningful insights that support your strategic decisions."},{title:"Accelerated Operations",description:"By delegating repetitive tasks to autonomous systems, we free your team to focus on creativity."},{title:"Predictive Security",description:"Anomaly detection and proactive defense systems keep your data protected at the highest level."}]},stats:{reliability:"Reliability",speed:"Speed",bespoke:"Bespoke"},process:{title1:"The Road to",titleHighlight:"Excellence",subtitle:"We guarantee success with our systematic and transparent working model.",steps:[{title:"Analysis & Strategy",description:"We deeply examine your needs and define the roadmap."},{title:"Architecture & UI/UX",description:"We design user-friendly interfaces that unite aesthetics and function."},{title:"Agile Development",description:"We write secure, scalable code with modern technologies."},{title:"Launch & Support",description:"We deploy your project and provide ongoing technical support."}]},ecosystem:{title:"Our Technology Ecosystem",subtitle:"Modern infrastructure powered by the latest technologies.",categoriesLabel:"Technology categories",categoryAll:"All"},contact:{title1:"Let's Kick Off Your",titleHighlight:"Next Revolution",title2:"",subtitle:"Our team will get back to you within 24 hours with a tailored strategy.",labelName:"Full Name",placeholderName:"John Doe",labelEmail:"Company Email",placeholderEmail:"john@company.com",labelService:"Service Type",labelDetails:"Project Details",placeholderDetails:"Tell us a bit about your project.",submit:"SEND QUOTE REQUEST",email:"sariibasmuhammed@gmail.com",location:"Türkiye / Remote delivery",quickContact:"Email us for an urgent conversation",quickSubject:"Urgent project conversation",consent:"I have read the Privacy Policy and KVKK notice, and I consent to the processing of my personal data to respond to my quote request.",serviceOptions:["Custom Software Development","AI Integration","Mobile Application","ERP & CRM Solutions"]},footer:{tagline:"Leveraging tomorrow's technologies to elevate your business in the digital age.",copyright:"Sartechs. All rights reserved.",company:"Company",support:"Support",companyLinks:[{label:"Services",href:"#hizmetler"},{label:"Process",href:"#surec"},{label:"Projects",href:"#projeler"}],supportLinks:[{label:"Contact",href:"#iletisim"},{label:"Privacy",href:"#gizlilik"},{label:"KVKK",href:"#kvkk"}],legalDocuments:[{id:"gizlilik",title:"Privacy Policy",body:"Information shared through the quote form is processed only to contact you and evaluate your request. We do not share it with unauthorized parties."},{id:"cerez",title:"Cookie Policy",body:"This single-page experience works without non-essential marketing cookies. Technical storage is limited to core experience needs such as language preference."},{id:"kvkk",title:"KVKK Notice",body:"For data subject requests under Turkish data protection law, contact us at sariibasmuhammed@gmail.com."}]},about:{title1:"Who",titleHighlight:"We Are",title2:"",subtitle:"Sartechs is a technology partner that redesigns business operations through custom software and AI architectures.",points:["Clear architecture and secure delivery for high-impact business systems.","ERP, automation, and digital platform solutions that transform operations.","Hands-on technical partnership from strategy to production support."],techs:["Node.js","Vue","Spring Boot","PostgreSQL","Docker","LLM"],card:{label:"Why clients choose us",title:"Strategy, product and delivery",items:[{title:"Business-first thinking",description:"We design solutions by aligning processes with business value, not just technology."},{title:"Clear execution",description:"We maintain transparent communication and safe delivery across architecture, development, and post-launch support."},{title:"Modern engineering stack",description:""}]}},projects:{title1:"Selected",titleHighlight:"Success Stories",title2:"",subtitle:"We deliver measurable business outcomes with custom software and AI systems built for operational resilience.",items:[{name:"NorthPeak Logistics",metric:"+42% operational efficiency",problem:"Fragmented operations data and manual planning.",solution:"ERP, workflow automation, and centralized reporting.",result:"+42% operational efficiency."},{name:"VerdeOne",metric:"3x faster team coordination",problem:"Team information flow and customer follow-up were disconnected.",solution:"Internal operations panel and unified customer journey.",result:"3x faster team coordination."},{name:"HelioOps",metric:"+68% response speed",problem:"Support requests accumulated without prioritization.",solution:"AI-assisted classification, response, and governance platform.",result:"+68% response speed."}]}}};function om(){const n=Hi("tr");return sf(Vf,n),n}function Sn(){const n=Wr(Vf);return{locale:n,t:t=>{const i=t.split(".");let r=ic[n.value];for(const s of i){if(r==null)return t;r=r[s]}return r??t},messages:ic}}const sl=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},am={class:"fixed top-0 w-full z-50 bg-surface-obsidian/80 backdrop-blur-md border-b border-white/5"},lm={class:"flex justify-between items-center max-w-container-max mx-auto px-gutter py-3"},cm={class:"flex items-center gap-3"},um={class:"hidden md:flex gap-8 items-center"},fm=["href","onClick"],dm={class:"md:hidden flex items-center gap-3"},hm={class:"material-symbols-outlined text-[28px]"},pm={key:0,class:"md:hidden flex flex-col px-gutter pb-4 gap-4 border-t border-white/5 bg-surface-obsidian"},mm=["href","onClick"],gm={__name:"AppHeader",setup(n){const{locale:e,t}=Sn();function i(){e.value=e.value==="tr"?"en":"tr"}const r=Xt(()=>[{id:"hizmetler",label:t("nav.services")},{id:"surec",label:t("nav.process")},{id:"hakkimizda",label:t("nav.about")},{id:"projeler",label:t("nav.projects")}]),s=Hi(null),a=Hi(!1);function o(u){const c=u?document.getElementById(u):document.documentElement;if(!c)return;const f=72,d=window.scrollY,y=(u?c.getBoundingClientRect().top+window.scrollY-f:0)-d,M=Math.min(Math.max(Math.abs(y)*.4,400),900);let p=null;function h(S){return S<.5?4*S*S*S:1-Math.pow(-2*S+2,3)/2}function E(S){p||(p=S);const b=S-p,D=Math.min(b/M,1);window.scrollTo(0,d+y*h(D)),D<1&&requestAnimationFrame(E)}requestAnimationFrame(E)}let l;return as(()=>{const u=document.querySelectorAll("section[id]");l=new IntersectionObserver(c=>{c.forEach(f=>{f.isIntersecting&&(s.value=f.target.id)})},{rootMargin:"-40% 0px -55% 0px"}),u.forEach(c=>l.observe(c))}),ls(()=>l==null?void 0:l.disconnect()),(u,c)=>(ye(),Me("header",am,[C("div",lm,[C("div",cm,[C("img",{src:"https://lh3.googleusercontent.com/aida/AP1WRLty_fiSjelvnvJUU_N9Vgoqa25s-UYGEfXUw3XsRfqQeEVJsggnyXPwHaO2vaOsO7PgQOOcEMNlh-KiVFSFU-YO4Y3ShyMAICfmpEo18XkrYAVDE_qPXCHTd0Cy-P5dg5pg_O50VYFEJgYJwz1fnZlmQR5gLLDeW1DbsSo0eENeHzU_dEZ0d3UtPAt4ZVJ4eD6MoO9x9tFEM_4JutbsQbTs3wyc9ZlLVTvnLKWOBNAckoIa0p2RmgirmWs",alt:"Sartechs",class:"h-9 w-auto logo-filter cursor-pointer",onClick:c[0]||(c[0]=f=>o(null))}),C("span",{class:"font-display-xl-mobile text-[20px] font-bold tracking-tight text-white hidden md:block cursor-pointer",onClick:c[1]||(c[1]=f=>o(null))}," SARTECHS ")]),C("nav",um,[(ye(!0),Me(Ze,null,mt(r.value,f=>(ye(),Me("a",{key:f.id,href:`#${f.id}`,class:Zt(["relative font-label-md transition-colors duration-200 py-1",s.value===f.id?"text-white":"text-on-surface-variant hover:text-white"]),onClick:kr(d=>o(f.id),["prevent"])},[_t(re(f.label)+" ",1),C("span",{class:Zt(["absolute -bottom-0.5 left-0 h-[2px] bg-primary rounded-full transition-all duration-300",s.value===f.id?"w-full opacity-100":"w-0 opacity-0"])},null,2)],10,fm))),128)),C("a",{href:"#iletisim",class:"bg-primary text-white px-5 py-2 rounded-lg font-label-md glow-button",onClick:c[2]||(c[2]=kr(f=>o("iletisim"),["prevent"]))},re(ve(t)("nav.cta")),1),C("button",{class:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass-panel border-white/10 text-xs font-bold tracking-widest uppercase text-on-surface-variant hover:text-white transition-colors",onClick:i},[c[5]||(c[5]=C("span",{class:"material-symbols-outlined text-[14px]"},"language",-1)),_t(" "+re(ve(e)==="tr"?"EN":"TR"),1)])]),C("div",dm,[C("button",{class:"flex items-center gap-1 px-2.5 py-1 rounded-md glass-panel border-white/10 text-xs font-bold tracking-widest uppercase text-on-surface-variant",onClick:i},[c[6]||(c[6]=C("span",{class:"material-symbols-outlined text-[13px]"},"language",-1)),_t(" "+re(ve(e)==="tr"?"EN":"TR"),1)]),C("button",{class:"text-on-surface",onClick:c[3]||(c[3]=f=>a.value=!a.value)},[C("span",hm,re(a.value?"close":"menu"),1)])])]),nt(Ia,{name:"slide-down"},{default:Ys(()=>[a.value?(ye(),Me("nav",pm,[(ye(!0),Me(Ze,null,mt(r.value,f=>(ye(),Me("a",{key:f.id,href:`#${f.id}`,class:Zt(["font-label-md py-2 transition-colors duration-200",s.value===f.id?"text-primary":"text-on-surface-variant"]),onClick:kr(d=>{o(f.id),a.value=!1},["prevent"])},re(f.label),11,mm))),128)),C("a",{href:"#iletisim",class:"bg-primary text-white px-5 py-2 rounded-lg font-label-md text-center glow-button",onClick:c[4]||(c[4]=kr(f=>{o("iletisim"),a.value=!1},["prevent"]))},re(ve(t)("nav.cta")),1)])):yo("",!0)]),_:1})]))}},_m=sl(gm,[["__scopeId","data-v-eaaecda8"]]);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ol="161",vm=0,rc=1,xm=2,Wf=1,Sm=2,Hn=3,mi=0,$t=1,$n=2,fi=0,pr=1,sc=2,oc=3,ac=4,ym=5,Di=100,Mm=101,bm=102,lc=103,cc=104,Em=200,Tm=201,Am=202,wm=203,Na=204,Fa=205,Rm=206,Cm=207,Lm=208,Pm=209,Dm=210,Um=211,Im=212,Nm=213,Fm=214,Om=0,Bm=1,zm=2,no=3,km=4,Hm=5,Gm=6,Vm=7,Xf=0,Wm=1,Xm=2,di=0,$m=1,qm=2,jm=3,Ym=4,Km=5,Zm=6,$f=300,xr=301,Sr=302,Oa=303,Ba=304,bo=306,za=1e3,pn=1001,ka=1002,Ot=1003,uc=1004,Dr=1005,Vt=1006,Xo=1007,Ii=1008,hi=1009,Jm=1010,Qm=1011,al=1012,qf=1013,ui=1014,qn=1015,is=1016,jf=1017,Yf=1018,Bi=1020,eg=1021,mn=1023,tg=1024,ng=1025,zi=1026,yr=1027,ig=1028,Kf=1029,rg=1030,Zf=1031,Jf=1033,$o=33776,qo=33777,jo=33778,Yo=33779,fc=35840,dc=35841,hc=35842,pc=35843,Qf=36196,mc=37492,gc=37496,_c=37808,vc=37809,xc=37810,Sc=37811,yc=37812,Mc=37813,bc=37814,Ec=37815,Tc=37816,Ac=37817,wc=37818,Rc=37819,Cc=37820,Lc=37821,Ko=36492,Pc=36494,Dc=36495,sg=36283,Uc=36284,Ic=36285,Nc=36286,ed=3e3,ki=3001,og=3200,ag=3201,td=0,lg=1,an="",At="srgb",Qn="srgb-linear",ll="display-p3",Eo="display-p3-linear",io="linear",ft="srgb",ro="rec709",so="p3",Xi=7680,Fc=519,cg=512,ug=513,fg=514,nd=515,dg=516,hg=517,pg=518,mg=519,Oc=35044,Bc="300 es",Ha=1035,jn=2e3,oo=2001;class Tr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Lt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zo=Math.PI/180,Ga=180/Math.PI;function us(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Lt[n&255]+Lt[n>>8&255]+Lt[n>>16&255]+Lt[n>>24&255]+"-"+Lt[e&255]+Lt[e>>8&255]+"-"+Lt[e>>16&15|64]+Lt[e>>24&255]+"-"+Lt[t&63|128]+Lt[t>>8&255]+"-"+Lt[t>>16&255]+Lt[t>>24&255]+Lt[i&255]+Lt[i>>8&255]+Lt[i>>16&255]+Lt[i>>24&255]).toLowerCase()}function Wt(n,e,t){return Math.max(e,Math.min(t,n))}function gg(n,e){return(n%e+e)%e}function Jo(n,e,t){return(1-t)*n+t*e}function zc(n){return(n&n-1)===0&&n!==0}function Va(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Ur(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ht(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Ye{constructor(e=0,t=0){Ye.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Wt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $e{constructor(e,t,i,r,s,a,o,l,u){$e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,u)}set(e,t,i,r,s,a,o,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=o,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=a,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],u=i[1],c=i[4],f=i[7],d=i[2],m=i[5],y=i[8],M=r[0],p=r[3],h=r[6],E=r[1],S=r[4],b=r[7],D=r[2],P=r[5],L=r[8];return s[0]=a*M+o*E+l*D,s[3]=a*p+o*S+l*P,s[6]=a*h+o*b+l*L,s[1]=u*M+c*E+f*D,s[4]=u*p+c*S+f*P,s[7]=u*h+c*b+f*L,s[2]=d*M+m*E+y*D,s[5]=d*p+m*S+y*P,s[8]=d*h+m*b+y*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8];return t*a*c-t*o*u-i*s*c+i*o*l+r*s*u-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8],f=c*a-o*u,d=o*l-c*s,m=u*s-a*l,y=t*f+i*d+r*m;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/y;return e[0]=f*M,e[1]=(r*u-c*i)*M,e[2]=(o*i-r*a)*M,e[3]=d*M,e[4]=(c*t-r*l)*M,e[5]=(r*s-o*t)*M,e[6]=m*M,e[7]=(i*l-u*t)*M,e[8]=(a*t-i*s)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*a+u*o)+a+e,-r*u,r*l,-r*(-u*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Qo.makeScale(e,t)),this}rotate(e){return this.premultiply(Qo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Qo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Qo=new $e;function id(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ao(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function _g(){const n=ao("canvas");return n.style.display="block",n}const kc={};function mr(n){n in kc||(kc[n]=!0,console.warn(n))}const Hc=new $e().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Gc=new $e().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ss={[Qn]:{transfer:io,primaries:ro,toReference:n=>n,fromReference:n=>n},[At]:{transfer:ft,primaries:ro,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Eo]:{transfer:io,primaries:so,toReference:n=>n.applyMatrix3(Gc),fromReference:n=>n.applyMatrix3(Hc)},[ll]:{transfer:ft,primaries:so,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Gc),fromReference:n=>n.applyMatrix3(Hc).convertLinearToSRGB()}},vg=new Set([Qn,Eo]),rt={enabled:!0,_workingColorSpace:Qn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!vg.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Ss[e].toReference,r=Ss[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Ss[n].primaries},getTransfer:function(n){return n===an?io:Ss[n].transfer}};function gr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ea(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let $i;class rd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{$i===void 0&&($i=ao("canvas")),$i.width=e.width,$i.height=e.height;const i=$i.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=$i}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ao("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=gr(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(gr(t[i]/255)*255):t[i]=gr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let xg=0;class sd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xg++}),this.uuid=us(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(ta(r[a].image)):s.push(ta(r[a]))}else s=ta(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function ta(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?rd.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Sg=0;class qt extends Tr{constructor(e=qt.DEFAULT_IMAGE,t=qt.DEFAULT_MAPPING,i=pn,r=pn,s=Vt,a=Ii,o=mn,l=hi,u=qt.DEFAULT_ANISOTROPY,c=an){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sg++}),this.uuid=us(),this.name="",this.source=new sd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ye(0,0),this.repeat=new Ye(1,1),this.center=new Ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(mr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===ki?At:an),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$f)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case za:e.x=e.x-Math.floor(e.x);break;case pn:e.x=e.x<0?0:1;break;case ka:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case za:e.y=e.y-Math.floor(e.y);break;case pn:e.y=e.y<0?0:1;break;case ka:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return mr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===At?ki:ed}set encoding(e){mr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ki?At:an}}qt.DEFAULT_IMAGE=null;qt.DEFAULT_MAPPING=$f;qt.DEFAULT_ANISOTROPY=1;class wt{constructor(e=0,t=0,i=0,r=1){wt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],f=l[8],d=l[1],m=l[5],y=l[9],M=l[2],p=l[6],h=l[10];if(Math.abs(c-d)<.01&&Math.abs(f-M)<.01&&Math.abs(y-p)<.01){if(Math.abs(c+d)<.1&&Math.abs(f+M)<.1&&Math.abs(y+p)<.1&&Math.abs(u+m+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(u+1)/2,b=(m+1)/2,D=(h+1)/2,P=(c+d)/4,L=(f+M)/4,q=(y+p)/4;return S>b&&S>D?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=P/i,s=L/i):b>D?b<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),i=P/r,s=q/r):D<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(D),i=L/s,r=q/s),this.set(i,r,s,t),this}let E=Math.sqrt((p-y)*(p-y)+(f-M)*(f-M)+(d-c)*(d-c));return Math.abs(E)<.001&&(E=1),this.x=(p-y)/E,this.y=(f-M)/E,this.z=(d-c)/E,this.w=Math.acos((u+m+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yg extends Tr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new wt(0,0,e,t),this.scissorTest=!1,this.viewport=new wt(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(mr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===ki?At:an),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new qt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new sd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gi extends yg{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class od extends qt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mg extends qt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fs{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3];const d=s[a+0],m=s[a+1],y=s[a+2],M=s[a+3];if(o===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f;return}if(o===1){e[t+0]=d,e[t+1]=m,e[t+2]=y,e[t+3]=M;return}if(f!==M||l!==d||u!==m||c!==y){let p=1-o;const h=l*d+u*m+c*y+f*M,E=h>=0?1:-1,S=1-h*h;if(S>Number.EPSILON){const D=Math.sqrt(S),P=Math.atan2(D,h*E);p=Math.sin(p*P)/D,o=Math.sin(o*P)/D}const b=o*E;if(l=l*p+d*b,u=u*p+m*b,c=c*p+y*b,f=f*p+M*b,p===1-o){const D=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=D,u*=D,c*=D,f*=D}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=s[a],d=s[a+1],m=s[a+2],y=s[a+3];return e[t]=o*y+c*f+l*m-u*d,e[t+1]=l*y+c*d+u*f-o*m,e[t+2]=u*y+c*m+o*d-l*f,e[t+3]=c*y-o*f-l*d-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,u=o(i/2),c=o(r/2),f=o(s/2),d=l(i/2),m=l(r/2),y=l(s/2);switch(a){case"XYZ":this._x=d*c*f+u*m*y,this._y=u*m*f-d*c*y,this._z=u*c*y+d*m*f,this._w=u*c*f-d*m*y;break;case"YXZ":this._x=d*c*f+u*m*y,this._y=u*m*f-d*c*y,this._z=u*c*y-d*m*f,this._w=u*c*f+d*m*y;break;case"ZXY":this._x=d*c*f-u*m*y,this._y=u*m*f+d*c*y,this._z=u*c*y+d*m*f,this._w=u*c*f-d*m*y;break;case"ZYX":this._x=d*c*f-u*m*y,this._y=u*m*f+d*c*y,this._z=u*c*y-d*m*f,this._w=u*c*f+d*m*y;break;case"YZX":this._x=d*c*f+u*m*y,this._y=u*m*f+d*c*y,this._z=u*c*y-d*m*f,this._w=u*c*f-d*m*y;break;case"XZY":this._x=d*c*f-u*m*y,this._y=u*m*f-d*c*y,this._z=u*c*y+d*m*f,this._w=u*c*f+d*m*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],u=t[2],c=t[6],f=t[10],d=i+o+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(c-l)*m,this._y=(s-u)*m,this._z=(a-r)*m}else if(i>o&&i>f){const m=2*Math.sqrt(1+i-o-f);this._w=(c-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+u)/m}else if(o>f){const m=2*Math.sqrt(1+o-i-f);this._w=(s-u)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+c)/m}else{const m=2*Math.sqrt(1+f-i-o);this._w=(a-r)/m,this._x=(s+u)/m,this._y=(l+c)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Wt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+a*o+r*u-s*l,this._y=r*c+a*l+s*o-i*u,this._z=s*c+a*u+i*l-r*o,this._w=a*c-i*o-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,o),f=Math.sin((1-t)*c)/u,d=Math.sin(t*c)/u;return this._w=a*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,t=0,i=0){H.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Vc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Vc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,u=2*(a*r-o*i),c=2*(o*t-s*r),f=2*(s*i-a*t);return this.x=t+l*u+a*f-o*c,this.y=i+l*c+o*u-s*f,this.z=r+l*f+s*c-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return na.copy(this).projectOnVector(e),this.sub(na)}reflect(e){return this.sub(na.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Wt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const na=new H,Vc=new fs;class ds{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(fn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(fn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=fn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,fn):fn.fromBufferAttribute(s,a),fn.applyMatrix4(e.matrixWorld),this.expandByPoint(fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ys.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ys.copy(i.boundingBox)),ys.applyMatrix4(e.matrixWorld),this.union(ys)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,fn),fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ir),Ms.subVectors(this.max,Ir),qi.subVectors(e.a,Ir),ji.subVectors(e.b,Ir),Yi.subVectors(e.c,Ir),ni.subVectors(ji,qi),ii.subVectors(Yi,ji),Ei.subVectors(qi,Yi);let t=[0,-ni.z,ni.y,0,-ii.z,ii.y,0,-Ei.z,Ei.y,ni.z,0,-ni.x,ii.z,0,-ii.x,Ei.z,0,-Ei.x,-ni.y,ni.x,0,-ii.y,ii.x,0,-Ei.y,Ei.x,0];return!ia(t,qi,ji,Yi,Ms)||(t=[1,0,0,0,1,0,0,0,1],!ia(t,qi,ji,Yi,Ms))?!1:(bs.crossVectors(ni,ii),t=[bs.x,bs.y,bs.z],ia(t,qi,ji,Yi,Ms))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Fn=[new H,new H,new H,new H,new H,new H,new H,new H],fn=new H,ys=new ds,qi=new H,ji=new H,Yi=new H,ni=new H,ii=new H,Ei=new H,Ir=new H,Ms=new H,bs=new H,Ti=new H;function ia(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Ti.fromArray(n,s);const o=r.x*Math.abs(Ti.x)+r.y*Math.abs(Ti.y)+r.z*Math.abs(Ti.z),l=e.dot(Ti),u=t.dot(Ti),c=i.dot(Ti);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>o)return!1}return!0}const bg=new ds,Nr=new H,ra=new H;class cl{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):bg.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Nr.subVectors(e,this.center);const t=Nr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Nr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ra.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Nr.copy(e.center).add(ra)),this.expandByPoint(Nr.copy(e.center).sub(ra))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const On=new H,sa=new H,Es=new H,ri=new H,oa=new H,Ts=new H,aa=new H;class Eg{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,On)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=On.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(On.copy(this.origin).addScaledVector(this.direction,t),On.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){sa.copy(e).add(t).multiplyScalar(.5),Es.copy(t).sub(e).normalize(),ri.copy(this.origin).sub(sa);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Es),o=ri.dot(this.direction),l=-ri.dot(Es),u=ri.lengthSq(),c=Math.abs(1-a*a);let f,d,m,y;if(c>0)if(f=a*l-o,d=a*o-l,y=s*c,f>=0)if(d>=-y)if(d<=y){const M=1/c;f*=M,d*=M,m=f*(f+a*d+2*o)+d*(a*f+d+2*l)+u}else d=s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+u;else d=-s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+u;else d<=-y?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+u):d<=y?(f=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+u):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+u);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(sa).addScaledVector(Es,d),m}intersectSphere(e,t){On.subVectors(e.center,this.origin);const i=On.dot(this.direction),r=On.dot(On)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),c>=0?(s=(e.min.y-d.y)*c,a=(e.max.y-d.y)*c):(s=(e.max.y-d.y)*c,a=(e.min.y-d.y)*c),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,On)!==null}intersectTriangle(e,t,i,r,s){oa.subVectors(t,e),Ts.subVectors(i,e),aa.crossVectors(oa,Ts);let a=this.direction.dot(aa),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ri.subVectors(this.origin,e);const l=o*this.direction.dot(Ts.crossVectors(ri,Ts));if(l<0)return null;const u=o*this.direction.dot(oa.cross(ri));if(u<0||l+u>a)return null;const c=-o*ri.dot(aa);return c<0?null:this.at(c/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Rt{constructor(e,t,i,r,s,a,o,l,u,c,f,d,m,y,M,p){Rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,u,c,f,d,m,y,M,p)}set(e,t,i,r,s,a,o,l,u,c,f,d,m,y,M,p){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=l,h[2]=u,h[6]=c,h[10]=f,h[14]=d,h[3]=m,h[7]=y,h[11]=M,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Rt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Ki.setFromMatrixColumn(e,0).length(),s=1/Ki.setFromMatrixColumn(e,1).length(),a=1/Ki.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=a*c,m=a*f,y=o*c,M=o*f;t[0]=l*c,t[4]=-l*f,t[8]=u,t[1]=m+y*u,t[5]=d-M*u,t[9]=-o*l,t[2]=M-d*u,t[6]=y+m*u,t[10]=a*l}else if(e.order==="YXZ"){const d=l*c,m=l*f,y=u*c,M=u*f;t[0]=d+M*o,t[4]=y*o-m,t[8]=a*u,t[1]=a*f,t[5]=a*c,t[9]=-o,t[2]=m*o-y,t[6]=M+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*c,m=l*f,y=u*c,M=u*f;t[0]=d-M*o,t[4]=-a*f,t[8]=y+m*o,t[1]=m+y*o,t[5]=a*c,t[9]=M-d*o,t[2]=-a*u,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*c,m=a*f,y=o*c,M=o*f;t[0]=l*c,t[4]=y*u-m,t[8]=d*u+M,t[1]=l*f,t[5]=M*u+d,t[9]=m*u-y,t[2]=-u,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,m=a*u,y=o*l,M=o*u;t[0]=l*c,t[4]=M-d*f,t[8]=y*f+m,t[1]=f,t[5]=a*c,t[9]=-o*c,t[2]=-u*c,t[6]=m*f+y,t[10]=d-M*f}else if(e.order==="XZY"){const d=a*l,m=a*u,y=o*l,M=o*u;t[0]=l*c,t[4]=-f,t[8]=u*c,t[1]=d*f+M,t[5]=a*c,t[9]=m*f-y,t[2]=y*f-m,t[6]=o*c,t[10]=M*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Tg,e,Ag)}lookAt(e,t,i){const r=this.elements;return Yt.subVectors(e,t),Yt.lengthSq()===0&&(Yt.z=1),Yt.normalize(),si.crossVectors(i,Yt),si.lengthSq()===0&&(Math.abs(i.z)===1?Yt.x+=1e-4:Yt.z+=1e-4,Yt.normalize(),si.crossVectors(i,Yt)),si.normalize(),As.crossVectors(Yt,si),r[0]=si.x,r[4]=As.x,r[8]=Yt.x,r[1]=si.y,r[5]=As.y,r[9]=Yt.y,r[2]=si.z,r[6]=As.z,r[10]=Yt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],u=i[12],c=i[1],f=i[5],d=i[9],m=i[13],y=i[2],M=i[6],p=i[10],h=i[14],E=i[3],S=i[7],b=i[11],D=i[15],P=r[0],L=r[4],q=r[8],K=r[12],v=r[1],A=r[5],F=r[9],ne=r[13],I=r[2],Z=r[6],k=r[10],ee=r[14],j=r[3],se=r[7],le=r[11],ue=r[15];return s[0]=a*P+o*v+l*I+u*j,s[4]=a*L+o*A+l*Z+u*se,s[8]=a*q+o*F+l*k+u*le,s[12]=a*K+o*ne+l*ee+u*ue,s[1]=c*P+f*v+d*I+m*j,s[5]=c*L+f*A+d*Z+m*se,s[9]=c*q+f*F+d*k+m*le,s[13]=c*K+f*ne+d*ee+m*ue,s[2]=y*P+M*v+p*I+h*j,s[6]=y*L+M*A+p*Z+h*se,s[10]=y*q+M*F+p*k+h*le,s[14]=y*K+M*ne+p*ee+h*ue,s[3]=E*P+S*v+b*I+D*j,s[7]=E*L+S*A+b*Z+D*se,s[11]=E*q+S*F+b*k+D*le,s[15]=E*K+S*ne+b*ee+D*ue,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],u=e[13],c=e[2],f=e[6],d=e[10],m=e[14],y=e[3],M=e[7],p=e[11],h=e[15];return y*(+s*l*f-r*u*f-s*o*d+i*u*d+r*o*m-i*l*m)+M*(+t*l*m-t*u*d+s*a*d-r*a*m+r*u*c-s*l*c)+p*(+t*u*f-t*o*m-s*a*f+i*a*m+s*o*c-i*u*c)+h*(-r*o*c-t*l*f+t*o*d+r*a*f-i*a*d+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8],f=e[9],d=e[10],m=e[11],y=e[12],M=e[13],p=e[14],h=e[15],E=f*p*u-M*d*u+M*l*m-o*p*m-f*l*h+o*d*h,S=y*d*u-c*p*u-y*l*m+a*p*m+c*l*h-a*d*h,b=c*M*u-y*f*u+y*o*m-a*M*m-c*o*h+a*f*h,D=y*f*l-c*M*l-y*o*d+a*M*d+c*o*p-a*f*p,P=t*E+i*S+r*b+s*D;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/P;return e[0]=E*L,e[1]=(M*d*s-f*p*s-M*r*m+i*p*m+f*r*h-i*d*h)*L,e[2]=(o*p*s-M*l*s+M*r*u-i*p*u-o*r*h+i*l*h)*L,e[3]=(f*l*s-o*d*s-f*r*u+i*d*u+o*r*m-i*l*m)*L,e[4]=S*L,e[5]=(c*p*s-y*d*s+y*r*m-t*p*m-c*r*h+t*d*h)*L,e[6]=(y*l*s-a*p*s-y*r*u+t*p*u+a*r*h-t*l*h)*L,e[7]=(a*d*s-c*l*s+c*r*u-t*d*u-a*r*m+t*l*m)*L,e[8]=b*L,e[9]=(y*f*s-c*M*s-y*i*m+t*M*m+c*i*h-t*f*h)*L,e[10]=(a*M*s-y*o*s+y*i*u-t*M*u-a*i*h+t*o*h)*L,e[11]=(c*o*s-a*f*s-c*i*u+t*f*u+a*i*m-t*o*m)*L,e[12]=D*L,e[13]=(c*M*r-y*f*r+y*i*d-t*M*d-c*i*p+t*f*p)*L,e[14]=(y*o*r-a*M*r-y*i*l+t*M*l+a*i*p-t*o*p)*L,e[15]=(a*f*r-c*o*r+c*i*l-t*f*l-a*i*d+t*o*d)*L,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,u=s*a,c=s*o;return this.set(u*a+i,u*o-r*l,u*l+r*o,0,u*o+r*l,c*o+i,c*l-r*a,0,u*l-r*o,c*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,u=s+s,c=a+a,f=o+o,d=s*u,m=s*c,y=s*f,M=a*c,p=a*f,h=o*f,E=l*u,S=l*c,b=l*f,D=i.x,P=i.y,L=i.z;return r[0]=(1-(M+h))*D,r[1]=(m+b)*D,r[2]=(y-S)*D,r[3]=0,r[4]=(m-b)*P,r[5]=(1-(d+h))*P,r[6]=(p+E)*P,r[7]=0,r[8]=(y+S)*L,r[9]=(p-E)*L,r[10]=(1-(d+M))*L,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Ki.set(r[0],r[1],r[2]).length();const a=Ki.set(r[4],r[5],r[6]).length(),o=Ki.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],dn.copy(this);const u=1/s,c=1/a,f=1/o;return dn.elements[0]*=u,dn.elements[1]*=u,dn.elements[2]*=u,dn.elements[4]*=c,dn.elements[5]*=c,dn.elements[6]*=c,dn.elements[8]*=f,dn.elements[9]*=f,dn.elements[10]*=f,t.setFromRotationMatrix(dn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=jn){const l=this.elements,u=2*s/(t-e),c=2*s/(i-r),f=(t+e)/(t-e),d=(i+r)/(i-r);let m,y;if(o===jn)m=-(a+s)/(a-s),y=-2*a*s/(a-s);else if(o===oo)m=-a/(a-s),y=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=c,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=jn){const l=this.elements,u=1/(t-e),c=1/(i-r),f=1/(a-s),d=(t+e)*u,m=(i+r)*c;let y,M;if(o===jn)y=(a+s)*f,M=-2*f;else if(o===oo)y=s*f,M=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=M,l[14]=-y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ki=new H,dn=new Rt,Tg=new H(0,0,0),Ag=new H(1,1,1),si=new H,As=new H,Yt=new H,Wc=new Rt,Xc=new fs;class To{constructor(e=0,t=0,i=0,r=To.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],u=r[5],c=r[9],f=r[2],d=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Wt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Wt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Wt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-c,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Wc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Xc.setFromEuler(this),this.setFromQuaternion(Xc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}To.DEFAULT_ORDER="XYZ";class ad{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let wg=0;const $c=new H,Zi=new fs,Bn=new Rt,ws=new H,Fr=new H,Rg=new H,Cg=new fs,qc=new H(1,0,0),jc=new H(0,1,0),Yc=new H(0,0,1),Lg={type:"added"},Pg={type:"removed"};class Qt extends Tr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wg++}),this.uuid=us(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Qt.DEFAULT_UP.clone();const e=new H,t=new To,i=new fs,r=new H(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Rt},normalMatrix:{value:new $e}}),this.matrix=new Rt,this.matrixWorld=new Rt,this.matrixAutoUpdate=Qt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ad,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zi.setFromAxisAngle(e,t),this.quaternion.multiply(Zi),this}rotateOnWorldAxis(e,t){return Zi.setFromAxisAngle(e,t),this.quaternion.premultiply(Zi),this}rotateX(e){return this.rotateOnAxis(qc,e)}rotateY(e){return this.rotateOnAxis(jc,e)}rotateZ(e){return this.rotateOnAxis(Yc,e)}translateOnAxis(e,t){return $c.copy(e).applyQuaternion(this.quaternion),this.position.add($c.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(qc,e)}translateY(e){return this.translateOnAxis(jc,e)}translateZ(e){return this.translateOnAxis(Yc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ws.copy(e):ws.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Fr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bn.lookAt(Fr,ws,this.up):Bn.lookAt(ws,Fr,this.up),this.quaternion.setFromRotationMatrix(Bn),r&&(Bn.extractRotation(r.matrixWorld),Zi.setFromRotationMatrix(Bn),this.quaternion.premultiply(Zi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Lg)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Pg)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Bn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fr,e,Rg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fr,Cg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),u=a(e.textures),c=a(e.images),f=a(e.shapes),d=a(e.skeletons),m=a(e.animations),y=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),y.length>0&&(i.nodes=y)}return i.object=r,i;function a(o){const l=[];for(const u in o){const c=o[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Qt.DEFAULT_UP=new H(0,1,0);Qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hn=new H,zn=new H,la=new H,kn=new H,Ji=new H,Qi=new H,Kc=new H,ca=new H,ua=new H,fa=new H;class Rn{constructor(e=new H,t=new H,i=new H){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),hn.subVectors(e,t),r.cross(hn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){hn.subVectors(r,t),zn.subVectors(i,t),la.subVectors(e,t);const a=hn.dot(hn),o=hn.dot(zn),l=hn.dot(la),u=zn.dot(zn),c=zn.dot(la),f=a*u-o*o;if(f===0)return s.set(0,0,0),null;const d=1/f,m=(u*l-o*c)*d,y=(a*c-o*l)*d;return s.set(1-m-y,y,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,kn)===null?!1:kn.x>=0&&kn.y>=0&&kn.x+kn.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,kn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,kn.x),l.addScaledVector(a,kn.y),l.addScaledVector(o,kn.z),l)}static isFrontFacing(e,t,i,r){return hn.subVectors(i,t),zn.subVectors(e,t),hn.cross(zn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hn.subVectors(this.c,this.b),zn.subVectors(this.a,this.b),hn.cross(zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Rn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Rn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Rn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Rn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Rn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Ji.subVectors(r,i),Qi.subVectors(s,i),ca.subVectors(e,i);const l=Ji.dot(ca),u=Qi.dot(ca);if(l<=0&&u<=0)return t.copy(i);ua.subVectors(e,r);const c=Ji.dot(ua),f=Qi.dot(ua);if(c>=0&&f<=c)return t.copy(r);const d=l*f-c*u;if(d<=0&&l>=0&&c<=0)return a=l/(l-c),t.copy(i).addScaledVector(Ji,a);fa.subVectors(e,s);const m=Ji.dot(fa),y=Qi.dot(fa);if(y>=0&&m<=y)return t.copy(s);const M=m*u-l*y;if(M<=0&&u>=0&&y<=0)return o=u/(u-y),t.copy(i).addScaledVector(Qi,o);const p=c*y-m*f;if(p<=0&&f-c>=0&&m-y>=0)return Kc.subVectors(s,r),o=(f-c)/(f-c+(m-y)),t.copy(r).addScaledVector(Kc,o);const h=1/(p+M+d);return a=M*h,o=d*h,t.copy(i).addScaledVector(Ji,a).addScaledVector(Qi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ld={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},oi={h:0,s:0,l:0},Rs={h:0,s:0,l:0};function da(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class st{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=At){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=rt.workingColorSpace){return this.r=e,this.g=t,this.b=i,rt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=rt.workingColorSpace){if(e=gg(e,1),t=Wt(t,0,1),i=Wt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=da(a,s,e+1/3),this.g=da(a,s,e),this.b=da(a,s,e-1/3)}return rt.toWorkingColorSpace(this,r),this}setStyle(e,t=At){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=At){const i=ld[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=gr(e.r),this.g=gr(e.g),this.b=gr(e.b),this}copyLinearToSRGB(e){return this.r=ea(e.r),this.g=ea(e.g),this.b=ea(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=At){return rt.fromWorkingColorSpace(Pt.copy(this),e),Math.round(Wt(Pt.r*255,0,255))*65536+Math.round(Wt(Pt.g*255,0,255))*256+Math.round(Wt(Pt.b*255,0,255))}getHexString(e=At){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.fromWorkingColorSpace(Pt.copy(this),t);const i=Pt.r,r=Pt.g,s=Pt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,u;const c=(o+a)/2;if(o===a)l=0,u=0;else{const f=a-o;switch(u=c<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=rt.workingColorSpace){return rt.fromWorkingColorSpace(Pt.copy(this),t),e.r=Pt.r,e.g=Pt.g,e.b=Pt.b,e}getStyle(e=At){rt.fromWorkingColorSpace(Pt.copy(this),e);const t=Pt.r,i=Pt.g,r=Pt.b;return e!==At?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(oi),this.setHSL(oi.h+e,oi.s+t,oi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(oi),e.getHSL(Rs);const i=Jo(oi.h,Rs.h,t),r=Jo(oi.s,Rs.s,t),s=Jo(oi.l,Rs.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pt=new st;st.NAMES=ld;let Dg=0;class hs extends Tr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Dg++}),this.uuid=us(),this.name="",this.type="Material",this.blending=pr,this.side=mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Na,this.blendDst=Fa,this.blendEquation=Di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new st(0,0,0),this.blendAlpha=0,this.depthFunc=no,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xi,this.stencilZFail=Xi,this.stencilZPass=Xi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==pr&&(i.blending=this.blending),this.side!==mi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Na&&(i.blendSrc=this.blendSrc),this.blendDst!==Fa&&(i.blendDst=this.blendDst),this.blendEquation!==Di&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==no&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Xi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Xi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class cd extends hs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Xf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vt=new H,Cs=new Ye;class Ln{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Oc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=qn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return mr("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Cs.fromBufferAttribute(this,t),Cs.applyMatrix3(e),this.setXY(t,Cs.x,Cs.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix3(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ur(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ht(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ur(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ur(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ur(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ur(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),i=Ht(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),i=Ht(i,this.array),r=Ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),i=Ht(i,this.array),r=Ht(r,this.array),s=Ht(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Oc&&(e.usage=this.usage),e}}class ud extends Ln{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class fd extends Ln{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Pn extends Ln{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Ug=0;const rn=new Rt,ha=new Qt,er=new H,Kt=new ds,Or=new ds,Mt=new H;class _i extends Tr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ug++}),this.uuid=us(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(id(e)?fd:ud)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new $e().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return rn.makeRotationFromQuaternion(e),this.applyMatrix4(rn),this}rotateX(e){return rn.makeRotationX(e),this.applyMatrix4(rn),this}rotateY(e){return rn.makeRotationY(e),this.applyMatrix4(rn),this}rotateZ(e){return rn.makeRotationZ(e),this.applyMatrix4(rn),this}translate(e,t,i){return rn.makeTranslation(e,t,i),this.applyMatrix4(rn),this}scale(e,t,i){return rn.makeScale(e,t,i),this.applyMatrix4(rn),this}lookAt(e){return ha.lookAt(e),ha.updateMatrix(),this.applyMatrix4(ha.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(er).negate(),this.translate(er.x,er.y,er.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Pn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ds);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Kt.setFromBufferAttribute(s),this.morphTargetsRelative?(Mt.addVectors(this.boundingBox.min,Kt.min),this.boundingBox.expandByPoint(Mt),Mt.addVectors(this.boundingBox.max,Kt.max),this.boundingBox.expandByPoint(Mt)):(this.boundingBox.expandByPoint(Kt.min),this.boundingBox.expandByPoint(Kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(Kt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Or.setFromBufferAttribute(o),this.morphTargetsRelative?(Mt.addVectors(Kt.min,Or.min),Kt.expandByPoint(Mt),Mt.addVectors(Kt.max,Or.max),Kt.expandByPoint(Mt)):(Kt.expandByPoint(Or.min),Kt.expandByPoint(Or.max))}Kt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Mt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Mt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let u=0,c=o.count;u<c;u++)Mt.fromBufferAttribute(o,u),l&&(er.fromBufferAttribute(e,u),Mt.add(er)),r=Math.max(r,i.distanceToSquared(Mt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ln(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let v=0;v<o;v++)u[v]=new H,c[v]=new H;const f=new H,d=new H,m=new H,y=new Ye,M=new Ye,p=new Ye,h=new H,E=new H;function S(v,A,F){f.fromArray(r,v*3),d.fromArray(r,A*3),m.fromArray(r,F*3),y.fromArray(a,v*2),M.fromArray(a,A*2),p.fromArray(a,F*2),d.sub(f),m.sub(f),M.sub(y),p.sub(y);const ne=1/(M.x*p.y-p.x*M.y);isFinite(ne)&&(h.copy(d).multiplyScalar(p.y).addScaledVector(m,-M.y).multiplyScalar(ne),E.copy(m).multiplyScalar(M.x).addScaledVector(d,-p.x).multiplyScalar(ne),u[v].add(h),u[A].add(h),u[F].add(h),c[v].add(E),c[A].add(E),c[F].add(E))}let b=this.groups;b.length===0&&(b=[{start:0,count:i.length}]);for(let v=0,A=b.length;v<A;++v){const F=b[v],ne=F.start,I=F.count;for(let Z=ne,k=ne+I;Z<k;Z+=3)S(i[Z+0],i[Z+1],i[Z+2])}const D=new H,P=new H,L=new H,q=new H;function K(v){L.fromArray(s,v*3),q.copy(L);const A=u[v];D.copy(A),D.sub(L.multiplyScalar(L.dot(A))).normalize(),P.crossVectors(q,A);const ne=P.dot(c[v])<0?-1:1;l[v*4]=D.x,l[v*4+1]=D.y,l[v*4+2]=D.z,l[v*4+3]=ne}for(let v=0,A=b.length;v<A;++v){const F=b[v],ne=F.start,I=F.count;for(let Z=ne,k=ne+I;Z<k;Z+=3)K(i[Z+0]),K(i[Z+1]),K(i[Z+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ln(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new H,s=new H,a=new H,o=new H,l=new H,u=new H,c=new H,f=new H;if(e)for(let d=0,m=e.count;d<m;d+=3){const y=e.getX(d+0),M=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(t,y),s.fromBufferAttribute(t,M),a.fromBufferAttribute(t,p),c.subVectors(a,s),f.subVectors(r,s),c.cross(f),o.fromBufferAttribute(i,y),l.fromBufferAttribute(i,M),u.fromBufferAttribute(i,p),o.add(c),l.add(c),u.add(c),i.setXYZ(y,o.x,o.y,o.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(p,u.x,u.y,u.z)}else for(let d=0,m=t.count;d<m;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),c.subVectors(a,s),f.subVectors(r,s),c.cross(f),i.setXYZ(d+0,c.x,c.y,c.z),i.setXYZ(d+1,c.x,c.y,c.z),i.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Mt.fromBufferAttribute(e,t),Mt.normalize(),e.setXYZ(t,Mt.x,Mt.y,Mt.z)}toNonIndexed(){function e(o,l){const u=o.array,c=o.itemSize,f=o.normalized,d=new u.constructor(l.length*c);let m=0,y=0;for(let M=0,p=l.length;M<p;M++){o.isInterleavedBufferAttribute?m=l[M]*o.data.stride+o.offset:m=l[M]*c;for(let h=0;h<c;h++)d[y++]=u[m++]}return new Ln(d,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new _i,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],u=e(l,i);t.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const l=[],u=s[o];for(let c=0,f=u.length;c<f;c++){const d=u[c],m=e(d,i);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const u=a[o];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,d=u.length;f<d;f++){const m=u[f];c.push(m.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],f=s[u];for(let d=0,m=f.length;d<m;d++)c.push(f[d].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,c=a.length;u<c;u++){const f=a[u];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Zc=new Rt,Ai=new Eg,Ls=new cl,Jc=new H,tr=new H,nr=new H,ir=new H,pa=new H,Ps=new H,Ds=new Ye,Us=new Ye,Is=new Ye,Qc=new H,eu=new H,tu=new H,Ns=new H,Fs=new H;class gn extends Qt{constructor(e=new _i,t=new cd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Ps.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=o[l],f=s[l];c!==0&&(pa.fromBufferAttribute(f,e),a?Ps.addScaledVector(pa,c):Ps.addScaledVector(pa.sub(t),c))}t.add(Ps)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ls.copy(i.boundingSphere),Ls.applyMatrix4(s),Ai.copy(e.ray).recast(e.near),!(Ls.containsPoint(Ai.origin)===!1&&(Ai.intersectSphere(Ls,Jc)===null||Ai.origin.distanceToSquared(Jc)>(e.far-e.near)**2))&&(Zc.copy(s).invert(),Ai.copy(e.ray).applyMatrix4(Zc),!(i.boundingBox!==null&&Ai.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ai)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,f=s.attributes.normal,d=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let y=0,M=d.length;y<M;y++){const p=d[y],h=a[p.materialIndex],E=Math.max(p.start,m.start),S=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let b=E,D=S;b<D;b+=3){const P=o.getX(b),L=o.getX(b+1),q=o.getX(b+2);r=Os(this,h,e,i,u,c,f,P,L,q),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const y=Math.max(0,m.start),M=Math.min(o.count,m.start+m.count);for(let p=y,h=M;p<h;p+=3){const E=o.getX(p),S=o.getX(p+1),b=o.getX(p+2);r=Os(this,a,e,i,u,c,f,E,S,b),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let y=0,M=d.length;y<M;y++){const p=d[y],h=a[p.materialIndex],E=Math.max(p.start,m.start),S=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let b=E,D=S;b<D;b+=3){const P=b,L=b+1,q=b+2;r=Os(this,h,e,i,u,c,f,P,L,q),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const y=Math.max(0,m.start),M=Math.min(l.count,m.start+m.count);for(let p=y,h=M;p<h;p+=3){const E=p,S=p+1,b=p+2;r=Os(this,a,e,i,u,c,f,E,S,b),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function Ig(n,e,t,i,r,s,a,o){let l;if(e.side===$t?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===mi,o),l===null)return null;Fs.copy(o),Fs.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(Fs);return u<t.near||u>t.far?null:{distance:u,point:Fs.clone(),object:n}}function Os(n,e,t,i,r,s,a,o,l,u){n.getVertexPosition(o,tr),n.getVertexPosition(l,nr),n.getVertexPosition(u,ir);const c=Ig(n,e,t,i,tr,nr,ir,Ns);if(c){r&&(Ds.fromBufferAttribute(r,o),Us.fromBufferAttribute(r,l),Is.fromBufferAttribute(r,u),c.uv=Rn.getInterpolation(Ns,tr,nr,ir,Ds,Us,Is,new Ye)),s&&(Ds.fromBufferAttribute(s,o),Us.fromBufferAttribute(s,l),Is.fromBufferAttribute(s,u),c.uv1=Rn.getInterpolation(Ns,tr,nr,ir,Ds,Us,Is,new Ye),c.uv2=c.uv1),a&&(Qc.fromBufferAttribute(a,o),eu.fromBufferAttribute(a,l),tu.fromBufferAttribute(a,u),c.normal=Rn.getInterpolation(Ns,tr,nr,ir,Qc,eu,tu,new H),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const f={a:o,b:l,c:u,normal:new H,materialIndex:0};Rn.getNormal(tr,nr,ir,f.normal),c.face=f}return c}class ps extends _i{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],u=[],c=[],f=[];let d=0,m=0;y("z","y","x",-1,-1,i,t,e,a,s,0),y("z","y","x",1,-1,i,t,-e,a,s,1),y("x","z","y",1,1,e,i,t,r,a,2),y("x","z","y",1,-1,e,i,-t,r,a,3),y("x","y","z",1,-1,e,t,i,r,s,4),y("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Pn(u,3)),this.setAttribute("normal",new Pn(c,3)),this.setAttribute("uv",new Pn(f,2));function y(M,p,h,E,S,b,D,P,L,q,K){const v=b/L,A=D/q,F=b/2,ne=D/2,I=P/2,Z=L+1,k=q+1;let ee=0,j=0;const se=new H;for(let le=0;le<k;le++){const ue=le*A-ne;for(let de=0;de<Z;de++){const Fe=de*v-F;se[M]=Fe*E,se[p]=ue*S,se[h]=I,u.push(se.x,se.y,se.z),se[M]=0,se[p]=0,se[h]=P>0?1:-1,c.push(se.x,se.y,se.z),f.push(de/L),f.push(1-le/q),ee+=1}}for(let le=0;le<q;le++)for(let ue=0;ue<L;ue++){const de=d+ue+Z*le,Fe=d+ue+Z*(le+1),J=d+(ue+1)+Z*(le+1),ce=d+(ue+1)+Z*le;l.push(de,Fe,ce),l.push(Fe,J,ce),j+=6}o.addGroup(m,j,K),m+=j,d+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ps(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Mr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Ft(n){const e={};for(let t=0;t<n.length;t++){const i=Mr(n[t]);for(const r in i)e[r]=i[r]}return e}function Ng(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function dd(n){return n.getRenderTarget()===null?n.outputColorSpace:rt.workingColorSpace}const Fg={clone:Mr,merge:Ft};var Og=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gi extends hs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Og,this.fragmentShader=Bg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Mr(e.uniforms),this.uniformsGroups=Ng(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class hd extends Qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Rt,this.projectionMatrix=new Rt,this.projectionMatrixInverse=new Rt,this.coordinateSystem=jn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ai=new H,nu=new Ye,iu=new Ye;class on extends hd{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ga*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Zo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ga*2*Math.atan(Math.tan(Zo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ai.x,ai.y).multiplyScalar(-e/ai.z),ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ai.x,ai.y).multiplyScalar(-e/ai.z)}getViewSize(e,t){return this.getViewBounds(e,nu,iu),t.subVectors(iu,nu)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Zo*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/u,r*=a.width/l,i*=a.height/u}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const rr=-90,sr=1;class zg extends Qt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new on(rr,sr,e,t);r.layers=this.layers,this.add(r);const s=new on(rr,sr,e,t);s.layers=this.layers,this.add(s);const a=new on(rr,sr,e,t);a.layers=this.layers,this.add(a);const o=new on(rr,sr,e,t);o.layers=this.layers,this.add(o);const l=new on(rr,sr,e,t);l.layers=this.layers,this.add(l);const u=new on(rr,sr,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const u of t)this.remove(u);if(e===jn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===oo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,u,c]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,u),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,r),e.render(t,c),e.setRenderTarget(f,d,m),e.xr.enabled=y,i.texture.needsPMREMUpdate=!0}}class pd extends qt{constructor(e,t,i,r,s,a,o,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:xr,super(e,t,i,r,s,a,o,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class kg extends Gi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(mr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ki?At:an),this.texture=new pd(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Vt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ps(5,5,5),s=new gi({name:"CubemapFromEquirect",uniforms:Mr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:$t,blending:fi});s.uniforms.tEquirect.value=t;const a=new gn(r,s),o=t.minFilter;return t.minFilter===Ii&&(t.minFilter=Vt),new zg(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const ma=new H,Hg=new H,Gg=new $e;class Ci{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=ma.subVectors(i,t).cross(Hg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ma),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Gg.getNormalMatrix(e),r=this.coplanarPoint(ma).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const wi=new cl,Bs=new H;class md{constructor(e=new Ci,t=new Ci,i=new Ci,r=new Ci,s=new Ci,a=new Ci){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=jn){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],u=r[4],c=r[5],f=r[6],d=r[7],m=r[8],y=r[9],M=r[10],p=r[11],h=r[12],E=r[13],S=r[14],b=r[15];if(i[0].setComponents(l-s,d-u,p-m,b-h).normalize(),i[1].setComponents(l+s,d+u,p+m,b+h).normalize(),i[2].setComponents(l+a,d+c,p+y,b+E).normalize(),i[3].setComponents(l-a,d-c,p-y,b-E).normalize(),i[4].setComponents(l-o,d-f,p-M,b-S).normalize(),t===jn)i[5].setComponents(l+o,d+f,p+M,b+S).normalize();else if(t===oo)i[5].setComponents(o,f,M,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),wi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),wi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(wi)}intersectsSprite(e){return wi.center.set(0,0,0),wi.radius=.7071067811865476,wi.applyMatrix4(e.matrixWorld),this.intersectsSphere(wi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Bs.x=r.normal.x>0?e.max.x:e.min.x,Bs.y=r.normal.y>0?e.max.y:e.min.y,Bs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Bs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function gd(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Vg(n,e){const t=e.isWebGL2,i=new WeakMap;function r(u,c){const f=u.array,d=u.usage,m=f.byteLength,y=n.createBuffer();n.bindBuffer(c,y),n.bufferData(c,f,d),u.onUploadCallback();let M;if(f instanceof Float32Array)M=n.FLOAT;else if(f instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)M=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else M=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)M=n.SHORT;else if(f instanceof Uint32Array)M=n.UNSIGNED_INT;else if(f instanceof Int32Array)M=n.INT;else if(f instanceof Int8Array)M=n.BYTE;else if(f instanceof Uint8Array)M=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)M=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:y,type:M,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version,size:m}}function s(u,c,f){const d=c.array,m=c._updateRange,y=c.updateRanges;if(n.bindBuffer(f,u),m.count===-1&&y.length===0&&n.bufferSubData(f,0,d),y.length!==0){for(let M=0,p=y.length;M<p;M++){const h=y[M];t?n.bufferSubData(f,h.start*d.BYTES_PER_ELEMENT,d,h.start,h.count):n.bufferSubData(f,h.start*d.BYTES_PER_ELEMENT,d.subarray(h.start,h.start+h.count))}c.clearUpdateRanges()}m.count!==-1&&(t?n.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):n.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),c.onUploadCallback()}function a(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function o(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(n.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const d=i.get(u);(!d||d.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const f=i.get(u);if(f===void 0)i.set(u,r(u,c));else if(f.version<u.version){if(f.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,u,c),f.version=u.version}}return{get:a,remove:o,update:l}}class Ao extends _i{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),u=o+1,c=l+1,f=e/o,d=t/l,m=[],y=[],M=[],p=[];for(let h=0;h<c;h++){const E=h*d-a;for(let S=0;S<u;S++){const b=S*f-s;y.push(b,-E,0),M.push(0,0,1),p.push(S/o),p.push(1-h/l)}}for(let h=0;h<l;h++)for(let E=0;E<o;E++){const S=E+u*h,b=E+u*(h+1),D=E+1+u*(h+1),P=E+1+u*h;m.push(S,b,P),m.push(b,D,P)}this.setIndex(m),this.setAttribute("position",new Pn(y,3)),this.setAttribute("normal",new Pn(M,3)),this.setAttribute("uv",new Pn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ao(e.width,e.height,e.widthSegments,e.heightSegments)}}var Wg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xg=`#ifdef USE_ALPHAHASH
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
#endif`,$g=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Yg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kg=`#ifdef USE_AOMAP
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
#endif`,Zg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jg=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,Qg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,e_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,t_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,n_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,i_=`#ifdef USE_IRIDESCENCE
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
#endif`,r_=`#ifdef USE_BUMPMAP
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
#endif`,s_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,o_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,a_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,l_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,c_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,u_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,f_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,d_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,h_=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,p_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,m_=`vec3 transformedNormal = objectNormal;
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
#endif`,g_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,__=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,v_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,x_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,S_="gl_FragColor = linearToOutputTexel( gl_FragColor );",y_=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,M_=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,b_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,E_=`#ifdef USE_ENVMAP
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
#endif`,T_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,A_=`#ifdef USE_ENVMAP
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
#endif`,w_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,R_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,C_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,L_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,P_=`#ifdef USE_GRADIENTMAP
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
}`,D_=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,U_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,I_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,N_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,F_=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,O_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,B_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,z_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,k_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,H_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,G_=`PhysicalMaterial material;
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
#endif`,V_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
}`,W_=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,X_=`#if defined( RE_IndirectDiffuse )
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
#endif`,$_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,q_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,j_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Y_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,K_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Z_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,J_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Q_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ev=`#if defined( USE_POINTS_UV )
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
#endif`,tv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,iv=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,sv=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,ov=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,av=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,lv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,cv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dv=`#ifdef USE_NORMALMAP
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
#endif`,hv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_v=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,xv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ev=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Av=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,wv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Rv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Cv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Lv=`#ifdef USE_SKINNING
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
#endif`,Pv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Dv=`#ifdef USE_SKINNING
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
#endif`,Uv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Iv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Nv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fv=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ov=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Bv=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,zv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Vv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wv=`uniform sampler2D t2D;
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
}`,Xv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$v=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yv=`#include <common>
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
}`,Kv=`#if DEPTH_PACKING == 3200
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
	#endif
}`,Zv=`#define DISTANCE
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
}`,Jv=`#define DISTANCE
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
}`,Qv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ex=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tx=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nx=`uniform vec3 diffuse;
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
}`,ix=`#include <common>
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
}`,rx=`uniform vec3 diffuse;
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
}`,sx=`#define LAMBERT
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
}`,ox=`#define LAMBERT
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
}`,ax=`#define MATCAP
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
}`,lx=`#define MATCAP
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
}`,cx=`#define NORMAL
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
}`,ux=`#define NORMAL
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
}`,fx=`#define PHONG
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
}`,dx=`#define PHONG
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
}`,hx=`#define STANDARD
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
}`,px=`#define STANDARD
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
}`,mx=`#define TOON
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
}`,gx=`#define TOON
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
}`,_x=`uniform float size;
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
}`,vx=`uniform vec3 diffuse;
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
}`,xx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,Sx=`uniform vec3 color;
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
}`,yx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,Mx=`uniform vec3 diffuse;
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
}`,Ge={alphahash_fragment:Wg,alphahash_pars_fragment:Xg,alphamap_fragment:$g,alphamap_pars_fragment:qg,alphatest_fragment:jg,alphatest_pars_fragment:Yg,aomap_fragment:Kg,aomap_pars_fragment:Zg,batching_pars_vertex:Jg,batching_vertex:Qg,begin_vertex:e_,beginnormal_vertex:t_,bsdfs:n_,iridescence_fragment:i_,bumpmap_pars_fragment:r_,clipping_planes_fragment:s_,clipping_planes_pars_fragment:o_,clipping_planes_pars_vertex:a_,clipping_planes_vertex:l_,color_fragment:c_,color_pars_fragment:u_,color_pars_vertex:f_,color_vertex:d_,common:h_,cube_uv_reflection_fragment:p_,defaultnormal_vertex:m_,displacementmap_pars_vertex:g_,displacementmap_vertex:__,emissivemap_fragment:v_,emissivemap_pars_fragment:x_,colorspace_fragment:S_,colorspace_pars_fragment:y_,envmap_fragment:M_,envmap_common_pars_fragment:b_,envmap_pars_fragment:E_,envmap_pars_vertex:T_,envmap_physical_pars_fragment:O_,envmap_vertex:A_,fog_vertex:w_,fog_pars_vertex:R_,fog_fragment:C_,fog_pars_fragment:L_,gradientmap_pars_fragment:P_,lightmap_fragment:D_,lightmap_pars_fragment:U_,lights_lambert_fragment:I_,lights_lambert_pars_fragment:N_,lights_pars_begin:F_,lights_toon_fragment:B_,lights_toon_pars_fragment:z_,lights_phong_fragment:k_,lights_phong_pars_fragment:H_,lights_physical_fragment:G_,lights_physical_pars_fragment:V_,lights_fragment_begin:W_,lights_fragment_maps:X_,lights_fragment_end:$_,logdepthbuf_fragment:q_,logdepthbuf_pars_fragment:j_,logdepthbuf_pars_vertex:Y_,logdepthbuf_vertex:K_,map_fragment:Z_,map_pars_fragment:J_,map_particle_fragment:Q_,map_particle_pars_fragment:ev,metalnessmap_fragment:tv,metalnessmap_pars_fragment:nv,morphcolor_vertex:iv,morphnormal_vertex:rv,morphtarget_pars_vertex:sv,morphtarget_vertex:ov,normal_fragment_begin:av,normal_fragment_maps:lv,normal_pars_fragment:cv,normal_pars_vertex:uv,normal_vertex:fv,normalmap_pars_fragment:dv,clearcoat_normal_fragment_begin:hv,clearcoat_normal_fragment_maps:pv,clearcoat_pars_fragment:mv,iridescence_pars_fragment:gv,opaque_fragment:_v,packing:vv,premultiplied_alpha_fragment:xv,project_vertex:Sv,dithering_fragment:yv,dithering_pars_fragment:Mv,roughnessmap_fragment:bv,roughnessmap_pars_fragment:Ev,shadowmap_pars_fragment:Tv,shadowmap_pars_vertex:Av,shadowmap_vertex:wv,shadowmask_pars_fragment:Rv,skinbase_vertex:Cv,skinning_pars_vertex:Lv,skinning_vertex:Pv,skinnormal_vertex:Dv,specularmap_fragment:Uv,specularmap_pars_fragment:Iv,tonemapping_fragment:Nv,tonemapping_pars_fragment:Fv,transmission_fragment:Ov,transmission_pars_fragment:Bv,uv_pars_fragment:zv,uv_pars_vertex:kv,uv_vertex:Hv,worldpos_vertex:Gv,background_vert:Vv,background_frag:Wv,backgroundCube_vert:Xv,backgroundCube_frag:$v,cube_vert:qv,cube_frag:jv,depth_vert:Yv,depth_frag:Kv,distanceRGBA_vert:Zv,distanceRGBA_frag:Jv,equirect_vert:Qv,equirect_frag:ex,linedashed_vert:tx,linedashed_frag:nx,meshbasic_vert:ix,meshbasic_frag:rx,meshlambert_vert:sx,meshlambert_frag:ox,meshmatcap_vert:ax,meshmatcap_frag:lx,meshnormal_vert:cx,meshnormal_frag:ux,meshphong_vert:fx,meshphong_frag:dx,meshphysical_vert:hx,meshphysical_frag:px,meshtoon_vert:mx,meshtoon_frag:gx,points_vert:_x,points_frag:vx,shadow_vert:xx,shadow_frag:Sx,sprite_vert:yx,sprite_frag:Mx},me={common:{diffuse:{value:new st(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new Ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new st(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new st(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new st(16777215)},opacity:{value:1},center:{value:new Ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},An={basic:{uniforms:Ft([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Ft([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new st(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Ft([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new st(0)},specular:{value:new st(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Ft([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new st(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Ft([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new st(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Ft([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Ft([me.points,me.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Ft([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Ft([me.common,me.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Ft([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Ft([me.sprite,me.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:Ft([me.common,me.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:Ft([me.lights,me.fog,{color:{value:new st(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};An.physical={uniforms:Ft([An.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new Ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new st(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new Ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new st(0)},specularColor:{value:new st(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new Ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const zs={r:0,b:0,g:0};function bx(n,e,t,i,r,s,a){const o=new st(0);let l=s===!0?0:1,u,c,f=null,d=0,m=null;function y(p,h){let E=!1,S=h.isScene===!0?h.background:null;S&&S.isTexture&&(S=(h.backgroundBlurriness>0?t:e).get(S)),S===null?M(o,l):S&&S.isColor&&(M(S,1),E=!0);const b=n.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,a):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||E)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),S&&(S.isCubeTexture||S.mapping===bo)?(c===void 0&&(c=new gn(new ps(1,1,1),new gi({name:"BackgroundCubeMaterial",uniforms:Mr(An.backgroundCube.uniforms),vertexShader:An.backgroundCube.vertexShader,fragmentShader:An.backgroundCube.fragmentShader,side:$t,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(D,P,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=rt.getTransfer(S.colorSpace)!==ft,(f!==S||d!==S.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,f=S,d=S.version,m=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(u===void 0&&(u=new gn(new Ao(2,2),new gi({name:"BackgroundMaterial",uniforms:Mr(An.background.uniforms),vertexShader:An.background.vertexShader,fragmentShader:An.background.fragmentShader,side:mi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=S,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=rt.getTransfer(S.colorSpace)!==ft,S.matrixAutoUpdate===!0&&S.updateMatrix(),u.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||d!==S.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,f=S,d=S.version,m=n.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null))}function M(p,h){p.getRGB(zs,dd(n)),i.buffers.color.setClear(zs.r,zs.g,zs.b,h,a)}return{getClearColor:function(){return o},setClearColor:function(p,h=1){o.set(p),l=h,M(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,M(o,l)},render:y}}function Ex(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=p(null);let u=l,c=!1;function f(I,Z,k,ee,j){let se=!1;if(a){const le=M(ee,k,Z);u!==le&&(u=le,m(u.object)),se=h(I,ee,k,j),se&&E(I,ee,k,j)}else{const le=Z.wireframe===!0;(u.geometry!==ee.id||u.program!==k.id||u.wireframe!==le)&&(u.geometry=ee.id,u.program=k.id,u.wireframe=le,se=!0)}j!==null&&t.update(j,n.ELEMENT_ARRAY_BUFFER),(se||c)&&(c=!1,q(I,Z,k,ee),j!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(j).buffer))}function d(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function m(I){return i.isWebGL2?n.bindVertexArray(I):s.bindVertexArrayOES(I)}function y(I){return i.isWebGL2?n.deleteVertexArray(I):s.deleteVertexArrayOES(I)}function M(I,Z,k){const ee=k.wireframe===!0;let j=o[I.id];j===void 0&&(j={},o[I.id]=j);let se=j[Z.id];se===void 0&&(se={},j[Z.id]=se);let le=se[ee];return le===void 0&&(le=p(d()),se[ee]=le),le}function p(I){const Z=[],k=[],ee=[];for(let j=0;j<r;j++)Z[j]=0,k[j]=0,ee[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:k,attributeDivisors:ee,object:I,attributes:{},index:null}}function h(I,Z,k,ee){const j=u.attributes,se=Z.attributes;let le=0;const ue=k.getAttributes();for(const de in ue)if(ue[de].location>=0){const J=j[de];let ce=se[de];if(ce===void 0&&(de==="instanceMatrix"&&I.instanceMatrix&&(ce=I.instanceMatrix),de==="instanceColor"&&I.instanceColor&&(ce=I.instanceColor)),J===void 0||J.attribute!==ce||ce&&J.data!==ce.data)return!0;le++}return u.attributesNum!==le||u.index!==ee}function E(I,Z,k,ee){const j={},se=Z.attributes;let le=0;const ue=k.getAttributes();for(const de in ue)if(ue[de].location>=0){let J=se[de];J===void 0&&(de==="instanceMatrix"&&I.instanceMatrix&&(J=I.instanceMatrix),de==="instanceColor"&&I.instanceColor&&(J=I.instanceColor));const ce={};ce.attribute=J,J&&J.data&&(ce.data=J.data),j[de]=ce,le++}u.attributes=j,u.attributesNum=le,u.index=ee}function S(){const I=u.newAttributes;for(let Z=0,k=I.length;Z<k;Z++)I[Z]=0}function b(I){D(I,0)}function D(I,Z){const k=u.newAttributes,ee=u.enabledAttributes,j=u.attributeDivisors;k[I]=1,ee[I]===0&&(n.enableVertexAttribArray(I),ee[I]=1),j[I]!==Z&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,Z),j[I]=Z)}function P(){const I=u.newAttributes,Z=u.enabledAttributes;for(let k=0,ee=Z.length;k<ee;k++)Z[k]!==I[k]&&(n.disableVertexAttribArray(k),Z[k]=0)}function L(I,Z,k,ee,j,se,le){le===!0?n.vertexAttribIPointer(I,Z,k,j,se):n.vertexAttribPointer(I,Z,k,ee,j,se)}function q(I,Z,k,ee){if(i.isWebGL2===!1&&(I.isInstancedMesh||ee.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;S();const j=ee.attributes,se=k.getAttributes(),le=Z.defaultAttributeValues;for(const ue in se){const de=se[ue];if(de.location>=0){let Fe=j[ue];if(Fe===void 0&&(ue==="instanceMatrix"&&I.instanceMatrix&&(Fe=I.instanceMatrix),ue==="instanceColor"&&I.instanceColor&&(Fe=I.instanceColor)),Fe!==void 0){const J=Fe.normalized,ce=Fe.itemSize,xe=t.get(Fe);if(xe===void 0)continue;const we=xe.buffer,Ce=xe.type,be=xe.bytesPerElement,qe=i.isWebGL2===!0&&(Ce===n.INT||Ce===n.UNSIGNED_INT||Fe.gpuType===qf);if(Fe.isInterleavedBufferAttribute){const Be=Fe.data,_=Be.stride,U=Fe.offset;if(Be.isInstancedInterleavedBuffer){for(let N=0;N<de.locationSize;N++)D(de.location+N,Be.meshPerAttribute);I.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=Be.meshPerAttribute*Be.count)}else for(let N=0;N<de.locationSize;N++)b(de.location+N);n.bindBuffer(n.ARRAY_BUFFER,we);for(let N=0;N<de.locationSize;N++)L(de.location+N,ce/de.locationSize,Ce,J,_*be,(U+ce/de.locationSize*N)*be,qe)}else{if(Fe.isInstancedBufferAttribute){for(let Be=0;Be<de.locationSize;Be++)D(de.location+Be,Fe.meshPerAttribute);I.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=Fe.meshPerAttribute*Fe.count)}else for(let Be=0;Be<de.locationSize;Be++)b(de.location+Be);n.bindBuffer(n.ARRAY_BUFFER,we);for(let Be=0;Be<de.locationSize;Be++)L(de.location+Be,ce/de.locationSize,Ce,J,ce*be,ce/de.locationSize*Be*be,qe)}}else if(le!==void 0){const J=le[ue];if(J!==void 0)switch(J.length){case 2:n.vertexAttrib2fv(de.location,J);break;case 3:n.vertexAttrib3fv(de.location,J);break;case 4:n.vertexAttrib4fv(de.location,J);break;default:n.vertexAttrib1fv(de.location,J)}}}}P()}function K(){F();for(const I in o){const Z=o[I];for(const k in Z){const ee=Z[k];for(const j in ee)y(ee[j].object),delete ee[j];delete Z[k]}delete o[I]}}function v(I){if(o[I.id]===void 0)return;const Z=o[I.id];for(const k in Z){const ee=Z[k];for(const j in ee)y(ee[j].object),delete ee[j];delete Z[k]}delete o[I.id]}function A(I){for(const Z in o){const k=o[Z];if(k[I.id]===void 0)continue;const ee=k[I.id];for(const j in ee)y(ee[j].object),delete ee[j];delete k[I.id]}}function F(){ne(),c=!0,u!==l&&(u=l,m(u.object))}function ne(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:F,resetDefaultState:ne,dispose:K,releaseStatesOfGeometry:v,releaseStatesOfProgram:A,initAttributes:S,enableAttribute:b,disableUnusedAttributes:P}}function Tx(n,e,t,i){const r=i.isWebGL2;let s;function a(c){s=c}function o(c,f){n.drawArrays(s,c,f),t.update(f,s,1)}function l(c,f,d){if(d===0)return;let m,y;if(r)m=n,y="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),y="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[y](s,c,f,d),t.update(f,s,d)}function u(c,f,d){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let y=0;y<d;y++)this.render(c[y],f[y]);else{m.multiDrawArraysWEBGL(s,c,0,f,0,d);let y=0;for(let M=0;M<d;M++)y+=f[M];t.update(y,s,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=u}function Ax(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(L){if(L==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const u=a||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),y=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),M=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),h=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=d>0,b=a||e.has("OES_texture_float"),D=S&&b,P=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:c,maxTextures:f,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:y,maxAttributes:M,maxVertexUniforms:p,maxVaryings:h,maxFragmentUniforms:E,vertexTextures:S,floatFragmentTextures:b,floatVertexTextures:D,maxSamples:P}}function wx(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Ci,o=new $e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const m=f.length!==0||d||i!==0||r;return r=d,i=f.length,m},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=c(f,d,0)},this.setState=function(f,d,m){const y=f.clippingPlanes,M=f.clipIntersection,p=f.clipShadows,h=n.get(f);if(!r||y===null||y.length===0||s&&!p)s?c(null):u();else{const E=s?0:i,S=E*4;let b=h.clippingState||null;l.value=b,b=c(y,d,S,m);for(let D=0;D!==S;++D)b[D]=t[D];h.clippingState=b,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=E}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,d,m,y){const M=f!==null?f.length:0;let p=null;if(M!==0){if(p=l.value,y!==!0||p===null){const h=m+M*4,E=d.matrixWorldInverse;o.getNormalMatrix(E),(p===null||p.length<h)&&(p=new Float32Array(h));for(let S=0,b=m;S!==M;++S,b+=4)a.copy(f[S]).applyMatrix4(E,o),a.normal.toArray(p,b),p[b+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,p}}function Rx(n){let e=new WeakMap;function t(a,o){return o===Oa?a.mapping=xr:o===Ba&&(a.mapping=Sr),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Oa||o===Ba)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const u=new kg(l.height);return u.fromEquirectangularTexture(n,a),e.set(a,u),a.addEventListener("dispose",r),t(u.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Cx extends hd{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=c*this.view.offsetY,l=o-c*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const lr=4,ru=[.125,.215,.35,.446,.526,.582],Ui=20,ga=new Cx,su=new st;let _a=null,va=0,xa=0;const Li=(1+Math.sqrt(5))/2,or=1/Li,ou=[new H(1,1,1),new H(-1,1,1),new H(1,1,-1),new H(-1,1,-1),new H(0,Li,or),new H(0,Li,-or),new H(or,0,Li),new H(-or,0,Li),new H(Li,or,0),new H(-Li,or,0)];class au{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){_a=this._renderer.getRenderTarget(),va=this._renderer.getActiveCubeFace(),xa=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=uu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(_a,va,xa),e.scissorTest=!1,ks(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===xr||e.mapping===Sr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_a=this._renderer.getRenderTarget(),va=this._renderer.getActiveCubeFace(),xa=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Vt,minFilter:Vt,generateMipmaps:!1,type:is,format:mn,colorSpace:Qn,depthBuffer:!1},r=lu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lu(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Lx(s)),this._blurMaterial=Px(s,e,t)}return r}_compileMaterial(e){const t=new gn(this._lodPlanes[0],e);this._renderer.compile(t,ga)}_sceneToCubeUV(e,t,i,r){const o=new on(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,d=c.toneMapping;c.getClearColor(su),c.toneMapping=di,c.autoClear=!1;const m=new cd({name:"PMREM.Background",side:$t,depthWrite:!1,depthTest:!1}),y=new gn(new ps,m);let M=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,M=!0):(m.color.copy(su),M=!0);for(let h=0;h<6;h++){const E=h%3;E===0?(o.up.set(0,l[h],0),o.lookAt(u[h],0,0)):E===1?(o.up.set(0,0,l[h]),o.lookAt(0,u[h],0)):(o.up.set(0,l[h],0),o.lookAt(0,0,u[h]));const S=this._cubeSize;ks(r,E*S,h>2?S:0,S,S),c.setRenderTarget(r),M&&c.render(y,o),c.render(e,o)}y.geometry.dispose(),y.material.dispose(),c.toneMapping=d,c.autoClear=f,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===xr||e.mapping===Sr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=uu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cu());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new gn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;ks(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,ga)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=ou[(r-1)%ou.length];this._blur(e,r-1,r,s,a)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new gn(this._lodPlanes[r],u),d=u.uniforms,m=this._sizeLods[i]-1,y=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Ui-1),M=s/y,p=isFinite(s)?1+Math.floor(c*M):Ui;p>Ui&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ui}`);const h=[];let E=0;for(let L=0;L<Ui;++L){const q=L/M,K=Math.exp(-q*q/2);h.push(K),L===0?E+=K:L<p&&(E+=2*K)}for(let L=0;L<h.length;L++)h[L]=h[L]/E;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=h,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:S}=this;d.dTheta.value=y,d.mipInt.value=S-i;const b=this._sizeLods[r],D=3*b*(r>S-lr?r-S+lr:0),P=4*(this._cubeSize-b);ks(t,D,P,3*b,2*b),l.setRenderTarget(t),l.render(f,ga)}}function Lx(n){const e=[],t=[],i=[];let r=n;const s=n-lr+1+ru.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-lr?l=ru[a-n+lr-1]:a===0&&(l=0),i.push(l);const u=1/(o-2),c=-u,f=1+u,d=[c,c,f,c,f,f,c,c,f,f,c,f],m=6,y=6,M=3,p=2,h=1,E=new Float32Array(M*y*m),S=new Float32Array(p*y*m),b=new Float32Array(h*y*m);for(let P=0;P<m;P++){const L=P%3*2/3-1,q=P>2?0:-1,K=[L,q,0,L+2/3,q,0,L+2/3,q+1,0,L,q,0,L+2/3,q+1,0,L,q+1,0];E.set(K,M*y*P),S.set(d,p*y*P);const v=[P,P,P,P,P,P];b.set(v,h*y*P)}const D=new _i;D.setAttribute("position",new Ln(E,M)),D.setAttribute("uv",new Ln(S,p)),D.setAttribute("faceIndex",new Ln(b,h)),e.push(D),r>lr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function lu(n,e,t){const i=new Gi(n,e,t);return i.texture.mapping=bo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ks(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Px(n,e,t){const i=new Float32Array(Ui),r=new H(0,1,0);return new gi({name:"SphericalGaussianBlur",defines:{n:Ui,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ul(),fragmentShader:`

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
		`,blending:fi,depthTest:!1,depthWrite:!1})}function cu(){return new gi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ul(),fragmentShader:`

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
		`,blending:fi,depthTest:!1,depthWrite:!1})}function uu(){return new gi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ul(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function ul(){return`

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
	`}function Dx(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,u=l===Oa||l===Ba,c=l===xr||l===Sr;if(u||c)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return t===null&&(t=new au(n)),f=u?t.fromEquirectangular(o,f):t.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(u&&f&&f.height>0||c&&f&&r(f)){t===null&&(t=new au(n));const d=u?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",s),d.texture}else return null}}}return o}function r(o){let l=0;const u=6;for(let c=0;c<u;c++)o[c]!==void 0&&l++;return l===u}function s(o){const l=o.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Ux(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Ix(n,e,t,i){const r={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const y in d.attributes)e.remove(d.attributes[y]);for(const y in d.morphAttributes){const M=d.morphAttributes[y];for(let p=0,h=M.length;p<h;p++)e.remove(M[p])}d.removeEventListener("dispose",a),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const y in d)e.update(d[y],n.ARRAY_BUFFER);const m=f.morphAttributes;for(const y in m){const M=m[y];for(let p=0,h=M.length;p<h;p++)e.update(M[p],n.ARRAY_BUFFER)}}function u(f){const d=[],m=f.index,y=f.attributes.position;let M=0;if(m!==null){const E=m.array;M=m.version;for(let S=0,b=E.length;S<b;S+=3){const D=E[S+0],P=E[S+1],L=E[S+2];d.push(D,P,P,L,L,D)}}else if(y!==void 0){const E=y.array;M=y.version;for(let S=0,b=E.length/3-1;S<b;S+=3){const D=S+0,P=S+1,L=S+2;d.push(D,P,P,L,L,D)}}else return;const p=new(id(d)?fd:ud)(d,1);p.version=M;const h=s.get(f);h&&e.remove(h),s.set(f,p)}function c(f){const d=s.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&u(f)}else u(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:c}}function Nx(n,e,t,i){const r=i.isWebGL2;let s;function a(m){s=m}let o,l;function u(m){o=m.type,l=m.bytesPerElement}function c(m,y){n.drawElements(s,y,o,m*l),t.update(y,s,1)}function f(m,y,M){if(M===0)return;let p,h;if(r)p=n,h="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[h](s,y,o,m*l,M),t.update(y,s,M)}function d(m,y,M){if(M===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let h=0;h<M;h++)this.render(m[h]/l,y[h]);else{p.multiDrawElementsWEBGL(s,y,0,o,m,0,M);let h=0;for(let E=0;E<M;E++)h+=y[E];t.update(h,s,1)}}this.setMode=a,this.setIndex=u,this.render=c,this.renderInstances=f,this.renderMultiDraw=d}function Fx(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Ox(n,e){return n[0]-e[0]}function Bx(n,e){return Math.abs(e[1])-Math.abs(n[1])}function zx(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,a=new wt,o=[];for(let u=0;u<8;u++)o[u]=[u,0];function l(u,c,f){const d=u.morphTargetInfluences;if(e.isWebGL2===!0){const y=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,M=y!==void 0?y.length:0;let p=s.get(c);if(p===void 0||p.count!==M){let Z=function(){ne.dispose(),s.delete(c),c.removeEventListener("dispose",Z)};var m=Z;p!==void 0&&p.texture.dispose();const S=c.morphAttributes.position!==void 0,b=c.morphAttributes.normal!==void 0,D=c.morphAttributes.color!==void 0,P=c.morphAttributes.position||[],L=c.morphAttributes.normal||[],q=c.morphAttributes.color||[];let K=0;S===!0&&(K=1),b===!0&&(K=2),D===!0&&(K=3);let v=c.attributes.position.count*K,A=1;v>e.maxTextureSize&&(A=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);const F=new Float32Array(v*A*4*M),ne=new od(F,v,A,M);ne.type=qn,ne.needsUpdate=!0;const I=K*4;for(let k=0;k<M;k++){const ee=P[k],j=L[k],se=q[k],le=v*A*4*k;for(let ue=0;ue<ee.count;ue++){const de=ue*I;S===!0&&(a.fromBufferAttribute(ee,ue),F[le+de+0]=a.x,F[le+de+1]=a.y,F[le+de+2]=a.z,F[le+de+3]=0),b===!0&&(a.fromBufferAttribute(j,ue),F[le+de+4]=a.x,F[le+de+5]=a.y,F[le+de+6]=a.z,F[le+de+7]=0),D===!0&&(a.fromBufferAttribute(se,ue),F[le+de+8]=a.x,F[le+de+9]=a.y,F[le+de+10]=a.z,F[le+de+11]=se.itemSize===4?a.w:1)}}p={count:M,texture:ne,size:new Ye(v,A)},s.set(c,p),c.addEventListener("dispose",Z)}let h=0;for(let S=0;S<d.length;S++)h+=d[S];const E=c.morphTargetsRelative?1:1-h;f.getUniforms().setValue(n,"morphTargetBaseInfluence",E),f.getUniforms().setValue(n,"morphTargetInfluences",d),f.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}else{const y=d===void 0?0:d.length;let M=i[c.id];if(M===void 0||M.length!==y){M=[];for(let b=0;b<y;b++)M[b]=[b,0];i[c.id]=M}for(let b=0;b<y;b++){const D=M[b];D[0]=b,D[1]=d[b]}M.sort(Bx);for(let b=0;b<8;b++)b<y&&M[b][1]?(o[b][0]=M[b][0],o[b][1]=M[b][1]):(o[b][0]=Number.MAX_SAFE_INTEGER,o[b][1]=0);o.sort(Ox);const p=c.morphAttributes.position,h=c.morphAttributes.normal;let E=0;for(let b=0;b<8;b++){const D=o[b],P=D[0],L=D[1];P!==Number.MAX_SAFE_INTEGER&&L?(p&&c.getAttribute("morphTarget"+b)!==p[P]&&c.setAttribute("morphTarget"+b,p[P]),h&&c.getAttribute("morphNormal"+b)!==h[P]&&c.setAttribute("morphNormal"+b,h[P]),r[b]=L,E+=L):(p&&c.hasAttribute("morphTarget"+b)===!0&&c.deleteAttribute("morphTarget"+b),h&&c.hasAttribute("morphNormal"+b)===!0&&c.deleteAttribute("morphNormal"+b),r[b]=0)}const S=c.morphTargetsRelative?1:1-E;f.getUniforms().setValue(n,"morphTargetBaseInfluence",S),f.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function kx(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,f=e.get(l,c);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return f}function a(){r=new WeakMap}function o(l){const u=l.target;u.removeEventListener("dispose",o),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:a}}class _d extends qt{constructor(e,t,i,r,s,a,o,l,u,c){if(c=c!==void 0?c:zi,c!==zi&&c!==yr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===zi&&(i=ui),i===void 0&&c===yr&&(i=Bi),super(null,r,s,a,o,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Ot,this.minFilter=l!==void 0?l:Ot,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const vd=new qt,xd=new _d(1,1);xd.compareFunction=nd;const Sd=new od,yd=new Mg,Md=new pd,fu=[],du=[],hu=new Float32Array(16),pu=new Float32Array(9),mu=new Float32Array(4);function Ar(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=fu[r];if(s===void 0&&(s=new Float32Array(r),fu[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function xt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function St(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function wo(n,e){let t=du[e];t===void 0&&(t=new Int32Array(e),du[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Hx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Gx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;n.uniform2fv(this.addr,e),St(t,e)}}function Vx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xt(t,e))return;n.uniform3fv(this.addr,e),St(t,e)}}function Wx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;n.uniform4fv(this.addr,e),St(t,e)}}function Xx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(xt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),St(t,e)}else{if(xt(t,i))return;mu.set(i),n.uniformMatrix2fv(this.addr,!1,mu),St(t,i)}}function $x(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(xt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),St(t,e)}else{if(xt(t,i))return;pu.set(i),n.uniformMatrix3fv(this.addr,!1,pu),St(t,i)}}function qx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(xt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),St(t,e)}else{if(xt(t,i))return;hu.set(i),n.uniformMatrix4fv(this.addr,!1,hu),St(t,i)}}function jx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Yx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;n.uniform2iv(this.addr,e),St(t,e)}}function Kx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;n.uniform3iv(this.addr,e),St(t,e)}}function Zx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;n.uniform4iv(this.addr,e),St(t,e)}}function Jx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Qx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;n.uniform2uiv(this.addr,e),St(t,e)}}function e0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;n.uniform3uiv(this.addr,e),St(t,e)}}function t0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;n.uniform4uiv(this.addr,e),St(t,e)}}function n0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?xd:vd;t.setTexture2D(e||s,r)}function i0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||yd,r)}function r0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Md,r)}function s0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Sd,r)}function o0(n){switch(n){case 5126:return Hx;case 35664:return Gx;case 35665:return Vx;case 35666:return Wx;case 35674:return Xx;case 35675:return $x;case 35676:return qx;case 5124:case 35670:return jx;case 35667:case 35671:return Yx;case 35668:case 35672:return Kx;case 35669:case 35673:return Zx;case 5125:return Jx;case 36294:return Qx;case 36295:return e0;case 36296:return t0;case 35678:case 36198:case 36298:case 36306:case 35682:return n0;case 35679:case 36299:case 36307:return i0;case 35680:case 36300:case 36308:case 36293:return r0;case 36289:case 36303:case 36311:case 36292:return s0}}function a0(n,e){n.uniform1fv(this.addr,e)}function l0(n,e){const t=Ar(e,this.size,2);n.uniform2fv(this.addr,t)}function c0(n,e){const t=Ar(e,this.size,3);n.uniform3fv(this.addr,t)}function u0(n,e){const t=Ar(e,this.size,4);n.uniform4fv(this.addr,t)}function f0(n,e){const t=Ar(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function d0(n,e){const t=Ar(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function h0(n,e){const t=Ar(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function p0(n,e){n.uniform1iv(this.addr,e)}function m0(n,e){n.uniform2iv(this.addr,e)}function g0(n,e){n.uniform3iv(this.addr,e)}function _0(n,e){n.uniform4iv(this.addr,e)}function v0(n,e){n.uniform1uiv(this.addr,e)}function x0(n,e){n.uniform2uiv(this.addr,e)}function S0(n,e){n.uniform3uiv(this.addr,e)}function y0(n,e){n.uniform4uiv(this.addr,e)}function M0(n,e,t){const i=this.cache,r=e.length,s=wo(t,r);xt(i,s)||(n.uniform1iv(this.addr,s),St(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||vd,s[a])}function b0(n,e,t){const i=this.cache,r=e.length,s=wo(t,r);xt(i,s)||(n.uniform1iv(this.addr,s),St(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||yd,s[a])}function E0(n,e,t){const i=this.cache,r=e.length,s=wo(t,r);xt(i,s)||(n.uniform1iv(this.addr,s),St(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Md,s[a])}function T0(n,e,t){const i=this.cache,r=e.length,s=wo(t,r);xt(i,s)||(n.uniform1iv(this.addr,s),St(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Sd,s[a])}function A0(n){switch(n){case 5126:return a0;case 35664:return l0;case 35665:return c0;case 35666:return u0;case 35674:return f0;case 35675:return d0;case 35676:return h0;case 5124:case 35670:return p0;case 35667:case 35671:return m0;case 35668:case 35672:return g0;case 35669:case 35673:return _0;case 5125:return v0;case 36294:return x0;case 36295:return S0;case 36296:return y0;case 35678:case 36198:case 36298:case 36306:case 35682:return M0;case 35679:case 36299:case 36307:return b0;case 35680:case 36300:case 36308:case 36293:return E0;case 36289:case 36303:case 36311:case 36292:return T0}}class w0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=o0(t.type)}}class R0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=A0(t.type)}}class C0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const Sa=/(\w+)(\])?(\[|\.)?/g;function gu(n,e){n.seq.push(e),n.map[e.id]=e}function L0(n,e,t){const i=n.name,r=i.length;for(Sa.lastIndex=0;;){const s=Sa.exec(i),a=Sa.lastIndex;let o=s[1];const l=s[2]==="]",u=s[3];if(l&&(o=o|0),u===void 0||u==="["&&a+2===r){gu(t,u===void 0?new w0(o,n,e):new R0(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new C0(o),gu(t,f)),t=f}}}class Xs{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);L0(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function _u(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const P0=37297;let D0=0;function U0(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function I0(n){const e=rt.getPrimaries(rt.workingColorSpace),t=rt.getPrimaries(n);let i;switch(e===t?i="":e===so&&t===ro?i="LinearDisplayP3ToLinearSRGB":e===ro&&t===so&&(i="LinearSRGBToLinearDisplayP3"),n){case Qn:case Eo:return[i,"LinearTransferOETF"];case At:case ll:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function vu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+U0(n.getShaderSource(e),a)}else return r}function N0(n,e){const t=I0(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function F0(n,e){let t;switch(e){case $m:t="Linear";break;case qm:t="Reinhard";break;case jm:t="OptimizedCineon";break;case Ym:t="ACESFilmic";break;case Zm:t="AgX";break;case Km:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function O0(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.alphaToCoverage||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(cr).join(`
`)}function B0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(cr).join(`
`)}function z0(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function k0(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function cr(n){return n!==""}function xu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Su(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const H0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wa(n){return n.replace(H0,V0)}const G0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function V0(n,e){let t=Ge[e];if(t===void 0){const i=G0.get(e);if(i!==void 0)t=Ge[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Wa(t)}const W0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yu(n){return n.replace(W0,X0)}function X0(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Mu(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	`;return n.isWebGL2&&(e+=`precision ${n.precision} sampler3D;
		precision ${n.precision} sampler2DArray;
		precision ${n.precision} sampler2DShadow;
		precision ${n.precision} samplerCubeShadow;
		precision ${n.precision} sampler2DArrayShadow;
		precision ${n.precision} isampler2D;
		precision ${n.precision} isampler3D;
		precision ${n.precision} isamplerCube;
		precision ${n.precision} isampler2DArray;
		precision ${n.precision} usampler2D;
		precision ${n.precision} usampler3D;
		precision ${n.precision} usamplerCube;
		precision ${n.precision} usampler2DArray;
		`),n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function $0(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Wf?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Sm?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Hn&&(e="SHADOWMAP_TYPE_VSM"),e}function q0(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case xr:case Sr:e="ENVMAP_TYPE_CUBE";break;case bo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function j0(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Sr:e="ENVMAP_MODE_REFRACTION";break}return e}function Y0(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Xf:e="ENVMAP_BLENDING_MULTIPLY";break;case Wm:e="ENVMAP_BLENDING_MIX";break;case Xm:e="ENVMAP_BLENDING_ADD";break}return e}function K0(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Z0(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=$0(t),u=q0(t),c=j0(t),f=Y0(t),d=K0(t),m=t.isWebGL2?"":O0(t),y=B0(t),M=z0(s),p=r.createProgram();let h,E,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(cr).join(`
`),h.length>0&&(h+=`
`),E=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(cr).join(`
`),E.length>0&&(E+=`
`)):(h=[Mu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cr).join(`
`),E=[m,Mu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==di?"#define TONE_MAPPING":"",t.toneMapping!==di?Ge.tonemapping_pars_fragment:"",t.toneMapping!==di?F0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,N0("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(cr).join(`
`)),a=Wa(a),a=xu(a,t),a=Su(a,t),o=Wa(o),o=xu(o,t),o=Su(o,t),a=yu(a),o=yu(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,h=[y,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,E=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Bc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Bc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+E);const b=S+h+a,D=S+E+o,P=_u(r,r.VERTEX_SHADER,b),L=_u(r,r.FRAGMENT_SHADER,D);r.attachShader(p,P),r.attachShader(p,L),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function q(F){if(n.debug.checkShaderErrors){const ne=r.getProgramInfoLog(p).trim(),I=r.getShaderInfoLog(P).trim(),Z=r.getShaderInfoLog(L).trim();let k=!0,ee=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(k=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,p,P,L);else{const j=vu(r,P,"vertex"),se=vu(r,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+ne+`
`+j+`
`+se)}else ne!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ne):(I===""||Z==="")&&(ee=!1);ee&&(F.diagnostics={runnable:k,programLog:ne,vertexShader:{log:I,prefix:h},fragmentShader:{log:Z,prefix:E}})}r.deleteShader(P),r.deleteShader(L),K=new Xs(r,p),v=k0(r,p)}let K;this.getUniforms=function(){return K===void 0&&q(this),K};let v;this.getAttributes=function(){return v===void 0&&q(this),v};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=r.getProgramParameter(p,P0)),A},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=D0++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=P,this.fragmentShader=L,this}let J0=0;class Q0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new eS(e),t.set(e,i)),i}}class eS{constructor(e){this.id=J0++,this.code=e,this.usedTimes=0}}function tS(n,e,t,i,r,s,a){const o=new ad,l=new Q0,u=new Set,c=[],f=r.isWebGL2,d=r.logarithmicDepthBuffer,m=r.vertexTextures;let y=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return u.add(v),v===0?"uv":`uv${v}`}function h(v,A,F,ne,I){const Z=ne.fog,k=I.geometry,ee=v.isMeshStandardMaterial?ne.environment:null,j=(v.isMeshStandardMaterial?t:e).get(v.envMap||ee),se=j&&j.mapping===bo?j.image.height:null,le=M[v.type];v.precision!==null&&(y=r.getMaxPrecision(v.precision),y!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",y,"instead."));const ue=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,de=ue!==void 0?ue.length:0;let Fe=0;k.morphAttributes.position!==void 0&&(Fe=1),k.morphAttributes.normal!==void 0&&(Fe=2),k.morphAttributes.color!==void 0&&(Fe=3);let J,ce,xe,we;if(le){const lt=An[le];J=lt.vertexShader,ce=lt.fragmentShader}else J=v.vertexShader,ce=v.fragmentShader,l.update(v),xe=l.getVertexShaderID(v),we=l.getFragmentShaderID(v);const Ce=n.getRenderTarget(),be=I.isInstancedMesh===!0,qe=I.isBatchedMesh===!0,Be=!!v.map,_=!!v.matcap,U=!!j,N=!!v.aoMap,X=!!v.lightMap,z=!!v.bumpMap,Q=!!v.normalMap,te=!!v.displacementMap,x=!!v.emissiveMap,g=!!v.metalnessMap,w=!!v.roughnessMap,W=v.anisotropy>0,O=v.clearcoat>0,G=v.iridescence>0,ae=v.sheen>0,oe=v.transmission>0,fe=W&&!!v.anisotropyMap,ge=O&&!!v.clearcoatMap,Ee=O&&!!v.clearcoatNormalMap,ie=O&&!!v.clearcoatRoughnessMap,Ve=G&&!!v.iridescenceMap,Ie=G&&!!v.iridescenceThicknessMap,Ue=ae&&!!v.sheenColorMap,Re=ae&&!!v.sheenRoughnessMap,_e=!!v.specularMap,Pe=!!v.specularColorMap,Ke=!!v.specularIntensityMap,it=oe&&!!v.transmissionMap,je=oe&&!!v.thicknessMap,ot=!!v.gradientMap,R=!!v.alphaMap,he=v.alphaTest>0,pe=!!v.alphaHash,Te=!!v.extensions;let De=di;v.toneMapped&&(Ce===null||Ce.isXRRenderTarget===!0)&&(De=n.toneMapping);const tt={isWebGL2:f,shaderID:le,shaderType:v.type,shaderName:v.name,vertexShader:J,fragmentShader:ce,defines:v.defines,customVertexShaderID:xe,customFragmentShaderID:we,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:y,batching:qe,instancing:be,instancingColor:be&&I.instanceColor!==null,supportsVertexTextures:m,outputColorSpace:Ce===null?n.outputColorSpace:Ce.isXRRenderTarget===!0?Ce.texture.colorSpace:Qn,alphaToCoverage:!!v.alphaToCoverage,map:Be,matcap:_,envMap:U,envMapMode:U&&j.mapping,envMapCubeUVHeight:se,aoMap:N,lightMap:X,bumpMap:z,normalMap:Q,displacementMap:m&&te,emissiveMap:x,normalMapObjectSpace:Q&&v.normalMapType===lg,normalMapTangentSpace:Q&&v.normalMapType===td,metalnessMap:g,roughnessMap:w,anisotropy:W,anisotropyMap:fe,clearcoat:O,clearcoatMap:ge,clearcoatNormalMap:Ee,clearcoatRoughnessMap:ie,iridescence:G,iridescenceMap:Ve,iridescenceThicknessMap:Ie,sheen:ae,sheenColorMap:Ue,sheenRoughnessMap:Re,specularMap:_e,specularColorMap:Pe,specularIntensityMap:Ke,transmission:oe,transmissionMap:it,thicknessMap:je,gradientMap:ot,opaque:v.transparent===!1&&v.blending===pr&&v.alphaToCoverage===!1,alphaMap:R,alphaTest:he,alphaHash:pe,combine:v.combine,mapUv:Be&&p(v.map.channel),aoMapUv:N&&p(v.aoMap.channel),lightMapUv:X&&p(v.lightMap.channel),bumpMapUv:z&&p(v.bumpMap.channel),normalMapUv:Q&&p(v.normalMap.channel),displacementMapUv:te&&p(v.displacementMap.channel),emissiveMapUv:x&&p(v.emissiveMap.channel),metalnessMapUv:g&&p(v.metalnessMap.channel),roughnessMapUv:w&&p(v.roughnessMap.channel),anisotropyMapUv:fe&&p(v.anisotropyMap.channel),clearcoatMapUv:ge&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:Ee&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Ve&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:Ie&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:Re&&p(v.sheenRoughnessMap.channel),specularMapUv:_e&&p(v.specularMap.channel),specularColorMapUv:Pe&&p(v.specularColorMap.channel),specularIntensityMapUv:Ke&&p(v.specularIntensityMap.channel),transmissionMapUv:it&&p(v.transmissionMap.channel),thicknessMapUv:je&&p(v.thicknessMap.channel),alphaMapUv:R&&p(v.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Q||W),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!k.attributes.uv&&(Be||R),fog:!!Z,useFog:v.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:I.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:Fe,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&F.length>0,shadowMapType:n.shadowMap.type,toneMapping:De,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Be&&v.map.isVideoTexture===!0&&rt.getTransfer(v.map.colorSpace)===ft,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===$n,flipSided:v.side===$t,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:Te&&v.extensions.derivatives===!0,extensionFragDepth:Te&&v.extensions.fragDepth===!0,extensionDrawBuffers:Te&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:Te&&v.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Te&&v.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Te&&v.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:f||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return tt.vertexUv1s=u.has(1),tt.vertexUv2s=u.has(2),tt.vertexUv3s=u.has(3),u.clear(),tt}function E(v){const A=[];if(v.shaderID?A.push(v.shaderID):(A.push(v.customVertexShaderID),A.push(v.customFragmentShaderID)),v.defines!==void 0)for(const F in v.defines)A.push(F),A.push(v.defines[F]);return v.isRawShaderMaterial===!1&&(S(A,v),b(A,v),A.push(n.outputColorSpace)),A.push(v.customProgramCacheKey),A.join()}function S(v,A){v.push(A.precision),v.push(A.outputColorSpace),v.push(A.envMapMode),v.push(A.envMapCubeUVHeight),v.push(A.mapUv),v.push(A.alphaMapUv),v.push(A.lightMapUv),v.push(A.aoMapUv),v.push(A.bumpMapUv),v.push(A.normalMapUv),v.push(A.displacementMapUv),v.push(A.emissiveMapUv),v.push(A.metalnessMapUv),v.push(A.roughnessMapUv),v.push(A.anisotropyMapUv),v.push(A.clearcoatMapUv),v.push(A.clearcoatNormalMapUv),v.push(A.clearcoatRoughnessMapUv),v.push(A.iridescenceMapUv),v.push(A.iridescenceThicknessMapUv),v.push(A.sheenColorMapUv),v.push(A.sheenRoughnessMapUv),v.push(A.specularMapUv),v.push(A.specularColorMapUv),v.push(A.specularIntensityMapUv),v.push(A.transmissionMapUv),v.push(A.thicknessMapUv),v.push(A.combine),v.push(A.fogExp2),v.push(A.sizeAttenuation),v.push(A.morphTargetsCount),v.push(A.morphAttributeCount),v.push(A.numDirLights),v.push(A.numPointLights),v.push(A.numSpotLights),v.push(A.numSpotLightMaps),v.push(A.numHemiLights),v.push(A.numRectAreaLights),v.push(A.numDirLightShadows),v.push(A.numPointLightShadows),v.push(A.numSpotLightShadows),v.push(A.numSpotLightShadowsWithMaps),v.push(A.numLightProbes),v.push(A.shadowMapType),v.push(A.toneMapping),v.push(A.numClippingPlanes),v.push(A.numClipIntersection),v.push(A.depthPacking)}function b(v,A){o.disableAll(),A.isWebGL2&&o.enable(0),A.supportsVertexTextures&&o.enable(1),A.instancing&&o.enable(2),A.instancingColor&&o.enable(3),A.matcap&&o.enable(4),A.envMap&&o.enable(5),A.normalMapObjectSpace&&o.enable(6),A.normalMapTangentSpace&&o.enable(7),A.clearcoat&&o.enable(8),A.iridescence&&o.enable(9),A.alphaTest&&o.enable(10),A.vertexColors&&o.enable(11),A.vertexAlphas&&o.enable(12),A.vertexUv1s&&o.enable(13),A.vertexUv2s&&o.enable(14),A.vertexUv3s&&o.enable(15),A.vertexTangents&&o.enable(16),A.anisotropy&&o.enable(17),A.alphaHash&&o.enable(18),A.batching&&o.enable(19),v.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.skinning&&o.enable(4),A.morphTargets&&o.enable(5),A.morphNormals&&o.enable(6),A.morphColors&&o.enable(7),A.premultipliedAlpha&&o.enable(8),A.shadowMapEnabled&&o.enable(9),A.useLegacyLights&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.alphaToCoverage&&o.enable(20),v.push(o.mask)}function D(v){const A=M[v.type];let F;if(A){const ne=An[A];F=Fg.clone(ne.uniforms)}else F=v.uniforms;return F}function P(v,A){let F;for(let ne=0,I=c.length;ne<I;ne++){const Z=c[ne];if(Z.cacheKey===A){F=Z,++F.usedTimes;break}}return F===void 0&&(F=new Z0(n,A,v,s),c.push(F)),F}function L(v){if(--v.usedTimes===0){const A=c.indexOf(v);c[A]=c[c.length-1],c.pop(),v.destroy()}}function q(v){l.remove(v)}function K(){l.dispose()}return{getParameters:h,getProgramCacheKey:E,getUniforms:D,acquireProgram:P,releaseProgram:L,releaseShaderCache:q,programs:c,dispose:K}}function nS(){let n=new WeakMap;function e(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function t(s){n.delete(s)}function i(s,a,o){n.get(s)[a]=o}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function iS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function bu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Eu(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(f,d,m,y,M,p){let h=n[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:m,groupOrder:y,renderOrder:f.renderOrder,z:M,group:p},n[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=m,h.groupOrder=y,h.renderOrder=f.renderOrder,h.z=M,h.group=p),e++,h}function o(f,d,m,y,M,p){const h=a(f,d,m,y,M,p);m.transmission>0?i.push(h):m.transparent===!0?r.push(h):t.push(h)}function l(f,d,m,y,M,p){const h=a(f,d,m,y,M,p);m.transmission>0?i.unshift(h):m.transparent===!0?r.unshift(h):t.unshift(h)}function u(f,d){t.length>1&&t.sort(f||iS),i.length>1&&i.sort(d||bu),r.length>1&&r.sort(d||bu)}function c(){for(let f=e,d=n.length;f<d;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:c,sort:u}}function rS(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Eu,n.set(i,[a])):r>=s.length?(a=new Eu,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function sS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new st};break;case"SpotLight":t={position:new H,direction:new H,color:new st,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new st,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new st,groundColor:new st};break;case"RectAreaLight":t={color:new st,position:new H,halfWidth:new H,halfHeight:new H};break}return n[e.id]=t,t}}}function oS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let aS=0;function lS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function cS(n,e){const t=new sS,i=oS(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new H);const s=new H,a=new Rt,o=new Rt;function l(c,f){let d=0,m=0,y=0;for(let F=0;F<9;F++)r.probe[F].set(0,0,0);let M=0,p=0,h=0,E=0,S=0,b=0,D=0,P=0,L=0,q=0,K=0;c.sort(lS);const v=f===!0?Math.PI:1;for(let F=0,ne=c.length;F<ne;F++){const I=c[F],Z=I.color,k=I.intensity,ee=I.distance,j=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)d+=Z.r*k*v,m+=Z.g*k*v,y+=Z.b*k*v;else if(I.isLightProbe){for(let se=0;se<9;se++)r.probe[se].addScaledVector(I.sh.coefficients[se],k);K++}else if(I.isDirectionalLight){const se=t.get(I);if(se.color.copy(I.color).multiplyScalar(I.intensity*v),I.castShadow){const le=I.shadow,ue=i.get(I);ue.shadowBias=le.bias,ue.shadowNormalBias=le.normalBias,ue.shadowRadius=le.radius,ue.shadowMapSize=le.mapSize,r.directionalShadow[M]=ue,r.directionalShadowMap[M]=j,r.directionalShadowMatrix[M]=I.shadow.matrix,b++}r.directional[M]=se,M++}else if(I.isSpotLight){const se=t.get(I);se.position.setFromMatrixPosition(I.matrixWorld),se.color.copy(Z).multiplyScalar(k*v),se.distance=ee,se.coneCos=Math.cos(I.angle),se.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),se.decay=I.decay,r.spot[h]=se;const le=I.shadow;if(I.map&&(r.spotLightMap[L]=I.map,L++,le.updateMatrices(I),I.castShadow&&q++),r.spotLightMatrix[h]=le.matrix,I.castShadow){const ue=i.get(I);ue.shadowBias=le.bias,ue.shadowNormalBias=le.normalBias,ue.shadowRadius=le.radius,ue.shadowMapSize=le.mapSize,r.spotShadow[h]=ue,r.spotShadowMap[h]=j,P++}h++}else if(I.isRectAreaLight){const se=t.get(I);se.color.copy(Z).multiplyScalar(k),se.halfWidth.set(I.width*.5,0,0),se.halfHeight.set(0,I.height*.5,0),r.rectArea[E]=se,E++}else if(I.isPointLight){const se=t.get(I);if(se.color.copy(I.color).multiplyScalar(I.intensity*v),se.distance=I.distance,se.decay=I.decay,I.castShadow){const le=I.shadow,ue=i.get(I);ue.shadowBias=le.bias,ue.shadowNormalBias=le.normalBias,ue.shadowRadius=le.radius,ue.shadowMapSize=le.mapSize,ue.shadowCameraNear=le.camera.near,ue.shadowCameraFar=le.camera.far,r.pointShadow[p]=ue,r.pointShadowMap[p]=j,r.pointShadowMatrix[p]=I.shadow.matrix,D++}r.point[p]=se,p++}else if(I.isHemisphereLight){const se=t.get(I);se.skyColor.copy(I.color).multiplyScalar(k*v),se.groundColor.copy(I.groundColor).multiplyScalar(k*v),r.hemi[S]=se,S++}}E>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=me.LTC_FLOAT_1,r.rectAreaLTC2=me.LTC_FLOAT_2):(r.rectAreaLTC1=me.LTC_HALF_1,r.rectAreaLTC2=me.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=me.LTC_FLOAT_1,r.rectAreaLTC2=me.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=me.LTC_HALF_1,r.rectAreaLTC2=me.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=m,r.ambient[2]=y;const A=r.hash;(A.directionalLength!==M||A.pointLength!==p||A.spotLength!==h||A.rectAreaLength!==E||A.hemiLength!==S||A.numDirectionalShadows!==b||A.numPointShadows!==D||A.numSpotShadows!==P||A.numSpotMaps!==L||A.numLightProbes!==K)&&(r.directional.length=M,r.spot.length=h,r.rectArea.length=E,r.point.length=p,r.hemi.length=S,r.directionalShadow.length=b,r.directionalShadowMap.length=b,r.pointShadow.length=D,r.pointShadowMap.length=D,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=b,r.pointShadowMatrix.length=D,r.spotLightMatrix.length=P+L-q,r.spotLightMap.length=L,r.numSpotLightShadowsWithMaps=q,r.numLightProbes=K,A.directionalLength=M,A.pointLength=p,A.spotLength=h,A.rectAreaLength=E,A.hemiLength=S,A.numDirectionalShadows=b,A.numPointShadows=D,A.numSpotShadows=P,A.numSpotMaps=L,A.numLightProbes=K,r.version=aS++)}function u(c,f){let d=0,m=0,y=0,M=0,p=0;const h=f.matrixWorldInverse;for(let E=0,S=c.length;E<S;E++){const b=c[E];if(b.isDirectionalLight){const D=r.directional[d];D.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),D.direction.sub(s),D.direction.transformDirection(h),d++}else if(b.isSpotLight){const D=r.spot[y];D.position.setFromMatrixPosition(b.matrixWorld),D.position.applyMatrix4(h),D.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),D.direction.sub(s),D.direction.transformDirection(h),y++}else if(b.isRectAreaLight){const D=r.rectArea[M];D.position.setFromMatrixPosition(b.matrixWorld),D.position.applyMatrix4(h),o.identity(),a.copy(b.matrixWorld),a.premultiply(h),o.extractRotation(a),D.halfWidth.set(b.width*.5,0,0),D.halfHeight.set(0,b.height*.5,0),D.halfWidth.applyMatrix4(o),D.halfHeight.applyMatrix4(o),M++}else if(b.isPointLight){const D=r.point[m];D.position.setFromMatrixPosition(b.matrixWorld),D.position.applyMatrix4(h),m++}else if(b.isHemisphereLight){const D=r.hemi[p];D.direction.setFromMatrixPosition(b.matrixWorld),D.direction.transformDirection(h),p++}}}return{setup:l,setupView:u,state:r}}function Tu(n,e){const t=new cS(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(f){i.push(f)}function o(f){r.push(f)}function l(f){t.setup(i,f)}function u(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:u,pushLight:a,pushShadow:o}}function uS(n,e){let t=new WeakMap;function i(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new Tu(n,e),t.set(s,[l])):a>=o.length?(l=new Tu(n,e),o.push(l)):l=o[a],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class fS extends hs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=og,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class dS extends hs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const hS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pS=`uniform sampler2D shadow_pass;
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
}`;function mS(n,e,t){let i=new md;const r=new Ye,s=new Ye,a=new wt,o=new fS({depthPacking:ag}),l=new dS,u={},c=t.maxTextureSize,f={[mi]:$t,[$t]:mi,[$n]:$n},d=new gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ye},radius:{value:4}},vertexShader:hS,fragmentShader:pS}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const y=new _i;y.setAttribute("position",new Ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new gn(y,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wf;let h=this.type;this.render=function(P,L,q){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||P.length===0)return;const K=n.getRenderTarget(),v=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),F=n.state;F.setBlending(fi),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const ne=h!==Hn&&this.type===Hn,I=h===Hn&&this.type!==Hn;for(let Z=0,k=P.length;Z<k;Z++){const ee=P[Z],j=ee.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;r.copy(j.mapSize);const se=j.getFrameExtents();if(r.multiply(se),s.copy(j.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/se.x),r.x=s.x*se.x,j.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/se.y),r.y=s.y*se.y,j.mapSize.y=s.y)),j.map===null||ne===!0||I===!0){const ue=this.type!==Hn?{minFilter:Ot,magFilter:Ot}:{};j.map!==null&&j.map.dispose(),j.map=new Gi(r.x,r.y,ue),j.map.texture.name=ee.name+".shadowMap",j.camera.updateProjectionMatrix()}n.setRenderTarget(j.map),n.clear();const le=j.getViewportCount();for(let ue=0;ue<le;ue++){const de=j.getViewport(ue);a.set(s.x*de.x,s.y*de.y,s.x*de.z,s.y*de.w),F.viewport(a),j.updateMatrices(ee,ue),i=j.getFrustum(),b(L,q,j.camera,ee,this.type)}j.isPointLightShadow!==!0&&this.type===Hn&&E(j,q),j.needsUpdate=!1}h=this.type,p.needsUpdate=!1,n.setRenderTarget(K,v,A)};function E(P,L){const q=e.update(M);d.defines.VSM_SAMPLES!==P.blurSamples&&(d.defines.VSM_SAMPLES=P.blurSamples,m.defines.VSM_SAMPLES=P.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Gi(r.x,r.y)),d.uniforms.shadow_pass.value=P.map.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,n.setRenderTarget(P.mapPass),n.clear(),n.renderBufferDirect(L,null,q,d,M,null),m.uniforms.shadow_pass.value=P.mapPass.texture,m.uniforms.resolution.value=P.mapSize,m.uniforms.radius.value=P.radius,n.setRenderTarget(P.map),n.clear(),n.renderBufferDirect(L,null,q,m,M,null)}function S(P,L,q,K){let v=null;const A=q.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(A!==void 0)v=A;else if(v=q.isPointLight===!0?l:o,n.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const F=v.uuid,ne=L.uuid;let I=u[F];I===void 0&&(I={},u[F]=I);let Z=I[ne];Z===void 0&&(Z=v.clone(),I[ne]=Z,L.addEventListener("dispose",D)),v=Z}if(v.visible=L.visible,v.wireframe=L.wireframe,K===Hn?v.side=L.shadowSide!==null?L.shadowSide:L.side:v.side=L.shadowSide!==null?L.shadowSide:f[L.side],v.alphaMap=L.alphaMap,v.alphaTest=L.alphaTest,v.map=L.map,v.clipShadows=L.clipShadows,v.clippingPlanes=L.clippingPlanes,v.clipIntersection=L.clipIntersection,v.displacementMap=L.displacementMap,v.displacementScale=L.displacementScale,v.displacementBias=L.displacementBias,v.wireframeLinewidth=L.wireframeLinewidth,v.linewidth=L.linewidth,q.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const F=n.properties.get(v);F.light=q}return v}function b(P,L,q,K,v){if(P.visible===!1)return;if(P.layers.test(L.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&v===Hn)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,P.matrixWorld);const ne=e.update(P),I=P.material;if(Array.isArray(I)){const Z=ne.groups;for(let k=0,ee=Z.length;k<ee;k++){const j=Z[k],se=I[j.materialIndex];if(se&&se.visible){const le=S(P,se,K,v);P.onBeforeShadow(n,P,L,q,ne,le,j),n.renderBufferDirect(q,null,ne,le,P,j),P.onAfterShadow(n,P,L,q,ne,le,j)}}}else if(I.visible){const Z=S(P,I,K,v);P.onBeforeShadow(n,P,L,q,ne,Z,null),n.renderBufferDirect(q,null,ne,Z,P,null),P.onAfterShadow(n,P,L,q,ne,Z,null)}}const F=P.children;for(let ne=0,I=F.length;ne<I;ne++)b(F[ne],L,q,K,v)}function D(P){P.target.removeEventListener("dispose",D);for(const q in u){const K=u[q],v=P.target.uuid;v in K&&(K[v].dispose(),delete K[v])}}}function gS(n,e,t){const i=t.isWebGL2;function r(){let R=!1;const he=new wt;let pe=null;const Te=new wt(0,0,0,0);return{setMask:function(De){pe!==De&&!R&&(n.colorMask(De,De,De,De),pe=De)},setLocked:function(De){R=De},setClear:function(De,tt,lt,Et,en){en===!0&&(De*=Et,tt*=Et,lt*=Et),he.set(De,tt,lt,Et),Te.equals(he)===!1&&(n.clearColor(De,tt,lt,Et),Te.copy(he))},reset:function(){R=!1,pe=null,Te.set(-1,0,0,0)}}}function s(){let R=!1,he=null,pe=null,Te=null;return{setTest:function(De){De?be(n.DEPTH_TEST):qe(n.DEPTH_TEST)},setMask:function(De){he!==De&&!R&&(n.depthMask(De),he=De)},setFunc:function(De){if(pe!==De){switch(De){case Om:n.depthFunc(n.NEVER);break;case Bm:n.depthFunc(n.ALWAYS);break;case zm:n.depthFunc(n.LESS);break;case no:n.depthFunc(n.LEQUAL);break;case km:n.depthFunc(n.EQUAL);break;case Hm:n.depthFunc(n.GEQUAL);break;case Gm:n.depthFunc(n.GREATER);break;case Vm:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}pe=De}},setLocked:function(De){R=De},setClear:function(De){Te!==De&&(n.clearDepth(De),Te=De)},reset:function(){R=!1,he=null,pe=null,Te=null}}}function a(){let R=!1,he=null,pe=null,Te=null,De=null,tt=null,lt=null,Et=null,en=null;return{setTest:function(ct){R||(ct?be(n.STENCIL_TEST):qe(n.STENCIL_TEST))},setMask:function(ct){he!==ct&&!R&&(n.stencilMask(ct),he=ct)},setFunc:function(ct,It,yn){(pe!==ct||Te!==It||De!==yn)&&(n.stencilFunc(ct,It,yn),pe=ct,Te=It,De=yn)},setOp:function(ct,It,yn){(tt!==ct||lt!==It||Et!==yn)&&(n.stencilOp(ct,It,yn),tt=ct,lt=It,Et=yn)},setLocked:function(ct){R=ct},setClear:function(ct){en!==ct&&(n.clearStencil(ct),en=ct)},reset:function(){R=!1,he=null,pe=null,Te=null,De=null,tt=null,lt=null,Et=null,en=null}}}const o=new r,l=new s,u=new a,c=new WeakMap,f=new WeakMap;let d={},m={},y=new WeakMap,M=[],p=null,h=!1,E=null,S=null,b=null,D=null,P=null,L=null,q=null,K=new st(0,0,0),v=0,A=!1,F=null,ne=null,I=null,Z=null,k=null;const ee=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,se=0;const le=n.getParameter(n.VERSION);le.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(le)[1]),j=se>=1):le.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(le)[1]),j=se>=2);let ue=null,de={};const Fe=n.getParameter(n.SCISSOR_BOX),J=n.getParameter(n.VIEWPORT),ce=new wt().fromArray(Fe),xe=new wt().fromArray(J);function we(R,he,pe,Te){const De=new Uint8Array(4),tt=n.createTexture();n.bindTexture(R,tt),n.texParameteri(R,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(R,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let lt=0;lt<pe;lt++)i&&(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)?n.texImage3D(he,0,n.RGBA,1,1,Te,0,n.RGBA,n.UNSIGNED_BYTE,De):n.texImage2D(he+lt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,De);return tt}const Ce={};Ce[n.TEXTURE_2D]=we(n.TEXTURE_2D,n.TEXTURE_2D,1),Ce[n.TEXTURE_CUBE_MAP]=we(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ce[n.TEXTURE_2D_ARRAY]=we(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ce[n.TEXTURE_3D]=we(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),u.setClear(0),be(n.DEPTH_TEST),l.setFunc(no),te(!1),x(rc),be(n.CULL_FACE),z(fi);function be(R){d[R]!==!0&&(n.enable(R),d[R]=!0)}function qe(R){d[R]!==!1&&(n.disable(R),d[R]=!1)}function Be(R,he){return m[R]!==he?(n.bindFramebuffer(R,he),m[R]=he,i&&(R===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=he),R===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=he)),!0):!1}function _(R,he){let pe=M,Te=!1;if(R)if(pe=y.get(he),pe===void 0&&(pe=[],y.set(he,pe)),R.isWebGLMultipleRenderTargets){const De=R.texture;if(pe.length!==De.length||pe[0]!==n.COLOR_ATTACHMENT0){for(let tt=0,lt=De.length;tt<lt;tt++)pe[tt]=n.COLOR_ATTACHMENT0+tt;pe.length=De.length,Te=!0}}else pe[0]!==n.COLOR_ATTACHMENT0&&(pe[0]=n.COLOR_ATTACHMENT0,Te=!0);else pe[0]!==n.BACK&&(pe[0]=n.BACK,Te=!0);Te&&(t.isWebGL2?n.drawBuffers(pe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(pe))}function U(R){return p!==R?(n.useProgram(R),p=R,!0):!1}const N={[Di]:n.FUNC_ADD,[Mm]:n.FUNC_SUBTRACT,[bm]:n.FUNC_REVERSE_SUBTRACT};if(i)N[lc]=n.MIN,N[cc]=n.MAX;else{const R=e.get("EXT_blend_minmax");R!==null&&(N[lc]=R.MIN_EXT,N[cc]=R.MAX_EXT)}const X={[Em]:n.ZERO,[Tm]:n.ONE,[Am]:n.SRC_COLOR,[Na]:n.SRC_ALPHA,[Dm]:n.SRC_ALPHA_SATURATE,[Lm]:n.DST_COLOR,[Rm]:n.DST_ALPHA,[wm]:n.ONE_MINUS_SRC_COLOR,[Fa]:n.ONE_MINUS_SRC_ALPHA,[Pm]:n.ONE_MINUS_DST_COLOR,[Cm]:n.ONE_MINUS_DST_ALPHA,[Um]:n.CONSTANT_COLOR,[Im]:n.ONE_MINUS_CONSTANT_COLOR,[Nm]:n.CONSTANT_ALPHA,[Fm]:n.ONE_MINUS_CONSTANT_ALPHA};function z(R,he,pe,Te,De,tt,lt,Et,en,ct){if(R===fi){h===!0&&(qe(n.BLEND),h=!1);return}if(h===!1&&(be(n.BLEND),h=!0),R!==ym){if(R!==E||ct!==A){if((S!==Di||P!==Di)&&(n.blendEquation(n.FUNC_ADD),S=Di,P=Di),ct)switch(R){case pr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case sc:n.blendFunc(n.ONE,n.ONE);break;case oc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ac:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case pr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case sc:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case oc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ac:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}b=null,D=null,L=null,q=null,K.set(0,0,0),v=0,E=R,A=ct}return}De=De||he,tt=tt||pe,lt=lt||Te,(he!==S||De!==P)&&(n.blendEquationSeparate(N[he],N[De]),S=he,P=De),(pe!==b||Te!==D||tt!==L||lt!==q)&&(n.blendFuncSeparate(X[pe],X[Te],X[tt],X[lt]),b=pe,D=Te,L=tt,q=lt),(Et.equals(K)===!1||en!==v)&&(n.blendColor(Et.r,Et.g,Et.b,en),K.copy(Et),v=en),E=R,A=!1}function Q(R,he){R.side===$n?qe(n.CULL_FACE):be(n.CULL_FACE);let pe=R.side===$t;he&&(pe=!pe),te(pe),R.blending===pr&&R.transparent===!1?z(fi):z(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),l.setFunc(R.depthFunc),l.setTest(R.depthTest),l.setMask(R.depthWrite),o.setMask(R.colorWrite);const Te=R.stencilWrite;u.setTest(Te),Te&&(u.setMask(R.stencilWriteMask),u.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),u.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),w(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?be(n.SAMPLE_ALPHA_TO_COVERAGE):qe(n.SAMPLE_ALPHA_TO_COVERAGE)}function te(R){F!==R&&(R?n.frontFace(n.CW):n.frontFace(n.CCW),F=R)}function x(R){R!==vm?(be(n.CULL_FACE),R!==ne&&(R===rc?n.cullFace(n.BACK):R===xm?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):qe(n.CULL_FACE),ne=R}function g(R){R!==I&&(j&&n.lineWidth(R),I=R)}function w(R,he,pe){R?(be(n.POLYGON_OFFSET_FILL),(Z!==he||k!==pe)&&(n.polygonOffset(he,pe),Z=he,k=pe)):qe(n.POLYGON_OFFSET_FILL)}function W(R){R?be(n.SCISSOR_TEST):qe(n.SCISSOR_TEST)}function O(R){R===void 0&&(R=n.TEXTURE0+ee-1),ue!==R&&(n.activeTexture(R),ue=R)}function G(R,he,pe){pe===void 0&&(ue===null?pe=n.TEXTURE0+ee-1:pe=ue);let Te=de[pe];Te===void 0&&(Te={type:void 0,texture:void 0},de[pe]=Te),(Te.type!==R||Te.texture!==he)&&(ue!==pe&&(n.activeTexture(pe),ue=pe),n.bindTexture(R,he||Ce[R]),Te.type=R,Te.texture=he)}function ae(){const R=de[ue];R!==void 0&&R.type!==void 0&&(n.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function oe(){try{n.compressedTexImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function fe(){try{n.compressedTexImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ge(){try{n.texSubImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ee(){try{n.texSubImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ie(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ve(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ie(){try{n.texStorage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ue(){try{n.texStorage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Re(){try{n.texImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function _e(){try{n.texImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Pe(R){ce.equals(R)===!1&&(n.scissor(R.x,R.y,R.z,R.w),ce.copy(R))}function Ke(R){xe.equals(R)===!1&&(n.viewport(R.x,R.y,R.z,R.w),xe.copy(R))}function it(R,he){let pe=f.get(he);pe===void 0&&(pe=new WeakMap,f.set(he,pe));let Te=pe.get(R);Te===void 0&&(Te=n.getUniformBlockIndex(he,R.name),pe.set(R,Te))}function je(R,he){const Te=f.get(he).get(R);c.get(he)!==Te&&(n.uniformBlockBinding(he,Te,R.__bindingPointIndex),c.set(he,Te))}function ot(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},ue=null,de={},m={},y=new WeakMap,M=[],p=null,h=!1,E=null,S=null,b=null,D=null,P=null,L=null,q=null,K=new st(0,0,0),v=0,A=!1,F=null,ne=null,I=null,Z=null,k=null,ce.set(0,0,n.canvas.width,n.canvas.height),xe.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),u.reset()}return{buffers:{color:o,depth:l,stencil:u},enable:be,disable:qe,bindFramebuffer:Be,drawBuffers:_,useProgram:U,setBlending:z,setMaterial:Q,setFlipSided:te,setCullFace:x,setLineWidth:g,setPolygonOffset:w,setScissorTest:W,activeTexture:O,bindTexture:G,unbindTexture:ae,compressedTexImage2D:oe,compressedTexImage3D:fe,texImage2D:Re,texImage3D:_e,updateUBOMapping:it,uniformBlockBinding:je,texStorage2D:Ie,texStorage3D:Ue,texSubImage2D:ge,texSubImage3D:Ee,compressedTexSubImage2D:ie,compressedTexSubImage3D:Ve,scissor:Pe,viewport:Ke,reset:ot}}function _S(n,e,t,i,r,s,a){const o=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new WeakMap;let f;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(x,g){return m?new OffscreenCanvas(x,g):ao("canvas")}function M(x,g,w,W){let O=1;if((x.width>W||x.height>W)&&(O=W/Math.max(x.width,x.height)),O<1||g===!0)if(typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&x instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&x instanceof ImageBitmap){const G=g?Va:Math.floor,ae=G(O*x.width),oe=G(O*x.height);f===void 0&&(f=y(ae,oe));const fe=w?y(ae,oe):f;return fe.width=ae,fe.height=oe,fe.getContext("2d").drawImage(x,0,0,ae,oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+x.width+"x"+x.height+") to ("+ae+"x"+oe+")."),fe}else return"data"in x&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+x.width+"x"+x.height+")."),x;return x}function p(x){return zc(x.width)&&zc(x.height)}function h(x){return o?!1:x.wrapS!==pn||x.wrapT!==pn||x.minFilter!==Ot&&x.minFilter!==Vt}function E(x,g){return x.generateMipmaps&&g&&x.minFilter!==Ot&&x.minFilter!==Vt}function S(x){n.generateMipmap(x)}function b(x,g,w,W,O=!1){if(o===!1)return g;if(x!==null){if(n[x]!==void 0)return n[x];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+x+"'")}let G=g;if(g===n.RED&&(w===n.FLOAT&&(G=n.R32F),w===n.HALF_FLOAT&&(G=n.R16F),w===n.UNSIGNED_BYTE&&(G=n.R8)),g===n.RED_INTEGER&&(w===n.UNSIGNED_BYTE&&(G=n.R8UI),w===n.UNSIGNED_SHORT&&(G=n.R16UI),w===n.UNSIGNED_INT&&(G=n.R32UI),w===n.BYTE&&(G=n.R8I),w===n.SHORT&&(G=n.R16I),w===n.INT&&(G=n.R32I)),g===n.RG&&(w===n.FLOAT&&(G=n.RG32F),w===n.HALF_FLOAT&&(G=n.RG16F),w===n.UNSIGNED_BYTE&&(G=n.RG8)),g===n.RGBA){const ae=O?io:rt.getTransfer(W);w===n.FLOAT&&(G=n.RGBA32F),w===n.HALF_FLOAT&&(G=n.RGBA16F),w===n.UNSIGNED_BYTE&&(G=ae===ft?n.SRGB8_ALPHA8:n.RGBA8),w===n.UNSIGNED_SHORT_4_4_4_4&&(G=n.RGBA4),w===n.UNSIGNED_SHORT_5_5_5_1&&(G=n.RGB5_A1)}return(G===n.R16F||G===n.R32F||G===n.RG16F||G===n.RG32F||G===n.RGBA16F||G===n.RGBA32F)&&e.get("EXT_color_buffer_float"),G}function D(x,g,w){return E(x,w)===!0||x.isFramebufferTexture&&x.minFilter!==Ot&&x.minFilter!==Vt?Math.log2(Math.max(g.width,g.height))+1:x.mipmaps!==void 0&&x.mipmaps.length>0?x.mipmaps.length:x.isCompressedTexture&&Array.isArray(x.image)?g.mipmaps.length:1}function P(x){return x===Ot||x===uc||x===Dr?n.NEAREST:n.LINEAR}function L(x){const g=x.target;g.removeEventListener("dispose",L),K(g),g.isVideoTexture&&c.delete(g)}function q(x){const g=x.target;g.removeEventListener("dispose",q),A(g)}function K(x){const g=i.get(x);if(g.__webglInit===void 0)return;const w=x.source,W=d.get(w);if(W){const O=W[g.__cacheKey];O.usedTimes--,O.usedTimes===0&&v(x),Object.keys(W).length===0&&d.delete(w)}i.remove(x)}function v(x){const g=i.get(x);n.deleteTexture(g.__webglTexture);const w=x.source,W=d.get(w);delete W[g.__cacheKey],a.memory.textures--}function A(x){const g=x.texture,w=i.get(x),W=i.get(g);if(W.__webglTexture!==void 0&&(n.deleteTexture(W.__webglTexture),a.memory.textures--),x.depthTexture&&x.depthTexture.dispose(),x.isWebGLCubeRenderTarget)for(let O=0;O<6;O++){if(Array.isArray(w.__webglFramebuffer[O]))for(let G=0;G<w.__webglFramebuffer[O].length;G++)n.deleteFramebuffer(w.__webglFramebuffer[O][G]);else n.deleteFramebuffer(w.__webglFramebuffer[O]);w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[O])}else{if(Array.isArray(w.__webglFramebuffer))for(let O=0;O<w.__webglFramebuffer.length;O++)n.deleteFramebuffer(w.__webglFramebuffer[O]);else n.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let O=0;O<w.__webglColorRenderbuffer.length;O++)w.__webglColorRenderbuffer[O]&&n.deleteRenderbuffer(w.__webglColorRenderbuffer[O]);w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer)}if(x.isWebGLMultipleRenderTargets)for(let O=0,G=g.length;O<G;O++){const ae=i.get(g[O]);ae.__webglTexture&&(n.deleteTexture(ae.__webglTexture),a.memory.textures--),i.remove(g[O])}i.remove(g),i.remove(x)}let F=0;function ne(){F=0}function I(){const x=F;return x>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+x+" texture units while this GPU supports only "+r.maxTextures),F+=1,x}function Z(x){const g=[];return g.push(x.wrapS),g.push(x.wrapT),g.push(x.wrapR||0),g.push(x.magFilter),g.push(x.minFilter),g.push(x.anisotropy),g.push(x.internalFormat),g.push(x.format),g.push(x.type),g.push(x.generateMipmaps),g.push(x.premultiplyAlpha),g.push(x.flipY),g.push(x.unpackAlignment),g.push(x.colorSpace),g.join()}function k(x,g){const w=i.get(x);if(x.isVideoTexture&&Q(x),x.isRenderTargetTexture===!1&&x.version>0&&w.__version!==x.version){const W=x.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ce(w,x,g);return}}t.bindTexture(n.TEXTURE_2D,w.__webglTexture,n.TEXTURE0+g)}function ee(x,g){const w=i.get(x);if(x.version>0&&w.__version!==x.version){ce(w,x,g);return}t.bindTexture(n.TEXTURE_2D_ARRAY,w.__webglTexture,n.TEXTURE0+g)}function j(x,g){const w=i.get(x);if(x.version>0&&w.__version!==x.version){ce(w,x,g);return}t.bindTexture(n.TEXTURE_3D,w.__webglTexture,n.TEXTURE0+g)}function se(x,g){const w=i.get(x);if(x.version>0&&w.__version!==x.version){xe(w,x,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+g)}const le={[za]:n.REPEAT,[pn]:n.CLAMP_TO_EDGE,[ka]:n.MIRRORED_REPEAT},ue={[Ot]:n.NEAREST,[uc]:n.NEAREST_MIPMAP_NEAREST,[Dr]:n.NEAREST_MIPMAP_LINEAR,[Vt]:n.LINEAR,[Xo]:n.LINEAR_MIPMAP_NEAREST,[Ii]:n.LINEAR_MIPMAP_LINEAR},de={[cg]:n.NEVER,[mg]:n.ALWAYS,[ug]:n.LESS,[nd]:n.LEQUAL,[fg]:n.EQUAL,[pg]:n.GEQUAL,[dg]:n.GREATER,[hg]:n.NOTEQUAL};function Fe(x,g,w){if(g.type===qn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Vt||g.magFilter===Xo||g.magFilter===Dr||g.magFilter===Ii||g.minFilter===Vt||g.minFilter===Xo||g.minFilter===Dr||g.minFilter===Ii)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),w?(n.texParameteri(x,n.TEXTURE_WRAP_S,le[g.wrapS]),n.texParameteri(x,n.TEXTURE_WRAP_T,le[g.wrapT]),(x===n.TEXTURE_3D||x===n.TEXTURE_2D_ARRAY)&&n.texParameteri(x,n.TEXTURE_WRAP_R,le[g.wrapR]),n.texParameteri(x,n.TEXTURE_MAG_FILTER,ue[g.magFilter]),n.texParameteri(x,n.TEXTURE_MIN_FILTER,ue[g.minFilter])):(n.texParameteri(x,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(x,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(x===n.TEXTURE_3D||x===n.TEXTURE_2D_ARRAY)&&n.texParameteri(x,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(g.wrapS!==pn||g.wrapT!==pn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(x,n.TEXTURE_MAG_FILTER,P(g.magFilter)),n.texParameteri(x,n.TEXTURE_MIN_FILTER,P(g.minFilter)),g.minFilter!==Ot&&g.minFilter!==Vt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),g.compareFunction&&(n.texParameteri(x,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(x,n.TEXTURE_COMPARE_FUNC,de[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const W=e.get("EXT_texture_filter_anisotropic");if(g.magFilter===Ot||g.minFilter!==Dr&&g.minFilter!==Ii||g.type===qn&&e.has("OES_texture_float_linear")===!1||o===!1&&g.type===is&&e.has("OES_texture_half_float_linear")===!1)return;(g.anisotropy>1||i.get(g).__currentAnisotropy)&&(n.texParameterf(x,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy)}}function J(x,g){let w=!1;x.__webglInit===void 0&&(x.__webglInit=!0,g.addEventListener("dispose",L));const W=g.source;let O=d.get(W);O===void 0&&(O={},d.set(W,O));const G=Z(g);if(G!==x.__cacheKey){O[G]===void 0&&(O[G]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,w=!0),O[G].usedTimes++;const ae=O[x.__cacheKey];ae!==void 0&&(O[x.__cacheKey].usedTimes--,ae.usedTimes===0&&v(g)),x.__cacheKey=G,x.__webglTexture=O[G].texture}return w}function ce(x,g,w){let W=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(W=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(W=n.TEXTURE_3D);const O=J(x,g),G=g.source;t.bindTexture(W,x.__webglTexture,n.TEXTURE0+w);const ae=i.get(G);if(G.version!==ae.__version||O===!0){t.activeTexture(n.TEXTURE0+w);const oe=rt.getPrimaries(rt.workingColorSpace),fe=g.colorSpace===an?null:rt.getPrimaries(g.colorSpace),ge=g.colorSpace===an||oe===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Ee=h(g)&&p(g.image)===!1;let ie=M(g.image,Ee,!1,r.maxTextureSize);ie=te(g,ie);const Ve=p(ie)||o,Ie=s.convert(g.format,g.colorSpace);let Ue=s.convert(g.type),Re=b(g.internalFormat,Ie,Ue,g.colorSpace,g.isVideoTexture);Fe(W,g,Ve);let _e;const Pe=g.mipmaps,Ke=o&&g.isVideoTexture!==!0&&Re!==Qf,it=ae.__version===void 0||O===!0,je=G.dataReady,ot=D(g,ie,Ve);if(g.isDepthTexture)Re=n.DEPTH_COMPONENT,o?g.type===qn?Re=n.DEPTH_COMPONENT32F:g.type===ui?Re=n.DEPTH_COMPONENT24:g.type===Bi?Re=n.DEPTH24_STENCIL8:Re=n.DEPTH_COMPONENT16:g.type===qn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),g.format===zi&&Re===n.DEPTH_COMPONENT&&g.type!==al&&g.type!==ui&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),g.type=ui,Ue=s.convert(g.type)),g.format===yr&&Re===n.DEPTH_COMPONENT&&(Re=n.DEPTH_STENCIL,g.type!==Bi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),g.type=Bi,Ue=s.convert(g.type))),it&&(Ke?t.texStorage2D(n.TEXTURE_2D,1,Re,ie.width,ie.height):t.texImage2D(n.TEXTURE_2D,0,Re,ie.width,ie.height,0,Ie,Ue,null));else if(g.isDataTexture)if(Pe.length>0&&Ve){Ke&&it&&t.texStorage2D(n.TEXTURE_2D,ot,Re,Pe[0].width,Pe[0].height);for(let R=0,he=Pe.length;R<he;R++)_e=Pe[R],Ke?je&&t.texSubImage2D(n.TEXTURE_2D,R,0,0,_e.width,_e.height,Ie,Ue,_e.data):t.texImage2D(n.TEXTURE_2D,R,Re,_e.width,_e.height,0,Ie,Ue,_e.data);g.generateMipmaps=!1}else Ke?(it&&t.texStorage2D(n.TEXTURE_2D,ot,Re,ie.width,ie.height),je&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ie.width,ie.height,Ie,Ue,ie.data)):t.texImage2D(n.TEXTURE_2D,0,Re,ie.width,ie.height,0,Ie,Ue,ie.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Ke&&it&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ot,Re,Pe[0].width,Pe[0].height,ie.depth);for(let R=0,he=Pe.length;R<he;R++)_e=Pe[R],g.format!==mn?Ie!==null?Ke?je&&t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,R,0,0,0,_e.width,_e.height,ie.depth,Ie,_e.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,R,Re,_e.width,_e.height,ie.depth,0,_e.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?je&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,R,0,0,0,_e.width,_e.height,ie.depth,Ie,Ue,_e.data):t.texImage3D(n.TEXTURE_2D_ARRAY,R,Re,_e.width,_e.height,ie.depth,0,Ie,Ue,_e.data)}else{Ke&&it&&t.texStorage2D(n.TEXTURE_2D,ot,Re,Pe[0].width,Pe[0].height);for(let R=0,he=Pe.length;R<he;R++)_e=Pe[R],g.format!==mn?Ie!==null?Ke?je&&t.compressedTexSubImage2D(n.TEXTURE_2D,R,0,0,_e.width,_e.height,Ie,_e.data):t.compressedTexImage2D(n.TEXTURE_2D,R,Re,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?je&&t.texSubImage2D(n.TEXTURE_2D,R,0,0,_e.width,_e.height,Ie,Ue,_e.data):t.texImage2D(n.TEXTURE_2D,R,Re,_e.width,_e.height,0,Ie,Ue,_e.data)}else if(g.isDataArrayTexture)Ke?(it&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ot,Re,ie.width,ie.height,ie.depth),je&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,Ie,Ue,ie.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Re,ie.width,ie.height,ie.depth,0,Ie,Ue,ie.data);else if(g.isData3DTexture)Ke?(it&&t.texStorage3D(n.TEXTURE_3D,ot,Re,ie.width,ie.height,ie.depth),je&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,Ie,Ue,ie.data)):t.texImage3D(n.TEXTURE_3D,0,Re,ie.width,ie.height,ie.depth,0,Ie,Ue,ie.data);else if(g.isFramebufferTexture){if(it)if(Ke)t.texStorage2D(n.TEXTURE_2D,ot,Re,ie.width,ie.height);else{let R=ie.width,he=ie.height;for(let pe=0;pe<ot;pe++)t.texImage2D(n.TEXTURE_2D,pe,Re,R,he,0,Ie,Ue,null),R>>=1,he>>=1}}else if(Pe.length>0&&Ve){Ke&&it&&t.texStorage2D(n.TEXTURE_2D,ot,Re,Pe[0].width,Pe[0].height);for(let R=0,he=Pe.length;R<he;R++)_e=Pe[R],Ke?je&&t.texSubImage2D(n.TEXTURE_2D,R,0,0,Ie,Ue,_e):t.texImage2D(n.TEXTURE_2D,R,Re,Ie,Ue,_e);g.generateMipmaps=!1}else Ke?(it&&t.texStorage2D(n.TEXTURE_2D,ot,Re,ie.width,ie.height),je&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ie,Ue,ie)):t.texImage2D(n.TEXTURE_2D,0,Re,Ie,Ue,ie);E(g,Ve)&&S(W),ae.__version=G.version,g.onUpdate&&g.onUpdate(g)}x.__version=g.version}function xe(x,g,w){if(g.image.length!==6)return;const W=J(x,g),O=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,x.__webglTexture,n.TEXTURE0+w);const G=i.get(O);if(O.version!==G.__version||W===!0){t.activeTexture(n.TEXTURE0+w);const ae=rt.getPrimaries(rt.workingColorSpace),oe=g.colorSpace===an?null:rt.getPrimaries(g.colorSpace),fe=g.colorSpace===an||ae===oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const ge=g.isCompressedTexture||g.image[0].isCompressedTexture,Ee=g.image[0]&&g.image[0].isDataTexture,ie=[];for(let R=0;R<6;R++)!ge&&!Ee?ie[R]=M(g.image[R],!1,!0,r.maxCubemapSize):ie[R]=Ee?g.image[R].image:g.image[R],ie[R]=te(g,ie[R]);const Ve=ie[0],Ie=p(Ve)||o,Ue=s.convert(g.format,g.colorSpace),Re=s.convert(g.type),_e=b(g.internalFormat,Ue,Re,g.colorSpace),Pe=o&&g.isVideoTexture!==!0,Ke=G.__version===void 0||W===!0,it=O.dataReady;let je=D(g,Ve,Ie);Fe(n.TEXTURE_CUBE_MAP,g,Ie);let ot;if(ge){Pe&&Ke&&t.texStorage2D(n.TEXTURE_CUBE_MAP,je,_e,Ve.width,Ve.height);for(let R=0;R<6;R++){ot=ie[R].mipmaps;for(let he=0;he<ot.length;he++){const pe=ot[he];g.format!==mn?Ue!==null?Pe?it&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+R,he,0,0,pe.width,pe.height,Ue,pe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+R,he,_e,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pe?it&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+R,he,0,0,pe.width,pe.height,Ue,Re,pe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+R,he,_e,pe.width,pe.height,0,Ue,Re,pe.data)}}}else{ot=g.mipmaps,Pe&&Ke&&(ot.length>0&&je++,t.texStorage2D(n.TEXTURE_CUBE_MAP,je,_e,ie[0].width,ie[0].height));for(let R=0;R<6;R++)if(Ee){Pe?it&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+R,0,0,0,ie[R].width,ie[R].height,Ue,Re,ie[R].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+R,0,_e,ie[R].width,ie[R].height,0,Ue,Re,ie[R].data);for(let he=0;he<ot.length;he++){const Te=ot[he].image[R].image;Pe?it&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+R,he+1,0,0,Te.width,Te.height,Ue,Re,Te.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+R,he+1,_e,Te.width,Te.height,0,Ue,Re,Te.data)}}else{Pe?it&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+R,0,0,0,Ue,Re,ie[R]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+R,0,_e,Ue,Re,ie[R]);for(let he=0;he<ot.length;he++){const pe=ot[he];Pe?it&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+R,he+1,0,0,Ue,Re,pe.image[R]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+R,he+1,_e,Ue,Re,pe.image[R])}}}E(g,Ie)&&S(n.TEXTURE_CUBE_MAP),G.__version=O.version,g.onUpdate&&g.onUpdate(g)}x.__version=g.version}function we(x,g,w,W,O,G){const ae=s.convert(w.format,w.colorSpace),oe=s.convert(w.type),fe=b(w.internalFormat,ae,oe,w.colorSpace);if(!i.get(g).__hasExternalTextures){const Ee=Math.max(1,g.width>>G),ie=Math.max(1,g.height>>G);O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?t.texImage3D(O,G,fe,Ee,ie,g.depth,0,ae,oe,null):t.texImage2D(O,G,fe,Ee,ie,0,ae,oe,null)}t.bindFramebuffer(n.FRAMEBUFFER,x),z(g)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,W,O,i.get(w).__webglTexture,0,X(g)):(O===n.TEXTURE_2D||O>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&O<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,W,O,i.get(w).__webglTexture,G),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ce(x,g,w){if(n.bindRenderbuffer(n.RENDERBUFFER,x),g.depthBuffer&&!g.stencilBuffer){let W=o===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(w||z(g)){const O=g.depthTexture;O&&O.isDepthTexture&&(O.type===qn?W=n.DEPTH_COMPONENT32F:O.type===ui&&(W=n.DEPTH_COMPONENT24));const G=X(g);z(g)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,G,W,g.width,g.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,G,W,g.width,g.height)}else n.renderbufferStorage(n.RENDERBUFFER,W,g.width,g.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,x)}else if(g.depthBuffer&&g.stencilBuffer){const W=X(g);w&&z(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,W,n.DEPTH24_STENCIL8,g.width,g.height):z(g)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,W,n.DEPTH24_STENCIL8,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,x)}else{const W=g.isWebGLMultipleRenderTargets===!0?g.texture:[g.texture];for(let O=0;O<W.length;O++){const G=W[O],ae=s.convert(G.format,G.colorSpace),oe=s.convert(G.type),fe=b(G.internalFormat,ae,oe,G.colorSpace),ge=X(g);w&&z(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ge,fe,g.width,g.height):z(g)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ge,fe,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,fe,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function be(x,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,x),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(g.depthTexture).__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),k(g.depthTexture,0);const W=i.get(g.depthTexture).__webglTexture,O=X(g);if(g.depthTexture.format===zi)z(g)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,W,0,O):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,W,0);else if(g.depthTexture.format===yr)z(g)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,W,0,O):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,W,0);else throw new Error("Unknown depthTexture format")}function qe(x){const g=i.get(x),w=x.isWebGLCubeRenderTarget===!0;if(x.depthTexture&&!g.__autoAllocateDepthBuffer){if(w)throw new Error("target.depthTexture not supported in Cube render targets");be(g.__webglFramebuffer,x)}else if(w){g.__webglDepthbuffer=[];for(let W=0;W<6;W++)t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[W]),g.__webglDepthbuffer[W]=n.createRenderbuffer(),Ce(g.__webglDepthbuffer[W],x,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer=n.createRenderbuffer(),Ce(g.__webglDepthbuffer,x,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Be(x,g,w){const W=i.get(x);g!==void 0&&we(W.__webglFramebuffer,x,x.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),w!==void 0&&qe(x)}function _(x){const g=x.texture,w=i.get(x),W=i.get(g);x.addEventListener("dispose",q),x.isWebGLMultipleRenderTargets!==!0&&(W.__webglTexture===void 0&&(W.__webglTexture=n.createTexture()),W.__version=g.version,a.memory.textures++);const O=x.isWebGLCubeRenderTarget===!0,G=x.isWebGLMultipleRenderTargets===!0,ae=p(x)||o;if(O){w.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(o&&g.mipmaps&&g.mipmaps.length>0){w.__webglFramebuffer[oe]=[];for(let fe=0;fe<g.mipmaps.length;fe++)w.__webglFramebuffer[oe][fe]=n.createFramebuffer()}else w.__webglFramebuffer[oe]=n.createFramebuffer()}else{if(o&&g.mipmaps&&g.mipmaps.length>0){w.__webglFramebuffer=[];for(let oe=0;oe<g.mipmaps.length;oe++)w.__webglFramebuffer[oe]=n.createFramebuffer()}else w.__webglFramebuffer=n.createFramebuffer();if(G)if(r.drawBuffers){const oe=x.texture;for(let fe=0,ge=oe.length;fe<ge;fe++){const Ee=i.get(oe[fe]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&x.samples>0&&z(x)===!1){const oe=G?g:[g];w.__webglMultisampledFramebuffer=n.createFramebuffer(),w.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,w.__webglMultisampledFramebuffer);for(let fe=0;fe<oe.length;fe++){const ge=oe[fe];w.__webglColorRenderbuffer[fe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,w.__webglColorRenderbuffer[fe]);const Ee=s.convert(ge.format,ge.colorSpace),ie=s.convert(ge.type),Ve=b(ge.internalFormat,Ee,ie,ge.colorSpace,x.isXRRenderTarget===!0),Ie=X(x);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ie,Ve,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,w.__webglColorRenderbuffer[fe])}n.bindRenderbuffer(n.RENDERBUFFER,null),x.depthBuffer&&(w.__webglDepthRenderbuffer=n.createRenderbuffer(),Ce(w.__webglDepthRenderbuffer,x,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(O){t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture),Fe(n.TEXTURE_CUBE_MAP,g,ae);for(let oe=0;oe<6;oe++)if(o&&g.mipmaps&&g.mipmaps.length>0)for(let fe=0;fe<g.mipmaps.length;fe++)we(w.__webglFramebuffer[oe][fe],x,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,fe);else we(w.__webglFramebuffer[oe],x,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);E(g,ae)&&S(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(G){const oe=x.texture;for(let fe=0,ge=oe.length;fe<ge;fe++){const Ee=oe[fe],ie=i.get(Ee);t.bindTexture(n.TEXTURE_2D,ie.__webglTexture),Fe(n.TEXTURE_2D,Ee,ae),we(w.__webglFramebuffer,x,Ee,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,0),E(Ee,ae)&&S(n.TEXTURE_2D)}t.unbindTexture()}else{let oe=n.TEXTURE_2D;if((x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(o?oe=x.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(oe,W.__webglTexture),Fe(oe,g,ae),o&&g.mipmaps&&g.mipmaps.length>0)for(let fe=0;fe<g.mipmaps.length;fe++)we(w.__webglFramebuffer[fe],x,g,n.COLOR_ATTACHMENT0,oe,fe);else we(w.__webglFramebuffer,x,g,n.COLOR_ATTACHMENT0,oe,0);E(g,ae)&&S(oe),t.unbindTexture()}x.depthBuffer&&qe(x)}function U(x){const g=p(x)||o,w=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let W=0,O=w.length;W<O;W++){const G=w[W];if(E(G,g)){const ae=x.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,oe=i.get(G).__webglTexture;t.bindTexture(ae,oe),S(ae),t.unbindTexture()}}}function N(x){if(o&&x.samples>0&&z(x)===!1){const g=x.isWebGLMultipleRenderTargets?x.texture:[x.texture],w=x.width,W=x.height;let O=n.COLOR_BUFFER_BIT;const G=[],ae=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=i.get(x),fe=x.isWebGLMultipleRenderTargets===!0;if(fe)for(let ge=0;ge<g.length;ge++)t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let ge=0;ge<g.length;ge++){G.push(n.COLOR_ATTACHMENT0+ge),x.depthBuffer&&G.push(ae);const Ee=oe.__ignoreDepthValues!==void 0?oe.__ignoreDepthValues:!1;if(Ee===!1&&(x.depthBuffer&&(O|=n.DEPTH_BUFFER_BIT),x.stencilBuffer&&(O|=n.STENCIL_BUFFER_BIT)),fe&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,oe.__webglColorRenderbuffer[ge]),Ee===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[ae]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[ae])),fe){const ie=i.get(g[ge]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ie,0)}n.blitFramebuffer(0,0,w,W,0,0,w,W,O,n.NEAREST),u&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,G)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),fe)for(let ge=0;ge<g.length;ge++){t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,oe.__webglColorRenderbuffer[ge]);const Ee=i.get(g[ge]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,Ee,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}}function X(x){return Math.min(r.maxSamples,x.samples)}function z(x){const g=i.get(x);return o&&x.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function Q(x){const g=a.render.frame;c.get(x)!==g&&(c.set(x,g),x.update())}function te(x,g){const w=x.colorSpace,W=x.format,O=x.type;return x.isCompressedTexture===!0||x.isVideoTexture===!0||x.format===Ha||w!==Qn&&w!==an&&(rt.getTransfer(w)===ft?o===!1?e.has("EXT_sRGB")===!0&&W===mn?(x.format=Ha,x.minFilter=Vt,x.generateMipmaps=!1):g=rd.sRGBToLinear(g):(W!==mn||O!==hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",w)),g}this.allocateTextureUnit=I,this.resetTextureUnits=ne,this.setTexture2D=k,this.setTexture2DArray=ee,this.setTexture3D=j,this.setTextureCube=se,this.rebindTextures=Be,this.setupRenderTarget=_,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=N,this.setupDepthRenderbuffer=qe,this.setupFrameBufferTexture=we,this.useMultisampledRTT=z}function vS(n,e,t){const i=t.isWebGL2;function r(s,a=an){let o;const l=rt.getTransfer(a);if(s===hi)return n.UNSIGNED_BYTE;if(s===jf)return n.UNSIGNED_SHORT_4_4_4_4;if(s===Yf)return n.UNSIGNED_SHORT_5_5_5_1;if(s===Jm)return n.BYTE;if(s===Qm)return n.SHORT;if(s===al)return n.UNSIGNED_SHORT;if(s===qf)return n.INT;if(s===ui)return n.UNSIGNED_INT;if(s===qn)return n.FLOAT;if(s===is)return i?n.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===eg)return n.ALPHA;if(s===mn)return n.RGBA;if(s===tg)return n.LUMINANCE;if(s===ng)return n.LUMINANCE_ALPHA;if(s===zi)return n.DEPTH_COMPONENT;if(s===yr)return n.DEPTH_STENCIL;if(s===Ha)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===ig)return n.RED;if(s===Kf)return n.RED_INTEGER;if(s===rg)return n.RG;if(s===Zf)return n.RG_INTEGER;if(s===Jf)return n.RGBA_INTEGER;if(s===$o||s===qo||s===jo||s===Yo)if(l===ft)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===$o)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===qo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===jo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Yo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===$o)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===qo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===jo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Yo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===fc||s===dc||s===hc||s===pc)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===fc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===dc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===hc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===pc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Qf)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===mc||s===gc)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===mc)return l===ft?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===gc)return l===ft?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===_c||s===vc||s===xc||s===Sc||s===yc||s===Mc||s===bc||s===Ec||s===Tc||s===Ac||s===wc||s===Rc||s===Cc||s===Lc)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===_c)return l===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===vc)return l===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===xc)return l===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Sc)return l===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===yc)return l===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Mc)return l===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===bc)return l===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ec)return l===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Tc)return l===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Ac)return l===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===wc)return l===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Rc)return l===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Cc)return l===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Lc)return l===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ko||s===Pc||s===Dc)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Ko)return l===ft?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Pc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Dc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===sg||s===Uc||s===Ic||s===Nc)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===Ko)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Uc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Ic)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Nc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Bi?i?n.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class xS extends on{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Hs extends Qt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const SS={type:"move"};class ya{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Hs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Hs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Hs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const M of e.hand.values()){const p=t.getJointPose(M,i),h=this._getHandJoint(u,M);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],d=c.position.distanceTo(f.position),m=.02,y=.005;u.inputState.pinching&&d>m+y?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=m-y&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(SS)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Hs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const yS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,MS=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class bS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new qt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}render(e,t){if(this.texture!==null){if(this.mesh===null){const i=t.cameras[0].viewport,r=new gi({extensions:{fragDepth:!0},vertexShader:yS,fragmentShader:MS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new gn(new Ao(20,20),r)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class ES extends Tr{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,u=null,c=null,f=null,d=null,m=null,y=null;const M=new bS,p=t.getContextAttributes();let h=null,E=null;const S=[],b=[],D=new Ye;let P=null;const L=new on;L.layers.enable(1),L.viewport=new wt;const q=new on;q.layers.enable(2),q.viewport=new wt;const K=[L,q],v=new xS;v.layers.enable(1),v.layers.enable(2);let A=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ce=S[J];return ce===void 0&&(ce=new ya,S[J]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(J){let ce=S[J];return ce===void 0&&(ce=new ya,S[J]=ce),ce.getGripSpace()},this.getHand=function(J){let ce=S[J];return ce===void 0&&(ce=new ya,S[J]=ce),ce.getHandSpace()};function ne(J){const ce=b.indexOf(J.inputSource);if(ce===-1)return;const xe=S[ce];xe!==void 0&&(xe.update(J.inputSource,J.frame,u||a),xe.dispatchEvent({type:J.type,data:J.inputSource}))}function I(){r.removeEventListener("select",ne),r.removeEventListener("selectstart",ne),r.removeEventListener("selectend",ne),r.removeEventListener("squeeze",ne),r.removeEventListener("squeezestart",ne),r.removeEventListener("squeezeend",ne),r.removeEventListener("end",I),r.removeEventListener("inputsourceschange",Z);for(let J=0;J<S.length;J++){const ce=b[J];ce!==null&&(b[J]=null,S[J].disconnect(ce))}A=null,F=null,M.reset(),e.setRenderTarget(h),m=null,d=null,f=null,r=null,E=null,Fe.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(J){u=J},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(J){if(r=J,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",ne),r.addEventListener("selectstart",ne),r.addEventListener("selectend",ne),r.addEventListener("squeeze",ne),r.addEventListener("squeezestart",ne),r.addEventListener("squeezeend",ne),r.addEventListener("end",I),r.addEventListener("inputsourceschange",Z),p.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(D),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ce={antialias:r.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,ce),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),E=new Gi(m.framebufferWidth,m.framebufferHeight,{format:mn,type:hi,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let ce=null,xe=null,we=null;p.depth&&(we=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=p.stencil?yr:zi,xe=p.stencil?Bi:ui);const Ce={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:s};f=new XRWebGLBinding(r,t),d=f.createProjectionLayer(Ce),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),E=new Gi(d.textureWidth,d.textureHeight,{format:mn,type:hi,depthTexture:new _d(d.textureWidth,d.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});const be=e.properties.get(E);be.__ignoreDepthValues=d.ignoreDepthValues}E.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await r.requestReferenceSpace(o),Fe.setContext(r),Fe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function Z(J){for(let ce=0;ce<J.removed.length;ce++){const xe=J.removed[ce],we=b.indexOf(xe);we>=0&&(b[we]=null,S[we].disconnect(xe))}for(let ce=0;ce<J.added.length;ce++){const xe=J.added[ce];let we=b.indexOf(xe);if(we===-1){for(let be=0;be<S.length;be++)if(be>=b.length){b.push(xe),we=be;break}else if(b[be]===null){b[be]=xe,we=be;break}if(we===-1)break}const Ce=S[we];Ce&&Ce.connect(xe)}}const k=new H,ee=new H;function j(J,ce,xe){k.setFromMatrixPosition(ce.matrixWorld),ee.setFromMatrixPosition(xe.matrixWorld);const we=k.distanceTo(ee),Ce=ce.projectionMatrix.elements,be=xe.projectionMatrix.elements,qe=Ce[14]/(Ce[10]-1),Be=Ce[14]/(Ce[10]+1),_=(Ce[9]+1)/Ce[5],U=(Ce[9]-1)/Ce[5],N=(Ce[8]-1)/Ce[0],X=(be[8]+1)/be[0],z=qe*N,Q=qe*X,te=we/(-N+X),x=te*-N;ce.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(x),J.translateZ(te),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert();const g=qe+te,w=Be+te,W=z-x,O=Q+(we-x),G=_*Be/w*g,ae=U*Be/w*g;J.projectionMatrix.makePerspective(W,O,G,ae,g,w),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}function se(J,ce){ce===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ce.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(r===null)return;M.texture!==null&&(J.near=M.depthNear,J.far=M.depthFar),v.near=q.near=L.near=J.near,v.far=q.far=L.far=J.far,(A!==v.near||F!==v.far)&&(r.updateRenderState({depthNear:v.near,depthFar:v.far}),A=v.near,F=v.far,L.near=A,L.far=F,q.near=A,q.far=F,L.updateProjectionMatrix(),q.updateProjectionMatrix(),J.updateProjectionMatrix());const ce=J.parent,xe=v.cameras;se(v,ce);for(let we=0;we<xe.length;we++)se(xe[we],ce);xe.length===2?j(v,L,q):v.projectionMatrix.copy(L.projectionMatrix),le(J,v,ce)};function le(J,ce,xe){xe===null?J.matrix.copy(ce.matrixWorld):(J.matrix.copy(xe.matrixWorld),J.matrix.invert(),J.matrix.multiply(ce.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ce.projectionMatrix),J.projectionMatrixInverse.copy(ce.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Ga*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(J){l=J,d!==null&&(d.fixedFoveation=J),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=J)},this.hasDepthSensing=function(){return M.texture!==null};let ue=null;function de(J,ce){if(c=ce.getViewerPose(u||a),y=ce,c!==null){const xe=c.views;m!==null&&(e.setRenderTargetFramebuffer(E,m.framebuffer),e.setRenderTarget(E));let we=!1;xe.length!==v.cameras.length&&(v.cameras.length=0,we=!0);for(let be=0;be<xe.length;be++){const qe=xe[be];let Be=null;if(m!==null)Be=m.getViewport(qe);else{const U=f.getViewSubImage(d,qe);Be=U.viewport,be===0&&(e.setRenderTargetTextures(E,U.colorTexture,d.ignoreDepthValues?void 0:U.depthStencilTexture),e.setRenderTarget(E))}let _=K[be];_===void 0&&(_=new on,_.layers.enable(be),_.viewport=new wt,K[be]=_),_.matrix.fromArray(qe.transform.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale),_.projectionMatrix.fromArray(qe.projectionMatrix),_.projectionMatrixInverse.copy(_.projectionMatrix).invert(),_.viewport.set(Be.x,Be.y,Be.width,Be.height),be===0&&(v.matrix.copy(_.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),we===!0&&v.cameras.push(_)}const Ce=r.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")){const be=f.getDepthInformation(xe[0]);be&&be.isValid&&be.texture&&M.init(e,be,r.renderState)}}for(let xe=0;xe<S.length;xe++){const we=b[xe],Ce=S[xe];we!==null&&Ce!==void 0&&Ce.update(we,ce,u||a)}M.render(e,v),ue&&ue(J,ce),ce.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ce}),y=null}const Fe=new gd;Fe.setAnimationLoop(de),this.setAnimationLoop=function(J){ue=J},this.dispose=function(){}}}function TS(n,e){function t(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function i(p,h){h.color.getRGB(p.fogColor.value,dd(n)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function r(p,h,E,S,b){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(p,h):h.isMeshToonMaterial?(s(p,h),f(p,h)):h.isMeshPhongMaterial?(s(p,h),c(p,h)):h.isMeshStandardMaterial?(s(p,h),d(p,h),h.isMeshPhysicalMaterial&&m(p,h,b)):h.isMeshMatcapMaterial?(s(p,h),y(p,h)):h.isMeshDepthMaterial?s(p,h):h.isMeshDistanceMaterial?(s(p,h),M(p,h)):h.isMeshNormalMaterial?s(p,h):h.isLineBasicMaterial?(a(p,h),h.isLineDashedMaterial&&o(p,h)):h.isPointsMaterial?l(p,h,E,S):h.isSpriteMaterial?u(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,t(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===$t&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,t(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===$t&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,t(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,t(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const E=e.get(h).envMap;if(E&&(p.envMap.value=E,p.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap){p.lightMap.value=h.lightMap;const S=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=h.lightMapIntensity*S,t(h.lightMap,p.lightMapTransform)}h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,p.aoMapTransform))}function a(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform))}function o(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function l(p,h,E,S){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*E,p.scale.value=S*.5,h.map&&(p.map.value=h.map,t(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function u(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function c(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function f(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function d(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,p.roughnessMapTransform)),e.get(h).envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function m(p,h,E){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===$t&&p.clearcoatNormalScale.value.negate())),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,p.specularIntensityMapTransform))}function y(p,h){h.matcap&&(p.matcap.value=h.matcap)}function M(p,h){const E=e.get(h).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function AS(n,e,t,i){let r={},s={},a=[];const o=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(E,S){const b=S.program;i.uniformBlockBinding(E,b)}function u(E,S){let b=r[E.id];b===void 0&&(y(E),b=c(E),r[E.id]=b,E.addEventListener("dispose",p));const D=S.program;i.updateUBOMapping(E,D);const P=e.render.frame;s[E.id]!==P&&(d(E),s[E.id]=P)}function c(E){const S=f();E.__bindingPointIndex=S;const b=n.createBuffer(),D=E.__size,P=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,D,P),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,b),b}function f(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const S=r[E.id],b=E.uniforms,D=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let P=0,L=b.length;P<L;P++){const q=Array.isArray(b[P])?b[P]:[b[P]];for(let K=0,v=q.length;K<v;K++){const A=q[K];if(m(A,P,K,D)===!0){const F=A.__offset,ne=Array.isArray(A.value)?A.value:[A.value];let I=0;for(let Z=0;Z<ne.length;Z++){const k=ne[Z],ee=M(k);typeof k=="number"||typeof k=="boolean"?(A.__data[0]=k,n.bufferSubData(n.UNIFORM_BUFFER,F+I,A.__data)):k.isMatrix3?(A.__data[0]=k.elements[0],A.__data[1]=k.elements[1],A.__data[2]=k.elements[2],A.__data[3]=0,A.__data[4]=k.elements[3],A.__data[5]=k.elements[4],A.__data[6]=k.elements[5],A.__data[7]=0,A.__data[8]=k.elements[6],A.__data[9]=k.elements[7],A.__data[10]=k.elements[8],A.__data[11]=0):(k.toArray(A.__data,I),I+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,F,A.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(E,S,b,D){const P=E.value,L=S+"_"+b;if(D[L]===void 0)return typeof P=="number"||typeof P=="boolean"?D[L]=P:D[L]=P.clone(),!0;{const q=D[L];if(typeof P=="number"||typeof P=="boolean"){if(q!==P)return D[L]=P,!0}else if(q.equals(P)===!1)return q.copy(P),!0}return!1}function y(E){const S=E.uniforms;let b=0;const D=16;for(let L=0,q=S.length;L<q;L++){const K=Array.isArray(S[L])?S[L]:[S[L]];for(let v=0,A=K.length;v<A;v++){const F=K[v],ne=Array.isArray(F.value)?F.value:[F.value];for(let I=0,Z=ne.length;I<Z;I++){const k=ne[I],ee=M(k),j=b%D;j!==0&&D-j<ee.boundary&&(b+=D-j),F.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=b,b+=ee.storage}}}const P=b%D;return P>0&&(b+=D-P),E.__size=b,E.__cache={},this}function M(E){const S={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(S.boundary=4,S.storage=4):E.isVector2?(S.boundary=8,S.storage=8):E.isVector3||E.isColor?(S.boundary=16,S.storage=12):E.isVector4?(S.boundary=16,S.storage=16):E.isMatrix3?(S.boundary=48,S.storage=48):E.isMatrix4?(S.boundary=64,S.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),S}function p(E){const S=E.target;S.removeEventListener("dispose",p);const b=a.indexOf(S.__bindingPointIndex);a.splice(b,1),n.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function h(){for(const E in r)n.deleteBuffer(r[E]);a=[],r={},s={}}return{bind:l,update:u,dispose:h}}class bd{constructor(e={}){const{canvas:t=_g(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=a;const m=new Uint32Array(4),y=new Int32Array(4);let M=null,p=null;const h=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=At,this._useLegacyLights=!1,this.toneMapping=di,this.toneMappingExposure=1;const S=this;let b=!1,D=0,P=0,L=null,q=-1,K=null;const v=new wt,A=new wt;let F=null;const ne=new st(0);let I=0,Z=t.width,k=t.height,ee=1,j=null,se=null;const le=new wt(0,0,Z,k),ue=new wt(0,0,Z,k);let de=!1;const Fe=new md;let J=!1,ce=!1,xe=null;const we=new Rt,Ce=new Ye,be=new H,qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Be(){return L===null?ee:1}let _=i;function U(T,B){for(let $=0;$<T.length;$++){const Y=T[$],V=t.getContext(Y,B);if(V!==null)return V}return null}try{const T={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ol}`),t.addEventListener("webglcontextlost",ot,!1),t.addEventListener("webglcontextrestored",R,!1),t.addEventListener("webglcontextcreationerror",he,!1),_===null){const B=["webgl2","webgl","experimental-webgl"];if(S.isWebGL1Renderer===!0&&B.shift(),_=U(B,T),_===null)throw U(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&_ instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),_.getShaderPrecisionFormat===void 0&&(_.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let N,X,z,Q,te,x,g,w,W,O,G,ae,oe,fe,ge,Ee,ie,Ve,Ie,Ue,Re,_e,Pe,Ke;function it(){N=new Ux(_),X=new Ax(_,N,e),N.init(X),_e=new vS(_,N,X),z=new gS(_,N,X),Q=new Fx(_),te=new nS,x=new _S(_,N,z,te,X,_e,Q),g=new Rx(S),w=new Dx(S),W=new Vg(_,X),Pe=new Ex(_,N,W,X),O=new Ix(_,W,Q,Pe),G=new kx(_,O,W,Q),Ie=new zx(_,X,x),Ee=new wx(te),ae=new tS(S,g,w,N,X,Pe,Ee),oe=new TS(S,te),fe=new rS,ge=new uS(N,X),Ve=new bx(S,g,w,z,G,d,l),ie=new mS(S,G,X),Ke=new AS(_,Q,X,z),Ue=new Tx(_,N,Q,X),Re=new Nx(_,N,Q,X),Q.programs=ae.programs,S.capabilities=X,S.extensions=N,S.properties=te,S.renderLists=fe,S.shadowMap=ie,S.state=z,S.info=Q}it();const je=new ES(S,_);this.xr=je,this.getContext=function(){return _},this.getContextAttributes=function(){return _.getContextAttributes()},this.forceContextLoss=function(){const T=N.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=N.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(T){T!==void 0&&(ee=T,this.setSize(Z,k,!1))},this.getSize=function(T){return T.set(Z,k)},this.setSize=function(T,B,$=!0){if(je.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=T,k=B,t.width=Math.floor(T*ee),t.height=Math.floor(B*ee),$===!0&&(t.style.width=T+"px",t.style.height=B+"px"),this.setViewport(0,0,T,B)},this.getDrawingBufferSize=function(T){return T.set(Z*ee,k*ee).floor()},this.setDrawingBufferSize=function(T,B,$){Z=T,k=B,ee=$,t.width=Math.floor(T*$),t.height=Math.floor(B*$),this.setViewport(0,0,T,B)},this.getCurrentViewport=function(T){return T.copy(v)},this.getViewport=function(T){return T.copy(le)},this.setViewport=function(T,B,$,Y){T.isVector4?le.set(T.x,T.y,T.z,T.w):le.set(T,B,$,Y),z.viewport(v.copy(le).multiplyScalar(ee).floor())},this.getScissor=function(T){return T.copy(ue)},this.setScissor=function(T,B,$,Y){T.isVector4?ue.set(T.x,T.y,T.z,T.w):ue.set(T,B,$,Y),z.scissor(A.copy(ue).multiplyScalar(ee).floor())},this.getScissorTest=function(){return de},this.setScissorTest=function(T){z.setScissorTest(de=T)},this.setOpaqueSort=function(T){j=T},this.setTransparentSort=function(T){se=T},this.getClearColor=function(T){return T.copy(Ve.getClearColor())},this.setClearColor=function(){Ve.setClearColor.apply(Ve,arguments)},this.getClearAlpha=function(){return Ve.getClearAlpha()},this.setClearAlpha=function(){Ve.setClearAlpha.apply(Ve,arguments)},this.clear=function(T=!0,B=!0,$=!0){let Y=0;if(T){let V=!1;if(L!==null){const Se=L.texture.format;V=Se===Jf||Se===Zf||Se===Kf}if(V){const Se=L.texture.type,Ae=Se===hi||Se===ui||Se===al||Se===Bi||Se===jf||Se===Yf,Ne=Ve.getClearColor(),Oe=Ve.getClearAlpha(),We=Ne.r,ze=Ne.g,He=Ne.b;Ae?(m[0]=We,m[1]=ze,m[2]=He,m[3]=Oe,_.clearBufferuiv(_.COLOR,0,m)):(y[0]=We,y[1]=ze,y[2]=He,y[3]=Oe,_.clearBufferiv(_.COLOR,0,y))}else Y|=_.COLOR_BUFFER_BIT}B&&(Y|=_.DEPTH_BUFFER_BIT),$&&(Y|=_.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),_.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ot,!1),t.removeEventListener("webglcontextrestored",R,!1),t.removeEventListener("webglcontextcreationerror",he,!1),fe.dispose(),ge.dispose(),te.dispose(),g.dispose(),w.dispose(),G.dispose(),Pe.dispose(),Ke.dispose(),ae.dispose(),je.dispose(),je.removeEventListener("sessionstart",en),je.removeEventListener("sessionend",ct),xe&&(xe.dispose(),xe=null),It.stop()};function ot(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function R(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const T=Q.autoReset,B=ie.enabled,$=ie.autoUpdate,Y=ie.needsUpdate,V=ie.type;it(),Q.autoReset=T,ie.enabled=B,ie.autoUpdate=$,ie.needsUpdate=Y,ie.type=V}function he(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function pe(T){const B=T.target;B.removeEventListener("dispose",pe),Te(B)}function Te(T){De(T),te.remove(T)}function De(T){const B=te.get(T).programs;B!==void 0&&(B.forEach(function($){ae.releaseProgram($)}),T.isShaderMaterial&&ae.releaseShaderCache(T))}this.renderBufferDirect=function(T,B,$,Y,V,Se){B===null&&(B=qe);const Ae=V.isMesh&&V.matrixWorld.determinant()<0,Ne=Td(T,B,$,Y,V);z.setMaterial(Y,Ae);let Oe=$.index,We=1;if(Y.wireframe===!0){if(Oe=O.getWireframeAttribute($),Oe===void 0)return;We=2}const ze=$.drawRange,He=$.attributes.position;let gt=ze.start*We,jt=(ze.start+ze.count)*We;Se!==null&&(gt=Math.max(gt,Se.start*We),jt=Math.min(jt,(Se.start+Se.count)*We)),Oe!==null?(gt=Math.max(gt,0),jt=Math.min(jt,Oe.count)):He!=null&&(gt=Math.max(gt,0),jt=Math.min(jt,He.count));const yt=jt-gt;if(yt<0||yt===1/0)return;Pe.setup(V,Y,Ne,$,Oe);let Un,dt=Ue;if(Oe!==null&&(Un=W.get(Oe),dt=Re,dt.setIndex(Un)),V.isMesh)Y.wireframe===!0?(z.setLineWidth(Y.wireframeLinewidth*Be()),dt.setMode(_.LINES)):dt.setMode(_.TRIANGLES);else if(V.isLine){let Xe=Y.linewidth;Xe===void 0&&(Xe=1),z.setLineWidth(Xe*Be()),V.isLineSegments?dt.setMode(_.LINES):V.isLineLoop?dt.setMode(_.LINE_LOOP):dt.setMode(_.LINE_STRIP)}else V.isPoints?dt.setMode(_.POINTS):V.isSprite&&dt.setMode(_.TRIANGLES);if(V.isBatchedMesh)dt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else if(V.isInstancedMesh)dt.renderInstances(gt,yt,V.count);else if($.isInstancedBufferGeometry){const Xe=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Ro=Math.min($.instanceCount,Xe);dt.renderInstances(gt,yt,Ro)}else dt.render(gt,yt)};function tt(T,B,$){T.transparent===!0&&T.side===$n&&T.forceSinglePass===!1?(T.side=$t,T.needsUpdate=!0,gs(T,B,$),T.side=mi,T.needsUpdate=!0,gs(T,B,$),T.side=$n):gs(T,B,$)}this.compile=function(T,B,$=null){$===null&&($=T),p=ge.get($),p.init(),E.push(p),$.traverseVisible(function(V){V.isLight&&V.layers.test(B.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),T!==$&&T.traverseVisible(function(V){V.isLight&&V.layers.test(B.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),p.setupLights(S._useLegacyLights);const Y=new Set;return T.traverse(function(V){const Se=V.material;if(Se)if(Array.isArray(Se))for(let Ae=0;Ae<Se.length;Ae++){const Ne=Se[Ae];tt(Ne,$,V),Y.add(Ne)}else tt(Se,$,V),Y.add(Se)}),E.pop(),p=null,Y},this.compileAsync=function(T,B,$=null){const Y=this.compile(T,B,$);return new Promise(V=>{function Se(){if(Y.forEach(function(Ae){te.get(Ae).currentProgram.isReady()&&Y.delete(Ae)}),Y.size===0){V(T);return}setTimeout(Se,10)}N.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let lt=null;function Et(T){lt&&lt(T)}function en(){It.stop()}function ct(){It.start()}const It=new gd;It.setAnimationLoop(Et),typeof self<"u"&&It.setContext(self),this.setAnimationLoop=function(T){lt=T,je.setAnimationLoop(T),T===null?It.stop():It.start()},je.addEventListener("sessionstart",en),je.addEventListener("sessionend",ct),this.render=function(T,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),je.enabled===!0&&je.isPresenting===!0&&(je.cameraAutoUpdate===!0&&je.updateCamera(B),B=je.getCamera()),T.isScene===!0&&T.onBeforeRender(S,T,B,L),p=ge.get(T,E.length),p.init(),E.push(p),we.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Fe.setFromProjectionMatrix(we),ce=this.localClippingEnabled,J=Ee.init(this.clippingPlanes,ce),M=fe.get(T,h.length),M.init(),h.push(M),yn(T,B,0,S.sortObjects),M.finish(),S.sortObjects===!0&&M.sort(j,se),this.info.render.frame++,J===!0&&Ee.beginShadows();const $=p.state.shadowsArray;if(ie.render($,T,B),J===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset(),(je.enabled===!1||je.isPresenting===!1||je.hasDepthSensing()===!1)&&Ve.render(M,T),p.setupLights(S._useLegacyLights),B.isArrayCamera){const Y=B.cameras;for(let V=0,Se=Y.length;V<Se;V++){const Ae=Y[V];dl(M,T,Ae,Ae.viewport)}}else dl(M,T,B);L!==null&&(x.updateMultisampleRenderTarget(L),x.updateRenderTargetMipmap(L)),T.isScene===!0&&T.onAfterRender(S,T,B),Pe.resetDefaultState(),q=-1,K=null,E.pop(),E.length>0?p=E[E.length-1]:p=null,h.pop(),h.length>0?M=h[h.length-1]:M=null};function yn(T,B,$,Y){if(T.visible===!1)return;if(T.layers.test(B.layers)){if(T.isGroup)$=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(B);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Fe.intersectsSprite(T)){Y&&be.setFromMatrixPosition(T.matrixWorld).applyMatrix4(we);const Ae=G.update(T),Ne=T.material;Ne.visible&&M.push(T,Ae,Ne,$,be.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Fe.intersectsObject(T))){const Ae=G.update(T),Ne=T.material;if(Y&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),be.copy(T.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),be.copy(Ae.boundingSphere.center)),be.applyMatrix4(T.matrixWorld).applyMatrix4(we)),Array.isArray(Ne)){const Oe=Ae.groups;for(let We=0,ze=Oe.length;We<ze;We++){const He=Oe[We],gt=Ne[He.materialIndex];gt&&gt.visible&&M.push(T,Ae,gt,$,be.z,He)}}else Ne.visible&&M.push(T,Ae,Ne,$,be.z,null)}}const Se=T.children;for(let Ae=0,Ne=Se.length;Ae<Ne;Ae++)yn(Se[Ae],B,$,Y)}function dl(T,B,$,Y){const V=T.opaque,Se=T.transmissive,Ae=T.transparent;p.setupLightsView($),J===!0&&Ee.setGlobalState(S.clippingPlanes,$),Se.length>0&&Ed(V,Se,B,$),Y&&z.viewport(v.copy(Y)),V.length>0&&ms(V,B,$),Se.length>0&&ms(Se,B,$),Ae.length>0&&ms(Ae,B,$),z.buffers.depth.setTest(!0),z.buffers.depth.setMask(!0),z.buffers.color.setMask(!0),z.setPolygonOffset(!1)}function Ed(T,B,$,Y){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;const Se=X.isWebGL2;xe===null&&(xe=new Gi(1,1,{generateMipmaps:!0,type:N.has("EXT_color_buffer_half_float")?is:hi,minFilter:Ii,samples:Se?4:0})),S.getDrawingBufferSize(Ce),Se?xe.setSize(Ce.x,Ce.y):xe.setSize(Va(Ce.x),Va(Ce.y));const Ae=S.getRenderTarget();S.setRenderTarget(xe),S.getClearColor(ne),I=S.getClearAlpha(),I<1&&S.setClearColor(16777215,.5),S.clear();const Ne=S.toneMapping;S.toneMapping=di,ms(T,$,Y),x.updateMultisampleRenderTarget(xe),x.updateRenderTargetMipmap(xe);let Oe=!1;for(let We=0,ze=B.length;We<ze;We++){const He=B[We],gt=He.object,jt=He.geometry,yt=He.material,Un=He.group;if(yt.side===$n&&gt.layers.test(Y.layers)){const dt=yt.side;yt.side=$t,yt.needsUpdate=!0,hl(gt,$,Y,jt,yt,Un),yt.side=dt,yt.needsUpdate=!0,Oe=!0}}Oe===!0&&(x.updateMultisampleRenderTarget(xe),x.updateRenderTargetMipmap(xe)),S.setRenderTarget(Ae),S.setClearColor(ne,I),S.toneMapping=Ne}function ms(T,B,$){const Y=B.isScene===!0?B.overrideMaterial:null;for(let V=0,Se=T.length;V<Se;V++){const Ae=T[V],Ne=Ae.object,Oe=Ae.geometry,We=Y===null?Ae.material:Y,ze=Ae.group;Ne.layers.test($.layers)&&hl(Ne,B,$,Oe,We,ze)}}function hl(T,B,$,Y,V,Se){T.onBeforeRender(S,B,$,Y,V,Se),T.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),V.onBeforeRender(S,B,$,Y,T,Se),V.transparent===!0&&V.side===$n&&V.forceSinglePass===!1?(V.side=$t,V.needsUpdate=!0,S.renderBufferDirect($,B,Y,V,T,Se),V.side=mi,V.needsUpdate=!0,S.renderBufferDirect($,B,Y,V,T,Se),V.side=$n):S.renderBufferDirect($,B,Y,V,T,Se),T.onAfterRender(S,B,$,Y,V,Se)}function gs(T,B,$){B.isScene!==!0&&(B=qe);const Y=te.get(T),V=p.state.lights,Se=p.state.shadowsArray,Ae=V.state.version,Ne=ae.getParameters(T,V.state,Se,B,$),Oe=ae.getProgramCacheKey(Ne);let We=Y.programs;Y.environment=T.isMeshStandardMaterial?B.environment:null,Y.fog=B.fog,Y.envMap=(T.isMeshStandardMaterial?w:g).get(T.envMap||Y.environment),We===void 0&&(T.addEventListener("dispose",pe),We=new Map,Y.programs=We);let ze=We.get(Oe);if(ze!==void 0){if(Y.currentProgram===ze&&Y.lightsStateVersion===Ae)return ml(T,Ne),ze}else Ne.uniforms=ae.getUniforms(T),T.onBuild($,Ne,S),T.onBeforeCompile(Ne,S),ze=ae.acquireProgram(Ne,Oe),We.set(Oe,ze),Y.uniforms=Ne.uniforms;const He=Y.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(He.clippingPlanes=Ee.uniform),ml(T,Ne),Y.needsLights=wd(T),Y.lightsStateVersion=Ae,Y.needsLights&&(He.ambientLightColor.value=V.state.ambient,He.lightProbe.value=V.state.probe,He.directionalLights.value=V.state.directional,He.directionalLightShadows.value=V.state.directionalShadow,He.spotLights.value=V.state.spot,He.spotLightShadows.value=V.state.spotShadow,He.rectAreaLights.value=V.state.rectArea,He.ltc_1.value=V.state.rectAreaLTC1,He.ltc_2.value=V.state.rectAreaLTC2,He.pointLights.value=V.state.point,He.pointLightShadows.value=V.state.pointShadow,He.hemisphereLights.value=V.state.hemi,He.directionalShadowMap.value=V.state.directionalShadowMap,He.directionalShadowMatrix.value=V.state.directionalShadowMatrix,He.spotShadowMap.value=V.state.spotShadowMap,He.spotLightMatrix.value=V.state.spotLightMatrix,He.spotLightMap.value=V.state.spotLightMap,He.pointShadowMap.value=V.state.pointShadowMap,He.pointShadowMatrix.value=V.state.pointShadowMatrix),Y.currentProgram=ze,Y.uniformsList=null,ze}function pl(T){if(T.uniformsList===null){const B=T.currentProgram.getUniforms();T.uniformsList=Xs.seqWithValue(B.seq,T.uniforms)}return T.uniformsList}function ml(T,B){const $=te.get(T);$.outputColorSpace=B.outputColorSpace,$.batching=B.batching,$.instancing=B.instancing,$.instancingColor=B.instancingColor,$.skinning=B.skinning,$.morphTargets=B.morphTargets,$.morphNormals=B.morphNormals,$.morphColors=B.morphColors,$.morphTargetsCount=B.morphTargetsCount,$.numClippingPlanes=B.numClippingPlanes,$.numIntersection=B.numClipIntersection,$.vertexAlphas=B.vertexAlphas,$.vertexTangents=B.vertexTangents,$.toneMapping=B.toneMapping}function Td(T,B,$,Y,V){B.isScene!==!0&&(B=qe),x.resetTextureUnits();const Se=B.fog,Ae=Y.isMeshStandardMaterial?B.environment:null,Ne=L===null?S.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Qn,Oe=(Y.isMeshStandardMaterial?w:g).get(Y.envMap||Ae),We=Y.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,ze=!!$.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),He=!!$.morphAttributes.position,gt=!!$.morphAttributes.normal,jt=!!$.morphAttributes.color;let yt=di;Y.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(yt=S.toneMapping);const Un=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,dt=Un!==void 0?Un.length:0,Xe=te.get(Y),Ro=p.state.lights;if(J===!0&&(ce===!0||T!==K)){const tn=T===K&&Y.id===q;Ee.setState(Y,T,tn)}let pt=!1;Y.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==Ro.state.version||Xe.outputColorSpace!==Ne||V.isBatchedMesh&&Xe.batching===!1||!V.isBatchedMesh&&Xe.batching===!0||V.isInstancedMesh&&Xe.instancing===!1||!V.isInstancedMesh&&Xe.instancing===!0||V.isSkinnedMesh&&Xe.skinning===!1||!V.isSkinnedMesh&&Xe.skinning===!0||V.isInstancedMesh&&Xe.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Xe.instancingColor===!1&&V.instanceColor!==null||Xe.envMap!==Oe||Y.fog===!0&&Xe.fog!==Se||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==Ee.numPlanes||Xe.numIntersection!==Ee.numIntersection)||Xe.vertexAlphas!==We||Xe.vertexTangents!==ze||Xe.morphTargets!==He||Xe.morphNormals!==gt||Xe.morphColors!==jt||Xe.toneMapping!==yt||X.isWebGL2===!0&&Xe.morphTargetsCount!==dt)&&(pt=!0):(pt=!0,Xe.__version=Y.version);let vi=Xe.currentProgram;pt===!0&&(vi=gs(Y,B,V));let gl=!1,wr=!1,Co=!1;const Ct=vi.getUniforms(),xi=Xe.uniforms;if(z.useProgram(vi.program)&&(gl=!0,wr=!0,Co=!0),Y.id!==q&&(q=Y.id,wr=!0),gl||K!==T){Ct.setValue(_,"projectionMatrix",T.projectionMatrix),Ct.setValue(_,"viewMatrix",T.matrixWorldInverse);const tn=Ct.map.cameraPosition;tn!==void 0&&tn.setValue(_,be.setFromMatrixPosition(T.matrixWorld)),X.logarithmicDepthBuffer&&Ct.setValue(_,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Ct.setValue(_,"isOrthographic",T.isOrthographicCamera===!0),K!==T&&(K=T,wr=!0,Co=!0)}if(V.isSkinnedMesh){Ct.setOptional(_,V,"bindMatrix"),Ct.setOptional(_,V,"bindMatrixInverse");const tn=V.skeleton;tn&&(X.floatVertexTextures?(tn.boneTexture===null&&tn.computeBoneTexture(),Ct.setValue(_,"boneTexture",tn.boneTexture,x)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}V.isBatchedMesh&&(Ct.setOptional(_,V,"batchingTexture"),Ct.setValue(_,"batchingTexture",V._matricesTexture,x));const Lo=$.morphAttributes;if((Lo.position!==void 0||Lo.normal!==void 0||Lo.color!==void 0&&X.isWebGL2===!0)&&Ie.update(V,$,vi),(wr||Xe.receiveShadow!==V.receiveShadow)&&(Xe.receiveShadow=V.receiveShadow,Ct.setValue(_,"receiveShadow",V.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(xi.envMap.value=Oe,xi.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),wr&&(Ct.setValue(_,"toneMappingExposure",S.toneMappingExposure),Xe.needsLights&&Ad(xi,Co),Se&&Y.fog===!0&&oe.refreshFogUniforms(xi,Se),oe.refreshMaterialUniforms(xi,Y,ee,k,xe),Xs.upload(_,pl(Xe),xi,x)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Xs.upload(_,pl(Xe),xi,x),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Ct.setValue(_,"center",V.center),Ct.setValue(_,"modelViewMatrix",V.modelViewMatrix),Ct.setValue(_,"normalMatrix",V.normalMatrix),Ct.setValue(_,"modelMatrix",V.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const tn=Y.uniformsGroups;for(let Po=0,Rd=tn.length;Po<Rd;Po++)if(X.isWebGL2){const _l=tn[Po];Ke.update(_l,vi),Ke.bind(_l,vi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return vi}function Ad(T,B){T.ambientLightColor.needsUpdate=B,T.lightProbe.needsUpdate=B,T.directionalLights.needsUpdate=B,T.directionalLightShadows.needsUpdate=B,T.pointLights.needsUpdate=B,T.pointLightShadows.needsUpdate=B,T.spotLights.needsUpdate=B,T.spotLightShadows.needsUpdate=B,T.rectAreaLights.needsUpdate=B,T.hemisphereLights.needsUpdate=B}function wd(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(T,B,$){te.get(T.texture).__webglTexture=B,te.get(T.depthTexture).__webglTexture=$;const Y=te.get(T);Y.__hasExternalTextures=!0,Y.__hasExternalTextures&&(Y.__autoAllocateDepthBuffer=$===void 0,Y.__autoAllocateDepthBuffer||N.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,B){const $=te.get(T);$.__webglFramebuffer=B,$.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(T,B=0,$=0){L=T,D=B,P=$;let Y=!0,V=null,Se=!1,Ae=!1;if(T){const Oe=te.get(T);Oe.__useDefaultFramebuffer!==void 0?(z.bindFramebuffer(_.FRAMEBUFFER,null),Y=!1):Oe.__webglFramebuffer===void 0?x.setupRenderTarget(T):Oe.__hasExternalTextures&&x.rebindTextures(T,te.get(T.texture).__webglTexture,te.get(T.depthTexture).__webglTexture);const We=T.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Ae=!0);const ze=te.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(ze[B])?V=ze[B][$]:V=ze[B],Se=!0):X.isWebGL2&&T.samples>0&&x.useMultisampledRTT(T)===!1?V=te.get(T).__webglMultisampledFramebuffer:Array.isArray(ze)?V=ze[$]:V=ze,v.copy(T.viewport),A.copy(T.scissor),F=T.scissorTest}else v.copy(le).multiplyScalar(ee).floor(),A.copy(ue).multiplyScalar(ee).floor(),F=de;if(z.bindFramebuffer(_.FRAMEBUFFER,V)&&X.drawBuffers&&Y&&z.drawBuffers(T,V),z.viewport(v),z.scissor(A),z.setScissorTest(F),Se){const Oe=te.get(T.texture);_.framebufferTexture2D(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_CUBE_MAP_POSITIVE_X+B,Oe.__webglTexture,$)}else if(Ae){const Oe=te.get(T.texture),We=B||0;_.framebufferTextureLayer(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,Oe.__webglTexture,$||0,We)}q=-1},this.readRenderTargetPixels=function(T,B,$,Y,V,Se,Ae){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=te.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ae!==void 0&&(Ne=Ne[Ae]),Ne){z.bindFramebuffer(_.FRAMEBUFFER,Ne);try{const Oe=T.texture,We=Oe.format,ze=Oe.type;if(We!==mn&&_e.convert(We)!==_.getParameter(_.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const He=ze===is&&(N.has("EXT_color_buffer_half_float")||X.isWebGL2&&N.has("EXT_color_buffer_float"));if(ze!==hi&&_e.convert(ze)!==_.getParameter(_.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ze===qn&&(X.isWebGL2||N.has("OES_texture_float")||N.has("WEBGL_color_buffer_float")))&&!He){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=T.width-Y&&$>=0&&$<=T.height-V&&_.readPixels(B,$,Y,V,_e.convert(We),_e.convert(ze),Se)}finally{const Oe=L!==null?te.get(L).__webglFramebuffer:null;z.bindFramebuffer(_.FRAMEBUFFER,Oe)}}},this.copyFramebufferToTexture=function(T,B,$=0){const Y=Math.pow(2,-$),V=Math.floor(B.image.width*Y),Se=Math.floor(B.image.height*Y);x.setTexture2D(B,0),_.copyTexSubImage2D(_.TEXTURE_2D,$,0,0,T.x,T.y,V,Se),z.unbindTexture()},this.copyTextureToTexture=function(T,B,$,Y=0){const V=B.image.width,Se=B.image.height,Ae=_e.convert($.format),Ne=_e.convert($.type);x.setTexture2D($,0),_.pixelStorei(_.UNPACK_FLIP_Y_WEBGL,$.flipY),_.pixelStorei(_.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),_.pixelStorei(_.UNPACK_ALIGNMENT,$.unpackAlignment),B.isDataTexture?_.texSubImage2D(_.TEXTURE_2D,Y,T.x,T.y,V,Se,Ae,Ne,B.image.data):B.isCompressedTexture?_.compressedTexSubImage2D(_.TEXTURE_2D,Y,T.x,T.y,B.mipmaps[0].width,B.mipmaps[0].height,Ae,B.mipmaps[0].data):_.texSubImage2D(_.TEXTURE_2D,Y,T.x,T.y,Ae,Ne,B.image),Y===0&&$.generateMipmaps&&_.generateMipmap(_.TEXTURE_2D),z.unbindTexture()},this.copyTextureToTexture3D=function(T,B,$,Y,V=0){if(S.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Se=T.max.x-T.min.x+1,Ae=T.max.y-T.min.y+1,Ne=T.max.z-T.min.z+1,Oe=_e.convert(Y.format),We=_e.convert(Y.type);let ze;if(Y.isData3DTexture)x.setTexture3D(Y,0),ze=_.TEXTURE_3D;else if(Y.isDataArrayTexture||Y.isCompressedArrayTexture)x.setTexture2DArray(Y,0),ze=_.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}_.pixelStorei(_.UNPACK_FLIP_Y_WEBGL,Y.flipY),_.pixelStorei(_.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),_.pixelStorei(_.UNPACK_ALIGNMENT,Y.unpackAlignment);const He=_.getParameter(_.UNPACK_ROW_LENGTH),gt=_.getParameter(_.UNPACK_IMAGE_HEIGHT),jt=_.getParameter(_.UNPACK_SKIP_PIXELS),yt=_.getParameter(_.UNPACK_SKIP_ROWS),Un=_.getParameter(_.UNPACK_SKIP_IMAGES),dt=$.isCompressedTexture?$.mipmaps[V]:$.image;_.pixelStorei(_.UNPACK_ROW_LENGTH,dt.width),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,dt.height),_.pixelStorei(_.UNPACK_SKIP_PIXELS,T.min.x),_.pixelStorei(_.UNPACK_SKIP_ROWS,T.min.y),_.pixelStorei(_.UNPACK_SKIP_IMAGES,T.min.z),$.isDataTexture||$.isData3DTexture?_.texSubImage3D(ze,V,B.x,B.y,B.z,Se,Ae,Ne,Oe,We,dt.data):$.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),_.compressedTexSubImage3D(ze,V,B.x,B.y,B.z,Se,Ae,Ne,Oe,dt.data)):_.texSubImage3D(ze,V,B.x,B.y,B.z,Se,Ae,Ne,Oe,We,dt),_.pixelStorei(_.UNPACK_ROW_LENGTH,He),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,gt),_.pixelStorei(_.UNPACK_SKIP_PIXELS,jt),_.pixelStorei(_.UNPACK_SKIP_ROWS,yt),_.pixelStorei(_.UNPACK_SKIP_IMAGES,Un),V===0&&Y.generateMipmaps&&_.generateMipmap(ze),z.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?x.setTextureCube(T,0):T.isData3DTexture?x.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?x.setTexture2DArray(T,0):x.setTexture2D(T,0),z.unbindTexture()},this.resetState=function(){D=0,P=0,L=null,z.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===ll?"display-p3":"srgb",t.unpackColorSpace=rt.workingColorSpace===Eo?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===At?ki:ed}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ki?At:Qn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class wS extends bd{}wS.prototype.isWebGL1Renderer=!0;class RS extends Qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class fl extends _i{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],a=[];o(r),u(i),c(),this.setAttribute("position",new Pn(s,3)),this.setAttribute("normal",new Pn(s.slice(),3)),this.setAttribute("uv",new Pn(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(E){const S=new H,b=new H,D=new H;for(let P=0;P<t.length;P+=3)m(t[P+0],S),m(t[P+1],b),m(t[P+2],D),l(S,b,D,E)}function l(E,S,b,D){const P=D+1,L=[];for(let q=0;q<=P;q++){L[q]=[];const K=E.clone().lerp(b,q/P),v=S.clone().lerp(b,q/P),A=P-q;for(let F=0;F<=A;F++)F===0&&q===P?L[q][F]=K:L[q][F]=K.clone().lerp(v,F/A)}for(let q=0;q<P;q++)for(let K=0;K<2*(P-q)-1;K++){const v=Math.floor(K/2);K%2===0?(d(L[q][v+1]),d(L[q+1][v]),d(L[q][v])):(d(L[q][v+1]),d(L[q+1][v+1]),d(L[q+1][v]))}}function u(E){const S=new H;for(let b=0;b<s.length;b+=3)S.x=s[b+0],S.y=s[b+1],S.z=s[b+2],S.normalize().multiplyScalar(E),s[b+0]=S.x,s[b+1]=S.y,s[b+2]=S.z}function c(){const E=new H;for(let S=0;S<s.length;S+=3){E.x=s[S+0],E.y=s[S+1],E.z=s[S+2];const b=p(E)/2/Math.PI+.5,D=h(E)/Math.PI+.5;a.push(b,1-D)}y(),f()}function f(){for(let E=0;E<a.length;E+=6){const S=a[E+0],b=a[E+2],D=a[E+4],P=Math.max(S,b,D),L=Math.min(S,b,D);P>.9&&L<.1&&(S<.2&&(a[E+0]+=1),b<.2&&(a[E+2]+=1),D<.2&&(a[E+4]+=1))}}function d(E){s.push(E.x,E.y,E.z)}function m(E,S){const b=E*3;S.x=e[b+0],S.y=e[b+1],S.z=e[b+2]}function y(){const E=new H,S=new H,b=new H,D=new H,P=new Ye,L=new Ye,q=new Ye;for(let K=0,v=0;K<s.length;K+=9,v+=6){E.set(s[K+0],s[K+1],s[K+2]),S.set(s[K+3],s[K+4],s[K+5]),b.set(s[K+6],s[K+7],s[K+8]),P.set(a[v+0],a[v+1]),L.set(a[v+2],a[v+3]),q.set(a[v+4],a[v+5]),D.copy(E).add(S).add(b).divideScalar(3);const A=p(D);M(P,v+0,E,A),M(L,v+2,S,A),M(q,v+4,b,A)}}function M(E,S,b,D){D<0&&E.x===1&&(a[S]=E.x-1),b.x===0&&b.z===0&&(a[S]=D/2/Math.PI+.5)}function p(E){return Math.atan2(E.z,-E.x)}function h(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fl(e.vertices,e.indices,e.radius,e.details)}}class lo extends fl{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new lo(e.radius,e.detail)}}class Au extends hs{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=td,this.normalScale=new Ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ol}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ol);const wu=768,CS={__name:"HeroBackground",setup(n){const e=Hi(null);let t,i,r,s,a,o=0,l=0,u=0,c=0;const f=typeof window<"u"&&("ontouchstart"in window||navigator.maxTouchPoints>0),d=()=>{const p=e.value;if(!p||!t||!r)return;const h=p.clientWidth||window.innerWidth,E=p.clientHeight||window.innerHeight,S=h<wu;if(t.setSize(h,E),r.aspect=h/E,r.fov=S?80:75,r.position.z=S?6.5:5,r.updateProjectionMatrix(),s&&a){const b=S?.85:1,D=S?.65:1;s.scale.set(b,b,b),a.scale.set(D,D,D)}},m=(p,h)=>{u=(p/window.innerWidth-.5)*2,c=(h/window.innerHeight-.5)*2},y=p=>m(p.clientX,p.clientY),M=p=>{const h=p.touches[0];h&&m(h.clientX,h.clientY)};return as(()=>{const p=e.value,h=p.clientWidth||window.innerWidth,E=p.clientHeight||window.innerHeight,S=new RS;r=new on(75,h/E,.1,1e3),r.position.z=5,t=new bd({alpha:!0,antialias:!0}),t.setSize(h,E),t.setPixelRatio(Math.min(window.devicePixelRatio,2)),p.appendChild(t.domElement),s=new gn(new lo(2,1),new Au({wireframe:!0,transparent:!0,opacity:.3})),S.add(s),a=new gn(new lo(1,0),new Au({wireframe:!1,transparent:!0,opacity:.8})),S.add(a),d(),window.addEventListener("mousemove",y),f&&window.addEventListener("touchmove",M,{passive:!0}),window.addEventListener("resize",d);const b=()=>{i=requestAnimationFrame(b),o+=(u-o)*.05,l+=(c-l)*.05,s.rotation.x+=.005,s.rotation.y+=.008,s.rotation.z+=.003,a.rotation.x-=.01,a.rotation.y-=.012;const D=window.innerWidth<wu?.35:.5;s.position.x=o*D,s.position.y=-l*D,a.position.x=o*D*1.2,a.position.y=-l*D*1.2,t.render(S,r)};b(),ls(()=>{cancelAnimationFrame(i),t.dispose(),window.removeEventListener("mousemove",y),f&&window.removeEventListener("touchmove",M),window.removeEventListener("resize",d)})}),(p,h)=>(ye(),Me("div",{ref_key:"container",ref:e,class:"absolute inset-0 w-full h-full pointer-events-none hero-background"},null,512))}},LS=sl(CS,[["__scopeId","data-v-0bece295"]]),PS={class:"min-h-screen flex flex-col items-center justify-center px-gutter py-section-padding-v-mobile md:py-section-padding-v relative overflow-hidden mesh-gradient"},DS={class:"max-w-container-max mx-auto text-center z-10"},US={class:"inline-flex items-center gap-2 px-3 py-1.5 rounded-md glass-panel mb-8 border-primary/10"},IS={class:"text-label-sm text-primary uppercase tracking-widest font-bold"},NS={class:"font-display-xl-mobile md:font-display-xl text-display-xl-mobile md:text-display-xl leading-tight mb-6 max-w-4xl mx-auto tracking-tighter"},FS={class:"text-gradient"},OS={class:"font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10 opacity-80"},BS={class:"flex flex-col md:flex-row gap-4 justify-center items-center"},zS={href:"#iletisim",class:"w-full md:w-auto px-10 py-4 bg-primary text-white rounded-lg font-label-md glow-button"},kS={href:"#hizmetler",class:"w-full md:w-auto px-10 py-4 glass-panel text-white rounded-lg font-label-md hover:bg-white/5 transition-all border-white/10"},HS={class:"mt-20 relative w-full max-w-5xl mx-auto px-4 perspective-1000"},GS={class:"glass-panel p-6 md:p-8 rounded-xl border-white/10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] transform rotate-x-2 transition-transform duration-700 hover:rotate-x-0"},VS={class:"flex items-center justify-between mb-8 border-b border-white/5 pb-4"},WS={class:"flex items-center gap-3"},XS={class:"text-[10px] uppercase tracking-[0.18em] text-on-surface-variant"},$S={class:"grid min-h-[250px] grid-cols-1 gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-center"},qS={class:"order-2 md:order-1"},jS={class:"text-[10px] font-bold uppercase tracking-[0.24em] text-primary"},YS={class:"max-w-md text-2xl font-semibold tracking-tight text-white md:text-3xl"},KS={class:"max-w-md text-sm leading-relaxed text-on-surface-variant"},ZS={class:"flex flex-wrap gap-2 pt-2"},JS={class:"order-1 relative h-56 overflow-hidden rounded-lg border border-white/10 bg-white/[0.03] md:order-2"},QS={class:"mb-5 flex items-center justify-between text-[10px] uppercase tracking-[0.16em] text-on-surface-variant"},ey={class:"text-primary"},ty={class:"flex h-[170px] items-end gap-2"},ny={class:"mt-7 flex items-center justify-between border-t border-white/5 pt-5"},iy=["aria-label"],ry=["aria-selected","aria-label","onClick"],sy={class:"flex gap-2"},oy=["aria-label"],ay=["aria-label"],ly={__name:"HeroSection",setup(n){const{t:e}=Sn(),t=Hi(0);let i;const r=Xt(()=>[{eyebrow:e("hero.carouselSlides.results.eyebrow"),title:e("hero.carouselSlides.results.title"),description:e("hero.carouselSlides.results.description"),visualLabel:e("hero.carouselSlides.results.visualLabel"),tags:["ERP","Automation","+42%"],bars:[38,48,44,66,72,88,96]},{eyebrow:e("hero.carouselSlides.ai.eyebrow"),title:e("hero.carouselSlides.ai.title"),description:e("hero.carouselSlides.ai.description"),visualLabel:e("hero.carouselSlides.ai.visualLabel"),tags:["AI","LLM","10x"],bars:[28,62,42,78,55,90,84]},{eyebrow:e("hero.carouselSlides.stack.eyebrow"),title:e("hero.carouselSlides.stack.title"),description:e("hero.carouselSlides.stack.description"),visualLabel:e("hero.carouselSlides.stack.visualLabel"),tags:["Cloud","DevOps","99.9%"],bars:[72,58,82,64,92,76,98]}]),s=Xt(()=>r.value[t.value]);function a(u){t.value=u}function o(){t.value=(t.value+1)%r.value.length}function l(){t.value=(t.value-1+r.value.length)%r.value.length}return as(()=>{i=window.setInterval(o,5e3)}),ls(()=>window.clearInterval(i)),(u,c)=>(ye(),Me("section",PS,[nt(LS),C("div",DS,[C("div",US,[C("span",IS,re(ve(e)("hero.badge")),1)]),C("h1",NS,[_t(re(ve(e)("hero.title1"))+" ",1),C("span",FS,re(ve(e)("hero.titleHighlight")),1),_t(" "+re(ve(e)("hero.title2")),1)]),C("p",OS,re(ve(e)("hero.subtitle")),1),C("div",BS,[C("a",zS,re(ve(e)("hero.ctaPrimary")),1),C("a",kS,re(ve(e)("hero.ctaSecondary")),1)])]),C("div",HS,[C("div",GS,[C("div",VS,[c[1]||(c[1]=C("div",{class:"flex gap-2"},[C("div",{class:"w-2.5 h-2.5 rounded-full bg-white/20"}),C("div",{class:"w-2.5 h-2.5 rounded-full bg-white/10"}),C("div",{class:"w-2.5 h-2.5 rounded-full bg-primary/40"})],-1)),C("div",WS,[C("span",XS,re(ve(e)("hero.carouselLabel")),1),c[0]||(c[0]=C("span",{class:"flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-emerald-300"},[C("span",{class:"h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-300"}),_t(" LIVE ")],-1))])]),C("div",$S,[C("div",qS,[nt(Ia,{name:"carousel-fade",mode:"out-in"},{default:Ys(()=>[(ye(),Me("div",{key:t.value,class:"space-y-4"},[C("span",jS,re(s.value.eyebrow),1),C("h2",YS,re(s.value.title),1),C("p",KS,re(s.value.description),1),C("div",ZS,[(ye(!0),Me(Ze,null,mt(s.value.tags,f=>(ye(),Me("span",{key:f,class:"rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/70"},re(f),1))),128))])]))]),_:1})]),C("div",JS,[nt(Ia,{name:"carousel-fade",mode:"out-in"},{default:Ys(()=>[(ye(),Me("div",{key:t.value,class:"absolute inset-0 p-5"},[C("div",QS,[C("span",null,re(s.value.visualLabel),1),C("span",ey,re(String(t.value+1).padStart(2,"0"))+" / 03",1)]),C("div",ty,[(ye(!0),Me(Ze,null,mt(s.value.bars,(f,d)=>(ye(),Me("span",{key:d,class:"flex-1 rounded-t-sm bg-gradient-to-t from-primary/30 to-primary transition-all duration-700",style:ss({height:`${f}%`})},null,4))),128))]),c[2]||(c[2]=C("div",{class:"absolute inset-x-5 bottom-5 border-t border-white/10"},null,-1))]))]),_:1})])]),C("div",ny,[C("div",{class:"flex gap-2",role:"tablist","aria-label":ve(e)("hero.carouselLabel")},[(ye(!0),Me(Ze,null,mt(r.value,(f,d)=>(ye(),Me("button",{key:f.title,type:"button",role:"tab","aria-selected":t.value===d,"aria-label":f.title,class:Zt(["h-1.5 rounded-full transition-all duration-300",t.value===d?"w-8 bg-primary":"w-2 bg-white/20 hover:bg-white/40"]),onClick:m=>a(d)},null,10,ry))),128))],8,iy),C("div",sy,[C("button",{type:"button","aria-label":ve(e)("hero.carouselPrevious"),class:"flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-white/70 transition-colors hover:border-primary/40 hover:text-primary",onClick:l},[...c[3]||(c[3]=[C("span",{class:"material-symbols-outlined text-[18px]"},"arrow_back",-1)])],8,oy),C("button",{type:"button","aria-label":ve(e)("hero.carouselNext"),class:"flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-white/70 transition-colors hover:border-primary/40 hover:text-primary",onClick:o},[...c[4]||(c[4]=[C("span",{class:"material-symbols-outlined text-[18px]"},"arrow_forward",-1)])],8,ay)])])])])]))}},cy=sl(ly,[["__scopeId","data-v-3ce0e86f"]]),uy={id:"teknolojiler",class:"px-gutter py-section-padding-v-mobile md:py-section-padding-v bg-surface-container-lowest/30"},fy={class:"max-w-container-max mx-auto"},dy={class:"flex flex-col md:flex-row justify-between items-end mb-16 gap-6"},hy={class:"max-w-2xl"},py={class:"font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-4 text-white"},my={class:"text-body-lg text-on-surface-variant"},gy=["aria-label"],_y=["aria-selected","onClick"],vy={class:"relative w-full overflow-hidden flex flex-col gap-6 rounded-2xl"},xy={class:"carousel-track py-2"},Sy={class:"flex gap-6 pr-6"},yy={class:"absolute top-2 right-2 text-[9px] uppercase tracking-wider font-semibold px-1.5 py-0.5 rounded bg-white/5"},My={class:"material-symbols-outlined text-4xl mt-2 transition-colors"},by={class:"text-sm font-mono font-medium transition-colors"},Ey={class:"flex gap-6 pr-6"},Ty={class:"absolute top-2 right-2 text-[9px] uppercase tracking-wider font-semibold px-1.5 py-0.5 rounded bg-white/5"},Ay={class:"material-symbols-outlined text-4xl mt-2 transition-colors"},wy={class:"text-sm font-mono font-medium transition-colors"},Ry={class:"carousel-track-reverse py-2"},Cy={class:"flex gap-6 pr-6"},Ly={class:"absolute top-2 right-2 text-[9px] uppercase tracking-wider font-semibold px-1.5 py-0.5 rounded bg-white/5"},Py={class:"material-symbols-outlined text-4xl mt-2 transition-colors"},Dy={class:"text-sm font-mono font-medium transition-colors"},Uy={class:"flex gap-6 pr-6"},Iy={class:"absolute top-2 right-2 text-[9px] uppercase tracking-wider font-semibold px-1.5 py-0.5 rounded bg-white/5"},Ny={class:"material-symbols-outlined text-4xl mt-2 transition-colors"},Fy={class:"text-sm font-mono font-medium transition-colors"},Oy={__name:"TechEcosystem",setup(n){const{t:e}=Sn(),t=Hi("all"),i=Xt(()=>[{key:"all",label:e("ecosystem.categoryAll")},{key:"Frontend",label:"Frontend"},{key:"Backend",label:"Backend"},{key:"DevOps",label:"DevOps"},{key:"AI",label:"AI"}]),r=[{name:"Vue.js",icon:"code_blocks",category:"Frontend"},{name:"React",icon:"deployed_code",category:"Frontend"},{name:"TailwindCSS",icon:"palette",category:"Frontend"},{name:"TypeScript",icon:"data_object",category:"Frontend"},{name:"Flutter",icon:"flutter",category:"Frontend"},{name:"Node.js",icon:"terminal",category:"Backend"},{name:"Spring Boot",icon:"coffee",category:"Backend"},{name:"PostgreSQL",icon:"database",category:"Backend"},{name:"MySQL",icon:"database",category:"Backend"},{name:"Express.js",icon:"terminal",category:"Backend"},{name:"RabbitMQ",icon:"message",category:"Backend"}],s=[{name:"Docker",icon:"grid_view",category:"DevOps"},{name:"Kubernetes",icon:"hub",category:"DevOps"},{name:"AWS / Cloud",icon:"cloud",category:"DevOps"},{name:"Git / GitHub",icon:"code",category:"DevOps"},{name:"Linux",icon:"computer",category:"DevOps"},{name:"PyTorch",icon:"psychology",category:"AI"},{name:"LLM Engine",icon:"smart_toy",category:"AI"},{name:"OpenAI API",icon:"integration_instructions",category:"AI"}],a=[...r,...s],o=Xt(()=>t.value==="all"?a:a.filter(u=>u.category===t.value));function l(u){switch(u){case"Frontend":return"bg-blue-500/5 hover:bg-blue-500/10 border-blue-500/20 text-blue-300 hover:border-blue-400";case"Backend":return"bg-emerald-500/5 hover:bg-emerald-500/10 border-emerald-500/20 text-emerald-300 hover:border-emerald-400";case"DevOps":return"bg-purple-500/5 hover:bg-purple-500/10 border-purple-500/20 text-purple-300 hover:border-purple-400";case"AI":return"bg-amber-500/5 hover:bg-amber-500/10 border-amber-500/20 text-amber-300 hover:border-amber-400";default:return"bg-white/5 border-white/10 text-on-surface-variant hover:border-primary"}}return(u,c)=>(ye(),Me("section",uy,[C("div",fy,[C("div",dy,[C("div",hy,[C("h2",py,re(ve(e)("ecosystem.title")),1),C("p",my,re(ve(e)("ecosystem.subtitle")),1)]),c[0]||(c[0]=C("div",{class:"hidden md:block"},[C("span",{class:"material-symbols-outlined text-[64px] text-primary/10"},"layers")],-1))]),C("div",{class:"mb-8 flex flex-wrap gap-2",role:"tablist","aria-label":ve(e)("ecosystem.categoriesLabel")},[(ye(!0),Me(Ze,null,mt(i.value,f=>(ye(),Me("button",{key:f.key,type:"button",role:"tab","aria-selected":t.value===f.key,class:Zt(["rounded-lg border px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] transition-colors",t.value===f.key?"border-primary bg-primary/10 text-primary":"border-white/10 text-on-surface-variant hover:border-white/30 hover:text-white"]),onClick:d=>t.value=f.key},re(f.label),11,_y))),128))],8,gy),C("div",vy,[c[1]||(c[1]=C("div",{class:"absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#121317] to-transparent z-10 pointer-events-none"},null,-1)),c[2]||(c[2]=C("div",{class:"absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#121317] to-transparent z-10 pointer-events-none"},null,-1)),C("div",xy,[C("div",Sy,[(ye(!0),Me(Ze,null,mt(o.value,(f,d)=>(ye(),Me("div",{key:"row1-orig-"+d,class:Zt(["w-44 h-32 rounded-xl border flex items-center justify-center flex-col gap-2 transition-all duration-300 group relative overflow-hidden px-4 flex-shrink-0",l(f.category)])},[C("span",yy,re(f.category),1),C("span",My,re(f.icon),1),C("span",by,re(f.name),1)],2))),128))]),C("div",Ey,[(ye(!0),Me(Ze,null,mt(o.value,(f,d)=>(ye(),Me("div",{key:"row1-dup-"+d,class:Zt(["w-44 h-32 rounded-xl border flex items-center justify-center flex-col gap-2 transition-all duration-300 group relative overflow-hidden px-4 flex-shrink-0",l(f.category)])},[C("span",Ty,re(f.category),1),C("span",Ay,re(f.icon),1),C("span",wy,re(f.name),1)],2))),128))])]),C("div",Ry,[C("div",Cy,[(ye(!0),Me(Ze,null,mt(o.value,(f,d)=>(ye(),Me("div",{key:"row2-orig-"+d,class:Zt(["w-44 h-32 rounded-xl border flex items-center justify-center flex-col gap-2 transition-all duration-300 group relative overflow-hidden px-4 flex-shrink-0",l(f.category)])},[C("span",Ly,re(f.category),1),C("span",Py,re(f.icon),1),C("span",Dy,re(f.name),1)],2))),128))]),C("div",Uy,[(ye(!0),Me(Ze,null,mt(o.value,(f,d)=>(ye(),Me("div",{key:"row2-dup-"+d,class:Zt(["w-44 h-32 rounded-xl border flex items-center justify-center flex-col gap-2 transition-all duration-300 group relative overflow-hidden px-4 flex-shrink-0",l(f.category)])},[C("span",Iy,re(f.category),1),C("span",Ny,re(f.icon),1),C("span",Fy,re(f.name),1)],2))),128))])])])])]))}},By={id:"hizmetler",class:"px-gutter py-section-padding-v-mobile md:py-section-padding-v bg-surface-container-lowest/30"},zy={class:"max-w-container-max mx-auto"},ky={class:"flex flex-col md:flex-row justify-between items-end mb-16 gap-6"},Hy={class:"max-w-2xl"},Gy={class:"font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-4 text-white"},Vy={class:"text-primary"},Wy={class:"text-body-lg text-on-surface-variant"},Xy={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"},$y={class:"w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 border border-primary/20"},qy={class:"material-symbols-outlined text-primary text-2xl"},jy={class:"text-headline-md text-[20px] mb-4 text-white"},Yy={class:"text-on-surface-variant text-body-md mb-6 leading-relaxed"},Ky={href:"#iletisim",class:"inline-flex items-center text-primary font-label-md gap-2 group-hover:translate-x-1 transition-transform"},Zy={__name:"ServicesSection",setup(n){const{t:e,messages:t,locale:i}=Sn(),r=["devices","hub","code_blocks","auto_awesome"],s=Xt(()=>t[i.value].services.cards.map((a,o)=>({icon:r[o],...a})));return(a,o)=>(ye(),Me("section",By,[C("div",zy,[C("div",ky,[C("div",Hy,[C("h2",Gy,[_t(re(ve(e)("services.sectionTitle1"))+" ",1),C("span",Vy,re(ve(e)("services.sectionTitleHighlight")),1)]),C("p",Wy,re(ve(e)("services.sectionSubtitle")),1)]),o[0]||(o[0]=C("div",{class:"hidden md:block"},[C("span",{class:"material-symbols-outlined text-[64px] text-primary/10"},"terminal")],-1))]),C("div",Xy,[(ye(!0),Me(Ze,null,mt(s.value,(l,u)=>(ye(),Me("div",{key:u,class:"glass-panel p-8 rounded-xl hover:border-primary/30 transition-all duration-300 group"},[C("div",$y,[C("span",qy,re(l.icon),1)]),C("h3",jy,re(l.title),1),C("p",Yy,re(l.description),1),C("a",Ky,[_t(re(ve(e)("services.details"))+" ",1),o[1]||(o[1]=C("span",{class:"material-symbols-outlined text-sm"},"arrow_forward_ios",-1))])]))),128))])])]))}},Jy={class:"px-gutter py-section-padding-v-mobile md:py-section-padding-v relative overflow-hidden"},Qy={class:"max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center"},eM={class:"relative"},tM={class:"glass-panel p-2 rounded-xl relative z-10 overflow-hidden border-white/10"},nM={class:"absolute bottom-10 left-10 right-10 glass-panel p-6 rounded-lg border-white/10 bg-surface-obsidian/40"},iM={class:"flex items-center gap-4 mb-3"},rM={class:"text-label-sm font-bold tracking-widest text-white uppercase"},sM={class:"text-label-md text-on-surface-variant italic font-medium"},oM={class:"font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-8 text-white tracking-tight"},aM={class:"text-gradient"},lM={class:"space-y-8"},cM={class:"flex-shrink-0 w-10 h-10 rounded-md glass-panel flex items-center justify-center border-white/10"},uM={class:"material-symbols-outlined text-primary text-xl"},fM={class:"font-headline-md text-[18px] mb-2 text-white"},dM={class:"text-on-surface-variant text-sm leading-relaxed"},hM={__name:"AiSection",setup(n){const{t:e,messages:t,locale:i}=Sn(),r=["psychology","bolt","security"],s=Xt(()=>t[i.value].ai.features.map((a,o)=>({icon:r[o],...a})));return(a,o)=>(ye(),Me("section",Jy,[C("div",Qy,[C("div",eM,[o[2]||(o[2]=C("div",{class:"absolute -inset-10 bg-primary/5 blur-[120px] rounded-full"},null,-1)),C("div",tM,[o[1]||(o[1]=C("div",{class:"bg-surface-obsidian rounded-lg p-1 overflow-hidden h-[500px]"},[C("img",{class:"w-full h-full object-cover rounded-md opacity-60 grayscale hover:grayscale-0 transition-all duration-1000",src:"https://lh3.googleusercontent.com/aida-public/AB6AXuCfpCUN3OlvCZ5mhdfKYSRH7hUB6OFv5FoonzdxU_q5wSwVW9YtlweLnhEESIEAql596fl4Hyezdy2u7LGOx6-HX8Ux74572JLO5fkdSffV-HRWTSQsEpwJghvzob1KPAnVOH31PtseoOX4ENZA4qSY4BsPdKxAOgUuoLCLlIkC8stgpCIWtTo5TzBgC2_yWLoeF-99NBvFerlLfsGRbiz-lEvWOarpdwwIEcaoDnJ8jVJSn2cxx4LI",alt:"AI Engine"})],-1)),C("div",nM,[C("div",iM,[o[0]||(o[0]=C("div",{class:"w-1.5 h-1.5 rounded-full bg-primary animate-pulse"},null,-1)),C("span",rM,re(ve(e)("ai.engineLabel")),1)]),C("p",sM,re(ve(e)("ai.engineQuote")),1)])])]),C("div",null,[C("h2",oM,[_t(re(ve(e)("ai.title1"))+" ",1),C("span",aM,re(ve(e)("ai.titleHighlight")),1),_t(" "+re(ve(e)("ai.title2")),1)]),C("div",lM,[(ye(!0),Me(Ze,null,mt(s.value,(l,u)=>(ye(),Me("div",{key:u,class:"flex gap-6"},[C("div",cM,[C("span",uM,re(l.icon),1)]),C("div",null,[C("h4",fM,re(l.title),1),C("p",dM,re(l.description),1)])]))),128))])])])]))}},pM={class:"px-gutter py-24 bg-primary/5 border-y border-primary/10"},mM={class:"max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center"},gM={class:"text-label-md uppercase tracking-widest text-primary font-bold"},_M={class:"text-label-md uppercase tracking-widest text-primary font-bold"},vM={class:"text-label-md uppercase tracking-widest text-primary font-bold"},xM={__name:"StatsSection",setup(n){const{t:e}=Sn();return(t,i)=>(ye(),Me("section",pM,[C("div",mM,[C("div",null,[i[0]||(i[0]=C("div",{class:"text-display-xl-mobile md:text-[56px] font-extrabold text-white mb-2 tracking-tighter"},"99.9%",-1)),C("div",gM,re(ve(e)("stats.reliability")),1)]),C("div",null,[i[1]||(i[1]=C("div",{class:"text-display-xl-mobile md:text-[56px] font-extrabold text-white mb-2 tracking-tighter"},"10x",-1)),C("div",_M,re(ve(e)("stats.speed")),1)]),C("div",null,[i[2]||(i[2]=C("div",{class:"text-display-xl-mobile md:text-[56px] font-extrabold text-white mb-2 tracking-tighter"},"100%",-1)),C("div",vM,re(ve(e)("stats.bespoke")),1)])])]))}},SM={id:"surec",class:"px-gutter py-section-padding-v-mobile md:py-section-padding-v"},yM={class:"max-w-container-max mx-auto"},MM={class:"text-center mb-20"},bM={class:"font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-4 text-white"},EM={class:"text-primary"},TM={class:"text-body-lg text-on-surface-variant max-w-2xl mx-auto opacity-70"},AM={class:"grid grid-cols-1 md:grid-cols-4 gap-4 relative"},wM={class:"w-10 h-10 bg-surface-obsidian text-primary border border-primary/20 rounded-md flex items-center justify-center mx-auto mb-6 font-bold text-sm group-hover:border-primary transition-colors"},RM={class:"font-headline-md text-[18px] mb-3 text-white"},CM={class:"text-on-surface-variant text-xs leading-relaxed opacity-80"},LM={__name:"ProcessSection",setup(n){const{t:e,messages:t,locale:i}=Sn(),r=["01","02","03","04"],s=Xt(()=>t[i.value].process.steps.map((a,o)=>({number:r[o],...a})));return(a,o)=>(ye(),Me("section",SM,[C("div",yM,[C("div",MM,[C("h2",bM,[_t(re(ve(e)("process.title1"))+" ",1),C("span",EM,re(ve(e)("process.titleHighlight")),1)]),C("p",TM,re(ve(e)("process.subtitle")),1)]),C("div",AM,[o[0]||(o[0]=C("div",{class:"hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent z-0"},null,-1)),(ye(!0),Me(Ze,null,mt(s.value,(l,u)=>(ye(),Me("div",{key:u,class:"relative z-10 glass-panel p-8 rounded-xl text-center group hover:bg-white/[0.03] transition-colors border-white/5"},[C("div",wM,re(l.number),1),C("h4",RM,re(l.title),1),C("p",CM,re(l.description),1)]))),128))])])]))}},PM={id:"iletisim",class:"px-gutter py-section-padding-v-mobile md:py-section-padding-v relative mesh-gradient"},DM={class:"max-w-4xl mx-auto glass-panel p-8 md:p-16 rounded-xl border-white/10 shadow-2xl"},UM={class:"text-center mb-12"},IM={class:"font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-4 text-white tracking-tight"},NM={class:"text-primary"},FM={class:"text-on-surface-variant"},OM={class:"mb-10 grid grid-cols-1 gap-3 border-y border-white/10 py-5 text-sm text-on-surface-variant md:grid-cols-3"},BM=["href"],zM={class:"flex items-center justify-center gap-2 md:justify-start"},kM=["href"],HM={class:"grid grid-cols-1 md:grid-cols-2 gap-6"},GM={class:"space-y-2"},VM={class:"text-label-sm uppercase tracking-widest text-on-surface-variant pl-1"},WM=["placeholder"],XM={class:"space-y-2"},$M={class:"text-label-sm uppercase tracking-widest text-on-surface-variant pl-1"},qM=["placeholder"],jM={class:"space-y-2"},YM={class:"text-label-sm uppercase tracking-widest text-on-surface-variant pl-1"},KM=["value"],ZM={class:"space-y-2"},JM={class:"text-label-sm uppercase tracking-widest text-on-surface-variant pl-1"},QM=["placeholder"],eb={class:"flex items-start gap-3 text-sm text-on-surface-variant"},tb=["disabled"],nb={__name:"ContactSection",setup(n){const{t:e,messages:t,locale:i}=Sn(),r=Xt(()=>t[i.value].contact.serviceOptions),s=Kr({name:"",email:"",service:"",details:"",consent:!1}),a=Hi(!1),o=Kr({message:"",success:!1});async function l(){o.message="",a.value=!0;try{const c=await(await fetch("https://sartechs-fullstack.vercel.app/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...s})})).json();o.message=c.message,o.success=c.success,c.success&&(s.name="",s.email="",s.service="",s.details="",s.consent=!1)}catch{o.message="Bağlantı hatası. Lütfen tekrar deneyin.",o.success=!1}finally{a.value=!1}}return(u,c)=>(ye(),Me("section",PM,[C("div",DM,[C("div",UM,[C("h2",IM,[_t(re(ve(e)("contact.title1"))+" ",1),C("span",NM,re(ve(e)("contact.titleHighlight")),1),_t(" "+re(ve(e)("contact.title2")),1)]),C("p",FM,re(ve(e)("contact.subtitle")),1)]),C("div",OM,[C("a",{href:`mailto:${ve(e)("contact.email")}`,class:"flex items-center justify-center gap-2 transition-colors hover:text-white md:justify-start"},[c[5]||(c[5]=C("span",{class:"material-symbols-outlined text-primary"},"mail",-1)),_t(" "+re(ve(e)("contact.email")),1)],8,BM),C("span",zM,[c[6]||(c[6]=C("span",{class:"material-symbols-outlined text-primary"},"location_on",-1)),_t(" "+re(ve(e)("contact.location")),1)]),C("a",{href:`mailto:${ve(e)("contact.email")}?subject=${encodeURIComponent(ve(e)("contact.quickSubject"))}`,class:"flex items-center justify-center gap-2 font-semibold text-primary transition-colors hover:text-white md:justify-start"},[c[7]||(c[7]=C("span",{class:"material-symbols-outlined"},"bolt",-1)),_t(" "+re(ve(e)("contact.quickContact")),1)],8,kM)]),C("form",{class:"space-y-6",onSubmit:kr(l,["prevent"])},[C("div",HM,[C("div",GM,[C("label",VM,re(ve(e)("contact.labelName")),1),Cr(C("input",{"onUpdate:modelValue":c[0]||(c[0]=f=>s.name=f),type:"text",placeholder:ve(e)("contact.placeholderName"),class:"w-full bg-white/[0.03] border border-white/10 rounded-lg px-5 py-3.5 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-white/10 text-white"},null,8,WM),[[Wo,s.name]])]),C("div",XM,[C("label",$M,re(ve(e)("contact.labelEmail")),1),Cr(C("input",{"onUpdate:modelValue":c[1]||(c[1]=f=>s.email=f),type:"email",placeholder:ve(e)("contact.placeholderEmail"),class:"w-full bg-white/[0.03] border border-white/10 rounded-lg px-5 py-3.5 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-white/10 text-white"},null,8,qM),[[Wo,s.email]])])]),C("div",jM,[C("label",YM,re(ve(e)("contact.labelService")),1),Cr(C("select",{"onUpdate:modelValue":c[2]||(c[2]=f=>s.service=f),class:"w-full bg-white/[0.03] border border-white/10 rounded-lg px-5 py-3.5 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all text-white appearance-none"},[(ye(!0),Me(Ze,null,mt(r.value,f=>(ye(),Me("option",{key:f,value:f,class:"bg-surface-obsidian"},re(f),9,KM))),128))],512),[[Jp,s.service]])]),C("div",ZM,[C("label",JM,re(ve(e)("contact.labelDetails")),1),Cr(C("textarea",{"onUpdate:modelValue":c[3]||(c[3]=f=>s.details=f),rows:"4",placeholder:ve(e)("contact.placeholderDetails"),class:"w-full bg-white/[0.03] border border-white/10 rounded-lg px-5 py-3.5 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-white/10 text-white"},null,8,QM),[[Wo,s.details]])]),C("label",eb,[Cr(C("input",{"onUpdate:modelValue":c[4]||(c[4]=f=>s.consent=f),type:"checkbox",required:"",class:"mt-1 h-4 w-4 accent-primary"},null,512),[[Zp,s.consent]]),C("span",null,re(ve(e)("contact.consent")),1)]),C("button",{type:"submit",disabled:a.value,class:"w-full py-4 bg-primary text-white rounded-lg font-bold text-base glow-button tracking-widest transition-all uppercase disabled:opacity-50 disabled:cursor-not-allowed"},re(a.value?"...":ve(e)("contact.submit")),9,tb),o.message?(ye(),Me("p",{key:0,class:Zt([o.success?"text-green-400":"text-red-400","text-center text-sm pt-2"])},re(o.message),3)):yo("",!0)],32)])]))}},ib={id:"hakkimizda",class:"px-gutter py-section-padding-v-mobile md:py-section-padding-v bg-surface-container-lowest/30"},rb={class:"max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center"},sb={class:"inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.28em] text-primary mb-6"},ob={class:"font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-6 text-white tracking-tight"},ab={class:"text-primary"},lb={class:"text-body-lg text-on-surface-variant max-w-xl leading-relaxed mb-8"},cb={class:"space-y-4"},ub={class:"leading-relaxed"},fb={class:"relative"},db={class:"glass-panel relative overflow-hidden rounded-2xl border border-white/10 p-6 md:p-8 shadow-[0_30px_60px_-20px_rgba(14,165,233,0.20)]"},hb={class:"mb-6 flex items-center justify-between"},pb={class:"text-[10px] font-bold uppercase tracking-[0.28em] text-on-surface-variant"},mb={class:"mt-2 text-xl font-semibold text-white"},gb={class:"space-y-4"},_b={class:"mb-2 flex items-center justify-between"},vb={class:"text-sm font-medium text-white"},xb={class:"text-primary text-xs font-semibold uppercase tracking-[0.18em]"},Sb={key:0,class:"text-sm leading-relaxed text-on-surface-variant"},yb={key:1,class:"mt-3 flex flex-wrap gap-2"},Mb={__name:"AboutSection",setup(n){const{t:e,messages:t,locale:i}=Sn(),r=Xt(()=>t[i.value].about.points),s=Xt(()=>t[i.value].about.techs),a=Xt(()=>t[i.value].about.card.items);return(o,l)=>(ye(),Me("section",ib,[C("div",rb,[C("div",null,[C("span",sb,re(ve(e)("nav.about")),1),C("h2",ob,[_t(re(ve(e)("about.title1"))+" ",1),C("span",ab,re(ve(e)("about.titleHighlight")),1),_t(" "+re(ve(e)("about.title2")),1)]),C("p",lb,re(ve(e)("about.subtitle")),1),C("ul",cb,[(ye(!0),Me(Ze,null,mt(r.value,(u,c)=>(ye(),Me("li",{key:c,class:"flex items-start gap-3 text-on-surface-variant"},[l[0]||(l[0]=C("span",{class:"mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary border border-primary/20"},[C("span",{class:"material-symbols-outlined text-[14px]"},"check")],-1)),C("span",ub,re(u),1)]))),128))])]),C("div",fb,[l[2]||(l[2]=C("div",{class:"absolute -right-8 top-8 h-32 w-32 rounded-full bg-primary/10 blur-3xl"},null,-1)),C("div",db,[l[1]||(l[1]=C("div",{class:"absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/80 to-transparent"},null,-1)),C("div",hb,[C("div",null,[C("p",pb,re(ve(e)("about.card.label")),1),C("h3",mb,re(ve(e)("about.card.title")),1)])]),C("div",gb,[(ye(!0),Me(Ze,null,mt(a.value,(u,c)=>(ye(),Me("div",{key:c,class:"rounded-xl border border-white/10 bg-white/[0.02] p-4"},[C("div",_b,[C("span",vb,re(u.title),1),C("span",xb,re(String(c+1).padStart(2,"0")),1)]),u.description?(ye(),Me("p",Sb,re(u.description),1)):c===a.value.length-1?(ye(),Me("div",yb,[(ye(!0),Me(Ze,null,mt(s.value,(f,d)=>(ye(),Me("span",{key:d,class:"rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1.5 text-[11px] text-white/80"},re(f),1))),128))])):yo("",!0)]))),128))])])])])]))}},bb={id:"projeler",class:"px-gutter py-section-padding-v-mobile md:py-section-padding-v relative"},Eb={class:"max-w-container-max mx-auto"},Tb={class:"mx-auto max-w-3xl text-center mb-12"},Ab={class:"inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.28em] text-primary mb-6"},wb={class:"font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-4 text-white tracking-tight"},Rb={class:"text-primary"},Cb={class:"text-body-lg text-on-surface-variant leading-relaxed"},Lb={class:"grid grid-cols-1 md:grid-cols-3 gap-6"},Pb={class:"mb-6 flex items-center justify-between"},Db={class:"rounded-full border border-primary/20 bg-primary/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary"},Ub={class:"mb-6 h-28 rounded-xl border border-white/10 bg-gradient-to-br from-primary/15 via-white/[0.03] to-transparent p-4"},Ib={class:"flex h-full items-end gap-2"},Nb={class:"mb-5 text-lg font-semibold text-white"},Fb={class:"space-y-4 text-sm leading-relaxed"},Ob={class:"mb-1 text-[10px] font-bold uppercase tracking-[0.18em] text-primary"},Bb={class:"text-on-surface-variant"},zb={class:"mb-1 text-[10px] font-bold uppercase tracking-[0.18em] text-primary"},kb={class:"text-on-surface-variant"},Hb={class:"mb-1 text-[10px] font-bold uppercase tracking-[0.18em] text-primary"},Gb={class:"font-semibold text-white"},Vb={__name:"ProjectsSection",setup(n){const{t:e,messages:t,locale:i}=Sn(),r=Xt(()=>t[i.value].projects.items);return(s,a)=>(ye(),Me("section",bb,[C("div",Eb,[C("div",Tb,[C("span",Ab,re(ve(e)("nav.projects")),1),C("h2",wb,[_t(re(ve(e)("projects.title1"))+" ",1),C("span",Rb,re(ve(e)("projects.titleHighlight")),1),_t(" "+re(ve(e)("projects.title2")),1)]),C("p",Cb,re(ve(e)("projects.subtitle")),1)]),C("div",Lb,[(ye(!0),Me(Ze,null,mt(r.value,(o,l)=>(ye(),Me("article",{key:l,class:"glass-panel rounded-2xl border border-white/10 p-6 md:p-7 transition-transform duration-300 hover:-translate-y-1"},[C("div",Pb,[a[0]||(a[0]=C("span",{class:"text-xs uppercase tracking-[0.2em] text-primary"},"Case study",-1)),C("span",Db,re(o.metric),1)]),C("div",Ub,[C("div",Ib,[(ye(),Me(Ze,null,mt([40,64,52,88,76],u=>C("span",{key:u,class:"flex-1 rounded-t bg-primary/50",style:ss({height:`${u}%`})},null,4)),64))])]),C("h3",Nb,re(o.name),1),C("dl",Fb,[C("div",null,[C("dt",Ob,re(ve(e)("projects.problem")),1),C("dd",Bb,re(o.problem),1)]),C("div",null,[C("dt",zb,re(ve(e)("projects.solution")),1),C("dd",kb,re(o.solution),1)]),C("div",null,[C("dt",Hb,re(ve(e)("projects.result")),1),C("dd",Gb,re(o.result),1)])])]))),128))])])]))}},Wb={class:"w-full border-t border-white/5 bg-surface-obsidian"},Xb={class:"flex flex-col md:flex-row justify-between items-center px-gutter py-section-padding-v-mobile max-w-container-max mx-auto gap-8"},$b={class:"flex flex-col items-center md:items-start gap-4"},qb={class:"text-on-surface-variant text-xs max-w-xs text-center md:text-left opacity-60"},jb={class:"flex gap-12"},Yb={class:"flex flex-col gap-3 text-center md:text-left"},Kb={class:"font-label-md text-primary mb-2 uppercase tracking-widest text-[10px]"},Zb=["href"],Jb={class:"flex flex-col gap-3 text-center md:text-left"},Qb={class:"font-label-md text-primary mb-2 uppercase tracking-widest text-[10px]"},eE=["href"],tE={class:"flex flex-col items-center md:items-end gap-6"},nE={class:"font-body-md text-[11px] text-on-surface-variant opacity-40"},iE={class:"max-w-container-max mx-auto grid gap-4 border-t border-white/5 px-gutter py-8 text-xs leading-relaxed text-on-surface-variant md:grid-cols-3"},rE=["id"],sE={class:"cursor-pointer list-none font-semibold text-white transition-colors group-open:text-primary"},oE={class:"mt-3 max-w-xl"},aE={__name:"AppFooter",setup(n){const{t:e}=Sn();return(t,i)=>(ye(),Me("footer",Wb,[C("div",Xb,[C("div",$b,[i[0]||(i[0]=C("img",{src:"https://lh3.googleusercontent.com/aida/AP1WRLty_fiSjelvnvJUU_N9Vgoqa25s-UYGEfXUw3XsRfqQeEVJsggnyXPwHaO2vaOsO7PgQOOcEMNlh-KiVFSFU-YO4Y3ShyMAICfmpEo18XkrYAVDE_qPXCHTd0Cy-P5dg5pg_O50VYFEJgYJwz1fnZlmQR5gLLDeW1DbsSo0eENeHzU_dEZ0d3UtPAt4ZVJ4eD6MoO9x9tFEM_4JutbsQbTs3wyc9ZlLVTvnLKWOBNAckoIa0p2RmgirmWs",alt:"Sartechs",class:"h-10 w-auto logo-filter"},null,-1)),C("p",qb,re(ve(e)("footer.tagline")),1)]),C("div",jb,[C("div",Yb,[C("span",Kb,re(ve(e)("footer.company")),1),(ye(!0),Me(Ze,null,mt(ve(e)("footer.companyLinks"),r=>(ye(),Me("a",{key:r.label,href:r.href,class:"text-on-surface-variant hover:text-white transition-colors text-xs"},re(r.label),9,Zb))),128))]),C("div",Jb,[C("span",Qb,re(ve(e)("footer.support")),1),(ye(!0),Me(Ze,null,mt(ve(e)("footer.supportLinks"),r=>(ye(),Me("a",{key:r.label,href:r.href,class:"text-on-surface-variant hover:text-white transition-colors text-xs"},re(r.label),9,eE))),128))])]),C("div",tE,[i[1]||(i[1]=fp('<div class="flex gap-4"><a href="mailto:sariibasmuhammed@gmail.com" aria-label="E-posta gönder" class="w-9 h-9 glass-panel rounded-lg flex items-center justify-center hover:bg-primary/10 transition-all border-white/5"><span class="material-symbols-outlined text-[18px]">share</span></a><a href="mailto:sariibasmuhammed@gmail.com" aria-label="E-posta gönder" class="w-9 h-9 glass-panel rounded-lg flex items-center justify-center hover:bg-primary/10 transition-all border-white/5"><span class="material-symbols-outlined text-[18px]">alternate_email</span></a></div>',1)),C("p",nE,"© "+re(new Date().getFullYear())+" "+re(ve(e)("footer.copyright")),1)])]),C("div",iE,[(ye(!0),Me(Ze,null,mt(ve(e)("footer.legalDocuments"),r=>(ye(),Me("details",{id:r.id,key:r.id,class:"group"},[C("summary",sE,re(r.title),1),C("p",oE,re(r.body),1)],8,rE))),128))])]))}},lE={class:"font-body-md text-on-surface selection:bg-primary/30 selection:text-white"},cE={class:"relative pt-24 overflow-hidden"},uE={__name:"App",setup(n){return om(),(e,t)=>(ye(),Me("div",lE,[nt(_m),C("main",cE,[nt(cy),nt(Zy),nt(hM),nt(xM),nt(LM),nt(Mb),nt(Vb),nt(Oy),nt(nb)]),nt(aE)]))}};im(uE).mount("#app");
