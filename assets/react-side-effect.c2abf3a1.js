import{r as e}from"./react.eb42bb38.js";import{s as t}from"./shallowequal.ea8d8004.js";function n(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var o=e.exports,r=n(o),i=n(t);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var p=!("undefined"==typeof window||!window.document||!window.document.createElement);var u=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(u){if("function"!=typeof u)throw new Error("Expected WrappedComponent to be a React component.");var c,f=[];function d(){c=e(f.map((function(e){return e.props}))),s.canUseDOM?t(c):n&&(c=n(c))}var s=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return c},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,f=[],e};var a=o.prototype;return a.shouldComponentUpdate=function(e){return!i(e,this.props)},a.componentWillMount=function(){f.push(this),d()},a.componentDidUpdate=function(){d()},a.componentWillUnmount=function(){var e=f.indexOf(this);f.splice(e,1),d()},a.render=function(){return r.createElement(u,this.props)},o}(o.Component);return a(s,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(u)+")"),a(s,"canUseDOM",p),s}};export{u as l};
