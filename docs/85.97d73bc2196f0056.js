"use strict";(self.webpackChunkMovieApp=self.webpackChunkMovieApp||[]).push([[85],{9085:(x,r,s)=>{s.r(r),s.d(r,{MoviedetailsModule:()=>h});var n=s(6814),c=s(9310),t=s(4946),d=s(3984);let v=(()=>{class e{transform(i){return Number(i.toFixed(1))}static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275pipe=t.Yjl({name:"numberfixed",type:e,pure:!0})}return e})();const l=function(e){return{background:e}};function m(e,g){if(1&e&&t._UZ(0,"div",2),2&e){const i=t.oxw();t.Q6J("ngStyle",t.VKq(1,l,"url("+i.posterPrefix+i.movie.backdrop_path+") no-repeat center center/ cover fixed"))}}function p(e,g){if(1&e&&(t.TgZ(0,"section",3)(1,"div",4)(2,"div",5)(3,"div",6)(4,"div",7)(5,"div",8),t._UZ(6,"img",9),t.qZA()()(),t.TgZ(7,"div",10)(8,"div",11)(9,"h3",12),t._uU(10),t.qZA(),t.TgZ(11,"span",13),t._uU(12),t.ALo(13,"numberfixed"),t.qZA(),t.TgZ(14,"p",14),t._uU(15),t.qZA()()()()()()),2&e){const i=t.oxw();t.xp6(6),t.Q6J("src",i.posterPrefix+i.movie.poster_path,t.LSH),t.xp6(4),t.Oqu(i.movie.title),t.xp6(2),t.hij("",t.lcZ(13,4,i.movie.vote_average)," / 10"),t.xp6(3),t.Oqu(i.movie.overview)}}const u=[{path:"",component:(()=>{class e{constructor(i,o){this._MovieService=i,this._ActivateRoute=o,this.posterPrefix="https://image.tmdb.org/t/p/w500/"}ngOnInit(){this._ActivateRoute.paramMap.subscribe(i=>{this.movieId=i.get("id")}),this._MovieService.getById(this.movieId).subscribe({next:i=>{this.movie=i}})}static#t=this.\u0275fac=function(o){return new(o||e)(t.Y36(d.u),t.Y36(c.gz))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-moviedetails"]],decls:2,vars:2,consts:[["class","back position-absolute w-100 vh-100",3,"ngStyle",4,"ngIf"],["class","details",4,"ngIf"],[1,"back","position-absolute","w-100","vh-100",3,"ngStyle"],[1,"details"],[1,"container"],[1,"row","py-4","align-items-center"],[1,"col-md-4"],[1,"movie_card","overflow-hidden","rounded-4"],[1,"movie-img"],["alt","Movie Poster",1,"w-100","img-fluid",3,"src"],[1,"col-md-8","mt-2"],[1,"movie-text","text-white"],[1,"fs-1"],[1,"rating","d-flex"],[1,"fs-5","mt-4"]],template:function(o,a){1&o&&(t.YNc(0,m,1,3,"div",0),t.YNc(1,p,16,6,"section",1)),2&o&&(t.Q6J("ngIf",a.movie),t.xp6(1),t.Q6J("ngIf",a.movie))},dependencies:[n.O5,n.PC,v],styles:[".back[_ngcontent-%COMP%]{z-index:-100;filter:blur(10px)}.movie_card[_ngcontent-%COMP%]{border:1px solid #000}.movie-text[_ngcontent-%COMP%]{text-shadow:0 2px 4px rgba(0,0,0,.8)}"]})}return e})()}];let f=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275mod=t.oAB({type:e});static#i=this.\u0275inj=t.cJS({imports:[c.Bz.forChild(u),c.Bz]})}return e})(),h=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275mod=t.oAB({type:e});static#i=this.\u0275inj=t.cJS({imports:[n.ez,f]})}return e})()}}]);