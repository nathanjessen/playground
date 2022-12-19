try{
var zo=Object.defineProperty;var x=(o,e)=>()=>(o&&(e=o(o=0)),e);var Ht=(o,e)=>{for(var t in e)zo(o,t,{get:e[t],enumerable:!0})};var c=x(()=>{});var m,u=x(()=>{m={}});var Di,Vi,Yi,zt,Wi,Zi,Gi,Xi,Ki,qi,Ji,Qi,Dt,es,ts,rs,os,ns,is,ss,as,Pe,ls,Me,cs,us,ee,ds,ps,hs,j,fs,ms,gs,Vt,vs,ys,bs,xs,_s,ws,$s,Ss,Es,As,ks,Yt,Cs,Ps,Ms,Ts,Os,Ns,Rs,Bs,js,Ls,Is,Hs,Fs,Us,zs,Ds,F=x(()=>{c();u();Di=__STORYBOOKCOMPONENTS__,{A:Vi,ActionBar:Yi,AddonPanel:zt,Badge:Wi,Bar:Zi,Blockquote:Gi,Button:Xi,Code:Ki,DL:qi,Div:Ji,DocumentWrapper:Qi,FlexBar:Dt,Form:es,H1:ts,H2:rs,H3:os,H4:ns,H5:is,H6:ss,HR:as,IconButton:Pe,IconButtonSkeleton:ls,Icons:Me,Img:cs,LI:us,Link:ee,Loader:ds,OL:ps,P:hs,Placeholder:j,Pre:fs,ResetWrapper:ms,ScrollArea:gs,Separator:Vt,Spaced:vs,Span:ys,StorybookIcon:bs,StorybookLogo:xs,Symbols:_s,SyntaxHighlighter:ws,TT:$s,TabBar:Ss,TabButton:Es,TabWrapper:As,Table:ks,Tabs:Yt,TabsState:Cs,TooltipLinkList:Ps,TooltipMessage:Ms,TooltipNote:Ts,UL:Os,WithTooltip:Ns,WithTooltipPure:Rs,Zoom:Bs,codeCommon:js,components:Ls,createCopyToClipboardFunction:Is,getStoryHref:Hs,interleaveSeparators:Fs,nameSpaceClassNames:Us,resetComponents:zs,withReset:Ds}=__STORYBOOKCOMPONENTS__});var Zs,Gs,Xs,Ks,qs,Js,Qs,ea,ta,ra,oa,na,M,ia,sa,aa,la,h,ca,ua,da,pa,ha,fa,ma,B=x(()=>{c();u();Zs=__STORYBOOKTHEMING__,{CacheProvider:Gs,ClassNames:Xs,Global:Ks,ThemeProvider:qs,background:Js,color:Qs,convert:ea,create:ta,createCache:ra,createGlobal:oa,createReset:na,css:M,darken:ia,ensure:sa,ignoreSsrWarning:aa,isPropValid:la,jsx:h,keyframes:ca,lighten:ua,styled:da,themes:pa,typography:ha,useTheme:fa,withTheme:ma}=__STORYBOOKTHEMING__});var Oe={};Ht(Oe,{Children:()=>Yo,Component:()=>Qe,Fragment:()=>$,Profiler:()=>Wo,PureComponent:()=>Zo,StrictMode:()=>Go,Suspense:()=>et,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:()=>Xo,cloneElement:()=>Ko,createContext:()=>qo,createElement:()=>Jo,createFactory:()=>Qo,createRef:()=>en,default:()=>Vo,forwardRef:()=>tn,isValidElement:()=>rn,lazy:()=>tt,memo:()=>on,useCallback:()=>L,useContext:()=>nn,useDebugValue:()=>sn,useEffect:()=>T,useImperativeHandle:()=>an,useLayoutEffect:()=>ln,useMemo:()=>Y,useReducer:()=>cn,useRef:()=>un,useState:()=>C,version:()=>dn});var Vo,Yo,Qe,$,Wo,Zo,Go,et,Xo,Ko,qo,Jo,Qo,en,tn,rn,tt,on,L,nn,sn,T,an,ln,Y,cn,un,C,dn,O=x(()=>{c();u();Vo=__REACT__,{Children:Yo,Component:Qe,Fragment:$,Profiler:Wo,PureComponent:Zo,StrictMode:Go,Suspense:et,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:Xo,cloneElement:Ko,createContext:qo,createElement:Jo,createFactory:Qo,createRef:en,forwardRef:tn,isValidElement:rn,lazy:tt,memo:on,useCallback:L,useContext:nn,useDebugValue:sn,useEffect:T,useImperativeHandle:an,useLayoutEffect:ln,useMemo:Y,useReducer:cn,useRef:un,useState:C,version:dn}=__REACT__});var ot,ae,hn,fn,mn,Wt,Zt,Gt,Ne=x(()=>{c();u();O();B();F();ot=function(o,e){return Object.defineProperty?Object.defineProperty(o,"raw",{value:e}):o.raw=e,o},ae=function(o){var e=o.config,t=o.defer,r=t===void 0?!1:t,n=C(r?void 0:e.url),i=n[0],s=n[1],d=C(!1),a=d[0],l=d[1];return T(function(){if(r){var p=requestAnimationFrame(function(){s(e.url)});return function(){return cancelAnimationFrame(p)}}},[r,e.url]),T(function(){l(!1)},[i]),h("div",{css:hn},!a&&h(j,{css:fn},"Loading..."),h("iframe",{css:mn,src:i,allowFullScreen:e.allowFullscreen,onLoad:function(){return l(!0)}}))},hn=M(Wt||(Wt=ot([`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  overflow: hidden;
`],[`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  overflow: hidden;
`]))),fn=M(Zt||(Zt=ot([`
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
`],[`
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
`]))),mn=M(Gt||(Gt=ot([`
  position: relative;
  width: 100%;
  height: 100%;
  border: none;

  z-index: 1;
`],[`
  position: relative;
  width: 100%;
  height: 100%;
  border: none;

  z-index: 1;
`])))});var nt,gn,Xt,it=x(()=>{c();u();O();B();Ne();nt=/https:\/\/([w.-]+.)?figma.com\/(file|proto)\/([0-9a-zA-Z]{22,128})(?:\/.*)?$/,gn=function(o){return nt.test(o)},Xt=function(o){var e=o.config,t=Y(function(){var r=gn(e.url);if(!r)return console.warn(`[storybook-addon-designs] The URL you specified is not valid Figma URL.
The addon fallbacks to normal iframe mode.For more detail, please check <https://www.figma.com/developers/embed>.`),e;var n=e.embedHost||location.hostname,i="https://www.figma.com/embed?embed_host=".concat(n,"&url=").concat(e.url);return{url:i,allowFullscreen:e.allowFullscreen}},[e.url,e.allowFullscreen,e.embedHost]);return h(ae,{defer:!0,config:t})}});var Re,Be,lt,pr,ve,hr,N,ct,je,ut=x(()=>{c();u();Re=window,Be=Re.ShadowRoot&&(Re.ShadyCSS===void 0||Re.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,lt=Symbol(),pr=new WeakMap,ve=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==lt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(Be&&e===void 0){let r=t!==void 0&&t.length===1;r&&(e=pr.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&pr.set(t,e))}return e}toString(){return this.cssText}},hr=o=>new ve(typeof o=="string"?o:o+"",void 0,lt),N=(o,...e)=>{let t=o.length===1?o[0]:e.reduce((r,n,i)=>r+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+o[i+1],o[0]);return new ve(t,o,lt)},ct=(o,e)=>{Be?o.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{let r=document.createElement("style"),n=Re.litNonce;n!==void 0&&r.setAttribute("nonce",n),r.textContent=t.cssText,o.appendChild(r)})},je=Be?o=>o:o=>o instanceof CSSStyleSheet?(e=>{let t="";for(let r of e.cssRules)t+=r.cssText;return hr(t)})(o):o});var dt,Le,fr,En,mr,ht,gr,pt,W,Ie=x(()=>{c();u();ut();ut();Le=window,fr=Le.trustedTypes,En=fr?fr.emptyScript:"",mr=Le.reactiveElementPolyfillSupport,ht={toAttribute(o,e){switch(e){case Boolean:o=o?En:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,e){let t=o;switch(e){case Boolean:t=o!==null;break;case Number:t=o===null?null:Number(o);break;case Object:case Array:try{t=JSON.parse(o)}catch{t=null}}return t}},gr=(o,e)=>e!==o&&(e==e||o==o),pt={attribute:!0,type:String,converter:ht,reflect:!1,hasChanged:gr},W=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();let e=[];return this.elementProperties.forEach((t,r)=>{let n=this._$Ep(r,t);n!==void 0&&(this._$Ev.set(n,r),e.push(n))}),e}static createProperty(e,t=pt){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){let r=typeof e=="symbol"?Symbol():"__"+e,n=this.getPropertyDescriptor(e,r,t);n!==void 0&&Object.defineProperty(this.prototype,e,n)}}static getPropertyDescriptor(e,t,r){return{get(){return this[t]},set(n){let i=this[e];this[t]=n,this.requestUpdate(e,i,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||pt}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;let e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let t=this.properties,r=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(let n of r)this.createProperty(n,t[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let r=new Set(e.flat(1/0).reverse());for(let n of r)t.unshift(je(n))}else e!==void 0&&t.push(je(e));return t}static _$Ep(e,t){let r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,r;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)===null||r===void 0||r.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;let t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return ct(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var r;return(r=t.hostConnected)===null||r===void 0?void 0:r.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var r;return(r=t.hostDisconnected)===null||r===void 0?void 0:r.call(t)})}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EO(e,t,r=pt){var n;let i=this.constructor._$Ep(e,r);if(i!==void 0&&r.reflect===!0){let s=(((n=r.converter)===null||n===void 0?void 0:n.toAttribute)!==void 0?r.converter:ht).toAttribute(t,r.type);this._$El=e,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$El=null}}_$AK(e,t){var r;let n=this.constructor,i=n._$Ev.get(e);if(i!==void 0&&this._$El!==i){let s=n.getPropertyOptions(i),d=typeof s.converter=="function"?{fromAttribute:s.converter}:((r=s.converter)===null||r===void 0?void 0:r.fromAttribute)!==void 0?s.converter:ht;this._$El=i,this[i]=d.fromAttribute(t,s.type),this._$El=null}}requestUpdate(e,t,r){let n=!0;e!==void 0&&(((r=r||this.constructor.getPropertyOptions(e)).hasChanged||gr)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),r.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,r))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,i)=>this[i]=n),this._$Ei=void 0);let t=!1,r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),(e=this._$ES)===null||e===void 0||e.forEach(n=>{var i;return(i=n.hostUpdate)===null||i===void 0?void 0:i.call(n)}),this.update(r)):this._$Ek()}catch(n){throw t=!1,this._$Ek(),n}t&&this._$AE(r)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostUpdated)===null||n===void 0?void 0:n.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,r)=>this._$EO(r,this[r],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};W.finalized=!0,W.elementProperties=new Map,W.elementStyles=[],W.shadowRootOptions={mode:"open"},mr?.({ReactiveElement:W}),((dt=Le.reactiveElementVersions)!==null&&dt!==void 0?dt:Le.reactiveElementVersions=[]).push("1.5.0")});function pe(o,e,t=o,r){var n,i,s,d;if(e===Z)return e;let a=r!==void 0?(n=t._$Co)===null||n===void 0?void 0:n[r]:t._$Cl,l=xe(e)?void 0:e._$litDirective$;return a?.constructor!==l&&((i=a?._$AO)===null||i===void 0||i.call(a,!1),l===void 0?a=void 0:(a=new l(o),a._$AT(o,t,r)),r!==void 0?((s=(d=t)._$Co)!==null&&s!==void 0?s:d._$Co=[])[r]=a:t._$Cl=a),a!==void 0&&(e=pe(o,a._$AS(o,e.values),a,r)),e}var ft,He,ue,vr,X,Sr,An,de,be,xe,Er,kn,ye,yr,br,te,xr,_r,Ar,kr,w,R,Z,A,wr,ce,Cn,re,mt,oe,he,gt,Pn,vt,yt,bt,$r,Cr,_e=x(()=>{c();u();He=window,ue=He.trustedTypes,vr=ue?ue.createPolicy("lit-html",{createHTML:o=>o}):void 0,X=`lit$${(Math.random()+"").slice(9)}$`,Sr="?"+X,An=`<${Sr}>`,de=document,be=(o="")=>de.createComment(o),xe=o=>o===null||typeof o!="object"&&typeof o!="function",Er=Array.isArray,kn=o=>Er(o)||typeof o?.[Symbol.iterator]=="function",ye=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,yr=/-->/g,br=/>/g,te=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),xr=/'/g,_r=/"/g,Ar=/^(?:script|style|textarea|title)$/i,kr=o=>(e,...t)=>({_$litType$:o,strings:e,values:t}),w=kr(1),R=kr(2),Z=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),wr=new WeakMap,ce=de.createTreeWalker(de,129,null,!1),Cn=(o,e)=>{let t=o.length-1,r=[],n,i=e===2?"<svg>":"",s=ye;for(let a=0;a<t;a++){let l=o[a],p,f,y=-1,b=0;for(;b<l.length&&(s.lastIndex=b,f=s.exec(l),f!==null);)b=s.lastIndex,s===ye?f[1]==="!--"?s=yr:f[1]!==void 0?s=br:f[2]!==void 0?(Ar.test(f[2])&&(n=RegExp("</"+f[2],"g")),s=te):f[3]!==void 0&&(s=te):s===te?f[0]===">"?(s=n??ye,y=-1):f[1]===void 0?y=-2:(y=s.lastIndex-f[2].length,p=f[1],s=f[3]===void 0?te:f[3]==='"'?_r:xr):s===_r||s===xr?s=te:s===yr||s===br?s=ye:(s=te,n=void 0);let v=s===te&&o[a+1].startsWith("/>")?" ":"";i+=s===ye?l+An:y>=0?(r.push(p),l.slice(0,y)+"$lit$"+l.slice(y)+X+v):l+X+(y===-2?(r.push(void 0),a):v)}let d=i+(o[t]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return[vr!==void 0?vr.createHTML(d):d,r]},re=class{constructor({strings:e,_$litType$:t},r){let n;this.parts=[];let i=0,s=0,d=e.length-1,a=this.parts,[l,p]=Cn(e,t);if(this.el=re.createElement(l,r),ce.currentNode=this.el.content,t===2){let f=this.el.content,y=f.firstChild;y.remove(),f.append(...y.childNodes)}for(;(n=ce.nextNode())!==null&&a.length<d;){if(n.nodeType===1){if(n.hasAttributes()){let f=[];for(let y of n.getAttributeNames())if(y.endsWith("$lit$")||y.startsWith(X)){let b=p[s++];if(f.push(y),b!==void 0){let v=n.getAttribute(b.toLowerCase()+"$lit$").split(X),_=/([.?@])?(.*)/.exec(b);a.push({type:1,index:i,name:_[2],strings:v,ctor:_[1]==="."?gt:_[1]==="?"?vt:_[1]==="@"?yt:he})}else a.push({type:6,index:i})}for(let y of f)n.removeAttribute(y)}if(Ar.test(n.tagName)){let f=n.textContent.split(X),y=f.length-1;if(y>0){n.textContent=ue?ue.emptyScript:"";for(let b=0;b<y;b++)n.append(f[b],be()),ce.nextNode(),a.push({type:2,index:++i});n.append(f[y],be())}}}else if(n.nodeType===8)if(n.data===Sr)a.push({type:2,index:i});else{let f=-1;for(;(f=n.data.indexOf(X,f+1))!==-1;)a.push({type:7,index:i}),f+=X.length-1}i++}}static createElement(e,t){let r=de.createElement("template");return r.innerHTML=e,r}};mt=class{constructor(e,t){this.u=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(e){var t;let{el:{content:r},parts:n}=this._$AD,i=((t=e?.creationScope)!==null&&t!==void 0?t:de).importNode(r,!0);ce.currentNode=i;let s=ce.nextNode(),d=0,a=0,l=n[0];for(;l!==void 0;){if(d===l.index){let p;l.type===2?p=new oe(s,s.nextSibling,this,e):l.type===1?p=new l.ctor(s,l.name,l.strings,this,e):l.type===6&&(p=new bt(s,this,e)),this.u.push(p),l=n[++a]}d!==l?.index&&(s=ce.nextNode(),d++)}return i}p(e){let t=0;for(let r of this.u)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}},oe=class{constructor(e,t,r,n){var i;this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=n,this._$Cm=(i=n?.isConnected)===null||i===void 0||i}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cm}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=pe(this,e,t),xe(e)?e===A||e==null||e===""?(this._$AH!==A&&this._$AR(),this._$AH=A):e!==this._$AH&&e!==Z&&this.g(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):kn(e)?this.k(e):this.g(e)}O(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}g(e){this._$AH!==A&&xe(this._$AH)?this._$AA.nextSibling.data=e:this.T(de.createTextNode(e)),this._$AH=e}$(e){var t;let{values:r,_$litType$:n}=e,i=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=re.createElement(n.h,this.options)),n);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===i)this._$AH.p(r);else{let s=new mt(i,this),d=s.v(this.options);s.p(r),this.T(d),this._$AH=s}}_$AC(e){let t=wr.get(e.strings);return t===void 0&&wr.set(e.strings,t=new re(e)),t}k(e){Er(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,r,n=0;for(let i of e)n===t.length?t.push(r=new oe(this.O(be()),this.O(be()),this,this.options)):r=t[n],r._$AI(i),n++;n<t.length&&(this._$AR(r&&r._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,t);e&&e!==this._$AB;){let n=e.nextSibling;e.remove(),e=n}}setConnected(e){var t;this._$AM===void 0&&(this._$Cm=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},he=class{constructor(e,t,r,n,i){this.type=1,this._$AH=A,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=A}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,r,n){let i=this.strings,s=!1;if(i===void 0)e=pe(this,e,t,0),s=!xe(e)||e!==this._$AH&&e!==Z,s&&(this._$AH=e);else{let d=e,a,l;for(e=i[0],a=0;a<i.length-1;a++)l=pe(this,d[r+a],t,a),l===Z&&(l=this._$AH[a]),s||(s=!xe(l)||l!==this._$AH[a]),l===A?e=A:e!==A&&(e+=(l??"")+i[a+1]),this._$AH[a]=l}s&&!n&&this.j(e)}j(e){e===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},gt=class extends he{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===A?void 0:e}},Pn=ue?ue.emptyScript:"",vt=class extends he{constructor(){super(...arguments),this.type=4}j(e){e&&e!==A?this.element.setAttribute(this.name,Pn):this.element.removeAttribute(this.name)}},yt=class extends he{constructor(e,t,r,n,i){super(e,t,r,n,i),this.type=5}_$AI(e,t=this){var r;if((e=(r=pe(this,e,t,0))!==null&&r!==void 0?r:A)===Z)return;let n=this._$AH,i=e===A&&n!==A||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,s=e!==A&&(n===A||i);i&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,r;typeof this._$AH=="function"?this._$AH.call((r=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&r!==void 0?r:this.element,e):this._$AH.handleEvent(e)}},bt=class{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){pe(this,e)}},$r=He.litHtmlPolyfillSupport;$r?.(re,oe),((ft=He.litHtmlVersions)!==null&&ft!==void 0?ft:He.litHtmlVersions=[]).push("2.5.0");Cr=(o,e,t)=>{var r,n;let i=(r=t?.renderBefore)!==null&&r!==void 0?r:e,s=i._$litPart$;if(s===void 0){let d=(n=t?.renderBefore)!==null&&n!==void 0?n:null;i._$litPart$=s=new oe(e.insertBefore(be(),d),d,void 0,t??{})}return s._$AI(o),s}});var xt,_t,U,Pr,Mr=x(()=>{c();u();Ie();Ie();_e();_e();U=class extends W{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;let r=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=r.firstChild),r}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Cr(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return Z}};U.finalized=!0,U._$litElement$=!0,(xt=globalThis.litElementHydrateSupport)===null||xt===void 0||xt.call(globalThis,{LitElement:U});Pr=globalThis.litElementPolyfillSupport;Pr?.({LitElement:U});((_t=globalThis.litElementVersions)!==null&&_t!==void 0?_t:globalThis.litElementVersions=[]).push("3.2.2")});var Tr=x(()=>{c();u();});var z=x(()=>{c();u();Ie();_e();Mr();Tr()});var Or=x(()=>{c();u();});function k(o){return(e,t)=>t!==void 0?((r,n,i)=>{n.constructor.createProperty(i,r)})(o,e,t):Mn(o,e)}var Mn,wt=x(()=>{c();u();Mn=(o,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,o)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,o)}}});var Nr=x(()=>{c();u();wt();});var ne=x(()=>{c();u();});var Rr=x(()=>{c();u();ne();});var Br=x(()=>{c();u();ne();});var jr=x(()=>{c();u();ne();});var Lr=x(()=>{c();u();ne();});var $t,Fc,St=x(()=>{c();u();ne();Fc=(($t=window.HTMLSlotElement)===null||$t===void 0?void 0:$t.prototype.assignedElements)!=null?(o,e)=>o.assignedElements(e):(o,e)=>o.assignedNodes(e).filter(t=>t.nodeType===Node.ELEMENT_NODE)});var Ir=x(()=>{c();u();ne();St();});var fe=x(()=>{c();u();Or();wt();Nr();Rr();Br();jr();Lr();St();Ir()});var G,Hr,Fe=x(()=>{c();u();z();G=({title:o,children:e})=>w`
  <div class="error-background">
    <div class="error-container">
      <span class="error-title"
        ><span class="error-badge">Error</span>${o}</span
      >
      <span class="error-description">${e}</span>
    </div>
  </div>
`,Hr=N`
  .error-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background: var(--error-bg);
    color: var(--error-fg);
  }

  .error-container {
    max-width: 800px;
    margin: auto;
    padding: 1em;
  }

  .error-badge {
    display: inline-block;
    font-size: 0.8em;
    padding: 0.2em 0.5em;
    margin-inline-end: 0.5em;

    background: var(--error-color);
    border-radius: 2px;
    color: var(--error-bg);
    text-transform: uppercase;
  }

  .error-title {
    display: block;
    font-size: 1.2em;

    font-weight: bold;
    text-transform: capitalize;
  }

  .error-description {
    display: block;
    margin-block-start: 1em;
  }
