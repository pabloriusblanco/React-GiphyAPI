(this["webpackJsonp04-gif-expert-app"]=this["webpackJsonp04-gif-expert-app"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(1),a=n(7),i=n.n(a),s=n(2),u=n(9),o=function(e){var t=e.setCategories,n=Object(c.useState)(""),a=Object(s.a)(n,2),i=a[0],o=a[1];return Object(r.jsx)("form",{onSubmit:function(e){e.preventDefault(),i.trim().length>2&&(t((function(e){return[i].concat(Object(u.a)(e))})),o(""))},children:Object(r.jsx)("input",{type:"text",value:i,onChange:function(e){o(e.target.value)},placeholder:"Escriba un gif para buscar"})})},j=n(10),d=n(6),b=n.n(d),l=n(8),f=function(){var e=Object(l.a)(b.a.mark((function e(t){var n,r,c,a,i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"m1BBXCFcQUbA9sf0r6s7iuumcwgPXiEI",n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=")+"m1BBXCFcQUbA9sf0r6s7iuumcwgPXiEI",e.next=4,fetch(n);case 4:return r=e.sent,e.next=7,r.json();case 7:return c=e.sent,a=c.data,i=a.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.fixed_height.url}})),e.abrupt("return",i);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(e){var t=e.title,n=e.url;return Object(r.jsxs)("div",{className:"card animate__fadeIn",children:[Object(r.jsx)("img",{src:n,alt:t}),Object(r.jsx)("p",{children:t.substring(0,16).trim()})]})},h=function(e){var t=e.category,n=function(e){var t=Object(c.useState)({data:[],loading:!0}),n=Object(s.a)(t,2),r=n[0],a=n[1];return Object(c.useEffect)((function(){f(e).then((function(e){a({data:e,loading:!1})}))}),[e]),r}(t),a=n.data,i=n.loading;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h3",{children:t}),i&&Object(r.jsx)("p",{children:"Loading"}),Object(r.jsx)("div",{className:"card-grid",children:a.map((function(e){return Object(r.jsx)(p,Object(j.a)({},e),e.id)}))})]})},O=function(){var e=Object(c.useState)([]),t=Object(s.a)(e,2),n=t[0],a=t[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"background_Header"}),Object(r.jsx)("h1",{children:"GifExpertApp"}),Object(r.jsx)("div",{className:"Subheader_Cointainer",children:Object(r.jsx)(o,{setCategories:a})}),Object(r.jsx)("div",{className:"horizontalLine"}),n.map((function(e){return Object(r.jsx)(h,{category:e},e)}))]})};n(17);i.a.render(Object(r.jsx)(O,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.9329c472.chunk.js.map