(window.__googlesitekit_webpackJsonp=window.__googlesitekit_webpackJsonp||[]).push([[13],{1:function(t,e){t.exports=googlesitekit.i18n},1050:function(t,e,r){"use strict";r.r(e);var n=r(4),a=r.n(n),o=r(49),i=r(91),c=r(6),u=r.n(c),s=r(5),l=r.n(s),f=r(7),d=r.n(f),p=r(50),v=r.n(p),g=r(60);function b(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function h(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?b(Object(r),!0).forEach((function(e){u()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var y={resetInViewHook:l.a.mark((function t(){var e,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.a.commonActions.getRegistry();case 2:return e=t.sent,r=e.select(g.a).getValue("useInViewResetCount"),t.next=6,y.setValue("useInViewResetCount",r+1);case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}}),t)})),setValues:function(t){return d()(v()(t),"values must be an object."),{payload:{values:t},type:"SET_VALUES"}},setValue:function(t,e){return d()(t,"key is required."),{payload:{key:t,value:e},type:"SET_VALUE"}}},m={initialState:{useInViewResetCount:0},actions:y,controls:{},reducer:function(t,e){var r=e.type,n=e.payload;switch(r){case"SET_VALUES":var a=n.values;return h(h({},t),a);case"SET_VALUE":var o=n.key,i=n.value;return h(h({},t),{},u()({},o,i));default:return t}},resolvers:{},selectors:{getValue:function(t,e){return t[e]},getInViewResetHook:function(t){return t.useInViewResetCount}}},O=a.a.combineStores(a.a.commonStore,m,Object(i.a)(g.a),Object(o.b)());O.initialState,O.actions,O.controls,O.reducer,O.resolvers,O.selectors;a.a.registerStore(g.a,O)},27:function(t,e,r){"use strict";r.d(e,"a",(function(){return n})),r.d(e,"b",(function(){return a}));var n="_googlesitekitDataLayer",a="data-googlesitekit-gtag"},30:function(t,e,r){"use strict";(function(t){r.d(e,"a",(function(){return g})),r.d(e,"b",(function(){return v}));var n=r(78),a=t._googlesitekitBaseData||{},o=a.activeModules,i=void 0===o?[]:o,c=a.isSiteKitScreen,u=a.trackingEnabled,s={activeModules:i,trackingEnabled:u,trackingID:a.trackingID,referenceSiteURL:a.referenceSiteURL,userIDHash:a.userIDHash,isSiteKitScreen:c},l=Object(n.a)(s),f=l.enableTracking,d=l.disableTracking,p=(l.isTrackingEnabled,l.initializeSnippet),v=l.trackEvent;function g(t){t?f():d()}c&&u&&p()}).call(this,r(18))},33:function(t,e,r){"use strict";(function(t){var n,a;r.d(e,"a",(function(){return o})),r.d(e,"b",(function(){return i}));var o=new Set((null===(n=t)||void 0===n||null===(a=n._googlesitekitBaseData)||void 0===a?void 0:a.enabledFeatures)||[]),i=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o;return e instanceof Set&&e.has(t)}}).call(this,r(18))},35:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));var n=function(t){return t instanceof Date&&!isNaN(t)}},38:function(t,e,r){"use strict";(function(t){r.d(e,"b",(function(){return b})),r.d(e,"d",(function(){return h})),r.d(e,"a",(function(){return y})),r.d(e,"c",(function(){return m}));var n=r(5),a=r.n(n),o=r(13),i=r.n(o);r(24);function c(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return u(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,a=function(){};return{s:a,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return i=t.done,t},e:function(t){c=!0,o=t},f:function(){try{i||null==r.return||r.return()}finally{if(c)throw o}}}}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var s,l="googlesitekit_".concat("1.48.1","_"),f=["sessionStorage","localStorage"],d=[].concat(f),p=function(){var e=i()(a.a.mark((function e(r){var n,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t[r]){e.next=3;break}return e.abrupt("return",!1);case 3:return e.prev=3,o="__storage_test__",n.setItem(o,o),n.removeItem(o),e.abrupt("return",!0);case 10:return e.prev=10,e.t0=e.catch(3),e.abrupt("return",e.t0 instanceof DOMException&&(22===e.t0.code||1014===e.t0.code||"QuotaExceededError"===e.t0.name||"NS_ERROR_DOM_QUOTA_REACHED"===e.t0.name)&&0!==n.length);case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t){return e.apply(this,arguments)}}();function v(){return g.apply(this,arguments)}function g(){return(g=i()(a.a.mark((function e(){var r,n,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===s){e.next=2;break}return e.abrupt("return",s);case 2:r=c(d),e.prev=3,r.s();case 5:if((n=r.n()).done){e.next=15;break}if(o=n.value,!s){e.next=9;break}return e.abrupt("continue",13);case 9:return e.next=11,p(o);case 11:if(!e.sent){e.next=13;break}s=t[o];case 13:e.next=5;break;case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(3),r.e(e.t0);case 20:return e.prev=20,r.f(),e.finish(20);case 23:return void 0===s&&(s=null),e.abrupt("return",s);case 25:case"end":return e.stop()}}),e,null,[[3,17,20,23]])})))).apply(this,arguments)}var b=function(){var t=i()(a.a.mark((function t(e){var r,n,o,i,c,u,s;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v();case 2:if(!(r=t.sent)){t.next=10;break}if(!(n=r.getItem("".concat(l).concat(e)))){t.next=10;break}if(o=JSON.parse(n),i=o.timestamp,c=o.ttl,u=o.value,s=o.isError,!i||c&&!(Math.round(Date.now()/1e3)-i<c)){t.next=10;break}return t.abrupt("return",{cacheHit:!0,value:u,isError:s});case 10:return t.abrupt("return",{cacheHit:!1,value:void 0});case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var e=i()(a.a.mark((function e(r,n){var o,i,c,u,s,f,d,p,g=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=g.length>2&&void 0!==g[2]?g[2]:{},i=o.ttl,c=void 0===i?3600:i,u=o.timestamp,s=void 0===u?Math.round(Date.now()/1e3):u,f=o.isError,d=void 0!==f&&f,e.next=3,v();case 3:if(!(p=e.sent)){e.next=14;break}return e.prev=5,p.setItem("".concat(l).concat(r),JSON.stringify({timestamp:s,ttl:c,value:n,isError:d})),e.abrupt("return",!0);case 10:return e.prev=10,e.t0=e.catch(5),t.console.warn("Encountered an unexpected storage error:",e.t0),e.abrupt("return",!1);case 14:return e.abrupt("return",!1);case 15:case"end":return e.stop()}}),e,null,[[5,10]])})));return function(t,r){return e.apply(this,arguments)}}(),y=function(){var e=i()(a.a.mark((function e(r){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v();case 2:if(!(n=e.sent)){e.next=13;break}return e.prev=4,n.removeItem("".concat(l).concat(r)),e.abrupt("return",!0);case 9:return e.prev=9,e.t0=e.catch(4),t.console.warn("Encountered an unexpected storage error:",e.t0),e.abrupt("return",!1);case 13:return e.abrupt("return",!1);case 14:case"end":return e.stop()}}),e,null,[[4,9]])})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=i()(a.a.mark((function e(){var r,n,o,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v();case 2:if(!(r=e.sent)){e.next=14;break}for(e.prev=4,n=[],o=0;o<r.length;o++)0===(i=r.key(o)).indexOf(l)&&n.push(i.substring(l.length));return e.abrupt("return",n);case 10:return e.prev=10,e.t0=e.catch(4),t.console.warn("Encountered an unexpected storage error:",e.t0),e.abrupt("return",[]);case 14:return e.abrupt("return",[]);case 15:case"end":return e.stop()}}),e,null,[[4,10]])})));return function(){return e.apply(this,arguments)}}()}).call(this,r(18))},39:function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));var n=r(35),a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e="string"==typeof t;if(!e)return!1;var r=t.split("-");return 3===r.length&&Object(n.a)(new Date(t))}},4:function(t,e){t.exports=googlesitekit.data},47:function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));var n=r(27);function a(t){return function(){t[n.a]=t[n.a]||[],t[n.a].push(arguments)}}},49:function(t,e,r){"use strict";r.d(e,"a",(function(){return g})),r.d(e,"b",(function(){return b}));var n=r(6),a=r.n(n),o=r(28),i=r.n(o),c=r(7),u=r.n(c),s=r(72),l=r.n(s),f=r(8);function d(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?d(Object(r),!0).forEach((function(e){a()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function v(t,e){if(e&&Array.isArray(e)){var r=e.map((function(t){return"object"===i()(t)?Object(f.u)(t):t}));return"".concat(t,"::").concat(l()(JSON.stringify(r)))}return t}var g={receiveError:function(t,e,r){return u()(t,"error is required."),e&&u()(r&&Array.isArray(r),"args is required (and must be an array) when baseName is specified."),{type:"RECEIVE_ERROR",payload:{error:t,baseName:e,args:r}}},clearError:function(t,e){return t&&u()(e&&Array.isArray(e),"args is required (and must be an array) when baseName is specified."),{type:"CLEAR_ERROR",payload:{baseName:t,args:e}}},clearErrors:function(t){return{type:"CLEAR_ERRORS",payload:{baseName:t}}}};function b(){var t={getErrorForSelector:function(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return u()(r,"selectorName is required."),t.getError(e,r,n)},getErrorForAction:function(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return u()(r,"actionName is required."),t.getError(e,r,n)},getError:function(t,e,r){var n=t.error,a=t.errors;return e||r?(u()(e,"baseName is required."),a[v(e,r)]):n},getErrors:function(t){var e=new Set(Object.values(t.errors));return void 0!==t.error&&e.add(t.error),Array.from(e)},hasErrors:function(e){return t.getErrors(e).length>0}};return{initialState:{errors:{},error:void 0},actions:g,controls:{},reducer:function(t,e){var r=e.type,n=e.payload;switch(r){case"RECEIVE_ERROR":var o=n.baseName,i=n.args,c=n.error;return p(p({},t),{},o?{errors:p(p({},t.errors||{}),{},a()({},v(o,i),c))}:{error:c});case"CLEAR_ERROR":var u=n.baseName,s=n.args,l=p({},t);if(u){var f=v(u,s);l.errors=p({},t.errors||{}),delete l.errors[f]}else l.error=void 0;return l;case"CLEAR_ERRORS":var d=n.baseName,g=p({},t);if(d)for(var b in g.errors=p({},t.errors||{}),g.errors)(b===d||b.startsWith("".concat(d,"::")))&&delete g.errors[b];else g.errors={},g.error=void 0;return g;default:return t}},resolvers:{},selectors:t}}},51:function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));var n=r(2),a=function(t){return function(e){return function FilteredComponent(r){return Object(n.createElement)(n.Fragment,{},"",Object(n.createElement)(e,r),t)}}}},53:function(t,e,r){"use strict";r.d(e,"a",(function(){return a})),r.d(e,"b",(function(){return n})),r.d(e,"e",(function(){return u})),r.d(e,"f",(function(){return p})),r.d(e,"g",(function(){return v})),r.d(e,"h",(function(){return f.a})),r.d(e,"d",(function(){return g})),r.d(e,"c",(function(){return h})),r.d(e,"i",(function(){return d}));var n="Invalid dateString parameter, it must be a string.",a='Invalid date range, it must be a string with the format "last-x-days".',o=r(7),i=r.n(o),c=r(35),u=function(t){var e=new Date(t);i()(Object(c.a)(e),"Date param must construct to a valid date instance or be a valid date instance itself.");var r="".concat(e.getMonth()+1),n="".concat(e.getDate());return[e.getFullYear(),r.length<2?"0".concat(r):r,n.length<2?"0".concat(n):n].join("-")},s=r(12),l=r.n(s),f=r(39),d=function(t){i()(Object(f.a)(t),n);var e=t.split("-"),r=l()(e,3),a=r[0],o=r[1],c=r[2];return new Date(a,o-1,c)},p=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0,r=d(t);return r.setDate(r.getDate()-e),u(r)},v=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=t.split("-");return 3===e.length&&"last"===e[0]&&!Number.isNaN(e[1])&&!Number.isNaN(parseFloat(e[1]))&&"days"===e[2]};function g(t){var e=t.match(/last-(\d+)-days/);if(e&&e[1])return parseInt(e[1],10);throw new Error("Unrecognized date range slug.")}var b=r(1);function h(){var t=function(t){return Object(b.sprintf)(
/* translators: %s: number of days */
Object(b._n)("Last %s day","Last %s days",t,"google-site-kit"),t)};return{"last-7-days":{slug:"last-7-days",label:t(7),days:7},"last-14-days":{slug:"last-14-days",label:t(14),days:14},"last-28-days":{slug:"last-28-days",label:t(28),days:28},"last-90-days":{slug:"last-90-days",label:t(90),days:90}}}},56:function(t,e,r){"use strict";(function(t){var n=r(0),a=r.n(n),o=r(9),i=r.n(o);function ChangeArrow(e){var r=e.direction,n=e.invertColor,a=e.width,o=e.height;return t.createElement("svg",{className:i()("googlesitekit-change-arrow","googlesitekit-change-arrow--".concat(r),{"googlesitekit-change-arrow--inverted-color":n}),width:a,height:o,viewBox:"0 0 10 10",fill:"none",xmlns:"https://www.w3.org/2000/svg"},t.createElement("path",{d:"M5.625 10L5.625 2.375L9.125 5.875L10 5L5 -1.76555e-07L-2.7055e-07 5L0.875 5.875L4.375 2.375L4.375 10L5.625 10Z",fill:"currentColor"}))}ChangeArrow.propTypes={direction:a.a.string,invertColor:a.a.bool,width:a.a.number,height:a.a.number},ChangeArrow.defaultProps={direction:"up",invertColor:!1,width:9,height:9},e.a=ChangeArrow}).call(this,r(3))},58:function(t,e,r){"use strict";r.d(e,"a",(function(){return i})),r.d(e,"b",(function(){return c}));var n=r(28),a=r.n(n),o=r(65),i=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return{__html:o.a.sanitize(t,e)}};function c(t){var e,r="object"===a()(t)?t.toString():t;return null==r||null===(e=r.replace)||void 0===e?void 0:e.call(r,/\/+$/,"")}},60:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));var n="core/ui"},63:function(t,e,r){"use strict";function n(t){try{return new URL(t).pathname}catch(t){}return null}function a(t,e){try{return new URL(e,t).href}catch(t){}return("string"==typeof t?t:"")+("string"==typeof e?e:"")}function o(t){return"string"!=typeof t?t:t.replace(/^https?:\/\/(www\.)?/i,"").replace(/\/$/,"")}r.d(e,"b",(function(){return n})),r.d(e,"a",(function(){return a})),r.d(e,"c",(function(){return o}))},65:function(t,e,r){"use strict";(function(t){r.d(e,"a",(function(){return a}));var n=r(109),a=r.n(n)()(t)}).call(this,r(18))},68:function(t,e,r){"use strict";(function(t){r.d(e,"c",(function(){return w})),r.d(e,"d",(function(){return S})),r.d(e,"b",(function(){return E})),r.d(e,"a",(function(){return k}));var n=r(12),a=r.n(n),o=r(28),i=r.n(o),c=r(6),u=r.n(c),s=r(16),l=r.n(s),f=r(26),d=r(64),p=r.n(d),v=r(1);function g(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function b(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?g(Object(r),!0).forEach((function(e){u()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var h=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=y(t,e),n=r.formatUnit,a=r.formatDecimal;try{return n()}catch(t){return a()}},y=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t=parseInt(t,10),Number.isNaN(t)&&(t=0);var r=Math.floor(t/60/60),n=Math.floor(t/60%60),a=Math.floor(t%60);return{hours:r,minutes:n,seconds:a,formatUnit:function(){var o=e.unitDisplay,i=b(b({unitDisplay:void 0===o?"short":o},l()(e,["unitDisplay"])),{},{style:"unit"});return 0===t?S(a,b(b({},i),{},{unit:"second"})):Object(v.sprintf)(
/* translators: 1: formatted seconds, 2: formatted minutes, 3: formatted hours */
Object(v._x)("%3$s %2$s %1$s","duration of time: hh mm ss","google-site-kit"),a?S(a,b(b({},i),{},{unit:"second"})):"",n?S(n,b(b({},i),{},{unit:"minute"})):"",r?S(r,b(b({},i),{},{unit:"hour"})):"").trim()},formatDecimal:function(){var e=Object(v.sprintf)(// translators: %s number of seconds with "s" as the abbreviated unit.
Object(v.__)("%ds","google-site-kit"),a);if(0===t)return e;var o=Object(v.sprintf)(// translators: %s number of minutes with "m" as the abbreviated unit.
Object(v.__)("%dm","google-site-kit"),n),i=Object(v.sprintf)(// translators: %s number of hours with "h" as the abbreviated unit.
Object(v.__)("%dh","google-site-kit"),r);return Object(v.sprintf)(
/* translators: 1: formatted seconds, 2: formatted minutes, 3: formatted hours */
Object(v._x)("%3$s %2$s %1$s","duration of time: hh mm ss","google-site-kit"),a?e:"",n?o:"",r?i:"").trim()}}},m=function(t){return 1e6<=t?Math.round(t/1e5)/10:1e4<=t?Math.round(t/1e3):1e3<=t?Math.round(t/100)/10:t},O=function(t){var e={minimumFractionDigits:1,maximumFractionDigits:1};return 1e6<=t?Object(v.sprintf)(// translators: %s: an abbreviated number in millions.
Object(v.__)("%sM","google-site-kit"),S(m(t),t%10==0?{}:e)):1e4<=t?Object(v.sprintf)(// translators: %s: an abbreviated number in thousands.
Object(v.__)("%sK","google-site-kit"),S(m(t))):1e3<=t?Object(v.sprintf)(// translators: %s: an abbreviated number in thousands.
Object(v.__)("%sK","google-site-kit"),S(m(t),t%10==0?{}:e)):S(t,{signDisplay:"never",maximumFractionDigits:1})},w=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t=Object(f.isFinite)(t)?t:Number(t),Object(f.isFinite)(t)||(console.warn("Invalid number",t,i()(t)),t=0);var r={};if("%"===e)r={style:"percent",maximumFractionDigits:2};else{if("s"===e)return h(t,{unitDisplay:"narrow"});e&&"string"==typeof e?r={style:"currency",currency:e}:Object(f.isPlainObject)(e)&&(r=b({},e))}var n=r,a=n.style,o=void 0===a?"metric":a;return"metric"===o?O(t):"duration"===o?h(t,e):S(t,r)},j=p()(console.warn),S=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e.locale,n=void 0===r?k():r,o=l()(e,["locale"]);try{return new Intl.NumberFormat(n,o).format(t)}catch(e){j("Site Kit numberFormat error: Intl.NumberFormat( ".concat(JSON.stringify(n),", ").concat(JSON.stringify(o)," ).format( ").concat(i()(t)," )"),e.message)}for(var c={currencyDisplay:"narrow",currencySign:"accounting",style:"unit"},u=["signDisplay","compactDisplay"],s={},f=0,d=Object.entries(o);f<d.length;f++){var p=a()(d[f],2),v=p[0],g=p[1];c[v]&&g===c[v]||(u.includes(v)||(s[v]=g))}try{return new Intl.NumberFormat(n,s).format(t)}catch(e){return new Intl.NumberFormat(n).format(t)}},E=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e.locale,n=void 0===r?k():r,a=e.style,o=void 0===a?"long":a,i=e.type,c=void 0===i?"conjunction":i;if(Intl.ListFormat){var u=new Intl.ListFormat(n,{style:o,type:c});return u.format(t)}
/* translators: used between list items, there is a space after the comma. */var s=Object(v.__)(", ","google-site-kit");return t.join(s)},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t,r=Object(f.get)(e,["_googlesitekitLegacyData","locale"]);if(r){var n=r.match(/^(\w{2})?(_)?(\w{2})/);if(n&&n[0])return n[0].replace(/_/g,"-")}return e.navigator.language}}).call(this,r(18))},74:function(t,e,r){"use strict";(function(t){r.d(e,"a",(function(){return u})),r.d(e,"b",(function(){return s})),r.d(e,"c",(function(){return f}));var n=r(12),a=r.n(n),o=r(1);function i(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,a=function(){};return{s:a,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,u=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return i=t.done,t},e:function(t){u=!0,o=t},f:function(){try{i||null==r.return||r.return()}finally{if(u)throw o}}}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var u=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=null,r=null,n=document.querySelector("#toplevel_page_googlesitekit-dashboard .googlesitekit-notifications-counter"),a=document.querySelector("#wp-admin-bar-google-site-kit .googlesitekit-notifications-counter");if(n&&a)return!1;if(e=document.querySelector("#toplevel_page_googlesitekit-dashboard .wp-menu-name"),r=document.querySelector("#wp-admin-bar-google-site-kit .ab-item"),null===e&&null===r)return!1;var i=document.createElement("span");i.setAttribute("class","googlesitekit-notifications-counter update-plugins count-".concat(t));var c=document.createElement("span");c.setAttribute("class","plugin-count"),c.setAttribute("aria-hidden","true"),c.textContent=t;var u=document.createElement("span");return u.setAttribute("class","screen-reader-text"),u.textContent=Object(o.sprintf)(
/* translators: %d is the number of notifications */
Object(o._n)("%d notification","%d notifications",t,"google-site-kit"),t),i.appendChild(c),i.appendChild(u),e&&null===n&&e.appendChild(i),r&&null===a&&r.appendChild(i),i},s=function(){t.localStorage&&t.localStorage.clear(),t.sessionStorage&&t.sessionStorage.clear()},l=function(t){for(var e=location.search.substr(1).split("&"),r={},n=0;n<e.length;n++)r[e[n].split("=")[0]]=decodeURIComponent(e[n].split("=")[1]);return t?r.hasOwnProperty(t)?decodeURIComponent(r[t].replace(/\+/g," ")):"":r},f=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:location,r=new URL(e.href);if(t)return r.searchParams&&r.searchParams.get?r.searchParams.get(t):l(t);var n,o={},c=i(r.searchParams.entries());try{for(c.s();!(n=c.n()).done;){var u=a()(n.value,2),s=u[0],f=u[1];o[s]=f}}catch(t){c.e(t)}finally{c.f()}return o}}).call(this,r(18))},76:function(t,e,r){"use strict";(function(t){r(44),r(45)}).call(this,r(18))},77:function(t,e,r){"use strict";(function(t){r.d(e,"b",(function(){return o})),r.d(e,"c",(function(){return i})),r.d(e,"a",(function(){return c}));var n=r(184),a=r(56),o=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(Number.isNaN(Number(e)))return"";var o=r.invertColor,i=void 0!==o&&o;return Object(n.a)(t.createElement(a.a,{direction:e>0?"up":"down",invertColor:i}))},i=function(t){var e,r,n,a,o,i,c,u,s,l,f,d,p,v,g;if(void 0!==t)return 1===(null==t||null===(e=t[0])||void 0===e||null===(r=e.data)||void 0===r||null===(n=r.rows)||void 0===n?void 0:n.length)||(null==t||null===(a=t[0])||void 0===a||null===(o=a.data)||void 0===o||null===(i=o.rows)||void 0===i||null===(c=i[0])||void 0===c||null===(u=c.metrics)||void 0===u||null===(s=u[0])||void 0===s||null===(l=s.values)||void 0===l?void 0:l[0])===(null==t||null===(f=t[0])||void 0===f||null===(d=f.data)||void 0===d||null===(p=d.totals)||void 0===p||null===(v=p[0])||void 0===v||null===(g=v.values)||void 0===g?void 0:g[0])},c=function(t,e){return t>0&&e>0?t/e-1:t>0?1:e>0?-1:0}}).call(this,r(3))},78:function(t,e,r){"use strict";(function(t){r.d(e,"a",(function(){return l}));var n=r(6),a=r.n(n),o=r(79),i=r(80);function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){a()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var s={currentUserRoles:[],activeModules:[],trackingEnabled:!1,trackingID:"",referenceSiteURL:"",userIDHash:""};function l(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t,a=u(u({},s),e);a.referenceSiteURL&&(a.referenceSiteURL=a.referenceSiteURL.toString().replace(/\/+$/,""));var c=Object(o.a)(a,r);return{enableTracking:function(){a.trackingEnabled=!0},disableTracking:function(){a.trackingEnabled=!1},initializeSnippet:c,isTrackingEnabled:function(){return!!a.trackingEnabled},trackEvent:Object(i.a)(a,r,c,n)}}}).call(this,r(18))},79:function(t,e,r){"use strict";(function(t){r.d(e,"a",(function(){return o}));var n=r(47),a=r(27);function o(e,r){var o,i=Object(n.a)(r);return function(){var r=t.document;if(void 0===o&&(o=!!r.querySelector("script[".concat(a.b,"]"))),!o){var n=r.createElement("script");n.setAttribute(a.b,""),n.async=!0,n.src="https://www.googletagmanager.com/gtag/js?id=".concat(e.trackingID,"&l=").concat(a.a),r.head.appendChild(n),i("js",new Date),i("config",e.trackingID,{send_page_view:e.isSiteKitScreen}),o=!0}}}}).call(this,r(18))},8:function(t,e,r){"use strict";r.d(e,"v",(function(){return c.b})),r.d(e,"s",(function(){return u.a})),r.d(e,"w",(function(){return u.b})),r.d(e,"u",(function(){return p})),r.d(e,"c",(function(){return v.b})),r.d(e,"j",(function(){return v.c})),r.d(e,"q",(function(){return g.c})),r.d(e,"r",(function(){return g.d})),r.d(e,"n",(function(){return g.b})),r.d(e,"i",(function(){return g.a})),r.d(e,"o",(function(){return m})),r.d(e,"d",(function(){return O})),r.d(e,"f",(function(){return w.c})),r.d(e,"t",(function(){return w.i})),r.d(e,"g",(function(){return j.b})),r.d(e,"m",(function(){return j.c})),r.d(e,"b",(function(){return j.a})),r.d(e,"l",(function(){return S.b})),r.d(e,"h",(function(){return S.a})),r.d(e,"p",(function(){return S.c})),r.d(e,"k",(function(){return E})),r.d(e,"a",(function(){return k})),r.d(e,"x",(function(){return _})),r.d(e,"e",(function(){return D}));var n=r(108),a=r.n(n),o=r(107),i=r.n(o),c=r(30),u=r(58),s=r(28),l=r.n(s),f=r(72),d=r.n(f),p=function(t){return d()(JSON.stringify(function t(e){var r={};return Object.keys(e).sort().forEach((function(n){var a=e[n];a&&"object"===l()(a)&&!Array.isArray(a)&&(a=t(a)),r[n]=a})),r}(t)))};var v=r(74),g=(r(76),r(68));r(51);function b(t){return t.replace(/\[([^\]]+)\]\((https?:\/\/[^\/]+\.\w+\/?.*?)\)/gi,'<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')}function h(t){return"<p>".concat(t.replace(/\n{2,}/g,"</p><p>"),"</p>")}function y(t){return t.replace(/\n/gi,"<br>")}function m(t){for(var e=t,r=0,n=[b,h,y];r<n.length;r++){e=(0,n[r])(e)}return e}var O=function(t){return t=parseFloat(t),isNaN(t)||0===t?[0,0,0,0]:[Math.floor(t/60/60),Math.floor(t/60%60),Math.floor(t%60),Math.floor(1e3*t)-1e3*Math.floor(t)]},w=r(53),j=r(77),S=r(63),E=function(t){switch(t){case"minute":return 60;case"hour":return 3600;case"day":return 86400;case"week":return 604800;case"month":return 2592e3;case"year":return 31536e3}},k=function(t,e){if("0"===t||0===t||isNaN(t))return null;var r=(e-t)/t;return isNaN(r)||!a()(r)?null:r},_=function(t){try{return JSON.parse(t)&&!!t}catch(t){return!1}},D=function(t){if(!t)return"";var e=t.replace(/&#(\d+);/g,(function(t,e){return String.fromCharCode(e)})).replace(/(\\)/g,"");return i()(e)}},80:function(t,e,r){"use strict";(function(t){r.d(e,"a",(function(){return p}));var n=r(5),a=r.n(n),o=r(6),i=r.n(o),c=r(13),u=r.n(c),s=r(47),l=r(33);function f(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?f(Object(r),!0).forEach((function(e){i()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(e,r,n,o){var i=Object(s.a)(r);return function(){var r=u()(a.a.mark((function r(c,u,s,f){var p,v,g,b,h,y,m,O,w,j;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(b=e.activeModules,h=e.referenceSiteURL,y=e.trackingEnabled,m=e.trackingID,O=e.userIDHash,y){r.next=3;break}return r.abrupt("return");case 3:return n(),w=null!==(p=null===(v=t._googlesitekitUserData)||void 0===v||null===(g=v.user)||void 0===g?void 0:g.roles)&&void 0!==p?p:[],j={send_to:m,event_category:c,event_label:s,value:f,dimension1:h,dimension2:w.join(","),dimension3:O,dimension4:"1.48.1",dimension5:Array.from(l.a).join(","),dimension6:b.join(",")},r.abrupt("return",new Promise((function(t){var e,r,n=setTimeout((function(){o.console.warn('Tracking event "'.concat(u,'" (category "').concat(c,'") took too long to fire.')),t()}),1e3),a=function(){clearTimeout(n),t()};i("event",u,d(d({},j),{},{event_callback:a})),(null===(e=o._gaUserPrefs)||void 0===e||null===(r=e.ioo)||void 0===r?void 0:r.call(e))&&a()})));case 7:case"end":return r.stop()}}),r)})));return function(t,e,n,a){return r.apply(this,arguments)}}()}}).call(this,r(18))},91:function(t,e,r){"use strict";r.d(e,"a",(function(){return g})),r.d(e,"c",(function(){return h})),r.d(e,"b",(function(){return y}));var n=r(16),a=r.n(n),o=r(6),i=r.n(o),c=r(5),u=r.n(c),s=r(7),l=r.n(s),f=r(4),d=r.n(f),p=r(38),v=d.a.createRegistryControl,g=function(t){var e;l()(t,"storeName is required to create a snapshot store.");var r={},n={deleteSnapshot:u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,{payload:{},type:"DELETE_SNAPSHOT"};case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})),restoreSnapshot:u.a.mark((function t(){var e,r,n,a,o,i,c=arguments;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=c.length>0&&void 0!==c[0]?c[0]:{},r=e.clearAfterRestore,n=void 0===r||r,t.next=4,{payload:{},type:"RESTORE_SNAPSHOT"};case 4:if(a=t.sent,o=a.cacheHit,i=a.value,!o){t.next=13;break}return t.next=10,{payload:{snapshot:i},type:"SET_STATE_FROM_SNAPSHOT"};case 10:if(!n){t.next=13;break}return t.next=13,{payload:{},type:"DELETE_SNAPSHOT"};case 13:return t.abrupt("return",o);case 14:case"end":return t.stop()}}),t)})),createSnapshot:u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,{payload:{},type:"CREATE_SNAPSHOT"};case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)}))},o=(e={},i()(e,"DELETE_SNAPSHOT",(function(){return Object(p.a)("datastore::cache::".concat(t))})),i()(e,"CREATE_SNAPSHOT",v((function(e){return function(){return Object(p.d)("datastore::cache::".concat(t),e.stores[t].store.getState())}}))),i()(e,"RESTORE_SNAPSHOT",(function(){return Object(p.b)("datastore::cache::".concat(t),3600)})),e);return{initialState:r,actions:n,controls:o,reducer:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r,e=arguments.length>1?arguments[1]:void 0,n=e.type,o=e.payload;switch(n){case"SET_STATE_FROM_SNAPSHOT":var i=o.snapshot,c=(i.error,a()(i,["error"]));return c;default:return t}}}},b=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d.a;return Object.values(t.stores).filter((function(t){return Object.keys(t.getActions()).includes("restoreSnapshot")}))},h=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d.a;return Promise.all(b(t).map((function(t){return t.getActions().createSnapshot()})))},y=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d.a;return Promise.all(b(t).map((function(t){return t.getActions().restoreSnapshot()})))}}},[[1050,1,0]]]);