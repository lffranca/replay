/*! For license information please see d82a7d0f.d42046fb.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{193:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return p})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return u}));var n=a(1),r=a(9),i=(a(0),a(220)),l=a(229),o=a(228),p={id:"native-sprites",title:"Native Sprites"},c={id:"native-sprites",title:"Native Sprites",description:"Native Sprites are a way to add platform-specific features to your game which aren't supported in Replay itself.",source:"@site/docs/native-sprites.md",permalink:"/docs/native-sprites",editUrl:"https://github.com/edbentley/replay/edit/master/website/docs/native-sprites.md",sidebar:"someSidebar",previous:{title:"iOS",permalink:"/docs/ios"},next:{title:"TextInput",permalink:"/docs/text-input"}},b=[{value:"Create a Native Sprite",id:"create-a-native-sprite",children:[]},{value:"Platform implementation",id:"platform-implementation",children:[{value:"<code>create</code>",id:"create",children:[]},{value:"<code>loop</code>",id:"loop",children:[]},{value:"<code>cleanup</code>",id:"cleanup",children:[]},{value:"Web example",id:"web-example",children:[]},{value:"Swift example",id:"swift-example",children:[]}]},{value:"Platform usage",id:"platform-usage",children:[]}],s={rightToc:b};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Native Sprites are a way to add platform-specific features to your game which aren't supported in Replay itself."),Object(i.b)("p",null,"For example, Replay has no text input. If you need a text input, you can use the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/text-input"}),"TextInput")," Native Sprite."),Object(i.b)("h2",{id:"create-a-native-sprite"},"Create a Native Sprite"),Object(i.b)("p",null,"To create your own Native Sprite you can use the ",Object(i.b)("inlineCode",{parentName:"p"},"makeNativeSprite")," function from ",Object(i.b)("inlineCode",{parentName:"p"},"@replay/core"),":"),Object(i.b)(l.a,{defaultValue:"js",groupId:"code",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}],mdxType:"Tabs"},Object(i.b)(o.a,{value:"js",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'import { makeNativeSprite } from "@replay/core";\n\nexport const MyWidget = makeNativeSprite("MyWidget");\n'))),Object(i.b)(o.a,{value:"ts",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),'import { makeNativeSprite } from "@replay/core";\n\ntype MyWidgetProps = {\n  id: string;\n  value: number;\n};\nexport const MyWidget = makeNativeSprite<MyWidgetProps>("MyWidget");\n')))),Object(i.b)("p",null,"We've registered our ",Object(i.b)("inlineCode",{parentName:"p"},"MyWidget")," Native Sprite with a ",Object(i.b)("inlineCode",{parentName:"p"},'"MyWidget"')," name. This name will be used later on to lookup the platform-specific implementation."),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Important")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"All Native Sprites must define an ",Object(i.b)("inlineCode",{parentName:"p"},"id")," prop."))),Object(i.b)("p",null,"You can then call your Native Sprite within other Custom Sprites:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'import { MyWidget } from "./my-widget";\n\nconst MySprite = makeSprite({\n  render() {\n    return [\n      MyWidget({\n        id: "widget",\n        value: 100,\n      }),\n    ];\n  },\n});\n')),Object(i.b)("h2",{id:"platform-implementation"},"Platform implementation"),Object(i.b)("p",null,"After creating a Native Sprite, its implementation must be defined separately for each platform you want to support."),Object(i.b)("p",null,"Native Sprite implementations are an object with a ",Object(i.b)("inlineCode",{parentName:"p"},"create"),", ",Object(i.b)("inlineCode",{parentName:"p"},"loop")," and ",Object(i.b)("inlineCode",{parentName:"p"},"destroy")," method."),Object(i.b)("h3",{id:"create"},Object(i.b)("inlineCode",{parentName:"h3"},"create")),Object(i.b)("p",null,"Called on initial creation of Sprite. Use this to run anything you need on setup. Returns the initial ",Object(i.b)("inlineCode",{parentName:"p"},"state"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"  create({ props, parentGlobalId, getState, updateState, utils }) {\n    return { ... };\n  },\n")),Object(i.b)("h4",{id:"parameters"},"Parameters"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"props"),": The props passed in by the parent Sprite."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"parentGlobalId"),": A globally unique ID for the parent Sprite."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"getState"),": A function which returns the current state of the Sprite."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"updateState"),": A callback to update the ",Object(i.b)("inlineCode",{parentName:"li"},"state")," of the Sprite. Pass an object which will be merged into the existing ",Object(i.b)("inlineCode",{parentName:"li"},"state"),". E.g:",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"updateState({ shoot: true });\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"utils"),": An object with fields:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"didResize"),": A boolean to check if the device was just resized."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"scale"),": Ratio of the game and platform's screen size."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"gameXToPlatformX"),": Function to convert a local game ",Object(i.b)("inlineCode",{parentName:"li"},"x")," coordinate to platform ",Object(i.b)("inlineCode",{parentName:"li"},"x")," coordinate."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"gameYToPlatformY"),": Function to convert a local game ",Object(i.b)("inlineCode",{parentName:"li"},"y")," coordinate to platform ",Object(i.b)("inlineCode",{parentName:"li"},"y")," coordinate.")))),Object(i.b)("h3",{id:"loop"},Object(i.b)("inlineCode",{parentName:"h3"},"loop")),Object(i.b)("p",null,"Called 60 times a second. Returns the next frame's ",Object(i.b)("inlineCode",{parentName:"p"},"state"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"  loop({ props, state, parentGlobalId, utils }) {\n    return { ... };\n  },\n")),Object(i.b)("h4",{id:"parameters-1"},"Parameters"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"props"),": The props passed in by the parent Sprite."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"state"),": The current state of the Sprite."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"parentGlobalId"),": A globally unique ID for the parent Sprite."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"utils"),": An object with fields:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"didResize"),": A boolean to check if the device was just resized."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"scale"),": Ratio of the game and platform's screen size."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"gameXToPlatformX"),": Function to convert a local game ",Object(i.b)("inlineCode",{parentName:"li"},"x")," coordinate to platform ",Object(i.b)("inlineCode",{parentName:"li"},"x")," coordinate."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"gameYToPlatformY"),": Function to convert a local game ",Object(i.b)("inlineCode",{parentName:"li"},"y")," coordinate to platform ",Object(i.b)("inlineCode",{parentName:"li"},"y")," coordinate.")))),Object(i.b)("h3",{id:"cleanup"},Object(i.b)("inlineCode",{parentName:"h3"},"cleanup")),Object(i.b)("p",null,"Called when Sprite is removed. Use this to clean up anything related to the Sprite."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"  cleanup({ state, parentGlobalId }) {\n    // Cleanup\n  },\n")),Object(i.b)("h4",{id:"parameters-2"},"Parameters"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"state"),": The current state of the Sprite."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"parentGlobalId"),": A globally unique ID for the parent Sprite.")),Object(i.b)("h3",{id:"web-example"},"Web example"),Object(i.b)(l.a,{defaultValue:"js",groupId:"code",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}],mdxType:"Tabs"},Object(i.b)(o.a,{value:"js",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"export const MyWidgetWeb = {\n  create({ props, parentGlobalId, getState, updateState, utils }) {\n    // Setup code\n\n    // Use parentGlobalId to obtain a globally unique ID\n    const uniqueId = `${parentGlobalId}--${props.id}`;\n\n    // Return the initial state\n    return { someNumber: 0 };\n  },\n  loop({ props, state, parentGlobalId, utils }) {\n    // Loop code\n\n    // Return next frame's state\n    return { someNumber: state.someNumber + 1 };\n  },\n  cleanup({ state, parentGlobalId }) {\n    // Cleanup code\n  },\n};\n"))),Object(i.b)(o.a,{value:"ts",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),'import { NativeSpriteImplementation } from "@replay/core";\n\ntype MyWidgetState = {\n  someNumber: number;\n};\n\nexport const MyWidgetWeb: NativeSpriteImplementation<\n  MyWidgetProps,\n  MyWidgetState\n> = {\n  create({ props, parentGlobalId, getState, updateState, utils }) {\n    // Setup code\n\n    // Use parentGlobalId to obtain a globally unique ID\n    const uniqueId = `${parentGlobalId}--${props.id}`;\n\n    // Return the initial state\n    return { someNumber: 0 };\n  },\n  loop({ props, state, parentGlobalId, utils }) {\n    // Loop code\n\n    // Return next frame\'s state\n    return { someNumber: state.someNumber + 1 };\n  },\n  cleanup({ state, parentGlobalId }) {\n    // Cleanup code\n  },\n};\n')))),Object(i.b)("h3",{id:"swift-example"},"Swift example"),Object(i.b)("p",null,"Swift implementations must make use of ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://nshipster.com/javascriptcore"}),"JavaScriptCore")," to create a JS-compatible object:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-swift"}),'import JavaScriptCore\nimport Replay\n\n@objc class MyWidgetSwift : NSObject, ReplayNativeSpriteImplementation {\n\n    var create: @convention(block) (JSValue) -> NSDictionary = { argsObj in\n        let args = ReplayNativeSpriteArgs.parseCreateArgs(argsObj)\n\n        // Setup\n\n        return ["stateField": "Hello"]\n    }\n\n    var loop: @convention(block) (JSValue) -> NSDictionary = { argsObj in\n        let args = ReplayNativeSpriteArgs.parseLoopArgs(argsObj)\n\n        // Loop\n\n        return args.state.toDictionary()! as NSDictionary\n    }\n\n    var cleanup: @convention(block) (JSValue) -> Void = { argsObj in\n        let args = ReplayNativeSpriteArgs.parseCleanupArgs(argsObj)\n\n        // Cleanup\n    }\n\n}\n')),Object(i.b)("h2",{id:"platform-usage"},"Platform usage"),Object(i.b)("p",null,"You must import each Native Sprite implementation into its respective platform. See the ",Object(i.b)("inlineCode",{parentName:"p"},"nativeSpriteMap")," field in the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/web"}),"Web")," and ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/ios"}),"iOS")," platforms. For example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'import { renderCanvas } from "@replay/web";\nimport { MyWidgetWeb } from "./my-widget-web";\n\nconst nativeSpriteMap = {\n  // The key "MyWidget" here must match the name passed into makeNativeSprite\n  MyWidget: MyWidgetWeb,\n};\n\nrenderCanvas(\n  Game(gameProps),\n  [\n    t.text({\n      color: "black",\n      text: "Loading...",\n    }),\n  ],\n  ASSET_NAMES,\n  "scale-up",\n  nativeSpriteMap\n);\n')))}u.isMDXComponent=!0},220:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),b=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o({},t,{},e)),a},s=function(e){var t=b(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=b(a),m=n,d=s["".concat(l,".").concat(m)]||s[m]||u[m]||i;return a?r.a.createElement(d,o({ref:t},c,{components:a})):r.a.createElement(d,o({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},225:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)&&n.length){var l=r.apply(null,n);l&&e.push(l)}else if("object"===i)for(var o in n)a.call(n,o)&&n[o]&&e.push(o)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},228:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){return r.a.createElement("div",null,e.children)}},229:function(e,t,a){"use strict";a(25),a(20),a(21);var n=a(0),r=a.n(n),i=a(245);var l=function(){return Object(n.useContext)(i.a)},o=a(225),p=a.n(o),c=a(133),b=a.n(c),s=37,u=39;t.a=function(e){var t=e.block,a=e.children,i=e.defaultValue,o=e.values,c=e.groupId,m=l(),d=m.tabGroupChoices,j=m.setTabGroupChoices,O=Object(n.useState)(i),f=O[0],N=O[1];if(null!=c){var v=d[c];null!=v&&v!==f&&N(v)}var g=function(e){N(e),null!=c&&j(c,e)},h=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:p()("tabs",{"tabs--block":t})},o.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":f===t,className:p()("tab-item",b.a.tabItem,{"tab-item--active":f===t}),key:t,ref:function(e){return h.push(e)},onKeyDown:function(e){return function(e,t,a){switch(a.keyCode){case u:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(h,e.target,e)},onFocus:function(){return g(t)},onClick:function(){return g(t)}},a)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(a).filter((function(e){return e.props.value===f}))[0]))}},245:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){}});t.a=r}}]);