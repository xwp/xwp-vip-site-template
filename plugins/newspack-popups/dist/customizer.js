(()=>{"use strict";var e={r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};
/*! js-cookie v3.0.1 | MIT */
function o(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)e[n]=o[n]}return e}e.r(t);var n=function e(t,n){function r(e,r,i){if("undefined"!=typeof document){"number"==typeof(i=o({},n,i)).expires&&(i.expires=new Date(Date.now()+864e5*i.expires)),i.expires&&(i.expires=i.expires.toUTCString()),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var c="";for(var a in i)i[a]&&(c+="; "+a,!0!==i[a]&&(c+="="+i[a].split(";")[0]));return document.cookie=e+"="+t.write(r,e)+c}}return Object.create({set:r,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var o=document.cookie?document.cookie.split("; "):[],n={},r=0;r<o.length;r++){var i=o[r].split("="),c=i.slice(1).join("=");try{var a=decodeURIComponent(i[0]);if(n[a]=t.read(c,a),e===a)break}catch(u){}}return e?n[e]:n}},remove:function(e,t){r(e,"",o({},t,{expires:-1}))},withAttributes:function(t){return e(this.converter,o({},this.attributes,t))},withConverter:function(t){return e(o({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(n)},converter:{value:Object.freeze(t)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"});const r=n;jQuery,wp.customize.bind("ready",(function(){newspack_popups_customizer_data.cookie_name&&(window.location.host.split(".").reduce((function(e,t,o,n){return e.push(n.slice(-(o+1)).join(".")),e}),[]).map((function(e){return r.remove(newspack_popups_customizer_data.cookie_name,{domain:".".concat(e)})})),r.set(newspack_popups_customizer_data.cookie_name,"preview-".concat(Date.now()),{domain:"."+window.location.host}))}));var i=window;for(var c in t)i[c]=t[c];t.__esModule&&Object.defineProperty(i,"__esModule",{value:!0})})();