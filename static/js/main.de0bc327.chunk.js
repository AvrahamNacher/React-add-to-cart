(this.webpackJsonpa05=this.webpackJsonpa05||[]).push([[0],[,,,,,function(e,t,a){e.exports=a(18)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),i=a.n(c),m=(a(10),a(1)),o=a(2);a(11),a(12);var l=function(e){function t(t){e.page(t)}return r.a.createElement("header",null,r.a.createElement("div",{className:"storeName"},"Better Goods, Inc."),r.a.createElement("nav",null,r.a.createElement("button",{onClick:function(){return t("home")},className:"header-button"},"Home"),r.a.createElement("button",{onClick:function(){return t("cart")},className:"header-button"},"Cart")),r.a.createElement("div",{className:"cart-item-count"},function(){var t=0,a=!0,n=!1,r=void 0;try{for(var c,i=e.cart[Symbol.iterator]();!(a=(c=i.next()).done);a=!0){t+=c.value.count}}catch(m){n=!0,r=m}finally{try{a||null==i.return||i.return()}finally{if(n)throw r}}return t}()))};a(13),a(14);var u=function(e){return r.a.createElement("div",null,r.a.createElement("button",{className:"product-button",onClick:function(){return function(){var t=e.cart;if(t.length>0){var a=t.findIndex((function(t){return t.item.id===e.itemInfo.id}));-1!==a?t[a].count++:t.push({item:e.itemInfo,count:1})}else t.push({item:e.itemInfo,count:1});e.newItem(t)}()}},e.children))};var s=function(e){return r.a.createElement("div",{className:"productDiv"},r.a.createElement("div",{className:"itemName"},e.itemInfo.name),r.a.createElement("img",{src:e.itemInfo.url,alt:e.itemInfo.name}),r.a.createElement(u,{itemInfo:e.itemInfo,cart:e.cart,newItem:e.newItem},"Add To Cart"))},d=[{id:1,name:"Red Apples",url:"https://5.imimg.com/data5/HF/CW/MY-51857835/organic-apple-fruit-250x250.jpg"},{id:2,name:"Baby Ball",url:"https://images-na.ssl-images-amazon.com/images/I/81kTc0r6StL._SX425_.jpg"},{id:3,name:"Arrow",url:"https://5.imimg.com/data5/MS/KC/MY-64362/archery-arrow-bow-500x500.jpg"},{id:4,name:"Optical Mouse",url:"https://img2.exportersindia.com/product_images/bc-full/2019/7/766725/computer-mouse-1562395662-4985560.jpeg"},{id:5,name:"Toothbrush Set",url:"https://i5.walmartimages.com/asr/28243528-c34e-4ceb-8690-4ad64a384477_1.dc5a3da55780f062793f5aaa58ff33cd.jpeg"},{id:6,name:"Breakfast Cereal",url:"http://dm61q01mhxuli.cloudfront.net/images/m103/image2/f25-2509201-4100hr-dd.jpg"},{id:7,name:"Kellogg's Pops",url:"https://images-na.ssl-images-amazon.com/images/I/81W5GFO1yuL._SL1500_.jpg"},{id:8,name:"Broccoli",url:"https://i5.walmartimages.ca/images/Large/094/505/6000200094505.jpg"}];a(15);var f=function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"main-text"},"Select Your Products"),r.a.createElement("div",{className:"products-section"},d.map((function(t){return r.a.createElement(s,{key:t.id,itemInfo:t,cart:e.cart,newItem:e.newItem})}))))};a(16);var p=function(e){function t(t){var a=e.cart.findIndex((function(t){return t.item.id===e.itemInfo.item.id}));e.cart[a].count+=t,e.newList(e.cart.filter((function(e){return 0!==e.count})))}return r.a.createElement("div",{className:"cart-item"},r.a.createElement("img",{src:e.itemInfo.item.url,alt:e.itemInfo.item.name}),r.a.createElement("div",{className:"item-name"},e.itemInfo.item.name),r.a.createElement("div",{className:"item-count"},"Quantity:",r.a.createElement("button",{onClick:function(){return t(1)}},"+"),r.a.createElement("span",{className:"item-count__span"},e.itemInfo.count),r.a.createElement("button",{onClick:function(){return t(-1)}},"-"),r.a.createElement("button",{className:"remove-from-cart",onClick:function(){return t(-1*e.itemInfo.count)}},"X")))};a(17);var g=function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"main-text"},"Review Your Products"),r.a.createElement("div",{className:"cart-section"},0!==e.cart.length?e.cart.map((function(t){return r.a.createElement(p,{key:t.item.id,itemInfo:t,newList:e.newList,cart:e.cart})})):r.a.createElement("div",{className:"empty-cart-text"},"Add some items to your cart.")))};var v=function(){var e=Object(n.useState)("home"),t=Object(o.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)([]),u=Object(o.a)(i,2),s=u[0],d=u[1];return r.a.createElement("div",{className:"App"},r.a.createElement(l,{page:function(e){return c(e)},cart:s}),"home"===a?r.a.createElement(r.a.Fragment,null,r.a.createElement(f,{newItem:function(e){return d(Object(m.a)(e))},cart:s})):"cart"===a?r.a.createElement(r.a.Fragment,null,r.a.createElement(g,{cart:s,newList:function(e){return d(Object(m.a)(e))}})):console.log("Message from App.js: page display error"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[5,1,2]]]);
//# sourceMappingURL=main.de0bc327.chunk.js.map