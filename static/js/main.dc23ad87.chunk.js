(this.webpackJsonpignat_tasks=this.webpackJsonpignat_tasks||[]).push([[0],{100:function(e,t,n){},112:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(10),s=n.n(a),i=(n(100),n(76)),o=n.n(i),j=n(11),l=n(146),u=n(159),b=n(151),d=n(150),O=n(153),h=n(154),x=n(37),f=n(77),m=n.n(f),p=n(1);var v=function(){return Object(p.jsxs)("div",{className:m.a.root,children:[Object(p.jsx)("div",{children:"404"}),Object(p.jsx)("div",{children:"Page not found!"}),Object(p.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"}),Object(p.jsx)(x.b,{to:"/",children:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e"})]})},g=n(14),_=n(28),C=n.n(_);var k=function(e){var t=e.avatar,n=e.name,c=e.message,r=e.time;return Object(p.jsxs)("div",{className:C.a.message,children:[Object(p.jsx)("div",{className:C.a.avatar_column,children:Object(p.jsx)("div",{className:C.a.image_wrapper,children:Object(p.jsx)("img",{className:C.a.image,src:t,alt:"123"})})}),Object(p.jsx)("div",{className:C.a.description_column,children:Object(p.jsxs)("div",{className:C.a.description_container,children:[Object(p.jsx)("div",{className:C.a.message_name,children:n}),Object(p.jsx)("div",{className:C.a.message_text,children:c}),Object(p.jsx)("div",{className:C.a.message_time,children:r})]})})]})},N="https://cs5.pikabu.ru/post_img/big/2015/03/25/5/1427266313_681511633.jpg",w="Some Name",y="some text",S="22:00";var I=function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)("hr",{}),"homeworks 1",Object(p.jsx)(k,{avatar:N,name:w,message:y,time:S}),Object(p.jsx)(k,{avatar:N,name:w,message:y,time:S}),Object(p.jsx)("hr",{}),Object(p.jsx)("hr",{})]})},R=n(66),E=n.n(R);var T=function(e){return Object(p.jsxs)("div",{className:E.a.affair,children:[Object(p.jsx)("div",{className:E.a.affair_name,children:e.affair.name}),Object(p.jsx)("div",{children:e.affair.priority}),Object(p.jsx)("button",{onClick:function(){return e.deleteAffairCallback(e.affair._id)},children:"X"})]})};var U=function(e){var t=e.data.map((function(t){return Object(p.jsx)(T,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(p.jsxs)("div",{children:[t,Object(p.jsx)("button",{onClick:function(){return e.setFilter("all")},children:"All"}),Object(p.jsx)("button",{onClick:function(){return e.setFilter("high")},children:"High"}),Object(p.jsx)("button",{onClick:function(){return e.setFilter("middle")},children:"Middle"}),Object(p.jsx)("button",{onClick:function(){return e.setFilter("low")},children:"Low"})]})},A=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var M=function(){var e=Object(c.useState)(A),t=Object(j.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)("all"),s=Object(j.a)(a,2),i=s[0],o=s[1],l=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(n,i);return Object(p.jsxs)("div",{children:[Object(p.jsx)("hr",{}),"homeworks 2",Object(p.jsx)(U,{data:l,setFilter:o,deleteAffairCallback:function(e){return r(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))}}),Object(p.jsx)("hr",{}),Object(p.jsx)("hr",{})]})},D=n(58),B=n(52),F=n(155),L=n(156),J=n(60),P=n(4),W=Object(l.a)((function(e){return{container:{maxWidth:300,margin:e.spacing(1)},root:{width:300,marginBottom:e.spacing(1),"& input:valid + fieldset":{borderColor:"green",borderWidth:2},"& input:invalid:focus + fieldset":{borderColor:"red",borderWidth:2},"& input:valid:focus + fieldset":{borderColor:"green"},"& label":{color:"#555","&.Mui-focused":{color:"green"}}},rootRed:{"& label.Mui-focused":{color:"red"}}}})),G=function(e){var t=e.name,n=e.setNameCallback,c=e.addUser,r=e.error,a=e.totalUsers,s=W();return Object(p.jsxs)("div",{className:s.container,children:[Object(p.jsx)(F.a,{className:Object(P.a)(s.root,Object(B.a)({},s.rootRed,!t.length)),label:r,required:!0,variant:"outlined",value:t,onChange:n,id:"validation-outlined-input"}),Object(p.jsxs)(L.a,{display:"flex",alignItems:"flex-end",flexDirection:"column",children:[Object(p.jsx)(b.a,{onClick:c,variant:"outlined",children:"add"}),Object(p.jsx)(J.a,{children:a})]})]})},H=n(158),Q=function(e){var t=e.users,n=e.addUserCallback,r=Object(c.useState)(""),a=Object(j.a)(r,2),s=a[0],i=a[1],o=Object(c.useState)("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"),l=Object(j.a)(o,2),u=l[0],b=(l[1],t.length);return Object(p.jsx)(G,{name:s,setNameCallback:function(e){i(e.currentTarget.value)},addUser:function(){s.length&&(n({_id:Object(H.a)(),name:s}),i(""))},error:u,totalUsers:b})};var V=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),n=t[0],r=t[1];return Object(p.jsxs)("div",{children:[Object(p.jsx)("hr",{}),"homeworks 3",Object(p.jsx)(Q,{users:n,addUserCallback:function(e){r((function(t){return[].concat(Object(D.a)(t),[e])}))}}),Object(p.jsx)("hr",{}),Object(p.jsx)("hr",{})]})},z=n(15),K=n(19),Z=n(68),q=n.n(Z),$=function(e){e.type;var t=e.onChange,n=e.onChangeText,c=e.onKeyPress,r=e.onEnter,a=e.error,s=e.className,i=e.spanClassName,o=Object(K.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),j="".concat(q.a.error," ").concat(i||""),l="".concat(q.a.errorInput," ").concat(s||"");return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("input",Object(z.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){c&&c(e),r&&"Enter"===e.key&&r()},className:l},o)),a&&Object(p.jsx)("span",{className:j,children:a})]})},X=n(69),Y=n.n(X),ee=n(70),te=n.n(ee),ne=function(e){var t=e.red,n=e.className,c=Object(K.a)(e,["red","className"]),r="".concat(t?te.a.red:te.a.default," ").concat(n);return Object(p.jsx)("button",Object(z.a)({className:r},c))},ce=n(71),re=n.n(ce),ae=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,c=e.className,r=(e.spanClassName,e.children),a=Object(K.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(re.a.checkbox," ").concat(c||"");return Object(p.jsxs)("label",{children:[Object(p.jsx)("input",Object(z.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},a)),r&&Object(p.jsx)("span",{className:re.a.spanClassName,children:r})]})};var se=function(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),n=t[0],r=t[1],a=n?"":"error",s=function(){a?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(c.useState)(!1),o=Object(j.a)(i,2),l=o[0],u=o[1];return Object(p.jsxs)("div",{children:[Object(p.jsx)("hr",{}),"homeworks 4",Object(p.jsxs)("div",{className:Y.a.column,children:[Object(p.jsx)($,{value:n,onChangeText:r,onEnter:s,error:a}),Object(p.jsx)($,{className:Y.a.blue}),Object(p.jsx)(ne,{children:"default"}),Object(p.jsx)(ne,{red:!0,onClick:s,children:"delete "}),Object(p.jsx)(ne,{disabled:!0,children:"disabled"}),Object(p.jsx)(ae,{checked:l,onChangeChecked:u,children:"some text "}),Object(p.jsx)(ae,{checked:l,onChange:function(e){return u(e.currentTarget.checked)}})]}),Object(p.jsx)("hr",{}),Object(p.jsx)("hr",{})]})},ie=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,r=e.spanProps,a=Object(K.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(c.useState)(!1),i=Object(j.a)(s,2),o=i[0],l=i[1],u=r||{},b=u.children,d=u.onDoubleClick,O=u.className,h=Object(K.a)(u,["children","onDoubleClick","className"]),x="\u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043a\u0440\u0430\u0441\u0438\u0432\u044b\u0439 \u0441\u0442\u0438\u043b\u044c \u0434\u043b\u044f \u0441\u043f\u0430\u043d\u0430".concat(" ",O);return Object(p.jsx)(p.Fragment,{children:o?Object(p.jsx)($,Object(z.a)({autoFocus:!0,onBlur:function(e){l(!1),t&&t(e)},onEnter:function(){l(!1),n&&n()}},a)):Object(p.jsx)("span",Object(z.a)(Object(z.a)({onDoubleClick:function(e){l(!0),d&&d(e)},className:x},h),{},{children:b||a.value}))})};function oe(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}function je(e,t){var n=localStorage.getItem(e);return null!==n&&(t=JSON.parse(n)),t}oe("test",{x:"A",y:1});je("test",{x:"",y:0});var le="EDITABLE_VALUE ";var ue=function(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),n=t[0],r=t[1];return Object(p.jsxs)("div",{children:[Object(p.jsx)("hr",{}),"homeworks 6",Object(p.jsx)("div",{children:Object(p.jsx)(ie,{value:n,onChangeText:r,spanProps:{children:n?void 0:"enter text..."}})}),Object(p.jsx)(ne,{onClick:function(){oe(le,n)},children:"save"}),Object(p.jsx)(ne,{onClick:function(){var e=je(le,"Hello  world");r(e)},children:"restore"}),Object(p.jsx)("hr",{}),Object(p.jsx)("hr",{})]})};var be=function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)(I,{}),Object(p.jsx)(M,{}),Object(p.jsx)(V,{}),Object(p.jsx)(se,{}),Object(p.jsx)(ue,{})]})},de=function(e){var t=e.options,n=e.onChange,c=e.onChangeOption,r=Object(K.a)(e,["options","onChange","onChangeOption"]),a=t?t.map((function(e,t){return Object(p.jsx)("option",{children:e},t)})):[];return Object(p.jsx)("select",Object(z.a)(Object(z.a)({onChange:function(e){c&&c(e.currentTarget.value),n&&n(e)}},r),{},{children:a}))},Oe=function(e){e.type;var t=e.name,n=e.options,c=e.value,r=e.onChange,a=e.onChangeOption,s=Object(K.a)(e,["type","name","options","value","onChange","onChangeOption"]),i=function(e){r&&r(e),a&&a(e.currentTarget.value)},o=n?n.map((function(e,n){return Object(p.jsxs)("label",{children:[Object(p.jsx)("input",Object(z.a)({type:"radio",name:e,onChange:i,checked:e===c,value:e},s)),e]},t+"-"+n)})):[];return Object(p.jsx)(p.Fragment,{children:o})},he=["x","y","z"];var xe=function(){var e=Object(c.useState)(he[1]),t=Object(j.a)(e,2),n=t[0],r=t[1];return Object(p.jsxs)("div",{children:[Object(p.jsx)("hr",{}),"homeworks 7",Object(p.jsx)("div",{children:Object(p.jsx)(de,{options:he,value:n,onChangeOption:r})}),Object(p.jsx)("div",{children:Object(p.jsx)(Oe,{name:"radio",options:he,value:n,onChangeOption:r})}),Object(p.jsx)("hr",{}),Object(p.jsx)("hr",{})]})},fe=function(e,t){switch(t.type){case"sort":return Object(D.a)(e.sort((function(e,n){var c=e.name.toUpperCase(),r=n.name.toUpperCase();return"up"===t.payload?c<r?-1:1:"down"===t.payload?c<r?1:-1:0})));case"check":return e.filter((function(e){return e.age>=t.payload}));default:return e}},me=function(e){return{type:"sort",payload:e}},pe=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var ve=function(){var e=Object(c.useState)(pe),t=Object(j.a)(e,2),n=t[0],r=t[1],a=n.map((function(e){return Object(p.jsxs)("div",{children:[Object(p.jsx)("span",{children:e.name}),Object(p.jsx)("span",{children:e.age})]},e._id)}));return Object(p.jsxs)("div",{children:[Object(p.jsx)("hr",{}),"homeworks 8",a,Object(p.jsx)("div",{children:Object(p.jsx)(ne,{onClick:function(){return r(fe(pe,me("up")))},children:"sort up"})}),Object(p.jsx)("div",{children:Object(p.jsx)(ne,{onClick:function(){return r(fe(pe,me("down")))},children:"sort down"})}),Object(p.jsx)("div",{children:Object(p.jsx)(ne,{onClick:function(){return r(fe(pe,{type:"check",payload:18}))},children:"check 18"})}),Object(p.jsx)("hr",{}),Object(p.jsx)("hr",{})]})};var ge=function(){var e=Object(c.useState)(0),t=Object(j.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(new Date),s=Object(j.a)(a,2),i=s[0],o=s[1],l=Object(c.useState)(!1),u=Object(j.a)(l,2),b=u[0],d=u[1],O="Time:".concat(i.toLocaleTimeString("ru-RU")),h="Date:".concat(i.toLocaleDateString("ru-RU"));return Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{onMouseEnter:function(){d(!0)},onMouseLeave:function(){d(!1)},children:O}),b&&Object(p.jsx)("div",{children:h}),Object(p.jsx)(ne,{onClick:function(){var e=window.setInterval((function(){o((function(){return new Date}))}),1e3);r(e)},children:"start"}),Object(p.jsx)(ne,{onClick:function(){window.clearInterval(n)},children:"stop"})]})};var _e,Ce=function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)("hr",{}),"homeworks 9",Object(p.jsx)(ge,{}),Object(p.jsx)("hr",{}),Object(p.jsx)("hr",{})]})},ke=n(48);!function(e){e.SET_LOADING="SET_LOADING"}(_e||(_e={}));var Ne={loading:!1},we=function(e){return{type:_e.SET_LOADING,predicate:e}},ye=n(152);var Se=function(){var e=Object(ke.c)((function(e){return e.loading})).loading,t=Object(ke.b)();return Object(p.jsxs)("div",{children:[Object(p.jsx)("hr",{}),"homeworks 10",e?Object(p.jsx)(ye.a,{}):Object(p.jsx)("div",{children:Object(p.jsx)(ne,{onClick:function(){t(we(!0)),setTimeout((function(){return t(we(!1))}),2e3)},children:"set loading..."})}),Object(p.jsx)("hr",{}),Object(p.jsx)("hr",{})]})},Ie=n(82),Re=n.n(Ie),Ee=function(e){e.type;var t=e.onChange,n=e.onChangeRange,c=e.className,r=Object(K.a)(e,["type","onChange","onChangeRange","className"]),a="".concat(Re.a.range," ").concat(c||"");return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("input",Object(z.a)({type:"range",onChange:function(e){t&&t(e),n&&n(+e.currentTarget.value)},className:a},r))})},Te=n(161),Ue=function(e){var t=e.onChangeRange,n=e.value;return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(Te.a,{value:n,valueLabelDisplay:"auto","aria-labelledby":"range-slider",onChange:function(e,n){t&&t(n)}})})};var Ae=function(){var e=Object(c.useState)(0),t=Object(j.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(100),s=Object(j.a)(a,2),i=s[0],o=s[1];return Object(p.jsxs)("div",{children:[Object(p.jsx)("hr",{}),"homeworks 11",Object(p.jsxs)("div",{children:[Object(p.jsx)("span",{children:n}),Object(p.jsx)(Ee,{onChangeRange:r})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("span",{children:n}),Object(p.jsx)(Ue,{value:[n,i],onChangeRange:function(e){r(e[0]),o(e[1])}}),Object(p.jsx)("span",{children:i})]}),Object(p.jsx)("hr",{}),Object(p.jsx)("hr",{})]})},Me=function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)(xe,{}),Object(p.jsx)(ve,{}),Object(p.jsx)(Ce,{}),Object(p.jsx)(Se,{}),Object(p.jsx)(Ae,{})]})},De=function(){return Object(p.jsx)("div",{children:"JUNIOR_PLUS"})},Be={PRE_JUNIOR:"/pre-junior",JUNIOR:"/junior",JUNIOR_PLUS:"/junior-plus"};var Fe=function(){return Object(p.jsx)("div",{children:Object(p.jsxs)(g.d,{children:[Object(p.jsx)(g.b,{path:"/",exact:!0,render:function(){return Object(p.jsx)(g.a,{to:Be.PRE_JUNIOR})}}),Object(p.jsx)(g.b,{path:Be.PRE_JUNIOR,render:function(){return Object(p.jsx)(be,{})}}),Object(p.jsx)(g.b,{path:Be.JUNIOR,render:function(){return Object(p.jsx)(Me,{})}}),Object(p.jsx)(g.b,{path:Be.JUNIOR_PLUS,render:function(){return Object(p.jsx)(De,{})}}),Object(p.jsx)(g.b,{render:function(){return Object(p.jsx)(v,{})}})]})})},Le=n(83),Je=n.n(Le),Pe=Object(l.a)({button:{width:"100%",backgroundColor:"#444",borderRadius:0,"&:hover $arrow":{color:"#999"}},arrow:{color:"#fff"}});var We=function(){var e=Pe(),t=r.a.useState(!1),n=Object(j.a)(t,2),c=n[0],a=n[1];return Object(p.jsxs)("div",{children:[Object(p.jsx)(b.a,{className:e.button,onClick:function(){return a(!c)},children:Object(p.jsx)(Je.a,{className:e.arrow})}),Object(p.jsx)(u.a,{anchor:"top",open:c,onClose:function(){return a(!1)},children:Object(p.jsx)("div",{children:Object(p.jsx)(d.a,{children:Object.entries(Be).map((function(e){var t=Object(j.a)(e,2),n=t[0],c=t[1];return Object(p.jsx)(O.a,{button:!0,activeClassName:"Mui-selected",component:x.c,to:c,onClick:function(){return a(!1)},children:Object(p.jsx)(h.a,{primary:n})},n)}))})})})]})};var Ge=function(){return Object(p.jsx)("div",{children:Object(p.jsxs)(x.a,{children:[Object(p.jsx)(We,{}),Object(p.jsx)(Fe,{})]})})};var He=function(){return Object(p.jsxs)("div",{className:o.a.App,children:[Object(p.jsx)("div",{children:"react homeworks:"}),Object(p.jsx)(Ge,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Qe=n(72),Ve=Object(Qe.a)({loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _e.SET_LOADING:return Object(z.a)(Object(z.a)({},e),{},{loading:t.predicate});default:return e}}}),ze=Object(Qe.b)(Ve),Ke=ze;window.store=ze,s.a.render(Object(p.jsx)(ke.a,{store:Ke,children:Object(p.jsx)(He,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},28:function(e,t,n){e.exports={message:"Message_message__344yk",avatar_column:"Message_avatar_column__2zt8r",image_wrapper:"Message_image_wrapper__hZ_0D",description_column:"Message_description_column__3Oxwf",description_container:"Message_description_container__gTpRZ",message_name:"Message_message_name__8VqpE",message_time:"Message_message_time__33VTF"}},66:function(e,t,n){e.exports={affair:"Affairs_affair__jGQnQ",affair_name:"Affairs_affair_name__1adBk"}},68:function(e,t,n){e.exports={superInput:"SuperInputText_superInput__2JSRB",errorInput:"SuperInputText_errorInput__229UA",error:"SuperInputText_error__tZ5Yr"}},69:function(e,t,n){e.exports={blue:"HW4_blue__1NG3p",column:"HW4_column__3uxMx",testSpanError:"HW4_testSpanError__3_zQg",myButton:"HW4_myButton__3xVCo"}},70:function(e,t,n){e.exports={default:"SuperButton_default__3Rnbc",red:"SuperButton_red__2wiMH","mui-button":"SuperButton_mui-button__3jkGN"}},71:function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__1eQa4",spanClassName:"SuperCheckbox_spanClassName__1RfSE"}},76:function(e,t,n){e.exports={App:"App_App__3ECjM"}},77:function(e,t,n){e.exports={root:"Error404_root__1d4e_"}},82:function(e,t,n){e.exports={range:"SuperRange_range__3TbCa"}}},[[112,1,2]]]);
//# sourceMappingURL=main.dc23ad87.chunk.js.map