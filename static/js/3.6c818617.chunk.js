(this["webpackJsonpfront-end"]=this["webpackJsonpfront-end"]||[]).push([[3],{121:function(t,e,i){"use strict";i.d(e,"a",(function(){return n}));var n=function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,e="",i=crypto.getRandomValues(new Uint8Array(t));t--;){var n=63&i[t];e+=n<36?n.toString(36):n<62?(n-26).toString(36).toUpperCase():n<63?"_":"-"}return e}},122:function(t,e,i){"use strict";i.d(e,"a",(function(){return n})),i.d(e,"c",(function(){return c})),i.d(e,"b",(function(){return s}));var n=function(t){return{type:"ADD_PRODUCT_TO_CART",product:t}},c=function(){return{type:"RESET_CART"}},s=function(t,e){return{type:"CHANGE_QUANTITY_ON_PRODUCT",newQuantity:t,productIndex:e}}},125:function(t,e,i){},126:function(t,e,i){},131:function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function s(t,e,i){return e&&c(t.prototype,e),i&&c(t,i),t}i.r(e),i.d(e,"default",(function(){return h}));var o=i(42),r=(i(125),i(126),i(47)),a=i(71),d=i(1),l=i(122),u=i(121),p=i(72),g=i(2);function h(){document.documentElement.className="js";var t=Object(p.b)(),e=Object(a.b)(),i=e.data,c=e.loading,h=Object(d.useState)({name:"",option_id:0,option_price:0,option_stock:0}),O=Object(o.a)(h,2),m=O[0],b=O[1],j={};if(Object(d.useEffect)((function(){if(!c&&i){console.log("data",i);for(var t=0;t<i.getProductsWithOptionsAndImages.length;t++){var e=i.getProductsWithOptionsAndImages[t],n=document.getElementById("product-desc:".concat(e.product_id));if(!n)break;n.innerHTML=e.desc,j.grid=document.querySelector(".grid"),j.content=j.grid.parentNode,j.gridItems=Array.from(j.grid.querySelectorAll(".grid__item"));try{!function(){var t=[];j.gridItems.forEach((function(e,i){t.push(new _(e,i))})),j.details=new D(e.product_id)}()}catch(s){console.log("e",s),console.log("failed")}}}})),c||!i)return Object(g.jsx)(g.Fragment,{});(function(){var t,e=document.createElement("style");return e.innerHTML="root: { --tmp-var: bold; }",document.head.appendChild(e),t=!!(window.CSS&&window.CSS.supports&&window.CSS.supports("font-weight","var(--tmp-var)")),e.parentNode.removeChild(e),t})()||alert("Please view this demo in a modern browser that supports CSS Variables.");var D=function(){function t(e){n(this,t),this.DOM=void 0,this.isAnimating=void 0,this.DOM={},this.isAnimating=!1,this.DOM.details=document.getElementById("details:".concat(e)),this.DOM.details.innerHTML=document.getElementById("details:".concat(e)).innerHTML,j.content.appendChild(this.DOM.details),this.init()}return s(t,[{key:"init",value:function(){this.DOM.bgUp=this.DOM.details.querySelector(".details__bg--up"),this.DOM.bgDown=this.DOM.details.querySelector(".details__bg--down"),this.DOM.img=this.DOM.details.querySelector(".details__img"),this.DOM.title=this.DOM.details.querySelector(".details__title"),this.DOM.subtitle=this.DOM.details.querySelector(".details__subtitle"),this.DOM.price=this.DOM.details.querySelector(".details__price"),this.DOM.description=this.DOM.details.querySelector(".details__description"),this.DOM.cart=this.DOM.details.querySelector(".details__addtocart"),this.DOM.close=this.DOM.details.querySelector(".details__close");var t=document.getElementById("atc-button");t.addEventListener("click",(function(e){t.classList.contains("loading")||(t.classList.add("loading"),setTimeout((function(){return t.classList.remove("loading")}),3700)),e.preventDefault()})),this.initEvents()}},{key:"initEvents",value:function(){var t=this;this.DOM.close.addEventListener("click",(function(){return t.close()}))}},{key:"fill",value:function(t){this.DOM.img.src=t.img,this.DOM.title.innerHTML=t.title,this.DOM.subtitle.innerHTML=t.subtitle,this.DOM.price.innerHTML=t.price,this.DOM.description.innerHTML=t.description}},{key:"getProductDetailsRect",value:function(){return{productBgRect:this.DOM.productBg.getBoundingClientRect(),detailsBgRect:this.DOM.bgDown.getBoundingClientRect(),productImgRect:this.DOM.productImg.getBoundingClientRect(),detailsImgRect:this.DOM.img.getBoundingClientRect()}}},{key:"open",value:function(t){var e=this;if(this.isAnimating)return!1;this.isAnimating=!0,this.DOM.details.classList.add("details--open"),this.DOM.productBg=t.productBg,this.DOM.productImg=t.productImg,this.DOM.productBg.style.opacity=0,this.DOM.productImg.style.opacity=0;var i=this.getProductDetailsRect();this.DOM.bgDown.style.transform="translateX(".concat(i.productBgRect.left-i.detailsBgRect.left,"px) translateY(").concat(i.productBgRect.top-i.detailsBgRect.top,"px) scaleX(").concat(i.productBgRect.width/i.detailsBgRect.width,") scaleY(").concat(i.productBgRect.height/i.detailsBgRect.height,")"),this.DOM.bgDown.style.opacity=1,this.DOM.img.style.transform="translateX(".concat(i.productImgRect.left-i.detailsImgRect.left,"px) translateY(").concat(i.productImgRect.top-i.detailsImgRect.top,"px) scaleX(").concat(i.productImgRect.width/i.detailsImgRect.width,") scaleY(").concat(i.productImgRect.height/i.detailsImgRect.height,")"),this.DOM.img.style.opacity=1,Object(r.a)({targets:[this.DOM.bgDown,this.DOM.img],duration:function(t,e){return e?800:250},easing:"easeOutSine",elasticity:250,translateX:0,translateY:0,scaleX:1,scaleY:1,complete:function(){return e.isAnimating=!1}}),Object(r.a)({targets:[this.DOM.title,this.DOM.subtitle,this.DOM.price,this.DOM.description,this.DOM.cart],duration:600,easing:"easeOutExpo",delay:function(t,e){return 60*e},translateY:function(t,e,i){return e!==i-1?[50,0]:0},scale:function(t,e,i){return e===i-1?[0,1]:1},opacity:1}),Object(r.a)({targets:this.DOM.bgUp,duration:100,easing:"linear",opacity:1}),Object(r.a)({targets:this.DOM.close,duration:250,easing:"easeOutSine",translateY:["100%",70],opacity:1})}},{key:"close",value:function(){var t=this;if(this.isAnimating)return!1;this.isAnimating=!0,this.DOM.details.classList.remove("details--open"),Object(r.a)({targets:this.DOM.close,duration:250,easing:"easeOutSine",translateY:"100%",opacity:0}),Object(r.a)({targets:this.DOM.bgUp,duration:100,easing:"linear",opacity:0}),Object(r.a)({targets:[this.DOM.title,this.DOM.subtitle,this.DOM.price,this.DOM.description,this.DOM.cart],duration:20,easing:"linear",opacity:0});var e=this.getProductDetailsRect();Object(r.a)({targets:[this.DOM.bgDown,this.DOM.img],duration:250,easing:"easeOutSine",translateX:function(t,i){return i?e.productImgRect.left-e.detailsImgRect.left:e.productBgRect.left-e.detailsBgRect.left},translateY:function(t,i){return i?e.productImgRect.top-e.detailsImgRect.top:e.productBgRect.top-e.detailsBgRect.top},scaleX:function(t,i){return i?e.productImgRect.width/e.detailsImgRect.width:e.productBgRect.width/e.detailsBgRect.width},scaleY:function(t,i){return i?e.productImgRect.height/e.detailsImgRect.height:e.productBgRect.height/e.detailsBgRect.height},complete:function(){t.DOM.bgDown.style.opacity=0,t.DOM.img.style.opacity=0,t.DOM.bgDown.style.transform="none",t.DOM.img.style.transform="none",t.DOM.productBg.style.opacity=1,t.DOM.productImg.style.opacity=1,t.isAnimating=!1}})}}]),t}(),_=function(){function t(e,i){n(this,t),this.DOM=void 0,this.info=void 0,this.DOM={},this.DOM.el=e,this.DOM.product=this.DOM.el.querySelector(".product"),this.DOM.productBg=this.DOM.product.querySelector(".product__bg"),this.DOM.productImg=this.DOM.product.querySelector(".product__img"),this.info={img:this.DOM.productImg.src,title:this.DOM.product.querySelector(".product__title").innerHTML,subtitle:this.DOM.product.querySelector(".product__subtitle").innerHTML,description:this.DOM.product.querySelector(".product__description").innerHTML,price:this.DOM.product.querySelector(".product__price").innerHTML},this.initEvents()}return s(t,[{key:"initEvents",value:function(){var t=this;this.DOM.product.addEventListener("click",(function(){return t.open()}))}},{key:"open",value:function(){j.details.fill(this.info),j.details.open({productBg:this.DOM.productBg,productImg:this.DOM.productImg})}}]),t}();return Object(g.jsx)("div",{children:Object(g.jsx)("main",{children:Object(g.jsxs)("div",{className:"content",children:[Object(g.jsx)("div",{className:"grid",children:i.getProductsWithOptionsAndImages.map((function(t,e){return Object(g.jsx)("div",{className:"grid__item",children:Object(g.jsxs)("div",{className:"product",children:[Object(g.jsx)("div",{className:"product__bg",children:Object(g.jsx)("img",{className:"product__img",src:t.images[0].img_url,alt:"product_image"})}),Object(g.jsx)("h2",{className:"product__title",children:t.name}),Object(g.jsxs)("h3",{className:"product__subtitle",children:["$",Number(t.price/100).toFixed(2)]}),Object(g.jsx)("p",{id:"product-desc:".concat(t.product_id),className:"product__description"}),Object(g.jsxs)("div",{className:"product__price",children:["$",Number(t.price/100).toFixed(2)]})]})},Object(u.a)())}))}),i.getProductsWithOptionsAndImages.map((function(e,i){return console.log("product.options :>> ",e.options),Object(g.jsxs)("div",{className:"details",id:"details:".concat(e.product_id),children:[Object(g.jsx)("div",{className:"details__bg details__bg--up"}),Object(g.jsx)("div",{className:"details__bg details__bg--down"}),Object(g.jsx)("img",{className:"details__img",src:"",alt:"img 01"}),Object(g.jsx)("h2",{className:"details__title"}),Object(g.jsx)("h3",{className:"details__subtitle"}),Object(g.jsx)("div",{className:"details__price"}),Object(g.jsx)("p",{className:"details__description"}),0===e.stock?Object(g.jsx)("button",{className:"details__addtocart atc-button",id:"atc-button",children:Object(g.jsx)("span",{children:"SOLD OUT :("})}):Object(g.jsx)(g.Fragment,{children:e.options&&0!==e.options.length?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("div",{className:"dropdown",children:[Object(g.jsx)("div",{className:"dropdown-name",onClick:function(){document.getElementById("dropdown-content").style.display="block"},children:m.name?Object(g.jsx)("span",{children:m.name}):Object(g.jsx)(g.Fragment,{children:"SELECT OPTION"})}),Object(g.jsx)("div",{className:"dropdown-content",id:"dropdown-content",children:e.options.map((function(t){return Object(g.jsx)("li",{onClick:function(){b({name:t.name,option_id:t.option_id,option_price:t.price,option_stock:t.stock}),document.getElementById("add-cart-btn").classList.remove("disabled"),document.getElementById("dropdown-content").style.display="none"},children:Object(g.jsx)("div",{children:t.name})},Object(u.a)())}))})]}),Object(g.jsxs)("button",{className:"details__addtocart atc-button disabled",id:"atc-button",onClick:function(){if(m){var i=e;i.option=m.name,i.option_id=m.option_id,i.option_price=m.option_price,t(Object(l.a)(i))}},children:[Object(g.jsx)("span",{children:"Add to cart"}),Object(g.jsx)("div",{className:"cart",children:Object(g.jsxs)("svg",{viewBox:"0 0 36 26",children:[Object(g.jsx)("polyline",{points:"1 2.5 6 2.5 10 18.5 25.5 18.5 28.5 7.5 7.5 7.5"}),Object(g.jsx)("polyline",{points:"15 13.5 17 15.5 22 10.5"})]})})]})]}):Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("button",{className:"details__addtocart atc-button",id:"atc-button",onClick:function(){if(m){var i=e;i.option=m.name,i.option_id=m.option_id,i.option_price=m.option_price,t(Object(l.a)(i))}},children:[Object(g.jsx)("span",{children:"Add to cart"}),Object(g.jsx)("div",{className:"cart",children:Object(g.jsxs)("svg",{viewBox:"0 0 36 26",children:[Object(g.jsx)("polyline",{points:"1 2.5 6 2.5 10 18.5 25.5 18.5 28.5 7.5 7.5 7.5"}),Object(g.jsx)("polyline",{points:"15 13.5 17 15.5 22 10.5"})]})})]})})}),Object(g.jsx)("button",{className:"details__close",children:Object(g.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(g.jsx)("path",{d:"M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z",fill:"currentColor"})})})]},Object(u.a)())}))]})})})}}}]);
//# sourceMappingURL=3.6c818617.chunk.js.map