webpackJsonp([1],{"04WM":function(t,a,e){(t.exports=e("FZ+f")(!1)).push([t.i,'body,html{background-color:#18203e;color:#fff;font:400 18px/1.5 Montserrat,sans-serif;padding:0;margin:0;scroll-behavior:smooth}.container{width:80vw;margin:auto}.grid-container{display:grid;position:relative;grid-template-areas:"navbar" "main";padding:0;overflow:hidden;z-index:0;min-height:100vh;max-height:-webkit-max-content;max-height:-moz-max-content;max-height:max-content}.grid-container:after{content:"";opacity:.2;top:0;left:0;bottom:0;right:0;position:absolute;background-image:url("/img/portada.jpg");background-size:cover;z-index:-1}.grid-container .header{grid-area:navbar}.grid-container .main{grid-area:main;min-height:calc(100vh - 100px)}.grid-container-section{display:grid;grid-gap:0;grid-template-columns:100%;grid-template-rows:.25fr 1fr;grid-template-areas:"title" "str"}.grid-container-section .title{grid-area:title}.grid-container-section .str{grid-area:str}.section-title h1{display:block;text-transform:uppercase;font-weight:400;letter-spacing:5px;font-size:2.1em;color:#fff;padding:0;margin-bottom:0}.section-title small{font-size:1em;color:#fff}@-webkit-keyframes bounceIn{0%{-webkit-transform:scale(0);transform:scale(0);opacity:0}50%{-webkit-transform:scale(1.2);transform:scale(1.2);opacity:.5}to{-webkit-transform:scale(1);transform:scale(1);opacity:1}}@keyframes bounceIn{0%{-webkit-transform:scale(0);transform:scale(0);opacity:0}50%{-webkit-transform:scale(1.2);transform:scale(1.2);opacity:.5}to{-webkit-transform:scale(1);transform:scale(1);opacity:1}}@-webkit-keyframes bounceOut{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}50%{-webkit-transform:scale(1.2);transform:scale(1.2);opacity:.5}to{-webkit-transform:scale(0);transform:scale(0);opacity:0}}@keyframes bounceOut{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}50%{-webkit-transform:scale(1.2);transform:scale(1.2);opacity:.5}to{-webkit-transform:scale(0);transform:scale(0);opacity:0}}@-webkit-keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@-webkit-keyframes fadeInDown{0%{opacity:0;top:-100%}to{opacity:1;top:0}}@keyframes fadeInDown{0%{opacity:0;top:-100%}to{opacity:1;top:0}}@-webkit-keyframes fadeInUp{0%{opacity:0;top:100%}to{opacity:1;top:0}}@keyframes fadeInUp{0%{opacity:0;top:100%}to{opacity:1;top:0}}@-webkit-keyframes fadeInLeft{0%{opacity:0;left:-100%}to{opacity:1;left:0}}@keyframes fadeInLeft{0%{opacity:0;left:-100%}to{opacity:1;left:0}}@-webkit-keyframes fadeInRight{0%{opacity:0;left:100%}to{opacity:1;left:0}}@keyframes fadeInRight{0%{opacity:0;left:100%}to{opacity:1;left:0}}.page-enter-active{-webkit-animation:bounceIn .8s;animation:bounceIn .8s}.page-leave-active{-webkit-animation:bounceOut .5s;animation:bounceOut .5s}@media screen and (max-width:768px){.grid-container-section{grid-gap:1em;grid-template-rows:auto 1fr}#inverse{display:none}#about.grid-container-section{grid-template-columns:1fr;grid-template-rows:20vh auto auto;grid-template-areas:"title" "img" "str"}#about.grid-container-section .str h2{text-align:center}.flex-skills div{margin:.5em 0}.flex-skills .item__content--medium,.flex-skills .item__content--small{-webkit-box-flex:1!important;-ms-flex:1!important;flex:1!important;min-width:100%}.chart-pie .legend p{font-size:1.1em}.chart-pie .legend p.points span{width:1em;height:1em}.gid-project{grid-template-columns:100%!important;grid-template-rows:repeat(4,70vh)!important;max-height:100%!important}.gid-project>div:first-child{grid-column:span 1!important;grid-row:span 1!important}.gid-project>div:nth-child(2){grid-column:span 1!important}.flex-social div{width:30vw!important}}@media screen and (max-width:425px){#decorative{display:none}.section-title h1{font-size:1.5em}.flex-social{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.flex-social div{width:80vw!important}.nav-mobile{display:block!important}nav li:not(.logo){display:none!important}}.nav-mobile{display:none;position:fixed;bottom:0;left:0;width:100%;height:10vh;background:transparent;-webkit-transition:all 1s;transition:all 1s;z-index:1000}.nav-mobile ul{margin:0;padding:0;list-style:none;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.nav-mobile ul li{z-index:1000;display:inline-block;margin:.5em 1em}.nav-mobile ul li a.nav-link-mobile{background:hsla(0,0%,100%,.5);display:inline-block;width:3em;height:.6em;border-radius:.6em}.nav-mobile ul li a.nav-link-mobile.nuxt-link-active{background:#fff}',""])},"11or":function(t,a,e){(t.exports=e("FZ+f")(!1)).push([t.i,'$z-index:(nav-mobile:1000,modal:600,navigation:500,footer:400,secction:300,hover-effect:200,decorative:100,background-grafic:0,background-img:-1,);$color--white:#fff;$color--letter:#fff;$color--dark:#494f70;$color--primary:#b3ee28;$color--primary-acent:#11998e;$color--secondary:#fff;$color--secondary-acent:#18203e;$color--secondary--light:#9cc9e3;$gra-linear-primary:linear-gradient(90deg,$color--primary-acent,$color--primary);$gra-linear-secondary:linear-gradient(-45deg,$color--primary-acent,$color--primary);body,html{background-color:$color--secondary-acent;color:$color--letter}.grid-container{z-index:map-get($z-index,background-grafic)}.grid-container:after{z-index:map-get($z-index,background-img)}.grid-container{.header{grid-area:navbar}.main{grid-area:main;min-height:calc(100vh - 100px)}}.grid-container-section{.title{grid-area:title}.str{grid-area:str}}.section-title{h1{display:block;text-transform:uppercase;font-weight:400;letter-spacing:5px;font-size:2.1em;padding:0;margin-bottom:0}h1,small{color:$color--letter}small{font-size:1em}}@-webkit-keyframes bounceIn{0%{-webkit-transform:scale(0);transform:scale(0);opacity:0}50%{-webkit-transform:scale(1.2);transform:scale(1.2);opacity:.5}to{-webkit-transform:scale(1);transform:scale(1);opacity:1}}@-webkit-keyframes bounceOut{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}50%{-webkit-transform:scale(1.2);transform:scale(1.2);opacity:.5}to{-webkit-transform:scale(0);transform:scale(0);opacity:0}}@-webkit-keyframes fadeIn{0%{opacity:0}to{opacity:1}}@-webkit-keyframes fadeInDown{0%{opacity:0;top:-100%}to{opacity:1;top:0}}@-webkit-keyframes fadeInUp{0%{opacity:0;top:100%}to{opacity:1;top:0}}@-webkit-keyframes fadeInLeft{0%{opacity:0;left:-100%}to{opacity:1;left:0}}@-webkit-keyframes fadeInRight{0%{opacity:0;left:100%}to{opacity:1;left:0}}@media screen and (max-width:768px){.grid-container-section{grid-gap:1em;grid-template-rows:auto 1fr}#inverse{display:none}#about.grid-container-section{grid-template-columns:1fr;grid-template-rows:20vh auto auto;grid-template-areas:"title" "img" "str";.str h2{text-align:center}}.flex-skills{div{margin:.5em 0}.item__content--medium,.item__content--small{-webkit-box-flex:1!important;-ms-flex:1!important;flex:1!important;min-width:100%}}.chart-pie .legend p{font-size:1.1em}.chart-pie .legend p.points span{width:1em;height:1em}.gid-project{grid-template-columns:100%!important;grid-template-rows:repeat(4,70vh)!important;max-height:100%!important;>div:first-child{grid-row:span 1!important}>div:first-child,>div:nth-child(2){grid-column:span 1!important}}.flex-social div{width:30vw!important}}@media screen and (max-width:425px){#decorative{display:none}.section-title h1{font-size:1.5em}.flex-social{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;div{width:80vw!important}}.nav-mobile{display:block!important}nav li:not(.logo){display:none!important}}body,html{background-color:#18203e;color:#fff;font:400 18px/1.5 Montserrat,sans-serif;padding:0;margin:0;scroll-behavior:smooth}.container{width:80vw;margin:auto}.grid-container{display:grid;position:relative;grid-template-areas:"navbar" "main";padding:0;overflow:hidden;z-index:0;min-height:100vh;max-height:-webkit-max-content;max-height:-moz-max-content;max-height:max-content}.grid-container:after{content:"";opacity:.2;top:0;left:0;bottom:0;right:0;position:absolute;background-image:url("/img/portada.jpg");background-size:cover;z-index:-1}.grid-container .header{grid-area:navbar}.grid-container .main{grid-area:main;min-height:calc(100vh - 100px)}.grid-container-section{display:grid;grid-gap:0;grid-template-columns:100%;grid-template-rows:.25fr 1fr;grid-template-areas:"title" "str"}.grid-container-section .title{grid-area:title}.grid-container-section .str{grid-area:str}.section-title h1{display:block;text-transform:uppercase;font-weight:400;letter-spacing:5px;font-size:2.1em;color:#fff;padding:0;margin-bottom:0}.section-title small{font-size:1em;color:#fff}@keyframes bounceIn{0%{-webkit-transform:scale(0);transform:scale(0);opacity:0}50%{-webkit-transform:scale(1.2);transform:scale(1.2);opacity:.5}to{-webkit-transform:scale(1);transform:scale(1);opacity:1}}@keyframes bounceOut{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}50%{-webkit-transform:scale(1.2);transform:scale(1.2);opacity:.5}to{-webkit-transform:scale(0);transform:scale(0);opacity:0}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes fadeInDown{0%{opacity:0;top:-100%}to{opacity:1;top:0}}@keyframes fadeInUp{0%{opacity:0;top:100%}to{opacity:1;top:0}}@keyframes fadeInLeft{0%{opacity:0;left:-100%}to{opacity:1;left:0}}@keyframes fadeInRight{0%{opacity:0;left:100%}to{opacity:1;left:0}}.page-enter-active{-webkit-animation:bounceIn .8s;animation:bounceIn .8s}.page-leave-active{-webkit-animation:bounceOut .5s;animation:bounceOut .5s}@media screen and (max-width:768px){.grid-container-section{grid-gap:1em;grid-template-rows:auto 1fr}#inverse{display:none}#about.grid-container-section{grid-template-columns:1fr;grid-template-rows:20vh auto auto;grid-template-areas:"title" "img" "str"}#about.grid-container-section .str h2{text-align:center}.flex-skills div{margin:.5em 0}.flex-skills .item__content--medium,.flex-skills .item__content--small{-webkit-box-flex:1!important;-ms-flex:1!important;flex:1!important;min-width:100%}.chart-pie .legend p{font-size:1.1em}.chart-pie .legend p.points span{width:1em;height:1em}.gid-project{grid-template-columns:100%!important;grid-template-rows:repeat(4,70vh)!important;max-height:100%!important}.gid-project>div:first-child{grid-column:span 1!important;grid-row:span 1!important}.gid-project>div:nth-child(2){grid-column:span 1!important}.flex-social div{width:30vw!important}}@media screen and (max-width:425px){#decorative{display:none}.section-title h1{font-size:1.5em}.flex-social{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.flex-social div{width:80vw!important}.nav-mobile{display:block!important}nav li:not(.logo){display:none!important}}',""])},"6oiq":function(t,a,e){var i=e("WDv8");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e("rjj0")("46be6162",i,!1,{sourceMap:!1})},"8f9h":function(t,a,e){"use strict";var i=e("VzPQ"),o=!1;var n=function(t){o||e("BoBe")},r=e("VU/8")(null,i.a,!1,n,"data-v-afb8c500",null);r.options.__file="components/svg/ElemLogo.vue",a.a=r.exports},B1BL:function(t,a,e){(t.exports=e("FZ+f")(!1)).push([t.i,'body[data-v-afb8c500],html[data-v-afb8c500]{background-color:#18203e;color:#fff;font:400 18px/1.5 Montserrat,sans-serif;padding:0;margin:0;scroll-behavior:smooth}.container[data-v-afb8c500]{width:80vw;margin:auto}.grid-container[data-v-afb8c500]{display:grid;position:relative;grid-template-areas:"navbar" "main";padding:0;overflow:hidden;z-index:0;min-height:100vh;max-height:-webkit-max-content;max-height:-moz-max-content;max-height:max-content}.grid-container[data-v-afb8c500]:after{content:"";opacity:.2;top:0;left:0;bottom:0;right:0;position:absolute;background-image:url("/img/portada.jpg");background-size:cover;z-index:-1}.grid-container .header[data-v-afb8c500]{grid-area:navbar}.grid-container .main[data-v-afb8c500]{grid-area:main;min-height:calc(100vh - 100px)}.grid-container-section[data-v-afb8c500]{display:grid;grid-gap:0;grid-template-columns:100%;grid-template-rows:.25fr 1fr;grid-template-areas:"title" "str"}.grid-container-section .title[data-v-afb8c500]{grid-area:title}.grid-container-section .str[data-v-afb8c500]{grid-area:str}.section-title h1[data-v-afb8c500]{display:block;text-transform:uppercase;font-weight:400;letter-spacing:5px;font-size:2.1em;color:#fff;padding:0;margin-bottom:0}.section-title small[data-v-afb8c500]{font-size:1em;color:#fff}@-webkit-keyframes bounceIn-data-v-afb8c500{0%{-webkit-transform:scale(0);transform:scale(0);opacity:0}50%{-webkit-transform:scale(1.2);transform:scale(1.2);opacity:.5}to{-webkit-transform:scale(1);transform:scale(1);opacity:1}}@keyframes bounceIn-data-v-afb8c500{0%{-webkit-transform:scale(0);transform:scale(0);opacity:0}50%{-webkit-transform:scale(1.2);transform:scale(1.2);opacity:.5}to{-webkit-transform:scale(1);transform:scale(1);opacity:1}}@-webkit-keyframes bounceOut-data-v-afb8c500{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}50%{-webkit-transform:scale(1.2);transform:scale(1.2);opacity:.5}to{-webkit-transform:scale(0);transform:scale(0);opacity:0}}@keyframes bounceOut-data-v-afb8c500{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}50%{-webkit-transform:scale(1.2);transform:scale(1.2);opacity:.5}to{-webkit-transform:scale(0);transform:scale(0);opacity:0}}@-webkit-keyframes fadeIn-data-v-afb8c500{0%{opacity:0}to{opacity:1}}@keyframes fadeIn-data-v-afb8c500{0%{opacity:0}to{opacity:1}}@-webkit-keyframes fadeInDown-data-v-afb8c500{0%{opacity:0;top:-100%}to{opacity:1;top:0}}@keyframes fadeInDown-data-v-afb8c500{0%{opacity:0;top:-100%}to{opacity:1;top:0}}@-webkit-keyframes fadeInUp-data-v-afb8c500{0%{opacity:0;top:100%}to{opacity:1;top:0}}@keyframes fadeInUp-data-v-afb8c500{0%{opacity:0;top:100%}to{opacity:1;top:0}}@-webkit-keyframes fadeInLeft-data-v-afb8c500{0%{opacity:0;left:-100%}to{opacity:1;left:0}}@keyframes fadeInLeft-data-v-afb8c500{0%{opacity:0;left:-100%}to{opacity:1;left:0}}@-webkit-keyframes fadeInRight-data-v-afb8c500{0%{opacity:0;left:100%}to{opacity:1;left:0}}@keyframes fadeInRight-data-v-afb8c500{0%{opacity:0;left:100%}to{opacity:1;left:0}}.page-enter-active[data-v-afb8c500]{-webkit-animation:bounceIn-data-v-afb8c500 .8s;animation:bounceIn-data-v-afb8c500 .8s}.page-leave-active[data-v-afb8c500]{-webkit-animation:bounceOut-data-v-afb8c500 .5s;animation:bounceOut-data-v-afb8c500 .5s}@media screen and (max-width:768px){.grid-container-section[data-v-afb8c500]{grid-gap:1em;grid-template-rows:auto 1fr}#inverse[data-v-afb8c500]{display:none}#about.grid-container-section[data-v-afb8c500]{grid-template-columns:1fr;grid-template-rows:20vh auto auto;grid-template-areas:"title" "img" "str"}#about.grid-container-section .str h2[data-v-afb8c500]{text-align:center}.flex-skills div[data-v-afb8c500]{margin:.5em 0}.flex-skills .item__content--medium[data-v-afb8c500],.flex-skills .item__content--small[data-v-afb8c500]{-webkit-box-flex:1!important;-ms-flex:1!important;flex:1!important;min-width:100%}.chart-pie .legend p[data-v-afb8c500]{font-size:1.1em}.chart-pie .legend p.points span[data-v-afb8c500]{width:1em;height:1em}.gid-project[data-v-afb8c500]{grid-template-columns:100%!important;grid-template-rows:repeat(4,70vh)!important;max-height:100%!important}.gid-project>div[data-v-afb8c500]:first-child{grid-column:span 1!important;grid-row:span 1!important}.gid-project>div[data-v-afb8c500]:nth-child(2){grid-column:span 1!important}.flex-social div[data-v-afb8c500]{width:30vw!important}}@media screen and (max-width:425px){#decorative[data-v-afb8c500]{display:none}.section-title h1[data-v-afb8c500]{font-size:1.5em}.flex-social[data-v-afb8c500]{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.flex-social div[data-v-afb8c500]{width:80vw!important}.nav-mobile[data-v-afb8c500]{display:block!important}nav li[data-v-afb8c500]:not(.logo){display:none!important}}g[data-v-afb8c500],path[data-v-afb8c500]{fill:#11998e}',""])},BoBe:function(t,a,e){var i=e("B1BL");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e("rjj0")("10e8236e",i,!1,{sourceMap:!1})},Dqiv:function(t,a,e){"use strict";var i=e("xeyy"),o=e("QSK1");a.a={components:{ElemNav:i.a,ElemNavMobile:o.a}}},Eleq:function(t,a,e){"use strict";var i=function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"grid-container"},[a("div",{staticClass:"header"},[a("elem-nav")],1),a("div",{staticClass:"main"},[a("nuxt"),a("elem-nav-mobile")],1)])};i._withStripped=!0;var o={render:i,staticRenderFns:[]};a.a=o},F9Ar:function(t,a,e){"use strict";var i=function(){var t=this.$createElement,a=this._self._c||t;return a("nav",{attrs:{role:"navigation"}},[a("ul",[a("li",[a("nuxt-link",{staticClass:"nav-link",attrs:{to:"/about"}},[this._v(" About Me")])],1),a("li",[a("nuxt-link",{staticClass:"nav-link",attrs:{to:"/skills"}},[this._v("Skills")])],1),a("li",{staticClass:"logo"},[a("nuxt-link",{attrs:{to:"/"}},[a("elem-logo",{staticClass:"fa-logo"})],1)],1),a("li",[a("nuxt-link",{staticClass:"nav-link",attrs:{to:"/projects"}},[this._v("Projects")])],1),a("li",[a("nuxt-link",{staticClass:"nav-link",attrs:{to:"/contact"}},[this._v("Contact Me")])],1)])])};i._withStripped=!0;var o={render:i,staticRenderFns:[]};a.a=o},Ma2J:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=e("Dqiv"),o=e("Eleq"),n=!1;var r=function(t){n||e("wJPC")},s=e("VU/8")(i.a,o.a,!1,r,null,null);s.options.__file="layouts/default.vue",a.default=s.exports},QSK1:function(t,a,e){"use strict";var i=e("puX9"),o=!1;var n=function(t){o||e("QzK0")},r=e("VU/8")(null,i.a,!1,n,null,null);r.options.__file="components/ElemNavMobile.vue",a.a=r.exports},QzK0:function(t,a,e){var i=e("04WM");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e("rjj0")("0662d34c",i,!1,{sourceMap:!1})},VzPQ:function(t,a,e){"use strict";var i=function(){var t=this.$createElement,a=this._self._c||t;return a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",version:"1.1",height:"72.185",width:"50.99","enable-background":"new","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 13.491 19.099"}},[a("g",[a("path",{attrs:{"aria-label":"R","font-weight":"400",d:"m3.641 3.252v18.544h3.704v-11.428l1.851 3.995v0.026l3.466 7.433h3.941l-3.862-7.936c2.301-0.396 3.756-2.804 3.756-5.052 0-3.069-2.486-5.582-5.555-5.582zm5.714 3.704h1.587c1.032 0 1.852 0.846 1.852 1.878 0 0.952-0.714 1.72-1.614 1.825z",transform:"translate(-3.641 -3.252)","letter-spacing":"0","word-spacing":"0","stroke-width":".661","font-size":"26.453","font-family":"Jaapokki enchance",fill:"url(#linearGradient868)"}})])])};i._withStripped=!0;var o={render:i,staticRenderFns:[]};a.a=o},WDv8:function(t,a,e){(t.exports=e("FZ+f")(!1)).push([t.i,'body,html{background-color:#18203e;color:#fff;font:400 18px/1.5 Montserrat,sans-serif;padding:0;margin:0;scroll-behavior:smooth}.container{width:80vw;margin:auto}.grid-container{display:grid;position:relative;grid-template-areas:"navbar" "main";padding:0;overflow:hidden;z-index:0;min-height:100vh;max-height:-webkit-max-content;max-height:-moz-max-content;max-height:max-content}.grid-container:after{content:"";opacity:.2;top:0;left:0;bottom:0;right:0;position:absolute;background-image:url("/img/portada.jpg");background-size:cover;z-index:-1}.grid-container .header{grid-area:navbar}.grid-container .main{grid-area:main;min-height:calc(100vh - 100px)}.grid-container-section{display:grid;grid-gap:0;grid-template-columns:100%;grid-template-rows:.25fr 1fr;grid-template-areas:"title" "str"}.grid-container-section .title{grid-area:title}.grid-container-section .str{grid-area:str}.section-title h1{display:block;text-transform:uppercase;font-weight:400;letter-spacing:5px;font-size:2.1em;color:#fff;padding:0;margin-bottom:0}.section-title small{font-size:1em;color:#fff}@-webkit-keyframes bounceIn{0%{-webkit-transform:scale(0);transform:scale(0);opacity:0}50%{-webkit-transform:scale(1.2);transform:scale(1.2);opacity:.5}to{-webkit-transform:scale(1);transform:scale(1);opacity:1}}@keyframes bounceIn{0%{-webkit-transform:scale(0);transform:scale(0);opacity:0}50%{-webkit-transform:scale(1.2);transform:scale(1.2);opacity:.5}to{-webkit-transform:scale(1);transform:scale(1);opacity:1}}@-webkit-keyframes bounceOut{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}50%{-webkit-transform:scale(1.2);transform:scale(1.2);opacity:.5}to{-webkit-transform:scale(0);transform:scale(0);opacity:0}}@keyframes bounceOut{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}50%{-webkit-transform:scale(1.2);transform:scale(1.2);opacity:.5}to{-webkit-transform:scale(0);transform:scale(0);opacity:0}}@-webkit-keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@-webkit-keyframes fadeInDown{0%{opacity:0;top:-100%}to{opacity:1;top:0}}@keyframes fadeInDown{0%{opacity:0;top:-100%}to{opacity:1;top:0}}@-webkit-keyframes fadeInUp{0%{opacity:0;top:100%}to{opacity:1;top:0}}@keyframes fadeInUp{0%{opacity:0;top:100%}to{opacity:1;top:0}}@-webkit-keyframes fadeInLeft{0%{opacity:0;left:-100%}to{opacity:1;left:0}}@keyframes fadeInLeft{0%{opacity:0;left:-100%}to{opacity:1;left:0}}@-webkit-keyframes fadeInRight{0%{opacity:0;left:100%}to{opacity:1;left:0}}@keyframes fadeInRight{0%{opacity:0;left:100%}to{opacity:1;left:0}}.page-enter-active{-webkit-animation:bounceIn .8s;animation:bounceIn .8s}.page-leave-active{-webkit-animation:bounceOut .5s;animation:bounceOut .5s}@media screen and (max-width:768px){.grid-container-section{grid-gap:1em;grid-template-rows:auto 1fr}#inverse{display:none}#about.grid-container-section{grid-template-columns:1fr;grid-template-rows:20vh auto auto;grid-template-areas:"title" "img" "str"}#about.grid-container-section .str h2{text-align:center}.flex-skills div{margin:.5em 0}.flex-skills .item__content--medium,.flex-skills .item__content--small{-webkit-box-flex:1!important;-ms-flex:1!important;flex:1!important;min-width:100%}.chart-pie .legend p{font-size:1.1em}.chart-pie .legend p.points span{width:1em;height:1em}.gid-project{grid-template-columns:100%!important;grid-template-rows:repeat(4,70vh)!important;max-height:100%!important}.gid-project>div:first-child{grid-column:span 1!important;grid-row:span 1!important}.gid-project>div:nth-child(2){grid-column:span 1!important}.flex-social div{width:30vw!important}}@media screen and (max-width:425px){#decorative{display:none}.section-title h1{font-size:1.5em}.flex-social{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.flex-social div{width:80vw!important}.nav-mobile{display:block!important}nav li:not(.logo){display:none!important}}nav{display:block;top:0;left:0;width:100%;background:transparent;-webkit-transition:all 1s;transition:all 1s}nav ul{padding:0;list-style:none;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}nav ul li{z-index:500;display:block}nav ul li a.nav-link{position:relative;display:block;text-decoration:none;text-transform:uppercase;letter-spacing:5px;font-size:.7em;color:#fff;text-align:center;padding:14px 1em;-webkit-transition:all .5s;transition:all .5s}nav ul li a.nav-link.nuxt-link-active:after,nav ul li a.nav-link.nuxt-link-active:before,nav ul li a.nav-link:hover:after,nav ul li a.nav-link:hover:before{width:100%;left:0}nav ul li a.nav-link:after,nav ul li a.nav-link:before{content:"";position:absolute;top:100%;width:0;right:0;height:2px}nav ul li a.nav-link:before{-webkit-transition:width .4s cubic-bezier(.51,.18,0,.88) .1s;transition:width .4s cubic-bezier(.51,.18,0,.88) .1s;background:#b3ee28}nav ul li a.nav-link:after{-webkit-transition:width .2s cubic-bezier(.29,.18,.26,.83);transition:width .2s cubic-bezier(.29,.18,.26,.83);background:#b3ee28;opacity:.5}.logo{display:block;margin:0;margin:initial;padding:5px 2em}.logo .fa-logo{width:1em;height:1em;margin:auto;-webkit-transform:scale(3);transform:scale(3);-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out;background-size:100% 100%;cursor:pointer}.logo .fa-logo:hover{-webkit-transform:scale(2.5);transform:scale(2.5)}',""])},kNg3:function(t,a,e){"use strict";var i=e("8f9h");a.a={components:{ElemLogo:i.a}}},puX9:function(t,a,e){"use strict";var i=function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"nav-mobile"},[a("ul",[a("li",[a("nuxt-link",{staticClass:"nav-link-mobile",attrs:{to:"/about"}})],1),a("li",[a("nuxt-link",{staticClass:"nav-link-mobile",attrs:{to:"/skills"}})],1),a("li",[a("nuxt-link",{staticClass:"nav-link-mobile",attrs:{to:"/projects"}})],1),a("li",[a("nuxt-link",{staticClass:"nav-link-mobile",attrs:{to:"/contact"}})],1)])])};i._withStripped=!0;var o={render:i,staticRenderFns:[]};a.a=o},wJPC:function(t,a,e){var i=e("11or");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e("rjj0")("3fa3c4d9",i,!1,{sourceMap:!1})},xeyy:function(t,a,e){"use strict";var i=e("kNg3"),o=e("F9Ar"),n=!1;var r=function(t){n||e("6oiq")},s=e("VU/8")(i.a,o.a,!1,r,null,null);s.options.__file="components/ElemNav.vue",a.a=s.exports}});