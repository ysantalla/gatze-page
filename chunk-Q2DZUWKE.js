import{a as ve}from"./chunk-2JVZRUIU.js";import{a as ye}from"./chunk-4PU4BDYU.js";import"./chunk-5D54U6ZD.js";import{a as _e,b as ge}from"./chunk-N2UMS7UD.js";import{a as fe}from"./chunk-WGACZJXU.js";import{a as he,b as ue}from"./chunk-OPDOSU4S.js";import"./chunk-QFBKHMLU.js";import{b as Xt}from"./chunk-27V66UQ6.js";import{d as ee}from"./chunk-K5UHP3HM.js";import{b as ne}from"./chunk-74VIGIIE.js";import{a as pe}from"./chunk-JURW7SKN.js";import{b as It,c as Dt,d as Mt,e as Et,f as Rt,j as Pt}from"./chunk-WU5KOTJI.js";import{a as ce,b as me,c as be}from"./chunk-FKDBW2ZQ.js";import{a as oe,b as se,g as le,h as de}from"./chunk-FZPHITRQ.js";import{a as Vt}from"./chunk-MVQT2NUO.js";import"./chunk-QYDFUTKO.js";import{b as jt,d as O,f as Gt,g as Ut,h as qt,j as w,k as $t,n as Zt,o as Kt,r as Yt}from"./chunk-ZHBYUDVP.js";import"./chunk-GN3CLLPI.js";import{c as zt}from"./chunk-TVDUDUV4.js";import"./chunk-MDJ5IY6P.js";import{b as ae}from"./chunk-Q4QXY3E3.js";import{c as Jt,e as te}from"./chunk-7N3YHQGC.js";import{a as ie,f as re}from"./chunk-WREM4EKG.js";import{M as Z,P as Qt,Q as K,R as Wt,f as Lt,j as Bt,k as St,q as At,w as Ft,y as Nt,z as $}from"./chunk-RMS2VHZD.js";import"./chunk-PFKEE3JO.js";import{a as Ht,c as Ot}from"./chunk-CNOFONX3.js";import{$ as pt,$b as H,A as dt,Ba as A,Cb as F,Db as h,E as ct,Eb as u,Hc as R,Jb as p,Jc as Tt,Kb as i,Lb as o,Mb as b,Q as mt,Qc as wt,R as L,S as bt,T as g,Tb as G,Tc as f,Uc as q,Wa as ft,Xb as _,Za as c,Zb as T,_b as N,ac as Ct,ba as ht,bc as xt,c as it,cc as y,da as d,db as gt,dc as C,e as P,f as rt,gb as vt,hc as D,ia as B,ic as kt,j as ot,ja as S,jc as M,l as st,lc as s,ma as ut,mc as E,nb as k,ob as yt,pb as W,qa as Q,ra as _t,sb as j,ua as v,x as lt,yc as U,z as V}from"./chunk-IRQPY6ZS.js";import"./chunk-7CGTOI24.js";var tt=["*"];var Me=["tabListContainer"],Ee=["tabList"],Re=["tabListInner"],Pe=["nextPaginator"],Le=["previousPaginator"];var Be=["mat-tab-nav-bar",""],Se=["mat-tab-link",""];var Y="mdc-tab-indicator--active",Ce="mdc-tab-indicator--no-transition",J=class{_items;_currentItem;constructor(l){this._items=l}hide(){this._items.forEach(l=>l.deactivateInkBar()),this._currentItem=void 0}alignToElement(l){let t=this._items.find(n=>n.elementRef.nativeElement===l),e=this._currentItem;if(t!==e&&(e?.deactivateInkBar(),t)){let n=e?.elementRef.nativeElement.getBoundingClientRect?.();t.activateInkBar(n),this._currentItem=t}}},Ae=(()=>{class a{_elementRef=d(A);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(t){this._fitToContent!==t&&(this._fitToContent=t,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(t){let e=this._elementRef.nativeElement;if(!t||!e.getBoundingClientRect||!this._inkBarContentElement){e.classList.add(Y);return}let n=e.getBoundingClientRect(),r=t.width/n.width,m=t.left-n.left;e.classList.add(Ce),this._inkBarContentElement.style.setProperty("transform",`translateX(${m}px) scaleX(${r})`),e.getBoundingClientRect(),e.classList.remove(Ce),e.classList.add(Y),this._inkBarContentElement.style.setProperty("transform","")}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(Y)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let t=this._elementRef.nativeElement.ownerDocument||document,e=this._inkBarElement=t.createElement("span"),n=this._inkBarContentElement=t.createElement("span");e.className="mdc-tab-indicator",n.className="mdc-tab-indicator__content mdc-tab-indicator__content--underline",e.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;let t=this._fitToContent?this._elementRef.nativeElement.querySelector(".mdc-tab__content"):this._elementRef.nativeElement;t.appendChild(this._inkBarElement)}static \u0275fac=function(e){return new(e||a)};static \u0275dir=W({type:a,inputs:{fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",f]}})}return a})();var xe={passive:!0},Fe=650,Ne=100,He=(()=>{class a{_elementRef=d(A);_changeDetectorRef=d(wt);_viewportRuler=d(zt);_dir=d(Ht,{optional:!0});_ngZone=d(_t);_platform=d(Lt);_sharedResizeObserver=d(Vt);_injector=d(ut);_renderer=d(vt);_animationsDisabled=Z();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new P;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new P;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(t){let e=isNaN(t)?0:t;this._selectedIndex!=e&&(this._selectedIndexChanged=!0,this._selectedIndex=e,this._keyManager&&this._keyManager.updateActiveItem(e))}_selectedIndex=0;selectFocusedIndex=new Q;indexFocused=new Q;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,"mouseleave",()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("before"),xe),this._renderer.listen(this._nextPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("after"),xe))}ngAfterContentInit(){let t=this._dir?this._dir.change:st("ltr"),e=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(ct(32),g(this._destroyed)),n=this._viewportRuler.change(150).pipe(g(this._destroyed)),r=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new Nt(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),gt(r,{injector:this._injector}),V(t,n,e,this._items.changes,this._itemsResized()).pipe(g(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),r()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(m=>{this.indexFocused.emit(m),this._setTabFocus(m)})}_itemsResized(){return typeof ResizeObserver!="function"?ot:this._items.changes.pipe(L(this._items),bt(t=>new it(e=>this._ngZone.runOutsideAngular(()=>{let n=new ResizeObserver(r=>e.next(r));return t.forEach(r=>n.observe(r.elementRef.nativeElement)),()=>{n.disconnect()}}))),mt(1),dt(t=>t.some(e=>e.contentRect.width>0&&e.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(t=>t()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(t){if(!Ft(t))switch(t.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let e=this._items.get(this.focusIndex);e&&!e.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(t))}break;default:this._keyManager?.onKeydown(t)}}_onContentChanges(){let t=this._elementRef.nativeElement.textContent;t!==this._currentTextContent&&(this._currentTextContent=t||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(t){!this._isValidIndex(t)||this.focusIndex===t||!this._keyManager||this._keyManager.setActiveItem(t)}_isValidIndex(t){return this._items?!!this._items.toArray()[t]:!0}_setTabFocus(t){if(this._showPaginationControls&&this._scrollToLabel(t),this._items&&this._items.length){this._items.toArray()[t].focus();let e=this._tabListContainer.nativeElement;this._getLayoutDirection()=="ltr"?e.scrollLeft=0:e.scrollLeft=e.scrollWidth-e.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;let t=this.scrollDistance,e=this._getLayoutDirection()==="ltr"?-t:t;this._tabList.nativeElement.style.transform=`translateX(${Math.round(e)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(t){this._scrollTo(t)}_scrollHeader(t){let e=this._tabListContainer.nativeElement.offsetWidth,n=(t=="before"?-1:1)*e/3;return this._scrollTo(this._scrollDistance+n)}_handlePaginatorClick(t){this._stopInterval(),this._scrollHeader(t)}_scrollToLabel(t){if(this.disablePagination)return;let e=this._items?this._items.toArray()[t]:null;if(!e)return;let n=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:r,offsetWidth:m}=e.elementRef.nativeElement,x,I;this._getLayoutDirection()=="ltr"?(x=r,I=x+m):(I=this._tabListInner.nativeElement.offsetWidth-r,x=I-m);let z=this.scrollDistance,at=this.scrollDistance+n;x<z?this.scrollDistance-=z-x:I>at&&(this.scrollDistance+=Math.min(I-at,x-z))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let t=this._tabListInner.nativeElement.scrollWidth,e=this._elementRef.nativeElement.offsetWidth,n=t-e>=5;n||(this.scrollDistance=0),n!==this._showPaginationControls&&(this._showPaginationControls=n,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){let t=this._tabListInner.nativeElement.scrollWidth,e=this._tabListContainer.nativeElement.offsetWidth;return t-e||0}_alignInkBarToSelectedTab(){let t=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,e=t?t.elementRef.nativeElement:null;e?this._inkBar.alignToElement(e):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(t,e){e&&e.button!=null&&e.button!==0||(this._stopInterval(),lt(Fe,Ne).pipe(g(V(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:n,distance:r}=this._scrollHeader(t);(r===0||r>=n)&&this._stopInterval()}))}_scrollTo(t){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let e=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(e,t)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:e,distance:this._scrollDistance}}static \u0275fac=function(e){return new(e||a)};static \u0275dir=W({type:a,inputs:{disablePagination:[2,"disablePagination","disablePagination",f],selectedIndex:[2,"selectedIndex","selectedIndex",q]},outputs:{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"}})}return a})();var Oe=new ht("MAT_TABS_CONFIG");var et=(()=>{class a extends He{_focusedItem=v(null);get fitInkBarToContent(){return this._fitInkBarToContent.value}set fitInkBarToContent(t){this._fitInkBarToContent.next(t),this._changeDetectorRef.markForCheck()}_fitInkBarToContent=new rt(!1);stretchTabs=!0;get animationDuration(){return this._animationDuration}set animationDuration(t){let e=t+"";this._animationDuration=/^\d+$/.test(e)?t+"ms":e}_animationDuration;_items;get backgroundColor(){return this._backgroundColor}set backgroundColor(t){let e=this._elementRef.nativeElement.classList;e.remove("mat-tabs-with-background",`mat-background-${this.backgroundColor}`),t&&e.add("mat-tabs-with-background",`mat-background-${t}`),this._backgroundColor=t}_backgroundColor;get disableRipple(){return this._disableRipple()}set disableRipple(t){this._disableRipple.set(t)}_disableRipple=v(!1);color="primary";tabPanel;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;constructor(){let t=d(Oe,{optional:!0});super(),this.disablePagination=t&&t.disablePagination!=null?t.disablePagination:!1,this.fitInkBarToContent=t&&t.fitInkBarToContent!=null?t.fitInkBarToContent:!1,this.stretchTabs=t&&t.stretchTabs!=null?t.stretchTabs:!0}_itemSelected(){}ngAfterContentInit(){this._inkBar=new J(this._items),this._items.changes.pipe(L(null),g(this._destroyed)).subscribe(()=>this.updateActiveLink()),super.ngAfterContentInit(),this._keyManager.change.pipe(L(null),g(this._destroyed)).subscribe(()=>this._focusedItem.set(this._keyManager?.activeItem||null))}ngAfterViewInit(){this.tabPanel,super.ngAfterViewInit()}updateActiveLink(){if(!this._items)return;let t=this._items.toArray();for(let e=0;e<t.length;e++)if(t[e].active){this.selectedIndex=e,this.tabPanel&&(this.tabPanel._activeTabId=t[e].id),this._focusedItem.set(t[e]),this._changeDetectorRef.markForCheck();return}this.selectedIndex=-1}_getRole(){return this.tabPanel?"tablist":this._elementRef.nativeElement.getAttribute("role")}_hasFocus(t){return this._keyManager?.activeItem===t}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=k({type:a,selectors:[["","mat-tab-nav-bar",""]],contentQueries:function(e,n,r){if(e&1&&Ct(r,nt,5),e&2){let m;y(m=C())&&(n._items=m)}},viewQuery:function(e,n){if(e&1&&xt(Me,7)(Ee,7)(Re,7)(Pe,5)(Le,5),e&2){let r;y(r=C())&&(n._tabListContainer=r.first),y(r=C())&&(n._tabList=r.first),y(r=C())&&(n._tabListInner=r.first),y(r=C())&&(n._nextPaginator=r.first),y(r=C())&&(n._previousPaginator=r.first)}},hostAttrs:[1,"mat-mdc-tab-nav-bar","mat-mdc-tab-header"],hostVars:17,hostBindings:function(e,n){e&2&&(F("role",n._getRole()),kt("--mat-tab-animation-duration",n.animationDuration),M("mat-mdc-tab-header-pagination-controls-enabled",n._showPaginationControls)("mat-mdc-tab-header-rtl",n._getLayoutDirection()=="rtl")("mat-mdc-tab-nav-bar-stretch-tabs",n.stretchTabs)("mat-primary",n.color!=="warn"&&n.color!=="accent")("mat-accent",n.color==="accent")("mat-warn",n.color==="warn")("_mat-animation-noopable",n._animationsDisabled))},inputs:{fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",f],stretchTabs:[2,"mat-stretch-tabs","stretchTabs",f],animationDuration:"animationDuration",backgroundColor:"backgroundColor",disableRipple:[2,"disableRipple","disableRipple",f],color:"color",tabPanel:"tabPanel"},exportAs:["matTabNavBar","matTabNav"],features:[j],attrs:Be,ngContentSelectors:tt,decls:13,vars:6,consts:[["previousPaginator",""],["tabListContainer",""],["tabList",""],["tabListInner",""],["nextPaginator",""],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-before",3,"click","mousedown","touchend","matRippleDisabled"],[1,"mat-mdc-tab-header-pagination-chevron"],[1,"mat-mdc-tab-link-container",3,"keydown"],[1,"mat-mdc-tab-list",3,"cdkObserveContent"],[1,"mat-mdc-tab-links"],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-after",3,"mousedown","click","touchend","matRippleDisabled"]],template:function(e,n){e&1&&(N(),i(0,"div",5,0),_("click",function(){return n._handlePaginatorClick("before")})("mousedown",function(m){return n._handlePaginatorPress("before",m)})("touchend",function(){return n._stopInterval()}),b(2,"div",6),o(),i(3,"div",7,1),_("keydown",function(m){return n._handleKeydown(m)}),i(5,"div",8,2),_("cdkObserveContent",function(){return n._onContentChanges()}),i(7,"div",9,3),H(9),o()()(),i(10,"div",10,4),_("mousedown",function(m){return n._handlePaginatorPress("after",m)})("click",function(){return n._handlePaginatorClick("after")})("touchend",function(){return n._stopInterval()}),b(12,"div",6),o()),e&2&&(M("mat-mdc-tab-header-pagination-disabled",n._disableScrollBefore),p("matRippleDisabled",n._disableScrollBefore||n.disableRipple),c(10),M("mat-mdc-tab-header-pagination-disabled",n._disableScrollAfter),p("matRippleDisabled",n._disableScrollAfter||n.disableRipple))},dependencies:[K,At],styles:[`.mdc-tab {
  min-width: 90px;
  padding: 0 24px;
  display: flex;
  flex: 1 0 auto;
  justify-content: center;
  box-sizing: border-box;
  border: none;
  outline: none;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  z-index: 1;
  touch-action: manipulation;
}

.mdc-tab__content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
  pointer-events: none;
}

.mdc-tab__text-label {
  transition: 150ms color linear;
  display: inline-block;
  line-height: 1;
  z-index: 2;
}

.mdc-tab--active .mdc-tab__text-label {
  transition-delay: 100ms;
}

._mat-animation-noopable .mdc-tab__text-label {
  transition: none;
}

.mdc-tab-indicator {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: center;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.mdc-tab-indicator__content {
  transition: var(--mat-tab-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: left;
  opacity: 0;
}

.mdc-tab-indicator__content--underline {
  align-self: flex-end;
  box-sizing: border-box;
  width: 100%;
  border-top-style: solid;
}

.mdc-tab-indicator--active .mdc-tab-indicator__content {
  opacity: 1;
}

._mat-animation-noopable .mdc-tab-indicator__content, .mdc-tab-indicator--no-transition .mdc-tab-indicator__content {
  transition: none;
}

.mat-mdc-tab-ripple.mat-mdc-tab-ripple {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;
}

.mat-mdc-tab-header {
  display: flex;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
}

.mdc-tab-indicator .mdc-tab-indicator__content {
  transition-duration: var(--mat-tab-animation-duration, 250ms);
}

.mat-mdc-tab-header-pagination {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: none;
  justify-content: center;
  align-items: center;
  min-width: 32px;
  cursor: pointer;
  z-index: 2;
  -webkit-tap-highlight-color: transparent;
  touch-action: none;
  box-sizing: content-box;
  outline: 0;
}
.mat-mdc-tab-header-pagination::-moz-focus-inner {
  border: 0;
}
.mat-mdc-tab-header-pagination .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination {
  display: flex;
}

.mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after {
  padding-left: 4px;
}
.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(-135deg);
}

.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-pagination-after {
  padding-right: 4px;
}
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(45deg);
}

.mat-mdc-tab-header-pagination-chevron {
  border-style: solid;
  border-width: 2px 2px 0 0;
  height: 8px;
  width: 8px;
  border-color: var(--mat-tab-pagination-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-tab-header-pagination-disabled {
  box-shadow: none;
  cursor: default;
  pointer-events: none;
}
.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron {
  opacity: 0.4;
}

.mat-mdc-tab-list {
  flex-grow: 1;
  position: relative;
  transition: transform 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
._mat-animation-noopable .mat-mdc-tab-list {
  transition: none;
}

.mat-mdc-tab-links {
  display: flex;
  flex: 1 0 auto;
}
[mat-align-tabs=center] > .mat-mdc-tab-link-container .mat-mdc-tab-links {
  justify-content: center;
}
[mat-align-tabs=end] > .mat-mdc-tab-link-container .mat-mdc-tab-links {
  justify-content: flex-end;
}
.cdk-drop-list .mat-mdc-tab-links, .mat-mdc-tab-links.cdk-drop-list {
  min-height: var(--mat-tab-container-height, 48px);
}

.mat-mdc-tab-link-container {
  display: flex;
  flex-grow: 1;
  overflow: hidden;
  z-index: 1;
  border-bottom-style: solid;
  border-bottom-width: var(--mat-tab-divider-height, 1px);
  border-bottom-color: var(--mat-tab-divider-color, var(--mat-sys-surface-variant));
}

.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination {
  background-color: var(--mat-tab-background-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background.mat-primary > .mat-mdc-tab-link-container .mat-mdc-tab-link .mdc-tab__text-label {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background.mat-primary > .mat-mdc-tab-link-container .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-link-container .mat-mdc-tab-link:not(.mdc-tab--active) .mdc-tab__text-label {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-link-container .mat-mdc-tab-link:not(.mdc-tab--active) .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container .mat-focus-indicator::before, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-focus-indicator::before {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container .mat-ripple-element, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container .mdc-tab__ripple::before, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-ripple-element, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mdc-tab__ripple::before {
  background-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container .mat-mdc-tab-header-pagination-chevron, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron {
  color: var(--mat-tab-foreground-color);
}
`],encapsulation:2})}return a})(),nt=(()=>{class a extends Ae{_tabNavBar=d(et);elementRef=d(A);_focusMonitor=d(Bt);_destroyed=new P;_isActive=!1;_tabIndex=R(()=>this._tabNavBar._focusedItem()===this?this.tabIndex:-1);get active(){return this._isActive}set active(t){t!==this._isActive&&(this._isActive=t,this._tabNavBar.updateActiveLink())}disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(t){this._disableRipple.set(t)}_disableRipple=v(!1);tabIndex=0;rippleConfig;get rippleDisabled(){return this.disabled||this.disableRipple||this._tabNavBar.disableRipple||!!this.rippleConfig.disabled}id=d($).getId("mat-tab-link-");constructor(){super(),d(St).load(Wt);let t=d(Qt,{optional:!0}),e=d(new Tt("tabindex"),{optional:!0});this.rippleConfig=t||{},this.tabIndex=e==null?0:parseInt(e)||0,Z()&&(this.rippleConfig.animation={enterDuration:0,exitDuration:0}),this._tabNavBar._fitInkBarToContent.pipe(g(this._destroyed)).subscribe(n=>{this.fitInkBarToContent=n})}focus(){this.elementRef.nativeElement.focus()}ngAfterViewInit(){this._focusMonitor.monitor(this.elementRef)}ngOnDestroy(){this._destroyed.next(),this._destroyed.complete(),super.ngOnDestroy(),this._focusMonitor.stopMonitoring(this.elementRef)}_handleFocus(){this._tabNavBar.focusIndex=this._tabNavBar._items.toArray().indexOf(this)}_handleKeydown(t){(t.keyCode===32||t.keyCode===13)&&(this.disabled?t.preventDefault():this._tabNavBar.tabPanel&&(t.keyCode===32&&t.preventDefault(),this.elementRef.nativeElement.click()))}_getAriaControls(){return this._tabNavBar.tabPanel?this._tabNavBar.tabPanel?.id:this.elementRef.nativeElement.getAttribute("aria-controls")}_getAriaSelected(){return this._tabNavBar.tabPanel?this.active?"true":"false":this.elementRef.nativeElement.getAttribute("aria-selected")}_getAriaCurrent(){return this.active&&!this._tabNavBar.tabPanel?"page":null}_getRole(){return this._tabNavBar.tabPanel?"tab":this.elementRef.nativeElement.getAttribute("role")}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=k({type:a,selectors:[["","mat-tab-link",""],["","matTabLink",""]],hostAttrs:[1,"mdc-tab","mat-mdc-tab-link","mat-focus-indicator"],hostVars:11,hostBindings:function(e,n){e&1&&_("focus",function(){return n._handleFocus()})("keydown",function(m){return n._handleKeydown(m)}),e&2&&(F("aria-controls",n._getAriaControls())("aria-current",n._getAriaCurrent())("aria-disabled",n.disabled)("aria-selected",n._getAriaSelected())("id",n.id)("tabIndex",n._tabIndex())("role",n._getRole()),M("mat-mdc-tab-disabled",n.disabled)("mdc-tab--active",n.active))},inputs:{active:[2,"active","active",f],disabled:[2,"disabled","disabled",f],disableRipple:[2,"disableRipple","disableRipple",f],tabIndex:[2,"tabIndex","tabIndex",t=>t==null?0:q(t)],id:"id"},exportAs:["matTabLink"],features:[j],attrs:Se,ngContentSelectors:tt,decls:5,vars:2,consts:[[1,"mdc-tab__ripple"],["mat-ripple","",1,"mat-mdc-tab-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mdc-tab__content"],[1,"mdc-tab__text-label"]],template:function(e,n){e&1&&(N(),b(0,"span",0)(1,"div",1),i(2,"span",2)(3,"span",3),H(4),o()()),e&2&&(c(),p("matRippleTrigger",n.elementRef.nativeElement)("matRippleDisabled",n.rippleDisabled))},dependencies:[K],styles:[`.mat-mdc-tab-link {
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-decoration: none;
  background: none;
  height: var(--mat-tab-container-height, 48px);
  font-family: var(--mat-tab-label-text-font, var(--mat-sys-title-small-font));
  font-size: var(--mat-tab-label-text-size, var(--mat-sys-title-small-size));
  letter-spacing: var(--mat-tab-label-text-tracking, var(--mat-sys-title-small-tracking));
  line-height: var(--mat-tab-label-text-line-height, var(--mat-sys-title-small-line-height));
  font-weight: var(--mat-tab-label-text-weight, var(--mat-sys-title-small-weight));
}
.mat-mdc-tab-link.mdc-tab {
  flex-grow: 0;
}
.mat-mdc-tab-link .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-indicator-color, var(--mat-sys-primary));
  border-top-width: var(--mat-tab-active-indicator-height, 2px);
  border-radius: var(--mat-tab-active-indicator-shape, 0);
}
.mat-mdc-tab-link:hover .mdc-tab__text-label {
  color: var(--mat-tab-inactive-hover-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-link:focus .mdc-tab__text-label {
  color: var(--mat-tab-inactive-focus-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-link.mdc-tab--active .mdc-tab__text-label {
  color: var(--mat-tab-active-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-link.mdc-tab--active .mdc-tab__ripple::before,
.mat-mdc-tab-link.mdc-tab--active .mat-ripple-element {
  background-color: var(--mat-tab-active-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-link.mdc-tab--active:hover .mdc-tab__text-label {
  color: var(--mat-tab-active-hover-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-link.mdc-tab--active:hover .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-hover-indicator-color, var(--mat-sys-primary));
}
.mat-mdc-tab-link.mdc-tab--active:focus .mdc-tab__text-label {
  color: var(--mat-tab-active-focus-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-link.mdc-tab--active:focus .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-focus-indicator-color, var(--mat-sys-primary));
}
.mat-mdc-tab-link.mat-mdc-tab-disabled {
  opacity: 0.4;
  pointer-events: none;
}
.mat-mdc-tab-link.mat-mdc-tab-disabled .mdc-tab__content {
  pointer-events: none;
}
.mat-mdc-tab-link.mat-mdc-tab-disabled .mdc-tab__ripple::before,
.mat-mdc-tab-link.mat-mdc-tab-disabled .mat-ripple-element {
  background-color: var(--mat-tab-disabled-ripple-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-tab-link .mdc-tab__ripple::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-link .mdc-tab__text-label {
  color: var(--mat-tab-inactive-label-text-color, var(--mat-sys-on-surface));
  display: inline-flex;
  align-items: center;
}
.mat-mdc-tab-link .mdc-tab__content {
  position: relative;
  pointer-events: auto;
}
.mat-mdc-tab-link:hover .mdc-tab__ripple::before {
  opacity: 0.04;
}
.mat-mdc-tab-link.cdk-program-focused .mdc-tab__ripple::before, .mat-mdc-tab-link.cdk-keyboard-focused .mdc-tab__ripple::before {
  opacity: 0.12;
}
.mat-mdc-tab-link .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-header.mat-mdc-tab-nav-bar-stretch-tabs .mat-mdc-tab-link {
  flex-grow: 1;
}
.mat-mdc-tab-link::before {
  margin: 5px;
}

@media (max-width: 599px) {
  .mat-mdc-tab-link {
    min-width: 72px;
  }
}
`],encapsulation:2,changeDetection:0})}return a})(),Te=(()=>{class a{id=d($).getId("mat-tab-nav-panel-");_activeTabId;static \u0275fac=function(e){return new(e||a)};static \u0275cmp=k({type:a,selectors:[["mat-tab-nav-panel"]],hostAttrs:["role","tabpanel",1,"mat-mdc-tab-nav-panel"],hostVars:2,hostBindings:function(e,n){e&2&&F("aria-labelledby",n._activeTabId)("id",n.id)},inputs:{id:"id"},exportAs:["matTabNavPanel"],ngContentSelectors:tt,decls:1,vars:0,template:function(e,n){e&1&&(N(),H(0))},encapsulation:2,changeDetection:0})}return a})(),we=(()=>{class a{static \u0275fac=function(e){return new(e||a)};static \u0275mod=yt({type:a});static \u0275inj=pt({imports:[Ot]})}return a})();var Ve=()=>["./overview"],Qe=()=>["./posts"];function We(a,l){a&1&&(i(0,"mat-card",3)(1,"div",22)(2,"div",23),b(3,"app-skeleton",24),i(4,"div",25),b(5,"app-skeleton",26)(6,"app-skeleton",27)(7,"app-skeleton",28),o(),i(8,"div",29),b(9,"app-skeleton",30)(10,"app-skeleton",31),o()()()()),a&2&&(c(3),p("circle",!0))}function je(a,l){a&1&&(i(0,"span",37),s(1,"Admin"),o())}function Ge(a,l){a&1&&(i(0,"span",38),s(1,"Editor"),o())}function Ue(a,l){a&1&&(i(0,"span",39),s(1,"Viewer"),o())}function qe(a,l){a&1&&(i(0,"span",40),s(1,"Active"),o())}function $e(a,l){a&1&&(i(0,"span",41),s(1,"Inactive"),o())}function Ze(a,l){if(a&1&&(i(0,"p",42),s(1),o()),a&2){let t=T();c(),E(t.phone)}}function Ke(a,l){if(a&1){let t=G();i(0,"mat-card",3)(1,"div",22)(2,"div",32),b(3,"img",33),i(4,"div",34)(5,"div",35)(6,"h4",36),s(7),o(),h(8,je,2,0,"span",37)(9,Ge,2,0,"span",38)(10,Ue,2,0,"span",39),h(11,qe,2,0,"span",40)(12,$e,2,0,"span",41),o(),i(13,"p",42),s(14),o(),h(15,Ze,2,1,"p",42),o(),i(16,"div",43)(17,"div",44)(18,"button",45),_("click",function(){B(t);let n=T(2);return S(n.openEdit())}),b(19,"i",46),i(20,"span",47),s(21,"Edit"),o()(),i(22,"button",48),_("click",function(){B(t);let n=T(2);return S(n.confirmDelete())}),b(23,"i",49),i(24,"span",47),s(25,"Delete"),o()()()()()()()}if(a&2){let t,e=l;c(3),p("src",e.avatar,ft)("alt",e.name),c(4),E(e.name),c(),u((t=e.role)==="Admin"?8:t==="Editor"?9:10),c(3),u(e.status==="active"?11:12),c(3),E(e.email),c(),u(e.phone?15:-1)}}function Ye(a,l){if(a&1&&h(0,Ke,26,7,"mat-card",3),a&2){let t,e=T();u((t=e.user())?0:-1,t)}}function Xe(a,l){a&1&&(i(0,"mat-error"),s(1,"Name is required"),o())}function Je(a,l){a&1&&(i(0,"mat-error"),s(1,"Email is required"),o())}function tn(a,l){a&1&&(i(0,"mat-error"),s(1,"Enter a valid email"),o())}var Ie=class a{store=d(ye);route=d(It);router=d(Mt);dialog=d(_e);userId=Number(this.route.snapshot.paramMap.get("id"));user=R(()=>this.store.getById(this.userId));loading=R(()=>this.store.loading()&&this.store.users().length===0);drawerOpen=v(!1);saving=v(!1);form=new qt({name:new w("",{validators:[O.required],nonNullable:!0}),email:new w("",{validators:[O.required,O.email],nonNullable:!0}),phone:new w("",{nonNullable:!0}),role:new w("Viewer",{nonNullable:!0}),status:new w("active",{nonNullable:!0})});constructor(){this.store.users().length||this.store.load()}openEdit(){let l=this.user();l&&(this.form.patchValue(l),this.drawerOpen.set(!0))}save(){if(this.form.invalid){this.form.markAllAsTouched();return}this.saving.set(!0),this.store.update(this.userId,this.form.getRawValue()).subscribe({next:()=>{this.saving.set(!1),this.drawerOpen.set(!1)},error:()=>{this.saving.set(!1)}})}confirmDelete(){let l=this.user();l&&this.dialog.open(ge,{data:{title:"Delete User",message:`Are you sure you want to delete ${l.name}?`,confirmLabel:"Delete",danger:!0},width:"400px"}).afterClosed().subscribe(t=>{t&&this.store.remove(this.userId).subscribe(()=>this.router.navigate(["/users"]))})}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=k({type:a,selectors:[["app-user-detail"]],decls:51,vars:14,consts:[["ovLink","routerLinkActive"],["postsLink","routerLinkActive"],["tabPanel",""],[1,"cardWithShadow","mb-6"],[1,"cardWithShadow"],["mat-tab-nav-bar","","mat-stretch-tabs","false",3,"tabPanel"],["mat-tab-link","","routerLinkActive","",3,"routerLink","active"],["data-icon","solar:user-id-line-duotone",1,"iconify","text-base","mr-1.5"],["data-icon","solar:document-text-line-duotone",1,"iconify","text-base","mr-1.5"],["title","Edit User",3,"save","cancel","open","saving"],[1,"flex","flex-col","gap-1",3,"formGroup"],["appearance","outline",1,"w-full"],["matInput","","formControlName","name"],["matInput","","formControlName","email","type","email"],["matInput","","formControlName","phone"],["formControlName","role"],["value","Admin"],["value","Editor"],["value","Viewer"],["formControlName","status"],["value","active"],["value","inactive"],[1,"p-6"],[1,"flex","items-center","gap-5"],["width","80px","height","80px",3,"circle"],[1,"flex-1","flex","flex-col","gap-2"],["height","1.25rem","width","40%"],["height","0.875rem","width","25%"],["height","0.875rem","width","30%"],[1,"flex","gap-2","shrink-0"],["height","36px","width","80px"],["height","36px","width","90px"],[1,"flex","flex-col","sm:flex-row","items-start","sm:items-center","gap-5"],[1,"size-20","rounded-full","object-cover","ring-4","ring-(--mat-sys-outline-variant)","shrink-0",3,"src","alt"],[1,"flex-1","min-w-0"],[1,"flex","flex-wrap","items-center","gap-2","mb-1"],[1,"text-xl","font-bold","m-0"],[1,"bg-light-primary","text-primary","rounded","font-semibold","px-2","py-0.5","text-xs"],[1,"bg-light-secondary","text-secondary","rounded","font-semibold","px-2","py-0.5","text-xs"],[1,"bg-light-warning","text-warning","rounded","font-semibold","px-2","py-0.5","text-xs"],[1,"bg-light-success","text-success","rounded","font-semibold","px-2","py-0.5","text-xs"],[1,"bg-light-error","text-error","rounded","font-semibold","px-2","py-0.5","text-xs"],[1,"text-sm","text-muted","m-0"],[1,"shrink-0","self-start"],[1,"hidden","sm:flex","gap-2"],["mat-stroked-button","","aria-label","Edit user",3,"click"],["data-icon","solar:pen-line-duotone",1,"iconify","text-base"],[1,"ml-1"],["mat-stroked-button","","aria-label","Delete user",1,"text-error!",3,"click"],["data-icon","solar:trash-bin-minimalistic-line-duotone",1,"iconify","text-base"]],template:function(t,e){if(t&1&&(b(0,"app-breadcrumb"),h(1,We,11,1,"mat-card",3)(2,Ye,1,1),i(3,"mat-card",4)(4,"nav",5)(5,"a",6,0),b(7,"i",7),s(8," Overview "),o(),i(9,"a",6,1),b(11,"i",8),s(12," Posts "),o()(),i(13,"mat-tab-nav-panel",null,2),b(15,"router-outlet"),o()(),i(16,"app-crud-drawer",9),_("save",function(){return e.save()})("cancel",function(){return e.drawerOpen.set(!1)}),i(17,"form",10)(18,"mat-form-field",11)(19,"mat-label"),s(20,"Full name"),o(),b(21,"input",12),h(22,Xe,2,0,"mat-error"),o(),i(23,"mat-form-field",11)(24,"mat-label"),s(25,"Email"),o(),b(26,"input",13),h(27,Je,2,0,"mat-error"),h(28,tn,2,0,"mat-error"),o(),i(29,"mat-form-field",11)(30,"mat-label"),s(31,"Phone"),o(),b(32,"input",14),o(),i(33,"mat-form-field",11)(34,"mat-label"),s(35,"Role"),o(),i(36,"mat-select",15)(37,"mat-option",16),s(38,"Admin"),o(),i(39,"mat-option",17),s(40,"Editor"),o(),i(41,"mat-option",18),s(42,"Viewer"),o()()(),i(43,"mat-form-field",11)(44,"mat-label"),s(45,"Status"),o(),i(46,"mat-select",19)(47,"mat-option",20),s(48,"Active"),o(),i(49,"mat-option",21),s(50,"Inactive"),o()()()()()),t&2){let n=D(6),r=D(10),m=D(14);c(),u(e.loading()?1:2),c(3),p("tabPanel",m),c(),p("routerLink",U(12,Ve))("active",n.isActive),c(4),p("routerLink",U(13,Qe))("active",r.isActive),c(7),p("open",e.drawerOpen())("saving",e.saving()),c(),p("formGroup",e.form),c(5),u(e.form.controls.name.invalid&&e.form.controls.name.touched?22:-1),c(5),u(e.form.controls.email.hasError("required")&&e.form.controls.email.touched?27:-1),c(),u(e.form.controls.email.hasError("email")&&e.form.controls.email.touched?28:-1)}},dependencies:[Pt,Dt,Et,Rt,Yt,$t,jt,Gt,Ut,Kt,Zt,re,ie,te,Jt,ae,we,et,Te,nt,de,le,oe,se,ue,he,be,me,ce,ee,Xt,ne,fe,pe,ve],encapsulation:2,changeDetection:0})};export{Ie as UserDetail};
