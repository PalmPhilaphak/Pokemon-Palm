import{_ as h}from"./BIt6EhNk.js";import{s as v,r as _,v as x,x as y,o,c as a,a as e,d as u,t as m,y as w,z as g,F as k,A as b,B as C,b as N,w as V,p as j,e as B,_ as I}from"./BBDDYIEY.js";import{a as p}from"./B4uVmeYG.js";const d=c=>(j("data-v-0e3f2af1"),c=c(),B(),c),L={key:0},S=d(()=>e("h1",{class:"d-flex justify-content-center m-5"},"โปเกมอน บีบมะนาวฆ่างู",-1)),D={class:"d-flex justify-content-center"},E=d(()=>e("br",null,null,-1)),F={class:"d-flex justify-content-center"},M={class:"row d-flex justify-content-center m-5"},P={class:"card col-xl-2 m-3",style:{width:"18rem","margin-bottom":"1rem"}},T=["src"],z={class:"card-body"},A={class:"card-title text-center"},Q={key:1},U=d(()=>e("div",{class:"text-center"},[e("h1",null,"จะรีบไปไหน...")],-1)),q=[U],G=v({__name:"list",setup(c){const l=_([]),n=_("");x(async()=>{try{const t=await p.get("https://pokeapi.co/api/v2/pokemon?limit=150");l.value=await Promise.all(t.data.results.map(r=>p.get(r.url).then(i=>i.data)))}catch(t){console.error("Error:",t)}});const f=y(()=>l.value.filter(t=>t.name.toLowerCase().includes(n.value.toLowerCase())));return(t,r)=>{const i=h;return l.value.length?(o(),a("div",L,[S,e("div",D,[u(" Computed "+m(n.value)+" ",1),E]),e("div",F,[w(e("input",{"onUpdate:modelValue":r[0]||(r[0]=s=>n.value=s),type:"text",placeholder:"computed...",class:"form-control col-xl-3 mb-3"},null,512),[[g,n.value]])]),e("div",M,[(o(!0),a(k,null,b(f.value,s=>(o(),a("div",P,[s.sprites?(o(),a("img",{key:0,src:s.sprites.front_default,class:"card-img-top"},null,8,T)):C("",!0),e("div",z,[e("h2",A,m(s.name),1),N(i,{href:"/pokemon/"+s.id,class:"btn btn-primary col-xl-12 mt-3"},{default:V(()=>[u("รายละเอียด")]),_:2},1032,["href"])])]))),256))])])):(o(),a("div",Q,q))}}}),O=I(G,[["__scopeId","data-v-0e3f2af1"]]);export{O as default};
