!function(){"use strict";var e,n={3718:function(e,n,t){t(2018),t(2578),t(5496)},1935:function(e,n,t){t(3718)},5496:function(e,n,t){t(6348)},6348:function(e,n,t){t(2578)},5430:function(e,n,t){t(7560),t(9633);var r=t(7190),o=t(2578);function a(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,n,t){return n&&a(e.prototype,n),t&&a(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function i(e,n,t){s(e,n),n.set(e,t)}function s(e,n){if(n.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function d(e,n){return function(e,n){return n.get?n.get.call(e):n.value}(e,h(e,n,"get"))}function h(e,n,t){if(!n.has(e))throw new TypeError("attempted to "+t+" private field on non-instance");return n.get(e)}var m=new WeakMap,f=new WeakMap,u=new WeakSet;function l(e,n){var t,a,c=n.headerDefault,i=void 0===c?{}:c,s=n.headerSignedIn,u=void 0===s?{}:s;a=e,function(e,n,t){if(n.set)n.set.call(e,t);else{if(!n.writable)throw new TypeError("attempted to set read only private field");n.value=t}}(t=this,h(t,f,"set"),a);var l=(0,o.Ly)({$parent:d(this,f),component:d(this,m),element:"header-default"});new r.Z({$parent:l,options:i});var g=(0,o.Ly)({$parent:d(this,f),component:d(this,m),element:"header-signed-in"});new r.Z({$parent:g,options:u})}var g=c((function e(n){var t,r=n.$element,o=n.options,a=void 0===o?{}:o;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),s(this,t=u),t.add(this),i(this,m,{writable:!0,value:"headers-and-footers"}),i(this,f,{writable:!0,value:void 0}),function(e,n,t){if(!n.has(e))throw new TypeError("attempted to get private field on non-instance");return t}(this,u,l).call(this,r,a)})),p=JSON.parse('{"header":{"logo":{"src":"logoUIKit.svg","href":"/mock-address/change-me","theme":"uiKit"}},"headerDefault":{"logo":{"src":"logo.svg","href":"/mock-address/change-me"},"navigation":{"items":[{"content":"О нас","isActive":true,"href":"/mock-address/change-me"},{"content":"Услуги","subNavigation":[{"content":"Проживание","href":"/mock-address/change-me"},{"content":"Питание","href":"/mock-address/change-me"},{"content":"Уборка номеров","href":"/mock-address/change-me"}]},{"content":"Вакансии","href":"/mock-address/change-me"},{"content":"Новости","href":"/mock-address/change-me"},{"content":"Соглашения","subNavigation":[{"content":"Бронирование услуг","href":"/mock-address/change-me"},{"content":"Политика конфиденциальности","href":"/mock-address/change-me"},{"content":"Условия обслуживания","href":"/mock-address/change-me"}]}]},"signInButton":{"text":"войти","theme":"borderedHeader","href":"/mock-address/change-me"},"registrationButton":{"text":"зарегистрироваться","theme":"longHeader","href":"/mock-address/change-me"}},"headerSignedIn":{"logo":{"src":"logo.svg","href":"/mock-address/change-me"},"navigation":{"items":[{"content":"О нас","isActive":true,"href":"/mock-address/change-me"},{"content":"Услуги","subNavigation":[{"content":"Проживание","href":"/mock-address/change-me"},{"content":"Питание","href":"/mock-address/change-me"},{"content":"Уборка номеров","href":"/mock-address/change-me"}]},{"content":"Вакансии","href":"/mock-address/change-me"},{"content":"Новости","href":"/mock-address/change-me"},{"content":"Соглашения","subNavigation":[{"content":"Бронирование услуг","href":"/mock-address/change-me"},{"content":"Политика конфиденциальности","href":"/mock-address/change-me"},{"content":"Условия обслуживания","href":"/mock-address/change-me"}]}]},"userName":"Юлий Цезарь","signInButton":{"text":"войти","theme":"borderedHeader","href":"/mock-address/change-me"},"registrationButton":{"text":"зарегистрироваться","theme":"longHeader","href":"/mock-address/change-me"}},"footerDefault":{"company":{"logo":{"src":"logo.svg","href":"/mock-address/change-me"},"description":"Бронирование номеров в лучшем отеле 2019 года по версии ассоциации «Отельные взгляды»"},"navBlocks":[{"title":"навигация","items":[{"content":"О нас","href":"/mock-address/change-me"},{"content":"Новости","href":"/mock-address/change-me"},{"content":"Служба поддержки","href":"/mock-address/change-me"},{"content":"Услуги","href":"/mock-address/change-me"}]},{"title":"о нас","items":[{"content":"О сервисе","href":"/mock-address/change-me"},{"content":"Наша команда","href":"/mock-address/change-me"},{"content":"Вакансии","href":"/mock-address/change-me"},{"content":"Инвесторы","href":"/mock-address/change-me"}]},{"title":"Служба поддержки","items":[{"content":"Соглашения","href":"/mock-address/change-me"},{"content":"Сообщества","href":"/mock-address/change-me"},{"content":"Связь с нами","href":"/mock-address/change-me"}]}],"subscription":{"form":{"action":"/mock-address/change-me","method":"get"},"title":"подписка","description":"Получайте специальные предложения и новости сервиса","input":{"button":{"icon":"arrowForward","theme":"primary"},"type":"email","name":"email","size":"medium","placeholder":"Email"}},"copyright":"Copyright © 2018 Toxin отель. Все права защищены.","socials":{"items":[{"icon":"fa-twitter","href":"/mock-address/change-me"},{"icon":"fa-facebook-square","href":"/mock-address/change-me"},{"icon":"fa-instagram","href":"/mock-address/change-me"}]}}}');new g({$element:t(5638)(".js-".concat("headers-and-footers")),options:p})},2578:function(e,n,t){t.d(n,{Ly:function(){return r}}),t(1320);var r=function(e){var n=e.$parent,t=e.component,r=e.element,a=o(t,r);return n.find(a)},o=function(e,n){return".js-".concat(e,"__").concat(n)}},2018:function(e,n,t){t(3045);var r=t(9040);t(5940),t(4174),t(2760),t(4210),t(373),t(4687),t(1032),t(1539),t(8552),t(6258),t(4908),t(8165),t(3531),t(19),t(3577),t(4945),t(2485),t(6829),t(6266),t(8903);try{globalThis.IMask=r.Z}catch(e){}}},t={};function r(e){var o=t[e];if(void 0!==o)return o.exports;var a=t[e]={id:e,loaded:!1,exports:{}};return n[e].call(a.exports,a,a.exports,r),a.loaded=!0,a.exports}r.m=n,e=[],r.O=function(n,t,o,a){if(!t){var c=1/0;for(h=0;h<e.length;h++){t=e[h][0],o=e[h][1],a=e[h][2];for(var i=!0,s=0;s<t.length;s++)(!1&a||c>=a)&&Object.keys(r.O).every((function(e){return r.O[e](t[s])}))?t.splice(s--,1):(i=!1,a<c&&(c=a));if(i){e.splice(h--,1);var d=o();void 0!==d&&(n=d)}}return n}a=a||0;for(var h=e.length;h>0&&e[h-1][2]>a;h--)e[h]=e[h-1];e[h]=[t,o,a]},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,{a:n}),n},r.d=function(e,n){for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},function(){var e;r.g.importScripts&&(e=r.g.location+"");var n=r.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var t=n.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e}(),function(){var e={37:0,955:0};r.O.j=function(n){return 0===e[n]};var n=function(n,t){var o,a,c=t[0],i=t[1],s=t[2],d=0;if(c.some((function(n){return 0!==e[n]}))){for(o in i)r.o(i,o)&&(r.m[o]=i[o]);if(s)var h=s(r)}for(n&&n(t);d<c.length;d++)a=c[d],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(h)},t=self.webpackChunk=self.webpackChunk||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}();var o=r.O(void 0,[955,370,259],(function(){return r(5430)}));o=r.O(o)}();