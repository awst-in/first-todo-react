(this.webpackJsonpuntitled=this.webpackJsonpuntitled||[]).push([[0],{13:function(t,e,n){"use strict";n.r(e);var c=n(1),o=n.n(c),r=n(6),i=n.n(r),u=n(5),l=n(7),d=n(0);function a(t){var e=t.todo,n=t.toggleTodo;return Object(d.jsx)("div",{children:Object(d.jsxs)("label",{children:[Object(d.jsx)("input",{type:"checkbox",checked:e.complete,onChange:function(){n(e.id)}}),e.name]})})}function j(t){var e=t.todos,n=t.toggleTodo;return e.map((function(t){return Object(d.jsx)(a,{toggleTodo:n,todo:t},t.id)}))}var s=n(15),b="todoApp.todos";var f=function(){var t=Object(c.useState)([]),e=Object(l.a)(t,2),n=e[0],o=e[1],r=Object(c.useRef)();return Object(c.useEffect)((function(){var t=JSON.parse(localStorage.getItem(b));t&&o(t)}),[]),Object(c.useEffect)((function(){localStorage.setItem(b,JSON.stringify(n))}),[n]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(j,{todos:n,toggleTodo:function(t){var e=Object(u.a)(n),c=e.find((function(e){return e.id===t}));c.complete=!c.complete,o(e)}}),Object(d.jsx)("input",{ref:r,type:"text"}),Object(d.jsx)("button",{onClick:function(t){var e=r.current.value;""!==e&&(o((function(t){return[].concat(Object(u.a)(t),[{id:Object(s.a)(),name:e,complete:!1}])})),r.current.value=null)},children:"Add"}),Object(d.jsx)("button",{onClick:function(){var t=n.filter((function(t){return!t.complete}));o(t)},children:"Clear Completed"}),Object(d.jsxs)("div",{children:[n.filter((function(t){return!t.complete})).length," left to do"]})]})};i.a.render(Object(d.jsx)(o.a.StrictMode,{children:Object(d.jsx)(f,{})}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.a45b6bb9.chunk.js.map