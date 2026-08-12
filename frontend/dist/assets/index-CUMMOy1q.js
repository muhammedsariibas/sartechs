(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Va(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const st={},lr=[],wn=()=>{},Eu=()=>!1,ro=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),so=n=>n.startsWith("onUpdate:"),Mt=Object.assign,ka=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Ad=Object.prototype.hasOwnProperty,Je=(n,e)=>Ad.call(n,e),Le=Array.isArray,cr=n=>Qr(n)==="[object Map]",oo=n=>Qr(n)==="[object Set]",pl=n=>Qr(n)==="[object Date]",He=n=>typeof n=="function",ht=n=>typeof n=="string",Ln=n=>typeof n=="symbol",Qe=n=>n!==null&&typeof n=="object",bu=n=>(Qe(n)||He(n))&&He(n.then)&&He(n.catch),Tu=Object.prototype.toString,Qr=n=>Tu.call(n),wd=n=>Qr(n).slice(8,-1),Au=n=>Qr(n)==="[object Object]",Wa=n=>ht(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Fr=Va(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ao=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Rd=/-\w/g,gn=ao(n=>n.replace(Rd,e=>e.slice(1).toUpperCase())),Cd=/\B([A-Z])/g,Gi=ao(n=>n.replace(Cd,"-$1").toLowerCase()),wu=ao(n=>n.charAt(0).toUpperCase()+n.slice(1)),Lo=ao(n=>n?`on${wu(n)}`:""),Tn=(n,e)=>!Object.is(n,e),Fs=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Ru=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},lo=n=>{const e=parseFloat(n);return isNaN(e)?n:e},Ld=n=>{const e=ht(n)?Number(n):NaN;return isNaN(e)?n:e};let ml;const co=()=>ml||(ml=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Xa(n){if(Le(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=ht(i)?Id(i):Xa(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(ht(n)||Qe(n))return n}const Pd=/;(?![^(]*\))/g,Dd=/:([^]+)/,Ud=/\/\*[^]*?\*\//g;function Id(n){const e={};return n.replace(Ud,"").split(Pd).forEach(t=>{if(t){const i=t.split(Dd);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function pn(n){let e="";if(ht(n))e=n;else if(Le(n))for(let t=0;t<n.length;t++){const i=pn(n[t]);i&&(e+=i+" ")}else if(Qe(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Nd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Fd=Va(Nd);function Cu(n){return!!n||n===""}function Od(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=es(n[i],e[i]);return t}function es(n,e){if(n===e)return!0;let t=pl(n),i=pl(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=Ln(n),i=Ln(e),t||i)return n===e;if(t=Le(n),i=Le(e),t||i)return t&&i?Od(n,e):!1;if(t=Qe(n),i=Qe(e),t||i){if(!t||!i)return!1;const r=Object.keys(n).length,s=Object.keys(e).length;if(r!==s)return!1;for(const a in n){const o=n.hasOwnProperty(a),l=e.hasOwnProperty(a);if(o&&!l||!o&&l||!es(n[a],e[a]))return!1}}return String(n)===String(e)}function Bd(n,e){return n.findIndex(t=>es(t,e))}const Lu=n=>!!(n&&n.__v_isRef===!0),fe=n=>ht(n)?n:n==null?"":Le(n)||Qe(n)&&(n.toString===Tu||!He(n.toString))?Lu(n)?fe(n.value):JSON.stringify(n,Pu,2):String(n),Pu=(n,e)=>Lu(e)?Pu(n,e.value):cr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[Po(i,s)+" =>"]=r,t),{})}:oo(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Po(t))}:Ln(e)?Po(e):Qe(e)&&!Le(e)&&!Au(e)?String(e):e,Po=(n,e="")=>{var t;return Ln(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Et;class zd{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&Et&&(Et.active?(this.parent=Et,this.index=(Et.scopes||(Et.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes){const i=this.scopes.slice();for(e=0,t=i.length;e<t;e++)i[e].pause()}for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes){const r=this.scopes.slice();for(e=0,t=r.length;e<t;e++)r[e].resume()}const i=this.effects.slice();for(e=0,t=i.length;e<t;e++)i[e].resume()}}run(e){if(this._active){const t=Et;try{return Et=this,e()}finally{Et=t}}}on(){++this._on===1&&(this.prevScope=Et,Et=this)}off(){if(this._on>0&&--this._on===0){if(Et===this)Et=this.prevScope;else{let e=Et;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){const r=this.scopes.slice();for(t=0,i=r.length;t<i;t++)r[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Hd(){return Et}let lt;const Do=new WeakSet;class Du{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Et&&(Et.active?Et.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Do.has(this)&&(Do.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Iu(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,gl(this),Nu(this);const e=lt,t=_n;lt=this,_n=!0;try{return this.fn()}finally{Fu(this),lt=e,_n=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ya(e);this.deps=this.depsTail=void 0,gl(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Do.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Sa(this)&&this.run()}get dirty(){return Sa(this)}}let Uu=0,Or,Br;function Iu(n,e=!1){if(n.flags|=8,e){n.next=Br,Br=n;return}n.next=Or,Or=n}function $a(){Uu++}function qa(){if(--Uu>0)return;if(Br){let e=Br;for(Br=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Or;){let e=Or;for(Or=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function Nu(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Fu(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),Ya(i),Gd(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function Sa(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Ou(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Ou(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===kr)||(n.globalVersion=kr,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Sa(n))))return;n.flags|=2;const e=n.dep,t=lt,i=_n;lt=n,_n=!0;try{Nu(n);const r=n.fn(n._value);(e.version===0||Tn(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{lt=t,_n=i,Fu(n),n.flags&=-3}}function Ya(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)Ya(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Gd(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let _n=!0;const Bu=[];function jn(){Bu.push(_n),_n=!1}function Kn(){const n=Bu.pop();_n=n===void 0?!0:n}function gl(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=lt;lt=void 0;try{e()}finally{lt=t}}}let kr=0;class Vd{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ja{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!lt||!_n||lt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==lt)t=this.activeLink=new Vd(lt,this),lt.deps?(t.prevDep=lt.depsTail,lt.depsTail.nextDep=t,lt.depsTail=t):lt.deps=lt.depsTail=t,zu(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=lt.depsTail,t.nextDep=void 0,lt.depsTail.nextDep=t,lt.depsTail=t,lt.deps===t&&(lt.deps=i)}return t}trigger(e){this.version++,kr++,this.notify(e)}notify(e){$a();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{qa()}}}function zu(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)zu(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Ma=new WeakMap,Ii=Symbol(""),ya=Symbol(""),Wr=Symbol("");function Lt(n,e,t){if(_n&&lt){let i=Ma.get(n);i||Ma.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new ja),r.map=i,r.key=t),r.track()}}function kn(n,e,t,i,r,s){const a=Ma.get(n);if(!a){kr++;return}const o=l=>{l&&l.trigger()};if($a(),e==="clear")a.forEach(o);else{const l=Le(n),u=l&&Wa(t);if(l&&t==="length"){const c=Number(i);a.forEach((f,h)=>{(h==="length"||h===Wr||!Ln(h)&&h>=c)&&o(f)})}else switch((t!==void 0||a.has(void 0))&&o(a.get(t)),u&&o(a.get(Wr)),e){case"add":l?u&&o(a.get("length")):(o(a.get(Ii)),cr(n)&&o(a.get(ya)));break;case"delete":l||(o(a.get(Ii)),cr(n)&&o(a.get(ya)));break;case"set":cr(n)&&o(a.get(Ii));break}}qa()}function Vi(n){const e=Ze(n);return e===n?e:(Lt(e,"iterate",Wr),an(n)?e:e.map(vn))}function uo(n){return Lt(n=Ze(n),"iterate",Wr),n}function yn(n,e){return Zn(n)?gr(Ni(n)?vn(e):e):vn(e)}const kd={__proto__:null,[Symbol.iterator](){return Uo(this,Symbol.iterator,n=>yn(this,n))},concat(...n){return Vi(this).concat(...n.map(e=>Le(e)?Vi(e):e))},entries(){return Uo(this,"entries",n=>(n[1]=yn(this,n[1]),n))},every(n,e){return Un(this,"every",n,e,void 0,arguments)},filter(n,e){return Un(this,"filter",n,e,t=>t.map(i=>yn(this,i)),arguments)},find(n,e){return Un(this,"find",n,e,t=>yn(this,t),arguments)},findIndex(n,e){return Un(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Un(this,"findLast",n,e,t=>yn(this,t),arguments)},findLastIndex(n,e){return Un(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Un(this,"forEach",n,e,void 0,arguments)},includes(...n){return Io(this,"includes",n)},indexOf(...n){return Io(this,"indexOf",n)},join(n){return Vi(this).join(n)},lastIndexOf(...n){return Io(this,"lastIndexOf",n)},map(n,e){return Un(this,"map",n,e,void 0,arguments)},pop(){return br(this,"pop")},push(...n){return br(this,"push",n)},reduce(n,...e){return _l(this,"reduce",n,e)},reduceRight(n,...e){return _l(this,"reduceRight",n,e)},shift(){return br(this,"shift")},some(n,e){return Un(this,"some",n,e,void 0,arguments)},splice(...n){return br(this,"splice",n)},toReversed(){return Vi(this).toReversed()},toSorted(n){return Vi(this).toSorted(n)},toSpliced(...n){return Vi(this).toSpliced(...n)},unshift(...n){return br(this,"unshift",n)},values(){return Uo(this,"values",n=>yn(this,n))}};function Uo(n,e,t){const i=uo(n),r=i[e]();return i!==n&&!an(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=t(s.value)),s}),r}const Wd=Array.prototype;function Un(n,e,t,i,r,s){const a=uo(n),o=a!==n&&!an(n),l=a[e];if(l!==Wd[e]){const f=l.apply(n,s);return o?vn(f):f}let u=t;a!==n&&(o?u=function(f,h){return t.call(this,yn(n,f),h,n)}:t.length>2&&(u=function(f,h){return t.call(this,f,h,n)}));const c=l.call(a,u,i);return o&&r?r(c):c}function _l(n,e,t,i){const r=uo(n),s=r!==n&&!an(n);let a=t,o=!1;r!==n&&(s?(o=i.length===0,a=function(u,c,f){return o&&(o=!1,u=yn(n,u)),t.call(this,u,yn(n,c),f,n)}):t.length>3&&(a=function(u,c,f){return t.call(this,u,c,f,n)}));const l=r[e](a,...i);return o?yn(n,l):l}function Io(n,e,t){const i=Ze(n);Lt(i,"iterate",Wr);const r=i[e](...t);return(r===-1||r===!1)&&Ja(t[0])?(t[0]=Ze(t[0]),i[e](...t)):r}function br(n,e,t=[]){jn(),$a();const i=Ze(n)[e].apply(n,t);return qa(),Kn(),i}const Xd=Va("__proto__,__v_isRef,__isVue"),Hu=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Ln));function $d(n){Ln(n)||(n=String(n));const e=Ze(this);return Lt(e,"has",n),e.hasOwnProperty(n)}class Gu{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?nh:Xu:s?Wu:ku).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=Le(e);if(!r){let l;if(a&&(l=kd[t]))return l;if(t==="hasOwnProperty")return $d}const o=Reflect.get(e,t,Pt(e)?e:i);if((Ln(t)?Hu.has(t):Xd(t))||(r||Lt(e,"get",t),s))return o;if(Pt(o)){const l=a&&Wa(t)?o:o.value;return r&&Qe(l)?ba(l):l}return Qe(o)?r?ba(o):Xr(o):o}}class Vu extends Gu{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];const a=Le(e)&&Wa(t);if(!this._isShallow){const u=Zn(s);if(!an(i)&&!Zn(i)&&(s=Ze(s),i=Ze(i)),!a&&Pt(s)&&!Pt(i))return u||(s.value=i),!0}const o=a?Number(t)<e.length:Je(e,t),l=Reflect.set(e,t,i,Pt(e)?e:r);return e===Ze(r)&&l&&(o?Tn(i,s)&&kn(e,"set",t,i):kn(e,"add",t,i)),l}deleteProperty(e,t){const i=Je(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&kn(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!Ln(t)||!Hu.has(t))&&Lt(e,"has",t),i}ownKeys(e){return Lt(e,"iterate",Le(e)?"length":Ii),Reflect.ownKeys(e)}}class qd extends Gu{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Yd=new Vu,jd=new qd,Kd=new Vu(!0);const Ea=n=>n,us=n=>Reflect.getPrototypeOf(n);function Zd(n,e,t){return function(...i){const r=this.__v_raw,s=Ze(r),a=cr(s),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,u=r[n](...i),c=t?Ea:e?gr:vn;return!e&&Lt(s,"iterate",l?ya:Ii),Mt(Object.create(u),{next(){const{value:f,done:h}=u.next();return h?{value:f,done:h}:{value:o?[c(f[0]),c(f[1])]:c(f),done:h}}})}}function fs(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Jd(n,e){const t={get(r){const s=this.__v_raw,a=Ze(s),o=Ze(r);n||(Tn(r,o)&&Lt(a,"get",r),Lt(a,"get",o));const{has:l}=us(a),u=e?Ea:n?gr:vn;if(l.call(a,r))return u(s.get(r));if(l.call(a,o))return u(s.get(o));s!==a&&s.get(r)},get size(){const r=this.__v_raw;return!n&&Lt(Ze(r),"iterate",Ii),r.size},has(r){const s=this.__v_raw,a=Ze(s),o=Ze(r);return n||(Tn(r,o)&&Lt(a,"has",r),Lt(a,"has",o)),r===o?s.has(r):s.has(r)||s.has(o)},forEach(r,s){const a=this,o=a.__v_raw,l=Ze(o),u=e?Ea:n?gr:vn;return!n&&Lt(l,"iterate",Ii),o.forEach((c,f)=>r.call(s,u(c),u(f),a))}};return Mt(t,n?{add:fs("add"),set:fs("set"),delete:fs("delete"),clear:fs("clear")}:{add(r){const s=Ze(this),a=us(s),o=Ze(r),l=!e&&!an(r)&&!Zn(r)?o:r;return a.has.call(s,l)||Tn(r,l)&&a.has.call(s,r)||Tn(o,l)&&a.has.call(s,o)||(s.add(l),kn(s,"add",l,l)),this},set(r,s){!e&&!an(s)&&!Zn(s)&&(s=Ze(s));const a=Ze(this),{has:o,get:l}=us(a);let u=o.call(a,r);u||(r=Ze(r),u=o.call(a,r));const c=l.call(a,r);return a.set(r,s),u?Tn(s,c)&&kn(a,"set",r,s):kn(a,"add",r,s),this},delete(r){const s=Ze(this),{has:a,get:o}=us(s);let l=a.call(s,r);l||(r=Ze(r),l=a.call(s,r)),o&&o.call(s,r);const u=s.delete(r);return l&&kn(s,"delete",r,void 0),u},clear(){const r=Ze(this),s=r.size!==0,a=r.clear();return s&&kn(r,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Zd(r,n,e)}),t}function Ka(n,e){const t=Jd(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(Je(t,r)&&r in i?t:i,r,s)}const Qd={get:Ka(!1,!1)},eh={get:Ka(!1,!0)},th={get:Ka(!0,!1)};const ku=new WeakMap,Wu=new WeakMap,Xu=new WeakMap,nh=new WeakMap;function ih(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Xr(n){return Zn(n)?n:Za(n,!1,Yd,Qd,ku)}function rh(n){return Za(n,!1,Kd,eh,Wu)}function ba(n){return Za(n,!0,jd,th,Xu)}function Za(n,e,t,i,r){if(!Qe(n)||n.__v_raw&&!(e&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const s=r.get(n);if(s)return s;const a=ih(wd(n));if(a===0)return n;const o=new Proxy(n,a===2?i:t);return r.set(n,o),o}function Ni(n){return Zn(n)?Ni(n.__v_raw):!!(n&&n.__v_isReactive)}function Zn(n){return!!(n&&n.__v_isReadonly)}function an(n){return!!(n&&n.__v_isShallow)}function Ja(n){return n?!!n.__v_raw:!1}function Ze(n){const e=n&&n.__v_raw;return e?Ze(e):n}function sh(n){return!Je(n,"__v_skip")&&Object.isExtensible(n)&&Ru(n,"__v_skip",!0),n}const vn=n=>Qe(n)?Xr(n):n,gr=n=>Qe(n)?ba(n):n;function Pt(n){return n?n.__v_isRef===!0:!1}function $r(n){return oh(n,!1)}function oh(n,e){return Pt(n)?n:new ah(n,e)}class ah{constructor(e,t){this.dep=new ja,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:Ze(e),this._value=t?e:vn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||an(e)||Zn(e);e=i?e:Ze(e),Tn(e,t)&&(this._rawValue=e,this._value=i?e:vn(e),this.dep.trigger())}}function ye(n){return Pt(n)?n.value:n}const lh={get:(n,e,t)=>e==="__v_raw"?n:ye(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Pt(r)&&!Pt(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function $u(n){return Ni(n)?n:new Proxy(n,lh)}class ch{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new ja(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=kr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&lt!==this)return Iu(this,!0),!0}get value(){const e=this.dep.track();return Ou(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function uh(n,e,t=!1){let i,r;return He(n)?i=n:(i=n.get,r=n.set),new ch(i,r,t)}const ds={},Hs=new WeakMap;let Ai;function fh(n,e=!1,t=Ai){if(t){let i=Hs.get(t);i||Hs.set(t,i=[]),i.push(n)}}function dh(n,e,t=st){const{immediate:i,deep:r,once:s,scheduler:a,augmentJob:o,call:l}=t,u=E=>r?E:an(E)||r===!1||r===0?Wn(E,1):Wn(E);let c,f,h,m,M=!1,y=!1;if(Pt(n)?(f=()=>n.value,M=an(n)):Ni(n)?(f=()=>u(n),M=!0):Le(n)?(y=!0,M=n.some(E=>Ni(E)||an(E)),f=()=>n.map(E=>{if(Pt(E))return E.value;if(Ni(E))return u(E);if(He(E))return l?l(E,2):E()})):He(n)?e?f=l?()=>l(n,2):n:f=()=>{if(h){jn();try{h()}finally{Kn()}}const E=Ai;Ai=c;try{return l?l(n,3,[m]):n(m)}finally{Ai=E}}:f=wn,e&&r){const E=f,P=r===!0?1/0:r;f=()=>Wn(E(),P)}const p=Hd(),d=()=>{c.stop(),p&&p.active&&ka(p.effects,c)};if(s&&e){const E=e;e=(...P)=>{const L=E(...P);return d(),L}}let b=y?new Array(n.length).fill(ds):ds;const S=E=>{if(!(!(c.flags&1)||!c.dirty&&!E))if(e){const P=c.run();if(E||r||M||(y?P.some((L,C)=>Tn(L,b[C])):Tn(P,b))){h&&h();const L=Ai;Ai=c;try{const C=[P,b===ds?void 0:y&&b[0]===ds?[]:b,m];b=P,l?l(e,3,C):e(...C)}finally{Ai=L}}}else c.run()};return o&&o(S),c=new Du(f),c.scheduler=a?()=>a(S,!1):S,m=E=>fh(E,!1,c),h=c.onStop=()=>{const E=Hs.get(c);if(E){if(l)l(E,4);else for(const P of E)P();Hs.delete(c)}},e?i?S(!0):b=c.run():a?a(S.bind(null,!0),!0):c.run(),d.pause=c.pause.bind(c),d.resume=c.resume.bind(c),d.stop=d,d}function Wn(n,e=1/0,t){if(e<=0||!Qe(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,Pt(n))Wn(n.value,e,t);else if(Le(n))for(let i=0;i<n.length;i++)Wn(n[i],e,t);else if(oo(n)||cr(n))n.forEach(i=>{Wn(i,e,t)});else if(Au(n)){for(const i in n)Wn(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Wn(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ts(n,e,t,i){try{return i?n(...i):n()}catch(r){fo(r,e,t)}}function ln(n,e,t,i){if(He(n)){const r=ts(n,e,t,i);return r&&bu(r)&&r.catch(s=>{fo(s,e,t)}),r}if(Le(n)){const r=[];for(let s=0;s<n.length;s++)r.push(ln(n[s],e,t,i));return r}}function fo(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||st;if(e){let o=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${t}`;for(;o;){const c=o.ec;if(c){for(let f=0;f<c.length;f++)if(c[f](n,l,u)===!1)return}o=o.parent}if(s){jn(),ts(s,null,10,[n,l,u]),Kn();return}}hh(n,t,r,i,a)}function hh(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const Ft=[];let Mn=-1;const ur=[];let ai=null,sr=0;const qu=Promise.resolve();let Gs=null;function Yu(n){const e=Gs||qu;return n?e.then(this?n.bind(this):n):e}function ph(n){let e=Mn+1,t=Ft.length;for(;e<t;){const i=e+t>>>1,r=Ft[i],s=qr(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function Qa(n){if(!(n.flags&1)){const e=qr(n),t=Ft[Ft.length-1];!t||!(n.flags&2)&&e>=qr(t)?Ft.push(n):Ft.splice(ph(e),0,n),n.flags|=1,ju()}}function ju(){Gs||(Gs=qu.then(Zu))}function mh(n){Le(n)?ur.push(...n):ai&&n.id===-1?ai.splice(sr+1,0,n):n.flags&1||(ur.push(n),n.flags|=1),ju()}function vl(n,e,t=Mn+1){for(;t<Ft.length;t++){const i=Ft[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Ft.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Ku(n){if(ur.length){const e=[...new Set(ur)].sort((t,i)=>qr(t)-qr(i));if(ur.length=0,ai){ai.push(...e);return}for(ai=e,sr=0;sr<ai.length;sr++){const t=ai[sr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}ai=null,sr=0}}const qr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Zu(n){try{for(Mn=0;Mn<Ft.length;Mn++){const e=Ft[Mn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ts(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Mn<Ft.length;Mn++){const e=Ft[Mn];e&&(e.flags&=-2)}Mn=-1,Ft.length=0,Ku(),Gs=null,(Ft.length||ur.length)&&Zu()}}let on=null,Ju=null;function Vs(n){const e=on;return on=n,Ju=n&&n.type.__scopeId||null,e}function Qu(n,e=on,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&Xs(-1);const s=Vs(e),a=Fi.length;let o;try{o=n(...r)}finally{for(let l=Fi.length;l>a;l--)Lf();Vs(s),i._d&&Xs(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function hs(n,e){if(on===null)return n;const t=So(on),i=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[s,a,o,l=st]=e[r];s&&(He(s)&&(s={mounted:s,updated:s}),s.deep&&Wn(a),i.push({dir:s,instance:t,value:a,oldValue:void 0,arg:o,modifiers:l}))}return n}function vi(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[i];l&&(jn(),ln(l,t,8,[n.el,o,n,e]),Kn())}}function ef(n,e){if(Bt){let t=Bt.provides;const i=Bt.parent&&Bt.parent.provides;i===t&&(t=Bt.provides=Object.create(i)),t[n]=e}}function zr(n,e,t=!1){const i=If();if(i||fr){let r=fr?fr._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&He(e)?e.call(i&&i.proxy):e}}const gh=Symbol.for("v-scx"),_h=()=>zr(gh);function No(n,e,t){return tf(n,e,t)}function tf(n,e,t=st){const{immediate:i,deep:r,flush:s,once:a}=t,o=Mt({},t),l=e&&i||!e&&s!=="post";let u;if(Kr){if(s==="sync"){const m=_h();u=m.__watcherHandles||(m.__watcherHandles=[])}else if(!l){const m=()=>{};return m.stop=wn,m.resume=wn,m.pause=wn,m}}const c=Bt;o.call=(m,M,y)=>ln(m,c,M,y);let f=!1;s==="post"?o.scheduler=m=>{Vt(m,c&&c.suspense)}:s!=="sync"&&(f=!0,o.scheduler=(m,M)=>{M?m():Qa(m)}),o.augmentJob=m=>{e&&(m.flags|=4),f&&(m.flags|=2,c&&(m.id=c.uid,m.i=c))};const h=dh(n,e,o);return Kr&&(u?u.push(h):l&&h()),h}function vh(n,e,t){const i=this.proxy,r=ht(n)?n.includes(".")?nf(i,n):()=>i[n]:n.bind(i,i);let s;He(e)?s=e:(s=e.handler,t=e);const a=ns(this),o=tf(r,s.bind(i),t);return a(),o}function nf(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const xh=Symbol("_vte"),rf=n=>n.__isTeleport,nn=Symbol("_leaveCb"),Tr=Symbol("_enterCb");function Sh(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return mo(()=>{n.isMounted=!0}),go(()=>{n.isUnmounting=!0}),n}const en=[Function,Array],sf={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:en,onEnter:en,onAfterEnter:en,onEnterCancelled:en,onBeforeLeave:en,onLeave:en,onAfterLeave:en,onLeaveCancelled:en,onBeforeAppear:en,onAppear:en,onAfterAppear:en,onAppearCancelled:en},of=n=>{const e=n.subTree;return e.component?of(e.component):e},Mh={name:"BaseTransition",props:sf,setup(n,{slots:e}){const t=If(),i=Sh();return()=>{const r=e.default&&cf(e.default(),!0),s=r&&r.length?af(r):t.subTree?xo():void 0;if(!s)return;const a=Ze(n),{mode:o}=a;if(i.isLeaving)return Fo(s);const l=xl(s);if(!l)return Fo(s);let u=Ta(l,a,i,t,f=>u=f);l.type!==Ot&&Yr(l,u);let c=t.subTree&&xl(t.subTree);if(c&&c.type!==Ot&&!Ci(c,l)&&of(t).type!==Ot){let f=Ta(c,a,i,t);if(Yr(c,f),o==="out-in"&&l.type!==Ot)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,t.job.flags&8||t.update(),delete f.afterLeave,c=void 0},Fo(s);o==="in-out"&&l.type!==Ot?f.delayLeave=(h,m,M)=>{const y=lf(i,c);y[String(c.key)]=c,h[nn]=()=>{m(),h[nn]=void 0,delete u.delayedLeave,c=void 0},u.delayedLeave=()=>{M(),delete u.delayedLeave,c=void 0}}:c=void 0}else c&&(c=void 0);return s}}};function af(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==Ot){e=t;break}}return e}const yh=Mh;function lf(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function Ta(n,e,t,i,r){const{appear:s,mode:a,persisted:o=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:c,onEnterCancelled:f,onBeforeLeave:h,onLeave:m,onAfterLeave:M,onLeaveCancelled:y,onBeforeAppear:p,onAppear:d,onAfterAppear:b,onAppearCancelled:S}=e,E=String(n.key),P=lf(t,n),L=(K,v)=>{K&&ln(K,i,9,v)},C=(K,v)=>{const A=v[1];L(K,v),Le(K)?K.every(F=>F.length<=1)&&A():K.length<=1&&A()},q={mode:a,persisted:o,beforeEnter(K){let v=l;if(!t.isMounted)if(s)v=p||l;else return;K[nn]&&K[nn](!0);const A=P[E];A&&Ci(n,A)&&A.el[nn]&&A.el[nn](),L(v,[K])},enter(K){if(P[E]===n)return;let v=u,A=c,F=f;if(!t.isMounted)if(s)v=d||u,A=b||c,F=S||f;else return;let ne=!1;K[Tr]=Z=>{ne||(ne=!0,Z?L(F,[K]):L(A,[K]),q.delayedLeave&&q.delayedLeave(),K[Tr]=void 0)};const U=K[Tr].bind(null,!1);v?C(v,[K,U]):U()},leave(K,v){const A=String(n.key);if(K[Tr]&&K[Tr](!0),t.isUnmounting)return v();L(h,[K]);let F=!1;K[nn]=U=>{F||(F=!0,v(),U?L(y,[K]):L(M,[K]),K[nn]=void 0,P[A]===n&&delete P[A])};const ne=K[nn].bind(null,!1);P[A]=n,m?C(m,[K,ne]):ne()},clone(K){const v=Ta(K,e,t,i,r);return r&&r(v),v}};return q}function Fo(n){if(ho(n))return n=di(n),n.children=null,n}function xl(n){if(!ho(n))return rf(n.type)&&n.children?af(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&He(t.default))return t.default()}}function Yr(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Yr(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function cf(n,e=!1,t){let i=[],r=0;for(let s=0;s<n.length;s++){let a=n[s];const o=t==null?a.key:String(t)+String(a.key!=null?a.key:s);a.type===ft?(a.patchFlag&128&&r++,i=i.concat(cf(a.children,e,o))):(e||a.type!==Ot)&&i.push(o!=null?di(a,{key:o}):a)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function uf(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Sl(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const ks=new WeakMap;function Hr(n,e,t,i,r=!1){if(Le(n)){n.forEach((y,p)=>Hr(y,e&&(Le(e)?e[p]:e),t,i,r));return}if(Gr(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Hr(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?So(i.component):i.el,a=r?null:s,{i:o,r:l}=n,u=e&&e.r,c=o.refs===st?o.refs={}:o.refs,f=o.setupState,h=Ze(f),m=f===st?Eu:y=>Sl(c,y)?!1:Je(h,y),M=(y,p)=>!(p&&Sl(c,p));if(u!=null&&u!==l){if(Ml(e),ht(u))c[u]=null,m(u)&&(f[u]=null);else if(Pt(u)){const y=e;M(u,y.k)&&(u.value=null),y.k&&(c[y.k]=null)}}if(He(l))ts(l,o,12,[a,c]);else{const y=ht(l),p=Pt(l);if(y||p){const d=()=>{if(n.f){const b=y?m(l)?f[l]:c[l]:M()||!n.k?l.value:c[n.k];if(r)Le(b)&&ka(b,s);else if(Le(b))b.includes(s)||b.push(s);else if(y)c[l]=[s],m(l)&&(f[l]=c[l]);else{const S=[s];M(l,n.k)&&(l.value=S),n.k&&(c[n.k]=S)}}else y?(c[l]=a,m(l)&&(f[l]=a)):p&&(M(l,n.k)&&(l.value=a),n.k&&(c[n.k]=a))};if(a){const b=()=>{d(),ks.delete(n)};b.id=-1,ks.set(n,b),Vt(b,t)}else Ml(n),d()}}}function Ml(n){const e=ks.get(n);e&&(e.flags|=8,ks.delete(n))}co().requestIdleCallback;co().cancelIdleCallback;const Gr=n=>!!n.type.__asyncLoader,ho=n=>n.type.__isKeepAlive;function Eh(n,e){ff(n,"a",e)}function bh(n,e){ff(n,"da",e)}function ff(n,e,t=Bt){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(po(e,i,t),t){let r=t.parent;for(;r&&r.parent;)ho(r.parent.vnode)&&Th(i,e,t,r),r=r.parent}}function Th(n,e,t,i){const r=po(e,n,i,!0);df(()=>{ka(i[e],r)},t)}function po(n,e,t=Bt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...a)=>{jn();const o=ns(t),l=ln(e,t,n,a);return o(),Kn(),l});return i?r.unshift(s):r.push(s),s}}const Qn=n=>(e,t=Bt)=>{(!Kr||n==="sp")&&po(n,(...i)=>e(...i),t)},Ah=Qn("bm"),mo=Qn("m"),wh=Qn("bu"),Rh=Qn("u"),go=Qn("bum"),df=Qn("um"),Ch=Qn("sp"),Lh=Qn("rtg"),Ph=Qn("rtc");function Dh(n,e=Bt){po("ec",n,e)}const Uh=Symbol.for("v-ndc");function zt(n,e,t,i){let r;const s=t,a=Le(n);if(a||ht(n)){const o=a&&Ni(n);let l=!1,u=!1;o&&(l=!an(n),u=Zn(n),n=uo(n)),r=new Array(n.length);for(let c=0,f=n.length;c<f;c++)r[c]=e(l?u?gr(vn(n[c])):vn(n[c]):n[c],c,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let o=0;o<n;o++)r[o]=e(o+1,o,void 0,s)}else if(Qe(n))if(n[Symbol.iterator])r=Array.from(n,(o,l)=>e(o,l,void 0,s));else{const o=Object.keys(n);r=new Array(o.length);for(let l=0,u=o.length;l<u;l++){const c=o[l];r[l]=e(n[c],c,l,s)}}else r=[];return r}const Aa=n=>n?Nf(n)?So(n):Aa(n.parent):null,Vr=Mt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Aa(n.parent),$root:n=>Aa(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>pf(n),$forceUpdate:n=>n.f||(n.f=()=>{Qa(n.update)}),$nextTick:n=>n.n||(n.n=Yu.bind(n.proxy)),$watch:n=>vh.bind(n)}),Oo=(n,e)=>n!==st&&!n.__isScriptSetup&&Je(n,e),Ih={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:a,type:o,appContext:l}=n;if(e[0]!=="$"){const h=a[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Oo(i,e))return a[e]=1,i[e];if(r!==st&&Je(r,e))return a[e]=2,r[e];if(Je(s,e))return a[e]=3,s[e];if(t!==st&&Je(t,e))return a[e]=4,t[e];wa&&(a[e]=0)}}const u=Vr[e];let c,f;if(u)return e==="$attrs"&&Lt(n.attrs,"get",""),u(n);if((c=o.__cssModules)&&(c=c[e]))return c;if(t!==st&&Je(t,e))return a[e]=4,t[e];if(f=l.config.globalProperties,Je(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Oo(r,e)?(r[e]=t,!0):i!==st&&Je(i,e)?(i[e]=t,!0):Je(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,props:s,type:a}},o){let l;return!!(t[o]||n!==st&&o[0]!=="$"&&Je(n,o)||Oo(e,o)||Je(s,o)||Je(i,o)||Je(Vr,o)||Je(r.config.globalProperties,o)||(l=a.__cssModules)&&l[o])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Je(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function yl(n){return Le(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let wa=!0;function Nh(n){const e=pf(n),t=n.proxy,i=n.ctx;wa=!1,e.beforeCreate&&El(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:u,created:c,beforeMount:f,mounted:h,beforeUpdate:m,updated:M,activated:y,deactivated:p,beforeDestroy:d,beforeUnmount:b,destroyed:S,unmounted:E,render:P,renderTracked:L,renderTriggered:C,errorCaptured:q,serverPrefetch:K,expose:v,inheritAttrs:A,components:F,directives:ne,filters:U}=e;if(u&&Fh(u,i,null),a)for(const ee in a){const Y=a[ee];He(Y)&&(i[ee]=Y.bind(t))}if(r){const ee=r.call(t,t);Qe(ee)&&(n.data=Xr(ee))}if(wa=!0,s)for(const ee in s){const Y=s[ee],re=He(Y)?Y.bind(t,t):He(Y.get)?Y.get.bind(t,t):wn,ae=!He(Y)&&He(Y.set)?Y.set.bind(t):wn,ce=Yn({get:re,set:ae});Object.defineProperty(i,ee,{enumerable:!0,configurable:!0,get:()=>ce.value,set:de=>ce.value=de})}if(o)for(const ee in o)hf(o[ee],i,t,ee);if(l){const ee=He(l)?l.call(t):l;Reflect.ownKeys(ee).forEach(Y=>{ef(Y,ee[Y])})}c&&El(c,n,"c");function H(ee,Y){Le(Y)?Y.forEach(re=>ee(re.bind(t))):Y&&ee(Y.bind(t))}if(H(Ah,f),H(mo,h),H(wh,m),H(Rh,M),H(Eh,y),H(bh,p),H(Dh,q),H(Ph,L),H(Lh,C),H(go,b),H(df,E),H(Ch,K),Le(v))if(v.length){const ee=n.exposed||(n.exposed={});v.forEach(Y=>{Object.defineProperty(ee,Y,{get:()=>t[Y],set:re=>t[Y]=re,enumerable:!0})})}else n.exposed||(n.exposed={});P&&n.render===wn&&(n.render=P),A!=null&&(n.inheritAttrs=A),F&&(n.components=F),ne&&(n.directives=ne),K&&uf(n)}function Fh(n,e,t=wn){Le(n)&&(n=Ra(n));for(const i in n){const r=n[i];let s;Qe(r)?"default"in r?s=zr(r.from||i,r.default,!0):s=zr(r.from||i):s=zr(r),Pt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):e[i]=s}}function El(n,e,t){ln(Le(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function hf(n,e,t,i){let r=i.includes(".")?nf(t,i):()=>t[i];if(ht(n)){const s=e[n];He(s)&&No(r,s)}else if(He(n))No(r,n.bind(t));else if(Qe(n))if(Le(n))n.forEach(s=>hf(s,e,t,i));else{const s=He(n.handler)?n.handler.bind(t):e[n.handler];He(s)&&No(r,s,n)}}function pf(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=n.appContext,o=s.get(e);let l;return o?l=o:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(u=>Ws(l,u,a,!0)),Ws(l,e,a)),Qe(e)&&s.set(e,l),l}function Ws(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&Ws(n,s,t,!0),r&&r.forEach(a=>Ws(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=Oh[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const Oh={data:bl,props:Tl,emits:Tl,methods:Ur,computed:Ur,beforeCreate:Ut,created:Ut,beforeMount:Ut,mounted:Ut,beforeUpdate:Ut,updated:Ut,beforeDestroy:Ut,beforeUnmount:Ut,destroyed:Ut,unmounted:Ut,activated:Ut,deactivated:Ut,errorCaptured:Ut,serverPrefetch:Ut,components:Ur,directives:Ur,watch:zh,provide:bl,inject:Bh};function bl(n,e){return e?n?function(){return Mt(He(n)?n.call(this,this):n,He(e)?e.call(this,this):e)}:e:n}function Bh(n,e){return Ur(Ra(n),Ra(e))}function Ra(n){if(Le(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Ut(n,e){return n?[...new Set([].concat(n,e))]:e}function Ur(n,e){return n?Mt(Object.create(null),n,e):e}function Tl(n,e){return n?Le(n)&&Le(e)?[...new Set([...n,...e])]:Mt(Object.create(null),yl(n),yl(e??{})):e}function zh(n,e){if(!n)return e;if(!e)return n;const t=Mt(Object.create(null),n);for(const i in e)t[i]=Ut(n[i],e[i]);return t}function mf(){return{app:null,config:{isNativeTag:Eu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Hh=0;function Gh(n,e){return function(i,r=null){He(i)||(i=Mt({},i)),r!=null&&!Qe(r)&&(r=null);const s=mf(),a=new WeakSet,o=[];let l=!1;const u=s.app={_uid:Hh++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:xp,get config(){return s.config},set config(c){},use(c,...f){return a.has(c)||(c&&He(c.install)?(a.add(c),c.install(u,...f)):He(c)&&(a.add(c),c(u,...f))),u},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),u},component(c,f){return f?(s.components[c]=f,u):s.components[c]},directive(c,f){return f?(s.directives[c]=f,u):s.directives[c]},mount(c,f,h){if(!l){const m=u._ceVNode||ct(i,r);return m.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),n(m,c,h),l=!0,u._container=c,c.__vue_app__=u,So(m.component)}},onUnmount(c){o.push(c)},unmount(){l&&(ln(o,u._instance,16),n(null,u._container),delete u._container.__vue_app__)},provide(c,f){return s.provides[c]=f,u},runWithContext(c){const f=fr;fr=u;try{return c()}finally{fr=f}}};return u}}let fr=null;const Vh=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${gn(e)}Modifiers`]||n[`${Gi(e)}Modifiers`];function kh(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||st;let r=t;const s=e.startsWith("update:"),a=s&&Vh(i,e.slice(7));a&&(a.trim&&(r=t.map(c=>ht(c)?c.trim():c)),a.number&&(r=t.map(lo)));let o,l=i[o=Lo(e)]||i[o=Lo(gn(e))];!l&&s&&(l=i[o=Lo(Gi(e))]),l&&ln(l,n,6,r);const u=i[o+"Once"];if(u){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,ln(u,n,6,r)}}const Wh=new WeakMap;function gf(n,e,t=!1){const i=t?Wh:e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let a={},o=!1;if(!He(n)){const l=u=>{const c=gf(u,e,!0);c&&(o=!0,Mt(a,c))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!o?(Qe(n)&&i.set(n,null),null):(Le(s)?s.forEach(l=>a[l]=null):Mt(a,s),Qe(n)&&i.set(n,a),a)}function _o(n,e){return!n||!ro(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),Je(n,e[0].toLowerCase()+e.slice(1))||Je(n,Gi(e))||Je(n,e))}function Al(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:a,attrs:o,emit:l,render:u,renderCache:c,props:f,data:h,setupState:m,ctx:M,inheritAttrs:y}=n,p=Vs(n);let d,b;try{if(t.shapeFlag&4){const E=r||i,P=E;d=En(u.call(P,E,c,f,m,h,M)),b=o}else{const E=e;d=En(E.length>1?E(f,{attrs:o,slots:a,emit:l}):E(f,null)),b=e.props?o:Xh(o)}}catch(E){Fi.length=0,fo(E,n,1),d=ct(Ot)}let S=d;if(b&&y!==!1){const E=Object.keys(b),{shapeFlag:P}=S;E.length&&P&7&&(s&&E.some(so)&&(b=$h(b,s)),S=di(S,b,!1,!0))}return t.dirs&&(S=di(S,null,!1,!0),S.dirs=S.dirs?S.dirs.concat(t.dirs):t.dirs),t.transition&&Yr(S,t.transition),d=S,Vs(p),d}const Xh=n=>{let e;for(const t in n)(t==="class"||t==="style"||ro(t))&&((e||(e={}))[t]=n[t]);return e},$h=(n,e)=>{const t={};for(const i in n)(!so(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function qh(n,e,t){const{props:i,children:r,component:s}=n,{props:a,children:o,patchFlag:l}=e,u=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?wl(i,a,u):!!a;if(l&8){const c=e.dynamicProps;for(let f=0;f<c.length;f++){const h=c[f];if(_f(a,i,h)&&!_o(u,h))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?wl(i,a,u):!0:!!a;return!1}function wl(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(_f(e,n,s)&&!_o(t,s))return!0}return!1}function _f(n,e,t){const i=n[t],r=e[t];return t==="style"&&Qe(i)&&Qe(r)?!es(i,r):i!==r}function Yh({vnode:n,parent:e,suspense:t},i){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.suspense.vnode.el=r.el=i,n=r),r===n)(n=e.vnode).el=i,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=i)}const vf={},xf=()=>Object.create(vf),Sf=n=>Object.getPrototypeOf(n)===vf;function jh(n,e,t,i=!1){const r={},s=xf();n.propsDefaults=Object.create(null),Mf(n,e,r,s);for(const a in n.propsOptions[0])a in r||(r[a]=void 0);t?n.props=i?r:rh(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function Kh(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=n,o=Ze(r),[l]=n.propsOptions;let u=!1;if((i||a>0)&&!(a&16)){if(a&8){const c=n.vnode.dynamicProps;for(let f=0;f<c.length;f++){let h=c[f];if(_o(n.emitsOptions,h))continue;const m=e[h];if(l)if(Je(s,h))m!==s[h]&&(s[h]=m,u=!0);else{const M=gn(h);r[M]=Ca(l,o,M,m,n,!1)}else m!==s[h]&&(s[h]=m,u=!0)}}}else{Mf(n,e,r,s)&&(u=!0);let c;for(const f in o)(!e||!Je(e,f)&&((c=Gi(f))===f||!Je(e,c)))&&(l?t&&(t[f]!==void 0||t[c]!==void 0)&&(r[f]=Ca(l,o,f,void 0,n,!0)):delete r[f]);if(s!==o)for(const f in s)(!e||!Je(e,f))&&(delete s[f],u=!0)}u&&kn(n.attrs,"set","")}function Mf(n,e,t,i){const[r,s]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(Fr(l))continue;const u=e[l];let c;r&&Je(r,c=gn(l))?!s||!s.includes(c)?t[c]=u:(o||(o={}))[c]=u:_o(n.emitsOptions,l)||(!(l in i)||u!==i[l])&&(i[l]=u,a=!0)}if(s){const l=Ze(t),u=o||st;for(let c=0;c<s.length;c++){const f=s[c];t[f]=Ca(r,l,f,u[f],n,!Je(u,f))}}return a}function Ca(n,e,t,i,r,s){const a=n[t];if(a!=null){const o=Je(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&He(l)){const{propsDefaults:u}=r;if(t in u)i=u[t];else{const c=ns(r);i=u[t]=l.call(null,e),c()}}else i=l;r.ce&&r.ce._setProp(t,i)}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===Gi(t))&&(i=!0))}return i}const Zh=new WeakMap;function yf(n,e,t=!1){const i=t?Zh:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,a={},o=[];let l=!1;if(!He(n)){const c=f=>{l=!0;const[h,m]=yf(f,e,!0);Mt(a,h),m&&o.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}if(!s&&!l)return Qe(n)&&i.set(n,lr),lr;if(Le(s))for(let c=0;c<s.length;c++){const f=gn(s[c]);Rl(f)&&(a[f]=st)}else if(s)for(const c in s){const f=gn(c);if(Rl(f)){const h=s[c],m=a[f]=Le(h)||He(h)?{type:h}:Mt({},h),M=m.type;let y=!1,p=!0;if(Le(M))for(let d=0;d<M.length;++d){const b=M[d],S=He(b)&&b.name;if(S==="Boolean"){y=!0;break}else S==="String"&&(p=!1)}else y=He(M)&&M.name==="Boolean";m[0]=y,m[1]=p,(y||Je(m,"default"))&&o.push(f)}}const u=[a,o];return Qe(n)&&i.set(n,u),u}function Rl(n){return n[0]!=="$"&&!Fr(n)}const el=n=>n==="_"||n==="_ctx"||n==="$stable",tl=n=>Le(n)?n.map(En):[En(n)],Jh=(n,e,t)=>{if(e._n)return e;const i=Qu((...r)=>tl(e(...r)),t);return i._c=!1,i},Ef=(n,e,t)=>{const i=n._ctx;for(const r in n){if(el(r))continue;const s=n[r];if(He(s))e[r]=Jh(r,s,i);else if(s!=null){const a=tl(s);e[r]=()=>a}}},bf=(n,e)=>{const t=tl(e);n.slots.default=()=>t},Tf=(n,e,t)=>{for(const i in e)(t||!el(i))&&(n[i]=e[i])},Qh=(n,e,t)=>{const i=n.slots=xf();if(n.vnode.shapeFlag&32){const r=e._;r?(Tf(i,e,t),t&&Ru(i,"_",r,!0)):Ef(e,i)}else e&&bf(n,e)},ep=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,a=st;if(i.shapeFlag&32){const o=e._;o?t&&o===1?s=!1:Tf(r,e,t):(s=!e.$stable,Ef(e,r)),a=e}else e&&(bf(n,e),a={default:1});if(s)for(const o in r)!el(o)&&a[o]==null&&delete r[o]},Vt=sp;function tp(n){return np(n)}function np(n,e){const t=co();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:u,setElementText:c,parentNode:f,nextSibling:h,setScopeId:m=wn,insertStaticContent:M}=n,y=(_,D,N,X=null,z=null,Q=null,te=void 0,x=null,g=!!D.dynamicChildren)=>{if(_===D)return;_&&!Ci(_,D)&&(X=Te(_),de(_,z,Q,!0),_=null),D.patchFlag===-2&&(g=!1,D.dynamicChildren=null);const{type:w,ref:W,shapeFlag:O}=D;switch(w){case vo:p(_,D,N,X);break;case Ot:d(_,D,N,X);break;case Os:_==null&&b(D,N,X,te);break;case ft:F(_,D,N,X,z,Q,te,x,g);break;default:O&1?P(_,D,N,X,z,Q,te,x,g):O&6?ne(_,D,N,X,z,Q,te,x,g):(O&64||O&128)&&w.process(_,D,N,X,z,Q,te,x,g,qe)}W!=null&&z?Hr(W,_&&_.ref,Q,D||_,!D):W==null&&_&&_.ref!=null&&Hr(_.ref,null,Q,_,!0)},p=(_,D,N,X)=>{if(_==null)i(D.el=o(D.children),N,X);else{const z=D.el=_.el;D.children!==_.children&&u(z,D.children)}},d=(_,D,N,X)=>{_==null?i(D.el=l(D.children||""),N,X):D.el=_.el},b=(_,D,N,X)=>{[_.el,_.anchor]=M(_.children,D,N,X,_.el,_.anchor)},S=({el:_,anchor:D},N,X)=>{let z;for(;_&&_!==D;)z=h(_),i(_,N,X),_=z;i(D,N,X)},E=({el:_,anchor:D})=>{let N;for(;_&&_!==D;)N=h(_),r(_),_=N;r(D)},P=(_,D,N,X,z,Q,te,x,g)=>{if(D.type==="svg"?te="svg":D.type==="math"&&(te="mathml"),_==null)L(D,N,X,z,Q,te,x,g);else{const w=_.el&&_.el._isVueCE?_.el:null;try{w&&w._beginPatch(),K(_,D,z,Q,te,x,g)}finally{w&&w._endPatch()}}},L=(_,D,N,X,z,Q,te,x)=>{let g,w;const{props:W,shapeFlag:O,transition:V,dirs:oe}=_;if(g=_.el=a(_.type,Q,W&&W.is,W),O&8?c(g,_.children):O&16&&q(_.children,g,null,X,z,Bo(_,Q),te,x),oe&&vi(_,null,X,"created"),C(g,_,_.scopeId,te,X),W){for(const ue in W)ue!=="value"&&!Fr(ue)&&s(g,ue,null,W[ue],Q,X);"value"in W&&s(g,"value",null,W.value,Q),(w=W.onVnodeBeforeMount)&&Sn(w,X,_)}oe&&vi(_,null,X,"beforeMount");const se=ip(z,V);se&&V.beforeEnter(g),i(g,D,N),((w=W&&W.onVnodeMounted)||se||oe)&&Vt(()=>{try{w&&Sn(w,X,_),se&&V.enter(g),oe&&vi(_,null,X,"mounted")}finally{}},z)},C=(_,D,N,X,z)=>{if(N&&m(_,N),X)for(let Q=0;Q<X.length;Q++)m(_,X[Q]);if(z){let Q=z.subTree;if(D===Q||Cf(Q.type)&&(Q.ssContent===D||Q.ssFallback===D)){const te=z.vnode;C(_,te,te.scopeId,te.slotScopeIds,z.parent)}}},q=(_,D,N,X,z,Q,te,x,g=0)=>{for(let w=g;w<_.length;w++){const W=_[w]=x?Vn(_[w]):En(_[w]);y(null,W,D,N,X,z,Q,te,x)}},K=(_,D,N,X,z,Q,te)=>{const x=D.el=_.el;let{patchFlag:g,dynamicChildren:w,dirs:W}=D;g|=_.patchFlag&16;const O=_.props||st,V=D.props||st;let oe;if(N&&xi(N,!1),(oe=V.onVnodeBeforeUpdate)&&Sn(oe,N,D,_),W&&vi(D,_,N,"beforeUpdate"),N&&xi(N,!0),w&&(!_.dynamicChildren||_.dynamicChildren.length!==w.length)&&(g=0,te=!1,w=null),(O.innerHTML&&V.innerHTML==null||O.textContent&&V.textContent==null)&&c(x,""),w?v(_.dynamicChildren,w,x,N,X,Bo(D,z),Q):te||Y(_,D,x,null,N,X,Bo(D,z),Q,!1),g>0){if(g&16)A(x,O,V,N,z);else if(g&2&&O.class!==V.class&&s(x,"class",null,V.class,z),g&4&&s(x,"style",O.style,V.style,z),g&8){const se=D.dynamicProps;for(let ue=0;ue<se.length;ue++){const ge=se[ue],Me=O[ge],ie=V[ge];(ie!==Me||ge==="value")&&s(x,ge,Me,ie,z,N)}}g&1&&_.children!==D.children&&c(x,D.children)}else!te&&w==null&&A(x,O,V,N,z);((oe=V.onVnodeUpdated)||W)&&Vt(()=>{oe&&Sn(oe,N,D,_),W&&vi(D,_,N,"updated")},X)},v=(_,D,N,X,z,Q,te)=>{for(let x=0;x<D.length;x++){const g=_[x],w=D[x],W=g.el&&(g.type===ft||!Ci(g,w)||g.shapeFlag&198)?f(g.el):N;y(g,w,W,null,X,z,Q,te,!0)}},A=(_,D,N,X,z)=>{if(D!==N){if(D!==st)for(const Q in D)!Fr(Q)&&!(Q in N)&&s(_,Q,D[Q],null,z,X);for(const Q in N){if(Fr(Q))continue;const te=N[Q],x=D[Q];te!==x&&Q!=="value"&&s(_,Q,x,te,z,X)}"value"in N&&s(_,"value",D.value,N.value,z)}},F=(_,D,N,X,z,Q,te,x,g)=>{const w=D.el=_?_.el:o(""),W=D.anchor=_?_.anchor:o("");let{patchFlag:O,dynamicChildren:V,slotScopeIds:oe}=D;oe&&(x=x?x.concat(oe):oe),_==null?(i(w,N,X),i(W,N,X),q(D.children||[],N,W,z,Q,te,x,g)):O>0&&O&64&&V&&_.dynamicChildren&&_.dynamicChildren.length===V.length?(v(_.dynamicChildren,V,N,z,Q,te,x),(D.key!=null||z&&D===z.subTree)&&Af(_,D,!0)):Y(_,D,N,W,z,Q,te,x,g)},ne=(_,D,N,X,z,Q,te,x,g)=>{D.slotScopeIds=x,_==null?D.shapeFlag&512?z.ctx.activate(D,N,X,te,g):U(D,N,X,z,Q,te,g):Z(_,D,g)},U=(_,D,N,X,z,Q,te)=>{const x=_.component=dp(_,X,z);if(ho(_)&&(x.ctx.renderer=qe),hp(x,!1,te),x.asyncDep){if(z&&z.registerDep(x,H,te),!_.el){const g=x.subTree=ct(Ot);d(null,g,D,N),_.placeholder=g.el}}else H(x,_,D,N,z,Q,te)},Z=(_,D,N)=>{const X=D.component=_.component;if(qh(_,D,N))if(X.asyncDep&&!X.asyncResolved){ee(X,D,N);return}else X.next=D,X.update();else D.el=_.el,X.vnode=D},H=(_,D,N,X,z,Q,te)=>{const x=()=>{if(_.isMounted){let{next:O,bu:V,u:oe,parent:se,vnode:ue}=_;{const De=wf(_);if(De){O&&(O.el=ue.el,ee(_,O,te)),De.asyncDep.then(()=>{Vt(()=>{_.isUnmounted||w()},z)});return}}let ge=O,Me;xi(_,!1),O?(O.el=ue.el,ee(_,O,te)):O=ue,V&&Fs(V),(Me=O.props&&O.props.onVnodeBeforeUpdate)&&Sn(Me,se,O,ue),xi(_,!0);const ie=Al(_),ke=_.subTree;_.subTree=ie,y(ke,ie,f(ke.el),Te(ke),_,z,Q),O.el=ie.el,ge===null&&Yh(_,ie.el),oe&&Vt(oe,z),(Me=O.props&&O.props.onVnodeUpdated)&&Vt(()=>Sn(Me,se,O,ue),z)}else{let O;const{el:V,props:oe}=D,{bm:se,m:ue,parent:ge,root:Me,type:ie}=_,ke=Gr(D);xi(_,!1),se&&Fs(se),!ke&&(O=oe&&oe.onVnodeBeforeMount)&&Sn(O,ge,D),xi(_,!0);{Me.ce&&Me.ce._hasShadowRoot()&&Me.ce._injectChildStyle(ie,_.parent?_.parent.type:void 0);const De=_.subTree=Al(_);y(null,De,N,X,_,z,Q),D.el=De.el}if(ue&&Vt(ue,z),!ke&&(O=oe&&oe.onVnodeMounted)){const De=D;Vt(()=>Sn(O,ge,De),z)}(D.shapeFlag&256||ge&&Gr(ge.vnode)&&ge.vnode.shapeFlag&256)&&_.a&&Vt(_.a,z),_.isMounted=!0,D=N=X=null}};_.scope.on();const g=_.effect=new Du(x);_.scope.off();const w=_.update=g.run.bind(g),W=_.job=g.runIfDirty.bind(g);W.i=_,W.id=_.uid,g.scheduler=()=>Qa(W),xi(_,!0),w()},ee=(_,D,N)=>{D.component=_;const X=_.vnode.props;_.vnode=D,_.next=null,Kh(_,D.props,X,N),ep(_,D.children,N),jn(),vl(_),Kn()},Y=(_,D,N,X,z,Q,te,x,g=!1)=>{const w=_&&_.children,W=_?_.shapeFlag:0,O=D.children,{patchFlag:V,shapeFlag:oe}=D;if(V>0){if(V&128){ae(w,O,N,X,z,Q,te,x,g);return}else if(V&256){re(w,O,N,X,z,Q,te,x,g);return}}oe&8?(W&16&&ve(w,z,Q),O!==w&&c(N,O)):W&16?oe&16?ae(w,O,N,X,z,Q,te,x,g):ve(w,z,Q,!0):(W&8&&c(N,""),oe&16&&q(O,N,X,z,Q,te,x,g))},re=(_,D,N,X,z,Q,te,x,g)=>{_=_||lr,D=D||lr;const w=_.length,W=D.length,O=Math.min(w,W);let V;for(V=0;V<O;V++){const oe=D[V]=g?Vn(D[V]):En(D[V]);y(_[V],oe,N,null,z,Q,te,x,g)}w>W?ve(_,z,Q,!0,!1,O):q(D,N,X,z,Q,te,x,g,O)},ae=(_,D,N,X,z,Q,te,x,g)=>{let w=0;const W=D.length;let O=_.length-1,V=W-1;for(;w<=O&&w<=V;){const oe=_[w],se=D[w]=g?Vn(D[w]):En(D[w]);if(Ci(oe,se))y(oe,se,N,null,z,Q,te,x,g);else break;w++}for(;w<=O&&w<=V;){const oe=_[O],se=D[V]=g?Vn(D[V]):En(D[V]);if(Ci(oe,se))y(oe,se,N,null,z,Q,te,x,g);else break;O--,V--}if(w>O){if(w<=V){const oe=V+1,se=oe<W?D[oe].el:X;for(;w<=V;)y(null,D[w]=g?Vn(D[w]):En(D[w]),N,se,z,Q,te,x,g),w++}}else if(w>V)for(;w<=O;)de(_[w],z,Q,!0),w++;else{const oe=w,se=w,ue=new Map;for(w=se;w<=V;w++){const _e=D[w]=g?Vn(D[w]):En(D[w]);_e.key!=null&&ue.set(_e.key,w)}let ge,Me=0;const ie=V-se+1;let ke=!1,De=0;const Pe=new Array(ie);for(w=0;w<ie;w++)Pe[w]=0;for(w=oe;w<=O;w++){const _e=_[w];if(Me>=ie){de(_e,z,Q,!0);continue}let Re;if(_e.key!=null)Re=ue.get(_e.key);else for(ge=se;ge<=V;ge++)if(Pe[ge-se]===0&&Ci(_e,D[ge])){Re=ge;break}Re===void 0?de(_e,z,Q,!0):(Pe[Re-se]=w+1,Re>=De?De=Re:ke=!0,y(_e,D[Re],N,null,z,Q,te,x,g),Me++)}const Ae=ke?rp(Pe):lr;for(ge=Ae.length-1,w=ie-1;w>=0;w--){const _e=se+w,Re=D[_e],Ke=D[_e+1],tt=_e+1<W?Ke.el||Rf(Ke):X;Pe[w]===0?y(null,Re,N,tt,z,Q,te,x,g):ke&&(ge<0||w!==Ae[ge]?ce(Re,N,tt,2):ge--)}}},ce=(_,D,N,X,z=null)=>{const{el:Q,type:te,transition:x,children:g,shapeFlag:w}=_;if(w&6){ce(_.component.subTree,D,N,X);return}if(w&128){_.suspense.move(D,N,X);return}if(w&64){te.move(_,D,N,qe);return}if(te===ft){i(Q,D,N);for(let O=0;O<g.length;O++)ce(g[O],D,N,X);i(_.anchor,D,N);return}if(te===Os){S(_,D,N);return}if(X!==2&&w&1&&x)if(X===0)x.persisted&&!Q[nn]?i(Q,D,N):(x.beforeEnter(Q),i(Q,D,N),Vt(()=>x.enter(Q),z));else{const{leave:O,delayLeave:V,afterLeave:oe}=x,se=()=>{_.ctx.isUnmounted?r(Q):i(Q,D,N)},ue=()=>{const ge=Q._isLeaving||!!Q[nn];Q._isLeaving&&Q[nn](!0),x.persisted&&!ge?se():O(Q,()=>{se(),oe&&oe()})};V?V(Q,se,ue):ue()}else i(Q,D,N)},de=(_,D,N,X=!1,z=!1)=>{const{type:Q,props:te,ref:x,children:g,dynamicChildren:w,shapeFlag:W,patchFlag:O,dirs:V,cacheIndex:oe,memo:se}=_;if(O===-2&&(z=!1),x!=null&&(jn(),Hr(x,null,N,_,!0),Kn()),oe!=null&&(D.renderCache[oe]=void 0),W&256){D.ctx.deactivate(_);return}const ue=W&1&&V,ge=!Gr(_);let Me;if(ge&&(Me=te&&te.onVnodeBeforeUnmount)&&Sn(Me,D,_),W&6)le(_.component,N,X);else{if(W&128){_.suspense.unmount(N,X);return}ue&&vi(_,null,D,"beforeUnmount"),W&64?_.type.remove(_,D,N,qe,X):w&&!w.hasOnce&&(Q!==ft||O>0&&O&64)?ve(w,D,N,!1,!0):(Q===ft&&O&384||!z&&W&16)&&ve(g,D,N),X&&Ie(_)}const ie=se!=null&&oe==null;(ge&&(Me=te&&te.onVnodeUnmounted)||ue||ie)&&Vt(()=>{Me&&Sn(Me,D,_),ue&&vi(_,null,D,"unmounted"),ie&&(_.el=null)},N)},Ie=_=>{const{type:D,el:N,anchor:X,transition:z}=_;if(D===ft){J(N,X);return}if(D===Os){E(_);return}const Q=()=>{r(N),z&&!z.persisted&&z.afterLeave&&z.afterLeave()};if(_.shapeFlag&1&&z&&!z.persisted){const{leave:te,delayLeave:x}=z,g=()=>te(N,Q);x?x(_.el,Q,g):g()}else Q()},J=(_,D)=>{let N;for(;_!==D;)N=h(_),r(_),_=N;r(D)},le=(_,D,N)=>{const{bum:X,scope:z,job:Q,subTree:te,um:x,m:g,a:w}=_;Cl(g),Cl(w),X&&Fs(X),z.stop(),Q&&(Q.flags|=8,de(te,_,D,N)),x&&Vt(x,D),Vt(()=>{_.isUnmounted=!0},D)},ve=(_,D,N,X=!1,z=!1,Q=0)=>{for(let te=Q;te<_.length;te++)de(_[te],D,N,X,z)},Te=_=>{if(_.shapeFlag&6)return Te(_.component.subTree);if(_.shapeFlag&128)return _.suspense.next();const D=h(_.anchor||_.el),N=D&&D[xh];return N?h(N):D};let we=!1;const Se=(_,D,N)=>{let X;_==null?D._vnode&&(de(D._vnode,null,null,!0),X=D._vnode.component):y(D._vnode||null,_,D,null,null,null,N),D._vnode=_,we||(we=!0,vl(X),Ku(),we=!1)},qe={p:y,um:de,m:ce,r:Ie,mt:U,mc:q,pc:Y,pbc:v,n:Te,o:n};return{render:Se,hydrate:void 0,createApp:Gh(Se)}}function Bo({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function xi({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function ip(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Af(n,e,t=!1){const i=n.children,r=e.children;if(Le(i)&&Le(r))for(let s=0;s<i.length;s++){const a=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=Vn(r[s]),o.el=a.el),!t&&o.patchFlag!==-2&&Af(a,o)),o.type===vo&&(o.patchFlag===-1&&(o=r[s]=Vn(o)),o.el=a.el),o.type===Ot&&!o.el&&(o.el=a.el)}}function rp(n){const e=n.slice(),t=[0];let i,r,s,a,o;const l=n.length;for(i=0;i<l;i++){const u=n[i];if(u!==0){if(r=t[t.length-1],n[r]<u){e[i]=r,t.push(i);continue}for(s=0,a=t.length-1;s<a;)o=s+a>>1,n[t[o]]<u?s=o+1:a=o;u<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,a=t[s-1];s-- >0;)t[s]=a,a=e[a];return t}function wf(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:wf(e)}function Cl(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function Rf(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?Rf(e.subTree):null}const Cf=n=>n.__isSuspense;function sp(n,e){e&&e.pendingBranch?Le(n)?e.effects.push(...n):e.effects.push(n):mh(n)}const ft=Symbol.for("v-fgt"),vo=Symbol.for("v-txt"),Ot=Symbol.for("v-cmt"),Os=Symbol.for("v-stc"),Fi=[];let Kt=null;function Fe(n=!1){Fi.push(Kt=n?null:[])}function Lf(){Fi.pop(),Kt=Fi[Fi.length-1]||null}let jr=1;function Xs(n,e=!1){jr+=n,n<0&&Kt&&e&&(Kt.hasOnce=!0)}function Pf(n){return n.dynamicChildren=jr>0?Kt||lr:null,Lf(),jr>0&&Kt&&Kt.push(n),n}function ze(n,e,t,i,r,s){return Pf(I(n,e,t,i,r,s,!0))}function op(n,e,t,i,r){return Pf(ct(n,e,t,i,r,!0))}function $s(n){return n?n.__v_isVNode===!0:!1}function Ci(n,e){return n.type===e.type&&n.key===e.key}const Df=({key:n})=>n??null,Bs=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?ht(n)||Pt(n)||He(n)?{i:on,r:n,k:e,f:!!t}:n:null);function I(n,e=null,t=null,i=0,r=null,s=n===ft?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Df(e),ref:e&&Bs(e),scopeId:Ju,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:on};return o?(qs(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=ht(t)?8:16),jr>0&&!a&&Kt&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Kt.push(l),l}const ct=ap;function ap(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===Uh)&&(n=Ot),$s(n)){const o=di(n,e,!0);return t&&qs(o,t),jr>0&&!s&&Kt&&(o.shapeFlag&6?Kt[Kt.indexOf(n)]=o:Kt.push(o)),o.patchFlag=-2,o}if(_p(n)&&(n=n.__vccOpts),e){e=lp(e);let{class:o,style:l}=e;o&&!ht(o)&&(e.class=pn(o)),Qe(l)&&(Ja(l)&&!Le(l)&&(l=Mt({},l)),e.style=Xa(l))}const a=ht(n)?1:Cf(n)?128:rf(n)?64:Qe(n)?4:He(n)?2:0;return I(n,e,t,i,r,a,s,!0)}function lp(n){return n?Ja(n)||Sf(n)?Mt({},n):n:null}function di(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:a,children:o,transition:l}=n,u=e?cp(r||{},e):r,c={__v_isVNode:!0,__v_skip:!0,type:n.type,props:u,key:u&&Df(u),ref:e&&e.ref?t&&s?Le(s)?s.concat(Bs(e)):[s,Bs(e)]:Bs(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==ft?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&di(n.ssContent),ssFallback:n.ssFallback&&di(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Yr(c,l.clone(c)),c}function Ht(n=" ",e=0){return ct(vo,null,n,e)}function Uf(n,e){const t=ct(Os,null,n);return t.staticCount=e,t}function xo(n="",e=!1){return e?(Fe(),op(Ot,null,n)):ct(Ot,null,n)}function En(n){return n==null||typeof n=="boolean"?ct(Ot):Le(n)?ct(ft,null,n.slice()):$s(n)?Vn(n):ct(vo,null,String(n))}function Vn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:di(n)}function qs(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Le(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),qs(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!Sf(e)?e._ctx=on:r===3&&on&&(on.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else if(He(e)){if(i&65){qs(n,{default:e});return}e={default:e,_ctx:on},t=32}else e=String(e),i&64?(t=16,e=[Ht(e)]):t=8;n.children=e,n.shapeFlag|=t}function cp(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=pn([e.class,i.class]));else if(r==="style")e.style=Xa([e.style,i.style]);else if(ro(r)){const s=e[r],a=i[r];a&&s!==a&&!(Le(s)&&s.includes(a))?e[r]=s?[].concat(s,a):a:a==null&&s==null&&!so(r)&&(e[r]=a)}else r!==""&&(e[r]=i[r])}return e}function Sn(n,e,t,i=null){ln(n,e,7,[t,i])}const up=mf();let fp=0;function dp(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||up,s={uid:fp++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new zd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:yf(i,r),emitsOptions:gf(i,r),emit:null,emitted:null,propsDefaults:st,inheritAttrs:i.inheritAttrs,ctx:st,data:st,props:st,attrs:st,slots:st,refs:st,setupState:st,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=kh.bind(null,s),n.ce&&n.ce(s),s}let Bt=null;const If=()=>Bt||on;let Ys,La;{const n=co(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(a=>a(s)):r[0](s)}};Ys=e("__VUE_INSTANCE_SETTERS__",t=>Bt=t),La=e("__VUE_SSR_SETTERS__",t=>Kr=t)}const ns=n=>{const e=Bt;return Ys(n),n.scope.on(),()=>{n.scope.off(),Ys(e)}},Ll=()=>{Bt&&Bt.scope.off(),Ys(null)};function Nf(n){return n.vnode.shapeFlag&4}let Kr=!1;function hp(n,e=!1,t=!1){e&&La(e);const{props:i,children:r}=n.vnode,s=Nf(n);jh(n,i,s,e),Qh(n,r,t||e);const a=s?pp(n,e):void 0;return e&&La(!1),a}function pp(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Ih);const{setup:i}=t;if(i){jn();const r=n.setupContext=i.length>1?gp(n):null,s=ns(n),a=ts(i,n,0,[n.props,r]),o=bu(a);if(Kn(),s(),(o||n.sp)&&!Gr(n)&&uf(n),o){if(a.then(Ll,Ll),e)return a.then(l=>{Pl(n,l)}).catch(l=>{fo(l,n,0)});n.asyncDep=a}else Pl(n,a)}else Ff(n)}function Pl(n,e,t){He(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Qe(e)&&(n.setupState=$u(e)),Ff(n)}function Ff(n,e,t){const i=n.type;n.render||(n.render=i.render||wn);{const r=ns(n);jn();try{Nh(n)}finally{Kn(),r()}}}const mp={get(n,e){return Lt(n,"get",""),n[e]}};function gp(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,mp),slots:n.slots,emit:n.emit,expose:e}}function So(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy($u(sh(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Vr)return Vr[t](n)},has(e,t){return t in e||t in Vr}})):n.proxy}function _p(n){return He(n)&&"__vccOpts"in n}const Yn=(n,e)=>uh(n,e,Kr);function vp(n,e,t){try{Xs(-1);const i=arguments.length;return i===2?Qe(e)&&!Le(e)?$s(e)?ct(n,null,[e]):ct(n,e):ct(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&$s(t)&&(t=[t]),ct(n,e,t))}finally{Xs(1)}}const xp="3.5.40";/**
* @vue/runtime-dom v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Pa;const Dl=typeof window<"u"&&window.trustedTypes;if(Dl)try{Pa=Dl.createPolicy("vue",{createHTML:n=>n})}catch{}const Of=Pa?n=>Pa.createHTML(n):n=>n,Sp="http://www.w3.org/2000/svg",Mp="http://www.w3.org/1998/Math/MathML",Gn=typeof document<"u"?document:null,Ul=Gn&&Gn.createElement("template"),yp={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?Gn.createElementNS(Sp,n):e==="mathml"?Gn.createElementNS(Mp,n):t?Gn.createElement(n,{is:t}):Gn.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Gn.createTextNode(n),createComment:n=>Gn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Gn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const a=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Ul.innerHTML=Of(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const o=Ul.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},ei="transition",Ar="animation",Zr=Symbol("_vtc"),Bf={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Ep=Mt({},sf,Bf),bp=n=>(n.displayName="Transition",n.props=Ep,n),Tp=bp((n,{slots:e})=>vp(yh,Ap(n),e)),Si=(n,e=[])=>{Le(n)?n.forEach(t=>t(...e)):n&&n(...e)},Il=n=>n?Le(n)?n.some(e=>e.length>1):n.length>1:!1;function Ap(n){const e={};for(const F in n)F in Bf||(e[F]=n[F]);if(n.css===!1)return e;const{name:t="v",type:i,duration:r,enterFromClass:s=`${t}-enter-from`,enterActiveClass:a=`${t}-enter-active`,enterToClass:o=`${t}-enter-to`,appearFromClass:l=s,appearActiveClass:u=a,appearToClass:c=o,leaveFromClass:f=`${t}-leave-from`,leaveActiveClass:h=`${t}-leave-active`,leaveToClass:m=`${t}-leave-to`}=n,M=wp(r),y=M&&M[0],p=M&&M[1],{onBeforeEnter:d,onEnter:b,onEnterCancelled:S,onLeave:E,onLeaveCancelled:P,onBeforeAppear:L=d,onAppear:C=b,onAppearCancelled:q=S}=e,K=(F,ne,U,Z)=>{F._enterCancelled=Z,Mi(F,ne?c:o),Mi(F,ne?u:a),U&&U()},v=(F,ne)=>{F._isLeaving=!1,Mi(F,f),Mi(F,m),Mi(F,h),ne&&ne()},A=F=>(ne,U)=>{const Z=F?C:b,H=()=>K(ne,F,U);Si(Z,[ne,H]),Nl(()=>{Mi(ne,F?l:s),In(ne,F?c:o),Il(Z)||Fl(ne,i,y,H)})};return Mt(e,{onBeforeEnter(F){Si(d,[F]),In(F,s),In(F,a)},onBeforeAppear(F){Si(L,[F]),In(F,l),In(F,u)},onEnter:A(!1),onAppear:A(!0),onLeave(F,ne){F._isLeaving=!0;const U=()=>v(F,ne);In(F,f),F._enterCancelled?(In(F,h),zl(F)):(zl(F),In(F,h)),Nl(()=>{F._isLeaving&&(Mi(F,f),In(F,m),Il(E)||Fl(F,i,p,U))}),Si(E,[F,U])},onEnterCancelled(F){K(F,!1,void 0,!0),Si(S,[F])},onAppearCancelled(F){K(F,!0,void 0,!0),Si(q,[F])},onLeaveCancelled(F){v(F),Si(P,[F])}})}function wp(n){if(n==null)return null;if(Qe(n))return[zo(n.enter),zo(n.leave)];{const e=zo(n);return[e,e]}}function zo(n){return Ld(n)}function In(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[Zr]||(n[Zr]=new Set)).add(e)}function Mi(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[Zr];t&&(t.delete(e),t.size||(n[Zr]=void 0))}function Nl(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let Rp=0;function Fl(n,e,t,i){const r=n._endId=++Rp,s=()=>{r===n._endId&&i()};if(t!=null)return setTimeout(s,t);const{type:a,timeout:o,propCount:l}=Cp(n,e);if(!a)return i();const u=a+"end";let c=0;const f=()=>{n.removeEventListener(u,h),s()},h=m=>{m.target===n&&++c>=l&&f()};setTimeout(()=>{c<l&&f()},o+1),n.addEventListener(u,h)}function Cp(n,e){const t=window.getComputedStyle(n),i=M=>(t[M]||"").split(", "),r=i(`${ei}Delay`),s=i(`${ei}Duration`),a=Ol(r,s),o=i(`${Ar}Delay`),l=i(`${Ar}Duration`),u=Ol(o,l);let c=null,f=0,h=0;e===ei?a>0&&(c=ei,f=a,h=s.length):e===Ar?u>0&&(c=Ar,f=u,h=l.length):(f=Math.max(a,u),c=f>0?a>u?ei:Ar:null,h=c?c===ei?s.length:l.length:0);const m=c===ei&&/\b(?:transform|all)(?:,|$)/.test(i(`${ei}Property`).toString());return{type:c,timeout:f,propCount:h,hasTransform:m}}function Ol(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>Bl(t)+Bl(n[i])))}function Bl(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function zl(n){return(n?n.ownerDocument:document).body.offsetHeight}function Lp(n,e,t){const i=n[Zr];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Hl=Symbol("_vod"),Pp=Symbol("_vsh"),Dp=Symbol(""),Up=/(?:^|;)\s*display\s*:/;function Ip(n,e,t){const i=n.style,r=ht(t);let s=!1;if(t&&!r){if(e)if(ht(e))for(const a of e.split(";")){const o=a.slice(0,a.indexOf(":")).trim();t[o]==null&&Ir(i,o,"")}else for(const a in e)t[a]==null&&Ir(i,a,"");for(const a in t){a==="display"&&(s=!0);const o=t[a];o!=null?Fp(n,a,!ht(e)&&e?e[a]:void 0,o)||Ir(i,a,o):Ir(i,a,"")}}else if(r){if(e!==t){const a=i[Dp];a&&(t+=";"+a),i.cssText=t,s=Up.test(t)}}else e&&n.removeAttribute("style");Hl in n&&(n[Hl]=s?i.display:"",n[Pp]&&(i.display="none"))}const Gl=/\s*!important$/;function Ir(n,e,t){if(Le(t))t.forEach(i=>Ir(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Np(n,e);Gl.test(t)?n.setProperty(Gi(i),t.replace(Gl,""),"important"):n[i]=t}}const Vl=["Webkit","Moz","ms"],Ho={};function Np(n,e){const t=Ho[e];if(t)return t;let i=gn(e);if(i!=="filter"&&i in n)return Ho[e]=i;i=wu(i);for(let r=0;r<Vl.length;r++){const s=Vl[r]+i;if(s in n)return Ho[e]=s}return e}function Fp(n,e,t,i){return n.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&ht(i)&&t===i}const kl="http://www.w3.org/1999/xlink";function Wl(n,e,t,i,r,s=Fd(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(kl,e.slice(6,e.length)):n.setAttributeNS(kl,e,t):t==null||s&&!Cu(t)?n.removeAttribute(e):n.setAttribute(e,s?"":Ln(t)?String(t):t)}function Xl(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Of(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(o!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const o=typeof n[e];o==="boolean"?t=Cu(t):t==null&&o==="string"?(t="",a=!0):o==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(r||e)}function Li(n,e,t,i){n.addEventListener(e,t,i)}function Op(n,e,t,i){n.removeEventListener(e,t,i)}const $l=Symbol("_vei");function Bp(n,e,t,i,r=null){const s=n[$l]||(n[$l]={}),a=s[e];if(i&&a)a.value=i;else{const[o,l]=Gp(e);if(i){const u=s[e]=Wp(i,r);Li(n,o,u,l)}else a&&(Op(n,o,a,l),s[e]=void 0)}}const zp=/(Once|Passive|Capture)$/,Hp=/^on:?(?:Once|Passive|Capture)$/;function Gp(n){let e,t;for(;(t=n.match(zp))&&!Hp.test(n);)e||(e={}),n=n.slice(0,n.length-t[1].length),e[t[1].toLowerCase()]=!0;return[n[2]===":"?n.slice(3):Gi(n.slice(2)),e]}let Go=0;const Vp=Promise.resolve(),kp=()=>Go||(Vp.then(()=>Go=0),Go=Date.now());function Wp(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;const r=t.value;if(Le(r)){const s=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{s.call(i),i._stopped=!0};const a=r.slice(),o=[i];for(let l=0;l<a.length&&!i._stopped;l++){const u=a[l];u&&ln(u,e,5,o)}}else ln(r,e,5,[i])};return t.value=n,t.attached=kp(),t}const ql=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Xp=(n,e,t,i,r,s)=>{const a=r==="svg";e==="class"?Lp(n,i,a):e==="style"?Ip(n,t,i):ro(e)?so(e)||Bp(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):$p(n,e,i,a))?(Xl(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Wl(n,e,i,a,s,e!=="value")):n._isVueCE&&(qp(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!ht(i)))?Xl(n,gn(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Wl(n,e,i,a))};function $p(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&ql(e)&&He(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return ql(e)&&ht(t)?!1:e in n}function qp(n,e){const t=n._def.props;if(!t)return!1;const i=gn(e);return Array.isArray(t)?t.some(r=>gn(r)===i):Object.keys(t).some(r=>gn(r)===i)}const js=n=>{const e=n.props["onUpdate:modelValue"]||!1;return Le(e)?t=>Fs(e,t):e};function Yp(n){n.target.composing=!0}function Yl(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const dr=Symbol("_assign");function jl(n,e,t){return e&&(n=n.trim()),t&&(n=lo(n)),n}const Vo={created(n,{modifiers:{lazy:e,trim:t,number:i}},r){n[dr]=js(r);const s=i||r.props&&r.props.type==="number";Li(n,e?"change":"input",a=>{a.target.composing||n[dr](jl(n.value,t,s))}),(t||s)&&Li(n,"change",()=>{n.value=jl(n.value,t,s)}),e||(Li(n,"compositionstart",Yp),Li(n,"compositionend",Yl),Li(n,"change",Yl))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:r,number:s}},a){if(n[dr]=js(a),n.composing)return;const o=(s||n.type==="number")&&!/^0\d/.test(n.value)?lo(n.value):n.value,l=e??"";if(o===l)return;const u=n.getRootNode();(u instanceof Document||u instanceof ShadowRoot)&&u.activeElement===n&&n.type!=="range"&&(i&&e===t||r&&n.value.trim()===l)||(n.value=l)}},jp={deep:!0,created(n,{value:e,modifiers:{number:t}},i){n._modelValue=e,Li(n,"change",()=>{const r=Array.prototype.filter.call(n.options,s=>s.selected).map(s=>t?lo(Ks(s)):Ks(s));n[dr](n.multiple?oo(n._modelValue)?new Set(r):r:r[0]),n._assigning=!0,Yu(()=>{n._assigning=!1})}),n[dr]=js(i)},mounted(n,{value:e}){Kl(n,e)},beforeUpdate(n,{value:e},t){n._modelValue=e,n[dr]=js(t)},updated(n,{value:e}){n._assigning||Kl(n,e)}};function Kl(n,e){const t=n.multiple,i=Le(e);if(!(t&&!i&&!oo(e))){for(let r=0,s=n.options.length;r<s;r++){const a=n.options[r],o=Ks(a);if(t)if(i){const l=typeof o;l==="string"||l==="number"?a.selected=e.some(u=>String(u)===String(o)):a.selected=Bd(e,o)>-1}else a.selected=e.has(o);else if(es(Ks(a),e)){n.selectedIndex!==r&&(n.selectedIndex=r);return}}!t&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function Ks(n){return"_value"in n?n._value:n.value}const Kp=["ctrl","shift","alt","meta"],Zp={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>Kp.some(t=>n[`${t}Key`]&&!e.includes(t))},Nr=(n,e)=>{if(!n)return n;const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=(r,...s)=>{for(let a=0;a<e.length;a++){const o=Zp[e[a]];if(o&&o(r,e))return}return n(r,...s)})},Jp=Mt({patchProp:Xp},yp);let Zl;function Qp(){return Zl||(Zl=tp(Jp))}const em=(...n)=>{const e=Qp().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=nm(i);if(!r)return;const s=e._component;!He(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const a=t(r,!1,tm(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e};function tm(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function nm(n){return ht(n)?document.querySelector(n):n}const zf=Symbol("locale"),Jl={tr:{nav:{services:"Hizmetler",process:"Süreç",projects:"Projeler",about:"Hakkımızda",cta:"Teklif Al",ctac:"Teklif Al"},hero:{badge:"Özel Yazılım & Özel Yapay Zeka Çözümleri",title1:"İşinizi Geleceğe Taşıyan",titleHighlight:"Özel Yazılım",title2:"ve Yapay Zeka Çözümleri",subtitle:"İhtiyacınıza özel ERP sistemlerinden yüksek performanslı web platformlarına kadar, dijital dönüşümünüzü uçtan uca yönetiyoruz.",ctaPrimary:"Projenizi Başlatın",ctaSecondary:"Çözümlerimizi İnceleyin",stat1Label:"Verimlilik Artışı",stat1Value:"+%124",stat2Label:"Yapay Zeka Verimliliği",stat2Value:"10x Hız",stat3Label:"Sistem Sağlığı"},services:{sectionTitle1:"Uçtan Uca Dijital",sectionTitleHighlight:"Mühendislik",sectionSubtitle:"Geleceğin teknolojilerini bugünün iş ihtiyaçlarıyla buluşturuyoruz.",details:"Detaylar",cards:[{title:"Özel Web & Mobil Platformlar",description:"Kullanıcı deneyimini odağa alan, yüksek performanslı ve ölçeklenebilir dijital çözümler."},{title:"Kurumsal ERP & CRM Sistemleri",description:"Operasyonel mükemmellik için firmanıza özel terzi usulü yönetim platformları."},{title:"Özel Yazılım Geliştirme",description:"Karmaşık iş süreçlerini kolaylaştıran, güvenli ve esnek yazılım mimarileri."},{title:"Yapay Zeka & Otomasyon",description:"İş akışlarını otopilota alan akıllı algoritmalar ve LLM entegrasyonları."}]},ai:{engineLabel:"Sartechs AI Engine Active",engineQuote:'"Süreç analizi tamamlandı. Operasyonel performans +%124 seviyesinde iyileştirildi."',title1:"Yapay Zeka ile Süreçlerinizi",titleHighlight:"Otopilota",title2:"Alın",features:[{title:"Akıllı Karar Mekanizmaları",description:"Veri yığınlarını anlamlı içgörülere dönüştürerek stratejik kararlarınızı destekliyoruz."},{title:"Hızlandırılmış Operasyon",description:"Tekrar eden görevleri otonom sistemlere devrederek ekibinizin yaratıcılığa odaklanmasını sağlıyoruz."},{title:"Öngörülebilir Güvenlik",description:"Anomali tespiti ve proaktif savunma sistemleri ile verilerinizi en üst düzeyde koruyoruz."}]},stats:{reliability:"Güvenilirlik",speed:"Hız",bespoke:"Özel Çözüm"},process:{title1:"Mükemmelliğe Giden",titleHighlight:"Yol",subtitle:"Sistemli ve şeffaf çalışma modelimizle başarıyı garantiliyoruz.",steps:[{title:"Analiz & Strateji",description:"İhtiyaçlarınızı derinlemesine inceliyor, yol haritasını belirliyoruz."},{title:"Mimari & UI/UX",description:"Estetiği fonksiyonla birleştiren, kullanıcı dostu arayüzler tasarlıyoruz."},{title:"Çevik Geliştirme",description:"Modern teknolojilerle güvenli ve ölçeklenebilir kod yazıyoruz."},{title:"Canlıya Alım & Destek",description:"Projenizi yayınlıyor, süreklilik için teknik destek sağlıyoruz."}]},ecosystem:{title:"Teknoloji Ekosistemimiz",subtitle:"En son teknolojilerle güçlendirilmiş modern altyapı."},contact:{title1:"Bir Sonraki",titleHighlight:"Devriminizi",title2:"Başlatalım",subtitle:"Ekibimiz 24 saat içinde size özel bir strateji ile dönüş yapacaktır.",labelName:"Ad Soyad",placeholderName:"Ahmet Yılmaz",labelEmail:"Şirket E-postası",placeholderEmail:"ahmet@sirket.com",labelService:"Hizmet Türü",labelDetails:"Proje Detayları",placeholderDetails:"Projenizden kısaca bahseder misiniz?",submit:"TEKLİF TALEBİ GÖNDER",serviceOptions:["Özel Yazılım Geliştirme","Yapay Zeka Entegrasyonu","Mobil Uygulama","ERP & CRM Çözümleri"]},footer:{tagline:"Geleceğin teknolojilerini kullanarak işletmenizi dijital çağda zirveye taşıyoruz.",copyright:"Sartechs. Tüm hakları saklıdır.",company:"Şirket",support:"Destek",companyLinks:["Hizmetler","Süreç","Projeler"],supportLinks:["İletişim","Kariyer","Blog"]},about:{title1:"Biz",titleHighlight:"Kimiz?",title2:"",subtitle:"Sartechs, işletmelerin süreçlerini yeniden tasarlayan, özel yazılım ve yapay zeka mimarileri kuran bir teknoloji ortağıdır.",points:["İş kritikliği yüksek sistemler için net mimari ve güvenli geliştirme yaklaşımı.","Kurumsal operasyonları dönüştüren ERP, otomasyon ve dijital platform çözümleri.","İster ürün, ister operasyonel akış olsun; her adımda teknik ve iş odaklı ekip desteği."],techs:["Node.js","Vue","Spring Boot","PostgreSQL","Docker","LLM"],card:{label:"Müşteriler neden bizi seçer",title:"Strateji, ürün ve teslimat",items:[{title:"İş odaklı düşünme",description:"İş süreçlerini teknolojiyle değil, iş değeriyle eşleştirerek çözümler üretiyoruz."},{title:"Net ve güvenli yürütme",description:"Mimari, geliştirme ve yayın sonrası süreçlerde net iletişim ve güvenli ilerleme sağlıyoruz."},{title:"Modern mühendislik ekosistemi",description:""}]}},projects:{title1:"Önceki",titleHighlight:"Başarı Hikâyeleri",title2:"",subtitle:"Yüksek güven gerektiren iş akışlarında, özel yazılım ve AI çözümleriyle ölçülebilir sonuçlar üretiyoruz.",items:[{name:"NorthPeak Logistics",metric:"+42% operasyonel verimlilik",detail:"ERP ve otomasyon odaklı süreç modernizasyonu."},{name:"VerdeOne",metric:"3x daha hızlı ekip koordinasyonu",detail:"İç operasyon ve müşteri akışı dijitalleşmesi."},{name:"HelioOps",metric:"+68% müşteri yanıt hızı",detail:"Yapay zeka destekli destek ve yönetişim sistemi."}]}},en:{nav:{services:"Services",process:"Process",projects:"Projects",about:"About",cta:"Get a Quote"},hero:{badge:"Custom Software & AI Solutions",title1:"Custom Software",titleHighlight:"& AI Solutions",title2:"That Drive Your Business Forward",subtitle:"From tailor-made ERP systems to high-performance web platforms, we manage your digital transformation end-to-end.",ctaPrimary:"Start Your Project",ctaSecondary:"Explore Our Solutions",stat1Label:"Performance Lift",stat1Value:"+124%",stat2Label:"AI Efficiency",stat2Value:"10x Speed",stat3Label:"System Health"},services:{sectionTitle1:"End-to-End Digital",sectionTitleHighlight:"Engineering",sectionSubtitle:"Bridging tomorrow's technologies with today's business needs.",details:"Details",cards:[{title:"Custom Web & Mobile Platforms",description:"High-performance, scalable digital solutions focused on user experience."},{title:"Enterprise ERP & CRM Systems",description:"Tailor-made management platforms for operational excellence."},{title:"Custom Software Development",description:"Secure and flexible software architectures that streamline complex workflows."},{title:"AI & Automation",description:"Intelligent algorithms and LLM integrations that put workflows on autopilot."}]},ai:{engineLabel:"Sartechs AI Engine Active",engineQuote:'"Process analysis complete. Operational performance improved by 124%."',title1:"Put Your Processes on",titleHighlight:"Autopilot",title2:"with AI",features:[{title:"Intelligent Decision Engines",description:"We turn data mountains into meaningful insights that support your strategic decisions."},{title:"Accelerated Operations",description:"By delegating repetitive tasks to autonomous systems, we free your team to focus on creativity."},{title:"Predictive Security",description:"Anomaly detection and proactive defense systems keep your data protected at the highest level."}]},stats:{reliability:"Reliability",speed:"Speed",bespoke:"Bespoke"},process:{title1:"The Road to",titleHighlight:"Excellence",subtitle:"We guarantee success with our systematic and transparent working model.",steps:[{title:"Analysis & Strategy",description:"We deeply examine your needs and define the roadmap."},{title:"Architecture & UI/UX",description:"We design user-friendly interfaces that unite aesthetics and function."},{title:"Agile Development",description:"We write secure, scalable code with modern technologies."},{title:"Launch & Support",description:"We deploy your project and provide ongoing technical support."}]},ecosystem:{title:"Our Technology Ecosystem",subtitle:"Modern infrastructure powered by the latest technologies."},contact:{title1:"Let's Kick Off Your",titleHighlight:"Next Revolution",title2:"",subtitle:"Our team will get back to you within 24 hours with a tailored strategy.",labelName:"Full Name",placeholderName:"John Doe",labelEmail:"Company Email",placeholderEmail:"john@company.com",labelService:"Service Type",labelDetails:"Project Details",placeholderDetails:"Tell us a bit about your project.",submit:"SEND QUOTE REQUEST",serviceOptions:["Custom Software Development","AI Integration","Mobile Application","ERP & CRM Solutions"]},footer:{tagline:"Leveraging tomorrow's technologies to elevate your business in the digital age.",copyright:"Sartechs. All rights reserved.",company:"Company",support:"Support",companyLinks:["Services","Process","Projects"],supportLinks:["Contact","Careers","Blog"]},about:{title1:"Who",titleHighlight:"We Are",title2:"",subtitle:"Sartechs is a technology partner that redesigns business operations through custom software and AI architectures.",points:["Clear architecture and secure delivery for high-impact business systems.","ERP, automation, and digital platform solutions that transform operations.","Hands-on technical partnership from strategy to production support."],techs:["Node.js","Vue","Spring Boot","PostgreSQL","Docker","LLM"],card:{label:"Why clients choose us",title:"Strategy, product and delivery",items:[{title:"Business-first thinking",description:"We design solutions by aligning processes with business value, not just technology."},{title:"Clear execution",description:"We maintain transparent communication and safe delivery across architecture, development, and post-launch support."},{title:"Modern engineering stack",description:""}]}},projects:{title1:"Selected",titleHighlight:"Success Stories",title2:"",subtitle:"We deliver measurable business outcomes with custom software and AI systems built for operational resilience.",items:[{name:"NorthPeak Logistics",metric:"+42% operational efficiency",detail:"ERP and workflow modernization for critical operations."},{name:"VerdeOne",metric:"3x faster team coordination",detail:"Customer journey and internal operations digitization."},{name:"HelioOps",metric:"+68% response speed",detail:"AI-assisted support and governance platform."}]}}};function im(){const n=$r("tr");return ef(zf,n),n}function Pn(){const n=zr(zf);return{locale:n,t:t=>{const i=t.split(".");let r=Jl[n.value];for(const s of i){if(r==null)return t;r=r[s]}return r??t},messages:Jl}}const Hf=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},rm={class:"fixed top-0 w-full z-50 bg-surface-obsidian/80 backdrop-blur-md border-b border-white/5"},sm={class:"flex justify-between items-center max-w-container-max mx-auto px-gutter py-3"},om={class:"flex items-center gap-3"},am={class:"hidden md:flex gap-8 items-center"},lm=["onClick"],cm={class:"md:hidden flex items-center gap-3"},um={class:"material-symbols-outlined text-[28px]"},fm={key:0,class:"md:hidden flex flex-col px-gutter pb-4 gap-4 border-t border-white/5 bg-surface-obsidian"},dm=["onClick"],hm={__name:"AppHeader",setup(n){const{locale:e,t}=Pn();function i(){e.value=e.value==="tr"?"en":"tr"}const r=Yn(()=>[{id:"hizmetler",label:t("nav.services")},{id:"surec",label:t("nav.process")},{id:"hakkimizda",label:t("nav.about")},{id:"projeler",label:t("nav.projects")}]),s=$r(null),a=$r(!1);function o(u){const c=u?document.getElementById(u):document.documentElement;if(!c)return;const f=72,h=window.scrollY,M=(u?c.getBoundingClientRect().top+window.scrollY-f:0)-h,y=Math.min(Math.max(Math.abs(M)*.4,400),900);let p=null;function d(S){return S<.5?4*S*S*S:1-Math.pow(-2*S+2,3)/2}function b(S){p||(p=S);const E=S-p,P=Math.min(E/y,1);window.scrollTo(0,h+M*d(P)),P<1&&requestAnimationFrame(b)}requestAnimationFrame(b)}let l;return mo(()=>{const u=document.querySelectorAll("section[id]");l=new IntersectionObserver(c=>{c.forEach(f=>{f.isIntersecting&&(s.value=f.target.id)})},{rootMargin:"-40% 0px -55% 0px"}),u.forEach(c=>l.observe(c))}),go(()=>l==null?void 0:l.disconnect()),(u,c)=>(Fe(),ze("header",rm,[I("div",sm,[I("div",om,[I("img",{src:"https://lh3.googleusercontent.com/aida/AP1WRLty_fiSjelvnvJUU_N9Vgoqa25s-UYGEfXUw3XsRfqQeEVJsggnyXPwHaO2vaOsO7PgQOOcEMNlh-KiVFSFU-YO4Y3ShyMAICfmpEo18XkrYAVDE_qPXCHTd0Cy-P5dg5pg_O50VYFEJgYJwz1fnZlmQR5gLLDeW1DbsSo0eENeHzU_dEZ0d3UtPAt4ZVJ4eD6MoO9x9tFEM_4JutbsQbTs3wyc9ZlLVTvnLKWOBNAckoIa0p2RmgirmWs",alt:"Sartechs",class:"h-9 w-auto logo-filter cursor-pointer",onClick:c[0]||(c[0]=f=>o(null))}),I("span",{class:"font-display-xl-mobile text-[20px] font-bold tracking-tight text-white hidden md:block cursor-pointer",onClick:c[1]||(c[1]=f=>o(null))}," SARTECHS ")]),I("nav",am,[(Fe(!0),ze(ft,null,zt(r.value,f=>(Fe(),ze("a",{key:f.id,href:"#",class:pn(["relative font-label-md transition-colors duration-200 py-1",s.value===f.id?"text-white":"text-on-surface-variant hover:text-white"]),onClick:Nr(h=>o(f.id),["prevent"])},[Ht(fe(f.label)+" ",1),I("span",{class:pn(["absolute -bottom-0.5 left-0 h-[2px] bg-primary rounded-full transition-all duration-300",s.value===f.id?"w-full opacity-100":"w-0 opacity-0"])},null,2)],10,lm))),128)),I("a",{href:"#",class:"bg-primary text-white px-5 py-2 rounded-lg font-label-md glow-button",onClick:c[2]||(c[2]=Nr(f=>o("iletisim"),["prevent"]))},fe(ye(t)("nav.cta")),1),I("button",{class:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass-panel border-white/10 text-xs font-bold tracking-widest uppercase text-on-surface-variant hover:text-white transition-colors",onClick:i},[c[5]||(c[5]=I("span",{class:"material-symbols-outlined text-[14px]"},"language",-1)),Ht(" "+fe(ye(e)==="tr"?"EN":"TR"),1)])]),I("div",cm,[I("button",{class:"flex items-center gap-1 px-2.5 py-1 rounded-md glass-panel border-white/10 text-xs font-bold tracking-widest uppercase text-on-surface-variant",onClick:i},[c[6]||(c[6]=I("span",{class:"material-symbols-outlined text-[13px]"},"language",-1)),Ht(" "+fe(ye(e)==="tr"?"EN":"TR"),1)]),I("button",{class:"text-on-surface",onClick:c[3]||(c[3]=f=>a.value=!a.value)},[I("span",um,fe(a.value?"close":"menu"),1)])])]),ct(Tp,{name:"slide-down"},{default:Qu(()=>[a.value?(Fe(),ze("nav",fm,[(Fe(!0),ze(ft,null,zt(r.value,f=>(Fe(),ze("a",{key:f.id,href:"#",class:pn(["font-label-md py-2 transition-colors duration-200",s.value===f.id?"text-primary":"text-on-surface-variant"]),onClick:Nr(h=>{o(f.id),a.value=!1},["prevent"])},fe(f.label),11,dm))),128)),I("a",{href:"#",class:"bg-primary text-white px-5 py-2 rounded-lg font-label-md text-center glow-button",onClick:c[4]||(c[4]=Nr(f=>{o("iletisim"),a.value=!1},["prevent"]))},fe(ye(t)("nav.cta")),1)])):xo("",!0)]),_:1})]))}},pm=Hf(hm,[["__scopeId","data-v-58ecd525"]]);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const nl="161",mm=0,Ql=1,gm=2,Gf=1,_m=2,Hn=3,hi=0,Xt=1,Xn=2,ci=0,hr=1,ec=2,tc=3,nc=4,vm=5,Pi=100,xm=101,Sm=102,ic=103,rc=104,Mm=200,ym=201,Em=202,bm=203,Da=204,Ua=205,Tm=206,Am=207,wm=208,Rm=209,Cm=210,Lm=211,Pm=212,Dm=213,Um=214,Im=0,Nm=1,Fm=2,Zs=3,Om=4,Bm=5,zm=6,Hm=7,Vf=0,Gm=1,Vm=2,ui=0,km=1,Wm=2,Xm=3,$m=4,qm=5,Ym=6,kf=300,_r=301,vr=302,Ia=303,Na=304,Mo=306,Fa=1e3,dn=1001,Oa=1002,Nt=1003,sc=1004,wr=1005,kt=1006,ko=1007,Ui=1008,fi=1009,jm=1010,Km=1011,il=1012,Wf=1013,li=1014,$n=1015,Jr=1016,Xf=1017,$f=1018,Oi=1020,Zm=1021,hn=1023,Jm=1024,Qm=1025,Bi=1026,xr=1027,eg=1028,qf=1029,tg=1030,Yf=1031,jf=1033,Wo=33776,Xo=33777,$o=33778,qo=33779,oc=35840,ac=35841,lc=35842,cc=35843,Kf=36196,uc=37492,fc=37496,dc=37808,hc=37809,pc=37810,mc=37811,gc=37812,_c=37813,vc=37814,xc=37815,Sc=37816,Mc=37817,yc=37818,Ec=37819,bc=37820,Tc=37821,Yo=36492,Ac=36494,wc=36495,ng=36283,Rc=36284,Cc=36285,Lc=36286,Zf=3e3,zi=3001,ig=3200,rg=3201,Jf=0,sg=1,sn="",bt="srgb",Jn="srgb-linear",rl="display-p3",yo="display-p3-linear",Js="linear",ut="srgb",Qs="rec709",eo="p3",ki=7680,Pc=519,og=512,ag=513,lg=514,Qf=515,cg=516,ug=517,fg=518,dg=519,Dc=35044,Uc="300 es",Ba=1035,qn=2e3,to=2001;class Mr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Rt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],jo=Math.PI/180,za=180/Math.PI;function is(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Rt[n&255]+Rt[n>>8&255]+Rt[n>>16&255]+Rt[n>>24&255]+"-"+Rt[e&255]+Rt[e>>8&255]+"-"+Rt[e>>16&15|64]+Rt[e>>24&255]+"-"+Rt[t&63|128]+Rt[t>>8&255]+"-"+Rt[t>>16&255]+Rt[t>>24&255]+Rt[i&255]+Rt[i>>8&255]+Rt[i>>16&255]+Rt[i>>24&255]).toLowerCase()}function Wt(n,e,t){return Math.max(e,Math.min(t,n))}function hg(n,e){return(n%e+e)%e}function Ko(n,e,t){return(1-t)*n+t*e}function Ic(n){return(n&n-1)===0&&n!==0}function Ha(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Rr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Gt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class je{constructor(e=0,t=0){je.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Wt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $e{constructor(e,t,i,r,s,a,o,l,u){$e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,u)}set(e,t,i,r,s,a,o,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=o,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=a,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],u=i[1],c=i[4],f=i[7],h=i[2],m=i[5],M=i[8],y=r[0],p=r[3],d=r[6],b=r[1],S=r[4],E=r[7],P=r[2],L=r[5],C=r[8];return s[0]=a*y+o*b+l*P,s[3]=a*p+o*S+l*L,s[6]=a*d+o*E+l*C,s[1]=u*y+c*b+f*P,s[4]=u*p+c*S+f*L,s[7]=u*d+c*E+f*C,s[2]=h*y+m*b+M*P,s[5]=h*p+m*S+M*L,s[8]=h*d+m*E+M*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8];return t*a*c-t*o*u-i*s*c+i*o*l+r*s*u-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8],f=c*a-o*u,h=o*l-c*s,m=u*s-a*l,M=t*f+i*h+r*m;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/M;return e[0]=f*y,e[1]=(r*u-c*i)*y,e[2]=(o*i-r*a)*y,e[3]=h*y,e[4]=(c*t-r*l)*y,e[5]=(r*s-o*t)*y,e[6]=m*y,e[7]=(i*l-u*t)*y,e[8]=(a*t-i*s)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*a+u*o)+a+e,-r*u,r*l,-r*(-u*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Zo.makeScale(e,t)),this}rotate(e){return this.premultiply(Zo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Zo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Zo=new $e;function ed(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function no(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function pg(){const n=no("canvas");return n.style.display="block",n}const Nc={};function pr(n){n in Nc||(Nc[n]=!0,console.warn(n))}const Fc=new $e().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Oc=new $e().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ps={[Jn]:{transfer:Js,primaries:Qs,toReference:n=>n,fromReference:n=>n},[bt]:{transfer:ut,primaries:Qs,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[yo]:{transfer:Js,primaries:eo,toReference:n=>n.applyMatrix3(Oc),fromReference:n=>n.applyMatrix3(Fc)},[rl]:{transfer:ut,primaries:eo,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Oc),fromReference:n=>n.applyMatrix3(Fc).convertLinearToSRGB()}},mg=new Set([Jn,yo]),nt={enabled:!0,_workingColorSpace:Jn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!mg.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=ps[e].toReference,r=ps[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return ps[n].primaries},getTransfer:function(n){return n===sn?Js:ps[n].transfer}};function mr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Jo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Wi;class td{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Wi===void 0&&(Wi=no("canvas")),Wi.width=e.width,Wi.height=e.height;const i=Wi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Wi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=no("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=mr(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(mr(t[i]/255)*255):t[i]=mr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let gg=0;class nd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gg++}),this.uuid=is(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Qo(r[a].image)):s.push(Qo(r[a]))}else s=Qo(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Qo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?td.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _g=0;class $t extends Mr{constructor(e=$t.DEFAULT_IMAGE,t=$t.DEFAULT_MAPPING,i=dn,r=dn,s=kt,a=Ui,o=hn,l=fi,u=$t.DEFAULT_ANISOTROPY,c=sn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_g++}),this.uuid=is(),this.name="",this.source=new nd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new je(0,0),this.repeat=new je(1,1),this.center=new je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(pr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===zi?bt:sn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==kf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fa:e.x=e.x-Math.floor(e.x);break;case dn:e.x=e.x<0?0:1;break;case Oa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fa:e.y=e.y-Math.floor(e.y);break;case dn:e.y=e.y<0?0:1;break;case Oa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return pr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===bt?zi:Zf}set encoding(e){pr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===zi?bt:sn}}$t.DEFAULT_IMAGE=null;$t.DEFAULT_MAPPING=kf;$t.DEFAULT_ANISOTROPY=1;class Tt{constructor(e=0,t=0,i=0,r=1){Tt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],f=l[8],h=l[1],m=l[5],M=l[9],y=l[2],p=l[6],d=l[10];if(Math.abs(c-h)<.01&&Math.abs(f-y)<.01&&Math.abs(M-p)<.01){if(Math.abs(c+h)<.1&&Math.abs(f+y)<.1&&Math.abs(M+p)<.1&&Math.abs(u+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(u+1)/2,E=(m+1)/2,P=(d+1)/2,L=(c+h)/4,C=(f+y)/4,q=(M+p)/4;return S>E&&S>P?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=L/i,s=C/i):E>P?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=L/r,s=q/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=C/s,r=q/s),this.set(i,r,s,t),this}let b=Math.sqrt((p-M)*(p-M)+(f-y)*(f-y)+(h-c)*(h-c));return Math.abs(b)<.001&&(b=1),this.x=(p-M)/b,this.y=(f-y)/b,this.z=(h-c)/b,this.w=Math.acos((u+m+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vg extends Mr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Tt(0,0,e,t),this.scissorTest=!1,this.viewport=new Tt(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(pr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===zi?bt:sn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new $t(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new nd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hi extends vg{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class id extends $t{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xg extends $t{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rs{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3];const h=s[a+0],m=s[a+1],M=s[a+2],y=s[a+3];if(o===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f;return}if(o===1){e[t+0]=h,e[t+1]=m,e[t+2]=M,e[t+3]=y;return}if(f!==y||l!==h||u!==m||c!==M){let p=1-o;const d=l*h+u*m+c*M+f*y,b=d>=0?1:-1,S=1-d*d;if(S>Number.EPSILON){const P=Math.sqrt(S),L=Math.atan2(P,d*b);p=Math.sin(p*L)/P,o=Math.sin(o*L)/P}const E=o*b;if(l=l*p+h*E,u=u*p+m*E,c=c*p+M*E,f=f*p+y*E,p===1-o){const P=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=P,u*=P,c*=P,f*=P}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=s[a],h=s[a+1],m=s[a+2],M=s[a+3];return e[t]=o*M+c*f+l*m-u*h,e[t+1]=l*M+c*h+u*f-o*m,e[t+2]=u*M+c*m+o*h-l*f,e[t+3]=c*M-o*f-l*h-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,u=o(i/2),c=o(r/2),f=o(s/2),h=l(i/2),m=l(r/2),M=l(s/2);switch(a){case"XYZ":this._x=h*c*f+u*m*M,this._y=u*m*f-h*c*M,this._z=u*c*M+h*m*f,this._w=u*c*f-h*m*M;break;case"YXZ":this._x=h*c*f+u*m*M,this._y=u*m*f-h*c*M,this._z=u*c*M-h*m*f,this._w=u*c*f+h*m*M;break;case"ZXY":this._x=h*c*f-u*m*M,this._y=u*m*f+h*c*M,this._z=u*c*M+h*m*f,this._w=u*c*f-h*m*M;break;case"ZYX":this._x=h*c*f-u*m*M,this._y=u*m*f+h*c*M,this._z=u*c*M-h*m*f,this._w=u*c*f+h*m*M;break;case"YZX":this._x=h*c*f+u*m*M,this._y=u*m*f+h*c*M,this._z=u*c*M-h*m*f,this._w=u*c*f-h*m*M;break;case"XZY":this._x=h*c*f-u*m*M,this._y=u*m*f-h*c*M,this._z=u*c*M+h*m*f,this._w=u*c*f+h*m*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],u=t[2],c=t[6],f=t[10],h=i+o+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(c-l)*m,this._y=(s-u)*m,this._z=(a-r)*m}else if(i>o&&i>f){const m=2*Math.sqrt(1+i-o-f);this._w=(c-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+u)/m}else if(o>f){const m=2*Math.sqrt(1+o-i-f);this._w=(s-u)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+c)/m}else{const m=2*Math.sqrt(1+f-i-o);this._w=(a-r)/m,this._x=(s+u)/m,this._y=(l+c)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Wt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+a*o+r*u-s*l,this._y=r*c+a*l+s*o-i*u,this._z=s*c+a*u+i*l-r*o,this._w=a*c-i*o-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,o),f=Math.sin((1-t)*c)/u,h=Math.sin(t*c)/u;return this._w=a*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(e=0,t=0,i=0){G.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Bc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Bc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,u=2*(a*r-o*i),c=2*(o*t-s*r),f=2*(s*i-a*t);return this.x=t+l*u+a*f-o*c,this.y=i+l*c+o*u-s*f,this.z=r+l*f+s*c-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ea.copy(this).projectOnVector(e),this.sub(ea)}reflect(e){return this.sub(ea.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Wt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ea=new G,Bc=new rs;class ss{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,cn):cn.fromBufferAttribute(s,a),cn.applyMatrix4(e.matrixWorld),this.expandByPoint(cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ms.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ms.copy(i.boundingBox)),ms.applyMatrix4(e.matrixWorld),this.union(ms)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,cn),cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Cr),gs.subVectors(this.max,Cr),Xi.subVectors(e.a,Cr),$i.subVectors(e.b,Cr),qi.subVectors(e.c,Cr),ti.subVectors($i,Xi),ni.subVectors(qi,$i),yi.subVectors(Xi,qi);let t=[0,-ti.z,ti.y,0,-ni.z,ni.y,0,-yi.z,yi.y,ti.z,0,-ti.x,ni.z,0,-ni.x,yi.z,0,-yi.x,-ti.y,ti.x,0,-ni.y,ni.x,0,-yi.y,yi.x,0];return!ta(t,Xi,$i,qi,gs)||(t=[1,0,0,0,1,0,0,0,1],!ta(t,Xi,$i,qi,gs))?!1:(_s.crossVectors(ti,ni),t=[_s.x,_s.y,_s.z],ta(t,Xi,$i,qi,gs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Nn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Nn=[new G,new G,new G,new G,new G,new G,new G,new G],cn=new G,ms=new ss,Xi=new G,$i=new G,qi=new G,ti=new G,ni=new G,yi=new G,Cr=new G,gs=new G,_s=new G,Ei=new G;function ta(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Ei.fromArray(n,s);const o=r.x*Math.abs(Ei.x)+r.y*Math.abs(Ei.y)+r.z*Math.abs(Ei.z),l=e.dot(Ei),u=t.dot(Ei),c=i.dot(Ei);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>o)return!1}return!0}const Sg=new ss,Lr=new G,na=new G;class sl{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Sg.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Lr.subVectors(e,this.center);const t=Lr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Lr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(na.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Lr.copy(e.center).add(na)),this.expandByPoint(Lr.copy(e.center).sub(na))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Fn=new G,ia=new G,vs=new G,ii=new G,ra=new G,xs=new G,sa=new G;class Mg{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Fn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Fn.copy(this.origin).addScaledVector(this.direction,t),Fn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){ia.copy(e).add(t).multiplyScalar(.5),vs.copy(t).sub(e).normalize(),ii.copy(this.origin).sub(ia);const s=e.distanceTo(t)*.5,a=-this.direction.dot(vs),o=ii.dot(this.direction),l=-ii.dot(vs),u=ii.lengthSq(),c=Math.abs(1-a*a);let f,h,m,M;if(c>0)if(f=a*l-o,h=a*o-l,M=s*c,f>=0)if(h>=-M)if(h<=M){const y=1/c;f*=y,h*=y,m=f*(f+a*h+2*o)+h*(a*f+h+2*l)+u}else h=s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+u;else h=-s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+u;else h<=-M?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+u):h<=M?(f=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+u):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+u);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(ia).addScaledVector(vs,h),m}intersectSphere(e,t){Fn.subVectors(e.center,this.origin);const i=Fn.dot(this.direction),r=Fn.dot(Fn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),c>=0?(s=(e.min.y-h.y)*c,a=(e.max.y-h.y)*c):(s=(e.max.y-h.y)*c,a=(e.min.y-h.y)*c),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Fn)!==null}intersectTriangle(e,t,i,r,s){ra.subVectors(t,e),xs.subVectors(i,e),sa.crossVectors(ra,xs);let a=this.direction.dot(sa),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ii.subVectors(this.origin,e);const l=o*this.direction.dot(xs.crossVectors(ii,xs));if(l<0)return null;const u=o*this.direction.dot(ra.cross(ii));if(u<0||l+u>a)return null;const c=-o*ii.dot(sa);return c<0?null:this.at(c/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class At{constructor(e,t,i,r,s,a,o,l,u,c,f,h,m,M,y,p){At.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,u,c,f,h,m,M,y,p)}set(e,t,i,r,s,a,o,l,u,c,f,h,m,M,y,p){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=u,d[6]=c,d[10]=f,d[14]=h,d[3]=m,d[7]=M,d[11]=y,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new At().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Yi.setFromMatrixColumn(e,0).length(),s=1/Yi.setFromMatrixColumn(e,1).length(),a=1/Yi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*c,m=a*f,M=o*c,y=o*f;t[0]=l*c,t[4]=-l*f,t[8]=u,t[1]=m+M*u,t[5]=h-y*u,t[9]=-o*l,t[2]=y-h*u,t[6]=M+m*u,t[10]=a*l}else if(e.order==="YXZ"){const h=l*c,m=l*f,M=u*c,y=u*f;t[0]=h+y*o,t[4]=M*o-m,t[8]=a*u,t[1]=a*f,t[5]=a*c,t[9]=-o,t[2]=m*o-M,t[6]=y+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*c,m=l*f,M=u*c,y=u*f;t[0]=h-y*o,t[4]=-a*f,t[8]=M+m*o,t[1]=m+M*o,t[5]=a*c,t[9]=y-h*o,t[2]=-a*u,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*c,m=a*f,M=o*c,y=o*f;t[0]=l*c,t[4]=M*u-m,t[8]=h*u+y,t[1]=l*f,t[5]=y*u+h,t[9]=m*u-M,t[2]=-u,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,m=a*u,M=o*l,y=o*u;t[0]=l*c,t[4]=y-h*f,t[8]=M*f+m,t[1]=f,t[5]=a*c,t[9]=-o*c,t[2]=-u*c,t[6]=m*f+M,t[10]=h-y*f}else if(e.order==="XZY"){const h=a*l,m=a*u,M=o*l,y=o*u;t[0]=l*c,t[4]=-f,t[8]=u*c,t[1]=h*f+y,t[5]=a*c,t[9]=m*f-M,t[2]=M*f-m,t[6]=o*c,t[10]=y*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(yg,e,Eg)}lookAt(e,t,i){const r=this.elements;return Yt.subVectors(e,t),Yt.lengthSq()===0&&(Yt.z=1),Yt.normalize(),ri.crossVectors(i,Yt),ri.lengthSq()===0&&(Math.abs(i.z)===1?Yt.x+=1e-4:Yt.z+=1e-4,Yt.normalize(),ri.crossVectors(i,Yt)),ri.normalize(),Ss.crossVectors(Yt,ri),r[0]=ri.x,r[4]=Ss.x,r[8]=Yt.x,r[1]=ri.y,r[5]=Ss.y,r[9]=Yt.y,r[2]=ri.z,r[6]=Ss.z,r[10]=Yt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],u=i[12],c=i[1],f=i[5],h=i[9],m=i[13],M=i[2],y=i[6],p=i[10],d=i[14],b=i[3],S=i[7],E=i[11],P=i[15],L=r[0],C=r[4],q=r[8],K=r[12],v=r[1],A=r[5],F=r[9],ne=r[13],U=r[2],Z=r[6],H=r[10],ee=r[14],Y=r[3],re=r[7],ae=r[11],ce=r[15];return s[0]=a*L+o*v+l*U+u*Y,s[4]=a*C+o*A+l*Z+u*re,s[8]=a*q+o*F+l*H+u*ae,s[12]=a*K+o*ne+l*ee+u*ce,s[1]=c*L+f*v+h*U+m*Y,s[5]=c*C+f*A+h*Z+m*re,s[9]=c*q+f*F+h*H+m*ae,s[13]=c*K+f*ne+h*ee+m*ce,s[2]=M*L+y*v+p*U+d*Y,s[6]=M*C+y*A+p*Z+d*re,s[10]=M*q+y*F+p*H+d*ae,s[14]=M*K+y*ne+p*ee+d*ce,s[3]=b*L+S*v+E*U+P*Y,s[7]=b*C+S*A+E*Z+P*re,s[11]=b*q+S*F+E*H+P*ae,s[15]=b*K+S*ne+E*ee+P*ce,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],u=e[13],c=e[2],f=e[6],h=e[10],m=e[14],M=e[3],y=e[7],p=e[11],d=e[15];return M*(+s*l*f-r*u*f-s*o*h+i*u*h+r*o*m-i*l*m)+y*(+t*l*m-t*u*h+s*a*h-r*a*m+r*u*c-s*l*c)+p*(+t*u*f-t*o*m-s*a*f+i*a*m+s*o*c-i*u*c)+d*(-r*o*c-t*l*f+t*o*h+r*a*f-i*a*h+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8],f=e[9],h=e[10],m=e[11],M=e[12],y=e[13],p=e[14],d=e[15],b=f*p*u-y*h*u+y*l*m-o*p*m-f*l*d+o*h*d,S=M*h*u-c*p*u-M*l*m+a*p*m+c*l*d-a*h*d,E=c*y*u-M*f*u+M*o*m-a*y*m-c*o*d+a*f*d,P=M*f*l-c*y*l-M*o*h+a*y*h+c*o*p-a*f*p,L=t*b+i*S+r*E+s*P;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/L;return e[0]=b*C,e[1]=(y*h*s-f*p*s-y*r*m+i*p*m+f*r*d-i*h*d)*C,e[2]=(o*p*s-y*l*s+y*r*u-i*p*u-o*r*d+i*l*d)*C,e[3]=(f*l*s-o*h*s-f*r*u+i*h*u+o*r*m-i*l*m)*C,e[4]=S*C,e[5]=(c*p*s-M*h*s+M*r*m-t*p*m-c*r*d+t*h*d)*C,e[6]=(M*l*s-a*p*s-M*r*u+t*p*u+a*r*d-t*l*d)*C,e[7]=(a*h*s-c*l*s+c*r*u-t*h*u-a*r*m+t*l*m)*C,e[8]=E*C,e[9]=(M*f*s-c*y*s-M*i*m+t*y*m+c*i*d-t*f*d)*C,e[10]=(a*y*s-M*o*s+M*i*u-t*y*u-a*i*d+t*o*d)*C,e[11]=(c*o*s-a*f*s-c*i*u+t*f*u+a*i*m-t*o*m)*C,e[12]=P*C,e[13]=(c*y*r-M*f*r+M*i*h-t*y*h-c*i*p+t*f*p)*C,e[14]=(M*o*r-a*y*r-M*i*l+t*y*l+a*i*p-t*o*p)*C,e[15]=(a*f*r-c*o*r+c*i*l-t*f*l-a*i*h+t*o*h)*C,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,u=s*a,c=s*o;return this.set(u*a+i,u*o-r*l,u*l+r*o,0,u*o+r*l,c*o+i,c*l-r*a,0,u*l-r*o,c*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,u=s+s,c=a+a,f=o+o,h=s*u,m=s*c,M=s*f,y=a*c,p=a*f,d=o*f,b=l*u,S=l*c,E=l*f,P=i.x,L=i.y,C=i.z;return r[0]=(1-(y+d))*P,r[1]=(m+E)*P,r[2]=(M-S)*P,r[3]=0,r[4]=(m-E)*L,r[5]=(1-(h+d))*L,r[6]=(p+b)*L,r[7]=0,r[8]=(M+S)*C,r[9]=(p-b)*C,r[10]=(1-(h+y))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Yi.set(r[0],r[1],r[2]).length();const a=Yi.set(r[4],r[5],r[6]).length(),o=Yi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],un.copy(this);const u=1/s,c=1/a,f=1/o;return un.elements[0]*=u,un.elements[1]*=u,un.elements[2]*=u,un.elements[4]*=c,un.elements[5]*=c,un.elements[6]*=c,un.elements[8]*=f,un.elements[9]*=f,un.elements[10]*=f,t.setFromRotationMatrix(un),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=qn){const l=this.elements,u=2*s/(t-e),c=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r);let m,M;if(o===qn)m=-(a+s)/(a-s),M=-2*a*s/(a-s);else if(o===to)m=-a/(a-s),M=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=c,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=M,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=qn){const l=this.elements,u=1/(t-e),c=1/(i-r),f=1/(a-s),h=(t+e)*u,m=(i+r)*c;let M,y;if(o===qn)M=(a+s)*f,y=-2*f;else if(o===to)M=s*f,y=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=y,l[14]=-M,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Yi=new G,un=new At,yg=new G(0,0,0),Eg=new G(1,1,1),ri=new G,Ss=new G,Yt=new G,zc=new At,Hc=new rs;class Eo{constructor(e=0,t=0,i=0,r=Eo.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],u=r[5],c=r[9],f=r[2],h=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Wt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Wt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Wt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-c,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return zc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Hc.setFromEuler(this),this.setFromQuaternion(Hc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Eo.DEFAULT_ORDER="XYZ";class rd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let bg=0;const Gc=new G,ji=new rs,On=new At,Ms=new G,Pr=new G,Tg=new G,Ag=new rs,Vc=new G(1,0,0),kc=new G(0,1,0),Wc=new G(0,0,1),wg={type:"added"},Rg={type:"removed"};class Zt extends Mr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bg++}),this.uuid=is(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Zt.DEFAULT_UP.clone();const e=new G,t=new Eo,i=new rs,r=new G(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new At},normalMatrix:{value:new $e}}),this.matrix=new At,this.matrixWorld=new At,this.matrixAutoUpdate=Zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ji.setFromAxisAngle(e,t),this.quaternion.multiply(ji),this}rotateOnWorldAxis(e,t){return ji.setFromAxisAngle(e,t),this.quaternion.premultiply(ji),this}rotateX(e){return this.rotateOnAxis(Vc,e)}rotateY(e){return this.rotateOnAxis(kc,e)}rotateZ(e){return this.rotateOnAxis(Wc,e)}translateOnAxis(e,t){return Gc.copy(e).applyQuaternion(this.quaternion),this.position.add(Gc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Vc,e)}translateY(e){return this.translateOnAxis(kc,e)}translateZ(e){return this.translateOnAxis(Wc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(On.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ms.copy(e):Ms.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Pr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?On.lookAt(Pr,Ms,this.up):On.lookAt(Ms,Pr,this.up),this.quaternion.setFromRotationMatrix(On),r&&(On.extractRotation(r.matrixWorld),ji.setFromRotationMatrix(On),this.quaternion.premultiply(ji.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(wg)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Rg)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),On.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),On.multiply(e.parent.matrixWorld)),e.applyMatrix4(On),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pr,e,Tg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pr,Ag,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),u=a(e.textures),c=a(e.images),f=a(e.shapes),h=a(e.skeletons),m=a(e.animations),M=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),M.length>0&&(i.nodes=M)}return i.object=r,i;function a(o){const l=[];for(const u in o){const c=o[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Zt.DEFAULT_UP=new G(0,1,0);Zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const fn=new G,Bn=new G,oa=new G,zn=new G,Ki=new G,Zi=new G,Xc=new G,aa=new G,la=new G,ca=new G;class An{constructor(e=new G,t=new G,i=new G){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),fn.subVectors(e,t),r.cross(fn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){fn.subVectors(r,t),Bn.subVectors(i,t),oa.subVectors(e,t);const a=fn.dot(fn),o=fn.dot(Bn),l=fn.dot(oa),u=Bn.dot(Bn),c=Bn.dot(oa),f=a*u-o*o;if(f===0)return s.set(0,0,0),null;const h=1/f,m=(u*l-o*c)*h,M=(a*c-o*l)*h;return s.set(1-m-M,M,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,zn)===null?!1:zn.x>=0&&zn.y>=0&&zn.x+zn.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,zn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,zn.x),l.addScaledVector(a,zn.y),l.addScaledVector(o,zn.z),l)}static isFrontFacing(e,t,i,r){return fn.subVectors(i,t),Bn.subVectors(e,t),fn.cross(Bn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fn.subVectors(this.c,this.b),Bn.subVectors(this.a,this.b),fn.cross(Bn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return An.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return An.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return An.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return An.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return An.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Ki.subVectors(r,i),Zi.subVectors(s,i),aa.subVectors(e,i);const l=Ki.dot(aa),u=Zi.dot(aa);if(l<=0&&u<=0)return t.copy(i);la.subVectors(e,r);const c=Ki.dot(la),f=Zi.dot(la);if(c>=0&&f<=c)return t.copy(r);const h=l*f-c*u;if(h<=0&&l>=0&&c<=0)return a=l/(l-c),t.copy(i).addScaledVector(Ki,a);ca.subVectors(e,s);const m=Ki.dot(ca),M=Zi.dot(ca);if(M>=0&&m<=M)return t.copy(s);const y=m*u-l*M;if(y<=0&&u>=0&&M<=0)return o=u/(u-M),t.copy(i).addScaledVector(Zi,o);const p=c*M-m*f;if(p<=0&&f-c>=0&&m-M>=0)return Xc.subVectors(s,r),o=(f-c)/(f-c+(m-M)),t.copy(r).addScaledVector(Xc,o);const d=1/(p+y+h);return a=y*d,o=h*d,t.copy(i).addScaledVector(Ki,a).addScaledVector(Zi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const sd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},si={h:0,s:0,l:0},ys={h:0,s:0,l:0};function ua(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class it{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=bt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=nt.workingColorSpace){return this.r=e,this.g=t,this.b=i,nt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=nt.workingColorSpace){if(e=hg(e,1),t=Wt(t,0,1),i=Wt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=ua(a,s,e+1/3),this.g=ua(a,s,e),this.b=ua(a,s,e-1/3)}return nt.toWorkingColorSpace(this,r),this}setStyle(e,t=bt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=bt){const i=sd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mr(e.r),this.g=mr(e.g),this.b=mr(e.b),this}copyLinearToSRGB(e){return this.r=Jo(e.r),this.g=Jo(e.g),this.b=Jo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bt){return nt.fromWorkingColorSpace(Ct.copy(this),e),Math.round(Wt(Ct.r*255,0,255))*65536+Math.round(Wt(Ct.g*255,0,255))*256+Math.round(Wt(Ct.b*255,0,255))}getHexString(e=bt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.fromWorkingColorSpace(Ct.copy(this),t);const i=Ct.r,r=Ct.g,s=Ct.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,u;const c=(o+a)/2;if(o===a)l=0,u=0;else{const f=a-o;switch(u=c<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=nt.workingColorSpace){return nt.fromWorkingColorSpace(Ct.copy(this),t),e.r=Ct.r,e.g=Ct.g,e.b=Ct.b,e}getStyle(e=bt){nt.fromWorkingColorSpace(Ct.copy(this),e);const t=Ct.r,i=Ct.g,r=Ct.b;return e!==bt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(si),this.setHSL(si.h+e,si.s+t,si.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(si),e.getHSL(ys);const i=Ko(si.h,ys.h,t),r=Ko(si.s,ys.s,t),s=Ko(si.l,ys.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ct=new it;it.NAMES=sd;let Cg=0;class os extends Mr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cg++}),this.uuid=is(),this.name="",this.type="Material",this.blending=hr,this.side=hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Da,this.blendDst=Ua,this.blendEquation=Pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new it(0,0,0),this.blendAlpha=0,this.depthFunc=Zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ki,this.stencilZFail=ki,this.stencilZPass=ki,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==hr&&(i.blending=this.blending),this.side!==hi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Da&&(i.blendSrc=this.blendSrc),this.blendDst!==Ua&&(i.blendDst=this.blendDst),this.blendEquation!==Pi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Zs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ki&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ki&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ki&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class od extends os{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Vf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gt=new G,Es=new je;class Rn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Dc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=$n,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return pr("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Es.fromBufferAttribute(this,t),Es.applyMatrix3(e),this.setXY(t,Es.x,Es.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix3(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix4(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyNormalMatrix(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.transformDirection(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Rr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Gt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Rr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Rr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Rr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Rr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),i=Gt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),i=Gt(i,this.array),r=Gt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),i=Gt(i,this.array),r=Gt(r,this.array),s=Gt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Dc&&(e.usage=this.usage),e}}class ad extends Rn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class ld extends Rn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Cn extends Rn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Lg=0;const tn=new At,fa=new Zt,Ji=new G,jt=new ss,Dr=new ss,St=new G;class mi extends Mr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lg++}),this.uuid=is(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ed(e)?ld:ad)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new $e().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return tn.makeRotationFromQuaternion(e),this.applyMatrix4(tn),this}rotateX(e){return tn.makeRotationX(e),this.applyMatrix4(tn),this}rotateY(e){return tn.makeRotationY(e),this.applyMatrix4(tn),this}rotateZ(e){return tn.makeRotationZ(e),this.applyMatrix4(tn),this}translate(e,t,i){return tn.makeTranslation(e,t,i),this.applyMatrix4(tn),this}scale(e,t,i){return tn.makeScale(e,t,i),this.applyMatrix4(tn),this}lookAt(e){return fa.lookAt(e),fa.updateMatrix(),this.applyMatrix4(fa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ji).negate(),this.translate(Ji.x,Ji.y,Ji.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Cn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ss);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];jt.setFromBufferAttribute(s),this.morphTargetsRelative?(St.addVectors(this.boundingBox.min,jt.min),this.boundingBox.expandByPoint(St),St.addVectors(this.boundingBox.max,jt.max),this.boundingBox.expandByPoint(St)):(this.boundingBox.expandByPoint(jt.min),this.boundingBox.expandByPoint(jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new G,1/0);return}if(e){const i=this.boundingSphere.center;if(jt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Dr.setFromBufferAttribute(o),this.morphTargetsRelative?(St.addVectors(jt.min,Dr.min),jt.expandByPoint(St),St.addVectors(jt.max,Dr.max),jt.expandByPoint(St)):(jt.expandByPoint(Dr.min),jt.expandByPoint(Dr.max))}jt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)St.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(St));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let u=0,c=o.count;u<c;u++)St.fromBufferAttribute(o,u),l&&(Ji.fromBufferAttribute(e,u),St.add(Ji)),r=Math.max(r,i.distanceToSquared(St))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Rn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let v=0;v<o;v++)u[v]=new G,c[v]=new G;const f=new G,h=new G,m=new G,M=new je,y=new je,p=new je,d=new G,b=new G;function S(v,A,F){f.fromArray(r,v*3),h.fromArray(r,A*3),m.fromArray(r,F*3),M.fromArray(a,v*2),y.fromArray(a,A*2),p.fromArray(a,F*2),h.sub(f),m.sub(f),y.sub(M),p.sub(M);const ne=1/(y.x*p.y-p.x*y.y);isFinite(ne)&&(d.copy(h).multiplyScalar(p.y).addScaledVector(m,-y.y).multiplyScalar(ne),b.copy(m).multiplyScalar(y.x).addScaledVector(h,-p.x).multiplyScalar(ne),u[v].add(d),u[A].add(d),u[F].add(d),c[v].add(b),c[A].add(b),c[F].add(b))}let E=this.groups;E.length===0&&(E=[{start:0,count:i.length}]);for(let v=0,A=E.length;v<A;++v){const F=E[v],ne=F.start,U=F.count;for(let Z=ne,H=ne+U;Z<H;Z+=3)S(i[Z+0],i[Z+1],i[Z+2])}const P=new G,L=new G,C=new G,q=new G;function K(v){C.fromArray(s,v*3),q.copy(C);const A=u[v];P.copy(A),P.sub(C.multiplyScalar(C.dot(A))).normalize(),L.crossVectors(q,A);const ne=L.dot(c[v])<0?-1:1;l[v*4]=P.x,l[v*4+1]=P.y,l[v*4+2]=P.z,l[v*4+3]=ne}for(let v=0,A=E.length;v<A;++v){const F=E[v],ne=F.start,U=F.count;for(let Z=ne,H=ne+U;Z<H;Z+=3)K(i[Z+0]),K(i[Z+1]),K(i[Z+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Rn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new G,s=new G,a=new G,o=new G,l=new G,u=new G,c=new G,f=new G;if(e)for(let h=0,m=e.count;h<m;h+=3){const M=e.getX(h+0),y=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(t,M),s.fromBufferAttribute(t,y),a.fromBufferAttribute(t,p),c.subVectors(a,s),f.subVectors(r,s),c.cross(f),o.fromBufferAttribute(i,M),l.fromBufferAttribute(i,y),u.fromBufferAttribute(i,p),o.add(c),l.add(c),u.add(c),i.setXYZ(M,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(p,u.x,u.y,u.z)}else for(let h=0,m=t.count;h<m;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),c.subVectors(a,s),f.subVectors(r,s),c.cross(f),i.setXYZ(h+0,c.x,c.y,c.z),i.setXYZ(h+1,c.x,c.y,c.z),i.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)St.fromBufferAttribute(e,t),St.normalize(),e.setXYZ(t,St.x,St.y,St.z)}toNonIndexed(){function e(o,l){const u=o.array,c=o.itemSize,f=o.normalized,h=new u.constructor(l.length*c);let m=0,M=0;for(let y=0,p=l.length;y<p;y++){o.isInterleavedBufferAttribute?m=l[y]*o.data.stride+o.offset:m=l[y]*c;for(let d=0;d<c;d++)h[M++]=u[m++]}return new Rn(h,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new mi,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],u=e(l,i);t.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const l=[],u=s[o];for(let c=0,f=u.length;c<f;c++){const h=u[c],m=e(h,i);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const u=a[o];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,h=u.length;f<h;f++){const m=u[f];c.push(m.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],f=s[u];for(let h=0,m=f.length;h<m;h++)c.push(f[h].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,c=a.length;u<c;u++){const f=a[u];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const $c=new At,bi=new Mg,bs=new sl,qc=new G,Qi=new G,er=new G,tr=new G,da=new G,Ts=new G,As=new je,ws=new je,Rs=new je,Yc=new G,jc=new G,Kc=new G,Cs=new G,Ls=new G;class mn extends Zt{constructor(e=new mi,t=new od){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Ts.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=o[l],f=s[l];c!==0&&(da.fromBufferAttribute(f,e),a?Ts.addScaledVector(da,c):Ts.addScaledVector(da.sub(t),c))}t.add(Ts)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),bs.copy(i.boundingSphere),bs.applyMatrix4(s),bi.copy(e.ray).recast(e.near),!(bs.containsPoint(bi.origin)===!1&&(bi.intersectSphere(bs,qc)===null||bi.origin.distanceToSquared(qc)>(e.far-e.near)**2))&&($c.copy(s).invert(),bi.copy(e.ray).applyMatrix4($c),!(i.boundingBox!==null&&bi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,bi)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,f=s.attributes.normal,h=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let M=0,y=h.length;M<y;M++){const p=h[M],d=a[p.materialIndex],b=Math.max(p.start,m.start),S=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let E=b,P=S;E<P;E+=3){const L=o.getX(E),C=o.getX(E+1),q=o.getX(E+2);r=Ps(this,d,e,i,u,c,f,L,C,q),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const M=Math.max(0,m.start),y=Math.min(o.count,m.start+m.count);for(let p=M,d=y;p<d;p+=3){const b=o.getX(p),S=o.getX(p+1),E=o.getX(p+2);r=Ps(this,a,e,i,u,c,f,b,S,E),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let M=0,y=h.length;M<y;M++){const p=h[M],d=a[p.materialIndex],b=Math.max(p.start,m.start),S=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let E=b,P=S;E<P;E+=3){const L=E,C=E+1,q=E+2;r=Ps(this,d,e,i,u,c,f,L,C,q),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const M=Math.max(0,m.start),y=Math.min(l.count,m.start+m.count);for(let p=M,d=y;p<d;p+=3){const b=p,S=p+1,E=p+2;r=Ps(this,a,e,i,u,c,f,b,S,E),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function Pg(n,e,t,i,r,s,a,o){let l;if(e.side===Xt?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===hi,o),l===null)return null;Ls.copy(o),Ls.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(Ls);return u<t.near||u>t.far?null:{distance:u,point:Ls.clone(),object:n}}function Ps(n,e,t,i,r,s,a,o,l,u){n.getVertexPosition(o,Qi),n.getVertexPosition(l,er),n.getVertexPosition(u,tr);const c=Pg(n,e,t,i,Qi,er,tr,Cs);if(c){r&&(As.fromBufferAttribute(r,o),ws.fromBufferAttribute(r,l),Rs.fromBufferAttribute(r,u),c.uv=An.getInterpolation(Cs,Qi,er,tr,As,ws,Rs,new je)),s&&(As.fromBufferAttribute(s,o),ws.fromBufferAttribute(s,l),Rs.fromBufferAttribute(s,u),c.uv1=An.getInterpolation(Cs,Qi,er,tr,As,ws,Rs,new je),c.uv2=c.uv1),a&&(Yc.fromBufferAttribute(a,o),jc.fromBufferAttribute(a,l),Kc.fromBufferAttribute(a,u),c.normal=An.getInterpolation(Cs,Qi,er,tr,Yc,jc,Kc,new G),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const f={a:o,b:l,c:u,normal:new G,materialIndex:0};An.getNormal(Qi,er,tr,f.normal),c.face=f}return c}class as extends mi{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],u=[],c=[],f=[];let h=0,m=0;M("z","y","x",-1,-1,i,t,e,a,s,0),M("z","y","x",1,-1,i,t,-e,a,s,1),M("x","z","y",1,1,e,i,t,r,a,2),M("x","z","y",1,-1,e,i,-t,r,a,3),M("x","y","z",1,-1,e,t,i,r,s,4),M("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Cn(u,3)),this.setAttribute("normal",new Cn(c,3)),this.setAttribute("uv",new Cn(f,2));function M(y,p,d,b,S,E,P,L,C,q,K){const v=E/C,A=P/q,F=E/2,ne=P/2,U=L/2,Z=C+1,H=q+1;let ee=0,Y=0;const re=new G;for(let ae=0;ae<H;ae++){const ce=ae*A-ne;for(let de=0;de<Z;de++){const Ie=de*v-F;re[y]=Ie*b,re[p]=ce*S,re[d]=U,u.push(re.x,re.y,re.z),re[y]=0,re[p]=0,re[d]=L>0?1:-1,c.push(re.x,re.y,re.z),f.push(de/C),f.push(1-ae/q),ee+=1}}for(let ae=0;ae<q;ae++)for(let ce=0;ce<C;ce++){const de=h+ce+Z*ae,Ie=h+ce+Z*(ae+1),J=h+(ce+1)+Z*(ae+1),le=h+(ce+1)+Z*ae;l.push(de,Ie,le),l.push(Ie,J,le),Y+=6}o.addGroup(m,Y,K),m+=Y,h+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new as(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Sr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function It(n){const e={};for(let t=0;t<n.length;t++){const i=Sr(n[t]);for(const r in i)e[r]=i[r]}return e}function Dg(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function cd(n){return n.getRenderTarget()===null?n.outputColorSpace:nt.workingColorSpace}const Ug={clone:Sr,merge:It};var Ig=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ng=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pi extends os{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ig,this.fragmentShader=Ng,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Sr(e.uniforms),this.uniformsGroups=Dg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class ud extends Zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new At,this.projectionMatrix=new At,this.projectionMatrixInverse=new At,this.coordinateSystem=qn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const oi=new G,Zc=new je,Jc=new je;class rn extends ud{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=za*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(jo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return za*2*Math.atan(Math.tan(jo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(oi.x,oi.y).multiplyScalar(-e/oi.z),oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(oi.x,oi.y).multiplyScalar(-e/oi.z)}getViewSize(e,t){return this.getViewBounds(e,Zc,Jc),t.subVectors(Jc,Zc)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(jo*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/u,r*=a.width/l,i*=a.height/u}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const nr=-90,ir=1;class Fg extends Zt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new rn(nr,ir,e,t);r.layers=this.layers,this.add(r);const s=new rn(nr,ir,e,t);s.layers=this.layers,this.add(s);const a=new rn(nr,ir,e,t);a.layers=this.layers,this.add(a);const o=new rn(nr,ir,e,t);o.layers=this.layers,this.add(o);const l=new rn(nr,ir,e,t);l.layers=this.layers,this.add(l);const u=new rn(nr,ir,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const u of t)this.remove(u);if(e===qn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===to)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,u,c]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,u),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(t,c),e.setRenderTarget(f,h,m),e.xr.enabled=M,i.texture.needsPMREMUpdate=!0}}class fd extends $t{constructor(e,t,i,r,s,a,o,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:_r,super(e,t,i,r,s,a,o,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Og extends Hi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(pr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===zi?bt:sn),this.texture=new fd(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:kt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new as(5,5,5),s=new pi({name:"CubemapFromEquirect",uniforms:Sr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Xt,blending:ci});s.uniforms.tEquirect.value=t;const a=new mn(r,s),o=t.minFilter;return t.minFilter===Ui&&(t.minFilter=kt),new Fg(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const ha=new G,Bg=new G,zg=new $e;class wi{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=ha.subVectors(i,t).cross(Bg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ha),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||zg.getNormalMatrix(e),r=this.coplanarPoint(ha).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ti=new sl,Ds=new G;class dd{constructor(e=new wi,t=new wi,i=new wi,r=new wi,s=new wi,a=new wi){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=qn){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],u=r[4],c=r[5],f=r[6],h=r[7],m=r[8],M=r[9],y=r[10],p=r[11],d=r[12],b=r[13],S=r[14],E=r[15];if(i[0].setComponents(l-s,h-u,p-m,E-d).normalize(),i[1].setComponents(l+s,h+u,p+m,E+d).normalize(),i[2].setComponents(l+a,h+c,p+M,E+b).normalize(),i[3].setComponents(l-a,h-c,p-M,E-b).normalize(),i[4].setComponents(l-o,h-f,p-y,E-S).normalize(),t===qn)i[5].setComponents(l+o,h+f,p+y,E+S).normalize();else if(t===to)i[5].setComponents(o,f,y,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ti.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ti.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ti)}intersectsSprite(e){return Ti.center.set(0,0,0),Ti.radius=.7071067811865476,Ti.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ti)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ds.x=r.normal.x>0?e.max.x:e.min.x,Ds.y=r.normal.y>0?e.max.y:e.min.y,Ds.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ds)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function hd(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Hg(n,e){const t=e.isWebGL2,i=new WeakMap;function r(u,c){const f=u.array,h=u.usage,m=f.byteLength,M=n.createBuffer();n.bindBuffer(c,M),n.bufferData(c,f,h),u.onUploadCallback();let y;if(f instanceof Float32Array)y=n.FLOAT;else if(f instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)y=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)y=n.SHORT;else if(f instanceof Uint32Array)y=n.UNSIGNED_INT;else if(f instanceof Int32Array)y=n.INT;else if(f instanceof Int8Array)y=n.BYTE;else if(f instanceof Uint8Array)y=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)y=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:M,type:y,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version,size:m}}function s(u,c,f){const h=c.array,m=c._updateRange,M=c.updateRanges;if(n.bindBuffer(f,u),m.count===-1&&M.length===0&&n.bufferSubData(f,0,h),M.length!==0){for(let y=0,p=M.length;y<p;y++){const d=M[y];t?n.bufferSubData(f,d.start*h.BYTES_PER_ELEMENT,h,d.start,d.count):n.bufferSubData(f,d.start*h.BYTES_PER_ELEMENT,h.subarray(d.start,d.start+d.count))}c.clearUpdateRanges()}m.count!==-1&&(t?n.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):n.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),c.onUploadCallback()}function a(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function o(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(n.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const h=i.get(u);(!h||h.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const f=i.get(u);if(f===void 0)i.set(u,r(u,c));else if(f.version<u.version){if(f.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,u,c),f.version=u.version}}return{get:a,remove:o,update:l}}class bo extends mi{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),u=o+1,c=l+1,f=e/o,h=t/l,m=[],M=[],y=[],p=[];for(let d=0;d<c;d++){const b=d*h-a;for(let S=0;S<u;S++){const E=S*f-s;M.push(E,-b,0),y.push(0,0,1),p.push(S/o),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let b=0;b<o;b++){const S=b+u*d,E=b+u*(d+1),P=b+1+u*(d+1),L=b+1+u*d;m.push(S,E,L),m.push(E,P,L)}this.setIndex(m),this.setAttribute("position",new Cn(M,3)),this.setAttribute("normal",new Cn(y,3)),this.setAttribute("uv",new Cn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bo(e.width,e.height,e.widthSegments,e.heightSegments)}}var Gg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vg=`#ifdef USE_ALPHAHASH
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
#endif`,kg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Wg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$g=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qg=`#ifdef USE_AOMAP
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
#endif`,Yg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jg=`#ifdef USE_BATCHING
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
#endif`,Kg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Zg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Jg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,e_=`#ifdef USE_IRIDESCENCE
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
#endif`,t_=`#ifdef USE_BUMPMAP
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
#endif`,n_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,i_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,r_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,s_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,o_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,a_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,l_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,c_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,u_=`#define PI 3.141592653589793
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
} // validated`,f_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,d_=`vec3 transformedNormal = objectNormal;
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
#endif`,h_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,p_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,m_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,g_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,__="gl_FragColor = linearToOutputTexel( gl_FragColor );",v_=`
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
}`,x_=`#ifdef USE_ENVMAP
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
#endif`,S_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,M_=`#ifdef USE_ENVMAP
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
#endif`,y_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,E_=`#ifdef USE_ENVMAP
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
#endif`,b_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,T_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,A_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,w_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,R_=`#ifdef USE_GRADIENTMAP
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
}`,C_=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,L_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,P_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,D_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,U_=`uniform bool receiveShadow;
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
#endif`,I_=`#ifdef USE_ENVMAP
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
#endif`,N_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,F_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,O_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,B_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,z_=`PhysicalMaterial material;
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
#endif`,H_=`struct PhysicalMaterial {
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
}`,G_=`
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
#endif`,V_=`#if defined( RE_IndirectDiffuse )
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
#endif`,k_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,W_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,X_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,q_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Y_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,j_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,K_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Z_=`#if defined( USE_POINTS_UV )
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
#endif`,J_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Q_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ev=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tv=`#ifdef USE_MORPHNORMALS
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
#endif`,nv=`#ifdef USE_MORPHTARGETS
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
#endif`,iv=`#ifdef USE_MORPHTARGETS
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
#endif`,rv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,sv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ov=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,av=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cv=`#ifdef USE_NORMALMAP
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
#endif`,uv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,gv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_v=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Mv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ev=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Tv=`float getShadowMask() {
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
}`,Av=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wv=`#ifdef USE_SKINNING
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
#endif`,Rv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Cv=`#ifdef USE_SKINNING
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
#endif`,Lv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Pv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Dv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Uv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Iv=`#ifdef USE_TRANSMISSION
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
#endif`,Nv=`#ifdef USE_TRANSMISSION
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
#endif`,Fv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ov=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Hv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Gv=`uniform sampler2D t2D;
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
}`,Vv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Wv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$v=`#include <common>
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
}`,qv=`#if DEPTH_PACKING == 3200
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
}`,Yv=`#define DISTANCE
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
}`,jv=`#define DISTANCE
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
}`,Kv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jv=`uniform float scale;
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
}`,Qv=`uniform vec3 diffuse;
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
}`,ex=`#include <common>
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
}`,tx=`uniform vec3 diffuse;
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
}`,nx=`#define LAMBERT
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
}`,ix=`#define LAMBERT
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
}`,rx=`#define MATCAP
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
}`,sx=`#define MATCAP
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
}`,ox=`#define NORMAL
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
}`,ax=`#define NORMAL
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
}`,lx=`#define PHONG
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
}`,cx=`#define PHONG
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
}`,ux=`#define STANDARD
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
}`,fx=`#define STANDARD
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
}`,dx=`#define TOON
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
}`,hx=`#define TOON
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
}`,px=`uniform float size;
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
}`,mx=`uniform vec3 diffuse;
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
}`,gx=`#include <common>
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
}`,_x=`uniform vec3 color;
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
}`,vx=`uniform float rotation;
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
}`,xx=`uniform vec3 diffuse;
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
}`,Ve={alphahash_fragment:Gg,alphahash_pars_fragment:Vg,alphamap_fragment:kg,alphamap_pars_fragment:Wg,alphatest_fragment:Xg,alphatest_pars_fragment:$g,aomap_fragment:qg,aomap_pars_fragment:Yg,batching_pars_vertex:jg,batching_vertex:Kg,begin_vertex:Zg,beginnormal_vertex:Jg,bsdfs:Qg,iridescence_fragment:e_,bumpmap_pars_fragment:t_,clipping_planes_fragment:n_,clipping_planes_pars_fragment:i_,clipping_planes_pars_vertex:r_,clipping_planes_vertex:s_,color_fragment:o_,color_pars_fragment:a_,color_pars_vertex:l_,color_vertex:c_,common:u_,cube_uv_reflection_fragment:f_,defaultnormal_vertex:d_,displacementmap_pars_vertex:h_,displacementmap_vertex:p_,emissivemap_fragment:m_,emissivemap_pars_fragment:g_,colorspace_fragment:__,colorspace_pars_fragment:v_,envmap_fragment:x_,envmap_common_pars_fragment:S_,envmap_pars_fragment:M_,envmap_pars_vertex:y_,envmap_physical_pars_fragment:I_,envmap_vertex:E_,fog_vertex:b_,fog_pars_vertex:T_,fog_fragment:A_,fog_pars_fragment:w_,gradientmap_pars_fragment:R_,lightmap_fragment:C_,lightmap_pars_fragment:L_,lights_lambert_fragment:P_,lights_lambert_pars_fragment:D_,lights_pars_begin:U_,lights_toon_fragment:N_,lights_toon_pars_fragment:F_,lights_phong_fragment:O_,lights_phong_pars_fragment:B_,lights_physical_fragment:z_,lights_physical_pars_fragment:H_,lights_fragment_begin:G_,lights_fragment_maps:V_,lights_fragment_end:k_,logdepthbuf_fragment:W_,logdepthbuf_pars_fragment:X_,logdepthbuf_pars_vertex:$_,logdepthbuf_vertex:q_,map_fragment:Y_,map_pars_fragment:j_,map_particle_fragment:K_,map_particle_pars_fragment:Z_,metalnessmap_fragment:J_,metalnessmap_pars_fragment:Q_,morphcolor_vertex:ev,morphnormal_vertex:tv,morphtarget_pars_vertex:nv,morphtarget_vertex:iv,normal_fragment_begin:rv,normal_fragment_maps:sv,normal_pars_fragment:ov,normal_pars_vertex:av,normal_vertex:lv,normalmap_pars_fragment:cv,clearcoat_normal_fragment_begin:uv,clearcoat_normal_fragment_maps:fv,clearcoat_pars_fragment:dv,iridescence_pars_fragment:hv,opaque_fragment:pv,packing:mv,premultiplied_alpha_fragment:gv,project_vertex:_v,dithering_fragment:vv,dithering_pars_fragment:xv,roughnessmap_fragment:Sv,roughnessmap_pars_fragment:Mv,shadowmap_pars_fragment:yv,shadowmap_pars_vertex:Ev,shadowmap_vertex:bv,shadowmask_pars_fragment:Tv,skinbase_vertex:Av,skinning_pars_vertex:wv,skinning_vertex:Rv,skinnormal_vertex:Cv,specularmap_fragment:Lv,specularmap_pars_fragment:Pv,tonemapping_fragment:Dv,tonemapping_pars_fragment:Uv,transmission_fragment:Iv,transmission_pars_fragment:Nv,uv_pars_fragment:Fv,uv_pars_vertex:Ov,uv_vertex:Bv,worldpos_vertex:zv,background_vert:Hv,background_frag:Gv,backgroundCube_vert:Vv,backgroundCube_frag:kv,cube_vert:Wv,cube_frag:Xv,depth_vert:$v,depth_frag:qv,distanceRGBA_vert:Yv,distanceRGBA_frag:jv,equirect_vert:Kv,equirect_frag:Zv,linedashed_vert:Jv,linedashed_frag:Qv,meshbasic_vert:ex,meshbasic_frag:tx,meshlambert_vert:nx,meshlambert_frag:ix,meshmatcap_vert:rx,meshmatcap_frag:sx,meshnormal_vert:ox,meshnormal_frag:ax,meshphong_vert:lx,meshphong_frag:cx,meshphysical_vert:ux,meshphysical_frag:fx,meshtoon_vert:dx,meshtoon_frag:hx,points_vert:px,points_frag:mx,shadow_vert:gx,shadow_frag:_x,sprite_vert:vx,sprite_frag:xx},me={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},bn={basic:{uniforms:It([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:It([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new it(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:It([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:It([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:It([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new it(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:It([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:It([me.points,me.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:It([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:It([me.common,me.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:It([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:It([me.sprite,me.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:It([me.common,me.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:It([me.lights,me.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};bn.physical={uniforms:It([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const Us={r:0,b:0,g:0};function Sx(n,e,t,i,r,s,a){const o=new it(0);let l=s===!0?0:1,u,c,f=null,h=0,m=null;function M(p,d){let b=!1,S=d.isScene===!0?d.background:null;S&&S.isTexture&&(S=(d.backgroundBlurriness>0?t:e).get(S)),S===null?y(o,l):S&&S.isColor&&(y(S,1),b=!0);const E=n.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||b)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),S&&(S.isCubeTexture||S.mapping===Mo)?(c===void 0&&(c=new mn(new as(1,1,1),new pi({name:"BackgroundCubeMaterial",uniforms:Sr(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:Xt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(P,L,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=nt.getTransfer(S.colorSpace)!==ut,(f!==S||h!==S.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,f=S,h=S.version,m=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(u===void 0&&(u=new mn(new bo(2,2),new pi({name:"BackgroundMaterial",uniforms:Sr(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:hi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=S,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=nt.getTransfer(S.colorSpace)!==ut,S.matrixAutoUpdate===!0&&S.updateMatrix(),u.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||h!==S.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,f=S,h=S.version,m=n.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null))}function y(p,d){p.getRGB(Us,cd(n)),i.buffers.color.setClear(Us.r,Us.g,Us.b,d,a)}return{getClearColor:function(){return o},setClearColor:function(p,d=1){o.set(p),l=d,y(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,y(o,l)},render:M}}function Mx(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=p(null);let u=l,c=!1;function f(U,Z,H,ee,Y){let re=!1;if(a){const ae=y(ee,H,Z);u!==ae&&(u=ae,m(u.object)),re=d(U,ee,H,Y),re&&b(U,ee,H,Y)}else{const ae=Z.wireframe===!0;(u.geometry!==ee.id||u.program!==H.id||u.wireframe!==ae)&&(u.geometry=ee.id,u.program=H.id,u.wireframe=ae,re=!0)}Y!==null&&t.update(Y,n.ELEMENT_ARRAY_BUFFER),(re||c)&&(c=!1,q(U,Z,H,ee),Y!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function h(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function m(U){return i.isWebGL2?n.bindVertexArray(U):s.bindVertexArrayOES(U)}function M(U){return i.isWebGL2?n.deleteVertexArray(U):s.deleteVertexArrayOES(U)}function y(U,Z,H){const ee=H.wireframe===!0;let Y=o[U.id];Y===void 0&&(Y={},o[U.id]=Y);let re=Y[Z.id];re===void 0&&(re={},Y[Z.id]=re);let ae=re[ee];return ae===void 0&&(ae=p(h()),re[ee]=ae),ae}function p(U){const Z=[],H=[],ee=[];for(let Y=0;Y<r;Y++)Z[Y]=0,H[Y]=0,ee[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:H,attributeDivisors:ee,object:U,attributes:{},index:null}}function d(U,Z,H,ee){const Y=u.attributes,re=Z.attributes;let ae=0;const ce=H.getAttributes();for(const de in ce)if(ce[de].location>=0){const J=Y[de];let le=re[de];if(le===void 0&&(de==="instanceMatrix"&&U.instanceMatrix&&(le=U.instanceMatrix),de==="instanceColor"&&U.instanceColor&&(le=U.instanceColor)),J===void 0||J.attribute!==le||le&&J.data!==le.data)return!0;ae++}return u.attributesNum!==ae||u.index!==ee}function b(U,Z,H,ee){const Y={},re=Z.attributes;let ae=0;const ce=H.getAttributes();for(const de in ce)if(ce[de].location>=0){let J=re[de];J===void 0&&(de==="instanceMatrix"&&U.instanceMatrix&&(J=U.instanceMatrix),de==="instanceColor"&&U.instanceColor&&(J=U.instanceColor));const le={};le.attribute=J,J&&J.data&&(le.data=J.data),Y[de]=le,ae++}u.attributes=Y,u.attributesNum=ae,u.index=ee}function S(){const U=u.newAttributes;for(let Z=0,H=U.length;Z<H;Z++)U[Z]=0}function E(U){P(U,0)}function P(U,Z){const H=u.newAttributes,ee=u.enabledAttributes,Y=u.attributeDivisors;H[U]=1,ee[U]===0&&(n.enableVertexAttribArray(U),ee[U]=1),Y[U]!==Z&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](U,Z),Y[U]=Z)}function L(){const U=u.newAttributes,Z=u.enabledAttributes;for(let H=0,ee=Z.length;H<ee;H++)Z[H]!==U[H]&&(n.disableVertexAttribArray(H),Z[H]=0)}function C(U,Z,H,ee,Y,re,ae){ae===!0?n.vertexAttribIPointer(U,Z,H,Y,re):n.vertexAttribPointer(U,Z,H,ee,Y,re)}function q(U,Z,H,ee){if(i.isWebGL2===!1&&(U.isInstancedMesh||ee.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;S();const Y=ee.attributes,re=H.getAttributes(),ae=Z.defaultAttributeValues;for(const ce in re){const de=re[ce];if(de.location>=0){let Ie=Y[ce];if(Ie===void 0&&(ce==="instanceMatrix"&&U.instanceMatrix&&(Ie=U.instanceMatrix),ce==="instanceColor"&&U.instanceColor&&(Ie=U.instanceColor)),Ie!==void 0){const J=Ie.normalized,le=Ie.itemSize,ve=t.get(Ie);if(ve===void 0)continue;const Te=ve.buffer,we=ve.type,Se=ve.bytesPerElement,qe=i.isWebGL2===!0&&(we===n.INT||we===n.UNSIGNED_INT||Ie.gpuType===Wf);if(Ie.isInterleavedBufferAttribute){const Oe=Ie.data,_=Oe.stride,D=Ie.offset;if(Oe.isInstancedInterleavedBuffer){for(let N=0;N<de.locationSize;N++)P(de.location+N,Oe.meshPerAttribute);U.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=Oe.meshPerAttribute*Oe.count)}else for(let N=0;N<de.locationSize;N++)E(de.location+N);n.bindBuffer(n.ARRAY_BUFFER,Te);for(let N=0;N<de.locationSize;N++)C(de.location+N,le/de.locationSize,we,J,_*Se,(D+le/de.locationSize*N)*Se,qe)}else{if(Ie.isInstancedBufferAttribute){for(let Oe=0;Oe<de.locationSize;Oe++)P(de.location+Oe,Ie.meshPerAttribute);U.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=Ie.meshPerAttribute*Ie.count)}else for(let Oe=0;Oe<de.locationSize;Oe++)E(de.location+Oe);n.bindBuffer(n.ARRAY_BUFFER,Te);for(let Oe=0;Oe<de.locationSize;Oe++)C(de.location+Oe,le/de.locationSize,we,J,le*Se,le/de.locationSize*Oe*Se,qe)}}else if(ae!==void 0){const J=ae[ce];if(J!==void 0)switch(J.length){case 2:n.vertexAttrib2fv(de.location,J);break;case 3:n.vertexAttrib3fv(de.location,J);break;case 4:n.vertexAttrib4fv(de.location,J);break;default:n.vertexAttrib1fv(de.location,J)}}}}L()}function K(){F();for(const U in o){const Z=o[U];for(const H in Z){const ee=Z[H];for(const Y in ee)M(ee[Y].object),delete ee[Y];delete Z[H]}delete o[U]}}function v(U){if(o[U.id]===void 0)return;const Z=o[U.id];for(const H in Z){const ee=Z[H];for(const Y in ee)M(ee[Y].object),delete ee[Y];delete Z[H]}delete o[U.id]}function A(U){for(const Z in o){const H=o[Z];if(H[U.id]===void 0)continue;const ee=H[U.id];for(const Y in ee)M(ee[Y].object),delete ee[Y];delete H[U.id]}}function F(){ne(),c=!0,u!==l&&(u=l,m(u.object))}function ne(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:F,resetDefaultState:ne,dispose:K,releaseStatesOfGeometry:v,releaseStatesOfProgram:A,initAttributes:S,enableAttribute:E,disableUnusedAttributes:L}}function yx(n,e,t,i){const r=i.isWebGL2;let s;function a(c){s=c}function o(c,f){n.drawArrays(s,c,f),t.update(f,s,1)}function l(c,f,h){if(h===0)return;let m,M;if(r)m=n,M="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),M="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[M](s,c,f,h),t.update(f,s,h)}function u(c,f,h){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let M=0;M<h;M++)this.render(c[M],f[M]);else{m.multiDrawArraysWEBGL(s,c,0,f,0,h);let M=0;for(let y=0;y<h;y++)M+=f[y];t.update(M,s,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=u}function Ex(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const u=a||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),M=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),y=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),d=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=h>0,E=a||e.has("OES_texture_float"),P=S&&E,L=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:c,maxTextures:f,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:M,maxAttributes:y,maxVertexUniforms:p,maxVaryings:d,maxFragmentUniforms:b,vertexTextures:S,floatFragmentTextures:E,floatVertexTextures:P,maxSamples:L}}function bx(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new wi,o=new $e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const m=f.length!==0||h||i!==0||r;return r=h,i=f.length,m},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=c(f,h,0)},this.setState=function(f,h,m){const M=f.clippingPlanes,y=f.clipIntersection,p=f.clipShadows,d=n.get(f);if(!r||M===null||M.length===0||s&&!p)s?c(null):u();else{const b=s?0:i,S=b*4;let E=d.clippingState||null;l.value=E,E=c(M,h,S,m);for(let P=0;P!==S;++P)E[P]=t[P];d.clippingState=E,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=b}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,h,m,M){const y=f!==null?f.length:0;let p=null;if(y!==0){if(p=l.value,M!==!0||p===null){const d=m+y*4,b=h.matrixWorldInverse;o.getNormalMatrix(b),(p===null||p.length<d)&&(p=new Float32Array(d));for(let S=0,E=m;S!==y;++S,E+=4)a.copy(f[S]).applyMatrix4(b,o),a.normal.toArray(p,E),p[E+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,p}}function Tx(n){let e=new WeakMap;function t(a,o){return o===Ia?a.mapping=_r:o===Na&&(a.mapping=vr),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ia||o===Na)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const u=new Og(l.height);return u.fromEquirectangularTexture(n,a),e.set(a,u),a.addEventListener("dispose",r),t(u.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Ax extends ud{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=c*this.view.offsetY,l=o-c*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const or=4,Qc=[.125,.215,.35,.446,.526,.582],Di=20,pa=new Ax,eu=new it;let ma=null,ga=0,_a=0;const Ri=(1+Math.sqrt(5))/2,rr=1/Ri,tu=[new G(1,1,1),new G(-1,1,1),new G(1,1,-1),new G(-1,1,-1),new G(0,Ri,rr),new G(0,Ri,-rr),new G(rr,0,Ri),new G(-rr,0,Ri),new G(Ri,rr,0),new G(-Ri,rr,0)];class nu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){ma=this._renderer.getRenderTarget(),ga=this._renderer.getActiveCubeFace(),_a=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=su(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ru(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ma,ga,_a),e.scissorTest=!1,Is(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===_r||e.mapping===vr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ma=this._renderer.getRenderTarget(),ga=this._renderer.getActiveCubeFace(),_a=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:kt,minFilter:kt,generateMipmaps:!1,type:Jr,format:hn,colorSpace:Jn,depthBuffer:!1},r=iu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=iu(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=wx(s)),this._blurMaterial=Rx(s,e,t)}return r}_compileMaterial(e){const t=new mn(this._lodPlanes[0],e);this._renderer.compile(t,pa)}_sceneToCubeUV(e,t,i,r){const o=new rn(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,h=c.toneMapping;c.getClearColor(eu),c.toneMapping=ui,c.autoClear=!1;const m=new od({name:"PMREM.Background",side:Xt,depthWrite:!1,depthTest:!1}),M=new mn(new as,m);let y=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,y=!0):(m.color.copy(eu),y=!0);for(let d=0;d<6;d++){const b=d%3;b===0?(o.up.set(0,l[d],0),o.lookAt(u[d],0,0)):b===1?(o.up.set(0,0,l[d]),o.lookAt(0,u[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,u[d]));const S=this._cubeSize;Is(r,b*S,d>2?S:0,S,S),c.setRenderTarget(r),y&&c.render(M,o),c.render(e,o)}M.geometry.dispose(),M.material.dispose(),c.toneMapping=h,c.autoClear=f,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===_r||e.mapping===vr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=su()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ru());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new mn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Is(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,pa)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=tu[(r-1)%tu.length];this._blur(e,r-1,r,s,a)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new mn(this._lodPlanes[r],u),h=u.uniforms,m=this._sizeLods[i]-1,M=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Di-1),y=s/M,p=isFinite(s)?1+Math.floor(c*y):Di;p>Di&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Di}`);const d=[];let b=0;for(let C=0;C<Di;++C){const q=C/y,K=Math.exp(-q*q/2);d.push(K),C===0?b+=K:C<p&&(b+=2*K)}for(let C=0;C<d.length;C++)d[C]=d[C]/b;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=d,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:S}=this;h.dTheta.value=M,h.mipInt.value=S-i;const E=this._sizeLods[r],P=3*E*(r>S-or?r-S+or:0),L=4*(this._cubeSize-E);Is(t,P,L,3*E,2*E),l.setRenderTarget(t),l.render(f,pa)}}function wx(n){const e=[],t=[],i=[];let r=n;const s=n-or+1+Qc.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-or?l=Qc[a-n+or-1]:a===0&&(l=0),i.push(l);const u=1/(o-2),c=-u,f=1+u,h=[c,c,f,c,f,f,c,c,f,f,c,f],m=6,M=6,y=3,p=2,d=1,b=new Float32Array(y*M*m),S=new Float32Array(p*M*m),E=new Float32Array(d*M*m);for(let L=0;L<m;L++){const C=L%3*2/3-1,q=L>2?0:-1,K=[C,q,0,C+2/3,q,0,C+2/3,q+1,0,C,q,0,C+2/3,q+1,0,C,q+1,0];b.set(K,y*M*L),S.set(h,p*M*L);const v=[L,L,L,L,L,L];E.set(v,d*M*L)}const P=new mi;P.setAttribute("position",new Rn(b,y)),P.setAttribute("uv",new Rn(S,p)),P.setAttribute("faceIndex",new Rn(E,d)),e.push(P),r>or&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function iu(n,e,t){const i=new Hi(n,e,t);return i.texture.mapping=Mo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Is(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Rx(n,e,t){const i=new Float32Array(Di),r=new G(0,1,0);return new pi({name:"SphericalGaussianBlur",defines:{n:Di,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ol(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function ru(){return new pi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ol(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function su(){return new pi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ol(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function ol(){return`

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
	`}function Cx(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,u=l===Ia||l===Na,c=l===_r||l===vr;if(u||c)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return t===null&&(t=new nu(n)),f=u?t.fromEquirectangular(o,f):t.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(u&&f&&f.height>0||c&&f&&r(f)){t===null&&(t=new nu(n));const h=u?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,h),o.addEventListener("dispose",s),h.texture}else return null}}}return o}function r(o){let l=0;const u=6;for(let c=0;c<u;c++)o[c]!==void 0&&l++;return l===u}function s(o){const l=o.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Lx(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Px(n,e,t,i){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const M in h.attributes)e.remove(h.attributes[M]);for(const M in h.morphAttributes){const y=h.morphAttributes[M];for(let p=0,d=y.length;p<d;p++)e.remove(y[p])}h.removeEventListener("dispose",a),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const M in h)e.update(h[M],n.ARRAY_BUFFER);const m=f.morphAttributes;for(const M in m){const y=m[M];for(let p=0,d=y.length;p<d;p++)e.update(y[p],n.ARRAY_BUFFER)}}function u(f){const h=[],m=f.index,M=f.attributes.position;let y=0;if(m!==null){const b=m.array;y=m.version;for(let S=0,E=b.length;S<E;S+=3){const P=b[S+0],L=b[S+1],C=b[S+2];h.push(P,L,L,C,C,P)}}else if(M!==void 0){const b=M.array;y=M.version;for(let S=0,E=b.length/3-1;S<E;S+=3){const P=S+0,L=S+1,C=S+2;h.push(P,L,L,C,C,P)}}else return;const p=new(ed(h)?ld:ad)(h,1);p.version=y;const d=s.get(f);d&&e.remove(d),s.set(f,p)}function c(f){const h=s.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&u(f)}else u(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:c}}function Dx(n,e,t,i){const r=i.isWebGL2;let s;function a(m){s=m}let o,l;function u(m){o=m.type,l=m.bytesPerElement}function c(m,M){n.drawElements(s,M,o,m*l),t.update(M,s,1)}function f(m,M,y){if(y===0)return;let p,d;if(r)p=n,d="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](s,M,o,m*l,y),t.update(M,s,y)}function h(m,M,y){if(y===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<y;d++)this.render(m[d]/l,M[d]);else{p.multiDrawElementsWEBGL(s,M,0,o,m,0,y);let d=0;for(let b=0;b<y;b++)d+=M[b];t.update(d,s,1)}}this.setMode=a,this.setIndex=u,this.render=c,this.renderInstances=f,this.renderMultiDraw=h}function Ux(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Ix(n,e){return n[0]-e[0]}function Nx(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Fx(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,a=new Tt,o=[];for(let u=0;u<8;u++)o[u]=[u,0];function l(u,c,f){const h=u.morphTargetInfluences;if(e.isWebGL2===!0){const M=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,y=M!==void 0?M.length:0;let p=s.get(c);if(p===void 0||p.count!==y){let Z=function(){ne.dispose(),s.delete(c),c.removeEventListener("dispose",Z)};var m=Z;p!==void 0&&p.texture.dispose();const S=c.morphAttributes.position!==void 0,E=c.morphAttributes.normal!==void 0,P=c.morphAttributes.color!==void 0,L=c.morphAttributes.position||[],C=c.morphAttributes.normal||[],q=c.morphAttributes.color||[];let K=0;S===!0&&(K=1),E===!0&&(K=2),P===!0&&(K=3);let v=c.attributes.position.count*K,A=1;v>e.maxTextureSize&&(A=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);const F=new Float32Array(v*A*4*y),ne=new id(F,v,A,y);ne.type=$n,ne.needsUpdate=!0;const U=K*4;for(let H=0;H<y;H++){const ee=L[H],Y=C[H],re=q[H],ae=v*A*4*H;for(let ce=0;ce<ee.count;ce++){const de=ce*U;S===!0&&(a.fromBufferAttribute(ee,ce),F[ae+de+0]=a.x,F[ae+de+1]=a.y,F[ae+de+2]=a.z,F[ae+de+3]=0),E===!0&&(a.fromBufferAttribute(Y,ce),F[ae+de+4]=a.x,F[ae+de+5]=a.y,F[ae+de+6]=a.z,F[ae+de+7]=0),P===!0&&(a.fromBufferAttribute(re,ce),F[ae+de+8]=a.x,F[ae+de+9]=a.y,F[ae+de+10]=a.z,F[ae+de+11]=re.itemSize===4?a.w:1)}}p={count:y,texture:ne,size:new je(v,A)},s.set(c,p),c.addEventListener("dispose",Z)}let d=0;for(let S=0;S<h.length;S++)d+=h[S];const b=c.morphTargetsRelative?1:1-d;f.getUniforms().setValue(n,"morphTargetBaseInfluence",b),f.getUniforms().setValue(n,"morphTargetInfluences",h),f.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}else{const M=h===void 0?0:h.length;let y=i[c.id];if(y===void 0||y.length!==M){y=[];for(let E=0;E<M;E++)y[E]=[E,0];i[c.id]=y}for(let E=0;E<M;E++){const P=y[E];P[0]=E,P[1]=h[E]}y.sort(Nx);for(let E=0;E<8;E++)E<M&&y[E][1]?(o[E][0]=y[E][0],o[E][1]=y[E][1]):(o[E][0]=Number.MAX_SAFE_INTEGER,o[E][1]=0);o.sort(Ix);const p=c.morphAttributes.position,d=c.morphAttributes.normal;let b=0;for(let E=0;E<8;E++){const P=o[E],L=P[0],C=P[1];L!==Number.MAX_SAFE_INTEGER&&C?(p&&c.getAttribute("morphTarget"+E)!==p[L]&&c.setAttribute("morphTarget"+E,p[L]),d&&c.getAttribute("morphNormal"+E)!==d[L]&&c.setAttribute("morphNormal"+E,d[L]),r[E]=C,b+=C):(p&&c.hasAttribute("morphTarget"+E)===!0&&c.deleteAttribute("morphTarget"+E),d&&c.hasAttribute("morphNormal"+E)===!0&&c.deleteAttribute("morphNormal"+E),r[E]=0)}const S=c.morphTargetsRelative?1:1-b;f.getUniforms().setValue(n,"morphTargetBaseInfluence",S),f.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function Ox(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,f=e.get(l,c);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return f}function a(){r=new WeakMap}function o(l){const u=l.target;u.removeEventListener("dispose",o),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:a}}class pd extends $t{constructor(e,t,i,r,s,a,o,l,u,c){if(c=c!==void 0?c:Bi,c!==Bi&&c!==xr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Bi&&(i=li),i===void 0&&c===xr&&(i=Oi),super(null,r,s,a,o,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Nt,this.minFilter=l!==void 0?l:Nt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const md=new $t,gd=new pd(1,1);gd.compareFunction=Qf;const _d=new id,vd=new xg,xd=new fd,ou=[],au=[],lu=new Float32Array(16),cu=new Float32Array(9),uu=new Float32Array(4);function yr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=ou[r];if(s===void 0&&(s=new Float32Array(r),ou[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function _t(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function vt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function To(n,e){let t=au[e];t===void 0&&(t=new Int32Array(e),au[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Bx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function zx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;n.uniform2fv(this.addr,e),vt(t,e)}}function Hx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(_t(t,e))return;n.uniform3fv(this.addr,e),vt(t,e)}}function Gx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;n.uniform4fv(this.addr,e),vt(t,e)}}function Vx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(_t(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),vt(t,e)}else{if(_t(t,i))return;uu.set(i),n.uniformMatrix2fv(this.addr,!1,uu),vt(t,i)}}function kx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(_t(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),vt(t,e)}else{if(_t(t,i))return;cu.set(i),n.uniformMatrix3fv(this.addr,!1,cu),vt(t,i)}}function Wx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(_t(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),vt(t,e)}else{if(_t(t,i))return;lu.set(i),n.uniformMatrix4fv(this.addr,!1,lu),vt(t,i)}}function Xx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function $x(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;n.uniform2iv(this.addr,e),vt(t,e)}}function qx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;n.uniform3iv(this.addr,e),vt(t,e)}}function Yx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;n.uniform4iv(this.addr,e),vt(t,e)}}function jx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Kx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;n.uniform2uiv(this.addr,e),vt(t,e)}}function Zx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;n.uniform3uiv(this.addr,e),vt(t,e)}}function Jx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;n.uniform4uiv(this.addr,e),vt(t,e)}}function Qx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?gd:md;t.setTexture2D(e||s,r)}function e0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||vd,r)}function t0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||xd,r)}function n0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||_d,r)}function i0(n){switch(n){case 5126:return Bx;case 35664:return zx;case 35665:return Hx;case 35666:return Gx;case 35674:return Vx;case 35675:return kx;case 35676:return Wx;case 5124:case 35670:return Xx;case 35667:case 35671:return $x;case 35668:case 35672:return qx;case 35669:case 35673:return Yx;case 5125:return jx;case 36294:return Kx;case 36295:return Zx;case 36296:return Jx;case 35678:case 36198:case 36298:case 36306:case 35682:return Qx;case 35679:case 36299:case 36307:return e0;case 35680:case 36300:case 36308:case 36293:return t0;case 36289:case 36303:case 36311:case 36292:return n0}}function r0(n,e){n.uniform1fv(this.addr,e)}function s0(n,e){const t=yr(e,this.size,2);n.uniform2fv(this.addr,t)}function o0(n,e){const t=yr(e,this.size,3);n.uniform3fv(this.addr,t)}function a0(n,e){const t=yr(e,this.size,4);n.uniform4fv(this.addr,t)}function l0(n,e){const t=yr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function c0(n,e){const t=yr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function u0(n,e){const t=yr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function f0(n,e){n.uniform1iv(this.addr,e)}function d0(n,e){n.uniform2iv(this.addr,e)}function h0(n,e){n.uniform3iv(this.addr,e)}function p0(n,e){n.uniform4iv(this.addr,e)}function m0(n,e){n.uniform1uiv(this.addr,e)}function g0(n,e){n.uniform2uiv(this.addr,e)}function _0(n,e){n.uniform3uiv(this.addr,e)}function v0(n,e){n.uniform4uiv(this.addr,e)}function x0(n,e,t){const i=this.cache,r=e.length,s=To(t,r);_t(i,s)||(n.uniform1iv(this.addr,s),vt(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||md,s[a])}function S0(n,e,t){const i=this.cache,r=e.length,s=To(t,r);_t(i,s)||(n.uniform1iv(this.addr,s),vt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||vd,s[a])}function M0(n,e,t){const i=this.cache,r=e.length,s=To(t,r);_t(i,s)||(n.uniform1iv(this.addr,s),vt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||xd,s[a])}function y0(n,e,t){const i=this.cache,r=e.length,s=To(t,r);_t(i,s)||(n.uniform1iv(this.addr,s),vt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||_d,s[a])}function E0(n){switch(n){case 5126:return r0;case 35664:return s0;case 35665:return o0;case 35666:return a0;case 35674:return l0;case 35675:return c0;case 35676:return u0;case 5124:case 35670:return f0;case 35667:case 35671:return d0;case 35668:case 35672:return h0;case 35669:case 35673:return p0;case 5125:return m0;case 36294:return g0;case 36295:return _0;case 36296:return v0;case 35678:case 36198:case 36298:case 36306:case 35682:return x0;case 35679:case 36299:case 36307:return S0;case 35680:case 36300:case 36308:case 36293:return M0;case 36289:case 36303:case 36311:case 36292:return y0}}class b0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=i0(t.type)}}class T0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=E0(t.type)}}class A0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const va=/(\w+)(\])?(\[|\.)?/g;function fu(n,e){n.seq.push(e),n.map[e.id]=e}function w0(n,e,t){const i=n.name,r=i.length;for(va.lastIndex=0;;){const s=va.exec(i),a=va.lastIndex;let o=s[1];const l=s[2]==="]",u=s[3];if(l&&(o=o|0),u===void 0||u==="["&&a+2===r){fu(t,u===void 0?new b0(o,n,e):new T0(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new A0(o),fu(t,f)),t=f}}}class zs{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);w0(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function du(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const R0=37297;let C0=0;function L0(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function P0(n){const e=nt.getPrimaries(nt.workingColorSpace),t=nt.getPrimaries(n);let i;switch(e===t?i="":e===eo&&t===Qs?i="LinearDisplayP3ToLinearSRGB":e===Qs&&t===eo&&(i="LinearSRGBToLinearDisplayP3"),n){case Jn:case yo:return[i,"LinearTransferOETF"];case bt:case rl:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function hu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+L0(n.getShaderSource(e),a)}else return r}function D0(n,e){const t=P0(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function U0(n,e){let t;switch(e){case km:t="Linear";break;case Wm:t="Reinhard";break;case Xm:t="OptimizedCineon";break;case $m:t="ACESFilmic";break;case Ym:t="AgX";break;case qm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function I0(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.alphaToCoverage||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ar).join(`
`)}function N0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ar).join(`
`)}function F0(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function O0(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function ar(n){return n!==""}function pu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function mu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const B0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ga(n){return n.replace(B0,H0)}const z0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function H0(n,e){let t=Ve[e];if(t===void 0){const i=z0.get(e);if(i!==void 0)t=Ve[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ga(t)}const G0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gu(n){return n.replace(G0,V0)}function V0(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function _u(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function k0(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Gf?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===_m?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Hn&&(e="SHADOWMAP_TYPE_VSM"),e}function W0(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case _r:case vr:e="ENVMAP_TYPE_CUBE";break;case Mo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function X0(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case vr:e="ENVMAP_MODE_REFRACTION";break}return e}function $0(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Vf:e="ENVMAP_BLENDING_MULTIPLY";break;case Gm:e="ENVMAP_BLENDING_MIX";break;case Vm:e="ENVMAP_BLENDING_ADD";break}return e}function q0(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Y0(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=k0(t),u=W0(t),c=X0(t),f=$0(t),h=q0(t),m=t.isWebGL2?"":I0(t),M=N0(t),y=F0(s),p=r.createProgram();let d,b,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(ar).join(`
`),d.length>0&&(d+=`
`),b=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(ar).join(`
`),b.length>0&&(b+=`
`)):(d=[_u(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ar).join(`
`),b=[m,_u(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ui?"#define TONE_MAPPING":"",t.toneMapping!==ui?Ve.tonemapping_pars_fragment:"",t.toneMapping!==ui?U0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,D0("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ar).join(`
`)),a=Ga(a),a=pu(a,t),a=mu(a,t),o=Ga(o),o=pu(o,t),o=mu(o,t),a=gu(a),o=gu(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,d=[M,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,b=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Uc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Uc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+b);const E=S+d+a,P=S+b+o,L=du(r,r.VERTEX_SHADER,E),C=du(r,r.FRAGMENT_SHADER,P);r.attachShader(p,L),r.attachShader(p,C),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function q(F){if(n.debug.checkShaderErrors){const ne=r.getProgramInfoLog(p).trim(),U=r.getShaderInfoLog(L).trim(),Z=r.getShaderInfoLog(C).trim();let H=!0,ee=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(H=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,p,L,C);else{const Y=hu(r,L,"vertex"),re=hu(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+ne+`
`+Y+`
`+re)}else ne!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ne):(U===""||Z==="")&&(ee=!1);ee&&(F.diagnostics={runnable:H,programLog:ne,vertexShader:{log:U,prefix:d},fragmentShader:{log:Z,prefix:b}})}r.deleteShader(L),r.deleteShader(C),K=new zs(r,p),v=O0(r,p)}let K;this.getUniforms=function(){return K===void 0&&q(this),K};let v;this.getAttributes=function(){return v===void 0&&q(this),v};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=r.getProgramParameter(p,R0)),A},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=C0++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=L,this.fragmentShader=C,this}let j0=0;class K0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Z0(e),t.set(e,i)),i}}class Z0{constructor(e){this.id=j0++,this.code=e,this.usedTimes=0}}function J0(n,e,t,i,r,s,a){const o=new rd,l=new K0,u=new Set,c=[],f=r.isWebGL2,h=r.logarithmicDepthBuffer,m=r.vertexTextures;let M=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return u.add(v),v===0?"uv":`uv${v}`}function d(v,A,F,ne,U){const Z=ne.fog,H=U.geometry,ee=v.isMeshStandardMaterial?ne.environment:null,Y=(v.isMeshStandardMaterial?t:e).get(v.envMap||ee),re=Y&&Y.mapping===Mo?Y.image.height:null,ae=y[v.type];v.precision!==null&&(M=r.getMaxPrecision(v.precision),M!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",M,"instead."));const ce=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,de=ce!==void 0?ce.length:0;let Ie=0;H.morphAttributes.position!==void 0&&(Ie=1),H.morphAttributes.normal!==void 0&&(Ie=2),H.morphAttributes.color!==void 0&&(Ie=3);let J,le,ve,Te;if(ae){const ot=bn[ae];J=ot.vertexShader,le=ot.fragmentShader}else J=v.vertexShader,le=v.fragmentShader,l.update(v),ve=l.getVertexShaderID(v),Te=l.getFragmentShaderID(v);const we=n.getRenderTarget(),Se=U.isInstancedMesh===!0,qe=U.isBatchedMesh===!0,Oe=!!v.map,_=!!v.matcap,D=!!Y,N=!!v.aoMap,X=!!v.lightMap,z=!!v.bumpMap,Q=!!v.normalMap,te=!!v.displacementMap,x=!!v.emissiveMap,g=!!v.metalnessMap,w=!!v.roughnessMap,W=v.anisotropy>0,O=v.clearcoat>0,V=v.iridescence>0,oe=v.sheen>0,se=v.transmission>0,ue=W&&!!v.anisotropyMap,ge=O&&!!v.clearcoatMap,Me=O&&!!v.clearcoatNormalMap,ie=O&&!!v.clearcoatRoughnessMap,ke=V&&!!v.iridescenceMap,De=V&&!!v.iridescenceThicknessMap,Pe=oe&&!!v.sheenColorMap,Ae=oe&&!!v.sheenRoughnessMap,_e=!!v.specularMap,Re=!!v.specularColorMap,Ke=!!v.specularIntensityMap,tt=se&&!!v.transmissionMap,Ye=se&&!!v.thicknessMap,rt=!!v.gradientMap,R=!!v.alphaMap,he=v.alphaTest>0,pe=!!v.alphaHash,Ee=!!v.extensions;let Ce=ui;v.toneMapped&&(we===null||we.isXRRenderTarget===!0)&&(Ce=n.toneMapping);const et={isWebGL2:f,shaderID:ae,shaderType:v.type,shaderName:v.name,vertexShader:J,fragmentShader:le,defines:v.defines,customVertexShaderID:ve,customFragmentShaderID:Te,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:M,batching:qe,instancing:Se,instancingColor:Se&&U.instanceColor!==null,supportsVertexTextures:m,outputColorSpace:we===null?n.outputColorSpace:we.isXRRenderTarget===!0?we.texture.colorSpace:Jn,alphaToCoverage:!!v.alphaToCoverage,map:Oe,matcap:_,envMap:D,envMapMode:D&&Y.mapping,envMapCubeUVHeight:re,aoMap:N,lightMap:X,bumpMap:z,normalMap:Q,displacementMap:m&&te,emissiveMap:x,normalMapObjectSpace:Q&&v.normalMapType===sg,normalMapTangentSpace:Q&&v.normalMapType===Jf,metalnessMap:g,roughnessMap:w,anisotropy:W,anisotropyMap:ue,clearcoat:O,clearcoatMap:ge,clearcoatNormalMap:Me,clearcoatRoughnessMap:ie,iridescence:V,iridescenceMap:ke,iridescenceThicknessMap:De,sheen:oe,sheenColorMap:Pe,sheenRoughnessMap:Ae,specularMap:_e,specularColorMap:Re,specularIntensityMap:Ke,transmission:se,transmissionMap:tt,thicknessMap:Ye,gradientMap:rt,opaque:v.transparent===!1&&v.blending===hr&&v.alphaToCoverage===!1,alphaMap:R,alphaTest:he,alphaHash:pe,combine:v.combine,mapUv:Oe&&p(v.map.channel),aoMapUv:N&&p(v.aoMap.channel),lightMapUv:X&&p(v.lightMap.channel),bumpMapUv:z&&p(v.bumpMap.channel),normalMapUv:Q&&p(v.normalMap.channel),displacementMapUv:te&&p(v.displacementMap.channel),emissiveMapUv:x&&p(v.emissiveMap.channel),metalnessMapUv:g&&p(v.metalnessMap.channel),roughnessMapUv:w&&p(v.roughnessMap.channel),anisotropyMapUv:ue&&p(v.anisotropyMap.channel),clearcoatMapUv:ge&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:Me&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ke&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:De&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&p(v.sheenRoughnessMap.channel),specularMapUv:_e&&p(v.specularMap.channel),specularColorMapUv:Re&&p(v.specularColorMap.channel),specularIntensityMapUv:Ke&&p(v.specularIntensityMap.channel),transmissionMapUv:tt&&p(v.transmissionMap.channel),thicknessMapUv:Ye&&p(v.thicknessMap.channel),alphaMapUv:R&&p(v.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Q||W),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!H.attributes.uv&&(Oe||R),fog:!!Z,useFog:v.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:U.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:Ie,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&F.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ce,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Oe&&v.map.isVideoTexture===!0&&nt.getTransfer(v.map.colorSpace)===ut,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Xn,flipSided:v.side===Xt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:Ee&&v.extensions.derivatives===!0,extensionFragDepth:Ee&&v.extensions.fragDepth===!0,extensionDrawBuffers:Ee&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ee&&v.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Ee&&v.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Ee&&v.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:f||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return et.vertexUv1s=u.has(1),et.vertexUv2s=u.has(2),et.vertexUv3s=u.has(3),u.clear(),et}function b(v){const A=[];if(v.shaderID?A.push(v.shaderID):(A.push(v.customVertexShaderID),A.push(v.customFragmentShaderID)),v.defines!==void 0)for(const F in v.defines)A.push(F),A.push(v.defines[F]);return v.isRawShaderMaterial===!1&&(S(A,v),E(A,v),A.push(n.outputColorSpace)),A.push(v.customProgramCacheKey),A.join()}function S(v,A){v.push(A.precision),v.push(A.outputColorSpace),v.push(A.envMapMode),v.push(A.envMapCubeUVHeight),v.push(A.mapUv),v.push(A.alphaMapUv),v.push(A.lightMapUv),v.push(A.aoMapUv),v.push(A.bumpMapUv),v.push(A.normalMapUv),v.push(A.displacementMapUv),v.push(A.emissiveMapUv),v.push(A.metalnessMapUv),v.push(A.roughnessMapUv),v.push(A.anisotropyMapUv),v.push(A.clearcoatMapUv),v.push(A.clearcoatNormalMapUv),v.push(A.clearcoatRoughnessMapUv),v.push(A.iridescenceMapUv),v.push(A.iridescenceThicknessMapUv),v.push(A.sheenColorMapUv),v.push(A.sheenRoughnessMapUv),v.push(A.specularMapUv),v.push(A.specularColorMapUv),v.push(A.specularIntensityMapUv),v.push(A.transmissionMapUv),v.push(A.thicknessMapUv),v.push(A.combine),v.push(A.fogExp2),v.push(A.sizeAttenuation),v.push(A.morphTargetsCount),v.push(A.morphAttributeCount),v.push(A.numDirLights),v.push(A.numPointLights),v.push(A.numSpotLights),v.push(A.numSpotLightMaps),v.push(A.numHemiLights),v.push(A.numRectAreaLights),v.push(A.numDirLightShadows),v.push(A.numPointLightShadows),v.push(A.numSpotLightShadows),v.push(A.numSpotLightShadowsWithMaps),v.push(A.numLightProbes),v.push(A.shadowMapType),v.push(A.toneMapping),v.push(A.numClippingPlanes),v.push(A.numClipIntersection),v.push(A.depthPacking)}function E(v,A){o.disableAll(),A.isWebGL2&&o.enable(0),A.supportsVertexTextures&&o.enable(1),A.instancing&&o.enable(2),A.instancingColor&&o.enable(3),A.matcap&&o.enable(4),A.envMap&&o.enable(5),A.normalMapObjectSpace&&o.enable(6),A.normalMapTangentSpace&&o.enable(7),A.clearcoat&&o.enable(8),A.iridescence&&o.enable(9),A.alphaTest&&o.enable(10),A.vertexColors&&o.enable(11),A.vertexAlphas&&o.enable(12),A.vertexUv1s&&o.enable(13),A.vertexUv2s&&o.enable(14),A.vertexUv3s&&o.enable(15),A.vertexTangents&&o.enable(16),A.anisotropy&&o.enable(17),A.alphaHash&&o.enable(18),A.batching&&o.enable(19),v.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.skinning&&o.enable(4),A.morphTargets&&o.enable(5),A.morphNormals&&o.enable(6),A.morphColors&&o.enable(7),A.premultipliedAlpha&&o.enable(8),A.shadowMapEnabled&&o.enable(9),A.useLegacyLights&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.alphaToCoverage&&o.enable(20),v.push(o.mask)}function P(v){const A=y[v.type];let F;if(A){const ne=bn[A];F=Ug.clone(ne.uniforms)}else F=v.uniforms;return F}function L(v,A){let F;for(let ne=0,U=c.length;ne<U;ne++){const Z=c[ne];if(Z.cacheKey===A){F=Z,++F.usedTimes;break}}return F===void 0&&(F=new Y0(n,A,v,s),c.push(F)),F}function C(v){if(--v.usedTimes===0){const A=c.indexOf(v);c[A]=c[c.length-1],c.pop(),v.destroy()}}function q(v){l.remove(v)}function K(){l.dispose()}return{getParameters:d,getProgramCacheKey:b,getUniforms:P,acquireProgram:L,releaseProgram:C,releaseShaderCache:q,programs:c,dispose:K}}function Q0(){let n=new WeakMap;function e(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function t(s){n.delete(s)}function i(s,a,o){n.get(s)[a]=o}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function eS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function vu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function xu(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(f,h,m,M,y,p){let d=n[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:m,groupOrder:M,renderOrder:f.renderOrder,z:y,group:p},n[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=m,d.groupOrder=M,d.renderOrder=f.renderOrder,d.z=y,d.group=p),e++,d}function o(f,h,m,M,y,p){const d=a(f,h,m,M,y,p);m.transmission>0?i.push(d):m.transparent===!0?r.push(d):t.push(d)}function l(f,h,m,M,y,p){const d=a(f,h,m,M,y,p);m.transmission>0?i.unshift(d):m.transparent===!0?r.unshift(d):t.unshift(d)}function u(f,h){t.length>1&&t.sort(f||eS),i.length>1&&i.sort(h||vu),r.length>1&&r.sort(h||vu)}function c(){for(let f=e,h=n.length;f<h;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:c,sort:u}}function tS(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new xu,n.set(i,[a])):r>=s.length?(a=new xu,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function nS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new G,color:new it};break;case"SpotLight":t={position:new G,direction:new G,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new it,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new it,groundColor:new it};break;case"RectAreaLight":t={color:new it,position:new G,halfWidth:new G,halfHeight:new G};break}return n[e.id]=t,t}}}function iS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let rS=0;function sS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function oS(n,e){const t=new nS,i=iS(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new G);const s=new G,a=new At,o=new At;function l(c,f){let h=0,m=0,M=0;for(let F=0;F<9;F++)r.probe[F].set(0,0,0);let y=0,p=0,d=0,b=0,S=0,E=0,P=0,L=0,C=0,q=0,K=0;c.sort(sS);const v=f===!0?Math.PI:1;for(let F=0,ne=c.length;F<ne;F++){const U=c[F],Z=U.color,H=U.intensity,ee=U.distance,Y=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)h+=Z.r*H*v,m+=Z.g*H*v,M+=Z.b*H*v;else if(U.isLightProbe){for(let re=0;re<9;re++)r.probe[re].addScaledVector(U.sh.coefficients[re],H);K++}else if(U.isDirectionalLight){const re=t.get(U);if(re.color.copy(U.color).multiplyScalar(U.intensity*v),U.castShadow){const ae=U.shadow,ce=i.get(U);ce.shadowBias=ae.bias,ce.shadowNormalBias=ae.normalBias,ce.shadowRadius=ae.radius,ce.shadowMapSize=ae.mapSize,r.directionalShadow[y]=ce,r.directionalShadowMap[y]=Y,r.directionalShadowMatrix[y]=U.shadow.matrix,E++}r.directional[y]=re,y++}else if(U.isSpotLight){const re=t.get(U);re.position.setFromMatrixPosition(U.matrixWorld),re.color.copy(Z).multiplyScalar(H*v),re.distance=ee,re.coneCos=Math.cos(U.angle),re.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),re.decay=U.decay,r.spot[d]=re;const ae=U.shadow;if(U.map&&(r.spotLightMap[C]=U.map,C++,ae.updateMatrices(U),U.castShadow&&q++),r.spotLightMatrix[d]=ae.matrix,U.castShadow){const ce=i.get(U);ce.shadowBias=ae.bias,ce.shadowNormalBias=ae.normalBias,ce.shadowRadius=ae.radius,ce.shadowMapSize=ae.mapSize,r.spotShadow[d]=ce,r.spotShadowMap[d]=Y,L++}d++}else if(U.isRectAreaLight){const re=t.get(U);re.color.copy(Z).multiplyScalar(H),re.halfWidth.set(U.width*.5,0,0),re.halfHeight.set(0,U.height*.5,0),r.rectArea[b]=re,b++}else if(U.isPointLight){const re=t.get(U);if(re.color.copy(U.color).multiplyScalar(U.intensity*v),re.distance=U.distance,re.decay=U.decay,U.castShadow){const ae=U.shadow,ce=i.get(U);ce.shadowBias=ae.bias,ce.shadowNormalBias=ae.normalBias,ce.shadowRadius=ae.radius,ce.shadowMapSize=ae.mapSize,ce.shadowCameraNear=ae.camera.near,ce.shadowCameraFar=ae.camera.far,r.pointShadow[p]=ce,r.pointShadowMap[p]=Y,r.pointShadowMatrix[p]=U.shadow.matrix,P++}r.point[p]=re,p++}else if(U.isHemisphereLight){const re=t.get(U);re.skyColor.copy(U.color).multiplyScalar(H*v),re.groundColor.copy(U.groundColor).multiplyScalar(H*v),r.hemi[S]=re,S++}}b>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=me.LTC_FLOAT_1,r.rectAreaLTC2=me.LTC_FLOAT_2):(r.rectAreaLTC1=me.LTC_HALF_1,r.rectAreaLTC2=me.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=me.LTC_FLOAT_1,r.rectAreaLTC2=me.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=me.LTC_HALF_1,r.rectAreaLTC2=me.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=m,r.ambient[2]=M;const A=r.hash;(A.directionalLength!==y||A.pointLength!==p||A.spotLength!==d||A.rectAreaLength!==b||A.hemiLength!==S||A.numDirectionalShadows!==E||A.numPointShadows!==P||A.numSpotShadows!==L||A.numSpotMaps!==C||A.numLightProbes!==K)&&(r.directional.length=y,r.spot.length=d,r.rectArea.length=b,r.point.length=p,r.hemi.length=S,r.directionalShadow.length=E,r.directionalShadowMap.length=E,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=L,r.spotShadowMap.length=L,r.directionalShadowMatrix.length=E,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=L+C-q,r.spotLightMap.length=C,r.numSpotLightShadowsWithMaps=q,r.numLightProbes=K,A.directionalLength=y,A.pointLength=p,A.spotLength=d,A.rectAreaLength=b,A.hemiLength=S,A.numDirectionalShadows=E,A.numPointShadows=P,A.numSpotShadows=L,A.numSpotMaps=C,A.numLightProbes=K,r.version=rS++)}function u(c,f){let h=0,m=0,M=0,y=0,p=0;const d=f.matrixWorldInverse;for(let b=0,S=c.length;b<S;b++){const E=c[b];if(E.isDirectionalLight){const P=r.directional[h];P.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(d),h++}else if(E.isSpotLight){const P=r.spot[M];P.position.setFromMatrixPosition(E.matrixWorld),P.position.applyMatrix4(d),P.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(d),M++}else if(E.isRectAreaLight){const P=r.rectArea[y];P.position.setFromMatrixPosition(E.matrixWorld),P.position.applyMatrix4(d),o.identity(),a.copy(E.matrixWorld),a.premultiply(d),o.extractRotation(a),P.halfWidth.set(E.width*.5,0,0),P.halfHeight.set(0,E.height*.5,0),P.halfWidth.applyMatrix4(o),P.halfHeight.applyMatrix4(o),y++}else if(E.isPointLight){const P=r.point[m];P.position.setFromMatrixPosition(E.matrixWorld),P.position.applyMatrix4(d),m++}else if(E.isHemisphereLight){const P=r.hemi[p];P.direction.setFromMatrixPosition(E.matrixWorld),P.direction.transformDirection(d),p++}}}return{setup:l,setupView:u,state:r}}function Su(n,e){const t=new oS(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(f){i.push(f)}function o(f){r.push(f)}function l(f){t.setup(i,f)}function u(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:u,pushLight:a,pushShadow:o}}function aS(n,e){let t=new WeakMap;function i(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new Su(n,e),t.set(s,[l])):a>=o.length?(l=new Su(n,e),o.push(l)):l=o[a],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class lS extends os{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ig,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class cS extends os{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const uS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fS=`uniform sampler2D shadow_pass;
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
}`;function dS(n,e,t){let i=new dd;const r=new je,s=new je,a=new Tt,o=new lS({depthPacking:rg}),l=new cS,u={},c=t.maxTextureSize,f={[hi]:Xt,[Xt]:hi,[Xn]:Xn},h=new pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new je},radius:{value:4}},vertexShader:uS,fragmentShader:fS}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const M=new mi;M.setAttribute("position",new Rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new mn(M,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gf;let d=this.type;this.render=function(L,C,q){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||L.length===0)return;const K=n.getRenderTarget(),v=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),F=n.state;F.setBlending(ci),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const ne=d!==Hn&&this.type===Hn,U=d===Hn&&this.type!==Hn;for(let Z=0,H=L.length;Z<H;Z++){const ee=L[Z],Y=ee.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;r.copy(Y.mapSize);const re=Y.getFrameExtents();if(r.multiply(re),s.copy(Y.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/re.x),r.x=s.x*re.x,Y.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/re.y),r.y=s.y*re.y,Y.mapSize.y=s.y)),Y.map===null||ne===!0||U===!0){const ce=this.type!==Hn?{minFilter:Nt,magFilter:Nt}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Hi(r.x,r.y,ce),Y.map.texture.name=ee.name+".shadowMap",Y.camera.updateProjectionMatrix()}n.setRenderTarget(Y.map),n.clear();const ae=Y.getViewportCount();for(let ce=0;ce<ae;ce++){const de=Y.getViewport(ce);a.set(s.x*de.x,s.y*de.y,s.x*de.z,s.y*de.w),F.viewport(a),Y.updateMatrices(ee,ce),i=Y.getFrustum(),E(C,q,Y.camera,ee,this.type)}Y.isPointLightShadow!==!0&&this.type===Hn&&b(Y,q),Y.needsUpdate=!1}d=this.type,p.needsUpdate=!1,n.setRenderTarget(K,v,A)};function b(L,C){const q=e.update(y);h.defines.VSM_SAMPLES!==L.blurSamples&&(h.defines.VSM_SAMPLES=L.blurSamples,m.defines.VSM_SAMPLES=L.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Hi(r.x,r.y)),h.uniforms.shadow_pass.value=L.map.texture,h.uniforms.resolution.value=L.mapSize,h.uniforms.radius.value=L.radius,n.setRenderTarget(L.mapPass),n.clear(),n.renderBufferDirect(C,null,q,h,y,null),m.uniforms.shadow_pass.value=L.mapPass.texture,m.uniforms.resolution.value=L.mapSize,m.uniforms.radius.value=L.radius,n.setRenderTarget(L.map),n.clear(),n.renderBufferDirect(C,null,q,m,y,null)}function S(L,C,q,K){let v=null;const A=q.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(A!==void 0)v=A;else if(v=q.isPointLight===!0?l:o,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const F=v.uuid,ne=C.uuid;let U=u[F];U===void 0&&(U={},u[F]=U);let Z=U[ne];Z===void 0&&(Z=v.clone(),U[ne]=Z,C.addEventListener("dispose",P)),v=Z}if(v.visible=C.visible,v.wireframe=C.wireframe,K===Hn?v.side=C.shadowSide!==null?C.shadowSide:C.side:v.side=C.shadowSide!==null?C.shadowSide:f[C.side],v.alphaMap=C.alphaMap,v.alphaTest=C.alphaTest,v.map=C.map,v.clipShadows=C.clipShadows,v.clippingPlanes=C.clippingPlanes,v.clipIntersection=C.clipIntersection,v.displacementMap=C.displacementMap,v.displacementScale=C.displacementScale,v.displacementBias=C.displacementBias,v.wireframeLinewidth=C.wireframeLinewidth,v.linewidth=C.linewidth,q.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const F=n.properties.get(v);F.light=q}return v}function E(L,C,q,K,v){if(L.visible===!1)return;if(L.layers.test(C.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&v===Hn)&&(!L.frustumCulled||i.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,L.matrixWorld);const ne=e.update(L),U=L.material;if(Array.isArray(U)){const Z=ne.groups;for(let H=0,ee=Z.length;H<ee;H++){const Y=Z[H],re=U[Y.materialIndex];if(re&&re.visible){const ae=S(L,re,K,v);L.onBeforeShadow(n,L,C,q,ne,ae,Y),n.renderBufferDirect(q,null,ne,ae,L,Y),L.onAfterShadow(n,L,C,q,ne,ae,Y)}}}else if(U.visible){const Z=S(L,U,K,v);L.onBeforeShadow(n,L,C,q,ne,Z,null),n.renderBufferDirect(q,null,ne,Z,L,null),L.onAfterShadow(n,L,C,q,ne,Z,null)}}const F=L.children;for(let ne=0,U=F.length;ne<U;ne++)E(F[ne],C,q,K,v)}function P(L){L.target.removeEventListener("dispose",P);for(const q in u){const K=u[q],v=L.target.uuid;v in K&&(K[v].dispose(),delete K[v])}}}function hS(n,e,t){const i=t.isWebGL2;function r(){let R=!1;const he=new Tt;let pe=null;const Ee=new Tt(0,0,0,0);return{setMask:function(Ce){pe!==Ce&&!R&&(n.colorMask(Ce,Ce,Ce,Ce),pe=Ce)},setLocked:function(Ce){R=Ce},setClear:function(Ce,et,ot,yt,Jt){Jt===!0&&(Ce*=yt,et*=yt,ot*=yt),he.set(Ce,et,ot,yt),Ee.equals(he)===!1&&(n.clearColor(Ce,et,ot,yt),Ee.copy(he))},reset:function(){R=!1,pe=null,Ee.set(-1,0,0,0)}}}function s(){let R=!1,he=null,pe=null,Ee=null;return{setTest:function(Ce){Ce?Se(n.DEPTH_TEST):qe(n.DEPTH_TEST)},setMask:function(Ce){he!==Ce&&!R&&(n.depthMask(Ce),he=Ce)},setFunc:function(Ce){if(pe!==Ce){switch(Ce){case Im:n.depthFunc(n.NEVER);break;case Nm:n.depthFunc(n.ALWAYS);break;case Fm:n.depthFunc(n.LESS);break;case Zs:n.depthFunc(n.LEQUAL);break;case Om:n.depthFunc(n.EQUAL);break;case Bm:n.depthFunc(n.GEQUAL);break;case zm:n.depthFunc(n.GREATER);break;case Hm:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}pe=Ce}},setLocked:function(Ce){R=Ce},setClear:function(Ce){Ee!==Ce&&(n.clearDepth(Ce),Ee=Ce)},reset:function(){R=!1,he=null,pe=null,Ee=null}}}function a(){let R=!1,he=null,pe=null,Ee=null,Ce=null,et=null,ot=null,yt=null,Jt=null;return{setTest:function(at){R||(at?Se(n.STENCIL_TEST):qe(n.STENCIL_TEST))},setMask:function(at){he!==at&&!R&&(n.stencilMask(at),he=at)},setFunc:function(at,Dt,xn){(pe!==at||Ee!==Dt||Ce!==xn)&&(n.stencilFunc(at,Dt,xn),pe=at,Ee=Dt,Ce=xn)},setOp:function(at,Dt,xn){(et!==at||ot!==Dt||yt!==xn)&&(n.stencilOp(at,Dt,xn),et=at,ot=Dt,yt=xn)},setLocked:function(at){R=at},setClear:function(at){Jt!==at&&(n.clearStencil(at),Jt=at)},reset:function(){R=!1,he=null,pe=null,Ee=null,Ce=null,et=null,ot=null,yt=null,Jt=null}}}const o=new r,l=new s,u=new a,c=new WeakMap,f=new WeakMap;let h={},m={},M=new WeakMap,y=[],p=null,d=!1,b=null,S=null,E=null,P=null,L=null,C=null,q=null,K=new it(0,0,0),v=0,A=!1,F=null,ne=null,U=null,Z=null,H=null;const ee=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,re=0;const ae=n.getParameter(n.VERSION);ae.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(ae)[1]),Y=re>=1):ae.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(ae)[1]),Y=re>=2);let ce=null,de={};const Ie=n.getParameter(n.SCISSOR_BOX),J=n.getParameter(n.VIEWPORT),le=new Tt().fromArray(Ie),ve=new Tt().fromArray(J);function Te(R,he,pe,Ee){const Ce=new Uint8Array(4),et=n.createTexture();n.bindTexture(R,et),n.texParameteri(R,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(R,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ot=0;ot<pe;ot++)i&&(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)?n.texImage3D(he,0,n.RGBA,1,1,Ee,0,n.RGBA,n.UNSIGNED_BYTE,Ce):n.texImage2D(he+ot,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ce);return et}const we={};we[n.TEXTURE_2D]=Te(n.TEXTURE_2D,n.TEXTURE_2D,1),we[n.TEXTURE_CUBE_MAP]=Te(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(we[n.TEXTURE_2D_ARRAY]=Te(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),we[n.TEXTURE_3D]=Te(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),u.setClear(0),Se(n.DEPTH_TEST),l.setFunc(Zs),te(!1),x(Ql),Se(n.CULL_FACE),z(ci);function Se(R){h[R]!==!0&&(n.enable(R),h[R]=!0)}function qe(R){h[R]!==!1&&(n.disable(R),h[R]=!1)}function Oe(R,he){return m[R]!==he?(n.bindFramebuffer(R,he),m[R]=he,i&&(R===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=he),R===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=he)),!0):!1}function _(R,he){let pe=y,Ee=!1;if(R)if(pe=M.get(he),pe===void 0&&(pe=[],M.set(he,pe)),R.isWebGLMultipleRenderTargets){const Ce=R.texture;if(pe.length!==Ce.length||pe[0]!==n.COLOR_ATTACHMENT0){for(let et=0,ot=Ce.length;et<ot;et++)pe[et]=n.COLOR_ATTACHMENT0+et;pe.length=Ce.length,Ee=!0}}else pe[0]!==n.COLOR_ATTACHMENT0&&(pe[0]=n.COLOR_ATTACHMENT0,Ee=!0);else pe[0]!==n.BACK&&(pe[0]=n.BACK,Ee=!0);Ee&&(t.isWebGL2?n.drawBuffers(pe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(pe))}function D(R){return p!==R?(n.useProgram(R),p=R,!0):!1}const N={[Pi]:n.FUNC_ADD,[xm]:n.FUNC_SUBTRACT,[Sm]:n.FUNC_REVERSE_SUBTRACT};if(i)N[ic]=n.MIN,N[rc]=n.MAX;else{const R=e.get("EXT_blend_minmax");R!==null&&(N[ic]=R.MIN_EXT,N[rc]=R.MAX_EXT)}const X={[Mm]:n.ZERO,[ym]:n.ONE,[Em]:n.SRC_COLOR,[Da]:n.SRC_ALPHA,[Cm]:n.SRC_ALPHA_SATURATE,[wm]:n.DST_COLOR,[Tm]:n.DST_ALPHA,[bm]:n.ONE_MINUS_SRC_COLOR,[Ua]:n.ONE_MINUS_SRC_ALPHA,[Rm]:n.ONE_MINUS_DST_COLOR,[Am]:n.ONE_MINUS_DST_ALPHA,[Lm]:n.CONSTANT_COLOR,[Pm]:n.ONE_MINUS_CONSTANT_COLOR,[Dm]:n.CONSTANT_ALPHA,[Um]:n.ONE_MINUS_CONSTANT_ALPHA};function z(R,he,pe,Ee,Ce,et,ot,yt,Jt,at){if(R===ci){d===!0&&(qe(n.BLEND),d=!1);return}if(d===!1&&(Se(n.BLEND),d=!0),R!==vm){if(R!==b||at!==A){if((S!==Pi||L!==Pi)&&(n.blendEquation(n.FUNC_ADD),S=Pi,L=Pi),at)switch(R){case hr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ec:n.blendFunc(n.ONE,n.ONE);break;case tc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case nc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case hr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ec:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case tc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case nc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}E=null,P=null,C=null,q=null,K.set(0,0,0),v=0,b=R,A=at}return}Ce=Ce||he,et=et||pe,ot=ot||Ee,(he!==S||Ce!==L)&&(n.blendEquationSeparate(N[he],N[Ce]),S=he,L=Ce),(pe!==E||Ee!==P||et!==C||ot!==q)&&(n.blendFuncSeparate(X[pe],X[Ee],X[et],X[ot]),E=pe,P=Ee,C=et,q=ot),(yt.equals(K)===!1||Jt!==v)&&(n.blendColor(yt.r,yt.g,yt.b,Jt),K.copy(yt),v=Jt),b=R,A=!1}function Q(R,he){R.side===Xn?qe(n.CULL_FACE):Se(n.CULL_FACE);let pe=R.side===Xt;he&&(pe=!pe),te(pe),R.blending===hr&&R.transparent===!1?z(ci):z(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),l.setFunc(R.depthFunc),l.setTest(R.depthTest),l.setMask(R.depthWrite),o.setMask(R.colorWrite);const Ee=R.stencilWrite;u.setTest(Ee),Ee&&(u.setMask(R.stencilWriteMask),u.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),u.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),w(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?Se(n.SAMPLE_ALPHA_TO_COVERAGE):qe(n.SAMPLE_ALPHA_TO_COVERAGE)}function te(R){F!==R&&(R?n.frontFace(n.CW):n.frontFace(n.CCW),F=R)}function x(R){R!==mm?(Se(n.CULL_FACE),R!==ne&&(R===Ql?n.cullFace(n.BACK):R===gm?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):qe(n.CULL_FACE),ne=R}function g(R){R!==U&&(Y&&n.lineWidth(R),U=R)}function w(R,he,pe){R?(Se(n.POLYGON_OFFSET_FILL),(Z!==he||H!==pe)&&(n.polygonOffset(he,pe),Z=he,H=pe)):qe(n.POLYGON_OFFSET_FILL)}function W(R){R?Se(n.SCISSOR_TEST):qe(n.SCISSOR_TEST)}function O(R){R===void 0&&(R=n.TEXTURE0+ee-1),ce!==R&&(n.activeTexture(R),ce=R)}function V(R,he,pe){pe===void 0&&(ce===null?pe=n.TEXTURE0+ee-1:pe=ce);let Ee=de[pe];Ee===void 0&&(Ee={type:void 0,texture:void 0},de[pe]=Ee),(Ee.type!==R||Ee.texture!==he)&&(ce!==pe&&(n.activeTexture(pe),ce=pe),n.bindTexture(R,he||we[R]),Ee.type=R,Ee.texture=he)}function oe(){const R=de[ce];R!==void 0&&R.type!==void 0&&(n.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function se(){try{n.compressedTexImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ue(){try{n.compressedTexImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ge(){try{n.texSubImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Me(){try{n.texSubImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ie(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ke(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function De(){try{n.texStorage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Pe(){try{n.texStorage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ae(){try{n.texImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function _e(){try{n.texImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Re(R){le.equals(R)===!1&&(n.scissor(R.x,R.y,R.z,R.w),le.copy(R))}function Ke(R){ve.equals(R)===!1&&(n.viewport(R.x,R.y,R.z,R.w),ve.copy(R))}function tt(R,he){let pe=f.get(he);pe===void 0&&(pe=new WeakMap,f.set(he,pe));let Ee=pe.get(R);Ee===void 0&&(Ee=n.getUniformBlockIndex(he,R.name),pe.set(R,Ee))}function Ye(R,he){const Ee=f.get(he).get(R);c.get(he)!==Ee&&(n.uniformBlockBinding(he,Ee,R.__bindingPointIndex),c.set(he,Ee))}function rt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},ce=null,de={},m={},M=new WeakMap,y=[],p=null,d=!1,b=null,S=null,E=null,P=null,L=null,C=null,q=null,K=new it(0,0,0),v=0,A=!1,F=null,ne=null,U=null,Z=null,H=null,le.set(0,0,n.canvas.width,n.canvas.height),ve.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),u.reset()}return{buffers:{color:o,depth:l,stencil:u},enable:Se,disable:qe,bindFramebuffer:Oe,drawBuffers:_,useProgram:D,setBlending:z,setMaterial:Q,setFlipSided:te,setCullFace:x,setLineWidth:g,setPolygonOffset:w,setScissorTest:W,activeTexture:O,bindTexture:V,unbindTexture:oe,compressedTexImage2D:se,compressedTexImage3D:ue,texImage2D:Ae,texImage3D:_e,updateUBOMapping:tt,uniformBlockBinding:Ye,texStorage2D:De,texStorage3D:Pe,texSubImage2D:ge,texSubImage3D:Me,compressedTexSubImage2D:ie,compressedTexSubImage3D:ke,scissor:Re,viewport:Ke,reset:rt}}function pS(n,e,t,i,r,s,a){const o=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new WeakMap;let f;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(x,g){return m?new OffscreenCanvas(x,g):no("canvas")}function y(x,g,w,W){let O=1;if((x.width>W||x.height>W)&&(O=W/Math.max(x.width,x.height)),O<1||g===!0)if(typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&x instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&x instanceof ImageBitmap){const V=g?Ha:Math.floor,oe=V(O*x.width),se=V(O*x.height);f===void 0&&(f=M(oe,se));const ue=w?M(oe,se):f;return ue.width=oe,ue.height=se,ue.getContext("2d").drawImage(x,0,0,oe,se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+x.width+"x"+x.height+") to ("+oe+"x"+se+")."),ue}else return"data"in x&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+x.width+"x"+x.height+")."),x;return x}function p(x){return Ic(x.width)&&Ic(x.height)}function d(x){return o?!1:x.wrapS!==dn||x.wrapT!==dn||x.minFilter!==Nt&&x.minFilter!==kt}function b(x,g){return x.generateMipmaps&&g&&x.minFilter!==Nt&&x.minFilter!==kt}function S(x){n.generateMipmap(x)}function E(x,g,w,W,O=!1){if(o===!1)return g;if(x!==null){if(n[x]!==void 0)return n[x];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+x+"'")}let V=g;if(g===n.RED&&(w===n.FLOAT&&(V=n.R32F),w===n.HALF_FLOAT&&(V=n.R16F),w===n.UNSIGNED_BYTE&&(V=n.R8)),g===n.RED_INTEGER&&(w===n.UNSIGNED_BYTE&&(V=n.R8UI),w===n.UNSIGNED_SHORT&&(V=n.R16UI),w===n.UNSIGNED_INT&&(V=n.R32UI),w===n.BYTE&&(V=n.R8I),w===n.SHORT&&(V=n.R16I),w===n.INT&&(V=n.R32I)),g===n.RG&&(w===n.FLOAT&&(V=n.RG32F),w===n.HALF_FLOAT&&(V=n.RG16F),w===n.UNSIGNED_BYTE&&(V=n.RG8)),g===n.RGBA){const oe=O?Js:nt.getTransfer(W);w===n.FLOAT&&(V=n.RGBA32F),w===n.HALF_FLOAT&&(V=n.RGBA16F),w===n.UNSIGNED_BYTE&&(V=oe===ut?n.SRGB8_ALPHA8:n.RGBA8),w===n.UNSIGNED_SHORT_4_4_4_4&&(V=n.RGBA4),w===n.UNSIGNED_SHORT_5_5_5_1&&(V=n.RGB5_A1)}return(V===n.R16F||V===n.R32F||V===n.RG16F||V===n.RG32F||V===n.RGBA16F||V===n.RGBA32F)&&e.get("EXT_color_buffer_float"),V}function P(x,g,w){return b(x,w)===!0||x.isFramebufferTexture&&x.minFilter!==Nt&&x.minFilter!==kt?Math.log2(Math.max(g.width,g.height))+1:x.mipmaps!==void 0&&x.mipmaps.length>0?x.mipmaps.length:x.isCompressedTexture&&Array.isArray(x.image)?g.mipmaps.length:1}function L(x){return x===Nt||x===sc||x===wr?n.NEAREST:n.LINEAR}function C(x){const g=x.target;g.removeEventListener("dispose",C),K(g),g.isVideoTexture&&c.delete(g)}function q(x){const g=x.target;g.removeEventListener("dispose",q),A(g)}function K(x){const g=i.get(x);if(g.__webglInit===void 0)return;const w=x.source,W=h.get(w);if(W){const O=W[g.__cacheKey];O.usedTimes--,O.usedTimes===0&&v(x),Object.keys(W).length===0&&h.delete(w)}i.remove(x)}function v(x){const g=i.get(x);n.deleteTexture(g.__webglTexture);const w=x.source,W=h.get(w);delete W[g.__cacheKey],a.memory.textures--}function A(x){const g=x.texture,w=i.get(x),W=i.get(g);if(W.__webglTexture!==void 0&&(n.deleteTexture(W.__webglTexture),a.memory.textures--),x.depthTexture&&x.depthTexture.dispose(),x.isWebGLCubeRenderTarget)for(let O=0;O<6;O++){if(Array.isArray(w.__webglFramebuffer[O]))for(let V=0;V<w.__webglFramebuffer[O].length;V++)n.deleteFramebuffer(w.__webglFramebuffer[O][V]);else n.deleteFramebuffer(w.__webglFramebuffer[O]);w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[O])}else{if(Array.isArray(w.__webglFramebuffer))for(let O=0;O<w.__webglFramebuffer.length;O++)n.deleteFramebuffer(w.__webglFramebuffer[O]);else n.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let O=0;O<w.__webglColorRenderbuffer.length;O++)w.__webglColorRenderbuffer[O]&&n.deleteRenderbuffer(w.__webglColorRenderbuffer[O]);w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer)}if(x.isWebGLMultipleRenderTargets)for(let O=0,V=g.length;O<V;O++){const oe=i.get(g[O]);oe.__webglTexture&&(n.deleteTexture(oe.__webglTexture),a.memory.textures--),i.remove(g[O])}i.remove(g),i.remove(x)}let F=0;function ne(){F=0}function U(){const x=F;return x>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+x+" texture units while this GPU supports only "+r.maxTextures),F+=1,x}function Z(x){const g=[];return g.push(x.wrapS),g.push(x.wrapT),g.push(x.wrapR||0),g.push(x.magFilter),g.push(x.minFilter),g.push(x.anisotropy),g.push(x.internalFormat),g.push(x.format),g.push(x.type),g.push(x.generateMipmaps),g.push(x.premultiplyAlpha),g.push(x.flipY),g.push(x.unpackAlignment),g.push(x.colorSpace),g.join()}function H(x,g){const w=i.get(x);if(x.isVideoTexture&&Q(x),x.isRenderTargetTexture===!1&&x.version>0&&w.__version!==x.version){const W=x.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{le(w,x,g);return}}t.bindTexture(n.TEXTURE_2D,w.__webglTexture,n.TEXTURE0+g)}function ee(x,g){const w=i.get(x);if(x.version>0&&w.__version!==x.version){le(w,x,g);return}t.bindTexture(n.TEXTURE_2D_ARRAY,w.__webglTexture,n.TEXTURE0+g)}function Y(x,g){const w=i.get(x);if(x.version>0&&w.__version!==x.version){le(w,x,g);return}t.bindTexture(n.TEXTURE_3D,w.__webglTexture,n.TEXTURE0+g)}function re(x,g){const w=i.get(x);if(x.version>0&&w.__version!==x.version){ve(w,x,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+g)}const ae={[Fa]:n.REPEAT,[dn]:n.CLAMP_TO_EDGE,[Oa]:n.MIRRORED_REPEAT},ce={[Nt]:n.NEAREST,[sc]:n.NEAREST_MIPMAP_NEAREST,[wr]:n.NEAREST_MIPMAP_LINEAR,[kt]:n.LINEAR,[ko]:n.LINEAR_MIPMAP_NEAREST,[Ui]:n.LINEAR_MIPMAP_LINEAR},de={[og]:n.NEVER,[dg]:n.ALWAYS,[ag]:n.LESS,[Qf]:n.LEQUAL,[lg]:n.EQUAL,[fg]:n.GEQUAL,[cg]:n.GREATER,[ug]:n.NOTEQUAL};function Ie(x,g,w){if(g.type===$n&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===kt||g.magFilter===ko||g.magFilter===wr||g.magFilter===Ui||g.minFilter===kt||g.minFilter===ko||g.minFilter===wr||g.minFilter===Ui)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),w?(n.texParameteri(x,n.TEXTURE_WRAP_S,ae[g.wrapS]),n.texParameteri(x,n.TEXTURE_WRAP_T,ae[g.wrapT]),(x===n.TEXTURE_3D||x===n.TEXTURE_2D_ARRAY)&&n.texParameteri(x,n.TEXTURE_WRAP_R,ae[g.wrapR]),n.texParameteri(x,n.TEXTURE_MAG_FILTER,ce[g.magFilter]),n.texParameteri(x,n.TEXTURE_MIN_FILTER,ce[g.minFilter])):(n.texParameteri(x,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(x,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(x===n.TEXTURE_3D||x===n.TEXTURE_2D_ARRAY)&&n.texParameteri(x,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(g.wrapS!==dn||g.wrapT!==dn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(x,n.TEXTURE_MAG_FILTER,L(g.magFilter)),n.texParameteri(x,n.TEXTURE_MIN_FILTER,L(g.minFilter)),g.minFilter!==Nt&&g.minFilter!==kt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),g.compareFunction&&(n.texParameteri(x,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(x,n.TEXTURE_COMPARE_FUNC,de[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const W=e.get("EXT_texture_filter_anisotropic");if(g.magFilter===Nt||g.minFilter!==wr&&g.minFilter!==Ui||g.type===$n&&e.has("OES_texture_float_linear")===!1||o===!1&&g.type===Jr&&e.has("OES_texture_half_float_linear")===!1)return;(g.anisotropy>1||i.get(g).__currentAnisotropy)&&(n.texParameterf(x,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy)}}function J(x,g){let w=!1;x.__webglInit===void 0&&(x.__webglInit=!0,g.addEventListener("dispose",C));const W=g.source;let O=h.get(W);O===void 0&&(O={},h.set(W,O));const V=Z(g);if(V!==x.__cacheKey){O[V]===void 0&&(O[V]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,w=!0),O[V].usedTimes++;const oe=O[x.__cacheKey];oe!==void 0&&(O[x.__cacheKey].usedTimes--,oe.usedTimes===0&&v(g)),x.__cacheKey=V,x.__webglTexture=O[V].texture}return w}function le(x,g,w){let W=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(W=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(W=n.TEXTURE_3D);const O=J(x,g),V=g.source;t.bindTexture(W,x.__webglTexture,n.TEXTURE0+w);const oe=i.get(V);if(V.version!==oe.__version||O===!0){t.activeTexture(n.TEXTURE0+w);const se=nt.getPrimaries(nt.workingColorSpace),ue=g.colorSpace===sn?null:nt.getPrimaries(g.colorSpace),ge=g.colorSpace===sn||se===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Me=d(g)&&p(g.image)===!1;let ie=y(g.image,Me,!1,r.maxTextureSize);ie=te(g,ie);const ke=p(ie)||o,De=s.convert(g.format,g.colorSpace);let Pe=s.convert(g.type),Ae=E(g.internalFormat,De,Pe,g.colorSpace,g.isVideoTexture);Ie(W,g,ke);let _e;const Re=g.mipmaps,Ke=o&&g.isVideoTexture!==!0&&Ae!==Kf,tt=oe.__version===void 0||O===!0,Ye=V.dataReady,rt=P(g,ie,ke);if(g.isDepthTexture)Ae=n.DEPTH_COMPONENT,o?g.type===$n?Ae=n.DEPTH_COMPONENT32F:g.type===li?Ae=n.DEPTH_COMPONENT24:g.type===Oi?Ae=n.DEPTH24_STENCIL8:Ae=n.DEPTH_COMPONENT16:g.type===$n&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),g.format===Bi&&Ae===n.DEPTH_COMPONENT&&g.type!==il&&g.type!==li&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),g.type=li,Pe=s.convert(g.type)),g.format===xr&&Ae===n.DEPTH_COMPONENT&&(Ae=n.DEPTH_STENCIL,g.type!==Oi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),g.type=Oi,Pe=s.convert(g.type))),tt&&(Ke?t.texStorage2D(n.TEXTURE_2D,1,Ae,ie.width,ie.height):t.texImage2D(n.TEXTURE_2D,0,Ae,ie.width,ie.height,0,De,Pe,null));else if(g.isDataTexture)if(Re.length>0&&ke){Ke&&tt&&t.texStorage2D(n.TEXTURE_2D,rt,Ae,Re[0].width,Re[0].height);for(let R=0,he=Re.length;R<he;R++)_e=Re[R],Ke?Ye&&t.texSubImage2D(n.TEXTURE_2D,R,0,0,_e.width,_e.height,De,Pe,_e.data):t.texImage2D(n.TEXTURE_2D,R,Ae,_e.width,_e.height,0,De,Pe,_e.data);g.generateMipmaps=!1}else Ke?(tt&&t.texStorage2D(n.TEXTURE_2D,rt,Ae,ie.width,ie.height),Ye&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ie.width,ie.height,De,Pe,ie.data)):t.texImage2D(n.TEXTURE_2D,0,Ae,ie.width,ie.height,0,De,Pe,ie.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Ke&&tt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,rt,Ae,Re[0].width,Re[0].height,ie.depth);for(let R=0,he=Re.length;R<he;R++)_e=Re[R],g.format!==hn?De!==null?Ke?Ye&&t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,R,0,0,0,_e.width,_e.height,ie.depth,De,_e.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,R,Ae,_e.width,_e.height,ie.depth,0,_e.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?Ye&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,R,0,0,0,_e.width,_e.height,ie.depth,De,Pe,_e.data):t.texImage3D(n.TEXTURE_2D_ARRAY,R,Ae,_e.width,_e.height,ie.depth,0,De,Pe,_e.data)}else{Ke&&tt&&t.texStorage2D(n.TEXTURE_2D,rt,Ae,Re[0].width,Re[0].height);for(let R=0,he=Re.length;R<he;R++)_e=Re[R],g.format!==hn?De!==null?Ke?Ye&&t.compressedTexSubImage2D(n.TEXTURE_2D,R,0,0,_e.width,_e.height,De,_e.data):t.compressedTexImage2D(n.TEXTURE_2D,R,Ae,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?Ye&&t.texSubImage2D(n.TEXTURE_2D,R,0,0,_e.width,_e.height,De,Pe,_e.data):t.texImage2D(n.TEXTURE_2D,R,Ae,_e.width,_e.height,0,De,Pe,_e.data)}else if(g.isDataArrayTexture)Ke?(tt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,rt,Ae,ie.width,ie.height,ie.depth),Ye&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,De,Pe,ie.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ae,ie.width,ie.height,ie.depth,0,De,Pe,ie.data);else if(g.isData3DTexture)Ke?(tt&&t.texStorage3D(n.TEXTURE_3D,rt,Ae,ie.width,ie.height,ie.depth),Ye&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,De,Pe,ie.data)):t.texImage3D(n.TEXTURE_3D,0,Ae,ie.width,ie.height,ie.depth,0,De,Pe,ie.data);else if(g.isFramebufferTexture){if(tt)if(Ke)t.texStorage2D(n.TEXTURE_2D,rt,Ae,ie.width,ie.height);else{let R=ie.width,he=ie.height;for(let pe=0;pe<rt;pe++)t.texImage2D(n.TEXTURE_2D,pe,Ae,R,he,0,De,Pe,null),R>>=1,he>>=1}}else if(Re.length>0&&ke){Ke&&tt&&t.texStorage2D(n.TEXTURE_2D,rt,Ae,Re[0].width,Re[0].height);for(let R=0,he=Re.length;R<he;R++)_e=Re[R],Ke?Ye&&t.texSubImage2D(n.TEXTURE_2D,R,0,0,De,Pe,_e):t.texImage2D(n.TEXTURE_2D,R,Ae,De,Pe,_e);g.generateMipmaps=!1}else Ke?(tt&&t.texStorage2D(n.TEXTURE_2D,rt,Ae,ie.width,ie.height),Ye&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,De,Pe,ie)):t.texImage2D(n.TEXTURE_2D,0,Ae,De,Pe,ie);b(g,ke)&&S(W),oe.__version=V.version,g.onUpdate&&g.onUpdate(g)}x.__version=g.version}function ve(x,g,w){if(g.image.length!==6)return;const W=J(x,g),O=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,x.__webglTexture,n.TEXTURE0+w);const V=i.get(O);if(O.version!==V.__version||W===!0){t.activeTexture(n.TEXTURE0+w);const oe=nt.getPrimaries(nt.workingColorSpace),se=g.colorSpace===sn?null:nt.getPrimaries(g.colorSpace),ue=g.colorSpace===sn||oe===se?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const ge=g.isCompressedTexture||g.image[0].isCompressedTexture,Me=g.image[0]&&g.image[0].isDataTexture,ie=[];for(let R=0;R<6;R++)!ge&&!Me?ie[R]=y(g.image[R],!1,!0,r.maxCubemapSize):ie[R]=Me?g.image[R].image:g.image[R],ie[R]=te(g,ie[R]);const ke=ie[0],De=p(ke)||o,Pe=s.convert(g.format,g.colorSpace),Ae=s.convert(g.type),_e=E(g.internalFormat,Pe,Ae,g.colorSpace),Re=o&&g.isVideoTexture!==!0,Ke=V.__version===void 0||W===!0,tt=O.dataReady;let Ye=P(g,ke,De);Ie(n.TEXTURE_CUBE_MAP,g,De);let rt;if(ge){Re&&Ke&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ye,_e,ke.width,ke.height);for(let R=0;R<6;R++){rt=ie[R].mipmaps;for(let he=0;he<rt.length;he++){const pe=rt[he];g.format!==hn?Pe!==null?Re?tt&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+R,he,0,0,pe.width,pe.height,Pe,pe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+R,he,_e,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Re?tt&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+R,he,0,0,pe.width,pe.height,Pe,Ae,pe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+R,he,_e,pe.width,pe.height,0,Pe,Ae,pe.data)}}}else{rt=g.mipmaps,Re&&Ke&&(rt.length>0&&Ye++,t.texStorage2D(n.TEXTURE_CUBE_MAP,Ye,_e,ie[0].width,ie[0].height));for(let R=0;R<6;R++)if(Me){Re?tt&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+R,0,0,0,ie[R].width,ie[R].height,Pe,Ae,ie[R].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+R,0,_e,ie[R].width,ie[R].height,0,Pe,Ae,ie[R].data);for(let he=0;he<rt.length;he++){const Ee=rt[he].image[R].image;Re?tt&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+R,he+1,0,0,Ee.width,Ee.height,Pe,Ae,Ee.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+R,he+1,_e,Ee.width,Ee.height,0,Pe,Ae,Ee.data)}}else{Re?tt&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+R,0,0,0,Pe,Ae,ie[R]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+R,0,_e,Pe,Ae,ie[R]);for(let he=0;he<rt.length;he++){const pe=rt[he];Re?tt&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+R,he+1,0,0,Pe,Ae,pe.image[R]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+R,he+1,_e,Pe,Ae,pe.image[R])}}}b(g,De)&&S(n.TEXTURE_CUBE_MAP),V.__version=O.version,g.onUpdate&&g.onUpdate(g)}x.__version=g.version}function Te(x,g,w,W,O,V){const oe=s.convert(w.format,w.colorSpace),se=s.convert(w.type),ue=E(w.internalFormat,oe,se,w.colorSpace);if(!i.get(g).__hasExternalTextures){const Me=Math.max(1,g.width>>V),ie=Math.max(1,g.height>>V);O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?t.texImage3D(O,V,ue,Me,ie,g.depth,0,oe,se,null):t.texImage2D(O,V,ue,Me,ie,0,oe,se,null)}t.bindFramebuffer(n.FRAMEBUFFER,x),z(g)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,W,O,i.get(w).__webglTexture,0,X(g)):(O===n.TEXTURE_2D||O>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&O<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,W,O,i.get(w).__webglTexture,V),t.bindFramebuffer(n.FRAMEBUFFER,null)}function we(x,g,w){if(n.bindRenderbuffer(n.RENDERBUFFER,x),g.depthBuffer&&!g.stencilBuffer){let W=o===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(w||z(g)){const O=g.depthTexture;O&&O.isDepthTexture&&(O.type===$n?W=n.DEPTH_COMPONENT32F:O.type===li&&(W=n.DEPTH_COMPONENT24));const V=X(g);z(g)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,V,W,g.width,g.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,V,W,g.width,g.height)}else n.renderbufferStorage(n.RENDERBUFFER,W,g.width,g.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,x)}else if(g.depthBuffer&&g.stencilBuffer){const W=X(g);w&&z(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,W,n.DEPTH24_STENCIL8,g.width,g.height):z(g)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,W,n.DEPTH24_STENCIL8,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,x)}else{const W=g.isWebGLMultipleRenderTargets===!0?g.texture:[g.texture];for(let O=0;O<W.length;O++){const V=W[O],oe=s.convert(V.format,V.colorSpace),se=s.convert(V.type),ue=E(V.internalFormat,oe,se,V.colorSpace),ge=X(g);w&&z(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ge,ue,g.width,g.height):z(g)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ge,ue,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,ue,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Se(x,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,x),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(g.depthTexture).__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),H(g.depthTexture,0);const W=i.get(g.depthTexture).__webglTexture,O=X(g);if(g.depthTexture.format===Bi)z(g)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,W,0,O):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,W,0);else if(g.depthTexture.format===xr)z(g)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,W,0,O):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,W,0);else throw new Error("Unknown depthTexture format")}function qe(x){const g=i.get(x),w=x.isWebGLCubeRenderTarget===!0;if(x.depthTexture&&!g.__autoAllocateDepthBuffer){if(w)throw new Error("target.depthTexture not supported in Cube render targets");Se(g.__webglFramebuffer,x)}else if(w){g.__webglDepthbuffer=[];for(let W=0;W<6;W++)t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[W]),g.__webglDepthbuffer[W]=n.createRenderbuffer(),we(g.__webglDepthbuffer[W],x,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer=n.createRenderbuffer(),we(g.__webglDepthbuffer,x,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Oe(x,g,w){const W=i.get(x);g!==void 0&&Te(W.__webglFramebuffer,x,x.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),w!==void 0&&qe(x)}function _(x){const g=x.texture,w=i.get(x),W=i.get(g);x.addEventListener("dispose",q),x.isWebGLMultipleRenderTargets!==!0&&(W.__webglTexture===void 0&&(W.__webglTexture=n.createTexture()),W.__version=g.version,a.memory.textures++);const O=x.isWebGLCubeRenderTarget===!0,V=x.isWebGLMultipleRenderTargets===!0,oe=p(x)||o;if(O){w.__webglFramebuffer=[];for(let se=0;se<6;se++)if(o&&g.mipmaps&&g.mipmaps.length>0){w.__webglFramebuffer[se]=[];for(let ue=0;ue<g.mipmaps.length;ue++)w.__webglFramebuffer[se][ue]=n.createFramebuffer()}else w.__webglFramebuffer[se]=n.createFramebuffer()}else{if(o&&g.mipmaps&&g.mipmaps.length>0){w.__webglFramebuffer=[];for(let se=0;se<g.mipmaps.length;se++)w.__webglFramebuffer[se]=n.createFramebuffer()}else w.__webglFramebuffer=n.createFramebuffer();if(V)if(r.drawBuffers){const se=x.texture;for(let ue=0,ge=se.length;ue<ge;ue++){const Me=i.get(se[ue]);Me.__webglTexture===void 0&&(Me.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&x.samples>0&&z(x)===!1){const se=V?g:[g];w.__webglMultisampledFramebuffer=n.createFramebuffer(),w.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,w.__webglMultisampledFramebuffer);for(let ue=0;ue<se.length;ue++){const ge=se[ue];w.__webglColorRenderbuffer[ue]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,w.__webglColorRenderbuffer[ue]);const Me=s.convert(ge.format,ge.colorSpace),ie=s.convert(ge.type),ke=E(ge.internalFormat,Me,ie,ge.colorSpace,x.isXRRenderTarget===!0),De=X(x);n.renderbufferStorageMultisample(n.RENDERBUFFER,De,ke,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,w.__webglColorRenderbuffer[ue])}n.bindRenderbuffer(n.RENDERBUFFER,null),x.depthBuffer&&(w.__webglDepthRenderbuffer=n.createRenderbuffer(),we(w.__webglDepthRenderbuffer,x,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(O){t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture),Ie(n.TEXTURE_CUBE_MAP,g,oe);for(let se=0;se<6;se++)if(o&&g.mipmaps&&g.mipmaps.length>0)for(let ue=0;ue<g.mipmaps.length;ue++)Te(w.__webglFramebuffer[se][ue],x,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+se,ue);else Te(w.__webglFramebuffer[se],x,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);b(g,oe)&&S(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(V){const se=x.texture;for(let ue=0,ge=se.length;ue<ge;ue++){const Me=se[ue],ie=i.get(Me);t.bindTexture(n.TEXTURE_2D,ie.__webglTexture),Ie(n.TEXTURE_2D,Me,oe),Te(w.__webglFramebuffer,x,Me,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,0),b(Me,oe)&&S(n.TEXTURE_2D)}t.unbindTexture()}else{let se=n.TEXTURE_2D;if((x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(o?se=x.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(se,W.__webglTexture),Ie(se,g,oe),o&&g.mipmaps&&g.mipmaps.length>0)for(let ue=0;ue<g.mipmaps.length;ue++)Te(w.__webglFramebuffer[ue],x,g,n.COLOR_ATTACHMENT0,se,ue);else Te(w.__webglFramebuffer,x,g,n.COLOR_ATTACHMENT0,se,0);b(g,oe)&&S(se),t.unbindTexture()}x.depthBuffer&&qe(x)}function D(x){const g=p(x)||o,w=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let W=0,O=w.length;W<O;W++){const V=w[W];if(b(V,g)){const oe=x.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,se=i.get(V).__webglTexture;t.bindTexture(oe,se),S(oe),t.unbindTexture()}}}function N(x){if(o&&x.samples>0&&z(x)===!1){const g=x.isWebGLMultipleRenderTargets?x.texture:[x.texture],w=x.width,W=x.height;let O=n.COLOR_BUFFER_BIT;const V=[],oe=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,se=i.get(x),ue=x.isWebGLMultipleRenderTargets===!0;if(ue)for(let ge=0;ge<g.length;ge++)t.bindFramebuffer(n.FRAMEBUFFER,se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,se.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,se.__webglFramebuffer);for(let ge=0;ge<g.length;ge++){V.push(n.COLOR_ATTACHMENT0+ge),x.depthBuffer&&V.push(oe);const Me=se.__ignoreDepthValues!==void 0?se.__ignoreDepthValues:!1;if(Me===!1&&(x.depthBuffer&&(O|=n.DEPTH_BUFFER_BIT),x.stencilBuffer&&(O|=n.STENCIL_BUFFER_BIT)),ue&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,se.__webglColorRenderbuffer[ge]),Me===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[oe]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[oe])),ue){const ie=i.get(g[ge]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ie,0)}n.blitFramebuffer(0,0,w,W,0,0,w,W,O,n.NEAREST),u&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,V)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ue)for(let ge=0;ge<g.length;ge++){t.bindFramebuffer(n.FRAMEBUFFER,se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,se.__webglColorRenderbuffer[ge]);const Me=i.get(g[ge]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,Me,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,se.__webglMultisampledFramebuffer)}}function X(x){return Math.min(r.maxSamples,x.samples)}function z(x){const g=i.get(x);return o&&x.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function Q(x){const g=a.render.frame;c.get(x)!==g&&(c.set(x,g),x.update())}function te(x,g){const w=x.colorSpace,W=x.format,O=x.type;return x.isCompressedTexture===!0||x.isVideoTexture===!0||x.format===Ba||w!==Jn&&w!==sn&&(nt.getTransfer(w)===ut?o===!1?e.has("EXT_sRGB")===!0&&W===hn?(x.format=Ba,x.minFilter=kt,x.generateMipmaps=!1):g=td.sRGBToLinear(g):(W!==hn||O!==fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",w)),g}this.allocateTextureUnit=U,this.resetTextureUnits=ne,this.setTexture2D=H,this.setTexture2DArray=ee,this.setTexture3D=Y,this.setTextureCube=re,this.rebindTextures=Oe,this.setupRenderTarget=_,this.updateRenderTargetMipmap=D,this.updateMultisampleRenderTarget=N,this.setupDepthRenderbuffer=qe,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=z}function mS(n,e,t){const i=t.isWebGL2;function r(s,a=sn){let o;const l=nt.getTransfer(a);if(s===fi)return n.UNSIGNED_BYTE;if(s===Xf)return n.UNSIGNED_SHORT_4_4_4_4;if(s===$f)return n.UNSIGNED_SHORT_5_5_5_1;if(s===jm)return n.BYTE;if(s===Km)return n.SHORT;if(s===il)return n.UNSIGNED_SHORT;if(s===Wf)return n.INT;if(s===li)return n.UNSIGNED_INT;if(s===$n)return n.FLOAT;if(s===Jr)return i?n.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Zm)return n.ALPHA;if(s===hn)return n.RGBA;if(s===Jm)return n.LUMINANCE;if(s===Qm)return n.LUMINANCE_ALPHA;if(s===Bi)return n.DEPTH_COMPONENT;if(s===xr)return n.DEPTH_STENCIL;if(s===Ba)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===eg)return n.RED;if(s===qf)return n.RED_INTEGER;if(s===tg)return n.RG;if(s===Yf)return n.RG_INTEGER;if(s===jf)return n.RGBA_INTEGER;if(s===Wo||s===Xo||s===$o||s===qo)if(l===ut)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Wo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Xo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===$o)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===qo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Wo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Xo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===$o)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===qo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===oc||s===ac||s===lc||s===cc)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===oc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ac)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===lc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===cc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Kf)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===uc||s===fc)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===uc)return l===ut?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===fc)return l===ut?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===dc||s===hc||s===pc||s===mc||s===gc||s===_c||s===vc||s===xc||s===Sc||s===Mc||s===yc||s===Ec||s===bc||s===Tc)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===dc)return l===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===hc)return l===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===pc)return l===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===mc)return l===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===gc)return l===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===_c)return l===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===vc)return l===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===xc)return l===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Sc)return l===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Mc)return l===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===yc)return l===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Ec)return l===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===bc)return l===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Tc)return l===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Yo||s===Ac||s===wc)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Yo)return l===ut?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Ac)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===wc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===ng||s===Rc||s===Cc||s===Lc)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===Yo)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Rc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Cc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Lc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Oi?i?n.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class gS extends rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ns extends Zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _S={type:"move"};class xa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ns,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ns,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ns,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const y of e.hand.values()){const p=t.getJointPose(y,i),d=this._getHandJoint(u,y);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],h=c.position.distanceTo(f.position),m=.02,M=.005;u.inputState.pinching&&h>m+M?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=m-M&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(_S)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ns;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const vS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xS=`
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

}`;class SS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new $t,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}render(e,t){if(this.texture!==null){if(this.mesh===null){const i=t.cameras[0].viewport,r=new pi({extensions:{fragDepth:!0},vertexShader:vS,fragmentShader:xS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new mn(new bo(20,20),r)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class MS extends Mr{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,u=null,c=null,f=null,h=null,m=null,M=null;const y=new SS,p=t.getContextAttributes();let d=null,b=null;const S=[],E=[],P=new je;let L=null;const C=new rn;C.layers.enable(1),C.viewport=new Tt;const q=new rn;q.layers.enable(2),q.viewport=new Tt;const K=[C,q],v=new gS;v.layers.enable(1),v.layers.enable(2);let A=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let le=S[J];return le===void 0&&(le=new xa,S[J]=le),le.getTargetRaySpace()},this.getControllerGrip=function(J){let le=S[J];return le===void 0&&(le=new xa,S[J]=le),le.getGripSpace()},this.getHand=function(J){let le=S[J];return le===void 0&&(le=new xa,S[J]=le),le.getHandSpace()};function ne(J){const le=E.indexOf(J.inputSource);if(le===-1)return;const ve=S[le];ve!==void 0&&(ve.update(J.inputSource,J.frame,u||a),ve.dispatchEvent({type:J.type,data:J.inputSource}))}function U(){r.removeEventListener("select",ne),r.removeEventListener("selectstart",ne),r.removeEventListener("selectend",ne),r.removeEventListener("squeeze",ne),r.removeEventListener("squeezestart",ne),r.removeEventListener("squeezeend",ne),r.removeEventListener("end",U),r.removeEventListener("inputsourceschange",Z);for(let J=0;J<S.length;J++){const le=E[J];le!==null&&(E[J]=null,S[J].disconnect(le))}A=null,F=null,y.reset(),e.setRenderTarget(d),m=null,h=null,f=null,r=null,b=null,Ie.stop(),i.isPresenting=!1,e.setPixelRatio(L),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(J){u=J},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return f},this.getFrame=function(){return M},this.getSession=function(){return r},this.setSession=async function(J){if(r=J,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",ne),r.addEventListener("selectstart",ne),r.addEventListener("selectend",ne),r.addEventListener("squeeze",ne),r.addEventListener("squeezestart",ne),r.addEventListener("squeezeend",ne),r.addEventListener("end",U),r.addEventListener("inputsourceschange",Z),p.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(P),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const le={antialias:r.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,le),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new Hi(m.framebufferWidth,m.framebufferHeight,{format:hn,type:fi,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let le=null,ve=null,Te=null;p.depth&&(Te=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=p.stencil?xr:Bi,ve=p.stencil?Oi:li);const we={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(we),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),b=new Hi(h.textureWidth,h.textureHeight,{format:hn,type:fi,depthTexture:new pd(h.textureWidth,h.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});const Se=e.properties.get(b);Se.__ignoreDepthValues=h.ignoreDepthValues}b.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await r.requestReferenceSpace(o),Ie.setContext(r),Ie.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function Z(J){for(let le=0;le<J.removed.length;le++){const ve=J.removed[le],Te=E.indexOf(ve);Te>=0&&(E[Te]=null,S[Te].disconnect(ve))}for(let le=0;le<J.added.length;le++){const ve=J.added[le];let Te=E.indexOf(ve);if(Te===-1){for(let Se=0;Se<S.length;Se++)if(Se>=E.length){E.push(ve),Te=Se;break}else if(E[Se]===null){E[Se]=ve,Te=Se;break}if(Te===-1)break}const we=S[Te];we&&we.connect(ve)}}const H=new G,ee=new G;function Y(J,le,ve){H.setFromMatrixPosition(le.matrixWorld),ee.setFromMatrixPosition(ve.matrixWorld);const Te=H.distanceTo(ee),we=le.projectionMatrix.elements,Se=ve.projectionMatrix.elements,qe=we[14]/(we[10]-1),Oe=we[14]/(we[10]+1),_=(we[9]+1)/we[5],D=(we[9]-1)/we[5],N=(we[8]-1)/we[0],X=(Se[8]+1)/Se[0],z=qe*N,Q=qe*X,te=Te/(-N+X),x=te*-N;le.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(x),J.translateZ(te),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert();const g=qe+te,w=Oe+te,W=z-x,O=Q+(Te-x),V=_*Oe/w*g,oe=D*Oe/w*g;J.projectionMatrix.makePerspective(W,O,V,oe,g,w),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}function re(J,le){le===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(le.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(r===null)return;y.texture!==null&&(J.near=y.depthNear,J.far=y.depthFar),v.near=q.near=C.near=J.near,v.far=q.far=C.far=J.far,(A!==v.near||F!==v.far)&&(r.updateRenderState({depthNear:v.near,depthFar:v.far}),A=v.near,F=v.far,C.near=A,C.far=F,q.near=A,q.far=F,C.updateProjectionMatrix(),q.updateProjectionMatrix(),J.updateProjectionMatrix());const le=J.parent,ve=v.cameras;re(v,le);for(let Te=0;Te<ve.length;Te++)re(ve[Te],le);ve.length===2?Y(v,C,q):v.projectionMatrix.copy(C.projectionMatrix),ae(J,v,le)};function ae(J,le,ve){ve===null?J.matrix.copy(le.matrixWorld):(J.matrix.copy(ve.matrixWorld),J.matrix.invert(),J.matrix.multiply(le.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(le.projectionMatrix),J.projectionMatrixInverse.copy(le.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=za*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(J){l=J,h!==null&&(h.fixedFoveation=J),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=J)},this.hasDepthSensing=function(){return y.texture!==null};let ce=null;function de(J,le){if(c=le.getViewerPose(u||a),M=le,c!==null){const ve=c.views;m!==null&&(e.setRenderTargetFramebuffer(b,m.framebuffer),e.setRenderTarget(b));let Te=!1;ve.length!==v.cameras.length&&(v.cameras.length=0,Te=!0);for(let Se=0;Se<ve.length;Se++){const qe=ve[Se];let Oe=null;if(m!==null)Oe=m.getViewport(qe);else{const D=f.getViewSubImage(h,qe);Oe=D.viewport,Se===0&&(e.setRenderTargetTextures(b,D.colorTexture,h.ignoreDepthValues?void 0:D.depthStencilTexture),e.setRenderTarget(b))}let _=K[Se];_===void 0&&(_=new rn,_.layers.enable(Se),_.viewport=new Tt,K[Se]=_),_.matrix.fromArray(qe.transform.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale),_.projectionMatrix.fromArray(qe.projectionMatrix),_.projectionMatrixInverse.copy(_.projectionMatrix).invert(),_.viewport.set(Oe.x,Oe.y,Oe.width,Oe.height),Se===0&&(v.matrix.copy(_.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),Te===!0&&v.cameras.push(_)}const we=r.enabledFeatures;if(we&&we.includes("depth-sensing")){const Se=f.getDepthInformation(ve[0]);Se&&Se.isValid&&Se.texture&&y.init(e,Se,r.renderState)}}for(let ve=0;ve<S.length;ve++){const Te=E[ve],we=S[ve];Te!==null&&we!==void 0&&we.update(Te,le,u||a)}y.render(e,v),ce&&ce(J,le),le.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:le}),M=null}const Ie=new hd;Ie.setAnimationLoop(de),this.setAnimationLoop=function(J){ce=J},this.dispose=function(){}}}function yS(n,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function i(p,d){d.color.getRGB(p.fogColor.value,cd(n)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function r(p,d,b,S,E){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(p,d):d.isMeshToonMaterial?(s(p,d),f(p,d)):d.isMeshPhongMaterial?(s(p,d),c(p,d)):d.isMeshStandardMaterial?(s(p,d),h(p,d),d.isMeshPhysicalMaterial&&m(p,d,E)):d.isMeshMatcapMaterial?(s(p,d),M(p,d)):d.isMeshDepthMaterial?s(p,d):d.isMeshDistanceMaterial?(s(p,d),y(p,d)):d.isMeshNormalMaterial?s(p,d):d.isLineBasicMaterial?(a(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?l(p,d,b,S):d.isSpriteMaterial?u(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===Xt&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===Xt&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const b=e.get(d).envMap;if(b&&(p.envMap.value=b,p.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const S=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*S,t(d.lightMap,p.lightMapTransform)}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function a(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,b,S){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*b,p.scale.value=S*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function u(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function f(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function h(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),e.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,b){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Xt&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function M(p,d){d.matcap&&(p.matcap.value=d.matcap)}function y(p,d){const b=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function ES(n,e,t,i){let r={},s={},a=[];const o=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(b,S){const E=S.program;i.uniformBlockBinding(b,E)}function u(b,S){let E=r[b.id];E===void 0&&(M(b),E=c(b),r[b.id]=E,b.addEventListener("dispose",p));const P=S.program;i.updateUBOMapping(b,P);const L=e.render.frame;s[b.id]!==L&&(h(b),s[b.id]=L)}function c(b){const S=f();b.__bindingPointIndex=S;const E=n.createBuffer(),P=b.__size,L=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,P,L),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,E),E}function f(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(b){const S=r[b.id],E=b.uniforms,P=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let L=0,C=E.length;L<C;L++){const q=Array.isArray(E[L])?E[L]:[E[L]];for(let K=0,v=q.length;K<v;K++){const A=q[K];if(m(A,L,K,P)===!0){const F=A.__offset,ne=Array.isArray(A.value)?A.value:[A.value];let U=0;for(let Z=0;Z<ne.length;Z++){const H=ne[Z],ee=y(H);typeof H=="number"||typeof H=="boolean"?(A.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,F+U,A.__data)):H.isMatrix3?(A.__data[0]=H.elements[0],A.__data[1]=H.elements[1],A.__data[2]=H.elements[2],A.__data[3]=0,A.__data[4]=H.elements[3],A.__data[5]=H.elements[4],A.__data[6]=H.elements[5],A.__data[7]=0,A.__data[8]=H.elements[6],A.__data[9]=H.elements[7],A.__data[10]=H.elements[8],A.__data[11]=0):(H.toArray(A.__data,U),U+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,F,A.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(b,S,E,P){const L=b.value,C=S+"_"+E;if(P[C]===void 0)return typeof L=="number"||typeof L=="boolean"?P[C]=L:P[C]=L.clone(),!0;{const q=P[C];if(typeof L=="number"||typeof L=="boolean"){if(q!==L)return P[C]=L,!0}else if(q.equals(L)===!1)return q.copy(L),!0}return!1}function M(b){const S=b.uniforms;let E=0;const P=16;for(let C=0,q=S.length;C<q;C++){const K=Array.isArray(S[C])?S[C]:[S[C]];for(let v=0,A=K.length;v<A;v++){const F=K[v],ne=Array.isArray(F.value)?F.value:[F.value];for(let U=0,Z=ne.length;U<Z;U++){const H=ne[U],ee=y(H),Y=E%P;Y!==0&&P-Y<ee.boundary&&(E+=P-Y),F.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=E,E+=ee.storage}}}const L=E%P;return L>0&&(E+=P-L),b.__size=E,b.__cache={},this}function y(b){const S={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(S.boundary=4,S.storage=4):b.isVector2?(S.boundary=8,S.storage=8):b.isVector3||b.isColor?(S.boundary=16,S.storage=12):b.isVector4?(S.boundary=16,S.storage=16):b.isMatrix3?(S.boundary=48,S.storage=48):b.isMatrix4?(S.boundary=64,S.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),S}function p(b){const S=b.target;S.removeEventListener("dispose",p);const E=a.indexOf(S.__bindingPointIndex);a.splice(E,1),n.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function d(){for(const b in r)n.deleteBuffer(r[b]);a=[],r={},s={}}return{bind:l,update:u,dispose:d}}class Sd{constructor(e={}){const{canvas:t=pg(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=a;const m=new Uint32Array(4),M=new Int32Array(4);let y=null,p=null;const d=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=bt,this._useLegacyLights=!1,this.toneMapping=ui,this.toneMappingExposure=1;const S=this;let E=!1,P=0,L=0,C=null,q=-1,K=null;const v=new Tt,A=new Tt;let F=null;const ne=new it(0);let U=0,Z=t.width,H=t.height,ee=1,Y=null,re=null;const ae=new Tt(0,0,Z,H),ce=new Tt(0,0,Z,H);let de=!1;const Ie=new dd;let J=!1,le=!1,ve=null;const Te=new At,we=new je,Se=new G,qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Oe(){return C===null?ee:1}let _=i;function D(T,B){for(let $=0;$<T.length;$++){const j=T[$],k=t.getContext(j,B);if(k!==null)return k}return null}try{const T={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${nl}`),t.addEventListener("webglcontextlost",rt,!1),t.addEventListener("webglcontextrestored",R,!1),t.addEventListener("webglcontextcreationerror",he,!1),_===null){const B=["webgl2","webgl","experimental-webgl"];if(S.isWebGL1Renderer===!0&&B.shift(),_=D(B,T),_===null)throw D(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&_ instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),_.getShaderPrecisionFormat===void 0&&(_.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let N,X,z,Q,te,x,g,w,W,O,V,oe,se,ue,ge,Me,ie,ke,De,Pe,Ae,_e,Re,Ke;function tt(){N=new Lx(_),X=new Ex(_,N,e),N.init(X),_e=new mS(_,N,X),z=new hS(_,N,X),Q=new Ux(_),te=new Q0,x=new pS(_,N,z,te,X,_e,Q),g=new Tx(S),w=new Cx(S),W=new Hg(_,X),Re=new Mx(_,N,W,X),O=new Px(_,W,Q,Re),V=new Ox(_,O,W,Q),De=new Fx(_,X,x),Me=new bx(te),oe=new J0(S,g,w,N,X,Re,Me),se=new yS(S,te),ue=new tS,ge=new aS(N,X),ke=new Sx(S,g,w,z,V,h,l),ie=new dS(S,V,X),Ke=new ES(_,Q,X,z),Pe=new yx(_,N,Q,X),Ae=new Dx(_,N,Q,X),Q.programs=oe.programs,S.capabilities=X,S.extensions=N,S.properties=te,S.renderLists=ue,S.shadowMap=ie,S.state=z,S.info=Q}tt();const Ye=new MS(S,_);this.xr=Ye,this.getContext=function(){return _},this.getContextAttributes=function(){return _.getContextAttributes()},this.forceContextLoss=function(){const T=N.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=N.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(T){T!==void 0&&(ee=T,this.setSize(Z,H,!1))},this.getSize=function(T){return T.set(Z,H)},this.setSize=function(T,B,$=!0){if(Ye.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=T,H=B,t.width=Math.floor(T*ee),t.height=Math.floor(B*ee),$===!0&&(t.style.width=T+"px",t.style.height=B+"px"),this.setViewport(0,0,T,B)},this.getDrawingBufferSize=function(T){return T.set(Z*ee,H*ee).floor()},this.setDrawingBufferSize=function(T,B,$){Z=T,H=B,ee=$,t.width=Math.floor(T*$),t.height=Math.floor(B*$),this.setViewport(0,0,T,B)},this.getCurrentViewport=function(T){return T.copy(v)},this.getViewport=function(T){return T.copy(ae)},this.setViewport=function(T,B,$,j){T.isVector4?ae.set(T.x,T.y,T.z,T.w):ae.set(T,B,$,j),z.viewport(v.copy(ae).multiplyScalar(ee).floor())},this.getScissor=function(T){return T.copy(ce)},this.setScissor=function(T,B,$,j){T.isVector4?ce.set(T.x,T.y,T.z,T.w):ce.set(T,B,$,j),z.scissor(A.copy(ce).multiplyScalar(ee).floor())},this.getScissorTest=function(){return de},this.setScissorTest=function(T){z.setScissorTest(de=T)},this.setOpaqueSort=function(T){Y=T},this.setTransparentSort=function(T){re=T},this.getClearColor=function(T){return T.copy(ke.getClearColor())},this.setClearColor=function(){ke.setClearColor.apply(ke,arguments)},this.getClearAlpha=function(){return ke.getClearAlpha()},this.setClearAlpha=function(){ke.setClearAlpha.apply(ke,arguments)},this.clear=function(T=!0,B=!0,$=!0){let j=0;if(T){let k=!1;if(C!==null){const xe=C.texture.format;k=xe===jf||xe===Yf||xe===qf}if(k){const xe=C.texture.type,be=xe===fi||xe===li||xe===il||xe===Oi||xe===Xf||xe===$f,Ue=ke.getClearColor(),Ne=ke.getClearAlpha(),We=Ue.r,Be=Ue.g,Ge=Ue.b;be?(m[0]=We,m[1]=Be,m[2]=Ge,m[3]=Ne,_.clearBufferuiv(_.COLOR,0,m)):(M[0]=We,M[1]=Be,M[2]=Ge,M[3]=Ne,_.clearBufferiv(_.COLOR,0,M))}else j|=_.COLOR_BUFFER_BIT}B&&(j|=_.DEPTH_BUFFER_BIT),$&&(j|=_.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),_.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",rt,!1),t.removeEventListener("webglcontextrestored",R,!1),t.removeEventListener("webglcontextcreationerror",he,!1),ue.dispose(),ge.dispose(),te.dispose(),g.dispose(),w.dispose(),V.dispose(),Re.dispose(),Ke.dispose(),oe.dispose(),Ye.dispose(),Ye.removeEventListener("sessionstart",Jt),Ye.removeEventListener("sessionend",at),ve&&(ve.dispose(),ve=null),Dt.stop()};function rt(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function R(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const T=Q.autoReset,B=ie.enabled,$=ie.autoUpdate,j=ie.needsUpdate,k=ie.type;tt(),Q.autoReset=T,ie.enabled=B,ie.autoUpdate=$,ie.needsUpdate=j,ie.type=k}function he(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function pe(T){const B=T.target;B.removeEventListener("dispose",pe),Ee(B)}function Ee(T){Ce(T),te.remove(T)}function Ce(T){const B=te.get(T).programs;B!==void 0&&(B.forEach(function($){oe.releaseProgram($)}),T.isShaderMaterial&&oe.releaseShaderCache(T))}this.renderBufferDirect=function(T,B,$,j,k,xe){B===null&&(B=qe);const be=k.isMesh&&k.matrixWorld.determinant()<0,Ue=yd(T,B,$,j,k);z.setMaterial(j,be);let Ne=$.index,We=1;if(j.wireframe===!0){if(Ne=O.getWireframeAttribute($),Ne===void 0)return;We=2}const Be=$.drawRange,Ge=$.attributes.position;let mt=Be.start*We,qt=(Be.start+Be.count)*We;xe!==null&&(mt=Math.max(mt,xe.start*We),qt=Math.min(qt,(xe.start+xe.count)*We)),Ne!==null?(mt=Math.max(mt,0),qt=Math.min(qt,Ne.count)):Ge!=null&&(mt=Math.max(mt,0),qt=Math.min(qt,Ge.count));const xt=qt-mt;if(xt<0||xt===1/0)return;Re.setup(k,j,Ue,$,Ne);let Dn,dt=Pe;if(Ne!==null&&(Dn=W.get(Ne),dt=Ae,dt.setIndex(Dn)),k.isMesh)j.wireframe===!0?(z.setLineWidth(j.wireframeLinewidth*Oe()),dt.setMode(_.LINES)):dt.setMode(_.TRIANGLES);else if(k.isLine){let Xe=j.linewidth;Xe===void 0&&(Xe=1),z.setLineWidth(Xe*Oe()),k.isLineSegments?dt.setMode(_.LINES):k.isLineLoop?dt.setMode(_.LINE_LOOP):dt.setMode(_.LINE_STRIP)}else k.isPoints?dt.setMode(_.POINTS):k.isSprite&&dt.setMode(_.TRIANGLES);if(k.isBatchedMesh)dt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else if(k.isInstancedMesh)dt.renderInstances(mt,xt,k.count);else if($.isInstancedBufferGeometry){const Xe=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Ao=Math.min($.instanceCount,Xe);dt.renderInstances(mt,xt,Ao)}else dt.render(mt,xt)};function et(T,B,$){T.transparent===!0&&T.side===Xn&&T.forceSinglePass===!1?(T.side=Xt,T.needsUpdate=!0,cs(T,B,$),T.side=hi,T.needsUpdate=!0,cs(T,B,$),T.side=Xn):cs(T,B,$)}this.compile=function(T,B,$=null){$===null&&($=T),p=ge.get($),p.init(),b.push(p),$.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),T!==$&&T.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights(S._useLegacyLights);const j=new Set;return T.traverse(function(k){const xe=k.material;if(xe)if(Array.isArray(xe))for(let be=0;be<xe.length;be++){const Ue=xe[be];et(Ue,$,k),j.add(Ue)}else et(xe,$,k),j.add(xe)}),b.pop(),p=null,j},this.compileAsync=function(T,B,$=null){const j=this.compile(T,B,$);return new Promise(k=>{function xe(){if(j.forEach(function(be){te.get(be).currentProgram.isReady()&&j.delete(be)}),j.size===0){k(T);return}setTimeout(xe,10)}N.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let ot=null;function yt(T){ot&&ot(T)}function Jt(){Dt.stop()}function at(){Dt.start()}const Dt=new hd;Dt.setAnimationLoop(yt),typeof self<"u"&&Dt.setContext(self),this.setAnimationLoop=function(T){ot=T,Ye.setAnimationLoop(T),T===null?Dt.stop():Dt.start()},Ye.addEventListener("sessionstart",Jt),Ye.addEventListener("sessionend",at),this.render=function(T,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Ye.enabled===!0&&Ye.isPresenting===!0&&(Ye.cameraAutoUpdate===!0&&Ye.updateCamera(B),B=Ye.getCamera()),T.isScene===!0&&T.onBeforeRender(S,T,B,C),p=ge.get(T,b.length),p.init(),b.push(p),Te.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Ie.setFromProjectionMatrix(Te),le=this.localClippingEnabled,J=Me.init(this.clippingPlanes,le),y=ue.get(T,d.length),y.init(),d.push(y),xn(T,B,0,S.sortObjects),y.finish(),S.sortObjects===!0&&y.sort(Y,re),this.info.render.frame++,J===!0&&Me.beginShadows();const $=p.state.shadowsArray;if(ie.render($,T,B),J===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Ye.enabled===!1||Ye.isPresenting===!1||Ye.hasDepthSensing()===!1)&&ke.render(y,T),p.setupLights(S._useLegacyLights),B.isArrayCamera){const j=B.cameras;for(let k=0,xe=j.length;k<xe;k++){const be=j[k];ll(y,T,be,be.viewport)}}else ll(y,T,B);C!==null&&(x.updateMultisampleRenderTarget(C),x.updateRenderTargetMipmap(C)),T.isScene===!0&&T.onAfterRender(S,T,B),Re.resetDefaultState(),q=-1,K=null,b.pop(),b.length>0?p=b[b.length-1]:p=null,d.pop(),d.length>0?y=d[d.length-1]:y=null};function xn(T,B,$,j){if(T.visible===!1)return;if(T.layers.test(B.layers)){if(T.isGroup)$=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(B);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Ie.intersectsSprite(T)){j&&Se.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Te);const be=V.update(T),Ue=T.material;Ue.visible&&y.push(T,be,Ue,$,Se.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Ie.intersectsObject(T))){const be=V.update(T),Ue=T.material;if(j&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Se.copy(T.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),Se.copy(be.boundingSphere.center)),Se.applyMatrix4(T.matrixWorld).applyMatrix4(Te)),Array.isArray(Ue)){const Ne=be.groups;for(let We=0,Be=Ne.length;We<Be;We++){const Ge=Ne[We],mt=Ue[Ge.materialIndex];mt&&mt.visible&&y.push(T,be,mt,$,Se.z,Ge)}}else Ue.visible&&y.push(T,be,Ue,$,Se.z,null)}}const xe=T.children;for(let be=0,Ue=xe.length;be<Ue;be++)xn(xe[be],B,$,j)}function ll(T,B,$,j){const k=T.opaque,xe=T.transmissive,be=T.transparent;p.setupLightsView($),J===!0&&Me.setGlobalState(S.clippingPlanes,$),xe.length>0&&Md(k,xe,B,$),j&&z.viewport(v.copy(j)),k.length>0&&ls(k,B,$),xe.length>0&&ls(xe,B,$),be.length>0&&ls(be,B,$),z.buffers.depth.setTest(!0),z.buffers.depth.setMask(!0),z.buffers.color.setMask(!0),z.setPolygonOffset(!1)}function Md(T,B,$,j){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;const xe=X.isWebGL2;ve===null&&(ve=new Hi(1,1,{generateMipmaps:!0,type:N.has("EXT_color_buffer_half_float")?Jr:fi,minFilter:Ui,samples:xe?4:0})),S.getDrawingBufferSize(we),xe?ve.setSize(we.x,we.y):ve.setSize(Ha(we.x),Ha(we.y));const be=S.getRenderTarget();S.setRenderTarget(ve),S.getClearColor(ne),U=S.getClearAlpha(),U<1&&S.setClearColor(16777215,.5),S.clear();const Ue=S.toneMapping;S.toneMapping=ui,ls(T,$,j),x.updateMultisampleRenderTarget(ve),x.updateRenderTargetMipmap(ve);let Ne=!1;for(let We=0,Be=B.length;We<Be;We++){const Ge=B[We],mt=Ge.object,qt=Ge.geometry,xt=Ge.material,Dn=Ge.group;if(xt.side===Xn&&mt.layers.test(j.layers)){const dt=xt.side;xt.side=Xt,xt.needsUpdate=!0,cl(mt,$,j,qt,xt,Dn),xt.side=dt,xt.needsUpdate=!0,Ne=!0}}Ne===!0&&(x.updateMultisampleRenderTarget(ve),x.updateRenderTargetMipmap(ve)),S.setRenderTarget(be),S.setClearColor(ne,U),S.toneMapping=Ue}function ls(T,B,$){const j=B.isScene===!0?B.overrideMaterial:null;for(let k=0,xe=T.length;k<xe;k++){const be=T[k],Ue=be.object,Ne=be.geometry,We=j===null?be.material:j,Be=be.group;Ue.layers.test($.layers)&&cl(Ue,B,$,Ne,We,Be)}}function cl(T,B,$,j,k,xe){T.onBeforeRender(S,B,$,j,k,xe),T.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),k.onBeforeRender(S,B,$,j,T,xe),k.transparent===!0&&k.side===Xn&&k.forceSinglePass===!1?(k.side=Xt,k.needsUpdate=!0,S.renderBufferDirect($,B,j,k,T,xe),k.side=hi,k.needsUpdate=!0,S.renderBufferDirect($,B,j,k,T,xe),k.side=Xn):S.renderBufferDirect($,B,j,k,T,xe),T.onAfterRender(S,B,$,j,k,xe)}function cs(T,B,$){B.isScene!==!0&&(B=qe);const j=te.get(T),k=p.state.lights,xe=p.state.shadowsArray,be=k.state.version,Ue=oe.getParameters(T,k.state,xe,B,$),Ne=oe.getProgramCacheKey(Ue);let We=j.programs;j.environment=T.isMeshStandardMaterial?B.environment:null,j.fog=B.fog,j.envMap=(T.isMeshStandardMaterial?w:g).get(T.envMap||j.environment),We===void 0&&(T.addEventListener("dispose",pe),We=new Map,j.programs=We);let Be=We.get(Ne);if(Be!==void 0){if(j.currentProgram===Be&&j.lightsStateVersion===be)return fl(T,Ue),Be}else Ue.uniforms=oe.getUniforms(T),T.onBuild($,Ue,S),T.onBeforeCompile(Ue,S),Be=oe.acquireProgram(Ue,Ne),We.set(Ne,Be),j.uniforms=Ue.uniforms;const Ge=j.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ge.clippingPlanes=Me.uniform),fl(T,Ue),j.needsLights=bd(T),j.lightsStateVersion=be,j.needsLights&&(Ge.ambientLightColor.value=k.state.ambient,Ge.lightProbe.value=k.state.probe,Ge.directionalLights.value=k.state.directional,Ge.directionalLightShadows.value=k.state.directionalShadow,Ge.spotLights.value=k.state.spot,Ge.spotLightShadows.value=k.state.spotShadow,Ge.rectAreaLights.value=k.state.rectArea,Ge.ltc_1.value=k.state.rectAreaLTC1,Ge.ltc_2.value=k.state.rectAreaLTC2,Ge.pointLights.value=k.state.point,Ge.pointLightShadows.value=k.state.pointShadow,Ge.hemisphereLights.value=k.state.hemi,Ge.directionalShadowMap.value=k.state.directionalShadowMap,Ge.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ge.spotShadowMap.value=k.state.spotShadowMap,Ge.spotLightMatrix.value=k.state.spotLightMatrix,Ge.spotLightMap.value=k.state.spotLightMap,Ge.pointShadowMap.value=k.state.pointShadowMap,Ge.pointShadowMatrix.value=k.state.pointShadowMatrix),j.currentProgram=Be,j.uniformsList=null,Be}function ul(T){if(T.uniformsList===null){const B=T.currentProgram.getUniforms();T.uniformsList=zs.seqWithValue(B.seq,T.uniforms)}return T.uniformsList}function fl(T,B){const $=te.get(T);$.outputColorSpace=B.outputColorSpace,$.batching=B.batching,$.instancing=B.instancing,$.instancingColor=B.instancingColor,$.skinning=B.skinning,$.morphTargets=B.morphTargets,$.morphNormals=B.morphNormals,$.morphColors=B.morphColors,$.morphTargetsCount=B.morphTargetsCount,$.numClippingPlanes=B.numClippingPlanes,$.numIntersection=B.numClipIntersection,$.vertexAlphas=B.vertexAlphas,$.vertexTangents=B.vertexTangents,$.toneMapping=B.toneMapping}function yd(T,B,$,j,k){B.isScene!==!0&&(B=qe),x.resetTextureUnits();const xe=B.fog,be=j.isMeshStandardMaterial?B.environment:null,Ue=C===null?S.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Jn,Ne=(j.isMeshStandardMaterial?w:g).get(j.envMap||be),We=j.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Be=!!$.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Ge=!!$.morphAttributes.position,mt=!!$.morphAttributes.normal,qt=!!$.morphAttributes.color;let xt=ui;j.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(xt=S.toneMapping);const Dn=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,dt=Dn!==void 0?Dn.length:0,Xe=te.get(j),Ao=p.state.lights;if(J===!0&&(le===!0||T!==K)){const Qt=T===K&&j.id===q;Me.setState(j,T,Qt)}let pt=!1;j.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==Ao.state.version||Xe.outputColorSpace!==Ue||k.isBatchedMesh&&Xe.batching===!1||!k.isBatchedMesh&&Xe.batching===!0||k.isInstancedMesh&&Xe.instancing===!1||!k.isInstancedMesh&&Xe.instancing===!0||k.isSkinnedMesh&&Xe.skinning===!1||!k.isSkinnedMesh&&Xe.skinning===!0||k.isInstancedMesh&&Xe.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Xe.instancingColor===!1&&k.instanceColor!==null||Xe.envMap!==Ne||j.fog===!0&&Xe.fog!==xe||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==Me.numPlanes||Xe.numIntersection!==Me.numIntersection)||Xe.vertexAlphas!==We||Xe.vertexTangents!==Be||Xe.morphTargets!==Ge||Xe.morphNormals!==mt||Xe.morphColors!==qt||Xe.toneMapping!==xt||X.isWebGL2===!0&&Xe.morphTargetsCount!==dt)&&(pt=!0):(pt=!0,Xe.__version=j.version);let gi=Xe.currentProgram;pt===!0&&(gi=cs(j,B,k));let dl=!1,Er=!1,wo=!1;const wt=gi.getUniforms(),_i=Xe.uniforms;if(z.useProgram(gi.program)&&(dl=!0,Er=!0,wo=!0),j.id!==q&&(q=j.id,Er=!0),dl||K!==T){wt.setValue(_,"projectionMatrix",T.projectionMatrix),wt.setValue(_,"viewMatrix",T.matrixWorldInverse);const Qt=wt.map.cameraPosition;Qt!==void 0&&Qt.setValue(_,Se.setFromMatrixPosition(T.matrixWorld)),X.logarithmicDepthBuffer&&wt.setValue(_,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&wt.setValue(_,"isOrthographic",T.isOrthographicCamera===!0),K!==T&&(K=T,Er=!0,wo=!0)}if(k.isSkinnedMesh){wt.setOptional(_,k,"bindMatrix"),wt.setOptional(_,k,"bindMatrixInverse");const Qt=k.skeleton;Qt&&(X.floatVertexTextures?(Qt.boneTexture===null&&Qt.computeBoneTexture(),wt.setValue(_,"boneTexture",Qt.boneTexture,x)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}k.isBatchedMesh&&(wt.setOptional(_,k,"batchingTexture"),wt.setValue(_,"batchingTexture",k._matricesTexture,x));const Ro=$.morphAttributes;if((Ro.position!==void 0||Ro.normal!==void 0||Ro.color!==void 0&&X.isWebGL2===!0)&&De.update(k,$,gi),(Er||Xe.receiveShadow!==k.receiveShadow)&&(Xe.receiveShadow=k.receiveShadow,wt.setValue(_,"receiveShadow",k.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(_i.envMap.value=Ne,_i.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),Er&&(wt.setValue(_,"toneMappingExposure",S.toneMappingExposure),Xe.needsLights&&Ed(_i,wo),xe&&j.fog===!0&&se.refreshFogUniforms(_i,xe),se.refreshMaterialUniforms(_i,j,ee,H,ve),zs.upload(_,ul(Xe),_i,x)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(zs.upload(_,ul(Xe),_i,x),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&wt.setValue(_,"center",k.center),wt.setValue(_,"modelViewMatrix",k.modelViewMatrix),wt.setValue(_,"normalMatrix",k.normalMatrix),wt.setValue(_,"modelMatrix",k.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const Qt=j.uniformsGroups;for(let Co=0,Td=Qt.length;Co<Td;Co++)if(X.isWebGL2){const hl=Qt[Co];Ke.update(hl,gi),Ke.bind(hl,gi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return gi}function Ed(T,B){T.ambientLightColor.needsUpdate=B,T.lightProbe.needsUpdate=B,T.directionalLights.needsUpdate=B,T.directionalLightShadows.needsUpdate=B,T.pointLights.needsUpdate=B,T.pointLightShadows.needsUpdate=B,T.spotLights.needsUpdate=B,T.spotLightShadows.needsUpdate=B,T.rectAreaLights.needsUpdate=B,T.hemisphereLights.needsUpdate=B}function bd(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(T,B,$){te.get(T.texture).__webglTexture=B,te.get(T.depthTexture).__webglTexture=$;const j=te.get(T);j.__hasExternalTextures=!0,j.__hasExternalTextures&&(j.__autoAllocateDepthBuffer=$===void 0,j.__autoAllocateDepthBuffer||N.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,B){const $=te.get(T);$.__webglFramebuffer=B,$.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(T,B=0,$=0){C=T,P=B,L=$;let j=!0,k=null,xe=!1,be=!1;if(T){const Ne=te.get(T);Ne.__useDefaultFramebuffer!==void 0?(z.bindFramebuffer(_.FRAMEBUFFER,null),j=!1):Ne.__webglFramebuffer===void 0?x.setupRenderTarget(T):Ne.__hasExternalTextures&&x.rebindTextures(T,te.get(T.texture).__webglTexture,te.get(T.depthTexture).__webglTexture);const We=T.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(be=!0);const Be=te.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Be[B])?k=Be[B][$]:k=Be[B],xe=!0):X.isWebGL2&&T.samples>0&&x.useMultisampledRTT(T)===!1?k=te.get(T).__webglMultisampledFramebuffer:Array.isArray(Be)?k=Be[$]:k=Be,v.copy(T.viewport),A.copy(T.scissor),F=T.scissorTest}else v.copy(ae).multiplyScalar(ee).floor(),A.copy(ce).multiplyScalar(ee).floor(),F=de;if(z.bindFramebuffer(_.FRAMEBUFFER,k)&&X.drawBuffers&&j&&z.drawBuffers(T,k),z.viewport(v),z.scissor(A),z.setScissorTest(F),xe){const Ne=te.get(T.texture);_.framebufferTexture2D(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ne.__webglTexture,$)}else if(be){const Ne=te.get(T.texture),We=B||0;_.framebufferTextureLayer(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,Ne.__webglTexture,$||0,We)}q=-1},this.readRenderTargetPixels=function(T,B,$,j,k,xe,be){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=te.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&be!==void 0&&(Ue=Ue[be]),Ue){z.bindFramebuffer(_.FRAMEBUFFER,Ue);try{const Ne=T.texture,We=Ne.format,Be=Ne.type;if(We!==hn&&_e.convert(We)!==_.getParameter(_.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ge=Be===Jr&&(N.has("EXT_color_buffer_half_float")||X.isWebGL2&&N.has("EXT_color_buffer_float"));if(Be!==fi&&_e.convert(Be)!==_.getParameter(_.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Be===$n&&(X.isWebGL2||N.has("OES_texture_float")||N.has("WEBGL_color_buffer_float")))&&!Ge){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=T.width-j&&$>=0&&$<=T.height-k&&_.readPixels(B,$,j,k,_e.convert(We),_e.convert(Be),xe)}finally{const Ne=C!==null?te.get(C).__webglFramebuffer:null;z.bindFramebuffer(_.FRAMEBUFFER,Ne)}}},this.copyFramebufferToTexture=function(T,B,$=0){const j=Math.pow(2,-$),k=Math.floor(B.image.width*j),xe=Math.floor(B.image.height*j);x.setTexture2D(B,0),_.copyTexSubImage2D(_.TEXTURE_2D,$,0,0,T.x,T.y,k,xe),z.unbindTexture()},this.copyTextureToTexture=function(T,B,$,j=0){const k=B.image.width,xe=B.image.height,be=_e.convert($.format),Ue=_e.convert($.type);x.setTexture2D($,0),_.pixelStorei(_.UNPACK_FLIP_Y_WEBGL,$.flipY),_.pixelStorei(_.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),_.pixelStorei(_.UNPACK_ALIGNMENT,$.unpackAlignment),B.isDataTexture?_.texSubImage2D(_.TEXTURE_2D,j,T.x,T.y,k,xe,be,Ue,B.image.data):B.isCompressedTexture?_.compressedTexSubImage2D(_.TEXTURE_2D,j,T.x,T.y,B.mipmaps[0].width,B.mipmaps[0].height,be,B.mipmaps[0].data):_.texSubImage2D(_.TEXTURE_2D,j,T.x,T.y,be,Ue,B.image),j===0&&$.generateMipmaps&&_.generateMipmap(_.TEXTURE_2D),z.unbindTexture()},this.copyTextureToTexture3D=function(T,B,$,j,k=0){if(S.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const xe=T.max.x-T.min.x+1,be=T.max.y-T.min.y+1,Ue=T.max.z-T.min.z+1,Ne=_e.convert(j.format),We=_e.convert(j.type);let Be;if(j.isData3DTexture)x.setTexture3D(j,0),Be=_.TEXTURE_3D;else if(j.isDataArrayTexture||j.isCompressedArrayTexture)x.setTexture2DArray(j,0),Be=_.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}_.pixelStorei(_.UNPACK_FLIP_Y_WEBGL,j.flipY),_.pixelStorei(_.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),_.pixelStorei(_.UNPACK_ALIGNMENT,j.unpackAlignment);const Ge=_.getParameter(_.UNPACK_ROW_LENGTH),mt=_.getParameter(_.UNPACK_IMAGE_HEIGHT),qt=_.getParameter(_.UNPACK_SKIP_PIXELS),xt=_.getParameter(_.UNPACK_SKIP_ROWS),Dn=_.getParameter(_.UNPACK_SKIP_IMAGES),dt=$.isCompressedTexture?$.mipmaps[k]:$.image;_.pixelStorei(_.UNPACK_ROW_LENGTH,dt.width),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,dt.height),_.pixelStorei(_.UNPACK_SKIP_PIXELS,T.min.x),_.pixelStorei(_.UNPACK_SKIP_ROWS,T.min.y),_.pixelStorei(_.UNPACK_SKIP_IMAGES,T.min.z),$.isDataTexture||$.isData3DTexture?_.texSubImage3D(Be,k,B.x,B.y,B.z,xe,be,Ue,Ne,We,dt.data):$.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),_.compressedTexSubImage3D(Be,k,B.x,B.y,B.z,xe,be,Ue,Ne,dt.data)):_.texSubImage3D(Be,k,B.x,B.y,B.z,xe,be,Ue,Ne,We,dt),_.pixelStorei(_.UNPACK_ROW_LENGTH,Ge),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,mt),_.pixelStorei(_.UNPACK_SKIP_PIXELS,qt),_.pixelStorei(_.UNPACK_SKIP_ROWS,xt),_.pixelStorei(_.UNPACK_SKIP_IMAGES,Dn),k===0&&j.generateMipmaps&&_.generateMipmap(Be),z.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?x.setTextureCube(T,0):T.isData3DTexture?x.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?x.setTexture2DArray(T,0):x.setTexture2D(T,0),z.unbindTexture()},this.resetState=function(){P=0,L=0,C=null,z.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===rl?"display-p3":"srgb",t.unpackColorSpace=nt.workingColorSpace===yo?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===bt?zi:Zf}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===zi?bt:Jn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class bS extends Sd{}bS.prototype.isWebGL1Renderer=!0;class TS extends Zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class al extends mi{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],a=[];o(r),u(i),c(),this.setAttribute("position",new Cn(s,3)),this.setAttribute("normal",new Cn(s.slice(),3)),this.setAttribute("uv",new Cn(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(b){const S=new G,E=new G,P=new G;for(let L=0;L<t.length;L+=3)m(t[L+0],S),m(t[L+1],E),m(t[L+2],P),l(S,E,P,b)}function l(b,S,E,P){const L=P+1,C=[];for(let q=0;q<=L;q++){C[q]=[];const K=b.clone().lerp(E,q/L),v=S.clone().lerp(E,q/L),A=L-q;for(let F=0;F<=A;F++)F===0&&q===L?C[q][F]=K:C[q][F]=K.clone().lerp(v,F/A)}for(let q=0;q<L;q++)for(let K=0;K<2*(L-q)-1;K++){const v=Math.floor(K/2);K%2===0?(h(C[q][v+1]),h(C[q+1][v]),h(C[q][v])):(h(C[q][v+1]),h(C[q+1][v+1]),h(C[q+1][v]))}}function u(b){const S=new G;for(let E=0;E<s.length;E+=3)S.x=s[E+0],S.y=s[E+1],S.z=s[E+2],S.normalize().multiplyScalar(b),s[E+0]=S.x,s[E+1]=S.y,s[E+2]=S.z}function c(){const b=new G;for(let S=0;S<s.length;S+=3){b.x=s[S+0],b.y=s[S+1],b.z=s[S+2];const E=p(b)/2/Math.PI+.5,P=d(b)/Math.PI+.5;a.push(E,1-P)}M(),f()}function f(){for(let b=0;b<a.length;b+=6){const S=a[b+0],E=a[b+2],P=a[b+4],L=Math.max(S,E,P),C=Math.min(S,E,P);L>.9&&C<.1&&(S<.2&&(a[b+0]+=1),E<.2&&(a[b+2]+=1),P<.2&&(a[b+4]+=1))}}function h(b){s.push(b.x,b.y,b.z)}function m(b,S){const E=b*3;S.x=e[E+0],S.y=e[E+1],S.z=e[E+2]}function M(){const b=new G,S=new G,E=new G,P=new G,L=new je,C=new je,q=new je;for(let K=0,v=0;K<s.length;K+=9,v+=6){b.set(s[K+0],s[K+1],s[K+2]),S.set(s[K+3],s[K+4],s[K+5]),E.set(s[K+6],s[K+7],s[K+8]),L.set(a[v+0],a[v+1]),C.set(a[v+2],a[v+3]),q.set(a[v+4],a[v+5]),P.copy(b).add(S).add(E).divideScalar(3);const A=p(P);y(L,v+0,b,A),y(C,v+2,S,A),y(q,v+4,E,A)}}function y(b,S,E,P){P<0&&b.x===1&&(a[S]=b.x-1),E.x===0&&E.z===0&&(a[S]=P/2/Math.PI+.5)}function p(b){return Math.atan2(b.z,-b.x)}function d(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new al(e.vertices,e.indices,e.radius,e.details)}}class io extends al{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new io(e.radius,e.detail)}}class Mu extends os{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jf,this.normalScale=new je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nl);const yu=768,AS={__name:"HeroBackground",setup(n){const e=$r(null);let t,i,r,s,a,o=0,l=0,u=0,c=0;const f=typeof window<"u"&&("ontouchstart"in window||navigator.maxTouchPoints>0),h=()=>{const p=e.value;if(!p||!t||!r)return;const d=p.clientWidth||window.innerWidth,b=p.clientHeight||window.innerHeight,S=d<yu;if(t.setSize(d,b),r.aspect=d/b,r.fov=S?80:75,r.position.z=S?6.5:5,r.updateProjectionMatrix(),s&&a){const E=S?.85:1,P=S?.65:1;s.scale.set(E,E,E),a.scale.set(P,P,P)}},m=(p,d)=>{u=(p/window.innerWidth-.5)*2,c=(d/window.innerHeight-.5)*2},M=p=>m(p.clientX,p.clientY),y=p=>{const d=p.touches[0];d&&m(d.clientX,d.clientY)};return mo(()=>{const p=e.value,d=p.clientWidth||window.innerWidth,b=p.clientHeight||window.innerHeight,S=new TS;r=new rn(75,d/b,.1,1e3),r.position.z=5,t=new Sd({alpha:!0,antialias:!0}),t.setSize(d,b),t.setPixelRatio(Math.min(window.devicePixelRatio,2)),p.appendChild(t.domElement),s=new mn(new io(2,1),new Mu({wireframe:!0,transparent:!0,opacity:.3})),S.add(s),a=new mn(new io(1,0),new Mu({wireframe:!1,transparent:!0,opacity:.8})),S.add(a),h(),window.addEventListener("mousemove",M),f&&window.addEventListener("touchmove",y,{passive:!0}),window.addEventListener("resize",h);const E=()=>{i=requestAnimationFrame(E),o+=(u-o)*.05,l+=(c-l)*.05,s.rotation.x+=.005,s.rotation.y+=.008,s.rotation.z+=.003,a.rotation.x-=.01,a.rotation.y-=.012;const P=window.innerWidth<yu?.35:.5;s.position.x=o*P,s.position.y=-l*P,a.position.x=o*P*1.2,a.position.y=-l*P*1.2,t.render(S,r)};E(),go(()=>{cancelAnimationFrame(i),t.dispose(),window.removeEventListener("mousemove",M),f&&window.removeEventListener("touchmove",y),window.removeEventListener("resize",h)})}),(p,d)=>(Fe(),ze("div",{ref_key:"container",ref:e,class:"absolute inset-0 w-full h-full pointer-events-none hero-background"},null,512))}},wS=Hf(AS,[["__scopeId","data-v-f624af27"]]),RS={class:"min-h-screen flex flex-col items-center justify-center px-gutter py-section-padding-v-mobile md:py-section-padding-v relative overflow-hidden mesh-gradient"},CS={class:"max-w-container-max mx-auto text-center z-10"},LS={class:"inline-flex items-center gap-2 px-3 py-1.5 rounded-md glass-panel mb-8 border-primary/10"},PS={class:"text-label-sm text-primary uppercase tracking-widest font-bold"},DS={class:"font-display-xl-mobile md:font-display-xl text-display-xl-mobile md:text-display-xl leading-tight mb-6 max-w-4xl mx-auto tracking-tighter"},US={class:"text-gradient"},IS={class:"font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10 opacity-80"},NS={class:"flex flex-col md:flex-row gap-4 justify-center items-center"},FS={href:"#iletisim",class:"w-full md:w-auto px-10 py-4 bg-primary text-white rounded-lg font-label-md glow-button"},OS={href:"#hizmetler",class:"w-full md:w-auto px-10 py-4 glass-panel text-white rounded-lg font-label-md hover:bg-white/5 transition-all border-white/10"},BS={class:"mt-20 relative w-full max-w-5xl mx-auto px-4 perspective-1000"},zS={class:"glass-panel p-6 md:p-8 rounded-xl border-white/10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] transform rotate-x-2 transition-transform duration-700 hover:rotate-x-0"},HS={class:"grid grid-cols-1 md:grid-cols-3 gap-6"},GS={class:"h-32 rounded-lg bg-white/5 flex flex-col justify-center px-6 border border-white/5"},VS={class:"text-label-sm text-on-surface-variant mb-2"},kS={class:"text-headline-md font-bold text-white"},WS={class:"h-32 rounded-lg bg-primary/10 flex flex-col justify-center px-6 border border-primary/20"},XS={class:"text-label-sm text-on-surface-variant mb-2"},$S={class:"text-headline-md font-bold text-primary"},qS={class:"h-32 rounded-lg bg-white/5 flex flex-col justify-center px-6 border border-white/5"},YS={class:"text-label-sm text-on-surface-variant mb-2"},jS={__name:"HeroSection",setup(n){const{t:e}=Pn();return(t,i)=>(Fe(),ze("section",RS,[ct(wS),I("div",CS,[I("div",LS,[I("span",PS,fe(ye(e)("hero.badge")),1)]),I("h1",DS,[Ht(fe(ye(e)("hero.title1"))+" ",1),I("span",US,fe(ye(e)("hero.titleHighlight")),1),Ht(" "+fe(ye(e)("hero.title2")),1)]),I("p",IS,fe(ye(e)("hero.subtitle")),1),I("div",NS,[I("a",FS,fe(ye(e)("hero.ctaPrimary")),1),I("a",OS,fe(ye(e)("hero.ctaSecondary")),1)])]),I("div",BS,[I("div",zS,[i[1]||(i[1]=Uf('<div class="flex items-center justify-between mb-8 border-b border-white/5 pb-4"><div class="flex gap-2"><div class="w-2.5 h-2.5 rounded-full bg-white/20"></div><div class="w-2.5 h-2.5 rounded-full bg-white/10"></div><div class="w-2.5 h-2.5 rounded-full bg-primary/40"></div></div><div class="px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-[10px] uppercase tracking-[0.18em] text-on-surface-variant"> LIVE </div></div>',1)),I("div",HS,[I("div",GS,[I("span",VS,fe(ye(e)("hero.stat1Label")),1),I("span",kS,fe(ye(e)("hero.stat1Value")),1)]),I("div",WS,[I("span",XS,fe(ye(e)("hero.stat2Label")),1),I("span",$S,fe(ye(e)("hero.stat2Value")),1)]),I("div",qS,[I("span",YS,fe(ye(e)("hero.stat3Label")),1),i[0]||(i[0]=I("span",{class:"text-headline-md font-bold text-on-surface"},"99.9%",-1))])]),i[2]||(i[2]=I("div",{class:"mt-8 h-48 rounded-lg bg-white/5 w-full flex items-center justify-center overflow-hidden border border-white/5"},[I("div",{class:"w-full h-full bg-cover bg-center opacity-20 grayscale",style:{"background-image":"url('https://lh3.googleusercontent.com/aida-public/AB6AXuBEZIgpl6lDz5no4_Zmyrl52mVp-AOgxq2QCsVvjubjzHzH8JXkxLSsAJ_DZxayrKl121YQg9zHHVrv7uQBAcnxtED87L-7L7zi6tLpO-Taz9C0ajNpjZzp707ga-b7e9FRcpFe3ouzHRirUtSOKFqipZh_Oc1PEOlO3UzXKhVPQOsjvSEfldiM2J5ajk12at__c3Epin9cZB_7zvp88lKv9SlMXaO8eNSMf8RupXBM6xMPK9lKK0XG')"}})],-1))])])]))}},KS={class:"px-gutter py-section-padding-v-mobile md:py-section-padding-v bg-surface-container-lowest/30"},ZS={class:"max-w-container-max mx-auto"},JS={class:"flex flex-col md:flex-row justify-between items-end mb-16 gap-6"},QS={class:"max-w-2xl"},eM={class:"font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-4 text-white"},tM={class:"text-body-lg text-on-surface-variant"},nM={class:"relative w-full overflow-hidden flex flex-col gap-6 rounded-2xl"},iM={class:"carousel-track py-2"},rM={class:"flex gap-6 pr-6"},sM={class:"absolute top-2 right-2 text-[9px] uppercase tracking-wider font-semibold px-1.5 py-0.5 rounded bg-white/5"},oM={class:"material-symbols-outlined text-4xl mt-2 transition-colors"},aM={class:"text-sm font-mono font-medium transition-colors"},lM={class:"flex gap-6 pr-6"},cM={class:"absolute top-2 right-2 text-[9px] uppercase tracking-wider font-semibold px-1.5 py-0.5 rounded bg-white/5"},uM={class:"material-symbols-outlined text-4xl mt-2 transition-colors"},fM={class:"text-sm font-mono font-medium transition-colors"},dM={class:"carousel-track-reverse py-2"},hM={class:"flex gap-6 pr-6"},pM={class:"absolute top-2 right-2 text-[9px] uppercase tracking-wider font-semibold px-1.5 py-0.5 rounded bg-white/5"},mM={class:"material-symbols-outlined text-4xl mt-2 transition-colors"},gM={class:"text-sm font-mono font-medium transition-colors"},_M={class:"flex gap-6 pr-6"},vM={class:"absolute top-2 right-2 text-[9px] uppercase tracking-wider font-semibold px-1.5 py-0.5 rounded bg-white/5"},xM={class:"material-symbols-outlined text-4xl mt-2 transition-colors"},SM={class:"text-sm font-mono font-medium transition-colors"},MM={__name:"TechEcosystem",setup(n){const{t:e}=Pn(),t=[{name:"Vue.js",icon:"code_blocks",category:"Frontend"},{name:"React",icon:"deployed_code",category:"Frontend"},{name:"TailwindCSS",icon:"palette",category:"Frontend"},{name:"TypeScript",icon:"data_object",category:"Frontend"},{name:"Flutter",icon:"flutter",category:"Frontend"},{name:"Node.js",icon:"terminal",category:"Backend"},{name:"Spring Boot",icon:"coffee",category:"Backend"},{name:"PostgreSQL",icon:"database",category:"Backend"},{name:"MySQL",icon:"database",category:"Backend"},{name:"Express.js",icon:"terminal",category:"Backend"},{name:"RabbitMQ",icon:"message",category:"Backend"}],i=[{name:"Docker",icon:"grid_view",category:"DevOps"},{name:"Kubernetes",icon:"hub",category:"DevOps"},{name:"AWS / Cloud",icon:"cloud",category:"DevOps"},{name:"Git / GitHub",icon:"code",category:"DevOps"},{name:"Linux",icon:"computer",category:"DevOps"},{name:"PyTorch",icon:"psychology",category:"AI"},{name:"LLM Engine",icon:"smart_toy",category:"AI"},{name:"OpenAI API",icon:"integration_instructions",category:"AI"},{name:"PyTorch",icon:"psychology",category:"AI"},{name:"LLM Engine",icon:"smart_toy",category:"AI"},{name:"OpenAI API",icon:"integration_instructions",category:"AI"}];i.sort((s,a)=>s.category.localeCompare(a.category));function r(s){switch(s){case"Frontend":return"bg-blue-500/5 hover:bg-blue-500/10 border-blue-500/20 text-blue-300 hover:border-blue-400";case"Backend":return"bg-emerald-500/5 hover:bg-emerald-500/10 border-emerald-500/20 text-emerald-300 hover:border-emerald-400";case"DevOps":return"bg-purple-500/5 hover:bg-purple-500/10 border-purple-500/20 text-purple-300 hover:border-purple-400";case"AI":return"bg-amber-500/5 hover:bg-amber-500/10 border-amber-500/20 text-amber-300 hover:border-amber-400";default:return"bg-white/5 border-white/10 text-on-surface-variant hover:border-primary"}}return(s,a)=>(Fe(),ze("section",KS,[I("div",ZS,[I("div",JS,[I("div",QS,[I("h2",eM,fe(ye(e)("ecosystem.title")),1),I("p",tM,fe(ye(e)("ecosystem.subtitle")),1)]),a[0]||(a[0]=I("div",{class:"hidden md:block"},[I("span",{class:"material-symbols-outlined text-[64px] text-primary/10"},"layers")],-1))]),I("div",nM,[a[1]||(a[1]=I("div",{class:"absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#121317] to-transparent z-10 pointer-events-none"},null,-1)),a[2]||(a[2]=I("div",{class:"absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#121317] to-transparent z-10 pointer-events-none"},null,-1)),I("div",iM,[I("div",rM,[(Fe(),ze(ft,null,zt(t,(o,l)=>I("div",{key:"row1-orig-"+l,class:pn(["w-44 h-32 rounded-xl border flex items-center justify-center flex-col gap-2 transition-all duration-300 group relative overflow-hidden px-4 flex-shrink-0",r(o.category)])},[I("span",sM,fe(o.category),1),I("span",oM,fe(o.icon),1),I("span",aM,fe(o.name),1)],2)),64))]),I("div",lM,[(Fe(),ze(ft,null,zt(t,(o,l)=>I("div",{key:"row1-dup-"+l,class:pn(["w-44 h-32 rounded-xl border flex items-center justify-center flex-col gap-2 transition-all duration-300 group relative overflow-hidden px-4 flex-shrink-0",r(o.category)])},[I("span",cM,fe(o.category),1),I("span",uM,fe(o.icon),1),I("span",fM,fe(o.name),1)],2)),64))])]),I("div",dM,[I("div",hM,[(Fe(),ze(ft,null,zt(i,(o,l)=>I("div",{key:"row2-orig-"+l,class:pn(["w-44 h-32 rounded-xl border flex items-center justify-center flex-col gap-2 transition-all duration-300 group relative overflow-hidden px-4 flex-shrink-0",r(o.category)])},[I("span",pM,fe(o.category),1),I("span",mM,fe(o.icon),1),I("span",gM,fe(o.name),1)],2)),64))]),I("div",_M,[(Fe(),ze(ft,null,zt(i,(o,l)=>I("div",{key:"row2-dup-"+l,class:pn(["w-44 h-32 rounded-xl border flex items-center justify-center flex-col gap-2 transition-all duration-300 group relative overflow-hidden px-4 flex-shrink-0",r(o.category)])},[I("span",vM,fe(o.category),1),I("span",xM,fe(o.icon),1),I("span",SM,fe(o.name),1)],2)),64))])])])])]))}},yM={id:"hizmetler",class:"px-gutter py-section-padding-v-mobile md:py-section-padding-v bg-surface-container-lowest/30"},EM={class:"max-w-container-max mx-auto"},bM={class:"flex flex-col md:flex-row justify-between items-end mb-16 gap-6"},TM={class:"max-w-2xl"},AM={class:"font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-4 text-white"},wM={class:"text-primary"},RM={class:"text-body-lg text-on-surface-variant"},CM={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"},LM={class:"w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 border border-primary/20"},PM={class:"material-symbols-outlined text-primary text-2xl"},DM={class:"text-headline-md text-[20px] mb-4 text-white"},UM={class:"text-on-surface-variant text-body-md mb-6 leading-relaxed"},IM={href:"#",class:"inline-flex items-center text-primary font-label-md gap-2 group-hover:translate-x-1 transition-transform"},NM={__name:"ServicesSection",setup(n){const{t:e,messages:t,locale:i}=Pn(),r=["devices","hub","code_blocks","auto_awesome"],s=Yn(()=>t[i.value].services.cards.map((a,o)=>({icon:r[o],...a})));return(a,o)=>(Fe(),ze("section",yM,[I("div",EM,[I("div",bM,[I("div",TM,[I("h2",AM,[Ht(fe(ye(e)("services.sectionTitle1"))+" ",1),I("span",wM,fe(ye(e)("services.sectionTitleHighlight")),1)]),I("p",RM,fe(ye(e)("services.sectionSubtitle")),1)]),o[0]||(o[0]=I("div",{class:"hidden md:block"},[I("span",{class:"material-symbols-outlined text-[64px] text-primary/10"},"terminal")],-1))]),I("div",CM,[(Fe(!0),ze(ft,null,zt(s.value,(l,u)=>(Fe(),ze("div",{key:u,class:"glass-panel p-8 rounded-xl hover:border-primary/30 transition-all duration-300 group"},[I("div",LM,[I("span",PM,fe(l.icon),1)]),I("h3",DM,fe(l.title),1),I("p",UM,fe(l.description),1),I("a",IM,[Ht(fe(ye(e)("services.details"))+" ",1),o[1]||(o[1]=I("span",{class:"material-symbols-outlined text-sm"},"arrow_forward_ios",-1))])]))),128))])])]))}},FM={class:"px-gutter py-section-padding-v-mobile md:py-section-padding-v relative overflow-hidden"},OM={class:"max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center"},BM={class:"relative"},zM={class:"glass-panel p-2 rounded-xl relative z-10 overflow-hidden border-white/10"},HM={class:"absolute bottom-10 left-10 right-10 glass-panel p-6 rounded-lg border-white/10 bg-surface-obsidian/40"},GM={class:"flex items-center gap-4 mb-3"},VM={class:"text-label-sm font-bold tracking-widest text-white uppercase"},kM={class:"text-label-md text-on-surface-variant italic font-medium"},WM={class:"font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-8 text-white tracking-tight"},XM={class:"text-gradient"},$M={class:"space-y-8"},qM={class:"flex-shrink-0 w-10 h-10 rounded-md glass-panel flex items-center justify-center border-white/10"},YM={class:"material-symbols-outlined text-primary text-xl"},jM={class:"font-headline-md text-[18px] mb-2 text-white"},KM={class:"text-on-surface-variant text-sm leading-relaxed"},ZM={__name:"AiSection",setup(n){const{t:e,messages:t,locale:i}=Pn(),r=["psychology","bolt","security"],s=Yn(()=>t[i.value].ai.features.map((a,o)=>({icon:r[o],...a})));return(a,o)=>(Fe(),ze("section",FM,[I("div",OM,[I("div",BM,[o[2]||(o[2]=I("div",{class:"absolute -inset-10 bg-primary/5 blur-[120px] rounded-full"},null,-1)),I("div",zM,[o[1]||(o[1]=I("div",{class:"bg-surface-obsidian rounded-lg p-1 overflow-hidden h-[500px]"},[I("img",{class:"w-full h-full object-cover rounded-md opacity-60 grayscale hover:grayscale-0 transition-all duration-1000",src:"https://lh3.googleusercontent.com/aida-public/AB6AXuCfpCUN3OlvCZ5mhdfKYSRH7hUB6OFv5FoonzdxU_q5wSwVW9YtlweLnhEESIEAql596fl4Hyezdy2u7LGOx6-HX8Ux74572JLO5fkdSffV-HRWTSQsEpwJghvzob1KPAnVOH31PtseoOX4ENZA4qSY4BsPdKxAOgUuoLCLlIkC8stgpCIWtTo5TzBgC2_yWLoeF-99NBvFerlLfsGRbiz-lEvWOarpdwwIEcaoDnJ8jVJSn2cxx4LI",alt:"AI Engine"})],-1)),I("div",HM,[I("div",GM,[o[0]||(o[0]=I("div",{class:"w-1.5 h-1.5 rounded-full bg-primary animate-pulse"},null,-1)),I("span",VM,fe(ye(e)("ai.engineLabel")),1)]),I("p",kM,fe(ye(e)("ai.engineQuote")),1)])])]),I("div",null,[I("h2",WM,[Ht(fe(ye(e)("ai.title1"))+" ",1),I("span",XM,fe(ye(e)("ai.titleHighlight")),1),Ht(" "+fe(ye(e)("ai.title2")),1)]),I("div",$M,[(Fe(!0),ze(ft,null,zt(s.value,(l,u)=>(Fe(),ze("div",{key:u,class:"flex gap-6"},[I("div",qM,[I("span",YM,fe(l.icon),1)]),I("div",null,[I("h4",jM,fe(l.title),1),I("p",KM,fe(l.description),1)])]))),128))])])])]))}},JM={class:"px-gutter py-24 bg-primary/5 border-y border-primary/10"},QM={class:"max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center"},ey={class:"text-label-md uppercase tracking-widest text-primary font-bold"},ty={class:"text-label-md uppercase tracking-widest text-primary font-bold"},ny={class:"text-label-md uppercase tracking-widest text-primary font-bold"},iy={__name:"StatsSection",setup(n){const{t:e}=Pn();return(t,i)=>(Fe(),ze("section",JM,[I("div",QM,[I("div",null,[i[0]||(i[0]=I("div",{class:"text-display-xl-mobile md:text-[56px] font-extrabold text-white mb-2 tracking-tighter"},"99.9%",-1)),I("div",ey,fe(ye(e)("stats.reliability")),1)]),I("div",null,[i[1]||(i[1]=I("div",{class:"text-display-xl-mobile md:text-[56px] font-extrabold text-white mb-2 tracking-tighter"},"10x",-1)),I("div",ty,fe(ye(e)("stats.speed")),1)]),I("div",null,[i[2]||(i[2]=I("div",{class:"text-display-xl-mobile md:text-[56px] font-extrabold text-white mb-2 tracking-tighter"},"100%",-1)),I("div",ny,fe(ye(e)("stats.bespoke")),1)])])]))}},ry={id:"surec",class:"px-gutter py-section-padding-v-mobile md:py-section-padding-v"},sy={class:"max-w-container-max mx-auto"},oy={class:"text-center mb-20"},ay={class:"font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-4 text-white"},ly={class:"text-primary"},cy={class:"text-body-lg text-on-surface-variant max-w-2xl mx-auto opacity-70"},uy={class:"grid grid-cols-1 md:grid-cols-4 gap-4 relative"},fy={class:"w-10 h-10 bg-surface-obsidian text-primary border border-primary/20 rounded-md flex items-center justify-center mx-auto mb-6 font-bold text-sm group-hover:border-primary transition-colors"},dy={class:"font-headline-md text-[18px] mb-3 text-white"},hy={class:"text-on-surface-variant text-xs leading-relaxed opacity-80"},py={__name:"ProcessSection",setup(n){const{t:e,messages:t,locale:i}=Pn(),r=["01","02","03","04"],s=Yn(()=>t[i.value].process.steps.map((a,o)=>({number:r[o],...a})));return(a,o)=>(Fe(),ze("section",ry,[I("div",sy,[I("div",oy,[I("h2",ay,[Ht(fe(ye(e)("process.title1"))+" ",1),I("span",ly,fe(ye(e)("process.titleHighlight")),1)]),I("p",cy,fe(ye(e)("process.subtitle")),1)]),I("div",uy,[o[0]||(o[0]=I("div",{class:"hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent z-0"},null,-1)),(Fe(!0),ze(ft,null,zt(s.value,(l,u)=>(Fe(),ze("div",{key:u,class:"relative z-10 glass-panel p-8 rounded-xl text-center group hover:bg-white/[0.03] transition-colors border-white/5"},[I("div",fy,fe(l.number),1),I("h4",dy,fe(l.title),1),I("p",hy,fe(l.description),1)]))),128))])])]))}},my={id:"iletisim",class:"px-gutter py-section-padding-v-mobile md:py-section-padding-v relative mesh-gradient"},gy={class:"max-w-4xl mx-auto glass-panel p-8 md:p-16 rounded-xl border-white/10 shadow-2xl"},_y={class:"text-center mb-12"},vy={class:"font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-4 text-white tracking-tight"},xy={class:"text-primary"},Sy={class:"text-on-surface-variant"},My={class:"grid grid-cols-1 md:grid-cols-2 gap-6"},yy={class:"space-y-2"},Ey={class:"text-label-sm uppercase tracking-widest text-on-surface-variant pl-1"},by=["placeholder"],Ty={class:"space-y-2"},Ay={class:"text-label-sm uppercase tracking-widest text-on-surface-variant pl-1"},wy=["placeholder"],Ry={class:"space-y-2"},Cy={class:"text-label-sm uppercase tracking-widest text-on-surface-variant pl-1"},Ly=["value"],Py={class:"space-y-2"},Dy={class:"text-label-sm uppercase tracking-widest text-on-surface-variant pl-1"},Uy=["placeholder"],Iy=["disabled"],Ny={__name:"ContactSection",setup(n){const{t:e,messages:t,locale:i}=Pn(),r=Yn(()=>t[i.value].contact.serviceOptions),s=Xr({name:"",email:"",service:"",details:""}),a=$r(!1),o=Xr({message:"",success:!1});async function l(){o.message="",a.value=!0;try{const c=await(await fetch("https://sartechs-fullstack.vercel.app/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...s})})).json();o.message=c.message,o.success=c.success,c.success&&(s.name="",s.email="",s.service="",s.details="")}catch{o.message="Bağlantı hatası. Lütfen tekrar deneyin.",o.success=!1}finally{a.value=!1}}return(u,c)=>(Fe(),ze("section",my,[I("div",gy,[I("div",_y,[I("h2",vy,[Ht(fe(ye(e)("contact.title1"))+" ",1),I("span",xy,fe(ye(e)("contact.titleHighlight")),1),Ht(" "+fe(ye(e)("contact.title2")),1)]),I("p",Sy,fe(ye(e)("contact.subtitle")),1)]),I("form",{class:"space-y-6",onSubmit:Nr(l,["prevent"])},[I("div",My,[I("div",yy,[I("label",Ey,fe(ye(e)("contact.labelName")),1),hs(I("input",{"onUpdate:modelValue":c[0]||(c[0]=f=>s.name=f),type:"text",placeholder:ye(e)("contact.placeholderName"),class:"w-full bg-white/[0.03] border border-white/10 rounded-lg px-5 py-3.5 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-white/10 text-white"},null,8,by),[[Vo,s.name]])]),I("div",Ty,[I("label",Ay,fe(ye(e)("contact.labelEmail")),1),hs(I("input",{"onUpdate:modelValue":c[1]||(c[1]=f=>s.email=f),type:"email",placeholder:ye(e)("contact.placeholderEmail"),class:"w-full bg-white/[0.03] border border-white/10 rounded-lg px-5 py-3.5 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-white/10 text-white"},null,8,wy),[[Vo,s.email]])])]),I("div",Ry,[I("label",Cy,fe(ye(e)("contact.labelService")),1),hs(I("select",{"onUpdate:modelValue":c[2]||(c[2]=f=>s.service=f),class:"w-full bg-white/[0.03] border border-white/10 rounded-lg px-5 py-3.5 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all text-white appearance-none"},[(Fe(!0),ze(ft,null,zt(r.value,f=>(Fe(),ze("option",{key:f,value:f,class:"bg-surface-obsidian"},fe(f),9,Ly))),128))],512),[[jp,s.service]])]),I("div",Py,[I("label",Dy,fe(ye(e)("contact.labelDetails")),1),hs(I("textarea",{"onUpdate:modelValue":c[3]||(c[3]=f=>s.details=f),rows:"4",placeholder:ye(e)("contact.placeholderDetails"),class:"w-full bg-white/[0.03] border border-white/10 rounded-lg px-5 py-3.5 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-white/10 text-white"},null,8,Uy),[[Vo,s.details]])]),I("button",{type:"submit",disabled:a.value,class:"w-full py-4 bg-primary text-white rounded-lg font-bold text-base glow-button tracking-widest transition-all uppercase disabled:opacity-50 disabled:cursor-not-allowed"},fe(a.value?"...":ye(e)("contact.submit")),9,Iy),o.message?(Fe(),ze("p",{key:0,class:pn([o.success?"text-green-400":"text-red-400","text-center text-sm pt-2"])},fe(o.message),3)):xo("",!0)],32)])]))}},Fy={id:"hakkimizda",class:"px-gutter py-section-padding-v-mobile md:py-section-padding-v bg-surface-container-lowest/30"},Oy={class:"max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center"},By={class:"inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.28em] text-primary mb-6"},zy={class:"font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-6 text-white tracking-tight"},Hy={class:"text-primary"},Gy={class:"text-body-lg text-on-surface-variant max-w-xl leading-relaxed mb-8"},Vy={class:"space-y-4"},ky={class:"leading-relaxed"},Wy={class:"relative"},Xy={class:"glass-panel relative overflow-hidden rounded-2xl border border-white/10 p-6 md:p-8 shadow-[0_30px_60px_-20px_rgba(14,165,233,0.20)]"},$y={class:"mb-6 flex items-center justify-between"},qy={class:"text-[10px] font-bold uppercase tracking-[0.28em] text-on-surface-variant"},Yy={class:"mt-2 text-xl font-semibold text-white"},jy={class:"space-y-4"},Ky={class:"mb-2 flex items-center justify-between"},Zy={class:"text-sm font-medium text-white"},Jy={class:"text-primary text-xs font-semibold uppercase tracking-[0.18em]"},Qy={key:0,class:"text-sm leading-relaxed text-on-surface-variant"},eE={key:1,class:"mt-3 flex flex-wrap gap-2"},tE={__name:"AboutSection",setup(n){const{t:e,messages:t,locale:i}=Pn(),r=Yn(()=>t[i.value].about.points),s=Yn(()=>t[i.value].about.techs),a=Yn(()=>t[i.value].about.card.items);return(o,l)=>(Fe(),ze("section",Fy,[I("div",Oy,[I("div",null,[I("span",By,fe(ye(e)("nav.about")),1),I("h2",zy,[Ht(fe(ye(e)("about.title1"))+" ",1),I("span",Hy,fe(ye(e)("about.titleHighlight")),1),Ht(" "+fe(ye(e)("about.title2")),1)]),I("p",Gy,fe(ye(e)("about.subtitle")),1),I("ul",Vy,[(Fe(!0),ze(ft,null,zt(r.value,(u,c)=>(Fe(),ze("li",{key:c,class:"flex items-start gap-3 text-on-surface-variant"},[l[0]||(l[0]=I("span",{class:"mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary border border-primary/20"},[I("span",{class:"material-symbols-outlined text-[14px]"},"check")],-1)),I("span",ky,fe(u),1)]))),128))])]),I("div",Wy,[l[2]||(l[2]=I("div",{class:"absolute -right-8 top-8 h-32 w-32 rounded-full bg-primary/10 blur-3xl"},null,-1)),I("div",Xy,[l[1]||(l[1]=I("div",{class:"absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/80 to-transparent"},null,-1)),I("div",$y,[I("div",null,[I("p",qy,fe(ye(e)("about.card.label")),1),I("h3",Yy,fe(ye(e)("about.card.title")),1)])]),I("div",jy,[(Fe(!0),ze(ft,null,zt(a.value,(u,c)=>(Fe(),ze("div",{key:c,class:"rounded-xl border border-white/10 bg-white/[0.02] p-4"},[I("div",Ky,[I("span",Zy,fe(u.title),1),I("span",Jy,fe(String(c+1).padStart(2,"0")),1)]),u.description?(Fe(),ze("p",Qy,fe(u.description),1)):c===a.value.length-1?(Fe(),ze("div",eE,[(Fe(!0),ze(ft,null,zt(s.value,(f,h)=>(Fe(),ze("span",{key:h,class:"rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1.5 text-[11px] text-white/80"},fe(f),1))),128))])):xo("",!0)]))),128))])])])])]))}},nE={class:"w-full border-t border-white/5 bg-surface-obsidian"},iE={class:"flex flex-col md:flex-row justify-between items-center px-gutter py-section-padding-v-mobile max-w-container-max mx-auto gap-8"},rE={class:"flex flex-col items-center md:items-start gap-4"},sE={class:"text-on-surface-variant text-xs max-w-xs text-center md:text-left opacity-60"},oE={class:"flex gap-12"},aE={class:"flex flex-col gap-3 text-center md:text-left"},lE={class:"font-label-md text-primary mb-2 uppercase tracking-widest text-[10px]"},cE={class:"flex flex-col gap-3 text-center md:text-left"},uE={class:"font-label-md text-primary mb-2 uppercase tracking-widest text-[10px]"},fE={class:"flex flex-col items-center md:items-end gap-6"},dE={class:"font-body-md text-[11px] text-on-surface-variant opacity-40"},hE={__name:"AppFooter",setup(n){const{t:e}=Pn();return(t,i)=>(Fe(),ze("footer",nE,[I("div",iE,[I("div",rE,[i[0]||(i[0]=I("img",{src:"https://lh3.googleusercontent.com/aida/AP1WRLty_fiSjelvnvJUU_N9Vgoqa25s-UYGEfXUw3XsRfqQeEVJsggnyXPwHaO2vaOsO7PgQOOcEMNlh-KiVFSFU-YO4Y3ShyMAICfmpEo18XkrYAVDE_qPXCHTd0Cy-P5dg5pg_O50VYFEJgYJwz1fnZlmQR5gLLDeW1DbsSo0eENeHzU_dEZ0d3UtPAt4ZVJ4eD6MoO9x9tFEM_4JutbsQbTs3wyc9ZlLVTvnLKWOBNAckoIa0p2RmgirmWs",alt:"Sartechs",class:"h-10 w-auto logo-filter"},null,-1)),I("p",sE,fe(ye(e)("footer.tagline")),1)]),I("div",oE,[I("div",aE,[I("span",lE,fe(ye(e)("footer.company")),1),(Fe(!0),ze(ft,null,zt(ye(e)("footer.companyLinks"),r=>(Fe(),ze("a",{key:r,href:"#",class:"text-on-surface-variant hover:text-white transition-colors text-xs"},fe(r),1))),128))]),I("div",cE,[I("span",uE,fe(ye(e)("footer.support")),1),(Fe(!0),ze(ft,null,zt(ye(e)("footer.supportLinks"),r=>(Fe(),ze("a",{key:r,href:"#",class:"text-on-surface-variant hover:text-white transition-colors text-xs"},fe(r),1))),128))])]),I("div",fE,[i[1]||(i[1]=Uf('<div class="flex gap-4"><a href="#" class="w-9 h-9 glass-panel rounded-lg flex items-center justify-center hover:bg-primary/10 transition-all border-white/5"><span class="material-symbols-outlined text-[18px]">share</span></a><a href="#" class="w-9 h-9 glass-panel rounded-lg flex items-center justify-center hover:bg-primary/10 transition-all border-white/5"><span class="material-symbols-outlined text-[18px]">alternate_email</span></a></div>',1)),I("p",dE,"© "+fe(new Date().getFullYear())+" "+fe(ye(e)("footer.copyright")),1)])])]))}},pE={class:"font-body-md text-on-surface selection:bg-primary/30 selection:text-white"},mE={class:"relative pt-24 overflow-hidden"},gE={__name:"App",setup(n){return im(),(e,t)=>(Fe(),ze("div",pE,[ct(pm),I("main",mE,[ct(jS),ct(NM),ct(ZM),ct(iy),ct(py),ct(tE),ct(MM),ct(Ny)]),ct(hE)]))}};em(gE).mount("#app");
