(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ca72"],{"0bfb":function(t,e,n){"use strict";var r=n("cb7c");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"0e71":function(t,e,n){},"11e9":function(t,e,n){var r=n("52a7"),o=n("4630"),a=n("6821"),i=n("6a99"),c=n("69a8"),s=n("c69a"),u=Object.getOwnPropertyDescriptor;e.f=n("9e1e")?u:function(t,e){if(t=a(t),e=i(e,!0),s)try{return u(t,e)}catch(t){}if(c(t,e))return o(!r.f.call(t,e),t[e])}},"2e5f":function(t,e,n){"use strict";var r=n("0e71"),o=n.n(r);o.a},3846:function(t,e,n){n("9e1e")&&"g"!=/./g.flags&&n("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:n("0bfb")})},"52a7":function(t,e){e.f={}.propertyIsEnumerable},"5dbc":function(t,e,n){var r=n("d3f4"),o=n("8b97").set;t.exports=function(t,e,n){var a,i=e.constructor;return i!==n&&"function"==typeof i&&(a=i.prototype)!==n.prototype&&r(a)&&o&&o(t,a),t}},"6b54":function(t,e,n){"use strict";n("3846");var r=n("cb7c"),o=n("0bfb"),a=n("9e1e"),i="toString",c=/./[i],s=function(t){n("2aba")(RegExp.prototype,i,t,!0)};n("79e5")(function(){return"/a/b"!=c.call({source:"a",flags:"b"})})?s(function(){var t=r(this);return"/".concat(t.source,"/","flags"in t?t.flags:!a&&t instanceof RegExp?o.call(t):void 0)}):c.name!=i&&s(function(){return c.call(this)})},"8b97":function(t,e,n){var r=n("d3f4"),o=n("cb7c"),a=function(t,e){if(o(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{r=n("9b43")(Function.call,n("11e9").f(Object.prototype,"__proto__").set,2),r(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,n){return a(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:a}},9093:function(t,e,n){var r=n("ce10"),o=n("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},c5f6:function(t,e,n){"use strict";var r=n("7726"),o=n("69a8"),a=n("2d95"),i=n("5dbc"),c=n("6a99"),s=n("79e5"),u=n("9093").f,l=n("11e9").f,f=n("86cc").f,p=n("aa77").trim,d="Number",g=r[d],v=g,m=g.prototype,b=a(n("2aeb")(m))==d,h="trim"in String.prototype,_=function(t){var e=c(t,!1);if("string"==typeof e&&e.length>2){e=h?e.trim():p(e,3);var n,r,o,a=e.charCodeAt(0);if(43===a||45===a){if(n=e.charCodeAt(2),88===n||120===n)return NaN}else if(48===a){switch(e.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+e}for(var i,s=e.slice(2),u=0,l=s.length;u<l;u++)if(i=s.charCodeAt(u),i<48||i>o)return NaN;return parseInt(s,r)}}return+e};if(!g(" 0o1")||!g("0b1")||g("+0x1")){g=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof g&&(b?s(function(){m.valueOf.call(n)}):a(n)!=d)?i(new v(_(e)),n,g):_(e)};for(var y,E=n("9e1e")?u(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),I=0;E.length>I;I++)o(v,y=E[I])&&!o(g,y)&&f(g,y,l(v,y));g.prototype=m,m.constructor=g,n("2aba")(r,d,g)}},dc02:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-row",[n("b-col",{attrs:{cols:"12",xl:"12"}},[n("transition",{attrs:{name:"slide"}},[n("b-card",{attrs:{header:t.caption}},[n("b-table",{attrs:{hover:t.hover,striped:t.striped,bordered:t.bordered,small:t.small,fixed:t.fixed,responsive:"sm",items:t.items,fields:t.fields,"current-page":t.currentPage,"per-page":t.perPage},scopedSlots:t._u([{key:"cedula",fn:function(e){return[n("strong",[t._v(t._s(e.item.cedula))])]}},{key:"usuario",fn:function(e){return[n("strong",[t._v(t._s(e.item.usuario))])]}},{key:"nombre",fn:function(e){return[n("strong",[t._v(t._s(e.item.nombre)+" "+t._s(e.item.apellido))])]}},{key:"rol",fn:function(e){return[n("select",{directives:[{name:"model",rawName:"v-model",value:e.item.rol,expression:"data.item.rol"}],staticClass:"form-control",on:{change:[function(n){var r=Array.prototype.filter.call(n.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.$set(e.item,"rol",n.target.multiple?r:r[0])},function(n){t.setRol(e.item.id,e.item.rol)}]}},[n("option",{attrs:{value:"ADMINISTRADOR"}},[t._v("ADMINISTRADOR")]),n("option",{attrs:{value:"RECEPCION"}},[t._v("RECEPCIONISTA")]),n("option",{attrs:{value:"OPERADOR_LABORATORIO"}},[t._v("OPERADOR DE LABORATORIO")]),n("option",{attrs:{value:"OPERADOR_BALISTICA"}},[t._v("OPERADOR DE BALISTICA")]),n("option",{attrs:{value:"OPERADOR_HECHOS"}},[t._v("OPERADOR DE RECONSTRUCCIÓN DE HECHOS")])])]}},{key:"acción",fn:function(e){return[n("b-button",{staticClass:"btn-pill",attrs:{variant:"success"},on:{click:function(n){t.goToUpdate(e.item.id)}}},[t._v("Actualizar")]),n("b-button",{staticClass:"btn-pill",attrs:{variant:"danger"},on:{click:function(n){t.deleteUser(e.item.id)}}},[t._v("\n            Suspender\n          ")])]}}])}),n("nav",[n("b-pagination",{attrs:{size:"sm","total-rows":t.getRowCount(t.items),"per-page":t.perPage,"prev-text":"Prev","next-text":"Next","hide-goto-end-buttons":""},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)],1)],1)],1)],1)},o=[],a=(n("c5f6"),n("6b54"),n("db49")),i=n("1940"),c=n.n(i),s={name:"Usuarios",data:function(){return{items:[],fields:[{key:"cedula"},{key:"usuario"},{key:"nombre"},{key:"rol"},{key:"acción"}],currentPage:1,perPage:15,totalRows:0}},props:{caption:{type:String,default:"Lista de Usuarios"},hover:{type:Boolean,default:!0},striped:{type:Boolean,default:!0},bordered:{type:Boolean,default:!1},small:{type:Boolean,default:!1},fixed:{type:Boolean,default:!1}},mounted:function(){axios.defaults.headers.common["authorization"]=localStorage.getItem("token"),this.getUsers()},methods:{getBadge:function(t){return"Active"===t?"success":"Inactive"===t?"secondary":"Pending"===t?"warning":"Banned"===t?"danger":"primary"},getRowCount:function(t){return t.length},userLink:function(t){return"users/".concat(t.toString())},rowClicked:function(t){var e=this.userLink(t.id);this.$router.push({path:e})},goToUpdate:function(t){this.$router.push({name:"userUpdate",params:{id:t}})},getUsers:function(){var t=this;Event.$emit("loading"),axios.get("".concat(a["a"].API_URL,"/users?limit=1")).then(function(e){axios.get("".concat(a["a"].API_URL,"/users?limit=").concat(Number(e.data.total)+1)).then(function(e){t.items=e.data.data,Event.$emit("stopLoading")}).catch(function(t){console.dir(t),Event.$emit("stopLoading")})})},deleteUser:function(t){var e=this;c()({title:"¿Estás seguro que desea suspender el usuario?",text:"Esta acción no se podrá deshacer",icon:"warning",buttons:!0,dangerMode:!0}).then(function(n){n&&axios.delete("".concat(a["a"].API_URL,"/users/").concat(t)).then(function(t){c()({title:"Listo",text:"Usuario suspendido correctamente",icon:"success"}),e.getUsers()})})},setRol:function(t,e){axios.put("".concat(a["a"].API_URL,"/users/").concat(t),{rol:e}).then(function(t){c()({title:"Usuario actualizado correctamente",text:"El usuario ".concat(t.data.usuario," se le ha asignado el rol ").concat(e),icon:"success"})})}}},u=s,l=(n("2e5f"),n("2877")),f=Object(l["a"])(u,r,o,!1,null,"cf0ea638",null);e["default"]=f.exports}}]);
//# sourceMappingURL=chunk-ca72.4bebaf14.js.map