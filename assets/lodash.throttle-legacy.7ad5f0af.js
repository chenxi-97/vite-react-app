!function(){function t(n){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(n)}System.register(["./react-legacy.0e757699.js"],(function(n){"use strict";var e;return{setters:[function(t){e=t.c}],execute:function(){var r="Expected a function",i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,a="object"==t(e)&&e&&e.Object===Object&&e,l="object"==("undefined"==typeof self?"undefined":t(self))&&self&&self.Object===Object&&self,s=a||l||Function("return this")(),y=Object.prototype.toString,v=Math.max,p=Math.min,b=function(){return s.Date.now()};function m(t,n,e){var i,o,u,f,c,a,l=0,s=!1,y=!1,m=!0;if("function"!=typeof t)throw new TypeError(r);function g(n){var e=i,r=o;return i=o=void 0,l=n,f=t.apply(r,e)}function S(t){return l=t,c=setTimeout(x,n),s?g(t):f}function h(t){var e=t-a;return void 0===a||e>=n||e<0||y&&t-l>=u}function x(){var t=b();if(h(t))return O(t);c=setTimeout(x,function(t){var e=n-(t-a);return y?p(e,u-(t-l)):e}(t))}function O(t){return c=void 0,m&&i?g(t):(i=o=void 0,f)}function T(){var t=b(),e=h(t);if(i=arguments,o=this,a=t,e){if(void 0===c)return S(a);if(y)return c=setTimeout(x,n),g(a)}return void 0===c&&(c=setTimeout(x,n)),f}return n=j(n)||0,d(e)&&(s=!!e.leading,u=(y="maxWait"in e)?v(j(e.maxWait)||0,n):u,m="trailing"in e?!!e.trailing:m),T.cancel=function(){void 0!==c&&clearTimeout(c),l=0,i=a=o=c=void 0},T.flush=function(){return void 0===c?f:O(b())},T}function d(n){var e=t(n);return!!n&&("object"==e||"function"==e)}function g(n){return"symbol"==t(n)||function(n){return!!n&&"object"==t(n)}(n)&&"[object Symbol]"==y.call(n)}function j(t){if("number"==typeof t)return t;if(g(t))return NaN;if(d(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=d(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var e=u.test(t);return e||f.test(t)?c(t.slice(2),e?2:8):o.test(t)?NaN:+t}n("l",(function(t,n,e){var i=!0,o=!0;if("function"!=typeof t)throw new TypeError(r);return d(e)&&(i="leading"in e?!!e.leading:i,o="trailing"in e?!!e.trailing:o),m(t,n,{leading:i,maxWait:n,trailing:o})}))}}}))}();
