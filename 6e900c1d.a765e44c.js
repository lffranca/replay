/*! For license information please see 6e900c1d.a765e44c.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{181:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return b}));var a=n(1),r=n(9),i=(n(0),n(216)),l=n(221),o=n(220),c={id:"thinking-in-replay",title:"Thinking in Replay"},s={id:"thinking-in-replay",title:"Thinking in Replay",description:"There's an excellent article in the React docs called [Thinking in React](https://reactjs.org/docs/thinking-in-react.html), which is well worth a read. Here we'll show how some of those ideas apply to Replay, and why building games with it is a refreshing take on how you might have done them before.",source:"@site/docs/thinking-in-replay.md",permalink:"/docs/thinking-in-replay",editUrl:"https://github.com/edbentley/replay/edit/master/website/docs/thinking-in-replay.md",sidebar:"someSidebar",previous:{title:"Top-Level Game",permalink:"/docs/top-level-game"},next:{title:"Replay Test",permalink:"/docs/test"}},p=[],u={rightToc:p};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"There's an excellent article in the React docs called ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://reactjs.org/docs/thinking-in-react.html"}),"Thinking in React"),", which is well worth a read. Here we'll show how some of those ideas apply to Replay, and why building games with it is a refreshing take on how you might have done them before."),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"/img/player-platform.png",alt:"Diagram of player and platform"}))),Object(i.b)("p",null,"In this game we need to do 2 things:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Have the player jump"),Object(i.b)("li",{parentName:"ol"},"Handle the player landing on the platform")),Object(i.b)("p",null,"Many game engines will represent the player in a ",Object(i.b)("inlineCode",{parentName:"p"},"class"),". We might have something like:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"class Player {\n  loop() {\n    if (this.jump) {\n      this.position.y += 4;\n    }\n  }\n}\n")),Object(i.b)("p",null,"Next we need to check if the player is touching the platform. Let's imagine we have some parent class to handle this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"class Level {\n  player = new Player();\n  platform = new Platform();\n\n  loop() {\n    if (this.player.hits(this.platform)) {\n      this.player.position.y = this.platform.position.y + this.platform.height;\n    }\n  }\n}\n")),Object(i.b)("p",null,"Our player's position is being read and mutated in 2 different classes. When you scale this up to a large game, it can be confusing which classes are changing what values."),Object(i.b)("p",null,"Replay uses a one-way data flow approach. We model our player's position as ",Object(i.b)("em",{parentName:"p"},"state"),", and the state only lives in one place. Other Sprites can read the state (through their props), but only the Sprite which owns the state is allowed to change it. What's more, the state is changed through pure functions - no mutation required."),Object(i.b)("p",null,"If multiple Sprites need to access some state, we need to lift the state to a common parent Sprite. That parent Sprite is then responsible for managing the state."),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"/img/state-flow.png",alt:"State flow diagram"}))),Object(i.b)("p",null,"Here we've lifted the player's position state to the ",Object(i.b)("inlineCode",{parentName:"p"},"Level")," Sprite, not the ",Object(i.b)("inlineCode",{parentName:"p"},"Player")," Sprite. If ",Object(i.b)("inlineCode",{parentName:"p"},"Player")," needs to update the position, it does so through a ",Object(i.b)("em",{parentName:"p"},"callback")," prop, e.g:"),Object(i.b)(l.a,{defaultValue:"js",groupId:"code",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}],mdxType:"Tabs"},Object(i.b)(o.a,{value:"js",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'{10-14} title="level.js"',"{10-14}":!0,title:'"level.js"'}),'const Level = makeSprite({\n  init() {\n    return { playerX: 0 };\n  },\n\n  render({ updateState }) {\n    return [\n      Player({\n        id: "player",\n        increaseX: () => {\n          updateState((prevState) => ({\n            ...prevState,\n            playerX: prevState.playerX + 5,\n          }));\n        },\n      }),\n    ];\n  },\n});\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'{4} title="player.js"',"{4}":!0,title:'"player.js"'}),"const Player = makeSprite({\n\n  loop({ props }) {\n    props.increaseX();\n  },\n\n});\n"))),Object(i.b)(o.a,{value:"ts",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'{10-14} title="level.ts"',"{10-14}":!0,title:'"level.ts"'}),'const Level = makeSprite<{}, { playerX: number }>({\n  init() {\n    return { playerX: 0 };\n  },\n\n  render({ updateState }) {\n    return [\n      Player({\n        id: "player",\n        increaseX: () => {\n          updateState((prevState) => ({\n            ...prevState,\n            playerX: prevState.playerX + 5,\n          }));\n        },\n      }),\n    ];\n  },\n});\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'{4} title="player.ts"',"{4}":!0,title:'"player.ts"'}),"const Player = makeSprite<{ increaseX: () => void }>({\n\n  loop({ props }) {\n    props.increaseX();\n  },\n\n});\n")))),Object(i.b)("p",null,"This is certainly more verbose than before, but it's arguably easier to understand how your code works since only ",Object(i.b)("inlineCode",{parentName:"p"},"Level")," is able to directly change its own state - it manages how its state changes through callbacks."),Object(i.b)("p",null,"This single way of building your game helps to keep game architecture both modular and consistent as your project scales in size."))}b.isMDXComponent=!0},216:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},u=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),h=a,m=u["".concat(l,".").concat(h)]||u[h]||b[h]||i;return n?r.a.createElement(m,o({ref:t},s,{components:n})):r.a.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=h;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},218:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var i=typeof a;if("string"===i||"number"===i)e.push(a);else if(Array.isArray(a)&&a.length){var l=r.apply(null,a);l&&e.push(l)}else if("object"===i)for(var o in a)n.call(a,o)&&a[o]&&e.push(o)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},220:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}},221:function(e,t,n){"use strict";n(25),n(20),n(21);var a=n(0),r=n.n(a),i=n(234);var l=function(){return Object(a.useContext)(i.a)},o=n(218),c=n.n(o),s=n(133),p=n.n(s),u=37,b=39;t.a=function(e){var t=e.block,n=e.children,i=e.defaultValue,o=e.values,s=e.groupId,h=l(),m=h.tabGroupChoices,d=h.setTabGroupChoices,f=Object(a.useState)(i),y=f[0],g=f[1];if(null!=s){var j=m[s];null!=j&&j!==y&&g(j)}var O=function(e){g(e),null!=s&&d(s,e)},v=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:c()("tabs",{"tabs--block":t})},o.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":y===t,className:c()("tab-item",p.a.tabItem,{"tab-item--active":y===t}),key:t,ref:function(e){return v.push(e)},onKeyDown:function(e){return function(e,t,n){switch(n.keyCode){case b:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case u:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(v,e.target,e)},onFocus:function(){return O(t)},onClick:function(){return O(t)}},n)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===y}))[0]))}},234:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){}});t.a=r}}]);