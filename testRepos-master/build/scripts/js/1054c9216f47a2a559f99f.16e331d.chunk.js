(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{463:function(e,t,r){"use strict";r.d(t,"c",(function(){return getTeamReport})),r.d(t,"a",(function(){return getReports})),r.d(t,"b",(function(){return getReportsByUser})),r.d(t,"d",(function(){return updateReport}));var n=r(18),getTeamReport=function(e){return new Promise((function(t){n.a.get("/report/team",e).then((function(e){t(e)})).catch(console.warn)}))},getReports=function(e){return new Promise((function(t){n.a.get("/report/main",e).then((function(e){t(e)})).catch(console.warn)}))},getReportsByUser=function(e){return new Promise((function(t){n.a.get("/report/main/user",e).then((function(e){t(e)})).catch(console.warn)}))},updateReport=function(e,t){return new Promise((function(r,a){var o="/report/".concat(t||"new");n.a.put(o,e).then((function(e){r(e)})).catch(a)}))}},467:function(e,t,r){"use strict";var n=r(38),a=r.n(n),o=r(0),c=r.n(o),s=(r(244),r(1)),i=r.n(s),l=r(411),u=r(487),p=r(240),d=r(413),ListSelectorTable=function(e){var t=e.items,r=e.itemIdKey,n=e.itemNameKey,o=e.label,s=e.selectedValue,i=e.onChange,m=e.dkey,f=e.className,v=e.required,w=e.multiple,b=e.renderValue;return c.a.createElement(l.a,{className:f},o&&c.a.createElement(u.a,{shrink:!0,id:"demo-simple-select-helper-label"},o),c.a.createElement(d.a,a()({labelId:"demo-simple-select-helper-label",id:"demo-simple-select-helper",value:s,MenuProps:{classes:{paper:"ListSelectorTable-select"}},onChange:i},w?{multiple:!0}:{}),!v&&c.a.createElement(p.a,{value:"",dkey:m||"",className:"empty_select"},c.a.createElement("em",null,"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435")),t.map((function(e){return c.a.createElement(p.a,{value:e[r],key:e[r],dkey:m||""},b?b(e[n],e):e[n])}))))};ListSelectorTable.propTypes={dkey:i.a.string,renderValue:i.a.func,items:i.a.array.isRequired,itemIdKey:i.a.string.isRequired,itemNameKey:i.a.string.isRequired,onChange:i.a.func.isRequired,selectedValue:i.a.any.isRequired,label:i.a.string,className:i.a.string.isRequired,required:i.a.bool,multiple:i.a.bool},t.a=ListSelectorTable},468:function(e,t,r){"use strict";var n=r(27);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r(0)),o=(0,n(r(45)).default)(a.default.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckCircle");t.default=o},487:function(e,t,r){"use strict";var n=r(3),a=r(6),o=r(0),c=(r(1),r(8)),s=r(75),i=r(99),l=r(12),u=r(26),p=o.forwardRef((function(e,t){var r=e.children,l=e.classes,p=e.className,d=(e.color,e.component),m=void 0===d?"label":d,f=(e.disabled,e.error,e.filled,e.focused,e.required,Object(a.a)(e,["children","classes","className","color","component","disabled","error","filled","focused","required"])),v=Object(i.a)(),w=Object(s.a)({props:e,muiFormControl:v,states:["color","required","focused","disabled","error","filled"]});return o.createElement(m,Object(n.a)({className:Object(c.a)(l.root,l["color".concat(Object(u.a)(w.color||"primary"))],p,w.disabled&&l.disabled,w.error&&l.error,w.filled&&l.filled,w.focused&&l.focused,w.required&&l.required),ref:t},f),r,w.required&&o.createElement("span",{"aria-hidden":!0,className:Object(c.a)(l.asterisk,w.error&&l.error)},"\u2009","*"))})),d=Object(l.a)((function(e){return{root:Object(n.a)({color:e.palette.text.secondary},e.typography.body1,{lineHeight:1,padding:0,"&$focused":{color:e.palette.primary.main},"&$disabled":{color:e.palette.text.disabled},"&$error":{color:e.palette.error.main}}),colorSecondary:{"&$focused":{color:e.palette.secondary.main}},focused:{},disabled:{},error:{},filled:{},required:{},asterisk:{"&$error":{color:e.palette.error.main}}}}),{name:"MuiFormLabel"})(p),m=o.forwardRef((function(e,t){var r=e.classes,l=e.className,u=e.disableAnimation,p=void 0!==u&&u,m=(e.margin,e.shrink),f=(e.variant,Object(a.a)(e,["classes","className","disableAnimation","margin","shrink","variant"])),v=Object(i.a)(),w=m;"undefined"===typeof w&&v&&(w=v.filled||v.focused||v.adornedStart);var b=Object(s.a)({props:e,muiFormControl:v,states:["margin","variant"]});return o.createElement(d,Object(n.a)({"data-shrink":w,className:Object(c.a)(r.root,l,v&&r.formControl,!p&&r.animated,w&&r.shrink,"dense"===b.margin&&r.marginDense,{filled:r.filled,outlined:r.outlined}[b.variant]),classes:{focused:r.focused,disabled:r.disabled,error:r.error,required:r.required,asterisk:r.asterisk},ref:t},f))}));t.a=Object(l.a)((function(e){return{root:{display:"block",transformOrigin:"top left"},focused:{},disabled:{},error:{},required:{},asterisk:{},formControl:{position:"absolute",left:0,top:0,transform:"translate(0, 24px) scale(1)"},marginDense:{transform:"translate(0, 21px) scale(1)"},shrink:{transform:"translate(0, 1.5px) scale(0.75)",transformOrigin:"top left"},animated:{transition:e.transitions.create(["color","transform"],{duration:e.transitions.duration.shorter,easing:e.transitions.easing.easeOut})},filled:{zIndex:1,pointerEvents:"none",transform:"translate(12px, 20px) scale(1)","&$marginDense":{transform:"translate(12px, 17px) scale(1)"},"&$shrink":{transform:"translate(12px, 10px) scale(0.75)","&$marginDense":{transform:"translate(12px, 7px) scale(0.75)"}}},outlined:{zIndex:1,pointerEvents:"none",transform:"translate(14px, 20px) scale(1)","&$marginDense":{transform:"translate(14px, 12px) scale(1)"},"&$shrink":{transform:"translate(14px, -6px) scale(0.75)"}}}}),{name:"MuiInputLabel"})(m)},522:function(e,t,r){},523:function(e,t,r){},524:function(e,t,r){},525:function(e,t,r){},526:function(e,t,r){},550:function(e,t,r){"use strict";r.r(t);var n=r(17),a=r.n(n),o=r(89),c=r.n(o),s=r(30),i=r.n(s),l=r(7),u=r.n(l),p=r(0),d=r.n(p),m=r(1),f=r.n(m),v=r(43),w=(r(522),r(163)),b=r(463),y=r(412),h=(r(523),r(58)),E=r(88),k=r(467);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){u()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var x={day:"",vkInterview:"",vkSent:"",vkAnswered:"",otherAnswers:"",otherSent:"",hhInit:"",hhOtkl:"",money:"",channel:"",comment:""},prepareData=function(e){return _objectSpread(_objectSpread({},x),e)},ExcelRowInterviewReport_ExcelTableRowRow=function(e){var t=e.day,r=e.item,n=e.onSave,a=e.user,o=e.config,c=e.isViewer,s=Object(p.useState)(prepareData(r)),l=i()(s,2),u=l[0],m=l[1];Object(p.useEffect)((function(){m(prepareData(r))}),[r]);var verifyRowAccess=function(){if(c)return h.a.info("\u0422\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440"),!1;var e=!0;return o.hr&&o.hr!==a._id&&(e=!1),!(!e&&!window.confirm("\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b \u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0441\u0442\u0430\u0442\u044c \u0432\u0435\u0434\u0443\u0449\u0438\u043c \u0440\u0435\u043a\u0440\u0443\u0442\u0435\u0440\u043e\u043c \u0434\u0430\u043d\u043d\u043e\u0433\u043e \u043e\u0442\u0447\u0435\u0442\u0430"))},handleChangeInput=function(e){if(verifyRowAccess()){var r=e.target,a=r.value,o=r.getAttribute("dkey"),c=_objectSpread({},u),s=o.split(".");s.length>1?c[s[0]][s[1]]=a:c[o]=a,m(c),n(c,t)}},handleKeyUp=function(e){13===e.keyCode&&n(u,t)};return d.a.createElement("div",{className:"ExcelRowInterviewReport"},d.a.createElement("label",{className:"ExcelRowInterviewReport-input xs1 first_input"},d.a.createElement("input",{onKeyUp:handleKeyUp,type:"number",value:t,dkey:"vkInterview",onChange:handleChangeInput,disabled:!0})),d.a.createElement("label",{className:"ExcelRowInterviewReport-input xs1_5 "},d.a.createElement("input",{onKeyUp:handleKeyUp,type:"number",value:u.vkInterview,dkey:"vkInterview",onChange:handleChangeInput})),d.a.createElement("label",{className:"ExcelRowInterviewReport-input xs1_5"},d.a.createElement("input",{onKeyUp:handleKeyUp,type:"number",value:u.vkSent,dkey:"vkSent",onChange:handleChangeInput})),d.a.createElement("label",{className:"ExcelRowInterviewReport-input xs1_5"},d.a.createElement("input",{onKeyUp:handleKeyUp,type:"number",value:u.vkAnswered,dkey:"vkAnswered",onChange:handleChangeInput})),d.a.createElement("label",{className:"ExcelRowInterviewReport-input xs1_5"},d.a.createElement("input",{onKeyUp:handleKeyUp,type:"number",value:u.hhInit,dkey:"hhInit",onChange:handleChangeInput})),d.a.createElement("label",{className:"ExcelRowInterviewReport-input xs1_5"},d.a.createElement("input",{onKeyUp:handleKeyUp,type:"number",value:u.hhOtkl,dkey:"hhOtkl",onChange:handleChangeInput})),d.a.createElement("label",{className:"ExcelRowInterviewReport-input xs1_5"},d.a.createElement("input",{onKeyUp:handleKeyUp,type:"number",value:u.otherSent,dkey:"otherSent",onChange:handleChangeInput})),d.a.createElement("label",{className:"ExcelRowInterviewReport-input xs1_5"},d.a.createElement("input",{onKeyUp:handleKeyUp,type:"number",value:u.otherAnswers,dkey:"otherAnswers",onChange:handleChangeInput})),d.a.createElement("label",{className:"ExcelRowInterviewReport-input xs1_5"},d.a.createElement("input",{onKeyUp:handleKeyUp,type:"number",value:u.money,dkey:"money",onChange:handleChangeInput})),d.a.createElement("div",{className:"ExcelRowInterviewReport-input xs1_5"},d.a.createElement(k.a,{items:E.e,itemIdKey:"id",itemNameKey:"value",dkey:"channel",onChange:function(e,r){if(r&&r.props&&verifyRowAccess()){var a=r.props,o=a.dkey,c=a.value,s=_objectSpread({},u),i=o.split(".");i.length>1?s[i[0]][i[1]]=c:s[o]=c,m(s),n(s,t)}},selectedValue:u.channel||"",className:""})),d.a.createElement("div",{className:"ExcelRowInterviewReport-input xs5"},d.a.createElement(y.a,{dkey:"comment",onChange:handleChangeInput,onKeyUp:handleKeyUp,value:u.comment,"aria-label":"minimum height",rowsMax:4})))};ExcelRowInterviewReport_ExcelTableRowRow.propTypes={item:f.a.object,user:f.a.object,config:f.a.object,day:f.a.oneOfType([f.a.number,f.a.string]),onSave:f.a.func,isViewer:f.a.bool};var O=Object(v.b)((function(e){return{user:e.auth.user}}))(ExcelRowInterviewReport_ExcelTableRowRow),g=(r(524),function(e){var t=e.days,r=e.config,n=e.onSave,a=e.isViewer;return d.a.createElement("div",{className:"ExcelInterviewReport ExcelTables"},r&&d.a.createElement("div",{className:"ExcelTable-content afade"},t.map((function(e){return d.a.createElement(O,{day:e,config:r,item:r&&r.days?null===r||void 0===r?void 0:r.days[e]:{},key:e,isViewer:a,onSave:n})}))))});g.propTypes={days:f.a.array,config:f.a.object,onSave:f.a.func,isViewer:f.a.bool};var j=g,_=r(127),R=r(19),I=r(157),N=(r(525),r(468)),S=r.n(N),C=(r(526),{on:function(e,t){document.addEventListener(e,t)},dispatch:function(e,t){document.dispatchEvent(new CustomEvent(e,{detail:t}))},remove:function(e,t){document.removeEventListener(e,t)}}),RowState_RowState_RowState=function(e){var t=e.state,r=e.changeEvent,n=Object(p.useState)(t),a=i()(n,2),o=a[0],c=a[1];return Object(p.useEffect)((function(){var handleChangeState=function(e){var t=e.detail;c(t)};return r&&C.on(r,handleChangeState),function(){r&&C.remove(r,handleChangeState)}}),[r]),Object(p.useEffect)((function(){c(t)}),[t]),d.a.createElement("div",{className:"RowState"},"loading"===o&&d.a.createElement("div",{className:"RowState-loader"}),"saved"===o&&d.a.createElement("div",{className:"RowState-icon saved"},d.a.createElement(S.a,null)),"not_saved"===o&&d.a.createElement("div",{className:"RowState-icon RowState-not_saved"},d.a.createElement(S.a,null)))};RowState_RowState_RowState.propTypes={state:f.a.string,changeEvent:f.a.string};var K=RowState_RowState_RowState;function Interview_repport_ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Interview_repport_objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Interview_repport_ownKeys(Object(r),!0).forEach((function(t){u()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Interview_repport_ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var G=Object(I.a)(1800),P=(new Date).getFullYear(),prepareFoSave=function(e,t,r,n,a){var o=Interview_repport_objectSpread(Interview_repport_objectSpread({},e),{},{month:r,workGroup:n});return o.days=o.days||{},o.days[a]=t,o.year=o.year||P,o},Interview_repport_Interview=function(e){var t=e.workGroups,r=e.user,n=Object(p.useState)([]),o=i()(n,2),s=o[0],l=o[1],m=Object(p.useState)(null),f=i()(m,2),v=f[0],y=f[1],E=Object(p.useState)(function(e){var t={month:(new Date).getMonth(),workGroup:""};return window.location.hash?(console.warn("init filters",t),t.workGroup=window.location.hash.replace("#",""),t):(!t.workGroup&&e&&e[0]&&(t.workGroup=e[0]._id,window.location.hash=t.workGroup),t)}(t)),k=i()(E,2),x=k[0],O=k[1],g=Object(p.useState)(!1),I=i()(g,2),N=I[0],S=I[1],L=Boolean((r.permissions.FULL||r.permissions.GLOBAL&R.h.GLOBAL.RECRUITING_REPORTS)&&r._id!==x.user),q=Boolean(r.permissions.FULL||r.permissions.GLOBAL&R.h.GLOBAL.RECRUITING_REPORTS),D=Object(p.useRef)(v),T=Object(p.useRef)(!1),V=function(){var e=c()(a.a.mark((function _callee(){var e,t,r=arguments;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if((e=r.length>0&&void 0!==r[0]?r[0]:{}).workGroup){n.next=3;break}return n.abrupt("return");case 3:return n.next=5,Object(b.c)(e);case 5:t=n.sent,D.current=t,t.days=t.days||{},t.isViewer=L,y(t);case 10:case"end":return n.stop()}}),_callee)})));return function(){return e.apply(this,arguments)}}(),U=function(){var e=c()(a.a.mark((function _callee2(){var e;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(L){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,Object(w.a)();case 4:e=t.sent,l(e);case 6:case"end":return t.stop()}}),_callee2)})));return function(){return e.apply(this,arguments)}}();Object(p.useEffect)((function(){V({workGroup:x.workGroup||(t&&t[0]?t[0]._id:""),month:x.month||(new Date).getMonth(),year:P}),U()}),[]);var A=function(){var e=c()(a.a.mark((function _callee3(e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!N&&T.current){t.next=2;break}return t.abrupt("return");case 2:return S(!0),t.prev=3,t.next=6,Object(b.d)(e,v._id);case 6:T.current=!1,S(!1),t.next=16;break;case 10:t.prev=10,t.t0=t.catch(3),S(!1),T.current=!1,h.a.error(t.t0),console.error(t.t0);case 16:case"end":return t.stop()}}),_callee3,null,[[3,10]])})));return function(t){return e.apply(this,arguments)}}(),$=function(){var e=c()(a.a.mark((function _callee4(e,t){return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:T.current||C.dispatch("InterviewReport","not_saved"),T.current=!0,D.current=prepareFoSave(D.current,e,x.month,x.workGroup,t),G(x.month+x.workGroup,A,D.current);case 4:case"end":return r.stop()}}),_callee4)})));return function(t,r){return e.apply(this,arguments)}}(),handleChangeSelect=function(e,t){if(t&&t.props){var r=t.props,n=r.dkey,a=r.value;localStorage.setItem(n,a||""),"workGroup"===n&&(window.location.hash=a),O(Interview_repport_objectSpread(Interview_repport_objectSpread({},x),{},u()({},n,a))),V(Interview_repport_objectSpread(Interview_repport_objectSpread({},x),{},u()({},n,a)))}},F=N?"loading":T.current?"not_saved":"saved";return d.a.createElement("div",{className:"InterviewReport"},d.a.createElement("div",{className:"TableFilters InterviewReport-filters"},d.a.createElement("div",{className:"TableFilters-selectors"},d.a.createElement(_.a,{label:"\u041c\u0435\u0441\u044f\u0446",items:R.g,itemIdKey:"id",dkey:"month",itemNameKey:"value",onChange:handleChangeSelect,selectedValue:x.month||"",className:""}),d.a.createElement(_.a,{label:"\u0420\u0430\u0431\u043e\u0447\u0438\u0435 \u0433\u0440\u0443\u043f\u043f\u044b",items:t,itemIdKey:"_id",itemNameKey:"name",dkey:"workGroup",onChange:handleChangeSelect,selectedValue:x.workGroup||"",className:""}),q&&d.a.createElement(_.a,{label:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438",items:s,itemIdKey:"_id",itemNameKey:"fullName",dkey:"user",onChange:handleChangeSelect,selectedValue:x.user||"",className:""}),d.a.createElement("div",{className:"InterviewReport-loader",style:{position:"relative",width:"400"}},d.a.createElement("div",null,"\u041f\u043b\u0430\u043d \u0437\u0430 \u043c\u0435\u0441\u044f\u0446: ",v&&v.plan),d.a.createElement("div",null,"\u041d\u0430\u043d\u044f\u0442\u043e: ",v&&v.planCompleted),d.a.createElement(K,{state:F,changeEvent:"InterviewReport"})))),d.a.createElement("div",{className:"ExcelInterviewReport-header"},d.a.createElement("div",{className:"ExcelInterviewReport-col xs1 first_input"},"\u0414\u0435\u043d\u044c"),d.a.createElement("div",{className:"ExcelInterviewReport-col xs1_5"},"\u0412\u041a \u0438\u043d\u0442\u0435\u0440\u0432\u044c\u044e"),d.a.createElement("div",{className:"ExcelInterviewReport-col xs1_5"},"\u0412\u041a \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u043b\u0438"),d.a.createElement("div",{className:"ExcelInterviewReport-col xs1_5"},"\u0412\u041a \u043e\u0442\u0432\u0435\u0442\u0438\u043b\u0438"),d.a.createElement("div",{className:"ExcelInterviewReport-col xs1_5"},"\u0425\u0425 \u0418\u043d\u0438\u0442"),d.a.createElement("div",{className:"ExcelInterviewReport-col xs1_5"},"\u0425\u0425 \u043e\u0442\u043a\u043b"),d.a.createElement("div",{className:"ExcelInterviewReport-col xs1_5"},"\u041f\u0440\u043e\u0447\u0438\u0435 \u0437\u0430\u044f\u0432\u043a\u0438"),d.a.createElement("div",{className:"ExcelInterviewReport-col xs1_5"},"\u041f\u0440\u043e\u0447\u0438\u0435 \u043e\u0442\u0432\u0435\u0442\u044b"),d.a.createElement("div",{className:"ExcelInterviewReport-col xs1_5"},"\u0420\u0430\u0441\u0445\u043e\u0434\u044b"),d.a.createElement("div",{className:"ExcelInterviewReport-col xs1_5"},"\u041a\u0430\u043d\u0430\u043b"),d.a.createElement("div",{className:"ExcelInterviewReport-col xs5"},"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438")),d.a.createElement(j,{days:R.e,config:v,isViewer:L,onSave:$}))};Interview_repport_Interview.propTypes={workGroups:f.a.array,user:f.a.object};t.default=Object(v.b)((function(e){return{user:e.auth.user,workGroups:e.app.workGroups}}))(Interview_repport_Interview)}}]);