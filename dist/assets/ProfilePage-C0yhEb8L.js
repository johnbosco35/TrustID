import{c as d,r as c,j as e,m as s,X as P,C as f,a as S,A as _}from"./index-CdVMF_5C.js";import{B as j}from"./bell-DKG7Lggu.js";import{U as v}from"./user-BkJa6Ji7.js";import{C as N}from"./chevron-right-D1HrE_AE.js";import{S as T}from"./settings-BU64k8o8.js";import{M as L}from"./mail-BmVIWbBx.js";import{P as H}from"./phone-0xj7qWiC.js";import{C as F}from"./clock-DQLuyGk7.js";/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],I=d("Camera",B);/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]],O=d("LogOut",q);/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],U=d("MapPin",R);/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]],w=d("Moon",V);/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]],J=d("SquarePen",Y);/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],$=d("Sun",Q);function ae(){const[t,k]=c.useState(!0),[o,m]=c.useState(!1),[E,h]=c.useState(!1),[D,C]=c.useState(""),[i,b]=c.useState({name:"Alex Johnson",email:"alex.johnson@example.com",phone:"+1 (555) 123-4567",location:"San Francisco, CA",birthdate:"April 15, 1988",bio:"Digital identity specialist with 8+ years of experience in blockchain and decentralized systems.",joinDate:"Member since January 2022",role:"Administrator",notificationsEnabled:!0}),[r,n]=c.useState({...i}),A=()=>{b(r),m(!1),x("Profile updated successfully")},x=a=>{C(a),h(!0),setTimeout(()=>h(!1),3e3)},g=()=>{const a={...i,notificationsEnabled:!i.notificationsEnabled};b(a),n(a),x(i.notificationsEnabled?"Notifications disabled":"Notifications enabled")},u=()=>{k(!t),x(t?"Light mode enabled":"Dark mode enabled")},M={hidden:{opacity:0},visible:{opacity:1,transition:{duration:.4}}},l={hidden:{y:20,opacity:0},visible:{y:0,opacity:1,transition:{type:"spring",stiffness:300,damping:24}}},y={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.08}}},z={hidden:{opacity:0,y:50},visible:{opacity:1,y:0},exit:{opacity:0,y:50}};return e.jsxs("div",{className:`min-h-screen ${t?"bg-[#121420]":"bg-gray-100"} transition-colors duration-300`,children:[e.jsx("header",{className:`${t?"bg-[#1D1E2C]":"bg-white"} transition-colors duration-300 shadow-md`,children:e.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"flex justify-between items-center py-4",children:[e.jsx("h1",{className:`text-xl font-bold ${t?"text-white":"text-gray-900"}`,children:"My Profile"}),e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsx(s.button,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:u,className:`p-2 rounded-full ${t?"bg-[#2D2E3A] text-yellow-400":"bg-gray-200 text-gray-700"}`,children:t?e.jsx($,{size:20}):e.jsx(w,{size:20})}),e.jsx(s.button,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:g,className:`p-2 rounded-full ${t?"bg-[#2D2E3A]":"bg-gray-200"} ${i.notificationsEnabled?t?"text-blue-400":"text-blue-600":t?"text-gray-500":"text-gray-400"}`,children:e.jsx(j,{size:20})}),e.jsx(s.button,{whileHover:{scale:1.05},whileTap:{scale:.95},className:`p-2 rounded-full ${t?"bg-[#2D2E3A] text-red-400":"bg-gray-200 text-red-600"}`,onClick:()=>x("Logged out successfully"),children:e.jsx(O,{size:20})})]})]})})}),e.jsx("main",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:e.jsxs(s.div,{initial:"hidden",animate:"visible",variants:M,className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[e.jsxs(s.div,{variants:l,className:"md:col-span-1",children:[e.jsxs("div",{className:`rounded-xl shadow-lg overflow-hidden ${t?"bg-[#1D1E2C]":"bg-white"} transition-colors duration-300`,children:[e.jsx("div",{className:`h-32 ${t?"bg-gradient-to-r from-purple-800 to-blue-700":"bg-gradient-to-r from-blue-400 to-indigo-500"}`}),e.jsxs("div",{className:"relative px-6 pb-6",children:[e.jsx("div",{className:"absolute -top-12 left-1/2 transform -translate-x-1/2",children:e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"w-24 h-24 rounded-full border-4 border-white dark:border-[#1D1E2C] bg-[#2D2E3A] flex items-center justify-center overflow-hidden",children:e.jsx(v,{size:40,className:`${t?"text-gray-300":"text-gray-600"}`})}),e.jsx(s.button,{className:`absolute bottom-0 right-0 p-1.5 rounded-full ${t?"bg-blue-600 text-white":"bg-blue-500 text-white"}`,children:e.jsx(I,{size:14})})]})}),e.jsxs("div",{className:"mt-14 text-center",children:[e.jsx("h2",{className:`text-xl font-bold ${t?"text-white":"text-gray-900"}`,children:i.name}),e.jsx("p",{className:`${t?"text-gray-400":"text-gray-600"} text-sm`,children:i.role}),e.jsx("p",{className:"text-gray-500 text-xs mt-1",children:i.joinDate}),e.jsx("div",{className:"mt-6",children:e.jsx(s.button,{whileHover:{scale:1.03},whileTap:{scale:.97},onClick:()=>m(!o),className:`w-full py-2 px-4 rounded-md flex items-center justify-center gap-2 ${o?t?"bg-gray-700 text-white":"bg-gray-200 text-gray-800":t?"bg-blue-600 text-white":"bg-blue-500 text-white"}`,children:o?e.jsxs(e.Fragment,{children:[e.jsx(P,{size:16}),e.jsx("span",{children:"Cancel Editing"})]}):e.jsxs(e.Fragment,{children:[e.jsx(J,{size:16}),e.jsx("span",{children:"Edit Profile"})]})})}),o&&e.jsxs(s.button,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:10},whileHover:{scale:1.03},whileTap:{scale:.97},onClick:A,className:`w-full py-2 px-4 rounded-md flex items-center justify-center gap-2 mt-3 ${t?"bg-green-600 text-white":"bg-green-500 text-white"}`,children:[e.jsx(f,{size:16}),e.jsx("span",{children:"Save Changes"})]})]})]})]}),e.jsx(s.div,{variants:l,className:`mt-6 rounded-xl shadow-lg overflow-hidden ${t?"bg-[#1D1E2C]":"bg-white"} transition-colors duration-300`,children:e.jsxs("div",{className:"p-6",children:[e.jsx("h3",{className:`text-lg font-semibold mb-4 ${t?"text-white":"text-gray-900"}`,children:"Quick Settings"}),e.jsxs(s.div,{variants:y,className:"space-y-4",children:[e.jsxs(s.div,{variants:l,className:`flex items-center justify-between p-3 rounded-lg ${t?"hover:bg-[#2D2E3A]":"hover:bg-gray-50"} cursor-pointer transition-colors`,onClick:u,children:[e.jsxs("div",{className:"flex items-center gap-3",children:[t?e.jsx($,{className:"text-yellow-400",size:18}):e.jsx(w,{className:"text-gray-700",size:18}),e.jsx("span",{className:`${t?"text-gray-200":"text-gray-700"}`,children:t?"Light Mode":"Dark Mode"})]}),e.jsx(N,{size:16,className:`${t?"text-gray-500":"text-gray-400"}`})]}),e.jsxs(s.div,{variants:l,className:`flex items-center justify-between p-3 rounded-lg ${t?"hover:bg-[#2D2E3A]":"hover:bg-gray-50"} cursor-pointer transition-colors`,onClick:g,children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(j,{className:i.notificationsEnabled?t?"text-blue-400":"text-blue-600":t?"text-gray-500":"text-gray-400",size:18}),e.jsx("span",{className:`${t?"text-gray-200":"text-gray-700"}`,children:"Notifications"})]}),e.jsxs("div",{className:"relative inline-flex items-center cursor-pointer",children:[e.jsx(s.input,{type:"checkbox",className:"sr-only peer",checked:i.notificationsEnabled,onChange:g}),e.jsx("div",{className:`w-11 h-6 ${t?"bg-[#3D3E4A]":"bg-gray-200"} peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all ${t?"peer-checked:bg-blue-600":"peer-checked:bg-blue-500"}`})]})]}),e.jsxs(s.div,{variants:l,className:`flex items-center justify-between p-3 rounded-lg ${t?"hover:bg-[#2D2E3A]":"hover:bg-gray-50"} cursor-pointer transition-colors`,onClick:()=>x("Settings page not implemented"),children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(T,{className:t?"text-gray-400":"text-gray-600",size:18}),e.jsx("span",{className:`${t?"text-gray-200":"text-gray-700"}`,children:"Advanced Settings"})]}),e.jsx(N,{size:16,className:`${t?"text-gray-500":"text-gray-400"}`})]})]})]})})]}),e.jsxs(s.div,{variants:l,className:"md:col-span-2",children:[e.jsxs("div",{className:`rounded-xl shadow-lg overflow-hidden ${t?"bg-[#1D1E2C]":"bg-white"} transition-colors duration-300 p-6`,children:[e.jsx("h2",{className:`text-xl font-bold mb-6 ${t?"text-white":"text-gray-900"}`,children:o?"Edit Profile Information":"Profile Information"}),o?e.jsxs(s.div,{initial:{opacity:0},animate:{opacity:1},className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("label",{className:`block text-sm font-medium mb-1 ${t?"text-gray-300":"text-gray-700"}`,children:"Full Name"}),e.jsx(s.input,{type:"text",className:`w-full rounded-md p-2 ${t?"bg-[#2D2E3A] border-[#3D3E4A] text-white focus:border-blue-500":"bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500"} border focus:ring-1 focus:ring-blue-500 outline-none`,value:r.name,onChange:a=>n({...r,name:a.target.value})})]}),e.jsxs("div",{children:[e.jsx("label",{className:`block text-sm font-medium mb-1 ${t?"text-gray-300":"text-gray-700"}`,children:"Email"}),e.jsx(s.input,{type:"email",className:`w-full rounded-md p-2 ${t?"bg-[#2D2E3A] border-[#3D3E4A] text-white focus:border-blue-500":"bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500"} border focus:ring-1 focus:ring-blue-500 outline-none`,value:r.email,onChange:a=>n({...r,email:a.target.value})})]}),e.jsxs("div",{children:[e.jsx("label",{className:`block text-sm font-medium mb-1 ${t?"text-gray-300":"text-gray-700"}`,children:"Phone"}),e.jsx(s.input,{type:"tel",className:`w-full rounded-md p-2 ${t?"bg-[#2D2E3A] border-[#3D3E4A] text-white focus:border-blue-500":"bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500"} border focus:ring-1 focus:ring-blue-500 outline-none`,value:r.phone,onChange:a=>n({...r,phone:a.target.value})})]}),e.jsxs("div",{children:[e.jsx("label",{className:`block text-sm font-medium mb-1 ${t?"text-gray-300":"text-gray-700"}`,children:"Location"}),e.jsx(s.input,{type:"text",className:`w-full rounded-md p-2 ${t?"bg-[#2D2E3A] border-[#3D3E4A] text-white focus:border-blue-500":"bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500"} border focus:ring-1 focus:ring-blue-500 outline-none`,value:r.location,onChange:a=>n({...r,location:a.target.value})})]}),e.jsxs("div",{children:[e.jsx("label",{className:`block text-sm font-medium mb-1 ${t?"text-gray-300":"text-gray-700"}`,children:"Birthdate"}),e.jsx(s.input,{type:"text",className:`w-full rounded-md p-2 ${t?"bg-[#2D2E3A] border-[#3D3E4A] text-white focus:border-blue-500":"bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500"} border focus:ring-1 focus:ring-blue-500 outline-none`,value:r.birthdate,onChange:a=>n({...r,birthdate:a.target.value})})]}),e.jsxs("div",{children:[e.jsx("label",{className:`block text-sm font-medium mb-1 ${t?"text-gray-300":"text-gray-700"}`,children:"Bio"}),e.jsx(s.textarea,{className:`w-full rounded-md p-2 ${t?"bg-[#2D2E3A] border-[#3D3E4A] text-white focus:border-blue-500":"bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500"} border focus:ring-1 focus:ring-blue-500 outline-none min-h-[100px]`,value:r.bio,onChange:a=>n({...r,bio:a.target.value})})]})]}):e.jsxs(s.div,{variants:y,initial:"hidden",animate:"visible",className:"space-y-6",children:[e.jsxs(s.div,{variants:l,className:"flex items-start gap-4",children:[e.jsx("div",{className:`p-2 rounded-lg ${t?"bg-[#2D2E3A]":"bg-blue-50"}`,children:e.jsx(L,{className:t?"text-blue-400":"text-blue-500",size:20})}),e.jsxs("div",{children:[e.jsx("h3",{className:`font-medium ${t?"text-gray-300":"text-gray-700"}`,children:"Email"}),e.jsx("p",{className:`${t?"text-white":"text-gray-900"}`,children:i.email})]})]}),e.jsxs(s.div,{variants:l,className:"flex items-start gap-4",children:[e.jsx("div",{className:`p-2 rounded-lg ${t?"bg-[#2D2E3A]":"bg-green-50"}`,children:e.jsx(H,{className:t?"text-green-400":"text-green-500",size:20})}),e.jsxs("div",{children:[e.jsx("h3",{className:`font-medium ${t?"text-gray-300":"text-gray-700"}`,children:"Phone"}),e.jsx("p",{className:`${t?"text-white":"text-gray-900"}`,children:i.phone})]})]}),e.jsxs(s.div,{variants:l,className:"flex items-start gap-4",children:[e.jsx("div",{className:`p-2 rounded-lg ${t?"bg-[#2D2E3A]":"bg-purple-50"}`,children:e.jsx(U,{className:t?"text-purple-400":"text-purple-500",size:20})}),e.jsxs("div",{children:[e.jsx("h3",{className:`font-medium ${t?"text-gray-300":"text-gray-700"}`,children:"Location"}),e.jsx("p",{className:`${t?"text-white":"text-gray-900"}`,children:i.location})]})]}),e.jsxs(s.div,{variants:l,className:"flex items-start gap-4",children:[e.jsx("div",{className:`p-2 rounded-lg ${t?"bg-[#2D2E3A]":"bg-orange-50"}`,children:e.jsx(S,{className:t?"text-orange-400":"text-orange-500",size:20})}),e.jsxs("div",{children:[e.jsx("h3",{className:`font-medium ${t?"text-gray-300":"text-gray-700"}`,children:"Birthdate"}),e.jsx("p",{className:`${t?"text-white":"text-gray-900"}`,children:i.birthdate})]})]}),e.jsxs(s.div,{variants:l,className:"flex items-start gap-4",children:[e.jsx("div",{className:`p-2 rounded-lg ${t?"bg-[#2D2E3A]":"bg-indigo-50"}`,children:e.jsx(v,{className:t?"text-indigo-400":"text-indigo-500",size:20})}),e.jsxs("div",{children:[e.jsx("h3",{className:`font-medium ${t?"text-gray-300":"text-gray-700"}`,children:"Bio"}),e.jsx("p",{className:`${t?"text-white":"text-gray-900"}`,children:i.bio})]})]})]})]}),e.jsxs(s.div,{variants:l,className:`mt-6 rounded-xl shadow-lg overflow-hidden ${t?"bg-[#1D1E2C]":"bg-white"} transition-colors duration-300 p-6`,children:[e.jsx("h2",{className:`text-xl font-bold mb-6 ${t?"text-white":"text-gray-900"}`,children:"Recent Logins"}),e.jsx("div",{className:"space-y-4",children:[{device:"Chrome / macOS",location:"San Francisco, CA",time:"Today, 2:45 PM"},{device:"Safari / iOS",location:"San Francisco, CA",time:"Yesterday, 8:30 AM"},{device:"Firefox / Windows",location:"New York, NY",time:"March 15, 2025, 4:12 PM"}].map((a,p)=>e.jsxs(s.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0,transition:{delay:.1*p}},className:`p-4 rounded-lg ${t?"bg-[#2D2E3A]":"bg-gray-50"} flex items-center justify-between`,children:[e.jsxs("div",{children:[e.jsx("h3",{className:`font-medium ${t?"text-white":"text-gray-900"}`,children:a.device}),e.jsx("p",{className:`text-sm ${t?"text-gray-400":"text-gray-600"}`,children:a.location})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(F,{size:14,className:t?"text-gray-500":"text-gray-400"}),e.jsx("span",{className:`text-sm ${t?"text-gray-400":"text-gray-600"}`,children:a.time})]})]},p))})]})]})]})}),e.jsx(_,{children:E&&e.jsxs(s.div,{className:`fixed bottom-4 right-4 ${t?"bg-green-600":"bg-green-500"} text-white px-4 py-2 rounded-md flex items-center shadow-lg`,variants:z,initial:"hidden",animate:"visible",exit:"exit",children:[e.jsx(f,{size:16,className:"mr-2"}),D]})})]})}export{ae as default};
