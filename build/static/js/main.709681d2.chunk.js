(this.webpackJsonpMalini4_App_binance=this.webpackJsonpMalini4_App_binance||[]).push([[0],{159:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),o=a.n(c),s=a(70),u=a(11),i=a(71),l=a(35),d={data:[],isDataLoad:!1,isError:!1,curr:"btcusdt"},m=function(e){return function(t){t(function(e){return{type:"app/IS_DATA",data:e}}(e))}},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"app/IS_DATA":return Object(l.a)({},e,{},e.data,{data:[].concat(Object(i.a)(e.data.slice(-9)),[t.data])});case"app/WATH_CURR":return Object(l.a)({},e,{},e.data,{data:[],curr:t.curr});case"app/IS_ERROR":return Object(l.a)({},e,{isLoad:!1,isError:t.isError});default:return e}},b=a(14),p=a(12),k=a(41),f=a.n(k),_=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:f.a.ask},r.a.createElement("h3",{style:{color:"red"}},"ASK"),e.data?e.data.map((function(e){return r.a.createElement("span",{key:e.E},e.a)})):null),r.a.createElement("div",{className:f.a.bid},r.a.createElement("h3",{style:{color:"green"}},"BID"),e.data?e.data.map((function(e){return r.a.createElement("span",{key:e.E+11},e.b)})):null))},T=Object(u.b)((function(e){return{data:e.app.data}}),{setData:m})((function(e){return Object(n.useEffect)((function(){e.setBookTicket(e.bookTicket)}),[e]),r.a.createElement(r.a.Fragment,null,r.a.createElement(_,{data:e.data}))})),g=a(162),w=Object(u.b)((function(e){return{curr:e.app.curr}}),{setCurr:function(e){return function(t){t(function(e){return{type:"app/WATH_CURR",curr:e}}(e))}}})((function(e){e.bookTicket,e.setBookTicket;var t=e.setCurr,a=e.curr;return Object(n.useEffect)((function(){return function(){}}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,null,r.a.createElement(g.a.Toggle,{variant:"success",id:"dropdown-basic"},a),r.a.createElement(g.a.Menu,null,r.a.createElement(g.a.Item,{as:"button",onClick:function(e){return t("btcusdt")}},r.a.createElement(b.b,{to:"/",className:"dropdown-item"},"BTC-USDT")),r.a.createElement(g.a.Item,{as:"button",onClick:function(e){return t("etcusdt")}},r.a.createElement(b.b,{to:"/etcusdt",className:"dropdown-item"},"ETC-USDT")),r.a.createElement(g.a.Item,{as:"button",onClick:function(e){return t("xrpusdt")}},r.a.createElement(b.b,{to:"/xrpusdt",className:"dropdown-item"},"XRP-USDT")),r.a.createElement(g.a.Item,{as:"button",onClick:function(e){return t("btsusdt")}},r.a.createElement(b.b,{to:"/btsusdt",className:"dropdown-item"},"BTS-USDT")))))})),O=(a(83),a(34)),v=a.n(O),h=Object(u.b)((function(e){return{curr:e.app.curr}}),{setData:m})((function(e){var t=Object(n.useState)("btcusdt"),a=Object(s.a)(t,2),c=a[0],o=a[1],u=new WebSocket("wss://stream.binance.com:9443/ws/".concat(e.curr,"@ticker"));return Object(n.useEffect)((function(){return u.onmessage=function(t){var a=JSON.parse(t.data);e.setData(a)},function(){u.close()}}),[c,u]),r.a.createElement(b.a,null,r.a.createElement("div",{className:v.a.coverTAg},r.a.createElement("div",{className:v.a.tag},r.a.createElement(w,{setBookTicket:o,bookTicket:c})),r.a.createElement("div",{className:v.a.tag},r.a.createElement(p.c,null,r.a.createElement(p.a,{path:"/",exact:!0,render:function(){return r.a.createElement(T,{ws:u,setBookTicket:o,bookTicket:c})}}),r.a.createElement(p.a,{path:"/etcusdt",exact:!0,render:function(){return r.a.createElement(T,{ws:u,setBookTicket:o,bookTicket:c})}}),r.a.createElement(p.a,{path:"/xrpusdt",exact:!0,render:function(){return r.a.createElement(T,{ws:u,setBookTicket:o,bookTicket:c})}}),r.a.createElement(p.a,{path:"/btsusdt",exact:!0,render:function(){return r.a.createElement(T,{ws:u,setBookTicket:o,bookTicket:c})}})))))})),y=(a(84),a(13)),j=a(163),S=a(67),A=Object(y.c)({app:E,form:j.a}),D=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||y.d,N=Object(y.e)(A,D(Object(y.a)(S.a)));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(u.a,{store:N},r.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},34:function(e,t,a){e.exports={coverTAg:"style_coverTAg__en8Px",tag:"style_tag__1pjHj",ask:"style_ask__36X_y",bid:"style_bid__QGNS6"}},41:function(e,t,a){e.exports={coverTAg:"style_coverTAg__1dDO2",tag:"style_tag__21Cpt",ask:"style_ask__2LDoe",bid:"style_bid__3VkAM"}},72:function(e,t,a){e.exports=a(159)},84:function(e,t,a){}},[[72,1,2]]]);
//# sourceMappingURL=main.709681d2.chunk.js.map