`});var Fr,Ur,Ue,zr=x(()=>{c();u();Fr={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ur=o=>(...e)=>({_$litDirective$:o,values:e}),Ue=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}});var ie,Dr=x(()=>{c();u();_e();zr();ie=Ur(class extends Ue{constructor(o){var e;if(super(o),o.type!==Fr.ATTRIBUTE||o.name!=="style"||((e=o.strings)===null||e===void 0?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(o){return Object.keys(o).reduce((e,t)=>{let r=o[t];return r==null?e:e+`${t=t.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`},"")}update(o,[e]){let{style:t}=o.element;if(this.vt===void 0){this.vt=new Set;for(let r in e)this.vt.add(r);return this.render(e)}this.vt.forEach(r=>{e[r]==null&&(this.vt.delete(r),r.includes("-")?t.removeProperty(r):t[r]="")});for(let r in e){let n=e[r];n!=null&&(this.vt.add(r),r.includes("-")?t.setProperty(r,n):t[r]=n)}return Z}})});var ze=x(()=>{c();u();Dr()});function Vr(o){return{top:o.y,right:o.x+o.width,bottom:o.y+o.height,left:o.x}}function Wr(o,e){let t=Vr(o),r=Vr(e),n=!(t.top>r.bottom||t.bottom<r.top),i=!(t.left>r.right||t.right<r.left);if(i&&n){let p={x:(Math.max(t.left,r.left)+Math.min(t.right,r.right))/2,y:(Math.max(t.top,r.top)+Math.min(t.bottom,r.bottom))/2};return[{points:[{x:t.left,y:p.y},{x:r.left,y:p.y}]},{points:[{x:t.right,y:p.y},{x:r.right,y:p.y}]},{points:[{y:t.top,x:p.x},{y:r.top,x:p.x}]},{points:[{y:t.bottom,x:p.x},{y:r.bottom,x:p.x}]}]}let s=t.left>r.right,d=t.top>r.bottom,a={x:o.x+o.width/2,y:o.y+o.height/2};return[i?null:{points:[{x:s?t.left:t.right,y:a.y},{x:s?r.right:r.left,y:a.y}],bisector:n?void 0:[{x:s?r.right:r.left,y:a.y},{x:s?r.right:r.left,y:d?r.bottom:r.top}]},n?null:{points:[{y:d?t.top:t.bottom,x:a.x},{y:d?r.bottom:r.top,x:a.x}],bisector:i?void 0:[{y:d?r.bottom:r.top,x:a.x},{y:d?r.bottom:r.top,x:s?r.right:r.left}]}].filter(p=>!!p)}function $e(o){return Math.round(o*100)/100}function De(o,e){return[...Yr(o),...Yr(e)]}function Yr(o){return o?o instanceof Array?o:[o]:[]}var Se=x(()=>{c();u()});var Tn,Zr,Gr=x(()=>{c();u();fe();Tn=function(o,e,t,r){var n=arguments.length,i=n<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(o,e,t,r);else for(var d=o.length-1;d>=0;d--)(s=o[d])&&(i=(n<3?s(i):n>3?s(e,t,i):s(e,t))||i);return n>3&&i&&Object.defineProperty(e,t,i),i},Zr=o=>{class e extends o{constructor(...r){super(...r),this.selectedNode=null}updated(r){super.updated(r),r.has("selectedNode")&&this.dispatchEvent(new CustomEvent("nodeselect",{detail:{selectedNode:this.selectedNode}}))}}return Tn([k({attribute:!1})],e.prototype,"selectedNode",void 0),e}});function Ve(o){return o.touches.length===0||o.touches.length>2}function On(o,e){return Math.sqrt(Math.pow(o.x-e.x,2)+Math.pow(o.y-e.y,2))}var Xr,Kr=x(()=>{c();u();Xr=o=>class extends o{constructor(...t){super(...t),this.previousTouches=null,this.addEventListener("touchstart",r=>{Ve(r)||(r.preventDefault(),this.previousTouches=r.touches)}),this.addEventListener("touchend",r=>{Ve(r)||(r.preventDefault(),this.previousTouches=null)}),this.addEventListener("touchcancel",r=>{Ve(r)||(r.preventDefault(),this.previousTouches=null)}),this.addEventListener("touchmove",r=>{if(Ve(r))return;let n=Array.from(this.previousTouches||[]),i=Array.from(r.touches);if(this.previousTouches=r.touches,!(i.length!==n.length||!i.every(s=>n.some(d=>d.identifier===s.identifier)))){if(i.length===1){this.onTouchPan({x:i[0].pageX-n[0].pageX,y:i[0].pageY-n[0].pageY});return}this.onTouchPinch(On({x:i[0].pageX,y:i[0].pageY},{x:n[0].pageX,y:n[0].pageY}))}})}get isTouching(){return!!(this.previousTouches&&this.previousTouches.length>0)}onTouchPan(t){}onTouchPinch(t){}}});var Ee,D,qr,Jr,Qr=x(()=>{c();u();fe();Kr();Ee=function(o,e,t,r){var n=arguments.length,i=n<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(o,e,t,r);else for(var d=o.length-1;d>=0;d--)(s=o[d])&&(i=(n<3?s(i):n>3?s(e,t,i):s(e,t))||i);return n>3&&i&&Object.defineProperty(e,t,i),i},D=function(o,e){if(!e.has(o))throw new TypeError("attempted to get private field on non-instance");return e.get(o)},qr=function(o,e,t){if(!e.has(o))throw new TypeError("attempted to set private field on non-instance");return e.set(o,t),t},Jr=o=>{var e,t,r,n,i;class s extends Xr(o){constructor(...a){super(...a),this.panX=0,this.panY=0,this.scale=1,this.zoomSpeed=500,this.panSpeed=500,e.set(this,!1),t.set(this,(p,f)=>{this.panX+=p/this.scale/window.devicePixelRatio,this.panY+=f/this.scale/window.devicePixelRatio}),r.set(this,p=>{p.code==="Space"&&!D(this,e)&&(qr(this,e,!0),document.body.style.cursor="grab")}),n.set(this,p=>{p.code==="Space"&&D(this,e)&&(qr(this,e,!1),document.body.style.cursor="auto")}),i.set(this,()=>{document.addEventListener("keyup",D(this,n)),document.addEventListener("keydown",D(this,r))}),this.addEventListener("wheel",p=>{if(this.isMovable)if(p.preventDefault(),p.ctrlKey){let{deltaY:f}=p;p.deltaMode===1&&(f*=15);let y=this.scale;this.scale*=1-f/((1e3-this.zoomSpeed)*.5);let b=p.offsetX-this.offsetWidth/2,v=p.offsetY-this.offsetHeight/2;this.panX+=b/this.scale-b/y,this.panY+=v/this.scale-v/y}else{let f=this.panSpeed*.002;this.panX-=p.deltaX*f/this.scale,this.panY-=p.deltaY*f/this.scale}},{passive:!1});let l=1;this.addEventListener("gesturestart",p=>{p.preventDefault(),l=this.scale}),this.addEventListener("gesturechange",p=>{let f=p;f.preventDefault(),this.scale=l*f.scale}),this.addEventListener("pointermove",p=>{p.buttons&4&&(p.preventDefault(),D(this,t).call(this,p.movementX,p.movementY))}),D(this,i).call(this),this.onmousedown=()=>{D(this,e)&&(document.body.style.cursor="grabbing",this.onmousemove=({movementX:p,movementY:f})=>{D(this,t).call(this,p,f)},this.onmouseup=()=>{document.body.style.cursor="grab",this.onmousemove=null,this.onmouseup=null})}}get isMovable(){return!0}get canvasTransform(){return[`scale(${this.scale})`,`translate(${this.panX}px, ${this.panY}px)`]}disconnectedCallback(){document.removeEventListener("keyup",D(this,n)),document.removeEventListener("keydown",D(this,r)),super.disconnectedCallback()}updated(a){super.updated(a),a.has("scale")&&this.dispatchEvent(new CustomEvent("scalechange",{detail:{scale:this.scale}})),(a.has("panX")||a.has("panY"))&&this.dispatchEvent(new CustomEvent("positionchange",{detail:{x:this.panX,y:this.panY}}))}onTouchPan(a){this.panX+=a.x/this.scale,this.panY+=a.y/this.scale}onTouchPinch(a){this.scale*=1-a/1e3}}return e=new WeakMap,t=new WeakMap,r=new WeakMap,n=new WeakMap,i=new WeakMap,Ee([k({attribute:!1})],s.prototype,"panX",void 0),Ee([k({attribute:!1})],s.prototype,"panY",void 0),Ee([k({attribute:!1})],s.prototype,"scale",void 0),Ee([k({type:Number,attribute:"zoom-speed"})],s.prototype,"zoomSpeed",void 0),Ee([k({type:Number,attribute:"pan-speed"})],s.prototype,"panSpeed",void 0),s}});var Nn,Rn,eo,to,ro,oo=x(()=>{c();u();z();ze();Se();Nn=({guide:o,reverseScale:e})=>{let t=Math.abs(o.points[0].x-o.points[1].x),r=Math.abs(o.points[0].y-o.points[1].y);return t===0&&r===0?null:R`
    <line
      class="distance-line"
      x1=${o.points[0].x}
      y1=${o.points[0].y}
      x2=${o.points[1].x}
      y2=${o.points[1].y}
    />

    ${o.bisector&&R`
        <line
          class="distance-line"
          x1=${o.bisector[0].x}
          y1=${o.bisector[0].y}
          x2=${o.bisector[1].x}
          y2=${o.bisector[1].y}
          style=${ie({strokeDasharray:`${4*e}`})}
          shape-rendering="geometricPrecision"
          fill="none"
        />
      `}
  `},Rn=({guide:o,reverseScale:e,fontSize:t})=>{let r=Math.abs(o.points[0].x-o.points[1].x),n=Math.abs(o.points[0].y-o.points[1].y);if(r===0&&n===0)return null;let i=$e(Math.max(r,n)).toString(10),s=i.length*t*.5,d=t*.25,a=t*.25,l=t*.5,p=r>n?(o.points[0].x+o.points[1].x)/2-s/2:o.points[0].x,f=r>n?o.points[0].y:(o.points[0].y+o.points[1].y)/2-t/2,y=[`scale(${e})`,r>n?`translate(0, ${d+a})`:`translate(${d+l}, 0)`].join(" "),b=p+s/2,v=f+t/2,_=r>n?`${b} ${f}`:`${p} ${v}`;return R`
    <g class="distance-tooltip">
      <rect
        x=${p-l}
        y=${f-a}
        rx="2"
        width=${s+l*2}
        height=${t+a*2}
        transform=${y}
        transform-origin=${_}
        stroke="none"
      />

      <text
        x=${b}
        y=${f+t-a/2}
        text-anchor="middle"
        transform=${y}
        transform-origin=${_}
        stroke="none"
        fill="white"
        style="font-size: ${t}px"
      >
        ${i}
      </text>
    </g>
  `},eo=new Map,to=({node:o,distanceTo:e,reverseScale:t,fontSize:r})=>{let n=o.id+`
`+e.id,i=eo.get(n);return i||(i=Wr(o.absoluteBoundingBox,e.absoluteBoundingBox),eo.set(n,i)),[...i.map(s=>Nn({guide:s,reverseScale:t})),...i.map(s=>Rn({guide:s,reverseScale:t,fontSize:r}))]},ro=N`
  .distance-line {
    shape-rendering: geometricPrecision;
    fill: none;
    opacity: 0;
  }

  .distance-tooltip {
    opacity: 0;
  }

  .guide:hover ~ .distance-line,
  .guide:hover ~ .distance-tooltip {
    opacity: 1;
  }
`});var no,At,io,so,ao,kt=x(()=>{c();u();z();no=({onClick:o=()=>{}})=>R`
  <svg @click=${o} title="close icon" width="14" height="14" viewBox="0 0 20 20" fill="none">
    <path d="M1 19L19 1M19 19L1 1" stroke="#B3B3B3" stroke-width="2"/>
  </svg>
`,At=({onClick:o=()=>{}})=>R`
  <svg @click=${o} title="copy icon" width="14" height="14" viewBox="0 0 30 30" fill="none">
  <path d="M21 25.5C21 24.9477 20.5523 24.5 20 24.5C19.4477 24.5 19 24.9477 19 25.5H21ZM13 2H25V0H13V2ZM28 5V21H30V5H28ZM25 24H13V26H25V24ZM10 21V5H8V21H10ZM13 24C11.3431 24 10 22.6569 10 21H8C8 23.7614 10.2386 26 13 26V24ZM28 21C28 22.6569 26.6569 24 25 24V26C27.7614 26 30 23.7614 30 21H28ZM25 2C26.6569 2 28 3.34315 28 5H30C30 2.23858 27.7614 0 25 0V2ZM13 0C10.2386 0 8 2.23858 8 5H10C10 3.34315 11.3431 2 13 2V0ZM16.5 28H5V30H16.5V28ZM2 25V10H0V25H2ZM5 28C3.34315 28 2 26.6569 2 25H0C0 27.7614 2.23858 30 5 30V28ZM5 7H8V5H5V7ZM2 10C2 8.34315 3.34315 7 5 7V5C2.23858 5 0 7.23858 0 10H2ZM16.5 30C18.9853 30 21 27.9853 21 25.5H19C19 26.8807 17.8807 28 16.5 28V30Z" fill="#B3B3B3"/>
</svg>
`,io=()=>R`
  <svg title="horizontal padding" width="14" height="14" viewBox="0 0 29 28" fill="none">
    <rect x="7" y="8" width="14" height="14" stroke="#B3B3B3" stroke-width="2"/>
    <path d="M27 1V28" stroke="#B3B3B3" stroke-width="2"/>
    <path d="M1 0V28" stroke="#B3B3B3" stroke-width="2"/>
  </svg>
`,so=()=>R`
  <svg title="vertical padding" width="14" height="14" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="21" width="14" height="14" transform="rotate(-90 8 21)" stroke="#B3B3B3" stroke-width="2"/>
    <path d="M1 1L28 0.999999" stroke="#B3B3B3" stroke-width="2"/>
    <path d="M0 27L28 27" stroke="#B3B3B3" stroke-width="2"/>
  </svg>
`,ao=()=>R`
  <svg title="figma logo" width="11" height="16" viewBox="0 0 12 17" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M5.5 1.5h-2c-1.105 0-2 .895-2 2 0 1.105.895 2 2 2h2v-4zm-5 2c0 1.043.533 1.963 1.341 2.5C1.033 6.537.5 7.457.5 8.5c0 1.043.533 1.963 1.341 2.5C1.033 11.537.5 12.457.5 13.5c0 1.657 1.343 3 3 3 1.657 0 3-1.343 3-3V10.736c.53.475 1.232.764 2 .764 1.657 0 3-1.343 3-3 0-1.043-.533-1.963-1.341-2.5.808-.537 1.341-1.457 1.341-2.5 0-1.657-1.343-3-3-3h-5c-1.657 0-3 1.343-3 3zm1 5c0-1.105.895-2 2-2h2v4h-2c-1.105 0-2-.895-2-2zm0 5c0-1.105.895-2 2-2h2v2c0 1.105-.895 2-2 2-1.105 0-2-.895-2-2zm7-3c-1.105 0-2-.895-2-2 0-1.105.895-2 2-2 1.105 0 2 .895 2 2 0 1.105-.895 2-2 2zm0-5h-2v-4h2c1.105 0 2 .895 2 2 0 1.105-.895 2-2 2z"
      fill-rule="evenodd"
      fill-opacity="1"
      fill="#000"
      stroke="none"
    ></path>
  </svg>
`});var me,jn,Ct,Ye,lo,Ln,Pt,co=x(()=>{c();u();me=o=>o.a===0?"transparent":o.a<1?`rgba(${lo(o).join(", ")}, ${o.a.toFixed(2)})`:Ln(o),jn=o=>new Ct(o).cssColor,Ct=class{constructor(e){this.gradientHandles={start:e.gradientHandlePositions[0],end:e.gradientHandlePositions[1]},this.colors=e.gradientStops,this.colorObjects=this.createColorObjects(this.colors),this.angle=this.calculateAngle(this.gradientHandles.start,this.gradientHandles.end)}get cssGradientArray(){return this.colorObjects.map((e,t)=>{let r=this.floatToPercent(this.colors[t].position);return e+" "+r})}get cssColor(){let e=this.cssGradientArray;return e.unshift(this.angle+"deg"),`linear-gradient(${e.join(", ")})`}createColorObjects(e){return e.map(({color:t})=>me(t))}floatToPercent(e){return(e*=100).toFixed(0)+"%"}calculateAngle(e,t){let r=Math.atan(this.calculateGradient(e,t));return parseInt(this.radToDeg(r).toFixed(1))}calculateGradient(e,t){return(t.y-e.y)/(t.x-e.x)*-1}radToDeg(e){return 180*e/Math.PI}},Ye=class{constructor(e){var t,r,n;if(this.hasPadding=!1,this.height=`${Math.trunc(e.absoluteBoundingBox.height)}px`,this.width=`${Math.trunc(e.absoluteBoundingBox.width)}px`,(e.horizontalPadding||e.verticalPadding)&&(this.hasPadding=!0,this.horizontalPadding=`${e.horizontalPadding}px`,this.verticalPadding=`${e.verticalPadding}px`),e.style&&(this.fontFamily=e.style.fontFamily,this.fontPostScriptName=(t=e.style.fontPostScriptName)===null||t===void 0?void 0:t.replace("-"," "),this.fontWeight=e.style.fontWeight,this.fontSize=`${Math.ceil(e.style.fontSize)}px`,this.lineHeight=`${Math.trunc(e.style.lineHeightPx)}px`),e.rectangleCornerRadii&&(this.borderRadius=e.rectangleCornerRadii.filter(s=>s===e.cornerRadius).length<4?`${e.rectangleCornerRadii.join("px ")}px`:`${e.cornerRadius}px`),e.backgroundColor||e.backgroundColor){let s=e.backgroundColor||((r=e.background)===null||r===void 0?void 0:r[0].color);this.background=me(s)}let i=(n=e.fills)===null||n===void 0?void 0:n[0];if(i&&i.visible!==!1&&(e.type==="TEXT"?this.color=me(i.color):i.type.includes("GRADIENT")?this.backgroundImage=jn(i):i.type==="SOLID"&&(this.background=me(i.color))),e.strokes&&e.strokes.length>0&&(this.borderColor=me(e.strokes[0].color),this.border=`${e.strokeWeight}px solid ${this.borderColor}`),e.effects&&e.effects.length>0){let{offset:s,radius:d,color:a}=e.effects[0];this.boxShadowColor=me(a),this.boxShadow=`${s?.x||0}px ${s?.y||0}px 0 ${d} ${this.boxShadowColor}`}}getStyles(){return[this.height&&{property:"height",value:this.height},this.width&&{property:"width",value:this.width},this.fontFamily&&{property:"font-family",value:this.fontFamily},this.fontSize&&{property:"font-size",value:this.fontSize},this.fontWeight&&{property:"font-weight",value:this.fontWeight},this.lineHeight&&{property:"line-height",value:this.lineHeight},this.borderRadius&&{property:"border-radius",value:this.borderRadius},this.backgroundImage&&{property:"background-image",value:this.backgroundImage},this.boxShadow&&{property:"box-shadow",value:this.boxShadow,color:this.boxShadowColor},this.border&&{property:"border",value:this.border,color:this.borderColor},this.background&&{property:"background",value:this.background,color:this.background},this.color&&{property:"color",value:this.color,color:this.color}].filter(Boolean)}getStyleSheet(){return this.getStyles().map(Pt).join(`
`)}},lo=o=>[Math.trunc(255*o.r),Math.trunc(255*o.g),Math.trunc(255*o.b)],Ln=o=>{let[e,t,r]=lo(o);return"#"+((1<<24)+(e<<16)+(t<<8)+r).toString(16).slice(1)},Pt=({property:o,value:e})=>`${o}: ${e};`});var In,Mt,uo,Hn,Fn,po,ho=x(()=>{c();u();z();kt();co();In=function(o,e,t,r){function n(i){return i instanceof t?i:new t(function(s){s(i)})}return new(t||(t=Promise))(function(i,s){function d(p){try{l(r.next(p))}catch(f){s(f)}}function a(p){try{l(r.throw(p))}catch(f){s(f)}}function l(p){p.done?i(p.value):n(p.value).then(d,a)}l((r=r.apply(o,e||[])).next())})},Mt=o=>In(void 0,void 0,void 0,function*(){yield navigator.clipboard.writeText(o)}),uo=({node:o,onClose:e})=>{if(!o)return null;let t=new Ye(o),r=n=>n.stopPropagation();return w`
    <div
      class="inspector-view"
      @click=${r}
      @wheel=${r}
      @keydown=${r}
      @keyup=${r}
      @pointermove=${r}
    >
      <div class="inspector-section selectable-content">
        <div class="title-section">
          <h4>${o.name}</h4>
          ${no({onClick:e})}
        </div>
        <div class="properties-overview">
          <div class="title-section">
            <p class="inspector-property">
              <span>W: </span>${t.width}
            </p>
            <p class="inspector-property" style="margin-left: 16px;">
              <span>H: </span>${t.height}
            </p>
          </div>
          ${t.fontPostScriptName?w`<p class="inspector-property">
                <span>Font:</span>
                ${t.fontPostScriptName}
              </p>`:null}
        </div>
      </div>
      ${t.hasPadding?w`<div class="inspector-section">
            <h4>Layout</h4>
            ${t.horizontalPadding&&w`<p class="inspector-property">
              ${io()} ${t.horizontalPadding}
            </p>`}
            ${t.verticalPadding&&w`<p class="inspector-property">
              ${so()} ${t.verticalPadding}
            </p>`}
          </div>`:null}
      ${o.characters?w`<div class="inspector-section">
            <div class="title-section">
              <h4>Content</h4>
              ${At({onClick:()=>Mt(o.characters)})}
            </div>
            <p class="node-content code-section selectable-content">
              ${o.characters}
            </p>
          </div>`:null}
      ${Hn(t)}
    </div>
  `},Hn=o=>{let e=()=>Mt(o.getStyleSheet()),t=o.getStyles();return w`<div class="inspector-section">
    <div class="title-section style-section">
      <h4>CSS</h4>
      ${At({onClick:e})}
    </div>
    <div class="code-section selectable-content">
      ${t.map(Fn)}
    </div>
  </div>`},Fn=o=>{let{property:e,value:t,color:r}=o,n=null;switch(e){case"background":case"fill":case"border":case"box-shadow":case"color":n=w`<span
        class="color-preview"
        style="background-color: ${r}"
      ></span>`;break;case"background-image":n=w`<span
        class="color-preview"
        style="background-image: ${t}"
      ></span>`;break}return w`<div class="css-property" @click=${()=>Mt(Pt(o))}>
    <span>${e}:</span>${n}<span class="css-value">${t}</span>;</span>
  </div>`},po=N`
  .inspector-view {
    height: 100%;
    width: 300px;
    position: absolute;
    right: 0;
    background: white;
    border-left: 1px solid #ccc;
    overflow-y: auto;
    z-index: calc(var(--z-index) + 2);
  }

  .inspector-view h4 {
    font-size: 16px;
    margin: 0;
  }

  .style-section {
    margin-bottom: 12px;
  }

  .title-section {
    display: flex;
    align-items: center;
  }

  .code-section {
    padding: 8px;
    background: #f3f3f3;
    font-family: monospace;
  }

  .title-section svg {
    cursor: pointer;
    margin-left: auto;
  }

  .inspector-section {
    padding: 16px;
    border-bottom: 1px solid #eee;
  }

  .properties-overview {
    font-family: monospace;
    color: #518785;
  }

  .properties-overview p span {
    color: #121212;
  }

  .inspector-property {
    display: flex;
    align-items: center;
    margin-bottom: 0;
  }

  .inspector-property span {
    color: #b3b3b3;
    margin-right: 4px;
  }

  .inspector-property svg {
    margin-right: 8px;
  }

  .css-property {
    margin: 8px;
    transition: background-color ease-in-out 100ms;
  }

  .css-property:hover {
    cursor: pointer;
    background-color: #e8e8e8;
  }

  .css-value {
    color: #518785;
    margin-left: 4px;
  }

  .color-preview {
    display: inline-block;
    width: 12px;
    height: 12px;
    border: 1px solid #ccc;
    margin-left: 4px;
    vertical-align: middle;
  }

  .selectable-content {
    cursor: text;
    user-select: text;
  }
`});var Tt,fo,mo,go=x(()=>{c();u();z();ze();Se();Tt=({node:o,selected:e=!1,computedThickness:t,onClick:r})=>{let{x:n,y:i,width:s,height:d}=o.absoluteBoundingBox,a="cornerRadius"in o&&o.cornerRadius?{topLeft:o.cornerRadius,topRight:o.cornerRadius,bottomRight:o.cornerRadius,bottomLeft:o.cornerRadius}:"rectangleCornerRadii"in o&&o.rectangleCornerRadii?{topLeft:o.rectangleCornerRadii[0],topRight:o.rectangleCornerRadii[1],bottomRight:o.rectangleCornerRadii[2],bottomLeft:o.rectangleCornerRadii[3]}:{topLeft:0,topRight:0,bottomRight:0,bottomLeft:0},l=t/2,p=(v,_)=>`M${v},${_}`,f=(v,_)=>`L${v},${_}`,y=(v,_,E)=>`A${v},${v} 0 0 1 ${_},${E}`,b=[p(a.topLeft+l,l),f(s-a.topRight,l),y(a.topRight-l,s-l,a.topRight),f(s-l,d-a.bottomRight),y(a.bottomRight-l,s-a.bottomRight,d-l),f(a.bottomLeft,d-l),y(a.bottomLeft-l,l,d-a.bottomLeft),f(l,a.topLeft),y(a.topLeft-l,a.topLeft,l),"Z"].join(" ");return R`
    <path
      class="guide"
      d=${b}
      shape-rendering="geometricPrecision"
      fill="none"
      transform="translate(${n}, ${i})"
      ?data-selected=${e}
      @click=${r}
    />
  `},fo=({nodeSize:{x:o,y:e,width:t,height:r},offsetX:n,offsetY:i,reverseScale:s})=>{let d={top:`${i+e+r}px`,left:`${n+o+t/2}px`,transform:`translateX(-50%) scale(${s}) translateY(0.25em)`};return w`
    <div class="tooltip" style="${ie(d)}">
      ${$e(t)} x ${$e(r)}
    </div>
  `},mo=N`
  .guide {
    /*
     * SVGs cannot be pixel perfect, especially floating values.
     * Since many platform renders them visually incorrectly (probably they
     * are following the spec), it's safe to set overflow to visible.
     * Cropped borders are hard to visible and ugly.
     */
    overflow: visible;

    pointer-events: all;

    opacity: 0;
  }
  .guide:hover {
    opacity: 1;
  }
  .guide[data-selected] {
    opacity: 1;
    stroke: var(--guide-selected-color);
  }

  .tooltip {
    position: absolute;
    padding: 0.25em 0.5em;
    font-size: var(--guide-tooltip-font-size);

    color: var(--guide-selected-tooltip-fg);
    background-color: var(--guide-selected-tooltip-bg);
    border-radius: 2px;
    pointer-events: none;
    z-index: calc(var(--z-index) + 1);

    transform-origin: top center;
  }
`});var Dn,vo,yo,bo=x(()=>{c();u();Dn=[{gte:31536e6,divisor:31536e6,unit:"year"},{gte:2592e6,divisor:2592e6,unit:"month"},{gte:6048e5,divisor:6048e5,unit:"week"},{gte:864e5,divisor:864e5,unit:"day"},{gte:36e5,divisor:36e5,unit:"hour"},{gte:6e4,divisor:6e4,unit:"minute"},{gte:3e4,divisor:1e3,unit:"seconds"},{gte:0,divisor:1,text:"just now"}],vo=o=>(typeof o=="object"?o:new Date(o)).getTime(),yo=(o,e=Date.now(),t=new Intl.RelativeTimeFormat(void 0,{numeric:"auto"}))=>{let n=vo(e)-vo(o),i=Math.abs(n);for(let s of Dn)if(i>=s.gte){let d=Math.round(Math.abs(n)/s.divisor),a=n<0,l=s.unit;return l?t.format(a?d:-d,l):s.text}}});var xo,_o,wo=x(()=>{c();u();z();kt();bo();xo=N`
  .figma-footer {
    flex: 0;
    z-index: calc(var(--z-index) + 1);
    border-top: 1px solid #ccc;
    min-height: 48px;
    padding: 0 16px;
    text-decoration: none;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    background-color: #fff;
    overflow-x: auto;
    cursor: pointer;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.8);
  }

  .figma-footer--icon {
    margin-right: 12px;
  }

  .figma-footer--title {
    font-weight: 600;
    margin-right: 4px;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .figma-footer--timestamp {
    white-space: nowrap;
    overflow: hidden;
  }
`,_o=o=>{if(!o||!o.link||o.link===void 0||o.link==="undefined")return null;let{link:e,timestamp:t,fileName:r}=o;return w`<a
    class="figma-footer"
    target="_blank"
    rel="noopener"
    title="Open in Figma"
    href="${e}"
  >
    <span class="figma-footer--icon"> ${ao()} </span>
    <span class="figma-footer--title"> ${r} </span>
    <span
      title="Last time edited: ${new Date(t).toUTCString()}"
      class="figma-footer--timestamp"
    >
      Edited ${yo(t)}
    </span>
  </a>`}});function Yn(o){let e=[],t=[],r=[],n=[];for(let d of o.children){if(d.type!=="FRAME"&&d.type!=="COMPONENT")continue;let{x:a,y:l,width:p,height:f}=d.absoluteBoundingBox;e.push(a),t.push(a+p),r.push(l),n.push(l+f)}let i=Math.min(...e),s=Math.min(...r);return{x:i,y:s,width:Math.abs(Math.max(...t)-i),height:Math.abs(Math.min(...n)-s)}}function Wn(o,e){let t=e.map(n=>{if(!("effects"in n))return{top:n.absoluteBoundingBox.y,right:n.absoluteBoundingBox.x+n.absoluteBoundingBox.width,bottom:n.absoluteBoundingBox.y+n.absoluteBoundingBox.height,left:n.absoluteBoundingBox.x};let i=n.effects.filter(a=>a.visible&&a.type==="LAYER_BLUR").map(a=>a.radius),s=n.effects.filter(a=>a.visible&&a.type==="DROP_SHADOW"&&!!a.offset).map(a=>({left:a.radius-a.offset.x,top:a.radius-a.offset.y,right:a.radius+a.offset.x,bottom:a.radius+a.offset.y})),d={top:Math.max(0,...i,...s.map(a=>a.top)),right:Math.max(0,...i,...s.map(a=>a.right)),bottom:Math.max(0,...i,...s.map(a=>a.bottom)),left:Math.max(0,...i,...s.map(a=>a.left))};return{top:n.absoluteBoundingBox.y-d.top,right:n.absoluteBoundingBox.x+n.absoluteBoundingBox.width+d.right,bottom:n.absoluteBoundingBox.y+n.absoluteBoundingBox.height+d.bottom,left:n.absoluteBoundingBox.x-d.left}}),r={top:Math.min(...t.map(n=>n.top)),right:Math.max(...t.map(n=>n.right)),bottom:Math.max(...t.map(n=>n.bottom)),left:Math.min(...t.map(n=>n.left))};return{top:o.absoluteBoundingBox.y-r.top,right:r.right-o.absoluteBoundingBox.x-o.absoluteBoundingBox.width,bottom:r.bottom-o.absoluteBoundingBox.y-o.absoluteBoundingBox.height,left:o.absoluteBoundingBox.x-r.left}}function We(o,e=0){return"absoluteBoundingBox"in o?!("children"in o)||o.children.length===0?[Object.assign(Object.assign({},o),{depth:e})]:[Object.assign(Object.assign({},o),{depth:e}),...o.children.map(t=>We(t,e+1)).flat()]:o.children.map(t=>We(t,e+1)).flat()}var $o,I,Ot,Ze,Nt=x(()=>{c();u();z();fe();ze();Se();Gr();Qr();oo();ho();Fe();go();wo();$o=function(o,e,t,r){var n=arguments.length,i=n<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(o,e,t,r);else for(var d=o.length-1;d>=0;d--)(s=o[d])&&(i=(n<3?s(i):n>3?s(e,t,i):s(e,t))||i);return n>3&&i&&Object.defineProperty(e,t,i),i},I=function(o,e){if(!e.has(o))throw new TypeError("attempted to get private field on non-instance");return e.get(o)},Ot=function(o,e,t){if(!e.has(o))throw new TypeError("attempted to set private field on non-instance");return e.set(o,t),t},Ze=o=>{var e,t,r,n,i;class s extends Zr(Jr(o)){constructor(...a){super(...a),this.zoomMargin=50,this.link="",e.set(this,void 0),t.set(this,void 0),r.set(this,void 0),n.set(this,l=>p=>{p.preventDefault(),p.stopPropagation(),this.selectedNode=l}),i.set(this,l=>{var p,f;return(f=(p=I(this,r))===null||p===void 0?void 0:p.find(y=>y.id===l))!==null&&f!==void 0?f:null})}static get styles(){let a=super.styles;return De(a,[N`
          :host {
            --default-error-bg: #fff;
            --default-error-fg: #333;

            --bg: var(--figspec-viewer-bg, #e5e5e5);
            --z-index: var(--figspec-viewer-z-index, 0);
            --error-bg: var(--figspec-viewer-error-bg, var(--default-error-bg));
            --error-fg: var(--figspec-viewer-error-fg, var(--default-error-fg));
            --error-color: var(--figspec-viewer-error-color, tomato);

            --guide-thickness: var(--figspec-viewer-guide-thickness, 1.5px);
            --guide-color: var(--figspec-viewer-guide-color, tomato);
            --guide-selected-color: var(
              --figspec-viewer-guide-selected-color,
              dodgerblue
            );
            --guide-tooltip-fg: var(--figspec-viewer-guide-tooltip-fg, white);
            --guide-selected-tooltip-fg: var(
              --figspec-viewer-guide-selected-tooltip-fg,
              white
            );
            --guide-tooltip-bg: var(
              --figspec-viewer-guide-tooltip-bg,
              var(--guide-color)
            );
            --guide-selected-tooltip-bg: var(
              --figspec-viewer-guide-selected-tooltip-bg,
              var(--guide-selected-color)
            );
            --guide-tooltip-font-size: var(
              --figspec-viewer-guide-tooltip-font-size,
              12px
            );

            position: relative;
            display: block;

            background-color: var(--bg);
            user-select: none;
            overflow: hidden;
            z-index: var(--z-index);
          }

          @media (prefers-color-scheme: dark) {
            :host {
              --default-error-bg: #222;
              --default-error-fg: #fff;
            }
          }

          .spec-canvas-wrapper {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column-reverse;
          }

          .canvas {
            position: absolute;
            top: 50%;
            left: 50%;
            flex: 1;
          }

          .rendered-image {
            position: absolute;
            top: 0;
            left: 0;
          }

          .guides {
            position: absolute;

            overflow: visible;
            stroke: var(--guide-color);
            fill: var(--guide-color);
            pointer-events: none;
            z-index: calc(var(--z-index) + 2);
          }
        `,mo,Hr,ro,po,xo])}get __images(){return{}}deselectNode(){this.selectedNode=null}get error(){return!I(this,e)||!I(this,r)?G({title:"Error",children:"Please call `__updateTree/1` method with a valid parameter."}):null}render(){if(this.error)return this.error instanceof Error?G({title:this.error.name||"Error",children:this.error.message}):typeof this.error=="string"?G({title:"Error",children:this.error}):this.error;let a=I(this,e),l=1/this.scale,p=`calc(var(--guide-thickness) * ${l})`,f=parseFloat(getComputedStyle(this).getPropertyValue("--guide-thickness")),y=parseFloat(getComputedStyle(this).getPropertyValue("--guide-tooltip-font-size"));return w`
        <div class="spec-canvas-wrapper" @click=${this.deselectNode}>
          <div
            class="canvas"
            style="
          width: ${a.width}px;
          height: ${a.height}px;

          transform: translate(-50%, -50%) ${this.canvasTransform.join(" ")}
        "
          >
            ${Object.entries(this.__images).map(([b,v])=>{var _;let E=I(this,i).call(this,b);if(!E||!("absoluteBoundingBox"in E)||!(!((_=I(this,t))===null||_===void 0)&&_[E.id]))return null;let S=I(this,t)[E.id];return w`
                <img class="rendered-image" src="${v}"
                style=${ie({top:`${E.absoluteBoundingBox.y-a.y}px`,left:`${E.absoluteBoundingBox.x-a.x}px`,marginTop:`${-S.top}px`,marginLeft:`${-S.left}px`,width:E.absoluteBoundingBox.width+S.left+S.right+"px",height:E.absoluteBoundingBox.height+S.top+S.bottom+"px"})}"
                " />
              `})}
            ${this.selectedNode&&fo({nodeSize:this.selectedNode.absoluteBoundingBox,offsetX:-a.x,offsetY:-a.y,reverseScale:l})}
            ${R`
            <svg
              class="guides"
              viewBox="0 0 5 5"
              width="5"
              height="5"
              style=${ie({left:`${-a.x}px`,top:`${-a.y}px`,strokeWidth:p})}
            >
              ${this.selectedNode&&Tt({node:this.selectedNode,selected:!0,computedThickness:f*l})}

              ${I(this,r).map(b=>{var v;return b.id===((v=this.selectedNode)===null||v===void 0?void 0:v.id)?null:R`
                  <g>
                    ${Tt({node:b,computedThickness:f*l,onClick:I(this,n).call(this,b)})}
                    ${this.selectedNode&&to({node:b,distanceTo:this.selectedNode,reverseScale:l,fontSize:y})}
                  </g>
                `})}
            </svg>
          `}
          </div>
          ${uo({node:this.selectedNode,onClose:this.deselectNode})}
          ${_o(this.getMetadata())}
        </div>
      `}getMetadata(){}connectedCallback(){super.connectedCallback(),this.resetZoom()}updated(a){super.updated(a)}__updateTree(a){if(!(a.type==="CANVAS"||a.type==="FRAME"||a.type==="COMPONENT"||a.type==="COMPONENT_SET"))throw new Error("Cannot update node tree: Top level node MUST be one of CANVAS, FRAME, COMPONENT, or COMPONENT_SET");Ot(this,e,a.type==="CANVAS"?Yn(a):a.absoluteBoundingBox),Ot(this,r,We(a)),this.requestUpdate()}__updateEffectMargins(){if(!this.__images)return;let a=Object.keys(this.__images).map(I(this,i)).filter(l=>!!l);Ot(this,t,a.reduce((l,p)=>"absoluteBoundingBox"in p?Object.assign(Object.assign({},l),{[p.id]:Wn(p,We(p))}):l,{})),this.requestUpdate()}resetZoom(){if(I(this,e)){let{width:a,height:l}=I(this,e),{width:p,height:f}=this.getBoundingClientRect(),y=p/(a+this.zoomMargin*2),b=f/(l+this.zoomMargin*2);this.scale=Math.min(y,b,1)}}}return e=new WeakMap,t=new WeakMap,r=new WeakMap,n=new WeakMap,i=new WeakMap,$o([k({type:Number,attribute:"zoom-margin"})],s.prototype,"zoomMargin",void 0),$o([k({type:String,attribute:"link"})],s.prototype,"link",void 0),s}});var So,K,Eo=x(()=>{c();u();z();fe();Fe();Nt();So=function(o,e,t,r){var n=arguments.length,i=n<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(o,e,t,r);else for(var d=o.length-1;d>=0;d--)(s=o[d])&&(i=(n<3?s(i):n>3?s(e,t,i):s(e,t))||i);return n>3&&i&&Object.defineProperty(e,t,i),i},K=class extends Ze(U){constructor(){super(...arguments),this.nodes=null,this.renderedImage=null}get isMovable(){return!!(this.nodes&&this.renderedImage&&this.documentNode)}get documentNode(){if(!this.nodes)return null;let e=Object.values(this.nodes.nodes)[0];return!e||!("absoluteBoundingBox"in e.document)?null:e.document}get __images(){return!this.documentNode||!this.renderedImage?{}:{[this.documentNode.id]:this.renderedImage}}get error(){if(!this.nodes||!this.renderedImage)return G({title:"Parameter error",children:w`<span>
          Both <code>nodes</code> and <code>rendered-image</code> are required.
        </span>`});if(!this.documentNode)return G({title:"Parameter Error",children:w`
          <span> Document node is empty or does not have size. </span>
        `});if(super.error)return super.error}getMetadata(){return{fileName:this.nodes.name,timestamp:this.nodes.lastModified,link:this.link}}connectedCallback(){super.connectedCallback(),this.documentNode&&(this.__updateTree(this.documentNode),this.__updateEffectMargins(),this.resetZoom())}updated(e){if(super.updated(e),e.has("nodes")){if(!this.documentNode)return;this.__updateTree(this.documentNode),this.resetZoom()}e.has("renderedImage")&&this.__updateEffectMargins()}};So([k({type:Object})],K.prototype,"nodes",void 0);So([k({type:String,attribute:"rendered-image"})],K.prototype,"renderedImage",void 0)});var Ao,Rt,Ge,Bt,q,ko=x(()=>{c();u();z();fe();Fe();Nt();Se();Ao=function(o,e,t,r){var n=arguments.length,i=n<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(o,e,t,r);else for(var d=o.length-1;d>=0;d--)(s=o[d])&&(i=(n<3?s(i):n>3?s(e,t,i):s(e,t))||i);return n>3&&i&&Object.defineProperty(e,t,i),i},Rt=function(o,e){if(!e.has(o))throw new TypeError("attempted to get private field on non-instance");return e.get(o)},q=class extends Ze(U){constructor(){super(...arguments),this.documentNode=null,this.renderedImages=null,this.selectedPage=null,Ge.set(this,()=>{var e;if(!this.documentNode){this.selectedPage=null;return}this.selectedPage=(e=this.documentNode.document.children.filter(t=>t.type==="CANVAS")[0])!==null&&e!==void 0?e:null}),Bt.set(this,e=>{var t,r;let n=e.currentTarget;this.selectedPage=(r=(t=this.documentNode)===null||t===void 0?void 0:t.document.children.find(i=>i.id===n.value))!==null&&r!==void 0?r:null,this.selectedPage&&(this.__updateTree(this.selectedPage),this.resetZoom(),this.__updateEffectMargins(),this.panX=0,this.panY=0)})}get isMovable(){return!!(this.renderedImages&&this.documentNode)}get __images(){return this.renderedImages||{}}get error(){if(!this.documentNode||!this.renderedImages)return G({title:"Parameter error",children:w`<span>
          Both <code>document-node</code> and <code>rendered-images</code> are
          required.
        </span>`});if(super.error)return super.error}static get styles(){return De(super.styles,[N`
        :host {
          --figspec-control-bg-default: #fcfcfc;
          --figspec-control-fg-default: #333;

          --control-bg: var(
            --figspec-control-bg,
            var(--figspec-control-bg-default)
          );
          --control-fg: var(
            --figspec-control-bg,
            var(--figspec-control-fg-default)
          );
          --control-shadow: var(
            --figspec-control-shadow,
            0 2px 4px rgba(0, 0, 0, 0.3)
          );
          --padding: var(--figspec-control-padding, 8px 16px);

          display: flex;
          flex-direction: column;
        }

        @media (prefers-color-scheme: dark) {
          :host {
            --figspec-control-bg-default: #222;
            --figspec-control-fg-default: #fff;
          }
        }

        .controls {
          flex-shrink: 0;
          padding: var(--padding);

          background-color: var(--control-bg);
          box-shadow: var(--control-shadow);
          color: var(--control-fg);
          z-index: 1;
        }

        .view {
          position: relative;
          flex-grow: 1;
          flex-shrink: 1;
        }
      `])}render(){var e;return w`
      <div class="controls">
        <select @change=${Rt(this,Bt)}>
          ${(e=this.documentNode)===null||e===void 0?void 0:e.document.children.map(t=>w`<option value=${t.id}>${t.name}</option>`)}
        </select>
      </div>

      <div class="view">${super.render()}</div>
    `}getMetadata(){return{fileName:this.documentNode.name,timestamp:this.documentNode.lastModified,link:this.link}}connectedCallback(){super.connectedCallback(),this.documentNode&&(Rt(this,Ge).call(this),this.selectedPage&&(this.__updateTree(this.selectedPage),this.resetZoom()))}updated(e){super.updated(e),e.has("documentNode")&&(Rt(this,Ge).call(this),this.selectedPage&&(this.__updateTree(this.selectedPage),this.resetZoom())),e.has("renderedImages")&&this.__updateEffectMargins()}};Ge=new WeakMap,Bt=new WeakMap;Ao([k({type:Object,attribute:"document-node"})],q.prototype,"documentNode",void 0);Ao([k({type:Object,attribute:"rendered-images"})],q.prototype,"renderedImages",void 0)});var Co=x(()=>{c();u();Eo();ko();customElements.get("figspec-file-viewer")||customElements.define("figspec-file-viewer",q);customElements.get("figspec-frame-viewer")||customElements.define("figspec-frame-viewer",K)});function Xe(o=window.React,e,t,r,n){let i,s,d;if(e===void 0){let b=o;({tagName:s,elementClass:d,events:r,displayName:n}=b),i=b.react}else i=o,d=t,s=e;let a=i.Component,l=i.createElement,p=new Set(Object.keys(r??{}));class f extends a{constructor(){super(...arguments),this.o=null}t(v){if(this.o!==null)for(let _ in this.i)Gn(this.o,_,this.props[_],v?v[_]:void 0,r)}componentDidMount(){this.t()}componentDidUpdate(v){this.t(v)}render(){let{_$Gl:v,..._}=this.props;this.h!==v&&(this.u=S=>{v!==null&&((H,ge)=>{typeof H=="function"?H(ge):H.current=ge})(v,S),this.o=S,this.h=v}),this.i={};let E={ref:this.u};for(let[S,H]of Object.entries(_))Zn.has(S)?E[S==="className"?"class":S]=H:p.has(S)||S in d.prototype?this.i[S]=H:E[S]=H;return l(s,E)}}f.displayName=n??d.name;let y=i.forwardRef((b,v)=>l(f,{...b,_$Gl:v},b?.children));return y.displayName=f.displayName,y}var Zn,Po,Gn,Mo=x(()=>{c();u();Zn=new Set(["children","localName","ref","style","className"]),Po=new WeakMap,Gn=(o,e,t,r,n)=>{let i=n?.[e];i===void 0||t===r?t==null&&e in HTMLElement.prototype?o.removeAttribute(e):o[e]=t:((s,d,a)=>{let l=Po.get(s);l===void 0&&Po.set(s,l=new Map);let p=l.get(d);a!==void 0?p===void 0?(l.set(d,p={handleEvent:a}),s.addEventListener(d,p)):p.handleEvent=a:p!==void 0&&(l.delete(d),s.removeEventListener(d,p))})(o,i,t)}});var To=x(()=>{c();u();Mo()});var Oo,No,Ro=x(()=>{c();u();Co();To();O();Oo=Xe(Oe,"figspec-frame-viewer",K,{onNodeSelect:"nodeselect",onPositionChange:"positionchange",onScaleChange:"scalechange"}),No=Xe(Oe,"figspec-file-viewer",q,{onNodeSelect:"nodeselect",onPositionChange:"positionchange",onScaleChange:"scalechange"})});var Ho={};Ht(Ho,{Figspec:()=>Lo,default:()=>Qn});function Ke(o){return o.status!==200?Promise.reject(o.statusText):o.json()}function Jn(o){var e;if(o.accessToken)return o.accessToken;try{return(e=m.STORYBOOK_FIGMA_ACCESS_TOKEN)!==null&&e!==void 0?e:null}catch{return null}}function Io(o){return"absoluteBoundingBox"in o?[o]:!o.children||o.children.length===0?[]:o.children.map(Io).reduce(function(e,t){return e.concat(t)},[])}var Xn,qe,Kn,qn,Bo,Lo,Qn,jo,Fo=x(()=>{c();u();O();Ro();F();B();it();Xn=function(o,e){return Object.defineProperty?Object.defineProperty(o,"raw",{value:e}):o.raw=e,o},qe=function(){return qe=Object.assign||function(o){for(var e,t=1,r=arguments.length;t<r;t++){e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(o[n]=e[n])}return o},qe.apply(this,arguments)},Kn=function(o,e,t,r){function n(i){return i instanceof t?i:new t(function(s){s(i)})}return new(t||(t=Promise))(function(i,s){function d(p){try{l(r.next(p))}catch(f){s(f)}}function a(p){try{l(r.throw(p))}catch(f){s(f)}}function l(p){p.done?i(p.value):n(p.value).then(d,a)}l((r=r.apply(o,e||[])).next())})},qn=function(o,e){var t={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,n,i,s;return s={next:d(0),throw:d(1),return:d(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function d(l){return function(p){return a([l,p])}}function a(l){if(r)throw new TypeError("Generator is already executing.");for(;t;)try{if(r=1,n&&(i=l[0]&2?n.return:l[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,l[1])).done)return i;switch(n=0,i&&(l=[l[0]&2,i.value]),l[0]){case 0:case 1:i=l;break;case 4:return t.label++,{value:l[1],done:!1};case 5:t.label++,n=l[1],l=[0];continue;case 7:l=t.ops.pop(),t.trys.pop();continue;default:if(i=t.trys,!(i=i.length>0&&i[i.length-1])&&(l[0]===6||l[0]===2)){t=0;continue}if(l[0]===3&&(!i||l[1]>i[0]&&l[1]<i[3])){t.label=l[1];break}if(l[0]===6&&t.label<i[1]){t.label=i[1],i=l;break}if(i&&t.label<i[2]){t.label=i[2],t.ops.push(l);break}i[2]&&t.ops.pop(),t.trys.pop();continue}l=e.call(o,t)}catch(p){l=[6,p],n=0}finally{r=i=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}},Bo=M(jo||(jo=Xn([`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`],[`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`])));Lo=function(o){var e=o.config,t=C({state:"loading"}),r=t[0],n=t[1],i=function(s){return Kn(void 0,void 0,void 0,function(){var d,a,l,p,f,y,b,v,_,E,S,H,ge,It,J;return qn(this,function(Q){switch(Q.label){case 0:n({state:"loading"}),Q.label=1;case 1:if(Q.trys.push([1,6,,7]),d=e.url.match(nt),!d)throw new Error(e.url+" is not a valid Figma URL.");if(a=d[3],l=new URL(e.url),p=l.searchParams.get("node-id"),f=Jn(e),!f)throw new Error("Personal Access Token is required.");return y={"X-FIGMA-TOKEN":f},b=new URL("https://api.figma.com/v1/files/".concat(a)),v=new URL("https://api.figma.com/v1/images/".concat(a)),v.searchParams.set("format","svg"),p?[3,4]:[4,fetch(b.href,{headers:y,signal:s}).then(function(V){return Ke(V)})];case 2:return _=Q.sent(),E=Io(_.document),v.searchParams.set("ids",E.map(function(V){return V.id}).join(",")),[4,fetch(v.href,{headers:y,signal:s}).then(function(V){return Ke(V)})];case 3:return S=Q.sent(),n({state:"fetched",value:{type:"file",props:{documentNode:_,renderedImages:S.images,link:e.url}}}),[2];case 4:return b.pathname+="/nodes",b.searchParams.set("ids",p),v.searchParams.set("ids",p),[4,Promise.all([fetch(b.href,{headers:y,signal:s}).then(function(V){return Ke(V)}),fetch(v.href,{headers:y,signal:s}).then(function(V){return Ke(V)})])];case 5:return H=Q.sent(),ge=H[0],It=H[1],n({state:"fetched",value:{type:"frame",props:{nodes:ge,renderedImage:Object.values(It.images)[0],link:e.url}}}),[3,7];case 6:return J=Q.sent(),J instanceof DOMException&&J.code===DOMException.ABORT_ERR?[2]:(console.error(J),n({state:"failed",error:J instanceof Error?J.message:String(J)}),[3,7]);case 7:return[2]}})})};switch(T(function(){var s=!1,d=function(){s=!0},a=new AbortController;return i(a.signal).then(d,d),function(){s||a.abort()}},[e.url]),r.state){case"loading":return h(j,null,h($,null,"Loading Figma file..."));case"failed":return h(j,null,h($,null,"Failed to load Figma file"),h($,null,r.error));case"fetched":return r.value.type==="file"?h(No,qe({css:Bo},r.value.props)):h(Oo,qe({css:Bo},r.value.props))}},Qn=Lo});c();u();c();u();c();u();var si=__STORYBOOKADDONS__,{addons:ke,types:Ft,mockChannel:ai}=__STORYBOOKADDONS__;c();u();var di=__STORYBOOKAPI__,{ActiveTabs:pi,Consumer:hi,ManagerContext:fi,Provider:mi,addons:gi,combineParameters:vi,controlOrMetaKey:yi,controlOrMetaSymbol:bi,eventMatchesShortcut:xi,eventToShortcut:_i,isMacLike:wi,isShortcutTaken:$i,keyToSymbol:Si,merge:Ei,mockChannel:Ai,optionOrAltSymbol:ki,shortcutMatchesShortcut:Ci,shortcutToHumanString:Pi,types:Mi,useAddonState:Ti,useArgTypes:Oi,useArgs:Ni,useChannel:Ri,useGlobalTypes:Bi,useGlobals:ji,useParameter:Ce,useSharedState:Li,useStoryPrepared:Ii,useStorybookApi:Hi,useStorybookState:Ut}=__STORYBOOKAPI__;F();B();c();u();var Te="STORYBOOK_ADDON_DESIGNS",Je=Te+"/panel",ba={UpdateConfig:Te+"/update_config"},se="design";c();u();O();F();B();var pn=function(){var o=function(e,t){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,n){r.__proto__=n}||function(r,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(r[i]=n[i])},o(e,t)};return function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");o(e,t);function r(){this.constructor=e}e.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}}(),rt=function(o){pn(e,o);function e(){var t=o!==null&&o.apply(this,arguments)||this;return t.state={hasError:!1},t}return e.getDerivedStateFromError=function(t){return{hasError:!0,error:t}},e.prototype.componentDidCatch=function(t,r){console.group("An error occurred during rendering Addon panel of storybook-addon-designs"),console.log("--- Error ---"),console.error(t),console.log("--- React Component Stack ---"),console.error(r.componentStack),console.groupEnd()},e.prototype.render=function(){return this.state.hasError?h(j,null,h($,null,"Failed to render addon UI"),h($,null,h("p",null,"Sorry, this addon has crashed due to the below error has thrown during rendering the addon UI."),h("pre",null,String(this.state.error)),h("p",null,"See console log for more details. To clear the error state, please reload the page."," ",h(ee,{href:"https://github.com/pocka/storybook-addon-designs/issues/new?assignees=&labels=category%3A+bug&template=bug_report.yml",target:"_blank",rel:"noopener",withArrow:!0,cancel:!1},"Bug report")))):this.props.children},e}(Qe);c();u();O();B();c();u();O();B();F();it();Ne();c();u();O();B();F();c();u();O();B();c();u();O();var Kt=function(o,e,t){if(t||arguments.length===2)for(var r=0,n=e.length,i;r<n;r++)(i||!(r in e))&&(i||(i=Array.prototype.slice.call(e,0,r)),i[r]=e[r]);return o.concat(i||Array.prototype.slice.call(e))},qt=function(o,e){var t=C([0,0]),r=t[0],n=t[1],i=C(!1),s=i[0],d=i[1],a=L(function(v){v.button===0&&(n([v.screenX,v.screenY]),d(!0))},[d,n]),l=L(function(v){var _=v.touches[0];n([_.screenX,_.screenY]),d(!0)},[d,n]),p=L(function(v){s&&n(function(_){return o([v[0]-_[0],v[1]-_[1]]),v})},Kt([n,s],e,!0)),f=L(function(v){var _=v.screenX,E=v.screenY;p([_,E])},[p]),y=L(function(v){var _=v.touches[0],E=_.screenX,S=_.screenY;p([E,S])},Kt([n,s],e,!0)),b=L(function(){n([0,0]),d(!1)},[d,n]);return{onMouseDown:a,onMouseMove:f,onMouseUp:b,onMouseLeave:b,onTouchStart:l,onTouchMove:y,onTouchCancel:b,onTouchEnd:b}};var er=function(o,e){return Object.defineProperty?Object.defineProperty(o,"raw",{value:e}):o.raw=e,o},st=function(){return st=Object.assign||function(o){for(var e,t=1,r=arguments.length;t<r;t++){e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(o[n]=e[n])}return o},st.apply(this,arguments)},tr=function(o){var e=o.children,t=o.className,r=o.style,n=o.defaultValue,i=o.value,s=o.onChange,d=C([0,0]),a=d[0],l=d[1];T(function(){l(n||i||[0,0])},[n]);var p=qt(function(y){s&&s(y),l(function(b){return[b[0]+y[0],b[1]+y[1]]})},[l,s]),f=Y(function(){var y=i||a;return{transform:"translate(".concat(y[0],"px, ").concat(y[1],"px)")}},[i,a]);return h("div",st({css:vn,className:t,style:r},p),h("div",{css:yn,style:f},e))};var vn=M(Jt||(Jt=er([`
  position: relative;
  overflow: hidden;

  &:active {
    cursor: move;
  }
`],[`
  position: relative;
  overflow: hidden;

  &:active {
    cursor: move;
  }
`]))),yn=M(Qt||(Qt=er([`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`],[`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`]))),Jt,Qt;c();u();O();B();F();var rr=function(o){var e=o.onZoomIn,t=o.onZoomOut,r=o.onReset;return h($,null,h(Pe,{onClick:e},h(Me,{icon:"zoom"})),h(Pe,{onClick:t},h(Me,{icon:"zoomout"})),h(Pe,{onClick:r},h(Me,{icon:"zoomreset"})))};c();u();O();var or=function(o,e){var t=C(1),r=t[0],n=t[1];T(function(){n(o)},e);var i=L(function(){n(function(a){return a+.1})},[n]),s=L(function(){n(function(a){return Math.max(a-.1,.1)})},[n]),d=L(function(){n(1)},[n]);return{scale:r,zoomIn:i,zoomOut:s,resetZoom:d}};var at=function(o,e){return Object.defineProperty?Object.defineProperty(o,"raw",{value:e}):o.raw=e,o},ar=function(o){var e=o.config,t=or(e.scale||1,[e.scale]),r=Y(function(){return{transform:"scale(".concat(t.scale,")")}},[t.scale]);return h("div",{css:bn},h(Dt,{border:!0},h($,{key:"left"},h("p",null,h("b",null,"Image")),h(Vt,null),h(rr,{onReset:t.resetZoom,onZoomIn:t.zoomIn,onZoomOut:t.zoomOut}))),h(tr,{css:xn,defaultValue:e.offset},h("img",{css:_n,src:e.url,style:r})))};var bn=M(nr||(nr=at([`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`],[`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`]))),xn=M(ir||(ir=at([`
  flex-grow: 1;
`],[`
  flex-grow: 1;
`]))),_n=M(sr||(sr=at([`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;

  pointer-events: none;
  border-radius: 1px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);
`],[`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;

  pointer-events: none;
  border-radius: 1px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);
