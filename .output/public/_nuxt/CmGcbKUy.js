import{s as l,r,u as i,v as d,o as a,c as n,a as e,t as o}from"./BBDDYIEY.js";import{a as _}from"./B4uVmeYG.js";const u={key:0},h=e("h1",{class:"text-center mt-5"},"Detail",-1),p={class:"card mx-auto mt-5",style:{width:"18rem"}},m=["src"],v={class:"card-body text-center"},g={key:1},f=e("div",{class:"text-center"},[e("h1",null,"จะรีบไปไหน...")],-1),k=[f],D=l({__name:"[id]",setup(x){const t=r(null),c=i();return d(async()=>{try{const s=await _.get("https://pokeapi.co/api/v2/pokemon/"+c.params.id);t.value=s.data,console.log(t.value.sprites)}catch(s){console.error("งงนะ:",s)}}),(s,y)=>t.value?(a(),n("div",u,[h,e("div",p,[e("img",{class:"img",src:t.value.sprites.front_default,alt:""},null,8,m),e("div",v,[e("h3",null,"name : "+o(t.value.name),1),e("p",null,"height : "+o(t.value.height),1),e("p",null,"weight : "+o(t.value.weight),1)])])])):(a(),n("div",g,k))}});export{D as default};