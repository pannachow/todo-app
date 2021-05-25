(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{10:function(e,t,n){e.exports=n(18)},18:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(6),o=n.n(l),c=n(8),s=n(7),i=n(1);function u(e){var t=e.useStore().todos.filter((function(e){return!e.done}));return r.a.createElement("header",{className:"flex flex-col items-center mt-8"},r.a.createElement("p",{className:"text-green-300 text-3xl font-black mx-4 px-2"},"Welcome back!"),r.a.createElement("p",{className:"text-indigo-300","data-testid":"tasks-left"},"You have ",t.length," new task",1!==t.length&&"s"," today"),r.a.createElement(i.b,{className:"animate-bounce w-6 h-6 text-indigo-300 my-4"}))}function d(e){var t=e.useStore(),n=t.filter,a=t.setFilter;return r.a.createElement("footer",{className:"flex flex-row justify-center my-8 gap-8"},r.a.createElement(m,{value:"All",selectedValue:n,setValue:a}),r.a.createElement(m,{value:"Active",selectedValue:n,setValue:a}),r.a.createElement(m,{value:"Done",selectedValue:n,setValue:a}))}function m(e){var t=e.value,n=e.selectedValue,a=e.setValue;return r.a.createElement("button",{onClick:function(){return a(t)},className:"\n        flex\n        flex-col\n        items-center\n        w-20\n        focus:outline-none\n        rounded-full\n        border-2\n        border-dashed\n        ".concat(t===n?"border-indigo-300":"border-transparent","\n      ")},r.a.createElement(i.d,{className:"w-6 h-6 text-indigo-300"}),r.a.createElement("p",{className:"text-green-200 font-black text-sm"},t))}var f=n(9);function x(e){var t=e.useStore(),n=t.todos,l=t.setTodos,o=t.filter,c=Object(a.useRef)(null);return r.a.createElement("main",{className:" flex flex-col items-center max-w-4xl box-border border-2 border-indigo-100 shadow-lg rounded-lg p-6 "},r.a.createElement("div",{className:"flex flex-row justify-center items-center"},r.a.createElement(i.c,{className:"w-9 h-9 text-indigo-300"}),r.a.createElement("p",{className:"text-indigo-400 text-xl font-bold"},"TODO")),r.a.createElement("div",{className:"flex space-x-6"},r.a.createElement("input",{"data-testid":"input",className:"placeholder-green-200 font-black text-2xl text-green-300 my-4 p-2",type:"text",placeholder:"What needs to be done?",ref:c}),r.a.createElement("button",{"data-testid":"addTodo",className:" text-blue-600 text-sm font-bold text-opacity-75 ring ring-offset-4 ring-offset-green-100 focus:outline-none rounded-full my-8 px-2 ",onClick:function(){var e;if(null===(e=c.current)||void 0===e?void 0:e.value){var t={done:!1,message:c.current.value};l([].concat(Object(f.a)(n),[t])),c.current.value=""}}},"Add New Task")),r.a.createElement("div",{className:"w-full","data-testid":"container"},n.filter(function(e){if("Active"===e)return function(e){return!e.done};if("Done"===e)return function(e){return e.done};return function(){return!0}}(o)).map((function(e,t){return r.a.createElement("div",{key:t,className:"flex my-2"},r.a.createElement("button",{onClick:function(){return function(e){var t=n[e];t.done=!t.done,l(n)}(t)},className:"focus:outline-none"},e.done?r.a.createElement(i.a,{className:"w-6 h-6 text-indigo-300"}):r.a.createElement("div",{className:"w-6 h-6 rounded-full border border-indigo-300"})),r.a.createElement("p",{className:"flex-grow overflow-ellipsis font-bold mx-4 ".concat(e.done?"line-through text-indigo-200":"text-indigo-400")},e.message),r.a.createElement("button",{onClick:function(){return function(e){n.splice(e,1),l(n)}(t)},className:"focus:outline-none"},r.a.createElement(i.e,{className:"w-6 h-6 text-indigo-300"})))}))))}var E=Object(c.a)(Object(s.persist)((function(e){return{todos:[],setTodos:function(t){return e({todos:t})},filter:"All",setFilter:function(t){return e({filter:t})}}}),{name:"todos"}));function p(){return r.a.createElement("div",{className:"flex flex-col items-center"},r.a.createElement(u,{useStore:E}),r.a.createElement(x,{useStore:E}),r.a.createElement(d,{useStore:E}))}o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.026bfe34.chunk.js.map