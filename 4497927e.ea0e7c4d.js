(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{105:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return m}));var r=t(0),i=t.n(r);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var b=i.a.createContext({}),f=function(e){var n=i.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=f(e.components);return i.a.createElement(b.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},p=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),s=f(t),p=r,m=s["".concat(a,".").concat(p)]||s[p]||u[p]||c;return t?i.a.createElement(m,o(o({ref:n},b),{},{components:t})):i.a.createElement(m,o({ref:n},b))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,a=new Array(c);a[0]=p;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,a[1]=o;for(var b=2;b<c;b++)a[b]=t[b];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},71:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return o})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return f}));var r=t(2),i=t(6),c=(t(0),t(105)),a={slug:"react fiber",title:"react fiber",author_url:"https://github.com/ximoThorn",author_image_url:"https://avatars.githubusercontent.com/u/32925631?s=60&v=4",tags:["react","javascript"]},o={permalink:"/blog/react fiber",source:"@site/blog/2021-01-30-react-fiber.md",description:"react fiber",date:"2021-01-30T00:00:00.000Z",tags:[{label:"react",permalink:"/blog/tags/react"},{label:"javascript",permalink:"/blog/tags/javascript"}],title:"react fiber",readingTime:1.67,truncated:!1,prevItem:{title:"\u524d\u7aef\u76d1\u63a7",permalink:"/blog/\u524d\u7aef\u76d1\u63a7"},nextItem:{title:"\u6d4f\u89c8\u5668\u7684\u6e32\u67d3\u673a\u5236",permalink:"/blog/\u6d4f\u89c8\u5668\u7684\u6e32\u67d3\u673a\u5236"}},l=[{value:"\u5e27\u7387",id:"\u5e27\u7387",children:[]},{value:"\u5355\u94fe\u8868",id:"\u5355\u94fe\u8868",children:[]},{value:"\u91cd\u56defiber",id:"\u91cd\u56defiber",children:[{value:"\u6267\u884c\u5355\u5143fiber",id:"\u6267\u884c\u5355\u5143fiber",children:[]},{value:"\u6570\u636e\u673a\u6784fiber",id:"\u6570\u636e\u673a\u6784fiber",children:[]}]},{value:"react\u7684\u6784\u5efa\u8fc7\u7a0b",id:"react\u7684\u6784\u5efa\u8fc7\u7a0b",children:[]},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",children:[]}],b={rightToc:l};function f(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"react-fiber"},"react fiber"),Object(c.b)("p",null,"\u5728v15\u548c\u4e4b\u524d\u7684\u7248\u672c\u4e2d\uff0c\u5728react\u4efb\u610f\u4e00\u4e2a\u5730\u65b9\u6267\u884csetState\u540e\uff0creact\u4f1a\u5bf9\u6574\u4e2a\u9875\u9762\u521b\u5efa\u865a\u62dfdom\uff0c\u5e76\u5bf9\u524d\u540edom\u8fdb\u884cdiff\u5bf9\u6bd4\uff0c\u7136\u540e\u8fdb\u884c\u6e32\u67d3\uff0c\u8fd9\u4e2a\u8fc7\u7a0b\u662f\u201c\u4e00\u6c14\u5475\u6210\u201d\u7684\uff0c\u6240\u4ee5\u5b83\u5360\u636e\u4e86\u4e3b\u7ebf\u7a0b\u7684\u5927\u91cf\u65f6\u95f4\uff0c\u8fd9\u4f1a\u4f7f\u9875\u9762\u54cd\u5e94\u5ea6\u53d8\u5dee\uff0c\u4e5f\u5c31\u5bfc\u81f4\u4e86react\u5728\u6e32\u67d3\u52a8\u753b\uff0c\u6216\u8005\u624b\u52bf\u64cd\u4f5c\u65f6\u4f1a\u51fa\u73b0\u5361\u987f\u73b0\u8c61\uff0c\u56e0\u6b64react\u56e2\u961f\u5728react\u7684v16\u7248\u672c\u540e\u91c7\u7528\u4e86fiber\u67b6\u6784\u3002"),Object(c.b)("p",null,"\u719f\u6089fiber\u4e4b\u524d\u9700\u8981\u5148\u4e86\u89e3\u51e0\u4e2a\u57fa\u7840\u77e5\u8bc6\uff1a",Object(c.b)("strong",{parentName:"p"},"window.requestIdleCallback"),"\uff0c",Object(c.b)("strong",{parentName:"p"},"\u5355\u94fe\u8868"),"\n",Object(c.b)("img",Object(r.a)({parentName:"p"},{src:"https://user-images.githubusercontent.com/32925631/90331506-89c43c80-dfe7-11ea-9f1a-1934ed6a013f.png",alt:"image"}))),Object(c.b)("h2",{id:"\u5e27\u7387"},"\u5e27\u7387"),Object(c.b)("p",null,"\u6211\u4eec\u77e5\u9053\u5c4f\u5e55\u6d4f\u89c8\u5668\u5237\u65b0\u738760\u5e27/s\uff0c\u5e73\u574716.6ms/\u5e27\uff0c\u5728\u4e00\u5e27\u4e2d\u6d4f\u89c8\u5668\u505a\u4e86\u5f88\u591a\u4e8b\u60c5\uff1a"),Object(c.b)("p",null,"\u5728\u6d4f\u89c8\u5668\u6267\u884c\u4e00\u5e27\u7684\u8fc7\u7a0b\u4e2d\uff1a"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Input event handlers\uff1a\u5408\u6210\u7ebf\u7a0b compositor thread \u628a input \u6570\u636e\u4f20\u7ed9\u4e3b\u7ebf\u7a0b\uff0c \u5904\u7406\u4e8b\u4ef6\u56de\u8c03\u3002")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"javascript: \u5305\u6269\u5b9a\u65f6\u5668\u3001\u4e8b\u4ef6\uff08scroll\uff0cresize\u7b49\uff09\u3001requestAnimationFrame\u3001\u91cd\u6392\uff08layout\uff09\u3001\u91cd\u7ed8\uff08paint\uff09")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"\u5982\u679c\u5728\u4e00\u5e27\u5185\uff0c\u6267\u884c\u5b8c\u4e0a\u8ff0\u6240\u6709\u4efb\u52a1\u540e\uff0c\u8fd8\u6709\u5269\u4f59\u65f6\u95f4\u7684\u8bdd\uff0c\u90a3\u5c31\u4f1a\u6267\u884crequestIdleCallback\u56de\u8c03\uff0c"))),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"window.requestIdleCallback(callback, options)\n// callback(deadline): \u4e00\u4e2afunction \u7528\u6237\u8981\u6267\u884c\u7684\u56de\u8c03\u4efb\u52a1, \u5e76\u4f20\u5165\u4e00\u4e2a\u53c2\u6570deadline\n  //  deadline: {\n    //  timeRemaining: 0ms, // \u5f53\u524d\u5e27\u8fd8\u5269\u4f59\u591a\u5c11\u65f6\u95f4\n    //  didTimeout: false, // \u662f\u5426\u5df2\u8d85\u65f6\n  //  }\n// options: // \u4e00\u4e2a\u5bf9\u8c61\uff0c\u53ef\u4ee5\u8bbe\u7f6etimeout\u65f6\u95f4\uff1a\u8d85\u8fc7\u8fd9\u4e2a\u65f6\u95f4\u540e\uff0c\u4e0d\u7ba1\u5f53\u524d\u662f\u5426\u6709\u5269\u4f59\u65f6\u95f4\u5fc5\u987b\u6267\u884c\u6b64\u56de\u8c03\n\n")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u56e0\u4e3arequestIdleCallback\u517c\u5bb9\u6027\u5dee\uff0c\u6240\u4ee5react\u5185\u90e8\u5e76\u4e0d\u662f\u76f4\u63a5\u7528\u8fd9\u4e2aapi\uff0c\u800c\u662f\u81ea\u5df1\u5b9e\u73b0\u4e86\u8fd9\u4e2aapi\uff0c\u7406\u8bba\u6548\u679c\u662f\u4e00\u6837\u7684")),Object(c.b)("h2",{id:"\u5355\u94fe\u8868"},"\u5355\u94fe\u8868"),Object(c.b)("p",null,"\u5728fiber\u4e2d\u6709\u5927\u91cf\u7684\u5355\u94fe\u8868\uff0c\u7528\u4e00\u5f20\u56fe\u8868\u793a\uff1a"),Object(c.b)("p",null,Object(c.b)("img",Object(r.a)({parentName:"p"},{src:"https://user-images.githubusercontent.com/32925631/90331514-a19bc080-dfe7-11ea-9c2e-c30f3689455b.png",alt:"image"}))),Object(c.b)("h2",{id:"\u91cd\u56defiber"},"\u91cd\u56defiber"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"1.\u901a\u8fc7fiber\u5408\u7406\u5206\u914dcpu\u8d44\u6e90\uff0c\u63d0\u9ad8\u7528\u6237\u76f8\u5e94\u901f\u5ea6\uff1b2.\u901a\u8fc7fiber\u53ef\u4ee5\u4f7freconciliation\uff08\u4e00\u79cddiff\u7b97\u6cd5\uff09\u53ef\u4ee5\u4e2d\u65ad\uff0c\u4ea4\u51fa\u4e3b\u7ebf\u7a0b\uff0c\u53bb\u6267\u884c\u66f4\u91cd\u8981\u7684\u4e8b\u60c5\uff08\u6e32\u67d3\uff0c\u4ea4\u4e92\u7b49\uff09")),Object(c.b)("p",null,"\u90a3\u4e48fiber\u662f\u4ec0\u4e48\uff1afiber\u662f\u4e00\u4e2a\u6267\u884c\u5355\u5143\uff0c\u4e5f\u662f\u4e00\u79cd\u6570\u636e\u7ed3\u6784"),Object(c.b)("h3",{id:"\u6267\u884c\u5355\u5143fiber"},"\u6267\u884c\u5355\u5143fiber"),Object(c.b)("p",null,"\u6bcf\u6b21\u6d4f\u89c8\u5668\u6267\u884c\u5b8c\u4e00\u4e2a\u6267\u884c\u5355\u5143\uff0creact\u5c31\u4f1a\u68c0\u67e5\u65f6\u5019\u8fd8\u6709\u5269\u4f59\u65f6\u95f4\uff08\u6bcf\u4e00\u5e27\u90fd\u4f1a\u53bb\u68c0\u67e5\uff09\uff0c\u5982\u679c\u6ca1\u6709\uff0creact\u5c31\u653e\u6743\u7ed9\u6d4f\u89c8\u5668"),Object(c.b)("p",null,Object(c.b)("img",Object(r.a)({parentName:"p"},{src:"https://user-images.githubusercontent.com/32925631/90331527-bf692580-dfe7-11ea-8719-2d1066ba8be0.png",alt:"image"}))),Object(c.b)("h3",{id:"\u6570\u636e\u673a\u6784fiber"},"\u6570\u636e\u673a\u6784fiber"),Object(c.b)("p",null,"react\u4f7f\u7528\u94fe\u8868\uff0c\u5c06\u6bcf\u4e00\u4e2aVirtualDom\u8282\u70b9\u53ca\u5176\u5185\u90e8\u6240\u6709\u5b50\uff08\u4e0d\u662f\u5b59\u5b50\uff09\u8282\u70b9\u8868\u793a\u4e3a\u4e00\u4e2afiber\u3002\u5982\u56fe\uff1a\n",Object(c.b)("img",Object(r.a)({parentName:"p"},{src:"https://user-images.githubusercontent.com/32925631/90331536-d14ac880-dfe7-11ea-9a24-f39fd629fd6f.png",alt:"image"}))),Object(c.b)("p",null,"\u5176\u4e2dA1>B1+B2\u5c31\u662f\u4e00\u4e2afiber\uff0cB1>C1+C2\u662f\u4e00\u4e2afiber"),Object(c.b)("p",null,"\u6bcf\u4e2afiber\u5176\u5b9e\u5c31\u662f\u4e00\u4e2a\u5bf9\u8c61\uff0c\u9664\u4e86\u4e00\u4e9b\u5c5e\u6027\u8fd8\u5305\u62ec\u4e09\u4e2a\u6307\u9488"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"let fiber = {\n  tag: '', //\u5f53\u524d\u8282\u70b9\u7c7b\u578b\uff0c\u6587\u672c\u8fd8\u662fdom\n  key: 'ROOT', // \u552f\u4e00\u6807\u8bc6\n  type: '', // \u5f53\u524d\u5143\u7d20\u7c7b\u578b\uff0cspan\u3001div\n  stateNode: '', // fiber\u5bf9\u5e94\u7684node\u8282\u70b9\n  flag: '', // placement\u7b49\uff0c\u526f\u4f5c\u7528\u7c7b\u578b\uff0c\u4f8b\u5982\uff1a \u589e\u5220\u6539\u67e5\n  firstEffect: null, \n  lastEffect: null\n  // ...\n  // \u4e09\u4e2a\u6307\u9488\n  child: {}, // \u6307\u5411\u5f53\u524d\u7b2c\u4e00\u4e2a\u5b50fiber\n  sibling: {}, // \u6307\u5411\u5f53\u524d\u7d27\u6328\u7740\u7684\u5144\u5f1ffiber\n  return: {}, // \u6307\u5411\u5f53\u524d\u7684\u7236fiber\n}\n")),Object(c.b)("h2",{id:"react\u7684\u6784\u5efa\u8fc7\u7a0b"},"react\u7684\u6784\u5efa\u8fc7\u7a0b"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"  // \u6d4f\u89c8\u5668\u7a7a\u95f2\u65f6\u95f4\u6267\u884c\n  requestIdleCallback(workLoop) //react\u4e2d\u662f\u901a\u8fc7requestAnimationFrame\u548cMessageChannel\u5b9e\u73b0\u7684\n\n  let rootFiber = {\n    ...\n  }\n\n  let workInProgress = rootFiber //\u5f53\u524d\u6b63\u5728\u6267\u884c\u7684\u5de5\u4f5c\u5355\u5143\uff08fiber\uff09\n  function workLoop(deadLine) { // deadLine\u6bcf\u5e27\u5269\u4f59\u65f6\u95f4\u5bf9\u8c61\n    while (workInProgress && deadLine.timeRemaining() > 1) {\n      workInProgress = performUnitOfWork(workInProgress) // \u6bcf\u4e2a\u4efb\u52a1\u5355\u5143\u6267\u884c\u5b8c\u6bd5\u540e\u8fd4\u56de\u4e0b\u4e00\u4e2a\u8981\u6267\u884c\u7684\u4efb\u52a1\u5355\u5143\n    }\n    // \u63d0\u4ea4\u9636\u6bb5\n    commitRoot(rootFiber)\n  }\n\n\n  function performUnitOfWork (workInProgress) {\n    beginWork(workInProgress)  // \u521b\u5efa\u5b50fiber\u6811\n\n    if (workInProgress.child) {\n      return workInProgress.child // \u4f18\u5148\u6784\u5efachild\n    }\n\n    while (workInProgress) {\n      completeUnitWork(workInProgress) // \u5f53\u524d\u5de5\u4f5c\u5355\u5143\u5b8c\u6210\u6784\u5efa\uff0c\u5e76\u751f\u6210dom\n      if (workInProgress.sibling) {\n        return workInProgress.sibling // \u6ca1\u6709child\uff0c\u6784\u5efasibling\n      }\n\n      workInProgress = workInProgress.return\n      // \u6700\u540e\u6ca1\u6709\u7236\u5143\u7d20\uff08root\uff09\u9000\u51fa\u5faa\u73af\n    }\n  }\n\n  // \u5f00\u59cb\u521b\u5efa\u5b50Fiber\u6811\ud83c\udf32\n  function beginWork (workInProgress) {\n    let nextChildren = workInProgress.props.children\n    return reconcileChildren(workInProgress, nextChildren)\n  }\n\n\n  function reconcileChildren (returnFiber, nextChildren) {\n    // \u6839\u636eVDom\u751f\u6210fiber\u7684\u540c\u65f6\u5e76\u6784\u5efafiber\u94fe(\u5c31\u662f\u7ed9fiber\u7684child\uff0csibline, return\u5c5e\u6027\u8d4b\u503c)\n    for (let i = 0; i < nextChildren.length; i++) {\n      let newFiber = createFiber(nextChildren[i])\n      // ...\n    }\n  }\n\n  // \u521b\u5efafiber\n  function createFiber(element) {\n    return {\n      tag: TAG_HOST,\n      type: element.type,\n      props: element.props,\n      key: element.key,\n      // ...\n    }\n  }\n\n\n  function completeUnitWork (workInProgress) {\n    switch(workInProgress.tag) {\n      case TAG_HOST:\n        createStateNode(workInProgress) // \u6839\u636efiber\u751f\u6210\u771f\u5b9edom\u8282\u70b9\n      //...\n    }\n\n    // \u5b8c\u6210\u65f6\u5224\u65ad\u6709\u6ca1\u6709\u5bf9\u5e94\u7684dom\u64cd\u4f5c\uff0c\u6709\u7684\u8bdd\u6dfb\u52a0\u5230\u526f\u4f5c\u7528\u94fe\u8868\u4e2d\n    makeEffectList(workInProgress)\n  }\n\n\n  function makeEffectList (workInProgress) {\n    // \u6839\u636e\u6bcf\u4e2afiber\u7684firstEffect\u548clastEffect\u4ee5\u53caflags\n    // \u5f52\u5e76fiber\u6811\u4e2d\u5404fiber\u7684\u526f\u4f5c\u7528\uff0c\u5f62\u6210\u526f\u4f5c\u7528\u94fe\n    // firstEffect -> nextEffect -> ... -> lastEffect\n  }\n\n\n  function commitRoot (rootFiber) {\n    let currentEffect = rootFiber.firstEffect\n    while (currentEffect) {\n      switch(currentEffect.flags) { // \u526f\u4f5c\u7528\u7c7b\u578b\n        case Placement:\n        commitPlacemen(currentEffect) // \u5411\u7236dom\u6dfb\u52a0\u5b50dom\n      }\n      currentEffect = currentEffect.nextEffect\n    }\n  }\n\n  function commitPlacemen (currentEffect) {\n    let parent = currentEffect.return.stateNode\n    parent.appendChild(currentEffect.stateNode)\n  }\n\n")),Object(c.b)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),Object(c.b)("p",null,"react\u5c06jsx\u7ecf\u8fc7createElement\u5904\u7406\u5f62\u6210\u865a\u62dfdom\u8282\u70b9\u540e\u7684\u8fdb\u884c\u6e32\u67d3\uff0c\u4e3b\u8981\u5206\u4e3a\u4e24\u4e2a\u9636\u6bb5\uff1a\ndiff\u9636\u6bb5\u548ccommit\u9636\u6bb5\uff1a\n\u5728diff\u9636\u6bb5\u8fdb\u884c\u65b0\u65e7\u865a\u62dfdom\u5bf9\u6bd4\uff0c\u8fdb\u884c\u66f4\u65b0\uff0c\u589e\u91cf\u6216\u8005\u5220\u9664\uff0c\u5e76\u4e14\u6839\u636e\u865a\u62dfdom\u751f\u6210fiber\u6811"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"diff\u9636\u6bb5\u53ef\u4ee5\u6682\u505c\uff0c\u56e0\u4e3adiff\u9636\u6bb5\u6bd4\u8f83\u82b1\u65f6\u95f4\uff0creact\u4f1a\u5bf9\u4efb\u52a1\u8fdb\u884c\u62c6\u5206")),Object(c.b)("p",null,"commit\u9636\u6bb5\u8fdb\u884cDOM\u7684\u66f4\u65b0\u521b\u5efa\uff0c\u6b64\u9636\u6bb5\u4e0d\u80fd\u6682\u505c\uff0c\u9700\u8981\u201c\u4e00\u6c14\u5475\u6210\u201d"))}f.isMDXComponent=!0}}]);