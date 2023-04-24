!function(){"use strict";var e={};(function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})})(e),window.newspackRAS=window.newspackRAS||[],window.newspackRAS.push((function(e){var t;t=function(){const t=[...document.querySelectorAll(".newspack-reader-auth")],n=[...document.querySelectorAll(".woocommerce-message")];if(!t.length)return;let a,o,r=[],l=null;const c=function(){a=document.querySelectorAll(".newspack-reader__account-link"),o=document.querySelectorAll("[data-newspack-reader-account-link]"),o.forEach((e=>{e.addEventListener("click",s)}))};function i(){const t=[...document.querySelectorAll(".newspack-reader-auth")];t.length&&t.forEach((t=>{const n=t.querySelector("form"),o=t.querySelector('input[name="npe"]'),r=t.querySelector('input[name="redirect"]'),l=e.getReader();if(o&&(o.value=l?.email||""),a?.length&&a.forEach((e=>{l?.email&&!l?.authenticated?(e.setAttribute("data-redirect",e.getAttribute("href")),r.value=e.getAttribute("href")):e.removeAttribute("data-redirect");try{const t=JSON.parse(e.getAttribute("data-labels"));e.querySelector(".newspack-reader__account-link__label").textContent=l?.email?t.signedin:t.signedout}catch{}})),l?.authenticated){const e=t.querySelector(".newspack-reader__auth-form__response__content");e&&n&&n.replaceWith(e.parentNode)}}))}function s(t){const n=e.getReader();if(n?.authenticated)return;const a=document.querySelector(".newspack-reader-auth:not(.newspack-reader__auth-form__inline)");if(!a)return;t.preventDefault();const o=a.querySelector("[data-has-auth-link]"),c=a.querySelector('input[name="npe"]'),i=a.querySelector('input[name="redirect"]'),s=a.querySelector('input[name="password"]'),u=a.querySelector('input[name="action"]');o&&(e.hasAuthLink()?o.style.display="flex":o.style.display="none"),c&&(c.value=n?.email||""),i&&t.target.getAttribute("data-redirect")&&(i.value=t.target.getAttribute("data-redirect")),a.hidden=!1,a.style.display="flex",r=document.querySelectorAll(".newspack-lightbox:not([amp-access-hide])"),l=t.currentTarget.closest(".newspack-lightbox"),r.forEach((e=>e.setAttribute("amp-access-hide",""))),s&&c?.value&&"pwd"===u?.value?s.focus():c.focus()}c(),setTimeout(c,1e3),e.on("reader",i),i(),t.forEach((t=>{const a=t.querySelector("form");let o;a.getAttribute("action-xhr")?(a.removeAttribute("action-xhr"),o=a.cloneNode(!0),a.replaceWith(o)):o=a;const c=o.querySelector('input[name="action"]'),i=o.querySelector('input[name="npe"]'),s=o.querySelector('input[name="otp_code"]'),u=o.querySelector('input[name="password"]'),d=o.querySelectorAll('[type="submit"]'),p=t.querySelector("button[data-close]");p&&p.addEventListener("click",(function(n){n.preventDefault(),t.classList.remove("newspack-reader__auth-form__visible"),t.style.display="none",(()=>{const t=e.getReader()?.email&&l;r.forEach((e=>{t&&l.isEqualNode(e)?e.setAttribute("amp-access-hide",""):e.removeAttribute("amp-access-hide")}))})()}));const h=t.querySelector(".newspack-reader__auth-form__response__content");function g(n){let a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if("otp"!==n||e.getOTPHash()){["link","pwd"].includes(n)&&e.setAuthStrategy(n),c.value=n,t.removeAttribute("data-form-status"),h.innerHTML="",t.querySelectorAll("[data-action]").forEach((e=>{"none"!==e.style.display&&(e.prevDisplay=e.style.display),e.style.display="none"})),t.querySelectorAll('[data-action~="'+n+'"]').forEach((e=>{e.style.display=e.prevDisplay}));try{const e=JSON.parse(t.getAttribute("data-labels")),a="register"===n?e.register:e.signin;t.querySelector("h2").textContent=a}catch{}a&&("pwd"===n&&i.value?u.focus():"otp"===n?s.focus():i.focus())}}t.querySelector("[data-has-auth-link]").hidden=!0,g(e.getAuthStrategy()||"link"),e.on("reader",(()=>{e.getOTPHash()&&g("otp")})),t.querySelectorAll("[data-set-action]").forEach((e=>{e.addEventListener("click",(function(e){e.preventDefault(),g(e.target.getAttribute("data-set-action"),!0)}))})),o.startLoginFlow=()=>{t.removeAttribute("data-form-status"),d.forEach((e=>{e.disabled=!0})),h.innerHTML="",o.style.opacity=.5},o.endLoginFlow=function(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,l=arguments.length>3?arguments[3]:void 0;if(n){const e=document.createElement("p");e.textContent=n,h.appendChild(e)}if(200===a&&r){const t=!!r?.authenticated;e.setReaderEmail(r.email),e.setAuthenticated(t),t?l&&(window.location=l):o.replaceWith(h.parentNode)}t.setAttribute("data-form-status",a),o.style.opacity=1,d.forEach((e=>{e.disabled=!1}))},o.addEventListener("submit",(a=>{a.preventDefault(),o.startLoginFlow(),0<n.length&&n.forEach((e=>e.style.display="none"));const r=o.action?.value;return o.npe?.value?"pwd"!==r||o.password?.value?void e.getCaptchaToken().then((e=>{if(!e)return;let t=o.captcha_token;t||(t=document.createElement("input"),t.setAttribute("type","hidden"),t.setAttribute("name","captcha_token"),o.appendChild(t)),t.value=e})).catch((e=>{o.endLoginFlow(e,400)})).finally((()=>{const n=new FormData(a.target);if(!n.has("npe")||!n.get("npe"))return o.endFlow(newspack_reader_auth_labels.invalid_email,400);e.setReaderEmail(n.get("npe")),"otp"===r?e.authenticateOTP(n.get("otp_code")).then((e=>{o.endLoginFlow(e.message,200,e,n.get("redirect"))})).catch((e=>{e.expired&&g("link"),o.endLoginFlow(e.message,400)})):fetch(o.getAttribute("action")||window.location.pathname,{method:"POST",headers:{Accept:"application/json"},body:n}).then((a=>{const l=e.getOTPHash();"link"===r&&l?(o.endLoginFlow(null,0),g("otp")):(t.setAttribute("data-form-status",a.status),a.json().then((e=>{let{message:t,data:l}=e,c=n.get("redirect");"register"===r&&(c=newspack_reader_activation_data.account_url),o.endLoginFlow(t,a.status,l,c)})).catch((()=>{o.endLoginFlow()})))})).catch((()=>{o.endLoginFlow()}))})):o.endLoginFlow(newspack_reader_auth_labels.invalid_password,400):o.endLoginFlow(newspack_reader_auth_labels.invalid_email,400)}))})),document.querySelectorAll('input[name="otp_code"]').forEach((e=>{const t=parseInt(e.getAttribute("maxlength"));if(!t)return;const n=e.parentNode;n.removeChild(e);const a=[],o=document.createElement("input");o.setAttribute("type","hidden"),o.setAttribute("name","otp_code"),n.appendChild(o);for(let e=0;e<t;e++){const r=document.createElement("input");r.setAttribute("type","text"),r.setAttribute("maxlength","1"),r.setAttribute("pattern","[0-9]"),r.setAttribute("autocomplete","off"),r.setAttribute("inputmode","numeric"),r.setAttribute("data-index",e),r.addEventListener("keydown",(t=>{const r=n.querySelector(`[data-index="${e-1}"]`),l=n.querySelector(`[data-index="${e+1}"]`);switch(t.key){case"Backspace":t.preventDefault(),t.target.value="",r&&r.focus(),a[e]="",o.value=a.join("");break;case"ArrowLeft":t.preventDefault(),r&&r.focus();break;case"ArrowRight":t.preventDefault(),l&&l.focus();break;default:t.key.match(/^[0-9]$/)&&(t.preventDefault(),t.target.value=t.key,t.target.dispatchEvent(new Event("input",{bubbles:!0,cancelable:!0})),l&&l.focus())}})),r.addEventListener("input",(t=>{t.target.value.match(/^[0-9]$/)?a[e]=t.target.value:t.target.value="",o.value=a.join("")})),r.addEventListener("paste",(e=>{e.preventDefault();const r=(e.clipboardData||window.clipboardData).getData("text");if(r.length===t){for(let e=0;e<t;e++)r[e].match(/^[0-9]$/)&&(n.querySelector(`[data-index="${e}"]`).value=r[e],a[e]=r[e]);o.value=a.join("")}})),n.appendChild(r)}})),[...document.querySelectorAll(".newspack-reader__logins")].forEach((e=>{e.classList.remove("newspack-reader__logins--disabled")})),document.querySelectorAll(".newspack-reader__logins__google").forEach((e=>{const t=e.closest("form"),n=t.querySelector('input[name="redirect"]');e.addEventListener("click",(()=>{t?.startLoginFlow&&t.startLoginFlow();const e=t?function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Array.from(e.entries()).reduce(((e,n)=>{let[a,o]=n;return t.includes(a)?(a.indexOf("[]")>-1?(a=a.replace("[]",""),e[a]=e[a]||[],e[a].push(o)):e[a]=o,e):e}),{})}(new FormData(t),["lists[]"]):{};e.current_page_url=window.location.href;const a=window.open("about:blank","newspack_google_login","width=500,height=600");fetch("/wp-json/newspack/v1/login/google").then((e=>e.json().then((t=>Promise.resolve({data:t,status:e.status}))))).then((o=>{let{data:r,status:l}=o;if(200!==l)a&&a.close(),t?.endLoginFlow&&t.endLoginFlow(r.message,l);else if(a){a.location=r;const o=setInterval((()=>{a.closed&&((e=>{fetch(`/wp-json/newspack/v1/login/google/register?metadata=${JSON.stringify(e)}`).then((e=>{e.json().then((a=>{let{message:o,data:r}=a;const l=n?.value||null;t?.endLoginFlow&&t.endLoginFlow(o,e.status,r,l)})).catch((n=>{t?.endLoginFlow&&t.endLoginFlow(n?.message,e.status)}))})).catch((e=>{t?.endLoginFlow&&t.endLoginFlow(e?.message)}))})(e),clearInterval(o))}),500)}else t?.endLoginFlow&&t.endLoginFlow(newspack_reader_auth_labels.blocked_popup)})).catch((e=>{console.log(e),t?.endLoginFlow&&t.endLoginFlow(e?.message,400),a&&a.close()}))}))}))},"undefined"!=typeof document&&("complete"!==document.readyState&&"interactive"!==document.readyState?document.addEventListener("DOMContentLoaded",t):t())}));var t=window;for(var n in e)t[n]=e[n];e.__esModule&&Object.defineProperty(t,"__esModule",{value:!0})}();