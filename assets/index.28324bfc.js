var L=Object.defineProperty,R=Object.defineProperties;var D=Object.getOwnPropertyDescriptors;var C=Object.getOwnPropertySymbols;var W=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var w=(o,r,a)=>r in o?L(o,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[r]=a,B=(o,r)=>{for(var a in r||(r={}))W.call(r,a)&&w(o,a,r[a]);if(C)for(var a of C(r))z.call(r,a)&&w(o,a,r[a]);return o},S=(o,r)=>R(o,D(r));var P=(o,r,a)=>(w(o,typeof r!="symbol"?r+"":r,a),a);import{j as t,C as K,a as e,b as H,S as b,T as h,B as u,c as f,d as U,e as $,r as l,f as J,g as q,h as Y,A as Q,i as X,L as I,k as j,l as F,m as Z,I as E,n as V,o as ee,p as te,q as re,s as ne,P as N,F as ae,t as oe,u as se,R as ie,v as y,w as ce,x as le,y as de}from"./vendor.77a46fa0.js";const he=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function a(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerpolicy&&(n.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?n.credentials="include":i.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(i){if(i.ep)return;i.ep=!0;const n=a(i);fetch(i.href,n)}};he();const me=({imageUrl:o,currentPrice:r,percentChange:a,highestPrice:s,lowestPrice:i,volume:n,rateStatus:d})=>t(K,{sx:{display:"flex",alignItems:"center",justifyContent:"center",flexGrow:1,maxWidth:.4,width:.4,border:2,borderRadius:3,margin:2,boxShadow:2},children:[e(H,{component:"img",alt:"coin name",image:o,sx:{height:"auto",width:.2,margin:2}}),t(b,{direction:"row",gap:6,sx:{mx:4},children:[t(h,{variant:"h5",component:"div",sx:{display:"flex",alignItems:"center"},children:[r,"$"]}),d?t(b,{sx:{justifyContent:"center"},children:[e(u,{sx:{display:"flex",justifyContent:"center"},children:e(f,{sx:{color:"#21BF73"},component:U})}),t(h,{variant:"h5",component:"div",color:"#21BF73",sx:{display:"flex",textAlign:"center",mb:3,color:"#21BF73"},children:[a,"%"]})]}):t(b,{sx:{justifyContent:"center"},children:[t(h,{variant:"h5",component:"div",sx:{display:"flex",textAlign:"center",mt:3,color:"#FA4659"},children:[a,"%"]}),e(u,{sx:{display:"flex",justifyContent:"center"},children:e(f,{sx:{color:"#FA4659"},component:$})})]}),t(b,{sx:{width:100,justifyContent:"center",alignItems:"center"},children:[t(h,{variant:"h5",component:"div",sx:{display:"flex",alignItems:"center",my:.5},children:[s,"$"]}),e(u,{sx:{border:1,width:100}}),t(h,{variant:"h5",component:"div",sx:{display:"flex",alignItems:"center",my:.5},children:[i,"$"]})]}),t(h,{variant:"h5",component:"div",sx:{display:"flex",alignItems:"center",my:.5},children:[n,"$"]})]})]}),_=l.exports.createContext({toggleColorMode:()=>{}}),pe=({children:o})=>{const[r,a]=l.exports.useState("light"),s=l.exports.useMemo(()=>({toggleColorMode:()=>{a(n=>n==="light"?"dark":"light"),console.log("toggle Color Mode to"+{mode:r})}}),[]),i=l.exports.useMemo(()=>J({palette:{mode:r}}),[r]);return e(_.Provider,{value:s,children:e(q,{theme:i,children:o})})};var A=Y.create({baseURL:"https://bangkaew.surawit.studio/api",withCredentials:!0,headers:{"Content-type":"application/json"}});class ge{suggest(){return A.get("/currency-name")}currency(r){return A.get(`/currency/${r}`)}}var k=new ge,ue="/bangkaew-frontend/assets/Binance.c8ec5bf5.png",fe="/bangkaew-frontend/assets/Gateio.7b3997cd.png",be="/bangkaew-frontend/assets/Kucoin.82549e0f.png",ye="/bangkaew-frontend/assets/BitMart.4ae75bbe.png",xe="/bangkaew-frontend/assets/Phukao.02c2d3be.png",ve="/bangkaew-frontend/assets/Apextone.1c6ce8b2.png",we="/bangkaew-frontend/assets/Phoom_mrt.23dd4335.png",ke="/bangkaew-frontend/assets/Tree.eb310bf1.png",Ne="/bangkaew-frontend/assets/James.884c4f9d.png",Ce="/bangkaew-frontend/assets/GraphBG1.ec3403c1.jpg",Be="/bangkaew-frontend/assets/GraphBG2.b15e587d.png",Se="/bangkaew-frontend/assets/bitcoinAna.699e847e.jpg",Pe="/bangkaew-frontend/assets/bitcoinTrophy.7453c824.jpg",G="/bangkaew-frontend/assets/BangkaewLogo.ffb11951.svg";class x{constructor(r){P(this,"data");this.data=r}}class Ie extends x{getFormattedData(){try{let{price:r,change:a,high_low:s,volume:i}=this.data;const n=Object.keys(r)[0];return n===null?null:{currentPrice:r[n].split(" ")[1].slice(1),percentChange:a[n].slice(1,a[n].length-1),rateStatus:a[n][0]==="+",imageUrl:ue,highestPrice:s[n].split("/")[0].replace(/\s/g,""),lowestPrice:s[n].split("/")[1].replace(/\s/g,""),volume:i[n]}}catch{return null}}}class Fe extends x{getFormattedData(){try{let{price:r,change:a,high_low:s,volume:i}=this.data;const n=Object.keys(r)[0];return n===null?null:{currentPrice:r[n].split(" ")[1],percentChange:a[n].slice(a[n][0]==="-"?1:0,a[n].length-2),rateStatus:a[n][0]!=="-",imageUrl:ye,highestPrice:s[n].split("/")[0],lowestPrice:s[n].split("/")[1],volume:i[n].split(" ")[0]}}catch{return null}}}class Ae extends x{getFormattedData(){try{let{price:r,change:a,high_low:s,volume:i}=this.data;const n=Object.keys(r)[0];return n===null?null:{currentPrice:r[n],percentChange:a[n].slice(1,a[n].length-2),rateStatus:a[n][0]==="+",imageUrl:fe,highestPrice:s[n].split("/")[0],lowestPrice:s[n].split("/")[1],volume:i[n]}}catch{return null}}}class je extends x{getFormattedData(){try{let{price:r,change:a,high_low:s,volume:i}=this.data;const n=Object.keys(r)[0];return n===null?null:{currentPrice:r[n],percentChange:a[n].slice(1,a[n].length-1),rateStatus:a[n][0]==="+",imageUrl:be,highestPrice:"-",lowestPrice:"-",volume:i[n]}}catch{return null}}}const v=l.exports.createContext(null),Ee=[{name:"Binance",isSelect:!0,data:null},{name:"Gateio",isSelect:!0,data:null},{name:"Kucoin",isSelect:!0,data:null},{name:"BitMart",isSelect:!0,data:null}],_e=({children:o})=>{const[r,a]=l.exports.useState(Ee),[s,i]=l.exports.useState([]),n=g=>{k.currency(g).then(m=>{const c=r,p=new Ie(m.data.bn);c[0].data=p.getFormattedData();const T=new Fe(m.data.bm);c[3].data=T.getFormattedData();const O=new Ae(m.data.g);c[1].data=O.getFormattedData();const M=new je(m.data.kc);c[2].data=M.getFormattedData(),a([...c])})},d=(g,m)=>{r.filter(c=>{c.name===g&&(c.isSelect=!c.isSelect),a([...r])}),console.log(...r)};return e(v.Provider,{value:{exchanges:r,toggleSelect:d,data:s,fetchPrice:n},children:o})},Ge=({})=>{const o=[{page:"Home",route:"/bangkaew-frontend"},{page:"Explore Price",route:"/bangkaew-frontend/search"},{page:"About",route:"/bangkaew-frontend/about"}],[r,a]=l.exports.useState(!1),s=l.exports.useContext(_),i=()=>{a(!r),s.toggleColorMode()};return e(Q,{sx:{position:"sticky",mb:0},children:t(X,{sx:{},children:[t(I,{to:"/bangkaew-frontend",className:"grow flex flex-row items-center",children:[e(j,{sx:{mr:2,height:55,width:55},src:G}),e(h,{sx:{color:"white",flexGrow:1},variant:"h6",children:"Bangkaew"})]}),t(F,{sx:{display:"flex"},children:[o.map(({page:n,route:d})=>e(F,{sx:{color:"white",display:"flex",borderRightStyle:"solid",justifyContent:"center",maxwidth:200,px:3},children:e(I,{to:d,style:{textDecoration:"none",display:"flex",alignContent:"center"},children:e(Z,{sx:{color:"white",fontSize:13,maxHeight:40,maxwidth:200,whiteSpace:"nowrap"},children:n},n)})},n)),e(E,{onClick:i,sx:{ml:3},children:r?e(f,{component:V,sx:{color:"#F0B90B"}}):e(f,{component:ee,sx:{color:"#F0B90B"}})})]})]})})},Te=({})=>{const[o,r]=l.exports.useState(""),[a,s]=l.exports.useState([]),{fetchPrice:i}=l.exports.useContext(v);l.exports.useEffect(()=>{m()},[]);const n=c=>{r(c)},d=c=>{console.log(c.target.value),c.key==="Enter"&&k.currency(o).then(p=>{console.log(p.data.bn)})},g=c=>{i(o),setInterval(()=>{a.filter(p=>p.toLowerCase()==o.toLowerCase()).length>0&&(console.log("fetching"),i(o))},12e3)},m=()=>{k.suggest().then(c=>{s(c.data.result)})};return t(u,{sx:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[e(h,{sx:{py:2,fontSize:50,fontWeight:"bold"},children:"Cryptocurrency Symbol"}),t(u,{sx:{display:"flex",alignContent:"center",justifyContent:"center"},children:[e(te,{sx:{width:900,display:"inline-block"},id:"currency-search",freeSolo:!0,options:a,onInputChange:(c,p)=>{n(p)},renderInput:c=>e(re,S(B({},c),{label:"Search Cryptocurrency",value:o,onKeyDown:d}))}),e(E,{onClick:g,sx:{borderStyle:"solid",borderBlockColor:"black",display:"inline-block"},children:e(f,{component:ne,sx:{width:50,height:40}})})]})]})},Oe=({})=>{const{exchanges:o,toggleSelect:r}=l.exports.useContext(v),a=s=>{r(s.target.value,s.target.checked),console.log(s.target.name+s.target.checked)};return t(N,{sx:{m:2,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:"#2EB872",borderRadius:3,py:5,width:.9},children:[e(h,{sx:{textAlign:"center",fontSize:50},children:"Exchange Websites"}),e(ae,{sx:{display:"flex",flexWrap:"wrap",justifyContent:"center",width:.7,flexDirection:"row"},children:o.map(s=>e(oe,{control:e(se,{onChange:a,checked:s.isSelect}),label:s.name,value:s.name,className:"border-2",sx:{flexGrow:1,maxWidth:.21,width:.21,maxHeight:40,m:2,backgroundColor:"#F1F1F1",borderRadius:2}},s.name))})]})};const Me=({})=>t("div",{children:[t("div",{className:"headZone",children:[t("div",{className:"context",children:[e("p",{className:"BK",children:"BANGKAEW"}),e("p",{className:"bkQuote",children:"We are bangkaew, We make crypto EASY for you."})]}),e("div",{className:"contain",children:t("div",{className:"wrapper",children:[e("img",{src:Be}),e("img",{src:Se}),e("img",{src:Pe}),e("img",{src:Ce})]})})]}),t("div",{className:"boxArea",children:[t("div",{className:"spinner-box",children:[e("div",{className:"configBorder1",children:e("div",{className:"configCore"})}),e("div",{className:"configBorder2",children:e("div",{className:"configCore"})})]}),e("p",{className:"BangkaewText",children:"Welcome to bangkaew"}),t("div",{className:"spinner-box",children:[e("div",{className:"configBorder1",children:e("div",{className:"configCore"})}),e("div",{className:"configBorder2",children:e("div",{className:"configCore"})})]})]}),t("div",{className:"gitArea",children:[t("div",{className:"Boxcard",children:[e("div",{className:"left1"}),e("div",{className:"right",children:t("div",{className:"words",children:[e("h1",{children:"What is 'cryptocurrency' ?"}),e("p",{children:"A cryptocurrency is a digital or virtual currency that is secured by cryptography, which makes it nearly impossible to counterfeit or double-spend. Many cryptocurrencies are decentralized networks based on blockchain technology.A distributed ledger enforced by a disparate network of computers. A defining feature of cryptocurrencies is that they are generally not issued by any central authority, rendering them theoretically immune to government interference or manipulation."}),e("a",{href:"https://www.investopedia.com/terms/c/cryptocurrency.asp",className:"btn",target:"_blank",rel:"noopener noreferrer",children:"Read more"})]})})]}),t("div",{className:"Boxcard",children:[e("div",{className:"left2"}),e("div",{className:"right",children:t("div",{className:"words",children:[e("h1",{children:"Why are we trading ?"}),e("p",{children:"Cryptocurrency traders often have one of two goals: to accumulate Bitcoin or make a profit in USD. In a crypto bull market, it\u2019s pretty easy for your portfolio to increase in USD value, but it\u2019s more challenging for Bitcoin value to increase. To track your portfolio\u2019s Bitcoin value, you can trade altcoins against Bitcoin on exchanges like Coinbase Pro. By actively trading your cryptocurrency, you risk losing your crypto to the market. Since cryptocurrency prices are so volatile, it\u2019s not uncommon for traders to lose money quickly trading cryptocurrencies. This is why so many crypto enthusiasts just HODL their Bitcoin."}),e("a",{href:"https://www.benzinga.com/how-to-trade-cryptocurrency",className:"btn",target:"_blank",rel:"noopener noreferrer",children:"Read more"})]})})]})]}),t("div",{className:"footer",children:[e("div",{className:"btnFont",children:e("a",{href:"https://github.com/TOC-WebScrape/bangkaew-frontend",target:"_blank",rel:"noopener noreferrer",children:e("span",{children:"Frontend Github"})})}),t("div",{className:"footerContent",children:[e("h3",{children:"BANGKAEW GITHUB"}),e("p",{children:"In this TOC's subject project.We are doing 'web scrapping' and we divided into 2 team. Frontend and Backend. You can visit our github's project instead. Enjoy."})]}),e("div",{className:"btnBack",children:e("a",{href:"https://github.com/TOC-WebScrape/bangkaew-backend",target:"_blank",rel:"noopener noreferrer",children:e("span",{children:"Backend Github"})})})]})]}),Le=({})=>{const{exchanges:o}=l.exports.useContext(v);return t("div",{className:"flex flex-col items-center",children:[e(Te,{}),e(Oe,{}),e(N,{className:"flex flex-wrap justify-center",children:o.map(({data:r,isSelect:a},s)=>{if(r&&a)return e(me,{currentPrice:r.currentPrice,highestPrice:r.highestPrice,imageUrl:r.imageUrl,lowestPrice:r.lowestPrice,percentChange:r.percentChange,volume:r.volume,rateStatus:r.rateStatus},s)})})]})};const Re=({})=>t("div",{children:[t("div",{className:"headBox",children:[e("div",{className:"mainBox"}),t("div",{className:"sideBox",children:[e(j,{style:{display:"flex",justifyContent:"center",alignItems:"center",position:"relative"},sx:{mb:5,height:150,width:150},src:G}),t("div",{className:"content",children:[e("h6",{children:"BANGKAEW"}),t("p",{children:["We are providing cryptocurrency exchange ",e("br",{})," comparison across many website on market."]})]})]})]}),t("div",{className:"boxArea",children:[e("p",{className:"BangkaewText",children:"BANGKAEW"}),t("div",{className:"spinner-box",children:[e("div",{className:"configBorder1",children:e("div",{className:"configCore"})}),e("div",{className:"configBorder2",children:e("div",{className:"configCore"})})]}),e("p",{className:"BangkaewText",children:"TEAM"})]}),t("div",{className:"row1",children:[e("div",{className:"column",children:t("figure",{className:"cardpro",children:[e("img",{src:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg",alt:"sample87"}),t("figcaption",{children:[e("img",{src:ve,alt:"profile-sample4",className:"profile"}),t("h2",{children:["Apextone",e("span",{children:"Engineer | Front-end"})]}),t("p",{children:[">be me",e("br",{}),">front-end developer",e("br",{}),">do this work in like 4 days",e("br",{}),">mfw it's done",e("br",{})]}),e("a",{href:"https://github.com/ApexTone",className:"follow",target:"_blank",rel:"noopener noreferrer",children:"Github"}),e("a",{href:"#",className:"info",children:"62010356"})]})]})}),e("div",{className:"column",children:t("figure",{className:"cardpro",children:[e("img",{src:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg",alt:"sample87"}),t("figcaption",{children:[e("img",{src:we,alt:"profile-sample4",className:"profile"}),t("h2",{children:["PhoomBeer",e("span",{children:"Engineer | Back-end"})]}),t("p",{children:["good artists copy. great artists steal. Greatest artist copy, then paste."," "]}),e("a",{href:"https://github.com/GoldF15h",className:"follow",target:"_blank",rel:"noopener noreferrer",children:"Github"}),e("a",{href:"#",className:"info",children:"62010318"})]})]})}),e("div",{className:"column",children:t("figure",{className:"cardpro",children:[e("img",{src:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg",alt:"sample87"}),t("figcaption",{children:[e("img",{src:"https://avatars.githubusercontent.com/u/63555111?v=4://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample4.jpg",alt:"profile-sample4",className:"profile"}),t("h2",{children:["BeanBean",e("span",{children:"Engineer | Front-end"})]}),t("p",{children:["I'm looking for something that can deliver a 50-pound payload of snow on a small feminine target. Can you suggest something? Hello...?"," "]}),e("a",{href:"https://github.com/teethat-lsk",className:"follow",target:"_blank",rel:"noopener noreferrer",children:"Github"}),e("a",{href:"#",className:"info",children:"62010434"})]})]})}),e("div",{className:"column",children:t("figure",{className:"cardpro",children:[e("img",{src:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg",alt:"sample87"}),t("figcaption",{children:[e("img",{src:"https://avatars.githubusercontent.com/u/50296761?v=4",alt:"profile-sample4",className:"profile"}),t("h2",{children:["PhoomPat",e("span",{children:"Engineer | Back-end"})]}),t("p",{children:["I'm looking for something that can deliver a 50-pound payload of snow on a small feminine target. Can you suggest something? Hello...?"," "]}),e("a",{href:"https://github.com/Poomipat-Ch",className:"follow",target:"_blank",rel:"noopener noreferrer",children:"Github"}),e("a",{href:"#",className:"info",children:"62010722"})]})]})})]}),t("div",{className:"row2",children:[e("div",{className:"column",children:t("figure",{className:"cardpro",children:[e("img",{src:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg",alt:"sample87"}),t("figcaption",{children:[e("img",{src:Ne,alt:"profile-sample4",className:"profile"}),t("h2",{children:["iJames",e("span",{children:"Engineer | Front-end | Back-end"})]}),t("p",{children:["Hello, I'm Jame.This is my blog. My favorite color is green. I like to watch tv-series and listen music. Now I'm interested in blockchain technology"," "]}),e("a",{href:"https://github.com/j4m3ee",className:"follow",target:"_blank",rel:"noopener noreferrer",children:"Github"}),e("a",{href:"#",className:"info",children:"62010986"})]})]})}),e("div",{className:"column",children:t("figure",{className:"cardpro",children:[e("img",{src:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg",alt:"sample87"}),t("figcaption",{children:[e("img",{src:ke,alt:"profile-sample4",className:"profile"}),t("h2",{children:["Treepakorn",e("span",{children:"Engineer | Front-end"})]}),t("p",{children:["I asked God for a M1 mini, but I know God doesn't work that way. So I stole a M1 mini and asked for forgiveness."," "]}),e("a",{href:"https://github.com/T-Pakorn",className:"follow",target:"_blank",rel:"noopener noreferrer",children:"Github"}),e("a",{href:"#",className:"info",children:"62010694"})]})]})}),e("div",{className:"column",children:t("figure",{className:"cardpro",children:[e("img",{src:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg",alt:"sample87"}),t("figcaption",{children:[e("img",{src:"https://avatars.githubusercontent.com/u/63220854?v=4",alt:"profile-sample4",className:"profile"}),t("h2",{children:["Mr.Boss",e("span",{children:"Engineer | Front-end"})]}),t("p",{children:["I'm looking for something that can deliver a 50-pound payload of snow on a small feminine target. Can you suggest something? Hello...?"," "]}),e("a",{href:"https://github.com/BXSS101",className:"follow",target:"_blank",rel:"noopener noreferrer",children:"Github"}),e("a",{href:"#",className:"info",children:"62011044"})]})]})}),e("div",{className:"column",children:t("figure",{className:"cardpro",children:[e("img",{src:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg",alt:"sample87"}),t("figcaption",{children:[e("img",{src:xe,alt:"profile-sample4",className:"profile"}),t("h2",{children:["PuddingBoi",e("span",{children:"Engineer | Front-end"})]}),t("p",{children:["I'm looking for something that can deliver a 50-pound payload of snow on a small feminine target. Can you suggest something? Hello...?"," "]}),e("a",{href:"https://github.com/Phukaoo08",className:"follow",target:"_blank",rel:"noopener noreferrer",children:"Github"}),e("a",{href:"#",className:"info",children:"62010684"})]})]})})]})]}),De=()=>t(N,{sx:{bgcolor:"background.default"},children:[e(Ge,{}),e(We,{})]}),We=()=>t(ie,{children:[e(y,{path:"/bangkaew-frontend",element:e(Me,{})}),e(y,{path:"/bangkaew-frontend/search",element:e(Le,{})}),e(y,{path:"/bangkaew-frontend/about",element:e(Re,{})}),e(y,{path:"*",element:e("main",{style:{padding:"1rem"},children:e("p",{children:"There's nothing here!"})})})]});function ze(){return e(pe,{children:e(_e,{children:e(De,{})})})}ce.render(e(le.StrictMode,{children:e(de,{children:e(ze,{})})}),document.getElementById("root"));
