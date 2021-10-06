import{c as e,d as t,e as o,f as n,b as r,g as a,h as s,i,m as c,n as l}from"./@babel.023f8892.js";import{r as u}from"./react.eb42bb38.js";import{R as p}from"./react-dom.da73fb22.js";import{c as m}from"./classnames.ca41f454.js";import{a as f}from"./rc-motion.5487a61d.js";var d=function(s){e(c,s);var i=t(c);function c(){var e;o(this,c);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(e=i.call.apply(i,[this].concat(n))).closeTimer=null,e.close=function(t){t&&t.stopPropagation(),e.clearCloseTimer();var o=e.props,n=o.onClose,r=o.noticeKey;n&&n(r)},e.startCloseTimer=function(){e.props.duration&&(e.closeTimer=window.setTimeout((function(){e.close()}),1e3*e.props.duration))},e.clearCloseTimer=function(){e.closeTimer&&(clearTimeout(e.closeTimer),e.closeTimer=null)},e}return n(c,[{key:"componentDidMount",value:function(){this.startCloseTimer()}},{key:"componentDidUpdate",value:function(e){(this.props.duration!==e.duration||this.props.updateMark!==e.updateMark||this.props.visible!==e.visible&&this.props.visible)&&this.restartCloseTimer()}},{key:"componentWillUnmount",value:function(){this.clearCloseTimer()}},{key:"restartCloseTimer",value:function(){this.clearCloseTimer(),this.startCloseTimer()}},{key:"render",value:function(){var e=this,t=this.props,o=t.prefixCls,n=t.className,s=t.closable,i=t.closeIcon,c=t.style,l=t.onClick,f=t.children,d=t.holder,v="".concat(o,"-notice"),h=Object.keys(this.props).reduce((function(t,o){return"data-"!==o.substr(0,5)&&"aria-"!==o.substr(0,5)&&"role"!==o||(t[o]=e.props[o]),t}),{}),y=u.exports.createElement("div",r({className:m(v,n,a({},"".concat(v,"-closable"),s)),style:c,onMouseEnter:this.clearCloseTimer,onMouseLeave:this.startCloseTimer,onClick:l},h),u.exports.createElement("div",{className:"".concat(v,"-content")},f),s?u.exports.createElement("a",{tabIndex:0,onClick:this.close,className:"".concat(v,"-close")},i||u.exports.createElement("span",{className:"".concat(v,"-close-x")})):null);return d?p.createPortal(y,d):y}}]),c}(u.exports.Component);function v(e){var t=u.exports.useRef({}),o=u.exports.useState([]),n=s(o,2),a=n[0],c=n[1];return[function(o){var n=!0;e.add(o,(function(e,o){var a=o.key;if(e&&(!t.current[a]||n)){var s=u.exports.createElement(d,r({},o,{holder:e}));t.current[a]=s,c((function(e){var t=e.findIndex((function(e){return e.key===o.key}));if(-1===t)return[].concat(i(e),[s]);var n=i(e);return n[t]=s,n}))}n=!1}))},u.exports.createElement(u.exports.Fragment,null,a)]}d.defaultProps={onClose:function(){},duration:1.5};var h=0,y=Date.now();function k(){var e=h;return h+=1,"rcNotification_".concat(y,"_").concat(e)}var C=function(a){e(i,a);var s=t(i);function i(){var e;o(this,i);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(e=s.call.apply(s,[this].concat(n))).state={notices:[]},e.hookRefs=new Map,e.add=function(t,o){var n=t.key||k(),r=c(c({},t),{},{key:n}),a=e.props.maxCount;e.setState((function(e){var t=e.notices,s=t.map((function(e){return e.notice.key})).indexOf(n),i=t.concat();return-1!==s?i.splice(s,1,{notice:r,holderCallback:o}):(a&&t.length>=a&&(r.key=i[0].notice.key,r.updateMark=k(),r.userPassKey=n,i.shift()),i.push({notice:r,holderCallback:o})),{notices:i}}))},e.remove=function(t){e.setState((function(e){return{notices:e.notices.filter((function(e){var o=e.notice,n=o.key;return(o.userPassKey||n)!==t}))}}))},e.noticePropsMap={},e}return n(i,[{key:"getTransitionName",value:function(){var e=this.props,t=e.prefixCls,o=e.animation,n=this.props.transitionName;return!n&&o&&(n="".concat(t,"-").concat(o)),n}},{key:"render",value:function(){var e=this,t=this.state.notices,o=this.props,n=o.prefixCls,a=o.className,s=o.closeIcon,i=o.style,l=[];return t.forEach((function(o,r){var a=o.notice,i=o.holderCallback,u=r===t.length-1?a.updateMark:void 0,p=a.key,m=a.userPassKey,f=c(c(c({prefixCls:n,closeIcon:s},a),a.props),{},{key:p,noticeKey:m||p,updateMark:u,onClose:function(t){var o;e.remove(t),null===(o=a.onClose)||void 0===o||o.call(a)},onClick:a.onClick,children:a.content});l.push(p),e.noticePropsMap[p]={props:f,holderCallback:i}})),u.exports.createElement("div",{className:m(n,a),style:i},u.exports.createElement(f,{keys:l,motionName:this.getTransitionName(),onVisibleChanged:function(t,o){var n=o.key;t||delete e.noticePropsMap[n]}},(function(t){var o=t.key,a=t.className,s=t.style,i=t.visible,l=e.noticePropsMap[o],p=l.props,f=l.holderCallback;return f?u.exports.createElement("div",{key:o,className:m(a,"".concat(n,"-hook-holder")),style:c({},s),ref:function(t){void 0!==o&&(t?(e.hookRefs.set(o,t),f(t,p)):e.hookRefs.delete(o))}}):u.exports.createElement(d,r({},p,{className:m(a,null==p?void 0:p.className),style:c(c({},s),null==p?void 0:p.style),visible:i}))})))}}]),i}(u.exports.Component);C.newInstance=void 0,C.defaultProps={prefixCls:"rc-notification",animation:"fade",style:{top:65,left:"50%"}},C.newInstance=function(e,t){var o=e||{},n=o.getContainer,a=l(o,["getContainer"]),s=document.createElement("div");n?n().appendChild(s):document.body.appendChild(s);var i=!1;p.render(u.exports.createElement(C,r({},a,{ref:function(e){i||(i=!0,t({notice:function(t){e.add(t)},removeNotice:function(t){e.remove(t)},component:e,destroy:function(){p.unmountComponentAtNode(s),s.parentNode&&s.parentNode.removeChild(s)},useNotification:function(){return v(e)}}))}})),s)};export{C as N,v as u};
