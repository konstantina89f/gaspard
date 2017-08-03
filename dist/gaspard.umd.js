/*! gaspard - 0.1.0 | (c) 2017  Luca Perret <perret.luca@gmail.com> | MIT | https://github.com/lucaperret/gaspard */
!function(n,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("gaspard",[],t):"object"==typeof exports?exports["common-gaspard"]=t():n.Gaspard=t()}(this,function(){return function(n){function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var e={};return t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:r})},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},t.p="",t(t.s=0)}([function(n,t,e){"use strict";function r(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;if(t instanceof Element==!1&&t instanceof HTMLDocument==!1)throw new TypeError("You should provide a valid dom node as second argument");var e=void 0;return e=/^#[\w-]*$/.test(n)?document.getElementById(n.substr(1)):/^\.[\w-]*$/.test(n)?t.getElementsByClassName(n.slice(1)):/^\w+$/.test(n)?t.getElementsByTagName(n):t.querySelectorAll(n),e.length&&(e=[].concat(e)),e}function o(n,t){return"string"===t?(n.matches||n.matchesSelector||n.msMatchesSelector||n.mozMatchesSelector||n.webkitMatchesSelector||n.oMatchesSelector).call(n,t):n===t}function i(n,t){return n!==t&&n.contains(t)}function u(n){return n.previousElementSibling}function c(n){return n.nextElementSibling}function f(n){return[].concat(n.parentNode.children).fitler(function(t){return t!==n})}function s(n){return n.parentNode}function a(n){return n.split("-").reduce(function(n,t){return n+t.slice(0,1).toUpperCase()+t.slice(1)})}function d(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").split(" ").filter(function(n){return!!n})}function l(n,t){return n.classList?n.classList.contains(t):!!~n.className.indexOf(t)}function p(n,t){if(t=d(t),n.classList){var e;(e=n.classList).add.apply(e,t)}else n.className+=" "+t.join(" ")}function m(n,t){if(t=d(t),n.classList){var e;(e=n.classList).remove.apply(e,t)}else n.className=t.forEach(function(t){return n.className.replace(t,"")})}function v(n,t,e){"boolean"==typeof e?e?p(n,t):m(n,t):(t=d(t),t.forEach(function(t){return l(n,t)?m(n,t):p(n,t)}))}function y(n,t,e){if(void 0===e)return getComputedStyle(n)[t];n.style[a(t)]=e}function h(n){var t=document.implementation.createHTMLDocument();return t.body.innerHTML=n,t.body.children}function g(n,t){n.insertAdjacentHTML("beforebegin",t)}function E(n,t){n.insertAdjacentHTML("afterend",t)}function L(n,t){n.insertBefore(t,n.firstChild)}function b(n,t){n.appendChild(t)}function C(n){return n.cloneNode(!0)}function w(n){n.parentNode.removeChild(n)}function x(n,t){if(void 0===t)return n.textContent;n.textContent=String(t)}function M(n,t){if(void 0===t)return n.innerHTML;n.innerHTML=t}function T(n,t){n.outerHTML=t}function S(n){function t(){n.style.opacity=+n.style.opacity+(new Date-i)/e,i=+new Date,(r?+n.style.opacity<1:+n.style.opacity>0)&&(window.requestAnimationFrame&&requestAnimationFrame(t)||setTimeout(t,16))}var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:400,r=arguments[2],o=r?0:1;n.style.opacity=o;var i=+new Date;t()}function H(n){S(n,arguments.length>1&&void 0!==arguments[1]?arguments[1]:400,!0)}function N(n){n.style.display="none"}function j(n){n.style.display=""}function A(n){return n.getBoundingClientRect()}function O(n){var t=A(n);return{top:t.top+document.body.scrollTop,left:t.left+document.body.scrollLeft}}function B(n){return{left:n.offsetLeft,top:n.offsetTop}}function D(n,t){var e=n.offsetHeight;if(t){var r=getComputedStyle(n);e+=parseInt(r.marginTop)+parseInt(r.marginBottom)}return e}function I(n,t){var e=n.offsetWidth;if(t){var r=getComputedStyle(n);e+=parseInt(r.marginLeft)+parseInt(r.marginRight)}return e}function P(n,t,e){n.removeEventListener(t,e)}function _(n,t,e){n.addEventListener(t,e)}function q(n,t){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=!!n["on"+t],o=void 0;window.CustomEvent?o=new CustomEvent(t,{detail:e}):(o=document.createEvent("CustomEvent"),o.initCustomEvent(t,!0,!r,e)),n.dispatchEvent(o)}function R(n){(document.attachEvent?"complete"===document.readyState:"loading"!==document.readyState)?n():document.addEventListener("DOMContentLoaded",n)}function W(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});!function(){function n(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];W(this,n);var e=void 0;e=Array.isArray(t)?t:"string"==typeof t?r(t):[t],this.elements=[].concat(e)}n.prototype.css=function(n,t){return this.elements.forEach(function(e){return y(e,n,t)}),this},n.prototype.find=function(t){return this.elements.map(function(n){return r(t,n).elements}).reduce(function(n,t){return n.concat(t)}).reduce(function(n,t){return~n.elements.indexOf(t)?n:(n.elements.push(t),n)},new n)}}();e.d(t,"find",function(){return r}),e.d(t,"is",function(){return o}),e.d(t,"contains",function(){return i}),e.d(t,"prev",function(){return u}),e.d(t,"next",function(){return c}),e.d(t,"siblings",function(){return f}),e.d(t,"parent",function(){return s}),e.d(t,"hasClass",function(){return l}),e.d(t,"addClass",function(){return p}),e.d(t,"removeClass",function(){return m}),e.d(t,"toggleClass",function(){return v}),e.d(t,"parseHTML",function(){return h}),e.d(t,"before",function(){return g}),e.d(t,"after",function(){return E}),e.d(t,"prepend",function(){return L}),e.d(t,"append",function(){return b}),e.d(t,"clone",function(){return C}),e.d(t,"remove",function(){return w}),e.d(t,"text",function(){return x}),e.d(t,"html",function(){return M}),e.d(t,"replaceWith",function(){return T}),e.d(t,"fadeIn",function(){return H}),e.d(t,"hide",function(){return N}),e.d(t,"show",function(){return j}),e.d(t,"viewportPosition",function(){return A}),e.d(t,"offset",function(){return O}),e.d(t,"position",function(){return B}),e.d(t,"outerHeight",function(){return D}),e.d(t,"outerWidth",function(){return I}),e.d(t,"off",function(){return P}),e.d(t,"on",function(){return _}),e.d(t,"trigger",function(){return q}),e.d(t,"documentReady",function(){return R}),e.d(t,"GaspardElements",function(){})}])});