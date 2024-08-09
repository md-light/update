/*! For license information please see 738.15fbac76.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkEsp32BleOta=self.webpackChunkEsp32BleOta||[]).push([[738],{738:(t,e,s)=>{s.r(e),s.d(e,{scopeCss:()=>K});const c="-shadowcsshost",o="-shadowcssslotted",n="-shadowcsscontext",r=")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)",l=new RegExp("(-shadowcsshost"+r,"gim"),a=new RegExp("(-shadowcsscontext"+r,"gim"),i=new RegExp("(-shadowcssslotted"+r,"gim"),h="-shadowcsshost-no-combinator",p=/-shadowcsshost-no-combinator([^\s]*)/,g=[/::shadow/g,/::content/g],u=/-shadowcsshost/gim,d=/:host/gim,m=/::slotted/gim,f=/:host-context/gim,x=/\/\*\s*[\s\S]*?\*\//g,w=/\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g,_=/(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g,b=/([{}])/g,v=/(^.*?[^\\])??((:+)(.*)|$)/,O="%BLOCK%",S=(t,e)=>{const s=W(t);let c=0;return s.escapedString.replace(_,(function(){const t=arguments.length<=2?void 0:arguments[2];let o="",n=arguments.length<=4?void 0:arguments[4],r="";n&&n.startsWith("{%BLOCK%")&&(o=s.blocks[c++],n=n.substring(O.length+1),r="{");const l={selector:t,content:o},a=e(l);return"".concat(arguments.length<=1?void 0:arguments[1]).concat(a.selector).concat(arguments.length<=3?void 0:arguments[3]).concat(r).concat(a.content).concat(n)}))},W=t=>{const e=t.split(b),s=[],c=[];let o=0,n=[];for(let r=0;r<e.length;r++){const t=e[r];"}"===t&&o--,o>0?n.push(t):(n.length>0&&(c.push(n.join("")),s.push(O),n=[]),s.push(t)),"{"===t&&o++}n.length>0&&(c.push(n.join("")),s.push(O));return{escapedString:s.join(""),blocks:c}},k=(t,e,s)=>t.replace(e,(function(){for(var t=arguments.length,e=new Array(t),c=0;c<t;c++)e[c]=arguments[c];if(e[2]){const t=e[2].split(","),c=[];for(let o=0;o<t.length;o++){const n=t[o].trim();if(!n)break;c.push(s(h,n,e[3]))}return c.join(",")}return h+e[3]})),E=(t,e,s)=>t+e.replace(c,"")+s,j=(t,e,s)=>e.indexOf(c)>-1?E(t,e,s):t+e+s+", "+e+" "+t+s,C=(t,e)=>{const s=(t=>(t=t.replace(/\[/g,"\\[").replace(/\]/g,"\\]"),new RegExp("^("+t+")([>\\s~+[.,{:][\\s\\S]*)?$","m")))(e);return!s.test(t)},R=(t,e)=>t.replace(v,(function(t){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"";return s+e+c+o})),B=(t,e,s)=>{const c="."+(e=e.replace(/\[is=([^\]]*)\]/g,(function(t){return arguments.length<=1?void 0:arguments[1]}))),o=t=>{let o=t.trim();if(!o)return"";if(t.indexOf(h)>-1)o=((t,e,s)=>{if(u.lastIndex=0,u.test(t)){const e=".".concat(s);return t.replace(p,((t,s)=>R(s,e))).replace(u,e+" ")}return e+" "+t})(t,e,s);else{const e=t.replace(u,"");e.length>0&&(o=R(e,c))}return o},n=(t=>{const e=[];let s=0;return{content:(t=t.replace(/(\[[^\]]*\])/g,((t,c)=>{const o="__ph-".concat(s,"__");return e.push(c),s++,o}))).replace(/(:nth-[-\w]+)(\([^)]+\))/g,((t,c,o)=>{const n="__ph-".concat(s,"__");return e.push(o),s++,c+n})),placeholders:e}})(t);let r,l="",a=0;const i=/( |>|\+|~(?!=))\s*/g;let g=!((t=n.content).indexOf(h)>-1);for(;null!==(r=i.exec(t));){const e=r[1],s=t.slice(a,r.index).trim();g=g||s.indexOf(h)>-1;const c=g?o(s):s;l+="".concat(c," ").concat(e," "),a=i.lastIndex}const d=t.substring(a);return g=g||d.indexOf(h)>-1,l+=g?o(d):d,m=n.placeholders,l.replace(/__ph-(\d+)__/g,((t,e)=>m[+e]));var m},L=(t,e,s,c,o)=>S(t,(t=>{let o=t.selector,n=t.content;"@"!==t.selector[0]?o=((t,e,s,c)=>t.split(",").map((t=>c&&t.indexOf("."+c)>-1?t.trim():C(t,e)?B(t,e,s).trim():t.trim())).join(", "))(t.selector,e,s,c):(t.selector.startsWith("@media")||t.selector.startsWith("@supports")||t.selector.startsWith("@page")||t.selector.startsWith("@document"))&&(n=L(t.content,e,s,c));return{selector:o.replace(/\s{2,}/g," ").trim(),content:n}})),T=(t,e,s,r,p)=>{const u=((t,e)=>{const s="."+e+" > ",c=[];return t=t.replace(i,(function(){for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];if(e[2]){const t=e[2].trim(),o=e[3],n=s+t+o;let r="";for(let s=e[4]-1;s>=0;s--){const t=e[5][s];if("}"===t||","===t)break;r=t+r}const l=r+n,a="".concat(r.trimRight()).concat(n.trim());if(l.trim()!==a.trim()){const t="".concat(a,", ").concat(l);c.push({orgSelector:l,updatedSelector:t})}return n}return h+e[3]})),{selectors:c,cssText:t}})(t=(t=>k(t,a,j))(t=(t=>k(t,l,E))(t=t.replace(f,n).replace(d,c).replace(m,o))),r);return t=(t=>g.reduce(((t,e)=>t.replace(e," ")),t))(t=u.cssText),e&&(t=L(t,e,s,r)),{cssText:(t=(t=t.replace(/-shadowcsshost-no-combinator/g,".".concat(s))).replace(/>\s*\*\s+([^{, ]+)/gm," $1 ")).trim(),slottedSelectors:u.selectors}},K=(t,e,s)=>{const c=e+"-h",o=e+"-s",n=t.match(w)||[];t=(t=>t.replace(x,""))(t);const r=[];if(s){const e=t=>{const e="/*!@___".concat(r.length,"___*/"),s="/*!@".concat(t.selector,"*/");return r.push({placeholder:e,comment:s}),t.selector=e+t.selector,t};t=S(t,(t=>"@"!==t.selector[0]?e(t):t.selector.startsWith("@media")||t.selector.startsWith("@supports")||t.selector.startsWith("@page")||t.selector.startsWith("@document")?(t.content=S(t.content,e),t):t))}const l=T(t,e,c,o);return t=[l.cssText,...n].join("\n"),s&&r.forEach((e=>{let{placeholder:s,comment:c}=e;t=t.replace(s,c)})),l.slottedSelectors.forEach((e=>{t=t.replace(e.orgSelector,e.updatedSelector)})),t}}}]);
//# sourceMappingURL=738.15fbac76.chunk.js.map