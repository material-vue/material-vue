import"./MButton.vue_vue_type_style_index_0_scoped_c4139d08_lang-4ed993c7.js";import{_ as r,o as c,c as p,a as i,i as d,h as u}from"./app-275e2576.js";const f={name:"MButton",props:{enabled:{type:Boolean,default:!0},type:{type:String,default:"filled",validator(l){return["filled","outlined","filled-tonal"].includes(l)}},wrap:{type:Boolean,default:!0}},mounted(){let l=this.$refs;function s(e){const t=e.currentTarget,n=l.btn_ripple;t.removeChild(n);const a=Math.max(t.clientWidth,t.clientHeight),o=a/2;n.style.width=n.style.height=`${a}px`,n.style.left=`${e.clientX-t.getBoundingClientRect().left-o}px`,n.style.top=`${e.clientY-t.getBoundingClientRect().top-o}px`,t.appendChild(n)}l.btn.addEventListener("mousedown",s)}},_={class:"container__label-text m-text m-headline-small"},m={ref:"btn_ripple",class:"ripple"};function h(l,s,e,t,n,a){return c(),p("div",{ref:"btn",class:d(["container",[e.enabled?"container--enabled":"container--disabled",e.type,{"container--wrap":e.wrap}]])},[i("div",{class:d(["m-state",[e.enabled?"m-state--enabled":"m-state--disabled"]])},null,2),i("p",_,[u(l.$slots,"default",{},void 0,!0)]),i("span",m,null,512)],2)}const y=r(f,[["render",h],["__scopeId","data-v-c4139d08"],["__file","MButton.vue"]]);export{y as default};