"use strict";(self["webpackChunkcartoon"]=self["webpackChunkcartoon"]||[]).push([[128],{128:function(t,i,a){a.r(i),a.d(i,{default:function(){return r}});var s=function(){var t=this,i=t._self._c;return i("div",{ref:"srcollView",staticClass:"watch",on:{scroll:function(i){return t.handleScroll(i)}}},[i("div",{staticClass:"nav",class:{isHide:t.isHide}},[i("van-nav-bar",{attrs:{title:this.title,"left-arrow":"",fixed:""},on:{"click-left":t.onClickLeft}})],1),t._l(t.imagesData,(function(t,a){return i("div",{key:a,staticClass:"container"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t,expression:"imgItem"}]})])})),i("div",{staticClass:"select-item"},[i("van-action-sheet",{attrs:{title:"章节"},model:{value:t.show,callback:function(i){t.show=i},expression:"show"}},[i("div",{staticClass:"content"},t._l(t.cartoonItemData,(function(a,s){return i("div",{key:s,staticClass:"list-item",attrs:{name:a.id},on:{click:function(i){return t.goLookCartoon(a.id,a.title)}}},[t._v(" "+t._s(a.short_title)+" "),i("div",{staticClass:"icon-box"},[i("van-icon",{attrs:{color:"#f9a018",name:!0===a.is_locked?"lock":""}})],1)])})),0)])],1),i("div",{staticClass:"ShowBtn"},[i("van-button",{attrs:{plain:"",type:"primary"},on:{click:t.isShow}},[i("van-icon",{attrs:{name:"apps-o"}})],1)],1)],2)},e=[],o=(a(7658),{name:"Watch",data(){return{pathData:[],imagesData:[],title:"",oldScrollTop:0,isHide:!1,loading:!1,finished:!1,nowIndetailId:"",ThisId:"",ListIdData:[],index:"",show:!1,cartoonItemData:[]}},created(){this.nowIndetailId=this.$route.params.nowIndetailId,this.ThisId=this.$route.params.id,this.title=this.$route.params.title,this.$root.ListIdData.forEach(((t,i)=>{t.id===this.ThisId&&(this.index=i)})),this.GetImageIndex(this.ThisId),this.cartoonItemData=this.$root.epListData},methods:{handleScroll(t){const{scrollTop:i,clientHeight:a,scrollHeight:s}=t.target;if(i+a==s){if(this.index=Number(this.index)+1,Number(this.index)+1>this.$root.ListIdData.length)return;this.ThisId=this.$root.ListIdData[this.index].id,this.title=this.$root.ListIdData[this.index].title,this.GetImageIndex(this.ThisId)}},isShow(){this.show=!0},onClickLeft(){this.$router.push({name:"Indetail",params:{id:this.nowIndetailId}})},GetImageIndex(t){this.axios({method:"get",url:"/GetImageIndex",params:{epId:t}}).then((t=>{let i=t.data.data.images,a=t.data.data.host;this.pathData=[],i.forEach((t=>{let i=a+t.path+"@660w.jpg";this.pathData.push(i)})),this.axios({method:"get",url:"/ImageToken",params:{urls:JSON.stringify(this.pathData)}}).then((t=>{this.imagesData=[];let i=t.data.data;for(let a in i){let t=i[a].token,s=i[a].url,e=s+"?token="+t;this.imagesData.push(e)}})).catch((t=>{}))})).catch((t=>{}))},goLookCartoon(t,i){this.title=i,this.ThisId=t,this.GetImageIndex(this.ThisId),this.$refs.srcollView.scrollTop=0}}}),n=o,h=a(1001),l=(0,h.Z)(n,s,e,!1,null,"edca9dfa",null),r=l.exports}}]);
//# sourceMappingURL=128.1db3f377.js.map