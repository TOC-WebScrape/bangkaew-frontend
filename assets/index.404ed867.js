var E=Object.defineProperty,I=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var x=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var v=(r,t,a)=>t in r?E(r,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[t]=a,d=(r,t)=>{for(var a in t||(t={}))T.call(t,a)&&v(r,a,t[a]);if(x)for(var a of x(t))j.call(t,a)&&v(r,a,t[a]);return r},b=(r,t)=>I(r,A(t));import{j as n,a as e,C as M,b as D,c as F,T as h,d as L,B as g,r as c,e as O,f as _,A as G,g as H,L as w,h as C,i as N,I as k,S as f,k as R,l as z,m as y,n as q,o as W,p as K,P as B,F as $,q as U,s as X,R as J,t as m,u as Q,v as V,w as Y}from"./vendor.e45ca8fd.js";const Z=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function a(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=a(s);fetch(s.href,o)}};Z();const ee=({imageUrl:r,currentPrice:t,percentChange:a,highestPrice:i,lowestPrice:s,volume:o})=>n("div",{className:"flex items-center justify-between w-96 h-28 border-solid bg-red p-2.5",children:[e("img",{src:r,alt:"EXCHANGE"}),n("div",{children:[t,"$"]}),n("div",{children:[a>=0?e("div",{children:"UP ICON"}):e("div",{children:"DOWN ICON"}),a]}),n("div",{children:[i,e("div",{className:"flex w-full h-px bg-black"}),s]}),n("div",{children:[o,"$"]})]}),p=({imageUrl:r,title:t,description:a})=>n(M,{sx:{maxWidth:345,borderStyle:"solid",border:1,boxShadow:2},children:[e(D,{component:"img",height:"140",image:r,alt:"card image"}),n(F,{children:[e(h,{gutterBottom:!0,variant:"h5",component:"div",children:t}),e(h,{variant:"body2",color:"text.secondary",children:a})]}),n(L,{children:[e(g,{size:"small",children:"Share"}),e(g,{size:"small",children:"Learn More"})]})]}),S=c.exports.createContext({toggleColorMode:()=>{}}),ne=({children:r})=>{const[t,a]=c.exports.useState("light"),i=c.exports.useMemo(()=>({toggleColorMode:()=>{a(o=>o==="light"?"dark":"light"),console.log("toggle Color Mode to"+{mode:t})}}),[]),s=c.exports.useMemo(()=>O({palette:{mode:t}}),[t]);return e(S.Provider,{value:i,children:e(_,{theme:s,children:r})})},te=({})=>{const r=[{page:"Home",route:"/"},{page:"Explore Price",route:"/search"},{page:"About",route:"/about"}],[t,a]=c.exports.useState(!1),i=c.exports.useContext(S),s=()=>{a(!t),i.toggleColorMode()};return e(G,{sx:{position:"static",mb:0},children:n(H,{sx:{},children:[n(w,{to:"/",className:"grow flex flex-row items-center",children:[e(C,{sx:{mr:2,height:55,width:55},src:"https://avatars.githubusercontent.com/u/63555111?v=4"}),e(h,{sx:{color:"white",flexGrow:1},variant:"h6",children:"Bangkaew"})]}),n(N,{sx:{display:"flex"},children:[r.map(({page:o,route:l})=>e(N,{sx:{color:"white",display:"flex",borderRightStyle:"solid",justifyContent:"center",maxwidth:200,px:3},children:e(w,{to:l,style:{textDecoration:"none",display:"flex",alignContent:"center"},children:e(g,{sx:{color:"white",fontSize:13,maxHeight:40,maxwidth:200,whiteSpace:"nowrap"},children:o},o)})},o)),e(k,{onClick:s,sx:{ml:3},children:t?e(f,{component:R,sx:{color:"#F0B90B"}}):e(f,{component:z,sx:{color:"#F0B90B"}})})]})]})})},re=({})=>{const r=["Ethereum (ETH)","Litecoin (LTC)","Cardano (ADA)","Polkadot (DOT)","Bitcoin Cash (BCH)","Stellar (XLM)","Dogecoin (DOGE)","Binance Coin (BNB)"],[t,a]=c.exports.useState(""),i=o=>{o.key==="Enter"&&console.log(t)};return n(y,{sx:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[e(h,{sx:{py:2},children:"Cryptocurrency Symbol"}),n(y,{sx:{display:"flex",alignContent:"center",justifyContent:"center"},children:[e(q,{sx:{width:900,display:"inline-block"},id:"currency-search",freeSolo:!0,options:r,onInputChange:(o,l)=>{a(String(l))},renderInput:o=>e(W,b(d({},o),{label:"Search Cryptocurrency",value:t,onKeyDown:i}))}),e(k,{onClick:o=>{console.log(t)},sx:{borderStyle:"solid",borderBlockColor:"black",display:"inline-block"},children:e(f,{component:K,sx:{width:50,height:40}})})]})]})},P=c.exports.createContext(null),ae=[{name:"Binance",isSelect:!0},{name:"Bitfinex",isSelect:!0},{name:"Coinbase",isSelect:!0},{name:"Coinsbit",isSelect:!0},{name:"eToroX",isSelect:!0},{name:"FTX",isSelect:!0},{name:"Gateio",isSelect:!0},{name:"Kucoin",isSelect:!0}],oe=({children:r})=>{const[t,a]=c.exports.useState(ae),i=(s,o)=>{t.filter(l=>{l.name===s&&(l.isSelect=!l.isSelect),a([...t])}),console.log(...t)};return e(P.Provider,{value:{exchanges:t,toggleSelect:i},children:r})},se=({})=>{const{exchanges:r,toggleSelect:t}=c.exports.useContext(P),a=i=>{t(i.target.value,i.target.checked),console.log(i.target.name+i.target.checked)};return n(B,{sx:{m:2,display:"flex",flexDirection:"column",alignItems:"center"},children:[e(h,{sx:{textAlign:"center"},children:"Exchange Websites"}),e($,{sx:{display:"flex",flexWrap:"wrap",justifyContent:"center",width:.7,flexDirection:"row"},children:r.map(i=>e(U,{control:e(X,{onChange:a,checked:i.isSelect}),label:i.name,value:i.name,sx:{flexGrow:1,maxWidth:.21,width:.21,borderStyle:"solid",maxHeight:40,m:2}}))})]})},ie={imageUrl:"https://image.shutterstock.com/image-vector/binance-coin-vector-logo-260nw-1349992622.jpg",currentPrice:42e3,percentChange:.59,highestPrice:43099,lowestPrice:4e4,volume:123456789},u={imageUrl:"https://thestandard.co/wp-content/uploads/2022/03/Bitcoin2.jpg",title:"Bitcoin",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim elit, sodales sed urna a, tempor interdum augue. Nunc iaculis leo ut convallis volutpat. Aliquam nulla nisl, facilisis vel auctor ut, tempor in lorem. Fusce volutpat lorem quis velit laoreet, vitae pretium risus auctor. Sed tincidunt lectus quam, in pretium neque semper ut. Pellentesque mattis nunc mauris, vel aliquet est elementum in. Nunc interdum sit amet leo nec dapibus. Nullam pharetra ultricies tortor sed ullamcorper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam id rutrum risus. Nullam eget lectus blandit, blandit risus nec, imperdiet massa. Duis eu sem nec nisi molestie mattis. Duis aliquet orci vitae massa porttitor, scelerisque viverra tortor finibus. Maecenas mattis arcu ac leo dapibus pulvinar. "},le=({})=>n("div",{style:{paddingTop:"10px",display:"flex",flexDirection:"row",justifyContent:"center",gap:"20px"},children:[e(p,d({},u)),e(p,d({},u)),e(p,d({},u))]});var ce="/bangkaew-frontend/assets/Binance.c8ec5bf5.png",de="/bangkaew-frontend/assets/Phukao.02c2d3be.png",he="/bangkaew-frontend/assets/Apextone.1c6ce8b2.png",me="/bangkaew-frontend/assets/Phoom_mrt.23dd4335.png",pe="/bangkaew-frontend/assets/Tree.eb310bf1.png",ue="/bangkaew-frontend/assets/James.884c4f9d.png";const ge=({})=>{const r=ie;return n("div",{children:[e(re,{}),e(se,{}),e(ee,{currentPrice:r.currentPrice,highestPrice:r.highestPrice,imageUrl:ce,lowestPrice:r.lowestPrice,percentChange:r.percentChange,volume:r.volume})]})};const fe=({})=>n("body",{children:[n("div",{className:"headBox",children:[e("div",{className:"mainBox"}),n("div",{className:"sideBox",children:[e(C,{style:{display:"flex",justifyContent:"center",alignItems:"center",position:"relative"},sx:{mb:5,height:150,width:150},src:"https://avatars.githubusercontent.com/u/63555111?v=4"}),n("div",{className:"content",children:[e("h6",{children:"BANGKAEW"}),n("p",{children:["We are providing cryptocurrency exchange ",e("br",{})," comparison across many website on market."]})]})]})]}),n("div",{className:"boxArea",children:[e("text",{className:"BangkaewText",children:"BANGKAEW"}),n("div",{className:"spinner-box",children:[e("div",{className:"configBorder1",children:e("div",{className:"configCore"})}),e("div",{className:"configBorder2",children:e("div",{className:"configCore"})})]}),e("text",{className:"BangkaewText",children:"TEAM"})]}),n("div",{className:"row1",children:[e("div",{className:"column",children:n("figure",{className:"cardpro",children:[e("img",{src:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg",alt:"sample87"}),n("figcaption",{children:[e("img",{src:he,alt:"profile-sample4",className:"profile"}),n("h2",{children:["Apextone",e("span",{children:"Engineer | Front-end"})]}),n("p",{children:["I'm looking for something that can deliver a 50-pound payload of snow on a small feminine target. Can you suggest something? Hello...?"," "]}),e("a",{href:"https://github.com/ApexTone",className:"follow",target:"_blank",rel:"noopener noreferrer",children:"Github"}),e("a",{href:"#",className:"info",children:"62010356"})]})]})}),e("div",{className:"column",children:n("figure",{className:"cardpro",children:[e("img",{src:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg",alt:"sample87"}),n("figcaption",{children:[e("img",{src:me,alt:"profile-sample4",className:"profile"}),n("h2",{children:["PhoomBeer",e("span",{children:"Engineer | Back-end"})]}),n("p",{children:["I'm looking for something that can deliver a 50-pound payload of snow on a small feminine target. Can you suggest something? Hello...?"," "]}),e("a",{href:"https://github.com/GoldF15h",className:"follow",target:"_blank",rel:"noopener noreferrer",children:"Github"}),e("a",{href:"#",className:"info",children:"Stu ID"})]})]})}),e("div",{className:"column",children:n("figure",{className:"cardpro",children:[e("img",{src:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg",alt:"sample87"}),n("figcaption",{children:[e("img",{src:"https://avatars.githubusercontent.com/u/63555111?v=4://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample4.jpg",alt:"profile-sample4",className:"profile"}),n("h2",{children:["BeanBean",e("span",{children:"Engineer | Front-end"})]}),n("p",{children:["I'm looking for something that can deliver a 50-pound payload of snow on a small feminine target. Can you suggest something? Hello...?"," "]}),e("a",{href:"https://github.com/teethat-lsk",className:"follow",target:"_blank",rel:"noopener noreferrer",children:"Github"}),e("a",{href:"#",className:"info",children:"62010434"})]})]})}),e("div",{className:"column",children:n("figure",{className:"cardpro",children:[e("img",{src:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg",alt:"sample87"}),n("figcaption",{children:[e("img",{src:"https://avatars.githubusercontent.com/u/50296761?v=4",alt:"profile-sample4",className:"profile"}),n("h2",{children:["PhoomPat",e("span",{children:"Engineer | Back-end"})]}),n("p",{children:["I'm looking for something that can deliver a 50-pound payload of snow on a small feminine target. Can you suggest something? Hello...?"," "]}),e("a",{href:"https://github.com/Poomipat-Ch",className:"follow",target:"_blank",rel:"noopener noreferrer",children:"Github"}),e("a",{href:"#",className:"info",children:"Stu ID"})]})]})})]}),n("div",{className:"row2",children:[e("div",{className:"column",children:n("figure",{className:"cardpro",children:[e("img",{src:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg",alt:"sample87"}),n("figcaption",{children:[e("img",{src:ue,alt:"profile-sample4",className:"profile"}),n("h2",{children:["iJames",e("span",{children:"Engineer | Front-end | Back-end"})]}),n("p",{children:["I'm looking for something that can deliver a 50-pound payload of snow on a small feminine target. Can you suggest something? Hello...?"," "]}),e("a",{href:"https://github.com/j4m3ee",className:"follow",target:"_blank",rel:"noopener noreferrer",children:"Github"}),e("a",{href:"#",className:"info",children:"62010986"})]})]})}),e("div",{className:"column",children:n("figure",{className:"cardpro",children:[e("img",{src:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg",alt:"sample87"}),n("figcaption",{children:[e("img",{src:pe,alt:"profile-sample4",className:"profile"}),n("h2",{children:["Treepangkorn",e("span",{children:"Engineer | Front-end"})]}),n("p",{children:["I'm looking for something that can deliver a 50-pound payload of snow on a small feminine target. Can you suggest something? Hello...?"," "]}),e("a",{href:"https://github.com/T-Pakorn",className:"follow",target:"_blank",rel:"noopener noreferrer",children:"Github"}),e("a",{href:"#",className:"info",children:"Stu ID"})]})]})}),e("div",{className:"column",children:n("figure",{className:"cardpro",children:[e("img",{src:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg",alt:"sample87"}),n("figcaption",{children:[e("img",{src:"https://avatars.githubusercontent.com/u/63220854?v=4",alt:"profile-sample4",className:"profile"}),n("h2",{children:["Mr.Boss",e("span",{children:"Engineer | Front-end"})]}),n("p",{children:["I'm looking for something that can deliver a 50-pound payload of snow on a small feminine target. Can you suggest something? Hello...?"," "]}),e("a",{href:"https://github.com/BXSS101",className:"follow",target:"_blank",rel:"noopener noreferrer",children:"Github"}),e("a",{href:"#",className:"info",children:"62011044"})]})]})}),e("div",{className:"column",children:n("figure",{className:"cardpro",children:[e("img",{src:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg",alt:"sample87"}),n("figcaption",{children:[e("img",{src:de,alt:"profile-sample4",className:"profile"}),n("h2",{children:["PuddingBoi",e("span",{children:"Engineer | Front-end"})]}),n("p",{children:["I'm looking for something that can deliver a 50-pound payload of snow on a small feminine target. Can you suggest something? Hello...?"," "]}),e("a",{href:"https://github.com/Phukaoo08",className:"follow",target:"_blank",rel:"noopener noreferrer",children:"Github"}),e("a",{href:"#",className:"info",children:"62010684"})]})]})})]})]}),xe=()=>n(B,{sx:{bgcolor:"background.default"},children:[e(te,{}),e(ve,{})]}),ve=()=>n(J,{children:[e(m,{path:"/",element:e(le,{})}),e(m,{path:"/search",element:e(ge,{})}),e(m,{path:"/about",element:e(fe,{})}),e(m,{path:"*",element:e("main",{style:{padding:"1rem"},children:e("p",{children:"There's nothing here!"})})})]});function be(){return e(ne,{children:e(oe,{children:e(xe,{})})})}Q.render(e(V.StrictMode,{children:e(Y,{children:e(be,{})})}),document.getElementById("root"));
