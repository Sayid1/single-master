"format amd";define("header",["react","react-dom"],function(e,t){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=12)}([function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Scoped=void 0;var r=s(n(0)),o=s(n(1)),i=s(n(8)),a=n(3);function s(e){return e&&e.__esModule?e:{default:e}}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m=!!o.default.createPortal,y=function(e){function t(e){var n;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),d(f(f(n=function(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?f(e):t}(this,l(t).call(this,e)))),"addKremlingAttributeToChildren",function(e){return r.default.Children.map(e,function(e){if(r.default.isValidElement(e)){if(e.type===r.default.Fragment&&r.default.Fragment){var t=n.addKremlingAttributeToChildren(e.props.children);return r.default.cloneElement(e,{},t)}return r.default.cloneElement(e,d({},n.state.kremlingAttr,n.state.kremlingAttrValue))}return e})}),d(f(f(n)),"doneWithCss",function(){n.state.styleRef&&0==--n.state.styleRef.kremlings&&(delete a.styleTags[n.state.rawCss],n.state.styleRef.parentNode.removeChild(n.state.styleRef))}),n.state={},!e.css&&!e.postcss)throw Error("Kremling's <Scoped /> component requires either the 'css' or 'postcss' props.");if(e.css&&e.postcss)throw Error("Kremling's <Scoped /> component requires either the 'css' or 'postcss' props. Cannot use both.");if(e.postcss&&("string"!=typeof e.postcss.styles||!e.postcss.id))throw Error("Kremling's <Scoped /> component 'postcss' prop requires an object containing 'styles' and 'id' properties. Try using the kremling-loader.");return n.state=n.newCssState(e),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,r.default.Component),function(e,t,n){t&&c(e.prototype,t),n&&c(e,n)}(t,[{key:"render",value:function(){if(void 0===this.props.children||null===this.props.children||!1===this.props.children||!0===this.props.children)return null;var e=this.addKremlingAttributeToChildren(this.props.children);if(m)return e;if(e.length>1)throw new Error("kremling's <Scoped /> component requires exactly one child element unless you are using react@>=16");return 1===e.length?e[0]:null}},{key:"componentDidUpdate",value:function(e){var t=e.postcss||e.css,n=this.props.postcss||this.props.css;t===n&&t.id===n.id&&t.styles===n.styles&&t.namespace===n.namespace||(this.doneWithCss(),this.setState(this.newCssState(this.props)))}},{key:"componentWillUnmount",value:function(){this.doneWithCss()}},{key:"newCssState",value:function(e){var n,r,o,i=e.postcss||e.css,s=Boolean(i&&i.id),u=(s?i.namespace:e.namespace)||t.defaultNamespace,c=s?i.styles:i;if(!s){if("string"!=typeof i)return;if(i.indexOf("&")<0&&i.trim().length>0){var l=i.substring(0,e.css.indexOf("{")).trim();console.warn("Kremling's <Scoped css=\"...\"> css prop should have the '&' character in it to scope the css classes: ".concat(l))}}var p=a.styleTags[c];if(p)n=p,p.kremlings++,r=n.kremlingAttr,o=n.kremlingValue;else{r=u,o=s?i.id:(0,a.incrementCounter)();var f="[".concat(r,'="').concat(o,'"]'),d=s?c:(0,a.transformCss)(c,f),m=document.createElement("style");m.setAttribute("type","text/css"),m.textContent=d,m.kremlings=1,m.kremlingAttr=r,m.kremlingValue=o,document.head.appendChild(m),a.styleTags[c]=m,n=m}return{isPostCss:s,rawCss:c,styleRef:n,kremlingAttr:r,kremlingAttrValue:o}}}]),t}();t.Scoped=y,d(y,"propTypes",{css:i.default.string,postcss:i.default.object,namespace:i.default.string}),d(y,"defaultNamespace","kremling")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.resetState=function(){r=0,t.styleTags=o={}},t.transformCss=function(e,t){return e.replace(/& ([^{}])+{/g,function(e,n){return e.split(",").map(function(e){if(-1===(e=e.trim()).indexOf("&"))return e.replace("{","").trim();e=/[^&](.+)[^{]+/g.exec(e)[0].trim();var n=!1;return/^([.#]\w+)/.test(e)||(n=!0),n?"".concat(t," ").concat(e,", ").concat(e).concat(t):"".concat(t," ").concat(e,", ").concat(t).concat(e)}).join(", ")+" {"})},t.styleTags=t.incrementCounter=void 0;var r=0;t.incrementCounter=function(){return r++};var o={};t.styleTags=o},function(e,t,n){var r,o,i;o=[t],void 0===(i="function"==typeof(r=function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){if("object"!==(void 0===t?"undefined":r(t)))throw new Error("single-spa-react requires a configuration object");var o=n({},a,t);if(!o.React)throw new Error("single-spa-react must be passed opts.React");if(!o.ReactDOM)throw new Error("single-spa-react must be passed opts.ReactDOM");if(!o.rootComponent&&!o.loadRootComponent)throw new Error("single-spa-react must be passed opts.rootComponent or opts.loadRootComponent");!i&&o.React.createContext&&(e.SingleSpaContext=i=o.React.createContext());var u={bootstrap:function(e,t){return e.rootComponent?Promise.resolve():e.loadRootComponent().then(function(t){e.rootComponent=t})}.bind(null,o),mount:function(e,t){return new Promise(function(n,r){e.rootComponent.prototype.componentDidCatch||e.suppressComponentDidCatchWarning||!function(e){if(!(e&&"string"==typeof e.version&&e.version.indexOf(".")>=0))return!1;var t=e.version.slice(0,e.version.indexOf("."));try{return Number(t)>=16}catch(e){return!1}}(e.React)||console.warn("single-spa-react: "+(t.name||t.appName||t.childAppName)+"'s rootComponent should implement componentDidCatch to avoid accidentally unmounting the entire single-spa application.");var o=function(e,t){return(t=t&&t.customProps?t.customProps:t).domElement?function(){return t.domElement}:t.domElementGetter?t.domElementGetter:e.domElementGetter}(e,t);if(!o)throw new Error("Cannot mount react application '"+(t.appName||t.name)+"' without a domElementGetter provided in either opts or props");var a=e.React.createElement(e.rootComponent,t),u=i?e.React.createElement(i.Provider,{value:t},a):a,c=function(e){var t=e();if(!t)throw new Error("single-spa-react: domElementGetter function did not return a valid dom element");return t}(o);s({elementToRender:u,domElement:c,whenFinished:function(){n(this)},opts:e}),e.domElement=c})}.bind(null,o),unmount:function(e,t){return Promise.resolve().then(function(){e.ReactDOM.unmountComponentAtNode(e.domElement)})}.bind(null,o)};return o.parcelCanUpdate&&(u.update=function(e,t){return new Promise(function(n,r){var o=e.React.createElement(e.rootComponent,t),a=i?e.React.createElement(i.Provider,{value:t},o):o;s({elementToRender:a,domElement:e.domElement,whenFinished:function(){n(this)},opts:e})})}.bind(null,o)),u};var t,n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i=e.SingleSpaContext=null,a=(o(t={React:null,ReactDOM:null,rootComponent:null,loadRootComponent:null,domElementGetter:null,suppressComponentDidCatchWarning:!1},"domElementGetter",null),o(t,"parcelCanUpdate",!0),t);function s(e){var t=e.opts,n=e.elementToRender,r=e.domElement,o=e.whenFinished;return"createRoot"===t.renderType?t.ReactDOM.createRoot(r).render(n,o):"hydrate"===t.renderType?t.ReactDOM.hydrate(n,r,o):t.ReactDOM.render(n,r,o)}})?r.apply(t,o):r)||(e.exports=i)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"always",{enumerable:!0,get:function(){return r.always}}),Object.defineProperty(t,"a",{enumerable:!0,get:function(){return r.a}}),Object.defineProperty(t,"maybe",{enumerable:!0,get:function(){return r.maybe}}),Object.defineProperty(t,"m",{enumerable:!0,get:function(){return r.m}}),Object.defineProperty(t,"toggle",{enumerable:!0,get:function(){return r.toggle}}),Object.defineProperty(t,"t",{enumerable:!0,get:function(){return r.t}}),Object.defineProperty(t,"css",{enumerable:!0,get:function(){return r.css}}),Object.defineProperty(t,"c",{enumerable:!0,get:function(){return r.c}}),Object.defineProperty(t,"Scoped",{enumerable:!0,get:function(){return o.Scoped}}),Object.defineProperty(t,"useCss",{enumerable:!0,get:function(){return i.useCss}});var r=n(7),o=n(2),i=n(11)},function(e,t){e.exports={styles:'[app-dashboard-ui="1"] .header,[app-dashboard-ui="1"].header { display: flex; justify-content: space-around; }',id:"1",namespace:"app-dashboard-ui"}},function(e,t,n){"use strict";function r(){}function o(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return s(this,t.join(" "))}function i(e,t){if("string"!=typeof e)throw new Error("kremling maybe() must be called with a string className and a boolean expression");return s(this,t?e:"")}function a(e,t,n){if("string"!=typeof e||"string"!=typeof t)throw new Error("kremling toggle() must be called with 2 string classNames and a boolean expression");return s(this,n?e:t)}function s(e,t){var n=e instanceof String?e.toString():"",s=new String([n,t].join(" ").trim());return s.css=r.bind(s),s.c=s.css,s.always=o.bind(s),s.a=s.always,s.maybe=i.bind(s),s.m=s.maybe,s.toggle=a.bind(s),s.t=s.toggle,s}Object.defineProperty(t,"__esModule",{value:!0}),t.c=t.css=r,t.a=t.always=o,t.m=t.maybe=i,t.t=t.toggle=a},function(e,t,n){e.exports=n(9)()},function(e,t,n){"use strict";var r=n(10);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,i,a){if(a!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useCss=function(e,t){var n="object"===a(e);if(n&&(!e.id||"string"!=typeof e.styles))throw Error('Kremling\'s "useCss" hook requires "id" and "styles" properties when using the kremling-loader');var u=t||n&&e.namespace||o.Scoped.defaultNamespace,c=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}((0,r.useState)(function(){return s(null,n,e,u)}),2),l=c[0],p=c[1];return(0,r.useLayoutEffect)(function(){var t=s(l,n,e,u);return p(t),function(){0==--l.kremlings&&(document.head.removeChild(l),delete i.styleTags[e])}},[e,u,l,p,n]),function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},l.kremlingAttr,String(l.kremlingValue).toString())};var r=n(0),o=n(2),i=n(3);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t,n,r){var o=t?r:"data-".concat(r),a=t?n.id:(0,i.incrementCounter)(),s=t?i.styleTags[n.styles]:i.styleTags[n];if(s)s!==e&&s.kremlings++;else{var u="[".concat(o,"='").concat(a,"']"),c=t?n.styles:n,l=t?n.styles:(0,i.transformCss)(n,u);(s=document.createElement("style")).type="text/css",s.textContent=l,s.kremlings=1,s.kremlingAttr=o,s.kremlingValue=a,document.head.appendChild(s),i.styleTags[c]=s}return s}},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),i=n(1),a=n.n(i),s=n(4),u=n.n(s),c=n(5),l=n(6),p=n.n(l);n.d(t,"bootstrap",function(){return d}),n.d(t,"mount",function(){return m}),n.d(t,"unmount",function(){return y}),n.d(t,"unload",function(){return b});var f=u()({React:o.a,ReactDOM:a.a,rootComponent:function(){return o.a.createElement(c.Scoped,{postcss:p.a},o.a.createElement("header",{className:"header"},o.a.createElement("span",null,"丙晟云商"),o.a.createElement("ul",null,o.a.createElement("li",null,"产品中心"),o.a.createElement("li",null,"合作伙伴"),o.a.createElement("li",null,"客户案列"),o.a.createElement("li",null,"帮助中心")),o.a.createElement("ul",null,o.a.createElement("li",null,"控制台"),o.a.createElement("li",null,"iSayid"))))},domElementGetter:function(){var e=document.querySelector("#header");return e||((e=document.createElement("div")).id="header",document.body.appendChild(e)),e}}),d=[f.bootstrap],m=[f.mount],y=[f.unmount],b=[f.unload]}])});
//# sourceMappingURL=header.js.map