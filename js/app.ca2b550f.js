(function(t){function e(e){for(var a,s,c=e[0],l=e[1],r=e[2],u=0,f=[];u<c.length;u++)s=c[u],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&f.push(o[s][0]),o[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);d&&d(e);while(f.length)f.shift()();return i.push.apply(i,r||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,c=1;c<n.length;c++){var l=n[c];0!==o[l]&&(a=!1)}a&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},o={app:0},i=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var r=0;r<c.length;r++)e(c[r]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"0367":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"header"},[n("div",{staticClass:"header__container"},[n("div",{staticClass:"header__btn"},[n("router-link",{attrs:{to:"/contact-book/contact/"+t.lastId}},[n("button",{directives:[{name:"show",rawName:"v-show",value:!t.isNewContact,expression:"!isNewContact"}],staticClass:"new",on:{click:t.newContact}},[t._v("+ New contact")])])],1),t._m(0)])]),n("router-view")],1)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header__title"},[n("h1",[t._v("CONTACT BOOK")])])}],s={computed:{lastId:function(){return this.$store.getters.lastId},isNewContact:function(){return this.$store.getters.isNewContact}},methods:{newContact:function(){this.$store.dispatch("newContact")}}},c=s,l=(n("034f"),n("2877")),r=Object(l["a"])(c,o,i,!1,null,null,null),d=r.exports,u=(n("b0c0"),n("8c4f")),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},t._l(t.contacts,(function(e){return n("div",{key:e.name,staticClass:"container__element contact"},[n("div",{staticClass:"container__element info"},[n("div",{staticClass:"link"},[n("router-link",{staticClass:"link",attrs:{to:"/contact-book/contact/"+e.id}},[n("h3",{on:{click:t.setEditingFalse}},[t._v(t._s(e.name))])])],1),n("button",{staticClass:"btn delete",on:{click:function(n){return t.openModal(e.id)}}},[t._v("X")]),n("add-Ask-Modal",{directives:[{name:"show",rawName:"v-show",value:t.deleteModal,expression:"deleteModal"}],attrs:{modal:2},on:{close:t.closeModal,deleteContact:t.deleteContact}})],1)])})),0)},v=[],p=(n("c975"),n("a434"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"modal"}},[n("div",{staticClass:"modal-mask"},[n("div",{staticClass:"modal-wrapper"},[n("div",{staticClass:"modal-container"},[n("div",{staticClass:"modal-header"},[t._t("header",[t._v(" "+t._s(t.message[t.modal])+" "),n("button",{staticClass:"modal-btn no",on:{click:t.no}},[t._v(" No ")]),n("button",{staticClass:"modal-btn yes",on:{click:function(e){return t.yes(t.modal)}}},[t._v(" Yes ")])])],2)])])])])}),h=[],m={props:["modal"],data:function(){return{message:["Do you realy want to delete this field?","Do you realy want to cancel contact changes?","Do you realy want to delete this contact?"]}},methods:{no:function(){this.$emit("close")},yes:function(t){0===t&&this.$emit("deleteField"),1===t&&this.$emit("cancel"),2===t&&this.$emit("deleteContact")}}},_=m,b=(n("e580"),Object(l["a"])(_,p,h,!1,null,null,null)),C=b.exports,y={components:{addAskModal:C},data:function(){return{deleteModal:!1,contactId:""}},computed:{contacts:function(){return this.$store.getters.contacts}},methods:{setEditingFalse:function(){this.$store.dispatch("setEditingFalse")},openModal:function(t){this.contactId=t,this.deleteModal=!0},closeModal:function(){this.deleteModal=!1},deleteContact:function(){var t=this.$store.getters.contactById(this.contactId),e=this.contacts.indexOf(t);this.contacts.splice(e,1),this.deleteModal=!1}}},w=y,g=(n("f6f6"),Object(l["a"])(w,f,v,!1,null,null,null)),k=g.exports,M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[void 0!==t.contact?n("div",{staticClass:"container__box"},[n("div",{staticClass:"container__element"},[n("div",{staticClass:"container__col name"},[t.edit?n("label",[t._v("Name:")]):t._e()]),n("div",{staticClass:"container__col"},[t.edit?n("input",{directives:[{name:"model",rawName:"v-model",value:t.contact.name,expression:"contact.name"}],attrs:{type:"text"},domProps:{value:t.contact.name},on:{input:function(e){e.target.composing||t.$set(t.contact,"name",e.target.value)}}}):n("h2",[t._v(t._s(t.contact.name))])])]),n("hr"),t._l(t.contact.fields,(function(e){return n("div",{key:e.length,staticClass:"container__element"},[n("div",{staticClass:"container__col name"},[t.edit?n("select",{directives:[{name:"model",rawName:"v-model",value:e.type,expression:"field.type"}],on:{change:function(n){var a=Array.prototype.filter.call(n.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(e,"type",n.target.multiple?a:a[0])}}},[n("option",{attrs:{value:"Phone"}},[t._v("Phone")]),n("option",{attrs:{value:"E-mail"}},[t._v("E-mail")]),n("option",{attrs:{value:"Website"}},[t._v("Website")])]):n("label",[t._v(t._s(e.type)+":")])]),n("div",{staticClass:"container__col"},[t.edit?n("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"field.value"}],attrs:{type:"text"},domProps:{value:e.value},on:{input:function(n){n.target.composing||t.$set(e,"value",n.target.value)}}}):n("h3",[t._v(t._s(e.value))])]),n("div",{staticClass:"container__col extra"},[t.edit?n("button",{staticClass:"btn edit undo",attrs:{title:"Cancel this field changes"},on:{click:function(n){t.undo(t.contact.fields.indexOf(e))}}},[t._v("Undo")]):t._e(),t.edit?n("button",{staticClass:"btn delete",attrs:{title:"Delete this field"},on:{click:function(n){t.openModal(0,t.contact.fields.indexOf(e))}}},[t._v("X")]):t._e(),n("add-Ask-Modal",{directives:[{name:"show",rawName:"v-show",value:t.deleteModal,expression:"deleteModal"}],attrs:{modal:0},on:{close:function(e){return t.closeModal(0)},deleteField:t.deleteField}})],1)])})),n("div",{staticClass:"container__element"},[n("div",{staticClass:"container__btn"},[t.edit?n("button",{staticClass:"btn save",on:{click:t.newField}},[t._v("New field")]):t._e(),t.edit?n("button",{staticClass:"btn save",attrs:{disabled:t.emptyFields},on:{mousedown:function(e){return t.editMode()}}},[t._v("Save")]):t._e(),t.edit?t._e():n("button",{staticClass:"btn edit",on:{click:t.editMode}},[t._v("Edit")]),t.edit?n("button",{staticClass:"btn back",on:{click:function(e){return t.openModal(1)}}},[t._v("Cancel")]):t._e(),n("add-Ask-Modal",{directives:[{name:"show",rawName:"v-show",value:t.cancelModal,expression:"cancelModal"}],attrs:{modal:1},on:{close:function(e){return t.closeModal(1)},cancel:t.cancel}}),n("router-link",{attrs:{to:"/contact-book/"}},[t.edit?t._e():n("button",{staticClass:"btn back"},[t._v("Back")])])],1)])],2):n("div",{staticClass:"container__box"},[n("h1",[t._v("Contact not found")]),n("router-link",{attrs:{to:"/contact-book/"}},[t.edit?t._e():n("button",{staticClass:"btn book"},[t._v("Back to contact book")])])],1)])},N=[],x=(n("45fc"),{props:["id"],components:{addAskModal:C},data:function(){return{legacy:{name:"",fields:[]},cancelModal:!1,deleteModal:!1,fieldIndex:""}},methods:{newField:function(){this.contact.fields.push({}),this.legacy.fields.push({type:"",value:""})},editMode:function(){this.$store.dispatch("editing"),this.legacy=JSON.parse(JSON.stringify(this.contact)),this.isNewContact&&this.$store.dispatch("setIsNewContact",!1)},deleteField:function(){this.contact.fields.splice(this.fieldIndex,1),this.deleteModal=!1},undo:function(t){this.contact.fields[t].type=this.legacy.fields[t].type,this.contact.fields[t].value=this.legacy.fields[t].value},cancel:function(){if(this.isNewContact){var t=this.$store.getters.contacts.indexOf(this.contact);this.contacts.splice(t,1),this.$router.push("/contact-book/"),this.$store.dispatch("setIsNewContact",!1),this.$store.dispatch("returnLastId")}else this.$store.dispatch("editing"),this.$store.dispatch("setContact",{name:this.legacy.name,fields:this.legacy.fields,id:this.id});this.cancelModal=!1},openModal:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;0===t&&(this.fieldIndex=e,this.deleteModal=!0),1===t&&(this.cancelModal=!0)},closeModal:function(t){0===t&&(this.deleteModal=!1),1===t&&(this.cancelModal=!1)}},computed:{contact:function(){return this.$store.getters.contactById(this.id)},contacts:function(){return this.$store.getters.contacts},edit:function(){return this.$store.getters.editing},isNewContact:function(){return this.$store.getters.isNewContact},emptyFields:function(){var t=this.contact.fields.some((function(t){return void 0===t.type||void 0===t.value||""===t.value})),e=""===this.contact.name;return e||t}}}),$=x,I=(n("610c"),Object(l["a"])($,M,N,!1,null,null,null)),O=I.exports;a["a"].use(u["a"]);var E=[{path:"/contact-book/",name:"book",component:k},{path:"/contact-book/contact/:id",props:!0,name:"contact",component:O}],P=new u["a"]({mode:"history",routes:E,scrollBehavior:function(t,e,n){return"contact"===t.name?{x:0,y:0}:n}}),F=P,j=(n("7db0"),n("2f62"));a["a"].use(j["a"]);var S=new j["a"].Store({state:{contacts:[{name:"Anna Lapina",fields:[{type:"Phone",value:"0123456789"},{type:"E-mail",value:"annalap@test.com"},{type:"Website",value:"annalap.com"}],id:0},{name:"Richard Nixon",fields:[{type:"Phone",value:"0987653241"},{type:"Phone",value:"0975108574"},{type:"E-mail",value:"nixonthebestpresident@test.com"},{type:"Website",value:"nixonthebestpresident.com"}],id:1},{name:"Dart Vader",fields:[{type:"Phone",value:"325252342"},{type:"E-mail",value:"anakin@test.com"},{type:"Website",value:"deathstarmakespiupiu.com"},{type:"Website",value:"imyourfuther.com"}],id:2},{name:"Obi-Wan Kenobi",fields:[{type:"Phone",value:"9257288925"},{type:"E-mail",value:"kenobi@test.com"},{type:"Website",value:"hellothere.com"}],id:3}],editing:!1,isNewContact:!1,lastId:3},mutations:{newContact:function(t){t.lastId+=1,t.contacts.push({name:"New "+t.lastId,fields:[{}],id:t.lastId}),t.editing=!0,t.isNewContact=!0},setContact:function(t,e){var n=e.name,a=e.fields,o=e.id,i=t.contacts.find((function(t){if(t.id===+o)return t}));i.name=n,i.fields=a},setIsNewContact:function(t,e){t.isNewContact=e},editing:function(t){t.editing=!t.editing},setEditingFalse:function(t){t.editing=!1},returnLastId:function(t){t.lastId-=1}},actions:{newContact:function(t){var e=t.commit;e("newContact")},setContact:function(t,e){var n=t.commit;n("setContact",e)},setIsNewContact:function(t,e){var n=t.commit;n("setIsNewContact",e)},editing:function(t){var e=t.commit;e("editing")},setEditingFalse:function(t){var e=t.commit;e("setEditingFalse")},returnLastId:function(t){var e=t.commit;e("returnLastId")}},getters:{contacts:function(t){return t.contacts.sort((function(t,e){var n=t.name.toLowerCase(),a=e.name.toLowerCase();return n<a?-1:n>a?1:0}))},contactById:function(t){return function(e){return t.contacts.find((function(t){if(t.id===+e)return t}))}},lastId:function(t){return t.lastId},editing:function(t){return t.editing},isNewContact:function(t){return t.isNewContact}}});a["a"].config.productionTip=!1,new a["a"]({router:F,store:S,render:function(t){return t(d)}}).$mount("#app")},"610c":function(t,e,n){"use strict";n("0367")},"85ec":function(t,e,n){},"9e95":function(t,e,n){},ced7:function(t,e,n){},e580:function(t,e,n){"use strict";n("ced7")},f6f6:function(t,e,n){"use strict";n("9e95")}});
//# sourceMappingURL=app.ca2b550f.js.map