(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{153:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return d}));var i=n(1),r=n(9),a=(n(0),n(221)),o={},s={id:"tutorial/15",title:"15",description:"# 15 - Collision Detection",source:"@site/docs/tutorial/15.md",permalink:"/docs/tutorial/15",editUrl:"https://github.com/edbentley/replay/edit/master/website/docs/tutorial/15.md"},p=[],c={rightToc:p};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"15---collision-detection"},"15 - Collision Detection"),Object(a.b)("p",null,"Next we need to add some collision detection to see if the bird hit a pipe or fell off the bottom of the screen."),Object(a.b)("p",null,"We'll add a callback prop ",Object(a.b)("inlineCode",{parentName:"p"},"gameOver")," in the ",Object(a.b)("inlineCode",{parentName:"p"},"Level")," Sprite which can return us to the main menu. Then in the ",Object(a.b)("inlineCode",{parentName:"p"},"loop")," method we call it when the ",Object(a.b)("inlineCode",{parentName:"p"},"didHitPipe")," function returns ",Object(a.b)("inlineCode",{parentName:"p"},"true"),"."),Object(a.b)("p",null,"In Replay one way of performing collision detection is by checking if a point is within a rectangle, like the ",Object(a.b)("inlineCode",{parentName:"p"},"pointInRect")," function defined at the bottom of the ",Object(a.b)("inlineCode",{parentName:"p"},"level")," file does."),Object(a.b)("p",null,"In ",Object(a.b)("inlineCode",{parentName:"p"},"didHitPipe")," we essentially choose a few points around the shape of the bird, and see if any of those are inside one of the pipe rectangles - if so, it's a hit! For simplicity, this function doesn't account for the bird's rotation; as an exercise, feel free to try to add that for a more accurate hit detection."),Object(a.b)("p",null,"We update our top-level ",Object(a.b)("inlineCode",{parentName:"p"},"Game")," Sprite to change its view state to ",Object(a.b)("inlineCode",{parentName:"p"},'"menu"')," in the ",Object(a.b)("inlineCode",{parentName:"p"},"gameOver")," callback prop."),Object(a.b)("p",null,"You'll also see an ",Object(a.b)("inlineCode",{parentName:"p"},"attempt")," count added in the state. Even though we don't display this, it's a neat hack to force the ",Object(a.b)("inlineCode",{parentName:"p"},"Level")," to reset its state whenever we start again by changing its ",Object(a.b)("inlineCode",{parentName:"p"},"id")," prop. Replay uses the ",Object(a.b)("inlineCode",{parentName:"p"},"id")," to track state between Sprites (which is why it has to be unique locally), but we can also use that to reset a Sprite's state."))}d.isMDXComponent=!0},199:function(e,t,n){"use strict";n.r(t);var i=n(0),r=n.n(i),a=n(227),o=(n(52),n(220)),s=n(245),p=Object(o.a)({render:function(){return[o.b.rectangle({width:50,height:40,color:"yellow"})]}});function c(e){return"keysDown"in e}var d=Object(o.a)({render:function(e){var t=e.props,n=u(e.device.size,t.pipe.gapY),i=n.yUpperTop,r=n.yUpperBottom,a=n.yLowerTop,s=n.yLowerBottom;return[o.b.rectangle({color:"green",width:40,height:i-r,y:(i+r)/2}),o.b.rectangle({color:"green",width:40,height:a-s,y:(a+s)/2})]}});function u(e,t){return{yUpperTop:e.height/2+e.heightMargin,yUpperBottom:t+85,yLowerTop:t-85,yLowerBottom:-e.height/2-e.heightMargin}}var l=Object(o.a)({init:function(e){var t=e.device;return{birdY:10,birdGravity:-12,pipes:e.props.paused?[]:[h(t)]}},loop:function(e){var t=e.props,n=e.state,i=e.device;if(t.paused)return n;var r=i.inputs,a=n.birdGravity,o=n.birdY,p=n.pipes;return o-=a+=.8,(r.pointer.justPressed||c(r)&&r.keysJustPressed[" "])&&(a=-12),p[p.length-1].x<140&&(p=[].concat(p,[h(i)]).filter((function(e){return e.x>-(i.size.width+i.size.widthMargin+40)}))),function(e,t,n){if(e-20<-(t.height/2+t.heightMargin)||e+20>t.height/2+t.heightMargin)return!0;for(var i,r=function(){var n=i.value;if(n.x>45||n.x<-45)return"continue";var r=u(t,n.gapY),a=r.yUpperTop,o=r.yUpperBottom,s=r.yLowerTop,p=r.yLowerBottom,c={x:n.x,y:(a+o)/2,width:40,height:a-o},d={x:n.x,y:(s+p)/2,width:40,height:s-p};return[{x:25,y:e+20},{x:25,y:e-20},{x:0,y:e+20},{x:0,y:e-20},{x:-25,y:e+20},{x:-25,y:e-20}].some((function(e){return f(e,c)||f(e,d)}))?{v:!0}:void 0},a=Object(s.a)(n);!(i=a()).done;){var o=r();switch(o){case"continue":continue;default:if("object"==typeof o)return o.v}}return!1}(o,i.size,p)&&t.gameOver(),{birdGravity:a,birdY:o,pipes:p=p.map((function(e){var t=e.passed;return!t&&e.x<-45&&(t=!0),Object.assign(Object.assign({},e),{},{passed:t,x:e.x-2})}))}},render:function(e){var t=e.state,n=e.device.size;return[o.b.rectangle({color:"#add8e6",width:n.width+2*n.widthMargin,height:n.height+2*n.heightMargin}),p({id:"bird",x:0,y:t.birdY,rotation:Math.max(-30,3*t.birdGravity-30)})].concat(t.pipes.map((function(e,t){return d({id:"pipe-"+t,pipe:e,x:e.x})})))}});function h(e){var t=(e.size.height+2*e.size.heightMargin-340)*(e.random()-.5);return{x:e.size.width+e.size.widthMargin+50,gapY:t,passed:!1}}function f(e,t){return e.x>t.x-t.width/2&&e.x<t.x+t.width/2&&e.y>t.y-t.height/2&&e.y<t.y+t.height/2}var m=Object(o.a)({render:function(e){var t=e.props,n=e.device.inputs;return(n.pointer.justReleased||c(n)&&n.keysJustPressed[" "])&&t.start(),[o.b.text({text:c(n)?"Click or Space Bar to Start":"Tap to Start",color:"white",y:100})]}}),g=Object(o.a)({init:function(){return{view:"menu",attempt:0}},render:function(e){var t=e.state,n=e.updateState,i="menu"===t.view;return[l({id:"level-"+t.attempt,paused:i,gameOver:function(){n((function(e){return Object.assign(Object.assign({},e),{},{view:"menu"})}))}}),i?m({id:"menu",start:function(){n((function(e){return Object.assign(Object.assign({},e),{},{view:"level",attempt:e.attempt+1})}))}}):null]}}),v={id:"Game",size:{width:400,height:600,maxHeightMargin:150},defaultFont:{name:"Helvetica",size:24}},b=n(153);t.default=function(){return r.a.createElement(a.a,{part:15,MDXContent:b.default,codesTs:[{file:"level.ts",code:'import { makeSprite, t, Device, DeviceSize } from "@replay/core";\nimport { WebInputs } from "@replay/web";\nimport { iOSInputs } from "@replay/swift";\nimport { Bird, birdWidth, birdHeight } from "./bird";\nimport { isWebInput } from "./utils";\nimport { Pipe, PipeT, pipeWidth, pipeGap, getPipeYPositions } from "./pipe";\n\nconst speedX = 2;\nconst birdX = 0;\n\ntype LevelProps = {\n  paused: boolean;\n  gameOver: () => void;\n};\n\ntype LevelState = {\n  birdY: number;\n  birdGravity: number;\n  pipes: PipeT[];\n};\n\nexport const Level = makeSprite<LevelProps, LevelState, WebInputs | iOSInputs>({\n  init({ device, props }) {\n    return {\n      birdY: 10,\n      birdGravity: -12,\n      pipes: props.paused ? [] : [newPipe(device)],\n    };\n  },\n\n  loop({ props, state, device }) {\n    if (props.paused) {\n      return state;\n    }\n\n    const { inputs } = device;\n\n    let { birdGravity, birdY, pipes } = state;\n\n    birdGravity += 0.8;\n    birdY -= birdGravity;\n\n    if (\n      inputs.pointer.justPressed ||\n      (isWebInput(inputs) && inputs.keysJustPressed[" "])\n    ) {\n      birdGravity = -12;\n    }\n\n    const lastPipe = pipes[pipes.length - 1];\n    if (lastPipe.x < 140) {\n      pipes = [...pipes, newPipe(device)]\n        // Remove the pipes off screen on left\n        .filter(\n          (pipe) =>\n            pipe.x > -(device.size.width + device.size.widthMargin + pipeWidth)\n        );\n    }\n\n    if (didHitPipe(birdY, device.size, pipes)) {\n      props.gameOver();\n    }\n\n    // Move pipes to the left\n    pipes = pipes.map((pipe) => {\n      let passed = pipe.passed;\n      if (!passed && pipe.x < birdX - birdWidth / 2 - pipeWidth / 2) {\n        // Mark pipe as having passed bird\'s x position\n        passed = true;\n      }\n      return { ...pipe, passed, x: pipe.x - speedX };\n    });\n\n    return {\n      birdGravity,\n      birdY,\n      pipes,\n    };\n  },\n\n  render({ state, device }) {\n    const { size } = device;\n    return [\n      t.rectangle({\n        color: "#add8e6",\n        width: size.width + size.widthMargin * 2,\n        height: size.height + size.heightMargin * 2,\n      }),\n      Bird({\n        id: "bird",\n        x: birdX,\n        y: state.birdY,\n        rotation: Math.max(-30, state.birdGravity * 3 - 30),\n      }),\n      ...state.pipes.map((pipe, index) =>\n        Pipe({\n          id: `pipe-${index}`,\n          pipe,\n          x: pipe.x,\n        })\n      ),\n    ];\n  },\n});\n\nfunction newPipe(device: Device<{}>): PipeT {\n  const height = device.size.height + device.size.heightMargin * 2;\n  const randomY = (height - pipeGap * 2) * (device.random() - 0.5);\n\n  return {\n    x: device.size.width + device.size.widthMargin + 50,\n    gapY: randomY,\n    passed: false,\n  };\n}\n\nfunction didHitPipe(birdY: number, size: DeviceSize, pipes: PipeT[]) {\n  if (\n    birdY - birdHeight / 2 < -(size.height / 2 + size.heightMargin) ||\n    birdY + birdHeight / 2 > size.height / 2 + size.heightMargin\n  ) {\n    // hit bottom or top\n    return true;\n  }\n  for (const pipe of pipes) {\n    if (\n      pipe.x > birdX + birdWidth / 2 + pipeWidth / 2 ||\n      pipe.x < birdX - birdWidth / 2 - pipeWidth / 2\n    ) {\n      // bird isn\'t at pipe\n      continue;\n    }\n    const {\n      yUpperTop,\n      yUpperBottom,\n      yLowerTop,\n      yLowerBottom,\n    } = getPipeYPositions(size, pipe.gapY);\n    const topPipeRect = {\n      x: pipe.x,\n      y: (yUpperTop + yUpperBottom) / 2,\n      width: pipeWidth,\n      height: yUpperTop - yUpperBottom,\n    };\n    const bottomPipeRect = {\n      x: pipe.x,\n      y: (yLowerTop + yLowerBottom) / 2,\n      width: pipeWidth,\n      height: yLowerTop - yLowerBottom,\n    };\n    // Check a few points at edges of bird\n    const birdPoints = [\n      { x: birdX + birdWidth / 2, y: birdY + birdHeight / 2 },\n      { x: birdX + birdWidth / 2, y: birdY - birdHeight / 2 },\n      { x: birdX, y: birdY + birdHeight / 2 },\n      { x: birdX, y: birdY - birdHeight / 2 },\n      { x: birdX - birdWidth / 2, y: birdY + birdHeight / 2 },\n      { x: birdX - birdWidth / 2, y: birdY - birdHeight / 2 },\n    ];\n    if (\n      birdPoints.some(\n        (point) =>\n          pointInRect(point, topPipeRect) || pointInRect(point, bottomPipeRect)\n      )\n    ) {\n      // Bird hit a pipe!\n      return true;\n    }\n  }\n  return false;\n}\n\nfunction pointInRect(\n  point: { x: number; y: number },\n  rect: { x: number; y: number; height: number; width: number }\n) {\n  return (\n    point.x > rect.x - rect.width / 2 &&\n    point.x < rect.x + rect.width / 2 &&\n    point.y > rect.y - rect.height / 2 &&\n    point.y < rect.y + rect.height / 2\n  );\n}\n',highlight:[1,4,6,13,23,27,60,61,62,"117-183"]},{file:"index.ts",code:'import { makeSprite, GameProps } from "@replay/core";\nimport { Level } from "./level";\nimport { Menu } from "./menu";\n\ntype GameState = {\n  view: "menu" | "level";\n  attempt: number;\n};\n\nexport const Game = makeSprite<GameProps, GameState>({\n  init() {\n    return { view: "menu", attempt: 0 };\n  },\n\n  render({ state, updateState }) {\n    const inMenuScreen = state.view === "menu";\n\n    return [\n      Level({\n        id: `level-${state.attempt}`,\n        paused: inMenuScreen,\n        gameOver: () => {\n          updateState((prevState) => {\n            return {\n              ...prevState,\n              view: "menu",\n            };\n          });\n        },\n      }),\n      inMenuScreen\n        ? Menu({\n            id: "menu",\n            start: () => {\n              updateState((prevState) => {\n                return {\n                  ...prevState,\n                  view: "level",\n                  attempt: prevState.attempt + 1,\n                };\n              });\n            },\n          })\n        : null,\n    ];\n  },\n});\n\nexport const gameProps: GameProps = {\n  id: "Game",\n  size: {\n    width: 400,\n    height: 600,\n    maxHeightMargin: 150,\n  },\n  defaultFont: {\n    name: "Helvetica",\n    size: 24,\n  },\n};\n',highlight:[7,12,20,"22-29",39]}],codesJs:[{file:"level.js",code:'import { makeSprite, t } from "@replay/core";\nimport { Bird, birdWidth, birdHeight } from "./bird";\nimport { isWebInput } from "./utils";\nimport { Pipe, pipeWidth, pipeGap, getPipeYPositions } from "./pipe";\n\nconst speedX = 2;\nconst birdX = 0;\n\nexport const Level = makeSprite({\n  init({ device, props }) {\n    return {\n      birdY: 10,\n      birdGravity: -12,\n      pipes: props.paused ? [] : [newPipe(device)],\n    };\n  },\n\n  loop({ props, state, device }) {\n    if (props.paused) {\n      return state;\n    }\n\n    const { inputs } = device;\n\n    let { birdGravity, birdY, pipes } = state;\n\n    birdGravity += 0.8;\n    birdY -= birdGravity;\n\n    if (\n      inputs.pointer.justPressed ||\n      (isWebInput(inputs) && inputs.keysJustPressed[" "])\n    ) {\n      birdGravity = -12;\n    }\n\n    const lastPipe = pipes[pipes.length - 1];\n    if (lastPipe.x < 140) {\n      pipes = [...pipes, newPipe(device)]\n        // Remove the pipes off screen on left\n        .filter(\n          (pipe) =>\n            pipe.x > -(device.size.width + device.size.widthMargin + pipeWidth)\n        );\n    }\n\n    if (didHitPipe(birdY, device.size, pipes)) {\n      props.gameOver();\n    }\n\n    // Move pipes to the left\n    pipes = pipes.map((pipe) => {\n      let passed = pipe.passed;\n      if (!passed && pipe.x < birdX - birdWidth / 2 - pipeWidth / 2) {\n        // Mark pipe as having passed bird\'s x position\n        passed = true;\n      }\n      return { ...pipe, passed, x: pipe.x - speedX };\n    });\n\n    return {\n      birdGravity,\n      birdY,\n      pipes,\n    };\n  },\n\n  render({ state, device }) {\n    const { size } = device;\n    return [\n      t.rectangle({\n        color: "#add8e6",\n        width: size.width + size.widthMargin * 2,\n        height: size.height + size.heightMargin * 2,\n      }),\n      Bird({\n        id: "bird",\n        x: birdX,\n        y: state.birdY,\n        rotation: Math.max(-30, state.birdGravity * 3 - 30),\n      }),\n      ...state.pipes.map((pipe, index) =>\n        Pipe({\n          id: `pipe-${index}`,\n          pipe,\n          x: pipe.x,\n        })\n      ),\n    ];\n  },\n});\n\nfunction newPipe(device) {\n  const height = device.size.height + device.size.heightMargin * 2;\n  const randomY = (height - pipeGap * 2) * (device.random() - 0.5);\n\n  return {\n    x: device.size.width + device.size.widthMargin + 50,\n    gapY: randomY,\n    passed: false,\n  };\n}\n\nfunction didHitPipe(birdY, size, pipes) {\n  if (\n    birdY - birdHeight / 2 < -(size.height / 2 + size.heightMargin) ||\n    birdY + birdHeight / 2 > size.height / 2 + size.heightMargin\n  ) {\n    // hit bottom or top\n    return true;\n  }\n  for (const pipe of pipes) {\n    if (\n      pipe.x > birdX + birdWidth / 2 + pipeWidth / 2 ||\n      pipe.x < birdX - birdWidth / 2 - pipeWidth / 2\n    ) {\n      // bird isn\'t at pipe\n      continue;\n    }\n    const {\n      yUpperTop,\n      yUpperBottom,\n      yLowerTop,\n      yLowerBottom,\n    } = getPipeYPositions(size, pipe.gapY);\n    const topPipeRect = {\n      x: pipe.x,\n      y: (yUpperTop + yUpperBottom) / 2,\n      width: pipeWidth,\n      height: yUpperTop - yUpperBottom,\n    };\n    const bottomPipeRect = {\n      x: pipe.x,\n      y: (yLowerTop + yLowerBottom) / 2,\n      width: pipeWidth,\n      height: yLowerTop - yLowerBottom,\n    };\n    // Check a few points at edges of bird\n    const birdPoints = [\n      { x: birdX + birdWidth / 2, y: birdY + birdHeight / 2 },\n      { x: birdX + birdWidth / 2, y: birdY - birdHeight / 2 },\n      { x: birdX, y: birdY + birdHeight / 2 },\n      { x: birdX, y: birdY - birdHeight / 2 },\n      { x: birdX - birdWidth / 2, y: birdY + birdHeight / 2 },\n      { x: birdX - birdWidth / 2, y: birdY - birdHeight / 2 },\n    ];\n    if (\n      birdPoints.some(\n        (point) =>\n          pointInRect(point, topPipeRect) || pointInRect(point, bottomPipeRect)\n      )\n    ) {\n      // Bird hit a pipe!\n      return true;\n    }\n  }\n  return false;\n}\n\nfunction pointInRect(point, rect) {\n  return (\n    point.x > rect.x - rect.width / 2 &&\n    point.x < rect.x + rect.width / 2 &&\n    point.y > rect.y - rect.height / 2 &&\n    point.y < rect.y + rect.height / 2\n  );\n}\n',highlight:[2,4,10,14,"47-49","104-167"]},{file:"index.js",code:'import { makeSprite } from "@replay/core";\nimport { Level } from "./level";\nimport { Menu } from "./menu";\n\nexport const Game = makeSprite({\n  init() {\n    return { view: "menu", attempt: 0 };\n  },\n\n  render({ state, updateState }) {\n    const inMenuScreen = state.view === "menu";\n\n    return [\n      Level({\n        id: `level-${state.attempt}`,\n        paused: inMenuScreen,\n        gameOver: () => {\n          updateState((prevState) => {\n            return {\n              ...prevState,\n              view: "menu",\n            };\n          });\n        },\n      }),\n      inMenuScreen\n        ? Menu({\n            id: "menu",\n            start: () => {\n              updateState((prevState) => {\n                return {\n                  ...prevState,\n                  view: "level",\n                  attempt: prevState.attempt + 1,\n                };\n              });\n            },\n          })\n        : null,\n    ];\n  },\n});\n\nexport const gameProps = {\n  id: "Game",\n  size: {\n    width: 400,\n    height: 600,\n    maxHeightMargin: 150,\n  },\n  defaultFont: {\n    name: "Helvetica",\n    size: 24,\n  },\n};\n',highlight:[7,15,"17-24",34]}],Game:g,gameProps:v})}},220:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));n(52);var i=n(222),r={text:function(e){return{type:"text",props:Object.assign(Object.assign({testId:e.testId},Object(i.a)(e)),{},{font:e.font,text:e.text,align:e.align||"center",color:e.color})}},circle:function(e){return{type:"circle",props:Object.assign(Object.assign({testId:e.testId},Object(i.a)(e)),{},{radius:e.radius,color:e.color})}},rectangle:function(e){return{type:"rectangle",props:Object.assign(Object.assign({testId:e.testId},Object(i.a)(e)),{},{width:e.width,height:e.height,color:e.color})}},line:function(e){var t;return{type:"line",props:Object.assign(Object.assign({testId:e.testId},Object(i.a)(e)),{},{color:e.color,thickness:null!==(t=e.thickness)&&void 0!==t?t:1,path:e.path})}},image:function(e){return{type:"image",props:Object.assign(Object.assign({testId:e.testId},Object(i.a)(e)),{},{fileName:e.fileName,width:e.width,height:e.height})}},spriteSheet:function(e){return{type:"spriteSheet",props:Object.assign(Object.assign({testId:e.testId},Object(i.a)(e)),{},{fileName:e.fileName,columns:e.columns,rows:e.rows,index:e.index,width:e.width,height:e.height})}}};function a(e){return function(t){return{type:"custom",spriteObj:e,props:t}}}},222:function(e,t,n){"use strict";function i(e){var t,n,i;return{x:e.x||0,y:e.y||0,rotation:e.rotation||0,opacity:Math.min(1,Math.max(0,null!==(t=e.opacity)&&void 0!==t?t:1)),scaleX:null!==(n=e.scaleX)&&void 0!==n?n:1,scaleY:null!==(i=e.scaleY)&&void 0!==i?i:1,anchorX:e.anchorX||0,anchorY:e.anchorY||0,mask:e.mask||null}}n.d(t,"a",(function(){return i}))},227:function(e,t,n){"use strict";n.d(t,"a",(function(){return F}));var i=n(0),r=n.n(i),a=n(231),o=n(228),s=n(236),p=n(1),c=(n(223),n(224),n(78),n(237),n(232),n(79),n(238),n(80),n(233),n(235)),d=n(234),u=n(230),l=n(229),h=n(226),f=n.n(h),m=n(132),g=n.n(m);function v(e){var t=e.codesTs,n=e.codesJs;return r.a.createElement(u.a,{defaultValue:"js",groupId:"code",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}]},r.a.createElement(l.a,{value:"js"},r.a.createElement(b,{lang:"js",codes:n})),r.a.createElement(l.a,{value:"ts"},r.a.createElement(b,{lang:"ts",codes:t})))}function b(e){var t=e.lang,n=e.codes,a=n.map((function(e){return e.file})),o=Object(i.useState)(a[0]),s=o[0],p=o[1],c=n.find((function(e){return e.file===s}));return r.a.createElement("div",{style:{marginTop:-12}},r.a.createElement("div",{style:{position:"sticky",top:0,backgroundColor:"white",zIndex:1}},a.map((function(e){return r.a.createElement("button",{className:g.a.fileButton+(s===e?" "+g.a.fileButtonSelected:""),key:e,onClick:function(){return p(e)}},e)}))),r.a.createElement(y,{key:c.file,lang:t,code:c.code,highlight:c.highlight}))}function y(e){var t=e.lang,n=e.code,i=e.highlight,a=n.replace("/img/bird.png","bird.png").replace("/audio/boop.wav","boop.wav");return r.a.createElement(c.a,Object(p.a)({},c.b,{theme:d.a,code:a,language:t}),(function(e){var t=e.className,n=e.style,a=e.tokens,o=e.getLineProps,s=e.getTokenProps;return r.a.createElement("div",{className:g.a.codeBlockContent},r.a.createElement("div",{tabIndex:"0",className:f()(t,g.a.codeBlock)},r.a.createElement("div",{className:g.a.codeBlockLines,style:n},a.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=o({line:e,key:t}),a=null==i?void 0:i.flatMap((function(e){if("number"==typeof e)return e;var t=e.split("-").map(Number),n=t[0],i=t[1];return Array.from({length:i-n+1}).map((function(e,t){return t+n}))}));return(null==a?void 0:a.includes(t+1))&&(n.className+=" docusaurus-highlight-code-line"),r.a.createElement("div",n,r.a.createElement("span",{style:{display:"inline-block",width:30,textAlign:"right",marginRight:16,opacity:.5,userSelect:"none"}},t+1),e.map((function(e,t){return r.a.createElement("span",s({token:e,key:t}))})))})))))}))}n(52),n(239),n(81);var w=n(240),x=n.n(w),j=(n(25),n(20),n(54),n(21),n(241),n(242)),P=(n(53),n(225),n(222));function O(e,t,n,i,r,a,o,s,p,c){var d=Object(P.a)(t);d.opacity*=s;var u=c.nativeSpriteMap,l=c.nativeSpriteUtils,h=function(e){var t=i(e);return function(e){var t=Math.PI/180,n=-(e.rotation||0)*t;return function(t){var i=t.x,r=t.y,a=i-e.x,o=r-e.y,s=a*Math.cos(n)+o*Math.sin(n),p=-a*Math.sin(n)+o*Math.cos(n),c=s/e.scaleX,d=p/e.scaleY;return{x:c+e.anchorX,y:d+e.anchorY}}}(d)(t)},f=n(h),m=e.getSprites(t,f,r,a,o),g=[],v=m.map((function(t){if(!t)return t;if("native"===t.type){g.push(t.props.id);var i=u[t.name];if(!i)throw Error('Cannot find Native Sprite "'+t.name+'"');var r=e.childContainers[t.props.id];return r&&"native"===r.type||(r={type:"native",state:i.create({props:t.props,parentGlobalId:p,getState:function(){return r.state},updateState:function(e){r.state=Object.assign(Object.assign({},r.state),e)},utils:l}),cleanup:i.cleanup},e.childContainers[t.props.id]=r),r.state=i.loop({props:t.props,state:r.state,parentGlobalId:p,utils:l}),l.didResize=!1,null}if("custom"===t.type){g.push(t.props.id);var s=!1,m=e.childContainers[t.props.id];return m&&"custom"===m.type||(s=!0,m=S(t,f,e.prevTime),e.childContainers[t.props.id]=m),O(m,t.props,n,h,s,a,o,d.opacity,p+"--"+t.props.id,c)}return t})).filter(k);return function e(t){Object.keys(t).forEach((function(n){if(!g.includes(n)){var i=t[n];"native"===i.type?i.cleanup({state:i.state,parentGlobalId:p}):e(i.childContainers),delete t[n]}}))}(e.childContainers),{id:t.id,baseProps:d,textures:v}}var M=1/60*1e3;function S(e,t,n){var i,r=e.spriteObj,a=e.props,o=[],s=function(e){o.push(e)};return r.init&&(i=r.init({props:a,device:t,updateState:s})),{type:"custom",state:i,childContainers:{},prevTime:n,currentLag:0,getSprites:function(e,t,n,i,a){var p=this,c=function(){p.state=o.reduce((function(e,t){return t(e)}),p.state),o.length=0};c(),!n&&r.loop&&(this.state=r.loop({props:e,state:this.state,device:t,updateState:s})),c();var d=r[i];d||(d="renderPXL"===i&&r.renderXL?r.renderXL:r.render);var u=d({props:e,state:this.state,device:t,updateState:s,extrapolateFactor:a});return c(),u}}}function E(e,t){var n,i=e.deviceHeight>e.deviceWidth,r=!1;return"portrait"in t?(n=i?t.portrait:t.landscape,r=!0):n=t,n.minHeightXL&&e.deviceHeight>=n.minHeightXL||n.minWidthXL&&e.deviceWidth>=n.minWidthXL?r&&i?"renderPXL":"renderXL":r&&i?"renderP":"render"}function k(e){return null!==e}var L={keysDown:{},keysJustPressed:{},pointer:{pressed:!1,justPressed:!1,justReleased:!1,x:0,y:0}};function T(e){return function(e,t){var n=e(t.pointer);return Object.assign(Object.assign({},t),{},{pointer:Object.assign(Object.assign({},t.pointer),{},{x:n.x,y:n.y})})}(e,L)}function z(e){["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"," "].includes(e.key)&&!(e.target instanceof HTMLTextAreaElement||e.target instanceof HTMLInputElement)&&e.preventDefault(),L.keysDown[e.key]=!0,L.keysJustPressed[e.key]=!0}function Y(e){delete L.keysDown[e.key]}function I(){L.pointer.justPressed=!1,L.pointer.pressed=!1}function C(){L={keysDown:L.keysDown,keysJustPressed:{},pointer:Object.assign(Object.assign({},L.pointer),{},{justPressed:!1,justReleased:!1})}}n(243);function W(e,t,n,i){var r=t.width,a=t.height,o=t.widthMargin,s=t.heightMargin,p=t.deviceWidth,c=t.deviceHeight;e.save();var d=Math.min(p/r,c/a),u=r+2*o,l=a+2*s;return e.translate(p/2,c/2),e.scale(d,d),{scale:d,render:function(t){e.clearRect(-p/2/d,-c/2/d,p/d,c/d),e.fillStyle="white",e.fillRect(-u/2,-l/2,u,l),function e(t,n,i,r){var a=t.baseProps,o=t.textures;n.save(),H(n,a),o.forEach((function(t){if("type"in t){var o=R(n);return n.save(),H(n,t.props,a.opacity),function(e,t,n,i){switch(e.type){case"text":return t.text(e.props.font||i,e.props.text,e.props.align,e.props.color),0;case"circle":return t.circle(e.props.radius,e.props.color),0;case"rectangle":return t.rectangle(e.props.width,e.props.height,e.props.color),0;case"line":return t.line(e.props.path,e.props.thickness,e.props.color),0;case"image":var r=n[e.props.fileName];if(!r)throw Error('Cannot find image file "'+e.props.fileName+'"');return t.image(r,e.props.width,e.props.height),0;case"spriteSheet":t.spriteSheet(n[e.props.fileName],e.props.columns,e.props.rows,e.props.index,e.props.width,e.props.height)}}(t,o,i,r),void n.restore()}e(t,n,i,r)})),n.restore()}(t,e,n,i)}}}var X=Math.PI/180,H=function(e,t,n){void 0===n&&(n=1);var i=t.x,r=t.y,a=t.rotation,o=t.scaleX,s=t.scaleY,p=t.anchorX,c=t.anchorY,d=t.opacity;e.translate(i,-r),e.rotate(a*X),e.scale(o,s),e.translate(-p,c),e.globalAlpha=d*n,function(e,t){if(!t)return 0;switch(t.type){case"lineMask":var n=t.path,i=n[0],r=i[0],a=i[1],o=n.slice(1);return e.beginPath(),e.moveTo(r,-a),o.forEach((function(t){var n=t[0],i=t[1];e.lineTo(n,-i)})),e.clip(),0;case"circleMask":return e.beginPath(),e.arc(t.x,-t.y,Math.round(t.radius),0,2*Math.PI),e.clip(),0;case"rectangleMask":e.beginPath(),e.rect(t.x-t.width/2,-t.y-t.height/2,t.width,t.height),e.clip()}}(e,t.mask)};var G,R=function(e){return{circle:function(t,n){e.beginPath(),e.arc(0,0,Math.round(t),0,2*Math.PI),e.fillStyle=n,e.fill(),e.closePath()},rectangle:function(t,n,i){e.fillStyle=i,e.fillRect(-t/2,-n/2,t,n),e.closePath()},line:function(t,n,i){if(!(t.length<2)){var r=t[0],a=r[0],o=r[1],s=t.slice(1);e.strokeStyle=i,e.lineWidth=n,e.beginPath(),e.moveTo(a,-o),s.forEach((function(t){var n=t[0],i=t[1];e.lineTo(n,-i)})),e.stroke()}},text:function(t,n,i,r){var a=t.size+"px "+t.name;e.font=a,e.textBaseline="middle",e.textAlign=i,e.fillStyle=r,e.fillText(n,0,0)},image:function(t,n,i){e.drawImage(t,-n/2,-i/2,n,i)},spriteSheet:function(t,n,i,r,a,o){var s=t.width/n,p=t.height/i,c=r%n,d=Math.floor(r/n)%i;e.drawImage(t,c*s,d*p,s,p,-a/2,-o/2,a,o)}}};function N(e,t,n,i){var r;"portrait"in i?r=t>e?i.portrait:i.landscape:r=i;var a=r,o=a.width,s=a.height,p=a.maxWidthMargin,c=void 0===p?0:p,d=a.maxHeightMargin;if("game-coords"===n)return{width:o,height:s,widthMargin:0,heightMargin:0,deviceWidth:o,deviceHeight:s};var u=o/s;if(u>e/t){var l=e,h=l/u,f=h/s*(void 0===d?0:d),m=Math.min(t,h+2*f);return{width:o,height:s,widthMargin:0,heightMargin:(m-h)/2*(s/h),deviceWidth:l,deviceHeight:m}}var g=t,v=g*u,b=v/o*c,y=Math.min(e,v+2*b);return{width:o,height:s,widthMargin:(y-v)/2*(o/v),heightMargin:0,deviceWidth:y,deviceHeight:g}}var B={name:"sans-serif",size:12};function D(e,t,n,i,r,a,o){var s;void 0===t&&(t=[]),void 0===n&&(n={}),void 0===i&&(i="game-coords");var p=a||document.createElement("canvas");a||document.body.appendChild(p);var c,d,u,l,h,f=p.getContext("2d",{alpha:!1}),m=!0;document.addEventListener("keydown",(function(e){m&&z(e)}),!1),document.addEventListener("keyup",(function(e){m&&Y(e)}),!1),window.addEventListener("resize",v,!1);var g={didResize:!1,scale:1,gameXToPlatformX:function(e){return e},gameYToPlatformY:function(e){return e}};function v(t){if(!c||(f.restore(),document.removeEventListener("pointerdown",d),document.removeEventListener("pointermove",u),document.removeEventListener("pointerup",l),document.removeEventListener("pointerout",I),!0!==t)){var n=function(e,t,n,i){var r=N(e,t,n,i);return G=r,r}((null==o?void 0:o.width)||window.innerWidth,(null==o?void 0:o.height)||window.innerHeight,i,e.props.size);p.width=n.deviceWidth,p.height=n.deviceHeight;var r=e.props.defaultFont||B,a=W(f,n,y,r);h=a.scale,k.ref=a.render,g.gameXToPlatformX=function(e){var t=e.canvasOffsetLeft,n=e.widthMargin,i=e.scale,r=e.width;return function(e){return t+i*(e+r/2+n)}}({canvasOffsetLeft:p.offsetLeft,width:n.width,widthMargin:n.widthMargin,scale:h}),g.gameYToPlatformY=function(e){var t=e.canvasOffsetTop,n=e.heightMargin,i=e.scale,r=e.height;return function(e){return t-i*(e-r/2-n)}}({canvasOffsetTop:p.offsetTop,height:n.height,heightMargin:n.heightMargin,scale:h}),g.didResize=!0,g.scale=h;var s=function(e){var t=e.canvasOffsetLeft,n=e.widthMargin,i=e.scale,r=e.width;return function(e){return(e.clientX-t)/i-n-r/2}}({canvasOffsetLeft:p.offsetLeft,width:n.width,widthMargin:n.widthMargin,scale:h}),v=function(e){var t=e.canvasOffsetTop,n=e.heightMargin,i=e.scale,r=e.height;return function(e){return-(e.clientY-t)/i+n+r/2}}({canvasOffsetTop:p.offsetTop,height:n.height,heightMargin:n.heightMargin,scale:h}),b=function(e,t){return e>n.width/2+n.widthMargin||e<-n.width/2-n.widthMargin||t>n.height/2+n.heightMargin||t<-n.height/2-n.heightMargin};d=function(e){var t=s(e),n=v(e);b(t,n)?m=!1:(m=!0,function(e,t){L.pointer={pressed:!0,justPressed:!0,justReleased:!1,x:e,y:t}}(t,n))},u=function(e){var t=s(e),n=v(e);b(t,n)||function(e,t){L.pointer.x=e,L.pointer.y=t}(t,n)},l=function(e){var t=s(e),n=v(e);b(t,n)?I():function(e,t){L.pointer.justPressed=!1,L.pointer.pressed=!1,L.pointer.justReleased=!0,L.pointer.x=e,L.pointer.y=t}(t,n)},document.addEventListener("pointerdown",d,!1),document.addEventListener("pointermove",u,!1),document.addEventListener("pointerup",l,!1),document.addEventListener("pointerout",I,!1),c=n}}var b={},y={},w={getGetDevice:U(b,N((null==o?void 0:o.width)||window.innerWidth,(null==o?void 0:o.height)||window.innerHeight,i,e.props.size))},k={ref:null};v();var T=!1,X=function(){var e=Object(j.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],(n.audioFileNames||[]).forEach((function(e){b[e]=new Audio(e),t.push(new Promise((function(t,n){b[e].addEventListener("canplaythrough",t),b[e].addEventListener("error",n)}))),b[e].load()})),(n.imageFileNames||[]).forEach((function(e){y[e]=new Image,t.push(new Promise((function(t,n){y[e].addEventListener("load",t),y[e].addEventListener("error",n),y[e].src=e})))})),e.next=5,Promise.all(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return null===(s=k.ref)||void 0===s||s.call(k,{id:"Loading",baseProps:Object(P.a)({}),textures:t}),{cleanup:function(){p.width=p.width,a||document.body.removeChild(p),T=!0,document.removeEventListener("keydown",z,!1),document.removeEventListener("keyup",Y,!1),window.removeEventListener("resize",v,!1),v(!0)},loadPromise:X().then((function(){var t=function e(){document.removeEventListener("keydown",e,!1),document.removeEventListener("pointerdown",e,!1),Object.values(b).forEach((function(e){e.muted=!0,e.play().then((function(){e.pause(),e.muted=!1}))}))};document.addEventListener("keydown",t,!1),document.addEventListener("pointerdown",t,!1);var n=function(e,t,n,i){var r=n||game.Game(game.gameProps),a=function(e){return{x:e.x,y:e.y}},o=e.getGetDevice(),s=o(a),p=S(r,o(a),0),c=i||r.props.size,d=E(s.size,c),u=0,l=0,h=O(p,r.props,o,a,!0,d,0,1,r.props.id,t);return{initTextures:h,getNextFrameTextures:function(n,i){var o=n-u;for(u=n,l+=o;l>=M;){var s=(l-=M)/M,d=e.getGetDevice(),f=E(d(a).size,c);h=O(p,r.props,d,a,!1,f,s,1,r.props.id,t),i()}return h}}}(w,{nativeSpriteMap:r||{},nativeSpriteUtils:g},e),i=n.initTextures,a=n.getNextFrameTextures,o=null;!function e(t){var n;null===(n=k.ref)||void 0===n||n.call(k,t),window.requestAnimationFrame((function(t){T||(null===o&&(o=t-1/60),e(a(t-o,C)))}))}(i)})),audioElements:b}}function U(e,t){var n,i={log:console.log,random:Math.random,timer:(n={},{start:function(e,t){var i=window.setTimeout((function(){delete n[r],e()}),t),r=String(i);return n[r]={timeoutId:i,callback:e,timeStartedMs:Date.now(),timeRemainingMs:t,isPaused:!1},r},pause:function(e){var t=n[e];if(t&&!t.isPaused){var i=Date.now()-t.timeStartedMs;t.timeRemainingMs-=i,t.isPaused=!0,window.clearTimeout(t.timeoutId)}},resume:function(e){var t=n[e];if(t&&t.isPaused){t.timeStartedMs=Date.now(),t.isPaused=!1;var i=window.setTimeout((function(){delete n[e],t.callback()}),t.timeRemainingMs);t.timeoutId=i}},cancel:function(e){var t=n[e];t&&(window.clearTimeout(t.timeoutId),delete n[e])}}),audio:function(t){function n(n){var i=e[t];if(!i)throw Error("Cannot find audio file "+t);return n&&!i.paused&&(i=new Audio(t)),i}return{getPosition:function(){return n(!1).currentTime},play:function(e,t){var i=n(!0);i.play(),void 0!==e&&(i.currentTime=e),t&&(i.loop=!0)},pause:function(){n(!1).pause()}}},network:{get:function(e,t){fetch(e).then((function(e){return e.json()})).then(t)},post:function(e,t,n){fetch(e,{method:"POST",body:JSON.stringify(t)}).then((function(e){return e.json()})).then(n)},put:function(e,t,n){fetch(e,{method:"PUT",body:JSON.stringify(t)}).then((function(e){return e.json()})).then(n)},delete:function(e,t){fetch(e,{method:"DELETE"}).then((function(e){return e.json()})).then(t)}},storage:{getStore:function(){for(var e,t={},n=0;n<localStorage.length;n++){var i=localStorage.key(n);i&&(t[i]=null!==(e=localStorage.getItem(i))&&void 0!==e?e:void 0)}return t},setStore:function(e){Object.entries(e).forEach((function(e){var t=e[0],n=e[1];void 0===n?localStorage.removeItem(t):localStorage.setItem(t,n)}))}},alert:{ok:function(e,t){alert(e),null==t||t()},okCancel:function(e,t){t(confirm(e))}},clipboard:{copy:function(e,t){navigator.clipboard?navigator.clipboard.writeText(e).then((function(){t()})).catch((function(e){t(e)})):t(new Error(window.isSecureContext?"Couldn't access clipboard":"Clipboard only available on HTTPS or localhost"))}}};return function(){var e=Object.assign(Object.assign({},i),{},{size:G||t,now:function(){return new Date}});return function(t){return Object.assign(Object.assign({},e),{},{inputs:T(t)})}}}var A=n(220);function J(e){var t=e.Game,n=e.gameProps,a=e.showReload,o=e.assets,s=function(){var e=Object(i.useRef)(null),t=Object(i.useState)(null),n=t[0],r=t[1],a=function(){r(e.current.getBoundingClientRect())};Object(i.useEffect)((function(){return window.addEventListener("resize",a,!1),function(){return window.removeEventListener("resize",a,!1)}}),[]);var o=Object(i.useCallback)((function(t){null!==t&&(e.current=t,a())}),[]);return Object(i.useEffect)((function(){document.getElementById("iphone-img").onload=function(){a()}}),[]),[n,o]}(),p=s[0],c=s[1],d=Object(i.useState)(0),u=d[0],l=d[1],h=0,f=0,m=0;if(p&&p.height&&p.width){p.width/p.height>375/667?(f=p.height*(667/900),h=f*(375/667)):(h=p.width*(375/460),f=h/(375/667));var v=n.size.maxHeightMargin?0:.08*f;m=(p.height-f)/2+v}return Object(i.useEffect)((function(){if(h&&f){var e=document.getElementById("myCanvas"),i=D(t(n),[A.b.text({color:"black",text:"Loading..."})],o,"scale-up",{},e,{width:h,height:f}).cleanup;return function(){i()}}}),[h,f,u]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{ref:c,style:{height:"100%",width:"100%",display:"flex",justifyContent:"center"}},r.a.createElement("img",{id:"iphone-img",style:{userSelect:"none",objectFit:"contain",maxHeight:"100%"},src:"/img/iPhone8-Portrait-SpaceGray.png"})),a&&r.a.createElement("img",{className:g.a.refresh,src:"/img/reload.svg",width:20,height:20,onClick:function(){return l((function(e){return e+1}))}}),r.a.createElement("canvas",{id:"myCanvas",style:{position:"absolute",marginTop:m},width:h,height:f}))}function F(e){var t=e.part,n=e.MDXContent,i=e.codesTs,p=e.codesJs,c=e.Game,d=e.gameProps,u=e.image,l=e.isEnd,h=e.assets,f=i&&p,m=c&&d?r.a.createElement(s.a,{fallback:r.a.createElement("div",null,"Preview")},(function(){return r.a.createElement(J,{Game:c,gameProps:d,showReload:f,assets:h})})):r.a.createElement("div",null,r.a.createElement("img",{src:u}));return r.a.createElement(a.a,{title:"Tutorial - Part "+t,noFooter:!0},r.a.createElement("div",{style:{display:"flex",minWidth:1024,height:"calc(100vh - 60px)"}},r.a.createElement("div",{style:{flex:"1",overflow:"auto",padding:16,borderRight:"1px solid #ededed"}},r.a.createElement(n,null),r.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},t>1?r.a.createElement(o.a,{to:"/tutorial/"+(t-1)},"Back"):r.a.createElement("div",null),l?r.a.createElement("div",null):r.a.createElement(o.a,{to:"/tutorial/"+(t+1)},"Next"))),f?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{flex:"1",overflow:"auto",borderRight:"1px solid #ededed"}},r.a.createElement(v,{codesTs:i,codesJs:p})),r.a.createElement("div",{style:{flex:"1",display:"flex",justifyContent:"center"}},m)):r.a.createElement("div",{style:{flex:"2",display:"flex",justifyContent:"center"}},m)))}},245:function(e,t,n){"use strict";function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function r(e){var t=0;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}(e)))return function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}};throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(t=e[Symbol.iterator]()).next.bind(t)}n.d(t,"a",(function(){return r}))}}]);