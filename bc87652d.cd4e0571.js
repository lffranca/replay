(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{154:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return d}));var i=n(1),r=n(9),o=(n(0),n(220)),a={},s={id:"tutorial/16",title:"16",description:"# 16 - Score",source:"@site/docs/tutorial/16.md",permalink:"/docs/tutorial/16",editUrl:"https://github.com/edbentley/replay/edit/master/website/docs/tutorial/16.md"},p=[],c={rightToc:p};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"16---score"},"16 - Score"),Object(o.b)("p",null,"Let's add a score to count how many pipes the bird managed to fly past."),Object(o.b)("p",null,"In the ",Object(o.b)("inlineCode",{parentName:"p"},"Level")," Sprite we add a ",Object(o.b)("inlineCode",{parentName:"p"},"score")," field to the state and increment it whenever we pass a pipe. Then we render it in the top-left corner with a ",Object(o.b)("inlineCode",{parentName:"p"},"t.text")," Texture."),Object(o.b)("p",null,"Notice the ",Object(o.b)("inlineCode",{parentName:"p"},"align")," prop on the text Texture: by default, Sprites have an anchor point in their center, which defines how they're positioned and rotate. Setting ",Object(o.b)("inlineCode",{parentName:"p"},'align: "left"')," moves the left edge of the text to the Sprite's anchor point, providing a left text align for the score. The ",Object(o.b)("inlineCode",{parentName:"p"},"x")," position of the Texture is now the left side of it, not the center."))}d.isMDXComponent=!0},202:function(e,t,n){"use strict";n.r(t);var i=n(0),r=n.n(i),o=n(226),a=(n(52),n(219)),s=n(244),p=Object(a.a)({render:function(){return[a.b.rectangle({width:50,height:40,color:"yellow"})]}});function c(e){return"keysDown"in e}var d=Object(a.a)({render:function(e){var t=e.props,n=u(e.device.size,t.pipe.gapY),i=n.yUpperTop,r=n.yUpperBottom,o=n.yLowerTop,s=n.yLowerBottom;return[a.b.rectangle({color:"green",width:40,height:i-r,y:(i+r)/2}),a.b.rectangle({color:"green",width:40,height:o-s,y:(o+s)/2})]}});function u(e,t){return{yUpperTop:e.height/2+e.heightMargin,yUpperBottom:t+85,yLowerTop:t-85,yLowerBottom:-e.height/2-e.heightMargin}}var h=Object(a.a)({init:function(e){var t=e.device;return{birdY:10,birdGravity:-12,pipes:e.props.paused?[]:[l(t)],score:0}},loop:function(e){var t=e.props,n=e.state,i=e.device;if(t.paused)return n;var r=i.inputs,o=n.birdGravity,a=n.birdY,p=n.pipes,d=n.score;return a-=o+=.8,(r.pointer.justPressed||c(r)&&r.keysJustPressed[" "])&&(o=-12),p[p.length-1].x<140&&(p=[].concat(p,[l(i)]).filter((function(e){return e.x>-(i.size.width+i.size.widthMargin+40)}))),function(e,t,n){if(e-20<-(t.height/2+t.heightMargin)||e+20>t.height/2+t.heightMargin)return!0;for(var i,r=function(){var n=i.value;if(n.x>45||n.x<-45)return"continue";var r=u(t,n.gapY),o=r.yUpperTop,a=r.yUpperBottom,s=r.yLowerTop,p=r.yLowerBottom,c={x:n.x,y:(o+a)/2,width:40,height:o-a},d={x:n.x,y:(s+p)/2,width:40,height:s-p};return[{x:25,y:e+20},{x:25,y:e-20},{x:0,y:e+20},{x:0,y:e-20},{x:-25,y:e+20},{x:-25,y:e-20}].some((function(e){return f(e,c)||f(e,d)}))?{v:!0}:void 0},o=Object(s.a)(n);!(i=o()).done;){var a=r();switch(a){case"continue":continue;default:if("object"==typeof a)return a.v}}return!1}(a,i.size,p)&&t.gameOver(),{birdGravity:o,birdY:a,pipes:p=p.map((function(e){var t=e.passed;return!t&&e.x<-45&&(t=!0,d++),Object.assign(Object.assign({},e),{},{passed:t,x:e.x-2})})),score:d}},render:function(e){var t=e.state,n=e.device,i=n.size;return[a.b.rectangle({color:"#add8e6",width:i.width+2*i.widthMargin,height:i.height+2*i.heightMargin}),p({id:"bird",x:0,y:t.birdY,rotation:Math.max(-30,3*t.birdGravity-30)})].concat(t.pipes.map((function(e,t){return d({id:"pipe-"+t,pipe:e,x:e.x})})),[a.b.text({text:"Score: "+t.score,color:"white",x:-n.size.width/2+10,y:n.size.height/2+n.size.heightMargin-80,align:"left"})])}});function l(e){var t=(e.size.height+2*e.size.heightMargin-340)*(e.random()-.5);return{x:e.size.width+e.size.widthMargin+50,gapY:t,passed:!1}}function f(e,t){return e.x>t.x-t.width/2&&e.x<t.x+t.width/2&&e.y>t.y-t.height/2&&e.y<t.y+t.height/2}var g=Object(a.a)({render:function(e){var t=e.props,n=e.device.inputs;return(n.pointer.justReleased||c(n)&&n.keysJustPressed[" "])&&t.start(),[a.b.text({text:c(n)?"Click or Space Bar to Start":"Tap to Start",color:"white",y:100})]}}),v=Object(a.a)({init:function(){return{view:"menu",attempt:0}},render:function(e){var t=e.state,n=e.updateState,i="menu"===t.view;return[h({id:"level-"+t.attempt,paused:i,gameOver:function(){n((function(e){return Object.assign(Object.assign({},e),{},{view:"menu"})}))}}),i?g({id:"menu",start:function(){n((function(e){return Object.assign(Object.assign({},e),{},{view:"level",attempt:e.attempt+1})}))}}):null]}}),m={id:"Game",size:{width:400,height:600,maxHeightMargin:150},defaultFont:{name:"Helvetica",size:24}},b=n(154);t.default=function(){return r.a.createElement(o.a,{part:16,MDXContent:b.default,codesTs:[{file:"level.ts",code:'import { makeSprite, t, Device, DeviceSize } from "@replay/core";\nimport { WebInputs } from "@replay/web";\nimport { iOSInputs } from "@replay/swift";\nimport { Bird, birdWidth, birdHeight } from "./bird";\nimport { isWebInput } from "./utils";\nimport { Pipe, PipeT, pipeWidth, pipeGap, getPipeYPositions } from "./pipe";\n\nconst speedX = 2;\nconst birdX = 0;\n\ntype LevelProps = {\n  paused: boolean;\n  gameOver: () => void;\n};\n\ntype LevelState = {\n  birdY: number;\n  birdGravity: number;\n  pipes: PipeT[];\n  score: number;\n};\n\nexport const Level = makeSprite<LevelProps, LevelState, WebInputs | iOSInputs>({\n  init({ device, props }) {\n    return {\n      birdY: 10,\n      birdGravity: -12,\n      pipes: props.paused ? [] : [newPipe(device)],\n      score: 0,\n    };\n  },\n\n  loop({ props, state, device }) {\n    if (props.paused) {\n      return state;\n    }\n\n    const { inputs } = device;\n\n    let { birdGravity, birdY, pipes, score } = state;\n\n    birdGravity += 0.8;\n    birdY -= birdGravity;\n\n    if (\n      inputs.pointer.justPressed ||\n      (isWebInput(inputs) && inputs.keysJustPressed[" "])\n    ) {\n      birdGravity = -12;\n    }\n\n    const lastPipe = pipes[pipes.length - 1];\n    if (lastPipe.x < 140) {\n      pipes = [...pipes, newPipe(device)]\n        // Remove the pipes off screen on left\n        .filter(\n          (pipe) =>\n            pipe.x > -(device.size.width + device.size.widthMargin + pipeWidth)\n        );\n    }\n\n    if (didHitPipe(birdY, device.size, pipes)) {\n      props.gameOver();\n    }\n\n    // Move pipes to the left\n    pipes = pipes.map((pipe) => {\n      let passed = pipe.passed;\n      if (!passed && pipe.x < birdX - birdWidth / 2 - pipeWidth / 2) {\n        // Mark pipe as having passed bird\'s x position\n        passed = true;\n        score++;\n      }\n      return { ...pipe, passed, x: pipe.x - speedX };\n    });\n\n    return {\n      birdGravity,\n      birdY,\n      pipes,\n      score,\n    };\n  },\n\n  render({ state, device }) {\n    const { size } = device;\n    return [\n      t.rectangle({\n        color: "#add8e6",\n        width: size.width + size.widthMargin * 2,\n        height: size.height + size.heightMargin * 2,\n      }),\n      Bird({\n        id: "bird",\n        x: birdX,\n        y: state.birdY,\n        rotation: Math.max(-30, state.birdGravity * 3 - 30),\n      }),\n      ...state.pipes.map((pipe, index) =>\n        Pipe({\n          id: `pipe-${index}`,\n          pipe,\n          x: pipe.x,\n        })\n      ),\n      t.text({\n        text: `Score: ${state.score}`,\n        color: "white",\n        x: -device.size.width / 2 + 10,\n        y: device.size.height / 2 + device.size.heightMargin - 80,\n        align: "left",\n      }),\n    ];\n  },\n});\n\nfunction newPipe(device: Device<{}>): PipeT {\n  const height = device.size.height + device.size.heightMargin * 2;\n  const randomY = (height - pipeGap * 2) * (device.random() - 0.5);\n\n  return {\n    x: device.size.width + device.size.widthMargin + 50,\n    gapY: randomY,\n    passed: false,\n  };\n}\n\nfunction didHitPipe(birdY: number, size: DeviceSize, pipes: PipeT[]) {\n  if (\n    birdY - birdHeight / 2 < -(size.height / 2 + size.heightMargin) ||\n    birdY + birdHeight / 2 > size.height / 2 + size.heightMargin\n  ) {\n    // hit bottom or top\n    return true;\n  }\n  for (const pipe of pipes) {\n    if (\n      pipe.x > birdX + birdWidth / 2 + pipeWidth / 2 ||\n      pipe.x < birdX - birdWidth / 2 - pipeWidth / 2\n    ) {\n      // bird isn\'t at pipe\n      continue;\n    }\n    const {\n      yUpperTop,\n      yUpperBottom,\n      yLowerTop,\n      yLowerBottom,\n    } = getPipeYPositions(size, pipe.gapY);\n    const topPipeRect = {\n      x: pipe.x,\n      y: (yUpperTop + yUpperBottom) / 2,\n      width: pipeWidth,\n      height: yUpperTop - yUpperBottom,\n    };\n    const bottomPipeRect = {\n      x: pipe.x,\n      y: (yLowerTop + yLowerBottom) / 2,\n      width: pipeWidth,\n      height: yLowerTop - yLowerBottom,\n    };\n    // Check a few points at edges of bird\n    const birdPoints = [\n      { x: birdX + birdWidth / 2, y: birdY + birdHeight / 2 },\n      { x: birdX + birdWidth / 2, y: birdY - birdHeight / 2 },\n      { x: birdX, y: birdY + birdHeight / 2 },\n      { x: birdX, y: birdY - birdHeight / 2 },\n      { x: birdX - birdWidth / 2, y: birdY + birdHeight / 2 },\n      { x: birdX - birdWidth / 2, y: birdY - birdHeight / 2 },\n    ];\n    if (\n      birdPoints.some(\n        (point) =>\n          pointInRect(point, topPipeRect) || pointInRect(point, bottomPipeRect)\n      )\n    ) {\n      // Bird hit a pipe!\n      return true;\n    }\n  }\n  return false;\n}\n\nfunction pointInRect(\n  point: { x: number; y: number },\n  rect: { x: number; y: number; height: number; width: number }\n) {\n  return (\n    point.x > rect.x - rect.width / 2 &&\n    point.x < rect.x + rect.width / 2 &&\n    point.y > rect.y - rect.height / 2 &&\n    point.y < rect.y + rect.height / 2\n  );\n}\n',highlight:[20,29,40,72,81,"106-112"]}],codesJs:[{file:"level.js",code:'import { makeSprite, t } from "@replay/core";\nimport { Bird, birdWidth, birdHeight } from "./bird";\nimport { isWebInput } from "./utils";\nimport { Pipe, pipeWidth, pipeGap, getPipeYPositions } from "./pipe";\n\nconst speedX = 2;\nconst birdX = 0;\n\nexport const Level = makeSprite({\n  init({ device, props }) {\n    return {\n      birdY: 10,\n      birdGravity: -12,\n      pipes: props.paused ? [] : [newPipe(device)],\n      score: 0,\n    };\n  },\n\n  loop({ props, state, device }) {\n    if (props.paused) {\n      return state;\n    }\n\n    const { inputs } = device;\n\n    let { birdGravity, birdY, pipes, score } = state;\n\n    birdGravity += 0.8;\n    birdY -= birdGravity;\n\n    if (\n      inputs.pointer.justPressed ||\n      (isWebInput(inputs) && inputs.keysJustPressed[" "])\n    ) {\n      birdGravity = -12;\n    }\n\n    const lastPipe = pipes[pipes.length - 1];\n    if (lastPipe.x < 140) {\n      pipes = [...pipes, newPipe(device)]\n        // Remove the pipes off screen on left\n        .filter(\n          (pipe) =>\n            pipe.x > -(device.size.width + device.size.widthMargin + pipeWidth)\n        );\n    }\n\n    if (didHitPipe(birdY, device.size, pipes)) {\n      props.gameOver();\n    }\n\n    // Move pipes to the left\n    pipes = pipes.map((pipe) => {\n      let passed = pipe.passed;\n      if (!passed && pipe.x < birdX - birdWidth / 2 - pipeWidth / 2) {\n        // Mark pipe as having passed bird\'s x position\n        passed = true;\n        score++;\n      }\n      return { ...pipe, passed, x: pipe.x - speedX };\n    });\n\n    return {\n      birdGravity,\n      birdY,\n      pipes,\n      score,\n    };\n  },\n\n  render({ state, device }) {\n    const { size } = device;\n    return [\n      t.rectangle({\n        color: "#add8e6",\n        width: size.width + size.widthMargin * 2,\n        height: size.height + size.heightMargin * 2,\n      }),\n      Bird({\n        id: "bird",\n        x: birdX,\n        y: state.birdY,\n        rotation: Math.max(-30, state.birdGravity * 3 - 30),\n      }),\n      ...state.pipes.map((pipe, index) =>\n        Pipe({\n          id: `pipe-${index}`,\n          pipe,\n          x: pipe.x,\n        })\n      ),\n      t.text({\n        text: `Score: ${state.score}`,\n        color: "white",\n        x: -device.size.width / 2 + 10,\n        y: device.size.height / 2 + device.size.heightMargin - 80,\n        align: "left",\n      }),\n    ];\n  },\n});\n\nfunction newPipe(device) {\n  const height = device.size.height + device.size.heightMargin * 2;\n  const randomY = (height - pipeGap * 2) * (device.random() - 0.5);\n\n  return {\n    x: device.size.width + device.size.widthMargin + 50,\n    gapY: randomY,\n    passed: false,\n  };\n}\n\nfunction didHitPipe(birdY, size, pipes) {\n  if (\n    birdY - birdHeight / 2 < -(size.height / 2 + size.heightMargin) ||\n    birdY + birdHeight / 2 > size.height / 2 + size.heightMargin\n  ) {\n    // hit bottom or top\n    return true;\n  }\n  for (const pipe of pipes) {\n    if (\n      pipe.x > birdX + birdWidth / 2 + pipeWidth / 2 ||\n      pipe.x < birdX - birdWidth / 2 - pipeWidth / 2\n    ) {\n      // bird isn\'t at pipe\n      continue;\n    }\n    const {\n      yUpperTop,\n      yUpperBottom,\n      yLowerTop,\n      yLowerBottom,\n    } = getPipeYPositions(size, pipe.gapY);\n    const topPipeRect = {\n      x: pipe.x,\n      y: (yUpperTop + yUpperBottom) / 2,\n      width: pipeWidth,\n      height: yUpperTop - yUpperBottom,\n    };\n    const bottomPipeRect = {\n      x: pipe.x,\n      y: (yLowerTop + yLowerBottom) / 2,\n      width: pipeWidth,\n      height: yLowerTop - yLowerBottom,\n    };\n    // Check a few points at edges of bird\n    const birdPoints = [\n      { x: birdX + birdWidth / 2, y: birdY + birdHeight / 2 },\n      { x: birdX + birdWidth / 2, y: birdY - birdHeight / 2 },\n      { x: birdX, y: birdY + birdHeight / 2 },\n      { x: birdX, y: birdY - birdHeight / 2 },\n      { x: birdX - birdWidth / 2, y: birdY + birdHeight / 2 },\n      { x: birdX - birdWidth / 2, y: birdY - birdHeight / 2 },\n    ];\n    if (\n      birdPoints.some(\n        (point) =>\n          pointInRect(point, topPipeRect) || pointInRect(point, bottomPipeRect)\n      )\n    ) {\n      // Bird hit a pipe!\n      return true;\n    }\n  }\n  return false;\n}\n\nfunction pointInRect(point, rect) {\n  return (\n    point.x > rect.x - rect.width / 2 &&\n    point.x < rect.x + rect.width / 2 &&\n    point.y > rect.y - rect.height / 2 &&\n    point.y < rect.y + rect.height / 2\n  );\n}\n',highlight:[15,26,58,67,"92-98"]}],Game:v,gameProps:m})}},219:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}));n(52);var i=n(221),r={text:function(e){return{type:"text",props:Object.assign(Object.assign({testId:e.testId},Object(i.a)(e)),{},{font:e.font,text:e.text,align:e.align||"center",color:e.color})}},circle:function(e){return{type:"circle",props:Object.assign(Object.assign({testId:e.testId},Object(i.a)(e)),{},{radius:e.radius,color:e.color})}},rectangle:function(e){return{type:"rectangle",props:Object.assign(Object.assign({testId:e.testId},Object(i.a)(e)),{},{width:e.width,height:e.height,color:e.color})}},line:function(e){var t;return{type:"line",props:Object.assign(Object.assign({testId:e.testId},Object(i.a)(e)),{},{color:e.color,thickness:null!==(t=e.thickness)&&void 0!==t?t:1,path:e.path})}},image:function(e){return{type:"image",props:Object.assign(Object.assign({testId:e.testId},Object(i.a)(e)),{},{fileName:e.fileName,width:e.width,height:e.height})}},spriteSheet:function(e){return{type:"spriteSheet",props:Object.assign(Object.assign({testId:e.testId},Object(i.a)(e)),{},{fileName:e.fileName,columns:e.columns,rows:e.rows,index:e.index,width:e.width,height:e.height})}}};function o(e){return function(t){return{type:"custom",spriteObj:e,props:t}}}},221:function(e,t,n){"use strict";function i(e){var t,n,i;return{x:e.x||0,y:e.y||0,rotation:e.rotation||0,opacity:Math.min(1,Math.max(0,null!==(t=e.opacity)&&void 0!==t?t:1)),scaleX:null!==(n=e.scaleX)&&void 0!==n?n:1,scaleY:null!==(i=e.scaleY)&&void 0!==i?i:1,anchorX:e.anchorX||0,anchorY:e.anchorY||0}}n.d(t,"a",(function(){return i}))},226:function(e,t,n){"use strict";n.d(t,"a",(function(){return A}));var i=n(0),r=n.n(i),o=n(230),a=n(227),s=n(235),p=n(1),c=(n(222),n(223),n(78),n(236),n(231),n(79),n(237),n(80),n(232),n(234)),d=n(233),u=n(229),h=n(228),l=n(225),f=n.n(l),g=n(132),v=n.n(g);function m(e){var t=e.codesTs,n=e.codesJs;return r.a.createElement(u.a,{defaultValue:"js",groupId:"code",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}]},r.a.createElement(h.a,{value:"js"},r.a.createElement(b,{lang:"js",codes:n})),r.a.createElement(h.a,{value:"ts"},r.a.createElement(b,{lang:"ts",codes:t})))}function b(e){var t=e.lang,n=e.codes,o=n.map((function(e){return e.file})),a=Object(i.useState)(o[0]),s=a[0],p=a[1],c=n.find((function(e){return e.file===s}));return r.a.createElement("div",{style:{marginTop:-12}},r.a.createElement("div",{style:{position:"sticky",top:0,backgroundColor:"white",zIndex:1}},o.map((function(e){return r.a.createElement("button",{className:v.a.fileButton+(s===e?" "+v.a.fileButtonSelected:""),key:e,onClick:function(){return p(e)}},e)}))),r.a.createElement(y,{key:c.file,lang:t,code:c.code,highlight:c.highlight}))}function y(e){var t=e.lang,n=e.code,i=e.highlight,o=n.replace("/img/bird.png","bird.png").replace("/audio/boop.wav","boop.wav");return r.a.createElement(c.a,Object(p.a)({},c.b,{theme:d.a,code:o,language:t}),(function(e){var t=e.className,n=e.style,o=e.tokens,a=e.getLineProps,s=e.getTokenProps;return r.a.createElement("div",{className:v.a.codeBlockContent},r.a.createElement("div",{tabIndex:"0",className:f()(t,v.a.codeBlock)},r.a.createElement("div",{className:v.a.codeBlockLines,style:n},o.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=a({line:e,key:t}),o=null==i?void 0:i.flatMap((function(e){if("number"==typeof e)return e;var t=e.split("-").map(Number),n=t[0],i=t[1];return Array.from({length:i-n+1}).map((function(e,t){return t+n}))}));return(null==o?void 0:o.includes(t+1))&&(n.className+=" docusaurus-highlight-code-line"),r.a.createElement("div",n,r.a.createElement("span",{style:{display:"inline-block",width:30,textAlign:"right",marginRight:16,opacity:.5,userSelect:"none"}},t+1),e.map((function(e,t){return r.a.createElement("span",s({token:e,key:t}))})))})))))}))}n(52),n(238),n(81);var w=n(239),x=n.n(w),j=(n(25),n(20),n(54),n(21),n(240),n(241)),P=(n(53),n(224),n(221));function O(e,t,n,i,r,o,a,s,p,c){var d=Object(P.a)(t);d.opacity*=s;var u=c.nativeSpriteMap,h=c.nativeSpriteUtils,l=function(e){var t=i(e);return function(e){var t=e.x,n=e.y,i=Math.PI/180,r=-(e.rotation||0)*i;return function(i){var o=i.x,a=i.y,s=(o-t)*Math.cos(r)+(a-n)*Math.sin(r),p=-(o-t)*Math.sin(r)+(a-n)*Math.cos(r),c=e.x+(s-e.x)/e.scaleX,d=e.y+(p-e.y)/e.scaleY;return{x:c+e.anchorX,y:d+e.anchorY}}}(d)(t)},f=n(l),g=e.getSprites(t,f,r,o,a),v=[],m=g.map((function(t){if(!t)return t;if("native"===t.type){v.push(t.props.id);var i=u[t.name];if(!i)throw Error('Cannot find Native Sprite "'+t.name+'"');var r=e.childContainers[t.props.id];return r&&"native"===r.type||(r={type:"native",state:i.create({props:t.props,parentGlobalId:p,getState:function(){return r.state},updateState:function(e){r.state=Object.assign(Object.assign({},r.state),e)},utils:h}),cleanup:i.cleanup},e.childContainers[t.props.id]=r),r.state=i.loop({props:t.props,state:r.state,parentGlobalId:p,utils:h}),h.didResize=!1,null}if("custom"===t.type){v.push(t.props.id);var s=!1,g=e.childContainers[t.props.id];return g&&"custom"===g.type||(s=!0,g=E(t,f,e.prevTime),e.childContainers[t.props.id]=g),O(g,t.props,n,l,s,o,a,d.opacity,p+"--"+t.props.id,c)}return t})).filter(L);return function e(t){Object.keys(t).forEach((function(n){if(!v.includes(n)){var i=t[n];"native"===i.type?i.cleanup({state:i.state,parentGlobalId:p}):e(i.childContainers),delete t[n]}}))}(e.childContainers),{id:t.id,baseProps:d,textures:m}}function E(e,t,n){var i,r=e.spriteObj,o=e.props,a=[],s=function(e){a.push(e)};return r.init&&(i=r.init({props:o,device:t,updateState:s})),{type:"custom",state:i,childContainers:{},prevTime:n,currentLag:0,getSprites:function(e,t,n,i,o){var p=this,c=o-this.prevTime;this.prevTime=o,this.currentLag+=c;var d=0,u=function(){p.state=a.reduce((function(e,t){return t(e)}),p.state),a.length=0};if(u(),!n&&r.loop){for(;this.currentLag>=1/60*1e3;)this.state=r.loop({props:e,state:this.state,device:t,updateState:s}),this.currentLag-=1/60*1e3;d=this.currentLag/(1/60*1e3)}u();var h=r[i];h||(h="renderPXL"===i&&r.renderXL?r.renderXL:r.render);var l=h({props:e,state:this.state,device:t,updateState:s,extrapolateFactor:d});return u(),l}}}function M(e,t){var n,i=e.deviceHeight>e.deviceWidth,r=!1;return"portrait"in t?(n=i?t.portrait:t.landscape,r=!0):n=t,n.minHeightXL&&e.deviceHeight>=n.minHeightXL||n.minWidthXL&&e.deviceWidth>=n.minWidthXL?r&&i?"renderPXL":"renderXL":r&&i?"renderP":"render"}function L(e){return null!==e}var z={keysDown:{},keysJustPressed:{},pointer:{pressed:!1,justPressed:!1,justReleased:!1,x:0,y:0}};function T(e){return function(e,t){var n=e(t.pointer);return Object.assign(Object.assign({},t),{},{pointer:Object.assign(Object.assign({},t.pointer),{},{x:n.x,y:n.y})})}(e,z)}function S(e){["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"," "].includes(e.key)&&!(e.target instanceof HTMLTextAreaElement||e.target instanceof HTMLInputElement)&&e.preventDefault(),z.keysDown[e.key]=!0,z.keysJustPressed[e.key]=!0}function k(e){delete z.keysDown[e.key]}function Y(){z.pointer.justPressed=!1,z.pointer.pressed=!1}n(242);function X(e,t,n,i){var r=t.width,o=t.height,a=t.widthMargin,s=t.heightMargin,p=t.deviceWidth,c=t.deviceHeight;e.save();var d=Math.min(p/r,c/o),u=r+2*a,h=o+2*s;return e.translate(p/2,c/2),e.scale(d,d),{scale:d,render:function(t){e.clearRect(-p/2/d,-c/2/d,p/d,c/d),e.fillStyle="white",e.fillRect(-u/2,-h/2,u,h),function e(t,n,i,r){var o=t.baseProps,a=t.textures;n.save(),H(n,o),a.forEach((function(t){if("type"in t){var a=C(n);return n.save(),H(n,t.props,o.opacity),function(e,t,n,i){switch(e.type){case"text":return t.text(e.props.font||i,e.props.text,e.props.align,e.props.color),0;case"circle":return t.circle(e.props.radius,e.props.color),0;case"rectangle":return t.rectangle(e.props.width,e.props.height,e.props.color),0;case"line":return t.line(e.props.path,e.props.thickness,e.props.color),0;case"image":var r=n[e.props.fileName];if(!r)throw Error('Cannot find image file "'+e.props.fileName+'"');return t.image(r,e.props.width,e.props.height),0;case"spriteSheet":t.spriteSheet(n[e.props.fileName],e.props.columns,e.props.rows,e.props.index,e.props.width,e.props.height)}}(t,a,i,r),void n.restore()}e(t,n,i,r)})),n.restore()}(t,e,n,i)}}}var W,I=Math.PI/180,H=function(e,t,n){void 0===n&&(n=1);var i=t.x,r=t.y,o=t.rotation,a=t.scaleX,s=t.scaleY,p=t.anchorX,c=t.anchorY,d=t.opacity;e.translate(i,-r),e.rotate(o*I),e.scale(a,s),e.translate(-p,c),e.globalAlpha=d*n},C=function(e){return{circle:function(t,n){e.beginPath(),e.arc(0,0,Math.round(t),0,2*Math.PI),e.fillStyle=n,e.fill(),e.closePath()},rectangle:function(t,n,i){e.fillStyle=i,e.fillRect(-t/2,-n/2,t,n),e.closePath()},line:function(t,n,i){if(!(t.length<2)){var r=t[0],o=r[0],a=r[1],s=t.slice(1);e.strokeStyle=i,e.lineWidth=n,e.beginPath(),e.moveTo(o,-a),s.forEach((function(t){var n=t[0],i=t[1];e.lineTo(n,-i)})),e.stroke()}},text:function(t,n,i,r){var o=t.size+"px "+t.name;e.font=o,e.textBaseline="middle",e.textAlign=i,e.fillStyle=r,e.fillText(n,0,0)},image:function(t,n,i){e.drawImage(t,-n/2,-i/2,n,i)},spriteSheet:function(t,n,i,r,o,a){var s=t.width/n,p=t.height/i,c=r%n,d=Math.floor(r/n)%i;e.drawImage(t,c*s,d*p,s,p,-o/2,-a/2,o,a)}}};function G(e,t,n,i){var r;"portrait"in i?r=t>e?i.portrait:i.landscape:r=i;var o=r,a=o.width,s=o.height,p=o.maxWidthMargin,c=void 0===p?0:p,d=o.maxHeightMargin;if("game-coords"===n)return{width:a,height:s,widthMargin:0,heightMargin:0,deviceWidth:a,deviceHeight:s};var u=a/s;if(u>e/t){var h=e,l=h/u,f=l/s*(void 0===d?0:d),g=Math.min(t,l+2*f);return{width:a,height:s,widthMargin:0,heightMargin:(g-l)/2*(s/l),deviceWidth:h,deviceHeight:g}}var v=t,m=v*u,b=m/a*c,y=Math.min(e,m+2*b);return{width:a,height:s,widthMargin:(y-m)/2*(a/m),heightMargin:0,deviceWidth:y,deviceHeight:v}}var B={name:"sans-serif",size:12};function R(e,t,n,i,r,o,a){var s;void 0===t&&(t=[]),void 0===n&&(n={}),void 0===i&&(i="game-coords");var p=o||document.createElement("canvas");o||document.body.appendChild(p);var c,d,u,h,l,f=p.getContext("2d",{alpha:!1}),g=!0;document.addEventListener("keydown",(function(e){g&&S(e)}),!1),document.addEventListener("keyup",(function(e){g&&k(e)}),!1),window.addEventListener("resize",m,!1);var v={didResize:!1,scale:1,gameXToPlatformX:function(e){return e},gameYToPlatformY:function(e){return e}};function m(t){if(!c||(f.restore(),document.removeEventListener("pointerdown",d),document.removeEventListener("pointermove",u),document.removeEventListener("pointerup",h),document.removeEventListener("pointerout",Y),!0!==t)){var n=function(e,t,n,i){var r=G(e,t,n,i);return W=r,r}((null==a?void 0:a.width)||window.innerWidth,(null==a?void 0:a.height)||window.innerHeight,i,e.props.size);p.width=n.deviceWidth,p.height=n.deviceHeight;var r=e.props.defaultFont||B,o=X(f,n,y,r);l=o.scale,L.ref=o.render,v.gameXToPlatformX=function(e){var t=e.canvasOffsetLeft,n=e.widthMargin,i=e.scale,r=e.width;return function(e){return t+i*(e+r/2+n)}}({canvasOffsetLeft:p.offsetLeft,width:n.width,widthMargin:n.widthMargin,scale:l}),v.gameYToPlatformY=function(e){var t=e.canvasOffsetTop,n=e.heightMargin,i=e.scale,r=e.height;return function(e){return t-i*(e-r/2-n)}}({canvasOffsetTop:p.offsetTop,height:n.height,heightMargin:n.heightMargin,scale:l}),v.didResize=!0,v.scale=l;var s=function(e){var t=e.canvasOffsetLeft,n=e.widthMargin,i=e.scale,r=e.width;return function(e){return(e.clientX-t)/i-n-r/2}}({canvasOffsetLeft:p.offsetLeft,width:n.width,widthMargin:n.widthMargin,scale:l}),m=function(e){var t=e.canvasOffsetTop,n=e.heightMargin,i=e.scale,r=e.height;return function(e){return-(e.clientY-t)/i+n+r/2}}({canvasOffsetTop:p.offsetTop,height:n.height,heightMargin:n.heightMargin,scale:l}),b=function(e,t){return e>n.width/2+n.widthMargin||e<-n.width/2-n.widthMargin||t>n.height/2+n.heightMargin||t<-n.height/2-n.heightMargin};d=function(e){var t=s(e),n=m(e);b(t,n)?g=!1:(g=!0,function(e,t){z.pointer={pressed:!0,justPressed:!0,justReleased:!1,x:e,y:t}}(t,n))},u=function(e){var t=s(e),n=m(e);b(t,n)||function(e,t){z.pointer.x=e,z.pointer.y=t}(t,n)},h=function(e){var t=s(e),n=m(e);b(t,n)?Y():function(e,t){z.pointer.justPressed=!1,z.pointer.pressed=!1,z.pointer.justReleased=!0,z.pointer.x=e,z.pointer.y=t}(t,n)},document.addEventListener("pointerdown",d,!1),document.addEventListener("pointermove",u,!1),document.addEventListener("pointerup",h,!1),document.addEventListener("pointerout",Y,!1),c=n}}var b={},y={},w={getGetDevice:N(b,G((null==a?void 0:a.width)||window.innerWidth,(null==a?void 0:a.height)||window.innerHeight,i,e.props.size))},L={ref:null};m();var T=!1,I=function(){var e=Object(j.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],(n.audioFileNames||[]).forEach((function(e){b[e]=new Audio(e),t.push(new Promise((function(t,n){b[e].addEventListener("canplaythrough",t),b[e].addEventListener("error",n)}))),b[e].load()})),(n.imageFileNames||[]).forEach((function(e){y[e]=new Image,t.push(new Promise((function(t,n){y[e].addEventListener("load",t),y[e].addEventListener("error",n),y[e].src=e})))})),e.next=5,Promise.all(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return null===(s=L.ref)||void 0===s||s.call(L,{id:"Loading",baseProps:Object(P.a)({}),textures:t}),{cleanup:function(){p.width=p.width,o||document.body.removeChild(p),T=!0,document.removeEventListener("keydown",S,!1),document.removeEventListener("keyup",k,!1),window.removeEventListener("resize",m,!1),m(!0)},loadPromise:I().then((function(){var t=function e(){document.removeEventListener("keydown",e,!1),document.removeEventListener("pointerdown",e,!1),Object.values(b).forEach((function(e){e.muted=!0,e.play().then((function(){e.pause(),e.muted=!1}))}))};document.addEventListener("keydown",t,!1),document.addEventListener("pointerdown",t,!1);var n=function(e,t,n,i){var r=n||game.Game(game.gameProps),o=function(e){return{x:e.x,y:e.y}},a=e.getGetDevice(),s=a(o),p=E(r,a(o),0),c=i||r.props.size,d=M(s.size,c);return{initTextures:O(p,r.props,a,o,!0,d,0,1,r.props.id,t),getNextFrameTextures:function(n){var i=e.getGetDevice(),a=M(i(o).size,c);return O(p,r.props,i,o,!1,a,n,1,r.props.id,t)}}}(w,{nativeSpriteMap:r||{},nativeSpriteUtils:v},e),i=n.initTextures,o=n.getNextFrameTextures,a=null;!function e(t){var n;null===(n=L.ref)||void 0===n||n.call(L,t),window.requestAnimationFrame((function(t){T||(null===a&&(a=t-1/60),e(o(t-a)),z={keysDown:z.keysDown,keysJustPressed:{},pointer:Object.assign(Object.assign({},z.pointer),{},{justPressed:!1,justReleased:!1})})}))}(i)})),audioElements:b}}function N(e,t){var n={log:console.log,random:Math.random,timeout:function(e,t){return setTimeout(e,t)},audio:function(t){function n(n){var i=e[t];if(!i)throw Error("Cannot find audio file "+t);return n&&!i.paused&&(i=new Audio(t)),i}return{getPosition:function(){return n(!1).currentTime},play:function(e,t){var i=n(!0);i.play(),void 0!==e&&(i.currentTime=e),t&&(i.loop=!0)},pause:function(){n(!1).pause()}}},network:{get:function(e,t){fetch(e).then((function(e){return e.json()})).then(t)},post:function(e,t,n){fetch(e,{method:"POST",body:JSON.stringify(t)}).then((function(e){return e.json()})).then(n)},put:function(e,t,n){fetch(e,{method:"PUT",body:JSON.stringify(t)}).then((function(e){return e.json()})).then(n)},delete:function(e,t){fetch(e,{method:"DELETE"}).then((function(e){return e.json()})).then(t)}},storage:{getStore:function(){for(var e,t={},n=0;n<localStorage.length;n++){var i=localStorage.key(n);i&&(t[i]=null!==(e=localStorage.getItem(i))&&void 0!==e?e:void 0)}return t},setStore:function(e){Object.entries(e).forEach((function(e){var t=e[0],n=e[1];void 0===n?localStorage.removeItem(t):localStorage.setItem(t,n)}))}}};return function(){var e=Object.assign(Object.assign({},n),{},{size:W||t,now:function(){return new Date}});return function(t){return Object.assign(Object.assign({},e),{},{inputs:T(t)})}}}var U=n(219);function D(e){var t=e.Game,n=e.gameProps,o=e.showReload,a=e.assets,s=function(){var e=Object(i.useRef)(null),t=Object(i.useState)(null),n=t[0],r=t[1],o=function(){r(e.current.getBoundingClientRect())};Object(i.useEffect)((function(){return window.addEventListener("resize",o,!1),function(){return window.removeEventListener("resize",o,!1)}}),[]);var a=Object(i.useCallback)((function(t){null!==t&&(e.current=t,o())}),[]);return Object(i.useEffect)((function(){document.getElementById("iphone-img").onload=function(){o()}}),[]),[n,a]}(),p=s[0],c=s[1],d=Object(i.useState)(0),u=d[0],h=d[1],l=0,f=0,g=0;if(p&&p.height&&p.width){p.width/p.height>375/667?(f=p.height*(667/900),l=f*(375/667)):(l=p.width*(375/460),f=l/(375/667));var m=n.size.maxHeightMargin?0:.08*f;g=(p.height-f)/2+m}return Object(i.useEffect)((function(){if(l&&f){var e=document.getElementById("myCanvas"),i=R(t(n),[U.b.text({color:"black",text:"Loading..."})],a,"scale-up",{},e,{width:l,height:f}).cleanup;return function(){i()}}}),[l,f,u]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{ref:c,style:{height:"100%",width:"100%",display:"flex",justifyContent:"center"}},r.a.createElement("img",{id:"iphone-img",style:{userSelect:"none",objectFit:"contain",maxHeight:"100%"},src:"/img/iPhone8-Portrait-SpaceGray.png"})),o&&r.a.createElement("img",{className:v.a.refresh,src:"/img/reload.svg",width:20,height:20,onClick:function(){return h((function(e){return e+1}))}}),r.a.createElement("canvas",{id:"myCanvas",style:{position:"absolute",marginTop:g},width:l,height:f}))}function A(e){var t=e.part,n=e.MDXContent,i=e.codesTs,p=e.codesJs,c=e.Game,d=e.gameProps,u=e.image,h=e.isEnd,l=e.assets,f=i&&p,g=c&&d?r.a.createElement(s.a,{fallback:r.a.createElement("div",null,"Preview")},(function(){return r.a.createElement(D,{Game:c,gameProps:d,showReload:f,assets:l})})):r.a.createElement("div",null,r.a.createElement("img",{src:u}));return r.a.createElement(o.a,{title:"Tutorial - Part "+t,noFooter:!0},r.a.createElement("div",{style:{display:"flex",minWidth:1024,height:"calc(100vh - 60px)"}},r.a.createElement("div",{style:{flex:"1",overflow:"auto",padding:16,borderRight:"1px solid #ededed"}},r.a.createElement(n,null),r.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},t>1?r.a.createElement(a.a,{to:"/tutorial/"+(t-1)},"Back"):r.a.createElement("div",null),h?r.a.createElement("div",null):r.a.createElement(a.a,{to:"/tutorial/"+(t+1)},"Next"))),f?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{flex:"1",overflow:"auto",borderRight:"1px solid #ededed"}},r.a.createElement(m,{codesTs:i,codesJs:p})),r.a.createElement("div",{style:{flex:"1",display:"flex",justifyContent:"center"}},g)):r.a.createElement("div",{style:{flex:"2",display:"flex",justifyContent:"center"}},g)))}},244:function(e,t,n){"use strict";function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function r(e){var t=0;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}(e)))return function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}};throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(t=e[Symbol.iterator]()).next.bind(t)}n.d(t,"a",(function(){return r}))}}]);