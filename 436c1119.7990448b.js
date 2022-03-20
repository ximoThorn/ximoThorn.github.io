(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{105:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return s}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),i=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},u=function(e){var t=i(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},j=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=i(a),j=n,s=u["".concat(l,".").concat(j)]||u[j]||O[j]||c;return a?r.a.createElement(s,b(b({ref:t},p),{},{components:a})):r.a.createElement(s,b({ref:t},p))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,l=new Array(c);l[0]=j;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:n,l[1]=b;for(var p=2;p<c;p++)l[p]=a[p];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"},70:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return i}));var n=a(2),r=a(6),c=(a(0),a(105)),l={slug:"lerna",title:"lerna",author_url:"https://github.com/ximoThorn",author_image_url:"https://avatars.githubusercontent.com/u/32925631?s=60&v=4",tags:["npm","yarn","lerna"]},b={permalink:"/blog/lerna",source:"@site/blog/2022-03-20-lerna.md",description:"lerna",date:"2022-03-20T00:00:00.000Z",tags:[{label:"npm",permalink:"/blog/tags/npm"},{label:"yarn",permalink:"/blog/tags/yarn"},{label:"lerna",permalink:"/blog/tags/lerna"}],title:"lerna",readingTime:.665,truncated:!1,nextItem:{title:"react setState",permalink:"/blog/react setState"}},o=[{value:"\u4e00\u3001\u4f7f\u7528lerna",id:"\u4e00\u3001\u4f7f\u7528lerna",children:[{value:"\u5b89\u88c5lerna",id:"\u5b89\u88c5lerna",children:[]},{value:"\u521d\u59cb\u5316\u9879\u76ee",id:"\u521d\u59cb\u5316\u9879\u76ee",children:[]},{value:"yarn workspace",id:"yarn-workspace",children:[]},{value:"\u521b\u5efa\u5b50\u9879\u76ee",id:"\u521b\u5efa\u5b50\u9879\u76ee",children:[]},{value:"\u5b89\u88c5\u4f9d\u8d56",id:"\u5b89\u88c5\u4f9d\u8d56",children:[]},{value:"\u5b50\u9879\u76ee\u5171\u4eab\u4f9d\u8d56",id:"\u5b50\u9879\u76ee\u5171\u4eab\u4f9d\u8d56",children:[]},{value:"\u5176\u5b83\u547d\u4ee4",id:"\u5176\u5b83\u547d\u4ee4",children:[]}]}],p={rightToc:o};function i(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"lerna"},"lerna"),Object(c.b)("h2",{id:"\u4e00\u3001\u4f7f\u7528lerna"},"\u4e00\u3001\u4f7f\u7528lerna"),Object(c.b)("h3",{id:"\u5b89\u88c5lerna"},"\u5b89\u88c5lerna"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"  npm i lerna -g\n")),Object(c.b)("h3",{id:"\u521d\u59cb\u5316\u9879\u76ee"},"\u521d\u59cb\u5316\u9879\u76ee"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"  mkdir lerna-project\n  cd lerna-project\n\n  lerna init\n")),Object(c.b)("h4",{id:"lernajson"},"lerna.json"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "packages": [\n    "packages/*"\n  ],\n  "version": "0.0.0"\n}\n')),Object(c.b)("h3",{id:"yarn-workspace"},"yarn workspace"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u7ba1\u7406\u9879\u76ee\u5f62\u6210\u5de5\u4f5c\u7a7a\u95f4"),Object(c.b)("p",{parentName:"blockquote"},"1\u3001\u5c06node_modules\u76ee\u5f55\u5b89\u88c5\u5728\u6839\u76ee\u5f55\u4e2d\uff0c\u5b50\u9879\u76ee\u90fd\u53ef\u4ee5\u8bfb\u5230\u6839\u76ee\u5f55\u7684node_modules\n2\u3001\u6574\u4e2a\u9879\u76ee\u53ea\u6709\u4e00\u4e2ayarn.lock\u6587\u4ef6\n3\u3001\u5b50\u9879\u76ee\u4f1a\u88ablink\u81f3\u6839\u76ee\u5f55\u7684node_modules\u4e2d\uff0c\u8fd9\u6837\u5141\u8bb8\u6211\u4eec\u5728\u5b50\u9879\u76ee\u4e2d\u901a\u8fc7import\u76f4\u63a5\u5f15\u7528\u53e6\u4e00\u4e2a\u5b50\u9879\u76ee(\u9700\u6267\u884cyarn install)")),Object(c.b)("h4",{id:"\u5f00\u542fworkspace"},"\u5f00\u542fworkspace"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"package.json\u6587\u4ef6\u8bbe\u7f6eworkspaces\u5c5e\u6027")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "name": "root",\n  "private": true,\n  "workspaces": [\n    "packages/*"\n  ],\n  "devDependencies": {\n    "lerna": "^3.22.1"\n  }\n}\n')),Object(c.b)("h3",{id:"\u521b\u5efa\u5b50\u9879\u76ee"},"\u521b\u5efa\u5b50\u9879\u76ee"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"lerna create ihooks\n")),Object(c.b)("h3",{id:"\u5b89\u88c5\u4f9d\u8d56"},"\u5b89\u88c5\u4f9d\u8d56"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4e0d\u80fd\u5f80\u6839\u76ee\u5f55\u91cc\u9762\u6dfb\u52a0\u6a21\u5757\u7684\uff0c\u6267\u884c\ud83d\udc47\u547d\u4ee4\u4f1a\u5ffd\u7565\u6839\u7a7a\u95f4\u4f9d\u8d56\u68c0\u67e5\uff0c\u5c06node_modules\u5b89\u88c5\u5728\u6839\u76ee\u5f55\u4e2d"),Object(c.b)("pre",{parentName:"blockquote"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"yarn add chalk --ignore-workspace-root-check\n")),Object(c.b)("p",{parentName:"blockquote"},"\u6709\u65f6\u5019\u6211\u4eec\u9700\u8981\u5c06\u5b50\u9879\u76ee\u72ec\u4eab\u7684\u4f9d\u8d56\u5b89\u88c5\u5728\u5b50\u9879\u76ee\u4e2d\u600e\u4e48\u529e\u5462\uff1f\u6267\u884c\ud83d\udc47\u9762\u547d\u4ee4"),Object(c.b)("pre",{parentName:"blockquote"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"yarn workspace ihooks add loadsh\n"))),Object(c.b)("h3",{id:"\u5b50\u9879\u76ee\u5171\u4eab\u4f9d\u8d56"},"\u5b50\u9879\u76ee\u5171\u4eab\u4f9d\u8d56"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"yarn install\n// \u6216\u8005\nlerna bootstrap --npm-client yarn --use-workspaces\n// --npm-client yarn\u4f7f\u7528yarn\u4f5c\u4e3anpm\u7684\u5ba2\u6237\u7aef\n")),Object(c.b)("h3",{id:"\u5176\u5b83\u547d\u4ee4"},"\u5176\u5b83\u547d\u4ee4"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u4f5c\u7528"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u547d\u4ee4"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null})))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u67e5\u770b\u5b50\u7a7a\u95f4\u4fe1\u606f"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yarn workspaces info"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u5220\u9664\u6240\u6709node_modules"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"lerna clean / yarn workspaces run clean"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u91cd\u65b0\u83b7\u53d6\u6240\u6709\u7684node_modules"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yarn install --force"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u67e5\u770b\u7f13\u5b58\u76ee\u5f55"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yarn cache dir"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u6e05\u9664\u672c\u5730\u7f13\u5b58"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yarn cache clean"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}))))),Object(c.b)("h1",{id:"\u53c2\u8003\u6587\u6863"},"\u53c2\u8003\u6587\u6863"),Object(c.b)("p",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://yarn.bootcss.com/docs/cli/workspace/"}),"yarn"),"\u3001",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/lerna/lerna"}),"lerna")))}i.isMDXComponent=!0}}]);