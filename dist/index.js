var T=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var z=T(D=>{"use strict";Object.defineProperty(D,"__esModule",{value:!0}),D.parseMultiDataPaths=ne,D.getDataOnPath=void 0;var V=/^\s/,w=function(e,t){throw new Error('Parsing data path "'+e+'" failed at char "'+e[t]+'" (index '+t+")")},ee=function(e,t){for(var r=t.index;t.index<t.length;){var a=e[t.index];if(/^[0-9]/.test(a)){t.index++;continue}break}return r===t.index&&w(e,t.index),parseInt(e.slice(r,t.index),10)},B=function(e,t){var r=t.index,a=e[r];if(/^[_a-zA-Z$]/.test(a))for(t.index++;t.index<t.length;){var p=e[t.index];if(/^[_a-zA-Z0-9$]/.test(p)){t.index++;continue}break}else w(e,t.index);return e.slice(r,t.index)},N=function(e,t){for(var r=[B(e,t)],a={deepCmp:!1};t.index<t.length;){var p=e[t.index];if(p==="[")t.index++,r.push(ee(e,t)),e[t.index]!=="]"&&w(e,t.index),t.index++;else if(p==="."){if(t.index++,e[t.index]==="*"){if(t.index++,e[t.index]==="*"){t.index++,a.deepCmp=!0;break}w(e,t.index)}r.push(B(e,t))}else break}return{path:r,options:a}},te=function(e,t){for(;V.test(e[t.index]);)t.index++;for(var r=[N(e,t)],a=!1;t.index<t.length;){var p=e[t.index];V.test(p)?t.index++:p===","?(a=!0,t.index++):a?(a=!1,r.push(N(e,t))):w(e,t.index)}return r},re=function(e,t){t.index<t.length&&w(e,t.index)};function ne(e){var t={length:e.length,index:0},r=te(e,t);return re(e,t),r}var oe=function(e,t){var r=e;return t.forEach(function(a){r=typeof r!="object"||r===null?void 0:r[a]}),r};D.getDataOnPath=oe});var $=T((Pe,H)=>{H.exports=function(){let t=null,r;function a(n){return n?typeof n=="object"||typeof n=="function":!1}function p(n){if(n!==null&&!a(n))throw new TypeError("Object prototype may only be an Object or null: "+n)}let o=Object,d=Boolean(o.create)||!({__proto__:null}instanceof o),c=o.create||(d?function(i){return p(i),{__proto__:i}}:function(i){if(p(i),i===null)throw new SyntaxError("Native Object.create is required to create objects with null prototype");var v=function(){};return v.prototype=i,new v}),l=function(){return null},_=o.getPrototypeOf||([].__proto__===Array.prototype?function(i){let v=i.__proto__;return a(v)?v:null}:l);return r=function(n,i){if((this&&this instanceof r?this.constructor:void 0)===void 0)throw new TypeError("Constructor Proxy requires 'new'");if(!a(n)||!a(i))throw new TypeError("Cannot create proxy with a non-object as target or handler");let y=function(){};t=function(){n=null,y=function(u){throw new TypeError(`Cannot perform '${u}' on a proxy that has been revoked`)}},setTimeout(function(){t=null},0);let h=i;i={get:null,set:null,apply:null,construct:null};for(let u in h){if(!(u in i))throw new TypeError(`Proxy polyfill does not support trap '${u}'`);i[u]=h[u]}typeof h=="function"&&(i.apply=h.apply.bind(h));let f=_(n),s,x=!1,O=!1;typeof n=="function"?(s=function(){let b=this&&this.constructor===s,P=Array.prototype.slice.call(arguments);if(y(b?"construct":"apply"),b&&i.construct)return i.construct.call(this,n,P);if(!b&&i.apply)return i.apply(n,this,P);if(b){P.unshift(n);let M=n.bind.apply(n,P);return new M}return n.apply(this,P)},x=!0):n instanceof Array?(s=[],O=!0):s=d||f!==null?c(f):{};let j=i.get?function(u){return y("get"),i.get(this,u,s)}:function(u){return y("get"),this[u]},q=i.set?function(u,b){y("set");let P=i.set(this,u,b,s)}:function(u,b){y("set"),this[u]=b},F=o.getOwnPropertyNames(n),A={};F.forEach(function(u){if((x||O)&&u in s)return;let b=o.getOwnPropertyDescriptor(n,u),P={enumerable:Boolean(b.enumerable),get:j.bind(n,u),set:q.bind(n,u)};o.defineProperty(s,u,P),A[u]=!0});let C=!0;if(x||O){let u=o.setPrototypeOf||([].__proto__===Array.prototype?function(P,M){return p(M),P.__proto__=M,P}:l);f&&u(s,f)||(C=!1)}if(i.get||!C)for(let u in n)A[u]||o.defineProperty(s,u,{get:j.bind(n,u)});return o.seal(n),o.seal(s),s},r.revocable=function(n,i){return{proxy:new r(n,i),revoke:t}},r}});var X=T(E=>{"use strict";Object.defineProperty(E,"__esModule",{value:!0}),E.create=ce,E.unwrap=U;var ie=ae($());function ae(e){return e&&e.__esModule?e:{default:e}}var ue=ie.default(),G=function(e,t,r){if(typeof e!="object"||e===null)return e;var a,p={get:function(o,d){if(d==="__rawObject__")return o;var c=r.concat(d),l=o[d];return t.push({path:c,value:l}),G(l,t,c)}};try{a=new Proxy(e,p)}catch(o){a=new ue(e,p)}return a};function ce(e,t){return G(e,t,[])}function U(e){return Array.isArray(e)&&typeof e.__rawObject__!="object"?e.map(function(t){return U(t)}):typeof e!="object"||e===null||typeof e.__rawObject__!="object"?e:e.__rawObject__}});var Z=T(I=>{"use strict";Object.defineProperty(I,"__esModule",{value:!0}),I.behavior=void 0;var K,se=J(require("rfdc")),fe=J(require("fast-deep-equal")),m=S(z()),k=S(X());function Y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function J(e){return e&&e.__esModule?e:{default:e}}function S(e){if(e&&e.__esModule)return e;var t={};if(e!=null){for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};a.get||a.set?Object.defineProperty(t,r,a):t[r]=e[r]}}return t.default=e,t}var L=se.default({proto:!0}),pe=0,de=Behavior({lifetimes:{attached:function(){this.setData({_computedWatchInit:"attached"})},created:function(){this.setData({_computedWatchInit:"created"})}},definitionFilter:function(e){var t=e.computed,r=e.watch,a=[],p=pe++;a.push({fields:"_computedWatchInit",observer:function(){var o=this.data._computedWatchInit;if(o==="created"){var d={computedUpdaters:[],computedRelatedPathValues:{},watchCurVal:{},_triggerFromComputedAttached:{}};this._computedWatchInfo||(this._computedWatchInfo={}),this._computedWatchInfo[p]=d,r&&Object.keys(r).forEach(function(l){var _=m.parseMultiDataPaths(l).map(function(n){var i=n.path,v=n.options,y=m.getDataOnPath(this.data,i);return v.deepCmp?L(y):y}.bind(this));d.watchCurVal[l]=_}.bind(this))}else if(o==="attached"){var c=this._computedWatchInfo[p];t&&Object.keys(t).forEach(function(l){var _=t[l],n=[],i=_(k.create(this.data,n)),v=n.map(function(h){var f=h.path;return{path:f,value:m.getDataOnPath(this.data,f)}}.bind(this));this.setData(Y({},l,k.unwrap(i))),c._triggerFromComputedAttached[l]=!0,c.computedRelatedPathValues[l]=v;var y=function(){for(var h=c.computedRelatedPathValues[l],f=!1,s=0;s<h.length;s++){var x=h[s],O=x.path;if(x.value!==m.getDataOnPath(this.data,O)){f=!0;break}}if(!f)return!1;var j=[],q=_(k.create(this.data,j));this.setData(Y({},l,k.unwrap(q)));var F=j.map(function(A){var C=A.path;return{path:C,value:m.getDataOnPath(this.data,C)}}.bind(this));return c.computedRelatedPathValues[l]=F,!0}.bind(this);c.computedUpdaters.push(y)}.bind(this))}}}),t&&a.push({fields:"**",observer:function(){if(this._computedWatchInfo){var o,d=this._computedWatchInfo[p];if(d)do o=d.computedUpdaters.some(function(c){return c.call(this)}.bind(this));while(o)}}}),r&&Object.keys(r).forEach(function(o){var d=m.parseMultiDataPaths(o);a.push({fields:o,observer:function(){if(this._computedWatchInfo){var c=this._computedWatchInfo[p];if(c){if(Object.keys(c._triggerFromComputedAttached).length){var l={};for(var _ in d.forEach(function(f){return l[f.path[0]]=!0}),c._triggerFromComputedAttached)if(c._triggerFromComputedAttached.hasOwnProperty(_)&&l[_]&&c._triggerFromComputedAttached[_])return void(c._triggerFromComputedAttached[_]=!1)}var n=c.watchCurVal[o],i=d.map(function(f){var s=f.path,x=f.options;return{val:m.getDataOnPath(this.data,s),options:x}}.bind(this)),v=i.map(function(f){var s=f.val;return f.options.deepCmp?L(s):s});c.watchCurVal[o]=v;for(var y=!1,h=0;h<v.length;h++)if(d[h].options.deepCmp?!fe.default(n[h],v[h]):n[h]!==v[h]){y=!0;break}y&&r[o].apply(this,i.map(function(f){return f.val}))}}}})}),typeof e.observers!="object"&&(e.observers={}),Array.isArray(e.observers)?(K=e.observers).push.apply(K,a):a.forEach(function(o){var d=e.observers[o.fields];d?e.observers[o.fields]=function(){o.observer.call(this),d.call(this)}:e.observers[o.fields]=o.observer})}});I.behavior=de});"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"behavior",{enumerable:!0,get:function(){return R.behavior}}),exports.ComponentWithComputed=le,exports.BehaviorWithComputed=he,exports.DataTracerMode=exports.setCurrentDataTracerMode=exports.getCurrentDataTracerMode=void 0;var g,W,R=Z();function le(e){return Array.isArray(e.behaviors)||(e.behaviors=[]),e.behaviors.unshift(R.behavior),Component(e)}function he(e){return Array.isArray(e.behaviors)||(e.behaviors=[]),e.behaviors.unshift(R.behavior),Behavior(e)}exports.DataTracerMode=W,(g=W||(exports.DataTracerMode=W={}))[g.Auto=0]="Auto",g[g.Proxy=1]="Proxy",g[g.DefineProperty=2]="DefineProperty";var Q=W.Auto,ve=function(){return Q};exports.getCurrentDataTracerMode=ve;var ye=function(e){Q=e};exports.setCurrentDataTracerMode=ye;
