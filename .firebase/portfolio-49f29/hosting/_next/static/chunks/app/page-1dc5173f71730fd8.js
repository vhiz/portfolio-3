(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{7724:function(e,t,n){Promise.resolve().then(n.bind(n,7409)),Promise.resolve().then(n.t.bind(n,8707,23)),Promise.resolve().then(n.t.bind(n,8920,23)),Promise.resolve().then(n.bind(n,3158)),Promise.resolve().then(n.bind(n,3535)),Promise.resolve().then(n.t.bind(n,173,23)),Promise.resolve().then(n.t.bind(n,9307,23)),Promise.resolve().then(n.t.bind(n,3293,23))},3535:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h}});var s=n(9268),i=n(6394),r=n.n(i),o=n(1423),a=n.n(o);let l={_origin:"https://api.emailjs.com"},c=(e,t,n)=>{if(!e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class m{constructor(e){this.status=e?e.status:0,this.text=e?e.responseText:"Network Error"}}let d=(e,t,n={})=>new Promise((s,i)=>{let r=new XMLHttpRequest;r.addEventListener("load",({target:e})=>{let t=new m(e);200===t.status||"OK"===t.text?s(t):i(t)}),r.addEventListener("error",({target:e})=>{i(new m(e))}),r.open("POST",l._origin+e,!0),Object.keys(n).forEach(e=>{r.setRequestHeader(e,n[e])}),r.send(t)}),_=e=>{let t;if(!(t="string"==typeof e?document.querySelector(e):e)||"FORM"!==t.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t};var u={init:(e,t="https://api.emailjs.com")=>{l._userID=e,l._origin=t},send:(e,t,n,s)=>{let i=s||l._userID;return c(i,e,t),d("/api/v1.0/email/send",JSON.stringify({lib_version:"3.11.0",user_id:i,service_id:e,template_id:t,template_params:n}),{"Content-type":"application/json"})},sendForm:(e,t,n,s)=>{let i=s||l._userID,r=_(n);c(i,e,t);let o=new FormData(r);return o.append("lib_version","3.11.0"),o.append("service_id",e),o.append("template_id",t),o.append("user_id",i),d("/api/v1.0/email/send-form",o)}},p=n(6006);function h(){let[e,t]=(0,p.useState)(!1),[n,i]=(0,p.useState)(!1),o=(0,p.useRef)();return(0,s.jsxs)("div",{className:a().contact,id:"contact",children:[(0,s.jsx)("h1",{children:"Lets Keep in Touch"}),(0,s.jsxs)("div",{className:a().content,children:[(0,s.jsx)("div",{className:a().imgContanier,children:(0,s.jsx)(r(),{src:"/3.png",fill:!0,alt:""})}),(0,s.jsxs)("form",{ref:o,onSubmit:e=>{e.preventDefault(),u.sendForm("service_x6nmbld","template_k1st22t",o.current,"SjYsLTVwgujolV-mp").then(e=>{i(!0),t(!1)},e=>{t(!0),i(!1)})},children:[(0,s.jsx)("input",{type:"text",placeholder:"Name",name:"name",required:!0}),(0,s.jsx)("input",{type:"email",placeholder:"Email",name:"email",required:!0}),(0,s.jsx)("textarea",{placeholder:"Message...",cols:"10",rows:"10",name:"message",required:!0}),n?(0,s.jsx)("p",{children:"Thank you for reaching out hope to work with you soon\uD83D\uDE04\uD83D\uDC9B"}):e?(0,s.jsx)("p",{children:"Something went wrong reload page"}):(0,s.jsx)("button",{type:"submit",children:"Send"})]})]})]})}},7409:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var s=n(9268),i=n(6394),r=n.n(i),o=n(3273),a=n.n(o),l={src:"/_next/static/media/1.e9695557.png",height:2e3,width:2e3,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAXVBMVEU1NUr29/7fydrb2+3f3+/4/P7g4O6ajr/x8PfRzuVES4n5///rnnPwm6fqhZn1q5U9Q5eqapeRT5Pk4vDk4/Hk4+/im7U6VqzY2u37aI7r6/H9/f/g3e7t7Pza1u23o5tpAAAAG3RSTlMBr3Y5Y0s+C3khJTI1bD9SW1StwqTEw4L6yVyMy6/1AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAQ0lEQVR4nB3LRxaAMAgFwJ9IAth7g3j/Y/p09gNARRIATLFYyAy+9vPZpALP0X0RBR/kZU0NeCSz0A3gWm/Kffu93wtoggLAmHtqzQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8};function c(){let e=e=>{let t=document.getElementById(e);t&&t.scrollIntoView({behavior:"smooth"})};return(0,s.jsxs)("div",{className:a().intro,id:"intro",children:[(0,s.jsxs)("div",{className:a().info,children:[(0,s.jsx)("h1",{children:"Mgbeahurike Victor Uchenna Full Stack developer."}),(0,s.jsx)("p",{children:"Turing ideas into reality.Giving the people a way to express through tech."}),(0,s.jsx)("button",{onClick:()=>e("contact"),children:"Contact \uD83D\uDCDE"})]}),(0,s.jsx)("div",{className:a().imgContainer,children:(0,s.jsx)(r(),{src:l,alt:""})})]})}},3158:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return _}});var s=n(9268),i=n(6394),r=n.n(i),o=n(6768),a=n.n(o),l=n(6006);let c={img:"/6.png",skills:["Git","MongoDB","Express","Node js","Firebase","Hosting","JavaScript","Object Oriented programming"]},m={img:"/7.png",skills:["Next Js","React","Redux","HTML","SASS","CSS"]},d={img:"/5.png",skills:["Team Player","Problem solving","Communication","Hardworking","Constant Learning","Business"]};function _(){let[e,t]=(0,l.useState)("f"),[n,i]=(0,l.useState)(m);return(0,l.useEffect)(()=>{"f"===e&&i(m),"b"===e&&i(c),"o"===e&&i(d)},[e]),(0,s.jsxs)("div",{id:"skills",className:a().skills,children:[(0,s.jsxs)("div",{className:a().imgContanier,children:[(0,s.jsx)(r(),{src:"/2.jpg",fill:!0,alt:""}),(0,s.jsx)("div",{className:a().imgText,children:(0,s.jsx)("h1",{children:"Fullstack Development Skills"})})]}),(0,s.jsxs)("div",{className:a().options,children:[(0,s.jsx)("span",{className:"f"===e?a().active:null,onClick:()=>t("f"),children:"Frontend"}),(0,s.jsx)("span",{className:"b"===e?a().active:null,onClick:()=>t("b"),children:"Backend"}),(0,s.jsx)("span",{className:"o"===e?a().active:null,onClick:()=>t("o"),children:"Others"})]}),(0,s.jsxs)("div",{className:a().textContanier,children:[(0,s.jsx)("div",{className:a().info,children:n.skills.map((e,t)=>(0,s.jsx)("p",{children:"- ".concat(e)},t))}),(0,s.jsx)("div",{className:a().img,children:(0,s.jsx)(r(),{src:n.img,fill:!0,alt:""})})]})]})}},173:function(e){e.exports={home:"page_home__NX5sv"},e.exports.__checksum="db9cbb96f793"},1423:function(e){e.exports={contact:"contact_contact__eK5ln",content:"contact_content__U3v3U",imgContanier:"contact_imgContanier__zrw3m",animate:"contact_animate__ZomSm"},e.exports.__checksum="803b1928fa57"},3273:function(e){e.exports={intro:"intro_intro__24qcc",info:"intro_info__b_Vv7",imgContainer:"intro_imgContainer__HGK6t",animate:"intro_animate__zXIbI"},e.exports.__checksum="b724d1cd4660"},3293:function(e){e.exports={project:"project_project__5Yf3F",info:"project_info__Fm_Zi",links:"project_links__k3V1I",imgContainer:"project_imgContainer__6s3xA"},e.exports.__checksum="08d1031ab816"},9307:function(e){e.exports={projects:"project_projects__aenfP",head:"project_head__l3JN3"},e.exports.__checksum="b8bb0b5d852c"},6768:function(e){e.exports={skills:"styles_skills__8pg55",imgContanier:"styles_imgContanier__pVJM0",imgText:"styles_imgText__wtV5f",options:"styles_options__PWOke",active:"styles_active__OfrWb",textContanier:"styles_textContanier__yCtpE",info:"styles_info__dC_dk",img:"styles_img__Kb8fl",animate:"styles_animate__BUBrp"},e.exports.__checksum="daa323a0f53e"}},function(e){e.O(0,[106,253,488,744],function(){return e(e.s=7724)}),_N_E=e.O()}]);