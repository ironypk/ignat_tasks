(this.webpackJsonpignat_tasks=this.webpackJsonpignat_tasks||[]).push([[0],{108:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(10),s=n.n(c),i=(n(96),n(72)),o=n.n(i),j=n(14),l=n(143),u=n(155),d=n(148),b=n(147),O=n(149),h=n(150),x=n(34),m=n(73),f=n.n(m),_=n(2);var p=function(){return Object(_.jsxs)("div",{className:f.a.root,children:[Object(_.jsx)("div",{children:"404"}),Object(_.jsx)("div",{children:"Page not found!"}),Object(_.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"}),Object(_.jsx)(x.b,{to:"/",children:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e"})]})},v=n(11),g=n(25),N=n.n(g);var C=function(e){var t=e.avatar,n=e.name,r=e.message,a=e.time;return Object(_.jsxs)("div",{className:N.a.message,children:[Object(_.jsx)("div",{className:N.a.avatar_column,children:Object(_.jsx)("div",{className:N.a.image_wrapper,children:Object(_.jsx)("img",{className:N.a.image,src:t,alt:"123"})})}),Object(_.jsx)("div",{className:N.a.description_column,children:Object(_.jsxs)("div",{className:N.a.description_container,children:[Object(_.jsx)("div",{className:N.a.message_name,children:n}),Object(_.jsx)("div",{className:N.a.message_text,children:r}),Object(_.jsx)("div",{className:N.a.message_time,children:a})]})})]})},k="https://cs5.pikabu.ru/post_img/big/2015/03/25/5/1427266313_681511633.jpg",w="Some Name",y="some text",S="22:00";var R=function(){return Object(_.jsxs)("div",{children:[Object(_.jsx)("hr",{}),"homeworks 1",Object(_.jsx)(C,{avatar:k,name:w,message:y,time:S}),Object(_.jsx)(C,{avatar:k,name:w,message:y,time:S}),Object(_.jsx)("hr",{}),Object(_.jsx)("hr",{})]})},I=n(63),U=n.n(I);var E=function(e){return Object(_.jsxs)("div",{className:U.a.affair,children:[Object(_.jsx)("div",{className:U.a.affair_name,children:e.affair.name}),Object(_.jsx)("div",{children:e.affair.priority}),Object(_.jsx)("button",{onClick:function(){return e.deleteAffairCallback(e.affair._id)},children:"X"})]})};var M=function(e){var t=e.data.map((function(t){return Object(_.jsx)(E,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(_.jsxs)("div",{children:[t,Object(_.jsx)("button",{onClick:function(){return e.setFilter("all")},children:"All"}),Object(_.jsx)("button",{onClick:function(){return e.setFilter("high")},children:"High"}),Object(_.jsx)("button",{onClick:function(){return e.setFilter("middle")},children:"Middle"}),Object(_.jsx)("button",{onClick:function(){return e.setFilter("low")},children:"Low"})]})},A=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var J=function(){var e=Object(r.useState)(A),t=Object(j.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)("all"),s=Object(j.a)(c,2),i=s[0],o=s[1],l=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(n,i);return Object(_.jsxs)("div",{children:[Object(_.jsx)("hr",{}),"homeworks 2",Object(_.jsx)(M,{data:l,setFilter:o,deleteAffairCallback:function(e){return a(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))}}),Object(_.jsx)("hr",{}),Object(_.jsx)("hr",{})]})},T=n(79),B=n(50),P=n(151),W=n(152),F=n(57),H=n(4),L=Object(l.a)((function(e){return{container:{maxWidth:300,margin:e.spacing(1)},root:{width:300,marginBottom:e.spacing(1),"& input:valid + fieldset":{borderColor:"green",borderWidth:2},"& input:invalid:focus + fieldset":{borderColor:"red",borderWidth:2},"& input:valid:focus + fieldset":{borderColor:"green"},"& label":{color:"#555","&.Mui-focused":{color:"green"}}},rootRed:{"& label.Mui-focused":{color:"red"}}}})),Q=function(e){var t=e.name,n=e.setNameCallback,r=e.addUser,a=e.error,c=e.totalUsers,s=L();return Object(_.jsxs)("div",{className:s.container,children:[Object(_.jsx)(P.a,{className:Object(H.a)(s.root,Object(B.a)({},s.rootRed,!t.length)),label:a,required:!0,variant:"outlined",value:t,onChange:n,id:"validation-outlined-input"}),Object(_.jsxs)(W.a,{display:"flex",alignItems:"flex-end",flexDirection:"column",children:[Object(_.jsx)(d.a,{onClick:r,variant:"outlined",children:"add"}),Object(_.jsx)(F.a,{children:c})]})]})},G=n(154),K=function(e){var t=e.users,n=e.addUserCallback,a=Object(r.useState)(""),c=Object(j.a)(a,2),s=c[0],i=c[1],o=Object(r.useState)("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"),l=Object(j.a)(o,2),u=l[0],d=(l[1],t.length);return Object(_.jsx)(Q,{name:s,setNameCallback:function(e){i(e.currentTarget.value)},addUser:function(){s.length&&(n({_id:Object(G.a)(),name:s}),i(""))},error:u,totalUsers:d})};var V=function(){var e=Object(r.useState)([]),t=Object(j.a)(e,2),n=t[0],a=t[1];return Object(_.jsxs)("div",{children:[Object(_.jsx)("hr",{}),"homeworks 3",Object(_.jsx)(K,{users:n,addUserCallback:function(e){a((function(t){return[].concat(Object(T.a)(t),[e])}))}}),Object(_.jsx)("hr",{}),Object(_.jsx)("hr",{})]})},Z=n(39),q=n(40),z=n(65),D=n.n(z),$=function(e){e.type;var t=e.onChange,n=e.onChangeText,r=e.onKeyPress,a=e.onEnter,c=e.error,s=e.className,i=e.spanClassName,o=Object(q.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),j="".concat(D.a.error," ").concat(i||""),l="".concat(D.a.errorInput," ").concat(s||"");return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("input",Object(Z.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){r&&r(e),a&&"Enter"===e.key&&a()},className:l},o)),c&&Object(_.jsx)("span",{className:j,children:c})]})},X=n(66),Y=n.n(X),ee=n(67),te=n.n(ee),ne=function(e){var t=e.red,n=e.className,r=Object(q.a)(e,["red","className"]),a="".concat(t?te.a.red:te.a.default," ").concat(n);return Object(_.jsx)("button",Object(Z.a)({className:a},r))},re=n(68),ae=n.n(re),ce=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,r=e.className,a=(e.spanClassName,e.children),c=Object(q.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(ae.a.checkbox," ").concat(r||"");return Object(_.jsxs)("label",{children:[Object(_.jsx)("input",Object(Z.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},c)),a&&Object(_.jsx)("span",{className:ae.a.spanClassName,children:a})]})};var se=function(){var e=Object(r.useState)(""),t=Object(j.a)(e,2),n=t[0],a=t[1],c=n?"":"error",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(r.useState)(!1),o=Object(j.a)(i,2),l=o[0],u=o[1];return Object(_.jsxs)("div",{children:[Object(_.jsx)("hr",{}),"homeworks 4",Object(_.jsxs)("div",{className:Y.a.column,children:[Object(_.jsx)($,{value:n,onChangeText:a,onEnter:s,error:c}),Object(_.jsx)($,{className:Y.a.blue}),Object(_.jsx)(ne,{children:"default"}),Object(_.jsx)(ne,{red:!0,onClick:s,children:"delete "}),Object(_.jsx)(ne,{disabled:!0,children:"disabled"}),Object(_.jsx)(ce,{checked:l,onChangeChecked:u,children:"some text "}),Object(_.jsx)(ce,{checked:l,onChange:function(e){return u(e.currentTarget.checked)}})]}),Object(_.jsx)("hr",{}),Object(_.jsx)("hr",{})]})};var ie=function(){return Object(_.jsxs)("div",{children:[Object(_.jsx)(R,{}),Object(_.jsx)(J,{}),Object(_.jsx)(V,{}),Object(_.jsx)(se,{})]})},oe=function(){return Object(_.jsx)("div",{children:"JUNIOR"})},je=function(){return Object(_.jsx)("div",{children:"JUNIOR_PLUS"})},le={PRE_JUNIOR:"/pre-junior",JUNIOR:"/junior",JUNIOR_PLUS:"/junior-plus"};var ue=function(){return Object(_.jsx)("div",{children:Object(_.jsxs)(v.d,{children:[Object(_.jsx)(v.b,{path:"/",exact:!0,render:function(){return Object(_.jsx)(v.a,{to:le.PRE_JUNIOR})}}),Object(_.jsx)(v.b,{path:le.PRE_JUNIOR,render:function(){return Object(_.jsx)(ie,{})}}),Object(_.jsx)(v.b,{path:le.JUNIOR,render:function(){return Object(_.jsx)(oe,{})}}),Object(_.jsx)(v.b,{path:le.JUNIOR_PLUS,render:function(){return Object(_.jsx)(je,{})}}),Object(_.jsx)(v.b,{render:function(){return Object(_.jsx)(p,{})}})]})})},de=n(78),be=n.n(de),Oe=Object(l.a)({button:{width:"100%",backgroundColor:"#444",borderRadius:0,"&:hover $arrow":{color:"#999"}},arrow:{color:"#fff"}});var he=function(){var e=Oe(),t=a.a.useState(!1),n=Object(j.a)(t,2),r=n[0],c=n[1];return Object(_.jsxs)("div",{children:[Object(_.jsx)(d.a,{className:e.button,onClick:function(){return c(!r)},children:Object(_.jsx)(be.a,{className:e.arrow})}),Object(_.jsx)(u.a,{anchor:"top",open:r,onClose:function(){return c(!1)},children:Object(_.jsx)("div",{children:Object(_.jsx)(b.a,{children:Object.entries(le).map((function(e){var t=Object(j.a)(e,2),n=t[0],r=t[1];return Object(_.jsx)(O.a,{button:!0,activeClassName:"Mui-selected",component:x.c,to:r,onClick:function(){return c(!1)},children:Object(_.jsx)(h.a,{primary:n})},n)}))})})})]})};var xe=function(){return Object(_.jsx)("div",{children:Object(_.jsxs)(x.a,{children:[Object(_.jsx)(he,{}),Object(_.jsx)(ue,{})]})})};var me=function(){return Object(_.jsx)("div",{className:o.a.App,children:Object(_.jsx)(xe,{})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(_.jsx)(me,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},25:function(e,t,n){e.exports={message:"Message_message__344yk",avatar_column:"Message_avatar_column__2zt8r",image_wrapper:"Message_image_wrapper__hZ_0D",description_column:"Message_description_column__3Oxwf",description_container:"Message_description_container__gTpRZ",message_name:"Message_message_name__8VqpE",message_time:"Message_message_time__33VTF"}},63:function(e,t,n){e.exports={affair:"Affairs_affair__jGQnQ",affair_name:"Affairs_affair_name__1adBk"}},65:function(e,t,n){e.exports={superInput:"SuperInputText_superInput__2JSRB",errorInput:"SuperInputText_errorInput__229UA",error:"SuperInputText_error__tZ5Yr"}},66:function(e,t,n){e.exports={blue:"HW4_blue__1NG3p",column:"HW4_column__3uxMx",testSpanError:"HW4_testSpanError__3_zQg",myButton:"HW4_myButton__3xVCo"}},67:function(e,t,n){e.exports={default:"SuperButton_default__3Rnbc",red:"SuperButton_red__2wiMH","mui-button":"SuperButton_mui-button__3jkGN"}},68:function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__1eQa4",spanClassName:"SuperCheckbox_spanClassName__1RfSE"}},72:function(e,t,n){e.exports={App:"App_App__3ECjM"}},73:function(e,t,n){e.exports={root:"Error404_root__1d4e_"}},96:function(e,t,n){}},[[108,1,2]]]);
//# sourceMappingURL=main.7ce4f8c4.chunk.js.map