(this["webpackJsonpreact-clarification-converter"]=this["webpackJsonpreact-clarification-converter"]||[]).push([[0],{10:function(e,a,t){e.exports=t(22)},15:function(e,a,t){},16:function(e,a,t){},18:function(e,a,t){},22:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(3),l=t.n(r),o=t(9),i=t(7);t(15);function s(e){var a=e.query,t=Object(n.useRef)(),r=Object(n.useRef)();return c.a.createElement(c.a.Fragment,null,c.a.createElement("h4",{className:"p-1"},"Non-Technical Clarification ",a.id),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},c.a.createElement("div",{className:"input-group mb-3"},c.a.createElement("div",{className:"input-group-prepend"},c.a.createElement("span",{className:"input-group-text"},"Clarification")),c.a.createElement("textarea",{ref:t,className:"form-control",disabled:"true","aria-label":"Query"},a.clarification)),c.a.createElement("div",{className:"input-group mb-3"},c.a.createElement("div",{className:"input-group-prepend"},c.a.createElement("span",{className:"input-group-text"},"Response")),c.a.createElement("textarea",{ref:r,className:"form-control",disabled:"true","aria-label":"response"},a.response)),c.a.createElement("hr",null))))}function u(e){return e.clarification.map((function(e){return c.a.createElement(s,{key:e.id,query:e})}))}t(16);function m(e){var a=e.query;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{class:"col clarification-container mb-3 p-3"},c.a.createElement("h4",null,"Non-Technical Clarification ",a.id),c.a.createElement("div",{class:"clarification"},a.clarification),c.a.createElement("div",{class:"response"},a.response)))}function p(e){return e.clarification.map((function(e){return c.a.createElement(m,{query:e})}))}var f=t(4);t(17),t(18);var E=function(){var e=Object(n.useState)([]),a=Object(i.a)(e,2),t=a[0],r=a[1],l=Object(n.useRef)(),s=Object(n.useRef)();Object(n.useEffect)((function(){var e=JSON.parse(sessionStorage.getItem("react-clarification-converter.clarifications"));e&&r(e)}),[]),Object(n.useEffect)((function(){sessionStorage.setItem("react-clarification-converter.clarifications",JSON.stringify(t))}),[t]);var m=c.a.useState(!1),E=Object(i.a)(m,2),d=E[0],b=E[1],v=function(){b(!1)},N=function(){document.getElementById("response-textarea").select(),document.execCommand("copy")};return c.a.createElement(c.a.Fragment,null,c.a.createElement("main",{className:"text-center container"},c.a.createElement("h1",{className:"banner p-3"},"Enter Fields"),c.a.createElement("hr",null),c.a.createElement(u,{clarification:t}),c.a.createElement("hr",null),c.a.createElement("h4",{className:"p-1"},"Add Non-Technical Clarification "),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},c.a.createElement("div",{className:"input-group mb-3"},c.a.createElement("div",{className:"input-group-prepend"},c.a.createElement("span",{className:"input-group-text"},"Clarification")),c.a.createElement("textarea",{ref:l,className:"form-control","aria-label":"Query"})),c.a.createElement("div",{className:"input-group mb-3"},c.a.createElement("div",{className:"input-group-prepend"},c.a.createElement("span",{className:"input-group-text"},"Response")),c.a.createElement("textarea",{ref:s,className:"form-control","aria-label":"response"})))),c.a.createElement("button",{onClick:function(e){r([]),l.current.value=null,s.current.value=null},type:"button",className:"btn btn-danger m-3"},"Reset"),c.a.createElement("button",{onClick:function(e){var a=l.current.value,n=s.current.value;""!==a&&""!==s&&(r((function(e){return[].concat(Object(o.a)(e),[{id:t.length+1,clarification:a,response:n}])})),l.current.value=null,s.current.value=null)},type:"button",className:"btn btn-primary m-3"},"Add"),c.a.createElement("button",{onClick:function(){b(!0)},type:"button",className:"btn btn-secondary m-3"},"Done"),c.a.createElement(f.a,{show:d,onHide:v,scrollable:!0},c.a.createElement(f.a.Header,null,c.a.createElement(f.a.Title,null,"Clarification Response")),c.a.createElement(f.a.Body,null,c.a.createElement(p,{clarification:t}),c.a.createElement("textarea",{id:"response-textarea",className:"form-control"})),c.a.createElement(f.a.Footer,null,c.a.createElement("button",{onClick:v,className:"btn btn-secondary"},"Cancel"),c.a.createElement("button",{onClick:function(){var e="";t.forEach((function(a){e+="* ".concat(a.clarification,"\n{color:#14892c}Clarification: ").concat(a.response,"\n{color}\n")})),document.getElementById("response-textarea").value=e,N()},type:"button",className:"btn btn-info m-3"},"Email"),c.a.createElement("button",{onClick:function(){var e="Hello Team!\n\n*{color:#3F50B1}Clarification:{color}*",a=1;t.forEach((function(t){e+="\n{panel:title=Non-Technical Clarification ".concat(a.toString(),"  } \n").concat(t.clarification,"\n{color:#14892c}Clarification: ").concat(t.response,"\n{color} \n{panel}\n"),a++})),e+="\n_*{color:#3F50B1}Thank you{color}*_",document.getElementById("response-textarea").value=e,N()},className:"btn btn-primary"},"Copy")))))};l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(E,null)),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.a6179633.chunk.js.map