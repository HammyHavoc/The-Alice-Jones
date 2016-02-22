/*!
* Velocity.js: Accelerated JavaScript animation.
* @version 0.10.1
* @docs http://VelocityJS.org
* @license Copyright 2014 Julian Shapiro. MIT License: http://en.wikipedia.org/wiki/MIT_License
*/
!function(e,t,r,a){function o(e){for(var t=-1,r=e?e.length:0,a=[];++t<r;){var o=e[t];o&&a.push(o)}return a}function i(e){var t=$.data(e,c);return null===t?a:t}function n(e){return function(t){return Math.round(t*e)*(1/e)}}function s(e,t){var r=e;return m.isString(e)?y.Easings[e]||(r=!1):r=m.isArray(e)&&1===e.length?n.apply(null,e):m.isArray(e)&&2===e.length?x.apply(null,e.concat([t])):m.isArray(e)&&4===e.length?v.apply(null,e):!1,r===!1&&(r=y.Easings[y.defaults.easing]?y.defaults.easing:g),r}function l(e){if(e)for(var t=(new Date).getTime(),r=0,o=y.State.calls.length;o>r;r++)if(y.State.calls[r]){var n=y.State.calls[r],s=n[0],c=n[2],p=n[3];p||(p=y.State.calls[r][3]=t-16);for(var g=Math.min((t-p)/c.duration,1),d=0,f=s.length;f>d;d++){var v=s[d],x=v.element;if(i(x)){var S=!1;c.display&&"none"!==c.display&&b.setPropertyValue(x,"display",c.display),c.visibility&&"hidden"!==c.visibility&&b.setPropertyValue(x,"visibility",c.visibility);for(var V in v)if("element"!==V){var P=v[V],w,T=m.isString(P.easing)?y.Easings[P.easing]:P.easing;if(w=1===g?P.endValue:P.startValue+(P.endValue-P.startValue)*T(g),P.currentValue=w,b.Hooks.registered[V]){var C=b.Hooks.getRoot(V),k=i(x).rootPropertyValueCache[C];k&&(P.rootPropertyValue=k)}var E=b.setPropertyValue(x,V,P.currentValue+(0===parseFloat(w)?"":P.unitType),P.rootPropertyValue,P.scrollData);b.Hooks.registered[V]&&(i(x).rootPropertyValueCache[C]=b.Normalizations.registered[C]?b.Normalizations.registered[C]("extract",null,E[1]):E[1]),"transform"===E[0]&&(S=!0)}c.mobileHA&&i(x).transformCache.translate3d===a&&(i(x).transformCache.translate3d="(0px, 0px, 0px)",S=!0),S&&b.flushTransformCache(x)}}c.display&&"none"!==c.display&&(y.State.calls[r][2].display=!1),c.visibility&&"hidden"!==c.visibility&&(y.State.calls[r][2].visibility=!1),c.progress&&c.progress.call(n[1],n[1],g,Math.max(0,p+c.duration-t),p),1===g&&u(r)}y.State.isTicking&&(y.mock?l(!0):h(l))}function u(e,t){if(!y.State.calls[e])return!1;for(var r=y.State.calls[e][0],o=y.State.calls[e][1],n=y.State.calls[e][2],s=y.State.calls[e][4],l=!1,u=0,c=r.length;c>u;u++){var p=r[u].element;if(t||n.loop||("none"===n.display&&b.setPropertyValue(p,"display",n.display),"hidden"===n.visibility&&b.setPropertyValue(p,"visibility",n.visibility)),($.queue(p)[1]===a||!/\.velocityQueueEntryFlag/i.test($.queue(p)[1]))&&i(p)){i(p).isAnimating=!1,i(p).rootPropertyValueCache={};var g=!1;$.each(i(p).transformCache,function(e,t){var r=/^scale/.test(e)?1:0;new RegExp("^\\("+r+"[^.]").test(t)&&(g=!0,delete i(p).transformCache[e])}),n.mobileHA&&(g=!0,delete i(p).transformCache.translate3d),g&&b.flushTransformCache(p),b.Values.removeClass(p,"velocity-animating")}if(!t&&n.complete&&!n.loop&&u===c-1)try{n.complete.call(o,o)}catch(d){setTimeout(function(){throw d},1)}s&&n.loop!==!0&&s(o),n.loop!==!0||t||y.animate(p,"reverse",{loop:!0,delay:n.delay}),n.queue!==!1&&$.dequeue(p,n.queue)}y.State.calls[e]=!1;for(var f=0,h=y.State.calls.length;h>f;f++)if(y.State.calls[f]!==!1){l=!0;break}l===!1&&(y.State.isTicking=!1,delete y.State.calls,y.State.calls=[])}var c="velocity",p=400,g="swing",d=function(){if(r.documentMode)return r.documentMode;for(var e=7;e>4;e--){var t=r.createElement("div");if(t.innerHTML="<!--[if IE "+e+"]><span></span><![endif]-->",t.getElementsByTagName("span").length)return t=null,e}return a}(),f=function(){var e=0;return t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||function(t){var r=(new Date).getTime(),a;return a=Math.max(0,16-(r-e)),e=r+a,setTimeout(function(){t(r+a)},a)}}(),h=t.requestAnimationFrame||f,m={isString:function(e){return"string"==typeof e},isArray:Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},isFunction:function(e){return"[object Function]"===Object.prototype.toString.call(e)},isNode:function(e){return e&&e.nodeType},isNodeList:function(e){return"object"==typeof e&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e))&&e.length!==a&&(0===e.length||"object"==typeof e[0]&&e[0].nodeType>0)},isWrapped:function(e){return e&&(e.jquery||t.Zepto&&t.Zepto.zepto.isZ(e))},isSVG:function(e){return t.SVGElement&&e instanceof SVGElement},isEmptyObject:function(e){var t;for(t in e)return!1;return!0}},$=t.jQuery||e.Velocity&&e.Velocity.Utilities;if(!$)throw new Error("Velocity: Either jQuery or Velocity's jQuery shim must first be loaded.");if(e.Velocity!==a&&!e.Velocity.Utilities)throw new Error("Velocity: Namespace is occupied.");if(7>=d){if(t.jQuery)return void(t.jQuery.fn.velocity=t.jQuery.fn.animate);throw new Error("Velocity: For IE<=7, Velocity falls back to jQuery, which must first be loaded.")}if(8===d&&!t.jQuery)throw new Error("Velocity: For IE8, Velocity requires jQuery to be loaded. (Velocity's jQuery shim does not work with IE8.)");var y=e.Velocity=e.velocity=$.extend({State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),isAndroid:/Android/i.test(navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(navigator.userAgent),isChrome:t.chrome,isFirefox:/Firefox/i.test(navigator.userAgent),prefixElement:r.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[]},CSS:{},Utilities:t.jQuery,Sequences:{},Easings:{},Promise:t.Promise,defaults:{queue:"",duration:p,easing:g,begin:null,complete:null,progress:null,display:null,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0},animate:function(){},mock:!1,version:{major:0,minor:10,patch:1},debug:!1},t.Velocity);t.pageYOffset!==a?(y.State.scrollAnchor=t,y.State.scrollPropertyLeft="pageXOffset",y.State.scrollPropertyTop="pageYOffset"):(y.State.scrollAnchor=r.documentElement||r.body.parentNode||r.body,y.State.scrollPropertyLeft="scrollLeft",y.State.scrollPropertyTop="scrollTop"),y.State.isMobile||r.hidden===a||r.addEventListener("visibilitychange",function(){r.hidden?(h=function(e){return setTimeout(function(){e(!0)},16)},l()):h=t.requestAnimationFrame||f});var v=function(){function e(e,t){return 1-3*t+3*e}function t(e,t){return 3*t-6*e}function r(e){return 3*e}function a(a,o,i){return((e(o,i)*a+t(o,i))*a+r(o))*a}function o(a,o,i){return 3*e(o,i)*a*a+2*t(o,i)*a+r(o)}return function(e,t,r,i){function n(t){for(var i=t,n=0;8>n;++n){var s=o(i,e,r);if(0===s)return i;var l=a(i,e,r)-t;i-=l/s}return i}if(4!==arguments.length)return!1;for(var s=0;4>s;++s)if("number"!=typeof arguments[s]||isNaN(arguments[s])||!isFinite(arguments[s]))return!1;return e=Math.min(e,1),r=Math.min(r,1),e=Math.max(e,0),r=Math.max(r,0),function(o){return e===t&&r===i?o:a(n(o),t,i)}}}(),x=function(){function e(e){return-e.tension*e.x-e.friction*e.v}function t(t,r,a){var o={x:t.x+a.dx*r,v:t.v+a.dv*r,tension:t.tension,friction:t.friction};return{dx:o.v,dv:e(o)}}function r(r,a){var o={dx:r.v,dv:e(r)},i=t(r,.5*a,o),n=t(r,.5*a,i),s=t(r,a,n),l=1/6*(o.dx+2*(i.dx+n.dx)+s.dx),u=1/6*(o.dv+2*(i.dv+n.dv)+s.dv);return r.x=r.x+l*a,r.v=r.v+u*a,r}return function a(e,t,o){var i={x:-1,v:0,tension:null,friction:null},n=[0],s=0,l=1e-4,u=.016,c,p,g;for(e=parseFloat(e)||500,t=parseFloat(t)||20,o=o||null,i.tension=e,i.friction=t,c=null!==o,c?(s=a(e,t),p=s/o*u):p=u;;)if(g=r(g||i,p),n.push(1+g.x),s+=16,!(Math.abs(g.x)>l&&Math.abs(g.v)>l))break;return c?function(e){return n[e*(n.length-1)|0]}:s}}();!function(){y.Easings.linear=function(e){return e},y.Easings.swing=function(e){return.5-Math.cos(e*Math.PI)/2},y.Easings.spring=function(e){return 1-Math.cos(4.5*e*Math.PI)*Math.exp(6*-e)},y.Easings.ease=v(.25,.1,.25,1),y.Easings["ease-in"]=v(.42,0,1,1),y.Easings["ease-out"]=v(0,0,.58,1),y.Easings["ease-in-out"]=v(.42,0,.58,1);var e={};$.each(["Quad","Cubic","Quart","Quint","Expo"],function(t,r){e[r]=function(e){return Math.pow(e,t+2)}}),$.extend(e,{Sine:function(e){return 1-Math.cos(e*Math.PI/2)},Circ:function(e){return 1-Math.sqrt(1-e*e)},Elastic:function(e){return 0===e||1===e?e:-Math.pow(2,8*(e-1))*Math.sin((80*(e-1)-7.5)*Math.PI/15)},Back:function(e){return e*e*(3*e-2)},Bounce:function(e){for(var t,r=4;e<((t=Math.pow(2,--r))-1)/11;);return 1/Math.pow(4,3-r)-7.5625*Math.pow((3*t-2)/22-e,2)}}),$.each(e,function(e,t){y.Easings["easeIn"+e]=t,y.Easings["easeOut"+e]=function(e){return 1-t(1-e)},y.Easings["easeInOut"+e]=function(e){return.5>e?t(2*e)/2:1-t(-2*e+2)/2}})}();var b=y.CSS={RegEx:{isHex:/^#([A-f\d]{3}){1,2}$/i,valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Lists:{colors:["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],transformsBase:["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"],transforms3D:["transformPerspective","translateZ","scaleZ","rotateX","rotateY"]},Hooks:{templates:{textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0px"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){for(var e=0;e<b.Lists.colors.length;e++)b.Hooks.templates[b.Lists.colors[e]]=["Red Green Blue Alpha","255 255 255 1"];var t,r,a;if(d)for(t in b.Hooks.templates){r=b.Hooks.templates[t],a=r[0].split(" ");var o=r[1].match(b.RegEx.valueSplit);"Color"===a[0]&&(a.push(a.shift()),o.push(o.shift()),b.Hooks.templates[t]=[a.join(" "),o.join(" ")])}for(t in b.Hooks.templates){r=b.Hooks.templates[t],a=r[0].split(" ");for(var e in a){var i=t+a[e],n=e;b.Hooks.registered[i]=[t,n]}}},getRoot:function(e){var t=b.Hooks.registered[e];return t?t[0]:e},cleanRootPropertyValue:function(e,t){return b.RegEx.valueUnwrap.test(t)&&(t=t.match(b.Hooks.RegEx.valueUnwrap)[1]),b.Values.isCSSNullValue(t)&&(t=b.Hooks.templates[e][1]),t},extractValue:function(e,t){var r=b.Hooks.registered[e];if(r){var a=r[0],o=r[1];return t=b.Hooks.cleanRootPropertyValue(a,t),t.toString().match(b.RegEx.valueSplit)[o]}return t},injectValue:function(e,t,r){var a=b.Hooks.registered[e];if(a){var o=a[0],i=a[1],n,s;return r=b.Hooks.cleanRootPropertyValue(o,r),n=r.toString().match(b.RegEx.valueSplit),n[i]=t,s=n.join(" ")}return r}},Normalizations:{registered:{clip:function(e,t,r){switch(e){case"name":return"clip";case"extract":var a;return b.RegEx.wrappedValueAlreadyExtracted.test(r)?a=r:(a=r.toString().match(b.RegEx.valueUnwrap),a=a?a[1].replace(/,(\s+)?/g," "):r),a;case"inject":return"rect("+r+")"}},opacity:function(e,t,r){if(8>=d)switch(e){case"name":return"filter";case"extract":var a=r.toString().match(/alpha\(opacity=(.*)\)/i);return r=a?a[1]/100:1;case"inject":return t.style.zoom=1,parseFloat(r)>=1?"":"alpha(opacity="+parseInt(100*parseFloat(r),10)+")"}else switch(e){case"name":return"opacity";case"extract":return r;case"inject":return r}}},register:function(){9>=d||y.State.isGingerbread||(b.Lists.transformsBase=b.Lists.transformsBase.concat(b.Lists.transforms3D));for(var e=0;e<b.Lists.transformsBase.length;e++)!function(){var t=b.Lists.transformsBase[e];b.Normalizations.registered[t]=function(e,r,o){switch(e){case"name":return"transform";case"extract":return i(r).transformCache[t]===a?/^scale/i.test(t)?1:0:i(r).transformCache[t].replace(/[()]/g,"");case"inject":var n=!1;switch(t.substr(0,t.length-1)){case"translate":n=!/(%|px|em|rem|vw|vh|\d)$/i.test(o);break;case"scal":case"scale":y.State.isAndroid&&i(r).transformCache[t]===a&&1>o&&(o=1),n=!/(\d)$/i.test(o);break;case"skew":n=!/(deg|\d)$/i.test(o);break;case"rotate":n=!/(deg|\d)$/i.test(o)}return n||(i(r).transformCache[t]="("+o+")"),i(r).transformCache[t]}}}();for(var e=0;e<b.Lists.colors.length;e++)!function(){var t=b.Lists.colors[e];b.Normalizations.registered[t]=function(e,r,o){switch(e){case"name":return t;case"extract":var i;if(b.RegEx.wrappedValueAlreadyExtracted.test(o))i=o;else{var n,s={black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",red:"rgb(255, 0, 0)",white:"rgb(255, 255, 255)"};/^[A-z]+$/i.test(o)?n=s[o]!==a?s[o]:s.black:b.RegEx.isHex.test(o)?n="rgb("+b.Values.hexToRgb(o).join(" ")+")":/^rgba?\(/i.test(o)||(n=s.black),i=(n||o).toString().match(b.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}return 8>=d||3!==i.split(" ").length||(i+=" 1"),i;case"inject":return 8>=d?4===o.split(" ").length&&(o=o.split(/\s+/).slice(0,3).join(" ")):3===o.split(" ").length&&(o+=" 1"),(8>=d?"rgb":"rgba")+"("+o.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")"}}}()}},Names:{camelCase:function(e){return e.replace(/-(\w)/g,function(e,t){return t.toUpperCase()})},SVGAttribute:function(e){var t="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return(d||y.State.isAndroid&&!y.State.isChrome)&&(t+="|transform"),new RegExp("^("+t+")$","i").test(e)},prefixCheck:function(e){if(y.State.prefixMatches[e])return[y.State.prefixMatches[e],!0];for(var t=["","Webkit","Moz","ms","O"],r=0,a=t.length;a>r;r++){var o;if(o=0===r?e:t[r]+e.replace(/^\w/,function(e){return e.toUpperCase()}),m.isString(y.State.prefixElement.style[o]))return y.State.prefixMatches[e]=o,[o,!0]}return[e,!1]}},Values:{hexToRgb:function(e){var t=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,a;return e=e.replace(t,function(e,t,r,a){return t+t+r+r+a+a}),a=r.exec(e),a?[parseInt(a[1],16),parseInt(a[2],16),parseInt(a[3],16)]:[0,0,0]},isCSSNullValue:function(e){return 0==e||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)},getUnitType:function(e){return/^(rotate|skew)/i.test(e)?"deg":/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e)?"":"px"},getDisplayType:function(e){var t=e.tagName.toString().toLowerCase();return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t)?"inline":/^(li)$/i.test(t)?"list-item":/^(tr)$/i.test(t)?"table-row":"block"},addClass:function(e,t){e.classList?e.classList.add(t):e.className+=(e.className.length?" ":"")+t},removeClass:function(e,t){e.classList?e.classList.remove(t):e.className=e.className.toString().replace(new RegExp("(^|\\s)"+t.split(" ").join("|")+"(\\s|$)","gi")," ")}},getPropertyValue:function(e,r,o,n){function s(e,r){function o(){u&&b.setPropertyValue(e,"display","none")}var l=0;if(8>=d)l=$.css(e,r);else{var u=!1;if(/^(width|height)$/.test(r)&&0===b.getPropertyValue(e,"display")&&(u=!0,b.setPropertyValue(e,"display",b.Values.getDisplayType(e))),!n){if("height"===r&&"border-box"!==b.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var c=e.offsetHeight-(parseFloat(b.getPropertyValue(e,"borderTopWidth"))||0)-(parseFloat(b.getPropertyValue(e,"borderBottomWidth"))||0)-(parseFloat(b.getPropertyValue(e,"paddingTop"))||0)-(parseFloat(b.getPropertyValue(e,"paddingBottom"))||0);return o(),c}if("width"===r&&"border-box"!==b.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var p=e.offsetWidth-(parseFloat(b.getPropertyValue(e,"borderLeftWidth"))||0)-(parseFloat(b.getPropertyValue(e,"borderRightWidth"))||0)-(parseFloat(b.getPropertyValue(e,"paddingLeft"))||0)-(parseFloat(b.getPropertyValue(e,"paddingRight"))||0);return o(),p}}var g;g=i(e)===a?t.getComputedStyle(e,null):i(e).computedStyle?i(e).computedStyle:i(e).computedStyle=t.getComputedStyle(e,null),(d||y.State.isFirefox)&&"borderColor"===r&&(r="borderTopColor"),l=9===d&&"filter"===r?g.getPropertyValue(r):g[r],(""===l||null===l)&&(l=e.style[r]),o()}if("auto"===l&&/^(top|right|bottom|left)$/i.test(r)){var f=s(e,"position");("fixed"===f||"absolute"===f&&/top|left/i.test(r))&&(l=$(e).position()[r]+"px")}return l}var l;if(b.Hooks.registered[r]){var u=r,c=b.Hooks.getRoot(u);o===a&&(o=b.getPropertyValue(e,b.Names.prefixCheck(c)[0])),b.Normalizations.registered[c]&&(o=b.Normalizations.registered[c]("extract",e,o)),l=b.Hooks.extractValue(u,o)}else if(b.Normalizations.registered[r]){var p,g;p=b.Normalizations.registered[r]("name",e),"transform"!==p&&(g=s(e,b.Names.prefixCheck(p)[0]),b.Values.isCSSNullValue(g)&&b.Hooks.templates[r]&&(g=b.Hooks.templates[r][1])),l=b.Normalizations.registered[r]("extract",e,g)}return/^[\d-]/.test(l)||(l=i(e)&&i(e).isSVG&&b.Names.SVGAttribute(r)?/^(height|width)$/i.test(r)?e.getBBox()[r]:e.getAttribute(r):s(e,b.Names.prefixCheck(r)[0])),b.Values.isCSSNullValue(l)&&(l=0),y.debug>=2&&console.log("Get "+r+": "+l),l},setPropertyValue:function(e,r,a,o,n){var s=r;if("scroll"===r)n.container?n.container["scroll"+n.direction]=a:"Left"===n.direction?t.scrollTo(a,n.alternateValue):t.scrollTo(n.alternateValue,a);else if(b.Normalizations.registered[r]&&"transform"===b.Normalizations.registered[r]("name",e))b.Normalizations.registered[r]("inject",e,a),s="transform",a=i(e).transformCache[r];else{if(b.Hooks.registered[r]){var l=r,u=b.Hooks.getRoot(r);o=o||b.getPropertyValue(e,u),a=b.Hooks.injectValue(l,a,o),r=u}if(b.Normalizations.registered[r]&&(a=b.Normalizations.registered[r]("inject",e,a),r=b.Normalizations.registered[r]("name",e)),s=b.Names.prefixCheck(r)[0],8>=d)try{e.style[s]=a}catch(c){y.debug&&console.log("Browser does not support ["+a+"] for ["+s+"]")}else i(e)&&i(e).isSVG&&b.Names.SVGAttribute(r)?e.setAttribute(r,a):e.style[s]=a;y.debug>=2&&console.log("Set "+r+" ("+s+"): "+a)}return[s,a]},flushTransformCache:function(e){function t(t){return parseFloat(b.getPropertyValue(e,t))}var r="";if((d||y.State.isAndroid&&!y.State.isChrome)&&i(e).isSVG){var a={translate:[t("translateX"),t("translateY")],skewX:[t("skewX")],skewY:[t("skewY")],scale:1!==t("scale")?[t("scale"),t("scale")]:[t("scaleX"),t("scaleY")],rotate:[t("rotateZ"),0,0]};$.each(i(e).transformCache,function(e){/^translate/i.test(e)?e="translate":/^scale/i.test(e)?e="scale":/^rotate/i.test(e)&&(e="rotate"),a[e]&&(r+=e+"("+a[e].join(" ")+") ",delete a[e])})}else{var o,n;$.each(i(e).transformCache,function(t){return o=i(e).transformCache[t],"transformPerspective"===t?(n=o,!0):(9===d&&"rotateZ"===t&&(t="rotate"),void(r+=t+o+" "))}),n&&(r="perspective"+n+" "+r)}b.setPropertyValue(e,"transform",r)}};b.Hooks.register(),b.Normalizations.register(),y.animate=function(){function e(){return f?k.promise||null:h}function n(){function e(e){function c(e,t){var r=a,o=a,i=a;return m.isArray(e)?(r=e[0],!m.isArray(e[1])&&/^[\d-]/.test(e[1])||m.isFunction(e[1])||b.RegEx.isHex.test(e[1])?i=e[1]:(m.isString(e[1])&&!b.RegEx.isHex.test(e[1])||m.isArray(e[1]))&&(o=t?e[1]:s(e[1],u.duration),e[2]!==a&&(i=e[2]))):r=e,t||(o=o||u.easing),m.isFunction(r)&&(r=r.call(n,w,P)),m.isFunction(i)&&(i=i.call(n,w,P)),[r||0,o,i]}function p(e,t){var r,a;return a=(t||0).toString().toLowerCase().replace(/[%A-z]+$/,function(e){return r=e,""}),r||(r=b.Values.getUnitType(e)),[a,r]}function f(){var e={parent:n.parentNode,position:b.getPropertyValue(n,"position"),fontSize:b.getPropertyValue(n,"fontSize")},a=e.position===j.lastPosition&&e.parent===j.lastParent,o=e.fontSize===j.lastFontSize&&e.parent===j.lastParent;j.lastParent=e.parent,j.lastPosition=e.position,j.lastFontSize=e.fontSize,null===j.remToPx&&(j.remToPx=parseFloat(b.getPropertyValue(r.body,"fontSize"))||16),null===j.vwToPx&&(j.vwToPx=parseFloat(t.innerWidth)/100,j.vhToPx=parseFloat(t.innerHeight)/100);var s={overflowX:null,overflowY:null,boxSizing:null,width:null,minWidth:null,maxWidth:null,height:null,minHeight:null,maxHeight:null,paddingLeft:null},l={},u=10;if(l.remToPx=j.remToPx,l.vwToPx=j.vwToPx,l.vhToPx=j.vhToPx,d&&!i(n).isSVG)var c=/^auto$/i.test(n.currentStyle.width),p=/^auto$/i.test(n.currentStyle.height);a&&o||(i(n).isSVG||(s.overflowX=b.getPropertyValue(n,"overflowX"),s.overflowY=b.getPropertyValue(n,"overflowY"),s.boxSizing=b.getPropertyValue(n,"boxSizing"),s.minWidth=b.getPropertyValue(n,"minWidth"),s.maxWidth=b.getPropertyValue(n,"maxWidth")||"none",s.minHeight=b.getPropertyValue(n,"minHeight"),s.maxHeight=b.getPropertyValue(n,"maxHeight")||"none",s.paddingLeft=b.getPropertyValue(n,"paddingLeft")),s.width=b.getPropertyValue(n,"width",null,!0),s.height=b.getPropertyValue(n,"height",null,!0)),a?(l.percentToPxRatioWidth=j.lastPercentToPxWidth,l.percentToPxRatioHeight=j.lastPercentToPxHeight):(i(n).isSVG||(b.setPropertyValue(n,"overflowX","hidden"),b.setPropertyValue(n,"overflowY","hidden"),b.setPropertyValue(n,"boxSizing","content-box"),b.setPropertyValue(n,"minWidth",u+"%"),b.setPropertyValue(n,"maxWidth",u+"%"),b.setPropertyValue(n,"minHeight",u+"%"),b.setPropertyValue(n,"maxHeight",u+"%")),b.setPropertyValue(n,"width",u+"%"),b.setPropertyValue(n,"height",u+"%")),o?l.emToPx=j.lastEmToPx:i(n).isSVG||b.setPropertyValue(n,"paddingLeft",u+"em"),a||(l.percentToPxRatioWidth=j.lastPercentToPxWidth=(parseFloat(b.getPropertyValue(n,"width",null,!0))||1)/u,l.percentToPxRatioHeight=j.lastPercentToPxHeight=(parseFloat(b.getPropertyValue(n,"height",null,!0))||1)/u),o||(l.emToPx=j.lastEmToPx=(parseFloat(b.getPropertyValue(n,"paddingLeft"))||1)/u);for(var g in s)null!==s[g]&&b.setPropertyValue(n,g,s[g]);return i(n).isSVG||(d?(c&&b.setPropertyValue(n,"width","auto"),p&&b.setPropertyValue(n,"height","auto")):(b.setPropertyValue(n,"height","auto"),s.height!==b.getPropertyValue(n,"height",null,!0)&&b.setPropertyValue(n,"height",s.height),b.setPropertyValue(n,"width","auto"),s.width!==b.getPropertyValue(n,"width",null,!0)&&b.setPropertyValue(n,"width",s.width))),y.debug>=1&&console.log("Unit ratios: "+JSON.stringify(l),n),l}if(u.begin&&0===w)try{u.begin.call(x,x)}catch(h){setTimeout(function(){throw h},1)}if("scroll"===E){var v=/^x$/i.test(u.axis)?"Left":"Top",T=parseFloat(u.offset)||0,C,F,H;u.container?u.container.jquery||m.isNode(u.container)?(u.container=u.container[0]||u.container,C=u.container["scroll"+v],H=C+$(n).position()[v.toLowerCase()]+T):u.container=null:(C=y.State.scrollAnchor[y.State["scrollProperty"+v]],F=y.State.scrollAnchor[y.State["scrollProperty"+("Left"===v?"Top":"Left")]],H=$(n).offset()[v.toLowerCase()]+T),g={scroll:{rootPropertyValue:!1,startValue:C,currentValue:C,endValue:H,unitType:"",easing:u.easing,scrollData:{container:u.container,direction:v,alternateValue:F}},element:n},y.debug&&console.log("tweensContainer (scroll): ",g.scroll,n)}else if("reverse"===E){if(!i(n).tweensContainer)return void $.dequeue(n,u.queue);"none"===i(n).opts.display&&(i(n).opts.display="block"),"hidden"===i(n).opts.visibility&&(i(n).opts.visibility="visible"),i(n).opts.loop=!1,i(n).opts.begin=null,i(n).opts.complete=null,V.easing||delete u.easing,V.duration||delete u.duration,u=$.extend({},i(n).opts,u);var A=$.extend(!0,{},i(n).tweensContainer);for(var N in A)if("element"!==N){var R=A[N].startValue;A[N].startValue=A[N].currentValue=A[N].endValue,A[N].endValue=R,m.isEmptyObject(V)||(A[N].easing=u.easing),y.debug&&console.log("reverse tweensContainer ("+N+"): "+JSON.stringify(A[N]),n)}g=A}else if("start"===E){var A;i(n).tweensContainer&&i(n).isAnimating===!0&&(A=i(n).tweensContainer),$.each(S,function(e,t){if(RegExp("^"+b.Lists.colors.join("$|^")+"$").test(e)){var r=c(t,!0),o=r[0],i=r[1],n=r[2];if(b.RegEx.isHex.test(o)){for(var s=["Red","Green","Blue"],l=b.Values.hexToRgb(o),u=n?b.Values.hexToRgb(n):a,p=0;p<s.length;p++)S[e+s[p]]=[l[p],i,u?u[p]:u];delete S[e]}}});for(var z in S){var M=c(S[z]),q=M[0],W=M[1],G=M[2];z=b.Names.camelCase(z);var X=b.Hooks.getRoot(z),Y=!1;if(i(n).isSVG||b.Names.prefixCheck(X)[1]!==!1||b.Normalizations.registered[X]!==a){(u.display&&"none"!==u.display||u.visibility&&"hidden"!==u.visibility)&&/opacity|filter/.test(z)&&!G&&0!==q&&(G=0),u._cacheValues&&A&&A[z]?(G===a&&(G=A[z].endValue+A[z].unitType),Y=i(n).rootPropertyValueCache[X]):b.Hooks.registered[z]?G===a?(Y=b.getPropertyValue(n,X),G=b.getPropertyValue(n,z,Y)):Y=b.Hooks.templates[X][1]:G===a&&(G=b.getPropertyValue(n,z));var B,O,I,Q=!1;B=p(z,G),G=B[0],I=B[1],B=p(z,q),q=B[0].replace(/^([+-\/*])=/,function(e,t){return Q=t,""}),O=B[1],G=parseFloat(G)||0,q=parseFloat(q)||0;var U;if("%"===O&&(/^(fontSize|lineHeight)$/.test(z)?(q/=100,O="em"):/^scale/.test(z)?(q/=100,O=""):/(Red|Green|Blue)$/i.test(z)&&(q=q/100*255,O="")),/[\/*]/.test(Q))O=I;else if(I!==O&&0!==G)if(0===q)O=I;else{U=U||f();var D=/margin|padding|left|right|width|text|word|letter/i.test(z)||/X$/.test(z)?"x":"y";switch(I){case"%":G*="x"===D?U.percentToPxRatioWidth:U.percentToPxRatioHeight;break;case"px":break;default:G*=U[I+"ToPx"]}switch(O){case"%":G*=1/("x"===D?U.percentToPxRatioWidth:U.percentToPxRatioHeight);break;case"px":break;default:G*=1/U[O+"ToPx"]}}switch(Q){case"+":q=G+q;break;case"-":q=G-q;break;case"*":q=G*q;break;case"/":q=G/q}g[z]={rootPropertyValue:Y,startValue:G,currentValue:G,endValue:q,unitType:O,easing:W},y.debug&&console.log("tweensContainer ("+z+"): "+JSON.stringify(g[z]),n)}else y.debug&&console.log("Skipping ["+X+"] due to a lack of browser support.")}g.element=n}g.element&&(b.Values.addClass(n,"velocity-animating"),L.push(g),i(n).tweensContainer=g,i(n).opts=u,i(n).isAnimating=!0,w===P-1?(y.State.calls.length>1e4&&(y.State.calls=o(y.State.calls)),y.State.calls.push([L,x,u,null,k.resolver]),y.State.isTicking===!1&&(y.State.isTicking=!0,l())):w++)}var n=this,u=$.extend({},y.defaults,V),g={};if(i(n)===a&&$.data(n,c,{isSVG:m.isSVG(n),isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}}),parseFloat(u.delay)&&u.queue!==!1&&$.queue(n,u.queue,function(e){y.velocityQueueEntryFlag=!0,i(n).delayTimer={setTimeout:setTimeout(e,parseFloat(u.delay)),next:e}}),y.mock===!0)u.duration=1;else switch(u.duration.toString().toLowerCase()){case"fast":u.duration=200;break;case"normal":u.duration=p;break;case"slow":u.duration=600;break;default:u.duration=parseFloat(u.duration)||1}u.easing=s(u.easing,u.duration),u.begin&&!m.isFunction(u.begin)&&(u.begin=null),u.progress&&!m.isFunction(u.progress)&&(u.progress=null),u.complete&&!m.isFunction(u.complete)&&(u.complete=null),u.display&&(u.display=u.display.toString().toLowerCase(),"auto"===u.display&&(u.display=y.CSS.Values.getDisplayType(n))),u.visibility&&(u.visibility=u.visibility.toString().toLowerCase()),u.mobileHA=u.mobileHA&&y.State.isMobile&&!y.State.isGingerbread,u.queue===!1?u.delay?setTimeout(e,u.delay):e():$.queue(n,u.queue,function(t,r){return r===!0?(k.promise&&k.resolver(x),!0):(y.velocityQueueEntryFlag=!0,void e(t))}),""!==u.queue&&"fx"!==u.queue||"inprogress"===$.queue(n)[0]||$.dequeue(n)}var g=arguments[0]&&($.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||m.isString(arguments[0].properties)),f,h,v,x,S,V;if(m.isWrapped(this)?(f=!1,v=0,x=this,h=this):(f=!0,v=1,x=g?arguments[0].elements:arguments[0]),x=m.isWrapped(x)?[].slice.call(x):x){g?(S=arguments[0].properties,V=arguments[0].options):(S=arguments[v],V=arguments[v+1]);var P=m.isArray(x)||m.isNodeList(x)?x.length:1,w=0;if("stop"!==S&&!$.isPlainObject(V)){var T=v+1;V={};for(var C=T;C<arguments.length;C++)!m.isArray(arguments[C])&&/^\d/.test(arguments[C])?V.duration=parseFloat(arguments[C]):m.isString(arguments[C])||m.isArray(arguments[C])?V.easing=arguments[C]:m.isFunction(arguments[C])&&(V.complete=arguments[C])}var k={promise:null,resolver:null,rejecter:null};f&&y.Promise&&(k.promise=new y.Promise(function(e,t){k.resolver=e,k.rejecter=t}));var E;switch(S){case"scroll":E="scroll";break;case"reverse":E="reverse";break;case"stop":$.each(m.isNode(x)?[x]:x,function(e,t){i(t)&&i(t).delayTimer&&(clearTimeout(i(t).delayTimer.setTimeout),i(t).delayTimer.next&&i(t).delayTimer.next(),delete i(t).delayTimer)});var F=[];return $.each(y.State.calls,function(e,t){t&&$.each(m.isNode(t[1])?[t[1]]:t[1],function(t,r){$.each(m.isNode(x)?[x]:x,function(t,a){if(a===r){if(i(a)&&$.each(i(a).tweensContainer,function(e,t){t.endValue=t.currentValue}),V===!0||m.isString(V)){var o=m.isString(V)?V:"";$.each($.queue(a,o),function(e,t){m.isFunction(t)&&t(null,!0)}),$.queue(a,o,[])}F.push(e)}})})}),$.each(F,function(e,t){u(t,!0)}),k.promise&&k.resolver(x),e();default:if(!$.isPlainObject(S)||m.isEmptyObject(S)){if(m.isString(S)&&y.Sequences[S]){var H=V.duration,A=V.delay||0;return V.backwards===!0&&(x=(x.jquery?[].slice.call(x):x).reverse()),$.each(x,function(e,t){parseFloat(V.stagger)?V.delay=A+parseFloat(V.stagger)*e:m.isFunction(V.stagger)&&(V.delay=A+V.stagger.call(t,e,P)),V.drag&&(V.duration=parseFloat(H)||(/^(callout|transition)/.test(S)?1e3:p),V.duration=Math.max(V.duration*(V.backwards?1-e/P:(e+1)/P),.75*V.duration,200)),y.Sequences[S].call(t,t,V||{},e,P,x,k.promise?k:a)}),e()}var N="Velocity: First argument ("+S+") was not a property map, a known action, or a registered sequence. Aborting.";return k.promise?k.rejecter(new Error(N)):console.log(N),e()}E="start"}var j={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null},L=[];$.each(m.isNode(x)?[x]:x,function(e,t){m.isNode(t)&&n.call(t)});var R=$.extend({},y.defaults,V),z;if(R.loop=parseInt(R.loop),z=2*R.loop-1,R.loop)for(var M=0;z>M;M++){var q={delay:R.delay};M===z-1&&(q.display=R.display,q.visibility=R.visibility,q.complete=R.complete),y.animate(x,"reverse",q)}return e()}};var S=t.jQuery||t.Zepto;S&&(S.fn.velocity=y.animate,S.fn.velocity.defaults=y.defaults),"undefined"!=typeof define&&define.amd?define(function(){return y}):"undefined"!=typeof module&&module.exports&&(module.exports=y),$.each(["Down","Up"],function(e,t){y.Sequences["slide"+t]=function(e,r,a,o,i,n){var s=$.extend({},r),l={height:null,marginTop:null,marginBottom:null,paddingTop:null,paddingBottom:null,overflow:null,overflowX:null,overflowY:null},u=s.begin,c=s.complete,p=!1;null!==s.display&&(s.display="Down"===t?s.display||"auto":s.display||"none"),s.begin=function(){function r(){l.height=parseFloat(y.CSS.getPropertyValue(e,"height")),e.style.height="auto",parseFloat(y.CSS.getPropertyValue(e,"height"))===l.height&&(p=!0),y.CSS.setPropertyValue(e,"height",l.height+"px")}if("Down"===t){l.overflow=[y.CSS.getPropertyValue(e,"overflow"),0],l.overflowX=[y.CSS.getPropertyValue(e,"overflowX"),0],l.overflowY=[y.CSS.getPropertyValue(e,"overflowY"),0],e.style.overflow="hidden",e.style.overflowX="visible",e.style.overflowY="hidden",r();for(var a in l)if(!/^overflow/.test(a)){var o=y.CSS.getPropertyValue(e,a);"height"===a&&(o=parseFloat(o)),l[a]=[o,0]}}else{r();for(var a in l){var o=y.CSS.getPropertyValue(e,a);"height"===a&&(o=parseFloat(o)),l[a]=[0,o]}e.style.overflow="hidden",e.style.overflowX="visible",e.style.overflowY="hidden"}u&&u.call(e,e)},s.complete=function(e){var r="Down"===t?0:1;p===!0?l.height[r]="auto":l.height[r]+="px";for(var a in l)e.style[a]=l[a][r];c&&c.call(e,e),n&&n.resolver(i||e)},y.animate(e,l,s)}}),$.each(["In","Out"],function(e,t){y.Sequences["fade"+t]=function(e,r,a,o,i,n){var s=$.extend({},r),l={opacity:"In"===t?1:0};if(a!==o-1)s.complete=s.begin=null;else{var u=s.complete;s.complete=function(){u&&u.call(e,e),n&&n.resolver(i||e)}}null!==s.display&&(s.display=s.display||("In"===t?"auto":"none")),y.animate(this,l,s)}})}(window.jQuery||window.Zepto||window,window,document);