(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[875],{21245:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/deposit/upload-deposit-data",function(){return r(91209)}])},42194:function(t,e,r){"use strict";r.d(e,{r:function(){return o}});var a=r(9669),n=r.n(a);let o=async t=>{let{data:e}=await n().get(t);return e}},91209:function(t,e,r){"use strict";r.a(t,async function(t,a){try{r.r(e);var n=r(85893),o=r(67294),i=r(32512),s=r(8478),l=r(95395),c=r(13077),u=r(41518),d=r(77893),p=r(11163),f=r(3441),h=t([d]);d=(h.then?(await h)():h)[0];let g=()=>{let[t,e]=(0,o.useState)(!1),[r,a]=(0,o.useState)(""),[h,g]=(0,o.useState)(null),[y,_]=(0,o.useState)(""),b=(0,u.o)(t=>t.setDepositData),m=(0,p.useRouter)(),v=(0,u.o)((0,o.useCallback)(t=>t.completeDepositStep,[])),w=(0,u.o)(t=>t.enableDepositStep),x=()=>{v("upload-deposit-data");let t=w("connect-wallet");m.push(t.href)},k=(t,r)=>{if(a(""),null==r?void 0:r.length){a("Upload a valid json file.");return}if(1===t.length){let r=new FileReader;r.onload=async r=>{if(r.target)try{if(r.target.result&&"string"==typeof r.target.result){let n=(0,d.RJ)(JSON.parse(r.target.result));if(!n){e(!1),a("This is not a valid ".concat(f.rk," file"));return}try{let e=await (0,d.sB)(n),r=e.data.flatMap(t=>t.publickey.substring(2));_(t[0].name),b(n.map(t=>r.includes(t.pubkey)?{...t,transactionStatus:l.LN.DEPOSITED,depositStatus:l.Er.ALREADY_DEPOSITED}:{...t,transactionStatus:l.LN.READY,depositStatus:l.Er.READY_FOR_DEPOSIT}))}catch(t){e(!1),a("Beaconchain is down. Please try again later.")}e(!0)}}catch(r){let{message:t}=r;e(!1),a(t)}},r.readAsText(t[0])}else a("Activate only one deposit file at a time")},{isDragAccept:j,getRootProps:S,getInputProps:D}=(0,i.u)({accept:"application/json",noClick:t,onDrop:k}),E=(0,o.useCallback)(()=>{b([]),g(null),a(""),e(!1)},[b]);return(0,n.jsxs)(s.kC,{direction:"column",css:{gap:"$2xl"},children:[(0,n.jsx)(s.xv,{variant:"h3",children:"Upload Deposit Data "}),(0,n.jsxs)(s.W2,{className:"enr-section",alignItems:"start",css:{gap:"$lg"},children:[(0,n.jsxs)(s.xv,{variant:"body",children:["Upload the ",(0,n.jsx)(s.xv,{variant:"pill",color:"create",children:f.rk})," file you generated during the ceremony. It is located in the ",(0,n.jsx)(s.xv,{variant:"pill",color:"create",children:".charon/"})," subfolder."]}),(0,n.jsxs)(s.xv,{variant:"body",children:["Note: if you can't find ",(0,n.jsx)(s.xv,{variant:"pill",color:"create",children:".charon"}),", search for how to show hidden folder in your OS."]}),(0,n.jsx)(s.kC,{css:{bc:"$bg03",p:"$2xl",boxSizing:"border-box"},children:(0,n.jsxs)(s.kC,{css:{flexDirection:"column",alignItems:"center"},...S(),children:[(0,n.jsx)("input",{...D()}),(0,n.jsx)(c.w,{isDragAccept:j,isFileAccepted:t}),(0,n.jsx)(s.xv,{css:{mt:"$lg",color:"$body",fontWeight:"$medium",fontSize:"$4",lineHeight:"24px"},children:t?(0,n.jsxs)(s.kC,{css:{gap:"$sm"},children:[y,(0,n.jsx)(s.xu,{onClick:E,children:(0,n.jsx)(s.Tw,{css:{color:"$obolGreen"}})})]}):r?(0,n.jsx)(s.xv,{variant:"metadata",color:"test",children:r}):"Upload a valid json file."})]})}),(0,n.jsxs)(s.kC,{children:[(0,n.jsx)(s.zx,{css:{width:"25%",backgroundColor:"$bg03",color:"$body",marginRight:"$sm"},onClick:()=>{m.push("/deposit/advisories")},children:"Back"}),(0,n.jsx)(s.zx,{fullWidth:!0,disabled:!t,onClick:()=>{x()},children:"Continue"})]})]})]})};e.default=g,g.layout="DepositProgressTrackerLayout",a()}catch(t){a(t)}})},77893:function(t,e,r){"use strict";r.a(t,async function(t,a){try{r.d(e,{RJ:function(){return c},sB:function(){return d}});var n=r(3441),o=r(62075),i=r(42194),s=t([o]);o=(s.then?(await s)():s)[0];let l=t=>!(!t.pubkey||!t.withdrawal_credentials||!t.amount||!t.signature||!t.deposit_message_root||!t.deposit_data_root||!t.fork_version||!t.network_name||!t.deposit_cli_version||"string"!=typeof t.pubkey||"string"!=typeof t.withdrawal_credentials||"number"!=typeof t.amount||"string"!=typeof t.signature||"string"!=typeof t.deposit_message_root||"string"!=typeof t.deposit_data_root||"string"!=typeof t.fork_version||"string"!=typeof t.network_name||"string"!=typeof t.deposit_cli_version||96!==t.pubkey.length||64!==t.withdrawal_credentials.length||192!==t.signature.length||64!==t.deposit_message_root.length||64!==t.deposit_data_root.length||8!==t.fork_version.length||0>t.deposit_cli_version.localeCompare(n.Uz,void 0,{numeric:!0,sensitivity:"base"}))&&!(t.amount<n.do)&&!(t.amount>32*n.jK)&&"0x".concat(t.fork_version)===n.se,c=t=>{if(!Array.isArray(t))return!1;let e=t.map(t=>{if(!u(t))throw Error("This isn't a valid deposit_data JSON file. Try again.");if(!(0,o.uM)(t))throw Error("Deposit Signature can't be verified.");if(!(0,o.zJ)(t))throw Error("Deposit Root can't be verified.");return t});return e},u=t=>l(t),d=async t=>{let e=t.flatMap(t=>t.pubkey),r="".concat(n.q2,"/api/v1/validator/").concat(e.join(","),"/deposits"),{data:a,status:o}=await (0,i.r)(r);if(!a||"OK"!==o)throw Error("Beaconchain API is down");return{data:a,status:o}};a()}catch(t){a(t)}})},62075:function(t,e,r){"use strict";r.a(t,async function(t,a){try{r.d(e,{uM:function(){return g},zJ:function(){return u}});var n=r(38759),o=r(25874),i=r(3441),s=r(95395),l=r(48764).Buffer,c=t([n]);n=(c.then?(await c)():c)[0];let u=t=>{let e=(0,s.kA)(),r=e.defaultValue();r.pubkey=(0,o.Wu)(t.pubkey),r.withdrawalCredentials=(0,o.Wu)(t.withdrawal_credentials),r.amount=t.amount;let a=(0,s.Jb)(),n=a.defaultValue();return n.pubkey=(0,o.Wu)(t.pubkey),n.withdrawalCredentials=(0,o.Wu)(t.withdrawal_credentials),n.amount=t.amount,n.signature=(0,o.Wu)(t.signature),l.from(e.hashTreeRoot(r).buffer).toString("hex")===t.deposit_message_root&&l.from(a.hashTreeRoot(n).buffer).toString("hex")===t.deposit_data_root},d=t=>l.from(t,"hex"),p=(t,e)=>{let r=(0,s.ME)(),a=r.defaultValue();return a.currentVersion=t,a.genesisValidatorsRoot=e,l.from(r.hashTreeRoot(a).buffer)},f=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:d(i.se.substring(2,i.se.length)),r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:d(i.qH),a=p(e,r),n=new Uint8Array(32);return n.set(t),n.set(a.subarray(0,28),4),n},h=(t,e)=>{let r=(0,s.bX)(),a=r.defaultValue();return a.objectRoot=t,a.domain=e,l.from(r.hashTreeRoot(a).buffer)},g=t=>{let e=d(t.pubkey),r=d(t.signature),a=d(t.deposit_message_root),o=f(d(i.ms)),s=h(a,o);return n.ZP.verify(e,s,r)};a()}catch(t){a(t)}})}},function(t){t.O(0,[240,544,774,888,179],function(){return t(t.s=21245)}),_N_E=t.O()}]);