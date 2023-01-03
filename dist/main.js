/*! For license information please see main.js.LICENSE.txt */
(()=>{var t={560:(t,e)=>{e.rgb_to_lab=r,e.rgba_to_lab=function(t,e){return r({R:(e=void 0!==e?e:{R:255,G:255,B:255}).R+(t.R-e.R)*t.A,G:e.G+(t.G-e.G)*t.A,B:e.B+(t.B-e.B)*t.A})};var n=Math.pow;function r(t){return function(t){var e=t.Y/100,r=t.Z/108.883,a=t.X/95.047;return a=a>.008856?n(a,1/3):7.787*a+16/116,{L:116*(e=e>.008856?n(e,1/3):7.787*e+16/116)-16,a:500*(a-e),b:200*(e-(r=r>.008856?n(r,1/3):7.787*r+16/116))}}(function(t){var e=t.R/255,r=t.G/255,a=t.B/255;return e>.04045?e=n((e+.055)/1.055,2.4):e/=12.92,r>.04045?r=n((r+.055)/1.055,2.4):r/=12.92,a>.04045?a=n((a+.055)/1.055,2.4):a/=12.92,{X:.4124*(e*=100)+.3576*(r*=100)+.1805*(a*=100),Y:.2126*e+.7152*r+.0722*a,Z:.0193*e+.1192*r+.9505*a}}(t))}Math.sqrt},192:(t,e)=>{e.ciede2000=function(t,e){var o=t.L,c=t.a,d=t.b,h=e.L,f=e.a,m=e.b,p=n(r(c,2)+r(d,2)),v=n(r(f,2)+r(m,2)),b=(p+v)/2,y=.5*(1-n(r(b,7)/(r(b,7)+r(25,7)))),_=(1+y)*c,w=(1+y)*f,E=n(r(_,2)+r(d,2)),C=n(r(w,2)+r(m,2)),x=g(d,_),O=g(m,w),A=h-o,T=C-E,k=function(t,e,n,r){if(t*e==0)return 0;if(i(r-n)<=180)return r-n;if(r-n>180)return r-n-360;if(r-n<-180)return r-n+360;throw new Error}(p,v,x,O),B=2*n(E*C)*l(u(k)/2),P=(o+h)/2,L=(E+C)/2,M=function(t,e,n,r){if(t*e==0)return n+r;if(i(n-r)<=180)return(n+r)/2;if(i(n-r)>180&&n+r<360)return(n+r+360)/2;if(i(n-r)>180&&n+r>=360)return(n+r-360)/2;throw new Error}(p,v,x,O),R=1-.17*a(u(M-30))+.24*a(u(2*M))+.32*a(u(3*M+6))-.2*a(u(4*M-63)),S=30*s(-r((M-275)/25,2)),G=n(r(L,7)/(r(L,7)+r(25,7))),X=1+.015*r(P-50,2)/n(20+r(P-50,2)),D=1+.045*L,$=1+.015*L*R,I=-2*G*l(u(2*S));return n(r(A/(1*X),2)+r(T/(1*D),2)+r(B/(1*$),2)+I*(T/(1*D))*(B/(1*$)))};var n=Math.sqrt,r=Math.pow,a=Math.cos,o=Math.atan2,l=Math.sin,i=Math.abs,s=Math.exp,c=Math.PI;function u(t){return t*(c/180)}function g(t,e){if(0===t&&0===e)return 0;var n=o(t,e)*(180/c);return n>=0?n:n+360}},197:(t,e,n)=>{"use strict";var r=n(192),a=n(560),o=n(867),l=t.exports={};l.diff=r.ciede2000,l.rgb_to_lab=a.rgb_to_lab,l.rgba_to_lab=a.rgba_to_lab,l.map_palette=o.map_palette,l.palette_map_key=o.palette_map_key,l.map_palette_lab=o.map_palette_lab,l.lab_palette_map_key=o.lab_palette_map_key,l.match_palette_lab=o.match_palette_lab,l.closest=function(t,e,n){var r=l.palette_map_key(t);return n=void 0!==n?n:{R:255,G:255,B:255},l.map_palette([t],e,"closest",n)[r]},l.furthest=function(t,e,n){var r=l.palette_map_key(t);return n=void 0!==n?n:{R:255,G:255,B:255},l.map_palette([t],e,"furthest",n)[r]},l.closest_lab=function(t,e){return l.match_palette_lab(t,e,!1)},l.furthest_lab=function(t,e){return l.match_palette_lab(t,e,!0)}},867:(t,e,n)=>{e.map_palette=function(t,e,n,r){var a={};r=void 0!==r?r:{R:255,G:255,B:255},n=n||"closest";for(var l=0;l<t.length;l+=1){for(var i=t[l],c=void 0,u=void 0,g=0;g<e.length;g+=1){var d=e[g],h=s(i,d,r);(null==c||"closest"===n&&h<u||"furthest"===n&&h>u)&&(c=d,u=h)}a[o(i)]=c}return a},e.map_palette_lab=function(t,e,n){for(var r={},a="furthest"===n,o=0;o<t.length;o+=1){var s=t[o];r[l(s)]=i(s,e,a)}return r},e.match_palette_lab=i,e.palette_map_key=o,e.lab_palette_map_key=l;var r=n(192).ciede2000,a=n(560);function o(t){var e="R"+t.R+"B"+t.B+"G"+t.G;return"A"in t&&(e=e+"A"+t.A),e}function l(t){return"L"+t.L+"a"+t.a+"b"+t.b}function i(t,e,n){for(var a,o,l=e[0],i=r(t,l),s=1,c=e.length;s<c;s+=1)a=e[s],o=r(t,a),(!n&&o<i||n&&o>i)&&(l=a,i=o);return l}function s(t,e,n){var o=a.rgb_to_lab,l=a.rgb_to_lab,i=function(t){return a.rgba_to_lab(t,n)};return"A"in t&&(o=i),"A"in e&&(l=i),t=o(t),e=l(e),r(t,e)}}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={exports:{}};return t[r](o,o.exports,n),o.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";var t=n(197),e=n.n(t);function r(t){a&&console.log(`skribbl.io AutoDraw: ${t}`)}let a=!0;function o(t){return new Promise(((e,n)=>{const a=new Image;a.crossOrigin="Anonymous",a.onload=function(){(a.height===a.width===0?n:e)(a)},a.onerror=n,r(`Attempting to load image: ${t}...`),a.src=t}))}const l=2.9,i=function(t,e){let n=Math.min(t.width/e.width,t.height/e.height),a=n*e.width,o=n*e.height;return function(t,e){r(`Scaling image to ${t.width} x ${t.height}...`);let n=document.createElement("canvas");n.width=t.width,n.height=t.height;let a=n.getContext("2d");return a.imageSmoothingEnabled=!1,e(a),a.getImageData(0,0,n.width,n.height)}({width:a,height:o},(t=>t.drawImage(e,0,0,a,o)))},s=function(t){const e=t.createElement("div");return e.id="autoDrawOverlay",t.getElementById("game-canvas").appendChild(e),{getCanvasContainerElement:()=>t.getElementById("game-canvas"),getCanvasElement:()=>t.querySelector("#game-canvas canvas"),getColorElements:()=>t.querySelectorAll("#game-toolbar .colors .color"),getSizeElements:()=>t.querySelectorAll("#game-toolbar .sizes .size"),getClearToolElement:()=>t.querySelector('#game-toolbar .tool[data-tooltip="Clear"]'),getPenToolElement:()=>t.querySelector('#game-toolbar .tool[data-tooltip="Brush"]'),getFillToolElement:()=>t.querySelector('#game-toolbar .tool[data-tooltip="Fill"]'),getToolbarElement:()=>t.getElementById("game-toolbar"),hideCanvasOverlay:e=>setTimeout((function(){t.body.classList.remove("showingAutodrawOverlay")}),e||0),showCanvasOverlay:n=>{e.innerText=n,t.body.classList.add("showingAutodrawOverlay")}}}(document),c=s.getClearToolElement(),u=function(t){t.getContext("2d");let e=function(e){let n=t.getBoundingClientRect();return{x:e.x*n.width/800+n.x,y:e.y*n.height/600+n.y}},n=function(t,e){return new PointerEvent(t,{pointerType:"mouse",bubbles:!0,clientX:e.x,clientY:e.y,button:0})};return{size:{width:800,height:600},draw:function(r){let a=e(r[0]);t.dispatchEvent(n("pointerdown",a));for(let a=1;a<r.length;a++){let o=e(r[a]);t.dispatchEvent(n("pointermove",o))}let o=e(r[r.length-1]);t.dispatchEvent(n("pointerup",o))}}}(s.getCanvasElement()),g=function(t){let e=Array.prototype.slice.call(t.getColorElements()),n=e.map((t=>function(t){let e=t.substring(4,t.length-1).split(", ");return{r:parseInt(e[0]),g:parseInt(e[1]),b:parseInt(e[2])}}(t.style.backgroundColor))),r=new Map(e.map((t=>[t.style.backgroundColor,t]))),a=t.getSizeElements(),o={4:a[0],10:a[1],20:a[2],32:a[3],40:a[4]};return{getColors:()=>n,setColor:t=>{let e=`rgb(${(n=t).r}, ${n.g}, ${n.b})`;var n;r.get(e).dispatchEvent(new PointerEvent("pointerdown"))},getPenDiameters:()=>[4,10,20,32,40],setPenDiameter:t=>{o[t].click()},clear:()=>{t.getClearToolElement().click()},setPenTool:()=>{t.getPenToolElement().click()},setFillTool:()=>{t.getFillToolElement().click()},isEnabled:()=>"none"!==t.getToolbarElement().style.display}}(s),d=function(t,n){const a=function(t){let n=t.map((t=>e().rgb_to_lab({R:t.r,G:t.g,B:t.b})));return{getClosestColor:function(r,a){let o=JSON.stringify(r);if(o in a)return a[o];let l=e().rgb_to_lab({R:r.r,G:r.g,B:r.b}),i=Number.MAX_VALUE,s=null;for(let r=0;r<n.length;r++){let a=e().diff(l,n[r]);a>=i||(i=a,s=t[r])}return a[o]=s,s}}}(n.getColors()),o={width:t.size.width/l,height:t.size.height/l};return{draw:function(e){const s=i(o,e);r("Generating draw commands...");let c=[];const u=function(t){const e=t.data,n={},r=[];let o=0,l=null,i=0;for(let s=0;s<t.height;s++){for(let c=0;c<t.width;c++){const t={r:e[i+0],g:e[i+1],b:e[i+2]},u=a.getClosestColor(t,n);null!=l?(l!=u&&(r.push({y:s,startX:o,endX:c-1,color:l}),o=c,l=u),i+=4):l=u}r.push({y:s,startX:o,endX:t.width-1,color:l}),o=0,l=null,i+=4}return r}(s),g=function(t){const e={};for(const n of t){const t=JSON.stringify(n.color);e[t]=(e[t]||0)+1}const n=Object.keys(e).reduce(((t,n)=>e[t]>e[n]?t:n));return JSON.parse(n)}(u);var d;c=c.concat((d=g,[function(){n.setFillTool(),n.setColor(d),t.draw([{x:0,y:0},{x:0,y:0}])}]));const h=u.filter((t=>JSON.stringify(t.color)!=JSON.stringify(g))).sort((()=>.5-Math.random())).sort(((t,e)=>{const n=t.endX-t.startX,r=e.endX-e.startX;return n>r?-1:n==r?0:1}));let f={x:(o.width-s.width)/2+.5,y:(o.height-s.height)/2+.5};return c=c.concat(function(e,r){const a=[];for(const o of e)a.push((function(){n.setPenTool(),n.setColor(o.color),n.setPenDiameter(4),t.draw([{x:(o.startX+r.x)*l,y:(o.y+r.y)*l},{x:(o.endX+r.x)*l,y:(o.y+r.y)*l}])}));return a}(h,f)),r(`${c.length} commands generated.`),c}}}(u,g);let h=[];const f=function(t){r("Clearing canvas..."),g.clear(),r(`Drawing ${t.width} x ${t.height} image...`),h=h.concat(d.draw(t)),s.hideCanvasOverlay(),function(t,e){const n=function(){return t.length?e&&e()?r("Processing stopped."):(t.shift()(),t.length%100==0&&t.length>0&&r(`${t.length} commands remaining to process.`),void setTimeout(n,0)):r("Processing finished.")};r(`Processing ${t.length} commands...`),n()}(h,(()=>!g.isEnabled()))};!function(t,e,n,a){let l=0;t.addEventListener("dragenter",(function(t){0===l&&(g.isEnabled()&&s.showCanvasOverlay("Drop image here to auto draw!")),l++})),t.addEventListener("dragleave",(function(t){l--,0===l&&n(t)})),t.addEventListener("drop",(function(t){l=0,function(t){if(t.preventDefault(),!s.getCanvasContainerElement().contains(t.target))return s.hideCanvasOverlay();if(!g.isEnabled())return r("Can't draw right now."),s.hideCanvasOverlay();r("Processing dropped content..."),s.showCanvasOverlay("Auto draw is loading image...");const e=((n=t.dataTransfer).files.length&&n.files[0].type.startsWith("image/")?URL.createObjectURL(n.files[0]):null)||function(t){let e=t.getData("text/html");if(!e)return null;let n=document.createElement("div");n.innerHTML=e;let r=n.getElementsByTagName("img");return r.length?r[0].getAttribute("src"):void 0}(t.dataTransfer);var n;if(!e)return s.showCanvasOverlay("Auto draw couldn't load image :("),r("Dropped content not recognized."),s.hideCanvasOverlay(2500);o(e).catch((()=>o("https://skribbl-io-autodraw-cors-proxy.galehouse5.workers.dev?"+e))).then(f).catch((()=>r(`Couldn't load image: ${e}. Sorry :(`)))}(t)})),t.addEventListener("dragover",(function(t){t.preventDefault()}))}(document,0,s.hideCanvasOverlay),c.addEventListener("click",(function(){h.length&&(r("Clearing commands..."),h.length=0,r("Drawing stopped."))}))})()})();