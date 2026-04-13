import{a as ct,b as pt}from"./chunk-74VIGIIE.js";import{a as _t}from"./chunk-PHK67ZA6.js";import{a as gt,b as ht,c as ut}from"./chunk-FKDBW2ZQ.js";import{g as mt}from"./chunk-FZPHITRQ.js";import{b as dt,e as lt}from"./chunk-7N3YHQGC.js";import{C as nt,M as ot,R as st,j as et,k as it,z as at}from"./chunk-RMS2VHZD.js";import{c as rt}from"./chunk-CNOFONX3.js";import{$ as w,$b as F,Ba as $,Bb as Z,Cb as c,Db as u,Eb as _,Gb as q,Hb as K,Ib as W,Jb as p,Kb as o,Lb as d,Mb as y,Nb as k,Ob as x,Pb as J,Qc as B,Tb as E,Tc as h,Uc as C,Xb as m,Za as r,Zb as g,_ as L,_b as Q,ba as I,da as s,e as P,g as z,hb as U,hc as X,ia as v,ja as S,jc as H,ka as f,la as j,lc as D,mc as tt,nb as T,nc as A,ob as O,pb as Y,qa as M,ua as V,ya as G,z as R}from"./chunk-IRQPY6ZS.js";var vt=["mat-sort-header",""],St=["*",[["","matSortHeaderIcon",""]]],yt=["*","[matSortHeaderIcon]"];function xt(i,l){i&1&&(f(),k(0,"svg",3),J(1,"path",4),x())}function Dt(i,l){i&1&&(k(0,"div",2),F(1,1,null,xt,2,0),x())}var ft=new I("MAT_SORT_DEFAULT_OPTIONS"),Ct=(()=>{class i{_defaultOptions;_initializedStream=new z(1);sortables=new Map;_stateChanges=new P;active;start="asc";get direction(){return this._direction}set direction(t){this._direction=t}_direction="";disableClear;disabled=!1;sortChange=new M;initialized=this._initializedStream;constructor(t){this._defaultOptions=t}register(t){this.sortables.set(t.id,t)}deregister(t){this.sortables.delete(t.id)}sort(t){this.active!=t.id?(this.active=t.id,this.direction=t.start?t.start:this.start):this.direction=this.getNextSortDirection(t),this.sortChange.emit({active:this.active,direction:this.direction})}getNextSortDirection(t){if(!t)return"";let a=t?.disableClear??this.disableClear??!!this._defaultOptions?.disableClear,e=Pt(t.start||this.start,a),n=e.indexOf(this.direction)+1;return n>=e.length&&(n=0),e[n]}ngOnInit(){this._initializedStream.next()}ngOnChanges(){this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete(),this._initializedStream.complete()}static \u0275fac=function(a){return new(a||i)(U(ft,8))};static \u0275dir=Y({type:i,selectors:[["","matSort",""]],hostAttrs:[1,"mat-sort"],inputs:{active:[0,"matSortActive","active"],start:[0,"matSortStart","start"],direction:[0,"matSortDirection","direction"],disableClear:[2,"matSortDisableClear","disableClear",h],disabled:[2,"matSortDisabled","disabled",h]},outputs:{sortChange:"matSortChange"},exportAs:["matSort"],features:[G]})}return i})();function Pt(i,l){let t=["asc","desc"];return i=="desc"&&t.reverse(),l||t.push(""),t}var ie=(()=>{class i{_sort=s(Ct,{optional:!0});_columnDef=s(_t,{optional:!0});_changeDetectorRef=s(B);_focusMonitor=s(et);_elementRef=s($);_ariaDescriber=s(nt,{optional:!0});_renderChanges;_animationsDisabled=ot();_recentlyCleared=V(null);_sortButton;id;arrowPosition="after";start;disabled=!1;get sortActionDescription(){return this._sortActionDescription}set sortActionDescription(t){this._updateSortActionDescription(t)}_sortActionDescription="Sort";disableClear;constructor(){s(it).load(st);let t=s(ft,{optional:!0});this._sort,t?.arrowPosition&&(this.arrowPosition=t?.arrowPosition)}ngOnInit(){!this.id&&this._columnDef&&(this.id=this._columnDef.name),this._sort.register(this),this._renderChanges=R(this._sort._stateChanges,this._sort.sortChange).subscribe(()=>this._changeDetectorRef.markForCheck()),this._sortButton=this._elementRef.nativeElement.querySelector(".mat-sort-header-container"),this._updateSortActionDescription(this._sortActionDescription)}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(()=>{Promise.resolve().then(()=>this._recentlyCleared.set(null))})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._sort.deregister(this),this._renderChanges?.unsubscribe(),this._sortButton&&this._ariaDescriber?.removeDescription(this._sortButton,this._sortActionDescription)}_toggleOnInteraction(){if(!this._isDisabled()){let t=this._isSorted(),a=this._sort.direction;this._sort.sort(this),this._recentlyCleared.set(t&&!this._isSorted()?a:null)}}_handleKeydown(t){(t.keyCode===32||t.keyCode===13)&&(t.preventDefault(),this._toggleOnInteraction())}_isSorted(){return this._sort.active==this.id&&(this._sort.direction==="asc"||this._sort.direction==="desc")}_isDisabled(){return this._sort.disabled||this.disabled}_getAriaSortAttribute(){return this._isSorted()?this._sort.direction=="asc"?"ascending":"descending":"none"}_renderArrow(){return!this._isDisabled()||this._isSorted()}_updateSortActionDescription(t){this._sortButton&&(this._ariaDescriber?.removeDescription(this._sortButton,this._sortActionDescription),this._ariaDescriber?.describe(this._sortButton,t)),this._sortActionDescription=t}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=T({type:i,selectors:[["","mat-sort-header",""]],hostAttrs:[1,"mat-sort-header"],hostVars:3,hostBindings:function(a,e){a&1&&m("click",function(){return e._toggleOnInteraction()})("keydown",function(b){return e._handleKeydown(b)})("mouseleave",function(){return e._recentlyCleared.set(null)}),a&2&&(c("aria-sort",e._getAriaSortAttribute()),H("mat-sort-header-disabled",e._isDisabled()))},inputs:{id:[0,"mat-sort-header","id"],arrowPosition:"arrowPosition",start:"start",disabled:[2,"disabled","disabled",h],sortActionDescription:"sortActionDescription",disableClear:[2,"disableClear","disableClear",h]},exportAs:["matSortHeader"],attrs:vt,ngContentSelectors:yt,decls:4,vars:17,consts:[[1,"mat-sort-header-container","mat-focus-indicator"],[1,"mat-sort-header-content"],[1,"mat-sort-header-arrow"],["viewBox","0 -960 960 960","focusable","false","aria-hidden","true"],["d","M440-240v-368L296-464l-56-56 240-240 240 240-56 56-144-144v368h-80Z"]],template:function(a,e){a&1&&(Q(St),k(0,"div",0)(1,"div",1),F(2),x(),u(3,Dt,3,0,"div",2),x()),a&2&&(H("mat-sort-header-sorted",e._isSorted())("mat-sort-header-position-before",e.arrowPosition==="before")("mat-sort-header-descending",e._sort.direction==="desc")("mat-sort-header-ascending",e._sort.direction==="asc")("mat-sort-header-recently-cleared-ascending",e._recentlyCleared()==="asc")("mat-sort-header-recently-cleared-descending",e._recentlyCleared()==="desc")("mat-sort-header-animations-disabled",e._animationsDisabled),c("tabindex",e._isDisabled()?null:0)("role",e._isDisabled()?null:"button"),r(3),_(e._renderArrow()?3:-1))},styles:[`.mat-sort-header {
  cursor: pointer;
}

.mat-sort-header-disabled {
  cursor: default;
}

.mat-sort-header-container {
  display: flex;
  align-items: center;
  letter-spacing: normal;
  outline: 0;
}
[mat-sort-header].cdk-keyboard-focused .mat-sort-header-container, [mat-sort-header].cdk-program-focused .mat-sort-header-container {
  border-bottom: solid 1px currentColor;
}
.mat-sort-header-container::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-sort-header-content {
  display: flex;
  align-items: center;
}

.mat-sort-header-position-before {
  flex-direction: row-reverse;
}

@keyframes _mat-sort-header-recently-cleared-ascending {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-25%);
    opacity: 0;
  }
}
@keyframes _mat-sort-header-recently-cleared-descending {
  from {
    transform: translateY(0) rotate(180deg);
    opacity: 1;
  }
  to {
    transform: translateY(25%) rotate(180deg);
    opacity: 0;
  }
}
.mat-sort-header-arrow {
  height: 12px;
  width: 12px;
  position: relative;
  transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1), opacity 225ms cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  overflow: visible;
  color: var(--mat-sort-arrow-color, var(--mat-sys-on-surface));
}
.mat-sort-header.cdk-keyboard-focused .mat-sort-header-arrow, .mat-sort-header.cdk-program-focused .mat-sort-header-arrow, .mat-sort-header:hover .mat-sort-header-arrow {
  opacity: 0.54;
}
.mat-sort-header .mat-sort-header-sorted .mat-sort-header-arrow {
  opacity: 1;
}
.mat-sort-header-descending .mat-sort-header-arrow {
  transform: rotate(180deg);
}
.mat-sort-header-recently-cleared-ascending .mat-sort-header-arrow {
  transform: translateY(-25%);
}
.mat-sort-header-recently-cleared-ascending .mat-sort-header-arrow {
  transition: none;
  animation: _mat-sort-header-recently-cleared-ascending 225ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
}
.mat-sort-header-recently-cleared-descending .mat-sort-header-arrow {
  transition: none;
  animation: _mat-sort-header-recently-cleared-descending 225ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
}
.mat-sort-header-animations-disabled .mat-sort-header-arrow {
  transition-duration: 0ms;
  animation-duration: 0ms;
}
.mat-sort-header-arrow > svg, .mat-sort-header-arrow [matSortHeaderIcon] {
  width: 24px;
  height: 24px;
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -12px 0 0 -12px;
  transform: translateZ(0);
}
.mat-sort-header-arrow, [dir=rtl] .mat-sort-header-position-before .mat-sort-header-arrow {
  margin: 0 0 0 6px;
}
.mat-sort-header-position-before .mat-sort-header-arrow, [dir=rtl] .mat-sort-header-arrow {
  margin: 0 6px 0 0;
}
`],encapsulation:2,changeDetection:0})}return i})(),ae=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275mod=O({type:i});static \u0275inj=w({imports:[rt]})}return i})();function zt(i,l){if(i&1&&(o(0,"mat-option",17),D(1),d()),i&2){let t=l.$implicit;p("value",t),r(),A(" ",t," ")}}function wt(i,l){if(i&1){let t=E();o(0,"mat-form-field",14)(1,"mat-select",16,0),m("selectionChange",function(e){v(t);let n=g(2);return S(n._changePageSize(e.value))}),K(3,zt,2,2,"mat-option",17,q),d(),o(5,"div",18),m("click",function(){v(t);let e=X(2);return S(e.open())}),d()()}if(i&2){let t=g(2);p("appearance",t._formFieldAppearance)("color",t.color),r(),p("value",t.pageSize)("disabled",t.disabled),Z("aria-labelledby",t._pageSizeLabelId),p("panelClass",t.selectConfig.panelClass||"")("disableOptionCentering",t.selectConfig.disableOptionCentering),r(2),W(t._displayedPageSizeOptions)}}function It(i,l){if(i&1&&(o(0,"div",15),D(1),d()),i&2){let t=g(2);r(),tt(t.pageSize)}}function Mt(i,l){if(i&1&&(o(0,"div",3)(1,"div",13),D(2),d(),u(3,wt,6,7,"mat-form-field",14),u(4,It,2,1,"div",15),d()),i&2){let t=g();r(),c("id",t._pageSizeLabelId),r(),A(" ",t._intl.itemsPerPageLabel," "),r(),_(t._displayedPageSizeOptions.length>1?3:-1),r(),_(t._displayedPageSizeOptions.length<=1?4:-1)}}function Tt(i,l){if(i&1){let t=E();o(0,"button",19),m("click",function(){v(t);let e=g();return S(e._buttonClicked(0,e._previousButtonsDisabled()))}),f(),o(1,"svg",8),y(2,"path",20),d()()}if(i&2){let t=g();p("matTooltip",t._intl.firstPageLabel)("matTooltipDisabled",t._previousButtonsDisabled())("disabled",t._previousButtonsDisabled())("tabindex",t._previousButtonsDisabled()?-1:null),c("aria-label",t._intl.firstPageLabel)}}function Ot(i,l){if(i&1){let t=E();o(0,"button",21),m("click",function(){v(t);let e=g();return S(e._buttonClicked(e.getNumberOfPages()-1,e._nextButtonsDisabled()))}),f(),o(1,"svg",8),y(2,"path",22),d()()}if(i&2){let t=g();p("matTooltip",t._intl.lastPageLabel)("matTooltipDisabled",t._nextButtonsDisabled())("disabled",t._nextButtonsDisabled())("tabindex",t._nextButtonsDisabled()?-1:null),c("aria-label",t._intl.lastPageLabel)}}var kt=(()=>{class i{changes=new P;itemsPerPageLabel="Items per page:";nextPageLabel="Next page";previousPageLabel="Previous page";firstPageLabel="First page";lastPageLabel="Last page";getRangeLabel=(t,a,e)=>{if(e==0||a==0)return`0 of ${e}`;e=Math.max(e,0);let n=t*a,b=n<e?Math.min(n+a,e):n+a;return`${n+1} \u2013 ${b} of ${e}`};static \u0275fac=function(a){return new(a||i)};static \u0275prov=L({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Et=50;var At=new I("MAT_PAGINATOR_DEFAULT_OPTIONS"),Bt=(()=>{class i{_intl=s(kt);_changeDetectorRef=s(B);_formFieldAppearance;_pageSizeLabelId=s(at).getId("mat-paginator-page-size-label-");_intlChanges;_isInitialized=!1;_initializedStream=new z(1);color;get pageIndex(){return this._pageIndex}set pageIndex(t){this._pageIndex=Math.max(t||0,0),this._changeDetectorRef.markForCheck()}_pageIndex=0;get length(){return this._length}set length(t){this._length=t||0,this._changeDetectorRef.markForCheck()}_length=0;get pageSize(){return this._pageSize}set pageSize(t){this._pageSize=Math.max(t||0,0),this._updateDisplayedPageSizeOptions()}_pageSize;get pageSizeOptions(){return this._pageSizeOptions}set pageSizeOptions(t){this._pageSizeOptions=(t||[]).map(a=>C(a,0)),this._updateDisplayedPageSizeOptions()}_pageSizeOptions=[];hidePageSize=!1;showFirstLastButtons=!1;selectConfig={};disabled=!1;page=new M;_displayedPageSizeOptions;initialized=this._initializedStream;constructor(){let t=this._intl,a=s(At,{optional:!0});if(this._intlChanges=t.changes.subscribe(()=>this._changeDetectorRef.markForCheck()),a){let{pageSize:e,pageSizeOptions:n,hidePageSize:b,showFirstLastButtons:N}=a;e!=null&&(this._pageSize=e),n!=null&&(this._pageSizeOptions=n),b!=null&&(this.hidePageSize=b),N!=null&&(this.showFirstLastButtons=N)}this._formFieldAppearance=a?.formFieldAppearance||"outline"}ngOnInit(){this._isInitialized=!0,this._updateDisplayedPageSizeOptions(),this._initializedStream.next()}ngOnDestroy(){this._initializedStream.complete(),this._intlChanges.unsubscribe()}nextPage(){this.hasNextPage()&&this._navigate(this.pageIndex+1)}previousPage(){this.hasPreviousPage()&&this._navigate(this.pageIndex-1)}firstPage(){this.hasPreviousPage()&&this._navigate(0)}lastPage(){this.hasNextPage()&&this._navigate(this.getNumberOfPages()-1)}hasPreviousPage(){return this.pageIndex>=1&&this.pageSize!=0}hasNextPage(){let t=this.getNumberOfPages()-1;return this.pageIndex<t&&this.pageSize!=0}getNumberOfPages(){return this.pageSize?Math.ceil(this.length/this.pageSize):0}_changePageSize(t){let a=this.pageIndex*this.pageSize,e=this.pageIndex;this.pageIndex=Math.floor(a/t)||0,this.pageSize=t,this._emitPageEvent(e)}_nextButtonsDisabled(){return this.disabled||!this.hasNextPage()}_previousButtonsDisabled(){return this.disabled||!this.hasPreviousPage()}_updateDisplayedPageSizeOptions(){this._isInitialized&&(this.pageSize||(this._pageSize=this.pageSizeOptions.length!=0?this.pageSizeOptions[0]:Et),this._displayedPageSizeOptions=this.pageSizeOptions.slice(),this._displayedPageSizeOptions.indexOf(this.pageSize)===-1&&this._displayedPageSizeOptions.push(this.pageSize),this._displayedPageSizeOptions.sort((t,a)=>t-a),this._changeDetectorRef.markForCheck())}_emitPageEvent(t){this.page.emit({previousPageIndex:t,pageIndex:this.pageIndex,pageSize:this.pageSize,length:this.length})}_navigate(t){let a=this.pageIndex;t!==a&&(this.pageIndex=t,this._emitPageEvent(a))}_buttonClicked(t,a){a||this._navigate(t)}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=T({type:i,selectors:[["mat-paginator"]],hostAttrs:["role","group",1,"mat-mdc-paginator"],inputs:{color:"color",pageIndex:[2,"pageIndex","pageIndex",C],length:[2,"length","length",C],pageSize:[2,"pageSize","pageSize",C],pageSizeOptions:"pageSizeOptions",hidePageSize:[2,"hidePageSize","hidePageSize",h],showFirstLastButtons:[2,"showFirstLastButtons","showFirstLastButtons",h],selectConfig:"selectConfig",disabled:[2,"disabled","disabled",h]},outputs:{page:"page"},exportAs:["matPaginator"],decls:14,vars:14,consts:[["selectRef",""],[1,"mat-mdc-paginator-outer-container"],[1,"mat-mdc-paginator-container"],[1,"mat-mdc-paginator-page-size"],[1,"mat-mdc-paginator-range-actions"],["aria-atomic","true","aria-live","polite","role","status",1,"mat-mdc-paginator-range-label"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-first",3,"matTooltip","matTooltipDisabled","disabled","tabindex"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-previous",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["viewBox","0 0 24 24","focusable","false","aria-hidden","true",1,"mat-mdc-paginator-icon"],["d","M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-next",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["d","M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-last",3,"matTooltip","matTooltipDisabled","disabled","tabindex"],["aria-hidden","true",1,"mat-mdc-paginator-page-size-label"],[1,"mat-mdc-paginator-page-size-select",3,"appearance","color"],[1,"mat-mdc-paginator-page-size-value"],["hideSingleSelectionIndicator","",3,"selectionChange","value","disabled","aria-labelledby","panelClass","disableOptionCentering"],[3,"value"],[1,"mat-mdc-paginator-touch-target",3,"click"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-first",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["d","M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-last",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["d","M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"]],template:function(a,e){a&1&&(o(0,"div",1)(1,"div",2),u(2,Mt,5,4,"div",3),o(3,"div",4)(4,"div",5),D(5),d(),u(6,Tt,3,5,"button",6),o(7,"button",7),m("click",function(){return e._buttonClicked(e.pageIndex-1,e._previousButtonsDisabled())}),f(),o(8,"svg",8),y(9,"path",9),d()(),j(),o(10,"button",10),m("click",function(){return e._buttonClicked(e.pageIndex+1,e._nextButtonsDisabled())}),f(),o(11,"svg",8),y(12,"path",11),d()(),u(13,Ot,3,5,"button",12),d()()()),a&2&&(r(2),_(e.hidePageSize?-1:2),r(3),A(" ",e._intl.getRangeLabel(e.pageIndex,e.pageSize,e.length)," "),r(),_(e.showFirstLastButtons?6:-1),r(),p("matTooltip",e._intl.previousPageLabel)("matTooltipDisabled",e._previousButtonsDisabled())("disabled",e._previousButtonsDisabled())("tabindex",e._previousButtonsDisabled()?-1:null),c("aria-label",e._intl.previousPageLabel),r(3),p("matTooltip",e._intl.nextPageLabel)("matTooltipDisabled",e._nextButtonsDisabled())("disabled",e._nextButtonsDisabled())("tabindex",e._nextButtonsDisabled()?-1:null),c("aria-label",e._intl.nextPageLabel),r(3),_(e.showFirstLastButtons?13:-1))},dependencies:[mt,ht,gt,dt,ct],styles:[`.mat-mdc-paginator {
  display: block;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--mat-paginator-container-text-color, var(--mat-sys-on-surface));
  background-color: var(--mat-paginator-container-background-color, var(--mat-sys-surface));
  font-family: var(--mat-paginator-container-text-font, var(--mat-sys-body-small-font));
  line-height: var(--mat-paginator-container-text-line-height, var(--mat-sys-body-small-line-height));
  font-size: var(--mat-paginator-container-text-size, var(--mat-sys-body-small-size));
  font-weight: var(--mat-paginator-container-text-weight, var(--mat-sys-body-small-weight));
  letter-spacing: var(--mat-paginator-container-text-tracking, var(--mat-sys-body-small-tracking));
  --mat-form-field-container-height: var(--mat-paginator-form-field-container-height, 40px);
  --mat-form-field-container-vertical-padding: var(--mat-paginator-form-field-container-vertical-padding, 8px);
}
.mat-mdc-paginator .mat-mdc-select-value {
  font-size: var(--mat-paginator-select-trigger-text-size, var(--mat-sys-body-small-size));
}
.mat-mdc-paginator .mat-mdc-form-field-subscript-wrapper {
  display: none;
}
.mat-mdc-paginator .mat-mdc-select {
  line-height: 1.5;
}

.mat-mdc-paginator-outer-container {
  display: flex;
}

.mat-mdc-paginator-container {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 8px;
  flex-wrap: wrap;
  width: 100%;
  min-height: var(--mat-paginator-container-size, 56px);
}

.mat-mdc-paginator-page-size {
  display: flex;
  align-items: baseline;
  margin-right: 8px;
}
[dir=rtl] .mat-mdc-paginator-page-size {
  margin-right: 0;
  margin-left: 8px;
}

.mat-mdc-paginator-page-size-label {
  margin: 0 4px;
}

.mat-mdc-paginator-page-size-select {
  margin: 0 4px;
  width: var(--mat-paginator-page-size-select-width, 84px);
}

.mat-mdc-paginator-range-label {
  margin: 0 32px 0 24px;
}

.mat-mdc-paginator-range-actions {
  display: flex;
  align-items: center;
}

.mat-mdc-paginator-icon {
  display: inline-block;
  width: 28px;
  fill: var(--mat-paginator-enabled-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon {
  fill: var(--mat-paginator-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
[dir=rtl] .mat-mdc-paginator-icon {
  transform: rotate(180deg);
}

@media (forced-colors: active) {
  .mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon,
  .mat-mdc-paginator-icon {
    fill: currentColor;
  }
  .mat-mdc-paginator-range-actions .mat-mdc-icon-button {
    outline: solid 1px;
  }
  .mat-mdc-paginator-range-actions .mat-mdc-icon-button[aria-disabled] {
    color: GrayText;
  }
}
.mat-mdc-paginator-touch-target {
  display: var(--mat-paginator-touch-target-display, block);
  position: absolute;
  top: 50%;
  left: 50%;
  width: var(--mat-paginator-page-size-select-width, 84px);
  height: var(--mat-paginator-page-size-select-touch-target-height, 48px);
  background-color: transparent;
  transform: translate(-50%, -50%);
  cursor: pointer;
}
`],encapsulation:2,changeDetection:0})}return i})(),xe=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275mod=O({type:i});static \u0275inj=w({imports:[lt,ut,pt,Bt]})}return i})();export{Ct as a,ie as b,ae as c,Bt as d,xe as e};
