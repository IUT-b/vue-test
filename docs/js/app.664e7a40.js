(function(){"use strict";var t={462:function(t,e,n){var o=n(144),r=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},i=[],s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"hello"},[e("div",[e("li",[t._v("Counter:"+t._s(t.n))])]),e("button",{staticStyle:{},on:{click:t.add}},[t._v("追加")]),e("button",{staticStyle:{},on:{click:t.reset}},[t._v("リセット")]),e("br"),e("table",[e("tbody",[t._l(t.counters,(function(n){return e("tr",{key:n.text},[e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:n.item,expression:"counter.item"}],domProps:{value:n.item},on:{input:function(e){e.target.composing||t.$set(n,"item",e.target.value)}}})]),e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:n.number,expression:"counter.number"}],domProps:{value:n.number},on:{input:function(e){e.target.composing||t.$set(n,"number",e.target.value)}}})])])})),e("tr",[e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.counter.item,expression:"counter.item"}],domProps:{value:t.counter.item},on:{input:function(e){e.target.composing||t.$set(t.counter,"item",e.target.value)}}})]),e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.counter.number,expression:"counter.number"}],domProps:{value:t.counter.number},on:{input:function(e){e.target.composing||t.$set(t.counter,"number",e.target.value)}}})])])],2)]),e("table",[t._m(0),e("tbody",t._l(t.items,(function(n){return e("tr",{key:n.id},[e("td",[e("button",{on:{click:function(e){return t.edit(n)}}},[t._v("編集")]),e("button",{on:{click:function(e){return t.del(n.id)}}},[t._v("削除")])]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.showContent,expression:"showContent"}],attrs:{id:"overlay"}},[e("div",{attrs:{id:"content"}},[e("p",[t._v("name")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.NAME,expression:"NAME"}],domProps:{value:t.NAME},on:{input:function(e){e.target.composing||(t.NAME=e.target.value)}}}),e("p",[t._v("calories")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.CAL,expression:"CAL"}],domProps:{value:t.CAL},on:{input:function(e){e.target.composing||(t.CAL=e.target.value)}}}),e("br"),e("button",{on:{click:function(e){return t.closeModal(t.ID)}}},[t._v("編集完了")])])]),e("td",[t._v(t._s(n.name))]),e("td",[t._v(t._s(n.cal))]),e("td",[t._v(t._s(n.fat))]),e("td",[t._v(t._s(n.car))]),e("td",[t._v(t._s(n.pro))]),e("td",[t._v(t._s(n.iro)+"%")])])})),0)])])},u=[function(){var t=this,e=t._self._c;return e("thead",[e("tr",[e("th",[t._v("編集")]),e("th",[t._v("Dessert (100g serving)")]),e("th",[t._v("Calories")]),e("th",[t._v("Fat (g)")]),e("th",[t._v("Carbs (g)")]),e("th",[t._v("Protein (g)")]),e("th",[t._v("Iron (%)")])])])}],a=n(503),c=n(321);const l={apiKey:"AIzaSyBDspN5wYMpLLptflRAThOKDOyXOJ7efFs",authDomain:"vue-test20220812.firebaseapp.com",projectId:"vue-test20220812",storageBucket:"vue-test20220812.appspot.com",messagingSenderId:"635392134107",appId:"1:635392134107:web:9fd86c1f09e60c9047f5fe"},d=(0,a.ZF)(l),v=(0,c.ad)(d);var m={name:"HelloWorld",data:()=>({counters:[],counter:{item:"",number:""},n:0,items:[],data:[],ID:"",NAME:"",CAL:"",showContent:!1}),mounted:function(){this.readData()},created(){this.listItems()},methods:{listItems(){const t=(0,c.hJ)(v,"vue-test");(0,c.cf)(t,(t=>{this.items=[],t.forEach((t=>{const e=t.data();e.id=t.id,this.items.push(e)}))}))},async readData(){const t=await(0,c.PL)((0,c.hJ)(v,"vue-test"));t.forEach((t=>{this.data.push(t.data())}))},add:function(){this.counters.push(this.counter),this.n=Number(this.n)+Number(this.counter.number),this.counter={item:"",number:""}},reset:function(){this.counters=[],this.n=0},edit:function(t){this.showContent=!0,this.ID=t.id,this.NAME=t.name,this.CAL=t.cal},closeModal:function(t){const e=(0,c.JU)(v,"vue-test",t);(0,c.r7)(e,{name:this.NAME,cal:this.CAL}).catch((t=>{console.log("err:",t)})),this.showContent=!1},del:function(t){(0,c.oe)((0,c.JU)(v,"vue-test",t))}}},p=m,f=n(1),h=(0,f.Z)(p,s,u,!1,null,"bd3b5db2",null),b=h.exports,_={name:"App",components:{HelloWorld:b}},g=_,w=(0,f.Z)(g,r,i,!1,null,null,null),y=w.exports;o.ZP.config.productionTip=!1,new o.ZP({render:t=>t(y)}).$mount("#app")}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={exports:{}};return t[o](i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,o,r,i){if(!o){var s=1/0;for(l=0;l<t.length;l++){o=t[l][0],r=t[l][1],i=t[l][2];for(var u=!0,a=0;a<o.length;a++)(!1&i||s>=i)&&Object.keys(n.O).every((function(t){return n.O[t](o[a])}))?o.splice(a--,1):(u=!1,i<s&&(s=i));if(u){t.splice(l--,1);var c=r();void 0!==c&&(e=c)}}return e}i=i||0;for(var l=t.length;l>0&&t[l-1][2]>i;l--)t[l]=t[l-1];t[l]=[o,r,i]}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var r,i,s=o[0],u=o[1],a=o[2],c=0;if(s.some((function(e){return 0!==t[e]}))){for(r in u)n.o(u,r)&&(n.m[r]=u[r]);if(a)var l=a(n)}for(e&&e(o);c<s.length;c++)i=s[c],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(l)},o=self["webpackChunkvue_test"]=self["webpackChunkvue_test"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(462)}));o=n.O(o)})();
//# sourceMappingURL=app.664e7a40.js.map