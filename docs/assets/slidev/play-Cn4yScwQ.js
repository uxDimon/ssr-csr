const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/slidev/DrawingControls-3dTMyBPY.js","assets/slidev/DrawingControls.vue_vue_type_style_index_0_lang-CME6WrmJ.js","assets/modules/unplugin-icons-C9NOW9--.js","assets/modules/vue-CHHLRvXz.js","assets/modules/shiki-CHb-23XF.js","assets/modules/shiki-Bxv373Z5.css","assets/slidev/SlideWrapper-CQ79cFrU.js","assets/index-BOUbDEaH.js","assets/index-Bdskv6v8.css","assets/SlideWrapper-C39T2lA7.css","assets/slidev/IconButton.vue_vue_type_script_setup_true_lang-Drs9X5h_.js","assets/slidev/shortcuts-sWX27MhA.js","assets/slidev/context-Bst77YB5.js","assets/shortcuts-BF4XM9au.css","assets/DrawingControls-Cxk9a9ub.css"])))=>i.map(i=>d[i]);
import{d as v,ab as z,o,c as u,B as e,b as _,e as l,f as N,i as C,g as n,ai as R,z as E,k as b,aa as B,aj as $,O as k,l as p,F as M,h as W,x as D,v as A,t as H}from"../modules/vue-CHHLRvXz.js";import{c as I,a as L}from"./SlideWrapper-CQ79cFrU.js";import{v as h,a as P,w as O,x,y as w,d as V,z as T,A as U,B as j,l as S,D as F,E as G}from"../index-BOUbDEaH.js";import{b as K,G as X,c as Y,u as q,r as J,a as Q,S as Z,_ as ee,o as te}from"./shortcuts-sWX27MhA.js";import{n as oe}from"../modules/unplugin-icons-C9NOW9--.js";import"../modules/shiki-CHb-23XF.js";import"./context-Bst77YB5.js";import"./IconButton.vue_vue_type_script_setup_true_lang-Drs9X5h_.js";const se="/assets/logo-BYkHSa_O.png",ae={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},le=v({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["update:modelValue"],setup(m,{emit:i}){const r=m,a=z(r,"modelValue",i);function d(){a.value=!1}return(f,s)=>(o(),u(R,null,[e(a)?(o(),_("div",ae,[l("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:s[0]||(s[0]=c=>d())}),l("div",{class:C(["m-auto rounded-md bg-main shadow",r.class]),"dark:border":"~ main"},[N(f.$slots,"default")],2)])):n("v-if",!0)],1024))}}),ne={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},ie=["innerHTML"],re=v({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["update:modelValue"],setup(m,{emit:i}){const a=z(m,"modelValue",i),d=E(()=>typeof h.info=="string");return(f,s)=>(o(),u(le,{modelValue:e(a),"onUpdate:modelValue":s[0]||(s[0]=c=>$(a)?a.value=c:null),class:"px-6 py-4"},{default:b(()=>[l("div",ne,[d.value?(o(),_("div",{key:0,class:"mb-4",innerHTML:e(h).info},null,8,ie)):n("v-if",!0),s[1]||(s[1]=l("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[l("div",{class:"flex gap-1 children:my-auto"},[l("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),l("img",{class:"w-5 h-5",src:se,alt:"Slidev logo"}),l("div",{style:{color:"#2082A6"}},[l("b",null,"Sli"),B("dev ")])])],-1))])]),_:1},8,["modelValue"]))}}),ue=v({__name:"Controls",setup(m){const{isEmbedded:i}=P(),r=!h.drawings.presenterOnly&&!i.value,t=k();r&&O(()=>import("./DrawingControls-3dTMyBPY.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14])).then(f=>t.value=f.default);const a=k(),d=k();return(f,s)=>(o(),_(M,null,[t.value?(o(),u(e(t),{key:0})):n("v-if",!0),p(K),p(X),a.value?(o(),u(e(a),{key:1})):n("v-if",!0),d.value?(o(),u(e(d),{key:2,modelValue:e(x),"onUpdate:modelValue":s[0]||(s[0]=c=>$(x)?x.value=c:null)},null,8,["modelValue"])):n("v-if",!0),e(h).info?(o(),u(re,{key:3,modelValue:e(w),"onUpdate:modelValue":s[1]||(s[1]=c=>$(w)?w.value=c:null)},null,8,["modelValue"])):n("v-if",!0),p(Y)],64))}}),de={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},ce=v({__name:"PresenterMouse",setup(m){return(i,r)=>{const t=oe;return e(V).cursor?(o(),_("div",de,[p(t,{class:"absolute stroke-white dark:stroke-black",style:W({left:`${e(V).cursor.x}%`,top:`${e(V).cursor.y}%`,strokeWidth:16})},null,8,["style"])])):n("v-if",!0)}}}),pe=v({__name:"PrintStyle",setup(m){function i(r,{slots:t}){if(t.default)return A("style",t.default())}return(r,t)=>(o(),u(i,null,{default:b(()=>[B(" @page { size: "+D(e(T))+"px "+D(e(U))+"px; margin: 0px; } ",1)]),_:1}))}}),he=v({__name:"play",setup(m){const{next:i,prev:r,isPrintMode:t}=P(),{isDrawing:a}=I(),d=H();function f(y){var g;S.value||y.button===0&&((g=y.target)==null?void 0:g.id)==="slide-container"&&(y.pageX/window.innerWidth>.5?i():r())}q(d),J(),Q();const s=E(()=>j.value||S.value),c=k();return(y,g)=>(o(),_(M,null,[e(t)?(o(),u(pe,{key:0})):n("v-if",!0),l("div",{id:"page-root",ref_key:"root",ref:d,class:C(["grid",e(G)?"grid-rows-[1fr_max-content]":"grid-cols-[1fr_max-content]"])},[p(L,{style:{background:"var(--slidev-slide-container-background, black)"},width:e(t)?e(F).width.value:void 0,"is-main":"",onPointerdown:f,onContextmenu:e(te)},{default:b(()=>[p(Z,{"render-context":"slide"}),p(ce)]),controls:b(()=>[e(t)?n("v-if",!0):(o(),_("div",{key:0,class:C(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100 focus-within:opacity-100 focus-visible:opacity-100",[s.value?"!opacity-100 right-0":"opacity-0 p-2",e(a)?"pointer-events-none":""]])},[p(ee,{persist:s.value},null,8,["persist"])],2))]),_:1},8,["width","onContextmenu"]),c.value&&e(S)?(o(),u(e(c),{key:0,resize:!0})):n("v-if",!0)],2),e(t)?n("v-if",!0):(o(),u(ue,{key:1})),g[0]||(g[0]=l("div",{id:"twoslash-container"},null,-1))],64))}});export{he as default};
