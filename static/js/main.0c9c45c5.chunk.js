(this.webpackJsonptopjsrepo=this.webpackJsonptopjsrepo||[]).push([[0],{14:function(e,t,c){},41:function(e,t,c){"use strict";c.r(t);var r=c(0),s=c(2),a=c.n(s),n=c(15),l=c.n(n),i=c(5),o=c.n(i),j=c(16),d=c(3),h=c(17),b=c.n(h),u=(c(14),function(e){var t=e.reposPerPage,c=e.currentPage,s=e.repos.map((function(e,s){var a=e.created_at,n=e.description,l=e.html_url,i=e.id,o=e.name,j=e.open_issues,d=e.stargazers_count,h=(c-1)*t+s+1;return Object(r.jsxs)("tr",{className:"d-flex",title:n,children:[Object(r.jsx)("th",{className:"col-1",scope:"col",children:h}),Object(r.jsx)("td",{className:"col-4",children:Object(r.jsx)("a",{id:"url",href:l,rel:"noreferrer",target:"_blank",children:o})}),Object(r.jsx)("td",{className:"col-2 text-center",children:d.toLocaleString()}),Object(r.jsx)("td",{className:"col-2 text-right",children:j.toLocaleString()}),Object(r.jsx)("td",{className:"col-3 text-center",children:new Date(a).getFullYear()})]},i)})),a=Object(r.jsx)("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-star-fill",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:Object(r.jsx)("path",{d:"M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"})});return Object(r.jsx)("div",{className:"table-responsive bg-white rounded shadow my-5",children:Object(r.jsxs)("table",{className:"table table-fixed",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{className:"d-flex",children:[Object(r.jsx)("th",{className:"col-1",scope:"col",children:"#"}),Object(r.jsx)("th",{className:"col-4",scope:"col",children:"Name"}),Object(r.jsx)("th",{className:"col-2 text-center",scope:"col",children:a}),Object(r.jsx)("th",{className:"col-2 text-right pr-0",scope:"col",children:"Open issues"}),Object(r.jsx)("th",{className:"col-3 text-center",scope:"col",children:"Created"})]})}),Object(r.jsx)("tbody",{children:s})]})})}),p=function(e){for(var t=e.currentPage,c=e.reposPerPage,s=e.totalRepos,a=e.paginate,n=[],l=1;l<=Math.ceil(s/c);l++)n.push(l);var i=n.map((function(e){var c=t===e?"font-weight-bold":"";return Object(r.jsx)("li",{className:"page-item",children:Object(r.jsx)("a",{onClick:function(){return a(e)},href:"#!",className:"page-link ".concat(c),children:e})},e)}));return Object(r.jsx)("nav",{children:Object(r.jsx)("ul",{className:"pagination",children:i})})},x=function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)},g=function(){var e=Object(s.useState)([]),t=Object(d.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)([!0]),l=Object(d.a)(n,2),i=l[0],h=l[1],g=Object(s.useState)(1),O=Object(d.a)(g,2),m=O[0],f=O[1],v=Object(s.useState)(""),N=Object(d.a)(v,2),w=N[0],P=N[1];Object(s.useEffect)((function(){(function(){var e=Object(j.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("https://api.github.com/search/repositories?q=language:javascript&sort=stars&order=desc&per_page=100");case 3:t=e.sent,a(t.data.items),h(!1),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),c=e.t0,console.error("An error occured:\n".concat(c)),P(JSON.stringify(c.message)),setTimeout((function(){P("")}),8e3);case 11:case"end":return e.stop()}var c}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var S=20*m,k=S-20,y=c.slice(k,S),M=i?Object(r.jsx)("img",{src:"".concat("/topjsrepo","/assets/ghlogo.png"),id:"spinner-loading",alt:"loading"}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h5",{className:"lead mb-0 text-center ",children:"Most starred Github repositories written in javascript \u2b50\ufe0f"}),Object(r.jsx)(u,{reposPerPage:20,currentPage:m,repos:y}),Object(r.jsx)(p,{currentPage:m,reposPerPage:20,totalRepos:c.length,paginate:function(e){return f(e)}})]}),_=x()?"":"container";return Object(r.jsxs)("div",{className:"".concat(_," d-flex flex-column my-5 align-items-center"),children:[w&&Object(r.jsx)("h4",{id:"errorMessage",children:w}),M]})};l.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(g,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.0c9c45c5.chunk.js.map