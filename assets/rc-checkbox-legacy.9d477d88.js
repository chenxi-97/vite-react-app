System.register(["./@babel-legacy.f580aa0a.js","./react-legacy.0e757699.js","./classnames-legacy.5e058700.js"],(function(e){"use strict";var n,t,c,a,o,s,r,u,i,l,d;return{setters:[function(e){n=e.c,t=e.d,c=e.e,a=e.m,o=e.f,s=e.n,r=e.g,u=e.b},function(e){i=e.R,l=e.r},function(e){d=e.c}],execute:function(){e("C",function(e){n(p,e);var l=t(p);function p(e){var n;c(this,p),(n=l.call(this,e)).handleChange=function(e){var t=n.props,c=t.disabled,o=t.onChange;c||("checked"in n.props||n.setState({checked:e.target.checked}),o&&o({target:a(a({},n.props),{},{checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))},n.saveInput=function(e){n.input=e};var t="checked"in e?e.checked:e.defaultChecked;return n.state={checked:t},n}return o(p,[{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"render",value:function(){var e,n=this.props,t=n.prefixCls,c=n.className,a=n.style,o=n.name,l=n.id,p=n.type,f=n.disabled,h=n.readOnly,y=n.tabIndex,k=n.onClick,v=n.onFocus,b=n.onBlur,m=n.onKeyDown,g=n.onKeyPress,C=n.onKeyUp,K=n.autoFocus,x=n.value,F=n.required,P=s(n,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","onKeyDown","onKeyPress","onKeyUp","autoFocus","value","required"]),D=Object.keys(P).reduce((function(e,n){return"aria-"!==n.substr(0,5)&&"data-"!==n.substr(0,5)&&"role"!==n||(e[n]=P[n]),e}),{}),N=this.state.checked,E=d(t,c,(r(e={},"".concat(t,"-checked"),N),r(e,"".concat(t,"-disabled"),f),e));return i.createElement("span",{className:E,style:a},i.createElement("input",u({name:o,id:l,type:p,required:F,readOnly:h,disabled:f,tabIndex:y,className:"".concat(t,"-input"),checked:!!N,onClick:k,onFocus:v,onBlur:b,onKeyUp:C,onKeyDown:m,onKeyPress:g,onChange:this.handleChange,autoFocus:K,ref:this.saveInput,value:x},D)),i.createElement("span",{className:"".concat(t,"-inner")}))}}],[{key:"getDerivedStateFromProps",value:function(e,n){return"checked"in e?a(a({},n),{},{checked:e.checked}):null}}]),p}(l.exports.Component)).defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){},onKeyDown:function(){},onKeyPress:function(){},onKeyUp:function(){}}}}}));
