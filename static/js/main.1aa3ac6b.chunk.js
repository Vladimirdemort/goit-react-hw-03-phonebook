(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(9),s=n.n(r),o=(n(15),n(3)),i=n(4),l=n(6),u=n(5),b=(n(16),n(20)),m=n(10),j=n(7),d=n.n(j),f=n(0),h=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.contactSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t.writeContact=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(m.a)({},a,c))},t.reset=function(){t.setState({name:"",number:""})},t}return Object(i.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("form",{className:d.a.inputForm,onSubmit:this.contactSubmit,children:[Object(f.jsxs)("label",{children:[" ","Name",Object(f.jsx)("input",{className:d.a.inputArea,type:"text",name:"name",value:this.state.name,onChange:this.writeContact,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(f.jsxs)("label",{children:[" ","Number",Object(f.jsx)("input",{className:d.a.inputArea,type:"tel",name:"number",value:this.state.number,onChange:this.writeContact,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(f.jsx)("button",{type:"submit",children:"Add Contact"})]})}}]),n}(c.a.Component),p=h,_=n(2),O=n.n(_);function v(t){var e=t.contactData,n=t.onContactDelete;return Object(f.jsx)("ul",{children:e.map((function(t){return Object(f.jsxs)("li",{className:O.a.contacts__item,children:[Object(f.jsx)("p",{className:O.a.contacts__name,children:t.name}),Object(f.jsx)("span",{className:O.a.contacts__number,children:t.number}),Object(f.jsx)("button",{className:O.a.contacts__btn,type:"button",onClick:function(){return n(t.id)},children:"Delete"})]},t.id)}))})}function x(t){var e=t.title,n=t.children;return Object(f.jsxs)("section",{children:[Object(f.jsx)("h1",{children:e}),n]})}var g=function(t){var e=t.filterValue,n=t.filter;return Object(f.jsx)("div",{children:Object(f.jsxs)("label",{children:[" ","Find contact by name",Object(f.jsx)("input",{type:"text",name:"filter",value:e,onChange:function(t){n(t.target)}})]})})};console.dir(Object(b.a)());var S=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.formSubmit=function(e){var n=e.name;if(t.state.contacts.some((function(t){return t.name===n})))alert("".concat(n," is already in contacts"));else{e.id=Object(b.a)();var a=t.state.contacts;a.push(e),console.log(e),t.setState({contacts:a}),localStorage.setItem("contacts",JSON.stringify(t.state.contacts))}},t.nameFilter=function(e){t.setState({filter:e.value})},t.filteredList=function(){var e=t.state,n=e.contacts,a=e.filter.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(a)}))},t.deleteItem=function(e){console.log(e),t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=JSON.parse(localStorage.getItem("contacts"));this.setState({contacts:t}),console.log(t)}},{key:"componentDidUpdate",value:function(t,e){console.log(e),this.state.contacts!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.filteredList();return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(x,{title:"Phonebok",children:Object(f.jsx)(p,{onSubmit:this.formSubmit})}),Object(f.jsxs)(x,{title:"Contacts",children:[Object(f.jsx)(g,{filter:this.nameFilter,filterValue:this.state.filter}),Object(f.jsx)(v,{contactData:t,onContactDelete:this.deleteItem})]})]})}}]),n}(c.a.Component),C=S;s.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(C,{})}),document.getElementById("root"))},2:function(t,e,n){t.exports={contacts__item:"Contacts_contacts__item__3RV30",contacts__name:"Contacts_contacts__name__7ST15",contacts__number:"Contacts_contacts__number__1-wyG",contacts__btn:"Contacts_contacts__btn__3HDF4"}},7:function(t,e,n){t.exports={inputForm:"InputArea_inputForm__1SXFK",inputArea:"InputArea_inputArea__3sBG_"}}},[[18,1,2]]]);
//# sourceMappingURL=main.1aa3ac6b.chunk.js.map