(this["webpackJsonpreact-theory"]=this["webpackJsonpreact-theory"]||[]).push([[6],{226:function(e,r,t){e.exports={error:"FormsControls_error__Mjk3A",formSummaryError:"FormsControls_formSummaryError__1uP4k"}},227:function(e,r,t){"use strict";t.d(r,"b",(function(){return s})),t.d(r,"a",(function(){return j}));var n=t(3),c=t(237),o=(t(0),t(226)),a=t.n(o),i=t(2),s=function(e){var r=e.input,t=e.meta,o=Object(c.a)(e,["input","meta"]),s=t.touched&&t.error;return Object(i.jsxs)("div",{className:"".concat(a.a.wrap," ").concat(s?a.a.error:""),children:[Object(i.jsx)("textarea",Object(n.a)(Object(n.a)({},r),o)),s&&Object(i.jsx)("span",{children:t.error})]})},j=function(e){var r=e.input,t=e.meta,o=Object(c.a)(e,["input","meta"]),s=t.touched&&t.error;return Object(i.jsxs)("div",{className:"".concat(a.a.wrap," ").concat(s?a.a.error:""),children:[Object(i.jsx)("input",Object(n.a)(Object(n.a)({},r),o)),s&&Object(i.jsx)("span",{children:t.error})]})}},228:function(e,r,t){"use strict";t.d(r,"a",(function(){return n}));var n=function(e){if(!e)return"Field is required"}},303:function(e,r,t){"use strict";t.r(r);t(0);var n=t(24),c=t(108),o=t(109),a=t(228),i=t(227),s=t(27),j=t(6),u=t(226),b=t.n(u),d=t(2),l=Object(o.a)({form:"login"})((function(e){return Object(d.jsx)("div",{children:Object(d.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(d.jsx)("div",{children:Object(d.jsx)(c.a,{validate:[a.a],placeholder:"email",name:"email",component:i.a})}),Object(d.jsx)("div",{children:Object(d.jsx)(c.a,{validate:[a.a],placeholder:"password",name:"password",component:i.a})}),Object(d.jsxs)("div",{children:[Object(d.jsx)(c.a,{type:"checkbox",name:"rememberMe",component:i.a})," remember me"]}),e.error&&Object(d.jsx)("div",{className:b.a.formSummaryError,children:e.error}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{type:"submit",children:"Login"})})]})})}));r.default=Object(n.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:s.c,logout:s.d})((function(e){return console.log(e.isAuth),e.isAuth?Object(d.jsx)(j.a,{to:"/profile"}):Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"Login"}),Object(d.jsx)(l,{onSubmit:function(r){console.log(r),e.login(r.email,r.password,r.rememberMe)}})]})}))}}]);
//# sourceMappingURL=6.df9eba42.chunk.js.map