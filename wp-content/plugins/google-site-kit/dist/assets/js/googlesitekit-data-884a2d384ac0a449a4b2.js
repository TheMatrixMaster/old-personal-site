(window.__googlesitekit_webpackJsonp=window.__googlesitekit_webpackJsonp||[]).push([[9],{570:function(t,n,r){"use strict";var e=r(98),o=r(69),c=Object(e.c)();c.combineStores=o.a,c.commonActions=o.b,c.commonControls=o.c,c.commonStore=o.d,c.createRegistryControl=e.d,c.createRegistrySelector=e.e,c.useSelect=e.h,c.useDispatch=e.f,c.useRegistry=e.g,c.withSelect=e.j,c.withDispatch=e.i,c.RegistryProvider=e.a,n.a=c},69:function(t,n,r){"use strict";r.d(n,"a",(function(){return R})),r.d(n,"b",(function(){return T})),r.d(n,"c",(function(){return _})),r.d(n,"d",(function(){return E})),r.d(n,"e",(function(){return G})),r.d(n,"g",(function(){return C})),r.d(n,"f",(function(){return Y}));var e,o=r(5),c=r.n(o),i=r(24),u=r.n(i),a=r(6),f=r.n(a),s=r(7),l=r.n(s),p=r(202),d=r.n(p),y=r(64),v=r.n(y),g=r(98);function b(t,n){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),r.push.apply(r,e)}return r}function h(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?b(Object(r),!0).forEach((function(n){f()(t,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))}))}return t}var w=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var e=n.reduce((function(t,n){return h(h({},t),n)}),{}),o=n.reduce((function(t,n){return[].concat(u()(t),u()(Object.keys(n)))}),[]),c=D(o);return l()(0===c.length,"collect() cannot accept collections with duplicate keys. Your call to collect() contains the following duplicated functions: ".concat(c.join(", "),". Check your data stores for duplicates.")),e},O=w,m=w,j=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var e,o=[].concat(n);return"function"!=typeof o[0]&&(e=o.shift()),function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return o.reduce((function(t,r){return r(t,n)}),t)}},S=w,k=w,A=w,P=function(t){return t},R=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var e=A.apply(void 0,u()(n.map((function(t){return t.initialState||{}}))));return{initialState:e,controls:m.apply(void 0,u()(n.map((function(t){return t.controls||{}})))),actions:O.apply(void 0,u()(n.map((function(t){return t.actions||{}})))),reducer:j.apply(void 0,[e].concat(u()(n.map((function(t){return t.reducer||P}))))),resolvers:S.apply(void 0,u()(n.map((function(t){return t.resolvers||{}})))),selectors:k.apply(void 0,u()(n.map((function(t){return t.selectors||{}}))))}},T={getRegistry:function(){return{payload:{},type:"GET_REGISTRY"}},await:c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",{payload:{value:n},type:"AWAIT"});case 1:case"end":return t.stop()}}),t)}))},_=(e={},f()(e,"GET_REGISTRY",Object(g.d)((function(t){return function(){return t}}))),f()(e,"AWAIT",(function(t){return t.payload.value})),e),D=function(t){for(var n=[],r={},e=0;e<t.length;e++){var o=t[e];r[o]=r[o]>=1?r[o]+1:1,r[o]>1&&n.push(o)}return n},E={actions:T,controls:_,reducer:P},G=function(t){return function(n){return I(t(n))}},I=v()((function(t){return d()(t,(function(t,n){return function(){var r=t.apply(void 0,arguments);return l()(void 0!==r,"".concat(n,"(...) is not resolved")),r}}))}));function C(t){return{safeSelector:Object(g.e)((function(n){return function(r){try{for(var e=arguments.length,o=new Array(e>1?e-1:0),c=1;c<e;c++)o[c-1]=arguments[c];return t.apply(void 0,[n,r].concat(o)),!0}catch(t){return!1}}})),dangerousSelector:Object(g.e)((function(n){return function(r){for(var e=arguments.length,o=new Array(e>1?e-1:0),c=1;c<e;c++)o[c-1]=arguments[c];t.apply(void 0,[n,r].concat(o))}}))}}function Y(t,n){return l()("function"==typeof t,"a validator function is required."),l()("function"==typeof n,"an action creator function is required."),l()("Generator"!==t[Symbol.toStringTag]&&"GeneratorFunction"!==t[Symbol.toStringTag],"an action’s validator function must not be a generator."),function(){return t.apply(void 0,arguments),n.apply(void 0,arguments)}}},883:function(t,n,r){"use strict";r.r(n),function(t){var e=r(570);void 0===t.googlesitekit&&(t.googlesitekit={}),t.googlesitekit.data=e.a,n.default=e.a}.call(this,r(18))}},[[883,1,0]]]);