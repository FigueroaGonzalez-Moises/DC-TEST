(this["webpackJsonpfront-end"]=this["webpackJsonpfront-end"]||[]).push([[6],{121:function(e,t,c){"use strict";c.d(t,"a",(function(){return n}));var n=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,t="",c=crypto.getRandomValues(new Uint8Array(e));e--;){var n=63&c[e];t+=n<36?n.toString(36):n<62?(n-26).toString(36).toUpperCase():n<63?"_":"-"}return t}},124:function(e,t,c){},133:function(e,t,c){"use strict";c.r(t);var n=c(71),r=c(16),s=c(121),a=(c(124),c(2)),i=function(){var e=Object(n.d)(),t=e.data,c=e.loading,r=e.error;return c||!t||r?Object(a.jsx)(a.Fragment,{}):Object(a.jsx)("div",{style:o,children:Object(a.jsxs)("span",{children:[Object(a.jsxs)("a",{style:d,href:"#/products",children:["All ",Object(a.jsx)("span",{style:{opacity:.5},children:"|"})]}),t.getSections.map((function(e,c){return Object(a.jsxs)("a",{style:d,href:"#/section/".concat(e.name,"?").concat(e.section_id),children:[" ",e.name," ",c!==t.getSections.length-1?Object(a.jsx)("span",{style:{opacity:.5},children:"|"}):null]},Object(s.a)())}))]})})},o={display:"grid",placeItems:"center",height:"20px",paddingBottom:"2px",backgroundColor:"white",boxShadow:"0 24px 38px 3px rgba(0,0,0,0.14),0 9px 46px 8px rgba(0,0,0,0.12),0 11px 15px -7px rgba(0,0,0,0.2)"},d={fontWeight:"bold",color:"black"};t.default=function(){var e=window.location.href,t=Number(e.split("?")[1]),c=e.slice(e.lastIndexOf("/")+1,e.indexOf("?")),o=Object(n.c)({variables:{section_id:t}}),d=o.data,l=o.loading,j=o.error;return l?Object(a.jsx)(a.Fragment,{}):j||!d?Object(a.jsx)(r.a,{to:"#/"}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(i,{}),Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("h1",{style:{textAlign:"center"},children:c}),Object(a.jsx)("div",{className:"products-grid",children:d.getSectionsProducts.map((function(e){return Object(a.jsx)("div",{className:"card",children:Object(a.jsxs)("a",{href:"#/product:".concat(e.product_id),children:[Object(a.jsx)("div",{className:"card-image",children:Object(a.jsx)("img",{src:"".concat(e.images[0].img_url||""),alt:e.name})}),Object(a.jsxs)("div",{className:"card-content",children:[Object(a.jsx)("h4",{style:{marginBottom:"0px"},children:e.name}),Object(a.jsxs)("p",{children:["$",Number(e.price/100).toFixed(2)]})]})]})},Object(s.a)())}))})]})]})}}}]);
//# sourceMappingURL=6.d3ae95f1.chunk.js.map