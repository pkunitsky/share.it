webpackJsonp([1],{"1Ndc":function(t,e){},"2m6Q":function(t,e){},"3FEz":function(t,e){},"69SP":function(t,e){},"86IQ":function(t,e){t.exports={particles:{number:{value:400,density:{enable:!0,value_area:900}},color:{value:"#fff"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.5,random:!0,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:9,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!1,distance:500,color:"#ffffff",opacity:.4,width:2},move:{enable:!0,speed:2,direction:"bottom",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"window",events:{onhover:{enable:!1,mode:"bubble"},onclick:{enable:!1,mode:"remove"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:.5}},bubble:{distance:400,size:4,duration:.3,opacity:1,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0}},IckW:function(t,e){},Ig6t:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),i=s("Dd8w"),l=s.n(i),n=s("NYxO"),r={methods:l()({},Object(n.b)(["setToken"]))},o={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mdl-navigation"},[s("router-link",{staticClass:"mdl-navigation__link",attrs:{to:"/"}},[t._v("home")]),t._v(" "),s("router-link",{staticClass:"mdl-navigation__link",attrs:{to:"/auth"}},[t._v("auth")]),t._v(" "),s("a",{staticClass:"mdl-navigation__link ml-auto",attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.setToken(null)}}},[t._v("\n    logout\n  ")])],1)},staticRenderFns:[]};var c=s("VU/8")(r,o,!1,function(t){s("nasd")},"data-v-7ec0c142",null).exports,d=s("//Fk"),m=s.n(d),u=s("Xxa5"),v=s.n(u),_=s("exGp"),f=s.n(_),p=s("Zrlr"),h=s.n(p),g=s("wxAW"),b=s.n(g),C=s("mtWM"),w=s.n(C).a.create({baseURL:window.location.origin+"/auth"}),x=function(t){return w.post("register",t)},k=function(t){return w.post("login",t)},E=function(t){return w.post("check-token",{token:t})},y=s("424j");a.a.use(n.a);var P=new n.a.Store({state:{token:null},mutations:{setToken:function(t,e){t.token=e}},plugins:[Object(y.a)()]}),$=new(function(){function t(){h()(this,t),this.valid=!!P.state.token,this.checkEvery=this.checkEvery.bind(this),this.check=this.check.bind(this)}return b()(t,[{key:"checkEvery",value:function(){var t=f()(v.a.mark(function t(){var e,s=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:30;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e=P.state.token){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,this.check(e);case 5:this.valid=t.sent,setTimeout(function(){s.valid?s.checkEvery(a):P.commit("setToken",null)},1e3*a);case 7:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"check",value:function(t){if(t)return new m.a(function(e,s){E(t).catch(function(t){console.log(t.toString()),e(!1)}).then(function(t){var s=t.data.valid;s||P.commit("setToken",null),e(s)})})}}]),t}()),j={computed:l()({},Object(n.c)(["token"])),watch:{token:function(t){null===t?this.$router.push("/auth"):$.checkEvery()}},created:function(){$.checkEvery()},components:{Nav:c}},S={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Nav"),this._v(" "),e("router-view")],1)},staticRenderFns:[]},N=s("VU/8")(j,S,!1,null,null,null).exports,F=s("/ocq"),R=s("Y81h"),T=s.n(R),z={data:function(){return{loginEmail:null,loginPassword:null}},methods:l()({},Object(n.b)(["setToken"]),{onSubmit:function(){var t=this;k({email:this.loginEmail,password:this.loginPassword}).then(function(e){200===e.status&&(t.setToken(e.data.token),t.$router.push("/"))})}})},A={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mdl-grid"},[s("div",{staticClass:"mdl-card mdl-shadow--2dp"},[t._m(0),t._v(" "),s("div",{staticClass:"mdl-card__supporting-text mdl-grid"},[s("form",{on:{submit:function(e){e.preventDefault(),t.onSubmit(e)}}},[s("div",{staticClass:"mdl-textfield mdl-js-textfield mdl-textfield--floating-label mdl-cell mdl-cell--12-col"},[s("label",{staticClass:"mdl-textfield__label mdl-color-text--grey",attrs:{for:"#loginEmail"}},[t._v("\n            Email\n          ")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.loginEmail,expression:"loginEmail"}],staticClass:"mdl-textfield__input",attrs:{type:"text",id:"loginEmail"},domProps:{value:t.loginEmail},on:{input:function(e){e.target.composing||(t.loginEmail=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"mdl-textfield mdl-js-textfield mdl-textfield--floating-label mdl-cell mdl-cell--12-col"},[s("label",{staticClass:"mdl-textfield__label mdl-color-text--grey",attrs:{for:"#loginPassword"}},[t._v("\n            Password\n          ")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.loginPassword,expression:"loginPassword"}],staticClass:"mdl-textfield__input",attrs:{type:"password",id:"loginPassword"},domProps:{value:t.loginPassword},on:{input:function(e){e.target.composing||(t.loginPassword=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"mdl-cell mdl-cell--12-col"},[s("button",{staticClass:"mdl-button mdl-js-ripple-effect mdl-js-button mdl-color-text--grey-600",on:{click:function(t){t.preventDefault()}}},[t._v("\n            Login with Google\n          ")]),t._v(" "),s("button",{staticClass:"mdl-button mdl-js-ripple-effect mdl-js-button mdl-button--raised mdl-button--colored",attrs:{type:"submit"}},[t._v("\n            Login\n          ")])])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mdl-card__title mdl-color--blue-500"},[e("h2",{staticClass:"mdl-card__title-text mdl-color-text--white"},[this._v("Login")])])}]},U=s("VU/8")(z,A,!1,null,null,null).exports,L={data:function(){return{registerEmail:null,registerPassword:"",registerPasswordConfirm:""}},computed:{passwordsMatch:function(){return""!==this.registerPassword&&""!==this.registerPasswordConfirm&&this.registerPassword===this.registerPasswordConfirm},classObject:function(){return{"is-valid":this.passwordsMatch,"is-dirty":""!==this.registerPasswordConfirm}}},methods:{onSubmit:function(){x({email:this.registerEmail,password:this.registerPassword}).catch(function(t){return console.log(t.toString())}).then(function(t){})}}},O={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mdl-grid"},[s("div",{staticClass:"mdl-card mdl-shadow--2dp"},[t._m(0),t._v(" "),s("div",{staticClass:"mdl-card__supporting-text mdl-grid"},[s("form",{attrs:{autocomplete:"off"},on:{submit:function(e){e.preventDefault(),t.onSubmit(e)}}},[s("div",{staticClass:"mdl-textfield mdl-js-textfield mdl-textfield--floating-label mdl-cell mdl-cell--12-col"},[s("label",{staticClass:"mdl-textfield__label mdl-color-text--grey",attrs:{for:"#registerEmail"}},[t._v("Email")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.registerEmail,expression:"registerEmail"}],staticClass:"mdl-textfield__input",attrs:{type:"email",id:"registerEmail",pattern:"^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$"},domProps:{value:t.registerEmail},on:{input:function(e){e.target.composing||(t.registerEmail=e.target.value)}}}),t._v(" "),s("span",{staticClass:"mdl-textfield__error"},[t._v("Not valid email")])]),t._v(" "),s("div",{staticClass:"mdl-textfield mdl-js-textfield mdl-textfield--floating-label mdl-cell mdl-cell--12-col"},[s("label",{staticClass:"mdl-textfield__label mdl-color-text--grey",attrs:{for:"textfield_new_password"}},[t._v("Password")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.registerPassword,expression:"registerPassword"}],staticClass:"mdl-textfield__input",attrs:{type:"password",id:"textfield_new_password",pattern:"^.{6,32}$"},domProps:{value:t.registerPassword},on:{input:function(e){e.target.composing||(t.registerPassword=e.target.value)}}}),t._v(" "),s("span",{staticClass:"mdl-textfield__error"},[t._v("\n            Password should be at least 6 and not more than 32 characters long\n          ")])]),t._v(" "),s("div",{staticClass:"mdl-textfield mdl-js-textfield mdl-textfield--floating-label mdl-cell mdl-cell--12-col",class:t.classObject},[s("label",{staticClass:"mdl-textfield__label mdl-color-text--grey",attrs:{for:"#textfield_password_confirm"}},[t._v("\n            Password Confirm\n          ")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.registerPasswordConfirm,expression:"registerPasswordConfirm"}],staticClass:"mdl-textfield__input",attrs:{type:"password",id:"textfield_password_confirm"},domProps:{value:t.registerPasswordConfirm},on:{input:function(e){e.target.composing||(t.registerPasswordConfirm=e.target.value)}}}),t._v(" "),s("span",{staticClass:"mdl-textfield__valid"},[t._v("\n            Passwords match!\n          ")])]),t._v(" "),t._m(1)])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mdl-card__title mdl-color--blue-500"},[e("h2",{staticClass:"mdl-card__title-text mdl-color-text--white"},[this._v("Create a New Account")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mdl-cell mdl-cell--12-col send-button"},[e("button",{staticClass:"mdl-button mdl-js-ripple-effect mdl-js-button mdl-button--raised mdl-button--colored"},[this._v("Register")])])}]},V=s("VU/8")(L,O,!1,null,null,null).exports,I={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"footer-wrapper"},[s("div",{staticClass:"container-fluid"},[s("ul",[s("li",[s("a",{attrs:{href:"#"}},[t._v("About")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#"}},[t._v("Help Center")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#"}},[t._v("Blog")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#"}},[t._v("Status")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#"}},[t._v("Jobs")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#"}},[t._v("Terms")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#"}},[t._v("Privacy Policy")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#"}},[t._v("Cookies")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#"}},[t._v("Ads info")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#"}},[t._v("Brand")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#"}},[t._v("Apps")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#"}},[t._v("Advertise")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#"}},[t._v("Marketing")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#"}},[t._v("Business")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#"}},[t._v("Developers")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#"}},[t._v("Settings")])]),t._v(" "),s("li",[t._v("© 2018 Share.it")])])])])}]};var D=s("VU/8")(null,I,!1,function(t){s("69SP")},"data-v-eeacd8ec",null).exports,M=s("86IQ"),H=s.n(M),J={components:{Login:U,Register:V,Footer:D},mounted:function(){window.particlesJS.load("particles",H.a)}},W={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"app-container"},[s("div",{staticClass:"row no-gutters flex-grow bg"},[s("div",{attrs:{id:"particles"}}),t._v(" "),s("div",{staticClass:"col-md-8"},[s("div",{staticClass:"jumbotron"},[s("h1",{staticClass:"title"},[t._v("\n          Share your moments, stories and news with\n          "),s("span",{staticClass:"logo"},[s("span",{staticClass:"logo__text"},[t._v("share.it")]),t._v(" "),s("svg",{staticClass:"logo__svg",attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24",version:"1.1",width:"24px",height:"24px"}},[s("g",{attrs:{id:"surface1"}},[s("path",{attrs:{d:"M 18 2 C 16.34375 2 15 3.34375 15 5 C 15 5.195313 15.027344 5.375 15.0625 5.5625 L 7.9375 9.71875 C 7.414063 9.273438 6.742188 9 6 9 C 4.34375 9 3 10.34375 3 12 C 3 13.65625 4.34375 15 6 15 C 6.742188 15 7.414063 14.726563 7.9375 14.28125 L 15.0625 18.4375 C 15.027344 18.625 15 18.804688 15 19 C 15 20.65625 16.34375 22 18 22 C 19.65625 22 21 20.65625 21 19 C 21 17.34375 19.65625 16 18 16 C 17.257813 16 16.585938 16.273438 16.0625 16.71875 L 8.9375 12.5625 C 8.972656 12.375 9 12.195313 9 12 C 9 11.804688 8.972656 11.625 8.9375 11.4375 L 16.0625 7.28125 C 16.585938 7.726563 17.257813 8 18 8 C 19.65625 8 21 6.65625 21 5 C 21 3.34375 19.65625 2 18 2 Z "}})])])])]),t._v(" "),s("p",{staticClass:"subtitle"},[t._v("\n          Share.it connects everyone worldwide. Get the most recent news, meet new people and keep in touch with friends!\n        ")]),t._v(" "),t._m(0),t._v(" "),t._m(1)])]),t._v(" "),s("div",{staticClass:"col-md-4"},[s("div",{staticClass:"mdl-grid"},[s("Login"),t._v(" "),s("Register")],1)])]),t._v(" "),s("Footer")],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"mobile-app-link",attrs:{href:"#"}},[e("img",{staticClass:"mobile-app-logo",attrs:{src:"/static/png/play-market.png",alt:"share.it play market app"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"mobile-app-link",attrs:{href:"#"}},[e("img",{staticClass:"mobile-app-logo",attrs:{src:"/static/png/app-store.png",alt:"share.it app store app"}})])}]};var Z=s("VU/8")(J,W,!1,function(t){s("1Ndc")},"data-v-d07dde40",null).exports,B={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"chat-wrapper"},[s("ul",{staticClass:"chat"},t._l(10,function(e){return s("li",{staticClass:"msg"},[t._m(0,!0),t._v(" "),t._m(1,!0)])})),t._v(" "),t._m(2)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"msg__left"},[e("img",{staticClass:"msg__thumbnail",attrs:{src:"/static/png/profile.png"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"msg__body"},[s("div",{staticClass:"msg__details details"},[s("a",{staticClass:"details__user",attrs:{href:"#"}},[t._v("John Doe")]),t._v(" "),s("span",{staticClass:"details__date"},[t._v("• 2:27 pm")])]),t._v(" "),s("div",{staticClass:"msg__text"},[t._v("\n          Hi everyone!\n        ")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("form",{staticClass:"chat-form"},[s("div",[s("label",{staticClass:"f6 b db mb2",attrs:{for:"comment"}},[t._v("Comments "),s("span",{staticClass:"normal black-60"},[t._v("(optional)")])]),t._v(" "),s("textarea",{staticClass:"db border-box hover-black w-100 ba b--black-20 pa2 br2 mb2",attrs:{id:"comment","aria-describedby":"comment-desc"}}),t._v(" "),s("small",{staticClass:"f6 black-60"},[t._v("Helper text for a form control. Can use this text to "),s("a",{staticClass:"link underline black-80 hover-blue",attrs:{href:"#"}},[t._v("link to more info.")])])])])}]};var Q={components:{Chat:s("VU/8")({},B,!1,function(t){s("Ig6t")},null,null).exports}},Y={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Chat")],1)},staticRenderFns:[]},G=s("VU/8")(Q,Y,!1,null,null,null).exports;a.a.use(F.a);var X=new F.a({mode:"history",routes:[{path:"/",component:G,beforeEnter:function(t,e,s){P.state.token?s():s({path:"/auth"})}},{path:"/auth",component:Z,beforeEnter:function(t,e,s){P.state.token?s({path:"/"}):s()}},{path:"/logout",beforeEnter:function(t,e,s){P.commit("setToken",null),s({path:"/auth"})}}]});X.beforeEach(function(t,e,s){var a=P.state.token;a?(T.a.start(),$.check(a).then(function(t){t||P.commit("setToken",null),T.a.done(),s()})):s()});var q=X,K=s("9JMe");s("YOpC"),s("2m6Q"),s("3FEz"),s("UVIz"),s("IckW");a.a.config.productionTip=!1,T.a.configure({showSpinner:!1}),Object(K.sync)(P,q),new a.a({el:"#app",router:q,store:P,components:{App:N},template:"<App/>"})},UVIz:function(t,e){},nasd:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.27a44c267cb01e8438dc.js.map