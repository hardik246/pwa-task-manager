(this["webpackJsonppwa-task-manager"]=this["webpackJsonppwa-task-manager"]||[]).push([[0],{25:function(e,n,t){},26:function(e,n,t){},33:function(e,n,t){"use strict";t.r(n);var o=t(0),a=t(15),c=t.n(a),r=(t(25),t(16)),i=t(17),s=t(20),l=t(19),u=t(9),d=t(1),j=(t(26),t(2)),h=function(){return Object(j.jsxs)("div",{className:"navbar",children:[Object(j.jsx)("h3",{children:"Task Manager"}),Object(j.jsx)(u.b,{to:"/",children:"Current Tasks"}),Object(j.jsx)(u.b,{to:"/completed",children:"Completed Tasks"})]})},f=function(e){return Object(j.jsxs)("div",{children:[Object(j.jsx)(h,{}),Object(j.jsxs)("p",{className:"page-info",children:[e.title,":"]}),Object(j.jsxs)("ul",{className:e.status,children:[Object(j.jsx)("li",{children:"Task 1"}),Object(j.jsx)("li",{children:"Task 2"}),Object(j.jsx)("li",{children:"Task 3"})]})]})},p=function(){return Object(j.jsx)(f,{title:"Current Tasks",status:"Current"})},b=function(){return Object(j.jsx)(f,{title:"Completed Tasks",status:"Completed"})},g=function(e){Object(s.a)(t,e);var n=Object(l.a)(t);function t(){return Object(r.a)(this,t),n.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return Object(j.jsx)(u.a,{basename:"/pwa-task-manager",children:Object(j.jsxs)("div",{children:[Object(j.jsx)(d.a,{exact:!0,path:"/",component:p}),Object(j.jsx)(d.a,{path:"/completed",component:b})]})})}}]),t}(o.Component),v=g,w=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function k(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all "),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(Object(j.jsx)(v,{}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/pwa-task-manager",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/pwa-task-manager","/service-worker.js");w?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):k(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service ")}))):k(n,e)}))}}()}},[[33,1,2]]]);
//# sourceMappingURL=main.3fb70a52.chunk.js.map