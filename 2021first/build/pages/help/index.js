!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="build",n(n.s=18)}([function(e,t){e.exports=React},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map((function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"}));return[n].concat(i).concat([o]).join("\n")}var a;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n})).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t){var n={},r=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}},o=r((function(){return/msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())})),i=r((function(){return document.head||document.getElementsByTagName("head")[0]})),a=null,u=0,f=[];function c(e,t){for(var r=0;r<e.length;r++){var o=e[r],i=n[o.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](o.parts[a]);for(;a<o.parts.length;a++)i.parts.push(h(o.parts[a],t))}else{var u=[];for(a=0;a<o.parts.length;a++)u.push(h(o.parts[a],t));n[o.id]={id:o.id,refs:1,parts:u}}}}function s(e){for(var t=[],n={},r=0;r<e.length;r++){var o=e[r],i=o[0],a={css:o[1],media:o[2],sourceMap:o[3]};n[i]?n[i].parts.push(a):t.push(n[i]={id:i,parts:[a]})}return t}function l(e,t){var n=i(),r=f[f.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),f.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function p(e){e.parentNode.removeChild(e);var t=f.indexOf(e);t>=0&&f.splice(t,1)}function d(e){var t=document.createElement("style");return t.type="text/css",l(e,t),t}function h(e,t){var n,r,o;if(t.singleton){var i=u++;n=a||(a=d(t)),r=y.bind(null,n,i,!1),o=y.bind(null,n,i,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return t.rel="stylesheet",l(e,t),t}(t),r=g.bind(null,n),o=function(){p(n),n.href&&URL.revokeObjectURL(n.href)}):(n=d(t),r=m.bind(null,n),o=function(){p(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");void 0===(t=t||{}).singleton&&(t.singleton=o()),void 0===t.insertAt&&(t.insertAt="bottom");var r=s(e);return c(r,t),function(e){for(var o=[],i=0;i<r.length;i++){var a=r[i];(u=n[a.id]).refs--,o.push(u)}e&&c(s(e),t);for(i=0;i<o.length;i++){var u;if(0===(u=o[i]).refs){for(var f=0;f<u.parts.length;f++)u.parts[f]();delete n[u.id]}}}};var v,b=(v=[],function(e,t){return v[e]=t,v.filter(Boolean).join("\n")});function y(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=b(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function m(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function g(e,t){var n=t.css,r=t.sourceMap;r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var o=new Blob([n],{type:"text/css"}),i=e.href;e.href=URL.createObjectURL(o),i&&URL.revokeObjectURL(i)}},,,,function(e,t){e.exports=ReactDOM},,,,,,,,,,,,function(e,t,n){"use strict";var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=a(n(0)),i=a(n(6));function a(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}n(19);var c=function(e){function t(){return u(this,t),f(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"render",value:function(){return o.default.createElement("div",{className:"help-page"},o.default.createElement("div",{className:"tip-text"},o.default.createElement("span",null,"这是一个简单的页面,不加通用layout的页面,您可以自由发挥")))}}]),t}(o.default.Component);i.default.render(o.default.createElement(c,null),document.getElementById("container"))},function(e,t,n){var r=n(20);"string"==typeof r&&(r=[[e.i,r,""]]);n(2)(r,{});r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(1)(!1)).push([e.i,".help-page .tip-text {\n  padding: 100px;\n  text-align: center;\n  font-size: 20px;\n  color: green; }\n",""])}]);