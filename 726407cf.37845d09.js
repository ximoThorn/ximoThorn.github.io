(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{119:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(130),i=n(427),c=n(425),u=n(428);t.a=(e={})=>{const{title:t="\u57fa\u7840\u7528\u6cd5",dsc:n="",example:r,code:l=""}=e;return o.a.createElement(i.a,null,r,o.a.createElement(c.a,{orientation:"left"},t),o.a.createElement("div",null,n),o.a.createElement(u.a,{expandIcon:()=>null,ghost:!0},o.a.createElement(u.a.Panel,{header:"</>",key:"1"},o.a.createElement(a.a.pre,null,o.a.createElement(a.a.code,{className:"language-jsx"},l)))))}},121:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return A})),n.d(t,"b",(function(){return P})),n.d(t,"c",(function(){return J})),n.d(t,"d",(function(){return q})),n.d(t,"e",(function(){return X})),n.d(t,"f",(function(){return Y})),n.d(t,"g",(function(){return R}));var r=n(0),o=n(132);var a=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{},c="object"==typeof i&&i&&i.Object===Object&&i,u="object"==typeof self&&self&&self.Object===Object&&self,l=c||u||Function("return this")(),s=function(){return l.Date.now()},f=l.Symbol,d=Object.prototype,v=d.hasOwnProperty,p=d.toString,m=f?f.toStringTag:void 0;var b=function(e){var t=v.call(e,m),n=e[m];try{e[m]=void 0;var r=!0}catch(a){}var o=p.call(e);return r&&(t?e[m]=n:delete e[m]),o},y=Object.prototype.toString;var h=function(e){return y.call(e)},g=f?f.toStringTag:void 0;var j=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":g&&g in Object(e)?b(e):h(e)};var O=function(e){return null!=e&&"object"==typeof e};var k=function(e){return"symbol"==typeof e||O(e)&&"[object Symbol]"==j(e)},C=/^\s+|\s+$/g,x=/^[-+]0x[0-9a-f]+$/i,w=/^0b[01]+$/i,E=/^0o[0-7]+$/i,S=parseInt;var T=function(e){if("number"==typeof e)return e;if(k(e))return NaN;if(a(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=a(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(C,"");var n=w.test(e);return n||E.test(e)?S(e.slice(2),n?2:8):x.test(e)?NaN:+e},N=Math.max,M=Math.min;var I=function(e,t,n){var r,o,i,c,u,l,f=0,d=!1,v=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function m(t){var n=r,a=o;return r=o=void 0,f=t,c=e.apply(a,n)}function b(e){return f=e,u=setTimeout(h,t),d?m(e):c}function y(e){var n=e-l;return void 0===l||n>=t||n<0||v&&e-f>=i}function h(){var e=s();if(y(e))return g(e);u=setTimeout(h,function(e){var n=t-(e-l);return v?M(n,i-(e-f)):n}(e))}function g(e){return u=void 0,p&&r?m(e):(r=o=void 0,c)}function j(){var e=s(),n=y(e);if(r=arguments,o=this,l=e,n){if(void 0===u)return b(l);if(v)return clearTimeout(u),u=setTimeout(h,t),m(l)}return void 0===u&&(u=setTimeout(h,t)),c}return t=T(t)||0,a(n)&&(d=!!n.leading,i=(v="maxWait"in n)?N(T(n.maxWait)||0,t):i,p="trailing"in n?!!n.trailing:p),j.cancel=function(){void 0!==u&&clearTimeout(u),f=0,r=l=o=u=void 0},j.flush=function(){return void 0===u?c:g(s())},j},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=Object(r.useRef)();o.current=e;var a=Object(r.useMemo)((function(){return I((function(){return o.current.apply(o,arguments)}),t,n)}),[]);return{run:a,cancel:a.cancel}};var _=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return a(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),I(e,t,{leading:r,maxWait:t,trailing:o})},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=Object(r.useRef)();o.current=e;var a=Object(r.useMemo)((function(){return _((function(){return o.current.apply(o,arguments)}),t,n)}),[]);return{run:a,cancel:a.cancel}};function B(e){if(e)return"function"==typeof e?e():"current"in e?e.current:e}var A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"click",o=Object(r.useRef)();o.current=e,Object(r.useEffect)((function(){var e=function(e){var n=B(t);n&&!n.contains(e.target)&&o.current(e)};return document.addEventListener(n,e),function(){document.removeEventListener(n,e)}}),[t])};function D(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function $(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(u){o=!0,a=u}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}(e,t)||H(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function z(e){return function(e){if(Array.isArray(e))return L(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||H(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function H(e,t){if(e){if("string"==typeof e)return L(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?L(e,t):void 0}}function L(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var W,F,U,V=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,o;return t=e,(n=[{key:"$emit",value:function(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];var a=[].concat(r),i=a[0],c=a.slice(1);e.subscriptions[i]&&"function"==typeof e.subscriptions[i]&&(t=e.subscriptions)[i].apply(t,z(c))}},{key:"$on",value:function(t,n){Object(r.useEffect)((function(){return e.subscriptions[t]||(e.subscriptions[t]=n),function(){e.subscriptions={}}}),[])}},{key:"$once",value:function(e,t){var n=this;n.$on(e,(function r(){n.$off(e,r),t.apply(n,arguments)}))}},{key:"$off",value:function(t){e.subscriptions[t]&&(e.subscriptions[t]=void 0)}}])&&D(t.prototype,n),o&&D(t,o),e}();U={},(F="subscriptions")in(W=V)?Object.defineProperty(W,F,{value:U,enumerable:!0,configurable:!0,writable:!0}):W[F]=U;var J=function(){return new V},X=function(e,t){var n=Object(r.useRef)(t),a=$(Object(r.useState)((function(){var t=B(e)||{};return{width:t.clientWidth,height:t.clientHeight}})),2),i=a[0],c=a[1];return Object(r.useLayoutEffect)((function(){var t=B(e);if(!t)return function(){};var r=new o.a((function(e){var t,r=function(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=H(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return i=e.done,e},e:function(e){c=!0,a=e},f:function(){try{i||null==n.return||n.return()}finally{if(c)throw a}}}}(e);try{var o=function(){var e=t.value;c((function(){return{width:e.target.clientWidth,height:e.target.clientHeight}})),n.current&&n.current({width:e.target.clientWidth,height:e.target.clientHeight})};for(r.s();!(t=r.n()).done;)o()}catch(a){r.e(a)}finally{r.f()}}));return r.observe(t),function(){r.disconnect()}}),[e]),i},Y=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:50,o=arguments.length>3&&void 0!==arguments[3]&&arguments[3],a=Object(r.useRef)(),i=Object(r.useRef)();a.current=t,i.current=o;var c=Object(r.useRef)(!1);Object(r.useEffect)((function(){var t=B(e)||document;return t.addEventListener("scroll",(function(e){var t=e.target;t.scrollTop+t.clientHeight>=t.scrollHeight-n?c.current||(a.current&&a.current(e),i&&(c.current=!0)):c.current=!1})),function(){t&&t.removeEventListener("scroll",(function(){}))}}),[e])},q=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3,n=Object(r.useRef)(),o=Object(r.useRef)();return Object(r.useEffect)((function(){n.current=e})),Object(r.useEffect)((function(){if(null!=t)return o.current=setInterval((function(){n.current()}),t),function(){return o.current&&clearInterval(o.current)}}),[t]),{clearInterval:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){o.current&&clearInterval(o.current)}))}}}).call(this,n(29))},190:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=(r=n(191))&&r.__esModule?r:{default:r};t.default=o,e.exports=o},191:function(e,t,n){"use strict";var r=n(104),o=n(105);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(0)),i=r(n(192)),c=r(n(106)),u=function(e,t){return a.createElement(c.default,Object.assign({},e,{ref:t,icon:i.default}))};u.displayName="InfoCircleFilled";var l=a.forwardRef(u);t.default=l},192:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"info-circle",theme:"filled"}},193:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=(r=n(194))&&r.__esModule?r:{default:r};t.default=o,e.exports=o},194:function(e,t,n){"use strict";var r=n(104),o=n(105);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(0)),i=r(n(195)),c=r(n(106)),u=function(e,t){return a.createElement(c.default,Object.assign({},e,{ref:t,icon:i.default}))};u.displayName="CheckCircleFilled";var l=a.forwardRef(u);t.default=l},195:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"}}]},name:"check-circle",theme:"filled"}},196:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=(r=n(197))&&r.__esModule?r:{default:r};t.default=o,e.exports=o},197:function(e,t,n){"use strict";var r=n(104),o=n(105);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(0)),i=r(n(198)),c=r(n(106)),u=function(e,t){return a.createElement(c.default,Object.assign({},e,{ref:t,icon:i.default}))};u.displayName="ExclamationCircleFilled";var l=a.forwardRef(u);t.default=l},198:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"exclamation-circle",theme:"filled"}},414:function(e,t,n){"use strict";n.r(t),t.default="import React, { useRef, useState } from 'react'\nimport { message } from 'antd'\nimport { useScrollBottomCallback, useThrottle } from 'ihooks'\n\nconst IuseScrollBottomCallback = () => {\n  const targetDom = useRef()\n  const [list] = useState(() => Array(20).fill())\n\n  const { run: handler } = useThrottle((e) => {\n    message.success('\u54c7\u54c7\u54c7\u3001\u5230\u5e95\u90e8\u55bd')\n    console.log(e)\n  }, 500)\n\n  useScrollBottomCallback(targetDom, handler, undefined, true)\n\n  return (\n    <div ref={targetDom} style={{maxHeight: 300, overflowY: 'scroll'}}>\n      {\n        list.map((item, index) => {\n          return (\n            <p key={index}>\n              \u8fd9\u662f\u7b2c{index + 1}\u6761\u6570\u636e\n            </p>\n          )\n        })\n      }\n    </div>\n  )\n}\n\nexport default IuseScrollBottomCallback\n"},421:function(e,t,n){"use strict";n.d(t,"c",(function(){return Z})),n.d(t,"a",(function(){return ie}));var r=n(98),o=n.n(r),a=n(99),i=n.n(a),c=n(0),u=n.n(c),l=n(97),s=n.n(l),f=n(111),d=n(100),v=n(107),p=n(108),m=n(109),b=n(115),y=n(20),h=n.n(y),g=n(144),j=n(181),O=n(102),k=function(e){Object(m.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(v.a)(this,n),(e=t.apply(this,arguments)).closeTimer=null,e.close=function(t){t&&t.stopPropagation(),e.clearCloseTimer();var n=e.props.onClose;n&&n()},e.startCloseTimer=function(){e.props.duration&&(e.closeTimer=window.setTimeout((function(){e.close()}),1e3*e.props.duration))},e.clearCloseTimer=function(){e.closeTimer&&(clearTimeout(e.closeTimer),e.closeTimer=null)},e}return Object(p.a)(n,[{key:"componentDidMount",value:function(){this.startCloseTimer()}},{key:"componentDidUpdate",value:function(e){this.props.duration===e.duration&&this.props.updateMark===e.updateMark||this.restartCloseTimer()}},{key:"componentWillUnmount",value:function(){this.clearCloseTimer()}},{key:"restartCloseTimer",value:function(){this.clearCloseTimer(),this.startCloseTimer()}},{key:"render",value:function(){var e=this,t=this.props,n=t.prefixCls,r=t.className,o=t.closable,a=t.closeIcon,i=t.style,c=t.onClick,l=t.children,f=t.holder,d="".concat(n,"-notice"),v=Object.keys(this.props).reduce((function(t,n){return"data-"!==n.substr(0,5)&&"aria-"!==n.substr(0,5)&&"role"!==n||(t[n]=e.props[n]),t}),{}),p=u.a.createElement("div",Object.assign({className:s()(d,r,Object(O.a)({},"".concat(d,"-closable"),o)),style:i,onMouseEnter:this.clearCloseTimer,onMouseLeave:this.startCloseTimer,onClick:c},v),u.a.createElement("div",{className:"".concat(d,"-content")},l),o?u.a.createElement("a",{tabIndex:0,onClick:this.close,className:"".concat(d,"-close")},a||u.a.createElement("span",{className:"".concat(d,"-close-x")})):null);return f?h.a.createPortal(p,f):p}}]),n}(c.Component);k.defaultProps={onClose:function(){},duration:1.5};var C=n(129),x=n(103);function w(e){var t=c.useRef({}),n=c.useState([]),r=Object(x.a)(n,2),o=r[0],a=r[1];return[function(n){e.add(n,(function(e,n){var r=n.key;if(e&&!t.current[r]){var o=c.createElement(k,Object.assign({},n,{holder:e}));t.current[r]=o,a((function(e){return[].concat(Object(C.a)(e),[o])}))}}))},c.createElement(c.Fragment,null,o)]}var E=0,S=Date.now();function T(){var e=E;return E+=1,"rcNotification_".concat(S,"_").concat(e)}var N=function(e){Object(m.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(v.a)(this,n),(e=t.apply(this,arguments)).state={notices:[]},e.hookRefs=new Map,e.add=function(t,n){var r=t.key||T(),o=Object(d.a)(Object(d.a)({},t),{},{key:r}),a=e.props.maxCount;e.setState((function(e){var t=e.notices,i=t.map((function(e){return e.notice.key})).indexOf(r),c=t.concat();return-1!==i?c.splice(i,1,{notice:o,holderCallback:n}):(a&&t.length>=a&&(o.key=c[0].notice.key,o.updateMark=T(),c.shift()),c.push({notice:o,holderCallback:n})),{notices:c}}))},e.remove=function(t){e.setState((function(e){return{notices:e.notices.filter((function(e){return e.notice.key!==t}))}}))},e.noticePropsMap={},e}return Object(p.a)(n,[{key:"getTransitionName",value:function(){var e=this.props,t=e.prefixCls,n=e.animation,r=this.props.transitionName;return!r&&n&&(r="".concat(t,"-").concat(n)),r}},{key:"render",value:function(){var e=this,t=this.state.notices,n=this.props,r=n.prefixCls,o=n.className,a=n.closeIcon,i=n.style,c=[];return t.forEach((function(n,o){var i=n.notice,u=n.holderCallback,l=o===t.length-1?i.updateMark:void 0,s=i.key,f=Object(j.a)(e.remove.bind(e,s),i.onClose),v=Object(d.a)(Object(d.a)(Object(d.a)({prefixCls:r,closeIcon:a},i),i.props),{},{key:s,updateMark:l,onClose:f,onClick:i.onClick,children:i.content});c.push(s),e.noticePropsMap[s]={props:v,holderCallback:u}})),u.a.createElement("div",{className:s()(r,o),style:i},u.a.createElement(g.a,{keys:c,motionName:this.getTransitionName(),onVisibleChanged:function(t,n){var r=n.key;t||delete e.noticePropsMap[r]}},(function(t){var n=t.key,o=t.className,a=t.style,i=e.noticePropsMap[n],c=i.props,l=i.holderCallback;return l?u.a.createElement("div",{key:n,className:s()(o,"".concat(r,"-hook-holder")),style:Object(d.a)({},a),ref:function(t){void 0!==n&&(t?(e.hookRefs.set(n,t),l(t,c)):e.hookRefs.delete(n))}}):u.a.createElement(k,Object.assign({},c,{className:s()(o,null==c?void 0:c.className),style:Object(d.a)(Object(d.a)({},a),null==c?void 0:c.style)}))})))}}]),n}(c.Component);N.defaultProps={prefixCls:"rc-notification",animation:"fade",style:{top:65,left:"50%"}},N.newInstance=function(e,t){var n=e||{},r=n.getContainer,o=Object(f.a)(n,["getContainer"]),a=document.createElement("div");r?r().appendChild(a):document.body.appendChild(a);var i=!1;h.a.render(u.a.createElement(N,Object.assign({},o,{ref:function(e){i||(i=!0,t({notice:function(t){e.add(t)},removeNotice:function(t){e.remove(t)},component:e,destroy:function(){h.a.unmountComponentAtNode(a),a.parentNode&&a.parentNode.removeChild(a)},useNotification:function(){return w(e)}}))}})),a)};var M,I=N,P=n(166),_=n.n(P),R=n(196),B=n.n(R),A=n(165),D=n.n(A),$=n(193),z=n.n($),H=n(190),L=n.n(H),W=n(113),F=n.n(W),U=n(250);var V,J,X,Y=3,q=1,G="ant-message",K="move-up",Q=!1;function Z(){return q++}function ee(e,t){var n=e.prefixCls||G;M?t({prefixCls:n,instance:M}):I.newInstance({prefixCls:n,transitionName:K,style:{top:V},getContainer:J,maxCount:X},(function(e){M?t({prefixCls:n,instance:M}):(M=e,t({prefixCls:n,instance:e}))}))}var te={info:L.a,success:z.a,error:D.a,warning:B.a,loading:_.a};function ne(e,t){var n,r=void 0!==e.duration?e.duration:Y,o=te[e.type],a=s()("".concat(t,"-custom-content"),(n={},i()(n,"".concat(t,"-").concat(e.type),e.type),i()(n,"".concat(t,"-rtl"),!0===Q),n));return{key:e.key,duration:r,style:e.style||{},className:e.className,content:c.createElement("div",{className:a},e.icon||o&&c.createElement(o,null),c.createElement("span",null,e.content)),onClose:e.onClose}}var re,oe,ae={open:function(e){var t=e.key||q++,n=new Promise((function(n){var r=function(){return"function"==typeof e.onClose&&e.onClose(),n(!0)};ee(e,(function(n){var a=n.prefixCls;n.instance.notice(ne(o()(o()({},e),{key:t,onClose:r}),a))}))})),r=function(){M&&M.removeNotice(t)};return r.then=function(e,t){return n.then(e,t)},r.promise=n,r},config:function(e){void 0!==e.top&&(V=e.top,M=null),void 0!==e.duration&&(Y=e.duration),void 0!==e.prefixCls&&(G=e.prefixCls),void 0!==e.getContainer&&(J=e.getContainer),void 0!==e.transitionName&&(K=e.transitionName,M=null),void 0!==e.maxCount&&(X=e.maxCount,M=null),void 0!==e.rtl&&(Q=e.rtl)},destroy:function(e){if(M)if(e){(0,M.removeNotice)(e)}else{var t=M.destroy;t(),M=null}}};function ie(e,t){e[t]=function(n,r,a){return function(e){return"[object Object]"===Object.prototype.toString.call(e)&&!!e.content}(n)?e.open(o()(o()({},n),{type:t})):("function"==typeof r&&(a=r,r=void 0),e.open({content:n,duration:r,type:t,onClose:a}))}}["success","info","warning","error","loading"].forEach((function(e){return ie(ae,e)})),ae.warn=ae.warning,ae.useMessage=(re=ee,oe=ne,function(){var e,t=null,n=w({add:function(e,n){null==t||t.component.add(e,n)}}),r=F()(n,2),a=r[0],i=r[1],u=c.useRef({});return u.current.open=function(n){var r=n.prefixCls,i=e("message",r),c=n.key||Z(),u=new Promise((function(e){var r=function(){return"function"==typeof n.onClose&&n.onClose(),e(!0)};re(o()(o()({},n),{prefixCls:i}),(function(e){var i=e.prefixCls,u=e.instance;t=u,a(oe(o()(o()({},n),{key:c,onClose:r}),i))}))})),l=function(){t&&t.removeNotice(c)};return l.then=function(e,t){return u.then(e,t)},l.promise=u,l},["success","info","warning","error","loading"].forEach((function(e){return ie(u.current,e)})),[u.current,c.createElement(U.a,{key:"holder"},(function(t){return e=t.getPrefixCls,i}))]});t.b=ae},88:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return m})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return h})),n.d(t,"default",(function(){return j}));var r=n(2),o=n(6),a=n(0),i=n.n(a),c=n(112),u=n(119),l=n(421),s=n(121);var f=()=>{const e=Object(a.useRef)(),[t]=Object(a.useState)((()=>Array(20).fill())),{run:n}=Object(s.g)((e=>{l.b.success("\u54c7\u54c7\u54c7\u3001\u5230\u5e95\u90e8\u55bd"),console.log(e)}),500);return Object(s.f)(e,n,void 0,!0),i.a.createElement("div",{ref:e,style:{maxHeight:300,overflowY:"scroll"}},t.map(((e,t)=>i.a.createElement("p",{key:t},"\u8fd9\u662f\u7b2c",t+1,"\u6761\u6570\u636e"))))},d=n(426);const v=[{name:"target",dsc:"DOM \u8282\u70b9\u6216\u8005 Refs",type:"",default:"",key:"1"},{name:"callback",dsc:"\u56de\u8c03\u51fd\u6570",type:"function",default:"function (res) {}",key:"2"},{name:"distance",dsc:"\u8ddd\u79bb\u5e95\u90e8\u591a\u5c11px\u65f6\u5f00\u59cb\u89e6\u53d1\u56de\u8c03",type:"number",default:"50",key:"3"},{name:"once",dsc:"\u5728\u8ddd\u79bb\u5e95\u90e8\u4f4e\u4e8edistance\u671f\u95f4\u5185\uff0c\u662f\u5426\u53ea\u6267\u884c\u4e00\u6b21\u56de\u8c03",type:"boolean",default:"false",key:"4"}],p=[{title:"\u53c2\u6570",key:"name",dataIndex:"name"},{title:"\u8bf4\u660e",key:"dsc",dataIndex:"dsc"},{title:"\u7c7b\u578b",key:"type",dataIndex:"type"},{title:"\u9ed8\u8ba4",key:"default",dataIndex:"default"}];var m={id:"useScrollBottomCallback",title:"useScrollBottomCallback"},b={unversionedId:"useScrollBottomCallback",id:"useScrollBottomCallback",isDocsHomePage:!1,title:"useScrollBottomCallback",description:"\u76d1\u542c\u67d0\u4e2adom\u8282\u70b9\u6eda\u52a8\u5230\u5e95\u90e8\u7684hook",source:"@site/docs/useScrollBottomCallback.mdx",slug:"/useScrollBottomCallback",permalink:"/docs/useScrollBottomCallback",editUrl:"https://github.com/ximoThorn/ihooks/packages/website/docs/useScrollBottomCallback.mdx",version:"current",sidebar:"someSidebar",previous:{title:"useObserverResize",permalink:"/docs/useObserverResize"},next:{title:"useEventEmitter",permalink:"/docs/useEventEmitter"}},y=n(414),h=[{value:"\u4ee3\u7801\u6f14\u793a",id:"\u4ee3\u7801\u6f14\u793a",children:[{value:"\u57fa\u7840\u7528\u6cd5",id:"\u57fa\u7840\u7528\u6cd5",children:[]},{value:"Params",id:"params",children:[]}]}],g={rightToc:h};function j(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},g,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u76d1\u542c\u67d0\u4e2adom\u8282\u70b9\u6eda\u52a8\u5230\u5e95\u90e8\u7684hook"),Object(c.b)("h2",{id:"\u4ee3\u7801\u6f14\u793a"},"\u4ee3\u7801\u6f14\u793a"),Object(c.b)("h3",{id:"\u57fa\u7840\u7528\u6cd5"},"\u57fa\u7840\u7528\u6cd5"),Object(c.b)(u.a,{dsc:"\u4e00\u6bb5\u8ddd\u79bb\u7684\u6eda\u52a8\u662f\u8fde\u7eed\u6027\u7684\uff0c\u56de\u8c03\u51fd\u6570\u53ef\u80fd\u9700\u8981\u4e0euseThrottle\u7ed3\u5408\u4e00\u8d77\u4f7f\u7528",example:Object(c.b)(f,{mdxType:"IuseScrollBottomCallback"}),code:y.default,mdxType:"FrameWrap"}),Object(c.b)("h3",{id:"params"},"Params"),Object(c.b)(d.a,{dataSource:v,columns:p,pagination:!1,mdxType:"Table"}))}j.isMDXComponent=!0}}]);