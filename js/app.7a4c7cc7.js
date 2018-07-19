(function(t){function n(n){for(var r,s,a=n[0],i=n[1],c=n[2],f=0,p=[];f<a.length;f++)s=a[f],o[s]&&p.push(o[s][0]),o[s]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);l&&l(n);while(p.length)p.shift()();return u.push.apply(u,c||[]),e()}function e(){for(var t,n=0;n<u.length;n++){for(var e=u[n],r=!0,a=1;a<e.length;a++){var i=e[a];0!==o[i]&&(r=!1)}r&&(u.splice(n--,1),t=s(s.s=e[0]))}return t}var r={},o={0:0},u=[];function s(n){if(r[n])return r[n].exports;var e=r[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.m=t,s.c=r,s.d=function(t,n,e){s.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,n){if(1&n&&(t=s(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(s.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)s.d(e,r,function(n){return t[n]}.bind(null,r));return e},s.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(n,"a",n),n},s.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},s.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],i=a.push.bind(a);a.push=n,a=a.slice();for(var c=0;c<a.length;c++)n(a[c]);var l=i;u.push([1,1]),e()})({0:function(t,n){},1:function(t,n,e){t.exports=e("Vtdi")},10:function(t,n){},11:function(t,n){},12:function(t,n){},13:function(t,n){},14:function(t,n){},15:function(t,n){},16:function(t,n){},17:function(t,n){},18:function(t,n){},19:function(t,n){},20:function(t,n){},21:function(t,n){},22:function(t,n){},23:function(t,n){},24:function(t,n){},25:function(t,n){},26:function(t,n){},27:function(t,n){},28:function(t,n){},29:function(t,n){},30:function(t,n){},31:function(t,n){},32:function(t,n){},33:function(t,n){},34:function(t,n){},35:function(t,n){},36:function(t,n){},37:function(t,n){},"3ks5":function(t,n){t.exports="# Create a simple dag node\n\nYou can create node's using the `ipfs.dag.put` API.\n\nFor this lesson, create a simple node with a structure of `{test: 1}`\nand return the `CID` from your `run()` function.\n"},4:function(t,n){},"4g3b":function(t,n,e){},"4mQU":function(t,n,e){},5:function(t,n){},6:function(t,n){},7:function(t,n){},8:function(t,n){},9:function(t,n){},"A0++":function(t,n,e){"use strict";var r=e("BPUQ"),o=e.n(r);o.a},AqCV:function(t,n,e){"use strict";var r=e("4g3b"),o=e.n(r);o.a},BPUQ:function(t,n,e){},VEb1:function(t,n,e){"use strict";var r=e("4mQU"),o=e.n(r);o.a},Vtdi:function(t,n,e){"use strict";e.r(n);e("yt8O"),e("VRzm");var r=e("Kw5r"),o=e("jE9Z"),u=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},s=[],a={name:"app"},i=a,c=(e("A0++"),e("KHd+")),l=Object(c["a"])(i,u,s,!1,null,null,null),f=l.exports,p=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"home"},[e("ul",[e("li",[e("router-link",{attrs:{to:"/01"}},[t._v("Lesson 1: Basics")])],1),e("li",[e("router-link",{attrs:{to:"/02"}},[t._v("Lesson 2: TBD")])],1)])])},d=[],v={name:"home"},h=v,b=(e("AqCV"),Object(c["a"])(h,p,d,!1,null,null,null)),m=b.exports,g=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"lesson-01"},[e("Lesson",{attrs:{text:t.text,validate:t.validate}})],1)},x=[],_=(e("ls82"),e("ywzO")),w=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"lesson"},[e("div",{staticClass:"run"},[t.output.test?e("div",t._b({staticClass:"output"},"div",t.output.test,!1),[t.output.test.error?e("div",{staticClass:"output-error"},[t._v("\n        "+t._s(t.output.test.error.message)+"\n        "),e("br"),t._v("\n        "+t._s(t.output.test.error.stack)+"\n      ")]):t._e(),t.output.test.fail?e("div",{staticClass:"output-fail"},[t._v("\n        "+t._s(t.output.test.fail)+"\n      ")]):t._e(),t.output.test.success?e("div",{staticClass:"output-success"},[t._v("\n        "+t._s(t.output.test.success)+"\n        "),e("button",{on:{click:t.next}},[t._v("Next Lesson")])]):t._e()]):t._e(),e("button",{on:{click:t.run}},[t._v("run")])]),e("div",{staticClass:"lesson-text",domProps:{innerHTML:t._s(t.parsedText)}}),e("div",{staticClass:"editor"},[e("MonacoEditor",{staticClass:"editor",attrs:{height:"600",width:"100%",editorOptions:t.options,code:t.code,theme:"vs",language:"javascript"},on:{mounted:t.onMounted,codeChange:t.onCodeChange}})],1)])},y=[],C=(e("9XZr"),e("a1Th"),e("26B4")),O=e.n(C),j=e("zeWQ"),k=e("DlQD"),S=function(){var t=Object(_["a"])(regeneratorRuntime.mark(function t(n,e){var r,o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,new Promise(function(t){return e.on("ready",t)});case 2:return r=new Function("ipfs",n),t.prev=3,t.next=6,r(e)();case 6:o=t.sent,t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](3),o={error:t.t0};case 12:return t.abrupt("return",o);case 13:case"end":return t.stop()}},t,this,[[3,9]])}));return function(n,e){return t.apply(this,arguments)}}(),P="/* globals ipfs */\n\nconst run = async () => {\n  // your code goes here!\n  // example: ipfs.dag.put({hello: 'world'})\n}\n\nreturn run\n\n",$={},E={components:{MonacoEditor:O.a},data:function(t){return{text:t.$attrs.text,code:t.$attrs.code||P,parsedText:k(t.$attrs.text),output:$,IPFS:j,options:{selectOnLineNumbers:!1,lineDecorationsWidth:"2px"}}},methods:{run:function(){var t=Object(_["a"])(regeneratorRuntime.mark(function t(){var n,e,o,u;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=this.createIPFS(),e=this.editor.getValue(),t.next=4,S(e,n);case 4:if(o=t.sent,!o||!o.error){t.next=8;break}return r["a"].set($,"test",o),t.abrupt("return");case 8:return t.next=10,this.$attrs.validate(o,n);case 10:u=t.sent,r["a"].set($,"test",u),n.stop();case 13:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),createIPFS:function(){return this.$attrs.createIPFS?this.$attrs.createIPFS():new j({repo:Math.random().toString()})},onMounted:function(t){this.editor=t},onCodeChange:function(t){},next:function(){r["a"].set($,"test",null);var t=this.$route.path.slice(1),n=(parseInt(t)+1).toString().padStart(2,"0");this.$router.push({path:n})}}},Q=E,V=(e("VEb1"),Object(c["a"])(Q,w,y,!1,null,"5e29b129",null)),I=V.exports,L=e("3ks5"),M=e.n(L),D=e("xElV"),T=function(){var t=Object(_["a"])(regeneratorRuntime.mark(function t(n,e){var r,o,u,s,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(n){t.next=2;break}return t.abrupt("return",{fail:"You forgot to return a result :)"});case 2:if(D.isCID(n)){t.next=4;break}return t.abrupt("return",{fail:"Did not return a valid CID instance."});case 4:if(r="zdpuApm55Qv2zRxb3KKjVUxhQSw2r4a7jeiDV7163yCQnfivy",n.toBaseEncodedString()!==r){t.next=9;break}return t.abrupt("return",{success:"All works!"});case 9:return t.next=11,e.dag.get(n);case 11:return o=t.sent,u=JSON.stringify({test:1}),s=JSON.stringify(o.value),a='Was expecting "'.concat(u,'" but got "').concat(s,'"'),t.abrupt("return",{fail:a});case 16:case"end":return t.stop()}},t,this)}));return function(n,e){return t.apply(this,arguments)}}(),R={components:{Lesson:I},data:function(){return{text:M.a,validate:T}}},A=R,F=Object(c["a"])(A,g,x,!1,null,null,null),B=F.exports,z=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"lesson-02"},[e("Lesson",{attrs:{text:t.text,code:t.code}})],1)},U=[],J=e("mf0Q"),K=e.n(J),N="/* globals ipfs */\n\nconst run = async () => {\n  let cid = await ipfs.dag.put({test: 1})\n  // your code goes here\n}\n\nreturn run\n\n",W={components:{Lesson:I},data:function(){return{code:N,text:K.a}}},q=W,H=Object(c["a"])(q,z,U,!1,null,null,null),Y=H.exports;r["a"].use(o["a"]);var Z=[{path:"/",component:m},{path:"/01",component:B},{path:"/02",component:Y}],X=new o["a"]({routes:Z});r["a"].config.productionTip=!1,new r["a"]({router:X,render:function(t){return t(f)}}).$mount("#app")},mf0Q:function(t,n){t.exports="## This is a Lesson :)"}});
//# sourceMappingURL=app.7a4c7cc7.js.map