(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1eef"],{"0bfb":function(e,t,n){"use strict";var o=n("cb7c");e.exports=function(){var e=o(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},3846:function(e,t,n){n("9e1e")&&"g"!=/./g.flags&&n("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:n("0bfb")})},"41b8":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-row",[n("b-col",{attrs:{cols:"12",xl:"12"}},[n("transition",{attrs:{name:"slide"}},[n("b-card",{attrs:{header:e.caption}},[n("b-table",{attrs:{hover:e.hover,striped:e.striped,bordered:e.bordered,small:e.small,fixed:e.fixed,responsive:"sm",items:e.items,fields:e.fields,"current-page":e.currentPage,"per-page":e.perPage},scopedSlots:e._u([{key:"id",fn:function(t){return[n("strong",[e._v(e._s(t.item.id))])]}},{key:"tipo",fn:function(t){return[n("strong",[e._v(e._s(t.item.tipo_recepcion))])]}},{key:"usuario",fn:function(t){return[n("strong",[e._v(e._s(t.item.Usuario.nombre)+" "+e._s(t.item.Usuario.apellido))])]}},{key:"departamento",fn:function(t){return[n("strong",[e._v(e._s(t.item.departamento))])]}},{key:"descripción",fn:function(t){return[n("strong",[e._v(e._s(e._f("textShort")(t.item.descripcion)))])]}},{key:"fecha",fn:function(t){return[e._v("\n          "+e._s(e._f("listDate")(t.item.f_creacion))+"\n        ")]}},{key:"estado",fn:function(t){return[n("b-badge",{directives:[{name:"b-popover",rawName:"v-b-popover.hover",value:"Indica si la cronologia ha sido compleada, o se encuentra en proceso de revisión.",expression:"'Indica si la cronologia ha sido compleada, o se encuentra en proceso de revisión.'",modifiers:{hover:!0}}],attrs:{title:"Estado"}},[e._v(e._s(t.item.estado))])]}},{key:"acción",fn:function(t){return[(e.isDepartament(t.item.departamento)||"ADMINISTRADOR"==e.user.rol)&&e.isEnabled(t.item.f_creacion)&&"COMPLETADO"!=t.item.estado?n("b-button",{staticClass:"btn-pill",attrs:{variant:"primary"},on:{click:function(n){e.goToEdit(t.item.departamento,t.item.id)}}},[e._v("\n            Actualizar\n          ")]):e._e(),"ADMINISTRADOR"!=e.user.rol&&"RECEPCION"!=e.user.rol||!e.isEnabled(t.item.f_creacion)||"COMPLETADO"==t.item.estado?e._e():n("b-button",{staticClass:"btn-pill",attrs:{variant:"success"},on:{click:function(n){e.goToEditReception(t.item.id)}}},[e._v("\n            Editar\n          ")])]}}])}),n("nav",[n("b-pagination",{attrs:{size:"sm","total-rows":e.getRowCount(e.items),"per-page":e.perPage,"prev-text":"Prev","next-text":"Next","hide-goto-end-buttons":""},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}})],1)],1)],1)],1)],1)},i=[],r=(n("28a5"),n("6b54"),n("db49")),a=n("c1df"),s=n.n(a),c={name:"Usuarios",props:{caption:{type:String,default:"Listado de Cronologías"},hover:{type:Boolean,default:!0},striped:{type:Boolean,default:!0},bordered:{type:Boolean,default:!1},small:{type:Boolean,default:!1},fixed:{type:Boolean,default:!1}},data:function(){return{items:[],fields:[{key:"tipo"},{key:"usuario"},{key:"descripción"},{key:"departamento"},{key:"fecha"},{key:"estado"},{key:"acción"}],currentPage:1,perPage:15,totalRows:0,user:null}},computed:{},mounted:function(){axios.defaults.headers.common["authorization"]=localStorage.getItem("token"),this.user=this.$store.state.user,this.getChronologies()},methods:{getBadge:function(e){return"Active"===e?"success":"Inactive"===e?"secondary":"Pending"===e?"warning":"Banned"===e?"danger":"primary"},getRowCount:function(e){return e.length},userLink:function(e){return"users/".concat(e.toString())},rowClicked:function(e){var t=this.userLink(e.id);this.$router.push({path:t})},getUsername:function(e){return e.split(" ")[0]},getChronologies:function(){var e=this;Event.$emit("loading"),axios.get("".concat(r["a"].API_URL,"/evidences?limit=1")).then(function(t){axios.get("".concat(r["a"].API_URL,"/evidences?limit=").concat(t.total)).then(function(t){e.items=t.data.data,Event.$emit("stopLoading")}).catch(function(e){console.dir(e),Event.$emit("stopLoading")})})},isDepartament:function(e){return"BALISTICA"==e&&"OPERADOR_BALISTICA"==this.user.rol||("LABORATORIO"==e&&"OPERADOR_LABORATORIO"==this.user.rol||"HECHOS"==e&&"OPERADOR_HECHOS"==this.user.rol)},goToEdit:function(e,t){return"BALISTICA"==e&&this.$router.push({name:"editArm",params:{id:t}}),"LABORATORIO"==e&&this.$router.push({name:"editClothes",params:{id:t}}),"HECHOS"==e&&this.$router.push({name:"editAct",params:{id:t}}),!1},goToEditReception:function(e){this.$router.push({name:"receptionEdit",params:{id:e}})},isEnabled:function(e){var t=s()(e).add(1,"day").unix()<s()().unix();return!0!==t}}},u=c,d=(n("fdbe"),n("2877")),p=Object(d["a"])(u,o,i,!1,null,"26160d16",null);t["default"]=p.exports},"6b54":function(e,t,n){"use strict";n("3846");var o=n("cb7c"),i=n("0bfb"),r=n("9e1e"),a="toString",s=/./[a],c=function(e){n("2aba")(RegExp.prototype,a,e,!0)};n("79e5")(function(){return"/a/b"!=s.call({source:"a",flags:"b"})})?c(function(){var e=o(this);return"/".concat(e.source,"/","flags"in e?e.flags:!r&&e instanceof RegExp?i.call(e):void 0)}):s.name!=a&&c(function(){return s.call(this)})},db49:function(e,t,n){"use strict";n("cadf"),n("551c");var o={API_URL:"https://cicpc-novedades.herokuapp.com/api/v1",API_IMAGE:"https://cicpc-novedades.herokuapp.com/uploads",API_REPORT:"https://cicpc-report.herokuapp.com/api",RENDER_REPORT:"https://cicpc-report.herokuapp.com/"};t["a"]=o},fd39:function(e,t,n){},fdbe:function(e,t,n){"use strict";var o=n("fd39"),i=n.n(o);i.a}}]);
//# sourceMappingURL=chunk-1eef.250359eb.js.map