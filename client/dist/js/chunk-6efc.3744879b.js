(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6efc"],{"0bfb":function(t,e,a){"use strict";var n=a("cb7c");t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},3652:function(t,e,a){},3846:function(t,e,a){a("9e1e")&&"g"!=/./g.flags&&a("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:a("0bfb")})},"586a":function(t,e,a){"use strict";var n=a("3652"),i=a.n(n);i.a},"6b54":function(t,e,a){"use strict";a("3846");var n=a("cb7c"),i=a("0bfb"),o=a("9e1e"),c="toString",r=/./[c],s=function(t){a("2aba")(RegExp.prototype,c,t,!0)};a("79e5")(function(){return"/a/b"!=r.call({source:"a",flags:"b"})})?s(function(){var t=n(this);return"/".concat(t.source,"/","flags"in t?t.flags:!o&&t instanceof RegExp?i.call(t):void 0)}):r.name!=c&&s(function(){return r.call(this)})},aeb7:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-row",[a("b-col",{attrs:{md:"4",sm:"6"}},[a("b-form-group",{attrs:{label:"Fecha de Inicio","laber-for":"date",horizontal:!1}},[a("b-form-input",{attrs:{type:"date",placeholder:"Buscar por fecha inicia"},model:{value:t.initialDate,callback:function(e){t.initialDate=e},expression:"initialDate"}})],1)],1),a("b-col",{attrs:{md:"4",sm:"6"}},[a("b-form-group",{attrs:{label:"Fecha Final","laber-for":"date",horizontal:!1}},[a("b-form-input",{attrs:{type:"date",placeholder:"Buscar por fecha final"},model:{value:t.finalDate,callback:function(e){t.finalDate=e},expression:"finalDate"}})],1)],1),a("b-col",{attrs:{cols:"12",xl:"12"}},[a("transition",{attrs:{name:"slide"}},[a("b-card",{attrs:{header:t.caption}},[a("b-table",{attrs:{hover:t.hover,striped:t.striped,bordered:t.bordered,small:t.small,fixed:t.fixed,responsive:"sm",items:t.items,fields:t.fields,"current-page":t.currentPage,"per-page":t.perPage},scopedSlots:t._u([{key:"id",fn:function(e){return[a("strong",[t._v(t._s(e.item.id))])]}},{key:"tipo",fn:function(e){return[a("strong",[t._v(t._s(e.item.tipo_recepcion))])]}},{key:"usuario",fn:function(e){return[a("strong",{directives:[{name:"show",rawName:"v-show",value:e.item.Usuario.usuario,expression:"data.item.Usuario.usuario"}]},[t._v("\n            "+t._s(e.item.Usuario.usuario)+"\n          ")])]}},{key:"descripción",fn:function(e){return[a("strong",[t._v(t._s(t._f("textShort")(e.item.descripcion)))])]}},{key:"fecha",fn:function(e){return[t._v("\n         "+t._s(t._f("listDate")(e.item.f_creacion))+"\n        ")]}},{key:"acción",fn:function(e){return[t.isEnabled(e.item.f_creacion)?a("b-button",{staticClass:"btn-pill",attrs:{variant:"success"},on:{click:function(a){t.goToEdit(e.item.id)}}},[t._v("Actualizar")]):t._e(),a("b-button",{staticClass:"btn-pill sp-t",attrs:{variant:"primary"},on:{click:function(a){t.goToDetail(e.item.id)}}},[t._v("Detalles")])]}}])}),a("nav",[a("b-pagination",{attrs:{size:"sm","total-rows":t.getRowCount(t.items),"per-page":t.perPage,"prev-text":"Prev","next-text":"Next","hide-goto-end-buttons":""},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)],1)],1)],1),a("b-col",{attrs:{sm:"12"}},[a("b-button",{staticClass:"btn-pill",attrs:{variant:"success"},on:{click:function(e){t.generateReport()}}},[t._v("\n        Generar Reporte\n      ")])],1)],1)},i=[],o=(a("ac6a"),a("28a5"),a("6b54"),a("db49")),c=a("c1df"),r=a.n(c);r.a.locale("es");var s={name:"Usuarios",props:{caption:{type:String,default:"Listado de Recepción"},hover:{type:Boolean,default:!0},striped:{type:Boolean,default:!0},bordered:{type:Boolean,default:!1},small:{type:Boolean,default:!1},fixed:{type:Boolean,default:!1}},data:function(){return{items:[],fields:[{key:"tipo"},{key:"usuario"},{key:"descripción"},{key:"fecha"},{key:"acción"}],currentPage:1,perPage:15,totalRows:0,date:r()().format("YYYY-MM-DD"),initialDate:r()().format("YYYY-MM-DD"),finalDate:r()().format("YYYY-MM-DD")}},computed:{},watch:{initialDate:function(){var t=this;Event.$emit("loading"),axios.get("".concat(o["a"].API_URL,"/chronologies?limit=1")).then(function(e){axios.get("".concat(o["a"].API_URL,"/chronologies?limit=").concat(e.total,"&DATE_MIN=").concat(t.initialDate,"&DATE_MAX=").concat(t.finalDate)).then(function(e){t.items=e.data.data,Event.$emit("stopLoading")})}).catch(function(t){Event.$emit("stopLoading"),console.dir(t)})},finalDate:function(){var t=this;Event.$emit("loading"),axios.get("".concat(o["a"].API_URL,"/chronologies?limit=1")).then(function(e){axios.get("".concat(o["a"].API_URL,"/chronologies?limit=").concat(e.total,"&DATE_MIN=").concat(t.initialDate,"&DATE_MAX=").concat(t.finalDate)).then(function(e){t.items=e.data.data,Event.$emit("stopLoading")})}).catch(function(t){Event.$emit("stopLoading"),console.dir(t)})}},mounted:function(){axios.defaults.headers.common["authorization"]=localStorage.getItem("token"),this.getChronologies()},methods:{getBadge:function(t){return"Active"===t?"success":"Inactive"===t?"secondary":"Pending"===t?"warning":"Banned"===t?"danger":"primary"},getRowCount:function(t){return t.length},userLink:function(t){return"users/".concat(t.toString())},rowClicked:function(t){var e=this.userLink(t.id);this.$router.push({path:e})},getUsername:function(t){return t.split(" ")[0]},getChronologies:function(){var t=this;Event.$emit("loading"),axios.get("".concat(o["a"].API_URL,"/chronologies?limit=1")).then(function(e){axios.get("".concat(o["a"].API_URL,"/chronologies?limit=").concat(e.total)).then(function(e){t.items=e.data.data,Event.$emit("stopLoading")}).catch(function(t){console.dir(t),Event.$emit("stopLoading")})})},generateReport:function(){var t=this;Event.$emit("loading");"Ciudad Guayana, ".concat(r()(this.date,"YYYY-MM-DD").format("dddd Do MMMM  YYYY"));var e=this.items;e.forEach(function(t){t.f_creacion=r()(t.f_creacion).format("h:mm:ss a")});var a={data:e,initialDate:this.initialDate||"todas",finalDate:this.finalDate||"todas"};axios.post("".concat(o["a"].API_REPORT,"/reception"),{data:a}).then(function(e){t.getChronologies(),window.open(o["a"].RENDER_REPORT+"/"+e.data,"_blank"),Event.$emit("stopLoading")}).catch(function(t){console.dir(t),Event.$emit("stopLoading")})},goToEdit:function(t){this.$router.push({name:"receptionEdit",params:{id:t}})},goToDetail:function(t){this.$router.push({name:"receptionDetail",params:{id:t}})},isEnabled:function(t){var e=r()(t).add(1,"day").unix()<r()().unix();return!0!==e}}},l=s,u=(a("586a"),a("2877")),d=Object(u["a"])(l,n,i,!1,null,"759f5d82",null);e["default"]=d.exports},db49:function(t,e,a){"use strict";a("cadf"),a("551c");var n={API_URL:"https://cicpc-novedades.herokuapp.com/api/v1",API_IMAGE:"https://cicpc-novedades.herokuapp.com/uploads",API_REPORT:"https://cicpc-report.herokuapp.com/api",RENDER_REPORT:"https://cicpc-report.herokuapp.com/"};e["a"]=n}}]);
//# sourceMappingURL=chunk-6efc.3744879b.js.map