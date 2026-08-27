(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(i){if(i.ep)return;i.ep=!0;const a=t(i);fetch(i.href,a)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Rr="170",sc=0,Qr=1,ac=2,fl=1,pl=2,pn=3,In=0,wt=1,$t=2,vn=0,jn=1,wi=2,Jr=3,eo=4,rc=5,qn=100,oc=101,lc=102,cc=103,dc=104,hc=200,uc=201,fc=202,pc=203,Ga=204,Va=205,mc=206,gc=207,vc=208,yc=209,Mc=210,_c=211,bc=212,Sc=213,xc=214,Ha=0,Wa=1,$a=2,Ci=3,qa=4,Xa=5,Ya=6,ja=7,ml=0,Ec=1,Tc=2,Dn=0,wc=1,Cc=2,Ac=3,gl=4,Rc=5,Pc=6,Lc=7,vl=300,Ai=301,Ri=302,Ka=303,Za=304,Qs=306,Qi=1e3,Yn=1001,Qa=1002,en=1003,Dc=1004,cs=1005,Pt=1006,oa=1007,sn=1008,rn=1009,yl=1010,Ml=1011,Ji=1012,Pr=1013,Qn=1014,mn=1015,yn=1016,Lr=1017,Dr=1018,Pi=1020,_l=35902,bl=1021,Sl=1022,Xt=1023,xl=1024,El=1025,xi=1026,Li=1027,Tl=1028,Ir=1029,wl=1030,Ur=1031,Nr=1033,Bs=33776,Os=33777,zs=33778,Gs=33779,Ja=35840,er=35841,tr=35842,nr=35843,ir=36196,sr=37492,ar=37496,rr=37808,or=37809,lr=37810,cr=37811,dr=37812,hr=37813,ur=37814,fr=37815,pr=37816,mr=37817,gr=37818,vr=37819,yr=37820,Mr=37821,Vs=36492,_r=36494,br=36495,Cl=36283,Sr=36284,xr=36285,Er=36286,Ic=3200,Uc=3201,Al=0,Nc=1,Ln="",Wt="srgb",Ui="srgb-linear",Js="linear",it="srgb",ti=7680,to=519,Fc=512,kc=513,Bc=514,Rl=515,Oc=516,zc=517,Gc=518,Vc=519,Tr=35044,no="300 es",gn=2e3,$s=2001;class Jn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const a=i.indexOf(t);a!==-1&&i.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let a=0,r=i.length;a<r;a++)i[a].call(this,e);e.target=null}}}const xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let io=1234567;const Ki=Math.PI/180,es=180/Math.PI;function Mn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(xt[s&255]+xt[s>>8&255]+xt[s>>16&255]+xt[s>>24&255]+"-"+xt[e&255]+xt[e>>8&255]+"-"+xt[e>>16&15|64]+xt[e>>24&255]+"-"+xt[t&63|128]+xt[t>>8&255]+"-"+xt[t>>16&255]+xt[t>>24&255]+xt[n&255]+xt[n>>8&255]+xt[n>>16&255]+xt[n>>24&255]).toLowerCase()}function Tt(s,e,t){return Math.max(e,Math.min(t,s))}function Fr(s,e){return(s%e+e)%e}function Hc(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Wc(s,e,t){return s!==e?(t-s)/(e-s):0}function Zi(s,e,t){return(1-t)*s+t*e}function $c(s,e,t,n){return Zi(s,e,1-Math.exp(-t*n))}function qc(s,e=1){return e-Math.abs(Fr(s,e*2)-e)}function Xc(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Yc(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function jc(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Kc(s,e){return s+Math.random()*(e-s)}function Zc(s){return s*(.5-Math.random())}function Qc(s){s!==void 0&&(io=s);let e=io+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Jc(s){return s*Ki}function ed(s){return s*es}function td(s){return(s&s-1)===0&&s!==0}function nd(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function id(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function sd(s,e,t,n,i){const a=Math.cos,r=Math.sin,o=a(t/2),l=r(t/2),c=a((e+n)/2),d=r((e+n)/2),h=a((e-n)/2),u=r((e-n)/2),p=a((n-e)/2),g=r((n-e)/2);switch(i){case"XYX":s.set(o*d,l*h,l*u,o*c);break;case"YZY":s.set(l*u,o*d,l*h,o*c);break;case"ZXZ":s.set(l*h,l*u,o*d,o*c);break;case"XZX":s.set(o*d,l*g,l*p,o*c);break;case"YXY":s.set(l*p,o*d,l*g,o*c);break;case"ZYZ":s.set(l*g,l*p,o*d,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Jt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function nt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const ad={DEG2RAD:Ki,RAD2DEG:es,generateUUID:Mn,clamp:Tt,euclideanModulo:Fr,mapLinear:Hc,inverseLerp:Wc,lerp:Zi,damp:$c,pingpong:qc,smoothstep:Xc,smootherstep:Yc,randInt:jc,randFloat:Kc,randFloatSpread:Zc,seededRandom:Qc,degToRad:Jc,radToDeg:ed,isPowerOfTwo:td,ceilPowerOfTwo:nd,floorPowerOfTwo:id,setQuaternionFromProperEuler:sd,normalize:nt,denormalize:Jt};class Re{constructor(e=0,t=0){Re.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),a=this.x-e.x,r=this.y-e.y;return this.x=a*n-r*i+e.x,this.y=a*i+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ze{constructor(e,t,n,i,a,r,o,l,c){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,a,r,o,l,c)}set(e,t,n,i,a,r,o,l,c){const d=this.elements;return d[0]=e,d[1]=i,d[2]=o,d[3]=t,d[4]=a,d[5]=l,d[6]=n,d[7]=r,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,a=this.elements,r=n[0],o=n[3],l=n[6],c=n[1],d=n[4],h=n[7],u=n[2],p=n[5],g=n[8],v=i[0],m=i[3],f=i[6],x=i[1],E=i[4],_=i[7],L=i[2],C=i[5],w=i[8];return a[0]=r*v+o*x+l*L,a[3]=r*m+o*E+l*C,a[6]=r*f+o*_+l*w,a[1]=c*v+d*x+h*L,a[4]=c*m+d*E+h*C,a[7]=c*f+d*_+h*w,a[2]=u*v+p*x+g*L,a[5]=u*m+p*E+g*C,a[8]=u*f+p*_+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],a=e[3],r=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return t*r*d-t*o*c-n*a*d+n*o*l+i*a*c-i*r*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],a=e[3],r=e[4],o=e[5],l=e[6],c=e[7],d=e[8],h=d*r-o*c,u=o*l-d*a,p=c*a-r*l,g=t*h+n*u+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=h*v,e[1]=(i*c-d*n)*v,e[2]=(o*n-i*r)*v,e[3]=u*v,e[4]=(d*t-i*l)*v,e[5]=(i*a-o*t)*v,e[6]=p*v,e[7]=(n*l-c*t)*v,e[8]=(r*t-n*a)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,a,r,o){const l=Math.cos(a),c=Math.sin(a);return this.set(n*l,n*c,-n*(l*r+c*o)+r+e,-i*c,i*l,-i*(-c*r+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(la.makeScale(e,t)),this}rotate(e){return this.premultiply(la.makeRotation(-e)),this}translate(e,t){return this.premultiply(la.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const la=new ze;function Pl(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function qs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function rd(){const s=qs("canvas");return s.style.display="block",s}const so={};function Xi(s){s in so||(so[s]=!0,console.warn(s))}function od(s,e,t){return new Promise(function(n,i){function a(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}function ld(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function cd(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ke={enabled:!0,workingColorSpace:Ui,spaces:{},convert:function(s,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===it&&(s.r=_n(s.r),s.g=_n(s.g),s.b=_n(s.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===it&&(s.r=Ei(s.r),s.g=Ei(s.g),s.b=Ei(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ln?Js:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,t){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function _n(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ei(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const ao=[.64,.33,.3,.6,.15,.06],ro=[.2126,.7152,.0722],oo=[.3127,.329],lo=new ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),co=new ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ke.define({[Ui]:{primaries:ao,whitePoint:oo,transfer:Js,toXYZ:lo,fromXYZ:co,luminanceCoefficients:ro,workingColorSpaceConfig:{unpackColorSpace:Wt},outputColorSpaceConfig:{drawingBufferColorSpace:Wt}},[Wt]:{primaries:ao,whitePoint:oo,transfer:it,toXYZ:lo,fromXYZ:co,luminanceCoefficients:ro,outputColorSpaceConfig:{drawingBufferColorSpace:Wt}}});let ni;class dd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ni===void 0&&(ni=qs("canvas")),ni.width=e.width,ni.height=e.height;const n=ni.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ni}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=qs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),a=i.data;for(let r=0;r<a.length;r++)a[r]=_n(a[r]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(_n(t[n]/255)*255):t[n]=_n(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let hd=0;class Ll{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hd++}),this.uuid=Mn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let a;if(Array.isArray(i)){a=[];for(let r=0,o=i.length;r<o;r++)i[r].isDataTexture?a.push(ca(i[r].image)):a.push(ca(i[r]))}else a=ca(i);n.url=a}return t||(e.images[this.uuid]=n),n}}function ca(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?dd.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ud=0;class Lt extends Jn{constructor(e=Lt.DEFAULT_IMAGE,t=Lt.DEFAULT_MAPPING,n=Yn,i=Yn,a=Pt,r=sn,o=Xt,l=rn,c=Lt.DEFAULT_ANISOTROPY,d=Ln){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ud++}),this.uuid=Mn(),this.name="",this.source=new Ll(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Re(0,0),this.repeat=new Re(1,1),this.center=new Re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==vl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Qi:e.x=e.x-Math.floor(e.x);break;case Yn:e.x=e.x<0?0:1;break;case Qa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Qi:e.y=e.y-Math.floor(e.y);break;case Yn:e.y=e.y<0?0:1;break;case Qa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Lt.DEFAULT_IMAGE=null;Lt.DEFAULT_MAPPING=vl;Lt.DEFAULT_ANISOTROPY=1;class st{constructor(e=0,t=0,n=0,i=1){st.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,a=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i+r[12]*a,this.y=r[1]*t+r[5]*n+r[9]*i+r[13]*a,this.z=r[2]*t+r[6]*n+r[10]*i+r[14]*a,this.w=r[3]*t+r[7]*n+r[11]*i+r[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,a;const l=e.elements,c=l[0],d=l[4],h=l[8],u=l[1],p=l[5],g=l[9],v=l[2],m=l[6],f=l[10];if(Math.abs(d-u)<.01&&Math.abs(h-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+u)<.1&&Math.abs(h+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,_=(p+1)/2,L=(f+1)/2,C=(d+u)/4,w=(h+v)/4,R=(g+m)/4;return E>_&&E>L?E<.01?(n=0,i=.707106781,a=.707106781):(n=Math.sqrt(E),i=C/n,a=w/n):_>L?_<.01?(n=.707106781,i=0,a=.707106781):(i=Math.sqrt(_),n=C/i,a=R/i):L<.01?(n=.707106781,i=.707106781,a=0):(a=Math.sqrt(L),n=w/a,i=R/a),this.set(n,i,a,t),this}let x=Math.sqrt((m-g)*(m-g)+(h-v)*(h-v)+(u-d)*(u-d));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(h-v)/x,this.z=(u-d)/x,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fd extends Jn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new st(0,0,e,t),this.scissorTest=!1,this.viewport=new st(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const a=new Lt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);a.flipY=!1,a.generateMipmaps=n.generateMipmaps,a.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,a=this.textures.length;i<a;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ll(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class It extends fd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Dl extends Lt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=en,this.minFilter=en,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class pd extends Lt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=en,this.minFilter=en,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class is{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,a,r,o){let l=n[i+0],c=n[i+1],d=n[i+2],h=n[i+3];const u=a[r+0],p=a[r+1],g=a[r+2],v=a[r+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=h;return}if(o===1){e[t+0]=u,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(h!==v||l!==u||c!==p||d!==g){let m=1-o;const f=l*u+c*p+d*g+h*v,x=f>=0?1:-1,E=1-f*f;if(E>Number.EPSILON){const L=Math.sqrt(E),C=Math.atan2(L,f*x);m=Math.sin(m*C)/L,o=Math.sin(o*C)/L}const _=o*x;if(l=l*m+u*_,c=c*m+p*_,d=d*m+g*_,h=h*m+v*_,m===1-o){const L=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=L,c*=L,d*=L,h*=L}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,a,r){const o=n[i],l=n[i+1],c=n[i+2],d=n[i+3],h=a[r],u=a[r+1],p=a[r+2],g=a[r+3];return e[t]=o*g+d*h+l*p-c*u,e[t+1]=l*g+d*u+c*h-o*p,e[t+2]=c*g+d*p+o*u-l*h,e[t+3]=d*g-o*h-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,a=e._z,r=e._order,o=Math.cos,l=Math.sin,c=o(n/2),d=o(i/2),h=o(a/2),u=l(n/2),p=l(i/2),g=l(a/2);switch(r){case"XYZ":this._x=u*d*h+c*p*g,this._y=c*p*h-u*d*g,this._z=c*d*g+u*p*h,this._w=c*d*h-u*p*g;break;case"YXZ":this._x=u*d*h+c*p*g,this._y=c*p*h-u*d*g,this._z=c*d*g-u*p*h,this._w=c*d*h+u*p*g;break;case"ZXY":this._x=u*d*h-c*p*g,this._y=c*p*h+u*d*g,this._z=c*d*g+u*p*h,this._w=c*d*h-u*p*g;break;case"ZYX":this._x=u*d*h-c*p*g,this._y=c*p*h+u*d*g,this._z=c*d*g-u*p*h,this._w=c*d*h+u*p*g;break;case"YZX":this._x=u*d*h+c*p*g,this._y=c*p*h+u*d*g,this._z=c*d*g-u*p*h,this._w=c*d*h-u*p*g;break;case"XZY":this._x=u*d*h-c*p*g,this._y=c*p*h-u*d*g,this._z=c*d*g+u*p*h,this._w=c*d*h+u*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],a=t[8],r=t[1],o=t[5],l=t[9],c=t[2],d=t[6],h=t[10],u=n+o+h;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(d-l)*p,this._y=(a-c)*p,this._z=(r-i)*p}else if(n>o&&n>h){const p=2*Math.sqrt(1+n-o-h);this._w=(d-l)/p,this._x=.25*p,this._y=(i+r)/p,this._z=(a+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-n-h);this._w=(a-c)/p,this._x=(i+r)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+h-n-o);this._w=(r-i)/p,this._x=(a+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,a=e._z,r=e._w,o=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+r*o+i*c-a*l,this._y=i*d+r*l+a*o-n*c,this._z=a*d+r*c+n*l-i*o,this._w=r*d-n*o-i*l-a*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,a=this._z,r=this._w;let o=r*e._w+n*e._x+i*e._y+a*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=r,this._x=n,this._y=i,this._z=a,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*r+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*a+t*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,o),h=Math.sin((1-t)*d)/c,u=Math.sin(t*d)/c;return this._w=r*h+this._w*u,this._x=n*h+this._x*u,this._y=i*h+this._y*u,this._z=a*h+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,n=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ho.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ho.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*i,this.y=a[1]*t+a[4]*n+a[7]*i,this.z=a[2]*t+a[5]*n+a[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,a=e.elements,r=1/(a[3]*t+a[7]*n+a[11]*i+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*i+a[12])*r,this.y=(a[1]*t+a[5]*n+a[9]*i+a[13])*r,this.z=(a[2]*t+a[6]*n+a[10]*i+a[14])*r,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,a=e.x,r=e.y,o=e.z,l=e.w,c=2*(r*i-o*n),d=2*(o*t-a*i),h=2*(a*n-r*t);return this.x=t+l*c+r*h-o*d,this.y=n+l*d+o*c-a*h,this.z=i+l*h+a*d-r*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i,this.y=a[1]*t+a[5]*n+a[9]*i,this.z=a[2]*t+a[6]*n+a[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,a=e.z,r=t.x,o=t.y,l=t.z;return this.x=i*l-a*o,this.y=a*r-n*l,this.z=n*o-i*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return da.copy(this).projectOnVector(e),this.sub(da)}reflect(e){return this.sub(da.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const da=new P,ho=new is;class ss{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Kt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Kt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Kt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,Kt):Kt.fromBufferAttribute(a,r),Kt.applyMatrix4(e.matrixWorld),this.expandByPoint(Kt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ds.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ds.copy(n.boundingBox)),ds.applyMatrix4(e.matrixWorld),this.union(ds)}const i=e.children;for(let a=0,r=i.length;a<r;a++)this.expandByObject(i[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Kt),Kt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Bi),hs.subVectors(this.max,Bi),ii.subVectors(e.a,Bi),si.subVectors(e.b,Bi),ai.subVectors(e.c,Bi),Tn.subVectors(si,ii),wn.subVectors(ai,si),Fn.subVectors(ii,ai);let t=[0,-Tn.z,Tn.y,0,-wn.z,wn.y,0,-Fn.z,Fn.y,Tn.z,0,-Tn.x,wn.z,0,-wn.x,Fn.z,0,-Fn.x,-Tn.y,Tn.x,0,-wn.y,wn.x,0,-Fn.y,Fn.x,0];return!ha(t,ii,si,ai,hs)||(t=[1,0,0,0,1,0,0,0,1],!ha(t,ii,si,ai,hs))?!1:(us.crossVectors(Tn,wn),t=[us.x,us.y,us.z],ha(t,ii,si,ai,hs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Kt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Kt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(cn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const cn=[new P,new P,new P,new P,new P,new P,new P,new P],Kt=new P,ds=new ss,ii=new P,si=new P,ai=new P,Tn=new P,wn=new P,Fn=new P,Bi=new P,hs=new P,us=new P,kn=new P;function ha(s,e,t,n,i){for(let a=0,r=s.length-3;a<=r;a+=3){kn.fromArray(s,a);const o=i.x*Math.abs(kn.x)+i.y*Math.abs(kn.y)+i.z*Math.abs(kn.z),l=e.dot(kn),c=t.dot(kn),d=n.dot(kn);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const md=new ss,Oi=new P,ua=new P;class as{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):md.setFromPoints(e).getCenter(n);let i=0;for(let a=0,r=e.length;a<r;a++)i=Math.max(i,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Oi.subVectors(e,this.center);const t=Oi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Oi,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ua.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Oi.copy(e.center).add(ua)),this.expandByPoint(Oi.copy(e.center).sub(ua))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const dn=new P,fa=new P,fs=new P,Cn=new P,pa=new P,ps=new P,ma=new P;class kr{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,dn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=dn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(dn.copy(this.origin).addScaledVector(this.direction,t),dn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){fa.copy(e).add(t).multiplyScalar(.5),fs.copy(t).sub(e).normalize(),Cn.copy(this.origin).sub(fa);const a=e.distanceTo(t)*.5,r=-this.direction.dot(fs),o=Cn.dot(this.direction),l=-Cn.dot(fs),c=Cn.lengthSq(),d=Math.abs(1-r*r);let h,u,p,g;if(d>0)if(h=r*l-o,u=r*o-l,g=a*d,h>=0)if(u>=-g)if(u<=g){const v=1/d;h*=v,u*=v,p=h*(h+r*u+2*o)+u*(r*h+u+2*l)+c}else u=a,h=Math.max(0,-(r*u+o)),p=-h*h+u*(u+2*l)+c;else u=-a,h=Math.max(0,-(r*u+o)),p=-h*h+u*(u+2*l)+c;else u<=-g?(h=Math.max(0,-(-r*a+o)),u=h>0?-a:Math.min(Math.max(-a,-l),a),p=-h*h+u*(u+2*l)+c):u<=g?(h=0,u=Math.min(Math.max(-a,-l),a),p=u*(u+2*l)+c):(h=Math.max(0,-(r*a+o)),u=h>0?a:Math.min(Math.max(-a,-l),a),p=-h*h+u*(u+2*l)+c);else u=r>0?-a:a,h=Math.max(0,-(r*u+o)),p=-h*h+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(fa).addScaledVector(fs,u),p}intersectSphere(e,t){dn.subVectors(e.center,this.origin);const n=dn.dot(this.direction),i=dn.dot(dn)-n*n,a=e.radius*e.radius;if(i>a)return null;const r=Math.sqrt(a-i),o=n-r,l=n+r;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,a,r,o,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,i=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,i=(e.min.x-u.x)*c),d>=0?(a=(e.min.y-u.y)*d,r=(e.max.y-u.y)*d):(a=(e.max.y-u.y)*d,r=(e.min.y-u.y)*d),n>r||a>i||((a>n||isNaN(n))&&(n=a),(r<i||isNaN(i))&&(i=r),h>=0?(o=(e.min.z-u.z)*h,l=(e.max.z-u.z)*h):(o=(e.max.z-u.z)*h,l=(e.min.z-u.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,dn)!==null}intersectTriangle(e,t,n,i,a){pa.subVectors(t,e),ps.subVectors(n,e),ma.crossVectors(pa,ps);let r=this.direction.dot(ma),o;if(r>0){if(i)return null;o=1}else if(r<0)o=-1,r=-r;else return null;Cn.subVectors(this.origin,e);const l=o*this.direction.dot(ps.crossVectors(Cn,ps));if(l<0)return null;const c=o*this.direction.dot(pa.cross(Cn));if(c<0||l+c>r)return null;const d=-o*Cn.dot(ma);return d<0?null:this.at(d/r,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ot{constructor(e,t,n,i,a,r,o,l,c,d,h,u,p,g,v,m){ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,a,r,o,l,c,d,h,u,p,g,v,m)}set(e,t,n,i,a,r,o,l,c,d,h,u,p,g,v,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=i,f[1]=a,f[5]=r,f[9]=o,f[13]=l,f[2]=c,f[6]=d,f[10]=h,f[14]=u,f[3]=p,f[7]=g,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ot().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/ri.setFromMatrixColumn(e,0).length(),a=1/ri.setFromMatrixColumn(e,1).length(),r=1/ri.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,a=e.z,r=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),d=Math.cos(a),h=Math.sin(a);if(e.order==="XYZ"){const u=r*d,p=r*h,g=o*d,v=o*h;t[0]=l*d,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=u-v*c,t[9]=-o*l,t[2]=v-u*c,t[6]=g+p*c,t[10]=r*l}else if(e.order==="YXZ"){const u=l*d,p=l*h,g=c*d,v=c*h;t[0]=u+v*o,t[4]=g*o-p,t[8]=r*c,t[1]=r*h,t[5]=r*d,t[9]=-o,t[2]=p*o-g,t[6]=v+u*o,t[10]=r*l}else if(e.order==="ZXY"){const u=l*d,p=l*h,g=c*d,v=c*h;t[0]=u-v*o,t[4]=-r*h,t[8]=g+p*o,t[1]=p+g*o,t[5]=r*d,t[9]=v-u*o,t[2]=-r*c,t[6]=o,t[10]=r*l}else if(e.order==="ZYX"){const u=r*d,p=r*h,g=o*d,v=o*h;t[0]=l*d,t[4]=g*c-p,t[8]=u*c+v,t[1]=l*h,t[5]=v*c+u,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=r*l}else if(e.order==="YZX"){const u=r*l,p=r*c,g=o*l,v=o*c;t[0]=l*d,t[4]=v-u*h,t[8]=g*h+p,t[1]=h,t[5]=r*d,t[9]=-o*d,t[2]=-c*d,t[6]=p*h+g,t[10]=u-v*h}else if(e.order==="XZY"){const u=r*l,p=r*c,g=o*l,v=o*c;t[0]=l*d,t[4]=-h,t[8]=c*d,t[1]=u*h+v,t[5]=r*d,t[9]=p*h-g,t[2]=g*h-p,t[6]=o*d,t[10]=v*h+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gd,e,vd)}lookAt(e,t,n){const i=this.elements;return Nt.subVectors(e,t),Nt.lengthSq()===0&&(Nt.z=1),Nt.normalize(),An.crossVectors(n,Nt),An.lengthSq()===0&&(Math.abs(n.z)===1?Nt.x+=1e-4:Nt.z+=1e-4,Nt.normalize(),An.crossVectors(n,Nt)),An.normalize(),ms.crossVectors(Nt,An),i[0]=An.x,i[4]=ms.x,i[8]=Nt.x,i[1]=An.y,i[5]=ms.y,i[9]=Nt.y,i[2]=An.z,i[6]=ms.z,i[10]=Nt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,a=this.elements,r=n[0],o=n[4],l=n[8],c=n[12],d=n[1],h=n[5],u=n[9],p=n[13],g=n[2],v=n[6],m=n[10],f=n[14],x=n[3],E=n[7],_=n[11],L=n[15],C=i[0],w=i[4],R=i[8],S=i[12],M=i[1],A=i[5],B=i[9],F=i[13],O=i[2],W=i[6],$=i[10],Q=i[14],q=i[3],oe=i[7],le=i[11],X=i[15];return a[0]=r*C+o*M+l*O+c*q,a[4]=r*w+o*A+l*W+c*oe,a[8]=r*R+o*B+l*$+c*le,a[12]=r*S+o*F+l*Q+c*X,a[1]=d*C+h*M+u*O+p*q,a[5]=d*w+h*A+u*W+p*oe,a[9]=d*R+h*B+u*$+p*le,a[13]=d*S+h*F+u*Q+p*X,a[2]=g*C+v*M+m*O+f*q,a[6]=g*w+v*A+m*W+f*oe,a[10]=g*R+v*B+m*$+f*le,a[14]=g*S+v*F+m*Q+f*X,a[3]=x*C+E*M+_*O+L*q,a[7]=x*w+E*A+_*W+L*oe,a[11]=x*R+E*B+_*$+L*le,a[15]=x*S+E*F+_*Q+L*X,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],a=e[12],r=e[1],o=e[5],l=e[9],c=e[13],d=e[2],h=e[6],u=e[10],p=e[14],g=e[3],v=e[7],m=e[11],f=e[15];return g*(+a*l*h-i*c*h-a*o*u+n*c*u+i*o*p-n*l*p)+v*(+t*l*p-t*c*u+a*r*u-i*r*p+i*c*d-a*l*d)+m*(+t*c*h-t*o*p-a*r*h+n*r*p+a*o*d-n*c*d)+f*(-i*o*d-t*l*h+t*o*u+i*r*h-n*r*u+n*l*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],a=e[3],r=e[4],o=e[5],l=e[6],c=e[7],d=e[8],h=e[9],u=e[10],p=e[11],g=e[12],v=e[13],m=e[14],f=e[15],x=h*m*c-v*u*c+v*l*p-o*m*p-h*l*f+o*u*f,E=g*u*c-d*m*c-g*l*p+r*m*p+d*l*f-r*u*f,_=d*v*c-g*h*c+g*o*p-r*v*p-d*o*f+r*h*f,L=g*h*l-d*v*l-g*o*u+r*v*u+d*o*m-r*h*m,C=t*x+n*E+i*_+a*L;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/C;return e[0]=x*w,e[1]=(v*u*a-h*m*a-v*i*p+n*m*p+h*i*f-n*u*f)*w,e[2]=(o*m*a-v*l*a+v*i*c-n*m*c-o*i*f+n*l*f)*w,e[3]=(h*l*a-o*u*a-h*i*c+n*u*c+o*i*p-n*l*p)*w,e[4]=E*w,e[5]=(d*m*a-g*u*a+g*i*p-t*m*p-d*i*f+t*u*f)*w,e[6]=(g*l*a-r*m*a-g*i*c+t*m*c+r*i*f-t*l*f)*w,e[7]=(r*u*a-d*l*a+d*i*c-t*u*c-r*i*p+t*l*p)*w,e[8]=_*w,e[9]=(g*h*a-d*v*a-g*n*p+t*v*p+d*n*f-t*h*f)*w,e[10]=(r*v*a-g*o*a+g*n*c-t*v*c-r*n*f+t*o*f)*w,e[11]=(d*o*a-r*h*a-d*n*c+t*h*c+r*n*p-t*o*p)*w,e[12]=L*w,e[13]=(d*v*i-g*h*i+g*n*u-t*v*u-d*n*m+t*h*m)*w,e[14]=(g*o*i-r*v*i-g*n*l+t*v*l+r*n*m-t*o*m)*w,e[15]=(r*h*i-d*o*i+d*n*l-t*h*l-r*n*u+t*o*u)*w,this}scale(e){const t=this.elements,n=e.x,i=e.y,a=e.z;return t[0]*=n,t[4]*=i,t[8]*=a,t[1]*=n,t[5]*=i,t[9]*=a,t[2]*=n,t[6]*=i,t[10]*=a,t[3]*=n,t[7]*=i,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),a=1-n,r=e.x,o=e.y,l=e.z,c=a*r,d=a*o;return this.set(c*r+n,c*o-i*l,c*l+i*o,0,c*o+i*l,d*o+n,d*l-i*r,0,c*l-i*o,d*l+i*r,a*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,a,r){return this.set(1,n,a,0,e,1,r,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,a=t._x,r=t._y,o=t._z,l=t._w,c=a+a,d=r+r,h=o+o,u=a*c,p=a*d,g=a*h,v=r*d,m=r*h,f=o*h,x=l*c,E=l*d,_=l*h,L=n.x,C=n.y,w=n.z;return i[0]=(1-(v+f))*L,i[1]=(p+_)*L,i[2]=(g-E)*L,i[3]=0,i[4]=(p-_)*C,i[5]=(1-(u+f))*C,i[6]=(m+x)*C,i[7]=0,i[8]=(g+E)*w,i[9]=(m-x)*w,i[10]=(1-(u+v))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let a=ri.set(i[0],i[1],i[2]).length();const r=ri.set(i[4],i[5],i[6]).length(),o=ri.set(i[8],i[9],i[10]).length();this.determinant()<0&&(a=-a),e.x=i[12],e.y=i[13],e.z=i[14],Zt.copy(this);const c=1/a,d=1/r,h=1/o;return Zt.elements[0]*=c,Zt.elements[1]*=c,Zt.elements[2]*=c,Zt.elements[4]*=d,Zt.elements[5]*=d,Zt.elements[6]*=d,Zt.elements[8]*=h,Zt.elements[9]*=h,Zt.elements[10]*=h,t.setFromRotationMatrix(Zt),n.x=a,n.y=r,n.z=o,this}makePerspective(e,t,n,i,a,r,o=gn){const l=this.elements,c=2*a/(t-e),d=2*a/(n-i),h=(t+e)/(t-e),u=(n+i)/(n-i);let p,g;if(o===gn)p=-(r+a)/(r-a),g=-2*r*a/(r-a);else if(o===$s)p=-r/(r-a),g=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,a,r,o=gn){const l=this.elements,c=1/(t-e),d=1/(n-i),h=1/(r-a),u=(t+e)*c,p=(n+i)*d;let g,v;if(o===gn)g=(r+a)*h,v=-2*h;else if(o===$s)g=a*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ri=new P,Zt=new ot,gd=new P(0,0,0),vd=new P(1,1,1),An=new P,ms=new P,Nt=new P,uo=new ot,fo=new is;class Gt{constructor(e=0,t=0,n=0,i=Gt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,a=i[0],r=i[4],o=i[8],l=i[1],c=i[5],d=i[9],h=i[2],u=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(Tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Tt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,a),this._z=0);break;case"ZXY":this._x=Math.asin(Tt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-Tt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Tt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,a)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Tt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-d,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return uo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(uo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return fo.setFromEuler(this),this.setFromQuaternion(fo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gt.DEFAULT_ORDER="XYZ";class Il{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let yd=0;const po=new P,oi=new is,hn=new ot,gs=new P,zi=new P,Md=new P,_d=new is,mo=new P(1,0,0),go=new P(0,1,0),vo=new P(0,0,1),yo={type:"added"},bd={type:"removed"},li={type:"childadded",child:null},ga={type:"childremoved",child:null};class mt extends Jn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yd++}),this.uuid=Mn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mt.DEFAULT_UP.clone();const e=new P,t=new Gt,n=new is,i=new P(1,1,1);function a(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ot},normalMatrix:{value:new ze}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Il,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return oi.setFromAxisAngle(e,t),this.quaternion.multiply(oi),this}rotateOnWorldAxis(e,t){return oi.setFromAxisAngle(e,t),this.quaternion.premultiply(oi),this}rotateX(e){return this.rotateOnAxis(mo,e)}rotateY(e){return this.rotateOnAxis(go,e)}rotateZ(e){return this.rotateOnAxis(vo,e)}translateOnAxis(e,t){return po.copy(e).applyQuaternion(this.quaternion),this.position.add(po.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(mo,e)}translateY(e){return this.translateOnAxis(go,e)}translateZ(e){return this.translateOnAxis(vo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?gs.copy(e):gs.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),zi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hn.lookAt(zi,gs,this.up):hn.lookAt(gs,zi,this.up),this.quaternion.setFromRotationMatrix(hn),i&&(hn.extractRotation(i.matrixWorld),oi.setFromRotationMatrix(hn),this.quaternion.premultiply(oi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(yo),li.child=e,this.dispatchEvent(li),li.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(bd),ga.child=e,this.dispatchEvent(ga),ga.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hn.multiply(e.parent.matrixWorld)),e.applyMatrix4(hn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(yo),li.child=e,this.dispatchEvent(li),li.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let a=0,r=i.length;a<r;a++)i[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zi,e,Md),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zi,_d,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let a=0,r=i.length;a<r;a++)i[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];a(e.shapes,h)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(e.materials,this.material[l]));i.material=o}else i.material=a(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(a(e.animations,l))}}if(t){const o=r(e.geometries),l=r(e.materials),c=r(e.textures),d=r(e.images),h=r(e.shapes),u=r(e.skeletons),p=r(e.animations),g=r(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),h.length>0&&(n.shapes=h),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function r(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}mt.DEFAULT_UP=new P(0,1,0);mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Qt=new P,un=new P,va=new P,fn=new P,ci=new P,di=new P,Mo=new P,ya=new P,Ma=new P,_a=new P,ba=new st,Sa=new st,xa=new st;class qt{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Qt.subVectors(e,t),i.cross(Qt);const a=i.lengthSq();return a>0?i.multiplyScalar(1/Math.sqrt(a)):i.set(0,0,0)}static getBarycoord(e,t,n,i,a){Qt.subVectors(i,t),un.subVectors(n,t),va.subVectors(e,t);const r=Qt.dot(Qt),o=Qt.dot(un),l=Qt.dot(va),c=un.dot(un),d=un.dot(va),h=r*c-o*o;if(h===0)return a.set(0,0,0),null;const u=1/h,p=(c*l-o*d)*u,g=(r*d-o*l)*u;return a.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,fn)===null?!1:fn.x>=0&&fn.y>=0&&fn.x+fn.y<=1}static getInterpolation(e,t,n,i,a,r,o,l){return this.getBarycoord(e,t,n,i,fn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,fn.x),l.addScaledVector(r,fn.y),l.addScaledVector(o,fn.z),l)}static getInterpolatedAttribute(e,t,n,i,a,r){return ba.setScalar(0),Sa.setScalar(0),xa.setScalar(0),ba.fromBufferAttribute(e,t),Sa.fromBufferAttribute(e,n),xa.fromBufferAttribute(e,i),r.setScalar(0),r.addScaledVector(ba,a.x),r.addScaledVector(Sa,a.y),r.addScaledVector(xa,a.z),r}static isFrontFacing(e,t,n,i){return Qt.subVectors(n,t),un.subVectors(e,t),Qt.cross(un).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qt.subVectors(this.c,this.b),un.subVectors(this.a,this.b),Qt.cross(un).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return qt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return qt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,a){return qt.getInterpolation(e,this.a,this.b,this.c,t,n,i,a)}containsPoint(e){return qt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return qt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,a=this.c;let r,o;ci.subVectors(i,n),di.subVectors(a,n),ya.subVectors(e,n);const l=ci.dot(ya),c=di.dot(ya);if(l<=0&&c<=0)return t.copy(n);Ma.subVectors(e,i);const d=ci.dot(Ma),h=di.dot(Ma);if(d>=0&&h<=d)return t.copy(i);const u=l*h-d*c;if(u<=0&&l>=0&&d<=0)return r=l/(l-d),t.copy(n).addScaledVector(ci,r);_a.subVectors(e,a);const p=ci.dot(_a),g=di.dot(_a);if(g>=0&&p<=g)return t.copy(a);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(di,o);const m=d*g-p*h;if(m<=0&&h-d>=0&&p-g>=0)return Mo.subVectors(a,i),o=(h-d)/(h-d+(p-g)),t.copy(i).addScaledVector(Mo,o);const f=1/(m+v+u);return r=v*f,o=u*f,t.copy(n).addScaledVector(ci,r).addScaledVector(di,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ul={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rn={h:0,s:0,l:0},vs={h:0,s:0,l:0};function Ea(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class ke{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ke.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Ke.workingColorSpace){if(e=Fr(e,1),t=Tt(t,0,1),n=Tt(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,r=2*n-a;this.r=Ea(r,a,e+1/3),this.g=Ea(r,a,e),this.b=Ea(r,a,e-1/3)}return Ke.toWorkingColorSpace(this,i),this}setStyle(e,t=Wt){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const r=i[1],o=i[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=i[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Wt){const n=Ul[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_n(e.r),this.g=_n(e.g),this.b=_n(e.b),this}copyLinearToSRGB(e){return this.r=Ei(e.r),this.g=Ei(e.g),this.b=Ei(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wt){return Ke.fromWorkingColorSpace(Et.copy(this),e),Math.round(Tt(Et.r*255,0,255))*65536+Math.round(Tt(Et.g*255,0,255))*256+Math.round(Tt(Et.b*255,0,255))}getHexString(e=Wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.fromWorkingColorSpace(Et.copy(this),t);const n=Et.r,i=Et.g,a=Et.b,r=Math.max(n,i,a),o=Math.min(n,i,a);let l,c;const d=(o+r)/2;if(o===r)l=0,c=0;else{const h=r-o;switch(c=d<=.5?h/(r+o):h/(2-r-o),r){case n:l=(i-a)/h+(i<a?6:0);break;case i:l=(a-n)/h+2;break;case a:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=Ke.workingColorSpace){return Ke.fromWorkingColorSpace(Et.copy(this),t),e.r=Et.r,e.g=Et.g,e.b=Et.b,e}getStyle(e=Wt){Ke.fromWorkingColorSpace(Et.copy(this),e);const t=Et.r,n=Et.g,i=Et.b;return e!==Wt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Rn),this.setHSL(Rn.h+e,Rn.s+t,Rn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Rn),e.getHSL(vs);const n=Zi(Rn.h,vs.h,t),i=Zi(Rn.s,vs.s,t),a=Zi(Rn.l,vs.l,t);return this.setHSL(n,i,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*i,this.g=a[1]*t+a[4]*n+a[7]*i,this.b=a[2]*t+a[5]*n+a[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Et=new ke;ke.NAMES=Ul;let Sd=0;class Un extends Jn{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sd++}),this.uuid=Mn(),this.name="",this.blending=jn,this.side=In,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ga,this.blendDst=Va,this.blendEquation=qn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=Ci,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=to,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ti,this.stencilZFail=ti,this.stencilZPass=ti,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==jn&&(n.blending=this.blending),this.side!==In&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ga&&(n.blendSrc=this.blendSrc),this.blendDst!==Va&&(n.blendDst=this.blendDst),this.blendEquation!==qn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ci&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==to&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ti&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ti&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ti&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(a){const r=[];for(const o in a){const l=a[o];delete l.metadata,r.push(l)}return r}if(t){const a=i(e.textures),r=i(e.images);a.length>0&&(n.textures=a),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let a=0;a!==i;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Kn extends Un{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gt,this.combine=ml,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ft=new P,ys=new Re;class Mt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Tr,this.updateRanges=[],this.gpuType=mn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,a=this.itemSize;i<a;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ys.fromBufferAttribute(this,t),ys.applyMatrix3(e),this.setXY(t,ys.x,ys.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix3(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix4(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyNormalMatrix(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.transformDirection(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Jt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=nt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Jt(t,this.array)),t}setX(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Jt(t,this.array)),t}setY(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Jt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Jt(t,this.array)),t}setW(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),i=nt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,a){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),i=nt(i,this.array),a=nt(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Tr&&(e.usage=this.usage),e}}class Nl extends Mt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Fl extends Mt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ht extends Mt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let xd=0;const Ht=new ot,Ta=new mt,hi=new P,Ft=new ss,Gi=new ss,yt=new P;class _t extends Jn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xd++}),this.uuid=Mn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Pl(e)?Fl:Nl)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new ze().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ht.makeRotationFromQuaternion(e),this.applyMatrix4(Ht),this}rotateX(e){return Ht.makeRotationX(e),this.applyMatrix4(Ht),this}rotateY(e){return Ht.makeRotationY(e),this.applyMatrix4(Ht),this}rotateZ(e){return Ht.makeRotationZ(e),this.applyMatrix4(Ht),this}translate(e,t,n){return Ht.makeTranslation(e,t,n),this.applyMatrix4(Ht),this}scale(e,t,n){return Ht.makeScale(e,t,n),this.applyMatrix4(Ht),this}lookAt(e){return Ta.lookAt(e),Ta.updateMatrix(),this.applyMatrix4(Ta.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hi).negate(),this.translate(hi.x,hi.y,hi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,a=e.length;i<a;i++){const r=e[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new ht(n,3))}else{for(let n=0,i=t.count;n<i;n++){const a=e[n];t.setXYZ(n,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ss);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const a=t[n];Ft.setFromBufferAttribute(a),this.morphTargetsRelative?(yt.addVectors(this.boundingBox.min,Ft.min),this.boundingBox.expandByPoint(yt),yt.addVectors(this.boundingBox.max,Ft.max),this.boundingBox.expandByPoint(yt)):(this.boundingBox.expandByPoint(Ft.min),this.boundingBox.expandByPoint(Ft.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new as);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(Ft.setFromBufferAttribute(e),t)for(let a=0,r=t.length;a<r;a++){const o=t[a];Gi.setFromBufferAttribute(o),this.morphTargetsRelative?(yt.addVectors(Ft.min,Gi.min),Ft.expandByPoint(yt),yt.addVectors(Ft.max,Gi.max),Ft.expandByPoint(yt)):(Ft.expandByPoint(Gi.min),Ft.expandByPoint(Gi.max))}Ft.getCenter(n);let i=0;for(let a=0,r=e.count;a<r;a++)yt.fromBufferAttribute(e,a),i=Math.max(i,n.distanceToSquared(yt));if(t)for(let a=0,r=t.length;a<r;a++){const o=t[a],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)yt.fromBufferAttribute(o,c),l&&(hi.fromBufferAttribute(e,c),yt.add(hi)),i=Math.max(i,n.distanceToSquared(yt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mt(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<n.count;R++)o[R]=new P,l[R]=new P;const c=new P,d=new P,h=new P,u=new Re,p=new Re,g=new Re,v=new P,m=new P;function f(R,S,M){c.fromBufferAttribute(n,R),d.fromBufferAttribute(n,S),h.fromBufferAttribute(n,M),u.fromBufferAttribute(a,R),p.fromBufferAttribute(a,S),g.fromBufferAttribute(a,M),d.sub(c),h.sub(c),p.sub(u),g.sub(u);const A=1/(p.x*g.y-g.x*p.y);isFinite(A)&&(v.copy(d).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(A),m.copy(h).multiplyScalar(p.x).addScaledVector(d,-g.x).multiplyScalar(A),o[R].add(v),o[S].add(v),o[M].add(v),l[R].add(m),l[S].add(m),l[M].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let R=0,S=x.length;R<S;++R){const M=x[R],A=M.start,B=M.count;for(let F=A,O=A+B;F<O;F+=3)f(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const E=new P,_=new P,L=new P,C=new P;function w(R){L.fromBufferAttribute(i,R),C.copy(L);const S=o[R];E.copy(S),E.sub(L.multiplyScalar(L.dot(S))).normalize(),_.crossVectors(C,S);const A=_.dot(l[R])<0?-1:1;r.setXYZW(R,E.x,E.y,E.z,A)}for(let R=0,S=x.length;R<S;++R){const M=x[R],A=M.start,B=M.count;for(let F=A,O=A+B;F<O;F+=3)w(e.getX(F+0)),w(e.getX(F+1)),w(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Mt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);const i=new P,a=new P,r=new P,o=new P,l=new P,c=new P,d=new P,h=new P;if(e)for(let u=0,p=e.count;u<p;u+=3){const g=e.getX(u+0),v=e.getX(u+1),m=e.getX(u+2);i.fromBufferAttribute(t,g),a.fromBufferAttribute(t,v),r.fromBufferAttribute(t,m),d.subVectors(r,a),h.subVectors(i,a),d.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(d),l.add(d),c.add(d),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=t.count;u<p;u+=3)i.fromBufferAttribute(t,u+0),a.fromBufferAttribute(t,u+1),r.fromBufferAttribute(t,u+2),d.subVectors(r,a),h.subVectors(i,a),d.cross(h),n.setXYZ(u+0,d.x,d.y,d.z),n.setXYZ(u+1,d.x,d.y,d.z),n.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)yt.fromBufferAttribute(e,t),yt.normalize(),e.setXYZ(t,yt.x,yt.y,yt.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,h=o.normalized,u=new c.constructor(l.length*d);let p=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*d;for(let f=0;f<d;f++)u[g++]=c[p++]}return new Mt(u,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new _t,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let d=0,h=c.length;d<h;d++){const u=c[d],p=e(u,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,u=c.length;h<u;h++){const p=c[h];d.push(p.toJSON(e.data))}d.length>0&&(i[l]=d,a=!0)}a&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const d=i[c];this.setAttribute(c,d.clone(t))}const a=e.morphAttributes;for(const c in a){const d=[],h=a[c];for(let u=0,p=h.length;u<p;u++)d.push(h[u].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let c=0,d=r.length;c<d;c++){const h=r[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _o=new ot,Bn=new kr,Ms=new as,bo=new P,_s=new P,bs=new P,Ss=new P,wa=new P,xs=new P,So=new P,Es=new P;class Xe extends mt{constructor(e=new _t,t=new Kn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=i.length;a<r;a++){const o=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,a=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(a&&o){xs.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const d=o[l],h=a[l];d!==0&&(wa.fromBufferAttribute(h,e),r?xs.addScaledVector(wa,d):xs.addScaledVector(wa.sub(t),d))}t.add(xs)}return t}raycast(e,t){const n=this.geometry,i=this.material,a=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ms.copy(n.boundingSphere),Ms.applyMatrix4(a),Bn.copy(e.ray).recast(e.near),!(Ms.containsPoint(Bn.origin)===!1&&(Bn.intersectSphere(Ms,bo)===null||Bn.origin.distanceToSquared(bo)>(e.far-e.near)**2))&&(_o.copy(a).invert(),Bn.copy(e.ray).applyMatrix4(_o),!(n.boundingBox!==null&&Bn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Bn)))}_computeIntersections(e,t,n){let i;const a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,d=a.attributes.uv1,h=a.attributes.normal,u=a.groups,p=a.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,v=u.length;g<v;g++){const m=u[g],f=r[m.materialIndex],x=Math.max(m.start,p.start),E=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let _=x,L=E;_<L;_+=3){const C=o.getX(_),w=o.getX(_+1),R=o.getX(_+2);i=Ts(this,f,e,n,c,d,h,C,w,R),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){const x=o.getX(m),E=o.getX(m+1),_=o.getX(m+2);i=Ts(this,r,e,n,c,d,h,x,E,_),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,v=u.length;g<v;g++){const m=u[g],f=r[m.materialIndex],x=Math.max(m.start,p.start),E=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let _=x,L=E;_<L;_+=3){const C=_,w=_+1,R=_+2;i=Ts(this,f,e,n,c,d,h,C,w,R),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){const x=m,E=m+1,_=m+2;i=Ts(this,r,e,n,c,d,h,x,E,_),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Ed(s,e,t,n,i,a,r,o){let l;if(e.side===wt?l=n.intersectTriangle(r,a,i,!0,o):l=n.intersectTriangle(i,a,r,e.side===In,o),l===null)return null;Es.copy(o),Es.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Es);return c<t.near||c>t.far?null:{distance:c,point:Es.clone(),object:s}}function Ts(s,e,t,n,i,a,r,o,l,c){s.getVertexPosition(o,_s),s.getVertexPosition(l,bs),s.getVertexPosition(c,Ss);const d=Ed(s,e,t,n,_s,bs,Ss,So);if(d){const h=new P;qt.getBarycoord(So,_s,bs,Ss,h),i&&(d.uv=qt.getInterpolatedAttribute(i,o,l,c,h,new Re)),a&&(d.uv1=qt.getInterpolatedAttribute(a,o,l,c,h,new Re)),r&&(d.normal=qt.getInterpolatedAttribute(r,o,l,c,h,new P),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new P,materialIndex:0};qt.getNormal(_s,bs,Ss,u.normal),d.face=u,d.barycoord=h}return d}class an extends _t{constructor(e=1,t=1,n=1,i=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:a,depthSegments:r};const o=this;i=Math.floor(i),a=Math.floor(a),r=Math.floor(r);const l=[],c=[],d=[],h=[];let u=0,p=0;g("z","y","x",-1,-1,n,t,e,r,a,0),g("z","y","x",1,-1,n,t,-e,r,a,1),g("x","z","y",1,1,e,n,t,i,r,2),g("x","z","y",1,-1,e,n,-t,i,r,3),g("x","y","z",1,-1,e,t,n,i,a,4),g("x","y","z",-1,-1,e,t,-n,i,a,5),this.setIndex(l),this.setAttribute("position",new ht(c,3)),this.setAttribute("normal",new ht(d,3)),this.setAttribute("uv",new ht(h,2));function g(v,m,f,x,E,_,L,C,w,R,S){const M=_/w,A=L/R,B=_/2,F=L/2,O=C/2,W=w+1,$=R+1;let Q=0,q=0;const oe=new P;for(let le=0;le<$;le++){const X=le*A-F;for(let ne=0;ne<W;ne++){const ce=ne*M-B;oe[v]=ce*x,oe[m]=X*E,oe[f]=O,c.push(oe.x,oe.y,oe.z),oe[v]=0,oe[m]=0,oe[f]=C>0?1:-1,d.push(oe.x,oe.y,oe.z),h.push(ne/w),h.push(1-le/R),Q+=1}}for(let le=0;le<R;le++)for(let X=0;X<w;X++){const ne=u+X+W*le,ce=u+X+W*(le+1),H=u+(X+1)+W*(le+1),K=u+(X+1)+W*le;l.push(ne,ce,K),l.push(ce,H,K),q+=6}o.addGroup(p,q,S),p+=q,u+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new an(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Di(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function At(s){const e={};for(let t=0;t<s.length;t++){const n=Di(s[t]);for(const i in n)e[i]=n[i]}return e}function Td(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function kl(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}const ts={clone:Di,merge:At};var wd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pt extends Un{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wd,this.fragmentShader=Cd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Di(e.uniforms),this.uniformsGroups=Td(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?t.uniforms[i]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[i]={type:"m4",value:r.toArray()}:t.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Bl extends mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=gn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Pn=new P,xo=new Re,Eo=new Re;class Ot extends Bl{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=es*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ki*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return es*2*Math.atan(Math.tan(Ki*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Pn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Pn.x,Pn.y).multiplyScalar(-e/Pn.z),Pn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Pn.x,Pn.y).multiplyScalar(-e/Pn.z)}getViewSize(e,t){return this.getViewBounds(e,xo,Eo),t.subVectors(Eo,xo)}setViewOffset(e,t,n,i,a,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ki*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,a=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*i/l,t-=r.offsetY*n/c,i*=r.width/l,n*=r.height/c}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ui=-90,fi=1;class Ad extends mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ot(ui,fi,e,t);i.layers=this.layers,this.add(i);const a=new Ot(ui,fi,e,t);a.layers=this.layers,this.add(a);const r=new Ot(ui,fi,e,t);r.layers=this.layers,this.add(r);const o=new Ot(ui,fi,e,t);o.layers=this.layers,this.add(o);const l=new Ot(ui,fi,e,t);l.layers=this.layers,this.add(l);const c=new Ot(ui,fi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,a,r,o,l]=t;for(const c of t)this.remove(c);if(e===gn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===$s)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,r,o,l,c,d]=this.children,h=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,a),e.setRenderTarget(n,1,i),e.render(t,r),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,i),e.render(t,d),e.setRenderTarget(h,u,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Ol extends Lt{constructor(e,t,n,i,a,r,o,l,c,d){e=e!==void 0?e:[],t=t!==void 0?t:Ai,super(e,t,n,i,a,r,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Rd extends It{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Ol(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Pt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new an(5,5,5),a=new pt({name:"CubemapFromEquirect",uniforms:Di(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:wt,blending:vn});a.uniforms.tEquirect.value=t;const r=new Xe(i,a),o=t.minFilter;return t.minFilter===sn&&(t.minFilter=Pt),new Ad(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t,n,i){const a=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,i);e.setRenderTarget(a)}}const Ca=new P,Pd=new P,Ld=new ze;class Wn{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ca.subVectors(n,t).cross(Pd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ca),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/i;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Ld.getNormalMatrix(e),i=this.coplanarPoint(Ca).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const On=new as,ws=new P;class Br{constructor(e=new Wn,t=new Wn,n=new Wn,i=new Wn,a=new Wn,r=new Wn){this.planes=[e,t,n,i,a,r]}set(e,t,n,i,a,r){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(a),o[5].copy(r),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=gn){const n=this.planes,i=e.elements,a=i[0],r=i[1],o=i[2],l=i[3],c=i[4],d=i[5],h=i[6],u=i[7],p=i[8],g=i[9],v=i[10],m=i[11],f=i[12],x=i[13],E=i[14],_=i[15];if(n[0].setComponents(l-a,u-c,m-p,_-f).normalize(),n[1].setComponents(l+a,u+c,m+p,_+f).normalize(),n[2].setComponents(l+r,u+d,m+g,_+x).normalize(),n[3].setComponents(l-r,u-d,m-g,_-x).normalize(),n[4].setComponents(l-o,u-h,m-v,_-E).normalize(),t===gn)n[5].setComponents(l+o,u+h,m+v,_+E).normalize();else if(t===$s)n[5].setComponents(o,h,v,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),On.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),On.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(On)}intersectsSprite(e){return On.center.set(0,0,0),On.radius=.7071067811865476,On.applyMatrix4(e.matrixWorld),this.intersectsSphere(On)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ws.x=i.normal.x>0?e.max.x:e.min.x,ws.y=i.normal.y>0?e.max.y:e.min.y,ws.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ws)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function zl(){let s=null,e=!1,t=null,n=null;function i(a,r){t(a,r),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){s=a}}}function Dd(s){const e=new WeakMap;function t(o,l){const c=o.array,d=o.usage,h=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,d),o.onUploadCallback();let p;if(c instanceof Float32Array)p=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=s.SHORT;else if(c instanceof Uint32Array)p=s.UNSIGNED_INT;else if(c instanceof Int32Array)p=s.INT;else if(c instanceof Int8Array)p=s.BYTE;else if(c instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const d=l.array,h=l.updateRanges;if(s.bindBuffer(c,o),h.length===0)s.bufferSubData(c,0,d);else{h.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<h.length;p++){const g=h[u],v=h[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++u,h[u]=v)}h.length=u+1;for(let p=0,g=h.length;p<g;p++){const v=h[p];s.bufferSubData(c,v.start*d.BYTES_PER_ELEMENT,d,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:a,update:r}}class bn extends _t{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const a=e/2,r=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,d=l+1,h=e/o,u=t/l,p=[],g=[],v=[],m=[];for(let f=0;f<d;f++){const x=f*u-r;for(let E=0;E<c;E++){const _=E*h-a;g.push(_,-x,0),v.push(0,0,1),m.push(E/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let x=0;x<o;x++){const E=x+c*f,_=x+c*(f+1),L=x+1+c*(f+1),C=x+1+c*f;p.push(E,_,C),p.push(_,L,C)}this.setIndex(p),this.setAttribute("position",new ht(g,3)),this.setAttribute("normal",new ht(v,3)),this.setAttribute("uv",new ht(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bn(e.width,e.height,e.widthSegments,e.heightSegments)}}var Id=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ud=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Nd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Bd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Od=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,zd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Vd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Hd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$d=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,qd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Xd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Yd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,jd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Kd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Jd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,eh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,th=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,nh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ih=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,sh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ah=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,oh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ch="gl_FragColor = linearToOutputTexel( gl_FragColor );",dh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,uh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,fh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ph=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,gh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Mh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_h=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,bh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Sh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Eh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Th=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,wh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ch=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ah=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Rh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ph=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Lh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Dh=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ih=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Uh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Nh=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fh=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kh=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bh=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Oh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Vh=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$h=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qh=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yh=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,jh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Zh=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Qh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,tu=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,nu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,iu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,su=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,au=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ru=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ou=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,lu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,du=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,uu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pu=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,mu=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,gu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,vu=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,yu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Mu=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,_u=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bu=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Su=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Eu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Tu=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,wu=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Cu=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Au=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ru=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Pu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Lu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Du=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Iu=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Uu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nu=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ku=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bu=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ou=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,zu=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Gu=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Vu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wu=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$u=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qu=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Xu=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yu=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ju=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ku=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Zu=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qu=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ju=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ef=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,sf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,af=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,of=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,lf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,df=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,hf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,uf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ve={alphahash_fragment:Id,alphahash_pars_fragment:Ud,alphamap_fragment:Nd,alphamap_pars_fragment:Fd,alphatest_fragment:kd,alphatest_pars_fragment:Bd,aomap_fragment:Od,aomap_pars_fragment:zd,batching_pars_vertex:Gd,batching_vertex:Vd,begin_vertex:Hd,beginnormal_vertex:Wd,bsdfs:$d,iridescence_fragment:qd,bumpmap_pars_fragment:Xd,clipping_planes_fragment:Yd,clipping_planes_pars_fragment:jd,clipping_planes_pars_vertex:Kd,clipping_planes_vertex:Zd,color_fragment:Qd,color_pars_fragment:Jd,color_pars_vertex:eh,color_vertex:th,common:nh,cube_uv_reflection_fragment:ih,defaultnormal_vertex:sh,displacementmap_pars_vertex:ah,displacementmap_vertex:rh,emissivemap_fragment:oh,emissivemap_pars_fragment:lh,colorspace_fragment:ch,colorspace_pars_fragment:dh,envmap_fragment:hh,envmap_common_pars_fragment:uh,envmap_pars_fragment:fh,envmap_pars_vertex:ph,envmap_physical_pars_fragment:Th,envmap_vertex:mh,fog_vertex:gh,fog_pars_vertex:vh,fog_fragment:yh,fog_pars_fragment:Mh,gradientmap_pars_fragment:_h,lightmap_pars_fragment:bh,lights_lambert_fragment:Sh,lights_lambert_pars_fragment:xh,lights_pars_begin:Eh,lights_toon_fragment:wh,lights_toon_pars_fragment:Ch,lights_phong_fragment:Ah,lights_phong_pars_fragment:Rh,lights_physical_fragment:Ph,lights_physical_pars_fragment:Lh,lights_fragment_begin:Dh,lights_fragment_maps:Ih,lights_fragment_end:Uh,logdepthbuf_fragment:Nh,logdepthbuf_pars_fragment:Fh,logdepthbuf_pars_vertex:kh,logdepthbuf_vertex:Bh,map_fragment:Oh,map_pars_fragment:zh,map_particle_fragment:Gh,map_particle_pars_fragment:Vh,metalnessmap_fragment:Hh,metalnessmap_pars_fragment:Wh,morphinstance_vertex:$h,morphcolor_vertex:qh,morphnormal_vertex:Xh,morphtarget_pars_vertex:Yh,morphtarget_vertex:jh,normal_fragment_begin:Kh,normal_fragment_maps:Zh,normal_pars_fragment:Qh,normal_pars_vertex:Jh,normal_vertex:eu,normalmap_pars_fragment:tu,clearcoat_normal_fragment_begin:nu,clearcoat_normal_fragment_maps:iu,clearcoat_pars_fragment:su,iridescence_pars_fragment:au,opaque_fragment:ru,packing:ou,premultiplied_alpha_fragment:lu,project_vertex:cu,dithering_fragment:du,dithering_pars_fragment:hu,roughnessmap_fragment:uu,roughnessmap_pars_fragment:fu,shadowmap_pars_fragment:pu,shadowmap_pars_vertex:mu,shadowmap_vertex:gu,shadowmask_pars_fragment:vu,skinbase_vertex:yu,skinning_pars_vertex:Mu,skinning_vertex:_u,skinnormal_vertex:bu,specularmap_fragment:Su,specularmap_pars_fragment:xu,tonemapping_fragment:Eu,tonemapping_pars_fragment:Tu,transmission_fragment:wu,transmission_pars_fragment:Cu,uv_pars_fragment:Au,uv_pars_vertex:Ru,uv_vertex:Pu,worldpos_vertex:Lu,background_vert:Du,background_frag:Iu,backgroundCube_vert:Uu,backgroundCube_frag:Nu,cube_vert:Fu,cube_frag:ku,depth_vert:Bu,depth_frag:Ou,distanceRGBA_vert:zu,distanceRGBA_frag:Gu,equirect_vert:Vu,equirect_frag:Hu,linedashed_vert:Wu,linedashed_frag:$u,meshbasic_vert:qu,meshbasic_frag:Xu,meshlambert_vert:Yu,meshlambert_frag:ju,meshmatcap_vert:Ku,meshmatcap_frag:Zu,meshnormal_vert:Qu,meshnormal_frag:Ju,meshphong_vert:ef,meshphong_frag:tf,meshphysical_vert:nf,meshphysical_frag:sf,meshtoon_vert:af,meshtoon_frag:rf,points_vert:of,points_frag:lf,shadow_vert:cf,shadow_frag:df,sprite_vert:hf,sprite_frag:uf},de={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new Re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new Re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},nn={basic:{uniforms:At([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:At([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new ke(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:At([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:At([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:At([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new ke(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:At([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:At([de.points,de.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:At([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:At([de.common,de.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:At([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:At([de.sprite,de.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:At([de.common,de.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:At([de.lights,de.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};nn.physical={uniforms:At([nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new Re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new Re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new Re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const Cs={r:0,b:0,g:0},zn=new Gt,ff=new ot;function pf(s,e,t,n,i,a,r){const o=new ke(0);let l=a===!0?0:1,c,d,h=null,u=0,p=null;function g(x){let E=x.isScene===!0?x.background:null;return E&&E.isTexture&&(E=(x.backgroundBlurriness>0?t:e).get(E)),E}function v(x){let E=!1;const _=g(x);_===null?f(o,l):_&&_.isColor&&(f(_,1),E=!0);const L=s.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,r):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(s.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(x,E){const _=g(E);_&&(_.isCubeTexture||_.mapping===Qs)?(d===void 0&&(d=new Xe(new an(1,1,1),new pt({name:"BackgroundCubeMaterial",uniforms:Di(nn.backgroundCube.uniforms),vertexShader:nn.backgroundCube.vertexShader,fragmentShader:nn.backgroundCube.fragmentShader,side:wt,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(L,C,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),zn.copy(E.backgroundRotation),zn.x*=-1,zn.y*=-1,zn.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(zn.y*=-1,zn.z*=-1),d.material.uniforms.envMap.value=_,d.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(ff.makeRotationFromEuler(zn)),d.material.toneMapped=Ke.getTransfer(_.colorSpace)!==it,(h!==_||u!==_.version||p!==s.toneMapping)&&(d.material.needsUpdate=!0,h=_,u=_.version,p=s.toneMapping),d.layers.enableAll(),x.unshift(d,d.geometry,d.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Xe(new bn(2,2),new pt({name:"BackgroundMaterial",uniforms:Di(nn.background.uniforms),vertexShader:nn.background.vertexShader,fragmentShader:nn.background.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=Ke.getTransfer(_.colorSpace)!==it,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||u!==_.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,h=_,u=_.version,p=s.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function f(x,E){x.getRGB(Cs,kl(s)),n.buffers.color.setClear(Cs.r,Cs.g,Cs.b,E,r)}return{getClearColor:function(){return o},setClearColor:function(x,E=1){o.set(x),l=E,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,f(o,l)},render:v,addToRenderList:m}}function mf(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null);let a=i,r=!1;function o(M,A,B,F,O){let W=!1;const $=h(F,B,A);a!==$&&(a=$,c(a.object)),W=p(M,F,B,O),W&&g(M,F,B,O),O!==null&&e.update(O,s.ELEMENT_ARRAY_BUFFER),(W||r)&&(r=!1,_(M,A,B,F),O!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return s.createVertexArray()}function c(M){return s.bindVertexArray(M)}function d(M){return s.deleteVertexArray(M)}function h(M,A,B){const F=B.wireframe===!0;let O=n[M.id];O===void 0&&(O={},n[M.id]=O);let W=O[A.id];W===void 0&&(W={},O[A.id]=W);let $=W[F];return $===void 0&&($=u(l()),W[F]=$),$}function u(M){const A=[],B=[],F=[];for(let O=0;O<t;O++)A[O]=0,B[O]=0,F[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:B,attributeDivisors:F,object:M,attributes:{},index:null}}function p(M,A,B,F){const O=a.attributes,W=A.attributes;let $=0;const Q=B.getAttributes();for(const q in Q)if(Q[q].location>=0){const le=O[q];let X=W[q];if(X===void 0&&(q==="instanceMatrix"&&M.instanceMatrix&&(X=M.instanceMatrix),q==="instanceColor"&&M.instanceColor&&(X=M.instanceColor)),le===void 0||le.attribute!==X||X&&le.data!==X.data)return!0;$++}return a.attributesNum!==$||a.index!==F}function g(M,A,B,F){const O={},W=A.attributes;let $=0;const Q=B.getAttributes();for(const q in Q)if(Q[q].location>=0){let le=W[q];le===void 0&&(q==="instanceMatrix"&&M.instanceMatrix&&(le=M.instanceMatrix),q==="instanceColor"&&M.instanceColor&&(le=M.instanceColor));const X={};X.attribute=le,le&&le.data&&(X.data=le.data),O[q]=X,$++}a.attributes=O,a.attributesNum=$,a.index=F}function v(){const M=a.newAttributes;for(let A=0,B=M.length;A<B;A++)M[A]=0}function m(M){f(M,0)}function f(M,A){const B=a.newAttributes,F=a.enabledAttributes,O=a.attributeDivisors;B[M]=1,F[M]===0&&(s.enableVertexAttribArray(M),F[M]=1),O[M]!==A&&(s.vertexAttribDivisor(M,A),O[M]=A)}function x(){const M=a.newAttributes,A=a.enabledAttributes;for(let B=0,F=A.length;B<F;B++)A[B]!==M[B]&&(s.disableVertexAttribArray(B),A[B]=0)}function E(M,A,B,F,O,W,$){$===!0?s.vertexAttribIPointer(M,A,B,O,W):s.vertexAttribPointer(M,A,B,F,O,W)}function _(M,A,B,F){v();const O=F.attributes,W=B.getAttributes(),$=A.defaultAttributeValues;for(const Q in W){const q=W[Q];if(q.location>=0){let oe=O[Q];if(oe===void 0&&(Q==="instanceMatrix"&&M.instanceMatrix&&(oe=M.instanceMatrix),Q==="instanceColor"&&M.instanceColor&&(oe=M.instanceColor)),oe!==void 0){const le=oe.normalized,X=oe.itemSize,ne=e.get(oe);if(ne===void 0)continue;const ce=ne.buffer,H=ne.type,K=ne.bytesPerElement,re=H===s.INT||H===s.UNSIGNED_INT||oe.gpuType===Pr;if(oe.isInterleavedBufferAttribute){const V=oe.data,ie=V.stride,ve=oe.offset;if(V.isInstancedInterleavedBuffer){for(let be=0;be<q.locationSize;be++)f(q.location+be,V.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let be=0;be<q.locationSize;be++)m(q.location+be);s.bindBuffer(s.ARRAY_BUFFER,ce);for(let be=0;be<q.locationSize;be++)E(q.location+be,X/q.locationSize,H,le,ie*K,(ve+X/q.locationSize*be)*K,re)}else{if(oe.isInstancedBufferAttribute){for(let V=0;V<q.locationSize;V++)f(q.location+V,oe.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let V=0;V<q.locationSize;V++)m(q.location+V);s.bindBuffer(s.ARRAY_BUFFER,ce);for(let V=0;V<q.locationSize;V++)E(q.location+V,X/q.locationSize,H,le,X*K,X/q.locationSize*V*K,re)}}else if($!==void 0){const le=$[Q];if(le!==void 0)switch(le.length){case 2:s.vertexAttrib2fv(q.location,le);break;case 3:s.vertexAttrib3fv(q.location,le);break;case 4:s.vertexAttrib4fv(q.location,le);break;default:s.vertexAttrib1fv(q.location,le)}}}}x()}function L(){R();for(const M in n){const A=n[M];for(const B in A){const F=A[B];for(const O in F)d(F[O].object),delete F[O];delete A[B]}delete n[M]}}function C(M){if(n[M.id]===void 0)return;const A=n[M.id];for(const B in A){const F=A[B];for(const O in F)d(F[O].object),delete F[O];delete A[B]}delete n[M.id]}function w(M){for(const A in n){const B=n[A];if(B[M.id]===void 0)continue;const F=B[M.id];for(const O in F)d(F[O].object),delete F[O];delete B[M.id]}}function R(){S(),r=!0,a!==i&&(a=i,c(a.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:R,resetDefaultState:S,dispose:L,releaseStatesOfGeometry:C,releaseStatesOfProgram:w,initAttributes:v,enableAttribute:m,disableUnusedAttributes:x}}function gf(s,e,t){let n;function i(c){n=c}function a(c,d){s.drawArrays(n,c,d),t.update(d,n,1)}function r(c,d,h){h!==0&&(s.drawArraysInstanced(n,c,d,h),t.update(d,n,h))}function o(c,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,d,0,h);let p=0;for(let g=0;g<h;g++)p+=d[g];t.update(p,n,1)}function l(c,d,h,u){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)r(c[g],d[g],u[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,d,0,u,0,h);let g=0;for(let v=0;v<h;v++)g+=d[v]*u[v];t.update(g,n,1)}}this.setMode=i,this.render=a,this.renderInstances=r,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function vf(s,e,t,n){let i;function a(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(w){return!(w!==Xt&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const R=w===yn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==rn&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==mn&&!R)}function l(w){if(w==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const h=t.logarithmicDepthBuffer===!0,u=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),f=s.getParameter(s.MAX_VERTEX_ATTRIBS),x=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),E=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,C=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:x,maxVaryings:E,maxFragmentUniforms:_,vertexTextures:L,maxSamples:C}}function yf(s){const e=this;let t=null,n=0,i=!1,a=!1;const r=new Wn,o=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){const p=h.length!==0||u||n!==0||i;return i=u,n=h.length,p},this.beginShadows=function(){a=!0,d(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(h,u){t=d(h,u,0)},this.setState=function(h,u,p){const g=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,f=s.get(h);if(!i||g===null||g.length===0||a&&!m)a?d(null):c();else{const x=a?0:n,E=x*4;let _=f.clippingState||null;l.value=_,_=d(g,u,E,p);for(let L=0;L!==E;++L)_[L]=t[L];f.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(h,u,p,g){const v=h!==null?h.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const f=p+v*4,x=u.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<f)&&(m=new Float32Array(f));for(let E=0,_=p;E!==v;++E,_+=4)r.copy(h[E]).applyMatrix4(x,o),r.normal.toArray(m,_),m[_+3]=r.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function Mf(s){let e=new WeakMap;function t(r,o){return o===Ka?r.mapping=Ai:o===Za&&(r.mapping=Ri),r}function n(r){if(r&&r.isTexture){const o=r.mapping;if(o===Ka||o===Za)if(e.has(r)){const l=e.get(r).texture;return t(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new Rd(l.height);return c.fromEquirectangularTexture(s,r),e.set(r,c),r.addEventListener("dispose",i),t(c.texture,r.mapping)}else return null}}return r}function i(r){const o=r.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}class ea extends Bl{constructor(e=-1,t=1,n=1,i=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let a=n-e,r=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const bi=4,To=[.125,.215,.35,.446,.526,.582],Xn=20,Aa=new ea,wo=new ke;let Ra=null,Pa=0,La=0,Da=!1;const $n=(1+Math.sqrt(5))/2,pi=1/$n,Co=[new P(-$n,pi,0),new P($n,pi,0),new P(-pi,0,$n),new P(pi,0,$n),new P(0,$n,-pi),new P(0,$n,pi),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class Ao{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Ra=this._renderer.getRenderTarget(),Pa=this._renderer.getActiveCubeFace(),La=this._renderer.getActiveMipmapLevel(),Da=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,i,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Po(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ra,Pa,La),this._renderer.xr.enabled=Da,e.scissorTest=!1,As(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ai||e.mapping===Ri?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ra=this._renderer.getRenderTarget(),Pa=this._renderer.getActiveCubeFace(),La=this._renderer.getActiveMipmapLevel(),Da=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Pt,minFilter:Pt,generateMipmaps:!1,type:yn,format:Xt,colorSpace:Ui,depthBuffer:!1},i=Ro(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ro(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_f(a)),this._blurMaterial=bf(a,e,t)}return i}_compileMaterial(e){const t=new Xe(this._lodPlanes[0],e);this._renderer.compile(t,Aa)}_sceneToCubeUV(e,t,n,i){const o=new Ot(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,u=d.toneMapping;d.getClearColor(wo),d.toneMapping=Dn,d.autoClear=!1;const p=new Kn({name:"PMREM.Background",side:wt,depthWrite:!1,depthTest:!1}),g=new Xe(new an,p);let v=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,v=!0):(p.color.copy(wo),v=!0);for(let f=0;f<6;f++){const x=f%3;x===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):x===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const E=this._cubeSize;As(i,x*E,f>2?E:0,E,E),d.setRenderTarget(i),v&&d.render(g,o),d.render(e,o)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=u,d.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ai||e.mapping===Ri;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Po());const a=i?this._cubemapMaterial:this._equirectMaterial,r=new Xe(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=e;const l=this._cubeSize;As(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(r,Aa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let a=1;a<i;a++){const r=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=Co[(i-a-1)%Co.length];this._blur(e,a-1,a,r,o)}t.autoClear=n}_blur(e,t,n,i,a){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,n,i,"latitudinal",a),this._halfBlur(r,e,n,n,i,"longitudinal",a)}_halfBlur(e,t,n,i,a,r,o){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new Xe(this._lodPlanes[i],c),u=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(a)?Math.PI/(2*p):2*Math.PI/(2*Xn-1),v=a/g,m=isFinite(a)?1+Math.floor(d*v):Xn;m>Xn&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Xn}`);const f=[];let x=0;for(let w=0;w<Xn;++w){const R=w/v,S=Math.exp(-R*R/2);f.push(S),w===0?x+=S:w<m&&(x+=2*S)}for(let w=0;w<f.length;w++)f[w]=f[w]/x;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=f,u.latitudinal.value=r==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:E}=this;u.dTheta.value=g,u.mipInt.value=E-n;const _=this._sizeLods[i],L=3*_*(i>E-bi?i-E+bi:0),C=4*(this._cubeSize-_);As(t,L,C,3*_,2*_),l.setRenderTarget(t),l.render(h,Aa)}}function _f(s){const e=[],t=[],n=[];let i=s;const a=s-bi+1+To.length;for(let r=0;r<a;r++){const o=Math.pow(2,i);t.push(o);let l=1/o;r>s-bi?l=To[r-s+bi-1]:r===0&&(l=0),n.push(l);const c=1/(o-2),d=-c,h=1+c,u=[d,d,h,d,h,h,d,d,h,h,d,h],p=6,g=6,v=3,m=2,f=1,x=new Float32Array(v*g*p),E=new Float32Array(m*g*p),_=new Float32Array(f*g*p);for(let C=0;C<p;C++){const w=C%3*2/3-1,R=C>2?0:-1,S=[w,R,0,w+2/3,R,0,w+2/3,R+1,0,w,R,0,w+2/3,R+1,0,w,R+1,0];x.set(S,v*g*C),E.set(u,m*g*C);const M=[C,C,C,C,C,C];_.set(M,f*g*C)}const L=new _t;L.setAttribute("position",new Mt(x,v)),L.setAttribute("uv",new Mt(E,m)),L.setAttribute("faceIndex",new Mt(_,f)),e.push(L),i>bi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ro(s,e,t){const n=new It(s,e,t);return n.texture.mapping=Qs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function As(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function bf(s,e,t){const n=new Float32Array(Xn),i=new P(0,1,0);return new pt({name:"SphericalGaussianBlur",defines:{n:Xn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Or(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:vn,depthTest:!1,depthWrite:!1})}function Po(){return new pt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Or(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:vn,depthTest:!1,depthWrite:!1})}function Lo(){return new pt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Or(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vn,depthTest:!1,depthWrite:!1})}function Or(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Sf(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ka||l===Za,d=l===Ai||l===Ri;if(c||d){let h=e.get(o);const u=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return t===null&&(t=new Ao(s)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const p=o.image;return c&&p&&p.height>0||d&&p&&i(p)?(t===null&&(t=new Ao(s)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",a),h.texture):null}}}return o}function i(o){let l=0;const c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function a(o){const l=o.target;l.removeEventListener("dispose",a);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:r}}function xf(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Xi("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Ef(s,e,t,n){const i={},a=new WeakMap;function r(h){const u=h.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);for(const g in u.morphAttributes){const v=u.morphAttributes[g];for(let m=0,f=v.length;m<f;m++)e.remove(v[m])}u.removeEventListener("dispose",r),delete i[u.id];const p=a.get(u);p&&(e.remove(p),a.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(h,u){return i[u.id]===!0||(u.addEventListener("dispose",r),i[u.id]=!0,t.memory.geometries++),u}function l(h){const u=h.attributes;for(const g in u)e.update(u[g],s.ARRAY_BUFFER);const p=h.morphAttributes;for(const g in p){const v=p[g];for(let m=0,f=v.length;m<f;m++)e.update(v[m],s.ARRAY_BUFFER)}}function c(h){const u=[],p=h.index,g=h.attributes.position;let v=0;if(p!==null){const x=p.array;v=p.version;for(let E=0,_=x.length;E<_;E+=3){const L=x[E+0],C=x[E+1],w=x[E+2];u.push(L,C,C,w,w,L)}}else if(g!==void 0){const x=g.array;v=g.version;for(let E=0,_=x.length/3-1;E<_;E+=3){const L=E+0,C=E+1,w=E+2;u.push(L,C,C,w,w,L)}}else return;const m=new(Pl(u)?Fl:Nl)(u,1);m.version=v;const f=a.get(h);f&&e.remove(f),a.set(h,m)}function d(h){const u=a.get(h);if(u){const p=h.index;p!==null&&u.version<p.version&&c(h)}else c(h);return a.get(h)}return{get:o,update:l,getWireframeAttribute:d}}function Tf(s,e,t){let n;function i(u){n=u}let a,r;function o(u){a=u.type,r=u.bytesPerElement}function l(u,p){s.drawElements(n,p,a,u*r),t.update(p,n,1)}function c(u,p,g){g!==0&&(s.drawElementsInstanced(n,p,a,u*r,g),t.update(p,n,g))}function d(u,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,a,u,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,n,1)}function h(u,p,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<u.length;f++)c(u[f]/r,p[f],v[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,a,u,0,v,0,g);let f=0;for(let x=0;x<g;x++)f+=p[x]*v[x];t.update(f,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function wf(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,r,o){switch(t.calls++,r){case s.TRIANGLES:t.triangles+=o*(a/3);break;case s.LINES:t.lines+=o*(a/2);break;case s.LINE_STRIP:t.lines+=o*(a-1);break;case s.LINE_LOOP:t.lines+=o*a;break;case s.POINTS:t.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Cf(s,e,t){const n=new WeakMap,i=new st;function a(r,o,l){const c=r.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=d!==void 0?d.length:0;let u=n.get(o);if(u===void 0||u.count!==h){let M=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",M)};var p=M;u!==void 0&&u.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let _=0;g===!0&&(_=1),v===!0&&(_=2),m===!0&&(_=3);let L=o.attributes.position.count*_,C=1;L>e.maxTextureSize&&(C=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const w=new Float32Array(L*C*4*h),R=new Dl(w,L,C,h);R.type=mn,R.needsUpdate=!0;const S=_*4;for(let A=0;A<h;A++){const B=f[A],F=x[A],O=E[A],W=L*C*4*A;for(let $=0;$<B.count;$++){const Q=$*S;g===!0&&(i.fromBufferAttribute(B,$),w[W+Q+0]=i.x,w[W+Q+1]=i.y,w[W+Q+2]=i.z,w[W+Q+3]=0),v===!0&&(i.fromBufferAttribute(F,$),w[W+Q+4]=i.x,w[W+Q+5]=i.y,w[W+Q+6]=i.z,w[W+Q+7]=0),m===!0&&(i.fromBufferAttribute(O,$),w[W+Q+8]=i.x,w[W+Q+9]=i.y,w[W+Q+10]=i.z,w[W+Q+11]=O.itemSize===4?i.w:1)}}u={count:h,texture:R,size:new Re(L,C)},n.set(o,u),o.addEventListener("dispose",M)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",r.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",v),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:a}}function Af(s,e,t,n){let i=new WeakMap;function a(l){const c=n.render.frame,d=l.geometry,h=e.get(l,d);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;i.get(u)!==c&&(u.update(),i.set(u,c))}return h}function r(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:r}}class Gl extends Lt{constructor(e,t,n,i,a,r,o,l,c,d=xi){if(d!==xi&&d!==Li)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===xi&&(n=Qn),n===void 0&&d===Li&&(n=Pi),super(null,i,a,r,o,l,d,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:en,this.minFilter=l!==void 0?l:en,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Vl=new Lt,Do=new Gl(1,1),Hl=new Dl,Wl=new pd,$l=new Ol,Io=[],Uo=[],No=new Float32Array(16),Fo=new Float32Array(9),ko=new Float32Array(4);function Ni(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let a=Io[i];if(a===void 0&&(a=new Float32Array(i),Io[i]=a),e!==0){n.toArray(a,0);for(let r=1,o=0;r!==e;++r)o+=t,s[r].toArray(a,o)}return a}function gt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function vt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function ta(s,e){let t=Uo[e];t===void 0&&(t=new Int32Array(e),Uo[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Rf(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Pf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;s.uniform2fv(this.addr,e),vt(t,e)}}function Lf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(gt(t,e))return;s.uniform3fv(this.addr,e),vt(t,e)}}function Df(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;s.uniform4fv(this.addr,e),vt(t,e)}}function If(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(gt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),vt(t,e)}else{if(gt(t,n))return;ko.set(n),s.uniformMatrix2fv(this.addr,!1,ko),vt(t,n)}}function Uf(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(gt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),vt(t,e)}else{if(gt(t,n))return;Fo.set(n),s.uniformMatrix3fv(this.addr,!1,Fo),vt(t,n)}}function Nf(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(gt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),vt(t,e)}else{if(gt(t,n))return;No.set(n),s.uniformMatrix4fv(this.addr,!1,No),vt(t,n)}}function Ff(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function kf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;s.uniform2iv(this.addr,e),vt(t,e)}}function Bf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;s.uniform3iv(this.addr,e),vt(t,e)}}function Of(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;s.uniform4iv(this.addr,e),vt(t,e)}}function zf(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Gf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;s.uniform2uiv(this.addr,e),vt(t,e)}}function Vf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;s.uniform3uiv(this.addr,e),vt(t,e)}}function Hf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;s.uniform4uiv(this.addr,e),vt(t,e)}}function Wf(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let a;this.type===s.SAMPLER_2D_SHADOW?(Do.compareFunction=Rl,a=Do):a=Vl,t.setTexture2D(e||a,i)}function $f(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Wl,i)}function qf(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||$l,i)}function Xf(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Hl,i)}function Yf(s){switch(s){case 5126:return Rf;case 35664:return Pf;case 35665:return Lf;case 35666:return Df;case 35674:return If;case 35675:return Uf;case 35676:return Nf;case 5124:case 35670:return Ff;case 35667:case 35671:return kf;case 35668:case 35672:return Bf;case 35669:case 35673:return Of;case 5125:return zf;case 36294:return Gf;case 36295:return Vf;case 36296:return Hf;case 35678:case 36198:case 36298:case 36306:case 35682:return Wf;case 35679:case 36299:case 36307:return $f;case 35680:case 36300:case 36308:case 36293:return qf;case 36289:case 36303:case 36311:case 36292:return Xf}}function jf(s,e){s.uniform1fv(this.addr,e)}function Kf(s,e){const t=Ni(e,this.size,2);s.uniform2fv(this.addr,t)}function Zf(s,e){const t=Ni(e,this.size,3);s.uniform3fv(this.addr,t)}function Qf(s,e){const t=Ni(e,this.size,4);s.uniform4fv(this.addr,t)}function Jf(s,e){const t=Ni(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function ep(s,e){const t=Ni(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function tp(s,e){const t=Ni(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function np(s,e){s.uniform1iv(this.addr,e)}function ip(s,e){s.uniform2iv(this.addr,e)}function sp(s,e){s.uniform3iv(this.addr,e)}function ap(s,e){s.uniform4iv(this.addr,e)}function rp(s,e){s.uniform1uiv(this.addr,e)}function op(s,e){s.uniform2uiv(this.addr,e)}function lp(s,e){s.uniform3uiv(this.addr,e)}function cp(s,e){s.uniform4uiv(this.addr,e)}function dp(s,e,t){const n=this.cache,i=e.length,a=ta(t,i);gt(n,a)||(s.uniform1iv(this.addr,a),vt(n,a));for(let r=0;r!==i;++r)t.setTexture2D(e[r]||Vl,a[r])}function hp(s,e,t){const n=this.cache,i=e.length,a=ta(t,i);gt(n,a)||(s.uniform1iv(this.addr,a),vt(n,a));for(let r=0;r!==i;++r)t.setTexture3D(e[r]||Wl,a[r])}function up(s,e,t){const n=this.cache,i=e.length,a=ta(t,i);gt(n,a)||(s.uniform1iv(this.addr,a),vt(n,a));for(let r=0;r!==i;++r)t.setTextureCube(e[r]||$l,a[r])}function fp(s,e,t){const n=this.cache,i=e.length,a=ta(t,i);gt(n,a)||(s.uniform1iv(this.addr,a),vt(n,a));for(let r=0;r!==i;++r)t.setTexture2DArray(e[r]||Hl,a[r])}function pp(s){switch(s){case 5126:return jf;case 35664:return Kf;case 35665:return Zf;case 35666:return Qf;case 35674:return Jf;case 35675:return ep;case 35676:return tp;case 5124:case 35670:return np;case 35667:case 35671:return ip;case 35668:case 35672:return sp;case 35669:case 35673:return ap;case 5125:return rp;case 36294:return op;case 36295:return lp;case 36296:return cp;case 35678:case 36198:case 36298:case 36306:case 35682:return dp;case 35679:case 36299:case 36307:return hp;case 35680:case 36300:case 36308:case 36293:return up;case 36289:case 36303:case 36311:case 36292:return fp}}class mp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Yf(t.type)}}class gp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=pp(t.type)}}class vp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let a=0,r=i.length;a!==r;++a){const o=i[a];o.setValue(e,t[o.id],n)}}}const Ia=/(\w+)(\])?(\[|\.)?/g;function Bo(s,e){s.seq.push(e),s.map[e.id]=e}function yp(s,e,t){const n=s.name,i=n.length;for(Ia.lastIndex=0;;){const a=Ia.exec(n),r=Ia.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===i){Bo(t,c===void 0?new mp(o,s,e):new gp(o,s,e));break}else{let h=t.map[o];h===void 0&&(h=new vp(o),Bo(t,h)),t=h}}}class Hs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const a=e.getActiveUniform(t,i),r=e.getUniformLocation(t,a.name);yp(a,r,this)}}setValue(e,t,n,i){const a=this.map[t];a!==void 0&&a.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let a=0,r=t.length;a!==r;++a){const o=t[a],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,a=e.length;i!==a;++i){const r=e[i];r.id in t&&n.push(r)}return n}}function Oo(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const Mp=37297;let _p=0;function bp(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let r=i;r<a;r++){const o=r+1;n.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return n.join(`
`)}const zo=new ze;function Sp(s){Ke._getMatrix(zo,Ke.workingColorSpace,s);const e=`mat3( ${zo.elements.map(t=>t.toFixed(4))} )`;switch(Ke.getTransfer(s)){case Js:return[e,"LinearTransferOETF"];case it:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Go(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const a=/ERROR: 0:(\d+)/.exec(i);if(a){const r=parseInt(a[1]);return t.toUpperCase()+`

`+i+`

`+bp(s.getShaderSource(e),r)}else return i}function xp(s,e){const t=Sp(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Ep(s,e){let t;switch(e){case wc:t="Linear";break;case Cc:t="Reinhard";break;case Ac:t="Cineon";break;case gl:t="ACESFilmic";break;case Pc:t="AgX";break;case Lc:t="Neutral";break;case Rc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Rs=new P;function Tp(){Ke.getLuminanceCoefficients(Rs);const s=Rs.x.toFixed(4),e=Rs.y.toFixed(4),t=Rs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function wp(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Yi).join(`
`)}function Cp(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ap(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const a=s.getActiveAttrib(e,i),r=a.name;let o=1;a.type===s.FLOAT_MAT2&&(o=2),a.type===s.FLOAT_MAT3&&(o=3),a.type===s.FLOAT_MAT4&&(o=4),t[r]={type:a.type,location:s.getAttribLocation(e,r),locationSize:o}}return t}function Yi(s){return s!==""}function Vo(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ho(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Rp=/^[ \t]*#include +<([\w\d./]+)>/gm;function wr(s){return s.replace(Rp,Lp)}const Pp=new Map;function Lp(s,e){let t=Ve[e];if(t===void 0){const n=Pp.get(e);if(n!==void 0)t=Ve[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return wr(t)}const Dp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wo(s){return s.replace(Dp,Ip)}function Ip(s,e,t,n){let i="";for(let a=parseInt(e);a<parseInt(t);a++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return i}function $o(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Up(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===fl?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===pl?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===pn&&(e="SHADOWMAP_TYPE_VSM"),e}function Np(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ai:case Ri:e="ENVMAP_TYPE_CUBE";break;case Qs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Fp(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ri:e="ENVMAP_MODE_REFRACTION";break}return e}function kp(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case ml:e="ENVMAP_BLENDING_MULTIPLY";break;case Ec:e="ENVMAP_BLENDING_MIX";break;case Tc:e="ENVMAP_BLENDING_ADD";break}return e}function Bp(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Op(s,e,t,n){const i=s.getContext(),a=t.defines;let r=t.vertexShader,o=t.fragmentShader;const l=Up(t),c=Np(t),d=Fp(t),h=kp(t),u=Bp(t),p=wp(t),g=Cp(a),v=i.createProgram();let m,f,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Yi).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Yi).join(`
`),f.length>0&&(f+=`
`)):(m=[$o(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yi).join(`
`),f=[$o(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Dn?"#define TONE_MAPPING":"",t.toneMapping!==Dn?Ve.tonemapping_pars_fragment:"",t.toneMapping!==Dn?Ep("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,xp("linearToOutputTexel",t.outputColorSpace),Tp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Yi).join(`
`)),r=wr(r),r=Vo(r,t),r=Ho(r,t),o=wr(o),o=Vo(o,t),o=Ho(o,t),r=Wo(r),o=Wo(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===no?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===no?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const E=x+m+r,_=x+f+o,L=Oo(i,i.VERTEX_SHADER,E),C=Oo(i,i.FRAGMENT_SHADER,_);i.attachShader(v,L),i.attachShader(v,C),t.index0AttributeName!==void 0?i.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function w(A){if(s.debug.checkShaderErrors){const B=i.getProgramInfoLog(v).trim(),F=i.getShaderInfoLog(L).trim(),O=i.getShaderInfoLog(C).trim();let W=!0,$=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(W=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,v,L,C);else{const Q=Go(i,L,"vertex"),q=Go(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+B+`
`+Q+`
`+q)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(F===""||O==="")&&($=!1);$&&(A.diagnostics={runnable:W,programLog:B,vertexShader:{log:F,prefix:m},fragmentShader:{log:O,prefix:f}})}i.deleteShader(L),i.deleteShader(C),R=new Hs(i,v),S=Ap(i,v)}let R;this.getUniforms=function(){return R===void 0&&w(this),R};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(v,Mp)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=_p++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=L,this.fragmentShader=C,this}let zp=0;class Gp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),a=this._getShaderStage(n),r=this._getShaderCacheForMaterial(e);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(a)===!1&&(r.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Vp(e),t.set(e,n)),n}}class Vp{constructor(e){this.id=zp++,this.code=e,this.usedTimes=0}}function Hp(s,e,t,n,i,a,r){const o=new Il,l=new Gp,c=new Set,d=[],h=i.logarithmicDepthBuffer,u=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,M,A,B,F){const O=B.fog,W=F.geometry,$=S.isMeshStandardMaterial?B.environment:null,Q=(S.isMeshStandardMaterial?t:e).get(S.envMap||$),q=Q&&Q.mapping===Qs?Q.image.height:null,oe=g[S.type];S.precision!==null&&(p=i.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const le=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,X=le!==void 0?le.length:0;let ne=0;W.morphAttributes.position!==void 0&&(ne=1),W.morphAttributes.normal!==void 0&&(ne=2),W.morphAttributes.color!==void 0&&(ne=3);let ce,H,K,re;if(oe){const tt=nn[oe];ce=tt.vertexShader,H=tt.fragmentShader}else ce=S.vertexShader,H=S.fragmentShader,l.update(S),K=l.getVertexShaderID(S),re=l.getFragmentShaderID(S);const V=s.getRenderTarget(),ie=s.state.buffers.depth.getReversed(),ve=F.isInstancedMesh===!0,be=F.isBatchedMesh===!0,Ie=!!S.map,De=!!S.matcap,We=!!Q,D=!!S.aoMap,lt=!!S.lightMap,Le=!!S.bumpMap,Pe=!!S.normalMap,ge=!!S.displacementMap,$e=!!S.emissiveMap,Se=!!S.metalnessMap,T=!!S.roughnessMap,y=S.anisotropy>0,k=S.clearcoat>0,Z=S.dispersion>0,ee=S.iridescence>0,j=S.sheen>0,Ce=S.transmission>0,ue=y&&!!S.anisotropyMap,ye=k&&!!S.clearcoatMap,je=k&&!!S.clearcoatNormalMap,se=k&&!!S.clearcoatRoughnessMap,Me=ee&&!!S.iridescenceMap,Ue=ee&&!!S.iridescenceThicknessMap,Ne=j&&!!S.sheenColorMap,_e=j&&!!S.sheenRoughnessMap,Ye=!!S.specularMap,Ge=!!S.specularColorMap,at=!!S.specularIntensityMap,I=Ce&&!!S.transmissionMap,he=Ce&&!!S.thicknessMap,Y=!!S.gradientMap,J=!!S.alphaMap,me=S.alphaTest>0,fe=!!S.alphaHash,Be=!!S.extensions;let ut=Dn;S.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(ut=s.toneMapping);const St={shaderID:oe,shaderType:S.type,shaderName:S.name,vertexShader:ce,fragmentShader:H,defines:S.defines,customVertexShaderID:K,customFragmentShaderID:re,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:be,batchingColor:be&&F._colorsTexture!==null,instancing:ve,instancingColor:ve&&F.instanceColor!==null,instancingMorph:ve&&F.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:V===null?s.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:Ui,alphaToCoverage:!!S.alphaToCoverage,map:Ie,matcap:De,envMap:We,envMapMode:We&&Q.mapping,envMapCubeUVHeight:q,aoMap:D,lightMap:lt,bumpMap:Le,normalMap:Pe,displacementMap:u&&ge,emissiveMap:$e,normalMapObjectSpace:Pe&&S.normalMapType===Nc,normalMapTangentSpace:Pe&&S.normalMapType===Al,metalnessMap:Se,roughnessMap:T,anisotropy:y,anisotropyMap:ue,clearcoat:k,clearcoatMap:ye,clearcoatNormalMap:je,clearcoatRoughnessMap:se,dispersion:Z,iridescence:ee,iridescenceMap:Me,iridescenceThicknessMap:Ue,sheen:j,sheenColorMap:Ne,sheenRoughnessMap:_e,specularMap:Ye,specularColorMap:Ge,specularIntensityMap:at,transmission:Ce,transmissionMap:I,thicknessMap:he,gradientMap:Y,opaque:S.transparent===!1&&S.blending===jn&&S.alphaToCoverage===!1,alphaMap:J,alphaTest:me,alphaHash:fe,combine:S.combine,mapUv:Ie&&v(S.map.channel),aoMapUv:D&&v(S.aoMap.channel),lightMapUv:lt&&v(S.lightMap.channel),bumpMapUv:Le&&v(S.bumpMap.channel),normalMapUv:Pe&&v(S.normalMap.channel),displacementMapUv:ge&&v(S.displacementMap.channel),emissiveMapUv:$e&&v(S.emissiveMap.channel),metalnessMapUv:Se&&v(S.metalnessMap.channel),roughnessMapUv:T&&v(S.roughnessMap.channel),anisotropyMapUv:ue&&v(S.anisotropyMap.channel),clearcoatMapUv:ye&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:je&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ue&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:_e&&v(S.sheenRoughnessMap.channel),specularMapUv:Ye&&v(S.specularMap.channel),specularColorMapUv:Ge&&v(S.specularColorMap.channel),specularIntensityMapUv:at&&v(S.specularIntensityMap.channel),transmissionMapUv:I&&v(S.transmissionMap.channel),thicknessMapUv:he&&v(S.thicknessMap.channel),alphaMapUv:J&&v(S.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Pe||y),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!W.attributes.uv&&(Ie||J),fog:!!O,useFog:S.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:ie,skinning:F.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:X,morphTextureStride:ne,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&A.length>0,shadowMapType:s.shadowMap.type,toneMapping:ut,decodeVideoTexture:Ie&&S.map.isVideoTexture===!0&&Ke.getTransfer(S.map.colorSpace)===it,decodeVideoTextureEmissive:$e&&S.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(S.emissiveMap.colorSpace)===it,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===$t,flipSided:S.side===wt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Be&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Be&&S.extensions.multiDraw===!0||be)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return St.vertexUv1s=c.has(1),St.vertexUv2s=c.has(2),St.vertexUv3s=c.has(3),c.clear(),St}function f(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const A in S.defines)M.push(A),M.push(S.defines[A]);return S.isRawShaderMaterial===!1&&(x(M,S),E(M,S),M.push(s.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function x(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function E(S,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),S.push(o.mask)}function _(S){const M=g[S.type];let A;if(M){const B=nn[M];A=ts.clone(B.uniforms)}else A=S.uniforms;return A}function L(S,M){let A;for(let B=0,F=d.length;B<F;B++){const O=d[B];if(O.cacheKey===M){A=O,++A.usedTimes;break}}return A===void 0&&(A=new Op(s,M,S,a),d.push(A)),A}function C(S){if(--S.usedTimes===0){const M=d.indexOf(S);d[M]=d[d.length-1],d.pop(),S.destroy()}}function w(S){l.remove(S)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:_,acquireProgram:L,releaseProgram:C,releaseShaderCache:w,programs:d,dispose:R}}function Wp(){let s=new WeakMap;function e(r){return s.has(r)}function t(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function n(r){s.delete(r)}function i(r,o,l){s.get(r)[o]=l}function a(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:a}}function $p(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function qo(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Xo(){const s=[];let e=0;const t=[],n=[],i=[];function a(){e=0,t.length=0,n.length=0,i.length=0}function r(h,u,p,g,v,m){let f=s[e];return f===void 0?(f={id:h.id,object:h,geometry:u,material:p,groupOrder:g,renderOrder:h.renderOrder,z:v,group:m},s[e]=f):(f.id=h.id,f.object=h,f.geometry=u,f.material=p,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=v,f.group=m),e++,f}function o(h,u,p,g,v,m){const f=r(h,u,p,g,v,m);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):t.push(f)}function l(h,u,p,g,v,m){const f=r(h,u,p,g,v,m);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):t.unshift(f)}function c(h,u){t.length>1&&t.sort(h||$p),n.length>1&&n.sort(u||qo),i.length>1&&i.sort(u||qo)}function d(){for(let h=e,u=s.length;h<u;h++){const p=s[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:a,push:o,unshift:l,finish:d,sort:c}}function qp(){let s=new WeakMap;function e(n,i){const a=s.get(n);let r;return a===void 0?(r=new Xo,s.set(n,[r])):i>=a.length?(r=new Xo,a.push(r)):r=a[i],r}function t(){s=new WeakMap}return{get:e,dispose:t}}function Xp(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new ke};break;case"SpotLight":t={position:new P,direction:new P,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new P,halfWidth:new P,halfHeight:new P};break}return s[e.id]=t,t}}}function Yp(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let jp=0;function Kp(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Zp(s){const e=new Xp,t=Yp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);const i=new P,a=new ot,r=new ot;function o(c){let d=0,h=0,u=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let p=0,g=0,v=0,m=0,f=0,x=0,E=0,_=0,L=0,C=0,w=0;c.sort(Kp);for(let S=0,M=c.length;S<M;S++){const A=c[S],B=A.color,F=A.intensity,O=A.distance,W=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)d+=B.r*F,h+=B.g*F,u+=B.b*F;else if(A.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(A.sh.coefficients[$],F);w++}else if(A.isDirectionalLight){const $=e.get(A);if($.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const Q=A.shadow,q=t.get(A);q.shadowIntensity=Q.intensity,q.shadowBias=Q.bias,q.shadowNormalBias=Q.normalBias,q.shadowRadius=Q.radius,q.shadowMapSize=Q.mapSize,n.directionalShadow[p]=q,n.directionalShadowMap[p]=W,n.directionalShadowMatrix[p]=A.shadow.matrix,x++}n.directional[p]=$,p++}else if(A.isSpotLight){const $=e.get(A);$.position.setFromMatrixPosition(A.matrixWorld),$.color.copy(B).multiplyScalar(F),$.distance=O,$.coneCos=Math.cos(A.angle),$.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),$.decay=A.decay,n.spot[v]=$;const Q=A.shadow;if(A.map&&(n.spotLightMap[L]=A.map,L++,Q.updateMatrices(A),A.castShadow&&C++),n.spotLightMatrix[v]=Q.matrix,A.castShadow){const q=t.get(A);q.shadowIntensity=Q.intensity,q.shadowBias=Q.bias,q.shadowNormalBias=Q.normalBias,q.shadowRadius=Q.radius,q.shadowMapSize=Q.mapSize,n.spotShadow[v]=q,n.spotShadowMap[v]=W,_++}v++}else if(A.isRectAreaLight){const $=e.get(A);$.color.copy(B).multiplyScalar(F),$.halfWidth.set(A.width*.5,0,0),$.halfHeight.set(0,A.height*.5,0),n.rectArea[m]=$,m++}else if(A.isPointLight){const $=e.get(A);if($.color.copy(A.color).multiplyScalar(A.intensity),$.distance=A.distance,$.decay=A.decay,A.castShadow){const Q=A.shadow,q=t.get(A);q.shadowIntensity=Q.intensity,q.shadowBias=Q.bias,q.shadowNormalBias=Q.normalBias,q.shadowRadius=Q.radius,q.shadowMapSize=Q.mapSize,q.shadowCameraNear=Q.camera.near,q.shadowCameraFar=Q.camera.far,n.pointShadow[g]=q,n.pointShadowMap[g]=W,n.pointShadowMatrix[g]=A.shadow.matrix,E++}n.point[g]=$,g++}else if(A.isHemisphereLight){const $=e.get(A);$.skyColor.copy(A.color).multiplyScalar(F),$.groundColor.copy(A.groundColor).multiplyScalar(F),n.hemi[f]=$,f++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=de.LTC_FLOAT_1,n.rectAreaLTC2=de.LTC_FLOAT_2):(n.rectAreaLTC1=de.LTC_HALF_1,n.rectAreaLTC2=de.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=h,n.ambient[2]=u;const R=n.hash;(R.directionalLength!==p||R.pointLength!==g||R.spotLength!==v||R.rectAreaLength!==m||R.hemiLength!==f||R.numDirectionalShadows!==x||R.numPointShadows!==E||R.numSpotShadows!==_||R.numSpotMaps!==L||R.numLightProbes!==w)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=_+L-C,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=w,R.directionalLength=p,R.pointLength=g,R.spotLength=v,R.rectAreaLength=m,R.hemiLength=f,R.numDirectionalShadows=x,R.numPointShadows=E,R.numSpotShadows=_,R.numSpotMaps=L,R.numLightProbes=w,n.version=jp++)}function l(c,d){let h=0,u=0,p=0,g=0,v=0;const m=d.matrixWorldInverse;for(let f=0,x=c.length;f<x;f++){const E=c[f];if(E.isDirectionalLight){const _=n.directional[h];_.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(m),h++}else if(E.isSpotLight){const _=n.spot[p];_.position.setFromMatrixPosition(E.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(m),p++}else if(E.isRectAreaLight){const _=n.rectArea[g];_.position.setFromMatrixPosition(E.matrixWorld),_.position.applyMatrix4(m),r.identity(),a.copy(E.matrixWorld),a.premultiply(m),r.extractRotation(a),_.halfWidth.set(E.width*.5,0,0),_.halfHeight.set(0,E.height*.5,0),_.halfWidth.applyMatrix4(r),_.halfHeight.applyMatrix4(r),g++}else if(E.isPointLight){const _=n.point[u];_.position.setFromMatrixPosition(E.matrixWorld),_.position.applyMatrix4(m),u++}else if(E.isHemisphereLight){const _=n.hemi[v];_.direction.setFromMatrixPosition(E.matrixWorld),_.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:n}}function Yo(s){const e=new Zp(s),t=[],n=[];function i(d){c.camera=d,t.length=0,n.length=0}function a(d){t.push(d)}function r(d){n.push(d)}function o(){e.setup(t)}function l(d){e.setupView(t,d)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:a,pushShadow:r}}function Qp(s){let e=new WeakMap;function t(i,a=0){const r=e.get(i);let o;return r===void 0?(o=new Yo(s),e.set(i,[o])):a>=r.length?(o=new Yo(s),r.push(o)):o=r[a],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class Jp extends Un{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Ic,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class em extends Un{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const tm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,nm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function im(s,e,t){let n=new Br;const i=new Re,a=new Re,r=new st,o=new Jp({depthPacking:Uc}),l=new em,c={},d=t.maxTextureSize,h={[In]:wt,[wt]:In,[$t]:$t},u=new pt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Re},radius:{value:4}},vertexShader:tm,fragmentShader:nm}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const g=new _t;g.setAttribute("position",new Mt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Xe(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fl;let f=this.type;this.render=function(C,w,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const S=s.getRenderTarget(),M=s.getActiveCubeFace(),A=s.getActiveMipmapLevel(),B=s.state;B.setBlending(vn),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const F=f!==pn&&this.type===pn,O=f===pn&&this.type!==pn;for(let W=0,$=C.length;W<$;W++){const Q=C[W],q=Q.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;i.copy(q.mapSize);const oe=q.getFrameExtents();if(i.multiply(oe),a.copy(q.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(a.x=Math.floor(d/oe.x),i.x=a.x*oe.x,q.mapSize.x=a.x),i.y>d&&(a.y=Math.floor(d/oe.y),i.y=a.y*oe.y,q.mapSize.y=a.y)),q.map===null||F===!0||O===!0){const X=this.type!==pn?{minFilter:en,magFilter:en}:{};q.map!==null&&q.map.dispose(),q.map=new It(i.x,i.y,X),q.map.texture.name=Q.name+".shadowMap",q.camera.updateProjectionMatrix()}s.setRenderTarget(q.map),s.clear();const le=q.getViewportCount();for(let X=0;X<le;X++){const ne=q.getViewport(X);r.set(a.x*ne.x,a.y*ne.y,a.x*ne.z,a.y*ne.w),B.viewport(r),q.updateMatrices(Q,X),n=q.getFrustum(),_(w,R,q.camera,Q,this.type)}q.isPointLightShadow!==!0&&this.type===pn&&x(q,R),q.needsUpdate=!1}f=this.type,m.needsUpdate=!1,s.setRenderTarget(S,M,A)};function x(C,w){const R=e.update(v);u.defines.VSM_SAMPLES!==C.blurSamples&&(u.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new It(i.x,i.y)),u.uniforms.shadow_pass.value=C.map.texture,u.uniforms.resolution.value=C.mapSize,u.uniforms.radius.value=C.radius,s.setRenderTarget(C.mapPass),s.clear(),s.renderBufferDirect(w,null,R,u,v,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,s.setRenderTarget(C.map),s.clear(),s.renderBufferDirect(w,null,R,p,v,null)}function E(C,w,R,S){let M=null;const A=R.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(A!==void 0)M=A;else if(M=R.isPointLight===!0?l:o,s.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const B=M.uuid,F=w.uuid;let O=c[B];O===void 0&&(O={},c[B]=O);let W=O[F];W===void 0&&(W=M.clone(),O[F]=W,w.addEventListener("dispose",L)),M=W}if(M.visible=w.visible,M.wireframe=w.wireframe,S===pn?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:h[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,R.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const B=s.properties.get(M);B.light=R}return M}function _(C,w,R,S,M){if(C.visible===!1)return;if(C.layers.test(w.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===pn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,C.matrixWorld);const F=e.update(C),O=C.material;if(Array.isArray(O)){const W=F.groups;for(let $=0,Q=W.length;$<Q;$++){const q=W[$],oe=O[q.materialIndex];if(oe&&oe.visible){const le=E(C,oe,S,M);C.onBeforeShadow(s,C,w,R,F,le,q),s.renderBufferDirect(R,null,F,le,C,q),C.onAfterShadow(s,C,w,R,F,le,q)}}}else if(O.visible){const W=E(C,O,S,M);C.onBeforeShadow(s,C,w,R,F,W,null),s.renderBufferDirect(R,null,F,W,C,null),C.onAfterShadow(s,C,w,R,F,W,null)}}const B=C.children;for(let F=0,O=B.length;F<O;F++)_(B[F],w,R,S,M)}function L(C){C.target.removeEventListener("dispose",L);for(const R in c){const S=c[R],M=C.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const sm={[Ha]:Wa,[$a]:Ya,[qa]:ja,[Ci]:Xa,[Wa]:Ha,[Ya]:$a,[ja]:qa,[Xa]:Ci};function am(s,e){function t(){let I=!1;const he=new st;let Y=null;const J=new st(0,0,0,0);return{setMask:function(me){Y!==me&&!I&&(s.colorMask(me,me,me,me),Y=me)},setLocked:function(me){I=me},setClear:function(me,fe,Be,ut,St){St===!0&&(me*=ut,fe*=ut,Be*=ut),he.set(me,fe,Be,ut),J.equals(he)===!1&&(s.clearColor(me,fe,Be,ut),J.copy(he))},reset:function(){I=!1,Y=null,J.set(-1,0,0,0)}}}function n(){let I=!1,he=!1,Y=null,J=null,me=null;return{setReversed:function(fe){if(he!==fe){const Be=e.get("EXT_clip_control");he?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT);const ut=me;me=null,this.setClear(ut)}he=fe},getReversed:function(){return he},setTest:function(fe){fe?V(s.DEPTH_TEST):ie(s.DEPTH_TEST)},setMask:function(fe){Y!==fe&&!I&&(s.depthMask(fe),Y=fe)},setFunc:function(fe){if(he&&(fe=sm[fe]),J!==fe){switch(fe){case Ha:s.depthFunc(s.NEVER);break;case Wa:s.depthFunc(s.ALWAYS);break;case $a:s.depthFunc(s.LESS);break;case Ci:s.depthFunc(s.LEQUAL);break;case qa:s.depthFunc(s.EQUAL);break;case Xa:s.depthFunc(s.GEQUAL);break;case Ya:s.depthFunc(s.GREATER);break;case ja:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}J=fe}},setLocked:function(fe){I=fe},setClear:function(fe){me!==fe&&(he&&(fe=1-fe),s.clearDepth(fe),me=fe)},reset:function(){I=!1,Y=null,J=null,me=null,he=!1}}}function i(){let I=!1,he=null,Y=null,J=null,me=null,fe=null,Be=null,ut=null,St=null;return{setTest:function(tt){I||(tt?V(s.STENCIL_TEST):ie(s.STENCIL_TEST))},setMask:function(tt){he!==tt&&!I&&(s.stencilMask(tt),he=tt)},setFunc:function(tt,Yt,on){(Y!==tt||J!==Yt||me!==on)&&(s.stencilFunc(tt,Yt,on),Y=tt,J=Yt,me=on)},setOp:function(tt,Yt,on){(fe!==tt||Be!==Yt||ut!==on)&&(s.stencilOp(tt,Yt,on),fe=tt,Be=Yt,ut=on)},setLocked:function(tt){I=tt},setClear:function(tt){St!==tt&&(s.clearStencil(tt),St=tt)},reset:function(){I=!1,he=null,Y=null,J=null,me=null,fe=null,Be=null,ut=null,St=null}}}const a=new t,r=new n,o=new i,l=new WeakMap,c=new WeakMap;let d={},h={},u=new WeakMap,p=[],g=null,v=!1,m=null,f=null,x=null,E=null,_=null,L=null,C=null,w=new ke(0,0,0),R=0,S=!1,M=null,A=null,B=null,F=null,O=null;const W=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,Q=0;const q=s.getParameter(s.VERSION);q.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(q)[1]),$=Q>=1):q.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),$=Q>=2);let oe=null,le={};const X=s.getParameter(s.SCISSOR_BOX),ne=s.getParameter(s.VIEWPORT),ce=new st().fromArray(X),H=new st().fromArray(ne);function K(I,he,Y,J){const me=new Uint8Array(4),fe=s.createTexture();s.bindTexture(I,fe),s.texParameteri(I,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(I,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Be=0;Be<Y;Be++)I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY?s.texImage3D(he,0,s.RGBA,1,1,J,0,s.RGBA,s.UNSIGNED_BYTE,me):s.texImage2D(he+Be,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,me);return fe}const re={};re[s.TEXTURE_2D]=K(s.TEXTURE_2D,s.TEXTURE_2D,1),re[s.TEXTURE_CUBE_MAP]=K(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[s.TEXTURE_2D_ARRAY]=K(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),re[s.TEXTURE_3D]=K(s.TEXTURE_3D,s.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),V(s.DEPTH_TEST),r.setFunc(Ci),Le(!1),Pe(Qr),V(s.CULL_FACE),D(vn);function V(I){d[I]!==!0&&(s.enable(I),d[I]=!0)}function ie(I){d[I]!==!1&&(s.disable(I),d[I]=!1)}function ve(I,he){return h[I]!==he?(s.bindFramebuffer(I,he),h[I]=he,I===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=he),I===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=he),!0):!1}function be(I,he){let Y=p,J=!1;if(I){Y=u.get(he),Y===void 0&&(Y=[],u.set(he,Y));const me=I.textures;if(Y.length!==me.length||Y[0]!==s.COLOR_ATTACHMENT0){for(let fe=0,Be=me.length;fe<Be;fe++)Y[fe]=s.COLOR_ATTACHMENT0+fe;Y.length=me.length,J=!0}}else Y[0]!==s.BACK&&(Y[0]=s.BACK,J=!0);J&&s.drawBuffers(Y)}function Ie(I){return g!==I?(s.useProgram(I),g=I,!0):!1}const De={[qn]:s.FUNC_ADD,[oc]:s.FUNC_SUBTRACT,[lc]:s.FUNC_REVERSE_SUBTRACT};De[cc]=s.MIN,De[dc]=s.MAX;const We={[hc]:s.ZERO,[uc]:s.ONE,[fc]:s.SRC_COLOR,[Ga]:s.SRC_ALPHA,[Mc]:s.SRC_ALPHA_SATURATE,[vc]:s.DST_COLOR,[mc]:s.DST_ALPHA,[pc]:s.ONE_MINUS_SRC_COLOR,[Va]:s.ONE_MINUS_SRC_ALPHA,[yc]:s.ONE_MINUS_DST_COLOR,[gc]:s.ONE_MINUS_DST_ALPHA,[_c]:s.CONSTANT_COLOR,[bc]:s.ONE_MINUS_CONSTANT_COLOR,[Sc]:s.CONSTANT_ALPHA,[xc]:s.ONE_MINUS_CONSTANT_ALPHA};function D(I,he,Y,J,me,fe,Be,ut,St,tt){if(I===vn){v===!0&&(ie(s.BLEND),v=!1);return}if(v===!1&&(V(s.BLEND),v=!0),I!==rc){if(I!==m||tt!==S){if((f!==qn||_!==qn)&&(s.blendEquation(s.FUNC_ADD),f=qn,_=qn),tt)switch(I){case jn:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case wi:s.blendFunc(s.ONE,s.ONE);break;case Jr:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case eo:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case jn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case wi:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Jr:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case eo:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}x=null,E=null,L=null,C=null,w.set(0,0,0),R=0,m=I,S=tt}return}me=me||he,fe=fe||Y,Be=Be||J,(he!==f||me!==_)&&(s.blendEquationSeparate(De[he],De[me]),f=he,_=me),(Y!==x||J!==E||fe!==L||Be!==C)&&(s.blendFuncSeparate(We[Y],We[J],We[fe],We[Be]),x=Y,E=J,L=fe,C=Be),(ut.equals(w)===!1||St!==R)&&(s.blendColor(ut.r,ut.g,ut.b,St),w.copy(ut),R=St),m=I,S=!1}function lt(I,he){I.side===$t?ie(s.CULL_FACE):V(s.CULL_FACE);let Y=I.side===wt;he&&(Y=!Y),Le(Y),I.blending===jn&&I.transparent===!1?D(vn):D(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),r.setFunc(I.depthFunc),r.setTest(I.depthTest),r.setMask(I.depthWrite),a.setMask(I.colorWrite);const J=I.stencilWrite;o.setTest(J),J&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),$e(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?V(s.SAMPLE_ALPHA_TO_COVERAGE):ie(s.SAMPLE_ALPHA_TO_COVERAGE)}function Le(I){M!==I&&(I?s.frontFace(s.CW):s.frontFace(s.CCW),M=I)}function Pe(I){I!==sc?(V(s.CULL_FACE),I!==A&&(I===Qr?s.cullFace(s.BACK):I===ac?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ie(s.CULL_FACE),A=I}function ge(I){I!==B&&($&&s.lineWidth(I),B=I)}function $e(I,he,Y){I?(V(s.POLYGON_OFFSET_FILL),(F!==he||O!==Y)&&(s.polygonOffset(he,Y),F=he,O=Y)):ie(s.POLYGON_OFFSET_FILL)}function Se(I){I?V(s.SCISSOR_TEST):ie(s.SCISSOR_TEST)}function T(I){I===void 0&&(I=s.TEXTURE0+W-1),oe!==I&&(s.activeTexture(I),oe=I)}function y(I,he,Y){Y===void 0&&(oe===null?Y=s.TEXTURE0+W-1:Y=oe);let J=le[Y];J===void 0&&(J={type:void 0,texture:void 0},le[Y]=J),(J.type!==I||J.texture!==he)&&(oe!==Y&&(s.activeTexture(Y),oe=Y),s.bindTexture(I,he||re[I]),J.type=I,J.texture=he)}function k(){const I=le[oe];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Z(){try{s.compressedTexImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ee(){try{s.compressedTexImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function j(){try{s.texSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ce(){try{s.texSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ue(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ye(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function je(){try{s.texStorage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function se(){try{s.texStorage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Me(){try{s.texImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ue(){try{s.texImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ne(I){ce.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),ce.copy(I))}function _e(I){H.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),H.copy(I))}function Ye(I,he){let Y=c.get(he);Y===void 0&&(Y=new WeakMap,c.set(he,Y));let J=Y.get(I);J===void 0&&(J=s.getUniformBlockIndex(he,I.name),Y.set(I,J))}function Ge(I,he){const J=c.get(he).get(I);l.get(he)!==J&&(s.uniformBlockBinding(he,J,I.__bindingPointIndex),l.set(he,J))}function at(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),r.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},oe=null,le={},h={},u=new WeakMap,p=[],g=null,v=!1,m=null,f=null,x=null,E=null,_=null,L=null,C=null,w=new ke(0,0,0),R=0,S=!1,M=null,A=null,B=null,F=null,O=null,ce.set(0,0,s.canvas.width,s.canvas.height),H.set(0,0,s.canvas.width,s.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:V,disable:ie,bindFramebuffer:ve,drawBuffers:be,useProgram:Ie,setBlending:D,setMaterial:lt,setFlipSided:Le,setCullFace:Pe,setLineWidth:ge,setPolygonOffset:$e,setScissorTest:Se,activeTexture:T,bindTexture:y,unbindTexture:k,compressedTexImage2D:Z,compressedTexImage3D:ee,texImage2D:Me,texImage3D:Ue,updateUBOMapping:Ye,uniformBlockBinding:Ge,texStorage2D:je,texStorage3D:se,texSubImage2D:j,texSubImage3D:Ce,compressedTexSubImage2D:ue,compressedTexSubImage3D:ye,scissor:Ne,viewport:_e,reset:at}}function jo(s,e,t,n){const i=rm(n);switch(t){case bl:return s*e;case xl:return s*e;case El:return s*e*2;case Tl:return s*e/i.components*i.byteLength;case Ir:return s*e/i.components*i.byteLength;case wl:return s*e*2/i.components*i.byteLength;case Ur:return s*e*2/i.components*i.byteLength;case Sl:return s*e*3/i.components*i.byteLength;case Xt:return s*e*4/i.components*i.byteLength;case Nr:return s*e*4/i.components*i.byteLength;case Bs:case Os:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case zs:case Gs:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case er:case nr:return Math.max(s,16)*Math.max(e,8)/4;case Ja:case tr:return Math.max(s,8)*Math.max(e,8)/2;case ir:case sr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ar:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case rr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case or:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case lr:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case cr:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case dr:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case hr:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case ur:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case fr:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case pr:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case mr:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case gr:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case vr:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case yr:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Mr:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Vs:case _r:case br:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Cl:case Sr:return Math.ceil(s/4)*Math.ceil(e/4)*8;case xr:case Er:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function rm(s){switch(s){case rn:case yl:return{byteLength:1,components:1};case Ji:case Ml:case yn:return{byteLength:2,components:1};case Lr:case Dr:return{byteLength:2,components:4};case Qn:case Pr:case mn:return{byteLength:4,components:1};case _l:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function om(s,e,t,n,i,a,r){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Re,d=new WeakMap;let h;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,y){return p?new OffscreenCanvas(T,y):qs("canvas")}function v(T,y,k){let Z=1;const ee=Se(T);if((ee.width>k||ee.height>k)&&(Z=k/Math.max(ee.width,ee.height)),Z<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const j=Math.floor(Z*ee.width),Ce=Math.floor(Z*ee.height);h===void 0&&(h=g(j,Ce));const ue=y?g(j,Ce):h;return ue.width=j,ue.height=Ce,ue.getContext("2d").drawImage(T,0,0,j,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+j+"x"+Ce+")."),ue}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),T;return T}function m(T){return T.generateMipmaps}function f(T){s.generateMipmap(T)}function x(T){return T.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?s.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function E(T,y,k,Z,ee=!1){if(T!==null){if(s[T]!==void 0)return s[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let j=y;if(y===s.RED&&(k===s.FLOAT&&(j=s.R32F),k===s.HALF_FLOAT&&(j=s.R16F),k===s.UNSIGNED_BYTE&&(j=s.R8)),y===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&(j=s.R8UI),k===s.UNSIGNED_SHORT&&(j=s.R16UI),k===s.UNSIGNED_INT&&(j=s.R32UI),k===s.BYTE&&(j=s.R8I),k===s.SHORT&&(j=s.R16I),k===s.INT&&(j=s.R32I)),y===s.RG&&(k===s.FLOAT&&(j=s.RG32F),k===s.HALF_FLOAT&&(j=s.RG16F),k===s.UNSIGNED_BYTE&&(j=s.RG8)),y===s.RG_INTEGER&&(k===s.UNSIGNED_BYTE&&(j=s.RG8UI),k===s.UNSIGNED_SHORT&&(j=s.RG16UI),k===s.UNSIGNED_INT&&(j=s.RG32UI),k===s.BYTE&&(j=s.RG8I),k===s.SHORT&&(j=s.RG16I),k===s.INT&&(j=s.RG32I)),y===s.RGB_INTEGER&&(k===s.UNSIGNED_BYTE&&(j=s.RGB8UI),k===s.UNSIGNED_SHORT&&(j=s.RGB16UI),k===s.UNSIGNED_INT&&(j=s.RGB32UI),k===s.BYTE&&(j=s.RGB8I),k===s.SHORT&&(j=s.RGB16I),k===s.INT&&(j=s.RGB32I)),y===s.RGBA_INTEGER&&(k===s.UNSIGNED_BYTE&&(j=s.RGBA8UI),k===s.UNSIGNED_SHORT&&(j=s.RGBA16UI),k===s.UNSIGNED_INT&&(j=s.RGBA32UI),k===s.BYTE&&(j=s.RGBA8I),k===s.SHORT&&(j=s.RGBA16I),k===s.INT&&(j=s.RGBA32I)),y===s.RGB&&k===s.UNSIGNED_INT_5_9_9_9_REV&&(j=s.RGB9_E5),y===s.RGBA){const Ce=ee?Js:Ke.getTransfer(Z);k===s.FLOAT&&(j=s.RGBA32F),k===s.HALF_FLOAT&&(j=s.RGBA16F),k===s.UNSIGNED_BYTE&&(j=Ce===it?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT_4_4_4_4&&(j=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&(j=s.RGB5_A1)}return(j===s.R16F||j===s.R32F||j===s.RG16F||j===s.RG32F||j===s.RGBA16F||j===s.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function _(T,y){let k;return T?y===null||y===Qn||y===Pi?k=s.DEPTH24_STENCIL8:y===mn?k=s.DEPTH32F_STENCIL8:y===Ji&&(k=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Qn||y===Pi?k=s.DEPTH_COMPONENT24:y===mn?k=s.DEPTH_COMPONENT32F:y===Ji&&(k=s.DEPTH_COMPONENT16),k}function L(T,y){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==en&&T.minFilter!==Pt?Math.log2(Math.max(y.width,y.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?y.mipmaps.length:1}function C(T){const y=T.target;y.removeEventListener("dispose",C),R(y),y.isVideoTexture&&d.delete(y)}function w(T){const y=T.target;y.removeEventListener("dispose",w),M(y)}function R(T){const y=n.get(T);if(y.__webglInit===void 0)return;const k=T.source,Z=u.get(k);if(Z){const ee=Z[y.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&S(T),Object.keys(Z).length===0&&u.delete(k)}n.remove(T)}function S(T){const y=n.get(T);s.deleteTexture(y.__webglTexture);const k=T.source,Z=u.get(k);delete Z[y.__cacheKey],r.memory.textures--}function M(T){const y=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(y.__webglFramebuffer[Z]))for(let ee=0;ee<y.__webglFramebuffer[Z].length;ee++)s.deleteFramebuffer(y.__webglFramebuffer[Z][ee]);else s.deleteFramebuffer(y.__webglFramebuffer[Z]);y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer[Z])}else{if(Array.isArray(y.__webglFramebuffer))for(let Z=0;Z<y.__webglFramebuffer.length;Z++)s.deleteFramebuffer(y.__webglFramebuffer[Z]);else s.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Z=0;Z<y.__webglColorRenderbuffer.length;Z++)y.__webglColorRenderbuffer[Z]&&s.deleteRenderbuffer(y.__webglColorRenderbuffer[Z]);y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const k=T.textures;for(let Z=0,ee=k.length;Z<ee;Z++){const j=n.get(k[Z]);j.__webglTexture&&(s.deleteTexture(j.__webglTexture),r.memory.textures--),n.remove(k[Z])}n.remove(T)}let A=0;function B(){A=0}function F(){const T=A;return T>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+i.maxTextures),A+=1,T}function O(T){const y=[];return y.push(T.wrapS),y.push(T.wrapT),y.push(T.wrapR||0),y.push(T.magFilter),y.push(T.minFilter),y.push(T.anisotropy),y.push(T.internalFormat),y.push(T.format),y.push(T.type),y.push(T.generateMipmaps),y.push(T.premultiplyAlpha),y.push(T.flipY),y.push(T.unpackAlignment),y.push(T.colorSpace),y.join()}function W(T,y){const k=n.get(T);if(T.isVideoTexture&&ge(T),T.isRenderTargetTexture===!1&&T.version>0&&k.__version!==T.version){const Z=T.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{H(k,T,y);return}}t.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+y)}function $(T,y){const k=n.get(T);if(T.version>0&&k.__version!==T.version){H(k,T,y);return}t.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+y)}function Q(T,y){const k=n.get(T);if(T.version>0&&k.__version!==T.version){H(k,T,y);return}t.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+y)}function q(T,y){const k=n.get(T);if(T.version>0&&k.__version!==T.version){K(k,T,y);return}t.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+y)}const oe={[Qi]:s.REPEAT,[Yn]:s.CLAMP_TO_EDGE,[Qa]:s.MIRRORED_REPEAT},le={[en]:s.NEAREST,[Dc]:s.NEAREST_MIPMAP_NEAREST,[cs]:s.NEAREST_MIPMAP_LINEAR,[Pt]:s.LINEAR,[oa]:s.LINEAR_MIPMAP_NEAREST,[sn]:s.LINEAR_MIPMAP_LINEAR},X={[Fc]:s.NEVER,[Vc]:s.ALWAYS,[kc]:s.LESS,[Rl]:s.LEQUAL,[Bc]:s.EQUAL,[Gc]:s.GEQUAL,[Oc]:s.GREATER,[zc]:s.NOTEQUAL};function ne(T,y){if(y.type===mn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Pt||y.magFilter===oa||y.magFilter===cs||y.magFilter===sn||y.minFilter===Pt||y.minFilter===oa||y.minFilter===cs||y.minFilter===sn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(T,s.TEXTURE_WRAP_S,oe[y.wrapS]),s.texParameteri(T,s.TEXTURE_WRAP_T,oe[y.wrapT]),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,oe[y.wrapR]),s.texParameteri(T,s.TEXTURE_MAG_FILTER,le[y.magFilter]),s.texParameteri(T,s.TEXTURE_MIN_FILTER,le[y.minFilter]),y.compareFunction&&(s.texParameteri(T,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(T,s.TEXTURE_COMPARE_FUNC,X[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===en||y.minFilter!==cs&&y.minFilter!==sn||y.type===mn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");s.texParameterf(T,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function ce(T,y){let k=!1;T.__webglInit===void 0&&(T.__webglInit=!0,y.addEventListener("dispose",C));const Z=y.source;let ee=u.get(Z);ee===void 0&&(ee={},u.set(Z,ee));const j=O(y);if(j!==T.__cacheKey){ee[j]===void 0&&(ee[j]={texture:s.createTexture(),usedTimes:0},r.memory.textures++,k=!0),ee[j].usedTimes++;const Ce=ee[T.__cacheKey];Ce!==void 0&&(ee[T.__cacheKey].usedTimes--,Ce.usedTimes===0&&S(y)),T.__cacheKey=j,T.__webglTexture=ee[j].texture}return k}function H(T,y,k){let Z=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Z=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Z=s.TEXTURE_3D);const ee=ce(T,y),j=y.source;t.bindTexture(Z,T.__webglTexture,s.TEXTURE0+k);const Ce=n.get(j);if(j.version!==Ce.__version||ee===!0){t.activeTexture(s.TEXTURE0+k);const ue=Ke.getPrimaries(Ke.workingColorSpace),ye=y.colorSpace===Ln?null:Ke.getPrimaries(y.colorSpace),je=y.colorSpace===Ln||ue===ye?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);let se=v(y.image,!1,i.maxTextureSize);se=$e(y,se);const Me=a.convert(y.format,y.colorSpace),Ue=a.convert(y.type);let Ne=E(y.internalFormat,Me,Ue,y.colorSpace,y.isVideoTexture);ne(Z,y);let _e;const Ye=y.mipmaps,Ge=y.isVideoTexture!==!0,at=Ce.__version===void 0||ee===!0,I=j.dataReady,he=L(y,se);if(y.isDepthTexture)Ne=_(y.format===Li,y.type),at&&(Ge?t.texStorage2D(s.TEXTURE_2D,1,Ne,se.width,se.height):t.texImage2D(s.TEXTURE_2D,0,Ne,se.width,se.height,0,Me,Ue,null));else if(y.isDataTexture)if(Ye.length>0){Ge&&at&&t.texStorage2D(s.TEXTURE_2D,he,Ne,Ye[0].width,Ye[0].height);for(let Y=0,J=Ye.length;Y<J;Y++)_e=Ye[Y],Ge?I&&t.texSubImage2D(s.TEXTURE_2D,Y,0,0,_e.width,_e.height,Me,Ue,_e.data):t.texImage2D(s.TEXTURE_2D,Y,Ne,_e.width,_e.height,0,Me,Ue,_e.data);y.generateMipmaps=!1}else Ge?(at&&t.texStorage2D(s.TEXTURE_2D,he,Ne,se.width,se.height),I&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,se.width,se.height,Me,Ue,se.data)):t.texImage2D(s.TEXTURE_2D,0,Ne,se.width,se.height,0,Me,Ue,se.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ge&&at&&t.texStorage3D(s.TEXTURE_2D_ARRAY,he,Ne,Ye[0].width,Ye[0].height,se.depth);for(let Y=0,J=Ye.length;Y<J;Y++)if(_e=Ye[Y],y.format!==Xt)if(Me!==null)if(Ge){if(I)if(y.layerUpdates.size>0){const me=jo(_e.width,_e.height,y.format,y.type);for(const fe of y.layerUpdates){const Be=_e.data.subarray(fe*me/_e.data.BYTES_PER_ELEMENT,(fe+1)*me/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,fe,_e.width,_e.height,1,Me,Be)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,_e.width,_e.height,se.depth,Me,_e.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Y,Ne,_e.width,_e.height,se.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ge?I&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,_e.width,_e.height,se.depth,Me,Ue,_e.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Y,Ne,_e.width,_e.height,se.depth,0,Me,Ue,_e.data)}else{Ge&&at&&t.texStorage2D(s.TEXTURE_2D,he,Ne,Ye[0].width,Ye[0].height);for(let Y=0,J=Ye.length;Y<J;Y++)_e=Ye[Y],y.format!==Xt?Me!==null?Ge?I&&t.compressedTexSubImage2D(s.TEXTURE_2D,Y,0,0,_e.width,_e.height,Me,_e.data):t.compressedTexImage2D(s.TEXTURE_2D,Y,Ne,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?I&&t.texSubImage2D(s.TEXTURE_2D,Y,0,0,_e.width,_e.height,Me,Ue,_e.data):t.texImage2D(s.TEXTURE_2D,Y,Ne,_e.width,_e.height,0,Me,Ue,_e.data)}else if(y.isDataArrayTexture)if(Ge){if(at&&t.texStorage3D(s.TEXTURE_2D_ARRAY,he,Ne,se.width,se.height,se.depth),I)if(y.layerUpdates.size>0){const Y=jo(se.width,se.height,y.format,y.type);for(const J of y.layerUpdates){const me=se.data.subarray(J*Y/se.data.BYTES_PER_ELEMENT,(J+1)*Y/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,J,se.width,se.height,1,Me,Ue,me)}y.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,Me,Ue,se.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ne,se.width,se.height,se.depth,0,Me,Ue,se.data);else if(y.isData3DTexture)Ge?(at&&t.texStorage3D(s.TEXTURE_3D,he,Ne,se.width,se.height,se.depth),I&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,Me,Ue,se.data)):t.texImage3D(s.TEXTURE_3D,0,Ne,se.width,se.height,se.depth,0,Me,Ue,se.data);else if(y.isFramebufferTexture){if(at)if(Ge)t.texStorage2D(s.TEXTURE_2D,he,Ne,se.width,se.height);else{let Y=se.width,J=se.height;for(let me=0;me<he;me++)t.texImage2D(s.TEXTURE_2D,me,Ne,Y,J,0,Me,Ue,null),Y>>=1,J>>=1}}else if(Ye.length>0){if(Ge&&at){const Y=Se(Ye[0]);t.texStorage2D(s.TEXTURE_2D,he,Ne,Y.width,Y.height)}for(let Y=0,J=Ye.length;Y<J;Y++)_e=Ye[Y],Ge?I&&t.texSubImage2D(s.TEXTURE_2D,Y,0,0,Me,Ue,_e):t.texImage2D(s.TEXTURE_2D,Y,Ne,Me,Ue,_e);y.generateMipmaps=!1}else if(Ge){if(at){const Y=Se(se);t.texStorage2D(s.TEXTURE_2D,he,Ne,Y.width,Y.height)}I&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Me,Ue,se)}else t.texImage2D(s.TEXTURE_2D,0,Ne,Me,Ue,se);m(y)&&f(Z),Ce.__version=j.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function K(T,y,k){if(y.image.length!==6)return;const Z=ce(T,y),ee=y.source;t.bindTexture(s.TEXTURE_CUBE_MAP,T.__webglTexture,s.TEXTURE0+k);const j=n.get(ee);if(ee.version!==j.__version||Z===!0){t.activeTexture(s.TEXTURE0+k);const Ce=Ke.getPrimaries(Ke.workingColorSpace),ue=y.colorSpace===Ln?null:Ke.getPrimaries(y.colorSpace),ye=y.colorSpace===Ln||Ce===ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const je=y.isCompressedTexture||y.image[0].isCompressedTexture,se=y.image[0]&&y.image[0].isDataTexture,Me=[];for(let J=0;J<6;J++)!je&&!se?Me[J]=v(y.image[J],!0,i.maxCubemapSize):Me[J]=se?y.image[J].image:y.image[J],Me[J]=$e(y,Me[J]);const Ue=Me[0],Ne=a.convert(y.format,y.colorSpace),_e=a.convert(y.type),Ye=E(y.internalFormat,Ne,_e,y.colorSpace),Ge=y.isVideoTexture!==!0,at=j.__version===void 0||Z===!0,I=ee.dataReady;let he=L(y,Ue);ne(s.TEXTURE_CUBE_MAP,y);let Y;if(je){Ge&&at&&t.texStorage2D(s.TEXTURE_CUBE_MAP,he,Ye,Ue.width,Ue.height);for(let J=0;J<6;J++){Y=Me[J].mipmaps;for(let me=0;me<Y.length;me++){const fe=Y[me];y.format!==Xt?Ne!==null?Ge?I&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,me,0,0,fe.width,fe.height,Ne,fe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,me,Ye,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?I&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,me,0,0,fe.width,fe.height,Ne,_e,fe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,me,Ye,fe.width,fe.height,0,Ne,_e,fe.data)}}}else{if(Y=y.mipmaps,Ge&&at){Y.length>0&&he++;const J=Se(Me[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,he,Ye,J.width,J.height)}for(let J=0;J<6;J++)if(se){Ge?I&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Me[J].width,Me[J].height,Ne,_e,Me[J].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ye,Me[J].width,Me[J].height,0,Ne,_e,Me[J].data);for(let me=0;me<Y.length;me++){const Be=Y[me].image[J].image;Ge?I&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,me+1,0,0,Be.width,Be.height,Ne,_e,Be.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,me+1,Ye,Be.width,Be.height,0,Ne,_e,Be.data)}}else{Ge?I&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Ne,_e,Me[J]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ye,Ne,_e,Me[J]);for(let me=0;me<Y.length;me++){const fe=Y[me];Ge?I&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,me+1,0,0,Ne,_e,fe.image[J]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,me+1,Ye,Ne,_e,fe.image[J])}}}m(y)&&f(s.TEXTURE_CUBE_MAP),j.__version=ee.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function re(T,y,k,Z,ee,j){const Ce=a.convert(k.format,k.colorSpace),ue=a.convert(k.type),ye=E(k.internalFormat,Ce,ue,k.colorSpace),je=n.get(y),se=n.get(k);if(se.__renderTarget=y,!je.__hasExternalTextures){const Me=Math.max(1,y.width>>j),Ue=Math.max(1,y.height>>j);ee===s.TEXTURE_3D||ee===s.TEXTURE_2D_ARRAY?t.texImage3D(ee,j,ye,Me,Ue,y.depth,0,Ce,ue,null):t.texImage2D(ee,j,ye,Me,Ue,0,Ce,ue,null)}t.bindFramebuffer(s.FRAMEBUFFER,T),Pe(y)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Z,ee,se.__webglTexture,0,Le(y)):(ee===s.TEXTURE_2D||ee>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Z,ee,se.__webglTexture,j),t.bindFramebuffer(s.FRAMEBUFFER,null)}function V(T,y,k){if(s.bindRenderbuffer(s.RENDERBUFFER,T),y.depthBuffer){const Z=y.depthTexture,ee=Z&&Z.isDepthTexture?Z.type:null,j=_(y.stencilBuffer,ee),Ce=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ue=Le(y);Pe(y)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ue,j,y.width,y.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,ue,j,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,j,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ce,s.RENDERBUFFER,T)}else{const Z=y.textures;for(let ee=0;ee<Z.length;ee++){const j=Z[ee],Ce=a.convert(j.format,j.colorSpace),ue=a.convert(j.type),ye=E(j.internalFormat,Ce,ue,j.colorSpace),je=Le(y);k&&Pe(y)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,je,ye,y.width,y.height):Pe(y)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,je,ye,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,ye,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ie(T,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,T),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(y.depthTexture);Z.__renderTarget=y,(!Z.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),W(y.depthTexture,0);const ee=Z.__webglTexture,j=Le(y);if(y.depthTexture.format===xi)Pe(y)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ee,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ee,0);else if(y.depthTexture.format===Li)Pe(y)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ee,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function ve(T){const y=n.get(T),k=T.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==T.depthTexture){const Z=T.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),Z){const ee=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,Z.removeEventListener("dispose",ee)};Z.addEventListener("dispose",ee),y.__depthDisposeCallback=ee}y.__boundDepthTexture=Z}if(T.depthTexture&&!y.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");ie(y.__webglFramebuffer,T)}else if(k){y.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[Z]),y.__webglDepthbuffer[Z]===void 0)y.__webglDepthbuffer[Z]=s.createRenderbuffer(),V(y.__webglDepthbuffer[Z],T,!1);else{const ee=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,j=y.__webglDepthbuffer[Z];s.bindRenderbuffer(s.RENDERBUFFER,j),s.framebufferRenderbuffer(s.FRAMEBUFFER,ee,s.RENDERBUFFER,j)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=s.createRenderbuffer(),V(y.__webglDepthbuffer,T,!1);else{const Z=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ee=y.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ee),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,ee)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function be(T,y,k){const Z=n.get(T);y!==void 0&&re(Z.__webglFramebuffer,T,T.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&ve(T)}function Ie(T){const y=T.texture,k=n.get(T),Z=n.get(y);T.addEventListener("dispose",w);const ee=T.textures,j=T.isWebGLCubeRenderTarget===!0,Ce=ee.length>1;if(Ce||(Z.__webglTexture===void 0&&(Z.__webglTexture=s.createTexture()),Z.__version=y.version,r.memory.textures++),j){k.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer[ue]=[];for(let ye=0;ye<y.mipmaps.length;ye++)k.__webglFramebuffer[ue][ye]=s.createFramebuffer()}else k.__webglFramebuffer[ue]=s.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer=[];for(let ue=0;ue<y.mipmaps.length;ue++)k.__webglFramebuffer[ue]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(Ce)for(let ue=0,ye=ee.length;ue<ye;ue++){const je=n.get(ee[ue]);je.__webglTexture===void 0&&(je.__webglTexture=s.createTexture(),r.memory.textures++)}if(T.samples>0&&Pe(T)===!1){k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ue=0;ue<ee.length;ue++){const ye=ee[ue];k.__webglColorRenderbuffer[ue]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[ue]);const je=a.convert(ye.format,ye.colorSpace),se=a.convert(ye.type),Me=E(ye.internalFormat,je,se,ye.colorSpace,T.isXRRenderTarget===!0),Ue=Le(T);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ue,Me,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ue,s.RENDERBUFFER,k.__webglColorRenderbuffer[ue])}s.bindRenderbuffer(s.RENDERBUFFER,null),T.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),V(k.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(j){t.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture),ne(s.TEXTURE_CUBE_MAP,y);for(let ue=0;ue<6;ue++)if(y.mipmaps&&y.mipmaps.length>0)for(let ye=0;ye<y.mipmaps.length;ye++)re(k.__webglFramebuffer[ue][ye],T,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ye);else re(k.__webglFramebuffer[ue],T,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);m(y)&&f(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){for(let ue=0,ye=ee.length;ue<ye;ue++){const je=ee[ue],se=n.get(je);t.bindTexture(s.TEXTURE_2D,se.__webglTexture),ne(s.TEXTURE_2D,je),re(k.__webglFramebuffer,T,je,s.COLOR_ATTACHMENT0+ue,s.TEXTURE_2D,0),m(je)&&f(s.TEXTURE_2D)}t.unbindTexture()}else{let ue=s.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ue=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ue,Z.__webglTexture),ne(ue,y),y.mipmaps&&y.mipmaps.length>0)for(let ye=0;ye<y.mipmaps.length;ye++)re(k.__webglFramebuffer[ye],T,y,s.COLOR_ATTACHMENT0,ue,ye);else re(k.__webglFramebuffer,T,y,s.COLOR_ATTACHMENT0,ue,0);m(y)&&f(ue),t.unbindTexture()}T.depthBuffer&&ve(T)}function De(T){const y=T.textures;for(let k=0,Z=y.length;k<Z;k++){const ee=y[k];if(m(ee)){const j=x(T),Ce=n.get(ee).__webglTexture;t.bindTexture(j,Ce),f(j),t.unbindTexture()}}}const We=[],D=[];function lt(T){if(T.samples>0){if(Pe(T)===!1){const y=T.textures,k=T.width,Z=T.height;let ee=s.COLOR_BUFFER_BIT;const j=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ce=n.get(T),ue=y.length>1;if(ue)for(let ye=0;ye<y.length;ye++)t.bindFramebuffer(s.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ye,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ce.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ye,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let ye=0;ye<y.length;ye++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(ee|=s.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(ee|=s.STENCIL_BUFFER_BIT)),ue){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ce.__webglColorRenderbuffer[ye]);const je=n.get(y[ye]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,je,0)}s.blitFramebuffer(0,0,k,Z,0,0,k,Z,ee,s.NEAREST),l===!0&&(We.length=0,D.length=0,We.push(s.COLOR_ATTACHMENT0+ye),T.depthBuffer&&T.resolveDepthBuffer===!1&&(We.push(j),D.push(j),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,D)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,We))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ue)for(let ye=0;ye<y.length;ye++){t.bindFramebuffer(s.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ye,s.RENDERBUFFER,Ce.__webglColorRenderbuffer[ye]);const je=n.get(y[ye]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ce.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ye,s.TEXTURE_2D,je,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const y=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[y])}}}function Le(T){return Math.min(i.maxSamples,T.samples)}function Pe(T){const y=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function ge(T){const y=r.render.frame;d.get(T)!==y&&(d.set(T,y),T.update())}function $e(T,y){const k=T.colorSpace,Z=T.format,ee=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||k!==Ui&&k!==Ln&&(Ke.getTransfer(k)===it?(Z!==Xt||ee!==rn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),y}function Se(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=B,this.setTexture2D=W,this.setTexture2DArray=$,this.setTexture3D=Q,this.setTextureCube=q,this.rebindTextures=be,this.setupRenderTarget=Ie,this.updateRenderTargetMipmap=De,this.updateMultisampleRenderTarget=lt,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=re,this.useMultisampledRTT=Pe}function lm(s,e){function t(n,i=Ln){let a;const r=Ke.getTransfer(i);if(n===rn)return s.UNSIGNED_BYTE;if(n===Lr)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Dr)return s.UNSIGNED_SHORT_5_5_5_1;if(n===_l)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===yl)return s.BYTE;if(n===Ml)return s.SHORT;if(n===Ji)return s.UNSIGNED_SHORT;if(n===Pr)return s.INT;if(n===Qn)return s.UNSIGNED_INT;if(n===mn)return s.FLOAT;if(n===yn)return s.HALF_FLOAT;if(n===bl)return s.ALPHA;if(n===Sl)return s.RGB;if(n===Xt)return s.RGBA;if(n===xl)return s.LUMINANCE;if(n===El)return s.LUMINANCE_ALPHA;if(n===xi)return s.DEPTH_COMPONENT;if(n===Li)return s.DEPTH_STENCIL;if(n===Tl)return s.RED;if(n===Ir)return s.RED_INTEGER;if(n===wl)return s.RG;if(n===Ur)return s.RG_INTEGER;if(n===Nr)return s.RGBA_INTEGER;if(n===Bs||n===Os||n===zs||n===Gs)if(r===it)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===Bs)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Os)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===zs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Gs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===Bs)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Os)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===zs)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Gs)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ja||n===er||n===tr||n===nr)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===Ja)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===er)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===tr)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===nr)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ir||n===sr||n===ar)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===ir||n===sr)return r===it?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===ar)return r===it?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===rr||n===or||n===lr||n===cr||n===dr||n===hr||n===ur||n===fr||n===pr||n===mr||n===gr||n===vr||n===yr||n===Mr)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===rr)return r===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===or)return r===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===lr)return r===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===cr)return r===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===dr)return r===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===hr)return r===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ur)return r===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===fr)return r===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===pr)return r===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===mr)return r===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===gr)return r===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===vr)return r===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===yr)return r===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Mr)return r===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Vs||n===_r||n===br)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===Vs)return r===it?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===_r)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===br)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Cl||n===Sr||n===xr||n===Er)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===Vs)return a.COMPRESSED_RED_RGTC1_EXT;if(n===Sr)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===xr)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Er)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Pi?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}class cm extends Ot{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class zt extends mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const dm={type:"move"};class Ua{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,a=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){r=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,n),f=this._getHandJoint(c,v);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],u=d.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&u>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&a!==null&&(i=a),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(dm)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new zt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const hm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,um=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class fm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Lt,a=e.properties.get(i);a.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new pt({vertexShader:hm,fragmentShader:um,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Xe(new bn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class pm extends Jn{constructor(e,t){super();const n=this;let i=null,a=1,r=null,o="local-floor",l=1,c=null,d=null,h=null,u=null,p=null,g=null;const v=new fm,m=t.getContextAttributes();let f=null,x=null;const E=[],_=[],L=new Re;let C=null;const w=new Ot;w.viewport=new st;const R=new Ot;R.viewport=new st;const S=[w,R],M=new cm;let A=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let K=E[H];return K===void 0&&(K=new Ua,E[H]=K),K.getTargetRaySpace()},this.getControllerGrip=function(H){let K=E[H];return K===void 0&&(K=new Ua,E[H]=K),K.getGripSpace()},this.getHand=function(H){let K=E[H];return K===void 0&&(K=new Ua,E[H]=K),K.getHandSpace()};function F(H){const K=_.indexOf(H.inputSource);if(K===-1)return;const re=E[K];re!==void 0&&(re.update(H.inputSource,H.frame,c||r),re.dispatchEvent({type:H.type,data:H.inputSource}))}function O(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",O),i.removeEventListener("inputsourceschange",W);for(let H=0;H<E.length;H++){const K=_[H];K!==null&&(_[H]=null,E[H].disconnect(K))}A=null,B=null,v.reset(),e.setRenderTarget(f),p=null,u=null,h=null,i=null,x=null,ce.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){a=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){o=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(H){if(i=H,i!==null){if(f=e.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",O),i.addEventListener("inputsourceschange",W),m.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(L),i.renderState.layers===void 0){const K={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(i,t,K),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new It(p.framebufferWidth,p.framebufferHeight,{format:Xt,type:rn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let K=null,re=null,V=null;m.depth&&(V=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=m.stencil?Li:xi,re=m.stencil?Pi:Qn);const ie={colorFormat:t.RGBA8,depthFormat:V,scaleFactor:a};h=new XRWebGLBinding(i,t),u=h.createProjectionLayer(ie),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),x=new It(u.textureWidth,u.textureHeight,{format:Xt,type:rn,depthTexture:new Gl(u.textureWidth,u.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await i.requestReferenceSpace(o),ce.setContext(i),ce.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function W(H){for(let K=0;K<H.removed.length;K++){const re=H.removed[K],V=_.indexOf(re);V>=0&&(_[V]=null,E[V].disconnect(re))}for(let K=0;K<H.added.length;K++){const re=H.added[K];let V=_.indexOf(re);if(V===-1){for(let ve=0;ve<E.length;ve++)if(ve>=_.length){_.push(re),V=ve;break}else if(_[ve]===null){_[ve]=re,V=ve;break}if(V===-1)break}const ie=E[V];ie&&ie.connect(re)}}const $=new P,Q=new P;function q(H,K,re){$.setFromMatrixPosition(K.matrixWorld),Q.setFromMatrixPosition(re.matrixWorld);const V=$.distanceTo(Q),ie=K.projectionMatrix.elements,ve=re.projectionMatrix.elements,be=ie[14]/(ie[10]-1),Ie=ie[14]/(ie[10]+1),De=(ie[9]+1)/ie[5],We=(ie[9]-1)/ie[5],D=(ie[8]-1)/ie[0],lt=(ve[8]+1)/ve[0],Le=be*D,Pe=be*lt,ge=V/(-D+lt),$e=ge*-D;if(K.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX($e),H.translateZ(ge),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),ie[10]===-1)H.projectionMatrix.copy(K.projectionMatrix),H.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const Se=be+ge,T=Ie+ge,y=Le-$e,k=Pe+(V-$e),Z=De*Ie/T*Se,ee=We*Ie/T*Se;H.projectionMatrix.makePerspective(y,k,Z,ee,Se,T),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function oe(H,K){K===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(K.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(i===null)return;let K=H.near,re=H.far;v.texture!==null&&(v.depthNear>0&&(K=v.depthNear),v.depthFar>0&&(re=v.depthFar)),M.near=R.near=w.near=K,M.far=R.far=w.far=re,(A!==M.near||B!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),A=M.near,B=M.far),w.layers.mask=H.layers.mask|2,R.layers.mask=H.layers.mask|4,M.layers.mask=w.layers.mask|R.layers.mask;const V=H.parent,ie=M.cameras;oe(M,V);for(let ve=0;ve<ie.length;ve++)oe(ie[ve],V);ie.length===2?q(M,w,R):M.projectionMatrix.copy(w.projectionMatrix),le(H,M,V)};function le(H,K,re){re===null?H.matrix.copy(K.matrixWorld):(H.matrix.copy(re.matrixWorld),H.matrix.invert(),H.matrix.multiply(K.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(K.projectionMatrix),H.projectionMatrixInverse.copy(K.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=es*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(H){l=H,u!==null&&(u.fixedFoveation=H),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=H)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let X=null;function ne(H,K){if(d=K.getViewerPose(c||r),g=K,d!==null){const re=d.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let V=!1;re.length!==M.cameras.length&&(M.cameras.length=0,V=!0);for(let ve=0;ve<re.length;ve++){const be=re[ve];let Ie=null;if(p!==null)Ie=p.getViewport(be);else{const We=h.getViewSubImage(u,be);Ie=We.viewport,ve===0&&(e.setRenderTargetTextures(x,We.colorTexture,u.ignoreDepthValues?void 0:We.depthStencilTexture),e.setRenderTarget(x))}let De=S[ve];De===void 0&&(De=new Ot,De.layers.enable(ve),De.viewport=new st,S[ve]=De),De.matrix.fromArray(be.transform.matrix),De.matrix.decompose(De.position,De.quaternion,De.scale),De.projectionMatrix.fromArray(be.projectionMatrix),De.projectionMatrixInverse.copy(De.projectionMatrix).invert(),De.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),ve===0&&(M.matrix.copy(De.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),V===!0&&M.cameras.push(De)}const ie=i.enabledFeatures;if(ie&&ie.includes("depth-sensing")){const ve=h.getDepthInformation(re[0]);ve&&ve.isValid&&ve.texture&&v.init(e,ve,i.renderState)}}for(let re=0;re<E.length;re++){const V=_[re],ie=E[re];V!==null&&ie!==void 0&&ie.update(V,K,c||r)}X&&X(H,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),g=null}const ce=new zl;ce.setAnimationLoop(ne),this.setAnimationLoop=function(H){X=H},this.dispose=function(){}}}const Gn=new Gt,mm=new ot;function gm(s,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,kl(s)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,x,E,_){f.isMeshBasicMaterial||f.isMeshLambertMaterial?a(m,f):f.isMeshToonMaterial?(a(m,f),h(m,f)):f.isMeshPhongMaterial?(a(m,f),d(m,f)):f.isMeshStandardMaterial?(a(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,_)):f.isMeshMatcapMaterial?(a(m,f),g(m,f)):f.isMeshDepthMaterial?a(m,f):f.isMeshDistanceMaterial?(a(m,f),v(m,f)):f.isMeshNormalMaterial?a(m,f):f.isLineBasicMaterial?(r(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,x,E):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function a(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===wt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===wt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const x=e.get(f),E=x.envMap,_=x.envMapRotation;E&&(m.envMap.value=E,Gn.copy(_),Gn.x*=-1,Gn.y*=-1,Gn.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Gn.y*=-1,Gn.z*=-1),m.envMapRotation.value.setFromMatrix4(mm.makeRotationFromEuler(Gn)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function r(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,x,E){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*x,m.scale.value=E*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function d(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,x){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===wt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){const x=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function vm(s,e,t,n){let i={},a={},r=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,E){const _=E.program;n.uniformBlockBinding(x,_)}function c(x,E){let _=i[x.id];_===void 0&&(g(x),_=d(x),i[x.id]=_,x.addEventListener("dispose",m));const L=E.program;n.updateUBOMapping(x,L);const C=e.render.frame;a[x.id]!==C&&(u(x),a[x.id]=C)}function d(x){const E=h();x.__bindingPointIndex=E;const _=s.createBuffer(),L=x.__size,C=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,_),s.bufferData(s.UNIFORM_BUFFER,L,C),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,E,_),_}function h(){for(let x=0;x<o;x++)if(r.indexOf(x)===-1)return r.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){const E=i[x.id],_=x.uniforms,L=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,E);for(let C=0,w=_.length;C<w;C++){const R=Array.isArray(_[C])?_[C]:[_[C]];for(let S=0,M=R.length;S<M;S++){const A=R[S];if(p(A,C,S,L)===!0){const B=A.__offset,F=Array.isArray(A.value)?A.value:[A.value];let O=0;for(let W=0;W<F.length;W++){const $=F[W],Q=v($);typeof $=="number"||typeof $=="boolean"?(A.__data[0]=$,s.bufferSubData(s.UNIFORM_BUFFER,B+O,A.__data)):$.isMatrix3?(A.__data[0]=$.elements[0],A.__data[1]=$.elements[1],A.__data[2]=$.elements[2],A.__data[3]=0,A.__data[4]=$.elements[3],A.__data[5]=$.elements[4],A.__data[6]=$.elements[5],A.__data[7]=0,A.__data[8]=$.elements[6],A.__data[9]=$.elements[7],A.__data[10]=$.elements[8],A.__data[11]=0):($.toArray(A.__data,O),O+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,B,A.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(x,E,_,L){const C=x.value,w=E+"_"+_;if(L[w]===void 0)return typeof C=="number"||typeof C=="boolean"?L[w]=C:L[w]=C.clone(),!0;{const R=L[w];if(typeof C=="number"||typeof C=="boolean"){if(R!==C)return L[w]=C,!0}else if(R.equals(C)===!1)return R.copy(C),!0}return!1}function g(x){const E=x.uniforms;let _=0;const L=16;for(let w=0,R=E.length;w<R;w++){const S=Array.isArray(E[w])?E[w]:[E[w]];for(let M=0,A=S.length;M<A;M++){const B=S[M],F=Array.isArray(B.value)?B.value:[B.value];for(let O=0,W=F.length;O<W;O++){const $=F[O],Q=v($),q=_%L,oe=q%Q.boundary,le=q+oe;_+=oe,le!==0&&L-le<Q.storage&&(_+=L-le),B.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=_,_+=Q.storage}}}const C=_%L;return C>0&&(_+=L-C),x.__size=_,x.__cache={},this}function v(x){const E={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(E.boundary=4,E.storage=4):x.isVector2?(E.boundary=8,E.storage=8):x.isVector3||x.isColor?(E.boundary=16,E.storage=12):x.isVector4?(E.boundary=16,E.storage=16):x.isMatrix3?(E.boundary=48,E.storage=48):x.isMatrix4?(E.boundary=64,E.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),E}function m(x){const E=x.target;E.removeEventListener("dispose",m);const _=r.indexOf(E.__bindingPointIndex);r.splice(_,1),s.deleteBuffer(i[E.id]),delete i[E.id],delete a[E.id]}function f(){for(const x in i)s.deleteBuffer(i[x]);r=[],i={},a={}}return{bind:l,update:c,dispose:f}}class ym{constructor(e={}){const{canvas:t=rd(),context:n=null,depth:i=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=r;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,f=null;const x=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Wt,this.toneMapping=Dn,this.toneMappingExposure=1;const _=this;let L=!1,C=0,w=0,R=null,S=-1,M=null;const A=new st,B=new st;let F=null;const O=new ke(0);let W=0,$=t.width,Q=t.height,q=1,oe=null,le=null;const X=new st(0,0,$,Q),ne=new st(0,0,$,Q);let ce=!1;const H=new Br;let K=!1,re=!1;const V=new ot,ie=new ot,ve=new P,be=new st,Ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let De=!1;function We(){return R===null?q:1}let D=n;function lt(b,U){return t.getContext(b,U)}try{const b={alpha:!0,depth:i,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Rr}`),t.addEventListener("webglcontextlost",J,!1),t.addEventListener("webglcontextrestored",me,!1),t.addEventListener("webglcontextcreationerror",fe,!1),D===null){const U="webgl2";if(D=lt(U,b),D===null)throw lt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Le,Pe,ge,$e,Se,T,y,k,Z,ee,j,Ce,ue,ye,je,se,Me,Ue,Ne,_e,Ye,Ge,at,I;function he(){Le=new xf(D),Le.init(),Ge=new lm(D,Le),Pe=new vf(D,Le,e,Ge),ge=new am(D,Le),Pe.reverseDepthBuffer&&u&&ge.buffers.depth.setReversed(!0),$e=new wf(D),Se=new Wp,T=new om(D,Le,ge,Se,Pe,Ge,$e),y=new Mf(_),k=new Sf(_),Z=new Dd(D),at=new mf(D,Z),ee=new Ef(D,Z,$e,at),j=new Af(D,ee,Z,$e),Ne=new Cf(D,Pe,T),se=new yf(Se),Ce=new Hp(_,y,k,Le,Pe,at,se),ue=new gm(_,Se),ye=new qp,je=new Qp(Le),Ue=new pf(_,y,k,ge,j,p,l),Me=new im(_,j,Pe),I=new vm(D,$e,Pe,ge),_e=new gf(D,Le,$e),Ye=new Tf(D,Le,$e),$e.programs=Ce.programs,_.capabilities=Pe,_.extensions=Le,_.properties=Se,_.renderLists=ye,_.shadowMap=Me,_.state=ge,_.info=$e}he();const Y=new pm(_,D);this.xr=Y,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const b=Le.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Le.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(b){b!==void 0&&(q=b,this.setSize($,Q,!1))},this.getSize=function(b){return b.set($,Q)},this.setSize=function(b,U,z=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=b,Q=U,t.width=Math.floor(b*q),t.height=Math.floor(U*q),z===!0&&(t.style.width=b+"px",t.style.height=U+"px"),this.setViewport(0,0,b,U)},this.getDrawingBufferSize=function(b){return b.set($*q,Q*q).floor()},this.setDrawingBufferSize=function(b,U,z){$=b,Q=U,q=z,t.width=Math.floor(b*z),t.height=Math.floor(U*z),this.setViewport(0,0,b,U)},this.getCurrentViewport=function(b){return b.copy(A)},this.getViewport=function(b){return b.copy(X)},this.setViewport=function(b,U,z,G){b.isVector4?X.set(b.x,b.y,b.z,b.w):X.set(b,U,z,G),ge.viewport(A.copy(X).multiplyScalar(q).round())},this.getScissor=function(b){return b.copy(ne)},this.setScissor=function(b,U,z,G){b.isVector4?ne.set(b.x,b.y,b.z,b.w):ne.set(b,U,z,G),ge.scissor(B.copy(ne).multiplyScalar(q).round())},this.getScissorTest=function(){return ce},this.setScissorTest=function(b){ge.setScissorTest(ce=b)},this.setOpaqueSort=function(b){oe=b},this.setTransparentSort=function(b){le=b},this.getClearColor=function(b){return b.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor.apply(Ue,arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha.apply(Ue,arguments)},this.clear=function(b=!0,U=!0,z=!0){let G=0;if(b){let N=!1;if(R!==null){const ae=R.texture.format;N=ae===Nr||ae===Ur||ae===Ir}if(N){const ae=R.texture.type,pe=ae===rn||ae===Qn||ae===Ji||ae===Pi||ae===Lr||ae===Dr,xe=Ue.getClearColor(),Ee=Ue.getClearAlpha(),Fe=xe.r,Oe=xe.g,Te=xe.b;pe?(g[0]=Fe,g[1]=Oe,g[2]=Te,g[3]=Ee,D.clearBufferuiv(D.COLOR,0,g)):(v[0]=Fe,v[1]=Oe,v[2]=Te,v[3]=Ee,D.clearBufferiv(D.COLOR,0,v))}else G|=D.COLOR_BUFFER_BIT}U&&(G|=D.DEPTH_BUFFER_BIT),z&&(G|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",J,!1),t.removeEventListener("webglcontextrestored",me,!1),t.removeEventListener("webglcontextcreationerror",fe,!1),ye.dispose(),je.dispose(),Se.dispose(),y.dispose(),k.dispose(),j.dispose(),at.dispose(),I.dispose(),Ce.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",Wr),Y.removeEventListener("sessionend",$r),Nn.stop()};function J(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function me(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const b=$e.autoReset,U=Me.enabled,z=Me.autoUpdate,G=Me.needsUpdate,N=Me.type;he(),$e.autoReset=b,Me.enabled=U,Me.autoUpdate=z,Me.needsUpdate=G,Me.type=N}function fe(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Be(b){const U=b.target;U.removeEventListener("dispose",Be),ut(U)}function ut(b){St(b),Se.remove(b)}function St(b){const U=Se.get(b).programs;U!==void 0&&(U.forEach(function(z){Ce.releaseProgram(z)}),b.isShaderMaterial&&Ce.releaseShaderCache(b))}this.renderBufferDirect=function(b,U,z,G,N,ae){U===null&&(U=Ie);const pe=N.isMesh&&N.matrixWorld.determinant()<0,xe=tc(b,U,z,G,N);ge.setMaterial(G,pe);let Ee=z.index,Fe=1;if(G.wireframe===!0){if(Ee=ee.getWireframeAttribute(z),Ee===void 0)return;Fe=2}const Oe=z.drawRange,Te=z.attributes.position;let Ze=Oe.start*Fe,rt=(Oe.start+Oe.count)*Fe;ae!==null&&(Ze=Math.max(Ze,ae.start*Fe),rt=Math.min(rt,(ae.start+ae.count)*Fe)),Ee!==null?(Ze=Math.max(Ze,0),rt=Math.min(rt,Ee.count)):Te!=null&&(Ze=Math.max(Ze,0),rt=Math.min(rt,Te.count));const ct=rt-Ze;if(ct<0||ct===1/0)return;at.setup(N,G,xe,z,Ee);let Dt,Qe=_e;if(Ee!==null&&(Dt=Z.get(Ee),Qe=Ye,Qe.setIndex(Dt)),N.isMesh)G.wireframe===!0?(ge.setLineWidth(G.wireframeLinewidth*We()),Qe.setMode(D.LINES)):Qe.setMode(D.TRIANGLES);else if(N.isLine){let Ae=G.linewidth;Ae===void 0&&(Ae=1),ge.setLineWidth(Ae*We()),N.isLineSegments?Qe.setMode(D.LINES):N.isLineLoop?Qe.setMode(D.LINE_LOOP):Qe.setMode(D.LINE_STRIP)}else N.isPoints?Qe.setMode(D.POINTS):N.isSprite&&Qe.setMode(D.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Qe.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Le.get("WEBGL_multi_draw"))Qe.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Ae=N._multiDrawStarts,ln=N._multiDrawCounts,Je=N._multiDrawCount,jt=Ee?Z.get(Ee).bytesPerElement:1,ei=Se.get(G).currentProgram.getUniforms();for(let Ut=0;Ut<Je;Ut++)ei.setValue(D,"_gl_DrawID",Ut),Qe.render(Ae[Ut]/jt,ln[Ut])}else if(N.isInstancedMesh)Qe.renderInstances(Ze,ct,N.count);else if(z.isInstancedBufferGeometry){const Ae=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,ln=Math.min(z.instanceCount,Ae);Qe.renderInstances(Ze,ct,ln)}else Qe.render(Ze,ct)};function tt(b,U,z){b.transparent===!0&&b.side===$t&&b.forceSinglePass===!1?(b.side=wt,b.needsUpdate=!0,ls(b,U,z),b.side=In,b.needsUpdate=!0,ls(b,U,z),b.side=$t):ls(b,U,z)}this.compile=function(b,U,z=null){z===null&&(z=b),f=je.get(z),f.init(U),E.push(f),z.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),b!==z&&b.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),f.setupLights();const G=new Set;return b.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const ae=N.material;if(ae)if(Array.isArray(ae))for(let pe=0;pe<ae.length;pe++){const xe=ae[pe];tt(xe,z,N),G.add(xe)}else tt(ae,z,N),G.add(ae)}),E.pop(),f=null,G},this.compileAsync=function(b,U,z=null){const G=this.compile(b,U,z);return new Promise(N=>{function ae(){if(G.forEach(function(pe){Se.get(pe).currentProgram.isReady()&&G.delete(pe)}),G.size===0){N(b);return}setTimeout(ae,10)}Le.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let Yt=null;function on(b){Yt&&Yt(b)}function Wr(){Nn.stop()}function $r(){Nn.start()}const Nn=new zl;Nn.setAnimationLoop(on),typeof self<"u"&&Nn.setContext(self),this.setAnimationLoop=function(b){Yt=b,Y.setAnimationLoop(b),b===null?Nn.stop():Nn.start()},Y.addEventListener("sessionstart",Wr),Y.addEventListener("sessionend",$r),this.render=function(b,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(U),U=Y.getCamera()),b.isScene===!0&&b.onBeforeRender(_,b,U,R),f=je.get(b,E.length),f.init(U),E.push(f),ie.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),H.setFromProjectionMatrix(ie),re=this.localClippingEnabled,K=se.init(this.clippingPlanes,re),m=ye.get(b,x.length),m.init(),x.push(m),Y.enabled===!0&&Y.isPresenting===!0){const ae=_.xr.getDepthSensingMesh();ae!==null&&ra(ae,U,-1/0,_.sortObjects)}ra(b,U,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(oe,le),De=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,De&&Ue.addToRenderList(m,b),this.info.render.frame++,K===!0&&se.beginShadows();const z=f.state.shadowsArray;Me.render(z,b,U),K===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=m.opaque,N=m.transmissive;if(f.setupLights(),U.isArrayCamera){const ae=U.cameras;if(N.length>0)for(let pe=0,xe=ae.length;pe<xe;pe++){const Ee=ae[pe];Xr(G,N,b,Ee)}De&&Ue.render(b);for(let pe=0,xe=ae.length;pe<xe;pe++){const Ee=ae[pe];qr(m,b,Ee,Ee.viewport)}}else N.length>0&&Xr(G,N,b,U),De&&Ue.render(b),qr(m,b,U);R!==null&&(T.updateMultisampleRenderTarget(R),T.updateRenderTargetMipmap(R)),b.isScene===!0&&b.onAfterRender(_,b,U),at.resetDefaultState(),S=-1,M=null,E.pop(),E.length>0?(f=E[E.length-1],K===!0&&se.setGlobalState(_.clippingPlanes,f.state.camera)):f=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function ra(b,U,z,G){if(b.visible===!1)return;if(b.layers.test(U.layers)){if(b.isGroup)z=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(U);else if(b.isLight)f.pushLight(b),b.castShadow&&f.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||H.intersectsSprite(b)){G&&be.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ie);const pe=j.update(b),xe=b.material;xe.visible&&m.push(b,pe,xe,z,be.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||H.intersectsObject(b))){const pe=j.update(b),xe=b.material;if(G&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),be.copy(b.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),be.copy(pe.boundingSphere.center)),be.applyMatrix4(b.matrixWorld).applyMatrix4(ie)),Array.isArray(xe)){const Ee=pe.groups;for(let Fe=0,Oe=Ee.length;Fe<Oe;Fe++){const Te=Ee[Fe],Ze=xe[Te.materialIndex];Ze&&Ze.visible&&m.push(b,pe,Ze,z,be.z,Te)}}else xe.visible&&m.push(b,pe,xe,z,be.z,null)}}const ae=b.children;for(let pe=0,xe=ae.length;pe<xe;pe++)ra(ae[pe],U,z,G)}function qr(b,U,z,G){const N=b.opaque,ae=b.transmissive,pe=b.transparent;f.setupLightsView(z),K===!0&&se.setGlobalState(_.clippingPlanes,z),G&&ge.viewport(A.copy(G)),N.length>0&&os(N,U,z),ae.length>0&&os(ae,U,z),pe.length>0&&os(pe,U,z),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function Xr(b,U,z,G){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[G.id]===void 0&&(f.state.transmissionRenderTarget[G.id]=new It(1,1,{generateMipmaps:!0,type:Le.has("EXT_color_buffer_half_float")||Le.has("EXT_color_buffer_float")?yn:rn,minFilter:sn,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace}));const ae=f.state.transmissionRenderTarget[G.id],pe=G.viewport||A;ae.setSize(pe.z,pe.w);const xe=_.getRenderTarget();_.setRenderTarget(ae),_.getClearColor(O),W=_.getClearAlpha(),W<1&&_.setClearColor(16777215,.5),_.clear(),De&&Ue.render(z);const Ee=_.toneMapping;_.toneMapping=Dn;const Fe=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),f.setupLightsView(G),K===!0&&se.setGlobalState(_.clippingPlanes,G),os(b,z,G),T.updateMultisampleRenderTarget(ae),T.updateRenderTargetMipmap(ae),Le.has("WEBGL_multisampled_render_to_texture")===!1){let Oe=!1;for(let Te=0,Ze=U.length;Te<Ze;Te++){const rt=U[Te],ct=rt.object,Dt=rt.geometry,Qe=rt.material,Ae=rt.group;if(Qe.side===$t&&ct.layers.test(G.layers)){const ln=Qe.side;Qe.side=wt,Qe.needsUpdate=!0,Yr(ct,z,G,Dt,Qe,Ae),Qe.side=ln,Qe.needsUpdate=!0,Oe=!0}}Oe===!0&&(T.updateMultisampleRenderTarget(ae),T.updateRenderTargetMipmap(ae))}_.setRenderTarget(xe),_.setClearColor(O,W),Fe!==void 0&&(G.viewport=Fe),_.toneMapping=Ee}function os(b,U,z){const G=U.isScene===!0?U.overrideMaterial:null;for(let N=0,ae=b.length;N<ae;N++){const pe=b[N],xe=pe.object,Ee=pe.geometry,Fe=G===null?pe.material:G,Oe=pe.group;xe.layers.test(z.layers)&&Yr(xe,U,z,Ee,Fe,Oe)}}function Yr(b,U,z,G,N,ae){b.onBeforeRender(_,U,z,G,N,ae),b.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),N.onBeforeRender(_,U,z,G,b,ae),N.transparent===!0&&N.side===$t&&N.forceSinglePass===!1?(N.side=wt,N.needsUpdate=!0,_.renderBufferDirect(z,U,G,N,b,ae),N.side=In,N.needsUpdate=!0,_.renderBufferDirect(z,U,G,N,b,ae),N.side=$t):_.renderBufferDirect(z,U,G,N,b,ae),b.onAfterRender(_,U,z,G,N,ae)}function ls(b,U,z){U.isScene!==!0&&(U=Ie);const G=Se.get(b),N=f.state.lights,ae=f.state.shadowsArray,pe=N.state.version,xe=Ce.getParameters(b,N.state,ae,U,z),Ee=Ce.getProgramCacheKey(xe);let Fe=G.programs;G.environment=b.isMeshStandardMaterial?U.environment:null,G.fog=U.fog,G.envMap=(b.isMeshStandardMaterial?k:y).get(b.envMap||G.environment),G.envMapRotation=G.environment!==null&&b.envMap===null?U.environmentRotation:b.envMapRotation,Fe===void 0&&(b.addEventListener("dispose",Be),Fe=new Map,G.programs=Fe);let Oe=Fe.get(Ee);if(Oe!==void 0){if(G.currentProgram===Oe&&G.lightsStateVersion===pe)return Kr(b,xe),Oe}else xe.uniforms=Ce.getUniforms(b),b.onBeforeCompile(xe,_),Oe=Ce.acquireProgram(xe,Ee),Fe.set(Ee,Oe),G.uniforms=xe.uniforms;const Te=G.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Te.clippingPlanes=se.uniform),Kr(b,xe),G.needsLights=ic(b),G.lightsStateVersion=pe,G.needsLights&&(Te.ambientLightColor.value=N.state.ambient,Te.lightProbe.value=N.state.probe,Te.directionalLights.value=N.state.directional,Te.directionalLightShadows.value=N.state.directionalShadow,Te.spotLights.value=N.state.spot,Te.spotLightShadows.value=N.state.spotShadow,Te.rectAreaLights.value=N.state.rectArea,Te.ltc_1.value=N.state.rectAreaLTC1,Te.ltc_2.value=N.state.rectAreaLTC2,Te.pointLights.value=N.state.point,Te.pointLightShadows.value=N.state.pointShadow,Te.hemisphereLights.value=N.state.hemi,Te.directionalShadowMap.value=N.state.directionalShadowMap,Te.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Te.spotShadowMap.value=N.state.spotShadowMap,Te.spotLightMatrix.value=N.state.spotLightMatrix,Te.spotLightMap.value=N.state.spotLightMap,Te.pointShadowMap.value=N.state.pointShadowMap,Te.pointShadowMatrix.value=N.state.pointShadowMatrix),G.currentProgram=Oe,G.uniformsList=null,Oe}function jr(b){if(b.uniformsList===null){const U=b.currentProgram.getUniforms();b.uniformsList=Hs.seqWithValue(U.seq,b.uniforms)}return b.uniformsList}function Kr(b,U){const z=Se.get(b);z.outputColorSpace=U.outputColorSpace,z.batching=U.batching,z.batchingColor=U.batchingColor,z.instancing=U.instancing,z.instancingColor=U.instancingColor,z.instancingMorph=U.instancingMorph,z.skinning=U.skinning,z.morphTargets=U.morphTargets,z.morphNormals=U.morphNormals,z.morphColors=U.morphColors,z.morphTargetsCount=U.morphTargetsCount,z.numClippingPlanes=U.numClippingPlanes,z.numIntersection=U.numClipIntersection,z.vertexAlphas=U.vertexAlphas,z.vertexTangents=U.vertexTangents,z.toneMapping=U.toneMapping}function tc(b,U,z,G,N){U.isScene!==!0&&(U=Ie),T.resetTextureUnits();const ae=U.fog,pe=G.isMeshStandardMaterial?U.environment:null,xe=R===null?_.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Ui,Ee=(G.isMeshStandardMaterial?k:y).get(G.envMap||pe),Fe=G.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Oe=!!z.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Te=!!z.morphAttributes.position,Ze=!!z.morphAttributes.normal,rt=!!z.morphAttributes.color;let ct=Dn;G.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(ct=_.toneMapping);const Dt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Qe=Dt!==void 0?Dt.length:0,Ae=Se.get(G),ln=f.state.lights;if(K===!0&&(re===!0||b!==M)){const Vt=b===M&&G.id===S;se.setState(G,b,Vt)}let Je=!1;G.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==ln.state.version||Ae.outputColorSpace!==xe||N.isBatchedMesh&&Ae.batching===!1||!N.isBatchedMesh&&Ae.batching===!0||N.isBatchedMesh&&Ae.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Ae.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Ae.instancing===!1||!N.isInstancedMesh&&Ae.instancing===!0||N.isSkinnedMesh&&Ae.skinning===!1||!N.isSkinnedMesh&&Ae.skinning===!0||N.isInstancedMesh&&Ae.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Ae.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Ae.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Ae.instancingMorph===!1&&N.morphTexture!==null||Ae.envMap!==Ee||G.fog===!0&&Ae.fog!==ae||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==se.numPlanes||Ae.numIntersection!==se.numIntersection)||Ae.vertexAlphas!==Fe||Ae.vertexTangents!==Oe||Ae.morphTargets!==Te||Ae.morphNormals!==Ze||Ae.morphColors!==rt||Ae.toneMapping!==ct||Ae.morphTargetsCount!==Qe)&&(Je=!0):(Je=!0,Ae.__version=G.version);let jt=Ae.currentProgram;Je===!0&&(jt=ls(G,U,N));let ei=!1,Ut=!1,Fi=!1;const dt=jt.getUniforms(),tn=Ae.uniforms;if(ge.useProgram(jt.program)&&(ei=!0,Ut=!0,Fi=!0),G.id!==S&&(S=G.id,Ut=!0),ei||M!==b){ge.buffers.depth.getReversed()?(V.copy(b.projectionMatrix),ld(V),cd(V),dt.setValue(D,"projectionMatrix",V)):dt.setValue(D,"projectionMatrix",b.projectionMatrix),dt.setValue(D,"viewMatrix",b.matrixWorldInverse);const xn=dt.map.cameraPosition;xn!==void 0&&xn.setValue(D,ve.setFromMatrixPosition(b.matrixWorld)),Pe.logarithmicDepthBuffer&&dt.setValue(D,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&dt.setValue(D,"isOrthographic",b.isOrthographicCamera===!0),M!==b&&(M=b,Ut=!0,Fi=!0)}if(N.isSkinnedMesh){dt.setOptional(D,N,"bindMatrix"),dt.setOptional(D,N,"bindMatrixInverse");const Vt=N.skeleton;Vt&&(Vt.boneTexture===null&&Vt.computeBoneTexture(),dt.setValue(D,"boneTexture",Vt.boneTexture,T))}N.isBatchedMesh&&(dt.setOptional(D,N,"batchingTexture"),dt.setValue(D,"batchingTexture",N._matricesTexture,T),dt.setOptional(D,N,"batchingIdTexture"),dt.setValue(D,"batchingIdTexture",N._indirectTexture,T),dt.setOptional(D,N,"batchingColorTexture"),N._colorsTexture!==null&&dt.setValue(D,"batchingColorTexture",N._colorsTexture,T));const ki=z.morphAttributes;if((ki.position!==void 0||ki.normal!==void 0||ki.color!==void 0)&&Ne.update(N,z,jt),(Ut||Ae.receiveShadow!==N.receiveShadow)&&(Ae.receiveShadow=N.receiveShadow,dt.setValue(D,"receiveShadow",N.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(tn.envMap.value=Ee,tn.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&U.environment!==null&&(tn.envMapIntensity.value=U.environmentIntensity),Ut&&(dt.setValue(D,"toneMappingExposure",_.toneMappingExposure),Ae.needsLights&&nc(tn,Fi),ae&&G.fog===!0&&ue.refreshFogUniforms(tn,ae),ue.refreshMaterialUniforms(tn,G,q,Q,f.state.transmissionRenderTarget[b.id]),Hs.upload(D,jr(Ae),tn,T)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Hs.upload(D,jr(Ae),tn,T),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&dt.setValue(D,"center",N.center),dt.setValue(D,"modelViewMatrix",N.modelViewMatrix),dt.setValue(D,"normalMatrix",N.normalMatrix),dt.setValue(D,"modelMatrix",N.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Vt=G.uniformsGroups;for(let xn=0,En=Vt.length;xn<En;xn++){const Zr=Vt[xn];I.update(Zr,jt),I.bind(Zr,jt)}}return jt}function nc(b,U){b.ambientLightColor.needsUpdate=U,b.lightProbe.needsUpdate=U,b.directionalLights.needsUpdate=U,b.directionalLightShadows.needsUpdate=U,b.pointLights.needsUpdate=U,b.pointLightShadows.needsUpdate=U,b.spotLights.needsUpdate=U,b.spotLightShadows.needsUpdate=U,b.rectAreaLights.needsUpdate=U,b.hemisphereLights.needsUpdate=U}function ic(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(b,U,z){Se.get(b.texture).__webglTexture=U,Se.get(b.depthTexture).__webglTexture=z;const G=Se.get(b);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=z===void 0,G.__autoAllocateDepthBuffer||Le.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,U){const z=Se.get(b);z.__webglFramebuffer=U,z.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(b,U=0,z=0){R=b,C=U,w=z;let G=!0,N=null,ae=!1,pe=!1;if(b){const Ee=Se.get(b);if(Ee.__useDefaultFramebuffer!==void 0)ge.bindFramebuffer(D.FRAMEBUFFER,null),G=!1;else if(Ee.__webglFramebuffer===void 0)T.setupRenderTarget(b);else if(Ee.__hasExternalTextures)T.rebindTextures(b,Se.get(b.texture).__webglTexture,Se.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Te=b.depthTexture;if(Ee.__boundDepthTexture!==Te){if(Te!==null&&Se.has(Te)&&(b.width!==Te.image.width||b.height!==Te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(b)}}const Fe=b.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(pe=!0);const Oe=Se.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Oe[U])?N=Oe[U][z]:N=Oe[U],ae=!0):b.samples>0&&T.useMultisampledRTT(b)===!1?N=Se.get(b).__webglMultisampledFramebuffer:Array.isArray(Oe)?N=Oe[z]:N=Oe,A.copy(b.viewport),B.copy(b.scissor),F=b.scissorTest}else A.copy(X).multiplyScalar(q).floor(),B.copy(ne).multiplyScalar(q).floor(),F=ce;if(ge.bindFramebuffer(D.FRAMEBUFFER,N)&&G&&ge.drawBuffers(b,N),ge.viewport(A),ge.scissor(B),ge.setScissorTest(F),ae){const Ee=Se.get(b.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ee.__webglTexture,z)}else if(pe){const Ee=Se.get(b.texture),Fe=U||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ee.__webglTexture,z||0,Fe)}S=-1},this.readRenderTargetPixels=function(b,U,z,G,N,ae,pe){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=Se.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&pe!==void 0&&(xe=xe[pe]),xe){ge.bindFramebuffer(D.FRAMEBUFFER,xe);try{const Ee=b.texture,Fe=Ee.format,Oe=Ee.type;if(!Pe.textureFormatReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Pe.textureTypeReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=b.width-G&&z>=0&&z<=b.height-N&&D.readPixels(U,z,G,N,Ge.convert(Fe),Ge.convert(Oe),ae)}finally{const Ee=R!==null?Se.get(R).__webglFramebuffer:null;ge.bindFramebuffer(D.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(b,U,z,G,N,ae,pe){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=Se.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&pe!==void 0&&(xe=xe[pe]),xe){const Ee=b.texture,Fe=Ee.format,Oe=Ee.type;if(!Pe.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Pe.textureTypeReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=b.width-G&&z>=0&&z<=b.height-N){ge.bindFramebuffer(D.FRAMEBUFFER,xe);const Te=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Te),D.bufferData(D.PIXEL_PACK_BUFFER,ae.byteLength,D.STREAM_READ),D.readPixels(U,z,G,N,Ge.convert(Fe),Ge.convert(Oe),0);const Ze=R!==null?Se.get(R).__webglFramebuffer:null;ge.bindFramebuffer(D.FRAMEBUFFER,Ze);const rt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await od(D,rt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Te),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ae),D.deleteBuffer(Te),D.deleteSync(rt),ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,U=null,z=0){b.isTexture!==!0&&(Xi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,b=arguments[1]);const G=Math.pow(2,-z),N=Math.floor(b.image.width*G),ae=Math.floor(b.image.height*G),pe=U!==null?U.x:0,xe=U!==null?U.y:0;T.setTexture2D(b,0),D.copyTexSubImage2D(D.TEXTURE_2D,z,0,0,pe,xe,N,ae),ge.unbindTexture()},this.copyTextureToTexture=function(b,U,z=null,G=null,N=0){b.isTexture!==!0&&(Xi("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,b=arguments[1],U=arguments[2],N=arguments[3]||0,z=null);let ae,pe,xe,Ee,Fe,Oe,Te,Ze,rt;const ct=b.isCompressedTexture?b.mipmaps[N]:b.image;z!==null?(ae=z.max.x-z.min.x,pe=z.max.y-z.min.y,xe=z.isBox3?z.max.z-z.min.z:1,Ee=z.min.x,Fe=z.min.y,Oe=z.isBox3?z.min.z:0):(ae=ct.width,pe=ct.height,xe=ct.depth||1,Ee=0,Fe=0,Oe=0),G!==null?(Te=G.x,Ze=G.y,rt=G.z):(Te=0,Ze=0,rt=0);const Dt=Ge.convert(U.format),Qe=Ge.convert(U.type);let Ae;U.isData3DTexture?(T.setTexture3D(U,0),Ae=D.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(T.setTexture2DArray(U,0),Ae=D.TEXTURE_2D_ARRAY):(T.setTexture2D(U,0),Ae=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,U.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,U.unpackAlignment);const ln=D.getParameter(D.UNPACK_ROW_LENGTH),Je=D.getParameter(D.UNPACK_IMAGE_HEIGHT),jt=D.getParameter(D.UNPACK_SKIP_PIXELS),ei=D.getParameter(D.UNPACK_SKIP_ROWS),Ut=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,ct.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ct.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ee),D.pixelStorei(D.UNPACK_SKIP_ROWS,Fe),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Oe);const Fi=b.isDataArrayTexture||b.isData3DTexture,dt=U.isDataArrayTexture||U.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){const tn=Se.get(b),ki=Se.get(U),Vt=Se.get(tn.__renderTarget),xn=Se.get(ki.__renderTarget);ge.bindFramebuffer(D.READ_FRAMEBUFFER,Vt.__webglFramebuffer),ge.bindFramebuffer(D.DRAW_FRAMEBUFFER,xn.__webglFramebuffer);for(let En=0;En<xe;En++)Fi&&D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Se.get(b).__webglTexture,N,Oe+En),b.isDepthTexture?(dt&&D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Se.get(U).__webglTexture,N,rt+En),D.blitFramebuffer(Ee,Fe,ae,pe,Te,Ze,ae,pe,D.DEPTH_BUFFER_BIT,D.NEAREST)):dt?D.copyTexSubImage3D(Ae,N,Te,Ze,rt+En,Ee,Fe,ae,pe):D.copyTexSubImage2D(Ae,N,Te,Ze,rt+En,Ee,Fe,ae,pe);ge.bindFramebuffer(D.READ_FRAMEBUFFER,null),ge.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else dt?b.isDataTexture||b.isData3DTexture?D.texSubImage3D(Ae,N,Te,Ze,rt,ae,pe,xe,Dt,Qe,ct.data):U.isCompressedArrayTexture?D.compressedTexSubImage3D(Ae,N,Te,Ze,rt,ae,pe,xe,Dt,ct.data):D.texSubImage3D(Ae,N,Te,Ze,rt,ae,pe,xe,Dt,Qe,ct):b.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,N,Te,Ze,ae,pe,Dt,Qe,ct.data):b.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,N,Te,Ze,ct.width,ct.height,Dt,ct.data):D.texSubImage2D(D.TEXTURE_2D,N,Te,Ze,ae,pe,Dt,Qe,ct);D.pixelStorei(D.UNPACK_ROW_LENGTH,ln),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Je),D.pixelStorei(D.UNPACK_SKIP_PIXELS,jt),D.pixelStorei(D.UNPACK_SKIP_ROWS,ei),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ut),N===0&&U.generateMipmaps&&D.generateMipmap(Ae),ge.unbindTexture()},this.copyTextureToTexture3D=function(b,U,z=null,G=null,N=0){return b.isTexture!==!0&&(Xi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,G=arguments[1]||null,b=arguments[2],U=arguments[3],N=arguments[4]||0),Xi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,U,z,G,N)},this.initRenderTarget=function(b){Se.get(b).__webglFramebuffer===void 0&&T.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?T.setTextureCube(b,0):b.isData3DTexture?T.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?T.setTexture2DArray(b,0):T.setTexture2D(b,0),ge.unbindTexture()},this.resetState=function(){C=0,w=0,R=null,ge.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ke._getUnpackColorSpace()}}class ql extends mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gt,this.environmentIntensity=1,this.environmentRotation=new Gt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Mm{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Tr,this.updateRanges=[],this.version=0,this.uuid=Mn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,a=this.stride;i<a;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ct=new P;class Xs{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Jt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=nt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Jt(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Jt(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Jt(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Jt(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),i=nt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),i=nt(i,this.array),a=nt(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=a,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[i+a])}return new Mt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Xs(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[i+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class zr extends Un{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new ke(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let mi;const Vi=new P,gi=new P,vi=new P,yi=new Re,Hi=new Re,Xl=new ot,Ps=new P,Wi=new P,Ls=new P,Ko=new Re,Na=new Re,Zo=new Re;class Yl extends mt{constructor(e=new zr){if(super(),this.isSprite=!0,this.type="Sprite",mi===void 0){mi=new _t;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Mm(t,5);mi.setIndex([0,1,2,0,2,3]),mi.setAttribute("position",new Xs(n,3,0,!1)),mi.setAttribute("uv",new Xs(n,2,3,!1))}this.geometry=mi,this.material=e,this.center=new Re(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),gi.setFromMatrixScale(this.matrixWorld),Xl.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),vi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&gi.multiplyScalar(-vi.z);const n=this.material.rotation;let i,a;n!==0&&(a=Math.cos(n),i=Math.sin(n));const r=this.center;Ds(Ps.set(-.5,-.5,0),vi,r,gi,i,a),Ds(Wi.set(.5,-.5,0),vi,r,gi,i,a),Ds(Ls.set(.5,.5,0),vi,r,gi,i,a),Ko.set(0,0),Na.set(1,0),Zo.set(1,1);let o=e.ray.intersectTriangle(Ps,Wi,Ls,!1,Vi);if(o===null&&(Ds(Wi.set(-.5,.5,0),vi,r,gi,i,a),Na.set(0,1),o=e.ray.intersectTriangle(Ps,Ls,Wi,!1,Vi),o===null))return;const l=e.ray.origin.distanceTo(Vi);l<e.near||l>e.far||t.push({distance:l,point:Vi.clone(),uv:qt.getInterpolation(Vi,Ps,Wi,Ls,Ko,Na,Zo,new Re),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Ds(s,e,t,n,i,a){yi.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(Hi.x=a*yi.x-i*yi.y,Hi.y=i*yi.x+a*yi.y):Hi.copy(yi),s.copy(e),s.x+=Hi.x,s.y+=Hi.y,s.applyMatrix4(Xl)}class _m extends Un{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ys=new P,js=new P,Qo=new ot,$i=new kr,Is=new as,Fa=new P,Jo=new P;class bm extends mt{constructor(e=new _t,t=new _m){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,a=t.count;i<a;i++)Ys.fromBufferAttribute(t,i-1),js.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Ys.distanceTo(js);e.setAttribute("lineDistance",new ht(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,a=e.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Is.copy(n.boundingSphere),Is.applyMatrix4(i),Is.radius+=a,e.ray.intersectsSphere(Is)===!1)return;Qo.copy(i).invert(),$i.copy(e.ray).applyMatrix4(Qo);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,d=n.index,u=n.attributes.position;if(d!==null){const p=Math.max(0,r.start),g=Math.min(d.count,r.start+r.count);for(let v=p,m=g-1;v<m;v+=c){const f=d.getX(v),x=d.getX(v+1),E=Us(this,e,$i,l,f,x);E&&t.push(E)}if(this.isLineLoop){const v=d.getX(g-1),m=d.getX(p),f=Us(this,e,$i,l,v,m);f&&t.push(f)}}else{const p=Math.max(0,r.start),g=Math.min(u.count,r.start+r.count);for(let v=p,m=g-1;v<m;v+=c){const f=Us(this,e,$i,l,v,v+1);f&&t.push(f)}if(this.isLineLoop){const v=Us(this,e,$i,l,g-1,p);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=i.length;a<r;a++){const o=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function Us(s,e,t,n,i,a){const r=s.geometry.attributes.position;if(Ys.fromBufferAttribute(r,i),js.fromBufferAttribute(r,a),t.distanceSqToSegment(Ys,js,Fa,Jo)>n)return;Fa.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(Fa);if(!(l<e.near||l>e.far))return{distance:l,point:Jo.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const el=new P,tl=new P;class Sm extends bm{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,a=t.count;i<a;i+=2)el.fromBufferAttribute(t,i),tl.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+el.distanceTo(tl);e.setAttribute("lineDistance",new ht(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class xm extends Un{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const nl=new ot,Cr=new kr,Ns=new as,Fs=new P;class jl extends mt{constructor(e=new _t,t=new xm){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,a=e.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ns.copy(n.boundingSphere),Ns.applyMatrix4(i),Ns.radius+=a,e.ray.intersectsSphere(Ns)===!1)return;nl.copy(i).invert(),Cr.copy(e.ray).applyMatrix4(nl);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const u=Math.max(0,r.start),p=Math.min(c.count,r.start+r.count);for(let g=u,v=p;g<v;g++){const m=c.getX(g);Fs.fromBufferAttribute(h,m),il(Fs,m,l,i,e,t,this)}}else{const u=Math.max(0,r.start),p=Math.min(h.count,r.start+r.count);for(let g=u,v=p;g<v;g++)Fs.fromBufferAttribute(h,g),il(Fs,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=i.length;a<r;a++){const o=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function il(s,e,t,n,i,a,r){const o=Cr.distanceSqToPoint(s);if(o<t){const l=new P;Cr.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:r})}}class bt extends Lt{constructor(e,t,n,i,a,r,o,l,c){super(e,t,n,i,a,r,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class na extends _t{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const a=[],r=[],o=[],l=[],c=new P,d=new Re;r.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,u=3;h<=t;h++,u+=3){const p=n+h/t*i;c.x=e*Math.cos(p),c.y=e*Math.sin(p),r.push(c.x,c.y,c.z),o.push(0,0,1),d.x=(r[u]/e+1)/2,d.y=(r[u+1]/e+1)/2,l.push(d.x,d.y)}for(let h=1;h<=t;h++)a.push(h,h+1,0);this.setIndex(a),this.setAttribute("position",new ht(r,3)),this.setAttribute("normal",new ht(o,3)),this.setAttribute("uv",new ht(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new na(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Bt extends _t{constructor(e=1,t=1,n=1,i=32,a=1,r=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:a,openEnded:r,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),a=Math.floor(a);const d=[],h=[],u=[],p=[];let g=0;const v=[],m=n/2;let f=0;x(),r===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(d),this.setAttribute("position",new ht(h,3)),this.setAttribute("normal",new ht(u,3)),this.setAttribute("uv",new ht(p,2));function x(){const _=new P,L=new P;let C=0;const w=(t-e)/n;for(let R=0;R<=a;R++){const S=[],M=R/a,A=M*(t-e)+e;for(let B=0;B<=i;B++){const F=B/i,O=F*l+o,W=Math.sin(O),$=Math.cos(O);L.x=A*W,L.y=-M*n+m,L.z=A*$,h.push(L.x,L.y,L.z),_.set(W,w,$).normalize(),u.push(_.x,_.y,_.z),p.push(F,1-M),S.push(g++)}v.push(S)}for(let R=0;R<i;R++)for(let S=0;S<a;S++){const M=v[S][R],A=v[S+1][R],B=v[S+1][R+1],F=v[S][R+1];(e>0||S!==0)&&(d.push(M,A,F),C+=3),(t>0||S!==a-1)&&(d.push(A,B,F),C+=3)}c.addGroup(f,C,0),f+=C}function E(_){const L=g,C=new Re,w=new P;let R=0;const S=_===!0?e:t,M=_===!0?1:-1;for(let B=1;B<=i;B++)h.push(0,m*M,0),u.push(0,M,0),p.push(.5,.5),g++;const A=g;for(let B=0;B<=i;B++){const O=B/i*l+o,W=Math.cos(O),$=Math.sin(O);w.x=S*$,w.y=m*M,w.z=S*W,h.push(w.x,w.y,w.z),u.push(0,M,0),C.x=W*.5+.5,C.y=$*.5*M+.5,p.push(C.x,C.y),g++}for(let B=0;B<i;B++){const F=L+B,O=A+B;_===!0?d.push(O,O+1,F):d.push(O+1,O,F),R+=3}c.addGroup(f,R,_===!0?1:2),f+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ia extends Bt{constructor(e=1,t=1,n=32,i=1,a=!1,r=0,o=Math.PI*2){super(0,e,t,n,i,a,r,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:a,thetaStart:r,thetaLength:o}}static fromJSON(e){return new ia(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Gr extends _t{constructor(e=.5,t=1,n=32,i=1,a=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:a,thetaLength:r},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],d=[];let h=e;const u=(t-e)/i,p=new P,g=new Re;for(let v=0;v<=i;v++){for(let m=0;m<=n;m++){const f=a+m/n*r;p.x=h*Math.cos(f),p.y=h*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,d.push(g.x,g.y)}h+=u}for(let v=0;v<i;v++){const m=v*(n+1);for(let f=0;f<n;f++){const x=f+m,E=x,_=x+n+1,L=x+n+2,C=x+1;o.push(E,_,C),o.push(_,L,C)}}this.setIndex(o),this.setAttribute("position",new ht(l,3)),this.setAttribute("normal",new ht(c,3)),this.setAttribute("uv",new ht(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gr(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Vr extends _t{constructor(e=1,t=.4,n=12,i=48,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:a},n=Math.floor(n),i=Math.floor(i);const r=[],o=[],l=[],c=[],d=new P,h=new P,u=new P;for(let p=0;p<=n;p++)for(let g=0;g<=i;g++){const v=g/i*a,m=p/n*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(v),h.y=(e+t*Math.cos(m))*Math.sin(v),h.z=t*Math.sin(m),o.push(h.x,h.y,h.z),d.x=e*Math.cos(v),d.y=e*Math.sin(v),u.subVectors(h,d).normalize(),l.push(u.x,u.y,u.z),c.push(g/i),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=i;g++){const v=(i+1)*p+g-1,m=(i+1)*(p-1)+g-1,f=(i+1)*(p-1)+g,x=(i+1)*p+g;r.push(v,m,x),r.push(m,f,x)}this.setIndex(r),this.setAttribute("position",new ht(o,3)),this.setAttribute("normal",new ht(l,3)),this.setAttribute("uv",new ht(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vr(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Rt extends Un{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Al,this.normalScale=new Re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Em extends Rt{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Re(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Tt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ke(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ke(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ke(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class sa extends mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Tm extends sa{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ke(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ka=new ot,sl=new P,al=new P;class Kl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Re(512,512),this.map=null,this.mapPass=null,this.matrix=new ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Br,this._frameExtents=new Re(1,1),this._viewportCount=1,this._viewports=[new st(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;sl.setFromMatrixPosition(e.matrixWorld),t.position.copy(sl),al.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(al),t.updateMatrixWorld(),ka.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ka),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ka)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const rl=new ot,qi=new P,Ba=new P;class wm extends Kl{constructor(){super(new Ot(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Re(4,2),this._viewportCount=6,this._viewports=[new st(2,1,1,1),new st(0,1,1,1),new st(3,1,1,1),new st(1,1,1,1),new st(3,0,1,1),new st(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,a=e.distance||n.far;a!==n.far&&(n.far=a,n.updateProjectionMatrix()),qi.setFromMatrixPosition(e.matrixWorld),n.position.copy(qi),Ba.copy(n.position),Ba.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ba),n.updateMatrixWorld(),i.makeTranslation(-qi.x,-qi.y,-qi.z),rl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rl)}}class Si extends sa{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new wm}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Cm extends Kl{constructor(){super(new ea(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ol extends sa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.shadow=new Cm}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Am extends sa{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Zl{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ll(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=ll();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function ll(){return performance.now()}class Rm extends Jn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rr);const Pm=s=>{let e;const t=new Set,n=(c,d)=>{const h=typeof c=="function"?c(e):c;if(!Object.is(h,e)){const u=e;e=d??(typeof h!="object"||h===null)?h:Object.assign({},e,h),t.forEach(p=>p(e,u))}},i=()=>e,o={setState:n,getState:i,getInitialState:()=>l,subscribe:c=>(t.add(c),()=>t.delete(c))},l=e=s(n,i,o);return o},Lm=(s=>Pm);var we=(s=>(s.Walk="walk",s.Telescope="telescope",s.Studio="studio",s.Menu="menu",s))(we||{}),qe=(s=>(s.Clear="clear",s.PartlyCloudy="partly_cloudy",s.Cloudy="cloudy",s.Rainy="rainy",s))(qe||{}),He=(s=>(s.SSS="SSS",s.S="S",s.A="A",s.B="B",s.C="C",s.D="D",s))(He||{}),et=(s=>(s.StarField="star_field",s.Planet="planet",s.Messier="messier",s.SpecialEvent="special_event",s))(et||{});const Ks=[{id:"hehuanshan",name:"合歡山暗空公園",nameEn:"Hehuan Mountain Dark Sky Park",latitude:24.1433,longitude:121.2858,altitude:3275,lightPollution:.1,description:"台灣第一座國際暗空公園，海拔3275公尺，冬季銀河拱橋絕佳觀測地。"},{id:"mauna_kea",name:"茂納凱亞天文台",nameEn:"Mauna Kea Observatory",latitude:19.8207,longitude:-155.4681,altitude:4207,lightPollution:.05,description:"夏威夷最高峰，全球最佳天文觀測站之一，海拔4207公尺。"},{id:"atacama",name:"阿塔卡馬沙漠",nameEn:"Atacama Desert, Chile",latitude:-24.6275,longitude:-70.4044,altitude:2635,lightPollution:.02,description:"地球上最乾燥的沙漠，極低光害，ESO天文台所在地。"},{id:"uluru",name:"烏魯魯（艾爾斯岩）",nameEn:"Uluru, Australia",latitude:-25.3444,longitude:131.0369,altitude:863,lightPollution:.08,description:"澳洲中部紅土荒野，南半球絕佳觀星地，可見南十字和麥哲倫雲。"},{id:"la_palma",name:"拉帕爾馬天文台",nameEn:"Roque de los Muchachos, La Palma",latitude:28.7606,longitude:-17.8816,altitude:2396,lightPollution:.03,description:"加那利群島，歐洲北半球最大的天文觀測站群。"},{id:"namib",name:"納米比沙漠",nameEn:"NamibRand Nature Reserve",latitude:-25.0494,longitude:15.9924,altitude:1200,lightPollution:.01,description:"非洲首座國際暗空保護區，世界上光害最低的地方之一。"}],Zn=[{level:1,name:"入門折射鏡 60mm",apertureMm:60,limitingMagnitude:10,minFov:2.5,maxFov:60,chromaticAberration:.7,trackingAccuracy:.2,price:0},{level:2,name:"中階牛頓反射鏡 150mm",apertureMm:150,limitingMagnitude:12,minFov:1,maxFov:60,chromaticAberration:.1,trackingAccuracy:.5,price:500},{level:3,name:"施密特-卡塞格林 200mm",apertureMm:200,limitingMagnitude:13.5,minFov:.5,maxFov:60,chromaticAberration:.2,trackingAccuracy:.7,price:2e3},{level:4,name:"高階 APO 折射鏡 130mm",apertureMm:130,limitingMagnitude:12.5,minFov:.8,maxFov:60,chromaticAberration:.02,trackingAccuracy:.85,price:3500},{level:5,name:"天文台級 RC 鏡 350mm",apertureMm:350,limitingMagnitude:15,minFov:.2,maxFov:60,chromaticAberration:.01,trackingAccuracy:.95,price:8e3}],Dm=[{id:"eyepiece_wide",name:"廣角目鏡 32mm",type:"eyepiece",description:"82° 超廣角視野，適合觀測大範圍星野。",price:200,effects:{maxFovBonus:5,minFovBonus:.5},owned:!1},{id:"eyepiece_barlow",name:"巴羅鏡 2x",type:"eyepiece",description:"倍增放大倍率，適合行星觀測。",price:150,effects:{minFovMultiplier:.5},owned:!1},{id:"filter_halpha",name:"H-alpha 窄帶濾鏡",type:"filter",description:"增強氫元素發射星雲的對比度。",price:300,effects:{nebulaBonus:1.5},owned:!1},{id:"filter_oiii",name:"OIII 窄帶濾鏡",type:"filter",description:"增強氧元素行星狀星雲的對比度。",price:350,effects:{planetaryNebulaBonus:1.8},owned:!1},{id:"filter_light_pollution",name:"光害濾鏡",type:"filter",description:"減少光害影響，提升暗淡天體可見度。",price:180,effects:{lightPollutionReduction:.3},owned:!1},{id:"camera_cooled",name:"製冷 CCD 相機",type:"camera",description:"降低感光元件熱雜訊，長曝光效果大幅提升。",price:1200,effects:{exposureGain:1.5,noiseReduction:.5},owned:!1},{id:"camera_cmos",name:"高量子效率 CMOS 相機",type:"camera",description:"最新 BSI CMOS 感光元件，量子效率 >90%。",price:2500,effects:{exposureGain:2,noiseReduction:.7},owned:!1},{id:"finder_red_dot",name:"紅點尋星導航儀",type:"mount",description:"在望遠鏡目鏡頂部投射即時電子導航箭頭與距離角度，指引鏡筒快速對準深空天體。",price:300,effects:{finderNav:1},owned:!1},{id:"mount_eq",name:"赤道儀升級",type:"mount",description:"精密赤道儀追蹤，消除長曝光星跡。",price:800,effects:{trackingAccuracyBonus:.3},owned:!1},{id:"mount_goto",name:"GoTo 電子自動尋星系統",type:"mount",description:"高精度自動天體跟蹤與電子尋星羅盤，大幅提升目標定位精確度與曝光穩定度。",price:1200,effects:{trackingAccuracyBonus:.5,finderNav:1,autoFind:1},owned:!1}];function Im(s){return Zn.find(e=>e.level===s)??Zn[0]}const Hr="stargazer_sim_save_v1";function Um(){try{const s=localStorage.getItem(Hr);if(!s)return null;const e=JSON.parse(s);return e&&Array.isArray(e.photos)&&(e.photos=e.photos.map(t=>({...t,timestamp:t.timestamp?new Date(t.timestamp):new Date}))),e}catch(s){return console.warn("[Storage] Failed to load save data:",s),null}}let Oa=null;function Nm(s){Oa&&clearTimeout(Oa),Oa=setTimeout(()=>{try{const e={money:s.money,telescopeLevel:s.telescopeLevel,accessories:s.accessories,photos:(s.photos||[]).slice(0,40),unlockedLocations:s.unlockedLocations,completedQuestIds:s.completedQuestIds||[],discoveredTargets:s.discoveredTargets||[],masterVolume:s.masterVolume,machineVolume:s.machineVolume,ambientVolume:s.ambientVolume,weatherVolume:s.weatherVolume,sfxVolume:s.sfxVolume,isMuted:s.isMuted};localStorage.setItem(Hr,JSON.stringify(e))}catch(e){console.warn("[Storage] Auto-save error:",e)}},400)}const kt=Um(),te=Lm()((s,e)=>({currentTime:new Date,timeScale:1,isTimePaused:!1,currentLocation:Ks[0],unlockedLocations:kt?.unlockedLocations||[Ks[0].id],money:kt?.money??0,telescopeLevel:kt?.telescopeLevel??1,accessories:kt?.accessories||JSON.parse(JSON.stringify(Dm)),photos:kt?.photos||[],gameMode:we.Walk,weather:qe.Clear,weatherTimer:300,telescopeRa:0,telescopeDec:45,telescopeAzimuth:180,telescopeAltitude:45,currentFov:60,isExposing:!1,exposureElapsed:0,exposureProgress:0,exposureDuration:30,currentFrameType:"light",setFrameType:t=>s({currentFrameType:t}),completedQuestIds:kt?.completedQuestIds||[],discoveredTargets:kt?.discoveredTargets||[],timeReversalCostPerHour:50,masterVolume:kt?.masterVolume??.7,machineVolume:kt?.machineVolume??.7,ambientVolume:kt?.ambientVolume??.8,weatherVolume:kt?.weatherVolume??.8,sfxVolume:kt?.sfxVolume??.8,isMuted:kt?.isMuted??!1,showConstellations:!0,showStarNames:!0,showGrid:!1,isUIVisible:!0,toggleUIVisibility:()=>s(t=>({isUIVisible:!t.isUIVisible})),setMasterVolume:t=>s({masterVolume:Math.max(0,Math.min(1,t))}),setMachineVolume:t=>s({machineVolume:Math.max(0,Math.min(1,t))}),setAmbientVolume:t=>s({ambientVolume:Math.max(0,Math.min(1,t))}),setWeatherVolume:t=>s({weatherVolume:Math.max(0,Math.min(1,t))}),setSfxVolume:t=>s({sfxVolume:Math.max(0,Math.min(1,t))}),toggleMute:()=>s(t=>({isMuted:!t.isMuted})),setGameMode:t=>s({gameMode:t}),setTimeScale:t=>s({timeScale:Math.max(0,t)}),toggleTimePause:()=>s(t=>({isTimePaused:!t.isTimePaused})),advanceTime:t=>s(n=>n.isTimePaused?{}:{currentTime:new Date(n.currentTime.getTime()+t*n.timeScale)}),reverseTime:t=>(s(n=>({currentTime:new Date(n.currentTime.getTime()-t*36e5)})),!0),advanceTimeHours:t=>{s(n=>({currentTime:new Date(n.currentTime.getTime()+t*36e5)}))},advanceTimeDays:t=>{s(n=>{const i=new Date(n.currentTime);return i.setDate(i.getDate()+t),{currentTime:i}})},advanceTimeYears:t=>{s(n=>{const i=new Date(n.currentTime);return i.setFullYear(i.getFullYear()+t),{currentTime:i}})},resetToRealTime:()=>{s({currentTime:new Date})},setTime:t=>{s({currentTime:t})},setWeather:t=>s({weather:t}),setWeatherTimer:t=>s({weatherTimer:t}),setLocation:t=>s({currentLocation:t}),unlockLocation:t=>s(n=>n.unlockedLocations.includes(t)?{}:{unlockedLocations:[...n.unlockedLocations,t]}),addMoney:t=>s(n=>({money:n.money+t})),spendMoney:t=>{const n=e();return n.money<t?!1:(s({money:n.money-t}),!0)},addPhoto:t=>s(n=>({photos:[...n.photos,t]})),deletePhoto:t=>s(n=>({photos:n.photos.filter(i=>i.id!==t)})),sellPhoto:t=>{const n=e(),i=n.photos.find(a=>a.id===t);return!i||i.sold||i.frameType&&i.frameType!=="light"?0:(s({money:n.money+i.sellPrice,photos:n.photos.map(a=>a.id===t?{...a,sold:!0}:a)}),i.sellPrice)},sellAllPhotos:()=>{const t=e(),i=t.photos.filter(a=>!a.sold&&(!a.frameType||a.frameType==="light")).reduce((a,r)=>a+r.sellPrice,0);return i===0?0:(s({money:t.money+i,photos:t.photos.map(a=>!a.frameType||a.frameType==="light"?{...a,sold:!0}:a)}),i)},upgradeTelescope:t=>{const n=e(),i=Zn.find(a=>a.level===t);return!i||n.money<i.price||n.telescopeLevel>=t?!1:(s({money:n.money-i.price,telescopeLevel:t}),!0)},buyAccessory:t=>{const n=e(),i=n.accessories.findIndex(o=>o.id===t);if(i===-1)return!1;const a=n.accessories[i];if(a.owned||n.money<a.price)return!1;const r=[...n.accessories];return r[i]={...a,owned:!0},s({money:n.money-a.price,accessories:r}),!0},setTelescopePointing:(t,n)=>s({telescopeRa:t,telescopeDec:n}),setTelescopeHorizontal:(t,n)=>s({telescopeAzimuth:t,telescopeAltitude:n}),setFov:t=>s({currentFov:t}),startExposure:t=>s(n=>({isExposing:!0,exposureDuration:t??n.exposureDuration,exposureProgress:0,exposureElapsed:0})),stopExposure:()=>s({isExposing:!1,exposureProgress:0,exposureElapsed:0}),updateExposureProgress:t=>s({exposureProgress:Math.min(1,t)}),updateExposureElapsed:t=>s({exposureElapsed:t}),toggleConstellations:()=>s(t=>({showConstellations:!t.showConstellations})),toggleStarNames:()=>s(t=>({showStarNames:!t.showStarNames})),toggleGrid:()=>s(t=>({showGrid:!t.showGrid})),customTrackedDsoId:null,setCustomTrackedDso:t=>s({customTrackedDsoId:t}),resetSaveData:()=>{try{localStorage.removeItem(Hr),location.reload()}catch(t){console.warn("Failed to clear save data:",t)}}}));te.subscribe(s=>{Nm(s)});const Ql=[{name:"大犬座α · 天狼星 Sirius",ra:6.752,dec:-16.716,mag:-1.46,bv:0,hip:32349},{name:"船底座α · 老人星 Canopus",ra:6.399,dec:-52.696,mag:-.72,bv:.15,hip:30438},{name:"半人馬座α · 南門二 Alpha Centauri",ra:14.661,dec:-60.835,mag:-.01,bv:.71,hip:71683},{name:"牧夫座α · 大角星 Arcturus",ra:14.261,dec:19.182,mag:-.05,bv:1.23,hip:69673},{name:"天琴座α · 織女星 Vega",ra:18.616,dec:38.784,mag:.03,bv:0,hip:91262},{name:"御夫座α · 五車二 Capella",ra:5.278,dec:45.998,mag:.08,bv:.8,hip:24608},{name:"獵戶座β · 參宿七 Rigel",ra:5.242,dec:-8.202,mag:.18,bv:-.03,hip:24436},{name:"小犬座α · 南河三 Procyon",ra:7.655,dec:5.225,mag:.34,bv:.42,hip:37279},{name:"獵戶座α · 參宿四 Betelgeuse",ra:5.92,dec:7.407,mag:.42,bv:1.85,hip:27989},{name:"波江座α · 水委一 Achernar",ra:1.629,dec:-57.237,mag:.45,bv:-.16,hip:7588},{name:"半人馬座β · 馬腹一 Hadar",ra:14.064,dec:-60.373,mag:.61,bv:-.23,hip:68702},{name:"天鷹座α · 河鼓二 牛郎星 Altair",ra:19.846,dec:8.868,mag:.76,bv:.22,hip:97649},{name:"南十字座α · 十字架二 Acrux",ra:12.443,dec:-63.099,mag:.77,bv:-.24,hip:60718},{name:"金牛座α · 畢宿五 Aldebaran",ra:4.599,dec:16.509,mag:.87,bv:1.54,hip:21421},{name:"室女座α · 角宿一 Spica",ra:13.42,dec:-11.161,mag:.98,bv:-.24,hip:65474},{name:"天蠍座α · 心宿二 Antares",ra:16.49,dec:-26.432,mag:1.06,bv:1.83,hip:80763},{name:"雙子座β · 北河三 Pollux",ra:7.755,dec:28.026,mag:1.16,bv:1,hip:37826},{name:"南魚座α · 北落師門 Fomalhaut",ra:22.961,dec:-29.622,mag:1.17,bv:.09,hip:113368},{name:"天鵝座α · 天津四 Deneb",ra:20.69,dec:45.28,mag:1.25,bv:.09,hip:102098},{name:"南十字座β · 十字架三 Mimosa",ra:12.795,dec:-59.689,mag:1.25,bv:-.23,hip:62434},{name:"獅子座α · 軒轅十四 Regulus",ra:10.14,dec:11.967,mag:1.36,bv:-.11,hip:49669},{name:"大犬座ε · 弧矢一 Adhara",ra:6.977,dec:-28.972,mag:1.5,bv:-.21,hip:33579},{name:"雙子座α · 北河二 Castor",ra:7.577,dec:31.888,mag:1.58,bv:.03,hip:36850},{name:"南十字座γ · 十字架一 Gacrux",ra:12.519,dec:-57.113,mag:1.59,bv:1.6,hip:61084},{name:"天蠍座λ · 尾宿八 Shaula",ra:17.56,dec:-37.104,mag:1.62,bv:-.22,hip:85927},{name:"獵戶座γ · 參宿五 Bellatrix",ra:5.419,dec:6.35,mag:1.64,bv:-.22,hip:25336},{name:"金牛座β · 五車五 Elnath",ra:5.438,dec:28.608,mag:1.65,bv:-.13,hip:25428},{name:"小熊座α · 北極星 Polaris",ra:2.53,dec:89.264,mag:1.98,bv:.6,hip:11767},{name:"獵戶座ε · 參宿一 (腰帶中) Alnilam",ra:5.604,dec:-1.202,mag:1.69,bv:-.18,hip:26311},{name:"獵戶座ζ · 參宿三 (腰帶左) Alnitak",ra:5.679,dec:-1.943,mag:1.74,bv:-.21,hip:26727},{name:"獵戶座δ · 參宿二 (腰帶右) Mintaka",ra:5.533,dec:-.299,mag:2.25,bv:-.18,hip:25930},{name:"獵戶座κ · 參宿六 Saiph",ra:5.796,dec:-9.67,mag:2.07,bv:-.18,hip:27366},{name:"獵戶座λ · 觜宿一 Meissa",ra:5.585,dec:9.934,mag:3.39,bv:-.17,hip:26207},{name:"獵戶座θ1 · 伐二 (四合星) Trapezium",ra:5.589,dec:-5.387,mag:4.98,bv:-.15,hip:26220},{name:"獵戶座ι · 伐三 Hatsya",ra:5.591,dec:-5.9,mag:2.75,bv:-.24,hip:26241},{name:"獵戶座c · 伐一",ra:5.589,dec:-4.834,mag:4.58,bv:-.2,hip:26233},{name:"獵戶座π3 · 參宿增九 Tabit",ra:4.828,dec:6.961,mag:3.16,bv:.45,hip:22449},{name:"獵戶座η · 參宿增二 Saif al Jabbar",ra:5.407,dec:-2.397,mag:3.38,bv:-.17,hip:25281},{name:"大熊座α · 天樞 (北斗一) Dubhe",ra:11.062,dec:61.751,mag:1.81,bv:1.07,hip:54061},{name:"大熊座β · 天璇 (北斗二) Merak",ra:11.031,dec:56.382,mag:2.34,bv:.03,hip:53910},{name:"大熊座γ · 天璣 (北斗三) Phecda",ra:11.897,dec:53.695,mag:2.41,bv:.04,hip:58001},{name:"大熊座δ · 天權 (北斗四) Megrez",ra:12.257,dec:57.033,mag:3.32,bv:.08,hip:59774},{name:"大熊座ε · 玉衡 (北斗五) Alioth",ra:12.9,dec:55.96,mag:1.76,bv:-.02,hip:62956},{name:"大熊座ζ · 開陽 (北斗六) Mizar",ra:13.399,dec:54.926,mag:2.23,bv:.02,hip:65378},{name:"大熊座80 · 輔星 Alcor",ra:13.419,dec:54.988,mag:3.99,bv:.16,hip:65477},{name:"大熊座η · 搖光 (北斗七) Alkaid",ra:13.792,dec:49.313,mag:1.85,bv:-.1,hip:67301},{name:"大熊座θ · 文昌四",ra:9.549,dec:51.68,mag:3.17,bv:.4,hip:46853},{name:"大熊座ι · 上台一 Talitha",ra:8.986,dec:48.042,mag:3.12,bv:.2,hip:44127},{name:"大熊座μ · 中台一 Tania Australis",ra:10.373,dec:41.499,mag:3.06,bv:1.58,hip:50801},{name:"大熊座ν · 下台一 Alula Borealis",ra:11.311,dec:33.094,mag:3.49,bv:1.39,hip:55219},{name:"大熊座ξ · 下台二 Alula Australis",ra:11.305,dec:31.53,mag:3.79,bv:.59,hip:55203},{name:"仙后座α · 王良四 Schedar",ra:.675,dec:56.537,mag:2.24,bv:1.17,hip:3179},{name:"仙后座β · 王良一 Caph",ra:.153,dec:59.15,mag:2.28,bv:.34,hip:746},{name:"仙后座γ · 策 Navi",ra:.945,dec:60.717,mag:2.15,bv:-.15,hip:4427},{name:"仙后座δ · 閣道四 Ruchbah",ra:1.429,dec:60.235,mag:2.66,bv:.13,hip:6686},{name:"仙后座ε · 閣道二 Segin",ra:1.905,dec:63.67,mag:3.35,bv:-.15,hip:8886},{name:"仙后座η · 閣道三 Achird",ra:.818,dec:57.815,mag:3.46,bv:.58,hip:3821},{name:"小熊座β · 帝星 Kochab",ra:14.845,dec:74.156,mag:2.07,bv:1.47,hip:72607},{name:"小熊座γ · 太子 Pherkad",ra:15.346,dec:71.834,mag:3,bv:.05,hip:75097},{name:"小熊座δ · 勾陳二 Yildun",ra:17.537,dec:86.586,mag:4.35,bv:.02,hip:85822},{name:"仙女座α · 壁宿二 Alpheratz",ra:.139,dec:29.09,mag:2.07,bv:-.04,hip:677},{name:"仙女座β · 奎宿九 Mirach",ra:1.162,dec:35.621,mag:2.07,bv:1.58,hip:5447},{name:"仙女座γ · 天大將軍一 Almach",ra:2.065,dec:42.332,mag:2.1,bv:1.37,hip:9640},{name:"仙女座δ · 奎宿七",ra:.656,dec:30.861,mag:3.27,bv:1.28,hip:3092},{name:"仙女座μ · 奎宿八 (M31旁)",ra:.945,dec:38.499,mag:3.86,bv:.29,hip:4436},{name:"仙女座ν · 奎宿七 (M31旁)",ra:.829,dec:41.082,mag:4.53,bv:-.09,hip:3881},{name:"飛馬座α · 室宿一 Markab",ra:23.079,dec:15.205,mag:2.49,bv:-.04,hip:113963},{name:"飛馬座β · 室宿二 Scheat",ra:23.063,dec:28.083,mag:2.44,bv:1.65,hip:113881},{name:"飛馬座γ · 壁宿一 Algenib",ra:.221,dec:15.183,mag:2.84,bv:-.19,hip:1067},{name:"飛馬座ε · 危宿三 Enif",ra:21.736,dec:9.875,mag:2.38,bv:1.53,hip:107315},{name:"飛馬座η · 離宮四 Matar",ra:22.717,dec:30.221,mag:2.93,bv:.85,hip:112158},{name:"飛馬座ζ · 雷電一 Homam",ra:22.69,dec:10.831,mag:3.41,bv:-.09,hip:112029},{name:"金牛座ζ · 天關 (M1旁) Tianguan",ra:5.627,dec:21.143,mag:2.97,bv:-.19,hip:26451},{name:"金牛座η · 昴宿六 (七姊妹主星) Alcyone",ra:3.791,dec:24.105,mag:2.85,bv:-.09,hip:17702},{name:"金牛座27 · 昴宿七 Atlas",ra:3.821,dec:24.053,mag:3.62,bv:-.09,hip:17847},{name:"金牛座17 · 昴宿一 Electra",ra:3.748,dec:24.11,mag:3.72,bv:-.11,hip:17499},{name:"金牛座20 · 昴宿二 Maia",ra:3.763,dec:24.368,mag:3.87,bv:-.07,hip:17573},{name:"金牛座23 · 昴宿五 Merope",ra:3.774,dec:23.948,mag:4.14,bv:-.07,hip:17608},{name:"金牛座λ · 畢宿八",ra:4.011,dec:12.49,mag:3.41,bv:-.12,hip:18724},{name:"金牛座θ2 · 畢宿六 Chamukuy",ra:4.477,dec:15.992,mag:3.4,bv:.16,hip:20894},{name:"英仙座α · 天船三 Mirfak",ra:3.405,dec:49.861,mag:1.79,bv:.48,hip:15863},{name:"英仙座β · 大陵五 (著名食變星) Algol",ra:3.136,dec:40.957,mag:2.09,bv:-.05,hip:14576},{name:"英仙座ζ · 卷舌四 Menkib",ra:3.902,dec:31.883,mag:2.84,bv:.33,hip:18246},{name:"英仙座ε · 卷舌二",ra:3.964,dec:40.01,mag:2.9,bv:-.18,hip:18532},{name:"英仙座γ · 天船二",ra:3.079,dec:53.506,mag:2.91,bv:.7,hip:14328},{name:"雙子座γ · 井宿三 Alhena",ra:6.628,dec:16.399,mag:1.93,bv:0,hip:31681},{name:"雙子座μ · 井宿一 Tejat",ra:6.383,dec:22.514,mag:2.87,bv:1.64,hip:30343},{name:"雙子座η · 鉞 (M35旁) Propus",ra:6.248,dec:22.506,mag:3.31,bv:1.59,hip:29655},{name:"雙子座δ · 井宿五 Wasat",ra:7.335,dec:21.982,mag:3.5,bv:.35,hip:35550},{name:"雙子座ε · 井宿八 Mebsuta",ra:6.732,dec:25.131,mag:3.06,bv:1.4,hip:32246},{name:"御夫座β · 五車三 Menkalinan",ra:5.993,dec:44.947,mag:1.9,bv:.03,hip:28360},{name:"御夫座θ · 五車四 Mahasim",ra:5.996,dec:37.214,mag:2.65,bv:.07,hip:28380},{name:"御夫座ι · 五車一 Hassaleh",ra:4.949,dec:33.166,mag:2.69,bv:1.3,hip:23015},{name:"御夫座ε · 柱一 Almaaz",ra:5.033,dec:43.823,mag:3.03,bv:.28,hip:23416},{name:"御夫座η · 柱三 Haedus II",ra:5.108,dec:41.235,mag:3.18,bv:-.18,hip:23767},{name:"天琴座β · 漸台二 (M57旁) Sheliak",ra:18.835,dec:33.363,mag:3.52,bv:-.05,hip:92420},{name:"天琴座γ · 漸台三 (M57旁) Sulafat",ra:18.982,dec:32.69,mag:3.25,bv:-.05,hip:93194},{name:"天琴座ε1 · 織女雙雙星 Epsilon 1",ra:18.739,dec:39.67,mag:4.67,bv:.07,hip:91919},{name:"天琴座δ2 · 漸台一",ra:18.909,dec:36.899,mag:4.22,bv:1.35,hip:92791},{name:"天鷹座γ · 河鼓一 Tarazed",ra:19.771,dec:10.613,mag:2.72,bv:1.52,hip:97278},{name:"天鷹座β · 河鼓三 Alshain",ra:19.922,dec:6.407,mag:3.71,bv:.86,hip:98036},{name:"天鷹座ζ · 天市左垣六 Okab",ra:19.09,dec:13.864,mag:2.99,bv:-.01,hip:93747},{name:"天鷹座θ · 天桴一",ra:20.187,dec:-.819,mag:3.24,bv:-.08,hip:99473},{name:"天鵝座γ · 天津九 Sadr",ra:20.37,dec:40.257,mag:2.23,bv:.68,hip:100453},{name:"天鵝座ε · 天津九 Gienah",ra:20.77,dec:33.97,mag:2.48,bv:1.03,hip:102488},{name:"天鵝座δ · 天津二 Fawaris",ra:19.749,dec:45.131,mag:2.86,bv:-.03,hip:97165},{name:"天鵝座β · 輦道增七 (金藍雙星) Albireo",ra:19.512,dec:27.96,mag:3.05,bv:1.13,hip:95947},{name:"天鵝座ζ · 車府增一",ra:21.215,dec:30.227,mag:3.21,bv:.98,hip:104732},{name:"天蠍座β · 房宿四 Acrab",ra:16.09,dec:-19.805,mag:2.56,bv:-.08,hip:78820},{name:"天蠍座δ · 房宿三 Dschubba",ra:16.006,dec:-22.622,mag:2.29,bv:-.13,hip:78401},{name:"天蠍座θ · 尾宿五 Sargas",ra:17.622,dec:-42.998,mag:1.86,bv:.4,hip:86228},{name:"天蠍座κ · 尾宿七 Girtab",ra:17.708,dec:-39.03,mag:2.39,bv:-.22,hip:86670},{name:"天蠍座ε · 尾宿二 Larawag",ra:16.837,dec:-34.293,mag:2.29,bv:1.15,hip:82396},{name:"天蠍座τ · 心宿三 Paikauhale",ra:16.598,dec:-28.216,mag:2.82,bv:-.25,hip:81266},{name:"天蠍座σ · 心宿一 Alniyat",ra:16.353,dec:-25.59,mag:2.89,bv:-.04,hip:80112},{name:"人馬座ε · 箕宿三 (茶壺底) Kaus Australis",ra:18.403,dec:-34.384,mag:1.79,bv:-.03,hip:90185},{name:"人馬座σ · 斗宿四 Nunki",ra:18.921,dec:-26.297,mag:2.05,bv:-.22,hip:92855},{name:"人馬座ζ · 斗宿六 Ascella",ra:19.044,dec:-29.88,mag:2.6,bv:.06,hip:93506},{name:"人馬座δ · 箕宿二 (茶壺嘴) Kaus Media",ra:18.349,dec:-29.828,mag:2.72,bv:1.38,hip:89931},{name:"人馬座λ · 斗宿二 (茶壺蓋) Kaus Borealis",ra:18.466,dec:-25.421,mag:2.82,bv:1.02,hip:90496},{name:"人馬座γ · 箕宿一 Alnasl",ra:18.096,dec:-30.424,mag:2.98,bv:1.03,hip:88635},{name:"人馬座π · 建三 Albaldah",ra:19.164,dec:-21.026,mag:2.88,bv:.35,hip:94141},{name:"人馬座η · 箕宿增一",ra:18.293,dec:-36.762,mag:3.1,bv:1.56,hip:89642},{name:"獅子座γ · 軒轅十二 Algieba",ra:10.333,dec:19.842,mag:2.01,bv:1.15,hip:50583},{name:"獅子座β · 五帝座一 Denebola",ra:11.818,dec:14.572,mag:2.14,bv:.09,hip:57632},{name:"獅子座δ · 太微右垣五 Zosma",ra:11.235,dec:20.524,mag:2.56,bv:.12,hip:54872},{name:"獅子座θ · 太微右垣四 Chertan",ra:11.237,dec:15.432,mag:3.33,bv:.12,hip:54879},{name:"室女座γ · 東次相 Porrima",ra:12.694,dec:-1.449,mag:2.74,bv:.36,hip:61941},{name:"室女座ε · 左執法 Vindemiatrix",ra:13.036,dec:10.959,mag:2.85,bv:.94,hip:63608},{name:"室女座β · 右執法 Zavijava",ra:11.844,dec:1.765,mag:3.59,bv:.55,hip:57757},{name:"牧夫座ε · 梗河一 Izar",ra:14.75,dec:27.074,mag:2.35,bv:.97,hip:72105},{name:"牧夫座η · 左攝提一 Muphrid",ra:13.911,dec:18.397,mag:2.68,bv:.58,hip:67927},{name:"牧夫座γ · 招搖 Seginus",ra:14.535,dec:38.308,mag:3.04,bv:.19,hip:71075},{name:"武仙座β · 天紀二 Kornephoros",ra:16.503,dec:21.483,mag:2.78,bv:.85,hip:80816},{name:"武仙座ζ · 天紀三 (M13旁)",ra:16.687,dec:31.603,mag:2.81,bv:.44,hip:81693},{name:"武仙座α · 帝座 Rasalgethi",ra:17.245,dec:14.39,mag:3.13,bv:1.45,hip:84345},{name:"北冕座α · 貫索四 Alphecca",ra:15.578,dec:26.715,mag:2.22,bv:.07,hip:76267},{name:"大犬座δ · 弧矢七 Wezen",ra:7.14,dec:-26.393,mag:1.83,bv:.67,hip:34444},{name:"大犬座β · 軍市一 Mirzam",ra:6.378,dec:-17.956,mag:1.98,bv:-.24,hip:30324},{name:"大犬座η · 弧矢二 Aludra",ra:7.402,dec:-29.303,mag:2.45,bv:-.07,hip:36188},{name:"白羊座α · 婁宿三 Hamal",ra:2.12,dec:23.462,mag:2.01,bv:1.15,hip:9884},{name:"白羊座β · 婁宿一 Sheratan",ra:1.911,dec:20.808,mag:2.64,bv:.14,hip:8903},{name:"鯨魚座β · 土司空 Diphda",ra:.726,dec:-17.987,mag:2.04,bv:1.02,hip:3419},{name:"鯨魚座α · 天囷一 Menkar",ra:3.038,dec:4.09,mag:2.54,bv:1.64,hip:14146},{name:"長蛇座α · 星宿一 Alphard",ra:9.46,dec:-8.658,mag:1.99,bv:1.44,hip:46390},{name:"仙王座α · 少衛增八 Alderamin",ra:21.31,dec:62.585,mag:2.45,bv:.22,hip:105199},{name:"仙王座β · 上衛增一 Alfirk",ra:21.479,dec:70.561,mag:3.23,bv:-.22,hip:106032},{name:"仙王座γ · 少衛一 Errai",ra:23.656,dec:77.632,mag:3.21,bv:1.03,hip:116727},{name:"仙王座μ · 造父四 (赫歇爾石榴星)",ra:21.725,dec:58.78,mag:4.08,bv:2.35,hip:107259},{name:"天兔座α · 廁一 Arneb",ra:5.545,dec:-17.822,mag:2.58,bv:.21,hip:25985},{name:"天兔座β · 廁二 Nihal",ra:5.47,dec:-20.76,mag:2.81,bv:.82,hip:25606},{name:"天秤座α · 氐宿一 Zubenelgenubi",ra:14.848,dec:-16.042,mag:2.75,bv:.15,hip:72622},{name:"天秤座β · 氐宿四 Zubeneschamali",ra:15.283,dec:-9.383,mag:2.61,bv:-.11,hip:74785},{name:"蛇夫座α · 候 Rasalhague",ra:17.582,dec:12.56,mag:2.08,bv:.15,hip:86032},{name:"蛇夫座η · 宋 Sabik",ra:17.173,dec:-15.725,mag:2.43,bv:.09,hip:84012},{name:"船尾座ζ · 弧矢增二十二 Naos",ra:8.06,dec:-40.003,mag:2.21,bv:-.27,hip:39429},{name:"船底座ε · 海石一 Avior",ra:8.375,dec:-59.509,mag:1.86,bv:1.2,hip:41037},{name:"船底座β · 南船二 Miaplacidus",ra:9.222,dec:-69.717,mag:1.67,bv:0,hip:45238}];function Fm(s){let e=4600*(1/(.92*s+1.7)+1/(.92*s+.62));e=Math.max(1e3,Math.min(4e4,e));const t=e/100;let n,i,a;return t<=66?n=255:n=329.698727446*Math.pow(t-60,-.1332047592),t<=66?i=99.4708025861*Math.log(t)-161.1195681661:i=288.1221695283*Math.pow(t-60,-.0755148492),t>=66?a=255:t<=19?a=0:a=138.5177312231*Math.log(t-10)-305.0447927307,[Math.max(0,Math.min(255,n))/255,Math.max(0,Math.min(255,i))/255,Math.max(0,Math.min(255,a))/255]}function km(s,e){const t=Math.PI/180,n=s*t,i=e*t,a=192.85948*t,r=27.12825*t,o=32.93192*t,l=Math.sin(r)*Math.sin(i)+Math.cos(r)*Math.cos(i)*Math.cos(n-o),c=Math.asin(Math.max(-1,Math.min(1,l))),d=Math.cos(i)*Math.sin(n-o),h=Math.cos(r)*Math.sin(i)-Math.sin(r)*Math.cos(i)*Math.cos(n-o);let u=(a+Math.atan2(d,h))/t;return u<0&&(u+=360),u>=360&&(u-=360),{ra:u/15,dec:c/t}}function Bm(s=45e3,e=42){const t=[];let n=e;const i=()=>{n|=0,n=n+1831565813|0;let l=Math.imul(n^n>>>15,1|n);return l=l+Math.imul(l^l>>>7,61|l)^l,((l^l>>>14)>>>0)/4294967296},a=()=>{const l=Math.max(1e-7,i()),c=i();return Math.sqrt(-2*Math.log(l))*Math.cos(2*Math.PI*c)},r=Math.floor(s*.65);for(let l=0;l<r;l++){let c,d;const h=i();h<.4?(c=(a()*24+360)%360,d=a()*4.5):h<.65?(c=(a()*18+78+360)%360,d=a()*5.5):h<.85?(c=(a()*25+195+360)%360,d=a()*6.5):(c=i()*360,d=a()*(i()<.6?4:9.5));const u=km(c,d);let p;h<.05?p=3.8+Math.pow(i(),.7)*1.2:p=5.2+Math.pow(i(),.6)*9.6;const g=-.25+i()*1.85;t.push({name:"",ra:u.ra,dec:u.dec,mag:p,bv:g})}const o=s-r;for(let l=0;l<o;l++){const c=i()*24,d=Math.asin(2*i()-1)*(180/Math.PI),h=i();let u;h<.08?u=3.5+Math.pow(i(),.75)*1.5:u=5.2+Math.pow(i(),.65)*9.6;const p=-.3+i()*2.1;t.push({name:"",ra:c,dec:d,mag:u,bv:p})}return t}class Om{constructor(e){this.points=null,this.material=null,this.geometry=null,this.scene=e,this.group=new zt,this.scene.add(this.group)}async loadStars(){let e=[],t=!0;try{const d=await fetch("/stars.bin");if(d.ok){const h=await d.arrayBuffer(),u=new Float32Array(h),p=u.length/8;e=new Array(p);for(let g=0;g<p;g++){const v=g*8;e[g]={x:u[v],y:u[v+1],z:u[v+2],r:u[v+3],g:u[v+4],b:u[v+5],mag:u[v+6]}}t=!1}}catch(d){console.warn("Failed to load stars.bin, using fallback",d)}t&&(e=[...Ql,...Bm(45e3)].map(d=>{const u=d.ra*Math.PI/12,p=d.dec*Math.PI/180,g=1e3*Math.cos(p)*Math.cos(u),v=1e3*Math.sin(p),m=1e3*Math.cos(p)*Math.sin(u),[f,x,E]=Fm(d.bv);return{x:g,y:v,z:m,r:f,g:x,b:E,mag:d.mag}}));const n=e.length,i=new Float32Array(n*3),a=new Float32Array(n*3),r=new Float32Array(n),o=new Float32Array(n);for(let d=0;d<n;d++){const h=e[d];i[d*3]=h.x,i[d*3+1]=h.y,i[d*3+2]=h.z,a[d*3]=h.r,a[d*3+1]=h.g,a[d*3+2]=h.b,r[d]=h.mag,o[d]=Math.random()*2.5+.5}this.geometry=new _t,this.geometry.setAttribute("position",new Mt(i,3)),this.geometry.setAttribute("aColor",new Mt(a,3)),this.geometry.setAttribute("aMagnitude",new Mt(r,1)),this.geometry.setAttribute("aTwinkleSpeed",new Mt(o,1));const l=`
            attribute vec3 aColor;
            attribute float aMagnitude;
            attribute float aTwinkleSpeed;
            
            uniform float uTime;
            uniform float uPixelRatio;
            uniform float uBaseSize;
            uniform float uCurrentFov;
            uniform float uMinFov;
            uniform float uLimitingMagnitude;
            
            varying vec3 vColor;
            varying float vMagnitude;
            varying float vTwinkle;
            varying vec3 vWorldPosition;
            
            void main() {
                vColor = aColor;
                vMagnitude = aMagnitude;
                
                vec4 worldPos = modelMatrix * vec4(position, 1.0);
                vWorldPosition = worldPos.xyz;
                
                vec4 mvPosition = viewMatrix * worldPos;
                gl_Position = projectionMatrix * mvPosition;
                
                // Strict Optical Limiting Magnitude: stars dimmer than threshold are completely culled
                if (aMagnitude > uLimitingMagnitude + 0.25) {
                    gl_PointSize = 0.0;
                    return;
                }
                float magExtinction = smoothstep(uLimitingMagnitude + 0.25, uLimitingMagnitude - 0.35, aMagnitude);
                
                float twinkle = 0.85 + 0.15 * sin(uTime * aTwinkleSpeed + position.x * 0.1);
                vTwinkle = twinkle;
                
                // Magnitude-based size scaling (apparent magnitude scale)
                // Mag -1 (Sirius) -> size ~ 8.0px, Mag 2 -> ~5.2px, Mag 4+ -> ~2.5px
                float magFactor = clamp((7.5 - aMagnitude) / 6.5, 0.25, 1.6);
                float fovZoom = pow(clamp(60.0 / max(uCurrentFov, 0.4), 1.0, 50.0), 0.35);
                
                float ptSize = uBaseSize * magFactor * fovZoom * uPixelRatio * twinkle * magExtinction;
                gl_PointSize = clamp(ptSize, 1.6, 22.0);
            }
        `,c=`
            uniform float uSunElevation;
            uniform float uLimitingMagnitude;
            varying vec3 vColor;
            varying float vMagnitude;
            varying float vTwinkle;
            varying vec3 vWorldPosition;
            
            void main() {
                // Strict Horizon Extinction: Discard stars below ground (y < 0)
                if (vWorldPosition.y < 0.0) discard;
                float horizonFade = smoothstep(0.0, 15.0, vWorldPosition.y);
                
                // Optical equipment limiting magnitude cutoff
                if (vMagnitude > uLimitingMagnitude + 0.15) discard;
                float magAlpha = smoothstep(uLimitingMagnitude + 0.15, uLimitingMagnitude - 0.3, vMagnitude);
                
                vec2 coord = gl_PointCoord * 2.0 - 1.0;
                float dist = length(coord);
                if (dist > 1.0) discard;
                
                // Gaussian Airy disk profile with crisp core and soft halo
                float core = exp(-dist * dist * 3.2);
                float halo = max(0.0, 1.0 - dist) * 0.3;
                float alpha = (core + halo) * horizonFade * magAlpha;
                
                // Daylight extinction based on sun elevation in degrees
                float sunElevDeg = uSunElevation * 57.2957795;
                float daylight = smoothstep(-12.0, 0.0, sunElevDeg);
                alpha *= max(0.0, 1.0 - daylight * 0.98);
                
                // Bright stars have brilliant luminous core
                vec3 finalColor = mix(vColor, vec3(1.0), (1.0 - dist) * clamp((3.5 - vMagnitude) * 0.25, 0.0, 0.7));
                
                gl_FragColor = vec4(finalColor * vTwinkle, alpha);
            }
        `;this.material=new pt({vertexShader:l,fragmentShader:c,uniforms:{uTime:{value:0},uPixelRatio:{value:Math.min(window.devicePixelRatio||1,2)},uBaseSize:{value:5.2},uCurrentFov:{value:60},uMinFov:{value:.2},uSunElevation:{value:-.2},uLimitingMagnitude:{value:6.5}},transparent:!0,blending:wi,depthWrite:!1}),this.points=new jl(this.geometry,this.material),this.group.add(this.points)}update(e,t,n,i=6.5){this.material&&(this.material.uniforms.uTime.value=e,this.material.uniforms.uCurrentFov.value=t,this.material.uniforms.uSunElevation.value=n,this.material.uniforms.uLimitingMagnitude.value=i)}setVisible(e){this.group.visible=e}getStarGroup(){return this.group}dispose(){this.geometry&&this.geometry.dispose(),this.material&&this.material.dispose(),this.points&&this.group.remove(this.points),this.scene.remove(this.group)}}class zm{constructor(e){this.scene=e,this.group=new zt,this.scene.add(this.group)}updateOrientation(e,t,n){const r=(18.697374558+24.06570982441908*(n.getTime()/864e5+24405875e-1-2451545))%24,l=((r<0?r+24:r)+t/15)%24,d=(l<0?l+24:l)*Math.PI/12,h=e*Math.PI/180;this.group.rotation.set(0,0,0),this.group.setRotationFromEuler(new Gt(Math.PI/2-h,0,-d,"ZXY"))}getRaDecToVector(e,t){const i=e*Math.PI/12,a=t*Math.PI/180,r=1e3*Math.cos(a)*Math.cos(i),o=1e3*Math.sin(a),l=1e3*Math.cos(a)*Math.sin(i);return new P(r,o,l)}vectorToRaDec(e){const t=e.clone().normalize(),n=this.group.matrixWorld.clone().invert();t.applyMatrix4(n);const i=Math.asin(Math.max(-1,Math.min(1,t.y)))*180/Math.PI;let a=Math.atan2(t.z,t.x)*12/Math.PI;return a<0&&(a+=24),{ra:a,dec:i}}getHorizontalVector(e,t){const n=e*Math.PI/180,i=t*Math.PI/180,a=Math.cos(i),r=a*Math.sin(n),o=Math.sin(i),l=-a*Math.cos(n);return new P(r,o,l)}raDecToScreenPosition(e,t,n,i,a){const r=this.getRaDecToVector(e,t);if(r.applyMatrix4(this.group.matrixWorld),r.project(n),r.z>1)return null;const o=(r.x*.5+.5)*i,l=(r.y*-.5+.5)*a;return new Re(o,l)}dispose(){this.scene.remove(this.group)}}const Gm=[{name:"Orion",nameZh:"獵戶座",lines:[[5.92,7.407,5.419,6.35],[5.242,-8.202,5.796,-9.67],[5.533,-.299,5.604,-1.202],[5.604,-1.202,5.679,-1.943],[5.92,7.407,5.604,-1.202],[5.419,6.35,5.533,-.299],[5.679,-1.943,5.796,-9.67],[5.533,-.299,5.242,-8.202]]},{name:"Ursa Major",nameZh:"大熊座（北斗七星）",lines:[[11.062,61.751,11.031,56.382],[11.031,56.382,11.897,53.695],[11.897,53.695,12.257,57.033],[12.257,57.033,12.9,55.96],[12.9,55.96,13.399,54.926],[13.399,54.926,13.792,49.313],[11.062,61.751,12.257,57.033]]},{name:"Cassiopeia",nameZh:"仙后座",lines:[[.153,59.15,.675,56.537],[.675,56.537,.945,60.717],[.945,60.717,1.43,60.235],[1.43,60.235,1.907,63.67]]},{name:"Scorpius",nameZh:"天蠍座",lines:[[16.005,-22.622,16.09,-20.669],[16.09,-20.669,16.353,-25.593],[16.005,-22.622,16.49,-26.432],[16.49,-26.432,16.836,-34.293],[16.836,-34.293,17.203,-43.239],[17.203,-43.239,17.56,-37.104],[17.56,-37.104,17.622,-42.998]]},{name:"Leo",nameZh:"獅子座",lines:[[10.14,11.967,10.333,19.842],[10.333,19.842,10.278,23.417],[10.278,23.417,9.879,26.007],[9.879,26.007,9.764,23.774],[10.278,23.417,11.237,20.524],[11.237,20.524,11.818,14.572],[10.14,11.967,11.237,20.524]]},{name:"Cygnus",nameZh:"天鵝座",lines:[[20.69,45.28,20.37,40.257],[20.37,40.257,19.749,45.131],[20.37,40.257,20.77,33.97],[20.37,40.257,19.512,27.96]]},{name:"Lyra",nameZh:"天琴座",lines:[[18.616,38.784,18.835,33.363],[18.835,33.363,18.982,32.69],[18.982,32.69,18.746,37.605],[18.746,37.605,18.616,38.784]]},{name:"Aquila",nameZh:"天鷹座",lines:[[19.771,10.613,19.846,8.868],[19.846,8.868,19.922,6.407]]},{name:"Gemini",nameZh:"雙子座",lines:[[7.577,31.888,7.755,28.026],[7.577,31.888,6.629,25.131],[7.755,28.026,7.068,20.57],[6.629,25.131,6.382,22.514],[6.382,22.514,6.248,22.507]]},{name:"Canis Major",nameZh:"大犬座",lines:[[6.752,-16.716,6.378,-17.956],[6.752,-16.716,6.977,-28.972],[6.977,-28.972,7.14,-26.393],[7.14,-26.393,7.029,-23.833]]},{name:"Taurus",nameZh:"金牛座",lines:[[4.599,16.509,4.477,15.962],[4.477,15.962,4.33,15.628],[4.33,15.628,4.382,17.543],[4.382,17.543,4.477,15.962],[4.599,16.509,5.438,28.608],[4.599,16.509,5.627,21.143]]},{name:"Perseus",nameZh:"英仙座",lines:[[3.405,49.861,3.136,40.957],[3.405,49.861,3.715,47.788],[3.715,47.788,3.964,40.01],[3.136,40.957,2.844,38.319]]},{name:"Crux",nameZh:"南十字座",lines:[[12.443,-63.099,12.519,-57.113],[12.795,-59.689,12.252,-58.749]]},{name:"Centaurus",nameZh:"半人馬座",lines:[[14.661,-60.835,14.064,-60.373]]},{name:"Bootes",nameZh:"牧夫座",lines:[[14.261,19.182,14.535,30.371],[14.535,30.371,15.032,40.39],[15.032,40.39,14.686,38.308],[14.686,38.308,14.261,19.182]]},{name:"Ursa Minor",nameZh:"小熊座",lines:[[2.53,89.264,17.537,86.586],[17.537,86.586,16.292,75.755],[16.292,75.755,15.734,77.795]]},{name:"Virgo",nameZh:"室女座",lines:[[13.42,-11.161,13.036,-5.539],[13.036,-5.539,12.694,-1.449],[12.694,-1.449,12.332,-.667],[13.036,-5.539,12.927,3.397]]},{name:"Pegasus",nameZh:"飛馬座",lines:[[.22,15.184,23.063,28.083],[23.063,28.083,23.079,15.205],[23.079,15.205,.22,15.184],[23.063,28.083,22.717,30.221],[22.717,30.221,.22,15.184]]},{name:"Sagittarius",nameZh:"人馬座",lines:[[18.921,-26.297,19.043,-29.88],[18.35,-29.828,18.921,-26.297],[18.35,-29.828,18.466,-25.422],[18.466,-25.422,18.921,-26.297],[19.043,-29.88,18.35,-29.828]]},{name:"Andromeda",nameZh:"仙女座",lines:[[.22,15.184,.656,29.091],[.656,29.091,1.163,35.621],[1.163,35.621,2.065,42.33]]}];class Vm{constructor(e){this.lines=null,this.material=null,this.geometry=null,this.group=new zt,e.add(this.group),this.init()}init(){const t=[];for(const a of Gm)for(const r of a.lines){const o=r[0]*Math.PI/12,l=r[1]*Math.PI/180,c=r[2]*Math.PI/12,d=r[3]*Math.PI/180;t.push(999*Math.cos(l)*Math.cos(o),999*Math.sin(l),999*Math.cos(l)*Math.sin(o),999*Math.cos(d)*Math.cos(c),999*Math.sin(d),999*Math.cos(d)*Math.sin(c))}this.geometry=new _t,this.geometry.setAttribute("position",new ht(t,3));const n=`
            varying vec3 vWorldPos;
            void main() {
                vec4 wp = modelMatrix * vec4(position, 1.0);
                vWorldPos = wp.xyz;
                gl_Position = projectionMatrix * viewMatrix * wp;
            }
        `,i=`
            uniform vec3 uColor;
            uniform float uOpacity;
            varying vec3 vWorldPos;
            void main() {
                if (vWorldPos.y < 0.0) discard;
                float horizonFade = smoothstep(0.0, 15.0, vWorldPos.y);
                gl_FragColor = vec4(uColor, uOpacity * horizonFade);
            }
        `;this.material=new pt({vertexShader:n,fragmentShader:i,uniforms:{uColor:{value:new ke(3718648)},uOpacity:{value:.18}},transparent:!0,depthWrite:!1}),this.lines=new Sm(this.geometry,this.material),this.group.add(this.lines)}update(e){if(!this.material)return;const t=Math.max(0,Math.min(1,-e/.08));this.material.uniforms.uOpacity.value=.18*t,this.group.visible=this.material.uniforms.uOpacity.value>.001}setVisible(e){this.group.visible=e}dispose(){this.geometry&&this.geometry.dispose(),this.material&&this.material.dispose(),this.lines&&this.group.remove(this.lines),this.group.parent&&this.group.parent.remove(this.group)}}const Sn=[{id:"M31",name:"M31",commonName:"仙女座星系 Andromeda Galaxy",ra:.712,dec:41.269,magnitude:3.4,type:"galaxy",sizeArcmin:178,difficulty:1,basePrice:200,starHoppingGuide:"先在東北方找到大大的「W 形仙后座」，順著中間頂點（策星）向右下方延伸約兩個星座寬度；或從飛馬座大四邊形東側向上沿仙女座星脊找到奎宿九，再往西北偏北移動 2 度。"},{id:"M33",name:"M33",commonName:"三角座星系 Triangulum Galaxy",ra:1.564,dec:30.66,magnitude:5.7,type:"galaxy",sizeArcmin:73,difficulty:3,basePrice:300,starHoppingGuide:"從仙女座奎宿九出發，朝向白羊座最亮星「婁宿三」方向直線移動，位於兩星連線的中點稍偏南。"},{id:"M51",name:"M51",commonName:"渦狀星系 Whirlpool Galaxy",ra:13.5,dec:47.195,magnitude:8.4,type:"galaxy",sizeArcmin:11,difficulty:3,basePrice:350,starHoppingGuide:"先找到北斗七星勺柄末端的最後一顆星「搖光星（大熊座 Eta）」，往西南偏西方向移動約 3.5 度（約 7 個滿月寬度）。"},{id:"M81",name:"M81",commonName:"波德星系 Bode's Galaxy",ra:9.926,dec:69.065,magnitude:6.9,type:"galaxy",sizeArcmin:27,difficulty:2,basePrice:250,starHoppingGuide:"從北斗七星勺身左下角的「天璇星」連線至右上角的「天樞星」，順著連線方向向外延伸相同距離，即可到達大熊座頭部上方的 M81 與 M82。"},{id:"M82",name:"M82",commonName:"雪茄星系 Cigar Galaxy",ra:9.932,dec:69.68,magnitude:8.4,type:"galaxy",sizeArcmin:11,difficulty:3,basePrice:300,starHoppingGuide:"緊鄰 M81 波德星系北側約 0.6 度（不到一個視野距離），側向看過去呈細長雪茄狀。"},{id:"M104",name:"M104",commonName:"草帽星系 Sombrero Galaxy",ra:12.667,dec:-11.623,magnitude:8,type:"galaxy",sizeArcmin:9,difficulty:4,basePrice:400,starHoppingGuide:"先找到室女座最亮星「角宿一」與烏鴉座四邊形右上角的「軫宿一」，M104 位於烏鴉座上方、兩星連線偏北側約 5.5 度處。"},{id:"M101",name:"M101",commonName:"風車星系 Pinwheel Galaxy",ra:14.054,dec:54.349,magnitude:7.9,type:"galaxy",sizeArcmin:29,difficulty:4,basePrice:350,starHoppingGuide:"位於北斗七星勺柄末端兩顆星（開陽星與搖光星）之間，以這兩顆星為底邊，往東北方向構成一個正三角形頂點。"},{id:"M42",name:"M42",commonName:"獵戶座大星雲 Orion Nebula",ra:5.588,dec:-5.391,magnitude:4,type:"nebula",sizeArcmin:85,difficulty:1,basePrice:180,starHoppingGuide:"先找到東南方最耀眼的「獵戶座腰帶三星（參宿一、參宿二、參宿三）」，朝正下方佩劍方向垂直看三顆微弱小星，中間那顆微光就是 M42！"},{id:"M43",name:"M43",commonName:"獵戶座星雲 (北部) De Mairan's Nebula",ra:5.593,dec:-5.268,magnitude:9,type:"nebula",sizeArcmin:20,difficulty:2,basePrice:150,starHoppingGuide:"直接對準 M42 獵戶座大星雲，在主雲氣正北側（正上方）被一條暗黑塵埃帶隔開的逗點狀星雲即是 M43。"},{id:"M78",name:"M78",commonName:"獵戶座反射星雲",ra:5.779,dec:.081,magnitude:8.3,type:"nebula",sizeArcmin:8,difficulty:3,basePrice:250,starHoppingGuide:"從獵戶座腰帶最左側的「參宿一」出發，朝向右上方的「參宿四（紅超巨星）」連線方向移動約 2.5 度處。"},{id:"M8",name:"M8",commonName:"礁湖星雲 Lagoon Nebula",ra:18.063,dec:-24.384,magnitude:6,type:"nebula",sizeArcmin:90,difficulty:1,basePrice:200,starHoppingGuide:"在南方銀河中找到人馬座「茶壺」造型，從茶壺嘴的「箕宿二」向上往銀河中心方向移動約 5 度即可看見大片雲氣。"},{id:"M17",name:"M17",commonName:"天鵝星雲 Omega Nebula",ra:18.346,dec:-16.175,magnitude:6,type:"nebula",sizeArcmin:46,difficulty:2,basePrice:220,starHoppingGuide:"沿著人馬座茶壺頂部蓋子「斗宿二」向上延伸約 12 度，位於人馬座與盾牌座交界處的銀河密集區。"},{id:"M20",name:"M20",commonName:"三裂星雲 Trifid Nebula",ra:18.043,dec:-23.028,magnitude:6.3,type:"nebula",sizeArcmin:28,difficulty:2,basePrice:250,starHoppingGuide:"位於 M8 礁湖星雲的正北方僅 1.4 度處（同一個雙筒望遠鏡視野內），由紅藍雙色三道暗黑塵埃帶裂開。"},{id:"M16",name:"M16",commonName:"鷹星雲 Eagle Nebula",ra:18.314,dec:-13.793,magnitude:6,type:"nebula",sizeArcmin:35,difficulty:2,basePrice:280,starHoppingGuide:"在巨蛇座尾部，緊鄰 M17 天鵝星雲北側約 2.5 度處（著名的創生之柱所在之處）。"},{id:"M1",name:"M1",commonName:"蟹狀星雲 Crab Nebula",ra:5.576,dec:22.015,magnitude:8.4,type:"nebula",sizeArcmin:7,difficulty:3,basePrice:350,starHoppingGuide:"先找到金牛座南側長角的尖端亮星「天關星（金牛座 Zeta）」，往西北方向微調約 1 度（兩顆滿月距離）。"},{id:"M57",name:"M57",commonName:"環狀星雲 Ring Nebula",ra:18.893,dec:33.029,magnitude:8.8,type:"planetary_nebula",sizeArcmin:1.4,difficulty:2,basePrice:300,starHoppingGuide:"先找到天琴座超亮「織女星」，朝南看到平行四邊形底部的兩顆星「漸台二」與「漸台三」，M57 就位於這兩星連線的正中點。"},{id:"M27",name:"M27",commonName:"啞鈴星雲 Dumbbell Nebula",ra:19.993,dec:22.721,magnitude:7.5,type:"planetary_nebula",sizeArcmin:8,difficulty:2,basePrice:280,starHoppingGuide:"在夏夜大三角的天鵝座天津四與天鷹座牛郎星連線中點偏東處，位於狐狸座中心、天箭座箭尖正上方約 3 度。"},{id:"M97",name:"M97",commonName:"貓頭鷹星雲 Owl Nebula",ra:11.248,dec:55.019,magnitude:9.9,type:"planetary_nebula",sizeArcmin:3.4,difficulty:4,basePrice:400,starHoppingGuide:"從北斗七星勺底的「天璇星」往東南向「天璣星」方向移動約 2.3 度處。"},{id:"M45",name:"M45",commonName:"昴宿星團 Pleiades",ra:3.791,dec:24.105,magnitude:1.6,type:"cluster",sizeArcmin:110,difficulty:1,basePrice:150,starHoppingGuide:"肉眼可見！先找到金牛座紅巨星「畢宿五」，往西北方向約 14 度，即可看見一小撮像微縮北斗七星的七姊妹藍白星群。"},{id:"M44",name:"M44",commonName:"蜂巢星團 Beehive Cluster",ra:8.667,dec:19.669,magnitude:3.7,type:"cluster",sizeArcmin:95,difficulty:1,basePrice:120,starHoppingGuide:"位於雙子座雙子星與獅子座軒轅十四連線的正中點，巨蟹座四顆暗星包圍的中心。"},{id:"M35",name:"M35",commonName:"雙子座疏散星團",ra:6.148,dec:24.333,magnitude:5.3,type:"cluster",sizeArcmin:28,difficulty:2,basePrice:130,starHoppingGuide:"在雙子座哥哥「卡斯托爾」的右腳尖「鉞星（雙子座 Eta）」西北方約 2.5 度處。"},{id:"M11",name:"M11",commonName:"野鴨星團 Wild Duck Cluster",ra:18.851,dec:-6.267,magnitude:6.3,type:"cluster",sizeArcmin:14,difficulty:2,basePrice:160,starHoppingGuide:"在天鷹座牛郎星向西南方延伸的銀河暗帶中，盾牌座四邊形頂部。"},{id:"M13",name:"M13",commonName:"武仙座球狀星團 Great Hercules Cluster",ra:16.695,dec:36.462,magnitude:5.8,type:"cluster",sizeArcmin:20,difficulty:1,basePrice:180,starHoppingGuide:"先找到武仙座「拱頂四邊形」，在西側兩星（天紀二與天紀三）連線偏北三分之二處，是一團由數十萬顆恆星組成的球狀星團。"},{id:"M3",name:"M3",commonName:"獵犬座球狀星團",ra:13.703,dec:28.377,magnitude:6.2,type:"cluster",sizeArcmin:18,difficulty:2,basePrice:170,starHoppingGuide:"位於牧夫座超亮紅巨星「大角星」與獵犬座常陳一連線的正中點。"},{id:"M5",name:"M5",commonName:"巨蛇座球狀星團",ra:15.31,dec:2.083,magnitude:5.7,type:"cluster",sizeArcmin:23,difficulty:2,basePrice:170,starHoppingGuide:"從室女座角宿一往東偏北找到室女座東側邊界，位於巨蛇座頭部天市右垣七西南方約 8 度。"},{id:"M15",name:"M15",commonName:"飛馬座球狀星團",ra:21.5,dec:12.167,magnitude:6.2,type:"cluster",sizeArcmin:18,difficulty:2,basePrice:165,starHoppingGuide:"從飛馬座大四邊形西南角的室宿一出發，穿過飛馬座鼻尖的危宿三，向前直線延伸約 4 度。"},{id:"M22",name:"M22",commonName:"人馬座球狀星團",ra:18.607,dec:-23.905,magnitude:5.1,type:"cluster",sizeArcmin:32,difficulty:1,basePrice:160,starHoppingGuide:"位於人馬座茶壺蓋頂部「斗宿二」往東北偏東方向僅 2.5 度處，是夜空中第三亮的巨大球狀星團。"},{id:"M4",name:"M4",commonName:"天蠍座球狀星團",ra:16.394,dec:-26.526,magnitude:5.6,type:"cluster",sizeArcmin:36,difficulty:1,basePrice:150,starHoppingGuide:"極易尋找！先在南方天空找到天蠍座紅超巨星「心宿二（天蠍座心臟）」，往西側僅 1.3 度處即可看到鬆散的球狀星團。"}];class Hm{constructor(){}angularDistance(e,t,n,i){const a=e*Math.PI/12,r=t*Math.PI/180,o=n*Math.PI/12,l=i*Math.PI/180,c=a-o,d=Math.sin(r)*Math.sin(l)+Math.cos(r)*Math.cos(l)*Math.cos(c);return Math.acos(Math.max(-1,Math.min(1,d)))*180/Math.PI}isAboveHorizon(e,t,n){if(!n)return!0;const i=n.getRaDecToVector(e,t);return i.applyMatrix4(n.group.matrixWorld),i.y>=5}findObjectsInFov(e,t,n,i,a){const r=[],o=n/2;if(a)for(const l of a){if(!this.isAboveHorizon(l.ra,l.dec,i))continue;const c=this.angularDistance(e,t,l.ra,l.dec);c<=o&&r.push({name:`${l.name} · ${l.features}`,type:et.Planet,magnitude:l.magnitude,angularDistance:c,ra:l.ra,dec:l.dec})}for(const l of Ql){if(!l.name||!this.isAboveHorizon(l.ra,l.dec,i))continue;const c=this.angularDistance(e,t,l.ra,l.dec);c<=o&&r.push({name:l.name,type:et.StarField,magnitude:l.mag,angularDistance:c,ra:l.ra,dec:l.dec})}for(const l of Sn){if(!this.isAboveHorizon(l.ra,l.dec,i))continue;const c=this.angularDistance(e,t,l.ra,l.dec);c<=o&&r.push({name:`${l.name} ${l.commonName}`,type:et.Messier,magnitude:l.magnitude,angularDistance:c,ra:l.ra,dec:l.dec})}return r.sort((l,c)=>l.magnitude-c.magnitude)}identify(e,t,n,i,a){if(!this.isAboveHorizon(e,t,i))return null;const r=this.findObjectsInFov(e,t,n,i,a);if(r.length===0)return null;r.sort((l,c)=>l.type===et.Planet&&c.type!==et.Planet?-1:c.type===et.Planet&&l.type!==et.Planet?1:l.type===et.Messier&&c.type===et.StarField?-1:c.type===et.Messier&&l.type===et.StarField?1:l.angularDistance-c.angularDistance);const o=Math.max(2.5,n*.48);return r[0].angularDistance<=o?r[0]:null}}class Wm{static{this.cache=new Map}static getTexture(e,t){if(this.cache.has(e))return this.cache.get(e);const n=document.createElement("canvas");n.width=512,n.height=512;const i=n.getContext("2d");switch(e){case"M31":this.drawM31Andromeda(i);break;case"M51":this.drawM51Whirlpool(i);break;case"M104":this.drawM104Sombrero(i);break;case"M82":this.drawM82Cigar(i);break;case"M81":this.drawM81Bode(i);break;case"M33":this.drawM33Triangulum(i);break;case"M101":this.drawM101Pinwheel(i);break;case"M42":this.drawM42Orion(i);break;case"M43":this.drawM43DeMairan(i);break;case"M20":this.drawM20Trifid(i);break;case"M8":this.drawM8Lagoon(i);break;case"M16":this.drawM16Eagle(i);break;case"M17":this.drawM17Swan(i);break;case"M78":this.drawM78Reflection(i);break;case"M1":this.drawM1Crab(i);break;case"M57":this.drawM57Ring(i);break;case"M27":this.drawM27Dumbbell(i);break;case"M97":this.drawM97Owl(i);break;case"M45":this.drawM45Pleiades(i);break;case"M44":this.drawM44Beehive(i);break;case"M11":this.drawM11WildDuck(i);break;case"M35":this.drawM35OpenCluster(i);break;case"M13":this.drawM13Hercules(i);break;case"M22":this.drawGlobular(i,"#ffe0b2",260,.9);break;case"M4":this.drawGlobular(i,"#ffcc80",240,.7);break;case"M15":this.drawGlobular(i,"#e0f2fe",220,1.4);break;case"M3":this.drawGlobular(i,"#fef08a",230,1);break;case"M5":this.drawGlobular(i,"#f8fafc",250,1.1);break;default:t==="galaxy"?this.drawGenericGalaxy(i):t==="planetary_nebula"?this.drawM57Ring(i):t==="cluster"?this.drawGlobular(i,"#ffffff",200,1):this.drawM42Orion(i);break}const a=new bt(n);a.generateMipmaps=!0,a.minFilter=sn,a.magFilter=Pt,this.cache.set(e,a);const r="./",l=`${r.endsWith("/")?r:`${r}/`}textures/dso/${e}.png`,c=new Image;return c.crossOrigin="anonymous",c.onload=()=>{a.image=c,a.needsUpdate=!0},c.src=l,a}static drawM31Andromeda(e){e.save(),e.translate(256,256),e.rotate(-.62);const i=e.createRadialGradient(0,0,10,0,0,240);i.addColorStop(0,"rgba(255, 240, 210, 0.6)"),i.addColorStop(.3,"rgba(180, 210, 255, 0.35)"),i.addColorStop(.7,"rgba(100, 150, 230, 0.12)"),i.addColorStop(1,"rgba(0, 0, 0, 0)"),e.fillStyle=i,e.beginPath(),e.ellipse(0,0,240,85,0,0,Math.PI*2),e.fill();const a=e.createRadialGradient(0,0,0,0,0,160);a.addColorStop(0,"rgba(255, 248, 220, 0.85)"),a.addColorStop(.4,"rgba(210, 230, 255, 0.45)"),a.addColorStop(.8,"rgba(140, 180, 250, 0.2)"),a.addColorStop(1,"rgba(0, 0, 0, 0)"),e.fillStyle=a,e.beginPath(),e.ellipse(0,0,160,52,0,0,Math.PI*2),e.fill(),e.strokeStyle="rgba(10, 15, 25, 0.55)",e.lineWidth=10,e.beginPath(),e.ellipse(0,18,140,36,0,Math.PI*.15,Math.PI*.85),e.stroke(),e.strokeStyle="rgba(15, 20, 30, 0.4)",e.lineWidth=6,e.beginPath(),e.ellipse(0,28,175,48,0,Math.PI*.2,Math.PI*.8),e.stroke();const r=e.createRadialGradient(0,0,0,0,0,35);r.addColorStop(0,"rgba(255, 255, 250, 1.0)"),r.addColorStop(.25,"rgba(255, 235, 180, 0.95)"),r.addColorStop(.7,"rgba(255, 200, 120, 0.4)"),r.addColorStop(1,"rgba(0, 0, 0, 0)"),e.fillStyle=r,e.beginPath(),e.ellipse(0,0,35,20,0,0,Math.PI*2),e.fill();const o=e.createRadialGradient(-35,-55,0,-35,-55,14);o.addColorStop(0,"rgba(255, 245, 210, 0.9)"),o.addColorStop(.5,"rgba(240, 210, 160, 0.4)"),o.addColorStop(1,"rgba(0, 0, 0, 0)"),e.fillStyle=o,e.beginPath(),e.arc(-35,-55,14,0,Math.PI*2),e.fill();const l=e.createRadialGradient(85,95,0,85,95,28);l.addColorStop(0,"rgba(230, 240, 255, 0.45)"),l.addColorStop(.5,"rgba(180, 200, 240, 0.2)"),l.addColorStop(1,"rgba(0, 0, 0, 0)"),e.fillStyle=l,e.beginPath(),e.ellipse(85,95,28,14,.5,0,Math.PI*2),e.fill(),e.restore()}static drawM51Whirlpool(e){const i=e.createRadialGradient(230,270,0,230,270,180);i.addColorStop(0,"rgba(255, 245, 220, 0.4)"),i.addColorStop(.5,"rgba(140, 180, 255, 0.18)"),i.addColorStop(1,"rgba(0, 0, 0, 0)"),e.fillStyle=i,e.beginPath(),e.arc(230,270,180,0,Math.PI*2),e.fill(),e.save(),e.translate(230,270);for(let o=0;o<2;o++){const l=o*Math.PI;e.rotate(l),e.strokeStyle="rgba(120, 180, 255, 0.45)",e.lineWidth=16,e.beginPath();for(let c=.5;c<3.2;c+=.05){const d=24*Math.exp(.48*c),h=c*2.2,u=d*Math.cos(h),p=d*Math.sin(h);c===.5?e.moveTo(u,p):e.lineTo(u,p)}e.stroke(),e.strokeStyle="rgba(8, 12, 20, 0.6)",e.lineWidth=5,e.beginPath();for(let c=.6;c<3;c+=.05){const d=21*Math.exp(.48*c),h=c*2.2+.15,u=d*Math.cos(h),p=d*Math.sin(h);c===.6?e.moveTo(u,p):e.lineTo(u,p)}e.stroke();for(let c=0;c<14;c++){const d=1+Math.random()*2,h=24*Math.exp(.48*d)+(Math.random()-.5)*8,u=d*2.2+(Math.random()-.5)*.2;e.fillStyle=`rgba(255, ${80+Math.random()*40}, 140, 0.75)`,e.beginPath(),e.arc(h*Math.cos(u),h*Math.sin(u),2+Math.random()*2.5,0,Math.PI*2),e.fill()}}e.restore(),e.strokeStyle="rgba(210, 200, 230, 0.35)",e.lineWidth=14,e.beginPath(),e.moveTo(290,190),e.quadraticCurveTo(330,140,360,130),e.stroke();const a=e.createRadialGradient(360,130,0,360,130,48);a.addColorStop(0,"rgba(255, 235, 180, 0.95)"),a.addColorStop(.3,"rgba(220, 180, 140, 0.6)"),a.addColorStop(.7,"rgba(150, 120, 100, 0.2)"),a.addColorStop(1,"rgba(0, 0, 0, 0)"),e.fillStyle=a,e.beginPath(),e.arc(360,130,48,0,Math.PI*2),e.fill(),e.strokeStyle="rgba(12, 10, 15, 0.65)",e.lineWidth=8,e.beginPath(),e.arc(360,130,22,Math.PI*.8,Math.PI*1.5),e.stroke();const r=e.createRadialGradient(230,270,0,230,270,32);r.addColorStop(0,"rgba(255, 255, 255, 1.0)"),r.addColorStop(.3,"rgba(255, 240, 190, 0.9)"),r.addColorStop(.7,"rgba(255, 200, 120, 0.35)"),r.addColorStop(1,"rgba(0, 0, 0, 0)"),e.fillStyle=r,e.beginPath(),e.arc(230,270,32,0,Math.PI*2),e.fill()}static drawM104Sombrero(e){e.save(),e.translate(256,256),e.rotate(-.1);const i=e.createRadialGradient(0,0,0,0,0,200);i.addColorStop(0,"rgba(255, 245, 220, 0.65)"),i.addColorStop(.25,"rgba(240, 220, 180, 0.35)"),i.addColorStop(.6,"rgba(160, 150, 170, 0.12)"),i.addColorStop(1,"rgba(0, 0, 0, 0)"),e.fillStyle=i,e.beginPath(),e.arc(0,0,200,0,Math.PI*2),e.fill();const a=e.createRadialGradient(0,-6,0,0,-6,60);a.addColorStop(0,"rgba(255, 255, 255, 1.0)"),a.addColorStop(.3,"rgba(255, 245, 200, 0.9)"),a.addColorStop(.7,"rgba(255, 210, 140, 0.4)"),a.addColorStop(1,"rgba(0, 0, 0, 0)"),e.fillStyle=a,e.beginPath(),e.ellipse(0,-6,60,48,0,0,Math.PI*2),e.fill();const r=e.createRadialGradient(0,0,0,0,0,230);r.addColorStop(0,"rgba(255, 250, 230, 0.8)"),r.addColorStop(.4,"rgba(220, 210, 190, 0.45)"),r.addColorStop(1,"rgba(0, 0, 0, 0)"),e.fillStyle=r,e.beginPath(),e.ellipse(0,0,230,28,0,0,Math.PI*2),e.fill(),e.strokeStyle="rgba(6, 6, 10, 0.96)",e.lineWidth=10,e.beginPath(),e.ellipse(0,4,230,24,0,0,Math.PI),e.stroke(),e.strokeStyle="rgba(220, 200, 170, 0.55)",e.lineWidth=4,e.beginPath(),e.ellipse(0,11,210,20,0,0,Math.PI),e.stroke(),e.restore()}static drawM82Cigar(e){e.save(),e.translate(256,256),e.rotate(.35);for(let a=0;a<35;a++){const r=(Math.random()-.5)*60,o=50+Math.random()*90,c=(Math.random()<.5?1:-1)*o,d=e.createLinearGradient(r,0,r,c);d.addColorStop(0,"rgba(255, 80, 100, 0.8)"),d.addColorStop(.5,"rgba(220, 40, 80, 0.45)"),d.addColorStop(1,"rgba(0, 0, 0, 0)"),e.fillStyle=d,e.beginPath(),e.ellipse(r,c*.6,6+Math.random()*10,o*.5,0,0,Math.PI*2),e.fill()}const i=e.createRadialGradient(0,0,0,0,0,190);i.addColorStop(0,"rgba(255, 255, 240, 0.95)"),i.addColorStop(.3,"rgba(220, 230, 255, 0.6)"),i.addColorStop(.7,"rgba(160, 180, 220, 0.2)"),i.addColorStop(1,"rgba(0, 0, 0, 0)"),e.fillStyle=i,e.beginPath(),e.ellipse(0,0,190,28,0,0,Math.PI*2),e.fill(),e.fillStyle="rgba(12, 12, 16, 0.75)";for(let a=0;a<7;a++){const r=(a-3)*24+(Math.random()-.5)*8;e.beginPath(),e.ellipse(r,0,6+Math.random()*6,26,.1,0,Math.PI*2),e.fill()}e.restore()}static drawM81Bode(e){e.save(),e.translate(256,256),e.rotate(-.4),e.strokeStyle="rgba(150, 190, 255, 0.35)",e.lineWidth=22,e.beginPath(),e.ellipse(0,0,180,95,0,0,Math.PI*2),e.stroke(),e.strokeStyle="rgba(200, 220, 255, 0.5)",e.lineWidth=14,e.beginPath(),e.ellipse(0,0,130,68,0,0,Math.PI*2),e.stroke();const i=e.createRadialGradient(0,0,0,0,0,80);i.addColorStop(0,"rgba(255, 255, 250, 1.0)"),i.addColorStop(.3,"rgba(255, 230, 170, 0.85)"),i.addColorStop(.7,"rgba(230, 180, 110, 0.35)"),i.addColorStop(1,"rgba(0, 0, 0, 0)"),e.fillStyle=i,e.beginPath(),e.ellipse(0,0,80,52,0,0,Math.PI*2),e.fill(),e.restore()}static drawM33Triangulum(e){const i=e.createRadialGradient(256,256,0,256,256,210);i.addColorStop(0,"rgba(230, 240, 255, 0.55)"),i.addColorStop(.4,"rgba(160, 200, 255, 0.25)"),i.addColorStop(.8,"rgba(100, 150, 220, 0.08)"),i.addColorStop(1,"rgba(0, 0, 0, 0)"),e.fillStyle=i,e.beginPath(),e.arc(256,256,210,0,Math.PI*2),e.fill(),[{x:320,y:190,r:8,color:"rgba(255, 70, 120, 0.85)"},{x:210,y:310,r:6,color:"rgba(255, 90, 140, 0.7)"},{x:180,y:200,r:5,color:"rgba(255, 80, 130, 0.65)"},{x:300,y:300,r:5,color:"rgba(255, 100, 150, 0.6)"},{x:250,y:150,r:6,color:"rgba(255, 90, 130, 0.7)"}].forEach(o=>{e.fillStyle=o.color,e.beginPath(),e.arc(o.x,o.y,o.r,0,Math.PI*2),e.fill()});const r=e.createRadialGradient(256,256,0,256,256,20);r.addColorStop(0,"rgba(255, 255, 255, 0.95)"),r.addColorStop(.6,"rgba(255, 230, 180, 0.5)"),r.addColorStop(1,"rgba(0, 0, 0, 0)"),e.fillStyle=r,e.beginPath(),e.arc(256,256,20,0,Math.PI*2),e.fill()}static drawM101Pinwheel(e){e.save(),e.translate(256,256);for(let a=0;a<5;a++){e.strokeStyle="rgba(120, 180, 255, 0.35)",e.lineWidth=14,e.beginPath();for(let r=.4;r<2.8;r+=.05){const o=20*Math.exp(.55*r),l=r*1.8+a*(Math.PI*2/5),c=o*Math.cos(l),d=o*Math.sin(l);r===.4?e.moveTo(c,d):e.lineTo(c,d)}e.stroke()}const i=e.createRadialGradient(0,0,0,0,0,25);i.addColorStop(0,"rgba(255, 255, 255, 1.0)"),i.addColorStop(.4,"rgba(255, 240, 180, 0.85)"),i.addColorStop(1,"rgba(0, 0, 0, 0)"),e.fillStyle=i,e.beginPath(),e.arc(0,0,25,0,Math.PI*2),e.fill(),e.restore()}static drawM42Orion(e){const i=e.createRadialGradient(256,240,20,256,240,240);i.addColorStop(0,"rgba(255, 70, 120, 0.8)"),i.addColorStop(.4,"rgba(210, 40, 90, 0.55)"),i.addColorStop(.7,"rgba(140, 25, 60, 0.25)"),i.addColorStop(1,"rgba(0, 0, 0, 0)"),e.fillStyle=i,e.beginPath(),e.moveTo(46,320),e.quadraticCurveTo(96,110,256,170),e.quadraticCurveTo(416,110,466,320),e.quadraticCurveTo(256,420,46,320),e.fill();const a=e.createRadialGradient(256,225,0,256,225,95);a.addColorStop(0,"rgba(240, 255, 250, 0.95)"),a.addColorStop(.3,"rgba(70, 230, 200, 0.7)"),a.addColorStop(.7,"rgba(40, 160, 160, 0.3)"),a.addColorStop(1,"rgba(0, 0, 0, 0)"),e.fillStyle=a,e.beginPath(),e.arc(256,225,95,0,Math.PI*2),e.fill(),e.fillStyle="rgba(8, 6, 12, 0.85)",e.beginPath(),e.moveTo(176,130),e.quadraticCurveTo(236,205,251,230),e.quadraticCurveTo(206,230,146,190),e.fill(),[{x:256,y:225},{x:263,y:220},{x:267,y:230},{x:252,y:233}].forEach(o=>{const l=e.createRadialGradient(o.x,o.y,0,o.x,o.y,12);l.addColorStop(0,"rgba(255, 255, 255, 1.0)"),l.addColorStop(.4,"rgba(180, 240, 255, 0.8)"),l.addColorStop(1,"rgba(0, 0, 0, 0)"),e.fillStyle=l,e.beginPath(),e.arc(o.x,o.y,12,0,Math.PI*2),e.fill()})}static drawM43DeMairan(e){const i=e.createRadialGradient(266,246,5,256,256,140);i.addColorStop(0,"rgba(255, 120, 160, 0.85)"),i.addColorStop(.5,"rgba(210, 50, 90, 0.45)"),i.addColorStop(1,"rgba(0, 0, 0, 0)"),e.fillStyle=i,e.beginPath(),e.ellipse(256,256,110,75,-.4,0,Math.PI*2),e.fill();const a=e.createRadialGradient(271,246,0,271,246,16);a.addColorStop(0,"rgba(255, 255, 255, 1)"),a.addColorStop(.4,"rgba(190, 220, 255, 0.8)"),a.addColorStop(1,"rgba(0, 0, 0, 0)"),e.fillStyle=a,e.beginPath(),e.arc(271,246,16,0,Math.PI*2),e.fill()}static drawM20Trifid(e){const i=e.createRadialGradient(256,166,10,256,166,110);i.addColorStop(0,"rgba(180, 230, 255, 0.9)"),i.addColorStop(.4,"rgba(70, 150, 255, 0.55)"),i.addColorStop(1,"rgba(0, 0, 0, 0)"),e.fillStyle=i,e.beginPath(),e.arc(256,166,110,0,Math.PI*2),e.fill(),e.fillStyle="rgba(255, 255, 255, 1)",e.beginPath(),e.arc(241,166,3,0,Math.PI*2),e.arc(276,176,2.5,0,Math.PI*2),e.fill();const a=e.createRadialGradient(256,321,10,256,321,130);a.addColorStop(0,"rgba(255, 240, 240, 0.95)"),a.addColorStop(.3,"rgba(255, 60, 110, 0.8)"),a.addColorStop(.7,"rgba(210, 30, 80, 0.35)"),a.addColorStop(1,"rgba(0, 0, 0, 0)"),e.fillStyle=a,e.beginPath(),e.arc(256,321,130,0,Math.PI*2),e.fill(),e.save(),e.translate(256,321),e.strokeStyle="rgba(6, 6, 12, 0.92)",e.lineWidth=14,e.beginPath(),e.moveTo(0,0),e.lineTo(-10,-120),e.moveTo(0,0),e.lineTo(-95,80),e.moveTo(0,0),e.lineTo(95,75),e.stroke(),e.restore();const r=e.createRadialGradient(256,321,0,256,321,14);r.addColorStop(0,"rgba(255, 255, 255, 1.0)"),r.addColorStop(.5,"rgba(255, 220, 180, 0.7)"),r.addColorStop(1,"rgba(0, 0, 0, 0)"),e.fillStyle=r,e.beginPath(),e.arc(256,321,14,0,Math.PI*2),e.fill()}static drawM8Lagoon(e){const i=e.createRadialGradient(256,256,20,256,256,220);i.addColorStop(0,"rgba(255, 100, 140, 0.85)"),i.addColorStop(.4,"rgba(220, 40, 80, 0.6)"),i.addColorStop(.8,"rgba(150, 20, 50, 0.2)"),i.addColorStop(1,"rgba(0, 0, 0, 0)"),e.fillStyle=i,e.beginPath(),e.ellipse(256,256,220,140,.2,0,Math.PI*2),e.fill(),e.fillStyle="rgba(8, 6, 12, 0.88)",e.beginPath(),e.moveTo(226,116),e.quadraticCurveTo(251,256,216,396),e.lineTo(266,396),e.quadraticCurveTo(291,256,271,116),e.fill();const a=e.createRadialGradient(321,266,0,321,266,36);a.addColorStop(0,"rgba(255, 255, 255, 1.0)"),a.addColorStop(.3,"rgba(255, 200, 220, 0.85)"),a.addColorStop(1,"rgba(0, 0, 0, 0)"),e.fillStyle=a,e.beginPath(),e.arc(321,266,36,0,Math.PI*2),e.fill();for(let r=0;r<25;r++){const o=146+(Math.random()-.5)*90,l=256+(Math.random()-.5)*80;e.fillStyle=`rgba(200, 230, 255, ${.6+Math.random()*.4})`,e.beginPath(),e.arc(o,l,1+Math.random()*2.2,0,Math.PI*2),e.fill()}}static drawM16Eagle(e){const i=e.createRadialGradient(256,256,20,256,256,200);i.addColorStop(0,"rgba(255, 120, 140, 0.85)"),i.addColorStop(.5,"rgba(210, 40, 70, 0.5)"),i.addColorStop(1,"rgba(0, 0, 0, 0)"),e.fillStyle=i,e.beginPath(),e.arc(256,256,200,0,Math.PI*2),e.fill(),e.fillStyle="rgba(10, 8, 14, 0.92)",e.beginPath(),e.moveTo(221,346),e.lineTo(226,221),e.arc(230,221,6,Math.PI,0),e.lineTo(238,346),e.moveTo(244,346),e.lineTo(248,246),e.arc(252,246,5,Math.PI,0),e.lineTo(258,346),e.moveTo(264,346),e.lineTo(268,271),e.arc(272,271,5,Math.PI,0),e.lineTo(280,346),e.fill();for(let a=0;a<30;a++){const r=256+(Math.random()-.5)*260,o=256+(Math.random()-.5)*260;e.fillStyle="rgba(255, 255, 255, 0.8)",e.beginPath(),e.arc(r,o,1.2+Math.random()*2,0,Math.PI*2),e.fill()}}static drawM17Swan(e){const i=e.createLinearGradient(76,276,436,276);i.addColorStop(0,"rgba(0,0,0,0)"),i.addColorStop(.3,"rgba(255, 80, 110, 0.75)"),i.addColorStop(.7,"rgba(255, 120, 150, 0.85)"),i.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=i,e.fillRect(76,261,360,35),e.strokeStyle="rgba(255, 160, 180, 0.85)",e.lineWidth=26,e.lineCap="round",e.beginPath(),e.moveTo(196,271),e.quadraticCurveTo(166,176,246,186),e.quadraticCurveTo(296,191,276,236),e.stroke();const a=e.createRadialGradient(256,256,30,256,256,200);a.addColorStop(0,"rgba(255, 60, 90, 0.45)"),a.addColorStop(1,"rgba(0, 0, 0, 0)"),e.fillStyle=a,e.beginPath(),e.arc(256,256,200,0,Math.PI*2),e.fill()}static drawM78Reflection(e){const i=e.createRadialGradient(256,256,10,256,256,150);i.addColorStop(0,"rgba(210, 240, 255, 0.9)"),i.addColorStop(.4,"rgba(100, 180, 255, 0.55)"),i.addColorStop(.8,"rgba(50, 120, 220, 0.2)"),i.addColorStop(1,"rgba(0, 0, 0, 0)"),e.fillStyle=i,e.beginPath(),e.ellipse(256,256,140,100,.4,0,Math.PI*2),e.fill(),e.fillStyle="rgba(6, 8, 14, 0.85)",e.beginPath(),e.arc(176,286,80,0,Math.PI*2),e.fill(),[{x:244,y:248},{x:274,y:268}].forEach(r=>{const o=e.createRadialGradient(r.x,r.y,0,r.x,r.y,14);o.addColorStop(0,"rgba(255, 255, 255, 1.0)"),o.addColorStop(.5,"rgba(200, 230, 255, 0.8)"),o.addColorStop(1,"rgba(0, 0, 0, 0)"),e.fillStyle=o,e.beginPath(),e.arc(r.x,r.y,14,0,Math.PI*2),e.fill()})}static drawM1Crab(e){const i=e.createRadialGradient(256,256,0,256,256,140);i.addColorStop(0,"rgba(180, 255, 240, 0.7)"),i.addColorStop(.4,"rgba(60, 200, 190, 0.4)"),i.addColorStop(.8,"rgba(30, 110, 140, 0.15)"),i.addColorStop(1,"rgba(0, 0, 0, 0)"),e.fillStyle=i,e.beginPath(),e.ellipse(256,256,140,95,.35,0,Math.PI*2),e.fill(),e.save(),e.translate(256,256),e.rotate(.35);for(let a=0;a<45;a++){const r=a/45*Math.PI*2,o=100+Math.random()*45,l=Math.cos(r)*35,c=Math.sin(r)*25,d=Math.cos(r)*o,h=Math.sin(r)*(o*.68);e.strokeStyle=`rgba(255, ${70+Math.random()*80}, 50, ${.45+Math.random()*.4})`,e.lineWidth=2+Math.random()*2.5,e.beginPath(),e.moveTo(l,c);const u=(l+d)*.5+(Math.random()-.5)*20,p=(c+h)*.5+(Math.random()-.5)*20;e.quadraticCurveTo(u,p,d,h),e.stroke()}e.restore(),e.fillStyle="rgba(255, 255, 255, 1)",e.beginPath(),e.arc(256,256,2.5,0,Math.PI*2),e.fill()}static drawM57Ring(e){const i=e.createRadialGradient(256,256,40,256,256,220);i.addColorStop(0,"rgba(10, 20, 35, 0.02)"),i.addColorStop(.25,"rgba(20, 60, 70, 0.15)"),i.addColorStop(.45,"rgba(50, 220, 180, 0.65)"),i.addColorStop(.65,"rgba(240, 70, 90, 0.5)"),i.addColorStop(.82,"rgba(180, 40, 60, 0.15)"),i.addColorStop(.95,"rgba(100, 20, 40, 0.03)"),i.addColorStop(1,"rgba(0, 0, 0, 0)"),e.fillStyle=i,e.beginPath(),e.arc(256,256,220,0,Math.PI*2),e.fill();const a=e.createRadialGradient(256,256,0,256,256,10);a.addColorStop(0,"rgba(255, 255, 255, 1)"),a.addColorStop(.4,"rgba(190, 230, 255, 0.8)"),a.addColorStop(1,"rgba(0, 0, 0, 0)"),e.fillStyle=a,e.beginPath(),e.arc(256,256,10,0,Math.PI*2),e.fill()}static drawM27Dumbbell(e){e.save(),e.translate(256,256),e.rotate(.2);const i=e.createRadialGradient(0,0,20,0,0,210);i.addColorStop(0,"rgba(255, 60, 80, 0.35)"),i.addColorStop(.6,"rgba(220, 40, 60, 0.2)"),i.addColorStop(1,"rgba(0, 0, 0, 0)"),e.fillStyle=i,e.beginPath(),e.ellipse(0,0,210,150,0,0,Math.PI*2),e.fill();const a=e.createRadialGradient(0,0,10,0,0,140);a.addColorStop(0,"rgba(255, 255, 255, 0.8)"),a.addColorStop(.3,"rgba(60, 230, 190, 0.85)"),a.addColorStop(.7,"rgba(30, 160, 140, 0.45)"),a.addColorStop(1,"rgba(0, 0, 0, 0)"),e.fillStyle=a,e.beginPath(),e.moveTo(-110,-110),e.quadraticCurveTo(-45,0,-110,110),e.lineTo(110,110),e.quadraticCurveTo(45,0,110,-110),e.closePath(),e.fill(),e.fillStyle="rgba(255, 255, 255, 1)",e.beginPath(),e.arc(0,0,3,0,Math.PI*2),e.fill(),e.restore()}static drawM97Owl(e){const i=e.createRadialGradient(256,256,30,256,256,180);i.addColorStop(0,"rgba(80, 230, 180, 0.7)"),i.addColorStop(.5,"rgba(50, 180, 150, 0.5)"),i.addColorStop(.85,"rgba(30, 120, 100, 0.2)"),i.addColorStop(1,"rgba(0, 0, 0, 0)"),e.fillStyle=i,e.beginPath(),e.arc(256,256,180,0,Math.PI*2),e.fill(),e.fillStyle="rgba(6, 12, 16, 0.75)",e.beginPath(),e.arc(206,231,38,0,Math.PI*2),e.arc(306,231,38,0,Math.PI*2),e.fill(),e.fillStyle="rgba(240, 255, 255, 0.9)",e.beginPath(),e.arc(256,266,2.5,0,Math.PI*2),e.fill()}static drawM45Pleiades(e){const i=e.createRadialGradient(256,256,40,256,256,230);i.addColorStop(0,"rgba(180, 220, 255, 0.6)"),i.addColorStop(.4,"rgba(90, 170, 255, 0.35)"),i.addColorStop(.8,"rgba(40, 100, 200, 0.12)"),i.addColorStop(1,"rgba(0, 0, 0, 0)"),e.fillStyle=i,e.beginPath(),e.arc(256,256,230,0,Math.PI*2),e.fill(),e.strokeStyle="rgba(160, 210, 255, 0.2)",e.lineWidth=8;for(let r=0;r<12;r++){e.beginPath();const o=80+r*28;e.moveTo(70,o),e.lineTo(440,o+35),e.stroke()}[{x:281,y:271,mag:2.8},{x:196,y:211,mag:3.8},{x:146,y:231,mag:3.7},{x:211,y:321,mag:4.1},{x:136,y:181,mag:4.3},{x:161,y:196,mag:5.4},{x:366,y:221,mag:3.6},{x:371,y:201,mag:5}].forEach(r=>{const o=8-r.mag*.9,l=e.createRadialGradient(r.x,r.y,0,r.x,r.y,o*5);l.addColorStop(0,"rgba(255, 255, 255, 1.0)"),l.addColorStop(.2,"rgba(210, 240, 255, 0.9)"),l.addColorStop(.6,"rgba(120, 180, 255, 0.4)"),l.addColorStop(1,"rgba(0, 0, 0, 0)"),e.fillStyle=l,e.beginPath(),e.arc(r.x,r.y,o*5,0,Math.PI*2),e.fill(),e.strokeStyle="rgba(255, 255, 255, 0.55)",e.lineWidth=1,e.beginPath(),e.moveTo(r.x-o*6,r.y),e.lineTo(r.x+o*6,r.y),e.moveTo(r.x,r.y-o*6),e.lineTo(r.x,r.y+o*6),e.stroke()})}static drawM44Beehive(e){for(let i=0;i<75;i++){const a=Math.pow(Math.random(),.8)*190,r=Math.random()*Math.PI*2,o=256+Math.cos(r)*a,l=256+Math.sin(r)*a,d=Math.random()<.35?"#fed7aa":"#e0f2fe";e.fillStyle=d,e.beginPath(),e.arc(o,l,1+Math.random()*2.6,0,Math.PI*2),e.fill()}}static drawM11WildDuck(e){const i=e.createRadialGradient(256,256,0,256,256,140);i.addColorStop(0,"rgba(255, 240, 210, 0.5)"),i.addColorStop(1,"rgba(0, 0, 0, 0)"),e.fillStyle=i,e.beginPath(),e.arc(256,256,140,0,Math.PI*2),e.fill();for(let a=0;a<180;a++){const r=Math.random(),o=r*110,l=256+(Math.random()-.5)*o,c=176+r*170+(Math.random()-.5)*20;e.fillStyle=`rgba(255, ${210+Math.random()*45}, ${160+Math.random()*95}, ${.5+Math.random()*.5})`,e.beginPath(),e.arc(l,c,.8+Math.random()*2,0,Math.PI*2),e.fill()}}static drawM35OpenCluster(e){for(let i=0;i<120;i++){const a=Math.pow(Math.random(),.9)*200,r=Math.random()*Math.PI*2;e.fillStyle=`rgba(210, 235, 255, ${.4+Math.random()*.6})`,e.beginPath(),e.arc(256+Math.cos(r)*a,256+Math.sin(r)*a,1+Math.random()*2,0,Math.PI*2),e.fill()}}static drawM13Hercules(e){this.drawGlobular(e,"#f0f9ff",240,1.25)}static drawGlobular(e,t,n,i){const o=e.createRadialGradient(256,256,0,256,256,n);o.addColorStop(0,"rgba(255, 255, 255, 0.95)"),o.addColorStop(.18,"rgba(255, 245, 210, 0.8)"),o.addColorStop(.45,"rgba(210, 225, 255, 0.35)"),o.addColorStop(.8,"rgba(120, 160, 240, 0.08)"),o.addColorStop(1,"rgba(0, 0, 0, 0)"),e.fillStyle=o,e.beginPath(),e.arc(256,256,n,0,Math.PI*2),e.fill();const l=Math.floor(350*i);for(let c=0;c<l;c++){const d=Math.pow(Math.random(),2.8)*n,h=Math.random()*Math.PI*2,u=256+Math.cos(h)*d,p=256+Math.sin(h)*d,g=.4+Math.random()*.6;e.fillStyle=`rgba(255, 255, 255, ${g})`,e.beginPath(),e.arc(u,p,.6+Math.random()*1.8,0,Math.PI*2),e.fill()}}static drawGenericGalaxy(e){const i=e.createRadialGradient(256,256,0,256,256,180);i.addColorStop(0,"rgba(255, 250, 230, 0.9)"),i.addColorStop(.3,"rgba(210, 230, 255, 0.5)"),i.addColorStop(.7,"rgba(120, 160, 240, 0.15)"),i.addColorStop(1,"rgba(0, 0, 0, 0)"),e.fillStyle=i,e.beginPath(),e.ellipse(256,256,180,90,.4,0,Math.PI*2),e.fill()}}class $m{constructor(e){this.sprites=[],this.materials=[],this.textures=[],this.tempWorldPos=new P,this.group=new zt,e.add(this.group),this.init()}createGalaxyTexture(){const e=document.createElement("canvas");e.width=512,e.height=512;const t=e.getContext("2d"),n=256,i=256;t.save(),t.translate(n,i),t.rotate(-Math.PI/6),t.scale(1.2,.55);const a=t.createRadialGradient(0,0,10,0,0,240);a.addColorStop(0,"rgba(230, 240, 255, 0.4)"),a.addColorStop(.3,"rgba(150, 190, 255, 0.2)"),a.addColorStop(.7,"rgba(80, 120, 220, 0.08)"),a.addColorStop(1,"rgba(0, 0, 0, 0)"),t.fillStyle=a,t.beginPath(),t.arc(0,0,240,0,Math.PI*2),t.fill();const r=["rgba(140, 190, 255, 0.15)","rgba(190, 220, 255, 0.18)","rgba(255, 220, 200, 0.12)"];for(let c=0;c<2;c++){const d=c*Math.PI;for(let h=.5;h<4.2;h+=.03){const u=22*Math.exp(.42*h);if(u>220)break;const p=h+d,g=u*Math.cos(p),v=u*Math.sin(p),m=t.createRadialGradient(g,v,0,g,v,18+h*4),f=r[Math.floor(Math.random()*r.length)];m.addColorStop(0,f),m.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=m,t.beginPath(),t.arc(g,v,18+h*4,0,Math.PI*2),t.fill(),Math.random()<.25&&(t.fillStyle="rgba(255, 110, 140, 0.45)",t.beginPath(),t.arc(g+(Math.random()-.5)*8,v+(Math.random()-.5)*8,Math.random()*3+1,0,Math.PI*2),t.fill())}}const o=t.createRadialGradient(0,0,0,0,0,70);o.addColorStop(0,"rgba(255, 255, 245, 0.98)"),o.addColorStop(.15,"rgba(255, 240, 210, 0.85)"),o.addColorStop(.45,"rgba(230, 200, 160, 0.45)"),o.addColorStop(.8,"rgba(180, 160, 190, 0.15)"),o.addColorStop(1,"rgba(0, 0, 0, 0)"),t.fillStyle=o,t.beginPath(),t.arc(0,0,70,0,Math.PI*2),t.fill(),t.restore();const l=new bt(e);return this.textures.push(l),l}createEmissionNebulaTexture(){const e=document.createElement("canvas");e.width=512,e.height=512;const t=e.getContext("2d"),n=256,i=256,a=t.createRadialGradient(n,i,10,n,i,230);a.addColorStop(0,"rgba(255, 240, 245, 0.9)"),a.addColorStop(.15,"rgba(255, 80, 120, 0.7)"),a.addColorStop(.4,"rgba(210, 40, 90, 0.4)"),a.addColorStop(.7,"rgba(120, 20, 70, 0.15)"),a.addColorStop(1,"rgba(0, 0, 0, 0)"),t.fillStyle=a,t.beginPath(),t.arc(n,i,230,0,Math.PI*2),t.fill();for(let o=0;o<70;o++){const l=Math.random()*Math.PI*2,c=Math.pow(Math.random(),.7)*180,d=n+Math.cos(l)*c,h=i+Math.sin(l)*c,u=Math.random()*45+15,p=t.createRadialGradient(d,h,0,d,h,u);Math.random()<.25?p.addColorStop(0,"rgba(80, 220, 230, 0.35)"):p.addColorStop(0,"rgba(255, 90, 130, 0.3)"),p.addColorStop(1,"rgba(0, 0, 0, 0)"),t.fillStyle=p,t.beginPath(),t.arc(d,h,u,0,Math.PI*2),t.fill()}for(let o=0;o<15;o++){const l=n+(Math.random()-.5)*40,c=i+(Math.random()-.5)*40,d=t.createRadialGradient(l,c,0,l,c,6);d.addColorStop(0,"rgba(255, 255, 255, 1)"),d.addColorStop(.4,"rgba(200, 230, 255, 0.8)"),d.addColorStop(1,"rgba(0, 0, 0, 0)"),t.fillStyle=d,t.beginPath(),t.arc(l,c,6,0,Math.PI*2),t.fill()}const r=new bt(e);return this.textures.push(r),r}createReflectionNebulaTexture(){const e=document.createElement("canvas");e.width=512,e.height=512;const t=e.getContext("2d"),n=256,i=256,a=t.createRadialGradient(n,i,10,n,i,220);a.addColorStop(0,"rgba(240, 250, 255, 0.95)"),a.addColorStop(.2,"rgba(100, 170, 255, 0.65)"),a.addColorStop(.5,"rgba(50, 100, 220, 0.3)"),a.addColorStop(.8,"rgba(20, 40, 120, 0.08)"),a.addColorStop(1,"rgba(0, 0, 0, 0)"),t.fillStyle=a,t.beginPath(),t.arc(n,i,220,0,Math.PI*2),t.fill();const r=new bt(e);return this.textures.push(r),r}createPlanetaryNebulaTexture(){const e=document.createElement("canvas");e.width=512,e.height=512;const t=e.getContext("2d"),n=256,i=256,a=t.createRadialGradient(n,i,40,n,i,230);a.addColorStop(0,"rgba(10, 20, 35, 0.02)"),a.addColorStop(.25,"rgba(20, 60, 70, 0.15)"),a.addColorStop(.45,"rgba(50, 220, 180, 0.6)"),a.addColorStop(.65,"rgba(240, 70, 90, 0.45)"),a.addColorStop(.82,"rgba(180, 40, 60, 0.15)"),a.addColorStop(.95,"rgba(100, 20, 40, 0.03)"),a.addColorStop(1,"rgba(0, 0, 0, 0)"),t.fillStyle=a,t.beginPath(),t.arc(n,i,230,0,Math.PI*2),t.fill();const r=t.createRadialGradient(n,i,0,n,i,10);r.addColorStop(0,"rgba(255, 255, 255, 1)"),r.addColorStop(.3,"rgba(180, 220, 255, 0.8)"),r.addColorStop(1,"rgba(0, 0, 0, 0)"),t.fillStyle=r,t.beginPath(),t.arc(n,i,10,0,Math.PI*2),t.fill();const o=new bt(e);return this.textures.push(o),o}createClusterTexture(){const e=document.createElement("canvas");e.width=512,e.height=512;const t=e.getContext("2d"),n=256,i=256,a=t.createRadialGradient(n,i,0,n,i,210);a.addColorStop(0,"rgba(255, 245, 220, 0.55)"),a.addColorStop(.3,"rgba(200, 220, 255, 0.25)"),a.addColorStop(.7,"rgba(120, 160, 240, 0.06)"),a.addColorStop(1,"rgba(0, 0, 0, 0)"),t.fillStyle=a,t.beginPath(),t.arc(n,i,210,0,Math.PI*2),t.fill();for(let o=0;o<180;o++){const l=Math.pow(Math.random(),1.6)*190,c=Math.random()*Math.PI*2,d=n+Math.cos(c)*l,h=i+Math.sin(c)*l,u=Math.random()*2.2+.6,p=Math.random()*.7+.3,v=Math.random()<.35?`rgba(255, 220, 170, ${p})`:`rgba(210, 235, 255, ${p})`;t.fillStyle=v,t.beginPath(),t.arc(d,h,u,0,Math.PI*2),t.fill()}const r=new bt(e);return this.textures.push(r),r}init(){for(const t of Sn){const n=Wm.getTexture(t.id,t.type);this.textures.push(n);const i=new zr({map:n,color:16777215,transparent:!0,blending:wi,depthWrite:!1,opacity:0});this.materials.push(i);const a=new Yl(i),r=t.ra*Math.PI/12,o=t.dec*Math.PI/180;a.position.x=998*Math.cos(o)*Math.cos(r),a.position.y=998*Math.sin(o),a.position.z=998*Math.cos(o)*Math.sin(r);const l=Math.max(1.8,(t.sizeArcmin||15)*.29);a.scale.set(l,l,1),this.group.add(a),this.sprites.push({sprite:a,dso:t,baseScale:l})}}update(e,t,n){if(!(t||e<35)){for(const{sprite:o}of this.sprites)o.visible=!1;return}const a=t?Math.max(.5,e):e,r=t?1:Math.min(1,(35-a)/20);for(const{sprite:o,dso:l,baseScale:c}of this.sprites){o.getWorldPosition(this.tempWorldPos);const d=n-l.magnitude;if(this.tempWorldPos.y<0||d<0)o.visible=!1;else{o.visible=!0;const h=a<4?Math.min(2.2,4/a):1,u=c*h;o.scale.set(u,u,1);const p=Math.min(1,Math.max(.25,d*.2)),g=a<12?(12-a)*.012:0,v=Math.min(.4,(.16+g)*p*r);o.material.opacity=v}}}dispose(){for(const e of this.textures)e.dispose();for(const e of this.materials)e.dispose();this.group.parent&&this.group.parent.remove(this.group)}}function qm(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var za={exports:{}},cl;function Xm(){return cl||(cl=1,(function(s,e){(function(){var t=Math.PI,n=Math.sin,i=Math.cos,a=Math.tan,r=Math.asin,o=Math.atan2,l=Math.acos,c=t/180,d=1e3*60*60*24,h=2440588,u=2451545;function p(X){return X.valueOf()/d-.5+h}function g(X){return new Date((X+.5-h)*d)}function v(X){return p(X)-u}var m=c*23.4397;function f(X,ne){return o(n(X)*i(m)-a(ne)*n(m),i(X))}function x(X,ne){return r(n(ne)*i(m)+i(ne)*n(m)*n(X))}function E(X,ne,ce){return o(n(X),i(X)*n(ne)-a(ce)*i(ne))}function _(X,ne,ce){return r(n(ne)*n(ce)+i(ne)*i(ce)*i(X))}function L(X,ne){return c*(280.16+360.9856235*X)-ne}function C(X){return X<0&&(X=0),2967e-7/Math.tan(X+.00312536/(X+.08901179))}function w(X){return c*(357.5291+.98560028*X)}function R(X){var ne=c*(1.9148*n(X)+.02*n(2*X)+3e-4*n(3*X)),ce=c*102.9372;return X+ne+ce+t}function S(X){var ne=w(X),ce=R(ne);return{dec:x(ce,0),ra:f(ce,0)}}var M={};M.getPosition=function(X,ne,ce){var H=c*-ce,K=c*ne,re=v(X),V=S(re),ie=L(re,H)-V.ra;return{azimuth:E(ie,K,V.dec),altitude:_(ie,K,V.dec)}};var A=M.times=[[-.833,"sunrise","sunset"],[-.3,"sunriseEnd","sunsetStart"],[-6,"dawn","dusk"],[-12,"nauticalDawn","nauticalDusk"],[-18,"nightEnd","night"],[6,"goldenHourEnd","goldenHour"]];M.addTime=function(X,ne,ce){A.push([X,ne,ce])};var B=9e-4;function F(X,ne){return Math.round(X-B-ne/(2*t))}function O(X,ne,ce){return B+(X+ne)/(2*t)+ce}function W(X,ne,ce){return u+X+.0053*n(ne)-.0069*n(2*ce)}function $(X,ne,ce){return l((n(X)-n(ne)*n(ce))/(i(ne)*i(ce)))}function Q(X){return-2.076*Math.sqrt(X)/60}function q(X,ne,ce,H,K,re,V){var ie=$(X,ce,H),ve=O(ie,ne,K);return W(ve,re,V)}M.getTimes=function(X,ne,ce,H){H=H||0;var K=c*-ce,re=c*ne,V=Q(H),ie=v(X),ve=F(ie,K),be=O(0,K,ve),Ie=w(be),De=R(Ie),We=x(De,0),D=W(be,Ie,De),lt,Le,Pe,ge,$e,Se,T={solarNoon:g(D),nadir:g(D-.5)};for(lt=0,Le=A.length;lt<Le;lt+=1)Pe=A[lt],ge=(Pe[0]+V)*c,$e=q(ge,K,re,We,ve,Ie,De),Se=D-($e-D),T[Pe[1]]=g(Se),T[Pe[2]]=g($e);return T};function oe(X){var ne=c*(218.316+13.176396*X),ce=c*(134.963+13.064993*X),H=c*(93.272+13.22935*X),K=ne+c*6.289*n(ce),re=c*5.128*n(H),V=385001-20905*i(ce);return{ra:f(K,re),dec:x(K,re),dist:V}}M.getMoonPosition=function(X,ne,ce){var H=c*-ce,K=c*ne,re=v(X),V=oe(re),ie=L(re,H)-V.ra,ve=_(ie,K,V.dec),be=o(n(ie),a(K)*i(V.dec)-n(V.dec)*i(ie));return ve=ve+C(ve),{azimuth:E(ie,K,V.dec),altitude:ve,distance:V.dist,parallacticAngle:be}},M.getMoonIllumination=function(X){var ne=v(X||new Date),ce=S(ne),H=oe(ne),K=149598e3,re=l(n(ce.dec)*n(H.dec)+i(ce.dec)*i(H.dec)*i(ce.ra-H.ra)),V=o(K*n(re),H.dist-K*i(re)),ie=o(i(ce.dec)*n(ce.ra-H.ra),n(ce.dec)*i(H.dec)-i(ce.dec)*n(H.dec)*i(ce.ra-H.ra));return{fraction:(1+i(V))/2,phase:.5+.5*V*(ie<0?-1:1)/Math.PI,angle:ie}};function le(X,ne){return new Date(X.valueOf()+ne*d/24)}M.getMoonTimes=function(X,ne,ce,H){var K=new Date(X);H?K.setUTCHours(0,0,0,0):K.setHours(0,0,0,0);for(var re=.133*c,V=M.getMoonPosition(K,ne,ce).altitude-re,ie,ve,be,Ie,De,We,D,lt,Le,Pe,ge,$e,Se,T=1;T<=24&&(ie=M.getMoonPosition(le(K,T),ne,ce).altitude-re,ve=M.getMoonPosition(le(K,T+1),ne,ce).altitude-re,De=(V+ve)/2-ie,We=(ve-V)/2,D=-We/(2*De),lt=(De*D+We)*D+ie,Le=We*We-4*De*ie,Pe=0,Le>=0&&(Se=Math.sqrt(Le)/(Math.abs(De)*2),ge=D-Se,$e=D+Se,Math.abs(ge)<=1&&Pe++,Math.abs($e)<=1&&Pe++,ge<-1&&(ge=$e)),Pe===1?V<0?be=T+ge:Ie=T+ge:Pe===2&&(be=T+(lt<0?$e:ge),Ie=T+(lt<0?ge:$e)),!(be&&Ie));T+=2)V=ve;var y={};return be&&(y.rise=le(K,be)),Ie&&(y.set=le(K,Ie)),!be&&!Ie&&(y[lt>0?"alwaysUp":"alwaysDown"]=!0),y},s.exports=M})()})(za)),za.exports}var Ym=Xm();const Ti=qm(Ym);class Vn{static{this.cache=new Map}static getPlanetTexture(e){if(this.cache.has(e))return this.cache.get(e);const t=document.createElement("canvas");t.width=1024,t.height=1024;const n=t.getContext("2d");switch(e){case"saturn":this.drawSaturn(n);break;case"jupiter":this.drawJupiter(n);break;case"mars":this.drawMars(n);break;case"venus":this.drawVenus(n);break;case"mercury":this.drawMercury(n);break;case"uranus":this.drawUranus(n);break;case"neptune":this.drawNeptune(n);break;default:this.drawJupiter(n);break}const i=new bt(t);i.generateMipmaps=!0,i.minFilter=sn,i.magFilter=Pt,this.cache.set(e,i);const a="./",o=`${a.endsWith("/")?a:`${a}/`}textures/planets/${e}.png`,l=new Image;return l.crossOrigin="anonymous",l.onload=()=>{i.image=l,i.needsUpdate=!0},l.src=o,i}static drawSaturn(e){const r=e.createRadialGradient(512,512,100,512,512,480);r.addColorStop(0,"rgba(254, 240, 138, 0.25)"),r.addColorStop(.5,"rgba(217, 119, 6, 0.06)"),r.addColorStop(1,"rgba(0, 0, 0, 0)"),e.fillStyle=r,e.fillRect(0,0,1024,1024),e.save(),e.translate(512,512),e.rotate(-.48),e.save(),e.beginPath(),e.rect(-500,-500,1e3,500),e.clip(),this.renderSaturnRingBands(e),e.restore(),e.save(),e.beginPath(),e.ellipse(0,0,140,126,0,0,Math.PI*2),e.clip();const o=e.createRadialGradient(-35,-35,10,0,0,140);o.addColorStop(0,"#fef9c3"),o.addColorStop(.25,"#fef08a"),o.addColorStop(.55,"#eab308"),o.addColorStop(.82,"#ca8a04"),o.addColorStop(1,"#713f12"),e.fillStyle=o,e.fill(),[{y:-105,h:18,color:"rgba(161, 98, 7, 0.35)"},{y:-75,h:22,color:"rgba(254, 240, 138, 0.45)"},{y:-45,h:16,color:"rgba(202, 138, 4, 0.4)"},{y:-15,h:32,color:"rgba(254, 249, 195, 0.65)"},{y:22,h:20,color:"rgba(180, 83, 9, 0.42)"},{y:55,h:18,color:"rgba(234, 179, 8, 0.35)"},{y:85,h:24,color:"rgba(161, 98, 7, 0.38)"}].forEach(u=>{e.fillStyle=u.color,e.fillRect(-140,u.y,280,u.h)});const c=e.createRadialGradient(0,-111,0,0,-111,36);c.addColorStop(0,"rgba(125, 211, 252, 0.6)"),c.addColorStop(.6,"rgba(56, 189, 248, 0.25)"),c.addColorStop(1,"rgba(0, 0, 0, 0)"),e.fillStyle=c,e.beginPath(),e.arc(0,-111,36,0,Math.PI*2),e.fill();const d=e.createRadialGradient(0,0,126*.6,0,0,140);d.addColorStop(0,"rgba(0, 0, 0, 0)"),d.addColorStop(.75,"rgba(0, 0, 0, 0.2)"),d.addColorStop(1,"rgba(20, 10, 0, 0.7)"),e.fillStyle=d,e.fill(),e.restore(),e.save(),e.beginPath(),e.rect(-500,-500,1e3,500),e.clip();const h=e.createLinearGradient(0,0,-140,-180);h.addColorStop(0,"rgba(6, 4, 10, 0.95)"),h.addColorStop(.7,"rgba(6, 4, 10, 0.8)"),h.addColorStop(1,"rgba(0, 0, 0, 0)"),e.fillStyle=h,e.beginPath(),e.ellipse(35,-45,110,160,.25,0,Math.PI*2),e.fill(),e.restore(),e.save(),e.beginPath(),e.rect(-500,0,1e3,500),e.clip(),this.renderSaturnRingBands(e),e.restore(),e.save(),e.beginPath(),e.ellipse(0,0,140,126,0,0,Math.PI*2),e.clip(),e.strokeStyle="rgba(10, 6, 2, 0.88)",e.lineWidth=18,e.beginPath(),e.ellipse(0,12,140*1.05,34,0,0,Math.PI),e.stroke(),e.strokeStyle="rgba(10, 6, 2, 0.45)",e.lineWidth=8,e.beginPath(),e.ellipse(0,24,140*1.05,38,0,0,Math.PI),e.stroke(),e.restore(),e.restore()}static renderSaturnRingBands(e){for(let t=160;t<=215;t+=4){const n=.25+(t-160)/200;e.beginPath(),e.ellipse(0,0,t*1.05,t*.28,0,0,Math.PI*2),e.strokeStyle=`rgba(180, 83, 9, ${n*.4})`,e.lineWidth=4,e.stroke()}for(let t=220;t<=315;t+=3){const n=(t-220)/95,i=.75+Math.sin(n*14)*.15;e.beginPath(),e.ellipse(0,0,t*1.05,t*.28,0,0,Math.PI*2),e.strokeStyle=`rgba(254, 240, 138, ${i})`,e.lineWidth=3,e.stroke()}e.beginPath(),e.ellipse(0,0,322*1.05,322*.28,0,0,Math.PI*2),e.strokeStyle="rgba(0, 0, 0, 0.98)",e.lineWidth=14,e.stroke();for(let t=332;t<=425;t+=3){const i=Math.abs(t-395)<=2?.05:.55+Math.sin(t*.1)*.08;e.beginPath(),e.ellipse(0,0,t*1.05,t*.28,0,0,Math.PI*2),e.strokeStyle=`rgba(226, 232, 240, ${i})`,e.lineWidth=3,e.stroke()}}static drawJupiter(e){const r=e.createRadialGradient(512,512,220,512,512,480);r.addColorStop(0,"rgba(254, 215, 170, 0.35)"),r.addColorStop(.6,"rgba(194, 65, 12, 0.08)"),r.addColorStop(1,"rgba(0, 0, 0, 0)"),e.fillStyle=r,e.fillRect(0,0,1024,1024),e.save(),e.beginPath(),e.ellipse(512,512,340,318,0,0,Math.PI*2),e.clip();const o=e.createLinearGradient(512,194,512,830);o.addColorStop(0,"#78716c"),o.addColorStop(.18,"#fed7aa"),o.addColorStop(.32,"#c2410c"),o.addColorStop(.5,"#fff7ed"),o.addColorStop(.68,"#9a3412"),o.addColorStop(.85,"#fed7aa"),o.addColorStop(1,"#78716c"),e.fillStyle=o,e.fillRect(172,194,340*2,318*2),[{y:-240,h:32,color:"rgba(120, 113, 108, 0.55)"},{y:-190,h:28,color:"rgba(180, 83, 9, 0.65)"},{y:-145,h:42,color:"rgba(255, 237, 213, 0.85)"},{y:-95,h:56,color:"rgba(154, 52, 18, 0.85)"},{y:-30,h:50,color:"rgba(255, 247, 237, 0.95)"},{y:35,h:62,color:"rgba(194, 65, 12, 0.85)"},{y:110,h:42,color:"rgba(254, 215, 170, 0.85)"},{y:165,h:30,color:"rgba(180, 83, 9, 0.6)"},{y:215,h:35,color:"rgba(120, 113, 108, 0.55)"}].forEach(v=>{e.fillStyle=v.color,e.beginPath(),e.moveTo(172,512+v.y);for(let m=172;m<=852;m+=16){const f=Math.sin((m-512)*.025+v.y*.1)*4.5;e.lineTo(m,512+v.y+f)}e.lineTo(852,512+v.y+v.h);for(let m=852;m>=172;m-=16){const f=Math.cos((m-512)*.03+v.y*.08)*4;e.lineTo(m,512+v.y+v.h+f)}e.closePath(),e.fill()});for(let v=0;v<6;v++){const m=252+v*110,f=472;e.strokeStyle="rgba(56, 189, 248, 0.45)",e.lineWidth=5,e.beginPath(),e.moveTo(m,f-10),e.quadraticCurveTo(m+25,f+22,m+50,f+12),e.stroke()}const c=597,d=574,h=68,u=42;e.fillStyle="rgba(255, 245, 235, 0.9)",e.beginPath(),e.ellipse(c,d,h+16,u+12,-.08,0,Math.PI*2),e.fill();const p=e.createRadialGradient(c,d,6,c,d,h);p.addColorStop(0,"#f87171"),p.addColorStop(.4,"#dc2626"),p.addColorStop(.75,"#991b1b"),p.addColorStop(1,"rgba(127, 29, 29, 0.7)"),e.fillStyle=p,e.beginPath(),e.ellipse(c,d,h,u,-.08,0,Math.PI*2),e.fill(),e.fillStyle="rgba(254, 226, 226, 0.75)",e.beginPath(),e.ellipse(c-4,d-2,22,12,-.15,0,Math.PI*2),e.fill();for(let v=0;v<4;v++){const m=c+h+15+v*28,f=d+(v%2===0?8:-8);e.fillStyle="rgba(255, 255, 255, 0.8)",e.beginPath(),e.arc(m,f,4+v,0,Math.PI*2),e.fill()}for(let v=0;v<3;v++){const m=332+v*140,f=677;e.fillStyle="rgba(255, 255, 255, 0.85)",e.beginPath(),e.ellipse(m,f,16,9,0,0,Math.PI*2),e.fill()}const g=e.createRadialGradient(462,482,318*.4,512,512,340);g.addColorStop(0,"rgba(255, 255, 255, 0.15)"),g.addColorStop(.65,"rgba(0, 0, 0, 0)"),g.addColorStop(.88,"rgba(0, 0, 0, 0.35)"),g.addColorStop(1,"rgba(15, 10, 5, 0.82)"),e.fillStyle=g,e.beginPath(),e.ellipse(512,512,340,318,0,0,Math.PI*2),e.fill(),e.restore()}static drawMars(e){const a=e.createRadialGradient(512,512,264,512,512,445.50000000000006);a.addColorStop(0,"rgba(239, 68, 68, 0.3)"),a.addColorStop(.6,"rgba(185, 28, 28, 0.08)"),a.addColorStop(1,"rgba(0, 0, 0, 0)"),e.fillStyle=a,e.fillRect(0,0,1024,1024),e.save(),e.beginPath(),e.arc(512,512,330,0,Math.PI*2),e.clip();const r=e.createRadialGradient(452,452,30,512,512,330);r.addColorStop(0,"#fca5a5"),r.addColorStop(.3,"#f87171"),r.addColorStop(.65,"#dc2626"),r.addColorStop(.9,"#991b1b"),r.addColorStop(1,"#450a0a"),e.fillStyle=r,e.fill(),e.fillStyle="rgba(55, 12, 12, 0.75)",e.beginPath(),e.moveTo(552,422),e.lineTo(652,542),e.lineTo(532,597),e.closePath(),e.fill(),e.beginPath(),e.ellipse(432,537,120,38,-.15,0,Math.PI*2),e.fill(),e.beginPath(),e.ellipse(572,632,150,45,.2,0,Math.PI*2),e.fill(),e.strokeStyle="rgba(35, 6, 6, 0.8)",e.lineWidth=10,e.lineCap="round",e.beginPath(),e.moveTo(322,492),e.quadraticCurveTo(412,502,492,477),e.stroke();const o=e.createRadialGradient(637,657,10,637,657,65);o.addColorStop(0,"rgba(254, 215, 170, 0.85)"),o.addColorStop(.6,"rgba(251, 146, 60, 0.45)"),o.addColorStop(1,"rgba(0, 0, 0, 0)"),e.fillStyle=o,e.beginPath(),e.arc(637,657,65,0,Math.PI*2),e.fill();const l=e.createRadialGradient(512,217,5,512,217,80);l.addColorStop(0,"rgba(255, 255, 255, 1.0)"),l.addColorStop(.4,"rgba(241, 245, 249, 0.95)"),l.addColorStop(.85,"rgba(203, 213, 225, 0.5)"),l.addColorStop(1,"rgba(0, 0, 0, 0)"),e.fillStyle=l,e.beginPath(),e.ellipse(512,210,95,42,0,0,Math.PI*2),e.fill(),e.strokeStyle="rgba(45, 8, 8, 0.7)",e.lineWidth=6,e.beginPath(),e.ellipse(512,234,98,22,0,0,Math.PI),e.stroke();const c=e.createRadialGradient(512,512,330*.78,512,512,330);c.addColorStop(0,"rgba(0, 0, 0, 0)"),c.addColorStop(.85,"rgba(14, 116, 144, 0.25)"),c.addColorStop(1,"rgba(56, 189, 248, 0.65)"),e.fillStyle=c,e.beginPath(),e.arc(512,512,330,0,Math.PI*2),e.fill(),e.restore()}static drawVenus(e){const a=e.createRadialGradient(512,512,165,512,512,495);a.addColorStop(0,"rgba(255, 255, 255, 0.95)"),a.addColorStop(.3,"rgba(254, 240, 138, 0.35)"),a.addColorStop(.7,"rgba(56, 189, 248, 0.1)"),a.addColorStop(1,"rgba(0, 0, 0, 0)"),e.fillStyle=a,e.fillRect(0,0,1024,1024),e.save(),e.beginPath(),e.arc(512,512,330,-Math.PI*.5,Math.PI*.5,!1),e.ellipse(512,512,330*.42,330,0,Math.PI*.5,-Math.PI*.5,!0),e.closePath(),e.clip();const r=e.createRadialGradient(592,512,30,512,512,330);r.addColorStop(0,"#ffffff"),r.addColorStop(.3,"#fef9c3"),r.addColorStop(.65,"#fef08a"),r.addColorStop(.9,"#eab308"),r.addColorStop(1,"#a16207"),e.fillStyle=r,e.beginPath(),e.arc(512,512,330,0,Math.PI*2),e.fill(),e.strokeStyle="rgba(202, 138, 4, 0.18)",e.lineWidth=24,e.lineCap="round";for(let l=-2;l<=2;l++)e.beginPath(),e.moveTo(552,512+l*65),e.lineTo(672,512+l*65-45),e.stroke(),e.beginPath(),e.moveTo(552,512+l*65),e.lineTo(672,512+l*65+45),e.stroke();const o=e.createLinearGradient(512-330*.5,512,842,512);o.addColorStop(0,"rgba(30, 20, 10, 0.75)"),o.addColorStop(.4,"rgba(0, 0, 0, 0)"),e.fillStyle=o,e.beginPath(),e.arc(512,512,330,0,Math.PI*2),e.fill(),e.restore()}static drawMercury(e){e.save(),e.beginPath(),e.arc(512,512,320,-Math.PI*.5,Math.PI*.5,!1),e.ellipse(512,512,320*.15,320,0,Math.PI*.5,-Math.PI*.5,!0),e.closePath(),e.clip();const a=e.createRadialGradient(572,512,30,512,512,320);a.addColorStop(0,"#e2e8f0"),a.addColorStop(.35,"#94a3b8"),a.addColorStop(.7,"#475569"),a.addColorStop(1,"#1e293b"),e.fillStyle=a,e.beginPath(),e.arc(512,512,320,0,Math.PI*2),e.fill();const r=e.createRadialGradient(602,452,20,602,452,130);r.addColorStop(0,"rgba(30, 41, 59, 0.85)"),r.addColorStop(.6,"rgba(51, 65, 85, 0.5)"),r.addColorStop(1,"rgba(0, 0, 0, 0)"),e.fillStyle=r,e.beginPath(),e.arc(602,452,130,0,Math.PI*2),e.fill(),[{x:622,y:582,r:12},{x:557,y:392,r:10},{x:672,y:472,r:8}].forEach(l=>{for(let c=0;c<10;c++){const d=c/10*Math.PI*2;e.strokeStyle="rgba(248, 250, 252, 0.45)",e.lineWidth=2.5,e.beginPath(),e.moveTo(l.x,l.y),e.lineTo(l.x+Math.cos(d)*95,l.y+Math.sin(d)*95),e.stroke()}e.fillStyle="#ffffff",e.beginPath(),e.arc(l.x,l.y,l.r,0,Math.PI*2),e.fill()}),e.fillStyle="rgba(15, 23, 42, 0.7)";for(let l=0;l<45;l++){const c=512+Math.sin(l*17)*320*.35,d=512+Math.cos(l*23)*320*.8;e.beginPath(),e.arc(c,d,l%6+4,0,Math.PI*2),e.fill()}e.restore()}static drawUranus(e){const a=e.createRadialGradient(512,512,192,512,512,432);a.addColorStop(0,"rgba(125, 211, 252, 0.55)"),a.addColorStop(.5,"rgba(56, 189, 248, 0.15)"),a.addColorStop(1,"rgba(0, 0, 0, 0)"),e.fillStyle=a,e.fillRect(0,0,1024,1024),e.save(),e.beginPath(),e.arc(512,512,320,0,Math.PI*2),e.clip();const r=e.createRadialGradient(472,472,20,512,512,320);r.addColorStop(0,"#f0fdf4"),r.addColorStop(.3,"#bae6fd"),r.addColorStop(.65,"#38bdf8"),r.addColorStop(.9,"#0284c7"),r.addColorStop(1,"#0369a1"),e.fillStyle=r,e.fill();const o=e.createRadialGradient(512,512,0,512,512,180);o.addColorStop(0,"rgba(255, 255, 255, 0.45)"),o.addColorStop(.6,"rgba(240, 249, 255, 0.2)"),o.addColorStop(1,"rgba(0, 0, 0, 0)"),e.fillStyle=o,e.beginPath(),e.arc(512,512,180,0,Math.PI*2),e.fill();const l=e.createRadialGradient(512,512,320*.75,512,512,320);l.addColorStop(0,"rgba(0, 0, 0, 0)"),l.addColorStop(1,"rgba(7, 89, 133, 0.65)"),e.fillStyle=l,e.fill(),e.restore()}static drawNeptune(e){const a=e.createRadialGradient(512,512,192,512,512,432);a.addColorStop(0,"rgba(96, 165, 250, 0.5)"),a.addColorStop(.5,"rgba(37, 99, 235, 0.15)"),a.addColorStop(1,"rgba(0, 0, 0, 0)"),e.fillStyle=a,e.fillRect(0,0,1024,1024),e.save(),e.beginPath(),e.arc(512,512,320,0,Math.PI*2),e.clip();const r=e.createRadialGradient(462,472,20,512,512,320);r.addColorStop(0,"#bfdbfe"),r.addColorStop(.3,"#3b82f6"),r.addColorStop(.65,"#1d4ed8"),r.addColorStop(.9,"#1e3a8a"),r.addColorStop(1,"#172554"),e.fillStyle=r,e.fill();const o=e.createRadialGradient(557,572,5,557,572,55);o.addColorStop(0,"rgba(15, 23, 42, 0.85)"),o.addColorStop(.6,"rgba(30, 58, 138, 0.6)"),o.addColorStop(1,"rgba(0, 0, 0, 0)"),e.fillStyle=o,e.beginPath(),e.ellipse(557,572,55,32,.15,0,Math.PI*2),e.fill(),e.strokeStyle="rgba(255, 255, 255, 0.9)",e.lineWidth=5,e.lineCap="round",e.beginPath(),e.moveTo(392,597),e.lineTo(547,600),e.stroke(),e.strokeStyle="rgba(255, 255, 255, 0.8)",e.lineWidth=4,e.beginPath(),e.moveTo(582,554),e.lineTo(662,552),e.stroke(),e.strokeStyle="rgba(255, 255, 255, 0.65)",e.lineWidth=3.5,e.beginPath(),e.moveTo(432,417),e.lineTo(612,422),e.stroke();const l=e.createRadialGradient(512,512,320*.72,512,512,320);l.addColorStop(0,"rgba(0, 0, 0, 0)"),l.addColorStop(1,"rgba(10, 15, 45, 0.75)"),e.fillStyle=l,e.fill(),e.restore()}}const jm={mercury:{a0:.387098,a1:0,e0:.20563,e1:25e-6,I0:7.0049,I1:-.0059,L0:252.2509,L1:4.09233445,w0:77.4561,w1:.0016,node0:48.3309,node1:-.0125,baseMag:-.4,baseSizeArcsec:8},venus:{a0:.72333,a1:0,e0:.006772,e1:-48e-6,I0:3.3946,I1:-8e-4,L0:181.9798,L1:1.60213034,w0:131.5637,w1:.005,node0:76.6799,node1:-.0278,baseMag:-4.3,baseSizeArcsec:25},mars:{a0:1.523688,a1:0,e0:.0934,e1:9e-5,I0:1.8497,I1:-6e-4,L0:355.433,L1:.52403304,w0:336.0602,w1:.0018,node0:49.5581,node1:-.0295,baseMag:-1.5,baseSizeArcsec:14},jupiter:{a0:5.202603,a1:2e-8,e0:.048497,e1:163e-6,I0:1.3033,I1:-2e-4,L0:34.3515,L1:.08308529,w0:14.3312,w1:.0078,node0:100.4644,node1:.0064,baseMag:-2.6,baseSizeArcsec:45},saturn:{a0:9.554909,a1:-2e-6,e0:.05551,e1:-346e-6,I0:2.4889,I1:5e-4,L0:50.0774,L1:.03344414,w0:93.0568,w1:.0196,node0:113.6655,node1:-.0072,baseMag:.5,baseSizeArcsec:40},uranus:{a0:19.218446,a1:-4e-7,e0:.046296,e1:-27e-6,I0:.7732,I1:1e-4,L0:314.055,L1:.01172835,w0:173.0053,w1:.0149,node0:74.006,node1:.0074,baseMag:5.7,baseSizeArcsec:3.8},neptune:{a0:30.110387,a1:4e-7,e0:.008988,e1:6e-6,I0:1.77,I1:4e-4,L0:304.3487,L1:.00598103,w0:48.1203,w1:.0274,node0:131.7841,node1:-6e-4,baseMag:7.8,baseSizeArcsec:2.4}},Km={a0:1.000003,a1:0,e0:.01671,e1:-42e-6,I0:5e-5,I1:-.0133,L0:100.4664,L1:.98564736,w0:102.9373,w1:5e-5,node0:0,node1:0,baseMag:0,baseSizeArcsec:0};class Zm{constructor(e){this.planetSprites=new Map,this.planetDataList=[],this.textures=new Map,this.moonImage=null,this.lastRenderedMoonPhase=-1,this.celestialGroup=e,this.initMoonSystem(),this.initTextures(),this.createPlanetSprites()}initMoonSystem(){this.moonCanvas=document.createElement("canvas"),this.moonCanvas.width=1024,this.moonCanvas.height=1024,this.moonCtx=this.moonCanvas.getContext("2d"),this.moonTexture=new bt(this.moonCanvas),this.moonTexture.generateMipmaps=!0,this.moonTexture.minFilter=sn,this.moonTexture.magFilter=Pt;const e="./",n=`${e.endsWith("/")?e:`${e}/`}textures/planets/moon.png`,i=new Image;i.crossOrigin="anonymous",i.onload=()=>{this.moonImage=i,this.redrawMoon(this.lastRenderedMoonPhase>=0?this.lastRenderedMoonPhase:.5)},i.onerror=()=>{console.warn("Could not load NASA Moon texture, using high-res procedural fallback"),this.redrawMoon(.5)},i.src=n,this.redrawMoon(.5)}redrawMoon(e){this.lastRenderedMoonPhase=e;const t=this.moonCtx,n=1024,i=1024,a=512,r=512,o=440;t.clearRect(0,0,n,i);const l=t.createRadialGradient(a,r,o*.9,a,r,o*1.18);if(l.addColorStop(0,"rgba(241, 245, 249, 0.45)"),l.addColorStop(.5,"rgba(203, 213, 225, 0.12)"),l.addColorStop(1,"rgba(0, 0, 0, 0)"),t.fillStyle=l,t.fillRect(0,0,n,i),t.save(),t.beginPath(),t.arc(a,r,o,0,Math.PI*2),t.clip(),this.moonImage&&this.moonImage.complete&&this.moonImage.naturalWidth>0)t.drawImage(this.moonImage,a-o,r-o,o*2,o*2);else{const h=t.createRadialGradient(a-50,r-50,50,a,r,o);h.addColorStop(0,"#f8fafc"),h.addColorStop(.5,"#cbd5e1"),h.addColorStop(.8,"#94a3b8"),h.addColorStop(1,"#475569"),t.fillStyle=h,t.fill(),t.fillStyle="rgba(71, 85, 105, 0.65)",t.beginPath(),t.ellipse(a-140,r-100,180,140,.2,0,Math.PI*2),t.fill(),t.beginPath(),t.ellipse(a+100,r-60,120,100,-.3,0,Math.PI*2),t.fill(),t.beginPath(),t.ellipse(a+40,r+110,140,80,.1,0,Math.PI*2),t.fill()}const c=(e%1+1)%1;if(t.fillStyle="rgba(6, 10, 18, 0.92)",c<.02||c>.98)t.fillRect(0,0,n,i);else if(!(c>.48&&c<.52)){if(t.beginPath(),c<.5){t.arc(a,r,o+2,Math.PI*.5,Math.PI*1.5,!1);const h=Math.cos(c*Math.PI*2);t.ellipse(a,r,Math.abs(h)*o,o+2,0,Math.PI*1.5,Math.PI*.5,h>0)}else{t.arc(a,r,o+2,Math.PI*1.5,Math.PI*.5,!1);const h=Math.cos(c*Math.PI*2);t.ellipse(a,r,Math.abs(h)*o,o+2,0,Math.PI*.5,Math.PI*1.5,h>0)}t.fill()}const d=t.createRadialGradient(a,r,o*.8,a,r,o);d.addColorStop(0,"rgba(0, 0, 0, 0)"),d.addColorStop(1,"rgba(15, 23, 42, 0.45)"),t.fillStyle=d,t.fillRect(0,0,n,i),t.restore(),this.moonTexture.needsUpdate=!0}initTextures(){this.textures.set("mercury",Vn.getPlanetTexture("mercury")),this.textures.set("venus",Vn.getPlanetTexture("venus")),this.textures.set("mars",Vn.getPlanetTexture("mars")),this.textures.set("jupiter",Vn.getPlanetTexture("jupiter")),this.textures.set("saturn",Vn.getPlanetTexture("saturn")),this.textures.set("uranus",Vn.getPlanetTexture("uranus")),this.textures.set("neptune",Vn.getPlanetTexture("neptune")),this.textures.set("moon",this.moonTexture)}createSaturnTexture(){const e=document.createElement("canvas");e.width=512,e.height=512;const t=e.getContext("2d"),n=256,i=256,a=t.createRadialGradient(n,i,50,n,i,240);a.addColorStop(0,"rgba(253, 230, 138, 0.25)"),a.addColorStop(.5,"rgba(217, 119, 6, 0.08)"),a.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=a,t.fillRect(0,0,512,512),t.save(),t.translate(n,i),t.rotate(-.45),t.save(),t.beginPath(),t.rect(-250,-250,500,250),t.clip(),this.drawSaturnRings(t),t.restore();const r=64;t.beginPath(),t.arc(0,0,r,0,Math.PI*2);const o=t.createRadialGradient(-18,-18,5,0,0,r);o.addColorStop(0,"#fef08a"),o.addColorStop(.4,"#eab308"),o.addColorStop(.7,"#ca8a04"),o.addColorStop(1,"#854d0e"),t.fillStyle=o,t.fill();for(let c=-r;c<r;c+=4){const d=Math.sqrt(r*r-c*c);t.fillStyle=Math.abs(c)%12<6?"rgba(202, 138, 4, 0.4)":"rgba(254, 240, 138, 0.35)",t.fillRect(-d,c,d*2,3)}t.fillStyle="rgba(0,0,0,0.4)",t.beginPath(),t.arc(0,0,r,0,Math.PI*2),t.fill(),t.save(),t.beginPath(),t.rect(-250,0,500,250),t.clip(),this.drawSaturnRings(t),t.restore(),t.fillStyle="rgba(15, 23, 42, 0.65)",t.beginPath(),t.ellipse(0,0,r+4,18,0,0,Math.PI),t.fill(),t.restore();const l=new bt(e);return l.needsUpdate=!0,l}drawSaturnRings(e){const t=[{rX:220,rY:62,color:"rgba(234, 179, 8, 0.35)",width:14},{rX:198,rY:54,color:"rgba(0, 0, 0, 0.85)",width:6},{rX:185,rY:50,color:"rgba(254, 240, 138, 0.75)",width:28},{rX:145,rY:38,color:"rgba(180, 83, 9, 0.45)",width:12}];for(const n of t)e.beginPath(),e.ellipse(0,0,n.rX,n.rY,0,0,Math.PI*2),e.strokeStyle=n.color,e.lineWidth=n.width,e.stroke()}createJupiterTexture(){const e=document.createElement("canvas");e.width=512,e.height=512;const t=e.getContext("2d"),n=256,i=256,a=90,r=t.createRadialGradient(n,i,a*.8,n,i,a*2.2);r.addColorStop(0,"rgba(254, 215, 170, 0.3)"),r.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=r,t.fillRect(0,0,512,512),t.save(),t.beginPath(),t.arc(n,i,a,0,Math.PI*2),t.clip();const o=t.createLinearGradient(n,i-a,n,i+a);o.addColorStop(0,"#fed7aa"),o.addColorStop(.3,"#c2410c"),o.addColorStop(.5,"#ffedd5"),o.addColorStop(.7,"#9a3412"),o.addColorStop(1,"#fed7aa"),t.fillStyle=o,t.fill();const l=[-70,-50,-32,-14,0,18,38,58,72],c=["rgba(154, 52, 18, 0.7)","rgba(255, 237, 213, 0.85)","rgba(194, 65, 12, 0.85)","rgba(254, 215, 170, 0.9)","rgba(180, 83, 9, 0.75)","rgba(254, 240, 138, 0.85)","rgba(154, 52, 18, 0.8)","rgba(255, 237, 213, 0.8)","rgba(124, 45, 18, 0.65)"];for(let g=0;g<l.length;g++)t.fillStyle=c[g],t.fillRect(n-a,i+l[g],a*2,12);t.beginPath(),t.ellipse(n+28,i+32,18,11,-.1,0,Math.PI*2);const d=t.createRadialGradient(n+28,i+32,2,n+28,i+32,18);d.addColorStop(0,"#ef4444"),d.addColorStop(.6,"#b91c1c"),d.addColorStop(1,"rgba(185, 28, 28, 0.4)"),t.fillStyle=d,t.fill();const h=t.createRadialGradient(n-30,i-30,20,n,i,a);h.addColorStop(0,"rgba(255,255,255,0.2)"),h.addColorStop(.8,"rgba(0,0,0,0)"),h.addColorStop(1,"rgba(0,0,0,0.65)"),t.fillStyle=h,t.beginPath(),t.arc(n,i,a,0,Math.PI*2),t.fill(),t.restore();const u=[{x:n-210,y:i+4,r:4.5,color:"#fef08a",name:"Callisto"},{x:n-140,y:i-2,r:5.5,color:"#fed7aa",name:"Ganymede"},{x:n+130,y:i+3,r:4,color:"#e0f2fe",name:"Europa"},{x:n+180,y:i-5,r:4.8,color:"#facc15",name:"Io"}];for(const g of u)t.beginPath(),t.arc(g.x,g.y,g.r,0,Math.PI*2),t.fillStyle=g.color,t.shadowColor=g.color,t.shadowBlur=8,t.fill(),t.shadowBlur=0;const p=new bt(e);return p.needsUpdate=!0,p}createMarsTexture(){const e=document.createElement("canvas");e.width=512,e.height=512;const t=e.getContext("2d"),n=256,i=256,a=110,r=t.createRadialGradient(n,i,a*.8,n,i,a*2);r.addColorStop(0,"rgba(239, 68, 68, 0.35)"),r.addColorStop(.5,"rgba(185, 28, 28, 0.1)"),r.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=r,t.fillRect(0,0,512,512),t.save(),t.beginPath(),t.arc(n,i,a,0,Math.PI*2),t.clip();const o=t.createRadialGradient(n-30,i-30,20,n,i,a);o.addColorStop(0,"#f87171"),o.addColorStop(.4,"#dc2626"),o.addColorStop(.8,"#991b1b"),o.addColorStop(1,"#450a0a"),t.fillStyle=o,t.fill(),t.fillStyle="rgba(69, 10, 10, 0.65)",t.beginPath(),t.ellipse(n-15,i+20,45,25,.3,0,Math.PI*2),t.fill(),t.beginPath(),t.ellipse(n+35,i-10,30,18,-.4,0,Math.PI*2),t.fill(),t.fillStyle="#ffffff",t.beginPath(),t.ellipse(n,i-a+14,38,16,0,0,Math.PI*2),t.fill(),t.restore();const l=new bt(e);return l.needsUpdate=!0,l}createVenusTexture(){const e=document.createElement("canvas");e.width=512,e.height=512;const t=e.getContext("2d"),n=256,i=256,a=110,r=t.createRadialGradient(n,i,a*.5,n,i,a*2.2);r.addColorStop(0,"rgba(255, 255, 255, 0.9)"),r.addColorStop(.3,"rgba(254, 240, 138, 0.35)"),r.addColorStop(.7,"rgba(56, 189, 248, 0.1)"),r.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=r,t.fillRect(0,0,512,512),t.beginPath(),t.arc(n,i,a,0,Math.PI*2);const o=t.createRadialGradient(n-35,i-35,10,n,i,a);o.addColorStop(0,"#ffffff"),o.addColorStop(.4,"#fef9c3"),o.addColorStop(.8,"#fde047"),o.addColorStop(1,"#ca8a04"),t.fillStyle=o,t.fill();const l=new bt(e);return l.needsUpdate=!0,l}createMercuryTexture(){const e=document.createElement("canvas");e.width=512,e.height=512;const t=e.getContext("2d"),n=256,i=256,a=95;t.save(),t.beginPath(),t.arc(n,i,a,0,Math.PI*2),t.clip();const r=t.createRadialGradient(n-30,i-30,10,n,i,a);r.addColorStop(0,"#e2e8f0"),r.addColorStop(.5,"#94a3b8"),r.addColorStop(.8,"#475569"),r.addColorStop(1,"#1e293b"),t.fillStyle=r,t.fill(),t.fillStyle="rgba(30, 41, 59, 0.5)";for(let l=0;l<20;l++){const c=n+Math.sin(l*9)*a*.7,d=i+Math.cos(l*13)*a*.7;t.beginPath(),t.arc(c,d,l%5+3,0,Math.PI*2),t.fill()}t.restore();const o=new bt(e);return o.needsUpdate=!0,o}createUranusTexture(){const e=document.createElement("canvas");e.width=512,e.height=512;const t=e.getContext("2d"),n=256,i=256,a=95,r=t.createRadialGradient(n-25,i-25,10,n,i,a);r.addColorStop(0,"#e0f2fe"),r.addColorStop(.4,"#7dd3fc"),r.addColorStop(.8,"#0284c7"),r.addColorStop(1,"#075985"),t.fillStyle=r,t.beginPath(),t.arc(n,i,a,0,Math.PI*2),t.fill();const o=new bt(e);return o.needsUpdate=!0,o}createNeptuneTexture(){const e=document.createElement("canvas");e.width=512,e.height=512;const t=e.getContext("2d"),n=256,i=256,a=95,r=t.createRadialGradient(n-25,i-25,10,n,i,a);r.addColorStop(0,"#93c5fd"),r.addColorStop(.4,"#2563eb"),r.addColorStop(.8,"#1d4ed8"),r.addColorStop(1,"#1e3a8a"),t.fillStyle=r,t.beginPath(),t.arc(n,i,a,0,Math.PI*2),t.fill();const o=new bt(e);return o.needsUpdate=!0,o}createMoonTexture(){const e=document.createElement("canvas");e.width=512,e.height=512;const t=e.getContext("2d"),n=256,i=256,a=110,r=t.createRadialGradient(n,i,a*.8,n,i,a*2.2);r.addColorStop(0,"rgba(226, 232, 240, 0.45)"),r.addColorStop(.5,"rgba(148, 163, 184, 0.12)"),r.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=r,t.fillRect(0,0,512,512),t.save(),t.beginPath(),t.arc(n,i,a,0,Math.PI*2),t.clip();const o=t.createRadialGradient(n-20,i-20,20,n,i,a);o.addColorStop(0,"#f8fafc"),o.addColorStop(.5,"#cbd5e1"),o.addColorStop(.8,"#94a3b8"),o.addColorStop(1,"#475569"),t.fillStyle=o,t.fill(),t.fillStyle="rgba(71, 85, 105, 0.65)",t.beginPath(),t.ellipse(n-35,i-25,45,35,.2,0,Math.PI*2),t.fill(),t.beginPath(),t.ellipse(n+25,i-15,30,25,-.3,0,Math.PI*2),t.fill(),t.beginPath(),t.ellipse(n+10,i+28,35,20,.1,0,Math.PI*2),t.fill(),t.beginPath(),t.ellipse(n+45,i-35,20,18,.4,0,Math.PI*2),t.fill(),t.fillStyle="#ffffff",t.beginPath(),t.arc(n+8,i+62,5,0,Math.PI*2),t.fill(),t.restore();const l=new bt(e);return l.needsUpdate=!0,l}solveKepler(e,t){const n=e*Math.PI/180;let i=n;for(let a=0;a<15;a++){const r=(i-t*Math.sin(i)-n)/(1-t*Math.cos(i));if(i-=r,Math.abs(r)<1e-6)break}return i}getHeliocentric(e,t){const n=e.a0+e.a1*t,i=e.e0+e.e1*t,a=(e.I0+e.I1*t)*(Math.PI/180),r=(e.L0+e.L1*t)%360,o=(e.w0+e.w1*t)%360,l=(e.node0+e.node1*t)*(Math.PI/180),c=(r-o+360)%360,d=this.solveKepler(c,i),h=n*(Math.cos(d)-i),u=n*(Math.sqrt(1-i*i)*Math.sin(d)),p=Math.atan2(u,h),g=Math.sqrt(h*h+u*u),v=o*Math.PI/180,m=p+v-l,f=g*(Math.cos(l)*Math.cos(m)-Math.sin(l)*Math.sin(m)*Math.cos(a)),x=g*(Math.sin(l)*Math.cos(m)+Math.cos(l)*Math.sin(m)*Math.cos(a)),E=g*(Math.sin(m)*Math.sin(a));return{x:f,y:x,z:E}}calculatePlanets(e,t=24.14,n=121.27){const a=e.getTime()/864e5+24405875e-1-2451545,r=this.getHeliocentric(Km,a),o=(23.43929111-4e-7*a)*(Math.PI/180),l=[{id:"mercury",name:"水星 Mercury",nameEn:"Mercury",desc:"距離太陽最近的行星，暮光中的敏捷信使",feat:"岩質坑洞表面"},{id:"venus",name:"金星 Venus",nameEn:"Venus",desc:"夜空中最璀璨的啟明星與長庚星",feat:"耀眼銀白雲海 · 呈現金星相位"},{id:"mars",name:"火星 Mars",nameEn:"Mars",desc:"紅色荒漠行星，人類太空探索的下一個家園",feat:"紅色鐵鏽地貌 · 兩極白色極冠"},{id:"jupiter",name:"木星 Jupiter",nameEn:"Jupiter",desc:"太陽系行星之王，擁有絢麗氣態雲帶與大紅斑",feat:"雲帶斑紋 · 大紅斑旋渦 · 4大伽利略衛星同框"},{id:"saturn",name:"土星 Saturn",nameEn:"Saturn",desc:"太陽系最美麗的寶石，擁有壯麗宏偉的光環系統",feat:"宏偉土星環 · 卡西尼縫 · 金黃雲帶"},{id:"uranus",name:"天王星 Uranus",nameEn:"Uranus",desc:"側躺自轉的冰巨行星，散發淡雅青藍色光澤",feat:"青藍色氣態圓盤"},{id:"neptune",name:"海王星 Neptune",nameEn:"Neptune",desc:"太陽系最外側的大行星，深邃幽藍的風暴之王",feat:"深藍色冰巨星"}],c=[];for(const w of l){const R=jm[w.id];if(!R)continue;const S=this.getHeliocentric(R,a),M=S.x-r.x,A=S.y-r.y,B=S.z-r.z,F=M,O=A*Math.cos(o)-B*Math.sin(o),W=A*Math.sin(o)+B*Math.cos(o),$=Math.sqrt(F*F+O*O+W*W);let Q=Math.atan2(O,F)*(12/Math.PI);Q<0&&(Q+=24);const q=Math.asin(W/$)*(180/Math.PI),oe=Math.sqrt(S.x*S.x+S.y*S.y+S.z*S.z),le=R.baseMag+5*Math.log10(oe*$),X=R.baseSizeArcsec/$;c.push({id:w.id,name:w.name,nameEn:w.nameEn,type:et.Planet,ra:Q,dec:q,magnitude:parseFloat(le.toFixed(2)),angularSizeArcsec:parseFloat(X.toFixed(1)),description:w.desc,features:w.feat})}const d=t??24.14,h=n??121.27,u=Ti.getMoonPosition(e,d,h),p=Ti.getMoonIllumination(e),g=["新月","眉月","上弦月","盈凸月","滿月","虧凸月","下弦月","殘月"],v=Math.round(p.phase*8)%8,m=Math.PI/2-u.altitude,f=u.azimuth,x=new P().setFromSphericalCoords(995,m,f);this.celestialGroup.updateMatrixWorld(!0);const E=x.clone();this.celestialGroup.worldToLocal(E);const _=E.clone().normalize(),L=Math.asin(Math.max(-1,Math.min(1,_.y)))*(180/Math.PI);let C=Math.atan2(_.z,_.x)*(12/Math.PI);return C<0&&(C+=24),c.push({id:"moon",name:`月球 Moon (${g[v]})`,nameEn:"Moon",type:et.Planet,ra:C,dec:L,magnitude:-12.5+(1-p.fraction)*4,angularSizeArcsec:1800,description:`地球唯一的天然衛星，目前照亮比例 ${Math.round(p.fraction*100)}%`,features:`月海暗斑 · 第谷環形山輻射紋 · ${g[v]}`}),this.planetDataList=c,c}createPlanetSprites(){const e=["mercury","venus","mars","jupiter","saturn","uranus","neptune","moon"];for(const t of e){const n=this.textures.get(t);if(!n)continue;const i=new zr({map:n,color:16777215,transparent:!0,blending:jn,depthWrite:!1}),a=new Yl(i);a.name=`planet_${t}`,this.planetSprites.set(t,a),this.celestialGroup.add(a)}}update(e,t,n,i){const a=this.calculatePlanets(e,n,i),r=995,o=Ti.getMoonIllumination(e);Math.abs(o.phase-this.lastRenderedMoonPhase)>.003&&this.redrawMoon(o.phase);for(const l of a){const c=this.planetSprites.get(l.id);if(!c)continue;const d=l.ra*Math.PI/12,h=l.dec*Math.PI/180,u=r*Math.cos(h)*Math.cos(d),p=r*Math.sin(h),g=r*Math.cos(h)*Math.sin(d);c.position.set(u,p,g);let v=8;l.id==="moon"?v=38:l.id==="saturn"?v=14:l.id==="jupiter"?v=13.5:l.id==="venus"?v=12:l.id==="mars"?v=9:(l.id==="uranus"||l.id==="neptune")&&(v=7);const m=60/Math.max(.18,t),f=Math.pow(m,.82),x=v*(1+(f-1)*.55);c.scale.set(x,x,1)}}getPlanets(){return this.planetDataList}dispose(){for(const[,e]of this.planetSprites)e.material.dispose(),this.celestialGroup.remove(e);for(const[,e]of this.textures)e.dispose();this.planetSprites.clear(),this.textures.clear()}}class aa extends Xe{constructor(){const e=aa.SkyShader,t=new pt({name:e.name,uniforms:ts.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:wt,depthWrite:!1});super(new an(1,1,1),t),this.isSky=!0}}aa.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new P},up:{value:new P(0,1,0)}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;
		uniform vec3 up;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calcuation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( dot( vSunDirection, up ) );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorbtion + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform vec3 up;

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );
			L0 += ( vSunE * 19000.0 * Fex ) * sundisk;

			vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

			vec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );

			gl_FragColor = vec4( retColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};class Qm{constructor(e){this.scene=e,this.scene.background=new ke(66054),this.sky=new aa,this.sky.scale.setScalar(45e4);const t=this.sky.material.uniforms;t.turbidity.value=2,t.rayleigh.value=1,t.mieCoefficient.value=.003,t.mieDirectionalG.value=.8,this.scene.add(this.sky),this.sunLight=new ol(16777215,1),this.sunLight.castShadow=!0,this.sunLight.shadow.mapSize.width=1024,this.sunLight.shadow.mapSize.height=1024,this.sunLight.shadow.camera.near=.5,this.sunLight.shadow.camera.far=500;const n=50;this.sunLight.shadow.camera.left=-n,this.sunLight.shadow.camera.right=n,this.sunLight.shadow.camera.top=n,this.sunLight.shadow.camera.bottom=-n,this.scene.add(this.sunLight),this.moonLight=new ol(8956671,.15),this.moonLight.castShadow=!1,this.scene.add(this.moonLight),this.ambientLight=new Am(396312,.35),this.scene.add(this.ambientLight),this.hemisphereLight=new Tm(1055792,330245,.25),this.scene.add(this.hemisphereLight)}update(e,t,n){const i=Ti.getPosition(e,t,n),a=Ti.getMoonPosition(e,t,n),r=Math.PI/2-i.altitude,o=i.azimuth,l=Math.PI/2-a.altitude,c=a.azimuth,d=1e3,h=new P().setFromSphericalCoords(d,r,o),u=new P().setFromSphericalCoords(d,l,c),p=i.altitude,g=p*(180/Math.PI),v=this.sky.material.uniforms;if(g>0){const m=Math.min(1,g/45);v.turbidity.value=2,v.rayleigh.value=1.2+(1-m)*1.5,v.mieCoefficient.value=5e-4,v.mieDirectionalG.value=.85,v.sunPosition.value.copy(h),this.sunLight.intensity=Math.max(.2,m*1.2),g<10?(this.sunLight.color.setHSL(.08,.85,.6),this.ambientLight.color.setHex(3678232),this.ambientLight.intensity=.35):(this.sunLight.color.setHSL(.12,.15,.95),this.ambientLight.color.setHex(2111568),this.ambientLight.intensity=.45)}else{const m=Math.max(0,Math.min(1,-g/12));v.sunPosition.value.set(0,-1e3,0),v.turbidity.value=Math.max(.01,2*(1-m)),v.rayleigh.value=Math.max(.001,1*(1-m)),v.mieCoefficient.value=Math.max(1e-4,.003*(1-m)),this.sunLight.intensity=0,this.ambientLight.color.setHex(396312),this.ambientLight.intensity=.25}if(this.sunLight.position.copy(h),this.moonLight.position.copy(u),a.altitude>0){const m=Math.sin(Math.max(0,a.altitude));this.moonLight.intensity=m*.2}else this.moonLight.intensity=0;return p}dispose(){this.scene.remove(this.sky),this.scene.remove(this.sunLight),this.scene.remove(this.moonLight),this.scene.remove(this.ambientLight),this.scene.remove(this.hemisphereLight),this.sky.geometry.dispose(),this.sky.material.dispose()}}class Jm{constructor(){this.timeScales=[0,1,10,60,300,1e3],this.lastSunElevation=0}update(e){const t=te.getState();!t.isTimePaused&&t.timeScale>0&&t.advanceTime(e*1e3)}setSunElevation(e){this.lastSunElevation=e}reverseTime(e){return te.getState().reverseTime(e)}getFormattedTime(){return te.getState().currentTime.toLocaleString("zh-TW",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1})}getSunPhase(e){const n=(e??this.lastSunElevation)*(180/Math.PI);return n>6?"day":n>0?"golden_hour":n>-6?"civil_twilight":n>-12?"nautical_twilight":n>-18?"astronomical_twilight":"night"}}class e0{constructor(){this.timeSinceLastChange=0,this.changeInterval=0,this.resetTimer()}resetTimer(){this.changeInterval=300+Math.random()*600,this.timeSinceLastChange=0}update(e){this.timeSinceLastChange+=e,this.timeSinceLastChange>=this.changeInterval&&(this.transitionWeather(),this.resetTimer())}transitionWeather(){const e=te.getState().weather,t=Math.random();let n=e;switch(e){case qe.Clear:t<.7?n=qe.Clear:t<.95?n=qe.PartlyCloudy:n=qe.Cloudy;break;case qe.PartlyCloudy:t<.3?n=qe.Clear:t<.7?n=qe.PartlyCloudy:t<.95?n=qe.Cloudy:n=qe.Rainy;break;case qe.Cloudy:t<.1?n=qe.Clear:t<.35?n=qe.PartlyCloudy:t<.8?n=qe.Cloudy:n=qe.Rainy;break;case qe.Rainy:t<.05?n=qe.Clear:t<.2?n=qe.PartlyCloudy:t<.6?n=qe.Cloudy:n=qe.Rainy;break}n!==e&&te.getState().setWeather(n)}getVisibility(){switch(te.getState().weather){case qe.Clear:return 1;case qe.PartlyCloudy:return .6;case qe.Cloudy:return .1;case qe.Rainy:return 0;default:return 1}}getCloudCoverage(){switch(te.getState().weather){case qe.Clear:return 0;case qe.PartlyCloudy:return .4;case qe.Cloudy:return .8;case qe.Rainy:return 1;default:return 0}}}const t0=`
varying vec2 vUv;
void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,n0=`
uniform float time;
uniform float coverage;
uniform vec2 windDir;
varying vec2 vUv;

// Simple 2D noise function
vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0
                        0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)
                        -0.577350269189626, // -1.0 + 2.0 * C.x
                        0.024390243902439); // 1.0 / 41.0
    vec2 i  = floor(v + dot(v, C.yy) );
    vec2 x0 = v -   i + dot(i, C.xx);
    vec2 i1;
    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod289(i); // Avoid truncation effects in permutation
    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
        + i.x + vec3(0.0, i1.x, 1.0 ));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
    m = m*m ;
    m = m*m ;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
}

void main() {
    vec2 pos = vUv * 5.0 + windDir * time * 0.05;
    
    // Fractal noise
    float n = 0.5 * (snoise(pos) + 1.0);
    n += 0.25 * (snoise(pos * 2.0) + 1.0);
    n += 0.125 * (snoise(pos * 4.0) + 1.0);
    n /= (1.0 + 0.5 + 0.25 + 0.125);
    
    // Cloud density based on coverage
    float density = smoothstep(1.0 - coverage, 1.0 - coverage + 0.2, n);
    
    // Fade out at edges
    float edge = length(vUv - 0.5) * 2.0;
    float alpha = density * smoothstep(1.0, 0.5, edge) * coverage * 0.8;
    
    gl_FragColor = vec4(1.0, 1.0, 1.0, alpha);
}
`;class i0{constructor(e){this.time=0,this.scene=e,this.material=new pt({vertexShader:t0,fragmentShader:n0,uniforms:{time:{value:0},coverage:{value:0},windDir:{value:new Re(1,.5).normalize()}},transparent:!0,depthWrite:!1,side:$t});const t=new bn(1e4,1e4);this.mesh=new Xe(t,this.material),this.mesh.rotation.x=-Math.PI/2,this.mesh.position.y=300,this.scene.add(this.mesh)}update(e,t,n){this.time+=e,this.material.uniforms.time.value=this.time;const i=this.material.uniforms.coverage.value;this.material.uniforms.coverage.value=ad.lerp(i,t,e*.1),this.material.uniforms.windDir.value.copy(n)}dispose(){this.scene.remove(this.mesh),this.mesh.geometry.dispose(),this.material.dispose()}}const s0=`
uniform float time;
attribute float speed;
attribute float phase;
varying vec2 vUv;
void main() {
    vUv = uv;
    vec3 pos = position;
    // Fall downwards
    pos.y -= mod(time * speed + phase, 100.0); // wrap around 100 units
    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    gl_PointSize = 100.0 / -mvPosition.z; // Scale by distance
}
`,a0=`
varying vec2 vUv;
uniform float intensity;
void main() {
    // Make streaks
    vec2 uv = gl_PointCoord - 0.5;
    float len = length(vec2(uv.x, uv.y * 0.1));
    float alpha = smoothstep(0.05, 0.0, len) * 0.3 * intensity;
    
    if(alpha < 0.01) discard;
    gl_FragColor = vec4(0.8, 0.9, 1.0, alpha);
}
`;class r0{constructor(e){this.time=0,this.rainCount=3e3,this.visible=!1,this.scene=e;const t=new _t,n=new Float32Array(this.rainCount*3),i=new Float32Array(this.rainCount),a=new Float32Array(this.rainCount);for(let r=0;r<this.rainCount;r++)n[r*3]=(Math.random()-.5)*100,n[r*3+1]=Math.random()*100,n[r*3+2]=(Math.random()-.5)*100,i[r]=20+Math.random()*20,a[r]=Math.random()*100;t.setAttribute("position",new Mt(n,3)),t.setAttribute("speed",new Mt(i,1)),t.setAttribute("phase",new Mt(a,1)),this.material=new pt({vertexShader:s0,fragmentShader:a0,uniforms:{time:{value:0},intensity:{value:0}},transparent:!0,depthWrite:!1,blending:wi}),this.points=new jl(t,this.material),this.points.visible=!1,this.scene.add(this.points)}update(e,t,n){if(n<=.01&&!this.visible){this.points.visible=!1;return}this.points.visible=!0,this.time+=e,this.material.uniforms.time.value=this.time,this.material.uniforms.intensity.value=n,this.points.position.set(t.x,0,t.z)}setVisible(e){this.visible=e,e||(this.material.uniforms.intensity.value=0)}dispose(){this.scene.remove(this.points),this.points.geometry.dispose(),this.material.dispose()}}class o0{constructor(){this.ctx=null,this.masterGain=null,this.masterCompressor=null,this.masterFilter=null,this.categories={},this.initialized=!1,this.currentSunPhase="",this.activeAmbientSource=null,this.activeAmbientFilter=null,this.ambientGain=null,this.activeWeather=null,this.weatherGain=null,this.natureTimer=null,this.isRaining=!1}init(){if(!this.initialized)try{const e=window.AudioContext||window.webkitAudioContext;this.ctx=new e,this.masterCompressor=this.ctx.createDynamicsCompressor(),this.masterCompressor.threshold.setValueAtTime(-6,this.ctx.currentTime),this.masterCompressor.knee.setValueAtTime(10,this.ctx.currentTime),this.masterCompressor.ratio.setValueAtTime(12,this.ctx.currentTime),this.masterCompressor.attack.setValueAtTime(.003,this.ctx.currentTime),this.masterCompressor.release.setValueAtTime(.25,this.ctx.currentTime),this.masterFilter=this.ctx.createBiquadFilter(),this.masterFilter.type="lowpass",this.masterFilter.frequency.setValueAtTime(3e3,this.ctx.currentTime),this.masterFilter.Q.setValueAtTime(.7,this.ctx.currentTime),this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(.65,this.ctx.currentTime),this.masterFilter.connect(this.masterGain),this.masterGain.connect(this.masterCompressor),this.masterCompressor.connect(this.ctx.destination),["ambient","weather","machine","sfx"].forEach(t=>{const n=this.ctx.createGain();n.connect(this.masterFilter),this.categories[t]=n}),this.initialized=!0,this.startNatureScheduler()}catch(e){console.error("Failed to initialize AudioContext:",e)}}createNoiseBuffer(e,t=6){if(!this.ctx)return null;const n=this.ctx.sampleRate,i=n*t,a=this.ctx.createBuffer(1,i,n),r=a.getChannelData(0);let o=0,l=0;for(let d=0;d<i;d++){const h=Math.random()*2-1;e==="pink"?(o=.99*o+h*.05,l=.96*l+h*.15,r[d]=(o+l)*.25):e==="brown"&&(o=(o+.02*h)/1.02,r[d]=o*2.2)}const c=Math.floor(n*.1);for(let d=0;d<c;d++){const h=d/c,u=r[d],p=r[i-c+d];r[d]=u*h+p*(1-h),r[i-c+d]=r[d]}return a}setAmbientForPhase(e){if(!this.ctx||!this.initialized||this.currentSunPhase===e&&this.activeAmbientSource)return;this.currentSunPhase=e;const t=this.ctx.currentTime;if(this.ambientGain&&this.activeAmbientSource){const r=this.activeAmbientSource;this.ambientGain.gain.setTargetAtTime(.001,t,.4),setTimeout(()=>{try{r.stop()}catch{}},600)}this.ambientGain=this.ctx.createGain(),this.ambientGain.gain.setValueAtTime(.001,t),this.ambientGain.connect(this.categories.ambient);const n=this.createNoiseBuffer("brown",6);if(!n)return;const i=this.ctx.createBufferSource();i.buffer=n,i.loop=!0;const a=this.ctx.createBiquadFilter();a.type="lowpass",e==="night"||e==="astronomical_twilight"?(a.frequency.setValueAtTime(140,t),this.ambientGain.gain.setTargetAtTime(.08,t,.8)):(a.frequency.setValueAtTime(200,t),this.ambientGain.gain.setTargetAtTime(.05,t,.8)),i.connect(a),a.connect(this.ambientGain),i.start(),this.activeAmbientSource=i,this.activeAmbientFilter=a}startNatureScheduler(){this.natureTimer&&clearInterval(this.natureTimer);const e=()=>{if(!this.ctx||!this.initialized||this.isRaining){this.natureTimer=window.setTimeout(e,3e3);return}if(this.currentSunPhase==="night"||this.currentSunPhase==="astronomical_twilight"||this.currentSunPhase==="nautical_twilight"){this.triggerCricketChirp();const n=1800+Math.random()*3200;this.natureTimer=window.setTimeout(e,n)}else{this.triggerBirdSong();const n=3500+Math.random()*4500;this.natureTimer=window.setTimeout(e,n)}};this.natureTimer=window.setTimeout(e,2e3)}triggerCricketChirp(){if(!this.ctx||!this.initialized)return;const e=this.ctx.currentTime,t=4600+Math.random()*400,n=3,i=.035,a=.025;let r=null;typeof this.ctx.createStereoPanner=="function"&&(r=this.ctx.createStereoPanner(),r.pan.setValueAtTime(Math.random()*1.4-.7,e));const o=this.ctx.createBiquadFilter();o.type="bandpass",o.frequency.setValueAtTime(t,e),o.Q.setValueAtTime(4,e);const l=this.ctx.createGain();l.gain.setValueAtTime(1e-4,e);for(let d=0;d<n;d++){const h=e+d*(i+a),u=h+i*.3,p=h+i,g=.05+Math.random()*.03;l.gain.setValueAtTime(1e-4,h),l.gain.linearRampToValueAtTime(g,u),l.gain.linearRampToValueAtTime(1e-4,p)}const c=this.ctx.createOscillator();c.type="sine",c.frequency.setValueAtTime(t,e),c.connect(o),o.connect(l),r?(l.connect(r),r.connect(this.categories.ambient)):l.connect(this.categories.ambient),c.start(e),c.stop(e+n*(i+a)+.05)}triggerBirdSong(){if(!this.ctx||!this.initialized)return;const e=this.ctx.currentTime,t=Math.random()<.5?2:3;let n=null;typeof this.ctx.createStereoPanner=="function"&&(n=this.ctx.createStereoPanner(),n.pan.setValueAtTime(Math.random()*1.4-.7,e));let i=e;for(let a=0;a<t;a++){const r=i,o=.12+Math.random()*.1,l=2400+Math.random()*800,c=l+(Math.random()*800-300),d=this.ctx.createOscillator();d.type="sine",d.frequency.setValueAtTime(l,r),d.frequency.exponentialRampToValueAtTime(Math.max(1e3,c),r+o);const h=this.ctx.createGain();h.gain.setValueAtTime(1e-4,r),h.gain.linearRampToValueAtTime(.045,r+o*.3),h.gain.exponentialRampToValueAtTime(1e-4,r+o),d.connect(h),n?(h.connect(n),n.connect(this.categories.ambient)):h.connect(this.categories.ambient),d.start(r),d.stop(r+o+.02),i+=o+(.05+Math.random()*.08)}}setWeatherAudio(e,t){if(!(!this.ctx||!this.initialized))if(this.isRaining=e==="Rainy",e==="Rainy"){if(!this.activeWeather){const n=this.createNoiseBuffer("pink",6);if(!n)return;const i=this.ctx.createBufferSource();i.buffer=n,i.loop=!0;const a=this.ctx.createBiquadFilter();a.type="lowpass",a.frequency.setValueAtTime(650,this.ctx.currentTime),this.weatherGain=this.ctx.createGain(),this.weatherGain.gain.setValueAtTime(.001,this.ctx.currentTime),this.weatherGain.connect(this.categories.weather),i.connect(a),a.connect(this.weatherGain),i.start(),this.activeWeather=i}this.weatherGain&&this.weatherGain.gain.setTargetAtTime(t*.18,this.ctx.currentTime,.5)}else this.weatherGain&&this.weatherGain.gain.setTargetAtTime(.001,this.ctx.currentTime,.5)}playShutter(){if(!this.ctx||!this.initialized)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator();t.type="sine",t.frequency.setValueAtTime(240,e),t.frequency.exponentialRampToValueAtTime(60,e+.06);const n=this.ctx.createGain();n.gain.setValueAtTime(.25,e),n.gain.exponentialRampToValueAtTime(.001,e+.07),t.connect(n),n.connect(this.categories.machine),t.start(e),t.stop(e+.08)}playMotor(e=.3){if(!this.ctx||!this.initialized)return;const t=this.ctx.currentTime,n=this.ctx.createOscillator();n.type="triangle",n.frequency.setValueAtTime(65,t),n.frequency.linearRampToValueAtTime(75,t+e*.5),n.frequency.linearRampToValueAtTime(60,t+e);const i=this.ctx.createBiquadFilter();i.type="lowpass",i.frequency.setValueAtTime(120,t);const a=this.ctx.createGain();a.gain.setValueAtTime(.001,t),a.gain.linearRampToValueAtTime(.12,t+.05),a.gain.setValueAtTime(.12,t+e-.05),a.gain.linearRampToValueAtTime(.001,t+e),n.connect(i),i.connect(a),a.connect(this.categories.machine),n.start(t),n.stop(t+e)}playCoins(){if(!this.ctx||!this.initialized)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator();t.type="sine",t.frequency.setValueAtTime(880,e),t.frequency.exponentialRampToValueAtTime(1200,e+.1);const n=this.ctx.createGain();n.gain.setValueAtTime(.15,e),n.gain.exponentialRampToValueAtTime(.001,e+.15),t.connect(n),n.connect(this.categories.sfx),t.start(e),t.stop(e+.15)}playClick(){if(!this.ctx||!this.initialized)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator();t.type="sine",t.frequency.setValueAtTime(360,e),t.frequency.exponentialRampToValueAtTime(180,e+.03);const n=this.ctx.createGain();n.gain.setValueAtTime(.08,e),n.gain.exponentialRampToValueAtTime(.001,e+.03),t.connect(n),n.connect(this.categories.sfx),t.start(e),t.stop(e+.035)}setMasterVolume(e){this.masterGain&&this.ctx&&this.masterGain.gain.setTargetAtTime(Math.max(0,Math.min(1,e)),this.ctx.currentTime,.05)}setCategory(e,t){const n=this.categories[e];n&&this.ctx&&n.gain.setTargetAtTime(Math.max(0,Math.min(1,t)),this.ctx.currentTime,.05)}dispose(){this.natureTimer&&(clearTimeout(this.natureTimer),this.natureTimer=null),this.ctx&&(this.ctx.close(),this.initialized=!1)}}const Mi=new Gt(0,0,0,"YXZ"),_i=new P,l0={type:"change"},c0={type:"lock"},d0={type:"unlock"},dl=Math.PI/2;class h0 extends Rm{constructor(e,t=null){super(e,t),this.isLocked=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.pointerSpeed=1,this._onMouseMove=u0.bind(this),this._onPointerlockChange=f0.bind(this),this._onPointerlockError=p0.bind(this),this.domElement!==null&&this.connect()}connect(){this.domElement.ownerDocument.addEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.addEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.addEventListener("pointerlockerror",this._onPointerlockError)}disconnect(){this.domElement.ownerDocument.removeEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.removeEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.removeEventListener("pointerlockerror",this._onPointerlockError)}dispose(){this.disconnect()}getObject(){return console.warn("THREE.PointerLockControls: getObject() has been deprecated. Use controls.object instead."),this.object}getDirection(e){return e.set(0,0,-1).applyQuaternion(this.object.quaternion)}moveForward(e){if(this.enabled===!1)return;const t=this.object;_i.setFromMatrixColumn(t.matrix,0),_i.crossVectors(t.up,_i),t.position.addScaledVector(_i,e)}moveRight(e){if(this.enabled===!1)return;const t=this.object;_i.setFromMatrixColumn(t.matrix,0),t.position.addScaledVector(_i,e)}lock(){this.domElement.requestPointerLock()}unlock(){this.domElement.ownerDocument.exitPointerLock()}}function u0(s){if(this.enabled===!1||this.isLocked===!1)return;const e=s.movementX||s.mozMovementX||s.webkitMovementX||0,t=s.movementY||s.mozMovementY||s.webkitMovementY||0,n=this.object;Mi.setFromQuaternion(n.quaternion),Mi.y-=e*.002*this.pointerSpeed,Mi.x-=t*.002*this.pointerSpeed,Mi.x=Math.max(dl-this.maxPolarAngle,Math.min(dl-this.minPolarAngle,Mi.x)),n.quaternion.setFromEuler(Mi),this.dispatchEvent(l0)}function f0(){this.domElement.ownerDocument.pointerLockElement===this.domElement?(this.dispatchEvent(c0),this.isLocked=!0):(this.dispatchEvent(d0),this.isLocked=!1)}function p0(){console.error("THREE.PointerLockControls: Unable to use Pointer Lock API")}class m0{constructor(e,t,n){this.moveForward=!1,this.moveBackward=!1,this.moveLeft=!1,this.moveRight=!1,this.isSprinting=!1,this.isAltHeld=!1,this.velocity=new P,this.direction=new P,this.playerHeight=1.7,this.walkSpeed=5,this.telescopeModeOrigin=new P,this.exposureCycle=[5,15,30,60,120,300],this.camera=e,this.canvas=t,this.scene=n,this.controls=new h0(this.camera,document.body),this.scene.add(this.controls.getObject()),this.controls.getObject().position.y=this.playerHeight,this.crosshair=document.createElement("div"),this.crosshair.className="crosshair",document.getElementById("ui-overlay")?.appendChild(this.crosshair),this.onKeyDown=this.onKeyDown.bind(this),this.onKeyUp=this.onKeyUp.bind(this),this.onMouseMove=this.onMouseMove.bind(this),this.onWheel=this.onWheel.bind(this),document.addEventListener("keydown",this.onKeyDown),document.addEventListener("keyup",this.onKeyUp),document.addEventListener("mousemove",this.onMouseMove),document.addEventListener("wheel",this.onWheel,{passive:!1}),window.addEventListener("contextmenu",a=>a.preventDefault()),window.addEventListener("blur",()=>{this.isAltHeld=!1});const i=a=>{if(a.button!==0||this.isAltHeld||this.isAnyModalActive())return;const r=a.target;if(r&&r.closest(".hud-panel, .studio-panel, button, input, select, .guide-badge, .money-badge, .weather-badge, .audio-badge, .story-box, .codex-panel, .lightbox-content"))return;const o=te.getState().gameMode;(o===we.Walk||o===we.Telescope)&&!this.controls.isLocked&&this.controls.lock()};this.canvas.addEventListener("mousedown",i),window.addEventListener("click",i),this.unsubscribe=te.subscribe((a,r)=>{a.gameMode!==r.gameMode&&this.handleModeChange(a.gameMode,r.gameMode)})}isAnyModalActive(){const e=[".codex-panel",".lightbox-overlay",".guide-modal",".location-modal",".time-reversal-panel",".audio-modal",".story-modal"];for(const t of e){const n=document.querySelector(t);if(n&&n.style.display!=="none"&&getComputedStyle(n).display!=="none")return!0}return!1}handleModeChange(e,t){e===we.Walk?(this.crosshair.style.display="block",t===we.Telescope&&(this.camera.position.copy(this.telescopeModeOrigin),this.camera.fov=60,this.camera.updateProjectionMatrix())):e===we.Telescope?(this.crosshair.style.display="none",this.telescopeModeOrigin.copy(this.camera.position),setTimeout(()=>{te.getState().gameMode===we.Telescope&&!this.controls.isLocked&&this.controls.lock()},50)):e===we.Studio&&(this.crosshair.style.display="none",this.controls.unlock())}onKeyDown(e){const t=te.getState(),n=t.gameMode;if(e.key==="Alt"||e.code==="AltLeft"||e.code==="AltRight"){e.preventDefault(),this.isAltHeld||(this.isAltHeld=!0,this.controls.unlock());return}if(e.code==="Escape"){if(this.isAnyModalActive())return;if(n===we.Telescope||n===we.Studio){t.setGameMode(we.Walk);return}}if(n===we.Walk)switch(e.code){case"KeyW":this.moveForward=!0;break;case"KeyA":this.moveLeft=!0;break;case"KeyS":this.moveBackward=!0;break;case"KeyD":this.moveRight=!0;break;case"ShiftLeft":case"ShiftRight":this.isSprinting=!0;break;case"KeyE":t.setGameMode(we.Telescope);break;case"KeyF":t.setGameMode(we.Studio);break}else if(n===we.Telescope)switch(e.code){case"Space":case"KeyE":document.dispatchEvent(new CustomEvent("capture-photo"));return;case"KeyF":document.dispatchEvent(new CustomEvent("toggle-finder-ui"));return;case"Digit1":t.setFrameType("light"),document.dispatchEvent(new CustomEvent("frame-type-changed",{detail:"light"}));return;case"Digit2":t.setFrameType("dark"),document.dispatchEvent(new CustomEvent("frame-type-changed",{detail:"dark"}));return;case"Digit3":t.setFrameType("flat"),document.dispatchEvent(new CustomEvent("frame-type-changed",{detail:"flat"}));return;case"Digit4":t.setFrameType("bias"),document.dispatchEvent(new CustomEvent("frame-type-changed",{detail:"bias"}));return;case"KeyV":{const i=["light","dark","flat","bias"],a=(i.indexOf(t.currentFrameType)+1)%i.length;t.setFrameType(i[a]),document.dispatchEvent(new CustomEvent("frame-type-changed",{detail:i[a]}));return}case"ArrowUp":case"ArrowDown":case"ArrowLeft":case"ArrowRight":this.handleTelescopeSlew(e.code),document.dispatchEvent(new CustomEvent("telescope-slew"));break}switch(e.code){case"Digit1":n!==we.Telescope&&t.setTimeScale(1);break;case"Digit2":n!==we.Telescope&&t.setTimeScale(10);break;case"Digit3":n!==we.Telescope&&t.setTimeScale(60);break;case"Digit4":n!==we.Telescope&&t.setTimeScale(300);break;case"Digit5":n!==we.Telescope&&t.setTimeScale(1e3);break;case"KeyP":t.toggleTimePause();break;case"KeyC":t.toggleConstellations();break;case"KeyN":t.toggleStarNames();break;case"KeyM":t.toggleMute();break;case"KeyU":case"KeyH":t.toggleUIVisibility();break}}handleTelescopeSlew(e){const t=te.getState(),i=.5*(t.currentFov/60);let a=t.telescopeRa,r=t.telescopeDec;e==="ArrowUp"&&(r+=i),e==="ArrowDown"&&(r-=i),e==="ArrowLeft"&&(a-=i/15),e==="ArrowRight"&&(a+=i/15),r=Math.max(-90,Math.min(90,r)),a<0&&(a+=24),a>=24&&(a-=24),t.setTelescopePointing(a,r)}onKeyUp(e){if(e.key==="Alt"||e.code==="AltLeft"||e.code==="AltRight"){e.preventDefault(),this.isAltHeld=!1;const n=te.getState().gameMode;(n===we.Walk||n===we.Telescope)&&!this.isAnyModalActive()&&!this.controls.isLocked&&this.controls.lock();return}switch(e.code){case"KeyW":this.moveForward=!1;break;case"KeyA":this.moveLeft=!1;break;case"KeyS":this.moveBackward=!1;break;case"KeyD":this.moveRight=!1;break;case"ShiftLeft":case"ShiftRight":this.isSprinting=!1;break}}onMouseMove(e){if(te.getState().gameMode===we.Telescope&&(this.controls.isLocked||e.buttons>0)){const n=te.getState(),i=n.currentFov/60,a=e.buttons===2?.25:1;let r=n.telescopeRa,o=n.telescopeDec;r-=e.movementX*.0018*i*a,o+=e.movementY*.025*i*a,o=Math.max(-90,Math.min(90,o)),r<0&&(r+=24),r>=24&&(r-=24),n.setTelescopePointing(r,o),(Math.abs(e.movementX)>2||Math.abs(e.movementY)>2)&&document.dispatchEvent(new CustomEvent("telescope-slew"))}}setOptics(e){this.optics=e}onWheel(e){const t=te.getState();if(t.gameMode===we.Telescope){e.preventDefault();let n=t.currentFov;n*=e.deltaY>0?1.1:.9;const[i,a]=this.optics?this.optics.getEffectiveFovRange():[.2,60];n=Math.max(i,Math.min(a,n)),t.setFov(n)}}update(e){if(te.getState().gameMode===we.Walk&&this.controls.isLocked){this.velocity.x-=this.velocity.x*10*e,this.velocity.z-=this.velocity.z*10*e,this.direction.z=Number(this.moveForward)-Number(this.moveBackward),this.direction.x=Number(this.moveRight)-Number(this.moveLeft),this.direction.normalize();const n=this.isSprinting?this.walkSpeed*2:this.walkSpeed;(this.moveForward||this.moveBackward)&&(this.velocity.z-=this.direction.z*n*10*e),(this.moveLeft||this.moveRight)&&(this.velocity.x-=this.direction.x*n*10*e),this.controls.moveRight(-this.velocity.x*e),this.controls.moveForward(-this.velocity.z*e),this.controls.getObject().position.y=this.playerHeight}}dispose(){this.unsubscribe(),document.removeEventListener("keydown",this.onKeyDown),document.removeEventListener("keyup",this.onKeyUp),document.removeEventListener("mousemove",this.onMouseMove),document.removeEventListener("wheel",this.onWheel),this.controls.disconnect(),this.crosshair.remove()}}class g0{constructor(e){this.group=new zt;const t=250,n=new na(t,64);n.rotateX(-Math.PI/2);const i=document.createElement("canvas");i.width=512,i.height=512;const a=i.getContext("2d");a.fillStyle="#0f1a0e",a.fillRect(0,0,512,512);for(let h=0;h<4e3;h++){const u=Math.random()*512,p=Math.random()*512,g=Math.random()*2+1,v=Math.random()>.6?"rgba(35, 45, 30, 0.4)":"rgba(15, 20, 15, 0.5)";a.fillStyle=v,a.beginPath(),a.arc(u,p,g,0,Math.PI*2),a.fill()}const r=new bt(i);r.wrapS=Qi,r.wrapT=Qi,r.repeat.set(16,16);const o=new Rt({map:r,color:2240544,roughness:.95,metalness:.05,side:$t}),l=new Xe(n,o);l.position.y=-.2,l.receiveShadow=!0,this.group.add(l);const c=new Rt({color:330258,roughness:.98,flatShading:!0}),d=24;for(let h=0;h<d;h++){const u=h/d*Math.PI*2,p=320+h%3*40,g=30+Math.sin(h*3)*18+Math.random()*10,v=60+Math.random()*30,m=new ia(v,g,5),f=new Xe(m,c);f.position.set(Math.cos(u)*p,g*.45,Math.sin(u)*p),this.group.add(f)}e.add(this.group)}setVisible(e){this.group.visible=e}dispose(){this.group.parent?.remove(this.group)}}class v0{constructor(e){this.interactionDistance=4,this.group=new zt,this.group.position.set(0,0,-3.5);const t=new Rt({color:1844019,roughness:.85,metalness:.15}),n=new Bt(1.6,1.7,.08,32),i=new Xe(n,t);i.position.y=.04,i.receiveShadow=!0,this.group.add(i);const a=new Kn({color:959977}),r=new Gr(1.48,1.52,32);r.rotateX(-Math.PI/2);const o=new Xe(r,a);o.position.y=.082,this.group.add(o);const l=new Si(3718648,.8,4);l.position.set(1.3,.2,0),this.group.add(l);const c=new Si(3718648,.8,4);c.position.set(-1.3,.2,0),this.group.add(c);const d=new Rt({color:2237996,metalness:.85,roughness:.25}),h=new Rt({color:1580066,metalness:.9,roughness:.2}),u=new Rt({color:16317180,metalness:.2,roughness:.15}),p=new Rt({color:15381256,metalness:.9,roughness:.25});for(let O=0;O<3;O++){const W=new Bt(.025,.02,1.4),$=new Xe(W,d);$.position.y=.7;const Q=O/3*Math.PI*2;$.position.x=Math.cos(Q)*.38,$.position.z=Math.sin(Q)*.38,$.rotation.x=.28,$.rotation.y=-Q,this.group.add($)}const g=new Bt(.22,.22,.02,3),v=new Xe(g,h);v.position.y=.65,this.group.add(v);const m=new Bt(.1,.13,.28,16),f=new Xe(m,h);f.position.y=1.4,this.group.add(f);const x=new Bt(.012,.012,.45),E=new Xe(x,d);E.position.set(0,1.2,-.22),E.rotation.x=Math.PI/4,this.group.add(E);const _=new Bt(.07,.07,.08,16),L=new Xe(_,h);L.position.set(0,1.05,-.37),L.rotation.x=Math.PI/4,this.group.add(L),this.tubeGroup=new zt,this.tubeGroup.position.set(0,1.55,0);const C=new Bt(.13,.13,1.05,24);C.rotateX(Math.PI/2);const w=new Xe(C,u);this.tubeGroup.add(w);const R=new Xe(new Vr(.132,.012,8,24),p);R.position.z=.525,this.tubeGroup.add(R);const S=new na(.125,24),M=new Em({color:22015,metalness:.1,roughness:.05,transmission:.6,transparent:!0,opacity:.9}),A=new Xe(S,M);A.position.z=.52,this.tubeGroup.add(A);const B=new Xe(new Bt(.025,.025,.28,12),h);B.geometry.rotateX(Math.PI/2),B.position.set(.11,.16,0),this.tubeGroup.add(B);const F=new Bt(.025,.025,.12,12);this.eyepieceMesh=new Xe(F,p),this.eyepieceMesh.position.set(0,.13,-.45),this.tubeGroup.add(this.eyepieceMesh),this.eyepieceGlow=new Si(15680580,.8,2),this.eyepieceMesh.add(this.eyepieceGlow),this.group.add(this.tubeGroup),this.beaconLight=new Si(3718648,1.2,8),this.beaconLight.position.set(0,2.2,0),this.group.add(this.beaconLight),e.add(this.group)}isPlayerNear(e){return this.group.position.distanceTo(e)<this.interactionDistance}getPosition(){return this.group.position.clone()}updatePointing(e,t,n,i){const a=i-e;this.tubeGroup.rotation.order="YXZ",this.tubeGroup.rotation.y=a*Math.PI/12,this.tubeGroup.rotation.x=t*Math.PI/180}update(e){this.isPlayerNear(e)?this.eyepieceGlow.intensity=1.2:this.eyepieceGlow.intensity=.5}getEyepieceWorldPosition(){const e=new P;return this.eyepieceMesh.getWorldPosition(e),e}setVisible(e){this.group.visible=e}dispose(){this.group.parent?.remove(this.group)}}class y0{constructor(e){this.group=new zt,this.group.position.set(50,-10,50),this.group.visible=!1;const t=new Rt({color:2764084,side:wt,roughness:.8});new Rt({color:2038036,side:$t,roughness:.7});const n=new an(8,3,6),i=new Xe(n,t);i.position.y=1.5,this.group.add(i);const a=new an(2,.1,1),r=new Rt({color:4861464,roughness:.6}),o=new Xe(a,r);o.position.set(0,.8,-2),this.group.add(o);const l=new an(.8,.5,.05),c=new Rt({color:1118481,metalness:.8,roughness:.2}),d=new Xe(l,c);d.position.set(0,1.1,-2.2),this.group.add(d);const h=new bn(.75,.45),u=new Kn({color:3373055}),p=new Xe(h,u);p.position.set(0,1.1,-2.17),this.group.add(p);const g=new Si(16760438,2,12);g.position.set(0,2.5,0),this.group.add(g),e.add(this.group),this.entranceGroup=new zt,this.entranceGroup.position.set(-10,0,8);const v=new Rt({color:3022872,roughness:.85}),m=new an(3.5,2.4,3.5),f=new Xe(m,v);f.position.y=1.2,this.entranceGroup.add(f);const x=new Rt({color:1580584,roughness:.7}),E=new ia(3,1.2,4);E.rotateY(Math.PI/4);const _=new Xe(E,x);_.position.y=2.9,this.entranceGroup.add(_);const L=new Rt({color:1708556,roughness:.9}),C=new bn(.9,1.8),w=new Xe(C,L);w.position.set(0,.9,1.76),this.entranceGroup.add(w);const R=new Kn({color:16764006}),S=new bn(.8,.8),M=new Xe(S,R);M.position.set(1.1,1.3,1.76),this.entranceGroup.add(M);const A=new Bt(.08,.08,.18,6),B=new Kn({color:16755268}),F=new Xe(A,B);F.position.set(-.8,1.6,1.85),this.entranceGroup.add(F);const O=new Si(16750899,1.5,8);O.position.set(-.8,1.5,2),this.entranceGroup.add(O),e.add(this.entranceGroup)}setVisible(e){this.group.visible=e}isPlayerNear(e){return this.entranceGroup.position.distanceTo(e)<4.5}getPosition(){return this.entranceGroup.position.clone()}dispose(){this.group.parent?.remove(this.group),this.entranceGroup.parent?.remove(this.entranceGroup)}}class M0{constructor(){this.config=Zn[0],this.accessories=[],this.minFov=.8,this.maxFov=45,this.limitingMagnitude=11.5,this.trackingAccuracy=.5,this.chromaticAberration=.08,this.exposureGain=1,this.noiseReduction=0,this.lightPollutionReduction=0,this.hasBarlow=!1,this.hasWideEyepiece=!1,this.hasHAlpha=!1,this.hasOIII=!1,this.hasLightPollutionFilter=!1,this.hasCooledCamera=!1,this.hasCmosCamera=!1,this.hasEqMount=!1,this.hasGoTo=!1,this.hasRedDotFinder=!1,this.unsubscribe=te.subscribe(e=>{this.update(e)}),this.update(te.getState())}update(e){const t=e.telescopeLevel||1;this.config=Zn.find(u=>u.level===t)||Zn[0];const n=e.accessories||[];this.accessories=n;const i=u=>n.some(p=>p.id===u&&p.owned);this.hasBarlow=i("eyepiece_barlow"),this.hasWideEyepiece=i("eyepiece_wide"),this.hasHAlpha=i("filter_halpha"),this.hasOIII=i("filter_oiii"),this.hasLightPollutionFilter=i("filter_light_pollution"),this.hasCooledCamera=i("camera_cooled"),this.hasCmosCamera=i("camera_cmos"),this.hasEqMount=i("mount_eq"),this.hasGoTo=i("mount_goto"),this.hasRedDotFinder=i("finder_red_dot");let a=this.config.minFov,r=this.config.maxFov;this.hasBarlow&&(a*=.5),this.hasWideEyepiece&&(r+=15),this.minFov=Math.max(.08,a),this.maxFov=Math.min(85,r);let o=this.config.limitingMagnitude;this.hasCooledCamera&&(o+=1),this.hasCmosCamera&&(o+=1.8),this.hasLightPollutionFilter&&(o+=.6),this.limitingMagnitude=o;let l=this.config.trackingAccuracy;this.hasEqMount&&(l=Math.min(.98,l+.35)),this.hasGoTo&&(l=Math.min(.99,l+.5)),this.trackingAccuracy=l;let c=this.config.chromaticAberration;(this.hasHAlpha||this.hasOIII)&&(c*=.5),this.chromaticAberration=c;let d=1,h=0;this.hasCooledCamera&&(d*=1.5,h+=.5),this.hasCmosCamera&&(d*=2,h+=.8),this.exposureGain=d,this.noiseReduction=Math.min(.9,h),this.lightPollutionReduction=this.hasLightPollutionFilter?.7:0}getEffectiveFovRange(){return[this.minFov,this.maxFov]}getLimitingMagnitude(){return this.limitingMagnitude}getTrackingAccuracy(){return this.trackingAccuracy}getMountDriftMitigation(){return this.hasGoTo?.05:this.hasEqMount?.25:Math.max(.2,1-this.config.trackingAccuracy*.5)}getChromaticAberration(){return this.chromaticAberration}getExposureGain(){return this.exposureGain}getNoiseReduction(){return this.noiseReduction}getLightPollutionReduction(){return this.lightPollutionReduction}getInstalledAccessories(){return(this.accessories||[]).filter(e=>e.owned)}hasAccessory(e){return(this.accessories||[]).some(t=>t.id===e&&t.owned)}dispose(){this.unsubscribe()}}class _0{constructor(e,t,n){this.bufferIdx=0,this.isExposingFlag=!1,this.currentFrameType="light",this.startTime=0,this.sampleCount=0,this.prevRa=null,this.prevDec=null,this.totalDrift=0,this.maxDriftStep=0,this.renderer=e,this.width=t,this.height=n;const i={type:rn,format:Xt,magFilter:Pt,minFilter:Pt};this.rtA=new It(t,n,i),this.rtB=new It(t,n,i),this.frameTarget=new It(t,n,i),this.blendScene=new ql,this.blendCamera=new ea(-1,1,1,-1,0,1),this.blendMaterial=new pt({uniforms:{uCurrentFrame:{value:null},uAccumulatedFrame:{value:null},uSampleCount:{value:1},uExposureGain:{value:1},uIntegrationWeight:{value:.08}},vertexShader:`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform sampler2D uCurrentFrame;
        uniform sampler2D uAccumulatedFrame;
        uniform float uSampleCount;
        uniform float uExposureGain;
        uniform float uIntegrationWeight;
        varying vec2 vUv;
        
        void main() {
          vec4 current = texture2D(uCurrentFrame, vUv) * uExposureGain;
          
          if (uSampleCount <= 1.5) {
            gl_FragColor = current;
            return;
          }
          
          vec4 accumulated = texture2D(uAccumulatedFrame, vUv);
          
          // Realistic Astrophotography Star Trail & Long Exposure Integration:
          // Maximum/Lighten blending keeps dark sky velvety black while stars paint streaks when moving.
          // Running average integrates stationary faint deep-sky nebulae smoothly without blowout.
          vec4 peak = max(accumulated, current);
          vec4 smoothAvg = mix(accumulated, current, 1.0 / uSampleCount);
          vec4 result = max(peak * 0.98, smoothAvg);
          
          gl_FragColor = min(result, vec4(1.0, 1.0, 1.0, 1.0));
        }
      `}),this.quad=new Xe(new bn(2,2),this.blendMaterial),this.blendScene.add(this.quad),this.resultCanvas=document.createElement("canvas")}startExposure(e="light"){this.isExposingFlag=!0,this.currentFrameType=e,this.startTime=performance.now(),this.sampleCount=0,this.totalDrift=0,this.maxDriftStep=0,this.prevRa=null,this.prevDec=null,this.renderer.setRenderTarget(this.rtA),this.renderer.clear(),this.renderer.setRenderTarget(this.rtB),this.renderer.clear(),this.renderer.setRenderTarget(null),this.bufferIdx=0}getElapsedSeconds(){return this.isExposingFlag?(performance.now()-this.startTime)/1e3:0}getSampleCount(){return this.sampleCount}getFrameType(){return this.currentFrameType}getTotalDrift(){return this.totalDrift}accumulate(e,t,n=1,i,a,r=1,o=!1,l=1,c=60){if(!this.isExposingFlag)return;if(this.sampleCount++,i!==void 0&&a!==void 0){if(this.prevRa!==null&&this.prevDec!==null){let g=(i-this.prevRa)*15;for(;g>180;)g-=360;for(;g<-180;)g+=360;const v=a-this.prevDec,m=Math.cos(a*Math.PI/180),x=Math.sqrt(Math.pow(g*m,2)+Math.pow(v,2))*r;x>.005&&(this.totalDrift+=x,this.maxDriftStep=Math.max(this.maxDriftStep,x))}this.prevRa=i,this.prevDec=a}if(!o){const g=this.getElapsedSeconds();if(g>2.5){const v=.004166666666666667*l,m=45/Math.max(.5,c),f=(g-2.5)*v*m*.15;this.totalDrift=Math.max(this.totalDrift,f)}}this.renderer.setRenderTarget(this.frameTarget),this.currentFrameType==="dark"||this.currentFrameType==="bias"||this.currentFrameType==="flat"?(this.renderer.clearColor(),this.renderer.clear()):this.renderer.render(e,t);const d=this.bufferIdx===0?this.rtA:this.rtB,h=this.bufferIdx===0?this.rtB:this.rtA,u=this.getElapsedSeconds(),p=Math.max(.02,.12/Math.sqrt(1+u*.5));this.blendMaterial.uniforms.uCurrentFrame.value=this.frameTarget.texture,this.blendMaterial.uniforms.uAccumulatedFrame.value=d.texture,this.blendMaterial.uniforms.uSampleCount.value=this.sampleCount,this.blendMaterial.uniforms.uExposureGain.value=n,this.blendMaterial.uniforms.uIntegrationWeight.value=p,this.renderer.setRenderTarget(h),this.renderer.render(this.blendScene,this.blendCamera),this.renderer.setRenderTarget(null),this.bufferIdx=1-this.bufferIdx}finishExposure(){const e=Math.max(.5,this.getElapsedSeconds());this.isExposingFlag=!1;const t=this.currentFrameType,n=this.bufferIdx===0?this.rtA:this.rtB,i=Math.min(1920,this.width),a=Math.min(1080,this.height);this.resultCanvas.width=i,this.resultCanvas.height=a;const r=this.resultCanvas.getContext("2d");if(!r)return{elapsedSeconds:e,totalDrift:this.totalDrift,hasMotionBlur:this.totalDrift>.25,dataUrl:""};if(t==="dark")return this.generateDarkFrame(r,i,a,e),{elapsedSeconds:e,totalDrift:0,hasMotionBlur:!1,dataUrl:this.resultCanvas.toDataURL("image/jpeg",.92)};if(t==="flat")return this.generateFlatFrame(r,i,a),{elapsedSeconds:e,totalDrift:0,hasMotionBlur:!1,dataUrl:this.resultCanvas.toDataURL("image/jpeg",.92)};if(t==="bias")return this.generateBiasFrame(r,i,a),{elapsedSeconds:.001,totalDrift:0,hasMotionBlur:!1,dataUrl:this.resultCanvas.toDataURL("image/jpeg",.92)};const o=new Uint8Array(this.width*this.height*4);this.renderer.readRenderTargetPixels(n,0,0,this.width,this.height,o);const l=document.createElement("canvas");l.width=this.width,l.height=this.height;const c=l.getContext("2d"),d=c.createImageData(this.width,this.height),h=this.totalDrift>.25;for(let u=0;u<this.height;u++)for(let p=0;p<this.width;p++){const g=(u*this.width+p)*4,v=((this.height-1-u)*this.width+p)*4;d.data[v]=o[g],d.data[v+1]=o[g+1],d.data[v+2]=o[g+2],d.data[v+3]=255}return c.putImageData(d,0,0),r.drawImage(l,0,0,i,a),{elapsedSeconds:e,totalDrift:this.totalDrift,hasMotionBlur:h,dataUrl:this.resultCanvas.toDataURL("image/jpeg",.92)}}generateDarkFrame(e,t,n,i){const a=e.createImageData(t,n),r=Math.min(25,4+i*.4);for(let l=0;l<a.data.length;l+=4){const c=Math.floor(Math.random()*r);a.data[l]=c,a.data[l+1]=c,a.data[l+2]=c+Math.floor(Math.random()*3),a.data[l+3]=255}const o=Math.floor(35+i*2.5);for(let l=0;l<o;l++){const c=Math.floor(Math.random()*t),h=(Math.floor(Math.random()*n)*t+c)*4,u=Math.random();u<.4?(a.data[h]=255,a.data[h+1]=40,a.data[h+2]=40):u<.7?(a.data[h]=40,a.data[h+1]=255,a.data[h+2]=40):(a.data[h]=255,a.data[h+1]=255,a.data[h+2]=255)}e.putImageData(a,0,0)}generateFlatFrame(e,t,n){const i=t/2,a=n/2,r=Math.sqrt(i*i+a*a),o=e.createRadialGradient(i,a,r*.1,i,a,r);o.addColorStop(0,"#e2e8f0"),o.addColorStop(.5,"#cbd5e1"),o.addColorStop(.85,"#94a3b8"),o.addColorStop(1,"#64748b"),e.fillStyle=o,e.fillRect(0,0,t,n);const l=[{x:i*.65,y:a*.7,r:18},{x:i*1.35,y:a*1.25,r:24},{x:i*1.1,y:a*.45,r:14}];for(const c of l){const d=e.createRadialGradient(c.x,c.y,c.r*.5,c.x,c.y,c.r);d.addColorStop(0,"rgba(71, 85, 105, 0.25)"),d.addColorStop(.8,"rgba(100, 116, 139, 0.4)"),d.addColorStop(1,"rgba(0, 0, 0, 0)"),e.fillStyle=d,e.beginPath(),e.arc(c.x,c.y,c.r,0,Math.PI*2),e.fill()}}generateBiasFrame(e,t,n){const i=e.createImageData(t,n);for(let a=0;a<n;a++){const r=Math.sin(a*.15)*1.5;for(let o=0;o<t;o++){const l=(a*t+o)*4,c=Math.max(0,Math.min(255,12+r+(Math.random()-.5)*6));i.data[l]=c,i.data[l+1]=c,i.data[l+2]=c,i.data[l+3]=255}}e.putImageData(i,0,0)}getResultAsDataUrl(){return this.resultCanvas.toDataURL("image/jpeg",.9)}isExposing(){return this.isExposingFlag}getProgress(){return this.isExposingFlag?1:0}getAccumulatedTexture(){return(this.bufferIdx===0?this.rtA:this.rtB).texture}resize(e,t){this.width=e,this.height=t,this.rtA.setSize(e,t),this.rtB.setSize(e,t),this.frameTarget.setSize(e,t)}dispose(){this.rtA.dispose(),this.rtB.dispose(),this.frameTarget.dispose(),this.blendMaterial.dispose()}}const Jl={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class rs{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const b0=new ea(-1,1,1,-1,0,1);class S0 extends _t{constructor(){super(),this.setAttribute("position",new ht([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ht([0,2,0,0,2,0],2))}}const x0=new S0;class ec{constructor(e){this._mesh=new Xe(x0,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,b0)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Ar extends rs{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof pt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ts.clone(e.uniforms),this.material=new pt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new ec(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class hl extends rs{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),a=e.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let r,o;this.inverse?(r=0,o=1):(r=1,o=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),a.buffers.stencil.setFunc(i.ALWAYS,r,4294967295),a.buffers.stencil.setClear(o),a.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.color.setMask(!0),a.buffers.depth.setMask(!0),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(i.EQUAL,1,4294967295),a.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),a.buffers.stencil.setLocked(!0)}}class E0 extends rs{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class T0{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Re);this._width=n.width,this._height=n.height,t=new It(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:yn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ar(Jl),this.copyPass.material.blending=vn,this.clock=new Zl}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,a=this.passes.length;i<a;i++){const r=this.passes[i];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}hl!==void 0&&(r instanceof hl?n=!0:r instanceof E0&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Re);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class w0 extends rs{constructor(e,t,n=null,i=null,a=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=a,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ke}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let a,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(a=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(a),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),e.autoClear=i}}const C0={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ke(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Ii extends rs{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new Re(e.x,e.y):new Re(256,256),this.clearColor=new ke(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let a=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new It(a,r,{type:yn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const u=new It(a,r,{type:yn});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const p=new It(a,r,{type:yn});p.texture.name="UnrealBloomPass.v"+h,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),a=Math.round(a/2),r=Math.round(r/2)}const o=C0;this.highPassUniforms=ts.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new pt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];a=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Re(1/a,1/r),a=Math.round(a/2),r=Math.round(r/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const d=Jl;this.copyUniforms=ts.clone(d.uniforms),this.blendMaterial=new pt({uniforms:this.copyUniforms,vertexShader:d.vertexShader,fragmentShader:d.fragmentShader,blending:wi,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ke,this.oldClearAlpha=1,this.basic=new Kn,this.fsQuad=new ec(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let a=0;a<this.nMips;a++)this.renderTargetsHorizontal[a].setSize(n,i),this.renderTargetsVertical[a].setSize(n,i),this.separableBlurMaterials[a].uniforms.invSize.value=new Re(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,a){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const r=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),a&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=Ii.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Ii.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=r}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new pt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Re(.5,.5)},direction:{value:new Re(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new pt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Ii.BlurDirectionX=new Re(1,0);Ii.BlurDirectionY=new Re(0,1);const A0={uniforms:{tDiffuse:{value:null},darkness:{value:.3},offset:{value:1}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float darkness;
    uniform float offset;
    varying vec2 vUv;
    void main() {
      vec4 texel = texture2D(tDiffuse, vUv);
      vec2 uv = (vUv - vec2(0.5)) * vec2(offset);
      float falloff = smoothstep(0.45, 0.75, length(uv));
      gl_FragColor = mix(texel, vec4(0.0, 0.0, 0.0, 1.0), falloff * darkness);
    }
  `},R0={uniforms:{tDiffuse:{value:null},amount:{value:0}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float amount;
    varying vec2 vUv;
    void main() {
      if (amount <= 0.0001) {
        gl_FragColor = texture2D(tDiffuse, vUv);
        return;
      }
      vec2 dir = vUv - vec2(0.5);
      vec4 cR = texture2D(tDiffuse, vUv + dir * amount);
      vec4 cG = texture2D(tDiffuse, vUv);
      vec4 cB = texture2D(tDiffuse, vUv - dir * amount);
      gl_FragColor = vec4(cR.r, cG.g, cB.b, 1.0);
    }
  `};class P0{constructor(e,t,n){this.composer=new T0(e),this.renderPass=new w0(t,n),this.composer.addPass(this.renderPass);const i=new Re(Math.floor(window.innerWidth/2),Math.floor(window.innerHeight/2));this.bloomPass=new Ii(i,.35,.2,.92),this.composer.addPass(this.bloomPass),this.vignettePass=new Ar(A0),this.vignettePass.uniforms.darkness.value=.25,this.composer.addPass(this.vignettePass),this.caPass=new Ar(R0),this.caPass.uniforms.amount.value=0,this.composer.addPass(this.caPass)}setTelescopeMode(e,t,n=-.5){const i=n>.02;e?(this.bloomPass.strength=i?.05:.55,this.bloomPass.threshold=i?.99:.88,this.vignettePass.uniforms.darkness.value=1,this.caPass.uniforms.amount.value=Math.min(t*.005,.015)):(this.bloomPass.strength=i?.02:.25,this.bloomPass.threshold=i?.99:.93,this.vignettePass.uniforms.darkness.value=.2,this.caPass.uniforms.amount.value=0)}render(){this.composer.render()}resize(e,t){this.composer.setSize(e,t),this.bloomPass.setSize(Math.floor(e/2),Math.floor(t/2))}dispose(){this.composer.passes.forEach(e=>e.dispose?.())}}class L0{constructor(e,t){this.isHoldingRightClick=!1,this.targetFov=60,this.BINO_FOV=10,this.DEFAULT_FOV=60,this.camera=e,this.setupEvents()}setupEvents(){window.addEventListener("mousedown",e=>{e.button===2&&te.getState().gameMode===we.Walk&&(this.isHoldingRightClick=!0,this.targetFov=this.BINO_FOV)}),window.addEventListener("mouseup",e=>{e.button===2&&this.isHoldingRightClick&&(this.isHoldingRightClick=!1,this.targetFov=this.DEFAULT_FOV)}),te.subscribe((e,t)=>{e.gameMode!==t.gameMode&&(this.isHoldingRightClick=!1,this.targetFov=this.DEFAULT_FOV,e.gameMode===we.Walk&&(this.camera.fov=this.DEFAULT_FOV,this.camera.updateProjectionMatrix()))})}update(e){te.getState().gameMode===we.Walk&&(Math.abs(this.camera.fov-this.targetFov)>.05?(this.camera.fov+=(this.targetFov-this.camera.fov)*Math.min(1,e*14),this.camera.updateProjectionMatrix()):this.camera.fov!==this.targetFov&&(this.camera.fov=this.targetFov,this.camera.updateProjectionMatrix()))}get active(){return this.isHoldingRightClick}dispose(){this.isHoldingRightClick=!1,this.camera.fov=this.DEFAULT_FOV,this.camera.updateProjectionMatrix()}}const ji={};function D0(s){const e=ji[s]||0;return e===0?1:e===1?.6:e===2?.25:0}class I0{constructor(){this.photoIdCounter=0}capturePhoto(e,t,n,i,a,r,o=!1,l=0,c="light"){const d=te.getState(),h=Math.max(.001,a??d.exposureDuration??5);let u=r;if(u||(e.render(t,n),u=e.domElement.toDataURL("image/jpeg",.85)),c!=="light"){const W={dark:`暗場校準幀 (Dark Frame · 曝光 ${h.toFixed(1)}s)`,flat:"平場校準幀 (Flat Frame · 均勻光學校正)",bias:"偏壓校準幀 (Bias Frame · 1/1000s 讀出偏置)"},$={id:`calib_${c}_${++this.photoIdCounter}_${Date.now()}`,imageDataUrl:u,targetName:W[c]||"校準幀",targetType:et.StarField,exposureSeconds:parseFloat(h.toFixed(3)),telescopeLevel:d.telescopeLevel||1,weatherCondition:d.weather,locationId:d.currentLocation?.id||"hehuanshan",score:85,quality:He.A,sellPrice:0,sold:!1,timestamp:new Date,frameType:c};return d.addPhoto($),document.dispatchEvent(new CustomEvent("show-notification",{detail:{message:`已記錄 ${W[c]}！此為疊圖校準專用數據，不可出售。`,type:"info"}})),document.dispatchEvent(new CustomEvent("photo-captured",{detail:{photo:$,targetInfo:i}})),$}const p=i?.id||i?.name||"star_field",g=D0(p);ji[p]=(ji[p]||0)+1;const v=d.accessories||[],m=W=>v.some($=>$.id===W&&$.owned),f=[];let x=0,E=1;m("camera_cmos")?(x+=20,E*=1.35,f.push("CMOS相機")):m("camera_cooled")&&(x+=12,E*=1.2,f.push("製冷CCD"));const _=i?.name||"",L=i?.type||"",C=L===et.Planet,w=L==="nebula"||_.includes("星雲"),R=L==="planetary_nebula"||_.includes("M57")||_.includes("M27");m("filter_halpha")&&w&&(x+=22,E*=1.5,f.push("H-alpha濾鏡")),m("filter_oiii")&&R&&(x+=25,E*=1.6,f.push("OIII濾鏡")),m("filter_light_pollution")&&f.push("光害濾鏡"),m("mount_goto")?(x+=10,f.push("GoTo導星")):m("mount_eq")&&(x+=6,f.push("赤道儀")),m("eyepiece_barlow")&&C?(x+=16,E*=1.3,f.push("巴羅鏡2x")):m("eyepiece_wide")&&(L==="cluster"||L===et.StarField)&&(x+=10,E*=1.15,f.push("廣角目鏡"));const S=!i||!i.name||i.name.includes("未知"),M=this.calculateQuality(i,d,h,o,l,x),A=this.getQualityGrade(M);let B=this.calculatePrice(A,i?.type||et.StarField);S&&(B=Math.max(5,Math.min(25,Math.floor(B*.25))));const F=Math.floor(B*g*E),O={id:`photo_${++this.photoIdCounter}_${Date.now()}`,imageDataUrl:u,targetName:i?.name||"未知星野",targetType:i?.type||et.StarField,exposureSeconds:parseFloat(h.toFixed(1)),telescopeLevel:d.telescopeLevel||1,weatherCondition:d.weather,locationId:d.currentLocation?.id||"hehuanshan",score:M,quality:A,sellPrice:F,sold:!1,timestamp:new Date,frameType:"light",hasMotionBlur:o,driftAmount:parseFloat(l.toFixed(2)),equipmentTags:f};if(d.addPhoto(O),o)document.dispatchEvent(new CustomEvent("show-notification",{detail:{message:"星點拖尾拉線（未配備赤道儀產生場旋或鏡筒晃動）！評級受限於 B 級以下。可至商店購買「赤道儀」或前往「疊圖工坊」修復。",type:"warning"}}));else if(g<1){const W=F===0?`市場飽和！${O.targetName} 已無人願購買`:`重複拍攝！價值降至 $${F}（原價 $${B}）`;document.dispatchEvent(new CustomEvent("show-notification",{detail:{message:W,type:"warning"}}))}return document.dispatchEvent(new CustomEvent("photo-captured",{detail:{photo:O,targetInfo:i}})),O}calculateQuality(e,t,n=5,i=!1,a=0,r=0){let o=45,l=1;t.weather===qe.PartlyCloudy?l=.6:t.weather===qe.Cloudy?l=.2:t.weather===qe.Rainy&&(l=0),o*=l;const c=t.telescopeLevel||1;if(o+=c*8,e?.type===et.Planet?n<=3.5?o+=20:o-=Math.min(30,(n-3.5)*4):n<3?o-=22:n>=15&&n<=90?o+=Math.min(28,Math.log2(n+1)*5):o+=15,e?.difficulty&&(o+=e.difficulty*5),i){const g=Math.min(55,Math.max(25,a*35));o-=g,o=Math.min(o,62)}const h=(t.accessories||[]).some(g=>g.id==="filter_light_pollution"&&g.owned),u=t.currentLocation?.lightPollution??.05;return o-=h?u*5:u*20,o+=r,(!e||!e.name||e.name.includes("未知"))&&(o=Math.min(38,Math.round(o*.5))),Math.max(10,Math.min(100,Math.round(o)))}getQualityGrade(e){return e>=95?He.SSS:e>=88?He.S:e>=72?He.A:e>=50?He.B:e>=32?He.C:He.D}calculatePrice(e,t){const n={[et.StarField]:{[He.D]:5,[He.C]:15,[He.B]:40,[He.A]:80,[He.S]:150,[He.SSS]:300},[et.Planet]:{[He.D]:20,[He.C]:50,[He.B]:120,[He.A]:250,[He.S]:500,[He.SSS]:1e3},[et.Messier]:{[He.D]:50,[He.C]:120,[He.B]:300,[He.A]:600,[He.S]:1200,[He.SSS]:2500},[et.SpecialEvent]:{[He.D]:100,[He.C]:250,[He.B]:600,[He.A]:1200,[He.S]:2500,[He.SSS]:5e3}},i=n[t]||n[et.StarField];return i[e]||i[He.D]}getPhotoStats(){const t=te.getState().photos||[],n=t.length,i=t.filter(r=>r.sold).reduce((r,o)=>r+o.sellPrice,0),a=t.reduce((r,o)=>o.score>r?o.score:r,0);return{totalPhotos:n,totalEarned:i,bestQuality:a}}resetRepeatCounts(){Object.keys(ji).forEach(e=>delete ji[e])}}const Hn={chen:{name:"陳伯",role:"合歡山老氣象員 · 前天文台技師",avatarIcon:'<svg viewBox="0 0 40 40" width="100%" height="100%"><circle cx="20" cy="20" r="18" fill="rgba(251,191,36,0.15)" stroke="#fbbf24" stroke-width="1.5"/><path d="M6 32 L16 16 L24 26 L34 32 Z" fill="#fbbf24" opacity="0.3"/><path d="M12 32 L20 18 L28 32 Z" fill="#fbbf24" opacity="0.5"/><circle cx="28" cy="11" r="3.5" fill="none" stroke="#fbbf24" stroke-width="1.2"/><circle cx="28" cy="11" r="1.5" fill="#fbbf24"/><path d="M20 18 L20 10 M17 10 L23 10 M18 8 L22 8" stroke="#fbbf24" stroke-width="1.2" stroke-linecap="round"/></svg>',color:"#fbbf24"},lin:{name:"星際旅人 Lin",role:"天文攝影論壇版主 · 巡天愛好者",avatarIcon:'<svg viewBox="0 0 40 40" width="100%" height="100%"><circle cx="20" cy="20" r="18" fill="rgba(56,189,248,0.15)" stroke="#38bdf8" stroke-width="1.5"/><ellipse cx="20" cy="20" rx="14" ry="5" fill="none" stroke="#38bdf8" stroke-width="1.2" transform="rotate(-25 20 20)"/><path d="M20 6 L22 17 L33 20 L22 23 L20 34 L18 23 L7 20 L18 17 Z" fill="#38bdf8"/><circle cx="20" cy="20" r="2.5" fill="#0b1329"/><circle cx="20" cy="20" r="1.2" fill="#fff"/></svg>',color:"#38bdf8"},director:{name:"張弘道館長",role:"國家天文台名譽台長",avatarIcon:'<svg viewBox="0 0 40 40" width="100%" height="100%"><circle cx="20" cy="20" r="18" fill="rgba(168,85,247,0.15)" stroke="#a855f7" stroke-width="1.5"/><path d="M10 26 C10 15, 30 15, 30 26 Z" fill="none" stroke="#a855f7" stroke-width="1.5"/><rect x="9" y="26" width="22" height="6" rx="1" fill="#a855f7" opacity="0.4"/><path d="M18 16 L22 16 L22 26 L18 26 Z" fill="#0b1329" stroke="#a855f7" stroke-width="1"/><line x1="14" y1="24" x2="27" y2="10" stroke="#a855f7" stroke-width="2.5" stroke-linecap="round"/><circle cx="27" cy="10" r="1.8" fill="#fff"/></svg>',color:"#a855f7"},sophie:{name:"蘇菲主編",role:"《國際天文攝影》亞洲特刊總編",avatarIcon:'<svg viewBox="0 0 40 40" width="100%" height="100%"><circle cx="20" cy="20" r="18" fill="rgba(236,72,153,0.15)" stroke="#ec4899" stroke-width="1.5"/><circle cx="20" cy="20" r="11" fill="none" stroke="#ec4899" stroke-width="1.5"/><polygon points="20,13 25,16 23,22 17,22 15,16" fill="none" stroke="#ec4899" stroke-width="1.2"/><circle cx="20" cy="20" r="3" fill="#ec4899"/><path d="M9 10 L13 10 M31 10 L27 10 M9 30 L13 30 M31 30 L27 30" stroke="#ec4899" stroke-width="1.5" stroke-linecap="round"/></svg>',color:"#ec4899"},alan:{name:"艾倫研究員",role:"跨國深空巡天計畫通訊員",avatarIcon:'<svg viewBox="0 0 40 40" width="100%" height="100%"><circle cx="20" cy="20" r="18" fill="rgba(52,211,153,0.15)" stroke="#34d399" stroke-width="1.5"/><path d="M12 26 Q20 18 28 26" fill="none" stroke="#34d399" stroke-width="2"/><line x1="20" y1="21" x2="20" y2="13" stroke="#34d399" stroke-width="1.5"/><line x1="17" y1="13" x2="23" y2="13" stroke="#34d399" stroke-width="1.5"/><path d="M14 9 Q20 4 26 9" fill="none" stroke="#34d399" stroke-width="1.2" stroke-dasharray="2,2"/><path d="M16 11 Q20 7 24 11" fill="none" stroke="#34d399" stroke-width="1.2"/><path d="M20 23 L20 32 M16 32 L24 32" stroke="#34d399" stroke-width="1.5" stroke-linecap="round"/></svg>',color:"#34d399"}},ns=[{id:"ch0_first_light",chapter:0,title:"第一道星光 (First Light)",character:Hn.chen,introDialogue:["「孩子，歡迎來到合歡山！這座觀測木屋已經很多年沒有新主人了。」陳伯端著一杯熱茶走進院子。","「看到那台老舊的 60mm 折射望遠鏡了嗎？那是當年我初學天文時用的，保養得還很好。」","「今晚天空很乾淨，去拍下你的第一張星空照片吧！走過去按 E 對準夜空，按下空白鍵開始長曝光，讓宇宙微弱的光子凝聚在感光元件上。」"],completeDialogue:["「太棒了！這就是天文攝影師的第一步——捕捉到了屬於你的第一道星光！」陳伯笑著拍了拍你的肩膀。","「光子累積的感覺很神奇對吧？宇宙從不吝嗇展現美麗，只看你願不願意靜下心來等待。」"],storySummary:"繼承了合歡山觀測小屋，在老氣象員陳伯的指導下完成人生第一張星空攝影。",starHoppingTip:"【陳伯傳授】：抬頭看向南方天空，將望遠鏡對準任何天區，手動長曝光 5 秒以上即可。",objectives:[{type:"capture_any",description:"操作望遠鏡完成任意一張星空照片"}],rewards:{money:100}},{id:"ch0_find_orion",chapter:0,title:"獵戶佩劍上的玫瑰 (M42 獵戶座大星雲)",character:Hn.chen,introDialogue:["陳伯翻開一本邊角泛黃的手繪星圖，手指指著冬季星空最璀璨的一角：","「你看獵戶座腰帶那三顆連星，下方佩劍的位置，藏著一朵巨大的宇宙玫瑰——M42 獵戶座大星雲。」","「【觀測時段提醒】：獵戶座是秋冬季代表天體。夏末初秋要到【深夜 01:30 ~ 03:00】才會從東方地平線升起。如果你現在看不到，記得按 R 或 T 鍵開啟時空面板，將時間快轉到深夜！」","「【認星口訣】：按 C 開啟星座連線，在東南方找到排成一直線的三顆腰帶三星，往正下方垂直看有三顆微弱的小星（佩劍），中間那顆就是 M42！」"],completeDialogue:["「看啊！那粉紅色的氣體卷雲與中心的四合星！你的對焦和曝光掌握得比我想像的還要出色！」","「我把你這張 M42 的照片傳到全台天文攝影論壇了，這下子肯定會引來不少人的關注。」"],storySummary:"在獵戶座佩劍處精確捕捉到著名的 M42 恆星育嬰室，照片在天文論壇引起了廣泛討論。",starHoppingTip:"【陳伯傳授】：M42 為秋冬季天體，深夜 01:30 後升起（可按 R/T 快轉時間）。按 C 開啟連線，順著獵戶腰帶三星垂直向下找到佩劍中間即是。",objectives:[{type:"capture_target",targetId:"M42",description:"拍攝 M42 獵戶座大星雲"}],rewards:{money:300},prerequisiteQuestId:"ch0_first_light"},{id:"ch1_andromeda",chapter:1,title:"250萬光年的凝望 (M31 仙女座星系)",character:Hn.lin,introDialogue:["【論壇私訊】星際旅人 Lin：「嗨！我在論壇首頁看到你拍的 M42 了，在合歡山拍的吧？視寧度真乾淨！」","「自我介紹一下，我是論壇版主 Lin。既然你已經掌握了星雲，那敢不敢挑戰真正的跨星系目標——仙女座大星系 M31？」","「【觀測時段】：仙女座星系在秋季傍晚（20:00 ~ 02:00）就已經高掛東北方夜空，幾乎整夜都可以觀測！」","「【認星口訣】：找到北天天空大大的『W 形仙后座』，順著中間頂點往右下方（飛馬座方向）延伸約兩個星座寬度，那團紡錘狀星系就是 M31！」"],completeDialogue:["【論壇私訊】星際旅人 Lin：「天啊……這解析度太驚人了！我甚至能看到 M31 旋臂上的暗黑塵埃帶！」","「你絕對有極高的天文攝影天賦。接下來正好有一場全台天文盛事，你非參加不可！」"],storySummary:"接受天文論壇版主 Lin 的挑戰，跨越 250 萬光年成功拍攝仙女座星系的壯麗旋臂。",starHoppingTip:"【Lin 傳授】：秋季 20:00 ~ 02:00 在東北方高掛。找到「W 形仙后座」，順著頂點向右下方（飛馬座方向）延伸即可找到。",objectives:[{type:"capture_target",targetId:"M31",description:"拍攝 M31 仙女座星系（評級 B 級以上）",minQuality:"B"}],rewards:{money:600},prerequisiteQuestId:"ch0_find_orion"},{id:"ch1_collector",chapter:1,title:"梅西耶馬拉松 (Messier Marathon)",character:Hn.lin,introDialogue:["【論壇私訊】星際旅人 Lin：「一年一度的『梅西耶馬拉松季』正式開跑了！」","「十八世紀法國天文學家梅西耶為了不把星雲誤認為彗星，編製了 110 個著名的深空天體。現在全世界觀星者都在比誰收集得快。」","「【推薦目標與時段】：金牛座的『M45 昴宿星團（七姊妹，秋冬季 22:00 後）』、武仙座的『M13 球狀星團（夏季 20:00~02:00）』、巨蟹座的『M44 蜂巢星團（冬春季）』都是極佳目標！按 G 打開圖鑑可以隨時查看各天體的最佳觀測時間！」","「收集 5 個不同的梅西耶天體，我為你爭取阿里山頂級觀測站的通行證！」"],completeDialogue:["【論壇私訊】星際旅人 Lin：「太不可思議了！短短時間內你居然收集了 5 個完全不同類型的梅西耶天體！」","「阿里山天文學會已經審核通過你的資格，高海拔暗空觀測站現在隨時為你敞開大門！」"],storySummary:"參加梅西耶馬拉松並成功拍得 5 個不同天體，一躍成為論壇名人並獲贈觀測站通行證。",starHoppingTip:"【Lin 傳授】：按 G 開啟圖鑑，可隨時查看天體最佳觀測時段（例如 M45、M13、M44），善用 R/T 調整時間至適當季節與深夜！",objectives:[{type:"capture_count",targetType:"messier",count:5,description:"在圖鑑中收集 5 個不同的梅西耶天體"}],rewards:{money:1200,unlockLocation:"alishan"},prerequisiteQuestId:"ch1_andromeda"},{id:"ch2_masterpiece",chapter:2,title:"極限視寧度下的 S 級神作",character:Hn.director,introDialogue:["一輛掛著天文台公務牌的四驅車停在小屋前，走下來的是高山天文台名譽台長張弘道教授。","「年輕人，你的作品在學界傳開了。但我想知道，你是靠運氣，還是真正掌握了光學極限？」","「【大師訣竅】：真正的 S 級神作需要三要素——在極低光害的地點（按 L 切換合歡山或阿里山）、晴朗無雲的深夜、以及 30 秒以上的扎實長曝光。證明給我看吧。」"],completeDialogue:["張教授凝視著螢幕上的相片，久久沒有說話，隨後露出由衷的微笑：","「完美無瑕……動態範圍、核心明暗過渡與色彩飽和度都達到了極致！這份天文攝影大師的認可，你當之無愧。」"],storySummary:"在張弘道教授嚴苛的考驗下，挑戰極限拍攝出 90 分以上的 S 級天體照片。",starHoppingTip:"【張館長傳授】：前往海拔最高、光害最低的觀測地點，在晴朗深夜將望遠鏡精準對焦深空天體，長曝光 30 秒以上即可衝擊 S 級評分！",objectives:[{type:"quality_min",minQuality:"S",description:"拍攝一張品質達到 S 級（90分以上）的照片"}],rewards:{money:2500},prerequisiteQuestId:"ch1_collector"},{id:"ch2_nebula_expert",chapter:2,title:"星雲三部曲：生與死的輪迴",character:Hn.sophie,introDialogue:["【國際郵件】蘇菲主編：「親愛的攝影師，我是《國際天文攝影》雜誌的蘇菲主編。」","「我們正在策劃亞洲特刊封面專題《恆星的生老病死》，需要三種極具代表性的星雲：」","「【認星與時段】：1. M1 蟹狀星雲位於金牛座角尖（秋冬季 23:00 後）；2. M57 環狀星雲位於天琴座織女星下方（夏季 20:00~02:00）；3. M27 啞鈴星雲位於天鵝座與天箭座上方（夏秋季 20:00~01:00）。」","「集齊這三張珍貴影像，雜誌社將提供 $3,500 特約稿費！」"],completeDialogue:["【國際郵件】蘇菲主編：「天哪！這三張照片組成的專題跨頁簡直是藝術品！讀者們都為之瘋狂了！」","「雜誌社已經將豐厚稿費匯入你的帳戶，下一期封面故事的主角就是你！」"],storySummary:"為國際頂尖天文雜誌拍攝星雲生死輪迴三部曲，作品登上國際特刊封面。",starHoppingTip:"【蘇菲主編傳授】：M1（金牛座角尖，秋冬季）、M57（天琴座織女星旁，夏季）、M27（狐狸座天鵝座間，夏秋季），按 R/T 調整至對應季節深夜。",objectives:[{type:"capture_target",targetId:"M1",description:"拍攝 M1 蟹狀星雲 (超新星殘骸)"},{type:"capture_target",targetId:"M57",description:"拍攝 M57 環狀星雲 (垂死恆星)"},{type:"capture_target",targetId:"M27",description:"拍攝 M27 啞鈴星雲 (雙極星雲)"}],rewards:{money:3500},prerequisiteQuestId:"ch2_masterpiece"},{id:"ch3_galaxy_cluster",chapter:3,title:"星系探索者：跨越億萬光年的凝視",character:Hn.alan,introDialogue:["【加密通訊】艾倫研究員：「暗號確認。我是『深空巡天計畫』的艾倫。」","「我們在追蹤數千萬光年外星系演化的微弱光譜信號，急需民間高階天文台協助觀測三座指標星系：」","「【認星與時段】：1. M51 渦狀星系位於北斗七星勺柄（搖光星）往西南延伸處（春夏季 21:00~03:00）；2. M81 波德星系位於大熊座頭頂（幾乎全年北天可見）；3. M104 草帽星系位於室女座南端（春季 22:00~04:00）。」"],completeDialogue:["【加密通訊】艾倫研究員：「所有星系數據完整校準完畢！這組數據填補了跨星系演化模型的重要空白！」","「你的名字已經被永久記錄在國際深空巡天數據庫的貢獻者名冊中。星空浩瀚，探索永無止境！」"],storySummary:"為國際深空巡天計畫提供三座百萬光年外指標星系的高解析照片，名字被載入國際天文史冊。",starHoppingTip:"【艾倫傳授】：M51（北斗勺柄，春夏季）、M81（大熊座，整年）、M104（室女座南端，春季）。",objectives:[{type:"capture_target",targetId:"M51",description:"拍攝 M51 渦狀星系"},{type:"capture_target",targetId:"M81",description:"拍攝 M81 波德星系"},{type:"capture_target",targetId:"M104",description:"拍攝 M104 草帽星系"}],rewards:{money:5e3},prerequisiteQuestId:"ch2_nebula_expert"}];class U0{constructor(){document.addEventListener("photo-captured",e=>{this.onPhotoCaptured(e.detail)})}onPhotoCaptured(e){const n=te.getState().completedQuestIds||[];for(const i of ns)n.includes(i.id)||i.prerequisiteQuestId&&!n.includes(i.prerequisiteQuestId)||this.checkQuestCompletion(i,e)&&this.completeQuest(i)}checkQuestCompletion(e,t){const i=te.getState().photos||[];return e.objectives.every(a=>this.isObjectiveMet(a,i,t))}isObjectiveMet(e,t,n){const i=n.photo,a=n.targetInfo;switch(e.type){case"capture_any":return!0;case"capture_target":{const r=a?.name||a?.commonName||i?.targetName||"";if(!((a?.id||"")===e.targetId||r.includes(e.targetId||"___")))return!1;if(e.minQuality){const c=["D","C","B","A","S","SSS"];return c.indexOf(i.quality)>=c.indexOf(e.minQuality)}return!0}case"capture_count":{const r=n.photo?[...t,n.photo]:t,o=new Set;for(const l of r)(!e.targetType||l.targetType===e.targetType)&&o.add(l.targetName);return o.size>=(e.count||1)}case"quality_min":{const r=["D","C","B","A","S","SSS"];return r.indexOf(i.quality)>=r.indexOf(e.minQuality||"A")}}return!1}completeQuest(e){const t=te.getState(),n=[...t.completedQuestIds||[],e.id];e.rewards.money&&t.addMoney(e.rewards.money),te.setState({completedQuestIds:n}),document.dispatchEvent(new CustomEvent("quest-completed",{detail:{quest:e}}))}getActiveQuests(){const t=te.getState().completedQuestIds||[];return ns.filter(n=>!(t.includes(n.id)||n.prerequisiteQuestId&&!t.includes(n.prerequisiteQuestId))).slice(0,3)}getNextQuest(){return this.getActiveQuests()[0]||null}isCompleted(e){return(te.getState().completedQuestIds||[]).includes(e)}}class N0{constructor(){}getLocationUnlockCost(e){return 500+((te.getState().unlockedLocations?.length||1)-1)*200}unlockLocation(e){const t=te.getState(),n=this.getLocationUnlockCost(e);return this.canAfford(n)&&t.spendMoney&&t.unlockLocationId?(t.spendMoney(n),t.unlockLocationId(e),!0):!1}canAfford(e){return(te.getState().money||0)>=e}getStats(){const e=te.getState();return{totalEarned:e.totalMoneyEarned||0,totalSpent:e.totalMoneySpent||0,currentBalance:e.money||0}}}function Zs(s,e,t,n){const i=e*Math.PI/180,a=s.dec*Math.PI/180;function r(C){const S=(18.697374558+24.06570982441908*(C.getTime()/864e5+24405875e-1-2451545))%24,A=((S<0?S+24:S)+t/15)%24;let F=((A<0?A+24:A)-s.ra)%24;F<0&&(F+=24);const O=F*15*Math.PI/180,W=Math.sin(i)*Math.sin(a)+Math.cos(i)*Math.cos(a)*Math.cos(O);return Math.asin(Math.max(-1,Math.min(1,W)))*180/Math.PI}function o(C){return Ti.getPosition(C,e,t).altitude*(180/Math.PI)<=-10}const l=r(n),c=o(n),d=l>=12&&c,h=new Date(n);h.setHours(12,0,0,0);let u=null,p=null,g=-999,v=null,m=[];for(let C=0;C<=1440;C+=15){const w=new Date(h.getTime()+C*60*1e3),R=r(w),S=o(w);R>=10&&!u&&(u=w),R<10&&u&&!p&&(p=w),S&&R>=12&&(m.push(w.getHours()),R>g&&(g=R,v=w))}const f=C=>C.toLocaleTimeString("zh-TW",{hour:"2-digit",minute:"2-digit",hour12:!1}),x=u?f(u):null,E=p?f(p):null;let _="深夜時段";if(m.length>0){const C=Math.min(...m),w=Math.max(...m),R=S=>S.toString().padStart(2,"0");_=`${R(C)}:00 ~ ${R((w+1)%24)}:00`}else x&&(_=`升起後 (${x})`);let L="";return d?L=`目前空中可見（仰角 ${Math.round(l)}° · 正值最佳觀測時段）`:c?l<10?L=x?`目前在地平線下（預計 ${x} 升起 · 最佳觀測：${_}）`:`最佳觀測時段為 ${_}`:L=`最佳觀測時段為 ${_}`:L=`目前為白天，夜間最佳觀測時段為 ${_}`,{isCurrentlyVisible:d,currentAltitude:l,riseTimeStr:x,setTimeStr:E,bestTimeStr:_,bestDate:v,summary:L}}class F0{constructor(){this.timeButtons=[],this.lastQuestTrackerKey="";const e=document.getElementById("ui-overlay");if(!e)throw new Error("ui-overlay element not found in document");this.container=document.createElement("div"),this.container.className="hud";const t=document.createElement("div");t.className="hud-panel top-left";const n=document.createElement("div");n.className="time-row",this.timeDisplay=document.createElement("div"),this.timeDisplay.className="time-display",this.timeDisplay.textContent="--:--:--",this.timeDisplay.style.cursor="pointer",this.timeDisplay.title="點擊開啟時間與倒流控制中心 [R]",this.timeDisplay.onclick=()=>{window.dispatchEvent(new KeyboardEvent("keydown",{key:"r"}))},this.sunPhaseDisplay=document.createElement("div"),this.sunPhaseDisplay.className="sun-phase",this.sunPhaseDisplay.textContent="觀星夜",this.sunPhaseDisplay.style.cursor="pointer",this.sunPhaseDisplay.onclick=()=>{window.dispatchEvent(new KeyboardEvent("keydown",{key:"r"}))};const i=document.createElement("button");i.className="time-btn",i.textContent="現在",i.title="一鍵重置至目前現實時間",i.style.flex="none",i.style.padding="2px 8px",i.onclick=()=>{te.getState().resetToRealTime()},n.appendChild(this.timeDisplay),n.appendChild(this.sunPhaseDisplay),n.appendChild(i),t.appendChild(n);const a=document.createElement("div");a.className="time-controls",[{label:"暫停",value:0},{label:"1x",value:1},{label:"10x",value:10},{label:"60x",value:60},{label:"5m",value:300},{label:"16m",value:1e3}].forEach(v=>{const m=document.createElement("button");m.className=`time-btn ${v.value===1?"active":""}`,m.textContent=v.label,m.onclick=()=>{v.value===0?te.getState().toggleTimePause():(te.getState().isTimePaused&&te.getState().toggleTimePause(),te.getState().setTimeScale(v.value))},this.timeButtons.push(m),a.appendChild(m)}),t.appendChild(a);const o=document.createElement("div");o.className="hud-panel top-right",this.moneyDisplay=document.createElement("div"),this.moneyDisplay.className="money-badge",this.moneyDisplay.innerHTML="$0",this.weatherDisplay=document.createElement("div"),this.weatherDisplay.className="weather-badge",this.weatherDisplay.textContent="晴朗",this.weatherDisplay.className="weather-badge",this.weatherDisplay.textContent="晴朗";const l=document.createElement("div");l.className="hud-volume-bar",this.quickMuteBtn=document.createElement("button"),this.quickMuteBtn.className="hud-vol-icon-btn",this.quickMuteBtn.textContent="音量",this.quickMuteBtn.title="點擊靜音 / 解除靜音 [M]",this.quickMuteBtn.onclick=()=>te.getState().toggleMute(),this.quickVolSlider=document.createElement("input"),this.quickVolSlider.type="range",this.quickVolSlider.className="hud-quick-vol-slider",this.quickVolSlider.min="0",this.quickVolSlider.max="100",this.quickVolSlider.value="70",this.quickVolSlider.title="拖曳直接調整音量大小",this.quickVolSlider.oninput=()=>{const v=parseInt(this.quickVolSlider.value)/100;te.getState().isMuted&&te.getState().toggleMute(),te.getState().setMasterVolume(v)},this.quickVolVal=document.createElement("span"),this.quickVolVal.className="hud-vol-percent",this.quickVolVal.textContent="70%";const c=document.createElement("button");c.className="hud-vol-mixer-btn",c.textContent="設定",c.title="開啟四聲道混音設定 (蟲鳴/鳥叫/微風/馬達/雨聲)",c.onclick=()=>this.toggleAudioModal(),l.appendChild(this.quickMuteBtn),l.appendChild(this.quickVolSlider),l.appendChild(this.quickVolVal),l.appendChild(c);const d=document.createElement("div");d.className="guide-badge",d.innerHTML="<span>圖鑑</span>",d.title="開啟觀測圖鑑與任務日誌 [G]",d.onclick=()=>{window.dispatchEvent(new KeyboardEvent("keydown",{key:"g",code:"KeyG"}))};const h=document.createElement("div");h.className="guide-badge",h.innerHTML="<span>說明</span>",h.title="開啟操作說明書與觀星指南 [H]",h.onclick=()=>{window.dispatchEvent(new KeyboardEvent("keydown",{key:"h"}))};const u=document.createElement("div");u.className="version-badge",u.style.fontSize="11px",u.style.color="#38bdf8",u.style.opacity="0.85",u.style.fontWeight="700",u.style.padding="4px 8px",u.style.background="rgba(56, 189, 248, 0.12)",u.style.borderRadius="6px",u.style.border="1px solid rgba(56, 189, 248, 0.3)",u.textContent="v1.5.0",u.title="觀星模擬器 v1.5.0 (電子尋星儀系統 · GoTo 自動導星 · 圖鑑相片檢視)",o.appendChild(this.moneyDisplay),o.appendChild(this.weatherDisplay),o.appendChild(l),o.appendChild(d),o.appendChild(h),o.appendChild(u),this.audioModal=this.createAudioModal();const p=document.createElement("div");p.className="hud-panel bottom-left",this.locationDisplay=document.createElement("div"),p.appendChild(this.locationDisplay);const g=document.createElement("div");g.className="hud-panel bottom-right",g.innerHTML=`
            <span><span class="key-tag">Alt</span>游標</span>
            <span><span class="key-tag">C</span>星座</span>
            <span><span class="key-tag">L</span>地點</span>
            <span><span class="key-tag">R</span>倒流</span>
            <span><span class="key-tag">M</span>音量</span>
            <span><span class="key-tag">H</span>說明</span>
            <span><span class="key-tag">U</span>無UI</span>
        `,this.promptDisplay=document.createElement("div"),this.promptDisplay.className="interact-prompt",this.promptDisplay.innerHTML="<span>按 [E] 使用望遠鏡</span>",this.crosshair=document.createElement("div"),this.crosshair.className="crosshair",this.telescopeMarker=document.createElement("div"),this.telescopeMarker.className="waypoint-marker telescope",this.telescopeMarker.innerHTML='<span>望遠鏡</span><span class="key-hint">E</span><span class="dist" style="opacity:0.6"></span>',this.studioMarker=document.createElement("div"),this.studioMarker.className="waypoint-marker studio",this.studioMarker.innerHTML='<span>工作室</span><span class="key-hint">F</span><span class="dist" style="opacity:0.6"></span>',this.starTargetBadge=document.createElement("div"),this.starTargetBadge.className="hud-star-target-badge",this.starTargetBadge.style.display="none",this.container.appendChild(t),this.container.appendChild(o),this.container.appendChild(this.audioModal),this.container.appendChild(p),this.container.appendChild(g),this.container.appendChild(this.promptDisplay),this.container.appendChild(this.crosshair),this.container.appendChild(this.telescopeMarker),this.container.appendChild(this.studioMarker),this.container.appendChild(this.starTargetBadge),e.appendChild(this.container),this.unsubscribe=te.subscribe(v=>this.update(v)),this.update(te.getState())}createAudioModal(){const e=document.createElement("div");e.className="audio-modal",e.style.display="none";const t=document.createElement("div");t.className="audio-modal-header",t.innerHTML="<h3>音效與音量設定</h3>";const n=document.createElement("button");return n.className="close-btn",n.style.width="26px",n.style.height="26px",n.style.fontSize="14px",n.innerHTML="&times;",n.onclick=()=>this.toggleAudioModal(!1),t.appendChild(n),e.appendChild(t),[{id:"master",label:"全局音量 (Master)",val:70,prop:"masterVolume",setter:"setMasterVolume"},{id:"machine",label:"機器音量 (馬達/齒輪/快門)",val:70,prop:"machineVolume",setter:"setMachineVolume"},{id:"ambient",label:"環境音量 (自然夜風氛圍)",val:80,prop:"ambientVolume",setter:"setAmbientVolume"},{id:"weather",label:"天氣音量 (雨聲)",val:80,prop:"weatherVolume",setter:"setWeatherVolume"}].forEach(a=>{const r=document.createElement("div");r.className="audio-row";const o=document.createElement("div");o.className="audio-label-row",o.innerHTML=`<span>${a.label}</span><span class="val" id="val-${a.id}">${a.val}%</span>`;const l=document.createElement("input");l.type="range",l.min="0",l.max="100",l.value=a.val.toString(),l.oninput=()=>{const d=parseInt(l.value)/100;te.getState()[a.setter](d)},a.id==="master"?(this.masterSlider=l,this.masterValSpan=o.querySelector(".val")):a.id==="machine"?(this.machineSlider=l,this.machineValSpan=o.querySelector(".val")):a.id==="ambient"?(this.ambientSlider=l,this.ambientValSpan=o.querySelector(".val")):a.id==="weather"&&(this.weatherSlider=l,this.weatherValSpan=o.querySelector(".val")),r.appendChild(o),r.appendChild(l),e.appendChild(r)}),this.muteBtn=document.createElement("button"),this.muteBtn.className="audio-mute-btn",this.muteBtn.textContent="一鍵靜音 (Mute)",this.muteBtn.onclick=()=>{te.getState().toggleMute()},document.addEventListener("keydown",a=>{a.code==="Escape"&&this.audioModal.classList.contains("visible")&&this.toggleAudioModal(!1)}),e}toggleAudioModal(e){e!==void 0?this.audioModal.classList.toggle("visible",e):this.audioModal.classList.toggle("visible")}formatTime(e){return e.toLocaleTimeString("zh-TW",{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1})}formatDate(e){return e.toLocaleDateString("zh-TW",{year:"numeric",month:"2-digit",day:"2-digit"})}getSunPhaseText(e){const t=e.getHours();return t>=6&&t<17?"白晝":t>=17&&t<19?"黃昏":t>=19||t<5?"觀星夜":"黎明"}getWeatherBadge(e){switch(e){case qe.Clear:return"萬里無雲";case qe.PartlyCloudy:return"局部多雲";case qe.Cloudy:return"密雲";case qe.Rainy:return"降雨中";default:return"晴朗"}}update(e){const t=document.getElementById("ui-overlay");if(t&&t.classList.toggle("ui-hidden",!e.isUIVisible),e.gameMode===we.Studio||e.gameMode===we.Telescope){this.container.style.display="none",this.toggleAudioModal(!1);return}else this.container.style.display="block";this.crosshair.style.display=e.gameMode===we.Walk?"block":"none",e.currentTime&&(this.timeDisplay.innerHTML=`<span style="font-size:11px;color:#94a3b8;margin-right:6px">${this.formatDate(e.currentTime)}</span>${this.formatTime(e.currentTime)}`,this.sunPhaseDisplay.textContent=this.getSunPhaseText(e.currentTime)),this.moneyDisplay.innerHTML=`$${e.money}`,this.weatherDisplay.textContent=this.getWeatherBadge(e.weather);const n=Math.round(e.masterVolume*100),i=Math.round(e.machineVolume*100),a=Math.round(e.ambientVolume*100),r=Math.round(e.weatherVolume*100);if(this.quickVolSlider&&(this.quickVolSlider.value=(e.isMuted?0:n).toString(),this.quickVolVal.textContent=e.isMuted?"靜音":`${n}%`,this.quickMuteBtn.textContent=e.isMuted?"靜音":"音量",this.quickMuteBtn.classList.toggle("muted",e.isMuted)),this.muteBtn&&(e.isMuted?(this.muteBtn.textContent="解除靜音 (Unmute)",this.muteBtn.classList.add("active")):(this.muteBtn.textContent="一鍵靜音 (Mute)",this.muteBtn.classList.remove("active"))),this.masterSlider&&(this.masterSlider.value=n.toString(),this.masterValSpan.textContent=`${n}%`,this.machineSlider.value=i.toString(),this.machineValSpan.textContent=`${i}%`,this.ambientSlider.value=a.toString(),this.ambientValSpan.textContent=`${a}%`,this.weatherSlider.value=r.toString(),this.weatherValSpan.textContent=`${r}%`),e.currentLocation){const d=e.currentLocation;this.locationDisplay.innerHTML=`
                <div class="location-title">${d.name}</div>
                <div class="location-coords">
                    緯度 ${d.latitude>0?`${d.latitude.toFixed(2)}°N`:`${(-d.latitude).toFixed(2)}°S`} · 
                    經度 ${d.longitude>0?`${d.longitude.toFixed(2)}°E`:`${(-d.longitude).toFixed(2)}°W`} · 
                    ${d.altitude}m
                </div>
            `}const o=e.isTimePaused?0:e.timeScale,l=[0,1,10,60,300,1e3];this.timeButtons.forEach((d,h)=>{d.classList.toggle("active",l[h]===o)});const c=document.getElementById("quest-tracker-hud");c&&e.gameMode!==we.Walk&&(c.style.display="none")}showInteractPrompt(e){this.promptDisplay.innerHTML=`<span>${e}</span>`,this.promptDisplay.classList.add("visible")}hideInteractPrompt(){this.promptDisplay.classList.remove("visible")}showNotification(e,t="info"){const n=document.createElement("div");n.className=`notification notification-${t}`,n.textContent=e,document.getElementById("ui-overlay")?.appendChild(n),requestAnimationFrame(()=>n.classList.add("visible")),setTimeout(()=>{n.classList.remove("visible"),setTimeout(()=>n.remove(),400)},t==="warning"?4500:t==="success"?3500:3e3)}updateQuestTracker(e){let t=document.getElementById("quest-tracker-hud");const n=te.getState();if(!e||n.gameMode!==we.Walk){t&&(t.style.display="none"),this.lastQuestTrackerKey="";return}t||(t=document.createElement("div"),t.id="quest-tracker-hud",t.className="quest-tracker-hud",t.style.cursor="pointer",t.title="點擊聆聽角色教學對話 · 按 G 開啟圖鑑",document.getElementById("ui-overlay")?.appendChild(t));let i="";const a=e.objectives?.find(o=>o.targetId);if(a?.targetId){const o=Sn.find(l=>l.id===a.targetId||l.name===a.targetId);if(o){const l=te.getState(),c=Zs(o,l.currentLocation.latitude,l.currentLocation.longitude,l.currentTime);c.isCurrentlyVisible?i=`<div class="qt-time-badge visible">目前空中可見 (仰角 ${Math.round(c.currentAltitude)}°) · 最佳觀測中</div>`:c.riseTimeStr?i=`<div class="qt-time-badge waiting">預計 ${c.riseTimeStr} 升起 · 最佳時段 ${c.bestTimeStr}（按 R/T 快轉）</div>`:i=`<div class="qt-time-badge waiting">最佳觀測時段：${c.bestTimeStr}（按 R/T 調整時間）</div>`}}const r=`${e.id}_${e.title}_${i}_${(e.objectives||[]).map(o=>o.description).join("")}`;this.lastQuestTrackerKey!==r&&(this.lastQuestTrackerKey=r,t.onclick=o=>{o.stopPropagation(),document.dispatchEvent(new CustomEvent("play-story-dialogue",{detail:{quest:e,mode:"intro"}}))},t.style.display="block",t.innerHTML=`
            <div class="qt-header">
                <span class="qt-avatar">${e.character?.avatarIcon||""}</span>
                <div>
                    <div class="qt-title">${e.character?.name||"任務導師"} · 主線任務</div>
                    <div class="qt-quest">${e.title}</div>
                </div>
            </div>
            <div class="qt-objectives">
                ${(e.objectives||[]).slice(0,2).map(o=>`<div class="qt-obj">○ ${o.description}</div>`).join("")}
            </div>
            ${i}
            <div class="qt-hint">點擊聆聽角色尋星對話 [G]</div>
        `)}updateWaypoints(e,t,n){if(te.getState().gameMode!==we.Walk){this.telescopeMarker.style.display="none",this.studioMarker.style.display="none";return}const a=t.clone().add(new P(0,1.8,0)),r=e.position.distanceTo(t);if(a.project(e),a.z<1){const c=(a.x*.5+.5)*window.innerWidth,d=(-a.y*.5+.5)*window.innerHeight;this.telescopeMarker.style.left=`${c}px`,this.telescopeMarker.style.top=`${d}px`,this.telescopeMarker.style.display="flex";const h=this.telescopeMarker.querySelector(".dist");h&&(h.textContent=`(${r.toFixed(1)}m)`)}else this.telescopeMarker.style.display="none";const o=n.clone().add(new P(0,2.5,0)),l=e.position.distanceTo(n);if(o.project(e),o.z<1){const c=(o.x*.5+.5)*window.innerWidth,d=(-o.y*.5+.5)*window.innerHeight;this.studioMarker.style.left=`${c}px`,this.studioMarker.style.top=`${d}px`,this.studioMarker.style.display="flex";const h=this.studioMarker.querySelector(".dist");h&&(h.textContent=`(${l.toFixed(1)}m)`)}else this.studioMarker.style.display="none"}updateStarLookTarget(e){this.starTargetBadge.style.display="none"}dispose(){this.unsubscribe(),this.container.remove()}}class k0{constructor(){this.frameTypeButtons=new Map,this.currentIdentifiedTarget=null,this.idleTimer=null;const e=document.getElementById("ui-overlay");if(!e)throw new Error("ui-overlay not found");this.container=document.createElement("div"),this.container.className="telescope-overlay",this.container.style.display="none",this.eyepiecePhysicalMask=document.createElement("div"),this.eyepiecePhysicalMask.className="eyepiece-physical-mask hidden",this.container.appendChild(this.eyepiecePhysicalMask),this.vignette=document.createElement("div"),this.vignette.className="telescope-vignette",this.reticle=document.createElement("div"),this.reticle.className="telescope-reticle",this.starIdentifier=document.createElement("div"),this.starIdentifier.className="star-identifier",this.starIdentifier.style.display="none",this.finderGuidance=document.createElement("div"),this.finderGuidance.className="finder-guidance",this.finderGuidance.style.display="none",this.calibrationBanner=document.createElement("div"),this.calibrationBanner.className="calibration-banner",this.calibrationBanner.style.display="none",this.infoPanel=document.createElement("div"),this.infoPanel.className="telescope-info";const t=document.createElement("div");t.className="telescope-readouts",this.fovZoomDisplay=document.createElement("div"),this.raDecDisplay=document.createElement("div"),t.appendChild(this.fovZoomDisplay),t.appendChild(this.raDecDisplay);const n=document.createElement("div");n.className="telescope-controls-row",this.toggleExposureBtn=document.createElement("button"),this.toggleExposureBtn.className="shutter-btn",this.toggleExposureBtn.innerHTML="<span>開始曝光 [空白鍵]</span>",this.toggleExposureBtn.onclick=l=>{l.stopPropagation(),document.dispatchEvent(new CustomEvent("capture-photo")),this.showControls()};const i=document.createElement("div");i.className="frame-selector-group";const a=[{key:"light",label:"亮場",shortcut:"1"},{key:"dark",label:"暗場",shortcut:"2"},{key:"flat",label:"平場",shortcut:"3"},{key:"bias",label:"偏壓",shortcut:"4"}];this.frameTypeButtons=new Map,a.forEach(l=>{const c=document.createElement("button");c.className=`frame-type-btn ${l.key==="light"?"active":""}`,c.innerHTML=`<span>${l.label}</span><kbd>${l.shortcut}</kbd>`,c.title=`切換為${l.label}拍攝模式 [按鍵 ${l.shortcut}]`,c.onclick=d=>{d.stopPropagation(),te.getState().setFrameType(l.key),this.showControls()},this.frameTypeButtons.set(l.key,c),i.appendChild(c)});const r=document.createElement("button");r.className="telescope-finder-btn",r.innerHTML="<span>尋星儀系統</span><kbd>F</kbd>",r.title="開啟電子尋星儀系統與 GoTo 自動導星 [快捷鍵 F]",r.onclick=l=>{l.stopPropagation(),document.dispatchEvent(new CustomEvent("toggle-finder-ui"))},n.appendChild(this.toggleExposureBtn),n.appendChild(i),n.appendChild(r),this.finderGuidance.style.cursor="pointer",this.finderGuidance.onclick=l=>{l.stopPropagation(),document.dispatchEvent(new CustomEvent("toggle-finder-ui"))},this.exposureBar=document.createElement("div"),this.exposureBar.className="exposure-bar",this.exposureBar.style.display="none",this.exposureProgress=document.createElement("div"),this.exposureProgress.className="exposure-progress",this.exposureBar.appendChild(this.exposureProgress),this.accessoriesBar=document.createElement("div"),this.accessoriesBar.className="hud-accessories-bar",this.accessoriesBar.style.display="none";const o=document.createElement("div");o.className="keyboard-hints",o.textContent="空白鍵: 曝光 · 1: 亮場 · 2: 暗場 · 3: 平場 · 4: 偏壓 · V: 切換 · 滾輪: 變焦 · ESC: 退出",this.infoPanel.appendChild(t),this.infoPanel.appendChild(this.accessoriesBar),this.infoPanel.appendChild(n),this.infoPanel.appendChild(this.exposureBar),this.infoPanel.appendChild(o),this.container.appendChild(this.vignette),this.container.appendChild(this.reticle),this.container.appendChild(this.calibrationBanner),this.container.appendChild(this.finderGuidance),this.container.appendChild(this.starIdentifier),this.container.appendChild(this.infoPanel),e.appendChild(this.container),this.setupActivityListeners(),this.unsubscribe=te.subscribe(l=>this.handleStateChange(l))}setupActivityListeners(){const e=()=>{te.getState().gameMode===we.Telescope&&this.showControls()};window.addEventListener("mousemove",e),window.addEventListener("wheel",e,{passive:!0}),window.addEventListener("keydown",e),window.addEventListener("mousedown",e)}showControls(){this.infoPanel.classList.remove("idle-hidden"),this.idleTimer&&clearTimeout(this.idleTimer),!te.getState().isExposing&&(this.idleTimer=window.setTimeout(()=>{te.getState().gameMode===we.Telescope&&!te.getState().isExposing&&this.infoPanel.classList.add("idle-hidden")},2800))}handleStateChange(e){e.gameMode===we.Telescope?this.show():this.hide()}update(e,t,n,i,a,r,o,l){this.currentIdentifiedTarget=e,e?(this.starIdentifier.innerHTML=`
                <strong>${e.name}</strong><br/>
                <span style="font-size:12px;color:#94a3b8">星等: ${e.magnitude.toFixed(1)} · 赤經: ${e.ra.toFixed(2)}h · 赤緯: ${e.dec.toFixed(2)}°</span>
            `,this.starIdentifier.style.display="block"):this.starIdentifier.style.display="none",this.fovZoomDisplay.textContent=`視場: ${a.toFixed(1)}° (${r.toFixed(1)}x)`,this.raDecDisplay.textContent=`RA: ${o.toFixed(2)}h | Dec: ${l.toFixed(2)}°`;const c=te.getState(),d=(c.accessories||[]).filter(v=>v.owned);d.length>0?(this.accessoriesBar.innerHTML=`<span class="acc-label">加裝光學配件:</span> ${d.map(v=>`<span class="acc-tag">${v.name}</span>`).join("")}`,this.accessoriesBar.style.display="flex"):this.accessoriesBar.style.display="none";const h=c.completedQuestIds||[],u=ns.find(v=>!(h.includes(v.id)||v.prerequisiteQuestId&&!h.includes(v.prerequisiteQuestId)));let p=null;if(c.customTrackedDsoId)p=Sn.find(v=>v.id===c.customTrackedDsoId||v.name===c.customTrackedDsoId);else if(u){const v=u.objectives.find(m=>m.targetId);v?.targetId&&(p=Sn.find(m=>m.id===v.targetId||m.name===v.targetId))}if(p){const v=d.some(f=>f.id==="finder_red_dot"||f.id==="mount_goto");if(!!(e&&(e.name.includes(p.name)||e.name.includes(p.commonName))))this.finderGuidance.className="finder-guidance locked",this.finderGuidance.innerHTML=`
                    <div class="fg-badge">目標已精確入鏡</div>
                    <div class="fg-title">${p.commonName||p.name}</div>
                    <div class="fg-sub">已成功定位天體！按空白鍵開始長曝光攝影</div>
                `,this.finderGuidance.style.display="flex";else if(v){let f=(p.ra-o)*15;for(;f>180;)f-=360;for(;f<-180;)f+=360;const x=p.dec-l,E=Math.sqrt(Math.pow(f*Math.cos(l*Math.PI/180),2)+Math.pow(x,2)),L=(Math.atan2(x,-f)*180/Math.PI+360)%360,C=["→","↗","↑","↖","←","↙","↓","↘"],w=Math.round(L/45)%8,R=C[w];this.finderGuidance.className="finder-guidance seeking pointer",this.finderGuidance.innerHTML=`
                    <div class="fg-badge">電子尋星系統已啟用</div>
                    <div class="fg-title">${R} ${p.commonName||p.name}</div>
                    <div class="fg-dist">距離視野: ${E.toFixed(1)}° · 請順指針轉動鏡筒</div>
                `,this.finderGuidance.style.display="flex"}else this.finderGuidance.style.display="none"}else this.finderGuidance.style.display="none";const g=c.currentFrameType||"light";if(this.frameTypeButtons.forEach((v,m)=>{v.classList.toggle("active",m===g)}),g==="dark"?(this.eyepiecePhysicalMask.className="eyepiece-physical-mask mask-dark",this.eyepiecePhysicalMask.innerHTML=`
                <div class="mask-cap-emboss">
                    <span style="font-size:15px;letter-spacing:0.1em;margin-bottom:6px;color:#f87171;">[ LENS CAP ]</span>
                    <span>LENS CAP ON</span>
                    <span style="font-size:11px;margin-top:4px;color:#f87171;">鏡頭蓋已蓋上 (全黑)</span>
                </div>
            `,this.reticle.style.display="none",this.starIdentifier.style.display="none",this.calibrationBanner.innerHTML="<span>【暗場模式 · 鏡頭蓋已蓋上】按空白鍵開始曝光，記錄感光元件熱噪點與壞點 [2]</span>",this.calibrationBanner.className="calibration-banner dark-mode visible",this.calibrationBanner.style.display="block"):g==="bias"?(this.eyepiecePhysicalMask.className="eyepiece-physical-mask mask-dark",this.eyepiecePhysicalMask.innerHTML=`
                <div class="mask-cap-emboss">
                    <span style="font-size:15px;letter-spacing:0.1em;margin-bottom:6px;color:#38bdf8;">[ FAST SHUTTER ]</span>
                    <span>FAST SHUTTER BIAS</span>
                    <span style="font-size:11px;margin-top:4px;color:#38bdf8;">極速快門讀出底噪 (全黑)</span>
                </div>
            `,this.reticle.style.display="none",this.starIdentifier.style.display="none",this.calibrationBanner.innerHTML="<span>【偏壓模式 · 極速快門讀出】按空白鍵 1/1000s 快速記錄晶片底噪 [4]</span>",this.calibrationBanner.className="calibration-banner bias-mode visible",this.calibrationBanner.style.display="block"):g==="flat"?(this.eyepiecePhysicalMask.className="eyepiece-physical-mask mask-flat",this.eyepiecePhysicalMask.innerHTML=`
                <div class="mask-flat-emboss">
                    <span style="font-size:15px;letter-spacing:0.1em;margin-bottom:6px;color:#0284c7;">[ FLAT PANEL ]</span>
                    <span>FLAT PANEL DIFFUSER</span>
                    <span style="font-size:11px;margin-top:4px;color:#0284c7;">均勻平場柔光板</span>
                </div>
            `,this.reticle.style.display="none",this.starIdentifier.style.display="none",this.calibrationBanner.innerHTML="<span>【平場模式 · 均勻柔光罩已開啟】按空白鍵快速曝光，記錄光學暗角與鏡片塵埃 [3]</span>",this.calibrationBanner.className="calibration-banner flat-mode visible",this.calibrationBanner.style.display="block"):(this.eyepiecePhysicalMask.className="eyepiece-physical-mask hidden",this.eyepiecePhysicalMask.innerHTML="",this.reticle.style.display="block",this.calibrationBanner.style.display="none",this.calibrationBanner.className="calibration-banner"),t){this.infoPanel.classList.remove("idle-hidden"),this.exposureBar.style.display="block",this.exposureProgress.style.width="100%",this.toggleExposureBtn.className="shutter-btn exposing";const v=g==="light"?"曝光":g==="dark"?"暗場曝光":g==="flat"?"平場曝光":"偏壓快門";this.toggleExposureBtn.innerHTML=`<span>結束${v}並存檔 [${n.toFixed(1)}s]</span>`}else{this.exposureBar.style.display="none",this.exposureProgress.style.width="0%",this.toggleExposureBtn.className="shutter-btn";const v=g==="light"?"開始曝光":g==="dark"?"拍攝暗場":g==="flat"?"拍攝平場":"拍攝偏壓";this.toggleExposureBtn.innerHTML=`<span>${v} [空白鍵]</span>`}}show(){this.container.style.display="block",this.showControls()}hide(){this.container.style.display="none",this.idleTimer&&clearTimeout(this.idleTimer)}getCurrentIdentifiedTarget(){return this.currentIdentifiedTarget}dispose(){this.unsubscribe(),this.idleTimer&&clearTimeout(this.idleTimer),this.container.remove()}}class B0{constructor(){this.currentTabIndex=0;const e=document.getElementById("ui-overlay");if(!e)throw new Error("ui-overlay not found");this.container=document.createElement("div"),this.container.className="studio-panel",this.container.style.display="none";const t=document.createElement("div");t.className="studio-header";const n=document.createElement("h2");n.innerHTML='觀星工作室 & 裝備工坊 <span style="font-size:12px;color:#38bdf8;font-weight:700;margin-left:8px;background:rgba(56,189,248,0.15);padding:2px 8px;border-radius:4px;border:1px solid rgba(56,189,248,0.3);">v1.5.0</span>',this.headerMoney=document.createElement("div"),this.headerMoney.className="studio-money";const i=document.createElement("button");i.className="close-btn",i.innerHTML="&times;",i.onclick=()=>{te.getState().setGameMode(we.Walk)},t.appendChild(n),t.appendChild(this.headerMoney),t.appendChild(i);const a=document.createElement("div");a.className="studio-tabs",this.tabs=[],["照片庫","望遠鏡升級","配件商店","疊圖處理工坊"].forEach((r,o)=>{const l=document.createElement("button");l.className=`studio-tab ${o===0?"active":""}`,l.textContent=r,l.onclick=()=>this.switchTab(o),this.tabs.push(l),a.appendChild(l)}),this.contentArea=document.createElement("div"),this.contentArea.className="studio-body",this.container.appendChild(t),this.container.appendChild(a),this.container.appendChild(this.contentArea),e.appendChild(this.container),this.unsubscribe=te.subscribe(r=>this.update(r))}switchTab(e){this.currentTabIndex=e,this.tabs.forEach((n,i)=>n.classList.toggle("active",i===e));const t=te.getState();this.contentArea.innerHTML="",e===0?this.renderGallery(t):e===1?this.renderTelescopes(t):e===2?this.renderAccessories(t):e===3&&this.renderStackingLab(t)}renderGallery(e){const t=[...e.photos||[]].filter(c=>!c.frameType||c.frameType==="light").sort((c,d)=>{const h=c.timestamp instanceof Date?c.timestamp.getTime():new Date(c.timestamp).getTime();return(d.timestamp instanceof Date?d.timestamp.getTime():new Date(d.timestamp).getTime())-h}),n=t.filter(c=>!c.sold),i=n.reduce((c,d)=>c+(d.sellPrice||d.price||0),0),a=document.createElement("div");a.style.display="flex",a.style.justifyContent="space-between",a.style.alignItems="center",a.style.marginBottom="16px";const r=document.createElement("div");r.textContent=`未出售天體照片: ${n.length} 張 (總價值: $${i})`;const o=document.createElement("button");if(o.className="buy-btn",o.textContent=`全部出售天體 ($${i})`,o.disabled=n.length===0,o.onclick=()=>{const c=e.sellAllPhotos();document.dispatchEvent(new CustomEvent("show-notification",{detail:{message:`已出售全部天體照片，獲得 $${c}`,type:"success"}})),this.renderGallery(te.getState())},a.appendChild(r),a.appendChild(o),this.contentArea.appendChild(a),t.length===0){const c=document.createElement("div");c.className="empty-state",c.innerHTML=`
                <div style="font-size:16px;color:#94a3b8;font-weight:600;">尚無天體照片</div>
                <div style="font-size:13px;color:#64748b;margin-top:4px">使用望遠鏡（按 E）對準星空，按下空白鍵即可開始長曝光拍攝。（暗場／平場／偏壓校準檔案存放於疊圖工坊）</div>
            `,this.contentArea.appendChild(c);return}const l=document.createElement("div");l.className="photo-grid",t.forEach(c=>{const d=document.createElement("div");d.className=`photo-card ${c.sold?"sold":""}`;const h=document.createElement("img");h.className="photo-thumb",h.src=c.imageDataUrl,h.alt=c.targetName,h.onclick=()=>{const x=t.findIndex(E=>E.id===c.id);document.dispatchEvent(new CustomEvent("open-lightbox",{detail:{photoId:c.id,index:x}}))};const u=document.createElement("div");u.className="photo-info";const p=document.createElement("div");if(p.className="photo-title",p.textContent=c.targetName,c.isStacked){const x=document.createElement("span");x.className="stacked-badge",x.textContent=`${c.stackedCount||2}張疊圖`,p.appendChild(x)}if(c.hasMotionBlur){const x=document.createElement("span");x.className="motion-blur-badge",x.textContent="晃動殘影",p.appendChild(x)}if(c.equipmentTags&&c.equipmentTags.length>0){const x=document.createElement("div");x.style.margin="4px 0",c.equipmentTags.forEach(E=>{const _=document.createElement("span");_.className="equipment-tag",_.textContent=E,x.appendChild(_)}),p.appendChild(x)}const g=document.createElement("div");g.className="photo-meta",g.innerHTML=`
                <span>曝光 ${c.exposureSeconds}s</span>
                <span class="quality-badge quality-${c.quality}">${c.quality}級 (${c.score}分)</span>
            `;const v=document.createElement("div");v.className="photo-footer";const m=document.createElement("div");if(m.className="photo-price",m.textContent=c.sold?"已出售":`$${c.sellPrice||c.price||0}`,v.appendChild(m),!c.sold){const x=document.createElement("button");x.className="photo-sell-btn",x.textContent="出售",x.onclick=E=>{E.stopPropagation();const _=e.sellPhoto(c.id);document.dispatchEvent(new CustomEvent("show-notification",{detail:{message:`已售出照片，獲得 $${_}`,type:"success"}})),this.renderGallery(te.getState())},v.appendChild(x)}const f=document.createElement("button");f.className="photo-del-btn",f.textContent="刪除",f.style.background="rgba(239, 68, 68, 0.15)",f.style.border="1px solid rgba(239, 68, 68, 0.35)",f.style.color="#fca5a5",f.style.borderRadius="4px",f.style.padding="4px 8px",f.style.fontSize="12px",f.style.cursor="pointer",f.title="刪除這張照片",f.onclick=x=>{x.stopPropagation(),e.deletePhoto(c.id),document.dispatchEvent(new CustomEvent("show-notification",{detail:{message:`已刪除照片：${c.targetName}`,type:"info"}})),this.renderGallery(te.getState())},v.appendChild(f),u.appendChild(p),u.appendChild(g),u.appendChild(v),d.appendChild(h),d.appendChild(u),l.appendChild(d)}),this.contentArea.appendChild(l)}renderTelescopes(e){const t=document.createElement("div");t.className="shop-list",Zn.forEach(n=>{const i=e.telescopeLevel===n.level,a=e.telescopeLevel>=n.level,r=document.createElement("div");r.className=`shop-item ${i?"current":""}`;const o=document.createElement("div");o.className="shop-item-details";const l=document.createElement("div");l.className="shop-item-name",l.textContent=n.name;const c=document.createElement("div");if(c.className="shop-item-desc",c.textContent=`口徑: ${n.apertureMm}mm · 極限星等: ${n.limitingMagnitude} · 視場: ${n.minFov}°-${n.maxFov}°`,o.appendChild(l),o.appendChild(c),r.appendChild(o),i){const d=document.createElement("div");d.className="owned-badge",d.textContent="使用中",r.appendChild(d)}else if(a){const d=document.createElement("div");d.className="owned-badge",d.textContent="已擁有",r.appendChild(d)}else{const d=document.createElement("button");d.className="buy-btn",d.textContent=`購買 ($${n.price})`,d.disabled=e.money<n.price||n.level!==e.telescopeLevel+1,d.onclick=()=>{e.upgradeTelescope(n.level)&&this.switchTab(1)},r.appendChild(d)}t.appendChild(r)}),this.contentArea.appendChild(t)}renderAccessories(e){const t=document.createElement("div");t.className="shop-list",e.accessories.forEach(n=>{const i=document.createElement("div");i.className="shop-item";const a=document.createElement("div");a.className="shop-item-details";const r=document.createElement("div");r.className="shop-item-name",r.textContent=n.name;const o=document.createElement("div");if(o.className="shop-item-desc",o.textContent=n.description,a.appendChild(r),a.appendChild(o),i.appendChild(a),n.owned){const l=document.createElement("div");l.className="owned-badge",l.textContent="已擁有",i.appendChild(l)}else{const l=document.createElement("button");l.className="buy-btn",l.textContent=`購買 ($${n.price})`,l.disabled=e.money<n.price,l.onclick=()=>{e.buyAccessory(n.id)&&this.switchTab(2)},i.appendChild(l)}t.appendChild(i)}),this.contentArea.appendChild(t)}renderStackingLab(e){const t=e.photos||[],n=t.filter(V=>!V.sold&&(!V.frameType||V.frameType==="light")),i=t.filter(V=>!V.sold&&V.frameType==="dark"),a=t.filter(V=>!V.sold&&V.frameType==="flat"),r=t.filter(V=>!V.sold&&V.frameType==="bias"),o=new Map;n.forEach(V=>{const ie=V.targetName||"未知星野";o.has(ie)||o.set(ie,[]),o.get(ie).push(V)});const l=document.createElement("div");if(l.className="stacking-lab-container",n.length===0){l.innerHTML=`
                <div class="empty-state">
                    <div style="font-size:24px;margin-bottom:8px;font-weight:700;color:#fff;">疊圖處理工坊</div>
                    <div style="font-size:16px;color:#94a3b8;font-weight:600;">尚無可供疊合的亮場底片</div>
                    <div style="font-size:13px;color:#64748b;margin-top:8px;max-width:520px;line-height:1.6;">
                        在真實天文攝影中，拍攝多張同一目標的亮場（Light），並搭配<strong>暗場（按 2 蓋鏡頭蓋）</strong>、<strong>平場（按 3 柔光罩）</strong>、<strong>偏壓（按 4 快門底噪）</strong>，即可在中位數疊圖中消除熱噪點、鏡頭暗角與晃動星軌，合成出震撼的 <strong>SSS 級大師典藏神作</strong>！
                    </div>
                </div>
            `,this.contentArea.appendChild(l);return}const c=document.createElement("div");c.className="stacking-left-panel";const d=Array.from(o.keys());let h=d[0];c.innerHTML=`
            <div class="stacking-section-title">1. 選擇目標天體</div>
            <select class="stacking-target-select" id="stack-target-select">
                ${d.map(V=>`<option value="${V}">${V} (${o.get(V).length} 張亮場)</option>`).join("")}
            </select>

            <div class="stacking-section-title" style="margin-top:16px;">
                <span>2. 勾選亮場底片 (Light Frames)</span>
                <button class="stack-small-btn" id="btn-select-all-lights">全選</button>
            </div>
            <div class="stacking-lights-list" id="stack-lights-list"></div>

            <div class="stacking-section-title" style="margin-top:16px;">3. 專業天文校準槽 (Calibration Slots)</div>
            <div class="calibration-slots-group">
                <label class="calib-slot-item ${i.length>0?"available":"empty"}">
                    <input type="checkbox" id="calib-dark-chk" ${i.length>0?"checked":"disabled"}>
                    <div class="calib-slot-info">
                        <div class="calib-slot-name">暗場槽 (Dark Frame)</div>
                        <div class="calib-slot-desc">已擁有 ${i.length} 張 · 扣除熱噪聲與壞點</div>
                    </div>
                </label>
                <label class="calib-slot-item ${a.length>0?"available":"empty"}">
                    <input type="checkbox" id="calib-flat-chk" ${a.length>0?"checked":"disabled"}>
                    <div class="calib-slot-info">
                        <div class="calib-slot-name">平場槽 (Flat Frame)</div>
                        <div class="calib-slot-desc">已擁有 ${a.length} 張 · 修正邊緣暗角與灰塵</div>
                    </div>
                </label>
                <label class="calib-slot-item ${r.length>0?"available":"empty"}">
                    <input type="checkbox" id="calib-bias-chk" ${r.length>0?"checked":"disabled"}>
                    <div class="calib-slot-info">
                        <div class="calib-slot-name">偏壓槽 (Bias Frame)</div>
                        <div class="calib-slot-desc">已擁有 ${r.length} 張 · 消除感光晶片讀出底噪</div>
                    </div>
                </label>
            </div>

            <div class="calibration-status-box" id="calib-status-box">
                <div style="font-size:12px;color:#94a3b8;margin-bottom:4px;">校準完整度評估：</div>
                <div class="calib-progress-bar"><div class="calib-progress-fill" id="calib-progress-fill" style="width:50%"></div></div>
                <div class="calib-status-text" id="calib-status-text">亮場疊合 · 消除噪點</div>
            </div>

            <button class="stack-execute-btn" id="btn-execute-stack">
                <span>開始星點對齊與天文校準疊圖</span>
            </button>
        `;const u=document.createElement("div");u.className="stacking-right-panel",u.innerHTML=`
            <div class="stacking-viewport-header">
                <div class="vp-title" id="vp-title">預覽視窗</div>
                <div style="display:flex;gap:8px;align-items:center;">
                    <div class="vp-mode-buttons" id="vp-mode-buttons" style="display:none;">
                        <button class="vp-mode-btn active" id="btn-mode-slider">拉桿對比</button>
                        <button class="vp-mode-btn" id="btn-mode-stacked">大師疊圖</button>
                        <button class="vp-mode-btn" id="btn-mode-original">單張原圖</button>
                    </div>
                    <div class="vp-badge" id="vp-badge">未疊圖單張</div>
                </div>
            </div>
            <div class="stacking-preview-box" id="stack-preview-box">
                <img id="stack-preview-img" class="stack-preview-img" src="" alt="預覽"/>
                <div class="stack-slider-container" id="stack-slider-container" style="display:none;">
                    <img id="stack-after-img" class="stack-slider-img after" src="" alt="疊圖後"/>
                    <img id="stack-before-img" class="stack-slider-img before" src="" alt="疊圖前"/>
                    <div class="stack-slider-line" id="stack-slider-line">
                        <div class="stack-slider-handle">&lt;|&gt;</div>
                    </div>
                    <div class="slider-side-tag tag-left">疊圖前單張 (未處理)</div>
                    <div class="slider-side-tag tag-right">疊圖後大師 (已降噪)</div>
                </div>
            </div>

            <div class="stacking-progress-panel" id="stack-progress-panel" style="display:none;">
                <div class="stack-step-label" id="stack-step-label">正在檢測星點...</div>
                <div class="stack-calc-bar"><div class="stack-calc-fill" id="stack-calc-fill"></div></div>
            </div>

            <div class="stacking-result-actions" id="stack-result-actions" style="display:none;">
                <div class="stack-result-report" id="stack-result-report"></div>
                <div style="display:flex;gap:10px;margin-top:12px;">
                    <button class="buy-btn" id="btn-save-stacked" style="flex:1;">儲存至照片庫與圖鑑</button>
                    <button class="photo-sell-btn" id="btn-sell-stacked" style="flex:1;">立即以天價出售</button>
                </div>
            </div>
        `,l.appendChild(c),l.appendChild(u),this.contentArea.appendChild(l);const p=c.querySelector("#stack-target-select"),g=c.querySelector("#stack-lights-list"),v=c.querySelector("#btn-select-all-lights"),m=c.querySelector("#calib-dark-chk"),f=c.querySelector("#calib-flat-chk"),x=c.querySelector("#calib-bias-chk"),E=c.querySelector("#calib-progress-fill"),_=c.querySelector("#calib-status-text"),L=c.querySelector("#btn-execute-stack"),C=u.querySelector("#stack-preview-img"),w=u.querySelector("#stack-slider-container"),R=u.querySelector("#stack-before-img"),S=u.querySelector("#stack-after-img"),M=u.querySelector("#stack-slider-line"),A=u.querySelector("#vp-mode-buttons"),B=u.querySelector("#btn-mode-slider"),F=u.querySelector("#btn-mode-stacked"),O=u.querySelector("#btn-mode-original"),W=u.querySelector("#stack-progress-panel"),$=u.querySelector("#stack-step-label"),Q=u.querySelector("#stack-calc-fill"),q=u.querySelector("#stack-result-actions"),oe=u.querySelector("#stack-result-report"),le=u.querySelector("#vp-badge");let X=new Set,ne=null;const ce=()=>{let V=40;m.checked&&(V+=20),f.checked&&(V+=20),x.checked&&(V+=20),E.style.width=`${V}%`,V>=100?_.innerHTML='<span style="color:#34d399;font-weight:700;">100% 完整天文校準 · 解鎖 SSS 級「典藏傑作」</span>':V>=80?_.innerHTML='<span style="color:#38bdf8;">高度校準 · 最高 S 級大作</span>':_.innerHTML='<span style="color:#94a3b8;">基礎亮場校準 · 最高 A 級</span>'};m.onchange=ce,f.onchange=ce,x.onchange=ce,ce();const H=()=>{h=p.value;const V=o.get(h)||[];g.innerHTML="",X.clear(),V.forEach((ie,ve)=>{X.add(ie.id);const be=document.createElement("div");be.className=`stack-light-item ${ve===0?"active-preview":""}`,be.style.cursor="pointer",be.innerHTML=`
                    <input type="checkbox" value="${ie.id}" checked style="cursor:pointer;margin-right:8px;">
                    <img class="stack-light-thumb" src="${ie.imageDataUrl}" alt="${ie.targetName}"/>
                    <div class="stack-light-meta" style="flex:1;">
                        <div class="stack-light-title">#${ve+1} 曝光 ${ie.exposureSeconds}s · ${ie.quality}級 (${ie.score}分)</div>
                        <div class="stack-light-flags">
                            ${ie.hasMotionBlur?'<span class="flag-blur">晃動殘影</span>':'<span class="flag-clean">清晰銳利</span>'}
                            <span class="flag-val">$${ie.sellPrice}</span>
                        </div>
                    </div>
                    <button class="stack-light-del" title="刪除此張底片" style="background:rgba(239,68,68,0.15);border:1px solid rgba(239,68,68,0.35);color:#fca5a5;border-radius:4px;padding:3px 7px;font-size:11px;cursor:pointer;margin-left:6px;">刪除</button>
                `;const Ie=be.querySelector("input");Ie.onclick=We=>{We.stopPropagation()},Ie.onchange=()=>{Ie.checked?X.add(ie.id):X.delete(ie.id),L.disabled=X.size<2};const De=be.querySelector(".stack-light-del");De.onclick=We=>{We.stopPropagation(),e.deletePhoto(ie.id),document.dispatchEvent(new CustomEvent("show-notification",{detail:{message:`已刪除底片：#${ve+1} (${ie.exposureSeconds}s)`,type:"info"}})),this.renderStackingLab(te.getState())},be.onclick=()=>{g.querySelectorAll(".stack-light-item").forEach(We=>We.classList.remove("active-preview")),be.classList.add("active-preview"),A.style.display="none",w.style.display="none",C.src=ie.imageDataUrl,C.style.display="block",le.textContent=`預覽第 #${ve+1} 張底片 (${ie.exposureSeconds}s)`},g.appendChild(be)}),V.length>0&&(C.src=V[0].imageDataUrl,w.style.display="none",C.style.display="block",le.textContent="單張亮場原圖"),L.disabled=X.size<2};p.onchange=H,v.onclick=()=>{g.querySelectorAll("input").forEach(V=>{V.checked=!0,X.add(V.value)}),L.disabled=X.size<2},H(),L.onclick=async()=>{const V=(o.get(h)||[]).filter(y=>X.has(y.id));if(V.length<2)return;L.disabled=!0,W.style.display="block",q.style.display="none",w.style.display="none",C.style.display="block";const ie=[{text:"正在檢測特徵星點重心並進行亞像素對齊 (Star Centroid Alignment)...",pct:25},{text:"扣除暗場熱噪聲與偏壓底噪 (Dark & Bias Rejection)...",pct:50},{text:"除以平場修正鏡頭暗角與塵斑 (Flat Field Calibration)...",pct:75},{text:"中位數截斷融合、星軌殘影濾除與 HDR 色彩拉伸 (Sigma-Clipping & Asinh)...",pct:100}];for(const y of ie)$.textContent=y.text,Q.style.width=`${y.pct}%`,await new Promise(k=>setTimeout(k,450));const ve=await this.processCanvasStacking(V,m.checked,f.checked,x.checked);W.style.display="none";const be=m.checked&&f.checked&&x.checked,Ie=V.length,De=V.reduce((y,k)=>y+k.score,0)/Ie,We=V.reduce((y,k)=>y+(k.sellPrice||0),0)/Ie,D=h.includes("未知")||h==="未知星野",lt=V[0].targetType||et.StarField;let Le,Pe,ge;if(D)Le=Math.min(50,Math.round(De+Math.min(10,Ie*2))),Pe=Le>=45?He.B:He.C,ge=Math.max(10,Math.min(35,Math.floor(We*(1.2+Ie*.1))));else{const y=(m.checked?4:0)+(f.checked?4:0)+(x.checked?4:0),k=Math.min(18,Ie*2.5);Le=Math.min(100,Math.round(De+k+y)),be&&Ie>=3&&Le>=95?Pe=He.SSS:Le>=88?Pe=He.S:Le>=70?Pe=He.A:Pe=He.B;const Z=1.2+Math.min(.8,Ie*.15)+(be?.6:.2);ge=Math.floor(We*Z);const j={[et.StarField]:150,[et.Planet]:800,[et.Messier]:2200,[et.SpecialEvent]:4e3}[lt]||1500;ge=Math.min(j,Math.max(15,ge))}const $e=V.reduce((y,k)=>y+k.exposureSeconds,0);ne={id:`master_stacked_${Date.now()}`,imageDataUrl:ve,targetName:`${h} [大師級疊圖]`,targetType:lt,exposureSeconds:$e,telescopeLevel:e.telescopeLevel||1,weatherCondition:e.weather,locationId:e.currentLocation?.id||"hehuanshan",score:Le,quality:Pe,sellPrice:ge,sold:!1,timestamp:new Date,isStacked:!0,stackedCount:Ie,calibratedWith:{dark:m.checked,flat:f.checked,bias:x.checked}},A.style.display="flex",B.classList.add("active"),F.classList.remove("active"),O.classList.remove("active"),C.style.display="none",w.style.display="block",R.src=V[0].imageDataUrl,S.src=ve,le.textContent="疊圖前後對比",B.onclick=()=>{B.classList.add("active"),F.classList.remove("active"),O.classList.remove("active"),C.style.display="none",w.style.display="block",R.style.clipPath="polygon(0 0, 50% 0, 50% 100%, 0 100%)",M.style.display="block",M.style.left="50%",le.textContent="疊圖前後拉桿對比 (左:疊圖前 / 右:疊圖後)"},F.onclick=()=>{F.classList.add("active"),B.classList.remove("active"),O.classList.remove("active"),w.style.display="none",C.src=ve,C.style.display="block",le.textContent="疊圖後大師作品 (已降噪消除殘影)"},O.onclick=()=>{O.classList.add("active"),B.classList.remove("active"),F.classList.remove("active"),w.style.display="none",C.src=V[0].imageDataUrl,C.style.display="block",le.textContent="單張原始底片 (未處理噪點)"};let Se=!1;const T=y=>{const k=w.getBoundingClientRect();if(k.width<=0)return;const ee=Math.max(0,Math.min(k.width,y-k.left))/k.width*100;M.style.left=`${ee}%`,R.style.clipPath=`polygon(0 0, ${ee}% 0, ${ee}% 100%, 0 100%)`};w.onmousedown=y=>{Se=!0,T(y.clientX)},window.onmousemove=y=>{Se&&T(y.clientX)},window.onmouseup=()=>{Se=!1},requestAnimationFrame(()=>{const y=w.getBoundingClientRect();T(y.left+y.width*.5)}),oe.innerHTML=`
                <div style="font-size:15px;font-weight:700;color:${D?"#94a3b8":"#38bdf8"};margin-bottom:6px;">
                    ${D?"未知空白星野疊圖完成":Pe===He.SSS?"SSS級 天文台典藏神作！":"S級 大師作品！"}
                </div>
                <div style="font-size:12px;color:#cbd5e1;line-height:1.5;">
                    ${D?"空白星野缺乏顯著深空天體，疊圖已消除底噪，但市場收購價較低。建議瞄準梅西耶星雲或太陽系行星拍攝！<br/>":`疊加素材: ${Ie} 張亮場（總曝光 ${$e.toFixed(1)}s） · 校準: ${be?"完整四場校準 (Dark+Flat+Bias)":"部分校準"}<br/>`}
                    評分變更: <strong>${De.toFixed(0)}分 -> ${Le}分</strong> · 評估價值: <strong style="color:#fbbf24;">$${ge}</strong>
                </div>
            `,q.style.display="block",L.disabled=!1};const K=u.querySelector("#btn-save-stacked");K.onclick=()=>{ne&&(e.addPhoto(ne),document.dispatchEvent(new CustomEvent("photo-captured",{detail:{photo:ne,targetInfo:{name:h}}})),document.dispatchEvent(new CustomEvent("show-notification",{detail:{message:"已儲存大師級疊圖至圖鑑與照片庫！",type:"success"}})),this.switchTab(0))};const re=u.querySelector("#btn-sell-stacked");re.onclick=()=>{ne&&(e.addMoney(ne.sellPrice),document.dispatchEvent(new CustomEvent("show-notification",{detail:{message:`以大師典藏價售出，獲得 $${ne.sellPrice}！`,type:"success"}})),this.switchTab(0))}}async processCanvasStacking(e,t,n,i){const o=document.createElement("canvas");o.width=800,o.height=600;const l=o.getContext("2d"),c=await Promise.all(e.map(E=>new Promise(_=>{const L=new Image;L.crossOrigin="anonymous",L.onload=()=>_(L),L.src=E.imageDataUrl}))),d=document.createElement("canvas");d.width=800,d.height=600;const h=d.getContext("2d"),u=c.map(E=>(h.clearRect(0,0,800,600),h.drawImage(E,0,0,800,600),h.getImageData(0,0,800,600).data)),p=l.createImageData(800,600),g=u.length,v=Math.floor(g/2),m=800/2,f=600/2,x=Math.sqrt(m*m+f*f);for(let E=0;E<p.data.length;E+=4){const _=E/4,L=_%800,C=Math.floor(_/800),w=[],R=[],S=[];for(let O=0;O<g;O++)w.push(u[O][E]),R.push(u[O][E+1]),S.push(u[O][E+2]);w.sort((O,W)=>O-W),R.sort((O,W)=>O-W),S.sort((O,W)=>O-W);let M=w[v],A=R[v],B=S[v];if(t&&(M=Math.max(0,M-5),A=Math.max(0,A-5),B=Math.max(0,B-5)),i&&(M=Math.max(0,M-3),A=Math.max(0,A-3),B=Math.max(0,B-3)),n){const O=Math.sqrt(Math.pow(L-m,2)+Math.pow(C-f,2)),W=1+Math.pow(O/x,2)*.38;M=Math.min(255,M*W),A=Math.min(255,A*W),B=Math.min(255,B*W)}const F=Math.min(1.45,1+Math.log2(g)*.12);M=Math.min(255,M*F),A=Math.min(255,A*F),B=Math.min(255,B*F),p.data[E]=M,p.data[E+1]=A,p.data[E+2]=B,p.data[E+3]=255}return l.putImageData(p,0,0),l.save(),l.globalCompositeOperation="screen",l.globalAlpha=.15,l.drawImage(o,0,0),l.restore(),o.toDataURL("image/jpeg",.94)}update(e){this.headerMoney.textContent=`$${e.money}`,e.gameMode===we.Studio&&this.container.style.display==="none"?this.show():e.gameMode!==we.Studio&&this.container.style.display==="flex"&&this.hide()}show(){this.container.style.display="flex",this.switchTab(this.currentTabIndex)}hide(){this.container.style.display="none"}dispose(){this.unsubscribe(),this.container.remove()}}const Ws=[{id:"moon",name:"Moon",commonName:"月球",type:"天然衛星",desc:"地球唯一的天然衛星，表面覆蓋大量環形山（第谷、哥白尼）與月海暗斑。",magnitude:-12.5},{id:"saturn",name:"Saturn",commonName:"土星",type:"氣態巨行星",desc:"擁有太陽系中最壯觀耀眼的光環系統、卡西尼環縫與金色雲帶。",magnitude:.5},{id:"jupiter",name:"Jupiter",commonName:"木星",type:"氣態巨行星",desc:"太陽系行星之王，擁有絢麗氣態雲帶、大紅斑旋渦與4顆伽利略衛星。",magnitude:-2.6},{id:"mars",name:"Mars",commonName:"火星",type:"類地行星",desc:"紅色荒漠行星，兩極擁有由乾冰與水冰組成的白色極冠。",magnitude:-1.5},{id:"venus",name:"Venus",commonName:"金星",type:"類地行星",desc:"夜空中最璀璨的啟明星與長庚星，擁有顯著的金星相位盈虧。",magnitude:-4.3},{id:"mercury",name:"Mercury",commonName:"水星",type:"類地行星",desc:"最接近太陽的行星，運行速度極快，僅在清晨或黃昏短暫可見。",magnitude:-.4},{id:"uranus",name:"Uranus",commonName:"天王星",type:"冰巨行星",desc:"淡藍綠色的遙遠冰巨星，自轉軸極度傾斜。",magnitude:5.7},{id:"neptune",name:"Neptune",commonName:"海王星",type:"冰巨行星",desc:"深藍色的太陽系最外側大行星，擁有強烈的風暴系統。",magnitude:7.8}];function ks(s,e){const t=(s.name||"").toLowerCase(),n=(s.commonName||"").toLowerCase(),i=(s.id||"").toLowerCase();return e.filter(a=>{const r=(a.targetName||"").toLowerCase();return r?!!(i&&(r.includes(i)||r===i)||n&&(r.includes(n)||n.includes(r))||t&&(r.includes(t)||t.includes(r))):!1}).sort((a,r)=>(r.score||0)-(a.score||0))}class O0{constructor(){this.isVisible=!1,this.currentTab=0,this.container=document.createElement("div"),this.container.className="codex-panel",this.container.style.display="none",document.body.appendChild(this.container),this.onPhotoCapturedHandler=()=>{this.isVisible&&this.render()},this.onQuestCompletedHandler=()=>{this.isVisible&&this.render()},document.addEventListener("photo-captured",this.onPhotoCapturedHandler),document.addEventListener("quest-completed",this.onQuestCompletedHandler),document.addEventListener("keydown",e=>{if(e.code==="KeyG"||e.key.toLowerCase()==="g"){const t=te.getState().gameMode;(t===we.Walk||t===we.Studio||this.isVisible)&&this.toggle()}else e.code==="Escape"&&this.isVisible&&(this.hide(),e.stopPropagation())})}toggle(){this.isVisible?this.hide():this.show()}show(){this.isVisible=!0,this.container.style.display="flex",document.pointerLockElement&&document.exitPointerLock(),this.render()}hide(){this.isVisible=!1,this.container.style.display="none"}get visible(){return this.isVisible}render(){const e=te.getState(),t=e.photos||[],n=e.completedQuestIds||[],i=Sn.filter(h=>ks(h,t).length>0).length,a=Ws.filter(h=>ks(h,t).length>0).length;this.container.innerHTML=`
        <div class="codex-header">
            <h2>梅西耶觀測圖鑑 & 任務日誌</h2>
            <button class="close-btn" id="codex-close-btn" title="關閉圖鑑 [ESC]">&times;</button>
        </div>
        <div class="codex-tabs">
            <button class="codex-tab ${this.currentTab===0?"active":""}" id="codex-tab-0">梅西耶深空天體 (${i}/${Sn.length})</button>
            <button class="codex-tab ${this.currentTab===1?"active":""}" id="codex-tab-1">太陽系行星 (${a}/${Ws.length})</button>
            <button class="codex-tab ${this.currentTab===2?"active":""}" id="codex-tab-2">主線任務 (${n.length}/${ns.length})</button>
        </div>
        <div class="codex-body ${this.currentTab===2?"quest-mode":""}" id="codex-body"></div>
        `;const r=this.container.querySelector("#codex-close-btn");r&&(r.onclick=h=>{h.stopPropagation(),this.hide()});const o=this.container.querySelector("#codex-tab-0");o&&(o.onclick=h=>{h.stopPropagation(),this.currentTab=0,this.render()});const l=this.container.querySelector("#codex-tab-1");l&&(l.onclick=h=>{h.stopPropagation(),this.currentTab=1,this.render()});const c=this.container.querySelector("#codex-tab-2");c&&(c.onclick=h=>{h.stopPropagation(),this.currentTab=2,this.render()});const d=this.container.querySelector("#codex-body");d&&(this.currentTab===0?this.renderDSOGrid(d,t,e):this.currentTab===1?this.renderPlanetsGrid(d,t,e):this.renderQuestLog(d,n))}renderDSOGrid(e,t,n){e.innerHTML="";const i={galaxy:{name:"星系 (Galaxy)",color:"#38bdf8"},nebula:{name:"發射星雲 (Nebula)",color:"#f43f5e"},cluster:{name:"星團 (Cluster)",color:"#fbbf24"},planetary_nebula:{name:"行星狀星雲 (Planetary)",color:"#34d399"}},a=n.customTrackedDsoId;for(const r of Sn){const o=ks(r,t),l=o.length>0,c=o[0],d=a===r.id||a===r.name,h=Zs(r,n.currentLocation.latitude,n.currentLocation.longitude,n.currentTime),u=i[r.type]||{name:r.type,color:"#94a3b8"},p=document.createElement("div");p.className=`codex-dso-card ${l?"captured":"locked"} ${d?"tracking":""}`,p.innerHTML=`
                <div class="codex-card-top">
                    <span class="dso-badge" style="background:${u.color}22; color:${u.color}; border:1px solid ${u.color}44;">${r.id}</span>
                    <span class="dso-type-tag" style="color:${u.color}; font-size:11px;">${u.name}</span>
                </div>
                ${l&&c?`<img src="${c.imageDataUrl}" alt="${r.name}" class="codex-thumb" style="cursor:pointer;" title="點擊全螢幕檢視相片"/>`:`<div class="codex-thumb-lock" style="cursor:pointer;" title="點擊檢視天文台參考相片">${r.id}</div>`}
                <div class="codex-dso-info">
                    <div class="codex-dso-name" title="${r.commonName}">${r.name} · ${r.commonName}</div>
                    <div class="codex-dso-meta">視星等 ${r.magnitude} · 視直徑 ${r.sizeArcmin}' · RA ${r.ra.toFixed(2)}h / Dec ${r.dec.toFixed(1)}°</div>
                    <div class="codex-vis-badge ${h.isCurrentlyVisible?"visible":"waiting"}">
                        ${h.isCurrentlyVisible?`目前空中可見 (仰角 ${Math.round(h.currentAltitude)}°)`:`最佳時段: ${h.bestTimeStr}`}
                    </div>
                    ${r.starHoppingGuide?`<div class="codex-guide-text"><strong>尋星導引：</strong>${r.starHoppingGuide}</div>`:""}
                    ${l?`<div class="codex-dso-grade quality ${c?.quality}">最高評級: ${c?.quality}級 (${c?.score}分 · 價值 $${c?.sellPrice})</div>`:'<div class="codex-dso-lock-icon">未觀測解鎖</div>'}
                </div>
                <div class="codex-card-actions">
                    <button class="codex-track-btn ${d?"active":""}" id="btn-track-${r.id}">
                        ${d?"追蹤中 (點擊取消)":"設為望遠鏡尋星目標"}
                    </button>
                    ${l&&c?`<button class="codex-view-btn" id="btn-view-${r.id}">查看相片 (${o.length}張)</button>`:`<button class="codex-view-btn ref-btn" id="btn-ref-${r.id}" style="background:rgba(56,189,248,0.15); color:#38bdf8; border:1px solid rgba(56,189,248,0.3);">觀測參考照</button>`}
                </div>
            `;const g=p.querySelector(".codex-thumb, .codex-thumb-lock");g&&(g.onclick=x=>{if(x.stopPropagation(),l&&c)document.dispatchEvent(new CustomEvent("open-lightbox",{detail:{photoId:c.id}}));else{const _="./".endsWith("/")?"./":".//";this.showReferenceModal(`${r.id} ${r.commonName}`,u.name,`${_}textures/dso/${r.id}.png`,r.starHoppingGuide||"暫無深空天體特殊描述",`赤經 ${r.ra.toFixed(2)}h · 赤緯 ${r.dec.toFixed(1)}° · 視星等 ${r.magnitude}`,r.id)}});const v=p.querySelector(`#btn-track-${r.id}`);v&&(v.onclick=x=>{x.stopPropagation(),d?(te.getState().setCustomTrackedDso(null),document.dispatchEvent(new CustomEvent("show-notification",{detail:{message:`已取消追蹤 ${r.id}`,type:"info"}}))):(te.getState().setCustomTrackedDso(r.id),document.dispatchEvent(new CustomEvent("show-notification",{detail:{message:`已將 ${r.id} ${r.commonName} 設為尋星目標！進入望遠鏡將啟用指針導引`,type:"success"}}))),this.render()});const m=p.querySelector(`#btn-view-${r.id}`);m&&c&&(m.onclick=x=>{x.stopPropagation(),document.dispatchEvent(new CustomEvent("open-lightbox",{detail:{photoId:c.id}}))});const f=p.querySelector(`#btn-ref-${r.id}`);f&&(f.onclick=x=>{x.stopPropagation();const E="./",_=E.endsWith("/")?E:`${E}/`;this.showReferenceModal(`${r.id} ${r.commonName}`,u.name,`${_}textures/dso/${r.id}.png`,r.starHoppingGuide||"暫無深空天體特殊描述",`赤經 ${r.ra.toFixed(2)}h · 赤緯 ${r.dec.toFixed(1)}° · 視星等 ${r.magnitude}`,r.id)}),e.appendChild(p)}}renderPlanetsGrid(e,t,n){e.innerHTML="";const i=n.customTrackedDsoId;for(const a of Ws){const r=ks(a,t),o=r.length>0,l=r[0],c=i===a.id||i===a.name,d=document.createElement("div");d.className=`codex-dso-card ${o?"captured":"locked"} ${c?"tracking":""}`,d.innerHTML=`
                <div class="codex-card-top">
                    <span class="dso-badge" style="background:rgba(56,189,248,0.15); color:#38bdf8; border:1px solid rgba(56,189,248,0.3);">${a.commonName}</span>
                    <span class="dso-type-tag" style="color:#94a3b8; font-size:11px;">${a.type}</span>
                </div>
                ${o&&l?`<img src="${l.imageDataUrl}" alt="${a.commonName}" class="codex-thumb" style="cursor:pointer;" title="點擊全螢幕檢視相片"/>`:`<div class="codex-thumb-lock" style="cursor:pointer;" title="點擊檢視天文台參考相片">${a.commonName}</div>`}
                <div class="codex-dso-info">
                    <div class="codex-dso-name">${a.commonName} · ${a.name}</div>
                    <div class="codex-dso-meta">${a.type} &bull; 視星等 ${a.magnitude}</div>
                    <div class="codex-guide-text" style="color:#cbd5e1; margin:6px 0;">${a.desc}</div>
                    ${o?`<div class="codex-dso-grade quality ${l?.quality}">最高評級: ${l?.quality}級 (${l?.score}分 · 價值 $${l?.sellPrice})</div>`:'<div class="codex-dso-lock-icon">未拍攝收錄</div>'}
                </div>
                <div class="codex-card-actions">
                    <button class="codex-track-btn ${c?"active":""}" id="btn-track-planet-${a.id}">
                        ${c?"追蹤中 (點擊取消)":"設為望遠鏡尋星目標"}
                    </button>
                    ${o&&l?`<button class="codex-view-btn" id="btn-view-planet-${a.id}">查看相片 (${r.length}張)</button>`:`<button class="codex-view-btn ref-btn" id="btn-ref-planet-${a.id}" style="background:rgba(56,189,248,0.15); color:#38bdf8; border:1px solid rgba(56,189,248,0.3);">觀測參考照</button>`}
                </div>
            `;const h=d.querySelector(".codex-thumb, .codex-thumb-lock");h&&(h.onclick=v=>{if(v.stopPropagation(),o&&l)document.dispatchEvent(new CustomEvent("open-lightbox",{detail:{photoId:l.id}}));else{const f="./".endsWith("/")?"./":".//";this.showReferenceModal(`${a.commonName} ${a.name}`,a.type,`${f}textures/planets/${a.id}.png`,a.desc,`太陽系天體 · 視星等 ${a.magnitude}`,a.id)}});const u=d.querySelector(`#btn-track-planet-${a.id}`);u&&(u.onclick=v=>{v.stopPropagation(),c?(te.getState().setCustomTrackedDso(null),document.dispatchEvent(new CustomEvent("show-notification",{detail:{message:`已取消追蹤 ${a.commonName}`,type:"info"}}))):(te.getState().setCustomTrackedDso(a.id),document.dispatchEvent(new CustomEvent("show-notification",{detail:{message:`已將 ${a.commonName} 設為尋星目標！進入望遠鏡將啟用指針導引`,type:"success"}}))),this.render()});const p=d.querySelector(`#btn-view-planet-${a.id}`);p&&l&&(p.onclick=v=>{v.stopPropagation(),document.dispatchEvent(new CustomEvent("open-lightbox",{detail:{photoId:l.id}}))});const g=d.querySelector(`#btn-ref-planet-${a.id}`);g&&(g.onclick=v=>{v.stopPropagation();const m="./",f=m.endsWith("/")?m:`${m}/`;this.showReferenceModal(`${a.commonName} ${a.name}`,a.type,`${f}textures/planets/${a.id}.png`,a.desc,`太陽系天體 · 視星等 ${a.magnitude}`,a.id)}),e.appendChild(d)}}showReferenceModal(e,t,n,i,a,r){let o=document.getElementById("codex-ref-modal");o||(o=document.createElement("div"),o.id="codex-ref-modal",o.className="lightbox-overlay",o.style.zIndex="10050",document.body.appendChild(o)),o.innerHTML=`
            <div class="lightbox-backdrop"></div>
            <div class="lightbox-content" style="max-width:640px; width:90%; background:rgba(15,23,42,0.96); border:1px solid rgba(56,189,248,0.4); border-radius:12px; overflow:hidden; display:flex; flex-direction:column; box-shadow:0 25px 60px rgba(0,0,0,0.85);">
                <div style="padding:14px 18px; background:rgba(30,41,59,0.8); border-bottom:1px solid rgba(255,255,255,0.1); display:flex; justify-content:space-between; align-items:center;">
                    <div>
                        <span style="background:rgba(56,189,248,0.2); color:#38bdf8; font-size:11px; padding:2px 8px; border-radius:4px; margin-right:8px; font-weight:700;">${t}</span>
                        <strong style="font-size:16px; color:#f8fafc;">${e} · 官方觀測參考影像</strong>
                    </div>
                    <button class="close-btn" id="ref-modal-close" style="background:none; border:none; color:#cbd5e1; font-size:24px; cursor:pointer;">&times;</button>
                </div>
                <div style="width:100%; height:340px; background:#020617; display:flex; align-items:center; justify-content:center; overflow:hidden;">
                    <img src="${n}" style="max-width:100%; max-height:100%; object-fit:contain;" alt="${e}"/>
                </div>
                <div style="padding:16px 20px; display:flex; flex-direction:column; gap:8px;">
                    <div style="font-size:12px; color:#38bdf8; font-weight:500;">${a}</div>
                    <div style="font-size:13px; line-height:1.6; color:#cbd5e1;">${i}</div>
                    <div style="display:flex; justify-content:flex-end; gap:10px; margin-top:10px;">
                        <button id="ref-modal-track" style="background:#38bdf8; color:#020617; border:none; padding:8px 18px; border-radius:6px; font-size:13px; font-weight:700; cursor:pointer; transition:all 0.2s;">設為尋星目標並前往望遠鏡</button>
                    </div>
                </div>
            </div>
        `,o.style.display="flex";const l=()=>{o&&(o.style.display="none")},c=o.querySelector("#ref-modal-close");c&&(c.onclick=l);const d=o.querySelector(".lightbox-backdrop");d&&(d.onclick=l);const h=o.querySelector("#ref-modal-track");h&&(h.onclick=()=>{l(),this.hide(),te.getState().setCustomTrackedDso(r),te.getState().setGameMode(we.Telescope),document.dispatchEvent(new CustomEvent("show-notification",{detail:{message:`已鎖定 ${e}！進入望遠鏡並啟用尋星導引`,type:"success"}}))})}renderQuestLog(e,t){e.innerHTML="";for(const n of ns){const i=t.includes(n.id),r=(!n.prerequisiteQuestId||t.includes(n.prerequisiteQuestId))&&!i,o=document.createElement("div");o.className=`codex-quest-card ${i?"done":r?"available":"locked"}`;const l=n.character;o.innerHTML=`
                <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:8px;">
                    <div>
                        <div class="quest-status">${i?"[已完成]":r?"[進行中]":"[未解鎖]"}</div>
                        <div class="quest-chapter">第 ${n.chapter} 章 · ${n.title}</div>
                    </div>
                    <div style="display:flex; align-items:center; gap:8px; background:rgba(255,255,255,0.06); padding:4px 10px; border-radius:16px;">
                        <span style="width:20px;height:20px;display:inline-flex;align-items:center;justify-content:center;">${l.avatarIcon}</span>
                        <span style="font-size:12px; color:${l.color}; font-weight:600;">${l.name}</span>
                    </div>
                </div>
                <div class="quest-story">${i||r?n.storySummary:"完成前置章節任務以解鎖劇情"}</div>
                ${i||r?`
                    <div class="quest-objectives">
                        <div style="font-size:11px; color:#64748b; margin-bottom:4px;">任務目標：</div>
                        ${n.objectives.map(d=>`<div class="quest-obj ${i?"done":""}">${i?"[完成]":"[進行]"} ${d.description}</div>`).join("")}
                    </div>
                `:""}
                <div style="display:flex; justify-content:space-between; align-items:center; margin-top:12px; border-top:1px solid rgba(255,255,255,0.08); padding-top:8px;">
                    <div class="quest-reward">獎勵: ${n.rewards.money?`$${n.rewards.money}`:""}${n.rewards.unlockLocation?" · 解鎖新地點":""}</div>
                    ${i||r?'<button class="quest-replay-btn" style="background:rgba(56,189,248,0.15); border:1px solid rgba(56,189,248,0.3); color:#38bdf8; padding:4px 12px; border-radius:6px; font-size:12px; cursor:pointer; transition:all 0.2s;">聆聽劇情對話</button>':""}
                </div>
            `;const c=o.querySelector(".quest-replay-btn");c&&(c.onclick=d=>{d.stopPropagation(),this.hide(),document.dispatchEvent(new CustomEvent("play-story-dialogue",{detail:{quest:n,mode:i?"complete":"intro"}}))}),e.appendChild(o)}}dispose(){document.removeEventListener("photo-captured",this.onPhotoCapturedHandler),document.removeEventListener("quest-completed",this.onQuestCompletedHandler),this.container.remove()}}class z0{constructor(){this.currentPhotos=[],this.currentIndex=0,this.overlay=document.createElement("div"),this.overlay.className="lightbox-overlay",this.overlay.style.display="none",this.overlay.innerHTML=`
            <div class="lightbox-backdrop"></div>
            <div class="lightbox-content">
                <button class="lightbox-close">&times;</button>
                <button class="lightbox-prev">&#8592;</button>
                <button class="lightbox-next">&#8594;</button>
                <div class="lightbox-img-wrap">
                    <img class="lightbox-img" src="" alt="" />
                </div>
                <div class="lightbox-details"></div>
            </div>
        `,document.body.appendChild(this.overlay),this.overlay.querySelector(".lightbox-close")?.addEventListener("click",()=>this.close()),this.overlay.querySelector(".lightbox-backdrop")?.addEventListener("click",()=>this.close()),this.overlay.querySelector(".lightbox-prev")?.addEventListener("click",()=>this.prev()),this.overlay.querySelector(".lightbox-next")?.addEventListener("click",()=>this.next()),document.addEventListener("keydown",e=>{this.overlay.style.display!=="none"&&(e.code==="Escape"&&this.close(),e.code==="ArrowLeft"&&this.prev(),e.code==="ArrowRight"&&this.next())})}open(e,t){!e||e.length===0||(this.currentPhotos=e,this.currentIndex=Math.max(0,Math.min(t,e.length-1)),this.overlay.style.display="flex",this.showPhoto())}close(){this.overlay.style.display="none"}prev(){this.currentIndex>0&&(this.currentIndex--,this.showPhoto())}next(){this.currentIndex<this.currentPhotos.length-1&&(this.currentIndex++,this.showPhoto())}showPhoto(){const e=this.currentPhotos[this.currentIndex];if(!e)return;const t=this.overlay.querySelector(".lightbox-img");t.src=e.imageDataUrl;const n={clear:"晴朗",partly_cloudy:"部分多雲",cloudy:"多雲",rainy:"雨天"},i=this.overlay.querySelector(".lightbox-details"),a=e.timestamp instanceof Date?e.timestamp:new Date(e.timestamp);i.innerHTML=`
            <div class="lb-row"><span class="lb-label">拍攝天體</span><span style="font-weight:600">${e.targetName}</span></div>
            <div class="lb-row"><span class="lb-label">品質評級</span><span class="quality ${e.quality}">${e.quality}級 (${e.score}分)</span></div>
            <div class="lb-row"><span class="lb-label">曝光時長</span><span>${e.exposureSeconds} 秒</span></div>
            <div class="lb-row"><span class="lb-label">望遠鏡</span><span>第 ${e.telescopeLevel||1} 級</span></div>
            <div class="lb-row"><span class="lb-label">拍攝天氣</span><span>${n[e.weatherCondition]||e.weatherCondition}</span></div>
            <div class="lb-row"><span class="lb-label">拍攝時間</span><span>${a.toLocaleString("zh-TW")}</span></div>
            <div class="lb-row"><span class="lb-label">市場售價</span><span>${e.sold?"已售出":e.sellPrice===0?"市場飽和 $0":`$${e.sellPrice}`}</span></div>
            <div class="lb-nav-hint">${this.currentIndex+1} / ${this.currentPhotos.length} · ← → 切換照片 · ESC 關閉</div>
        `}dispose(){this.overlay.remove()}}class G0{constructor(){this.currentLines=[],this.lineIndex=0,this.onFinishCallback=null,this.isTyping=!1,this.typingTimer=null,this.currentLineText="",this.container=document.createElement("div"),this.container.className="story-modal",this.container.style.display="none",this.container.innerHTML=`
            <div class="story-backdrop"></div>
            <div class="story-box">
                <div class="story-char-header">
                    <div class="story-avatar" id="story-avatar"></div>
                    <div class="story-char-meta">
                        <div class="story-char-name" id="story-name">陳伯</div>
                        <div class="story-char-role" id="story-role">合歡山老氣象員</div>
                    </div>
                    <div class="story-quest-title" id="story-title">【章節 0】第一道光</div>
                </div>
                <div class="story-body">
                    <div class="story-text" id="story-text"></div>
                </div>
                <div class="story-footer">
                    <button class="story-btn" id="story-next-btn">點擊繼續</button>
                </div>
            </div>
        `,document.body.appendChild(this.container),this.avatarEl=this.container.querySelector("#story-avatar"),this.nameEl=this.container.querySelector("#story-name"),this.roleEl=this.container.querySelector("#story-role"),this.textEl=this.container.querySelector("#story-text"),this.btnEl=this.container.querySelector("#story-next-btn"),this.titleEl=this.container.querySelector("#story-title"),this.btnEl.addEventListener("click",e=>{e.stopPropagation(),this.handleNext()}),this.container.querySelector(".story-box")?.addEventListener("click",e=>{e.stopPropagation(),this.handleNext()}),document.addEventListener("keydown",e=>{this.container.style.display!=="none"&&(e.code==="Space"||e.code==="Enter"||e.code==="KeyE"?(this.handleNext(),e.preventDefault()):e.code==="Escape"&&(this.hide(),this.onFinishCallback&&this.onFinishCallback(),e.preventDefault()))})}playIntroDialogue(e,t){this.currentLines=e.introDialogue,this.lineIndex=0,this.onFinishCallback=t||null,this.setCharacter(e.character,`【第 ${e.chapter} 章】${e.title}`),this.show(),this.showCurrentLine()}playCompleteDialogue(e,t){this.currentLines=e.completeDialogue,this.lineIndex=0,this.onFinishCallback=t||null,this.setCharacter(e.character,`【任務完成】${e.title}`),this.show(),this.showCurrentLine()}setCharacter(e,t){this.avatarEl.innerHTML=e.avatarIcon,this.nameEl.textContent=e.name,this.nameEl.style.color=e.color,this.roleEl.textContent=e.role,this.titleEl.textContent=t}show(){this.container.style.display="flex",document.pointerLockElement&&document.exitPointerLock()}hide(){if(this.container.style.display="none",this.onFinishCallback){const e=this.onFinishCallback;this.onFinishCallback=null,e()}}showCurrentLine(){if(this.lineIndex>=this.currentLines.length){this.hide();return}const e=this.currentLines[this.lineIndex];this.currentLineText=e,this.isTyping=!0,this.textEl.textContent="",this.btnEl.textContent=this.lineIndex===this.currentLines.length-1?"接受委託 / 繼續":"點擊繼續",this.typingTimer&&clearInterval(this.typingTimer);let t=0;this.typingTimer=setInterval(()=>{t<e.length?this.textEl.textContent=e.slice(0,++t):(this.isTyping=!1,clearInterval(this.typingTimer))},18)}handleNext(){this.isTyping?(this.typingTimer&&clearInterval(this.typingTimer),this.isTyping=!1,this.textEl.textContent=this.currentLineText):(this.lineIndex++,this.showCurrentLine())}dispose(){this.typingTimer&&clearInterval(this.typingTimer),this.container.remove()}}class V0{constructor(){this.currentGuideTab=0;const e=document.getElementById("ui-overlay");if(!e)throw new Error("ui-overlay not found");this.locationModal=document.createElement("div"),this.locationModal.className="location-modal",this.locationModal.style.display="none",this.timeReversalPanel=document.createElement("div"),this.timeReversalPanel.className="time-reversal-panel",this.timeReversalPanel.style.display="none",this.guideModal=this.createGuideModal(),e.appendChild(this.locationModal),e.appendChild(this.timeReversalPanel),e.appendChild(this.guideModal),this.setupKeyboardListeners(),this.unsubscribe=te.subscribe(t=>this.update(t))}createGuideModal(){const e=document.createElement("div");e.className="guide-modal",e.style.display="none";const t=document.createElement("div");t.className="guide-header",t.innerHTML=`
            <h2>觀星模擬器 — 操作說明書 & 天文指南</h2>
            <button class="close-btn" id="close-guide">&times;</button>
        `,e.appendChild(t);const n=document.createElement("div");n.className="guide-tabs",["快速入門","完整按鍵","觀星與長曝光技巧","賺錢與升級攻略"].forEach((o,l)=>{const c=document.createElement("button");c.className=`guide-tab ${l===0?"active":""}`,c.textContent=o,c.onclick=()=>this.switchGuideTab(l),n.appendChild(c)}),e.appendChild(n);const a=document.createElement("div");a.className="guide-content",e.appendChild(a);const r=t.querySelector("#close-guide");return r.onclick=()=>this.hideGuide(),e}switchGuideTab(e){this.currentGuideTab=e,this.guideModal.querySelectorAll(".guide-tab").forEach((i,a)=>i.classList.toggle("active",a===e));const n=this.guideModal.querySelector(".guide-content");n.innerHTML="",e===0?n.innerHTML=`
                <h3>遊戲核心玩法循環</h3>
                <div class="guide-step-card">
                    <strong>1. 走向望遠鏡觀星：</strong>
                    出生點正前方圓台就是望遠鏡。走上前按下 <span class="key-hint">E</span> 鍵即可直接進入望遠鏡觀星目鏡視角。
                </div>
                <div class="guide-step-card">
                    <strong>2. 尋找與識別天體：</strong>
                    在望遠鏡中，使用 <strong>滑鼠左鍵拖曳</strong> 或 <strong>方向鍵</strong> 轉動赤道儀瞄準星空。瞄準到天體時，頂部會顯示如 <em>M31 仙女座星系</em>、<em>天狼星</em>。使用 <strong>滑鼠滾輪</strong> 可大幅度放大拉近視角。使用 <strong>滑鼠右鍵拖曳</strong> 可進行超精細微調。
                </div>
                <div class="guide-step-card">
                    <strong>3. 拍攝天體照片：</strong>
                    按下 <span class="key-hint">Space 空白鍵</span> 開始曝光。深空星雲與暗星系建議長曝光 <strong>15秒 ~ 60秒</strong>，曝光越足色彩越鮮豔、評級（S/A/B）越高！
                </div>
                <div class="guide-step-card">
                    <strong>4. 進入工作室賣照片賺錢：</strong>
                    按 <span class="key-hint">Esc</span> 退出望遠鏡，走向左後方的小木屋按下 <span class="key-hint">F</span> 進入工作室，一鍵出售相片賺取豐厚報酬！
                </div>
                <div class="guide-step-card">
                    <strong>5. 升級裝備與解鎖全球勝地：</strong>
                    在工作室中升級口徑更大的望遠鏡（可看清暗弱星雲），並按 <span class="key-hint">L</span> 解鎖夏威夷茂納凱亞、智利阿塔卡馬等 6 大世界頂級暗空公園！
                </div>
            `:e===1?n.innerHTML=`
                <h3>鍵盤與滑鼠快捷鍵清單</h3>
                <table class="key-table">
                    <thead>
                        <tr><th>按鍵</th><th>功能描述</th><th>適用模式</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><span class="key-hint">W</span> <span class="key-hint">A</span> <span class="key-hint">S</span> <span class="key-hint">D</span></td><td>前後左右移動角色（點擊畫面鎖定滑鼠視角）</td><td>第一人稱漫遊</td></tr>
                        <tr><td><span class="key-hint">Shift</span> + 移動</td><td>奔跑加速</td><td>第一人稱漫遊</td></tr>
                        <tr><td><span class="key-hint">按住滑鼠右鍵</span></td><td>手持 8x42 雙筒望遠鏡（7° 廣重視野巡天）</td><td>第一人稱漫遊</td></tr>
                        <tr><td><span class="key-hint">E</span></td><td>靠近望遠鏡時進入 / 望遠鏡模式下切換曝光秒數</td><td>全域</td></tr>
                        <tr><td><span class="key-hint">F</span></td><td>靠近小木屋時進入工作室（照片庫、燈箱查看與商店）</td><td>漫遊模式</td></tr>
                        <tr><td><span class="key-hint">G</span></td><td>開啟「觀測圖鑑 & 任務劇情日誌」</td><td>全域</td></tr>
                        <tr><td><span class="key-hint">滑鼠移動 / 方向鍵</span></td><td>水平 (方位角) 與仰角指向星空（附電機音效）</td><td>望遠鏡模式</td></tr>
                        <tr><td><span class="key-hint">滑鼠右鍵拖曳</span></td><td>0.25x 精細微調鎖定目標</td><td>望遠鏡模式</td></tr>
                        <tr><td><span class="key-hint">滑鼠滾輪</span></td><td>光學變焦縮放（Zoom In / Zoom Out）</td><td>望遠鏡模式</td></tr>
                        <tr><td><span class="key-hint">Space (空白鍵)</span></td><td>自由長曝光（點擊開始，再次點擊或按空白鍵完成）</td><td>望遠鏡模式</td></tr>
                        <tr><td><span class="key-hint">Esc</span></td><td>退出望遠鏡 / 退出工作室返回漫遊</td><td>全域</td></tr>
                        <tr><td><span class="key-hint">1</span> ~ <span class="key-hint">5</span> / <span class="key-hint">P</span></td><td>時間流速 (1x / 10x / 60x / 300x / 1000x / 暫停)</td><td>全域</td></tr>
                        <tr><td><span class="key-hint">R</span> 或 <span class="key-hint">T</span></td><td>開啟「時間控制與時空倒流中心」</td><td>全域</td></tr>
                        <tr><td><span class="key-hint">L</span></td><td>開啟「全球觀測地點選擇器」</td><td>全域</td></tr>
                        <tr><td><span class="key-hint">C</span></td><td>開啟 / 關閉 20+ 星座連線</td><td>全域</td></tr>
                        <tr><td><span class="key-hint">M</span></td><td>一鍵靜音 / 開啟音效混音面板</td><td>全域</td></tr>
                        <tr><td><span class="key-hint">U</span></td><td>一鍵切換「無 UI 沉浸觀星模式」</td><td>全域</td></tr>
                        <tr><td><span class="key-hint">H</span></td><td>開啟 / 關閉「操作說明書與觀星指南」</td><td>全域</td></tr>
                    </tbody>
                </table>
            `:e===2?n.innerHTML=`
                <h3>為什麼需要「長曝光 (Long Exposure)」？</h3>
                <p>人類肉眼在夜間感光能力有限，許多深空天體（如梅西耶星雲、暗星系旋臂）在即時目鏡中看起來只是微弱的灰白色霧狀塊。</p>
                <div class="guide-step-card">
                    <strong>光子累積疊加機制：</strong>
                    在望遠鏡中按下空白鍵開始長曝光時，光學感光元件會持續收集光子，原本暗淡的星雲會逐漸顯現出鮮豔的粉紅發射線（H-alpha）與藍色反射星雲色彩！
                </div>
                <div class="guide-step-card">
                    <strong>照片品質評級與重複拍攝懲罰：</strong>
                    照片會根據 <strong>曝光充足度 + 當前天氣 + 地點光害 + 目標難度</strong> 自動評分（S / A / B / C / D 級）。<br>
                    <strong>注意：</strong>同一個天體重複拍攝，市場收購價會隨次數遞減（第1張 100%、第2張 60%、第3張 25%、第4張起飽和 $0）。多探索不同天體才是發家致富之道！
                </div>
            `:e===3&&(n.innerHTML=`
                <h3>望遠鏡升級鏈與口徑解析力</h3>
                <table class="key-table">
                    <thead>
                        <tr><th>階級與名稱</th><th>口徑/極限星等</th><th>最小視場</th><th>升級價格</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>Tier 1 入門折射鏡</strong></td><td>60mm / 10.0等</td><td>2.5° (~24x)</td><td>初始自帶 ($0)</td></tr>
                        <tr><td><strong>Tier 2 中階牛頓反射鏡</strong></td><td>150mm / 12.0等</td><td>1.0° (~60x)</td><td>$500</td></tr>
                        <tr><td><strong>Tier 3 施密特-卡塞格林</strong></td><td>200mm / 13.5等</td><td>0.5° (~120x)</td><td>$2,000</td></tr>
                        <tr><td><strong>Tier 4 高階 APO 複消色差</strong></td><td>130mm / 12.5等</td><td>0.8° (~75x)</td><td>$3,500</td></tr>
                        <tr><td><strong>Tier 5 天文台級 RC 鏡</strong></td><td>350mm / 15.0等</td><td>0.2° (~300x)</td><td>$8,000</td></tr>
                    </tbody>
                </table>
                <h3 style="margin-top:16px;">快速發家致富秘訣</h3>
                <p>1. 初始階段先在合歡山拍攝 <strong>M31 仙女座星系</strong> 與 <strong>M42 獵戶星雲</strong>（長曝光 30s 可獲 A/S 級照片，每張 $300~$600）。</p>
                <p>2. 賺取 $500 後立即前往工作室升級 <strong>Tier 2 牛頓反射鏡</strong>，進光量提升 6 倍，可拍攝更多暗淡梅西耶星雲！</p>
            `)}setupKeyboardListeners(){window.addEventListener("keydown",e=>{te.getState().gameMode!=="studio"&&(e.key.toLowerCase()==="l"?this.locationModal.style.display==="none"?this.showLocationSelector():this.hideLocationSelector():e.key.toLowerCase()==="r"||e.key.toLowerCase()==="t"?this.timeReversalPanel.style.display==="none"?this.showTimeReversal():this.hideTimeReversal():e.key.toLowerCase()==="h"||e.key==="?"?this.guideModal.style.display==="none"||this.guideModal.style.display===""?this.showGuide():this.hideGuide():e.code==="Escape"&&(this.guideModal.style.display!=="none"&&this.hideGuide(),this.locationModal.style.display!=="none"&&this.hideLocationSelector(),this.timeReversalPanel.style.display!=="none"&&this.hideTimeReversal()))})}showGuide(){this.switchGuideTab(this.currentGuideTab),this.guideModal.style.display="flex"}hideGuide(){this.guideModal.style.display="none"}showLocationSelector(){const e=te.getState();this.locationModal.innerHTML=`
            <div class="location-list">
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">
                    <h2 style="font-size:18px;color:#fff;">選擇全球觀測地點</h2>
                    <button class="close-btn" id="close-loc">&times;</button>
                </div>
                <div class="locations-container"></div>
            </div>
        `;const t=this.locationModal.querySelector(".locations-container"),n=this.locationModal.querySelector("#close-loc");n.onclick=()=>this.hideLocationSelector(),Ks.forEach(i=>{const a=e.unlockedLocations?.includes(i.id)||i.id===Ks[0].id,r=e.currentLocation?.id===i.id,o=document.createElement("div");if(o.className=`location-card ${r?"current":""} ${a?"":"locked"}`,o.innerHTML=`
                <h3>${i.name} (${i.nameEn}) ${r?"（當前位置）":""}</h3>
                <p>經緯度: ${i.latitude.toFixed(2)}°, ${i.longitude.toFixed(2)}° | 海拔: ${i.altitude}m</p>
                <p>夜空光害等級: ${(i.lightPollution*100).toFixed(0)}%</p>
                <p class="desc">${i.description}</p>
            `,a){if(!r){const l=document.createElement("button");l.textContent="前往此處觀星",l.onclick=()=>{e.setLocation(i),this.hideLocationSelector()},o.appendChild(l)}}else{const l=document.createElement("button");l.textContent="解鎖此地點 ($500)",l.onclick=()=>{e.money>=500?(e.spendMoney(500),e.unlockLocation(i.id),this.showLocationSelector()):alert("金錢不足！需要 $500 解鎖新觀測站")},o.appendChild(l)}t.appendChild(o)}),this.locationModal.style.display="flex"}hideLocationSelector(){this.locationModal.style.display="none"}showTimeReversal(){const e=te.getState(),t=e.currentTime,n=t.toLocaleString("zh-TW",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}),i=t.getFullYear(),a=String(t.getMonth()+1).padStart(2,"0"),r=String(t.getDate()).padStart(2,"0"),o=`${i}-${a}-${r}`,l=String(t.getHours()).padStart(2,"0"),c=String(t.getMinutes()).padStart(2,"0"),d=`${l}:${c}`,h=t.getHours();let u="觀星夜";h>=6&&h<17?u="白晝":h>=17&&h<19?u="黃昏":h>=5&&h<6&&(u="黎明"),this.timeReversalPanel.innerHTML=`
            <div class="time-modal-header">
                <h3>日期與時間穿梭控制中心</h3>
                <button class="close-btn" id="close-time">&times;</button>
            </div>

            <div class="current-time-box">
                <div class="time-str">${n}</div>
                <div class="phase-str">${u} · 隨意穿梭時空與四季星空</div>
            </div>

            <div style="font-size:12px;color:#38bdf8;margin-bottom:6px;font-weight:600;">自訂日期與時刻</div>
            <div class="date-picker-row">
                <input type="date" id="input-custom-date" class="time-input-field" value="${o}">
                <input type="time" id="input-custom-time" class="time-input-field" value="${d}">
                <button id="btn-apply-custom-date" class="apply-date-btn">設定天象</button>
            </div>

            <div style="font-size:12px;color:#94a3b8;margin:12px 0 6px 0;font-weight:600;">日期與年份跨度跳轉</div>
            <div class="time-btn-grid" style="grid-template-columns: repeat(6, 1fr);">
                <button class="time-step-btn" id="btn-sub-1y">-1年</button>
                <button class="time-step-btn" id="btn-sub-30d">-30天</button>
                <button class="time-step-btn" id="btn-sub-1d">-1天</button>
                <button class="time-step-btn" id="btn-add-1d">+1天</button>
                <button class="time-step-btn" id="btn-add-30d">+30天</button>
                <button class="time-step-btn" id="btn-add-1y">+1年</button>
            </div>

            <div style="font-size:12px;color:#94a3b8;margin:10px 0 6px 0;font-weight:600;">四季著名星空一鍵跳轉</div>
            <div class="time-preset-grid" style="grid-template-columns: repeat(4, 1fr); margin-bottom: 12px;">
                <button class="preset-btn" id="season-spring" title="4月15日 21:00 · 北斗七星與大角星">春季星空</button>
                <button class="preset-btn" id="season-summer" title="7月15日 21:00 · 夏季大三角與璀璨銀河">夏季銀河</button>
                <button class="preset-btn" id="season-autumn" title="10月15日 21:00 · 飛馬座與仙女座星系">秋季仙女</button>
                <button class="preset-btn" id="season-winter" title="1月15日 21:00 · 獵戶座與冬季大三角">冬季獵戶</button>
            </div>

            <div style="font-size:12px;color:#94a3b8;margin:10px 0 6px 0;font-weight:600;">當日時刻微調與跳轉</div>
            <div class="time-btn-grid" style="margin-bottom: 8px;">
                <button class="time-step-btn" id="btn-sub-6h">-6小時</button>
                <button class="time-step-btn" id="btn-sub-1h">-1小時</button>
                <button class="time-step-btn" id="btn-add-1h">+1小時</button>
                <button class="time-step-btn" id="btn-add-6h">+6小時</button>
            </div>
            <div class="time-preset-grid" style="margin-bottom: 14px;">
                <button class="preset-btn" id="preset-dawn">黎明 (05:30)</button>
                <button class="preset-btn" id="preset-noon">正午 (12:00)</button>
                <button class="preset-btn" id="preset-dusk">日落 (18:30)</button>
                <button class="preset-btn" id="preset-night">初夜 (21:00)</button>
                <button class="preset-btn" id="preset-midnight" style="grid-column: span 2;">最佳深空觀測 (01:00)</button>
            </div>

            <button class="reset-realtime-btn" id="btn-reset-realtime">
                <span>一鍵回到目前現實時間</span>
            </button>
        `;const p=this.timeReversalPanel.querySelector("#close-time");p.onclick=()=>this.hideTimeReversal();const g=this.timeReversalPanel.querySelector("#input-custom-date"),v=this.timeReversalPanel.querySelector("#input-custom-time"),m=this.timeReversalPanel.querySelector("#btn-apply-custom-date"),f=()=>{if(!g.value)return;const[_,L,C]=g.value.split("-").map(Number),[w,R]=(v.value||"21:00").split(":").map(Number),S=new Date(_,L-1,C,w,R,0);e.setTime(S),this.showTimeReversal()};m.onclick=f,g.onchange=f,v.onchange=f,this.timeReversalPanel.querySelector("#btn-sub-1y").addEventListener("click",()=>{e.advanceTimeYears(-1),this.showTimeReversal()}),this.timeReversalPanel.querySelector("#btn-sub-30d").addEventListener("click",()=>{e.advanceTimeDays(-30),this.showTimeReversal()}),this.timeReversalPanel.querySelector("#btn-sub-1d").addEventListener("click",()=>{e.advanceTimeDays(-1),this.showTimeReversal()}),this.timeReversalPanel.querySelector("#btn-add-1d").addEventListener("click",()=>{e.advanceTimeDays(1),this.showTimeReversal()}),this.timeReversalPanel.querySelector("#btn-add-30d").addEventListener("click",()=>{e.advanceTimeDays(30),this.showTimeReversal()}),this.timeReversalPanel.querySelector("#btn-add-1y").addEventListener("click",()=>{e.advanceTimeYears(1),this.showTimeReversal()});const x=(_,L)=>{const C=e.currentTime.getFullYear(),w=new Date(C,_,L,21,0,0);e.setTime(w),this.showTimeReversal()};this.timeReversalPanel.querySelector("#season-spring").addEventListener("click",()=>x(3,15)),this.timeReversalPanel.querySelector("#season-summer").addEventListener("click",()=>x(6,15)),this.timeReversalPanel.querySelector("#season-autumn").addEventListener("click",()=>x(9,15)),this.timeReversalPanel.querySelector("#season-winter").addEventListener("click",()=>x(0,15)),this.timeReversalPanel.querySelector("#btn-sub-6h").addEventListener("click",()=>{e.reverseTime(6),this.showTimeReversal()}),this.timeReversalPanel.querySelector("#btn-sub-1h").addEventListener("click",()=>{e.reverseTime(1),this.showTimeReversal()}),this.timeReversalPanel.querySelector("#btn-add-1h").addEventListener("click",()=>{e.advanceTimeHours(1),this.showTimeReversal()}),this.timeReversalPanel.querySelector("#btn-add-6h").addEventListener("click",()=>{e.advanceTimeHours(6),this.showTimeReversal()});const E=(_,L=0)=>{const C=new Date(e.currentTime);C.setHours(_,L,0,0),e.setTime(C),this.showTimeReversal()};this.timeReversalPanel.querySelector("#preset-dawn").addEventListener("click",()=>E(5,30)),this.timeReversalPanel.querySelector("#preset-noon").addEventListener("click",()=>E(12,0)),this.timeReversalPanel.querySelector("#preset-dusk").addEventListener("click",()=>E(18,30)),this.timeReversalPanel.querySelector("#preset-night").addEventListener("click",()=>E(21,0)),this.timeReversalPanel.querySelector("#preset-midnight").addEventListener("click",()=>E(1,0)),this.timeReversalPanel.querySelector("#btn-reset-realtime").addEventListener("click",()=>{e.resetToRealTime(),this.showTimeReversal()}),this.timeReversalPanel.style.display="block"}hideTimeReversal(){this.timeReversalPanel.style.display="none"}update(e){}dispose(){this.unsubscribe(),this.locationModal.remove(),this.timeReversalPanel.remove(),this.guideModal.remove()}}class H0{constructor(){this.isVisible=!1,this.currentCategory="all",this.searchQuery="",this.updateInterval=null,this.container=document.createElement("div"),this.container.className="finder-panel",this.container.style.display="none",document.body.appendChild(this.container),document.addEventListener("keydown",e=>{e.code==="KeyF"||e.key.toLowerCase()==="f"?te.getState().gameMode===we.Telescope&&(this.toggle(),e.stopPropagation()):e.code==="Escape"&&this.isVisible&&(this.hide(),e.stopPropagation())})}toggle(){this.isVisible?this.hide():this.show()}show(){this.isVisible=!0,this.container.style.display="flex",document.pointerLockElement&&document.exitPointerLock(),this.render(),this.updateInterval||(this.updateInterval=setInterval(()=>{this.isVisible&&this.updateDistancesOnly()},1e3))}hide(){this.isVisible=!1,this.container.style.display="none",this.updateInterval&&(clearInterval(this.updateInterval),this.updateInterval=null)}get visible(){return this.isVisible}getTargets(){const e=te.getState(),t=e.telescopeRa,n=e.telescopeDec,i=e.currentLocation?.latitude??24.1,a=e.currentLocation?.longitude??121.2,r=e.currentTime,o=[];for(const c of Ws){const d=e.planets?.find(v=>v.name.toLowerCase().includes(c.name.toLowerCase())),h=d?.ra??0,u=d?.dec??0,p=this.calcAngularDistance(t,n,h,u),g=Zs({ra:h,dec:u},i,a,r);o.push({id:c.id,name:c.name,commonName:c.commonName,type:"planet",typeName:c.type,ra:h,dec:u,magnitude:c.magnitude,angularDist:p,currentAlt:g.currentAltitude,isVisibleSky:g.isCurrentlyVisible})}const l={galaxy:"星系",nebula:"發射星雲",cluster:"星團",planetary_nebula:"行星狀星雲"};for(const c of Sn){const d=this.calcAngularDistance(t,n,c.ra,c.dec),h=Zs(c,i,a,r);o.push({id:c.id,name:c.name,commonName:c.commonName,type:c.type,typeName:l[c.type]||c.type,ra:c.ra,dec:c.dec,magnitude:c.magnitude,angularDist:d,currentAlt:h.currentAltitude,isVisibleSky:h.isCurrentlyVisible})}return o}calcAngularDistance(e,t,n,i){const a=e*Math.PI/12,r=t*Math.PI/180,o=n*Math.PI/12,l=i*Math.PI/180,c=a-o,d=Math.sin(r)*Math.sin(l)+Math.cos(r)*Math.cos(l)*Math.cos(c);return Math.acos(Math.max(-1,Math.min(1,d)))*180/Math.PI}render(){const e=te.getState(),t=(e.accessories||[]).some(c=>c.id==="mount_goto"&&c.owned),n=e.customTrackedDsoId,i=this.getTargets();let a=i;if(this.currentCategory==="in_fov"){const c=e.currentFov;a=i.filter(d=>d.angularDist<=c/2)}else this.currentCategory!=="all"&&(a=i.filter(c=>c.type===this.currentCategory));if(this.searchQuery.trim()){const c=this.searchQuery.trim().toLowerCase();a=a.filter(d=>d.id.toLowerCase().includes(c)||d.name.toLowerCase().includes(c)||d.commonName.toLowerCase().includes(c)||d.typeName.toLowerCase().includes(c))}a.sort((c,d)=>c.isVisibleSky&&!d.isVisibleSky?-1:!c.isVisibleSky&&d.isVisibleSky?1:c.angularDist-d.angularDist),this.container.innerHTML=`
            <div class="finder-header">
                <div class="finder-title-row">
                    <span class="finder-badge">ELECTRONIC FINDER SCOPE</span>
                    <h3>電子尋星儀系統</h3>
                    <span class="finder-goto-tag ${t?"active":""}">
                        ${t?"GoTo 自動導星系統 [就緒]":"手動導星模式 (未配備 GoTo)"}
                    </span>
                    <button class="close-btn" id="finder-close-btn" title="關閉 [ESC]">&times;</button>
                </div>
                <div class="finder-search-bar">
                    <input type="text" id="finder-search-input" placeholder="搜尋天體編號或名稱 (如 M42, 木星, 仙女座...)" value="${this.searchQuery}"/>
                </div>
                <div class="finder-category-tabs">
                    <button class="finder-tab ${this.currentCategory==="all"?"active":""}" data-cat="all">全部天體</button>
                    <button class="finder-tab ${this.currentCategory==="in_fov"?"active":""}" data-cat="in_fov">當前視野內</button>
                    <button class="finder-tab ${this.currentCategory==="planet"?"active":""}" data-cat="planet">行星</button>
                    <button class="finder-tab ${this.currentCategory==="nebula"?"active":""}" data-cat="nebula">星雲</button>
                    <button class="finder-tab ${this.currentCategory==="galaxy"?"active":""}" data-cat="galaxy">星系</button>
                    <button class="finder-tab ${this.currentCategory==="cluster"?"active":""}" data-cat="cluster">星團</button>
                </div>
            </div>
            <div class="finder-list" id="finder-items-list">
                ${a.length===0?'<div class="finder-empty">未搜尋到相符的天體目標</div>':""}
                ${a.map(c=>{const d=n===c.id||n===c.name,h=c.currentAlt>=0?`空中仰角 +${Math.round(c.currentAlt)}°`:`地平線下 (${Math.round(c.currentAlt)}°)`,u=c.isVisibleSky?"#34d399":"#94a3b8",p=c.angularDist.toFixed(1);return`
                        <div class="finder-card ${d?"tracking":""} ${c.isVisibleSky?"sky-visible":"sky-hidden"}">
                            <div class="finder-card-left">
                                <div class="finder-card-tags">
                                    <span class="f-badge-id">${c.id}</span>
                                    <span class="f-badge-type">${c.typeName}</span>
                                    <span class="f-badge-mag">星等 ${c.magnitude}</span>
                                </div>
                                <div class="finder-card-name">${c.commonName||c.name} <span class="f-en-name">${c.name}</span></div>
                                <div class="finder-card-coords">
                                    <span>赤經 ${c.ra.toFixed(2)}h · 赤緯 ${c.dec.toFixed(1)}°</span>
                                    <span style="color:${u}; font-weight:500;"> · ${h}</span>
                                </div>
                            </div>
                            <div class="finder-card-right">
                                <div class="finder-dist-box">
                                    <span class="f-dist-label">角距離</span>
                                    <span class="f-dist-val">${p}°</span>
                                </div>
                                <div class="finder-card-btns">
                                    <button class="f-btn track-btn ${d?"active":""}" data-id="${c.id}" data-name="${c.name}">
                                        ${d?"取消鎖定":"鎖定導引"}
                                    </button>
                                    <button class="f-btn goto-btn ${t?"ready":"disabled"}" data-id="${c.id}" data-ra="${c.ra}" data-dec="${c.dec}" data-name="${c.commonName||c.name}">
                                        ${t?"GoTo 導向":"需 GoTo 儀"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    `}).join("")}
            </div>
        `;const r=this.container.querySelector("#finder-close-btn");r&&(r.onclick=()=>this.hide());const o=this.container.querySelector("#finder-search-input");o&&(o.oninput=c=>{this.searchQuery=c.target.value,this.renderListOnly()}),this.container.querySelectorAll(".finder-tab").forEach(c=>{c.addEventListener("click",d=>{this.currentCategory=d.target.getAttribute("data-cat")||"all",this.render()})}),this.bindCardButtons()}updateDistancesOnly(){const e=this.getTargets(),t=te.getState(),n=t.telescopeRa,i=t.telescopeDec;e.forEach(a=>{const r=this.container.querySelector(`.track-btn[data-id="${a.id}"]`);if(r){const o=r.closest(".finder-card");if(o){const l=o.querySelector(".f-dist-val");if(l){const c=this.calcAngularDistance(n,i,a.ra,a.dec);l.textContent=`${c.toFixed(1)}°`}}}})}renderListOnly(){const e=this.container.querySelector("#finder-items-list");if(!e){this.render();return}const t=te.getState(),n=(t.accessories||[]).some(o=>o.id==="mount_goto"&&o.owned),i=t.customTrackedDsoId,a=this.getTargets();let r=a;if(this.currentCategory==="in_fov"){const o=t.currentFov;r=a.filter(l=>l.angularDist<=o/2)}else this.currentCategory!=="all"&&(r=a.filter(o=>o.type===this.currentCategory));if(this.searchQuery.trim()){const o=this.searchQuery.trim().toLowerCase();r=r.filter(l=>l.id.toLowerCase().includes(o)||l.name.toLowerCase().includes(o)||l.commonName.toLowerCase().includes(o)||l.typeName.toLowerCase().includes(o))}r.sort((o,l)=>o.isVisibleSky&&!l.isVisibleSky?-1:!o.isVisibleSky&&l.isVisibleSky?1:o.angularDist-l.angularDist),e.innerHTML=`
            ${r.length===0?'<div class="finder-empty">未搜尋到相符的天體目標</div>':""}
            ${r.map(o=>{const l=i===o.id||i===o.name,c=o.currentAlt>=0?`空中仰角 +${Math.round(o.currentAlt)}°`:`地平線下 (${Math.round(o.currentAlt)}°)`,d=o.isVisibleSky?"#34d399":"#94a3b8",h=o.angularDist.toFixed(1);return`
                    <div class="finder-card ${l?"tracking":""} ${o.isVisibleSky?"sky-visible":"sky-hidden"}">
                        <div class="finder-card-left">
                            <div class="finder-card-tags">
                                <span class="f-badge-id">${o.id}</span>
                                <span class="f-badge-type">${o.typeName}</span>
                                <span class="f-badge-mag">星等 ${o.magnitude}</span>
                            </div>
                            <div class="finder-card-name">${o.commonName||o.name} <span class="f-en-name">${o.name}</span></div>
                            <div class="finder-card-coords">
                                <span>赤經 ${o.ra.toFixed(2)}h · 赤緯 ${o.dec.toFixed(1)}°</span>
                                <span style="color:${d}; font-weight:500;"> · ${c}</span>
                            </div>
                        </div>
                        <div class="finder-card-right">
                            <div class="finder-dist-box">
                                <span class="f-dist-label">角距離</span>
                                <span class="f-dist-val">${h}°</span>
                            </div>
                            <div class="finder-card-btns">
                                <button class="f-btn track-btn ${l?"active":""}" data-id="${o.id}" data-name="${o.name}">
                                    ${l?"取消鎖定":"鎖定導引"}
                                </button>
                                <button class="f-btn goto-btn ${n?"ready":"disabled"}" data-id="${o.id}" data-ra="${o.ra}" data-dec="${o.dec}" data-name="${o.commonName||o.name}">
                                    ${n?"GoTo 導向":"需 GoTo 儀"}
                                </button>
                            </div>
                        </div>
                    </div>
                `}).join("")}
        `,this.bindCardButtons()}bindCardButtons(){this.container.querySelectorAll(".track-btn").forEach(n=>{n.addEventListener("click",i=>{i.stopPropagation();const a=n.getAttribute("data-id"),r=n.getAttribute("data-name"),o=te.getState(),l=o.customTrackedDsoId;l===a||l===r?(o.setCustomTrackedDso(null),document.dispatchEvent(new CustomEvent("show-notification",{detail:{message:"已取消尋星鎖定",type:"info"}}))):(o.setCustomTrackedDso(a),document.dispatchEvent(new CustomEvent("show-notification",{detail:{message:`已鎖定目標: ${a}！鏡筒準星將顯示導向指針`,type:"success"}})),this.hide()),this.render()})}),this.container.querySelectorAll(".goto-btn").forEach(n=>{n.addEventListener("click",i=>{if(i.stopPropagation(),!(te.getState().accessories||[]).some(c=>c.id==="mount_goto"&&c.owned)){document.dispatchEvent(new CustomEvent("show-notification",{detail:{message:"尚未裝備「GoTo 電子自動尋星系統」，請先至工作室商店購買升級！",type:"warning"}}));return}const r=parseFloat(n.getAttribute("data-ra")||"0"),o=parseFloat(n.getAttribute("data-dec")||"0"),l=n.getAttribute("data-name")||"";document.dispatchEvent(new CustomEvent("goto-target",{detail:{ra:r,dec:o,targetName:l}})),this.hide()})})}dispose(){this.updateInterval&&clearInterval(this.updateInterval),this.container.remove()}}class W0{constructor(){this.clock=new Zl(!1),this.isGoToSlewing=!1,this.goToStartRa=0,this.goToStartDec=0,this.goToTargetRa=0,this.goToTargetDec=0,this.goToStartTime=0,this.goToDuration=1800,this.goToTargetName="",this.isRunning=!1,this.sunElevation=0,this.animationFrameId=0,this.savedWalkPos=new P(0,1.7,0),this.savedWalkRot=new Gt,this.lastIdentifiedTarget=null,this.animate=()=>{this.animationFrameId=requestAnimationFrame(this.animate);const t=Math.min(this.clock.getDelta(),.1),n=this.clock.getElapsedTime();this.update(t,n),this.render()};const e=document.getElementById("game-canvas");this.renderer=new ym({canvas:e,antialias:!0,alpha:!1,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.toneMapping=gl,this.renderer.toneMappingExposure=.9,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=pl,this.scene=new ql,this.camera=new Ot(60,window.innerWidth/window.innerHeight,.1,5e5),this.camera.position.set(0,1.7,0),window.addEventListener("resize",this.onResize.bind(this))}async init(e){e(0,"正在載入星表數據..."),this.starField=new Om(this.scene),await this.starField.loadStars(),e(.15,"正在建構天球..."),this.celestialSphere=new zm(this.scene),this.celestialSphere.group.add(this.starField.getStarGroup()),e(.2,"正在繪製星座..."),this.constellations=new Vm(this.celestialSphere.group),e(.25,"正在放置深空天體..."),this.deepSkyObjects=new $m(this.celestialSphere.group),e(.28,"正在計算太陽系行星與月球軌道..."),this.planetarySystem=new Zm(this.celestialSphere.group),this.starIdentifier=new Hm,e(.3,"正在初始化大氣..."),this.atmosphere=new Qm(this.scene),this.timeManager=new Jm,e(.4,"正在初始化天氣系統..."),this.weatherSystem=new e0,this.cloudLayer=new i0(this.scene),this.rainEffect=new r0(this.scene),e(.5,"正在初始化音效系統..."),this.audioManager=new o0,e(.55,"正在建構觀測場景..."),this.terrain=new g0(this.scene),this.telescopeModel=new v0(this.scene),this.studio=new y0(this.scene),e(.65,"正在初始化控制器與雙筒望遠鏡..."),this.playerController=new m0(this.camera,this.renderer.domElement,this.scene),this.binocularsMode=new L0(this.camera,this.renderer.domElement),e(.7,"正在校準望遠鏡光學..."),this.telescopeOptics=new M0,this.playerController.setOptics(this.telescopeOptics),this.longExposure=new _0(this.renderer,window.innerWidth,window.innerHeight),this.postProcessing=new P0(this.renderer,this.scene,this.camera),e(.8,"正在載入遊戲與任務系統..."),this.photoManager=new I0,this.questManager=new U0,this.economySystem=new N0,e(.85,"正在建立介面與圖鑑..."),this.hud=new F0,this.telescopeHUD=new k0,this.studioUI=new B0,this.codexUI=new O0,this.photoLightbox=new z0,this.storyDialogue=new G0,this.menuSystem=new V0,this.finderUI=new H0,this.setupInteractions(),e(1,"初始化完成！")}start(){if(this.isRunning)return;this.isRunning=!0,this.clock.start();const e=()=>{this.audioManager.init(),document.removeEventListener("click",e),document.removeEventListener("keydown",e)};document.addEventListener("click",e),document.addEventListener("keydown",e);const t=this.questManager.getNextQuest();t&&(te.getState().completedQuestIds||[]).length===0&&(te.getState().photos||[]).length===0&&setTimeout(()=>{this.storyDialogue.playIntroDialogue(t)},1500),this.animate()}update(e,t){const n=te.getState();this.timeManager.update(e);const i=n.currentTime,a=n.currentLocation;this.weatherSystem.update(e*n.timeScale);const r=this.weatherSystem.getCloudCoverage();this.sunElevation=this.atmosphere.update(i,a.latitude,a.longitude),this.timeManager.setSunElevation(this.sunElevation),this.celestialSphere.updateOrientation(a.latitude,a.longitude,i);const o=Im(n.telescopeLevel),l=n.gameMode===we.Telescope,c=l?n.currentFov:this.camera.fov,d=a.lightPollution||0;let h=4.85;l?h=o.limitingMagnitude-d*1.2:c<35?h=8.8-d*1.2:h=Math.max(3.8,4.85-d*1.2),this.starField.update(t,c,this.sunElevation,h),this.deepSkyObjects.update(c,l,h),this.planetarySystem.update(i,c,a.latitude,a.longitude);const u=this.planetarySystem.getPlanets();this.constellations.update(this.sunElevation),(!n.showConstellations||n.gameMode===we.Studio)&&this.constellations.setVisible(!1),this.cloudLayer.update(e,r,new Re(1,.5));const p=n.weather===qe.Rainy;this.rainEffect.setVisible(p),p&&this.rainEffect.update(e,this.camera.position,1);const g=this.timeManager.getSunPhase();if(this.audioManager.setAmbientForPhase(g),this.audioManager.setWeatherAudio(n.weather,r),this.telescopeModel.update(this.camera.position),this.playerController.update(e),this.binocularsMode.update(e),this.isGoToSlewing){const v=performance.now()-this.goToStartTime,m=Math.min(1,v/this.goToDuration),f=(1-Math.cos(m*Math.PI))/2;let x=this.goToTargetRa-this.goToStartRa;for(;x>12;)x-=24;for(;x<-12;)x+=24;let E=(this.goToStartRa+x*f)%24;E<0&&(E+=24);const _=Math.max(-90,Math.min(90,this.goToStartDec+(this.goToTargetDec-this.goToStartDec)*f));te.getState().setTelescopePointing(E,_),m>=1&&(this.isGoToSlewing=!1,this.hud.showNotification(`GoTo 自動導星就緒：已中心對準 ${this.goToTargetName}`,"success"))}if(n.gameMode===we.Telescope){this.camera.position.set(0,.2,0);const v=this.celestialSphere.getRaDecToVector(n.telescopeRa,n.telescopeDec);v.applyMatrix4(this.celestialSphere.group.matrixWorld);const m=this.telescopeOptics.hasAccessory("mount_eq")||this.telescopeOptics.hasAccessory("mount_goto");if(m){const x=new P(0,1,0).applyQuaternion(this.celestialSphere.group.quaternion);this.camera.up.copy(x)}else this.camera.up.set(0,1,0);this.camera.lookAt(v),this.camera.fov=n.currentFov,this.camera.updateProjectionMatrix();const f=this.starIdentifier.identify(n.telescopeRa,n.telescopeDec,n.currentFov,this.celestialSphere,u);if(this.lastIdentifiedTarget=f,n.isExposing){const x=this.telescopeOptics.getExposureGain(),E=this.telescopeOptics.getMountDriftMitigation(),_=n.timeScale||1;this.longExposure.accumulate(this.scene,this.camera,x,n.telescopeRa,n.telescopeDec,E,m,_,n.currentFov);const L=this.longExposure.getElapsedSeconds();n.updateExposureElapsed(L)}this.telescopeHUD.update(f,n.isExposing,this.longExposure.getElapsedSeconds(),this.longExposure.getSampleCount(),n.currentFov,60/n.currentFov,n.telescopeRa,n.telescopeDec)}n.gameMode===we.Walk?this.telescopeModel.isPlayerNear(this.camera.position)?this.hud.showInteractPrompt("按 E 使用望遠鏡"):this.studio.isPlayerNear(this.camera.position)?this.hud.showInteractPrompt("按 F 進入工作室"):this.hud.hideInteractPrompt():this.hud.hideInteractPrompt(),this.hud.update(n),this.hud.updateWaypoints(this.camera,this.telescopeModel.getPosition(),this.studio.getPosition()),this.hud.updateQuestTracker(this.questManager.getNextQuest())}render(){if(te.getState().gameMode===we.Telescope){const t=this.telescopeOptics.getChromaticAberration();this.postProcessing.setTelescopeMode(!0,t,this.sunElevation)}else this.postProcessing.setTelescopeMode(!1,0,this.sunElevation);this.postProcessing.render()}setupInteractions(){te.subscribe((e,t)=>{e.gameMode!==t.gameMode&&this.onModeChange(t.gameMode,e.gameMode),(e.masterVolume!==t.masterVolume||e.isMuted!==t.isMuted)&&this.audioManager.setMasterVolume(e.isMuted?0:e.masterVolume),e.ambientVolume!==t.ambientVolume&&this.audioManager.setCategory("ambient",e.ambientVolume),e.machineVolume!==t.machineVolume&&this.audioManager.setCategory("machine",e.machineVolume),e.weatherVolume!==t.weatherVolume&&this.audioManager.setCategory("weather",e.weatherVolume),e.sfxVolume!==t.sfxVolume&&this.audioManager.setCategory("sfx",e.sfxVolume)}),document.addEventListener("quest-completed",e=>{const t=e.detail.quest;this.hud.showNotification(`任務完成：${t.title}！獲得 $${t.rewards.money||0}`,"success"),this.hud.updateQuestTracker(this.questManager.getNextQuest()),this.storyDialogue.playCompleteDialogue(t,()=>{const n=this.questManager.getNextQuest();n&&setTimeout(()=>{this.storyDialogue.playIntroDialogue(n)},800)})}),document.addEventListener("play-story-dialogue",e=>{const{quest:t,mode:n}=e.detail;n==="complete"?this.storyDialogue.playCompleteDialogue(t):this.storyDialogue.playIntroDialogue(t)}),document.addEventListener("show-notification",e=>{this.hud.showNotification(e.detail.message,e.detail.type||"info")}),document.addEventListener("open-lightbox",e=>{const t=[...te.getState().photos||[]].filter(i=>!i.frameType||i.frameType==="light").sort((i,a)=>{const r=i.timestamp instanceof Date?i.timestamp.getTime():new Date(i.timestamp).getTime();return(a.timestamp instanceof Date?a.timestamp.getTime():new Date(a.timestamp).getTime())-r}),n=t.findIndex(i=>i.id===e.detail.photoId);this.photoLightbox.open(t,Math.max(0,n))}),document.addEventListener("capture-photo",()=>{const e=te.getState();if(e.gameMode===we.Telescope)if(!e.isExposing)this.longExposure.startExposure(e.currentFrameType||"light"),e.startExposure(),this.audioManager.playShutter();else{const t=this.planetarySystem.getPlanets(),i=this.telescopeHUD.getCurrentIdentifiedTarget()||this.lastIdentifiedTarget||this.starIdentifier.identify(e.telescopeRa,e.telescopeDec,e.currentFov,this.celestialSphere,t);this.finishExposure(i)}}),document.addEventListener("telescope-slew",()=>{this.audioManager.playMotor(.5)}),document.addEventListener("toggle-finder-ui",()=>{this.finderUI.toggle()}),document.addEventListener("goto-target",e=>{const{ra:t,dec:n,targetName:i}=e.detail;this.startGoToSlew(t,n,i)})}startGoToSlew(e,t,n){const i=te.getState();i.gameMode!==we.Telescope&&i.setGameMode(we.Telescope),i.setCustomTrackedDso(n),this.goToStartRa=i.telescopeRa,this.goToStartDec=i.telescopeDec,this.goToTargetRa=e,this.goToTargetDec=t,this.goToTargetName=n,this.goToStartTime=performance.now(),this.goToDuration=1800,this.isGoToSlewing=!0,this.audioManager.playMotor(2),this.hud.showNotification(`GoTo 自動導星轉向中：正在對準 ${n}...`,"info")}onModeChange(e,t){t===we.Telescope?(this.savedWalkPos.copy(this.camera.position),this.savedWalkRot.copy(this.camera.rotation),this.telescopeModel.setVisible(!1),this.terrain.setVisible(!0),this.studio.setVisible(!1),this.telescopeHUD.show()):e===we.Telescope&&(this.camera.position.copy(this.savedWalkPos),this.camera.rotation.copy(this.savedWalkRot),this.camera.fov=60,this.camera.updateProjectionMatrix(),te.getState().setFov(60),this.telescopeModel.setVisible(!0),this.terrain.setVisible(!0),this.studio.setVisible(!0),this.telescopeHUD.hide()),t===we.Studio?this.studioUI.show():e===we.Studio&&this.studioUI.hide()}finishExposure(e){const t=te.getState(),n=this.longExposure.finishExposure();t.stopExposure();const i=e?.name||"未知星野",a=e?.type||"star_field",r=this.photoManager.capturePhoto(this.renderer,this.scene,this.camera,e?{...e,difficulty:e.difficulty||1}:{name:i,type:a,difficulty:1},n.elapsedSeconds,n.dataUrl,n.hasMotionBlur,n.totalDrift,t.currentFrameType||"light");this.audioManager.playShutter();const l={dark:"暗場校準底片",flat:"平場校準底片",bias:"偏壓校準底片",light:"天文照片"}[t.currentFrameType||"light"]||"照片";this.hud.showNotification(`${l}已儲存: ${r.targetName}（曝光 ${n.elapsedSeconds.toFixed(1)} 秒 · ${r.quality}級）`,"success")}onResize(){const e=window.innerWidth,t=window.innerHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),this.postProcessing.resize(e,t),this.longExposure.resize(e,t)}dispose(){this.isRunning=!1,cancelAnimationFrame(this.animationFrameId),this.starField.dispose(),this.deepSkyObjects.dispose(),this.planetarySystem.dispose(),this.atmosphere.dispose(),this.cloudLayer.dispose(),this.rainEffect.dispose(),this.audioManager.dispose(),this.terrain.dispose(),this.telescopeModel.dispose(),this.studio.dispose(),this.playerController.dispose(),this.binocularsMode.dispose(),this.longExposure.dispose(),this.postProcessing.dispose(),this.hud.dispose(),this.telescopeHUD.dispose(),this.studioUI.dispose(),this.codexUI.dispose(),this.photoLightbox.dispose(),this.storyDialogue.dispose(),this.menuSystem.dispose(),this.finderUI.dispose(),this.renderer.dispose()}}async function ul(){const s=document.getElementById("loader-fill"),e=document.getElementById("loader-text"),t=(n,i)=>{s&&(s.style.width=`${n}%`),e&&(e.textContent=i)};try{t(10,"正在初始化渲染引擎...");const n=new W0;t(20,"正在載入星表數據..."),await n.init((a,r)=>t(20+a*.7,r)),t(95,"準備就緒..."),await new Promise(a=>setTimeout(a,300));const i=document.getElementById("loading-screen");i&&(i.classList.add("hidden"),setTimeout(()=>i.remove(),800)),t(100,""),n.start()}catch(n){console.error("Failed to initialize game:",n);const i=document.getElementById("loader-text");i&&(i.textContent=`初始化失敗: ${n}`,i.style.color="#f44336")}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",ul):ul();
