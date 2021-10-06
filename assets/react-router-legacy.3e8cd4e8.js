System.register(["./@babel-legacy.f580aa0a.js","./react-legacy.0e757699.js","./prop-types-legacy.dbf6303e.js","./history-legacy.3c627b50.js","./mini-create-react-context-legacy.9f34c758.js","./tiny-invariant-legacy.438d2f37.js","./path-to-regexp-legacy.dea50c15.js","./react-is-legacy.1e8dffce.js","./hoist-non-react-statics-legacy.f8195370.js"],(function(t){"use strict";var n,e,o,r,i,a,c,u;return{setters:[function(t){n=t._,e=t.b,t.a},function(t){o=t.R},function(){},function(t){t.d,r=t.b,t.e,i=t.l},function(t){a=t.i},function(t){c=t.i},function(t){u=t.p},function(){},function(){}],execute:function(){t({a:function(){return g(p).location},d:function(t){var n=t.computedMatch,a=t.to,u=t.push,s=void 0!==u&&u;return o.createElement(p.Consumer,null,(function(t){t||c(!1);var u=t.history,p=t.staticContext,h=s?u.push:u.replace,f=r(n?"string"==typeof a?m(a,n.params):e({},a,{pathname:m(a.pathname,n.params)}):a);return p?(h(f),null):o.createElement(l,{onMount:function(){h(f)},onUpdate:function(t,n){var o=r(n.to);i(o,e({},f,{key:o.key}))||h(f)},to:a})}))},m:v,u:function(){return g(s)}});var s=function(t){var n=a();return n.displayName=t,n}("Router-History"),p=t("c",function(t){var n=a();return n.displayName=t,n}("Router"));t("R",function(t){function e(n){var e;return(e=t.call(this,n)||this).state={location:n.history.location},e._isMounted=!1,e._pendingLocation=null,n.staticContext||(e.unlisten=n.history.listen((function(t){e._isMounted?e.setState({location:t}):e._pendingLocation=t}))),e}n(e,t),e.computeRootMatch=function(t){return{path:"/",url:"/",params:{},isExact:"/"===t}};var r=e.prototype;return r.componentDidMount=function(){this._isMounted=!0,this._pendingLocation&&this.setState({location:this._pendingLocation})},r.componentWillUnmount=function(){this.unlisten&&this.unlisten()},r.render=function(){return o.createElement(p.Provider,{value:{history:this.props.history,location:this.state.location,match:e.computeRootMatch(this.state.location.pathname),staticContext:this.props.staticContext}},o.createElement(s.Provider,{children:this.props.children||null,value:this.props.history}))},e}(o.Component)),o.Component;var l=function(t){function e(){return t.apply(this,arguments)||this}n(e,t);var o=e.prototype;return o.componentDidMount=function(){this.props.onMount&&this.props.onMount.call(this,this)},o.componentDidUpdate=function(t){this.props.onUpdate&&this.props.onUpdate.call(this,this,t)},o.componentWillUnmount=function(){this.props.onUnmount&&this.props.onUnmount.call(this,this)},o.render=function(){return null},e}(o.Component),h={},f=0;function m(t,n){return void 0===t&&(t="/"),void 0===n&&(n={}),"/"===t?t:function(t){if(h[t])return h[t];var n=u.compile(t);return f<1e4&&(h[t]=n,f++),n}(t)(n,{pretty:!0})}var d={},y=0;function v(t,n){void 0===n&&(n={}),("string"==typeof n||Array.isArray(n))&&(n={path:n});var e=n,o=e.path,r=e.exact,i=void 0!==r&&r,a=e.strict,c=void 0!==a&&a,s=e.sensitive,p=void 0!==s&&s;return[].concat(o).reduce((function(n,e){if(!e&&""!==e)return null;if(n)return n;var o=function(t,n){var e=""+n.end+n.strict+n.sensitive,o=d[e]||(d[e]={});if(o[t])return o[t];var r=[],i={regexp:u(t,r,n),keys:r};return y<1e4&&(o[t]=i,y++),i}(e,{end:i,strict:c,sensitive:p}),r=o.regexp,a=o.keys,s=r.exec(t);if(!s)return null;var l=s[0],h=s.slice(1),f=t===l;return i&&!f?null:{path:e,url:"/"===e&&""===l?"/":l,isExact:f,params:a.reduce((function(t,n,e){return t[n.name]=h[e],t}),{})}}),null)}t("b",function(t){function r(){return t.apply(this,arguments)||this}return n(r,t),r.prototype.render=function(){var t=this;return o.createElement(p.Consumer,null,(function(n){n||c(!1);var r=t.props.location||n.location,i=t.props.computedMatch?t.props.computedMatch:t.props.path?v(r.pathname,t.props):n.match,a=e({},n,{location:r,match:i}),u=t.props,s=u.children,l=u.component,h=u.render;return Array.isArray(s)&&0===s.length&&(s=null),o.createElement(p.Provider,{value:a},a.match?s?"function"==typeof s?s(a):s:l?o.createElement(l,a):h?h(a):null:"function"==typeof s?s(a):null)}))},r}(o.Component)),o.Component,t("S",function(t){function r(){return t.apply(this,arguments)||this}return n(r,t),r.prototype.render=function(){var t=this;return o.createElement(p.Consumer,null,(function(n){n||c(!1);var r,i,a=t.props.location||n.location;return o.Children.forEach(t.props.children,(function(t){if(null==i&&o.isValidElement(t)){r=t;var c=t.props.path||t.props.from;i=c?v(a.pathname,e({},t.props,{path:c})):n.match}})),i?o.cloneElement(r,{location:a,computedMatch:i}):null}))},r}(o.Component));var g=o.useContext}}}));
