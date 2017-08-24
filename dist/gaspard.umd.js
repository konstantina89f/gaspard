/*! gaspard | (c) 2017  Luca Perret <perret.luca@gmail.com> | MIT | https://github.com/lucaperret/gaspard */
!function(n,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("gaspard",[],t):"object"==typeof exports?exports["common-gaspard"]=t():n.Gaspard=t()}(this,function(){return function(n){function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var e={};return t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:r})},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},t.p="",t(t.s=0)}([function(n,t,e){"use strict";function r(n){return n.split("-").reduce(function(n,t){return n+t.slice(0,1).toUpperCase()+t.slice(1)})}function o(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").split(" ").filter(function(n){return!!n})}function u(n){if(Array.isArray(n)){for(var t=0,e=Array(n.length);t<n.length;t++)e[t]=n[t];return e}return Array.from(n)}function i(n,t){return n.classList?n.classList.contains(t):!!~n.className.indexOf(t)}function c(n,t){if(t=o(t),n.classList){var e;(e=n.classList).add.apply(e,u(t))}else n.className+=" "+t.join(" ")}function a(n,t){if(t=o(t),n.classList){var e;(e=n.classList).remove.apply(e,u(t))}else n.className=t.reduce(function(n,t){return n.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," ")},n.className).trim()}function f(n,t,e){"boolean"==typeof e?e?c(n,t):a(n,t):(t=o(t),t.forEach(function(t){return i(n,t)?a(n,t):c(n,t)}))}function s(n,t,e){if(void 0===e)return n.getAttribute(t);null===e?n.removeAttribute(t):n.setAttribute(t,e)}function l(n,t,e){if(void 0===e)return getComputedStyle(n)[t];n.style[r(t)]=e}function d(n){var t=document.implementation.createHTMLDocument();return t.body.innerHTML=n,t.body.children}function h(n,t){n.insertAdjacentHTML("beforebegin",t)}function p(n,t){n.insertAdjacentHTML("afterend",t)}function v(n,t){n.insertBefore(t,n.firstChild)}function m(n,t){n.appendChild(t)}function y(n){return n.cloneNode(!0)}function g(n){n.parentNode.removeChild(n)}function b(n,t){if(void 0===t)return n.textContent;n.textContent=String(t)}function C(n,t){if(void 0===t)return n.innerHTML;n.innerHTML=t}function k(n,t){n.outerHTML=t}function w(n){function t(){var u=(new Date-o)*(r?1:-1);n.style.opacity=+n.style.opacity+u/e,o=+new Date,(r?+n.style.opacity<1:+n.style.opacity>0)&&(window.requestAnimationFrame&&requestAnimationFrame(t)||setTimeout(t,16))}var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:400,r=arguments[2];n.style.opacity=r?0:1;var o=+new Date;t()}function E(n,t){w(n,t,!0)}function L(n,t){w(n,t,!1)}function A(n){n.style.display="none"}function x(n){n.style.display=""}function M(n,t,e){n.removeEventListener(t,e)}function T(n,t,e){n.addEventListener(t,e)}function S(n,t){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=!!n["on"+t],o=void 0;window.CustomEvent?o=new CustomEvent(t,{detail:e}):(o=document.createEvent("CustomEvent"),o.initCustomEvent(t,!0,!r,e)),n.dispatchEvent(o)}function j(n){(document.attachEvent?"complete"===document.readyState:"loading"!==document.readyState)?n():document.addEventListener("DOMContentLoaded",n)}function H(n){if(Array.isArray(n)){for(var t=0,e=Array(n.length);t<n.length;t++)e[t]=n[t];return e}return Array.from(n)}function N(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;if(t instanceof Element==!1&&t instanceof HTMLDocument==!1)throw new TypeError("You should provide a valid dom node as second argument");var e=void 0;return e=/^#[\w-]*$/.test(n)?document.getElementById(n.substr(1))||[]:/^\.[\w-]*$/.test(n)?t.getElementsByClassName(n.slice(1)):/^\w+$/.test(n)?t.getElementsByTagName(n):t.querySelectorAll(n),e.length&&(e=[].concat(H(e))),e}function O(n,t){return"string"==typeof t?(n.matches||n.matchesSelector||n.msMatchesSelector||n.mozMatchesSelector||n.webkitMatchesSelector||n.oMatchesSelector).call(n,t):n===t}function I(n,t){return n!==t&&n.contains(t)}function B(n){return n.previousElementSibling}function D(n){return n.nextElementSibling}function P(n){return[].concat(H(n.parentNode.children)).filter(function(t){return t!==n})}function R(n){return n.parentNode}function W(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function $(n){return n.getBoundingClientRect()}function _(n){var t=$(n);return{top:t.top+document.body.scrollTop,left:t.left+document.body.scrollLeft}}function q(n){return{left:n.offsetLeft,top:n.offsetTop}}function F(n,t){var e=n.offsetHeight;if(t){var r=getComputedStyle(n);e+=parseInt(r.marginTop||0)+parseInt(r.marginBottom||0)}return e}function z(n,t){var e=n.offsetWidth;if(t){var r=getComputedStyle(n);e+=parseInt(r.marginLeft||0)+parseInt(r.marginRight||0)}return e}Object.defineProperty(t,"__esModule",{value:!0});var G=function(){function n(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}return function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}}(),U=function(){function n(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];W(this,n);var e=void 0;e=Array.isArray(t)?t:"string"==typeof t?N(t):[t],this.elements=[].concat(e)}return G(n,[{key:"each",value:function(n){for(var t=arguments.length,e=Array(t>1?t-1:0),r=1;r<t;r++)e[r-1]=arguments[r];return this.elements.forEach(function(t){return n.apply(void 0,[t].concat(e))}),this}},{key:"addClass",value:function(n){return this.each(c,n)}},{key:"toggleClass",value:function(n,t){return this.each(f,n,t)}},{key:"removeClass",value:function(n){return this.each(a,n)}},{key:"attr",value:function(n,t){return this.each(s,n,t)}},{key:"css",value:function(n,t){return this.each(l,n,t)}},{key:"before",value:function(n){return this.each(h,n)}},{key:"after",value:function(n){return this.each(p,n)}},{key:"prepend",value:function(n){return this.each(v,n)}},{key:"append",value:function(n){return this.each(m,n)}},{key:"remove",value:function(){return this.each(g)}},{key:"text",value:function(n){return this.each(b,n)}},{key:"html",value:function(n){return this.each(C,n)}},{key:"replaceWith",value:function(n){return this.each(k,n)}},{key:"fadeIn",value:function(n){return this.each(E,n)}},{key:"fadeOut",value:function(n){return this.each(L,n)}},{key:"hide",value:function(){return this.each(A)}},{key:"show",value:function(){return this.each(x)}},{key:"on",value:function(n,t){return this.each(T,n,t)}},{key:"off",value:function(n,t){return this.each(M,n,t)}},{key:"trigger",value:function(n,t){return this.each(S,n,t)}},{key:"find",value:function(t){return t instanceof Element==!0?new n(t):this.elements.map(function(n){return N(t,n)}).filter(function(n){return n.length||n instanceof Element==!0}).reduce(function(n,t){return n.concat(t)},[]).reduce(function(n,t){return~n.elements.indexOf(t)?n:(n.elements.push(t),n)},new n)}}]),n}(),Y=U;e.d(t,"find",function(){return N}),e.d(t,"is",function(){return O}),e.d(t,"contains",function(){return I}),e.d(t,"prev",function(){return B}),e.d(t,"next",function(){return D}),e.d(t,"siblings",function(){return P}),e.d(t,"parent",function(){return R}),e.d(t,"hasClass",function(){return i}),e.d(t,"addClass",function(){return c}),e.d(t,"removeClass",function(){return a}),e.d(t,"toggleClass",function(){return f}),e.d(t,"attr",function(){return s}),e.d(t,"css",function(){return l}),e.d(t,"parseHTML",function(){return d}),e.d(t,"before",function(){return h}),e.d(t,"after",function(){return p}),e.d(t,"prepend",function(){return v}),e.d(t,"append",function(){return m}),e.d(t,"clone",function(){return y}),e.d(t,"remove",function(){return g}),e.d(t,"text",function(){return b}),e.d(t,"html",function(){return C}),e.d(t,"replaceWith",function(){return k}),e.d(t,"fadeIn",function(){return E}),e.d(t,"fadeOut",function(){return L}),e.d(t,"hide",function(){return A}),e.d(t,"show",function(){return x}),e.d(t,"viewportPosition",function(){return $}),e.d(t,"offset",function(){return _}),e.d(t,"position",function(){return q}),e.d(t,"outerHeight",function(){return F}),e.d(t,"outerWidth",function(){return z}),e.d(t,"off",function(){return M}),e.d(t,"on",function(){return T}),e.d(t,"trigger",function(){return S}),e.d(t,"documentReady",function(){return j}),e.d(t,"Collection",function(){return Y})}])});
//# sourceMappingURL=gaspard.umd.js.map