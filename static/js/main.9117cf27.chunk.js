(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{139:function(e,t,a){},141:function(e,t,a){},143:function(e,t,a){},148:function(e,t,a){},151:function(e,t,a){},158:function(e,t,a){},201:function(e,t,a){},203:function(e,t,a){},221:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAj0lEQVR4Ae3WAQaAQBCF4Y4d0BbsnSe8zA2GKvPrfSd4P+22i5mZmf2NpJ08fkoK8vgU5PEpyONTkMenII+/pc94QMDQC/wJdT3EvkYlHegfmaQzRxYiWgeoEtE9oBKxdw9IYynoHJC274c8b6UHpJUeMMgBk3yIJ/kWmrhrFDC+/pRABgDGF57TP2JmZmYX6lHsgziN3XgAAAAASUVORK5CYII="},222:function(e,t,a){"use strict";a.r(t);var n=a(12),r=a(13),l=a(15),i=a(14),o=a(16),c=a(0),s=a.n(c),u=a(57),m=a.n(u);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var h=a(86),d=a.n(h),b=a(18),E=a.n(b),p=(a(139),"https://itsthisforthat.com/api.php?json"),f="https://source.unsplash.com/random/",v=["chicago","boston","california","washington","texas","rochester","seattle","toronto","belgium","delhi","budapest","rome","italy","florida","amsterdam","jaipur","london"],w=[{_this_:"Pandora",_that_:"Textbooks",link_:f+window.innerWidth+"x"+window.innerHeight+"?mumbai"}],g=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(o)))).handleClick=function(){d.a.get("".concat(p),{headers:{"Access-Control-Allow-Origin":"*"}}).then(function(e){w=[{_this_:e.data.this,_that_:e.data.that,link_:f+window.innerWidth+"x"+window.innerHeight+"?"+v[Math.floor(Math.random()*v.length)]}]}),a.props.onClickFunction(w)},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("button",{className:"button-refresh",onClick:this.handleClick},s.a.createElement(E.a,{icon:"refresh",size:"large",invert:!0})))}}]),t}(s.a.Component),k=(a(141),function(e){return s.a.createElement("img",{src:e.source,className:"refreshed-image",alt:""})}),A=(a(143),a(87)),_=a.n(A),x=a(88),y=a.n(x),O=(a(146),function(e){return s.a.createElement(y.a,{interval:e.interval},[e.text_].map(function(t){return s.a.createElement(_.a,Object.assign({},e,{cursor:{show:e.show},key:t,startDelay:e.startDelay}),t)}))}),j=function(e){return s.a.createElement("div",{className:"box-this-that"},s.a.createElement("div",null,s.a.createElement(O,{show:!1,interval:3e3,startDelay:0,text_:e.this_})),s.a.createElement("div",null,"For"),s.a.createElement("div",null,s.a.createElement(O,{show:!0,interval:3e3,startDelay:2e3,text_:e.that_})))},C=function(e){return s.a.createElement("div",null,s.a.createElement(k,{source:e.link_}),s.a.createElement("div",null,s.a.createElement(j,{this_:e.this_,that_:e.that_})))},N=(a(148),function(){return s.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",viewBox:"0 0 600 300"},s.a.createElement("a",{href:"http://littup.cc/thisforthat/api/all_api_links.html",target:"_blank",rel:"noopener noreferrer"},s.a.createElement("symbol",{id:"s-text"},s.a.createElement("text",{textAnchor:"middle",x:"100%",y:"0%",dy:"1em",dx:"-1em"},"api!")),s.a.createElement("use",{xlinkHref:"#s-text",className:"text"}),s.a.createElement("use",{xlinkHref:"#s-text",className:"text"}),s.a.createElement("use",{xlinkHref:"#s-text",className:"text"}),s.a.createElement("use",{xlinkHref:"#s-text",className:"text"}),s.a.createElement("use",{xlinkHref:"#s-text",className:"text"})))}),B=a(89),F=a.n(B),H=(a(151),function(){return s.a.createElement(F.a,{className:"particles-display",params:{particles:{number:{value:50},size:{value:3}},interactivity:{events:{onhover:{enable:!0,mode:"grab"}}}}})}),z=a(19),S=(a(156),a(158),a(40)),D=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(S.b,{url:"http://itsthisforthat.com",options:{text:"Wait, what does your startup do?",size:"large"}}))}}]),t}(s.a.Component),W=function(e){return s.a.createElement(S.a,{screenName:e.followName,options:{size:"large",showCount:!1}})},I=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"floating-button"},s.a.createElement(z.Fab,{style:{right:"20px",bottom:"20px"}},s.a.createElement(z.FabButton,null,s.a.createElement(E.a,{icon:"share",size:21,invert:!0})),s.a.createElement(z.FabActions,null,s.a.createElement(z.FabAction,{className:"button button-royal",onClick:this.handleCreateGroup,tooltip:s.a.createElement(D,null)},s.a.createElement(E.a,{icon:"question_answer",invert:!0,size:13})),s.a.createElement(z.FabAction,{className:"button button-balanced",onClick:this.handleCreateMemo,tooltip:s.a.createElement(W,{followName:"erickerr"})},s.a.createElement(E.a,{icon:"person_add",invert:!0,size:13})),s.a.createElement(z.FabAction,{className:"button button-balanced",onClick:this.handleCreateMemo,tooltip:s.a.createElement(W,{followName:"gilbert"})},s.a.createElement(E.a,{icon:"person_add",invert:!0,size:13})),s.a.createElement(z.FabAction,{className:"button button-balanced",onClick:this.handleCreateMemo,tooltip:s.a.createElement(W,{followName:"nirbhayph"})},s.a.createElement(E.a,{icon:"person_add",invert:!0,size:13})))))}}]),t}(c.Component),M=(a(201),a(203),function(){return s.a.createElement("div",null,s.a.createElement("div",{className:"sub-data text"},"Wait,",s.a.createElement("br",null)," what ",s.a.createElement("br",null)," does ",s.a.createElement("br",null)," your ",s.a.createElement("br",null)," startup ",s.a.createElement("br",null)," do? ",s.a.createElement("br",null),s.a.createElement("br",null),"So, its ",s.a.createElement("br",null)," like ",s.a.createElement("br",null),"a..."))}),J=a(90),Y=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(e){return s.a.createElement(J.bubble,{isOpen:this.props.sideBarState,noOverlay:!0,customBurgerIcon:s.a.createElement("img",{src:a(221),alt:""})},s.a.createElement("div",null,s.a.createElement(M,null)))}}]),t}(s.a.Component),Q=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(o)))).state={this_:"It's This",that_:"That",link:"https://source.unsplash.com/random/"+window.innerWidth+"x"+window.innerHeight+"/?newyork",sideBarState:!0},a.changeData=function(e){a.setState(function(){return{this_:e[0]._this_,that_:e[0]._that_,link:e[0].link_,sideBarState:!1}})},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(Y,{sideBarState:this.state.sideBarState}),s.a.createElement(C,{this_:this.state.this_,that_:this.state.that_,link_:this.state.link}),s.a.createElement(g,{onClickFunction:this.changeData}),s.a.createElement(I,null),s.a.createElement(H,null),s.a.createElement(N,null))}}]),t}(s.a.Component);m.a.render(s.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},91:function(e,t,a){e.exports=a(222)}},[[91,2,1]]]);
//# sourceMappingURL=main.9117cf27.chunk.js.map