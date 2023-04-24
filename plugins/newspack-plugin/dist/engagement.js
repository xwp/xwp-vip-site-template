!function(){"use strict";var e,t={5528:function(e,t,n){n.r(t);var a=n(7462),r=n(4942),s=(n(5674),n(9307)),i=n(5736),l=n(8169),o=n(9674),c=n(2819),p=n(6989),d=n.n(p),u=n(5609);const m=i.__,w=e=>{let{className:t,onUpdate:n,authUrl:r=!1,isOnboarding:o=!0}=e;const[p,w]=(0,s.useState)(),[h,g]=l.PT.useObjectState({}),k=e=>{g(e),n&&n((0,c.mapValues)(e.settings,(0,c.property)("value")))},f=()=>{d()({path:"/newspack/v1/wizard/newspack-engagement-wizard/newsletters"}).then(k).catch(w)},E=()=>{r&&(window.open(r,"esp_oauth","width=500,height=600").opener={verify:(0,c.once)((()=>{window.location.reload()}))})};(0,s.useEffect)(f,[]);const b=e=>({value:h.settings[e]?.value||"",checked:Boolean(h.settings[e]?.value),label:h.settings[e]?.description,placeholder:h.settings[e]?.placeholder,options:h.settings[e]?.options?.map((e=>({value:e.value,label:e.name})))||null,onChange:t=>k({settings:{[e]:{value:t}}})});return!p&&(0,c.isEmpty)(h)?(0,s.createElement)("div",{className:"flex justify-around mt4"},(0,s.createElement)(l.Pi,null)):p?(0,s.createElement)(l.qX,{noticeText:p.message||m("Something went wrong.","newspack"),isError:!0}):(0,s.createElement)("div",{className:t},!1===h.configured&&(0,s.createElement)(l.xf,{plugins:["newspack-newsletters"],withoutFooterButton:!0,onStatus:e=>{let{complete:t}=e;return t&&f()}}),!0===h.configured&&(()=>{const e=b("newspack_newsletters_service_provider");return(0,s.createElement)(l.rj,{gutter:16,columns:1},!1!==r&&(0,s.createElement)(l.Zb,{isSmall:!0},(0,s.createElement)("h3",null,m("Authorize Application","newspack")),(0,s.createElement)("p",null,(0,i.sprintf)(m("Authorize %s to connect to Newspack.","newspack-newsletters"),(()=>{const e=h.settings.newspack_newsletters_service_provider,t=e?.value;return e?.options?.find((e=>e.value===t))?.name})())),(0,s.createElement)(l.zx,{isSecondary:!0,onClick:E},m("Authorize","newspack"))),(0,c.values)(h.settings).filter((t=>!t.provider||t.provider===e.value)).map((e=>{if(o&&!e.onboarding)return null;switch(e.type){case"select":return(0,s.createElement)(l.Yw,(0,a.Z)({key:e.key},b(e.key)));case"checkbox":return(0,s.createElement)(u.CheckboxControl,(0,a.Z)({key:e.key},b(e.key)));default:return(0,s.createElement)(l.rj,{columns:1,gutter:8,key:e.key},(0,s.createElement)(l.w4,b(e.key)),e.help&&e.helpURL&&(0,s.createElement)("p",null,(0,s.createElement)(u.ExternalLink,{href:e.helpURL},e.help)))}})))})())},h=e=>{let{onUpdate:t}=e;const[n,a]=(0,s.useState)(!1),[r,i]=(0,s.useState)(!1),[o,c]=(0,s.useState)([]),p=e=>{c(e),"function"==typeof t&&t(e)},w=(e,t)=>n=>{const a=[...o];a[e][t]=n,p(a)};return(0,s.useEffect)((()=>{a(!1),i(!0),d()({path:"/newspack-newsletters/v1/lists"}).then(p).catch(a).finally((()=>i(!1)))}),[]),o?.length||n?(0,s.createElement)(s.Fragment,null,(0,s.createElement)(l.Zb,{headerActions:!0,noBorder:!0},(0,s.createElement)(l.M$,{title:m("Subscription Lists","newspack"),description:m("Manage the lists available for subscription.","newspack")}),newspack_engagement_wizard.new_subscription_lists_url&&(0,s.createElement)(l.zx,{variant:"secondary",href:newspack_engagement_wizard.new_subscription_lists_url},m("Add New","newspack"))),n&&(0,s.createElement)(l.qX,{noticeText:n?.message||m("Something went wrong.","newspack"),isError:!0}),o.map(((e,t)=>(0,s.createElement)(l.fM,{key:e.id,title:e.name,description:e?.type_label?e.type_label:null,disabled:r,toggleOnChange:w(t,"active"),toggleChecked:e.active,actionText:e?.edit_link?(0,s.createElement)(u.ExternalLink,{href:e.edit_link},m("Edit","newspack_newsletters")):null},e.active&&"local"!==e?.type&&(0,s.createElement)(s.Fragment,null,(0,s.createElement)(l.w4,{label:m("List title","newspack"),value:e.title,disabled:r||"local"===e?.type,onChange:w(t,"title")}),(0,s.createElement)(u.TextareaControl,{label:m("List description","newspack"),value:e.description,disabled:r||"local"===e?.type,onChange:w(t,"description")}))))),(0,s.createElement)("div",{className:"newspack-buttons-card"},(0,s.createElement)(l.zx,{isPrimary:!0,onClick:()=>{a(!1),i(!0),d()({path:"/newspack-newsletters/v1/lists",method:"post",data:{lists:o}}).then(p).catch(a).finally((()=>i(!1)))},disabled:r},m("Save Subscription Lists","newspack")))):null},g=()=>{const[{newslettersConfig:e},t]=l.PT.useObjectState({}),[n,a]=(0,s.useState)(""),[r,i]=(0,s.useState)(!1),[o,c]=(0,s.useState)(!1);(0,s.useEffect)((()=>{const t=e?.newspack_newsletters_service_provider;i(!(!n||t===n)),!n&&t&&a(t)}),[e?.newspack_newsletters_service_provider]);const p=e=>{c(!1),e&&d()({path:`/newspack-newsletters/v1/${e}/verify_token`}).then((e=>{!e.valid&&e.auth_url?c(e.auth_url):c(!1)})).catch((()=>{c(!1)}))};return(0,s.useEffect)((()=>{p(e?.newspack_newsletters_service_provider)}),[e?.newspack_newsletters_service_provider]),(0,s.createElement)(s.Fragment,null,(0,s.createElement)(l.Zb,{headerActions:!0,noBorder:!0},(0,s.createElement)("h2",null,m("Authoring","newspack")),(0,s.createElement)(l.zx,{variant:"primary",onClick:async()=>d()({path:"/newspack/v1/wizard/newspack-engagement-wizard/newsletters",method:"POST",data:e}).finally((()=>{a(e?.newspack_newsletters_service_provider),p(e?.newspack_newsletters_service_provider),i(!1)}))},m("Save Settings","newspack"))),(0,s.createElement)(w,{isOnboarding:!1,onUpdate:e=>t({newslettersConfig:e}),authUrl:o}),r?(0,s.createElement)(l.qX,{noticeText:m("Please save your settings before changing your subscription lists.","newspack"),isWarning:!0}):(0,s.createElement)(h,null))};var k=(0,l.a4)((()=>(0,s.createElement)(s.Fragment,null,(0,s.createElement)(g,null),(0,s.createElement)(l.M$,{title:m("WooCommerce integration","newspack")}),(0,s.createElement)(l.xf,{plugins:["mailchimp-for-woocommerce"],withoutFooterButton:!0}))));const f=i.__;function E(e){let{value:t,onChange:n}=e;const[a,r]=(0,s.useState)(!1),[i,o]=(0,s.useState)([]),[c,p]=(0,s.useState)(!1);return(0,s.useEffect)((()=>{p(!1),r(!0),d()({path:"/newspack-newsletters/v1/lists"}).then(o).catch(p).finally((()=>r(!1)))}),[]),(0,s.createElement)(s.Fragment,null,c&&(0,s.createElement)(l.qX,{noticeText:c?.message||f("Something went wrong.","newspack"),isError:!0}),(0,s.createElement)(l.M$,{title:f("ActiveCampaign","newspack"),description:f("Settings for the ActiveCampaign integration.","newspack")}),(0,s.createElement)(l.Yw,{label:f("Master List","newspack"),help:f("Choose a list to which all registered readers will be added.","newspack"),disabled:a,value:t.masterList,onChange:("masterList",e=>n&&n("masterList",e)),options:[{value:"",label:f("None","newspack")},...i.map((e=>({label:e.name,value:e.id})))]}))}const b=i.__;var v=(0,l.a4)((()=>{const[e,t]=(0,s.useState)(!1),[n,r]=(0,s.useState)({}),[i,o]=(0,s.useState)({}),[c,p]=(0,s.useState)(!1),[m,w]=(0,s.useState)(!1),[h,g]=(0,s.useState)(null),k=(e,t)=>{r({...n,[e]:t})},f=()=>{p(!1),t(!0),d()({path:"/newspack/v1/wizard/newspack-engagement-wizard/reader-activation"}).then((e=>{let{config:t,pluginsStatus:n,memberships:a}=e;g(n),r(t),o(a)})).catch(p).finally((()=>t(!1)))};(0,s.useEffect)(f,[]),(0,s.useEffect)((()=>{d()({path:"/newspack/v1/wizard/newspack-engagement-wizard/newsletters"}).then((e=>{w("active_campaign"===e?.settings?.newspack_newsletters_service_provider?.value)}))}),[]);const v=function(t){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"checkbox";const r={onChange:e=>k(t,e)};switch("enabled"!==t&&(r.disabled=e||!n.enabled),a){case"checkbox":r.checked=Boolean(n[t]);break;case"text":r.value=n[t]||""}return r},_=Object.values(n.emails||{});return!1===h?(0,s.createElement)(s.Fragment,null,(0,s.createElement)(l.qX,{isError:!0},b("Please activate WooCommerce and WooCommerce Subscriptions plugins to use Reader Activation features.","newspack")),(0,s.createElement)(l.xf,{isWaiting:e,plugins:["woocommerce","woocommerce-subscriptions","woocommerce-name-your-price"],onStatus:e=>{let{complete:t}=e;return t&&f()},withoutFooterButton:!0})):(0,s.createElement)(s.Fragment,null,c&&(0,s.createElement)(l.qX,{noticeText:c?.message||b("Something went wrong.","newspack"),isError:!0}),(0,s.createElement)(l.Zb,{noBorder:!0},(0,s.createElement)(l.M$,{title:b("Reader Activation","newspack"),description:b("Configure a set of features for reader activation.","newspack")}),(0,s.createElement)(u.CheckboxControl,(0,a.Z)({label:b("Enable Reader Activation","newspack"),help:b("Whether to enable reader activation features for your site.","newspack")},v("enabled"))),(0,s.createElement)("hr",null),(0,s.createElement)(u.CheckboxControl,(0,a.Z)({label:b("Enable Sign In/Account link","newspack"),help:b("Display an account link in the site header. It will allow readers to register and access their account.","newspack")},v("enabled_account_link"))),(0,s.createElement)(l.rj,{columns:2,gutter:16},(0,s.createElement)(l.w4,(0,a.Z)({label:b("Terms & Conditions Text","newspack"),help:b("Terms and conditions text to display on registration.","newspack")},v("terms_text","text"))),(0,s.createElement)(l.w4,(0,a.Z)({label:b("Terms & Conditions URL","newspack"),help:b("URL to the page containing the terms and conditions.","newspack")},v("terms_url","text")))),newspack_engagement_wizard.has_memberships&&i?(0,s.createElement)(s.Fragment,null,(0,s.createElement)("hr",null),(0,s.createElement)(l.M$,{title:b("Memberships Integration","newspack"),description:b("Improve the reader experience on content gating.","newspack")}),(0,s.createElement)(l.fM,{title:b("Content Gate","newspack"),titleLink:i.edit_gate_url,href:i.edit_gate_url,description:(()=>{let e=b("Configure the gate rendered on content with restricted access.","newspack");return"publish"===i?.gate_status?e+=" "+b("The gate is currently published.","newspack"):"draft"!==i?.gate_status&&"trash"!==i?.gate_status||(e+=" "+b("The gate is currently a draft.","newspack")),e})(),actionText:b("Configure","newspack")})):null,(0,s.createElement)("hr",null),_?.length>0&&(0,s.createElement)(s.Fragment,null,(0,s.createElement)(l.M$,{title:b("Emails","newspack"),description:b("Customize emails sent to readers.","newspack")}),(0,s.createElement)(l.w4,(0,a.Z)({label:b("Sender name","newspack")},v("sender_name","text"))),(0,s.createElement)(l.rj,{columns:2,gutter:16},(0,s.createElement)(l.w4,(0,a.Z)({label:b("Sender email address","newspack")},v("sender_email_address","text"))),(0,s.createElement)(l.w4,(0,a.Z)({label:b("Contact email address","newspack"),help:b('This email will be used as "Reply-To" for transactional emails as well.',"newspack")},v("contact_email_address","text")))),_.map((e=>(0,s.createElement)(l.fM,{key:e.post_id,title:e.label,titleLink:e.edit_link,href:e.edit_link,description:e.description,actionText:b("Edit","newspack")}))),(0,s.createElement)("hr",null)),(0,s.createElement)(l.M$,{title:b("Email Service Provider Settings","newspack"),description:b("Settings for Newspack Newsletters integration.","newspack")}),(0,s.createElement)(l.w4,(0,a.Z)({label:b("Newsletter subscription text on registration","newspack"),help:b("The text to display while subscribing to newsletters on the registration modal.","newspack")},v("newsletters_label","text"))),(0,s.createElement)(u.CheckboxControl,(0,a.Z)({label:b("Synchronize reader to ESP","newspack"),help:b("Whether to synchronize reader data to the ESP. A contact will be created on reader registration if the ESP supports contacts without a list subscription.","newspack")},v("sync_esp"))),n.sync_esp&&(0,s.createElement)(s.Fragment,null,(0,s.createElement)(u.CheckboxControl,(0,a.Z)({label:b("Delete contact on reader deletion","newspack"),help:b("If the reader's email is verified, delete contact from ESP on reader deletion. ESP synchronization must be enabled.","newspack")},v("sync_esp_delete"))),(0,s.createElement)(l.w4,(0,a.Z)({label:b("Metadata field prefix","newspack"),help:b("A string to prefix metadata fields attached to each contact synced to the ESP. Required to ensure that metadata field names are unique. Default: NP_","newspack")},v("metadata_prefix","text"))),m&&(0,s.createElement)(E,{value:{masterList:n.active_campaign_master_list},onChange:(e,t)=>{"masterList"===e&&k("active_campaign_master_list",t)}}))),(0,s.createElement)("div",{className:"newspack-buttons-card"},(0,s.createElement)(l.zx,{isPrimary:!0,onClick:()=>{p(!1),t(!0),d()({path:"/newspack/v1/wizard/newspack-engagement-wizard/reader-activation",method:"post",data:n}).then(r).catch(p).finally((()=>t(!1)))},disabled:e},b("Save Changes","newspack"))))}));function _(e){let{title:t,description:n,pixelKey:a,fieldDescription:r,fieldHelp:i,pixelValueType:o}=e;const c=`/newspack/v1/wizard/newspack-engagement-wizard/social/${a}_pixel`,[p,u]=(0,s.useState)(!1),[m,w]=(0,s.useState)(null),[h,g]=(0,s.useState)(null);if((0,s.useEffect)((()=>{(async()=>{u(!0);try{const e=await d()({path:c});g(e)}catch(e){g(null)}u(!1)})()}),[]),!h)return null;const k=[{key:"pixel_id",type:o,description:r,help:i,value:h.pixel_id}];return(0,s.createElement)(l.d5.Section,{error:m,disabled:p,sectionKey:"pixel-settings",title:t,description:n,active:h.active,fields:k,onUpdate:async e=>{w(null),u(!0);try{const t=await d()({path:c,method:"POST",data:{...h,...e}});g(t)}catch(e){w(e)}u(!1)},onChange:(e,t)=>{g({...h,[e]:t})}})}const x=i.__;var y=()=>(0,s.createElement)(_,{title:x("Meta Pixel","newspack"),pixelKey:"meta",pixelValueType:"integer",description:x("Add the Meta pixel (formely known as Facebook pixel) to your site.","newspack"),fieldDescription:x("Pixel ID","newspack"),fieldHelp:(0,s.createInterpolateElement)(x("The Meta Pixel ID. You only need to add the number, not the full code. Example: 123456789123456789. You can get this information <linkToFb>here</linkToFb>.","newspack"),{linkToFb:(0,s.createElement)("a",{href:"https://www.facebook.com/ads/manager/pixel/facebook_pixel",target:"_blank",rel:"noopener noreferrer"})})});const S=i.__;var C=()=>(0,s.createElement)(_,{title:S("Twitter Pixel","newspack"),pixelKey:"twitter",description:S("Add the Twitter pixel to your site.","newspack"),pixelValueType:"text",fieldDescription:S("Pixel ID","newspack"),fieldHelp:(0,s.createInterpolateElement)(S("The Twitter Pixel ID. You only need to add the ID, not the full code. Example: ny3ad. You can read more about it <link>here</link>.","newspack"),{link:(0,s.createElement)("a",{href:"https://business.twitter.com/en/help/campaign-measurement-and-analytics/conversion-tracking-for-websites.html",target:"_blank",rel:"noopener noreferrer"})})});const P=i.__;class T extends s.Component{render(){return(0,s.createElement)(s.Fragment,null,(0,s.createElement)(l.fM,{title:P("Publicize"),badge:"Jetpack",description:P("Publicize makes it easy to share your site’s posts on several social media networks automatically when you publish a new post."),actionText:P("Configure"),handoff:"jetpack",editLink:"admin.php?page=jetpack#/sharing"}),(0,s.createElement)(y,null),(0,s.createElement)(C,null))}}var z=(0,l.a4)(T);const M=i.__;class A extends s.Component{render(){const{onChange:e,relatedPostsEnabled:t,relatedPostsError:n,relatedPostsMaxAge:a}=this.props;return(0,s.createElement)(s.Fragment,null,n&&(0,s.createElement)(l.qX,{noticeText:n,isError:!0}),(0,s.createElement)(l.fM,{title:M("Related Posts","newspack"),badge:"Jetpack",description:M("Automatically add related content at the bottom of each post.","newspack"),actionText:M("Configure"),handoff:"jetpack",editLink:"admin.php?page=jetpack#/traffic"}),t&&(0,s.createElement)(l.rj,null,(0,s.createElement)(l.Zb,{noBorder:!0},(0,s.createElement)(l.w4,{help:M("If set, posts will be shown as related content only if published within the past number of months. If 0, any published post can be shown, regardless of publish date.","newspack"),label:M("Maximum age of related content, in months","newspack"),onChange:t=>e(t),placeholder:M("Maximum age of related content, in months"),type:"number",value:a||0}))))}}var F=(0,l.a4)(A);const Z=i.__;var j=(0,l.a4)((()=>(0,s.createElement)(s.Fragment,null,(0,s.createElement)(l.fM,{title:Z("WordPress Commenting"),description:Z("Native WordPress commenting system."),actionText:Z("Configure"),handoff:"wordpress-settings-discussion"}))));const O=i.__,{HashRouter:L,Redirect:R,Route:N,Switch:I}=o.Z;class U extends s.Component{constructor(e){super(e),(0,r.Z)(this,"onWizardReady",(()=>{const{setError:e,wizardApiFetch:t}=this.props;return t({path:"/newspack/v1/wizard/newspack-engagement-wizard/related-content"}).then((e=>this.setState(e))).catch((t=>e(t)))})),(0,r.Z)(this,"updatedRelatedContentSettings",(async()=>{const{wizardApiFetch:e}=this.props,{relatedPostsMaxAge:t}=this.state;try{await e({path:"/newspack/v1/wizard/newspack-engagement-wizard/related-posts-max-age",method:"POST",data:{relatedPostsMaxAge:t}}),this.setState({relatedPostsError:null,relatedPostsUpdated:!1})}catch(e){this.setState({relatedPostsError:e.message||O("There was an error saving settings. Please try again.","newspack")})}})),this.state={relatedPostsEnabled:!1,relatedPostsMaxAge:0,relatedPostsUpdated:!1,relatedPostsError:null}}render(){const{pluginRequirements:e}=this.props,{relatedPostsEnabled:t,relatedPostsError:n,relatedPostsMaxAge:r,relatedPostsUpdated:i}=this.state,l=newspack_engagement_wizard.has_reader_activation?"/reader-activation":"/newsletters",o=[{label:O("Newsletters","newspack"),path:"/newsletters",exact:!0},{label:O("Commenting","newspack"),path:"/commenting"},{label:O("Social","newspack"),path:"/social",exact:!0},{label:O("Recirculation","newspack"),path:"/recirculation"}];newspack_engagement_wizard.has_reader_activation&&o.unshift({label:O("Reader Activation","newspack"),path:"/reader-activation",exact:!0});const c={headerText:O("Engagement","newspack"),tabbedNavigation:o};return(0,s.createElement)(s.Fragment,null,(0,s.createElement)(L,{hashType:"slash"},(0,s.createElement)(I,null,e,newspack_engagement_wizard.has_reader_activation&&(0,s.createElement)(N,{path:"/reader-activation",render:()=>(0,s.createElement)(v,(0,a.Z)({subHeaderText:O("Configure your reader activation settings","newspack")},c))}),(0,s.createElement)(N,{path:"/newsletters",render:()=>(0,s.createElement)(k,(0,a.Z)({subHeaderText:O("Configure your newsletter settings","newspack")},c))}),(0,s.createElement)(N,{path:"/social",exact:!0,render:()=>(0,s.createElement)(z,(0,a.Z)({subHeaderText:O("Share your content to social media","newspack")},c))}),(0,s.createElement)(N,{path:"/commenting",exact:!0,render:()=>(0,s.createElement)(j,(0,a.Z)({subHeaderText:O("Set up the commenting system for your site","newspack")},c))}),(0,s.createElement)(N,{path:"/recirculation",exact:!0,render:()=>(0,s.createElement)(F,(0,a.Z)({},c,{subHeaderText:O("Engage visitors with related content","newspack"),relatedPostsEnabled:t,relatedPostsError:n,buttonAction:()=>this.updatedRelatedContentSettings(),buttonText:O("Save Settings","newspack"),buttonDisabled:!t||!i,relatedPostsMaxAge:r,onChange:e=>{this.setState({relatedPostsMaxAge:e,relatedPostsUpdated:!0})}}))}),(0,s.createElement)(R,{to:l}))))}}(0,s.render)((0,s.createElement)((0,l.uF)(U,["jetpack"])),document.getElementById("newspack-engagement-wizard"))},9196:function(e){e.exports=window.React},2819:function(e){e.exports=window.lodash},6292:function(e){e.exports=window.moment},6989:function(e){e.exports=window.wp.apiFetch},5609:function(e){e.exports=window.wp.components},9818:function(e){e.exports=window.wp.data},9307:function(e){e.exports=window.wp.element},2694:function(e){e.exports=window.wp.hooks},2629:function(e){e.exports=window.wp.htmlEntities},5736:function(e){e.exports=window.wp.i18n},9630:function(e){e.exports=window.wp.keycodes},444:function(e){e.exports=window.wp.primitives},6483:function(e){e.exports=window.wp.url}},n={};function a(e){var r=n[e];if(void 0!==r)return r.exports;var s=n[e]={exports:{}};return t[e].call(s.exports,s,s.exports,a),s.exports}a.m=t,e=[],a.O=function(t,n,r,s){if(!n){var i=1/0;for(p=0;p<e.length;p++){n=e[p][0],r=e[p][1],s=e[p][2];for(var l=!0,o=0;o<n.length;o++)(!1&s||i>=s)&&Object.keys(a.O).every((function(e){return a.O[e](n[o])}))?n.splice(o--,1):(l=!1,s<i&&(i=s));if(l){e.splice(p--,1);var c=r();void 0!==c&&(t=c)}}return t}s=s||0;for(var p=e.length;p>0&&e[p-1][2]>s;p--)e[p]=e[p-1];e[p]=[n,r,s]},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,{a:t}),t},a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.j=103,function(){var e;a.g.importScripts&&(e=a.g.location+"");var t=a.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e}(),function(){var e={103:0};a.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,s,i=n[0],l=n[1],o=n[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(r in l)a.o(l,r)&&(a.m[r]=l[r]);if(o)var p=o(a)}for(t&&t(n);c<i.length;c++)s=i[c],a.o(e,s)&&e[s]&&e[s][0](),e[i[c]]=0;return a.O(p)},n=self.webpackChunkwebpack=self.webpackChunkwebpack||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var r=a.O(void 0,[351],(function(){return a(5528)}));r=a.O(r);var s=window;for(var i in r)s[i]=r[i];r.__esModule&&Object.defineProperty(s,"__esModule",{value:!0})}();