webpackJsonp([4],{"3Ipf":function(t,e,a){"use strict";var i=function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"grid-container-section container",attrs:{id:"skills"}},[this._m(0),e("div",{staticClass:"str flex-skills"},this._l(this.skills,function(t){return e("div",{class:"item__content--"+t.priority},[e("elem-chart-pie",{attrs:{skill:t}})],1)}))])};i._withStripped=!0;var o={render:i,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title section-title"},[e("h1",[this._v("Que Puedo Hacer")]),e("small",[this._v(" Una pequeña compilación de las herramientas con las que puedo trabajar")])])}]};e.a=o},"7rDi":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"chart-pie"},[a("div",{staticClass:"single-chart"},[a("svg",{class:["circular-chart","priority--"+t.skill.priority],attrs:{viewBox:"0 0 36 36"}},[a("path",{staticClass:"circle-bg",attrs:{d:"M18 2.0845\n          a 15.9155 15.9155 0 0 1 0 31.831\n          a 15.9155 15.9155 0 0 1 0 -31.831"}}),a("path",{staticClass:"circle",attrs:{"stroke-dasharray":t.skill.porcent+",100",d:"M18 2.0845\n          a 15.9155 15.9155 0 0 1 0 31.831\n          a 15.9155 15.9155 0 0 1 0 -31.831"}}),a("text",{staticClass:"percentage",attrs:{x:"50%",y:"50%","text-anchor":"middle"}},[t._v(t._s(t.skill.name))])])]),a("div",{staticClass:"legend"},t._l(t.skill.tools,function(e){return a("div",{key:e.name},[a("p",[t._v(t._s(e.name))]),a("p",{staticClass:"points"},t._l(5,function(t){return a("span",{key:t,class:[t<=e.porcent?"active":""]})}))])}))])};i._withStripped=!0;var o={render:i,staticRenderFns:[]};e.a=o},"9Pij":function(t,e,a){var i=a("BIi2");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("4a92d191",i,!1,{sourceMap:!1})},BIi2:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,'body,html{background-color:#18203e;color:#fff;font:400 18px/1.5 Montserrat,sans-serif;padding:0;margin:0;scroll-behavior:smooth}.container{width:80vw;margin:auto}.grid-container{display:grid;position:relative;grid-template-areas:"navbar" "main";padding:0;overflow:hidden;z-index:0;min-height:100vh;max-height:-webkit-max-content;max-height:-moz-max-content;max-height:max-content}.grid-container:after{content:"";opacity:.2;top:0;left:0;bottom:0;right:0;position:absolute;background-image:url("/img/portada.jpg");background-size:cover;z-index:-1}.grid-container .header{grid-area:navbar}.grid-container .main{grid-area:main;min-height:calc(100vh - 100px)}.grid-container-section{display:grid;grid-gap:0;grid-template-columns:100%;grid-template-rows:.25fr 1fr;grid-template-areas:"title" "str"}.grid-container-section .title{grid-area:title}.grid-container-section .str{grid-area:str}.section-title h1{display:block;text-transform:uppercase;font-weight:400;letter-spacing:5px;font-size:2.1em;color:#fff;padding:0;margin-bottom:0}.section-title small{font-size:1em;color:#fff}@-webkit-keyframes bounceIn{0%{-webkit-transform:scale(0);transform:scale(0);opacity:0}50%{-webkit-transform:scale(1.2);transform:scale(1.2);opacity:.5}to{-webkit-transform:scale(1);transform:scale(1);opacity:1}}@keyframes bounceIn{0%{-webkit-transform:scale(0);transform:scale(0);opacity:0}50%{-webkit-transform:scale(1.2);transform:scale(1.2);opacity:.5}to{-webkit-transform:scale(1);transform:scale(1);opacity:1}}@-webkit-keyframes bounceOut{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}50%{-webkit-transform:scale(1.2);transform:scale(1.2);opacity:.5}to{-webkit-transform:scale(0);transform:scale(0);opacity:0}}@keyframes bounceOut{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}50%{-webkit-transform:scale(1.2);transform:scale(1.2);opacity:.5}to{-webkit-transform:scale(0);transform:scale(0);opacity:0}}@-webkit-keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@-webkit-keyframes fadeInDown{0%{opacity:0;top:-100%}to{opacity:1;top:0}}@keyframes fadeInDown{0%{opacity:0;top:-100%}to{opacity:1;top:0}}@-webkit-keyframes fadeInUp{0%{opacity:0;top:100%}to{opacity:1;top:0}}@keyframes fadeInUp{0%{opacity:0;top:100%}to{opacity:1;top:0}}@-webkit-keyframes fadeInLeft{0%{opacity:0;left:-100%}to{opacity:1;left:0}}@keyframes fadeInLeft{0%{opacity:0;left:-100%}to{opacity:1;left:0}}@-webkit-keyframes fadeInRight{0%{opacity:0;left:100%}to{opacity:1;left:0}}@keyframes fadeInRight{0%{opacity:0;left:100%}to{opacity:1;left:0}}.page-enter-active{-webkit-animation:bounceIn .8s;animation:bounceIn .8s}.page-leave-active{-webkit-animation:bounceOut .5s;animation:bounceOut .5s}@media screen and (max-width:768px){.grid-container-section{grid-gap:1em;grid-template-rows:auto 1fr}#inverse{display:none}#about.grid-container-section{grid-template-columns:1fr;grid-template-rows:20vh auto auto;grid-template-areas:"title" "img" "str"}#about.grid-container-section .str h2{text-align:center}.flex-skills div{margin:.5em 0}.flex-skills .item__content--medium,.flex-skills .item__content--small{-webkit-box-flex:1!important;-ms-flex:1!important;flex:1!important;min-width:100%}.chart-pie .legend p{font-size:1.1em}.chart-pie .legend p.points span{width:1em;height:1em}.gid-project{grid-template-columns:100%!important;grid-template-rows:repeat(4,70vh)!important;max-height:100%!important}.gid-project>div:first-child{grid-column:span 1!important;grid-row:span 1!important}.gid-project>div:nth-child(2){grid-column:span 1!important}.flex-social div{width:30vw!important}}@media screen and (max-width:425px){#decorative{display:none}.section-title h1{font-size:1.5em}.flex-social{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.flex-social div{width:80vw!important}.nav-mobile{display:block!important}nav li:not(.logo){display:none!important}}.chart-pie{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;height:100%}.single-chart{width:100%}.single-chart .circular-chart{display:block;margin:10px auto;max-width:80%;max-height:250px}.single-chart .circular-chart.priority--small .circle{-webkit-animation-delay:.5s;animation-delay:.5s}.single-chart .circular-chart.priority--medium .circle{-webkit-animation-delay:1s;animation-delay:1s}.single-chart .circular-chart .circle-bg{fill:none;stroke:#494f70;stroke-width:3.8}.single-chart .circular-chart .circle{fill:none;stroke-width:2.8;stroke-linecap:round;stroke:#b3ee28;-webkit-animation:progress 2s ease-out both;animation:progress 2s ease-out both}.single-chart .circular-chart .percentage{font-size:.3em;text-overflow:ellipsis;width:100%;fill:#fff}div.legend{width:100%;border:0}div.legend p{width:100%;font-size:1em;color:#fff;text-align:center;margin:.2em}div.legend p.points{margin-bottom:.8em}div.legend p.points span{background:#494f70;display:inline-block;width:.8em;height:.8em;border-radius:50%}div.legend p.points span.active{-webkit-animation:active .2s ease-in both;animation:active .2s ease-in both}div.legend p.points span.active:first-of-type{-webkit-animation-delay:1s;animation-delay:1s}div.legend p.points span.active:nth-of-type(2){-webkit-animation-delay:1.5s;animation-delay:1.5s}div.legend p.points span.active:nth-of-type(3){-webkit-animation-delay:2s;animation-delay:2s}div.legend p.points span.active:nth-of-type(4){-webkit-animation-delay:2.5s;animation-delay:2.5s}div.legend p.points span.active:nth-of-type(5){-webkit-animation-delay:3s;animation-delay:3s}@-webkit-keyframes progress{0%{stroke-dasharray:0 100}}@keyframes progress{0%{stroke-dasharray:0 100}}@-webkit-keyframes active{0%{background:#494f70}to{background:#11998e}}@keyframes active{0%{background:#494f70}to{background:#11998e}}',""])},"GHs+":function(t,e,a){"use strict";var i=a("ZleP");e.a={components:{ElemChartPie:i.a},data:function(){return{skills:[{name:"HTML/CSS",porcent:90,priority:"small"},{name:"PHP",porcent:70,priority:"medium",tools:[{name:"Laravel",porcent:4},{name:"WordPress",porcent:2}]},{name:"SQL",porcent:70,priority:"small",tools:[{name:"PostgreSQL",porcent:4},{name:"MySQL",porcent:2}]},{name:"JavaScript",porcent:40,priority:"medium",tools:[{name:"VueJs",porcent:2},{name:"PolymerJs",porcent:2}]},{name:"Git",porcent:40,priority:"small"}]}}}},GPLU:function(t,e,a){"use strict";e.a={props:{skill:Object}}},"X+6Z":function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,'body[data-v-4fe340fb],html[data-v-4fe340fb]{background-color:#18203e;color:#fff;font:400 18px/1.5 Montserrat,sans-serif;padding:0;margin:0;scroll-behavior:smooth}.container[data-v-4fe340fb]{width:80vw;margin:auto}.grid-container[data-v-4fe340fb]{display:grid;position:relative;grid-template-areas:"navbar" "main";padding:0;overflow:hidden;z-index:0;min-height:100vh;max-height:-webkit-max-content;max-height:-moz-max-content;max-height:max-content}.grid-container[data-v-4fe340fb]:after{content:"";opacity:.2;top:0;left:0;bottom:0;right:0;position:absolute;background-image:url("/img/portada.jpg");background-size:cover;z-index:-1}.grid-container .header[data-v-4fe340fb]{grid-area:navbar}.grid-container .main[data-v-4fe340fb]{grid-area:main;min-height:calc(100vh - 100px)}.grid-container-section[data-v-4fe340fb]{display:grid;grid-gap:0;grid-template-columns:100%;grid-template-rows:.25fr 1fr;grid-template-areas:"title" "str"}.grid-container-section .title[data-v-4fe340fb]{grid-area:title}.grid-container-section .str[data-v-4fe340fb]{grid-area:str}.section-title h1[data-v-4fe340fb]{display:block;text-transform:uppercase;font-weight:400;letter-spacing:5px;font-size:2.1em;color:#fff;padding:0;margin-bottom:0}.section-title small[data-v-4fe340fb]{font-size:1em;color:#fff}@-webkit-keyframes bounceIn-data-v-4fe340fb{0%{-webkit-transform:scale(0);transform:scale(0);opacity:0}50%{-webkit-transform:scale(1.2);transform:scale(1.2);opacity:.5}to{-webkit-transform:scale(1);transform:scale(1);opacity:1}}@keyframes bounceIn-data-v-4fe340fb{0%{-webkit-transform:scale(0);transform:scale(0);opacity:0}50%{-webkit-transform:scale(1.2);transform:scale(1.2);opacity:.5}to{-webkit-transform:scale(1);transform:scale(1);opacity:1}}@-webkit-keyframes bounceOut-data-v-4fe340fb{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}50%{-webkit-transform:scale(1.2);transform:scale(1.2);opacity:.5}to{-webkit-transform:scale(0);transform:scale(0);opacity:0}}@keyframes bounceOut-data-v-4fe340fb{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}50%{-webkit-transform:scale(1.2);transform:scale(1.2);opacity:.5}to{-webkit-transform:scale(0);transform:scale(0);opacity:0}}@-webkit-keyframes fadeIn-data-v-4fe340fb{0%{opacity:0}to{opacity:1}}@keyframes fadeIn-data-v-4fe340fb{0%{opacity:0}to{opacity:1}}@-webkit-keyframes fadeInDown-data-v-4fe340fb{0%{opacity:0;top:-100%}to{opacity:1;top:0}}@keyframes fadeInDown-data-v-4fe340fb{0%{opacity:0;top:-100%}to{opacity:1;top:0}}@-webkit-keyframes fadeInUp-data-v-4fe340fb{0%{opacity:0;top:100%}to{opacity:1;top:0}}@keyframes fadeInUp-data-v-4fe340fb{0%{opacity:0;top:100%}to{opacity:1;top:0}}@-webkit-keyframes fadeInLeft-data-v-4fe340fb{0%{opacity:0;left:-100%}to{opacity:1;left:0}}@keyframes fadeInLeft-data-v-4fe340fb{0%{opacity:0;left:-100%}to{opacity:1;left:0}}@-webkit-keyframes fadeInRight-data-v-4fe340fb{0%{opacity:0;left:100%}to{opacity:1;left:0}}@keyframes fadeInRight-data-v-4fe340fb{0%{opacity:0;left:100%}to{opacity:1;left:0}}.page-enter-active[data-v-4fe340fb]{-webkit-animation:bounceIn-data-v-4fe340fb .8s;animation:bounceIn-data-v-4fe340fb .8s}.page-leave-active[data-v-4fe340fb]{-webkit-animation:bounceOut-data-v-4fe340fb .5s;animation:bounceOut-data-v-4fe340fb .5s}@media screen and (max-width:768px){.grid-container-section[data-v-4fe340fb]{grid-gap:1em;grid-template-rows:auto 1fr}#inverse[data-v-4fe340fb]{display:none}#about.grid-container-section[data-v-4fe340fb]{grid-template-columns:1fr;grid-template-rows:20vh auto auto;grid-template-areas:"title" "img" "str"}#about.grid-container-section .str h2[data-v-4fe340fb]{text-align:center}.flex-skills div[data-v-4fe340fb]{margin:.5em 0}.flex-skills .item__content--medium[data-v-4fe340fb],.flex-skills .item__content--small[data-v-4fe340fb]{-webkit-box-flex:1!important;-ms-flex:1!important;flex:1!important;min-width:100%}.chart-pie .legend p[data-v-4fe340fb]{font-size:1.1em}.chart-pie .legend p.points span[data-v-4fe340fb]{width:1em;height:1em}.gid-project[data-v-4fe340fb]{grid-template-columns:100%!important;grid-template-rows:repeat(4,70vh)!important;max-height:100%!important}.gid-project>div[data-v-4fe340fb]:first-child{grid-column:span 1!important;grid-row:span 1!important}.gid-project>div[data-v-4fe340fb]:nth-child(2){grid-column:span 1!important}.flex-social div[data-v-4fe340fb]{width:30vw!important}}@media screen and (max-width:425px){#decorative[data-v-4fe340fb]{display:none}.section-title h1[data-v-4fe340fb]{font-size:1.5em}.flex-social[data-v-4fe340fb]{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.flex-social div[data-v-4fe340fb]{width:80vw!important}.nav-mobile[data-v-4fe340fb]{display:block!important}nav li[data-v-4fe340fb]:not(.logo){display:none!important}}.section-title[data-v-4fe340fb]{text-align:center;-webkit-animation:fadeIn-data-v-4fe340fb 1s ease-out;animation:fadeIn-data-v-4fe340fb 1s ease-out;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-delay:.1s;animation-delay:.1s}.section-title h1[data-v-4fe340fb]:after{content:"";margin:1px auto;display:block;padding:5px;width:80px;max-width:100%;border-top:2px solid #b3ee28;-o-border-image:linear-gradient(90deg,#11998e,#b3ee28);border-image:-webkit-gradient(linear,left top,right top,color-stop(0,#11998e),to(#b3ee28));border-image:linear-gradient(90deg,#11998e,#b3ee28);border-image-slice:1}.flex-skills[data-v-4fe340fb]{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;width:100%;height:auto}.flex-skills div[data-v-4fe340fb]{margin:0 .2em}.flex-skills .item__content--small[data-v-4fe340fb]{-webkit-box-flex:1.5;-ms-flex:1.5;flex:1.5;-webkit-animation:fadeIn-data-v-4fe340fb 1s ease-out;animation:fadeIn-data-v-4fe340fb 1s ease-out;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-delay:.5s;animation-delay:.5s}.flex-skills .item__content--medium[data-v-4fe340fb]{margin-top:2em;-webkit-box-flex:2;-ms-flex:2;flex:2;-webkit-animation:fadeInUp-data-v-4fe340fb 1s ease-out;animation:fadeInUp-data-v-4fe340fb 1s ease-out;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-delay:1s;animation-delay:1s}.flex-skills .single-chart[data-v-4fe340fb]{margin:auto}',""])},ZleP:function(t,e,a){"use strict";var i=a("GPLU"),o=a("7rDi"),n=!1;var r=function(t){n||a("9Pij")},s=a("VU/8")(i.a,o.a,!1,r,null,null);s.options.__file="components/ElemChartPie.vue",e.a=s.exports},"g+kP":function(t,e,a){var i=a("X+6Z");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("4fd74ea2",i,!1,{sourceMap:!1})},kJqU:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("GHs+"),o=a("3Ipf"),n=!1;var r=function(t){n||a("g+kP")},s=a("VU/8")(i.a,o.a,!1,r,"data-v-4fe340fb",null);s.options.__file="pages/skills.vue",e.default=s.exports}});