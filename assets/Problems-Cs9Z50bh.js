import{_ as q,e as r,f as F,k as I,c as J,a as t,w as n,r as a,o as L,b as d,d as b,t as h,u as O}from"./index-CnOS-fw9.js";import{a as y}from"./axios-DXsv3KKR.js";const T={class:"problems"},$={class:"header"},E={class:"filters"},M={class:"pagination"},Q={__name:"Problems",setup(A){O();const i=r(""),c=r(""),u=r(1),_=r(10),f=r(0),v=r([]),w=async()=>{try{const e=(await y.get("https://xqy2006.github.io/Serverless-OJ/problems/list.txt")).data.split(`
`).filter(s=>s.trim()),p=await Promise.all(e.map(async s=>(await y.get(`https://xqy2006.github.io/Serverless-OJ/problems/${s}/problem.json`)).data));v.value=p,f.value=p.length}catch(l){console.error("Failed to load problems:",l)}};F(()=>{w()});const x=I(()=>{let l=v.value;return i.value&&(l=l.filter(e=>e.title.toLowerCase().includes(i.value.toLowerCase()))),c.value&&(l=l.filter(e=>e.difficulty===c.value)),l}),C=l=>({easy:"success",medium:"warning",hard:"danger"})[l],S=()=>{u.value=1},V=()=>{u.value=1},z=l=>{_.value=l},P=l=>{u.value=l};return(l,e)=>{const p=a("el-input"),s=a("el-option"),g=a("el-select"),m=a("el-table-column"),k=a("router-link"),N=a("el-tag"),U=a("el-table"),B=a("el-pagination"),D=a("el-card"),R=a("el-col"),j=a("el-row");return L(),J("div",T,[t(j,{justify:"center"},{default:n(()=>[t(R,{span:20},{default:n(()=>[t(D,null,{header:n(()=>[d("div",$,[e[4]||(e[4]=d("h2",null,"题目列表",-1)),d("div",E,[t(p,{modelValue:i.value,"onUpdate:modelValue":e[0]||(e[0]=o=>i.value=o),placeholder:"搜索题目","prefix-icon":"Search",onInput:S},null,8,["modelValue"]),t(g,{modelValue:c.value,"onUpdate:modelValue":e[1]||(e[1]=o=>c.value=o),placeholder:"难度",onChange:V},{default:n(()=>[t(s,{label:"全部",value:""}),t(s,{label:"简单",value:"easy"}),t(s,{label:"中等",value:"medium"}),t(s,{label:"困难",value:"hard"})]),_:1},8,["modelValue"])])])]),default:n(()=>[t(U,{data:x.value,style:{width:"100%"}},{default:n(()=>[t(m,{prop:"id",label:"编号",width:"80"}),t(m,{prop:"title",label:"标题"},{default:n(o=>[t(k,{to:`/submit/${o.row.title}`},{default:n(()=>[b(h(o.row.title),1)]),_:2},1032,["to"])]),_:1}),t(m,{prop:"difficulty",label:"难度",width:"100"},{default:n(o=>[t(N,{type:C(o.row.difficulty)},{default:n(()=>[b(h(o.row.difficulty),1)]),_:2},1032,["type"])]),_:1})]),_:1},8,["data"]),d("div",M,[t(B,{"current-page":u.value,"onUpdate:currentPage":e[2]||(e[2]=o=>u.value=o),"page-size":_.value,"onUpdate:pageSize":e[3]||(e[3]=o=>_.value=o),total:f.value,"page-sizes":[10,20,50,100],layout:"total, sizes, prev, pager, next",onSizeChange:z,onCurrentChange:P},null,8,["current-page","page-size","total"])])]),_:1})]),_:1})]),_:1})])}}},K=q(Q,[["__scopeId","data-v-49c4a338"]]);export{K as default};