System.register(["./react-legacy.0e757699.js","./@babel-legacy.f580aa0a.js","./rc-util-legacy.0b3b3659.js","./async-validator-legacy.f26591a0.js"],(function(){"use strict";var e,t,n,r,i,a,s,o,u,l,c,d,f,h,v,g,m,p,F,y;return{setters:[function(t){e=t.r},function(e){t=e.i,n=e.m,r=e.k,i=e.o,a=e.r,s=e.g,o=e.n,u=e.b,l=e.c,c=e.d,d=e.e,f=e.j,h=e.f,v=e.h},function(e){g=e.w,m=e.f,p=e.h,F=e.t},function(e){y=e.S}],execute:function(){var V="RC_FORM_INTERNAL_HOOKS",b=function(){g(!1,"Can not find FormContext. Please make sure you wrap Field under Form.")},k=e.exports.createContext({getFieldValue:b,getFieldsValue:b,getFieldError:b,getFieldsError:b,isFieldsTouched:b,isFieldTouched:b,isFieldValidating:b,isFieldsValidating:b,resetFields:b,setFields:b,setFieldsValue:b,validateFields:b,submit:b,getInternalHooks:function(){return b(),{dispatch:b,initEntityValue:b,registerField:b,useSubscribe:b,setInitialValues:b,setCallbacks:b,getFields:b,setValidateMessages:b,setPreserve:b}}});function E(e){return null==e?[]:Array.isArray(e)?e:[e]}function P(e){return E(e)}function x(e,t){return m(e,t)}function C(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],i=p(e,t,n,r);return i}function w(e,t){var n={};return t.forEach((function(t){var r=x(e,t);n=C(n,t,r)})),n}function N(e,t){return e&&e.some((function(e){return I(e,t)}))}function $(e){return"object"===r(e)&&null!==e&&Object.getPrototypeOf(e)===Object.prototype}function R(e,r){var i=Array.isArray(e)?t(e):n({},e);return r?(Object.keys(r).forEach((function(e){var t=i[e],n=r[e],a=$(t)&&$(n);i[e]=a?R(t,n||{}):n})),i):i}function A(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return n.reduce((function(e,t){return R(e,t)}),e)}function I(e,t){return!(!e||!t||e.length!==t.length)&&e.every((function(e,n){return t[n]===e}))}function M(e){var t=arguments.length<=1?void 0:arguments[1];return t&&t.target&&e in t.target?t.target[e]:t}function T(e,n,r){var i=e.length;if(n<0||n>=i||r<0||r>=i)return e;var a=e[n],s=n-r;return s>0?[].concat(t(e.slice(0,r)),[a],t(e.slice(r,n)),t(e.slice(n+1,i))):s<0?[].concat(t(e.slice(0,n)),t(e.slice(n+1,r+1)),[a],t(e.slice(r+1,i))):e}var j="'${name}' is not a valid ${type}",O={default:"Validation error on field '${name}'",required:"'${name}' is required",enum:"'${name}' must be one of [${enum}]",whitespace:"'${name}' cannot be empty",date:{format:"'${name}' is invalid for format date",parse:"'${name}' could not be parsed as date",invalid:"'${name}' is invalid date"},types:{string:j,method:j,array:j,object:j,number:j,date:j,boolean:j,integer:j,float:j,regexp:j,email:j,url:j,hex:j},string:{len:"'${name}' must be exactly ${len} characters",min:"'${name}' must be at least ${min} characters",max:"'${name}' cannot be longer than ${max} characters",range:"'${name}' must be between ${min} and ${max} characters"},number:{len:"'${name}' must equal ${len}",min:"'${name}' cannot be less than ${min}",max:"'${name}' cannot be greater than ${max}",range:"'${name}' must be between ${min} and ${max}"},array:{len:"'${name}' must be exactly ${len} in length",min:"'${name}' cannot be less than ${min} in length",max:"'${name}' cannot be greater than ${max} in length",range:"'${name}' must be between ${min} and ${max} in length"},pattern:{mismatch:"'${name}' does not match pattern ${pattern}"}},U=y;function L(e,t,i,a){var s=n(n({},i),{},{name:t,enum:(i.enum||[]).join(", ")}),o=function(e,t){return function(){return function(e,t){return e.replace(/\$\{\w+\}/g,(function(e){var n=e.slice(2,-1);return t[n]}))}(e,n(n({},s),t))}};return function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).forEach((function(i){var s=t[i];"string"==typeof s?n[i]=o(s,a):s&&"object"===r(s)?(n[i]={},e(s,n[i])):n[i]=s})),n}(A({},O,e))}function S(e,t,n,r,i){return _.apply(this,arguments)}function _(){return(_=i(a.mark((function r(i,o,u,l,c){var d,f,h,v,g,m;return a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return d=n({},u),f=null,d&&"array"===d.type&&d.defaultField&&(f=d.defaultField,delete d.defaultField),h=new U(s({},i,[d])),v=L(l.validateMessages,i,d,c),h.messages(v),g=[],r.prev=7,r.next=10,Promise.resolve(h.validate(s({},i,o),n({},l)));case 10:r.next=15;break;case 12:r.prev=12,r.t0=r.catch(7),r.t0.errors?g=r.t0.errors.map((function(t,n){var r=t.message;return e.exports.isValidElement(r)?e.exports.cloneElement(r,{key:"error_".concat(n)}):r})):(console.error(r.t0),g=[v.default()]);case 15:if(g.length||!f){r.next=20;break}return r.next=18,Promise.all(o.map((function(e,t){return S("".concat(i,".").concat(t),e,f,l,c)})));case 18:return m=r.sent,r.abrupt("return",m.reduce((function(e,n){return[].concat(t(e),t(n))}),[]));case 20:return r.abrupt("return",g);case 21:case"end":return r.stop()}}),r,null,[[7,12]])})))).apply(this,arguments)}function H(e,t,r,s,o,u){var l,c=e.join("."),d=r.map((function(e){var t=e.validator;return t?n(n({},e),{},{validator:function(e,n,r){var i=!1,a=t(e,n,(function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];Promise.resolve().then((function(){g(!i,"Your validator function has already return a promise. `callback` will be ignored."),i||r.apply(void 0,t)}))}));i=a&&"function"==typeof a.then&&"function"==typeof a.catch,g(i,"`callback` is deprecated. Please return a promise instead."),i&&a.then((function(){r()})).catch((function(e){r(e||" ")}))}}):e}));if(!0===o)l=new Promise(function(){var e=i(a.mark((function e(n,r){var i,o;return a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=0;case 1:if(!(i<d.length)){e.next=11;break}return e.next=4,S(c,t,d[i],s,u);case 4:if(!(o=e.sent).length){e.next=8;break}return r(o),e.abrupt("return");case 8:i+=1,e.next=1;break;case 11:n([]);case 12:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());else{var f=d.map((function(e){return S(c,t,e,s,u)}));l=(o?function(e){return W.apply(this,arguments)}(f):function(e){return D.apply(this,arguments)}(f)).then((function(e){return e.length?Promise.reject(e):[]}))}return l.catch((function(e){return e})),l}function D(){return(D=i(a.mark((function e(n){return a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Promise.all(n).then((function(e){var n;return(n=[]).concat.apply(n,t(e))})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function W(){return(W=i(a.mark((function e(t){var n;return a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=0,e.abrupt("return",new Promise((function(e){t.forEach((function(r){r.then((function(r){r.length&&e(r),(n+=1)===t.length&&e([])}))}))})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function q(e,t,n,r,i,a){return"function"==typeof e?e(t,n,"source"in a?{source:a.source}:{}):r!==i}var z=function(r){l(a,r);var i=c(a);function a(r){var o;return d(this,a),(o=i.call(this,r)).state={resetCount:0},o.cancelRegisterFunc=null,o.mounted=!1,o.touched=!1,o.dirty=!1,o.validatePromise=null,o.errors=[],o.cancelRegister=function(){var e=o.props,t=e.preserve,n=e.isListField,r=e.name;o.cancelRegisterFunc&&o.cancelRegisterFunc(n,t,P(r)),o.cancelRegisterFunc=null},o.getNamePath=function(){var e=o.props,n=e.name,r=e.fieldContext.prefixName;return void 0!==n?[].concat(t(void 0===r?[]:r),t(n)):[]},o.getRules=function(){var e=o.props,t=e.rules,n=void 0===t?[]:t,r=e.fieldContext;return n.map((function(e){return"function"==typeof e?e(r):e}))},o.refresh=function(){o.mounted&&o.setState((function(e){return{resetCount:e.resetCount+1}}))},o.onStoreChange=function(e,t,n){var r=o.props,i=r.shouldUpdate,a=r.dependencies,s=void 0===a?[]:a,u=r.onReset,l=n.store,c=o.getNamePath(),d=o.getValue(e),f=o.getValue(l),h=t&&N(t,c);switch("valueUpdate"===n.type&&"external"===n.source&&d!==f&&(o.touched=!0,o.dirty=!0,o.validatePromise=null,o.errors=[]),n.type){case"reset":if(!t||h)return o.touched=!1,o.dirty=!1,o.validatePromise=null,o.errors=[],u&&u(),void o.refresh();break;case"setField":if(h){var v=n.data;return"touched"in v&&(o.touched=v.touched),"validating"in v&&!("originRCField"in v)&&(o.validatePromise=v.validating?Promise.resolve([]):null),"errors"in v&&(o.errors=v.errors||[]),o.dirty=!0,void o.reRender()}if(i&&!c.length&&q(i,e,l,d,f,n))return void o.reRender();break;case"dependenciesUpdate":if(s.map(P).some((function(e){return N(n.relatedFields,e)})))return void o.reRender();break;default:if(h||(!s.length||c.length||i)&&q(i,e,l,d,f,n))return void o.reRender()}!0===i&&o.reRender()},o.validateRules=function(e){var t=o.getNamePath(),n=o.getValue(),r=Promise.resolve().then((function(){if(!o.mounted)return[];var i=o.props,a=i.validateFirst,s=void 0!==a&&a,u=i.messageVariables,l=(e||{}).triggerName,c=o.getRules();l&&(c=c.filter((function(e){var t=e.validateTrigger;return!t||E(t).includes(l)})));var d=H(t,n,c,e,s,u);return d.catch((function(e){return e})).then((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];o.validatePromise===r&&(o.validatePromise=null,o.errors=e,o.reRender())})),d}));return o.validatePromise=r,o.dirty=!0,o.errors=[],o.reRender(),r},o.isFieldValidating=function(){return!!o.validatePromise},o.isFieldTouched=function(){return o.touched},o.isFieldDirty=function(){return o.dirty},o.getErrors=function(){return o.errors},o.isListField=function(){return o.props.isListField},o.isList=function(){return o.props.isList},o.isPreserve=function(){return o.props.preserve},o.getMeta=function(){return o.prevValidating=o.isFieldValidating(),{touched:o.isFieldTouched(),validating:o.prevValidating,errors:o.errors,name:o.getNamePath()}},o.getOnlyChild=function(t){if("function"==typeof t){var r=o.getMeta();return n(n({},o.getOnlyChild(t(o.getControlled(),r,o.props.fieldContext))),{},{isFunction:!0})}var i=F(t);return 1===i.length&&e.exports.isValidElement(i[0])?{child:i[0],isFunction:!1}:{child:i,isFunction:!1}},o.getValue=function(e){var t=o.props.fieldContext.getFieldsValue,n=o.getNamePath();return x(e||t(!0),n)},o.getControlled=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=o.props,r=t.trigger,i=t.validateTrigger,a=t.getValueFromEvent,u=t.normalize,l=t.valuePropName,c=t.getValueProps,d=t.fieldContext,f=void 0!==i?i:d.validateTrigger,h=o.getNamePath(),v=d.getInternalHooks,g=d.getFieldsValue,m=v(V),p=m.dispatch,F=o.getValue(),y=c||function(e){return s({},l,e)},b=e[r],k=n(n({},e),y(F));k[r]=function(){var e;o.touched=!0,o.dirty=!0;for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];e=a?a.apply(void 0,n):M.apply(void 0,[l].concat(n)),u&&(e=u(e,F,g(!0))),p({type:"updateValue",namePath:h,value:e}),b&&b.apply(void 0,n)};var P=E(f||[]);return P.forEach((function(e){var t=k[e];k[e]=function(){t&&t.apply(void 0,arguments);var n=o.props.rules;n&&n.length&&p({type:"validateField",namePath:h,triggerName:e})}})),k},r.fieldContext&&(0,(0,r.fieldContext.getInternalHooks)(V).initEntityValue)(f(o)),o}return h(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.shouldUpdate,n=e.fieldContext;if(this.mounted=!0,n){var r=(0,n.getInternalHooks)(V).registerField;this.cancelRegisterFunc=r(this)}!0===t&&this.reRender()}},{key:"componentWillUnmount",value:function(){this.cancelRegister(),this.mounted=!1}},{key:"reRender",value:function(){this.mounted&&this.forceUpdate()}},{key:"render",value:function(){var t,n=this.state.resetCount,r=this.props.children,i=this.getOnlyChild(r),a=i.child;return i.isFunction?t=a:e.exports.isValidElement(a)?t=e.exports.cloneElement(a,this.getControlled(a.props)):(g(!a,"`children` of Field is not validate ReactElement."),t=a),e.exports.createElement(e.exports.Fragment,{key:n},t)}}]),a}(e.exports.Component);function J(t){var n=t.name,r=o(t,["name"]),i=e.exports.useContext(k),a=void 0!==n?P(n):void 0,s="keep";return r.isListField||(s="_".concat((a||[]).join("_"))),e.exports.createElement(z,u({key:s,name:a},r,{fieldContext:i}))}z.contextType=k,z.defaultProps={trigger:"onChange",valuePropName:"value"};var K="__@field_split__";function Y(e){return e.map((function(e){return"".concat(r(e),":").concat(e)})).join(K)}var B=function(){function e(){d(this,e),this.kvs=new Map}return h(e,[{key:"set",value:function(e,t){this.kvs.set(Y(e),t)}},{key:"get",value:function(e){return this.kvs.get(Y(e))}},{key:"update",value:function(e,t){var n=t(this.get(e));n?this.set(e,n):this.delete(e)}},{key:"delete",value:function(e){this.kvs.delete(Y(e))}},{key:"map",value:function(e){return t(this.kvs.entries()).map((function(t){var n=v(t,2),r=n[0],i=n[1],a=r.split(K);return e({key:a.map((function(e){var t=e.match(/^([^:]*):(.*)$/),n=v(t,3),r=n[1],i=n[2];return"number"===r?Number(i):i})),value:i})}))}},{key:"toJSON",value:function(){var e={};return this.map((function(t){var n=t.key,r=t.value;return e[n.join(".")]=r,null})),e}}]),e}(),G=function e(r){var i=this;d(this,e),this.formHooked=!1,this.subscribable=!0,this.store={},this.fieldEntities=[],this.initialValues={},this.callbacks={},this.validateMessages=null,this.preserve=null,this.lastValidatePromise=null,this.getForm=function(){return{getFieldValue:i.getFieldValue,getFieldsValue:i.getFieldsValue,getFieldError:i.getFieldError,getFieldsError:i.getFieldsError,isFieldsTouched:i.isFieldsTouched,isFieldTouched:i.isFieldTouched,isFieldValidating:i.isFieldValidating,isFieldsValidating:i.isFieldsValidating,resetFields:i.resetFields,setFields:i.setFields,setFieldsValue:i.setFieldsValue,validateFields:i.validateFields,submit:i.submit,getInternalHooks:i.getInternalHooks}},this.getInternalHooks=function(e){return e===V?(i.formHooked=!0,{dispatch:i.dispatch,initEntityValue:i.initEntityValue,registerField:i.registerField,useSubscribe:i.useSubscribe,setInitialValues:i.setInitialValues,setCallbacks:i.setCallbacks,setValidateMessages:i.setValidateMessages,getFields:i.getFields,setPreserve:i.setPreserve}):(g(!1,"`getInternalHooks` is internal usage. Should not call directly."),null)},this.useSubscribe=function(e){i.subscribable=e},this.setInitialValues=function(e,t){i.initialValues=e||{},t&&(i.store=A({},e,i.store))},this.getInitialValue=function(e){return x(i.initialValues,e)},this.setCallbacks=function(e){i.callbacks=e},this.setValidateMessages=function(e){i.validateMessages=e},this.setPreserve=function(e){i.preserve=e},this.timeoutId=null,this.warningUnhooked=function(){},this.getFieldEntities=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return e?i.fieldEntities.filter((function(e){return e.getNamePath().length})):i.fieldEntities},this.getFieldsMap=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=new B;return i.getFieldEntities(e).forEach((function(e){var n=e.getNamePath();t.set(n,e)})),t},this.getFieldEntitiesForNamePathList=function(e){if(!e)return i.getFieldEntities(!0);var t=i.getFieldsMap(!0);return e.map((function(e){var n=P(e);return t.get(n)||{INVALIDATE_NAME_PATH:P(e)}}))},this.getFieldsValue=function(e,t){if(i.warningUnhooked(),!0===e&&!t)return i.store;var n=i.getFieldEntitiesForNamePathList(Array.isArray(e)?e:null),r=[];return n.forEach((function(n){var i,a="INVALIDATE_NAME_PATH"in n?n.INVALIDATE_NAME_PATH:n.getNamePath();if(e||!(null===(i=n.isListField)||void 0===i?void 0:i.call(n)))if(t){var s="getMeta"in n?n.getMeta():null;t(s)&&r.push(a)}else r.push(a)})),w(i.store,r.map(P))},this.getFieldValue=function(e){i.warningUnhooked();var t=P(e);return x(i.store,t)},this.getFieldsError=function(e){return i.warningUnhooked(),i.getFieldEntitiesForNamePathList(e).map((function(t,n){return t&&!("INVALIDATE_NAME_PATH"in t)?{name:t.getNamePath(),errors:t.getErrors()}:{name:P(e[n]),errors:[]}}))},this.getFieldError=function(e){i.warningUnhooked();var t=P(e);return i.getFieldsError([t])[0].errors},this.isFieldsTouched=function(){i.warningUnhooked();for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];var a,s=n[0],o=n[1],u=!1;0===n.length?a=null:1===n.length?Array.isArray(s)?(a=s.map(P),u=!1):(a=null,u=s):(a=s.map(P),u=o);var l=i.getFieldEntities(!0),c=function(e){return e.isFieldTouched()};if(!a)return u?l.every(c):l.some(c);var d=new B;a.forEach((function(e){d.set(e,[])})),l.forEach((function(e){var n=e.getNamePath();a.forEach((function(r){r.every((function(e,t){return n[t]===e}))&&d.update(r,(function(n){return[].concat(t(n),[e])}))}))}));var f=function(e){return e.some(c)},h=d.map((function(e){return e.value}));return u?h.every(f):h.some(f)},this.isFieldTouched=function(e){return i.warningUnhooked(),i.isFieldsTouched([e])},this.isFieldsValidating=function(e){i.warningUnhooked();var t=i.getFieldEntities();if(!e)return t.some((function(e){return e.isFieldValidating()}));var n=e.map(P);return t.some((function(e){var t=e.getNamePath();return N(n,t)&&e.isFieldValidating()}))},this.isFieldValidating=function(e){return i.warningUnhooked(),i.isFieldsValidating([e])},this.resetWithFieldInitialValue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=new B,r=i.getFieldEntities(!0);r.forEach((function(e){var t=e.props.initialValue,r=e.getNamePath();if(void 0!==t){var i=n.get(r)||new Set;i.add({entity:e,value:t}),n.set(r,i)}}));var a,s=function(r){r.forEach((function(r){if(void 0!==r.props.initialValue){var a=r.getNamePath();if(void 0!==i.getInitialValue(a))g(!1,"Form already set 'initialValues' with path '".concat(a.join("."),"'. Field can not overwrite it."));else{var s=n.get(a);if(s&&s.size>1)g(!1,"Multiple Field with path '".concat(a.join("."),"' set 'initialValue'. Can not decide which one to pick."));else if(s){var o=i.getFieldValue(a);e.skipExist&&void 0!==o||(i.store=C(i.store,a,t(s)[0].value))}}}}))};e.entities?a=e.entities:e.namePathList?(a=[],e.namePathList.forEach((function(e){var r,i=n.get(e);i&&(r=a).push.apply(r,t(t(i).map((function(e){return e.entity}))))}))):a=r,s(a)},this.resetFields=function(e){i.warningUnhooked();var t=i.store;if(!e)return i.store=A({},i.initialValues),i.resetWithFieldInitialValue(),void i.notifyObservers(t,null,{type:"reset"});var n=e.map(P);n.forEach((function(e){var t=i.getInitialValue(e);i.store=C(i.store,e,t)})),i.resetWithFieldInitialValue({namePathList:n}),i.notifyObservers(t,n,{type:"reset"})},this.setFields=function(e){i.warningUnhooked();var t=i.store;e.forEach((function(e){var n=e.name;e.errors;var r=o(e,["name","errors"]),a=P(n);"value"in r&&(i.store=C(i.store,a,r.value)),i.notifyObservers(t,[a],{type:"setField",data:e})}))},this.getFields=function(){return i.getFieldEntities(!0).map((function(e){var t=e.getNamePath(),r=e.getMeta(),a=n(n({},r),{},{name:t,value:i.getFieldValue(t)});return Object.defineProperty(a,"originRCField",{value:!0}),a}))},this.initEntityValue=function(e){var t=e.props.initialValue;if(void 0!==t){var n=e.getNamePath();void 0===x(i.store,n)&&(i.store=C(i.store,n,t))}},this.registerField=function(e){if(i.fieldEntities.push(e),void 0!==e.props.initialValue){var t=i.store;i.resetWithFieldInitialValue({entities:[e],skipExist:!0}),i.notifyObservers(t,[e.getNamePath()],{type:"valueUpdate",source:"internal"})}return function(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];i.fieldEntities=i.fieldEntities.filter((function(t){return t!==e}));var a=void 0!==n?n:i.preserve;if(!1===a&&(!t||r.length>1)){var s=e.getNamePath(),o=t?void 0:x(i.initialValues,s);s.length&&i.getFieldValue(s)!==o&&i.fieldEntities.every((function(e){return!I(e.getNamePath(),s)}))&&(i.store=C(i.store,s,o,!0))}}},this.dispatch=function(e){switch(e.type){case"updateValue":var t=e.namePath,n=e.value;i.updateValue(t,n);break;case"validateField":var r=e.namePath,a=e.triggerName;i.validateFields([r],{triggerName:a})}},this.notifyObservers=function(e,t,r){if(i.subscribable){var a=n(n({},r),{},{store:i.getFieldsValue(!0)});i.getFieldEntities().forEach((function(n){(0,n.onStoreChange)(e,t,a)}))}else i.forceRootUpdate()},this.updateValue=function(e,n){var r=P(e),a=i.store;i.store=C(i.store,r,n),i.notifyObservers(a,[r],{type:"valueUpdate",source:"internal"});var s=i.getDependencyChildrenFields(r);s.length&&i.validateFields(s),i.notifyObservers(a,s,{type:"dependenciesUpdate",relatedFields:[r].concat(t(s))});var o=i.callbacks.onValuesChange;o&&o(w(i.store,[r]),i.getFieldsValue()),i.triggerOnFieldsChange([r].concat(t(s)))},this.setFieldsValue=function(e){i.warningUnhooked();var t=i.store;e&&(i.store=A(i.store,e)),i.notifyObservers(t,null,{type:"valueUpdate",source:"external"})},this.getDependencyChildrenFields=function(e){var t=new Set,n=[],r=new B;return i.getFieldEntities().forEach((function(e){(e.props.dependencies||[]).forEach((function(t){var n=P(t);r.update(n,(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Set;return t.add(e),t}))}))})),function e(i){(r.get(i)||new Set).forEach((function(r){if(!t.has(r)){t.add(r);var i=r.getNamePath();r.isFieldDirty()&&i.length&&(n.push(i),e(i))}}))}(e),n},this.triggerOnFieldsChange=function(e,t){var n=i.callbacks.onFieldsChange;if(n){var r=i.getFields();if(t){var a=new B;t.forEach((function(e){var t=e.name,n=e.errors;a.set(t,n)})),r.forEach((function(e){e.errors=a.get(e.name)||e.errors}))}n(r.filter((function(t){var n=t.name;return N(e,n)})),r)}},this.validateFields=function(e,t){i.warningUnhooked();var r=!!e,a=r?e.map(P):[],s=[];i.getFieldEntities(!0).forEach((function(o){if(r||a.push(o.getNamePath()),(null==t?void 0:t.recursive)&&r){var u=o.getNamePath();u.every((function(t,n){return e[n]===t||void 0===e[n]}))&&a.push(u)}if(o.props.rules&&o.props.rules.length){var l=o.getNamePath();if(!r||N(a,l)){var c=o.validateRules(n({validateMessages:n(n({},O),i.validateMessages)},t));s.push(c.then((function(){return{name:l,errors:[]}})).catch((function(e){return Promise.reject({name:l,errors:e})})))}}}));var o=function(e){var t=!1,n=e.length,r=[];return e.length?new Promise((function(i,a){e.forEach((function(e,s){e.catch((function(e){return t=!0,e})).then((function(e){n-=1,r[s]=e,n>0||(t&&a(r),i(r))}))}))})):Promise.resolve([])}(s);i.lastValidatePromise=o,o.catch((function(e){return e})).then((function(e){var t=e.map((function(e){return e.name}));i.notifyObservers(i.store,t,{type:"validateFinish"}),i.triggerOnFieldsChange(t,e)}));var u=o.then((function(){return i.lastValidatePromise===o?Promise.resolve(i.getFieldsValue(a)):Promise.reject([])})).catch((function(e){var t=e.filter((function(e){return e&&e.errors.length}));return Promise.reject({values:i.getFieldsValue(a),errorFields:t,outOfDate:i.lastValidatePromise!==o})}));return u.catch((function(e){return e})),u},this.submit=function(){i.warningUnhooked(),i.validateFields().then((function(e){var t=i.callbacks.onFinish;if(t)try{t(e)}catch(n){console.error(n)}})).catch((function(e){var t=i.callbacks.onFinishFailed;t&&t(e)}))},this.forceRootUpdate=r};function Q(t){var n=e.exports.useRef(),r=e.exports.useState({}),i=v(r,2)[1];if(!n.current)if(t)n.current=t;else{var a=new G((function(){i({})}));n.current=a.getForm()}return[n.current]}var X=e.exports.createContext({triggerFormChange:function(){},triggerFormFinish:function(){},registerForm:function(){},unregisterForm:function(){}}),Z=function(i,a){var s=i.name,l=i.initialValues,c=i.fields,d=i.form,f=i.preserve,h=i.children,g=i.component,m=void 0===g?"form":g,p=i.validateMessages,F=i.validateTrigger,y=void 0===F?"onChange":F,b=i.onValuesChange,E=i.onFieldsChange,P=i.onFinish,x=i.onFinishFailed,C=o(i,["name","initialValues","fields","form","preserve","children","component","validateMessages","validateTrigger","onValuesChange","onFieldsChange","onFinish","onFinishFailed"]),w=e.exports.useContext(X),N=Q(d),$=v(N,1)[0],R=$.getInternalHooks(V),A=R.useSubscribe,I=R.setInitialValues,M=R.setCallbacks,T=R.setValidateMessages,j=R.setPreserve;e.exports.useImperativeHandle(a,(function(){return $})),e.exports.useEffect((function(){return w.registerForm(s,$),function(){w.unregisterForm(s)}}),[w,$,s]),T(n(n({},w.validateMessages),p)),M({onValuesChange:b,onFieldsChange:function(e){if(w.triggerFormChange(s,e),E){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];E.apply(void 0,[e].concat(n))}},onFinish:function(e){w.triggerFormFinish(s,e),P&&P(e)},onFinishFailed:x}),j(f);var O=e.exports.useRef(null);I(l,!O.current),O.current||(O.current=!0);var U=h,L="function"==typeof h;L&&(U=h($.getFieldsValue(!0),$)),A(!L);var S=e.exports.useRef();e.exports.useEffect((function(){(function(e,n){if(e===n)return!0;if(!e&&n||e&&!n)return!1;if(!e||!n||"object"!==r(e)||"object"!==r(n))return!1;var i=Object.keys(e),a=Object.keys(n),s=new Set([].concat(t(i),t(a)));return t(s).every((function(t){var r=e[t],i=n[t];return"function"==typeof r&&"function"==typeof i||r===i}))})(S.current||[],c||[])||$.setFields(c||[]),S.current=c}),[c,$]);var _=e.exports.useMemo((function(){return n(n({},$),{},{validateTrigger:y})}),[$,y]),H=e.exports.createElement(k.Provider,{value:_},U);return!1===m?H:e.exports.createElement(m,u({},C,{onSubmit:function(e){e.preventDefault(),e.stopPropagation(),$.submit()},onReset:function(e){var t;e.preventDefault(),$.resetFields(),null===(t=C.onReset)||void 0===t||t.call(C,e)}}),H)},ee=e.exports.forwardRef(Z);ee.FormProvider=function(t){var r=t.validateMessages,i=t.onFormChange,a=t.onFormFinish,o=t.children,u=e.exports.useContext(X),l=e.exports.useRef({});return e.exports.createElement(X.Provider,{value:n(n({},u),{},{validateMessages:n(n({},u.validateMessages),r),triggerFormChange:function(e,t){i&&i(e,{changedFields:t,forms:l.current}),u.triggerFormChange(e,t)},triggerFormFinish:function(e,t){a&&a(e,{values:t,forms:l.current}),u.triggerFormFinish(e,t)},registerForm:function(e,t){e&&(l.current=n(n({},l.current),{},s({},e,t))),u.registerForm(e,t)},unregisterForm:function(e){var t=n({},l.current);delete t[e],l.current=t,u.unregisterForm(e)}})},o)},ee.Field=J,ee.List=function(r){var i=r.name,a=r.initialValue,s=r.children,o=r.rules,u=r.validateTrigger,l=e.exports.useContext(k),c=e.exports.useRef({keys:[],id:0}).current;if("function"!=typeof s)return g(!1,"Form.List only accepts function as children."),null;var d=P(l.prefixName)||[],f=[].concat(t(d),t(P(i)));return e.exports.createElement(k.Provider,{value:n(n({},l),{},{prefixName:f})},e.exports.createElement(J,{name:[],shouldUpdate:function(e,t,n){return"internal"!==n.source&&e!==t},rules:o,validateTrigger:u,initialValue:a,isList:!0},(function(e,n){var r=e.value,i=void 0===r?[]:r,a=e.onChange,o=l.getFieldValue,u=function(){return o(f||[])||[]},d={add:function(e,n){var r=u();n>=0&&n<=r.length?(c.keys=[].concat(t(c.keys.slice(0,n)),[c.id],t(c.keys.slice(n))),a([].concat(t(r.slice(0,n)),[e],t(r.slice(n))))):(c.keys=[].concat(t(c.keys),[c.id]),a([].concat(t(r),[e]))),c.id+=1},remove:function(e){var t=u(),n=new Set(Array.isArray(e)?e:[e]);n.size<=0||(c.keys=c.keys.filter((function(e,t){return!n.has(t)})),a(t.filter((function(e,t){return!n.has(t)}))))},move:function(e,t){if(e!==t){var n=u();e<0||e>=n.length||t<0||t>=n.length||(c.keys=T(c.keys,e,t),a(T(n,e,t)))}}},h=i||[];return Array.isArray(h)||(h=[]),s(h.map((function(e,t){var n=c.keys[t];return void 0===n&&(c.keys[t]=c.id,n=c.keys[t],c.id+=1),{name:t,key:n,isListField:!0}})),d,n)})))},ee.useForm=Q}}}));
