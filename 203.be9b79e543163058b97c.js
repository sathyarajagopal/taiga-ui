(window.webpackJsonp=window.webpackJsonp||[]).push([[203],{jpvk:function(t,s,r){"use strict";r.r(s),r.d(s,"Subscript",(function(){return n})),r.d(s,"default",(function(){return n}));var e=r("jgtz");const n=e.Mark.create({name:"subscript",addOptions:()=>({HTMLAttributes:{}}),parseHTML:()=>[{tag:"sub"},{style:"vertical-align",getAttrs(t){if("sub"!==t)return!1}}],renderHTML({HTMLAttributes:t}){return["sub",Object(e.mergeAttributes)(this.options.HTMLAttributes,t),0]},addCommands(){return{setSubscript:()=>({commands:t})=>t.setMark(this.name),toggleSubscript:()=>({commands:t})=>t.toggleMark(this.name),unsetSubscript:()=>({commands:t})=>t.unsetMark(this.name)}},addKeyboardShortcuts(){return{"Mod-,":()=>this.editor.commands.toggleSubscript()}}})}}]);