var R=Object.defineProperty,L=Object.defineProperties;var D=Object.getOwnPropertyDescriptors;var S=Object.getOwnPropertySymbols;var W=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var k=(s,r,a)=>r in s?R(s,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[r]=a,P=(s,r)=>{for(var a in r||(r={}))W.call(r,a)&&k(s,a,r[a]);if(S)for(var a of S(r))z.call(r,a)&&k(s,a,r[a]);return s},A=(s,r)=>L(s,D(r));var E=(s,r,a)=>(k(s,typeof r!="symbol"?r+"":r,a),a);import{j as t,B as f,a as e,C as U,S as u,T as l,b as x,d as H,c as K,r as c,e as $,f as J,g as q,A as Z,h as X,L as F,i as _,k as j,l as Y,I as T,m as Q,n as V,o as ee,p as te,q as re,P as B,F as ne,s as ae,t as se,R as oe,u as y,v as ie,w as ce,x as le}from"./vendor.a3288ec4.js";const de=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function a(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerpolicy&&(n.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?n.credentials="include":i.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(i){if(i.ep)return;i.ep=!0;const n=a(i);fetch(i.href,n)}};de();const he=({imageUrl:s,currentPrice:r,percentChange:a,highestPrice:o,lowestPrice:i,volume:n,rateStatus:d})=>t(f,{sx:{display:"flex",alignItems:"center",justifyContent:"left",flexGrow:1,maxWidth:.7,maxHeight:200,border:2,borderRadius:3,margin:1,boxShadow:2},children:[e(U,{component:"img",image:s,sx:{height:.8,width:"auto",ml:5,my:2,mr:4}}),t(u,{direction:"row",gap:10,sx:{ml:5,alignItems:"top",justifyContent:"right"},children:[t(u,{sx:{display:"flex",alignItems:"center",gap:2},children:[e(l,{component:"div",sx:{display:"flex",alignItems:"center",fontSize:20},children:"CURRENT PRIZE"}),t(l,{variant:"h5",component:"div",sx:{display:"flex",alignItems:"center",mt:1},children:[r,"$"]})]}),t(u,{sx:{display:"flex",alignItems:"center",gap:0},children:[e(l,{component:"div",sx:{display:"flex",alignItems:"center",fontSize:20},children:"CHANGE RATE"}),d?t(u,{sx:{justifyContent:"center",mt:2},children:[e(f,{sx:{display:"flex",justifyContent:"center"},children:e(x,{sx:{color:"#21BF73"},component:H})}),t(l,{variant:"h5",component:"div",color:"#21BF73",sx:{display:"flex",textAlign:"center",mb:3,color:"#21BF73"},children:[a,"%"]})]}):t(u,{sx:{justifyContent:"center",mb:2},children:[t(l,{variant:"h5",component:"div",sx:{display:"flex",textAlign:"center",mt:3,color:"#FA4659"},children:[a,"%"]}),e(f,{sx:{display:"flex",justifyContent:"center"},children:e(x,{sx:{color:"#FA4659"},component:K})})]})]}),t(u,{sx:{justifyContent:"top",alignItems:"center"},children:[e(l,{component:"div",sx:{display:"flex",alignItems:"center",fontSize:20,mb:1},children:"MAX/MIN PRIZE"}),t(l,{variant:"h5",component:"div",sx:{display:"flex",alignItems:"center",my:.5},children:[o,"$"]}),e(f,{sx:{border:1,width:100}}),t(l,{variant:"h5",component:"div",sx:{display:"flex",alignItems:"center",my:.5},children:[i,"$"]})]}),t(u,{sx:{justifyContent:"top",alignItems:"left",display:"flex"},children:[e(l,{component:"div",sx:{display:"flex",fontSize:20,mb:3},children:"VOLUME"}),t(l,{variant:"h5",component:"div",sx:{display:"flex",alignItems:"center"},children:[n,"$"]})]})]})]}),I=c.exports.createContext({toggleColorMode:()=>{}}),me=({children:s})=>{const[r,a]=c.exports.useState("light"),o=c.exports.useMemo(()=>({toggleColorMode:()=>{a(n=>n==="light"?"dark":"light"),console.log("toggle Color Mode to"+{mode:r})}}),[]),i=c.exports.useMemo(()=>$({palette:{mode:r}}),[r]);return e(I.Provider,{value:o,children:e(J,{theme:i,children:s})})};var G=q.create({baseURL:"https://bangkaew.surawit.studio/api",withCredentials:!0,headers:{"Content-type":"application/json"}});class pe{suggest(){return G.get("/currency-name")}currency(r){return G.get(`/currency/${r}`)}}var C=new pe,ge="/bangkaew-frontend/assets/Binance.c8ec5bf5.png",ue="/bangkaew-frontend/assets/Gateio.7b3997cd.png",fe="/bangkaew-frontend/assets/Kucoin.82549e0f.png",be="/bangkaew-frontend/assets/BitMart.4ae75bbe.png",xe="/bangkaew-frontend/assets/Phukao.02c2d3be.png",ye="/bangkaew-frontend/assets/Apextone.1c6ce8b2.png",ve="/bangkaew-frontend/assets/Phoom_mrt.23dd4335.png",we="/bangkaew-frontend/assets/Tree.eb310bf1.png",Ne="/bangkaew-frontend/assets/James.884c4f9d.png",ke="/bangkaew-frontend/assets/GraphBG1.ec3403c1.jpg",Ce="/bangkaew-frontend/assets/GraphBG2.b15e587d.png",Be="/bangkaew-frontend/assets/bitcoinAna.699e847e.jpg",Ie="/bangkaew-frontend/assets/bitcoinTrophy.7453c824.jpg",M="/bangkaew-frontend/assets/BangkaewLogo.ffb11951.svg";class v{constructor(r){E(this,"data");this.data=r}}class Se extends v{getFormattedData(){try{let{price:r,change:a,high_low:o,volume:i}=this.data;const n=Object.keys(r)[0];return n===null?null:{currentPrice:r[n].split(" ")[1].slice(1),percentChange:a[n].slice(1,a[n].length-1),rateStatus:a[n][0]==="+",imageUrl:ge,highestPrice:o[n].split("/")[0].replace(/\s/g,""),lowestPrice:o[n].split("/")[1].replace(/\s/g,""),volume:i[n]}}catch{return null}}}class Pe extends v{getFormattedData(){try{let{price:r,change:a,high_low:o,volume:i}=this.data;const n=Object.keys(r)[0];return n===null?null:{currentPrice:r[n].split(" ")[1],percentChange:a[n].slice(a[n][0]==="-"?1:0,a[n].length-2),rateStatus:a[n][0]!=="-",imageUrl:be,highestPrice:o[n].split("/")[0],lowestPrice:o[n].split("/")[1],volume:i[n].split(" ")[0]}}catch{return null}}}class Ae extends v{getFormattedData(){try{let{price:r,change:a,high_low:o,volume:i}=this.data;const n=Object.keys(r)[0];return n===null?null:{currentPrice:r[n],percentChange:a[n].slice(1,a[n].length-2),rateStatus:a[n][0]==="+",imageUrl:ue,highestPrice:o[n].split("/")[0],lowestPrice:o[n].split("/")[1],volume:i[n]}}catch{return null}}}class Ee extends v{getFormattedData(){try{let{price:r,change:a,high_low:o,volume:i}=this.data;const n=Object.keys(r)[0];return n===null?null:{currentPrice:r[n],percentChange:a[n].slice(1,a[n].length-1),rateStatus:a[n][0]==="+",imageUrl:fe,highestPrice:"-",lowestPrice:"-",volume:i[n]}}catch{return null}}}const w=c.exports.createContext(null),Fe=[{name:"Binance",isSelect:!0,data:null},{name:"Gateio",isSelect:!0,data:null},{name:"Kucoin",isSelect:!0,data:null},{name:"BitMart",isSelect:!0,data:null}],je=({children:s})=>{const[r,a]=c.exports.useState(Fe),[o,i]=c.exports.useState([]),n=b=>{C.currency(b).then(p=>{const m=r,N=new Se(p.data.bn);m[0].data=N.getFormattedData();const h=new Pe(p.data.bm);m[3].data=h.getFormattedData();const g=new Ae(p.data.g);m[1].data=g.getFormattedData();const O=new Ee(p.data.kc);m[2].data=O.getFormattedData(),a([...m])})},d=(b,p)=>{r.filter(m=>{m.name===b&&(m.isSelect=!m.isSelect),a([...r])}),console.log(...r)};return e(w.Provider,{value:{exchanges:r,toggleSelect:d,data:o,fetchPrice:n},children:s})},Ge=({})=>{const s=[{page:"Home",route:"/bangkaew-frontend"},{page:"Explore Price",route:"/bangkaew-frontend/search"},{page:"About",route:"/bangkaew-frontend/about"}],[r,a]=c.exports.useState(!1),o=c.exports.useContext(I),i=()=>{a(!r),o.toggleColorMode()};return e(Z,{sx:{position:"sticky",mb:0},children:t(X,{sx:{},children:[t(F,{to:"/bangkaew-frontend",className:"grow flex flex-row items-center",children:[e(_,{sx:{mr:2,height:55,width:55},src:M}),e(l,{sx:{color:"white",flexGrow:1},variant:"h6",children:"Bangkaew"})]}),t(j,{sx:{display:"flex"},children:[s.map(({page:n,route:d})=>e(j,{sx:{color:"white",display:"flex",borderRightStyle:"solid",justifyContent:"center",maxwidth:200,px:3},children:e(F,{to:d,style:{textDecoration:"none",display:"flex",alignContent:"center"},children:e(Y,{sx:{color:"white",fontSize:13,maxHeight:40,maxwidth:200,whiteSpace:"nowrap"},children:n},n)})},n)),e(T,{onClick:i,sx:{ml:3},children:r?e(x,{component:Q,sx:{color:"#F0B90B"}}):e(x,{component:V,sx:{color:"#F0B90B"}})})]})]})})},_e=({})=>{const[s,r]=c.exports.useState(""),[a,o]=c.exports.useState([]),{fetchPrice:i}=c.exports.useContext(w),[n,d]=c.exports.useState(0);c.exports.useEffect(()=>{N()},[]),c.exports.useEffect(()=>(console.log("interval changed",n),()=>clearInterval(n)),[n]);const b=h=>{r(h)},p=h=>{console.log(h.target.value),h.key==="Enter"&&C.currency(s).then(g=>{console.log(g.data.bn)})},m=h=>{i(s),clearInterval(n),d(setInterval(()=>{a.filter(g=>g.toLowerCase()==s.toLowerCase()).length>0&&(console.log("fetching"),i(s))},12e3))},N=()=>{C.suggest().then(h=>{o(h.data.result)})};return t(f,{sx:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[e(l,{sx:{py:2,fontSize:50,fontWeight:"bold"},children:"Cryptocurrency Symbol"}),t(f,{sx:{display:"flex",alignContent:"center",justifyContent:"center"},children:[e(ee,{sx:{width:900,display:"inline-block"},id:"currency-search",freeSolo:!0,options:a,onInputChange:(h,g)=>{b(g)},renderInput:h=>e(te,A(P({},h),{label:"Search Cryptocurrency",value:s,onKeyDown:p}))}),e(T,{onClick:m,sx:{borderStyle:"solid",borderBlockColor:"black",display:"inline-block"},children:e(x,{component:re,sx:{width:50,height:40}})})]})]})},Te=({})=>{const{exchanges:s,toggleSelect:r}=c.exports.useContext(w);c.exports.useContext(I);const a=o=>{r(o.target.value,o.target.checked),console.log(o.target.name+o.target.checked)};return t(B,{sx:{m:2,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:"#2EB872",borderRadius:3,py:5,width:.9},children:[e(l,{sx:{textAlign:"center",fontSize:50},children:"Exchange Websites"}),e(ne,{sx:{display:"flex",flexWrap:"wrap",justifyContent:"center",width:.7,flexDirection:"row"},children:s.map(o=>e(ae,{control:e(se,{onChange:a,checked:o.isSelect}),label:o.name,value:o.name,className:"border-2",sx:{flexGrow:1,maxWidth:.21,width:.21,maxHeight:40,m:2,backgroundColor:"#b4b5af",borderRadius:2}},o.name))})]})};const Me=({})=>t("div",{children:[t("div",{className:"headZone",children:[t("div",{className:"context",children:[e("p",{className:"BK",children:"BANGKAEW"}),e("p",{className:"bkQuote",children:"We are bangkaew, We make crypto EASY for you."})]}),e("div",{className:"contain",children:t("div",{className:"wrapper",children:[e("img",{src:Ce}),e("img",{src:Be}),e("img",{src:Ie}),e("img",{src:ke})]})})]}),t("div",{className:"boxArea",children:[t("div",{className:"spinner-box",children:[e("div",{className:"configBorder1",children:e("div",{className:"configCore"})}),e("div",{className:"configBorder2",children:e("div",{className:"configCore"})})]}),e("p",{className:"BangkaewText",children:"Welcome to bangkaew"}),t("div",{className:"spinner-box",children:[e("div",{className:"configBorder1",children:e("div",{className:"configCore"})}),e("div",{className:"configBorder2",children:e("div",{className:"configCore"})})]})]}),t("div",{className:"gitArea",children:[t("div",{className:"Boxcard",children:[e("div",{className:"left1"}),e("div",{className:"right",children:t("div",{className:"words",children:[e("h1",{children:"What is 'cryptocurrency' ?"}),e("p",{children:"A cryptocurrency is a digital or virtual currency that is secured by cryptography, which makes it nearly impossible to counterfeit or double-spend. Many cryptocurrencies are decentralized networks based on blockchain technology.A distributed ledger enforced by a disparate network of computers. A defining feature of cryptocurrencies is that they are generally not issued by any central authority, rendering them theoretically immune to government interference or manipulation."}),e("a",{href:"https://www.investopedia.com/terms/c/cryptocurrency.asp",className:"btn",target:"_blank",rel:"noopener noreferrer",children:"Read more"})]})})]}),t("div",{className:"Boxcard",children:[e("div",{className:"left2"}),e("div",{className:"right",children:t("div",{className:"words",children:[e("h1",{children:"Why are we trading ?"}),e("p",{children:"Cryptocurrency traders often have one of two goals: to accumulate Bitcoin or make a profit in USD. In a crypto bull market, it\u2019s pretty easy for your portfolio to increase in USD value, but it\u2019s more challenging for Bitcoin value to increase. To track your portfolio\u2019s Bitcoin value, you can trade altcoins against Bitcoin on exchanges like Coinbase Pro. By actively trading your cryptocurrency, you risk losing your crypto to the market. Since cryptocurrency prices are so volatile, it\u2019s not uncommon for traders to lose money quickly trading cryptocurrencies. This is why so many crypto enthusiasts just HODL their Bitcoin."}),e("a",{href:"https://www.benzinga.com/how-to-trade-cryptocurrency",className:"btn",target:"_blank",rel:"noopener noreferrer",children:"Read more"})]})})]})]}),t("div",{className:"footer",children:[e("div",{className:"btnFont",children:e("a",{href:"https://github.com/TOC-WebScrape/bangkaew-frontend",target:"_blank",rel:"noopener noreferrer",children:e("span",{children:"Frontend Github"})})}),t("div",{className:"footerContent",children:[e("h3",{children:"BANGKAEW GITHUB"}),e("p",{children:"In this TOC's subject project.We are doing 'web scrapping' and we divided into 2 team. Frontend and Backend. You can visit our github's project instead. Enjoy."})]}),e("div",{className:"btnBack",children:e("a",{href:"https://github.com/TOC-WebScrape/bangkaew-backend",target:"_blank",rel:"noopener noreferrer",children:e("span",{children:"Backend Github"})})})]})]}),Oe=({})=>{const{exchanges:s}=c.exports.useContext(w);return t("div",{className:"flex flex-col items-center",children:[e(_e,{}),e(Te,{}),e(B,{className:"flex flex-wrap justify-center w-full",children:s.map(({data:r,isSelect:a},o)=>{if(r&&a)return e(he,{currentPrice:r.currentPrice,highestPrice:r.highestPrice,imageUrl:r.imageUrl,lowestPrice:r.lowestPrice,percentChange:r.percentChange,volume:r.volume,rateStatus:r.rateStatus},o)})})]})};const Re=({})=>t("div",{children:[t("div",{className:"headBox",children:[e("div",{className:"mainBox"}),t("div",{className:"sideBox",children:[e(_,{style:{display:"flex",justifyContent:"center",alignItems:"center",position:"relative"},sx:{mb:5,height:150,width:150},src:M}),t("div",{className:"content",children:[e("h6",{children:"BANGKAEW"}),t("p",{children:["We are providing cryptocurrency exchange ",e("br",{})," comparison across many website on market."]})]})]})]}),t("div",{className:"boxArea",children:[e("p",{className:"BangkaewText",children:"BANGKAEW"}),t("div",{className:"spinner-box",children:[e("div",{className:"configBorder1",children:e("div",{className:"configCore"})}),e("div",{className:"configBorder2",children:e("div",{className:"configCore"})})]}),e("p",{className:"BangkaewText",children:"TEAM"})]}),t("div",{className:"row1",children:[e("div",{className:"column",children:t("figure",{className:"cardpro",children:[e("img",{src:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg",alt:"sample87"}),t("figcaption",{children:[e("img",{src:ye,alt:"profile-sample4",className:"profile"}),t("h2",{children:["Apextone",e("span",{children:"Engineer | Front-end"})]}),t("p",{children:[">be me",e("br",{}),">front-end developer",e("br",{}),">do this work in like 4 days",e("br",{}),">mfw it's done",e("br",{})]}),e("a",{href:"https://github.com/ApexTone",className:"follow",target:"_blank",rel:"noopener noreferrer",children:"Github"}),e("a",{href:"#",className:"info",children:"62010356"})]})]})}),e("div",{className:"column",children:t("figure",{className:"cardpro",children:[e("img",{src:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg",alt:"sample87"}),t("figcaption",{children:[e("img",{src:ve,alt:"profile-sample4",className:"profile"}),t("h2",{children:["PhoomBeer",e("span",{children:"Engineer | Back-end"})]}),t("p",{children:["good artists copy. great artists steal. Greatest artist copy, then paste."," "]}),e("a",{href:"https://github.com/GoldF15h",className:"follow",target:"_blank",rel:"noopener noreferrer",children:"Github"}),e("a",{href:"#",className:"info",children:"62010318"})]})]})}),e("div",{className:"column",children:t("figure",{className:"cardpro",children:[e("img",{src:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg",alt:"sample87"}),t("figcaption",{children:[e("img",{src:"https://avatars.githubusercontent.com/u/63555111?v=4://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample4.jpg",alt:"profile-sample4",className:"profile"}),t("h2",{children:["BeanBean",e("span",{children:"Engineer | Front-end"})]}),t("p",{children:["We build our Program (website) the way we build our cities: over time, without a plan, on top of ruins."," "]}),e("a",{href:"https://github.com/teethat-lsk",className:"follow",target:"_blank",rel:"noopener noreferrer",children:"Github"}),e("a",{href:"#",className:"info",children:"62010434"})]})]})}),e("div",{className:"column",children:t("figure",{className:"cardpro",children:[e("img",{src:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg",alt:"sample87"}),t("figcaption",{children:[e("img",{src:"https://avatars.githubusercontent.com/u/50296761?v=4",alt:"profile-sample4",className:"profile"}),t("h2",{children:["PhoomPat",e("span",{children:"Engineer | Back-end"})]}),t("p",{children:["I'm looking for something that can deliver a 50-pound payload of snow on a small feminine target. Can you suggest something? Hello...?"," "]}),e("a",{href:"https://github.com/Poomipat-Ch",className:"follow",target:"_blank",rel:"noopener noreferrer",children:"Github"}),e("a",{href:"#",className:"info",children:"62010722"})]})]})})]}),t("div",{className:"row2",children:[e("div",{className:"column",children:t("figure",{className:"cardpro",children:[e("img",{src:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg",alt:"sample87"}),t("figcaption",{children:[e("img",{src:Ne,alt:"profile-sample4",className:"profile"}),t("h2",{children:["iJames",e("span",{children:"Engineer | Front-end"})]}),t("p",{children:["Hello, I'm Jame.This is my blog. My favorite color is green. I like to watch tv-series and listen music. Now I'm interested in blockchain technology"," "]}),e("a",{href:"https://github.com/j4m3ee",className:"follow",target:"_blank",rel:"noopener noreferrer",children:"Github"}),e("a",{href:"#",className:"info",children:"62010986"})]})]})}),e("div",{className:"column",children:t("figure",{className:"cardpro",children:[e("img",{src:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg",alt:"sample87"}),t("figcaption",{children:[e("img",{src:we,alt:"profile-sample4",className:"profile"}),t("h2",{children:["Treepakorn",e("span",{children:"Engineer | Back-end"})]}),t("p",{children:["I asked God for a M1 mini, but I know God doesn't work that way. So I stole a M1 mini and asked for forgiveness."," "]}),e("a",{href:"https://github.com/T-Pakorn",className:"follow",target:"_blank",rel:"noopener noreferrer",children:"Github"}),e("a",{href:"#",className:"info",children:"62010694"})]})]})}),e("div",{className:"column",children:t("figure",{className:"cardpro",children:[e("img",{src:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg",alt:"sample87"}),t("figcaption",{children:[e("img",{src:"https://avatars.githubusercontent.com/u/63220854?v=4",alt:"profile-sample4",className:"profile"}),t("h2",{children:["Mr.Boss",e("span",{children:"Engineer | Front-end"})]}),t("p",{children:["I'm looking for something that can deliver a 50-pound payload of snow on a small feminine target. Can you suggest something? Hello...?"," "]}),e("a",{href:"https://github.com/BXSS101",className:"follow",target:"_blank",rel:"noopener noreferrer",children:"Github"}),e("a",{href:"#",className:"info",children:"62011044"})]})]})}),e("div",{className:"column",children:t("figure",{className:"cardpro",children:[e("img",{src:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg",alt:"sample87"}),t("figcaption",{children:[e("img",{src:xe,alt:"profile-sample4",className:"profile"}),t("h2",{children:["PuddingBoi",e("span",{children:"Engineer | Front-end"})]}),t("p",{children:["I'm looking for something that can deliver a 50-pound payload of snow on a small feminine target. Can you suggest something? Hello...?"," "]}),e("a",{href:"https://github.com/Phukaoo08",className:"follow",target:"_blank",rel:"noopener noreferrer",children:"Github"}),e("a",{href:"#",className:"info",children:"62010684"})]})]})})]})]}),Le=()=>t(B,{sx:{bgcolor:"background.default"},children:[e(Ge,{}),e(De,{})]}),De=()=>t(oe,{children:[e(y,{path:"/bangkaew-frontend",element:e(Me,{})}),e(y,{path:"/bangkaew-frontend/search",element:e(Oe,{})}),e(y,{path:"/bangkaew-frontend/about",element:e(Re,{})}),e(y,{path:"*",element:e("main",{style:{padding:"1rem"},children:e("p",{children:"There's nothing here!"})})})]});function We(){return e(me,{children:e(je,{children:e(Le,{})})})}ie.render(e(ce.StrictMode,{children:e(le,{children:e(We,{})})}),document.getElementById("root"));
