(window.webpackJsonp=window.webpackJsonp||[]).push([[200],{rgiy:function(t,e,n){"use strict";n.r(e),n.d(e,"Image",(function(){return u})),n.d(e,"default",(function(){return u})),n.d(e,"inputRegex",(function(){return r}));var i=n("jgtz");const r=/(!\[(.+|:?)]\((\S+)(?:(?:\s+)["'](\S+)["'])?\))/,u=i.Node.create({name:"image",addOptions:()=>({inline:!1,HTMLAttributes:{}}),inline(){return this.options.inline},group(){return this.options.inline?"inline":"block"},draggable:!0,addAttributes:()=>({src:{default:null},alt:{default:null},title:{default:null}}),parseHTML:()=>[{tag:"img[src]"}],renderHTML({HTMLAttributes:t}){return["img",Object(i.mergeAttributes)(this.options.HTMLAttributes,t)]},addCommands(){return{setImage:t=>({commands:e})=>e.insertContent({type:this.name,attrs:t})}},addInputRules(){return[Object(i.nodeInputRule)({find:r,type:this.type,getAttributes:t=>{const[,,e,n,i]=t;return{src:n,alt:e,title:i}}})]}})}}]);