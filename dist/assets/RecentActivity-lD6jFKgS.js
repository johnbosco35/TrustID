import{c as U,r as o,j as e,m as c,S as se,b as te,A as k,F as m}from"./index-CdVMF_5C.js";import{C}from"./clock-DQLuyGk7.js";import{D as A,S as O,U as z}from"./upload-BLScdFNb.js";import{F as ae}from"./filter-CTEZpMaC.js";import{R,T as Y}from"./triangle-alert-Bqin93SM.js";import{C as ie}from"./chevron-right-D1HrE_AE.js";import{I as p}from"./info-DWJCGwRA.js";import{S as N}from"./shield-D7n12fjp.js";import{C as f}from"./circle-check-big-CUAVvPlr.js";import{L as re}from"./lock-CAW4Y3NS.js";import{U as M}from"./user-BkJa6Ji7.js";import{S as P}from"./settings-BU64k8o8.js";import{E as ne}from"./eye-DbOEEPUX.js";import{L as le}from"./log-in-Dl9jxeP5.js";/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ce=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],u=U("Globe",ce);/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const de=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]],j=U("Smartphone",de);function ke(){const[h,v]=o.useState(""),[b,V]=o.useState(!1),[g,w]=o.useState("all"),[d,D]=o.useState("all"),[S,T]=o.useState(null),[B,I]=o.useState(!1),[$,E]=o.useState(""),[x,y]=o.useState({startDate:"",endDate:""}),[W]=o.useState([{id:1,type:"login",title:"Login successful",description:"You logged in from Chrome on macOS",timestamp:new Date(Date.now()-1e3*60*30).toISOString(),details:{device:"Chrome 122.0.6261.112 / macOS",location:"San Francisco, CA, USA",ipAddress:"192.168.1.1",status:"Successful"}},{id:2,type:"verification",title:"Passport verification completed",description:"Your passport was successfully verified",timestamp:new Date(Date.now()-1e3*60*60*2).toISOString(),details:{documentType:"Passport",documentNumber:"P12345678",verifiedBy:"TrustID Verification Service",status:"Verified"}},{id:3,type:"share",title:"Credential shared",description:"You shared your National ID with Government Services",timestamp:new Date(Date.now()-1e3*60*60*5).toISOString(),details:{documentType:"National ID",documentNumber:"ID87654321",sharedWith:"Government Services",expiresIn:"24 hours"}},{id:4,type:"upload",title:"Document uploaded",description:"You uploaded a Birth Certificate for verification",timestamp:new Date(Date.now()-1e3*60*60*24).toISOString(),details:{documentType:"Birth Certificate",documentNumber:"BC123456789",fileSize:"2.4 MB",status:"Pending verification"}},{id:5,type:"security",title:"Password changed",description:"You successfully changed your account password",timestamp:new Date(Date.now()-1e3*60*60*24*2).toISOString(),details:{device:"Firefox 115.0 / Windows",location:"San Francisco, CA, USA",ipAddress:"192.168.1.2",status:"Successful"}},{id:6,type:"verification",title:"Driver's License verification completed",description:"Your driver's license was successfully verified",timestamp:new Date(Date.now()-1e3*60*60*24*3).toISOString(),details:{documentType:"Driver's License",documentNumber:"DL987654321",verifiedBy:"DMV Verification Portal",status:"Verified"}},{id:7,type:"login",title:"Login successful",description:"You logged in from Safari on iOS",timestamp:new Date(Date.now()-1e3*60*60*24*4).toISOString(),details:{device:"Safari / iOS 17.3",location:"San Francisco, CA, USA",ipAddress:"192.168.1.3",status:"Successful"}},{id:8,type:"share",title:"Credential shared",description:"You shared your Driver's License with Car Rental Service",timestamp:new Date(Date.now()-1e3*60*60*24*5).toISOString(),details:{documentType:"Driver's License",documentNumber:"DL987654321",sharedWith:"Car Rental Service",expiresIn:"7 days"}},{id:9,type:"download",title:"Document downloaded",description:"You downloaded your verified Passport",timestamp:new Date(Date.now()-1e3*60*60*24*6).toISOString(),details:{documentType:"Passport",documentNumber:"P12345678",fileFormat:"PDF",fileSize:"1.2 MB"}},{id:10,type:"security",title:"Two-factor authentication enabled",description:"You enabled two-factor authentication for your account",timestamp:new Date(Date.now()-1e3*60*60*24*7).toISOString(),details:{method:"Authenticator app",device:"Chrome / Windows",location:"San Francisco, CA, USA",status:"Enabled"}},{id:11,type:"verification",title:"Social Security Card verification failed",description:"Your Social Security Card verification was rejected",timestamp:new Date(Date.now()-1e3*60*60*24*8).toISOString(),details:{documentType:"Social Security Card",documentNumber:"SSN-XXX-XX-1234",verifiedBy:"Identity Verification Service",status:"Rejected",reason:"Document image unclear"}},{id:12,type:"profile",title:"Profile updated",description:"You updated your profile information",timestamp:new Date(Date.now()-1e3*60*60*24*9).toISOString(),details:{changedFields:["Phone number","Address"],device:"Chrome / macOS",location:"San Francisco, CA, USA"}},{id:13,type:"login",title:"Login attempt failed",description:"Failed login attempt from unknown device",timestamp:new Date(Date.now()-1e3*60*60*24*10).toISOString(),details:{device:"Unknown / Android",location:"New York, NY, USA",ipAddress:"203.0.113.1",status:"Failed",reason:"Incorrect password"}},{id:14,type:"settings",title:"Notification settings updated",description:"You updated your notification preferences",timestamp:new Date(Date.now()-1e3*60*60*24*12).toISOString(),details:{changes:["Disabled email notifications","Enabled push notifications"],device:"Chrome / macOS",location:"San Francisco, CA, USA"}},{id:15,type:"view",title:"Document viewed",description:"You viewed your National ID details",timestamp:new Date(Date.now()-1e3*60*60*24*14).toISOString(),details:{documentType:"National ID",documentNumber:"ID87654321",device:"Chrome / macOS",location:"San Francisco, CA, USA"}}]),F=[...W.filter(t=>{const a=t.title.toLowerCase().includes(h.toLowerCase())||t.description.toLowerCase().includes(h.toLowerCase()),s=g==="all"||t.type===g,n=new Date(t.timestamp),l=new Date;let r=!0;if(d==="today"){const i=new Date;r=n.toDateString()===i.toDateString()}else if(d==="yesterday"){const i=new Date(l);i.setDate(i.getDate()-1),r=n.toDateString()===i.toDateString()}else if(d==="week"){const i=new Date(l);i.setDate(i.getDate()-7),r=n>=i}else if(d==="month"){const i=new Date(l);i.setMonth(i.getMonth()-1),r=n>=i}else if(d==="custom"&&x.startDate&&x.endDate){const i=new Date(x.startDate),L=new Date(x.endDate);L.setHours(23,59,59,999),r=n>=i&&n<=L}return a&&s&&r})].sort((t,a)=>new Date(a.timestamp).getTime()-new Date(t.timestamp).getTime()).reduce((t,a)=>{const s=new Date(a.timestamp),n=new Date,l=new Date(n);l.setDate(l.getDate()-1);let r;return s.toDateString()===n.toDateString()?r="Today":s.toDateString()===l.toDateString()?r="Yesterday":r=s.toLocaleDateString(void 0,{month:"long",day:"numeric",year:"numeric"}),t[r]||(t[r]=[]),t[r].push(a),t},{}),G=t=>{T(S===t?null:t)},X=t=>{E(t),I(!0),setTimeout(()=>I(!1),3e3)},_=t=>{const a=new Date,s=new Date(t),n=Math.floor((a.getTime()-s.getTime())/1e3);if(n<60)return"Just now";const l=Math.floor(n/60);if(l<60)return`${l} minute${l>1?"s":""} ago`;const r=Math.floor(l/60);if(r<24)return`${r} hour${r>1?"s":""} ago`;const i=Math.floor(r/24);return i<7?`${i} day${i>1?"s":""} ago`:s.toLocaleDateString()},H=(t,a=20)=>{switch(t){case"login":return e.jsx(le,{size:a,className:"text-blue-500"});case"verification":return e.jsx(f,{size:a,className:"text-green-500"});case"share":return e.jsx(O,{size:a,className:"text-purple-500"});case"upload":return e.jsx(z,{size:a,className:"text-orange-500"});case"download":return e.jsx(A,{size:a,className:"text-teal-500"});case"security":return e.jsx(N,{size:a,className:"text-red-500"});case"profile":return e.jsx(M,{size:a,className:"text-indigo-500"});case"settings":return e.jsx(P,{size:a,className:"text-gray-500"});case"view":return e.jsx(ne,{size:a,className:"text-cyan-500"});default:return e.jsx(m,{size:a,className:"text-gray-500"})}},Q=t=>{switch(t){case"login":return"bg-blue-500/10";case"verification":return"bg-green-500/10";case"share":return"bg-purple-500/10";case"upload":return"bg-orange-500/10";case"download":return"bg-teal-500/10";case"security":return"bg-red-500/10";case"profile":return"bg-indigo-500/10";case"settings":return"bg-gray-500/10";case"view":return"bg-cyan-500/10";default:return"bg-gray-500/10"}},J=t=>{switch(t){case"login":return"border-blue-500";case"verification":return"border-green-500";case"share":return"border-purple-500";case"upload":return"border-orange-500";case"download":return"border-teal-500";case"security":return"border-red-500";case"profile":return"border-indigo-500";case"settings":return"border-gray-500";case"view":return"border-cyan-500";default:return"border-gray-500"}},q={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.05}}},K={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{type:"spring",stiffness:100,damping:15}}},Z={hidden:{height:0,opacity:0},visible:{height:"auto",opacity:1,transition:{height:{type:"spring",stiffness:100,damping:20},opacity:{duration:.2}}},exit:{height:0,opacity:0,transition:{height:{type:"spring",stiffness:100,damping:20},opacity:{duration:.2}}}},ee={hidden:{opacity:0,y:50},visible:{opacity:1,y:0},exit:{opacity:0,y:50}};return e.jsxs("div",{className:"min-h-screen bg-[#1a1e2e] text-white p-6",children:[e.jsxs("div",{className:"max-w-4xl mx-auto",children:[e.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"bg-[#252a3d] p-2 rounded-lg",children:e.jsx(C,{className:"text-[#5e5ce6]",size:24})}),e.jsxs("div",{children:[e.jsx("h1",{className:"text-2xl font-bold",children:"Recent Activity"}),e.jsx("p",{className:"text-gray-400",children:"Track all actions and events related to your identity"})]})]}),e.jsx("div",{className:"flex items-center gap-3",children:e.jsxs(c.button,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:()=>X("Activity log exported successfully"),className:"bg-[#3a4055] hover:bg-[#4a5065] text-white px-3 py-1.5 rounded-md text-sm flex items-center gap-1.5",children:[e.jsx(A,{size:14}),e.jsx("span",{children:"Export Log"})]})})]}),e.jsx("div",{className:"bg-[#252a3d] rounded-lg p-4 mb-6",children:e.jsxs("div",{className:"flex flex-col md:flex-row gap-4",children:[e.jsxs("div",{className:"relative flex-1",children:[e.jsx(se,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400",size:18}),e.jsx("input",{type:"text",placeholder:"Search activities...",value:h,onChange:t=>v(t.target.value),className:"w-full bg-[#1a1e2e] text-white rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-1 focus:ring-[#5e5ce6]"})]}),e.jsxs("div",{className:"relative",children:[e.jsxs("button",{onClick:()=>V(!b),className:"bg-[#1a1e2e] text-white px-4 py-2 rounded-md flex items-center gap-2",children:[e.jsx(ae,{size:18}),e.jsx("span",{children:"Filter"}),e.jsx(te,{size:16,className:`transition-transform ${b?"rotate-180":""}`})]}),e.jsx(k,{children:b&&e.jsxs(c.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:10},className:"absolute right-0 mt-2 w-72 bg-[#252a3d] rounded-md shadow-lg z-10 p-4",children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-sm font-medium text-gray-300 mb-2",children:"Activity Type"}),e.jsxs(c.select,{value:g,onChange:t=>w(t.target.value),className:"w-full bg-[#1a1e2e] text-white rounded-md py-2 px-3 focus:outline-none focus:ring-1 focus:ring-[#5e5ce6]",children:[e.jsx("option",{value:"all",children:"All Activities"}),e.jsx("option",{value:"login",children:"Logins"}),e.jsx("option",{value:"verification",children:"Verifications"}),e.jsx("option",{value:"share",children:"Sharing"}),e.jsx("option",{value:"upload",children:"Uploads"}),e.jsx("option",{value:"download",children:"Downloads"}),e.jsx("option",{value:"security",children:"Security"}),e.jsx("option",{value:"profile",children:"Profile Changes"}),e.jsx("option",{value:"settings",children:"Settings Changes"}),e.jsx("option",{value:"view",children:"Document Views"})]})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-sm font-medium text-gray-300 mb-2",children:"Date Range"}),e.jsxs(c.select,{value:d,onChange:t=>D(t.target.value),className:"w-full bg-[#1a1e2e] text-white rounded-md py-2 px-3 focus:outline-none focus:ring-1 focus:ring-[#5e5ce6]",children:[e.jsx("option",{value:"all",children:"All Time"}),e.jsx("option",{value:"today",children:"Today"}),e.jsx("option",{value:"yesterday",children:"Yesterday"}),e.jsx("option",{value:"week",children:"Last 7 Days"}),e.jsx("option",{value:"month",children:"Last 30 Days"}),e.jsx("option",{value:"custom",children:"Custom Range"})]})]}),d==="custom"&&e.jsxs("div",{className:"space-y-3 mb-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-300 mb-2",children:"Start Date"}),e.jsx(c.input,{type:"date",value:x.startDate,onChange:t=>y({...x,startDate:t.target.value}),className:"w-full bg-[#1a1e2e] text-white rounded-md py-2 px-3 focus:outline-none focus:ring-1 focus:ring-[#5e5ce6]"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-300 mb-2",children:"End Date"}),e.jsx(c.input,{type:"date",value:x.endDate,onChange:t=>y({...x,endDate:t.target.value}),className:"w-full bg-[#1a1e2e] text-white rounded-md py-2 px-3 focus:outline-none focus:ring-1 focus:ring-[#5e5ce6]"})]})]}),e.jsxs("button",{onClick:()=>{v(""),w("all"),D("all"),y({startDate:"",endDate:""})},className:"w-full bg-[#3a4055] hover:bg-[#4a5065] text-white px-3 py-1.5 rounded-md text-sm flex items-center justify-center gap-1.5",children:[e.jsx(R,{size:14}),e.jsx("span",{children:"Reset Filters"})]})]})})]})]})}),Object.keys(F).length>0?e.jsx(c.div,{variants:q,initial:"hidden",animate:"visible",className:"space-y-6",children:Object.entries(F).map(([t,a])=>e.jsxs("div",{children:[e.jsx("h2",{className:"text-lg font-medium text-gray-300 mb-3",children:t}),e.jsx("div",{className:"space-y-3",children:a.map(s=>{var n;return e.jsxs(c.div,{variants:K,className:`rounded-lg overflow-hidden border-l-4 ${J(s.type)}`,children:[e.jsxs("div",{className:"bg-[#252a3d] p-4 flex items-start gap-4 cursor-pointer",onClick:()=>G(s.id),children:[e.jsx("div",{className:`p-2 rounded-lg ${Q(s.type)}`,children:H(s.type)}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsxs("div",{className:"flex items-start justify-between gap-2",children:[e.jsx("h3",{className:"font-medium text-white",children:s.title}),e.jsxs("div",{className:"flex items-center gap-2 shrink-0",children:[e.jsx("span",{className:"text-gray-400 text-xs whitespace-nowrap",children:_(s.timestamp)}),e.jsx(ie,{size:16,className:`text-gray-400 transition-transform ${S===s.id?"rotate-90":""}`})]})]}),e.jsx("p",{className:"text-sm mt-1 text-gray-300",children:s.description})]})]}),e.jsx(k,{children:S===s.id&&e.jsx(c.div,{variants:Z,initial:"hidden",animate:"visible",exit:"exit",className:"border-t border-[#3a4055] overflow-hidden",children:e.jsxs("div",{className:"p-4 bg-[#1f2436]",children:[e.jsx("h4",{className:"font-medium mb-3 text-gray-200",children:"Activity Details"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3",children:[s.type==="login"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx(j,{size:16,className:"text-gray-400 mt-0.5"}),e.jsxs("div",{children:[e.jsx("span",{className:"block text-xs text-gray-400",children:"Device"}),e.jsx("span",{className:"text-sm text-gray-200",children:s.details.device})]})]}),e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx(u,{size:16,className:"text-gray-400 mt-0.5"}),e.jsxs("div",{children:[e.jsx("span",{className:"block text-xs text-gray-400",children:"Location"}),e.jsx("span",{className:"text-sm text-gray-200",children:s.details.location})]})]}),e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx(p,{size:16,className:"text-gray-400 mt-0.5"}),e.jsxs("div",{children:[e.jsx("span",{className:"block text-xs text-gray-400",children:"IP Address"}),e.jsx("span",{className:"text-sm text-gray-200",children:s.details.ipAddress})]})]}),e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx(N,{size:16,className:"text-gray-400 mt-0.5"}),e.jsxs("div",{children:[e.jsx("span",{className:"block text-xs text-gray-400",children:"Status"}),e.jsx("span",{className:`text-sm ${s.details.status==="Successful"?"text-green-400":"text-red-400"}`,children:s.details.status})]})]}),s.details.reason&&e.jsxs("div",{className:"flex items-start gap-2 col-span-2",children:[e.jsx(Y,{size:16,className:"text-yellow-400 mt-0.5"}),e.jsxs("div",{children:[e.jsx("span",{className:"block text-xs text-gray-400",children:"Reason"}),e.jsx("span",{className:"text-sm text-red-400",children:s.details.reason})]})]})]}),s.type==="verification"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx(m,{size:16,className:"text-gray-400 mt-0.5"}),e.jsxs("div",{children:[e.jsx("span",{className:"block text-xs text-gray-400",children:"Document Type"}),e.jsx("span",{className:"text-sm text-gray-200",children:s.details.documentType})]})]}),e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx(p,{size:16,className:"text-gray-400 mt-0.5"}),e.jsxs("div",{children:[e.jsx("span",{className:"block text-xs text-gray-400",children:"Document Number"}),e.jsx("span",{className:"text-sm text-gray-200",children:s.details.documentNumber})]})]}),e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx(N,{size:16,className:"text-gray-400 mt-0.5"}),e.jsxs("div",{children:[e.jsx("span",{className:"block text-xs text-gray-400",children:"Verified By"}),e.jsx("span",{className:"text-sm text-gray-200",children:s.details.verifiedBy})]})]}),e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx(f,{size:16,className:"text-gray-400 mt-0.5"}),e.jsxs("div",{children:[e.jsx("span",{className:"block text-xs text-gray-400",children:"Status"}),e.jsx("span",{className:`text-sm ${s.details.status==="Verified"?"text-green-400":s.details.status==="Rejected"?"text-red-400":"text-yellow-400"}`,children:s.details.status})]})]}),s.details.reason&&e.jsxs("div",{className:"flex items-start gap-2 col-span-2",children:[e.jsx(Y,{size:16,className:"text-yellow-400 mt-0.5"}),e.jsxs("div",{children:[e.jsx("span",{className:"block text-xs text-gray-400",children:"Reason"}),e.jsx("span",{className:"text-sm text-red-400",children:s.details.reason})]})]})]}),s.type==="share"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx(m,{size:16,className:"text-gray-400 mt-0.5"}),e.jsxs("div",{children:[e.jsx("span",{className:"block text-xs text-gray-400",children:"Document Type"}),e.jsx("span",{className:"text-sm text-gray-200",children:s.details.documentType})]})]}),e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx(p,{size:16,className:"text-gray-400 mt-0.5"}),e.jsxs("div",{children:[e.jsx("span",{className:"block text-xs text-gray-400",children:"Document Number"}),e.jsx("span",{className:"text-sm text-gray-200",children:s.details.documentNumber})]})]}),e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx(O,{size:16,className:"text-gray-400 mt-0.5"}),e.jsxs("div",{children:[e.jsx("span",{className:"block text-xs text-gray-400",children:"Shared With"}),e.jsx("span",{className:"text-sm text-gray-200",children:s.details.sharedWith})]})]}),e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx(C,{size:16,className:"text-gray-400 mt-0.5"}),e.jsxs("div",{children:[e.jsx("span",{className:"block text-xs text-gray-400",children:"Expires In"}),e.jsx("span",{className:"text-sm text-gray-200",children:s.details.expiresIn})]})]})]}),s.type==="upload"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx(m,{size:16,className:"text-gray-400 mt-0.5"}),e.jsxs("div",{children:[e.jsx("span",{className:"block text-xs text-gray-400",children:"Document Type"}),e.jsx("span",{className:"text-sm text-gray-200",children:s.details.documentType})]})]}),e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx(p,{size:16,className:"text-gray-400 mt-0.5"}),e.jsxs("div",{children:[e.jsx("span",{className:"block text-xs text-gray-400",children:"Document Number"}),e.jsx("span",{className:"text-sm text-gray-200",children:s.details.documentNumber})]})]}),e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx(z,{size:16,className:"text-gray-400 mt-0.5"}),e.jsxs("div",{children:[e.jsx("span",{className:"block text-xs text-gray-400",children:"File Size"}),e.jsx("span",{className:"text-sm text-gray-200",children:s.details.fileSize})]})]}),e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx(f,{size:16,className:"text-gray-400 mt-0.5"}),e.jsxs("div",{children:[e.jsx("span",{className:"block text-xs text-gray-400",children:"Status"}),e.jsx("span",{className:"text-sm text-yellow-400",children:s.details.status})]})]})]}),s.type==="download"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx(m,{size:16,className:"text-gray-400 mt-0.5"}),e.jsxs("div",{children:[e.jsx("span",{className:"block text-xs text-gray-400",children:"Document Type"}),e.jsx("span",{className:"text-sm text-gray-200",children:s.details.documentType})]})]}),e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx(p,{size:16,className:"text-gray-400 mt-0.5"}),e.jsxs("div",{children:[e.jsx("span",{className:"block text-xs text-gray-400",children:"Document Number"}),e.jsx("span",{className:"text-sm text-gray-200",children:s.details.documentNumber})]})]}),e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx(A,{size:16,className:"text-gray-400 mt-0.5"}),e.jsxs("div",{children:[e.jsx("span",{className:"block text-xs text-gray-400",children:"File Format"}),e.jsx("span",{className:"text-sm text-gray-200",children:s.details.fileFormat})]})]}),e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx(z,{size:16,className:"text-gray-400 mt-0.5"}),e.jsxs("div",{children:[e.jsx("span",{className:"block text-xs text-gray-400",children:"File Size"}),e.jsx("span",{className:"text-sm text-gray-200",children:s.details.fileSize})]})]})]}),s.type==="security"&&e.jsxs(e.Fragment,{children:[s.details.method&&e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx(re,{size:16,className:"text-gray-400 mt-0.5"}),e.jsxs("div",{children:[e.jsx("span",{className:"block text-xs text-gray-400",children:"Method"}),e.jsx("span",{className:"text-sm text-gray-200",children:s.details.method})]})]}),e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx(j,{size:16,className:"text-gray-400 mt-0.5"}),e.jsxs("div",{children:[e.jsx("span",{className:"block text-xs text-gray-400",children:"Device"}),e.jsx("span",{className:"text-sm text-gray-200",children:s.details.device})]})]}),e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx(u,{size:16,className:"text-gray-400 mt-0.5"}),e.jsxs("div",{children:[e.jsx("span",{className:"block text-xs text-gray-400",children:"Location"}),e.jsx("span",{className:"text-sm text-gray-200",children:s.details.location})]})]}),e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx(N,{size:16,className:"text-gray-400 mt-0.5"}),e.jsxs("div",{children:[e.jsx("span",{className:"block text-xs text-gray-400",children:"Status"}),e.jsx("span",{className:"text-sm text-green-400",children:s.details.status})]})]})]}),s.type==="profile"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex items-start gap-2 col-span-2",children:[e.jsx(M,{size:16,className:"text-gray-400 mt-0.5"}),e.jsxs("div",{children:[e.jsx("span",{className:"block text-xs text-gray-400",children:"Changed Fields"}),e.jsx("span",{className:"text-sm text-gray-200",children:(s.details.changedFields??[]).join(", ")})]})]}),e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx(j,{size:16,className:"text-gray-400 mt-0.5"}),e.jsxs("div",{children:[e.jsx("span",{className:"block text-xs text-gray-400",children:"Device"}),e.jsx("span",{className:"text-sm text-gray-200",children:s.details.device})]})]}),e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx(u,{size:16,className:"text-gray-400 mt-0.5"}),e.jsxs("div",{children:[e.jsx("span",{className:"block text-xs text-gray-400",children:"Location"}),e.jsx("span",{className:"text-sm text-gray-200",children:s.details.location})]})]})]}),s.type==="settings"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex items-start gap-2 col-span-2",children:[e.jsx(P,{size:16,className:"text-gray-400 mt-0.5"}),e.jsxs("div",{children:[e.jsx("span",{className:"block text-xs text-gray-400",children:"Changes"}),e.jsx("span",{className:"text-sm text-gray-200",children:((n=s.details.changes)==null?void 0:n.join(", "))||"No changes available"})]})]}),e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx(j,{size:16,className:"text-gray-400 mt-0.5"}),e.jsxs("div",{children:[e.jsx("span",{className:"block text-xs text-gray-400",children:"Device"}),e.jsx("span",{className:"text-sm text-gray-200",children:s.details.device})]})]}),e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx(u,{size:16,className:"text-gray-400 mt-0.5"}),e.jsxs("div",{children:[e.jsx("span",{className:"block text-xs text-gray-400",children:"Location"}),e.jsx("span",{className:"text-sm text-gray-200",children:s.details.location})]})]})]}),s.type==="view"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx(m,{size:16,className:"text-gray-400 mt-0.5"}),e.jsxs("div",{children:[e.jsx("span",{className:"block text-xs text-gray-400",children:"Document Type"}),e.jsx("span",{className:"text-sm text-gray-200",children:s.details.documentType})]})]}),e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx(p,{size:16,className:"text-gray-400 mt-0.5"}),e.jsxs("div",{children:[e.jsx("span",{className:"block text-xs text-gray-400",children:"Document Number"}),e.jsx("span",{className:"text-sm text-gray-200",children:s.details.documentNumber})]})]}),e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx(j,{size:16,className:"text-gray-400 mt-0.5"}),e.jsxs("div",{children:[e.jsx("span",{className:"block text-xs text-gray-400",children:"Device"}),e.jsx("span",{className:"text-sm text-gray-200",children:s.details.device})]})]}),e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx(u,{size:16,className:"text-gray-400 mt-0.5"}),e.jsxs("div",{children:[e.jsx("span",{className:"block text-xs text-gray-400",children:"Location"}),e.jsx("span",{className:"text-sm text-gray-200",children:s.details.location})]})]})]})]}),e.jsxs("div",{className:"mt-4 text-xs text-gray-400",children:["Activity ID: ",s.id," •"," ",new Date(s.timestamp).toLocaleString()]})]})})})]},s.id)})})]},t))}):e.jsxs("div",{className:"bg-[#252a3d] rounded-lg p-8 text-center",children:[e.jsx("div",{className:"flex justify-center mb-4",children:e.jsx(C,{className:"text-gray-400",size:48})}),e.jsx("h3",{className:"text-xl font-medium mb-2",children:"No activities found"}),e.jsx("p",{className:"text-gray-400 mb-6",children:h||g!=="all"||d!=="all"?"Try adjusting your search or filters":"No recent activities to display"}),(h||g!=="all"||d!=="all")&&e.jsxs("button",{onClick:()=>{v(""),w("all"),D("all"),y({startDate:"",endDate:""})},className:"bg-[#3a4055] hover:bg-[#4a5065] text-white px-4 py-2 rounded-md inline-flex items-center gap-2",children:[e.jsx(R,{size:16}),e.jsx("span",{children:"Reset Filters"})]})]})]}),e.jsx(k,{children:B&&e.jsxs(c.div,{className:"fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-md flex items-center shadow-lg",variants:ee,initial:"hidden",animate:"visible",exit:"exit",children:[e.jsx(f,{size:16,className:"mr-2"}),$]})})]})}export{ke as default};
