!function(){var t,e={5912:function(t,e,n){var i=n(6771);i.keys().forEach(i)},2538:function(t,e,n){"use strict";n(5912);var i=JSON.parse('{"logo":{"src":"logo.svg","href":"landing.html"},"navigation":{"items":[{"content":"О нас","href":"/mock-address/change-me"},{"content":"Услуги","subNavigation":[{"content":"Проживание","href":"/mock-address/change-me"},{"content":"Питание","href":"/mock-address/change-me"},{"content":"Уборка номеров","href":"/mock-address/change-me"}]},{"content":"Вакансии","href":"/mock-address/change-me"},{"content":"Новости","href":"/mock-address/change-me"},{"content":"Соглашения","subNavigation":[{"content":"Бронирование услуг","href":"/mock-address/change-me"},{"content":"Политика конфиденциальности","href":"/mock-address/change-me"},{"content":"Условия обслуживания","href":"/mock-address/change-me"}]}]},"signInButton":{"text":"войти","theme":"bordered-header","href":"sign-in.html"},"registrationButton":{"text":"зарегистрироваться","theme":"long-header","href":"registration.html"}}');function r(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function a(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function o(t,e){c(t,e),e.add(t)}function s(t,e,n){c(t,e),e.set(t,n)}function c(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}function f(t,e){return function(t,e){return e.get?e.get.call(t):e.value}(t,l(t,e,"get"))}function u(t,e,n){return function(t,e,n){if(e.set)e.set.call(t,n);else{if(!e.writable)throw new TypeError("attempted to set read only private field");e.value=n}}(t,l(t,e,"set"),n),n}function l(t,e,n){if(!e.has(t))throw new TypeError("attempted to "+n+" private field on non-instance");return e.get(t)}function h(t,e,n){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return n}var p=new WeakMap,d=new WeakMap,v=new WeakMap,w=new WeakSet,g=new WeakSet,b=new WeakSet,m=new WeakSet;function y(t){u(this,d,t.find(".js-".concat(f(this,p)))),u(this,v,f(this,d).find(".js-".concat(f(this,p),"__header-wrapper")))}function k(){h(this,b,x).call(this)}function x(){f(this,v).on("click.navigationItem",h(this,m,j).bind(this))}function j(){f(this,d).toggleClass("".concat(f(this,p),"_opened"))}var E=a((function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),o(this,m),o(this,b),o(this,g),o(this,w),s(this,p,{writable:!0,value:"navigation-item"}),s(this,d,{writable:!0,value:void 0}),s(this,v,{writable:!0,value:void 0}),h(this,w,y).call(this,e),h(this,g,k).call(this)})),W=n(5638);function T(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function O(t,e,n){return e&&T(t.prototype,e),n&&T(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function S(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function M(t,e){_(t,e),e.add(t)}function C(t,e,n){_(t,e),e.set(t,n)}function _(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}function P(t,e){return function(t,e){return e.get?e.get.call(t):e.value}(t,z(t,e,"get"))}function N(t,e,n){return function(t,e,n){if(e.set)e.set.call(t,n);else{if(!e.writable)throw new TypeError("attempted to set read only private field");e.value=n}}(t,z(t,e,"set"),n),n}function z(t,e,n){if(!e.has(t))throw new TypeError("attempted to "+n+" private field on non-instance");return e.get(t)}function B(t,e,n){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return n}var I=new WeakMap,$=new WeakMap,D=new WeakMap,F=new WeakMap,U=new WeakMap,A=new WeakSet,J=new WeakSet,L=new WeakSet,Z=O((function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};S(this,t),M(this,L),M(this,J),M(this,A),C(this,I,{writable:!0,value:"navigation"}),C(this,$,{writable:!0,value:void 0}),C(this,D,{writable:!0,value:void 0}),C(this,F,{writable:!0,value:void 0}),C(this,U,{writable:!0,value:[]}),B(this,A,q).call(this,e,n),B(this,L,H).call(this)}));function q(t,e){N(this,D,e),N(this,$,t.find(".js-".concat(P(this,I)))),N(this,F,P(this,$).find(".js-".concat(P(this,I),"__item"))),P(this,F).each(B(this,J,G).bind(this))}function G(t,e){var n=W(e);P(this,D).items[t].subNavigation&&P(this,U).push(new E(n))}function H(){}var K=Z;function Q(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function R(t,e,n){return e&&Q(t.prototype,e),n&&Q(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function V(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function X(t,e){tt(t,e),e.add(t)}function Y(t,e,n){tt(t,e),e.set(t,n)}function tt(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}function et(t,e){return function(t,e){return e.get?e.get.call(t):e.value}(t,it(t,e,"get"))}function nt(t,e,n){return function(t,e,n){if(e.set)e.set.call(t,n);else{if(!e.writable)throw new TypeError("attempted to set read only private field");e.value=n}}(t,it(t,e,"set"),n),n}function it(t,e,n){if(!e.has(t))throw new TypeError("attempted to "+n+" private field on non-instance");return e.get(t)}function rt(t,e,n){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return n}var at=new WeakMap,ot=new WeakMap,st=new WeakMap,ct=new WeakSet,ft=new WeakSet,ut=new WeakSet,lt=new WeakSet,ht=new WeakSet,pt=R((function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};V(this,t),X(this,ht),X(this,lt),X(this,ut),X(this,ft),X(this,ct),Y(this,at,{writable:!0,value:"header"}),Y(this,ot,{writable:!0,value:void 0}),Y(this,st,{writable:!0,value:void 0}),rt(this,ct,dt).call(this,e,n),rt(this,ft,vt).call(this)}));function dt(t,e){var n=e.navigation,i=void 0===n?{}:n;nt(this,ot,t.find(".js-".concat(et(this,at)))),nt(this,st,et(this,ot).find(".js-".concat(et(this,at),"__menu-button"))),new K(et(this,ot),i)}function vt(){rt(this,ut,wt).call(this)}function wt(){et(this,st).on("click.header",rt(this,lt,gt).bind(this))}function gt(){rt(this,ht,bt).call(this)}function bt(){et(this,ot).toggleClass("".concat(et(this,at),"_opened"))}var mt=pt,yt=(n(3045),n(9040));n(5940),n(4174),n(2760),n(4210),n(373),n(4687),n(1032),n(1539),n(8552),n(6258),n(4908),n(8165),n(3531),n(19),n(3577),n(4945),n(2485),n(6829),n(6266),n(8903);try{globalThis.IMask=yt.Z}catch(t){}function kt(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function xt(t,e,n){return e&&kt(t.prototype,e),n&&kt(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function jt(t,e,n){Et(t,e),e.set(t,n)}function Et(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}function Wt(t,e){return function(t,e){return e.get?e.get.call(t):e.value}(t,Tt(t,e,"get"))}function Tt(t,e,n){if(!e.has(t))throw new TypeError("attempted to "+n+" private field on non-instance");return e.get(t)}var Ot=new WeakMap,St=new WeakMap,Mt=new WeakSet;function Ct(t){var e,n;n=t,function(t,e,n){if(e.set)e.set.call(t,n);else{if(!e.writable)throw new TypeError("attempted to set read only private field");e.value=n}}(e=this,Tt(e,St,"set"),n),new mt(Wt(this,St).find(".js-".concat(Wt(this,Ot),"__header")),i)}var _t=xt((function t(e){var n;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),Et(this,n=Mt),n.add(this),jt(this,Ot,{writable:!0,value:"layout"}),jt(this,St,{writable:!0,value:void 0}),function(t,e,n){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return n}(this,Mt,Ct).call(this,e)}));!function(t){new _t(t(".js-".concat("layout")))}(n(5638))},6771:function(t,e,n){var i={"./android-chrome-192x192.png":4027,"./android-chrome-512x512.png":7173,"./apple-touch-icon.png":8439,"./browserconfig.xml":2955,"./favicon-16x16.png":7606,"./favicon-32x32.png":2844,"./favicon.ico":7154,"./mstile-144x144.png":4185,"./mstile-150x150.png":9051,"./mstile-310x150.png":2289,"./mstile-310x310.png":2830,"./mstile-70x70.png":9297,"./safari-pinned-tab.svg":7946};function r(t){var e=a(t);return n(e)}function a(t){if(!n.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}r.keys=function(){return Object.keys(i)},r.resolve=a,t.exports=r,r.id=6771},4027:function(t,e,n){"use strict";t.exports=n.p+"assets/favicons/android-chrome-192x19264aac00af602c76857ab.png"},7173:function(t,e,n){"use strict";t.exports=n.p+"assets/favicons/android-chrome-512x5128456a8b06f4149fddb71.png"},8439:function(t,e,n){"use strict";t.exports=n.p+"assets/favicons/apple-touch-icon5340d5b7600eb154a442.png"},2955:function(t,e,n){"use strict";t.exports=n.p+"assets/favicons/browserconfig64234b8c3cc59b2762ec.xml"},7606:function(t,e,n){"use strict";t.exports=n.p+"assets/favicons/favicon-16x1649c48ae8c72841cc5532.png"},2844:function(t,e,n){"use strict";t.exports=n.p+"assets/favicons/favicon-32x32e319382f97bb6c3a43ee.png"},7154:function(t,e,n){"use strict";t.exports=n.p+"assets/favicons/favicon4cd1837b1ff532ec35e8.ico"},4185:function(t,e,n){"use strict";t.exports=n.p+"assets/favicons/mstile-144x144c39cd52f91cce0242624.png"},9051:function(t,e,n){"use strict";t.exports=n.p+"assets/favicons/mstile-150x150b641ca805df5695f0100.png"},2289:function(t,e,n){"use strict";t.exports=n.p+"assets/favicons/mstile-310x150565035bac239eda89e64.png"},2830:function(t,e,n){"use strict";t.exports=n.p+"assets/favicons/mstile-310x3102e5c71b60b34d42896eb.png"},9297:function(t,e,n){"use strict";t.exports=n.p+"assets/favicons/mstile-70x700ad2b512f2cb8655dda0.png"},7946:function(t,e,n){"use strict";t.exports=n.p+"assets/favicons/safari-pinned-tabf0eb36dd5d1b35a47c8c.svg"}},n={};function i(t){var r=n[t];if(void 0!==r)return r.exports;var a=n[t]={exports:{}};return e[t].call(a.exports,a,a.exports,i),a.exports}i.m=e,t=[],i.O=function(e,n,r,a){if(!n){var o=1/0;for(u=0;u<t.length;u++){n=t[u][0],r=t[u][1],a=t[u][2];for(var s=!0,c=0;c<n.length;c++)(!1&a||o>=a)&&Object.keys(i.O).every((function(t){return i.O[t](n[c])}))?n.splice(c--,1):(s=!1,a<o&&(o=a));if(s){t.splice(u--,1);var f=r();void 0!==f&&(e=f)}}return e}a=a||0;for(var u=t.length;u>0&&t[u-1][2]>a;u--)t[u]=t[u-1];t[u]=[n,r,a]},i.d=function(t,e){for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){var t;i.g.importScripts&&(t=i.g.location+"");var e=i.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var n=e.getElementsByTagName("script");n.length&&(t=n[n.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=t}(),function(){var t={826:0,955:0};i.O.j=function(e){return 0===t[e]};var e=function(e,n){var r,a,o=n[0],s=n[1],c=n[2],f=0;if(o.some((function(e){return 0!==t[e]}))){for(r in s)i.o(s,r)&&(i.m[r]=s[r]);if(c)var u=c(i)}for(e&&e(n);f<o.length;f++)a=o[f],i.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return i.O(u)},n=self.webpackChunk=self.webpackChunk||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var r=i.O(void 0,[955,306],(function(){return i(2538)}));r=i.O(r)}();