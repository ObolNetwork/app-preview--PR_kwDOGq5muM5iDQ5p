(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[45],{52489:function(t,e,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/deposit/deposit-transaction",function(){return s(35651)}])},35651:function(t,e,s){"use strict";s.r(e),s.d(e,{default:function(){return j}});var a=s(85893),n=s(67294),i=s(2593),o=s(64146),r=s(8478),c=s(41518),l=s(95395),u=s(29229),d=s(3441),p=s(98376);let y=t=>{let{pubKey:e,onDeposit:s}=t,i=(0,c.o)(t=>t.getDepositItem(e)),o=(0,c.o)(t=>t.depositData),u=Object.keys(o).some(t=>o[t].transactionStatus===l.LN.STARTED),y=(0,n.useCallback)(()=>i.depositStatus===l.Er.READY_FOR_DEPOSIT||i.transactionStatus===l.LN.READY||i.transactionStatus===l.LN.PENDING||i.transactionStatus===l.LN.REJECTED||i.transactionStatus===l.LN.FAILED?(0,a.jsx)(r.zx,{fullWidth:!0,onClick:()=>s(e),color:"secondary",css:{backgroundColor:"$bg04","&:hover":{backgroundColor:"$create",color:"$textCreateHover"}},disabled:i.transactionStatus===l.LN.PENDING||u,children:i.transactionStatus===l.LN.REJECTED||i.transactionStatus===l.LN.FAILED?"Try Again":"Deposit"}):i.depositStatus===l.Er.ALREADY_DEPOSITED?(0,a.jsx)(p.j,{link:"".concat(d.q2,"/validator/0x").concat(e),title:"Beaconchain"}):i.transactionStatus===l.LN.STARTED?(0,a.jsx)(p.j,{link:"".concat(d.t0,"/").concat(i.txHash),title:"Etherscan"}):i.transactionStatus===l.LN.SUCCEEDED?(0,a.jsxs)(r.kC,{direction:"column",css:{alignContent:"center"},children:[(0,a.jsx)(p.j,{link:"".concat(d.q2,"/validator/0x").concat(e),title:"Beaconchain"}),(0,a.jsx)(p.j,{link:"".concat(d.uM,"/0x").concat(e),title:"Beaconscan"})]}):void 0,[i.depositStatus,i.transactionStatus,i.txHash,s,e]);return(0,a.jsx)(r.xu,{css:{display:"flex",gap:"$xxs",alignItems:"center"},children:y()})};var x=s(21237),b=s(2504),h={abi:[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!1,internalType:"bytes",name:"pubkey",type:"bytes"},{indexed:!1,internalType:"bytes",name:"withdrawal_credentials",type:"bytes"},{indexed:!1,internalType:"bytes",name:"amount",type:"bytes"},{indexed:!1,internalType:"bytes",name:"signature",type:"bytes"},{indexed:!1,internalType:"bytes",name:"index",type:"bytes"}],name:"DepositEvent",type:"event"},{inputs:[{internalType:"bytes",name:"pubkey",type:"bytes"},{internalType:"bytes",name:"withdrawal_credentials",type:"bytes"},{internalType:"bytes",name:"signature",type:"bytes"},{internalType:"bytes32",name:"deposit_data_root",type:"bytes32"}],name:"deposit",outputs:[],stateMutability:"payable",type:"function"},{inputs:[],name:"get_deposit_count",outputs:[{internalType:"bytes",name:"",type:"bytes"}],stateMutability:"view",type:"function"},{inputs:[],name:"get_deposit_root",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"pure",type:"function"}]},m=s(84916);let E=[{accessorKey:"validatorPublicKey",header:"Validator Public Key",css:{maxWidth:"70px","@sm":{width:"auto",maxWidth:"auto"},"@md":{maxWidth:"100px"}}},{accessorKey:"status",header:"Status"},{accessorKey:"action",header:"Action"}],g=()=>{let{provider:t}=(0,b.kR)(),e=(0,c.o)(t=>t.depositData),s=(0,c.o)(t=>t.updateTxStatus),p=(0,c.o)(t=>t.updateDepositStatus),g=(0,c.o)(t=>t.getDepositItem),[j,k]=(0,n.useState)(!1),D=Object.keys(null!=e?e:{}).length,N=async e=>{let a=g(e);try{let e=t.getSigner(),n=new o.Contract(d.mN,h.abi,e),r=i.O$.from(32),c=r.mul(d.sg);s(a.pubkey,l.LN.PENDING);let u=await n.deposit((0,x.Ox)(a.pubkey),(0,x.Ox)(a.withdrawal_credentials),(0,x.Ox)(a.signature),(0,x.Ox)(a.deposit_data_root),{value:c});s(a.pubkey,l.LN.STARTED,u.hash),p(a.pubkey,l.Er.VERIFYING);let y=await u.wait();s(a.pubkey,l.LN.SUCCEEDED,u.transactionHash),console.log(y)}catch(t){(0,x.WW)(t)?s(a.pubkey,l.LN.REJECTED):s(a.pubkey,l.LN.FAILED)}};if(!e&&!j)return(0,a.jsxs)(r.xv,{variant:"h5",children:["Go to upload deposit step to upload the corresponding data step.. ",(0,a.jsx)(r.rU,{href:"/deposit/upload-deposits",children:"Upload Deposit Data"})]});let v=()=>{k(!0)},C=(0,a.jsxs)(r.kC,{direction:"column",css:{gap:"$2xl"},children:[(0,a.jsx)(m.qN,{heading:"Your stake has reached the deposit contract",subHeading:(0,a.jsxs)(r.xu,{css:{px:"$xl"},children:["You’ve successfully set up a ",(0,a.jsx)(r.xv,{css:{display:"inline"},color:"obolGreen",children:"Distributed Validator"}),"!\n            Please ensure your cluster is healthy and ready for validator activation."]})}),(0,a.jsxs)(r.W2,{className:"success-section",alignItems:"start",css:{gap:"$xl"},children:[(0,a.jsx)(r.xv,{variant:"h4",children:"Overview"}),(0,a.jsxs)(r.kC,{css:{gap:"$2xl"},children:[(0,a.jsx)(m.Mz,{heading:"Your Stake",subHeading:(0,a.jsxs)(r.kC,{css:{gap:"$xxs"},children:[(0,a.jsx)(r.Ee,{src:"/assets/eth-icon.png",alt:"eth",width:24,height:24}),"".concat(D*d.lc," Eth")]})}),(0,a.jsx)(m.Mz,{heading:"Your Validators",subHeading:"".concat(D)})]})]})]});return j?C:(0,a.jsxs)(r.kC,{direction:"column",css:{gap:"$2xl"},children:[(0,a.jsx)(r.xv,{variant:"h3",children:"Transactions"}),(0,a.jsx)(r.kC,{direction:"column",css:{gap:"$2xl"},children:(0,a.jsxs)(r.W2,{dir:"col",className:"transactions-section",alignItems:"start",children:[(0,a.jsxs)(r.kC,{direction:"column",css:{gap:"$xxxs"},children:[(0,a.jsx)(r.xv,{variant:"h4",children:"Confirm Deposit"}),(0,a.jsx)(r.xv,{size:"4",color:"muted",children:"Submit a transaction to finish your deposit"})]}),(0,a.jsxs)(r.kC,{direction:"column",css:{gap:"$xl"},children:[(0,a.jsxs)(r.xu,{className:"deposit-table-container",css:{display:"flex",flexDirection:"column",p:"$sm",backgroundColor:"$bg03",borderRadius:"$1",gap:"$lg","& table":{backgroundColor:"transparent"},"& table tbody td":{whiteSpace:"normal"}},children:[(0,a.jsx)(r.xv,{variant:"h5",children:"Key List"}),(0,a.jsx)(r.iA,{rows:Object.keys(e).map(t=>({validatorPublicKey:(0,x.zN)(t,[0,10],10),status:(0,a.jsx)(u.D,{pubKey:t}),action:(0,a.jsx)(y,{pubKey:t,onDeposit:N})})),columns:E})]}),(0,a.jsx)(m.wA,{onBackHref:"/deposit/summary",onContinue:v,disableContinue:Object.keys(e).some(t=>null==e[t].txHash&&e[t].transactionStatus!==l.LN.SUCCEEDED)})]})]})})]})};var j=g;g.layout="DepositProgressTrackerLayout"}},function(t){t.O(0,[774,888,179],function(){return t(t.s=52489)}),_N_E=t.O()}]);