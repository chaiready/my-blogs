(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c3810e88"],{"0071":function(t,i,s){},"8e6b":function(t,i,s){"use strict";var a=s("0071"),e=s.n(a);e.a},"975e":function(t,i,s){"use strict";s.r(i);var a=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",[s("div",{staticClass:"header-img"}),s("div",{staticClass:"bg-light-1 py-4"},[s("div",{staticClass:"text-center"},[s("el-button",{attrs:{type:"primary"},on:{click:function(i){t.dialogVisible=!0}}},[t._v("+ 申请加入")])],1),s("container-body",{attrs:{isGrey:!0}},[s("div",{staticClass:"d-flex jc-around flex-wrap card-box"},t._l(t.cardList,(function(i,a){return s("el-card",{key:a,staticClass:"box-card",attrs:{shadow:"hover"},on:{click:function(s){return t.open(i)}}},[s("div",{staticClass:"title",attrs:{slot:"header"},on:{click:function(s){return t.open(i)}},slot:"header"},[s("img",{attrs:{src:i.avatarImg,alt:"logo",height:"40"}}),s("span",{staticClass:"pl-3 fs-3xl"},[t._v(t._s(i.nickName))])]),s("p",{staticClass:"pl-3 fs-2xl"},[t._v(t._s(i.description))])])})),1)])],1),s("el-dialog",{attrs:{title:"欢迎加入",visible:t.dialogVisible,width:"320px",center:""},on:{"update:visible":function(i){t.dialogVisible=i}}},[s("div",{class:{turnAnima:!1}},[s("form-input",{attrs:{isUpload:!0},on:{toRequest:t.submit}})],1)])],1)},e=[],n={data(){return{turnAnima:!1,dialogVisible:!1,cardList:[]}},created(){this.getCardsList()},methods:{async getCardsList(){let t=await this.$axios.get("/friends");this.cardList=t.data},async submit(t){let i=await this.$axios.post("/friends",t);this.dialogVisible=!1,this.getCardsList(),console.log(i)},open(t){console.log(t.url),window.open(t.url)}}},l=n,r=(s("8e6b"),s("623f")),o=Object(r["a"])(l,a,e,!1,null,"5f8cd6f2",null);i["default"]=o.exports}}]);
//# sourceMappingURL=chunk-c3810e88.108b581e.js.map