(this["webpackJsonpbakers-percent"]=this["webpackJsonpbakers-percent"]||[]).push([[0],{33:function(e,n,t){e.exports=t(43)},38:function(e,n,t){},39:function(e,n,t){},43:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(7),o=t.n(i),c=(t(38),t(39),t(26)),l=t(77),m=t(78),u=t(79),s=t(71),g=t(75),p=t(80),d=t(76),f=t(81),h=function(e){return a.createElement(s.a,null,a.createElement(g.a,{component:"th",scope:"row"},e.ingredient.name,"flour"!==e.ingredient.name&&a.createElement("button",null,"remove")),a.createElement(g.a,{align:"right"},"flour"===e.ingredient.name?a.createElement("p",null,"100"):a.createElement(f.a,{id:"filled-basic",type:"number",inputProps:{min:"1",max:"100",step:"1"},label:"Percent",onChange:function(n){var t=n.target.value;e.onPercentChange(e.ingredient.name,t)},value:e.ingredient.percent})),a.createElement(g.a,{align:"right"},"flour"===e.ingredient.name?a.createElement(f.a,{id:"filled-basic",type:"number",inputProps:{min:"0",step:"0.5"},label:"Amount",onChange:function(n){var t=n.target.value;e.onAmountChange(e.ingredient.name,t)},value:e.ingredient.amount}):a.createElement("p",null,e.ingredient.amount.toFixed(2))))},E=function(){var e=a.useState([{name:"flour",percent:100,amount:10},{name:"water",percent:20,amount:30}]),n=Object(c.a)(e,2),t=n[0],r=n[1],i=function(e,n){var a;if(n&&!(n<=0)){var i=null===(a=t.find((function(e){return"flour"===e.name})))||void 0===a?void 0:a.amount;if(i){var o=t.map((function(t){return t.name===e?{name:e,percent:n,amount:n*i/100}:t}));r(o)}}},o=function(e,n){if(n&&!(n<=0)){var a=t.map((function(e){return{name:e.name,percent:e.percent,amount:e.percent*n/100}}));r(a)}};return a.createElement("div",{className:"chart-container"},a.createElement(l.a,{component:d.a},a.createElement(m.a,{className:"table"},a.createElement(u.a,null,a.createElement(s.a,null,a.createElement(g.a,null,"Ingredient"),a.createElement(g.a,{align:"right"},"Percent (%)"),a.createElement(g.a,{align:"right"},"Weight (oz)"))),a.createElement(p.a,null,t.map((function(e){return a.createElement(h,{key:e.name,ingredient:e,onPercentChange:i,onAmountChange:o})}))))))},v=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(E,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.13a6da6d.chunk.js.map