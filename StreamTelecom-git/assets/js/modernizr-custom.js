/*! modernizr 3.5.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-csscalc-flexbox-flexwrap-wrapflow-setclasses !*/
!function(e,n,t){function r(e,n){return typeof e===n}function o(){var e,n,t,o,s,i,a;for(var l in x)if(x.hasOwnProperty(l)){if(e=[],n=x[l],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(o=r(n.fn,"function")?n.fn():n.fn,s=0;s<e.length;s++)i=e[s],a=i.split("."),1===a.length?Modernizr[a[0]]=o:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=o),C.push((o?"":"no-")+a.join("-"))}}function s(e){var n=S.className,t=Modernizr._config.classPrefix||"";if(b&&(n=n.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),b?S.className.baseVal=n:S.className=n)}function i(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):b?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function a(e,n){return!!~(""+e).indexOf(n)}function l(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function f(e,n){return function(){return e.apply(n,arguments)}}function u(e,n,t){var o;for(var s in e)if(e[s]in n)return t===!1?e[s]:(o=n[e[s]],r(o,"function")?f(o,t||n):o);return!1}function p(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function d(n,t,r){var o;if("getComputedStyle"in e){o=getComputedStyle.call(e,n,t);var s=e.console;if(null!==o)r&&(o=o.getPropertyValue(r));else if(s){var i=s.error?"error":"log";s[i].call(s,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else o=!t&&n.currentStyle&&n.currentStyle[r];return o}function c(){var e=n.body;return e||(e=i(b?"svg":"body"),e.fake=!0),e}function m(e,t,r,o){var s,a,l,f,u="modernizr",p=i("div"),d=c();if(parseInt(r,10))for(;r--;)l=i("div"),l.id=o?o[r]:u+(r+1),p.appendChild(l);return s=i("style"),s.type="text/css",s.id="s"+u,(d.fake?d:p).appendChild(s),d.appendChild(p),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(n.createTextNode(e)),p.id=u,d.fake&&(d.style.background="",d.style.overflow="hidden",f=S.style.overflow,S.style.overflow="hidden",S.appendChild(d)),a=t(p,e),d.fake?(d.parentNode.removeChild(d),S.style.overflow=f,S.offsetHeight):p.parentNode.removeChild(p),!!a}function v(n,r){var o=n.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(p(n[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var s=[];o--;)s.push("("+p(n[o])+":"+r+")");return s=s.join(" or "),m("@supports ("+s+") { #modernizr { position: absolute; } }",function(e){return"absolute"==d(e,null,"position")})}return t}function h(e,n,o,s){function f(){p&&(delete L.style,delete L.modElem)}if(s=r(s,"undefined")?!1:s,!r(o,"undefined")){var u=v(e,o);if(!r(u,"undefined"))return u}for(var p,d,c,m,h,y=["modernizr","tspan","samp"];!L.style&&y.length;)p=!0,L.modElem=i(y.shift()),L.style=L.modElem.style;for(c=e.length,d=0;c>d;d++)if(m=e[d],h=L.style[m],a(m,"-")&&(m=l(m)),L.style[m]!==t){if(s||r(o,"undefined"))return f(),"pfx"==n?m:!0;try{L.style[m]=o}catch(g){}if(L.style[m]!=h)return f(),"pfx"==n?m:!0}return f(),!1}function y(e,n,t,o,s){var i=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+P.join(i+" ")+i).split(" ");return r(n,"string")||r(n,"undefined")?h(a,n,o,s):(a=(e+" "+z.join(i+" ")+i).split(" "),u(a,n,t))}function g(e,n,r){return y(e,t,t,n,r)}var C=[],x=[],w={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){x.push({name:e,fn:n,options:t})},addAsyncTest:function(e){x.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=w,Modernizr=new Modernizr;var _=w._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];w._prefixes=_;var S=n.documentElement,b="svg"===S.nodeName.toLowerCase();Modernizr.addTest("csscalc",function(){var e="width:",n="calc(10px);",t=i("a");return t.style.cssText=e+_.join(n+e),!!t.style.length});var T="Moz O ms Webkit",P=w._config.usePrefixes?T.split(" "):[];w._cssomPrefixes=P;var z=w._config.usePrefixes?T.toLowerCase().split(" "):[];w._domPrefixes=z;var E={elem:i("modernizr")};Modernizr._q.push(function(){delete E.elem});var L={style:E.elem.style};Modernizr._q.unshift(function(){delete L.style}),w.testAllProps=y,w.testAllProps=g,Modernizr.addTest("flexbox",g("flexBasis","1px",!0)),Modernizr.addTest("flexwrap",g("flexWrap","wrap",!0));var N=function(n){var r,o=_.length,s=e.CSSRule;if("undefined"==typeof s)return t;if(!n)return!1;if(n=n.replace(/^@/,""),r=n.replace(/-/g,"_").toUpperCase()+"_RULE",r in s)return"@"+n;for(var i=0;o>i;i++){var a=_[i],l=a.toUpperCase()+"_"+r;if(l in s)return"@-"+a.toLowerCase()+"-"+n}return!1};w.atRule=N;var j=w.prefixed=function(e,n,t){return 0===e.indexOf("@")?N(e):(-1!=e.indexOf("-")&&(e=l(e)),n?y(e,n,t):y(e,"pfx"))};Modernizr.addTest("wrapflow",function(){var e=j("wrapFlow");if(!e||b)return!1;var n=e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-"),r=i("div"),o=i("div"),s=i("span");o.style.cssText="position: absolute; left: 50px; width: 100px; height: 20px;"+n+":end;",s.innerText="X",r.appendChild(o),r.appendChild(s),S.appendChild(r);var a=s.offsetLeft;return S.removeChild(r),o=s=r=t,150==a}),o(),s(C),delete w.addTest,delete w.addAsyncTest;for(var k=0;k<Modernizr._q.length;k++)Modernizr._q[k]();e.Modernizr=Modernizr}(window,document);