`]))),nr,ir,sr;c();u();B();F();var wn=function(o,e){return Object.defineProperty?Object.defineProperty(o,"raw",{value:e}):o.raw=e,o},cr=function(o){var e,t,r,n=o.config;return h("div",{css:$n},h(ee,{cancel:!1,href:n.url,target:(e=n.target)!==null&&e!==void 0?e:"_blank",rel:(t=n.rel)!==null&&t!==void 0?t:"noopener",withArrow:(r=n.showArrow)!==null&&r!==void 0?r:!0},n.label||n.url))};var $n=M(lr||(lr=wn([`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`],[`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`]))),lr;c();u();F();B();O();Ne();var le=function(){return le=Object.assign||function(o){for(var e,t=1,r=arguments.length;t<r;t++){e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(o[n]=e[n])}return o},le.apply(this,arguments)},Sn=function(o){if(o.protocol!=="https:")return{valid:!1,error:h($,null,"Expected HTTPS link, received ",h("code",null,o.protocol),".")};if(o.hostname!=="www.sketch.com")return{valid:!1,error:h($,null,"Expected a hostname ",h("code",null,"www.sketch.com"),", received"," ",h("code",null,o.hostname))};var e=h($,null,"Expected pathname ",h("code",null,"/s/<string>/a/<string>"),", received"," ",h("code",null,o.pathname),"."),t=o.pathname.split("/").slice(1);if(t.length<4)return{valid:!1,error:e};if(t[0]==="embed")return{valid:!0,data:{url:o.href,offscreen:!1}};var r=t[0],n=t[1],i=t[2],s=t[3];return r!=="s"||!n||i!=="a"||!s?{valid:!1,error:e}:{valid:!0,data:{url:"https://www.sketch.com/embed/s/".concat(n,"/a/").concat(s),offscreen:!1}}},ur=function(o){var e=o.config,t=Y(function(){var r=Sn(new URL(e.url));return r.valid?le(le({},r),{data:le(le({},e),r.data)}):r},[e]);return t.valid?h(ae,{defer:!0,config:t.data}):h(j,null,h($,null,"Invalid Sketch URL"),h($,null,t.error))};c();u();O();B();F();var dr=function(o){var e=o.tabs,t=o.deps,r=t===void 0?[]:t,n=C(e[0].id),i=n[0],s=n[1];return T(function(){s(e[0].id)},r),h(Yt,{absolute:!0,selected:i,actions:{onSelect:s}},e.map(function(d){return h("div",{key:d.id,id:d.id,title:d.name},d.offscreen||i===d.id?d.content:null)}))};var P=function(){return P=Object.assign||function(o){for(var e,t=1,r=arguments.length;t<r;t++){e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(o[n]=e[n])}return o},P.apply(this,arguments)},ei=function(o,e,t){if(t||arguments.length===2)for(var r=0,n=e.length,i;r<n;r++)(i||!(r in e))&&(i||(i=Array.prototype.slice.call(e,0,r)),i[r]=e[r]);return o.concat(i||Array.prototype.slice.call(e))},ti=tt(function(){return Promise.resolve().then(()=>(Fo(),Ho))}),Uo=function(o){var e=o.config;if(!e||"length"in e&&e.length===0)return h(j,null,h($,null,"No designs found"),h($,null,"Learn how to"," ",h(ee,{href:"https://github.com/pocka/storybook-addon-designs#usage",target:"_blank",rel:"noopener",withArrow:!0,cancel:!1},"display design preview for the story")));var t=ei([],e instanceof Array?e:[e],!0).map(function(r){var n,i,s={id:JSON.stringify(r),name:r.name||((n=r.type)===null||n===void 0?void 0:n.toUpperCase())||"ERROR",offscreen:(i=r.offscreen)!==null&&i!==void 0?i:!0};switch(r.type){case"iframe":return P(P({},s),{content:h(ae,{config:r})});case"figma":return P(P({},s),{content:h(Xt,{config:r}),offscreen:!1});case"sketch":return P(P({},s),{content:h(ur,{config:r})});case"figspec":case"experimental-figspec":return r.type==="experimental-figspec"&&console.warn("[storybook-addon-designs] `experimental-figspec` is deprecated. We will remove it in v7.0. Please replace it to `figspec` type."),P(P({},s),{content:h(et,{fallback:"Preparing Figspec viewer..."},h(ti,{config:r})),offscreen:!1});case"image":return P(P({},s),{content:h(ar,{config:r})});case"link":return P(P({},s),{content:h(cr,{config:r})})}return P(P({},s),{content:h(j,null,h($,null,"Invalid config type"),h($,null,"Config type you set is not supported. Please choose one from"," ",h(ee,{href:"https://github.com/pocka/storybook-addon-designs#available-types",target:"_blank",rel:"noopener",withArrow:!0,cancel:!1},"available config types")))})});return t.length===1?h("div",null,t[0].content):h(dr,{tabs:t,deps:[e]})};var jt=function(o){var e=o.active,t=Ut(),r=Ce(se),n=C(e),i=n[0],s=n[1];return T(function(){s(e)},[r]),T(function(){e&&s(!0)},[e]),i?h(Uo,{key:t.storyId,config:r}):null};var Ae="Design";function Lt(o){ke.register(Te,function(e){var t=function(){var r=Ce(se);return r?Array.isArray(r)?r.length>0?"".concat(Ae," (").concat(r.length,")"):Ae:(r.name||Ae)+" (1)":Ae};o==="tab"?ke.add(Je,{title:Ae,render:function(r){var n=r.active,i=r.key;return n?h(rt,{key:i},h(jt,{active:!0})):h("noscript",{key:i})},type:Ft.TAB,paramKey:se,route:function(r){var n=r.storyId;return"/design/".concat(n)},match:function(r){var n=r.viewMode;return n==="design"}}):ke.addPanel(Je,{title:t,paramKey:se,render:function(r){var n=r.active,i=r.key;return h(zt,{key:i,active:!!n},h(rt,null,h(jt,{active:!!n})))}})})}Lt("panel");
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }
//# sourceMappingURL=register.mjs.map
