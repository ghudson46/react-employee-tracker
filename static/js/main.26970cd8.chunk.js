(this["webpackJsonpemployee-tracker"]=this["webpackJsonpemployee-tracker"]||[]).push([[0],{42:function(e,c,t){},43:function(e,c,t){},48:function(e,c,t){},49:function(e,c,t){},66:function(e,c,t){},70:function(e,c,t){"use strict";t.r(c);var a=t(0),n=t(1),r=t(31),s=t.n(r),l=(t(42),t(34)),o=t(3),i=(t(43),t(32)),j=t(10),m=t(11);j.b.add(m.b,m.a);var d=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("nav",{className:"navbar navbar-dark bg-primary justify-content-between",children:[Object(a.jsx)("a",{className:"navbar-brand",href:"/",children:"Employee Directory"}),Object(a.jsx)("a",{className:"nav-link active",href:"https://www.github.com/ghudson46/react-employee-tracker",children:Object(a.jsx)(i.a,{icon:m.a,size:"2x",style:{color:"white"}})})]})})};var b=function(){return Object(a.jsxs)("div",{className:"jumbotron",style:{textAlign:"center"},children:[Object(a.jsx)("h1",{className:"display-4",children:"Employee Tracker"}),Object(a.jsx)("p",{className:"lead",children:"This employee directory was created using React.js"}),Object(a.jsx)("hr",{className:"my-4"}),Object(a.jsx)("p",{children:"Now management can view employee information with the click of a button!"})]})},h=t(36),u=t(15),x=t(20);t(48);var O=function(e){var c=function(e){var c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;if((e=e.toString()).length<c)for(var t=c-e.length;t;)e="0"+e,t--;return e};return Object(a.jsxs)("div",{className:"row item-row",children:[Object(a.jsx)("div",{className:"col-sm-1",children:e.id}),Object(a.jsx)("div",{className:"col-md-3",children:e.employee_name}),Object(a.jsx)("div",{className:"col-md-5",children:function(e){var c=e.employee_name.toLowerCase().split(" ");return"".concat(c[0],".").concat(c[1],"@gmail.com")}(e)}),Object(a.jsx)("div",{className:"col-md-2",children:function(){var e=Math.floor(800*Math.random()+200),t=Math.floor(1e3*Math.random()),a=Math.floor(1e4*Math.random());return"(".concat(c(e),") ").concat(c(t),"-").concat(c(a,4))}()}),Object(a.jsx)("div",{className:"col-sm-1",children:e.employee_age})]})};t(49);var v=function(e){return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col-md-12 p-4 text-center",children:Object(a.jsx)("h3",{children:"Employee List"})})}),Object(a.jsxs)("div",{className:"row list-headers",children:[Object(a.jsx)("div",{className:"col-sm-1",children:"ID #"}),Object(a.jsx)("div",{className:"col-md-3",children:"Full Name"}),Object(a.jsx)("div",{className:"col-md-5",children:"Email Address"}),Object(a.jsx)("div",{className:"col-md-2",children:"Phone Number"}),Object(a.jsx)("div",{className:"col-sm-1",children:"Age"})]}),Object(a.jsx)("div",{children:e.employees.map((function(e){return Object(n.createElement)(O,Object(x.a)(Object(x.a)({},e),{},{key:e.id}))}))})]})},p=t(33),f=t.n(p);function N(e){var c=["btn"];return e.color&&c.push("btn-"+e.color),Object(a.jsx)("button",{className:c.join(" ")+" btn3d btn-xs",onClick:e.onClick,type:e.type,children:e.children})}N.defaultProps={color:"primary",onClick:function(){return!1},children:"",type:"button"};var y=N;var g=function(){var e=Object(n.useState)([]),c=Object(u.a)(e,2),t=c[0],r=c[1],s=Object(n.useState)([]),l=Object(u.a)(s,2),o=l[0],i=l[1],j=Object(n.useState)(""),m=Object(u.a)(j,2),d=m[0],b=m[1];Object(n.useEffect)((function(){x()}),[]);var x=function(){f.a.get("https://dummy.restapiexample.com/api/v1/employees").then((function(e){r(e.data.data),i(e.data.data)})).catch((function(e){console.log(e)}))};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:"container",children:Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col",children:Object(a.jsx)("form",{onSubmit:function(e){e.preventDefault();var c=Object(h.a)(t).filter((function(e){var c=new RegExp(d,"gi");return e.employee_name.match(c)}));i(c)},children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-sm-2"}),Object(a.jsx)("div",{className:"col-sm-8",children:Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"text",className:"form-control",placeholder:"Search employees by first or last name",name:"searchTerm",autoComplete:"off",value:d,onChange:function(e){b(e.target.value)}})})}),Object(a.jsx)("div",{className:"col-sm-1 text-center",children:Object(a.jsx)(y,{type:"submit",children:"Submit"})}),Object(a.jsx)("div",{className:"col-sm-1 text-center",children:t.length!==o.length&&Object(a.jsx)(y,{color:"danger",onClick:function(){i(t),b("")},children:"Clear"})})]})})})})}),Object(a.jsx)(v,{employees:o})]})};t(66);var w=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("footer",{className:"footer",children:Object(a.jsx)("div",{className:"row m-0",children:Object(a.jsx)("div",{className:"col-md-12 text-center p-4",children:"Copyright \xa9 2020 Garrett Hudson"})})})})};var k=function(){return Object(a.jsxs)(l.a,{basename:"/react-employee-tracker/",children:[Object(a.jsx)(d,{}),Object(a.jsx)(b,{}),Object(a.jsx)(o.a,{exact:!0,path:"/",component:g}),Object(a.jsx)(w,{})]})};t(69);s.a.render(Object(a.jsx)(k,{}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.26970cd8.chunk.js.map