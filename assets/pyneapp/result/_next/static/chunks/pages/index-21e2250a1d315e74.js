(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(2038)}])},2038:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return M}});var r,o=t(7568),s=t(1799),a=t(9396),i=t(797),c=t(655),u=t(5893),f=t(7294),p=t(1163),l=t(9669),x=t.n(l),d=t(9367),h=t(1142),g=t.n(h),v="token",m=function(){return r||(window&&(window.sessionStorage.getItem(v)||window.sessionStorage.setItem(v,function(){var e=(new Date).getTime(),n=performance&&performance.now&&1e3*performance.now()||0;return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var r=16*Math.random();return e>0?(r=(e+r)%16|0,e=Math.floor(e/16)):(r=(n+r)%16|0,n=Math.floor(n/16)),("x"==t?r:7&r|8).toString(16)}))}()),r=window.sessionStorage.getItem(v)),r)},_=function(e,n){for(var t in n){for(var r=e,o=t.split(".").slice(1);o.length>0;)r=r[o.shift()];for(var s in n[t])r[s]=n[t][s]}},y=function(){var e=(0,o.Z)((function(e,n,t){return(0,c.__generator)(this,(function(r){return"_redirect"==e.name?(n.push(e.payload.path),[2,!1]):"_console"==e.name?(console.log(e.payload.message),[2,!1]):"_alert"==e.name?(alert(e.payload.message),[2,!1]):(e.token=m(),e.router_data={pathname:(o=n).pathname,query:o.query},t?(t.emit("event",JSON.stringify(e)),[2,!0]):[2,!1]);var o}))}));return function(n,t,r){return e.apply(this,arguments)}}(),w=function(){var e=(0,o.Z)((function(e,n,t,r,o,i){var u;return(0,c.__generator)(this,(function(c){switch(c.label){case 0:return t.processing||0==e.events.length?[2]:(r((0,a.Z)((0,s.Z)({},t),{processing:!0})),u=e.events.shift(),n((0,a.Z)((0,s.Z)({},e),{events:e.events})),[4,y(u,o,i)]);case 1:return c.sent()||r((0,a.Z)((0,s.Z)({},e),{processing:!1})),[2]}}))}));return function(n,t,r,o,s,a){return e.apply(this,arguments)}}(),Z=function(){var e=(0,o.Z)((function(e,n,t,r,o,s,a,i){var u;return(0,c.__generator)(this,(function(c){return u=new URL(a),e.current=(0,d.ZP)(a,{path:u.pathname,transports:i,autoUnref:!1}),e.current.on("connect",(function(){w(n,t,r,o,s,e.current)})),e.current.on("event",(function(e){e=g().parse(e),_(n,e.delta),o({processing:!0,state:n,events:e.events})})),[2]}))}));return function(n,t,r,o,s,a,i,c){return e.apply(this,arguments)}}(),j=(function(){var e=(0,o.Z)((function(e,n,t,r,o,i){var u,f,p;return(0,c.__generator)(this,(function(c){switch(c.label){case 0:if(n.processing||0==r.length)return[2];for(t((0,a.Z)((0,s.Z)({},n),{processing:!0})),u={"Content-Type":r[0].type},f=new FormData,p=0;p<r.length;p++)f.append("files",r[p],m()+":"+o+":"+r[p].name);return[4,x().post(i,f,u).then((function(n){var r=n.data;_(e,r.delta),t({processing:!1,state:e,events:r.events})}))];case 1:return c.sent(),[2]}}))}))}(),t(5202),t(949)),b=t(3236),S=t(1664),k=t.n(S),E=t(9008),C=t.n(E);function M(){var e=(0,f.useState)({is_hydrated:!1,events:[{name:"state.hydrate"}],files:[]}),n=e[0],t=e[1],r=(0,f.useState)({state:null,events:[],processing:!1}),l=r[0],x=r[1],d=(0,p.useRouter)(),h=(0,f.useRef)(null),g=d.isReady,v=(0,j.If)();v.colorMode,v.toggleColorMode;return(0,f.useEffect)((function(){if(g){h.current||Z(h,n,t,l,x,d,"ws://localhost:8000/event",["websocket","polling"]);var e=function(){var e=(0,o.Z)((function(){return(0,c.__generator)(this,(function(e){switch(e.label){case 0:return null!=l.state&&(t((0,a.Z)((0,s.Z)({},l.state),{events:(0,i.Z)(n.events).concat((0,i.Z)(l.events))})),x({state:null,events:[],processing:!1})),[4,w(n,t,l,x,d,h.current)];case 1:return e.sent(),[2]}}))}));return function(){return e.apply(this,arguments)}}();e()}})),(0,u.jsxs)(b.M5,{sx:{paddingTop:"10%"},children:[(0,u.jsxs)(b.gC,{spacing:"1.5em",sx:{fontSize:"2em"},children:[(0,u.jsx)(b.X6,{sx:{fontSize:"2em"},children:"Welcome to Pynecone!"}),(0,u.jsxs)(b.xu,{children:["Get started by editing ",(0,u.jsx)(b.EK,{sx:{fontSize:"1em"},children:"pyneapp/pyneapp.py"})]}),(0,u.jsx)(k(),{href:"https://pynecone.io/docs/getting-started/introduction",passHref:!0,children:(0,u.jsx)(b.rU,{sx:{border:"0.1em solid",padding:"0.5em",borderRadius:"0.5em",_hover:{color:"rgb(107,99,246)"}},children:"Check out our docs!"})})]}),(0,u.jsxs)(C(),{children:[(0,u.jsx)("title",{children:"Pynecone App"}),(0,u.jsx)("meta",{content:"A Pynecone app.",name:"description"}),(0,u.jsx)("meta",{content:"favicon.ico",property:"og:image"})]})]})}}},function(e){e.O(0,[559,774,888,179],(function(){return n=5557,e(e.s=n);var n}));var n=e.O();_N_E=n}]);