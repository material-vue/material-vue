import{_ as t,f as o,o as s,c,h as n}from"./app-275e2576.js";const d={expose:["getSelected","selectOption"],props:{selected:{type:String,required:!1}},data(){return{selected_option:this.selected}},methods:{selectOption(e){this.selected_option=e}},provide(){return{selected_option:o(()=>this.selected_option),selectOption:this.selectOption}},computed:{getSelected(){return this.selected_option}}},i={class:"container"};function p(e,r,_,l,a,u){return s(),c("div",i,[n(e.$slots,"default",{},void 0,!0)])}const h=t(d,[["render",p],["__scopeId","data-v-73c518c7"],["__file","MRadioGroup.vue"]]);export{h as default};